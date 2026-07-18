<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/g5466uW4ZXE"
    title="smdz_streamers_list showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_streamers_list/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_streamers_list) | [![](https://badges.5metrics.dev/smdz_streamers_list/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_streamers_list)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_streamers_list`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone (framework-independent, ESX/QBCore compatible)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>

**Short description:**
Advanced streamer list system with a modern NUI, secure streamer applications, real-time staff panel, SQL persistence, and Twitch/Kick live checks handled server-side.

---

# ⭐ **FEATURES:**

- 📺 **Server-side live/offline detection** for Twitch and Kick.
- 🖥️ **Main draggable NUI panel** with search, platform filter, live-only toggle, and pagination.
- 🌟 **Featured streamer system** with persistent SQL state.
- ⏱️ **Featured timer mode** (permanent or hourly duration) with automatic expiration cleanup.
- ⭐ **Featured hover tooltip** in `/streamers` showing remaining hours for temporary featured entries.
- 🧾 **Secure application form flow** (Discord ID, social name, platform, URLs, viewers, long reason).
- 🔐 **Strict server validation/sanitization** on all sensitive inputs and callbacks.
- 🚫 **Duplicate protection** by `username` and `channel_url` before form submission and streamer creation.
- 🛡️ **Admin panel** (`/adminstreamers`) to:
  - review pending forms
  - filter forms by state (`pending`, `accepted`, `rejected`)
  - search admin data (name, username, identifier, Discord ID)
  - view full submitted form
  - accept/reject forms (reject reason required)
  - auto-create streamer on accept (editable before confirm)
  - create/edit/delete streamers
- 🗂️ **Records tab** with unified history for:
  - form decisions/actions
  - streamer changes (`streamer_created`, `streamer_updated`, `streamer_deleted`)
  - unique 5-digit Event ID per record (searchable)
  - detailed per-event modal view with extended context
  - localized action summaries (`who did what to which record`)
- 🔔 **In-server result flow** for applicants (pending/rejected/acknowledge).
- 🎨 **Centralized UI colors in `ui_colors.lua`** (no CSS rebuild needed for color theme changes).

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended build with `lua54` enabled.
- **Framework:** none required.
- **Required dependency:**
  - `oxmysql`
- **Required runtime dependencies:**
  - NUI runtime (included by FiveM)
  - Valid outbound internet access from the server host (Twitch/Kick checks, optional webhook)
- **Optional dependencies:**
  - `ox_lib` (default notification provider)
  - Any supported notification resource configured in `Config.Notifications.provider`

---

# 📥 **INSTALLATION:**

1. Place the resource folder inside your server resources directory:

```text
resources/[smdz]/smdz_streamers_list
```

2. Keep the folder name exactly as `smdz_streamers_list`.
3. Make sure `oxmysql` starts before this resource:

```bash
ensure oxmysql
ensure smdz_streamers_list
```

4. Build the web UI only if you modified `web/src/*`:

```bash
cd resources/[smdz]/smdz_streamers_list/web
npm install
npm run build
```

5. Restart the server and confirm startup logs.

---

# 🔌 **BRIDGE:**

| Dependency | Required | Purpose |
|---------------------|----------|-------------------------------------------|
| `oxmysql` | Yes | Persistent storage for streamers/forms/results |
| `ox_lib` | No (default fallback target) | Client notifications (`lib.notify` / export fallback) |
| `okokNotify` | Optional | Notification bridge provider |
| `origen_notify` | Optional | Notification bridge provider |
| `wasabi_notify` | Optional | Notification bridge provider |
| `wasabi_uikit` | Optional | Notification bridge provider |
| `rtx_notify` | Optional | Notification bridge provider |
| `codem-notification` | Optional | Notification bridge provider |
| `vms_notifyv2` | Optional | Notification bridge provider |
| `esx_notify` | Optional | Notification bridge provider |
| `brutal_notify` | Optional | Notification bridge provider |
| `FL-Notify` | Optional | Notification bridge provider |
| `gtm-ui` | Optional | Notification bridge provider |
| `RO_Notify` | Optional | Notification bridge provider |
| `RxNotify` | Optional | Notification bridge provider |

If the configured provider is missing, the bridge tries `ox_lib` and finally console fallback.

---

# ⚙️ **CONFIGURATION:**

Main files:
- `config.lua`
- `ui_colors.lua`

