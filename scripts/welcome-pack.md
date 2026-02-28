<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_welcome_pack showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>

A modern **welcome rewards** system for FiveM servers. Spawn NPCs, open a premium NUI, and grant items, money, and optional vehicles with strong anti-abuse and creator code bonuses.


# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_welcome_pack`
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**  
An all-in-one welcome pack system with NPC interaction, NUI rewards, creator codes, owner tiers, and multi-framework compatibility.

---

# ✨ **FEATURES:**

| Module | Description | Details |
| --- | --- | --- |
| NPC | Configurable NPCs | Target interaction + drawtext + blips |
| Rewards | Items, money, vehicles | Per NPC and per character control |
| Creator Codes | Invite/bonus codes | Extra items and money |
| Creator Ownership | Owner tiers | Usage tracking + claimable rewards |
| UI | Elegant NUI | Icons, labels, code input |
| Owner Panel | Premium panel | Badges + progress bars |
| Multi-Framework | ESX / QB / QBX | Auto-detected |
| Multi-Inventory | ox / qb / ps / qs / origen | Bridge-based |
| Fuel | LegacyFuel / ox_fuel / ps-fuel / lj-fuel / rcore_fuel / Renewed-Fuel / myFuel / cdn-fuel | Auto-detected |
| Webhooks | Discord embeds | Fully localized |
| Debug | Detailed logs | Locales-based keys |
| Scenario Rotation | Synced animations | NPC scenario changes globally |

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended build.
- **Framework:** ESX / QBCore / QBX / Standalone.
- **Database adapter:** `oxmysql` or `mysql-async`.
- **Dependencies (optional):**
  - **Target:** `ox_target` / `qb-target`
  - **Inventory:** `ox_inventory`, `qb-inventory`, `origen_inventory`, `ps-inventory`, `qs-inventory`
  - **Fuel:** `LegacyFuel`, `ox_fuel`, `ps-fuel`, `lj-fuel`, `rcore_fuel`, `Renewed-Fuel`, `myFuel`, `cdn-fuel`
  - **Notify:** ESX, QB/QBX, `ox_lib`, `okokNotify`, `mythic_notify`

Note: If you use `mysql-async`, replace `@oxmysql/lib/MySQL.lua` with `@mysql-async/lib/MySQL.lua` in `fxmanifest.lua`.

---

# 🛠️ **INSTALLATION:**

1. Download the resource: `smdz_welcome_pack.zip`.
2. Extract into your FiveM resources:

```text
resources/[smdz]/smdz_welcome_pack
```

3. Import the SQL file (optional if auto-create enabled):

```text
sql/install.sql
```

4. Add the resource to `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_welcome_pack
```

5. Restart or start the resource:

```bash
start smdz_welcome_pack
```

6. Check the server console for errors.

---

# ⚙️ **CONFIGURATION:**

Main configuration: `config.lua`.

```lua
Config = {}

Config.Debug = true
Config.TestMode = false
Config.Locale = 'en'

Config.Framework = 'auto'
Config.Inventory = 'auto'
Config.Target = 'auto'
Config.Notify = 'auto'

Config.Fuel = 'auto'
Config.DefaultVehicleFuel = 100

Config.RouteInventoryIcons = 'nui://ox_inventory/web/images/'
Config.NUILogo = 'nui://smdz_welcome_pack/nui/assets/logo.png'
Config.NUIVehicleImage = 'nui://smdz_welcome_pack/nui/assets/vehicles/default.png'
```

## 🔧 Key Settings (Quick Reference)

| Config | Values | Purpose |
| --- | --- | --- |
| `Config.Debug` | `true/false` | Enable detailed localized debug logs |
| `Config.TestMode` | `true/false` | Disable claim limits for testing |
| `Config.Locale` | `en` / `es` | Locale language |
| `Config.Framework` | `auto` / `es_extended` / `qb-core` / `qbx_core` / `none` | Framework provider |
| `Config.Inventory` | `auto` / `ox_inventory` / `qb-inventory` / `ps-inventory` / `qs-inventory` / `origen_inventory` / `none` | Inventory provider |
| `Config.Target` | `auto` / `ox_target` / `qb-target` / `none` | Target provider |
| `Config.Notify` | `auto` / `esx` / `qb` / `qbx` / `ox_lib` / `okok` / `mythic` / `custom` | Notification provider |
| `Config.Fuel` | `auto` / `legacyfuel` / `ox_fuel` / `ps-fuel` / `lj-fuel` / `rcore_fuel` / `renewed-fuel` / `myfuel` / `cdn-fuel` / `none` | Fuel provider |
| `Config.AdaptarSQL` | `auto` / `oxmysql` / `mysql-async` | SQL adapter |
| `Config.AutoCreateTables` | `true/false` | Create tables on start |
| `Config.IdentifierType` | `charid` / `license` / `steam` / `discord` / `fivem` / `ip` / `name` | Persistence ID type |
| `Config.NameIdentifier` | table | Name field mapping (if `name`) |
| `Config.RouteInventoryIcons` | string | Base inventory icon path |
| `Config.NUILogo` | string | Server logo (NUI) |
| `Config.NUIVehicleImage` | string | Default vehicle image (NUI) |
| `Config.NPCDrawText` | table | Drawtext config |
| `Config.ScenariosNPC` | table | Global scenario rotation |
| `Config.BlipRadius` | number | Default blip visibility radius |
| `Config.Webhook` | table | Discord logging |
| `Config.CreatorCodes` | table | Creator codes + owner + max uses |
| `Config.RewardsCodes` | table | Owner reward tiers |

