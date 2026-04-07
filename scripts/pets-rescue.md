<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/qsPc3GIS330"
    title="smdz_pets_rescue showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_pets_rescue`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

SMDZ Pets Rescue is a mission system where players help local NPCs recover lost pets. It features dynamic NPC spawns, search areas, animal behavior, mission timers, dialogue UI, reward delivery, and robust webhooks with detailed identifiers.

---

# ⭐ **FEATURES:**

- 🧭 **Dynamic NPC spawns** with smart rerolls, zone cooldowns, and configurable active limits.
- 🐾 **Multiple mission types** (lost cat, scared dog) with unique behavior rules.
- 🗺️ **Search areas + blips** with adjustable radius, labels, and optional exact animal tracking.
- 🧠 **Animal behavior** including wander logic and scare reactions.
- 💰 **Random configurable rewards** per mission using `RewardMoneyMin` and `RewardMoneyMax`.
- ⏱️ **Mission timers** with on-screen countdown UI and automatic mission expiry.
- 💬 **Dialogue UI** with configurable colors from `config.lua` and smooth open/close animations.
- 🎯 **Target support** for `ox_target` and `qb-target`, plus fallback interaction key.
- 🔔 **Multi-notify support** (frameworks, ox_lib, okok, mythic, wasabi, brutal, lation_ui, codem, rtx) with type mapping.
- 🎁 **Rewards by item** with framework + ox_inventory support for reliable delivery.
- 🧾 **Discord webhooks** with rich embeds, emojis, and detailed player identifiers.
- 💾 **Persistent cooldowns** (player, global, zone) stored via `oxmysql` for restarts.
- 🌍 **Multi-language** with English, Spanish, French, German, PT-BR, and Turkish.
- 🎥 **Cinematic cameras** for NPC dialogue and rescue interaction moments.
- ✅ **Direct rescue flow:** on rescue, the animal is marked recovered and despawns immediately.
- 🧩 **Developer exports** for custom integration with external scripts.

---

# 📦 **REQUIREMENTS AND COMPATIBILITY:**

- **FiveM server:** latest recommended build (Cerulean).
- **Framework:** ESX / QBCore / QBX / Standalone.
- **Database (required for persistent cooldowns):** `oxmysql`.
- **Target systems (optional):** `ox_target`, `qb-target`.
- **Notifications (optional):** `ox_lib`, `okokNotify`, `mythic_notify`, `origen_notify`, `wasabi_notify`, `wasabi_uikit`, `brutal_notify`, `lation_ui`, `codem-notification`, `rtx_notify`, `vms_notifyv2`, `esx_notify`, `FL-Notify`.
- **Inventory support:** `ox_inventory` (direct) + ESX/QB/QBX item functions.
> **Inventory note:** with `ox_inventory` and native ESX/QB/QBX item functions, it is compatible with most common inventory setups.
---

# 📥 **INSTALLATION:**

1. Download the resource and extract it to:

```text
resources/[smdz]/smdz_pets_rescue
```

2. Ensure in `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_pets_rescue
```

3. Import the database schema:

```sql
CREATE TABLE IF NOT EXISTS `smdz_pets_rescue_cooldowns` (
  `player_name` VARCHAR(128) NOT NULL,
  `last_mission` INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`player_name`)
);

CREATE TABLE IF NOT EXISTS `smdz_pets_rescue_cooldowns_zones` (
  `zone_id` VARCHAR(128) NOT NULL,
  `last_mission` INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`zone_id`)
);

```

Start the server and confirm no errors in console.

---

# ⚙️ **CONFIGURATION:**

**Main config:** `config/config.lua`  
**NPC points:** `config/npc-config.lua`

---

## 🧠 **FRAMEWORK:**

```lua
Config.Framework = {
  Debug = true,
  Locale = 'es',
  Mode = 'auto'
}
```

- `Debug` enables verbose logs.
- `Locale` selects the language file.
- `Mode` supports: `auto | esx | qbcore | qbx | standalone`.

---

## 🎯 **TARGET:**

