
(function () {
    'use strict';

    const WORKER_URL =
        'https://5metrics.sergioramonlopezmadrid.workers.dev';

    const RESOURCE_SELECTOR =
        '.five-metrics-resource[data-resource]';

    const RESOURCE_PATTERN =
        /^smdz_[a-z0-9][a-z0-9_-]{0,100}$/i;

    function formatNumber(value) {
        return new Intl.NumberFormat(
            document.documentElement.lang || 'en'
        ).format(value);
    }

    function renderLoading(element) {
        element.innerHTML = `
            <div class="five-metrics-card five-metrics-loading">
                <span>Loading usage data...</span>
            </div>
        `;
    }

    function renderSuccess(
        element,
        servers,
        players
    ) {
        const formattedServers =
            formatNumber(servers);

        const formattedPlayers =
            formatNumber(players);

        const serverLabel =
            servers === 1 ? 'server' : 'servers';

        const playerLabel =
            players === 1 ? 'player' : 'players';

        element.innerHTML = `
            <div class="five-metrics-card">
                <div class="five-metrics-information">
                    <span class="five-metrics-title">
                        Current usage
                    </span>

                    <span class="five-metrics-count">
                        ${formattedServers} ${serverLabel}
                    </span>

                    <span class="five-metrics-description">
                        • ${formattedPlayers} ${playerLabel}
                    </span>
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
                <span>
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
                throw new Error(
                    'Invalid usage response'
                );
            }

            renderSuccess(
                element,
                Math.max(
                    0,
                    Math.trunc(data.servers)
                ),
                Math.max(
                    0,
                    Math.trunc(data.players)
                )
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

    document.addEventListener(
        'DOMContentLoaded',
        loadMetrics
    );
})();
