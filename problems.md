<section class="support-hero support-hero--warning">
  <p class="support-eyebrow">Troubleshooting</p>
  <h1>Common Problems</h1>
  <p>A symptom-first support page for FiveM resource issues. Pick what you see, then follow the shortest fix path.</p>
  <div class="support-search-tip">Tip: copy one word from your console error and search it with <code>Ctrl + F</code>.</div>
</section>

<section class="support-route-grid" aria-label="Problem quick routes">
  <a class="support-route-card" href="#startup">
    <span class="support-route-kicker">Resource not loaded</span>
    <strong>Startup</strong>
    <small>Folder, ensure, dependencies and cache.</small>
  </a>
  <a class="support-route-card" href="#syntax-error">
    <span class="support-route-kicker">Console error</span>
    <strong>syntax error near &lt;\1&gt;</strong>
    <small>Broken upload or outdated artifacts.</small>
  </a>
  <a class="support-route-card" href="#database">
    <span class="support-route-kicker">Data not saving</span>
    <strong>Database</strong>
    <small>oxmysql, credentials and missing tables.</small>
  </a>
  <a class="support-route-card" href="#permissions">
    <span class="support-route-kicker">Staff feature blocked</span>
    <strong>Permissions</strong>
    <small>ESX/QBCore groups and ACE permissions.</small>
  </a>
</section>

<section class="support-section">
  <h2 id="quick-index">Quick Index</h2>
  <div class="support-index">
    <a href="#syntax-error">syntax error near &lt;\1&gt;</a>
    <a href="#startup">Script won't start</a>
    <a href="#database">Database / SQL</a>
    <a href="#permissions">Permissions</a>
    <a href="#framework">Framework</a>
    <a href="#configuration">Configuration</a>
    <a href="#integrations">UI / target / notifications</a>
    <a href="#performance">Performance</a>
    <a href="#support">Contact support</a>
  </div>
</section>

<section class="support-section support-section--compact">
  <h2 id="syntax-error">Error: syntax error near &lt;\1&gt;</h2>

  <details class="support-accordion">
    <summary>Most likely causes</summary>
    <ul>
      <li>The resource was uploaded file-by-file and the protected files were damaged.</li>
      <li>FileZilla used the wrong transfer mode.</li>
      <li>The resource was moved by Remote Desktop drag-and-drop instead of uploading the ZIP and extracting it on the server.</li>
      <li>Your FiveM server artifacts are outdated. Use build <code>4752</code> or newer.</li>
    </ul>
  </details>

  <details class="support-accordion">
    <summary>Fix the upload</summary>
    <ol>
      <li>Delete the damaged resource folder from the server.</li>
      <li>Upload the original ZIP file to the server.</li>
      <li>Extract the ZIP directly on the server.</li>
      <li>If you use FileZilla, set transfer type to binary before uploading.</li>
      <li>Restart the server and test again.</li>
    </ol>
    <figure>
      <img src="https://1037498771-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZErcztD5BvrKnwRGJq%2Fuploads%2Fgit-blob-8cc0c6b3b6a5cf74b86212f918f5ec3814835146%2Ftransfer-type.png?alt=media" alt="FileZilla binary transfer mode">
      <figcaption>FileZilla binary transfer mode.</figcaption>
    </figure>
  </details>

  <details class="support-accordion">
    <summary>Check or update server artifacts</summary>
    <p>Run this in the server console:</p>
    <pre><code>version</code></pre>
    <p>Download the recommended artifact for your operating system:</p>
    <ul>
      <li>Linux: <a href="https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/">FiveM Linux artifacts</a></li>
      <li>Windows: <a href="https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/">FiveM Windows artifacts</a></li>
    </ul>
    <p class="support-note">After updating artifacts, stop the server fully before starting it again.</p>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="startup">Script Won't Start / Crashes On Startup</h2>

  <details class="support-accordion">
    <summary>Quick checklist</summary>
    <ul>
      <li>The resource folder name is correct.</li>
      <li>The <code>ensure</code> line matches the folder name exactly.</li>
      <li>Dependencies start before the SMDZ resource.</li>
      <li>The resource is inside the correct <code>resources</code> path.</li>
      <li>The console does not show a config syntax error.</li>
    </ul>
  </details>

  <details class="support-accordion">
    <summary>Could not find resource</summary>
    <p>Example console message:</p>
    <pre><code>Could not find resource smdz_example.</code></pre>
    <ol>
      <li>Check the folder path, for example <code>resources/[smdz]/smdz_example</code>.</li>
      <li>Use the exact same name in <code>server.cfg</code>: <code>ensure smdz_example</code>.</li>
      <li>Avoid spaces, extra suffixes like <code>-main</code>, and capitalization mismatches.</li>
    </ol>
  </details>

  <details class="support-accordion">
    <summary>Missing dependencies</summary>
    <p>Look for errors mentioning <code>es_extended</code>, <code>qb-core</code>, <code>oxmysql</code>, <code>target</code> or <code>inventory</code>.</p>
    <pre><code>ensure oxmysql
