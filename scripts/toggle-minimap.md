# PREMIUM RADAR & MINIMAP TOGGLE
<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/UOqLiRLXrd0"
    title="SMDZ Fast Repair Showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>


## 🧩 **OVERVIEW:**
- **Name:** `fast_repair_sergioomdz`
- **Author:** SMDZ Studios
- **Framework:** ESX / QBCore 
- **Version:** `1.0.0`
- **Status:** <span class="badge badge--stable">Stable</span>

Fast Repair is a modern, professional, and highly configurable vehicle repair script for FiveM.
It brings immersive repair experiences with animated NPCs, visual effects, cooldowns, and full framework support ESX/QBCore.

## 📦 **REQUIREMENTS:**
- FiveM server (latest build)
- ESX / QBCore / Standalone
- Optional: Notification systems


## ⚡ **FEATURES:**
- - Instantly hide or show your minimap & radar
Multilanguage support (English, Spanish, Portuguese)
- No dependencies (works with any server)
- ACE permissions for admin control
- Clean, safe code with server-side checks

## 📥 **Installation**
1. Download and unzip the resource to your server's resources/ folder.
```
resources/[smdz]/toggleradar
```
2. Add the resource to your `server.cfg`. After, start the server.
```
ensure toggleradar
```


## ⚙️ **CONFIGURATION:**
All in `config.lua`:

```lua
Config = {}

Config.CommandName = "toggleradar"

Config.DefaultLanguage = "en"
Config.Languages = {
    en = {
        enabled = "^2Radar enabled.",
        disabled = "^1Radar disabled.",
        noperm = "^1You do not have permission to use this command."
    },
    es = {
        enabled = "^2Has activado el minimapa.",
        disabled = "^1Has desactivado el minimapa.",
        noperm = "^1No tienes permiso para usar este comando."
    },
    pt = {
        enabled = "^2Radar ativados.",
        disabled = "^1Radar desativados.",
        noperm = "^1Você não tem permissão para usar este comando."
    }
}
Config.ChatTag = "[SYSTEM]"
Config.RequireACE = false
Config.ACEPermission = "minimap.toggle"
```

## 🎮 **USAGE:**

- Type /togglerminimap in chat to toggle the minimap and radar on or off.
*Messages will appear in your selected language.*


## 🔌 **EVENTS:**
### Client
- `minimap:client:permissionResult`

### Server
- `minimap:server:checkPerm`

## 🛠️ **TROUBLESHOOTING:**
1. Script does not run: Check the folder name is exactly fast_repair_sergioomdz.
2. NPC or particles not appearing: Make sure the model, animation, and particle names exist and are typed correctly. Try different offsets or scales.
3. Uncaught TypeError: Failed to fetch: Your NUI files (HTML, JS) may be missing or not loading. Check your resource structure.


## 🔄 **UPDATES:**
- There are **NO** plans to add script updates during 2025 and early 2026.
- **STEPS:** *Backup config → replace folder → restore config → restart.*

## 📬 **SUPPORT:**
Include version, framework, logs, reproduction steps.
