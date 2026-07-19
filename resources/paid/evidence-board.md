<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/pMs3yOo4T6o"
    title="smdz_evidence_board showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_evidence_board/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_evidence_board) | [![](https://badges.5metrics.dev/smdz_evidence_board/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_evidence_board)

</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_evidence_board`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SMDZ Evidence Board allows authorized players to place persistent physical evidence boards on walls or floors, organize investigation data, connect evidence with red strings, display images through secure HTTPS URLs, and manage shared editing access for each case.

---

# ⭐ **FEATURES:**

- 🕵️ **Bring investigations into the game world** with fully interactive physical evidence boards designed for police, detective, federal, and investigative roleplay.
- 🧱 **Place boards naturally on walls or supported floor surfaces** using an intuitive raycast preview with rotation, height adjustment, precision controls, confirmation, and cancellation.
- 🖥️ **Edit every case through a polished React interface** built specifically for organizing suspects, photographs, documents, notes, and investigative links.
- 🧩 **Create multiple evidence types** including sticky notes, suspect profiles, standard evidence photographs, Polaroid photos, and case documents.
- 🎨 **Customize every piece of evidence** by moving, resizing, rotating, renaming, describing, and arranging each item independently.
- 🖼️ **Control exactly how linked images appear** with built-in zoom and repositioning tools for precise image framing inside each photo card.
- 🔗 **Connect clues with red investigation threads** to visually represent relationships between suspects, locations, events, vehicles, and evidence.
- 🗂️ **Customize every case file** with its own department acronym, operation name, subtitle, and case number.
- 👥 **Collaborate with persistent access management** by granting selected players permission to edit a board and removing that access whenever necessary.
- 🔐 **Protect every investigation with owner-based permissions** while allowing configured framework administrators or ACE groups to perform authorized moderation actions.
- 💾 **Keep every case permanently stored in SQL** with normalized tables for boards, evidence elements, connections, ownership, and shared access.

<div class="evidenceboardresmon" id="evidenceboardresmon" data-mode="ox-to-qb">
  <div class="item-evidenceboardresmon">
    <img src="/assets/other/evidenceboard-resmon.png" alt="evidenceboardresmon" data-no-zoom />
  </div>

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended artifact with OneSync enabled.
- **Framework:** One of the following:
  - `es_extended`
  - `qb-core`
  - `qbx_core`
- **Required dependencies:**
  - `ox_lib`
  - `oxmysql`

### Supported Notification providers

- `ox_lib`
- `brutal_notify`
- `codem-notification`
- `esx_notify`
- `fl-notify`
- `gtm-ui`
- `okoknotify`
- `origen_notify`
- `ro_notify`
- `rtx_notify`
- `rxnotify`
- `vms_notifyv2`
- `wasabi_notify`
- `wasabi_uikit`


### Supported TextUI providers

- `ox_lib`
- `brutal_3dtextui`
- `brutal_textui`
- `cd_drawtextui`
- `codem-textui`
- `dsco_textui`
- `framework`
- `jg-textui`
- `lation_ui`
- `okoktextui`
- `origen_notify`
- `qs-textui`
- `wasabi_uikit`
- `zsx_uiv2`


### Supported Inventory providers

- `ox_inventory`
- `qb-inventory`
- `origen_inventory`
- `qs-inventory`
- `codem-inventory`
- `core_inventory`
- `tgiann-inventory`
- `ak47_inventory`
- `natives framework`


---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_evidence_board.zip`.
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_evidence_board
```

3. Import the included SQL file:

```text
smdz_evidence_board/install_files/sql/install.sql
```

The installer creates and updates the required schema, including normalized tables for boards, evidence elements, connections, and persistent access permissions.

1. Configure the public settings inside:

```text
smdz_evidence_board/config.lua
```

5. Optionally configure Discord webhook logging inside:

```text
smdz_evidence_board/server/server_config.lua
```

6. When using item placement, copy the correct item definition from:

```text
smdz_evidence_board/install_files/items/item_definitions.md
```

7. Copy the inventory image from or into:

```text
smdz_evidence_board/install_files/items/img_inv
```

The recommended image name is `prop_cork_board.png`.

8. Add the resource to your `server.cfg`:

```bash
## SMDZ Studios
ensure ox_lib
ensure oxmysql
ensure smdz_evidence_board
```

9. Restart your server or start the resource manually:

```bash
start smdz_evidence_board
```

10. Check the server console for the startup banner and any dependency, framework, or database errors.

---

# ⚙️ **CONFIGURATION:**

The main public configuration is located in `config.lua`.

```lua
--[[
    ============================================================================
    SMDZ EVIDENCE BOARD - PUBLIC CONFIGURATION
    ============================================================================

    INDEX
    01. General
    02. Placement Method
    03. Inventory Provider
    04. Job Access
    05. Administrator Access
    06. Notification Provider
    07. TextUI Provider
    08. Placement Controls
    09. Board Interaction
    10. Board Limits
    11. Streaming

    Provider values must use the full FiveM resource folder name.
    Use 'auto' to let the resource detect the first compatible provider.
    ============================================================================
]]

