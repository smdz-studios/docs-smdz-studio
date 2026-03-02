<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/swNMk8jDDzM"
    title="smdz_emergency_gps showcase"
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

- 📌 **Name:** `smdz_emergency_gps`
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">Stable</span>

SMDZ Emergency GPS adds an in‑game NUI panel to create and manage **vehicle references** for emergency roles. Players pick an icon, label, color, and size, then broadcast that reference to teammates sharing the same job. Favorites, themes, view distance, menu animation, and default labels are stored per player.

---

# ✨ **FEATURES:**

- 🧭 Custom vehicle references with label, icon, color, and size.
- ⭐ Favorites with quick right‑click toggle and SQL persistence.
- 🎨 Color favorites with right‑click toggle and SQL persistence.
- ✏️ Favorites panel supports label editing (same limits as main).
- 🎨 28+ UI themes per player + view distance slider.
- 🧩 ESX / QBCore / QBX / standalone support (auto‑detect or forced).
- 💾 Per‑player settings saved: favorites, favorite colors, theme, view distance, menu animation, default label, last label/icon/color/scale.
- 🧠 Debug fake users for stress testing (NUI only).
- 🧩 Standalone mode with ACE permissions (no framework required).
- 🧑‍🤝‍🧑 Multi‑job support (ESX job2 / QB gang optional).
- 🛡️ Rate limit for exports/events to avoid spam.
- 🖼️ GIF/PNG previews for icons in the NUI.
- 🔔 Optional Discord webhooks with player identifiers.
- 🧹 Auto cleanup for stale refs.
- 🚗 Driver + copilot support with vehicle rules.
- ⚡ Performance‑aware updates and Ultra‑Idle mode.
- 🧑‍💼 Management panel with job‑based permissions, search, edit, and remove‑all.

---

# 🧰 **REQUIREMENTS:**

- FXServer artifact with NUI support.
- One database resource (optional but recommended):
  - `oxmysql`, `mysql-async`, or `ghmattimysql`.

---

# 📦 **INSTALLATION:**

1. Drop the resource folder into your server resources.
2. Ensure it in `server.cfg`:
   ```cfg
   ensure smdz_emergency_gps
   ```
3. Import the SQL file:
   - `sql/database.sql`
4. Configure jobs, command, and UI options in `config.lua`.

---

# 🚀 **QUICK START:**

1. Add your jobs to `Config.AllowedJobs`.
2. Start the resource and open the UI with `/ref` or `F9`.
3. Choose an icon, color, size, and label, then press **Create**.
4. Use **Favorites** for fast reuse and **Config** for themes + distance + default label.

---

# 🧱 **ARCHITECTURE & DATA FLOW:**

**Client side:**
- NUI sends actions to `client/cl_client.lua` (create, delete, settings, favorites, manage...).
- Client validates job/vehicle rules and forwards state to server events.
- Client receives `updateClient`/`remove` and renders blips.

**Server side:**
- Server owns the authoritative reference list (`refsBySource`).
- Updates are broadcast **per job** using the framework cache (or ACE in standalone).
- Management panel uses server‑side cache + push updates to subscribers.

**Data flow:**
1) Player creates a ref → `smdz_emergency_gps:start` (server) → broadcast to job.
2) Client sends periodic updates → `smdz_emergency_gps:update` → broadcast to job.
3) Management edits/deletes → server validates permissions → broadcast to job.
4) Per‑player settings saved to SQL (`favorites`, `favorite_colors`, `theme`, `view_distance`, `menu_anim`, `default_label`, `last_label`, `last_sprite`, `last_color`, `last_scale`)

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

Config = {}

--====================================================
-- General
--====================================================
Config.Locale = "en" -- Default language used by the resource
Config.DebugMode = false -- Enable debug prints in console
Config.Framework = 'auto' -- Force framework detection or keep auto

--====================================================
-- Commands & Keybinds
--====================================================
Config.Command = "ref" -- Chat command to open/close the panel
Config.OpenKey = "F9" -- Keybind to open/close the panel

--====================================================
-- Jobs
--====================================================
Config.AllowedJobs = { -- Jobs allowed to create/see refs
  police = true,
  sheriff = true,
  state = true,
  fib = true,
}


