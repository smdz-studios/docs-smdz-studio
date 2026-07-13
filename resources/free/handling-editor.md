<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/NDmZxcKt1nk"
    title="smdz_handling_editor showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_handling_editor/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_handling_editor) | [![](https://badges.5metrics.dev/smdz_handling_editor/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_handling_editor)

</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_handling_editor`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.1.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>


**Short description:**
`SMDZ Handling Editor` allows authorized staff or developers to edit vehicle handling values live from an animated in-game interface, save temporary presets, restore original values, and export a ready-to-use `handling.meta` XML entry.

**The free edition is protected with FiveM Asset Escrow while keeping configuration, locales, notification integrations, and private server settings editable. A paid open-source edition can be offered separately for customers who require unrestricted code access and deeper customization.**

---

# ⭐ **FEATURES:**

:zap: Real-Time Editing — Modify vehicle handling values instantly while staying inside the game.

:car: Live Vehicle Testing — Drive, brake, turn, and test every change without restarting the resource.

:bar_chart: 36 Editable Handling Values — Adjust engine power, top speed, braking, traction, steering, suspension, weight, damage, and more.

:floppy_disk: Preset System — Save, load, and delete temporary handling presets during your current session.

:page_facing_up: handling.meta Export — Generate a complete XML configuration ready to copy into your handling.meta file.

:clipboard: One-Click XML Copy — Copy the generated handling data directly from the export window.

:mag: Search and Categories — Quickly find values using the search bar or organized handling categories.

:art: Configurable UI Colors — Customize the full interface color palette without rebuilding the React project.

:bell: Notification Bridge — Compatible with multiple notification providers through an easy-to-edit bridge.

:shield: ACE Permission Support — Restrict access to authorized staff members, developers, or specific server groups.

:bar_chart: Discord Webhook Logs — Optional translated embeds with detailed information about editor activity.


---

# 💻 **PLANNED EDITIONS:**

| Edition | Planned availability | Source access | Editable areas | Intended audience |
|---|---|---|---|---|
| **Free Escrow Edition** | Free | Protected core through FiveM Asset Escrow | Shared config, UI colours, locales, notification bridge, and private server configuration | Server owners who want a ready-to-use handling editor |
| **Paid Open Source Edition** | Paid | Full source access, subject to the supplied licence | Complete resource and integration logic | Developers who need extensive modifications, custom systems, or resale-project integration |

> Final pricing, licence terms, included files, and support conditions are defined by the official store listing for each edition.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** A current recommended FiveM artifact.
- **Framework:** Standalone. ESX, QBCore, and Qbox are not required.
- **Permissions:** ACE permissions are enabled by default.
- **Optional notification integrations:**
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
  - `RO_Notify`
  - `RxNotify`
  - Native GTA notification or chat fallback

Optional providers are only required when selected in `Config.Notifications.Provider` or detected by the automatic notification bridge.

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_handling_editor.zip`.
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_handling_editor
```

3. Keep the resource folder name exactly as:

```text
smdz_handling_editor
```

4. Add the resource and ACE permission to your `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_handling_editor
add_ace group.admin smdz.handling allow
```

5. Assign your staff to the correct ACE group. Example:

```bash
add_principal identifier.license:YOUR_LICENSE_HERE group.admin
```

6. Restart your server or start the resource manually:

```bash
start smdz_handling_editor
```

7. Check the server console. A successful resource-name validation message should appear.

---

# ⚙️ **CONFIGURATION FILE:**
All in `config.lua`:

```lua
Config = {}

--[[
    ╔══════════════════════════════════════════════════════════════════════════╗
    ║                    SMDZ STUDIOS • HANDLING EDITOR                       ║
    ║                         SHARED CONFIGURATION                            ║
    ╚══════════════════════════════════════════════════════════════════════════╝

    IMPORTANT:
    • This file is shared with clients. Never place webhooks, passwords,
      API keys, tokens, or any other private value in this file.
    • Server-only and sensitive settings are stored in server/config.lua.

    CONFIGURATION INDEX
    [01] General settings
    [02] Access and vehicle restrictions
    [03] Editor behaviour and controls
    [04] Notification settings
    [05] Preset settings
    [06] User interface settings
    [07] Export settings
    [08] Logging events
    [09] Handling categories and field overrides
]]

