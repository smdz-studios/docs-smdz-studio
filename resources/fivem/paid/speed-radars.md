
<section class="bridge-policy-card bridge-policy-card--warning" aria-label="Mandatory SMDZ Bridge dependency" style="margin-top: 0; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(180deg, rgba(127, 29, 29, 0.34), rgba(38, 10, 10, 0.92)); border-radius: 18px; padding: 1.2rem 1.15rem 1.15rem; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);">
  <p class="bridge-policy-card__label" style="margin: 0 0 0.45rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; color: #fca5a5; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" style="display: block; fill: currentColor;">
      <path d="M12 3 2.7 19a1 1 0 0 0 .87 1.5h16.86A1 1 0 0 0 21.3 19L12 3Zm-1 5h2v6h-2V8Zm0 8h2v2h-2v-2Z"></path>
    </svg>
    Required Dependency
  </p>
  <h2 style="margin: 0 0 0.85rem; font-size: clamp(1.45rem, 3vw, 2.2rem); line-height: 1.05; color: #fef2f2;">THIS RESOURCE REQUIRES SMDZ BRIDGE</h2>
  <p style="margin: 0; color: #fecaca; line-height: 1.7; font-weight: 700;">
    SMDZ Bridge is a required dependency for this resource and must be installed correctly in order for it to function as intended. Please ensure that the bridge is present, properly configured, actively running, and started before any resource that depends on it.
  </p>
  <a class="bridge-policy-card__cta bridge-policy-card__cta--warning" href="#/resources/fivem/bridge/main.md">Open Bridge Docs</a>
</section>

---

<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/35S5MjCc8Us"
    title="smdz_speedradars showcase"
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

