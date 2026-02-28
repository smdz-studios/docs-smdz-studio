# **📱 SMDZ LB Emergency App — Documentation (EN-US):**

<div align="center" style="margin-bottom: 1.5rem;">
  
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_lb_emergency_app showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

> Replace `VIDEO_ID_HERE` with your showcase video ID, or remove this block if you do not want a video.

---

# **🧭 TABLE OF CONTENTS:**

1. Overview
2. What This Script Solves
3. Feature Highlights
4. Supported Frameworks and Dependencies
5. Installation
6. Structure and Components
7. How It Works (Flow)
8. Roles and Permissions Model
9. Zone Targeting Model
10. Alert Lifecycle
11. User Experience (Phone App)
12. Staff Experience (Panel)
13. Anonymous Mode Behavior
14. Notification and Feedback System
15. Persistence and Data Storage
16. Webhooks and Audit Trail
17. Localization
18. Developer Integration (Exports + Events)
19. UI Build Pipeline
20. Performance and Stability Notes
21. Security Notes
22. Troubleshooting
23. FAQ
24. Update Guide
25. Deployment Checklist
26. Credits and License

---

# **🧩 OVERVIEW:**

**SMDZ LB Emergency App** is a full emergency alert ecosystem for **LB Phone** on FiveM. It provides:

- A **phone app** for all players to view alerts.
- A **panel** for authorized jobs to send official alerts.
- **Real-time delivery** by zone and type.
- **Audit logs**, **anti-spam**, and **persistence**.

This is built to feel like a real-world public alert system (Amber/Police/Medical/etc.) with strong roleplay control and a clean iOS‑style UI.

---

# **🧠 WHAT THIS SCRIPT SOLVES:**

Server owners often need a system that:

- Lets police/EMS/fire send **public emergency alerts**.
- Targets **only players in a specific region**.
- Ensures **anti-spam controls** and **audit logging**.
- Keeps alerts **persistent** and **readable** on mobile.

This script provides all of that and integrates cleanly with LB Phone.

---

# **✨ FEATURE HIGHLIGHTS:**

- **LB Phone app integration** (custom app)
- **Alert panel** with job/grade restrictions
- **Zone-based dispatch** using PolyZone
- **Unique alert IDs** for referencing and moderation
- **Anonymous mode** (rank always visible)
- **Sound + flashlight notifications** on receive
- **Anti‑spam cooldowns** and **word filter**
- **Auto-expiration** with database cleanup
- **Staff webhook logs** with identifiers
- **Public IC webhook** with embed + optional role mention
- **Per-user settings** saved in DB
- **Multi-language support**

---

# **🧱 SUPPORTED FRAMEWORKS & DEPENDENCIES:**

Frameworks (auto-detected):

- ESX / es_extended
- QBCore / qb-core
- QBX / qbx_core
- vRP

Dependencies (required):

- `lb-phone`
- `PolyZone`
- `oxmysql`

---

# **📥 INSTALLATION:**

1. Extract to:

```text
resources/[lb-phone]/[apps]/smdz_lb_emergency_app
```

2. Add to `server.cfg` in this order:

```bash
ensure lb-phone
ensure PolyZone
ensure oxmysql
ensure smdz_lb_emergency_app
```

3. Restart server or:

```bash
start smdz_lb_emergency_app
```

---

# **📁 STRUCTURE AND COMPONENTS:**

| Component | Purpose |
| --- | --- |
| **Phone App** | Shows alert feed for all players |
| **Alert Panel** | Authorized jobs create alerts |
| **Server Core** | Validates permissions, spam, persistence |
| **Client Core** | Manages NUI + phone integration |
| **Webhooks** | Logs and public announcements |
| **Database** | Stores alerts + per-user settings |

---

# **🔄 HOW IT WORKS (FLOW):**

**1. Player opens panel**
- Job/grade checked server‑side.
- Panel appears only for authorized roles.

