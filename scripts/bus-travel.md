<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_bus_travels showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>

<p style="text-align: center; font-weight: bold; color: red;">
  THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>

# 🧩 **OVERVIEW:**
- **Name:** `smdz_bus_travels`
- **Author:** SMDZ Studios
- **Framework:** ESX / QBCore / QB Box 
- **Version:** `1.0.0`
- **Status:** <span class="badge badge--stable">Stable</span>

**SMDZ Bus Travels** is a public transport system for FiveM designed for roleplay servers.  
It adds interactive bus stops with a clean menu, configurable fares and travel times, an optional immersive *Real Bus* experience, broad compatibility with popular community providers, and optional webhook logging for server activity.

**Requirements:**  
`ox_lib` is required, and at least one target provider (`ox_target` or `qb-target`) must be installed and running. Missing dependencies are checked automatically on startup.

**Design goals:**
- Smooth and consistent player experience  
- Easy configuration for server admins  
- Wide compatibility through modular bridges  
- Lightweight and safe entity handling

---

# 🚀 FEATURES:

- 🧭 **Interactive Bus Stop Menus**  
  Context-driven stop menus powered by **ox_lib** context menus, providing a clean, native, and polished player UI.

- 💰 **Dynamic Fare System**  
  Fully configurable pricing logic with:
  - Base fare configuration  
  - Time-based multipliers and extra charges (e.g. night surcharge)  
  - Blacklisted routes during specific hours  
  - Government / role-based discounts using configurable job lists  

- ⏱️ **Smart ETA Calculation**  
  Accurate travel time estimation based on player distance, with per-meter timing, min/max clamps, and random jitter to avoid robotic consistency.

- 💳 **Multiple Payment Methods**  
  - Framework cash handling (ESX, QBCore, QBX)  
  - Optional item-based payments using popular inventory systems  

- 🔌 **Modular Progress & Notification Bridges**  
  Wide compatibility with community providers:
  - Progress: **ox_lib**, mythic_progbar, qb-progressbar, progressbar, esx_progressbar  
  - Notifications: **ox_lib**, brutal_notify, ESX Notify, QBCore Notify  
  - Internal fallback progress system to guarantee functionality even without third-party resources  

- 🚌 **Optional Real Bus Experience**  
  Immersive vehicle-based transport simulation:
  - Spawns a real bus with a driver ped  
  - Simulates arrival, boarding, travel, and departure  
  - Fully configurable vehicle model, driver model, seats, doors, invincibility, colors, and timing  

- 📡 **Opt-in Webhook Logging**  
  Optional event logging with:
  - Trip start, payment, arrival, and cancellation events  
  - Player name, identifiers (optional), route info, fare, ETA, timestamps, and coords (optional)  
  - Built-in rate limiting and debug mode to validate payloads before enabling  

- 🤖 **Provider Auto-Detection**  
  Automatically detects available providers, with the option to force specific ones via config for predictable behavior.

- 🧹 **Safe Cleanup & State Handling**  
  Robust server-side cleanup:
  - Clears pending trips on player disconnect  
  - Automatically times out stalled or incomplete trips  


---

# 📦 REQUIREMENTS:
Minimum (mandatory)
- FiveM server (recommended: latest stable artifacts)
- Lua 5.4 support if the fxmanifest targets it (fxmanifest.lua should contain `lua54 'yes'` when needed)
- ox_lib — REQUIRED. Provides:
  - lib.callback (RPC)
  - lib.notify (user notifications)
  - lib.registerContext / lib.showContext (context menus)
  - lib.progressBar / lib.progressCircle (if available)
- One target provider — REQUIRED:
  - ox_target OR qb-target (one of these must be present)

Recommended (enhanced UX)
- Inventory provider for item-based payments: ox_inventory or qb-inventory
- Progress providers for high-quality UX: mythic_progbar, qb-progressbar, progressbar, esx_progressbar
- Notification providers: brutal_notify, es_extended (ESX), qb-core Notify
- Optional database: oxmysql or mysql-async (only if you need persistent storage; not required by default)

