<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/HLyqbIe7hgQ"
    title="smdz_speed_bumps showcase"
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

[![](https://badges.5metrics.dev/smdz_speed_bumps/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_speed_bumps) | [![](https://badges.5metrics.dev/smdz_speed_bumps/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_speed_bumps)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_speed_bumps`
- 💻 **Author:** SMDZ Studios - *Special thanks to Team NXP // NovelaxNeko - https://novelaxneko.com for creating the prop*
- 🧭 **Framework:** ESX / QBCore / QBX
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>

**Short description:**

A fully featured Speed Bump Management System for FiveM, built with secure server-side validation and seamless multiframework support (ESX / QBCore / QBX). Includes a modern React-based NUI placement system, persistent SQL storage, advanced admin edit locking, and integrated Discord logging for full control and monitoring.

Designed for performance, security, and a smooth in-game editing experience.
---

# ⭐ **FEATURES:**

- 🚀 **Plug & Play Setup:** install in minutes with a clean structure and ready-to-use defaults.
- 🧠 **Multiframework Support:** works out of the box with **ESX / QBCore / QBX** using auto detection.
- 🛡️ **Secure by Design:** core actions are validated server-side with solid protection.
- 🔐 **Flexible Permissions:** supports **ACE + framework groups** for easy access control.
- ⚡ **Fast Editing Workflow:** combine freecam and gizmo for quick and efficient edits.
- 🚗 **Realistic Interaction:** vehicles slow down only when actually driving over the bump.
- 🚦 **NPC Traffic Support:** optional system to affect NPC vehicles with performance in mind.
- 💾 **SQL Persistence:** all bumps are saved and loaded reliably.
- 🔄 **Live Sync:** instant updates across all players without reloads.
- 🧱 **Optimized Performance:** smart distance-based streaming system.
- 🖼️ **Branding Ready:** add your server logo in seconds.
- 🌍 **Localization Ready:** built-in support for **EN / ES** and more.
- 🔔 **Notify Compatible:** works with common notification systems.
- 📜 **Webhook Logs:** track important actions directly to Discord.


---


# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended build.
- **Framework:** ESX / QBCore / QBX (auto-detected or forced via config).
- **Dependencies (framework / database / extras):**
  - `es_extended` / `qb-core` / `qbx_core`
  - `oxmysql`

- **Notification resources:**
  - `ox_lib`
  - `okokNotify`
  - `origen_notify`
  - `wasabi_notify`
  - `wasabi_uikit`
  - `rtx_notify`
  - `codem-notification`
  - `vms_notifyv2`
  - `esx_notify`
  - `brutal_notify`
  - `FL-Notify`
  - `gtm-ui`


---

# 📥 **INSTALLATION:**

1. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_speed_bumps
```

2. Import the SQL file:

```text
database/smdz_speed_bumps.sql
```

3. Add dependencies and resource to your `server.cfg`:

```bash
## Dependencies
ensure oxmysql

## Framework (use your stack)
ensure es_extended
# ensure qb-core
# ensure qbx_core

## SMDZ Studios
ensure smdz_speed_bumps
```

4. Restart your server or start the resource manually:

```bash
restart smdz_speed_bumps
```

5. Check server console for startup confirmation (framework detection + SQL initialization).

---

# ⚙️ **CONFIGURATION:**

Main files:

- `shared/config.lua`
- `shared/config_nui.lua`

```lua


--[[
    =====================================================================
    SMDZ Speed Bumps - Main Configuration
    =====================================================================

    Index
    01) General
    02) Permission System
    03) Notification Bridge (Client Side)
    04) Prop Model
    05) Bump Defaults and Limits
    06) Runtime Behavior
    07) NPC Behavior
    08) Streaming
    09) Edit Concurrency
    10) Security / Abuse Alerts
    11) Placement Controls
    12) Debug
    13) Discord Logging
]]

Config = {}

-- =====================================================================
-- 01) General
-- =====================================================================
Config.Command = 'speedbump' -- Chat/console command used to open the speed bump creator.
Config.Language = 'en' -- Active locale key. Supported: 'es' / 'en' / 'fr' / 'de'.
Config.Framework = 'auto' -- Framework mode. Supported: 'auto' / 'esx' / 'qbcore' / 'qbx'.

