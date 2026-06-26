<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/ZGQf04_Mfpc"
    title="smdz_evidence_markers showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>
<div
  class="five-metrics-resource"
  data-resource="smdz_evidence_markers"
></div>


---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_evidence_markers`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone
- 🧾 **Version:** `1.3.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# ⭐ **FEATURES:**
- 🎯 **Fully synced evidence markers**
  Placeable, pick-up-able evidence markers with real-time sync, editable notes, and **3D labels visible to all players**.
- 📝 **Crime-Scene NUI Interface**
  Authentic yellow evidence card UI featuring:
  - Up to **30-character notes**
  - Clear / Cancel / Save actions
  - Large, readable **ID badge**
  - **Fully localized** interface (EN / ES - add more)
- 🧭 **Mouse-First Placement Gizmo**
  Automatic gizmo opening on placement with:
  - Translate & rotate controls
  - **World / Local axis toggle**
  - **Snap-to-ground** for precise positioning
- 🛡️ **Advanced Job & Grade Permissions**
  Flexible **whitelist / blacklist** system with **job grade support** for:
  - Placing markers
  - Picking up markers
  - Editing notes
- 🎯 **Target-Based Interactions**
  Clean and configurable target actions with:
  - Custom labels & icons
  - Support for **ox_target** and **qb-target**
- 🔌 **Smart Bridge System**
  Automatic detection of frameworks, target systems, and inventories, with safe fallbacks to prevent errors.
- 🌐 **Detailed Discord Webhooks**
  Full logging for **use / place / pickup / cancel / note edit**, including:
  - Player & job data
  - World coordinates
  - Item name
  - NetID
  - Custom embed colors (footer is fixed)
- 🧹 **Optional Auto-Cleanup System**
  Timed removal of placed markers to keep the map clean, including **owner notifications**.
- 🌍 **Multi-Language Ready**
  EN / ES included by default using **UPPERCASE locale keys**, easy to extend with additional languages.


---

# 🧰 **REQUIREMENTS:**
- FiveM latest recommended build with OneSync.
- Target (required): `ox_target` or `qb-target` (script stops if missing).
- Inventory (auto): `ox_inventory`, `qs-inventory`, `qb-inventory`, `origen_inventory`, `core_inventory`, `ak47_inventory` (extendable).
- Framework (auto): ESX / QBCore / QBox / standalone.

---

# 📦 **INSTALLATION:**
1) Place in `resources/[smdz]/smdz_evidence_markers`.
2) Ensure dependencies start before this resource.
3) Example `server.cfg`:
   ```cfg
   ensure ox_lib              # optional but recommended
   ensure ox_inventory
   ensure ox_target           # or qb-target
   ensure smdz_evidence_markers
   ```
4) Restart the server.

---

# ⚙️ **CONFIGURATION FILE:**
All in `config.lua`:

