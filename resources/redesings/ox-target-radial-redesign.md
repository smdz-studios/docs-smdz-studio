<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/9FElU876EZE"
    title="oxtarget redesing showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT (REDESING) IS AVAILABLE IN ESCROW VERSION ONLY
</p>

---

# 🧩 **OVERVIEW:**
- 📌 **Name:** `ox_target` by Overextended
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / VRP / ND
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

> This product is a visual redesign of the original `ox_target` interface.
> It does not replace or rewrite the original targeting API, exports, zones, integrations, framework support, or interaction logic.

---

# ⭐ **FEATURES:**

- 🎯 **Modern radial interface** — transforms the standard target list into a clean, modern interaction wheel.
- 🔌 **Original ox_target compatibility** — existing exports, zones, events, integrations, and scripts continue working without changes.
- 🌀 **Smooth animated experience** — polished opening, closing, hover, and selection transitions.
- 🎨 **Eight ready-to-use colour styles** — switch instantly between Black & White, Green, Red, Blue, Pink, Orange and Gold. (Add more)
- 📍 **Flexible screen positioning** — place the radial lower, higher, left, right, or at fully custom coordinates.
- 🧭 **Smart pagination** — large interaction lists remain organised and easy to navigate.
- 📝 **Responsive option labels** — long text automatically wraps and scales to remain readable inside each segment.
- 🔊 **Custom opening sound** — enable, disable, or replace the included MP3 without rebuilding the interface.

---

# 🎨 **BUILT-IN PRESETS:**

The redesign includes the following presets:

| Preset key | Style |
|---|---|
| `default` | Graphite and champagne |
| `black_white` | Minimal black and white |
| `green` | Tactical green |
| `red` | Strong red |
| `blue` | Modern blue |
| `pink` | Soft pink |
| `orange` | Warm orange |
| `gold` | Premium gold |

The default preset is:

```lua
Config.TargetPreset = 'black_white'
```

---

# 📦 **REQUIREMENTS:**

- `ox_lib` — required by the original `ox_target`
- A recent FiveM server artifact

---

# 🚀 **INSTALLATION:**

1. Stop the server completely.
2. Back up your current `ox_target` configuration if necessary.
3. Delete or move the previous `ox_target` folder outside the resources directory.
4. Upload the redesigned resource.
5. Rename the folder exactly to:

```text
ox_target
```

6. Make sure `ox_lib` starts before `ox_target`.
7. Add or keep the following start order:

```cfg
ensure ox_lib
ensure ox_target
```

8. Start the server and test an existing target interaction.

### Correct folder structure

```text
resources/[standalone]/ox_target/fxmanifest.lua
```

### Incorrect folder structure

```text
resources/[standalone]/ox_target/ox_target/fxmanifest.lua
```

> Do not install the redesigned version next to another copy of `ox_target`.

---

# ⚙️ **CONFIGURATION:**

The redesign uses two editable configuration files:

