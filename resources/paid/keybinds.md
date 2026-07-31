<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/cyfSVpoXB_0"
    title="smdz_keybinds showcase"
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

[![](https://badges.5metrics.dev/smdz_keybinds/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_keybinds) | [![](https://badges.5metrics.dev/smdz_keybinds/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_keybinds)

</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_keybinds`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SMDZ Dynamic Keybinds automatically scans FiveM client commands and current player key mappings, then organizes them inside a modern fullscreen React interface with an interactive keyboard, conflict detection, search, resource aliases, custom command metadata, and configurable help markers.

---



# ⭐ **FEATURES:**

- ⌨️ **Dynamic Visual Keyboard** — Instantly see the controls available on the server through a modern fullscreen keyboard.
- 🔍 **Automatic Keybind Detection** — Displays each player’s current key assignments, including customized controls.
- ⚡ **Always Up to Date** — Automatically refreshes when server resources start or stop.
- 🚨 **Conflict Detection** — Quickly identify keys assigned to multiple actions before they become confusing.
- 🎯 **Interactive Key Details** — Select any highlighted key to view its commands, actions, and related resource.
- 🏷️ **Clean Resource Names** — Replaces technical script names with simple labels such as Inventory, Phone, Banking, or Framework.
- 🧠 **Player-Friendly Descriptions** — Transform unclear commands into polished names and easy-to-understand explanations.
- 🔎 **Powerful Search** — Find controls by key, command, action, category, or resource name.
- 👁️ **Customizable Key Tags** — Players can hide assigned tags, conflict tags, or both for a cleaner keyboard.
- 📊 **Live Control Overview** — View assigned controls, unassigned actions, detected resources, conflicts, and coverage at a glance.
 -📍 **Interactive Help Marker** — Let players discover the keyboard naturally through a configurable in-game help location.
 -🌍 **Multilingual Interface** — Includes English, Spanish, French, German, Portuguese, Italian, Dutch, and Japanese.
 -🎨 **Customizable Appearance** — Easily adapt the server name, accent colors, activity gauge, markers, and visual details.
 -🔊 **Immersive Key Sounds** — Optional keyboard sounds make the interface feel more responsive and satisfying.
- 🚀 **Standalone & Easy to Install** — No framework or database required. Add the resource, configure it, and start using it.
- 🔗 **Developer Friendly** — Events and exports allow other scripts, tutorials, NPCs, and menus to open or update the keyboard.
- 🛡️ **Protected Refresh System** — Prevents refresh spam while keeping control information accurate.
- 🧩 **Works Across Your Server** — Perfect for roleplay servers, public communities, onboarding systems, help centers, and custom networks.




---


# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended server artifact.
- **Framework:** Standalone. No ESX, QBCore, or Qbox dependency is required.
- **Database:** No database dependency.
- **Optional resources:**
  - FiveM's default `chat` resource for command suggestions.


---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_keybinds.zip`
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_keybinds
```

3. Keep the resource folder name exactly as:

```text
smdz_keybinds
```

4. Add the resource to your `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_keybinds
```

5. Restart your server or start the resource manually:

```bash
start smdz_keybinds
```

6. Check the server console for the SMDZ Dynamic Keybinds startup banner.

7. Join the server and use:

```text
/keybinds
```

The UI can also open automatically when the player enters one of the configured help markers.

---

# ⚙️ **CONFIGURATION:**

The main editable file is:

```text
config.lua
```

The large `Config.ResourceAliases` table is intentionally placed at the end of the file so the main settings remain easy to navigate.

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



--[[
    SMDZ DYNAMIC KEYBINDS — CONFIGURATION

    TABLE OF CONTENTS

    01. General Settings
    02. Command Settings
    03. Resource and Command Filters
    04. Command Metadata Overrides
    05. Automatic Detection
    06. Conflict Detection
    07. Technical Settings
    08. Interface Settings and Color Presets
    09. Help Markers
    10. Resource Alias Variants
    11. Resource Aliases

    Notes:
    - All times are expressed in milliseconds unless stated otherwise.
    - Keep only one Accent and GaugeColors preset enabled at the same time.
    - The protocol version is intentionally stored in shared/protocol.lua, not here.
    - The physical keyboard preview is always enabled internally.
]]

Config = {} -- Root configuration table used by the client and server scripts.

-- ─────────────────────────────────────────────────────────────────────────────
-- 01. GENERAL SETTINGS
-- ─────────────────────────────────────────────────────────────────────────────

Config.Locale = 'en' -- Selects the UI language: 'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', or 'ja'.
Config.Debug = false -- Enables additional diagnostic console prints when set to true.

-- ─────────────────────────────────────────────────────────────────────────────
-- 02. COMMAND SETTINGS
-- ─────────────────────────────────────────────────────────────────────────────

Config.Command = { -- Controls how players open the keybind interface.
    Name = 'keybinds', -- Defines the primary chat command without the leading slash.
    Aliases = {}, -- Adds optional extra command names, for example: { 'controls', 'keys' }.
    Suggestion = true, -- Adds the primary command and aliases to FiveM chat suggestions.

    KeyMapping = { -- Optional RegisterKeyMapping configuration for opening the interface.
        Enabled = false, -- Enables the configurable key mapping when set to true.
        Description = 'Open the keybinds keyboard', -- Text shown in FiveM key binding settings.
        DefaultMapper = 'keyboard', -- Defines the default input mapper, usually 'keyboard'.
        DefaultKey = 'F10' -- Defines the default key before the player changes it in FiveM settings.
    }
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 03. RESOURCE AND COMMAND FILTERS
-- ─────────────────────────────────────────────────────────────────────────────

Config.ExcludedResources = { -- Resource folder names listed here never appear in the UI.
    ['smdz_keybinds'] = true, -- Hides this resource's own internal commands.
    ['internal'] = true, -- Example exclusion for a resource named internal.
    ['monitor'] = true -- Example exclusion for a resource named monitor.
}

Config.ExcludedCommands = { -- Exact command names listed here never appear in the UI.
    ['keybinds'] = true -- Hides the command used to open this interface.
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 04. COMMAND METADATA OVERRIDES
-- ─────────────────────────────────────────────────────────────────────────────

Config.CommandOverrides = { -- Replaces unclear command names with player-friendly labels and descriptions.
    -- ['+inventory'] = { -- Exact command returned by GetRegisteredCommands; keep the leading + when present.
    --     label = 'OPEN INVENTORY', -- Player-facing title shown in the command details panel.
    --     description = 'Open your personal inventory.' -- Player-facing explanation of the command.
    -- },

    -- ['toggleSeatbelt'] = { -- Example override for a standard command without a leading +.
    --     label = 'SEAT BELT', -- Friendly command name displayed in the UI.
    --     description = 'Enable or disable the vehicle seat belt.' -- Explains what the command does.
    -- },

    -- ['+radio'] = { -- Example override for a press-and-release RegisterKeyMapping command.
    --     label = 'PUSH TO TALK', -- Friendly title displayed to the player.
    --     description = 'Transmit on the currently selected radio channel.' -- Additional command details.
    -- }
}

-- Runtime metadata can also be registered from another client resource:
-- exports['smdz_keybinds']:RegisterCommandMetadata('+mycommand', {
--     label = 'MY CUSTOM ACTION',
--     description = 'Player-facing explanation shown inside the details panel.'
-- })
-- exports['smdz_keybinds']:UnregisterCommandMetadata('+mycommand')

-- ─────────────────────────────────────────────────────────────────────────────
-- 05. AUTOMATIC DETECTION
-- ─────────────────────────────────────────────────────────────────────────────

Config.Detection = { -- Controls how registered commands and current key mappings are scanned.
    IgnoreReleaseCommands = true, -- Hides release commands such as -handsup while keeping +handsup.
    IncludeUnboundCommands = true, -- Includes registered commands even when no current key can be resolved.
    StabilityPasses = 3, -- Repeats native mapping checks to discard unstable or inconsistent results.
    YieldEvery = 80, -- Pauses the scan after this many commands to reduce client frame hitches.
    MaximumCommands = 1200, -- Stops scanning after this safety limit on unusually large servers.

    ExcludedCommandPrefixes = { -- Commands beginning with any listed prefix are ignored.
        '_cfx_internal' -- Hides FiveM internal commands that are not useful to players.
    }
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 06. CONFLICT DETECTION
-- ─────────────────────────────────────────────────────────────────────────────

Config.Conflicts = { -- Controls when several commands assigned to the same key are marked as a conflict.
    Enabled = true, -- Enables visual conflict detection and the conflict results tab.
    MinimumCommands = 2, -- Minimum number of different commands on one key before a conflict is shown.

    IgnoredKeys = { -- Keys listed here may contain multiple actions without being marked as conflicts.
        -- ['E'] = true, -- Example: allows several contextual interactions on E.
        -- ['LMB'] = true -- Example: ignores multiple actions assigned to the left mouse button.
    }
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 07. TECHNICAL SETTINGS
-- ─────────────────────────────────────────────────────────────────────────────

Config.Technical = { -- Performance, caching, cooldown, and lifecycle behavior.
    CacheDuration = 30000, -- Keeps the latest successful scan cached for this many milliseconds.
    RefreshDebounce = 1250, -- Blocks repeated refresh requests for this many milliseconds on the client.

    ServerRefreshCooldown = { -- Server-authoritative cooldown applied separately to each player.
        Enabled = true, -- Enables the manual refresh cooldown enforced by the server.
        Seconds = 60 -- Number of real-time seconds before the player can manually refresh again.
    },

    AutoRefresh = { -- Invalidates and refreshes cached controls when client resources change.
        Enabled = true, -- Enables automatic resource-change detection.
        Delay = 800, -- Waits this many milliseconds before scanning after a resource change.
        OnResourceStart = true, -- Refreshes when another client resource starts.
        OnResourceStop = true -- Refreshes when another client resource stops.
    },

    EmitLifecycleEvents = true -- Emits local opened, closed, refreshed, and serverReady client events.
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 08. INTERFACE SETTINGS AND COLOR PRESETS
-- ─────────────────────────────────────────────────────────────────────────────

Config.Interface = { -- Visual identity, badges, tooltips, animation, and audio settings.
    BrandName = 'YOUR SERVER NAME', -- Text displayed above the main KEYBINDS & COMMANDS title.

    -- ACTIVE PRESET: RED
    Accent = '#EF1B1B', -- Main red accent used by buttons, highlights, outlines, and active states.
    GaugeColors = { '#FF6B6B', '#EF1B1B', '#8B0000' }, -- Outer, middle, and inner activity gauge ring colors.

    -- PINK PRESET
    -- Accent = '#EC4899', -- Main pink accent.
    -- GaugeColors = { '#FBCFE8', '#EC4899', '#9D174D' }, -- Pink gauge ring colors from light to dark.

    -- GOLD PRESET
    -- Accent = '#F5B700', -- Main gold accent.
    -- GaugeColors = { '#FDE68A', '#F5B700', '#92400E' }, -- Gold gauge ring colors from light to dark.

    -- SKY BLUE PRESET
    -- Accent = '#38BDF8', -- Main sky-blue accent.
    -- GaugeColors = { '#BAE6FD', '#38BDF8', '#0284C7' }, -- Sky-blue gauge ring colors from light to dark.

    -- DEEP BLUE PRESET
    -- Accent = '#2563EB', -- Main deep-blue accent.
    -- GaugeColors = { '#BFDBFE', '#2563EB', '#1E3A8A' }, -- Deep-blue gauge ring colors from light to dark.

    -- GREEN PRESET
    -- Accent = '#22C55E', -- Main green accent.
    -- GaugeColors = { '#BBF7D0', '#22C55E', '#166534' }, -- Green gauge ring colors from light to dark.

    -- EMERALD PRESET
    -- Accent = '#10B981', -- Main emerald accent.
    -- GaugeColors = { '#A7F3D0', '#10B981', '#065F46' }, -- Emerald gauge ring colors from light to dark.

    -- PURPLE PRESET
    -- Accent = '#A855F7', -- Main purple accent.
    -- GaugeColors = { '#E9D5FF', '#A855F7', '#581C87' }, -- Purple gauge ring colors from light to dark.

    -- ORANGE PRESET
    -- Accent = '#F97316', -- Main orange accent.
    -- GaugeColors = { '#FED7AA', '#F97316', '#9A3412' }, -- Orange gauge ring colors from light to dark.

    -- MONOCHROME PRESET
    -- Accent = '#E5E7EB', -- Main neutral gray accent.
    -- GaugeColors = { '#F9FAFB', '#9CA3AF', '#374151' }, -- Monochrome gauge ring colors from light to dark.

    -- Keep exactly one Accent line and one GaugeColors line uncommented.

    ShowResourceNames = true, -- Shows the resource alias or original resource name in command results.

    KeyBadges = { -- Default visibility of tags drawn over keys in the visual keyboard.
        Assigned = true, -- Shows the number of assigned commands on highlighted keys by default.
        Conflicts = true -- Shows conflict count tags on keys with conflicting commands by default.
    },

    ResourceAliasTooltip = { -- Controls the tooltip that reveals the original resource folder name.
        Enabled = true, -- Enables the resource-name tooltip when hovering an alias.
        OnlyWhenAliased = true -- Shows the tooltip only when the visible alias differs from the folder name.
    },

    Animations = { -- Controls nonessential interface transitions and animated elements.
        Enabled = true, -- Enables UI entry, exit, icon, title, counter, and gauge animations.
        ReduceMotion = false -- Reduces motion intensity for users who prefer fewer animations.
    },

    KeyPressSound = { -- Controls the key press sound used by the physical and clickable keyboard preview.
        Enabled = true, -- Enables the included key press sound effect.
        File = 'sounds/key-press-v2.wav', -- Relative NUI path to the WAV sound file.
        Volume = 0.85, -- Playback volume from 0.0 (silent) to 1.0 (maximum).
        PoolSize = 8 -- Number of reusable audio instances for rapid overlapping key presses.
    }
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 09. HELP MARKERS
-- ─────────────────────────────────────────────────────────────────────────────

Config.Marker = { -- Controls world markers that automatically open the keybind interface.
    Enabled = true, -- Enables every configured marker location globally.
    Type = 32, -- FiveM MarkerTypeQuestionMark numeric identifier.
    DrawDistance = 25.0, -- Maximum distance in meters at which the marker is rendered.
    TextDistance = 12.0, -- Maximum distance in meters at which the help text is rendered.
    OpenDistance = 1.35, -- Distance in meters at which entering the marker opens the interface.
    ResetDistance = 2.25, -- Distance the player must leave before the marker can trigger again.
    ZOffset = 0.15, -- Vertical offset applied to the marker itself.
    TextZOffset = 1.25, -- Vertical offset applied to the help text above the marker.
    Scale = vector3(0.72, 0.72, 0.72), -- Marker width, depth, and height scale.
    Color = { r = 255, g = 205, b = 48, a = 220 }, -- Marker RGBA color values from 0 to 255.
    BobUpAndDown = true, -- Makes the marker gently move vertically.
    FaceCamera = true, -- Keeps the marker facing the player's camera.
    Rotate = false, -- Enables or disables marker rotation.

    Locations = { -- List of world locations where the help marker can appear.
        {
            coords = vector4(-1039.7495, -2731.7993, 20.1693, 161.0202), -- Marker position and optional heading.
            enabled = true -- Enables this individual marker location.
            -- text = 'Custom text for this marker' -- Optional text override for this location.
        },

        -- {
        --     coords = vector3(215.76, -810.12, 30.73), -- vector3 coordinates are also supported.
        --     enabled = true, -- Enables this example location.
        --     text = 'Need help with the server controls?' -- Overrides the translated default marker text.
        -- },

        -- {
        --     coords = vector4(-75.21, -818.95, 326.18, 180.0), -- Example vector4 location with heading.
        --     enabled = false -- Keeps this prepared location disabled until needed.
        -- }
    }
}

-- ─────────────────────────────────────────────────────────────────────────────
-- 10. RESOURCE ALIAS VARIANTS
-- ─────────────────────────────────────────────────────────────────────────────

Config.ResourceAliasVariants = { -- Generates common folder-name alternatives without replacing explicit aliases.
    Enabled = true, -- Enables automatic alias variant generation.
    Hyphen = true, -- Creates hyphen variants, for example qb_inventory becomes qb-inventory.
    Underscore = true, -- Creates underscore variants, for example qb-inventory becomes qb_inventory.
    Lowercase = true -- Creates lowercase variants to improve matching consistency.
}

-- ─────────────────────────────────────────────────────────────────────────────
-- RESOURCE ALIASES (KEPT AT THE END BECAUSE THIS LIST IS INTENTIONALLY LARGE)
-- ─────────────────────────────────────────────────────────────────────────────

-- Friendly player-facing names shown instead of raw resource folder names.
-- This list is optional and harmless when a resource is not installed.
-- The original folder name is always preserved internally for searches/tooltips.
--
-- Add your own entry using the exact resource folder name:
--     ['my_resource_folder'] = 'MY FRIENDLY NAME',
--
-- You may delete any defaults that do not suit your server naming conventions.
-- Included defaults: 2145 explicit FiveM resource names before automatic variants.
Config.ResourceAliases = {

    -- FRAMEWORKS AND CORE
    ['es_extended'] = 'FRAMEWORK',
    ['esx_core'] = 'FRAMEWORK',
    ['esx-framework'] = 'FRAMEWORK',
    ['esx_legacy'] = 'FRAMEWORK',
    ['essentialmode'] = 'FRAMEWORK',
    ['extendedmode'] = 'FRAMEWORK',
    ['qb-core'] = 'FRAMEWORK',
    ['qb_core'] = 'FRAMEWORK',
    ['qbcore'] = 'FRAMEWORK',
    ['qbx_core'] = 'FRAMEWORK',
    ['qbx-core'] = 'FRAMEWORK',
    ['qbox'] = 'FRAMEWORK',
    ['qbox_core'] = 'FRAMEWORK',
    ['ox_core'] = 'FRAMEWORK',
    ['ND_Core'] = 'FRAMEWORK',
    ['nd_core'] = 'FRAMEWORK',
    ['vRP'] = 'FRAMEWORK',
    ['vrp'] = 'FRAMEWORK',
    ['vrp2'] = 'FRAMEWORK',
    ['creative_v5'] = 'FRAMEWORK',
    ['creative_network'] = 'FRAMEWORK',
    ['renzu_core'] = 'FRAMEWORK',
    ['rr_uilib'] = 'FRAMEWORK',
    ['framework'] = 'FRAMEWORK',
    ['core'] = 'FRAMEWORK',
    ['core_framework'] = 'FRAMEWORK',
    ['custom_core'] = 'FRAMEWORK',

    -- DATABASE AND LIBRARIES
    ['ox_lib'] = 'CORE LIBRARY',
    ['oxmysql'] = 'CORE LIBRARY',
    ['mysql-async'] = 'CORE LIBRARY',
    ['ghmattimysql'] = 'CORE LIBRARY',
    ['fivem-mysql-async'] = 'CORE LIBRARY',
    ['PolyZone'] = 'CORE LIBRARY',
    ['polyzonehelper'] = 'CORE LIBRARY',
    ['cron'] = 'CORE LIBRARY',
    ['async'] = 'CORE LIBRARY',
    ['promise'] = 'CORE LIBRARY',
    ['menuv'] = 'CORE LIBRARY',
    ['NativeUI'] = 'CORE LIBRARY',
    ['RageUI'] = 'CORE LIBRARY',
    ['warmenu'] = 'CORE LIBRARY',
    ['nh-context'] = 'CORE LIBRARY',
    ['qb-menu'] = 'CORE LIBRARY',
    ['qb-input'] = 'CORE LIBRARY',
    ['ox_lib_menu'] = 'CORE LIBRARY',
    ['contextmenu'] = 'CORE LIBRARY',
    ['interact-sound'] = 'CORE LIBRARY',
    ['xsound'] = 'CORE LIBRARY',
    ['xsound2'] = 'CORE LIBRARY',
    ['screenshot-basic'] = 'CORE LIBRARY',
    ['discord-screenshot'] = 'CORE LIBRARY',
    ['webpack'] = 'CORE LIBRARY',
    ['yarn'] = 'CORE LIBRARY',
    ['npm'] = 'CORE LIBRARY',
    ['mapmanager'] = 'CORE LIBRARY',
    ['spawnmanager'] = 'CORE LIBRARY',
    ['sessionmanager'] = 'CORE LIBRARY',
    ['baseevents'] = 'CORE LIBRARY',
    ['hardcap'] = 'CORE LIBRARY',
    ['rconlog'] = 'CORE LIBRARY',
    ['chat'] = 'CORE LIBRARY',
    ['chat-theme-gtao'] = 'CORE LIBRARY',
    ['playernames'] = 'CORE LIBRARY',
    ['bob74_ipl'] = 'CORE LIBRARY',
    ['object-loader'] = 'CORE LIBRARY',
    ['k4mb1-shellstarter'] = 'CORE LIBRARY',
    ['fivem-freecam'] = 'CORE LIBRARY',
    ['pmms'] = 'CORE LIBRARY',
    ['fivem-appearance-shared'] = 'CORE LIBRARY',
    ['utility_lib'] = 'CORE LIBRARY',
    ['shared_scripts'] = 'CORE LIBRARY',
    ['standalone_lib'] = 'CORE LIBRARY',

    -- ESX ESSENTIAL MODULES
    ['esx_addonaccount'] = 'FRAMEWORK MODULE',
    ['esx_addoninventory'] = 'FRAMEWORK MODULE',
    ['esx_datastore'] = 'FRAMEWORK MODULE',
    ['esx_society'] = 'FRAMEWORK MODULE',
    ['esx_billing'] = 'FRAMEWORK MODULE',
    ['esx_license'] = 'FRAMEWORK MODULE',
    ['esx_status'] = 'FRAMEWORK MODULE',
    ['esx_basicneeds'] = 'FRAMEWORK MODULE',
    ['esx_optionalneeds'] = 'FRAMEWORK MODULE',
    ['esx_identity'] = 'FRAMEWORK MODULE',
    ['esx_skin'] = 'FRAMEWORK MODULE',
    ['skinchanger'] = 'FRAMEWORK MODULE',
    ['esx_menu_default'] = 'FRAMEWORK MODULE',
    ['esx_menu_dialog'] = 'FRAMEWORK MODULE',
    ['esx_menu_list'] = 'FRAMEWORK MODULE',
    ['esx_service'] = 'FRAMEWORK MODULE',
    ['esx_jobs'] = 'FRAMEWORK MODULE',
    ['esx_joblisting'] = 'FRAMEWORK MODULE',
    ['esx_taxijob'] = 'FRAMEWORK MODULE',
    ['esx_policejob'] = 'FRAMEWORK MODULE',
    ['esx_ambulancejob'] = 'AMBULANCE',
    ['esx_ambulance_job'] = 'MEDICAL',
    ['esx-ambulance-job'] = 'MEDICAL',
    ['esx_mechanicjob'] = 'FRAMEWORK MODULE',
    ['esx_vehicleshop'] = 'FRAMEWORK MODULE',
    ['esx_boat'] = 'FRAMEWORK MODULE',
    ['esx_shops'] = 'FRAMEWORK MODULE',
    ['esx_property'] = 'FRAMEWORK MODULE',
    ['esx_weaponshop'] = 'FRAMEWORK MODULE',
    ['esx_barbershop'] = 'FRAMEWORK MODULE',
    ['esx_clotheshop'] = 'FRAMEWORK MODULE',
    ['esx_dmvschool'] = 'FRAMEWORK MODULE',
    ['esx_drugs'] = 'FRAMEWORK MODULE',
    ['esx_holdup'] = 'FRAMEWORK MODULE',
    ['esx_garage'] = 'FRAMEWORK MODULE',
    ['esx_rpchat'] = 'FRAMEWORK MODULE',
    ['esx_cruisecontrol'] = 'FRAMEWORK MODULE',
    ['esx_accessories'] = 'FRAMEWORK MODULE',
    ['esx_phone'] = 'FRAMEWORK MODULE',
    ['esx_scoreboard'] = 'FRAMEWORK MODULE',

    -- INVENTORIES
    ['ox_inventory'] = 'INVENTORY',
    ['qb-inventory'] = 'INVENTORY',
    ['qb_inventory'] = 'INVENTORY',
    ['ps-inventory'] = 'INVENTORY',
    ['lj-inventory'] = 'INVENTORY',
    ['qs-inventory'] = 'INVENTORY',
    ['qs_inventory'] = 'INVENTORY',
    ['qs-inventory-pro'] = 'INVENTORY',
    ['origen_inventory'] = 'INVENTORY',
    ['origen-inventory'] = 'INVENTORY',
    ['tgiann-inventory'] = 'INVENTORY',
    ['tgiann_inventory'] = 'INVENTORY',
    ['codem-inventory'] = 'INVENTORY',
    ['codem_inventory'] = 'INVENTORY',
    ['core_inventory'] = 'INVENTORY',
    ['core-inventory'] = 'INVENTORY',
    ['chezza_inventory'] = 'INVENTORY',
    ['mf-inventory'] = 'INVENTORY',
    ['mf_inventory'] = 'INVENTORY',
    ['ak47_inventory'] = 'INVENTORY',
    ['ak47_qb_inventory'] = 'INVENTORY',
    ['ak47_esx_inventory'] = 'INVENTORY',
    ['inventory'] = 'INVENTORY',
    ['inventoryhud'] = 'INVENTORY',
    ['inventoryhud_trunk'] = 'INVENTORY',
    ['disc-inventoryhud'] = 'INVENTORY',
    ['trunk_inventory'] = 'INVENTORY',
    ['stashhouse'] = 'INVENTORY',
    ['qb-stashes'] = 'INVENTORY',
    ['qb-shops'] = 'INVENTORY',
    ['jim-shops'] = 'INVENTORY',
    ['renewed-inventory'] = 'INVENTORY',
    ['jixel-inventory'] = 'INVENTORY',
    ['wasabi_inventory'] = 'INVENTORY',
    ['vms_inventory'] = 'INVENTORY',
    ['jpr-inventory'] = 'INVENTORY',
    ['jpr_inventory'] = 'INVENTORY',
    ['rcore_inventory'] = 'INVENTORY',
    ['np-inventory'] = 'INVENTORY',
    ['qb-hotbar'] = 'INVENTORY',

    -- TARGET AND INTERACTION
    ['ox_target'] = 'INTERACTION SYSTEM',
    ['qb-target'] = 'INTERACTION SYSTEM',
    ['qb_target'] = 'INTERACTION SYSTEM',
    ['qtarget'] = 'INTERACTION SYSTEM',
    ['bt-target'] = 'INTERACTION SYSTEM',
    ['bt_target'] = 'INTERACTION SYSTEM',
    ['interact'] = 'INTERACTION SYSTEM',
    ['sleepless_interact'] = 'INTERACTION SYSTEM',
    ['sleepless-interact'] = 'INTERACTION SYSTEM',
    ['interactplus'] = 'INTERACTION SYSTEM',
    ['meta_target'] = 'INTERACTION SYSTEM',
    ['meta-target'] = 'INTERACTION SYSTEM',
    ['third-eye'] = 'INTERACTION SYSTEM',
    ['third_eye'] = 'INTERACTION SYSTEM',
    ['peek'] = 'INTERACTION SYSTEM',
    ['np-target'] = 'INTERACTION SYSTEM',
    ['nmsh-target'] = 'INTERACTION SYSTEM',
    ['lunar_interactions'] = 'INTERACTION SYSTEM',
    ['wasabi_target'] = 'INTERACTION SYSTEM',
    ['cd_drawtextui'] = 'INTERACTION SYSTEM',
    ['okokTextUI'] = 'INTERACTION SYSTEM',
    ['ox_textui'] = 'INTERACTION SYSTEM',
    ['qb-drawtext'] = 'INTERACTION SYSTEM',
    ['ps-ui'] = 'INTERACTION SYSTEM',
    ['jim_bridge'] = 'INTERACTION SYSTEM',
    ['jim-bridge'] = 'INTERACTION SYSTEM',
    ['input-dialog'] = 'INTERACTION SYSTEM',
    ['textui'] = 'INTERACTION SYSTEM',
    ['target'] = 'INTERACTION SYSTEM',
    ['targeting'] = 'INTERACTION SYSTEM',

    -- VOICE AND RADIO
    ['pma-voice'] = 'VOICE CHAT',
    ['pma_voice'] = 'VOICE CHAT',
    ['mumble-voip'] = 'VOICE CHAT',
    ['mumble_voip'] = 'VOICE CHAT',
    ['saltychat'] = 'VOICE CHAT',
    ['SaltyChat'] = 'VOICE CHAT',
    ['toko-voip'] = 'VOICE CHAT',
    ['toko_voip'] = 'VOICE CHAT',
    ['rp-radio'] = 'VOICE CHAT',
    ['rp_radio'] = 'VOICE CHAT',
    ['qb-radio'] = 'VOICE CHAT',
    ['qb_radio'] = 'VOICE CHAT',
    ['wasabi_radio'] = 'VOICE CHAT',
    ['qs-radio'] = 'VOICE CHAT',
    ['qs_radio'] = 'VOICE CHAT',
    ['lb-radio'] = 'VOICE CHAT',
    ['lb_radio'] = 'VOICE CHAT',
    ['np-radio'] = 'VOICE CHAT',
    ['rahe-radio'] = 'VOICE CHAT',
    ['rahe_radio'] = 'VOICE CHAT',
    ['zerio-radio'] = 'VOICE CHAT',
    ['zerio_radio'] = 'VOICE CHAT',
    ['sonoranradio'] = 'VOICE CHAT',
    ['sonoran-radio'] = 'VOICE CHAT',
    ['snipe-radio'] = 'VOICE CHAT',
    ['fd_radio'] = 'VOICE CHAT',
    ['okokRadio'] = 'VOICE CHAT',
    ['voice'] = 'VOICE CHAT',
    ['voicechat'] = 'VOICE CHAT',
    ['radio'] = 'VOICE CHAT',
    ['radio-list'] = 'VOICE CHAT',
    ['radio_list'] = 'VOICE CHAT',

    -- PHONES AND TABLETS
    ['lb-phone'] = 'PHONE',
    ['lb_phone'] = 'PHONE',
    ['lb-tablet'] = 'PHONE',
    ['lb_tablet'] = 'PHONE',
    ['qs-smartphone'] = 'PHONE',
    ['qs-smartphone-pro'] = 'PHONE',
    ['qs_smartphone'] = 'PHONE',
    ['qb-phone'] = 'PHONE',
    ['qb_phone'] = 'PHONE',
    ['gcphone'] = 'PHONE',
    ['gksphone'] = 'PHONE',
    ['gks-phone'] = 'PHONE',
    ['high-phone'] = 'PHONE',
    ['high_phone'] = 'PHONE',
    ['roadphone'] = 'PHONE',
    ['road-phone'] = 'PHONE',
    ['npwd'] = 'PHONE',
    ['npwd_qb'] = 'PHONE',
    ['npwd_esx'] = 'PHONE',
    ['yseries'] = 'PHONE',
    ['yflip-phone'] = 'PHONE',
    ['yflip_phone'] = 'PHONE',
    ['okokPhone'] = 'PHONE',
    ['d-phone'] = 'PHONE',
    ['d_phone'] = 'PHONE',
    ['renewed-phone'] = 'PHONE',
    ['renewed_phone'] = 'PHONE',
    ['rahe-phone'] = 'PHONE',
    ['rahe_phone'] = 'PHONE',
    ['snappy-phone'] = 'PHONE',
    ['snappy_phone'] = 'PHONE',
    ['phone'] = 'PHONE',
    ['smartphone'] = 'PHONE',
    ['tablet'] = 'PHONE',
    ['mdt-tablet'] = 'PHONE',
    ['business-tablet'] = 'PHONE',
    ['dispatch-tablet'] = 'PHONE',

    -- APPEARANCE AND CLOTHING
    ['illenium-appearance'] = 'APPEARANCE',
    ['illenium_appearance'] = 'APPEARANCE',
    ['fivem-appearance'] = 'APPEARANCE',
    ['fivem_appearance'] = 'APPEARANCE',
    ['qb-clothing'] = 'APPEARANCE',
    ['qb_clothing'] = 'APPEARANCE',
    ['rcore_clothing'] = 'APPEARANCE',
    ['rcore-clothing'] = 'APPEARANCE',
    ['origen_clothing'] = 'APPEARANCE',
    ['origen-clothing'] = 'APPEARANCE',
    ['wasabi_clothing'] = 'APPEARANCE',
    ['wasabi-appearance'] = 'APPEARANCE',
    ['codem-appearance'] = 'APPEARANCE',
    ['codem_appearance'] = 'APPEARANCE',
    ['tgiann-clothing'] = 'APPEARANCE',
    ['tgiann_clothing'] = 'APPEARANCE',
    ['raid_clothes'] = 'APPEARANCE',
    ['raid-clothes'] = 'APPEARANCE',
    ['qb-barber'] = 'APPEARANCE',
    ['qb_barber'] = 'APPEARANCE',
    ['fivem-tattoos'] = 'APPEARANCE',
    ['qb-tattooshop'] = 'APPEARANCE',
    ['clothing'] = 'APPEARANCE',
    ['appearance'] = 'APPEARANCE',
    ['barbershop'] = 'APPEARANCE',
    ['tattooshop'] = 'APPEARANCE',

    -- CHARACTERS AND IDENTITY
    ['qb-multicharacter'] = 'CHARACTER SYSTEM',
    ['qb_multicharacter'] = 'CHARACTER SYSTEM',
    ['qbx_multicharacter'] = 'CHARACTER SYSTEM',
    ['esx_multicharacter'] = 'CHARACTER SYSTEM',
    ['renzu_multicharacter'] = 'CHARACTER SYSTEM',
    ['renzu-multicharacter'] = 'CHARACTER SYSTEM',
    ['origen_multicharacter'] = 'CHARACTER SYSTEM',
    ['origen-multicharacter'] = 'CHARACTER SYSTEM',
    ['codem-multicharacter'] = 'CHARACTER SYSTEM',
    ['codem_multicharacter'] = 'CHARACTER SYSTEM',
    ['pivoh-multicharacter'] = 'CHARACTER SYSTEM',
    ['np-multicharacter'] = 'CHARACTER SYSTEM',
    ['identity'] = 'CHARACTER SYSTEM',
    ['multicharacter'] = 'CHARACTER SYSTEM',
    ['character-selector'] = 'CHARACTER SYSTEM',
    ['character_selector'] = 'CHARACTER SYSTEM',
    ['spawn-selector'] = 'CHARACTER SYSTEM',
    ['spawn_selector'] = 'CHARACTER SYSTEM',
    ['qb-spawn'] = 'CHARACTER SYSTEM',
    ['qbx_spawn'] = 'CHARACTER SYSTEM',
    ['esx_spawn'] = 'CHARACTER SYSTEM',
    ['player-spawn'] = 'CHARACTER SYSTEM',
    ['player_spawn'] = 'CHARACTER SYSTEM',

    -- HUD MENUS AND QUALITY OF LIFE
    ['qb-hud'] = 'USER INTERFACE',
    ['qb_hud'] = 'USER INTERFACE',
    ['ps-hud'] = 'USER INTERFACE',
    ['ps_hud'] = 'USER INTERFACE',
    ['renzu_hud'] = 'USER INTERFACE',
    ['renzu-hud'] = 'USER INTERFACE',
    ['codem-hud'] = 'USER INTERFACE',
    ['codem_hud'] = 'USER INTERFACE',
    ['okokHud'] = 'USER INTERFACE',
    ['okokHUD'] = 'USER INTERFACE',
    ['tgiann-hud'] = 'USER INTERFACE',
    ['tgiann_hud'] = 'USER INTERFACE',
    ['origen_hud'] = 'USER INTERFACE',
    ['origen-hud'] = 'USER INTERFACE',
    ['vms_hud'] = 'USER INTERFACE',
    ['vms-hud'] = 'USER INTERFACE',
    ['jim-hud'] = 'USER INTERFACE',
    ['jim_hud'] = 'USER INTERFACE',
    ['hud'] = 'USER INTERFACE',
    ['speedometer'] = 'USER INTERFACE',
    ['seatbelt'] = 'USER INTERFACE',
    ['seatbelt_indicator'] = 'USER INTERFACE',
    ['qb-smallresources'] = 'USER INTERFACE',
    ['qbx_smallresources'] = 'USER INTERFACE',
    ['status_hud'] = 'USER INTERFACE',
    ['compass'] = 'USER INTERFACE',
    ['street-label'] = 'USER INTERFACE',
    ['street_label'] = 'USER INTERFACE',
    ['postal-map'] = 'USER INTERFACE',
    ['nearest-postal'] = 'USER INTERFACE',
    ['nearest_postal'] = 'USER INTERFACE',
    ['pausemenu'] = 'USER INTERFACE',
    ['pause-menu'] = 'USER INTERFACE',
    ['qb-pausemenu'] = 'USER INTERFACE',
    ['qbx_pausemenu'] = 'USER INTERFACE',
    ['esx_pausemenu'] = 'USER INTERFACE',
    ['radialmenu'] = 'USER INTERFACE',
    ['qb-radialmenu'] = 'USER INTERFACE',
    ['qb_radialmenu'] = 'USER INTERFACE',
    ['ox_radialmenu'] = 'USER INTERFACE',
    ['dpemotes'] = 'USER INTERFACE',
    ['rpemotes'] = 'USER INTERFACE',
    ['scully_emotemenu'] = 'USER INTERFACE',
    ['scully-emotemenu'] = 'USER INTERFACE',
    ['animations'] = 'USER INTERFACE',
    ['animation-menu'] = 'USER INTERFACE',
    ['progressbar'] = 'USER INTERFACE',
    ['qb-progressbar'] = 'USER INTERFACE',
    ['ox_progressbar'] = 'USER INTERFACE',
    ['mythic_progbar'] = 'USER INTERFACE',
    ['circle_progress'] = 'USER INTERFACE',
    ['skillcheck'] = 'USER INTERFACE',
    ['minigames'] = 'USER INTERFACE',
    ['memorygame'] = 'USER INTERFACE',
    ['lockpick'] = 'USER INTERFACE',
    ['safecracker'] = 'USER INTERFACE',

    -- VEHICLES GARAGES KEYS AND FUEL
    ['qb-vehicleshop'] = 'VEHICLE SYSTEM',
    ['qb_vehicleshop'] = 'VEHICLE SYSTEM',
    ['qbx_vehicleshop'] = 'VEHICLE SYSTEM',
    ['vehicleshop'] = 'VEHICLE SYSTEM',
    ['vehicle-shop'] = 'VEHICLE SYSTEM',
    ['advancedvehicleshop'] = 'VEHICLE SYSTEM',
    ['jim-vehicleshop'] = 'VEHICLE SYSTEM',
    ['jim_vehicleshop'] = 'VEHICLE SYSTEM',
    ['okokVehicleShop'] = 'VEHICLE SYSTEM',
    ['codem-vehicleshop'] = 'VEHICLE SYSTEM',
    ['codem_vehicleshop'] = 'VEHICLE SYSTEM',
    ['qs-vehicleshop'] = 'VEHICLE SYSTEM',
    ['qs_vehicleshop'] = 'VEHICLE SYSTEM',
    ['renzu_vehicleshop'] = 'VEHICLE SYSTEM',
    ['renzu-vehicleshop'] = 'VEHICLE SYSTEM',
    ['qb-garages'] = 'VEHICLE SYSTEM',
    ['qb_garages'] = 'VEHICLE SYSTEM',
    ['qbx_garages'] = 'VEHICLE SYSTEM',
    ['jg-advancedgarages'] = 'VEHICLE SYSTEM',
    ['jg_advancedgarages'] = 'VEHICLE SYSTEM',
    ['cd_garage'] = 'VEHICLE SYSTEM',
    ['cd-garage'] = 'VEHICLE SYSTEM',
    ['okokGarage'] = 'VEHICLE SYSTEM',
    ['codem-garage'] = 'VEHICLE SYSTEM',
    ['codem_garage'] = 'VEHICLE SYSTEM',
    ['qs-advancedgarages'] = 'VEHICLE SYSTEM',
    ['qs_advancedgarages'] = 'VEHICLE SYSTEM',
    ['renzu_garage'] = 'VEHICLE SYSTEM',
    ['renzu-garage'] = 'VEHICLE SYSTEM',
    ['loaf_garage'] = 'VEHICLE SYSTEM',
    ['loaf-garage'] = 'VEHICLE SYSTEM',
    ['qb-vehiclekeys'] = 'VEHICLE SYSTEM',
    ['qb_vehiclekeys'] = 'VEHICLE SYSTEM',
    ['qbx_vehiclekeys'] = 'VEHICLE SYSTEM',
    ['wasabi_carlock'] = 'VEHICLE SYSTEM',
    ['wasabi-carlock'] = 'VEHICLE SYSTEM',
    ['cd_keymaster'] = 'VEHICLE SYSTEM',
    ['cd-keymaster'] = 'VEHICLE SYSTEM',
    ['qs-vehiclekeys'] = 'VEHICLE SYSTEM',
    ['qs_vehiclekeys'] = 'VEHICLE SYSTEM',
    ['renewed-vehiclekeys'] = 'VEHICLE SYSTEM',
    ['renewed_vehiclekeys'] = 'VEHICLE SYSTEM',
    ['mk_vehiclekeys'] = 'VEHICLE SYSTEM',
    ['vehiclekeys'] = 'VEHICLE SYSTEM',
    ['vehicle-keys'] = 'VEHICLE SYSTEM',
    ['LegacyFuel'] = 'VEHICLE SYSTEM',
    ['legacyfuel'] = 'VEHICLE SYSTEM',
    ['ox_fuel'] = 'VEHICLE SYSTEM',
    ['cdn-fuel'] = 'VEHICLE SYSTEM',
    ['cdn_fuel'] = 'VEHICLE SYSTEM',
    ['ps-fuel'] = 'VEHICLE SYSTEM',
    ['ps_fuel'] = 'VEHICLE SYSTEM',
    ['lj-fuel'] = 'VEHICLE SYSTEM',
    ['lj_fuel'] = 'VEHICLE SYSTEM',
    ['qb-fuel'] = 'VEHICLE SYSTEM',
    ['qb_fuel'] = 'VEHICLE SYSTEM',
    ['esx-sna-fuel'] = 'VEHICLE SYSTEM',
    ['okokGasStation'] = 'VEHICLE SYSTEM',
    ['ti_fuel'] = 'VEHICLE SYSTEM',
    ['frfuel'] = 'VEHICLE SYSTEM',
    ['fuel'] = 'VEHICLE SYSTEM',
    ['electric-vehicles'] = 'VEHICLE SYSTEM',
    ['electric_vehicles'] = 'VEHICLE SYSTEM',
    ['renzu_nitro'] = 'VEHICLE SYSTEM',
    ['renzu-nitro'] = 'VEHICLE SYSTEM',
    ['jim-mechanic'] = 'VEHICLE SYSTEM',
    ['jim_mechanic'] = 'VEHICLE SYSTEM',
    ['qb-mechanicjob'] = 'VEHICLE SYSTEM',
    ['qb_mechanicjob'] = 'VEHICLE SYSTEM',
    ['wasabi_mechanic'] = 'VEHICLE SYSTEM',
    ['wasabi-mechanic'] = 'VEHICLE SYSTEM',
    ['renzu_customs'] = 'VEHICLE SYSTEM',
    ['renzu-customs'] = 'VEHICLE SYSTEM',
    ['qb-customs'] = 'VEHICLE SYSTEM',
    ['qb_customs'] = 'VEHICLE SYSTEM',
    ['lscustoms'] = 'VEHICLE SYSTEM',
    ['ls-customs'] = 'VEHICLE SYSTEM',
    ['vehiclecontrol'] = 'VEHICLE SYSTEM',
    ['vehicle-control'] = 'VEHICLE SYSTEM',
    ['realisticvehiclefailure'] = 'VEHICLE SYSTEM',
    ['realistic_vehicle_failure'] = 'VEHICLE SYSTEM',
    ['handling-editor'] = 'VEHICLE SYSTEM',
    ['handling_editor'] = 'VEHICLE SYSTEM',
    ['drift-counter'] = 'VEHICLE SYSTEM',
    ['drift_counter'] = 'VEHICLE SYSTEM',
    ['carplay'] = 'VEHICLE SYSTEM',
    ['vehicle-rental'] = 'VEHICLE SYSTEM',
    ['vehicle_rental'] = 'VEHICLE SYSTEM',
    ['rentals'] = 'VEHICLE SYSTEM',

    -- POLICE DISPATCH AND MDT
    ['qb-policejob'] = 'POLICE SYSTEM',
    ['qb_policejob'] = 'POLICE SYSTEM',
    ['qbx_police'] = 'POLICE SYSTEM',
    ['qbx-police'] = 'POLICE SYSTEM',
    ['origen_police'] = 'POLICE SYSTEM',
    ['origen-police'] = 'POLICE SYSTEM',
    ['rcore_police'] = 'POLICE SYSTEM',
    ['rcore-police'] = 'POLICE SYSTEM',
    ['wasabi_police'] = 'POLICE SYSTEM',
    ['wasabi-police'] = 'POLICE SYSTEM',
    ['linden_outlawalert'] = 'POLICE SYSTEM',
    ['ps-dispatch'] = 'POLICE SYSTEM',
    ['ps_dispatch'] = 'POLICE SYSTEM',
    ['cd_dispatch'] = 'POLICE SYSTEM',
    ['cd-dispatch'] = 'POLICE SYSTEM',
    ['qs-dispatch'] = 'POLICE SYSTEM',
    ['qs_dispatch'] = 'POLICE SYSTEM',
    ['rcore_dispatch'] = 'POLICE SYSTEM',
    ['rcore-dispatch'] = 'POLICE SYSTEM',
    ['core_dispatch'] = 'POLICE SYSTEM',
    ['core-dispatch'] = 'POLICE SYSTEM',
    ['bub-mdt'] = 'POLICE SYSTEM',
    ['bub_mdt'] = 'POLICE SYSTEM',
    ['ps-mdt'] = 'POLICE SYSTEM',
    ['ps_mdt'] = 'POLICE SYSTEM',
    ['redutzu-mdt'] = 'POLICE SYSTEM',
    ['redutzu_mdt'] = 'POLICE SYSTEM',
    ['tk_dispatch'] = 'POLICE SYSTEM',
    ['tk-dispatch'] = 'POLICE SYSTEM',
    ['origen_mdt'] = 'POLICE SYSTEM',
    ['origen-mdt'] = 'POLICE SYSTEM',
    ['mdt'] = 'POLICE SYSTEM',
    ['police-mdt'] = 'POLICE SYSTEM',
    ['police_mdt'] = 'POLICE SYSTEM',
    ['dispatch'] = 'POLICE SYSTEM',
    ['police-dispatch'] = 'POLICE SYSTEM',
    ['police_dispatch'] = 'POLICE SYSTEM',
    ['sonoran_cad'] = 'POLICE SYSTEM',
    ['sonorancad'] = 'POLICE SYSTEM',
    ['wk_wars2x'] = 'POLICE SYSTEM',
    ['wk_wars2x_esx'] = 'POLICE SYSTEM',
    ['radar'] = 'POLICE SYSTEM',
    ['police-radar'] = 'POLICE SYSTEM',
    ['police_radar'] = 'POLICE SYSTEM',
    ['evidence'] = 'POLICE SYSTEM',
    ['qb-evidence'] = 'POLICE SYSTEM',
    ['qb_evidence'] = 'POLICE SYSTEM',
    ['ps-evidence'] = 'POLICE SYSTEM',
    ['ps_evidence'] = 'POLICE SYSTEM',
    ['fingerprint'] = 'POLICE SYSTEM',
    ['qb-prison'] = 'POLICE SYSTEM',
    ['qb_prison'] = 'POLICE SYSTEM',
    ['rcore_prison'] = 'POLICE SYSTEM',
    ['rcore-prison'] = 'POLICE SYSTEM',
    ['pickle_prisons'] = 'POLICE SYSTEM',
    ['pickle-prisons'] = 'POLICE SYSTEM',
    ['jail'] = 'POLICE SYSTEM',
    ['community-service'] = 'POLICE SYSTEM',
    ['community_service'] = 'POLICE SYSTEM',
    ['policegarage'] = 'POLICE SYSTEM',
    ['police-garage'] = 'POLICE SYSTEM',
    ['police_garage'] = 'POLICE SYSTEM',
    ['policearmory'] = 'POLICE SYSTEM',
    ['police-armory'] = 'POLICE SYSTEM',
    ['police_armory'] = 'POLICE SYSTEM',
    ['spikestrips'] = 'POLICE SYSTEM',
    ['spike-strips'] = 'POLICE SYSTEM',
    ['bodycam'] = 'POLICE SYSTEM',
    ['dashcam'] = 'POLICE SYSTEM',
    ['police-bodycam'] = 'POLICE SYSTEM',
    ['police_bodycam'] = 'POLICE SYSTEM',

    -- EMS FIRE AND MEDICAL
    ['qb-ambulancejob'] = 'AMBULANCE',
    ['qb_ambulancejob'] = 'AMBULANCE',
    ['qbx_ambulancejob'] = 'AMBULANCE',
    ['wasabi_ambulance'] = 'AMBULANCE',
    ['wasabi-ambulance'] = 'AMBULANCE',
    ['ars_ambulancejob'] = 'AMBULANCE',
    ['ars-ambulancejob'] = 'AMBULANCE',
    ['ak47_ambulancejob'] = 'AMBULANCE',
    ['ak47-ambulancejob'] = 'AMBULANCE',
    ['rcore_ambulance'] = 'AMBULANCE',
    ['rcore-ambulance'] = 'AMBULANCE',
    ['origen_ambulance'] = 'AMBULANCE',
    ['origen-ambulance'] = 'AMBULANCE',
    ['hospital'] = 'AMBULANCE',
    ['pillbox'] = 'AMBULANCE',
    ['medical'] = 'AMBULANCE',
    ['ambulance'] = 'AMBULANCE',
    ['ems'] = 'AMBULANCE',
    ['firejob'] = 'AMBULANCE',
    ['fire-job'] = 'AMBULANCE',
    ['fire_department'] = 'AMBULANCE',
    ['fire-department'] = 'AMBULANCE',
    ['lsfd'] = 'AMBULANCE',
    ['qb-hospital'] = 'AMBULANCE',
    ['qb_hospital'] = 'AMBULANCE',
    ['qbx_medical'] = 'AMBULANCE',
    ['pickle_medical'] = 'AMBULANCE',
    ['pickle-medical'] = 'AMBULANCE',
    ['revive'] = 'AMBULANCE',
    ['deathscreen'] = 'AMBULANCE',
    ['death-screen'] = 'AMBULANCE',
    ['bodybag'] = 'AMBULANCE',
    ['wheelchair'] = 'AMBULANCE',
    ['stretcher'] = 'AMBULANCE',
    ['pharmacy'] = 'AMBULANCE',
    ['medicalrecords'] = 'AMBULANCE',
    ['medical-records'] = 'AMBULANCE',
    ['ems-mdt'] = 'AMBULANCE',
    ['ems_mdt'] = 'AMBULANCE',

    -- JOBS BUSINESSES AND ACTIVITIES
    ['qb-management'] = 'JOB SYSTEM',
    ['qb_management'] = 'JOB SYSTEM',
    ['qbx_management'] = 'JOB SYSTEM',
    ['bossmenu'] = 'JOB SYSTEM',
    ['boss-menu'] = 'JOB SYSTEM',
    ['wasabi_bossmenu'] = 'JOB SYSTEM',
    ['wasabi-bossmenu'] = 'JOB SYSTEM',
    ['renewed-banking'] = 'BANKING',
    ['renewed_banking'] = 'BANKING',
    ['qb-bossmenu'] = 'JOB SYSTEM',
    ['qb_bossmenu'] = 'JOB SYSTEM',
    ['qb-cityhall'] = 'JOB SYSTEM',
    ['qb_cityhall'] = 'JOB SYSTEM',
    ['qbx_cityhall'] = 'JOB SYSTEM',
    ['jobcenter'] = 'JOB SYSTEM',
    ['job-center'] = 'JOB SYSTEM',
    ['jobs-center'] = 'JOB SYSTEM',
    ['jobs_center'] = 'JOB SYSTEM',
    ['qb-taxijob'] = 'JOB SYSTEM',
    ['qb_taxijob'] = 'JOB SYSTEM',
    ['taxi'] = 'JOB SYSTEM',
    ['taxijob'] = 'JOB SYSTEM',
    ['smarttaxi'] = 'JOB SYSTEM',
    ['qb-truckerjob'] = 'JOB SYSTEM',
    ['qb_truckerjob'] = 'JOB SYSTEM',
    ['esx_truckerjob'] = 'JOB SYSTEM',
    ['truckerjob'] = 'JOB SYSTEM',
    ['trucking'] = 'JOB SYSTEM',
    ['truck-logistics'] = 'JOB SYSTEM',
    ['truck_logistics'] = 'JOB SYSTEM',
    ['qb-busjob'] = 'JOB SYSTEM',
    ['qb_busjob'] = 'JOB SYSTEM',
    ['busjob'] = 'JOB SYSTEM',
    ['bus-job'] = 'JOB SYSTEM',
    ['qb-garbagejob'] = 'JOB SYSTEM',
    ['qb_garbagejob'] = 'JOB SYSTEM',
    ['garbagejob'] = 'JOB SYSTEM',
    ['garbage-job'] = 'JOB SYSTEM',
    ['qb-recyclejob'] = 'JOB SYSTEM',
    ['qb_recyclejob'] = 'JOB SYSTEM',
    ['recyclejob'] = 'JOB SYSTEM',
    ['recycle-job'] = 'JOB SYSTEM',
    ['qb-towjob'] = 'JOB SYSTEM',
    ['qb_towjob'] = 'JOB SYSTEM',
    ['towjob'] = 'JOB SYSTEM',
    ['tow-job'] = 'JOB SYSTEM',
    ['qb-vineyard'] = 'JOB SYSTEM',
    ['qb_vineyard'] = 'JOB SYSTEM',
    ['vineyard'] = 'JOB SYSTEM',
    ['winery'] = 'JOB SYSTEM',
    ['qb-hotdogjob'] = 'JOB SYSTEM',
    ['qb_hotdogjob'] = 'JOB SYSTEM',
    ['hotdogjob'] = 'JOB SYSTEM',
    ['hotdog-job'] = 'JOB SYSTEM',
    ['qb-newsjob'] = 'JOB SYSTEM',
    ['qb_newsjob'] = 'JOB SYSTEM',
    ['newsjob'] = 'JOB SYSTEM',
    ['news-job'] = 'JOB SYSTEM',
    ['qb-realestatejob'] = 'JOB SYSTEM',
    ['qb_realestatejob'] = 'JOB SYSTEM',
    ['realestate'] = 'JOB SYSTEM',
    ['real-estate'] = 'JOB SYSTEM',
    ['realestatejob'] = 'JOB SYSTEM',
    ['realestate-job'] = 'JOB SYSTEM',
    ['qb-weed'] = 'JOB SYSTEM',
    ['qb_weed'] = 'JOB SYSTEM',
    ['farming'] = 'JOB SYSTEM',
    ['farmjob'] = 'JOB SYSTEM',
    ['fishing'] = 'JOB SYSTEM',
    ['boii-fishing'] = 'JOB SYSTEM',
    ['boii_fishing'] = 'JOB SYSTEM',
    ['pickle_farming'] = 'JOB SYSTEM',
    ['pickle-farming'] = 'JOB SYSTEM',
    ['mining'] = 'JOB SYSTEM',
    ['miningjob'] = 'JOB SYSTEM',
    ['mining-job'] = 'JOB SYSTEM',
    ['lumberjack'] = 'JOB SYSTEM',
    ['lumberjackjob'] = 'JOB SYSTEM',
    ['lumberjack-job'] = 'JOB SYSTEM',
    ['hunting'] = 'JOB SYSTEM',
    ['huntingjob'] = 'JOB SYSTEM',
    ['hunting-job'] = 'JOB SYSTEM',
    ['diving'] = 'JOB SYSTEM',
    ['scuba'] = 'JOB SYSTEM',
    ['salvage'] = 'JOB SYSTEM',
    ['salvagejob'] = 'JOB SYSTEM',
    ['delivery'] = 'JOB SYSTEM',
    ['deliveryjob'] = 'JOB SYSTEM',
    ['delivery-job'] = 'JOB SYSTEM',
    ['postal'] = 'JOB SYSTEM',
    ['gopostal'] = 'JOB SYSTEM',
    ['go-postal'] = 'JOB SYSTEM',
    ['burgershot'] = 'JOB SYSTEM',
    ['uwu_cafe'] = 'JOB SYSTEM',
    ['uwu-cafe'] = 'JOB SYSTEM',
    ['beanmachine'] = 'JOB SYSTEM',
    ['bean-machine'] = 'JOB SYSTEM',
    ['pizzathis'] = 'JOB SYSTEM',
    ['pizza-this'] = 'JOB SYSTEM',
    ['bahama'] = 'JOB SYSTEM',
    ['bahama-mamas'] = 'JOB SYSTEM',
    ['vanillaunicorn'] = 'JOB SYSTEM',
    ['vanilla-unicorn'] = 'JOB SYSTEM',
    ['tequilala'] = 'JOB SYSTEM',
    ['tequi-la-la'] = 'JOB SYSTEM',
    ['mechanic'] = 'JOB SYSTEM',
    ['bennys'] = 'JOB SYSTEM',
    ['tunerjob'] = 'JOB SYSTEM',
    ['tuner-job'] = 'JOB SYSTEM',
    ['whitewidow'] = 'JOB SYSTEM',
    ['white-widow'] = 'JOB SYSTEM',
    ['businesses'] = 'JOB SYSTEM',
    ['business-system'] = 'JOB SYSTEM',
    ['business_system'] = 'JOB SYSTEM',

    -- HOUSING PROPERTIES AND STORAGE
    ['qb-houses'] = 'HOUSING',
    ['qb_houses'] = 'HOUSING',
    ['qbx_properties'] = 'HOUSING',
    ['ps-housing'] = 'HOUSING',
    ['ps_housing'] = 'HOUSING',
    ['bcs_housing'] = 'HOUSING',
    ['bcs-housing'] = 'HOUSING',
    ['loaf_housing'] = 'HOUSING',
    ['loaf-housing'] = 'HOUSING',
    ['qs-housing'] = 'HOUSING',
    ['qs_housing'] = 'HOUSING',
    ['codem-house'] = 'HOUSING',
    ['codem_house'] = 'HOUSING',
    ['origen_housing'] = 'HOUSING',
    ['origen-housing'] = 'HOUSING',
    ['nolag-properties'] = 'HOUSING',
    ['nolag_properties'] = 'HOUSING',
    ['snipe-apartments'] = 'HOUSING',
    ['snipe_apartments'] = 'HOUSING',
    ['qb-apartments'] = 'HOUSING',
    ['qb_apartments'] = 'HOUSING',
    ['qbx_apartments'] = 'HOUSING',
    ['apartments'] = 'HOUSING',
    ['housing'] = 'HOUSING',
    ['properties'] = 'HOUSING',
    ['property'] = 'HOUSING',
    ['realestatecreator'] = 'HOUSING',
    ['realestate-creator'] = 'HOUSING',
    ['shells'] = 'HOUSING',
    ['shells_creator'] = 'HOUSING',
    ['shell_creator'] = 'HOUSING',
    ['k4mb1shells'] = 'HOUSING',
    ['k4mb1-shells'] = 'HOUSING',
    ['storage'] = 'HOUSING',
    ['self-storage'] = 'HOUSING',
    ['self_storage'] = 'HOUSING',
    ['motels'] = 'HOUSING',
    ['motel'] = 'HOUSING',
    ['motelsystem'] = 'HOUSING',
    ['motel-system'] = 'HOUSING',
    ['loaf_motel'] = 'HOUSING',
    ['loaf-motel'] = 'HOUSING',

    -- BANKING ECONOMY AND SHOPS
    ['qb-banking'] = 'BANKING',
    ['qb_banking'] = 'BANKING',
    ['qbx_banking'] = 'BANKING',
    ['esx_banking'] = 'BANKING',
    ['okokBanking'] = 'BANKING',
    ['okok-banking'] = 'BANKING',
    ['tgg-banking'] = 'BANKING',
    ['tgg_banking'] = 'BANKING',
    ['fd_banking'] = 'BANKING',
    ['fd-banking'] = 'BANKING',
    ['banking'] = 'BANKING',
    ['atm'] = 'ECONOMY',
    ['atms'] = 'ECONOMY',
    ['qb_shops'] = 'ECONOMY',
    ['qbx_shops'] = 'ECONOMY',
    ['ox_inventory_shops'] = 'ECONOMY',
    ['shops'] = 'ECONOMY',
    ['shop'] = 'ECONOMY',
    ['stores'] = 'ECONOMY',
    ['marketplace'] = 'ECONOMY',
    ['player-market'] = 'ECONOMY',
    ['player_market'] = 'ECONOMY',
    ['billing'] = 'ECONOMY',
    ['okokBilling'] = 'ECONOMY',
    ['okok-billing'] = 'ECONOMY',
    ['qb-invoices'] = 'ECONOMY',
    ['qb_invoices'] = 'ECONOMY',
    ['invoices'] = 'ECONOMY',
    ['taxes'] = 'ECONOMY',
    ['tax-system'] = 'ECONOMY',
    ['tax_system'] = 'ECONOMY',
    ['crypto'] = 'ECONOMY',
    ['qb-crypto'] = 'ECONOMY',
    ['qb_crypto'] = 'ECONOMY',
    ['casino'] = 'ECONOMY',
    ['qb-casino'] = 'ECONOMY',
    ['qb_casino'] = 'ECONOMY',
    ['casinoheist'] = 'ECONOMY',
    ['casino-heist'] = 'ECONOMY',
    ['blackjack'] = 'ECONOMY',
    ['roulette'] = 'ECONOMY',
    ['slots'] = 'ECONOMY',
    ['lottery'] = 'ECONOMY',
    ['scratchcards'] = 'ECONOMY',
    ['scratch-cards'] = 'ECONOMY',
    ['pawnshop'] = 'ECONOMY',
    ['pawn-shop'] = 'ECONOMY',
    ['qb-pawnshop'] = 'ECONOMY',
    ['qb_pawnshop'] = 'ECONOMY',
    ['auction'] = 'ECONOMY',
    ['auctions'] = 'ECONOMY',
    ['vehicle-auction'] = 'ECONOMY',
    ['vehicle_auction'] = 'ECONOMY',

    -- ADMIN SECURITY LOGGING AND QUEUE
    ['qb-adminmenu'] = 'ADMINISTRATION',
    ['qb_adminmenu'] = 'ADMINISTRATION',
    ['qbx_adminmenu'] = 'ADMINISTRATION',
    ['esx_adminplus'] = 'ADMINISTRATION',
    ['esx_admin'] = 'ADMINISTRATION',
    ['txAdmin'] = 'ADMINISTRATION',
    ['txadmin'] = 'ADMINISTRATION',
    ['vMenu'] = 'ADMINISTRATION',
    ['vmenu'] = 'ADMINISTRATION',
    ['easyadmin'] = 'ADMINISTRATION',
    ['EasyAdmin'] = 'ADMINISTRATION',
    ['menu_admin'] = 'ADMINISTRATION',
    ['adminmenu'] = 'ADMINISTRATION',
    ['admin-menu'] = 'ADMINISTRATION',
    ['staffmenu'] = 'ADMINISTRATION',
    ['staff-menu'] = 'ADMINISTRATION',
    ['snipe-menu'] = 'ADMINISTRATION',
    ['snipe_menu'] = 'ADMINISTRATION',
    ['wasabi_adminmenu'] = 'ADMINISTRATION',
    ['wasabi-adminmenu'] = 'ADMINISTRATION',
    ['codem-adminmenu'] = 'ADMINISTRATION',
    ['codem_adminmenu'] = 'ADMINISTRATION',
    ['origen_admin'] = 'ADMINISTRATION',
    ['origen-admin'] = 'ADMINISTRATION',
    ['anticheat'] = 'ADMINISTRATION',
    ['anti-cheat'] = 'ADMINISTRATION',
    ['fiveguard'] = 'ADMINISTRATION',
    ['FiveGuard'] = 'ADMINISTRATION',
    ['electron-anticheat'] = 'ADMINISTRATION',
    ['electron_anticheat'] = 'ADMINISTRATION',
    ['waveshield'] = 'ADMINISTRATION',
    ['WaveShield'] = 'ADMINISTRATION',
    ['lynx'] = 'ADMINISTRATION',
    ['lynxmenu'] = 'ADMINISTRATION',
    ['choco-anticheat'] = 'ADMINISTRATION',
    ['choco_anticheat'] = 'ADMINISTRATION',
    ['screenshot-anticheat'] = 'ADMINISTRATION',
    ['screenshot_anticheat'] = 'ADMINISTRATION',
    ['discordroles'] = 'ADMINISTRATION',
    ['discord_roles'] = 'ADMINISTRATION',
    ['Badger_Discord_API'] = 'ADMINISTRATION',
    ['Badger_Discord_Chat_Roles'] = 'ADMINISTRATION',
    ['DiscordAcePerms'] = 'ADMINISTRATION',
    ['discord_perms'] = 'ADMINISTRATION',
    ['discordlogs'] = 'ADMINISTRATION',
    ['discord-logs'] = 'ADMINISTRATION',
    ['logs'] = 'ADMINISTRATION',
    ['server-logs'] = 'ADMINISTRATION',
    ['server_logs'] = 'ADMINISTRATION',
    ['webhooks'] = 'ADMINISTRATION',
    ['queue'] = 'ADMINISTRATION',
    ['connectqueue'] = 'ADMINISTRATION',
    ['connect-queue'] = 'ADMINISTRATION',
    ['qb-queue'] = 'ADMINISTRATION',
    ['qb_queue'] = 'ADMINISTRATION',
    ['np-queue'] = 'ADMINISTRATION',
    ['np_queue'] = 'ADMINISTRATION',
    ['whitelist'] = 'ADMINISTRATION',
    ['allowlist'] = 'ADMINISTRATION',
    ['maintenance'] = 'ADMINISTRATION',
    ['server-status'] = 'ADMINISTRATION',
    ['server_status'] = 'ADMINISTRATION',
    ['uptime'] = 'ADMINISTRATION',
    ['resource-monitor'] = 'ADMINISTRATION',
    ['resource_monitor'] = 'ADMINISTRATION',
    ['performance-monitor'] = 'ADMINISTRATION',
    ['performance_monitor'] = 'ADMINISTRATION',
    ['playerlist'] = 'ADMINISTRATION',
    ['scoreboard'] = 'ADMINISTRATION',
    ['qb-scoreboard'] = 'ADMINISTRATION',
    ['qb_scoreboard'] = 'ADMINISTRATION',
    ['reports'] = 'ADMINISTRATION',
    ['report-system'] = 'ADMINISTRATION',
    ['report_system'] = 'ADMINISTRATION',
    ['tickets'] = 'ADMINISTRATION',
    ['ticket-system'] = 'ADMINISTRATION',
    ['ticket_system'] = 'ADMINISTRATION',

    -- CRIME DRUGS GANGS AND ROBBERIES
    ['qb-bankrobbery'] = 'CRIME SYSTEM',
    ['qb_bankrobbery'] = 'CRIME SYSTEM',
    ['qbx_bankrobbery'] = 'CRIME SYSTEM',
    ['esx_holdupbank'] = 'CRIME SYSTEM',
    ['bankrobbery'] = 'CRIME SYSTEM',
    ['bank-robbery'] = 'CRIME SYSTEM',
    ['fleeca'] = 'CRIME SYSTEM',
    ['fleeca-robbery'] = 'CRIME SYSTEM',
    ['pacific'] = 'CRIME SYSTEM',
    ['pacific-bank'] = 'CRIME SYSTEM',
    ['paleto'] = 'CRIME SYSTEM',
    ['paleto-bank'] = 'CRIME SYSTEM',
    ['qb-storerobbery'] = 'CRIME SYSTEM',
    ['qb_storerobbery'] = 'CRIME SYSTEM',
    ['store-robbery'] = 'CRIME SYSTEM',
    ['store_robbery'] = 'CRIME SYSTEM',
    ['shoprobbery'] = 'CRIME SYSTEM',
    ['shop-robbery'] = 'CRIME SYSTEM',
    ['qb-jewelery'] = 'CRIME SYSTEM',
    ['qb_jewelery'] = 'CRIME SYSTEM',
    ['jewelery'] = 'CRIME SYSTEM',
    ['jewelry'] = 'CRIME SYSTEM',
    ['jewelry-robbery'] = 'CRIME SYSTEM',
    ['jewelry_robbery'] = 'CRIME SYSTEM',
    ['qb-truckrobbery'] = 'CRIME SYSTEM',
    ['qb_truckrobbery'] = 'CRIME SYSTEM',
    ['truck-robbery'] = 'CRIME SYSTEM',
    ['truck_robbery'] = 'CRIME SYSTEM',
    ['atmrobbery'] = 'CRIME SYSTEM',
    ['atm-robbery'] = 'CRIME SYSTEM',
    ['house-robbery'] = 'CRIME SYSTEM',
    ['house_robbery'] = 'CRIME SYSTEM',
    ['qb-houserobbery'] = 'CRIME SYSTEM',
    ['qb_houserobbery'] = 'CRIME SYSTEM',
    ['vehicle-robbery'] = 'CRIME SYSTEM',
    ['vehicle_robbery'] = 'CRIME SYSTEM',
    ['carboosting'] = 'CRIME SYSTEM',
    ['car-boosting'] = 'CRIME SYSTEM',
    ['qb-boosting'] = 'CRIME SYSTEM',
    ['qb_boosting'] = 'CRIME SYSTEM',
    ['rahe-boosting'] = 'CRIME SYSTEM',
    ['rahe_boosting'] = 'CRIME SYSTEM',
    ['boosting'] = 'CRIME SYSTEM',
    ['chopshop'] = 'CRIME SYSTEM',
    ['chop-shop'] = 'CRIME SYSTEM',
    ['qb-chopshop'] = 'CRIME SYSTEM',
    ['qb_chopshop'] = 'CRIME SYSTEM',
    ['drug-system'] = 'CRIME SYSTEM',
    ['drug_system'] = 'CRIME SYSTEM',
    ['drugs'] = 'CRIME SYSTEM',
    ['qb-drugs'] = 'CRIME SYSTEM',
    ['qb_drugs'] = 'CRIME SYSTEM',
    ['weed'] = 'CRIME SYSTEM',
    ['coke'] = 'CRIME SYSTEM',
    ['cocaine'] = 'CRIME SYSTEM',
    ['meth'] = 'CRIME SYSTEM',
    ['heroin'] = 'CRIME SYSTEM',
    ['opium'] = 'CRIME SYSTEM',
    ['cornerselling'] = 'CRIME SYSTEM',
    ['corner-selling'] = 'CRIME SYSTEM',
    ['drug-dealing'] = 'CRIME SYSTEM',
    ['drug_dealing'] = 'CRIME SYSTEM',
    ['gangs'] = 'CRIME SYSTEM',
    ['qb-gangs'] = 'CRIME SYSTEM',
    ['qb_gangs'] = 'CRIME SYSTEM',
    ['gang-system'] = 'CRIME SYSTEM',
    ['gang_system'] = 'CRIME SYSTEM',
    ['territories'] = 'CRIME SYSTEM',
    ['gang-territories'] = 'CRIME SYSTEM',
    ['gang_territories'] = 'CRIME SYSTEM',
    ['turf'] = 'CRIME SYSTEM',
    ['turfs'] = 'CRIME SYSTEM',
    ['blackmarket'] = 'CRIME SYSTEM',
    ['black-market'] = 'CRIME SYSTEM',
    ['black_market'] = 'CRIME SYSTEM',
    ['weapondealer'] = 'CRIME SYSTEM',
    ['weapon-dealer'] = 'CRIME SYSTEM',
    ['weapon_dealer'] = 'CRIME SYSTEM',
    ['moneywash'] = 'CRIME SYSTEM',
    ['money-wash'] = 'CRIME SYSTEM',
    ['money_wash'] = 'CRIME SYSTEM',
    ['laundering'] = 'CRIME SYSTEM',
    ['laundering-system'] = 'CRIME SYSTEM',
    ['laundering_system'] = 'CRIME SYSTEM',
    ['illegal-racing'] = 'CRIME SYSTEM',
    ['illegal_racing'] = 'CRIME SYSTEM',
    ['streetraces'] = 'CRIME SYSTEM',
    ['street-races'] = 'CRIME SYSTEM',
    ['qb-lapraces'] = 'CRIME SYSTEM',
    ['qb_lapraces'] = 'CRIME SYSTEM',
    ['racing'] = 'CRIME SYSTEM',
    ['race-system'] = 'CRIME SYSTEM',
    ['race_system'] = 'CRIME SYSTEM',

    -- CRAFTING ITEMS AND WORLD SYSTEMS
    ['crafting'] = 'WORLD SYSTEM',
    ['crafting-system'] = 'WORLD SYSTEM',
    ['crafting_system'] = 'WORLD SYSTEM',
    ['ox_crafting'] = 'WORLD SYSTEM',
    ['qb-crafting'] = 'WORLD SYSTEM',
    ['qb_crafting'] = 'WORLD SYSTEM',
    ['jim-crafting'] = 'WORLD SYSTEM',
    ['jim_crafting'] = 'WORLD SYSTEM',
    ['shops_creator'] = 'WORLD SYSTEM',
    ['jobs_creator'] = 'WORLD SYSTEM',
    ['missions_creator'] = 'WORLD SYSTEM',
    ['quest-system'] = 'WORLD SYSTEM',
    ['quest_system'] = 'WORLD SYSTEM',
    ['dailyrewards'] = 'WORLD SYSTEM',
    ['daily-rewards'] = 'WORLD SYSTEM',
    ['daily_rewards'] = 'WORLD SYSTEM',
    ['rewards'] = 'WORLD SYSTEM',
    ['battlepass'] = 'WORLD SYSTEM',
    ['battle-pass'] = 'WORLD SYSTEM',
    ['battle_pass'] = 'WORLD SYSTEM',
    ['skills'] = 'WORLD SYSTEM',
    ['skill-system'] = 'WORLD SYSTEM',
    ['skill_system'] = 'WORLD SYSTEM',
    ['xp-system'] = 'WORLD SYSTEM',
    ['xp_system'] = 'WORLD SYSTEM',
    ['levels'] = 'WORLD SYSTEM',
    ['reputation'] = 'WORLD SYSTEM',
    ['reputation-system'] = 'WORLD SYSTEM',
    ['reputation_system'] = 'WORLD SYSTEM',
    ['weather-sync'] = 'WORLD SYSTEM',
    ['weather_sync'] = 'WORLD SYSTEM',
    ['qb-weathersync'] = 'WORLD SYSTEM',
    ['qb_weathersync'] = 'WORLD SYSTEM',
    ['vSync'] = 'WORLD SYSTEM',
    ['vsync'] = 'WORLD SYSTEM',
    ['cd_easytime'] = 'WORLD SYSTEM',
    ['cd-easytime'] = 'WORLD SYSTEM',
    ['renewed-weathersync'] = 'WORLD SYSTEM',
    ['renewed_weathersync'] = 'WORLD SYSTEM',
    ['time-sync'] = 'WORLD SYSTEM',
    ['time_sync'] = 'WORLD SYSTEM',
    ['density'] = 'WORLD SYSTEM',
    ['npc-density'] = 'WORLD SYSTEM',
    ['npc_density'] = 'WORLD SYSTEM',
    ['traffic'] = 'WORLD SYSTEM',
    ['traffic-manager'] = 'WORLD SYSTEM',
    ['traffic_manager'] = 'WORLD SYSTEM',
    ['safezone'] = 'WORLD SYSTEM',
    ['safe-zone'] = 'WORLD SYSTEM',
    ['safe_zone'] = 'WORLD SYSTEM',
    ['zones'] = 'WORLD SYSTEM',
    ['zone-manager'] = 'WORLD SYSTEM',
    ['zone_manager'] = 'WORLD SYSTEM',
    ['doors'] = 'WORLD SYSTEM',
    ['doorlock'] = 'WORLD SYSTEM',
    ['door-lock'] = 'WORLD SYSTEM',
    ['ox_doorlock'] = 'WORLD SYSTEM',
    ['qb-doorlock'] = 'WORLD SYSTEM',
    ['qb_doorlock'] = 'WORLD SYSTEM',
    ['nui_doorlock'] = 'WORLD SYSTEM',
    ['nui-doorlock'] = 'WORLD SYSTEM',
    ['cd_doorlock'] = 'WORLD SYSTEM',
    ['cd-doorlock'] = 'WORLD SYSTEM',
    ['housing-doors'] = 'WORLD SYSTEM',
    ['elevators'] = 'WORLD SYSTEM',
    ['elevator'] = 'WORLD SYSTEM',
    ['teleports'] = 'WORLD SYSTEM',
    ['teleport-system'] = 'WORLD SYSTEM',
    ['teleport_system'] = 'WORLD SYSTEM',
    ['evidence-board'] = 'WORLD SYSTEM',
    ['evidence_board'] = 'WORLD SYSTEM',
    ['wanted-posters'] = 'WORLD SYSTEM',
    ['wanted_posters'] = 'WORLD SYSTEM',
    ['flyers'] = 'WORLD SYSTEM',
    ['billboards'] = 'WORLD SYSTEM',
    ['dui'] = 'WORLD SYSTEM',
    ['dui-system'] = 'WORLD SYSTEM',
    ['dui_system'] = 'WORLD SYSTEM',
    ['cinema'] = 'WORLD SYSTEM',
    ['tv'] = 'WORLD SYSTEM',
    ['television'] = 'WORLD SYSTEM',
    ['news-camera'] = 'WORLD SYSTEM',
    ['news_camera'] = 'WORLD SYSTEM',
    ['drone'] = 'WORLD SYSTEM',
    ['drones'] = 'WORLD SYSTEM',
    ['cctv'] = 'WORLD SYSTEM',
    ['security-cameras'] = 'WORLD SYSTEM',
    ['security_cameras'] = 'WORLD SYSTEM',
    ['binoculars'] = 'WORLD SYSTEM',
    ['nightvision'] = 'WORLD SYSTEM',
    ['thermalvision'] = 'WORLD SYSTEM',
    ['fireworks'] = 'WORLD SYSTEM',
    ['snowballs'] = 'WORLD SYSTEM',
    ['christmas'] = 'WORLD SYSTEM',
    ['halloween'] = 'WORLD SYSTEM',
    ['events'] = 'WORLD SYSTEM',
    ['event-system'] = 'WORLD SYSTEM',
    ['event_system'] = 'WORLD SYSTEM',

    -- MAPS STREAMING AND ASSETS
    ['mapdata'] = 'MAP OR ASSET',
    ['maps'] = 'MAP OR ASSET',
    ['interiors'] = 'MAP OR ASSET',
    ['mlo'] = 'MAP OR ASSET',
    ['ymap'] = 'MAP OR ASSET',
    ['stream'] = 'MAP OR ASSET',
    ['assets'] = 'MAP OR ASSET',
    ['vehicles'] = 'MAP OR ASSET',
    ['vehiclepack'] = 'MAP OR ASSET',
    ['vehicle-pack'] = 'MAP OR ASSET',
    ['clothes'] = 'MAP OR ASSET',
    ['clothing-pack'] = 'MAP OR ASSET',
    ['clothing_pack'] = 'MAP OR ASSET',
    ['weapons'] = 'MAP OR ASSET',
    ['weaponpack'] = 'MAP OR ASSET',
    ['weapon-pack'] = 'MAP OR ASSET',
    ['props'] = 'MAP OR ASSET',
    ['prop-pack'] = 'MAP OR ASSET',
    ['prop_pack'] = 'MAP OR ASSET',
    ['sounds'] = 'MAP OR ASSET',
    ['soundpack'] = 'MAP OR ASSET',
    ['sound-pack'] = 'MAP OR ASSET',
    ['loading-screen'] = 'MAP OR ASSET',
    ['loading_screen'] = 'MAP OR ASSET',
    ['loadscreen'] = 'MAP OR ASSET',
    ['spawn-map'] = 'MAP OR ASSET',
    ['spawn_map'] = 'MAP OR ASSET',
    ['gabz_mrpd'] = 'MAP OR ASSET',
    ['gabz_pillbox'] = 'MAP OR ASSET',
    ['gabz_mba'] = 'MAP OR ASSET',
    ['gabz_ammu'] = 'MAP OR ASSET',
    ['gabz_bennys'] = 'MAP OR ASSET',
    ['gabz_tuners'] = 'MAP OR ASSET',
    ['gabz_diner'] = 'MAP OR ASSET',
    ['gabz_pizzeria'] = 'MAP OR ASSET',
    ['gabz_harmony'] = 'MAP OR ASSET',
    ['gabz_paletobank'] = 'MAP OR ASSET',
    ['gabz_fleeca'] = 'MAP OR ASSET',
    ['gabz_lost'] = 'MAP OR ASSET',
    ['gabz_catcafe'] = 'MAP OR ASSET',
    ['gabz_arcade'] = 'MAP OR ASSET',
    ['gabz_vanilla'] = 'MAP OR ASSET',
    ['gabz_bahama'] = 'MAP OR ASSET',
    ['gabz_record_a'] = 'MAP OR ASSET',
    ['gabz_record_b'] = 'MAP OR ASSET',
    ['gabz_lamesapd'] = 'MAP OR ASSET',
    ['gabz_sandypd'] = 'MAP OR ASSET',
    ['gabz_prison'] = 'MAP OR ASSET',
    ['gabz_firedept'] = 'MAP OR ASSET',
    ['k4mb1'] = 'MAP OR ASSET',
    ['cfx-gabz-mapdata'] = 'MAP OR ASSET',
    ['cfx-gabz-mrpd'] = 'MAP OR ASSET',
    ['cfx-gabz-pdprops'] = 'MAP OR ASSET',
    ['cfx-gabz-pillbox'] = 'MAP OR ASSET',
    ['cfx-gabz-247'] = 'MAP OR ASSET',
    ['cfx-gabz-ottos'] = 'MAP OR ASSET',
    ['cfx-gabz-catcafe'] = 'MAP OR ASSET',
    ['cfx-gabz-pizzeria'] = 'MAP OR ASSET',

    -- Additional known FiveM resource names and common folder variants

    -- FRAMEWORK
    ['qbxcore'] = 'FRAMEWORK',
    ['es-extended'] = 'FRAMEWORK',
    ['esextended'] = 'FRAMEWORK',
    ['ox-core'] = 'FRAMEWORK',
    ['oxcore'] = 'FRAMEWORK',
    ['ND-Core'] = 'FRAMEWORK',
    ['nd-core'] = 'FRAMEWORK',
    ['NDCore'] = 'FRAMEWORK',
    ['ndcore'] = 'FRAMEWORK',
    ['renewed-core'] = 'FRAMEWORK',
    ['renewed_core'] = 'FRAMEWORK',
    ['renewedcore'] = 'FRAMEWORK',
    ['creative-framework'] = 'FRAMEWORK',
    ['creative_framework'] = 'FRAMEWORK',
    ['creativeframework'] = 'FRAMEWORK',
    ['av_core'] = 'FRAMEWORK',
    ['av-core'] = 'FRAMEWORK',
    ['avcore'] = 'FRAMEWORK',

    -- CORE LIBRARY
    ['ox-lib'] = 'CORE LIBRARY',
    ['oxlib'] = 'CORE LIBRARY',
    ['mysql_async'] = 'CORE LIBRARY',
    ['mysqlasync'] = 'CORE LIBRARY',
    ['screenshot_basic'] = 'CORE LIBRARY',
    ['screenshotbasic'] = 'CORE LIBRARY',
    ['interact_sound'] = 'CORE LIBRARY',
    ['interactsound'] = 'CORE LIBRARY',
    ['polyzone'] = 'CORE LIBRARY',
    ['nativeui'] = 'CORE LIBRARY',
    ['rageui'] = 'CORE LIBRARY',
    ['WarMenu'] = 'CORE LIBRARY',
    ['nh_context'] = 'CORE LIBRARY',
    ['nhcontext'] = 'CORE LIBRARY',
    ['nh-keyboard'] = 'CORE LIBRARY',
    ['nh_keyboard'] = 'CORE LIBRARY',
    ['nhkeyboard'] = 'CORE LIBRARY',
    ['qb_menu'] = 'CORE LIBRARY',
    ['qbmenu'] = 'CORE LIBRARY',
    ['qb_input'] = 'CORE LIBRARY',
    ['qbinput'] = 'CORE LIBRARY',
    ['qbx_menu'] = 'CORE LIBRARY',
    ['qbx-menu'] = 'CORE LIBRARY',
    ['qbxmenu'] = 'CORE LIBRARY',
    ['qbx_input'] = 'CORE LIBRARY',
    ['qbx-input'] = 'CORE LIBRARY',
    ['qbxinput'] = 'CORE LIBRARY',
    ['esx-menu-default'] = 'CORE LIBRARY',
    ['esxmenudefault'] = 'CORE LIBRARY',
    ['esx-menu-dialog'] = 'CORE LIBRARY',
    ['esxmenudialog'] = 'CORE LIBRARY',
    ['esx-menu-list'] = 'CORE LIBRARY',
    ['esxmenulist'] = 'CORE LIBRARY',
    ['fivem-js'] = 'CORE LIBRARY',
    ['fivem_js'] = 'CORE LIBRARY',
    ['fivemjs'] = 'CORE LIBRARY',
    ['utility-lib'] = 'CORE LIBRARY',
    ['utilitylib'] = 'CORE LIBRARY',
    ['zyke_lib'] = 'CORE LIBRARY',
    ['zyke-lib'] = 'CORE LIBRARY',
    ['zykelib'] = 'CORE LIBRARY',
    ['fmLib'] = 'CORE LIBRARY',
    ['fmlib'] = 'CORE LIBRARY',
    ['bridge_core'] = 'CORE LIBRARY',
    ['bridge-core'] = 'CORE LIBRARY',
    ['bridgecore'] = 'CORE LIBRARY',

    -- INVENTORY
    ['ox-inventory'] = 'INVENTORY',
    ['oxinventory'] = 'INVENTORY',
    ['qbinventory'] = 'INVENTORY',
    ['qbx_inventory'] = 'INVENTORY',
    ['qbx-inventory'] = 'INVENTORY',
    ['qbxinventory'] = 'INVENTORY',
    ['esx_inventoryhud'] = 'INVENTORY',
    ['esx-inventoryhud'] = 'INVENTORY',
    ['esxinventoryhud'] = 'INVENTORY',
    ['qsinventory'] = 'INVENTORY',
    ['origeninventory'] = 'INVENTORY',
    ['tgianninventory'] = 'INVENTORY',
    ['codeminventory'] = 'INVENTORY',
    ['coreinventory'] = 'INVENTORY',
    ['lj_inventory'] = 'INVENTORY',
    ['ljinventory'] = 'INVENTORY',
    ['ps_inventory'] = 'INVENTORY',
    ['psinventory'] = 'INVENTORY',
    ['mfinventory'] = 'INVENTORY',
    ['ak47-inventory'] = 'INVENTORY',
    ['ak47inventory'] = 'INVENTORY',
    ['chezza-inventory'] = 'INVENTORY',
    ['chezzainventory'] = 'INVENTORY',
    ['inventory-hotbar'] = 'INVENTORY',
    ['inventory_hotbar'] = 'INVENTORY',
    ['inventoryhotbar'] = 'INVENTORY',
    ['qb-traphouse'] = 'INVENTORY',
    ['qb_traphouse'] = 'INVENTORY',
    ['qbtraphouse'] = 'INVENTORY',
    ['qb-stash'] = 'INVENTORY',
    ['qb_stash'] = 'INVENTORY',
    ['qbstash'] = 'INVENTORY',
    ['qbx_stash'] = 'INVENTORY',
    ['qbx-stash'] = 'INVENTORY',
    ['qbxstash'] = 'INVENTORY',
    ['esx-addoninventory'] = 'INVENTORY',
    ['esxaddoninventory'] = 'INVENTORY',
    ['esx-datastore'] = 'INVENTORY',
    ['esxdatastore'] = 'INVENTORY',
    ['esx-addonaccount'] = 'INVENTORY',
    ['esxaddonaccount'] = 'INVENTORY',
    ['jprinventory'] = 'INVENTORY',

    -- PHONE
    ['lbphone'] = 'PHONE',
    ['lbtablet'] = 'PHONE',
    ['qbphone'] = 'PHONE',
    ['qbx_phone'] = 'PHONE',
    ['qbx-phone'] = 'PHONE',
    ['qbxphone'] = 'PHONE',
    ['qssmartphone'] = 'PHONE',
    ['qs_smartphone_pro'] = 'PHONE',
    ['qssmartphonepro'] = 'PHONE',
    ['highphone'] = 'PHONE',
    ['yflipphone'] = 'PHONE',
    ['okokphone'] = 'PHONE',
    ['okok-phone'] = 'PHONE',
    ['okok_phone'] = 'PHONE',
    ['origen_phone'] = 'PHONE',
    ['origen-phone'] = 'PHONE',
    ['origenphone'] = 'PHONE',
    ['codem-phone'] = 'PHONE',
    ['codem_phone'] = 'PHONE',
    ['codemphone'] = 'PHONE',
    ['rahephone'] = 'PHONE',
    ['snappyphone'] = 'PHONE',
    ['dphone'] = 'PHONE',
    ['renewedphone'] = 'PHONE',
    ['qb-phone-new'] = 'PHONE',
    ['qb_phone_new'] = 'PHONE',
    ['qbphonenew'] = 'PHONE',
    ['esx-phone'] = 'PHONE',
    ['esxphone'] = 'PHONE',
    ['esx_addons_gcphone'] = 'PHONE',
    ['esx-addons-gcphone'] = 'PHONE',
    ['esxaddonsgcphone'] = 'PHONE',
    ['gcphone-v3'] = 'PHONE',
    ['gcphone_v3'] = 'PHONE',
    ['gcphonev3'] = 'PHONE',
    ['mumble-phone'] = 'PHONE',
    ['mumble_phone'] = 'PHONE',
    ['mumblephone'] = 'PHONE',
    ['phone_reminder'] = 'PHONE',
    ['phone-reminder'] = 'PHONE',
    ['phonereminder'] = 'PHONE',

    -- VOICE CHAT
    ['pmavoice'] = 'VOICE CHAT',
    ['mumblevoip'] = 'VOICE CHAT',
    ['tokovoip'] = 'VOICE CHAT',
    ['rpradio'] = 'VOICE CHAT',
    ['qbradio'] = 'VOICE CHAT',
    ['qbx_radio'] = 'VOICE CHAT',
    ['qbx-radio'] = 'VOICE CHAT',
    ['qbxradio'] = 'VOICE CHAT',
    ['qsradio'] = 'VOICE CHAT',
    ['wasabi-radio'] = 'VOICE CHAT',
    ['wasabiradio'] = 'VOICE CHAT',
    ['scully_radio'] = 'VOICE CHAT',
    ['scully-radio'] = 'VOICE CHAT',
    ['scullyradio'] = 'VOICE CHAT',
    ['radiolist'] = 'VOICE CHAT',
    ['lbradio'] = 'VOICE CHAT',
    ['renewed-radio'] = 'VOICE CHAT',
    ['renewed_radio'] = 'VOICE CHAT',
    ['renewedradio'] = 'VOICE CHAT',
    ['codem-radio'] = 'VOICE CHAT',
    ['codem_radio'] = 'VOICE CHAT',
    ['codemradio'] = 'VOICE CHAT',

    -- INTERACTION SYSTEM
    ['ox-target'] = 'INTERACTION SYSTEM',
    ['oxtarget'] = 'INTERACTION SYSTEM',
    ['qbtarget'] = 'INTERACTION SYSTEM',
    ['qbx_target'] = 'INTERACTION SYSTEM',
    ['qbx-target'] = 'INTERACTION SYSTEM',
    ['qbxtarget'] = 'INTERACTION SYSTEM',
    ['bttarget'] = 'INTERACTION SYSTEM',
    ['sleeplessinteract'] = 'INTERACTION SYSTEM',
    ['interact-v2'] = 'INTERACTION SYSTEM',
    ['interact_v2'] = 'INTERACTION SYSTEM',
    ['interactv2'] = 'INTERACTION SYSTEM',
    ['metatarget'] = 'INTERACTION SYSTEM',
    ['is_interaction'] = 'INTERACTION SYSTEM',
    ['is-interaction'] = 'INTERACTION SYSTEM',
    ['isinteraction'] = 'INTERACTION SYSTEM',
    ['jim-interact'] = 'INTERACTION SYSTEM',
    ['jim_interact'] = 'INTERACTION SYSTEM',
    ['jiminteract'] = 'INTERACTION SYSTEM',
    ['snipe-interact'] = 'INTERACTION SYSTEM',
    ['snipe_interact'] = 'INTERACTION SYSTEM',
    ['snipeinteract'] = 'INTERACTION SYSTEM',
    ['drawtext-ui'] = 'INTERACTION SYSTEM',
    ['drawtext_ui'] = 'INTERACTION SYSTEM',
    ['drawtextui'] = 'INTERACTION SYSTEM',
    ['qb_drawtext'] = 'INTERACTION SYSTEM',
    ['qbdrawtext'] = 'INTERACTION SYSTEM',
    ['qbx_drawtext'] = 'INTERACTION SYSTEM',
    ['qbx-drawtext'] = 'INTERACTION SYSTEM',
    ['qbxdrawtext'] = 'INTERACTION SYSTEM',
    ['okoktextui'] = 'INTERACTION SYSTEM',
    ['okok-textui'] = 'INTERACTION SYSTEM',
    ['okok_textui'] = 'INTERACTION SYSTEM',
    ['wasabi_textui'] = 'INTERACTION SYSTEM',
    ['wasabi-textui'] = 'INTERACTION SYSTEM',
    ['wasabitextui'] = 'INTERACTION SYSTEM',
    ['origen_textui'] = 'INTERACTION SYSTEM',
    ['origen-textui'] = 'INTERACTION SYSTEM',
    ['origentextui'] = 'INTERACTION SYSTEM',

    -- APPEARANCE
    ['illeniumappearance'] = 'APPEARANCE',
    ['fivemappearance'] = 'APPEARANCE',
    ['qbclothing'] = 'APPEARANCE',
    ['qbx_clothing'] = 'APPEARANCE',
    ['qbx-clothing'] = 'APPEARANCE',
    ['qbxclothing'] = 'APPEARANCE',
    ['esx-skin'] = 'APPEARANCE',
    ['esxskin'] = 'APPEARANCE',
    ['wasabi_appearance'] = 'APPEARANCE',
    ['wasabiappearance'] = 'APPEARANCE',
    ['crm-appearance'] = 'APPEARANCE',
    ['crm_appearance'] = 'APPEARANCE',
    ['crmappearance'] = 'APPEARANCE',
    ['codemappearance'] = 'APPEARANCE',
    ['tgiannclothing'] = 'APPEARANCE',
    ['rcoreclothing'] = 'APPEARANCE',
    ['origenclothing'] = 'APPEARANCE',
    ['qb-barbershop'] = 'APPEARANCE',
    ['qb_barbershop'] = 'APPEARANCE',
    ['qbbarbershop'] = 'APPEARANCE',
    ['qbx_barbershop'] = 'APPEARANCE',
    ['qbx-barbershop'] = 'APPEARANCE',
    ['qbxbarbershop'] = 'APPEARANCE',
    ['esx-barbershop'] = 'APPEARANCE',
    ['esxbarbershop'] = 'APPEARANCE',
    ['qb_tattooshop'] = 'APPEARANCE',
    ['qbtattooshop'] = 'APPEARANCE',
    ['qbx_tattooshop'] = 'APPEARANCE',
    ['qbx-tattooshop'] = 'APPEARANCE',
    ['qbxtattooshop'] = 'APPEARANCE',
    ['esx_tattooshop'] = 'APPEARANCE',
    ['esx-tattooshop'] = 'APPEARANCE',
    ['esxtattooshop'] = 'APPEARANCE',

    -- CHARACTER SYSTEM
    ['qbmulticharacter'] = 'CHARACTER SYSTEM',
    ['qbx-multicharacter'] = 'CHARACTER SYSTEM',
    ['qbxmulticharacter'] = 'CHARACTER SYSTEM',
    ['esx-multicharacter'] = 'CHARACTER SYSTEM',
    ['esxmulticharacter'] = 'CHARACTER SYSTEM',
    ['renzumulticharacter'] = 'CHARACTER SYSTEM',
    ['origenmulticharacter'] = 'CHARACTER SYSTEM',
    ['codemmulticharacter'] = 'CHARACTER SYSTEM',
    ['17mov_CharacterSystem'] = 'CHARACTER SYSTEM',
    ['17mov-CharacterSystem'] = 'CHARACTER SYSTEM',
    ['17mov_charactersystem'] = 'CHARACTER SYSTEM',
    ['17mov-charactersystem'] = 'CHARACTER SYSTEM',
    ['17movCharacterSystem'] = 'CHARACTER SYSTEM',
    ['17mov-character-system'] = 'CHARACTER SYSTEM',
    ['17mov_character_system'] = 'CHARACTER SYSTEM',
    ['17movcharactersystem'] = 'CHARACTER SYSTEM',
    ['esx-identity'] = 'CHARACTER SYSTEM',
    ['esxidentity'] = 'CHARACTER SYSTEM',
    ['qb_spawn'] = 'CHARACTER SYSTEM',
    ['qbspawn'] = 'CHARACTER SYSTEM',
    ['qbx-spawn'] = 'CHARACTER SYSTEM',
    ['qbxspawn'] = 'CHARACTER SYSTEM',
    ['esx-spawn'] = 'CHARACTER SYSTEM',
    ['esxspawn'] = 'CHARACTER SYSTEM',
    ['qbcityhall'] = 'CHARACTER SYSTEM',
    ['qbx-cityhall'] = 'CHARACTER SYSTEM',
    ['qbxcityhall'] = 'CHARACTER SYSTEM',
    ['esx-joblisting'] = 'CHARACTER SYSTEM',
    ['esxjoblisting'] = 'CHARACTER SYSTEM',
    ['characters'] = 'CHARACTER SYSTEM',
    ['character-selection'] = 'CHARACTER SYSTEM',
    ['character_selection'] = 'CHARACTER SYSTEM',
    ['characterselection'] = 'CHARACTER SYSTEM',
    ['multi-character'] = 'CHARACTER SYSTEM',
    ['multi_character'] = 'CHARACTER SYSTEM',

    -- AMBULANCE
    ['qbambulancejob'] = 'AMBULANCE',
    ['qbx-ambulancejob'] = 'AMBULANCE',
    ['qbxambulancejob'] = 'AMBULANCE',
    ['esx-ambulancejob'] = 'AMBULANCE',
    ['esxambulancejob'] = 'AMBULANCE',
    ['wasabiambulance'] = 'AMBULANCE',
    ['arsambulancejob'] = 'AMBULANCE',
    ['ak47ambulancejob'] = 'AMBULANCE',
    ['rcoreambulance'] = 'AMBULANCE',
    ['origenambulance'] = 'AMBULANCE',
    ['okokAmbulance'] = 'AMBULANCE',
    ['okokambulance'] = 'AMBULANCE',
    ['okok-ambulance'] = 'AMBULANCE',
    ['okok_ambulance'] = 'AMBULANCE',
    ['codem-ambulance'] = 'AMBULANCE',
    ['codem_ambulance'] = 'AMBULANCE',
    ['codemambulance'] = 'AMBULANCE',
    ['vms_ambulance'] = 'AMBULANCE',
    ['vms-ambulance'] = 'AMBULANCE',
    ['vmsambulance'] = 'AMBULANCE',
    ['brutal_ambulancejob'] = 'AMBULANCE',
    ['brutal-ambulancejob'] = 'AMBULANCE',
    ['brutalambulancejob'] = 'AMBULANCE',
    ['tgiann-ambulance'] = 'AMBULANCE',
    ['tgiann_ambulance'] = 'AMBULANCE',
    ['tgiannambulance'] = 'AMBULANCE',
    ['qs-ambulancejob'] = 'AMBULANCE',
    ['qs_ambulancejob'] = 'AMBULANCE',
    ['qsambulancejob'] = 'AMBULANCE',
    ['dusa_ambulancejob'] = 'AMBULANCE',
    ['dusa-ambulancejob'] = 'AMBULANCE',
    ['dusaambulancejob'] = 'AMBULANCE',
    ['cd_ambulancejob'] = 'AMBULANCE',
    ['cd-ambulancejob'] = 'AMBULANCE',
    ['cdambulancejob'] = 'AMBULANCE',
    ['loaf_ambulance'] = 'AMBULANCE',
    ['loaf-ambulance'] = 'AMBULANCE',
    ['loafambulance'] = 'AMBULANCE',
    ['mythic_hospital'] = 'AMBULANCE',
    ['mythic-hospital'] = 'AMBULANCE',
    ['mythichospital'] = 'AMBULANCE',
    ['mythic_hospital_esx'] = 'AMBULANCE',
    ['mythic-hospital-esx'] = 'AMBULANCE',
    ['mythichospitalesx'] = 'AMBULANCE',
    ['mx-ambulance'] = 'AMBULANCE',
    ['mx_ambulance'] = 'AMBULANCE',
    ['mxambulance'] = 'AMBULANCE',
    ['jim-ambulance'] = 'AMBULANCE',
    ['jim_ambulance'] = 'AMBULANCE',
    ['jimambulance'] = 'AMBULANCE',
    ['ps-ems'] = 'AMBULANCE',
    ['ps_ems'] = 'AMBULANCE',
    ['psems'] = 'AMBULANCE',
    ['fd-ems'] = 'AMBULANCE',
    ['fd_ems'] = 'AMBULANCE',
    ['fdems'] = 'AMBULANCE',
    ['emsjob'] = 'AMBULANCE',
    ['ems-job'] = 'AMBULANCE',
    ['ems_job'] = 'AMBULANCE',
    ['medicaljob'] = 'AMBULANCE',
    ['medical-job'] = 'AMBULANCE',
    ['medical_job'] = 'AMBULANCE',
    ['ambulancejob'] = 'AMBULANCE',
    ['ambulance-job'] = 'AMBULANCE',
    ['ambulance_job'] = 'AMBULANCE',
    ['qbhospital'] = 'AMBULANCE',
    ['qbx_hospital'] = 'AMBULANCE',
    ['qbx-hospital'] = 'AMBULANCE',
    ['qbxhospital'] = 'AMBULANCE',
    ['esx_hospital'] = 'AMBULANCE',
    ['esx-hospital'] = 'AMBULANCE',
    ['esxhospital'] = 'AMBULANCE',
    ['rcore_hospital'] = 'AMBULANCE',
    ['rcore-hospital'] = 'AMBULANCE',
    ['rcorehospital'] = 'AMBULANCE',
    ['picklemedical'] = 'AMBULANCE',
    ['medical_records'] = 'AMBULANCE',
    ['emsmdt'] = 'AMBULANCE',
    ['death_screen'] = 'AMBULANCE',
    ['revive-system'] = 'AMBULANCE',
    ['revive_system'] = 'AMBULANCE',
    ['revivesystem'] = 'AMBULANCE',

    -- BANKING
    ['qbbanking'] = 'BANKING',
    ['qbx-banking'] = 'BANKING',
    ['qbxbanking'] = 'BANKING',
    ['esx-banking'] = 'BANKING',
    ['esxbanking'] = 'BANKING',
    ['Renewed-Banking'] = 'BANKING',
    ['Renewed_Banking'] = 'BANKING',
    ['RenewedBanking'] = 'BANKING',
    ['renewedbanking'] = 'BANKING',
    ['okokbanking'] = 'BANKING',
    ['okok_banking'] = 'BANKING',
    ['tggbanking'] = 'BANKING',
    ['fdbanking'] = 'BANKING',
    ['RxBanking'] = 'BANKING',
    ['rxbanking'] = 'BANKING',
    ['rx-banking'] = 'BANKING',
    ['rx_banking'] = 'BANKING',
    ['bablo-banking'] = 'BANKING',
    ['bablo_banking'] = 'BANKING',
    ['bablobanking'] = 'BANKING',
    ['qs-banking'] = 'BANKING',
    ['qs_banking'] = 'BANKING',
    ['qsbanking'] = 'BANKING',
    ['brutal_banking'] = 'BANKING',
    ['brutal-banking'] = 'BANKING',
    ['brutalbanking'] = 'BANKING',
    ['codem-bank'] = 'BANKING',
    ['codem_bank'] = 'BANKING',
    ['codembank'] = 'BANKING',
    ['origen_banking'] = 'BANKING',
    ['origen-banking'] = 'BANKING',
    ['origenbanking'] = 'BANKING',
    ['vms_banking'] = 'BANKING',
    ['vms-banking'] = 'BANKING',
    ['vmsbanking'] = 'BANKING',
    ['ps-banking'] = 'BANKING',
    ['ps_banking'] = 'BANKING',
    ['psbanking'] = 'BANKING',
    ['jim-banking'] = 'BANKING',
    ['jim_banking'] = 'BANKING',
    ['jimbanking'] = 'BANKING',
    ['loaf_banking'] = 'BANKING',
    ['loaf-banking'] = 'BANKING',
    ['loafbanking'] = 'BANKING',
    ['new_banking'] = 'BANKING',
    ['new-banking'] = 'BANKING',
    ['newbanking'] = 'BANKING',
    ['snipe-banking'] = 'BANKING',
    ['snipe_banking'] = 'BANKING',
    ['snipebanking'] = 'BANKING',
    ['zerio-banking'] = 'BANKING',
    ['zerio_banking'] = 'BANKING',
    ['zeriobanking'] = 'BANKING',
    ['pefcl'] = 'BANKING',
    ['banking-ui'] = 'BANKING',
    ['banking_ui'] = 'BANKING',
    ['bankingui'] = 'BANKING',
    ['bank-system'] = 'BANKING',
    ['bank_system'] = 'BANKING',
    ['banksystem'] = 'BANKING',
    ['society-banking'] = 'BANKING',
    ['society_banking'] = 'BANKING',
    ['societybanking'] = 'BANKING',
    ['business-banking'] = 'BANKING',
    ['business_banking'] = 'BANKING',
    ['businessbanking'] = 'BANKING',
    ['qb-bank'] = 'BANKING',
    ['qb_bank'] = 'BANKING',
    ['qbbank'] = 'BANKING',
    ['qbx-bank'] = 'BANKING',
    ['qbx_bank'] = 'BANKING',
    ['qbxbank'] = 'BANKING',
    ['esx-bank'] = 'BANKING',
    ['esx_bank'] = 'BANKING',
    ['esxbank'] = 'BANKING',
    ['av_banking'] = 'BANKING',
    ['av-banking'] = 'BANKING',
    ['avbanking'] = 'BANKING',
    ['rahe-banking'] = 'BANKING',
    ['rahe_banking'] = 'BANKING',
    ['rahebanking'] = 'BANKING',

    -- POLICE SYSTEM
    ['qbpolicejob'] = 'POLICE SYSTEM',
    ['qbxpolice'] = 'POLICE SYSTEM',
    ['esx-policejob'] = 'POLICE SYSTEM',
    ['esxpolicejob'] = 'POLICE SYSTEM',
    ['wasabipolice'] = 'POLICE SYSTEM',
    ['ars_policejob'] = 'POLICE SYSTEM',
    ['ars-policejob'] = 'POLICE SYSTEM',
    ['arspolicejob'] = 'POLICE SYSTEM',
    ['ak47_qb_policejob'] = 'POLICE SYSTEM',
    ['ak47-qb-policejob'] = 'POLICE SYSTEM',
    ['ak47qbpolicejob'] = 'POLICE SYSTEM',
    ['ak47-policejob'] = 'POLICE SYSTEM',
    ['ak47_policejob'] = 'POLICE SYSTEM',
    ['ak47policejob'] = 'POLICE SYSTEM',
    ['brutal_policejob'] = 'POLICE SYSTEM',
    ['brutal-policejob'] = 'POLICE SYSTEM',
    ['brutalpolicejob'] = 'POLICE SYSTEM',
    ['codem-police'] = 'POLICE SYSTEM',
    ['codem_police'] = 'POLICE SYSTEM',
    ['codempolice'] = 'POLICE SYSTEM',
    ['origenpolice'] = 'POLICE SYSTEM',
    ['rcorepolice'] = 'POLICE SYSTEM',
    ['ps-policejob'] = 'POLICE SYSTEM',
    ['ps_policejob'] = 'POLICE SYSTEM',
    ['pspolicejob'] = 'POLICE SYSTEM',
    ['qbprison'] = 'POLICE SYSTEM',
    ['qbx_prison'] = 'POLICE SYSTEM',
    ['qbx-prison'] = 'POLICE SYSTEM',
    ['qbxprison'] = 'POLICE SYSTEM',
    ['esx_jail'] = 'POLICE SYSTEM',
    ['esx-jail'] = 'POLICE SYSTEM',
    ['esxjail'] = 'POLICE SYSTEM',
    ['rcoreprison'] = 'POLICE SYSTEM',
    ['pickleprisons'] = 'POLICE SYSTEM',
    ['psmdt'] = 'POLICE SYSTEM',
    ['redutzumdt'] = 'POLICE SYSTEM',
    ['origenmdt'] = 'POLICE SYSTEM',
    ['tkdispatch'] = 'POLICE SYSTEM',
    ['rcoredispatch'] = 'POLICE SYSTEM',
    ['coredispatch'] = 'POLICE SYSTEM',
    ['qsdispatch'] = 'POLICE SYSTEM',
    ['cddispatch'] = 'POLICE SYSTEM',
    ['psdispatch'] = 'POLICE SYSTEM',
    ['sonoran-cad'] = 'POLICE SYSTEM',
    ['wk-wars2x'] = 'POLICE SYSTEM',
    ['wkwars2x'] = 'POLICE SYSTEM',
    ['evidence-system'] = 'POLICE SYSTEM',
    ['evidence_system'] = 'POLICE SYSTEM',
    ['evidencesystem'] = 'POLICE SYSTEM',
    ['prison'] = 'POLICE SYSTEM',

    -- VEHICLE SYSTEM
    ['qbx-vehiclekeys'] = 'VEHICLE SYSTEM',
    ['qbxvehiclekeys'] = 'VEHICLE SYSTEM',
    ['qbvehiclekeys'] = 'VEHICLE SYSTEM',
    ['Renewed-Vehiclekeys'] = 'VEHICLE SYSTEM',
    ['Renewed_Vehiclekeys'] = 'VEHICLE SYSTEM',
    ['RenewedVehiclekeys'] = 'VEHICLE SYSTEM',
    ['renewedvehiclekeys'] = 'VEHICLE SYSTEM',
    ['qsvehiclekeys'] = 'VEHICLE SYSTEM',
    ['wasabicarlock'] = 'VEHICLE SYSTEM',
    ['cdgarage'] = 'VEHICLE SYSTEM',
    ['jgadvancedgarages'] = 'VEHICLE SYSTEM',
    ['qbgarages'] = 'VEHICLE SYSTEM',
    ['qbx-garages'] = 'VEHICLE SYSTEM',
    ['qbxgarages'] = 'VEHICLE SYSTEM',
    ['esx-garage'] = 'VEHICLE SYSTEM',
    ['esxgarage'] = 'VEHICLE SYSTEM',
    ['okokgarage'] = 'VEHICLE SYSTEM',
    ['okok-garage'] = 'VEHICLE SYSTEM',
    ['okok_garage'] = 'VEHICLE SYSTEM',
    ['vms_garages'] = 'VEHICLE SYSTEM',
    ['vms-garages'] = 'VEHICLE SYSTEM',
    ['vmsgarages'] = 'VEHICLE SYSTEM',
    ['qsadvancedgarages'] = 'VEHICLE SYSTEM',
    ['rcore_garage'] = 'VEHICLE SYSTEM',
    ['rcore-garage'] = 'VEHICLE SYSTEM',
    ['rcoregarage'] = 'VEHICLE SYSTEM',
    ['origen_garage'] = 'VEHICLE SYSTEM',
    ['origen-garage'] = 'VEHICLE SYSTEM',
    ['origengarage'] = 'VEHICLE SYSTEM',
    ['codemgarage'] = 'VEHICLE SYSTEM',
    ['brutal_garage'] = 'VEHICLE SYSTEM',
    ['brutal-garage'] = 'VEHICLE SYSTEM',
    ['brutalgarage'] = 'VEHICLE SYSTEM',
    ['loafgarage'] = 'VEHICLE SYSTEM',
    ['ps-garages'] = 'VEHICLE SYSTEM',
    ['ps_garages'] = 'VEHICLE SYSTEM',
    ['psgarages'] = 'VEHICLE SYSTEM',
    ['qbvehicleshop'] = 'VEHICLE SYSTEM',
    ['qbx-vehicleshop'] = 'VEHICLE SYSTEM',
    ['qbxvehicleshop'] = 'VEHICLE SYSTEM',
    ['esx-vehicleshop'] = 'VEHICLE SYSTEM',
    ['esxvehicleshop'] = 'VEHICLE SYSTEM',
    ['jg-dealerships'] = 'VEHICLE SYSTEM',
    ['jg_dealerships'] = 'VEHICLE SYSTEM',
    ['jgdealerships'] = 'VEHICLE SYSTEM',
    ['qbx_customs'] = 'VEHICLE SYSTEM',
    ['qbx-customs'] = 'VEHICLE SYSTEM',
    ['qbxcustoms'] = 'VEHICLE SYSTEM',
    ['qbcustoms'] = 'VEHICLE SYSTEM',
    ['renzucustoms'] = 'VEHICLE SYSTEM',
    ['renzu_tuners'] = 'VEHICLE SYSTEM',
    ['renzu-tuners'] = 'VEHICLE SYSTEM',
    ['renzutuners'] = 'VEHICLE SYSTEM',
    ['jimmechanic'] = 'VEHICLE SYSTEM',
    ['jg-mechanic'] = 'VEHICLE SYSTEM',
    ['jg_mechanic'] = 'VEHICLE SYSTEM',
    ['jgmechanic'] = 'VEHICLE SYSTEM',
    ['wasabimechanic'] = 'VEHICLE SYSTEM',
    ['qbx_mechanicjob'] = 'VEHICLE SYSTEM',
    ['qbx-mechanicjob'] = 'VEHICLE SYSTEM',
    ['qbxmechanicjob'] = 'VEHICLE SYSTEM',
    ['qbmechanicjob'] = 'VEHICLE SYSTEM',
    ['esx-mechanicjob'] = 'VEHICLE SYSTEM',
    ['esxmechanicjob'] = 'VEHICLE SYSTEM',
    ['ox-fuel'] = 'VEHICLE SYSTEM',
    ['oxfuel'] = 'VEHICLE SYSTEM',
    ['psfuel'] = 'VEHICLE SYSTEM',
    ['cdnfuel'] = 'VEHICLE SYSTEM',
    ['renewed-fuel'] = 'VEHICLE SYSTEM',
    ['renewed_fuel'] = 'VEHICLE SYSTEM',
    ['renewedfuel'] = 'VEHICLE SYSTEM',
    ['x-fuel'] = 'VEHICLE SYSTEM',
    ['x_fuel'] = 'VEHICLE SYSTEM',
    ['xfuel'] = 'VEHICLE SYSTEM',
    ['ljfuel'] = 'VEHICLE SYSTEM',
    ['qs-fuelstations'] = 'VEHICLE SYSTEM',
    ['qs_fuelstations'] = 'VEHICLE SYSTEM',
    ['qsfuelstations'] = 'VEHICLE SYSTEM',
    ['vehicle_keys'] = 'VEHICLE SYSTEM',
    ['garages'] = 'VEHICLE SYSTEM',
    ['garage'] = 'VEHICLE SYSTEM',
    ['dealership'] = 'VEHICLE SYSTEM',
    ['vehicle_shop'] = 'VEHICLE SYSTEM',
    ['carlock'] = 'VEHICLE SYSTEM',
    ['car-lock'] = 'VEHICLE SYSTEM',
    ['car_lock'] = 'VEHICLE SYSTEM',
    ['qbx_towjob'] = 'VEHICLE SYSTEM',
    ['qbx-towjob'] = 'VEHICLE SYSTEM',
    ['qbxtowjob'] = 'VEHICLE SYSTEM',
    ['qbtowjob'] = 'VEHICLE SYSTEM',
    ['esx_towjob'] = 'VEHICLE SYSTEM',
    ['esx-towjob'] = 'VEHICLE SYSTEM',
    ['esxtowjob'] = 'VEHICLE SYSTEM',
    ['flatbed'] = 'VEHICLE SYSTEM',

    -- HOUSING
    ['qbhouses'] = 'HOUSING',
    ['qbapartments'] = 'HOUSING',
    ['qbx-properties'] = 'HOUSING',
    ['qbxproperties'] = 'HOUSING',
    ['esx-property'] = 'HOUSING',
    ['esxproperty'] = 'HOUSING',
    ['pshousing'] = 'HOUSING',
    ['bcshousing'] = 'HOUSING',
    ['loafhousing'] = 'HOUSING',
    ['qshousing'] = 'HOUSING',
    ['nolagproperties'] = 'HOUSING',
    ['snipeapartments'] = 'HOUSING',
    ['origenhousing'] = 'HOUSING',
    ['codem-housing'] = 'HOUSING',
    ['codem_housing'] = 'HOUSING',
    ['codemhousing'] = 'HOUSING',
    ['brutal_housing'] = 'HOUSING',
    ['brutal-housing'] = 'HOUSING',
    ['brutalhousing'] = 'HOUSING',
    ['renewed-housing'] = 'HOUSING',
    ['renewed_housing'] = 'HOUSING',
    ['renewedhousing'] = 'HOUSING',
    ['qb-interior'] = 'HOUSING',
    ['qb_interior'] = 'HOUSING',
    ['qbinterior'] = 'HOUSING',
    ['qbx_interiors'] = 'HOUSING',
    ['qbx-interiors'] = 'HOUSING',
    ['qbxinteriors'] = 'HOUSING',
    ['k4mb1_shells'] = 'HOUSING',
    ['furni'] = 'HOUSING',
    ['furniture'] = 'HOUSING',
    ['real_estate'] = 'HOUSING',

    -- JOB SYSTEM
    ['qbtaxijob'] = 'JOB SYSTEM',
    ['qbx_taxijob'] = 'JOB SYSTEM',
    ['qbx-taxijob'] = 'JOB SYSTEM',
    ['qbxtaxijob'] = 'JOB SYSTEM',
    ['esx-taxijob'] = 'JOB SYSTEM',
    ['esxtaxijob'] = 'JOB SYSTEM',
    ['taxi-job'] = 'JOB SYSTEM',
    ['taxi_job'] = 'JOB SYSTEM',
    ['tow_job'] = 'JOB SYSTEM',
    ['qbtruckerjob'] = 'JOB SYSTEM',
    ['qbx_truckerjob'] = 'JOB SYSTEM',
    ['qbx-truckerjob'] = 'JOB SYSTEM',
    ['qbxtruckerjob'] = 'JOB SYSTEM',
    ['esx-truckerjob'] = 'JOB SYSTEM',
    ['esxtruckerjob'] = 'JOB SYSTEM',
    ['trucker-job'] = 'JOB SYSTEM',
    ['trucker_job'] = 'JOB SYSTEM',
    ['qbgarbagejob'] = 'JOB SYSTEM',
    ['qbx_garbagejob'] = 'JOB SYSTEM',
    ['qbx-garbagejob'] = 'JOB SYSTEM',
    ['qbxgarbagejob'] = 'JOB SYSTEM',
    ['esx_garbagejob'] = 'JOB SYSTEM',
    ['esx-garbagejob'] = 'JOB SYSTEM',
    ['esxgarbagejob'] = 'JOB SYSTEM',
    ['garbage_job'] = 'JOB SYSTEM',
    ['qbbusjob'] = 'JOB SYSTEM',
    ['qbx_busjob'] = 'JOB SYSTEM',
    ['qbx-busjob'] = 'JOB SYSTEM',
    ['qbxbusjob'] = 'JOB SYSTEM',
    ['esx_busjob'] = 'JOB SYSTEM',
    ['esx-busjob'] = 'JOB SYSTEM',
    ['esxbusjob'] = 'JOB SYSTEM',
    ['bus_job'] = 'JOB SYSTEM',
    ['qbhotdogjob'] = 'JOB SYSTEM',
    ['qbx_hotdogjob'] = 'JOB SYSTEM',
    ['qbx-hotdogjob'] = 'JOB SYSTEM',
    ['qbxhotdogjob'] = 'JOB SYSTEM',
    ['delivery_job'] = 'JOB SYSTEM',
    ['go_postal'] = 'JOB SYSTEM',
    ['postaljob'] = 'JOB SYSTEM',
    ['postal-job'] = 'JOB SYSTEM',
    ['postal_job'] = 'JOB SYSTEM',
    ['qbnewsjob'] = 'JOB SYSTEM',
    ['qbx_newsjob'] = 'JOB SYSTEM',
    ['qbx-newsjob'] = 'JOB SYSTEM',
    ['qbxnewsjob'] = 'JOB SYSTEM',
    ['esx_newsjob'] = 'JOB SYSTEM',
    ['esx-newsjob'] = 'JOB SYSTEM',
    ['esxnewsjob'] = 'JOB SYSTEM',
    ['news_job'] = 'JOB SYSTEM',
    ['qbrecyclejob'] = 'JOB SYSTEM',
    ['qbx_recyclejob'] = 'JOB SYSTEM',
    ['qbx-recyclejob'] = 'JOB SYSTEM',
    ['qbxrecyclejob'] = 'JOB SYSTEM',
    ['recycle_job'] = 'JOB SYSTEM',
    ['qb-diving'] = 'JOB SYSTEM',
    ['qb_diving'] = 'JOB SYSTEM',
    ['qbdiving'] = 'JOB SYSTEM',
    ['qbx_divegear'] = 'JOB SYSTEM',
    ['qbx-divegear'] = 'JOB SYSTEM',
    ['qbxdivegear'] = 'JOB SYSTEM',
    ['divegear'] = 'JOB SYSTEM',
    ['job_center'] = 'JOB SYSTEM',
    ['jobs-creator'] = 'JOB SYSTEM',
    ['jobscreator'] = 'JOB SYSTEM',
    ['renzu_jobs'] = 'JOB SYSTEM',
    ['renzu-jobs'] = 'JOB SYSTEM',
    ['renzujobs'] = 'JOB SYSTEM',
    ['wasabi_jobs'] = 'JOB SYSTEM',
    ['wasabi-jobs'] = 'JOB SYSTEM',
    ['wasabijobs'] = 'JOB SYSTEM',
    ['origen_jobs'] = 'JOB SYSTEM',
    ['origen-jobs'] = 'JOB SYSTEM',
    ['origenjobs'] = 'JOB SYSTEM',
    ['codem-jobs'] = 'JOB SYSTEM',
    ['codem_jobs'] = 'JOB SYSTEM',
    ['codemjobs'] = 'JOB SYSTEM',
    ['brutal_jobs'] = 'JOB SYSTEM',
    ['brutal-jobs'] = 'JOB SYSTEM',
    ['brutaljobs'] = 'JOB SYSTEM',
    ['businesssystem'] = 'JOB SYSTEM',

    -- ADMINISTRATION
    ['qbx-adminmenu'] = 'ADMINISTRATION',
    ['qbxadminmenu'] = 'ADMINISTRATION',
    ['qbadminmenu'] = 'ADMINISTRATION',
    ['esx-adminplus'] = 'ADMINISTRATION',
    ['esxadminplus'] = 'ADMINISTRATION',
    ['snipemenu'] = 'ADMINISTRATION',
    ['wasabi_admin'] = 'ADMINISTRATION',
    ['wasabi-admin'] = 'ADMINISTRATION',
    ['wasabiadmin'] = 'ADMINISTRATION',
    ['codem-admin'] = 'ADMINISTRATION',
    ['codem_admin'] = 'ADMINISTRATION',
    ['codemadmin'] = 'ADMINISTRATION',
    ['origenadmin'] = 'ADMINISTRATION',
    ['ps-adminmenu'] = 'ADMINISTRATION',
    ['ps_adminmenu'] = 'ADMINISTRATION',
    ['psadminmenu'] = 'ADMINISTRATION',
    ['brutal_admin'] = 'ADMINISTRATION',
    ['brutal-admin'] = 'ADMINISTRATION',
    ['brutaladmin'] = 'ADMINISTRATION',
    ['zrx_adminmenu'] = 'ADMINISTRATION',
    ['zrx-adminmenu'] = 'ADMINISTRATION',
    ['zrxadminmenu'] = 'ADMINISTRATION',
    ['monitor'] = 'ADMINISTRATION',
    ['webadmin'] = 'ADMINISTRATION',
    ['admin_menu'] = 'ADMINISTRATION',
    ['reportsystem'] = 'ADMINISTRATION',
    ['ticketsystem'] = 'ADMINISTRATION',
    ['staff_menu'] = 'ADMINISTRATION',
    ['permissions'] = 'ADMINISTRATION',
    ['ace-permissions'] = 'ADMINISTRATION',
    ['ace_permissions'] = 'ADMINISTRATION',
    ['acepermissions'] = 'ADMINISTRATION',
    ['servermanager'] = 'ADMINISTRATION',
    ['server-manager'] = 'ADMINISTRATION',
    ['server_manager'] = 'ADMINISTRATION',

    -- USER INTERFACE
    ['qbhud'] = 'USER INTERFACE',
    ['qbx_hud'] = 'USER INTERFACE',
    ['qbx-hud'] = 'USER INTERFACE',
    ['qbxhud'] = 'USER INTERFACE',
    ['pshud'] = 'USER INTERFACE',
    ['renzuhud'] = 'USER INTERFACE',
    ['trew_hud_ui'] = 'USER INTERFACE',
    ['trew-hud-ui'] = 'USER INTERFACE',
    ['trewhudui'] = 'USER INTERFACE',
    ['okokNotify'] = 'USER INTERFACE',
    ['okoknotify'] = 'USER INTERFACE',
    ['okok-notify'] = 'USER INTERFACE',
    ['okok_notify'] = 'USER INTERFACE',
    ['mythic_notify'] = 'USER INTERFACE',
    ['mythic-notify'] = 'USER INTERFACE',
    ['mythicnotify'] = 'USER INTERFACE',
    ['pNotify'] = 'USER INTERFACE',
    ['pnotify'] = 'USER INTERFACE',
    ['wasabi_notify'] = 'USER INTERFACE',
    ['wasabi-notify'] = 'USER INTERFACE',
    ['wasabinotify'] = 'USER INTERFACE',
    ['origen_notify'] = 'USER INTERFACE',
    ['origen-notify'] = 'USER INTERFACE',
    ['origennotify'] = 'USER INTERFACE',
    ['brutal_notify'] = 'USER INTERFACE',
    ['brutal-notify'] = 'USER INTERFACE',
    ['brutalnotify'] = 'USER INTERFACE',
    ['vms_notify'] = 'USER INTERFACE',
    ['vms-notify'] = 'USER INTERFACE',
    ['vmsnotify'] = 'USER INTERFACE',
    ['codem-notification'] = 'USER INTERFACE',
    ['codem_notification'] = 'USER INTERFACE',
    ['codemnotification'] = 'USER INTERFACE',
    ['chat_theme_gtao'] = 'USER INTERFACE',
    ['chatthemegtao'] = 'USER INTERFACE',
    ['chat-theme-civlifechat'] = 'USER INTERFACE',
    ['chat_theme_civlifechat'] = 'USER INTERFACE',
    ['chatthemecivlifechat'] = 'USER INTERFACE',
    ['qbscoreboard'] = 'USER INTERFACE',
    ['qbx_scoreboard'] = 'USER INTERFACE',
    ['qbx-scoreboard'] = 'USER INTERFACE',
    ['qbxscoreboard'] = 'USER INTERFACE',
    ['loadingscreen'] = 'USER INTERFACE',
    ['qb-loading'] = 'USER INTERFACE',
    ['qb_loading'] = 'USER INTERFACE',
    ['qbloading'] = 'USER INTERFACE',
    ['qbx_loading'] = 'USER INTERFACE',
    ['qbx-loading'] = 'USER INTERFACE',
    ['qbxloading'] = 'USER INTERFACE',
    ['pause_menu'] = 'USER INTERFACE',
    ['radial-menu'] = 'USER INTERFACE',
    ['radial_menu'] = 'USER INTERFACE',
    ['qbradialmenu'] = 'USER INTERFACE',
    ['qbx_radialmenu'] = 'USER INTERFACE',
    ['qbx-radialmenu'] = 'USER INTERFACE',
    ['qbxradialmenu'] = 'USER INTERFACE',
    ['ox-radialmenu'] = 'USER INTERFACE',
    ['oxradialmenu'] = 'USER INTERFACE',
    ['scullyemotemenu'] = 'USER INTERFACE',
    ['emotemenu'] = 'USER INTERFACE',
    ['emote-menu'] = 'USER INTERFACE',
    ['emote_menu'] = 'USER INTERFACE',
    ['progress-bar'] = 'USER INTERFACE',
    ['progress_bar'] = 'USER INTERFACE',
    ['qb_progressbar'] = 'USER INTERFACE',
    ['qbprogressbar'] = 'USER INTERFACE',
    ['ox_progress'] = 'USER INTERFACE',
    ['ox-progress'] = 'USER INTERFACE',
    ['oxprogress'] = 'USER INTERFACE',
    ['circle-progress'] = 'USER INTERFACE',
    ['circleprogress'] = 'USER INTERFACE',

    -- WORLD SYSTEM
    ['qbweathersync'] = 'WORLD SYSTEM',
    ['qbx_weathersync'] = 'WORLD SYSTEM',
    ['qbx-weathersync'] = 'WORLD SYSTEM',
    ['qbxweathersync'] = 'WORLD SYSTEM',
    ['cdeasytime'] = 'WORLD SYSTEM',
    ['renewedweathersync'] = 'WORLD SYSTEM',
    ['weathersync'] = 'WORLD SYSTEM',
    ['timesync'] = 'WORLD SYSTEM',
    ['bob74-ipl'] = 'WORLD SYSTEM',
    ['bob74ipl'] = 'WORLD SYSTEM',
    ['ipl-loader'] = 'WORLD SYSTEM',
    ['ipl_loader'] = 'WORLD SYSTEM',
    ['iplloader'] = 'WORLD SYSTEM',
    ['npcdensity'] = 'WORLD SYSTEM',
    ['trafficmanager'] = 'WORLD SYSTEM',
    ['safezones'] = 'WORLD SYSTEM',
    ['safe-zones'] = 'WORLD SYSTEM',
    ['safe_zones'] = 'WORLD SYSTEM',
    ['zonemanager'] = 'WORLD SYSTEM',
    ['ox-doorlock'] = 'WORLD SYSTEM',
    ['oxdoorlock'] = 'WORLD SYSTEM',
    ['qbdoorlock'] = 'WORLD SYSTEM',
    ['qbx_doorlock'] = 'WORLD SYSTEM',
    ['qbx-doorlock'] = 'WORLD SYSTEM',
    ['qbxdoorlock'] = 'WORLD SYSTEM',
    ['nuidoorlock'] = 'WORLD SYSTEM',
    ['interior-proxy'] = 'WORLD SYSTEM',
    ['interior_proxy'] = 'WORLD SYSTEM',
    ['interiorproxy'] = 'WORLD SYSTEM',

    -- MAP OR ASSET
    ['cfx_gabz_mapdata'] = 'MAP OR ASSET',
    ['cfxgabzmapdata'] = 'MAP OR ASSET',
    ['cfx-gabz-scenarios'] = 'MAP OR ASSET',
    ['cfx_gabz_scenarios'] = 'MAP OR ASSET',
    ['cfxgabzscenarios'] = 'MAP OR ASSET',
    ['cfx_gabz_pdprops'] = 'MAP OR ASSET',
    ['cfxgabzpdprops'] = 'MAP OR ASSET',
    ['cfx_gabz_247'] = 'MAP OR ASSET',
    ['cfxgabz247'] = 'MAP OR ASSET',
    ['cfx-gabz-ammu'] = 'MAP OR ASSET',
    ['cfx_gabz_ammu'] = 'MAP OR ASSET',
    ['cfxgabzammu'] = 'MAP OR ASSET',
    ['cfx-gabz-bahama'] = 'MAP OR ASSET',
    ['cfx_gabz_bahama'] = 'MAP OR ASSET',
    ['cfxgabzbahama'] = 'MAP OR ASSET',
    ['cfx-gabz-bank'] = 'MAP OR ASSET',
    ['cfx_gabz_bank'] = 'MAP OR ASSET',
    ['cfxgabzbank'] = 'MAP OR ASSET',
    ['cfx-gabz-barber'] = 'MAP OR ASSET',
    ['cfx_gabz_barber'] = 'MAP OR ASSET',
    ['cfxgabzbarber'] = 'MAP OR ASSET',
    ['cfx-gabz-binco'] = 'MAP OR ASSET',
    ['cfx_gabz_binco'] = 'MAP OR ASSET',
    ['cfxgabzbinco'] = 'MAP OR ASSET',
    ['cfx-gabz-bobcat'] = 'MAP OR ASSET',
    ['cfx_gabz_bobcat'] = 'MAP OR ASSET',
    ['cfxgabzbobcat'] = 'MAP OR ASSET',
    ['cfx-gabz-burgershot'] = 'MAP OR ASSET',
    ['cfx_gabz_burgershot'] = 'MAP OR ASSET',
    ['cfxgabzburgershot'] = 'MAP OR ASSET',
    ['cfx_gabz_catcafe'] = 'MAP OR ASSET',
    ['cfxgabzcatcafe'] = 'MAP OR ASSET',
    ['cfx-gabz-diner'] = 'MAP OR ASSET',
    ['cfx_gabz_diner'] = 'MAP OR ASSET',
    ['cfxgabzdiner'] = 'MAP OR ASSET',
    ['cfx-gabz-firedept'] = 'MAP OR ASSET',
    ['cfx_gabz_firedept'] = 'MAP OR ASSET',
    ['cfxgabzfiredept'] = 'MAP OR ASSET',
    ['cfx-gabz-harmony'] = 'MAP OR ASSET',
    ['cfx_gabz_harmony'] = 'MAP OR ASSET',
    ['cfxgabzharmony'] = 'MAP OR ASSET',
    ['cfx-gabz-haters'] = 'MAP OR ASSET',
    ['cfx_gabz_haters'] = 'MAP OR ASSET',
    ['cfxgabzhaters'] = 'MAP OR ASSET',
    ['cfx-gabz-hayes'] = 'MAP OR ASSET',
    ['cfx_gabz_hayes'] = 'MAP OR ASSET',
    ['cfxgabzhayes'] = 'MAP OR ASSET',
    ['cfx-gabz-hospital'] = 'MAP OR ASSET',
    ['cfx_gabz_hospital'] = 'MAP OR ASSET',
    ['cfxgabzhospital'] = 'MAP OR ASSET',
    ['cfx-gabz-impound'] = 'MAP OR ASSET',
    ['cfx_gabz_impound'] = 'MAP OR ASSET',
    ['cfxgabzimpound'] = 'MAP OR ASSET',
    ['cfx-gabz-lamesapd'] = 'MAP OR ASSET',
    ['cfx_gabz_lamesapd'] = 'MAP OR ASSET',
    ['cfxgabzlamesapd'] = 'MAP OR ASSET',
    ['cfx-gabz-lost'] = 'MAP OR ASSET',
    ['cfx_gabz_lost'] = 'MAP OR ASSET',
    ['cfxgabzlost'] = 'MAP OR ASSET',
    ['cfx-gabz-lostsc'] = 'MAP OR ASSET',
    ['cfx_gabz_lostsc'] = 'MAP OR ASSET',
    ['cfxgabzlostsc'] = 'MAP OR ASSET',
    ['cfx-gabz-mechanic'] = 'MAP OR ASSET',
    ['cfx_gabz_mechanic'] = 'MAP OR ASSET',
    ['cfxgabzmechanic'] = 'MAP OR ASSET',
    ['cfx_gabz_mrpd'] = 'MAP OR ASSET',
    ['cfxgabzmrpd'] = 'MAP OR ASSET',
    ['cfx_gabz_ottos'] = 'MAP OR ASSET',
    ['cfxgabzottos'] = 'MAP OR ASSET',
    ['cfx-gabz-pacificbank'] = 'MAP OR ASSET',
    ['cfx_gabz_pacificbank'] = 'MAP OR ASSET',
    ['cfxgabzpacificbank'] = 'MAP OR ASSET',
    ['cfx-gabz-paletobank'] = 'MAP OR ASSET',
    ['cfx_gabz_paletobank'] = 'MAP OR ASSET',
    ['cfxgabzpaletobank'] = 'MAP OR ASSET',
    ['cfx-gabz-paletopd'] = 'MAP OR ASSET',
    ['cfx_gabz_paletopd'] = 'MAP OR ASSET',
    ['cfxgabzpaletopd'] = 'MAP OR ASSET',
    ['cfx-gabz-parkranger'] = 'MAP OR ASSET',
    ['cfx_gabz_parkranger'] = 'MAP OR ASSET',
    ['cfxgabzparkranger'] = 'MAP OR ASSET',
    ['cfx-gabz-pdm'] = 'MAP OR ASSET',
    ['cfx_gabz_pdm'] = 'MAP OR ASSET',
    ['cfxgabzpdm'] = 'MAP OR ASSET',
    ['cfx_gabz_pillbox'] = 'MAP OR ASSET',
    ['cfxgabzpillbox'] = 'MAP OR ASSET',
    ['cfx_gabz_pizzeria'] = 'MAP OR ASSET',
    ['cfxgabzpizzeria'] = 'MAP OR ASSET',
    ['cfx-gabz-prison'] = 'MAP OR ASSET',
    ['cfx_gabz_prison'] = 'MAP OR ASSET',
    ['cfxgabzprison'] = 'MAP OR ASSET',
    ['cfx-gabz-records'] = 'MAP OR ASSET',
    ['cfx_gabz_records'] = 'MAP OR ASSET',
    ['cfxgabzrecords'] = 'MAP OR ASSET',
    ['cfx-gabz-sandypd'] = 'MAP OR ASSET',
    ['cfx_gabz_sandypd'] = 'MAP OR ASSET',
    ['cfxgabzsandypd'] = 'MAP OR ASSET',
    ['cfx-gabz-suburban'] = 'MAP OR ASSET',
    ['cfx_gabz_suburban'] = 'MAP OR ASSET',
    ['cfxgabzsuburban'] = 'MAP OR ASSET',
    ['cfx-gabz-tuners'] = 'MAP OR ASSET',
    ['cfx_gabz_tuners'] = 'MAP OR ASSET',
    ['cfxgabztuners'] = 'MAP OR ASSET',
    ['cfx-gabz-vbmarket'] = 'MAP OR ASSET',
    ['cfx_gabz_vbmarket'] = 'MAP OR ASSET',
    ['cfxgabzvbmarket'] = 'MAP OR ASSET',
    ['cfx-gabz-vu'] = 'MAP OR ASSET',
    ['cfx_gabz_vu'] = 'MAP OR ASSET',
    ['cfxgabzvu'] = 'MAP OR ASSET',
    ['cfx-gabz-yachts'] = 'MAP OR ASSET',
    ['cfx_gabz_yachts'] = 'MAP OR ASSET',
    ['cfxgabzyachts'] = 'MAP OR ASSET',
    ['interior'] = 'MAP OR ASSET',
    ['clothingpack'] = 'MAP OR ASSET',
    ['sound_pack'] = 'MAP OR ASSET',


    -- ADDITIONAL CURATED FIVEM RESOURCES
    ['community_bridge'] = 'CORE LIBRARY',
    ['community-bridge'] = 'CORE LIBRARY',
    ['sleepless_lib'] = 'CORE LIBRARY',
    ['sleepless-lib'] = 'CORE LIBRARY',
    ['Renewed-Lib'] = 'CORE LIBRARY',
    ['renewed_lib'] = 'CORE LIBRARY',
    ['renewed-lib'] = 'CORE LIBRARY',
    ['wasabi_bridge'] = 'CORE LIBRARY',
    ['wasabi-bridge'] = 'CORE LIBRARY',
    ['bl_bridge'] = 'CORE LIBRARY',
    ['bl-bridge'] = 'CORE LIBRARY',
    ['lation_ui'] = 'USER INTERFACE',
    ['lation-ui'] = 'USER INTERFACE',
    ['mythic-progbar'] = 'PROGRESS UI',
    ['rprogress'] = 'PROGRESS UI',
    ['circle-progressbar'] = 'PROGRESS UI',
    ['circle_progressbar'] = 'PROGRESS UI',
    ['sd-notify'] = 'NOTIFICATIONS',
    ['sd_notify'] = 'NOTIFICATIONS',
    ['doors_creator'] = 'DOOR LOCK',
    ['doors-creator'] = 'DOOR LOCK',
    ['qs-doorlock'] = 'DOOR LOCK',
    ['qs_doorlock'] = 'DOOR LOCK',
    ['ak47_housing'] = 'HOUSING',
    ['ak47-housing'] = 'HOUSING',
    ['snipe-housing'] = 'HOUSING',
    ['snipe_housing'] = 'HOUSING',
    ['Renewed-Weathersync'] = 'WEATHER',
    ['av_weather'] = 'WEATHER',
    ['av-weather'] = 'WEATHER',
    ['ak47_qb_multicharacter'] = 'CHARACTER SYSTEM',
    ['ak47-qb-multicharacter'] = 'CHARACTER SYSTEM',
    ['ak47_esx_multicharacter'] = 'CHARACTER SYSTEM',
    ['ak47-esx-multicharacter'] = 'CHARACTER SYSTEM',
    ['bMenu'] = 'ADMINISTRATION',
    ['bmenu'] = 'ADMINISTRATION',
    ['lunar_garage'] = 'VEHICLE SYSTEM',
    ['lunar-garage'] = 'VEHICLE SYSTEM',
    ['lunar_vehiclekeys'] = 'VEHICLE SYSTEM',
    ['lunar-vehiclekeys'] = 'VEHICLE SYSTEM',
    ['lunar_tuning'] = 'VEHICLE SYSTEM',
    ['lunar-tuning'] = 'VEHICLE SYSTEM',
    ['cw-racingapp'] = 'RACING',
    ['cw_racingapp'] = 'RACING',
    ['cw-racing'] = 'RACING',
    ['cw_racing'] = 'RACING',
    ['rahe-racing'] = 'RACING',
    ['rahe_racing'] = 'RACING',
    ['av_racing'] = 'RACING',
    ['av-racing'] = 'RACING',
    ['renzu_controller'] = 'VEHICLE SYSTEM',
    ['renzu-controller'] = 'VEHICLE SYSTEM',
    ['jim-mining'] = 'JOB SYSTEM',
    ['jim_mining'] = 'JOB SYSTEM',
    ['jim-lumberjack'] = 'JOB SYSTEM',
    ['jim_lumberjack'] = 'JOB SYSTEM',
    ['jim-consumables'] = 'CONSUMABLES',
    ['jim_consumables'] = 'CONSUMABLES',
    ['jim-payments'] = 'PAYMENTS',
    ['jim_payments'] = 'PAYMENTS',
    ['jim-recycle'] = 'JOB SYSTEM',
    ['jim_recycle'] = 'JOB SYSTEM',
    ['ps-drugprocessing'] = 'CRIME SYSTEM',
    ['ps_drugprocessing'] = 'CRIME SYSTEM',
    ['ps-drugs'] = 'CRIME SYSTEM',
    ['ps_drugs'] = 'CRIME SYSTEM',
    ['projectx-drugs'] = 'CRIME SYSTEM',
    ['projectx_drugs'] = 'CRIME SYSTEM',
    ['osp_ambulance'] = 'MEDICAL',
    ['osp-ambulance'] = 'MEDICAL',
    ['ak47_qb_ambulance'] = 'MEDICAL',
    ['ak47-qb-ambulance'] = 'MEDICAL',
    ['ak47_esx_ambulance'] = 'MEDICAL',
    ['ak47-esx-ambulance'] = 'MEDICAL',
    ['medical_creator'] = 'MEDICAL',
    ['medical-creator'] = 'MEDICAL',
    ['lb-banking'] = 'BANKING',
    ['lb_banking'] = 'BANKING',
    ['rcore_tattoos'] = 'APPEARANCE',
    ['rcore-tattoos'] = 'APPEARANCE',
    ['rcore_barbershop'] = 'APPEARANCE',
    ['rcore-barbershop'] = 'APPEARANCE',
    ['pickle_construction'] = 'JOB SYSTEM',
    ['pickle-construction'] = 'JOB SYSTEM',
    ['pickle_mining'] = 'JOB SYSTEM',
    ['pickle-mining'] = 'JOB SYSTEM',
    ['pickle_delivery'] = 'JOB SYSTEM',
    ['pickle-delivery'] = 'JOB SYSTEM',
    ['pickle_crafting'] = 'CRAFTING',
    ['pickle-crafting'] = 'CRAFTING',
    ['av_business'] = 'BUSINESS SYSTEM',
    ['av-business'] = 'BUSINESS SYSTEM',
    ['av_restaurants'] = 'BUSINESS SYSTEM',
    ['av-restaurants'] = 'BUSINESS SYSTEM',
    ['av_dealership'] = 'VEHICLE SYSTEM',
    ['av-dealership'] = 'VEHICLE SYSTEM',
    ['av_garages'] = 'VEHICLE SYSTEM',
    ['av-garages'] = 'VEHICLE SYSTEM',
    ['rcore_spray'] = 'GRAFFITI',
    ['rcore-spray'] = 'GRAFFITI',
    ['rcore_gangs'] = 'GANG SYSTEM',
    ['rcore-gangs'] = 'GANG SYSTEM',
    ['rcore_arcade'] = 'ACTIVITY',
    ['rcore-arcade'] = 'ACTIVITY',
    ['rcore_casino'] = 'CASINO',
    ['rcore-casino'] = 'CASINO',
    ['rcore_tennis'] = 'ACTIVITY',
    ['rcore-tennis'] = 'ACTIVITY',
    ['cd_multicharacter'] = 'CHARACTER SYSTEM',
    ['cd-multicharacter'] = 'CHARACTER SYSTEM',
}

if Config.ResourceAliasVariants.Enabled then
    local generated = {}

    for resourceName, alias in pairs(Config.ResourceAliases) do
        local variants = {}

        if Config.ResourceAliasVariants.Hyphen then
            variants[#variants + 1] = resourceName:gsub('_', '-')
        end

        if Config.ResourceAliasVariants.Underscore then
            variants[#variants + 1] = resourceName:gsub('%-', '_')
        end

        if Config.ResourceAliasVariants.Lowercase then
            variants[#variants + 1] = resourceName:lower()
        end

        for index = 1, #variants do
            local variant = variants[index]
            if variant ~= resourceName and Config.ResourceAliases[variant] == nil then
                generated[variant] = alias
            end
        end
    end

    for resourceName, alias in pairs(generated) do
        Config.ResourceAliases[resourceName] = alias
    end
end

```


---

# 🎮 **USAGE:**

Players can open the interface through the configured command, optional key mapping, configured marker, client event, or export.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/keybinds` | Opens the fullscreen dynamic keybind interface. | Available to every player. |
| Configured aliases | Opens the same interface through additional command names. | Defined in `Config.Command.Aliases`. |

### Keybinds

- Default opening key: Disabled.
- Optional configured key: `F10`.
- Enable it through `Config.Command.KeyMapping.Enabled`.
- Players can change registered FiveM key mappings through FiveM's key binding settings.

The keyboard displays each player's current mappings rather than only the original default keys.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

Use these integrations when another resource needs to open or close the interface, refresh detected controls, listen for UI lifecycle changes, or provide clearer metadata for its own commands.

> **Integration scope:** All public exports are **client-side exports**. Public control events are registered on the **client**. The server events listed below are internal protocol events used by SMDZ Dynamic Keybinds and should not be called directly by third-party resources.

## Integration Side Summary

| Integration type | Side | Recommended use |
|---|---|---|
| Public control events | Client | Open, close, or refresh the UI from another client script. |
| Remote control events | Server → Client | Open, close, or refresh the UI for a specific player through `TriggerClientEvent`. |
| Lifecycle events | Client | React to the UI opening, closing, refreshing, or completing its handshake. |
| Public exports | Client | Direct resource-to-resource integration without using events. |
| Internal protocol events | Client ↔ Server | Handshake, refresh authorization, cooldown status, and scan statistics. Do not call manually. |

---

## Server Events

These events are registered in `server/main.lua`. They are part of the internal validation and cooldown protocol.

| Event name | Registered on | Triggered from | Public API | Internal purpose |
|---|---|---|---|---|
| `smdz_keybinds:server:handshake` | Server | Client | No | Validates the client protocol version and creates a temporary session token. |
| `smdz_keybinds:server:reportClientStats` | Server | Client | No | Receives validated scan totals for the startup information and internal state. |
| `smdz_keybinds:server:requestRefreshStatus` | Server | Client | No | Returns the player's current manual refresh cooldown. |
| `smdz_keybinds:server:requestRefresh` | Server | Client | No | Authorizes or rejects a manual refresh request using the per-player cooldown. |

### When are these server events used?

- The handshake event runs automatically when the player loads or the resource restarts.
- The statistics event runs after a successful client scan.
- The refresh-status event runs when the UI opens.
- The refresh-request event runs when the player presses the refresh button.

Do **not** trigger these events from another resource. They require the temporary handshake token generated internally by SMDZ Dynamic Keybinds.

Incorrect third-party usage:

```lua
-- Do not do this.
TriggerServerEvent('smdz_keybinds:server:requestRefresh', 'fake_token')
```

Use the public client event or client export instead:

```lua
TriggerEvent('smdz_keybinds:client:refresh')
```

or:

```lua
exports['smdz_keybinds']:RefreshKeybinds()
```

---

## Client Events

### Public Control Events

These events are registered in `client/main.lua`. Use them from another **client script** when an event-based integration is more convenient than an export.

| Event name | Side | Parameters | When to use it |
|---|---|---|---|
| `smdz_keybinds:client:open` | Client | None | Open the keybind UI after a tutorial, help interaction, onboarding step, or custom menu action. |
| `smdz_keybinds:client:close` | Client | None | Close the keybind UI before opening another NUI or changing the player's interaction state. |
| `smdz_keybinds:client:refresh` | Client | None | Request a new scan after commands or key mappings have changed. |

### Open from another client resource

Use this when a client-side tutorial, NPC, target option, or menu button should open the keyboard:

```lua
RegisterNetEvent('my_tutorial:client:showControls', function()
    TriggerEvent('smdz_keybinds:client:open')
end)
```

### Close before opening another NUI

Use this when your resource must prevent two fullscreen interfaces from overlapping:

```lua
RegisterNetEvent('my_resource:client:openMainMenu', function()
    TriggerEvent('smdz_keybinds:client:close')

    Wait(150)

    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'openMainMenu'
    })
end)
```

### Refresh after registering or changing commands

Use this after a client resource dynamically registers controls while the player is connected:

```lua
RegisterCommand('+custom_action', function()
    -- Custom action.
end, false)

