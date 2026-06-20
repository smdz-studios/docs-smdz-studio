# 🧾 **CHANGELOG SMDZ STUDIOS:**


#  🚌 | SMDZ Bus Travels - `1.1.0` - 2026-06-20
### 💰 Permanent Price Reduction

- With the release of version `1.1.0`, the script’s price has been permanently reduced from **€16.99** to **€9.99**, excluding taxes. (escrow version)
- This is a permanent price adjustment and not a limited-time discount.

### 🧩 Fixes

- Fixed several client-side synchronization issues that could cause inconsistent behavior between players.
- Removed duplicate locale keys found in several supported languages.
- Fixed the server startup thread to call `printStartupBanner()` directly.
- **The use of Xbox Live IDs has been completely eliminated to comply with the [new CFX changes](https://forum.cfx.re/t/deprecation-notice-xbox-live-and-microsoft-player-identifiers/5397645/1).**

### 🚀 Improvements

- Added additional waiting scenarios to `Config.WaitAnims` for more varied and natural NPC behavior.
- Updated the server startup banner to display the currently selected or automatically detected:

  - Framework
  - Inventory
  - Progress bar
  - Notification system
  - Locale

### 🛡️ Security & Structure

- Moved the locale core from `shared/locale.lua` to `init/locale.lua` for improved organization and initialization.
- Moved webhook configuration exclusively to `server/server_config.lua`.
- Removed `Config.Webhooks` from the shared configuration to prevent webhook URLs from being exposed client-side.

### 🗂️ Files Updated

- `fxmanifest.lua`
- `init/locale.lua`
- `server/server_config.lua`
- `shared/config.lua`
- `server/sv_main.lua`
- `client/cl_main.lua`

---

#  🐄 | The Rancher Job - `1.2.0` - 2026-05-22
### ✅ Added
- New global anti-exploit toggle `Config.AntiExploit.enabled`.
- Shared anti-exploit state helper in client and server to keep behavior consistent.
- Added `@ox_lib/init.lua` to `shared_scripts` in `fxmanifest.lua`.
- Added `dependency 'ox_lib'` in `fxmanifest.lua`.
- Added inventory bridge support for `ak47_inventory` (`AddItem` export integration).

### 🔧 Changed
- Fixed job finish validation so active jobs are no longer blocked with `expired_job` while already in progress.
- Anti-exploit checks now fully respect `Config.AntiExploit.enabled` across start/finish flow.
- Improved finish delivery validation to reduce false `notify_job_invalid_delivery` caused by temporary server-side herd desync at delivery time.

### ❌  Removed
- Removed `Config.AntiExploit.maxFinishAttempts` from `shared/config.lua`.
- Removed all server-side `maxFinishAttempts` / `finishAttempts` spam-cancel logic.

### 🗂️ Files Modified
- `bridge/inventory.lua`
- `client/main.lua`
- `server/main.lua`
- `shared/config.lua`
- `fxmanifest.lua`


---


## 🔖 | Evidence Markers - `1.3.0` - 2026-04-21
### ✅ Added
- Marker info interaction on active markers through target.
- Marker info now opens using the same existing evidence NUI card in read-only mode.
- New config block `Config.Target.Info`.
- New config block `Config.Timezone`.
- Server-side anti-spam and validation for marker info requests.
- Minor improvements to increase optimization.

### 🔧 Changed
- Updated default place/pickup animations in `config.lua`:
  - `dict = 'random@domestic'`
  - `name = 'pickup_low'`
- Banner framework display now correctly reads `Config.Framework.Mode` (fixed `table: 0x...` output).
- Webhook identity now uses `Config.Webhook.Identity` consistently (`Username`, `Avatar`).

### ❌ Removed
- **The use of Xbox Live IDs has been completely eliminated to comply with the [new CFX changes](https://forum.cfx.re/t/deprecation-notice-xbox-live-and-microsoft-player-identifiers/5397645/1).**
- Legacy compatibility bootstrap code from the bottom of `config.lua`.


### 🗂️ Files Modified
- `bridge/framework.lua`
- `bridge/notify.lua`
- `bridge/targets.lua`
- `client/cl_edit_props.lua`
- `client/cl_exports.lua`
- `client/cl_main.lua`
- `config.lua`
- `locales/en.lua`
- `locales/es.lua`
- `nui/app.js`
- `nui/index.html`
- `nui/style.css`
- `server/sv_main.lua`

---



## 🐄 | The Rancher Job - `1.1.0` - 2026-04-21
### 🧩 Fixes
- **The use of Xbox Live IDs has been completely eliminated to comply with the [new CFX changes](https://forum.cfx.re/t/deprecation-notice-xbox-live-and-microsoft-player-identifiers/5397645/1).**
- Prevented global job expiration/rotation while a player is actively running the ranch job (`currentJob.activeBy`).
- This stops the NPC/job point from changing mid-run and avoids herd loss caused by forced job resets.

### 🚀 Performance
- Added NPC distance-based streaming on client side:
  - NPC and job blip are created only when the player is within `200.0` meters.
  - NPC and job blip are cleaned up when the player is farther than `200.0` meters.
- Added cow distance culling on server side:
  - Spawned cow entities now use `SetEntityDistanceCullingRadius(..., 200.0)`.
  - Players farther than `200.0` meters do not stream/render those cows.

### 🗂️ Files Updated
- `client/main.lua`
- `server/main.lua`
- `shared/config.lua`


---


## 🔖 | Evidence Markers - `1.2.0` - 2026-04-03
### 🧩 Fixes
- A bug has been fixed for ox inventory which was blocking the purchase and drag from an ox inventory store to the inventory.

### 🗂️ Files Modified
- `server/sv_exports.lua`


---

## 📱 | SMDZ LB PHONE APP Emergency Alerts  - `1.1.0` - 2026-03-23
### ✅ Added
- Support for ACE permissions has been added to the administrative command to delete alerts. (ACE or GROUPS permissions)
- Docs updated.

### 🧩 Fixed
- An SQL error regarding player settings has been fixed.

---


## 🎨 | SMDZ Ox Target Crystal Style - `1.1.0` - 2026-03-13
### ✅ Added
- Added ACE permission support for restricted themes in `Config.ThemeDonator` and `Config.ThemeDiscordBoosters`:
  - New `AcePermissions` option (for example: `group.admin`, `admin`, `themediscordboosters`).
- Added server callback `ox_target:hasAcePermission` for client-side ACE checks.
- Added real `server.cfg` / `permissions.cfg` usage examples in `config.lua`.
- Two new languages ​​have been added to the locale. (nl.lua and tr.lua)

### 🔧 Changed
- Updated theme lock checks in `client/main.lua` to grant access using OR logic:
  - `Groups` **or*- `AcePermissions`.
  - Neither one overrides the other.
- Strengthened server-side permission validation:
  - Supports both `admin` and `group.admin` formats.
  - Uses `qbx_core:HasPermission` when available, with `IsPlayerAceAllowed` fallback.
- Improved QBX framework group checks in `client/framework/qbx.lua`:
  - Fixed `QBX:HasGroup` filter usage.
  - Added compatibility for multi-job/multi-gang group structures.
  - Added permission caching to reduce repeated callback calls.
- Updated `config.lua` comments with clearer real-world examples.

### 🧩 Fixed
- Improved QBCore group compatibility in `client/framework/qb.lua`:
  - Safer `PlayerData` fallback handling.
  - Grade parsing compatibility for `number`, `string`, and `table` formats.
  - More robust group/permission matching (including `group.<perm>` patterns).
  - Prevented invalid comparisons when hash filters include non-numeric grade values.

### 🗂️ Files Modified
- `config.lua`
- `client/main.lua`
- `server/main.lua`
- `client/framework/qbx.lua`
- `client/framework/qb.lua`

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
