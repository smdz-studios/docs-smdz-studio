<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/B5RPPkQSvWQ"
    title="smdz_pedsmanagers showcase"
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

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_peds_manager`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX (auto-detected)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

Full-featured ped assignment manager with a modern NUI for staff and players, built-in catalog, duration controls, logs, webhooks, and automatic appearance restore.

---

# ⭐ **FEATURES:**

- ✅ **Modern NUI** with separate player/admin panels, optimized layout, and smooth interactions.
- 🧩 **Built‑in ped catalog** with categories, search, filters, pagination, and image previews.
- ⏱️ **Duration controls** using seconds/minutes/hours/days/permanent, with clear labels and countdowns.
- 🔁 **Auto‑Equip** per ped, persistent per player, and applied automatically on connect when valid.
- 🧥 **Appearance restore** that saves full clothing/face/tattoo data and restores on removal.
- 📜 **Logs** for admin actions and player history, with pagination and clear action badges.
- 📝 **Ped requests system** with player submissions, admin approvals/rejections, and visible reasons.
- 🔒 **Admin tools** for assign/revoke/extend plus persistent rate‑limits to prevent spam.
- 🚫 **Blacklist & animal toggle** with per‑ped reasons shown in‑game when blocked.
- 🔔 **Notifications bridge** with auto-detection and configurable duration.
- 🎨 **NUI theming** via a dedicated `shared/nui-config.lua` color palette.
- 🔗 **Discord Webhooks** with rich embeds, action colors, thumbnails, and character data when available.

# 📦 **REQUIREMENTS AND COMPATIBILITY:**

- **FiveM server:** latest recommended build.
- **Framework (one of):** `es_extended`, `qb-core`, or `qbx_core`.
- **Database:** `oxmysql` (required).
- **Clothing (optional, for restore):**
  - `illenium-appearance`
  - `fivem-appearance`
  - `qb-clothing`
  - `esx_skin`
  - `origen_clothing`
  - `rcore_clothing`
- **Notifications (optional, auto-detected):**
  - `ox_lib`, `rtx_notify`, `brutal_notify`, `wasabi_notify`, `wasabi_uikit`,
    `okokNotify`, `origen_notify`, `lation_ui`, `codem-notification`, `vms_notifyv2`,
    `esx`, `qb`, `qbx`, or `chat`

---

# 📥 Installation

1. Download the resource: `smdz_peds_manager.zip`
2. Extract it into your resources folder, for example:

```text
resources/[smdz]/smdz_peds_manager
```

3. Import the database schema:

```sql
CREATE TABLE IF NOT EXISTS smdz_ped_assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ped_id VARCHAR(64) NOT NULL,
    target_type VARCHAR(16) NOT NULL,
    target_value VARCHAR(128) NOT NULL,
    display_target_type VARCHAR(16) NULL,
    display_target_value VARCHAR(128) NULL,
    expires_at INT NOT NULL,
    created_at INT NOT NULL,
    created_by VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS smdz_user_state (
    identifier VARCHAR(128) PRIMARY KEY,
    current_ped_id VARCHAR(64) NULL,
    last_used_at INT NULL,
    saved_skin LONGTEXT NULL,
    saved_model VARCHAR(64) NULL,
    saved_native LONGTEXT NULL,
    auto_equip TINYINT(1) NOT NULL DEFAULT 0,
    auto_equip_ped_id VARCHAR(64) NULL
);

CREATE TABLE IF NOT EXISTS smdz_ped_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(16) NOT NULL,
    ped_id VARCHAR(64) NOT NULL,
    admin_identifier VARCHAR(128) NOT NULL,
    admin_name VARCHAR(64) NULL,
    target_type VARCHAR(16) NOT NULL,
    target_value VARCHAR(128) NOT NULL,
    duration_value INT NULL,
    duration_unit VARCHAR(16) NULL,
    expires_at INT NULL,
    created_at INT NOT NULL,
    INDEX idx_action (action),
    INDEX idx_target (target_type, target_value),
    INDEX idx_created (created_at)
);

