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
- 🧭 **Framework:** ESX / QBCore / Qbox / Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>


**Short description:**
SMDZ Invite Codes is a polished invitation and promotional code system for FiveM. Players can redeem configurable rewards through streamed NPCs, while authorized staff can create, edit, pause, monitor, and manage every code from a complete in-game administration panel.

---

# ⭐ **FEATURES:**

* 🎟️ Complete invitation and promotional code redemption system.
* 🧍 Multiple configurable NPC locations with automatic distance-based streaming.
* 🎯 Supports target interactions and multiple TextUI providers through modular bridges.
* 💰 Configurable rewards with cash, bank money, and multiple inventory items per code.
* 🧾 Reward preview before redemption, showing the code label and everything the player will receive.
* 🛠️ Full in-game admin panel for creating, editing, pausing, reactivating, and deleting codes.
* 🌐 Full localization support for English, Spanish, French, German, Italian, and Portuguese.
* 📡 Separate Discord webhooks for created, edited, toggled, deleted, redeemed, failed, and invalid code events.
* 📦 Inventory support: framework inventory, ox_inventory, qb-inventory, qs-inventory, origen_inventory, core_inventory, codem-inventory, and tgiann-inventory.



---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended artifact build.
- **Required dependencies:**
  - `oxmysql`
  - `ox_lib`

- **Supported frameworks:**
  - `es_extended`
  - `qb-core`
  - `qbx_core`
  - Standalone mode

- **Supported inventories:**
  - Native ESX inventory
  - Native QBCore inventory
  - `ox_inventory`
  - `qb-inventory`
  - `codem-inventory`
  - `tgiann-inventory`
  - `core_inventory`
  - `qs-inventory`
  - `origen_inventory`

- **Supported target systems:**
  - `ox_target`
  - `qb-target`

- **Optional TextUI integrations:**
  - `ox_lib`
  - `lation_ui`
  - `okokTextUI`
  - `brutal_textui`
  - `brutal_3dtextui`
  - `cd_drawtextui`
  - `codem-textui`
  - `dsco_textui`
  - `jg-textui`
  - `origen_notify`
  - `qs-textui`
  - `wasabi_uikit`
  - `ZSX_UIV2`
  - Native framework TextUI

> Item rewards require at least one supported inventory provider. Money-only codes can still be used without inventory rewards.

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
ensure ox_lib
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

7. Check the server console for the framework, inventory, database, and bridge detection messages.

---

# ⚙️ **CONFIGURATION:**

The shared configuration is located in:

```lua
Config = {}

--[[
===============================================================================
SMDZ INVITE CODES - SHARED CONFIGURATION
===============================================================================

INDEX
  1. Core Settings
  2. Framework and Inventory
  3. Interaction
  4. TextUI Bridge
  5. Target Bridge
  6. Administration
  7. Code and Reward Rules
  8. Item Images
  9. NPC Streaming and Blips
 10. Notifications

Server-only settings, including Discord webhook URLs, are located in:
  server/config.lua
===============================================================================
]]

-- =============================================================================
-- 1. CORE SETTINGS
-- =============================================================================

Config.Debug = false
Config.Locale = 'en' -- Supported locales: en, es, fr, de, it, pt

-- =============================================================================
-- 2. FRAMEWORK AND INVENTORY
-- =============================================================================

-- Framework detection checks the exact resource state and required exports.
-- Automatic order: qbx_core -> qb-core -> es_extended -> standalone
Config.Framework = 'auto' -- auto / esx / qb / qbox / standalone

-- All inventory adapters are isolated in bridge/inventory.lua.
-- Detection only accepts providers that are started and whose required API is
-- available. The order below is used exactly as written.
Config.Inventory = 'auto' -- auto / framework / ox_inventory / qb-inventory / codem-inventory / tgiann-inventory / core_inventory / qs-inventory / origen_inventory
Config.InventoryPriority = {
    'framework',
    'ox_inventory',
    'qb-inventory',
    'codem-inventory',
    'tgiann-inventory',
    'core_inventory',
    'qs-inventory',
    'origen_inventory'
}

-- =============================================================================
-- 3. INTERACTION
-- =============================================================================

Config.Interaction = 'textui' -- textui / target
Config.InteractKey = 38 -- INPUT_CONTEXT / E
Config.InteractKeyLabel = 'E'
Config.InteractDistance = 2.0

-- =============================================================================
-- 4. TEXTUI BRIDGE
-- =============================================================================

-- Set a provider directly or use auto to follow Config.TextUIPriority.
-- Provider implementations are isolated in bridge/textui.lua.
Config.TextUIProvider = 'auto'
Config.TextUIPriority = {
    'ox_lib',
    'lation_ui',
    'okokTextUI',
    'brutal_textui',
    'codem-textui',
    'cd_drawtextui',
    'dsco_textui',
    'jg-textui',
    'origen_notify',
    'wasabi_uikit',
    'ZSX_UIV2',
    'brutal_3dtextui',
    'qs-textui',
    'framework'
}

-- Only the selected provider reads its matching options block.
Config.TextUIOptions = {
    ox_lib = {
        position = 'right-center',
        icon = 'ticket',
        iconColor = '#ffffff',
        style = {
            borderRadius = 0,
            backgroundColor = '#111113',
            color = '#ffffff',
            border = '1px solid #3b3b41'
        }
    },
    lation_ui = {
        position = 'right-center',
        icon = 'fas fa-ticket',
        iconColor = '#ffffff',
        bgColor = '#111113',
        txtColor = '#ffffff'
    },
    okokTextUI = {
        color = 'darkgrey',
        position = 'right',
        playSound = false
    },
    brutal_textui = {
        color = 'gray',
        theme = 1,
        position = 'right'
    },
    codem_textui = {
        theme = 'thema-1'
    },
    wasabi_uikit = {
        position = 'right',
        style = 'keySeparated'
    },
    brutal_3dtextui = {
        style = 6,
        mainColor = 'white',
        textColor = 'white',
        backgroundColor = 'black',
        marker = 'dot'
    },
    qs_textui = {
        displayDistance = 6.0
    },
    framework = {
        position = 'left'
    }
}

-- =============================================================================
-- 5. TARGET BRIDGE
-- =============================================================================

Config.Target = 'auto' -- auto / ox_target / qb-target
Config.TargetPriority = {
    'ox_target',
    'qb-target'
}
Config.TargetOptions = {
    icon = 'fa-solid fa-ticket'
}

-- =============================================================================
-- 6. ADMINISTRATION
-- =============================================================================

Config.AdminCommand = 'invitecodes'
Config.AdminAce = 'smdz.invitecodes.admin' -- Set to false or an empty string to disable ACE access.
Config.AdminGroups = {
    esx = { 'admin', 'superadmin' },
    qb = { 'god', 'admin' },
    qbox = { 'admin' }
}

-- =============================================================================
-- 7. CODE AND REWARD RULES
-- =============================================================================

Config.RedemptionScope = 'account' -- account / character
Config.RedeemCooldownSeconds = 3

Config.CodeRules = {
    minLength = 3,
    maxLength = 32,
    maxGeneratedPerBatch = 25,
    generatedPrefixMaxLength = 16,
    generatedSuffixMinLength = 3,
    generatedSuffixMaxLength = 16,
    maxLabelLength = 80
}

Config.RewardRules = {
    maxItemsPerCode = 10,
    maxItemAmount = 1000,
    maxMoneyAmount = 100000000,
    maxGlobalUses = 1000000,
    defaultMoneyAccount = 'bank', -- cash / bank
    allowedMoneyAccounts = {
        cash = true,
        bank = true
    }
}

Config.AdminList = {
    codesPerPage = 8,
    maxCodesPerPage = 25,
    redemptionsPerPage = 8
}

Config.AvailabilityBadges = {
    lowStockUses = 5,
    lowStockPercentage = 10,
    expiresSoonHours = 24
}

-- =============================================================================
-- 8. ITEM IMAGES
-- =============================================================================

-- {item} is replaced with the internal item name.
-- The image filename must match the item name unless your path already maps it.
Config.ItemImageURL = 'nui://ox_inventory/web/images/{item}.png'

-- Common examples. Keep only one active line.
-- Config.ItemImageURL = 'nui://ox_inventory/web/images/{item}.png'
-- Config.ItemImageURL = 'nui://qb-inventory/html/images/{item}.png'
-- Config.ItemImageURL = 'nui://qs-inventory/html/images/{item}.png'
-- Config.ItemImageURL = 'nui://your_inventory/html/images/{item}.png'
-- For origen_inventory, use the actual image folder from your installation.
-- Config.ItemImageURL = 'nui://origen_inventory/YOUR_IMAGE_FOLDER/{item}.png'

-- Add the rest of the routes to your custom inventory; the most frequent and common ones are indicated above.
-- Remember, the item must be named like the picture so that the icon of each item is displayed in-game.


-- =============================================================================
-- 9. NPC STREAMING AND BLIPS
-- =============================================================================

Config.NPC = {
    model = 's_m_m_highsec_01',
    locations = {
        vector4(-545.28, -204.04, 38.22, 208.0),
        vector4(-1028.2019, -2743.6553, 20.1693, 64.6018)
    },
    scenario = 'WORLD_HUMAN_CLIPBOARD',
    invincible = true,
    frozen = true,
    blockEvents = true,

    -- NPC entities are created only while the player is inside this distance.
    -- This keeps the client idle cost effectively at 0.00 ms when far away.
    streamDistance = 50.0,
    streamCheckInterval = 1500,

    blip = {
        enabled = true,
        sprite = 280,
        color = 3,
        scale = 0.72,
        localeKey = 'blip_label'
    }
}

-- =============================================================================
-- 10. NOTIFICATIONS
-- =============================================================================

-- Return true when your custom notification has handled the message.
Config.CustomNotify = function(message, notifyType)
    return false
end

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

### Bridge extension

Advanced developers can add a server-side inventory adapter inside `bridge/inventory.lua`. Every provider follows the same structure:

```lua
InventoryProviders.example_inventory = {
    isAvailable = function()
        return false
    end,

    getItemData = function(itemName)
        return nil
    end,

    canCarryItem = function(source, itemName, amount)
        return false
    end,

    addItem = function(source, itemName, amount)
        return false
    end,

    removeItem = function(source, itemName, amount)
        return false
    end
}
```

Custom providers may also be registered internally from another server-only file through:

```lua
Bridge.RegisterInventoryProvider('example_inventory', InventoryProviders.example_inventory)
```

`Bridge.RegisterInventoryProvider` is a Lua bridge helper, not a FiveM export. Add the provider name to `Config.InventoryPriority` when it should participate in automatic detection.

---

# 🧪 **COMMON ISSUES:**

| Problem | Likely cause | Recommended solution |
|---|---|---|
| The resource does not start | A required dependency is missing, the resource order is incorrect, or the folder was renamed. | Start `oxmysql` and `ox_lib` before `smdz_invitecodes`, keep the folder name exactly `smdz_invitecodes`, and review the server console for the first reported Lua or file error. |
| The NPC does not appear | The player is outside the streaming distance, the coordinates are incorrect, or the configured model cannot load. | Confirm `Config.NPC.locations`, move within `Config.NPC.streamDistance`, verify the model name, and review the F8 console for model-loading errors. |
| The interaction does not appear | The selected interaction mode or provider is not running. | Set `Config.Interaction` to `textui` or `target`, start the configured provider before this resource, or select a provider manually instead of `auto`. |
| The administration command returns permission denied | The player does not have the configured ACE permission or framework group. | Verify the ACE rule in `server.cfg`, confirm the player group is listed in `Config.AdminGroups`, and restart the resource after changing permissions. |
| An item is reported as invalid | The internal item name does not exist in the inventory selected by the bridge. | Confirm the exact internal item name, review `Config.Inventory` and `Config.InventoryPriority`, and check the detected inventory shown in the startup banner. |
| CodeM Inventory is not detected | The resource name is different, it starts too late, or `GetItemList()` does not return the registered item table. | Keep the resource name as `codem-inventory`, start it before `smdz_invitecodes`, verify the official export, and enable `Config.Debug` for the detection reason. |
| TGIANN Inventory is not detected | The resource name is different, it starts too late, or `GetItemList()` is unavailable. | Keep the resource name as `tgiann-inventory`, start it first, verify the official export, and enable `Config.Debug`. |
| Core Inventory is not detected | The resource name is different, it starts too late, or `getItemsList()` does not return the item registry. | Keep the resource name as `core_inventory`, start it before this resource, verify the official export, and enable `Config.Debug`. |
| An item image does not appear | The configured base path, filename, or extension does not match the real inventory image. | Confirm `Config.ItemImageURL`, make sure the filename matches the internal item name, and verify the configured file extension. |
| A reward cannot be delivered | The player lacks capacity, an item is invalid, or an inventory export rejected the delivery. | Check the inventory capacity and item names, then review `smdz_invite_audit_logs` and the optional `delivery_failed` Discord webhook for the exact reason and rollback result. |
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
| Can I add support for another inventory? | Yes. Add a provider block in `bridge/inventory.lua`, implement the shared provider functions, and add its name to `Config.InventoryPriority`. |
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