```lua
Config = Config or {}

-- Core resource settings.
Config.Core = {
    Locale = 'en', -- Active locale file: 'en' or 'es'.
    Debug = true -- Enable or disable debug logs in console.
}

-- Framework detection and forced mode.
Config.Framework = {
    Mode = 'auto' -- Detection mode: 'auto', 'esx', 'qbcore', 'qbox', or 'standalone'.
}

-- Permission rules for placing/picking up/editing markers.
Config.Permissions = {
    Jobs = {
        Enabled = true, -- Enable job-based permission validation.
        Mode = 'whitelist', -- Rule mode: 'whitelist' allows only listed jobs, 'blacklist' denies listed jobs.
        List = {
            police = { enabled = true, grades = {} }, -- Job entry for police: enabled and allowed grades (empty = all grades).
            sheriff = { enabled = true, grades = {} }, -- Job entry for sheriff: enabled and allowed grades (empty = all grades).
            fib = { enabled = true, grades = {} } -- Job entry for fib: enabled and allowed grades (empty = all grades).
        }
    }
}

-- Marker item definitions mapped to prop model and locale key.
Config.Markers = {
    Items = {
        crime_marker_1 = { model = 'ril1', label = 'EVIDENCE_1' }, -- Item name, model name, and locale label key.
        crime_marker_2 = { model = 'ril2', label = 'EVIDENCE_2' }, -- Item name, model name, and locale label key.
        crime_marker_3 = { model = 'ril3', label = 'EVIDENCE_3' }, -- Item name, model name, and locale label key.
        crime_marker_4 = { model = 'ril4', label = 'EVIDENCE_4' }, -- Item name, model name, and locale label key.
        crime_marker_5 = { model = 'ril5', label = 'EVIDENCE_5' }, -- Item name, model name, and locale label key.
        crime_marker_6 = { model = 'ril6', label = 'EVIDENCE_6' } -- Item name, model name, and locale label key.
    }
}

-- Target provider and per-action target options.
Config.Target = {
    Mode = 'auto', -- Target provider mode: 'auto', 'ox_target', 'qb-target', or 'none'.
    Distance = 3.0, -- Default interaction distance for target actions.
    Pickup = {
        LabelKey = 'TARGET_PICKUP', -- Locale key used as pickup action label.
        Icon = 'fa-solid fa-hand' -- Font Awesome icon for pickup action.
    },
    Note = {
        Icon = 'fa-solid fa-pen' -- Font Awesome icon for note action.
    },
    Info = {
        Enabled = true, -- Enable marker info action on target.
        LabelKey = 'TARGET_INFO', -- Locale key used as marker info action label.
        Icon = 'fa-solid fa-circle-info', -- Font Awesome icon for marker info action.
        Distance = 3.0, -- Interaction distance for marker info action.
        RequireJob = true, -- Require permission check before opening marker info.
        DateFormat = '%d/%m/%Y', -- Lua os.date format for marker placement date.
        TimeFormat = '%H:%M:%S' -- Lua os.date format for marker placement time.
    }
}

-- Inventory bridge selection and fallback behavior.
Config.Inventory = {
    Mode = 'ox_inventory', -- Inventory mode: ox_inventory, qs_inventory, qb_inventory, origen_inventory, core_inventory, ak47_inventory, or none.
    PrioritizeFallback = true -- If true, use native framework fallback when primary inventory action fails.
}

-- Notify provider and default visual behavior.
Config.Notify = {
    Mode = 'auto', -- Notify mode: 'auto' or a specific provider name.
    Defaults = {
        Type = 'inform', -- Default notify type: inform, success, warning, or error.
        Duration = 5000 -- Default notify duration in milliseconds.
    }
}

-- Discord webhook settings for marker activity logs.
Config.Webhook = {
    Enabled = false, -- Enable or disable webhook logging globally.
    Url = '', -- Discord webhook URL.
    Identity = {
        Username = 'WEBHOOK_USERNAME', -- Display username used by webhook messages.
        Avatar = '' -- Avatar URL used by webhook messages (empty string disables avatar).
    },
    Colors = {
        Used = 10181046, -- Embed color for "marker used" event.
        Placed = 5763719, -- Embed color for "marker placed" event.
        PickedUp = 16753920, -- Embed color for "marker picked up" event.
        Canceled = 15158332, -- Embed color for "marker canceled" event.
        Note = 3447003 -- Embed color for "marker note updated" event.
    }
}

-- Placement and pickup animation settings.
Config.Animations = {
    Place = {
        dict = 'random@domestic', -- Animation dictionary used when placing marker.
        name = 'pickup_low', -- Animation name used when placing marker.
        duration = 2000, -- Animation duration in milliseconds for placing marker.
        freeze = true -- Freeze player during place animation.
    },
    Pickup = {
        dict = 'random@domestic', -- Animation dictionary used when picking up marker.
        name = 'pickup_low', -- Animation name used when picking up marker.
        duration = 2000, -- Animation duration in milliseconds for pickup marker.
        freeze = true -- Freeze player during pickup animation.
    }
}

-- Placement gizmo and marker placement limits.
Config.Placement = {
    SpawnForward = 1.7, -- Distance in meters spawned in front of player before editing.
    MaxDistance = 4.0, -- Maximum allowed distance between player and marker during editing.
    PlaceOnGround = true, -- Snap marker to ground when spawned or confirmed.
    FreezeAfterPlace = true -- Freeze marker entity after confirmed placement.
}

-- 3D text rendering performance and style.
Config.DrawText3D = {
    Enabled = true, -- Enable or disable 3D text rendering for markers.
    Distance = 7.0, -- Max visible distance for 3D text.
    RenderDistance = 10.0, -- Distance used for proximity scan culling.
    ScanInterval = 500, -- Scan interval in milliseconds for nearby marker cache.
    IdleWait = 400, -- Thread wait in milliseconds when no nearby markers are found.
    Scale = 0.50, -- Base text scale.
    HeightOffset = 0.55, -- Vertical offset above marker entity.
    Color = { r = 255, g = 215, b = 0 } -- RGB color for marker label text.
}

-- Automatic cleanup for old active markers.
Config.Cleanup = {
    Enabled = true, -- Enable or disable periodic cleanup thread.
    IntervalHours = 4, -- Cleanup interval in hours.
    NotifyPlayers = false -- Notify owners when cleanup removes their markers.
}

-- Marker time formatting and timezone behavior.
Config.Timezone = {
    UseServerLocalTime = true, -- If true, format date/time using host machine local timezone.
    UtcOffsetMinutes = 0 -- If UseServerLocalTime is false, apply this UTC offset in minutes.
}


```