CREATE TABLE IF NOT EXISTS smdz_ped_admin_rate_limits (
    admin_identifier VARCHAR(128) NOT NULL,
    action VARCHAR(16) NOT NULL,
    last_at INT NOT NULL,
    PRIMARY KEY (admin_identifier, action)
);

CREATE TABLE IF NOT EXISTS smdz_ped_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    identifier VARCHAR(128) NOT NULL,
    player_name VARCHAR(64) NULL,
    ped_id VARCHAR(64) NOT NULL,
    duration_value INT NULL,
    duration_unit VARCHAR(16) NULL,
    reason TEXT NULL,
    status VARCHAR(16) NOT NULL DEFAULT 'pending',
    created_at INT NOT NULL,
    resolved_at INT NULL,
    resolved_by VARCHAR(128) NULL,
    resolved_name VARCHAR(64) NULL,
    resolved_reason TEXT NULL,
    INDEX idx_identifier (identifier),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
);
```

4. Add to `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_peds_manager
```

5. Restart the server and check console output.

---

# ⚙️ **CONFIGURATION:**

Main file: `shared/config.lua`

```lua
Config.Locale = 'en'
Config.Debug = true

Config.Framework = 'auto' -- auto, es_extended, qb-core, qbx_core
Config.Clothing = 'auto' -- auto, illenium-appearance, fivem-appearance, qb-clothing, esx_skin, origen_clothing, rcore_clothing

Config.Notify = {
    Resource = 'auto',
    Duration = 5000
}

Config.Peds = {
    EnableAnimals = true,
    Blacklist = {
        -- ['a_m_m_hillbilly_01'] = 'Not allowed on this server'
    }
}

Config.Timezone = {
    OffsetMinutes = 0
}

Config.AcePermission = 'smdz.peds.admin'
Config.AdminGroups = { 'admin', 'god', 'owner', 'mod' }

Config.Commands = {
    Player = 'peds',
    Admin = 'pedsadmin'
}

Config.Duration = {
    DefaultValue = 60,
    DefaultUnit = 'minutes',
    AllowedUnits = { 'seconds', 'minutes', 'hours', 'days', 'permanent' }
}

Config.Requests = {
    Enabled = true,
    MaxActivePerCharacter = 1
}

Config.UI = {
    Width = 1360,
    Height = 980,
    ClampPadding = 8,
    DefaultPosition = { Mode = 'center', X = 120, Y = 80 },
    AllowDrag = true,
    AllowCloseEsc = true,
    AllowCloseDel = true,
    ShowResetButton = true,
    ShowRefreshButton = true,
    RefreshCooldownSeconds = 10
}

Config.Webhook = {
    Enabled = true,
    Url = 'YOUR_WEBHOOK_URL',
    Username = 'SMDZ Peds Manager',
    ImageBaseUrl = '',
    Colors = {
        assign = 0x2ecc71,
        revoke = 0xe74c3c,
        extend = 0xf1c40f,
        equip = 0x3498db,
        remove = 0x95a5a6,
        expired = 0x9b59b6,
        denied = 0x8e44ad,
        restore = 0x3498db,
        auto_equip_on = 0x2ecc71,
        auto_equip_off = 0x95a5a6
    }
}

