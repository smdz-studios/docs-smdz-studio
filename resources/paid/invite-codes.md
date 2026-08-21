
<section class="bridge-policy-card bridge-policy-card--warning" aria-label="Mandatory SMDZ Bridge dependency" style="margin-top: 0; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(180deg, rgba(127, 29, 29, 0.34), rgba(38, 10, 10, 0.92)); border-radius: 18px; padding: 1.2rem 1.15rem 1.15rem; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);">
  <p class="bridge-policy-card__label" style="margin: 0 0 0.45rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; color: #fca5a5; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" style="display: block; fill: currentColor;">
      <path d="M12 3 2.7 19a1 1 0 0 0 .87 1.5h16.86A1 1 0 0 0 21.3 19L12 3Zm-1 5h2v6h-2V8Zm0 8h2v2h-2v-2Z"></path>
    </svg>
    Required Dependency
  </p>
  <h2 style="margin: 0 0 0.85rem; font-size: clamp(1.45rem, 3vw, 2.2rem); line-height: 1.05; color: #fef2f2;">THIS RESOURCE REQUIRES SMDZ BRIDGE</h2>
  <p style="margin: 0; color: #fecaca; line-height: 1.7; font-weight: 700;">
    SMDZ Bridge is a required dependency for this resource and must be installed correctly in order for it to function as intended. Please ensure that the bridge is present, properly configured, actively running, and started before any resource that depends on it.
  </p>
  <a class="bridge-policy-card__cta bridge-policy-card__cta--warning" href="#/resources/bridge/main.md">Open Bridge Docs</a>
</section>

---


<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/IRGPfDw2Mfk"
    title="SMDZ Invite Codes showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_invitecodes/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_invitecodes) | [![](https://badges.5metrics.dev/smdz_invitecodes/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_invitecodes)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_invitecodes`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox
- 🧾 **Version:** `1.1.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>


**Short description:**
SMDZ Invite Codes is a polished invitation and promotional code system for FiveM. Players can redeem configurable rewards through streamed NPCs, while authorized staff can create, edit, pause, monitor, and manage every code from a complete in-game administration panel.

---

# ⭐ **FEATURES:**

- 🎟️ **Complete invitation and promotional** code redemption system.
- 🧍 **Multiple configurable NPC locations** with automatic distance-based streaming.
- 🎯 **Supports target interactions** locally and multiple TextUI providers through the mandatory `smdz_bridge` dependency.
- 💰 **Configurable rewards** with cash, bank money, and multiple inventory items per code.
- 🧾 **Reward preview before redemption**, showing the code label and everything the player will receive.
- 🛠️ **Full in-game admin panel** for creating, editing, pausing, reactivating, and deleting codes.
- 🌐 **Full localization support for English**, Spanish, French, German, Italian, Portuguese, and Dutch.
- 📡 **Separate Discord webhooks for created**, edited, toggled, deleted, redeemed, failed, and invalid code events.



---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended artifact build.
- **Required dependencies:**
  - `oxmysql`
  - `smdz_bridge`

- **Supported frameworks through `smdz_bridge`:**
  - `es_extended`
  - `qb-core`
  - `qbx_core`

- **Supported inventories through `smdz_bridge`:**
  - `ox_inventory`
  - `ak47_inventory`
  - `codem-inventory`
  - `core_inventory`
  - `jaksam_inventory`
  - `origen_inventory`
  - `qb-inventory`
  - `qs-inventory`
  - `tgiann-inventory`
  - `qb-core` as native QBCore inventory fallback
  - `es_extended` as native ESX inventory fallback

- **Supported target systems:**
  - `ox_target`
  - `qb-target`

- **Optional TextUI integrations through `smdz_bridge`:**
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

> Framework, inventory, TextUI, and notification integrations are handled through `smdz_bridge`. Target remains local to SMDZ Invite Codes. Item rewards require a supported inventory provider in the bridge.

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_invitecodes.zip`.
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_invitecodes
```

3. Import the included database file:

```sql
CREATE TABLE IF NOT EXISTS `smdz_invite_codes` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(32) NOT NULL,
    `label` VARCHAR(80) NOT NULL,
    `money_account` VARCHAR(20) NOT NULL DEFAULT 'bank',
    `money_amount` INT UNSIGNED NOT NULL DEFAULT 0,
    `item_name` VARCHAR(80) NULL DEFAULT NULL,
    `item_amount` INT UNSIGNED NOT NULL DEFAULT 0,
    `items_json` LONGTEXT NULL,
    `max_uses` INT UNSIGNED NULL DEFAULT NULL,
    `uses_count` INT UNSIGNED NOT NULL DEFAULT 0,
    `expires_at` DATETIME NULL DEFAULT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT 1,
    `reservation_token` VARCHAR(64) NULL DEFAULT NULL,
    `created_by` VARCHAR(180) NULL DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_smdz_invite_code` (`code`),
    KEY `idx_smdz_invite_status` (`active`, `expires_at`, `max_uses`, `uses_count`),
    KEY `idx_smdz_invite_created` (`created_at`, `id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `smdz_invite_codes`
    ADD COLUMN IF NOT EXISTS `items_json` LONGTEXT NULL AFTER `item_amount`,
    ADD COLUMN IF NOT EXISTS `reservation_token` VARCHAR(64) NULL AFTER `active`;