-- =====================================================================
-- 02) Permission System
-- =====================================================================
Config.AdminOnly = true -- If true, only admins can create/edit/delete speed bumps.
Config.AllowedAce = 'command.createspeedbump' -- ACE permission required when ACE checks are enabled.
Config.AllowAceFallback = true -- If true, ACE can still grant access when framework group check fails.
Config.FrameworkPermission = 'admin' -- Framework permission/group required for admin actions (string or table).
Config.FrameworkAdminGroups = { -- Framework groups that are treated as admin-level access.
    admin = true, -- ESX/QB group name allowed to manage bumps.
    superadmin = true, -- ESX/QB group name allowed to manage bumps.
    god = true -- ESX/QB group name allowed to manage bumps.
}

-- =====================================================================
-- 03) Notification Bridge (Client Side)
-- =====================================================================
Config.Notification = { -- Unified notification settings used by the client bridge.
    Provider = 'auto', -- Provider key/alias. Use 'auto' or any provider
    -- `ox_lib`, `okokNotify`, `origen_notify`, `wasabi_notify`, `wasabi_uikit`, `rtx_notify`, `codem-notification`,
    -- `vms_notifyv2`, `esx_notify`, `brutal_notify`, `FL-Notify`, `gtm-ui`

    Duration = 5000, -- Default notification duration in milliseconds.
    Position = 'middle-right', -- Default placement for providers that support positioning.
    Sound = true, -- Enables sound on providers that support sound.
    CodemHeader = nil, -- Optional header for codem-notification (nil = provider default).
    FLSubtitle = '', -- Optional subtitle for FL-Notify.
    WasabiUIKit = { -- Extra options specific to wasabi_uikit.
        id = nil, -- Optional unique notification ID for replacing/updating notifications.
        icon = nil, -- Optional icon override for this provider.
        color = nil -- Optional color override for this provider.
    },
    VmsNotifyV2 = { -- Extra options specific to vms_notifyv2.
        icon = nil, -- Optional icon override for this provider.
        color = nil -- Optional color override for this provider.
    },
    GtmUi = { -- Extra options specific to gtm-ui.
        id = nil, -- Optional custom notification ID.
        position = 'top-right' -- Default gtm-ui notification position.
    }
}

-- =====================================================================
-- 04) Prop Model
-- =====================================================================
Config.PropModel = `nxp_neko_smdz_speed_bump_00` -- World prop model used when placing a speed bump.
-- PROP INFO: Author 'Team NXP // NovelaxNeko - https://novelaxneko.com/'

-- =====================================================================
-- 05) Bump Defaults and Limits
-- =====================================================================
Config.DefaultMaxSpeedKmh = 30 -- Default max speed (km/h) shown in the creator UI.
Config.MinMaxSpeedKmh = 5 -- Minimum max speed (km/h) accepted by validation.
Config.MaxMaxSpeedKmh = 300 -- Maximum max speed (km/h) accepted by validation.

-- =====================================================================
-- 06) Runtime Behavior
-- =====================================================================
Config.RuntimeBehavior = { -- Core runtime behavior for vehicle slowdown and deletion checks.
    CheckInterval = 100, -- Main client slowdown loop interval in milliseconds.
    ReduceToPercent = 0.70, -- Speed multiplier applied when crossing a bump (0.70 = 70% of configured max speed).
    TriggerDistance = 8.0, -- Distance to begin trigger checks for bump crossing.
    RearmDistance = 5.0, -- Distance required to re-arm a vehicle trigger for the same bump.
    MaxTrackedBumpDistance = 20.0, -- Max distance for considering a bump in slowdown processing.
    VehicleHitboxPadding = 0.35, -- Extra collision margin to improve vehicle overlap detection on bumps.
    VerticalTolerance = 2.5, -- Max Z difference allowed between vehicle and bump to consider overlap.
    MinBumpSpacing = 1.5, -- Minimum allowed spacing between bump centers (meters).
    DeleteRadius = 4.0 -- Radius used when deleting the nearest bump.
}

