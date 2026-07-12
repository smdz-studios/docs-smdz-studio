<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_lb_smartcab showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_lb_smartcab`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / Qbox / Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>



**Short description:**
SmartCab is an advanced autonomous taxi application for LB Phone that lets players request a driverless vehicle, follow its live arrival, select a map destination, manage Ride+ subscriptions, charge their phone during a journey, and review persistent digital trip receipts.

The resource includes configurable AI driving, economy support, no-service zones, night fares, phone notifications, multilingual UI, SQL history, persistent user settings, and Discord webhook logs.

---

# ⭐ **FEATURES:**

- 🚕 **Fully autonomous taxi service** – Give players a modern driverless transport experience directly inside Los Santos, with automatic pickup, boarding, routing, arrival, and vehicle cleanup.
- 📱 **Native LB Phone application** – SmartCab is delivered as a polished downloadable phone app, complete with live service states, interactive controls, notifications, settings, and digital receipts.
- 🧭 **Smart pickup and destination flow** – The nearest valid taxi is assigned, follows the passenger through a live GPS route, waits for boarding, and drives toward the player's selected map waypoint.
- 🧠 **Realistic AI driving behaviour** – Configurable urban, rural, and highway speed profiles combine with traffic-aware slowdown, braking, stopping distances, and recovery logic for a smoother journey.
- 💳 **Multi-framework economy support** – Built-in compatibility with ESX, QBCore, and Qbox/QBX allows trip fares, cancellation fees, Ride+ plans, and phone charging to use cash, bank, or automatic account selection.
- ⭐ **Ride+ premium membership** – Offer daily, weekly, and monthly plans with configurable discounts, faster arrivals, priority requests, cooldown benefits, and free cancellations.
- 🔋 **In-ride phone charging** – Players can purchase a charging add-on during an active journey and restore their LB Phone battery progressively while they remain inside the SmartCab.
- 🌙 **Dynamic night fares** – Automatically apply a configurable overnight multiplier to eligible journeys and optionally reflect it in the live taximeter.
- 🧾 **Persistent trip history and receipts** – Completed, cancelled, and failed journeys can be stored in SQL with destination, plate, status, reason, fare, add-ons, cancellation fees, and timestamps.
- 🚫 **Configurable no-service zones** – Restrict pickups, destinations, or both inside selected circular areas such as islands, restricted facilities, or unsupported map regions.
- 🌍 **Extensive multilingual support** – Includes English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Brazilian Portuguese, and Turkish.
- 🔔 **Smart LB Phone notifications** – Event-based alerts include throttling and duplicate prevention, helping players stay informed without notification spam.
- 📊 **Detailed Discord webhook logs** – Track requests, pickups, route starts, completions, cancellations, payments, Ride+ activity, charging purchases, and service errors from a protected server-side configuration.
- 🎨 **Professional ready-to-use interface** – The included UI is optimized for LB Phone and ready for production use. Interface design or source-level UI modifications are available only with an **Open Source** version of the resource.
- 🛡️ **Server-authoritative validation** – Sensitive actions such as billing, subscriptions, history access, charging, and service state changes are checked server-side to reduce abuse and invalid requests.

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended artifact.
- **Framework:** ESX, QBCore, Qbox/QBX, or Standalone.
- **Dependencies:**
  - `lb-phone` – required to register, install, open, notify, read battery data, and display the SmartCab application.
  - `oxmysql` – required for trip history, Ride+ subscriptions, and persistent application settings.
  - A valid and streamed taxi vehicle model. The default model is `vivanite2`.

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_lb_smartcab.zip`
2. Extract the folder into your FiveM `resources` directory, for example:

```text
resources/[smdz]/smdz_lb_smartcab
```

The folder name must remain exactly `smdz_lb_smartcab`. The built-in resource validation will stop the script if the folder is renamed.

3. Import the included `smdz_smartcab.sql` file into your database. The resource also checks, creates, and updates the required tables automatically, but importing the SQL file before the first start is recommended.

4. Add the dependencies and resource to your `server.cfg` in the correct order:

```bash
## Database
ensure oxmysql

## Framework - enable only the framework used by your server
ensure es_extended
# ensure qb-core
# ensure qbx_core

## Phone
ensure lb-phone

## SMDZ Studios
ensure smdz_lb_smartcab
```

5. Restart your server or start the resource manually:

```bash
start smdz_lb_smartcab
```

6. Check the server console startup banner and health checks. Confirm that LB Phone, oxmysql, the selected framework, taxi spawn points, locale, and no-service zones are detected correctly.

7. Join the server, open LB Phone, enter its app store, and install **SmartCab**. The application is free by default because `Config.App.Price` is set to `nil`.

