<div align="center" style="margin-bottom: 1.5rem;">
  <!-- Replace the src with your real showcase video URL (YouTube, etc.) -->
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/Nchou9aqnc0"
    title="smdz_rancher_job"
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
- 📌 **Name:** `smdz_rancher_job`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone (STANDALONE NOT TESTED)
- 🧾 **Version:** `1.2.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

A production-grade rancher job for FiveM with OneSync-synced entities, multi-framework bridges, and server-side validation. Designed for roleplay servers that want believable herding without punishing edge cases.
The resource spawns one global ranching contract at a time. Players start the job from an NPC, herd cows using a whistle, and deliver them to a random drop-off. Cows react to danger, can stray, and can die. All entities are synced to all players via OneSync, and the server validates completion to deter exploits.

---

# ⭐ **FEATURES:**
- 🌍 OneSync networked cows/NPCs visible to all players.
- 🐄 Realistic herd behavior: cows can follow, ignore, flee, or die.
- 📣 Whistle system with warning + loss enforcement.
- 🛡️ Server-side anti-exploit validation and cooldowns.
- 🧩 Multi-framework support: ESX, QB, QBX, standalone (STANDALONE NOT TESTED).
- 🔔 Multiple notification systems with unified config.
- 📝 Extensive localization and webhook logging.
- 📦 Inventory support (ox_inventory / tgiann-inventory / qs-inventory / origen_inventory / core_inventory / jpr-inventory / codem-inventory / framework inventory) — used only for item payouts.

---

# 🤝 **COMPATIBILITY:**

- 🎒 **Inventories**
  `ox_inventory`, `tgiann-inventory`, `qs-inventory`, `origen_inventory`, `core_inventory`, `jpr-inventory`, `ak47_inventory`,`codem-inventory`
  *(Automatic fallback to native ESX / QBCore / QBX inventory functions if no supported inventory is detected)*

- 🎯 **Target Systems**
  `ox_target`, `qb-target`
  *(Fallback to `Config.Target.fallbackKey` when no target is detected)*

- 🔔 **Notification Systems**
  `ox_lib`, `esx`, `qbcore`, `qbx_core`, `origen_notify`, `wasabi_notify`, `brutal_notify`, `rtx_notify`,
  `vms_notifyv2`, `mythic_notify`, `okokNotify`, `codem-notification`

- 🧩 **Frameworks**
  `ESX`, `QBCore`, `QBX`, `Standalone (STANDALONE NOT TESTED)`

- 🌍 **Locales Included**
  `en`, `es`, `pt`, `fr`, `de`, `it`

---

# ✅ **REQUIREMENTS:**
- 🌐 FiveM server with **OneSync** enabled.

Optional integrations:
- 🧩 Frameworks: `es_extended`, `qb-core`, `qbx_core`
- 🎯 Target systems: `ox_target`, `qb-target`
- 📦 Inventory: `ox_inventory`, `tgiann-inventory`, `qs-inventory`, `origen_inventory`, `core_inventory`, `jpr-inventory`, `codem-inventory` (optional, used only for item payouts)
- 🔔 Notification systems: `ox_lib`, `okokNotify`, `vms_notifyv2`, `brutal_notify`, `origen_notify`, `codem-notification`, `wasabi_notify`, `rtx_notify`, `mythic_notify`

---

# 📦 **INSTALLATION:**
1. Place the resource inside your server resources directory.
2. Add to `server.cfg`:
   ```
   ensure smdz_rancher_job
   ```
3. Configure `shared/config.lua`.

---

# 🔁 **JOB FLOW:**
1. 💤 **Idle**: no global job exists.
2. ✅ **Available**: job spawns based on `Config.JobCycle` or the admin command. NPC and blip appear at the selected point.
3. 🧑‍🌾 **Active**: a player accepts the job. Server spawns cows and assigns a delivery point.
4. 🐄 **Herding**: player must keep cows in range. Whistle timing, scare logic, and loss timers are applied.
5. 📦 **Delivery**: player reaches the drop-off (must be on foot), server validates proximity/time/ratio.
6. 💰 **Complete**: payout is processed, job is cleaned, cooldown begins.
7. ⛔ **Canceled/Expired**: if time expires, player disconnects, or all cows are lost, cleanup runs and the cycle resets.

---

# 🧰 **CONFIGURATION GUIDE:**
🗂️ Main file: `shared/config.lua`

### 1) Core
- 🌐 `Config.Locale`, `Config.LocaleFallback`
- 🧩 `Config.Framework` = `auto | esx | qbcore | qbx_core | standalone (STANDALONE NOT TESTED)`
- 🔔 `Config.Notify` (table with mode + per-system settings)
- 📦 `Config.Inventory` (inventory mode detection)
- 🎯 `Config.Target.mode` = `auto | ox | qb | none`

### 2) Job Cycle
- ⏱️ `Config.JobCycle` controls spawn interval, cooldown, and if jobs are auto-generated.
- 👀 `Config.JobVisibility` controls who sees the NPC/blip.

### 3) Herd & Cows
- 🐄 `Config.CowModel`, `Config.CowCount`, `Config.CowWanderSpeed`
- 🧠 `Config.Herd` controls:
  - 📣 whistle intervals and warnings
  - 🔫 scare radius and flee behavior
  - 📏 loss distance, grace window, and confirmation ticks

### 4) Delivery
- 🗺️ `Config.Delivery` blip/marker/draw text and interact key.
- 🚶 Delivery requires the player to be on foot.

### 5) Payouts
- 💰 `Config.Pay.method` = `item | cash | bank | money`
- 🧾 `Config.Pay.itemName` and payout ranges are configurable.

### 6) Webhooks
- 🔌 `Config.Webhook.enabled`, `Config.Webhook.url`
- 🎨 `Config.Webhook.colors` per event.
- 🌐 All webhook text is locale-driven.

### 7) Anti-Exploit
- 🛡️ `Config.AntiExploit` validates distance, ratio, min time, cooldowns, and on-foot checks.

### 8) Commands
- 🧾 `Config.Command` controls name, ACE perms, framework perms, and chat suggestion.

### 9) Debug
- 🧠 `Config.Debug` and `Config.DebugAdvanced` for detailed telemetry.

---

# 🔔 **NOTIFICATIONS:**
`Config.Notify` allows selecting a notification provider and customizing defaults:

```
Config.Notify = {
  mode = 'auto',
  defaultType = 'info',
  defaultTime = 5000,
  title = 'SMDZ Rancher Job',
  vms = { color = '#34ebe8', icon = 'fa-solid fa-check' },
  brutal = { type = 'info', sound = false },
  origen = { type = 'info' },
  codem = { header = 'SMDZ Rancher Job' },
  mythic = { ['background-color'] = '#ffffff', ['color'] = '#000000' },
}
```

Supported modes:
- `ox_lib`
- `okokNotify`
- `vms_notifyv2`
- `brutal_notify`
- `origen_notify`
- `codem-notification`
- `wasabi_notify`
- `rtx_notify`
- `mythic_notify`
- ESX / QB / QBX native
- Standalone fallback (STANDALONE NOT TESTED)

---

# 📦 **INVENTORY:**
Inventory is used **only for item payouts**. If no supported inventory is detected, the script falls back to native ESX/QBCore/QBX item functions.

Supported inventories:
- `ox_inventory`
- `tgiann-inventory`
- `qs-inventory`
- `origen_inventory`
- `core_inventory`
- `jpr-inventory`
- `codem-inventory`

---

# 🌍 **LOCALIZATION:**
🌐 Locale files live in `locales/`.
- 🗂️ Default: `en`, `es`, `pt`, `fr`, `de`, `it`

🧩 Add a locale:
1. 📄 Create `locales/<lang>.lua` with `Locales['<lang>']` table.
2. Set `Config.Locale = '<lang>'`.

---

# 🛡️ **ANTI-EXPLOIT VALIDATION (SERVER):**
🧯 The server validates completion before payout and can block or cancel the job if checks fail:
- 📍 **Delivery distance**: player must be within `Config.AntiExploit.deliveryMaxDistance`.
- ⏱️ **Minimum time**: job must run at least `Config.AntiExploit.minJobTimeSec`.
- 📊 **Delivered ratio**: delivered cows must meet `Config.AntiExploit.minDeliveredRatio` and `Config.Herd.requiredRatio`.
- 🧭 **Distance drift**: client-reported distance must match server calculation (`Config.AntiExploit.maxDistanceDriftKm`).
- 🚶 **On-foot enforcement**: optional checks for start/whistle/finish.
- 🧯 **Spam protection**: cooldowns and max finish attempts (`startCooldownMs`, `finishCooldownMs`, `maxFinishAttempts`).
- ⛔ **Job expiry**: optional max duration via `Config.AntiExploit.maxJobDurationSec`.

If a check fails, the attempt is blocked, logged (debug/webhook), and the player is notified.\n---

# 🐄 **COW LOSS & DEATH LOGIC:**
- ☠️ Cows can die; dead cows are removed from the delivery count.
- 🏃 Cows too far from the player for too long are marked lost and flee.
- ✅ “All cows lost” is only confirmed after consecutive checks to avoid false positives.

🛠️ If losses feel too strict, tune:
- ⏱️ `Config.Herd.lostGraceMs`
- 🔁 `Config.Herd.lostAllConfirmTicks`
- 📏 `Config.Herd.lostRadius`

---

# 🧠 **ADVANCED DEBUGGING:**
🧪 Enable advanced telemetry:
```
Config.Debug = true
Config.DebugAdvanced = {
  enabled = true,
  logClientLoss = true,
  logServerLoss = true,
  logWhistle = true,
  logScare = false,
  logFinish = true,
}
```

🧾 You will see `[SMDZ RANCHER JOB][ADV]` logs with:
- 🐄 per-cow distance checks
- 🧭 loss metadata (whistle timing, grace windows)
- 🛡️ server loss confirmations

---

# ⚙️ **CONFIGURATION FILE:**
All in `config.lua`:

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


Config = {}

--=====================================================
-- CORE
--=====================================================
Config.Debug = false -- enable debug prints
Config.DebugAdvanced = { -- advanced debug config table
  enabled = false, -- enable advanced debug
  logClientLoss = true, -- log client loss detection
  logServerLoss = true, -- log server loss processing
  logWhistle = true, -- log whistle warnings/blocks
  logScare = true, -- log scare events
  logFinish = true, -- log finish validation
}

Config.Locale = 'en' -- default locale key
Config.LocaleFallback = 'en' -- fallback locale key

--=====================================================
-- FRAMEWORK / NOTIFY / TARGET
--=====================================================
Config.Framework = 'auto' -- Framework: 'auto' | 'esx' | 'qbcore' | 'qbx_core' | 'standalone'

-- Inventory mode options:
-- 'auto' | 'ox_inventory' | 'tgiann-inventory' | 'qs-inventory' | 'origen_inventory'
-- 'core_inventory' | 'jpr-inventory' | 'codem-inventory' | 'esx' | 'qbcore' | 'qbx_core' | 'standalone'
Config.Inventory = { -- inventory config table
  mode = 'auto', -- inventory mode selection
}



-- Notify mode options:
-- 'auto' | 'esx' | 'qbcore' | 'qbx_core' | 'ox' | 'okok' | 'mythic_notify'
-- 'vms_notifyv2' | 'brutal_notify' | 'origen_notify' | 'codem-notification' | 'wasabi_notify' | 'rtx_notify' | 'standalone'
Config.Notify = { -- notification system config
  mode = 'auto', -- mode selection
  defaultType = 'info', -- fallback type
  defaultTime = 5000, -- fallback time (ms)
  title = 'SMDZ Rancher Job', -- default title/header
  vms = { color = '#34ebe8', icon = 'fa-solid fa-check' }, -- vms_notifyv2 options
  brutal = { type = 'info', sound = false }, -- brutal_notify options
  origen = { type = 'info' }, -- origen_notify options
  codem = { header = 'SMDZ Rancher Job' }, -- codem-notification options
}

-- Target: 'auto' | 'ox' | 'qb' | 'none'
Config.Target = { -- target config table
  mode = 'auto', -- target mode selection
  ox = true, -- allow ox_target detection
  qb = true, -- allow qb-target detection
  fallbackKey = 38, -- fallback key if no target (E)
  interactLabel = 'target_interact_label', -- locale key for target label
  interactIcon = 'fa-solid fa-cow', -- target icon
  maxDistance = 1.5, -- max distance to interact with NPC
}

--=====================================================
-- WEBHOOK LOGS
--=====================================================
Config.Webhook = { -- webhook config
  enabled = true, -- enable discord webhooks
  url = '', -- webhook URL
  name = 'SMDZ RANCHER JOB', -- webhook username
  colors = { -- embed color map
    job_available = 3447003, -- color for job available
    job_started = 3066993, -- color for job started
    job_stopped = 15105570, -- color for job stopped
    job_cleared = 15105570, -- color for job cleared
    payout = 3066993, -- color for payout
    blocked_start = 15158332, -- color for blocked start
    invalid_point = 15158332, -- color for invalid point
    distance_check = 15158332, -- color for distance check
    whistle_blocked = 15158332, -- color for whistle blocked
    finish_blocked = 15158332, -- color for finish blocked
    finish_too_fast = 15158332, -- color for finish too fast
    player_dropped = 15158332, -- color for player dropped
  }
}

--=====================================================
-- ANTI-EXPLOIT
--=====================================================
Config.AntiExploit = { -- anti-exploit config
  minJobTimeSec = 45, -- minimum time before payout
  maxJobDurationSec = 0, -- max job duration (0 disables)
  startCooldownMs = 2000, -- cooldown between start attempts
  finishCooldownMs = 2000, -- cooldown between finish attempts
  maxFinishAttempts = 3, -- max finish attempts before cancel
  deliveryMaxDistance = 6.0, -- max distance to delivery point
  maxDistanceDriftKm = 0.25, -- max drift between client/server distance
  minDeliveredRatio = 0.55, -- minimum delivered/spawned ratio
  requireOnFootForStart = true, -- require on foot to start
  requireOnFootForWhistle = true, -- require on foot to whistle
  requireOnFootForFinish = true, -- require on foot to finish
}

--=====================================================
-- INPUT KEY
--=====================================================
Config.Whistle = {
  key = 303, -- control key code (default U)
  inputGroup = 0, -- control group
  requireOnFoot = true, -- block whistle when in vehicle
}

--=====================================================
-- NPC + BLIP
--=====================================================
Config.Npc = {
  model = `a_m_m_farmer_01`, -- npc model hash
  scenario = 'WORLD_HUMAN_CLIPBOARD', -- npc scenario
}

Config.JobBlip = { -- job blip config
  enabled = true, -- enable job blip
  sprite = 280, -- blip sprite id
  color = 2, -- blip color id
  scale = 0.85, -- blip scale
  display = 4, -- blip display type
  shortRange = false, -- blip only at short range
  alpha = 255, -- blip alpha
  name = 'job_blip_name', -- locale key for blip name
}

--=====================================================
-- NPC 3D TEXT
--=====================================================
Config.DrawText = { -- 3D text config
  enabled = true, -- enable npc 3d text
  distance = 4.0, -- draw distance
  font = 4, -- draw font id
  outline = true, -- enable outline
  dropShadow = { 2, 0, 0, 0, 255 }, -- drop shadow settings
  title = { -- title line settings
    offset = 1.05, -- title z offset
    scale = 0.40, -- title scale
    color = { 255, 215, 0, 255 }, -- title color RGBA
  },
  statusActive = { -- active status line settings
    offset = 0.85, -- active line z offset
    scale = 0.36, -- active line scale
    color = { 220, 60, 60, 255 }, -- active line color RGBA
  },
  statusAvailable = { -- available status line settings
    offset = 0.85, -- available line z offset
    scale = 0.36, -- available line scale
    color = { 60, 220, 120, 255 }, -- available line color RGBA
  }
}

--=====================================================
-- COMMAND
--=====================================================
Config.Command = { -- command config
  enabled = true, -- enable admin command
  name = 'generatecowjob', -- command name
  useAce = true, -- allow ACE permissions
  ace = 'command.smdz_rancher_job', -- ACE permission string
  useFrameworkPerms = true, -- allow framework permissions
  esxGroups = { 'admin', 'superadmin' }, -- ESX allowed groups
  qbPerms = { 'admin', 'god' }, -- QB/QBX allowed perms
  suggestion = { -- chat suggestion settings
    enabled = true, -- enable suggestion
    help = 'cmd_generarjob_help', -- locale key for help
    args = {
      { name = 'pointId', help = 'cmd_generarjob_arg_point' } -- argument config
    }
  }
}

--=====================================================
-- JOB VISIBILITY + CYCLE
--=====================================================
Config.JobVisibility = { -- job visibility table
  mode = 'all', -- visibility mode
  randomCount = 10, -- number of players who see the job
  -- randomPercent = 0.35, -- optional percent (0-1) to override randomCount
}

Config.JobCycle = { -- job cycle table
  enabled = true, -- enable job cycle spawn
  tickMs = 30 * 1000, -- tick interval in ms
  spawnChancePerTick = 0.08, -- chance to spawn each tick
  activeDurationMs = 18 * 60 * 1000, -- job lifetime in ms
}

--=====================================================
-- COWS + HERD
--=====================================================
Config.CowModel = `a_c_cow` -- cow model hash
Config.CowCount = { min = 9, max = 20 } -- cow count range
Config.CowWanderSpeed = { min = 0.6, max = 1.1 } -- wander speed range

Config.Herd = { -- herd behavior table
  herdRadius = 18.0, -- radius where cows follow normally
  lostRadius = 55.0, -- radius where cows are considered lost
  followSpeed = 0.9, -- normal follow speed
  catchupSpeed = 1.4, -- speed when far from player
  whistleCooldownMs = 2500, -- whistle cooldown in ms
  scareRadius = 22.0, -- scare radius for gunshots
  scareFleeTimeMs = 8000, -- flee duration in ms
  scareCooldownMs = 1500, -- scare event cooldown
  lossCheckMs = 3000, -- interval to check lost cows
  lostGraceMs = 8000, -- grace time before a cow is considered lost
  lostAllConfirmTicks = 2, -- consecutive checks before canceling job
  requireWhistleMs = 60000, -- time allowed without whistle
  warnBeforeLossMs = 10000, -- warning time before loss
  whistleStartDelayMs = 30000, -- delay before whistle timer starts
  whistleWarnCooldownMs = 20000, -- warning notification cooldown
  ignoreWhistleChance = 0.15, -- chance cows ignore whistle
  escapeDeleteMs = 15000, -- delete escaped cow after ms
  deliveryCountRadius = 20.0, -- radius to count delivered cows
  deliveryZoneRadius = 30.0, -- delivery zone radius
  requiredRatio = 0.75, -- ratio needed to consider success
}

--=====================================================
-- DELIVERY
--=====================================================
Config.Delivery = { -- delivery config
  blip = { -- delivery blip settings
    sprite = 1, -- delivery blip sprite
    color = 5, -- delivery blip color
    scale = 0.9, -- delivery blip scale
    route = true, -- show GPS route
    name = 'delivery_blip_name', -- locale key for delivery blip
  },
  marker = { -- delivery marker settings
    enabled = true, -- enable marker
    type = 1, -- marker type id
    scale = { 2.5, 2.5, 1.0 }, -- marker scale XYZ
    color = { 0, 200, 80, 180 }, -- marker color RGBA
    bob = false, -- marker bobbing
    face = true, -- marker faces camera
    drawDistance = 30.0, -- marker draw distance
  },
  drawText = { -- delivery draw text settings
    enabled = true, -- enable delivery text
    distance = 8.0, -- delivery text distance
    offset = 1.0, -- delivery text z offset
    scale = 0.32, -- delivery text scale
    color = { 255, 255, 255, 255 }, -- delivery text color
    text = 'delivery_help', -- locale key for delivery text
  },
  interactKey = 38, -- delivery interact key (E)
  interactDistance = 2.0, -- delivery interact distance
}

--=====================================================
-- PAYOUT
--=====================================================
Config.Pay = { -- payout config
  enabled = true, -- enable payouts
  method = 'item', -- payout method (item | cash | bank | money)
  itemName = 'money', -- item name for item payouts (money/cash)
  reason = 'rancher-job', -- transaction reason for bank
  basePerCow = 110, -- base money per cow
  distanceMultiplier = 0.55, -- multiplier per km
  longTripBonusThresholdKm = 3.0, -- long trip bonus threshold
  longTripBonusExtra = 250, -- long trip bonus extra
  maxDistanceKmForCalc = 12.0, -- max distance used for payout
}

--=====================================================
-- LOCATIONS
--=====================================================
Config.Points = {
  {
    id = 1, -- point id
    label = 'Route 68 Ranch', -- point label
    npc = vector4(-109.0552, 2795.3503, 53.3041, 279.8059), -- npc position
    cows = vector4(-84.1132, 2801.7268, 53.3212, 62.4069), -- cow spawn position
    deliveries = {
      vector4(2172.8611, 3360.4492, 45.4487, 141.1598), -- delivery point
      vector4(876.7462, 2852.8176, 56.7919, 117.1186), -- delivery point
      vector4(187.9637, 3057.4150, 42.9435, 61.4104), -- delivery point
      vector4(207.5661, 2456.0242, 56.7422, 108.5389), -- delivery point
      vector4(166.0524, 2284.2532, 93.4528, 316.8405), -- delivery point
      vector4(1466.3282, 3694.1855, 33.9677, 123.3205), -- delivery point
    }
  },
  {
    id = 2, -- point id
    label = 'Grapeseed Farm', -- point label
    npc = vector4(2030.5471, 4980.7095, 42.0983, 295.1110), -- npc position
    cows = vector4(2024.6921, 4965.7778, 41.3315, 131.8325), -- cow spawn position
    deliveries = {
      vector4(2711.7463, 4144.5161, 43.9449, 144.7133), -- delivery point
      vector4(2051.0679, 3932.0061, 33.1122, 297.5184), -- delivery point
      vector4(1972.2979, 5166.4546, 47.6390, 301.2235), -- delivery point
      vector4(2238.5081, 5166.2432, 58.9538, 317.7419), -- delivery point
      vector4(166.0524, 2284.2532, 93.4528, 316.8405), -- delivery point
    }
  },
  {
    id = 3, -- point id
    label = 'North Ranch', -- point label
    npc = vector4(2290.9475, 4901.8911, 41.0150, 291.3865), -- npc position
    cows = vector4(2275.3926, 4912.0103, 41.0124, 60.2091), -- cow spawn position
    deliveries = {
      vector4(1901.0638, 4915.5151, 48.8308, 345.6821), -- delivery point
      vector4(2816.1492, 4572.4072, 46.1862, 281.3923), -- delivery point
      vector4(2711.7463, 4144.5161, 43.9449, 144.7133), -- delivery point
      vector4(166.0524, 2284.2532, 93.4528, 316.8405), -- delivery point
      vector4(2203.8086, 5587.2925, 53.8469, 348.7265), -- delivery point
      vector4(1725.9523, 4703.5620, 42.5239, 69.8250), -- delivery point
    }
  },
  {
    id = 4, -- point id
    label = 'Paleto Bay Ranch', -- point label
    npc = vector4(416.0534, 6513.4727, 27.7226, 265.9218), -- npc position
    cows = vector4(433.7555, 6510.9756, 28.3473, 293.4133), -- cow spawn position
    deliveries = {
      vector4(2398.3052, 4806.3730, 36.4294, 130.2529), -- delivery point
      vector4(745.5859, 6444.9395, 31.8004, 255.0574), -- delivery point
      vector4(95.8098, 6645.0303, 31.9137, 65.9538), -- delivery point
      vector4(225.7804, 6662.0391, 29.6157, 103.9850), -- delivery point
      vector4(2215.5613, 5182.1860, 59.1255, 246.3947), -- delivery point
    }
  },
}

```

