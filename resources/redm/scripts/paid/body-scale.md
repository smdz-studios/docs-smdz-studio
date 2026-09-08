<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="SMDZ Body Scale showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_bodyscale`
- 💻 **Author:** SMDZ Studios
- 🤠 **Platform:** RedM
- 🧭 **Framework:** VORP / RSG-Core / Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**Short description:**
SMDZ Body Scale is a persistent character physique editor that lets players customize height and body width through an immersive in-game interface. It combines live visual editing, presets, a dynamic measurement ruler, secure persistence and framework-aware character handling.

---

# ⭐ **FEATURES:**

- 📏 **Custom Height & Width** — Fine-tune character height and body width in real time with smooth controls, configurable limits and immediate visual feedback.
- 🎥 **Interactive Character Camera** — Preview every change through a dedicated full-body camera with rotation, vertical movement and extended zoom for a clear view of the character.
- 📐 **Dynamic Measurement Ruler** — A responsive ruler follows the character during editing and updates instantly as height changes, with Metric and Imperial display support.
- 🎛️ **Physique Presets** — Offer ready-made body profiles for quick customization while still allowing players to fine-tune every value manually afterwards.
- 💾 **Persistent Character Profiles** — Height and width are saved per character and restored automatically whenever that character is loaded again.
- 🔐 **Server-Side Protection** — Raw save values are validated by the server with session checks, rate limits and anomaly detection to reject manipulated requests.
- 🧩 **VORP, RSG-Core & Standalone** — Automatic framework detection provides character-aware persistence and access control across the supported environments.
- 🖱️ **Movable & Remembered UI** — Players can reposition the editor anywhere on screen and the preferred location is remembered locally without adding SQL data.
- 📡 **Detailed Discord Logs** — Optional webhook embeds can record editor usage, saved physique changes and rejected anomalous requests with useful player and character details.

---

# 📦 **REQUIREMENTS:**

- **RedM server:** a current recommended artifact.
- **Database:** `oxmysql`.
- **Framework:** VORP, RSG-Core or Standalone.
- **Chat:** the standard `chat` resource or a compatible resource supporting `chat:addSuggestion` is recommended for command help.

### Recommended start order

```cfg
ensure oxmysql
ensure vorp_core
ensure smdz_bodyscale
```

For RSG-Core, start `rsg-core` before `smdz_bodyscale` instead.

The SQL tables are created automatically at resource startup. `database.sql` is included as a manual reference/fallback and normally does not need to be imported.

---

# 📥 **INSTALLATION:**

1. Extract the `smdz_bodyscale` folder into your server resources directory.

```text
resources/[smdz]/smdz_bodyscale
```

2. Make sure `oxmysql` and your framework core, when used, start before Body Scale.

3. Add the resource to `server.cfg`:

```cfg
ensure smdz_bodyscale
```

4. Restart the server or run:

```text
start smdz_bodyscale
```

5. Check the server console. Body Scale automatically creates/verifies its database tables and applies pending schema migrations.

---

# ⚙️ **CONFIGURATION:**

The customer-facing configuration is intentionally split into two files:

- `config.lua` — shared gameplay, access, scale, camera, presets and restriction settings.
- `server_config.lua` — server-only webhook and security settings.

Both files are fully commented in English and are the only configuration files intended for normal editing.

## General

```lua
Config.Framework = "auto"
Config.Locale = "en"
Config.Debug = false
```




---

# 🎮 **USAGE:**

### Command

| Command | Description | Permission / Notes |
| --- | --- | --- |
| `/bodyscale` | Opens the character height and width editor. | Everyone by default; optionally restricted through ACE, framework access or identifier allowlist. |

A translated chat suggestion is registered automatically.

### Inside the editor

Players can adjust height and width, use presets, switch Metric/Imperial measurements, reset with confirmation, move the panel, rotate/move/zoom the camera and save or cancel their changes.

The moved UI position is stored locally with resource KVP data and never written to SQL. The editor UI, camera and measurement ruler are only visible to the player currently editing; other players receive only the synchronized final body scale.

---

# 🔐 **SECURITY:**

The server treats client/NUI values as untrusted input. Save requests are rejected when values are missing, non-numeric, NaN, infinite, outside the configured limits, associated with an invalid/expired editor session or sent after the active character changes.

Opening and saving use independent rate limits. Invalid manipulated requests can optionally be recorded through the anomaly webhook event. Forced editor cleanup also releases camera, NUI focus and ruler state if the character dies, changes, unloads or the resource stops.

---

# 🔌 **EXPORTS (DEVELOPERS):**

Only the useful public exports are declared in `fxmanifest.lua`.

## Client

```lua
local scale = exports['smdz_bodyscale']:GetLocalBodyScale()
```

