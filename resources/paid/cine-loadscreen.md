<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/z6QeDTp4Nrg"
    title="SMDZ Cinematic Credits Loadscreen Showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_cine_loadscreen/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_cine_loadscreen) | [![](https://badges.5metrics.dev/smdz_cine_loadscreen/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_cine_loadscreen)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_cine_loadscreen`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

`SMDZ Cinematic Loadscreen` is a cinematic image-based loading screen for FiveM servers, inspired by American police TV show (Southland LAPD) opening credits and redesigned with a unique FiveM roleplay identity.

It creates a serious police-drama atmosphere using fullscreen images, smooth zoom effects, floating credits, film grain, loading status messages, music support, and fully configurable text.

---

# ⭐ **FEATURES:**

- 🎬 **Cinematic Opening Credits Style** – transforms the loading screen into a dramatic police-drama inspired intro.
- 🖼️ **Image-Based Slideshow** – uses server images from the assets folder with smooth transitions and zoom effects.
- 🔠 **Fully Configurable Texts** – every visible text can be edited from `config.lua`.
- 🎞️ **Film Grain & Visual Effects** – includes black and white filter, grain, scanlines, vignette, and cinematic bars.
- 🎭 **Dynamic Credits System** – custom credit items appear on screen with a clean cinematic animation.
- 🎵 **Optional Music System** – supports a custom `.mp3` file added by the server owner.




---

# 📦 **REQUIREMENTS:**

This resource is lightweight and does not require a framework.

- **FiveM server:** Latest recommended server build.
- **Framework:** Standalone.
- **Database:** Not required.
- **Dependencies:** None.
- **Supported media:**
  - Images: `.jpg`, `.jpeg`, `.png`
  - Music: `.mp3`
  - Videos: Not supported.

> This loading screen is image-based only. It does not support video backgrounds.

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_cine_loadscreen.zip`

2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_cine_loadscreen
```

3. Add the resource to your `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_cine_loadscreen
```

4. Add your images inside:

```text
smdz_cine_loadscreen/web/assets/slides/
```

Recommended image names:

```text
1.png
2.png
3.png

01.jpg
02.jpg
03.jpg

001.jpeg
002.jpeg
003.jpeg
```

5. Optional: add your server logo inside:

```text
smdz_cine_loadscreen/web/assets/logo/logo.png
```

6. Optional: add your own licensed music inside:

```text
smdz_cine_loadscreen/web/assets/music/theme.mp3
```

7. Restart your server or start the resource manually:

```bash
start smdz_cine_loadscreen
```

8. Check the server console for the SMDZ Studios startup print.

---

# ⚙️ **CONFIGURATION:**

Main configuration file:

