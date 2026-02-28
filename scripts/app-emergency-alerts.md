<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/91j87Aw-aN0"
    title="smdz_emergency_lbphoneapp showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>


# 🧩 **OVERVIEW:**
- 📌 **Name:** `smdz_lb_emergency_app`
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QB Box
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**SMDZ LB Emergency App** is a full emergency alert ecosystem for **LB Phone** on FiveM. It provides:

- A **phone app** for all players to view alerts.
- A **panel** for authorized jobs to send official alerts.
- **Real-time delivery** by zone and type.
- **Audit logs**, **anti-spam**, and **persistence**.

This is built to feel like a real-world public alert system (Amber/Police/Medical/etc.) with strong roleplay control and a clean iOS‑style UI.

---

# **✨ FEATURES:**

- 📱 **LB Phone app integration** (custom app with configurable name, icon, and description)
- 🧭 **Zone-based dispatch** using PolyZone (Los Santos, North, Cayo Perico, or ALL)
- 🧩 **Multi-framework support** (ESX, QBCore, QBX, vRP auto-detected)
- 🧑‍✈️ **Per-alert type permissions** by job and minimum grade
- 🧰 **Command + keybind panel** (configurable, or item-only mode)
- 🧾 **Usable item support** for ESX/QBCore + client export for other inventories
- 🔔 **Emergency notifications** via LB Phone export (always delivered)
- 🔊 **Alert sound** with per-user volume control
- 🔦 **Flashlight strobe** while receiving alerts (optional)
- 📲 **Auto-open phone** on receive with configurable focus
- 🆔 **Unique alert IDs** (non-repeating among active alerts)
- 🕵️ **Anonymous mode** (rank always shown, name hidden if enabled)
- 👤 **Per-user privacy** (hide sender/rank; hide specific alerts by ID)
- 🧹 **Clear history** per user (does not affect global alerts)
- 🎯 **Alert type filters** per user (show/hide categories)
- 🧱 **Word filter / anti-spam** with cooldowns and blocked terms
- ⏳ **Auto-expiration** with scheduled cleanup
- 💾 **MySQL persistence** for alerts and user settings
- 🧠 **Real-time UI updates** across all phones
- 🏷️ **Job labels + job logos** on alert cards (configurable)
- 🎨 **iOS-style UI** with light/dark themes and modern settings panel
- 🌍 **Multi-language** (EN, ES, DE, FR, PT-BR) fully localizable
- 🧾 **Admin tools** (delete alert by ID with permission checks)
- 🧾 **Chat command help** (localized suggestions)
- 📡 **Webhook logs** (staff audit logs + public IC embeds with role mention & image)
- 🧪 **Extensive debug logs** with levels and colors
- 🧩 **Exports for integration** (client + server APIs)

---

# **🧱 SUPPORTED FRAMEWORKS & DEPENDENCIES:**

Frameworks (auto-detected):

- ESX / es_extended
- QBCore / qb-core
- QBX / qbx_core
- vRP

Dependencies (required):

- `lb-phone`
- `PolyZone`
- `oxmysql`

---

# **📥 INSTALLATION:**

1. Extract to:

```text
resources/[lb-phone]/[apps]/smdz_lb_emergency_app
```

2. Add to `server.cfg` in this order:

```bash
ensure lb-phone
ensure PolyZone
ensure oxmysql
ensure smdz_lb_emergency_app
```


3. (Optional) If you want the panel to require an item:
   - Import the inventory item from `_INSTALL_FILES/` (ox, qb, qs).
   - Enable `Config.PanelItem.Enabled = true` and set `ItemName = "smdz_alerts"`.
   - When enabled, **command + key mapping are disabled** (item only).

4. Restart server or:

```bash
start smdz_lb_emergency_app
```

---

# **📁 STRUCTURE AND COMPONENTS:**

| Component | Purpose |
| --- | --- |
| **Phone App** | Shows alert feed for all players |
| **Alert Panel** | Authorized jobs create alerts |
| **Server Core** | Validates permissions, spam, persistence |
| **Client Core** | Manages NUI + phone integration |
| **Webhooks** | Logs and public announcements |
| **Database** | Stores alerts + per-user settings |

---

# **🔄 HOW IT WORKS (FLOW):**

**1. Player opens panel**
- Job/grade checked server‑side.
- Panel appears only for authorized roles.

**2. Alert is created**
- Server validates type permissions, cooldowns, word filter.
- A unique 3‑digit ID is assigned.

**3. Delivery**
- Server sends to target zone (or all).
- Every player receives notification + sound + flashlight.

**4. Persistence**
- Alert saved in database.
- New players see existing active alerts.

---

# **🛡️ ROLES AND PERMISSIONS MODEL:**

Access is controlled in two layers:

1. **Command access** (who can open panel)
2. **Alert type access** (who can send each type)

This lets you allow broad panel access but restrict specific alert types to higher ranks or different jobs.

---

