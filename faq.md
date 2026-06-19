<section class="faq-hero">
<p class="faq-eyebrow">SMDZ Studios Help Center</p>
<h1>Frequently Asked Questions</h1>
<p>Quick answers for updates, supported frameworks, performance, licensing and support requests.</p>
<div class="faq-quick-links" aria-label="FAQ sections">
<a href="#updates">Updates</a>
<a href="#frameworks">Frameworks</a>
<a href="#performance">Performance</a>
<a href="#licensing">Licensing</a>
<a href="#startup">Startup</a>
<a href="#database">Database</a>
<a href="#permissions">Permissions</a>
<a href="#integrations">Integrations</a>
<a href="#support-info">Support Info</a>
<a href="#support-scope">Support Scope</a>
</div>
</section>

<section class="faq-grid">
<article id="updates" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--update" aria-hidden="true"></span>
<h2>How do I update a script without losing my config?</h2>
</div>
<ol class="faq-steps">
<li>Back up your configuration files, usually <code>config.lua</code>, <code>settings.lua</code> and <code>locales/*.lua</code>.</li>
<li>Download the latest version from the official Tebex link.</li>
<li>Remove or archive the old resource folder from your server.</li>
<li>Extract the new version to the same path as before.</li>
<li>Compare the new default config with your backup and re-apply your changes carefully.</li>
</ol>
<div class="faq-note">Keep new options introduced by the update and avoid deleting sections you do not understand.</div>
<p>If you are not sure how to merge an update, open a support request and include the old config, the new default config, and both version numbers.</p>
</article>

<article id="frameworks" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--framework" aria-hidden="true"></span>
<h2>Which frameworks are supported?</h2>
</div>
<p>Most SMDZ Studios scripts focus on the main modern FiveM ecosystems.</p>
<div class="faq-badge-row">
<span>ESX</span>
<span>QBCore</span>
<span>Standalone</span>
<span>Qbox</span>
<span>vRP</span>
</div>
<p>Each script page states what frameworks are officially supported and whether a standalone or partial mode is available.</p>
<div class="faq-note faq-note--warning">If a script does not list your framework explicitly, assume it is not supported and ask before purchasing.</div>
</article>

<article id="performance" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--performance" aria-hidden="true"></span>
<h2>How can I optimize performance?</h2>
</div>
<ul class="faq-checklist">
<li>Keep FiveM server artifacts up to date within recommended stable builds.</li>
<li>Avoid running multiple heavy resources that do similar work.</li>
<li>Use <code>resmon 1</code> to monitor resources that consume the most CPU.</li>
<li>Review each script's Performance or Configuration section.</li>
<li>Tune update intervals, range checks and debug settings where available.</li>
</ul>
<p>If a script seems heavier than expected, collect <code>resmon</code> screenshots, player count and your configuration file before contacting support.</p>
</article>

<article id="licensing" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--license" aria-hidden="true"></span>
<h2>What about licensing and Asset Escrow?</h2>
</div>
<p>Some SMDZ scripts are protected using the Cfx.re and Tebex Asset Escrow system.</p>
<ul class="faq-checklist">
<li>Core logic is protected from being modified or leaked.</li>
<li>Configuration, translations and documented integration files remain editable.</li>
<li>Ownership is validated against your Cfx.re/Tebex account.</li>
</ul>
<a class="faq-action" href="fxap.md">Read the Asset Escrow guide</a>
</article>

<article id="startup" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--startup" aria-hidden="true"></span>
<h2>What should I check if a script does not start?</h2>
</div>
<p>Start with the console output and the resource name used in <code>server.cfg</code>.</p>
<ul class="faq-checklist">
<li>Confirm the folder name matches the <code>ensure</code> line exactly.</li>
<li>Make sure the resource is inside the correct server resources path.</li>
<li>Start dependencies before the SMDZ script.</li>
<li>Check for red startup errors after running <code>ensure resource_name</code>.</li>
<li>Verify your FiveM server artifacts are not outdated.</li>
</ul>
<div class="faq-note">If you see errors like missing resources, nil framework objects or entitlement failures, use the Common Problems page first.</div>
<a class="faq-action" href="problems.md">Open Common Problems</a>
</article>

<article id="database" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--database" aria-hidden="true"></span>
<h2>How do I know if the issue is related to the database?</h2>
</div>
<p>Database problems usually appear as missing tables, data not saving, or connection errors from your SQL adapter.</p>
<ul class="faq-checklist">
<li>Search the console for <code>oxmysql</code>, <code>mysql-async</code>, <code>table doesn't exist</code> or <code>ECONNREFUSED</code>.</li>
<li>Use one supported adapter and start it before your framework and SMDZ scripts.</li>
<li>Import any provided <code>.sql</code> files into the correct FiveM database.</li>
<li>Recheck host, user, password, database name and port if the adapter cannot connect.</li>
</ul>
<a class="faq-action" href="problems.md">Read database troubleshooting</a>
</article>

<article id="permissions" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--permissions" aria-hidden="true"></span>
<h2>Why are admin commands or staff features not working?</h2>
</div>
<p>Administrative features may depend on framework groups, ACE permissions, or both, depending on the script.</p>
<ul class="faq-checklist">
<li>Check the script page for the required group or permission.</li>
<li>For ESX, confirm the player has the expected group such as <code>admin</code> or <code>superadmin</code>.</li>
<li>For QBCore, verify the player permission level in your server setup.</li>
<li>If ACE is used, add the required <code>add_ace</code> and <code>add_principal</code> lines in <code>server.cfg</code>.</li>
</ul>
<div class="faq-note faq-note--warning">Never give broad admin permissions to regular players just to test a script. Use a known staff account.</div>
</article>

<article id="integrations" class="faq-card">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--integrations" aria-hidden="true"></span>
<h2>Why are target actions, menus or notifications not appearing?</h2>
</div>
<p>Many resources can integrate with target, notification or UI libraries. The selected config value must match what your server actually runs.</p>
<ul class="faq-checklist">
<li>Identify your target system, for example <code>qb-target</code>, <code>ox_target</code> or <code>qtarget</code>.</li>
<li>Identify your notification system, for example <code>ox_lib</code>, <code>okokNotify</code> or another supported option.</li>
<li>Make sure those resources are installed and started before the SMDZ script.</li>
<li>Set the matching options in the script config and restart the server.</li>
</ul>
</article>

<article id="support-info" class="faq-card faq-card--wide">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--support" aria-hidden="true"></span>
<h2>What information should I include when asking for help?</h2>
</div>
<div class="faq-support-grid">
<div>
<h3>Required details</h3>
<ul class="faq-checklist">
<li>Script name and version, for example <code>smdz_example v1.0.0</code>.</li>
<li>Framework: ESX, QBCore, Standalone or custom.</li>
<li>Tebex purchase ID.</li>
<li>Server artifacts build number.</li>
</ul>
</div>
<div>
<h3>Debug context</h3>
<ul class="faq-checklist">
<li>Console or F8 error messages.</li>
<li>Clear steps to reproduce the issue.</li>
<li>Relevant configuration files.</li>
<li>Screenshots or short clips when useful.</li>
</ul>
</div>
</div>
<a class="faq-action" href="support.md">Open the support guide</a>
</article>

<article id="support-scope" class="faq-card faq-card--wide">
<div class="faq-card-header">
<span class="faq-card-icon faq-card-icon--scope" aria-hidden="true"></span>
<h2>What does SMDZ support cover?</h2>
</div>
<div class="faq-support-grid">
<div>
<h3>Covered</h3>
<ul class="faq-checklist">
<li>Installation and configuration issues.</li>
<li>Framework compatibility checks based on official documentation.</li>
<li>Known bug triage and reproduction.</li>
<li>Guidance for Asset Escrow, entitlement and ownership errors.</li>
</ul>
</div>
<div>
<h3>Not covered</h3>
<ul class="faq-checklist">
<li>Full custom development unrelated to the purchased script.</li>
<li>Third-party edits or unofficial modified builds.</li>
<li>Unsafe server setups or leaked/obfuscated copies from unofficial sources.</li>
<li>Issues without enough logs, versions or reproduction steps to investigate.</li>
</ul>
</div>
</div>
</article>
</section>