--====================================================
-- Management Panel
--====================================================
Config.Management = {
  Enabled = true, -- Enable management panel for high-rank users
  ErrorMessageMs = 5000, -- How long to show permission errors (ms)
  RefreshIntervalMs = 10000, -- Management list refresh interval (ms)
  DebugFakeRefs = 0, -- Fake NUI-only refs for stress testing (DebugMode only)
  Jobs = { -- Minimum grade per job required to access management
    police = 2,
    sheriff = 2,
    state = 2,
    fib = 2
  },
  Permissions = { -- Minimum grade per action (per job override supported)
    view = 2,
    update = 3,
    delete = 3,
    deleteAll = 4
  },
  JobLabels = { -- Optional display labels for jobs in management panel
    police = 'LSPD',
    sheriff = 'LSSD',
    state = 'STATE',
    fib = 'FIB'
  }
}

--====================================================
-- Multi-Job Support
--====================================================
Config.MultiJob = {
  Enabled = true, -- Allow secondary jobs (if your framework supports it)
  IncludeSecondary = true, -- ESX job2 support
  IncludeGang = false -- QB/QBX gang as a secondary job
}

--====================================================
-- Standalone (ACE Permissions)
--====================================================
Config.Standalone = {
  Enabled = true, -- Enable ACE job permissions when no framework is running
  AceJobPrefix = 'smdz_emergency_gps.job.', -- Example: smdz_emergency_gps.job.police
  AceJobGradePrefix = 'smdz_emergency_gps.job.%s.grade.', -- Example: smdz_emergency_gps.job.police.grade.4
  AceGradePrefix = 'smdz_emergency_gps.grade.', -- Example: smdz_emergency_gps.grade.4 (global fallback)
  MaxGrade = 10 -- Max grade to scan for ACE permissions
}

--====================================================
-- Rate Limit (Anti-Spam)
--====================================================
Config.RateLimit = {
  Enabled = true, -- Enable rate limiting for events/exports
  DefaultMs = 250, -- Default minimum interval per action (ms)
  Events = { -- Server-side action limits
    requestSettings = 300,
    saveSettings = 500,
    start = 500,
    stop = 500,
    manageRequest = 400,
    manageSubscribe = 400,
    manageUnsubscribe = 400,
    manageUpdate = 500,
    manageDelete = 500,
    manageDeleteAll = 1200
  },
  ClientExports = { -- Client-side export limits
    OpenUI = 400,
    CloseUI = 300,
    RefreshManagement = 600,
    StartReference = 500,
    StopReference = 500,
    UpdateReference = 0
  }
}

--====================================================
-- Vehicle Rules
--====================================================
Config.RequireVehicle = true -- Require player to be in a vehicle to create/update
Config.AllowCopilot = true -- Allow front passenger to use the panel
Config.AllowedVehicleModels = { -- Optional whitelist of vehicle models
  -- [`police`] = true,
  -- [`police2`] = true,
  -- [`sheriff`] = true,
}

--====================================================
-- UI Defaults
--====================================================
Config.EnableFavorites = true -- Enable Favorites tab and persistence
Config.EnableThemes = true -- Enable Theme selector tab
Config.DefaultMenuAnimation = true -- Default menu animation setting
Config.DefaultLabel = "" -- Fallback label when per-player default is empty
Config.MaxLabel = 10 -- Max characters allowed for labels
Config.JobCacheMs = 5000 -- Client job cache refresh interval (ms)
Config.NUIBlipImagesPath = "icons" -- NUI icon path inside html/icons
Config.NUIBlipImageExtensions = { "gif", "png" } -- Allowed NUI icon extensions

-- Optional custom icon list (overrides Config.Blips for UI only)
Config.IconOptions = {
  -- { name = "radar_police", sprite = 41, ext = "png" }
}

--====================================================
-- View Distance (meters)
--====================================================
Config.DefaultViewDistance = 1500 -- Default max view distance (meters)
Config.MinViewDistance = 1500 -- Minimum allowed view distance
Config.MaxViewDistance = 10000 -- Maximum allowed view distance

