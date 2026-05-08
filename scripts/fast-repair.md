<div align="center" style="margin-bottom: 1.5rem;">
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
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>

---

# 🧩 **OVERVIEW:**
- 📌 **Name:** `fast_repair_sergioomdz`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore
- 🧾 **Version:** `1.2.0`
- ✅ **Status:** <span class="badge badge--eol">END OF LIFE (DISCONTINUED)</span>

**⚠️ This project has been officially discontinued.
Development has stopped and no further updates or support will be provided for this version.
A complete rework (V2) is currently in development, featuring a full overhaul of the system, improved performance, and new features.**

**Short description:**
Fast Repair is a modern, professional, and highly configurable vehicle repair script for FiveM.
It brings immersive repair experiences with animated NPCs, visual effects, cooldowns, and full framework support ESX/QBCore.

---

# 📦 **REQUIREMENTS:**
- FiveM server (latest build)
- ESX / QBCore / Standalone
- Optional: Notification systems

---

# ⭐ **FEATURES:**
- 🔧 **Immersive mechanic NPC** that dynamically repairs player vehicles with smooth animated interactions.
- 💰 **Flexible pricing system** with configurable repair costs or completely free repair mode.
- ✨ **Custom particle effects & audio feedback** fully configurable to match your server style.
- ⏱️ **Built-in cooldown & anti-spam protection** to prevent abuse and unnecessary event spam.
- 📍 **Unlimited repair stations** with optional configurable map blips and custom locations.
- 📡 **Advanced Discord webhook logging** for repair actions and server monitoring.
- 🛡️ **Protection against renaming, tampering, and unauthorized leaks.**
- 🔄 **Full compatibility with ESX & QBCore frameworks** with seamless integration.
- 🌍 **Localization-ready system** with easy configuration and support for 10+ languages.
- ⚡ **Optimized performance** with lightweight logic and low resmon usage.

---

# 📥 **INSTALLATION:**
1. Download and unzip the resource to your server's resources/ folder.
```
resources/[smdz]/fast_repair_sergioomdz
```
2. Add the resource to your `server.cfg`. After, start the server.
```
ensure fast_repair_sergioomdz
```
**The script will print credits and block execution if the folder name is incorrect.**

---

# ⚙️ **CONFIGURATION:**
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

---

# 🎮 **USAGE:**
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

---

# 🛠️ **TROUBLESHOOTING:**

| Issue | Possible Cause | Solution |
|---|---|---|
| ❌ Script does not start | Incorrect resource folder name | Make sure the folder name is exactly `fast_repair_sergioomdz`. |
| 👨‍🔧 NPC, animations, or particles are missing | Invalid model, animation, or particle names | Verify that all configured assets exist and are spelled correctly. Try adjusting offsets, rotations, or particle scales if needed. |
| 🌐 `Uncaught TypeError: Failed to ...` | Missing or broken NUI files | Ensure your `html`, `js`, and related NUI files are present and loading correctly inside the resource structure. |
| 📍 Blips or repair locations not appearing | Invalid coordinates or disabled blips | Double-check the configured coordinates and ensure blips are enabled in the config. |
| 🔔 Notifications not showing | Unsupported or misconfigured notification system | Verify your selected notification bridge/system is installed and configured properly. |
| ⚠️ Discord webhooks not sending logs | Invalid webhook URL or blocked requests | Confirm the webhook URL is correct and that your server can access Discord endpoints. |
| 🔄 Repairs not syncing properly | Framework/event conflict | Ensure ESX/QBCore versions are supported and avoid duplicate repair resources running simultaneously. |
| ⚡ High resmon usage | Too many active locations or debug enabled | Reduce active repair points or disable debug/developer mode in production servers. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| 📍 **How do I add more repair locations?** | Add new entries inside the `RepairPoints` table in `config.lua`. You can create unlimited repair spots with custom settings and optional map blips. |
| 👨‍🔧 **Can I change the mechanic ped or animation?** | Yes! Modify `MechanicNPCHash`, `MechanicNPCAnimDict`, and `MechanicNPCAnim` inside `config.lua` to fully customize the mechanic appearance and behavior. |
| 🔄 **Is it compatible with my framework?** | Yes. The script supports **ESX** and **QBCore** out of the box and can also be adapted for custom frameworks if needed. |
| 🌍 **How do I translate the script?** | Edit the `Lang` variable and the `L()` translation function inside `config.lua` with your own language texts. |
| 💰 **Can repairs be free for players?** | Absolutely. You can enable free repairs or configure custom repair prices directly from the config file. |
| 🔔 **Does the script support custom notification systems?** | Yes. The script can be integrated with multiple notification systems or your own custom notification export. |
| 📡 **Are Discord logs included?** | Yes. The script includes configurable Discord webhook logs for repair actions and server monitoring. |
| ⚡ **Is the script optimized?** | Yes. The resource is designed with lightweight loops and optimized logic to ensure low resmon usage. |
| 🛠️ **Can I disable particles, sounds, or effects?** | Yes. All visual and audio effects can be individually enabled, disabled, or customized through the config. |

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
