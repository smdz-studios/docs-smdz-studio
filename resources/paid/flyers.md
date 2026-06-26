<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/fbEhInMrIlE"
    title="smdz_flyers showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>

<div
  class="five-metrics-resource"
  data-resource="smdz_flyers"
></div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_flyers`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox / Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>


**Short description:**
`smdz_flyers` is a persistent, SQL-backed FiveM resource that lets players place remote images as interactive 3D flyers on valid walls. It includes a dedicated NUI, streamed DUI textures, secure server-side validation, automatic expiration, modular framework and inventory bridges, a complete administration panel, and persistent restricted placement zones.

---

# ⭐ **FEATURES:**

- 🧱 **Place fully persistent 3D flyers anywhere** and turn walls across Los Santos into real advertising spaces.
- 🌐 **Use any direct HTTPS image URL** with support for PNG, JPG, JPEG, and WebP formats.
- 👁️ **Preview every flyer before placing it** with a fast and responsive live preview system.
- 🎯 **Enjoy precise first-person placement controls** with rotation, fine movement, and preview locking.
- 🛡️ **Built with advanced protection and validation** to prevent invalid placement, overlaps, restricted-area abuse, and malformed data.
- ⏳ **Automatic expiration and cleanup** to keep your server organized without manual maintenance.
- ⚡ **Performance-focused streaming** that only loads nearby flyers, DUI textures, and target interactions.
- 🔍 **Open every flyer in a large image viewer** using `ox_target` or `qb-target`.
- 🗑️ **Flexible removal permissions** for owners, staff, police, custom jobs, or public access.
- 🖥️ **Powerful draggable admin panel** with pagination, search tools, live updates, and complete flyer management.
- ⏱️ **Extend flyer duration directly from the admin panel** with persistent SQL saving.
- 🚧 **Create custom restricted zones in-game** using an advanced polygon and freecam editor.
- 🔐 **Compatible with ACE permissions and framework admin groups** for easy staff access control.
- 🌍 **Ready for international servers** with English, Spanish, German, and French translations included.
- 🔔 **Connect your preferred notification system** and keep detailed activity logs through Discord webhooks.



---


# 📦 **REQUIREMENTS:**

### Mandatory Dependencies

- **FiveM server:** A current recommended FiveM artifact.
- **Game:** GTA V / FiveM.
- **Database adapter:** `oxmysql`.
- **Library:** `ox_lib`.
- **Database:** MySQL or MariaDB supported by `oxmysql`.

### Supported Frameworks

- `es_extended`
- `qb-core`
- `qbx_core`
- Standalone

The framework can be selected manually or detected automatically.

### Supported Inventories

- `ox_inventory`
- `qb-inventory`
- `qs-inventory`
- `origen_inventory`
- `tgiann-inventory`
- `codem-inventory`
- `ak47_inventory`
- `core_inventory`
- `jpr-inventory`
- Native ESX, QBCore, or Qbox inventory behavior through the framework bridge
- Standalone command and export mode
- Custom inventory integration

When `Config.Inventory = 'auto'`, the script automatically detects an available inventory provider.

### Optional Target Integrations

- `ox_target`
- `qb-target`

A target resource is recommended for enlarged flyer previews and removal interactions. Set the provider to `none` only when target-based interactions are not required.

### Supported Notification Systems

- `gta_feed`
- `esx_native`
- `qbcore_native`
- `qbox_native`
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
- Custom notification integration

The notification provider can be selected manually from the configuration or handled through the corresponding framework bridge.


## Recommended resource order

The exact framework, inventory, and target names may differ on your server, but the dependency order should remain consistent:

```cfg
ensure oxmysql
ensure ox_lib

ensure es_extended       # or qb-core / qbx_core
ensure ox_inventory      # or another supported inventory
ensure ox_target         # or qb-target, optional

ensure smdz_flyers
```

Starting `smdz_flyers` before its selected bridges can cause incorrect automatic detection. Restart the resource after changing or starting a provider.


---

# 📥 **INSTALLATION:**

1. Download and extract the resource.

2. Make sure the extracted folder is named exactly:

```text
smdz_flyers
```

3. Place it inside your server resources directory, for example:

```text
resources/[smdz]/smdz_flyers
```

4. Import the included SQL file into your database:

```text
smdz_flyers/sql/install.sql
```

The installer creates and safely updates these tables:

- `smdz_flyers`
- `smdz_flyer_zones`

5. Configure `shared/config.lua` before starting the resource.

6. Add the flyer item to your inventory when normal player placement should require an item.

### `ox_inventory` item example

```lua
['advert_flyer'] = {
    label = 'Advertising Flyer',
    weight = 50,
    stack = true,
    close = true,
    description = 'Allows you to place an advertising flyer on any valid wall in San Andreas.',
    client = {
        image = 'paperroll.png',
    },
    server = {
        export = 'smdz_flyers.useFlyerItem'
    }
},
```

> The resource deliberately cancels `ox_inventory` automatic consumption. The item is removed by `smdz_flyers` only after the flyer has been validated and saved successfully.

7. Add the resources to `server.cfg` in the correct order:

```cfg
## Core dependencies
ensure ox_lib
ensure oxmysql

## Framework, inventory, and target resources
ensure qbx_core          # Example only: use your actual framework
ensure ox_inventory     # Example only: use your actual inventory
ensure ox_target        # Optional: ox_target or qb-target

## SMDZ Studios
ensure smdz_flyers
```

8. Add ACE permission when ACE administration is enabled:

```cfg
add_ace group.admin smdz.flyers.admin allow
```

9. Restart the server or start the resource manually:

```bash
start smdz_flyers
```

---

# ⚙️ **CONFIGURATION:**

The main configuration file is:

```text
shared/config.lua
```

```lua

Config = {}

--[[
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    SMDZ FLYERS - CONFIGURATION
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    INDEX

    01. General settings
    02. Framework and inventory integrations
    03. Commands and permissions
    04. Usable flyer item
    05. Image URL validation
    06. Flyer limits and cooldowns
    07. Flyer placement
    08. Flyer removal
    09. Streaming and target integration
    10. Administration panel
    11. Restricted placement zones
    12. Notifications
    13. Automatic cleanup
    14. Discord webhooks

    Notes:
    - Set Config.Debug to false on production servers when detailed prints are not needed.
    - Use the exact provider names documented next to each integration setting.
    - Restart the resource after changing configuration values.
]]

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 01. GENERAL SETTINGS
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Resource language used by Lua messages, NUI text, prints and webhook content.
-- Supported values: es, en, de, fr.
Config.Locale = 'en'

-- Enables detailed translated debug prints in the client and server consoles.
Config.Debug = true

