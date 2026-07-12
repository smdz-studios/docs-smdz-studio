<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VlhR9c-zCR4"
    title="smdz_nfc_transfer showcase"
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

[![](https://badges.5metrics.dev/smdz_nfc_transfer/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_nfc_transfer) | [![](https://badges.5metrics.dev/smdz_nfc_transfer/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_nfc_transfer)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_nfc_transfer`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone (auto-detected)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

High-end NFC money transfer system with secure server-side validation, React NUI, account-aware banking bridges, optional history/NPC interaction, and broad compatibility with ESX/QB ecosystems.

---

# ⭐ **FEATURES:**

🛡️ **Security-first architecture:** fully **server-authoritative transfer flow** with strict validation before any money movement.

🔒 **Anti-exploit protection suite:** includes **anti-spam rate limits, request locks, timeout control, and drop-safe cleanup**.

⚡ **One-click framework compatibility:** automatic detection for **ESX, QBCore, and QBX**, with standalone fallback support.

🏦 **Plug-and-play banking bridge:** compatible with **framework banking systems** and major third-party banking resources.

📱 **Realistic NFC conditions:** both players require the configured phone item and must stay within **configurable short-range distance**.

💸 **Smart transfer fee engine:** supports configurable **percentage fees** with **`sender`** or **`deduct`** payout logic.

🎯 **Ecosystem-ready bridge layer:** auto/manual support for popular **Target, TextUI, and Notification** providers.

🌍 **Fully localized experience:** locale-based architecture with built-in **EN / ES / PT / FR / DE** support and fallback handling.

🧾 **Persistent transfer history:** optional SQL logging with **account, amount, note, status, and timestamp tracking**.

🔔 **Staff-ready webhook logs:** optional Discord embeds for **accepted, rejected, cancelled, expired, failed, and completed** transfer states.

🎨 **Deluxe NUI included:** modern **React + Vite + Tailwind** interface for sender, receiver, and transfer history panels.

🧪 **Fast QA workflow:** built-in **`/nfctest`**, mock accounts, and test history rows for rapid UI and transfer validation.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended artifact.
- **Lua:** `5.4`.
- **Required dependency:** `ox_lib` and target system.
- **Framework support:**
  - `es_extended` (ESX)
  - `qb-core` (QBCore)
  - `qbx_core` (QBX)
  - `standalone` fallback
- **Database support (optional, for history):**
  - `oxmysql`
  - `mysql-async`
  - `ghmattimysql`
- **Optional integrations:**
  - Target: `ox_target` / `qb-target`
  - Banking adapters: `okokBanking`, `Renewed-Banking`, `qb-banking`, `fd_banking`, `kartik-banking`, `tgg-banking`, `tgiann-bank`, `wasabi_banking`
  - TextUI/Notify adapters (see compatibility sections)

---

# 📥 **INSTALLATION:**

1. Place the folder in:

```text
resources/[smdz]/smdz_nfc_transfer
```

2. Run the SQL file if you want transfer history:

```text
sql/smdz_nfc_transfer.sql
```

3. Ensure dependencies/resources in `server.cfg` (order recommended):

```bash
ensure ox_lib
# ensure your framework (es_extended / qb-core / qbx_core)
# ensure your DB resource (oxmysql / mysql-async / ghmattimysql)
# ensure optional providers (target/banking/notify/textui)
ensure smdz_nfc_transfer
```

4. If you edit UI source (`web/src`), rebuild the NUI:

```bash
cd resources/[smdz]/smdz_nfc_transfer/web
npm install
npm run build
```

---

## 🔌 **BRIDGE COMPATIBILITY:**

### Frameworks (auto-detected)

* ESX / `es_extended`
* QBCore / `qb-core`
* QBX / `qbx_core`
* Standalone fallback

### Notification Systems

- `auto`
- `ox_lib`
- `esx`
- `qbcore`
- `okoknotify`
- `origen_notify`
- `wasabi_notify`
- `wasabi_uikit`
- `rtx_notify`
- `codem-notification`
- `vms_notifyv2`
- `esx_notify`
- `brutal_notify`
- `fl-notify`
- `gtm-ui`
- `ro_notify`
- `rxnotify`

### Target Systems

- `auto`
- `ox_target`
- `qb_target`

### TextUI Systems

- `auto`
- `custom`
- `ox_lib`
- `codem-textui`
- `brutal_3dtextui`
- `wasabi_uikit`
- `okokTextUI`
- `qs-textui`
- `jg-textui`
- `cd_drawtextui`
- `brutal_textui`
- `dsco_textui`
- `lation_ui`
- `ZSX_UIV2`
- `framework`

### Banking Systems

- `auto`
- `custom`
- `framework`
- `okokBanking`
- `Renewed-Banking`
- `qb-banking`
- `fd_banking`
- `kartik-banking`
- `tgg-banking`
- `tgiann-bank`
- `wasabi_banking`

---

# ⚙️ **CONFIGURATION:**

Main files:

- `config.lua`


```lua
Config = Config or {}

-- =========================================================
-- CONFIG INDEX
-- 01) Core
-- 02) Framework / Inventory
-- 03) Bridge Providers (Target / TextUI / Notification / Banking)
-- 04) Transfer Rules
-- 05) Sound / Animation / UI
-- 06) History / NPC Points
-- 07) Security / Permissions / Webhook
-- =========================================================

-- 01) Core
Config.Locale = 'en' -- Active locale file key.
Config.Debug = false -- Enables structured debug prints.

-- 02) Framework / Inventory
Config.Framework = {
    Mode = 'auto' -- auto | esx | qbcore | qbx | standalone.
}

Config.Inventory = {
    RequiredItem = 'phone', -- Required item to allow NFC transfers.
    PreferOxInventory = true -- If ox_inventory is started, use it first for item checks.
}

-- 03) Bridge Providers
Config.Target = {
    Mode = 'auto', -- auto | ox_target | qb_target.
    Label = 'nfc_label', -- Locale key for target interaction label.
    Icon = 'fa-solid fa-mobile-screen-button', -- Target icon.
    Distance = 2.0 -- Max interaction distance.
}

Config.TextUI = {
    Mode = 'auto',
    -- auto | custom | ox_lib | codem-textui | brutal_3dtextui | wasabi_uikit | okokTextUI | qs-textui |
    -- jg-textui | cd_drawtextui | brutal_textui | dsco_textui | lation_ui | ZSX_UIV2 | framework.
    DefaultKey = 38, -- Default key control for TextUI interaction (E).
    DefaultDistance = 2.0 -- Default TextUI interaction distance.
}

Config.Notification = {
    Mode = 'auto',
    -- auto | custom | ox_lib | esx | qbcore | okokNotify | origen_notify | wasabi_notify | wasabi_uikit | rtx_notify |
    -- codem-notification | vms_notifyv2 | esx_notify | brutal_notify | FL-Notify | gtm-ui | RO_Notify | RxNotify.
    Position = 'top-right', -- Default notification position.
    Duration = 5000, -- Default notification duration (ms).
    TitleLocale = 'ui_title' -- Locale key used as notification title.
}

Config.Banking = {
    Mode = 'auto',
    -- auto | custom | framework | okokBanking | Renewed-Banking | qb-banking | fd_banking |
    -- kartik-banking | tgg-banking | tgiann-bank | wasabi_banking.
    UseFrameworkAsPrimary = true -- In auto mode, framework bridge is always resolved first.
}

-- 04) Transfer Rules
Config.Transfer = {
    Distance = 3.0, -- Max distance between sender and receiver.
    MinAmount = 1, -- Minimum transfer amount.
    MaxAmount = 50000, -- Maximum transfer amount.
    NoteMaxLength = 120, -- Max note length after sanitization.
    RequestTimeout = 15, -- Request expiration time (seconds).
    Cooldown = 5, -- Cooldown between actions (seconds).
    RateLimitPerMinute = 6, -- Max create requests per minute per player.
    FeePercent = 2, -- Transfer fee percent.
    FeeMode = 'sender', -- sender | deduct.
    QuickPresets = { 100, 500, 1000, 5000 } -- UI quick amount presets.
}


-- 05) Sound / Animation / UI
Config.Sound = {
    Enabled = true, -- Enables custom UI/NUI sounds.
    Volume = 0.35, -- Default sound volume.
    Enable3D = true, -- Enables nearby positional playback behavior.
    SuccessFile = 'appleplay.ogg' -- Sound file name placed in /sound.
}

Config.Animation = {
    Enabled = true, -- Enables transfer phone animation.
    Dict = 'cellphone@', -- Animation dictionary.
    Clip = 'cellphone_text_read_base', -- Animation clip.
    Prop = 'prop_phone_ing', -- Prop model attached to hand.
    PropBone = 28422, -- Hand bone id.
    PropPlacement = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 }, -- Prop offsets/rotations.
    Flag = 51 -- Animation flag.
}


-- 06) History / NPC Points
Config.History = {
    Enabled = true, -- Enables history tracking and viewing.
    MaxRows = 100, -- Max rows returned from DB.
    IncludeTestRows = true -- Adds fake rows only when test mode is enabled.
}

Config.NpcPoints = {
    {
        id = 'nfc_point_1', -- Unique npc point id.
        coords = vector4(152.4772, -1041.3099, 29.3741, 40.5014), -- Spawn position and heading.
        model = 'a_m_m_business_01', -- Ped model name.
        scenario = 'WORLD_HUMAN_STAND_MOBILE', -- Idle scenario.
        interaction = 'textui', -- auto | target | textui.
        textUiLocale = 'textui_open_history', -- Locale key used in TextUI.
        distance = 2.0 -- Interaction distance.
    },
    {
        id = 'nfc_point_2', -- Unique npc point id.
        coords = vector4(240.2536, 225.6349, 106.2868, 198.7836), -- Spawn position and heading.
        model = 'a_m_m_business_01', -- Ped model name.
        scenario = 'WORLD_HUMAN_STAND_MOBILE', -- Idle scenario.
        interaction = 'textui', -- auto | target | textui.
        textUiLocale = 'textui_open_history', -- Locale key used in TextUI.
        distance = 2.0 -- Interaction distance.
    }
}

-- 07) Security / Permissions / Webhook
Config.Webhook = {
    Enabled = false, -- Enables Discord webhook logging.
    Url = '' -- Discord webhook URL.
}

Config.Permissions = {
    RequireAdminForDebug = true, -- Restricts debug actions to admins.
    Ace = {
        Admin = 'smdz.nfc.admin', -- Full admin permission.
        ManageHistory = 'smdz.nfc.history', -- Optional history management permission.
        ForceCancel = 'smdz.nfc.forcecancel' -- Optional force-cancel permission.
    },
    FrameworkGroups = {
        ESX = { 'admin', 'superadmin', '_dev' }, -- ESX groups with admin access.
        QBCore = { 'god', 'admin', 'mod' }, -- QBCore groups with admin access.
        QBX = { 'god', 'admin', 'mod' } -- QBX groups with admin access.
    }
}

```

- `config_testmode.lua`


```lua

Config = Config or {}

Config.TestMode = {
    Enabled = false, -- Enables local test flows (`/nfctest`) and fake test helpers.
    Accounts = {
        { id = 'bank', labelLocale = 'account_personal', balance = 999999, type = 'personal' }, -- Personal account mock.
        { id = 'savings', labelLocale = 'account_savings', balance = 350000, type = 'personal' }, -- Savings account mock.
        { id = 'business', labelLocale = 'account_business', balance = 1200000, type = 'society' } -- Business account mock.
    },
    HistoryRows = {
        { account = 'bank', from = 'John Foster', to = 'Ava Torres', amount = 450, note = 'Lunch split', statusLocale = 'status_sent' }, -- Fake sent row.
        { account = 'savings', from = 'Ava Torres', to = 'John Foster', amount = 120, note = 'Taxi share', statusLocale = 'status_cancelled' }, -- Fake cancelled row.
        { account = 'business', from = 'Mason Lee', to = 'John Foster', amount = 980, note = 'Invoice #842', statusLocale = 'status_sent' }, -- Fake received row.
        { account = 'bank', from = 'Noah Reed', to = 'Mia Clark', amount = 75, note = 'Coffee', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Mia Clark', to = 'Noah Reed', amount = 55, note = 'Parking', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Ethan Price', to = 'Noah Reed', amount = 310, note = 'Repair order', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Liam Hart', to = 'Sofia Gray', amount = 680, note = 'Event ticket', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Sofia Gray', to = 'Liam Hart', amount = 200, note = 'Fuel share', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Olivia Stone', to = 'Liam Hart', amount = 1450, note = 'Supply payment', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Lucas Dunn', to = 'Emma Cole', amount = 95, note = 'Snack run', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Emma Cole', to = 'Lucas Dunn', amount = 140, note = 'Car wash', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Jack Wade', to = 'Lucas Dunn', amount = 730, note = 'Contract #12', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Aiden Fox', to = 'Zoe Hall', amount = 260, note = 'Dinner split', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Zoe Hall', to = 'Aiden Fox', amount = 180, note = 'Groceries', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Henry Mills', to = 'Aiden Fox', amount = 1210, note = 'Maintenance fee', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Levi Dean', to = 'Nora Bell', amount = 410, note = 'Taxi bill', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Nora Bell', to = 'Levi Dean', amount = 165, note = 'Cinema', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Grace Park', to = 'Levi Dean', amount = 1990, note = 'Invoice #552', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Mason Drew', to = 'Ivy Snow', amount = 88, note = 'Snacks', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Ivy Snow', to = 'Mason Drew', amount = 133, note = 'Bridge toll', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Wyatt Cole', to = 'Mason Drew', amount = 840, note = 'Delivery payout', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Caleb West', to = 'Luna Reed', amount = 502, note = 'Club entry', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Luna Reed', to = 'Caleb West', amount = 249, note = 'Medical fee', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Aria Quinn', to = 'Caleb West', amount = 1330, note = 'Trade transfer', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Dylan Hart', to = 'Chloe King', amount = 360, note = 'Concert split', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Chloe King', to = 'Dylan Hart', amount = 215, note = 'Tuner parts', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Julian Frost', to = 'Dylan Hart', amount = 910, note = 'Fleet bill', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Ryder Shaw', to = 'Hazel Knight', amount = 620, note = 'Rent share', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Hazel Knight', to = 'Ryder Shaw', amount = 300, note = 'Food order', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Violet Cross', to = 'Ryder Shaw', amount = 1765, note = 'Workshop fee', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Finn Blake', to = 'Ruby Cole', amount = 148, note = 'Tool rent', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Ruby Cole', to = 'Finn Blake', amount = 194, note = 'Tow charge', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Owen Holt', to = 'Finn Blake', amount = 1044, note = 'Business loan', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Kai Page', to = 'Lily Ray', amount = 285, note = 'Party prep', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Lily Ray', to = 'Kai Page', amount = 158, note = 'Bridge pass', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Stella Moon', to = 'Kai Page', amount = 2210, note = 'Installment', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Asher Dale', to = 'Maya Holt', amount = 432, note = 'Garage split', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Maya Holt', to = 'Asher Dale', amount = 277, note = 'Road tax', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Theo Vale', to = 'Asher Dale', amount = 1122, note = 'Store restock', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Jude Pike', to = 'Nova Lane', amount = 364, note = 'Fishing gear', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Nova Lane', to = 'Jude Pike', amount = 188, note = 'Beach event', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Elena Ward', to = 'Jude Pike', amount = 1650, note = 'Business refund', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Cole Nash', to = 'Skye Finch', amount = 523, note = 'Vehicle paint', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Skye Finch', to = 'Cole Nash', amount = 289, note = 'Mechanic tip', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Roman Hale', to = 'Cole Nash', amount = 2075, note = 'Contract wire', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Axel Crane', to = 'Iris Poe', amount = 96, note = 'Snack stand', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Iris Poe', to = 'Axel Crane', amount = 119, note = 'Cinema pass', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Nina Vale', to = 'Axel Crane', amount = 934, note = 'Office fee', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Blake Stone', to = 'June Hart', amount = 715, note = 'Deposit', statusLocale = 'status_sent' },
        { account = 'savings', from = 'June Hart', to = 'Blake Stone', amount = 344, note = 'Grocer run', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Grant Dove', to = 'Blake Stone', amount = 1884, note = 'Warehouse payment', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Parker Finn', to = 'Rose Lane', amount = 237, note = 'Gift', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Rose Lane', to = 'Parker Finn', amount = 142, note = 'Roadside fee', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Amber Holt', to = 'Parker Finn', amount = 1510, note = 'Project payout', statusLocale = 'status_sent' },
        { account = 'bank', from = 'Tyler York', to = 'Eva Moss', amount = 389, note = 'Ride service', statusLocale = 'status_sent' },
        { account = 'savings', from = 'Eva Moss', to = 'Tyler York', amount = 211, note = 'Fuel refill', statusLocale = 'status_cancelled' },
        { account = 'business', from = 'Milo Reed', to = 'Tyler York', amount = 1278, note = 'Monthly invoice', statusLocale = 'status_sent' }
    }
}
```

---

# 🎮 **COMMANDS:**

| Command | Description | Permission / Notes |
|---------|-------------|--------------------|
| `/nfctest` | Opens local test sender flow. | Only works when `Config.TestMode.Enabled = true`. |

---

# ⌨️ **KEYBINDS:**

| Key | Default | Description |
|-----|---------|-------------|
| TextUI interaction | `E` (`38`) | Opens NPC history when using TextUI mode. |
| NUI close | `ESC` | Closes active NFC NUI. |
| NUI accept (receiver) | `ENTER` | Accepts incoming transfer while receiver panel is open. |

---

# 🔌 **EXPORTS:**

No public resource exports are defined by `smdz_nfc_transfer` itself.

Internal code uses exports from other resources via bridge adapters.

---

# 📤 **EVENTS:**

### Client Events (received)

| Event | Payload | Description |
|------|---------|-------------|
| `smdz_nfc_transfer:client:startTransfer` | `{ role, id, target/sender }` | Starts transfer state for sender/receiver. |
| `smdz_nfc_transfer:client:incomingRequest` | `{ id, senderName, amount, fee, note, timeout }` | Opens receiver approval UI. |
| `smdz_nfc_transfer:client:endTransfer` | `status` | Closes UI/state and plays result feedback. |
| `smdz_nfc_transfer:client:transferResult` | `{ success, amount, fee }` | Final result SFX feedback event. |
| `smdz_nfc_transfer:client:playApplePayNearby` | `{ x, y, z, radius }` | Plays localized nearby success sound. |
| `smdz_nfc_transfer:client:bridgeNotify` | provider payload | Routed notification event. |
| `smdz_nfc_transfer:client:openSenderUi` | `{ target, testMode? }` | Opens sender UI directly. |
| `smdz_nfc_transfer:client:setUiFocus` | `boolean` | Forces NUI focus state. |
| `smdz_nfc_transfer:client:forceCancel` | none | Cancels active transfer client-side. |
| `smdz_nfc_transfer:client:testTransfer` | none | Starts local test transfer (test mode). |
| `smdz_nfc_transfer:client:openHistoryUi` | none | Opens history panel from event/NPC. |

### Server Events (received)

| Event | Payload | Description |
|------|---------|-------------|
| `smdz_nfc_transfer:server:createRequest` | `{ target, amount, account, note }` | Creates validated transfer request. |
| `smdz_nfc_transfer:server:replyRequest` | `{ id, accepted }` | Receiver accepts/rejects request. |
| `smdz_nfc_transfer:server:cancelRequest` | `requestId` | Cancels active transfer by participant. |

---

# 📥 **CALLBACKS:**

| Callback | Side | Params | Returns | Description |
|----------|------|--------|---------|-------------|
| `smdz_nfc_transfer:server:getAccounts` | Server (lib.callback) | `source` | `accounts[]` | Returns available personal/society/gang/shared accounts. |
| `smdz_nfc_transfer:server:getHistory` | Server (lib.callback) | `source` | `rows[]` | Returns player NFC history rows (+ optional test rows). |

### NUI Callbacks

| Callback | Direction | Description |
|----------|-----------|-------------|
| `nuiReady` | NUI -> Client | Handshake when React app loads. |
| `close` | NUI -> Client | Close current NFC panel/flow. |
| `historyClose` | NUI -> Client | Close history panel focus. |
| `submitSender` | NUI -> Client | Sends sender input to server create request. |
| `receiverReply` | NUI -> Client | Sends accept/reject response to server. |


---

# 💾 **DATABASE / SQL:**

Table: `smdz_nfc_history`

```sql
CREATE TABLE IF NOT EXISTS `smdz_nfc_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `request_id` VARCHAR(64) NOT NULL,
  `sender_identifier` VARCHAR(80) NOT NULL,
  `receiver_identifier` VARCHAR(80) NOT NULL,
  `sender_name` VARCHAR(64) NOT NULL,
  `receiver_name` VARCHAR(64) NOT NULL,
  `account_id` VARCHAR(80) NOT NULL,
  `amount` INT NOT NULL DEFAULT 0,
  `note` VARCHAR(255) NOT NULL DEFAULT '',
  `status` VARCHAR(24) NOT NULL DEFAULT 'CANCEL',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_smdz_nfc_request_id` (`request_id`),
  KEY `idx_smdz_nfc_sender_identifier` (`sender_identifier`),
  KEY `idx_smdz_nfc_receiver_identifier` (`receiver_identifier`),
  KEY `idx_smdz_nfc_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

Indexes are included for sender/receiver identifier and created timestamp.

---

# 📡 **WEBHOOK LOGGING:**

If enabled, the server sends Discord embeds for transfer lifecycle states:

- request
- accepted
- rejected
- expired
- cancelled
- failed

Configured via:

```lua
Config.Webhook.Enabled = true
Config.Webhook.Url = 'https://discord.com/api/webhooks/...'
```

---

# 🔒 **SECURITY & VALIDATION:**

Implemented protections:

- Server-authoritative money operations.
- Event source validation (`source > 0`, ped existence).
- Target validation (exists, not self, in range).
- Required item validation for sender and receiver.
- Strong input sanitization:
  - amount numeric/clamped
  - account ownership check
  - note cleaned and length-limited
- Rate limiting per player (`RateLimitPerMinute`).
- Per-request lock (`TransferLocks`) to prevent double-processing.
- Cancellation/timeout handling and cleanup for disconnected players.
- ACE + framework admin group checks in bridge framework module.

---

# 🚀 **PERFORMANCE:**

- Minimal polling loops:
  - phone-state replication loop every `2000ms`
  - prop cleanup loop every `1000ms`
  - adaptive TextUI proximity loop (`0/500ms`)
- Callbacks are used instead of constant state sync spam.
- Optional integrations are adapter-based and only invoked when needed.

---

# 🛠 **TROUBLESHOOTING:**

1. **Resource does not start or instantly stops**
- Confirm folder name is exactly `smdz_nfc_transfer`.
- The resource includes an internal name guard in `server/main.lua`; any folder rename will force-stop the script.

2. **History UI opens but table is empty**
- Ensure `Config.History.Enabled = true`.
- Ensure SQL file `sql/smdz_nfc_transfer.sql` was executed successfully.
- Ensure one supported DB resource is started: `oxmysql`, `mysql-async`, or `ghmattimysql`.
- If DB is disabled/missing, transfers still work but history storage is skipped.

3. **No interaction on players (NFC option missing)**
- Ensure at least one target resource is running (`ox_target` or `qb-target`) if you expect target interactions.
- Verify `Config.Target.Mode` matches your setup (`auto`, `ox_target`, `qb_target`).
- Confirm both players are alive, not in vehicles, close enough, and both have the required phone item.

4. **Cannot send transfer after opening sender panel**
- Amount must be numeric and inside `Config.Transfer.MinAmount` and `Config.Transfer.MaxAmount`.
- Account must exist in sender account list returned by bridge banking.
- Notes are sanitized; unsupported characters are removed automatically.

5. **Receiver never gets request panel**
- Check distance (`Config.Transfer.Distance`) at request creation time.
- Confirm receiver has phone item.
- Check server console for rate-limit and validation messages.
- Verify receiver is a valid connected player (not dropped mid-request).

6. **Transfer is rejected as insufficient funds unexpectedly**
- In `FeeMode = 'sender'`, sender must cover `amount + fee`.
- In `FeeMode = 'deduct'`, sender only pays `amount`, but receiver gets `amount - fee`.
- Confirm account balance comes from the intended banking adapter/provider.

7. **Notification style is not the one expected**
- In `Config.Notification.Mode = 'auto'`, provider is selected dynamically.
- Force your preferred provider by setting `Config.Notification.Mode` to a concrete adapter key.
- Ensure that provider resource is started before this script.

8. **TextUI for NPC history does not appear**
- Check `Config.NpcPoints` coordinates, interaction mode, and distance values.
- In `auto`, NPC uses target when available, otherwise TextUI.
- If using TextUI adapters, ensure configured provider resource is running.

9. **NUI appears but buttons do not react**
- Rebuild UI if you edited web source: `npm install` then `npm run build` in `web/`.
- Ensure `web/dist/index.html` and `web/dist/assets/*` exist.
- Confirm no browser console errors in CEF DevTools.

10. **Apple Pay sound does not play**
- Actual NUI audio path used by React is `/sound/applepay.ogg`.
- Current config key value is `appleplay.ogg` by default; keep your actual file naming consistent to avoid confusion.
- Confirm `Config.Sound.Enabled = true` and volume > 0.

11. **`/nfctest` does nothing**
- Command only works when `Config.TestMode.Enabled = true`.
- Test mode simulates local sender flow and optional fake history rows.

12. **Webhook logs are not sent**
- Ensure `Config.Webhook.Enabled = true`.
- Set a valid Discord webhook in `Config.Webhook.Url`.
- Check outbound request restrictions/firewall on host.

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

**Q: Is this script framework-locked?**
A: No. It auto-detects ESX, QBCore, QBX, and can run in standalone fallback mode.

**Q: Can I force a framework manually instead of auto-detection?**
A: Yes. Set `Config.Framework.Mode` to `esx`, `qbcore`, `qbx`, or `standalone`.

**Q: Is `ox_lib` optional?**
A: No. `ox_lib` is required by manifest and used for callbacks/UI helpers.

**Q: Do I need a database for transfers to work?**
A: No. Database is only required for persistent transfer history.

**Q: Which databases are supported?**
A: `oxmysql`, `mysql-async`, and `ghmattimysql`.

**Q: Does the script support society/gang/shared accounts?**
A: Yes, depending on framework and selected banking adapter.

**Q: Can I integrate a custom banking system?**
A: Yes. Implement adapter methods in `bridge/server/banking/custom.lua`.

**Q: Can I integrate custom notifications or TextUI?**
A: Yes. Use `bridge/client/notifications/custom.lua` and `bridge/client/textui/custom.lua`.

**Q: Can I disable fees?**
A: Yes. Set `Config.Transfer.FeePercent = 0`.

**Q: What is the difference between `sender` and `deduct` fee modes?**
A: `sender` charges sender `amount + fee`; `deduct` sends receiver `amount - fee`.

**Q: Is there anti-spam protection?**
A: Yes. Requests are rate-limited with `Config.Transfer.RateLimitPerMinute`.

**Q: Is transfer logic client-side or server-side?**
A: Sensitive logic is server-side (validation, account checks, money movement, final outcome).

**Q: Can players trigger admin-only actions?**
A: Not by default. Admin checks support ACE and framework group mappings.

**Q: How do I open transfer history?**
A: Through configured NPC points using target or TextUI interaction.

**Q: What does test mode do exactly?**
A: Enables `/nfctest`, mock accounts, and optional fake history rows for UI testing.

**Q: Can I rename the resource folder?**
A: No. Folder rename triggers resource validation lock and automatic stop.


---

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for **Q1 and Q2 of 2026**.
- 🛠️ During this period, the script will only receive:
  - **Bug fixes / emergency patches** if necessary
  - **Small content additions or minor improvements** from time to time
- ⚠️ Major feature expansions or full system reworks are **not planned** during this timeframe.

- 🧾 **UPDATE STEPS:**
  *Backup config → replace folder → restore config → restart server.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
