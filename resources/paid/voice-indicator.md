<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/XuUPqHkzAqI"
    title="smdz_voiceindicator showcase"
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
  data-resource="smdz_voiceindicator"
></div>


---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_voiceindicator`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone (framework-independent, ESX/QBCore compatible)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>

**Short description:**
A configurable and performance-focused 3D voice indicator for FiveM. Players can personalize the icon, size, colors, and vehicle visibility on their own screen, while authorized administrators can temporarily disable all indicators server-wide during large events or high-load situations.
---

# ⭐ **FEATURES:**

* 🎙️ Displays an icon above nearby players while they are speaking.
* 👤 Can display the local player’s own indicator.
* 🎨 Supports separate icons and colors for:
  * Normal proximity voice.
  * Radio transmissions.
  * Phone calls.
* 🧱 Uses line-of-sight checks to reduce indicators appearing through solid walls.
* 💾 Stores each player’s personal preferences in SQL.
* 👁️ Keeps appearance settings local to the viewer.
* 🛡️ Includes a global administrator switch with ACE and identifier permissions.
* ⚡ Important optimization: Stops scanning, classifying, and rendering indicators while globally disabled, or if you are far away from any player or through walls, you avoid rendering.

<div class="voiceindicatorresmon" id="voiceindicatorresmon" data-mode="ox-to-qb">
  <div class="item-voiceindicatorresmon">
    <img src="/assets/other/resmon-voice-indicator.png" alt="voiceindicatorresmon" data-no-zoom />
  </div>

> A player's selected appearance only affects what that player sees. It does not force the same icon, size, or colors onto other players.
---

# 📦 **REQUIREMENTS:**

### Mandatory dependencies

- **FiveM server:** A current recommended FiveM server artifact.
- **Voice resource:** `pma-voice`.
- **Database adapter:** `oxmysql`.
- **Database:** MySQL or MariaDB supported by `oxmysql`.

### Framework support

No framework is required.


> Administrator access is handled exclusively through ACE permissions and/or configured FiveM identifiers.

### Recommended server setup

- Start `oxmysql` before this resource.
- Start `pma-voice` before this resource.
- Keep OneSync enabled for reliable replicated player state handling.
- Use the exact resource folder name `smdz_voiceindicator`.

---

# 📥 **INSTALLATION:**

1. Download `smdz_voiceindicator.zip`.
2. Extract the resource into your FiveM resources directory:

```text
resources/[smdz]/smdz_voiceindicator
```

3. Do not rename the folder. The required resource name is:

```text
smdz_voiceindicator
```

4. Import `smdz_voiceindicator.sql` into your database.

The resource can also create and migrate its tables automatically when this option remains enabled:

```lua
Config.Database.AutoCreateTable = true
```

5. Configure `config.lua`.
6. Configure private server settings in:

```text
server/config_server.lua
```

7. Add the resources to `server.cfg` in the correct order:

```cfg
## Database
ensure oxmysql

## Voice
ensure pma-voice

## SMDZ Studios
ensure smdz_voiceindicator
```

8. Add the administrator ACE permission when required:

```cfg
add_ace group.admin smdz_voiceindicator.admin allow
```

9. Restart the server or start the resource manually:

```text
start smdz_voiceindicator
```

10. Check the server console for dependency, SQL, localization, or resource-name errors.

### Database tables

The resource uses two tables:

| Table | Purpose |
|---|---|
| `smdz_voiceindicator_preferences` | Stores each player's personal viewer preferences. |
| `smdz_voiceindicator_settings` | Stores global resource settings, including the global enabled state. |

The player preferences table stores:

- Primary player identifier.
- Personal enabled state.
- Vehicle visibility preference.
- Icon scale.
- Selected normal-voice icon.
- Normal voice color.
- Radio color.
- Phone color.
- Creation and update timestamps.
---

# ⚙️ **CONFIGURATION:**

```lua
Config = {}

-- Language used by the UI, notifications, server messages, and webhook embeds.
-- Available locales included by default: 'en', 'es', 'fr', and 'de'.
Config.Locale = 'en'

