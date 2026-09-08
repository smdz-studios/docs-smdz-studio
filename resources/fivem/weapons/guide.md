<section class="support-hero weapons-hero">
  <p class="support-eyebrow">SMDZ STUDIOS &middot; FIVEM WEAPONS</p>
  <h1>ADDON WEAPON INSTALLATION</h1>
  <p>Install the resource, register it in the inventory you actually use, then test it in-game with the right identifier.</p>
  <div class="weapons-nav">
    <details class="weapons-setup-dropdown">
      <summary>CHOOSE SETUP</summary>
      <div class="weapons-setup-menu">
        <a href="#/resources/fivem/weapons/guide.md?id=no-inventory">
          <span>No inventory</span>
          <strong>Spawn by identifier</strong>
        </a>
        <a href="#/resources/fivem/weapons/guide.md?id=ox_inventory">
          <span>ESX / ox</span>
          <strong>ox_inventory</strong>
        </a>
        <a href="#/resources/fivem/weapons/guide.md?id=qbcore-inventories">
          <span>QBCore</span>
          <strong>qb-inventory</strong>
        </a>
        <a href="#/resources/fivem/weapons/guide.md?id=qbx-and-qbox">
          <span>QBX / Qbox</span>
          <strong>Active inventory</strong>
        </a>
      </div>
    </details>
  </div>
</section>

> [!NOTE]
> **Read this first:** This guide is for **addon weapons**: weapons that add a new spawn name such as `WEAPON_SMDZ_EXAMPLE`. It is not for replacements that only swap the model or texture of a GTA V weapon.
>
> Install the weapon resource first. After that, register the same identifier in the system that manages weapons on your server. Renaming an inventory item does not create a weapon.

## Before you begin

You need the weapon package prepared for FiveM, access to `resources` and `server.cfg`, and administrator permissions to test it. Back up any inventory configuration files you plan to edit.

This guide uses a **fictional pistol**. Replace every example value with the information included in your weapon package.

| Setting | Example | What it means |
| --- | --- | --- |
| Resource folder | `smdz_weapon_example` | The folder containing `fxmanifest.lua`. |
| Weapon identifier | `WEAPON_SMDZ_EXAMPLE` | The internal weapon name, also called its spawn name. |
| QBCore item | `weapon_smdz_example` | The item identifier used in the QBCore examples. |
| Display name | `SMDZ Example` | The name players see. You can translate it. |
| Inventory image | `weapon_smdz_example.png` | The weapon's inventory icon. |

Ammo, weight, and durability values below are examples for a pistol. Use the settings supplied with your weapon, especially for rifles, melee weapons, and throwables.

---

## Install the weapon resource

1. Extract the downloaded package.
2. Place its resource folder inside `resources`, for example at `resources/[weapons]/smdz_weapon_example`.
3. Check that `fxmanifest.lua` sits directly inside the resource folder. Avoid a nested path such as `smdz_weapon_example/smdz_weapon_example/fxmanifest.lua`.
4. Keep the supplied manifest, `.meta` files, models, and textures together. A resource that only loads assets does not need additional `client.lua` or `server.lua` files.
5. Add `ensure smdz_weapon_example` to `server.cfg`, using the actual folder name. If your configuration already starts the entire `[weapons]` folder, avoid starting the same resource twice.
6. Follow the package's dependency requirements. As a practical order, load its dependencies, then the weapon, then the resources that use it. Preserve the startup order required by your framework and inventory.
7. Finish the inventory setup below, then restart the server and reconnect.