RegisterCommand('-custom_action', function()
end, false)

RegisterKeyMapping(
    '+custom_action',
    'Use custom action',
    'keyboard',
    'G'
)

TriggerEvent('smdz_keybinds:client:refresh')
```

The refresh is automatically protected against concurrent scans. Manual refreshes initiated through the UI also use the server-authoritative cooldown.

### Open from a server script for a specific player

Because the public control events are network events, a server resource can send one to a selected player:

```lua
RegisterCommand('showplayerkeys', function(source, args)
    local targetId = tonumber(args[1])
    if not targetId then return end

    TriggerClientEvent(
        'smdz_keybinds:client:open',
        targetId
    )
end, true)
```

Use this for staff assistance, onboarding, or a server-managed tutorial. Do not broadcast the UI to every player unless that behavior is intentional.

Close it remotely:

```lua
TriggerClientEvent(
    'smdz_keybinds:client:close',
    targetId
)
```

Request a remote refresh:

```lua
TriggerClientEvent(
    'smdz_keybinds:client:refresh',
    targetId
)
```

---

## Client Lifecycle Events

Lifecycle events are local client events emitted by SMDZ Dynamic Keybinds when:

```lua
Config.Technical.EmitLifecycleEvents = true
```

| Event name | Side | Parameters | When to use it |
|---|---|---|---|
| `smdz_keybinds:client:opened` | Client | `source`, `total`, `fromCache` | Track when the UI becomes ready, pause another system, or record local analytics. |
| `smdz_keybinds:client:closed` | Client | None | Restore another HUD, menu, interaction mode, or camera after the UI closes. |
| `smdz_keybinds:client:refreshed` | Client | `reason`, `total`, `fromCache` | React after a keybind scan finishes or update dependent UI state. |
| `smdz_keybinds:client:serverReady` | Client | `version` | Wait until the client/server handshake is valid before offering an integration button. |

### Listen for the UI opening

```lua
AddEventHandler(
    'smdz_keybinds:client:opened',
    function(openSource, totalControls, fromCache)
        print((
            '[my_resource] Keybind UI opened from %s with %s controls. Cached: %s'
        ):format(
            tostring(openSource),
            tostring(totalControls),
            tostring(fromCache)
        ))
    end
)
```

Possible `openSource` values include the main command, a marker, an event, an export, or another internal opening source.

### Hide and restore a custom HUD

```lua
AddEventHandler('smdz_keybinds:client:opened', function()
    exports['my_hud']:SetHudVisible(false)
end)

