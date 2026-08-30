
<section class="bridge-policy-card bridge-policy-card--warning" aria-label="Mandatory SMDZ Bridge dependency" style="margin-top: 0; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(180deg, rgba(127, 29, 29, 0.34), rgba(38, 10, 10, 0.92)); border-radius: 18px; padding: 1.2rem 1.15rem 1.15rem; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);">
  <p class="bridge-policy-card__label" style="margin: 0 0 0.45rem; font-size: 0.82rem; letter-spacing: 0.22rem; text-transform: uppercase; color: #fca5a5; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" style="display: block; fill: currentColor;">
      <path d="M12 3 2.7 19a1 1 0 0 0 .87 1.5h16.86A1 1 0 0 0 21.3 19L12 3Zm-1 5h2v6h-2V8Zm0 8h2v2h-2v-2Z"></path>
    </svg>
    Required Dependency
  </p>
  <h2 style="margin: 0 0 0.85rem; font-size: clamp(1.45rem, 3vw, 2.2rem); line-height: 1.05; color: #fef2f2;">THIS RESOURCE REQUIRES SMDZ BRIDGE</h2>
  <p style="margin: 0; color: #fecaca; line-height: 1.7; font-weight: 700;">
    SMDZ Bridge is a required dependency for this resource and must be installed correctly in order for it to function as intended. Please ensure that the bridge is present, properly configured, actively running, and started before any resource that depends on it.
  </p>
  <a class="bridge-policy-card__cta bridge-policy-card__cta--warning" href="#/resources/bridge/main.md">Open Bridge Docs</a>
</section>

---

<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_speedradars showcase"
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

