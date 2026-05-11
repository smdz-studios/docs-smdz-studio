<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/K_fCBYLOWk0"
    title="smdz_ifruit_pods showcase"
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

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_ifruit_pods`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

`smdz_ifruit_pods` is a production-ready LB Phone app that controls wireless pods with validated audio playback, playlists, queue/repeat controls, persistent settings (including dark mode), and async webhook logs.

---

# ⭐ **FEATURES:**

- 🎧 **Advanced audio playback** with full control (play, pause, resume, seek)
- 🎚️ **Smart volume pipeline** with min/max validation and safe step updates
- 🔀 **Crossfade transitions** between tracks for a smoother listening experience
- 📱 **Full LB Phone integration** with a seamless native app experience
- 🧩 **Automatic app registration** inside LB Phone with cache-busted UI/icon URLs
- 📂 **Playlist system** to create, edit, and manage tracks easily
- 📈 **Playlist limits & validation** with anti-abuse checks for names, tracks, and payload size
- 🔁 **Queue & repeat modes** for continuous playback (`off`, `one`, `all`)
- 💾 **Persistent settings** for volume, theme, and user preferences per player
- 🌙 **Modern UI** with light and dark mode support
- 🔒 **Server-side validation** for secure, exploit-resistant behavior
- 🛡️ **Device session checks** so playback actions require a valid equipped session
- ⚡ **Optimized performance** with low resmon usage and lightweight background loops
- 🔔 **Flexible notifications system** with multi-framework support
- 📡 **Discord webhook logging** for player/playlist/settings actions with queue + rate-limit
- 🧠 **Auto framework detection** for ESX / QB / QBX with fallback order
- 🎮 **Keybind controls** for fast in-game interactions
- 🌍 **Localization-ready architecture** driven by locale labels and messages

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended artifact.
- **Framework (one of):** `es_extended`, `qb-core`, or `qbx_core`.
- **Database:** `oxmysql` (required).
- **Dependencies:**
  - `oxmysql`
  - `xsound`
  - `lb-phone`

---

# 🔗 COMPATIBILITY

## Frameworks
- ESX
- QBCore
- QBX

## Notifications
- gta_feed
- esx_native
- qbcore_native
- qbox_native
- okokNotify
- origen_notify
- wasabi_notify
- wasabi_uikit
- rtx_notify
- codem-notification
- vms_notifyv2
- esx_notify
- brutal_notify
- FL-Notify
- gtm-ui
- RO_Notify
- RxNotify
- custom_name

Notification bridge structure:
- `bridge/notifications/init.lua` (shared notification logic)
- `bridge/notifications/<provider>.lua` (one file per provider)
- `bridge/notifications/custom.lua` (custom wrapper definitions)

---

# 📥 **INSTALLATION:**

1. Place the resource folder in your server resources path:

```text
resources/[smdz]/smdz_ifruit_pods
```

2. Import SQL:

```text
INSTALLATION-FILES/smdz_ifruit_pods.sql
```

3. Register the `ifruitpods` item using:

```text
INSTALLATION-FILES/item.lua
```

4. Add to `server.cfg`:

```cfg
ensure oxmysql
ensure xsound
ensure lb-phone
ensure smdz_ifruit_pods
```

5. Restart server and verify startup logs.

6. Quick post-install check:
- Confirm LB Phone shows the custom app icon.
- Use the item and test `play`, `pause`, `resume`, and `stop`.
- Create one test playlist and save settings to validate DB writes.

---

# 🗄️ **DATABASE:**

Import your SQL file:

```sql
CREATE TABLE IF NOT EXISTS `smdz_ifruit_pods_playlists` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `owner_identifier` VARCHAR(180) NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `items_json` LONGTEXT NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_owner_identifier` (`owner_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `smdz_ifruit_pods_playlist_tracks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `owner_identifier` VARCHAR(180) NOT NULL,
    `playlist_id` INT NOT NULL,
    `playlist_name` VARCHAR(64) NOT NULL,
    `track_name` VARCHAR(128) NOT NULL,
    `track_url` LONGTEXT NOT NULL,
    `track_order` INT NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_owner_identifier` (`owner_identifier`),
    KEY `idx_playlist_lookup` (`owner_identifier`, `playlist_id`, `track_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `smdz_ifruit_pods_settings` (
    `owner_identifier` VARCHAR(180) NOT NULL,
    `default_volume` TINYINT UNSIGNED NOT NULL DEFAULT 50,
    `tooltips_enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `ui_sounds_enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `theme` VARCHAR(10) NOT NULL DEFAULT 'light',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`owner_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

> Make sure the database is properly connected via oxmysql and tables are created successfully.

---

# ⚙️ **CONFIGURATION:**

Main file: `config.lua`

```lua
Config = {}

--=============================================================================
-- CORE
--=============================================================================
Config.Locale = 'en' -- Active locale key loaded from locales/*.lua.

--=============================================================================
-- FRAMEWORK
--=============================================================================
Config.Framework = {
    Detection = 'auto', -- auto | manual
    Manual = 'qbx', -- Used only when Detection = manual.
    AutoPriority = { 'qbx', 'qb', 'esx' }, -- Detection order when auto mode is enabled.
    Resources = {
        qbx = 'qbx_core',
        qb = 'qb-core',
        esx = 'es_extended'
    }
}

--=============================================================================
-- ACCESS
--=============================================================================
Config.Access = {
    UseItem = true, -- Allow opening pods through inventory item usage.
    ItemName = 'ifruitpods', -- Inventory item name expected by the framework bridge.
    UseCommand = false, -- Allow opening pods through command execution.
    CommandName = 'ifruitpods' -- Command players can run in chat/console.
}

--=============================================================================
-- AUDIO
--=============================================================================
Config.Audio = {
    Distance = 5.0, -- Max local playback distance in meters.
    Crossfade = {
        Enabled = true,
        DurationMs = 1800, -- Recommended range: 1000-3000 ms.
        StepMs = 100 -- Lower values are smoother but cost more updates.
    },
    Volume = {
        Min = 0, -- Lower accepted volume bound.
        Max = 100, -- Upper accepted volume bound.
        Default = 50, -- Initial volume sent to UI and playback.
        Step = 1
    },
    Url = {
        MinLength = 8,
        MaxLength = 512,
        NormalizeProviders = {
            youtube = true,
            vimeo = true,
            dailymotion = true,
            mixcloud = true
        },
        AllowedSchemes = {
            ['https://'] = true,
            ['http://'] = true
        },
        BlockedCharactersPattern = "[<>'\"]" -- Basic sanitization against unsafe URL characters.
    },
    Modes = {
        off = {
            key = 'off',
            enabled = true,
            uiLabel = 'ui_mode_off'
        },
        adaptive = {
            key = 'adaptive',
            enabled = true,
            uiLabel = 'ui_mode_adaptive',
            scenes = { 'MP_LEADERBOARD_SCENE' },
            audioFlags = {
                DisableFlightMusic = true
            }
        },
        noise_cancelation = {
            key = 'noise_cancelation',
            enabled = true,
            uiLabel = 'ui_mode_noise_cancelation',
            scenes = { 'MP_LEADERBOARD_SCENE', 'RACE_TURBO_BOOST_SCENE' },
            audioFlags = {
                DisableFlightMusic = true
            }
        }
    },
    Defaults = {
        scenes = { 'MP_LEADERBOARD_SCENE', 'RACE_TURBO_BOOST_SCENE' },
        audioFlags = {
            DisableFlightMusic = false
        }
    }
}

--=============================================================================
-- PLAYER
--=============================================================================
Config.Player = {
    Animation = {
        Enabled = true,
        Dict = 'amb@code_human_wander_idles_fat@female@idle_a',
        Name = 'idle_a_hairtouch',
        BlendIn = 8.0,
        BlendOut = -8.0,
        Duration = 1500,
        Flag = 48,
        PlaybackRate = 0.0,
        LoadTimeoutMs = 3000,
        WaitAfterMs = 1200
    },
    EarProp = {
        Enabled = true,
        ComponentId = 2,
        DrawableId = 41,
        TextureId = 0,
        AttachOnPlay = true,
        RemoveOnStop = true
    }
}

--=============================================================================
-- PLAYLISTS
--=============================================================================
Config.Playlists = {
    Enabled = true, -- Master toggle for playlist features.
    MaxPerPlayer = 20, -- Hard cap for playlists owned by one player.
    MaxTracksPerPlaylist = 50, -- Hard cap for tracks inside a single playlist.
    NameMinLength = 2,
    NameMaxLength = 42,
    TrackNameMinLength = 1,
    TrackNameMaxLength = 60,
    PreviewTracksLimit = 4
}

--=============================================================================
-- UI
--=============================================================================
Config.UI = {
    EnableSounds = true
}

--=============================================================================
-- NOTIFICATIONS
--=============================================================================
Config.Notifications = {
    Adapter = 'origen_notify', -- Set a fixed adapter, or use auto fallback chain.
    AutoOrder = {
        'qbox_native',
        'qbcore_native',
        'esx_native',
        'okokNotify',
        'origen_notify',
        'wasabi_notify',
        'wasabi_uikit',
        'rtx_notify',
        'codem-notification',
        'vms_notifyv2',
        'esx_notify',
        'brutal_notify',
        'FL-Notify',
        'gtm-ui',
        'RO_Notify',
        'RxNotify',
        'gta_feed'
    },
    DefaultTitle = 'iFruit Pods',
    DefaultType = 'info',
    DefaultDuration = 3500, -- Default notification lifetime in milliseconds.
    DefaultSound = true,
    DefaultPosition = 'top-right',
    RoNotify = {
        Icon = 'fa fa-bell',
        Color = '#2f66e3',
        Tts = false
    }
}

--=============================================================================
-- KEYBINDS
--=============================================================================
Config.Keybinds = {
    Enabled = true, -- Registers playback-related keybind commands.
    Pause = {
        Command = 'ifruitpods_pause',
        Default = 'K'
    },
    Resume = {
        Command = 'ifruitpods_resume',
        Default = 'L'
    },
    NextTrack = {
        Command = 'ifruitpods_next',
        Default = 'PAGEUP'
    },
    PreviousTrack = {
        Command = 'ifruitpods_prev',
        Default = 'PAGEDOWN'
    }
}

--=============================================================================
-- WEBHOOKS
--=============================================================================
Config.Webhooks = {
    Enabled = true, -- Enables Discord webhook event logging.
    Url = '',
    Username = 'SMDZ LOGS',
    AvatarUrl = '',
    FooterIconUrl = '',
    EmbedColor = 3447003,
    RateLimitPerMinute = 20, -- Anti-spam threshold per minute.
    MaxQueueSize = 200, -- Queue cap to prevent memory growth under load.
    QueueTickMs = 250, -- Queue worker tick interval.
    Playlist = true,
    Player = true,
    Settings = true
}

--=============================================================================
-- LB PHONE
--=============================================================================
Config.LBPhone = {
    Identifier = 'smdz_ifruit_pods',
    Name = 'iPods',
    Description = 'Control your iFruit buds',
    DefaultApp = false,
    AppSize = 2240,
    Resource = 'lb-phone', -- Mandatory dependency validated on startup.
    UiPath = 'ui/dist/index.html',
    IconPath = 'ui/dist/icon.svg'
}

--=============================================================================
-- DEBUG
--=============================================================================
Config.Debug = false -- Enables structured debug logging in client/server.

```

Recommended configuration checklist:
- Set `Config.Framework.Detection = 'auto'` unless you explicitly need manual mode.
- Keep `Config.Audio.Url.AllowedSchemes` restricted to `https://` and `http://`.
- Tune `Config.Audio.Crossfade.DurationMs` between `1000` and `3000` for best stability.
- Use realistic `Config.Playlists.MaxPerPlayer` and `MaxTracksPerPlaylist` limits.
- Keep `Config.Webhooks.RateLimitPerMinute` enabled to reduce abuse and spam.
- If needed, force a notification adapter with `Config.Notifications.Adapter`.

---

# 🎮 **USAGE:**

## Commands

| Command | Description | Notes |
|--------|------------|------|
| /ifruitpods | **Open the iFruit Pods app** | Requires config enabled |
| (Item use) | **Use pods item to open UI** | Recommended method |

💡 **Tip:** Using the item provides a more immersive experience than commands.

## Keybinds

| Action | Default Key | Config Path |
|---|---|---|
| Pause playback | `K` | `Config.Keybinds.Pause` |
| Resume playback | `L` | `Config.Keybinds.Resume` |
| Next track | `PAGEUP` | `Config.Keybinds.NextTrack` |
| Previous track | `PAGEDOWN` | `Config.Keybinds.PreviousTrack` |

Keybind note:
- FiveM key mapping does not support `[` and `]` as valid key names, so defaults use `PAGEUP` / `PAGEDOWN`.

## UI Tabs

- **Player:** URL input, mode, volume, play/stop/pause/resume/seek.
- **Playlist:** create/delete playlists, add/remove tracks, random play, queue actions.
- **Settings:** default volume, tooltips, UI sounds, theme (light/dark), danger zone actions.

Typical user flow:
- Equip/use `ifruitpods` item.
- Open the app and choose audio mode + volume.
- Play from URL or from a saved playlist.
- Manage queue/repeat during playback.
- Save preferences in Settings for next sessions.

---

# 🛠️ **WORKFLOW (TECHNICAL):**

1. **User input (NUI / command / item):** the client opens the UI and prepares payload data.
2. **Client validation:** basic format checks (`mode`, `volume`, `url`, `playlistId`, `trackIndex`).
3. **Server event call:** the client triggers `smdz_ifruit_pods:server:*` with sanitized payload.
4. **Server validation (critical):**
   - verifies valid `source` and active device session
   - applies strict sanitization for URL, volume, mode, indexes, and flags
   - enforces playlist/settings limits
5. **DB persistence:** operations in `playlists`, `playlist_tracks`, and `settings` through `oxmysql`.
6. **Client response:** `smdz_ifruit_pods:client:requestResponse` returns `ok/error`.
7. **Local playback:** client runs `xsound` actions (play, crossfade, pause, seek, stop).
8. **UI state sync:** reactive updates (`pods_get_state`) for queue, repeat mode, track, and settings.
9. **Async webhook logging:** embed queue with per-source rate limiting to prevent spam.

**Important technical note:**
Primary usage is intended for **YouTube** links (priority normalization and compatibility path). Other providers may work depending on configuration, but YouTube is the recommended route for maximum stability.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

## Server Events

| Event | Purpose | Validates Server-Side |
|---|---|---|
| `smdz_ifruit_pods:server:deviceSession` | Sync equipped/unequipped pod session | ✅ |
| `smdz_ifruit_pods:server:play` | Start playback request | ✅ |
| `smdz_ifruit_pods:server:stop` | Stop playback | ✅ |
| `smdz_ifruit_pods:server:updateVolume` | Update playback volume | ✅ |
| `smdz_ifruit_pods:server:updateMode` | Update audio mode | ✅ |
| `smdz_ifruit_pods:server:playlist:*` | Playlist CRUD + play flow | ✅ |
| `smdz_ifruit_pods:server:settings:*` | Read/update persistent settings | ✅ |

## Client Events

| Event | Purpose |
|---|---|
| `smdz_ifruit_pods:client:open` | Open app UI |
| `smdz_ifruit_pods:client:notify` | Push notification payload |
| `smdz_ifruit_pods:client:play` | Start local audio playback |
| `smdz_ifruit_pods:client:stop` | Stop local audio playback |
| `smdz_ifruit_pods:client:updateVolume` | Update active sound volume |
| `smdz_ifruit_pods:client:updateMode` | Apply mode audio flags/scenes |
| `smdz_ifruit_pods:client:requestResponse` | Async callback response channel |

## NUI Callbacks

| Callback | Purpose |
|---|---|
| `pods_get_labels`, `pods_get_state`, `pods_close` | UI metadata + lifecycle |
| `pods_play`, `pods_stop`, `pods_pause`, `pods_resume`, `pods_seek` | Player controls |
| `pods_update_volume`, `pods_update_mode` | Runtime playback settings |
| `pods_playlist_fetch`, `pods_playlist_create`, `pods_playlist_add_track`, `pods_playlist_delete` | Playlist management |
| `pods_playlist_random`, `pods_playlist_play_track`, `pods_playlist_next`, `pods_playlist_remove_track`, `pods_playlist_clear_all` | Playlist playback/actions |
| `pods_queue_add_track`, `pods_queue_clear`, `pods_repeat_set` | Queue/repeat controls |
| `pods_settings_fetch`, `pods_settings_update` | User settings lifecycle |

## Exports

Exports are declared in:
- `client/export.lua`
- `server/export.lua`

Notification wrappers are organized in:
- `bridge/notifications/init.lua`
- `bridge/notifications/custom.lua`
- `bridge/notifications/*.lua`

| Export | Scope | Purpose |
|---|---|---|
| `usePodsItem` | Main resource | Open/use pods from external scripts |
| `Notify` | Notification bridge | Send standardized notifications |
| `GetNotificationAdapter` | Notification bridge | Get active adapter |
| `RegisterCustomNotificationAdapter` | Notification bridge | Register custom wrapper |
| `UnregisterCustomNotificationAdapter` | Notification bridge | Remove custom wrapper |
| `ListNotificationAdapters` | Notification bridge | List all adapters |
| `GetPodsFrameworkName` | Server | Returns resolved framework name (`esx`, `qb`, `qbx`, `unbound`) |
| `IsPodsDependencyReady` | Server | Checks if a dependency resource is currently `started` |

### Export usage examples

```lua
-- Open from another client resource (item simulation)
exports['smdz_ifruit_pods']:usePodsItem()
```

```lua
-- Simple notification through the bridge
exports['smdz_ifruit_pods']:Notify('Pods connected successfully', 'success', 3000)
```

```lua
-- Notification with payload style
exports['smdz_ifruit_pods']:Notify({
    title = 'iFruit Pods',
    message = 'Playlist saved',
    type = 'success',
    time = 3500,
    position = 'top-right'
})
```

```lua
-- Read current adapter selected in runtime
local adapter = exports['smdz_ifruit_pods']:GetNotificationAdapter()
print(('Current adapter: %s'):format(tostring(adapter)))
```

```lua
-- Register a custom adapter wrapper (event mode)
exports['smdz_ifruit_pods']:RegisterCustomNotificationAdapter('my_notify', {
    mode = 'event',
    eventName = 'my_notify:event',
    args = { '$message', '$type', '$time' }
})

-- Register a custom adapter wrapper (export mode)
exports['smdz_ifruit_pods']:RegisterCustomNotificationAdapter('my_export_notify', {
    mode = 'export',
    resource = 'my_notify_resource',
    exportName = 'Notify',
    args = { '$title', '$message', '$type', '$time' }
})
```

```lua
-- Inspect available adapters
local adapters = exports['smdz_ifruit_pods']:ListNotificationAdapters()
for i = 1, #adapters do
    print(('Adapter %d: %s'):format(i, adapters[i]))
end
```

```lua
-- Remove a custom adapter wrapper when no longer needed
exports['smdz_ifruit_pods']:UnregisterCustomNotificationAdapter('my_notify')
```

```lua
-- Server-side: read detected framework
local frameworkName = exports['smdz_ifruit_pods']:GetPodsFrameworkName()
print(('Framework: %s'):format(frameworkName))
```

```lua
-- Server-side: validate mandatory dependency status
local hasLbPhone = exports['smdz_ifruit_pods']:IsPodsDependencyReady('lb-phone')
print(('lb-phone started: %s'):format(tostring(hasLbPhone)))
```

Developer tips:
- Always sanitize external payloads before sending custom notifications.
- Prefer `Notify({ ... })` payload mode when you need `title`, `position`, or custom fields.
- Register reusable third-party wrappers in `bridge/notifications/custom.lua`.
- For production audio links, prioritize YouTube URLs for consistent normalization and playback behavior.

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| # | Question | Answer |
|---|---|---|
| 1 | Why does dark mode not persist after reopening the app? | Theme is stored in `smdz_ifruit_pods_settings`. Verify SQL import and schema upgrade logs: `debug_db_settings_schema_ok`, `debug_db_settings_schema_upgraded`, `debug_settings_updated`. |
| 2 | Why do I see a large box around Settings in dark mode? | Usually old cached UI files. Rebuild UI (`npm run build`), ensure updated `ui/dist`, restart resource, clear NUI cache. |
| 3 | Can I run this on ESX and QBCore? | Yes. The script supports ESX, QBCore, and QBX with runtime auto-detection. |
| 4 | Which dependencies are mandatory? | `oxmysql`, `xsound`, and `lb-phone` are required. |
| 5 | What is the correct startup order? | `ensure oxmysql`, `ensure xsound`, `ensure lb-phone`, `ensure smdz_ifruit_pods`. |
| 6 | Why does the resource fail at startup? | Most common causes: missing dependency, wrong folder name, invalid config syntax, or framework not loaded first. |
| 7 | Why does `/ifruitpods` not open the app? | Confirm command access is enabled in config and the player has a valid app flow in LB Phone. |
| 8 | Why are keybinds not responding? | Check `Config.Keybinds.Enabled`, key conflicts, and playback/device state restrictions. |
| 9 | Why is URL playback rejected? | URL must pass server validation (`http/https`, allowed provider rules, length limits, sanitized payload). |
| 10 | Why do I get play success but no audio? | Check `xsound` status, distance/volume settings, valid normalized URL, and equipped device session. |
| 11 | Why are playlists not saving? | DB table missing/not migrated, failed SQL import, or bad DB permissions. |
| 12 | Why do playlist changes disappear after restart? | Persistent writes are failing. Validate `oxmysql` connection and insert/update query logs. |
| 13 | Can I disable playlists and keep only manual player mode? | Yes. Disable playlist-related options in `config.lua`; server-side validation will block disabled actions. |
| 14 | Is there a limit for playlists and tracks? | Yes. Limits are enforced server-side to prevent abuse and oversized payloads. |
| 15 | How do I delete all playlists safely in production? | Back up DB first, then use danger-zone action or perform controlled SQL cleanup during maintenance. |
| 16 | Why do Discord webhooks not send logs? | Webhooks may be disabled, URL invalid, queue paused, or endpoint rate-limited. |
| 17 | How do I verify framework auto-detection? | Enable debug logs and inspect framework bind messages during startup. |
| 18 | What causes `SEND_NUI_MESSAGE has no UI frame` warnings? | NUI not mounted yet, app opened outside normal LB Phone flow, or stale build files in `ui/dist`. |
| 19 | Can I customize labels and language? | Yes. Localize through locale files and avoid hardcoded text in UI/server notifications. |
| 20 | How can I reduce client exploit risk? | Keep sensitive logic server-side, validate every payload, rate-limit actions, and sanitize all inputs. |
| 21 | Why does volume reset unexpectedly? | Settings were not persisted or fetched; check `pods_settings_fetch`, `pods_settings_update`, and DB rows for that player. |
| 22 | What is the recommended update process? | Back up `config.lua` and DB, replace resource folder, rebuild UI if needed, restore config, restart, and smoke-test. |
| 23 | Which links are recommended for best compatibility? | YouTube URLs are strongly recommended because the script prioritizes YouTube normalization and stable playback flow. |
| 24 | Can I use SoundCloud links? | No. SoundCloud domains are intentionally rejected by validation rules. |
| 25 | Why does random/next fail even with tracks? | Usually invalid `playlistId/trackIndex`, empty queue context, or dropped device session. Check request/response events. |
| 26 | What happens if webhook queue is full? | Oldest entries are dropped and throttled warnings are logged to protect server stability. |

---

# 🧪 **DEBUGGING & COMMON ISSUES:**

| Issue | Symptoms | Likely Cause | Fix | Useful Debug Keys |
|---|---|---|---|---|
| Resource does not start | Resource fails at boot | Missing dependency, wrong folder name, framework bind failure | Ensure `oxmysql`, `xsound`, `lb-phone` start first; verify folder name `smdz_ifruit_pods`; review startup logs | `debug_core_framework_binding_failed`, `debug_framework_*` |
| No devices detected | App shows disconnected state | Device session not synced or item not equipped | Use/equip `ifruitpods`, confirm client sends `deviceSession`, and confirm server receives it | `debug_device_equipped`, `debug_device_unequipped`, `debug_device_offline_blocked` |
| URL rejected | Play action returns invalid URL | URL fails scheme/length/provider checks | Use `http/https`, avoid blocked chars, avoid SoundCloud URLs | `debug_client_rejected_invalid_play_data`, `debug_server_invalid_payload_play` |
| Playback has no sound | No audio despite play event | `xsound` missing or invalid normalized URL | Ensure `xsound` is running and URL normalization is valid | `debug_audio_playback_started`, `debug_audio_stopped` |
| Playlists not saving | Changes disappear after refresh | SQL not applied or DB permission issue | Run SQL installer, verify table existence and DB credentials | `debug_db_playlist_table_ready`, `debug_playlist_*` |
| Settings not persisting | Theme/volume reset on reopen | Settings table/columns missing | Ensure `smdz_ifruit_pods_settings` exists and schema upgrade ran | `debug_db_settings_schema_ok`, `debug_db_settings_schema_upgraded`, `debug_settings_updated` |
| Webhooks not delivered | No Discord messages | Webhooks disabled, empty URL, or rate-limited source | Enable webhooks, set URL, tune limits, inspect queue health | `debug_webhook_queued`, `debug_webhook_delivered`, `debug_webhook_failed`, `debug_webhook_rate_limited` |
| NUI frame warning | `SEND_NUI_MESSAGE has no UI frame` | NUI not mounted when message is sent | Open app through LB Phone flow and verify `ui/dist` bundle | `debug_open_requested`, `debug_lbphone_registered` |
| Keybinds do nothing | Shortcut pressed, no action | Keybinds disabled or playback state blocks command | Enable `Config.Keybinds.Enabled`, verify playback state and shortcuts | `debug_keybinds_disabled`, `debug_keybinds_registered`, `debug_keybind_*` |
| YouTube short link not working | `youtu.be` link fails or mismatches | Invalid video ID or malformed query parameters | Use canonical `https://www.youtube.com/watch?v=...` or valid `youtu.be/...` | `debug_client_rejected_invalid_play_data`, `debug_server_invalid_payload_play` |
| Next/previous behaves unexpectedly | Track jumps or stops at end | Repeat mode/queue state mismatch | Validate repeat mode (`off/one/all`) and current playlist context | `debug_playlist_track_next`, `debug_mode_reset_on_track_end` |
| High webhook spam | Discord flooding or dropped embeds | Rate limit too high or abuse from repeated actions | Lower webhook limits and monitor queue behavior | `debug_webhook_rate_limited`, `debug_webhook_queue_overflow` |
| Settings update rejected | Save action returns invalid payload | Wrong value types in UI payload | Ensure booleans/theme/defaultVolume are valid before submit | `debug_settings_fetch_ok`, `debug_settings_updated` |

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