`ensure` starts a resource or restarts it if it is already running. The manifest declares the files FiveM loads. References: [FiveM server commands](https://docs.fivem.net/docs/server-manual/server-commands/) and [resource manifests](https://docs.fivem.net/docs/scripting-reference/resource-manifest/).

## Choose your setup

| Your server uses | Go to | Main files touched |
| --- | --- | --- |
| No inventory or persistent weapon system | [No inventory](#/resources/fivem/weapons/guide.md?id=no-inventory) | Admin menu or custom weapon delivery resource |
| `ox_inventory`, including ESX with ox | [ox_inventory](#/resources/fivem/weapons/guide.md?id=ox_inventory) | `ox_inventory/data/weapons.lua`, `ox_inventory/web/images/` |
| `qb-core` with `qb-inventory` or an inventory that reads QBCore shared data | [QBCore inventories](#/resources/fivem/weapons/guide.md?id=qbcore-inventories) | `qb-core/shared/items.lua`, `qb-core/shared/weapons.lua`, inventory images |
| `qbx_core` / Qbox | [QBX and Qbox](#/resources/fivem/weapons/guide.md?id=qbx-and-qbox) | Usually ox files, unless your inventory documents another setup |

> [!NOTE]
> **Choose by inventory:** Your integration depends on the system managing your weapons as well as your framework. ESX's native loadout is a weapon system even without a visible inventory interface. Follow that loadout's registration and persistence instructions if you use it.

---

## No inventory

Once the resource is running, use an administration menu that supports **giving addon weapons by identifier**.

1. Sign in with an authorized administrator account.
2. Find the custom weapon, addon weapon, or spawn-by-name option.
3. Enter the actual weapon identifier, such as `WEAPON_SMDZ_EXAMPLE`.
4. Add ammo through the same menu and test the weapon.

If the menu only lists GTA V weapons, check its custom weapon configuration. A missing menu entry does not necessarily mean the weapon resource failed to load.

**FiveM does not include a universal chat command for giving yourself any weapon.** Available commands depend on your installed resources. You need a compatible admin menu or weapon delivery system to obtain it.

The weapon resource alone **does not save ownership or ammo** after disconnecting, dying, or respawning. Your weapon or loadout system handles that persistence.

---

## ox_inventory

### 1. Register the weapon

Open `ox_inventory/data/weapons.lua` and insert this entry inside the existing **`Weapons`** table. Adjust it to match your weapon.

```lua
['WEAPON_SMDZ_EXAMPLE'] = {
    label = 'SMDZ Example',
    weight = 1000,
    durability = 0.1,
    ammoname = 'ammo-9',
    client = {
        image = 'weapon_smdz_example.png',
    },
},
```

This is a configuration entry for the existing table. Keep neighboring commas and braces intact; do not replace the file or add another `return`.

Register the weapon in `Weapons`, rather than as a regular item in `data/items.lua`. `ammoname` must reference an existing ammo item appropriate for the package. `ammo-9` is the pistol example. Reference: [ox_inventory weapon definitions](https://github.com/overextended/ox_inventory/blob/main/data/weapons.lua).

### 2. Add the icon

Copy `weapon_smdz_example.png` into `ox_inventory/web/images/`. The example explicitly sets its filename through `client.image`. Match capitalization exactly. If you configured a custom image location, use that location instead. Reference: [item and image loading](https://github.com/overextended/ox_inventory/blob/main/modules/items/shared.lua).

### 3. Test in game

Restart the server, reconnect, and run these ox admin commands in chat:

| Action | Chat command |
| --- | --- |
| Give one weapon | `/giveitem 1 WEAPON_SMDZ_EXAMPLE 1` |
| Give 30 rounds | `/giveitem 1 ammo-9 30` |

Replace player ID `1` with the connected player's ID. Equip the weapon from the inventory and reload.

Ox restricts these commands to `group.admin`. If access is denied, check the administrator's ACE permissions. Reference: [ox_inventory commands](https://github.com/overextended/ox_inventory/blob/main/server.lua).

---

## QBCore inventories

These instructions use **`qb-core` + `qb-inventory`** as the reference setup. For another inventory, confirm that it reads `QBCore.Shared.Items` and follow its custom weapon documentation.

### 1. Register the item

Open `qb-core/shared/items.lua` and insert this entry inside **`QBShared.Items`**:

```lua
['weapon_smdz_example'] = {
    name = 'weapon_smdz_example',
    label = 'SMDZ Example',
    weight = 1000,
    type = 'weapon',
    ammotype = 'AMMO_PISTOL',
    image = 'weapon_smdz_example.png',
    unique = true,
    useable = false,
    description = 'SMDZ Example',
},
```

Keep `type = 'weapon'` and `unique = true`. Standard qb-inventory handles weapons separately, so this example uses `useable = false`. Other inventories may require different settings. Reference: [QBCore items](https://github.com/qbcore-framework/qb-core/blob/main/shared/items.lua).

### 2. Register the weapon information

Open `qb-core/shared/weapons.lua` and insert this entry inside **`QBShared.Weapons`**:

```lua
[joaat('WEAPON_SMDZ_EXAMPLE')] = {
    name = 'weapon_smdz_example',
    label = 'SMDZ Example',
    weapontype = 'Pistol',
    ammotype = 'AMMO_PISTOL',
    damagereason = 'SMDZ Example',
},
```

The table key is the **weapon hash**, calculated with `joaat`. Use that hash instead of a string key. Set the weapon category and ammo type to match your package. Reference: [QBCore weapons](https://github.com/qbcore-framework/qb-core/blob/main/shared/weapons.lua).

Both entries belong inside existing tables. Keep the rest of each file. You can translate `label`, `description`, and `damagereason` without changing identifiers.

### 3. Add the icon and configure durability

Copy `weapon_smdz_example.png` into `qb-inventory/html/images/`. For another inventory, use its image folder and the filename specified in `image`.

If your server uses **`qb-weapons`**, open `qb-weapons/config.lua` and add this entry inside **`Config.DurabilityMultiplier`**:

```lua
['weapon_smdz_example'] = 0.15,
```

This is an example wear multiplier. Review your version's ammo, animation, and attachment settings as well. You can reuse an existing ammo category when it matches your weapon. Reference: [qb-weapons configuration](https://github.com/qbcore-framework/qb-weapons/blob/main/config.lua).

### 4. Test in game

Restart the server and reconnect. With administrator permissions, use these commands in standard qb-inventory chat:

| Action | Chat command |
| --- | --- |
| Give one weapon | `/giveitem 1 weapon_smdz_example 1` |
| Give one ammo item | `/giveitem 1 pistol_ammo 1` |

Replace player ID `1` with the connected player's ID. `pistol_ammo` is the standard example ammo item; use the one configured on your server. Equip and reload through your inventory system. Reference: [qb-inventory commands](https://github.com/qbcore-framework/qb-inventory/blob/main/server/commands.lua).

### Other QBCore-based inventories

Check your inventory version's documentation for:

- Item and weapon registration: QBCore tables, the inventory's own files, or both.
- Image locations and filename requirements.
- Whether ammo, durability, and attachments are managed internally or by a separate resource.
- The administrative command used to give items.

QBCore compatibility does not mean every inventory uses identical configuration files. Use one system to manage weapon equipping and reloading to avoid conflicts.

---

## QBX and Qbox

**If your Qbox server uses ox_inventory, follow the entire ox_inventory section.** Register the weapon in `ox_inventory/data/weapons.lua` and give it as `WEAPON_SMDZ_EXAMPLE`.

Keep your Qbox installation's dependencies and startup order. You do not need to install `qb-core` or `qb-weapons` to follow this guide.

Basic ox integration does not require a duplicate item in `qbx_core/shared/items.lua`. If an older resource reads items through the QBCore compatibility bridge, check its data requirements separately. Reference: [Qbox compatibility FAQ](https://docs.qbox.re/faq).

If you replaced ox with another inventory, use its provider's documented **Qbox integration**. The qb-inventory procedure is not automatically interchangeable.

---

## Shops, jobs, and attachments

Registering a weapon makes it available to the inventory. It **does not automatically add it to shops, job armories, crafting recipes, or rewards**.

Add its item identifier to the system that will distribute it, together with the appropriate price, permissions, and restrictions. Test administrative delivery before configuring a shop.

For attachments, use the component identifiers supplied with the weapon and register them through your inventory's attachment system. A suppressor or magazine from another weapon is not automatically compatible.

## Final checklist

- The resource starts without server console errors.
- The player receives the weapon and sees its name and icon when using an inventory.
- The model and textures appear when equipped.
- The weapon fires and reloads with the correct ammo.
- Storing and equipping it again does not duplicate it.
- On servers with persistence, ownership and ammo survive reconnection as configured.
- Configured shops and armories deliver the correct item and enforce their permissions.

---

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Resource not found | Folder name, `fxmanifest.lua` location, and the `ensure` entry. |
| Unknown or invalid item | Registration in the active inventory, exact identifier, and a restart after editing. |
| Item appears but will not equip | Weapon resource startup, actual weapon identifier, and inventory weapon settings. |
| Invisible model or missing textures | Package files, manifest paths, and loading errors in F8. |
| Missing icon | Image path, extension, and exact filename capitalization. |
| Weapon will not reload | Package ammo settings, ox's `ammoname`, or QB's `ammotype` and reload system. |
| QB durability error | The weapon entry in your active durability system's configuration. |
| Weapon disappears when equipped | Conflicting weapon managers or inventory/anticheat restrictions. Check logs and allowed weapon settings. |
| Weapon missing from a shop | Add the item to that shop's configuration separately. |
| Lua syntax error | Commas, quotes, braces, and placement inside the correct existing table. |
| Command access denied | ACE permissions or the administrative group required by the command's resource. |

---

**Need a hand?** Contact [SMDZ Studios Support](#/docs/support/support.md) with the package name, weapon identifier, framework and inventory versions, the failing step, and the server console or F8 error.