--============================================================================--
-- [01] GENERAL SETTINGS
--============================================================================--

Config.General = {
    -- Language used by notifications, UI labels, and webhook embeds.
    -- Available: 'en', 'es', 'fr', 'de', 'pt', 'tr', 'it', 'nl'.
    Locale = 'en',

    -- Command used to open or close the handling editor.
    Command = 'handling',

    -- Human-readable resource name used in notifications and chat suggestions.
    ResourceLabel = 'SMDZ Handling Editor',

    -- Enables additional console prints intended for development and debugging.
    Debug = false,
}

--============================================================================--
-- [02] ACCESS AND VEHICLE RESTRICTIONS
--============================================================================--

Config.Access = {
    -- Enables ACE permission checks before a player can open the editor.
    Enabled = true,

    -- ACE permission required when access validation is enabled.
    -- Example server.cfg: add_ace group.admin smdz.handling allow
    AcePermission = 'smdz.handling',

    -- Allows the command to be executed from the server console.
    -- The editor itself still requires a player, so this should normally be false.
    AllowConsole = false,

    -- Requires the player to occupy the driver seat before opening the editor.
    DriverOnly = true,

    -- Optional vehicle model whitelist.
    -- Leave empty to allow every model that is not explicitly blocked.
    -- Example: { 'sultan', 'adder', `police` }
    AllowedModels = {},

    -- Optional vehicle model blacklist.
    -- Example: { 'rhino', 'lazer', `oppressor2` }
    BlockedModels = {},

    -- GTA vehicle class IDs that cannot be edited.
    -- Leave empty to support every vehicle class.
    -- Example: { 14, 15, 16 } -- Boats, helicopters, planes.
    BlockedClasses = {},
}

--============================================================================--
-- [03] EDITOR BEHAVIOUR AND CONTROLS
--============================================================================--

Config.Editor = {
    -- Keeps normal game controls active while the NUI has focus.
    -- Keep this false to prevent the camera and vehicle controls from moving.
    KeepGameInput = false,

    -- Explicitly disables camera/look controls while the editor is open.
    BlockCameraMovement = true,

    -- Duration in milliseconds of the UI closing animation before focus is released.
    CloseAnimationDuration = 240,

    -- Control ID used to close the editor from the game.
    -- 177 is BACKSPACE / Phone Cancel. Use false to disable this control shortcut.
    CloseControl = 177,

    -- Automatically closes the editor when the player leaves the edited vehicle.
    CloseWhenLeavingVehicle = true,

    -- Automatically closes the editor when the edited vehicle is destroyed.
    CloseWhenVehicleIsDestroyed = true,

    -- Maximum distance in metres allowed between the player and edited vehicle.
    -- Use 0 or false to disable the distance check.
    MaxVehicleDistance = 8.0,

    -- Restores original values if this resource stops while the editor is open.
    ResetChangesOnResourceStop = false,

    -- Game control IDs disabled every frame while the editor is open.
    DisabledControls = {
        24, 25, 47, 58, 140, 141, 142, 143, 177, 200, 257, 263, 264,
    },

    -- Camera and look control IDs disabled every frame when BlockCameraMovement is true.
    CameraControls = {
        1, 2, 3, 4, 5, 6, 26,
    },
}

--============================================================================--
-- [04] NOTIFICATION SETTINGS
--============================================================================--