AddEventHandler('smdz_keybinds:client:closed', function()
    exports['my_hud']:SetHudVisible(true)
end)
```

### React after a completed refresh

```lua
AddEventHandler(
    'smdz_keybinds:client:refreshed',
    function(reason, totalControls, fromCache)
        print((
            '[my_resource] Keybind scan completed. Reason: %s | Total: %s | Cached: %s'
        ):format(
            tostring(reason),
            tostring(totalControls),
            tostring(fromCache)
        ))
    end
)
```

### Enable an integration only after the server is ready

```lua
local keybindsReady = false

AddEventHandler(
    'smdz_keybinds:client:serverReady',
    function(version)
        keybindsReady = true

        print((
            '[my_resource] SMDZ Dynamic Keybinds is ready. Version: %s'
        ):format(tostring(version)))
    end
)
```

Lifecycle events are intended for listening only. They do not replace the public open, close, and refresh events.

---

## Exports

All exports provided by SMDZ Dynamic Keybinds are **client-side exports**. Call them only from another resource's client script.

There are currently no public server exports.

### Export Reference

| Export name | Side | Parameters | Returns | Recommended use |
|---|---|---|---|---|
| `OpenKeybinds` | Client | `source` (optional string) | `false` when unavailable or busy; otherwise no explicit value | Open the interface from a client menu, target option, tutorial, NPC, or custom interaction. |
| `CloseKeybinds` | Client | None | No explicit value | Close the interface before opening another fullscreen NUI or changing focus. |
| `RefreshKeybinds` | Client | None | `true` when the scan starts; `false`, optional reason when rejected | Force a new client scan after dynamic command or mapping changes. |
| `InvalidateKeybindCache` | Client | `reason` (optional string) | `true` | Mark cached results as outdated without always forcing an immediate scan. |
| `RegisterCommandMetadata` | Client | `commandName`, `metadata` | `bool` | Give a command a clean label and description from the resource that owns it. |
| `UnregisterCommandMetadata` | Client | `commandName` | `bool` | Remove metadata previously registered at runtime. |

### `OpenKeybinds`

Use this when another client resource owns the interaction that opens the keyboard.

```lua
local opened = exports['smdz_keybinds']:OpenKeybinds(
    'driving_school_tutorial'
)

