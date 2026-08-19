  <div class="identity-visual">
    <img
      src="assets/bridge.png"
      alt="SMDZ Studios Bridge"
    />
  </div>

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow" style="font-size: 1.1rem; letter-spacing: 0.32rem;">CORE LAYER</p>
  <h1 style="font-size: clamp(3.2rem, 8vw, 5.8rem); line-height: 0.95; margin: 0.35rem 0 0.75rem;">SMDZ BRIDGE</h1>
  <h1 style="font-size: clamp(1.15rem, 3vw, 2rem); line-height: 0.8; margin: 0.15rem 0 0.7rem; letter-spacing: 0.18rem; opacity: 0.78;">VERSION: 1.0.0</h1>

  <p style="font-size: clamp(1.15rem, 2.4vw, 1.7rem); line-height: 1.45; max-width: 900px; margin: 0.75rem auto 0; font-weight: 500;">
    The compatibility core that powers framework and provider support across the SMDZ Studios ecosystem.
  </p>
  <!-- <div class="support-search-tip" style="font-size: 1.02rem; max-width: 820px; margin: 1rem auto 0; line-height: 1.65;">
    Built for your own scripts and for client servers that run multiple SMDZ resources under one controlled integration layer.
  </div> -->
</section>


<div align="center">

<span class="badge badge--stable" data-badge-tooltip="This bridge is prepared to act as the shared internal core for your SMDZ resources." tabindex="0" aria-label="CORE READY: This bridge is prepared to act as the shared internal core for your SMDZ resources." style="margin-right: 0.35rem;">CORE READY</span>
<span class="badge badge--info" data-badge-tooltip="This compatibility layer is intended only for your own script ecosystem, not for public standalone distribution." tabindex="0" aria-label="PRIVATE ECOSYSTEM: This compatibility layer is intended only for your own script ecosystem, not for public standalone distribution." style="margin-right: 0.35rem; background: rgba(59, 130, 246, 0.18); border-color: rgba(96, 165, 250, 0.38); color: #93c5fd;">EXCLUSIVE FOR CLIENTS</span>
<span class="badge badge--success" data-badge-tooltip="Built to support both client-side and server-side integrations across your private SMDZ ecosystem." tabindex="0" aria-label="CLIENT AND SERVER READY: Built to support both client-side and server-side integrations across your private SMDZ ecosystem." style="background: rgba(34, 197, 94, 0.16); border-color: rgba(74, 222, 128, 0.34); color: #86efac;">CLIENT AND SERVER READY</span>

</div>

---

<div style="margin-top: 2.5rem;">
  <p style="margin: 0 0 0.35rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; opacity: 0.72;">Foundation</p>
  <h2 style="margin: 0; font-size: clamp(1.9rem, 4vw, 2.8rem); line-height: 1.05;">Why SMDZ Bridge Exists</h2>
</div>

SMDZ Bridge is the central private compatibility layer used by your SMDZ Studios resources.
Instead of hardcoding framework logic or third-party integrations inside every script, the bridge provides a unified detection and provider structure that your own resources can consume internally.

This makes your ecosystem easier to scale, easier to maintain, and far more consistent for clients running several SMDZ products together.


---

<div style="margin-top: 2.5rem;">
  <p style="margin: 0 0 0.35rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; opacity: 0.72;">Compatibility</p>
  <h2 style="margin: 0; font-size: clamp(1.9rem, 4vw, 2.8rem); line-height: 1.05;">Supported Providers</h2>
</div>

Every provider listed below uses the exact FiveM resource folder name expected by the bridge.
This layer is intended for your own resource line and for the servers of clients who use your scripts.

<section class="bridge-search-panel">
  <p class="bridge-search-panel__eyebrow">Compatibility Search</p>
  <h3 class="bridge-search-panel__title">Check If Your Resource Is Supported</h3>
  <p class="bridge-search-panel__text">
    Search by resource name, provider family, or keyword such as <code>origen</code>, <code>wasabi</code>, <code>qs</code>, <code>dispatch</code>, or <code>inventory</code>.
  </p>
  <div class="bridge-search-panel__field">
    <input
      id="bridge-provider-search"
      class="bridge-search-panel__input"
      type="search"
      inputmode="search"
      autocomplete="off"
      spellcheck="false"
      placeholder="Search compatibility..."
      aria-label="Search bridge compatibility"
    />
    <button type="button" class="bridge-search-panel__clear" data-bridge-search-clear>Clear</button>
  </div>
  <p class="bridge-search-panel__status" data-bridge-search-status>Showing every supported provider.</p>
