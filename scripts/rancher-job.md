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
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone (STANDALONE NOT TESTED)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">Stable</span>

🐄 A production-grade rancher job for FiveM with OneSync-synced entities, multi-framework bridges, and server-side validation. Designed for roleplay servers that want believable herding without punishing edge cases.

🌍 The resource spawns one global ranching contract at a time. Players start the job from an NPC, herd cows using a whistle, and deliver them to a random drop-off. Cows react to danger, can stray, and can die. All entities are synced to all players via OneSync, and the server validates completion to deter exploits.

---

# ✨ **KEY FEATURES**
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
  `ox_inventory`, `tgiann-inventory`, `qs-inventory`, `origen_inventory`, `core_inventory`, `jpr-inventory`, `codem-inventory`  
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

# ✅ **REQUIREMENTS**
- 🌐 FiveM server with **OneSync** enabled.

Optional integrations:
- 🧩 Frameworks: `es_extended`, `qb-core`, `qbx_core`
- 🎯 Target systems: `ox_target`, `qb-target`
- 📦 Inventory: `ox_inventory`, `tgiann-inventory`, `qs-inventory`, `origen_inventory`, `core_inventory`, `jpr-inventory`, `codem-inventory` (optional, used only for item payouts)
- 🔔 Notification systems: `ox_lib`, `okokNotify`, `vms_notifyv2`, `brutal_notify`, `origen_notify`, `codem-notification`, `wasabi_notify`, `rtx_notify`, `mythic_notify`

---

# 📦 **INSTALLATION**
1. Place the resource inside your server resources directory.
2. Add to `server.cfg`:
   ```
   ensure smdz_rancher_job
   ```
3. Configure `shared/config.lua`.

---

# 🔁 **JOB FLOW (STATE MACHINE)**
1. 💤 **Idle**: no global job exists.
2. ✅ **Available**: job spawns based on `Config.JobCycle` or the admin command. NPC and blip appear at the selected point.
3. 🧑‍🌾 **Active**: a player accepts the job. Server spawns cows and assigns a delivery point.
4. 🐄 **Herding**: player must keep cows in range. Whistle timing, scare logic, and loss timers are applied.
5. 📦 **Delivery**: player reaches the drop-off (must be on foot), server validates proximity/time/ratio.
6. 💰 **Complete**: payout is processed, job is cleaned, cooldown begins.
7. ⛔ **Canceled/Expired**: if time expires, player disconnects, or all cows are lost, cleanup runs and the cycle resets.

---

# 🧰 **CONFIGURATION GUIDE**
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

# 🔔 **NOTIFICATIONS**
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

# 📦 **INVENTORY**
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

# 🌍 **LOCALIZATION**
🌐 Locale files live in `locales/`.
- 🗂️ Default: `en`, `es`, `pt`, `fr`, `de`, `it`

🧩 Add a locale:
1. 📄 Create `locales/<lang>.lua` with `Locales['<lang>']` table.
2. Set `Config.Locale = '<lang>'`.

---

# 🛡️ **ANTI-EXPLOIT VALIDATION (SERVER)**
🧯 The server validates completion before payout and can block or cancel the job if checks fail:
- 📍 **Delivery distance**: player must be within `Config.AntiExploit.deliveryMaxDistance`.
- ⏱️ **Minimum time**: job must run at least `Config.AntiExploit.minJobTimeSec`.
- 📊 **Delivered ratio**: delivered cows must meet `Config.AntiExploit.minDeliveredRatio` and `Config.Herd.requiredRatio`.
- 🧭 **Distance drift**: client-reported distance must match server calculation (`Config.AntiExploit.maxDistanceDriftKm`).
- 🚶 **On-foot enforcement**: optional checks for start/whistle/finish.
- 🧯 **Spam protection**: cooldowns and max finish attempts (`startCooldownMs`, `finishCooldownMs`, `maxFinishAttempts`).
- ⛔ **Job expiry**: optional max duration via `Config.AntiExploit.maxJobDurationSec`.

If a check fails, the attempt is blocked, logged (debug/webhook), and the player is notified.\n---

# 🐄 **COW LOSS & DEATH LOGIC**
- ☠️ Cows can die; dead cows are removed from the delivery count.
- 🏃 Cows too far from the player for too long are marked lost and flee.
- ✅ “All cows lost” is only confirmed after consecutive checks to avoid false positives.

🛠️ If losses feel too strict, tune:
- ⏱️ `Config.Herd.lostGraceMs`
- 🔁 `Config.Herd.lostAllConfirmTicks`
- 📏 `Config.Herd.lostRadius`

---

# 🧠 **ADVANCED DEBUGGING**
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

# 📡 **EVENTS**
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

# 🧾 **WEBHOOK LOGGING**
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

# ❓ **FAQ**
❓ **Q: Cows disappear even when I am close.**
✅ A: Increase `Config.Herd.lostGraceMs` and/or `Config.Herd.lostAllConfirmTicks`. Enable `Config.DebugAdvanced` to inspect per-cow distance and grace timing. If cows are still flagged, verify `Config.Herd.lostRadius` and ensure the client is tracking correct `cowNetIds`.

❓ **Q: The herd is lost too easily.**
✅ A: Raise `Config.Herd.lostRadius`, lower `Config.Herd.scareChance`, and reduce `Config.Herd.requireWhistleMs`. Also consider increasing `Config.Herd.herdRadius` to allow a wider follow range.

