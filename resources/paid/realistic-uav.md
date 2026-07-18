<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/PCYTaXRWo9g"
    title="smdz_uav showcase"
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

[![](https://badges.5metrics.dev/smdz_uav/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_uav) | [![](https://badges.5metrics.dev/smdz_uav/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_uav)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_uav`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX (auto-detected)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

`smdz_uav` is a tactical UAV script with a synchronized physical aircraft, lockable aerial camera, SQL-backed cooldowns, and a React/Vite UI overlay.

---

# ⭐ **FEATURES:**

- 🛰️ **Physical synced UAV aircraft:** every connected player can see the same UAV entity in real time.
- 🎥 **Aerial camera with free look + lock point:** open/close with `E`, zoom with mouse wheel, and lock/unlock aim with `SPACE`.
- 🔍 **High zoom with anti-blur tuning:** configurable anti-DOF and minimum sharp FOV to reduce heavy blur on long zoom.
- 📡 **Live sweep pings:** periodic area scans with configurable radius, interval, and reveal time.
- 🧠 **Server-authoritative anti-spam:** one active UAV globally plus activation validation and cooldown protections.
- ⛔ **Vehicle-use protection:** optionally block usage in vehicles with localized error notification.
- 🎬 **Activation and camera tablet animation:** progress flow before spawn and persistent tablet animation while camera is open.
- 🔊 **Owner-ready sound effect:** plays `ui/uav.mp3` only for the player who activated the UAV.
- 🌍 **Multi-language system:** locale-driven text for gameplay/UI/debug/webhook with alias support in config.
- 🔔 **Notification bridge:** multiple providers supported through a single config entry.
- 🧾 **Action webhook logs:** rich server action logging without sending debug keys.
- 🧱 **Framework usable auto-registration:** native usable hooks for ESX, QBCore, and QBX.

---

# 📦 **REQUIREMENTS:**

- FiveM server with a recent artifact.
- `ox_lib`
- `oxmysql`
- One started framework:
  - `es_extended`
  - `qb-core`
  - `qbx_core`

Optional:

- `ox_inventory` (or your framework inventory with usable item support).
- Any supported notification resource listed in `modules/notify.lua`.

---

# 📥 **INSTALLATION:**

1. Place the resource in your server files:

```text
resources/[smdz]/smdz_uav
```

2. Ensure startup order in `server.cfg`:

```cfg
## SMDZ Studios
ensure ox_lib
ensure oxmysql
ensure smdz_uav
```

3. Import SQL:
   - `_INSTALL_FILES/cooldowns.sql`

4. Configure:
   - `config.lua`
   - inventory item definition from `_INSTALL_FILES/item.lua`

5. Restart:

```cfg
restart smdz_uav
```

---

# ⚙️ **CONFIGURATION:**

Main file:

- `config.lua`

```lua

-- =========================================================
-- CONFIG INDEX
-- 01) Core
-- 02) Framework Bridge
-- 03) Item
-- 04) Cooldown
-- 05) UAV Runtime
-- 06) Aerial Camera
-- 07) Speed Unit
-- 08) Use Animation
-- 09) Sweep Blip
-- 10) Notifications
-- 11) Webhook Logging
-- 12) Test Mode
-- 13) Locale Aliases
-- =========================================================

-- 01) Core
Config = {} -- Main configuration table for the resource.
Config.Debug = false -- Enables debug prints in client and server.
Config.Locale = 'en' -- Primary locale code used by the translation system.
Config.FallbackLocale = 'en' -- Fallback locale code when a key is missing.

-- 02) Framework Bridge
Config.Framework = { -- Framework detection and resource mapping settings.
    mode = 'auto', -- Detection mode: auto, esx, qbcore, qbx.
    prefer = 'esx', -- Preferred framework when mode is auto and multiple are running.
    resources = { -- Resource names used to resolve each framework runtime.
        esx = 'es_extended', -- ESX core resource name.
        qbcore = 'qb-core', -- QBCore resource name.
        qbx = 'qbx_core' -- QBX/Qbox core resource name.
    }
}

-- 03) Item
Config.ItemName = 'uavdevice' -- Item name consumed/used to activate the UAV.

-- 04) Cooldown
Config.Cooldown = { -- Cooldown system settings (persisted in SQL with oxmysql).
    enabled = true, -- Enables or disables the full cooldown system.
    global = { -- Global cooldown shared by all players.
        enabled = true, -- Enables or disables the global cooldown layer.
        duration = 120000 -- Global cooldown duration in milliseconds.
    },
    player = { -- Cooldown applied per player identifier.
        enabled = true, -- Enables or disables per-player cooldown.
        duration = 1200 -- Per-player cooldown duration in milliseconds.
    }
}

-- 05) UAV Runtime
Config.UAV = { -- Main UAV lifecycle and behavior settings.
    duration = 130000, -- Total UAV active duration in milliseconds.
    sweepInterval = 4000, -- Delay between sweep scans in milliseconds.
    revealTime = 2500, -- Time each sweep blip stays visible in milliseconds.
    planeModel = `alkonost`, -- GTA model hash/name for the physical UAV plane.
    pilotModel = `s_m_m_pilot_02`, -- GTA model hash/name for the UAV pilot ped.
    planeHeight = 300.0, -- Flight altitude offset relative to the activation center.
    planeSpeed = 15.0, -- Cruise speed used by plane task natives.
    spawnDistance = 1500.0, -- Distance behind/away from center where the plane spawns.
    despawnDistance = 2100.0, -- Distance ahead from center used for the normal exit route.
    radius = 350.0, -- Detection radius for sweep target acquisition.
    onlyShowOthers = true, -- Excludes activator from target list when true.
    requireAlive = true, -- Requires target players to be alive to be detected.
    allowInVehicle = false, -- Allows UAV usage while inside a vehicle when true.
    inVehicleNotifyKey = 'notify.in_vehicle_denied', -- Locale key used when UAV activation is denied in a vehicle.
    inVehicleNotifyType = 'error', -- Notification type used when UAV activation is denied in a vehicle.
    consumeItem = true, -- Removes the configured item when activation starts.
    destroyable = true, -- Allows players to destroy the UAV aircraft.
    destroyReportMaxDistance = 3500.0, -- Max valid distance for server destroy report checks.
    gracefulEnd = true, -- Makes the plane fly away instead of deleting instantly on normal end.
    endFlyAwayDistance = 4000.0, -- Distance the plane must travel during graceful end before cleanup.
    endFlyAwaySpeed = 45.0, -- Plane speed used during graceful fly-away phase.
    endFlyAwayTimeout = 180000 -- Failsafe timeout for graceful end cleanup in milliseconds.
}

-- 06) Aerial Camera

-- WARNING --
--- DUE TO TECHNICAL LIMITATIONS IN FIVEM, IT IS NORMAL FOR THE IMAGE TO APPEAR BLURRY WHEN YOU ZOOM IN OR FOR SOME TEXTURES TO FAIL TO LOAD WHEN VIEWED FROM THE AIR.
--- THIS IS NOT A PROBLEM WITH SMDZ STUDIOS.
--- TO AVOID THIS, WE RECOMMEND SETTING THE PLANE TO FLY ABOUT 300 METERS ABOVE THE GROUND

Config.AerialCam = { -- Camera controls and zoom/lock tuning.
    offset = vector3(0.0, 0.0, -1.5), -- Camera attach offset relative to UAV plane.
    defaultPitch = -89.0, -- Initial camera pitch when opening aerial camera.
    defaultFov = 70.0, -- Initial camera FOV when opening aerial camera.
    lookSensitivity = 8.0, -- Mouse/gamepad look sensitivity multiplier.
    zoomStep = 3.0, -- FOV step applied per wheel zoom input.
    minPitch = -89.0, -- Minimum allowed camera pitch.
    maxPitch = -20.0, -- Maximum allowed camera pitch.
    minFov = 5.0, -- Minimum allowed FOV (higher zoom).
    maxFov = 85.0, -- Maximum allowed FOV (lower zoom).
    lockOnSpace = true, -- Enables target lock toggle using SPACE.
    lockDistance = 4000.0, -- Max trace distance used when creating lock point.
    antiBlur = { -- Camera sharpness controls for high zoom situations.
        enabled = true, -- Enables anti-blur treatment while aerial camera is active.
        disableDof = true, -- Disables depth-of-field blur in the UAV camera.
        disableMotionBlur = true, -- Forces camera motion blur strength to zero.
        minSharpFov = 8.0 -- Optional floor for effective minimum FOV to keep image sharper.
    }
}

-- 07) Speed Unit
Config.SpeedUnit = 'kmh' -- Speed telemetry unit: kmh or mph.

-- 08) Use Animation
Config.UseAnim = { -- Activation and camera tablet animation settings.
    enabled = true, -- Enables tablet animation flow and progressbar.
    duration = 15000, -- Activation animation/progress duration in milliseconds.
    progressLabelKey = 'ui.progress.activating_uav', -- Locale key shown in progressbar label.
    dict = 'amb@code_human_in_bus_passenger_idles@female@tablet@idle_a', -- Animation dictionary.
    name = 'idle_a', -- Animation name inside the configured dictionary.
    propModel = 'prop_cs_tablet', -- Prop model attached while animation is active.
    boneIndex = 28422, -- Ped bone index used to attach the prop.
    propPlacement = vector3(-0.05, 0.0, 0.0), -- Prop position offset relative to attached bone.
    rotation = vector3(0.0, -90.0, 0.0), -- Prop rotation offset relative to attached bone.
    flag = 51 -- Animation task flag (rpemotes-style moving flag).
}

-- 09) Sweep Blip
Config.Blip = { -- Blip visual settings for sweep targets.
    sprite = 161, -- Blip sprite ID.
    scale = 0.9, -- Blip scale multiplier.
    colour = 1, -- Blip color ID.
    display = 2, -- Blip display mode.
    shortRange = true, -- Short-range visibility behavior.
    nameKey = 'blip.enemy_ping' -- Locale key used as blip label text.
}

-- 10) Notifications
Config.Notify = { -- Notification bridge and payload defaults.
    provider = 'origen_notify',
    -- Provider: auto, ox_lib, esx, qbcore, okoknotify, origen_notify, wasabi_notify, wasabi_uikit,
    -- rtx_notify, codem-notification, vms_notifyv2, esx_notify, brutal_notify, fl-notify, gtm-ui.
    title = 'UAV', -- Default notification title.
    duration = 3500, -- Default notification duration in milliseconds.
    position = 'top', -- Default notification position when provider supports it.
    subtitle = '', -- Default subtitle for providers that support subtitle field.
    icon = nil, -- Optional default icon for providers that support icon field.
    color = nil, -- Optional default color for providers that support custom color.
    id = nil, -- Optional notification ID for providers with update/replace behavior.
    sound = true -- Enables sound on providers that support a sound flag.
}

-- 11) Webhook Logging
Config.Webhook = { -- Discord webhook logging settings for server actions.
    enabled = false, -- Enables webhook logging when true.
    url = 'https://discord.com/api/webhooks/xxxxx', -- Discord webhook URL.
    username = 'SMDZ UAV', -- Webhook sender username.
    avatarUrl = '', -- Optional webhook avatar URL.
    titleKey = 'webhook.title', -- Locale key used as embed title.
    titleUppercase = true, -- Forces webhook embed title to uppercase.
    titleSuffix = ':', -- Suffix appended to webhook title if missing.
    mention = '', -- Optional mention content (example: <@&ROLE_ID>).
    useEmbeds = true, -- Sends logs as embeds when true, plain text when false.
    includeAction = true, -- Adds action key field to webhook payload.
    includeSource = true, -- Adds source/player ID field when available.
    includePlayerName = true, -- Adds player name field when available.
    includeCharacterName = true, -- Adds framework character full name field when available.
    includeIdentifiers = true, -- Adds all player identifiers (license/discord/etc).
    color = 5763719 -- Default embed color used for action logs (decimal value).
}

-- 12) Test Mode
Config.TestMode = { -- Fake contact generation settings for testing.
    enabled = false, -- Enables fake sweep targets.
    fakeCount = 2, -- Number of fake targets generated per sweep.
    fakeRadius = 550.0, -- Radius around UAV center where fake targets can spawn.
    showRealPlayers = true -- Mixes real players with fake targets when true.
}

-- 13) Locale Aliases
Config.LocaleAliases = { -- Locale alias map (left side) to canonical locale code (right side).
    ['en-us'] = 'en', -- Maps English (US) to en.
    ['en-gb'] = 'en', -- Maps English (UK) to en.
    ['es-es'] = 'es', -- Maps Spanish (Spain) to es.
    ['fr-fr'] = 'fr', -- Maps French (France) to fr.
    ['de-de'] = 'de', -- Maps German (Germany) to de.
    ['tr-tr'] = 'tr', -- Maps Turkish (Turkey) to tr.
    ['pt-br'] = 'pt-br', -- Maps Portuguese (Brazil) to pt-br.
    ['pt-pt'] = 'pt' -- Maps Portuguese (Portugal) to pt.
}
```

---

# 🎒 **INVENTORY & USABLES:**

Default item:

- `Config.ItemName = 'uavdevice'`

Install templates:

- `_INSTALL_FILES/item.lua`

Native usable registration:

- ESX: `ESX.RegisterUsableItem(...)`
- QBCore: `QBCore.Functions.CreateUseableItem(...)`
- QBX: `exports.qbx_core:CreateUseableItem(...)`

Server export for inventory integrations:

```lua
exports('useUAVItem', useUAVItem)
```

---

# 🎮 **PLAYER FLOW & CONTROLS:**

1. Use the UAV item.
2. Wait until activation animation/progress completes.
3. Press `E` to open/close aerial camera.
4. Use mouse wheel to adjust zoom.
5. Press `SPACE` to lock/unlock target point.

Behavior notes:

- UAV spawn is server-authorized only after activation completion.
- Only one UAV can be active globally.
- If UAV is destroyed, UAV data stops and owner camera is closed.
- If graceful end is enabled, UAV flies away first, then despawns by distance/timeout.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

## 📋 **ALL EVENTS TABLE:**

| Event name | Type | Side | Direction | File | Purpose |
|---|---|---|---|---|---|
| `onResourceStart` | `AddEventHandler` | Server | Lifecycle | `server/server.lua` | Prints startup banner |
| `smdz_uav:server:forceEnd` | `RegisterNetEvent` | Server | Client -> Server | `server/server.lua` | Owner force-end request |
| `smdz_uav:server:activationFinished` | `RegisterNetEvent` | Server | Client -> Server | `server/server.lua` | Validates activation completion |
| `smdz_uav:server:reportDestroyed` | `RegisterNetEvent` | Server | Client -> Server | `server/server.lua` | Validates destroy report |
| `playerJoining` | `AddEventHandler` | Server | Lifecycle | `server/server.lua` | Syncs active UAV to joiner |
| `playerDropped` | `AddEventHandler` | Server | Lifecycle | `server/server.lua` | Clears pending state and owner UAV |
| `onServerResourceStart` | `AddEventHandler` | Server | Lifecycle | `modules/usables.lua` | Re-registers usable on framework restart |
| `smdz_uav:client:notify` | `RegisterNetEvent` | Client | Server -> Client | `client/client.lua` | Receives bridged notifications |
| `smdz_uav:client:beginActivation` | `RegisterNetEvent` | Client | Server -> Client | `client/client.lua` | Starts activation sequence |
| `smdz_uav:client:startUAV` | `RegisterNetEvent` | Client | Server -> Client | `client/client.lua` | Spawns/syncs UAV entity |
| `smdz_uav:client:sweep` | `RegisterNetEvent` | Client | Server -> Client | `client/client.lua` | Receives sweep targets |
| `smdz_uav:client:endUAV` | `RegisterNetEvent` | Client | Server -> Client | `client/client.lua` | Ends UAV and cleanup |
| `onResourceStop` | `AddEventHandler` | Client | Lifecycle | `client/client.lua` | Full client cleanup |

## 📤 **TRIGGER MAP:**

| Trigger | From | To | Purpose |
|---|---|---|---|
| `TriggerServerEvent(...)` | Client | `smdz_uav:server:activationFinished` | Finish activation handshake |
| `TriggerServerEvent(...)` | Client | `smdz_uav:server:reportDestroyed` | Report UAV destruction |
| `TriggerClientEvent(...)` | Server | `smdz_uav:client:beginActivation` | Begin activation UI flow |
| `TriggerClientEvent(...)` | Server | `smdz_uav:client:startUAV` | Start/sync UAV for clients |
| `TriggerClientEvent(...)` | Server | `smdz_uav:client:sweep` | Broadcast sweep contacts |
| `TriggerClientEvent(...)` | Server | `smdz_uav:client:endUAV` | End UAV for all clients |
| `TriggerClientEvent(...)` | Server | `smdz_uav:client:notify` | Send unified notification payload |

## 🧰 **EXPORTS TABLE:**

| Export | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| `useUAVItem` | Server | `event, item, inventory, slot, data` | `boolean` | Universal item-use handler for inventory bridges |

---

# 🛰️ **WEBHOOK ACTION LOGGING:**

Webhook module:

- `modules/webhook.lua`

Important behavior:

- Debug keys are always filtered (`debug.*` never sent).
- Footer is fixed to `SMDZ STUDIOS - SCRIPT UAV`.
- Titles are uppercase, emoji-prefixed, and suffix-normalized (`:`).
- Optional fields include source, player name, character name, and identifiers.

## 📑 **ACTION CATALOG:**

| Action key | Meaning |
|---|---|
| `webhook.action.item_use_requested` | Player attempted to use UAV item |
| `webhook.action.item_use_denied_vehicle` | Use denied because player is in vehicle |
| `webhook.action.item_use_denied_player_cooldown` | Use denied by per-player cooldown |
| `webhook.action.item_use_denied_unavailable` | Use denied by active/global lock |
| `webhook.action.item_consumed` | Item was consumed successfully |
| `webhook.action.item_consume_failed` | Item consume failed |
| `webhook.action.activation_requested` | Activation requested |
| `webhook.action.activation_denied_busy` | Activation denied due to pending activation |
| `webhook.action.activation_denied_cannot_activate` | Activation denied by runtime checks |
| `webhook.action.activation_started` | Activation process started |
| `webhook.action.activation_timeout` | Activation timed out |
| `webhook.action.activation_finished_rejected` | Activation finish rejected |
| `webhook.action.activation_finished_ok` | Activation finish accepted |
| `webhook.action.activate_failed_no_ped` | Activation failed due to invalid ped |
| `webhook.action.uav_started` | UAV started |
| `webhook.action.uav_ended` | UAV ended |
| `webhook.action.force_end` | Owner force-ended UAV |
| `webhook.action.owner_left` | Owner disconnected |
| `webhook.action.player_join_sync` | Join sync was sent |
| `webhook.action.destroy_report_rejected` | Destroy report rejected |
| `webhook.action.destroy_report_accepted` | Destroy report accepted |

---

# 🔔 **NOTIFICATION PROVIDERS:**

Bridge file:

- `modules/notify.lua`

Supported `Config.Notify.provider` values:

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


---

# 🧾 **DATABASE:**

Install SQL:

- `_INSTALL_FILES/cooldowns.sql`

Table:

- `smdz_uav_cooldowns`

```sql
-- SMDZ UAV cooldown persistence table (oxmysql)
CREATE TABLE IF NOT EXISTS `smdz_uav_cooldowns` (
    `cooldown_key` VARCHAR(168) NOT NULL,
    `expires_at` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`cooldown_key`),
    KEY `expires_at` (`expires_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```

Both global and player cooldown values are persisted in SQL when enabled.

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| Is this script standalone-compatible? | No. It targets ESX, QBCore, and QBX only. |
| Can two UAVs be active at the same time? | No. Only one active UAV exists globally. |
| Can two players activate at the same time? | No. Activation is serialized server-side (`activationInProgress`) to prevent overlap abuse. |
| Is cooldown persistent after restart? | Yes, via `oxmysql` and `smdz_uav_cooldowns`. |
| Are both global and player cooldowns stored in SQL? | Yes. The script persists both keys (`global` and `player:<identifier>`) when each layer is enabled. |
| Can I disable cooldowns for testing? | Yes. Use `Config.TestMode.enabled = true` or disable cooldown blocks in `Config.Cooldown`. |
| Can I disable only one cooldown layer? | Yes. You can toggle `Config.Cooldown.global.enabled` and `Config.Cooldown.player.enabled` independently. |
| Can UAV be destroyed by players? | Yes, when `Config.UAV.destroyable = true`. |
| Who gets notified when the UAV is destroyed? | The owner gets a destruction alert, and the attacker can get a success alert; no attacker name is required in owner notification. |
| Can UAV usage be blocked inside vehicles? | Yes, with `Config.UAV.allowInVehicle = false`. |
| Is vehicle validation done only on client? | No. Vehicle restriction is enforced on the server in item use and activation finish validation. |
| Why does item use fail? | Common reasons: cooldown, active UAV, in-vehicle restriction, or item consume failure. |
| Can I avoid consuming the item on use? | Yes. Set `Config.UAV.consumeItem = false`. |
| Where do I configure item integration? | `_INSTALL_FILES/item.lua` |
| Does the script support ox_inventory export usage? | Yes. Use `exports('useUAVItem', useUAVItem)` from this resource in your inventory item definition. |
| Does the script auto-register framework usables? | Yes, for ESX, QBCore, and QBX through `modules/usables.lua`. |
| Is there a direct test command? | No. Current flow is item-based. |
| Can I use fake targets for QA/demo? | Yes. Enable `Config.TestMode.enabled` and tune `fakeCount`, `fakeRadius`, and `showRealPlayers`. |
| Can I switch speed metrics? | Yes, `Config.SpeedUnit = 'kmh'` or `'mph'`. |
| Does camera lock exist? | Yes. `SPACE` toggles lock when enabled. |
| Can I disable lock-on behavior? | Yes. Set `Config.AerialCam.lockOnSpace = false`. |
| Can I tune max zoom? | Yes. Adjust `Config.AerialCam.minFov`, `maxFov`, and `zoomStep`. |
| Can I tune blur behavior at high zoom? | Yes. Use `Config.AerialCam.antiBlur` settings, especially `minSharpFov`. |
| Does the UAV disappear instantly on end? | Not if graceful end is enabled. It can fly away first (`Config.UAV.gracefulEnd`) and despawn after distance/timeout. |
| Can I increase UAV time in the air? | Yes. Increase `Config.UAV.duration` (milliseconds). |
| What frameworks are detected automatically? | ESX, QBCore, and QBX using the mapping in `Config.Framework.resources`. |
| Can I customize locale aliases? | Yes. Edit `Config.LocaleAliases` (for example `en-us` -> `en`). |
| Are debug logs translated? | Yes. Debug prints are key-based locale entries. |
| Can I customize webhook footer text? | No. Footer is fixed by design. |
| Are debug logs sent to webhook? | No. Debug webhook logs are intentionally blocked. |
| Can webhook include character names and identifiers? | Yes. Enable or disable those fields in `Config.Webhook` (`includeCharacterName`, `includeIdentifiers`, etc.). |
| What if no supported notification script is installed? | The bridge can fall back to `ox_lib` or native feed notification behavior depending on runtime availability. |
| Do I need to build UI after UI source changes? | Yes, rebuild `ui` and restart the resource. |
| Is this script compatible with renamed resource folder names? | No. Keep folder/resource name as `smdz_uav` to avoid validation stop logic. |

---

# 🧪 **COMMON ISSUES:**

| Problem | Likely cause | Fix |
|---|---|---|
| Resource does not start | Wrong startup order or missing dependency | Ensure `ox_lib` and `oxmysql` start before `smdz_uav`. |
| Resource starts but immediately stops | Folder name validation failed | Keep exact resource name as `smdz_uav` and avoid renaming the folder. |
| `No such export useUAVItem` | Resource not started or wrong folder name | Ensure resource name is exactly `smdz_uav` and started. |
| SQL cooldown errors | SQL missing or DB unavailable | Import `_INSTALL_FILES/cooldowns.sql` and verify `oxmysql` state. |
| Cooldown table exists but cooldown seems ignored | Cooldown disabled in config or TestMode bypass active | Check `Config.Cooldown.enabled`, per-layer toggles, and `Config.TestMode.enabled`. |
| Cooldown never clears | Stale row or wrong server clock | Validate cooldown values in `smdz_uav_cooldowns` and check host time sync. |
| Item does nothing | Usable not registered or wrong item name | Check `Config.ItemName` and framework usable registration. |
| Usable works in one framework but not another | Wrong core resource name mapping | Verify `Config.Framework.resources` matches your real resource names. |
| Item is not removed | Inventory/framework mismatch | Verify item exists and framework remove function path. |
| Item removed but UAV never spawns | Activation not finalized or blocked by validation | Check activation progress completion and server logs for rejection reason. |
| Activation denied in vehicle | Vehicle restriction enabled | Set `Config.UAV.allowInVehicle = true` if desired. |
| Activation denied randomly under load | Another activation pending | Wait for current activation to finish/timeout; serialized activation is intentional. |
| Camera does not open | Activation not completed yet | Wait until progress ends, then press `E`. |
| Camera does not close | Input conflict or stale keybind | Verify controls and test without conflicting scripts. |
| Camera closes unexpectedly | UAV ended (destroyed/timeout/owner left) | Check end reason in webhook/server debug and confirm UAV still active. |
| UAV ends unexpectedly | Destroyed, timeout, owner left, force end | Check webhook action history and server logs. |
| UAV is never destroyable | Destroyable flag disabled | Set `Config.UAV.destroyable = true` and verify plane/pilot damage flags are not overridden by other scripts. |
| Destroy report rejected | Validation failed (distance/id/source) | Increase `Config.UAV.destroyReportMaxDistance` if needed and review logs. |
| Destroy report accepted but no notification | Notification provider issue | Validate `Config.Notify.provider`, provider resource state, and mapped notify types. |
| No sweep targets shown | No players in radius or filters too strict | Increase `Config.UAV.radius` and review `onlyShowOthers` / `requireAlive`. |
| Sweep only shows fake contacts | Test mode configuration | Check `Config.TestMode.enabled` and `showRealPlayers`. |
| Heavy zoom blur | Very low FOV and GTA/FiveM stream limits | Increase `Config.AerialCam.antiBlur.minSharpFov` and/or reduce max zoom. |
| Zoom feels too aggressive | Zoom step too high | Lower `Config.AerialCam.zoomStep`. |
| Lock-on with `SPACE` does nothing | Lock feature disabled or no valid trace | Set `Config.AerialCam.lockOnSpace = true` and test with clear line of sight. |
| UAV plane is too low/high | Plane height mismatch for map area | Tune `Config.UAV.planeHeight` for your environment. |
| UAV speed feels too fast/slow | Plane speed values too high/low | Adjust `Config.UAV.planeSpeed` and graceful end speed (`endFlyAwaySpeed`). |
| Bottom control/key hint UI spacing looks wrong | Old UI build still loaded | Rebuild `ui`, clear cache, restart resource. |
| Notifications missing | Provider not installed or wrong config | Set `Config.Notify.provider` to an installed provider. |
| Wrong notification style/type | Provider type mapping mismatch | Use supported type names for your selected provider and test with `info/success/error/warning`. |
| Webhook empty | Disabled or invalid URL | Check `Config.Webhook.enabled` and `Config.Webhook.url`. |
| Webhook shows action keys instead of text | Missing locale key for that action | Add/fix `webhook.action.*` translation keys in locale files. |
| Webhook missing character name | Framework character fields unavailable | Verify player identity data in framework and keep `includeCharacterName = true`. |
| Debug appears in console but not in Discord | Expected behavior | Debug categories are intentionally filtered from webhook output. |
| Locale fallback shows key text | Missing translation in selected locale | Add the missing key to locale file or rely on fallback locale (`Config.FallbackLocale`). |
| Emoji text looks broken in editor | Wrong file encoding view | Open files as UTF-8 and save as UTF-8 (no BOM). |


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
