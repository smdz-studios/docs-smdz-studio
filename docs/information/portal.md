<div class="hero-logo-panel">
  <div class="hero-logo-inner">
    <img src="assets/fivem/logos/smdz-studios.png" alt="SMDZ Studios Logo" style="max-width: 390px; max-height: 390px;" />
  </div>
</div>
<div class="hero-header-wrapper" style="margin-top: 0.5rem; margin-bottom: 1.8rem; text-align: center;">
  <h1 class="hero-main-title portal-main-title">
    PORTAL | OFFICIAL DOCUMENTATION
  </h1>
  <div class="hero-quick-links">
    <a class="hero-quick-link hero-quick-link--store" href="https://smdz-studios.tebex.io/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 4.75A1.75 1.75 0 0 1 4.75 3h14.5A1.75 1.75 0 0 1 21 4.75v1.5A3.75 3.75 0 0 1 17.25 10H17v8.25A1.75 1.75 0 0 1 15.25 20h-6.5A1.75 1.75 0 0 1 7 18.25V10h-.25A3.75 3.75 0 0 1 3 6.25v-1.5Zm5.5 5.25v8h7V10h-7Zm-4-3.75v.5A2.25 2.25 0 0 0 6.75 9H7V4.5h-2.25A.25.25 0 0 0 4.5 4.75v1.5Zm4 0V9h7V6.25h-7Zm8.5 0V9h.25a2.25 2.25 0 0 0 2.25-2.25v-1.5a.25.25 0 0 0-.25-.25H17v1.25Z"></path>
      </svg>
      <span>STORE</span>
    </a>
    <a class="hero-quick-link hero-quick-link--support" href="https://discord.gg/tA43awBqAN" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.404.769-.554 1.115a18.273 18.273 0 0 0-5.487 0A11.64 11.64 0 0 0 9.29 3a19.736 19.736 0 0 0-4.434 1.372C2.052 8.579 1.29 12.682 1.669 16.728a19.924 19.924 0 0 0 5.427 2.735c.44-.602.832-1.236 1.167-1.907a12.955 12.955 0 0 1-1.83-.871c.154-.113.305-.23.451-.351 3.53 1.658 7.368 1.658 10.855 0 .149.121.3.238.451.351-.585.34-1.197.631-1.83.871.335.671.727 1.305 1.167 1.907a19.908 19.908 0 0 0 5.429-2.737c.444-4.7-.76-8.766-3.51-12.357ZM8.02 14.248c-1.055 0-1.92-.968-1.92-2.16 0-1.192.848-2.16 1.92-2.16 1.08 0 1.936.978 1.92 2.16 0 1.192-.849 2.16-1.92 2.16Zm7.96 0c-1.056 0-1.92-.968-1.92-2.16 0-1.192.848-2.16 1.92-2.16 1.08 0 1.936.978 1.92 2.16 0 1.192-.849 2.16-1.92 2.16Z"></path>
      </svg>
      <span>SUPPORT</span>
    </a>
  </div>
</div>

<div class="portal-filter-bar" aria-label="Resource filters">
  <div class="portal-platform-filter">
    <span class="portal-platform-filter__label">Platform</span>
    <div class="portal-platform-dropdown" data-selected="fivem">
      <button id="portal-platform-trigger" class="portal-platform-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="portal-platform-menu">
        <span class="portal-platform-indicator" aria-hidden="true"></span>
        <span class="portal-platform-current-label">FIVEM</span>
        <span class="portal-platform-current-count">(0)</span>
        <svg class="portal-platform-chevron" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <path d="m5.5 7.5 4.5 4 4.5-4"></path>
        </svg>
      </button>
      <div id="portal-platform-menu" class="portal-platform-menu" role="listbox" aria-label="Select documentation platform" hidden>
        <button id="portal-platform-option-fivem" class="portal-platform-option" type="button" role="option" data-value="fivem" data-label="FIVEM" aria-selected="true">
          <span class="portal-platform-option__dot" aria-hidden="true"></span>
          <span class="portal-platform-option__label">FIVEM</span>
          <span class="portal-platform-option__count">(0)</span>
          <svg class="portal-platform-option__check" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m5 10 3 3 7-7"></path></svg>
        </button>
        <button id="portal-platform-option-redm" class="portal-platform-option" type="button" role="option" data-value="redm" data-label="REDM" aria-selected="false">
          <span class="portal-platform-option__dot" aria-hidden="true"></span>
          <span class="portal-platform-option__label">REDM</span>
          <span class="portal-platform-option__count">(0)</span>
          <svg class="portal-platform-option__check" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m5 10 3 3 7-7"></path></svg>
        </button>
      </div>
    </div>
  </div>
  <span class="portal-filter-divider" aria-hidden="true"></span>
  <button class="portal-filter-btn is-active" type="button" data-filter="all">All</button>
  <button class="portal-filter-btn portal-filter-btn--free" type="button" data-filter="free">Free</button>
  <button class="portal-filter-btn portal-filter-btn--paid" type="button" data-filter="paid">Paid</button>
  <button class="portal-filter-btn" type="button" data-filter="open-source">Open Source</button>
  <button class="portal-filter-btn" type="button" data-filter="esx">ESX</button>
  <button class="portal-filter-btn" type="button" data-filter="qbcore">QBCore</button>
  <button class="portal-filter-btn" type="button" data-filter="standalone">Standalone</button>
  <button class="portal-filter-btn" type="button" data-filter="lb-phone-app">LB Phone App</button>
  <button class="portal-filter-btn" type="button" data-filter="redesign">Redesigns</button>
  <button class="portal-filter-btn" type="button" data-filter="weapons">WEAPONS</button>