Config.Notifications = {
    -- Enables every notification sent by the resource.
    Enabled = true,

    -- Notification provider to use.
    -- Use 'auto' to follow the priority configured in bridge/notifications.lua.
    -- Built-in values: auto, ox_lib, okokNotify, origen_notify, wasabi_notify,
    -- wasabi_uikit, rtx_notify, codem-notification, vms_notifyv2, esx_notify,
    -- brutal_notify, FL-Notify, gtm-ui, RO_Notify, RxNotify, chat, native, none.
    Provider = 'auto',

    -- Provider used when the selected provider is unavailable or returns an error.
    Fallback = 'chat',

    Defaults = {
        -- Default notification title.
        Title = 'SMDZ Handling Editor',

        -- Optional subtitle used by providers that support one.
        Subtitle = 'SMDZ Studios',

        -- Default type: info, success, warning, or error.
        Type = 'info',

        -- Default notification duration in milliseconds.
        Duration = 5000,

        -- Default screen position used by compatible providers.
        Position = 'top-right',

        -- Default icon used by compatible providers.
        Icon = 'fa-solid fa-sliders',

        -- Default accent colour used by compatible providers.
        Color = '#d8ac45',

        -- Enables notification sounds when supported by the provider.
        Sound = true,

        -- Enables text-to-speech when supported by the provider.
        TTS = false,

        -- Enables confetti effects when supported by the provider.
        Confetti = false,
    },

    ProviderOptions = {
        RxNotify = {
            -- RxNotify position: tl, tc, tr, lc, rc, bl, bc, or br.
            Position = 'tr',
        },
    },

    -- Prefix shown by the built-in chat fallback.
    ChatPrefix = 'SMDZ Studios',

    -- RGB colour shown by the built-in chat fallback.
    ChatColor = { 218, 171, 57 },
}

--============================================================================--
-- [05] PRESET SETTINGS
--============================================================================--

Config.Presets = {
    -- Maximum number of presets stored during the current player session.
    Maximum = 20,

    -- Maximum number of characters allowed in a preset name.
    MaximumNameLength = 32,

    -- Allows saving over an existing preset with the same name.
    AllowOverwrite = true,
}

--============================================================================--
-- [06] USER INTERFACE SETTINGS
--============================================================================--

Config.Interface = {
    -- Default editor panel width in pixels.
    PanelWidth = 640,

    -- Initial editor position in pixels from the top-left corner.
    DefaultPosition = {
        x = 24,
        y = 24,
    },

    -- Number of decimal places displayed in numeric fields.
    -- The UI clamps visible precision to a maximum of four decimals.
    DecimalPrecision = 3,
}

-- The SMDZ Studios brand, UI animations, and technical field names are
-- intentionally enabled by the resource and are not configurable.
-- Edit every UI colour from config_ui_colors.lua without rebuilding React.

--============================================================================--
-- [07] EXPORT SETTINGS
--============================================================================--

Config.Export = {
    -- Enables the handling.meta XML export button and NUI callback.
    Enabled = true,

    -- Converts the exported handling name to uppercase.
    HandlingNameUppercase = true,

    -- Shows the copy-to-clipboard button inside the export modal.
    CopyButton = true,
}

--============================================================================--
-- [08] LOGGING EVENTS
--============================================================================--

Config.Logging = {
    -- Enables audit event processing globally.
    -- Webhook delivery still depends on server/config.lua.
    Enabled = true,

    Events = {
        -- Logs editor opening events.
        open = true,

        -- Logs editor closing events.
        close = true,

        -- Logs handling reset events.
        reset = true,

        -- Logs handling XML export events.
        export = true,

        -- Logs preset creation and overwrite events.
        preset_save = true,

        -- Logs preset loading events.
        preset_load = true,

        -- Logs preset deletion events.
        preset_delete = true,
    },
}

--============================================================================--
-- [09] HANDLING CATEGORIES AND FIELD OVERRIDES
--============================================================================--

Config.Handling = {
    -- Category display order used by the UI navigation tabs.
    CategoryOrder = {
        'engine',
        'brakes',
        'traction',
        'suspension',
        'damage',
    },

    EnabledCategories = {
        -- Enables engine, drivetrain, speed, mass, and drag values.
        engine = true,

        -- Enables brake, handbrake, and steering values.
        brakes = true,

        -- Enables tyre grip and traction values.
        traction = true,

        -- Enables suspension, anti-roll, and ride-height values.
        suspension = true,

        -- Enables collision, weapon, deformation, and engine damage values.
        damage = true,
    },

    -- Overrides individual catalog fields without editing shared/handling_catalog.lua.
    -- Supported keys: enabled, min, max, step, type, category.
    -- Example:
    -- FieldOverrides = {
    --     fInitialDriveForce = { min = 0.05, max = 1.25, step = 0.01 },
    --     fWeaponDamageMult = { enabled = false },
    -- }
    FieldOverrides = {},
}