Config = {} -- Main public configuration table.

-- ============================================================================
-- 01. GENERAL
-- ============================================================================

Config.Locale = 'en' -- Active locale: 'en', 'es', 'fr', 'pt', or 'de'.
Config.Debug = false -- Enables detailed client, server, SQL, and bridge diagnostics.
Config.Framework = 'auto' -- Framework resource: 'auto', 'qbx_core', 'qb-core', or 'es_extended'.

-- ============================================================================
-- 02. PLACEMENT METHOD
-- ============================================================================

Config.PlacementMethod = 'item' -- Placement mode: 'command' or 'item'.
Config.PlacementCommand = 'evidenceboard' -- Command used when PlacementMethod is 'command'.
Config.EvidenceBoardItem = 'evidenceboard' -- Item name used when PlacementMethod is 'item'.

-- ============================================================================
-- 03. INVENTORY PROVIDER
-- ============================================================================

Config.Inventory = 'auto'
-- Inventory resource: 'auto', 'ox_inventory', 'origen_inventory', 'qs-inventory', 'codem-inventory',
-- 'core_inventory', 'tgiann-inventory', 'ak47_inventory', or 'qb-inventory'.

-- ============================================================================
-- 04. JOB ACCESS
-- ============================================================================

Config.Access = { -- Controls which framework jobs may create and edit boards.
    requireOnDuty = false, -- Requires the framework duty state when supported.
    jobs = { -- Authorized job names and their minimum grades.
        police = 0, -- Police job minimum grade.
        sheriff = 0, -- Sheriff job minimum grade.
        army = 0 -- Army job minimum grade.
    }
}

-- ============================================================================
-- 05. ADMINISTRATOR ACCESS
-- ============================================================================

Config.Admins = { -- Allows authorized administrators to manage any board.
    acePermission = 'smdz.evidenceboard.admin', -- ACE permission checked before framework groups.
    groups = { -- Framework administrator groups accepted by the resource.
        'admin', -- Standard administrator group.
        'superadmin', -- Elevated administrator group.
        'god' -- Highest QBCore-style administrator group.
    }
}

-- ============================================================================
-- 06. NOTIFICATION PROVIDER
-- ============================================================================

Config.Notifications = { -- Client notification bridge configuration.
    provider = 'auto',
    -- Full resource name: 'auto', 'ox_lib', 'brutal_notify', 'codem-notification', 'esx_notify', 'FL-Notify', 'gtm-ui', 'okokNotify',
    -- 'origen_notify', 'RO_Notify', 'rtx_notify', 'RxNotify', 'vms_notifyv2', 'wasabi_notify', or 'wasabi_uikit'.
    duration = 5000, -- Notification duration in milliseconds.
    position = 'top-right' -- Screen position used by providers that support positioning.
}

-- ============================================================================
-- 07. TEXTUI PROVIDER
-- ============================================================================

Config.TextUI = { -- Client interaction TextUI bridge configuration.
    provider = 'auto',
    -- Full resource name: 'auto', 'ox_lib', 'brutal_3dtextui', 'brutal_textui', 'cd_drawtextui', 'codem-textui', 'dsco_textui',
    -- 'jg-textui', 'lation_ui', 'okokTextUI', 'origen_notify', 'qs-textui', 'wasabi_uikit', or 'ZSX_UIV2'.
    position = 'right-center', -- Screen position used by providers that support positioning.
    icon = 'table-columns' -- Font Awesome icon used by providers that support icons.
}