-- =====================================================================
-- 07) NPC Behavior
-- =====================================================================
Config.NpcBehavior = { -- Controls if and how NPC traffic is affected by bumps.
    Enabled = true, -- Master toggle for NPC slowdown logic.
    DefaultAffect = false, -- Default value for "Affect NPCs" when creating a new bump.
    CheckInterval = 350, -- NPC scan interval in milliseconds.
    ScanRadius = 75.0, -- Max distance from player to consider NPC vehicles.
    InfluenceRadius = 28.0, -- Max distance from a bump for an NPC vehicle to become a slowdown candidate.
    MaxVehiclesPerTick = 12, -- Max NPC vehicles processed per scan tick (0 = process all candidates).
    FairDistribution = true -- If true, rotates candidate selection each tick to avoid starving some NPCs.
}

-- =====================================================================
-- 08) Streaming
-- =====================================================================
Config.Stream = { -- Controls world prop streaming in/out distances.
    InDistance = 120.0, -- Distance where bump prop is spawned.
    OutDistance = 140.0, -- Distance where bump prop is deleted.
    RefreshMs = 1000 -- Streaming refresh interval in milliseconds.
}

-- =====================================================================
-- 09) Edit Concurrency
-- =====================================================================
Config.Concurrency = { -- Edit lock settings to avoid concurrent overwrite conflicts.
    EditLockTtlMs = 600000 -- Edit lock timeout in milliseconds (600000 = 10 minutes).
}

-- =====================================================================
-- 10) Security / Abuse Alerts
-- =====================================================================
Config.Security = { -- Security-related runtime checks and alerting behavior.
    AbuseAlerts = { -- Repeated unauthorized attempts alert settings.
        Enabled = true, -- Enables abuse tracking and alert emission.
        Threshold = 3, -- Attempts required before triggering an abuse alert.
        WindowSeconds = 60, -- Sliding window for counting unauthorized attempts.
        CooldownSeconds = 120 -- Cooldown before the same source can trigger another alert.
    }
}

-- =====================================================================
-- 11) Placement Controls
-- =====================================================================
Config.PlaceDistance = 2.0 -- Default initial distance from camera/player when starting placement.
Config.Placement = { -- Placement mode sensitivity, steps, and helper values.
    MinDistance = 1.0, -- Minimum placement distance from camera/player.
    MaxDistance = 8.0, -- Maximum placement distance from camera/player.
    DistanceStep = 0.15, -- Normal distance increment/decrement step.
    DistanceFineStep = 0.05, -- Fine distance increment/decrement step.
    HeightStep = 0.05, -- Normal vertical movement step.
    HeightFineStep = 0.02, -- Fine vertical movement step.
    RotateStep = 1.5, -- Normal heading rotation step in degrees.
    RotateFineStep = 0.35, -- Fine heading rotation step in degrees.
    RaycastDistance = 20.0, -- Raycast length used to find valid placement ground.
    AxisLength = 1.1, -- Debug/preview axis helper line length.
    Freecam = { -- Free camera controls used during placement mode.
        Enabled = true, -- Master toggle for freecam mode.
        AllowGizmoWhileActive = true, -- If true, gizmo controls remain usable while freecam is active.
        MoveSpeed = 8.0, -- Base freecam movement speed (units/sec).
        BoostMultiplier = 2.5, -- Movement multiplier while boost key is pressed.
        LookSensitivity = 9.5, -- Mouse look sensitivity while freecam is active.
        LookAxes = { -- Mouse look control axes.
            X = 1, -- Horizontal look axis control id.
            Y = 2 -- Vertical look axis control id.
        },
        Keys = { -- Key definitions shown in placement/freecam HUD and used in runtime input checks.
            Toggle = { ids = { 47 }, key = 'G', label = 'nui_place_freecam' }, -- Toggle freecam on/off.
            Forward = { ids = { 32 }, key = 'W', label = 'nui_place_freecam_forward' }, -- Move forward.
            Backward = { ids = { 33 }, key = 'S', label = 'nui_place_freecam_backward' }, -- Move backward.
            Left = { ids = { 34 }, key = 'A', label = 'nui_place_freecam_left' }, -- Move left.
            Right = { ids = { 35 }, key = 'D', label = 'nui_place_freecam_right' }, -- Move right.
            Up = { ids = { 22 }, key = 'SPACE', label = 'nui_place_freecam_up' }, -- Move up.
            Down = { ids = { 36 }, key = 'CTRL', label = 'nui_place_freecam_down' }, -- Move down.
            Boost = { ids = { 21 }, key = 'SHIFT', label = 'nui_place_freecam_boost' }, -- Hold to move faster.
            Look = { ids = {}, key = 'MOUSE', label = 'nui_place_freecam_look' } -- Mouse camera look hint.
        }
    }
}

