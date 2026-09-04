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
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY (FREE, NO PAID)
</p>

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

> **IMPORTANT:** Following a customer report, we must warn you that if you have scripts that modify handling, for example, RealisticVehicleFailure, some values ​​in our handling editor may not be applicable and you may > receive an error, as other scripts overwrite the handling.

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_handling_editor`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.2.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>


**Short description:**
`SMDZ Handling Editor` allows authorized staff or developers to edit vehicle handling values live from an animated in-game interface, save temporary presets, restore original values, and export a ready-to-use `handling.meta` XML entry.

**The free edition is protected with FiveM Asset Escrow while keeping configuration, locales, notification integrations, and private server settings editable. A paid open-source edition can be offered separately for customers who require unrestricted code access and deeper customization.**

---

# ⭐ **FEATURES:**

⚡ **Real-Time Handling Editing** — Modify vehicle handling values instantly while staying in-game.
🚗 **Live Vehicle Testing** — Drive, brake, steer, and test every adjustment immediately without restarting the resource.
🛠️ **36 Editable Handling Values** — Fine-tune engine power, top speed, braking, traction, steering, suspension, weight, damage, and much more.
💾 **Preset System** — Save, load, overwrite, and delete temporary handling presets during your current session.
📄 **handling.meta Export** — Generate a complete XML configuration ready to copy directly into your `handling.meta` file.
📋 **One-Click XML Copy** — Copy the generated handling configuration directly from the export window with a single click.
🔎 **Search & Categories** — Quickly find handling values using the built-in search bar and organized handling categories.
🎨 **Configurable UI Colors** — Customize the complete interface color palette directly from the configuration without rebuilding the React project.
🔔 **Notification Bridge** — Supports multiple notification providers through a simple and configurable bridge system.
🛡️ **Flexible Access Control** — Restrict access using ACE permissions, ESX/QBCore/Qbox framework groups, or a whitelist of player identifiers such as Discord and Rockstar licenses.
📊 **Discord Webhook Logs** — Optional translated Discord embeds with detailed information about important Handling Editor activity.


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

# ⚙️ **CONFIGURATION:**
All in `config.lua`:

```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



--[[
    ╔══════════════════════════════════════════════════════════════════════════╗
    ║                    SMDZ STUDIOS • HANDLING EDITOR                       ║
    ║                         SHARED CONFIGURATION                            ║
    ╚══════════════════════════════════════════════════════════════════════════╝
    IMPORTANT:
    • This file is shared with clients. Never place webhooks, passwords, API keys, tokens, or other private values here.
    • Server-only logging, webhook, console, and security settings are stored in server/config.lua.
    CONFIGURATION INDEX
    [01] General settings
    [02] Access and vehicle restrictions
    [03] Editor behaviour and controls
    [04] Notification settings
    [05] Preset settings
    [06] User interface settings
    [07] Export settings
    [08] Handling categories and field overrides
]]
Config = {}

--============================================================================--
-- [01] GENERAL SETTINGS
--============================================================================--
Config.General = {
    Locale = 'en', -- Language used by notifications and UI labels. Available: 'en', 'es', 'fr', 'de', 'pt', 'tr', 'it', 'nl'.
    Command = 'handling', -- Command used to open or close the handling editor.
    ResourceLabel = 'SMDZ Handling Editor', -- Human-readable resource name used in notifications and chat suggestions.
    Debug = false, -- Enables translated diagnostic prints for development and support.
    DebugRateLimitMs = 2500, -- Minimum delay in ms between repeated high-frequency debug messages.
}