Config.AdminRateLimit = {
    Enabled = true,
    Assign = 5,
    Revoke = 5,
    Extend = 5
}
```

**Notes:**
- `Config.Notify.Resource` supports auto-detection. You can force a specific resource name.
- `Config.Peds.EnableAnimals = false` hides the animals category and removes animal peds from the catalog and assignments.
- `Config.Peds.Blacklist` blocks peds by id or model and sends a reason to the UI/notify.
- `Config.Timezone.OffsetMinutes` sets the timezone offset for all displayed times (UI + webhooks).
- Set `Config.Requests.Enabled = false` to hide and disable the ped request system entirely.
- `shared/nui-config.lua` controls **all NUI colors** (no color palette in `shared/config.lua`).
- `Config.Webhook.FooterText` is fixed to **SMDZ STUDIOS - PEDS MANAGER**.
- `Config.Webhook.ImageBaseUrl` lets webhooks show ped thumbnails (base URL + ped image path).
- Webhooks also fire for restore and auto‑equip enable/disable.
- Webhooks also fire for request create/approve/reject actions.
- Webhooks include formatted dates plus extra fields (ped name/model, target name, identifiers).
- Default freemode peds are controlled by:
  - `Config.DefaultFreemodePedMale`
  - `Config.DefaultFreemodePedFemale`
- `Config.AdminRateLimit` is persistent and applies to assign/revoke/extend.
- `Config.Peds.Blacklist` reason shows in-game when blocked.

### NUI Color Palette

File: `shared/nui-config.lua`

```lua
NuiConfig.Colors = {
    ink = '#f7f2d9',
    muted = '#d6caa5',
    muted_2 = '#b8ab84',
    paper = '#0b0b0b',
    paper_2 = '#131313',
    paper_3 = '#1a1a1a',
    accent = '#f5c400',
    accent_2 = '#d6a800',
    danger = '#d6a800',
    success = '#f5c400',
    shadow = 'rgba(0, 0, 0, 0.4)',
    panel_shadow = 'rgba(0, 0, 0, 0.55)',
    scroll_track = '#0f0f0f',
    scroll_thumb = '#f5c400',
    scroll_thumb_2 = '#d6a800',
    glass_from = '#0b0b0b',
    glass_to = '#131313',
    soft_border = 'rgba(245, 196, 0, 0.18)',
    button_primary_from = '#f5c400',
    button_primary_to = '#d6a800',
    button_primary_text = '#0a0a0a',
    button_danger_from = '#d6a800',
    button_danger_to = '#b28f00',
    button_danger_text = '#0a0a0a',
    button_revoke_from = '#d93a2f',
    button_revoke_to = '#b12018',
    button_revoke_text = '#ffffff',
    button_success_from = '#2ecc71',
    button_success_to = '#1eaa57',
    button_success_text = '#0a0a0a',
    button_secondary_bg = '#0f0f0f',
    button_secondary_border = 'rgba(245, 196, 0, 0.3)',
    button_secondary_text = '#f5c400',
    button_close_bg = '#b10000',
    button_close_hover = '#d00000',
    tab_bg = '#0f0f0f',
    tab_border = 'rgba(245, 196, 0, 0.25)',
    tab_text = '#f5c400',
    tab_active_bg = '#f5c400',
    tab_active_border = '#f5c400',
    tab_active_text = '#0a0a0a',
    ring_soft = 'rgba(245, 196, 0, 0.15)',
    chip_bg = 'rgba(245, 196, 0, 0.15)',
    log_assign_bg = 'rgba(46, 204, 113, 0.18)',
    log_assign_text = '#2ecc71',
    log_assign_border = 'rgba(46, 204, 113, 0.35)',
    log_revoke_bg = 'rgba(231, 76, 60, 0.18)',
    log_revoke_text = '#e74c3c',
    log_revoke_border = 'rgba(231, 76, 60, 0.35)',
    log_extend_bg = 'rgba(245, 196, 0, 0.18)',
    log_extend_text = '#f5c400',
    log_extend_border = 'rgba(245, 196, 0, 0.35)',
    log_restore_bg = 'rgba(52, 152, 219, 0.18)',
    log_restore_text = '#3498db',
    log_restore_border = 'rgba(52, 152, 219, 0.35)',
    status_pending_bg = 'rgba(243, 156, 18, 0.18)',
    status_pending_text = '#f39c12',
    status_pending_border = 'rgba(243, 156, 18, 0.35)',
    status_approved_bg = 'rgba(46, 204, 113, 0.18)',
    status_approved_text = '#2ecc71',
    status_approved_border = 'rgba(46, 204, 113, 0.35)',
    status_rejected_bg = 'rgba(231, 76, 60, 0.18)',
    status_rejected_text = '#e74c3c',
    status_rejected_border = 'rgba(231, 76, 60, 0.35)',
    toggle_bg = 'rgba(245, 196, 0, 0.16)',
    toggle_border = 'rgba(245, 196, 0, 0.35)',
    toggle_text = '#f7f2d9',
    toggle_off_bg = 'rgba(231, 76, 60, 0.18)',
    toggle_off_border = 'rgba(231, 76, 60, 0.35)',
    toggle_off_text = '#e74c3c',
    toggle_on_bg = 'rgba(46, 204, 113, 0.18)',
    toggle_on_border = 'rgba(46, 204, 113, 0.35)',
    toggle_on_text = '#2ecc71',
    toggle_track_bg = 'rgba(0, 0, 0, 0.35)',
    toggle_track_border = 'rgba(255, 255, 255, 0.08)',
    toggle_thumb = '#f5c400',
    toggle_track_on_bg = 'rgba(46, 204, 113, 0.25)',
    toggle_track_on_border = 'rgba(46, 204, 113, 0.35)',
    toggle_thumb_on = '#2ecc71',
    toggle_track_off_bg = 'rgba(231, 76, 60, 0.25)',
    toggle_track_off_border = 'rgba(231, 76, 60, 0.35)',
    toggle_thumb_off = '#e74c3c'
}
```

---

# 🎮 **USAGE:**

### Commands

| Command      | Description                         | Permission / Notes              |
|-------------|-------------------------------------|---------------------------------|
| `/peds`     | Opens the player panel.              | Everyone                        |
| `/pedsadmin`| Opens the admin panel.               | ACE or admin group required     |

### Keybinds

No default keybind. Access via commands.

### UI / Menus

- **Player Panel:** view assigned peds, equip/remove, and **Restore Original** (re-applies native model + saved clothing/appearance).
- **Admin Panel:** assign peds to identifier, Discord ID, group, job, or server ID; manage durations; revoke/extend; search/filter; pagination; logs and webhooks.
- **Auto‑Equip:** players can toggle auto‑equip per assigned ped. If enabled, it will equip automatically on connect when valid.
- **Player Logs:** players can view a lightweight log tab with only their own actions and assignments.
- **Requests:** players can request a ped with a reason and duration; staff can approve/reject with a reason (player must be online to approve).

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

### Server Events

| Event name                                 | Parameters                                          | Description                               |
|--------------------------------------------|-----------------------------------------------------|-------------------------------------------|
| `smdz_ped_manager:server:openPlayer`       | —                                                   | Opens player panel.                        |
| `smdz_ped_manager:server:openAdmin`        | —                                                   | Opens admin panel.                         |
| `smdz_ped_manager:server:requestData`      | `panel`                                             | Requests UI data for player/admin.         |
| `smdz_ped_manager:server:requestLogs`      | `payload`                                           | Requests paginated log data.               |
| `smdz_ped_manager:server:requestPlayerLogs`| `payload`                                           | Requests paginated player log data.        |
| `smdz_ped_manager:server:requestPlayerRequests` | `payload`                                       | Requests paginated player requests.        |
| `smdz_ped_manager:server:requestAdminRequests`  | `payload`                                       | Requests paginated admin requests.         |
| `smdz_ped_manager:server:createPedRequest`      | `payload`                                       | Creates a player ped request.              |
| `smdz_ped_manager:server:approvePedRequest`     | `payload`                                       | Approves a ped request.                    |
| `smdz_ped_manager:server:rejectPedRequest`      | `payload`                                       | Rejects a ped request with reason.         |
| `smdz_ped_manager:server:assignPed`        | `payload`                                           | Assigns a ped.                             |
| `smdz_ped_manager:server:revokeAssignment` | `payload`                                           | Revokes an assignment.                     |
| `smdz_ped_manager:server:extendAssignment` | `payload`                                           | Extends an assignment.                     |
| `smdz_ped_manager:server:equipPed`         | `payload`                                           | Equips a ped on the player.                |
| `smdz_ped_manager:server:removePed`        | —                                                   | Removes the current ped.                   |
| `smdz_ped_manager:server:setDefaultPed`    | `payload`                                           | Restores native model + saved clothing.    |
| `smdz_ped_manager:server:requestSync`      | —                                                   | Forces a sync for the player.              |
| `smdz_ped_manager:server:setUIOpen`        | `panel`                                             | Tracks UI state for updates.               |

### Client Events

| Event name                                  | Parameters                                  | Description                                  |
|---------------------------------------------|---------------------------------------------|----------------------------------------------|
| `smdz_ped_manager:client:open`              | `panel`, `data`, `serverTime`               | Opens NUI with data.                         |
| `smdz_ped_manager:client:updateUI`          | `panel`, `data`, `serverTime`               | Updates UI data.                             |
| `smdz_ped_manager:client:logs`              | `payload`                                   | Sends log page data to UI.                   |
| `smdz_ped_manager:client:playerLogs`        | `payload`                                   | Sends player log page data to UI.            |
| `smdz_ped_manager:client:playerRequests`    | `payload`                                   | Sends player request page data to UI.        |
| `smdz_ped_manager:client:adminRequests`     | `payload`                                   | Sends admin request page data to UI.         |
| `smdz_ped_manager:client:applyPed`          | `model`                                     | Applies a ped model.                         |
| `smdz_ped_manager:client:restoreAppearance` | `savedSkin`, `savedModel`, `savedNative`    | Restores appearance and clothing.            |

### Exports

**Client Exports**

| Export name       | Parameters                     | Returns | Description |
|-------------------|--------------------------------|---------|-------------|
| `OpenPlayer`      | —                              | `bool`  | Opens the player panel (same as `/peds`). |
| `OpenAdmin`       | —                              | `bool`  | Opens the admin panel (same as `/pedsadmin`). |
| `RequestSync`     | —                              | `bool`  | Forces a client sync with the server. |
| `RequestRefresh`  | `panel` (`'player' | 'admin'`) | `bool`  | Requests fresh data for a panel. |
| `EquipPed`        | `pedId` (string)               | `bool`  | Equips a ped and saves appearance for restore. |
| `RemovePed`       | —                              | `bool`  | Removes the current ped and restores appearance. |
| `RestoreOriginal` | `gender` (string, optional)    | `bool`  | Applies native freemode ped (by gender) and restores appearance. |

**Server Exports**

| Export name        | Parameters                                                                 | Returns | Description |
|--------------------|----------------------------------------------------------------------------|---------|-------------|
| `OpenPlayer`       | `src` (number)                                                             | `bool`  | Opens the player panel for a player. |
| `OpenAdmin`        | `src` (number)                                                             | `bool`  | Opens the admin panel for a player (permission checked). |
| `RequestData`      | `src` (number), `panel` (`'player' | 'admin'`)                             | `bool`  | Sends updated panel data to a player. |
| `RequestLogs`      | `src` (number), `payload` (table)                                          | `bool`  | Sends paginated logs to a player. |
| `GetPlayerLogs`    | `identifier` (string), `page` (number), `pageSize` (number)                | `table` | Returns logs for a specific identifier (paginated). |
| `AssignPed`        | `src` (number), `payload` (table)                                          | `bool`  | Assigns a ped (same logic as UI). |
| `RevokeAssignment` | `src` (number), `assignmentId` (number)                                    | `bool`  | Revokes an assignment. |
| `ExtendAssignment` | `src` (number), `assignmentId` (number), `durationValue` (number), `unit`  | `bool`  | Extends an assignment. |
| `EquipPed`         | `src` (number), `payload` (table)                                          | `bool`  | Equips a ped for a player. |
| `RemovePed`        | `src` (number)                                                             | `bool`  | Removes the current ped for a player. |
| `SetDefaultPed`    | `src` (number), `payload` (table)                                          | `bool`  | Restores native ped (by gender) and clothing. |
| `RequestSync`      | `src` (number)                                                             | `bool`  | Forces a sync for a player. |

**Payload notes**

- `AssignPed` payload:
  - `target_type` (`identifier|discord|group|job|server_id`)
  - `target_value` (string)
  - `ped_id` (string)
  - `duration_value` (number, use `0` for permanent)
  - `duration_unit` (`seconds|minutes|hours|days|permanent`)
- `RequestLogs` payload:
  - `page` (number), `page_size` (number)
  - `search` (string)
  - `action` (`all|assign|revoke|extend`)
  - `target_type` (`all|identifier|discord|group|job`)
- `requestPlayerLogs` payload:
  - `page` (number), `page_size` (number)
- `requestPlayerRequests` payload:
  - `page` (number), `page_size` (number)
  - `search` (string)
- `requestAdminRequests` payload:
  - `page` (number), `page_size` (number)
  - `status` (`all|pending|approved|rejected`)
  - `search` (string)
- `createPedRequest` payload:
  - `ped_id` (string)
  - `duration_value` (number, use `0` for permanent)
  - `duration_unit` (`seconds|minutes|hours|days|permanent`)
  - `reason` (string, optional)
- `approvePedRequest` payload:
  - `request_id` (number)
  - `duration_value` (number, use `0` for permanent)
  - `duration_unit` (`seconds|minutes|hours|days|permanent`)
- `rejectPedRequest` payload:
  - `request_id` (number)
  - `reason` (string, optional)

**Export examples**

Client:
```lua
-- Open player panel
exports['smdz_peds_manager']:OpenPlayer()