--====================================================
-- Performance
--====================================================
Config.Performance = {
  UpdateInterval = 1200, -- Update tick while active (ms)
  MinUpdateDistance = 4.5, -- Min movement before sending update
  MinUpdateHeading = 12.0, -- Min heading change before update
  MaxIdleUpdateMs = 4500, -- Max idle wait before update
  BlipScale = 0.95, -- Default blip scale multiplier
  UltraIdle = true, -- Reduce background work when idle
  DebugThresholdMs = 0, -- Perf debug threshold in ms
  JobPollIntervalMs = 60000, -- Slow job poll interval (ms)
  OpenAttemptCooldownMs = 400, -- Min ms between open attempts (spam protection)
  DeniedOpenCooldownMs = 1000 -- Extra cooldown when job/vehicle is not allowed
}


--====================================================
-- Database (persist settings)
--====================================================
Config.Database = {
  Resource = "auto", -- Database resource (auto or explicit)
  Table = "smdz_emergency_gps_settings", -- Table name for player settings
  AutoCreate = true -- Auto-create table on start
}

--====================================================
-- Discord Webhook
--====================================================
Config.Webhook = {
  Enabled = true, -- Enable webhook logging
  URL = "https://discord.com/api/webhooks/xxxx/xxxxxx",
  Username = "SMDZ Emergency GPS", -- Webhook username
  Avatar = "", -- Webhook avatar URL
  Content = "", -- Optional webhook content
  FooterIcon = "", -- Footer icon URL
  Color = 3447003 -- Embed color (decimal)
}

--====================================================
-- Auto Cleanup (blips without driver)
--====================================================
Config.AutoCleanupEnabled = true -- Enable auto-cleanup for stale refs
Config.AutoCleanupIntervalMs = 1800000 -- Cleanup interval (ms)
Config.AutoCleanupMaxAgeMs = 1800000 -- Max age before deletion (ms)

--====================================================
-- Blips for selector (name = filename without extension)
--====================================================
Config.Blips = {
  { name = "radar_acsr_wp1",              sprite = 612, label = "ACSR WP1" },
  { name = "radar_bus",                   sprite = 513, label = "Bus" },
  { name = "radar_capture_1",             sprite = 502, label = "Capture 1" },
  { name = "radar_capture_2",             sprite = 503, label = "Capture 2" },
  { name = "radar_capture_3",             sprite = 504, label = "Capture 3" },
  { name = "radar_capture_4",             sprite = 505, label = "Capture 4" },
  { name = "radar_capture_5",             sprite = 506, label = "Capture 5" },
  { name = "radar_capture_6",             sprite = 507, label = "Capture 6" },
  { name = "radar_capture_7",             sprite = 508, label = "Capture 7" },
  { name = "radar_capture_8",             sprite = 509, label = "Capture 8" },
  { name = "radar_capture_9",             sprite = 510, label = "Capture 9" },
  { name = "radar_capture_10",            sprite = 511, label = "Capture 10" },
  { name = "radar_centre_red",            sprite = 185, label = "Centro (Rojo)" },
  { name = "radar_comedy_club",           sprite = 102, label = "Comedy Club" },
  { name = "radar_drone_controls",        sprite = 741, label = "Drone Controls" },
  { name = "radar_ex_vech_2",             sprite = 529, label = "Export Veh 2" },
  { name = "radar_ex_vech_3",             sprite = 530, label = "Export Veh 3" },
  { name = "radar_gang_bike",             sprite = 348, label = "Gang Bike" },
  { name = "radar_gang_vehicle",          sprite = 225, label = "Gang Vehicle" },
  { name = "radar_getaway_car",           sprite = 326, label = "Getaway Car" },
  { name = "radar_handcuffs_closed_vagos",sprite = 189, label = "Handcuffs (Vagos)" },
  { name = "radar_helicopter",            sprite = 64,  label = "Helicopter" },
  { name = "radar_nhp_base",              sprite = 590, label = "NHP Base" },
  { name = "radar_nhp_wp6",               sprite = 600, label = "NHP WP6" },
  { name = "radar_objective_blue",        sprite = 143, label = "Objective (Blue)" },
  { name = "radar_player_boat",           sprite = 427, label = "Player Boat" },
  { name = "radar_player_heli",           sprite = 422, label = "Player Heli" },
  { name = "radar_player_plane",          sprite = 423, label = "Player Plane" },
  { name = "radar_police",                sprite = 41,  label = "Police" },
  { name = "radar_police_chase",          sprite = 42,  label = "Police Chase" },
  { name = "radar_police_heli",           sprite = 43,  label = "Police Heli" },
  { name = "radar_police_heli_spin",      sprite = 15,  label = "Police Heli (Spin)" },
  { name = "radar_police_station",        sprite = 60,  label = "Police Station" },
  { name = "radar_quad",                  sprite = 512, label = "Quad" },
  { name = "radar_rappel_point",          sprite = 771, label = "Rappel Point" },
  { name = "radar_security_van",          sprite = 67,  label = "Security Van" },
  { name = "radar_sports_car",            sprite = 523, label = "Sports Car" },
  { name = "radar_target_a",              sprite = 535, label = "Target A" },
  { name = "radar_target_b",              sprite = 536, label = "Target B" },
  { name = "radar_target_c",              sprite = 537, label = "Target C" },
  { name = "radar_target_d",              sprite = 538, label = "Target D" },
  { name = "radar_target_e",              sprite = 539, label = "Target E" },
  { name = "radar_target_f",              sprite = 540, label = "Target F" },
  { name = "radar_target_g",              sprite = 541, label = "Target G" },
  { name = "radar_target_h",              sprite = 542, label = "Target H" },
  { name = "radar_ugc_mission",           sprite = 304, label = "UGC Mission" },
}