</div>

<div class="portal-filter-empty" role="status" hidden>
  No resources are available for the selected platform yet.
</div>

<div class="home-showcase-grid">

  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/weapons/baseball-weaponpack.png" alt="baseball-weaponpack preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Baseball Weapon Pack</h3>
      <p>SMDZ Baseball Weapon Pack is an addon melee weapon pack for FiveM. It includes three custom baseball bats, inventory icons, weapon metadata, and setup guidance for common inventory and standalone server workflows.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span class="tag-weapons">WEAPONS</span><span>STANDALONE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/weapons/baseball-pack.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/baseball-pack" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>




  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/modern-pause-menu.png" alt="mpausemenu preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Modern Pause Menu</h3>
      <p>SMDZ Modern Pause Menu is a cinematic pause menu replacement for FiveM. It includes player information, persistent news, photo mode, socials, personal UI settings, and protected staff administration tools.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/modern-pause-menu.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/modern-pause-menu" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>


  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/speed-radars.png" alt="speedradars preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Speed Radars</h3>
      <p>SMDZ Speed Radars is a traffic enforcement system for FiveM. It includes portable police radars, fixed speed cameras, automatic fines, photographic evidence, live monitoring, and configurable payment points.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/speed-radars.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/speed-radars" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>


  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/parking-camera.png" alt="Parking Camera preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Parking Camera</h3>
      <p>SMDZ Parking Camera is a standalone parking assistance system for FiveM. It includes rear and side cameras, dynamic guidelines, obstacle detection, sensor beeps, lens effects, and multilingual configuration.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-free">FREE</span><span>STANDALONE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/free/parking-camera.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/parking-camera" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>




  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/advanced-safes.png" alt="safes preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Safes System</h3>
      <p>SMDZ Safes is a persistent private storage system for FiveM. It includes placeable safes, PIN protection, shared access, SQL persistence, configurable capacity, dealer options, and drill robbery gameplay.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/advanced-safes.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/safes" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>


  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/witness-calls.png" alt="witness-calls preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Witness Calls</h3>
      <p>SMDZ Witness Calls is a civilian witness system for FiveM. It includes NPC crime detection, emergency calls, synchronized phone animations, world-space progress UI, and dispatch alerts for supported providers.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/witness-calls.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/witness-calls" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>



  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/keybinds.png" alt="keybinds preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Dynamic Keybinds</h3>
      <p>SMDZ Dynamic Keybinds is a command and key mapping interface for FiveM. It includes command scanning, interactive keyboard display, conflict detection, search, aliases, metadata, and configurable help markers.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/keybinds.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/dynamic-keybinds" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>





  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/evidence-boards.png" alt="evidence-boards preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Evidence Boards</h3>
      <p>SMDZ Evidence Boards is a police investigation system for FiveM. It includes persistent evidence boards, suspects, photos, documents, notes, red-thread links, access control, and collaborative editing tools.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/evidence-board.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/evidence-board" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>







  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/smartcab-lb-app.png" alt="SmartCab APP preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>SmartCab APP</h3>
      <p>SMDZ SmartCab is an autonomous taxi app for LB Phone. It includes driverless vehicle requests, live arrival tracking, destination selection, Ride+ subscriptions, phone charging, and persistent trip receipts.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span class="tag-phone-app">LB PHONE APP</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/apps/lb-phone/smartcab.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/7557771" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>





  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/ox-target-radial-menu.png" alt="OX Target Radial Menu preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>OX Target Redesign Radial Menu</h3>
      <p>SMDZ OX Target Radial Redesign is a visual interface redesign for ox_target. It includes an animated radial menu, customization options, preserved exports, zone compatibility, and unchanged core target logic.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/redesigns/ox-target-radial-menu.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/radial-menu" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>





  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/cine-loadscreen.png" alt="Cine Loadscreen preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Cine Loadscreen</h3>
      <p>SMDZ Cine Loadscreen is a cinematic loading screen for FiveM. It includes image-based presentation, configurable branding, roleplay-focused atmosphere, and a polished entry experience for server players.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>STANDALONE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/cine-loadscreen.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>



  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/invite-codes.png" alt="Invite Codes preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Invite Codes</h3>
      <p>SMDZ Invite Codes is an invitation and promotion system for FiveM. It includes redeemable rewards, streamed NPC interaction, staff management tools, code monitoring, pause controls, and an in-game admin panel.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/invite-codes.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/invite-codes" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>










  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/handling-editor.png" alt="Handling Editor preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Handling Editor</h3>
      <p>SMDZ Handling Editor is a real-time vehicle tuning tool for FiveM. It includes in-game handling edits, instant testing, preset saving, original value restore, and XML export for handling.meta workflows.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-free">FREE</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/free/handling-editor.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/handling-editor" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>















  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/voice-indicator.png" alt="Voice Indicator preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Voice Indicator</h3>
      <p>SMDZ Voice Indicator is a voice activity display system for FiveM. It includes player speech indicators, proximity voice states, radio transmission states, phone call states, and configurable visual styling.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>STANDALONE</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/voice-indicator.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/7523221" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>











  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/flyers.png" alt="Flyers preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Flyers</h3>
      <p>SMDZ Flyers is an advertising and flyer placement system for FiveM. It includes flyer creation, preview tools, persistent placement, world interaction, and roleplay support for businesses, events, and announcements.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>STANDALONE</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/flyers.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/7512981" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>













  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/streamers-list.png" alt="Streamers List preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Streamers List</h3>
      <p>SMDZ Streamers List is a streamer management system for FiveM. It includes secure applications, modern NUI, staff review tools, SQL persistence, and server-side Twitch and Kick live checks.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>STANDALONE</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/streamers-list.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/7495147" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>














  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/nfc-transfer.png" alt="NFC Transfer preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>NFC Transfers</h3>
      <p>SMDZ NFC Transfer is a money transfer system for FiveM. It includes secure server validation, React NUI, banking bridge support, account-aware transfers, optional history, and NPC interaction.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/nfc-transfer.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/nfc-transfers" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>














  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/ifruit-pods-lb-app.png" alt="iFruit Pods APP preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>iFruit Pods APP</h3>
      <p>SMDZ iFruit Pods is a wireless audio app for LB Phone. It includes secure playback, playlist management, queue and repeat controls, persistent settings, dark mode, and webhook logging.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span class="tag-phone-app">LB PHONE APP</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/apps/lb-phone/ifruit-pods.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/7432166" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>













  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/speed-bumps.png" alt="SpeedBumps preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Speed Bumps</h3>
      <p>SMDZ Speed Bumps is a traffic control system for FiveM. It includes deployable road speed bumps, configurable placement rules, roleplay-friendly usage, and practical tools for city traffic management.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/speed-bumps.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/speed-bumps" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>














  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/realistic-uav.png" alt="UAV preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Realistic UAV</h3>
      <p>SMDZ Realistic UAV is a tactical aerial support system for FiveM. It includes synchronized UAV aircraft, lockable camera controls, SQL-backed cooldowns, permission checks, and a modern overlay.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/realistic-uav.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/realistic-uav" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>














  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/pets-rescue.png" alt="Peds Manager preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Pets Rescue</h3>
      <p>SMDZ Pets Rescue is a civilian mission system for FiveM. It includes lost pet searches, dynamic search areas, NPC requests, configurable rewards, and repeatable roleplay-focused rescue gameplay.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/pets-rescue.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/pets-rescue" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>













  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/peds-manager.png" alt="Peds Manager preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Peds Manager</h3>
      <p>SMDZ Peds Manager is a character ped management system for FiveM. It includes admin tools, player ped requests, approval workflows, appearance restoration, and framework-friendly management controls.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/peds-manager.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/peds-manager" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>












  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/app-emergency-alerts.png" alt="App Emergency Alerts preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>App Emergency Alerts</h3>
      <p>SMDZ Emergency Alerts is an emergency notification app for LB Phone. It includes in-app alerts, clean dispatch flow, framework integration, roleplay-friendly messaging, and configurable alert handling.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span class="tag-phone-app">LB PHONE APP</span><span>ESX</span><span>QBCORE</span><span>QBX</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/apps/lb-phone/emergency-alerts.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/emergency-alerts" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>












  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/ox-target-crystal.png" alt="OX Target Redesign Crystal preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>OX Target Redesign Crystal</h3>
      <p>SMDZ OX Target Crystal Redesign is a visual redesign for ox_target. It includes crystal-styled interaction UI, improved readability, cleaner layout, preserved compatibility, and lightweight visual customization.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>QBX</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/redesigns/ox-target-crystal.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/oxtarget-crystal-style" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>












  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/emergency-gps.png" alt="Emergency GPS preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Emergency GPS</h3>
      <p>SMDZ Emergency GPS is an emergency location system for FiveM. It includes fast position tracking, team coordination tools, clear response visibility, configurable access, and safer operational workflows.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/emergency-gps.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/emergency-gps" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>












  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/evidence-markers.png" alt="Evidence Markers preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Evidence Markers</h3>
      <p>SMDZ Evidence Markers is an evidence placement system for FiveM. It includes scene markers, practical interaction controls, investigation visibility, configurable workflows, and roleplay-friendly evidence management.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/evidence-markers.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/evidence-markers" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>








  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/rancher-job.png" alt="Rancher Job preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Rancher Job</h3>
      <p>SMDZ Rancher Job is a ranch roleplay job for FiveM. It includes configurable tasks, progression flow, farming interactions, reward handling, and repeatable work loops for civilian gameplay.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/rancher-job.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/the-rancher-job" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>










  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/previews/bus-travel.png" alt="Bus Travel preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Bus Travel</h3>
      <p>SMDZ Bus Travel is a route-based transport system for FiveM. It includes configurable stops, travel prices, destination selection, immersive city movement, and practical public transport workflows.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/scripts/paid/bus-travel.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/bus-travels" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>