if opened == false then
    print('[driving_school] Keybind UI is not available or is already busy.')
end
```

Example with `ox_target`:

```lua
exports.ox_target:addBoxZone({
    coords = vec3(215.76, -810.12, 30.73),
    size = vec3(1.0, 1.0, 1.5),
    options = {
        {
            name = 'open_server_keybinds',
            label = 'View Server Controls',
            icon = 'fa-solid fa-keyboard',
            onSelect = function()
                exports['smdz_keybinds']:OpenKeybinds(
                    'ox_target_help_point'
                )
            end
        }
    }
})
```

Use the optional `source` argument to identify where the UI was opened. That value is passed to the `smdz_keybinds:client:opened` lifecycle event.

### `CloseKeybinds`

Use this before opening another interface that needs NUI focus:

```lua
exports['smdz_keybinds']:CloseKeybinds()

Wait(150)

OpenMyCustomMenu()
```

It is safe to call even when the keybind interface is already closed.

### `RefreshKeybinds`

Use this when your client resource has dynamically created, removed, or changed controls and you need an immediate scan:

```lua
local started, reason =
    exports['smdz_keybinds']:RefreshKeybinds()

if not started then
    print((
        '[my_resource] Keybind refresh was not started: %s'
    ):format(tostring(reason or 'unavailable')))
