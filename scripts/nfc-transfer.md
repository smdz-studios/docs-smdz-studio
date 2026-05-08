<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VlhR9c-zCR4"
    title="smdz_nfc_transfer showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_nfc_transfer`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QBX / Standalone (auto-detected)
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** - <span class="badge badge--stable">STABLE</span>

**Short description:**
High-end NFC money transfer system with secure server-side validation, React NUI, account-aware banking bridges, optional history/NPC interaction, and broad compatibility with ESX/QB ecosystems.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended artifact.
- **Lua:** `5.4`.
- **Required dependency:** `ox_lib`.
- **Framework support:**
  - `es_extended` (ESX)
  - `qb-core` (QBCore)
  - `qbx_core` (QBX)
  - `standalone` fallback
- **Database support (optional, for history):**
  - `oxmysql`
  - `mysql-async`
  - `ghmattimysql`
- **Optional integrations:**
  - Target: `ox_target` / `qb-target`
  - Banking adapters: `okokBanking`, `Renewed-Banking`, `qb-banking`, `fd_banking`, `kartik-banking`, `tgg-banking`, `tgiann-bank`, `wasabi_banking`
  - TextUI/Notify adapters (see compatibility sections)

---

# 📥 **INSTALLATION:**

1. Place the folder in:

```text
resources/[smdz]/smdz_nfc_transfer
```

2. Run the SQL file if you want transfer history:

```text
sql/smdz_nfc_transfer.sql
```

3. Ensure dependencies/resources in `server.cfg` (order recommended):

```bash
ensure ox_lib
# ensure your framework (es_extended / qb-core / qbx_core)
# ensure your DB resource (oxmysql / mysql-async / ghmattimysql)
# ensure optional providers (target/banking/notify/textui)
ensure smdz_nfc_transfer
```

4. If you edit UI source (`web/src`), rebuild the NUI:

```bash
cd resources/[smdz]/smdz_nfc_transfer/web
npm install
npm run build
```

---

# ⚡ **DEPENDENCIES:**

| Dependency | Required | Purpose |
|------------|----------|---------|
| `ox_lib` | Yes | Callbacks, TextUI fallback, notifications fallback |
| Framework (`es_extended` / `qb-core` / `qbx_core`) | Optional | Player identity, admin groups, money/inventory bridge |
| `oxmysql`, `mysql-async`, or `ghmattimysql`. | Yes | Stores and fetches `smdz_nfc_history` |
| `ox_target` or `qb-target` | Yes | Player/NPC interaction through target |
| Banking resource | Optional | Society/gang/shared account integration |

---

# ⚙️ **CONFIGURATION:**

Main files:

- `config.lua`
- `config_testmode.lua`

### Core

| Key | Description |
|-----|-------------|
| `Config.Locale` | Active locale (`en`, `es`). |
| `Config.Debug` | Enables non-error debug logs. |

### Framework / Inventory

| Key | Description |
|-----|-------------|
| `Config.Framework.Mode` | `auto`, `esx`, `qbcore`, `qbx`, `standalone`. |
| `Config.Inventory.RequiredItem` | Required item to allow transfers (default `phone`). |
| `Config.Inventory.PreferOxInventory` | Prefer `ox_inventory` search when available. |

### Transfer Rules

| Key | Description |
|-----|-------------|
| `Distance` | Max sender/receiver distance check. |
| `MinAmount`, `MaxAmount` | Transfer amount clamp. |
| `NoteMaxLength` | Max sanitized note length. |
| `RequestTimeout` | Receiver accept/reject timeout (seconds). |
| `Cooldown` | Configured cooldown value (for custom expansion). |
| `RateLimitPerMinute` | Anti-spam request limit per player per minute. |
| `FeePercent` | Percentage fee. |
| `FeeMode` | `sender` (sender pays fee on top) or `deduct` (fee deducted from received amount). |
| `QuickPresets` | Quick amount buttons in sender NUI. |

### Sound / Animation / UI

| Key | Description |
|-----|-------------|
| `Config.Sound.Enabled` | Enables NUI SFX / nearby playback event. |
| `Config.Sound.Volume` | Base playback volume. |
| `Config.Sound.Enable3D` | 3D behavior toggle in config context. |
| `Config.Sound.SuccessFile` | Intended success SFX file name (see Troubleshooting note). |
| `Config.Animation.*` | Dict/clip/prop/bone/flag values for transfer animation sequence. |

### History / NPC

