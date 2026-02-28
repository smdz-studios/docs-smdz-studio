<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/UOqLiRLXrd0"
    title="SMDZ Fast Repair Showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS FREE THROUGH TEBEX, OPEN SOURCE VERSION
</p>


# 🧩 **OVERVIEW:**
- 📌 **Name:** `smdz_toggleradar`
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.0.0 - OPEN SOURCE`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# 📦 **REQUIREMENTS:**
- Build: FiveM server (any build)
- Framework: Standalone

---

# ✨ **FEATURES:**
- 🗺️ Instantly hide or show your minimap & radar
- 🌍 Multilanguage support (English, Spanish, Portuguese)
- 🧩 No dependencies (works with any server)
- 🛡️ ACE permissions for admin control
- ✅ Clean, safe code with server-side checks

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

# ⚙️ **CONFIGURATION FILE:**
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

# 🎮 **USAGE:**

- Type /togglerminimap in chat to toggle the minimap and radar on or off.
*Messages will appear in your selected language.*


# 🌐 **LANGUAGES:**
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

# 🔌 **EVENTS:**
### Client
- `minimap:client:permissionResult`

### Server
- `minimap:server:checkPerm`

---

# 🛠️ **TROUBLESHOOTING:**
1. Script does not run: Check the ACE permissions.

---

# 🔄 **UPDATES:**
- There are **NO** plans to add script updates during 2025 and early 2026. **Anyway, this resource is open source, edit it however you like :)**