Notes:
- The resource detects providers automatically when `Config.* = 'auto'`. For production environments, keep ox_lib and a target provider present and ensure proper start order.
- If you plan to sell on Tebex, include a minimal dependency list in the product page and state clearly that ox_lib + target provider is mandatory.


# 🧩 PROVIDER COMPATIBILITY:
<p style="font-weight: bold; color: red;">
  ALL FILES IN THE BRIDGE FOLDER ARE OPEN SOURCE IN BOTH VERSIONS. YOU CAN ADAPT THE SCRIPT TO YOUR NEEDS AT YOUR OWN RISK.
</p>

## 🎯 Target (MANDATORY):
- **ox_target** ⭐ preferred  
- **qb-target**

Autodetect order: `ox_target → qb-target`


## ⏳ Progress Bar:
- **ox_lib** (lib.progressBar / lib.progressCircle) — ⭐ preferred
- **qb-progressbar**
- **progressbar**
- **mythic_progbar**
- **esx_progressbar**
- **fallback** (internal)


## 🔔 Notifications:
- **ox_lib** (lib.notify) — ⭐ preferred
- **okokNotify**
- **pNotify**
- **brutal_notify**
- **es_extended** (ESX notify)
- **qb-core** (QBCore Notify)
- **chat** (fallback)


## 🎒 Inventory:
- **ox_inventory** — ⭐ recommended
- **qb-inventory**
- **core_inventory**
- **ps-inventory**
- **lj-inventory**
- **qs-inventory**
- **codem-inventory**
- **origen_inventory**
- **ak47_inventory**
- **chezza_inventory**
- **es_extended** (ESX inventory)
- **esx_addoninventory**


## 🧠 Frameworks:
- **ESX** (`es_extended`)
- **QBCore** (`qb-core`)
- **QBX** (`qbx_core`)
- **Standalone** (limited)

> All providers are auto-detected by default.  
> Forced providers (non-`auto`) log clear warnings if unavailable.

---

# 📥 INSTALLATION:
Installation steps and tips to avoid common errors.

1. Place the resource folder in the server resources directory:
   - Example:
     ```
     resources/[smdz]/smdz_bus_travels
     ```

2. Edit server.cfg and ensure dependencies start before the resource:
   ```ini
   ## SMDZ Studios - dependencies (order matters)
   ensure ox_lib
   ensure ox_target        # or ensure qb-target (one of these MUST be present)
   ensure smdz_bus_travels
   ```
   - If using ox_inventory, oxmysql or other providers, ensure they are started before smdz_bus_travels as needed.

3. Start or restart the resource:
   ```
   restart smdz_bus_travels
   ```

4. Verify startup logs:
   - Look for lines prefixed with `[SMDZ BUS]` or `[SMDZ]`.
   - Confirm that ox_lib and the target provider were detected and no fatal errors occurred.

Best practices:
- Use `ensure` ordering to avoid race conditions.
- Restart the server after adding new dependencies to ensure correct initialization order.
- If you ship this on Tebex, include succinct install instructions and a quick dependency checklist for buyers.

---

# ⚙️ CONFIGURATION:
A complete, annotated configuration.