```lua


Config = Config or {}

-- ============================================================================
-- OX_TARGET RADIAL REDESIGN - CONFIGURATION
-- ============================================================================
-- INDEX
--   1. General settings
--   2. Screen position
--   3. Interaction behaviour
--   4. Visual appearance
--   5. Opening sound
-- ============================================================================
-- POSITION PRESETS
--   center, top_center, bottom_center, left_center, right_center,
--   top_left, top_right, bottom_left, bottom_right, custom
-- ============================================================================

-- ============================================================================
-- 1. GENERAL SETTINGS
-- ============================================================================
-- Built-in locale files: en, es, fr, de, it and pt.
-- Add locales/<code>.lua to use another language without editing protected files.

Config.Locale = 'en' -- Locale file loaded from locales/<code>.lua; custom locale files are supported automatically.

-- The active colour preset is selected in config_presets.lua.

-- ============================================================================
-- 2. SCREEN POSITION
-- ============================================================================

Config.Radial = {
    position = 'bottom_center', -- Screen position preset used by the radial menu.
    offsetX = 0, -- Extra horizontal offset in pixels; positive values move the radial to the right.
    offsetY = 0, -- Extra vertical offset in pixels; positive values move the radial down.
    customX = 50, -- Horizontal viewport percentage used only when position is set to 'custom'.
    customY = 66, -- Vertical viewport percentage used only when position is set to 'custom'.

-- ============================================================================
-- 3. INTERACTION BEHAVIOUR
-- ============================================================================

    closeDuration = 240, -- Closing animation duration in milliseconds.
    itemsPerPage = 8, -- Maximum number of target actions displayed on each radial page.
    mouseWheel = true, -- Allows changing radial pages with the mouse wheel.
    keyboardShortcuts = true, -- Enables number keys, arrow keys and Enter for radial navigation.

-- ============================================================================
-- 4. VISUAL APPEARANCE
-- ============================================================================

    opacity = 0.90, -- Overall radial opacity from 0.10 to 1.00; 0.90 equals 90 percent opacity.
    depthEffect = true, -- Enables the subtle layered pseudo-3D effect.
    cursorParallax = true, -- Tilts the radial slightly towards the cursor position.
    maxTilt = 4.5, -- Maximum cursor tilt in degrees; recommended range is 3.0 to 6.0.
    perspective = 900, -- CSS perspective distance; higher values create a softer effect.
    depth = 18, -- Visual separation between radial layers in pixels.

-- ============================================================================
-- 5. OPENING SOUND
-- ============================================================================

    openSound = {
        enabled = true, -- Enables the sound played when a valid target radial opens.
        file = 'assets/radial.mp3', -- Audio path relative to web/dist; replace this file without rebuilding the UI.
        volume = 0.45, -- Audio volume from 0.00 to 1.00.
    },
}

```

The original `ox_target` convars configured through `.cfg` files are still supported.



---

# 🧾 **ORIGINAL OX_TARGET CONFIGURATION:**

The redesign does not remove the original `.cfg` convar system.

Common examples:

```cfg
setr ox_target:defaultHotkey LMENU
setr ox_target:toggleHotkey 0
setr ox_target:leftClick 1
setr ox_target:drawSprite 1
setr ox_target:defaults 1
setr ox_target:debug 0
```

These convars continue to control the original target behaviour.

The new `config.lua` controls only the added radial redesign features.

---

# 🔌 **EXPORTS:**

All original `ox_target` exports remain unchanged.

Existing resources do not need to change their target code.

Examples remain valid:

```lua
exports.ox_target:addModel(models, options)
exports.ox_target:addEntity(netIds, options)
exports.ox_target:addLocalEntity(entities, options)
exports.ox_target:addGlobalPed(options)
exports.ox_target:addGlobalVehicle(options)
exports.ox_target:addSphereZone(data)
exports.ox_target:addBoxZone(data)
exports.ox_target:addPolyZone(data)
exports.ox_target:removeZone(id)
```

This redesign does not introduce a replacement target API.

Refer to the official `ox_target` documentation for the complete API and option structure.

---

# 🔌 **COMPATIBILITY:**

The redesign keeps the original:

- Exports
- Target options
- Zones
- Entity interactions
- Model interactions
- Global interactions
- Framework bridges
- Compatibility files
- Event execution
- Menu names
- Resource ownership checks
- Distance checks
- Bone targeting
- Icon configuration
- `iconColor`
- `canInteract`
- `groups`
- `items`
- `anyItem`
- `onSelect`
- `event`
- `serverEvent`
- `command`
- Original convars
- Supported `qtarget` compatibility layer through `provide 'qtarget'`

No changes are required in scripts that already use `ox_target`.


---