```

---

# 🎮 **USAGE:**

The editor changes supported handling values live on the vehicle currently driven by the authorized player. Changes are applied to the current vehicle entity and are not written permanently to any server file.

### Recommended workflow

1. Enter the vehicle you want to tune and sit in the driver seat.
2. Run `/handling`.
3. Search or browse the available categories.
4. Adjust values gradually and test the vehicle after each meaningful change.
5. Save temporary presets when comparing different setups.
6. Use **Reset** to restore the values captured when the editor was opened.
7. Use **Export** when the setup is ready.
8. Copy the generated XML and apply it manually to the correct `handling.meta` entry.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/handling` | Opens or closes the live handling editor. | Requires `smdz.handling` by default. The player must be driving a valid vehicle. |

### Keybinds and controls

- `ESC` – closes the current modal first, then requests the editor close animation.
- `BACKSPACE` – closes the editor by default through control ID `177`.
- Mouse movement is captured by the NUI while the editor is open.
- No default key is assigned to open the editor. Use `/handling` or a secure integration built around the exports.
- The close control can be changed with `Config.Editor.CloseControl`.


### Important behaviour

- Presets are session-only and are not stored in a database.
- Exporting XML does not edit files automatically.
- The editor clamps every value to the configured minimum and maximum.
- Another handling resource may overwrite live changes while both resources are active.
- Deleting the vehicle entity, restarting the resource, reconnecting, or restarting the server can remove temporary live changes.
- Permanent server-wide tuning should be applied to the vehicle's actual `handling.meta` file and tested after a resource restart.

---


# 🧰 **EDITABLE HANDLING VARIABLES:**

The default catalog contains **36 editable handling fields**. Every value is validated and clamped client-side before being applied.

- Disable complete categories with `Config.Handling.EnabledCategories`.
- Disable individual fields with `Config.Handling.FieldOverrides.<field>.enabled = false`.
- Change a field's `min`, `max`, `step`, `type`, or `category` through `Config.Handling.FieldOverrides`.
- The ranges below are editor safety bounds, not a guarantee that every value produces realistic or stable vehicle behaviour.