```lua
-- ============================================================================
-- SMDZ PUBLIC BUS — CONFIGURATION
-- ============================================================================
--
-- INDEX
--  01) Core
--  02) Providers (Target / Progress / Framework / Notify / Inventory)
--  03) Provider Debug Toggles
--  04) Payment
--  05) Controls (Cancel Key + Hint)
--  06) Travel Time (ETA)
--  07) Time Rules (Closed Hours / Modifiers / Blacklists)
--  08) Government Discount
--  09) UI / RP Timings
-- 10) Blips
-- 11) Webhooks
-- 12) Real Bus Simulation
-- 13) Stops
-- ============================================================================
Config = {}

-- ============================================================================
-- 01) CORE
-- ============================================================================

Config.Debug        = false   -- Enable verbose debug prints on server & client (true/false)
Config.Locale       = 'es'    -- Locale file to load: 'en', 'es', 'pt', 'fr', 'it'
Config.RequireOxLib = true    -- Require a target provider (true = resource expects ox_target or qb-target present)

-- ============================================================================
-- 02) PROVIDERS
-- ============================================================================

-- Provider selection:
Config.Target = 'auto'                              -- Target/provider selection for interaction UI:
--  - 'auto'      : autodetect (prefer ox_target, then qb-target)
--  - 'ox_target' : force ox_target
--  - 'qb-target' : force qb-target

Config.Progressbar = 'auto'                         -- Progress bar provider:
--  - 'auto'            : try in order:
--  - 'ox_lib'          : force ox_lib progress APIs
--  - 'qb-progressbar'  : force qb-progressbar
--  - 'progressbar'     : force standalone progressbar
--  - 'mythic_progbar'  : force mythic_progbar
--  - 'esx_progressbar' : force esx_progressbar
--  - 'fallback'        : always use built-in fallbackProgress


Config.Framework = 'auto'                           -- Framework selection for money/jobs:
--  - 'auto'         : autodetect ESX / QBCore / QBX
--  - 'es_extended' : force ESX-specific paths
--  - 'qb-core'     : force QBCore-specific paths
--  - 'qbx_core'    : force QBX-specific paths

Config.Notify = 'auto'                              -- Notification provider selection:
--  - 'auto'          : try in order:
--  - 'ox_lib'        : force ox_lib lib.notify
--  - 'okokNotify'    : force okokNotify
--  - 'pNotify'       : force pNotify
--  - 'brutal_notify' : force brutal_notify
--  - 'es_extended'   : force ESX showNotification
--  - 'qb-core'       : force qb-core Notify
--  - 'chat'          : force chat fallback

Config.Inventory = 'auto'                           -- Inventory provider options:
--  - 'auto'              : autodetect common providers
--  - 'ox_inventory'      : force ox_inventory
--  - 'qb-inventory'      : force qb-inventory
--  - 'core_inventory'    : force core_inventory
--  - 'ps-inventory'      : force ps-inventory
--  - 'lj-inventory'      : force lj-inventory
--  - 'qs-inventory'      : force qs-inventory
--  - 'codem-inventory'   : force codem-inventory
--  - 'origen_inventory'  : force origen_inventory
--  - 'ak47_inventory'    : force ak47_inventory
--  - 'chezza_inventory'  : force chezza_inventory
--  - 'es_extended'       : force ESX inventory methods
--  - 'esx_addoninventory': force esx_addoninventory


-- Notification defaults:
Config.NotifyDefaults = {                           -- Default notify duration (ms) and default type ('inform','success','error', etc)
  duration = 5000,
  type = 'inform'
}


-- ============================================================================
-- 03) PROVIDER DEBUG TOGGLES
-- ============================================================================

Config.ProvidersDebug = {     -- Enable additional debug logs for each provider area
  framework = false,          -- Debug framework detection/integration (ESX/QBCore/QBX)
  progress  = false,          -- Debug progressbar usage & fallbacks
  notify    = false,          -- Debug notification provider selection/calls
  inventory = false,          -- Debug inventory remove item attempts
}

-- ============================================================================
-- 04) PAYMENT
-- ============================================================================

Config.Fare             = 20      -- Base fare (integer currency units)
Config.UseFrameworkCash = true    -- Use framework APIs (ESX/QBCore/QBX) to remove cash (true/false)
Config.UseCashItem      = false   -- Use an inventory item as payment instead of cash (true/false)
Config.CashItemName     = 'cash'  -- Item name to remove when UseCashItem = true

-- ============================================================================
-- 05) CONTROLS
-- ============================================================================

Config.CancelKey      = 194       -- Numeric control code used to cancel (default BACKSPACE = 194)
Config.ShowCancelHint = true      -- If true, show players a hint with cancel key when applicable

-- ============================================================================
-- 06) TRAVEL TIME (ETA)
-- ============================================================================

Config.TravelTime = {
  enabled        = true,          -- Enable ETA calculation
  baseMs         = 2500,          -- Base overhead added to every ETA (ms)
  perMeterMs     = 18,            -- Milliseconds added per meter of distance
  minMs          = 6000,          -- Minimum ETA (ms)
  maxMs          = 30000,         -- Maximum ETA (ms)
  randomJitterMs = { 0, 1200 },   -- Random jitter added to ETA in ms as [min, max]
  use2D          = true,          -- Calculate distance using 2D (ignore Z) if true
}

-- ============================================================================
-- 07) TIME RULES
-- ============================================================================

Config.TimeRules = {
  enabled     = true,             -- Enable time-based rules (true/false)
  useGameTime = true,             -- Use client-provided game hour (true) or server real hour (false)

  serviceClosed = {               -- Ranges where the service is considered closed
    enabled = true,               -- Toggle closed-hours rules
    ranges = { { from = 2, to = 5, reasonKey = 'SERVICE_CLOSED_NIGHT' } } -- Array of ranges with locale reasonKey
  },

  priceModifiers = {              -- Time-based price rules (multiplier + extra)
    { from = 0,  to = 5,  multiplier = 1.35, extra = 0, reasonKey = 'NIGHT_SURCHARGE' },
    { from = 22, to = 23, multiplier = 1.20, extra = 0, reasonKey = 'NIGHT_SURCHARGE' },
  },

  blacklist = {                   -- Destination blacklists active during time ranges
    { from = 2, to = 5, blockedDestinations = { 'delperro', 'rockford' }, reasonKey = 'DEST_BLOCKED_TIME' },
  },
}

-- ============================================================================
-- 08) GOVERNMENT DISCOUNT
-- ============================================================================

Config.GovDiscount = {
  enabled     = true,             -- Enable government-worker discounts
  jobs        = {                 -- Job names that qualify (match your framework job names)
    'police','fib','ambulance','ems','sheriff','state','highway','fire','lssd','doj','gov','government','corrections','prison','ranger'
  },
  multiplier  = 0.50,             -- Fare multiplier applied to base fare for eligible jobs
  extra       = 0,                -- Flat extra applied after multiplier
  minFare     = 0,                -- Minimum fare after discount
  thankYouKey = 'GOV_THANKS',     -- Locale key shown to the player when discount applied
}

-- ============================================================================
-- 09) UI / RP TIMINGS
-- ============================================================================

Config.ProgressCanCancel  = true  -- Allow players to cancel progress / boarding (true/false)
Config.AnimDict           = 'rcmjosh1' -- Animation dictionary used for boarding/idle steps
Config.AnimName           = 'idle'     -- Animation name to play while waiting/boarding
Config.FadeOutMs          = 650        -- Fade out duration when starting transport (ms)
Config.FadeInMs           = 650        -- Fade in duration when arriving (ms)
Config.BlackScreenHoldMs  = 500        -- How long black screen is held during transport (ms)
Config.PostArriveDelayMs  = 150        -- Delay after arrival before re-enabling controls (ms)

-- ============================================================================
-- 10) BLIPS
-- ============================================================================

Config.Blips = {
  enabled    = true,             -- Show map blips for stops (true/false)
  sprite     = 513,              -- Blip sprite/icon id
  scale      = 0.5,              -- Blip scale on map
  color      = 66,               -- Blip color id
  shortRange = true,             -- If true, blip is only visible nearby on map (short-range)
  nameKey    = 'BLIP_NAME',      -- Locale key used as blip name
}

-- ============================================================================
-- 11) WEBHOOKS
-- ============================================================================

Config.Webhooks = {
  enabled            = false,    -- Enable sending webhooks (true/false)
  url                = '',       -- Webhook endpoint URL (required when enabled)
  username           = 'SMDZ Public Bus', -- Webhook username override
  avatar             = '',       -- Webhook avatar URL (optional)
  color              = 3447003,  -- Embed color number
  includeIdentifiers = true,     -- Include player identifiers on webhook payloads (true/false)
  includeCoords      = true,     -- Include coords in webhook payload when available (true/false)
  log = {
    general       = true,       -- General trip/pay logs (used for paid/start/arrive/cancel)
  },
  rate  = { windowSec = 10, maxRequests = 5 }, -- Rate limiting: window in seconds and max requests allowed in window
  debug = false,                 -- When true, prints webhook payload to server console before sending
}

-- ============================================================================
-- 12) REAL BUS SIMULATION
-- ============================================================================

Config.RealBus = {
  enabled         = true,        -- Spawn a vehicle to simulate the bus trip (true/false)
  vehicleModel    = 'bus',       -- Vehicle model name for the spawned bus
  driverModel     = 's_m_m_gentransport', -- Driver ped model to spawn as driver
  driverSeat      = -1,          -- Driver seat index (-1 typical)
  passengerSeat   = 2,           -- Passenger seat index used to place player if applicable
  lockDoors       = true,        -- Lock doors while in transit (true/false)
  invincible      = true,        -- Make the bus invincible for the trip (true/false)
  arriveFadeMs    = 350,         -- Fade timing when arriving (ms)
  departDelayMs   = 1200,        -- Delay before bus departs after boarding (ms)
  cleanupAfterMs  = 12000,       -- Time after trip to cleanup spawned entities (ms)
  waitForBusMs    = 15000,       -- How long to wait for bus before cancel (ms)
  travelExtraMs   = 0,           -- Extra ms added to ETA to tune travel durations
  useCustomColor  = true,        -- Apply custom color to spawned bus (true/false)
  customColor     = { r = 255, g = 0, b = 0 }, -- RGB color used if useCustomColor = true
}

-- ============================================================================
-- 13) STOPS
-- ============================================================================

Config.Stops = {
  { id='missionrow',      label='Mission Row',       coords=vec4(355.7714,-1067.0059,29.5661,359.9274), busSpawn=vec4(351.5201,-1064.4214,29.3988,270.0776), loreKey='STOP_MISSIONROW' },
  { id='legion',          label='Legion Square',     coords=vec4(115.7249,-782.0673,31.3980,158.1612),  busSpawn=vec4(117.4212,-785.8156,31.3122,69.0531),   loreKey='STOP_LEGION' },
  { id='pillbox',         label='Pillbox',           coords=vec4(-249.8741,-886.7294,30.6182,342.6155), busSpawn=vec4(-252.3693,-882.6579,30.6367,249.9447), loreKey='STOP_PILLBOX' },
  { id='forum',           label='Forum Drive',       coords=vec4(-109.9254,-1685.5867,29.3069,217.7730),busSpawn=vec4(-104.3370,-1682.4760,29.1994,140.5403), loreKey='STOP_FORUM' },
  { id='rockford',        label='Rockford Hills',    coords=vec4(-930.7615,-120.0010,37.7699,207.3467), busSpawn=vec4(-930.8735,-126.5591,37.5779,117.1835),  loreKey='STOP_ROCKFORD' },
  { id='delperro',        label='Boulevard Del Perro',coords=vec4(-1527.6489,-464.1747,35.4026,214.3530),busSpawn=vec4(-1526.6805,-466.9584,35.2976,121.5531), loreKey='STOP_DELPERRO' },
  { id='strawberry',      label='Strawberry Avenue', coords=vec4(56.7526,-1540.6545,29.2938,25.7268),   busSpawn=vec4(50.6719,-1536.7208,29.1745,319.0672),   loreKey='STOP_STRAWBERRY' },
  { id='vespucci',        label='Vespucci Beach',    coords=vec4(-1214.8782,-1218.7222,7.6872,279.8632), busSpawn=vec4(-1212.8151,-1214.7141,7.6111,190.3675), loreKey='STOP_VESPUCCI' },
  { id='gym',             label='GYM Vespucci Beach',coords=vec4(-1170.8599,-1473.3135,4.3793,307.3620), busSpawn=vec4(-1170.3252,-1468.9309,4.2743,212.0647), loreKey='STOP_GYM' },
  { id='paleto',          label='Paleto Bay',        coords=vec4(-218.9314,6175.0356,31.2714,43.7694),   busSpawn=vec4(-215.2326,6173.2578,31.2208,134.9294),   loreKey='STOP_PALETO' },
  { id='arena',           label='Maze Bank Arena',   coords=vec4(-134.1321,-2030.8297,22.9561,73.4719),  busSpawn=vec4(-143.4266,-2027.7977,22.9234,74.1271),   loreKey='STOP_ARENA' },
  { id='weazel',          label='Weazel News',       coords=vec4(-558.7643,-848.9751,27.5182,2.9823),     busSpawn=vec4(-561.5591,-846.0379,27.2360,268.7557),   loreKey='STOP_WEAZEL' },
  { id='cypress',         label='Cypress Flats',     coords=vec4(932.5956,-1749.7344,31.1530,176.9831),   busSpawn=vec4(934.5420,-1752.4717,31.0435,85.5652),    loreKey='STOP_CYPRESS' },
  { id='popular_street',  label='Popular Street',    coords=vec4(785.5550,-1369.2423,26.6062,271.0650),   busSpawn=vec4(788.3250,-1366.1328,26.4695,178.6378),   loreKey='STOP_POPULAR' },
}
```