# **🌍 ZONE TARGETING MODEL:**

Zones are defined as PolyZone polygons. Each player belongs to one zone (or none). Alerts can be sent to:

- **ALL** (global)
- **Specific zone**

The panel shows the sender’s current zone to avoid mistakes.


# **📱 USER EXPERIENCE (PHONE APP):**

Players see:

- Alert feed with ID, type, job label, and time.
- Settings for volume, theme, visible types, and privacy.

Alerts update **in real time** with no refresh needed.

---


# **📦 PANEL ITEM (OPTIONAL):**

If you want to restrict the **alert panel** to a physical item (e.g. tablet/sonar), enable:

```lua
Config.PanelItem = {
    Enabled = true,
    ItemName = "smdzalerts"
}
```

Behavior:
- When enabled, **command + key mapping are disabled**.
- Panel opens only when the item is used.

Inventory setup:
- **ox_inventory**: use `_INSTALL_FILES/item_ox_inventory.lua` (uses export `smdz_lb_emergency_app.useEmergencySonar`).
- **QBCore/QBX**: use `_INSTALL_FILES/item_qb_inventory.lua` (CreateUseableItem sends client event).
- **QS**: use `_INSTALL_FILES/item_qs_inventory.lua` for the item definition.
- **ESX**: handled automatically by the script when `Config.PanelItem.Enabled = true`.

Client event used:
- `smdz_lb_emergency_app:client:useEmergencySonar`

# **🙈 ANONYMOUS MODE BEHAVIOR:**

When anonymous:

- Sender name is hidden
- Rank is still shown
- Job label remains visible

This allows public alerts without exposing the author’s name.

---

# **🗄️ PERSISTENCE AND DATA STORAGE:**

Database tables:

- `smdz_lb_emergency_app_alerts`
- `smdz_lb_emergency_app_user_settings`

Stored data includes:

- Alerts, their type, zone, sender, and timestamps
- Per‑user preferences (volume, theme, hidden types, hidden IDs)