---

# 📡 **EVENTS:**
| Side | Event | Purpose |
|------|-------|---------|
| Client | `smdz_rancher_job:client:jobUpdate` | Sync global job state to clients (NPC/blip/state). |
| Client | `smdz_rancher_job:client:startJob` | Starts the job client-side and sets delivery. |
| Client | `smdz_rancher_job:client:jobEnd` | Ends the job and cleans up client state. |
| Client | `smdz_rancher_job:client:notify` | Shows a localized notification. |
| Server | `smdz_rancher_job:server:requestJobState` | Sends current global state to a player. |
| Server | `smdz_rancher_job:server:startJob` | Validates and starts the job for a player. |
| Server | `smdz_rancher_job:server:whistle` | Applies server-side whistle logic to cows. |
| Server | `smdz_rancher_job:server:finish` | Validates delivery and triggers payout. |
| Server | `smdz_rancher_job:server:scare` | Makes nearby cows flee when shots happen. |
| Server | `smdz_rancher_job:server:lostCows` | Confirms lost cows and triggers flee/delete. |
| Server | `smdz_rancher_job:server:cancelJob` | Cancels and cleans up the job. |\n---

# 🧾 **WEBHOOK LOGGING:**
🔗 Enable in `shared/config.lua`:
```
Config.Webhook = {
  enabled = true,
  url = 'https://discord.com/api/webhooks/....',
  name = 'SMDZ RANCHER JOB',
  colors = {
    job_available = 3447003,
    job_started = 3066993,
    job_stopped = 15105570,
    job_cleared = 15105570,
    payout = 3066993,
    blocked_start = 15158332,
    invalid_point = 15158332,
    distance_check = 15158332,
    whistle_blocked = 15158332,
    finish_blocked = 15158332,
    finish_too_fast = 15158332,
    player_dropped = 15158332,
  }
}
```

