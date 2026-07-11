<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">CFX.RE / TEBEX</p>
  <h1>Asset Escrow Guide</h1>
  <p>Use this page when a protected resource fails because of ownership, entitlement or verification errors.</p>
  <div class="support-search-tip">Fast path: match the console error below, follow the fix, then restart the server fully.</div>
</section>

<section class="support-route-grid" aria-label="Escrow quick routes">
  <a class="support-route-card" href="#not-owned">
    <span class="support-route-kicker">Console says</span>
    <strong>This asset is not owned</strong>
    <small>Account or server key ownership mismatch.</small>
  </a>
  <a class="support-route-card" href="#entitlement">
    <span class="support-route-kicker">Console says</span>
    <strong>Required entitlement</strong>
    <small>Purchase, transfer, restart or server clock issue.</small>
  </a>
  <a class="support-route-card" href="#verify">
    <span class="support-route-kicker">Console says</span>
    <strong>Failed to verify</strong>
    <small>Network, firewall or validation connectivity issue.</small>
  </a>
  <a class="support-route-card" href="#editable-files">
    <span class="support-route-kicker">Need to edit</span>
    <strong>Safe files</strong>
    <small>What can be changed without breaking escrow.</small>
  </a>
</section>

<section class="support-section">
  <h2 id="what-is-escrow">What Asset Escrow Does</h2>
  <p>Asset Escrow protects premium FiveM resources by locking the internal logic while leaving documented configuration, translations and integration points editable.</p>
  <div class="support-two-column">
    <div class="support-info-card">
      <h3>Protected</h3>
      <ul>
        <li>Compiled or escrowed core logic.</li>
        <li>License and anti-tamper handling.</li>
        <li>Files marked as protected, core or do-not-edit.</li>
      </ul>
    </div>
    <div class="support-info-card">
      <h3>Editable</h3>
      <ul>
        <li><code>config.lua</code>, <code>settings.lua</code> or similar config files.</li>
        <li><code>locales/en.lua</code>, <code>locales/es.lua</code> and other translation files.</li>
        <li>Documented framework, target, notification and webhook options.</li>
      </ul>
    </div>
  </div>
</section>

<section class="support-section support-section--compact">
  <h2 id="account-linking">How Ownership Works</h2>
  <div class="support-flow">
    <div><strong>1. Tebex purchase</strong><span>The asset is attached to the purchasing account.</span></div>
    <div><strong>2. Cfx.re account</strong><span>Tebex and Keymaster must point to the correct owner.</span></div>
    <div><strong>3. Server license key</strong><span>The key in <code>server.cfg</code> must belong to the account that owns the asset.</span></div>
  </div>
  <p>If one of these three parts points to a different account, escrow checks can fail.</p>
</section>

<section class="support-section support-section--compact">
  <h2 id="error-index">Error Index</h2>

  <details id="not-owned" class="support-accordion">
    <summary>This asset is not owned by this account</summary>
    <p><strong>Meaning:</strong> the server license key belongs to a Cfx.re account that does not own the asset.</p>
    <ol>
      <li>Check which Tebex/Cfx.re account owns the purchase.</li>
      <li>Log into <a href="https://keymaster.fivem.net/">Cfx.re Keymaster</a> and check which account owns the server license key.</li>
      <li>If they are different, transfer the asset to the account that owns the server key.</li>
      <li>Follow the official transfer guide: <a href="https://support.cfx.re/hc/en-us/articles/16539411062044-How-to-transfer-assets-on-Portal">How to transfer assets on Portal</a>.</li>
      <li>Restart the server completely.</li>
    </ol>
  </details>

  <details id="entitlement" class="support-accordion">
    <summary>You lack the required entitlement</summary>
    <p><strong>Meaning:</strong> the server cannot see a valid entitlement for the protected resource.</p>
    <div class="support-two-column">
      <div>
        <h3>Common causes</h3>
        <ul>
          <li>The asset was purchased on another account.</li>
          <li>The asset was transferred but the server was not fully restarted.</li>
          <li>The server operating system time is wrong.</li>
        </ul>
      </div>
      <div>
        <h3>Fix order</h3>
        <ol>
          <li>Confirm account ownership in Tebex and Keymaster.</li>
          <li>Transfer the asset if needed.</li>
          <li>Stop the FiveM server process fully and start it again.</li>
          <li>Compare the server time with <a href="https://time.is/">time.is</a>.</li>
        </ol>
      </div>
    </div>
    <p class="support-note">If the server clock is off by more than about 60 seconds, enable automatic time sync or NTP and restart the server again.</p>
  </details>

  <details id="verify" class="support-accordion">
    <summary>Failed to verify protected resource</summary>
    <p><strong>Meaning:</strong> the server may be unable to reach Cfx.re/Tebex validation services.</p>
    <ul>
      <li>Check that the machine has normal internet access.</li>
      <li>Review firewall, DDoS protection and hosting panel rules.</li>
      <li>Test after temporarily relaxing strict outbound restrictions.</li>
      <li>Ask your host whether outbound validation traffic is being blocked.</li>
    </ul>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="editable-files">Safe Editing Rules</h2>

  <details class="support-accordion">
    <summary>Files you can normally edit</summary>
    <ul>
      <li>Configuration files: <code>config.lua</code>, <code>settings.lua</code>, <code>config.json</code>.</li>
      <li>Language files: <code>locales/en.lua</code>, <code>locales/es.lua</code> and other provided locales.</li>
      <li>Documented integration settings for framework, target, notifications, inventory and webhooks.</li>
    </ul>
  </details>

  <details class="support-accordion">
    <summary>Files you must not edit</summary>
    <ul>
      <li>Compiled or obfuscated Lua files.</li>
      <li>Files inside protected, core or do-not-edit folders.</li>
      <li>License checks, escrow handling or anti-tamper code.</li>
    </ul>
    <p class="support-note support-note--warning">Editing protected areas can prevent the resource from starting and may make support impossible until you reinstall a clean copy.</p>
  </details>
</section>