Configuration tips:
- Keep `Config.RequireOxLib = true` in production. ox_lib is mandatory for the best experience.
- Use `'auto'` for the provider fields to allow the script to pick the best available provider.
- When enabling webhooks, test with `debug = true` first and ensure the receiving endpoint is secure and private.

---

# 🎮 USAGE:
How players interact with smdz_bus_travels and what staff need to know.

Player flow (step-by-step)
1. Walk to a configured bus stop (defined in `Config.Stops`).
2. Target provider (ox_target or qb-target) displays an action hint.
3. Use the action to open the menu (ox_lib context) that shows destinations, fare, ETA, and any time-based notices (service closed / blacklisted destination).
4. Choose destination and confirm payment — client calls server for a quote, then to start trip.
5. Server charges the player (cash or item), creates a pending trip state, and initiates progress or spawns a real bus depending on configuration.
6. On completion, the player is moved or allowed to exit the bus and arrival is logged; optional webhook is dispatched if configured.

---

# 🔌 EVENTS & EXPORTS:
Developer integration specifics.

Server callbacks (ox_lib)
- `smdz_bus_travels:quoteFare` — (source, fromIndex, toIndex, etaMs, clientHour) → returns { ok = boolean, fare = number, reasonText = optional string key }
- `smdz_bus_travels:tryStartTrip` — (source, fromIndex, toIndex, etaMs, clientHour, clientCoords) → returns boolean