-- =====================================================================
-- 12) Debug
-- =====================================================================
Config.Debug = false -- Enables debug marker rendering and additional diagnostics.

-- =====================================================================
-- 13) Discord Logging
-- =====================================================================
Config.DiscordLogs = { -- Discord webhook logging configuration.
    Enabled = false, -- Master toggle for Discord logs.
    ShowIP = false, -- If true, includes player endpoint/IP in Discord logs.
    Webhooks = { -- Webhook URL map per event type.
        default = 'https://discord.com/api/webhooks/XXXXXX', -- Fallback webhook when an event-specific webhook is missing.
        created = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for bump created events.
        deleted = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for nearest-delete events.
        updated = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for bump update events.
        repositioned = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for bump reposition events.
        deleted_by_id = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for delete-by-id (Manage) events.
        permission_denied = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for permission denied events.
        invalid_input = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for invalid input/security validation events.
        too_close = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for too-close placement attempts.
        delete_not_found = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for delete requests with no nearby bump.
        sql_error = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for SQL/storage operation failures.
        storage_unavailable = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for storage unavailable events.
        permission_abuse = 'https://discord.com/api/webhooks/XXXXXX', -- Webhook for repeated unauthorized attempts.
        bump_passed = 'https://discord.com/api/webhooks/XXXXXX' -- Webhook for player crossing a speed bump.
    },
    Username = 'SMDZ Speed Bumps', -- Display name used by the Discord webhook bot.
    AvatarURL = '', -- Optional avatar URL for webhook messages.
    MentionRoleId = '', -- Optional role ID to mention in messages.
    UseTimestamp = true, -- Adds embed timestamp to each Discord log.
    Colors = { -- Embed colors (decimal integer format).
        created = 5763719, -- Color for successful create events.
        deleted = 3447003, -- Color for successful delete events.
        warning = 16776960, -- Color for warning-level events.
        error = 15548997 -- Color for error-level events.
    },
    Events = { -- Per-event enable/disable switches.
        created = true, -- Sends Discord log when a bump is created.
        deleted = true, -- Sends Discord log when nearest delete is successful.
        updated = true, -- Sends Discord log when a bump is updated.
        repositioned = true, -- Sends Discord log when a bump is repositioned.
        deleted_by_id = true, -- Sends Discord log when a bump is deleted from Manage by ID.
        permission_denied = true, -- Sends Discord log when an unauthorized action is attempted.
        invalid_input = true, -- Sends Discord log for invalid payloads.
        too_close = true, -- Sends Discord log when a new bump is too close to another one.
        delete_not_found = true, -- Sends Discord log when no bump is found for deletion.
        sql_error = true, -- Sends Discord log when a storage operation fails.
        storage_unavailable = true, -- Sends Discord log when database layer is unavailable.
        permission_abuse = true, -- Sends Discord log when abuse threshold is reached.
        bump_passed = true -- Sends Discord log when a player crosses a speed bump.
    },
    BumpPassed = { -- Validation and anti-spam controls for bump_passed webhook event.
        CooldownMs = 2500, -- Minimum time between logs for same player and same bump.
        MaxDistance = 10.0 -- Max distance from bump center allowed for server-side validation.
    }
}