-- Allows /flyer to work without an active framework or inventory resource.
-- When enabled, standalone servers can place flyers directly through the command.
Config.Standalone = {
    AllowCommandWithoutItem = true
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 02. FRAMEWORK AND INVENTORY INTEGRATIONS
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Framework provider.
-- Supported values: auto, esx, qb, qbx, standalone.
Config.Framework = 'auto'

-- Inventory provider.
-- Supported values:
-- auto, ox_inventory, qs-inventory, origen_inventory, tgiann-inventory,
-- ak47_inventory, framework, standalone.
Config.Inventory = 'auto'

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 03. COMMANDS AND PERMISSIONS
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Player command used to open the flyer placement flow.
Config.Command = 'flyer'

-- Administrator command used to open the management panel.
Config.AdminCommand = 'flyeradmin'

-- Administration access is granted when either ACE or a framework group passes.
Config.Permissions = {
    Ace = {
        -- Enables ACE permission checks.
        Enabled = true,

        -- ACE permission required by administrators.
        Permission = 'smdz.flyers.admin'
    },

    FrameworkGroups = {
        -- Enables ESX/QBCore/Qbox group permission checks.
        Enabled = true,

        -- Allowed framework groups. Set a group to true to authorize it.
        Groups = {
            admin = true,
            superadmin = true,
            god = true
        }
    }
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 04. USABLE FLYER ITEM
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Inventory item required for normal player placement.
Config.ItemToUse = 'advert_flyer'

-- Number of items required for one placement.
Config.ItemAmount = 1

-- Removes the configured item only after the flyer is saved successfully in SQL.
Config.ConsumeItem = true

-- Maximum lifetime of a pending placement authorization token, in seconds.
Config.PlacementSessionSeconds = 300

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 05. IMAGE URL VALIDATION
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- File extensions accepted by the image URL validator.
Config.AllowedImageExtensions = {
    png = true,
    jpg = true,
    jpeg = true,
    webp = true
}

-- Blocks exact domains and all their subdomains.
-- Example: adding 'example.org' also blocks 'cdn.example.org'.
Config.BlockedImageDomains = {
    -- 'example.org',
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 06. FLYER LIMITS AND COOLDOWNS
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Maximum number of active flyers allowed globally.
Config.MaxFlyers = 500

-- Maximum number of active flyers per owner. Set to 0 to disable this limit.
Config.MaxFlyersPerPlayer = 5

-- Cooldown applied after a successful normal player placement, in minutes.
-- Set to 0 to disable the cooldown.
Config.PlacementCooldownMinutes = 5

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 07. FLYER PLACEMENT
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Maximum distance from the player to the wall while placing a flyer.
Config.MaxPlacementDistance = 4.0

-- Maximum vertical component accepted for wall normals.
-- Lower values require a more vertical wall surface.
Config.MaxWallNormalZ = 0.72

-- Small offset applied away from the wall to prevent texture flickering.
Config.SurfaceOffset = 0.025

-- Forces first-person view during flyer placement and restores the previous view afterward.
Config.ForceFirstPersonWhilePlacing = true

-- Fixed world dimensions used by every flyer. Players cannot change these in-game.
Config.FlyerSize = {
    Width = 1.20,
    Height = 1.40
}

-- Rotation amount applied by each placement rotation input, in degrees.
Config.RotationStep = 1.0

-- Multiplier applied while the precision key is held during placement.
-- Lower values make preview movement and rotation slower and more accurate.
Config.PlacementPrecisionMultiplier = 0.12

-- Maximum distance a player may walk away while inspecting a locked preview.
-- The server still validates that the final placement remains near the player.
Config.LockedPreviewInspectionDistance = 6.0

-- Prevents a flyer from being placed over another flyer.
Config.PlacementOverlap = {
    Enabled = true,

    -- Maximum distance accepted between both wall planes.
    SurfaceTolerance = 0.18,

    -- Minimum normal-vector similarity required to treat flyers as sharing a surface.
    NormalDotThreshold = 0.90,

    -- Extra spacing added around each flyer during overlap checks, in metres.
    Padding = 0.02
}

-- Progress bar and animation used after confirming flyer placement.
Config.PlacementAnimation = {
    Enabled = true,
    Duration = 5000,
    Scenario = 'WORLD_HUMAN_HAMMERING',
    FreezePlayer = true,

    -- Walks the player naturally toward the flyer before starting the animation.
    ApproachPlayer = true,

    -- Final distance from the wall, in metres.
    DistanceFromWall = 0.85,

    -- Walking speed and maximum time allowed for the approach movement.
    ApproachSpeed = 1.35,
    ApproachTimeout = 2200,

    -- Safety limit: the resource will never pull the player farther than this distance.
    MaxApproachDistance = 3.25
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 08. FLYER REMOVAL
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Controls the target option that allows players to remove placed flyers.
-- Removing a flyer permanently deletes it; the placement item is never returned.
Config.FlyerRemoval = {
    Enabled = true,

    -- Allows the original owner to remove their own flyer.
    AllowOwner = true,

    -- Allows every player to remove flyers. Keep disabled for moderated servers.
    AllowPublic = false,

    -- Allows authorized administrators to remove flyers.
    AllowAdmins = true,

    -- Maximum distance from the flyer while requesting and completing removal.
    Distance = 2.5,

    -- Lifetime of the server removal authorization token, in seconds.
    SessionSeconds = 20,

    -- Extra jobs allowed to remove flyers.
    -- true = every grade, number = minimum grade,
    -- table = { minGrade = 1, requireDuty = true }.
    AllowedJobs = {
        -- mechanic = 0,
    },

    -- Police-style jobs allowed to remove flyers.
    PoliceJobs = {
        police = 0,
        sheriff = 0,
    },

    -- Progress bar and animation used while removing a flyer.
    Animation = {
        Duration = 5000,
        Scenario = 'WORLD_HUMAN_HAMMERING',
        FreezePlayer = true,
        CanCancel = true,
    }
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 09. STREAMING AND TARGET INTEGRATION
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Distance used by non-target proximity checks.
Config.InteractDistance = 4.0

-- DUI textures and target zones are created only for nearby players.
Config.Streaming = {
    Distance = 75.0,
    CheckInterval = 750,
    DuiWidth = 1024,
    DuiHeight = 1024
}

-- Target provider used for enlarged preview and flyer removal interactions.
-- Supported values: auto, ox_target, qb-target, none.
Config.Target = {
    Provider = 'auto',
    ZoneRadius = 0.65,
    InteractionDistance = 2.5,
    LargePreviewMaxDistance = 5.0,
    DebugZones = false
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 10. ADMINISTRATION PANEL
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Config.AdminPanel = {
    -- Flyers shown per page.
    PageSize = 8,

    -- Restricted zones shown per page.
    ZonePageSize = 8,

    -- Maximum distance required to move an existing flyer from the panel.
    MoveMaxDistance = 6.0,

    -- Manual refresh button cooldown, in seconds.
    -- Live updates are still received automatically during this cooldown.
    RefreshCooldownSeconds = 30,

    -- Delay used to group rapid live updates into one panel refresh.
    LiveRefreshDebounceMs = 350,

    -- Staff-only flyer duration extension controls.
    -- The new expiration is calculated from the flyer's current expiration,
    -- or from the current server time if the previous expiration has elapsed.
    DurationExtension = {
        Enabled = true,

        -- Default values shown when the extension modal opens.
        DefaultAmount = 24,
        DefaultUnit = 'hours', -- minutes / hours / days

        -- Server-side limits expressed in total minutes.
        MinMinutes = 1,
        MaxMinutes = 525600 -- 365 days
    }
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 11. RESTRICTED PLACEMENT ZONES
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- Administrators can create SQL-persistent ox_lib polygon zones where flyers are blocked.
Config.RestrictedZones = {
    Enabled = true,

    -- Enables ox_lib debug visualization for saved restricted zones.
    Debug = false,

    -- Initial dimensions used by legacy box-zone data and editor defaults.
    Defaults = {
        SizeX = 8.0,
        SizeY = 8.0,
        SizeZ = 4.0
    },

    Limits = {
        -- Minimum accepted side length and zone height, in metres.
        MinSize = 1.0,

        -- Maximum accepted zone dimension, in metres.
        MaxSize = 100.0,

        -- Maximum number of polygon corners accepted by the editor and server.
        MaxCorners = 25,

        -- Maximum zone name length.
        MaxNameLength = 80
    },

    Editor = {
        -- Base freecam movement speed.
        MoveSpeed = 0.12,

        -- Multiplier applied while precision movement is active.
        PrecisionMultiplier = 0.30,

        -- Mouse look sensitivity.
        LookSensitivity = 8.0,

        -- Height adjustment per mouse-wheel step.
        ResizeStep = 0.5,

        -- Maximum distance allowed between the player origin and editor camera.
        MaxDistanceFromPlayer = 250.0,

        -- Maximum freecam raycast distance used to place polygon corners.
        RaycastDistance = 600.0,

        -- Polygon preview transparency.
        FillAlpha = 42,

        -- Polygon preview edge transparency.
        EdgeAlpha = 220
    }
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 12. NOTIFICATIONS
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- The automatic provider order is intentionally stored in bridge/notifications.lua.
-- Supported values:
-- auto, ox_lib, framework, okokNotify, origen_notify, wasabi_notify,
-- wasabi_uikit, rtx_notify, codem-notification, vms_notifyv2, esx_notify,
-- brutal_notify, FL-Notify, gtm-ui, RO_Notify, RxNotify, none.
Config.Notifications = {
    Provider = 'ox_lib',
    Title = 'SMDZ FLYERS',

    -- Used only by providers that support a subtitle, such as FL-Notify.
    Subtitle = '',

    -- Notification display time, in milliseconds.
    Duration = 5000,

    -- Preferred notification position when supported by the selected provider.
    Position = 'top-right',

    -- Falls back to ox_lib if the selected notification resource is unavailable.
    FallbackToOxLib = true,

    -- Provider-specific options.
    Sound = true,
    Confetti = false,
    TextToSpeech = false,
    RoTimeInSeconds = true,

    -- Optional styles used by vms_notifyv2.
    VmsStyles = {
        success = { color = '#22c55e', icon = 'fa-solid fa-check' },
        error = { color = '#ef4444', icon = 'fa-solid fa-xmark' },
        warning = { color = '#f59e0b', icon = 'fa-solid fa-triangle-exclamation' },
        info = { color = '#3b82f6', icon = 'fa-solid fa-circle-info' }
    },

    -- Optional styles used by RO_Notify.
    RoStyles = {
        success = { color = '#22c55e', icon = 'fa fa-check-circle' },
        error = { color = '#ef4444', icon = 'fa fa-times-circle' },
        warning = { color = '#f59e0b', icon = 'fa fa-exclamation-triangle' },
        info = { color = '#3b82f6', icon = 'fa fa-info-circle' }
    }
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 13. AUTOMATIC CLEANUP
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Config.AutoCleanup = {
    -- Enables automatic deletion of expired flyers.
    Enabled = true,

    -- Default flyer lifetime, in hours.
    LifetimeHours = 24,

    -- Frequency of the expiration cleanup query, in minutes.
    CheckIntervalMinutes = 15
}

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- 14. DISCORD WEBHOOKS MOVED ON config_server.lua
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Config.Webhook = {
    -- Enables Discord webhook logs.
    Enabled = true,

    -- Discord webhook URL.
    Url = 'https://discord.com/api/webhooks/x/x',

    -- Display name used by the webhook message.
    Username = 'SMDZ Flyers',

    -- Optional webhook avatar URL. Leave empty to use Discord's default avatar.
    AvatarUrl = '',

    -- Enables or disables individual webhook event categories.
    Events = {
        command_used = true,
        item_used = true,
        flyer_placed = true,
        flyer_updated = true,
        flyer_deleted = true,
        flyer_expired = true,
        rejected_action = true
    }
}
```
---

# 🎮 USAGE:

## Player workflow

1. Use the configured inventory item or run `/flyer` when command access is available.
2. Enter a direct HTTPS image URL in the flyer editor.
3. Confirm the image preview.
4. Aim at a valid vertical wall.
5. Adjust the preview position and rotation.
6. Confirm placement.
7. The character approaches the wall and performs the configured placement animation.
8. The server validates the final data, stores the flyer in SQL, and then consumes the item.

A failed, canceled, overlapping, restricted, invalid, or rejected placement does not consume the item.


## Expected behavior by action

| Action | Uses an item | Applies player limit | Applies cooldown | Creates SQL data | Notes |
|---|---:|---:|---:|---:|---|
| Normal inventory placement | Yes, when enabled | Yes | Yes, after success | Yes | The item is consumed only after a successful insert. |
| `/flyer` normal placement | Depends on selected mode | Yes | Yes, after success | Yes | Standalone bypass depends on `AllowCommandWithoutItem`. |
| Admin panel creation | No | No | No | Yes | Saved as a staff-created flyer. |
| `UseFlyerItem` export | Yes, when configured | Yes | Yes, after success | Yes | Follows the normal player flow. |
| `CreateFlyer` export | No | No normal player limit | No normal player cooldown | Yes | Still validates URL, geometry, global limit, zones, and overlap. |
| Canceling placement | No | No | No | No | A canceled placement does not consume the item. |
| Failed server validation | No | No new cooldown | No | No | The client receives a translated rejection message. |
| Removing a flyer | No refund | N/A | N/A | Deletes SQL row | Removal is permanent. |

## Image hosting guidelines

The resource displays remote images; it does not upload or permanently cache them on the FiveM server. For the most reliable results:

- Use a direct `https://` URL that returns the image file itself.
- Use PNG, JPG, JPEG, or WebP.
- Avoid links to gallery pages, temporary preview pages, or login-protected content.
- Avoid URLs with expiring authorization tokens unless short-lived flyers are intentional.
- Prefer hosts that allow embedding and remote hotlinking.
- Keep file sizes reasonable to reduce loading time for nearby clients.
- Use clear portrait-oriented artwork because flyers use a fixed world aspect and size.
- Test the URL in a private browser window before using it in-game.

A URL can pass extension validation and still fail to display when the external host blocks browser embedding, returns an HTML page, expires the URL, or denies the FiveM Chromium user agent.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/flyer` | Opens the normal flyer creation flow. | Requires the configured item unless standalone command bypass is enabled. |
| `/flyeradmin` | Opens the global flyer and restricted-zone administration panel. | Requires ACE or an authorized framework group. |

### Keybinds

The resource does not register a permanent menu keybind. Commands and inventory items open the relevant flow.

#### Flyer placement controls

| Control | Action |
|---|---|
| `Enter` | Confirm the current flyer placement. |
| `Backspace` | Cancel placement. |
| `L` | Lock or unlock the flyer preview for inspection. |
| `Left Arrow` / `Right Arrow` | Rotate the flyer. |
| `Left Ctrl` | Hold for precision movement and rotation. |
| Mouse / camera aim | Select and follow the target wall while unlocked. |

The preview becomes invalid when the selected surface is too far away, too horizontal, a vehicle, inside a restricted zone, or overlapping another flyer.

#### Restricted-zone editor controls

| Control | Action |
|---|---|
| `W` / `A` / `S` / `D` | Move the editor camera. |
| `Q` / `E` | Move down or up. |
| Mouse | Look around. |
| `Shift` | Hold for precision camera movement. |
| Mouse wheel | Decrease or increase zone height. |
| Left mouse button | Add a polygon corner at the raycast position. |
| `F` | Confirm and save a valid polygon. |
| `Backspace` | Remove the latest corner; cancel when no corners remain. |
| Right mouse button | Reserved and intentionally ignored by the editor. |

A valid zone requires between 3 and 25 corners, a valid non-self-intersecting polygon, acceptable dimensions, and a position within the configured editor limits.

## UI and menus

### Flyer editor

- URL input with immediate validation.
- Remote image preview.
- Clear validation and server rejection messages.
- Animated open and close behavior.

### World placement UI

- Contextual placement instructions.
- Valid/invalid preview feedback.
- Precision and lock-state indicators.
- Placement progress animation.

### Enlarged viewer

- Opens from the configured target resource.
- Displays the original remote image at a larger size.
- Closes automatically when the player moves beyond the configured distance.

### Administration panel

The admin panel is draggable and remembers its last screen position through local browser storage. It includes:

- A dedicated loading screen and image preloading.
- Flyer and restricted-zone tabs.
- Search, pagination, and live synchronization.
- Manual refresh with a visible cooldown.
- Exact creation and expiration information.
- Owner identity, coordinates, surface normal, dimensions, rotation, and source details.

#### Flyer actions

| Action | Description |
|---|---|
| View details | Opens the complete flyer metadata view. |
| View image | Opens the enlarged remote image. |
| Teleport | Teleports the administrator to the flyer. |
| Move | Starts in-world placement for an existing flyer when the administrator is close enough. |
| Edit image | Replaces only the flyer image URL after validation. |
| Delete | Permanently deletes the flyer. |
| Create flyer | Starts staff placement without consuming an item or applying the personal limit/cooldown. |

Staff-created flyers are stored with `admin_created = 1` and display a `STAFF FLYER` badge.

#### Restricted-zone actions

| Action | Description |
|---|---|
| Enable / disable | Activates or suspends placement blocking without deleting the zone. |
| Teleport | Teleports the administrator to the zone center. |
| Edit | Opens the in-world polygon editor for the selected zone. |
| Rename | Changes the persistent zone name. |
| Delete | Permanently deletes the zone. |
| Create zone | Opens the polygon editor for a new persistent zone. |

---

# 🗄️ **DATABASE:**


```sql
CREATE TABLE IF NOT EXISTS `smdz_flyers` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `owner_identifier` VARCHAR(191) NOT NULL,
    `license_identifier` VARCHAR(191) DEFAULT NULL,
    `discord_identifier` VARCHAR(191) DEFAULT NULL,
    `first_name` VARCHAR(191) DEFAULT NULL,
    `last_name` VARCHAR(191) DEFAULT NULL,
    `admin_created` TINYINT(1) NOT NULL DEFAULT 0,
    `image_url` VARCHAR(2048) NOT NULL,
    `coord_x` DOUBLE NOT NULL,
    `coord_y` DOUBLE NOT NULL,
    `coord_z` DOUBLE NOT NULL,
    `normal_x` DOUBLE NOT NULL,
    `normal_y` DOUBLE NOT NULL,
    `normal_z` DOUBLE NOT NULL,
    `width` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `rotation` DOUBLE NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `expires_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_smdz_flyers_owner` (`owner_identifier`),
    KEY `idx_smdz_flyers_expiration` (`expires_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_flyer_zones` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `coord_x` DOUBLE NOT NULL,
    `coord_y` DOUBLE NOT NULL,
    `coord_z` DOUBLE NOT NULL,
    `size_x` DOUBLE NOT NULL,
    `size_y` DOUBLE NOT NULL,
    `size_z` DOUBLE NOT NULL,
    `rotation` DOUBLE NOT NULL DEFAULT 0,
    `points_json` LONGTEXT DEFAULT NULL,
    `thickness` DOUBLE DEFAULT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT 1,
    `created_by_identifier` VARCHAR(191) DEFAULT NULL,
    `first_name` VARCHAR(191) DEFAULT NULL,
    `last_name` VARCHAR(191) DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_smdz_flyer_zones_creator` (`created_by_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## `smdz_flyers`

Stores each persistent flyer, including:

- Owner identifier, license, Discord identifier, first name, and last name.
- Whether the flyer was created through the administration panel.
- Image URL.
- World coordinates and wall normal.
- Width, height, and rotation.
- Creation, update, and expiration timestamps.

Indexes are created for owner and expiration lookups.

## `smdz_flyer_zones`

Stores each restricted placement zone, including:

- Zone name.
- Legacy center, size, and rotation fields.
- Polygon points as JSON.
- Height/thickness.
- Active state.
- Creator identity and creation time.

The included installer contains safe migration checks for columns introduced by newer versions and removes legacy columns that are no longer used.

---

# 🔐 **SECURITY & VALIDATION:**

`smdz_flyers` treats the server as the final authority. Important protections include:

- One-time placement and removal authorization tokens.
- Token expiration and cancellation.
- Server-side permission checks for every admin operation.
- Server-side distance revalidation before and after removal progress.
- URL protocol, extension, and blocked-domain validation.
- Global and per-owner flyer limits.
- Placement cooldown enforcement.
- Wall-angle and surface-normal validation.
- Vehicle-surface rejection.
- Client-side and server-side restricted-zone checks.
- Client-side and server-side flyer overlap checks.
- Final-position validation before SQL insertion.
- Item removal only after a successful SQL insert.
- SQL rollback when item consumption fails.
- A server-side commit rate limit.
- Automatic cancellation when the resource stops.
- Discord Webhook URL configuration.

External resources should use the documented server exports instead of triggering internal network events directly.

---

# 🔌 **EVENTS & EXPORTS:**

## Public integration policy

The supported public API consists of **server exports**. Network events are internal implementation details used by the bundled client and server and may change between releases.

## Server Events

The following event groups are internal and should not be used as a stable third-party API:

| Internal event group | Examples | Purpose |
|---|---|---|
| Placement | `smdz_flyers:requestUse`, `smdz_flyers:create`, `smdz_flyers:cancelPlacement` | Starts, commits, or cancels an authorized placement session. |
| Removal | `smdz_flyers:requestRemoval`, `smdz_flyers:confirmRemoval`, `smdz_flyers:cancelRemoval` | Handles permission-checked removal sessions. |
| Synchronization | `smdz_flyers:requestSync` | Requests the current active flyer state. |
| Admin flyers | `smdz_flyers:requestAdminPanel`, `smdz_flyers:adminTeleport`, `smdz_flyers:adminMove`, `smdz_flyers:adminUpdateImage` | Handles authorized admin panel actions. |
| Admin zones | `smdz_flyers:adminCreateZone`, `smdz_flyers:adminUpdateZone`, `smdz_flyers:adminToggleZone`, `smdz_flyers:adminDeleteZone` | Manages persistent restricted zones. |

Every sensitive server event rechecks its authorization and input data. This does not make the events a supported public integration interface.

## Client Events

These events are also internal and are sent by the resource server:

| Internal event group | Examples | Purpose |
|---|---|---|
| Placement state | `smdz_flyers:startPlacement`, `smdz_flyers:placementCommitted`, `smdz_flyers:placementFailed` | Controls the local placement lifecycle. |
| Flyer state | `smdz_flyers:sync`, `smdz_flyers:upsert`, `smdz_flyers:remove` | Synchronizes local streamed flyer data. |
| Removal state | `smdz_flyers:beginRemoval` | Starts an authorized local removal animation. |
| Admin UI | `smdz_flyers:openAdminPanel`, `smdz_flyers:updateAdminPanel`, `smdz_flyers:adminActionComplete` | Updates the administration interface. |
| Zone state | `smdz_flyers:syncRestrictedZones`, `smdz_flyers:upsertRestrictedZone`, `smdz_flyers:removeRestrictedZone` | Synchronizes restricted-zone data. |
| Utility | `smdz_flyers:notify`, `smdz_flyers:forceCancel` | Displays resource notifications or clears active local flows. |

## Exports

All public exports are **server-side**.

| Export name | Parameters | Returns | Description |
|---|---|---|---|
| `useFlyerItem` | `event`, `item`, `inventory`, `slot` | `false` during `usingItem` | Internal `ox_inventory` item export. Starts placement and prevents automatic item consumption. |
| `UseFlyerItem` | `source`, `slot?` | `boolean` | Starts the normal authorized placement flow from another server resource. |
| `CreateFlyer` | `data` | `flyerId, flyerData` or `nil, errorCode` | Creates a persistent flyer without requiring or consuming an item. |
| `RemoveFlyer` | `id` | `true` or `false, errorCode` | Permanently removes a flyer by ID. |
| `GetActiveFlyers` | None | `table` | Returns a detached, ID-sorted snapshot of all active flyers. |

### Start normal placement from another resource

```lua
local started = exports['smdz_flyers']:UseFlyerItem(source)

if not started then
    print(('Could not start flyer placement for player %s'):format(source))
end
```

This follows the normal item, limit, cooldown, and authorization rules configured by the resource.

### Create a flyer directly

```lua
local flyerId, flyerOrError = exports['smdz_flyers']:CreateFlyer({
    imageUrl = 'https://example.com/flyer.webp', -- `url` is also accepted
    coords = vector3(100.0, 200.0, 30.0),       -- `position` is also accepted
    normal = vector3(0.0, -1.0, 0.0),           -- `surfaceNormal` is also accepted
    rotation = 0.0,

    -- Optional online player identity source:
    source = source,

    -- Optional expiration behavior:
    lifetimeHours = 48,

    -- Optional presentation flag:
    adminCreated = false
})

if not flyerId then
    print(('CreateFlyer failed: %s'):format(flyerOrError))
    return
end

print(('Created flyer #%s'):format(flyerId))
```

When `source` points to an online player, the resource resolves that player's identity through the active framework bridge. Without a valid source, external identity fields may be supplied:

```lua
local flyerId, result = exports['smdz_flyers']:CreateFlyer({
    url = 'https://example.com/event.png',
    coords = { x = 100.0, y = 200.0, z = 30.0 },
    normal = { x = 0.0, y = -1.0, z = 0.0 },

    ownerIdentifier = 'resource:my_event_script',
    firstName = 'Event',
    lastName = 'System',
    license = '',
    discord = '',

    permanent = true
})
```

#### `CreateFlyer` expiration options

Use only the behavior needed by the integration:

| Field | Behavior |
|---|---|
| `permanent = true` | Creates the flyer without an expiration timestamp. |
| `expiresAt = unixTimestamp` | Uses a future Unix timestamp. |
| `lifetimeHours = number` | Expires the flyer after the specified number of hours. |
| No expiration field | Uses `Config.AutoCleanup.LifetimeHours` when automatic cleanup is enabled. |

#### `CreateFlyer` error codes

| Error code | Meaning |
|---|---|
| `database_unavailable` | The database has not completed initialization or is unavailable. |
| `invalid_data` | Required data, URL, coordinates, normal, or geometry is invalid. |
| `global_limit_reached` | `Config.MaxFlyers` has been reached. |
| `restricted_zone` | The requested coordinates are inside an active restricted zone. |
| `overlap` | The flyer would overlap an existing flyer. |
| `sql_insert_failed` | The persistent insert failed. |

### Remove a flyer directly

```lua
local removed, errorCode = exports['smdz_flyers']:RemoveFlyer(123)

if not removed then
    print(('RemoveFlyer failed: %s'):format(errorCode))
end
```

Possible errors:

- `database_unavailable`
- `not_found`
- `sql_delete_failed`

### Read active flyers

```lua
local flyers = exports['smdz_flyers']:GetActiveFlyers()

for _, flyer in ipairs(flyers) do
    print(flyer.id, flyer.url, flyer.coords.x, flyer.coords.y, flyer.coords.z)
end
```



## Integration best practices

| Practice | Recommendation |
|---|---|
| Use only documented exports | Internal events can change and are not a stable public API. |
| Validate your own business rules first | Check event state, ownership, pricing, or job requirements before calling an export. |
| Handle every error code | Do not assume `CreateFlyer` or `RemoveFlyer` always succeeds. |
| Store returned flyer IDs | The ID is required for reliable later removal through `RemoveFlyer`. |
| Avoid repeated polling | Use `GetActiveFlyers` only when needed; do not call it every frame or on very short loops. |
| Supply a real `source` when possible | This allows the bridge to resolve the current player identity consistently. |
| Use explicit external ownership when no player exists | Set `ownerIdentifier`, names, license, and Discord fields for system-created content. |
| Keep coordinates and normals server-controlled | Do not blindly accept arbitrary client data in a separate integration. |
| Use `permanent = true` deliberately | Permanent content bypasses normal expiration and requires manual removal. |
| Test restricted-zone and overlap outcomes | External creation is still subject to these protections. |

## Example: event flyer with safe error handling

```lua
local function createEventFlyer(eventData)
    local flyerId, result = exports['smdz_flyers']:CreateFlyer({
        imageUrl = eventData.imageUrl,
        coords = eventData.coords,
        normal = eventData.normal,
        rotation = eventData.rotation or 0.0,
        ownerIdentifier = 'resource:events',
        firstName = 'Server',
        lastName = 'Events',
        lifetimeHours = eventData.lifetimeHours or 24,
        adminCreated = true
    })

    if not flyerId then
        print(('[events] Flyer creation rejected: %s'):format(result or 'unknown_error'))
        return nil, result
    end

    return flyerId
end
```


Each returned flyer is a detached table with this structure:

```lua
{
    id = 1,
    ownerIdentifier = 'license:...',
    ownerName = 'John Doe',
    firstName = 'John',
    lastName = 'Doe',
    adminCreated = false,
    url = 'https://example.com/flyer.webp',
    coords = { x = 0.0, y = 0.0, z = 0.0 },
    normal = { x = 0.0, y = -1.0, z = 0.0 },
    width = 1.20,
    height = 1.40,
    rotation = 0.0,
    createdAt = 0,
    expiresAt = 0
}
```

---

# 🧪 **DEBUGGING & DIAGNOSTICS:**

## Common issues table

| Symptom / error | Most likely cause | Resolution | Additional checks |
|---|---|---|---|
| The resource stops immediately after startup. | The folder was renamed or a mandatory dependency is unavailable. | Rename the folder to exactly `smdz_flyers`; start `oxmysql` and `ox_lib` first. | Read the first fatal console line instead of later secondary errors. |
| `smdz_flyers` starts before the database is ready. | Incorrect `server.cfg` order or delayed database startup. | Place `ensure oxmysql` before `ensure smdz_flyers` and restart the server. | Confirm the MySQL connection string works for other resources. |
| SQL reports that `smdz_flyers` does not exist. | `sql/install.sql` was not imported into the active database. | Import the installer into the same database used by FiveM. | Verify the database name in the connection string. |
| SQL reports that `smdz_flyer_zones` does not exist. | The installer is outdated or was only partially imported. | Run the current release's `sql/install.sql` again. | Check for SQL permission errors during migration statements. |
| A column is missing after updating. | The old schema was retained without running the new installer. | Back up the tables, stop the resource, and run the new SQL migration file. | Do not manually guess column types. |
| `/flyer` is an unknown command. | The resource is not started, the command name was changed, or another resource owns the same command. | Confirm the resource state and `Config.Command`; resolve command conflicts. | Use `restart smdz_flyers` after changing the command. |
| `/flyer` opens without requiring an item. | Standalone bypass is enabled or the inventory bridge selected standalone behavior. | Disable `Config.Standalone.AllowCommandWithoutItem` or select the correct inventory. | Check automatic inventory detection in the console. |
| `/flyer` does nothing. | The player is blocked by an active session, provider failure, item requirement, limit, or cooldown. | Read the notification/debug output and resolve the reported condition. | Confirm no old NUI or placement session is stuck after another resource error. |
| The inventory item cannot be used. | Item definition, export name, provider, or item name is incorrect. | Match `Config.ItemToUse` exactly and use `smdz_flyers.useFlyerItem` for `ox_inventory`. | Ensure the inventory starts before this resource. |
| The flyer item is consumed when placement is canceled. | The inventory is configured to consume the item automatically outside this resource. | Use the documented `ox_inventory` server export and remove conflicting consume behavior. | Confirm no custom item handler removes the item before the export returns. |
| The item is not consumed after successful placement. | `Config.ConsumeItem` is disabled or the selected inventory bridge cannot remove it. | Enable consumption and verify the inventory integration. | Check server logs for rollback or item-removal failure. |
| A successful SQL insert is rolled back. | Item removal failed after insertion. | Fix the inventory item count/removal bridge and retry. | The rollback is intentional protection against free placement. |
| The URL field rejects an image. | It is not HTTPS, the extension is unsupported, or the domain is blocked. | Use a direct HTTPS PNG, JPG, JPEG, or WebP URL. | Remove query-based gallery links and test the final redirected URL. |
| The URL is accepted but the preview is blank. | The host blocks embedding, hotlinking, CORS-like browser access, or returns HTML instead of an image. | Move the image to a host that supports direct embedding. | Open the URL in a private browser tab and inspect its content type. |
| The image worked earlier but later disappears. | The remote URL expired, the file was deleted, or the host changed access rules. | Replace the flyer URL through the admin panel or use a permanent direct host. | Avoid temporary CDN signatures and expiring Discord attachment links. |
| The image is stretched or cropped unexpectedly. | The artwork aspect ratio differs from the fixed flyer world dimensions. | Prepare artwork for a portrait flyer format and test before publishing. | The in-world dimensions are controlled by `Config.FlyerSize`. |
| The preview flickers against the wall. | The surface offset is too small for that wall or the wall geometry is irregular. | Increase `Config.SurfaceOffset` slightly. | Avoid large changes that make flyers visibly float. |
| The flyer appears to float away from the wall. | `Config.SurfaceOffset` is too high or the wall normal is unusual. | Lower the surface offset and test on a standard vertical wall. | Check whether a custom map uses unusual collision geometry. |
| The player cannot select a wall. | The surface is too far away, too horizontal, invalid, or belongs to a vehicle. | Move closer and choose a vertical static wall. | Review `MaxPlacementDistance` and `MaxWallNormalZ`. |
| Placement becomes invalid after locking the preview. | The player moved beyond the allowed inspection or final validation distance. | Move back toward the flyer or unlock and select the wall again. | Check `LockedPreviewInspectionDistance`. |
| A flyer cannot be placed near another flyer. | Overlap protection detected the same wall area. | Choose another location or adjust overlap tolerances carefully. | Disabling overlap protection is not recommended for public servers. |
| Flyers overlap even though protection is enabled. | Tolerances are too permissive for the custom map geometry. | Increase padding or tune surface/normal thresholds conservatively. | Test several wall orientations after every change. |
| A valid area is reported as restricted. | The point is inside an enabled polygon zone, possibly extending vertically. | Inspect the zone in the admin panel and edit, disable, or resize it. | Check zone height and polygon points. |
| A restricted zone does not block placement. | The zone is disabled, restricted zones are globally disabled, or the point is outside its height. | Enable the zone and `Config.RestrictedZones.Enabled`. | Restart after configuration changes and verify SQL active state. |
| The zone editor will not save. | Fewer than three points, self-intersection, excessive dimensions, or invalid height. | Build a simple non-crossing polygon within configured limits. | Remove the latest point with Backspace and try again. |
| The zone editor camera stops moving farther away. | The maximum distance from the player's origin was reached. | Create the zone from a closer starting position or adjust the configured limit. | `MaxDistanceFromPlayer` is a safety boundary. |
| Zone debug shapes are visible to players. | `Config.RestrictedZones.Debug` or target debug is enabled. | Disable debug options in production and restart the resource. | Check both restricted-zone and target debug settings. |
| `ox_target` options do not appear. | Provider detection failed, resource order is wrong, or the flyer is not streamed nearby. | Start `ox_target` first and set the provider explicitly if necessary. | Check streaming and interaction distances. |
| `qb-target` options do not appear. | Provider mismatch or incorrect startup order. | Start `qb-target` first and set `Config.Target.Provider = 'qb-target'`. | Make sure `ox_target` is not taking priority in automatic mode. |
| Target options appear too far away or too close. | Target interaction and zone radius values do not fit the server's desired gameplay. | Adjust `ZoneRadius` and `InteractionDistance`. | Keep removal distance compatible with the target distance. |
| The enlarged viewer closes by itself. | The player moved beyond `LargePreviewMaxDistance`. | Stay close to the flyer or increase the limit modestly. | Automatic closing prevents a stale remote viewer. |
| Flyers only appear when very close. | Streaming distance is too low. | Increase `Config.Streaming.Distance`. | Higher values may create more simultaneous DUI textures. |
| Client usage increases around many flyers. | Too many nearby DUI textures, high-resolution images, or an excessive streaming radius. | Reduce streaming distance, keep reasonable limits, and use optimized images. | Do not increase DUI resolution without a real need. |
| A flyer remains invisible after streaming into range. | Remote image load failed or client DUI initialization encountered an error. | Test another image URL, inspect F8, and move out/in of streaming range. | Restart the resource only after collecting the client error. |
| `/flyeradmin` returns a permission error. | Neither ACE nor an allowed framework group passed. | Add the documented ACE or add the correct framework group. | Reconnect after changing principal/ACE rules. |
| ACE permission appears correct but access is denied. | The player principal is not inheriting the expected group. | Review `add_principal` and `add_ace` rules in `server.cfg`. | Test with `test_ace` or another known ACE-protected command. |
| Framework administrators cannot open the panel. | Their actual group name is not enabled in the config. | Add the exact ESX/QB/Qbox group key to the allowed group table. | Group names are case-sensitive in many setups. |
| The admin panel opens but shows no flyers. | Search/filter state hides them, synchronization failed, or the database has no active rows. | Clear search, refresh, and inspect server synchronization logs. | Expired flyers may already have been deleted. |
| Manual refresh is unavailable. | The refresh cooldown is active. | Wait for the configured cooldown; live updates remain enabled. | This is expected behavior, not an error. |
| A newly created flyer is not visible on the current admin page. | Search, page, or debounce state hides the new record. | Clear filters or return to the first page. | Live refresh is intentionally debounced. |
| An admin cannot move a flyer. | The administrator is farther than `MoveMaxDistance`. | Teleport to the flyer or move closer before starting the action. | This prevents remote editing of unrelated coordinates. |
| A player cannot remove their own flyer. | Owner identifiers do not match, owner removal is disabled, or the player moved too far away. | Enable owner removal and verify framework identity resolution. | Flyers created by an external system may have a different owner identifier. |
| Police cannot remove flyers. | Job name, grade, or duty rule does not match the active framework data. | Configure the exact job key and minimum grade. | Use `AllowedJobs` for custom police resource job names. |
| Removal starts but fails at completion. | The player moved beyond the allowed distance or the token expired. | Remain close until the progress finishes and retry. | The server validates distance both before and after progress. |
| Flyers disappear after a restart. | SQL data was not saved, the wrong database is connected, or cleanup removed expired rows. | Check insert errors, connection settings, and expiration timestamps. | Normal flyers are designed to persist through restarts. |
| Flyers disappear after 24 hours. | Default automatic cleanup lifetime is 24 hours. | Increase `LifetimeHours`, disable cleanup, or create permanent flyers through the export. | Cleanup runs at the configured interval, not necessarily at the exact second. |
| Expired flyers remain longer than expected. | Cleanup checks run periodically. | Wait for the next cleanup interval or restart after verifying the database. | The configured interval is in minutes. |
| Webhook logs are not sent. | Logging is disabled, the URL is empty/invalid, or the event category is disabled. | Enable the webhook, set a valid private URL, and enable the event category. | Check outbound HTTP restrictions and Discord webhook status. |
| Discord webhook reports unauthorized or not found. | The webhook was deleted, regenerated, or copied incorrectly. | Create a new webhook and replace the URL privately. | Never publish the new URL in documentation or source control. |
| Notifications do not appear. | Selected provider is missing or its bridge call is incompatible with the installed version. | Select the exact provider or use `ox_lib`; enable fallback. | Restart after changing the provider. |
| Notifications appear twice. | Both a custom provider and fallback/framework notification are firing. | Select one provider and inspect custom bridge modifications. | Revert edited notification bridge files for comparison. |
| `CreateFlyer` returns `invalid_data`. | URL, coordinates, normal, dimensions, or expiration data is malformed. | Validate the integration data and use the documented aliases/types. | Log the payload server-side without exposing sensitive data. |
| `CreateFlyer` returns `restricted_zone`. | External coordinates are inside an active restricted zone. | Choose a permitted coordinate or change the zone intentionally. | External creation does not bypass zone protection. |
| `CreateFlyer` returns `overlap`. | The new geometry conflicts with an existing flyer. | Move the coordinates or remove the existing flyer. | External creation does not bypass overlap protection. |
| `CreateFlyer` returns `global_limit_reached`. | The configured global active flyer limit has been reached. | Remove old flyers or raise the limit responsibly. | Check whether permanent system flyers are accumulating. |
| `RemoveFlyer` returns `not_found`. | The ID is wrong, already deleted, or already expired. | Refresh your stored ID/state before trying again. | Store the ID returned by `CreateFlyer`. |
| `GetActiveFlyers` returns an empty table. | Database initialization is incomplete or there are no active flyers. | Wait until the resource is fully started and verify SQL rows. | Do not call the export during another resource's earliest loading phase without retry handling. |
| Controls conflict with another script during placement. | Another resource is capturing the same keys or NUI focus. | Temporarily disable the conflicting resource and remap its controls where possible. | Check scripts that alter first-person mode, freecam, or disabled controls. |
| The player remains frozen after an unexpected error. | Another resource error interrupted an animation or progress flow. | Restart the affected client/resource and inspect the original F8 error. | Avoid masking the error with repeated restarts before collecting logs. |


---

# ❓ **FREQUENTLY ASKED QUESTIONS (FAQ):**

| Question | Answer |
|---|---|
| What does `smdz_flyers` do? | It lets players and staff place persistent remote images as 3D wall flyers, with SQL storage, expiration, moderation, streaming, and restricted placement zones. |
| Is the resource standalone? | Yes. It supports standalone mode as well as ESX, QBCore, and Qbox. Database and `ox_lib` dependencies are still required. |
| Which frameworks are supported? | ESX, QBCore, Qbox, and standalone. |
| Which database library is required? | `oxmysql` is mandatory. |
| Is `ox_lib` required? | Yes. It is a mandatory dependency for core resource functionality. |
| Which inventories are supported? | `ox_inventory`, `qs-inventory`, `origen_inventory`, `tgiann-inventory`, `ak47_inventory`, framework-native inventory behavior, and standalone operation. |
| Which target systems are supported? | `ox_target` and `qb-target`. Target integration can also be disabled. |
| Can the script run without a target resource? | Yes, but enlarged target previews and target-based removal interactions will not be available. |
| Can players place flyers without an item? | In standalone mode, this is controlled by `Config.Standalone.AllowCommandWithoutItem`. Normal framework/inventory use generally requires the configured item. |
| When is the flyer item consumed? | Only after server validation succeeds and the flyer is inserted into SQL successfully. |
| Is the item consumed when the player cancels? | No. Canceling or failing validation does not consume it. |
| Is the item returned when a flyer is removed? | No. Removal permanently deletes the flyer and does not refund an item. |
| Can players remove their own flyers? | Yes, when `Config.FlyerRemoval.AllowOwner` is enabled. |
| Can anyone remove any flyer? | Only when `Config.FlyerRemoval.AllowPublic` is intentionally enabled. It is disabled by default. |
| Can police remove flyers? | Yes. Police-style jobs and minimum grades can be configured. |
| Can custom jobs remove flyers? | Yes. `AllowedJobs` supports all grades, minimum grades, and optional duty requirements. |
| Can administrators remove and edit flyers? | Yes, authorized staff can view, teleport, move, change the image, and delete flyers. |
| How is admin permission granted? | Through ACE permission or an enabled framework group. Passing either enabled method is sufficient. |
| What ACE permission is used? | `smdz.flyers.admin` by default. |
| Can the commands be renamed? | Yes, through `Config.Command` and `Config.AdminCommand`. Restart afterward. |
| Are flyers persistent after a server restart? | Yes. Active flyers are stored in SQL and synchronized again after startup. |
| How long do flyers last? | The default lifetime is 24 hours when automatic cleanup is enabled. It is configurable. |
| Can a flyer be permanent? | Yes, through the `CreateFlyer` export using `permanent = true`. |
| Can normal player flyers be made permanent from the default UI? | The standard flow uses the configured automatic lifetime. Permanent behavior is intended for controlled external or staff integrations unless the source is customized. |
| Are expired flyers only hidden or actually deleted? | Automatic cleanup deletes expired flyer rows and synchronizes their removal. |
| Does restarting the resource reset placement cooldowns? | No. Cooldown state is reconstructed from persistent flyer data where applicable. |
| What image formats are accepted? | PNG, JPG, JPEG, and WebP by default. |
| Does the image URL need HTTPS? | Yes. The validator requires a secure direct image URL. |
| Can I use a Discord attachment URL? | It may work while the URL remains valid and embeddable, but expiring or changed CDN URLs can later break. A stable direct image host is safer. |
| Does the script upload images? | No. It displays the remote URL. Image hosting remains the server owner's or player's responsibility. |
| Can I block an image host? | Yes. Add its domain to `Config.BlockedImageDomains`; subdomains are blocked too. |
| Can players change flyer size? | No. All flyers use the dimensions configured in `Config.FlyerSize`. |
| Can players rotate flyers? | Yes, during world placement using the configured rotation controls. |
| Can flyers be placed on vehicles? | No. Vehicle surfaces are rejected. |
| Can flyers be placed on floors or roofs? | Normally no. The wall-normal rule requires a sufficiently vertical surface. |
| What does preview lock do? | It freezes the selected flyer preview so the player can inspect it before final confirmation. |
| Why is placement forced into first person? | It provides more accurate wall aiming. This behavior can be disabled in the configuration. |
| Why does the character walk toward the wall? | The placement animation can approach the wall automatically for a more natural result. It is configurable and distance-limited. |
| Can two flyers occupy the same wall position? | Not when overlap protection is enabled. |
| Can overlap protection be disabled? | Yes, but it is not recommended on public servers. |
| What are restricted zones? | Persistent polygon areas created by administrators where flyer placement is blocked. |
| Are restricted zones saved after restart? | Yes, they are stored in `smdz_flyer_zones`. |
| Can a restricted zone be disabled without deleting it? | Yes. Disabled zones remain stored but stop blocking placement. |
| How many corners can a zone have? | Up to 25 by default, with a minimum of three valid points. |
| Can staff create flyers without an item? | Yes, through the administration panel. These are marked as staff-created flyers. |
| Do staff flyers count toward a player's personal limit? | No. Admin-created flyers bypass the normal player limit and cooldown. |
| Do external `CreateFlyer` calls bypass all protections? | No. They still respect database readiness, URL/geometry validation, global limit, restricted zones, and overlap checks. |
| Is there a public client export? | The documented public API is server-side. |
| Should another resource trigger the internal network events? | No. Use the documented server exports because internal events are implementation details. |
| How do I create a flyer from another script? | Call the server export `CreateFlyer` with a URL, coordinates, surface normal, and optional identity/expiration fields. |
| How do I start the normal player item flow from another script? | Call the server export `UseFlyerItem(source, slot?)`. |
| How do I delete a flyer from another script? | Store its ID and call `RemoveFlyer(id)`. |
| How can another resource read current flyers? | Use `GetActiveFlyers()` on the server. |
| Does `GetActiveFlyers()` return the internal live table? | No. It returns a detached, sorted snapshot to reduce accidental mutation. |
| Can I increase the DUI resolution? | Yes, but higher resolutions increase client memory and loading cost. The default is a sensible balance. |
| Does every player load every flyer on the server? | No. DUI textures and target zones are created only for flyers inside the configured streaming range. |
| Can I reduce client usage? | Reduce the streaming distance, keep image files optimized, retain reasonable flyer limits, and avoid unnecessarily high DUI resolution. |
| Are the UI and messages translated? | Yes. English, Spanish, German, and French locales are included. |
| Can I add another language? | Yes, by creating a matching locale file and translating the required keys used by Lua and the NUI. |
| Are webhook logs required? | No. They can be disabled completely. |
| Which actions can be logged to Discord? | Command use, item use, placement, updates, deletion, expiration, and rejected actions can be toggled individually. |
| Why should I regenerate the webhook included in a shared ZIP? | Anyone with the URL can send messages through it. A webhook exposed outside the private server should be deleted and recreated. |
| Can I rename the resource folder? | No. It must remain exactly `smdz_flyers`; the protected version stops automatically when renamed. |
| Can an open-source buyer remove the folder-name check? | Only when their license permits it, as noted in the resource warning. |
| Do I need to restart after changing the configuration? | Yes. Provider detection and most configuration values are initialized when the resource starts. |
| Is the admin panel position remembered? | Yes, its screen position is stored locally in the NUI browser storage. |
| Does the manual admin refresh cooldown stop live updates? | No. Live synchronization continues while the manual button is cooling down. |
| Can I safely update without deleting existing flyers? | Yes. Back up the tables, replace files, merge config changes, and run the new migration-safe installer. |
| Should I overwrite my new config with an old config during updates? | No. Merge your values into the new file so newly added settings are not lost. |
| What should I back up before updating? | `shared/config.lua`, custom locales/bridges, and both SQL tables. |
| Where should I report a reproducible issue? | Use the official SMDZ Studios support channel and include versions, logs, reproduction steps, and non-secret config details. |

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
