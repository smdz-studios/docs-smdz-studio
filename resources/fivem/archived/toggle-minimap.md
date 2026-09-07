<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/UOqLiRLXrd0"
    title="SMDZ Toggle Minimap Showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<section class="bridge-policy-card bridge-policy-card--info resource-availability-card" aria-label="ESCROW VERSION ONLY" style="margin: 0.95rem 0 1.2rem; border: 1px solid rgba(59, 130, 246, 0.34); background: linear-gradient(180deg, rgba(30, 64, 175, 0.24), rgba(10, 22, 44, 0.94)); border-radius: 16px; padding: 0.92rem 1rem 0.95rem; box-shadow: 0 14px 32px rgba(0, 0, 0, 0.24);">
  <p class="bridge-policy-card__label" style="margin: 0 0 0.35rem; font-size: 0.72rem; letter-spacing: 0.18rem; text-transform: uppercase; color: #93c5fd; font-weight: 800; display: inline-flex; align-items: center; gap: 0.45rem;">
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false" style="display: block; fill: currentColor;">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"></path>
    </svg>
    Info
  </p>
  <h2 style="margin: 0 0 0.45rem; font-size: clamp(1rem, 2vw, 1.32rem); line-height: 1.1; color: #eff6ff; text-transform: uppercase;">ESCROW VERSION ONLY</h2>
  <p style="margin: 0; color: #dbeafe; line-height: 1.58; font-weight: 620;">
    THIS SCRIPT IS FREE THROUGH TEBEX, OPEN SOURCE VERSION
  </p>
</section>

# 🧩 **OVERVIEW:**
- 📌 **Resource Name:** `smdz_toggleradar`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.0.0 - OPEN SOURCE`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# ⭐ **FEATURES:**
- 🗺️ Instantly hide or show your minimap & radar
- 🌍 Multilanguage support (English, Spanish, Portuguese)
- 🧩 No dependencies (works with any server)
- 🛡️ ACE permissions for admin control
- ✅ Clean, safe code with server-side checks

---

# 📦 **REQUIREMENTS:**
- Build: FiveM server (any build)
- Framework: Standalone

---

# 📥 **INSTALLATION:**
1. Download and unzip the resource to your server's resources/ folder.
```
resources/[smdz]/toggleradar
```
2. Add the resource to your `server.cfg`. After, start the server.
```
ensure toggleradar
```

---

# ⚙️ **CONFIGURATION:**
All in `config.lua`:

```lua
Config = {}

Config.CommandName = "toggleradar"

Config.DefaultLanguage = "en"
Config.Languages = {
    en = {
        enabled = "^2Radar enabled.",
        disabled = "^1Radar disabled.",
        noperm = "^1You do not have permission to use this command."
    },
    es = {
        enabled = "^2Has activado el minimapa.",
        disabled = "^1Has desactivado el minimapa.",
        noperm = "^1No tienes permiso para usar este comando."
    },
    pt = {
        enabled = "^2Radar ativados.",
        disabled = "^1Radar desativados.",
        noperm = "^1Você não tem permissão para usar este comando."
    }
}
Config.ChatTag = "[SYSTEM]"
Config.RequireACE = false
Config.ACEPermission = "minimap.toggle"
```

---

# 🌍 **LOCALIZATION:**
<span class="badge badge--new">NEW UPDATE</span>

1. English (en)
2. Spanish (es)
3. Portuguese (pt)
4. French (fr)
5. German (de)
6. Italian (it)
7. Russian (ru)
8. Arabic (ar)

**You can add as many as you want; right below we've included more languages ​​for you to copy and paste.**
```lua
Config.Languages = {
    fr = {
        enabled = "^2Radar activé.",
        disabled = "^1Radar désactivé.",
        noperm = "^1Vous n'avez pas la permission d'utiliser cette commande."
    },
    de = {
        enabled = "^2Radar aktiviert.",
        disabled = "^1Radar deaktiviert.",
        noperm = "^1Du hast keine Berechtigung, diesen Befehl zu benutzen."
    },
    it = {
        enabled = "^2Radar attivato.",
        disabled = "^1Radar disattivato.",
        noperm = "^1Non hai il permesso per usare questo comando."
    },
    ru = {
        enabled = "^2Радар включён.",
        disabled = "^1Радар выключен.",
        noperm = "^1У вас нет прав для использования этой команды."
    },
    ar = {
        enabled = "^2تم تفعيل الرادار.",
        disabled = "^1تم تعطيل الرادار.",
        noperm = "^1ليس لديك إذن لاستخدام هذا الأمر."
    }
}

```

---

# 🎮 **USAGE:**

- Type /togglerminimap in chat to toggle the minimap and radar on or off.
*Messages will appear in your selected language.*

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**
### Client
- `minimap:client:permissionResult`

### Server
- `minimap:server:checkPerm`

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Script does not run | Check the ACE permissions. |

---

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for **Q2 and Q3 of 2026**.
- 🛠️ During this period, the script will only receive:
  - **Bug fixes / emergency patches** if necessary
  - **Small content additions or minor improvements** from time to time
- ⚠️ Major feature expansions or full system reworks are **not planned** during this timeframe.