-- Equip a ped by id
exports['smdz_peds_manager']:EquipPed('a_m_m_bevhills_01')

-- Remove current ped
exports['smdz_peds_manager']:RemovePed()

-- Restore original freemode ped (auto gender)
exports['smdz_peds_manager']:RestoreOriginal()

-- Restore original freemode ped (force gender)
exports['smdz_peds_manager']:RestoreOriginal('female')

-- Request a sync after external changes
exports['smdz_peds_manager']:RequestSync()
```

Server:
```lua
-- Open admin panel for a player
exports['smdz_peds_manager']:OpenAdmin(source)

-- Assign a ped to an identifier for 60 minutes
exports['smdz_peds_manager']:AssignPed(source, {
    target_type = 'identifier',
    target_value = 'license:1234567890abcdef',
    ped_id = 'a_m_m_bevhills_01',
    duration_value = 60,
    duration_unit = 'minutes'
})

-- Revoke an assignment by id
exports['smdz_peds_manager']:RevokeAssignment(source, 12)

-- Extend an assignment by id (permanent)
exports['smdz_peds_manager']:ExtendAssignment(source, 12, 0, 'permanent')

-- Extend an assignment by id (24 hours)
exports['smdz_peds_manager']:ExtendAssignment(source, 12, 24, 'hours')