</section>

### Framework Providers

- `qbx_core` for Qbox
- `qb-core` for QBCore
- `es_extended` for ESX

---

### Inventory Providers

- `ox_inventory` - Overextended
- `ak47_inventory` - MenanAK47
- `codem-inventory` - CodeM
- `core_inventory` - CORE Store
- `jaksam_inventory` - Jaksam Scripts
- `origen_inventory` - Origen Network
- `qb-inventory` - QBCore Framework
- `qs-inventory` - Quasar Store
- `tgiann-inventory` - TGIANN Store
- `qb-core` as native QBCore inventory fallback
- `es_extended` as native ESX inventory fallback

---

### Clothing Providers

- `esx_skin` - ESX Framework
- `illenium-appearance` - iLLeniumStudios
- `origen_clothing` - Origen Network
- `qb-clothing` - QBCore Framework
- `rcore_clothing` - RCore

---

### Dispatch Providers

- `bub_mdt` - BubbleDK
- `cd_dispatch` - Codesign Software
- `dusa_dispatch` - Dusa Scripts
- `fd_dispatch` - Felis Development
- `origen_police` - Origen Network
- `ps-dispatch` - Project Sloth
- `qf_mdt_police_v2` - QF Developers
- `qs_dispatch` - Quasar Store
- `qs_police_creator` - Quasar Store
- `rcore_dispatch` - RCore
- `tk_dispatch` - TK Scripts
- `lb-tablet` - LB Scripts
- `wasabi_mdt` - Wasabi Scripts
- `0r-dispatch` - 0Resmon Studio
- `plt_mdt` -  Pluto Development
- `plt_departments` - Pluto Development

---

### Banking Providers

- `brutal_banking` - Brutal Scripts
- `crm-banking` - CoreM Scripts
- `fd_banking` - Felis Development
- `kartik-banking` - Kartik Scripts
- `okokBanking` - okok Scripts
- `okokBankingV2` - okok Scripts
- `omes_banking` - OmesDev
- `origen_banking` - Origen Network
- `qb-banking` - QBCore Framework
- `qf_banking` - QF Developers
- `Renewed-Banking` - Renewed Scripts
- `qs-banking` - Quasar Store
- `tgiann-bank` - TGIANN Store
- `wasabi_banking` - Wasabi Scripts

---

### Fuel Providers

- `LegacyFuel` - InZidiuZ
- `BigDaddy-Fuel` - Big Daddy Scripts
- `cdn-fuel` - CodineDev
- `esx-sna-fuel` - Sna-aaa
- `lc_fuel` - Lixeiro Charmoso
- `okokGasStation` - okok Scripts
- `ox_fuel` - Overextended
- `ps-fuel` - Project Sloth
- `qb-fuel` - QBCore Framework
- `Renewed-Fuel` - Renewed Scripts
- `qs-fuelstations` - Quasar Store
- `rcore_fuel` - RCore
- `ti_fuel` - TebIT
- `x-fuel` - CodeM
- `msk_fuel` - MSK Scripts

---

### Vehicle Keys Providers

- `brutal_keys` - Brutal Scripts
- `cd_garage` - Codesign Software (for keys functions only)
- `dusa_vehiclekeys` - Dusa Scripts
- `F_RealCarKeysSystem` - F Development
- `mk_vehiclekeys` - ManKind
- `MrNewbVehicleKeys` - MrNewbScripts
- `p_vehiclekeys` - pScripts
- `qbx_vehiclekeys` - QBX Framework
- `qs-vehiclekeys` - Quasar Store
- `Renewed-Vehiclekeys` - Renewed Scripts
- `t1ger_keys` - T1GER Scripts
- `vehicles_keys` - Jaksam Scripts
- `wasabi_carlock` - Wasabi Scripts
- `0r-vehiclekeys` - 0Resmon Studio