--[[
================================================================================
                            SMDZ VOICE INDICATOR
                              CONFIGURATION FILE
================================================================================

INDEX

    1. General settings
    2. Dependency checks
    3. Database and persistence
    4. Default player preferences
    5. Available indicator icons
    6. Communication-specific icon overrides
    7. Optional integrations
    8. Voice detection and distance
    8. Indicator position and size
    9. Indicator animations
   10. Visibility rules
   11. Performance settings
   12. DUI texture settings
   13. Command and interface settings
   14. Administrator panel settings
   15. Debug settings

This resource is framework-independent. It uses the player's FiveM identifier
and does not require ESX, QBCore, Qbox, or any framework bridge.

Required resources:
    - pma-voice: voice activity and communication state detection.
    - oxmysql: SQL persistence for each player's preferences.

================================================================================
]]

-- =============================================================================
-- 1. GENERAL SETTINGS
-- =============================================================================

Config.General = {
    -- Shows the indicator above the local player's own character while speaking.
    ShowLocalPlayer = true,

    -- Enables the indicator viewer for every player when the resource starts.
    -- This controls whether the local client renders other players' indicators.
    ViewerEnabled = true
}

-- =============================================================================
-- 2. DEPENDENCY CHECKS
-- =============================================================================

Config.Dependencies = {
    -- Resource name used by the server for pma-voice.
    PmaVoiceResource = 'pma-voice',

    -- Resource name used for SQL persistence.
    DatabaseResource = 'oxmysql',

    -- Delay before the first dependency status check.
    StartupCheckDelayMs = 1000,

    -- Prints green status messages when dependencies are ready and red messages
    -- when a required resource is missing, stopped, or unavailable.
    PrintStatus = true,

    -- Watches dependency state changes after startup.
    MonitorState = true
}

-- =============================================================================
-- 3. DATABASE AND PERSISTENCE
-- =============================================================================

Config.Database = {
    -- SQL table used to store player preferences.
    TableName = 'smdz_voiceindicator_preferences',

    -- Automatically creates the SQL table if it does not already exist.
    -- The standalone .sql file is also included for manual installation.
    AutoCreateTable = true,

    -- Identifier types checked in this order.
    -- The first matching identifier is stored in VARCHAR(190).
    IdentifierPriority = {
        'license',
        'license2',
        'fivem'
    },

    -- Minimum delay between two save attempts from the same player.
    SaveCooldownMs = 750
}

-- =============================================================================
-- 4. DEFAULT PLAYER PREFERENCES
-- =============================================================================

Config.DefaultPreferences = {
    -- Determines whether this player sees voice indicators on their own screen.
    -- This preference is local to the viewer and is never shared with other players.
    Enabled = true,

    -- Determines whether indicators above players inside vehicles are visible.
    -- This is a local viewer preference and is enabled by default.
    ShowInsideVehicles = true,

    -- Personal size multiplier applied to every indicator rendered on this screen.
    -- A value of 1.0 uses the base pixel size configured in Config.Display.
    IconScale = 0.70,

    -- Default icon ID used for every indicator rendered on this player's screen.
    -- It must exist in Config.Icons and is never imposed on other players.
    Icon = 'voice-signal',

    -- Default local colors used for each communication type.
    -- Each viewer sees their own saved colors. Values must use the full
    -- six-digit hexadecimal format.
    Colors = {
        Normal = '#FFFFFF',
        Radio = '#FF9F43',
        Phone = '#5AC8FA'
    }
}

-- =============================================================================
-- 5. AVAILABLE INDICATOR ICONS
-- =============================================================================

Config.Icons = {
    -- Each entry is available in the player settings panel.
    -- The ID must match an icon registered in web/src/iconData.js. LabelKey must
    -- exist in every locale file. The custom Voice Signal SVG is the primary
    -- icon and is also selected by Config.DefaultPreferences.Icon.
    { Id = 'voice-signal', LabelKey = 'icon_voice_signal' },
    { Id = 'mic', LabelKey = 'icon_mic' },
    { Id = 'audio-lines', LabelKey = 'icon_audio_lines' },
    { Id = 'waves', LabelKey = 'icon_waves' },
    { Id = 'volume', LabelKey = 'icon_volume' },
    { Id = 'radio', LabelKey = 'icon_radio' },
    { Id = 'phone', LabelKey = 'icon_phone' },
    { Id = 'headphones', LabelKey = 'icon_headphones' },
    { Id = 'message', LabelKey = 'icon_message' }
}