CREATE TABLE IF NOT EXISTS `smdz_invite_redemptions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `code_id` INT UNSIGNED NOT NULL,
    `redeem_key` VARCHAR(180) NOT NULL,
    `player_name` VARCHAR(180) NOT NULL,
    `license` VARCHAR(180) NOT NULL,
    `character_id` VARCHAR(180) NOT NULL,
    `character_name` VARCHAR(180) NULL,
    `reward_snapshot` LONGTEXT NULL,
    `reservation_token` VARCHAR(64) NULL,
    `delivery_status` VARCHAR(20) NOT NULL DEFAULT 'delivered',
    `delivered_at` DATETIME NULL,
    `redeemed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_smdz_code_redeem_key` (`code_id`, `redeem_key`),
    KEY `idx_smdz_redeem_key` (`redeem_key`),
    UNIQUE KEY `uq_smdz_reservation_token` (`reservation_token`),
    KEY `idx_smdz_redeemed_at` (`redeemed_at`),
    KEY `idx_smdz_code_delivery` (`code_id`, `delivery_status`, `redeemed_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


ALTER TABLE `smdz_invite_redemptions`
    ADD COLUMN IF NOT EXISTS `character_name` VARCHAR(180) NULL AFTER `character_id`,
    ADD COLUMN IF NOT EXISTS `reservation_token` VARCHAR(64) NULL AFTER `reward_snapshot`,
    ADD COLUMN IF NOT EXISTS `delivery_status` VARCHAR(20) NOT NULL DEFAULT 'delivered' AFTER `reservation_token`,
    ADD COLUMN IF NOT EXISTS `delivered_at` DATETIME NULL AFTER `delivery_status`;

CREATE TABLE IF NOT EXISTS `smdz_invite_audit_logs` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `event_type` VARCHAR(40) NOT NULL,
    `code_id` INT UNSIGNED NULL,
    `code` VARCHAR(32) NULL,
    `player_name` VARCHAR(180) NULL,
    `license` VARCHAR(180) NULL,
    `character_id` VARCHAR(180) NULL,
    `reason` VARCHAR(255) NULL,
    `details_json` LONGTEXT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_smdz_audit_event` (`event_type`),
    KEY `idx_smdz_audit_code` (`code_id`),
    KEY `idx_smdz_audit_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Expand identity and player-facing text fields for long framework identifiers/names.
ALTER TABLE `smdz_invite_codes`
    MODIFY COLUMN `created_by` VARCHAR(180) NULL DEFAULT NULL;

ALTER TABLE `smdz_invite_redemptions`
    MODIFY COLUMN `redeem_key` VARCHAR(180) NOT NULL,
    MODIFY COLUMN `player_name` VARCHAR(180) NOT NULL,
    MODIFY COLUMN `license` VARCHAR(180) NOT NULL,
    MODIFY COLUMN `character_id` VARCHAR(180) NOT NULL,
    MODIFY COLUMN `character_name` VARCHAR(180) NULL;

ALTER TABLE `smdz_invite_audit_logs`
    MODIFY COLUMN `player_name` VARCHAR(180) NULL,
    MODIFY COLUMN `license` VARCHAR(180) NULL,
    MODIFY COLUMN `character_id` VARCHAR(180) NULL;
