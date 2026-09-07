<div align="center" style="margin-bottom: 1.5rem;">

  <img
    src="miniatura.png"
    alt="SMDZ Baseball Pack"
    width="640"
    style="max-width: 100%; border-radius: 12px;"
  />
</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_baseball_pack`
- 💻 **Author:** SMDZ Studios
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# ⚙️ **TECHNICAL INFORMATION:**

| Weapon | Spawn Name | Type | Polygons | Vertices |
| --- | --- | --- | ---: | ---: |
| Blood Baseball | `WEAPON_SMDZ_BLOOD_BASEBALL` | Melee | `3,095` | `1,935` |
| Chains Baseball | `WEAPON_SMDZ_CHAINS_BASEBALL` | Melee | `16,292` | `11,990` |
| Spiked Baseball | `WEAPON_SMDZ_SPIKED_BASEBALL` | Melee | `46,966` | `30,894` |

### Model Data

| Property | Value |
| --- | --- |
| Model format | `.ydr` |
| Texture format | `.ytd` |
| Addon / Replacement | Addon |
| LODs | `Yes` |
| Collision | `Yes` |
| Animated | `No` |

---

# 📁 **RESOURCE FILES:**

```text
smdz_baseball_pack/
|-- fxmanifest.lua
|-- cl_weaponNames.lua
|-- 1.png
|-- 2.png
|-- 3.png
|-- meta/
|   |-- weaponarchetypes.meta
|   |-- weaponanimations.meta
|   |-- pedpersonality.meta
|   `-- weapons.meta
`-- stream/
    |-- w_smdz_blood_baseball.ydr
    |-- w_smdz_blood_baseball.ytd
    |-- w_smdz_chains_baseball.ydr
    |-- w_smdz_chains_baseball.ytd
    |-- w_smdz_spiked_baseball.ydr
    `-- w_smdz_spiked_baseball.ytd
```

### Meta Files

| File | FiveM Data Type |
| --- | --- |
| `weaponarchetypes.meta` | `WEAPON_METADATA_FILE` |
| `weaponanimations.meta` | `WEAPON_ANIMATIONS_FILE` |
| `pedpersonality.meta` | `PED_PERSONALITY_FILE` |
| `weapons.meta` | `WEAPONINFO_FILE` |

---

# 📥 **INSTALLATION:**

1. Place the resource inside your FiveM `resources` folder.
2. Add it to `server.cfg` before your inventory resource:

```cfg
ensure smdz_baseball_pack
ensure ox_inventory
```

3. Restart the full server.

Weapon metadata is loaded at resource startup. A full server restart is recommended after installing or updating addon weapons.

---

# 🔧 **SPAWN NAMES:**

```text
WEAPON_SMDZ_BLOOD_BASEBALL
WEAPON_SMDZ_CHAINS_BASEBALL
WEAPON_SMDZ_SPIKED_BASEBALL
```

---

# 🎒 **INVENTORY INTEGRATION:**

## ox_inventory

Add the weapon entries to your `ox_inventory/data/weapons.lua` file:

```lua
['WEAPON_SMDZ_BLOOD_BASEBALL'] = {
    label = 'Bloody Baseball',
    weight = 1134,
    durability = 0.05,
},

['WEAPON_SMDZ_CHAINS_BASEBALL'] = {
    label = 'Chains Baseball',
    weight = 1350,
    durability = 0.05,
},

['WEAPON_SMDZ_SPIKED_BASEBALL'] = {
    label = 'Spiked Baseball',
    weight = 1250,
    durability = 0.05,
},
```

Place the inventory icons inside:

```text
ox_inventory/web/images/
```

Recommended image names:

```text
WEAPON_SMDZ_BLOOD_BASEBALL.png
WEAPON_SMDZ_CHAINS_BASEBALL.png
WEAPON_SMDZ_SPIKED_BASEBALL.png
```

## QBCore / QB-Based Inventories

For classic QBCore setups using `qb-inventory` and `qb-weapons`, add the weapons to the corresponding QBCore files.

### 1. `qb-core/shared/items.lua`