```lua
Config.Target = {
  Enabled = true,
  Provider = 'auto',      -- auto | ox_target | qb-target | none
  InteractionKey = 38,
  InteractionDistance = 2.0
}
```

---

## 🔔 **NOTIFICATIONS:**

```lua
Config.Notify = {
  Mode = 'auto',
  Provider = 'ox_lib',
  Duration = 5000,
  Types = {
    default = 'info',
    success = 'success',
    error = 'error',
    warning = 'warning',
    inform = 'info'
  }
}
```

- `Duration` applies to all notifications.
- `Types` overrides the type per situation.

---

## 🎮 **GAMEPLAY:**

```lua
Config.Gameplay = {
  ProgressDuration = 4500,
  CooldownGlobal = 300,
  CooldownPerPlayer = 300,
  PersistentCooldowns = true,
  CooldownTable = 'smdz_pets_rescue_cooldowns',
  MaxActiveRescues = 10,
  MaxRescuesPerPlayer = 1,
  OnlyOneMissionPerPlayer = true,
  FailDistance = 350.0,
  MissionTimeLimit = 600,
  ReturnAnimalDistance = 3.0,
  RescueDistance = 1.0,
  RescueKey = 38,
  RescueKeyLabel = 'E',
  AllowEscClose = true
}
```

- `PersistentCooldowns` keeps per-player cooldowns after restarts (requires `oxmysql`).
- `CooldownTable` is the SQL table used for persistence (must start with `smdz_`).

## 💰 **MISSION REWARDS (RANDOM RANGE):**

Each mission can define a random reward range:

```lua
Config.Missions = {
  lost_cat = {
    RewardMoneyMin = 200,
    RewardMoneyMax = 350
  },
  scared_dog = {
    RewardMoneyMin = 260,
    RewardMoneyMax = 420
  }
}
```

- The exact amount is rolled on mission accept and stays fixed for that mission.
- If `RewardMoneyMin/Max` are not set, the script falls back to `RewardMoney` (fixed).

---

## 🐾 **WHISTLE:**

```lua
Config.Whistle = {
  Enabled = true,
  Key = 'U',
  KeyControl = 303,
  AnimDict = 'taxi_hail',
  AnimName = 'hail_taxi',
  AnimDuration = 1300,
  AnimFlag = 49,
  Cooldown = 30
}
```

---

## 🗺️ **NPC POINTS:**

Defined in `config/npc-config.lua`. Each point must include `animalSpawns`.

```lua
{
  id = 'vespucci_1',
  coords = vector4(-1239.63, -1561.88, 4.32, 329.84),
  spawnChance = 1.0,
  animalSpawns = {
    vector3(-1140.47, -1466.49, 4.58),
    vector3(-1369.20, -1419.88, 3.66)
  }
}
```

---

## 📣 **WEBHOOK LOGS:**

```lua
Config.Webhooks = {
  Enabled = true,
  Url = 'YOUR_DISCORD_WEBHOOK',
  Colors = {
    Accept = 5793266,
    Reject = 15158332,
    Found = 3447003,
    Complete = 5763719,
    Cancel = 15105570,
    Error = 15158332
  },
  Events = {
    Accept = true,
    Reject = true,
    Found = true,
    Complete = true,
    Cancel = true,
    Error = true
  }
}
```

---

# 🎮 **USAGE:**

## 🕹️ **KEYBINDS:**

- Rescue key: `E` (configurable)
- Whistle key: `U` (configurable)

## 🧭 **FLOW:**

1. Talk to NPC.
2. Mission starts and search area appears.
3. Find and rescue the animal within 1 meter.
4. Animal is marked as recovered and despawns immediately.
5. Return to the same NPC to complete the mission.


# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

This section is for developers integrating with the resource. All examples assume the resource name is **`smdz_pets_rescue`**.
The tables below contain the **full, current list of events** used by the script.

## **SERVER EVENTS:**