<!--

  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/archived/speedzones.png" alt="Speed For Zones preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Speed For Zones</h3>
      <p>Speed zones is a zones-based speed limits using PolyZone polygons.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/archived/speed-for-zones.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/speed-for-zones" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>
 -->








<!--

  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/archived/hud2dbuilder.png" alt="HUD2D Builder preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>HUD2D Builder</h3>
      <p>Build and tune HUD elements quickly with modular options for custom server interfaces.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span class="tag-paid">PAID</span><span>ESX</span><span>QBCORE</span><span>STANDALONE</span><span class="tag-blue">OPEN SOURCE AVAILABLE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/archived/hud2d-builder.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/drawtext-hud" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article>
 -->








<!--
  <article class="home-showcase-card">
    <div class="home-showcase-media">
      <img src="assets/fivem/archived/fastrepair.png" alt="Fast Repair preview image" />
    </div>
    <div class="home-showcase-body">
      <h3>Fast Repair 1.0</h3>
      <p>Lightweight repair logic designed for smoother vehicle maintenance and roleplay consistency.</p>
      <div class="home-showcase-tags">
        <span class="tag-platform tag-fivem">FIVEM</span><span>ESX</span><span>QBCORE</span><span>STANDALONE</span>
      </div>
      <div class="home-showcase-actions">
        <a class="home-showcase-btn home-showcase-btn--docs" href="/#/resources/fivem/archived/fast-repair.md">VIEW DOCS</a>
        <a class="home-showcase-btn home-showcase-btn--buy" href="https://smdz-studios.tebex.io/package/fast-repair" target="_blank" rel="noopener noreferrer">BUY NOW</a>
      </div>
    </div>
  </article> -->
