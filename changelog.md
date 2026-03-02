# 🧾 **CHANGELOG:**

---


## 📡 | SMDZ Emergency GPS - `1.1.0` - 2026-03-02

### ✨ Highlights
- Added favorite color support with SQL persistence (same behavior as icon favorites).
- Added 3 new UI themes: Obsidian, Lagoon, Saffron.
- Remember and persist last label, icon, color, and scale between NUI openings.

### 🧪 UI/UX
- Blocks game inputs while typing in the NUI to prevent keybind conflicts.
- Favorites tab label title now shows correctly above the label input.
- UI now displays the Quick Reset title/description/button texts (reset block localized).
- Added a Config reset button to clear last label/icon/color/scale for the player.
- Favorited color indicators now show the golden star, same as icon favorites.

### 🧩 Fixes
- Fixed duplicate vehicle refs when driver and copilot create refs on the same vehicle (now single ref per vehicle netId).
- Resmon optimization adjustments applied.

### 🔧 Changes
- Removed all management ping functionality (UI, events, permissions, locales and webhooks).
- Cleaned locales and UI strings to match the new feature set.
- Persist last label/icon/color/scale in SQL (shared across devices).

### 🗂️ Files Modified
- `client/cl_client.lua`
- `server/sv_server.lua`
- `html/app.js`
- `html/index.html`
- `html/style.css`
- `bridge/database.lua`
- `sql/database.sql`
- `locales/en.lua`
- `locales/es.lua`
- `locales/fr.lua`
- `locales/pt.lua`
- `locales/de.lua`

---

## 🔖 | Evidence Markers - `1.1.1` - 2026-02-20
- The `client/cl_edit_props.lua` file is now open source to avoid `"syntax error near '<\1>'"` problems.
- The `INSTALL_FILES/items_tgiann-inventory.lua` file has been added for convenience when adding objects to this inventory.
**NOTE: This update is not required for current customers.**

---

## 🔖 | Evidence Markers - `1.1.0` - 2026-02-14
- Added compatibility layer in `config.lua` to map new structured config to legacy fields used by runtime.
- Added client and server exports `useItem` and declared them in `fxmanifest.lua`.
- Updated server logic to support marker definitions under `Config.Markers.Items` and safe ox_inventory export handling.
- Updated ox_inventory item definitions to call `smdz_evidence_markers.useItem` via server export.
- Updated QS inventory item definitions with usable fields (`name`, `type`, `unique`, `useable`, `shouldClose`).
- Removed all `lj-inventory` support from the inventory bridge.
- Moved exports into `client/cl_exports.lua` and `server/sv_exports.lua` and added additional utility exports.
- Fixed ox_inventory export signature handling so items can be used reliably.
- Added `Config.DrawText3D.RenderDistance` to limit drawtext rendering distance for lower CPU usage.
- Added `Config.DrawText3D.ScanInterval` and cached nearby markers to reduce per-frame drawtext cost.
- Added `Config.DrawText3D.IdleWait` to lower drawtext loop frequency when no markers are nearby.
- Now the debug mode is displayed correctly; previously, even when activated, it was not shown.
  - Files changed:
- `config.lua` (You need to replace the old config.lua with the new one)
- `fxmanifest.lua`
- `bridge/inventory.lua`
- `client/cl_main.lua`
- `client/cl_exports.lua`
- `server/sv_main.lua`
- `server/sv_exports.lua`
- `INSTALL_FILES/items_ox_inventory.lua`
- `INSTALL_FILES/items_qs_inventory.lua`