---
# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| 🐄 **Cows disappear even when I am nearby.** | Increase `Config.Herd.lostGraceMs` and/or `Config.Herd.lostAllConfirmTicks`. Enable `Config.DebugAdvanced` to inspect each cow’s distance and grace timer. If cows are still being marked as lost, verify `Config.Herd.lostRadius` and confirm that the correct `cowNetIds` are being tracked. |
| 📏 **The herd is lost too easily.** | Increase `Config.Herd.lostRadius`, reduce `Config.Herd.scareChance`, and lower `Config.Herd.requireWhistleMs`. You can also increase `Config.Herd.herdRadius` to allow cows to follow from a wider range. |
| ⏱️ **Jobs never appear automatically.** | Make sure `Config.JobCycle.enabled = true`, `spawnChancePerTick` is greater than `0`, and `activeDurationMs` is configured correctly. Also confirm that the resource is running, OneSync is enabled, and the server clock is correct. |
| 🚫 **Players cannot start the job.** | Check `Config.JobVisibility` and the configured ACE or framework permissions. If `Config.Target.mode = 'none'`, verify `Config.Target.fallbackKey` and `Config.Target.maxDistance`. Players must also be on foot when `requireOnFootForStart` is enabled. |
| 📍 **Delivery fails even when cows are nearby.** | Delivery is validated server-side using distance and delivered-cow ratio. Increase `Config.Herd.deliveryCountRadius`, reduce `Config.AntiExploit.minDeliveredRatio`, and make sure the player is on foot and within `Config.AntiExploit.deliveryMaxDistance`. |
| 💬 **Notifications do not appear.** | Make sure the notification resource is started and that `Config.Notify.mode` matches its resource name. You can also use `Config.Notify.mode = 'auto'` and check the startup banner to confirm which provider was detected. |
| 📢 **The whistle warning appears too often.** | Increase `Config.Herd.whistleWarnCooldownMs` and reduce `Config.Herd.warnBeforeLossMs`. You can also increase `Config.Herd.whistleCooldownMs` to prevent players from repeatedly using the whistle. |
| 🧍 **The job NPC duplicates after a restart.** | The NPC is automatically removed when the job ends or the resource stops. After a hot restart, confirm that every client received the `jobEnd` event and make sure duplicate copies of the resource are not running. |
| ⚙️ **How can I manually force a job to start?** | Use the administrator command configured inside `Config.Command`. The command supports ACE and framework permissions and may optionally accept a configured point ID. |
| 🎒 **Item rewards are not added to the inventory.** | Make sure `Config.Pay.method = 'item'`, confirm that the configured item exists, and verify that `Config.Inventory.mode` matches your inventory resource. Check the startup banner to see which inventory system was detected. |
| 🐮 **How can I practically disable herd loss?** | Set `Config.Herd.lostAllConfirmTicks` to a very high value and significantly increase `Config.Herd.lostRadius`. You can also increase `Config.Herd.lossCheckMs` so herd-loss checks happen less frequently. |
| 💰 **Why is the final payout lower than expected?** | The payout is calculated using the number of delivered cows and the total trip distance. Review `Config.Pay.basePerCow`, `Config.Pay.distanceMultiplier`, and `Config.Pay.longTripBonusThresholdKm`. |
| ⚡ **The job ends immediately after starting.** | Check `Config.AntiExploit.minJobTimeSec` and `Config.JobCycle.activeDurationMs`. Also confirm that the player starting or completing the job is still registered as the active job owner. |
| 🔗 **Webhook messages have an empty point label.** | Make sure every entry inside `Config.Points` includes a valid `label`. The webhook replaces `{pointLabel}` using this configured value. |

