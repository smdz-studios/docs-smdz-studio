<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/BI5O0sikvGY"
    title="smdz_hud2d_builder showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>
<p style="text-align: center; font-weight: bold; color: green;">
  THIS RESOURCE HELPS IN THE DEVELOPMENT OF OTHERS, IT DOES NOT CREATE INTERACTIONS BETWEEN PLAYERS
</p>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_hud2d_builder/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_hud2d_builder) | [![](https://badges.5metrics.dev/smdz_hud2d_builder/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_hud2d_builder)

</div>

---

# 🧩 **OVERVIEW:**
- 📌 **Name:** `smdz_hud2d_builder`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**

`smdz_hud2d_builder` is a lightweight in-game editor for building **2D text HUD elements** in FiveM using GTA’s DrawText natives. You can create multiple elements, position them with precision tools (grid + snap), style them (font/color/scale), and export your layout as a simple Lua snippet for reuse in other resources.

---

# ⭐ **FEATURES:**

- 🎯 **Live HUD editing:** Move elements while seeing changes immediately.
- 🧱 **Multiple elements:** Maintain a list of text elements and switch active element quickly.
- 🎨 **Styling tools:**
  - Font cycling (configured font styles)
  - Color cycling from a palette (`shared/colors_config.lua`)
  - Center alignment toggle (centered vs not centered)
  - Border (outline) size adjust (Ctrl + PageUp / Ctrl + PageDown)
- 📏 **Precision placement:**
  - Grid overlay with cycling sizes
  - Snap-to-grid toggle
  - Quick alignment (Ctrl + Arrow keys jumps to edges)
- 🧠 **AutoScale (optional):** Automatically reduces scale for long strings to stay within a max width.
- 🕒 **Autosave:** Periodically exports and saves a snippet (configurable).
- 🧾 **Snippet export:** Generates a **simple** and **portable** `.lua` snippet.
- 🧰 **Undo/Redo:** Snapshot-based history to revert changes quickly.
- 🔒 **Lock element:** Prevent accidental edits of a specific element.
- 🔔 **Notifications:** ESX/QBCore/ox_lib/okok/mythic/ps-ui supported via config (fallback chat if not found).
- 🔌 **Developer exports:** Open/close editor or read elements from other resources (client-side exports).

---

# 📦 **REQUIREMENTS:**
- ✅ **FiveM server:** any recent artifact (latest recommended build preferred).
- ✅ **Framework:** none required.
- ✅ **Optional:** notification library/framework if you want nicer feedback:
  - `es_extended` for provider `esx`
  - QBCore for provider `qbcore`
  - `ox_lib`, `okokNotify`, `mythic_notify`, `ps-ui`

**Mandatory server requirement:**
- The server must be able to write to:
  - `resources/.../smdz_hud2d_builder/snippets/`

---

# 📥 **INSTALLATION:**
1. Place folder into your server resources directory:

```text
resources/[smdz]/smdz_hud2d_builder
```

2. Create snippets folder if missing:

```text
resources/[smdz]/smdz_hud2d_builder/snippets/
```

3. Add to `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_hud2d_builder
```

4. Restart:

```bash
refresh
restart smdz_hud2d_builder
```

5. Verify startup banner appears on server console (confirms config loaded).

---

# ⚙️ **CONFIGURATION:**
Main:
- `shared/config.lua`

Other important files:
- `shared/keys_config.lua` — control IDs used by the editor
- `shared/colors_config.lua` — color palette
- `shared/webhook_config.lua` — webhook sending behavior (optional)
- `locales/*.lua` — language keys used by UI and logs

## **CONFIG.LUA**
```lua
--[[
    SMDZ Studios - smdz_hud2d_builder
    Main configuration file.

    💡 Tip:
    Tweak these values to match your server style, frameworks and UX.
    All options are safe to edit and reload while testing.
]]
Config = {} -- Root configuration table for the resource.

-- ============================================================================
-- 🌐 LOCALE & BASIC SETTINGS
-- ============================================================================

-- Language used for all user-facing strings ("es" = Spanish, "en" = English).
Config.Locale = "en"

-- Prefix used when sending fallback chat messages as notifications.
Config.ChatPrefix = "[SMDZ HUD Builder]"

-- Folder (inside this resource) where generated snippet files will be stored.
-- Make sure this folder exists and is writable by the server.
Config.SnippetFolder = "snippets"

-- Prefix used for generated snippet filenames.
-- Example: "hud_snippet_2025-12-15_12-00-00.lua"
Config.SnippetPrefix = "hud_snippet_"

-- ============================================================================
-- 🎨 EDITOR BEHAVIOUR & MOVEMENT
-- ============================================================================

Config.Editor = {
    -- Base movement step per frame when moving elements with arrow keys.
    MoveStep = 0.0015,

    -- Multiplier applied to MoveStep when holding the fast modifier (SHIFT).
    FastMultiplier = 3.0,

    -- Minimum allowed text scale (prevents text from becoming unreadable).
    MinScale = 0.20,

    -- Maximum allowed text scale (prevents huge, overflowing text).
    MaxScale = 2.00,
}

-- ============================================================================
-- 🔤 FONT STYLES (GTA NATIVE FONTS)
-- ============================================================================

-- Logical font styles for the editor.
-- "name" is shown in the editor UI, "font" is the GTA font id (SetTextFont).
Config.FontStyles = {
    { name = "STANDARD",      font = 0 }, -- Default GTA font
    { name = "CURSIVE",       font = 1 }, -- Cursive-style font
    { name = "ROCKSTAR_TAG",  font = 2 }, -- Rockstar tag-style font
    { name = "LEADERBOARD",   font = 3 }, -- Leaderboard / menu font
    { name = "CONDENSED",     font = 4 }, -- Condensed font
    { name = "MONO_NUMBERS",  font = 5 }, -- Monospaced numbers
    { name = "CONDENSED_ALT", font = 6 }, -- Alternate condensed font
    { name = "PRICEDOWN",     font = 7 }, -- Pricedown (bold, GTA logo style)
    { name = "TAXI_STYLE",    font = 8 }, -- Taxi / label style font
}

-- ============================================================================
-- 🧮 AUTO-SCALE (LONG TEXT HANDLING)
-- ============================================================================

Config.AutoScale = {
    -- If true, the editor will try to shrink the text scale when it exceeds MaxWidth.
    Enabled = true,

    -- Maximum relative screen width (0.0 - 1.0) that a text block can occupy
    -- before auto-scaling kicks in.
    MaxWidth = 0.35,
}

-- ============================================================================
-- 📐 GRID OVERLAY & ALIGNMENT
-- ============================================================================

Config.Grid = {
    -- If true, the grid overlay is visible by default when opening the editor.
    EnabledByDefault = false,

    -- If true, snapping to grid is enabled by default.
    SnapEnabledByDefault = false,

    -- Default spacing for the grid when Sizes list is not used.
    Spacing = 0.05,

    -- Thickness of the grid lines (DrawRect height).
    Thickness = 0.0010,

    -- Color of the grid lines in RGBA (0–255).
    Color = { 255, 255, 255, 40 },

    -- Grid sizes that can be cycled with a hotkey (e.g. G key).
    -- The last cycle can disable the grid depending on implementation.
    Sizes = { 0.02, 0.05, 0.10 },
}

-- ============================================================================
-- 💾 AUTO-SAVE (SERVER-SIDE SNIPPETS)
-- ============================================================================

Config.AutoSave = {
    -- If true, the editor will periodically auto-save a snippet while it is open.
    Enabled = true,

    -- Time in seconds between auto-saves.
    Interval = 30,
}

-- ============================================================================
-- ↩️ UNDO / REDO HISTORY (CLIENT-SIDE)
-- ============================================================================

Config.Undo = {
    -- Enable or disable the undo/redo system.
    Enabled = true,

    -- Maximum number of snapshots to keep in memory.
    MaxSteps = 25,
}

-- ============================================================================
-- 🔐 PERMISSIONS (OPTIONAL ACCESS CONTROL)
-- ============================================================================

Config.Permissions = {
    -- If true, the script will check permissions before allowing editor usage.
    Enabled = false,

    -- ACE permission checked via IsPlayerAceAllowed.
    -- Example in server.cfg: add_ace group.admin "smdz_hud2d_builder.use" allow
    Ace = "smdz_hud2d_builder.use",

    -- Optional identifier whitelist by license (e.g., "license:xxxx").
    AllowedLicenses = {},

    -- Optional identifier whitelist by Discord ID (e.g., "discord:1234567890").
    AllowedDiscordIds = {},
}

-- ============================================================================
-- 💬 CHAT HIDING WHILE EDITING
-- ============================================================================

Config.HideChat = {
    -- If true, the script hides chat when opening the editor and shows it again on close.
    Enabled = true,

    -- Event name to toggle chat with a boolean payload (true = show, false = hide).
    -- Common value: "chat:toggle".
    UseEvent = "chat:toggle",

    -- Optional export in the form "resource:function" used to toggle chat visibility.
    -- Example: "custom_chat:Toggle"
    UseExport = "",

    -- If true, also attempts to trigger the native "chat:toggle" event as a fallback.
    UseNative = true,
}

-- ============================================================================
-- 🔔 NOTIFICATION PROVIDER
-- ============================================================================

Config.Notifications = {
    -- Provider used by SMDZ_HUD.Notify()
    -- Available providers (SUPPORTED):
    --   "esx"             – ESX.ShowNotification
    --   "qbcore"          – QBCore.Functions.Notify
    --   "qbx"             – QBX.Notification
    --   "ox_lib"          – lib.notify
    --   "okokNotify"      – okokNotify:Alert -             (NOT TESTED, SHOULD WORK)
    --   "mythic"          – mythic_notify:SendAlert -             (NOT TESTED, SHOULD WORK)
    --   "psui"            – ps-ui/notify -             (NOT TESTED, SHOULD WORK, SHOULD WORK)
    --   "chat"            – fallback chat notification
    Provider = "esx",

    -- Default notification type for providers that support it.
    -- Example: "success", "info", "error", "warning".
    DefaultType = "success",

    -- Default time (in milliseconds) for notification display.
    DefaultDuration = 4000,
}
```

## **KEYS_CONFIG.LUA**
```lua
--[[
    SMDZ Studios - smdz_hud2d_builder
    Keybind configuration file.

    📌 All key values are FiveM **control IDs** (PC).
    These do NOT adapt to user remapping — perfect for consistent editor behaviour.

    Edit this file server-side if you want to globally change editor controls.
]]

return {

    -- =========================================================================
    -- 🔑 MODIFIER KEYS
    -- =========================================================================
    SHIFT = 21,        -- Hold to increase movement speed (MoveStep * FastMultiplier)
    CTRL  = 36,        -- Hold for alignment / border adjustments

    -- =========================================================================
    -- 🧭 MOVEMENT (ARROW KEYS)
    -- =========================================================================
    UP    = 172,       -- Move element ↑
    DOWN  = 173,       -- Move element ↓
    LEFT  = 174,       -- Move element ←
    RIGHT = 175,       -- Move element →

    -- =========================================================================
    -- ↩️ UNDO / REDO
    -- =========================================================================
    F1 = 288,          -- Undo (previous snapshot)
    F2 = 289,          -- Redo (next snapshot)

    -- =========================================================================
    -- 🔍 SCALE ADJUSTMENTS
    -- =========================================================================
    PAGEUP   = 10,     -- Increase scale
    PAGEDOWN = 11,     -- Decrease scale

    -- =========================================================================
    -- 🔤 FONT CYCLING
    -- =========================================================================
    Q = 44,            -- Previous font style
    E = 38,            -- Next font style

    -- =========================================================================
    -- 🎯 ALIGNMENT & DISPLAY TOGGLES
    -- =========================================================================
    X = 73,            -- Toggle centered alignment
    -- Background toggle intentionally removed since v1.0.0

    -- =========================================================================
    -- 📐 GRID CONTROLS
    -- =========================================================================
    G          = 47,   -- Cycle grid sizes (last cycle disables grid)
    GRID_CYCLE = 169,  -- F8 cycles grid sizes *without* disabling

    -- =========================================================================
    -- 🔒 SNAP & LOCK
    -- =========================================================================
    K = 311,           -- Toggle snap-to-grid
    L = 182,           -- Lock/unlock active element

    -- =========================================================================
    -- 🧩 ELEMENT MANAGEMENT
    -- =========================================================================
    CYCLE_ELEMENT = 246, -- Y — cycle through elements
    N             = 249, -- New element
    F5            = 166, -- Duplicate active element
    DEL           = 178, -- Delete active element

    -- =========================================================================
    -- 💾 SAVE / EXIT
    -- =========================================================================
    ENTER = 191,       -- Manual snippet save
    ESC   = 322,       -- Exit editor

    -- =========================================================================
    -- 🎨 COLOR CYCLING
    -- =========================================================================
    F6 = 167,          -- Previous color
    F7 = 168,          -- Next color

    -- =========================================================================
    -- 🛠️ UI / EDITING HELPERS
    -- =========================================================================
    TOGGLE_UI    = 170, -- F3 — toggle UI panels (help / header / inspector)
    EDIT_TEXT    = 245, -- T  — open text input (onscreen keyboard)
    TOGGLE_TEXTS = 56,  -- F9 — hide/show all HUD texts (for clean previews)
}

```

---

# 🎮 **USAGE:**
## Commands
| Command | Description | Notes |
|---|---|---|
| `/hudbuilder` | Toggle editor on/off. | Permission-checked if enabled. |
| `/dttext <text>` | Sets active element text. | Locked elements cannot be edited. |

## Default keys (from `shared/keys_config.lua`)
| Action | Key |
|---|---|
| Move element | Arrow keys |
| Fast move | Hold Shift |
| Align to edges | Ctrl + Arrow keys |
| Toggle snap | K |
| Toggle/cycle grid | G |
| Cycle grid size (no OFF) | F8 |
| Next element | Y |
| New element | N |
| Duplicate element | F5 |
| Delete element | DEL |
| Lock/unlock | L |
| Undo / Redo | F1 / F2 |
| Scale + / - | PageUp / PageDown |
| Border size + / - | Ctrl + PageUp / Ctrl + PageDown |
| Font - / + | Q / E |
| Color - / + | F7 / F6 |
| Edit text | T |
| Toggle texts visibility | F9 |
| Toggle UI | F3 |
| Save snippet | ENTER |
| Exit editor | ESC |

---

# 🖥️ **UI OVERVIEW:**
When editor is enabled:
- 🧾 **Top center:** compact header line + position line (reduced size).
- 🧭 **Left side:** element list, active highlighted.
- 🔎 **Top right:** compact inspector (no full text displayed).
- 🧰 **Bottom center:** 5 help lines, uniform style (font/size/opacity).
- 🧱 **Grid overlay:** optional; helps alignment and snapping.

---

# 🧠 **TECHNICAL DETAILS:**
## Rendering model
- Elements are rendered on the client using DrawText natives:
  - `SetTextFont`, `SetTextScale`, `SetTextColour`, `SetTextOutline`, `BeginTextCommandDisplayText`, etc.
- Rendering runs on a per-frame loop while the editor is active.
- Elements are stored client-side in a Lua table (`hudElements`) and exported to a Lua snippet.

## Element schema (client)
```lua
{
  text = "Text",
  x = 0.500000,
  y = 0.500000,
  scale = 0.50,
  fontStyle = 1,
  centred = true,
  colorIndex = 1,
  locked = false,
  borderSize = 1,
  borderColor = {0,0,0,255},
}
```

## Snippet generation design
- Export format is intentionally simple and readable:
  - One `hudElements` array
  - One render thread that loops elements and draws each one
- Ideal for copy/paste reuse into other resources or as a starting point for a custom HUD system.

## Server save pipeline (high level)
- Client triggers `smdz_hud2d_builder:saveSnippet(snippet, isAuto)`
- Server attempts `SaveResourceFile` with retries and file existence verification
- Autosave console output is quiet unless debug is enabled

---

# 🧪 **INTEGRATION EXAMPLES:**
## Open editor from another resource (client)
```lua
exports['smdz_hud2d_builder']:openEditor()
```

## Get current elements snapshot (client)
```lua
local elements = exports['smdz_hud2d_builder']:getElements()
for i, e in ipairs(elements) do
  print(("[HUD] #%d '%s' @ %.3f, %.3f"):format(i, e.text, e.x, e.y))
end
```

## Permission-gated open (client)
```lua
exports['smdz_hud2d_builder']:requestPermission(function(allowed, reason)
  if not allowed then
    print("Denied:", reason)
    return
  end
  exports['smdz_hud2d_builder']:openEditor()
end)
```

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**
## Server events
| Event name | Parameters | Description |
|---|---|---|
| `smdz_hud2d_builder:checkPermission` | none | Permission check and client response. |
| `smdz_hud2d_builder:saveSnippet` | `snippet` (string), `isAuto` (bool) | Saves snippet into `/snippets`. |

## Client events
| Event name | Parameters | Description |
|---|---|---|
| `smdz_hud2d_builder:permissionResult` | `allowed` (bool), `reason` (string) | Result from server permission check. |

## Client exports
| Export name                | Parameters                    | Returns  | Description                         |
|---------------------------|-------------------------------|----------|-------------------------------------|
| `getElements()`           | none                          | `table`  | Deep copy of current HUD elements.  |
| `openEditor()`            | none                          | `nil`    | Opens editor for local player.      |
| `closeEditor()`           | none                          | `nil`    | Closes editor for local player.     |
| `toggleEditor()`          | none                          | `nil`    | Toggles open/close.                 |
| `requestPermission(cb, timeoutMs?)` | callback, optional timeout | `nil`    | Permission check via callback.      |

---

# 🧪 **COMMON ISSUES:**

| Issue | Possible Cause | Recommended Solution |
| --- | --- | --- |
| Editor does not open / command does nothing | Resource not started, player failed permission check, or another script cancels chat commands/blocks controls. | Ensure `ensure smdz_hud2d_builder` is in `server.cfg`, start the resource manually with `start smdz_hud2d_builder`, temporarily disable permissions with `Config.Permissions.Enabled = false`, and check F8 client console errors. |
| Snippets are not saving | Missing `snippets/` folder or server user has no write permissions to the resource folder. | Create `resources/[...]/smdz_hud2d_builder/snippets/` and ensure write permissions. On Windows, avoid protected paths; on Linux, use the correct `chown`/`chmod`. |
| Autosave works but no console logs appear | Autosave logs are intentionally quiet to avoid spam. | Turn on `WebhookConfig.Debug = true` only when diagnostics are needed. |
| Ctrl + PageUp/PageDown does not change border size | Control remapped by client, another resource consumes the input, or a different modifier key is being held. | Verify `CTRL` and `PAGEUP/PAGEDOWN` IDs in `shared/keys_config.lua`, disable other UI scripts temporarily, and test in an empty server profile. |
| Y does not switch elements | `Y` is defined by the configured control ID, and client-side GTA/FiveM remaps may change behavior. | Confirm `CYCLE_ELEMENT` matches your preferred control ID and ask the user to reset GTA/FiveM keybinds if needed. |
| F9 does not hide/show texts | Client remapped F9 or another resource intercepts the same control. | Confirm `TOGGLE_TEXTS` in `shared/keys_config.lua`, test without input-heavy scripts, and ensure the editor is active when pressing F9. |
| Chat does not hide when opening editor | Custom chat resource uses a different toggle event/export, or `chat:toggle` is not implemented. | Update `Config.HideChat.UseEvent` or `Config.HideChat.UseExport`; if your chat resource exposes an export, set `UseExport = "resourceName:functionName"`. |
| Webhook invalid warning appears | Warning prints once per category by design to avoid spam. | Configure a valid webhook URL in `shared/webhook_config.lua` or disable webhooks with `WebhookConfig.Enabled = false`. |
| Resource starts but UI is invisible | UI toggled off, texts toggled off, or another resource manipulates DrawText state/screen effects. | Press F3 to re-enable UI, press F9 to re-enable texts, and test with minimal other resources. |

---
# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
| --- | --- |
| Can I use this without ESX/QBCore? | Yes. The builder is standalone. Notifications can fallback to chat if no provider is available. |
| Can I restrict usage to admins only? | Yes. Enable permissions in `shared/config.lua` and use either ACE permissions or allowed identifiers:<br>- `Config.Permissions.Enabled = true`<br>- Configure `Ace` and/or whitelists. |
| Do generated snippets work on any server? | Yes. They are plain Lua snippets that draw text elements every frame and can be placed into any resource. |
| Does this script store per-player HUD layouts? | By default, it saves snippets into the resource folder. It does not implement user profiles or per-player layouts out of the box. |
| Can I import a snippet back into the editor? | Not in v1.0.0. An importer can be implemented in a future update. (v2.0.0) |
| Why do keys behave differently for some players? | FiveM uses control IDs which can be remapped at the client level (GTA/FiveM settings). The resource cannot prevent client remaps. |
| Can I change the default controls? | Yes, server-side: edit `shared/keys_config.lua` and restart the resource. |
| Is there a server-side export to read elements from all players? | Not in v1.0.0. Elements are client-side while editing. For global persistence you’d implement server storage and sync. |
| Does it support resolution scaling / safezone? | Elements are stored as normalized screen coordinates (0.0–1.0). Actual look varies by aspect ratio and safe zone. Use grid/snap for consistent placement. |
| Will this impact performance? | Rendering a small set of text elements per frame is lightweight. If you render very large numbers of elements, you should test and consider optimizing your final HUD implementation. |
| Can I integrate this with a staff menu? | Yes. Use client exports `openEditor()` / `closeEditor()` and `requestPermission()` to gate access. |

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for **Q2 and Q3 of 2026**.
- 🛠️ During this period, the script will only receive:
  - **Bug fixes / emergency patches** if necessary
  - **Small content additions or minor improvements** from time to time
- ⚠️ Major feature expansions or full system reworks are **not planned** during this timeframe.

- 🧾 **UPDATE STEPS:**
  *Backup config → replace folder → restore config → restart server.*

---

# ⚠️ **IMPORTANT WARNING:**
### 🚫 DO NOT CHANGE THE RESOURCE FOLDER NAME

- ⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. (Check: https://smdz-studios.tebex.io/legal)
- 🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