**2. Alert is created**
- Server validates type permissions, cooldowns, word filter.
- A unique 3‑digit ID is assigned.

**3. Delivery**
- Server sends to target zone (or all).
- Every player receives notification + sound + flashlight.

**4. Persistence**
- Alert saved in database.
- New players see existing active alerts.

---

# **🛡️ ROLES AND PERMISSIONS MODEL:**

Access is controlled in two layers:

1. **Command access** (who can open panel)
2. **Alert type access** (who can send each type)

This lets you allow broad panel access but restrict specific alert types to higher ranks or different jobs.

---

# **🌍 ZONE TARGETING MODEL:**

Zones are defined as PolyZone polygons. Each player belongs to one zone (or none). Alerts can be sent to:

- **ALL** (global)
- **Specific zone**

The panel shows the sender’s current zone to avoid mistakes.

---

# **⏳ ALERT LIFECYCLE:**

1. **Created** (ID assigned, saved to DB)
2. **Delivered** (to eligible users)
3. **Displayed** (in phone app)
4. **Expired** (auto-cleanup)
5. **Deleted** (admin by ID)

---

# **📱 USER EXPERIENCE (PHONE APP):**

Players see:

- Alert feed with ID, type, job label, and time.
- Settings for volume, theme, visible types, and privacy.
- Airplane mode banner (alerts hidden, but notifications still fire).

Alerts update **in real time** with no refresh needed.

---

# **🧑‍✈️ STAFF EXPERIENCE (PANEL):**

Authorized jobs can:

- Select type and zone
- Write alert message
- Send anonymously (rank still visible)

The panel includes a tablet animation for immersion.

---

# **🙈 ANONYMOUS MODE BEHAVIOR:**

When anonymous:

- Sender name is hidden
- Rank is still shown
- Job label remains visible

This allows public alerts without exposing the author’s name.

---

# **🔔 NOTIFICATION AND FEEDBACK SYSTEM:**

Every alert triggers:

- LB Phone emergency notification
- Sound playback
- Flashlight blinking (if enabled)

These **always trigger**, even if the user hides that alert type or has airplane mode on.

---

# **🗄️ PERSISTENCE AND DATA STORAGE:**

Database tables:

- `smdz_lb_emergency_app_alerts`
- `smdz_lb_emergency_app_user_settings`

Stored data includes:

- Alerts, their type, zone, sender, and timestamps
- Per‑user preferences (volume, theme, hidden types, hidden IDs)

---

# **📡 WEBHOOKS AND AUDIT TRAIL:**

Two webhook systems:

1. **Staff Logs** — full audit of alerts, permissions, identifiers
2. **Public IC Logs** — optional RP broadcast embed

Both can be configured with:

- Role mentions
- Custom embed colors
- Optional image

---

# **🌐 LOCALIZATION:**

Supported locales:

- `en`, `es`, `fr`, `de`, `ptbr`

All UI text, messages, and debug logs are keyed for translation.

---

# **🔌 DEVELOPER INTEGRATION:**

This resource exposes **client and server exports**, and also emits events for advanced integrations.

You can:

- Open the panel programmatically
- Send alerts from other scripts
- Fetch current alert list
- Read user settings

See the **Exports + Events** section below for full details.

---

# **📤 EXPORTS:**

## **Client exports (examples):**

```lua
exports["smdz_lb_emergency_app"]:OpenPanel()

exports["smdz_lb_emergency_app"]:SendAlert({
  type = "police",
  zone = "ALL",
  message = "Roadblock active on Alta St.",
  anonymous = false
})

local alerts = exports["smdz_lb_emergency_app"]:GetFilteredAlerts()
local zone = exports["smdz_lb_emergency_app"]:GetCurrentZone()
local settings = exports["smdz_lb_emergency_app"]:GetUserSettings()
```

### **Client export reference:**

