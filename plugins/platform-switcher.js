(function () {
  'use strict';

  var STORAGE_KEY = 'smdz-docs-platform';
  var VALID_PLATFORMS = {
    fivem: true,
    redm: true
  };
  var PLATFORM_LABELS = {
    fivem: 'FiveM',
    redm: 'RedM'
  };
  var PLATFORM_ICONS = {
    fivem: 'assets/fivem/logos/fivem-logo.png',
    redm: 'assets/redm/redm-logo.png'
  };
  var activePlatform = null;
  var lastFocusedElement = null;
  var dom = {
    selector: null,
    dialog: null,
    title: null,
    subtitle: null,
    closeButton: null,
    choices: [],
    switcher: null,
    switcherIcon: null,
    switcherLabel: null,
    switcherHint: null
  };

  function normalizePlatform(value) {
    var normalized = String(value || '').trim().toLowerCase();
    return VALID_PLATFORMS[normalized] ? normalized : null;
  }

  function getStoredPlatform() {
    try {
      return normalizePlatform(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return null;
    }
  }

  function storePlatform(platform) {
    try {
      window.localStorage.setItem(STORAGE_KEY, platform);
    } catch (error) {
      // Continue with the in-memory selection when storage is unavailable.
    }
  }

  function getRoutePath() {
    var hash = window.location.hash || '';
    var route = hash.indexOf('#/') === 0 ? hash.slice(1) : '/portal.md';
    return '/' + route.replace(/^\/+/, '').split('?')[0].split('#')[0];
  }

  function getRoutePlatform(routePath) {
    var normalizedRoute = String(routePath || getRoutePath()).toLowerCase();
    if (normalizedRoute.indexOf('/resources/fivem/') === 0) {
      return 'fivem';
    }
    if (normalizedRoute.indexOf('/resources/redm/') === 0) {
      return 'redm';
    }
    return null;
  }

  function migrateLegacyResourceRoute() {
    var routePath = getRoutePath();
    var legacyMatch = routePath.match(/^\/resources\/(paid|free|redesings|archived|bridge)(\/.*)?$/i);
    if (!legacyMatch) {
      return routePath;
    }

    var migratedRoute = '/resources/fivem/' + legacyMatch[1].toLowerCase() + (legacyMatch[2] || '');
    var nextUrl = window.location.href.split('#')[0] + '#' + migratedRoute;
    window.history.replaceState(null, '', nextUrl);
    return migratedRoute;
  }

  function setDocumentPlatform(platform) {
    var effectivePlatform = normalizePlatform(platform) || 'unselected';
    document.documentElement.setAttribute('data-docs-platform', effectivePlatform);
    document.documentElement.classList.toggle('platform-selection-required', effectivePlatform === 'unselected');
    if (document.body) {
      document.body.setAttribute('data-docs-platform', effectivePlatform);
    }
  }

  function getPlatform() {
    return activePlatform;
  }

  function getEffectivePlatform() {
    return activePlatform || 'fivem';
  }

  function getSidebarPath() {
    return '/_sidebar.' + getEffectivePlatform() + '.md';
  }

  function getPlatformLabel(platform) {
    return PLATFORM_LABELS[normalizePlatform(platform)] || 'Platform';
  }

  function getPlatformIcon(platform) {
    return PLATFORM_ICONS[normalizePlatform(platform)] || PLATFORM_ICONS.fivem;
  }

  function getFocusableElements() {
    if (!dom.dialog) {
      return [];
    }

    return Array.prototype.slice.call(dom.dialog.querySelectorAll('button:not([disabled]), [href], select:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter(function (element) {
        return !element.hidden && element.offsetParent !== null;
      });
  }

  function updateInterface() {
    var platform = getEffectivePlatform();
    var label = getPlatformLabel(platform);

    if (dom.switcher) {
      dom.switcher.hidden = !activePlatform;
      dom.switcher.setAttribute('data-platform', platform);
      dom.switcher.setAttribute('aria-label', 'Current platform: ' + label + '. Change platform');
    }
    if (dom.switcherIcon) {
      dom.switcherIcon.src = getPlatformIcon(platform);
      dom.switcherIcon.alt = '';
    }
    if (dom.switcherLabel) {
      dom.switcherLabel.textContent = label;
    }
    if (dom.switcherHint) {
      dom.switcherHint.textContent = 'CHANGE PLATFORM';
    }

    dom.choices.forEach(function (choiceButton) {
      var choicePlatform = normalizePlatform(choiceButton.getAttribute('data-platform'));
      var isSelected = Boolean(activePlatform && choicePlatform === activePlatform);
      choiceButton.classList.toggle('is-current', isSelected);
      choiceButton.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });

    var loaderStatus = document.querySelector('.page-loader-status');
    if (loaderStatus && activePlatform) {
      loaderStatus.textContent = 'Preparing ' + label + ' scripts, guides and support resources';
    }
  }

  function openSelector() {
    if (!dom.selector) {
      return;
    }

    lastFocusedElement = document.activeElement;
    dom.selector.hidden = false;
    dom.selector.setAttribute('aria-hidden', 'false');
    dom.selector.classList.remove('is-switching');
    document.body.classList.add('platform-selector-open');

    if (dom.title) {
      dom.title.textContent = 'CHOOSE YOUR PLATFORM';
    }
    if (dom.subtitle) {
      dom.subtitle.textContent = activePlatform
        ? 'The documentation space has changed. Navigation and search will be updated automatically.'
        : 'Select the ecosystem to load your scripts, guides, and navigation.';
    }
    if (dom.closeButton) {
      dom.closeButton.hidden = !activePlatform;
    }

    window.requestAnimationFrame(function () {
      dom.selector.classList.add('is-open');
      var currentChoice = dom.dialog.querySelector('.platform-choice.is-current');
      var firstChoice = dom.choices[0];
      (currentChoice || firstChoice || dom.closeButton).focus();
    });
  }

  function closeSelector(restoreFocus) {
    if (!dom.selector || !activePlatform) {
      return;
    }

    dom.selector.classList.remove('is-open');
    dom.selector.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('platform-selector-open');

    window.setTimeout(function () {
      if (!dom.selector.classList.contains('is-open')) {
        dom.selector.hidden = true;
      }
    }, 180);

    if (restoreFocus !== false && lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      window.setTimeout(function () {
        lastFocusedElement.focus();
      }, 0);
    }
  }

  function replaceResourceRouteWithPortal(nextPlatform) {
    var routePlatform = getRoutePlatform();
    if (!routePlatform || routePlatform === nextPlatform) {
      return;
    }

    var nextUrl = window.location.href.split('#')[0] + '#/portal.md';
    window.history.replaceState(null, '', nextUrl);
  }

  function selectPlatform(value, options) {
    var platform = normalizePlatform(value);
    var settings = options || {};
    if (!platform) {
      return false;
    }

    if (platform === activePlatform && settings.force !== true) {
      closeSelector();
      return true;
    }

    replaceResourceRouteWithPortal(platform);
    activePlatform = platform;
    storePlatform(platform);
    setDocumentPlatform(platform);
    updateInterface();

    window.dispatchEvent(new CustomEvent('smdz:platformchange', {
      detail: {
        platform: platform,
        label: getPlatformLabel(platform)
      }
    }));

    if (settings.reload === false) {
      closeSelector(false);
      return true;
    }

    if (dom.selector && !dom.selector.classList.contains('is-open')) {
      openSelector();
    }

    var selectedChoice = dom.dialog && dom.dialog.querySelector('.platform-choice[data-platform="' + platform + '"]');
    if (selectedChoice) {
      selectedChoice.classList.add('is-selecting');
    }
    if (dom.selector) {
      dom.selector.classList.add('is-switching');
    }
    if (dom.title) {
      dom.title.textContent = 'SWITCHING TO ' + getPlatformLabel(platform).toUpperCase();
    }
    if (dom.subtitle) {
      dom.subtitle.textContent = 'Preparing navigation, routes, and search ' + getPlatformLabel(platform) + '…';
    }

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(function () {
      window.location.reload();
    }, reduceMotion ? 60 : 240);

    return true;
  }

  function handleDialogKeydown(event) {
    if (!dom.selector || !dom.selector.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      if (activePlatform) {
        event.preventDefault();
        closeSelector();
      }
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    var focusableElements = getFocusableElements();
    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    var firstElement = focusableElements[0];
    var lastElement = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function initializeDom() {
    dom.selector = document.getElementById('platform-selector');
    dom.dialog = document.getElementById('platform-selector-dialog');
    dom.title = document.getElementById('platform-selector-title');
    dom.subtitle = document.getElementById('platform-selector-subtitle');
    dom.closeButton = document.getElementById('platform-selector-close');
    dom.choices = Array.prototype.slice.call(document.querySelectorAll('.platform-choice[data-platform]'));
    dom.switcher = document.getElementById('docs-platform-switcher');
    dom.switcherIcon = dom.switcher ? dom.switcher.querySelector('.docs-platform-switcher__icon') : null;
    dom.switcherLabel = dom.switcher ? dom.switcher.querySelector('.docs-platform-switcher__label') : null;
    dom.switcherHint = dom.switcher ? dom.switcher.querySelector('.docs-platform-switcher__hint') : null;

    setDocumentPlatform(activePlatform);
    updateInterface();

    dom.choices.forEach(function (choiceButton) {
      choiceButton.addEventListener('click', function () {
        selectPlatform(choiceButton.getAttribute('data-platform'));
      });
    });

    if (dom.switcher) {
      dom.switcher.addEventListener('click', openSelector);
    }
    if (dom.closeButton) {
      dom.closeButton.addEventListener('click', function () {
        closeSelector();
      });
    }
    if (dom.selector) {
      dom.selector.addEventListener('mousedown', function (event) {
        if (event.target === dom.selector && activePlatform) {
          closeSelector();
        }
      });
    }

    document.addEventListener('keydown', handleDialogKeydown);

    if (!activePlatform) {
      openSelector();
    } else if (dom.selector) {
      dom.selector.hidden = true;
      dom.selector.setAttribute('aria-hidden', 'true');
    }
  }

  var currentRoute = migrateLegacyResourceRoute();
  var routePlatform = getRoutePlatform(currentRoute);
  activePlatform = routePlatform || getStoredPlatform();
  if (routePlatform) {
    storePlatform(routePlatform);
  }
  setDocumentPlatform(activePlatform);

  window.SMDZ_PLATFORM = Object.freeze({
    get: getPlatform,
    getEffective: getEffectivePlatform,
    getLabel: getPlatformLabel,
    getIcon: getPlatformIcon,
    getRoutePlatform: getRoutePlatform,
    getSidebarPath: getSidebarPath,
    open: openSelector,
    close: closeSelector,
    select: selectPlatform
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDom, { once: true });
  } else {
    initializeDom();
  }
})();
