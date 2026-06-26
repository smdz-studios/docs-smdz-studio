(function () {
  'use strict';

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function debounce(fn, wait) {
    var timerId = null;

    return function () {
      var context = this;
      var args = arguments;
      window.clearTimeout(timerId);
      timerId = window.setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }

  function escapeLuaString(value) {
    return String(value || '')
      .replace(/\\/g, '\\\\')
      .replace(/\r\n/g, '\\n')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')
      .replace(/'/g, "\\'");
  }

  function prettifyItemKey(key) {
    return String(key || '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });
  }

  function isLuaIdentifier(key) {
    return /^[A-Za-z_][A-Za-z0-9_]*$/.test(String(key || ''));
  }

  function stripLuaComments(text) {
    var source = String(text || '');
    var output = '';
    var index = 0;
    var length = source.length;
    var inQuote = '';
    var escaped = false;

    while (index < length) {
      var char = source.charAt(index);
      var next = source.charAt(index + 1);

      if (inQuote) {
        output += char;
        if (escaped) {
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === inQuote) {
          inQuote = '';
        }
        index += 1;
        continue;
      }

      if (char === '"' || char === "'") {
        inQuote = char;
        output += char;
        index += 1;
        continue;
      }

      if (char === '-' && next === '-') {
        if (source.charAt(index + 2) === '[' && source.charAt(index + 3) === '[') {
          index += 4;
          while (index < length && !(source.charAt(index) === ']' && source.charAt(index + 1) === ']')) {
            index += 1;
          }
          index = Math.min(index + 2, length);
        } else {
          index += 2;
          while (index < length && source.charAt(index) !== '\n') {
            index += 1;
          }
        }
        continue;
      }

      output += char;
      index += 1;
    }

    return output;
  }

  function readLuaValue(text, startIndex) {
    var index = startIndex;
    var length = text.length;

    while (index < length && /\s/.test(text.charAt(index))) {
      index += 1;
    }

    if (index >= length) {
      return null;
    }

    var firstChar = text.charAt(index);

    if (firstChar === '"' || firstChar === "'") {
      var quote = firstChar;
      var valueStart = index + 1;
      var cursor = valueStart;
      var escaped = false;

      while (cursor < length) {
        var currentChar = text.charAt(cursor);

        if (escaped) {
          escaped = false;
        } else if (currentChar === '\\') {
          escaped = true;
        } else if (currentChar === quote) {
          var rawValue = text.slice(valueStart, cursor);
          return {
            type: 'string',
            value: rawValue
              .replace(/\\n/g, '\n')
              .replace(/\\r/g, '\r')
              .replace(/\\t/g, '\t')
              .replace(/\\\\/g, '\\')
              .replace(new RegExp('\\\\' + quote, 'g'), quote),
            endIndex: cursor + 1
          };
        }

        cursor += 1;
      }

      return null;
    }

    if (firstChar === '{') {
      var depth = 0;
      var cursorIndex = index;
      var inQuote = '';
      var escapedChar = false;
      var inComment = false;

      while (cursorIndex < length) {
        var char = text.charAt(cursorIndex);
        var nextChar = text.charAt(cursorIndex + 1);

        if (inComment) {
          if (char === '\n') {
            inComment = false;
          }

          cursorIndex += 1;
          continue;
        }

        if (inQuote) {
          if (escapedChar) {
            escapedChar = false;
          } else if (char === '\\') {
            escapedChar = true;
          } else if (char === inQuote) {
            inQuote = '';
          }

          cursorIndex += 1;
          continue;
        }

        if (char === '"' || char === "'") {
          inQuote = char;
          cursorIndex += 1;
          continue;
        }

        if (char === '-' && nextChar === '-') {
          inComment = true;
          cursorIndex += 2;
          continue;
        }

        if (char === '{') {
          depth += 1;
        } else if (char === '}') {
          depth -= 1;
          if (depth === 0) {
            return {
              type: 'table',
              value: text.slice(index + 1, cursorIndex),
              endIndex: cursorIndex + 1
            };
          }
        }

        cursorIndex += 1;
      }

      return null;
    }

    var tokenEnd = index;
    while (tokenEnd < length) {
      var tokenChar = text.charAt(tokenEnd);
      if (tokenChar === ',' || tokenChar === '\n' || tokenChar === '}') {
        break;
      }

      tokenEnd += 1;
    }

    var token = text.slice(index, tokenEnd).trim();
    if (!token) {
      return null;
    }

    if (token === 'true') {
      return { type: 'boolean', value: true, endIndex: tokenEnd };
    }

    if (token === 'false') {
      return { type: 'boolean', value: false, endIndex: tokenEnd };
    }

    if (token === 'nil') {
      return { type: 'nil', value: null, endIndex: tokenEnd };
    }

    if (/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(token)) {
      return { type: 'number', value: Number(token), endIndex: tokenEnd };
    }

    return { type: 'raw', value: token, endIndex: tokenEnd };
  }

  function extractLuaField(body, fieldName) {
    var fieldPattern = new RegExp('(?:^|[\\s,{])' + escapeRegExp(fieldName) + '\\s*=\\s*', 'm');
    var match = fieldPattern.exec(body);

    if (!match) {
      return null;
    }

    return readLuaValue(body, match.index + match[0].length);
  }

  function detectSourceMode(source) {
    var normalized = String(source || '').toLowerCase();

    if (normalized.indexOf('qbcore.shared.items') !== -1 || normalized.indexOf('type = \'item\'') !== -1 || normalized.indexOf('type = "item"') !== -1) {
      return 'qb-to-ox';
    }

    if (normalized.indexOf('return {') !== -1 || normalized.indexOf('stack = true') !== -1 || normalized.indexOf('close = true') !== -1) {
      return 'ox-to-qb';
    }

    return null;
  }

  function analyzeItems(items, mode) {
    var stats = {
      itemCount: items.length,
      warnings: 0,
      missingLabels: 0,
      missingWeights: 0,
      missingImages: 0,
      modeLabel: mode === 'qb-to-ox' ? 'QBCore' : 'ox_inventory'
    };

    items.forEach(function (item) {
      if (!item.label) {
        stats.missingLabels += 1;
      }

      if (item.weight === null || item.weight === undefined) {
        stats.missingWeights += 1;
      }

      if (!item.image) {
        stats.missingImages += 1;
      }
    });

    stats.warnings = stats.missingLabels + stats.missingWeights;
    return stats;
  }

  function findItemBlocks(source) {
    var normalized = stripLuaComments(String(source || '').replace(/\r\n/g, '\n'));
    var itemPattern = /^\s*(?:\[\s*(['"])(.*?)\1\s*\]|([A-Za-z0-9_-]+))\s*=\s*\{/gm;
    var items = [];
    var match;

    while ((match = itemPattern.exec(normalized)) !== null) {
      var key = match[2] || match[3] || '';
      var openIndex = match.index + match[0].length - 1;
      var depth = 0;
      var cursor = openIndex;
      var blockEnd = -1;
      var inQuote = '';
      var escaped = false;
      var inComment = false;

      while (cursor < normalized.length) {
        var current = normalized.charAt(cursor);
        var next = normalized.charAt(cursor + 1);

        if (inComment) {
          if (current === '\n') {
            inComment = false;
          }

          cursor += 1;
          continue;
        }

        if (inQuote) {
          if (escaped) {
            escaped = false;
          } else if (current === '\\') {
            escaped = true;
          } else if (current === inQuote) {
            inQuote = '';
          }

          cursor += 1;
          continue;
        }

        if (current === '"' || current === "'") {
          inQuote = current;
          cursor += 1;
          continue;
        }

        if (current === '-' && next === '-') {
          inComment = true;
          cursor += 2;
          continue;
        }

        if (current === '{') {
          depth += 1;
        } else if (current === '}') {
          depth -= 1;
          if (depth === 0) {
            blockEnd = cursor;
            break;
          }
        }

        cursor += 1;
      }

      if (blockEnd === -1) {
        continue;
      }

      items.push({
        key: key,
        body: normalized.slice(openIndex + 1, blockEnd)
      });
      itemPattern.lastIndex = blockEnd + 1;
    }

    return items;
  }

  function parseItemBlock(itemBlock) {
    var body = itemBlock.body;
    var labelValue = extractLuaField(body, 'label');
    var weightValue = extractLuaField(body, 'weight');
    var descriptionValue = extractLuaField(body, 'description');
    var imageValue = extractLuaField(body, 'image');
    var clientValue = extractLuaField(body, 'client');
    var clientImageValue = clientValue && clientValue.type === 'table' ? extractLuaField(clientValue.value, 'image') : null;

    return {
      key: itemBlock.key,
      label: labelValue && labelValue.type === 'string' ? labelValue.value : prettifyItemKey(itemBlock.key),
      weight: weightValue ? weightValue.value : null,
      description: descriptionValue && descriptionValue.type === 'string' ? descriptionValue.value : null,
      image: imageValue && imageValue.type === 'string'
        ? imageValue.value
        : (clientImageValue && clientImageValue.type === 'string' ? clientImageValue.value : null),
      stack: extractLuaField(body, 'stack'),
      close: extractLuaField(body, 'close'),
      unique: extractLuaField(body, 'unique'),
      useable: extractLuaField(body, 'useable'),
      shouldClose: extractLuaField(body, 'shouldClose')
    };
  }

  function formatLuaString(value) {
    return '\'' + escapeLuaString(value) + '\'';
  }

  function formatLuaValue(value) {
    if (value === null || value === undefined) {
      return 'nil';
    }

    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }

    if (typeof value === 'number') {
      return String(value);
    }

    return formatLuaString(value);
  }

  function formatOxItems(items) {
    var lines = ['return {'];

    items.forEach(function (item) {
      lines.push('  [\'' + escapeLuaString(item.key) + '\'] = {');
      lines.push('    label = ' + formatLuaValue(item.label) + ',');

      if (item.weight !== null && item.weight !== undefined) {
        lines.push('    weight = ' + formatLuaValue(item.weight) + ',');
      }

      if (item.stack && item.stack.type === 'boolean') {
        lines.push('    stack = ' + formatLuaValue(item.stack.value) + ',');
      } else if (item.unique && item.unique.type === 'boolean') {
        lines.push('    stack = ' + (item.unique.value ? 'false' : 'true') + ',');
      }

      if (item.close && item.close.type === 'boolean') {
        lines.push('    close = ' + formatLuaValue(item.close.value) + ',');
      } else if (item.shouldClose && item.shouldClose.type === 'boolean') {
        lines.push('    close = ' + formatLuaValue(item.shouldClose.value) + ',');
      } else {
        lines.push('    close = true,');
      }

      if (item.description) {
        lines.push('    description = ' + formatLuaValue(item.description) + ',');
      }

      if (item.image) {
        lines.push('    -- image = ' + formatLuaValue(item.image) + ',');
      }

      lines.push('  },');
    });

    lines.push('}');
    return lines.join('\n');
  }

  function formatQbItems(items) {
    var lines = ['QBCore = QBCore or {}', 'QBCore.Shared = QBCore.Shared or {}', 'QBCore.Shared.Items = {'];

    items.forEach(function (item) {
      var keyLine = isLuaIdentifier(item.key) ? item.key : ('[\'' + escapeLuaString(item.key) + '\']');
      lines.push('  ' + keyLine + ' = {');
      lines.push('    name = ' + formatLuaValue(item.key) + ',');
      lines.push('    label = ' + formatLuaValue(item.label) + ',');
      lines.push('    weight = ' + formatLuaValue(item.weight !== null && item.weight !== undefined ? item.weight : 0) + ',');
      lines.push('    type = ' + formatLuaValue('item') + ',');

      if (item.image) {
        lines.push('    image = ' + formatLuaValue(item.image) + ',');
      }

      if (item.unique && item.unique.type === 'boolean') {
        lines.push('    unique = ' + formatLuaValue(item.unique.value) + ',');
      } else if (item.stack && item.stack.type === 'boolean') {
        lines.push('    unique = ' + (item.stack.value ? 'false' : 'true') + ',');
      } else {
        lines.push('    unique = false,');
      }

      if (item.useable && item.useable.type === 'boolean') {
        lines.push('    useable = ' + formatLuaValue(item.useable.value) + ',');
      } else {
        lines.push('    useable = false,');
      }

      if (item.shouldClose && item.shouldClose.type === 'boolean') {
        lines.push('    shouldClose = ' + formatLuaValue(item.shouldClose.value) + ',');
      } else if (item.close && item.close.type === 'boolean') {
        lines.push('    shouldClose = ' + formatLuaValue(item.close.value) + ',');
      } else {
        lines.push('    shouldClose = true,');
      }

      lines.push('    combinable = nil,');

      if (item.description) {
        lines.push('    description = ' + formatLuaValue(item.description) + ',');
      }

      lines.push('  },');
    });

    lines.push('}');
    return lines.join('\n');
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

  function getSamples() {
    return {
      ox: "return {\n  ['water'] = {\n    label = 'Water',\n    weight = 500,\n    stack = true,\n    close = true,\n    description = 'Fresh bottled water.'\n  },\n  ['bandage'] = {\n    label = 'Bandage',\n    weight = 150,\n    stack = true,\n    close = true,\n    description = 'Heals small wounds.'\n  }\n}",
      qb: "QBCore.Shared.Items = {\n  water = {\n    name = 'water',\n    label = 'Water',\n    weight = 500,\n    type = 'item',\n    image = 'water.png',\n    unique = false,\n    useable = false,\n    shouldClose = true,\n    combinable = nil,\n    description = 'Fresh bottled water.'\n  },\n  bandage = {\n    name = 'bandage',\n    label = 'Bandage',\n    weight = 150,\n    type = 'item',\n    image = 'bandage.png',\n    unique = false,\n    useable = true,\n    shouldClose = true,\n    combinable = nil,\n    description = 'Heals small wounds.'\n  }\n}"
    };
  }

  function initItemConverterTool() {
    var contentRoot = document.querySelector('.markdown-section');
    if (!contentRoot || contentRoot.dataset.itemConverterBound === '1') {
      return;
    }

    var toolRoot = contentRoot.querySelector('#item-converter-tool');
    if (!toolRoot) {
      return;
    }

    var inputEl = toolRoot.querySelector('#item-converter-input');
    var outputEl = toolRoot.querySelector('#item-converter-output');
    var statusEl = toolRoot.querySelector('#item-converter-status');
    var hintEl = toolRoot.querySelector('#item-converter-hint');
    var formatEl = toolRoot.querySelector('#item-converter-format');
    var itemsEl = toolRoot.querySelector('#item-converter-items');
    var warningsEl = toolRoot.querySelector('#item-converter-warnings');
    var outputCountEl = toolRoot.querySelector('#item-converter-output-count');
    var convertBtn = toolRoot.querySelector('#item-converter-convert');
    var copyBtn = toolRoot.querySelector('#item-converter-copy');
    var downloadBtn = toolRoot.querySelector('#item-converter-download');
    var swapBtn = toolRoot.querySelector('[data-action="swap"]');
    var clearBtn = toolRoot.querySelector('[data-action="clear"]');
    var modeButtons = toolRoot.querySelectorAll('.tool-switcher-button');
    var sampleButtons = toolRoot.querySelectorAll('[data-sample]');
    var samples = getSamples();
    var currentMode = toolRoot.dataset.mode || 'ox-to-qb';
    var latestStats = analyzeItems([], currentMode);
    var autoConvert = debounce(function () {
      if (inputEl && inputEl.value.trim() !== '') {
        convertCurrentValue();
      }
    }, 180);

    function setStatus(message, isError) {
      if (!statusEl) {
        return;
      }

      statusEl.textContent = message;
      statusEl.style.color = isError ? '#fecaca' : 'rgba(181, 181, 181, 0.9)';
    }

    function getOutputText() {
      return outputEl ? (outputEl.textContent || '') : '';
    }

    function setOutputText(value) {
      if (!outputEl) {
        return;
      }

      var outputValue = value || 'Converted Lua will appear here.';
      outputEl.textContent = outputValue;
      outputEl.classList.toggle('is-empty', !value);
    }

    function updateSummary(items, convertedText) {
      latestStats = analyzeItems(items, currentMode);

      if (formatEl) {
        formatEl.textContent = latestStats.modeLabel;
      }

      if (itemsEl) {
        itemsEl.textContent = String(latestStats.itemCount);
      }

      if (warningsEl) {
        warningsEl.textContent = String(latestStats.warnings);
      }

      if (outputCountEl) {
        outputCountEl.textContent = (convertedText ? convertedText.length : 0) + ' chars';
      }

      if (hintEl) {
        var hintParts = [];
        if (latestStats.missingLabels > 0) {
          hintParts.push(latestStats.missingLabels + ' item' + (latestStats.missingLabels === 1 ? '' : 's') + ' missing labels');
        }
        if (latestStats.missingWeights > 0) {
          hintParts.push(latestStats.missingWeights + ' item' + (latestStats.missingWeights === 1 ? '' : 's') + ' missing weights');
        }
        if (latestStats.missingImages > 0) {
          hintParts.push(latestStats.missingImages + ' image' + (latestStats.missingImages === 1 ? '' : 's') + ' not mapped');
        }

        hintEl.textContent = hintParts.length > 0
          ? ('Detected ' + latestStats.itemCount + ' items. ' + hintParts.join(' • '))
          : ('Detected ' + latestStats.itemCount + ' items. Parser looks clean.');
      }
    }

    function setMode(nextMode) {
      currentMode = nextMode === 'qb-to-ox' ? 'qb-to-ox' : 'ox-to-qb';
      toolRoot.dataset.mode = currentMode;
      modeButtons.forEach(function (buttonEl) {
        var isActive = buttonEl.dataset.direction === currentMode;
        buttonEl.classList.toggle('is-active', isActive);
      });
      setStatus(currentMode === 'ox-to-qb' ? 'Source: ox_inventory. Target: QBCore.' : 'Source: QBCore. Target: ox_inventory.', false);
      if (inputEl && inputEl.value) {
        convertCurrentValue();
      }
    }

    function convertCurrentValue() {
      var rawInput = inputEl ? inputEl.value : '';
      var itemBlocks = findItemBlocks(rawInput);

      if (!itemBlocks.length) {
        setStatus('No item blocks were detected. Paste a Lua item table first.', true);
        setOutputText('');
        updateSummary([], '');
        return;
      }

      var items = itemBlocks.map(parseItemBlock);
      var converted = currentMode === 'ox-to-qb' ? formatQbItems(items) : formatOxItems(items);

      setOutputText(converted);

      updateSummary(items, converted);
      setStatus('Converted ' + items.length + ' item' + (items.length === 1 ? '' : 's') + ' successfully.', false);
    }

    modeButtons.forEach(function (buttonEl) {
      buttonEl.addEventListener('click', function () {
        setMode(buttonEl.dataset.direction);
      });
    });

    sampleButtons.forEach(function (buttonEl) {
      buttonEl.addEventListener('click', function () {
        var sampleKey = buttonEl.dataset.sample;
        if (inputEl && samples[sampleKey]) {
          inputEl.value = samples[sampleKey];
          setStatus('Loaded ' + sampleKey.toUpperCase() + ' sample.', false);
          setMode(detectSourceMode(inputEl.value) || currentMode);
          convertCurrentValue();
        }
      });
    });

    if (swapBtn) {
      swapBtn.addEventListener('click', function () {
        setMode(currentMode === 'ox-to-qb' ? 'qb-to-ox' : 'ox-to-qb');
        if (inputEl && inputEl.value.trim() !== '') {
          convertCurrentValue();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (inputEl) {
          inputEl.value = '';
        }

        setOutputText('');

        updateSummary([], '');
        setStatus('Workspace cleared.', false);
      });
    }

    if (convertBtn) {
      convertBtn.addEventListener('click', convertCurrentValue);
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var outputText = getOutputText();
        if (!outputText || outputText === 'Converted Lua will appear here.') {
          setStatus('Nothing to copy yet.', true);
          return;
        }

        copyTextToClipboard(outputText).then(function () {
          setStatus('Output copied to clipboard.', false);
        }).catch(function () {
          setStatus('Clipboard access was blocked by the browser.', true);
        });
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', function () {
        var outputText = getOutputText();
        if (!outputText || outputText === 'Converted Lua will appear here.') {
          setStatus('Nothing to download yet.', true);
          return;
        }

        var blob = new Blob([outputText], { type: 'text/plain;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = currentMode === 'ox-to-qb' ? 'qbcore-items.lua' : 'ox-inventory-items.lua';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 1000);
        setStatus('Download started.', false);
      });
    }

    if (inputEl) {
      inputEl.addEventListener('input', function () {
        var detectedMode = detectSourceMode(inputEl.value);
        if (detectedMode && detectedMode !== currentMode) {
          setMode(detectedMode);
        }

        autoConvert();
      });

      inputEl.addEventListener('dragover', function (event) {
        event.preventDefault();
      });

      inputEl.addEventListener('drop', function (event) {
        var file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
        if (!file) {
          return;
        }

        event.preventDefault();
        var reader = new FileReader();
        reader.onload = function () {
          inputEl.value = String(reader.result || '');
          setMode(detectSourceMode(inputEl.value) || currentMode);
          convertCurrentValue();
        };
        reader.readAsText(file);
      });

      inputEl.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
          event.preventDefault();
          convertCurrentValue();
        }
      });
    }

    setMode(currentMode);

    if (inputEl && !inputEl.value) {
      inputEl.value = samples.ox;
    }

    setMode(detectSourceMode(inputEl && inputEl.value) || currentMode);
    convertCurrentValue();
    if (inputEl && inputEl.value.trim() !== '') {
      autoConvert();
    }
    contentRoot.dataset.itemConverterBound = '1';
  }

  window.SMDZ_initItemConverterTool = initItemConverterTool;
})();