Server events
- `smdz_bus_travels:cancelTrip` (clientCoords) — triggers when a client cancels a pending trip
- `smdz_bus_travels:arrivedTrip` (clientCoords) — triggers when a client reports arrival; useful for logging and analytics

Client events
- `smdz_bus_travels:notify` (string or table) — display a notification via the configured notify provider

Exports (client)
- `ProgressBar(opts)` — opts: { duration, label, canCancel, anim, prop, useWhileDead, controlDisables } → returns true on completion, false on cancel
- `ProgressCircle(opts)` — same as ProgressBar but circular style if supported
- `CancelProgress()` — request cancellation of current progress

Code examples
```lua
-- Client: request fare quote via ox_lib callback (synchronous in client script)
local quote = lib.callback.await('smdz_bus_travels:quoteFare', 5000, fromIndex, toIndex, etaMs, GetClockHours())
if quote and quote.ok then
  print(('Quote: %d'):format(quote.fare))
end

-- Client: start trip
local started = lib.callback.await('smdz_bus_travels:tryStartTrip', 5000, fromIndex, toIndex, etaMs, GetClockHours(), GetEntityCoords(PlayerPedId()))
if started then
  print('Trip started')
else
  print('Trip failed to start')
end
```

---

# 🐞 DEBUGGING & COMMON ISSUES:
Systematic debugging instructions and the most common problems with solutions.