```

The resource can also create and migrate its database tables automatically, but importing the SQL file is recommended for a clean first installation.

4. Add the dependencies and resource to your `server.cfg` in this order:

```bash
## SMDZ Studios
ensure oxmysql
ensure smdz_bridge
ensure smdz_invitecodes
```

5. Optional: grant the administration panel through ACE permissions:

```cfg
add_ace group.admin smdz.invitecodes.admin allow
```

Framework administrator groups can also be configured in `Config.AdminGroups`.

6. Restart your server or start the resource manually:

```bash
start smdz_invitecodes
```

7. Check the server console for the `smdz_bridge` health check, detected framework, inventory, TextUI/notification providers, and database status messages.

---

# ⚙️ **CONFIGURATION:**

The shared configuration is located in:

```lua


-- =============================================================================
-- IMPORTANT - SMDZ BRIDGE REQUIRED SINCE VERSION 1.1.0
-- =============================================================================
-- Starting with SMDZ Invite Codes v1.1.0, `smdz_bridge` is a mandatory
-- dependency and the script will not work without it.
--
-- SMDZ Bridge is completely free and can be obtained from our store:
-- https://smdz-studios.tebex.io
-- =============================================================================

--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



Config = {}

--[[
===============================================================================
SMDZ INVITE CODES - SHARED CONFIGURATION
===============================================================================

INDEX
  1. Core Settings
  2. Interaction
  3. SMDZ Bridge TextUI
  4. Local Target Integration
  5. Administration
  6. Code and Reward Rules
  7. Item Images
  8. NPC Streaming and Blips

Server-only settings, including Discord webhook URLs, are located in:
  server/config.lua
===============================================================================
]]

-- =============================================================================
-- 1. CORE SETTINGS
-- =============================================================================

Config.Debug = false -- Enables additional diagnostic prints when set to true.
Config.Locale = 'en' -- Selects the active language: en, es, fr, de, it, pt, or nl.

-- =============================================================================
-- 2. INTERACTION
-- =============================================================================

-- Framework and inventory provider selection are owned entirely by the
-- mandatory smdz_bridge dependency. This resource does not select or call
-- framework / inventory providers directly.

Config.Interaction = 'textui' -- Chooses how players interact with NPCs: textui or target.
Config.InteractKey = 38 -- Sets the FiveM control ID used to interact; 38 is INPUT_CONTEXT / E.
Config.InteractKeyLabel = 'E' -- Defines the key label displayed inside supported TextUI resources.
Config.InteractDistance = 2.0 -- Sets the maximum distance in meters from which a player can interact.

-- =============================================================================
-- 3. SMDZ BRIDGE TEXTUI
-- =============================================================================

-- TextUI provider detection and compatibility are handled entirely by
-- smdz_bridge. These are normalized presentation options passed to the bridge;
-- each provider consumes only the fields it supports.
Config.TextUI = {
    id = 'smdz_invitecodes_textui', -- Stable identifier used by supported TextUI providers.
    position = 'right-center', -- Preferred TextUI screen position.
    icon = 'ticket', -- Preferred icon when supported.
    iconColor = '#ffffff', -- Preferred icon color when supported.
    color = 'darkblue', -- Generic provider color/preset when supported.
    backgroundColor = '#111113', -- Preferred background color when supported.
    textColor = '#ffffff', -- Preferred text color when supported.
    playSound = false -- Prevents interaction prompts from playing a sound when supported.
}

-- =============================================================================
-- 4. LOCAL TARGET INTEGRATION
-- =============================================================================

Config.Target = 'auto' -- Local-only target selection; target never routes through smdz_bridge.
Config.TargetPriority = { -- Defines the exact order used by automatic target detection.
    'ox_target', -- Tries ox_target first.
    'qb-target' -- Tries qb-target when ox_target is unavailable.
}
Config.TargetOptions = { -- Stores shared target option settings used by supported target providers.
    icon = 'fa-solid fa-ticket' -- Sets the Font Awesome icon displayed in the target interaction.
}

-- =============================================================================
-- 5. ADMINISTRATION
-- =============================================================================

Config.AdminCommand = 'invitecodes' -- Defines the chat command used to open the administration panel.
Config.AdminAce = 'smdz.invitecodes.admin' -- Defines the ACE permission; use false or an empty string to disable ACE access.
Config.AdminGroups = { -- Groups checked through smdz_bridge:HasPermission.
    esx = { 'admin', 'owner' }, -- ESX permission groups.
    qbcore = { 'god', 'admin' }, -- QBCore permission groups.
    qbox = { 'admin' } -- Qbox permission groups.
}