-- =============================================================================
-- 6. COMMUNICATION-SPECIFIC ICON OVERRIDES
-- =============================================================================

Config.ContextIcons = {
    -- When enabled, the resource may automatically replace the normal selected
    -- icon with a dedicated icon for radio or phone communication.
    Enabled = true,

    -- When true, any player speaking through the radio will use RadioIcon on
    -- this viewer's screen instead of the normal configured icon.
    UseRadioIcon = true,

    -- Icon ID used while a player is speaking through the radio.
    RadioIcon = 'radio',

    -- When true, any player speaking through a phone call will use PhoneIcon on
    -- this viewer's screen instead of the normal configured icon.
    UsePhoneIcon = true,

    -- Icon ID used while a player is speaking through a phone call.
    PhoneIcon = 'phone'
}

-- =============================================================================
-- 7. OPTIONAL INTEGRATIONS
-- =============================================================================

Config.Integrations = {
    OrigenRadio = {
        -- Automatically enables the compatibility layer only when the configured
        -- resource is running. No dependency is required when it is not installed.
        Enabled = true,

        -- Resource name used by the popular Origen Radio script.
        ResourceName = 'origen_radio',

        -- Polling interval for nearby players. The export is never called every frame.
        PollIntervalMs = 100
    }
}

-- =============================================================================
-- 8. VOICE DETECTION AND DISTANCE
-- =============================================================================

Config.Detection = {
    -- Maximum distance, in GTA units, at which an indicator can be displayed.
    MaxDistance = 15.0,

    -- Distance at which the indicator starts fading out.
    -- Keep this lower than MaxDistance for a smooth distance fade.
    FadeStartDistance = 10.0,

    -- Keeps the indicator visible briefly after voice activity stops.
    -- This prevents flickering between short Mumble voice packets.
    SpeakingHoldMs = 140,

    -- Optional compatibility fallback for radio systems that transmit through
    -- pma-voice but do not expose radioActive or radioChannel state correctly.
    -- A player is classified as radio while speaking and playing one of these
    -- networked radio animations.
    RadioAnimationFallback = {
        Enabled = true,
        Animations = {
            { Dict = 'random@arrests', Name = 'generic_radio_enter' }
        }
    }
}

-- =============================================================================
-- 9. INDICATOR POSITION AND SIZE
-- =============================================================================

Config.Display = {
    -- Vertical world-space offset added above the exact head-bone position.
    -- The offset is applied on the world Z axis to prevent sideways movement.
    HeadOffset = 0.38,

    -- Base indicator size in screen pixels when the player is close.
    IconWidthPx = 46.0,
    IconHeightPx = 46.0,

    -- Minimum personal icon-size multiplier accepted from the settings panel.
    IconScaleMin = 0.65,

    -- Maximum personal icon-size multiplier accepted from the settings panel.
    IconScaleMax = 1.60,

    -- Step used by the personal icon-size slider.
    IconScaleStep = 0.05,

    -- Smallest distance-based size multiplier used near MaxDistance.
    MinDistanceScale = 0.72
}

-- =============================================================================
-- 10. INDICATOR ANIMATIONS
-- =============================================================================

Config.Animation = {
    -- Fade-in duration when a player starts speaking.
    FadeInMs = 90,

    -- Fade-out duration when a player stops speaking.
    FadeOutMs = 140,

    -- Enables a subtle size pulse while a player is actively speaking.
    PulseEnabled = true,

    -- Strength of the pulse animation.
    PulseAmount = 0.045,

    -- Speed of the pulse animation.
    PulseSpeed = 0.012
}

-- =============================================================================
-- 11. VISIBILITY RULES
-- =============================================================================

Config.Visibility = {
    -- Prevents indicators from being visible through walls and solid objects.
    RequireLineOfSight = true,

    -- Native line-of-sight flags used by HasEntityClearLosToEntity.
    LineOfSightFlags = 17,

    -- Always allows very close speakers to be shown. This prevents false
    -- line-of-sight negatives caused by ped collision or camera positioning.
    CloseRangeBypassDistance = 3.0,

    -- Global master switch for indicators above players inside vehicles.
    -- Keep this enabled to let each player control the option from their own panel.
    ShowInsideVehicles = true,

    -- Hides indicators above dead players.
    HideDeadPlayers = true,

    -- Hides indicators above invisible players.
    HideInvisiblePlayers = true
}

