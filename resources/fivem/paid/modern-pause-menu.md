<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/nMjV-Jid_Jc"
    title="smdz_modern_pausemenu showcase"
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

[![](https://badges.5metrics.dev/smdz_modern_pausemenu/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_modern_pausemenu) | [![](https://badges.5metrics.dev/smdz_modern_pausemenu/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_modern_pausemenu)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_modern_pausemenu`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox (QBX)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SMDZ Modern Pause Menu is a FiveM pause menu replacement inspired by the atmosphere of Vice City-style sagas and redesigned with a clean, modern interface. It combines live player information, persistent NEWS, cinematic Photo Mode, socials, personal UI settings and secure staff administration in one experience.

---


# ⭐ **FEATURES:**

🎮 **Modern Pause Menu Experience** — A polished React interface with smooth transitions, responsive layouts, native GTA map/settings integration and a distinctive modern Vice City-inspired presentation.
👤 **Dynamic Player Profile & Private Showcase** — Live job, money, health, armor, stamina, session information and online services alongside a local-only cinematic character or vehicle preview that other players cannot see.
🎨 **Persistent Player Personalization** — Players can choose Discord, Steam or custom profile pictures, adjust avatar crop/zoom, enable reduced motion, control UI volume and optionally select their own accent color, all saved in SQL.
📰 **Advanced SQL-Powered News** — Rich-text announcements, categories, featured posts, real-time synchronization, multi-image animated carousels, full-size image viewing and previous/next gallery navigation.
📸 **Cinematic Photo Mode** — Smooth free camera movement, precision and boost controls, 50+ filters, extended FOV/zoom, depth of field, HUD controls and quick reset functionality.
🌐 **Interactive Social Hub** — Configurable Discord, store, website, TikTok, Instagram, YouTube and X/Twitter links presented through animated 3D social cards.
🛡️ **Secure Staff Administration** — Granular framework/ACE permissions for creating, editing, featuring and deleting NEWS, with server-side validation, sanitization, rate limiting and optional translated Discord audit logs.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended server artifact.
- **Database:** `oxmysql`
- **Optional integrations:**
  - Discord bot token for Discord profile pictures/usernames.
  - Discord webhook for News administration audit logs.


### Framework Providers

- `qbx_core` for Qbox
- `qb-core` for QBCore
- `es_extended` for ESX

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_modern_pausemenu_v1.0.0.zip`
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_modern_pausemenu
```

3. Make sure your database and framework start before the pause menu, then add the resource to `server.cfg`:

```bash
## SMDZ Studios
ensure oxmysql
# ensure es_extended
# ensure qb-core
# ensure qbx_core
ensure smdz_modern_pausemenu
```

4. Configure `config.lua` and `server_config.lua` before first use.

5. The resource automatically creates the required NEWS and player-preference tables when `oxmysql` is available. A manual SQL file is also included:

```text
smdz_modern_pausemenu.sql
```

6. Restart your server or start the resource manually:

```bash
start smdz_modern_pausemenu
```

---

# ⚙️ **CONFIGURATION:**

The main owner-facing settings are in `config.lua`. Server-only credentials, Discord integrations and txAdmin fallback restart times are kept in `server_config.lua`.

`config.lua:`
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



-- ============================================================================
-- SMDZ MODERN PAUSE MENU - SHARED CONFIGURATION
-- ============================================================================
-- This file contains owner-facing settings only. Security-sensitive values and
-- internal timing/framing constants are intentionally kept inside the resource.
--
-- INDEX
--   [01] General
--   [02] Player Settings
--   [03] Transitions
--   [04] UI Sounds
--   [05] Weather Display
--   [06] Player Profile & Online Services
--   [07] Character / Vehicle Preview
--   [08] Photo Mode
--   [09] Social Links
--   [10] News Presentation
--   [11] Economy
--   [12] Leave Server Messages
--   [13] Administration & Permissions
-- ============================================================================

Config = Config or {} -- Reuse the global configuration table if another file initialized it.

-- ============================================================================
-- [01] GENERAL
-- ============================================================================
Config.Locale = 'en' -- Interface language. Available: en, es, fr, de, it, pt, pl.
Config.ServerName = 'YOUR SERVER NAME' -- Server name displayed throughout the pause menu.
Config.FooterText = 'PLACE YOUR TEXT HERE' -- Small footer text shown at the bottom-left of the pause menu.
Config.Framework = 'auto' -- Framework provider: auto, qbox, qbcore or esx.
Config.ReplaceDefaultPause = true -- Replace GTA's default pause key with this pause menu.
Config.Command = 'pausemenu' -- Command used to open or close the custom pause menu.
Config.Accent = {
    Default = '#e77eaa', -- Default interface accent color in HEX format.
    AllowPlayerCustomization = true -- Allow each player to save a personal accent color from PLAYER SETTINGS.
}
Config.Debug = false -- Print detailed diagnostic information when troubleshooting.

-- ============================================================================
-- [02] PLAYER SETTINGS
-- ============================================================================
Config.PlayerSettings = {
    Enabled = true, -- Enable the PLAYER SETTINGS button and persistent per-player preferences.
    AllowAvatarCustomization = true, -- Allow Discord, Steam and custom URL profile picture selection.
    DefaultReducedMotion = false, -- Default reduced-motion preference for new players.
    DefaultVolume = 80, -- Default pause-menu UI volume from 0 to 100.
    AllowResetToDefaults = true -- Show the RESET TO DEFAULTS action inside PLAYER SETTINGS.
}

-- ============================================================================
-- [03] TRANSITIONS
-- ============================================================================
Config.Transitions = {
    Enabled = true, -- Enable this feature.
    ScreenBlur = true, -- Use GTA screen blur during menu transitions.
    BlurInMs = 120, -- Blur fade-in duration in milliseconds.
    BlurOutMs = 140 -- Blur fade-out duration in milliseconds.
}

-- ============================================================================
-- [04] UI SOUNDS
-- ============================================================================
Config.Sounds = {
    Enabled = true, -- Enable this feature.
    HoverCooldownMs = 70, -- Minimum delay between repeated hover sounds.
    Events = {
        open = { name = 'NAV_UP_DOWN', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' }, -- Sound played when the pause menu opens.
        hover = { name = 'NAV_UP_DOWN', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' }, -- Sound played on interactive hover.
        tab = { name = 'NAV_UP_DOWN', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' }, -- Sound played when switching tabs.
        select = { name = 'SELECT', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' }, -- Sound played when selecting an action.
        modal = { name = 'NAV_UP_DOWN', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' }, -- Sound played when a modal opens.
        confirm = { name = 'SELECT', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' }, -- Sound played when confirming an action.
        close = { name = 'BACK', set = 'HUD_FRONTEND_DEFAULT_SOUNDSET' } -- Sound played when closing or going back.
    }
}

-- ============================================================================
-- [05] WEATHER DISPLAY
-- ============================================================================
Config.Weather = {
    TemperatureUnit = 'C', -- Display temperature in Celsius ('C') or Fahrenheit ('F').
    ServerTemperatureUnit = 'C' -- Unit expected from server-provided temperature data.
}

-- ============================================================================
-- [06] PLAYER PROFILE & ONLINE SERVICES
-- ============================================================================
Config.Profile = {
    DisplayNameSource = 'character', -- Name source: character, discord or steam.

    OnlineJobs = {
        Enabled = true, -- Enable this feature.
        OnlyDuty = false, -- Count only on-duty players when true.
        HideZero = false, -- Hide service rows with zero connected players when true.
        CacheMs = 1500, -- Server cache duration for online service counts.
        Jobs = {
            { key = 'police', labelKey = 'online_police', icon = 'shield', minimum = 2, jobs = { 'police', 'sheriff' } }, -- Online service definition and minimum availability threshold.
            { key = 'ambulance', labelKey = 'online_ambulance', icon = 'medical', minimum = 1, jobs = { 'ambulance', 'ems' } }, -- Online service definition and minimum availability threshold.
            { key = 'mechanic', labelKey = 'online_mechanic', icon = 'wrench', minimum = 1, jobs = { 'mechanic' } } -- Online service definition and minimum availability threshold.
        }
    }
}

-- ============================================================================
-- [07] CHARACTER / VEHICLE PREVIEW
-- ============================================================================
Config.CharacterPreview = {
    enabled = true, -- Enable this feature.
    useWeapon = false, -- Keep preview poses free of equipped weapons.
    ShowOnAllTabs = false, -- Render the cloned character only on MY PROFILE.

    VehiclePreview = {
        enabled = true, -- Enable this feature.
        Fov = 38.0, -- Vehicle preview field of view.
        TransitionDuration = 260, -- Vehicle preview camera transition duration.
        SideScale = 1.08, -- Vehicle camera lateral distance scaling.
        ForwardScale = 1.45, -- Vehicle camera forward distance scaling.
        HeightScale = 1.22, -- Vehicle camera height scaling.
        TargetHeightScale = 0.43, -- Vehicle camera target height scaling.
        MinSideOffset = 2.15, -- Minimum lateral vehicle camera offset.
        MinForwardOffset = 5.0, -- Minimum forward vehicle camera offset.
        MinHeightOffset = 1.65, -- Minimum vehicle camera height offset.
        MinTargetHeight = 0.45, -- Minimum target height for vehicle framing.
        TargetForwardOffset = 0.0, -- Forward aim offset for vehicle preview.
        NearDof = 1.5, -- Near depth-of-field distance for vehicle preview.
        FarDof = 12.0, -- Far depth-of-field distance for vehicle preview.
        DofStrength = 0.75 -- Depth-of-field strength for vehicle preview.
    },

    VehicleGrounding = {
        enabled = true, -- Enable this feature.
        probeHeight = 50.0, -- Ground probe height used by the on-foot fallback.
        timeoutMs = 650, -- Maximum ground probe time in milliseconds.
        zOffset = 0.03 -- Small vertical correction after ground detection.
    },

    Lighting = {
        enabled = true -- Enable or disable the dedicated preview lighting.
    },

    Randomizer = {
        enabled = true, -- Enable this feature.
        PersistCache = true, -- Remember the selected random pose in local KVP cache.
        Presets = {
            { type = 'anim', animDict = 'amb@world_human_hang_out_street@male_c@idle_a', anim = 'idle_b', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'amb@world_human_hang_out_street@male_b@idle_a', anim = 'idle_b', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'amb@world_human_hang_out_street@male_a@idle_a', anim = 'idle_a', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'amb@world_human_stand_impatient@male@no_sign@base', anim = 'base', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'amb@world_human_stand_guard@male@base', anim = 'base', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a', anim = 'idle_a', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'amb@world_human_leaning@male@wall@back@legs_crossed@idle_a', anim = 'idle_a', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@heists@heist_corona@single_team', anim = 'single_team_loop_boss', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@thumbs_up', anim = 'thumbs_up', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@salute', anim = 'salute', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@peace', anim = 'peace', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@slow_clap', anim = 'slow_clap', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@knuckle_crunch', anim = 'knuckle_crunch', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@jazz_hands', anim = 'jazz_hands', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@face_palm', anim = 'face_palm', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@wave', anim = 'wave', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@air_guitar', anim = 'air_guitar', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@dj', anim = 'dj', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@raise_the_roof', anim = 'raise_the_roof', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@rock', anim = 'rock', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@mind_blown', anim = 'mind_blown', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@you_loco', anim = 'you_loco', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@finger_kiss', anim = 'finger_kiss', flag = 49 }, -- Animation-only character preview pose.
            { type = 'anim', animDict = 'anim@mp_player_intcelebrationmale@nod_yes', anim = 'nod_yes', flag = 49 } -- Animation-only character preview pose.
        }
    }
}

-- ============================================================================
-- [08] PHOTO MODE
-- ============================================================================
Config.PhotoMode = {
    enabled = true, -- Enable this feature.
    DefaultFov = 50.0, -- Default Photo Mode field of view.
    MinFov = 8.0, -- Minimum allowed Photo Mode field of view.
    MaxFov = 120.0, -- Maximum allowed Photo Mode field of view.
    FovStep = 2.5, -- Field-of-view change per input step.

    MoveSpeed = 3.0, -- Base free-camera movement speed.
    SlowMultiplier = 0.28, -- Precision movement multiplier while the slow key is held.
    BoostMultiplier = 2.15, -- Fast movement multiplier while boost is held.
    MovementAcceleration = 4.2, -- Free-camera acceleration smoothing.
    MovementDamping = 5.2, -- Free-camera deceleration damping.
    RotationSmoothing = 11.5, -- Camera rotation smoothing factor.
    FovSmoothing = 9.0, -- Field-of-view interpolation smoothing.
    LookSensitivity = 4.8, -- Mouse/controller look sensitivity.
    EffectStrengthStep = 0.10, -- Filter intensity adjustment step.
    DefaultEffectStrength = 1.0, -- Default timecycle filter intensity.

    Reset = {
        Enabled = true, -- Enable this feature.
        Control = 45, -- R / INPUT_RELOAD
        ResetPosition = false -- Keep current camera position when resetting settings.
    },

    Dof = {
        enabled = true, -- Enable this feature.
        nearDistance = 0.8, -- Default near depth-of-field distance.
        farDistance = 9.0, -- Default far depth-of-field distance.
        strength = 1.0 -- Default depth-of-field strength.
    },

    Filters = {
        { localeKey = 'filter_none', modifier = nil }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_cinematic', modifier = 'cinema' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_01', modifier = 'NG_filmic01' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_02', modifier = 'NG_filmic02' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_03', modifier = 'NG_filmic03' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_04', modifier = 'NG_filmic04' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_05', modifier = 'NG_filmic05' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_06', modifier = 'NG_filmic06' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_07', modifier = 'NG_filmic07' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_08', modifier = 'NG_filmic08' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_09', modifier = 'NG_filmic09' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_10', modifier = 'NG_filmic10' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_warm', modifier = 'NG_filmic11' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_cold', modifier = 'NG_filmic12' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_noir', modifier = 'NG_filmic13' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_retro', modifier = 'NG_filmic14' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_sunset', modifier = 'NG_filmic15' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_night', modifier = 'NG_filmic16' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_desaturated', modifier = 'NG_filmic17' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_high_contrast', modifier = 'NG_filmic18' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_soft', modifier = 'NG_filmic19' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_20', modifier = 'NG_filmic20' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_21', modifier = 'NG_filmic21' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_22', modifier = 'NG_filmic22' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_23', modifier = 'NG_filmic23' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_24', modifier = 'NG_filmic24' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_filmic_25', modifier = 'NG_filmic25' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_vibrant', modifier = 'MP_corona_switch' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_security', modifier = 'CAMERA_secuirity' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_camera_bw', modifier = 'CAMERA_BW' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_dramatic', modifier = 'yell_tunnel_nodirect' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_underwater', modifier = 'underwater' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_dream', modifier = 'spectator5' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_spectator_1', modifier = 'spectator1' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_spectator_2', modifier = 'spectator2' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_spectator_3', modifier = 'spectator3' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_spectator_4', modifier = 'spectator4' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_spectator_6', modifier = 'spectator6' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_saturation', modifier = 'rply_saturation' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_negative', modifier = 'rply_saturation_neg' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_contrast', modifier = 'rply_contrast' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_vignette', modifier = 'rply_vignette' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_vignette_negative', modifier = 'rply_vignette_neg' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_phone', modifier = 'phone_cam' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_phone_soft', modifier = 'phone_cam1' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_phone_warm', modifier = 'phone_cam2' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_scanline', modifier = 'scanline_cam' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_scanline_soft', modifier = 'scanline_cam_cheap' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_barry', modifier = 'Barry1_Stoned' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_drug_drive_1', modifier = 'drug_drive_blend01' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_drug_drive_2', modifier = 'drug_drive_blend02' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_flying_1', modifier = 'drug_flying_01' }, -- Photo Mode timecycle filter preset.
        { localeKey = 'filter_flying_2', modifier = 'drug_flying_02' } -- Photo Mode timecycle filter preset.
    }
}

-- ============================================================================
-- [09] SOCIAL LINKS
-- ============================================================================
Config.Socials = {
    Enabled = true, -- Enable this feature.

    Items = {
        { type = 'discord', labelKey = 'social_discord', descriptionKey = 'social_desc_discord', featured = true, url = 'https://discord.gg/yourserver' }, -- Configurable server social link.
        { type = 'store', labelKey = 'social_store', descriptionKey = 'social_desc_store', featured = true, url = 'https://store.yourserver.com' }, -- Configurable server social link.
        { type = 'website', labelKey = 'social_website', descriptionKey = 'social_desc_website', featured = false, url = 'https://yourserver.com' }, -- Configurable server social link.
        { type = 'tiktok', labelKey = 'social_tiktok', descriptionKey = 'social_desc_tiktok', featured = false, url = 'https://www.tiktok.com/@yourserver' }, -- Configurable server social link.
        { type = 'instagram', labelKey = 'social_instagram', descriptionKey = 'social_desc_instagram', featured = false, url = 'https://www.instagram.com/yourserver' }, -- Configurable server social link.
        { type = 'youtube', labelKey = 'social_youtube', descriptionKey = 'social_desc_youtube', featured = false, url = 'https://www.youtube.com/@yourserver' }, -- Configurable server social link.
        { type = 'x', labelKey = 'social_x', descriptionKey = 'social_desc_x', featured = false, url = 'https://x.com/yourserver' } -- Configurable X / Twitter social link.
    }
}

-- ============================================================================
-- [10] NEWS PRESENTATION
-- ============================================================================
Config.News = {
    DefaultCategory = 'announcement', -- Default category selected when creating news.
    Categories = {
        { key = 'announcement', labelKey = 'news_category_announcement' }, -- Translatable news category.
        { key = 'update', labelKey = 'news_category_update' }, -- Translatable news category.
        { key = 'event', labelKey = 'news_category_event' }, -- Translatable news category.
        { key = 'maintenance', labelKey = 'news_category_maintenance' }, -- Translatable news category.
        { key = 'community', labelKey = 'news_category_community' } -- Translatable news category.
    }
}

-- ============================================================================
-- [11] ECONOMY
-- ============================================================================
Config.BlackMoney = {
    Enabled = true, -- Enable this feature.
    Source = 'account', -- Black money source: account or item.
    AccountName = 'black_money', -- Framework account name used for black money.
    ItemName = 'black_money' -- Inventory item name used for black money.
}

-- ============================================================================
-- [12] LEAVE SERVER MESSAGES
-- ============================================================================
Config.Leave = {
    Messages = {
        'Thanks for visiting our server. We hope to see you again soon.',
        'We hope you enjoyed your stay. See you next time!',
        'It was a pleasure having you here. Come back soon.',
        'Safe travels, and thanks for spending time with us.',
        'See you soon! The city will be waiting for your return.',
        'Thanks for playing with us today. Until next time!',
        'Your session may be over, but the city will still be here when you return.',
        'Take care out there. We hope to welcome you back soon.',
        'Thanks for being part of the server today. See you around!',
        'Goodbye for now. We look forward to seeing you again.'
    }
}

-- ============================================================================
-- [13] ADMINISTRATION & PERMISSIONS
-- ============================================================================
Config.Admin = {
    Groups = {
        admin = true, -- Allow the framework 'admin' group to access ADMIN.
        owner = true, -- Allow the framework 'owner' group to access ADMIN.
        dev = true -- Allow the framework 'dev' group to access ADMIN.
    },
    AcePermissions = {
        'smdz.modern_pausemenu.admin' -- ACE permission that grants access to the ADMIN tab.
    },

    Permissions = {
        CreateNews = {
            Groups = { admin = true, owner = true, dev = true }, -- Framework groups allowed to create news.
            AcePermissions = { 'smdz.modern_pausemenu.news.create' } -- ACE permission allowed to create news.
        },
        DeleteNews = {
            Groups = { admin = true, owner = true, dev = true }, -- Framework groups allowed to delete news.
            AcePermissions = { 'smdz.modern_pausemenu.news.delete' } -- ACE permission allowed to delete news.
        },
        EditNews = {
            Groups = { admin = true, owner = true, dev = true }, -- Framework groups allowed to edit news.
            AcePermissions = { 'smdz.modern_pausemenu.news.edit' } -- ACE permission allowed to edit news.
        },
        PinNews = {
            Groups = { admin = true, owner = true, dev = true }, -- Framework groups allowed to feature or unfeature news.
            AcePermissions = { 'smdz.modern_pausemenu.news.pin' } -- ACE permission allowed to feature or unfeature news.
        }
    }
}

```
`server_config.lua:`
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



-- ============================================================================
-- SMDZ MODERN PAUSE MENU - SERVER-ONLY CONFIGURATION
-- ============================================================================
-- Keep this file in server_scripts only. Never expose tokens or webhooks to NUI
-- or client scripts.
--
-- INDEX
--   [01] Discord Profile Integration
--   [02] Avatar Providers
--   [03] Administration Audit Logs
--   [04] txAdmin Restart Schedule Fallback
-- ============================================================================

ServerConfig = ServerConfig or {}

-- ============================================================================
-- [01] DISCORD PROFILE INTEGRATION
-- ============================================================================
ServerConfig.DiscordBotToken = '' -- Optional Discord bot token used to resolve Discord avatars and usernames.

-- ============================================================================
-- [02] AVATAR PROVIDERS
-- ============================================================================
ServerConfig.Avatar = { -- Configure external avatar provider priority and caching.
    DiscordEnabled = true, -- Try Discord first when a discord: identifier is available.
    SteamEnabled = true, -- Fall back to Steam when a usable Steam profile is available.
    CacheSeconds = 1800 -- Cache resolved external profile data for this many seconds.
} -- End avatar provider configuration.

-- ============================================================================
-- [03] ADMINISTRATION AUDIT LOGS
-- ============================================================================
ServerConfig.Audit = { -- Optional Discord webhook logging for NEWS administration actions.
    Enabled = false, -- Enable or disable audit webhook delivery.
    Webhook = '', -- Discord webhook URL used for audit messages.
    Username = 'SMDZ Modern Pause Menu', -- Display name used by the audit webhook.
    AvatarUrl = '', -- Optional avatar URL used by the audit webhook.
    EmbedColor = 15171242, -- Decimal embed color used for all administration logs.
    IncludeNewsPreview = true, -- Include a short plain-text preview of the news body.
    IncludeImageCount = true, -- Include the amount of attached news images.
    IncludePlayerIdentifiers = false -- Include player license/Discord identifiers in logs when available.
} -- End audit log configuration.

-- ============================================================================
-- [04] TXADMIN RESTART SCHEDULE FALLBACK
-- ============================================================================
-- txAdmin only broadcasts its scheduledRestart event during the final warning
-- window (30/15/10/5/4/3/2/1 minutes before restart). To show long-range
-- countdowns such as 18 hours, mirror the daily restart times configured in
-- txAdmin below. Times use the FXServer machine's local timezone, the same
-- timezone txAdmin shows for its scheduler. txAdmin events remain authoritative
-- once they begin broadcasting and automatically override this fallback.
ServerConfig.RestartSchedule = {
    Enabled = true, -- Enable long-range countdown calculation from the daily schedule below.
    Times = {
        '00:00', -- Example: midnight restart.
        '06:00', -- Example: 06:00 restart.
        '12:00', -- Example: midday restart.
        '18:00'  -- Example: 18:00 restart.
    }
}
```


---

# 🎮 **USAGE:**

SMDZ Modern Pause Menu can replace the normal GTA pause flow or be opened through its registered command/keybind. Players receive MY PROFILE, MAP, NEWS, PHOTO MODE, SOCIALS, SETTINGS and PLAYER SETTINGS. ADMIN is only displayed after a successful server-side permission check.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/pausemenu` | Opens or closes SMDZ Modern Pause Menu. | Available to players. |

### Keybinds

- **Default key:** `F10` — opens the pause menu.
- FiveM players can rebind the registered key mapping from their game settings.
- `Config.ReplaceDefaultPause = true` can be used to replace the normal GTA pause behavior.

### UI / Menus

**MY PROFILE** displays the player's live identity, job, money, health, armor, remaining stamina, session data, Server ID, ping and configured online services. The character preview is created locally and is never networked to other players; when opened inside a vehicle, the menu frames the player's real vehicle instead.

**PLAYER SETTINGS** stores per-player preferences in SQL, including avatar provider, custom avatar URL, crop/zoom position, reduced motion, accent color when allowed and UI volume. The RESET TO DEFAULTS option can be enabled or disabled from `Config.PlayerSettings.AllowResetToDefaults`.

**NEWS** supports persistent rich-text posts with categories, featured articles and multiple images. Multi-image cards rotate automatically with a smooth carousel. When an article is opened, players can navigate its images using dedicated previous/next buttons, thumbnails and a full-screen image viewer.

**PHOTO MODE** includes free camera movement, more than 50 visual filters, an extended `8°–120°` FOV range, DOF, precision movement, boost movement, player visibility controls and a hideable Photo Mode HUD.

**SOCIALS** provides configurable links for Discord, store, website, TikTok, Instagram, YouTube and X/Twitter.

**ADMIN NEWS** allows authorized staff to create, edit, feature/unfeature and delete NEWS without leaving the game.

### Photo Mode controls

| Control | Action |
|---|---|
| `W / A / S / D` | Move camera |
| Mouse | Look around |
| `Q / E` | Move down / up |
| `CTRL` | Precision movement |
| `SHIFT` | Movement boost |
| Mouse wheel | Adjust FOV / zoom |
| Left / Right | Previous / next filter |
| Up / Down | Filter strength |
| `G` | Toggle depth of field |
| `X` | Toggle player visibility |
| `H` | Hide / show Photo Mode controls |
| `R` | Reset Photo Mode settings |
| `ESC` | Exit Photo Mode |

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

SMDZ Modern Pause Menu `v1.0.0` does **not expose a public developer API**. Its network events and NUI callbacks are internal implementation details and should not be treated as supported integration endpoints.

### Server Events

No public server events are currently documented for external resources.

| Event name | Parameters | Description |
|---|---|---|
| — | — | No public server events in `v1.0.0`. |

### Client Events

No public client events are currently documented for external resources.

| Event name | Parameters | Description |
|---|---|---|
| — | — | No public client events in `v1.0.0`. |

### Exports

No public client or server exports are currently exposed.

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| — | — | — | — | No public exports in `v1.0.0`. |

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource does not start | Confirm the folder is named exactly `smdz_modern_pausemenu` and `ensure smdz_modern_pausemenu` exists in `server.cfg`. Make sure `oxmysql` and your framework start first. Check the FXServer console for the first red error rather than later follow-up errors. |
| Framework shows as not ready | Verify `Config.Framework`. With `auto`, the resource checks `qbx_core`, `qb-core` and `es_extended`. Confirm the selected framework resource is already started before this resource. |
| Database / NEWS errors | Confirm `oxmysql` is started and connected. The resource auto-creates its tables, but `smdz_modern_pausemenu.sql` is also included for manual setup. Check that the database user has permission to create/alter tables. |
| NEWS list is empty | Confirm there are rows in `smdz_modern_pausemenu_news`. You can use `smdz_modern_pausemenu_placeholder_news.sql` for test content. Restart the resource after database connectivity issues are fixed. |
| NEWS images do not load | Use direct `http://` or `https://` image URLs accessible from the FiveM CEF browser. Avoid expired/private CDN links. If an article has several images, verify every URL is valid. |
| NEWS image carousel does not animate | Check whether the player's Reduced Motion preference is enabled. Reduced Motion intentionally disables or simplifies several interface animations. |
| ADMIN tab does not appear | ADMIN visibility is permission-protected server-side. Verify the player's framework group or ACE permissions in `Config.Admin` and restart/reconnect after changing ACE rules. |
| Cannot create/edit/delete/feature NEWS | Each NEWS action has its own permission block. Check `CreateNews`, `EditNews`, `DeleteNews` and `PinNews`, including their framework groups and ACE permissions. |
| Discord avatar does not appear | Ensure `ServerConfig.DiscordBotToken` is valid and the player has a `discord:` identifier. If Discord cannot resolve the image, the resource can fall back to Steam or the in-game headshot depending on availability. |
| Steam avatar does not appear | The player needs a usable Steam identifier/profile. Steam is only used when enabled in `ServerConfig.Avatar`. Auto/fallback behavior may select another avatar provider. |
| Custom avatar is badly framed | Open PLAYER SETTINGS and adjust zoom, horizontal position and vertical position. Save the settings so the crop persists in SQL. |
| Player accent color cannot be changed | Check `Config.Accent.AllowPlayerCustomization`. When disabled by the server owner, the UI intentionally shows an informational red notice instead of allowing personal accent changes. |
| Player settings do not persist | Confirm the `smdz_modern_pausemenu_preferences` table exists and `oxmysql` is working. Check server console errors when pressing SAVE SETTINGS. |
| txAdmin restart shows only close to restart | txAdmin broadcasts scheduled restart information during its warning window. For long-range daily countdowns, mirror the server's normal daily restart times in `ServerConfig.RestartSchedule.Times`. |
| Long-range restart time is wrong | `ServerConfig.RestartSchedule.Times` uses the FXServer machine's local timezone. Make sure those times match the schedule shown by txAdmin on the host machine. |
| `NO UPCOMING RESTARTS` is shown | No active txAdmin warning has been received and no valid future fallback time is configured. Add the normal daily schedule to `ServerConfig.RestartSchedule.Times` if needed. |
| Character preview can be seen by other players | The intended preview clone is local-only and non-networked. If another script is duplicating or networking entities, test with that resource stopped and check for entity-manipulation conflicts. |
| Character preview is missing inside a vehicle | This is intentional. When the menu is opened inside a vehicle, the resource uses a cinematic camera on the player's real vehicle rather than spawning the character clone. |
| Photo Mode camera feels limited | Use the mouse wheel for the full configured FOV range and hold `SHIFT` for faster movement or `CTRL` for precision movement. The anti-abuse travel limit is intentionally enforced internally. |
| UI looks corrupted or shows locale key names | Confirm all files from the same release were installed together and clear any stale FiveM cache if an old `web/dist` build is still being loaded. The included locales support `en`, `es`, `fr`, `de`, `it`, `pt` and `pl`. |
| UI does not fit the screen correctly | Use a supported standard resolution/aspect ratio and make sure Windows/FiveM scaling is not forcing an unusual CEF zoom. The UI includes responsive rules for common 16:9 and ultrawide resolutions. |
| Pause menu has no sounds | Check `Config.Sounds.Enabled` and the player's personal pause-menu volume. A player volume of `0` mutes menu sounds even when global sounds are enabled. |
| Discord audit log is not sent | Enable `ServerConfig.Audit.Enabled`, add a valid webhook URL and check server outbound connectivity. Audit logs are optional and do not affect normal NEWS operation. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
| --- | --- |
| Can players see another player's character render? | No. The MY PROFILE clone is created locally and is not networked, so it is visible only to the player who opened the pause menu. |
| Which frameworks are supported? | ESX, QBCore and Qbox/QBX are supported. `Config.Framework = 'auto'` can automatically select a running supported framework. |
| Which languages are included? | English, Spanish, French, German, Italian, Portuguese and Polish are included: `en`, `es`, `fr`, `de`, `it`, `pt` and `pl`. |
| Are player settings persistent? | Yes. Avatar preferences, crop/zoom, Reduced Motion, personal accent color when permitted and pause-menu volume are stored in SQL. |
| Can I disable player accent customization? | Yes. Set `Config.Accent.AllowPlayerCustomization = false`. The color option will show a small red notice explaining that the server owner disabled it. |
| Can players restore their settings to the original defaults? | Yes. Keep `Config.PlayerSettings.AllowResetToDefaults = true` to show RESET TO DEFAULTS in PLAYER SETTINGS. |
| Can one NEWS article contain several images? | Yes. NEWS supports multiple image URLs. Cards automatically cycle through them, and opened articles provide previous/next buttons, thumbnails, counters and full-screen gallery navigation. |
| Does NEWS update without reopening the pause menu? | Yes. NEWS changes are synchronized to connected players in real time. |
| Can I restrict different NEWS actions separately? | Yes. Create, edit, delete and feature/unfeature permissions are individually configurable through framework groups and ACE permissions. |
| Does Photo Mode allow strong zoom? | Yes. The current Photo Mode uses an extended `8°–120°` FOV range for both tighter and wider cinematic framing. |
| Why does the startup banner show a NEWS number? | The banner queries the current `smdz_modern_pausemenu_news` SQL table at startup and displays how many NEWS posts currently exist. |
| Does the resource include React source files? | Yes. Editable source files are included under `web/src`, while the production UI used by FiveM is shipped as a compact hashed build under `web/dist`. |
| Is there a public API for other scripts? | Not in `v1.0.0`. Internal events and callbacks are not considered stable public integration points. |
| Do I have to configure txAdmin restart times twice? | Only if you want long-range countdowns before txAdmin begins broadcasting its normal warning events. Once txAdmin sends an active scheduled-restart event, that event takes priority over the fallback schedule. |



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