[![](https://badges.5metrics.dev/smdz_speedradars/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_speedradars) | [![](https://badges.5metrics.dev/smdz_speedradars/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_speedradars)

</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_speedradars`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox through `smdz_bridge`
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SMDZ Speed Radars is a complete speed-enforcement system for FiveM with portable police radars, persistent administrative speed cameras, live radar monitoring, automatic fines, photographic evidence, configurable exemptions, radar groups, and fine-payment locations.

---

# ⭐ **FEATURES:**

- 🚔 **Portable police radar system** with inventory use, precise raycast placement, configurable limits, automatic fines, and immersive roadside enforcement.
- 📸 **Real photographic evidence** captured from the radar lens, including detailed speeding tickets with plate, vehicle, speed, limit, location, fine amount, date, and evidence image.
- 🎥 **Advanced live radar camera** with manual movement, extended zoom, night vision, synchronized manual flash, real-time speed/plate/model information, and speeding vehicles highlighted in red.
- 🛡️ **Server-validated enforcement** with lens-facing capture cones, line-of-sight checks, occlusion filtering, configurable exemptions, and protected fine/payment logic.
- 🗺️ **Complete permanent radar management** with SQL persistence, multiple radar props, custom groups, group activation, duplication, editing, moving, deleting, and teleport controls.
- 💳 **Integrated fine registry and payment system** with police/sheriff NPCs, evidence review, pending/paid history, cash or bank payments, and optional map blips.
- 🔌 **Professional compatibility layer** through mandatory `smdz_bridge`, supporting ESX, QBCore, Qbox, multiple inventories, notifications, TextUI, banking, plus local `ox_target` and `qb-target` support.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended build.
- **Framework:** ESX, QBCore, or Qbox supported through `smdz_bridge`.
- **Required dependencies:**
  - `smdz_bridge`
  - `oxmysql`
  - `screencapture`
- **Optional interaction resources:**
  - `ox_target`
  - `qb-target`


### Framework Providers

- `qbx_core` for Qbox
- `qb-core` for QBCore
- `es_extended` for ESX

### Inventory Providers

- `ox_inventory`
- `ak47_inventory`
- `codem-inventory`
- `core_inventory`
- `jaksam_inventory`
- `origen_inventory`
- `qb-inventory`
- `qs-inventory`
- `tgiann-inventory`
- `qb-core` as native QBCore inventory fallback
- `es_extended` as native ESX inventory fallback

### Notification Providers

- `brutal_notify`
- `codem-notification`
- `esx_notify`
- `FL-Notify`
- `gtm-ui`
- `lation_ui`
- `mythic_notify`
- `okokNotify`
- `origen_notify`
- `ox_lib`
- `qb-core`
- `qf_notify`
- `RO_Notify`
- `rtx_notify`
- `RxNotify`
- `vms_notifyv2`
- `wasabi_notify`
- `wasabi_uikit`
- `xsNotify`
- `frkn-uikit`
- `es_extended`

### TextUI Providers

- `smdz_textui`
- `brutal_textui`
- `bx_textui`
- `cd_drawtextui`
- `codem-textui`
- `dsco_textui`
- `esx_textui`
- `jg-textui`
- `lation_ui`
- `okokTextUI`
- `origen_notify`
- `ox_lib`
- `qb-core`
- `wasabi_uikit`
- `ZSX_UIV2`
- `qs-textui`
- `r3-textui`
- `lab-TextUI`
- `KS-Textui`



---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_speedradars_v1.0.0.zip`.

2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_speedradars
```

3. Make sure the required resources are installed and started before SMDZ Speed Radars.

Recommended order:

```bash
## Database / Bridge
ensure oxmysql
ensure smdz_bridge
ensure screencapture

## Optional target - only start the one you use
# ensure ox_target
# ensure qb-target

## SMDZ Studios
ensure smdz_speedradars
```

4. Install the portable radar item using the included example:

```text
install_files/items.lua
```

For ESX installations, an SQL item example is also included:

```text
install_files/items_esx.sql
```

For `ox_inventory`, the portable radar item uses:

```lua
client = {
    export = 'smdz_speedradars.usePortableRadar'
}
```

5. Database tables can be created and migrated automatically by the resource.

For a clean manual installation, import:

```text
install_files/smdz_speedradars.sql
```


The manifest requests:

```lua
data_file 'DLC_ITYP_REQUEST' 'stream/bzzz_police_prop_radar.ytyp'
```

Read:

```text
stream/credits.md
```

for the original creator credit and license references.

1. Restart your server or start the resource manually:

```bash
start smdz_speedradars
```

8. Check the server console for the SMDZ Bridge health check, SQL migrations, loaded permanent radars, inventory provider, and any `[WARN]` or `[ERROR]` messages.

---

# ⚙️ **CONFIGURATION:**

The resource uses three configuration files:

```text
config.lua
config_style_ui.lua
server_config.lua
```

### `config.lua`

```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



Config = {}

-- ============================================================================
-- SMDZ SPEED RADARS - SHARED CONFIGURATION
-- ============================================================================
-- INDEX
--   01. Core settings
--   02. Administration and radar groups
--   03. Interaction
--   04. Portable radar
--   05. Live radar view
--   06. Warning sign
--   07. Speed rules and exemptions
--   08. Detection and capture zone
--   09. Cooldowns and radar streaming
--   10. Fine calculation
--   11. Fine registry NPCs
--   12. Flash effect
--   13. Evidence capture
--   14. Radar props
--   15. Placement
-- ============================================================================

-- ============================================================================
-- 01. CORE SETTINGS
-- ============================================================================

Config.Debug = false -- Enables detailed colored diagnostic prints in the server/client console.
Config.Locale = 'en' -- Selects the active locale: es, en, fr, de, it, pt, or nl.
Config.SpeedUnit = 'kmh' -- Selects the displayed speed unit: 'kmh' or 'mph'.

-- ============================================================================
-- 02. ADMINISTRATION AND RADAR GROUPS
-- ============================================================================

Config.AdminCommand = 'radars' -- Defines the chat command used to open the radar administration panel.

Config.RadarIds = { -- Defines the allowed public ID range for permanent radars.
    min = 1, -- Sets the lowest public permanent radar ID.
    max = 999 -- Sets the highest public permanent radar ID and keeps IDs at three digits maximum.
}

Config.RadarGroups = { -- Controls persistent grouping of permanent radars.
    enabled = true, -- Enables radar groups and group actions in the administration panel.
    maxNameLength = 64, -- Limits radar group names to this many characters after server validation.
    defaultGroup = '' -- Sets the default group for newly created radars; empty means no group.
}

Config.AdminAccess = { -- Controls who can use administration actions.
    ace = true, -- Enables ACE permission checks for administration access.
    acePermission = 'smdz.speedradars.admin', -- Defines the ACE permission name accepted by the resource.
    frameworkGroups = true, -- Enables framework group checks through smdz_bridge.
    groups = { -- Lists framework groups allowed to administer radars.
        owner = true, -- Allows the framework 'owner' group.
        admin = true, -- Allows the framework 'admin' group.
        developer = true -- Allows the framework 'developer' group.
    }
}

-- ============================================================================
-- 03. INTERACTION
-- ============================================================================


Config.Interaction = 'textui' -- Selects interaction mode: 'textui' or 'target'.
Config.TargetResource = 'ox_target' -- Selects the target provider when target mode is used: 'ox_target' or 'qb-target'.

-- ============================================================================
-- 04. PORTABLE RADAR
-- ============================================================================

Config.PortableRadarItem = 'police_radar' -- Defines the inventory item used to deploy a portable radar.
Config.PortableRadarModel = 'bzzz_police_prop_radar_c' -- Defines the prop model spawned for portable police radars.
Config.PortableRadarJobs = { -- Lists jobs allowed to use portable radars.
    police = true, -- Allows police players to deploy and manage portable radars.
    sheriff = true -- Allows sheriff players to deploy and manage portable radars.
}

-- ============================================================================
-- 05. LIVE RADAR VIEW
-- ============================================================================

Config.RadarView = { -- Controls the interactive camera used to observe traffic through a portable radar.
    enabled = true, -- Enables the live radar-view feature.
    maxVehicleDistance = 180.0, -- Limits how far vehicles can be scanned and labeled while viewing the radar.
    vehicleScanIntervalMs = 100, -- Sets the vehicle scan interval while radar view is active.
    maxLabels = 16, -- Limits the number of vehicle labels rendered at the same time.

    cameraFov = 38.0, -- Sets the default live-view camera field of view.
    cameraPitch = -4.0, -- Sets the base vertical camera angle in degrees.
    minFov = 22.0, -- Sets the strongest allowed zoom level; lower FOV means more zoom.
    maxFov = 44.0, -- Sets the widest allowed zoom level.
    zoomStep = 1.25, -- Sets how much the FOV changes per mouse-wheel zoom step.

    maxYawOffset = 42.0, -- Limits horizontal camera movement away from the physical radar heading.
    minPitchOffset = -14.0, -- Limits downward camera movement relative to the base pitch.
    maxPitchOffset = 12.0, -- Limits upward camera movement relative to the base pitch.
    lookSensitivity = 4.25, -- Controls mouse sensitivity while moving the radar camera.
    fovMarginDegrees = 4.0, -- Adds a small FOV margin when deciding whether a vehicle label is visible.
    headingOffset = 0.0, -- Applies a model-specific heading correction without changing the placed radar heading.

    exitControl = 177, -- Sets the FiveM control used to leave radar view; 177 is BACKSPACE.
    manualFlashControl = 47, -- Sets the FiveM control used for a synchronized manual flash; 47 is G.
    manualFlashKey = 'G', -- Sets the key label displayed for the manual flash control.
    manualFlashCooldownMs = 750, -- Prevents repeated manual flashes faster than this interval.

    nightVisionDefault = false, -- Defines whether night vision starts enabled when radar view opens.
    nightVisionControl = 74, -- Sets the FiveM control used to toggle night vision; 74 is H.
    nightVisionKey = 'H', -- Sets the key label displayed for the night-vision control.

    animation = { -- Defines the prop-free animation played while operating the radar camera.
        dict = 'amb@world_human_stand_guard@male@base', -- Sets the animation dictionary used by the operator.
        clip = 'base' -- Sets the animation clip used by the operator.
    }
}

-- ============================================================================
-- 06. WARNING SIGN
-- ============================================================================
--
Config.WarningSign = { -- Controls the optional advance-warning sign placed before a radar.
    enabled = true, -- Enables warning-sign support globally.
    defaultEnabled = true, -- Enables the warning-sign option by default when creating a radar.
    model = 'as_speed_camera_prop', -- Defines the warning-sign prop model; the external asset is not redistributed by this resource.
    maxDistanceFromRadar = 180.0, -- Sets the maximum server-validated distance between a sign and its radar.
    placementRaycastDistance = 180.0 -- Sets how far the placement raycast can reach while positioning the warning sign.
}

-- ============================================================================
-- 07. SPEED RULES AND EXEMPTIONS
-- ============================================================================

Config.DefaultSpeedLimit = 80 -- Sets the default speed limit shown when creating a radar.
Config.MinSpeedLimit = 10 -- Sets the minimum speed limit accepted by client and server validation.
Config.MaxSpeedLimit = 350 -- Sets the maximum speed limit accepted by client and server validation.
Config.SpeedTolerance = 5 -- Adds this tolerance above the configured limit before an infraction is accepted.

Config.Exemptions = { -- Controls server-side exemptions that prevent a fine, flash and evidence capture.
    enabled = false, -- Enables the exemption system globally.

    jobs = { -- Controls exemptions based on the driver's framework job.
        enabled = true, -- Enables job-based exemptions.
        requireSiren = false, -- Requires an active siren for exempt jobs when set to true.
        values = { -- Lists jobs treated as exempt when job exemptions are enabled.
            police = true, -- Exempts police drivers according to the job exemption rules.
            sheriff = true, -- Exempts sheriff drivers according to the job exemption rules.
            ambulance = true -- Exempts ambulance drivers according to the job exemption rules.
        }
    },

    plates = { -- Controls exemptions based on exact vehicle plates.
        enabled = true, -- Enables plate-whitelist exemptions.
        values = { -- Lists case-insensitive, trimmed plates that should never receive radar fines.
            -- 'POLICE', -- Example: uncomment to exempt the exact plate POLICE.
            -- 'EMS' -- Example: uncomment to exempt the exact plate EMS.
        }
    },

    vehicleClasses = { -- Controls exemptions based on GTA vehicle classes.
        enabled = true, -- Enables vehicle-class exemptions.
        values = { -- Lists GTA vehicle class IDs that should always be exempt.
            -- [15] = true, -- Example: helicopters.
            -- [16] = true -- Example: planes.
        }
    },

    emergencyVehicles = { -- Controls the dedicated GTA emergency-vehicle class exemption.
        enabled = true, -- Enables the emergency-vehicle exemption rule.
        class = 18, -- Defines the GTA vehicle class treated as emergency vehicles.
        requireSiren = true -- Requires the emergency vehicle siren to be active before applying the exemption.
    }
}

-- ============================================================================
-- 08. DETECTION AND CAPTURE ZONE
-- ============================================================================

Config.DetectionRadius = 65.0 -- Sets the broad 360-degree client detection radius around each radar.
Config.ServerValidationRadius = 90.0 -- Sets the maximum server-side distance accepted for an enforcement request.
Config.DetectionVerticalTolerance = 12.0 -- Limits the vertical difference allowed between a radar and a detected vehicle.
Config.DetectionIntervalMs = 90 -- Sets the client detection interval while driving near active radars.
Config.SweptDetection = true -- Enables segment-based detection so fast vehicles cannot skip the radar between ticks.

Config.CaptureZone = { -- Defines the lens-facing cone required before a fine and evidence photo can be created.
    enabled = true, -- Enables directional lens-based capture validation.
    fovDegrees = 50.0, -- Sets the horizontal capture cone width in degrees.
    maxDistance = 70.0, -- Sets the maximum distance at which the lens can confirm an infraction.
    serverMarginDegrees = 4.0, -- Adds a small server-side angular tolerance to avoid rejecting legitimate edge cases.
    previewDistance = 38.0 -- Sets the visible length of capture-cone guide lines during placement.
}

-- ============================================================================
-- 09. COOLDOWNS AND RADAR STREAMING
-- ============================================================================

Config.PlayerRadarCooldownMs = 9000 -- Prevents the same player from being fined repeatedly by the same pass too quickly.
Config.RadarGlobalCooldownMs = 0 -- Sets an optional global cooldown per radar; zero disables this additional cooldown.
Config.TriggerRateLimitMs = 350 -- Rate-limits client enforcement requests before deeper server validation.

Config.PropSpawnDistance = 500.0 -- Sets the distance at which synchronized radar/sign props are streamed locally.
Config.PropDespawnDistance = 560.0 -- Sets the distance at which locally streamed radar/sign props are removed.
Config.StreamIntervalMs = 1000 -- Sets how often the local prop streaming system evaluates distance changes.

-- ============================================================================
-- 10. FINE CALCULATION
-- ============================================================================

Config.Fines = { -- Controls progressive fine calculation.
    enabled = true, -- Enables monetary fines for validated speeding infractions.

    progressive = { -- Defines progressive pricing based on how far the driver exceeds the limit.
        base = 50, -- Sets the fixed starting amount added to every fine.
        segments = { -- Defines per-unit pricing bands for the amount above the speed limit.
            { upTo = 20, perUnit = 8 }, -- Charges 8 per excess unit for the first 20 units over the limit.
            { upTo = 40, perUnit = 12 }, -- Charges 12 per excess unit from 21 through 40 units over the limit.
            { upTo = 60, perUnit = 18 }, -- Charges 18 per excess unit from 41 through 60 units over the limit.
            { upTo = false, perUnit = 28 } -- Charges 28 per excess unit beyond 60 units over the limit.
        },
        roundTo = 5, -- Rounds the final fine amount to the nearest configured monetary step.
        maxFine = 5000 -- Caps the final fine amount at this value.
    }
}

-- ============================================================================
-- 11. FINE REGISTRY NPCS
-- ============================================================================

Config.FineRegistry = { -- Controls the NPC locations used to view and pay radar fines.
    enabled = true, -- Enables the fine-registry system and its NPCs.
    paymentMethods = { cash = true, bank = true }, -- Enables supported payment methods after server-side money validation.
    targetDistance = 2.2, -- Sets the interaction distance when target mode is selected.
    textDistance = 2.0, -- Sets the interaction distance when TextUI mode is selected.

    npcs = { -- Defines every police/sheriff NPC where players can open the fine registry.
        {
            model = 's_m_y_cop_01', -- Sets the NPC model for this Los Santos police fine-payment location.
            coords = vec4(639.3177, 2.9197, 82.7865, 251.1681), -- Sets NPC position and heading.
            scenario = 'WORLD_HUMAN_CLIPBOARD', -- Sets the idle scenario played by the NPC.
            label = 'View and pay fines', -- Sets the interaction label shown for this NPC.
            blip = { enabled = true, sprite = 525, color = 3, scale = 0.75, shortRange = true, label = 'Fine Payment' } -- Configures the optional document-style map blip for this NPC.
        },
        {
            model = 's_m_y_cop_01', -- Sets the NPC model for this Los Santos police fine-payment location.
            coords = vec4(824.4482, -1292.6956, 28.2406, 55.4177), -- Sets NPC position and heading.
            scenario = 'WORLD_HUMAN_CLIPBOARD', -- Sets the idle scenario played by the NPC.
            label = 'View and pay fines', -- Sets the interaction label shown for this NPC.
            blip = { enabled = true, sprite = 525, color = 3, scale = 0.75, shortRange = true, label = 'Fine Payment' } -- Configures the optional document-style map blip for this NPC.
        },
        {
            model = 's_m_y_cop_01', -- Sets the NPC model for this Los Santos police fine-payment location.
            coords = vec4(433.2914, -984.8279, 30.7100, 59.0946), -- Sets NPC position and heading.
            scenario = 'WORLD_HUMAN_CLIPBOARD', -- Sets the idle scenario played by the NPC.
            label = 'View and pay fines', -- Sets the interaction label shown for this NPC.
            blip = { enabled = true, sprite = 525, color = 3, scale = 0.75, shortRange = true, label = 'Fine Payment' } -- Configures the optional document-style map blip for this NPC.
        },
        {
            model = 's_m_y_sheriff_01', -- Sets the NPC model for this Blaine County sheriff fine-payment location.
            coords = vec4(1854.8942, 3688.0996, 34.2671, 196.5638), -- Sets NPC position and heading.
            scenario = 'WORLD_HUMAN_CLIPBOARD', -- Sets the idle scenario played by the NPC.
            label = 'View and pay fines', -- Sets the interaction label shown for this sheriff NPC.
            blip = { enabled = true, sprite = 525, color = 47, scale = 0.75, shortRange = true, label = 'Fine Payment - Sheriff' } -- Configures the optional sheriff document-style map blip for this NPC.
        },
        {
            model = 's_m_y_sheriff_01', -- Sets the NPC model for this Blaine County sheriff fine-payment location.
            coords = vec4(-448.6169, 6012.8159, 31.7164, 307.6692), -- Sets NPC position and heading.
            scenario = 'WORLD_HUMAN_CLIPBOARD', -- Sets the idle scenario played by the NPC.
            label = 'View and pay fines', -- Sets the interaction label shown for this sheriff NPC.
            blip = { enabled = true, sprite = 525, color = 47, scale = 0.75, shortRange = true, label = 'Fine Payment - Sheriff' } -- Configures the optional sheriff document-style map blip for this NPC.
        }
    }
}

-- ============================================================================
-- 12. FLASH EFFECT
-- ============================================================================

Config.Flash = { -- Controls the synchronized physical and screen flash effects.
    enabled = true, -- Enables radar flash effects.
    distance = 500.0, -- Sets the maximum distance at which players receive the synchronized world flash.
    soundDistance = 120.0, -- Sets the maximum distance at which players can hear the camera sound.
    ptfxAsset = 'scr_bike_business', -- Defines the particle dictionary used for the camera flash.
    ptfxName = 'scr_bike_cfid_camera_flash', -- Defines the particle effect used for the camera flash.
    scale = 4.8, -- Sets the particle-effect size.
    bursts = 3, -- Sets how many flash particle bursts are produced per capture.
    burstIntervalMs = 95, -- Sets the delay between flash particle bursts.
    lightDurationMs = 420, -- Sets how long the temporary world light remains active.
    lightRange = 32.0, -- Sets the radius of the temporary world light.
    lightIntensity = 10.0, -- Sets the intensity of the temporary world light.
    soundName = 'Camera_Shoot', -- Defines the frontend sound played for the camera shutter.
    soundSet = 'Phone_SoundSet_Default', -- Defines the GTA sound set used by the camera shutter sound.
    screenFlashDurationMs = 620 -- Sets how long the offender's full-screen flash animation lasts.
}

-- ============================================================================
-- 13. EVIDENCE CAPTURE
-- ============================================================================

Config.Screenshot = { -- Controls server-authorized radar evidence screenshots.
    enabled = true, -- Enables evidence-photo capture for fines.
    resource = 'screencapture', -- Defines the mandatory screencapture resource used for evidence images.
    encoding = 'webp', -- Defines the image encoding requested from screencapture.
    maxWidth = 768, -- Limits evidence-image width before it is returned to the script.
    maxHeight = 432, -- Limits evidence-image height before it is returned to the script.
    captureDelayMs = 50, -- Delays capture slightly after validation so the flash and capture do not occur on the same frame.
    cameraWarmupMs = 60, -- Gives the temporary radar camera time to become active before capture.
    cameraFov = 50.0, -- Sets the evidence-camera field of view and matches the configured lens-facing capture concept.
    cameraPitch = -4.0, -- Sets the fixed evidence-camera vertical angle.
    headingOffset = 0.0, -- Applies an optional evidence-camera heading correction for custom models.
    ticketDelayAfterCaptureMs = 2200, -- Delays ticket display until the temporary capture camera has been restored.
    captureTimeoutMs = 6000, -- Aborts an evidence request that does not finish within this time.
    maxStoredDataLength = 650000 -- Rejects oversized base64 data URIs before SQL storage or client delivery.
}

-- ============================================================================
-- 14. RADAR PROPS
-- ============================================================================

Config.RadarProps = { -- Defines the only permanent/admin radar prop choices and their lens/flash offsets.
    { model = 'p_tv_cam_02_s', label = 'TV Camera Static', flashOffset = vec3(0.0, 0.92, 1.42) }, -- Places the capture origin at the front lens of the static studio camera.
    { model = 'prop_tv_cam_02', label = 'TV Camera', flashOffset = vec3(0.0, 0.94, 1.36) }, -- Places the capture origin at the front lens of the standard studio camera.
    { model = 'prop_cctv_pole_03', label = 'CCTV Pole', flashOffset = vec3(0.0, 0.38, 5.72) }, -- Places the capture origin at the elevated camera head instead of the pole base.
    { model = 'bzzz_police_prop_radar_c', label = 'Police Radar', flashOffset = vec3(0.0, 0.02, 0.82) } -- Places the capture origin at the BzZz police-radar lens; see stream/credits.md.
}

Config.PortableFlashOffset = vec3(0.0, 0.02, 0.82) -- Defines the physical lens/flash offset for the portable BzZz radar prop.

-- ============================================================================
-- 15. PLACEMENT
-- ============================================================================

Config.Placement = { -- Controls precise prop placement and server distance validation.
    raycastDistance = 16.0, -- Sets the normal radar placement raycast distance from the gameplay camera.
    maxDistanceFromPlayer = 12.0, -- Limits how far a normal radar can be confirmed from the player's position.
    rotateStep = 2.5, -- Sets normal mouse-wheel rotation increments in degrees.
    fineRotateStep = 0.5, -- Sets SHIFT precision rotation increments in degrees.
    heightStep = 0.03, -- Sets normal vertical adjustment increments.
    fineHeightStep = 0.01, -- Sets SHIFT precision vertical adjustment increments.
    editMaxDistance = 35.0, -- Limits how far a staff member can be from a radar before editing its position.
    previewAlpha = 170, -- Sets preview-prop transparency during placement.
    groundSnap = true -- Enables automatic ground snapping by default during placement.
}

```


### `config_style_ui.lua`



```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



ConfigStyleUI = {}

-- ============================================================================
-- SMDZ SPEED RADARS - UI COLOR CONFIGURATION
-- ============================================================================
-- INDEX
--   01. Main surfaces
--   02. Borders and separators
--   03. Typography
--   04. Accent and semantic states
--   05. Fine ticket
--   06. Live radar overlay
--   07. Backdrops
--   08. World-space radar graphics
--   09. Absolute black/white references
--
-- All NUI colors below are sent to the interface at runtime. A web rebuild is
-- not required after changing these values; restart the resource to apply them.
-- ============================================================================

ConfigStyleUI.Colors = { -- Contains every runtime-adjustable UI and world-space color used by the resource.

    -- ========================================================================
    -- 01. MAIN SURFACES
    -- ========================================================================

    background = '#0c0f13', -- Sets the main application/background color.
    surface = '#11151a', -- Sets the primary panel and control surface color.
    surfaceSecondary = '#151a20', -- Sets the secondary elevated surface color.
    surfaceTertiary = '#10151a', -- Sets the tertiary/subtle surface color.
    surfaceElevated = '#12171d', -- Sets the elevated modal/detail surface color.

    -- ========================================================================
    -- 02. BORDERS AND SEPARATORS
    -- ========================================================================

    line = '#293039', -- Sets the standard border and separator color.
    lineSoft = '#20262d', -- Sets subtle dividers and low-emphasis borders.
    lineStrong = '#3a434e', -- Sets strong borders, scrollbars and emphasized separators.

    -- ========================================================================
    -- 03. TYPOGRAPHY
    -- ========================================================================

    text = '#f1f4f7', -- Sets the primary readable text color.
    muted = '#8a949f', -- Sets secondary labels and descriptive text.
    mutedSecondary = '#5f6974', -- Sets lower-emphasis labels and placeholders.
    subtleText = '#687584', -- Sets tertiary labels, metadata and subdued UI copy.

    -- ========================================================================
    -- 04. ACCENT AND SEMANTIC STATES
    -- ========================================================================

    accent = '#6c9df3', -- Sets the primary interactive accent color.
    accentSoft = '#84adf5', -- Sets the softer accent used by secondary highlighted elements.
    accentHover = '#9bbcf6', -- Sets the accent color used for hover/focus feedback.
    accentText = '#08101c', -- Sets text/icon color rendered on bright accent backgrounds.
    success = '#72c793', -- Sets success, active and positive-status elements.
    danger = '#e46c74', -- Sets destructive, invalid and speeding-related UI states.
    dangerStrong = '#bc4e56', -- Sets stronger destructive emphasis where extra contrast is needed.
    warning = '#d6a55f', -- Sets warnings, pending states and confirmation-modal icons.

    -- ========================================================================
    -- 05. FINE TICKET
    -- ========================================================================

    ticketBackground = '#ffffff', -- Sets the physical fine-ticket paper background.
    ticketText = '#050505', -- Sets the primary fine-ticket ink/text color.
    ticketMuted = '#5d5d5d', -- Sets secondary fine-ticket labels and metadata.
    ticketLine = '#777777', -- Sets ticket borders, dashed separators and structural lines.
    ticketPhotoBackground = '#ededed', -- Sets the fallback background behind ticket evidence photos.

    -- ========================================================================
    -- 06. LIVE RADAR OVERLAY
    -- ========================================================================

    radarOverlayText = '#f2f4f6', -- Sets primary text inside the live radar-view overlay.
    radarOverlayDanger = '#e65d64', -- Sets speeding-vehicle emphasis inside the live radar view.
    radarOverlayLine = 'rgba(255, 255, 255, .55)', -- Sets strong live-view reticle and divider lines.
    radarOverlayLineSoft = 'rgba(255, 255, 255, .35)', -- Sets subtle live-view reticle and divider lines.
    radarOverlayMuted = 'rgba(255, 255, 255, .65)', -- Sets muted live-view labels and control hints.
    radarOverlayStrong = 'rgba(255, 255, 255, .85)', -- Sets high-emphasis live-view text/icons.
    radarOverlaySurface = 'rgba(0, 0, 0, .42)', -- Sets translucent backgrounds used by live-view control hints.

    -- ========================================================================
    -- 07. BACKDROPS
    -- ========================================================================

    modalBackdrop = 'rgba(3, 5, 7, .74)', -- Sets the dimmed background behind confirmation modals.
    photoBackdrop = 'rgba(0, 0, 0, .82)', -- Sets the dimmed background behind full-screen evidence previews.

    -- ========================================================================
    -- 08. WORLD-SPACE RADAR GRAPHICS
    -- ========================================================================

    worldTextNormal = { 235, 238, 242, 235 }, -- Sets RGBA color for normal vehicle labels in radar view.
    worldTextSpeeding = { 235, 92, 99, 235 }, -- Sets RGBA color for the specific speeding vehicle label.
    worldCaptureRay = { 108, 157, 243, 220 }, -- Sets RGBA color for the center capture-direction placement ray.
    worldCaptureRayEdge = { 241, 244, 247, 150 }, -- Sets RGBA color for capture-cone edge guide rays.

    -- ========================================================================
    -- 09. ABSOLUTE BLACK/WHITE REFERENCES
    -- ========================================================================

    pureWhite = '#ffffff', -- Sets the absolute white reference used by UI elements that require white.
    pureBlack = '#000000' -- Sets the absolute black reference used by UI elements that require black.
}

```


### `server_config.lua`



```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



ServerConfig = {}

-- ============================================================================
-- SMDZ SPEED RADARS - SERVER-ONLY CONFIGURATION
-- ============================================================================
-- INDEX
--   01. Discord webhook identity
--   02. Per-action Discord webhooks
--
-- Keep this file server-side. Do not place private webhook URLs in shared files.
-- ============================================================================

ServerConfig.Discord = { -- Controls optional Discord audit logging from the server.
    enabled = false, -- Enables Discord webhook delivery globally.
    username = 'SMDZ Speed Radars', -- Sets the webhook display name used by Discord messages.
    avatarUrl = '', -- Sets an optional HTTPS avatar URL for webhook messages; empty uses Discord defaults.

    webhooks = { -- Assigns an independent webhook URL to each audited action; leave a value empty to disable only that action.
        fineCreated = '', -- Receives newly created radar fines and attached evidence when available.
        finePaid = '', -- Receives successful fine-payment events.
        adminCreated = '', -- Receives permanent radar creation events from staff.
        adminEdited = '', -- Receives permanent radar configuration-edit events from staff.
        adminMoved = '', -- Receives permanent radar repositioning events from staff.
        adminDeleted = '', -- Receives permanent radar deletion events from staff.
        portablePlaced = '', -- Receives portable police-radar placement events.
        portableUpdated = '', -- Receives portable police-radar configuration changes.
        portablePicked = '', -- Receives portable police-radar pickup events.
        warningPlaced = '', -- Receives warning-sign placement/update events.
        errors = '' -- Receives critical resource errors suitable for Discord logging.
    }
}

```


---

# 🎮 **USAGE:**

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/radars` | Opens the permanent radar administration panel. | Requires configured admin ACE/framework permission. |

The command help text is localized and added to the FiveM chat suggestion system.

### Portable Radar Item

Default item:

```text
police_radar
```

Authorized officers use the item from their inventory to enter portable-radar placement mode.

### Portable Radar Placement Controls

| Control | Action |
|---|---|
| `ENTER` | Confirm placement. |
| `Mouse Wheel` | Rotate the radar. |
| `SHIFT + Mouse Wheel` | Fine rotation. |
| `Arrow Up / Arrow Down` | Adjust placement height. |
| `G` | Snap the radar to the ground. |
| `BACKSPACE` | Cancel placement. |

The radar follows the point being aimed at using a camera raycast. The placement preview displays guide lines representing the real capture cone.

### Portable Radar Interaction

With `Config.Interaction = 'textui'`, approach the portable radar and press `E`.

A custom SMDZ NUI menu opens directly. No `ox_lib` context menu is used.

With target mode enabled, the same interaction is exposed through `ox_target` or `qb-target`.

### Live Radar View Controls

| Control | Action |
|---|---|
| `Mouse` | Move the camera within the configured limits. |
| `Mouse Wheel` | Zoom in/out. |
| `H` | Toggle night vision. |
| `G` | Trigger a synchronized manual flash. |
| `BACKSPACE` | Exit radar view. |

Night vision always starts disabled and is disabled again when leaving radar view.

Vehicles can display current speed, license plate, and model. Only speeding vehicles are highlighted in red.

Visibility is filtered by maximum range, FOV, on-screen state, raycast, and entity occlusion.

### Permanent Radar Administration

Authorized staff can use `/radars` to:

- Create permanent radars.
- Select a radar prop.
- Configure speed limits.
- Enable or disable radars.
- Edit, move, or delete radars.
- Teleport to radars.
- Assign radar groups.
- Enable or disable an entire radar group.
- Duplicate existing radars.

Duplicating copies the radar configuration and immediately starts placement for the new radar.

### Radar Groups

Examples:

```text
Los Santos
Blaine County
Highway
Downtown
Route 68
```

Group information is persistent in SQL.

### Fine Payment NPCs

Default police locations:

```text
639.3177, 2.9197, 82.7865, 251.1681
824.4482, -1292.6956, 28.2406, 55.4177
433.2914, -984.8279, 30.7100, 59.0946
```

Default sheriff locations:

```text
1854.8942, 3688.0996, 34.2671, 196.5638
-448.6169, 6012.8159, 31.7164, 307.6692
```

Each NPC can have an optional configurable blip.

In TextUI mode, pressing `E` opens the fine-registry NUI directly.

### Fine Registry UI

Players can:

- View pending fines.
- View paid fines.
- Search/filter violations.
- Open full fine details.
- View evidence photos.
- View ticket copies.
- Pay using supported cash or bank methods.

All payment operations are validated server-side.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

SMDZ Speed Radars intentionally keeps its public API small.

Most network events are internal synchronization and validation events and are not a supported third-party API. External resources should not trigger internal fine, radar, SQL, payment, or synchronization events directly.

### Server Events

There are currently no public server events documented as a stable third-party integration API.

Internal server events handle radar synchronization, permanent administration, portable radar configuration, fine creation, evidence authorization, payments, groups, manual flash, and security validation.

### Client Events

There are currently no public client events documented as a stable third-party integration API.

Internal client events handle radar synchronization, placement, portable-radar management, live view, evidence capture, NUI state, and interaction state.

### Exports

The following client export is public and is used by compatible inventory definitions such as `ox_inventory`:

```lua
exports['smdz_speedradars']:usePortableRadar()
```

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| `usePortableRadar` | Client | None required | `nil` | Starts the normal portable-radar item-use request. Final item, job, and placement validation remains server-side through the resource and `smdz_bridge`. |

Example `ox_inventory` item:

```lua
['police_radar'] = {
    label = 'Portable Police Radar',
    weight = 4500,
    stack = false,
    close = true,
    consume = 0,
    description = 'Portable police speed enforcement radar.',
    client = {
        export = 'smdz_speedradars.usePortableRadar'
    }
}
```

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource does not start | Confirm the folder is named exactly `smdz_speedradars`.<br>Start `oxmysql`, `smdz_bridge`, and `screencapture` before this resource.<br>Check the **first** `[ERROR]` line in the server console, because later errors may only be consequences of the first failure. |
| `smdz_bridge` is not ready | Make sure `smdz_bridge` starts before `smdz_speedradars` and that its framework, inventory, notification, and TextUI providers are ready.<br>Review the bridge health-check and detected provider prints. |
| Framework or inventory is not detected | The provider is selected by `smdz_bridge`, not by SMDZ Speed Radars.<br>Verify the framework/inventory resource is started before the bridge and review the provider detected by SMDZ Bridge. |
| Portable radar item does nothing | Confirm the `police_radar` item exists in your inventory.<br>Verify the player has an authorized police job.<br>For `ox_inventory`, keep `client.export = 'smdz_speedradars.usePortableRadar'` in the item definition.<br>Review `[WARN]` / `[ERROR]` prints related to item validation. |
| `No such export usePortableRadar` | Confirm the resource folder is exactly `smdz_speedradars` and that you installed the latest complete resource build.<br>Make sure `client/item.lua` is present and restart both `smdz_speedradars` and the inventory resource after replacing files. |
| `invalid_callback` appears when registering the radar item | Do not manually add a second usable-item handler for `ox_inventory`.<br>`ox_inventory` should use the included client export, while other inventories are handled through the compatible `smdz_bridge` path. |
| TextUI interaction does not appear | Confirm `Config.Interaction = 'textui'`.<br>Verify the TextUI provider detected by SMDZ Bridge is running and ready.<br>Check that the player is inside the configured interaction distance. |
| Pressing `E` near a portable radar does nothing | Confirm the radar is synchronized to the client, the player is close enough, and TextUI mode is active.<br>The portable-radar interaction uses its own custom NUI menu and does not require `ox_lib`. |
| Target interaction does not appear | Set `Config.Interaction = 'target'`.<br>Set `Config.TargetResource` to either `ox_target` or `qb-target`.<br>Make sure the selected target resource starts before SMDZ Speed Radars. |
| Target icons appear incorrectly | Make sure you are running the latest build and the selected target system is supported.<br>Do not mix `ox_target` and `qb-target` APIs in custom edits. |
| Permanent radars disappear after a resource/server restart | Check `[SQL]`, `[WARN]`, and `[ERROR]` logs during startup.<br>Confirm the database connection is valid and the database user can `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `ALTER`, and create indexes.<br>Permanent radars are only added to runtime state after SQL persistence succeeds. |
| A newly created permanent radar appears in-game but is not stored | Review the SQL insert/verification debug prints.<br>The current build verifies the inserted row before accepting the radar as persistent.<br>If verification fails, fix the first SQL error rather than manually recreating the radar. |
| SQL migration fails | Back up the database first.<br>Import the current `install_files/smdz_speedradars.sql` if necessary.<br>Make sure the database account has `ALTER TABLE` and index permissions.<br>Do not mix schemas from older unreleased builds. |
| Radar identifiers look incorrect after upgrading | Permanent radar IDs are kept in the short `1–999` range.<br>Allow the automatic migration to complete and review SQL logs before manually editing radar IDs. |
| Fine IDs or identifiers are truncated | Use the current installer/migrations. Identifier-related SQL columns are designed with enough space for long framework identifiers.<br>Do not downgrade those columns manually. |
| Evidence photo is missing | Confirm `screencapture` is installed and started before SMDZ Speed Radars.<br>Review evidence authorization and capture debug logs.<br>Make sure the player actually entered the valid lens-facing capture cone. |
| Evidence photo points in the wrong direction | Verify the radar heading and the prop-specific lens offset.<br>The evidence camera uses the physical radar lens direction and no longer rotates to chase vehicles outside its real capture direction. |
| Radar photographs a vehicle from behind | Make sure you are using the latest build and check `Config.CaptureZone`.<br>The client and server both validate the lens-facing cone before accepting the violation. |
| Radar does not fine a speeding vehicle | Confirm the radar is enabled, the vehicle exceeds the configured limit plus tolerance, the driver is inside the valid capture cone, and the vehicle/player is not exempt.<br>Also verify the player is actually driving the vehicle. |
| Emergency vehicles are still being fined | Review `Config.Exemptions.emergencyVehicles` and the configured emergency vehicle class.<br>If `requireSiren = true`, the exemption only applies while the siren requirement is satisfied. |
| Police/EMS vehicles are being fined | Check `Config.Exemptions.jobs.values`, vehicle-class exemptions, and whether the correct player job is being returned by `smdz_bridge`. |
| Whitelisted plate is still fined | Plate comparisons are normalized, but the configured value must still match the real plate text.<br>Check for incorrect plate values or custom vehicle scripts that change plate data. |
| Vehicle labels appear through walls/objects | Install the latest build.<br>The live radar view uses FOV, on-screen, camera raycast, and entity occlusion checks.<br>Custom MLOs or unusual collision meshes can still affect GTA/FiveM visibility natives. |
| Vehicle labels do not appear in live radar view | The vehicle must be within configured range, inside the camera FOV, visible on screen, and have a valid line of sight from the camera.<br>Vehicles intentionally hidden behind geometry will not display information. |
| Zoom or night vision does not work | Check the configured live-radar controls and ensure another resource is not consuming the same control.<br>Night vision starts disabled every time the radar camera opens and is reset when leaving the view. |
| Manual flash does not trigger | Verify you are currently inside the live portable-radar view, the radar is still valid/enabled, and the manual-flash cooldown has expired. |
| Placement preview does not follow the mouse correctly | Make sure the player is aiming at a valid surface inside the placement raycast range.<br>Custom camera/resource control scripts may interfere with raycast direction or disabled controls. |
| `BACKSPACE` does not cancel placement | Verify another resource is not intercepting the same control.<br>The current placement flow uses `BACKSPACE` instead of `ESC` to avoid opening the GTA pause map. |
| Radar warning sign cannot be placed far enough | Review the warning-sign placement distance/raycast settings in `config.lua`.<br>The current build supports a significantly extended placement distance compared with the original version. |
| BzZz portable radar prop does not load | Confirm the original licensed BzZz stream assets are present in `stream/` and the file name matches `stream/bzzz_police_prop_radar.ytyp` from `fxmanifest.lua`.<br>Read `stream/credits.md` for the creator and license references. |
| `prop_cctv_pole_03` captures from the wrong height | Do not replace its configured lens/flash offset with the generic camera offset.<br>This prop is a tall pole and requires an elevated origin near the camera head. |
| Payment NPC does not appear | Verify the configured ped model and coordinates in `config.lua`.<br>Make sure the client is within streaming range and check client debug output for invalid model/load errors. |
| Pressing `E` at a payment NPC opens the wrong menu | In TextUI mode, payment NPCs should open the fine-registry NUI directly.<br>Replace the complete resource if an old `ox_lib` context-menu build is still installed. |
| Fine registry does not scroll correctly | Install the latest `web/dist` build.<br>Both the fine list and detail panel use independent custom scroll areas.<br>Clear the FiveM client cache if an old NUI version is still displayed. |
| Native Windows scrollbar appears in the UI | Replace the complete compiled `web/dist` folder with the current release and clear FiveM cache if necessary.<br>The current UI provides custom Chromium scrollbar styling. |
| `/radars` administration UI does not scroll correctly | Install the latest frontend build.<br>The administration panel and radar list have dedicated scroll handling; stale NUI files are the most common cause. |
| Bank payment fails | Confirm the active `smdz_bridge` banking or framework provider supports the configured account and money operations.<br>Review payment and rollback debug logs. |
| Cash payment fails | Confirm the player has sufficient cash and that the active framework provider supports the required money operations through SMDZ Bridge. |
| Fine remains pending after payment | Check for SQL update errors or money rollback logs.<br>The payment flow uses server-side state transitions and should only finalize after both money and database operations succeed. |
| Discord webhook is not sending | Confirm `ServerConfig.Discord.enabled = true`, the specific webhook URL is not empty, and the URL is valid.<br>Each action can use its own webhook, so one empty URL does not disable the others. |
| Evidence image is missing from Discord | Confirm the fine was created with a valid evidence photo and that Discord accepted the multipart attachment.<br>If no valid image is available, the logger can fall back to a normal embed. |
| Admin command permission denied | Verify the configured ACE permission and/or framework admin groups.<br>Confirm SMDZ Bridge detects the expected group/permission for the player. |
| Radar group enable/disable does not update | Check SQL update logs and confirm the group name matches the stored radar group exactly.<br>The server must successfully persist the group state before synchronization. |
| Duplicated radar is not saved | Complete the new placement normally and review the SQL insert logs.<br>A duplicated radar receives its own database ID and is not persistent until the new placement is confirmed and stored. |
| UI colors do not change | Edit `config_style_ui.lua`, not the compiled CSS directly.<br>Restart the resource after changing the configuration so the runtime palette is sent to the NUI again. |
| UI still shows an older version after updating | Replace the full resource, especially `web/dist`, restart the resource, and clear FiveM client cache.<br>Do not merge new files over an old partially modified frontend. |
| Debug console is too verbose | After installation and testing are complete, set `Config.Debug = false` in `config.lua`. |
| Resource performance is higher than expected | Test without unrelated client scripts first.<br>Live vehicle scanning only runs while the radar camera is active, while normal world interaction/detection uses configurable intervals and streaming distances.<br>Use FiveM resmon to identify the actual resource consuming time. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
| --- | --- |
| Does SMDZ Speed Radars support ESX? | Yes. ESX compatibility is handled through the mandatory `smdz_bridge` framework module. |
| Does it support QBCore and Qbox? | Yes. QBCore and Qbox are supported through `smdz_bridge`, depending on the providers available in your installed bridge version. |
| Is `smdz_bridge` optional? | No. `smdz_bridge` is a mandatory dependency and the resource is designed around it. |
| Does the script require `ox_lib`? | No. The current version does not require `ox_lib`. Portable-radar TextUI interactions use a custom SMDZ NUI menu. |
| Which target systems are supported? | `ox_target` and `qb-target` are supported locally by SMDZ Speed Radars. Target integration is not routed through SMDZ Bridge. |
| Can I use the script without a target system? | Yes. `Config.Interaction = 'textui'` is the default mode and uses the TextUI provider detected through `smdz_bridge`. |
| What inventories are supported? | Inventory compatibility is handled by `smdz_bridge`. The exact supported providers depend on your installed bridge version. `ox_inventory` uses the included `smdz_speedradars.usePortableRadar` client export. |
| Are permanent radars saved after restart? | Yes. Administrative/permanent radars are stored in SQL and loaded again when the resource starts. |
| Are portable radars stored in SQL? | No. Portable radars are runtime-only by design, preventing unnecessary permanent database records. |
| Can officers pick up portable radars again? | Yes. Authorized interaction with a portable radar includes the pickup action. |
| Can I change the speed limit of a portable radar? | Yes. Officers can configure the portable radar after deployment, subject to server-side validation. |
| Can I disable automatic fines? | Yes. Portable radars support an automatic-fine mode that can be disabled when the officer wants to use the radar mainly for monitoring/manual enforcement. |
| Does the radar take real evidence photos? | Yes. Evidence capture uses the required `screencapture` resource and takes the image from the radar lens perspective. |
| Can a radar photograph a vehicle behind it? | The current capture system validates the physical lens-facing cone on both client and server, so the violation should only be accepted when the vehicle enters the monitored direction. |
| Can players see vehicle information through walls while using the radar camera? | The live camera uses FOV, screen visibility, raycast, and entity-occlusion checks to prevent labels through normal solid geometry. |
| Does the live radar camera support zoom? | Yes. Officers can manually move the camera within configured limits and use an extended zoom range. |
| Does it have night vision? | Yes. Night vision is available in the portable radar camera, is disabled by default, and resets when leaving the view. |
| Can officers manually trigger the radar flash? | Yes. The live radar view includes a synchronized manual flash control with a configurable cooldown. |
| Which radar props are included in the selector? | `p_tv_cam_02_s`, `prop_tv_cam_02`, `prop_cctv_pole_03`, and `bzzz_police_prop_radar_c`. |
| Can I add more radar props? | Technically yes, but each custom prop should have a correct lens/flash offset or the preview, flash, and evidence camera may originate from the wrong position. |
| Why does `prop_cctv_pole_03` use a different offset? | It is a tall CCTV pole, so its camera origin must be positioned near the top camera head rather than near the model origin. |
| Can staff organize radars by area? | Yes. Permanent radars support custom groups such as Los Santos, Blaine County, Highway, Downtown, or any other configured name. |
| Can staff enable or disable a whole radar group? | Yes. Radar groups can be enabled or disabled together from the administration panel. |
| Can staff duplicate a radar? | Yes. The duplicate action copies the radar configuration and immediately enters placement mode for the new radar. |
| Can emergency vehicles be exempt? | Yes. Exemptions can be configured for emergency vehicles and can optionally require the siren condition. |
| Can specific jobs be exempt? | Yes. Jobs such as police, sheriff, ambulance, or any custom job can be configured in `Config.Exemptions`. |
| Can I whitelist specific license plates? | Yes. Plate exemptions are supported and validated server-side. |
| Can I exempt vehicle classes? | Yes. GTA vehicle classes can be excluded through the exemption configuration. |
| Can players pay fines with cash? | Yes, when the active framework provider supports the required cash operations. |
| Can players pay fines with bank money? | Yes. The resource can use compatible banking/framework money operations through SMDZ Bridge. |
| Where do players pay fines? | The resource includes configurable police and sheriff NPC locations. Each location can optionally display a map blip. |
| Can players review the evidence before paying? | Yes. The fine registry allows players to open the violation, inspect the ticket details, and view the captured evidence photo. |
| Are fine amounts calculated client-side? | No. Sensitive fine logic and payment validation are handled server-side. |
| Are radar and fine IDs readable? | Permanent radar IDs are kept short in the `1–999` range, while public fine IDs are designed to remain readable and unique. |
| Can I change all UI colors? | The primary NUI, ticket, radar overlay, state, world-text, and capture-cone colors are exposed through `config_style_ui.lua`. |
| Does the script include Discord logs? | Yes. Separate webhook URLs can be configured for fines, payments, admin radar actions, portable radar actions, warning signs, and errors. |
| Can Discord fine logs include the evidence image? | Yes. When a valid evidence image exists, the fine-created logger can attach it to the Discord webhook message. |
| Does the script automatically create SQL tables? | Yes. The resource supports automatic table creation/migration, and a manual installer is also included in `install_files/smdz_speedradars.sql`. |
| Can I disable debug prints? | Yes. Set `Config.Debug = false` after installation and testing are complete. |
| Is the BzZz radar prop owned by SMDZ Studios? | No. Third-party BzZz assets remain owned/licensed by their original creator. See `stream/credits.md` and the linked BzZz license page. |
| Can I rename the resource folder? | It is not recommended. Keep the folder name exactly `smdz_speedradars`, especially because inventory exports and integrations reference that resource name. |
| Is the script intended for production servers? | Yes, but server owners should complete normal staging tests first: verify bridge providers, SQL persistence, inventory use, fine payments, evidence capture, and permissions before opening it to players. |



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