| Category | Technical field | UI label | Type | Default min | Default max | Step | Purpose |
|---|---|---|---:|---:|---:|---:|---|
| Engine / drivetrain | `fMass` | Mass | float | `350.0` | `12000.0` | `25.0` | Vehicle mass in kilograms. |
| Engine / drivetrain | `fInitialDragCoeff` | Drag coefficient | float | `0.1` | `30.0` | `0.1` | Aerodynamic drag. Lower values usually increase top speed. |
| Engine / drivetrain | `fDriveBiasFront` | Drive bias | float | `0.0` | `1.0` | `0.01` | 0.0 is rear-wheel drive, 1.0 is front-wheel drive. |
| Engine / drivetrain | `nInitialDriveGears` | Gear count | integer | `1` | `10` | `1` | Number of forward gears used by the vehicle. |
| Engine / drivetrain | `fInitialDriveForce` | Drive force | float | `0.01` | `2.0` | `0.01` | Primary acceleration multiplier. |
| Engine / drivetrain | `fDriveInertia` | Drive inertia | float | `0.1` | `3.0` | `0.05` | How quickly engine speed reacts to throttle changes. |
| Engine / drivetrain | `fClutchChangeRateScaleUpShift` | Upshift speed | float | `0.1` | `15.0` | `0.1` | Higher values make upshifts faster. |
| Engine / drivetrain | `fClutchChangeRateScaleDownShift` | Downshift speed | float | `0.1` | `15.0` | `0.1` | Higher values make downshifts faster. |
| Engine / drivetrain | `fInitialDriveMaxFlatVel` | Maximum speed | float | `20.0` | `600.0` | `2.5` | Maximum flat velocity used by the handling data. |
| Brakes / steering | `fBrakeForce` | Brake force | float | `0.01` | `4.0` | `0.05` | Overall braking strength. |
| Brakes / steering | `fBrakeBiasFront` | Brake bias | float | `0.0` | `1.0` | `0.01` | Distribution of brake force toward the front axle. |
| Brakes / steering | `fHandBrakeForce` | Handbrake force | float | `0.0` | `4.0` | `0.05` | Strength of the handbrake. |
| Brakes / steering | `fSteeringLock` | Steering lock | float | `10.0` | `85.0` | `1.0` | Maximum steering angle. |
| Traction | `fTractionCurveMax` | Maximum traction | float | `0.1` | `6.0` | `0.05` | Peak tyre grip. |
| Traction | `fTractionCurveMin` | Minimum traction | float | `0.1` | `6.0` | `0.05` | Grip retained after traction begins to break. |
| Traction | `fTractionCurveLateral` | Lateral traction | float | `1.0` | `45.0` | `0.25` | Lateral grip response while cornering. |
| Traction | `fTractionSpringDeltaMax` | Traction spring delta | float | `0.0` | `2.0` | `0.01` | Maximum traction response to suspension movement. |
| Traction | `fLowSpeedTractionLossMult` | Low-speed traction loss | float | `0.0` | `4.0` | `0.05` | Grip loss multiplier at low speed. |
| Traction | `fCamberStiffnesss` | Camber stiffness | float | `-2.0` | `2.0` | `0.01` | Camber influence on lateral grip. |
| Traction | `fTractionBiasFront` | Traction bias | float | `0.0` | `1.0` | `0.01` | Distribution of tyre grip toward the front axle. |
| Traction | `fTractionLossMult` | Traction loss multiplier | float | `0.0` | `4.0` | `0.05` | Overall traction-loss multiplier. |
| Suspension | `fSuspensionForce` | Suspension force | float | `0.1` | `8.0` | `0.05` | Overall suspension stiffness. |
| Suspension | `fSuspensionCompDamp` | Compression damping | float | `0.1` | `8.0` | `0.05` | Resistance while the suspension compresses. |
| Suspension | `fSuspensionReboundDamp` | Rebound damping | float | `0.1` | `8.0` | `0.05` | Resistance while the suspension extends. |
| Suspension | `fSuspensionUpperLimit` | Upper travel limit | float | `-0.5` | `0.5` | `0.01` | Maximum upward suspension travel. |
| Suspension | `fSuspensionLowerLimit` | Lower travel limit | float | `-0.5` | `0.5` | `0.01` | Maximum downward suspension travel. |
| Suspension | `fSuspensionRaise` | Ride height | float | `-0.3` | `0.3` | `0.005` | Raises or lowers the vehicle body. |
| Suspension | `fSuspensionBiasFront` | Suspension bias | float | `0.0` | `1.0` | `0.01` | Distribution of suspension force toward the front axle. |
| Suspension | `fAntiRollBarForce` | Anti-roll force | float | `0.0` | `5.0` | `0.05` | Resistance to body roll. |
| Suspension | `fAntiRollBarBiasFront` | Anti-roll bias | float | `0.0` | `1.0` | `0.01` | Distribution of anti-roll force toward the front axle. |
| Suspension | `fRollCentreHeightFront` | Front roll centre | float | `-1.0` | `1.0` | `0.01` | Front roll-centre height. |
| Suspension | `fRollCentreHeightRear` | Rear roll centre | float | `-1.0` | `1.0` | `0.01` | Rear roll-centre height. |
| Damage | `fCollisionDamageMult` | Collision damage | float | `0.0` | `10.0` | `0.1` | Damage received from collisions. |
| Damage | `fWeaponDamageMult` | Weapon damage | float | `0.0` | `10.0` | `0.1` | Damage received from weapons. |
| Damage | `fDeformationDamageMult` | Deformation damage | float | `0.0` | `10.0` | `0.1` | Visual deformation multiplier. |
| Damage | `fEngineDamageMult` | Engine damage | float | `0.0` | `10.0` | `0.1` | Engine damage multiplier. |

### Field override example

```lua
Config.Handling.FieldOverrides = {
    fInitialDriveForce = {
        min = 0.05,
        max = 1.25,
        step = 0.01,
    },

    fWeaponDamageMult = {
        enabled = false,
    },
}
```

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

This section documents every custom network event, NUI callback, and Lua export registered by the resource.

> **Security note:** the normal `/handling` command performs the server-side ACE check. Calling a client event or client export directly does **not** repeat that server permission check. Custom integrations must validate access on the server before telling a client to open the editor.