--============================================================================--
-- [02] ACCESS AND VEHICLE RESTRICTIONS
--============================================================================--
Config.Access = {
    Enabled = true, -- Enables server-side access validation before a player can use the editor.
    Mode = 'any', -- 'any' = one enabled method grants access. 'all' = every enabled method must grant access.
    AllowConsole = false, -- Allows the command from server console. The editor itself still requires a player.

    Ace = {
        Enabled = true, -- Enables ACE permission checks.
        Permission = 'smdz.handling', -- Example: add_ace group.admin smdz.handling allow
    },

    Framework = {
        Enabled = true, -- Enables framework group/permission checks.
        Provider = 'auto', -- Available: auto, esx, qbcore, qbox. Common aliases are accepted.
        Groups = { -- Groups accepted for each framework. Custom groups such as owner are supported when they exist in the framework/ACL.
            esx = { 'owner', 'admin', 'superadmin' },
            qbcore = { 'owner', 'god', 'admin' },
            qbox = { 'owner', 'god', 'admin' },
        },
    },

    Identifiers = {
        Enabled = false, -- Enables exact FiveM identifier allowlist checks.
        Allowed = {}, -- Example: { 'discord:492311610036322305', 'license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }
    },

    DriverOnly = true, -- Requires the player to occupy the driver seat before opening the editor.
    AllowedModels = {}, -- Optional model whitelist. Empty allows every model not explicitly blocked.
    BlockedModels = {}, -- Optional model blacklist. Example: { 'rhino', 'lazer', `oppressor2` }
    BlockedClasses = {}, -- Optional GTA vehicle class blacklist. Example: { 14, 15, 16 }
}

--============================================================================--
-- [03] EDITOR BEHAVIOUR AND CONTROLS
--============================================================================--
Config.Editor = {
    KeepGameInput = false, -- Keeps normal game controls active while NUI has focus.
    BlockCameraMovement = true, -- Disables camera/look controls while the editor is open.
    CloseAnimationDuration = 240, -- UI closing animation duration in milliseconds before focus is released.
    CloseControl = 177, -- Control used to close the editor. 177 = BACKSPACE / Phone Cancel. Use false to disable.
    CloseWhenLeavingVehicle = true, -- Automatically closes the editor when the player leaves the edited vehicle.
    CloseWhenVehicleIsDestroyed = true, -- Automatically closes the editor when the edited vehicle is destroyed.
    MaxVehicleDistance = 8.0, -- Maximum player distance from the edited vehicle in metres. Use 0 or false to disable.
    ResetChangesOnResourceStop = false, -- Restores original values if this resource stops while the editor is open.
    DisabledControls = { -- Controls disabled every frame while the editor is open.
        24, 25, 47, 58, 140, 141, 142, 143, 177, 200, 257, 263, 264,
    },
    CameraControls = { -- Camera/look controls disabled every frame when BlockCameraMovement is true.
        1, 2, 3, 4, 5, 6, 26,
    },
}

--============================================================================--
-- [04] NOTIFICATION SETTINGS
--============================================================================--
Config.Notifications = {
    Enabled = true, -- Enables notifications sent by the resource.
    -- Notification provider to use.
    -- Use 'auto' to follow the priority configured in bridge/notifications.lua.
    -- Built-in values: auto, ox_lib, okokNotify, origen_notify, wasabi_notify,
    -- wasabi_uikit, rtx_notify, codem-notification, vms_notifyv2, esx_notify,
    -- brutal_notify, FL-Notify, gtm-ui, RO_Notify, RxNotify, chat, native, none.
    Provider = 'auto',
    Fallback = 'chat', -- Provider used when the selected provider is unavailable or returns an error.
    Defaults = {
        Title = 'SMDZ Handling Editor', -- Default notification title.
        Subtitle = 'SMDZ Studios', -- Optional subtitle used by providers that support one.
        Type = 'info', -- Default type: info, success, warning, or error.
        Duration = 5000, -- Default notification duration in milliseconds.
        Position = 'top-right', -- Default screen position used by compatible providers.
        Icon = 'fa-solid fa-sliders', -- Default icon used by compatible providers.
        Color = '#d8ac45', -- Default accent colour used by compatible providers.
        Sound = true, -- Enables notification sounds when supported.
        TTS = false, -- Enables text-to-speech when supported.
        Confetti = false, -- Enables confetti effects when supported.
    },
    ProviderOptions = {
        RxNotify = {
            Position = 'tr', -- RxNotify position: tl, tc, tr, lc, rc, bl, bc, or br.
        },
    },
    ChatPrefix = 'SMDZ Studios', -- Prefix shown by the built-in chat fallback.
    ChatColor = { 218, 171, 57 }, -- RGB colour shown by the built-in chat fallback.
}

--============================================================================--
-- [05] PRESET SETTINGS
--============================================================================--
Config.Presets = {
    Maximum = 20, -- Maximum number of presets stored during the current player session.
    MaximumNameLength = 32, -- Maximum number of characters allowed in a preset name.
    AllowOverwrite = true, -- Allows saving over an existing preset with the same name.
}

--============================================================================--
-- [06] USER INTERFACE SETTINGS
--============================================================================--
Config.Interface = {
    PanelWidth = 640, -- Default editor panel width in pixels.
    DefaultPosition = { -- Initial editor position in pixels from the top-left corner.
        x = 24,
        y = 24,
    },
    DecimalPrecision = 3, -- Number of decimal places displayed in numeric fields. Visible precision is capped at four.
}

--============================================================================--
-- [07] EXPORT SETTINGS
--============================================================================--
Config.Export = {
    Enabled = true, -- Enables the handling.meta XML export button and NUI callback.
    HandlingNameUppercase = true, -- Converts the exported handling name to uppercase.
    CopyButton = true, -- Shows the copy-to-clipboard button inside the export modal.
}

--============================================================================--
-- [08] HANDLING CATEGORIES AND FIELD OVERRIDES
--============================================================================--
Config.Handling = {
    CategoryOrder = { -- Category display order used by the UI navigation tabs.
        'engine',
        'brakes',
        'traction',
        'suspension',
        'damage',
    },
    EnabledCategories = {
        engine = true, -- Enables engine, drivetrain, speed, mass, and drag values.
        brakes = true, -- Enables brake, handbrake, and steering values.
        traction = true, -- Enables tyre grip and traction values.
        suspension = true, -- Enables suspension, anti-roll, and ride-height values.
        damage = true, -- Enables collision, weapon, deformation, and engine damage values.
    },
    FieldOverrides = {}, -- Override catalog fields here. Keys: enabled, min, max, step, type, category.
}
```

All in `server/config.lua`:
```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



--[[
    ╔══════════════════════════════════════════════════════════════════════════╗
    ║                    SMDZ STUDIOS • HANDLING EDITOR                       ║
    ║                       SERVER-ONLY CONFIGURATION                         ║
    ╚══════════════════════════════════════════════════════════════════════════╝
    IMPORTANT:
    • This file is loaded only by the server.
    • Store webhook URLs and all private logging options here.
    CONFIGURATION INDEX
    [01] Logging events
    [02] Discord webhook
    [03] Server console logs
    [04] Security and payload validation
]]

ServerConfig = {}

--============================================================================--
-- [01] LOGGING EVENTS
--============================================================================--
ServerConfig.Logging = {
    Enabled = true, -- Enables audit event processing globally.
    Events = {
        open = true, -- Logs editor opening events.
        close = true, -- Logs editor closing events.
        reset = true, -- Logs handling reset events.
        export = true, -- Logs handling XML export events.
        preset_save = true, -- Logs preset creation and overwrite events.
        preset_load = true, -- Logs preset loading events.
        preset_delete = true, -- Logs preset deletion events.
    },
}

--============================================================================--
-- [02] DISCORD WEBHOOK
--============================================================================--
ServerConfig.Webhook = {
    Enabled = false, -- Enables Discord webhook embeds for enabled audit events.
    Url = '', -- Private Discord webhook URL.
    Username = 'SMDZ Studios • Handling Logs', -- Username displayed by the Discord webhook message.
    AvatarUrl = '', -- Optional avatar URL displayed by the Discord webhook message.
    Mention = '', -- Optional role mention, for example '<@&123456789012345678>'. Empty disables mentions.
    IncludeIdentifiers = true, -- Includes player license, Discord, FiveM, Steam, and related identifiers.
    IncludeCoordinates = true, -- Includes the player's current server-side coordinates.
    IncludeEndpoint = false, -- Includes the player's network endpoint/IP. Keep false unless genuinely required.
    Colors = { -- Decimal Discord embed colours used for each audit action.
        open = 14199877,
        close = 9807270,
        reset = 15105570,
        export = 3447003,
        preset_save = 5763719,
        preset_load = 10181046,
        preset_delete = 15548997,
    },
}

--============================================================================--
-- [03] SERVER CONSOLE LOGS
--============================================================================--
ServerConfig.Console = {
    Enabled = true, -- Prints enabled player audit actions in the FiveM server console.
}

--============================================================================--
-- [04] SECURITY AND PAYLOAD VALIDATION
--============================================================================--
ServerConfig.Security = {
    AuditCooldownMs = 650, -- Minimum delay in ms between identical audit actions per player.
    MaximumTextLength = 64, -- Maximum accepted length for player-supplied text included in logs.
    ValidateVehicleContext = true, -- Replaces client vehicle plate/model information with server-side entity data.
    IgnoreMalformedPayloads = true, -- Removes malformed optional values instead of rejecting the entire audit payload.
}

```

All in `config_ui_colors.lua`:

```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / /
--  ___) | |  | | |_| |/ /_
-- |____/|_|  |_|____/____|
--  ____  _____ _   _ ____ ___ ___  ____
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___|
-- \___ \  | | | | | | | | | | | | \___ \
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/



