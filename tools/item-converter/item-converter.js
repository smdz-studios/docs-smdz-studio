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

  function prettifyKey(key) {
    return String(key || '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });
  }

  function stripLuaComments(text) {
    var source = String(text || '');
    var output = '';
    var index = 0;
    var inQuote = '';
    var escaped = false;
    var length = source.length;

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

  function normalizeConverterInput(text) {
    var source = String(text || '').replace(/\uFEFF/g, '').trim();

    if (!source) {
      return '';
    }

    if (source.indexOf('```') !== -1) {
      source = source.replace(/^\s*```[a-z0-9_-]*\s*/i, '');
      source = source.replace(/\s*```\s*$/i, '');
    }

    source = source
      .replace(/^\s*(?:lua|luau|text)\s*\n/i, '')
      .replace(/\r\n/g, '\n');

    return source.trim();
  }

  function findMatchingBrace(text, openIndex) {
    var depth = 0;
    var inQuote = '';
    var escaped = false;
    var index = openIndex;

    while (index < text.length) {
      var char = text.charAt(index);

      if (inQuote) {
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
        index += 1;
        continue;
      }

      if (char === '{') {
        depth += 1;
      } else if (char === '}') {
        depth -= 1;
        if (depth === 0) {
          return index;
        }
      }

      index += 1;
    }

    return -1;
  }

  function readLuaValue(text, startIndex) {
    var index = startIndex;
    while (index < text.length && /\s/.test(text.charAt(index))) {
      index += 1;
    }

    if (index >= text.length) {
      return null;
    }

    var firstChar = text.charAt(index);
    if (firstChar === '"' || firstChar === "'") {
      var quote = firstChar;
      var valueStart = index + 1;
      var cursor = valueStart;
      var escaped = false;

      while (cursor < text.length) {
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
              .replace(new RegExp('\\\\' + quote, 'g'), quote)
          };
        }

        cursor += 1;
      }

      return null;
    }

    if (firstChar === '{') {
      var endIndex = findMatchingBrace(text, index);
      if (endIndex === -1) {
        return null;
      }

      return {
        type: 'table',
        value: text.slice(index + 1, endIndex)
      };
    }

    var tokenEnd = index;
    while (tokenEnd < text.length) {
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
      return { type: 'boolean', value: true };
    }

    if (token === 'false') {
      return { type: 'boolean', value: false };
    }

    if (token === 'nil') {
      return { type: 'nil', value: null };
    }

    if (/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(token)) {
      return { type: 'number', value: Number(token) };
    }

    return { type: 'raw', value: token };
  }

  function extractLuaField(body, fieldName) {
    var pattern = new RegExp('(?:^|[\\s,{])' + escapeRegExp(fieldName) + '\\s*=\\s*', 'm');
    var match = pattern.exec(body);
    if (!match) {
      return null;
    }

    return readLuaValue(body, match.index + match[0].length);
  }

  function extractNestedField(body, parentName, childName) {
    var parentField = extractLuaField(body, parentName);
    if (!parentField || parentField.type !== 'table') {
      return null;
    }

    return extractLuaField(parentField.value, childName);
  }

  function detectSourceMode(text) {
    var normalized = String(text || '').toLowerCase();

    if (normalized.indexOf('qbcore.shared.items') !== -1 || normalized.indexOf('type = \'item\'') !== -1 || normalized.indexOf('type = "item"') !== -1) {
      return 'qb-to-ox';
    }

    if (normalized.indexOf('return {') !== -1 || normalized.indexOf('stack = true') !== -1 || normalized.indexOf('close = true') !== -1) {
      return 'ox-to-qb';
    }

    return null;
  }

  function findItemBlocks(source) {
    var normalizedSource = normalizeConverterInput(source);
    var normalized = stripLuaComments(normalizedSource);
    var items = [];
    var pattern = /^\s*(?:\[\s*(['"])(.*?)\1\s*\]|([A-Za-z0-9_.:-]+))\s*=\s*\{/gm;
    var match;

    while ((match = pattern.exec(normalized)) !== null) {
      var key = match[2] || match[3] || '';
      var openIndex = match.index + match[0].length - 1;
      var closeIndex = findMatchingBrace(normalized, openIndex);

      if (closeIndex === -1) {
        continue;
      }

      items.push({
        key: key,
        body: normalized.slice(openIndex + 1, closeIndex)
      });

      pattern.lastIndex = closeIndex + 1;
    }

    if (items.length === 0 && normalized.indexOf('{') !== -1) {
      var fallbackPattern = /(?:\[\s*(['"])(.*?)\1\s*\]|([A-Za-z0-9_.:-]+))\s*=\s*\{/g;
      while ((match = fallbackPattern.exec(normalized)) !== null) {
        var fallbackKey = match[2] || match[3] || '';
        var fallbackOpenIndex = normalized.indexOf('{', match.index + match[0].length - 1);
        if (fallbackOpenIndex === -1) {
          continue;
        }

        var fallbackCloseIndex = findMatchingBrace(normalized, fallbackOpenIndex);
        if (fallbackCloseIndex === -1) {
          continue;
        }

        items.push({
          key: fallbackKey,
          body: normalized.slice(fallbackOpenIndex + 1, fallbackCloseIndex)
        });

        fallbackPattern.lastIndex = fallbackCloseIndex + 1;
      }
    }

    return items;
  }

  function parseItemBlock(block) {
    var body = block.body;
    var labelValue = extractLuaField(body, 'label');
    var weightValue = extractLuaField(body, 'weight');
    var descriptionValue = extractLuaField(body, 'description');
    var imageValue = extractLuaField(body, 'image');
    var clientImageValue = extractNestedField(body, 'client', 'image');
    var stackValue = extractLuaField(body, 'stack');
    var closeValue = extractLuaField(body, 'close');
    var uniqueValue = extractLuaField(body, 'unique');
    var useableValue = extractLuaField(body, 'useable');
    var shouldCloseValue = extractLuaField(body, 'shouldClose');

    return {
      key: block.key,
      label: labelValue && labelValue.type === 'string' ? labelValue.value : prettifyKey(block.key),
      weight: weightValue && (weightValue.type === 'number' || weightValue.type === 'raw') ? weightValue.value : null,
      description: descriptionValue && descriptionValue.type === 'string' ? descriptionValue.value : '',
      image: imageValue && imageValue.type === 'string'
        ? imageValue.value
        : (clientImageValue && clientImageValue.type === 'string' ? clientImageValue.value : ''),
      stack: stackValue && stackValue.type === 'boolean' ? stackValue.value : null,
      close: closeValue && closeValue.type === 'boolean' ? closeValue.value : null,
      unique: uniqueValue && uniqueValue.type === 'boolean' ? uniqueValue.value : null,
      useable: useableValue && useableValue.type === 'boolean' ? useableValue.value : null,
      shouldClose: shouldCloseValue && shouldCloseValue.type === 'boolean' ? shouldCloseValue.value : null
    };
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

    return '\'' + escapeLuaString(value) + '\'';
  }

  function formatOxItems(items) {
    var lines = ['return {'];

    items.forEach(function (item) {
      lines.push('  [\'' + escapeLuaString(item.key) + '\'] = {');
      lines.push('    label = ' + formatLuaValue(item.label) + ',');

      if (item.weight !== null && item.weight !== undefined) {
        lines.push('    weight = ' + formatLuaValue(item.weight) + ',');
      }

      if (item.stack !== null) {
        lines.push('    stack = ' + formatLuaValue(item.stack) + ',');
      } else if (item.unique !== null) {
        lines.push('    stack = ' + (item.unique ? 'false' : 'true') + ',');
      } else {
        lines.push('    stack = true,');
      }

      if (item.close !== null) {
        lines.push('    close = ' + formatLuaValue(item.close) + ',');
      } else if (item.shouldClose !== null) {
        lines.push('    close = ' + formatLuaValue(item.shouldClose) + ',');
      } else {
        lines.push('    close = true,');
      }

      if (item.description) {
        lines.push('    description = ' + formatLuaValue(item.description) + ',');
      }

      lines.push('  },');
    });

    lines.push('}');
    return lines.join('\n');
  }

  function formatQbItems(items) {
    var lines = ['QBCore = QBCore or {}', 'QBCore.Shared = QBCore.Shared or {}', 'QBCore.Shared.Items = {'];

    items.forEach(function (item) {
      var keyName = /^[A-Za-z_][A-Za-z0-9_]*$/.test(item.key) ? item.key : ('[\'' + escapeLuaString(item.key) + '\']');
      lines.push('  ' + keyName + ' = {');
      lines.push('    name = ' + formatLuaValue(item.key) + ',');
      lines.push('    label = ' + formatLuaValue(item.label) + ',');
      lines.push('    weight = ' + formatLuaValue(item.weight !== null && item.weight !== undefined ? item.weight : 0) + ',');
      lines.push('    type = \'item\',');

      if (item.image) {
        lines.push('    image = ' + formatLuaValue(item.image) + ',');
      }

      if (item.unique !== null) {
        lines.push('    unique = ' + formatLuaValue(item.unique) + ',');
      } else if (item.stack !== null) {
        lines.push('    unique = ' + (item.stack ? 'false' : 'true') + ',');
      } else {
        lines.push('    unique = false,');
      }

      if (item.useable !== null) {
        lines.push('    useable = ' + formatLuaValue(item.useable) + ',');
      } else {
        lines.push('    useable = false,');
      }

      if (item.shouldClose !== null) {
        lines.push('    shouldClose = ' + formatLuaValue(item.shouldClose) + ',');
      } else if (item.close !== null) {
        lines.push('    shouldClose = ' + formatLuaValue(item.close) + ',');
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

  function getSamples() {
    return {
      ox: "return {\n  ['water'] = {\n    label = 'Water',\n    weight = 500,\n    stack = true,\n    close = true,\n    description = 'Fresh bottled water.'\n  },\n  ['bandage'] = {\n    label = 'Bandage',\n    weight = 150,\n    stack = true,\n    close = true,\n    description = 'Heals small wounds.'\n  }\n}",
      qb: "QBCore.Shared.Items = {\n  water = {\n    name = 'water',\n    label = 'Water',\n    weight = 500,\n    type = 'item',\n    image = 'water.png',\n    unique = false,\n    useable = false,\n    shouldClose = true,\n    combinable = nil,\n    description = 'Fresh bottled water.'\n  },\n  bandage = {\n    name = 'bandage',\n    label = 'Bandage',\n    weight = 150,\n    type = 'item',\n    image = 'bandage.png',\n    unique = false,\n    useable = true,\n    shouldClose = true,\n    combinable = nil,\n    description = 'Heals small wounds.'\n  }\n}"
    };
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

  function countItemsAndWarnings(items) {
    var warnings = 0;

    items.forEach(function (item) {
      if (!item.label) {
        warnings += 1;
      }

      if (item.weight === null || item.weight === undefined) {
        warnings += 1;
      }
    });

    return {
      itemCount: items.length,
      warnings: warnings
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
    var copyOutputBtn = toolRoot.querySelector('#item-converter-copy-output');
    var swapBtn = toolRoot.querySelector('[data-action="swap"]');
    var clearBtn = toolRoot.querySelector('[data-action="clear"]');
    var modeButtons = toolRoot.querySelectorAll('.item-converter-mode');
    var sampleButtons = toolRoot.querySelectorAll('[data-sample]');
    var samples = getSamples();
    var currentMode = toolRoot.dataset.mode || 'ox-to-qb';

    function setStatus(message, isError) {
      if (!statusEl) {
        return;
      }

      statusEl.textContent = message;
      statusEl.classList.toggle('is-error', !!isError);
    }

    function setMode(nextMode) {
      currentMode = nextMode === 'qb-to-ox' ? 'qb-to-ox' : 'ox-to-qb';
      toolRoot.dataset.mode = currentMode;

      modeButtons.forEach(function (buttonEl) {
        buttonEl.classList.toggle('is-active', buttonEl.dataset.mode === currentMode);
      });

      if (formatEl) {
        formatEl.textContent = currentMode === 'ox-to-qb' ? 'ox_inventory' : 'QBCore';
      }
    }

    function getOutputText() {
      return outputEl ? outputEl.textContent : '';
    }

    function setOutputText(text) {
      if (!outputEl) {
        return;
      }

      outputEl.textContent = text || 'Converted Lua will appear here.';
    }

    function copyOutputToClipboard() {
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
    }

    function updateSummary(itemBlocks, convertedText) {
      var summary = countItemsAndWarnings(itemBlocks);

      if (itemsEl) {
        itemsEl.textContent = String(summary.itemCount);
      }

      if (warningsEl) {
        warningsEl.textContent = String(summary.warnings);
      }

      if (outputCountEl) {
        outputCountEl.textContent = String(convertedText ? convertedText.length : 0) + ' chars';
      }

      if (hintEl) {
        hintEl.textContent = summary.itemCount > 0
          ? ('Detected ' + summary.itemCount + ' item' + (summary.itemCount === 1 ? '' : 's') + '.')
          : 'Drop a file or paste Lua to begin.';
      }
    }

    function convertCurrentValue() {
      var rawInput = inputEl ? inputEl.value : '';
      var itemBlocks = findItemBlocks(rawInput);

      if (!itemBlocks.length) {
        setOutputText('Converted Lua will appear here.');
        updateSummary([], '');
        setStatus('No item blocks were detected. Paste a Lua item table or a fenced code block.', true);
        return;
      }

      var items = itemBlocks.map(parseItemBlock);
      var converted = currentMode === 'ox-to-qb' ? formatQbItems(items) : formatOxItems(items);

      setOutputText(converted);
      updateSummary(items, converted);
      setStatus('Converted ' + items.length + ' item' + (items.length === 1 ? '' : 's') + '.', false);
    }

    var autoConvert = debounce(function () {
      if (inputEl && inputEl.value.trim() !== '') {
        convertCurrentValue();
      }
    }, 180);

    modeButtons.forEach(function (buttonEl) {
      buttonEl.addEventListener('click', function () {
        setMode(buttonEl.dataset.mode);
        if (inputEl && inputEl.value.trim() !== '') {
          convertCurrentValue();
        }
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
          inputEl.focus();
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
      copyBtn.addEventListener('click', copyOutputToClipboard);
    }

    if (copyOutputBtn) {
      copyOutputBtn.addEventListener('click', copyOutputToClipboard);
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
    contentRoot.dataset.itemConverterBound = '1';
  }

  window.SMDZ_initItemConverterTool = initItemConverterTool;
})();