-- =============================================================================
-- 6. CODE AND REWARD RULES
-- =============================================================================

Config.RedemptionScope = 'account' -- Controls whether redemption limits apply per account or per character.
Config.RedeemCooldownSeconds = 3 -- Sets the cooldown in seconds between redemption attempts from the same player.

Config.CodeRules = { -- Defines validation and generation limits for invitation codes.
    minLength = 3, -- Sets the minimum allowed number of characters in a code.
    maxLength = 32, -- Sets the maximum allowed number of characters in a code.
    maxGeneratedPerBatch = 25, -- Sets the maximum number of unique codes generated in one batch.
    generatedPrefixMaxLength = 16, -- Sets the maximum allowed length of a generated code prefix.
    generatedSuffixMinLength = 3, -- Sets the minimum generated alphanumeric suffix length.
    generatedSuffixMaxLength = 16, -- Sets the maximum generated alphanumeric suffix length.
    maxLabelLength = 80 -- Sets the maximum allowed number of characters in a code label.
}

Config.RewardRules = { -- Defines security limits for money, items, and global code usage.
    maxItemsPerCode = 10, -- Sets the maximum number of different items that one code can reward.
    maxItemAmount = 1000, -- Sets the maximum quantity allowed for each individual reward item.
    maxMoneyAmount = 100000000, -- Sets the maximum money reward allowed for a single code.
    maxGlobalUses = 1000000, -- Sets the maximum global redemption limit allowed for a code.
    defaultMoneyAccount = 'bank', -- Selects the default money account shown when creating a code: cash or bank.
    allowedMoneyAccounts = { -- Defines which money account types administrators may select.
        cash = true, -- Allows cash rewards when set to true.
        bank = true -- Allows bank rewards when set to true.
    }
}

Config.AdminList = { -- Defines pagination limits used by the administration interface.
    codesPerPage = 8, -- Sets the default number of codes displayed on each admin page.
    maxCodesPerPage = 25, -- Sets the maximum page size accepted by the server for code queries.
    redemptionsPerPage = 8 -- Sets the number of redemption records displayed on each history page.
}

Config.AvailabilityBadges = { -- Defines when availability warning badges appear in the admin panel.
    lowStockUses = 5, -- Shows LOW STOCK when the remaining uses are at or below this number.
    lowStockPercentage = 10, -- Shows LOW STOCK when the remaining percentage is at or below this value.
    expiresSoonHours = 24 -- Shows EXPIRES SOON when the code expires within this many hours.
}

-- =============================================================================
-- 7. ITEM IMAGES
-- =============================================================================

-- {item} is replaced with the internal item name.
-- The image filename must match the item name unless your path already maps it.
Config.ItemImageURL = 'nui://ox_inventory/web/images/{item}.png' -- Defines the image URL template used to display reward item icons.

-- Common examples. Keep only one active line.
-- Config.ItemImageURL = 'nui://ox_inventory/web/images/{item}.png' -- Example path for ox_inventory item images.
-- Config.ItemImageURL = 'nui://qb-inventory/html/images/{item}.png' -- Example path for qb-inventory item images.
-- Config.ItemImageURL = 'nui://qs-inventory/html/images/{item}.png' -- Example path for qs-inventory item images.
-- Config.ItemImageURL = 'nui://your_inventory/html/images/{item}.png' -- Example path for a custom inventory resource.
-- For origen_inventory, use the actual image folder from your installation.
-- Config.ItemImageURL = 'nui://origen_inventory/YOUR_IMAGE_FOLDER/{item}.png' -- Example customizable path for origen_inventory.

-- =============================================================================
-- 8. NPC STREAMING AND BLIPS
-- =============================================================================