ensure es_extended   # or qb-core
ensure smdz_example</code></pre>
    <p>Open the script page and check its Requirements section before testing again.</p>
  </details>

  <details class="support-accordion">
    <summary>Escrow or entitlement errors</summary>
    <p>If you see ownership, entitlement or protected resource verification errors, use the dedicated guide.</p>
    <a class="support-action" href="fxap.md">Open Asset Escrow guide</a>
  </details>

  <details class="support-accordion">
    <summary>Cache cleanup</summary>
    <ol>
      <li>Stop the server.</li>
      <li>Delete <code>cache</code> and <code>server-cache</code> folders if they exist.</li>
      <li>Start the server and test again.</li>
    </ol>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="database">Database & SQL Issues</h2>

  <details class="support-accordion">
    <summary>How to identify database problems</summary>
    <p>Search the console for:</p>
    <div class="support-badges">
      <span>oxmysql</span>
      <span>mysql-async</span>
      <span>MySQL</span>
      <span>table doesn't exist</span>
      <span>ECONNREFUSED</span>
    </div>
  </details>

  <details class="support-accordion">
    <summary>Adapter not installed or not started</summary>
    <pre><code>[oxmysql] [ERROR] connection failed
[mysql-async] Error: connect ECONNREFUSED</code></pre>
    <ol>
      <li>Use one database adapter. Recommended: <code>oxmysql</code>.</li>
      <li>Configure host, database, user, password and port.</li>
      <li>Start the adapter before framework and SMDZ scripts.</li>
    </ol>
  </details>

  <details class="support-accordion">
    <summary>Missing tables or SQL files</summary>
    <pre><code>[oxmysql] [ERROR] Table 'dbname.smdz_example' doesn't exist</code></pre>
    <ol>
      <li>Look inside the resource for provided <code>.sql</code> files.</li>
      <li>Open phpMyAdmin, HeidiSQL, DBeaver or your database manager.</li>
      <li>Select the correct FiveM database.</li>
      <li>Import the SQL file and restart the server.</li>
    </ol>
  </details>

  <details class="support-accordion">
    <summary>Wrong database credentials</summary>
    <ul>
      <li>Check host, user, password, database and port.</li>
      <li>Confirm the database user can connect from your FiveM host.</li>
      <li>Confirm the database service is running.</li>
    </ul>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="permissions">Permissions & Admin Commands</h2>

  <details class="support-accordion">
    <summary>Framework permissions</summary>
    <ul>
      <li>ESX usually uses groups such as <code>user</code>, <code>mod</code>, <code>admin</code> and <code>superadmin</code>.</li>
      <li>QBCore uses permission levels and server-specific permission systems.</li>
      <li>Check the script documentation for the exact required group.</li>
      <li>Test with a known staff account.</li>
    </ul>
  </details>

  <details class="support-accordion">
    <summary>ACE permissions</summary>
    <p>Example configuration:</p>
    <pre><code>add_ace group.admin smdz.scripts allow
add_principal identifier.license:xxxxxxxxxxxxxxxx group.admin</code></pre>
    <p>Replace the license identifier with the real identifier for your staff account, then restart or re-execute the config.</p>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="framework">Framework Compatibility</h2>

  <details class="support-accordion">
    <summary>Wrong framework mode</summary>
    <p>Check the script config for a setting like:</p>
    <pre><code>Config.Framework = 'ESX' -- ESX, QBCore or Standalone</code></pre>
    <ol>
      <li>Set the value to match your server.</li>
      <li>Confirm the framework resource is installed.</li>
      <li>Start the framework before the SMDZ script.</li>
    </ol>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="configuration">Configuration Mistakes</h2>

  <details class="support-accordion">
    <summary>Compare with the default config</summary>
    <ol>
      <li>Back up your current <code>config.lua</code>.</li>
      <li>Download a clean copy of the resource.</li>
      <li>Compare your file with the fresh default config.</li>
      <li>Look for removed options, wrong value types and invalid coordinates.</li>
    </ol>
  </details>

  <details class="support-accordion">
    <summary>Common config pitfalls</summary>
    <ul>
      <li>Empty required fields such as webhooks or keys.</li>
      <li>Typos in mode names such as <code>ESX</code> vs <code>esx</code>.</li>
      <li>Coordinates in the wrong format.</li>
    </ul>
    <pre><code>-- Good:
vector3(215.0, -810.0, 30.0)

-- Risky if the script expects vector3:
{ x = 215, y = -810 }</code></pre>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="integrations">UI / Notifications / Target Integrations</h2>

  <details class="support-accordion">
    <summary>Menus, target actions or notifications do not appear</summary>
    <ul>
      <li>Identify your target resource: <code>qb-target</code>, <code>ox_target</code>, <code>qtarget</code>, etc.</li>
      <li>Identify your notification resource: <code>ox_lib</code>, <code>mythic_notify</code>, <code>okokNotify</code>, etc.</li>
      <li>Make sure the selected resources are installed and started.</li>
      <li>Set the script config values to match your server.</li>
    </ul>
    <pre><code>Config.Target = 'qb-target'
Config.Notification = 'ox_lib'</code></pre>
  </details>
</section>

<section class="support-section support-section--compact">
  <h2 id="performance">Performance & Tick Usage</h2>

  <details class="support-accordion">
    <summary>Measure before changing config</summary>
    <pre><code>resmon 1</code></pre>
    <ul>
      <li>Check the SMDZ resource while idle.</li>
      <li>Check it again while actively using the feature.</li>
      <li>Compare with other heavy resources on your server.</li>
    </ul>
  </details>

  <details class="support-accordion">
    <summary>If usage is high</summary>
    <ol>
      <li>Disable debug visuals.</li>
      <li>Increase configurable scan/update intervals slightly.</li>
      <li>Reduce large scan ranges where supported.</li>
      <li>Test on a clean server with only the framework and the SMDZ script.</li>
    </ol>
  </details>
</section>


