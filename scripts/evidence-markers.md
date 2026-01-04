<div align="center" style="margin-bottom: 1.5rem;">
  <!-- Replace the src with your real showcase video URL (YouTube, etc.) -->
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_evidence_markers showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

A modern **welcome rewards** system for FiveM servers. Spawn NPCs, open a premium NUI, and grant items, money, and optional vehicles with strong anti-abuse and creator code bonuses.

---

# 🧩 OVERVIEW:

- **Name:** `smdz_evidence_markers`
- **Author:** SMDZ Studios
- **Type:** ESX / QBCore / QBX / Standalone
- **Version:** `1.0.0`
- **Status:** <span class="badge badge--stable">Stable</span>

---

# ✨ FEATURES:
- 🎯 Synced evidence markers with pickup + note editing and 3D labels visible to everyone.
- 📝 Crime-scene NUI: yellow card, 30-char notes, Clear/Cancel/Save, big ID badge, fully localized.
- 🧭 Mouse-first gizmo: auto-open placement with translate/rotate, world/local toggle, snap-to-ground.
- 🛡️ Job/grade control: whitelist or blacklist with grade support for place/pickup/note editing.
- 🎯 Target actions: configurable pickup/edit labels/icons (ox_target / qb-target required).
- 🔌 Bridges: auto-detect frameworks, targets, inventories; fall back safely.
- 🌐 Webhooks: use/place/pickup/cancel with player/job/coords/item/netId and configurable colors/footer.
- 🧹 Auto-cleanup: optional timed purge of placed markers with per-owner notification.
- 🌍 Localization: EN/ES ready (uppercase keys, easy to extend).

---

# 🧰 REQUIREMENTS:
- FiveM latest recommended build with OneSync.
- Target (required): `ox_target` or `qb-target` (script stops if missing).
- Inventory (auto): `ox_inventory`, `lj-inventory`, `qs-inventory`, `qb-inventory`, `origen_inventory`, `core_inventory`, `ak47_inventory` (extendable).
- Framework (auto): ESX / QBCore / QBox / standalone.
- `ox_lib` optional.

---

# 📦 INSTALLATION:
1) Place in `resources/[smdz]/smdz_evidence_markers`.
2) Ensure dependencies start before this resource.
3) Example `server.cfg`:
   ```cfg
   ensure ox_lib              # optional but recommended
   ensure ox_inventory
   ensure ox_target           # or qb-target
   ensure smdz_evidence_markers
   ```
4) Restart the server.

---

# 🔧 CONFIGURATION (config.lua):
- `Locale`: `'en' | 'es'`.
- `Debug`: true/false (`[SMDZ DEBUG]` verbose logs).
- `Framework`: `'auto' | 'esx' | 'qbcore' | 'qbox' | 'standalone'`.
- `InventoryMode`: `'auto' | 'ox_inventory' | 'lj_inventory'`.
- `TargetMain`: `{ Mode = 'auto', Distance = 3.0, Label = 'TARGET_PICKUP', Icon = 'fa-solid fa-hand', NoteIcon = 'fa-solid fa-pen' }`.
- `NotifyMode`: `'auto' | 'ox_lib' | 'esx' | 'qbcore' | 'qbox' | 'origen_notify' | 'wasabi_notify' | 'brutal_notify' | 'rtx_notify' | 'vms_notifyv2' | 'mythic_notify' | 'okokNotify' | 'ps-ui' | 't-notify' | 'rcore_notify' | 'codem-notification'`.
- `Notify`: `{ Type = 'inform', Duration = 5000 }`.
- `AllowedJobs`: `{ Enabled, Mode = 'whitelist'|'blacklist', Jobs = { job = { enabled, grades = { [0]=true } } } }`.
- Placement: `PlaceMaxDistance`, `PlaceOnGround`, `FreezeAfterPlace`, snap key `G`.
- DrawText: `Enabled`, `Scale`, `Distance`, `HeightOffset`, `Color`.
- Animations: EMS/medic kneel with `freeze`, configurable duration.
- Webhook: `Webhook.Enabled/Url/Username/Avatar/Footer/Colors`.
- Markers: item → `{ model, label }` (label maps to locale keys).
- Cleanup: `{ Enabled = true, IntervalHours = 4, NotifyPlayers = false }`.

---

# 🤝 COMPATIBILITY:
- Inventories: ox_inventory, lj-inventory, qs-inventory, qb-inventory, origen_inventory, core_inventory, ak47_inventory (fallback to ESX/QBCore natives).
- Target: ox_target, qb-target (required).
- Notify: ox_lib, esx, qbcore, qbox, origen_notify, wasabi_notify, brutal_notify, rtx_notify, vms_notifyv2, mythic_notify, okokNotify, ps-ui, t-notify, rcore_notify, codem-notification.
- Frameworks: ESX, QBCore, QBox, standalone.
- Locales included: en, es.

---

# 🧭 QUICKSTART:
1) Use a marker item.
2) Gizmo auto-opens; drag axes, `G` snaps to ground.
3) Controls: `W` translate, `R` rotate, `Q` world/local, `ENTER` place, `BACKSPACE/ESC` cancel, `G` snap.
4) Target the prop: pick up (returns item) or write note (30 chars; delete clears).
5) Everyone sees the marker title + note in 3D; synced instantly.

---

# 🎮 CONTROLS (PLACEMENT):
- Auto-open gizmo on placement.
- Mouse drag gizmo; `W` translate, `R` rotate, `Q` world/local, `G` snap, `ENTER` place, `BACKSPACE/ESC` cancel.
- Distance clamped to `PlaceMaxDistance`.
- Bottom-center 2D drawtext shows translated controls.

---

# 📝 NOTES & TARGET:
- Target actions: pickup + write note (30 chars, synced).
- 3D draw text: marker title + note line for all players.
- NUI: yellow FBI-style card, big ID, save/delete/cancel, localized.

---

# 🌐 WEBHOOKS:
- Configure via `Config.Webhook`; set URL, username/avatar, footer, colors.
- Events: used item, placed, picked up, canceled with player/job/coords/item/netId.

---

# 🧹 CLEANUP:
- Optional timed purge (`Cleanup.IntervalHours`); notifies owners if `NotifyPlayers` is true.

---

# 🧪 DEBUG:
- `Config.Debug = true` prints `[SMDZ DEBUG]` for target/inventory/framework modes, gizmo, notes, clamp/snap, webhooks, sync, cleanup.

---

# 🛠️ DEVELOPER EVENTS (PREFIXED):
- Client → Server: `useItem`, `placed`, `pickup`, `cancelPlace`, `setNote`, `syncRequest`.
- Server → Client: `beginPlace`, `addTarget`, `removeMarker`, `updateNote`, `notify`.
- All prefixed with `smdz_evidence_markers:`.

---

# 🆘 SUPPORT:
- Provide resource/version, framework, inventory, target, FiveM build, client/server logs, and repro steps.
  
---

# 🔄 UPDATES:
- There are **NO** plans to add script updates during 2025 and early 2026.
- **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# ⚠️🚨 IMPORTANT WARNING:
**DO NOT CHANGE THE RESOURCE FOLDER NAME!**

If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
*If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*