---

# 🗄️ **DATABASE / SQL:**

The script includes SQL persistence:

```sql
-- SMDZ SmartCab unified SQL schema
-- This file includes all required tables for the app.

CREATE TABLE IF NOT EXISTS `smdz_smartcab_trip_history` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `identifier` VARCHAR(180) NOT NULL,
    `firstname` VARCHAR(64) NULL,
    `lastname` VARCHAR(64) NULL,
    `fullname` VARCHAR(128) NULL,
    `vehicle_model` VARCHAR(64) NOT NULL,
    `vehicle_plate` VARCHAR(20) NULL,
    `status` VARCHAR(32) NOT NULL,
    `reason` VARCHAR(128) NULL,
    `reason_code` VARCHAR(64) NULL,
    `destination` VARCHAR(128) NULL,
    `cost` INT NOT NULL DEFAULT 0,
    `trip_cost` INT NOT NULL DEFAULT 0,
    `addon_cost` INT NOT NULL DEFAULT 0,
    `phone_charging_fee` INT NOT NULL DEFAULT 0,
    `cancellation_fee` INT NOT NULL DEFAULT 0,
    `boarded` TINYINT(1) NOT NULL DEFAULT 0,
    `requested_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `completed_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    INDEX `idx_identifier` (`identifier`),
    INDEX `idx_requested_at` (`requested_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `smdz_smartcab_ride_plus` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `identifier` VARCHAR(180) NOT NULL,
    `phone_number` VARCHAR(32) NULL DEFAULT NULL,
    `is_active` TINYINT(1) NOT NULL DEFAULT 0,
    `plan_type` VARCHAR(32) NULL DEFAULT NULL,
    `expires_at` DATETIME NULL DEFAULT NULL,
    `free_cancel_used` INT UNSIGNED NOT NULL DEFAULT 0,
    `free_cancel_reset_at` DATETIME NULL DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `ux_identifier` (`identifier`),
    KEY `idx_phone_number` (`phone_number`),
    KEY `idx_active_expires` (`is_active`, `expires_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `smdz_smartcab_user_settings` (
    `license` VARCHAR(180) NOT NULL,
    `theme_mode` VARCHAR(12) NOT NULL DEFAULT 'dark',
    `silent_mode` TINYINT(1) NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`license`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

The included `smdz_smartcab.sql` file can be imported manually before the first start. SmartCab also performs automatic table checks and compatible migrations when `oxmysql` is available and the configured database user has sufficient permissions.

| Table | Purpose |
|---|---|
| `smdz_smartcab_trip_history` | Stores persistent journey records, passenger information, vehicle data, status, destination, costs, cancellation details, and timestamps. |
| `smdz_smartcab_ride_plus` | Stores Ride+ activation state, selected plan, expiration, phone number, and free-cancellation usage/reset information. |
| `smdz_smartcab_user_settings` | Stores each player's persistent light/dark theme and silent-mode preference. |

---

# ⚙️ **CONFIGURATION:**

The public configuration is located in `config.lua`. Discord webhook information is protected separately inside the server-only `server_config.lua` file.

```lua

```


---

# 🎮 USAGE:

Players use SmartCab entirely through LB Phone. Because `Config.DefaultApp` is `false`, they must first install the application from the phone's app store.

### Commands

| Command             | Description                                  | Permission / Notes              |
|---------------------|----------------------------------------------|---------------------------------|
| `None`              | SmartCab does not register chat commands.    | Open the application through LB Phone. |

### Keybinds

- SmartCab does not register a dedicated FiveM keybind.
- Players use the key configured by the server for LB Phone to open their phone.
- A GTA map waypoint must be placed before starting the destination route.
- The passenger enters the assigned SmartCab normally and must use a passenger seat; the driver seat is reserved for the autonomous driver.

### UI / Menus

The application contains the following player-facing areas and actions:

> The included interface is delivered ready to use. Its design, layout, components, and compiled source cannot be modified in the standard version; UI customization is supported only in an **Open Source** version.

- **Home / Service:** request a SmartCab, view its current status, ETA, vehicle plate, Ride+ state, night fare, and active taximeter.
- **Live pickup flow:** follow the taxi while it approaches, receive an arrival notification, enter the vehicle, and start the route after choosing a waypoint.
- **Trip controls:** cancel an eligible service, begin the destination route, and purchase the phone charging add-on while travelling.
- **History:** review persistent completed, cancelled, and failed journeys with status, date, destination, plate, trip charge, add-on costs, and cancellation fee information.
- **Digital receipts:** open detailed trip information and distinguish the base trip cost from phone charging and cancellation charges.
- **Ride+:** activate or cancel daily, weekly, or monthly plans and view discounts, expiry, priority benefits, and remaining free cancellations.
- **Settings:** save a light or dark theme and enable or disable silent mode for the current player.
- **Confirmations:** sensitive actions such as cancellation, subscription changes, history deletion, and phone charging require UI confirmation.

Normal service flow:

```text
Request taxi → Taxi assigned → Taxi approaching → Taxi arrived →
Passenger boards → Select map waypoint → Start route →
Travel to destination → Trip completed → Receipt saved
```

---

# 🔌 Events & Exports (Developers)

SmartCab uses network events internally between its NUI, client, and server files. They are documented below for maintenance and debugging, but they are **not advertised as a stable public integration API**. External resources should not trigger service, billing, history, or Ride+ events without adding their own validation layer.

### Server Events

```lua
-- Internal example used by the SmartCab client.
-- Do not expose this directly as a public reward, billing, or admin API.
TriggerServerEvent("smartcab:server:requestTaxi")
```

Document all of your server events in a table:

| Event name | Parameters | Description |
|----------------------------|----------------------------------|----------------------------------------------|
| `smartcab:server:requestTaxi` | None | Validates the player, cooldown, active service, no-service zone, Ride+ profile, and creates a new taxi request. |
| `smartcab:server:cancelTaxi` | `payload` table: `reasonCode`, `chargeCancellationFee`, `plate`, `model` | Cancels the active service, applies eligible cancellation logic, updates history, cooldowns, Ride+, and logs. |
| `smartcab:server:startTrip` | `payload` table: `x`, `y`, `z`, `label`, `gameHour`, `distanceMeters` | Validates and charges the configured trip price, applies Ride+ discount and night fare, and authorizes the destination route. |
| `smartcab:server:serviceUpdate` | `payload` table: `state`, `plate`, `destination`, `reason` | Synchronizes pickup, boarding, route, completion, and error states with server history and webhook logs. |
| `smartcab:server:requestHistory` | None | Sends the authenticated player's SmartCab trip history to the client. |
| `smartcab:server:deleteHistoryTrip` | `payload` table: `id` | Deletes one history entry only when it belongs to the requesting player. |
| `smartcab:server:deleteAllHistory` | None | Deletes every SmartCab history entry belonging to the requesting player. |
| `smartcab:server:requestProfile` | None | Resolves framework character data and sends the current profile to the client. |
| `smartcab:server:notificationAction` | `data` table: `action` | Handles supported LB Phone notification actions such as opening the app or requesting cancellation. |
| `smartcab:server:requestUserSettings` | None | Loads the player's persistent theme and silent-mode settings. |
| `smartcab:server:saveUserSettings` | `settings` table: `themeMode`, `silentMode` | Validates, stores, and resynchronizes the player's application settings. |
| `smartcab:server:requestRidePlus` | None | Sends the player's current Ride+ plan, expiry, benefits, and free-cancellation information. |
| `smartcab:server:toggleRidePlus` | `payload` table: `active`, `plan` | Activates or cancels Ride+, validates plan and database state, charges the player, and reverts on payment failure. |
| `smartcab:server:startPhoneCharging` | `payload` table: `plate` | Validates route state, charges the configured add-on price, and authorizes phone charging for the current trip. |

### Client Events

```lua
-- Internal example used by the SmartCab server.
TriggerClientEvent("smartcab:client:openApp", source)
```

List client events the same way:

| Event name | Parameters | Description |
|-----------------------|---------------------|----------------------------------|
| `smartcab:client:requestApproved` | `payload` table | Applies the runtime profile, creates or adopts the assigned taxi, and starts the approach phase. |
| `smartcab:client:requestDenied` | `payload` table: `reason`, `cooldown`, optional zone data | Resets the pending request and displays the correct failure state or notification. |
| `smartcab:client:tripChargeResult` | `payload` table: `ok`, `reason`, `cost`, route data | Starts the destination route after successful server authorization or reports a payment failure. |
| `smartcab:client:ridePlusResult` | `payload` table: `ok`, `reason`, `cost`, `data` | Displays the result of a Ride+ activation or cancellation and refreshes subscription data. |
| `smartcab:client:notify` | `data` table | Sends a throttled and deduplicated LB Phone notification to the player. |
| `smartcab:client:openApp` | None | Opens LB Phone and navigates directly to the SmartCab application. |
| `smartcab:client:syncProfile` | `data` table: `firstname`, `lastname`, `fullname` | Updates the character profile displayed by the application. |
| `smartcab:client:syncHistory` | `history` array | Replaces the local trip history and refreshes the NUI. |
| `smartcab:client:cancelFromNotification` | None | Requests normal client-side cancellation from an actionable phone notification. |
| `smartcab:client:syncUserSettings` | `settings` table | Applies the authoritative persistent theme and silent-mode settings. |
| `smartcab:client:syncRidePlus` | `data` table | Updates Ride+ activation, plan, expiry, benefits, and free-cancellation values. |
| `smartcab:client:syncCooldown` | `payload` table: `seconds` | Updates the remaining taxi request cooldown shown by the app. |
| `smartcab:client:phoneChargingResult` | `payload` table: `ok`, `reason`, `cost` | Starts LB Phone battery charging after approval or displays the add-on payment error. |

### Exports

```lua
-- smdz_lb_smartcab does not register public client or server exports.
-- Integration is currently handled internally through LB Phone exports,
-- NUI callbacks, and the SmartCab network events listed above.
```

Describe each export:

| Export name       | Side    | Parameters                | Returns         | Description                         |
|-------------------|---------|---------------------------|-----------------|-------------------------------------|
| `None`            | —       | —                         | —               | The resource does not expose public exports. |

SmartCab consumes several official LB Phone exports internally, including custom app registration, app opening, notifications, phone number resolution, battery reading, battery updates, and charging state control. These are dependencies used by the resource and are not exports provided by SmartCab itself.

---

# 🧪 **COMMON ISSUES:**

| Issue | Possible cause | Solution |
|---|---|---|
| **Resource validation fails or the resource stops immediately** | The resource folder was renamed, contains a version suffix, or does not match the built-in validation name. | Keep the folder name exactly as `smdz_lb_smartcab`.<br>Do not use names such as `smdz_lb_smartcab-main`, `smdz_lb_smartcab_v2`, or `smdz_lb_smartcab(2)`.<br>Check the red server-console message to compare the expected and detected names. |
| **SmartCab does not appear in LB Phone** | `lb-phone` starts after SmartCab, the app failed to register, the compiled UI files are missing, or another custom app uses the same identifier. | Start `lb-phone` before `smdz_lb_smartcab`.<br>Check the console for app-registration errors.<br>Keep `ui/dist`, `icon.svg`, and the screenshots inside the resource.<br>Because `Config.DefaultApp = false`, install SmartCab manually from the LB Phone app store.<br>Make sure no other app uses the identifier `smartcab`. |
| **The application opens as a blank or broken page** | The protected production build was removed or altered, `ui_page` points to the wrong file, cached assets are outdated, or required files inside `ui/dist` are missing. | Restore the original untouched `ui/dist/index.html` and generated assets.<br>Confirm `fxmanifest.lua` contains `ui_page "ui/dist/index.html"`.<br>Clear the FiveM client cache and restart the resource.<br>Do not edit or rebuild the interface in the standard version; source-level repairs and customization require an **Open Source** version. |
| **Database errors appear or history, Ride+, or settings are not saved** | `oxmysql` is not running, the SQL connection is invalid, required tables are missing, or the database user lacks permissions. | Start `oxmysql` before SmartCab.<br>Import `smdz_smartcab.sql` manually.<br>Confirm the database user can use `CREATE`, `ALTER`, `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.<br>Verify the tables `smdz_smartcab_trip_history`, `smdz_smartcab_ride_plus`, and `smdz_smartcab_user_settings` exist.<br>Review migration errors in the server console. |
| **The framework is not detected** | The configured framework name is incorrect, its resource starts too late, or its export/player object is unavailable. | Keep `Config.Framework = "auto"` or set it explicitly to `esx`, `qbcore`, or `qbx`.<br>Start `es_extended`, `qb-core`, or `qbx_core` before SmartCab.<br>Check that the framework resource is fully initialized and that its normal player object can be obtained. |
| **Player payments do not work** | The framework bridge is unavailable, the billing account is invalid, or the player does not have enough money. | Use only `bank`, `cash`, or `auto` in billing settings.<br>Confirm the selected framework is detected correctly.<br>Check the player balance and the configured trip, cancellation, Ride+, and charging prices.<br>In Standalone mode, payments are treated as approved because no economy provider exists. |
| **A taxi request is denied** | The player already has an active service, a cooldown is active, the pickup is inside a no-service zone, or no valid spawn point is available. | Check the status shown in the application.<br>Review `Config.Service.CooldownSeconds`.<br>Confirm the player is outside enabled pickup restriction zones.<br>Add valid road-based entries to `Config.Taxi.SpawnPoints`.<br>Enable `Config.Debug` and review the exact denial reason. |
| **The taxi does not spawn** | The vehicle model is invalid, every spawn point is occupied, coordinates are unsuitable, or another resource removes the spawned entity. | Confirm `Config.Taxi.VehicleModel` exists and is streamed.<br>Place spawn points on accessible roads outside interiors.<br>Adjust `Config.Taxi.SpawnPointBusyRadius` if normal traffic blocks all locations.<br>Add several spawn points around the map.<br>Check NPC cleanup, anti-cheat, population, and vehicle-control resources for conflicts. |
| **The wrong vehicle appears or the default model is not used** | The configured model cannot be loaded or a fallback vehicle is being used. | Verify that `vivanite2`, or the custom value in `Config.Taxi.VehicleModel`, is installed and streamed correctly.<br>Check spelling and model hashes.<br>Review client warnings related to model loading or fallback behavior. |
| **The taxi drives poorly, becomes stuck, or ignores the expected route** | The GTA navigation mesh cannot reach the pickup/destination, speeds are excessive, driving flags are unsuitable, or another resource takes entity control. | Use road-connected pickup and destination locations.<br>Avoid narrow alleys, underground interiors, closed gates, and unsupported custom-map areas.<br>Adjust `DrivingStyle`, speed profiles, `TrafficSlowRadius`, and `TrafficSlowMultiplier` carefully.<br>Do not configure unrealistic approach or cruise speeds.<br>Check for traffic-density, NPC-control, cleanup, or anti-cheat conflicts. |
| **The taxi arrives but the player cannot continue** | The passenger has not entered the assigned vehicle, is occupying the driver seat, or the local service state did not update. | Enter the assigned SmartCab using a passenger seat.<br>Do not attempt to take the autonomous driver seat.<br>Wait for the application to show the boarding state.<br>Check client errors if the state remains stuck after entering. |
| **The passenger cannot start the destination route** | No map waypoint is selected, the player is outside the taxi, the waypoint is restricted, or the trip charge was rejected. | Place a GTA map waypoint first.<br>Remain inside the assigned SmartCab in a passenger seat.<br>Move the waypoint outside enabled destination no-service zones.<br>Confirm the player can pay the configured trip cost and review the payment-result notification. |
| **The taxi never completes the trip at the destination** | The destination radius is too small, the route ends in an inaccessible location, or the autonomous vehicle cannot get close enough to the waypoint. | Increase `Config.Taxi.DestinationRadius` moderately.<br>Place the waypoint on an accessible road rather than inside a building, pedestrian area, or blocked custom-map location.<br>Check whether another script is freezing or relocating the vehicle. |
| **Manual cancellation is unavailable** | The current state does not allow player cancellation or the player is already inside the SmartCab. | Cancel before boarding when the application offers the action.<br>Once the passenger is inside, normal manual cancellation may be blocked intentionally to protect the trip state.<br>Automatic service failures continue to use their own cancellation paths. |
| **A cancellation fee was charged unexpectedly** | The passenger had already boarded, Ride+ free cancellations were exhausted, or the configured fee/account was changed. | Review `Config.Service.CancellationFee` and `Config.Service.BillingAccount`.<br>The fee is only eligible after the passenger has boarded the active service.<br>Check the Ride+ page for remaining free cancellations.<br>Open the digital receipt to see the recorded cancellation reason and amount. |
| **A cancellation was recorded without a fee** | The service was cancelled before the passenger boarded, a Ride+ free cancellation was consumed, or the cancellation reason bypasses the fee. | This can be expected behavior.<br>Pre-boarding cancellations do not charge the normal cancellation fee.<br>Ride+ may consume an available free cancellation first.<br>Automatic technical failures can also be stored without billing the player. |
| **Night fare appears incorrect** | The user is comparing it with real-world time, the configured range crosses midnight, or the multiplier is disabled for the meter. | SmartCab uses the in-game hour supplied with the trip request.<br>Ranges such as `22` to `6` are treated as overnight periods.<br>Review `Enabled`, `StartHour`, `EndHour`, `Multiplier`, and `ApplyToMeter` under `Config.Service.NightFare`. |
| **Ride+ discount and the displayed meter do not match exactly** | The server charges a configured flat trip price while the visible taximeter calculates base fare, distance, and time independently. | Configure `Config.Service.TripCost` and `Config.Service.Meter` so their intended presentation is consistent.<br>Ride+ discount and night fare are applied to the server-side trip cost.<br>The live meter is primarily a client-facing journey calculation and should not be assumed to be the authoritative server charge. |
| **Ride+ cannot be activated** | Ride+ is disabled, the selected plan does not exist, the player cannot pay, the database is unavailable, or another activation request is still pending. | Set `Config.RidePlus.Enabled = true`.<br>Use a plan declared in `Config.RidePlus.Plans`.<br>Confirm `oxmysql` and the Ride+ table are available.<br>Check the configured billing account and player balance.<br>Wait for the current request to finish before pressing the activation button again. |
| **Ride+ benefits or free cancellations do not update** | The server profile did not synchronize, the subscription expired, or persistent identifiers changed. | Reopen the application or reconnect to refresh authoritative Ride+ data.<br>Check the subscription expiry date in the database.<br>Confirm the framework returns a stable character identifier.<br>Review `ResetHours` and `Amount` under `Config.RidePlus.FreeCancellations`. |
| **Phone charging cannot be purchased** | Charging is disabled, the route is not active, the player left the assigned taxi, it was already purchased, or payment failed. | Enable `Config.Service.PhoneCharging.Enabled`.<br>Start the destination route and remain inside the assigned SmartCab.<br>The add-on can only be purchased once per journey.<br>Check the charging price, billing account, and player balance. |
| **Phone battery does not increase after purchasing charging** | Required LB Phone battery/charging exports are unavailable, the player exited the taxi, the trip ended, or the battery is already full. | Confirm the installed LB Phone version supports the battery and charging functions used by SmartCab.<br>Remain inside the vehicle while the route is active.<br>Review `BatteryGainPerMinute`.<br>Charging stops automatically after exiting, completing the trip, or reaching 100% battery. |
| **Trip history is empty or incomplete** | The database request failed, the player identifier changed, the trip did not reach a recorded state, or records were deleted. | Check `oxmysql` and the trip-history table.<br>Confirm the framework provides a persistent character identifier.<br>Complete or cancel a test journey and inspect the server console.<br>Remember that history is private to the current player's identifier. |
| **A player can see another player's trip history** | Custom changes removed identifier ownership checks or directly exposed internal database/event logic. | Restore the original ownership validation in history requests and deletion events.<br>Do not expose SmartCab internal server events as unrestricted public APIs.<br>Review any third-party edits made to server callbacks or SQL queries. |
| **Theme or silent mode is not saved** | The user-settings table is missing, SQL writes fail, or the server cannot resolve the player's identifier. | Verify `smdz_smartcab_user_settings` exists.<br>Check `oxmysql` errors and framework identifier resolution.<br>Change the setting again, close the app, and reopen it to test synchronization. |
| **Notifications are missing** | Notifications are globally disabled, the specific event key is disabled, silent mode is active, or LB Phone notifications are not functioning. | Set `Config.Notifications.Enabled = true`.<br>Enable the relevant entry in `Config.Notifications.Events`.<br>Disable silent mode in SmartCab settings.<br>Confirm other custom LB Phone applications can send notifications. |
| **Notifications are repeated or delayed** | The minimum interval and deduplication window are filtering messages, or custom edits trigger the same event multiple times. | Review `Config.Notifications.MinimumIntervalMs` and `Config.Notifications.DedupeWindowMs`.<br>Check client/server logs for duplicated state updates.<br>Avoid triggering internal notification events manually from external resources. |
| **Discord webhook logs are not sent** | The webhook is disabled, its URL is invalid, outbound HTTP is blocked, or the webhook was deleted. | Configure the webhook only in `server_config.lua`.<br>Set `ServerConfig.Webhook.Enabled = true` and provide a valid `Url`.<br>Check server outbound HTTP access.<br>Create a fresh Discord webhook if the existing one was removed or regenerated. |
| **Webhook embeds arrive without some information** | Optional profile, vehicle, route, Ride+, or payment data was unavailable for that event. | Check framework profile resolution and the event state that generated the log.<br>Not every log type contains the same fields.<br>Review custom edits to webhook field configuration and payload construction. |
| **The script works only after restarting it manually** | Resource order is incorrect and a required dependency is not ready during initial registration. | Start `oxmysql`, the selected framework, and `lb-phone` before `smdz_lb_smartcab` in `server.cfg`.<br>Avoid wildcard resource-order setups that start SmartCab before its dependencies. |
| **Debug information is not visible** | `Config.Debug` is disabled. | Set `Config.Debug = true` temporarily and restart the resource.<br>Reproduce the issue and collect client and server console output.<br>Disable debug mode again on a production server after troubleshooting. |

---

# ❓ **FAQ:**

| Question | Answer |
|---|---|
| **Which frameworks are supported?** | ESX, QBCore, Qbox/QBX, and Standalone are supported. `Config.Framework = "auto"` attempts to detect the active framework automatically. |
| **Can the script run without a framework?** | Yes. The taxi service and application can operate in Standalone mode. Because no framework economy exists in that mode, configured payments are treated as approved rather than removing money from a player account. |
| **Is LB Phone required?** | Yes. SmartCab is built as a custom LB Phone application and uses LB Phone for registration, installation, opening, notifications, phone information, battery state, and charging behavior. |
| **Is oxmysql required?** | Yes. It stores trip history, Ride+ subscriptions, free-cancellation data, and persistent user settings. |
| **Does the resource folder name matter?** | Yes. The folder must be named exactly `smdz_lb_smartcab`. Renaming it causes the built-in resource validation to stop the script. |
| **Is SmartCab installed automatically on every phone?** | Not by default. `Config.DefaultApp = false`, so players install it through the LB Phone app store. Set the option to `true` only when you intentionally want it registered as a default app and your LB Phone setup supports that behavior. |
| **Can I charge players to install the application?** | Yes. Set a value in `Config.App.Price`. The default value is `nil`, which makes the application free to install. |
| **Can I change the application name, icon, description, and screenshots?** | Exposed store metadata can be adjusted through `Config.App` where supported. The actual application interface, visual design, compiled assets, layout, and source cannot be modified in the standard version; complete UI customization is available only in an **Open Source** version. |
| **Can I change the custom app identifier?** | It is technically possible, but not recommended. `Config.Identifier` is tied to the LB Phone registration and NUI integration. Changing it may require coordinated edits in multiple files. |
| **Does SmartCab register any chat commands?** | No. Players interact with the resource entirely through the LB Phone application. |
| **Does SmartCab register a dedicated keybind?** | No. Players use their normal LB Phone keybind, then open SmartCab from the phone. |
| **How does a normal trip work?** | The player requests a taxi, waits for it to arrive, enters a passenger seat, places a GTA map waypoint, starts the route, travels to the destination, and receives a saved digital receipt when the journey ends. |
| **Does the player need to select a waypoint?** | Yes. A valid GTA map waypoint is required before the destination route can start. |
| **Can players drive the SmartCab themselves?** | No. The driver seat is intended for the autonomous driver. Players should enter a passenger seat. |
| **Can I use a custom taxi vehicle?** | Yes. Change `Config.Taxi.VehicleModel` to a valid installed and streamed vehicle model. Test its dimensions, seats, handling, and AI navigation before using it in production. |
| **What happens if the configured vehicle model is invalid?** | The client may warn about the failed model and use its fallback behavior when available. For reliable operation, always stream and validate the configured model. |
| **How are taxi spawn locations configured?** | Add fixed `{ x, y, z, w }` entries to `Config.Taxi.SpawnPoints`. Use accessible road positions and distribute several points around the areas where players normally request the service. |
| **Does SmartCab reuse a permanent taxi fleet?** | The client contains optional fleet-related runtime logic, but the supplied public `config.lua` does not expose a complete `Config.Taxi.Fleet` section. Do not advertise or rely on a configurable persistent fleet unless you implement and test that configuration yourself. |
| **Can I restrict SmartCab in certain areas?** | Yes. `Config.NoServiceZones` supports circular zones and can block pickups, destinations, or both. Each zone can be enabled individually and can optionally consider height. |
| **Can I create polygon-shaped no-service zones?** | Not with the supplied configuration. The included no-service system uses circular zones defined by center coordinates and radius. |
| **How is the trip price calculated?** | The authoritative server charge is primarily based on `Config.Service.TripCost`, with optional Ride+ discount and night-fare multiplier. The visible taximeter separately calculates configured base, distance, and time values for the interface. |
| **Does the taximeter automatically determine the exact server charge?** | No. In the supplied version, the live meter is mainly a client-facing calculation. The server-side trip charge uses the configured flat trip cost and applicable modifiers. |
| **When is the trip charged?** | With `Config.Service.ChargeOnTripStart = true`, the configured server-side trip cost is charged when the player starts the destination route and the server approves it. |
| **Which payment accounts are supported?** | `bank`, `cash`, and `auto` are supported through the framework bridge. The exact behavior depends on the active framework implementation. |
| **When is a cancellation fee charged?** | The normal cancellation fee is eligible only after the player has boarded the active SmartCab. Cancelling before boarding does not use the standard fee. |
| **Can Ride+ prevent a cancellation fee?** | Yes. When free cancellations are enabled and the player has one remaining, an eligible cancellation can consume that benefit instead of charging the configured fee. |
| **What is Ride+?** | Ride+ is the optional subscription system. It can provide trip discounts, faster taxi behavior, request priority, cooldown benefits, and a configurable number of free cancellations. |
| **Which Ride+ plans are included?** | The default configuration contains daily, weekly, and monthly plans. Their duration and price can be changed in `Config.RidePlus.Plans`. |
| **Can I add another Ride+ plan?** | Server-side plan values can be extended carefully, but displaying a completely new plan correctly may require UI source changes. Any interface modification needed for a custom plan is supported only in an **Open Source** version. |
| **When does Ride+ expire?** | Its expiration is calculated from the selected plan duration and stored persistently in the database. Expired subscriptions are not treated as active. |
| **How do free Ride+ cancellations reset?** | `Config.RidePlus.FreeCancellations.ResetHours` defines the reset interval, while `Amount` defines how many are restored for an eligible active subscription. |
| **Can players charge their phone during a trip?** | Yes, when `Config.Service.PhoneCharging.Enabled = true`. The destination route must be active and the player must remain inside the assigned SmartCab. |
| **Can phone charging be purchased more than once per journey?** | No. The add-on is limited to one purchase per active trip. |
| **When does phone charging stop?** | It stops when the player exits the taxi, the route ends, the resource state resets, or the battery reaches its maximum value. |
| **Does SmartCab save trip history?** | Yes. Completed, cancelled, and relevant failed journeys can be stored in `smdz_smartcab_trip_history` and displayed in the application. |
| **Is trip history shared between players?** | No. History queries and deletion actions are scoped to the authenticated player's persistent identifier. |
| **Can players delete their history?** | Yes. The application supports deleting an individual receipt or all SmartCab history belonging to the current player. |
| **Are theme and silent mode persistent?** | Yes. They are stored in `smdz_smartcab_user_settings` and synchronized when the player opens or uses the application. |
| **Which languages are included?** | English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Brazilian Portuguese, and Turkish are included. Missing keys fall back to English. |
| **Can I add another language?** | Existing exposed locale files can be maintained using the same keys. Adding language support that requires changes to compiled UI translations, layout, or source code is possible only in an **Open Source** version. |
| **Does SmartCab support Discord logs?** | Yes. Configure them in the server-only `server_config.lua` file. Logs can cover requests, pickup states, routes, completions, cancellations, charging, Ride+, billing, and service errors. |
| **Why is the webhook stored in `server_config.lua`?** | Keeping it server-side prevents the webhook URL from being sent to clients through shared Lua files. Do not move private webhook credentials into `config.lua` or UI assets. |
| **Does the resource expose public exports?** | No. The supplied version does not register public client or server exports. |
| **Can another script trigger SmartCab internal events?** | Technically network events can be referenced, but they are not documented as a stable public API. External integrations should add their own secure, validated server wrapper rather than triggering billing or service events directly. |
| **Can I rename the network events?** | Yes, but every matching client, server, and NUI reference must be updated consistently. Renaming only one side will break synchronization. |
| **Is UI customization included with the standard version?** | No. The standard version includes the finished production interface only. Custom colors beyond exposed settings, layouts, components, animations, icons, and React source changes require an **Open Source** version. |
| **Can I modify the React interface?** | Not in the standard version. The included React/Vite interface is delivered as a protected, ready-to-use production build. Editing its design, layout, components, styles, assets, or source is supported only in an **Open Source** version. |
| **Should I edit or rebuild the included UI development files?** | No, not in the standard version. Keep the original runtime files intact and do not attempt to rebuild or replace the protected interface. Development, recompilation, and source-level UI maintenance are intended only for an **Open Source** version. |
| **How can I diagnose a problem?** | Temporarily set `Config.Debug = true`, restart the resource, reproduce the issue, and collect both client F8 and server-console logs. Also check LB Phone, framework, oxmysql, and conflicting NPC/vehicle resources. |
| **Is the resource OneSync compatible?** | It is designed around normal modern FiveM networked entities and should be used on a current recommended artifact. Test entity ownership and cleanup under the OneSync mode and population settings used by your server. |
| **Can another cleanup script delete the SmartCab?** | Yes. Aggressive NPC, vehicle, or population cleanup resources can remove or take control of the taxi or autonomous driver. Add exclusions or adjust cleanup rules when necessary. |
| **Do I need to import the SQL manually?** | Manual import is recommended. The resource also contains automatic table checks and migrations, but those require a working `oxmysql` connection and sufficient database permissions. |
| **Can I change the database table names?** | Only by updating every corresponding SQL query, migration, and schema reference in the server code and SQL file. Keeping the default names is strongly recommended. |
| **What should I include when requesting support?** | Provide the exact resource version, framework and version, LB Phone version, oxmysql version, relevant configuration values, reproduction steps, client F8 errors, server-console errors, and any modifications made to the original files. |


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
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*