| Export | Returns | Description |
| --- | --- | --- |
| `GetLocalBodyScale` | `table { width, height }` | Returns the local player's currently synchronized body scale. |
| `RefreshLocalBodyScale` | `boolean` | Reapplies the local player's current synchronized scale to the active ped. |

Example refresh:

```lua
local applied = exports['smdz_bodyscale']:RefreshLocalBodyScale()
```

## Server

```lua
local scale = exports['smdz_bodyscale']:GetCachedBodyScale(source)
```

| Export | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `GetCachedBodyScale` | `playerId` | `table { width, height }` or `nil` | Returns the authoritative profile currently held in the server cache for that player. |

Internal network events are not part of the public integration API.

---


# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource does not start | Make sure `oxmysql` starts before `smdz_bodyscale`, confirm the folder name is exactly `smdz_bodyscale`, and check the first red error shown in the server console. |
| `/bodyscale` does nothing | Wait until the character is fully loaded. If restricted access is enabled, verify ACE, framework group/permission or identifier access. Also confirm the player is not currently in a blocked state. |
| The chat suggestion for `/bodyscale` does not appear | Make sure the standard `chat` resource is running. The suggestion is registered automatically when Body Scale starts and is registered again if `chat` is restarted. |
| Body Scale stays on an initializing message | Check that `oxmysql` and the selected framework core are fully started before Body Scale. If `Config.Framework = "auto"`, verify that the expected framework resource is actually running. |
| Database connection error | Check the `oxmysql` connection string, database credentials and database-server availability. Body Scale cannot load or save profiles until the connection is working. |
| Tables are not created automatically | Verify that the database user has permission to create and alter tables. You can import `database.sql` manually if your hosting provider blocks automatic schema creation. |
| Existing database schema causes an error after updating | Do not delete player data. Check the console for the migration error and confirm the database user can run `ALTER TABLE`. The included schema manager is designed to update existing installations. |
| Saved height or width does not persist | Confirm that the character identifier is available when the player loads and that the database write succeeds. Enable `Config.Debug` temporarily to inspect translated diagnostic messages. |
| Different characters share the same scale in Standalone mode | Standalone mode does not have a framework character ID, so persistence is tied to the available player identifier. Per-character profiles require a supported character framework such as VORP or RSG-Core. |
| Width does not affect a custom ped | Width adjustment uses multiplayer MetaPed body expressions. Custom ped models may not expose compatible body morphs and can therefore ignore width changes. |
| Width looks different after changing appearance or clothing | Some appearance resources rebuild or refresh the MetaPed. Reapply the saved Body Scale after the appearance resource finishes if that resource replaces body expressions. |
| Height appears correct but the ruler looks slightly offset | Character animations can move head and foot reference points. The ruler uses smoothed body tracking, so small movement is expected while the ped is idling. |
| Ruler is not displayed through DUI | The resource automatically uses its native ruler fallback when the complete DUI runtime-texture API is unavailable on the current RedM artifact. |
| The ruler briefly changes appearance when opening the editor | The native ruler can render immediately while the DUI path initializes. This is intentional fallback behavior designed to avoid a delayed or missing measurement display. |
| The ruler does not appear at all | Check `Config.Display.RulerEnabled`. If it is `false`, the ruler is intentionally disabled. Also confirm the editor camera has opened successfully. |
| Camera starts too close or too far away | Adjust `Config.Camera.DefaultDistance`. The allowed zoom range is controlled by `MinimumDistance` and `MaximumDistance`. |
| Camera cannot zoom farther out | Increase `Config.Camera.MaximumDistance` if your server wants a wider editor view. Keep the value reasonable to avoid making the character too small on screen. |
| Editor refuses to open while mounted, swimming, falling or similar | This is intentional. Review `Config.EditorRestrictions` if your server wants to allow specific states. Dead, mounted, vehicle, falling, swimming, ragdoll, climbing and jumping checks can be configured independently. |
| Editor closes automatically after death or character change | This is intentional safety behavior. The resource releases NUI focus, camera and ruler state to prevent the player from becoming stuck. Reopen `/bodyscale` once the character is ready again. |
| UI opens once but not after closing it | Make sure you are using the latest resource files and restart `smdz_bodyscale` after replacing an older build. The current UI resets its visibility state every time the editor is opened. |
| UI position is in the wrong place | Use the move button to reposition the panel. Its position is stored locally with KVP and is not written to SQL. |
| UI position needs to be fully reset | Clear the local KVP data for this resource or remove the stored Body Scale UI-position KVP, then reopen the editor to use the default position. |
| Metric/Imperial text does not update correctly | Confirm the selected locale file is complete and that the latest `web/dist` build is installed. Display-unit changes are handled locally by the editor. |
| A translated text appears missing | Confirm `Config.Locale` uses a supported locale code: `en`, `es`, `fr`, `de`, `it`, `pt` or `pl`. Do not add partial locale files with missing keys. |
| Discord logs are not sent | Add a valid webhook URL to `ServerConfig.Logs.Webhook`, keep `ServerConfig.Logs.Enabled = true`, and verify the specific event is enabled under `ServerConfig.Logs.Events`. |
| Discord logs work for some actions but not others | Check `PanelOpened`, `ChangesSaved`, `PanelCancelled` and `Anomaly` individually in `ServerConfig.Logs.Events`. Each log category can be enabled or disabled separately. |
| Access allowlist does not work | Use the complete identifier string exactly as returned by the server, including its prefix such as `license:`, `license2:`, `discord:` or `steam:`. |
| ACE access does not work | Confirm `Config.Command.Restricted = true`, verify the configured `AcePermission`, and make sure the player/group has that ACE permission in `server.cfg`. |
| Framework group access does not work | Confirm the group/permission name exactly matches the value returned by your framework and that it is present in `Config.Access.Groups`. |
| Player receives an open rate-limit message | `ServerConfig.Security.OpenCooldownMs` prevents repeated open-event spam. Increase it for stricter protection or lower it slightly if your workflow requires faster reopening. |
| Player receives a save rate-limit message | `ServerConfig.Security.SaveCooldownMs` protects save requests and webhook events from spam. Do not set it extremely low on public servers. |
| Save is rejected after leaving the editor open for a long time | The editor session expired. Increase `ServerConfig.Security.SessionTimeoutSeconds` if needed, or simply reopen `/bodyscale` before saving. |
| Manipulated or extreme values are rejected | This is expected. Height and width are validated server-side, including invalid numbers, `NaN`, infinity and values outside the configured limits. |
| Web source changes do not appear ingame | Edit the source under `web/src`, rebuild the interface with the included build script, then restart the resource so RedM loads the new `web/dist` files. |
| Resource works but debug output is too verbose | Set `Config.Debug = false` for production. Security rejections and normal operation continue to work without translated debug prints. |