| Key | Description |
|-----|-------------|
| `Config.History.Enabled` | Enables DB-backed history callbacks/UI. |
| `Config.History.MaxRows` | Max history rows returned per player. |
| `Config.History.IncludeTestRows` | Inject test rows if test mode is enabled. |
| `Config.NpcPoints` | Spawned NPC interaction points for opening history UI. |

### Security / Permissions / Logging

| Key | Description |
|-----|-------------|
| `Config.Webhook.Enabled` / `Config.Webhook.Url` | Discord webhook transfer logs. |
| `Config.Permissions.Ace.*` | ACE permission nodes. |
| `Config.Permissions.FrameworkGroups.*` | Admin group lists per framework. |

### Test Mode

Use `config_testmode.lua`:

| Key | Description |
|-----|-------------|
| `Config.TestMode.Enabled` | Enables `/nfctest` and local simulation flows. |
| `Config.TestMode.Accounts` | Mock accounts shown in sender UI. |
| `Config.TestMode.HistoryRows` | Mock history rows appended to history callback output. |

---

# 🌍 **LOCALIZATION:**

Locale files:

- `locales/en.lua`
- `locales/es.lua`

The script uses `_L(key, ...)` from `shared/locales.lua` with English fallback. No gameplay text should be hardcoded in Lua logic.

---

# 🎮 **COMMANDS:**

| Command | Description | Permission / Notes |
|---------|-------------|--------------------|
| `/nfctest` | Opens local test sender flow. | Only works when `Config.TestMode.Enabled = true`. |

---

# ⌨️ **KEYBINDS:**

| Key | Default | Description |
|-----|---------|-------------|
| TextUI interaction | `E` (`38`) | Opens NPC history when using TextUI mode. |
| NUI close | `ESC` | Closes active NFC NUI. |
| NUI accept (receiver) | `ENTER` | Accepts incoming transfer while receiver panel is open. |

---

# 📤 **EVENTS:**

### Client Events (received)

| Event | Payload | Description |
|------|---------|-------------|
| `smdz_nfc_transfer:client:startTransfer` | `{ role, id, target/sender }` | Starts transfer state for sender/receiver. |
| `smdz_nfc_transfer:client:incomingRequest` | `{ id, senderName, amount, fee, note, timeout }` | Opens receiver approval UI. |
| `smdz_nfc_transfer:client:endTransfer` | `status` | Closes UI/state and plays result feedback. |
| `smdz_nfc_transfer:client:transferResult` | `{ success, amount, fee }` | Final result SFX feedback event. |
| `smdz_nfc_transfer:client:playApplePayNearby` | `{ x, y, z, radius }` | Plays localized nearby success sound. |
| `smdz_nfc_transfer:client:bridgeNotify` | provider payload | Routed notification event. |
| `smdz_nfc_transfer:client:openSenderUi` | `{ target, testMode? }` | Opens sender UI directly. |
| `smdz_nfc_transfer:client:setUiFocus` | `boolean` | Forces NUI focus state. |
| `smdz_nfc_transfer:client:forceCancel` | none | Cancels active transfer client-side. |
| `smdz_nfc_transfer:client:testTransfer` | none | Starts local test transfer (test mode). |
| `smdz_nfc_transfer:client:openHistoryUi` | none | Opens history panel from event/NPC. |

### Server Events (received)

| Event | Payload | Description |
|------|---------|-------------|
| `smdz_nfc_transfer:server:createRequest` | `{ target, amount, account, note }` | Creates validated transfer request. |
| `smdz_nfc_transfer:server:replyRequest` | `{ id, accepted }` | Receiver accepts/rejects request. |
| `smdz_nfc_transfer:server:cancelRequest` | `requestId` | Cancels active transfer by participant. |

---

# 📥 **CALLBACKS:**

| Callback | Side | Params | Returns | Description |
|----------|------|--------|---------|-------------|
| `smdz_nfc_transfer:server:getAccounts` | Server (lib.callback) | `source` | `accounts[]` | Returns available personal/society/gang/shared accounts. |
| `smdz_nfc_transfer:server:getHistory` | Server (lib.callback) | `source` | `rows[]` | Returns player NFC history rows (+ optional test rows). |

### NUI Callbacks

| Callback | Direction | Description |
|----------|-----------|-------------|
| `nuiReady` | NUI -> Client | Handshake when React app loads. |
| `close` | NUI -> Client | Close current NFC panel/flow. |
| `historyClose` | NUI -> Client | Close history panel focus. |
| `submitSender` | NUI -> Client | Sends sender input to server create request. |
| `receiverReply` | NUI -> Client | Sends accept/reject response to server. |

<!-- ---