| Event | Parameters | Description | Notes |
|---|---|---|---|
| `smdz_pets_rescue:server:acceptMission` | `missionId`, `npcId`, `zoneId` | Requests a mission from the server. | Use from client scripts. |
| `smdz_pets_rescue:server:rejectMission` | `missionId` | Rejects a mission offer. | Use from client scripts. |
| `smdz_pets_rescue:server:animalFound` | `missionId` | Signals the animal was rescued. | Use from client scripts. |
| `smdz_pets_rescue:server:completeMission` | `missionId`, `timeTaken` | Completes a mission and issues rewards. | Use from client scripts. |
| `smdz_pets_rescue:server:cancelMission` | `missionId`, `reason` | Cancels a mission with a reason key. | Use from client scripts. |

All server events are **client → server** only.

**Basic example (client):**

```lua
TriggerServerEvent('smdz_pets_rescue:server:acceptMission', 'lost_cat', 'vespucci_1', 'vespucci_1')
```

## **CLIENT EVENTS:**

| Event | Parameters | Description | Notes |
|---|---|---|---|
| `smdz_pets_rescue:client:missionApproved` | `missionId`, `npcId`, `rewardMoney` | Mission approved by server. | Fired to the requesting player with the exact reward for that mission. |
| `smdz_pets_rescue:client:missionDenied` | `reasonKey` | Mission denied by server. | `reasonKey` maps to locales. |
| `smdz_pets_rescue:client:missionCancelled` | none | Mission cancelled by server. | Fired to the player. |

All client events are **server → client** only.

**Basic example (client):**

```lua
RegisterNetEvent('smdz_pets_rescue:client:missionApproved', function(missionId, npcId, rewardMoney)
  print('Approved:', missionId, npcId, rewardMoney)
end)
```

## **EXPORTS:**

Exports are safe wrappers designed for integration with other resources.  
They return `false` if the feature is unavailable or no mission is active, so always validate the result.

All export examples below assume the resource name is **`smdz_pets_rescue`**.

### **CLIENT EXPORTS:**

Use these from **client** scripts only.

**Quick reference**

| Export | Parameters | Returns | Description |
|---|---|---|---|
| `GetActiveMission` | none | `table` or `nil` | Returns the current active mission data. |
| `HasActiveMission` | none | `boolean` | True if a mission is active. |
| `RequestMission` | `missionId`, `npcId`, `zoneId` | `boolean` | Sends a mission request to the server. |
| `CancelMission` | `reason` | `boolean` | Cancels the active mission locally. |
| `CompleteMission` | none | `boolean` | Completes the active mission locally. |
| `Whistle` | none | `boolean` | Triggers the whistle helper (respects cooldown). |
| `GetAnimalEntity` | none | `entity` or `nil` | Returns the current animal ped entity while searching. After rescue it returns `nil`. |
| `GetNpcEntity` | `npcId` | `entity` or `nil` | Returns the NPC ped entity by id. |
| `OpenDialogue` | `data` | `boolean` | Opens the NUI dialogue with custom data. |
| `CloseDialogue` | none | `boolean` | Closes the NUI dialogue. |

**Parameter glossary**

| Parameter | Meaning |
|---|---|
| `missionId` | Mission key from `Config.Missions` (example: `lost_cat` or `scared_dog`). |
| `npcId` | NPC id from `config/npc-config.lua` (example: `vespucci_1`). |
| `zoneId` | Zone id used for cooldowns (usually same as `npcId`). |
| `reason` | Cancel reason key (example: `cancelled`, `timeout`). |
| `data` | Dialogue payload (see table below). |

**OpenDialogue payload**

| Field | Type | Required | Description |
|---|---|---|---|
| `missionId` | string | yes | Mission identifier. |
| `npcId` | string | yes | NPC identifier. |
| `zoneId` | string | yes | Zone identifier. |
| `npcEntity` | entity | no | NPC ped entity for camera focus. |
| `npcName` | string | yes | Display name. |
| `missionTitle` | string | yes | Title shown in UI. |
| `problemText` | string | yes | Main dialogue text. |
| `detailText` | string | no | Secondary line shown under main text. |
| `animalName` | string | no | Animal label for UI. |
| `reward` | string | no | Reward text (pre-formatted). |