```lua
Config = {}

-- =====================================================
-- CONFIG INDEX
-- 1) Core
-- 2) Commands
-- 3) HTTP Settings
-- 4) Kick Settings
-- 5) Refresh / Cache
-- 6) Security
-- 7) UI
-- 8) Notifications
-- 9) Forms
-- 10) Admin Permissions
-- =====================================================

-- [1] Core
Config.Locale = 'en' -- Active locale code loaded from locales/*.lua (fallback is en).
Config.Debug = false -- Enables structured debug logs from utils/debug.lua.

-- [2] Commands
Config.Commands = {
    open = 'streamers', -- Chat command used to open the streamers panel.
    refresh = 'refreshstreamers', -- Chat command used to manually refresh streamer status checks.
    admin = 'adminstreamers' -- Chat command used to open the staff management panel.
}

-- [3] HTTP Settings
Config.Http = { -- DO NOT MODIFY THIS IF YOU DON'T KNOW WHAT YOU'RE DOING, YOU CAN BREAK THE SCRIPT FLOW AND SOME FUNCTIONS, ESPECIALLY KICK CHECKS
    timeoutMs = 10000, -- Default timeout (ms) for outbound HTTP requests.
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36', -- User-Agent header used for web requests.
    acceptLanguage = 'en-US,en;q=0.9' -- Accept-Language header used for web requests.
}

-- [4] Kick Settings
Config.Kick = { -- DO NOT MODIFY THIS IF YOU DON'T KNOW WHAT YOU'RE DOING, YOU CAN BREAK THE SCRIPT FLOW AND SOME FUNCTIONS
    useProxy = true, -- ALWAYS ON PLEASE OR IT WILL PREVENT KICK FROM DETECTING WHEN A STREAMER IS LIVE...
    --- ...KICK HAS VERY RESTRICTIVE CORS POLICIES AND OFTEN BLOCKS REQUESTS WITHOUT A PROXY
    proxyBase = 'https://r.jina.ai/http://', -- Proxy prefix used to fetch Kick API/page content.
    timeoutMs = 12000 -- Timeout (ms) used specifically for Kick proxy requests.
}

-- [5] Refresh / Cache
Config.Refresh = {
    requestCooldownSec = 2, -- Per-player anti-spam cooldown for server data requests.
    automaticOnOpen = true, -- Keeps the intended behavior that refresh is requested when panel opens.
    playerCacheSec = 20 -- Per-player cache lifetime before a fresh web check is forced.
}

-- [6] Security
Config.Security = { -- DO NOT MODIFY THIS IF YOU DON'T KNOW WHAT YOU'RE DOING, YOU CAN BREAK THE SCRIPT FLOW AND SOME FUNCTIONS
    allowOnlyHttpLinks = true, -- Restricts streamers to allowed URL prefixes only.
    allowedUrlPrefixes = {
        'https://www.twitch.tv/', -- Allowed Twitch URL prefix.
        'https://twitch.tv/', -- Allowed Twitch short URL prefix.
        'https://kick.com/', -- Allowed Kick URL prefix.
        'https://www.kick.com/' -- Allowed Kick WWW URL prefix.
    }
}

-- [7] UI
Config.UI = {
    startCentered = true, -- Centers panel on first open when no saved position exists.
    cachePosition = true, -- Stores and restores panel position in NUI localStorage.
    margin = 16, -- Screen edge margin used by drag clamping.
    closeAnimationMs = 180, -- Close animation duration (ms) before NUI callback finalizes close.
    showUpdatedTime = true, -- Enables updated-time display support in UI payload.
    dragFromHeaderOnly = true, -- Intended behavior: panel dragging starts from header area.
    itemsPerPage = 6, -- Number of streamer cards displayed per page.
    refreshCooldownSec = 30, -- UI refresh button cooldown duration (seconds).
    colors = UIColors or {}
}
-- [8] Notifications
Config.Notifications = {
    provider = 'ox_lib', -- Notification provider used by bridge/notify_client.lua.
                        -- Supported: ox_lib, okokNotify, origen_notify, wasabi_notify,
                        -- wasabi_uikit, rtx_notify, codem-notification, vms_notifyv2,
                        -- esx_notify, brutal_notify, FL-Notify, gtm-ui,
                        -- RO_Notify, RxNotify

    durationMs = 5000, -- Default notification duration in milliseconds.
    position = 'middle-right', -- Default position for providers that support placement.
    subtitle = '', -- Optional subtitle used by some notification resources.
    sound = false, -- Enables notification sound on supported providers.
    tts = false, -- Enables text-to-speech on supported providers.
    icon = 'fa-solid fa-circle-info', -- Default icon class for compatible providers.
    color = '#6D28D9', -- Accent color used by compatible providers.
    id = '', -- Optional notification id used by some providers.
    gtmPosition = 'top-right', -- Position override for gtm-ui.
    roIcon = 'fa fa-info-circle', -- Icon override for RO_Notify.
    rxConfetti = false, -- Enables confetti effect for RxNotify.
    rxPosition = 'tr' -- Position override for RxNotify.
}

-- [9] Forms
Config.Forms = {
    enabled = true, -- Enables or disables the streamer application form feature globally.
    autoCreateTable = true, -- Auto-creates forms SQL table on resource start when it does not exist.
    cooldownHours = 72, -- Waiting time before the same identifier can send another form.
    cleanupIntervalMinutes = 15, -- Interval for automatic cleanup of expired form records.
    maxNameLength = 64, -- Max length for social name.
    maxDiscordIdLength = 25, -- Max length for Discord ID (numeric string).
    maxUrlLength = 255, -- Max length for channel and avatar URLs.
    minReasonLength = 30, -- Minimum length required for the long-form reason field.
    maxReasonLength = 1000, -- Max length for the long-form reason field.
    minAverageViewers = 0, -- Minimum allowed average viewers value.
    maxAverageViewers = 10000000, -- Maximum allowed average viewers value.
    webhookUrl = 'https://discord.com/api/webhooks/x', -- Discord webhook URL. Keep empty to disable Discord delivery.
    allowedPlatforms = { -- Allowed platform values accepted by server validation.
        twitch = true,
        kick = true
    }
}

-- [10] Admin Permissions
Config.AdminPermissions = {
    -- Permission mode for opening/using the admin panel:
    -- standalone: grants access to every player (not recommended for production).
    -- ace: requires the ACE permission set in acePermission.
    -- discord_ids: only allows players whose Discord ID is listed in allowedDiscordIds.
    mode = 'discord_ids', -- standalone | ace | discord_ids
    allowConsole = true, -- Allows server console access for admin actions.
    acePermission = 'smdz.streamers.admin', -- ACE permission required when mode = ace.
    allowedDiscordIds = { -- Discord user IDs allowed when mode = discord_ids.
         '492311610036322305' --
    }
}

```