# ❓ **FAQ — FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| **Does this replace or rewrite ox_target?** | No. It is a visual radial redesign built on the original `ox_target` system. |
| **Will my current scripts and integrations continue working?** | Yes. Original exports, zones, options, events, framework bridges, and interaction logic remain unchanged. |
| **Do I need to modify existing target code?** | No. Resources already using `ox_target` should continue working normally. |
| **Which frameworks are supported?** | The redesign keeps the compatibility provided by the included original `ox_target`, including ESX, QBCore, QBX, ND, Ox Core, and standalone use cases. |
| **Does the redesign use DUI or world-space rendering?** | No. It uses a regular NUI with an optional subtle perspective and cursor-parallax effect. |
| **Does it require a database or oxmysql?** | No. The redesign does not store player data and requires no SQL setup. |
| **Can I move the radial to another part of the screen?** | Yes. Use the position presets, pixel offsets, or custom viewport coordinates in `config.lua`. |
| **Can I change its transparency?** | Yes. Configure `Config.Radial.opacity`; the default value is `0.90`. |
| **Can I disable the depth effect?** | Yes. Set `depthEffect` and `cursorParallax` to `false`. |
| **How are large option lists handled?** | The menu automatically creates additional pages while preserving the original option indexes. |
| **What happens when an option label is long?** | The label automatically wraps across multiple lines and adapts its size to remain inside the segment. |
| **Can I replace the opening sound?** | Yes. Replace `web/dist/assets/radial.mp3` with another MP3 using the same filename. No rebuild is required. |
| **Can I disable the opening sound?** | Yes. Set `Config.Radial.openSound.enabled = false`. |
| **Can I create my own colour preset?** | Yes. Duplicate a complete preset in `config_presets.lua`, edit its colours, and select its new key. |
| **Can I add another language?** | Yes. Create `locales/<code>.lua`, translate all required values, and set `Config.Locale` to that code. |
| **Does the original `.cfg` configuration still work?** | Yes. Original convars for the hotkey, toggle mode, left-click selection, default interactions, sprites, and debug mode remain supported. |
| **Can I rename the resource folder?** | No. Keep the folder name exactly as `ox_target` to preserve compatibility. |
| **Can I remove the SMDZ core files?** | No. `client/smdz_core.lua` and `server/smdz_core.lua` are required for the redesigned interface. |

---

# 🧰 **COMMON ISSUES:**

| Issue | Likely cause | Solution |
|---|---|---|
| The radial never appears | Missing core file, duplicated resource, or `ox_lib` not started | Verify both `smdz_core.lua` files, remove duplicate installations, and start `ox_lib` first |
| Left Alt does nothing | Incorrect FiveM key binding | Reset or reassign the target key in FiveM settings |
| The original target indicator appears but no radial options appear | The tested entity or zone has no valid options | Test a known working target and inspect `canInteract`, distance, groups, and items |
| The radial appears in the wrong location | Position or offset configuration | Check `position`, `offsetX`, `offsetY`, `customX`, and `customY` |
| The radial is too transparent | Opacity is too low | Increase `Config.Radial.opacity` |
| The radial is too strong or blocks the view | Position or opacity is too high | Use `bottom_center`, increase `offsetY`, or reduce opacity |
| The radial tilts too much | High `maxTilt` or low perspective | Lower `maxTilt` and increase `perspective` |
| No opening sound plays | Sound disabled, wrong path, unsupported file, or browser restriction | Verify `enabled`, path, MP3 file, and F8 errors |
| Custom theme has missing colours | Incomplete preset table | Copy a complete built-in preset and change only values |
| Custom locale fails | Missing key or Lua syntax error | Compare it with `en.lua` and check F8/server console |
| UI shows a black full-screen background | Old cached or mixed `dist` files | Delete the previous folder completely, reinstall, and clear client cache |
| React error in F8 | Old `vendor/react` files mixed with the new build | Delete the entire previous `web/dist` and install a clean copy |
| Target works in the original resource but not in the redesign | Incorrect installation or missing SMDZ core | Verify folder structure, manifest, and protected files |
| Numbers or labels overlap | Old cached UI bundle | Replace the complete resource and clear FiveM cache |
| The selected preset does not apply | Invalid preset key | Use a key that exists in `Config.TargetPresets` |
| Resource reports an integrity failure | Protected core missing, altered, or not loaded | Restore the original purchased resource files |

---