-- =============================================================================
-- 12. PERFORMANCE SETTINGS
-- =============================================================================

Config.Performance = {
    -- Nearby-player scanning thread interval while at least one player is nearby.
    -- Values between 500 and 1000 ms provide a good balance for most servers.
    PlayerScanIntervalMs = 750,

    -- Voice-detection thread interval while nearby players exist.
    -- Values between 75 and 125 ms keep voice changes responsive without polling every frame.
    VoicePollIntervalMs = 100,

    -- Local microphone polling interval while no remote player is nearby and
    -- the local player is not transmitting. A slower idle rate prevents resmon
    -- spikes while keeping the local indicator responsive.
    LocalVoiceIdlePollIntervalMs = 15,

    -- Uses pma-voice's official server getter to verify which members of each
    -- active radio channel are currently transmitting. This is a reliable
    -- fallback when channel-scoped client events are not received by viewers.
    UsePmaRadioChannelGetter = true,

    -- Server-side interval used to query active radio channels through
    -- getPlayersInRadioChannel. The direct pma-voice events remain immediate;
    -- this polling layer only verifies and repairs missed radio states.
    RadioChannelPollIntervalMs = 200,

    -- Adaptive sleep used when no eligible player is near the local player.
    -- Scanning, detection, and rendering sleep longer in this state.
    NoNearbyPlayersWaitMs = 1000,

    -- Adaptive render sleep when players are nearby but no indicator is visible.
    NearbyIdleWaitMs = 200,

    -- Render wait while at least one indicator is visible.
    -- Keep this at 0 so the icon is drawn every frame only while it is actually needed.
    ActiveRenderWaitMs = 0,

    -- How often line of sight is recalculated for each relevant player.
    LineOfSightIntervalMs = 300,

    -- How often the active screen resolution is refreshed.
    ScreenResolutionIntervalMs = 1500,

    -- Screen-resolution refresh interval while the panel is closed and no
    -- indicator is being rendered.
    ScreenResolutionIdleIntervalMs = 10000,

    -- Preloads every icon texture during startup.
    -- Keep this disabled to create icon DUIs only when an icon is actually used.
    PreloadAllIcons = false,

    -- Keeps the preloaded normal, radio, and phone DUI textures ready in memory.
    -- Set above 0 only if you prefer releasing them after long idle periods.
    -- Keeping this at 0 prevents the first-use white frame and loading delay.
    DuiIdleCleanupMs = 0
}

-- =============================================================================
-- 13. DUI TEXTURE SETTINGS
-- =============================================================================

Config.Dui = {
    -- Internal resolution used by each lazily-created SVG icon DUI.
    Width = 128,
    Height = 128
}

-- =============================================================================
-- 14. COMMAND AND INTERFACE SETTINGS
-- =============================================================================

Config.Interface = {
    -- Enables the player settings command.
    CommandEnabled = true,

    -- Command used to open the settings panel.
    CommandName = 'voiceindicator',

    -- Adds a help entry for the command through the default FiveM chat resource.
    AddChatSuggestion = true,

    -- Description shown next to the command in the chat suggestion list.
    CommandHelpKey = 'commandHelp',

    -- Allows the Escape key to close the panel.
    CloseWithEscape = true,

    -- Controls which settings players are allowed to edit in the in-game panel.
    -- Every option is enabled by default. When an option is false, its control is
    -- hidden from the UI and the value from Config.DefaultPreferences is enforced
    -- on both the client and server. This prevents modified clients from bypassing
    -- settings disabled by the server owner.
    EditableSettings = {
        -- Allows players to enable or disable all indicators on their own screen.
        IndicatorEnabled = true,

        -- Allows players to choose whether indicators are shown inside vehicles.
        VehicleVisibility = true,

        -- Allows players to select the SVG or PNG indicator design.
        IconSelection = true,

        -- Allows players to change the local indicator size multiplier.
        IconScale = true,

        -- Allows players to change the normal proximity-voice color.
        NormalColor = true,

        -- Allows players to change the radio-voice color.
        RadioColor = true,

        -- Allows players to change the phone-call voice color.
        PhoneColor = true,

        -- Shows the live preview card in the settings panel.
        LivePreview = true,

        -- Shows the button used to restore all editable values to their defaults.
        ResetButton = true
    }
}