# 🧩 **FRAMEWORK COMPATIBILITY:**

| Framework | Status | Notes |
|----------|--------|-------|
| ESX | Supported | Uses `getSharedObject`, xPlayer account/job/group APIs. |
| QBCore | Supported | Uses `GetCoreObject`, PlayerData money/job/gang APIs. |
| QBX | Supported | Uses QB-style core object + PlayerData flow. |
| Standalone | Partial | Framework-dependent money/accounts/admin features are limited. |

Framework is detected automatically unless explicitly forced in config. -->
<!--
---

# 🎯 **TARGET SYSTEM COMPATIBILITY:**

| Target | Status |
|--------|--------|
| `ox_target` | Supported |
| `qb-target` | Supported |
| none | Supported fallback (TextUI/NPC only) | -->

---

# 📱 **UI / NUI:**

- Built with **React + Vite + TailwindCSS** (`web/src`).
- Panels:
  - Sender transfer panel
  - Receiver approve/reject panel (with countdown)
  - History table panel
- NUI message actions:
  - `openSender`
  - `openReceiver`
  - `openHistory`
  - `close`
  - `playSfx`
- Focus and input locking are handled client-side for safe interaction.

---

# 💾 **DATABASE / SQL:**

Table: `smdz_nfc_history`

Stored fields include:
- request id
- sender/receiver identifiers
- sender/receiver names
- account id
- amount
- note
- status
- created/updated timestamps

Indexes are included for sender/receiver identifier and created timestamp.

---

# 📡 **WEBHOOK LOGGING:**

If enabled, the server sends Discord embeds for transfer lifecycle states:

- request
- accepted
- rejected
- expired
- cancelled
- failed

Configured via:

```lua
Config.Webhook.Enabled = true
Config.Webhook.Url = 'https://discord.com/api/webhooks/...'
```

---

# 🔒 **SECURITY & VALIDATION:**

Implemented protections:

- Server-authoritative money operations.
- Event source validation (`source > 0`, ped existence).
- Target validation (exists, not self, in range).
- Required item validation for sender and receiver.
- Strong input sanitization:
  - amount numeric/clamped
  - account ownership check
  - note cleaned and length-limited
- Rate limiting per player (`RateLimitPerMinute`).
- Per-request lock (`TransferLocks`) to prevent double-processing.
- Cancellation/timeout handling and cleanup for disconnected players.
- ACE + framework admin group checks in bridge framework module.

---

# 🚀 **PERFORMANCE:**

- Minimal polling loops:
  - phone-state replication loop every `2000ms`
  - prop cleanup loop every `1000ms`
  - adaptive TextUI proximity loop (`0/500ms`)
- Callbacks are used instead of constant state sync spam.
- Optional integrations are adapter-based and only invoked when needed.

---

# 🛠 **TROUBLESHOOTING:**

1. **Resource does not start or instantly stops**
- Confirm folder name is exactly `smdz_nfc_transfer`.
- The resource includes an internal name guard in `server/main.lua`; any folder rename will force-stop the script.

2. **History UI opens but table is empty**
- Ensure `Config.History.Enabled = true`.
- Ensure SQL file `sql/smdz_nfc_transfer.sql` was executed successfully.
- Ensure one supported DB resource is started: `oxmysql`, `mysql-async`, or `ghmattimysql`.
- If DB is disabled/missing, transfers still work but history storage is skipped.

3. **No interaction on players (NFC option missing)**
- Ensure at least one target resource is running (`ox_target` or `qb-target`) if you expect target interactions.
- Verify `Config.Target.Mode` matches your setup (`auto`, `ox_target`, `qb_target`).
- Confirm both players are alive, not in vehicles, close enough, and both have the required phone item.

4. **Cannot send transfer after opening sender panel**
- Amount must be numeric and inside `Config.Transfer.MinAmount` and `Config.Transfer.MaxAmount`.
- Account must exist in sender account list returned by bridge banking.
- Notes are sanitized; unsupported characters are removed automatically.

5. **Receiver never gets request panel**
- Check distance (`Config.Transfer.Distance`) at request creation time.
- Confirm receiver has phone item.
- Check server console for rate-limit and validation messages.
- Verify receiver is a valid connected player (not dropped mid-request).

6. **Transfer is rejected as insufficient funds unexpectedly**
- In `FeeMode = 'sender'`, sender must cover `amount + fee`.
- In `FeeMode = 'deduct'`, sender only pays `amount`, but receiver gets `amount - fee`.
- Confirm account balance comes from the intended banking adapter/provider.

