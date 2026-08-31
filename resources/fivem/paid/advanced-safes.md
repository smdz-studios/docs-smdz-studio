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
    src="https://www.youtube.com/embed/klWJw56mPIE"
    title="smdz_safes showcase"
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

[![](https://badges.5metrics.dev/smdz_safes/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_safes) | [![](https://badges.5metrics.dev/smdz_safes/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_safes)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_safes`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox through `smdz_bridge`
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>


**Short description:**
**SMDZ Safes** is an advanced persistent safe system for FiveM that lets players place physical safes anywhere valid, secure them with a PIN, grant access to other characters, and use them as private inventory stashes.

Safes are fully SQL-persistent, support configurable storage capacities, an optional in-world dealer, and a complete drill robbery system for criminal gameplay.

The resource uses smdz_bridge for framework, inventory, notification, and TextUI integrations, keeping configuration simple while supporting different server setups.


---

# ⭐ **FEATURES:**

- 🔐 **Persistent placeable safes** — players can place physical safes in the world and keep them stored through SQL persistence across restarts.
- 🧰 **Multiple safe sizes** — create unlimited server-defined safe types with custom props, items, labels, slots, weight limits and shop prices.
- 🎯 **Immersive placement mode** — rotate, raise, lower, snap to surfaces and use precision mode before confirming placement.
- 👥 **Owner-managed permissions** — owners can search characters, grant access and revoke access directly from the management UI.
- 📦 **Inventory stash integration** — every safe becomes its own persistent stash using the active inventory provider through `smdz_bridge`.
- 🧹 **Safe removal protection** — owners cannot remove a safe while it contains items when empty-storage validation is enabled.
- 🎬 **Placement, opening, removal and drill animations** — important interactions are backed by configurable in-world character animations.
- 🛒 **Optional safe dealer NPC** — sell configured safe items from an in-world shop with descriptions, capacity information and configurable prices.
- 🗺️ **`/mysafes` locator command** — temporarily marks all safes owned by the current identifier on the map.
- 🛠️ **Interactive drill robbery system** — players can place a physical drill against eligible safes and force them without knowing the PIN.
- 🌐 **Target or TextUI interaction** — use `ox_target` / `qb-target`, or keep interactions entirely through the TextUI provider selected by `smdz_bridge`.
- 🎨 **Configurable accent color** — match the management interface to your server branding without rebuilding the resource.


---

# 📦 **REQUIREMENTS:**

- **FiveM server:** A current recommended FiveM server build.
- **Framework:** ESX, QBCore or Qbox supported through `smdz_bridge`.
- **Required resources:**
  - `smdz_bridge`
  - `ox_lib`
  - `oxmysql`

  ### Framework Providers

  - `qbx_core` for Qbox
  - `qb-core` for QBCore
  - `es_extended` for ESX

  ### Target Providers

  - `ox_target`
  - `qb-target`

  ### Inventory Providers

  - `ox_inventory`
  - `ak47_inventory`
  - `codem-inventory`
  - `core_inventory`
  - `es_extended` as native ESX inventory fallback
  - `jaksam_inventory`
  - `origen_inventory`
  - `qb-core` as native QBCore inventory fallback
  - `qb-inventory`
  - `qs-inventory`
  - `tgiann-inventory`

  ### Notification Providers

  - `brutal_notify`
  - `codem-notification`
  - `esx_notify`
  - `FL-Notify`
  - `gtm-ui`
  - `lation_ui` as a notification module
  - `mythic_notify`
  - `okokNotify`
  - `origen_notify`
  - `ox_lib`
  - `qb-core` as native QBCore notification fallback
  - `qf_notify`
  - `RO_Notify`
  - `rtx_notify`
  - `RxNotify`
  - `vms_notifyv2`
  - `wasabi_notify`
  - `wasabi_uikit`
  - `xsNotify`
  - `es_extended` as native ESX notification fallback

  ### TextUI Providers

  - `brutal_textui`
  - `bx_textui`
  - `cd_drawtextui`
  - `codem-textui`
  - `dsco_textui`
  - `esx_textui`
  - `jg-textui`
  - `lation_ui` as a textui module
  - `okokTextUI`
  - `origen_notify`
  - `ox_lib`
  - `qb-core` as native QBCore DrawText fallback
  - `wasabi_uikit`
  - `ZSX_UIV2`

---

# 📥 **INSTALLATION:**

1. Download and extract the resource into your FiveM `resources` directory:

```text
resources/[smdz]/smdz_safes
```

2. Install and configure the required dependencies before starting SMDZ Safes:

```text
ox_lib
oxmysql
smdz_bridge
```

3. Configure your framework, inventory, notifications and TextUI inside `smdz_bridge` according to your server stack.

4. Add the safe items and the `drill` item to your inventory system. Ready-to-adapt examples are included in:

```text
smdz_safes/sql/items_examples.md
```

5. Configure your safe types in `config.lua`. The item names used in `Config.SafeTypes` must match the items created in your inventory.

6. Database setup can be handled automatically. The default configuration is:

```lua
ServerConfig.Database = {
    autoCreateTables = true
}
```

When enabled, the resource creates or upgrades the required SQL table during startup.

If you prefer manual installation, import:

```text
smdz_safes/sql/install.sql
```

7. Start dependencies before SMDZ Safes in `server.cfg`:

```bash
## Dependencies
ensure ox_lib
ensure oxmysql
ensure smdz_bridge

## Optional interaction resource
# ensure ox_target
# ensure qb-target

## SMDZ Studios
ensure smdz_safes
```

8. Restart the server or start the resource manually:

```bash
start smdz_safes
```

9. Check the startup banner and server console. The banner reports the detected framework, locale, notification provider, TextUI provider, target system and number of currently loaded safes.

---

# ⚙️ **CONFIGURATION:**

The main configuration file is `config.lua`. All options include inline English comments.


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



--[[
========================================================================================================================
 SMDZ SAFES - SHARED CONFIGURATION
========================================================================================================================
 INDEX
  1. General settings
  2. Bridge healthcheck
  3. Ownership limits
  4. Player commands
  5. Safe interaction
  6. Prop streaming
  7. Placement controls
  8. Placement animation
  9. PIN security
 10. Opening animation
 11. Safe robbery / drill
 12. Permission management
 13. Safe removal
 14. Optional safe shop NPC
 15. React UI
 16. Safe types
========================================================================================================================
 Internal values such as the bridge resource name, panel dimensions, preview alpha and webhook footer are fixed in code.
 Every public option below includes an English explanation.
]]

Config = {} -- Main shared configuration table.

-- =====================================================================================================================
-- 1. GENERAL SETTINGS
-- =====================================================================================================================

Config.Locale = 'es' -- Locale used by Lua, menus, bridge notifications, webhooks and the React UI: 'en', 'es', 'fr', 'de', 'it', 'pt' or 'nl'.
Config.OwnerIdentifier = 'character' -- Persistent owner identifier: 'character', 'license', 'fivem' or 'discord'.
Config.Debug = false -- Enables useful client diagnostics without printing every frame or interaction tick.

-- =====================================================================================================================
-- 2. BRIDGE HEALTHCHECK
-- =====================================================================================================================

Config.Healthcheck = { -- Strict startup and runtime checks for the mandatory SMDZ bridge.
    startupTimeoutMs = 15000, -- Maximum time to wait for the bridge and its active providers during startup.
    pollIntervalMs = 500, -- Delay between bridge readiness checks.
    stopResourceOnFailure = true -- Stops smdz_safes when the bridge is missing, unhealthy or stopped at runtime.
}

-- =====================================================================================================================
-- 3. OWNERSHIP LIMITS
-- =====================================================================================================================

Config.Ownership = { -- Limits are calculated using the persistent owner identifier, not the temporary server ID.
    maxSafesPerPlayer = 5 -- Maximum placed safes owned by one identifier; use 0 for unlimited.
}

-- =====================================================================================================================
-- 4. PLAYER COMMANDS
-- =====================================================================================================================

Config.Commands = { -- Player-facing commands and temporary map guidance.
    mySafes = { -- Marks every safe owned by the current persistent owner identifier.
        enabled = true, -- Enables or disables the command and its chat suggestion.
        name = 'mysafes', -- Command name without the slash.
        durationSeconds = 20, -- Number of seconds the owned-safe blips remain visible.
        blip = { -- Temporary blip appearance used by the command.
            sprite = 587, -- GTA blip sprite ID used for each owned safe.
            color = 2, -- GTA blip color ID.
            scale = 1.05, -- Normal-large blip scale.
            display = 4, -- GTA blip display mode.
            flashes = true, -- Makes the temporary blips flash while they are visible.
            labelKey = 'my_safes.blip_label' -- Locale key used for each safe blip name.
        }
    }
}

-- =====================================================================================================================
-- 5. SAFE INTERACTION
-- =====================================================================================================================

Config.Interaction = { -- Selects one interaction system for both placed safes and the optional shop NPC.
    mode = 'textui', -- Interaction mode: 'target' or 'textui'.
    target = 'auto', -- Target provider: 'auto', 'ox_target' or 'qb-target'.
    distance = 2.0, -- Maximum interaction distance for placed safe props.
    control = 38, -- GTA control used by TextUI interactions. 38 is E by default.
    keyLabel = 'E', -- Keycap label displayed by the active bridge TextUI provider.
    icon = 'fas fa-vault', -- Font Awesome icon used by supported target providers.
    textUI = { -- Normalized TextUI data sent exclusively through smdz_bridge when mode is 'textui'.
        position = 'left', -- Position requested from the active TextUI provider.
        style = 'keySeparated', -- Style requested when the active TextUI provider supports variants.
        color = '#22c7a9', -- Accent color passed to the active TextUI provider.
        type = 'info' -- Normalized bridge TextUI type.
    }
}

-- =====================================================================================================================
-- 6. PROP STREAMING
-- =====================================================================================================================

Config.Streaming = { -- Local prop streaming reduces network traffic and entity counts.
    spawnDistance = 90.0, -- Distance at which a persistent safe prop is spawned locally.
    despawnDistance = 115.0, -- Distance at which the locally streamed prop is removed.
    refreshMs = 850 -- Delay between streaming distance scans.
}

-- =====================================================================================================================
-- 7. PLACEMENT CONTROLS
-- =====================================================================================================================

Config.Placement = { -- Ghost placement controls and surface validation.
    maxDistance = 5.0, -- Maximum distance from the player to the selected surface.
    confirmKey = 38, -- GTA control that confirms a valid placement. 38 is E by default.
    confirmKeyLabel = 'E', -- Keycap label shown for the placement confirmation control.
    cancelKey = 177, -- BACKSPACE: cancels placement.
    rotateLeftKey = 174, -- LEFT ARROW: rotates the safe left.
    rotateRightKey = 175, -- RIGHT ARROW: rotates the safe right.
    raiseKey = 10, -- PAGE UP: raises the preview above the selected surface.
    lowerKey = 11, -- PAGE DOWN: lowers the preview toward the selected surface.
    snapToSurfaceKey = 47, -- G: removes the manual height offset and snaps back to the surface.
    precisionKey = 21, -- LEFT SHIFT: hold to make rotation and height adjustments more precise.
    rotationStep = 2.5, -- Normal heading change applied while a rotation key is held.
    heightStep = 0.015, -- Normal vertical adjustment applied while PAGE UP or PAGE DOWN is held.
    precisionMultiplier = 0.18, -- Multiplier applied to rotation and height steps while LEFT SHIFT is held.
    precisionMoveSpeed = 0.018, -- Maximum metres per frame the ghost follows the aim point while precision mode is held.
    maximumHeightOffset = 0.35, -- Maximum absolute vertical adjustment allowed during placement.
    minimumSurfaceNormalZ = 0.45, -- Rejects steep walls while allowing roofs, grates and object surfaces.
    approach = { -- Makes the character physically walk near the selected position before the placement animation.
        enabled = true, -- Enables the walk-up behaviour; the player is never teleported.
        triggerDistance = 1.65, -- Starts walking when the character is farther than this from the final safe position.
        standDistance = 0.95, -- Desired distance from the safe before the placement animation starts.
        speed = 1.0, -- Walking movement speed used by TaskGoStraightToCoord.
        timeoutMs = 6500 -- Maximum time allowed for the character to approach before continuing.
    }
}

-- =====================================================================================================================
-- 8. PLACEMENT ANIMATION
-- =====================================================================================================================

Config.PlacementAnimation = { -- Character animation played immediately before a valid safe is placed.
    enabled = true, -- Enables or disables the placement animation.
    dictionary = 'anim@heists@money_grab@briefcase', -- Animation dictionary requested by the client.
    clip = 'put_down_case', -- Animation clip played while placing the safe.
    duration = 1000, -- Total animation duration in milliseconds.
    flag = 48 -- GTA animation flag controlling upper-body movement and player position.
}

-- =====================================================================================================================
-- 9. PIN SECURITY
-- =====================================================================================================================

Config.Pin = { -- PIN values are numeric and always validated again on the server.
    minLength = 4, -- Minimum number of PIN digits.
    maxLength = 8, -- Maximum number of PIN digits.
    trustedAccessRequiresPin = false, -- When false, the owner and permitted characters can open without entering the PIN.
    attemptCooldownMs = 1000, -- Minimum delay between failed attempts on the same safe.
    maxAttempts = 3, -- Incorrect attempts allowed across the safe before the temporary lockout starts.
    lockoutSeconds = 300 -- Locks the entire safe for five minutes after the configured failed attempts.
}

-- =====================================================================================================================
-- 10. OPENING ANIMATION
-- =====================================================================================================================

Config.OpenAnimation = { -- Character animation played before a safe inventory opens.
    enabled = true, -- Enables or disables the opening animation.
    dictionary = 'anim@heists@keycard@', -- Animation dictionary requested by the client.
    clip = 'exit', -- Animation clip played before opening the inventory.
    duration = 1100, -- Total animation duration in milliseconds.
    flag = 49 -- GTA animation flag controlling movement and upper-body behavior.
}

-- =====================================================================================================================
-- 11. SAFE ROBBERY / DRILL
-- =====================================================================================================================

Config.Robbery = { -- Optional Payday-style drilling flow used to force safes without knowing the PIN.
    enabled = true, -- Enables the robbery system and registers the configured drill item as usable.
    item = 'drill', -- Usable inventory item required to start a safe robbery.
    prop = 'ch_prop_ch_heist_drill', -- Visible drill prop placed against the selected safe.
    useDistance = 3.0, -- Maximum distance from a safe when the drill item is used.
    requireOwnerOnline = true, -- When true, the original owner must be online only when the robbery starts; disconnecting afterwards does not cancel an active drill.
    durationSeconds = 90, -- Number of seconds the powered drill must run before the safe is forced open.
    forcedAccessSeconds = 60, -- Temporary PIN bypass granted to the robber if the stash cannot open automatically on completion.
    consumeItem = true, -- Removes one drill item only after the ignition minigame succeeds.
    drawDistance = 4.0, -- Maximum distance at which every nearby player can see the optimized floating drill status.
    restartDistance = 3.0, -- Maximum distance from the stopped drill when the robber may try to restart it.
    maxRobberDistance = 2000.0, -- Cancels an active robbery if the robber moves farther than this distance from the placed drill.
    restartKey = 'O', -- Default keyboard key used to restart a stopped drill in TextUI mode; FiveM key bindings may still be rebound by each player.
    powerAnimation = { -- Short interaction animation played after successfully powering on or restarting the drill.
        dictionary = 'anim@heists@fleeca_bank@drilling', -- GTA animation dictionary used for the drill interaction.
        clip = 'drill_straight_idle', -- Animation clip played while the player powers the placed drill.
        durationMs = 1400 -- Duration of the power-on interaction animation in milliseconds.
    },
    placement = { -- Placement is constrained to the actual safe entity so the drill cannot be placed elsewhere.
        maxSurfaceDistance = 1.35, -- Maximum distance between the selected drill position and the safe origin.
        surfaceOffset = 0.28, -- Pushes the drill slightly away from the safe surface to avoid clipping into the door.
        maximumHeightOffset = 0.45, -- Maximum manual vertical correction while positioning the drill.
        rotationStep = 2.5, -- Normal rotation speed used by the drill placement mode.
        heightStep = 0.012, -- Normal vertical movement speed used by PAGE UP / PAGE DOWN.
        precisionMultiplier = 0.18, -- Multiplier applied while LEFT SHIFT precision mode is held.
        precisionMoveSpeed = 0.014 -- Maximum metres per frame the drill ghost follows the aim point while precision mode is held.
    },
    minigame = { -- Built-in React timing minigame used for the first ignition and every manual restart.
        rounds = 3, -- Successful timing stages required when starting a new drill.
        restartRounds = 2, -- Successful timing stages required when restarting a stopped drill.
        maxMisses = 2, -- Failed timing attempts allowed before the current ignition attempt fails.
        speed = 48, -- Base indicator movement speed expressed as track percentage per second.
        speedIncreasePerRound = 6, -- Extra indicator speed added after each successful stage.
        targetSize = 18, -- Initial width of the marked success zone as a percentage of the timing track.
        targetShrinkPerRound = 1.5 -- Amount removed from the success-zone width after each stage.
    },
    jam = { -- Random interruptions make the active drill stop and require the robber to power it on again.
        enabled = true, -- Enables random drill stops while a robbery is running.
        minIntervalSeconds = 18, -- Minimum number of active drilling seconds before a random stop may happen.
        maxIntervalSeconds = 32, -- Maximum number of active drilling seconds before a random stop is scheduled.
        minimumRemainingSeconds = 12 -- Prevents a new random stop when the safe is already close to being forced open.
    },
    particles = { -- Looping particle effect attached to the drill while it is running.
        dictionary = 'core', -- GTA particle asset dictionary.
        effect = 'ent_amb_sparking_wires', -- Looping spark effect used to simulate drilling metal.
        scale = 0.65, -- Particle scale.
        offset = vector3(0.0, -0.10, 0.20), -- Particle offset relative to the drill entity.
        rotation = vector3(0.0, 0.0, 0.0) -- Particle rotation relative to the drill entity.
    }
}

-- =====================================================================================================================
-- 12. PERMISSION MANAGEMENT
-- =====================================================================================================================

Config.Permissions = { -- Owner-managed access list supporting online and offline characters.
    maxPerSafe = 15, -- Maximum permission records stored for one safe.
    searchMinLength = 2, -- Minimum characters required before an offline character search is executed.
    maxSearchResults = 8, -- Maximum online/offline candidates returned to the management UI.
    offlineLookup = { -- Framework database lookup used to grant access while a character is offline.
        enabled = true, -- Enables SQL-backed offline character searches.
        esx = { -- Default ESX users table mapping.
            table = 'users', -- ESX character table name.
            identifierColumn = 'identifier', -- Column containing the persistent ESX character identifier.
            firstNameColumn = 'firstname', -- ESX character first-name column.
            lastNameColumn = 'lastname' -- ESX character last-name column.
        },
        qbcore = { -- Default QBCore players table mapping.
            table = 'players', -- QBCore character table name.
            identifierColumn = 'citizenid', -- QBCore persistent character identifier column.
            characterInfoColumn = 'charinfo' -- JSON column containing firstname and lastname.
        },
        qbox = { -- Default Qbox players table mapping.
            table = 'players', -- Qbox character table name.
            identifierColumn = 'citizenid', -- Qbox persistent character identifier column.
            characterInfoColumn = 'charinfo' -- JSON column containing firstname and lastname.
        }
    }
}

-- =====================================================================================================================
-- 13. SAFE REMOVAL
-- =====================================================================================================================

Config.Removal = { -- Only the original owner identifier can remove a safe.
    returnItem = true, -- Returns the configured safe item after successful removal.
    requireEmpty = true, -- Blocks removal unless the inventory provider confirms the safe is empty.
    animation = { -- Character animation played immediately before a validated safe is picked up.
        enabled = true, -- Enables or disables the removal animation.
        dictionary = 'pickup_object', -- Animation dictionary requested by the client.
        clip = 'pickup_low', -- Animation clip played while picking up the safe.
        duration = 950, -- Total animation duration in milliseconds.
        flag = 48 -- GTA animation flag controlling upper-body movement and player position.
    }
}

-- =====================================================================================================================
-- 14. OPTIONAL SAFE SHOP NPC
-- =====================================================================================================================

Config.Shop = { -- Optional NPC that sells safe items through an ox_lib menu.
    enabled = true, -- Enables or disables the shop NPC and all purchase callbacks.
    coords = vector4(339.9949, -774.1185, 29.2665, 130.2504), -- NPC position and heading.
    model = 's_m_m_highsec_01', -- Ped model used by the safe seller.
    scenario = 'WORLD_HUMAN_CLIPBOARD', -- Scenario started after spawning; use an empty string for none.
    invincible = true, -- Prevents the NPC from taking damage.
    frozen = true, -- Prevents the NPC from moving away from the configured position.
    distance = 2.5, -- Maximum shop interaction distance; the mode and provider inherit Config.Interaction.
    icon = 'fas fa-store', -- Font Awesome icon used when Config.Interaction.mode is 'target'.
    account = 'bank', -- Framework money account charged through smdz_bridge: usually 'cash', 'bank' or 'money'.
    blip = { -- Optional map blip for the seller.
        enabled = false, -- Enables or disables the shop blip.
        sprite = 478, -- GTA blip sprite ID.
        color = 2, -- GTA blip color ID.
        scale = 0.75, -- Blip display scale.
        labelKey = 'shop.blip_label' -- Locale key used as the blip label.
    }
}

-- =====================================================================================================================
-- 15. REACT UI
-- =====================================================================================================================

Config.UI = { -- Management panel and placement HUD appearance.
    accent = '#22c7a9' -- Main accent used by buttons, fields, scrollbars and placement controls.
}

-- =====================================================================================================================
-- 16. SAFE TYPES
-- =====================================================================================================================

Config.SafeTypes = { -- Add, remove or edit safe products using the same structure.
    basic = { -- Small starter safe.
        labelKey = 'safe_types.basic', -- Locale key used for the safe, inventory and shop label.
        descriptionKey = 'safe_descriptions.basic', -- Locale key shown in the NPC purchase menu.
        item = 'safe_basic', -- Inventory item consumed when this safe is placed.
        model = 'prop_ld_int_safe_01', -- Small default safe prop.
        slots = 20, -- Number of inventory slots.
        maxWeight = 30000, -- Maximum inventory weight, normally expressed in grams.
        shopEnabled = true, -- Makes this safe available from the optional NPC shop.
        price = 2500 -- Purchase price charged from Config.Shop.account.
    },
    normal = { -- Standard medium safe.
        labelKey = 'safe_types.normal', -- Locale key used for the safe, inventory and shop label.
        descriptionKey = 'safe_descriptions.normal', -- Locale key shown in the NPC purchase menu.
        item = 'safe_normal', -- Inventory item consumed when this safe is placed.
        model = 'p_v_43_safe_s', -- Normal default safe prop.
        slots = 35, -- Number of inventory slots.
        maxWeight = 65000, -- Maximum inventory weight, normally expressed in grams.
        shopEnabled = true, -- Makes this safe available from the optional NPC shop.
        price = 5000 -- Purchase price charged from Config.Shop.account.
    },
    large = { -- Large high-capacity safe.
        labelKey = 'safe_types.large', -- Locale key used for the safe, inventory and shop label.
        descriptionKey = 'safe_descriptions.large', -- Locale key shown in the NPC purchase menu.
        item = 'safe_large', -- Inventory item consumed when this safe is placed.
        model = 'm23_2_prop_m32_safe_01a', -- Large default safe prop.
        slots = 55, -- Number of inventory slots.
        maxWeight = 120000, -- Maximum inventory weight, normally expressed in grams.
        shopEnabled = true, -- Makes this safe available from the optional NPC shop.
        price = 10000 -- Purchase price charged from Config.Shop.account.
    },
    giant = { -- Giant maximum-capacity safe.
        labelKey = 'safe_types.giant', -- Locale key used for the safe, inventory and shop label.
        descriptionKey = 'safe_descriptions.giant', -- Locale key shown in the NPC purchase menu.
        item = 'safe_giant', -- Inventory item consumed when this safe is placed.
        model = 'h4_prop_h4_safe_01a', -- Giant default safe prop.
        slots = 90, -- Number of inventory slots.
        maxWeight = 250000, -- Maximum inventory weight, normally expressed in grams.
        shopEnabled = true, -- Makes this safe available from the optional NPC shop.
        price = 20000 -- Purchase price charged from Config.Shop.account.
    }
}

```

---

# 🎮 **USAGE:**

## Placing a safe

1. Use one of the configured safe inventory items.
2. Aim at a valid nearby surface.
3. Position the preview with the placement controls.
4. Hold `SHIFT` when fine movement is required.
5. Confirm the position.
6. If necessary, the character walks closer to the final position.
7. The placement animation plays.
8. The safe is saved and the PIN setup UI opens.
9. Create a valid numeric PIN before using the safe normally.

The server validates the placement request and ownership limit before final persistence.

## Opening a safe

Safes can be interacted with using the global configured mode:

- **TextUI:** interaction prompt comes from `smdz_bridge`.
- **Target:** interact directly with the safe prop.

Depending on the player's relationship with the safe:

- The original owner can open and manage it.
- Permitted characters can open it.
- Other players can attempt the PIN.

A successful opening plays the configured animation before opening the inventory stash.

## PIN behavior

Every new safe requires a PIN.

The default security rules are:

```text
Minimum PIN length: 4 digits
Maximum PIN length: 8 digits
Maximum failed attempts: 3
Lockout duration: 300 seconds / 5 minutes
```

If the configured failed-attempt limit is reached, the **safe itself** becomes temporarily locked rather than only blocking one player.

The owner can also reset a forgotten PIN from the management interface.

When changing a PIN normally, the new PIN cannot be identical to the current PIN.

## Managing access

The management UI allows the original owner to:

- Review current access.
- Search for characters.
- Grant permissions.
- Grant access to compatible offline characters.
- Revoke permissions.
- Change the PIN.
- Reset the PIN from the dangerous-actions section.
- Remove the safe when all removal conditions are satisfied.

Technical identifiers are intentionally not exposed as part of the roleplay-facing management workflow.

## Removing a safe

A safe can only be removed by its **original owner**.

By default, removal requires:

- The player must still be the original owner.
- The player must be close enough to interact.
- The safe must not be undergoing an active robbery.
- The stash must be empty.

The server validates removal before the pickup animation plays. When enabled, the corresponding safe item is returned to the owner's inventory.

## Safe robbery

When `Config.Robbery.enabled = true`, the configured `drill` item can be used near an eligible safe.

### Robbery flow

1. The robber uses the `drill` item near a safe.
2. The owner-online requirement is checked when configured.
3. The robber manually positions the drill against the safe.
4. The built-in React timing minigame starts.
5. A successful ignition consumes the drill when `consumeItem = true`.
6. The drill prop becomes active and the robbery timer begins.
7. The original owner receives a bridge notification that one of their safes is being robbed.
8. Nearby players can see the drill status within the configured display distance.
9. The drill may randomly overheat.
10. While overheated, the drilling timer is paused.
11. The robber must physically return to the drill and use the restart interaction.
12. The restart minigame must be completed before drilling resumes.
13. When the timer reaches zero, the safe is forced and the robber receives temporary access.

### Default robbery settings

| Setting | Default |
| --- | ---: |
| Required item | `drill` |
| Drill prop | `ch_prop_ch_heist_drill` |
| Use distance | 3.0 m |
| Owner must be online to start | Yes |
| Active drilling duration | 90 sec |
| Temporary forced access | 60 sec |
| Floating status visibility | 4.0 m |
| Restart distance | 3.0 m |
| Restart key | `O` |
| Maximum robber distance | 2,000 m |

> `requireOwnerOnline` is checked when the robbery begins. An owner disconnecting after the drill has successfully started does **not** cancel the robbery.

### Overheating

Random overheating is enabled by default. The drill can stop after a configurable active interval, the remaining time freezes and the nearby status indicates that the drill has overheated.

The robber must return to the stopped drill and restart it manually. The minigame does not reopen automatically when the drill stops.

## Safe shop

When enabled, the configured NPC acts as an in-world safe dealer.

The shop:

- Uses the same target/TextUI interaction mode as the rest of the resource.
- Opens an `ox_lib` purchase menu.
- Shows the configured safe description.
- Shows storage information.
- Charges the configured framework money account through the bridge.
- Lists enabled products from highest configured price to lowest price.

## `/mysafes`

The included player command can temporarily reveal owned safes on the map.

Default:

```text
/mysafes
```

Behavior:

- Uses the configured owner identifier.
- Creates one temporary blip for each owned safe.
- Blips remain visible for 20 seconds by default.
- The default blips use a normal-large scale and can flash.
- If the player owns no safes, an error notification is sent through the bridge.

### Commands

| Command | Description | Permission / Notes |
| --- | --- | --- |
| `/mysafes` | Temporarily marks every safe owned by the current persistent identifier. | Everyone; command name, duration and blip appearance are configurable. |

### Keybinds

| Key | Default Function | Configurable |
| --- | --- | --- |
| `E` | Safe/TextUI interaction | Yes |
| `E` | Confirm safe/drill placement | Yes |
| `← / →` | Rotate placement preview | Yes |
| `PAGE UP / PAGE DOWN` | Raise/lower placement preview | Yes |
| `G` | Snap placement back to surface | Yes |
| `SHIFT` | Precision placement | Yes |
| `BACKSPACE` | Cancel placement | Yes |
| `O` | Restart an overheated drill | Yes / FiveM key mapping |
| `SPACE` / displayed controls | Drill timing minigame | Displayed by UI |


---

# 💾 **PERSISTENCE & STORAGE:**

Placed safes are stored in SQL so they can be reconstructed after a resource or server restart.

Persistent data includes the information required for the safe system such as:

- Safe identity.
- Safe type.
- Owner identifier.
- World position and heading.
- PIN/security state.
- Access permissions.

The actual stash contents remain managed by the configured inventory provider.

```sql
CREATE TABLE IF NOT EXISTS `smdz_safes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `safe_uuid` VARCHAR(64) NOT NULL,
  `owner_identifier` VARCHAR(180) NOT NULL,
  `owner_name` VARCHAR(120) NOT NULL,
  `safe_type` VARCHAR(60) NOT NULL,
  `stash_id` VARCHAR(90) NOT NULL,
  `label` VARCHAR(120) NOT NULL,
  `model` VARCHAR(100) NOT NULL,
  `item_name` VARCHAR(100) NOT NULL,
  `slots` INT UNSIGNED NOT NULL DEFAULT 20,
  `max_weight` INT UNSIGNED NOT NULL DEFAULT 30000,
  `coords_x` DOUBLE NOT NULL,
  `coords_y` DOUBLE NOT NULL,
  `coords_z` DOUBLE NOT NULL,
  `heading` FLOAT NOT NULL DEFAULT 0,
  `z_offset` FLOAT NOT NULL DEFAULT 0,
  `pin_hash` VARCHAR(64) DEFAULT NULL,
  `pin_salt` VARCHAR(64) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_smdz_safes_uuid` (`safe_uuid`),
  UNIQUE KEY `uq_smdz_safes_stash` (`stash_id`),
  KEY `idx_smdz_safes_owner` (`owner_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `smdz_safe_permissions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `safe_id` BIGINT UNSIGNED NOT NULL,
  `player_identifier` VARCHAR(180) NOT NULL,
  `player_name` VARCHAR(120) NOT NULL,
  `granted_by` VARCHAR(180) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_smdz_safe_permission` (`safe_id`, `player_identifier`),
  KEY `idx_smdz_safe_permissions_player` (`player_identifier`),
  CONSTRAINT `fk_smdz_safe_permissions_safe`
    FOREIGN KEY (`safe_id`) REFERENCES `smdz_safes` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

### Automatic SQL setup

With:

```lua
ServerConfig.Database.autoCreateTables = true
```

SMDZ Safes creates or upgrades the required table during startup.

This reduces the need for manual migrations during first installation while still keeping `sql/install.sql` available for server owners who prefer manual database management.

---

# ⚡ **PERFORMANCE & STREAMING:**

SMDZ Safes uses distance-based safe prop streaming instead of permanently keeping every persistent safe entity spawned for every client.

Default streaming behavior:

```text
Spawn safe prop: 90 m
Despawn safe prop: 115 m
Distance refresh: 850 ms
```

The larger despawn distance creates hysteresis so props do not constantly spawn/despawn when a player stands near the streaming boundary.

The active drill status is only rendered for nearby players inside its configured short display distance.

Debug diagnostics are disabled by default and are designed around meaningful lifecycle/action logs rather than frame-level console spam.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

The resource uses server-validated callbacks internally. Do not bypass the normal item, interaction or management flows for gameplay actions.

## Server Events

There are currently **no public server Net Events intended as a supported integration API**. Sensitive placement, PIN, permission, purchase, removal and robbery actions are validated through internal server callbacks.

## Client Events

| Event name | Parameters | Description |
| --- | --- | --- |
| `smdz_safes:client:startPlacement` | `safeType` | Starts placement for a configured safe type. |
| `smdz_safes:client:addSafe` | `safe` | Adds or refreshes a persistent safe in the client cache. |
| `smdz_safes:client:removeSafe` | `safeId` | Removes a safe from the client cache/world. |
| `smdz_safes:client:showOwnedSafes` | `safes` | Creates the temporary `/mysafes` map blips. |
| `smdz_safes:client:useDrill` | `origin` | Starts the local drill-use flow after server/framework item use. |
| `smdz_safes:client:robberyStarted` | `data` | Synchronizes a newly started drill robbery. |
| `smdz_safes:client:robberyPaused` | `data` | Synchronizes an overheated/stopped drill. |
| `smdz_safes:client:robberyResumed` | `data` | Synchronizes a restarted drill. |
| `smdz_safes:client:robberyStopped` | `safeId`, `reason` | Cleans up a completed or cancelled robbery. |

> These events are part of the resource's current internal synchronization flow. Directly triggering them is not a replacement for server-side validation.

## Exports

The drill exports exist primarily as an inventory-use integration path.

```lua
exports['smdz_safes']:useDrill()
```

or:

```lua
exports['smdz_safes']:UseDrill()
```

| Export name | Side | Parameters | Returns | Description |
| --- | --- | --- | --- | --- |
| `useDrill` | Client | None | `nil` | Starts the configured drill-use flow. Used by compatible inventory item definitions such as `ox_inventory`. |
| `UseDrill` | Client | None | `nil` | Alias of `useDrill`. |

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource stops during startup | Ensure `smdz_bridge` is started first and its required framework/inventory providers are ready. Check the red healthcheck error in the server console. |
| Startup banner does not show provider resource names immediately | Notify/TextUI provider details may require the bridge client registry sync. The resource waits for provider details and can refresh the banner after synchronization. |
| Database errors | Keep `ServerConfig.Database.autoCreateTables = true` or manually import `sql/install.sql`. Confirm `oxmysql` starts before `smdz_safes`. |
| Safe item does nothing | Confirm the item exists in your inventory and is usable. Use the definitions in `sql/items_examples.md` and verify the active framework/inventory provider. |
| Drill item does nothing | Confirm the `drill` item definition matches `sql/items_examples.md`. For `ox_inventory`, keep the configured client export so item use reaches `smdz_safes`. |
| Target does not appear | Confirm `Config.Interaction.mode = 'target'` and that the configured `ox_target` or `qb-target` resource is started. |
| TextUI does not appear | Confirm `Config.Interaction.mode = 'textui'` and that the TextUI provider selected by `smdz_bridge` is ready. |
| Cannot interact while dead or inside a vehicle | This is expected. Safe interaction is blocked while the player is dead or inside a vehicle. |
| Safe cannot be removed | Only the original owner can remove it. The safe must be empty when `Config.Removal.requireEmpty = true`, and it cannot be removed during an active robbery. |
| PIN is temporarily locked | Wait for the configured lockout time. The default is five minutes after three incorrect attempts. |
| New PIN is rejected while changing it | The new PIN cannot be the same as the current PIN and must satisfy the configured numeric length rules. |
| Shop cannot charge the player | Confirm the bridge framework provider supports the configured money account in `Config.Shop.account`. |
| Permission search returns no characters | Check the framework database mapping under `Config.Permissions.offlineLookup` and confirm the framework player table/columns match your server. |
| Drill is stopped and timer is not moving | The drill has overheated. Return to it and use the restart interaction (`O` by default). |
| Robbery is cancelled after travelling far away | The active robber exceeded `Config.Robbery.maxRobberDistance` from the drill. |
| UI looks incorrect after editing source files | Rebuild the React web project and make sure FiveM is loading the latest `web/dist` output. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
| --- | --- |
| **Which frameworks are supported?** | ESX, QBCore and Qbox are supported through the required `smdz_bridge`. |
| **Does the script require SMDZ Bridge?** | Yes. The bridge is a mandatory dependency and is used for the normalized framework/inventory/notification/TextUI integrations required by SMDZ Safes. |
| **Can I use target instead of TextUI?** | Yes. Set `Config.Interaction.mode = 'target'` and use `ox_target`, `qb-target` or automatic target selection. |
| **If I use TextUI, does the script use its own TextUI?** | No. Roleplay interaction prompts are sent through the active TextUI provider from `smdz_bridge`. |
| **Can I create my own safe types?** | Yes. Add or edit entries in `Config.SafeTypes` and define the matching inventory items. Each type can have its own prop, item, translated label/description, slots, weight and price. |
| **Are the default safe props configurable?** | Yes. Each safe type has its own `model` value in `Config.SafeTypes`. |
| **Does each safe have its own stash?** | Yes. Each placed safe is associated with its own persistent storage identity through the supported inventory provider. |
| **Do safes survive server restarts?** | Yes. Their persistent world/ownership/security data is stored in SQL and loaded again when the resource starts. |
| **Does the resource create its SQL table automatically?** | Yes by default. `ServerConfig.Database.autoCreateTables = true` enables automatic table creation/upgrades. Manual SQL is also included. |
| **Can I limit how many safes a player owns?** | Yes. Use `Config.Ownership.maxSafesPerPlayer`. The limit is based on the configured persistent owner identifier. |
| **Is a PIN mandatory?** | Yes. A newly placed safe must have a valid numeric PIN configured before normal use. |
| **Can any player try the PIN?** | Yes. Players without trusted access may attempt to enter the PIN. Failed attempts are protected by cooldown and lockout settings. |
| **What happens after too many wrong PIN attempts?** | The entire safe is temporarily locked. By default this occurs after 3 failed attempts and lasts 5 minutes. |
| **Can I change the PIN to the same PIN?** | No. When using the normal change-PIN flow, the new PIN must be different from the current one. |
| **Can the owner reset a forgotten PIN?** | Yes. The owner has a reset option in the dangerous-actions section of the management UI. |
| **Can I give safe access to offline players?** | Yes, when the configured framework database mapping is correct. Offline lookup is supported for compatible ESX/QBCore/Qbox character tables. |
| **Can a permitted player remove my safe?** | No. Removal is restricted to the original owner. |
| **Can the owner remove a safe while it contains items?** | Not when `Config.Removal.requireEmpty = true`, which is the default behavior. |
| **Does removing a safe return the item?** | Yes by default when `Config.Removal.returnItem = true`. |
| **Is there an animation when placing/opening/removing a safe?** | Yes. Placement, opening and removal animations are included and configurable. |
| **Does the script include a safe shop?** | Yes. An optional NPC dealer can sell enabled safe types using the configured payment account. |
| **Can I disable the shop?** | Yes. Set `Config.Shop.enabled = false`. Players can still obtain safe items using whatever economy/distribution system your server prefers. |
| **Can players rob safes?** | Yes when `Config.Robbery.enabled = true`. The robbery system uses the configured drill item and built-in placement/minigame flow. |
| **Does the drill require an external minigame resource?** | No. The current drill flow includes its own React timing minigame. |
| **What happens when the drill overheats?** | The drill stops, its timer pauses and the robber must return to it and manually restart it through the configured interaction. |
| **Does the minigame reopen automatically after overheating?** | No. The robber must interact with the stopped drill first. |
| **What is the default drill restart key?** | `O`. It is registered as a FiveM key mapping and can be rebound by the player. |
| **Can everyone see the drill status?** | Nearby players can see the floating status when they are within the configured draw distance, which defaults to 4 meters. |
| **Does the safe owner receive a robbery warning?** | Yes. When the robbery starts successfully, the original owner can receive a notification through `smdz_bridge`. |
| **Can I require the owner to be online before a safe can be robbed?** | Yes. Enable `Config.Robbery.requireOwnerOnline`. The requirement is checked when the robbery begins. |
| **If the owner disconnects during an active robbery, does the drill stop?** | No. Once the robbery has started successfully, the owner's later disconnect does not cancel it. |
| **Can the robber leave the area forever while the drill works?** | No. The server cancels the robbery if the robber exceeds `Config.Robbery.maxRobberDistance` from the placed drill. |
| **Can I rob my own safe for testing?** | The resource can allow development-specific behavior while debug mode is enabled, but production servers should keep debug disabled. |
| **Does the script support webhooks?** | Yes. Optional server-side Discord embeds can log important safe and robbery actions. |
| **Is debug enabled by default?** | No. Both the shared and server debug master switches are disabled by default. |
| **Can I change the UI color?** | Yes. Use `Config.UI.accent`. |
| **Is the UI translated?** | Yes. The resource includes seven locales and the React interface uses the same localization system. |
| **Can I add another language?** | Yes. Duplicate an existing locale file, preserve every key, translate the values and add the locale file to `fxmanifest.lua`. |
| **Do I need to edit the compiled UI to change safe capacity or prices?** | No. Safe types, capacities and shop prices are controlled from Lua configuration. |
| **Where can I find inventory item examples?** | Use `sql/items_examples.md` included with the resource. |

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