```lua
--[[
    ╔══════════════════════════════════════════════════════════════════════════════╗
    ║                         Main Configuration File                              ║
    ╠══════════════════════════════════════════════════════════════════════════════╣
    ║  INDEX                                                                       ║
    ║  01. Branding                                                                ║
    ║  02. Slides                                                                  ║
    ║  03. Credits                                                                 ║
    ║  04. Logo                                                                    ║
    ║  05. Music                                                                   ║
    ║  06. Visual Effects                                                          ║
    ║  07. Controls                                                                ║
    ╚══════════════════════════════════════════════════════════════════════════════╝

    Photo folder:
    web/assets/slides/

    Supported examples:
    1.png, 2.png, 3.png
    01.jpg, 02.jpg, 03.jpg
    001.jpeg, 002.jpeg, 003.jpeg
]]

Config = { -- Main configuration table.

    --──────────────────────────────────────────────────────────────────────────
    -- 01. BRANDING
    --──────────────────────────────────────────────────────────────────────────

    branding = { -- Branding and loading copy settings.
        enabled = true, -- Enables or disables the main branding block with kicker, server name, and subtitle.
        scale = 0.82, -- Controls the general branding text size; lower values make the title block smaller.
        kicker = 'LOS SANTOS COUNTY', -- Small uppercase text displayed above the main server name.
        serverName = 'SERVER NAME', -- Main title displayed on the loading screen.
        subtitle = 'A CINEMATIC ROLEPLAY EXPERIENCE', -- Subtitle displayed below the main server name.
        loadingText = 'CONNECTING TO SERVER', -- Static loading label displayed above the progress bar.
        loadingStatusRandom = true, -- Enables random loading status messages from the list below.
        loadingStatusInterval = 4200, -- Time in milliseconds before changing to another random status.
        loadingStatus = { -- Random loading status messages displayed at the bottom left.
            'Preparing city assets...', -- Loading status option.
            'Syncing Los Santos streets...', -- Loading status option.
            'Loading patrol units...', -- Loading status option.
            'Setting up emergency channels...', -- Loading status option.
            'Checking county records...', -- Loading status option.
            'Bringing the city online...', -- Loading status option.
            'Finalizing roleplay systems...', -- Loading status option.
            'Almost ready...', -- Loading status option.
        },
    },

    --──────────────────────────────────────────────────────────────────────────
    -- 02. SLIDES
    --──────────────────────────────────────────────────────────────────────────

    slides = { -- Background photo slideshow settings.
        folder = 'assets/slides/', -- Folder where users must place their slideshow images.
        random = true, -- Shows photos in random order by default.
        maxSlides = 60, -- Maximum amount of numeric slide names the loader will try to find.
        duration = 7200, -- Time in milliseconds each photo stays on screen.
        extensions = { 'jpg', 'jpeg', 'png' }, -- Supported image extensions for automatic loading.
        customSlides = {}, -- Optional exact slide list; leave empty to use automatic numeric loading.
    },

    --──────────────────────────────────────────────────────────────────────────
    -- 03. CREDITS
    --──────────────────────────────────────────────────────────────────────────

    credits = { -- Floating cinematic credits settings.
        enabled = true, -- Enables or disables the floating credits text.
        duration = 4600, -- Time in milliseconds each credit stays visible before switching.
        scale = 0.78, -- Controls the general credit text size; lower values make credits smaller.
        randomPosition = true, -- Makes each credit appear in a different configured screen position.
        positions = { -- Screen positions used by the floating credits.
            'rightMiddle', -- Shows credits around the middle-right side of the screen.
            'leftMiddle', -- Shows credits around the middle-left side of the screen.
        },
        items = { -- Credit items displayed one by one.
            { label = 'CREATED BY', value = 'CHANGE - SMDZ STUDIOS' }, -- Credit item.
            { label = 'STARRING', value = 'YOUR COMMUNITY' }, -- Credit item.
            { label = 'SET IN', value = 'CHANGE ME' }, -- Credit item.
            { label = 'DIRECTED BY', value = 'CHANGE ME' }, -- Credit item.
            { label = 'POWERED BY', value = 'CHANGE ME' }, -- Credit item.
            { label = 'EXPERIENCE', value = 'CHANGE ME' }, -- Credit item.
        },
    },

    --──────────────────────────────────────────────────────────────────────────
    -- 04. LOGO
    --──────────────────────────────────────────────────────────────────────────

    logo = { -- Server logo settings.
        enabled = false, -- Enables or disables the logo image.
        file = 'assets/logo/logo.png', -- Logo file path; place your logo inside web/assets/logo/.
        opacity = 0.5, -- Logo opacity; 0.0 is invisible and 1.0 is fully visible.
    },

    --──────────────────────────────────────────────────────────────────────────
    -- 05. MUSIC
    --──────────────────────────────────────────────────────────────────────────

    music = { -- Background music settings.
        enabled = true, -- Enables or disables background music by default.
        file = 'assets/music/theme.mp3', -- Music file path; place your MP3 inside web/assets/music/.
        volume = 0.8, -- Music volume; 0.0 is muted and 1.0 is maximum volume.
        hintText = 'SPACE · MUSIC', -- Small music hint text displayed when music is enabled.
    },

    --──────────────────────────────────────────────────────────────────────────
    -- 06. VISUAL EFFECTS
    --──────────────────────────────────────────────────────────────────────────

    effects = { -- Visual effect settings.
        blackAndWhite = true, -- Enables a soft black and white look on photos.
        blackAndWhiteIntensity = 0.35, -- Black and white strength; 0.0 is none and 1.0 is full grayscale.
        grain = true, -- Enables the animated cinematic grain overlay.
        grainOpacity = 0.28, -- Grain visibility; higher values make the grain stronger.
        grainSize = 3, -- Grain dot size in pixels; higher values make the grain rougher.
        grainSpeed = 650, -- Grain animation speed in milliseconds; lower values move faster.
        scanlines = true, -- Enables subtle scanline texture over the image.
        vignette = true, -- Enables dark cinematic corners around the screen.
        cinematicBars = true, -- Enables black cinematic bars at the top and bottom.
        fallbackScene = true, -- Shows a fallback screen when no valid slide images are found.
    },

    --──────────────────────────────────────────────────────────────────────────
    -- 07. CONTROLS
    --──────────────────────────────────────────────────────────────────────────

    controls = { -- Keyboard and interaction settings.
        spaceTogglesMusic = true, -- Allows SPACE to pause or resume the background music.
    },

}

```

---

# 🎵 **MUSIC NOTICE:**

## 1. Music Is Not Provided

This resource does **not** include the original music, any copyrighted MP3 file, or any third-party soundtrack.

Due to the **CFX Creator Platform License Agreement**, creator terms, and general copyright rules, **SMDZ Studios does not provide, distribute, sell, upload, include, sample, remix, or package any copyrighted music** inside this FiveM resource.

The loading screen includes a **configurable music system only**.

Server owners may add their own music file inside the resource **only if they have the proper rights, permission, or license** to use and distribute that audio.

---

## 2. Music Reference Used for the Script

The music reference used while designing this script is a modified version uploaded by the YouTube user **bluegrass1dcr1**:

https://www.youtube.com/watch?v=4HoquUdlSfo

The original song is **Canção Do Mar** by **Dulce Pontes Oficial**.

This song is known for being used in the opening credits of the U.S. television show **Southland**, a police drama series based around the LAPD / Los Angeles police environment.