---

### Notification Providers

- `brutal_notify` - Brutal Scripts
- `codem-notification` - CodeM
- `esx_notify` - ESX Framework
- `FL-Notify` - EV-BeansFL
- `gtm-ui` - GrandTheftMods
- `lation_ui` - Lation Scripts
- `mythic_notify` - JayMontana36
- `okokNotify` - okok Scripts
- `origen_notify` - Origen Network
- `ox_lib` - Overextended
- `qb-core` - QBCore Framework
- `qf_notify` - QF Developers
- `RO_Notify` - Unknown
- `rtx_notify` - RTX Dev
- `RxNotify` - RX Scripts
- `vms_notifyv2` - Vames
- `wasabi_notify` - Wasabi Scripts
- `wasabi_uikit`  - Wasabi Scripts
- `xsNotify` - X Studios
- `frkn-uikit` - 0Resmon Studio
- `es_extended` - ESX Framework

---

### TextUI Providers

- `smdz_textui` - SMDZ Studios
- `brutal_textui` - Brutal Scripts
- `bx_textui` - ByteXcripts
- `cd_drawtextui` - Codesign Software
- `codem-textui` - CodeM
- `dsco_textui` - Silantro
- `esx_textui` - ESX Framework
- `jg-textui` - JG Scripts
- `lation_ui` - Lation Scripts
- `okokTextUI` - okok Scripts
- `origen_notify` - Origen Network
- `ox_lib` - Overextended
- `qb-core` - QBCore Framework
- `wasabi_uikit` - Wasabi Scripts
- `ZSX_UIV2` - Zeusx Dev
- `qs-textui` - Quasar Store
- `r3-textui` - r3ps4J Store
- `lab-TextUI` - Lab Scripts
- `KS-Textui` - Katana Kraft Studio

---

<section class="bridge-policy-card bridge-policy-card--info" data-bridge-card="info" style="margin-top: 2.2rem; border: 1px solid rgba(59, 130, 246, 0.34); background: linear-gradient(180deg, rgba(30, 64, 175, 0.24), rgba(10, 22, 44, 0.94)); border-radius: 18px; padding: 1.2rem 1.15rem 1.15rem; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);">
  <div class="bridge-policy-card__toolbar">
    <div class="bridge-policy-card__lang-switch" aria-label="Language selector">
      <button type="button" class="bridge-policy-card__lang-btn is-active" data-bridge-lang="en" aria-label="View this card in English">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg" alt="US flag" />
      </button>
      <button type="button" class="bridge-policy-card__lang-btn" data-bridge-lang="es" aria-label="Ver esta tarjeta en español">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ea-1f1f8.svg" alt="Spain flag" />
      </button>
      <button type="button" class="bridge-policy-card__lang-btn" data-bridge-lang="fr" aria-label="Voir cette carte en français">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1eb-1f1f7.svg" alt="France flag" />
      </button>
      <button type="button" class="bridge-policy-card__lang-btn" data-bridge-lang="de" aria-label="Diese Karte auf Deutsch anzeigen">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg" alt="Germany flag" />
      </button>
    </div>
  </div>
  <p class="bridge-policy-card__label" data-bridge-i18n="label" style="margin: 0 0 0.45rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; color: #93c5fd; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" style="display: block; fill: currentColor;">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"></path>
    </svg>
    Info
  </p>
  <h2 data-bridge-i18n="title" style="margin: 0 0 0.85rem; font-size: clamp(1.45rem, 3vw, 2.2rem); line-height: 1.05; color: #eff6ff;">Bridge Updates And Compatibility Requests</h2>
  <p data-bridge-i18n="p1" style="margin: 0 0 0.8rem; color: #dbeafe; line-height: 1.7;">
    SMDZ Bridge will be updated periodically to add compatibility for additional resources, correct bugs, improve stability, and maintain proper integration across the SMDZ ecosystem.
  </p>
  <p data-bridge-i18n="p2" style="margin: 0 0 0.8rem; color: #dbeafe; line-height: 1.7;">
    Bridge updates are mandatory. If they are not applied, the bridge will stop working due to an obsolete version, and therefore your related script will also stop working. In normal cases, it is sufficient to delete the contents of the previous bridge installation and replace them with the new files.
  </p>
  <p data-bridge-i18n="p3" style="margin: 0; color: #dbeafe; line-height: 1.7;">
    If you are an existing client and want compatibility for another eligible resource to be added to the bridge, you may request it free of charge through a support ticket in our Discord. Client compatibility requests will be reviewed and implemented as quickly as reasonably possible.
  </p>