#### **`GetActiveMission`:**

Returns the active mission table or `nil` if none.

```lua
local mission = exports['smdz_pets_rescue']:GetActiveMission()
if mission then
  print(('Active mission: %s'):format(mission.id))
end
```

#### **`HasActiveMission`:**

```lua
if exports['smdz_pets_rescue']:HasActiveMission() then
  print('Player is already on a mission.')
end
```

#### **`RequestMission`:**

```lua
exports['smdz_pets_rescue']:RequestMission('lost_cat', 'vespucci_1', 'vespucci_1')
```

#### **`CancelMission`:**

```lua
exports['smdz_pets_rescue']:CancelMission('cancelled')
```

#### **`CompleteMission`:**

```lua
exports['smdz_pets_rescue']:CompleteMission()
```

#### **`Whistle`:**

```lua
exports['smdz_pets_rescue']:Whistle()
```

#### **`GetAnimalEntity`:**

```lua
local animal = exports['smdz_pets_rescue']:GetAnimalEntity()
if animal and DoesEntityExist(animal) then
  print('Animal entity:', animal)
end
```

#### **`GetNpcEntity`:**

```lua
local npc = exports['smdz_pets_rescue']:GetNpcEntity('vespucci_1')
if npc and DoesEntityExist(npc) then
  print('NPC entity:', npc)
end
```

#### **`OpenDialogue`:**

```lua
exports['smdz_pets_rescue']:OpenDialogue({
  missionId = 'lost_cat',
  npcId = 'vespucci_1',
  zoneId = 'vespucci_1',
  npcEntity = exports['smdz_pets_rescue']:GetNpcEntity('vespucci_1'),
  npcName = 'Brook Stream',
  missionTitle = 'Lost Cat',
  problemText = 'I lost my cat in the area.',
  detailText = 'Please bring them back safely.',
  animalName = 'Cat',
  reward = '$250'
})
```

#### **`CloseDialogue`:**

```lua
exports['smdz_pets_rescue']:CloseDialogue()
```

### **SERVER EXPORTS:**

Use these from **server** scripts only.

**Quick reference**

| Export | Parameters | Returns | Description |
|---|---|---|---|
| `CancelMission` | `source`, `reason` | `boolean` | Cancels a mission for a player. |
| `GetActiveMissions` | none | `table` | Returns all active missions. |

#### **`CancelMission`:**

```lua
exports['smdz_pets_rescue']:CancelMission(source, 'cancelled')
```

#### **`GetActiveMissions`:**

```lua
local missions = exports['smdz_pets_rescue']:GetActiveMissions()
print('Active missions:', json.encode(missions))
```


---

# 🧯 **COMMON ISSUES:**

**Quick diagnosis table**