```sql
CREATE TABLE IF NOT EXISTS `smdz_lb_emergency_app_alerts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `alert_code` VARCHAR(8) NULL,
  `message` VARCHAR(255) NOT NULL,
  `author` VARCHAR(64) NULL,
  `sender` VARCHAR(64) NULL,
  `alert_type` VARCHAR(32) NULL,
  `zone_id` VARCHAR(32) NULL,
  `firstname` VARCHAR(64) NULL,
  `lastname` VARCHAR(64) NULL,
  `job` VARCHAR(32) NULL,
  `job_label` VARCHAR(64) NULL,
  `grade` INT NULL,
  `grade_label` VARCHAR(64) NULL,
  `anonymous` TINYINT(1) NULL,
  `created_at` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_alert_code` (`alert_code`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_lb_emergency_app_user_settings` (
  `identifier` VARCHAR(64) NOT NULL,
  `volume` DOUBLE NULL,
  `theme` VARCHAR(16) NULL,
  `cleared_at` INT UNSIGNED NULL,
  `hide_sender` TINYINT(1) NULL,
  `hide_rank` TINYINT(1) NULL,
  `visible_types` TEXT NULL,
  `hidden_alerts` TEXT NULL,
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

# **📡 WEBHOOKS AND AUDIT TRAIL:**

Two webhook systems:

1. **Staff Logs** — full audit of alerts, permissions, identifiers
2. **Public IC Logs** — optional RP broadcast embed

Both can be configured with:

- Role mentions
- Custom embed colors
- Optional image

---

# **🌐 LOCALIZATION:**

Supported locales:

- `en`, `es`, `fr`, `de`, `ptbr`

All UI text, messages, and debug logs are keyed for translation.

---

# **🔌 DEVELOPER INTEGRATION:**

This resource exposes **client and server exports**, and also emits events for advanced integrations.

You can:

- Open the panel programmatically
- Send alerts from other scripts
- Fetch current alert list
- Read user settings

See the **Exports + Events** section below for full details.

---


# **📤 EXPORTS:**

## **Client exports (examples per export):**

| Export | Returns | Description | Example |
| --- | --- | --- | --- |
| `OpenPanel()` | boolean | Opens the alert panel for local player. | `exports["smdz_lb_emergency_app"]:OpenPanel()` |
| `SendAlert(data)` | void | Sends alert to server. | `exports["smdz_lb_emergency_app"]:SendAlert({ type = "police", zone = "ALL", message = "Roadblock active on Alta St.", anonymous = false })` |
| `GetAlerts()` | table | Cached alerts (unfiltered). | `local alerts = exports["smdz_lb_emergency_app"]:GetAlerts()` |
| `GetFilteredAlerts()` | table | Alerts after user filters. | `local alerts = exports["smdz_lb_emergency_app"]:GetFilteredAlerts()` |
| `RefreshAlerts()` | table | Fetches and updates alerts. | `local alerts = exports["smdz_lb_emergency_app"]:RefreshAlerts()` |
| `GetCurrentZone()` | string | Current zone id. | `local zone = exports["smdz_lb_emergency_app"]:GetCurrentZone()` |
| `GetUserSettings()` | table | User settings. | `local settings = exports["smdz_lb_emergency_app"]:GetUserSettings()` |
| `SetUserSettings(payload)` | table | Saves settings. | `exports["smdz_lb_emergency_app"]:SetUserSettings({ volume = 0.8, theme = "dark" })` |
| `ClearUserAlerts()` | table | Clears history for user only. | `exports["smdz_lb_emergency_app"]:ClearUserAlerts()` |
| `useEmergencySonar(item, slot)` | boolean | Trigger item usage (ox/inventory export). | `exports["smdz_lb_emergency_app"]:useEmergencySonar(item, slot)` |
| `GetPermissions(refresh?)` | table | `{ filter, allowedTypes }`. | `local perms = exports["smdz_lb_emergency_app"]:GetPermissions(true)` |
| `IsNuiReady()` | boolean | NUI readiness. | `local ready = exports["smdz_lb_emergency_app"]:IsNuiReady()` |
| `IsAppReady()` | boolean | App readiness. | `local ready = exports["smdz_lb_emergency_app"]:IsAppReady()` |

## **Server exports (examples per export):**

| Export | Returns | Description | Example |
| --- | --- | --- | --- |
| `SendAlert(source, data, opts)` | `ok, result` | Sends alert from server. | `exports["smdz_lb_emergency_app"]:SendAlert(source, { type = "general", zone = "ALL", message = "Emergency broadcast test" })` |
| `OpenPanel(source, opts)` | `ok, reason` | Opens panel for player. | `exports["smdz_lb_emergency_app"]:OpenPanel(source)` |
| `DeleteAlert(code, source, opts)` | `ok, result, code` | Deletes alert by code. | `exports["smdz_lb_emergency_app"]:DeleteAlert("762", source)` |
| `GetAlerts()` | table | Current alert cache. | `local alerts = exports["smdz_lb_emergency_app"]:GetAlerts()` |
| `GetAlertByCode(code)` | table or nil | Alert by code. | `local alert = exports["smdz_lb_emergency_app"]:GetAlertByCode("762")` |
| `GetUserSettings(source)` | table or nil | User settings. | `local settings = exports["smdz_lb_emergency_app"]:GetUserSettings(source)` |
| `GetAlertTypes()` | table | Configured types. | `local types = exports["smdz_lb_emergency_app"]:GetAlertTypes()` |
| `GetZones()` | table | Configured zones. | `local zones = exports["smdz_lb_emergency_app"]:GetZones()` |
| `GetPermissions(source)` | table | `{ filter, allowedTypes }`. | `local perms = exports["smdz_lb_emergency_app"]:GetPermissions(source)` |
| `HasCommandAccess(source)` | boolean | Command permission check. | `local ok = exports["smdz_lb_emergency_app"]:HasCommandAccess(source)` |
| `HasPanelAccess(source)` | boolean | Panel permission check. | `local ok = exports["smdz_lb_emergency_app"]:HasPanelAccess(source)` |
| `GetAlertTypeLabel(type)` | string | Localized type label. | `local label = exports["smdz_lb_emergency_app"]:GetAlertTypeLabel("police")` |
| `GetZoneLabel(zone)` | string | Localized zone label. | `local label = exports["smdz_lb_emergency_app"]:GetZoneLabel("NORTH")` |

---
# **📡 EVENTS:**

| Event | Direction | Description | Payload |
| --- | --- | --- | --- |
| `smdz_lb_emergency_app:sendAlert` | Client → Server | Requests a new alert | `{ type, zone, message, anonymous }` |
| `smdz_lb_emergency_app:setZone` | Client → Server | Updates player current zone | `zoneId` |
| `smdz_lb_emergency_app:openPanel` | Server → Client | Opens panel | none |
| `smdz_lb_emergency_app:alert` | Server → Client | Sends a single alert | `alert` object |
| `smdz_lb_emergency_app:alertsUpdated` | Server → Client | Sends full list | `alerts[]` |
| `smdz_lb_emergency_app:notify` | Server → Client | Panel message | `{ message }` |
| `smdz_lb_emergency_app:alertSent` | Server → Client | Send ack | `{ ok = true }` |
| `smdz_lb_emergency_app:layoutToggle` | Server → Client | Layout debug | none |

---

# **🧩 NUI CALLBACKS:**

| Callback | Direction | Description | Response |
| --- | --- | --- | --- |
| `nuiReady` | NUI → Client | NUI ready | `{ ok = true }` |
| `getConfig` | NUI → Client | Requests config | `{ types, zones, labels, ui, settings }` |
| `getAlerts` | NUI → Client | Requests alerts | `alerts[]` |
| `openPanelAck` | NUI → Client | Panel open ack | `{ ok = true }` |
| `sendAlert` | NUI → Client | Send alert | `{ ok = true }` |
| `closePanel` | NUI → Client | Close panel | `{ ok = true }` |
| `saveUserSettings` | NUI → Client | Save settings | `{ ok, settings }` |
| `clearHistory` | NUI → Client | Clear local history | `{ ok, clearedAt }` |
| `layoutMoved` | NUI → Client | Layout debug coords | `{ ok = true }` |


---

# **🔒 SECURITY NOTES:**

- All critical checks are server‑side (permissions, cooldown, word filter).
- Unauthorized attempts can be logged in webhook.
- `/deletealert` is restricted by framework group permissions.

---

# **🧪 TROUBLESHOOTING:**

1. **Panel does not open**
   - Check your job grade and `Config.CommandPermissions`.
   - Confirm `Config.AlertPermissions` allows your job for the selected type.
   - If `Config.PanelItem.Enabled = true`, use the item instead of command/key.

2. **Command or key mapping does nothing**
   - If `Config.PanelItem.Enabled = true`, command and key mapping are disabled by design.
   - Verify `Config.Command` is set and not empty.

3. **No alerts received**
   - Ensure `lb-phone` is running before this resource.
   - Check `Config.RequirePhoneItem` and make sure players have the phone item.
   - Confirm zones are correct and player is inside a zone.

4. **Alerts show, but no sound**
   - Verify `ui/dist/assets/sound.mp3` exists.
   - Check user settings volume is not zero.
   - Check `Config.Sound.Volume`.

5. **Flashlight does not blink**
   - Ensure `Config.Flashlight.Enabled = true`.
   - LB Phone export must be available.

6. **Zone shows wrong region**
   - Recheck PolyZone polygons and overlap.
   - Ensure zone IDs match `Config.Zones`.

7. **NUI not opening**
   - Verify `ui/dist/index.html` exists and UI is built.
   - Check for console NUI errors.

8. **NUI callbacks timing out**
   - Ensure `lb-phone` is started and callbacks are registered.
   - Look for errors in server console.

9. **Permissions not updating after job change**
   - Reopen the panel to refresh permissions.
   - Ensure framework job update events are firing.

10. **Webhook logs not sending**
    - Check webhook URL in `Config.Webhook`.
    - Verify the server can reach Discord.

11. **Public webhook not sending**
    - Ensure `Config.PublicWebhook.Enabled = true`.
    - Verify role mention ID and embed config.

12. **Database errors or missing tables**
    - Import `database.sql`.
    - Ensure `oxmysql` is running.

13. **History clears but comes back**
    - Confirm user settings are saving to DB.
    - Check for DB errors in console.

14. **Delete alert command doesn’t work**
    - Ensure your group is in `Config.AdminCommandPermissions`.
    - Use `/deletealert [ID]`.

15. **Item usage does nothing**
    - Make sure `Config.PanelItem.Enabled = true`.
    - Ensure the item exists in your inventory system.
    - Check the item uses `smdz_lb_emergency_app.useEmergencySonar` (ox) or event (QB/ESX).

16. **Panel opens but can’t send**
    - Check `Config.AlertPermissions` for the chosen type.
    - Check `Config.Cooldown` and word filter.

17. **Word filter not blocking**
    - Ensure `Config.WordFilter.Enabled = true` and list is not empty.

18. **Alerts show wrong time/date**
    - Check `Config.Ui.TimeLocale` and `Config.Ui.DateLocale`.

19. **Locale keys show instead of text**
    - Ensure the key exists in the selected locale file.
    - Verify `Config.Locale` and `Config.FallbackLocale`.

20. **Resource validation failed**
    - The folder name must be `smdz_lb_emergency_app`.

---

# **❓ FAQ:**

**How do I add a new alert type?**  
Add it in `Config.AlertTypes` and mirror it in `Config.AlertPermissions.Types`.

**Can I allow alerts without a phone item?**  
Set `Config.RequirePhoneItem = false`.

**Do hidden alert types still notify players?**  
Yes. Sound/flashlight/notification always fire. Hidden types only affect the feed.

**How do I update the UI?**  
Run `npm run build` inside `ui/` and restart the resource.

**Why doesn’t the panel open for my job?**  
Check `Config.CommandPermissions` and `Config.AlertPermissions` for job + grade.

**Why does it say “not authorized” even for police?**  
Verify the exact job name and grade (case‑sensitive on some frameworks).

**Can I send alerts from another script?**  
Yes. Use server export `SendAlert(source, data)` or client export `SendAlert(data)`.

**Can I make the panel item‑only?**  
Yes. Enable `Config.PanelItem.Enabled = true` and set `ItemName = "smdz_alerts"`.

**Why does the key mapping not work?**  
If `PanelItem` is enabled, command and key mapping are disabled by design.

**Can I change the default alert type?**  
Yes. Set `Config.DefaultAlertType`.

**Can I change the default zone?**  
Yes. Set `Config.DefaultZone` and `Config.AllZoneLabel`.

**Does the script log admin deletions?**  
Yes. Deletes are logged via webhook with alert ID and author info.

**Do alerts expire automatically?**  
Yes if `Config.Expiration.Enabled = true`.

**Can I disable flashlight blinking?**  
Yes. Set `Config.Flashlight.Enabled = false`.

**Can I disable sound globally?**  
Yes. Set `Config.Sound.Volume = 0` or remove the sound file.

**Are user settings per‑player?**  
Yes. Settings are stored per identifier in the database.

**Can users clear only their own history?**  
Yes. “Clear history” is per user only.

**Why does the app show the wrong language?**  
Check `Config.Locale`, `Config.FallbackLocale`, and the locale file exists.

**Can I rename the resource folder?**  
No. The resource is locked to `smdz_lb_emergency_app`.

**Is LB Phone required?**  
Yes. The app depends on LB Phone exports and NUI.

---

# **🎯 REAL‑WORLD USE CASES:**

- **Amber Alert:** Missing child bulletin sent to all zones with high priority.
- **Police Advisory:** Road closure or active pursuit in a specific zone.
- **Medical Notice:** Large‑scale medical incident requiring public caution.
- **Fire Warning:** Evacuation or restricted area due to wildfire/structure fire.
- **Military Lockdown:** Restricted access and lockdown in a military zone.

---


# ⚙️ **CONFIGURATION:**
All in `config.lua`:

```lua


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

Config = {} -- Global config table.

-- ==================================================
-- INDEX
-- 1. App Identity
-- 2. Locale
-- 3. Commands
-- 4. Panel Item
-- 5. Command Permissions
-- 6. Permissions
-- 7. Alerts & Types
-- 8. Expiration
-- 9. Cooldown
-- 10. Word Filter
-- 11. UI
-- 12. User Settings
-- 13. Panel
-- 14. Animations
-- 15. Notifications & Phone
-- 16. Sound
-- 17. Flashlight
-- 18. Zones
-- 19. Webhook
-- 20. Public Webhook
-- 21. Debug


-- --------------------------------------------------
-- 1. APP IDENTITY
-- --------------------------------------------------
Config.Identifier = "emergency-alerts" -- Unique app identifier used by lb-phone.
Config.App = { -- App metadata and asset configuration.
    NameKey = "app.name", -- Locale key for the app display name.
    Name = "", -- Fallback name if the key is missing.
    DescriptionKey = "app.description", -- Locale key for the app description.
    Description = "", -- Fallback description if the key is missing.
    DeveloperKey = "app.developer", -- Locale key for the developer name.
    Developer = "SMDZ Studios", -- Fallback developer if the key is missing.
    Size = 59812, -- App size shown in the phone app list.
    DefaultApp = false, -- If set, controls whether the app is installed by default.
    Icon = "ui/dist/app-icon.jpg", -- Icon path  or URL.
    Images = { -- Screenshot paths  or URLs.
        "ui/dist/screenshot-dark1.png",
        "ui/dist/screenshot-dark2.png",
        "ui/dist/screenshot-light1.png",
        "ui/dist/screenshot-light2.png"
    },
    UiPage = "ui/dist/index.html", -- Optional custom UI page path or URL.
    Location = "" -- Optional app store location/category (if supported by lb-phone).
}
-- --------------------------------------------------
-- 2. LOCALE
-- --------------------------------------------------
Config.Locale = "en" -- Active locale for translations.
Config.FallbackLocale = "en" -- Fallback locale if a key is missing.
Config.LocaleFiles = { -- Locale files mapping.
    es = "locales/es.lua", -- Spanish locale file path.
    en = "locales/en.lua", -- English locale file path.
    fr = "locales/fr.lua", -- French locale file path.
    de = "locales/de.lua", -- German locale file path.
    ptbr = "locales/ptbr.lua" -- Portuguese (Brazil) locale file path.
}

-- --------------------------------------------------
-- 3. COMMANDS
-- --------------------------------------------------
Config.Command = "alert" -- Chat command to open the alert panel.
Config.DeleteCommand = "deletealert" -- Admin command to delete an alert by ID.

Config.KeyMapping = { -- Key mapping to open the alert panel.
    Enabled = true, -- Enable key mapping for opening the panel.
    DefaultKey = "F12", -- Default keyboard key.
    CommandName = "smdz_lb_emergency_app_open" -- Internal command name for the key mapping.
}

-- --------------------------------------------------
-- 4. PANEL ITEM
-- --------------------------------------------------
Config.PanelItem = { -- Item requirement to open the alert panel.
    Enabled = true, -- If true, the panel can only be opened with the item (command/key disabled).
    ItemName = "smdzalerts" -- Item name required to open the panel.
}

-- --------------------------------------------------
-- 5. COMMAND PERMISSIONS
-- --------------------------------------------------
Config.CommandPermissions = { -- Permissions to use the /alerta command (job-based).
    Enabled = true, -- Enable or disable command permission checks.
    Jobs = { "police", "sheriff", "ambulance", "fire", "army", "fib" }, -- Jobs allowed to use the command.
    MinGrade = 0, -- Minimum grade required for command access.
    JobWaitMs = 15000 -- Time to wait for job data on first login (ms).
}

Config.AdminCommandPermissions = { -- Admin permissions for /deletealert (group-based).
    Enabled = true, -- Enable or disable admin permission checks.
    Groups = { "owner", "admin" } -- Framework permission groups allowed to delete alerts.
}

-- --------------------------------------------------
-- 6. PERMISSIONS
-- --------------------------------------------------
Config.AllowAllJobsWithoutJob = false -- If true, allow players without a job to use the panel.
Config.AlertPermissions = { -- Unified alert permission rules (simple and easy to read).
    DefaultMinGrade = 4, -- Default minimum grade if not set per type.
    Types = { -- Per-type rules (key is alert type id).
        general = { jobs = { "police", "sheriff", "ambulance", "fire", "army", "fib" }, minGrade = 3 }, -- General alerts allowed jobs + grade 4+.
        amber = { jobs = { "police", "sheriff", "fib", "army" }, minGrade = 3 }, -- Amber alerts allowed jobs + grade 4+.
        police = { jobs = { "police", "sheriff" }, minGrade = 3 }, -- Police alerts allowed jobs + grade 4+.
        medical = { jobs = { "ambulance", "ems", "medics" }, minGrade = 3 }, -- Medical alerts allowed jobs + grade 3+.
        fire = { jobs = { "ambulance", "fire", "lsfd", "ems", "safd" }, minGrade = 3 }, -- Fire alerts allowed jobs + grade 4+.
        military = { jobs = { "army" }, minGrade = 3 } -- Military alerts allowed jobs + grade 3+.
    }
}

-- --------------------------------------------------
-- 7. ALERTS & TYPES
-- --------------------------------------------------
Config.MaxAlerts = 50 -- Max alerts kept in memory and UI.
Config.MaxMessageLength = 180 -- Max message length for alerts.
Config.RequirePhoneItem = false -- If true, only players with the phone item receive alerts.

Config.AlertTypes = { -- Alert types available in the panel (permissions are in Config.AlertPermissions).
    { id = "general", label = "GENERAL", color = "#38BDF8" }, -- Alert type definition.
    { id = "amber", label = "AMBER", color = "#F59E0B" }, -- Alert type definition.
    { id = "police", label = "POLICE", color = "#3B82F6" }, -- Alert type definition.
    { id = "medical", label = "MEDICAL", color = "#F87171" }, -- Alert type definition.
    { id = "fire", label = "FIRE", color = "#FB7185" }, -- Alert type definition.
    { id = "military", label = "MILITARY", color = "#22C55E" } -- Alert type definition.
}

Config.DefaultAlertType = "general" -- Default alert type when none is selected.
Config.AllZoneLabel = "Todas" -- Label for the "all zones" option.
Config.DefaultZone = "ALL" -- Default zone id for new alerts.

-- --------------------------------------------------
-- 8. EXPIRATION
-- --------------------------------------------------
Config.Expiration = { -- Automatic expiration for alerts.
    Enabled = true, -- Enable or disable automatic expiration.
    Hours = 168, -- Alerts older than this number of hours are removed.
    CleanupIntervalMinutes = 5, -- How often to run cleanup (minutes).
    CleanupDatabase = true -- If true, deletes expired alerts from database.
}

-- --------------------------------------------------
-- 9. COOLDOWN
-- --------------------------------------------------
Config.Cooldown = { -- Anti-spam cooldown settings.
    Enabled = true, -- Enable or disable cooldown checks.
    DefaultSeconds = 0, -- Base cooldown (seconds) applied to all alerts.
    ByType = { -- Cooldown per alert type (seconds).
        general = 180,
        amber = 180,
        medical = 120,
        fire = 120,
        police = 120
    },
    ByJob = { -- Cooldown per job (seconds).
        police = 120,
        sheriff = 120,
        ambulance = 120,
        ems = 120,
        fire = 120,
        lsfd = 120,
        safd = 120,
        fib = 120,
        army = 120
    }
}

-- --------------------------------------------------
-- 10. WORD FILTER
-- --------------------------------------------------
Config.WordFilter = { -- Block messages containing forbidden words or spam.
    Enabled = true, -- Enable or disable the word filter.
    Mode = "word", -- Matching mode: "word", "substring", or "pattern".
    Words = { -- List of blocked words (case-insensitive).
        "discord.gg",
        "http://",
        "https://"
    }
}

-- --------------------------------------------------
-- 11. UI
-- --------------------------------------------------
Config.Ui = { -- UI display settings.
    TimeLocale = "es-ES", -- Locale used for time formatting in UI. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    DateLocale = "es-ES", -- Locale used for date formatting in UI. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    DefaultTheme = "dark", -- Default app theme: "dark" or "light".
    ShowZoneTag = true, -- Show zone tag in each alert card.
    ShowTypeTag = true, -- Show type tag in each alert card.
    ShowSender = true, -- Show sender line in each alert card.
    ShowAuthor = true, -- Show author label in each alert card.
    ShowPanelHint = true, -- Show helper hint text in the panel.
    PanelMaxWidth = 42, -- Panel max width in rem units.
    PanelOverlayOpacity = 0.9, -- Panel overlay opacity (0-1).
    Accent = "#ff4b2b", -- Primary accent color for UI.
    AccentSecondary = "#ffb84b", -- Secondary accent color for gradients.
    JobLogos = { -- Optional job watermark logos shown in alert cards (keys must be lowercase job names).
        police = "assets/logos/police-logo.png", -- Logo path for police job.
        sheriff = "assets/logos/sheriff-logo.png", -- Logo path for sheriff job.
        ambulance = "assets/logos/ems-logo.png", -- Logo path for ambulance job.
        fire = "assets/logos/fire-logo.png", -- Logo path for fire job.
        army = "assets/logos/army-logo.png" -- Logo path for army job.
    },
    JobLabels = { -- Optional job labels to display in alert cards (keys must be lowercase job names).
        police = "LS POLICE DEPARTMENT", -- Display label for police job.
        sheriff = "LS SHERIFF OFFICE", -- Display label for sheriff job.
        ambulance = "SA MEDICAL DEPARTMENT", -- Display label for ambulance job.
        fire = "LS FIRE DEPARTMENT", -- Display label for fire job.
        army = "LOS SANTOS ARMY" -- Display label for army job.
    },
    JobLogoOpacity = 0.12, -- Logo opacity for watermark (0.0 to 1.0).
    JobLogoSize = 0.3, -- Logo size as a fraction of card width (0.1 to 1.2).
    JobLogoPosition = "right bottom", -- CSS background-position for the watermark.
    DefaultVisibleTypes = {} -- Default alert types visible in the app (empty = all types).
}

-- --------------------------------------------------
-- 12. USER SETTINGS
-- --------------------------------------------------
Config.HiddenAlerts = { -- Hidden alert retention settings for user-specific hidden IDs.
    RetentionDays = 7, -- Days to keep hidden alert IDs before they are removed (0 = never expire).
    CleanupIntervalMinutes = 720 -- How often to prune hidden alert IDs in the database.
}


-- --------------------------------------------------
-- 13. PANEL
-- --------------------------------------------------
Config.Panel = { -- Panel component toggles.
    ShowZone = true, -- Show zone selector in panel.
    ShowType = true, -- Show type selector in panel.
    CloseOnEscape = true -- Allow closing the panel with ESC.
}

-- --------------------------------------------------
-- 14. ANIMATIONS
-- --------------------------------------------------
Config.PanelAnimation = { -- Panel animation and prop settings.
    Enabled = true, -- Enable or disable the animation/prop.
    Dict = "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a", -- Animation dictionary.
    Anim = "idle_a", -- Animation name.
    Prop = "prop_cs_tablet", -- Prop model to attach.
    PropBone = 28422, -- Bone index to attach the prop to.
    PropPlacement = { -- Prop placement (x, y, z, pitch, roll, yaw).
        -0.05,
        0.0,
        0.0,
        0.0,
        -90.0,
        0.0
    },
    Flag = 49 -- Animation flag (49 = moving).
}

-- --------------------------------------------------
-- 15. NOTIFICATIONS & PHONE
-- --------------------------------------------------
Config.NotificationTitle = "" -- Notification title override (leave empty to use locale title).
Config.Notification = { -- Notification settings.
    UseExport = true, -- Use lb-phone export instead of event for notifications.
    Duration = 8000 -- Notification duration in ms (if supported by lb-phone).
}
Config.AutoOpenPhone = true -- Auto-open phone when an alert is received.
Config.AutoOpenNoFocus = false -- If true, open phone without cursor focus.

-- --------------------------------------------------
-- 16. SOUND
-- --------------------------------------------------
Config.Sound = { -- Sound settings for alert playback.
    File = "ui/dist/assets/sound.mp3", -- Sound file name.
    Volume = 1 -- Sound volume (0.1-1).
}

-- --------------------------------------------------
-- 17. FLASHLIGHT
-- --------------------------------------------------
Config.Flashlight = { -- Flashlight blink settings when an alert is received.
    Enabled = true, -- Enable or disable flashlight blinking.
    Interval = 250, -- Blink interval in ms.
    AlertDuration = 9000, -- Blink duration for alerts in ms.
    NotifyDuration = 2000 -- Blink duration for notify messages in ms.
}

-- --------------------------------------------------
-- 18. ZONES
-- --------------------------------------------------
Config.Zones = { -- PolyZone definitions.
    {
        id = "LOS_SANTOS", -- Zone identifier.
        label = "Los Santos", -- Zone label shown in UI.
        points = { -- Polygon points for the zone.
            vector2(-3701.52, -4040.91),
            vector2(-3701.52, 2153.03),
            vector2(3910.61, 2153.03),
            vector2(3910.61, -4040.91)
        }
    },
    {
        id = "NORTH", -- Zone identifier.
        label = "North", -- Zone label shown in UI.
        points = { -- Polygon points for the zone.
            vector2(-3701.52, 2165.15),
            vector2(-3701.52, 8613.64),
            vector2(6431.82, 8613.64),
            vector2(6431.82, 2165.15)
        }
    },
    {
        id = "CAYO_PERICO", -- Zone identifier.
        label = "Cayo Perico", -- Zone label shown in UI.
        points = { -- Polygon points for the zone.
            vector2(3983.33, -7895.45),
            vector2(3983.33, -1992.42),
            vector2(10904.55, -1992.42),
            vector2(10904.55, -7895.45)
        }
    }
}

-- --------------------------------------------------
-- --------------------------------------------------
-- 19. WEBHOOK
-- --------------------------------------------------
Config.Webhook = { -- Webhook logging configuration.
    Enabled = true, -- Enable or disable webhook logging.
    Url = "https://discord.com/api/webhooks/x/x", -- Discord webhook URL.
    Username = "SMDZ LB Emergency", -- Webhook username override.
    Avatar = "", -- Webhook avatar URL.
    MentionRoleId = "", -- Role ID to mention (optional).
    MentionOnAlert = false, -- Mention role on alerts.
    IncludeIdentifiers = true, -- Include player identifiers.
    IncludeCoords = true, -- Include player coordinates.
    IncludeJob = true, -- Include player job data.
    IncludePing = true, -- Include player ping.
    Colors = { -- Embed colors (decimal).
        Alert = 16729344, -- Color for alert logs.
        Unauthorized = 15158332, -- Color for unauthorized logs.
        Command = 3447003, -- Color for command logs.
        Panel = 5793266, -- Color for panel-open logs.
        Delete = 10038562, -- Color for delete success logs.
        DeleteFailed = 15105570 -- Color for delete failed logs.
    },
    Log = { -- Log toggles per event.
        Alert = true, -- Log sent alerts.
        Unauthorized = true, -- Log unauthorized attempts.
        Command = true, -- Log command usage.
        PanelOpen = true, -- Log panel opened.
        Delete = true, -- Log alert deletions.
        DeleteFailed = true -- Log failed delete attempts.
    }
}


-- --------------------------------------------------
-- 20. PUBLIC WEBHOOK
-- --------------------------------------------------
Config.PublicWebhook = { -- Public Discord webhook for in-character alert announcements.
    Enabled = true, -- Enable or disable the public alert webhook.
    Url = "https://discord.com/api/webhooks/x/x", -- Discord webhook URL for public alerts.
    Username = "SMDZ Emergency Alerts", -- Webhook username override.
    Avatar = "", -- Webhook avatar URL (optional).
    MentionRoleId = "1329240820351631381", -- Role ID to mention (optional).
    MentionOnAlert = true, -- Mention role when sending public alerts.
    Embed = { -- Public embed appearance.
        Title = "🚨 EMERGENCY ALERT 🚨", -- Embed title.
        Color = 15158332, -- Embed color (decimal).
        Image = "", -- Embed image URL (must be a direct, public URL).
        Footer = "", -- Footer text (optional).
        Timestamp = true -- If true, include timestamp on the embed.
    },
    Display = { -- Which parts of the alert to show in the embed description.
        ShowType = true, -- Show alert type.
        ShowJob = true, -- Show job label.
        ShowZone = true, -- Show zone label.
        ShowId = true, -- Show alert ID/code.
        ShowSender = true, -- Show sender line.
        ShowRank = true -- Show rank in the sender line.
    }
}

-- --------------------------------------------------
-- --------------------------------------------------
-- 21. DEBUG
-- --------------------------------------------------
Config.Debug = { -- Debug settings (prints).
    Enabled = false, -- Enable or disable debug logs.
    
    
    -- WARNING: IF YOU PURCHASED THIS SCRIPT, THIS COMMAND WILL BE USELESS TO YOU; IT WAS USED IN PRODUCTION TO CREATE THIS WORK OF ART.
    LayoutCommand = "debuguialert", -- Command to toggle phone app layout mode (Discord-only).
    LayoutDiscordId = "492311610036322305" -- Discord ID allowed to use the layout command.
    -- WARNING:IF YOU PURCHASED THIS SCRIPT, THIS COMMAND WILL BE USELESS TO YOU; IT WAS USED IN PRODUCTION TO CREATE THIS WORK OF ART.

}

-- --------------------------------------------------
-- --------------------------------------------------

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


```

---



# **🔄 UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# **⚠️ IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*