7. **Notification style is not the one expected**
- In `Config.Notification.Mode = 'auto'`, provider is selected dynamically.
- Force your preferred provider by setting `Config.Notification.Mode` to a concrete adapter key.
- Ensure that provider resource is started before this script.

8. **TextUI for NPC history does not appear**
- Check `Config.NpcPoints` coordinates, interaction mode, and distance values.
- In `auto`, NPC uses target when available, otherwise TextUI.
- If using TextUI adapters, ensure configured provider resource is running.

9. **NUI appears but buttons do not react**
- Rebuild UI if you edited web source: `npm install` then `npm run build` in `web/`.
- Ensure `web/dist/index.html` and `web/dist/assets/*` exist.
- Confirm no browser console errors in CEF DevTools.

10. **Apple Pay sound does not play**
- Actual NUI audio path used by React is `/sound/applepay.ogg`.
- Current config key value is `appleplay.ogg` by default; keep your actual file naming consistent to avoid confusion.
- Confirm `Config.Sound.Enabled = true` and volume > 0.

11. **`/nfctest` does nothing**
- Command only works when `Config.TestMode.Enabled = true`.
- Test mode simulates local sender flow and optional fake history rows.

12. **Webhook logs are not sent**
- Ensure `Config.Webhook.Enabled = true`.
- Set a valid Discord webhook in `Config.Webhook.Url`.
- Check outbound request restrictions/firewall on host.

---

# ❓ **FAQ:**

**Q: Is this script framework-locked?**
A: No. It auto-detects ESX, QBCore, QBX, and can run in standalone fallback mode.

**Q: Can I force a framework manually instead of auto-detection?**
A: Yes. Set `Config.Framework.Mode` to `esx`, `qbcore`, `qbx`, or `standalone`.

**Q: Is `ox_lib` optional?**
A: No. `ox_lib` is required by manifest and used for callbacks/UI helpers.

**Q: Do I need a database for transfers to work?**
A: No. Database is only required for persistent transfer history.

**Q: Which databases are supported?**
A: `oxmysql`, `mysql-async`, and `ghmattimysql`.

**Q: Does the script support society/gang/shared accounts?**
A: Yes, depending on framework and selected banking adapter.

**Q: Can I integrate a custom banking system?**
A: Yes. Implement adapter methods in `bridge/server/banking/custom.lua`.

**Q: Can I integrate custom notifications or TextUI?**
A: Yes. Use `bridge/client/notifications/custom.lua` and `bridge/client/textui/custom.lua`.

**Q: Can I disable fees?**
A: Yes. Set `Config.Transfer.FeePercent = 0`.

**Q: What is the difference between `sender` and `deduct` fee modes?**
A: `sender` charges sender `amount + fee`; `deduct` sends receiver `amount - fee`.

**Q: Is there anti-spam protection?**
A: Yes. Requests are rate-limited with `Config.Transfer.RateLimitPerMinute`.

**Q: Is transfer logic client-side or server-side?**
A: Sensitive logic is server-side (validation, account checks, money movement, final outcome).

**Q: Can players trigger admin-only actions?**
A: Not by default. Admin checks support ACE and framework group mappings.

**Q: How do I open transfer history?**
A: Through configured NPC points using target or TextUI interaction.

**Q: What does test mode do exactly?**
A: Enables `/nfctest`, mock accounts, and optional fake history rows for UI testing.

**Q: Can I rename the resource folder?**
A: No. Folder rename triggers resource validation lock and automatic stop.

<!-- ---

# 📚 **DEVELOPER NOTES:**

Resource structure:

- `fxmanifest.lua`
- `config.lua`
- `config_testmode.lua`
- `shared/` (debug + localization loader)
- `bridge/` (framework/target/textui/notify/banking/database abstraction)
- `client/` (transfer UI flow + NPC history interactions)
- `server/` (secure transfer lifecycle + anti-abuse + webhook + DB)
- `web/` (React/Vite/Tailwind NUI)
- `sql/` (history table)

Bridge-first architecture allows provider swaps without touching core gameplay logic. -->

---

# 🔄 **UPDATES:**
- 📅 There are currently **NO major update plans** scheduled for **Q1 and Q2 of 2026**.
- 🛠️ During this period, the script will only receive:
  - **Bug fixes / emergency patches** if necessary
  - **Small content additions or minor improvements** from time to time
- ⚠️ Major feature expansions or full system reworks are **not planned** during this timeframe.

- 🧾 **UPDATE STEPS:**
  *Backup config → replace folder → restore config → restart server.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of `server/main.lua`.*