```

---

# 🧩 **STANDALONE (ACE):**

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `Config.Standalone.Enabled` | boolean | `true` | Enable ACE permissions when no framework is running. |
| `Config.Standalone.AceJobPrefix` | string | `"smdz_emergency_gps.job."` | ACE prefix for job membership. |
| `Config.Standalone.AceJobGradePrefix` | string | `"smdz_emergency_gps.job.%s.grade."` | ACE prefix for per‑job grade. |
| `Config.Standalone.AceGradePrefix` | string | `"smdz_emergency_gps.grade."` | Global grade ACE prefix (fallback). |
| `Config.Standalone.MaxGrade` | number | `10` | Max grade to scan for ACE permissions. |

Example (server.cfg):
```cfg
add_ace group.admin smdz_emergency_gps.job.police allow
add_ace group.admin smdz_emergency_gps.job.police.grade.4 allow

# Optional global grade fallback
add_ace group.admin smdz_emergency_gps.grade.3 allow
```

Note: If `Config.Standalone.Enabled = true` and a framework is detected, the script will **prioritize the framework** and print a warning (same style as webhook warnings).

---

# 🧩 **CUSTOM FRAMEWORK GUIDE:**

Use this when your framework isn’t ESX/QB/QBX. The adapter lives in `bridge/framework.lua` (`CustomAdapter`).

**Required (recommended) functions:**
- `CustomAdapter.GetJobs(src) -> {string, ...}`
  - Return **all** jobs the player has.
  - If your system is single‑job, return `{ jobName }`.

**Optional functions:**
- `CustomAdapter.GetJob(src) -> string | nil` (single job shortcut)
- `CustomAdapter.GetJobGrade(src, job) -> number`
- `CustomAdapter.GetJobGradeLabel(src, job) -> string | nil`
- `CustomAdapter.GetIdentity(src) -> firstname, lastname`
- `CustomAdapter.Init()`

**Minimal example:**
```lua
-- bridge/framework.lua
CustomAdapter.GetJobs = function(src)
  return { 'police' }
end

CustomAdapter.GetJobGrade = function(src, job)
  return 4
end

CustomAdapter.GetJobGradeLabel = function(src, job)
  return 'Sergeant'
end

CustomAdapter.GetIdentity = function(src)
  return 'John', 'Doe'
