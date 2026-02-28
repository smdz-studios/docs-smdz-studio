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


# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_evidence_markers`
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone
- 🧾 **Version:** `1.1.1`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# ✨ **FEATURES:**
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
  - Custom embed colors & footer
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

# 🔧 **CONFIGURATION (config.lua):**
```lua
--[[===========================================================
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

  INDEX
  01) Core
  02) Framework
  03) Permissions (Jobs / Grades)
  04) Marker Items (item -> model -> locale label)
  05) Target (Pickup / Note / Distance)
  06) Inventory
  07) Notifications
  08) Webhooks (Discord Logs)
  09) Animations
  10) Placement
  11) 3D DrawText Labels
  12) Cleanup (Performance)
=============================================================]]

Config = Config or {}

--=============================================================
-- 01) CORE
--=============================================================
Config.Core = {
    Locale = 'en',         -- 'en' | 'es'
    Debug  = false          -- true = verbose [SMDZ DEBUG] logs
}

--=============================================================
-- 02) FRAMEWORK
--=============================================================
Config.Framework = {
    Mode = 'auto'          -- 'auto' | 'esx' | 'qbcore' | 'qbox' | 'standalone'
}

--=============================================================
-- 03) PERMISSIONS (JOBS / GRADES)
--=============================================================
-- Enabled: enable job checks
-- Mode:
--   - 'whitelist' => allow ONLY listed jobs
--   - 'blacklist' => deny listed jobs
-- Grades:
--   - {} empty => all grades
--   - {0,1,2}   => only those grades
Config.Permissions = {
    Jobs = {
        Enabled = true,
        Mode = 'whitelist',
        List = {
            police  = { enabled = true, grades = {} },
            sheriff = { enabled = true, grades = {} },
            fib     = { enabled = true, grades = {} }
        }
    }
}

--=============================================================
-- 04) MARKER ITEMS (ITEM -> PROP MODEL -> LABEL KEY)
--=============================================================
-- label = locale key (locales/*.lua)
Config.Markers = {
    Items = {
        crime_marker_1 = { model = 'ril1', label = 'EVIDENCE_1' },
        crime_marker_2 = { model = 'ril2', label = 'EVIDENCE_2' },
        crime_marker_3 = { model = 'ril3', label = 'EVIDENCE_3' },
        crime_marker_4 = { model = 'ril4', label = 'EVIDENCE_4' },
        crime_marker_5 = { model = 'ril5', label = 'EVIDENCE_5' },
        crime_marker_6 = { model = 'ril6', label = 'EVIDENCE_6' }
    }
}

--=============================================================
-- 05) TARGET (OX_TARGET / QB-TARGET)
--=============================================================
Config.Target = {
    Mode     = 'auto',                 -- 'auto' | 'ox_target' | 'qb-target' | 'none'
    Distance = 3.0,

    Pickup = {
        LabelKey = 'TARGET_PICKUP',    -- locale key
        Icon     = 'fa-solid fa-hand'
    },

    Note = {
        Icon = 'fa-solid fa-pen'
    }
}

--=============================================================
-- 06) INVENTORY
--=============================================================
-- Supported:
--   ox_inventory, qs_inventory, qb_inventory, origen_inventory,
--   core_inventory, ak47_inventory, none
--
-- PrioritizeFallback:
--   If primary inventory fails, allow native ESX/QB fallback
Config.Inventory = {
    Mode = 'auto',
    PrioritizeFallback = true
}

--=============================================================
-- 07) NOTIFICATIONS
--=============================================================
-- Supported:
--   ox_lib, esx, qbcore, qbox, origen_notify, wasabi_notify, brutal_notify, rtx_notify,
--   vms_notifyv2, mythic_notify, okokNotify, ps-ui, t-notify, rcore_notify,
--   codem-notification, none
Config.Notify = {
    Mode = 'auto',
    Defaults = {
        Type     = 'inform',
        Duration = 5000
    }
}

--=============================================================
-- 08) WEBHOOKS (DISCORD LOGS)
--=============================================================
Config.Webhook = {
    Enabled  = true,
    Url      = 'https://discord.com/api/webhooks/XXXX/XXXXXXXX',
    Identity = {
        Username = 'WEBHOOK_USERNAME',
        Avatar   = ''                 -- '' = none / url .png
    },
    FooterKey = 'WEBHOOK_FOOTER',
    Colors = {
        Used     = 10181046,
        Placed   = 5763719,
        PickedUp = 16753920,
        Canceled = 15158332,
        Note     = 3447003
    }
}

--=============================================================
-- 09) ANIMATIONS
--=============================================================
-- freeze = true => freeze player during animation
Config.Animations = {
    Place = {
        dict     = 'amb@medic@standing@tendtodead@idle_a',
        name     = 'idle_a',
        duration = 2000,
        freeze   = true
    },
    Pickup = {
        dict     = 'amb@medic@standing@tendtodead@idle_a',
        name     = 'idle_a',
        duration = 2000,
        freeze   = true
    }
}

--=============================================================
-- 10) PLACEMENT
--=============================================================
-- Note:
-- Help text uses 2D drawtext (bottom-center) via locale key: GIZMO_CONTROLS_TEXT
Config.Placement = {
    SpawnForward     = 1.7,   -- how far in front of the player to spawn
    MaxDistance      = 4.0,   -- max distance prop can be from player during placement
    PlaceOnGround    = true,  -- auto-place on ground on spawn
    FreezeAfterPlace = true   -- freeze prop after placement
}

--=============================================================
-- 11) 3D DRAWTEXT LABELS
--=============================================================
Config.DrawText3D = {
    Enabled      = true,
    Distance     = 7.0,
    RenderDistance = 10.0, -- drawtext only within this distance to reduce CPU
    ScanInterval = 500,    -- ms between proximity scans for drawtext culling
    IdleWait     = 400,    -- ms to wait when no markers are nearby
    Scale        = 0.50,
    HeightOffset = 0.55,
    Color        = { r = 255, g = 215, b = 0 } -- gold/yellow
}

--=============================================================
-- 12) CLEANUP (PERFORMANCE)
--=============================================================
Config.Cleanup = {
    Enabled       = true,
    IntervalHours = 4,
    NotifyPlayers = false
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
- Placement distance is limited by `PlaceMaxDistance` to prevent abuse.
- A **bottom-center 2D drawtext** displays translated control hints in real time.

---

# 📝 **NOTES & TARGET INTERACTIONS:**

- Target-based actions:
  - Pick up marker
  - Write / edit note (**up to 30 characters**, fully synced)
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
  - Footer text
  - Embed colors
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
- Turn `Config.Debug = true` to enable rich `[SMDZ DEBUG]` output with colored console lines.
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
| `smdz_evidence_markers:beginPlace` | Server → Client | Start placement mode, spawn temp prop, open gizmo. |
| `smdz_evidence_markers:addTarget` | Server → Client | Add target options (pickup/note) to a marker. |
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
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