end
```

Typical reasons for using it:

- A command was registered after the resource had already started.
- A configurable control was enabled or disabled at runtime.
- Your resource changed its key mapping setup.
- You want to refresh immediately rather than wait for automatic resource detection.

Do not call this export repeatedly in a loop. The script already includes scan protection, debounce logic, caching, and a manual UI cooldown.

### `InvalidateKeybindCache`

Use this when the existing scan is no longer reliable, but you do not necessarily need an immediate refresh:

```lua
exports['smdz_keybinds']:InvalidateKeybindCache(
    'custom_controls_changed'
)
```

Behavior:

- If the keybind UI is closed, the next opening performs a fresh scan.
- If the keybind UI is open, the script schedules an automatic refresh.
- The optional reason helps identify why the cache was invalidated in lifecycle data and debug output.

This is usually better than `RefreshKeybinds` when multiple changes happen close together.

### `RegisterCommandMetadata`

Use this in the client resource that owns a command. It lets that resource provide a player-friendly title and explanation without editing the central `config.lua`.

```lua
CreateThread(function()
    exports['smdz_keybinds']:RegisterCommandMetadata(
        '+vehicle_cruise_control',
        {
            label = 'CRUISE CONTROL',
            description = 'Enable or disable the vehicle cruise control system.'
        }
    )
end)
```

A complete command integration:

```lua
RegisterCommand('+vehicle_cruise_control', function()
    ToggleCruiseControl()
end, false)

