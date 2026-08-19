<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_example showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_example` <!-- change to your resource name -->
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Standalone <!-- choose one -->
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
_Example_: “Lightweight example script demonstrating how SMDZ Studios documents FiveM resources.”

Replace this with a **1–2 sentence** description of what the script does.

---


# ⭐ **FEATURES:**

- 1
- 2
- 3
etc

---

# 📦 **REQUIREMENTS:**

Fill this with the real dependencies of your script.

- **FiveM server:** latest recommended build.
- **Framework:** ESX / QBCore / Standalone (pick the one you use).
- **Dependencies (framework / database / extras):**
  - `es_extended` / `qb-core` / none
  - `oxmysql` or `mysql-async`
  - Other scripts (e.g. target system, inventory, UI, etc.)

---

# 📥 **INSTALLATION:**

Describe the exact installation steps.

1. Download the resource: `smdz_example.zip` <!-- change name if needed -->
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_example
```

3. Add the resource to your `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_example
```

4. Restart your server or start the resource manually:

```bash
start smdz_example
```

5. Check the server console for errors.

---

# ⚙️ **CONFIGURATION:**

Explain your main configuration file(s), usually `config.lua`, `config.json` or similar.

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

---

# 🎮 **USAGE:**

Describe how staff and players use the script.

### Commands

Fill this table with real commands:

| Command             | Description                                  | Permission / Notes              |
|---------------------|----------------------------------------------|---------------------------------|
| `/example`          | Opens the main example menu.                 | Everyone                        |
| `/exampleadmin`     | Admin‑only test command.                     | Requires admin/ACE              |

### Keybinds

- Default key: `F5` – opens main menu. <!-- change if needed -->
- How to change: for example, in `config.lua` under `Config.Keybind`.

### UI / Menus

Explain any menus, markers, or UI elements players will see.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

Use this section for server owners and developers who integrate your script with others.

### Server Events

```lua
-- Example: triggered when a player uses the example feature
AddEventHandler('smdz_example:usedFeature', function(playerId, data)
    print(('[smdz_example] Player %s used %s'):format(playerId, data.feature))
end)
```

Document all of your server events in a table:

| Event name                 | Parameters                       | Description                                  |
|----------------------------|----------------------------------|----------------------------------------------|
| `smdz_example:usedFeature` | `playerId`, `data`              | Fired when player uses the example feature   |

### Client Events

```lua
RegisterNetEvent('smdz_example:notify', function(message)
    -- Show a notification using your framework or custom UI
end)
```

List client events the same way:

| Event name            | Parameters          | Description                      |
|-----------------------|---------------------|----------------------------------|
| `smdz_example:notify` | `message` (string)  | Shows a notification to player  |

### Exports

```lua
-- client.lua
local isActive = exports['smdz_example']:IsFeatureActive(playerId)

-- server.lua
exports['smdz_example']:GiveReward(playerId, amount)
```

Describe each export:

| Export name       | Side    | Parameters                | Returns         | Description                         |
|-------------------|---------|---------------------------|-----------------|-------------------------------------|
| `IsFeatureActive` | Client  | `playerId` (number)       | `bool`          | Checks if feature is active.        |
| `GiveReward`      | Server  | `playerId`, `amount`      | `nil`           | Gives a custom reward to a player.  |

When you have your real events/exports ready, paste them in a future chat and I will generate these tables for you.

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource does not start | Check console for red errors.<br>Make sure the folder name matches exactly (for example `smdz_example`).<br>Confirm `ensure smdz_example` is in `server.cfg`. |
| Database errors | Check connection credentials.<br>Verify that migration/SQL file has been executed.<br>Confirm you selected the correct adapter (`oxmysql` / `mysql-async`). |
| Permissions not working | Verify ACE groups or framework perms.<br>Check that admin commands are not available to normal users. |