## Server events

| Event name | Direction | Parameters | Purpose | Public integration status |
|---|---|---|---|---|
| `smdz_handling:server:audit` | Client → Server | `payload` (table) | Processes validated console and webhook audit entries. | Internal. Do not use it as an access-control mechanism. |

### Audit payload

| Key | Type | Required | Description |
|---|---|---:|---|
| `action` | `string` | Yes | One of the supported audit action names listed below. |
| `preset` | `string` | No | Preset name for preset actions. Invalid values are ignored or rejected according to server security settings. |
| `vehicle` | `table` | No | Vehicle context. The resource sends `name`, `plate`, `model`, and `networkId`; server validation may replace plate/model data. |

Supported audit actions:

| Action | Generated when |
|---|---|
| `open` | The editor opens successfully. |
| `close` | The editor completes its close flow. |
| `reset` | Original captured handling values are restored. |
| `export` | XML export data is generated. |
| `preset_save` | A preset is created or overwritten. |
| `preset_load` | A preset is applied. |
| `preset_delete` | A preset is deleted after UI confirmation. |

The server validates the action, checks ACE access, applies a per-player/action cooldown, sanitises text, and optionally writes the action to the console and Discord webhook.

## Client events

| Event name | Parameters | Returns | Description | Security note |
|---|---|---|---|---|
| `smdz_handling:client:toggle` | None | None | Opens the editor or requests its normal animated close when already open. | Vehicle restrictions apply, but this event does not perform the server ACE check by itself. |
| `smdz_handling:client:denied` | None | None | Shows the translated access-denied notification. | Intended for the built-in server command flow. |

### Client event example

```lua
-- Client-side only. Use this only after your own server-side access validation.
TriggerEvent('smdz_handling:client:toggle')
```


## Client exports

| Export name | Parameters | Returns | Description |
|---|---|---|---|
| `OpenEditor` | None | `bool` | Opens the editor for the current vehicle. If already open, it requests the normal close flow. Returns `false` when vehicle/context validation fails. |
| `CloseEditor` | None | `nil` | Requests the normal animated close flow. |
| `IsEditorOpen` | None | `bool` | Returns whether the editor is currently marked as visible. |
| `GetCurrentValues` | None | `table` or `nil` | Returns a table keyed by technical handling field name for the current edited vehicle. Returns `nil` when no valid vehicle is active. |
| `Notify` | `message` (string), `type?` (string), `options?` (table) | `bool` | Sends a raw message through the configured notification provider and fallback. |
| `GetNotificationProvider` | None | `string` | Returns the currently resolved provider key. |

### `Notify` export options

The optional `options` table can override the configured defaults for a single notification:

| Option | Type | Example | Description |
|---|---|---|---|
| `Title` | `string` | `'Vehicle Tools'` | Notification title. |
| `Subtitle` | `string` | `'SMDZ Studios'` | Provider subtitle when supported. |
| `Duration` | `number` | `5000` | Duration in milliseconds, with a minimum of 500 ms. |
| `Position` | `string` | `'top-right'` | Position for compatible providers. |
| `Icon` | `string` | `'fa-solid fa-car'` | Icon for compatible providers. |
| `Color` | `string` | `'#d8ac45'` | Accent colour for compatible providers. |
| `Sound` | `bool` | `true` | Enables sound when supported. |
| `TTS` | `bool` | `false` | Enables text-to-speech when supported. |
| `Confetti` | `bool` | `false` | Enables confetti when supported. |
| `Id` | `string` | `'handling_saved'` | Optional provider notification ID. |

```lua
local delivered = exports['smdz_handling_editor']:Notify(
    'Handling preset applied.',
    'success',
    {
        Title = 'Vehicle Handling',
        Duration = 4500,
        Icon = 'fa-solid fa-car',
    }
)

local provider = exports['smdz_handling_editor']:GetNotificationProvider()
```

## Server exports

| Export name | Parameters | Returns | Description |
|---|---|---|---|
| `HasAccess` | `source` (number) | `bool` | Checks the configured ACE permission. Console source `0` follows `Config.Access.AllowConsole`. |

### Secure custom integration example