---

# 🤝 **COMPATIBILITY:**

- 🎒 **Inventories**
  `ox_inventory`, `qs-inventory`, `qb-inventory`, `origen_inventory`, `core_inventory`, `ak47_inventory`
  *(Automatic fallback to native ESX / QBCore inventory functions if no supported inventory is detected)*

- 🎯 **Target Systems** *(Required)*
  `ox_target`, `qb-target`

- 🔔 **Notification Systems**
  `ox_lib`, `esx`, `qbcore`, `qbox`, `origen_notify`, `wasabi_notify`, `brutal_notify`, `rtx_notify`,
  `vms_notifyv2`, `mythic_notify`, `okokNotify`, `ps-ui`, `t-notify`, `rcore_notify`, `codem-notification`

- 🧩 **Frameworks**
  `ESX`, `QBCore`, `QBox`, `Standalone`

- 🌍 **Locales Included**
  `en`, `es`


---

# 🧭 **QUICKSTART:**
1) Use a marker item.
2) Gizmo auto-opens; drag axes, `G` snaps to ground.
3) Controls: `W` translate, `R` rotate, `Q` world/local, `ENTER` place, `BACKSPACE/ESC` cancel, `G` snap.
4) Target the prop: pick up (returns item) or write note (30 chars; delete clears).
5) Everyone sees the marker title + note in 3D; synced instantly.

---

# 🎮 **CONTROLS (PLACEMENT):**

- Placement gizmo **opens automatically** when using an evidence marker.
- Mouse-driven gizmo controls:
  - `W` → Translate
  - `R` → Rotate
  - `Q` → Toggle World / Local axis
  - `G` → Snap to ground
  - `ENTER` → Confirm placement
  - `BACKSPACE` / `ESC` → Cancel placement
- Placement distance is limited by `Config.Placement.MaxDistance` to prevent abuse.
- A **bottom-center 2D drawtext** displays translated control hints in real time.

---

# 📝 **NOTES & TARGET INTERACTIONS:**


  - View marker info (**character name, date, time**) via target + ox_lib context menu
- **3D draw text** above markers:
  - Evidence title
  - Note line
  Visible to all players.
- Crime-scene **NUI interface**:
  - Yellow **FBI-style evidence card**
  - Large ID number
  - Save / Delete / Cancel actions
  - Fully localized (EN / ES)

---

# 🌐 **DISCORD WEBHOOKS:**

- Fully configurable via `Config.Webhook`:
  - Webhook URL
  - Username & avatar
  - Embed colors
- Webhook footer is fixed and non-configurable: SMDZ STUDIOS - EVIDENCE MARKERS.
- Logged events:
  - Item used
  - Marker placed
  - Marker picked up
  - Placement canceled
  - Note updated
- Each event includes **player, job, coordinates, item name, and netId**.

---

# 🧹 **AUTO-CLEANUP SYSTEM:**