```

---

# 🎮 **USAGE:**

### Commands

| Command             | Description                                  | Permission / Notes              |
|---------------------|----------------------------------------------|---------------------------------|
| `/speedbump`        | Opens Speed Bump Control (Create + Manage).  | Requires admin/ACE/framework    |

### Keybinds

Placement mode defaults:

| Key | Action |
|-----|--------|
| `W` | Gizmo move mode |
| `R` | Gizmo rotate mode |
| `Q` | Toggle local/world gizmo |
| `LMB` | Drag gizmo axis |
| `ALT` | Snap to ground |
| `Z` | Show/hide cursor |
| `ENTER` | Confirm placement |
| `BACKSPACE` | Cancel placement |

### UI / Menus

- **Create tab:** name, max speed, bypass jobs, NPC affect toggle, then placement mode.
- **Manage tab:** search/sort/pagination, edit existing bumps, clone, reposition, delete.
- **Lock system:** bump edits require lock ownership to prevent concurrent admin overwrite.

---

# 🔌 **DEVELOPER INTEGRATIONS (API):**

This script uses an internal callback bridge:

- Client request event: `smdz_speedbumps:cb:request`
- Server response event: `smdz_speedbumps:cb:response`

### Server Events

```lua
RegisterNetEvent('smdz_speedbumps:server:createBump', function(data)
    -- Server validates admin permission + sanitizes payload + stores in SQL
end)
```

| Event name                              | Parameters                       | Description                                            |
|-----------------------------------------|----------------------------------|--------------------------------------------------------|
| `smdz_speedbumps:server:createBump`     | `data`                           | Creates a new bump through server-side validated flow  |
| `smdz_speedbumps:cb:request`            | `callbackName`, `requestId`, `args` | Internal callback transport from client to server   |

### Client Events

```lua
RegisterNetEvent('smdz_speedbumps:client:syncBumps', function(bumps)
    -- Receives synchronized bump data from server
end)
```

| Event name                              | Parameters                | Description                                      |
|-----------------------------------------|---------------------------|--------------------------------------------------|
| `smdz_speedbumps:client:notify`         | `key`, `type`             | Sends localized notification to player           |
| `smdz_speedbumps:client:syncBumps`      | `bumps`                   | Syncs world bump state to clients                |
| `smdz_speedbumps:cb:response`           | `requestId`, `response`   | Internal callback response transport             |

### Exports

```lua
-- Client and server exports are available for integrations.
```

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| `smdzOpenCreator` | Client | none | `boolean` | Opens the speed bump creator UI flow. |
| `smdzGetBumps` | Client | none | `table` | Returns current client-side bump snapshot. |
| `smdzGetNearestBump` | Client | `maxDistance?: number` | `id, bump, distance` | Returns nearest bump to player if available. |
| `smdzIsVehicleOnBump` | Client | `vehicle: number, bumpId: number` | `boolean` | Checks if given vehicle is touching/overlapping the bump prop. |
| `smdzIsPlayerOnBump` | Client | `maxDistance?: number` | `boolean, bumpId?, distance?` | Checks if local player vehicle is currently on a bump. |
| `smdzCanUseAdmin` | Server | `source: number` | `boolean` | Returns whether a player source has admin access in this resource. |
| `smdzGetBumps` | Server | `source: number, includePrivate?: boolean` | `table` | Returns bump data (public by default, private/admin when allowed). |
| `smdzCheckBumpName` | Server | `source: number, rawName: string, excludeId?: number` | `boolean, key` | Validates name availability (`ok`, `duplicate_name`, etc). |
| `smdzCreateBump` | Server | `source: number, data: table` | `boolean, key` | Creates a new bump using full server validation and permission checks. |
| `smdzUpdateBumpById` | Server | `source: number, bumpId: number, data: table` | `boolean, key` | Updates bump fields by ID with lock/permission checks. |
| `smdzDeleteBumpById` | Server | `source: number, bumpId: number` | `boolean, key` | Deletes bump by ID with server-side validation. |
| `smdzRepositionBumpById` | Server | `source: number, bumpId: number, coords: table, heading: number` | `boolean, key` | Repositions existing bump by ID. |
| `smdzDeleteNearestBump` | Server | `source: number, playerCoords: vector3/table, radius?: number` | `boolean, key` | Deletes nearest bump inside configured/provided radius. |

### Client Export Examples

```lua
-- 1) Open creator UI
local opened = exports['smdz_speed_bumps']:smdzOpenCreator()
if not opened then
    print('[SPEEDBUMPS] Creator UI could not be opened.')
