<section class="support-hero">
  <p class="support-eyebrow">SMDZ Studios Help Center</p>
  <h1>FAQ & Support Hub</h1>
  <p>Find the right answer faster. Start with the topic, then open only the details you need.</p>
  <div class="support-search-tip">Tip: use <code>Ctrl + F</code> and search a keyword from your console, for example <code>entitlement</code>, <code>oxmysql</code>, <code>ESX</code> or <code>resmon</code>.</div>
</section>

<section class="support-route-grid" aria-label="Support routes">
  <a class="support-route-card" href="problems.md#startup">
    <span class="support-route-kicker">Script does not start</span>
    <strong>Startup errors</strong>
    <small>Folder names, ensure order, dependencies and cache.</small>
  </a>
  <a class="support-route-card" href="fxap.md">
    <span class="support-route-kicker">Escrow / license</span>
    <strong>Asset Escrow</strong>
    <small>Ownership, entitlement and protected resource errors.</small>
  </a>
  <a class="support-route-card" href="problems.md#database">
    <span class="support-route-kicker">Data not saving</span>
    <strong>Database</strong>
    <small>oxmysql, missing tables and connection problems.</small>
  </a>
  <a class="support-route-card" href="support.md">
    <span class="support-route-kicker">Still blocked</span>
    <strong>Open support</strong>
    <small>What to send so the issue can be diagnosed quickly.</small>
  </a>
</section>

<section class="support-section">
  <h2 id="quick-index">Quick Index</h2>
  <div class="support-index">
    <a href="#updates">Updates</a>
    <a href="#frameworks">Frameworks</a>
    <a href="#performance">Performance</a>
    <a href="#licensing">Licensing</a>
    <a href="#startup">Startup</a>
    <a href="#database">Database</a>
    <a href="#permissions">Permissions</a>
    <a href="#integrations">Integrations</a>
    <a href="#support-info">Support info</a>
    <a href="#support-scope">Support scope</a>
  </div>
</section>