| Issue | Symptoms | Likely Cause | Fix |
|---|---|---|---|
| NPCs not spawning | No NPCs appear after start | `npc-config.lua` missing entries or `animalSpawns` empty | Ensure `config/npc-config.lua` has points and each has `animalSpawns`. |
| NPCs spawn under/above ground | NPCs floating or underground | Bad Z or collision not fully loaded | Check debug logs, verify coords, allow collision load before spawn. |
| Animals not moving | Animal stays still | Wander tasks interrupted | Ensure mission config keeps wander enabled and no external script overrides tasks. |
| Mission cancels immediately | Mission ends right away | Validation failed (NPC/animal missing) | Confirm entity exists and distance checks are correct. |
| NUI black screen | Screen goes black on start | Missing build or wrong `ui_page` | Verify `web/build` exists and `ui_page` points to `web/build/index.html`. |
| NUI not opening | No dialogue appears | NUI not ready or focus blocked | Restart resource and ensure no other UI blocks focus. |
| Timer UI not visible | Timer panel missing | Dialogue open hides it | This is intended behavior while dialogue is open. |
| Target not working | Cannot interact with NPC | Provider name mismatch | Set `Config.Target.Provider` to exact resource name. |
| Notify not showing | No notifications | Provider not running | Set `Config.Notify.Provider` to exact resource name and ensure it is started. |
| Rewards not given | No item/cash | Wrong reward item or missing inventory | Verify `Config.Rewards.ItemName` and inventory framework. |
| Webhook not sending | No Discord logs | Wrong URL or blocked outbound | Verify webhook URL and server connectivity. |
| Exports return false | Exports fail | Resource not started or no mission | Ensure resource is started and a mission is active. |
| Whistle not working | Nothing happens | Cooldown active or in vehicle | Whistle is disabled in vehicles and respects cooldown. |
| Rescue key not working | Rescue doesn’t trigger | Too far from animal | Must be within `Config.Gameplay.RescueDistance`. |
| Cooldowns reset on restart | Player can start again immediately | Persistence disabled or `oxmysql` offline | Enable `PersistentCooldowns` and start `oxmysql`. |
| Wrong blip label | Text not correct | Locale key missing | Add locale key `blip_rescue_task` in locale file. |
| Dialogue text missing | Blank UI lines | Locale key missing | Add missing keys in `locales/*.lua`. |
| Return not available | Completion blocked at NPC | Mission is not in rescued state yet | Rescue the animal first, then return to the same NPC. |
| Animal respawns too fast | NPC rerolls quickly | `MinActiveTime` too low | Increase `Config.NPCSpawn.MinActiveTime`. |
| Search zone too close | Search too easy | Low `SearchCenterMin` | Increase `SearchCenterMin` and `SearchCenterMax`. |
| Search zone too big | Search too hard | High `SearchAreaRadius` | Reduce `SearchAreaRadius` for the mission. |
| Multiple NPCs on map | Too many NPCs | High `MaxNPCs` | Lower `Config.NPCSpawn.MaxNPCs`. |
| Target shows wrong label | Target text not updated | Locale key mismatch | Update target label keys in `locales/*.lua`. |

## ❓ **FAQ:**

| Question | Answer |
|---|---|
| Can I start a mission from another script? | Yes, use the client export `RequestMission` or trigger `smdz_pets_rescue:server:acceptMission`. |
| How do I change the whistle key? | Set `Config.Whistle.Key` (keymapping label) and `Config.Whistle.KeyControl` in `config/config.lua`. |
| Can I disable the UI timer? | Yes, update the UI component or hide it in the NUI code. |
| Does the resource support ESX and QBCore? | Yes, it supports ESX, QBCore, QBX, and standalone. |
| Why does my NPC not appear for some players? | Ensure the resource is started server-wide and the spawn loop is running. |
| Can I add more NPC points? | Yes, add them in `config/npc-config.lua` with valid coords and `animalSpawns`. |
| How do I customize dialogue text? | Edit `locales/en.lua`, `locales/es.lua`, or add a new locale file. |
| Can I change rewards to a different item? | Yes, set `Config.Rewards.ItemName` to your item name. |
| Are webhook embeds editable? | Yes, edit `Config.Webhooks` and the locale keys for log fields. |
| How do I troubleshoot spawn issues? | Enable `Config.Framework.Debug` and review spawn logs. |
| How do I keep cooldowns after restart? | Enable `Config.Gameplay.PersistentCooldowns` and ensure `oxmysql` is running. |
| Can I force only one NPC at a time? | Yes, set `Config.NPCSpawn.MaxNPCs = 1`. |
| How do I change NPC names? | Edit `Config.NPC.Names` in `config/config.lua`. |
| Can I disable whistles entirely? | Yes, set `Config.Whistle.Enabled = false`. |
| Can I prevent missions at specific points? | Disable the point in `config/npc-config.lua` or set `spawnChance = 0`. |
| How do I change the mission timer? | Set `Config.Gameplay.MissionTimeLimit` or per-mission `TimeLimit`. |
| How do I change the rescue distance? | Adjust `Config.Gameplay.RescueDistance`. |

---

# **🔄 UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# **⚠️ IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
