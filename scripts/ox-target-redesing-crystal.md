<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/LMqX2KpahwM"
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
- 🧾 **Version:** `1.1.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

---

# ⭐ **FEATURES:**
- 🎨 Modern NUI (React + TS + Vite + Tailwind + Zustand + Framer Motion)
- 🍎 Premium iOS‑style look with smooth animations
- 🧰 In‑game Theme Editor (`/oxtheme`) with preview, search and filters
- 💾 Optional per‑player theme saving (database)
- 🎨 Optional Gaussian blur design for the background when in use.
- 🏷️ Donator + Discord Booster theme access control (Framework Groups + ACE)
- ↔️ Optional split layout (left/right) when more than 3 options
- 🔊 Optional subtle UI audio (open/close/select)

---

# 📦 **REQUIREMENTS:**
- `ox_lib` (latest - required by ox_Target itself)
- `oxmysql` only if you enable DB theme saving

---

# 🚀 **INSTALLATION:**
1. Delete your old ox_target folder and place the entire resource folder there for proper functioning; it's very simple.
2. Ensure `ox_lib` starts **before** this resource.
3. Start the resource.

---

# ⚙️ **CONFIGURATION (`CONFIG.LUA`):**
Core settings (example):
```lua
Config.NuiTheme = 'premium_white' -- default theme key
Config.Locale = 'en'              -- language (locales/*.lua)
Config.NuiScale = 0.8             -- UI scale
Config.SplitTargets = true        -- split target list into both sides if > 3

Config.ThemeEditor = true         -- enable in-game theme editor
Config.ThemeCommand = 'oxtheme'   -- command name
Config.ThemeSaveToDB = true       -- per-player DB saving

Config.TargetBlur = {
  Enabled = false,
  Amount = 15
}

Config.NuiAudio = {
  Enabled = true,
  Volume = 0.18,
  Open = { Enabled = true, Frequency = 640, Duration = 0.06, Type = 'sine' },
  Close = { Enabled = true, Frequency = 520, Duration = 0.06, Type = 'sine' },
  Select = { Enabled = true, Frequency = 820, Duration = 0.04, Type = 'square' }
}
```

Donator / Booster access control:
```lua
Config.ThemeDonator = {
  Enabled = true,
  Groups = { 'donator', 'admin' },
  AcePermissions = { 'group.donator', 'group.admin' },
  ShowLocked = true,
  ShowBadge = true
}

Config.ThemeDiscordBoosters = {
  Enabled = true,
  Groups = { 'booster', 'admin' },
  AcePermissions = { 'group.booster', 'group.admin' },
  ShowLocked = true,
  ShowBadge = true
}
```

Permission behavior:
- `Groups` and `AcePermissions` use **OR** logic.
- Access is granted if the player matches at least one framework group **or** one ACE permission.
- ACE does not override groups, and groups do not override ACE.

Implementation (cfg + config.lua):
1. Add ACE rules in `permissions.cfg` using `themedonator` and/or `themediscordboosters`.
2. Ensure `server.cfg` executes that file: `exec permissions.cfg`.
3. Assign the player to a principal with `add_principal` (`identifier.fivem`, `identifier.discord`, etc.).
4. In `config.lua`, set `Groups` and `AcePermissions` for the mode you want (Groups only, ACE only, or Mixed OR).
5. Restart the server after changing permissions/config.

Quick ACE recipes (only one type):
- `group.admin` can use only Donator themes:
```cfg
add_ace group.admin themedonator allow
add_principal identifier.fivem:11791281 group.admin
```
```lua
Config.ThemeDonator.Groups = {}
Config.ThemeDonator.AcePermissions = { 'themedonator', 'group.admin' }
Config.ThemeDiscordBoosters.Groups = {}
Config.ThemeDiscordBoosters.AcePermissions = {}
```
- `group.admin` can use only Booster themes:
```cfg
add_ace group.admin themediscordboosters allow
add_principal identifier.fivem:11791281 group.admin
```
```lua
Config.ThemeDonator.Groups = {}
Config.ThemeDonator.AcePermissions = {}
Config.ThemeDiscordBoosters.Groups = {}
Config.ThemeDiscordBoosters.AcePermissions = { 'themediscordboosters', 'group.admin' }
```
- Same idea for other groups (`group.vip`, `group.mod`, etc.):
```cfg
add_ace group.vip themedonator allow
add_principal identifier.fivem:11791281 group.vip
```
```lua
Config.ThemeDonator.Groups = {}
Config.ThemeDonator.AcePermissions = { 'group.vip', 'themedonator' }
```

Mode 1: Framework groups only
```lua
Config.ThemeDonator.Groups = { 'donator' }
Config.ThemeDonator.AcePermissions = {}

Config.ThemeDiscordBoosters.Groups = { 'booster' }
Config.ThemeDiscordBoosters.AcePermissions = {}
```

Mode 2: ACE only (for example `group.admin`)
```cfg
# permissions.cfg
add_ace group.admin themedonator allow
add_ace group.admin themediscordboosters allow

# server.cfg
exec permissions.cfg
add_principal identifier.fivem:11791281 group.admin
```

```lua
Config.ThemeDonator.Groups = {}
Config.ThemeDonator.AcePermissions = { 'group.admin', 'themedonator' }

Config.ThemeDiscordBoosters.Groups = {}
Config.ThemeDiscordBoosters.AcePermissions = { 'group.admin', 'themediscordboosters' }
```

Mode 3: Mixed (Groups OR ACE)
```cfg
# permissions.cfg
add_ace group.admin themedonator allow

# server.cfg
exec permissions.cfg
add_principal identifier.fivem:11791281 group.admin
```

```lua
Config.ThemeDonator.Groups = { 'donator' }
Config.ThemeDonator.AcePermissions = { 'group.admin', 'themedonator' }
```

Optional: direct ACE for one player (without groups)
```cfg
add_ace identifier.fivem:11791281 themedonator allow
```

```lua
Config.ThemeDonator.Groups = {}
Config.ThemeDonator.AcePermissions = { 'themedonator' }
```

Notes:
- You can use any ACE principal name (`group.admin`, `group.mod`, `group.vip`, etc.).
- `admin` and `group.admin` are both supported by the permission check.

Webhook logging:
```lua
Config.WebhookLogging = {
  Enabled = true,
  Url = 'YOUR_WEBHOOK',
  Username = 'SMDZ Ox Target',
  Avatar = '',
  Color = 16777215,
  CooldownMs = 1000,
  IncludePlayer = true,
  IncludeIdentifier = true,
  IncludeOption = true,
  IncludeAction = true,
  IncludeResource = true,
  IncludeZone = true,
  IncludeCoords = false
}
```

---

# 🎛️ **THEME EDITOR (IN‑GAME):**
Command:
```
/oxtheme
```

Features:
- 🔢 Theme list sorted by ID (default theme always first)
- 🔍 Search by name or ID
- 🏷️ Filters for **Donator** and **Discord Booster** themes
- 🔒 Locked themes show a badge (optional)
- 🔁 **Reset** returns to the configured default theme
- 💾 **Save** applies and closes the editor
- 🧲 Panel position saved locally (no SQL)

---

# 🔌 **EXPORTS:**
All original `ox_target` exports remain unchanged. This export is an added helper for the Theme Editor and is **client‑side**.

Open the Theme Editor from another resource (client):
```lua
exports.ox_target:OpenThemeEditor()
```

Example usage:
```lua
RegisterCommand('openoxtheme', function()
  exports.ox_target:OpenThemeEditor()
end)
```

Another example (key mapping):
```lua
RegisterKeyMapping('openoxtheme', 'Open Ox Theme Editor', 'keyboard', 'F7')
RegisterCommand('openoxtheme', function()
  exports.ox_target:OpenThemeEditor()
end)
```

Another example (item use / interaction):
```lua
RegisterNetEvent('my_resource:openTheme', function()
  exports.ox_target:OpenThemeEditor()
end)
```

---

# 🎨 **THEMES:**
Themes are defined in `Config.NuiThemes`.
Each theme supports:
- `label` (display name)
- `id` (short ID shown in UI)
- `defaultTheme` (true/false)
- `donatorgroups` (donator-only flag)
- `boosterGroups` (discord booster‑only)
- CSS variables (`--accent`, `--panel`, etc.)

Example:
```lua
premium_white = {
  defaultTheme = true,
  label = 'Premium White',
  id = '01',
  donatorgroups = false,
  boosterGroups = false,
  ['--accent'] = '#ffffff'
}
```

Access rules:
- 🎟️ Use `donatorgroups = true` for donator‑only themes
- 🚀 Use `boosterGroups` for Discord boosters
- ✅ Group names must match your framework groups (ESX/QB/QBX/VRP/ND)
- 🔐 Use `Config.ThemeDonator.AcePermissions` / `Config.ThemeDiscordBoosters.AcePermissions` for ACE checks from `cfg`
- ➕ Access logic is OR (`Groups` OR `AcePermissions`)

---

# 🗄️ **DATABASE (OPTIONAL):**
SQL file: `ox_target_themes.sql`
Table: `smdz_ox_target_themes_crystal`

If `Config.ThemeSaveToDB = false`, the DB is not used.

```sql
CREATE TABLE IF NOT EXISTS smdz_ox_target_themes_crystal (
  identifier VARCHAR(128) PRIMARY KEY,
  theme VARCHAR(64) NOT NULL,
  colors LONGTEXT NOT NULL
);
```

---

# 🌍 **LOCALES:**
Locales are Lua files in `locales/`.
Included languages:
- English (`en.lua`)
- Spanish (`es.lua`)
- French (`fr.lua`)
- German (`de.lua`)
- Italian (`it.lua`)
- Portuguese (`pt.lua`)
- Portuguese (BR) (`pt-br.lua`)

Set the language with `Config.Locale`.
You can add as many languages ​​as you need.

---

# 🔌 **COMPATIBILITY:**
This resource keeps **all original exports and logic** from `ox_target`.
Your existing scripts do **not** need to change.

---

# ❓ **FAQ:**
**Does it change exports?**
No. All exports are the same as original `ox_target`.

**Can I use it with ESX / QB / QBX / VRP / ND?**
Yes. It’s compatible just like the original.

**Can I add my own themes?**
Yes. Add a new block inside `Config.NuiThemes` and assign a new `id`.

**How do I change the default theme?**
Set `Config.NuiTheme` to your theme key, or mark a theme with `defaultTheme = true`.

**How do I disable the theme editor command?**
Set `Config.ThemeEditor = false` in `config.lua`.

**Why is a theme locked for me?**
Check `Config.ThemeDonator.Groups` / `Config.ThemeDiscordBoosters.Groups` and `AcePermissions` entries, then verify your framework group and ACE setup in `permissions.cfg` and `server.cfg`.

**Can I hide locked themes from the list?**
Yes. Set `ShowLocked = false` in the Donator/Booster config blocks.

**Do I need oxmysql?**
Only if `Config.ThemeSaveToDB = true`.

**How do I change the language?**
Set `Config.Locale` to one of the available locales in `locales/`.

---

# 🔄 **UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*