❓ **Q: Jobs never appear.**
✅ A: Ensure `Config.JobCycle.enabled = true`, verify `spawnChancePerTick` is > 0, and check `activeDurationMs`. Confirm the resource is started, OneSync is enabled, and the server clock is correct.

❓ **Q: Players can’t start the job.**
✅ A: Verify `Config.JobVisibility` and permission settings (ACE or framework groups). If `Config.Target.mode = none`, validate `Config.Target.fallbackKey` and `Config.Target.maxDistance`. Also confirm the player is on foot if `requireOnFootForStart` is enabled.

❓ **Q: Delivery fails even with cows nearby.**
✅ A: The server validates distance and ratio. Increase `Config.Herd.deliveryCountRadius`, reduce `Config.AntiExploit.minDeliveredRatio`, and ensure the player is within `Config.AntiExploit.deliveryMaxDistance` and on foot.

❓ **Q: Notifications do not appear.**
✅ A: Ensure the notify resource is started and `Config.Notify.mode` matches its resource name. Use `mode = 'auto'` and verify the startup banner shows the detected mode.

❓ **Q: The whistle warning spams.**
✅ A: Increase `Config.Herd.whistleWarnCooldownMs` and reduce `Config.Herd.warnBeforeLossMs`. You can also increase `Config.Herd.whistleCooldownMs` if players are spamming whistles.

❓ **Q: NPC duplicates after restart.**
✅ A: The NPC is cleaned on job end and resource stop. If you hot-restart, ensure all clients received `jobEnd` and that duplicate resources are not running simultaneously.

❓ **Q: How do I force a job?**
✅ A: Use the configured admin command (see `Config.Command`). It supports ACE perms and framework permissions, and optionally accepts a point ID.

❓ **Q: Item payouts don’t add to inventory.**
✅ A: Ensure `Config.Pay.method = 'item'`, the item exists, and `Config.Inventory.mode` matches your inventory resource. Check the startup banner for detected inventory.

❓ **Q: I want to disable herd loss.**
✅ A: Set `Config.Herd.lostAllConfirmTicks` to a very high value and increase `Config.Herd.lostRadius`. You can also reduce `Config.Herd.lossCheckMs` to make checks less aggressive.

❓ **Q: Why is the payout low?**
✅ A: Payout is based on delivered cows and distance. Verify `Config.Pay.basePerCow`, `Config.Pay.distanceMultiplier`, and `Config.Pay.longTripBonusThresholdKm`.

❓ **Q: The job ends instantly after starting.**
✅ A: Check `Config.AntiExploit.minJobTimeSec`, `Config.JobCycle.activeDurationMs`, and ensure the player is the active job owner.

❓ **Q: Webhook messages show empty point labels.**
✅ A: Ensure each point has a `label` set in `Config.Points`. The log uses `{pointLabel}` from that field.

---

# 🧩 **TROUBLESHOOTING**
- 🧩 **“attempt to call a nil value”**: verify framework/notify/target modes, ensure dependencies are started, and confirm the correct function names for your provider.
- ⏱️ **Jobs never spawn**: check `Config.JobCycle.enabled`, `spawnChancePerTick`, and `tickMs`. Confirm there is no active job stuck and the resource is running.
- 🗺️ **Job starts but no delivery blip**: validate `Config.Delivery.blip`, ensure selected point has `deliveries`, and verify the client received the `jobStart` event.
- 🧍 **No NPC interaction**: ensure `ox_target` or `qb-target` is started; otherwise verify fallback key + distance. Check `Config.Target.interactLabel` and `maxDistance`.
- 🐄 **Cows vanish unexpectedly**: increase `lostGraceMs`/`lostAllConfirmTicks`, verify `cowNetIds` are synced, and inspect advanced debug logs for loss decisions.
- 📍 **Finish blocked for distance**: increase `Config.AntiExploit.deliveryMaxDistance` and ensure the player is on foot inside the delivery zone.
- 📊 **Finish blocked for ratio**: reduce `minDeliveredRatio` or increase `deliveryCountRadius`. Confirm server count matches client count.
- 🔗 **Webhook not firing**: validate `Config.Webhook.enabled = true`, URL is valid, and the server can reach Discord (no firewall blocks).
- 💰 **No payout**: ensure `Config.Pay.enabled = true`, method is valid, and the framework/inventory bridge is detected. Check server logs for payout failure.
- 💬 **Chat suggestion missing**: verify `Config.Command.suggestion.enabled` and restart the resource or the chat resource.
- 🚫 **Cannot whistle**: check on-foot requirement and `Config.Herd.whistleCooldownMs`. Ensure `Config.Whistle.key` matches your keybind.
- 🧭 **Target not detected**: confirm target resource is started and `Config.Target.mode = 'auto'` or matches your target system.
- 🧾 **Inventory not detected**: verify the inventory resource name and `Config.Inventory.mode = 'auto'` or set it explicitly.
- 🧪 **Debug logs missing**: set `Config.Debug = true` and enable `Config.DebugAdvanced` flags.
- 🧯 **Players abusing finish spam**: lower `Config.AntiExploit.finishCooldownMs` and `Config.AntiExploit.maxFinishAttempts`.

---

# 🔄 **UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*


