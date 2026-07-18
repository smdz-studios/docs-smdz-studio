<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/xG1eruDUARc"
    title="smdz_lb_smartcab showcase"
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

[![](https://badges.5metrics.dev/smdz_lb_smartcab/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_lb_smartcab) | [![](https://badges.5metrics.dev/smdz_lb_smartcab/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_lb_smartcab)

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

---

# 📦 **REQUIREMENTS:**

- **FiveM server:** latest recommended artifact.
- **Framework:** ESX, QBCore, Qbox/QBX, or Standalone.
- **Dependencies:**
  - `lb-phone` – required to register, install, open, notify, read battery data, and display the SmartCab application.
  - `oxmysql` – required for trip history, Ride+ subscriptions, and persistent application settings.
  - A valid and streamed taxi vehicle model. The default model is `vivanite2`. (INCLUDED IN THE GTA 5 BASE GAME)

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
Config = {}

--[[
    ================================================================
      SMDZ STUDIOS - SMARTCAB CONFIGURATION
    ================================================================

      INDEX
      [01] Core
      [02] App Store / Branding
      [03] Framework
      [04] Localization
      [05] Interface
      [06] Taxi Vehicle / AI Driving
      [07] SmartCab Service
      [08] Ride+ Subscription
      [09] No Service Zones
      [10] Phone Notifications
      [11] Debug

      Notes:
      - Webhooks are protected in server_config.lua.
      - SQL table names are fixed internally and are not configurable.
      - Fallback locale is fixed internally to English.
    ================================================================
]]

-- ================================================================
-- [01] CORE
-- ================================================================
Config.Identifier = "smartcab" -- Internal app identifier used by LB Phone registration and NUI messaging.
Config.DefaultApp = false -- Keep false so the app is installed from the LB Phone store.

-- ================================================================
-- [02] APP STORE / BRANDING
-- ================================================================
Config.App = {
    Name = "SmartCab", -- Display app name shown in LB Phone.
    DescriptionKey = "ui.app_store_description", -- Locale key used for the app store description.
    Size = 18576, -- App package size metadata shown in store.
    Price = nil, -- App price in store; nil means free.
    IconPath = "ui/dist/icon.svg", -- Relative path to app icon inside this resource.
    Screenshots = {
        "ui/dist/screenshot-light.png", -- Screenshot used in app store (light variant).
        "ui/dist/screenshot-dark.png" -- Screenshot used in app store (dark variant).
    }
}

-- ================================================================
-- [03] FRAMEWORK
-- ================================================================
Config.Framework = "auto" -- Framework resolver mode: auto / esx / qbcore / qbx.

-- ================================================================
-- [04] LOCALIZATION
-- ================================================================
Config.Localization = {
    Default = "en" -- Default locale code loaded at startup. Missing keys always fall back to English internally.
}

-- ================================================================
-- [05] INTERFACE
-- ================================================================
Config.UI = {
    ThemeMode = "dark" -- Initial UI theme: dark / light.
}

-- ================================================================
-- [06] TAXI VEHICLE / AI DRIVING
-- ================================================================
Config.Taxi = {
    VehicleModel = "vivanite2", -- Vehicle model hash/name used for the autonomous taxi.
    PlatePrefix = "SCB", -- Prefix used in generated taxi plate numbers.
    ApproachSpeed = 14.0, -- Drive speed while taxi approaches pickup.
    CruiseSpeed = 20.0, -- Drive speed while taxi is en route to destination.
    MaxServiceDistance = 350.0, -- Max allowed service distance for optional distance cancellation.
    CancelOnDistance = false, -- If true, cancel service when player is too far.
    StopRadius = 8.5, -- Distance where taxi fully stops at pickup.
    BrakeDistance = 30.0, -- Distance where taxi starts slowing down.
    DestinationRadius = 16.0, -- Distance considered "destination reached".
    WaitForPassengerMs = 90000, -- Max waiting time for passenger boarding (ms).
    DeleteVehicleOnFinish = true, -- If true, delete service taxi when ride completes.
    SpawnPointBusyRadius = 7.0, -- Radius used to consider a fixed spawn point occupied by another vehicle.
    Driving = {
        RealisticMode = true, -- Enables realistic NPC-like driving behavior tuning.
        DrivingStyle = 786603, -- GTA driving style flag set used by TaskVehicleDriveToCoordLongrange.
        UseZoneSpeedProfile = true, -- If true, adapts cruise speed by urban/highway/rural zone.
        UrbanMaxSpeed = 13.5, -- Max speed (m/s) in dense urban zones (~49 km/h).
        RuralMaxSpeed = 17.5, -- Max speed (m/s) in rural zones (~63 km/h).
        HighwayMaxSpeed = 24.0, -- Max speed (m/s) in highway zones (~86 km/h).
        TrafficSlowRadius = 18.0, -- Radius to detect nearby traffic and reduce speed.
        TrafficSlowMultiplier = 0.72 -- Speed multiplier when nearby traffic is detected.
    },
    SpawnPoints = { -- Fixed taxi spawn points { x, y, z, w }.
        { x = -1324.3838, y = -87.4907, z = 48.7228, w = 4.5525 }, -- Vinewood area.
        { x = -1081.6715, y = 454.6155, z = 76.0917, w = 148.6608 }, -- West Vinewood / Richman.
        { x = -516.0714, y = 273.3665, z = 82.6948, w = 182.7358 }, -- Rockford Hills.
        { x = 681.2192, y = 223.0076, z = 92.9843, w = 164.0809 }, -- Downtown Vinewood.
        { x = 1100.1901, y = -261.3207, z = 68.8301, w = 322.7424 }, -- Mirror Park / East.
        { x = 1198.8584, y = -1064.0302, z = 40.7772, w = 121.5092 }, -- La Mesa.
        { x = 562.0584, y = -1532.1270, z = 28.8665, w = 124.2228 }, -- South LS.
        { x = 735.8459, y = -2123.2239, z = 28.8748, w = 264.4140 }, -- Cypress Flats.
        { x = 775.0417, y = -2978.2288, z = 5.3992, w = 182.6835 }, -- Elysian Island north.
        { x = 1459.1221, y = -2594.9001, z = 48.1246, w = 325.0893 }, -- Port of LS east.
        { x = 1429.0638, y = -2586.3145, z = 47.6401, w = 344.9333 }, -- Port of LS east 2.
        { x = 591.8711, y = -2938.0942, z = 5.6430, w = 180.4672 }, -- Elysian Island west.
        { x = 1271.8892, y = -3330.6636, z = 5.3737, w = 85.6070 }, -- Docks south.
        { x = 1955.8016, y = -1033.8678, z = 89.0282, w = 195.3356 }, -- El Burro Heights hills.
        { x = 857.0336, y = 1278.6771, z = 358.8166, w = 344.9922 }, -- Vinewood hills north.
        { x = 788.2032, y = 2206.1147, z = 51.5828, w = 71.9866 }, -- Grand Senora Desert south.
        { x = -562.9380, y = -1109.4969, z = 21.7783, w = 261.2621 }, -- Little Seoul.
        { x = -183.3697, y = -1755.2721, z = 29.7940, w = 225.2257 }, -- Davis / Strawberry.
        { x = -107.9384, y = -1984.6401, z = 17.6159, w = 173.0829 }, -- Rancho.
        { x = -190.7387, y = -2167.9775, z = 16.3036, w = 10.6406 }, -- Port approach.
        { x = -800.4799, y = -2407.1880, z = 14.1736, w = 148.6633 }, -- LSIA perimeter.
        { x = -880.1287, y = -2602.0959, z = 13.4323, w = 328.5953 }, -- LSIA cargo side.
        { x = -1321.9543, y = -1119.3652, z = 5.7489, w = 0.4981 }, -- Vespucci canals area.
        { x = -3053.0781, y = 172.7624, z = 11.1745, w = 177.7191 }, -- Chumash coast.
        { x = -3063.4790, y = 1731.4188, z = 35.8548, w = 272.9868 }, -- Great Ocean Hwy north.
        { x = -1146.9514, y = 2657.0652, z = 17.3446, w = 249.3839 }, -- Route 68 west.
        { x = -2221.4778, y = 4253.5215, z = 46.0938, w = 52.9301 }, -- Raton Canyon.
        { x = 485.6386, y = 6584.6074, z = 26.2713, w = 203.1979 }, -- Paleto Bay south.
        { x = 2473.1365, y = 5602.4106, z = 44.5392, w = 202.5041 }, -- Grapeseed.
        { x = 2128.3928, y = 4925.5986, z = 40.5545, w = 305.1080 }, -- Grapeseed north.
        { x = 2484.5225, y = 5115.1421, z = 45.4458, w = 89.5626 }, -- Mount Gordo foothills.
        { x = 401.8201, y = -659.8846, z = 28.5033, w = 267.8049 }, -- Textile City, bus stations.
        { x = 1094.2697, y = -3227.4607, z = 5.8962, w = 269.9992 }, -- Terminal.
        { x = -268.1561, y = 6032.5791, z = 31.9888, w = 40.8547 }, -- Paleto North.
        { x = 34.7193, y = -213.5257, z = 52.7269, w = 250.1021 }, -- Hawick.
        { x = 1533.4049, y = 786.3257, z = 77.4268, w = 61.5601 }, -- Los Santos highway.
        { x = 2590.6116, y = 2503.1401, z = 28.6875, w = 266.2703 }, -- Pink Dino, north.
        { x = 3007.0420, y = 3377.3020, z = 73.8709, w = 312.7009 }, -- Humane Labs Road.
        { x = 678.5591, y = 3507.1912, z = 34.1984, w = 292.9465 } -- Route 68 North.
    },
    Blip = {
        Enabled = true, -- Enables taxi blip tracking on map.
        Sprite = 56, -- GTA blip sprite id.
        Color = 5, -- GTA blip color id.
        Scale = 0.85, -- Blip size scale.
        ShortRange = false, -- If true, blip only shows nearby.
        Name = "SmartCab", -- Blip display name.
        Route = true, -- If true, enable route line to taxi blip.
        RouteColor = 5 -- Route line color when Route is enabled.
    }
}

-- ================================================================
-- [07] SMARTCAB SERVICE
-- ================================================================
Config.Service = {
    CooldownSeconds = 0, -- Cooldown between taxi requests (0 disables cooldown completely).
    TripCost = 0, -- Flat trip charge applied before Ride+ discount logic.
    ChargeOnTripStart = true, -- If true, charge trip when route starts.
    CancellationFee = 25, -- Flat fee charged when a player cancels an active SmartCab service. Set 0 to disable the fee.
    BillingAccount = "bank", -- Billing source for trip and cancellation costs: bank / cash / auto.
    PhoneCharging = {
        Enabled = true, -- Enables the paid phone charging add-on after the destination route starts.
        Price = 75, -- Price charged once per trip when the player starts charging their phone during the route.
        BillingAccount = "bank", -- Billing source for the phone charging add-on: bank / cash / auto.
        BatteryGainPerMinute = 5 -- Battery percentage added per minute while the add-on is active. Max battery is fixed internally to 100%.
    },
    NightFare = {
        Enabled = true, -- Enables night fare pricing window.
        StartHour = 22, -- Night fare start hour (0-23).
        EndHour = 6, -- Night fare end hour (0-23), supports overnight ranges.
        Multiplier = 2.0, -- Trip fare multiplier applied while night fare is active.
        ApplyToMeter = true -- If true, taximeter components are also multiplied at night. The night fare banner is always enabled.
    },
    Meter = {
        Enabled = true, -- Enables in-app live fare meter during trip.
        BaseFare = 15, -- Base fare added when destination route starts.
        PerKm = 12, -- Extra fare per kilometer traveled.
        PerMinute = 4, -- Extra fare per minute elapsed in route.
        UpdateMs = 1000, -- Meter recalculation interval in milliseconds.
        StartFromChargedCost = true -- If true, meter starts from charged trip cost when available.
    }
}

-- ================================================================
-- [08] RIDE+ SUBSCRIPTION
-- ================================================================
Config.RidePlus = {
    Enabled = true, -- Enables Ride+ subscription system.
    ChargeOnActivate = true, -- If true, charge selected plan when activating Ride+.
    BillingAccount = "bank", -- Billing source for Ride+ charge: bank / cash / auto.
    DefaultPlan = "monthly", -- Default plan preselected in UI.
    DiscountPercent = 20, -- Discount percent applied to trip cost for active Ride+ users.
    Plans = {
        daily = {
            Days = 1, -- Plan duration in days.
            Price = 49 -- Plan price charged at activation.
        },
        weekly = {
            Days = 7, -- Plan duration in days.
            Price = 199 -- Plan price charged at activation.
        },
        monthly = {
            Days = 30, -- Plan duration in days.
            Price = 299 -- Plan price charged at activation.
        }
    },
    Arrival = {
        Enabled = true, -- Enables Ride+ arrival and route performance boosts.
        ApproachSpeedMultiplier = 1.2, -- Multiplier applied to taxi pickup speed when Ride+ is active.
        CruiseSpeedMultiplier = 1.1 -- Multiplier applied to destination route speed when Ride+ is active.
    },
    Priority = {
        Enabled = true, -- Enables real Ride+ priority benefits.
        CooldownBypass = true, -- If true, active Ride+ players skip the taxi request cooldown.
        CooldownMultiplier = 0.0, -- Cooldown multiplier when CooldownBypass is false. Example: 0.5 = 50% shorter cooldown.
        FleetAssignDistanceMultiplier = 1.35 -- Multiplies local fleet assignment radius for active Ride+ players.
    },
    FreeCancellations = {
        Enabled = true, -- Gives active Ride+ users free player-requested cancellations.
        Amount = 2, -- Number of free cancellations available per reset window.
        ResetHours = 24 -- Hours before the free cancellation allowance resets.
    }
}

-- ================================================================
-- [09] NO SERVICE ZONES
-- ================================================================

Config.NoServiceZones = {
    Enabled = true, -- Enables circular zones where SmartCab requests are blocked.
    CheckPickup = true, -- If true, blocks requests when the player is inside one of these zones.
    CheckDestination = true, -- If true, blocks requests when the selected waypoint destination is inside one of these zones.
    Zones = {
        {
            id = "cayo_perico", -- Unique zone id used only internally/logging.
            enabled = true, -- Set false to keep the zone configured but inactive.
            x = 5266.3604, y = -5427.3711, z = 141.0485, -- Center coordinates. Heading reference: 90.6368.
            radius = 1800.0, -- Circular radius in meters.
            useZ = false -- If true, uses 3D sphere distance. False uses map/2D distance.
        }
    }
}

-- ================================================================
-- [10] PHONE NOTIFICATIONS
-- ================================================================
Config.Notifications = {
    Enabled = true, -- Enables LB Phone notifications generated by this resource.
    MinimumIntervalMs = 4000, -- Minimum delay between any two notifications to prevent notification bursts.
    DedupeWindowMs = 12000, -- Blocks the same notification key from being shown repeatedly inside this window.
    Events = {
        taxi_incoming = false, -- Disabled because the live service screen already shows when a taxi is assigned.
        taxi_arrived = true, -- Shows one notification when the taxi reaches the pickup point.
        select_waypoint = false, -- Disabled because the app already shows the waypoint requirement in the live service screen.
        trip_started = false, -- Disabled because the route state is already visible inside the app.
        trip_completed = true, -- Shows one notification when the destination is reached.
        service_cancelled = false, -- Disabled for player-requested cancellations to avoid redundant confirmation spam.
        no_waypoint = true, -- Shows an actionable warning when no map waypoint is available.
        cooldown_active = true, -- Shows the remaining request cooldown when a taxi cannot be requested yet.
        no_service_zone = true, -- Warns the player when SmartCab is blocked by a configured no-service zone.
        active_service = true, -- Warns the player when another taxi service is already active.
        vehicle_lost = true, -- Warns the player when the assigned taxi is missing or destroyed.
        too_far = true, -- Warns the player when the service is cancelled due to distance.
        player_dead = true, -- Warns the player when the service is cancelled because of player state.
        payment_failed = true, -- Warns the player when a trip or cancellation payment cannot be completed.
        cancel_fee_charged = false, -- Disabled because the cancellation fee is already shown in the in-app confirmation.
        cancel_fee_payment_failed = true, -- Warns the player if the cancellation fee could not be charged.
        charge_ok = false, -- Disabled because successful charges are already represented by the live fare and trip state.
        request_failed = true, -- Warns the player when the taxi request fails.
        seat_blocked = true, -- Warns the player when the required taxi seat cannot be used.
        open_app_hint = false, -- Disabled because repeated prompts to open the app are unnecessary.
        ride_plus_activated = false, -- Disabled because Ride+ activation is confirmed inside the app UI.
        ride_plus_cancelled = false, -- Disabled because Ride+ cancellation is confirmed inside the app UI.
        ride_plus_already_active = false, -- Disabled because Ride+ feedback is shown inside the app UI.
        ride_plus_payment_failed = false, -- Disabled because Ride+ feedback is shown inside the app UI.
        ride_plus_phone_missing = false, -- Disabled because Ride+ feedback is shown inside the app UI.
        ride_plus_identifier_missing = false, -- Disabled because Ride+ feedback is shown inside the app UI.
        ride_plus_plan_invalid = false, -- Disabled because Ride+ feedback is shown inside the app UI.
        ride_plus_update_failed = false, -- Disabled because Ride+ feedback is shown inside the app UI.
        ride_plus_busy = false, -- Disabled because repeated clicks are handled inside the app UI.
        ride_plus_sql_unavailable = false -- Disabled because Ride+ feedback is shown inside the app UI.
    }
}

-- ================================================================
-- [11] DEBUG
-- ================================================================
Config.Debug = false -- true/false only. False keeps warnings and errors visible, but hides normal debug/info logs.

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