---

# 🧍 **NPCS & REWARDS:**

```lua
Config.NPCs = {
  {
    id = 'airport',
    npc = {
      model = 'u_m_m_filmdirector',
      coords = vec4(-1025.0029, -2694.6545, 13.9423, 173.7711),
      scenario = 'WORLD_HUMAN_CLIPBOARD'
    },
    blip = {
      enabled = true,
      sprite = 280,
      color = 2,
      scale = 0.9,
      label = 'Welcome Rewards',
      radius = 100.0
    },
    welcomeRewards = {
      items = {
        { name = 'phone', amount = 1, label = 'Smartphone' },
        { name = 'water', amount = 5, label = 'Water Bottle' },
        { name = 'bread', amount = 5, label = 'Bread' }
      },
      money = 500
    },
    vehicleReward = {
      enabled = true,
      model = 'primo',
      platePrefix = 'WELCOME',
      warpPlayer = true,
      fuel = 100,
      oneTimePerCharacter = true,
      saveToGarage = true,
      garageType = 'car',
      defaultGarage = nil,
      image = 'nui://smdz_welcome_pack/nui/assets/vehicles/primo.png',
      spawnPoints = { vec4(-1038.7433, -2678.1826, 13.2235, 147.6143) }
    }
  }
}
```

Note: If `Config.ScenariosNPC.enabled = true`, the per-NPC `scenario` is only used as a fallback.

---

# 🎭 **SCENARIO ROTATION:**

```lua
Config.ScenariosNPC = {
  enabled = true,
  interval = 120,
  list = {
    'WORLD_HUMAN_CLIPBOARD',
    'WORLD_HUMAN_STAND_IMPATIENT',
    'WORLD_HUMAN_GUARD_STAND'
  }
}
```

- The rotation is synced via `GlobalState` for all players.
- Each interval picks the next scenario in the list.

---

# 🧾 **CREATOR / INVITE CODES:**

```lua
Config.CreatorCodes = {
  ['VIP'] = {
    owner = { type = 'discord', id = '123456789012345678' },
    maxUses = 100,
    items = {
      { name = 'weapon_pistol', amount = 1, label = 'Pistol 9mm' }
    },
    money = 5000
  }
}
```

- Enter the code in the NUI to receive **bonus rewards**.
- `maxUses = 0` means unlimited uses.
- `owner` links the code to the creator for rewards tracking (`discord`, `license`, `fivem`).

---

# 🏆 **CREATOR OWNER REWARDS:**

Owners can check their codes and claim tier rewards from the NUI.

Command:

```text
/viewmycodes
```

Reward tiers:

```lua
Config.RewardsCodes = {
  { uses = 10, items = { { name = 'water', amount = 5 } }, money = 1000 },
  { uses = 25, items = { { name = 'bread', amount = 5 } }, money = 2500 }
}
```

The owner panel shows:
- Code badges (Active / Maxed)
- Uses and max uses
- Progress bar per reward tier

---

# 🖥️ **UI / NUI:**

| Config | Description |
| --- | --- |
| `Config.RouteInventoryIcons` | Base icon path (default: `nui://ox_inventory/web/images/`) |
| `Config.NUILogo` | Logo image path (default: `nui://smdz_welcome_pack/nui/assets/logo.png`) |
| `Config.NUIVehicleImage` | Default vehicle image path |

NUI assets:

| File | Purpose |
| --- | --- |
| `nui/index.html` | Layout |
| `nui/style.css` | Styling |
| `nui/app.js` | Logic |
| `nui/assets/logo.png` | Server logo |
| `nui/assets/vehicles/*.png` | Vehicle images |
| `nui/icons/*.png` | Item icons |

---

# 📣 **NOTIFICATIONS:**

| Provider | Event |
| --- | --- |
| ESX | `esx:showNotification` |
| QB/QBX | `QBCore:Notify` |
| ox_lib | `ox_lib:notify` |
| okokNotify | `okokNotify:Alert` |
| mythic_notify | `mythic_notify:client:SendAlert` |
| Custom | `smdz_welcome_pack:notify` |

---

# ⛽ **FUEL:**

| Provider | Method |
| --- | --- |
| LegacyFuel | `exports['LegacyFuel']:SetFuel(vehicle, amount)` |
| ox_fuel | `Entity(vehicle).state.fuel = amount` |
| ps-fuel | `exports['ps-fuel']:SetFuel(vehicle, amount)` |
| lj-fuel | `exports['lj-fuel']:SetFuel(vehicle, amount)` |
| rcore_fuel | `exports['rcore_fuel']:SetVehicleFuel(vehicle, amount)` |
| Renewed-Fuel | `exports['Renewed-Fuel']:SetFuel(vehicle, amount)` |
| myFuel | `exports['myFuel']:SetFuel(vehicle, amount)` |
| cdn-fuel | `exports['cdn-fuel']:SetFuel(vehicle, amount)` |