-- ============================================================================
-- 08. PLACEMENT CONTROLS
-- ============================================================================

Config.PlacementOptions = { -- User-facing placement sensitivity settings.
    maxDistance = 10.0, -- Maximum raycast placement distance in game units.
    rotationStep = 5.0, -- Standard rotation adjustment in degrees.
    precisionRotationStep = 1.0, -- Rotation adjustment while the precision key is held.
    heightStep = 0.025, -- Standard vertical adjustment in game units.
    precisionHeightStep = 0.005 -- Vertical adjustment while the precision key is held.
}

-- ============================================================================
-- 09. BOARD INTERACTION
-- ============================================================================

Config.Interaction = { -- Distances used when interacting with existing boards.
    distance = 2.5, -- Maximum distance for opening the board interaction menu.
    largeViewDistance = 3.5, -- Maximum distance before the fullscreen view closes automatically.
    requireLineOfSight = true -- Prevents interaction and rendering through walls.
}

-- ============================================================================
-- 10. BOARD LIMITS
-- ============================================================================

Config.BoardLimits = { -- Public limits enforced again by server-side validation.
    maximumPerPlayer = 5, -- Maximum number of boards owned by one identifier.
    minimumSpacing = 0.65 -- Minimum distance required between two boards.
}

-- ============================================================================
-- 11. STREAMING
-- ============================================================================

Config.Streaming = { -- Client-side entity and DUI streaming distances.
    propDistance = 38.0, -- Distance at which the physical board prop is streamed.
    duiDistance = 20.0 -- Distance at which the board DUI is streamed and rendered.
}

```



---

# 🎮 **USAGE:**

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/evidenceboard` | Starts evidence-board placement when command mode is enabled. | Requires an authorized job and the configured minimum grade. |

The command name can be changed through `Config.PlacementCommand`.

When `Config.PlacementMethod = 'item'`, the placement command is disabled and players must use the configured `evidenceboard` inventory item instead.

### Keybinds

#### Placement mode

- `E` – confirms the board position.
- Mouse wheel or left/right arrow keys – rotates the board on the ground or tilts it on a wall.
- Up/down arrow keys – adjusts board height.
- `R` – resets the board rotation.
- `Shift` – enables precision adjustments.
- `Backspace` or `Escape` – cancels placement.

#### Board interaction

- `E` – opens the interaction menu when standing near a board.
- `E`, `Backspace`, or `Escape` – closes the fullscreen board view.

### UI / Menus

Every board provides a permission-aware interaction menu:

1. **View Fullscreen** – always available to every nearby player.
2. **Edit Board** – available to the owner or players with persistent access and an authorized job.
3. **Manage Access** – available only to the board owner.
4. **Move Board** – available only to the board owner.
5. **Delete Board** – available to the owner or an authorized framework/ACE administrator.

The editor supports:

- Department acronym.
- Investigation title and subtitle.
- Case number.
- Sticky notes.
- Suspect cards.
- Evidence photos.
- Polaroid photos.
- Case documents.
- Red-string connections.
- Element movement, resizing, and rotation.
- Image zoom and framing.
- Secure public `https://` image URLs.
- Autosave, version control, lock protection, and emergency draft recovery.

Images must use public HTTPS URLs. HTTP links, Base64, `data:image` sources, and URLs longer than 2048 characters are rejected by the server.

### Board permissions

| Action | Public | Granted access | Owner | Framework/ACE admin |
|---|---:|---:|---:|---:|
| View physical board | Yes | Yes | Yes | Yes |
| View fullscreen | Yes | Yes | Yes | Yes |
| Edit | No | Yes, with authorized job | Yes, with authorized job | Only when owner or granted access |
| Manage access | No | No | Yes | No |
| Move board | No | No | Yes | No |
| Delete board | No | No | Yes | Yes |

Persistent access is stored in SQL and remains after restarts.

### Item mode

When item mode is enabled:

```lua
Config.PlacementMethod = 'item'
Config.EvidenceBoardItem = 'evidenceboard'
Config.Inventory = 'auto'
```

The item is reserved and removed server-side before placement begins. Cancelling placement, losing authorization, dying, entering a vehicle, or stopping the resource during placement attempts to return the reserved item. The item remains consumed only after a board is successfully created.

For `ox_inventory`, the item must use `consume = 0` because this resource handles consumption and refunds itself.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

The resource uses server-authoritative internal network events for synchronization, editing locks, saving, streaming, movement, deletion, and item reservations. These internal events are not intended to be triggered directly by external resources because every action is validated and tied to the resource lifecycle.

### Server Events

There are currently no server events documented as a public integration API. External integrations should use the provided exports instead of triggering internal events.

| Event name | Parameters | Description |
|---|---|---|
| Internal only | — | Board lifecycle events are reserved for the resource client and server logic. |

### Client Events

There are currently no client events documented as a public integration API.

| Event name | Parameters | Description |
|---|---|---|
| Internal only | — | Client synchronization and UI events are reserved for the resource. |

### Exports

```lua
-- Client: intended for ox_inventory item usage.
exports.smdz_evidence_board:useEvidenceBoard(itemData, slot)

-- Server: validates ox_inventory use and may reject unsafe consumption.
exports.smdz_evidence_board:validateEvidenceBoardItemUse(eventName, item)

-- Server: sends a supported SMDZ Evidence Board webhook event.
exports.smdz_evidence_board:LogEvidenceBoardWebhook(eventName, source, details)
```

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| `useEvidenceBoard` | Client | `itemData`, `slot` | `bool` | Starts the normal inventory-use flow for the evidence-board item. Designed for `ox_inventory` client exports. |
| `validateEvidenceBoardItemUse` | Server | `eventName`, `item`, optional inventory context | `bool` / validation result | Validates item usage, placement mode, consumption safety, and server-side reservation rules. |
| `LogEvidenceBoardWebhook` | Server | `eventName`, `source`, `details` | `nil` | Sends one of the supported board audit events through the configured server-side webhook logger. |

### ox_inventory example

```lua
['evidenceboard'] = {
    label = 'Evidence Board',
    weight = 2500,
    stack = true,
    close = true,
    consume = 0,
    description = 'A portable cork evidence board used by detectives to organize case files, photographs, suspects, and investigative leads.',
    client = {
        export = 'smdz_evidence_board.useEvidenceBoard',
        image = 'prop_cork_board.png'
    },
    server = {
        export = 'smdz_evidence_board.validateEvidenceBoardItemUse'
    }
}
```

---

# 🧪 **COMMON ISSUES:**