Config.NPC = { -- Defines the shared model, locations, behavior, streaming, and blip settings for invitation NPCs.
    model = 's_m_m_highsec_01', -- Sets the ped model used by every invitation NPC.
    locations = { -- Lists every location where an invitation NPC can appear.
        vector4(-545.28, -204.04, 38.22, 208.0), -- Creates the first NPC at these X, Y, Z, and heading coordinates.
        vector4(-1028.2019, -2743.6553, 20.1693, 64.6018) -- Creates the second NPC at these X, Y, Z, and heading coordinates.
    },
    scenario = 'WORLD_HUMAN_CLIPBOARD', -- Sets the ambient scenario played by each NPC.
    invincible = true, -- Prevents the invitation NPCs from taking damage when enabled.
    frozen = true, -- Prevents the invitation NPCs from moving away from their configured locations.
    blockEvents = true, -- Prevents ambient AI events from interrupting or controlling the NPCs.

    -- NPC entities are created only while the player is inside this distance.
    -- This keeps the client idle cost effectively at 0.00 ms when far away.
    streamDistance = 50.0, -- Sets the distance in meters at which NPCs are created and removed.
    streamCheckInterval = 1500, -- Sets the delay in milliseconds between distant NPC streaming checks.

    blip = { -- Configures the map blip created for each invitation NPC location.
        enabled = true, -- Enables or disables invitation NPC map blips.
        sprite = 280, -- Sets the GTA V blip sprite ID.
        color = 3, -- Sets the GTA V blip color ID.
        scale = 0.72, -- Sets the displayed size of each invitation NPC blip.
        localeKey = 'blip_label' -- Selects the locale key used as the blip name.
    }
}



```


Private Discord webhook URLs are stored separately in:

```lua
ServerConfig = {}

--[[
===============================================================================
SMDZ INVITE CODES - SERVER-ONLY CONFIGURATION
===============================================================================

INDEX
  1. Discord Webhooks
  2. Discord Appearance

This file is loaded only by the server. Never move webhook URLs into config.lua,
client files, or the NUI because those locations are visible to players.
===============================================================================
]]

-- =============================================================================
-- 1. DISCORD WEBHOOKS
-- =============================================================================

-- Used when an event-specific URL below is empty.
-- Leave every URL empty to disable Discord logging completely.
ServerConfig.WebhookFallback = ''

-- Use a different URL per event to keep logs separated by channel.
ServerConfig.Webhooks = {
    created = '',
    edited = '',
    toggled = '',
    deleted = '',
    redeemed = '',
    delivery_failed = '',
    invalid_attempt = ''
}

-- =============================================================================
-- 2. DISCORD APPEARANCE
-- =============================================================================

ServerConfig.WebhookName = 'SMDZ Invite Codes'
ServerConfig.WebhookColor = 3447003

```


---

# 🎮 **USAGE:**

Players interact with a configured NPC to enter an invitation code, preview its rewards, and confirm the redemption.

Administrators use the in-game management panel to create, generate, edit, activate, pause, delete, search, filter, and monitor codes.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/invitecodes` | Opens the complete invitation-code administration panel. | Requires the configured ACE permission or an allowed framework group. |

The standard FiveM chat suggestion is registered automatically while the `chat` resource is running.

### Keybinds

- Default TextUI interaction key: `E`.
- The key is configured through `Config.InteractKey` and `Config.InteractKeyLabel`.
- Target mode does not require a keyboard keybind and uses the selected target provider.

### UI / Menus

**Player redemption UI:**

- Enter an invitation code.
- Preview the code label and complete reward.
- Confirm the redemption.
- Receive translated success, error, expiration, pause, depleted, and duplicate-use messages.

**Administration panel:**

- Create codes manually.
- Generate one or multiple unique codes.
- Add cash, bank money, and multiple item rewards.
- Validate items against the detected inventory.
- Set global use limits and expiration dates.
- Edit existing codes.
- Activate, pause, or delete codes.
- Search and filter by status.
- Browse codes using server-side pagination.
- View paginated redemption history.
- Monitor usage progress, Low Stock warnings, and Expires Soon warnings.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

SMDZ Invite Codes currently exposes **no public integration events or FiveM exports**. The network events below are the real internal transport events used by the resource and are documented for transparency. They are not considered a stable third-party API.

### Server Events

```lua
RegisterNetEvent('smdz_invitecodes:server:request', function(requestId, action, data)
    -- Internal request router used by the client and NUI.
end)
```

| Event name | Parameters | Description |
|---|---|---|
| `smdz_invitecodes:server:request` | `requestId` (number), `action` (string), `data` (table) | Routes player redemption and authorized administration requests to the server. Every administrative action is permission-checked again on the server. |

Supported internal `action` values:

| Action | Intended use | Required access |
|---|---|---|
| `previewCode` | Validates a code and returns its label and reward preview before confirmation. | Player |
| `redeem` | Attempts to redeem a code and deliver its configured reward. | Player |
| `getCodes` | Returns the filtered and paginated administration code list. | Administrator |
| `generateCodes` | Generates unique code values after checking SQL duplicates. | Administrator |
| `validateItems` | Validates item names against the active inventory provider. | Administrator |
| `createCode` | Creates one code or a generated batch. | Administrator |
| `updateCode` | Updates an existing code and its rewards. | Administrator |
| `getRedemptions` | Returns paginated redemption history for a code. | Administrator |
| `toggleCode` | Explicitly activates or pauses a code. | Administrator |
| `deleteCode` | Permanently deletes a code after confirmation. | Administrator |

### Client Events

```lua
RegisterNetEvent('smdz_invitecodes:client:response', function(requestId, payload)
    -- Resolves the matching internal request promise.
end)

RegisterNetEvent('smdz_invitecodes:client:notify', function(message, notifyType)
    -- Displays a translated client notification.
end)

RegisterNetEvent('smdz_invitecodes:client:openAdmin', function()
    -- Opens the administration panel after server permission validation.
end)
```

| Event name | Parameters | Description |
|---|---|---|
| `smdz_invitecodes:client:response` | `requestId` (number), `payload` (table) | Returns the server result to the matching client request and NUI callback. |
| `smdz_invitecodes:client:notify` | `message` (string), `notifyType` (string) | Displays a client notification such as `success`, `error`, or `inform`. |
| `smdz_invitecodes:client:openAdmin` | None | Opens the administration panel for a user already authorized by the server command handler. |

### NUI Callbacks

| Callback name | Payload | Description |
|---|---|---|
| `request` | `{ action = string, data = table }` | Sends a typed NUI request through the internal client/server request router. |
| `close` | Empty table | Closes the NUI and immediately releases keyboard and mouse focus. |

### Exports

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| No public exports | — | — | — | The resource does not currently expose a public FiveM export API. |

### Bridge integration

Framework, inventory, TextUI, and notification compatibility are handled by the mandatory `smdz_bridge` dependency. SMDZ Invite Codes does not include local framework, inventory, TextUI, or notification provider adapters.

Target support remains local to this resource through `ox_target` and `qb-target`. For additional framework, inventory, TextUI, or notification providers, add or update the corresponding module in `smdz_bridge` instead of modifying SMDZ Invite Codes.

---

# 🧪 **COMMON ISSUES:**