<section class="support-section support-section--compact">
  <h2>Most Used Answers</h2>

  <details id="updates" class="support-accordion">
    <summary>How do I update a script without losing my config?</summary>
    <ol>
      <li>Back up editable files such as <code>config.lua</code>, <code>settings.lua</code> and <code>locales/*.lua</code>.</li>
      <li>Download the latest version from the official Tebex link.</li>
      <li>Archive or remove the old resource folder.</li>
      <li>Extract the new version using the same resource folder name.</li>
      <li>Compare the new default config with your backup and re-apply your changes carefully.</li>
    </ol>
    <p class="support-note">Do not paste an old config over a new one without checking new options first.</p>
  </details>

  <details id="frameworks" class="support-accordion">
    <summary>Which frameworks are supported?</summary>
    <p>Each script page lists its official support. Common modes are:</p>
    <div class="support-badges">
      <span>ESX</span>
      <span>QBCore</span>
      <span>Standalone</span>
      <span>Qbox</span>
      <span>vRP</span>
    </div>
    <p>If your framework is not listed on the script page, assume it is not supported and ask before purchasing.</p>
  </details>

  <details id="performance" class="support-accordion">
    <summary>How can I check performance?</summary>
    <ul>
      <li>Run <code>resmon 1</code> in your FiveM client.</li>
      <li>Check the SMDZ resource line while idle and while using the feature.</li>
      <li>Disable debug options unless you are actively testing.</li>
      <li>Avoid running several resources that do the same heavy job.</li>
    </ul>
    <p>If usage looks high, collect a resmon screenshot, player count and the script config before contacting support.</p>
  </details>

  <details id="licensing" class="support-accordion">
    <summary>What should I know about Asset Escrow?</summary>
    <p>Escrow protects the internal logic of premium FiveM resources while keeping configuration, translations and documented integration files editable.</p>
    <ul>
      <li>Ownership is validated through Cfx.re/Tebex.</li>
      <li>The server license key must belong to the account that owns the asset.</li>
      <li>Protected core files must not be edited.</li>
    </ul>
    <a class="support-action" href="fxap.md">Open the Asset Escrow guide</a>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2>Common Technical Questions</h2>

  <details id="startup" class="support-accordion">
    <summary>What should I check if a script does not start?</summary>
    <ul>
      <li>The folder name matches the <code>ensure</code> line exactly.</li>
      <li>The resource is inside the correct FiveM resources path.</li>
      <li>Dependencies start before the SMDZ script.</li>
      <li>The console does not show missing resource, nil framework or entitlement errors.</li>
      <li>Your FiveM server artifacts are not outdated.</li>
    </ul>
    <a class="support-action" href="problems.md#startup">Open startup troubleshooting</a>
  </details>

  <details id="database" class="support-accordion">
    <summary>How do I know if the issue is database-related?</summary>
    <p>Database issues usually appear as missing tables, data not saving, or SQL adapter connection errors.</p>
    <ul>
      <li>Search the console for <code>oxmysql</code>, <code>mysql-async</code>, <code>table doesn't exist</code> or <code>ECONNREFUSED</code>.</li>
      <li>Use one supported adapter and start it before your framework and SMDZ scripts.</li>
      <li>Import provided <code>.sql</code> files into the correct database.</li>
    </ul>
    <a class="support-action" href="problems.md#database">Open database troubleshooting</a>
  </details>

  <details id="permissions" class="support-accordion">
    <summary>Why are admin commands or staff features not working?</summary>
    <ul>
      <li>Check the required group or ACE permission in the script page.</li>
      <li>For ESX, confirm the player group such as <code>admin</code> or <code>superadmin</code>.</li>
      <li>For QBCore, verify the player permission level in your server setup.</li>
      <li>If ACE is used, add the required <code>add_ace</code> and <code>add_principal</code> lines in <code>server.cfg</code>.</li>
    </ul>
    <p class="support-note support-note--warning">Do not give broad admin access to regular players just to test a script.</p>
  </details>

  <details id="integrations" class="support-accordion">
    <summary>Why are target actions, menus or notifications not appearing?</summary>
    <ul>
      <li>Identify your target system: <code>qb-target</code>, <code>ox_target</code>, <code>qtarget</code>, etc.</li>
      <li>Identify your notification system: <code>ox_lib</code>, <code>okokNotify</code>, etc.</li>
      <li>Make sure those resources are installed and started first.</li>
      <li>Set the matching config value in the SMDZ script.</li>
    </ul>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2>Before Contacting Support</h2>

  <details id="support-info" class="support-accordion">
    <summary>What information should I include?</summary>
    <div class="support-two-column">
      <div>
        <h3>Required details</h3>
        <ul>
          <li>Script name and version.</li>
          <li>Framework: ESX, QBCore, Standalone or custom.</li>
          <li>Tebex purchase ID.</li>
          <li>Server artifacts build number.</li>
        </ul>
      </div>
      <div>
        <h3>Debug context</h3>
        <ul>
          <li>Console or F8 error messages.</li>
          <li>Steps to reproduce the issue.</li>
          <li>Relevant configuration files.</li>
          <li>Screenshots or short clips when useful.</li>
        </ul>
      </div>
    </div>
    <a class="support-action" href="support.md">Open the support guide</a>
  </details>

  <details id="support-scope" class="support-accordion">
    <summary>What does SMDZ support cover?</summary>
    <div class="support-two-column">
      <div>
        <h3>Covered</h3>
        <ul>
          <li>Installation and configuration issues.</li>
          <li>Official framework compatibility checks.</li>
          <li>Known bug triage and reproduction.</li>
          <li>Escrow, entitlement and ownership guidance.</li>
        </ul>
      </div>
      <div>
        <h3>Not covered</h3>
        <ul>
          <li>Full custom development unrelated to the purchased script.</li>
          <li>Third-party edits or unofficial modified builds.</li>
          <li>Unsafe server setups or leaked copies.</li>
          <li>Reports without logs, versions or reproduction steps.</li>
        </ul>
      </div>
    </div>
  </details>
</section>
