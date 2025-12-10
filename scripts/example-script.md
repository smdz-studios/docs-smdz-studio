# Example Script – Template

> Use this file as a template when documenting a new SMDZ Studios script.  
> Duplicate this file, rename it (for example: `smdz_cars.md`), and replace the placeholder content.

---

## 🧩 Overview

- **Name:** `smdz_example`
- **Author:** SMDZ Studios
- **Type:** [Framework: ESX / QBCore / Standalone] – choose one
- **Version:** `1.0.0`
- **Status:** `Stable`  

Badges (optional):

- <span class="badge badge--stable">Stable</span>
- <span class="badge badge--beta">Beta</span>
- <span class="badge badge--legacy">Legacy</span>

**Short description:**  
A short, clear description of what this script does and why it exists.  
Example: “Lightweight example script demonstrating how SMDZ Studios documents FiveM resources.”

---

## 📦 Requirements

List all dependencies clearly:

- **FiveM server:** latest recommended build.
- **Framework:** ESX / QBCore / Standalone (choose and describe).
- **Optional dependencies:**
  - `mysql-async` or `oxmysql`
  - `es_extended` (for ESX)
  - Any required assets (models, sounds, UI, etc.)

If the script is **standalone**, specify that no framework is required.

---

## 📥 Installation

1. Download the resource:
   - From Tebex / GitHub / direct link.  
     Example: `smdz_example.zip`
2. Extract the folder into your FiveM `resources` directory:
   - Example path: `resources/[smdz]/smdz_example`
3. Add the resource to your `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_example
```

4. Restart your server or start the resource from the console:

```bash
start smdz_example
```

5. Check your server console for errors or warnings.

> Tip: Always keep a backup of your configuration files before updating.

---

## ⚙️ Configuration

Describe the main configuration file(s), usually `config.lua` or `config.json`.

Example `config.lua`:

```lua
Config = {}

-- General settings
Config.Locale = 'en'
Config.Debug = false

-- Example option
Config.ExampleValue = 100

-- Discord webhook (if used)
Config.DiscordWebhook = ''
```

Explain each important option:

- `Config.Locale` – language key, e.g. `en`, `es`, `fr`.
- `Config.Debug` – when `true`, prints extra information to the console.
- `Config.ExampleValue` – short explanation of what this value does.

---

## 🎮 Usage

Explain how the script is used in‑game:

- **Commands:** what players or admins can type.
- **Keybinds:** default key mappings.
- **Menus / UI:** how to open and navigate any menus.

### Commands

Example:

| Command            | Description                                  | Permission / Notes              |
|--------------------|----------------------------------------------|---------------------------------|
| `/example`         | Opens the main example menu.                 | Everyone                        |
| `/exampleadmin`    | Admin‑only command for testing features.     | Requires specific ACE / group   |

### Keybinds

If the script uses keybinds, mention how to change them:

- Default key: `F5` – opens the main menu.
- Configurable in: `config.lua` under `Config.Keybind`.

---

## 🔌 Events & Exports (Developers)

This section is for **server owners and developers** who want to integrate your script with other resources.

### Server Events

Example:

```lua
-- Triggered when a player uses the example feature
AddEventHandler('smdz_example:usedFeature', function(playerId, data)
    print(('[smdz_example] Player %s used %s'):format(playerId, data.feature))
end)
```

Document all relevant events:

| Event name                         | Side    | Description                                  |
|------------------------------------|---------|----------------------------------------------|
| `smdz_example:usedFeature`         | Server  | Fired when a player uses the example feature |

### Client Events

Example:

```lua
RegisterNetEvent('smdz_example:notify', function(message)
    ESX.ShowNotification(message)
end)
```

### Exports

Example:

```lua
-- client.lua
local isActive = exports['smdz_example']:IsFeatureActive(playerId)

-- server.lua
exports['smdz_example']:GiveReward(playerId, amount)
```

Document each export:

| Export name       | Side    | Parameters                | Returns         | Description                         |
|-------------------|---------|---------------------------|-----------------|-------------------------------------|
| `IsFeatureActive` | Client  | `playerId` (number)       | `bool`          | Checks if feature is active.        |
| `GiveReward`      | Server  | `playerId`, `amount`      | `nil`           | Gives a custom reward to a player.  |

---

## 🧪 Debugging & Common Issues

List common problems and solutions.

**Example issues:**

1. **Resource does not start**
   - Check console for errors.
   - Make sure you did not rename the folder incorrectly.
   - Confirm `ensure smdz_example` is present in `server.cfg`.

2. **Database errors**
   - Confirm your database credentials.
   - Make sure required tables are created (include SQL if needed).
   - Check if you use `oxmysql` vs `mysql-async` and configure accordingly.

3. **Permissions not working**
   - Verify ACE permissions or framework group checks.
   - Confirm that admin commands are restricted correctly.

---

## 🔄 Updates & Changelog

Describe how to update safely:

1. Backup your existing `config.lua` and any customized files.
2. Stop the resource.
3. Replace the old script folder with the new version.
4. Restore or merge your configuration changes.
5. Start the resource and test.

Example changelog format:

```text
v1.0.1
- Fixed permission issue with /exampleadmin
- Improved debug logging
- Minor performance optimizations
```

---

## 📌 Notes & Recommendations

- Test new versions on a **test server** before updating your main server.
- Keep a **change log** of your own modifications.
- Consider using a **version control system** (like Git) for your custom edits.

---

## 📬 Support

When requesting support for this script, provide:

- Script name and version (`smdz_example v1.0.0`).
- Framework and version (ESX / QBCore / Standalone).
- Server artifacts version.
- Relevant console errors.
- Steps to reproduce the problem.

This helps resolve issues **faster** and more **accurately**.