```lua
-- server.lua
RegisterNetEvent('my_vehicle_tools:requestHandlingEditor', function()
    local src = source

    if not exports['smdz_handling_editor']:HasAccess(src) then
        TriggerClientEvent('smdz_handling:client:denied', src)
        return
    end

    TriggerClientEvent('my_vehicle_tools:openHandlingEditor', src)
end)
```

```lua
-- client.lua
RegisterNetEvent('my_vehicle_tools:openHandlingEditor', function()
    exports['smdz_handling_editor']:OpenEditor()
end)
```

## Internal lifecycle handlers

The resource also listens to FiveM's built-in `onResourceStop` and `playerDropped` events to release NUI focus, optionally restore values, and clear audit cooldown data. These are not custom public integration APIs.

---

# 🧪 **COMMON ISSUES:**

| Problem / symptom | Likely cause | Resolution |
|---|---|---|
| The resource stops immediately after starting. | The folder name does not match the hard-locked resource name. | Rename the folder exactly to `smdz_handling_editor`. Do not append versions, spaces, or suffixes. Read the validation block in the server console. |
| `/handling` shows an access error or does nothing. | ACE is missing, the player is not assigned to the correct group, or access checks are enabled with the wrong permission name. | Add `add_ace group.admin smdz.handling allow`, assign the player's identifier to that group, and verify `Config.Access.AcePermission`. |
| The command works from another integration but normal permissions are bypassed. | A client event or `OpenEditor` export is being called directly. | Validate with the server `HasAccess` export first, then trigger a client event only for authorised players. |
| The editor says no vehicle is available. | The player is not inside a valid vehicle. | Enter a vehicle before opening the editor. |
| The editor requires the driver seat. | `Config.Access.DriverOnly` is enabled. | Move to the driver seat or disable the option intentionally. |
| A specific vehicle cannot be edited. | The model/class is blocked, or a non-empty whitelist does not include it. | Check `AllowedModels`, `BlockedModels`, and `BlockedClasses`. Use exact model names or hashes supported by the config. |
| The UI is blank, missing, or does not open after an update. | `web/dist` is missing, stale, or partially overwritten. | Delete the old resource folder, install a clean copy, and confirm `web/dist/index.html` plus its assets exist. Rebuild from `web` only when editing React source. |
| A dark fullscreen layer remains after the resource starts. | Old compiled NUI files are still installed or another resource is holding NUI focus. | Install a clean build, restart the resource, and inspect other NUI resources. The current build starts transparent and unfocused. |
| The camera or vehicle still moves while the UI is open. | Game input was re-enabled or control lists were changed. | Keep `Config.Editor.KeepGameInput = false`, keep camera blocking enabled, and restore the configured disabled controls. |
| UI elements are cut off on a low-resolution screen. | The configured panel width is too large for the available resolution or display scaling. | Reduce `Config.Interface.PanelWidth`, keep the game at a supported resolution, and avoid extreme OS/game scaling. |
| A value immediately jumps to another number. | The entered value exceeded its allowed range or precision. | Review the field's min/max/step in the editable-variable table or your `FieldOverrides`. Values are intentionally clamped. |
| The vehicle becomes unstable after editing. | One or more handling values are physically unrealistic or conflict with each other. | Reset to the captured original values and adjust fields gradually. Test one category at a time. |
| Live handling changes disappear. | The vehicle entity was recreated, the resource/server restarted, the player reconnected, or another script overwrote handling. | Export the final XML and apply it to the permanent `handling.meta` entry. Disable conflicting handling resources while testing. |
| Presets disappear after reconnecting or restarting. | Presets are stored only in client memory for the current session. | Export the setup as XML. Database-backed presets are not included. |
| Notifications do not appear. | The selected provider is stopped, incorrectly named, or has a modified export. | Start the provider before this resource, verify `Config.Notifications.Provider`, adjust `BridgeConfig.AutoDetectOrder`, or edit the matching adapter in `bridge/notifications.lua`. Test with `chat` or `native` fallback. |
| Discord webhook logs do not arrive. | Webhook logging is disabled, the URL is invalid, the action is disabled, or Discord returned an HTTP error. | Configure only `server/config.lua`, enable the webhook, use an HTTPS Discord webhook URL, enable the relevant `Config.Logging.Events` entry, and inspect the server console. |
| The XML copy button does not copy. | The embedded Chromium clipboard API is unavailable or blocked. | Select the XML manually and copy it. Keep `Config.Export.CopyButton = true` to display the button. |
| Exported speed does not exactly match an in-game km/h target. | `fInitialDriveMaxFlatVel` is not a direct speedometer value; drivetrain, drag, wheels, and game physics also affect speed. | Treat it as a tuning value, test in game, and adjust related fields carefully. |
| The React build command fails. | Node.js/npm is missing, dependencies were not installed, or the command is being run from the wrong directory. | Follow `web/BUILD.md`, run `cd web`, then `npm install` and `npm run build`. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| Is the script framework-dependent? | No. It is standalone and does not require ESX, QBCore, Qbox, a database, inventory, or target system. |
| Is the script free? | The intended distribution model is a free Asset Escrow edition and a separate paid open-source edition. The official store listing defines the final price, licence, included files, and support conditions. |
| Are handling changes permanent? | No. The editor changes the active vehicle entity at runtime. Permanent tuning requires copying the exported XML into the correct vehicle `handling.meta` entry and restarting the relevant resource. |
| Does Export automatically modify `handling.meta`? | No. Export generates a ready-to-copy XML entry. It never writes to your server files automatically. |
| Are presets permanent? | No. Presets remain in client memory only for the current game session. They are removed when the client/resource session ends. |
| Can I edit addon or custom vehicles? | Usually yes, provided the vehicle uses supported handling fields and is not blocked by the configured model/class restrictions. Custom vehicles can react differently to the same values, so test carefully. |
| Can I add more handling fields? | The free configuration can enable, disable, move, and change ranges for fields already in the catalog. Adding entirely new native fields requires editing `shared/handling_catalog.lua`, which depends on the source access supplied by your edition. |
| Can I change all UI colours without rebuilding React? | Yes. Edit `config_ui_colors.lua` and restart the resource. A React rebuild is not required for colour-only changes. |
| How do I change the React interface itself? | Follow `web/BUILD.md`. From the `web` directory, install dependencies and run the production build command. The output is generated in `web/dist`. |
| Which languages are included? | English, Spanish, French, German, Portuguese, Turkish, Italian, and Dutch: `en`, `es`, `fr`, `de`, `pt`, `tr`, `it`, and `nl`. |
| Can I disable notifications completely? | Yes. Set `Config.Notifications.Enabled = false`, or select the `none` provider when you only want to suppress delivery through the bridge. |
| Can multiple staff members edit the same vehicle at the same time? | There is no exclusive vehicle lock. Simultaneous edits can overwrite each other's runtime values and are not recommended. |
| Does `OpenEditor` check ACE permissions? | No. It validates the local vehicle context but does not perform the server command's ACE check. Use the server `HasAccess` export before exposing a custom integration. |
| Why does a handling field have a limited range? | The editor uses safety bounds to reduce accidental extreme values. Change those bounds with `Config.Handling.FieldOverrides` when you understand the effect of the field. |
| Can aircraft, boats, motorcycles, or special vehicles be edited? | They are not blocked automatically unless their classes/models are configured as blocked. However, not every displayed field behaves meaningfully on every vehicle type. Use `BlockedClasses` when you want to restrict unsupported categories. |
| Can the hard-locked folder name be changed? | The escrow edition must remain named `smdz_handling_editor`. Any modification or removal of the validation in an open-source edition must follow the licence terms supplied with that edition. |

---

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for the current release cycle.
- 🛠️ During this period, the script will mainly receive:
  - **Bug fixes / emergency patches** if necessary
  - **Compatibility updates** for supported notification providers
  - **Small UI, translation, configuration, or quality-of-life improvements**
- ⚠️ Major feature expansions, database-backed presets, or a complete system rework are **not currently planned**.

- 🧾 **UPDATE STEPS:**
  *Backup config, bridge, private server config, and locales → delete the old folder → install the new folder → restore or merge changes → restart the resource.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *The paid open-source edition may remove or modify this validation from the first lines of `server/main.lua`, depending on the license terms supplied with that edition.*