| Problem | Likely cause | Recommended solution |
|---|---|---|
| The resource does not start | A required dependency is missing, `smdz_bridge` is unavailable/not ready, the resource order is incorrect, or the folder was renamed. | Start `oxmysql` and `smdz_bridge` before `smdz_invitecodes`, keep the folder name exactly `smdz_invitecodes`, and review the server console for the bridge health-check or first reported Lua/file error. |
| The NPC does not appear | The player is outside the streaming distance, the coordinates are incorrect, or the configured model cannot load. | Confirm `Config.NPC.locations`, move within `Config.NPC.streamDistance`, verify the model name, and review the F8 console for model-loading errors. |
| The interaction does not appear | The selected interaction mode or provider is not running. | For `textui`, confirm that `smdz_bridge` detected a supported TextUI provider. For `target`, start `ox_target` or `qb-target` and verify the local target configuration. |
| The administration command returns permission denied | The player does not have the configured ACE permission or framework group. | Verify the ACE rule in `server.cfg`, confirm the player group is listed in `Config.AdminGroups`, and restart the resource after changing permissions. |
| An item is reported as invalid | The internal item name does not exist in the inventory provider detected by `smdz_bridge`. | Confirm the exact internal item name and check the inventory provider reported by the startup/debug prints. |
| CodeM Inventory is not detected | The provider is not being detected by `smdz_bridge`. | Check the inventory module/provider configuration in `smdz_bridge`, start the inventory before the bridge, and enable debug prints to review the detected provider and capabilities. |
| TGIANN Inventory is not detected | The provider is not being detected by `smdz_bridge`. | Check the inventory module/provider configuration in `smdz_bridge`, start the inventory before the bridge, and enable debug prints to review the detected provider and capabilities. |
| Core Inventory is not detected | The provider is not being detected by `smdz_bridge`. | Check the inventory module/provider configuration in `smdz_bridge`, start the inventory before the bridge, and enable debug prints to review the detected provider and capabilities. |
| An item image does not appear | The configured base path, filename, or extension does not match the real inventory image. | Confirm `Config.ItemImageURL`, make sure the filename matches the internal item name, and verify the configured file extension. |
| A reward cannot be delivered | The item is invalid or the inventory provider rejected `AddItem`. | Check the item name and the translated bridge debug prints. `CanCarryItem` is diagnostic only; the final delivery result comes from `AddItem` through `smdz_bridge`. Also review `smdz_invite_audit_logs` and the optional `delivery_failed` webhook. |
| An expiration date is rejected | The selected time is in the past, the server clock is incorrect, or the payload was modified outside the included calendar. | Select a future date and time, confirm the server clock and time zone, and use the built-in date picker. |
| Database errors appear | `oxmysql` is not connected, the tables are missing, or the database user cannot alter the schema. | Verify the database connection, import `sql/install.sql` when necessary, and grant the database user permission to create and alter tables and indexes. |
| The UI does not show the latest changes | An old `web/dist` folder or cached client files are still being used. | Replace the complete resource folder, restart `smdz_invitecodes`, and clear the FiveM client cache when necessary. |
| The cursor remains visible after closing the UI | Another NUI resource still owns focus, or an outdated build is running. | Confirm the latest `web/dist` is installed, restart the resource, and check other open NUI resources that may be retaining focus. |
| A code stays paused after attempting to activate it | The database update failed or the client is displaying stale data. | Check the server console and database connection, refresh the admin panel, and confirm the resource has permission to update `smdz_invite_codes`. |

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| Can a code reward both money and items? | Yes. A single code can include cash or bank money together with multiple inventory items. |
| Can I create codes that never expire? | Yes. Leave the expiration date empty when creating or editing the code. |
| Can each player redeem the same code more than once? | The redemption limit is controlled by the code settings and the configured player or character scope. The server always validates the limit before delivering rewards. |
| Can I place more than one invitation NPC? | Yes. Add as many `vector4` entries as needed inside `Config.NPC.locations`. NPCs are streamed only while the player is nearby. |
| Can I use a target system instead of TextUI? | Yes. Set `Config.Interaction = 'target'` and choose a supported target provider, or use `auto` detection. |
| Where should Discord webhook URLs be configured? | Add them only in `server/config.lua`. This file is server-side and is not sent to clients. |
| Do item image files have to match the item names? | With the basic image URL configuration, yes. `{item}` is replaced with the internal item name, such as `phone` becoming `phone.png`. |
| Can I add support for another inventory? | Yes, but inventory providers are now added to `smdz_bridge`, not directly to SMDZ Invite Codes. |
| Can I add another language? | Yes. Copy an existing file from `locales`, translate every key, register it as `Locales.xx`, and load it in `fxmanifest.lua` before `locales/loader.lua`. |
| Does the resource create its database tables automatically? | Yes. It creates and migrates the required tables at startup. The included `sql/install.sql` is also available for manual installation. |
| Is it safe to update without deleting the database? | Yes. Back up your configuration and database, replace the resource files, restore custom changes, and allow the built-in migrations to update the schema. |
| Can I rename the resource folder? | No. The resource folder must remain exactly `smdz_invitecodes` because the built-in resource-name validation blocks renamed copies. |
| Are invalid redemption attempts logged? | Yes. Failed deliveries and invalid code attempts can be stored in the audit log and sent to separate Discord webhooks when configured. |
| Are code limits protected when two players redeem at the same time? | Yes. The resource uses SQL reservations so only one player can consume the final available use. |

---

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for **Q2 and Q3 of 2026**.
- 🛠️ During this period, the script will only receive:
  - **Bug fixes / emergency patches** if necessary
  - **Small content additions or minor improvements** from time to time
- ⚠️ Major feature expansions or full system reworks are **not planned** during this timeframe.

- 🧾 **UPDATE STEPS:**
  *Backup config → replace folder → restore config → restart server.*

---

# ⚠️ **IMPORTANT WARNING:**
### 🚫 DO NOT CHANGE THE RESOURCE FOLDER NAME

- ⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. (Check: https://smdz-studios.tebex.io/legal)
- 🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