This reference is mentioned only for **transparency and context**.

> **Important:** This music is **not included** with this resource.

If you want to use the original song heard in the showcase video, **SMDZ Studios does not provide the audio file**. You must find and obtain it by your own means from an official or properly licensed source, and you must make sure you have the required rights, license, or permission before adding it to your server or resource.

**Showcase / reference video:**

https://www.youtube.com/watch?v=4HoquUdlSfo

---

## 3. User Responsibility

By installing, editing, uploading, reselling, streaming, recording, or using this resource, you are fully responsible for any music, images, videos, logos, trademarks, or other third-party content that you add to it.

**SMDZ Studios is not responsible for:**

- Copyright claims.
- DMCA notices.
- Platform moderation actions.
- Takedowns.
- Account penalties.
- Server penalties.
- Monetization issues.
- Any legal consequences caused by third-party content added by the buyer, server owner, developer, or end user.

If you decide to add music to this loading screen, make sure that it is:

- Your own original music.
- Royalty-free music with commercial usage rights.
- Music purchased with a license that allows use in FiveM, livestreams, videos, or commercial server projects.
- Music for which you have written permission from the rights holder.

---

## 4. Do Not Assume Public Videos Are Free to Use

A song being available on **YouTube, Spotify, Apple Music, SoundCloud, or any public website** does not automatically mean you are allowed to include it inside a FiveM resource, sell it, redistribute it, or use it in a monetized server.

Public availability does **not** equal redistribution rights.

---

## 5. SMDZ Studios Position

SMDZ Studios provides only the:

- Code.
- UI.
- Configurable loading screen system.
- Visual placeholders.
- Audio placeholder system required for customization.

Any third-party content added after purchase is added under the responsibility of the person or community using the resource.

If you are unsure whether you can use a specific song, image, logo, or video, **do not include it** until you have confirmed that you have the necessary rights.

---

# 🧪 **COMMON ISSUES:**

| Issue | Possible Cause | Solution |
|---|---|---|
| Resource does not start | The resource folder name was changed. | Make sure the folder is named exactly `smdz_cine_loadscreen`. |
| Resource stops automatically | The built-in resource name validation detected a wrong folder name. | Rename the folder back to `smdz_cine_loadscreen`. |
| Red errors appear in console | Files may be missing after extraction. | Re-extract the ZIP and make sure all folders are present. |
| Loading screen does not show | Another loading screen may be running before this one. | Disable other loading screen resources and keep only this one ensured. |
| Images do not appear | Images are not inside the correct folder. | Place images inside `web/assets/slides/`. |
| Images do not appear | Unsupported image extension. | Use `.jpg`, `.jpeg`, or `.png` only. |
| Images do not appear | Image names are not numeric. | Use names like `1.png`, `2.png`, `3.png`, `01.jpg`, `02.jpg`, or `001.jpeg`. |
| Only some images appear | `slides.maxSlides` is lower than the amount of images you added. | Increase `slides.maxSlides` in `config.lua`. |
| Same images appear too often | Random mode reshuffles after all images are used. | This is normal behavior. Add more images for more variety. |
| Fallback screen appears | No valid slide images were detected. | Check image folder, file names, extensions, and file integrity. |
| Loading screen looks too dark | Vignette, black and white, or image effects may be too strong. | Reduce `blackAndWhiteIntensity`, disable `vignette`, or use brighter images. |
| Text is too large | Branding or credits scale is too high. | Lower `branding.scale` or `credits.scale` in `config.lua`. |
| Text is too small | Branding or credits scale is too low. | Increase `branding.scale` or `credits.scale` in `config.lua`. |
| Credits do not show | Credits are disabled. | Set `credits.enabled = true` in `config.lua`. |
| Credits appear in the wrong place | Credit positions are configured differently. | Edit `credits.positions` in `config.lua`. |
| Logo does not appear | Logo is disabled. | Set `logo.enabled = true` in `config.lua`. |
| Logo does not appear | Logo file is missing or path is wrong. | Place your logo at `web/assets/logo/logo.png` or update `logo.file`. |
| Logo is too visible | Logo opacity is too high. | Lower `logo.opacity`, for example `0.4` or `0.5`. |
| Music does not play | Music is disabled. | Set `music.enabled = true` in `config.lua`. |
| Music does not play | MP3 file is missing or incorrectly named. | Place your file at `web/assets/music/theme.mp3`. |
| Music does not play automatically | Browser audio restrictions may block autoplay for some clients. | Press `SPACE` if music controls are enabled. |
| Music is too loud | Volume is too high. | Lower `music.volume`, for example `0.4` or `0.5`. |
| Music is too quiet | Volume is too low. | Increase `music.volume`, maximum is `1.0`. |
| Loading screen closes too fast | The server/client loads very quickly. | Increase `loading.minimumDisplayTime` slightly, but avoid very high values on public servers. |
| Loading progress feels stuck | FiveM load progress events may not always update smoothly. | This is normal; the UI also includes smooth progress behavior. |
| Config changes do not apply | Resource was not restarted after editing. | Restart the resource or restart the server. |



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