RegisterCommand('-vehicle_cruise_control', function()
end, false)

RegisterKeyMapping(
    '+vehicle_cruise_control',
    'Toggle cruise control',
    'keyboard',
    'Y'
)

CreateThread(function()
    exports['smdz_keybinds']:RegisterCommandMetadata(
        '+vehicle_cruise_control',
        {
            label = 'CRUISE CONTROL',
            description = 'Maintains the current vehicle speed until canceled.'
        }
    )
end)
```

Runtime metadata takes effect without restarting SMDZ Dynamic Keybinds. If the UI is open, its data is scheduled for refresh.

Use `Config.CommandOverrides` instead when the server owner should control the label centrally.

### `UnregisterCommandMetadata`

Use this when a resource temporarily registers metadata or disables a feature during runtime:

```lua
local removed =
    exports['smdz_keybinds']:UnregisterCommandMetadata(
        '+vehicle_cruise_control'
    )

print((
    '[my_resource] Metadata removed: %s'
):format(tostring(removed)))
```

Recommended cleanup pattern:

```lua
AddEventHandler('onResourceStop', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end

    exports['smdz_keybinds']:UnregisterCommandMetadata(
        '+vehicle_cruise_control'
    )
end)
```

The export returns `false` if the command name is invalid or no runtime metadata exists for it.

### Choosing Events or Exports

| Situation | Recommended integration |
|---|---|
| Another client script needs to open or close the UI directly | Client export |
| A loosely coupled client script should request an action | Public client event |
| A server command should open the UI for one player | `TriggerClientEvent` using the public client event |
| Your resource needs to know when the UI opened or closed | Lifecycle event listener |
| Your resource owns a command and wants to provide its label | `RegisterCommandMetadata` client export |
| Several control changes happen in a short period | `InvalidateKeybindCache` |
| A dynamic control must appear immediately | `RefreshKeybinds` |

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource does not start | Check the client and server consoles for red errors.<br>Make sure the folder is named exactly `smdz_keybinds`.<br>Confirm `ensure smdz_keybinds` is present in `server.cfg`.<br>Verify both `client/main.lua` and `server/main.lua` are included. |
| UI does not open | Confirm the server-side script is running and the client/server handshake succeeds.<br>Keep `Config.Runtime.ProtocolVersion` synchronized with the resource version.<br>Check that another NUI resource is not holding focus. |
| Screen becomes black when the resource starts | Replace the complete resource instead of mixing old and new `web/dist` files.<br>Clear the FiveM client cache after replacing an older build.<br>Confirm FiveM loads `web/dist/index.html` from the current package. |
| No keybinds are displayed | Confirm the other resources register client commands through `RegisterCommand` and key mappings through `RegisterKeyMapping`.<br>Commands using only control natives may not expose a registered key mapping.<br>Check `Config.ExcludedResources`, `Config.ExcludedCommands`, and `Config.Detection`. |
| A command name is difficult to understand | Add a custom label and description under `Config.CommandOverrides`, or register metadata through `RegisterCommandMetadata`. |
| Resource alias tooltip is not visible | Set `Config.Interface.ResourceAliasTooltip.Enabled = true`.<br>When `OnlyWhenAliased` is enabled, the tooltip only appears when the displayed alias differs from the original resource name.<br>Confirm the resource exists in `Config.ResourceAliases`. |
| Refresh button shows a countdown | This is the configured server-authoritative per-player cooldown.<br>Change `Config.Technical.ServerRefreshCooldown.Seconds` or disable the cooldown if needed. |
| Marker does not appear | Confirm `Config.Marker.Enabled` and the location's `enabled` value are both `true`.<br>Verify the coordinates and draw distance.<br>Both `vector3` and `vector4` are supported. |
| Marker immediately reopens the UI | Leave the marker area until passing `Config.Marker.ResetDistance`, then return.<br>Increase the reset distance if the marker is placed in a narrow area. |
| Key press sound is not audible | Confirm `Config.Interface.KeyPressSound.Enabled = true`.<br>Check the configured WAV path and increase `Volume` carefully.<br>Make sure the sound file exists inside the NUI files included by the manifest. |
| Chat suggestion is missing | Confirm FiveM's `chat` resource is running.<br>The `/keybinds` command still works without the suggestion.<br>Check `Config.Command.Suggestion`. |


---

# ❓ **FREQUENTLY ASKED QUESTIONS (FAQ):**

| Question | Answer |
|---|---|
| Does SMDZ Dynamic Keybinds require ESX, QBCore, or Qbox? | No. The resource is completely standalone and can run alongside any FiveM framework. |
| Does the resource require a database? | No. Keybind detection, aliases, configuration, cache data, and cooldown state do not require SQL. |
| Does it detect the player's current customized keybinds? | Yes. It attempts to resolve the player's current FiveM input mapping, including keys changed through FiveM settings, rather than displaying only the original default key. |
| Can it detect every control used by every resource? | It detects registered client commands and resolvable key mappings. Controls implemented only through natives such as `IsControlJustPressed` without `RegisterCommand` or `RegisterKeyMapping` may not be available automatically. |
| Why is a command displayed as unassigned? | The command is registered, but FiveM did not return a current key mapping for it. The player may have removed the mapping, the command may not use `RegisterKeyMapping`, or the mapping may not be resolvable. |
| Can I rename unclear commands? | Yes. Use `Config.CommandOverrides` for central configuration or the client export `RegisterCommandMetadata` from the resource that owns the command. |
| Can I replace technical resource names with clean categories? | Yes. Add entries to `Config.ResourceAliases`, such as `qb-core = FRAMEWORK`, `pma-voice = VOICE CHAT`, or `renewed-banking = BANKING`. |
| Can players see the original resource name behind an alias? | Yes. Enable `Config.Interface.ResourceAliasTooltip`. Hovering over an aliased resource displays the original folder name. |
| Can I exclude an entire resource from the keyboard? | Yes. Add its exact folder name to `Config.ExcludedResources`. |
| Can I exclude only one command? | Yes. Add its exact registered command name to `Config.ExcludedCommands`. |
| Why does one key show a conflict? | Multiple detected commands are mapped to the same key. Some shared mappings are intentional. Add intentionally shared keys to `Config.Conflicts.IgnoredKeys` when needed. |
| Can players hide assigned or conflict tags? | Yes. The interface includes controls for hiding assigned tags, conflict tags, or both. The preference is stored locally for the player. |
| Are the documented exports client-side or server-side? | All public exports are client-side. There are currently no public server exports. |
| How can a server script open the UI for a player? | Use `TriggerClientEvent('smdz_keybinds:client:open', playerId)`. The target player's client still performs the normal validation and scan. |
| Should another resource call the internal server events? | No. Internal server events require the temporary handshake token and are reserved for the built-in validation, statistics, and refresh cooldown protocol. |
| What is the difference between `RefreshKeybinds` and `InvalidateKeybindCache`? | `RefreshKeybinds` immediately attempts a new scan. `InvalidateKeybindCache` marks existing data as outdated and refreshes later when needed, making it better for grouped changes. |
| Why does the refresh button show a countdown? | Manual UI refreshes use a server-authoritative per-player cooldown. This prevents spam and repeated expensive scans. |
| Does automatic refresh use the same player cooldown? | Resource start and stop detection uses the internal automatic refresh flow. The visible server cooldown primarily protects manual refresh requests from the UI. |
| Can I disable the marker and keep the command? | Yes. Set `Config.Marker.Enabled = false`. The command, events, exports, and optional key mapping continue to work. |
| Can I add multiple help markers? | Yes. Add more entries to `Config.Marker.Locations`. Each entry can use `vector3` or `vector4`, an individual `enabled` state, and optional custom text. |
| Is the React source required on the production server? | The included `web/dist` is enough to run the UI. Keep `web/src` and build files only when you want to edit and rebuild the interface. |
| How do I rebuild the protected UI? | Run `npm install` and then `npm run build:protected` inside the `web` directory, or use the included Windows/Linux build script. |
| Why do my frontend changes not appear in FiveM? | Rebuild the UI, replace the complete `web/dist` folder, restart the resource, and clear the FiveM client cache when an older bundle remains cached. |
| Can I change the colors without editing React? | Yes. The primary sky-blue accent and gauge colors are configured through `Config.Interface`. |
| Can I change the displayed server name? | Yes. Set `Config.Interface.BrandName` to the name you want displayed above the title. |
| Does the script support multiple languages? | Yes. It includes English, Spanish, French, German, Portuguese, Italian, and Dutch locale files. |
| Does stopping the resource release NUI focus? | Yes. The client cleanup closes the interface and releases focus when the resource stops. |


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