end
```

**Technical notes:**
- Return **strings** for job names; they must match `Config.AllowedJobs`.
- Grades should be numeric (0..n). They drive management permissions.
- If a function errors, the adapter fallback returns safe defaults.

---

# 🗃️ **DATABASE (SQL):**

Table: `smdz_emergency_gps_settings`

| Column | Type | Notes |
| --- | --- | --- |
| `identifier` | TEXT | Player identifier (fivemlicense). Primary key prefix index. |
| `favorites` | LONGTEXT | JSON array of icon names. |
| `favorite_colors` | LONGTEXT | JSON array of color ids. |
| `last_label` | TEXT | Last used label (per player). |
| `last_sprite` | INT | Last used sprite (per player). |
| `last_color` | INT | Last used color (per player). |
| `last_scale` | FLOAT | Last used scale (per player). |
| `theme` | TEXT | Theme preset key. |
| `view_distance` | INT | Max distance (meters). |
| `default_label` | TEXT | Player default label. |
| `menu_anim` | TINYINT(1) | 1/0 for menu animation. |
| `updated_at` | TIMESTAMP | Auto updated on change. |

```sql
CREATE TABLE IF NOT EXISTS `smdz_emergency_gps_settings` (
  `identifier` TEXT NOT NULL,
  `favorites` LONGTEXT,
  `favorite_colors` LONGTEXT,
  `last_label` TEXT,
  `last_sprite` INT,
  `last_color` INT,
  `last_scale` FLOAT,
  `theme` TEXT,
  `view_distance` INT,
  `default_label` TEXT,
  `menu_anim` TINYINT(1),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`identifier`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 🎮 **UI GUIDE:**

- **Main tab:** set label, icon, size, color, then press **Create**.
- **Label input:** max characters enforced; red warning appears at limit.
- **Favorites tab:** reuse favorites, edit label, and still change size/color.
- **Config tab:** select theme, view distance, menu animation, default label, and quick reset for last selection.
- **Management tab:** search players, expand rows, edit label/color/scale, or remove refs.
- **Delete:** removes your current blip (only via menu button or auto cleanup).
- **Right‑click:** toggle an icon or color as favorite.
- **Drag panel:** move the NUI around the screen (stays in bounds).
- **Vehicle exit:** if `Config.RequireVehicle = true`, NUI closes when you leave the vehicle.

---

# ⭐ **FAVORITES & PERSISTENCE:**

Favorites, theme, view distance, default label, and menu animation are saved per player in SQL.

Stored fields:
- `favorites` (JSON array)
- `favorite_colors` (JSON array of color ids)
- `theme` (string)
- `view_distance` (number)
- `default_label` (string)
- `menu_anim` (boolean)
- `last_label` (string)
- `last_sprite` (number)
- `last_color` (number)
- `last_scale` (number)

Notes:
- Favorites are unique per player.
- Settings persist across restarts.
- If no DB is configured, settings are not saved.

---

# 🧑‍💼 **MANAGEMENT PANEL:**

- **Access:** only players meeting job + grade requirements.
- **Scope:** managers only see and manage refs of their own job.
- **Search:** filter by player name.
- **Expand:** click arrow to edit label, color, and size.
- **Remove all:** confirmation modal before deleting all refs for the job.
- **Live refresh:** list updates every `Config.Management.RefreshIntervalMs` (server‑side cache).
- **Street + vehicle info:** street name, vehicle label, and plate.

---

# 🎨 **THEMES:**

Theme presets included:
`classic`, `ember`, `mint`, `cobalt`, `slate`, `forest`, `dune`, `neon`, `ice`, `ocean`, `amber`, `graphite`, `sunrise`, `royal`, `violet`, `sage`, `ruby`, `sand`, `steel`, `lava`, `midnight`, `rose`, `citrus`, `obsidian`, `lagoon`, `saffron`, `storm`, `plasma`.

Each player can set their own theme in the **Config** tab.

---

# 🖼 **ICONS:**

- Preview icons live in `html/icons/`.
- Supported extensions are defined in `Config.NUIBlipImageExtensions`.
- Default list for selection is `Config.Blips` (name = filename without extension).
- Optional override list for UI only: `Config.IconOptions`.

Example:
```lua
Config.IconOptions = {
  { name = "radar_police", sprite = 41, ext = "gif" },
  { name = "radar_helicopter", sprite = 64, ext = "png" }
}
```

---

# 🌍 **LOCALIZATION:**

Locale files live in `locales/`. (It's too easy to add a new language, adapt it.)
- `locales/en.lua`
- `locales/es.lua`
- `locales/fr.lua`
- `locales/pt.lua`
- `locales/de.lua`

Set your default language:
```lua
Config.Locale = "en"
```

---

# 🔌 **API (EXPORTS & EVENTS):**

Exports are defined in `client/cl_exports.lua`.
The API is **client‑side only**. Server‑side scripts must trigger a client event or use a client export from a player context.

---

# 📌 **CLIENT EXPORTS:**

**StartReference (client):**
```lua
exports['smdz_emergency_gps']:StartReference({
  label = 'Unit 12',
  sprite = 41,
  color = 3,
  scale = 0.7
})
```

**StopReference (client):**
```lua
exports['smdz_emergency_gps']:StopReference()
```

**UpdateReference (client):**
```lua
-- Update by entity (vehicle ped is in)
exports['smdz_emergency_gps']:UpdateReference({ entity = GetVehiclePedIsIn(PlayerPedId(), false) })

-- Or update by coords
exports['smdz_emergency_gps']:UpdateReference({ x = 0.0, y = 0.0, z = 0.0, heading = 90.0 })
```

---

**OpenUI (client):**
```lua
exports['smdz_emergency_gps']:OpenUI()
```

**CloseUI (client):**
```lua
exports['smdz_emergency_gps']:CloseUI()
```

**RefreshManagement (client):**
```lua
exports['smdz_emergency_gps']:RefreshManagement()
```


# 📌 **EXPORT EVENTS (WRAPPERS):**

If you prefer events instead of exports (client‑side only):

```lua
TriggerEvent('smdz_gps:exportStart', { label = 'Unit 12', sprite = 41, color = 3, scale = 0.7 })
TriggerEvent('smdz_gps:exportUpdate', { entity = GetVehiclePedIsIn(PlayerPedId(), false) })
TriggerEvent('smdz_gps:exportStop')
TriggerEvent('smdz_gps:exportOpenUI')
TriggerEvent('smdz_gps:exportCloseUI')
TriggerEvent('smdz_gps:exportRefreshManagement')
```

---

# 📣 **EVENTS:**

| Side | Event | Purpose |
| --- | --- | --- |
| Client | `smdz_emergency_gps:externalStart` | Start a reference from another client script. |
| Client | `smdz_emergency_gps:externalUpdate` | Update a reference by entity or coords. |
| Client | `smdz_emergency_gps:externalStop` | Stop the active reference. |
| Client | `smdz_emergency_gps:pollJob` | Manual job polling trigger (client). |
| Client | `smdz_emergency_gps:settings` | Receive saved settings from server. |
| Client | `smdz_emergency_gps:updateClient` | Receive/refresh a blip from server. |
| Client | `smdz_emergency_gps:remove` | Remove a blip from server. |
| Client | `smdz_emergency_gps:updateLabel` | Update only the label for an existing blip. |
| Client | `smdz_emergency_gps:managePermission` | Management panel access result. |
| Client | `smdz_emergency_gps:manageData` | Management list data payload. |
| Client | `smdz_emergency_gps:manageDenied` | Permission denied feedback to NUI. |
| Server | `smdz_emergency_gps:requestSettings` | Request player settings from DB. |
| Server | `smdz_emergency_gps:saveSettings` | Save player settings to DB. |
| Server | `smdz_emergency_gps:setJob` | Sync job to server cache. |
| Server | `smdz_emergency_gps:start` | Create a reference server‑side. |
| Server | `smdz_emergency_gps:update` | Update reference position server‑side. |
| Server | `smdz_emergency_gps:stop` | Remove reference server‑side. |
| Server | `smdz_emergency_gps:manageCheck` | Check management permissions. |
| Server | `smdz_emergency_gps:manageSubscribe` | Subscribe manager for live updates. |
| Server | `smdz_emergency_gps:manageUnsubscribe` | Unsubscribe manager updates. |
| Server | `smdz_emergency_gps:manageRequest` | Request management list. |
| Server | `smdz_emergency_gps:manageUpdate` | Update ref (label/color/scale). |
| Server | `smdz_emergency_gps:manageDelete` | Delete a single ref. |
| Server | `smdz_emergency_gps:manageDeleteAll` | Delete all refs for a job. |

---

# 📌 **EXTERNAL EVENTS:**


```lua
TriggerEvent('smdz_emergency_gps:externalStart', { label = 'Unit 12', sprite = 41, color = 3, scale = 0.7 })
TriggerEvent('smdz_emergency_gps:externalUpdate', { entity = GetVehiclePedIsIn(PlayerPedId(), false) })
TriggerEvent('smdz_emergency_gps:externalStop')
```

**Manual job poll (client event):**
```lua
TriggerEvent('smdz_emergency_gps:pollJob')
```

**Server‑side example (trigger on a player):**
```lua
RegisterCommand('gps_on', function(source)
  TriggerClientEvent('smdz_emergency_gps:externalStart', source, {
    label = 'Server GPS',
    sprite = 41,
    color = 3,
    scale = 0.7
  })
end)
```

---

# 🚀 **PERFORMANCE TIPS:**

- Increase `Config.Performance.UpdateInterval` for very high player counts.
- Tune `Config.Performance.MinUpdateDistance` and `MinUpdateHeading` to reduce updates.
- Keep `Config.Blips` focused for faster NUI load.
- Enable `Config.Performance.UltraIdle` to reduce background polling when idle.
- Keep `Config.Management.RefreshIntervalMs` at 10s+ if you want minimal overhead.

---

# 🧪 **TROUBLESHOOTING:**

| Symptom | Cause | Fix / Check |
| --- | --- | --- |
| UI doesn’t open | Job not allowed or command/key mismatch | Verify `Config.AllowedJobs`, `Config.Command`, `Config.OpenKey`. |
| Keybind doesn’t work | Another resource overrides the key | Change `Config.OpenKey` or remove conflicting keybind. |
| No icons in NUI | Missing files or wrong extension list | Check `html/icons/` and `Config.NUIBlipImageExtensions`. |
| GIF previews not showing | Extension not allowed or filename mismatch | Ensure file name matches `Config.Blips` and `gif` is in extensions. |
| Settings not saving | DB resource not running or table missing | Start DB resource; import `sql/database.sql`. |
| Favorites not saving | JSON column missing / DB error | Confirm `favorites` and `favorite_colors` columns exist (LONGTEXT). |
| Default label not applied | Saved value empty or over limit | Set in Config tab and keep under `Config.MaxLabel`. |
| Label error not showing | Missing locale key | Ensure `ui_label_error` exists in all locales. |
| Blips disappear | View distance too low / job mismatch | Increase view distance; confirm same job. |
| Blips update slowly | Update interval too high | Lower `Config.Performance.UpdateInterval`. |
| High resmon spikes | Over‑frequent updates | Increase `UpdateInterval`, `MinUpdateDistance`, enable `UltraIdle`. |
| Framework not detected | Auto‑detect failed | Set `Config.Framework` explicitly. |
| Standalone warning spam | Standalone enabled + framework running | Set `Config.Framework` or disable Standalone. |
| Webhook warning | Enabled but no URL | Set `Config.Webhook.URL` or disable webhooks. |
| Management list not updating | Refresh interval too long | Reduce `Config.Management.RefreshIntervalMs`. |
| Management actions denied | Grade too low | Check `Config.Management.Jobs` and per‑action permissions. |
| Menu animation not persisted | Column missing | Ensure `menu_anim` column exists in SQL. |
| FiveM/XBL ID missing | Not exposed by server | It will show `-` if unavailable. |

---

# ❓ **FAQ:**

| Question | Answer |
| --- | --- |
| Are exports client or server? | Exports are **client‑side only**. Use from client scripts or trigger client events from server. |
| Can the front passenger create/update refs? | Yes, if `Config.AllowCopilot = true`. |
| Can I disable favorites or themes? | Yes. Set `Config.EnableFavorites = false` and/or `Config.EnableThemes = false`. |
| How do I delete a ref? | Use **Delete** in the NUI or wait for auto cleanup. |
| Why aren’t settings saving? | DB resource must be started and table present. Check console for SQL errors. |
| Why don’t I see other players’ blips? | Check you share the same job and view distance is high enough. |
| Where do I add new icons? | Add files to `html/icons/` and update `Config.Blips` or `Config.IconOptions`. |
| Can I log to multiple Discord webhooks? | No. Only `Config.Webhook.URL` is used. |
| Is the database identifier configurable? | No. It is fixed to `fivemlicense`. |
| How do I set a personal default label? | Use the Config tab. It persists in SQL. |
| Why does the label get cut off? | Enforced by `Config.MaxLabel` in UI and server. |
| How do I force a framework? | Set `Config.Framework` to `es_extended`, `qb-core`, or `qbx_core`. |
| Standalone enabled but framework running? | Framework is **prioritized** and a warning is printed. |
| Why isn’t FiveM/XBL ID showing in logs? | Some servers don’t expose them, so `-` is used. |
| Can I hide Config/Favorites tabs? | Yes. Set `Config.EnableFavorites = false` and/or `Config.EnableThemes = false`. |
| Can I use it without a database? | Yes, but settings won’t persist. |
| Which identifiers are logged? | Player name, job, label, sprite, color, Discord mention, FiveM license, FiveM ID, XBL ID. |

---

# 🔄 **UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*