-- =============================================================================
-- 14. ADMINISTRATOR PANEL SETTINGS
-- =============================================================================

Config.AdminPanel = {
    -- Enables the administrator view for players who pass any configured server-side permission method.
    Enabled = true,

    -- Shows the informational box describing recommended global-toggle uses.
    ShowUsageInformation = true
}

-- =============================================================================
-- 15. DEBUG SETTINGS
-- =============================================================================

-- Enables or disables every client and server debug print for this resource.
-- Set this to false on production servers when diagnostics are no longer required.
Config.Debug = true
```

---

# 🔐 **SERVER CONFIGURATION:**

Private server values are stored in:

```text
server/config_server.lua
```

## Administrator permissions and webhooks

```lua
ServerConfig = {}

--[[
================================================================================
                            SMDZ VOICE INDICATOR
                         SERVER-ONLY CONFIGURATION
================================================================================

This file is loaded only on the server. Keep webhook URLs and other private
values here. No framework is required. Administrator access can use ACE,
Discord/license identifiers, or both methods at the same time.

Example server.cfg ACE permission:

    add_ace group.admin smdz_voiceindicator.admin allow

================================================================================
]]


ServerConfig.Admin = {
    -- Enables the global administrator controls in the settings panel.
    Enabled = true,

    -- Permission methods use OR logic. A player is allowed when at least one
    -- enabled method grants access. ACE and identifier permissions may both
    -- remain enabled at the same time.
    Permissions = {
        Ace = {
            -- Enables ACE permission checks.
            Enabled = true,

            -- ACE permission required to access or modify global indicator state.
            Permission = 'smdz_voiceindicator.admin'
        },

        Identifiers = {
            -- Enables direct Discord/license identifier checks.
            Enabled = true,

            -- Add complete FiveM identifiers, including their prefix.
            -- Supported examples: 'discord:123456789012345678' or
            -- 'license:0123456789abcdef0123456789abcdef01234567'.
            Allowed = {
                'discord:492311610036322305'
            }
        }
    },

    -- Default state used when no persisted value exists yet.
    DefaultGlobalEnabled = true,

    -- Saves the global enabled/disabled state in SQL across resource restarts.
    PersistGlobalState = true,

    -- Allows the server console to use internal administrative actions.
    AllowConsole = true
}

ServerConfig.Database = {
    -- Separate table used for global resource settings.
    GlobalSettingsTable = 'smdz_voiceindicator_settings'
}

ServerConfig.Webhook = {
    -- Enables Discord webhook logs for global administrator changes.
    Enabled = false,

    -- Keep this URL private. This file is never sent to clients.
    URL = '',

    Username = 'SMDZ Voice Indicator',
    AvatarURL = '',

    -- Discord embed decimal colors.
    EnabledColor = 5763719,
    DisabledColor = 15548997,

    -- Includes the endpoint identifier only when explicitly enabled.
    IncludeEndpoint = false
}