---

# 🧪 **COMMON PROBLEMS:**

| Issue | Recommended Solution |
|---|---|
| 🧩 **`attempt to call a nil value`** | Verify the configured framework, notification, inventory, and target modes. Make sure all required dependencies start before this resource and confirm that your provider uses the expected function or export names. |
| ⏱️ **Jobs never spawn** | Check `Config.JobCycle.enabled`, `spawnChancePerTick`, and `tickMs`. Confirm that no previous job is stuck as active and that the resource is currently running. |
| 🗺️ **The job starts, but no delivery blip appears** | Verify `Config.Delivery.blip`, confirm that the selected job point contains valid `deliveries`, and make sure the client received the `jobStart` event. |
| 🧍 **The NPC has no interaction option** | Make sure `ox_target` or `qb-target` is running. When using fallback interaction, verify the configured key, interaction distance, `Config.Target.interactLabel`, and `Config.Target.maxDistance`. |
| 🐄 **Cows disappear unexpectedly** | Increase `Config.Herd.lostGraceMs` and `Config.Herd.lostAllConfirmTicks`. Confirm that `cowNetIds` are synchronized correctly and inspect the advanced debug logs for herd-loss decisions. |
| 📍 **Job completion is blocked by distance** | Increase `Config.AntiExploit.deliveryMaxDistance` and make sure the player is on foot and inside the configured delivery area. |
| 📊 **Job completion is blocked by the delivered ratio** | Reduce `Config.AntiExploit.minDeliveredRatio` or increase `Config.Herd.deliveryCountRadius`. Confirm that the server-side cow count matches the expected client-side count. |
| 🔗 **The Discord webhook is not firing** | Make sure `Config.Webhook.enabled = true`, verify that the webhook URL is valid, and confirm that the server can connect to Discord without firewall or hosting-provider restrictions. |
| 💰 **Players receive no payout** | Verify that `Config.Pay.enabled = true`, the configured payment method is valid, and the required framework or inventory bridge was detected. Check the server console for payout errors. |
| 💬 **The chat command suggestion is missing** | Make sure `Config.Command.suggestion.enabled = true`. Restart this resource and, if necessary, restart the server’s chat resource. |
| 🚫 **Players cannot use the whistle** | Check the on-foot requirement and `Config.Herd.whistleCooldownMs`. Also make sure `Config.Whistle.key` matches the intended keybind. |
| 🧭 **The target system is not detected** | Confirm that the target resource is started before this resource. Use `Config.Target.mode = 'auto'` or explicitly configure the correct target provider. |
| 🧾 **The inventory system is not detected** | Verify the exact inventory resource name. Use `Config.Inventory.mode = 'auto'` or manually configure the correct inventory provider. |
| 🧪 **Debug logs do not appear** | Set `Config.Debug = true` and enable the required options inside `Config.DebugAdvanced`. Restart the resource after changing the configuration. |
| 🧯 **Players are abusing the finish action** | Increase `Config.AntiExploit.finishCooldownMs` and reduce `Config.AntiExploit.maxFinishAttempts` to limit repeated completion requests. |


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