## UI color theme
All UI color tokens are in `ui_colors.lua` and injected into CSS variables at runtime.
You can edit colors there without rebuilding CSS.

---

# 🌍 **LOCALIZATION:**

Locale files:
- `locales/en.lua`
- `locales/es.lua`
- `locales/de.lua`
- `locales/fr.lua`

Resolver:
- `utils/locale.lua` (`Translate`, fallback to `en`)

Localized domains:
- Main panel UI
- Form UI
- Admin panel UI
- Notifications
- Command suggestions/help
- Debug log messages

To add a new language:
1. Create `locales/<code>.lua`.
2. Copy all keys from `locales/en.lua`.
3. Set `Config.Locale = '<code>'`.

---

# 🎮 **COMMANDS:**

| Command | Description | Permission |
|----------------------|--------------------------------------------------|-------------------|
| `/streamers` | Opens streamer panel for the calling player | Everyone |
| `/refreshstreamers` | Forces immediate server refresh from URL checks | Everyone |
| `/adminstreamers` | Opens staff admin panel (streamers/forms management) | Config-gated (`standalone` / `ace` / `discord_ids`) |

Command names are configurable in `Config.Commands`.

---

# 🔌 **EXPORTS:**

| Export | Side | Parameters | Returns | Description |
|----------------------|--------|------------|----------|-----------------------------------------------------------|
| `GetStreamersCache` | Server | None | `table` | Returns sorted snapshot of current streamer cache |

Sort order:
1. Featured first
2. Live before offline
3. Alphabetical by `name`

---

# 📤 **EVENTS:**

## Server Events (incoming)