---

# 📊 **WEBHOOK LOGS:**

```lua
Config.Webhook = {
  enabled = true,
  url = 'https://discord.com/api/webhooks/...',
  username = 'SMDZ Welcome',
  avatar = '',
  color = 16766720
}
```

Logged events:
- Successful claim (items, money, vehicle)
- Blocked claim (already claimed, invalid code, maxed code)
- Owner panel opened
- Owner reward claimed / denied
- Owner panel requested with no codes

---

# 🧪 **DEBUG:**

Set `Config.Debug = true` to view detailed logs. All debug prints use locale keys.

| Area | Key Prefix | Example |
| --- | --- | --- |
| Framework | `DEBUG_FW_` | `DEBUG_FW_AUTO_PROVIDER` |
| Inventory | `DEBUG_INV_` | `DEBUG_INV_ADD_ITEM` |
| Target | `DEBUG_TARGET_` | `DEBUG_TARGET_ADD_NPC` |
| Notify | `DEBUG_NOTIFY_` | `DEBUG_NOTIFY_AUTO_PROVIDER` |
| Fuel | `DEBUG_FUEL_` | `DEBUG_FUEL_CDN_FAIL` |
| Client | `DEBUG_CL_` | `DEBUG_CL_NPC_CREATE` |
| Server | `DEBUG_SV_` | `DEBUG_SV_CLAIM_PACK_START` |
| Database | `DEBUG_DB_` | `DEBUG_DB_ADAPTER` |

---

# 🧰 **EVENTS & EXPORTS (Developers):**

## Server Events

| Event name | Parameters | Description |
| --- | --- | --- |
| `smdz_welcome_pack:claimPack` | `npcId` | Claim items/money only |
| `smdz_welcome_pack:claimVehicle` | `npcId` | Claim vehicle only |
| `smdz_welcome_pack:claimAll` | `npcId`, `code` | Claim everything + creator code |
| `smdz_welcome_pack:claimOwnerReward` | `code`, `usesRequired` | Claim creator owner reward tier |

## Client Events

| Event name | Parameters | Description |
| --- | --- | --- |
| `smdz_welcome_pack:spawnVehicle` | `data` | Spawns and optionally warps player into vehicle |
| `smdz_welcome_pack:notify` | `message` | Shows fallback notification |
| `smdz_welcome_pack:openOwner` | `data` | Opens creator owner rewards NUI |
| `smdz_welcome_pack:ownerRewardClaimed` | `code`, `usesRequired` | Updates owner rewards UI after claim |

## Exports

No exports are defined by default.

---

# 🧭 **USAGE:**

### Player Flow

1. Approach the NPC.
2. Interact via target or drawtext.
3. NUI opens with rewards.
4. Optional creator code can be entered.
5. Claim rewards (one-time per character unless `TestMode` is enabled).

### Commands

| Command | Description | Permission |
| --- | --- | --- |
| `/viewmycodes` | Opens creator code stats and rewards NUI | Code owner |

### Command Suggestion

The command suggestion is registered on client load and localized via `CMD_VIEWMYCODES_DESC`.

---

# 🗃️ **DATABASE:**

```sql
CREATE TABLE IF NOT EXISTS smdz_welcome (
  identifier VARCHAR(64) NOT NULL,
  npc_id VARCHAR(64) NOT NULL,
  claimed_pack TINYINT(1) DEFAULT 0,
  claimed_vehicle TINYINT(1) DEFAULT 0,
  PRIMARY KEY (identifier)
);

CREATE TABLE IF NOT EXISTS smdz_welcome_codes (
  code VARCHAR(64) NOT NULL,
  uses INT NOT NULL DEFAULT 0,
  last_used TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (code)
);

CREATE TABLE IF NOT EXISTS smdz_welcome_code_claims (
  code VARCHAR(64) NOT NULL,
  owner_key VARCHAR(96) NOT NULL,
  uses_required INT NOT NULL,
  claimed_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (code, owner_key, uses_required)
);
```

---

# 🛠️ **DEBUGGING & COMMON ISSUES:**

1. **NUI does not open**
   - Check `ui_page` and `nui/` files in `fxmanifest.lua`.
   - Verify the resource is started.

2. **Items not received**
   - Verify `Config.Inventory` provider.
   - Check item names exist in inventory.

3. **Vehicle not saved**
   - Update `Config.ESXOwnedVehicles` / `Config.QBOwnedVehicles` schema.
   - Confirm `saveToGarage = true` and DB table exists.

4. **Creator code maxed**
   - Increase `maxUses` or set to `0` (unlimited).

5. **Owner rewards not available**
   - Ensure the code has an `owner` configured.
   - Verify the `owner` identifier matches the player.

6. **No fuel applied**
   - Check fuel resource name and `Config.Fuel`.

7. **Webhook not firing**
   - Confirm `Config.Webhook.enabled = true` and URL is valid.

---

# 🔄 **UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*