end
```

```lua
-- 2) Read local client snapshot of streamed bumps
local bumps = exports['smdz_speed_bumps']:smdzGetBumps()
for id, bump in pairs(bumps) do
    print(('Bump %s | name=%s | maxSpeed=%.2f m/s'):format(id, bump.name or 'N/A', tonumber(bump.maxSpeed) or 0.0))
end
```

```lua
-- 3) Find nearest bump to player
local id, bump, distance = exports['smdz_speed_bumps']:smdzGetNearestBump(20.0)
if id and bump then
    print(('Nearest bump: id=%s name=%s dist=%.2f'):format(id, bump.name or 'N/A', distance or -1.0))
end
```

```lua
-- 4) Validate a specific vehicle/bump overlap
local ped = PlayerPedId()
if IsPedInAnyVehicle(ped, false) then
    local veh = GetVehiclePedIsIn(ped, false)
    local nearestId = select(1, exports['smdz_speed_bumps']:smdzGetNearestBump(15.0))
    if nearestId then
        local isOn = exports['smdz_speed_bumps']:smdzIsVehicleOnBump(veh, nearestId)
        print(('Vehicle on bump %s: %s'):format(nearestId, tostring(isOn)))
    end
end
```

```lua
-- 5) Quick player check
local onBump, bumpId, distance = exports['smdz_speed_bumps']:smdzIsPlayerOnBump(12.0)
if onBump then
    print(('Player is on bump id=%s (dist=%.2f)'):format(bumpId, distance or -1.0))
end
```

### Server Export Examples

```lua
-- 1) Permission gate for integrations
local src = source
local canUse = exports['smdz_speed_bumps']:smdzCanUseAdmin(src)
if not canUse then return end
```

```lua
-- 2) Read bump list (public payload)
local bumps = exports['smdz_speed_bumps']:smdzGetBumps(src, false)
for id, bump in pairs(bumps) do
    print(('Public bump %s -> %s'):format(id, bump.name or 'N/A'))
end
```

```lua
-- 3) Validate a new bump name before UI submit/clone
local okName, key = exports['smdz_speed_bumps']:smdzCheckBumpName(src, 'Legion Square A1')
if not okName then
    print(('Name not available: %s'):format(key or 'duplicate_name'))
    return
end
```

```lua
-- 4) Create bump
local success, key = exports['smdz_speed_bumps']:smdzCreateBump(src, {
    coords = { x = 0.0, y = 0.0, z = 72.0 },
    heading = 90.0,
    maxSpeed = 30.0 / 3.6, -- m/s
    model = `nxp_neko_smdz_speed_bump_00`,
    name = 'Legion Square A1',
    affectNpcs = false,
    bypassJobs = 'police, ambulance'
})

if not success then
    print(('Create failed: %s'):format(key or 'unknown'))
    return
end
```

```lua
-- 5) Update bump by id (requires lock ownership in standard flow)
local okUpdate, updateKey = exports['smdz_speed_bumps']:smdzUpdateBumpById(src, 12, {
    name = 'Legion Square A1 - Revised',
    maxSpeed = 25.0 / 3.6,
    affectNpcs = true,
    bypassJobs = 'police'
})
print(('Update result: %s (%s)'):format(tostring(okUpdate), tostring(updateKey)))
```

```lua
-- 6) Reposition bump by id
local okReposition, repositionKey = exports['smdz_speed_bumps']:smdzRepositionBumpById(src, 12, {
    x = 210.35,
    y = -920.66,
    z = 29.72
}, 178.5)
print(('Reposition result: %s (%s)'):format(tostring(okReposition), tostring(repositionKey)))
```

```lua
-- 7) Delete bump by id
local okDelete, deleteKey = exports['smdz_speed_bumps']:smdzDeleteBumpById(src, 12)
print(('Delete by id result: %s (%s)'):format(tostring(okDelete), tostring(deleteKey)))
```

```lua
-- 8) Delete nearest bump with custom radius
local ped = GetPlayerPed(src)
local coords = GetEntityCoords(ped)
local okNearest, nearestKey = exports['smdz_speed_bumps']:smdzDeleteNearestBump(src, coords, 5.0)
print(('Delete nearest result: %s (%s)'):format(tostring(okNearest), tostring(nearestKey)))
```

### Internal Callback API (Advanced Integrations)

This resource already wraps these callbacks through exports, but advanced systems can still use the internal bridge:

- `smdz_speedbumps:server:getBumps`
- `smdz_speedbumps:server:getBumpsFresh`
- `smdz_speedbumps:server:canUseAdmin`
- `smdz_speedbumps:server:createBump`
- `smdz_speedbumps:server:updateBumpById`
- `smdz_speedbumps:server:deleteBumpById`
- `smdz_speedbumps:server:repositionBumpById`
- `smdz_speedbumps:server:deleteNearestBump`
- `smdz_speedbumps:server:acquireEditLock`
- `smdz_speedbumps:server:releaseEditLock`
- `smdz_speedbumps:server:releaseAllEditLocks`

```lua
-- Generic internal callback pattern from client side
-- (Use exports whenever possible for cleaner integrations.)
local function callBridge(endpoint, ...)
    return Bridge.Client.AwaitServer(endpoint, ...)