Enable debugging
```lua
Config.Debug = true
Config.ProvidersDebug = { framework = true, progress = true, notify = true, inventory = true }
```

Important logs
- Search server logs for `[SMDZ BUS]` or `[SMDZ]` prefixes for targeted messages.
- Client F8 console will show missing exports or NUI errors.

Top issues and fixes (quick)
- Missing ox_lib → ensure `ensure ox_lib` before smdz_bus_travels
- Missing target provider → ensure `ensure ox_target` or `ensure qb-target`
- Progress stuck → set `Config.Progressbar = 'fallback'` and review provider logs
- Payment errors → verify framework detection and inventory exports
- Webhook issues → set `Config.Webhooks.debug = true`, inspect JSON payload and HTTP status

When opening an issue
- Include sanitized config, provider list and versions, server.cfg start order, and full logs around the failure.

---

# 🔐 SECURITY & PRIVACY:
Guidelines to protect player data and external integrations.

Webhooks and PHI/PII
- Treat webhook endpoints as secrets; never commit them to public repos.
- `Config.Webhooks.includeIdentifiers` should be `false` if you want to avoid sending identifying information off-site.
- Sanitize fields and avoid including long free-text fields in webhook payloads.

Rate limiting and abuse
- Use `Config.Webhooks.rate` to avoid accidental spamming of external services.
- Consider local aggregation for heavy traffic servers.