[![](https://badges.5metrics.dev/smdz_speedradars/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_speedradars) | [![](https://badges.5metrics.dev/smdz_speedradars/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_speedradars)

</div>


---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_speedradars`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox through `smdz_bridge`
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SMDZ Speed Radars is a complete speed-enforcement system for FiveM with portable police radars, persistent administrative speed cameras, live radar monitoring, automatic fines, photographic evidence, configurable exemptions, radar groups, and fine-payment locations.

---

# ⭐ **FEATURES:**

- 🚔 **Portable police radar system** with inventory use, precise raycast placement, configurable limits, automatic fines, and immersive roadside enforcement.
- 📸 **Real photographic evidence** captured from the radar lens, including detailed speeding tickets with plate, vehicle, speed, limit, location, fine amount, date, and evidence image.
- 🎥 **Advanced live radar camera** with manual movement, extended zoom, night vision, synchronized manual flash, real-time speed/plate/model information, and speeding vehicles highlighted in red.
- 🛡️ **Server-validated enforcement** with lens-facing capture cones, line-of-sight checks, occlusion filtering, configurable exemptions, and protected fine/payment logic.
- 🗺️ **Complete permanent radar management** with SQL persistence, multiple radar props, custom groups, group activation, duplication, editing, moving, deleting, and teleport controls.
- 💳 **Integrated fine registry and payment system** with police/sheriff NPCs, evidence review, pending/paid history, cash or bank payments, and optional map blips.
- 🔌 **Professional compatibility layer** through mandatory `smdz_bridge`, supporting ESX, QBCore, Qbox, multiple inventories, notifications, TextUI, banking, plus local `ox_target` and `qb-target` support.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended build.
- **Framework:** ESX, QBCore, or Qbox supported through `smdz_bridge`.
- **Required dependencies:**
  - `smdz_bridge`
  - `oxmysql`
  - `screencapture`
- **Optional interaction resources:**
  - `ox_target`
  - `qb-target`



### Framework Providers

- `qbx_core` for Qbox
- `qb-core` for QBCore
- `es_extended` for ESX

### Inventory Providers

- `ox_inventory`
- `ak47_inventory`
- `codem-inventory`
- `core_inventory`
- `jaksam_inventory`
- `origen_inventory`
- `qb-inventory`
- `qs-inventory`
- `tgiann-inventory`
- `qb-core` as native QBCore inventory fallback
- `es_extended` as native ESX inventory fallback

### Notification Providers

- `brutal_notify`
- `codem-notification`
- `esx_notify`
- `FL-Notify`
- `gtm-ui`
- `lation_ui`
- `mythic_notify`
- `okokNotify`
- `origen_notify`
- `ox_lib`
- `qb-core`
- `qf_notify`
- `RO_Notify`
- `rtx_notify`
- `RxNotify`
- `vms_notifyv2`
- `wasabi_notify`
- `wasabi_uikit`
- `xsNotify`
- `frkn-uikit`
- `es_extended`

### TextUI Providers

- `smdz_textui`
- `brutal_textui`
- `bx_textui`
- `cd_drawtextui`
- `codem-textui`
- `dsco_textui`
- `esx_textui`
- `jg-textui`
- `lation_ui`
- `okokTextUI`
- `origen_notify`
- `ox_lib`
- `qb-core`
- `wasabi_uikit`
- `ZSX_UIV2`
- `qs-textui`
- `r3-textui`
- `lab-TextUI`
- `KS-Textui`



---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_speedradars_v1.0.0.zip`.

2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_speedradars
```

3. Make sure the required resources are installed and started before SMDZ Speed Radars.

Recommended order:

```bash
## Database / Bridge
ensure oxmysql
ensure smdz_bridge
ensure screencapture

## Optional target - only start the one you use
# ensure ox_target
# ensure qb-target

## SMDZ Studios
ensure smdz_speedradars
```

4. Install the portable radar item using the included example:

```text
install_files/items.lua
```

For ESX installations, an SQL item example is also included:

```text
install_files/items_esx.sql
```

For `ox_inventory`, the portable radar item uses:

```lua
client = {
    export = 'smdz_speedradars.usePortableRadar'
}
```

5. Database tables can be created and migrated automatically by the resource.

For a clean manual installation, import:

```text
install_files/smdz_speedradars.sql
```


The manifest requests:

```lua
data_file 'DLC_ITYP_REQUEST' 'stream/bzzz_police_prop_radar.ytyp'
```

Read:

```text
stream/credits.md
```

for the original creator credit and license references.

1. Restart your server or start the resource manually:

```bash
start smdz_speedradars
```

8. Check the server console for the SMDZ Bridge health check, SQL migrations, loaded permanent radars, inventory provider, and any `[WARN]` or `[ERROR]` messages.

---

# ⚙️ **CONFIGURATION:**

The resource uses three configuration files:

```text
config.lua
config_style_ui.lua
server_config.lua
```

### `config.lua`

```lua
1
```


### `config_style_ui.lua`



```lua
1
```


### `server_config.lua`



```lua
1
```


---

# 🎮 **USAGE:**

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| `/radars` | Opens the permanent radar administration panel. | Requires configured admin ACE/framework permission. |

The command help text is localized and added to the FiveM chat suggestion system.

### Portable Radar Item

Default item:

```text
police_radar
```

Authorized officers use the item from their inventory to enter portable-radar placement mode.

### Portable Radar Placement Controls

| Control | Action |
|---|---|
| `ENTER` | Confirm placement. |
| `Mouse Wheel` | Rotate the radar. |
| `SHIFT + Mouse Wheel` | Fine rotation. |
| `Arrow Up / Arrow Down` | Adjust placement height. |
| `G` | Snap the radar to the ground. |
| `BACKSPACE` | Cancel placement. |

The radar follows the point being aimed at using a camera raycast. The placement preview displays guide lines representing the real capture cone.

### Portable Radar Interaction

With `Config.Interaction = 'textui'`, approach the portable radar and press `E`.

A custom SMDZ NUI menu opens directly. No `ox_lib` context menu is used.

With target mode enabled, the same interaction is exposed through `ox_target` or `qb-target`.

### Live Radar View Controls

| Control | Action |
|---|---|
| `Mouse` | Move the camera within the configured limits. |
| `Mouse Wheel` | Zoom in/out. |
| `H` | Toggle night vision. |
| `G` | Trigger a synchronized manual flash. |
| `BACKSPACE` | Exit radar view. |

Night vision always starts disabled and is disabled again when leaving radar view.

Vehicles can display current speed, license plate, and model. Only speeding vehicles are highlighted in red.

Visibility is filtered by maximum range, FOV, on-screen state, raycast, and entity occlusion.

### Permanent Radar Administration

Authorized staff can use `/radars` to:

- Create permanent radars.
- Select a radar prop.
- Configure speed limits.
- Enable or disable radars.
- Edit, move, or delete radars.
- Teleport to radars.
- Assign radar groups.
- Enable or disable an entire radar group.
- Duplicate existing radars.

Duplicating copies the radar configuration and immediately starts placement for the new radar.

### Radar Groups

Examples:

```text
Los Santos
Blaine County
Highway
Downtown
Route 68
```

Group information is persistent in SQL.

### Fine Payment NPCs

Default police locations:

```text
639.3177, 2.9197, 82.7865, 251.1681
824.4482, -1292.6956, 28.2406, 55.4177
433.2914, -984.8279, 30.7100, 59.0946
```

Default sheriff locations:

```text
1854.8942, 3688.0996, 34.2671, 196.5638
-448.6169, 6012.8159, 31.7164, 307.6692
```

Each NPC can have an optional configurable blip.

In TextUI mode, pressing `E` opens the fine-registry NUI directly.

### Fine Registry UI

Players can:

- View pending fines.
- View paid fines.
- Search/filter violations.
- Open full fine details.
- View evidence photos.
- View ticket copies.
- Pay using supported cash or bank methods.

All payment operations are validated server-side.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

SMDZ Speed Radars intentionally keeps its public API small.

Most network events are internal synchronization and validation events and are not a supported third-party API. External resources should not trigger internal fine, radar, SQL, payment, or synchronization events directly.

### Server Events

There are currently no public server events documented as a stable third-party integration API.

Internal server events handle radar synchronization, permanent administration, portable radar configuration, fine creation, evidence authorization, payments, groups, manual flash, and security validation.

### Client Events

There are currently no public client events documented as a stable third-party integration API.

Internal client events handle radar synchronization, placement, portable-radar management, live view, evidence capture, NUI state, and interaction state.

### Exports

The following client export is public and is used by compatible inventory definitions such as `ox_inventory`:

```lua
exports['smdz_speedradars']:usePortableRadar()
```

| Export name | Side | Parameters | Returns | Description |
|---|---|---|---|---|
| `usePortableRadar` | Client | None required | `nil` | Starts the normal portable-radar item-use request. Final item, job, and placement validation remains server-side through the resource and `smdz_bridge`. |

Example `ox_inventory` item:

```lua
['police_radar'] = {
    label = 'Portable Police Radar',
    weight = 4500,
    stack = false,
    close = true,
    consume = 0,
    description = 'Portable police speed enforcement radar.',
    client = {
        export = 'smdz_speedradars.usePortableRadar'
    }
}
```

---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
| --- | --- |
| Resource does not start | Confirm the folder is named exactly `smdz_speedradars`.<br>Start `oxmysql`, `smdz_bridge`, and `screencapture` before this resource.<br>Check the **first** `[ERROR]` line in the server console, because later errors may only be consequences of the first failure. |
| `smdz_bridge` is not ready | Make sure `smdz_bridge` starts before `smdz_speedradars` and that its framework, inventory, notification, and TextUI providers are ready.<br>Review the bridge health-check and detected provider prints. |
| Framework or inventory is not detected | The provider is selected by `smdz_bridge`, not by SMDZ Speed Radars.<br>Verify the framework/inventory resource is started before the bridge and review the provider detected by SMDZ Bridge. |
| Portable radar item does nothing | Confirm the `police_radar` item exists in your inventory.<br>Verify the player has an authorized police job.<br>For `ox_inventory`, keep `client.export = 'smdz_speedradars.usePortableRadar'` in the item definition.<br>Review `[WARN]` / `[ERROR]` prints related to item validation. |
| `No such export usePortableRadar` | Confirm the resource folder is exactly `smdz_speedradars` and that you installed the latest complete resource build.<br>Make sure `client/item.lua` is present and restart both `smdz_speedradars` and the inventory resource after replacing files. |
| `invalid_callback` appears when registering the radar item | Do not manually add a second usable-item handler for `ox_inventory`.<br>`ox_inventory` should use the included client export, while other inventories are handled through the compatible `smdz_bridge` path. |
| TextUI interaction does not appear | Confirm `Config.Interaction = 'textui'`.<br>Verify the TextUI provider detected by SMDZ Bridge is running and ready.<br>Check that the player is inside the configured interaction distance. |
| Pressing `E` near a portable radar does nothing | Confirm the radar is synchronized to the client, the player is close enough, and TextUI mode is active.<br>The portable-radar interaction uses its own custom NUI menu and does not require `ox_lib`. |
| Target interaction does not appear | Set `Config.Interaction = 'target'`.<br>Set `Config.TargetResource` to either `ox_target` or `qb-target`.<br>Make sure the selected target resource starts before SMDZ Speed Radars. |
| Target icons appear incorrectly | Make sure you are running the latest build and the selected target system is supported.<br>Do not mix `ox_target` and `qb-target` APIs in custom edits. |
| Permanent radars disappear after a resource/server restart | Check `[SQL]`, `[WARN]`, and `[ERROR]` logs during startup.<br>Confirm the database connection is valid and the database user can `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `ALTER`, and create indexes.<br>Permanent radars are only added to runtime state after SQL persistence succeeds. |
| A newly created permanent radar appears in-game but is not stored | Review the SQL insert/verification debug prints.<br>The current build verifies the inserted row before accepting the radar as persistent.<br>If verification fails, fix the first SQL error rather than manually recreating the radar. |
| SQL migration fails | Back up the database first.<br>Import the current `install_files/smdz_speedradars.sql` if necessary.<br>Make sure the database account has `ALTER TABLE` and index permissions.<br>Do not mix schemas from older unreleased builds. |
| Radar identifiers look incorrect after upgrading | Permanent radar IDs are kept in the short `1–999` range.<br>Allow the automatic migration to complete and review SQL logs before manually editing radar IDs. |
| Fine IDs or identifiers are truncated | Use the current installer/migrations. Identifier-related SQL columns are designed with enough space for long framework identifiers.<br>Do not downgrade those columns manually. |
| Evidence photo is missing | Confirm `screencapture` is installed and started before SMDZ Speed Radars.<br>Review evidence authorization and capture debug logs.<br>Make sure the player actually entered the valid lens-facing capture cone. |
| Evidence photo points in the wrong direction | Verify the radar heading and the prop-specific lens offset.<br>The evidence camera uses the physical radar lens direction and no longer rotates to chase vehicles outside its real capture direction. |
| Radar photographs a vehicle from behind | Make sure you are using the latest build and check `Config.CaptureZone`.<br>The client and server both validate the lens-facing cone before accepting the violation. |
| Radar does not fine a speeding vehicle | Confirm the radar is enabled, the vehicle exceeds the configured limit plus tolerance, the driver is inside the valid capture cone, and the vehicle/player is not exempt.<br>Also verify the player is actually driving the vehicle. |
| Emergency vehicles are still being fined | Review `Config.Exemptions.emergencyVehicles` and the configured emergency vehicle class.<br>If `requireSiren = true`, the exemption only applies while the siren requirement is satisfied. |
| Police/EMS vehicles are being fined | Check `Config.Exemptions.jobs.values`, vehicle-class exemptions, and whether the correct player job is being returned by `smdz_bridge`. |
| Whitelisted plate is still fined | Plate comparisons are normalized, but the configured value must still match the real plate text.<br>Check for incorrect plate values or custom vehicle scripts that change plate data. |
| Vehicle labels appear through walls/objects | Install the latest build.<br>The live radar view uses FOV, on-screen, camera raycast, and entity occlusion checks.<br>Custom MLOs or unusual collision meshes can still affect GTA/FiveM visibility natives. |
| Vehicle labels do not appear in live radar view | The vehicle must be within configured range, inside the camera FOV, visible on screen, and have a valid line of sight from the camera.<br>Vehicles intentionally hidden behind geometry will not display information. |
| Zoom or night vision does not work | Check the configured live-radar controls and ensure another resource is not consuming the same control.<br>Night vision starts disabled every time the radar camera opens and is reset when leaving the view. |
| Manual flash does not trigger | Verify you are currently inside the live portable-radar view, the radar is still valid/enabled, and the manual-flash cooldown has expired. |
| Placement preview does not follow the mouse correctly | Make sure the player is aiming at a valid surface inside the placement raycast range.<br>Custom camera/resource control scripts may interfere with raycast direction or disabled controls. |
| `BACKSPACE` does not cancel placement | Verify another resource is not intercepting the same control.<br>The current placement flow uses `BACKSPACE` instead of `ESC` to avoid opening the GTA pause map. |
| Radar warning sign cannot be placed far enough | Review the warning-sign placement distance/raycast settings in `config.lua`.<br>The current build supports a significantly extended placement distance compared with the original version. |
| BzZz portable radar prop does not load | Confirm the original licensed BzZz stream assets are present in `stream/` and the file name matches `stream/bzzz_police_prop_radar.ytyp` from `fxmanifest.lua`.<br>Read `stream/credits.md` for the creator and license references. |
| `prop_cctv_pole_03` captures from the wrong height | Do not replace its configured lens/flash offset with the generic camera offset.<br>This prop is a tall pole and requires an elevated origin near the camera head. |
| Payment NPC does not appear | Verify the configured ped model and coordinates in `config.lua`.<br>Make sure the client is within streaming range and check client debug output for invalid model/load errors. |
| Pressing `E` at a payment NPC opens the wrong menu | In TextUI mode, payment NPCs should open the fine-registry NUI directly.<br>Replace the complete resource if an old `ox_lib` context-menu build is still installed. |
| Fine registry does not scroll correctly | Install the latest `web/dist` build.<br>Both the fine list and detail panel use independent custom scroll areas.<br>Clear the FiveM client cache if an old NUI version is still displayed. |
| Native Windows scrollbar appears in the UI | Replace the complete compiled `web/dist` folder with the current release and clear FiveM cache if necessary.<br>The current UI provides custom Chromium scrollbar styling. |
| `/radars` administration UI does not scroll correctly | Install the latest frontend build.<br>The administration panel and radar list have dedicated scroll handling; stale NUI files are the most common cause. |
| Bank payment fails | Confirm the active `smdz_bridge` banking or framework provider supports the configured account and money operations.<br>Review payment and rollback debug logs. |
| Cash payment fails | Confirm the player has sufficient cash and that the active framework provider supports the required money operations through SMDZ Bridge. |
| Fine remains pending after payment | Check for SQL update errors or money rollback logs.<br>The payment flow uses server-side state transitions and should only finalize after both money and database operations succeed. |
| Discord webhook is not sending | Confirm `ServerConfig.Discord.enabled = true`, the specific webhook URL is not empty, and the URL is valid.<br>Each action can use its own webhook, so one empty URL does not disable the others. |
| Evidence image is missing from Discord | Confirm the fine was created with a valid evidence photo and that Discord accepted the multipart attachment.<br>If no valid image is available, the logger can fall back to a normal embed. |
| Admin command permission denied | Verify the configured ACE permission and/or framework admin groups.<br>Confirm SMDZ Bridge detects the expected group/permission for the player. |
| Radar group enable/disable does not update | Check SQL update logs and confirm the group name matches the stored radar group exactly.<br>The server must successfully persist the group state before synchronization. |
| Duplicated radar is not saved | Complete the new placement normally and review the SQL insert logs.<br>A duplicated radar receives its own database ID and is not persistent until the new placement is confirmed and stored. |
| UI colors do not change | Edit `config_style_ui.lua`, not the compiled CSS directly.<br>Restart the resource after changing the configuration so the runtime palette is sent to the NUI again. |
| UI still shows an older version after updating | Replace the full resource, especially `web/dist`, restart the resource, and clear FiveM client cache.<br>Do not merge new files over an old partially modified frontend. |
| Debug console is too verbose | After installation and testing are complete, set `Config.Debug = false` in `config.lua`. |
| Resource performance is higher than expected | Test without unrelated client scripts first.<br>Live vehicle scanning only runs while the radar camera is active, while normal world interaction/detection uses configurable intervals and streaming distances.<br>Use FiveM resmon to identify the actual resource consuming time. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
| --- | --- |
| Does SMDZ Speed Radars support ESX? | Yes. ESX compatibility is handled through the mandatory `smdz_bridge` framework module. |
| Does it support QBCore and Qbox? | Yes. QBCore and Qbox are supported through `smdz_bridge`, depending on the providers available in your installed bridge version. |
| Is `smdz_bridge` optional? | No. `smdz_bridge` is a mandatory dependency and the resource is designed around it. |
| Does the script require `ox_lib`? | No. The current version does not require `ox_lib`. Portable-radar TextUI interactions use a custom SMDZ NUI menu. |
| Which target systems are supported? | `ox_target` and `qb-target` are supported locally by SMDZ Speed Radars. Target integration is not routed through SMDZ Bridge. |
| Can I use the script without a target system? | Yes. `Config.Interaction = 'textui'` is the default mode and uses the TextUI provider detected through `smdz_bridge`. |
| What inventories are supported? | Inventory compatibility is handled by `smdz_bridge`. The exact supported providers depend on your installed bridge version. `ox_inventory` uses the included `smdz_speedradars.usePortableRadar` client export. |
| Are permanent radars saved after restart? | Yes. Administrative/permanent radars are stored in SQL and loaded again when the resource starts. |
| Are portable radars stored in SQL? | No. Portable radars are runtime-only by design, preventing unnecessary permanent database records. |
| Can officers pick up portable radars again? | Yes. Authorized interaction with a portable radar includes the pickup action. |
| Can I change the speed limit of a portable radar? | Yes. Officers can configure the portable radar after deployment, subject to server-side validation. |
| Can I disable automatic fines? | Yes. Portable radars support an automatic-fine mode that can be disabled when the officer wants to use the radar mainly for monitoring/manual enforcement. |
| Does the radar take real evidence photos? | Yes. Evidence capture uses the required `screencapture` resource and takes the image from the radar lens perspective. |
| Can a radar photograph a vehicle behind it? | The current capture system validates the physical lens-facing cone on both client and server, so the violation should only be accepted when the vehicle enters the monitored direction. |
| Can players see vehicle information through walls while using the radar camera? | The live camera uses FOV, screen visibility, raycast, and entity-occlusion checks to prevent labels through normal solid geometry. |
| Does the live radar camera support zoom? | Yes. Officers can manually move the camera within configured limits and use an extended zoom range. |
| Does it have night vision? | Yes. Night vision is available in the portable radar camera, is disabled by default, and resets when leaving the view. |
| Can officers manually trigger the radar flash? | Yes. The live radar view includes a synchronized manual flash control with a configurable cooldown. |
| Which radar props are included in the selector? | `p_tv_cam_02_s`, `prop_tv_cam_02`, `prop_cctv_pole_03`, and `bzzz_police_prop_radar_c`. |
| Can I add more radar props? | Technically yes, but each custom prop should have a correct lens/flash offset or the preview, flash, and evidence camera may originate from the wrong position. |
| Why does `prop_cctv_pole_03` use a different offset? | It is a tall CCTV pole, so its camera origin must be positioned near the top camera head rather than near the model origin. |
| Can staff organize radars by area? | Yes. Permanent radars support custom groups such as Los Santos, Blaine County, Highway, Downtown, or any other configured name. |
| Can staff enable or disable a whole radar group? | Yes. Radar groups can be enabled or disabled together from the administration panel. |
| Can staff duplicate a radar? | Yes. The duplicate action copies the radar configuration and immediately enters placement mode for the new radar. |
| Can emergency vehicles be exempt? | Yes. Exemptions can be configured for emergency vehicles and can optionally require the siren condition. |
| Can specific jobs be exempt? | Yes. Jobs such as police, sheriff, ambulance, or any custom job can be configured in `Config.Exemptions`. |
| Can I whitelist specific license plates? | Yes. Plate exemptions are supported and validated server-side. |
| Can I exempt vehicle classes? | Yes. GTA vehicle classes can be excluded through the exemption configuration. |
| Can players pay fines with cash? | Yes, when the active framework provider supports the required cash operations. |
| Can players pay fines with bank money? | Yes. The resource can use compatible banking/framework money operations through SMDZ Bridge. |
| Where do players pay fines? | The resource includes configurable police and sheriff NPC locations. Each location can optionally display a map blip. |
| Can players review the evidence before paying? | Yes. The fine registry allows players to open the violation, inspect the ticket details, and view the captured evidence photo. |
| Are fine amounts calculated client-side? | No. Sensitive fine logic and payment validation are handled server-side. |
| Are radar and fine IDs readable? | Permanent radar IDs are kept short in the `1–999` range, while public fine IDs are designed to remain readable and unique. |
| Can I change all UI colors? | The primary NUI, ticket, radar overlay, state, world-text, and capture-cone colors are exposed through `config_style_ui.lua`. |
| Does the script include Discord logs? | Yes. Separate webhook URLs can be configured for fines, payments, admin radar actions, portable radar actions, warning signs, and errors. |
| Can Discord fine logs include the evidence image? | Yes. When a valid evidence image exists, the fine-created logger can attach it to the Discord webhook message. |
| Does the script automatically create SQL tables? | Yes. The resource supports automatic table creation/migration, and a manual installer is also included in `install_files/smdz_speedradars.sql`. |
| Can I disable debug prints? | Yes. Set `Config.Debug = false` after installation and testing are complete. |
| Is the BzZz radar prop owned by SMDZ Studios? | No. Third-party BzZz assets remain owned/licensed by their original creator. See `stream/credits.md` and the linked BzZz license page. |
| Can I rename the resource folder? | It is not recommended. Keep the folder name exactly `smdz_speedradars`, especially because inventory exports and integrations reference that resource name. |
| Is the script intended for production servers? | Yes, but server owners should complete normal staging tests first: verify bridge providers, SQL persistence, inventory use, fine payments, evidence capture, and permissions before opening it to players. |



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