```

ACE and identifier permissions use **OR logic**. A player is authorized when any enabled permission method grants access.

Both methods can remain enabled at the same time.

### ACE example

```cfg
add_ace group.admin smdz_voiceindicator.admin allow
```

### Identifier examples

```lua
Allowed = {
    'discord:492311610036322305',
    'license:0123456789abcdef0123456789abcdef01234567'
}
```

Always include the complete identifier prefix.

## Webhook logs

```lua
ServerConfig.Webhook = {
    Enabled = false,
    URL = '',
    Username = 'SMDZ Voice Indicator',
    AvatarURL = '',
    EnabledColor = 5763719,
    DisabledColor = 15548997,
    IncludeEndpoint = false
}
```

Webhook logs are sent when an administrator changes the global indicator state. Embeds can include:

- Administrator/player name.
- Server ID.
- Basic FiveM identifiers.
- Discord identifier when available.
- Steam identifier when available.
- Previous global state.
- New global state.
- UTC timestamp.


It is intentionally not configurable or translatable.

Keep webhook URLs private and never move them into shared or client files.
---

# 🎮 **USAGE:**

## Player command

| Command | Description | Permission / Notes |
|---|---|---|
| `/voiceindicator` | Opens or closes the personal voice indicator settings panel. | Everyone, when `Config.Interface.CommandEnabled = true`. |

## Personal settings

Players can configure the following options when allowed by `EditableSettings`:

- Show or hide indicators on their own screen.
- Show or hide indicators above players inside vehicles.
- Select the normal proximity-voice icon.
- Adjust icon size.
- Choose separate colors for normal voice, radio, and phone calls.
- Preview all communication modes before saving.
- Restore editable values to their configured defaults.

Preferences are saved by identifier and loaded when the player joins again.

## Administrator controls

Authorized users see the Administration tab in the same panel.

The global switch can be used to disable indicators for every connected player during:

- Large server events.
- Crowded public scenes.
- Performance testing.
- Server maintenance.
- Temporary troubleshooting.

When globally disabled, clients stop normal indicator scanning, classification, and rendering work until indicators are enabled again.

## Voice mode priority

The resource resolves communication modes in this order:

```text
Radio → Phone → Normal proximity voice
```

Normal voice uses the icon selected by the viewer. Radio and phone can use dedicated icons configured in `Config.ContextIcons`.
---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

## Public server events

No public server events are intentionally documented as a supported integration API. Internal persistence, synchronization, and administrator events are validated by the resource and should not be triggered manually by other scripts.

## Public client events

No public client events are required for normal integration. Use the documented exports below.

## Client exports

### Open and close the settings panel

```lua
exports['smdz_voiceindicator']:OpenSettings()
exports['smdz_voiceindicator']:CloseSettings()
```

| Export | Parameters | Returns | Description |
|---|---|---|---|
| `OpenSettings` | None | None | Opens the React settings panel. |
| `CloseSettings` | None | None | Closes the settings panel and releases NUI focus. |

### Control the local viewer

```lua
exports['smdz_voiceindicator']:SetViewerEnabled(true)
local enabled = exports['smdz_voiceindicator']:IsViewerEnabled()
```

| Export | Parameters | Returns | Description |
|---|---|---|---|
| `SetViewerEnabled` | `state` (boolean) | `boolean` | Enables or disables rendering for the local client. |
| `IsViewerEnabled` | None | `boolean` | Returns the current local viewer state. |
| `SetEnabled` | `state` (boolean) | `boolean` | Backward-compatible alias for `SetViewerEnabled`. |
| `IsEnabled` | None | `boolean` | Backward-compatible alias for `IsViewerEnabled`. |

### Custom radio and phone compatibility

Use these exports when a custom radio or phone script does not expose the expected `pma-voice` states.

```lua
exports['smdz_voiceindicator']:SetRadioActive(true)
exports['smdz_voiceindicator']:SetRadioActive(false)

