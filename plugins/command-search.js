(function () {
  'use strict';

  if (!window.$docsify) {
    return;
  }

  var SEARCH_STORAGE_KEY = 'smdz-command-search-recents';
  var MAX_RECENTS = 5;
  var MAX_RESULTS = 20;
  var INDEX_READY_TIMEOUT = 1200;

  var api = {
    open: openSearch,
    close: closeSearch,
    rebuild: buildIndex
  };

  var state = {
    initialized: false,
    open: false,
    loading: false,
    ready: false,
    error: '',
    query: '',
    results: [],
    activeIndex: 0,
    opener: null,
    pendingTarget: null,
    debounceTimer: null,
    indexPromise: null,
    index: [],
    recent: loadRecentSearches()
  };

  var dom = {
    launcher: null,
    overlay: null,
    dialog: null,
    input: null,
    closeButton: null,
    clearRecentButton: null,
    status: null,
    helper: null,
    recent: null,
    results: null
  };

  var searchIconSvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.3 18.9-4.1-4.1a7 7 0 1 0-1.4 1.4l4.1 4.1 1.4-1.4ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"></path></svg>';

  var documentIconSvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 2h8l6 6v14H6V2Zm8 1.5V9h5.5L14 3.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h4v2H8V8Z"></path></svg>';

  var arrowIconSvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m13.17 12-4.59-4.59L10 6l6 6-6 6-1.41-1.41L13.17 12Z"></path></svg>';

  var clearIconSvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 3.5h6a1.5 1.5 0 0 1 1.5 1.5V6H19a1 1 0 1 1 0 2h-1l-.75 10.1A2.5 2.5 0 0 1 14.76 20H9.24a2.5 2.5 0 0 1-2.49-1.9L6 8H5a1 1 0 1 1 0-2h2.5V5A1.5 1.5 0 0 1 9 3.5Zm1 2V6h4v-.5H10ZM8.01 8l.73 9.84a.5.5 0 0 0 .5.38h5.52a.5.5 0 0 0 .5-.38L16 8H8.01Z"></path></svg>';

  var spinnerSvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="command-search-spinner"><circle cx="12" cy="12" r="9"></circle></svg>';

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
      return;
    }

    callback();
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeRegExp(text) {
    return String(text || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function normalizeText(text) {
    return String(text || '')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function stripSearchTagsBlock(markdown) {
    return String(markdown || '').replace(/<!--\s*AUTO_SEARCH_TAGS:START\s*-->[\s\S]*?<!--\s*AUTO_SEARCH_TAGS:END\s*-->/gi, '');
  }

  function extractBoostKeywords(markdown) {
    var keywords = [];
    var text = String(markdown || '');
    var match = text.match(/<p class="search-keyword-boost"[^>]*>\s*search tags\s+([^<]+)\s*<\/p>/i);

    if (!match || !match[1]) {
      return keywords;
    }

    match[1]
      .replace(/[^a-z0-9\s-]+/gi, ' ')
      .split(/\s+/)
      .forEach(function (token) {
        var normalized = normalizeText(token);
        if (!normalized || keywords.indexOf(normalized) !== -1) {
          return;
        }

        keywords.push(normalized);
      });

    return keywords;
  }

  function cleanInlineMarkdown(text) {
    return String(text || '')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function stripMarkdown(markdown) {
    return String(markdown || '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/^\s{0,3}#{1,6}\s+/gm, '')
      .replace(/^\s{0,3}>\s?/gm, '')
      .replace(/^\s*[-*+]\s+/gm, ' ')
      .replace(/^\s*\d+\.\s+/gm, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[`*_~]/g, ' ')
      .replace(/\r\n/g, '\n')
      .replace(/\n+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function slugify(text) {
    return normalizeText(text).replace(/\s+/g, '-');
  }

  function fallbackTitleFromRoute(route) {
    var cleanRoute = String(route || '').replace(/^\/+/, '');
    var fileName = cleanRoute.split('/').pop() || cleanRoute;
    var name = fileName.replace(/\.md$/i, '').replace(/[-_]+/g, ' ').trim();

    if (!name) {
      return 'Documentation';
    }

    return name.replace(/\b\w/g, function (letter) {
      return letter.toUpperCase();
    });
  }

  function getBaseUrl() {
    return window.location.href.split('#')[0].split('?')[0];
  }

  function resolveMarkdownUrl(route) {
    return new URL(String(route || '').replace(/^\/+/, ''), getBaseUrl()).toString();
  }

  function getRouteCategory(route) {
    var cleanRoute = String(route || '').replace(/^\/+/, '');
    var parts = cleanRoute.split('/');

    if (parts.length > 1) {
      return parts[0].replace(/[-_]+/g, ' ');
    }

    return 'documentation';
  }

  function getRouteLabel(route) {
    return String(route || '').replace(/^\/+/, '').replace(/\.md$/i, '');
  }

  function getCurrentRoute() {
    var hash = window.location.hash || '';

    if (hash.indexOf('#/') !== 0) {
      return '/portal.md';
    }

    var route = hash.slice(2).split('?')[0].split('#')[0].trim();

    if (!route) {
      return '/portal.md';
    }

    return '/' + route.replace(/^\/+/, '');
  }

  function normalizeRoute(route) {
    return '/' + String(route || '').replace(/^\/+/, '').trim();
  }

  function loadRecentSearches() {
    try {
      var stored = window.localStorage.getItem(SEARCH_STORAGE_KEY);
      if (!stored) {
        return [];
      }

      var parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .map(function (item) {
          return String(item || '').trim();
        })
        .filter(Boolean)
        .slice(0, MAX_RECENTS);
    } catch (error) {
      return [];
    }
  }

  function saveRecentSearches(list) {
    try {
      window.localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(list.slice(0, MAX_RECENTS)));
    } catch (error) {
      // Ignore storage failures in restricted environments.
    }
  }

  function addRecentSearch(query) {
    var normalized = String(query || '').trim();
    if (!normalized) {
      return;
    }

    var lower = normalized.toLowerCase();
    var next = state.recent.filter(function (item) {
      return item.toLowerCase() !== lower;
    });

    next.unshift(normalized);
    next = next.slice(0, MAX_RECENTS);
    state.recent = next;
    saveRecentSearches(next);
  }

  function clearRecentSearches() {
    state.recent = [];

    try {
      window.localStorage.removeItem(SEARCH_STORAGE_KEY);
    } catch (error) {
      // Ignore storage failures in restricted environments.
    }

    renderView();
  }

  function getNGrams(text, size) {
    var source = normalizeText(text).replace(/\s+/g, '');
    var grams = [];

    if (source.length < size) {
      return source ? [source] : [];
    }

    for (var index = 0; index <= source.length - size; index += 1) {
      grams.push(source.slice(index, index + size));
    }

    return grams;
  }

  function diceCoefficient(a, b) {
    var first = getNGrams(a, 2);
    var second = getNGrams(b, 2);
    var i;
    var overlap = 0;
    var counts = Object.create(null);

    if (first.length === 0 || second.length === 0) {
      return 0;
    }

    for (i = 0; i < first.length; i += 1) {
      counts[first[i]] = (counts[first[i]] || 0) + 1;
    }

    for (i = 0; i < second.length; i += 1) {
      if (counts[second[i]]) {
        counts[second[i]] -= 1;
        overlap += 1;
      }
    }

    return (2 * overlap) / (first.length + second.length);
  }

  function bestSimilarity(query, candidates) {
    var best = 0;
    var i;

    for (i = 0; i < candidates.length; i += 1) {
      best = Math.max(best, diceCoefficient(query, candidates[i]));
    }

    return best;
  }

  function parseMarkdown(route, markdown) {
    var source = stripSearchTagsBlock(String(markdown || '').replace(/\r\n/g, '\n'));
    var keywords = extractBoostKeywords(markdown);
    var lines = source.split('\n');
    var sections = [];
    var current = {
      heading: '',
      level: 0,
      lines: []
    };
    var pageTitle = fallbackTitleFromRoute(route);
    var hasPageTitle = false;
    var inCode = false;
    var index;

    function commitCurrentSection() {
      var bodyText = stripMarkdown(current.lines.join('\n'));

      if (!current.heading && !bodyText) {
        current.lines = [];
        return;
      }

      sections.push({
        heading: current.heading,
        level: current.level,
        bodyText: bodyText
      });
      current = {
        heading: '',
        level: 0,
        lines: []
      };
    }

    for (index = 0; index < lines.length; index += 1) {
      var line = lines[index];
      var trimmed = line.trim();

      if (/^```/.test(trimmed)) {
        inCode = !inCode;
        current.lines.push(line);
        continue;
      }

      if (!inCode) {
        var headingMatch = line.match(/^(#{1,6})\s+(.+?)\s*$/);
        if (headingMatch) {
          var level = headingMatch[1].length;
          var headingText = cleanInlineMarkdown(headingMatch[2]);

          if (level === 1 && !hasPageTitle) {
            if (current.lines.length > 0) {
              commitCurrentSection();
            }

            pageTitle = headingText || pageTitle;
            hasPageTitle = true;
            current = {
              heading: '',
              level: 0,
              lines: []
            };
            continue;
          }

          commitCurrentSection();
          current = {
            heading: headingText,
            level: level,
            lines: []
          };
          continue;
        }
      }

      current.lines.push(line);
    }

    commitCurrentSection();

    return sections.map(function (section, sectionIndex) {
      var searchTitle = section.heading || pageTitle;
      var plainText = section.bodyText || '';
      var searchable = normalizeText([
        pageTitle,
        searchTitle,
        keywords.join(' '),
        plainText
      ].join(' '));

      return {
        id: route.replace(/^\/+/, '') + '::' + (section.heading ? slugify(section.heading) : 'overview') + '::' + sectionIndex,
        route: route,
        routeLabel: getRouteLabel(route),
        category: getRouteCategory(route),
        pageTitle: pageTitle,
        sectionTitle: section.heading || '',
        sectionAnchor: section.heading ? slugify(section.heading) : '',
        keywords: keywords,
        keywordsText: normalizeText(keywords.join(' ')),
        plainText: plainText,
        searchText: searchable
      };
    });
  }

  function dedupeEntries(entries) {
    var seen = Object.create(null);
    var output = [];
    var i;

    for (i = 0; i < entries.length; i += 1) {
      var entry = entries[i];
      if (!entry || !entry.id || seen[entry.id]) {
        continue;
      }

      seen[entry.id] = true;
      output.push(entry);
    }

    return output;
  }

  function scoreEntry(entry, query, tokens) {
    var queryNorm = normalizeText(query);
    var title = normalizeText(entry.pageTitle);
    var section = normalizeText(entry.sectionTitle);
    var keywords = entry.keywordsText || '';
    var searchable = entry.searchText || '';
    var score = 0;
    var i;

    if (!queryNorm) {
      return 0;
    }

    if (title === queryNorm) {
      score += 100000;
    }

    if (section && section === queryNorm) {
      score += 95000;
    }

    if (title.indexOf(queryNorm) === 0) {
      score += 70000;
    }

    if (section && section.indexOf(queryNorm) === 0) {
      score += 65000;
    }

    if (title.indexOf(queryNorm) !== -1) {
      score += 50000;
    }

    if (section && section.indexOf(queryNorm) !== -1) {
      score += 42000;
    }

    if (keywords.indexOf(queryNorm) !== -1) {
      score += 30000;
    }

    if (searchable.indexOf(queryNorm) !== -1) {
      score += 15000;
    }

    for (i = 0; i < tokens.length; i += 1) {
      var token = tokens[i];

      if (!token) {
        continue;
      }

      if (title.indexOf(token) !== -1) {
        score += 9000;
      }

      if (section && section.indexOf(token) !== -1) {
        score += 8000;
      }

      if (keywords.indexOf(token) !== -1) {
        score += 7000;
      }

      if (searchable.indexOf(token) !== -1) {
        score += 4000;
      }
    }

    if (tokens.length > 0) {
      var tokenCoverage = tokens.every(function (token) {
        return searchable.indexOf(token) !== -1;
      });

      if (tokenCoverage) {
        score += 20000;
      }
    }

    score += Math.round(bestSimilarity(queryNorm, [title]) * 25000);
    score += Math.round(bestSimilarity(queryNorm, section ? [section] : []) * 22000);
    score += Math.round(bestSimilarity(queryNorm, [keywords]) * 18000);
    score += Math.round(bestSimilarity(queryNorm, [searchable.slice(0, 2400)]) * 6000);

    return score;
  }

  function buildSnippet(entry, tokens, query) {
    var text = entry.plainText || '';
    var lowerText = normalizeText(text);
    var queryNorm = normalizeText(query);
    var start = 0;
    var i;

    if (!text) {
      return '';
    }

    if (queryNorm) {
      var directIndex = lowerText.indexOf(queryNorm);
      if (directIndex !== -1) {
        start = directIndex;
      } else {
        for (i = 0; i < tokens.length; i += 1) {
          var tokenIndex = lowerText.indexOf(tokens[i]);
          if (tokenIndex !== -1) {
            start = tokenIndex;
            break;
          }
        }
      }
    }

    start = Math.max(0, start - 60);
    var end = Math.min(text.length, start + 180);
    var snippet = text.slice(start, end).trim();

    if (start > 0) {
      snippet = '… ' + snippet;
    }

    if (end < text.length) {
      snippet += ' …';
    }

    return snippet;
  }

  function highlightHtml(text, tokens) {
    var escaped = escapeHtml(text);
    var filtered = tokens.filter(function (token, index) {
      return token && tokens.indexOf(token) === index;
    });

    if (!filtered.length) {
      return escaped;
    }

    var pattern = new RegExp('(' + filtered.map(escapeRegExp).join('|') + ')', 'ig');
    return escaped.replace(pattern, '<mark>$1</mark>');
  }

  function fetchMarkdown(route) {
    return fetch(resolveMarkdownUrl(route), { credentials: 'same-origin' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Failed to load ' + route + ' (' + response.status + ')');
        }

        return response.text();
      })
      .then(function (text) {
        return parseMarkdown(route, text);
      });
  }

  function allSettled(promises) {
    if (Promise.allSettled) {
      return Promise.allSettled(promises);
    }

    return Promise.all(promises.map(function (promise) {
      return Promise.resolve(promise).then(
        function (value) {
          return {
            status: 'fulfilled',
            value: value
          };
        },
        function (reason) {
          return {
            status: 'rejected',
            reason: reason
          };
        }
      );
    }));
  }

  function buildIndex() {
    if (state.indexPromise) {
      return state.indexPromise;
    }

    var routes = Array.isArray(window.SMDZ_COMMAND_SEARCH_PAGES) ? window.SMDZ_COMMAND_SEARCH_PAGES.slice() : [];
    state.loading = true;
    state.error = '';
    renderView();

    state.indexPromise = allSettled(
      routes.map(function (route) {
        return fetchMarkdown(route);
      })
    ).then(function (results) {
      var entries = [];
      var failures = [];
      var i;

      for (i = 0; i < results.length; i += 1) {
        var result = results[i];
        if (result.status === 'fulfilled') {
          entries = entries.concat(result.value || []);
        } else {
          failures.push(result.reason);
        }
      }

      state.index = dedupeEntries(entries);
      state.ready = true;
      state.loading = false;

      if (state.index.length === 0) {
        state.error = 'Unable to build the search index.';
      } else {
        state.error = '';
      }

      if (failures.length > 0) {
        console.warn('[command-search] Some pages failed to index:', failures);
      }

      renderView();
      return state.index;
    }).catch(function (error) {
      state.loading = false;
      state.ready = false;
      state.error = error && error.message ? error.message : 'Unable to build the search index.';
      renderView();
      throw error;
    });

    return state.indexPromise;
  }

  function scheduleIndexBuild() {
    var schedule = window.requestIdleCallback || function (callback) {
      return window.setTimeout(callback, INDEX_READY_TIMEOUT);
    };

    schedule(function () {
      buildIndex();
    });
  }

  function searchEntries(query) {
    var normalized = normalizeText(query);
    var tokens = normalized ? normalized.split(' ') : [];
    var results = [];
    var i;

    for (i = 0; i < state.index.length; i += 1) {
      var entry = state.index[i];
      var score = scoreEntry(entry, query, tokens);

      if (score <= 0) {
        continue;
      }

      results.push({
        id: entry.id,
        route: entry.route,
        routeLabel: entry.routeLabel,
        category: entry.category,
        pageTitle: entry.pageTitle,
        sectionTitle: entry.sectionTitle,
        sectionAnchor: entry.sectionAnchor,
        plainText: entry.plainText,
        score: score,
        snippet: buildSnippet(entry, tokens, query)
      });
    }

    results.sort(function (a, b) {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.pageTitle.localeCompare(b.pageTitle);
    });

    return results.slice(0, MAX_RESULTS);
  }

  function createLauncher() {
    var launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.className = 'command-search-launcher';
    launcher.hidden = true;
    launcher.setAttribute('aria-label', 'Search documentation');
    launcher.setAttribute('aria-haspopup', 'dialog');
    launcher.setAttribute('aria-controls', 'command-search-dialog');
    launcher.innerHTML =
      '<span class="command-search-launcher-icon" aria-hidden="true">' + searchIconSvg + '</span>' +
      '<span class="command-search-launcher-label">Search documentation...</span>' +
      '<span class="command-search-launcher-kbd" aria-hidden="true">Ctrl K</span>';

    launcher.addEventListener('click', function () {
      openSearch();
    });

    dom.launcher = launcher;
    document.body.appendChild(launcher);
    placeLauncherInSidebar();
  }

  function placeLauncherInSidebar() {
    if (!dom.launcher) {
      return;
    }

    var sidebarParent = document.querySelector('.sidebar');
    var nav = document.querySelector('.sidebar-nav');

    if (sidebarParent && nav && nav.parentNode === sidebarParent) {
      dom.launcher.classList.add('command-search-launcher--sidebar');
      sidebarParent.insertBefore(dom.launcher, nav);
      dom.launcher.hidden = false;
      return;
    }

    dom.launcher.classList.remove('command-search-launcher--sidebar');
    dom.launcher.hidden = true;
  }

  function createModal() {
    var overlay = document.createElement('div');
    overlay.className = 'command-search-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="command-search-backdrop" data-command-search-close></div>' +
      '<div id="command-search-dialog" class="command-search-modal" role="dialog" aria-modal="true" aria-labelledby="command-search-title">' +
        '<div class="command-search-shell">' +
          '<div class="command-search-header">' +
            '<div class="command-search-titleblock">' +
              '<p id="command-search-title" class="command-search-title">Search documentation</p>' +
              '<p class="command-search-subtitle">Type a page, heading or keyword.</p>' +
            '</div>' +
            '<button type="button" class="command-search-close" aria-label="Close search" data-command-search-close>' +
              '<span aria-hidden="true">×</span>' +
            '</button>' +
          '</div>' +
          '<label class="command-search-inputwrap" for="command-search-input">' +
            '<span class="command-search-inputicon" aria-hidden="true">' + searchIconSvg + '</span>' +
            '<input id="command-search-input" class="command-search-input" type="text" autocomplete="off" spellcheck="false" placeholder="Search documentation..." aria-label="Search documentation" aria-controls="command-search-results" aria-activedescendant="" />' +
            '<span class="command-search-esc" aria-hidden="true">ESC</span>' +
          '</label>' +
          '<div class="command-search-toolbar">' +
            '<div class="command-search-status" aria-live="polite"></div>' +
            '<button type="button" class="command-search-clear-recents" aria-label="Clear recent searches" data-tooltip="Clear recent searches" hidden>' +
              clearIconSvg +
            '</button>' +
          '</div>' +
          '<div class="command-search-helper">' +
            '<span>Arrow keys to navigate</span>' +
            '<span>Enter to open</span>' +
            '<span>Escape to close</span>' +
          '</div>' +
          '<div class="command-search-recents" hidden>' +
            '<div class="command-search-recents-title">Recent searches</div>' +
            '<div class="command-search-recents-list"></div>' +
          '</div>' +
          '<div class="command-search-results" id="command-search-results" role="listbox" aria-label="Search results"></div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    dom.overlay = overlay;
    dom.dialog = overlay.querySelector('.command-search-modal');
    dom.input = overlay.querySelector('.command-search-input');
    dom.closeButton = overlay.querySelector('.command-search-close');
    dom.clearRecentButton = overlay.querySelector('.command-search-clear-recents');
    dom.status = overlay.querySelector('.command-search-status');
    dom.helper = overlay.querySelector('.command-search-helper');
    dom.recent = overlay.querySelector('.command-search-recents');
    dom.results = overlay.querySelector('.command-search-results');

    overlay.addEventListener('click', function (event) {
      if (event.target && event.target.hasAttribute('data-command-search-close')) {
        closeSearch(true);
      }
    });

    dom.closeButton.addEventListener('click', function () {
      closeSearch(true);
    });

    dom.clearRecentButton.addEventListener('click', function () {
      clearRecentSearches();
    });

    dom.input.addEventListener('input', debounce(function () {
      applyQuery(dom.input.value);
    }, 90));

    dom.input.addEventListener('keydown', onInputKeydown);
    dom.dialog.addEventListener('keydown', onDialogKeydown);
    dom.overlay.setAttribute('aria-hidden', 'true');
  }

  function setActiveIndex(index) {
    var resultCount = state.results.length;

    if (resultCount === 0) {
      state.activeIndex = -1;
      renderView();
      return;
    }

    state.activeIndex = (index + resultCount) % resultCount;
    renderResults();
    ensureSelectedVisible();
    updateActivedescendant();
  }

  function ensureSelectedVisible() {
    var selected = dom.results.querySelector('.command-search-result.is-active');

    if (selected && selected.scrollIntoView) {
      selected.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }

  function updateActivedescendant() {
    var selected = dom.results.querySelector('.command-search-result.is-active');
    if (!dom.input) {
      return;
    }

    if (selected) {
      dom.input.setAttribute('aria-activedescendant', selected.id);
    } else {
      dom.input.removeAttribute('aria-activedescendant');
    }
  }

  function renderLoadingState() {
    dom.status.innerHTML = '<span class="command-search-status-chip">' + spinnerSvg + 'Building index...</span>';
    dom.helper.hidden = true;
    dom.recent.hidden = true;
    dom.clearRecentButton.hidden = true;
    dom.results.innerHTML = '';
  }

  function renderErrorState() {
    dom.status.innerHTML =
      '<span class="command-search-status-chip command-search-status-chip--error">Error loading index</span>';
    dom.helper.hidden = true;
    dom.recent.hidden = true;
    dom.clearRecentButton.hidden = true;
    dom.results.innerHTML =
      '<div class="command-search-empty command-search-empty--error">' +
        '<p>We could not build the search index.</p>' +
        '<button type="button" class="command-search-retry">Retry</button>' +
      '</div>';

    var retryButton = dom.results.querySelector('.command-search-retry');
    if (retryButton) {
      retryButton.addEventListener('click', function () {
        state.indexPromise = null;
        buildIndex();
      });
    }
  }

  function renderEmptyState() {
    var hasRecents = state.recent.length > 0;

    dom.status.textContent = 'Ready to search';
    dom.helper.hidden = false;
    dom.recent.hidden = !hasRecents;
    dom.clearRecentButton.hidden = !hasRecents;

    if (hasRecents) {
      renderRecentSearches();
    } else {
      dom.results.innerHTML =
        '<div class="command-search-empty">' +
          '<p>Search by title, heading, page path or keyword.</p>' +
          '<p class="command-search-empty-hint">Use the keyboard shortcuts above to move through results fast.</p>' +
        '</div>';
    }
  }

  function renderNoResultsState() {
    dom.status.textContent = 'No results found';
    dom.helper.hidden = true;
    dom.recent.hidden = true;
    dom.clearRecentButton.hidden = true;
    dom.results.innerHTML =
      '<div class="command-search-empty command-search-empty--empty">' +
        '<p>No matching documentation was found.</p>' +
        '<p class="command-search-empty-hint">Try a shorter phrase or a related keyword.</p>' +
      '</div>';
  }

  function renderResults() {
    var frag = document.createDocumentFragment();
    var tokens = normalizeText(state.query) ? normalizeText(state.query).split(' ') : [];
    var i;

    dom.results.innerHTML = '';

    for (i = 0; i < state.results.length; i += 1) {
      var result = state.results[i];
      var button = document.createElement('button');
      var titleText = result.pageTitle;
      var sectionText = result.sectionTitle && result.sectionTitle !== result.pageTitle ? result.sectionTitle : '';
      var metaRoute = result.routeLabel;
      var isActive = i === state.activeIndex;

      button.type = 'button';
      button.className = 'command-search-result' + (isActive ? ' is-active' : '');
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      button.setAttribute('id', 'command-search-option-' + i);
      button.setAttribute('data-index', String(i));
      button.innerHTML =
        '<span class="command-search-result-icon" aria-hidden="true">' + documentIconSvg + '</span>' +
        '<span class="command-search-result-body">' +
          '<span class="command-search-result-headline">' +
            '<span class="command-search-result-title">' + highlightHtml(titleText, tokens) + '</span>' +
            (sectionText ? '<span class="command-search-result-section">' + highlightHtml(sectionText, tokens) + '</span>' : '') +
          '</span>' +
          '<span class="command-search-result-snippet">' + highlightHtml(result.snippet || '', tokens) + '</span>' +
          '<span class="command-search-result-meta">' +
            '<span class="command-search-result-category">' + escapeHtml(result.category) + '</span>' +
            '<span class="command-search-result-route">' + escapeHtml(metaRoute) + '</span>' +
          '</span>' +
        '</span>' +
        '<span class="command-search-result-chevron" aria-hidden="true">' + arrowIconSvg + '</span>';

      button.addEventListener('click', function () {
        var index = parseInt(this.getAttribute('data-index'), 10);
        openSelectedResult(index);
      });

      frag.appendChild(button);
    }

    dom.results.appendChild(frag);
    updateActivedescendant();
  }

  function renderRecentSearches() {
    var list = document.createElement('div');
    var i;

    list.className = 'command-search-recents-grid';

    for (i = 0; i < state.recent.length; i += 1) {
      var query = state.recent[i];
      var chip = document.createElement('button');

      chip.type = 'button';
      chip.className = 'command-search-recent';
      chip.textContent = query;
      chip.addEventListener('click', (function (recentQuery) {
        return function () {
          dom.input.value = recentQuery;
          applyQuery(recentQuery);
          dom.input.focus();
        };
      })(query));

      list.appendChild(chip);
    }

    dom.results.innerHTML = '';
    dom.results.appendChild(list);
  }

  function renderView() {
    if (!dom.dialog) {
      return;
    }

    dom.clearRecentButton.hidden = state.recent.length === 0;

    if (state.loading && !state.ready) {
      renderLoadingState();
      return;
    }

    if (state.error && !state.ready) {
      renderErrorState();
      return;
    }

    if (!state.query.trim()) {
      renderEmptyState();
      return;
    }

    if (!state.results.length) {
      renderNoResultsState();
      return;
    }

    dom.status.textContent = state.results.length + ' result' + (state.results.length === 1 ? '' : 's');
    dom.helper.hidden = true;
    dom.recent.hidden = true;
    dom.clearRecentButton.hidden = true;
    renderResults();
  }

  function applyQuery(value) {
    state.query = String(value || '');

    if (!state.ready) {
      renderView();
      return;
    }

    var normalized = normalizeText(state.query);
    if (!normalized) {
      state.results = [];
      state.activeIndex = 0;
      renderView();
      return;
    }

    state.results = searchEntries(state.query);
    state.activeIndex = state.results.length ? 0 : -1;
    renderView();
    ensureSelectedVisible();
    updateActivedescendant();
  }

  function openSearch() {
    if (!dom.overlay) {
      return;
    }

    if (!state.initialized) {
      initialize();
    }

    state.open = true;
    state.opener = document.activeElement;
    dom.overlay.classList.add('is-open');
    dom.overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('command-search-open');
    dom.input.value = state.query;
    renderView();

    window.setTimeout(function () {
      dom.input.focus();
      dom.input.select();
    }, 0);

    if (!state.ready && !state.loading) {
      buildIndex();
    }
  }

  function closeSearch(restoreFocus) {
    if (!dom.overlay) {
      return;
    }

    state.open = false;
    dom.overlay.classList.remove('is-open');
    dom.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('command-search-open');
    dom.input.setAttribute('aria-activedescendant', '');

    if (restoreFocus !== false && state.opener && typeof state.opener.focus === 'function') {
      window.setTimeout(function () {
        try {
          state.opener.focus();
        } catch (error) {
          // Ignore focus restoration errors.
        }
      }, 0);
    }
  }

  function openSelectedResult(index) {
    if (typeof index !== 'number' || index < 0 || index >= state.results.length) {
      return;
    }

    var result = state.results[index];
    if (!result) {
      return;
    }

    addRecentSearch(state.query);
    state.pendingTarget = {
      route: result.route,
      sectionTitle: result.sectionTitle,
      sectionAnchor: result.sectionAnchor
    };

    closeSearch(false);

    var nextHash = '#/' + result.route.replace(/^\/+/, '');
    var currentHash = window.location.hash || '';

    if (currentHash === nextHash) {
      window.setTimeout(function () {
        scrollToPendingTarget();
      }, 0);
      return;
    }

    window.location.hash = nextHash;
  }

  function scrollToPendingTarget() {
    if (!state.pendingTarget) {
      return;
    }

    var target = state.pendingTarget;
    var currentRoute = getCurrentRoute();

    if (normalizeRoute(currentRoute) !== normalizeRoute(target.route)) {
      return;
    }

    var sectionHeading = String(target.sectionTitle || '').trim();
    var sectionAnchor = String(target.sectionAnchor || '').trim();
    var contentRoot = document.querySelector('.markdown-section');
    var headings = contentRoot ? contentRoot.querySelectorAll('h1, h2, h3, h4, h5, h6') : [];
    var i;
    var targetEl = null;

    for (i = 0; i < headings.length; i += 1) {
      var heading = headings[i];
      var headingText = normalizeText(heading.textContent || '');
      var headingSlug = heading.id ? normalizeText(heading.id.replace(/[-_]+/g, ' ')) : '';

      if (sectionAnchor && heading.id && normalizeText(heading.id) === normalizeText(sectionAnchor)) {
        targetEl = heading;
        break;
      }

      if (sectionHeading && (headingText === normalizeText(sectionHeading) || headingSlug === normalizeText(sectionHeading))) {
        targetEl = heading;
        break;
      }
    }

    if (!targetEl && contentRoot) {
      targetEl = contentRoot.querySelector('h1');
    }

    if (targetEl && targetEl.scrollIntoView) {
      var topBarsOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--top-bars-offset'), 10) || 0;
      var scrollTop = window.pageYOffset + targetEl.getBoundingClientRect().top - topBarsOffset - 84;

      window.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: 'smooth'
      });
    }

    state.pendingTarget = null;
  }

  function onGlobalKeydown(event) {
    var key = String(event.key || '').toLowerCase();

    if ((event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey && key === 'k') {
      event.preventDefault();
      openSearch();
      return;
    }

    if (!state.open) {
      return;
    }

    if (key === 'escape') {
      event.preventDefault();
      closeSearch(true);
    }
  }

  function onInputKeydown(event) {
    var key = String(event.key || '').toLowerCase();

    if (!state.open) {
      return;
    }

    if (key === 'arrowdown') {
      event.preventDefault();
      if (state.results.length) {
        setActiveIndex(state.activeIndex + 1);
      }
      return;
    }

    if (key === 'arrowup') {
      event.preventDefault();
      if (state.results.length) {
        setActiveIndex(state.activeIndex - 1);
      }
      return;
    }

    if (key === 'enter') {
      event.preventDefault();
      if (state.results.length) {
        openSelectedResult(state.activeIndex < 0 ? 0 : state.activeIndex);
      }
      return;
    }

    if (key === 'escape') {
      event.preventDefault();
      closeSearch(true);
    }
  }

  function getFocusableElements() {
    if (!dom.dialog) {
      return [];
    }

    return Array.prototype.slice.call(
      dom.dialog.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      )
    ).filter(function (element) {
      return element.offsetParent !== null || element === document.activeElement;
    });
  }

  function onDialogKeydown(event) {
    if (!state.open) {
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    var focusables = getFocusableElements();
    if (!focusables.length) {
      return;
    }

    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    var active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function debounce(fn, wait) {
    return function () {
      var context = this;
      var args = arguments;

      window.clearTimeout(state.debounceTimer);
      state.debounceTimer = window.setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }

  function initialize() {
    if (state.initialized) {
      return;
    }

    state.initialized = true;
    createLauncher();
    createModal();
    document.addEventListener('keydown', onGlobalKeydown, true);
    scheduleIndexBuild();
  }

  function registerPlugin() {
    var plugins = window.$docsify.plugins = window.$docsify.plugins || [];

    plugins.push(function (hook, vm) {
      hook.mounted(function () {
        initialize();
      });

      hook.doneEach(function () {
        placeLauncherInSidebar();

        if (state.open) {
          renderView();
        }

        scrollToPendingTarget();
      });
    });
  }

  registerPlugin();

  window.SMDZCommandSearch = api;
})();