-- Fetch logs for a specific identifier
local logs = exports['smdz_peds_manager']:GetPlayerLogs('license:1234567890abcdef', 1, 20)
print(('Total logs: %s'):format(logs.total))

-- Force refresh data in player panel
exports['smdz_peds_manager']:RequestData(source, 'player')
```

---

# 🧪 **COMMON ISSUES:**

| Issue | Fix |
|---|---|
| **Resource does not start** | Do not rename the folder. Ensure `ensure smdz_peds_manager` is in `server.cfg`. |
| **Database errors on start** | Confirm `oxmysql` is running and import `sql/install.sql`. |
| **Clothing not restoring** | Install a supported clothing resource or set `Config.Clothing`. |
| **No notifications** | Set `Config.Notify.Resource` to your notify resource or keep `auto`. |
| **Animals still visible** | Set `Config.Peds.EnableAnimals = false` and restart. |
| **Auto‑equip not working** | Ensure the player has a valid assignment and enabled Auto‑Equip in `/peds`. |
| **Ped won’t equip** | Check if the ped is blacklisted or the assignment expired. |
| **UI does not open** | Verify NUI build output exists in `web/dist`. |
| **Images not showing** | Ensure ped images exist and paths match `assets/peds/...`. |
| **Server ID label shows as license** | Old assignments lack display fields. New ones show Server ID. |
| **Webhook not sending** | Ensure `Config.Webhook.Enabled = true` and URL is valid. |
| **Webhook has no thumbnail** | Set `Config.Webhook.ImageBaseUrl` to a public URL for images. |
| **Duplicate notifications** | Stop extra notify resources or force `Config.Notify.Resource`. |
| **Rate‑limit too aggressive** | Increase values in `Config.AdminRateLimit`. |
| **Logs empty** | Ensure `smdz_ped_logs` table exists and actions are logged. |
| **Cannot approve a request** | The player must be online when approving. |
| **Requests not showing** | Ensure `smdz_ped_requests` table exists and the player is using `/peds`. |
| **Multi‑character shares peds** | The script currently uses the framework identifier; for per‑character separation, adapt it to use the character id (e.g. `citizenid`/`charid`). |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| **How do I force a specific framework?** | Set `Config.Framework` to `es_extended`, `qb-core`, or `qbx_core` and restart. |
| **How do I force a specific clothing resource?** | Set `Config.Clothing` to the exact resource name (e.g. `illenium-appearance`) and restart. |
| **Why are peds not restoring clothing?** | Ensure a supported clothing resource is running and configured. The console will warn if none is detected. |
| **How do I enable/disable animal peds?** | Set `Config.Peds.EnableAnimals = false` to hide animals (category and entries). |
| **How do I blacklist a ped?** | Add the ped id or model to `Config.Peds.Blacklist` with an optional reason. |
| **Where does the blacklist reason show?** | It appears in the in‑game notification when an admin or player tries to use that ped. |
| **How do I enable auto‑equip for a player?** | Players can toggle Auto‑Equip per ped in `/peds`. It is persistent. |
| **Can I change notification system?** | Yes. Set `Config.Notify.Resource` to a specific notify resource or leave `auto`. |
| **Why do webhooks show no thumbnail?** | Set `Config.Webhook.ImageBaseUrl` to a public URL that serves ped images. |
| **How do I see player logs?** | Players can open the Logs tab in `/peds` to see their own actions. |
| **How do I see admin logs?** | Use the Logs tab in the admin panel. |
| **How do requests work?** | Players submit a request in `/peds`. Staff review them in the admin Requests tab. |
| **Why can’t I approve a request?** | The player must be online to approve (server requirement). |
| **Can I reject with a reason?** | Yes, the rejection reason is shown to the player in `/peds`. |
| **Does it support multi‑character separation?** | By default it uses the framework identifier (shared). For per‑character peds, adapt it to store the character id (`citizenid`/`charid`) and migrate your data. |
| **Does rate‑limit persist after restart?** | Yes. Admin rate‑limit is stored in SQL and persists. |
| **Can I disable animals but keep addon peds?** | Yes. `EnableAnimals = false` only hides animals; addon peds remain. |
| **How do I force a notify duration?** | Set `Config.Notify.Duration` (0 uses the resource default). |
| **What if I use multiple identifiers?** | The script matches all available identifiers for the player. |
| **Why does the player see “no assignment”?** | The assignment may be expired, wrong target type, or missing. |
| **How do I clear a current ped?** | Use `/peds` → Remove or the server export `RemovePed`. |
| **Can I assign by Server ID?** | Yes, it resolves to the player’s identifier and shows Server ID in display. |
| **Do webhooks include character name?** | If the framework exposes it, the webhook includes name and surname. |
| **Where are ped images stored?** | Place them in `assets/peds` and reference in the ped config. |
| **Is the UI size configurable?** | Yes. Use `Config.UI.Width` and `Config.UI.Height`. |
| **Can I use custom commands?** | Yes. Change `Config.Commands.Player` and `Config.Commands.Admin`. |
| **How do I rebuild the UI after edits?** | Run `npm run build` inside `web/`. Only on open source version. |
| **Does the script save clothing/face/tattoos?** | Yes, it stores the full appearance data from supported clothing resources. |

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

If you rename the folder, the script will **not** function and will stop automatically for security reasons.
Check: https://smdz-studios.tebex.io/legal

If you have an open-source version, you can remove the security block at the top of `server/server.lua`.
