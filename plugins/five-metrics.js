(function () {
    'use strict';

    const WORKER_URL =
        'https://5metrics.sergioramonlopezmadrid.workers.dev';

    const RESOURCE_SELECTOR =
        '.five-metrics-resource[data-resource]';

    const RESOURCE_PATTERN =
        /^smdz_[a-z0-9][a-z0-9_-]{0,100}$/i;

    const SERVER_ICON = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v4A1.5 1.5 0 0 1 18.5 11h-13A1.5 1.5 0 0 1 4 9.5v-4Zm2 1V9h12V6.5H6Zm0 8.5A1.5 1.5 0 0 1 7.5 13h9a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 16.5 20h-9A1.5 1.5 0 0 1 6 18.5v-4ZM8 15v2h8v-2H8Zm0-7h2v1H8V8Zm0 8h2v1H8v-1Z"></path>
        </svg>
    `;

    const PLAYER_ICON = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 12.2a4.1 4.1 0 1 0-4.1-4.1 4.1 4.1 0 0 0 4.1 4.1Zm0 2.2c-4.2 0-7.7 2.6-7.7 5.8v.8h15.4v-.8c0-3.2-3.5-5.8-7.7-5.8Zm6.3-7.7a3.3 3.3 0 1 1-4.2 4.4 5.4 5.4 0 0 0 0-6.4 3.3 3.3 0 0 1 4.2 2Zm-12.6 0a3.3 3.3 0 0 1 4.2-2 5.4 5.4 0 0 0 0 6.4 3.3 3.3 0 1 1-4.2-4.4Z"></path>
        </svg>
    `;

    function formatNumber(value) {
        return new Intl.NumberFormat(
            document.documentElement.lang || 'en'
        ).format(value);
    }

    function renderLoading(element) {
        element.innerHTML = `
            <div class="five-metrics-card five-metrics-loading">
                <span class="five-metrics-loading-label">
                    <span class="five-metrics-loading-spinner" aria-hidden="true"></span>
                    Loading usage data...
                </span>
            </div>
        `;
    }

    function renderSuccess(element, servers, players) {
        const formattedServers = formatNumber(servers);
        const formattedPlayers = formatNumber(players);
        const serverLabel = servers === 1 ? 'server' : 'servers';
        const playerLabel = players === 1 ? 'player' : 'players';

        element.innerHTML = `
            <div class="five-metrics-card">
                <div class="five-metrics-header">
                    <div class="five-metrics-header-copy">
                        <span class="five-metrics-kicker">Live resource stats</span>
                        <span class="five-metrics-title">Current usage</span>
                    </div>

                    <div class="five-metrics-badge" aria-hidden="true">
                        <span class="five-metrics-badge-dot"></span>
                        Live
                    </div>
                </div>

                <div class="five-metrics-stats" role="list" aria-label="Usage statistics">
                    <div class="five-metrics-stat" role="listitem">
                        <span class="five-metrics-stat-icon" aria-hidden="true">
                            ${SERVER_ICON}
                        </span>

                        <div class="five-metrics-stat-copy">
                            <span class="five-metrics-stat-value">${formattedServers}</span>
                            <span class="five-metrics-stat-label">${serverLabel}</span>
                        </div>
                    </div>

                    <div class="five-metrics-stat" role="listitem">
                        <span class="five-metrics-stat-icon five-metrics-stat-icon--players" aria-hidden="true">
                            ${PLAYER_ICON}
                        </span>

                        <div class="five-metrics-stat-copy">
                            <span class="five-metrics-stat-value">${formattedPlayers}</span>
                            <span class="five-metrics-stat-label">${playerLabel}</span>
                        </div>
                    </div>
                </div>

                <div class="five-metrics-attribution">
                    Data provided by
                    <a
                        href="https://5metrics.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        5Metrics
                    </a>
                </div>
            </div>
        `;

        element.dataset.metricsState = 'loaded';
    }

    function renderError(element) {
        element.innerHTML = `
            <div class="five-metrics-card five-metrics-error">
                <span class="five-metrics-error-label">
                    Usage data is temporarily unavailable.
                </span>
            </div>
        `;

        element.dataset.metricsState = 'error';
    }

    async function loadElement(element) {
        if (
            element.dataset.metricsState === 'loading' ||
            element.dataset.metricsState === 'loaded'
        ) {
            return;
        }

        const resourceName = (
            element.dataset.resource || ''
        )
            .trim()
            .toLowerCase();

        if (!RESOURCE_PATTERN.test(resourceName)) {
            renderError(element);
            return;
        }

        element.dataset.metricsState = 'loading';
        renderLoading(element);

        try {
            const endpoint =
                `${WORKER_URL}/api/servers/` +
                encodeURIComponent(resourceName);

            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(
                    `Worker returned HTTP ${response.status}`
                );
            }

            const data = await response.json();

            if (
                data.success !== true ||
                typeof data.servers !== 'number' ||
                typeof data.players !== 'number'
            ) {
                throw new Error('Invalid usage response');
            }

            renderSuccess(
                element,
                Math.max(0, Math.trunc(data.servers)),
                Math.max(0, Math.trunc(data.players))
            );
        } catch (error) {
            console.error(
                '[5Metrics] Could not load usage stats:',
                error
            );

            renderError(element);
        }
    }

    function loadMetrics() {
        document
            .querySelectorAll(RESOURCE_SELECTOR)
            .forEach(loadElement);
    }

    function fiveMetricsPlugin(hook) {
        hook.doneEach(function () {
            loadMetrics();
        });
    }

    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(
        fiveMetricsPlugin,
        window.$docsify.plugins || []
    );

    document.addEventListener('DOMContentLoaded', loadMetrics);
})();