- Optional timed cleanup using `Cleanup.IntervalHours`.
- Automatically removes placed markers to keep the map clean.
- If `NotifyPlayers` is enabled, **owners are notified** when their markers are removed.

---


# 🧪 **DEBUG:**
- Turn `Config.Core.Debug = true` to enable rich `[SMDZ DEBUG]` output with colored console lines.
- Startup logs: detected framework / target / inventory / notify / locale / cleanup timers (auto shows what was chosen when in `auto`).
- Runtime logs: gizmo state (mouse/world-local/snap), placement clamps, note edits, targets add/remove, sync requests, cleanup removals, webhook sends/failures.
- Target gatekeeper: if no compatible target is found, a **red critical error** is printed and the resource stops immediately.
- Recommended: keep debug on during setup; disable for production once all systems are green.
---

# 🛠️ **DEVELOPER EVENTS:**
- **Namespace:** all events start with `smdz_evidence_markers:`.
- **Notes:** `smdz_evidence_markers:setNote` triggers a webhook (edit/clear) and refreshes draw text for everyone.

| Event (full name) | Direction | Purpose / payload hints |
| --- | --- | --- |
| `smdz_evidence_markers:useItem` | Client → Server | Item used; server validates and tells client to begin placement. |
| `smdz_evidence_markers:placed` | Client → Server | Placement confirmed; sends coords/rotation/netId/itemId/owner/note. |
| `smdz_evidence_markers:pickup` | Client → Server | Request pickup of a marker; includes netId/markerId for validation. |
| `smdz_evidence_markers:cancelPlace` | Client → Server | Cancel placement; cleans state and returns item if applicable. |
| `smdz_evidence_markers:setNote` | Client → Server | Update or clear a note; server broadcasts update and logs webhook. |
| `smdz_evidence_markers:syncRequest` | Client → Server | Ask server to resend active markers (join/resync safety). |
| `smdz_evidence_markers:requestMarkerInfo` | Client → Server | Request marker placement info; server validates distance/permissions and rate-limits requests. |
| `smdz_evidence_markers:beginPlace` | Server → Client | Start placement mode, spawn temp prop, open gizmo. |
| `smdz_evidence_markers:openMarkerInfo` | Server → Client | Open ox_lib context with marker placer name and placement date/time. |
| `smdz_evidence_markers:removeMarker` | Server → Client | Remove marker entity and its target bindings. |
| `smdz_evidence_markers:updateNote` | Server → Client | Update note/title draw text for all players. |
| `smdz_evidence_markers:notify` | Server → Client | Send notification via configured notify bridge. |


---

# 📤 **EXPORTS:**

**Client Exports**
- `useItem(itemName, slot)`
  Example:
  ```lua
  exports['smdz_evidence_markers']:useItem('crime_marker_1', 1)
  ```
- `requestSync()`
  Example:
  ```lua
  exports['smdz_evidence_markers']:requestSync()
  ```
- `setDebug(enabled)`
  Example:
  ```lua
  exports['smdz_evidence_markers']:setDebug(true)
  ```
- `setDrawTextEnabled(enabled)`
  Example:
  ```lua
  exports['smdz_evidence_markers']:setDrawTextEnabled(false)
  ```

**Server Exports**
- `useItem(source, itemName, slot)`
  Example:
  ```lua
  exports['smdz_evidence_markers']:useItem(source, 'crime_marker_1', 1)
  ```
- `addItem(source, itemName, count, slot)`
  Example:
  ```lua
  exports['smdz_evidence_markers']:addItem(source, 'crime_marker_1', 1, false)
  ```
- `removeItem(source, itemName, count, slot)`
  Example:
  ```lua
  exports['smdz_evidence_markers']:removeItem(source, 'crime_marker_1', 1, false)
  ```
- `getCount(source, itemName)`
  Example:
  ```lua
  local count = exports['smdz_evidence_markers']:getCount(source, 'crime_marker_1')
  ```
- `getInventoryMode()`
  Example:
  ```lua
  local mode = exports['smdz_evidence_markers']:getInventoryMode()
  ```
- `getMarkers()`
  Example:
  ```lua
  local markers = exports['smdz_evidence_markers']:getMarkers()
  ```

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