| Issue | Likely cause | Solution |
|---|---|---|
| Resource does not start | A dependency is missing, the folder name is incorrect, or the resource order is wrong. | Confirm the folder is named exactly `smdz_evidence_board`. Start `ox_lib`, `oxmysql`, the selected framework, and the inventory resource before this script. Check the server console for the first red error instead of later follow-up errors. |
| Framework is not detected | `Config.Framework` is incorrect, the framework starts too late, or a renamed core resource is being used. | Set `Config.Framework` explicitly to `esx`, `qbcore`, or `qbx`. Confirm the expected core resource name is running before `smdz_evidence_board`. Restore the default resource name or adapt the framework bridge when using a renamed core. |
| SQL connection error | `oxmysql` cannot connect to the configured database. | Verify the connection string, database credentials, database name, and that MySQL/MariaDB is online. Confirm `oxmysql` starts without errors before this resource. |
| Required SQL tables are missing | The final installer was not imported, an older SQL file was used, or the migration failed. | Back up the database, import `install_files/sql/install.sql`, restart the resource, and review the first SQL error. Ensure the database user can create, alter, index, and reference tables. |
| Placement command does nothing | Command mode is disabled, the player is not authorized, or the player is dead/in a vehicle. | Set `Config.PlacementMethod = 'command'`, verify `Config.PlacementCommand`, check the player's job and grade, and leave vehicles before placing. Enable debug temporarily to see the rejection reason. |
| Placement item does nothing | Item mode is disabled, the item definition is wrong, the inventory starts too late, or the usable-item registration failed. | Set `Config.PlacementMethod = 'item'`, use `install_files/items/item_definitions.md`, ensure the selected inventory starts first, and restart both the inventory and this resource after adding the item. |
| Selected inventory is ignored | The configured adapter is unavailable or its resource name is not running. | Check `Config.Inventory`, start the expected inventory before this resource, and review startup detection. The bridge intentionally tries other supported inventories and then native framework fallback functions. |
| Automatic inventory detection selects the wrong inventory | Multiple supported inventory resources are running at the same time. | Stop unused inventory resources or set `Config.Inventory` to the preferred adapter. The selected adapter is attempted first before automatic fallback. |
| Item is consumed immediately and not refunded | The inventory is configured to auto-consume it before the script reserves it. | For `ox_inventory`, set `consume = 0`. Do not add a second inventory-side removal callback. The script must control reservation, removal, confirmation, and refund. |
| Item is not returned after cancelling placement | The inventory add operation failed, the item was auto-consumed, or the resource stopped before the refund completed. | Check server logs for the reservation/refund event, confirm the item exists in the inventory definition, verify available inventory space, and use `consume = 0` with `ox_inventory`. |
| Board preview only appears on the floor | The raycast is not hitting a valid wall or the surface normal is outside the supported range. | Aim directly at a solid wall from a reasonable distance. Avoid transparent props, doors, very thin objects, and surfaces with unusual collision. Reset the preview with `R` and try again. |
| Board preview clips into a wall | The selected wall has unusual collision depth or the preview is too close to the surface. | Move the crosshair slightly, reset the placement, and test a nearby section of the wall. Some custom MLO collisions may require map-side correction. |
| Rotation, height, or precision controls do not react | Another resource captures the same controls, the game window is not focused, or placement mode was interrupted. | Click back into the game, release all held keys, and test again. Temporarily stop resources that override arrow keys, mouse wheel, `E`, `R`, `Shift`, `Escape`, or `Backspace`. |
| Board is created but immediately disappears | Streaming conditions, line of sight, or the board position may be invalid. | Stay near the board, ensure it is not placed inside another collision, and check debug logs for streaming removal reasons. Test with a default GTA wall before blaming the DUI system. |
| Physical prop appears but DUI is blank | The compiled UI is missing, CEF cannot load it, or the DUI handshake failed. | Confirm `web/dist/index.html` and `web/dist/assets` are intact. Check the F8 console for NUI errors. Do not rename generated asset files manually. Restart the resource after replacing the complete folder. |
| DUI repeatedly recreates | Visibility or occlusion checks are alternating because of collision, an invalid placement, or custom map geometry. | Move the board to a clean wall, test without nearby overlapping props, and review throttled streaming debug logs. Do not reduce cleanup delays blindly; first identify the collision causing the state change. |
| Fullscreen view closes immediately | The player is beyond `Config.Interaction.largeViewDistance`, line of sight is lost, or the board streamed out. | Stand closer to the board and keep it unobstructed. Increase the public large-view distance only when necessary and avoid excessive values. |
| Interaction menu does not open with `E` | Player is too far away, the board is behind a wall, or the TextUI/helper state is stuck. | Move within interaction distance, face the board, confirm line of sight, and try again. Restart the resource if a previous UI session was interrupted. |
| Interaction prompt is missing | The selected TextUI provider is not started or its bridge does not match the installed version. | Use `Config.TextUI.provider = 'auto'` or `ox_lib` while testing. Ensure the selected provider starts before this resource. Update the modular TextUI bridge if your resource uses a custom API. |
| Notifications are missing | The configured provider is unavailable or has a different export/event API. | Set the notification provider to `auto` or `ox_lib`. Confirm the notification resource is started and matches the supported integration name. |
| Player can view but cannot edit | Public viewing does not grant editing access. The player lacks ownership/access, authorized job, grade, or duty state. | Grant persistent access from the owner menu and verify the player's job, grade, and duty status. Public fullscreen viewing is intentionally separate from editing. |
| Granted player still cannot edit | The stored identifier does not match the player's current identifier or the player no longer meets job requirements. | Remove and grant access again while the target is online. Verify framework identifiers and check that the player still has an authorized job and grade. |
| Owner cannot manage access | Ownership information is missing, legacy data was not migrated, or the identifier changed. | Inspect the board owner columns in SQL and migration logs. Recreate or safely repair ownership only after making a database backup. |
| Access list is empty | No users have been granted access or legacy access rows were not migrated. | Grant access through the owner menu. Check `smdz_evidence_board_access` for stored rows and confirm the target identifier was saved. |
| Administrator cannot delete a board | Their framework group is not listed and the ACE permission is missing. | Add the correct group to `Config.Admins.groups` or grant `smdz.evidenceboard.admin` through ACE, then reconnect or refresh framework permissions. |
| Normal player can see delete option | Permission data is stale, a framework group is being misreported, or a bridge customization is incorrect. | Verify the player's framework group, inspect the admin bridge, restart the resource, and test with debug enabled. The server still validates deletion even if a client menu is displayed incorrectly. |
| Delete or other sensitive action happens without confirmation | The UI build is outdated or only part of the resource was replaced. | Replace the complete resource folder, including `web/dist`, rather than copying only Lua files. Clear the FiveM client cache if the old NUI remains loaded. |
| Editor says board is locked | Another player is editing it or an interrupted session has not expired yet. | Ask the other editor to close normally. Wait for the lock timeout or restart the resource when a stale lock cannot clear. Avoid force-closing the client during active editing. |
| Changes do not save | Server validation rejected the payload, the save lock was lost, or SQL failed. | Check the editor error message, F8 console, and server console. Correct invalid image URLs, oversized text, version conflicts, or SQL errors before retrying. |
| Save conflict or version conflict appears | Two sessions attempted to save different versions of the same board. | Close and reopen the editor to load the newest version. Do not edit the same board from multiple clients simultaneously. |
| Evidence card moves outside the board | Client build is outdated or legacy element geometry is invalid. | Install the latest full build and reopen the board. The server clamps valid element geometry; legacy invalid rows may need a one-time SQL cleanup. |
| Image URL is rejected | It is HTTP, Base64, a local path, private, too long, or not a direct image URL. | Use a public direct `https://` image URL below 2048 characters. Open it in a private browser window to confirm it loads without authentication. |
| Image URL is accepted but image remains blank | The host blocks embedding, hotlinking, CEF requests, or requires cookies. | Use a different image host that permits direct public access. Test the exact URL in an incognito browser and avoid expiring CDN links. |
| Image framing controls appear ineffective | The selected evidence type has no image or the linked image has not loaded. | Select a photo, suspect, or Polaroid card with a valid HTTPS image. Wait for the image to load, then adjust zoom and position. |
| Red string cannot be created | Connection mode is not enabled, the same item was clicked twice, or a duplicate connection already exists. | Enable connection mode and select two different evidence cards. Existing identical connections are intentionally not duplicated. |
| Red strings point to incorrect positions | Evidence data is stale, element dimensions are invalid, or the client has an old UI build. | Save and reopen the board, update the complete resource, and verify the relevant element rows in SQL contain valid dimensions and scale values. |
| SQL grows too quickly | Debug is excessive, an external modification reintroduced Base64, or too many boards/elements are being created. | Keep images URL-only, disable production debug, enforce board limits, and inspect row counts by table. Do not store image binaries or large JSON payloads in board columns. |
| High client resource usage | Too many nearby active DUI boards, overly large streaming distances, or custom modifications disabled cleanup. | Restore recommended streaming values, reduce the number of boards in one room, and verify DUI instances are destroyed after leaving range. Test performance with debug disabled. |
| High server resource usage | Excessive save frequency, external events repeatedly modifying boards, or SQL indexes are missing. | Use the included normalized schema and indexes, avoid forcing saves every frame, and inspect slow-query logs. Keep autosave and transaction logic unchanged unless profiling proves otherwise. |
| Debug console is flooded | Debug mode is enabled in production or custom prints bypass throttling. | Set `Config.Debug = false`. Remove custom loop prints and use the existing debug helper categories instead of raw prints inside frequent threads. |
| Locale text is missing | The locale code is invalid, `utils/locale.lua` is missing, or a custom locale lacks required keys. | Use `en`, `es`, `fr`, `pt`, or `de`. Confirm `utils/locale.lua` loads before the locale files and preserve every key from `locales/en.lua`. |
| UI still displays an old language | Client cache or an old compiled UI is being used. | Restart the resource, reconnect, and clear FiveM cache if required. Confirm `Config.Locale` uses a supported value before startup. |
| Webhook logs do not arrive | Logging is disabled, the URL is invalid, Discord rejected it, or rate limits were reached. | Enable the webhook config, use a valid Discord webhook URL, test without a role mention, and inspect server errors for HTTP status details. |
| Webhook posts duplicate entries | Multiple resources call the export, the same event is logged twice, or an old logger remains installed. | Search for duplicate `LogEvidenceBoardWebhook` calls and remove legacy logging code. Keep only one lifecycle logger per action. |
| Resource update appears to have no effect | Only some files were replaced or the client is using cached NUI assets. | Stop the resource, replace the entire folder, verify the version in `fxmanifest.lua`, clear cache when necessary, and restart the server. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| Which frameworks are supported? | ESX, QBCore, and Qbox are supported through modular framework bridges. |
| Is the script standalone? | No. The documented release expects ESX, QBCore, or Qbox because ownership, jobs, permissions, identifiers, and item handling use framework data. |
| Which dependencies are mandatory? | `ox_lib` and `oxmysql` are mandatory. A supported framework is also required. Item mode may additionally require the relevant inventory resource. |
| Does it support OneSync? | Yes. Use a current recommended FiveM artifact with OneSync enabled. |
| Can boards survive a server restart? | Yes. Board placement, content, connections, ownership, and granted access are stored persistently in SQL. |
| Are images stored in the database? | Only the HTTPS URL and framing values are stored. Image binary data, Base64, and `data:image` sources are not accepted. |
| Why are Base64 images not supported? | Embedded images create very large payloads, increase SQL size, slow synchronization, and can exceed database or NUI limits. URL-only images keep storage and network usage predictable. |
| Can I paste an image from my clipboard? | No. Clipboard and embedded-image support were removed. Add a direct public HTTPS image link instead. |
| What image hosts are compatible? | Any host that provides a stable, direct, public HTTPS image URL and allows embedding inside FiveM CEF. Hosts requiring login, cookies, referrers, or expiring tokens may fail. |
| Can players without police jobs view a board? | Yes, when they are nearby they can use the public fullscreen-view option. Viewing does not grant editing rights. |
| Who can edit a board? | The owner and players granted persistent access may edit, provided they also satisfy the configured authorized job, grade, and duty requirements. |
| Can an administrator edit every board? | Not automatically. The administrator override is documented for deletion. Editing still requires ownership or granted access unless you intentionally customize the permission model. |
| Who can manage access? | Only the board owner can grant or remove persistent editing access. |
| Who can move a board? | Only the owner can move it through the board interaction menu. |
| Who can delete a board? | The owner or a configured framework/ACE administrator can delete it. The server validates the permission before removal. |
| Is access persistent? | Yes. Granted users are stored in `smdz_evidence_board_access` and remain authorized after restarts until the owner removes them. |
| Can two players edit the same board at once? | No. Editing locks prevent simultaneous sessions and reduce save conflicts. |
| What evidence types are included? | Sticky notes, suspect cards, evidence photographs, Polaroid photographs, and case documents. |
| Can evidence cards be resized and rotated? | Yes. Each card supports movement, resizing, rotation, text editing, and type-specific controls. |
| Can images be repositioned inside their card? | Yes. Photo-based cards support zoom and horizontal/vertical framing adjustments. |
| Can evidence items be connected? | Yes. Red-string connections can be created between two different cards and are saved persistently. |
| Can the case header be customized? | Yes. Department acronym, investigation title, subtitle, and case number are editable per board. |
| Can boards be attached to walls? | Yes. The raycast placement preview supports suitable walls and the supported ground-placement workflow. Custom map collision quality may affect attachment. |
| Can placement use an inventory item? | Yes. Set `Config.PlacementMethod = 'item'` and configure the `evidenceboard` item using the included definitions. |
| Is the placement item consumed when cancelling? | No, provided the inventory is configured correctly. It is reserved and refunded when placement is cancelled or interrupted before successful creation. |
| Why must `ox_inventory` use `consume = 0`? | The resource handles reservation, removal, confirmation, and refund server-side. Inventory auto-consumption would remove the item before that lifecycle can be controlled safely. |
| What does `Config.Inventory = 'auto'` do? | It checks for supported running inventories and selects an available adapter. When no supported adapter is available, it attempts compatible native item functions from the active framework. |
| What happens when I select a specific inventory? | The selected adapter is tried first. If it is unavailable, the bridge checks the remaining supported inventories and finally tries native framework fallback functions. |
| Where are the item installation files? | Item definitions are located in `install_files/items/item_definitions.md`, and inventory images belong in `install_files/items/img_inv`. |
| Can I rename the resource folder? | No. The resource includes a hard folder-name validation and must be named exactly `smdz_evidence_board`. A different folder name stops the resource intentionally. |
| Does it use a target system? | The documented default interaction uses a nearby `E` interaction with TextUI and an `ox_lib` context menu. |
| Can I change the notification system? | Yes. Select a supported provider or use automatic detection through the modular notification bridge. |
| Can I change the TextUI system? | Yes. Select a supported provider or use automatic detection through the modular TextUI bridge. |
| Which languages are included? | English, Spanish, French, Portuguese, and German. |
| Can I add another language? | Yes. Copy `locales/en.lua`, translate every value without changing keys, register the new locale through `utils/locale.lua`, and select its code in `Config.Locale`. |
| Is there a public developer API? | Public integrations should use the documented exports. Internal network events are intentionally not documented as a public API because they require lifecycle and security validation. |
| Does the script include Discord logs? | Yes. Optional webhook logging can record lifecycle, editing, access, item, and security events. URLs remain server-side. |
| Can I change or translate the webhook footer? | No. The footer is intentionally fixed to `SMDZ Studios • Evidence Board` and is neither configurable nor localized. |
| Does the script automatically create SQL tables? | The release may include automatic schema handling, but importing the provided `install_files/sql/install.sql` is still the safest and most predictable installation method. |
| Do I need to reimport SQL after every update? | No. Only releases that change the schema require a migration. Review the release documentation and create a database backup before importing a newer installer. |
| Can I manually edit board rows in SQL? | It is strongly discouraged. Invalid ownership, versions, geometry, or orphaned normalized rows can break synchronization. Use the in-game tools whenever possible. |
| Why is board content split across several tables? | Normalized tables reduce oversized JSON writes, allow selective updates, improve indexing, make access management cleaner, and prevent large image payloads from collapsing a single board row. |
| Does the resource save every frame? | No. It uses controlled autosave, dirty-state tracking, transactions, version checks, and selective normalized updates. |
| Is the script optimized for many boards? | It uses distance-based prop/DUI streaming and normalized persistence. Actual capacity depends on how many boards are concentrated in one area, server hardware, image hosts, and configured distances. |
| Should debug mode remain enabled? | No. Enable it temporarily while diagnosing a problem, then disable it in production to reduce console noise and overhead. |
| Can players interact through walls? | By default, line-of-sight validation can prevent interaction through walls. This behavior is controlled by the documented interaction setting. |
| What happens if a player walks away during fullscreen view? | The fullscreen view closes automatically after exceeding the configured large-view distance or losing the required board context. |
| What happens if the resource stops during placement? | The script attempts to cancel the active placement and refund a reserved item when applicable. Inventory availability and resource shutdown timing may affect emergency refunds. |
| What happens if a player disconnects while editing? | The editing session and lock are cleaned up through lifecycle handling or timeout protection, preventing permanent locks. |
| Can I modify the compiled React UI? | Source files are included in the development package where applicable. After changes, rebuild `web/dist` with the matching package versions and deploy the complete compiled output. |
| Why should I replace the complete resource folder during updates? | Mixing Lua, source, and compiled NUI files from different versions causes missing functions, stale interfaces, invalid locales, and hard-to-diagnose runtime errors. |
| Where should I report a reproducible issue? | Provide the resource version, framework, inventory, relevant configuration, exact console/F8 error, reproduction steps, and whether the problem occurs on a clean server. |

---

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