Anti-cheat and movement
- Real Bus simulation reduces server teleports; consider it if anti-cheat conflicts appear.
- If you must teleport, add server-side anti-cheat exceptions for authorized flows.

---

# ❓ FAQ:
Extended frequently asked questions and answers (American English).

Q: Is ox_lib absolutely required?
A: Yes. ox_lib is a core dependency. The resource uses lib.callback for client-server RPCs, lib.registerContext for menus, and lib.notify for consistent notifications. Set `Config.RequireOxLib = true` in production. Running without ox_lib will cause major UX features to be disabled and is not recommended.

Q: Which target provider must I install?
A: At least one — ox_target (preferred) or qb-target. The resource will detect `ox_target` first when `Config.Target = 'auto'` and will use qb-target if ox_target is not present. You can force one in the config, but do so only if you're sure the provider is installed.

Q: Can I use item payments instead of cash?
A: Yes. Enable `Config.UseCashItem = true` and set `Config.CashItemName` to the exact item key your inventory uses. Also ensure `Config.Inventory` is configured correctly (or left at 'auto' if the resource can detect the inventory provider). Always test item payment flows on a staging server.

Q: Does this work with ESX/QBCore/QBX?
A: Yes. The resource supports ESX, QBCore and QBX. If none are present, the resource runs in a limited standalone mode — payment and job checks will not work in that mode. For production, use one of the supported frameworks if you need integrated money and job features.

Q: How do I test webhooks safely?
A: Use `Config.Webhooks.debug = true`. This prints the outgoing JSON payload to the server console before sending. Use a private test webhook (not a public channel) while validating schema and data format, then switch to your production webhook when ready.