Add the weapons as inventory items:

```lua
weapon_smdz_blood_baseball = {
    name = 'weapon_smdz_blood_baseball',
    label = 'Bloody Baseball',
    weight = 1134,
    type = 'weapon',
    ammotype = nil,
    image = 'weapon_smdz_blood_baseball.png',
    unique = true,
    useable = false,
    description = 'A bloody custom baseball bat.'
},

weapon_smdz_chains_baseball = {
    name = 'weapon_smdz_chains_baseball',
    label = 'Chains Baseball',
    weight = 1350,
    type = 'weapon',
    ammotype = nil,
    image = 'weapon_smdz_chains_baseball.png',
    unique = true,
    useable = false,
    description = 'A custom baseball bat wrapped with chains.'
},

weapon_smdz_spiked_baseball = {
    name = 'weapon_smdz_spiked_baseball',
    label = 'Spiked Baseball',
    weight = 1250,
    type = 'weapon',
    ammotype = nil,
    image = 'weapon_smdz_spiked_baseball.png',
    unique = true,
    useable = false,
    description = 'A custom spiked baseball bat.'
},
```

### 2. `qb-core/shared/weapons.lua`

Register the addon weapons in QBCore:

```lua
QBShared.Weapons[`weapon_smdz_blood_baseball`] = {
    name = 'weapon_smdz_blood_baseball',
    label = 'Bloody Baseball',
    weapontype = 'Melee',
    ammotype = nil,
    damagereason = 'Bludgeoned'
}

QBShared.Weapons[`weapon_smdz_chains_baseball`] = {
    name = 'weapon_smdz_chains_baseball',
    label = 'Chains Baseball',
    weapontype = 'Melee',
    ammotype = nil,
    damagereason = 'Bludgeoned'
}

QBShared.Weapons[`weapon_smdz_spiked_baseball`] = {
    name = 'weapon_smdz_spiked_baseball',
    label = 'Spiked Baseball',
    weapontype = 'Melee',
    ammotype = nil,
    damagereason = 'Bludgeoned'
}
```

### 3. `qb-weapons/config.lua` *(if used)*

If the server uses `qb-weapons`, add the addon weapons to the durability configuration:

```lua
Config.DurabilityMultiplier = {
    -- Existing weapons...

    weapon_smdz_blood_baseball = 0.15,
    weapon_smdz_chains_baseball = 0.15,
    weapon_smdz_spiked_baseball = 0.15,
}
```

For melee addon weapons, you normally do not need to configure ammo types or weapon attachments.

### 4. Inventory Images

Place the inventory icons inside:

```text
qb-inventory/html/images/
```

Recommended image names:

```text
weapon_smdz_blood_baseball.png
weapon_smdz_chains_baseball.png
weapon_smdz_spiked_baseball.png
```

Typical QBCore structure:

```text
QBCore / qb-inventory
|-- qb-core/shared/items.lua
|-- qb-core/shared/weapons.lua
|-- qb-weapons/config.lua
`-- qb-inventory/html/images/
```

## Qbox / QBX-Based Inventories

For Qbox/QBX servers using `ox_inventory`, use the `ox_inventory` example above.

For Qbox/QBX servers using a QB-compatible inventory, use the same item format as the QBCore example above:

```lua
weapon_smdz_blood_baseball
weapon_smdz_chains_baseball
weapon_smdz_spiked_baseball
```

If your Qbox/QBX setup uses a specific inventory export, use that inventory's normal item-giving function. The item name must match the weapon item registered in your inventory.

---

# 🧾 **WEAPON REFERENCE:**

| Weapon | Spawn Name | Hash |
| --- | --- | --- |
| Blood Baseball | `WEAPON_SMDZ_BLOOD_BASEBALL` | `4215274990` / `0xFB3FFDEE` |
| Chains Baseball | `WEAPON_SMDZ_CHAINS_BASEBALL` | `1994447668` / `0x76E0DB34` |
| Spiked Baseball | `WEAPON_SMDZ_SPIKED_BASEBALL` | `1504444513` / `0x59AC0061` |
