# FAST REPAIR - ADVANCED VEHICLE REPAIR NPC

<div align="center" style="margin-bottom: 1.5rem;">
  <!-- Replace the src with your real showcase video URL (YouTube, etc.) -->
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/uL_JPA9jfqA"
    title="smdz_example showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

<p style="text-align: center; font-weight: bold; color: red;">
  THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>


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
- Animated mechanic NPC repairs your vehicle.
- Configurable repair price or free mode.
- Customizable particle effects and sounds.
- Cooldown/anti-spam system.
- Unlimited repair locations with optional map blips.
- Discord webhook logging.
- Protection against renaming/leaks.
- Full ESX/QBCore compatibility.
- Easy to translate and configure. (NEW: More than ten languages supported!)


## 📥 **INSTALLATION:**
1. Download and unzip the resource to your server's resources/ folder.
```
resources/[smdz]/fast_repair_sergioomdz
```
2. Add the resource to your `server.cfg`. After, start the server.
```
ensure fast_repair_sergioomdz
```
**The script will print credits and block execution if the folder name is incorrect.**


## ⚙️ **CONFIGURATION:**
All in `config.lua`:

```lua
Config = {}
-- Main framework: "esx" or "qb"
Config.Framework = "esx"

-- Money type: For ESX: "money", "bank", "black_money" | For QB: "cash", "bank", "crypto"
Config.AccountType = "money"

-- Multilanguage configuration
Config.Lang = "en" -- Main language for messages/notifications

-- Repair points (add more as needed)
Config.RepairPoints = {
    {coords = vector3(-222.4980, -1329.0348, 30.8906), radius = 3.0, blip = true} -- MLO Gabzz Bennys Original
}

-- Blip settings
Config.EnableBlips = true
Config.Blip = {
    sprite = 402,                   -- Blip icon (default: spray can)
    color = 3,                      -- Blip color (default: light blue/cyan)
    scale = 0.9,                    -- Blip scale/size
    label = "Repair Point"          -- Blip label (multilanguage supported, edit on locales.lua)
}

-- Repair price & time
Config.IsRepairFree = false          -- If true, repairs are free for all users
Config.RepairPrice = 500            -- Price for each repair (if not free)
Config.RepairTime = 15              -- Repair duration in seconds

-- Key for repair action (default: E)
Config.KeyRepair = 38

-- Mechanic sound settings for NUI
Config.EnableRepairSounds = true
Config.RepairSoundFile = "mechanic_loop.ogg"
Config.RepairSoundVolume = 0.7

-- Cooldown settings to prevent repair spam
Config.EnableRepairCooldown = true
Config.RepairCooldownTime = 5 * 60          -- Cooldown in seconds (default: 5 minutes)
Config.CooldownResetOnRestart = true

-- Mechanic NPC settings
Config.UseMechanicNPC = true
Config.MechanicNPCHash = "mp_m_waremech_01"
Config.MechanicNPCAnimDict = "mini@repair"
Config.MechanicNPCAnim = "fixing_a_ped"
Config.MechanicNPCOffset = vector3(1.6, 1.1, 0.0)
Config.MechanicNPCHeading = 0.0

-- Repair FX (particle effects) configuration
Config.RepairFX = {
    enabled = true,                       -- Enable/disable repair particle effects
    particleDict = "core",                -- Particle dictionary (e.g. "core")
    particleName = "ent_sparking_wires",  -- Particle name (e.g. "ent_sparking_wires")
    duration = 5,                         -- Duration in seconds (should be <= RepairTime)
    scale = 1.2,                          -- Particle size
    offset = vector3(0, 1.2, 0.45)        -- Offset from vehicle center (forward, right, up)
}

-- Discord webhook settings
Config.EnableDiscordWebhook = true
Config.DiscordWebhookURL = "WEBHOOK_URL_HERE"
Config.WebhookUsername = "Repair System"
Config.WebhookAvatar = "https://i.imgur.com/5BaDQ3Q.png"

-- Debug modes
Config.DebugMode = true             -- Enable general debug mode for all script features
Config.DebugSoundMode = false       -- Enable debug messages for NUI mechanic sound
```

## 🎮 **USAGE:**
1. Drive your vehicle to any configured repair point.
2. Stop inside the marker. An NPC (if enabled) will appear and begin repair.
3. Wait for the progress bar and effects to finish.
4. Vehicle is fully repaired! (Engine, body, driveability, etc.)
*Messages and prompts will guide you.*
**If you don't have enough money, or try to repair a healthy vehicle, you will be notified.**

<!-- ## 🔌 Developer Events
### Client
- `fast_repair:start`
- `fast_repair:notify`

### Server
- `fast_repair:logRepair` -->


## 🛠️ **TROUBLESHOOTING:**
1. Script does not run: Check the folder name is exactly fast_repair_sergioomdz.
2. NPC or particles not appearing: Make sure the model, animation, and particle names exist and are typed correctly. Try different offsets or scales.
3. Uncaught TypeError: Failed to fetch: Your NUI files (HTML, JS) may be missing or not loading. Check your resource structure.


## ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**
- Q: **How do I add more repair locations?**
- A: Add entries to the RepairPoints table in config.lua.

- Q: **Can I change the mechanic ped or animation?**
- A: Yes! Modify MechanicNPCHash, MechanicNPCAnimDict, and MechanicNPCAnim in config.lua.

- Q: **Is it compatible with my framework?**
- A: Yes. Works with ESX, QBCore, and can be adapted for custom frameworks.

- Q: **How do I translate the script?**
- A: Edit the Lang variable and L() function in config.lua with your own texts.

## 🔄 **UPDATES:**
- There are **NO** plans to add script updates during 2025 and early 2026.
- **STEPS:** *Backup config → replace folder → restore config → restart.*


## 📬 **SUPPORT:**
Include version, framework, logs, reproduction steps.
