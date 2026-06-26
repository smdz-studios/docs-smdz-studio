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


> A player's selected appearance only affects what that player sees. It does not force the same icon, size, or colors onto other players.
---

# 📦 **REQUIREMENTS:**

### Mandatory dependencies

- **FiveM server:** A current recommended FiveM server artifact.
- **Voice resource:** `pma-voice`.
- **Database adapter:** `oxmysql`.
- **Database:** MySQL or MariaDB supported by `oxmysql`.

### Framework support

No roleplay framework is required.


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


.lua config aqui

---

# 🔐 **SERVER CONFIGURATION:**

Private server values are stored in:

```text
server/config_server.lua
```

## Administrator permissions

```lua
ServerConfig.Admin = {
    Enabled = true,
    Permissions = {
        Ace = {
            Enabled = true,
            Permission = 'smdz_voiceindicator.admin'
        },
        Identifiers = {
            Enabled = true,
            Allowed = {
                'discord:492311610036322305'
            }
        }
    },
    DefaultGlobalEnabled = true,
    PersistGlobalState = true,
    AllowConsole = true
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
| Can the webhook footer be changed? | No. It is permanently fixed to `SMDZ STUDIOS - VOICE INDICATOR`. |
| Is German included? | Yes. English, Spanish, French, and German locale files are included. |
| Is the React source included? | Yes. Editable source is in `web/src`, and FiveM uses the generated files in `web/dist`. |
| Is the production UI completely impossible to reverse engineer? | No client-side build can be completely hidden. The build is minified and obfuscated, while sensitive validation remains server-side. |
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
| React changes do not appear in FiveM. | Only `web/src` was edited and the production build was not regenerated. | Run `npm install`, then `npm run build`, and restart the resource. |
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