| Event | Triggered By | Description |
|-----------------------------------------------|----------------|-------------------------------------------------------------|
| `smdz_streamers_list:server:requestData` | Client | Requests main panel payload (guarded by source/cooldown) |
| `smdz_streamers_list:server:submitForm` | Client | Submits streamer application form |
| `smdz_streamers_list:server:adminRequestData` | Client | Requests admin snapshot |
| `smdz_streamers_list:server:adminSaveStreamer` | Client | Creates/updates streamer |
| `smdz_streamers_list:server:adminDeleteStreamer` | Client | Deletes streamer |
| `smdz_streamers_list:server:adminAcceptForm` | Client | Accepts form and creates streamer |
| `smdz_streamers_list:server:adminRejectForm` | Client | Rejects form with reason |
| `smdz_streamers_list:server:adminDeleteForm` | Client | Deletes form/result entries |
| `smdz_streamers_list:server:acknowledgeRejectedForm` | Client | Acknowledges rejected status to clear result state |

## Server Events (outgoing)

| Event | Triggered By | Description |
|-----------------------------------------------|----------------|-------------------------------------------------------------|
| `smdz_streamers_list:client:openUI` | Server | Opens main streamer panel for player |
| `smdz_streamers_list:client:openAdminUI` | Server | Opens admin panel for authorized player |
| `smdz_streamers_list:client:receiveData` | Server | Pushes public panel payload (streamers/config/form status) |
| `smdz_streamers_list:client:receiveAdminData` | Server | Pushes admin payload (streamers/forms/records/config) |
| `smdz_streamers_list:client:receiveFormStatus` | Server | Pushes form status updates to applicant |
| `smdz_streamers_list:client:notify` | Server | Pushes normalized notify payload |

## Client Events (incoming)

| Event | Triggered By | Description |
|-----------------------------------------------|----------------|-------------------------------------------------------------|
| `smdz_streamers_list:client:openUI` | Server | Opens main panel |
| `smdz_streamers_list:client:openAdminUI` | Server | Opens admin panel |
| `smdz_streamers_list:client:receiveData` | Server | Sends main panel streamers/config/form status |
| `smdz_streamers_list:client:receiveAdminData` | Server | Sends admin streamers/forms/records/config |
| `smdz_streamers_list:client:receiveFormStatus` | Server | Sends current form state updates |
| `smdz_streamers_list:client:notify` | Server | Sends normalized notification payload |

## Client Events (outgoing)

| Event | Triggered By | Description |
|-----------------------------------------------|----------------|-------------------------------------------------------------|
| `smdz_streamers_list:server:requestData` | Client | Requests public panel payload |
| `smdz_streamers_list:server:submitForm` | Client | Sends application form payload |
| `smdz_streamers_list:server:adminRequestData` | Client | Requests admin snapshot |
| `smdz_streamers_list:server:adminSaveStreamer` | Client | Sends create/edit streamer payload |
| `smdz_streamers_list:server:adminDeleteStreamer` | Client | Requests streamer deletion |
| `smdz_streamers_list:server:adminAcceptForm` | Client | Sends accept-form payload |
| `smdz_streamers_list:server:adminRejectForm` | Client | Sends reject-form payload with reason |
| `smdz_streamers_list:server:adminDeleteForm` | Client | Requests form deletion |
| `smdz_streamers_list:server:acknowledgeRejectedForm` | Client | Acknowledges rejected state |

---

# 📥 **NUI CALLBACKS:**

| Callback | Side | Description |
|------------------|--------|------------------------------------------------|
| `close` | Client Lua | Closes current UI and removes focus |
| `requestRefresh` | Client Lua | Requests refresh for main panel |
| `submitForm` | Client Lua | Sends application form data |
| `adminRequestData` | Client Lua | Requests admin snapshot |
| `adminSaveStreamer` | Client Lua | Creates/updates streamer |
| `adminDeleteStreamer` | Client Lua | Deletes streamer |
| `adminAcceptForm` | Client Lua | Accepts form |
| `adminRejectForm` | Client Lua | Rejects form with reason |
| `adminDeleteForm` | Client Lua | Deletes form |
| `acknowledgeRejectedForm` | Client Lua | Acknowledges rejected result |

NUI message actions handled by React:
- `open`
- `openAdmin`
- `close`
- `setData`
- `setAdminData`
- `setFormStatus`

---

# 📡 **WEB REQUEST FLOW:**

Status checks are fully server-side:

1. `refreshAll()` iterates SQL-loaded streamers.
2. URL allowlist validation runs before request.
3. Twitch:
   - Direct page fetch
   - HTML markers parsed for live/offline inference
4. Kick:
   - Proxy/API strategy from `Config.Kick`
   - JSON/HTML fallback parsing
5. Cache snapshot is updated and distributed.

---

# 🗄️ **SQL STORAGE:**

Main SQL file:
- `sql/install_me.sql`
```sql
CREATE TABLE IF NOT EXISTS `smdz_streamers_forms` (
    `identifier` VARCHAR(191) NOT NULL,
    `submitted_at` BIGINT NOT NULL,
    `expires_at` BIGINT NOT NULL,
    `discord_id` VARCHAR(50) NOT NULL,
    `social_name` VARCHAR(128) NOT NULL,
    `platform` VARCHAR(24) NOT NULL,
    `channel_url` VARCHAR(512) NOT NULL,
    `average_viewers` INT NULL,
    `avatar_url` VARCHAR(512) NOT NULL,
    `reason` MEDIUMTEXT NOT NULL,
    PRIMARY KEY (`identifier`),
    KEY `idx_expires_at` (`expires_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_streamers_form_results` (
    `identifier` VARCHAR(191) NOT NULL,
    `status` VARCHAR(24) NOT NULL,
    `reason` MEDIUMTEXT NOT NULL,
    `acknowledged` TINYINT(1) NOT NULL DEFAULT 0,
    `created_at` BIGINT NOT NULL,
    PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_streamers_entries` (
    `id` VARCHAR(128) NOT NULL,
    `name` VARCHAR(128) NOT NULL,
    `username` VARCHAR(128) NOT NULL,
    `avatar_url` VARCHAR(512) NOT NULL,
    `channel_url` VARCHAR(512) NOT NULL,
    `platform_override` VARCHAR(24) NULL,
    `featured` TINYINT(1) NOT NULL DEFAULT 0,
    `featured_until` BIGINT NULL,
    `created_at` BIGINT NOT NULL,
    `updated_at` BIGINT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_streamers_form_actions` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `event_code` INT NULL,
    `identifier` VARCHAR(191) NOT NULL,
    `status` VARCHAR(24) NOT NULL,
    `action_reason` MEDIUMTEXT NOT NULL,
    `admin_identifier` VARCHAR(191) NOT NULL,
    `admin_name` VARCHAR(80) NOT NULL,
    `discord_id` VARCHAR(50) NOT NULL,
    `social_name` VARCHAR(128) NOT NULL,
    `platform` VARCHAR(24) NOT NULL,
    `channel_url` VARCHAR(512) NOT NULL,
    `average_viewers` INT NULL,
    `avatar_url` VARCHAR(512) NOT NULL,
    `form_reason` MEDIUMTEXT NOT NULL,
    `created_at` BIGINT NOT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_identifier` (`identifier`),
    KEY `idx_status` (`status`),
    KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_streamers_admin_actions` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `event_code` INT NULL,
    `entity_type` VARCHAR(24) NOT NULL,
    `entity_id` VARCHAR(128) NOT NULL,
    `action` VARCHAR(40) NOT NULL,
    `admin_identifier` VARCHAR(191) NOT NULL,
    `admin_name` VARCHAR(80) NOT NULL,
    `details_json` MEDIUMTEXT NOT NULL,
    `created_at` BIGINT NOT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_entity_type` (`entity_type`),
    KEY `idx_entity_id` (`entity_id`),
    KEY `idx_action` (`action`),
    KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```


Tables:
- `smdz_streamers_entries`
  - persistent streamer records
  - includes `featured`, `featured_until`, `platform_override`
- `smdz_streamers_forms`
  - pending application forms
  - cooldown-based reuse model by identifier
- `smdz_streamers_form_results`
  - staff decisions (`accepted` / `rejected` + reason + acknowledged)
- `smdz_streamers_form_actions`
  - historical form action records used by admin forms/records views
  - includes `event_code` (unique 5-digit Event ID)
- `smdz_streamers_admin_actions`
  - historical streamer admin actions (`create`, `update`, `delete`) for Records tab
  - includes `event_code` (unique 5-digit Event ID)

Auto-create/migration behavior:
- Controlled by `Config.Forms.autoCreateTable` and startup migration logic.
- Includes column updates for size safety (URL/text lengths, etc.).

---

# 🔒 **SECURITY & VALIDATION:**

- Sensitive logic is server-only.
- NUI/server events validated with:
  - source checks
  - permission checks
  - payload type checks
  - sanitization helpers
- Anti-spam throttles for requests/forms.
- URL validation + allowlist enforcement.
- Duplicate prevention in streamer registry:
  - no duplicates by `username`
  - no duplicates by `channel_url`
- Form constraints:
  - Discord ID numeric validation
  - min/max reason length
  - platform allowlist
  - average viewers range

---

# 🚀 **PERFORMANCE:**

- In-memory cache for streamers and snapshots.
- Per-player response cache window.
- Throttled debug logger.
- Incremental refresh flow with async web checks.
- Admin real-time broadcasts only to subscribed authorized users.


---


# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| Does this need ESX or QBCore? | No. It runs standalone and coexists with both frameworks. |
| Can I use ACE only for admin? | Yes. Set `Config.AdminPermissions.mode = 'ace'` and configure `acePermission`. |
| Can I use Discord IDs only for admin? | Yes. Set `mode = 'discord_ids'` and populate `allowedDiscordIds`. |
| Can I temporarily allow everyone to admin panel? | Yes, with `mode = 'standalone'` (not recommended for production). |
| Is streamer storage SQL-only now? | Yes. Streamers are managed in-game and persisted in SQL. |
| Can I still add streamers from `config.lua`? | No. Current flow is admin panel + SQL persistence. |
| How are duplicates prevented? | Server blocks duplicates by normalized `username` or `channel_url`. |
| What if staff accepts a form that duplicates an existing streamer? | The server rejects it with a duplicate validation error. |
| Are all form fields mandatory? | All except average viewers (optional), based on current validation flow. |
| Is Discord ID numeric-only? | Yes. Non-numeric values are rejected server-side. |
| Can I configure reason min/max characters? | Yes, via `Config.Forms.minReasonLength` and `maxReasonLength`. |
| Why does long reason still fail? | Sanitization/trimming may reduce effective length below minimum. |
| Can I change form cooldown from 72 hours? | Yes, with `Config.Forms.cooldownHours`. |
| How does player rejection feedback work? | Player sees rejection reason in-game and can acknowledge to clear state. |
| Can featured be permanent or timed? | Yes. Staff can set permanent or a custom duration in hours. |
| How is temporary featured removed? | Cleanup job clears featured when `featured_until <= now`. |
| Can featured be set during create and edit? | Yes, both flows support featured setup. |
| Why include `featured_until`? | It stores expiration timestamp for temporary featured mode. |
| Is live detection client-side? | No. All status detection is server-side. |
| Does the script request Twitch/Kick constantly? | No. It uses refresh flow + cache windows to limit requests. |
| Can I change UI colors without rebuilding web? | Yes. Edit `ui_colors.lua` and restart resource. |
| When do I need `npm run build`? | Only when files under `web/src/*` are changed. |
| Can forms be disabled while list stays active? | Yes. Set `Config.Forms.enabled = false`. |
| Can I disable webhook but keep forms? | Yes. Leave `webhookUrl` empty. |
| Which locales are bundled? | `en`, `es`, `de`, and `fr`. |
| Why do I get `<\239>` parse errors? | Invalid UTF/BOM bytes in Lua files; re-save as clean UTF-8. |
| Does admin access use ESX/QBCore groups by default? | No. It uses configured standalone/ACE/Discord-ID modes. |
| Can other scripts consume streamer state? | Yes, via `exports['smdz_streamers_list']:GetStreamersCache()`. |
| Is there a quick production hardening checklist? | Yes: strict permissions, debug off, URL allowlist strict, DB backups, webhook verification. |
| What DB charset/collation is expected? | `utf8mb4` on InnoDB tables (as provided in SQL schema). |
| Why might admin/public lists differ briefly? | Short-lived cache/refresh timing; real-time broadcast sync resolves it. |
| Do I need manual cleanup of old records? | Normally no; cleanup jobs handle expired forms/featured state. |
| Fast post-update smoke test? | Open `/streamers`, open `/adminstreamers`, create one test streamer, and submit/review one form. |


---

# 🧪 **COMMON PROBLEMS:**

| Symptom | Likely Cause | Fix |
|---|---|---|
| `Failed to load script @oxmysql/lib/MySQL.lua` | `oxmysql` is missing or starts after this resource | Install/start `oxmysql` first in `server.cfg` |
| Lua parse error `unexpected symbol near '<\239>'` | Broken BOM/encoding in Lua file | Re-save file as clean UTF-8 and restart |
| `attempt to index a nil value (global 'Config')` | `config.lua` failed to load | Fix encoding/syntax and restart |
| Locale parser errors in `locales/*.lua` | Malformed Lua table or bad encoding | Compare with `locales/en.lua`, fix keys and UTF-8 |
| Form submit button appears to do nothing | JS callback error, forms disabled, or callback not registered | Check NUI console, `Config.Forms.enabled`, and `client/main.lua` callbacks |
| Admin actions appear delayed | UI cooldown/cached snapshot timing | Request refresh and check debug logs |
| Featured toggles but looks reverted | Stale cache or featured value parse mismatch | Enable `FEATURED` debug logs and verify DB/log sequence |
| Reject form button does not work | Missing/too-short reject reason | Enter valid reason and retry |
| Kick streamers never show live | Proxy unreachable or blocked outbound | Verify `Config.Kick.proxyBase` and host connectivity |
| Twitch streamers always offline | Blocked/limited page responses or URL mismatch | Validate outbound access and allowed URL prefixes |
| No Discord webhook messages | Invalid webhook URL or blocked outbound requests | Verify webhook URL and network egress |
| Streamer create succeeds but not visible | Duplicate blocked or stale admin list | Check duplicate validation and refresh admin data |
| Admin panel opens for unauthorized user | Permission mode misconfigured | Recheck `Config.AdminPermissions.mode` and lists |
| Admin panel blocked for authorized user | Missing Discord identifier / wrong ACE setup | Verify identifier exists and ACE principal mapping |
| Reason field fails unexpectedly | Sanitized length below configured minimum | Check `minReasonLength/maxReasonLength` and sanitized content |
| SQL migration errors on startup | DB user lacks ALTER privileges | Grant privileges or run migration manually |
| Featured temporary never expires | Cleanup interval/worker not applying | Verify cleanup thread and `featured_until` values |
| Featured expires too early/late | Bad server time/timezone assumptions | Check server clock and input hours |
| Rejection message keeps showing | Rejection not acknowledged | Use acknowledge flow; verify DB `acknowledged` update |
| Scrollbar/colors do not change | Color config not reloaded | Save `ui_colors.lua` and restart resource |
| Buttons/text unreadable | Invalid color token/value | Restore valid keys and hex/rgba values |
| `bad argument #2 to 'format'` | Locale placeholder mismatch (`%d/%s`) | Fix format placeholders or argument types |
| Forms table not auto-created | Auto-create disabled or DB unavailable | Set `Config.Forms.autoCreateTable = true` and verify DB |
| Delete form button does nothing | Callback/permission/identifier issue | Validate payload and permission in server logs |
| NUI animation starts in wrong position | Stale saved panel position | Clear stored position/localStorage and retry |
| Resource starts but loads no entries | Empty/invalid SQL rows or URL filtered | Check `smdz_streamers_entries` data and allowlist |
| Excessive debug log spam | Debug enabled in production | Set `Config.Debug = false` |
| Cannot create streamer from admin | Button miswired or invalid payload | Ensure `Create` triggers `saveAdminStreamer` and payload passes validation |
| Featured shows as live style in admin | Badge class reused from live status | Use dedicated featured badge style |
| Duplicate streamer still gets in | Data differs only in case/spacing and was not normalized | Keep normalized duplicate checks (`lower/trim`) by username/URL |

---
# 📚 **DEVELOPER NOTES:**

- Main server orchestration: `server/main.lua`
- Web status parser/fetcher: `server/webcheck.lua`
- Client interaction and NUI focus: `client/main.lua`
- Notification adapter: `bridge/notify_client.lua`
- Localization system: `utils/locale.lua`, `locales/*.lua`
- Debug utility: `utils/debug.lua`
- Theme tokens: `ui_colors.lua`

Integration example:

```lua
local cache = exports['smdz_streamers_list']:GetStreamersCache()
for i = 1, #cache do
    local s = cache[i]
    print(('[STREAMER] %s live=%s platform=%s featured=%s'):format(
        s.name,
        tostring(s.live),
        tostring(s.platform),
        tostring(s.featured)
    ))
end
```
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