</section>

---

<section class="bridge-policy-card bridge-policy-card--warning" data-bridge-card="warning" style="margin-top: 2.8rem; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(180deg, rgba(127, 29, 29, 0.34), rgba(38, 10, 10, 0.92)); border-radius: 18px; padding: 1.2rem 1.15rem 1.15rem; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);">
  <div class="bridge-policy-card__toolbar">
    <div class="bridge-policy-card__lang-switch" aria-label="Language selector">
      <button type="button" class="bridge-policy-card__lang-btn is-active" data-bridge-lang="en" aria-label="View this card in English">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg" alt="US flag" />
      </button>
      <button type="button" class="bridge-policy-card__lang-btn" data-bridge-lang="es" aria-label="Ver esta tarjeta en español">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ea-1f1f8.svg" alt="Spain flag" />
      </button>
      <button type="button" class="bridge-policy-card__lang-btn" data-bridge-lang="fr" aria-label="Voir cette carte en français">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1eb-1f1f7.svg" alt="France flag" />
      </button>
      <button type="button" class="bridge-policy-card__lang-btn" data-bridge-lang="de" aria-label="Diese Karte auf Deutsch anzeigen">
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg" alt="Germany flag" />
      </button>
    </div>
  </div>
  <p class="bridge-policy-card__label" data-bridge-i18n="label" style="margin: 0 0 0.45rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; color: #fca5a5; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" style="display: block; fill: currentColor;">
      <path d="M12 3 2.7 19a1 1 0 0 0 .87 1.5h16.86A1 1 0 0 0 21.3 19L12 3Zm-1 5h2v6h-2V8Zm0 8h2v2h-2v-2Z"></path>
    </svg>
    Warning
  </p>
  <h2 data-bridge-i18n="title" style="margin: 0 0 0.85rem; font-size: clamp(1.45rem, 3vw, 2.2rem); line-height: 1.05; color: #fef2f2;">Important Bridge Conditions</h2>
  <p data-bridge-i18n="p1" style="margin: 0 0 0.8rem; color: #fecaca; line-height: 1.7;">
    The SMDZ Bridge resource may only be claimed once per CFX account. The bridge is provided at no additional cost, but access is strictly limited to users who already hold the corresponding script entitlement, whether through a free release or a valid purchase.
  </p>
  <p data-bridge-i18n="p2" style="margin: 0 0 0.8rem; color: #fecaca; line-height: 1.7;">
    Bridge updates are mandatory. If the required bridge version is not installed, compatibility will be considered invalid and both the bridge and the associated script may cease to function until the required update is applied.
  </p>
  <p data-bridge-i18n="p3" style="margin: 0 0 0.8rem; color: #fecaca; line-height: 1.7;">
    If a resource depends on SMDZ Bridge, that dependency is mandatory. The dependency requirement will not be removed, altered, or bypassed under any circumstance.
  </p>
  <p data-bridge-i18n="p4" style="margin: 0 0 0.8rem; color: #fecaca; line-height: 1.7;">
    In certain cases, and solely at the discretion of SMDZ Studios, limited telemetry may be used to verify where the bridge is being used and which SMDZ resource is using it. This is used strictly for security and anti-leak purposes related to unauthorized distribution of our resources.
  </p>
  <p data-bridge-i18n="p5" style="margin: 0 0 0.8rem; color: #fecaca; line-height: 1.7;">
    No sensitive data will ever be collected through this process, including private keys, IP addresses, or similar protected information. CFX policy does not legally allow that type of sensitive collection in any case.
  </p>
  <p data-bridge-i18n="p6" style="margin: 0; color: #fecaca; line-height: 1.7; font-weight: 700;">
    By acquiring, claiming, downloading, or using the bridge, you acknowledge and accept these conditions in full.
  </p>
</section>