</div>






<!-- ---

# 🧭 **WHAT YOU WILL FIND IN THESE DOCS:**

Think of this documentation as a focused hub for **server owners** and **developers** using SMDZ Studios scripts:

<div class="feature-row">
  <div class="feature-card">
    <h3>🏠 Home</h3>
    <p>
      A clean entry point with links to the most important areas:
      scripts list, support, FAQ and troubleshooting.
    </p>
  </div>
  <div class="feature-card">
    <h3>📚 Script pages</h3>
    <p>
      Each script has its own page covering:
      requirements, installation, configuration, usage, developer events and exports.
    </p>
  </div>
  <div class="feature-card">
    <h3>🆘 Support & Troubleshooting</h3>
    <p>
      Dedicated sections for common problems, Asset Escrow explanations,
      performance tips and how to open an effective support ticket.
    </p>
  </div>
</div> -->

---

# 📬 **WHERE TO GO NEXT:**

Depending on what you need right now:

- 🧩 **You have a problem/error**
  → Go to **[Common Problems](/docs/support/problems.md)** for step‑by‑step diagnostics.

- 🧾 **You want to understand Asset Escrow / entitlements**
  → Read **[Asset Escrow System](/docs/support/asset-escrow.md)** to understand how Cfx.re / Tebex protection works and how to fix typical entitlement issues.

- 🆘 **You need direct help**
  → Visit **[Support](/docs/support/support.md)** for contact details and what to include in your ticket so it can be handled quickly and professionally.

Use the **search bar** in the sidebar whenever you remember a keyword but not the exact page name.
Everything here is designed to save you time and reduce guesswork when running your FiveM or RedM server with SMDZ Studios scripts. 💛
