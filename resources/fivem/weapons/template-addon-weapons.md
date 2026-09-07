<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_example showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_weaponpack`
- 💻 **Author:** SMDZ Studios
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# ⚙️ **TECHNICAL INFORMATION:**

| Weapon | Spawn Name | Type | Polygons | Vertices |
| --- | --- | --- | ---: | ---: |
| Weapon 1 | `WEAPON_EXAMPLE_01` | Melee | `0` | `0` |
| Weapon 2 | `WEAPON_EXAMPLE_02` | Melee | `0` | `0` |

### Model Data

| Property | Value |
| --- | --- |
| Model format | `.ydr` |
| Texture format | `.ytd` |
| Addon / Replacement | Addon |
| LODs | `Yes / No` |
| Collision | `Yes / No` |
| Animated | `Yes / No` |

---

# 📁 **RESOURCE FILES:**

```text
smdz_weaponpack/
├── fxmanifest.lua
├── cl_weaponNames.lua
├── meta/
│   ├── weaponarchetypes.meta
│   ├── weaponanimations.meta
│   ├── pedpersonality.meta
│   └── weapons.meta
└── stream/
    ├── weapon_model.ydr
    └── weapon_model.ytd
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
2. Add it to `server.cfg`:

```cfg
ensure smdz_weaponpack
```

3. Restart the resource/server.

---

# 🔧 **SPAWN NAMES:**

```text
WEAPON_EXAMPLE_01
WEAPON_EXAMPLE_02
```

---

# 🎒 **INVENTORY INTEGRATION:**

Use the corresponding example for your inventory system and replace the weapon names, labels and image names with your own.

## ox_inventory

Add the weapon entries to your `ox_inventory/data/weapons.lua` file:

```lua
['WEAPON_EXAMPLE_01'] = {
    label = 'Example Weapon 01',
    weight = 1500,
    durability = 0.10,
},

['WEAPON_EXAMPLE_02'] = {
    label = 'Example Weapon 02',
    weight = 1500,
    durability = 0.10,
},
```

Place the inventory icons inside:

```text
ox_inventory/web/images/
```

Recommended image names:

```text
WEAPON_EXAMPLE_01.png
WEAPON_EXAMPLE_02.png
```

## QBCore / QB-Based Inventories


For classic QBCore setups using `qb-inventory` and `qb-weapons`, add the weapon to the corresponding QBCore files.

### 1. `qb-core/shared/items.lua`

Add the weapon as an inventory item:

```lua
weapon_example_01 = {
    name = 'weapon_example_01',
    label = 'Example Weapon 01',
    weight = 1500,
    type = 'weapon',
    ammotype = nil,
    image = 'weapon_example_01.png',
    unique = true,
    useable = false,
    description = 'Addon melee weapon.'
},

weapon_example_02 = {
    name = 'weapon_example_02',
    label = 'Example Weapon 02',
    weight = 1500,
    type = 'weapon',
    ammotype = nil,
    image = 'weapon_example_02.png',
    unique = true,
    useable = false,
    description = 'Addon melee weapon.'
},
```

### 2. `qb-core/shared/weapons.lua`

Register the addon weapon in QBCore:

```lua
QBShared.Weapons[`weapon_example_01`] = {
    name = 'weapon_example_01',
    label = 'Example Weapon 01',
    weapontype = 'Melee',
    ammotype = nil,
    damagereason = 'Bludgeoned'
}

QBShared.Weapons[`weapon_example_02`] = {
    name = 'weapon_example_02',
    label = 'Example Weapon 02',
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

    weapon_example_01 = 0.15,
    weapon_example_02 = 0.15,
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
weapon_example_01.png
weapon_example_02.png
```

Typical QBCore structure:

```text
QBCore / qb-inventory
├── qb-core/shared/items.lua
├── qb-core/shared/weapons.lua
├── qb-weapons/config.lua        # Durability, if qb-weapons is used
└── qb-inventory/html/images/
```

## Qbox / QBX-Based Inventories

For QBX servers using a QB-compatible inventory, use the same item format as the QB example above.

If your server uses `ox_inventory` with Qbox, use the `ox_inventory` example instead.

> **Note:** Inventory file paths and supported fields can vary depending on the exact inventory version or fork being used.