| Export | Returns | Description |
| --- | --- | --- |
| `OpenPanel()` | boolean | Opens the alert panel for local player. |
| `SendAlert(data)` | void | Sends alert to server. |
| `GetAlerts()` | table | Cached alerts (unfiltered). |
| `GetFilteredAlerts()` | table | Alerts after user filters. |
| `RefreshAlerts()` | table | Fetches and updates alerts. |
| `GetCurrentZone()` | string | Current zone id. |
| `GetUserSettings()` | table | User settings. |
| `SetUserSettings(payload)` | table | Saves settings. |
| `ClearUserAlerts()` | table | Clears history for user only. |
| `GetPermissions(refresh?)` | table | `{ filter, allowedTypes }`. |
| `IsNuiReady()` | boolean | NUI readiness. |
| `IsAppReady()` | boolean | App readiness. |
| `GetAirplaneMode()` | boolean | Cached airplane mode. |
| `RefreshAirplaneMode()` | boolean | Refresh airplane mode. |

## **Server exports (examples):**

```lua
exports["smdz_lb_emergency_app"]:SendAlert(source, {
  type = "general",
  zone = "ALL",
  message = "Emergency broadcast test"
})

exports["smdz_lb_emergency_app"]:OpenPanel(source)
exports["smdz_lb_emergency_app"]:DeleteAlert("762", source)
```

### **Server export reference:**

| Export | Returns | Description |
| --- | --- | --- |
| `SendAlert(source, data, opts)` | `ok, result` | Sends alert from server. |
| `OpenPanel(source, opts)` | `ok, reason` | Opens panel for player. |
| `DeleteAlert(code, source, opts)` | `ok, result, code` | Deletes alert by code. |
| `GetAlerts()` | table | Current alert cache. |
| `GetAlertByCode(code)` | table or nil | Alert by code. |
| `GetUserSettings(source)` | table or nil | User settings. |
| `GetAlertTypes()` | table | Configured types. |
| `GetZones()` | table | Configured zones. |
| `GetPermissions(source)` | table | `{ filter, allowedTypes }`. |
| `HasCommandAccess(source)` | boolean | Command permission check. |
| `HasPanelAccess(source)` | boolean | Panel permission check. |
| `GetAlertTypeLabel(type)` | string | Localized type label. |
| `GetZoneLabel(zone)` | string | Localized zone label. |

---

# **📡 EVENTS:**

| Event | Direction | Description | Payload |
| --- | --- | --- | --- |
| `smdz_lb_emergency_app:sendAlert` | Client → Server | Requests a new alert | `{ type, zone, message, anonymous }` |
| `smdz_lb_emergency_app:setZone` | Client → Server | Updates player current zone | `zoneId` |
| `smdz_lb_emergency_app:requestAirplaneMode` | Client → Server | Requests airplane mode | `requestId` |
| `smdz_lb_emergency_app:openPanel` | Server → Client | Opens panel | none |
| `smdz_lb_emergency_app:alert` | Server → Client | Sends a single alert | `alert` object |
| `smdz_lb_emergency_app:alertsUpdated` | Server → Client | Sends full list | `alerts[]` |
| `smdz_lb_emergency_app:notify` | Server → Client | Panel message | `{ message }` |
| `smdz_lb_emergency_app:airplaneModeResponse` | Server → Client | Airplane response | `requestId, enabled` |
| `smdz_lb_emergency_app:alertSent` | Server → Client | Send ack | `{ ok = true }` |
| `smdz_lb_emergency_app:layoutToggle` | Server → Client | Layout debug | none |

---

# **🧩 NUI CALLBACKS:**