--[[
    ╔══════════════════════════════════════════════════════════════════════════╗
    ║                 SMDZ STUDIOS • UI COLOUR CONFIGURATION                  ║
    ╚══════════════════════════════════════════════════════════════════════════╝
    IMPORTANT:
    • Every visual colour used by the React NUI is centralised in this file.
    • Changes are sent to the UI when the editor opens, so no Vite rebuild is required.
    • Restart the resource after editing this file.
    COLOUR INDEX
    [01] Core accent and base colours
    [02] Panel, header, and status colours
    [03] Button and action colours
    [04] Navigation, search, and field colours
    [05] Footer, modal, preset, and XML colours
    [06] Scrollbar and toast colours
]]
Config.UIColors = {

    --============================================================================--
    -- [01] CORE ACCENT AND BASE COLOURS
    --============================================================================--
    Accent = '#d8ac45', -- Main accent colour used by sliders, active tabs, icons, and highlights.
    White = '#fff', -- Base white colour used by colour mixing and bright hover states.
    Black = '#000', -- Base black colour used by colour mixing and strong borders.
    TextPrimary = '#f4f4f5', -- Primary text colour used by the main editor panel.

    --============================================================================--
    -- [02] PANEL, HEADER, AND STATUS COLOURS
    --============================================================================--
    PanelBackground = 'rgba(10, 11, 14, .965)', -- Main editor panel background colour.
    PanelShadow = 'rgba(0,0,0,.66)', -- Outer panel shadow colour.
    PanelOuterRing = 'rgba(0,0,0,.35)', -- Secondary dark ring around the main panel.
    HighlightStrong = 'rgba(255,255,255,.08)', -- Bright internal highlight used on elevated surfaces.
    SurfaceSoft = 'rgba(255,255,255,.035)', -- Soft translucent surface colour used by buttons and gradients.
    SurfaceFaint = 'rgba(255,255,255,.025)', -- Very subtle surface highlight used in backgrounds.
    PatternLine = 'rgba(255,255,255,.012)', -- Diagonal panel pattern line colour.
    BorderStrong = 'rgba(0,0,0,.62)', -- Strong dark border used by panels and form controls.
    BorderSoft = 'rgba(255,255,255,.07)', -- Soft separator border used by headers and modals.
    BorderMedium = 'rgba(255,255,255,.065)', -- Medium separator border used by code and modal surfaces.
    BorderSubtle = 'rgba(255,255,255,.055)', -- Subtle separator border used by search, footer, and sections.
    EyebrowText = '#8f9198', -- Small brand eyebrow text colour.
    LiveText = '#9fd7ab', -- Live-editing label colour.
    Success = '#66d17a', -- Main green success colour.
    SuccessGlow = 'rgba(102,209,122,.08)', -- Soft green glow behind the live status indicator.
    VehicleText = '#8c8e95', -- Vehicle name and plate text colour.
    GripText = '#4d4f55', -- Header drag-grip icon colour.

    --============================================================================--
    -- [03] BUTTON AND ACTION COLOURS
    --============================================================================--
    ButtonText = '#a7a8ad', -- Default text and SVG colour for the main action buttons.
    ButtonBackground = 'rgba(255,255,255,.045)', -- Default background for Presets, Reset, Export, and matching buttons.
    ButtonBorder = 'rgba(0,0,0,.58)', -- Default border for action and icon buttons.
    ButtonHoverBackground = 'rgba(255,255,255,.075)', -- Hover background for standard action buttons.
    IconButtonText = '#777980', -- Default colour for neutral icon buttons.
    DangerText = '#ff8585', -- Red text and SVG colour used by close and delete actions.
    DangerBorder = 'rgba(255,77,77,.34)', -- Permanent red border used by close buttons.
    DangerBackground = 'rgba(255,65,65,.14)', -- Permanent red background used by close buttons.
    DangerHoverBorder = 'rgba(255,77,77,.5)', -- Red close-button border shown on hover.
    DangerHoverBackground = 'rgba(255,65,65,.24)', -- Red close-button background shown on hover.
    PrimaryButtonText = '#17130a', -- Text colour used by gold primary buttons.
    SecondaryButtonText = '#b8bac0', -- Text colour used by secondary modal buttons.
    DangerButtonStart = '#d94b4b', -- Starting gradient colour of destructive confirmation buttons.
    DangerButtonEnd = '#a92f38', -- Ending gradient colour of destructive confirmation buttons.
    DangerButtonBorder = '#7f2028', -- Border colour of destructive confirmation buttons.
    DangerButtonShadow = 'rgba(220,64,72,.16)', -- Shadow colour of destructive confirmation buttons.
    DangerButtonHoverStart = '#ee5f5f', -- Starting hover gradient colour of destructive buttons.
    DangerButtonHoverEnd = '#bc3842', -- Ending hover gradient colour of destructive buttons.

    --============================================================================--
    -- [04] NAVIGATION, SEARCH, AND FIELD COLOURS
    --============================================================================--
    CategoryText = '#696b72', -- Inactive category tab text and SVG colour.
    CategoryHoverText = '#b7b8bc', -- Category tab text and SVG colour on hover.
    CategoryActiveText = '#f4e5bc', -- Active category tab text and SVG colour.
    SearchIconText = '#5e6067', -- Search icon colour.
    SearchBackground = 'rgba(0,0,0,.24)', -- Search input background colour.
    InputText = '#d5d5d8', -- Search input text colour.
    PlaceholderText = '#55575e', -- Placeholder and empty-state text colour.
    CardBackgroundStart = 'rgba(255,255,255,.033)', -- Starting gradient colour of handling value cards.
    CardBorder = 'rgba(0,0,0,.46)', -- Default handling value card border.
    CardHoverEnd = 'rgba(255,255,255,.016)', -- Ending gradient colour of handling cards on hover.
    FieldTitle = '#dedee1', -- Handling field title colour.
    TechnicalText = '#61636b', -- Technical handling field name colour.
    HelpText = '#62646b', -- Information tooltip icon colour.
    TooltipText = '#c9c9cd', -- Tooltip body text colour.
    TooltipBackground = '#15161a', -- Tooltip background colour.
    TooltipBorder = 'rgba(255,255,255,.09)', -- Tooltip border colour.
    TooltipShadow = 'rgba(0,0,0,.48)', -- Tooltip shadow colour.
    ChangedText = '#c9af6c', -- Original-value badge text colour.
    RangeLimitText = '#4f5158', -- Minimum and maximum range label colour.
    SliderThumbBorder = '#1a1b1f', -- Dark ring around slider handles.
    ValueText = '#efe6cc', -- Numeric value input text colour.
    ValueBackground = 'rgba(0,0,0,.27)', -- Numeric value input background colour.

    --============================================================================--
    -- [05] FOOTER, MODAL, PRESET, AND XML COLOURS
    --============================================================================--
    FooterBackground = 'rgba(0,0,0,.12)', -- Editor footer background colour.
    KeyText = '#73757c', -- Keyboard hint text colour.
    KeyBackground = 'rgba(255,255,255,.04)', -- Keyboard hint background colour.
    KeyBorder = 'rgba(255,255,255,.06)', -- Keyboard hint border colour.
    ModalText = '#efeff1', -- Default modal text colour.
    ModalBackground = '#101115', -- Modal panel background colour.
    ModalBorder = 'rgba(0,0,0,.68)', -- Modal panel border colour.
    ModalShadow = 'rgba(0,0,0,.72)', -- Modal outer shadow colour.
    ModalOuterRing = 'rgba(0,0,0,.4)', -- Secondary dark ring around modal panels.
    ConfirmOverlay = 'rgba(0,0,0,.38)', -- Background overlay behind destructive confirmation modals.
    ModalTitleText = '#ececee', -- Modal title text colour.
    ModalScrollbarTrack = '#0a0b0e', -- Firefox modal scrollbar track colour.
    ModalDescriptionText = '#7e8087', -- Modal description and session note text colour.
    ConfirmIconText = '#ff7272', -- Warning icon colour inside confirmation dialogs.
    ConfirmIconBackground = 'rgba(255,80,90,.09)', -- Warning icon container background.
    ConfirmIconBorder = 'rgba(255,80,90,.18)', -- Warning icon container border.
    ConfirmBodyText = '#a9abb1', -- Confirmation message text colour.
    ConfirmNameText = '#f0f0f2', -- Preset name colour inside confirmation dialogs.
    CodeBackground = '#090a0d', -- Exported XML code background colour.
    CodeText = '#aeb0b6', -- Exported XML code text colour.
    PresetInputText = '#e6e6e8', -- Preset name input text colour.
    PresetInputBackground = 'rgba(0,0,0,.26)', -- Preset name input background colour.
    PresetRowBorder = 'rgba(0,0,0,.52)', -- Saved preset row border colour.
    PresetText = '#d6d6d9', -- Saved preset name colour.
    DeleteHoverBorder = 'rgba(255,90,90,.22)', -- Delete preset button border on hover.
    DeleteHoverBackground = 'rgba(255,90,90,.08)', -- Delete preset button background on hover.

    --============================================================================--
    -- [06] SCROLLBAR AND TOAST COLOURS
    --============================================================================--
    ScrollbarMixBase = '#35363b', -- Dark colour mixed into the main editor scrollbar.
    ScrollbarTrackTransparent = 'rgba(0,0,0,.15)', -- Transparent scrollbar track used by the editor list.
    ScrollbarTrack = 'rgba(0,0,0,.16)', -- Scrollbar track used by the editor list.
    ScrollbarThumbBase = '#3a3b40', -- Dark colour mixed into scrollbar thumbs.
    ScrollbarThumbBorder = 'rgba(10,11,14,.9)', -- Border around the main editor scrollbar thumb.
    ScrollbarTrackSolid = '#0b0c0f', -- Solid track used by modal and XML scrollbars.
    ScrollbarThumbSolid = '#34353a', -- Solid dark colour mixed into modal scrollbar thumbs.
    ToastText = '#e9e9eb', -- Toast notification text colour.
    ToastBackground = 'rgba(19,20,24,.96)', -- Toast notification background colour.
    ToastShadow = 'rgba(0,0,0,.5)', -- Toast notification shadow colour.
    ToastSuccess = '#6bd47e', -- Success stripe colour used by UI toasts.
    ToastError = '#f06d6d', -- Error stripe colour used by UI toasts.
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

# 💻 **PLANNED EDITIONS:**

| Edition | Planned availability | Source access | Editable areas | Intended audience |
|---|---|---|---|---|
| **Free Escrow Edition** | Free | Protected core through FiveM Asset Escrow | Shared config, UI colours, locales, notification bridge, and private server configuration | Server owners who want a ready-to-use handling editor |
| **Paid Open Source Edition** | Paid | Full source access, subject to the supplied licence | Complete resource and integration logic | Developers who need extensive modifications, custom systems, or resale-project integration |

> Final pricing, licence terms, included files, and support conditions are defined by the official store listing for each edition.

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
### 🚫 DO NOT CHANGE THE RESOURCE FOLDER NAME

- ⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. (Check: https://smdz-studios.tebex.io/legal)
- 🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