Q: What should I include in my Tebex product listing?
A: Clearly state mandatory dependencies: "Requires ox_lib and one target provider (ox_target or qb-target)." List optional recommended providers for full UX (ox_inventory, mythic_progbar, etc.). Specify support hours/terms, update cadence and what is included with purchase (e.g., bug fixes for the purchased major version).

Q: What is your support policy for Tebex customers?
A: Define this in your Tebex listing. Typical options include: installation help, bug fixes for the purchased version, and paid premium support. Request purchase proof (order ID) when providing purchase-specific support.

Q: How do I add or change stops?
A: Edit the `Config.Stops` array in the config file. Each entry should include:
- id (unique string),
- label (display name),
- coords (vec4: x,y,z,heading),
- busSpawn (vec4: x,y,z,heading for Real Bus spawn),
- loreKey (locale key for descriptive text).
Restart the resource after editing the config or provide a server-side reload action.

Q: Are there any performance considerations?
A: The resource is lightweight. Real Bus simulation spawns a vehicle and driver per trip, so on high-concurrency servers consider limits on simultaneous simulated trips or prefer instant/black-screen teleport. Webhooks and heavy logging can also increase CPU and network usage when enabled extensively — use debug/logging thoughtfully.

Q: How are timezones and game time handled for time rules?
A: The resource can use client-provided game hours (when `Config.TimeRules.useGameTime = true`) which reflect in-game time, or fallback to server system time. Configure `Config.TimeRules` to suit your server's desired behavior.

Q: How do I request new features or support for a provider not included?
A: Open a GitHub issue with detailed reproduction steps, provider export signatures and versions. If you're a paid Tebex customer, include your order ID and state the requested SLA for feature development; paid work can be quoted separately.

Q: Can I localize the UI and notifications?
A: Yes. The resource supports locales. Provide locale files (Locales/en.lua, Locales/es.lua, etc.) and set `Config.Locale` accordingly. Make sure locale keys used in config (e.g., loreKey) exist in your locale files.


---

# ⚠️ COMMON PROBLEMS:
Quick-reference list of frequent issues and fast fixes (American English).

1) The resource does not start
- Fix: Check for syntax errors; ensure fxmanifest is valid. Confirm `ensure ox_lib` and the required target are before `ensure smdz_bus_travels`.

2) "No target provider detected"
- Fix: Install and `ensure ox_target` or `ensure qb-target`. Reorder ensures if necessary.

3) Progress bar never finishes
- Fix: Force fallback progress (`Config.Progressbar = 'fallback'`), enable provider debug, and inspect logs for the provider call that failed.

4) Customer payments not deducted
- Fix: Verify framework detection (ESX/QBCore). For item payments, validate inventory exports and `Config.CashItemName`.

5) Webhook POSTs failing
- Fix: `Config.Webhooks.debug = true` and inspect payload and HTTP response. Ensure HTTPS and that the receiving endpoint accepts embeds/JSON used.

6) Menu not opening after interaction
- Fix: Verify `lib.registerContext` exists in ox_lib. Update ox_lib if outdated. Check client F8 logs for errors.

7) Real Bus vehicle remains after crash
- Fix: The resource attempts cleanup after `cleanupAfterMs`. If a crash prevents cleanup, restart the resource or the server and report a reproducible bug.

8) Teleport flagged by anti-cheat
- Fix: Use Real Bus simulation, or add anti-cheat exception for server-triggered teleports.

---

# 📬 SUPPORT & CONTACT:
What we need to help you quickly and efficiently.

When requesting support, include:
- Tebex transaction ID
- Resource name & version: `smdz_bus_travels vX.Y.Z`
- FiveM artifacts/build number
- Framework and version (ESX/QBCore/QBX)
- List of provider resources and versions (ox_lib, ox_target, mythic_progbar, etc.)
- `server.cfg` with resource ensure order
- Sanitized `smdz_bus_config.lua` (remove webhook URL and any secrets)
- Server & client logs (complete logs or at least relevant ranges)
- Exact reproduction steps and expected vs actual behavior