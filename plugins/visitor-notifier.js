(function () {
  'use strict';

  var config = window.SMDZ_VISITOR_CONFIG || {};
  var deliveryStarted = false;

  if (!config.enabled || !config.webhookUrl || wasAlreadyNotified()) {
    return;
  }

  getLocation()
    .catch(function () {
      return {};
    })
    .then(sendVisitorAlert)
    .catch(function (error) {
      console.warn('[SMDZ Docs Monitor] Visitor alert failed:', error.message);
    });

  function sendVisitorAlert(location) {
    if (deliveryStarted) {
      return Promise.resolve();
    }

    deliveryStarted = true;

    var visitedAt = new Date();
    var unixTimestamp = Math.floor(visitedAt.getTime() / 1000);
    var pagePath = window.location.pathname + window.location.search + window.location.hash;
    var referrer = document.referrer || 'Direct visit';
    var language = navigator.language || 'Unknown';
    var screenSize = window.screen ? window.screen.width + 'x' + window.screen.height : 'Unknown';
    var viewportSize = window.innerWidth + 'x' + window.innerHeight;
    var userAgent = navigator.userAgent || 'Unknown';
    var country = getCountryName(location.country);
    var locationSummary = [location.city, location.region, country].filter(Boolean).join(', ') || 'Unknown';

    var payload = {
      username: 'SMDZ Docs Monitor',
      avatar_url: 'https://docs.smdz-studios.com/assets/discord-logo.png',
      allowed_mentions: { parse: [] },
      embeds: [
        {
          author: {
            name: 'SMDZ Studios Documentation',
            url: 'https://docs.smdz-studios.com/'
          },
          title: '\uD83D\uDC40 New visitor detected',
          description:
            '\u2728 **A visitor opened the SMDZ Studios documentation.**\n' +
            '\uD83D\uDD52 Visited <t:' + unixTimestamp + ':F> | <t:' + unixTimestamp + ':R>',
          color: 5280261,
          url: window.location.href,
          fields: [
            {
              name: '\uD83D\uDCD6 VISIT DETAILS',
              value:
                '\uD83D\uDD17 **Page:** ' + formatCode(pagePath) + '\n' +
                '\uD83D\uDCDD **Title:** ' + sanitize(document.title, 200) + '\n' +
                '\u21AA\uFE0F **Referrer:** ' + sanitize(referrer, 500),
              inline: false
            },
            {
              name: '\uD83C\uDF0D LOCATION',
              value:
                '\uD83D\uDCCD **Country / City:** ' + sanitize(locationSummary, 300) + '\n' +
                '\uD83D\uDD12 **Anonymous IP:** ' + sanitize(maskIpAddress(location.ip), 100),
              inline: true
            },
            {
              name: '\uD83D\uDCBB DEVICE',
              value:
                '\uD83D\uDCF1 **Type:** ' + getDeviceType(userAgent) + '\n' +
                '\uD83D\uDDE3\uFE0F **Language:** ' + sanitize(language, 50),
              inline: true
            },
            {
              name: '\uD83D\uDDA5\uFE0F DISPLAY',
              value:
                '\uD83D\uDCD0 **Screen:** ' + screenSize + '\n' +
                '\uD83D\uDD0E **Viewport:** ' + viewportSize,
              inline: true
            },
            {
              name: '\uD83C\uDF10 USER AGENT',
              value: formatCode(sanitize(userAgent, 950)),
              inline: false
            }
          ],
          thumbnail: {
            url: 'https://docs.smdz-studios.com/assets/discord-logo.png'
          },
          footer: {
            text: 'SMDZ Docs Monitor | One confirmed alert per browser session'
          },
          timestamp: visitedAt.toISOString()
        }
      ]
    };

    return fetch(getWebhookDeliveryUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'omit'
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Discord rejected the alert with HTTP ' + response.status + '.');
      }

      markAsNotified();
    });
  }

  function getLocation() {
    if (!config.locationApiUrl || typeof AbortController === 'undefined') {
      return Promise.resolve({});
    }

    var controller = new AbortController();
    var timeout = window.setTimeout(function () {
      controller.abort();
    }, config.locationTimeoutMs || 2500);

    return fetch(config.locationApiUrl, {
      method: 'GET',
      signal: controller.signal,
      credentials: 'omit',
      cache: 'no-store'
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Location lookup failed.');
      }

      return response.json();
    }).then(function (data) {
      return data && typeof data === 'object' ? data : {};
    }).finally(function () {
      window.clearTimeout(timeout);
    });
  }

  function wasAlreadyNotified() {
    try {
      return window.sessionStorage.getItem(config.sessionKey) === '1';
    } catch (error) {
      return false;
    }
  }

  function markAsNotified() {
    try {
      window.sessionStorage.setItem(config.sessionKey, '1');
    } catch (error) {
      // Delivery succeeded; storage availability is optional.
    }
  }

  function getWebhookDeliveryUrl() {
    return config.webhookUrl + (config.webhookUrl.indexOf('?') === -1 ? '?wait=true' : '&wait=true');
  }

  function getCountryName(countryCode) {
    if (!countryCode) {
      return '';
    }

    try {
      return new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) || countryCode;
    } catch (error) {
      return countryCode;
    }
  }

  function getDeviceType(userAgent) {
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
      return 'Tablet';
    }

    if (/mobile|iphone|ipod|android/i.test(userAgent)) {
      return 'Mobile';
    }

    return 'Desktop';
  }

  function maskIpAddress(ipAddress) {
    if (!ipAddress || typeof ipAddress !== 'string') {
      return 'Unknown';
    }

    if (ipAddress.indexOf(':') !== -1) {
      var ipv6Groups = ipAddress.split(':');
      var visibleGroups = ipv6Groups.slice(0, Math.min(4, ipv6Groups.length));
      return visibleGroups.join(':') + ':****:****:****:****';
    }

    var ipv4Groups = ipAddress.split('.');
    if (ipv4Groups.length === 4) {
      ipv4Groups[3] = '***';
      return ipv4Groups.join('.');
    }

    return 'Masked';
  }

  function sanitize(value, maxLength) {
    return String(value || 'Unknown')
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
      .slice(0, maxLength);
  }

  function formatCode(value) {
    return '`' + String(value).replace(/`/g, '').slice(0, 950) + '`';
  }
}());