| Callback | Direction | Description | Response |
| --- | --- | --- | --- |
| `nuiReady` | NUI → Client | NUI ready | `{ ok = true }` |
| `getConfig` | NUI → Client | Requests config | `{ types, zones, labels, ui, settings }` |
| `getAlerts` | NUI → Client | Requests alerts | `alerts[]` |
| `openPanelAck` | NUI → Client | Panel open ack | `{ ok = true }` |
| `sendAlert` | NUI → Client | Send alert | `{ ok = true }` |
| `closePanel` | NUI → Client | Close panel | `{ ok = true }` |
| `saveUserSettings` | NUI → Client | Save settings | `{ ok, settings }` |
| `clearHistory` | NUI → Client | Clear local history | `{ ok, clearedAt }` |
| `refreshAirplane` | NUI → Client | Refresh airplane | `{ enabled }` |
| `layoutMoved` | NUI → Client | Layout debug coords | `{ ok = true }` |

---

# **🧱 UI BUILD:**

If you edit UI sources, rebuild before restarting the server:

```bash
cd ui
npm install
npm run build
```

---

# **📊 PERFORMANCE NOTES:**

- Zone detection uses PolyZone events + interval refresh.
- Alert list is cached client‑side to reduce DB calls.
- Airplane mode checks only occur on open/refresh.

---

# **🔒 SECURITY NOTES:**

- All critical checks are server‑side (permissions, cooldown, word filter).
- Unauthorized attempts can be logged in webhook.
- `/deletealert` is restricted by framework group permissions.

---

# **🧪 TROUBLESHOOTING:**

1. **Panel does not open**
   - Check job grade and `Config.CommandPermissions`.
   - Ensure `lb-phone` is started first.

2. **No alerts received**
   - Check zones and phone item requirement.
   - Verify word filter and cooldown settings.

3. **Phone does not auto‑open**
   - Set `Config.DisableOpenNUI = false` in `lb-phone/config/config.lua`.

4. **No sound**
   - Confirm `ui/dist/assets/sound.mp3` exists.

5. **Wrong zone shown**
   - Check PolyZone polygons for overlap.

---

# **❓ FAQ:**

**How do I add a new alert type?**  
Add a new entry to `Config.AlertTypes` and to `Config.AlertPermissions.Types`.

**Can I allow alerts without a phone item?**  
Set `Config.RequirePhoneItem = false`.

**Do hidden alert types still notify players?**  
Yes. Sound/flashlight/notification always fire.

**How do I update the UI?**  
Run `npm run build` inside `ui/`.

---

# **✅ DEPLOYMENT CHECKLIST:**

- [ ] `lb-phone` started before this resource
- [ ] `PolyZone` started
- [ ] `oxmysql` started
- [ ] `database.sql` imported (if required)
- [ ] Config reviewed (permissions, zones, webhooks)
- [ ] UI built if modified


---

# **🎯 REAL‑WORLD USE CASES:**

- **Amber Alert:** Missing child bulletin sent to all zones with high priority.
- **Police Advisory:** Road closure or active pursuit in a specific zone.
- **Medical Notice:** Large‑scale medical incident requiring public caution.
- **Fire Warning:** Evacuation or restricted area due to wildfire/structure fire.
- **Military Lockdown:** Restricted access and lockdown in a military zone.

---

# **🧑‍✈️ STAFF BEST PRACTICES:**

- Keep messages **short and clear** (what, where, when).
- Use **correct alert type** for credibility and consistency.
- Avoid sensitive details in public alerts.
- Use **anonymous mode** when identity is not required.
- Don’t spam: let cooldowns do their job.
- When the situation ends, send a final “all clear” notice.

---

# **🔗 SUGGESTED INTEGRATIONS:**

These integrations improve realism and automation:

- **Dispatch / MDT:** Auto‑send alerts based on dispatch calls.
- **Blips / GPS:** Send alerts with GPS points (if you implement a blip system).
- **Inventory:** Require special device to send alerts (tablet or radio).
- **Permissions:** Sync with external police/EMS rank systems.
- **Roleplay events:** Trigger IC alerts during server events or story arcs.

---

# **🔄 UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# **⚠️ IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*