---

# ❓ **FAQ:**

| Question | Answer |
| --- | --- |
| **Which frameworks are supported?** | VORP, RSG-Core and Standalone are supported. `Config.Framework = "auto"` can detect the supported framework automatically. |
| **Is `oxmysql` required?** | Yes. It is used for persistent body profiles, automatic table creation and schema migrations. |
| **Do I need to import `database.sql` manually?** | Normally no. The resource creates its tables automatically. `database.sql` is included as a manual fallback and reference for restrictive hosting environments. |
| **Are body values saved permanently?** | Yes. Accepted height and width values are stored in the database and reapplied when the character loads again. |
| **Are values saved per character?** | Yes when the active framework exposes a character identifier. This lets separate characters on the same account keep different Body Scale profiles. |
| **How does persistence work in Standalone mode?** | Without a framework character ID, Body Scale uses the available player identifier, so the saved profile is associated with that player identity rather than a separate framework character slot. |
| **Can I restrict `/bodyscale` to staff?** | Yes. Enable `Config.Command.Restricted` and authorize users through ACE, framework groups/permissions or full player identifiers. |
| **Which identifier types can I use in the allowlist?** | Any complete identifier returned by `GetPlayerIdentifiers` can be used. Common examples include `license:`, `license2:`, `discord:` and `steam:`. |
| **Can several access methods be used together?** | Yes. When restricted access is enabled, the resource can authorize through the configured ACE permission, framework group/permission or identifier allowlist. |
| **Can I change the `/bodyscale` command name?** | Yes. Change `Config.Command.Name`. The translated chat suggestion follows the configured command automatically. |
| **Does the command include chat help?** | Yes. A translated chat command suggestion is registered automatically while the `chat` resource is running. |
| **Can I change the minimum and maximum height?** | Yes. Use `Config.Scale.MinHeight` and `Config.Scale.MaxHeight`. The same limits are enforced by server validation, not only by the UI. |
| **Can I change the minimum and maximum width?** | Yes. Use `Config.Scale.MinWidth` and `Config.Scale.MaxWidth`. Invalid or manipulated values outside the configured range are rejected by the server. |
| **What does a scale of `1.00` mean?** | `1.00` is the default body scale. Values below it reduce the corresponding dimension and values above it increase it. |
| **Can I change the base height shown in centimeters?** | Yes. `Config.Display.BaseHeightCm` controls the real-world height represented by a `1.00` height multiplier in the editor. |
| **Does it support centimeters and inches?** | Yes. Players can switch between Metric and Imperial display from the editor without changing the saved scale value. |
| **Do presets respect Metric/Imperial mode?** | Yes. Preset height labels are displayed using the player's currently selected measurement system. |
| **Can I add or edit presets?** | Yes. Presets are defined in `Config.Presets` with an ID, translated label/description keys, height and width values. |
| **Can players reset their character to default proportions?** | Yes. The Reset action restores the configured default height and width after a confirmation prompt. |
| **Can other players see the Body Scale UI?** | No. The editor interface, camera controls and measurement ruler are local to the player currently editing. |
| **Can other players see the resulting body size?** | Yes. The accepted character scale is synchronized so other players can see the modified character proportions. |
| **Is the ruler required?** | No. Set `Config.Display.RulerEnabled = false` if your server does not want the measurement ruler. |
| **Why does the resource have a native ruler fallback?** | Some RedM artifacts do not expose the full DUI runtime-texture API. The fallback keeps the measurement feature usable without requiring a specific artifact behavior. |
| **Can I move the editor UI?** | Yes. Use the move button in the editor and drag the panel to the preferred position. |
| **Where is the UI position saved?** | It is stored locally through KVP data. It is intentionally not stored in SQL because it is a client-side visual preference. |
| **Can I configure the editor camera zoom?** | Yes. `DefaultDistance`, `MinimumDistance` and `MaximumDistance` are available under `Config.Camera`. |
| **Why can I not open the editor while mounted or swimming?** | The resource blocks unsafe/incompatible character states by default to avoid camera, focus or ped-state problems. Each restriction can be configured individually. |
| **What happens if the player dies while editing?** | The editor closes safely, NUI focus is released, the camera and ruler are destroyed, and the last valid body state is preserved. |
| **What happens when the player changes character?** | The current editor session is closed and the new character loads its own saved profile when its identifier becomes available. |
| **Are height and width trusted from the NUI?** | No. The server validates every save request and rejects malformed, non-numeric, out-of-range, `NaN` or infinite values. |
| **Does the resource include anti-spam protection?** | Yes. Opening and saving have independent server-side cooldowns, plus editor sessions expire after the configured timeout. |
| **Can invalid requests be logged to Discord?** | Yes. Enable `ServerConfig.Logs.Events.Anomaly` to log rejected suspicious or manipulated requests. |
| **Are Discord logs required?** | No. Set `ServerConfig.Logs.Enabled = false` to disable all webhook logging. |
| **Can I choose which Discord actions are logged?** | Yes. Panel opens, saved changes, cancelled edits and anomalies can each be enabled or disabled independently. |
| **Can I change the Discord embed footer?** | No. The footer is intentionally fixed as part of the resource branding. |
| **Is the startup banner configurable or translated?** | No. It is intentionally fixed and displays only core resource status information. |
| **Which languages are included?** | English, Spanish, French, German, Italian, Portuguese and Polish. |
| **Where are translations managed?** | All translations are maintained exclusively in `locales/*.lua`. The web interface does not use separate JSON locale files. |
| **Can I add another language?** | Yes. Create a complete locale file using the same keys as the existing locales and update the locale-loading configuration as required. Partial locale files are not recommended. |
| **Can I edit the UI source?** | Yes. The complete editable source is included under `web/src`, including HTML, CSS and JavaScript. |
| **How do I rebuild the UI?** | Use the included `web/build.mjs` / package script to regenerate `web/dist`, then restart the resource. |
| **Why is `web/dist` harder to read than `web/src`?** | `web/dist` is the production build used by the resource. The readable development source is intentionally kept separately under `web/src`. |
| **Does width work on every custom ped?** | Not guaranteed. Width relies on compatible MetaPed body expressions, so custom models without those morphs may only support height scaling. |
| **Will clothing always follow extreme width values perfectly?** | Standard multiplayer clothing generally follows the body system, but unusually large values or custom clothing/MetaPed assets can produce visual differences. Test your server's clothing packs with your chosen limits. |
| **Can another resource read the player's Body Scale?** | Yes. Use the public exports declared in `fxmanifest.lua` rather than depending on internal network events. |
| **Should integrations trigger the internal save events directly?** | No. Internal events are implementation details and may include session/security validation. Use the documented exports and supported public workflow instead. |
| **Does Body Scale query SQL every time another player becomes visible?** | No. The server maintains a body-scale cache to reduce unnecessary repeated database reads. |
| **Does the resource support future database updates?** | Yes. A schema migration system tracks database changes and can apply future migrations without requiring customers to rebuild the tables manually. |
| **Can I disable debug prints in production?** | Yes. Keep `Config.Debug = false`. The fixed startup banner remains, while translated diagnostic debug prints stay disabled. |
| **What files should customers normally edit?** | `config.lua` and `server_config.lua` are the intended configuration files. Locale files can also be edited when customizing translations. |