exports['smdz_voiceindicator']:SetPhoneActive(true)
exports['smdz_voiceindicator']:SetPhoneActive(false)
```

| Export | Parameters | Returns | Description |
|---|---|---|---|
| `SetRadioActive` | `state` (boolean) | `boolean` | Forces the local communication type to radio while active. |
| `SetPhoneActive` | `state` (boolean) | `boolean` | Forces the local communication type to phone while active. |

Do not leave these states enabled permanently. Set them to `false` immediately when the custom radio transmission or phone call ends.

## pma-voice integration

The resource reads and/or tracks relevant `pma-voice` communication information, including:

- Local radio activity events.
- Radio talking state.
- `radioChannel` state.
- `callChannel` state.
- Radio channel membership and talking snapshots.
- Replicated communication state bags.
- Mumble speaking natives as a fallback.

The resource does not use `voiceIntent` to determine radio or phone state because `voiceIntent` distinguishes speech from music, not the communication channel.
---

# ❓ **FAQ:**

| Question | Answer |
|---|---|
| Does this resource require ESX, QBCore, or Qbox? | No. It is fully standalone and does not use a framework bridge. |
| Which voice resource is supported? | The resource is designed for `pma-voice`. |
| Are player preferences saved? | Yes. Preferences are stored with `oxmysql` using the first available configured identifier. |
| Does one player's selected icon affect everyone? | No. Appearance preferences are local to each viewer. |
| Can normal voice, radio, and phone use different icons? | Yes. Normal voice uses the player's selected icon, while radio and phone can use dedicated context icons. |
| Can players be prevented from changing certain settings? | Yes. Set individual entries in `Config.Interface.EditableSettings` to `false`. |
| Can all indicators be disabled during a large event? | Yes. Authorized administrators can use the Administration tab to disable indicators globally. |
| Can ACE and identifier permissions be enabled together? | Yes. They use OR logic, so either method can grant access. |
| Which direct identifiers are supported for administrators? | Complete FiveM identifiers such as `discord:` and `license:` entries. |
| Is the global enabled state persistent? | Yes, when `ServerConfig.Admin.PersistGlobalState = true`. |
| Are webhook URLs sent to clients? | No. They are stored in `server/config_server.lua`, which is server-only. |
| Is German included? | Yes. English, Spanish, French, and German locale files are included. |
| Why is the default size 70%? | It provides a compact default. The panel recommends approximately 75% for a balanced result. |
| Can custom radio or phone scripts integrate with the indicator? | Yes. Use `SetRadioActive` and `SetPhoneActive` when the custom resource does not expose expected `pma-voice` state. |
---

# 🛠️ **COMMON PROBLEMS:**

| Problem | Likely cause | Recommended solution |
|---|---|---|
| The resource stops immediately after starting. | The resource folder was renamed. | Rename the folder exactly to `smdz_voiceindicator`. |
| The panel opens but preferences are not saved. | `oxmysql` is stopped, the database connection failed, or the table is missing. | Start `oxmysql`, verify database credentials, and import `smdz_voiceindicator.sql` or enable automatic table creation. |
| `/voiceindicator` does not work. | The command is disabled or another resource uses the same command. | Check `Config.Interface.CommandEnabled`, `CommandName`, and the F8 console. |
| No indicators appear for anyone. | The global state is disabled, the local viewer is disabled, or `pma-voice` is not ready. | Check the Administration tab, personal settings, dependency state, and debug output. |
| Normal voice works but radio stays classified as normal. | The radio resource is not producing expected `pma-voice` events/state, or it uses custom transmission logic. | Enable debug, confirm `radioChannel` and radio activity, test `getPlayersInRadioChannel`, or call `SetRadioActive` from the custom radio resource. |
| Phone calls stay classified as normal. | The phone resource does not set `callChannel` or uses a custom call system. | Enable debug, inspect `callChannel`, or call `SetPhoneActive` from the custom phone resource. |
| A white square appears the first time an icon is shown. | The DUI is being created lazily and the transparent renderer has not finished loading. | Enable `PreloadAllIcons`, set `DuiIdleCleanupMs = 0`, or keep a longer cleanup time. |
| The first indicator appears with a noticeable delay after being idle. | Idle polling and lazy DUI creation are prioritizing low resmon. | Reduce `LocalVoiceIdlePollIntervalMs` or `NoNearbyPlayersWaitMs`, or preload/retain DUI textures. |
| Resmon is higher than expected while nobody is nearby. | Debug is enabled, intervals are too aggressive, or a communication poll is running frequently. | Set `Config.Debug = false`, review performance intervals, and confirm the global idle state is working. |
| The radio or phone icon exists in the panel but never renders in-game. | The communication mode is not being classified as radio/phone. | Enable debug and verify the final resolved type before checking icon rendering. |
| An administrator cannot see the Administration tab. | Neither ACE nor an allowed identifier matched. | Check the exact ACE object, identifier prefix, identifier value, and permission debug output. |
| Identifier permission does not work. | The identifier is incomplete or Discord/Steam is not available for that player. | Use the exact value returned by `GetPlayerIdentifiers`, including the prefix. |
| Webhook logs are not sent. | The webhook is disabled, the URL is empty/invalid, or Discord rejected the request. | Enable the webhook, verify the private URL, enable debug temporarily, and review the HTTP status. |
| Indicators show through walls. | Line-of-sight protection is disabled or its flags were changed. | Enable `RequireLineOfSight` and restore the recommended flags. |
| Indicators disappear inside vehicles. | The global vehicle switch or the viewer's personal preference is disabled. | Enable both `Config.Visibility.ShowInsideVehicles` and the player's panel option. |
| A new locale shows missing or untranslated text. | Translation keys differ between locale files. | Copy all keys from `locales/en.lua`, translate every value, and add the file to `fxmanifest.lua`. |
| The UI breaks after an update. | Old and new files inside `web/dist` were mixed. | Delete the old resource folder and install the complete new version instead of merging generated assets. |

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