# ✅ **INSTALLATION CHECKLIST:**

<p style="text-align: center; font-weight: bold; color: red;">
Complete every step before opening a support ticket.
</p>

## 1️⃣ Test the official original ox_target

- [ ] Stop the server completely.
- [ ] Install the official original `ox_target`.
- [ ] Start the server.
- [ ] Test Left Alt and a known target interaction.
- [ ] Confirm whether the original resource works.

> If the official original resource does not work, the problem is not caused by the radial redesign.

## 2️⃣ Verify the redesigned resource installation

- [ ] Delete or move every previous copy of `ox_target`.
- [ ] Install only one `ox_target` folder.
- [ ] Confirm the folder is named exactly `ox_target`.
- [ ] Confirm it is not nested inside another folder.
- [ ] Confirm both SMDZ core files exist.

Required files:

```text
ox_target/client/smdz_core.lua
ox_target/server/smdz_core.lua
ox_target/config.lua
ox_target/config_presets.lua
ox_target/web/dist/index.html
```

## 3️⃣ Verify start order

```cfg
ensure ox_lib
ensure ox_target
ensure your_resource_using_target
```

- [ ] Confirm `ox_target` is not started from another `.cfg`.
- [ ] Confirm no second target resource is replacing it.
- [ ] Fully restart the server.

## 4️⃣ Verify the key binding

- [ ] Open FiveM.
- [ ] Go to **Settings → Key Bindings → FiveM**.
- [ ] Search for `ox_target`, `target`, or `third eye`.
- [ ] Confirm the action is assigned.
- [ ] Test by holding the assigned key.

Temporary debug configuration:

```cfg
setr ox_target:defaultHotkey LMENU
setr ox_target:toggleHotkey 0
setr ox_target:debug 1
```

## 5️⃣ Verify dependencies

- [ ] Confirm `ox_lib` starts without errors.
- [ ] Update `ox_lib` if necessary.
- [ ] Temporarily stop `qb-target`, `qtarget`, `bt-target`, `eye-target`, and similar target replacements.
- [ ] Search the complete resources directory for duplicate `ox_target` folders.

## 6️⃣ Check both consoles

- [ ] Check the server console during resource startup.
- [ ] Open the client F8 console.
- [ ] Search for `ox_target`, `SMDZ`, `NUI`, `React`, `SCRIPT ERROR`, `failed`, `missing`, or `integrity`.
- [ ] Press the target key while F8 is open.
- [ ] Copy the complete error, not only the final line.

## 7️⃣ Test a known interaction

- [ ] Test an NPC, vehicle, model, zone, or interaction known to work.
- [ ] Confirm the resource adding the target starts after `ox_target`.
- [ ] Restart that resource after restarting `ox_target`.
- [ ] Verify its `canInteract`, groups, items, and distance conditions.

## 8️⃣ Clear FiveM cache

- [ ] Close FiveM completely.
- [ ] Clear the FiveM client cache.
- [ ] Do not delete the `game` folder.
- [ ] Reconnect and test again.

---

# ⚖️ **CREDITS AND LICENSING:**

This resource includes and preserves the original `ox_target` system and its applicable license.

### Original project

- **Project:** `ox_target`
- **Original author:** Overextended
- **Original repository:** Overextended `ox_target`
- **Original license:** See the included `LICENSE` file

### Radial redesign

- **Design and implementation:** SMDZ Studios
- **React radial interface:** SMDZ Studios
- **Configuration presets:** SMDZ Studios
- **Protected integration core:** SMDZ Studios
- **Store:** `https://smdz-studios.tebex.io/`
- **Documentation:** `https://docs.smdz-studios.com`

---

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for **Q1 and Q2 of 2026**.
- 🛠️ During this period, the script will only receive:
  - **Bug fixes / emergency patches** if necessary
  - **Small content additions or minor improvements** from time to time
- ⚠️ Major feature expansions or full system reworks are **not planned** during this timeframe.

- 🧾 **UPDATE STEPS:**
  *Backup config → replace folder → restore config → restart server.*
