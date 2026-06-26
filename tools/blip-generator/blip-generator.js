(function () {
  'use strict';

  var STORAGE_KEY = 'smdz-blip-generator-state-v1';

  var DEFAULT_STATE = {
    name: 'Example Blip',
    spriteId: '280',
    colorId: '5',
    scale: '0.8',
    display: '4',
    alpha: '255',
    shortRange: true,
    x: '0.0',
    y: '0.0',
    z: '0.0',
    remember: true
  };

  var SPRITE_LIBRARY = window.SMDZ_BLIP_SPRITES || {
    1: { name: 'radar_standard', displayName: 'Standard', asset: '' },
    2: { name: 'radar_waypoint', displayName: 'Waypoint', asset: '' },
    3: { name: 'radar_race', displayName: 'Race', asset: '' },
    4: { name: 'radar_car', displayName: 'Car', asset: '' },
    5: { name: 'radar_house', displayName: 'House', asset: '' },
    6: { name: 'radar_garage', displayName: 'Garage', asset: '' },
    7: { name: 'radar_shop', displayName: 'Shop', asset: '' },
    8: { name: 'radar_police', displayName: 'Police', asset: '' },
    9: { name: 'radar_hospital', displayName: 'Hospital', asset: '' },
    10: { name: 'radar_bank', displayName: 'Bank', asset: '' },
    40: { name: 'radar_mission', displayName: 'Mission', asset: '' },
    50: { name: 'radar_store', displayName: 'Store', asset: '' },
    84: { name: 'radar_shop', displayName: 'Shop', asset: '' },
    85: { name: 'radar_apartment', displayName: 'Apartment', asset: '' },
    161: { name: 'radar_vehicle', displayName: 'Vehicle', asset: '' },
    280: { name: 'radar_friend', displayName: 'Friend', asset: '' },
    291: { name: 'radar_activity', displayName: 'Activity', asset: '' }
  };

  var COLOR_LIBRARY = {
    0: { name: 'White', hex: '#f5f5f5' },
    1: { name: 'Red', hex: '#ef4444' },
    2: { name: 'Green', hex: '#22c55e' },
    3: { name: 'Blue', hex: '#3b82f6' },
    4: { name: 'Yellow', hex: '#eab308' },
    5: { name: 'Gold', hex: '#f5c242' },
    6: { name: 'Orange', hex: '#f97316' },
    7: { name: 'Purple', hex: '#a855f7' },
    8: { name: 'Pink', hex: '#ec4899' },
    9: { name: 'Sky', hex: '#38bdf8' },
    10: { name: 'Cyan', hex: '#22d3ee' },
    11: { name: 'Lime', hex: '#84cc16' },
    12: { name: 'Gray', hex: '#94a3b8' },
    13: { name: 'Black', hex: '#0f172a' },
    14: { name: 'Brown', hex: '#92400e' },
    15: { name: 'Amber', hex: '#f59e0b' },
    16: { name: 'Teal', hex: '#14b8a6' },
    17: { name: 'Rose', hex: '#fb7185' },
    18: { name: 'Indigo', hex: '#6366f1' }
  };

  function cloneDefaultState() {
    return {
      name: DEFAULT_STATE.name,
      spriteId: DEFAULT_STATE.spriteId,
      colorId: DEFAULT_STATE.colorId,
      scale: DEFAULT_STATE.scale,
      display: DEFAULT_STATE.display,
      alpha: DEFAULT_STATE.alpha,
      shortRange: DEFAULT_STATE.shortRange,
      x: DEFAULT_STATE.x,
      y: DEFAULT_STATE.y,
      z: DEFAULT_STATE.z,
      remember: DEFAULT_STATE.remember
    };
  }

  function getToolRoot() {
    var contentRoot = document.querySelector('.markdown-section');
    if (!contentRoot || contentRoot.dataset.blipGeneratorBound === '1') {
      return null;
    }

    return contentRoot.querySelector('#blip-generator-tool');
  }

  function hasLocalStorage() {
    try {
      return typeof window.localStorage !== 'undefined';
    } catch (error) {
      return false;
    }
  }

  function readStoredState() {
    if (!hasLocalStorage()) {
      return null;
    }

    try {
      var rawValue = window.localStorage.getItem(STORAGE_KEY);
      if (!rawValue) {
        return null;
      }

      var parsed = JSON.parse(rawValue);
      if (!parsed || typeof parsed !== 'object') {
        return null;
      }

      return parsed;
    } catch (error) {
      return null;
    }
  }

  function writeStoredState(state) {
    if (!hasLocalStorage()) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      return;
    }
  }

  function clearStoredState() {
    if (!hasLocalStorage()) {
      return;
    }

    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      return;
    }
  }

  function escapeLuaString(value) {
    return String(value || '')
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'");
  }

  function formatLuaNumber(rawValue, forceDecimalWhenWhole) {
    var numericValue = Number(rawValue);
    if (!isFinite(numericValue)) {
      return forceDecimalWhenWhole ? '0.0' : '0';
    }

    var text = String(numericValue);
    if (forceDecimalWhenWhole && text.indexOf('.') === -1) {
      return text + '.0';
    }

    return text;
  }

  function parseIntegerField(rawValue, fieldName, minValue, maxValue) {
    var text = String(rawValue || '').trim();
    if (text === '') {
      return {
        valid: false,
        value: minValue,
        error: fieldName + ' is required.'
      };
    }

    if (!/^-?\d+$/.test(text)) {
      return {
        valid: false,
        value: minValue,
        error: fieldName + ' must be numeric.'
      };
    }

    var parsed = parseInt(text, 10);
    if (!isFinite(parsed)) {
      return {
        valid: false,
        value: minValue,
        error: fieldName + ' must be numeric.'
      };
    }

    if (typeof minValue === 'number' && parsed < minValue) {
      return {
        valid: false,
        value: minValue,
        error: fieldName + ' must be greater than or equal to ' + minValue + '.'
      };
    }

    if (typeof maxValue === 'number' && parsed > maxValue) {
      return {
        valid: false,
        value: maxValue,
        error: fieldName + ' must be less than or equal to ' + maxValue + '.'
      };
    }

    return {
      valid: true,
      value: parsed
    };
  }

  function parseFloatField(rawValue, fieldName, minExclusive) {
    var text = String(rawValue || '').trim();
    if (text === '') {
      return {
        valid: false,
        value: 0,
        error: fieldName + ' is required.'
      };
    }

    var parsed = Number(text);
    if (!isFinite(parsed)) {
      return {
        valid: false,
        value: 0,
        error: fieldName + ' must be numeric.'
      };
    }

    if (typeof minExclusive === 'number' && !(parsed > minExclusive)) {
      return {
        valid: false,
        value: minExclusive,
        error: fieldName + ' must be greater than ' + minExclusive + '.'
      };
    }

    return {
      valid: true,
      value: parsed
    };
  }

  function normalizeState(rawState) {
    var state = cloneDefaultState();
    if (!rawState || typeof rawState !== 'object') {
      return state;
    }

    if (rawState.name !== undefined) state.name = String(rawState.name);
    if (rawState.spriteId !== undefined) state.spriteId = String(rawState.spriteId);
    if (rawState.colorId !== undefined) state.colorId = String(rawState.colorId);
    if (rawState.scale !== undefined) state.scale = String(rawState.scale);
    if (rawState.display !== undefined) state.display = String(rawState.display);
    if (rawState.alpha !== undefined) state.alpha = String(rawState.alpha);
    if (rawState.shortRange !== undefined) state.shortRange = Boolean(rawState.shortRange);
    if (rawState.x !== undefined) state.x = String(rawState.x);
    if (rawState.y !== undefined) state.y = String(rawState.y);
    if (rawState.z !== undefined) state.z = String(rawState.z);
    if (rawState.remember !== undefined) state.remember = Boolean(rawState.remember);

    return state;
  }

  function getColorInfo(colorId) {
    var color = COLOR_LIBRARY[colorId];
    if (color) {
      return color;
    }

    var hue = (Number(colorId) * 37) % 360;
    if (!isFinite(hue)) {
      hue = 45;
    }

    return {
      name: 'Custom ' + colorId,
      hex: 'hsl(' + hue + ', 78%, 58%)'
    };
  }

  function getSpriteInfo(spriteId) {
    var sprite = SPRITE_LIBRARY[spriteId];
    if (sprite) {
      return sprite;
    }

    return {
      name: 'Sprite ' + spriteId,
      displayName: 'Sprite ' + spriteId,
      asset: ''
    };
  }

  function getSpriteEntries() {
    return Object.keys(SPRITE_LIBRARY)
      .map(function (key) {
        var sprite = SPRITE_LIBRARY[key] || {};
        return {
          id: Number(key),
          key: key,
          name: sprite.name || ('sprite_' + key),
          displayName: sprite.displayName || sprite.name || ('Sprite ' + key),
          asset: sprite.asset || ''
        };
      })
      .sort(function (left, right) {
        return left.id - right.id;
      });
  }

  function buildLuaCode(parsed) {
    return [
      'local blip = AddBlipForCoord(' + formatLuaNumber(parsed.x, true) + ', ' + formatLuaNumber(parsed.y, true) + ', ' + formatLuaNumber(parsed.z, true) + ')',
      '',
      'SetBlipSprite(blip, ' + parsed.spriteId + ')',
      'SetBlipDisplay(blip, ' + parsed.display + ')',
      'SetBlipScale(blip, ' + formatLuaNumber(parsed.scale, false) + ')',
      'SetBlipColour(blip, ' + parsed.colorId + ')',
      'SetBlipAlpha(blip, ' + parsed.alpha + ')',
      'SetBlipAsShortRange(blip, ' + (parsed.shortRange ? 'true' : 'false') + ')',
      '',
      "BeginTextCommandSetBlipName('STRING')",
      "AddTextComponentString('" + escapeLuaString(parsed.name) + "')",
      'EndTextCommandSetBlipName(blip)'
    ].join('\n');
  }

  function countLines(text) {
    var normalized = String(text || '');
    if (!normalized) {
      return 0;
    }

    return normalized.split(/\r\n|\r|\n/).length;
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', 'readonly');
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        var success = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (success) {
          resolve();
        } else {
          reject(new Error('Copy command failed'));
        }
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function initBlipGeneratorTool() {
    var toolRoot = getToolRoot();
    if (!toolRoot) {
      return;
    }

    var contentRoot = document.querySelector('.markdown-section');
    if (!contentRoot) {
      return;
    }

    var inputEls = {
      name: toolRoot.querySelector('#blip-generator-name'),
      spriteId: toolRoot.querySelector('#blip-generator-sprite'),
      colorId: toolRoot.querySelector('#blip-generator-color'),
      scale: toolRoot.querySelector('#blip-generator-scale'),
      display: toolRoot.querySelector('#blip-generator-display'),
      alpha: toolRoot.querySelector('#blip-generator-alpha'),
      shortRange: toolRoot.querySelector('#blip-generator-short-range'),
      x: toolRoot.querySelector('#blip-generator-x'),
      y: toolRoot.querySelector('#blip-generator-y'),
      z: toolRoot.querySelector('#blip-generator-z'),
      remember: toolRoot.querySelector('#blip-generator-remember')
    };

    var outputEls = {
      status: toolRoot.querySelector('#blip-generator-status'),
      previewName: toolRoot.querySelector('#blip-generator-preview-name'),
      previewMeta: toolRoot.querySelector('#blip-generator-preview-meta'),
      previewShortRange: toolRoot.querySelector('#blip-generator-preview-short-range'),
      previewDisplay: toolRoot.querySelector('#blip-generator-preview-display'),
      previewStage: toolRoot.querySelector('#blip-generator-preview-stage'),
      previewSprite: toolRoot.querySelector('#blip-generator-preview-sprite'),
      previewScale: toolRoot.querySelector('#blip-generator-preview-scale'),
      previewAlpha: toolRoot.querySelector('#blip-generator-preview-alpha'),
      previewCoords: toolRoot.querySelector('#blip-generator-preview-coords'),
      previewColor: toolRoot.querySelector('#blip-generator-preview-color'),
      code: toolRoot.querySelector('#blip-generator-code'),
      codeSize: toolRoot.querySelector('#blip-generator-code-size'),
      toast: toolRoot.querySelector('#blip-generator-toast')
    };

    var errorEls = {
      name: toolRoot.querySelector('#blip-generator-name-error'),
      spriteId: toolRoot.querySelector('#blip-generator-sprite-error'),
      colorId: toolRoot.querySelector('#blip-generator-color-error'),
      scale: toolRoot.querySelector('#blip-generator-scale-error'),
      display: toolRoot.querySelector('#blip-generator-display-error'),
      alpha: toolRoot.querySelector('#blip-generator-alpha-error'),
      shortRange: toolRoot.querySelector('#blip-generator-short-range-error'),
      x: toolRoot.querySelector('#blip-generator-x-error'),
      y: toolRoot.querySelector('#blip-generator-y-error'),
      z: toolRoot.querySelector('#blip-generator-z-error')
    };

    var copyCodeBtn = toolRoot.querySelector('#blip-generator-copy-code');
    var copyCoordsBtn = toolRoot.querySelector('#blip-generator-copy-coords');
    var resetBtn = toolRoot.querySelector('#blip-generator-reset');
    var spriteMenuToggleBtn = toolRoot.querySelector('#blip-generator-sprite-menu-toggle');
    var spriteMenuEl = toolRoot.querySelector('#blip-generator-sprite-menu');
    var spriteMenuCloseBtn = toolRoot.querySelector('#blip-generator-sprite-menu-close');
    var spriteSearchEl = toolRoot.querySelector('#blip-generator-sprite-search');
    var spriteListEl = toolRoot.querySelector('#blip-generator-sprite-list');
    var spriteCountEl = toolRoot.querySelector('#blip-generator-sprite-count');
    var spriteThumbEl = toolRoot.querySelector('#blip-generator-sprite-menu-thumb');
    var stepperButtons = toolRoot.querySelectorAll('[data-stepper-target]');
    var state = normalizeState(readStoredState() || DEFAULT_STATE);
    var toastTimer = null;
    var spriteEntries = getSpriteEntries();
    var spriteMenuBound = false;

    function readFormState() {
      return {
        name: inputEls.name ? inputEls.name.value : DEFAULT_STATE.name,
        spriteId: inputEls.spriteId ? inputEls.spriteId.value : DEFAULT_STATE.spriteId,
        colorId: inputEls.colorId ? inputEls.colorId.value : DEFAULT_STATE.colorId,
        scale: inputEls.scale ? inputEls.scale.value : DEFAULT_STATE.scale,
        display: inputEls.display ? inputEls.display.value : DEFAULT_STATE.display,
        alpha: inputEls.alpha ? inputEls.alpha.value : DEFAULT_STATE.alpha,
        shortRange: inputEls.shortRange ? inputEls.shortRange.checked : DEFAULT_STATE.shortRange,
        x: inputEls.x ? inputEls.x.value : DEFAULT_STATE.x,
        y: inputEls.y ? inputEls.y.value : DEFAULT_STATE.y,
        z: inputEls.z ? inputEls.z.value : DEFAULT_STATE.z,
        remember: inputEls.remember ? inputEls.remember.checked : DEFAULT_STATE.remember
      };
    }

    function writeFormState(nextState) {
      if (inputEls.name) inputEls.name.value = nextState.name;
      if (inputEls.spriteId) inputEls.spriteId.value = nextState.spriteId;
      if (inputEls.colorId) inputEls.colorId.value = nextState.colorId;
      if (inputEls.scale) inputEls.scale.value = nextState.scale;
      if (inputEls.display) inputEls.display.value = nextState.display;
      if (inputEls.alpha) inputEls.alpha.value = nextState.alpha;
      if (inputEls.shortRange) inputEls.shortRange.checked = nextState.shortRange;
      if (inputEls.x) inputEls.x.value = nextState.x;
      if (inputEls.y) inputEls.y.value = nextState.y;
      if (inputEls.z) inputEls.z.value = nextState.z;
      if (inputEls.remember) inputEls.remember.checked = nextState.remember;
    }

    function showToast(message, isError) {
      if (!outputEls.toast) {
        return;
      }

      if (toastTimer) {
        window.clearTimeout(toastTimer);
        toastTimer = null;
      }

      outputEls.toast.textContent = message;
      outputEls.toast.classList.toggle('is-error', !!isError);
      outputEls.toast.classList.add('is-visible');

      toastTimer = window.setTimeout(function () {
        outputEls.toast.classList.remove('is-visible');
      }, 1800);
    }

    function setError(fieldName, message) {
      if (errorEls[fieldName]) {
        errorEls[fieldName].textContent = message || '';
      }
    }

    function clearErrors() {
      Object.keys(errorEls).forEach(function (fieldName) {
        setError(fieldName, '');
      });
    }

    function validateState(rawState) {
      var parsed = {};
      var errors = {};

      var nameValue = String(rawState.name || '').trim();
      if (!nameValue) {
        errors.name = 'Blip name cannot be empty.';
        parsed.name = DEFAULT_STATE.name;
      } else {
        parsed.name = nameValue;
      }

      var spriteResult = parseIntegerField(rawState.spriteId, 'Sprite ID', 0);
      if (!spriteResult.valid) {
        errors.spriteId = spriteResult.error;
      }
      parsed.spriteId = spriteResult.valid ? spriteResult.value : Number(DEFAULT_STATE.spriteId);

      var colorResult = parseIntegerField(rawState.colorId, 'Color ID', 0);
      if (!colorResult.valid) {
        errors.colorId = colorResult.error;
      }
      parsed.colorId = colorResult.valid ? colorResult.value : Number(DEFAULT_STATE.colorId);

      var scaleResult = parseFloatField(rawState.scale, 'Scale', 0);
      if (!scaleResult.valid) {
        errors.scale = scaleResult.error;
      }
      parsed.scale = scaleResult.valid ? scaleResult.value : Number(DEFAULT_STATE.scale);

      var displayResult = parseIntegerField(rawState.display, 'Display', 0);
      if (!displayResult.valid) {
        errors.display = displayResult.error;
      }
      parsed.display = displayResult.valid ? displayResult.value : Number(DEFAULT_STATE.display);

      var alphaResult = parseIntegerField(rawState.alpha, 'Alpha', 0, 255);
      if (!alphaResult.valid) {
        errors.alpha = alphaResult.error;
      }
      parsed.alpha = alphaResult.valid ? alphaResult.value : Number(DEFAULT_STATE.alpha);

      parsed.shortRange = !!rawState.shortRange;

      var xResult = parseFloatField(rawState.x, 'Coordinate X');
      if (!xResult.valid) {
        errors.x = xResult.error;
      }
      parsed.x = xResult.valid ? xResult.value : Number(DEFAULT_STATE.x);

      var yResult = parseFloatField(rawState.y, 'Coordinate Y');
      if (!yResult.valid) {
        errors.y = yResult.error;
      }
      parsed.y = yResult.valid ? yResult.value : Number(DEFAULT_STATE.y);

      var zResult = parseFloatField(rawState.z, 'Coordinate Z');
      if (!zResult.valid) {
        errors.z = zResult.error;
      }
      parsed.z = zResult.valid ? zResult.value : Number(DEFAULT_STATE.z);

      parsed.remember = !!rawState.remember;

      return {
        parsed: parsed,
        errors: errors,
        valid: Object.keys(errors).length === 0
      };
    }

    function updatePreview(parsed) {
      var spriteInfo = getSpriteInfo(parsed.spriteId);
      var colorInfo = getColorInfo(parsed.colorId);
      var coordsText = 'vector3(' + formatLuaNumber(parsed.x, true) + ', ' + formatLuaNumber(parsed.y, true) + ', ' + formatLuaNumber(parsed.z, true) + ')';

      if (outputEls.previewName) {
        outputEls.previewName.textContent = parsed.name;
      }

      if (outputEls.previewMeta) {
        outputEls.previewMeta.textContent = 'Sprite ' + parsed.spriteId + ' · Color ' + parsed.colorId + ' · ' + (spriteInfo.displayName || spriteInfo.name);
      }

      if (outputEls.previewShortRange) {
        outputEls.previewShortRange.textContent = parsed.shortRange ? 'Short range' : 'Full range';
      }

      if (outputEls.previewDisplay) {
        outputEls.previewDisplay.textContent = 'Display ' + parsed.display;
      }

      if (outputEls.previewSprite) {
        var spriteAsset = spriteInfo.asset || '';
        if (spriteAsset) {
          outputEls.previewSprite.classList.add('has-image');
          outputEls.previewSprite.innerHTML =
            '<img class="blip-preview-sprite-image" src="' + spriteAsset + '" alt="' + escapeLuaString(spriteInfo.displayName || spriteInfo.name) + '" />' +
            '<span class="blip-preview-sprite-text">' + String(parsed.spriteId) + '</span>';
        } else {
          outputEls.previewSprite.classList.remove('has-image');
          outputEls.previewSprite.textContent = String(parsed.spriteId);
        }
      }

      if (outputEls.previewScale) {
        outputEls.previewScale.textContent = formatLuaNumber(parsed.scale, false);
      }

      if (outputEls.previewAlpha) {
        outputEls.previewAlpha.textContent = String(parsed.alpha);
      }

      if (outputEls.previewCoords) {
        outputEls.previewCoords.textContent = coordsText;
      }

      if (outputEls.previewColor) {
        outputEls.previewColor.textContent = colorInfo.name;
      }

      if (outputEls.previewStage) {
        outputEls.previewStage.style.setProperty('--blip-accent', colorInfo.hex);
        outputEls.previewStage.style.setProperty('--blip-scale', String(Math.max(0.35, Number(parsed.scale) || 0.8)));
      }

      if (spriteThumbEl) {
        if (spriteInfo.asset) {
          spriteThumbEl.classList.add('has-image');
          spriteThumbEl.innerHTML = '<img src="' + spriteInfo.asset + '" alt="" loading="lazy" />' + '<span>' + String(parsed.spriteId) + '</span>';
        } else {
          spriteThumbEl.classList.remove('has-image');
          spriteThumbEl.textContent = String(parsed.spriteId);
        }
      }
    }

    function closeSpriteMenu() {
      if (!spriteMenuEl || !spriteMenuToggleBtn) {
        return;
      }

      if (spriteMenuEl.contains(document.activeElement) && spriteMenuToggleBtn.focus) {
        spriteMenuToggleBtn.focus({ preventScroll: true });
      }

      spriteMenuEl.hidden = true;
      spriteMenuToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-sprite-picker-open');
    }

    function openSpriteMenu() {
      if (!spriteMenuEl || !spriteMenuToggleBtn) {
        return;
      }

      spriteMenuEl.hidden = false;
      spriteMenuToggleBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-sprite-picker-open');
      if (spriteSearchEl) {
        window.setTimeout(function () {
          spriteSearchEl.focus();
        }, 0);
      }
    }

    function buildSpriteCard(spriteEntry) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'blip-sprite-card';
      button.setAttribute('data-sprite-id', String(spriteEntry.id));
      button.setAttribute('data-search-text', (spriteEntry.id + ' ' + spriteEntry.name + ' ' + spriteEntry.displayName).toLowerCase());

      var imgHtml = spriteEntry.asset
        ? '<img class="blip-sprite-card-image" src="' + spriteEntry.asset + '" alt="" loading="lazy" />'
        : '<span class="blip-sprite-card-placeholder">' + spriteEntry.id + '</span>';

      button.innerHTML =
        '<span class="blip-sprite-card-thumb">' + imgHtml + '</span>' +
        '<span class="blip-sprite-card-meta">' +
          '<strong>' + spriteEntry.id + '</strong>' +
          '<small>' + spriteEntry.displayName + '</small>' +
        '</span>';

      return button;
    }

    function renderSpriteMenu(filterText) {
      if (!spriteListEl) {
        return;
      }

      var normalizedFilter = String(filterText || '').trim().toLowerCase();
      var fragment = document.createDocumentFragment();
      var visibleCount = 0;

      spriteListEl.innerHTML = '';

      spriteEntries.forEach(function (spriteEntry) {
        var searchText = (spriteEntry.id + ' ' + spriteEntry.name + ' ' + spriteEntry.displayName).toLowerCase();
        var shouldShow = !normalizedFilter || searchText.indexOf(normalizedFilter) !== -1;
        if (!shouldShow) {
          return;
        }

        visibleCount += 1;
        fragment.appendChild(buildSpriteCard(spriteEntry));
      });

      spriteListEl.appendChild(fragment);

      if (spriteCountEl) {
        spriteCountEl.textContent = visibleCount + ' sprites';
      }

      Array.prototype.forEach.call(spriteListEl.querySelectorAll('.blip-sprite-card'), function (cardEl) {
        cardEl.classList.toggle('is-selected', String(inputEls.spriteId && inputEls.spriteId.value) === String(cardEl.getAttribute('data-sprite-id') || ''));
      });
    }

    function bindSpriteMenu() {
      if (spriteMenuBound) {
        return;
      }

      spriteMenuBound = true;

      if (spriteMenuToggleBtn) {
        spriteMenuToggleBtn.addEventListener('click', function () {
          if (!spriteMenuEl) {
            return;
          }

          if (spriteMenuEl.hidden) {
            renderSpriteMenu(spriteSearchEl ? spriteSearchEl.value : '');
            openSpriteMenu();
          } else {
            closeSpriteMenu();
          }
        });
      }

      if (spriteMenuCloseBtn) {
        spriteMenuCloseBtn.addEventListener('click', closeSpriteMenu);
      }

      if (spriteSearchEl) {
        spriteSearchEl.addEventListener('input', function () {
          renderSpriteMenu(spriteSearchEl.value);
        });
      }

      if (spriteMenuEl) {
        spriteMenuEl.addEventListener('click', function (event) {
          if (event.target === spriteMenuEl) {
            closeSpriteMenu();
          }
        });
      }

      if (spriteListEl) {
        spriteListEl.addEventListener('click', function (event) {
          var cardEl = event.target && event.target.closest ? event.target.closest('.blip-sprite-card') : null;
          if (!cardEl || !spriteListEl.contains(cardEl)) {
            return;
          }

          var spriteId = cardEl.getAttribute('data-sprite-id') || '0';
          if (inputEls.spriteId) {
            inputEls.spriteId.value = spriteId;
          }
          render();
          closeSpriteMenu();
        });
      }

      document.addEventListener('click', function (event) {
        if (!spriteMenuEl || spriteMenuEl.hidden) {
          return;
        }

        if (spriteMenuEl.contains(event.target) || (spriteMenuToggleBtn && spriteMenuToggleBtn.contains(event.target))) {
          return;
        }

        closeSpriteMenu();
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeSpriteMenu();
        }
      });

      renderSpriteMenu('');
    }

    function updateCode(parsed, isValid) {
      var codeText = isValid ? buildLuaCode(parsed) : 'Fix the validation errors to generate Lua code.';
      if (outputEls.code) {
        outputEls.code.textContent = codeText;
        outputEls.code.classList.toggle('is-empty', !isValid);
      }

      if (outputEls.codeSize) {
        outputEls.codeSize.textContent = isValid ? countLines(codeText) + ' lines' : '0 lines';
      }
    }

    function updateStatus(valid, errors) {
      if (!outputEls.status) {
        return;
      }

      if (valid) {
        outputEls.status.textContent = 'Ready. Copy the code when you are happy with the preview.';
        outputEls.status.style.color = 'rgba(181, 181, 181, 0.9)';
      } else {
        outputEls.status.textContent = 'Fix ' + Object.keys(errors).length + ' field' + (Object.keys(errors).length === 1 ? '' : 's') + ' to generate valid Lua.';
        outputEls.status.style.color = '#fca5a5';
      }
    }

    function persistIfEnabled(nextState, valid) {
      if (!nextState.remember) {
        clearStoredState();
        return;
      }

      if (valid) {
        writeStoredState(nextState);
      }
    }

    function render() {
      var rawState = readFormState();
      state = rawState;

      var validation = validateState(rawState);
      var parsed = validation.parsed;
      var errors = validation.errors;

      clearErrors();
      Object.keys(errors).forEach(function (fieldName) {
        setError(fieldName, errors[fieldName]);
      });

      updatePreview(parsed);
      updateCode(parsed, validation.valid);
      updateStatus(validation.valid, errors);
      persistIfEnabled(rawState, validation.valid);
    }

    function setState(nextState) {
      state = normalizeState(nextState);
      writeFormState(state);
      render();
    }

    function adjustField(fieldName, delta) {
      var currentState = readFormState();
      var currentValue = Number(currentState[fieldName]);
      if (!isFinite(currentValue)) {
        currentValue = Number(DEFAULT_STATE[fieldName]);
      }

      var nextValue = currentValue + delta;
      if (fieldName === 'scale') {
        nextValue = Math.max(0.01, Math.round(nextValue * 10) / 10);
      } else if (fieldName === 'alpha') {
        nextValue = Math.max(0, Math.min(255, Math.round(nextValue)));
      } else if (fieldName === 'spriteId' || fieldName === 'colorId' || fieldName === 'display') {
        nextValue = Math.max(0, Math.round(nextValue));
      }

      if (fieldName === 'x' || fieldName === 'y' || fieldName === 'z') {
        nextValue = Math.round(nextValue * 10) / 10;
      }

      currentState[fieldName] = String(nextValue);
      setState(currentState);
    }

    function copyCurrentCode() {
      var validation = validateState(readFormState());
      if (!validation.valid) {
        showToast('Fix the errors before copying the Lua code.', true);
        return;
      }

      var codeText = buildLuaCode(validation.parsed);
      copyTextToClipboard(codeText).then(function () {
        showToast('Lua code copied to clipboard.');
      }).catch(function () {
        showToast('Clipboard access was blocked by the browser.', true);
      });
    }

    function copyCurrentCoordinates() {
      var validation = validateState(readFormState());
      var parsed = validation.parsed;
      var coordsText = 'vector3(' + formatLuaNumber(parsed.x, true) + ', ' + formatLuaNumber(parsed.y, true) + ', ' + formatLuaNumber(parsed.z, true) + ')';

      copyTextToClipboard(coordsText).then(function () {
        showToast('Coordinates copied to clipboard.');
      }).catch(function () {
        showToast('Clipboard access was blocked by the browser.', true);
      });
    }

    if (copyCodeBtn) {
      copyCodeBtn.addEventListener('click', copyCurrentCode);
    }

    if (copyCoordsBtn) {
      copyCoordsBtn.addEventListener('click', copyCurrentCoordinates);
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        clearStoredState();
        setState(cloneDefaultState());
        showToast('Settings restored to defaults.');
      });
    }

    stepperButtons.forEach(function (buttonEl) {
      buttonEl.addEventListener('click', function () {
        var targetField = buttonEl.getAttribute('data-stepper-target');
        var delta = Number(buttonEl.getAttribute('data-stepper-delta') || '0');
        if (!targetField || !isFinite(delta)) {
          return;
        }

        adjustField(targetField, delta);
      });
    });

    Object.keys(inputEls).forEach(function (fieldName) {
      var inputEl = inputEls[fieldName];
      if (!inputEl) {
        return;
      }

      inputEl.addEventListener('input', function () {
        render();
      });

      inputEl.addEventListener('change', function () {
        render();
      });
    });

    writeFormState(state);
    render();
    bindSpriteMenu();
    contentRoot.dataset.blipGeneratorBound = '1';
  }

  window.SMDZ_initBlipGeneratorTool = initBlipGeneratorTool;
})();