end

local allowed, key = callBridge('smdz_speedbumps:server:canUseAdmin')
if not allowed then
    print(('Denied: %s'):format(key or 'no_permission'))
    return
end

local bumps = callBridge('smdz_speedbumps:server:getBumpsFresh')
local count = 0
if type(bumps) == 'table' then
    for _ in pairs(bumps) do
        count += 1
    end
end
print(('Received bumps: %s'):format(tostring(count)))
```

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Short answer | Details / best practice |
|----------|--------------|-------------------------|
| Does the script support ESX, QBCore, and QBX? | Yes. | Use `Config.Framework = 'auto'` for automatic detection, or force one framework in config if your environment requires strict routing. |
| Can regular players create or edit speed bumps? | Not by default. | With `Config.AdminOnly = true`, only authorized admins can create, edit, delete, clone, and reposition bumps. |
| Is ACE enough to grant access? | Usually yes, if fallback is enabled. | Keep `Config.AllowAceFallback = true` and configure `Config.AllowedAce` in `server.cfg` for flexible admin grants. |
| Can I use framework permissions instead of ACE? | Yes. | Set `Config.FrameworkPermission` (string or table) and `Config.FrameworkAdminGroups` to match your server's role naming. |
| Is SQL import required? | Strongly recommended. | Import `database/smdz_speed_bumps.sql` before first launch to avoid bootstrap/storage issues. |
| Are create/update payloads trusted from client? | No. | All sensitive data is validated and sanitized server-side (coords, heading, speed, names, bypass jobs). |
| Why do admins see more data than players? | Intended behavior. | Admins get management metadata; regular users receive a public-safe payload to reduce unnecessary sensitive details. |
| Can two admins edit one bump at the same time? | No. | Edit-lock ownership blocks concurrent writes. Lock TTL is controlled by `Config.Concurrency.EditLockTtlMs`. |
| What happens if an admin disconnects while locking? | Locks are released. | `playerDropped` cleanup removes active locks for that source to avoid long-term stale ownership. |
| Are duplicate bump names allowed? | No. | Names are normalized and stored with a unique key (`bump_name_key`) to prevent duplicates. |
| Can bumps be too close to each other? | Not if validation is active. | Minimum spacing is enforced by `Config.RuntimeBehavior.MinBumpSpacing` during create/reposition. |
| Does it affect NPC traffic? | Configurable. | Use `Config.NpcBehavior.Enabled` and related values to control NPC slowdown scan behavior and load profile. |
| Can specific jobs bypass bump slowdown? | Yes. | Set `bypassJobs` per bump in the UI; values are sanitized and normalized server-side. |
| Can I fully restyle the UI? | Yes. | Edit CSS tokens in `shared/config_nui.lua` (`Config.NUI.Colors`) without touching the React source. |
| Can I switch language quickly? | Yes. | Change `Config.Language` to `en`, `es`, `fr`, or `de`. Locale files are aligned key-by-key. |
| Does it support custom notification systems? | Yes. | `bridge/client/notifications.lua` supports provider auto-resolution and multiple integrations. |
| Are public exports available? | Yes. | Client and server exports are available and documented in the Exports section. |
| Is there anti-abuse protection? | Yes. | Unauthorized repeated attempts are tracked and can trigger alerts/logs via `Config.Security.AbuseAlerts`. |
| Can I disable Discord logging? | Yes. | Set `Config.DiscordLogs.Enabled = false` or disable event-specific entries in `Config.DiscordLogs.Events`. |
| Is folder name important? | Critical. | Resource name validation is enforced; changing folder name can prevent startup. |

---

# 🚨 **COMMON PROBLEMS:**

| Symptom / message | Probable cause | How to fix now | Prevention |
|-------------------|----------------|----------------|------------|
| Resource does not start | Wrong folder name or missing `ensure` | Rename folder back to `smdz_speed_bumps`, then verify `ensure smdz_speed_bumps` | Keep release folder naming unchanged in all environments |
| `storage_unavailable` | `oxmysql` not started or DB unavailable | Start `oxmysql`, verify connection credentials, retry resource start | Ensure dependency order in `server.cfg` and monitor DB uptime |
| SQL schema errors on startup | SQL file not imported / broken DB permissions | Import `database/smdz_speed_bumps.sql` and grant correct DB privileges | Run schema migration in staging before production deploy |
| `callback_timeout` | Server callback did not respond within timeout | Check server console for framework/SQL exceptions and long blocking code | Keep DB responsive and avoid heavy synchronous work in callbacks |
| `missing_callback` | Callback name mismatch or not registered | Verify endpoint name exactly matches server registration | Centralize callback names in constants if you customize code |
| `no_permission` for admins | Permission mismatch (ACE/framework) | Validate ACE, `FrameworkPermission`, and `FrameworkAdminGroups` mapping | Document role mapping and keep a tested permission matrix |
| QBX admin cannot access UI | QBX role/group not mapped in config | Add role to `Config.FrameworkPermission` and/or `Config.FrameworkAdminGroups` | Standardize QBX staff role names across server resources |
| `duplicate_name` on create/update | Existing bump with same normalized name | Use a unique name and retry | Adopt naming convention (street + zone + index) |
| `too_close` on create/reposition | Violates minimum bump spacing | Place farther away or lower spacing value in config | Define city placement guidelines for staff |
| `bump_locked` during edit | Another admin currently owns lock | Wait for unlock/TTL, or coordinate with lock owner | Use internal admin SOP for lock ownership and edits |
| `bump_lock_required` on update/delete/reposition | Action called without lock acquisition | Open details and acquire lock first via Manage flow | Keep custom UI integrations aligned with lock workflow |
| `deleted_fail` when deleting nearest | No bump found in delete radius | Move closer to target bump or increase delete radius | Set a realistic `Config.RuntimeBehavior.DeleteRadius` |
| `invalid_input` on save | Payload fields missing/invalid types | Re-enter valid values (speed/name/coords) | Keep frontend validation and backend schema in sync |
| Bump prop not visible sometimes | Streaming distance/model issue | Check `Config.Stream` distances and model validity/loading | Keep model names stable and tune stream distances per map size |
| Vehicle slowdown feels too aggressive | `ReduceToPercent` too low or speed limits too strict | Increase `ReduceToPercent` or adjust per-bump speed values | Calibrate values by road class (residential/avenue/highway) |
| NPC traffic performance drops | High NPC scan cost | Tune `NpcBehavior` intervals/radius/max per tick | Benchmark on peak server hours and optimize incrementally |
| Notifications do not appear | Missing provider resource or wrong provider key | Set provider to `auto` or install/configure selected notification resource | Standardize one notification provider across your stack |
| Discord logs not sent | Invalid webhook or blocked outbound HTTP | Recheck `Config.DiscordLogs.Webhooks` and host network policy | Use one tested webhook per environment and monitor delivery |
| Manage list seems outdated | Client not refreshed after external changes | Use Manage refresh action or reopen menu | Keep all bump edits through this resource APIs only |
| Unexpected behavior after update | Config drift or partial overwrite | Restore backup configs and merge carefully | Always backup, diff, and stage-test before production rollout |

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

⚖️ If you rename the folder, the script will NOT function and may stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
