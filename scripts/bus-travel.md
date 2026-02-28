<div align="center" style="margin-bottom: 1.5rem;">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/H8KpxUg2aDk"
    title="smdz_bus_travels showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>


# 🧩 **OVERVIEW:**
- 📌 **Name:** `smdz_bus_travels`
- 🧑‍💻 **Author:** SMDZ Studios
- 🧭 **Framework:** ESX / QBCore / QB Box / Standalone
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>

**SMDZ Bus Travels** is a public transport system for FiveM designed for roleplay servers.  
It adds interactive bus stops with a clean menu, configurable fares and travel times, an optional immersive *Real Bus* experience, broad compatibility with popular community providers, and optional webhook logging for server activity.

---

# ✨ **FEATURES:**

- 🗺️ **Route network** with multiple predefined and configurable stops, including map blips and world markers for clear navigation.
- 🧭 **Context menu UX** with a clean interface showing stop lore, ticket prices, route availability, and real-time service status.
- ⏳ **Two-stage flow** *(waiting → boarding → travel)* that simulates realistic public transport timing for immersive roleplay.
- 🚍 **Local bus spawn** with an NPC driver, realistic boarding behavior, and optional vehicle color customization.
- 🌙 **Night service control** with fully configurable operating hours to automatically pause routes during late-night schedules.
- 🌧️ **Weather shutdowns** that suspend service during snow, storms, heavy rain, fog, and other severe conditions.
- 🚦 **Dynamic blip status** that updates in real time, turning red when routes are blocked by night hours or weather.
- 💸 **Dynamic pricing system** calculated from travel distance with configurable minimums, maximums, and rounding rules.
- 🧑‍🚒 **Government discounts** via job whitelists for police, EMS, firefighters, and other public services.
- 💎 **VIP access** offering discounted or free travel through framework groups or ACE permissions.
- 🔔 **Notification bridge** supporting major notification ecosystems with automatic fallback handling.
- ⏱️ **Progressbar bridge** compatible with multiple popular progress bar providers.
- 📡 **Discord webhooks** logging purchases, cancellations, and completed trips with structured embeds.
- 🧩 **Exports and callbacks** for easy custom integrations and advanced server-side logic.
- 🎨 **Customizable visuals** including bus colors, marker styles, and blip appearance.
- 🧾 **Full localization** with 10+ languages and fully editable lore text.
- 🧱 **Graceful fallbacks** for notifications, progress bars, and targetless interaction mode.
- 🧠 **Config-first design** with clean, centralized configuration for easy setup and maintenance.


Each feature is designed to feel native to GTA V roleplay. The menu not only shows routes and prices, it also reflects service availability in real time. The flow is intentionally paced: players wait, board a physical bus with an NPC driver, then travel with a distance‑based duration that feels believable.

Operations are reactive. Night hours can suspend service, weather can shut down routes, and blips update color to communicate status instantly. Pricing is flexible and realistic, with base fees, per‑meter costs, bounds, and rounding so the economy stays balanced.

Discounts and VIP access are fully optional but powerful. Government jobs can receive special fares, while VIPs can be granted discounts or free rides via framework groups or ACE permissions. Notifications and progress bars are handled through bridges so you can plug in whatever ecosystem your server already uses.

The system is built for maintainability: all settings are centralized, exports and callbacks are available for custom scripts, and locale files let you replace every message and stop description with your own lore. If a dependency is missing, the script falls back cleanly so the core experience still works.

---

# 📦 **INSTALLATION:**

1) Place the resource in your server resources folder:  

```
resources/[smdz]/smdz_bus_travels
```

2) Add to `server.cfg`:

```
ensure smdz_bus_travels
```

3) Restart your server or resource.

---

# 📦 **REQUIREMENTS:**
- FiveM latest recommended build with OneSync.
- `ox_lib` (required)  
  - Used for UI context menus, notifications, and callbacks (`lib.callback`).  
  - Ensure it starts **before** `smdz_bus_travels` in `server.cfg`.


---

# 🧩 **BRIDGES (PROVIDERS):**

## 🔔 NOTIFICATIONS:

```
Config.Notify = 'auto'
```

Supported providers:

- `ox_lib`
- `okokNotify`
- `mythic_notify`
- `pNotify`
- `qs-notify`
- `codem-notification`
- `t-notify`
- `brutal_notify`
- `wasabi_notify`
- `origen_notify`
- `renzu_notify`
- `cd_notifications`
- `es_extended`
- `qb-core`
- `qbx_core`
- `fallback`

Auto mode picks the first available resource in priority order.

---

## ⏱️ PROGRESS BAR:

```
Config.ProgressBar = 'ox_lib'
```

Supported providers:

- `ox_lib`
- `progressbar` (QB)
- `mythic_progbar`
- `esx_progressbar`
- `fallback`

## 📦 INVENTORY:

Supported inventory providers:

- `ox_inventory`
- `origen_inventory`
- `codem-inventory`
- `qs-inventory`
- `qb-inventory`
- `lj-inventory`
- `ak47_inventory`
- `core_inventory`
- `none`

---

# 🕒 **NIGHT BLOCKING:**

If `Config.NightDisabled = true`, the service blocks between:

```
Config.NightFromHour -> Config.NightToHour
```

Players will see a message that includes the available hours.

---

# 🌧️ **WEATHER BLOCKING:**

Use `Config.WeatherBlock.Blocked` to define blocked weather types:

```
Blocked = { 'XMAS', 'SNOW', 'SNOWLIGHT', 'RAIN', 'THUNDER' }
```

When blocked, the menu shows a warning and prevents travel.

---

# 💸 **PRICING:**

Dynamic pricing is controlled by:

```
Config.Pricing.BaseFee
Config.Pricing.PricePerMeter
Config.Pricing.Min
Config.Pricing.Max
Config.Pricing.RoundTo
```

If disabled, `Config.DefaultPrice` is used.

---

# 🎖️ **VIP ACCESS (DISCOUNT OR FREE):**

Enable:

```
Config.AccessPricing.Enabled = true
```

Choose mode:

```
Config.AccessPricing.Mode = 'discount' -- or 'free'
```

Whitelist by:
- Framework group (`Config.AccessPricing.Groups`)
- ACE permissions (`Config.AccessPricing.AcePerms`)

VIP users see a special menu entry with a crown icon.

---

# 🚌 **BUS SPAWN REALISM:**

Each stop can spawn a local bus so the player boards before teleport.

**Stops spawn mapping:**

```
Config.StopsBusSpawn = {
  { id = 'mission_row', coords = vec4(...) },
}
```

**Bus settings:**

```
Config.BusSpawn.VehicleModel
Config.BusSpawn.DriverModel
Config.BusSpawn.LockDoors
Config.BusSpawn.Invincible
Config.BusSpawn.RandomColor
Config.BusSpawn.Color
```

---

# 🗺️ **STOPS:**

Stops are defined in:

```
Config.Stops
```

Each entry includes:

- `id`
- `label`
- `coords`
- `descKey`
- `blip`
- `marker`

Descriptions are stored in locales.

---

# 🌍 **LOCALES:**

Locales live in:

```
locales/en.lua
locales/es.lua
locales/fr.lua
locales/de.lua
locales/it.lua
locales/pt.lua
locales/nl.lua
locales/tr.lua
locales/ru.lua
locales/ja.lua
```

Set the language with `Config.Locale` and edit these files to customize all in‑game text.

---

# 🔎 **DEBUG MODE:**

Enable debug logs:

```
Config.Debug = true
```

You will see extra console output for:
- target detection
- inventory/framework detection
- webhook events
- bus spawn
- menu flow

---

# 📡 **WEBHOOKS:**

Enable Discord logging:

```
Config.Webhooks.Enabled = true
```

Set:

```
Config.Webhooks.URL = 'https://discord.com/api/webhooks/...'
```

Supports:
- purchase
- cancel
- complete

---

# 👨‍💻 **EVENTS & EXPORTS (DEVELOPERS):**

Below is the full developer surface (events, callbacks, exports) available in this resource.

## CLIENT EVENTS:

- `smdz_bus_travels:openMenu`  
  Params: `stopId`  
  Opens the bus menu for a specific stop.

## SERVER EVENTS:

- `smdz_bus_travels:cancelTrip`  
  Refunds and cancels the active trip.

- `smdz_bus_travels:completeTrip`  
  Marks the trip complete and sends webhook logs.

## SERVER CALLBACKS (ox_lib):

- `smdz_bus_travels:canUse`  
  Returns: `ok, reason`  
  Checks if the service is available.

- `smdz_bus_travels:getRoutePrice`  
  Params: `fromId, toId`  
  Returns: `ok, price, reason`

- `smdz_bus_travels:payCashForRoute`  
  Params: `fromId, toId, weatherName, clientHour`  
  Returns: `ok, price, message`

- `smdz_bus_travels:getAccessBenefit`  
  Returns: `ok, mode, percent`

## EXPORTS:

### Shared:

- `T(key, ...)`  
  Localized string helper (from `shared/locale.lua`).

### Client:

- `OpenMenu(stopId)`  
- `GetStops()`  
- `GetStopById(stopId)`  
- `IsNightBlocked()`  
- `IsWeatherBlocked()` → returns `(bool, weatherName)`  
- `CalcTravelMs(fromId, toId)`  

### Server:

- `GetStops()`  
- `GetStopById(stopId)`  
- `IsNightBlockedAtHour(hour)`  
- `IsWeatherBlocked(weatherName)`  
- `HasVip(source)`  
- `GetAccessBenefit(source)` → returns `(bool, mode, percent)`  

## EXPORT USAGE EXAMPLES:

**Client**

```lua
-- Open the menu from another script
exports['smdz_bus_travels']:OpenMenu('mission_row')

-- Check if night blocking is active
if exports['smdz_bus_travels']:IsNightBlocked() then
    print('Night service is blocked.')
end

-- Calculate travel time between stops
local ms = exports['smdz_bus_travels']:CalcTravelMs('mission_row', 'pillbox')
print(('Travel time: %dms'):format(ms))
```

**Server**

```lua
-- Check VIP access
local hasVip = exports['smdz_bus_travels']:HasVip(source)

-- Get access benefit details
local ok, mode, percent = exports['smdz_bus_travels']:GetAccessBenefit(source)
if ok then
    print(('VIP mode=%s percent=%s'):format(mode, percent))
end
```

---

# 🛠️ **TROUBLESHOOTING:**

- If the bus does not appear, enable `Config.Debug` and check for `DBG_BUS_SPAWN_*` logs.
- If progress bars do not show, verify the selected provider resource is started.
- If night blocking triggers at the wrong time, verify server uses game time.
- If VIP access does not appear, ensure `Config.AccessPricing.Enabled = true` and your group/ACE is listed.
- If menus open but no destinations show, check `Config.Stops` and locale keys for descriptions.
- If weather block never triggers, confirm your weather system uses standard GTA weather names.
- If the player stays in the bus after teleport, check for conflicting vehicle scripts or seat locks.
- If webhooks do not fire, verify the URL and that outbound HTTP is allowed.
- If pricing is always zero, confirm `Config.Pricing.Enabled` and valid `BaseFee`/`PricePerMeter`.
- If target interaction fails, ensure the selected target resource is started or set `Config.Target = 'none'`.
- If markers do not draw, ensure `Config.Markers.Enabled = true` and reduce `DrawDistance` only if needed.
- If exports do not work, ensure the resource name matches `smdz_bus_travels` and is started.
- If using `Config.Target = 'none'`, ensure `Config.InteractKey` is a valid key name or control index.
- If you see “service unavailable,” verify `lib.callback` is working and `ox_lib` is up.
- If weather blocking shows during clear skies, your weather script may use non‑standard names; update the list.
- If the travel time feels too short, increase `Config.TravelProgress.BaseMs` and `PerMeter`.
- If the bus spawns underground, adjust the Z value in `Config.StopsBusSpawn`.
- If the bus spawns on top of the player, move the spawn a few meters away from the stop coords.
- If the menu is always blocked, check `Config.NightDisabled` and the configured hours.
- If prices feel inconsistent, check rounding and `Config.Pricing.Min/Max` values.
- If VIP shows but no discount is applied, confirm `Config.AccessPricing.StackWithGov` and mode.
- If notifications are missing, set `Config.Notify = 'fallback'` to test the pipeline.
- If progress bar hangs, switch to `fallback` to isolate provider issues.

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

**Q: Can I disable dynamic pricing?**  
A: Yes. Set `Config.Pricing.Enabled = false` and use `Config.DefaultPrice`.

**Q: Can I disable the bus spawn and keep instant teleport?**  
A: Yes. Set `Config.BusSpawn.WaitBeforeTeleportMs = 0` and remove spawn entries.

**Q: Why does the VIP line not show?**  
A: Make sure `Config.AccessPricing.Enabled = true` and your group/ACE is listed.

**Q: Can I force a specific notifications provider?**  
A: Yes. Set `Config.Notify = 'provider_name'` (e.g., `ox_lib`, `okokNotify`).

**Q: Can I use a different progress bar provider?**  
A: Yes. Set `Config.ProgressBar` to `ox_lib`, `progressbar`, `mythic_progbar`, `esx_progressbar`, or `fallback`.

**Q: How do I add or remove stops?**  
A: Edit `Config.Stops` and update `Config.StopsBusSpawn` with matching stop IDs.

**Q: The menu is red/blocked even during the day. Why?**  
A: Check `Config.NightDisabled`, your game time, and your weather blocking list.

**Q: Can I change travel time realism?**  
A: Yes. Adjust `Config.TravelProgress.BaseMs`, `PerMeter`, and `DistanceMultiplier`.

**Q: Can I change the bus color?**  
A: Yes. Use `Config.BusSpawn.RandomColor` or set `Config.BusSpawn.Color`.

**Q: Can I disable weather blocking entirely?**  
A: Yes. Set `Config.WeatherBlock.Enabled = false`.

**Q: Do I need ox_target?**  
A: No. Set `Config.Target = 'none'` to use the fallback key interaction.

**Q: Can I show VIP as discount and still apply gov discount?**  
A: Yes. Set `Config.AccessPricing.StackWithGov = true`.

**Q: Why are webhooks not sending?**  
A: Ensure `Config.Webhooks.Enabled = true` and the webhook URL is valid.

**Q: How do I change the night hours?**  
A: Edit `Config.NightFromHour` and `Config.NightToHour`.

**Q: Can I override stop descriptions per locale?**  
A: Yes. Update the `STOP_*_DESC` keys in `locales/en.lua` and `locales/es.lua`.

**Q: Can I reduce CPU usage?**  
A: Disable markers/blips you don’t need and lower `Config.Markers.DrawDistance`.

**Q: Is the bus spawn networked for all players?**  
A: No. It is local per player to prevent collisions and duplication.


---

# ⚙️ **CONFIG.LUA FILE:**

```lua
--  ____  __  __ ____  _____
-- / ___||  \/  |  _ \|__  /
-- \___ \| |\/| | | | | / / 
--  ___) | |  | | |_| |/ /_ 
-- |____/|_|  |_|____/____|
--
--  ____  _____ _   _ ____ ___ ___  ____  
-- / ___||_   _| | | |  _ \_ _/ _ \/ ___| 
-- \___ \  | | | | | | | | | | | | \___ \ 
--  ___) | | | | |_| | |_| | | |_| |___) |
-- |____/  |_|  \___/|____/___\___/|____/


Config = Config or {} -- Root config table

--=============================================================================
-- GENERAL
--=============================================================================
Config.Debug  = false        -- Enable debug logs
Config.Locale = 'en' -- Default language (must exist in /locales)

-- Available languages:
-- 'en' = English
-- 'es' = Spanish
-- 'de' = German
-- 'fr' = French
-- 'it' = Italian
-- 'ja' = Japanese
-- 'nl' = Dutch
-- 'pt' = Portuguese
-- 'ru' = Russian
-- 'tr' = Turkish


--=============================================================================
-- PROVIDERS / BRIDGES
--============================================================================-
Config.Framework = 'es_extended' -- Framework provider
-- auto        : Auto-detect framework
-- qbx_core   : QBX Core
-- qb-core    : QBCore
-- es_extended: ESX
-- none        : No framework

Config.Inventory = 'ox_inventory' -- Inventory provider
-- auto             : Auto-detect inventory
-- ox_inventory     : OX Inventory
-- origen_inventory : Origen Inventory
-- codem-inventory  : Codem Inventory
-- qs-inventory     : QS Inventory
-- qb-inventory     : QB Inventory
-- lj-inventory     : LJ Inventory
-- ak47_inventory   : AK47 Inventory
-- core_inventory   : Core Inventory
-- none             : No inventory

Config.Target = 'auto' -- Target provider
-- auto      : Auto-detect target
-- ox_target : OX Target
-- qb-target : QB Target
-- none      : No target system

Config.ProgressBar = 'ox_lib' -- Progress bar provider
-- auto            : Auto-detect progress bar
-- ox_lib          : ox_lib progress bar
-- progressbar     : progressbar resource
-- mythic_progbar  : mythic_progbar
-- esx_progressbar : ESX progressbar
-- fallback        : Built-in fallback progress

Config.Notify = 'ox_lib' -- Notification provider
-- auto               : Auto-detect notifications
-- ox_lib             : ox_lib notifications
-- okokNotify         : okokNotify
-- mythic_notify      : mythic_notify
-- pNotify            : pNotify
-- qs-notify          : QS Notify
-- codem-notification : Codem Notification
-- t-notify           : t-notify
-- brutal_notify      : Brutal Notify
-- wasabi_notify      : Wasabi Notify
-- origen_notify      : Origen Notify
-- renzu_notify       : Renzu Notify
-- cd_notifications   : CD Notifications
-- es_extended        : ESX notifications
-- qb-core            : QBCore notifications
-- qbx_core           : QBX notifications
-- fallback           : Built-in fallback notifications


--=============================================================================
-- NOTIFICATIONS (DEFAULTS)
--=============================================================================
Config.NotifyType     = 'info'  -- Default notification type
Config.NotifyDuration = 10000    -- Default notification duration (ms)
Config.NotifyDebug    = false   -- Enable notification debug logs

Config.Notifications = Config.Notifications or {} -- Advanced compatibility (do not edit if not needed)
Config.Notifications.DefaultType = Config.NotifyType
Config.Notifications.Duration    = Config.NotifyDuration

--=============================================================================
-- PAYMENT / CASH
--=============================================================================
Config.CashMode    = 'item'  -- Cash mode ('item' | 'account')
Config.CashItem    = 'money' -- Inventory item used as cash (CashMode = item)
Config.CashAccount = 'cash'  -- Framework account used as cash (CashMode = account)

--=============================================================================
-- SERVICE RULES
--=============================================================================
Config.WaitTime = 30000 -- Time before bus arrives (ms)

Config.NightDisabled = true -- Disable service at night
Config.NightFromHour = 22   -- Night start hour (0-23)
Config.NightToHour   = 6    -- Night end hour (0-23)

Config.WeatherBlock = {
    Enabled    = true, -- Enable weather blocking
    Blocked    = { 'XMAS', 'SNOW', 'SNOWLIGHT', 'RAIN', 'THUNDER' }, -- Blocked weather types
    MessageKey = 'SERVICE_WEATHER', -- Locale key
    NotifyType = 'error', -- Notification type
}

Config.BlockedMenu = {
    Icon      = 'ban', -- Icon for blocked entries
    IconColor = 'red', -- Icon color
}

--=============================================================================
-- TRAVEL VISUALS / TIMING
--=============================================================================
Config.FadeOutMs          = 1350 -- Fade out duration (ms)
Config.FadeInMs           = 1350 -- Fade in duration (ms)
Config.BlackScreenExtraMs = 675  -- Extra black screen before travel (ms)
Config.TravelBlackoutMs   = 2025 -- Black screen during travel (ms)

Config.TravelProgress = {
    BaseMs             = 30000, -- Base travel time (ms)
    PerMeter           = 0.10, -- Extra ms per meter
    Min                = 2500, -- Minimum travel time (ms)
    Max                = 40000, -- Maximum travel time (ms)
    DistanceMultiplier = 1.15, -- Distance multiplier to simulate roads
    LabelKey           = 'TRAVELING_TO', -- Locale key
}

--=============================================================================
-- WAIT ANIMATIONS
--=============================================================================
Config.WaitAnims = {
    { Type = 'scenario', Scenario = 'WORLD_HUMAN_STAND_IMPATIENT' },
    { Type = 'scenario', Scenario = 'WORLD_HUMAN_STAND_MOBILE' },
    { Type = 'scenario', Scenario = 'WORLD_HUMAN_HANG_OUT_STREET' },
    { Type = 'scenario', Scenario = 'WORLD_HUMAN_AA_COFFEE' },
    { Type = 'scenario', Scenario = 'WORLD_HUMAN_LEANING' },
}

--=============================================================================
-- INTERACTION
--=============================================================================
Config.TargetSettings = {
    Radius   = 2.7,                 -- Target radius
    Distance = 2.0,                 -- Interaction distance
    Icon     = 'fa-solid fa-bus',   -- Target icon
    UseZ     = true,                -- Use Z axis
    Debug    = false,               -- Target debug
}

Config.InteractDistance = 2.0 -- Manual interaction distance (no target)
Config.InteractKey      = 'E' -- Manual interaction key

--=============================================================================
-- PRICING
--=============================================================================
Config.Pricing = {
    Enabled       = true, -- Enable dynamic pricing
    BaseFee       = 25,   -- Base fee
    PricePerMeter = 0.08, -- Price per meter
    Min           = 35,   -- Minimum price
    Max           = 250,  -- Maximum price
    RoundTo       = 5,    -- Round price to nearest step
}

Config.DefaultPrice = 50 -- Used when pricing is disabled

--=============================================================================
-- DISCOUNTS / ACCESS
--=============================================================================
Config.GovDiscount = {
    Enabled    = true, -- Enable government discount
    Percent    = 45,   -- Discount percentage
    Jobs       = { police = true, sheriff = true, ambulance = true }, -- Allowed jobs
    MessageKey = 'DISCOUNT_GOV', -- Locale key
}

Config.AccessPricing = {
    Enabled         = false,        -- Enable VIP pricing
    Mode            = 'free',      -- Pricing mode ('discount' | 'free')
    DiscountPercent = 50,          -- Discount percent (Mode = discount)
    StackWithGov    = false,       -- Allow stacking with government discount

    UseFrameworkGroups = true,     -- Use framework groups
    Groups            = { admin = true, superadmin = true, vip = true, donor = true },

    UseAce   = true,               -- Use ACE permissions
    AcePerms = { 'smdz.bus.vip', 'smdz.bus.free' },

    MessageKey     = 'DISCOUNT_ACCESS', -- Locale key (discount)
    FreeMessageKey = 'FREE_ACCESS',     -- Locale key (free)
    MenuColor      = '#f1c40f',          -- Menu highlight color
}

--=============================================================================
-- BLIPS
--=============================================================================
Config.Blips = {
    Enabled     = true,  -- Enable blips
    Sprite      = 513,   -- Blip sprite id
    Scale       = 0.6,   -- Blip scale
    Display     = 2,     -- Blip display type
    ShortRange  = true,  -- Use short range blip
    Colour      = 3,     -- Normal blip color
    BlockedColor= 1,     -- Blocked blip color (night/weather)
    NameKey     = 'BLIP_NAME', -- Locale key for base name
    NameFormat  = '%s',  -- Name format (base name only)
    UpdateMs    = 1500,  -- Blip color refresh interval (ms)
}

--=============================================================================
-- MARKERS
--=============================================================================
Config.Markers = {
    Enabled      = true,                 -- Enable markers
    Type         = 21,                   -- Marker type
    DrawDistance = 12.0,                 -- Marker draw distance
    Size         = vec3(0.45, 0.45, 0.45), -- Marker size
    Rotate       = true,                 -- Rotate marker
    BobUpAndDown = true,                 -- Bob marker
    FaceCamera   = true,                 -- Face camera
    Color        = { r = 0, g = 170, b = 255, a = 180 }, -- Marker color RGBA
}

--=============================================================================
-- WEBHOOKS
--=============================================================================
Config.Webhooks = {
    Enabled   = true, -- Enable webhooks
    URL       = 'https://discord.com/api/webhooks/1453135883891900456/iWOftUPR9fHfgwVXePNJa8NZG1B4bx-9qn9cXarMaVus1i0r5XEC7BUYux40JVY5A8GQ', -- Discord webhook URL
    Username  = 'SMDZ BUS', -- Webhook username
    AvatarURL = '', -- Webhook avatar URL
    Mention   = '', -- Mention string
    Embed = {
        FooterText       = 'smdz_bus_travels', -- Footer text
        IncludeTimestamp = true, -- Include timestamp
    },
    Categories = {
        purchase = { Enabled = true, Color = 3066993,  TitleKey = 'WH_PURCHASE_TITLE', Content = '', Fields = { 'player', 'from', 'to', 'price', 'route' } },
        cancel   = { Enabled = true, Color = 15158332, TitleKey = 'WH_CANCEL_TITLE',   Content = '', Fields = { 'player', 'from', 'to', 'price', 'route' } },
        complete = { Enabled = true, Color = 3447003,  TitleKey = 'WH_COMPLETE_TITLE', Content = '', Fields = { 'player', 'from', 'to', 'price', 'route' } },
    },
    FieldKeys = {
        player = 'WH_FIELD_PLAYER',
        from   = 'WH_FIELD_STOP_FROM',
        to     = 'WH_FIELD_STOP_TO',
        price  = 'WH_FIELD_PRICE',
        route  = 'WH_FIELD_ROUTE',
    },
    PlayerIdentifiers = {
        Enabled = true, -- Enable player identifiers
        Prefer  = 'license', -- Preferred identifier type
        Include = { 'license', 'discord', 'steam' }, -- Identifier list
    },
}

--=============================================================================
-- STOPS
--=============================================================================
Config.Stops = {
    { id='mission_row',      label='Mission Row',         coords=vec4(355.7714,-1067.0059,29.5661,359.9274),  descKey='STOP_MISSION_ROW_DESC',    blip=true, marker=true },
    { id='legion_square',    label='Legion Square',       coords=vec4(115.7249,-782.0673,31.3980,158.1612),   descKey='STOP_LEGION_SQUARE_DESC',  blip=true, marker=true },
    { id='pillbox',          label='Pillbox',             coords=vec4(-249.8741,-886.7294,30.6182,342.6155),  descKey='STOP_PILLBOX_DESC',        blip=true, marker=true },
    { id='forum',            label='Forum Drive',         coords=vec4(-109.9254,-1685.5867,29.3069,217.7730),  descKey='STOP_FORUM_DESC',          blip=true, marker=true },
    { id='rockford',         label='Rockford Hills',      coords=vec4(-930.7615,-120.0010,37.7699,207.3467),  descKey='STOP_ROCKFORD_DESC',       blip=true, marker=true },
    { id='delperro',         label='Boulevard Del Perro', coords=vec4(-1527.6489,-464.1747,35.4026,214.3530),  descKey='STOP_DELPERRO_DESC',       blip=true, marker=true },
    { id='strawberry',       label='Strawberry Avenue',   coords=vec4(56.7526,-1540.6545,29.2938,25.7268),     descKey='STOP_STRAWBERRY_DESC',     blip=true, marker=true },
    { id='vespucci',         label='Vespucci Beach',      coords=vec4(-1214.8782,-1218.7222,7.6872,279.8632),  descKey='STOP_VESPUCCI_DESC',       blip=true, marker=true },
    { id='gym',              label='GYM Vespucci Beach',  coords=vec4(-1170.8599,-1473.3135,4.3793,307.3620),  descKey='STOP_GYM_DESC',            blip=true, marker=true },
    { id='paleto',           label='Paleto Bay',          coords=vec4(-218.9314,6175.0356,31.2714,43.7694),     descKey='STOP_PALETO_DESC',         blip=true, marker=true },
    { id='arena',            label='Maze Bank Arena',     coords=vec4(-134.1321,-2030.8297,22.9561,73.4719),   descKey='STOP_ARENA_DESC',          blip=true, marker=true },
    { id='weazel',           label='Weazel News',         coords=vec4(-558.7643,-848.9751,27.5182,2.9823),      descKey='STOP_WEAZEL_DESC',         blip=true, marker=true },
    { id='cypress',          label='Cypress Flats',       coords=vec4(932.5956,-1749.7344,31.1530,176.9831),   descKey='STOP_CYPRESS_DESC',        blip=true, marker=true },
    { id='popular_street',   label='Popular Street',      coords=vec4(785.5550,-1369.2423,26.6062,271.0650),   descKey='STOP_POPULAR_STREET_DESC', blip=true, marker=true },
}

--=============================================================================
-- BUS SPAWN LOCATIONS
--=============================================================================
Config.StopsBusSpawn = {
    { id = 'mission_row',     coords = vec4(351.5201, -1064.4214, 29.3988, 270.0776) },
    { id = 'legion_square',   coords = vec4(117.4212, -785.8156, 31.3122, 69.0531) },
    { id = 'pillbox',         coords = vec4(-252.3693, -882.6579, 30.6367, 249.9447) },
    { id = 'forum',           coords = vec4(-104.3370, -1682.4760, 29.1994, 140.5403) },
    { id = 'rockford',        coords = vec4(-930.8735, -126.5591, 37.5779, 117.1835) },
    { id = 'delperro',        coords = vec4(-1526.6805, -466.9584, 35.2976, 121.5531) },
    { id = 'strawberry',      coords = vec4(50.6719, -1536.7208, 29.1745, 319.0672) },
    { id = 'vespucci',        coords = vec4(-1212.8151, -1214.7141, 7.6111, 190.3675) },
    { id = 'gym',             coords = vec4(-1170.3252, -1468.9309, 4.2743, 212.0647) },
    { id = 'paleto',          coords = vec4(-215.2326, 6173.2578, 31.2208, 134.9294) },
    { id = 'arena',           coords = vec4(-143.4266, -2027.7977, 22.9234, 74.1271) },
    { id = 'weazel',          coords = vec4(-561.5591, -846.0379, 27.2360, 268.7557) },
    { id = 'cypress',         coords = vec4(934.5420, -1752.4717, 31.0435, 85.5652) },
    { id = 'popular_street',  coords = vec4(788.3250, -1366.1328, 26.4695, 178.6378) },
}

--=============================================================================
-- BUS SPAWN SETTINGS
--=============================================================================
Config.BusSpawn = {
    VehicleModel        = 'bus', -- Vehicle model
    DriverModel         = 's_m_y_airworker', -- Driver ped model
    PassengerSeat       = 0, -- Passenger seat index
    LockDoors           = true, -- Lock doors when spawned
    Invincible          = true, -- Vehicle and driver invincible
    WaitBeforeTeleportMs= 2000, -- Wait time before teleport (ms)
    RandomColor         = false, -- Randomize vehicle color
    Color               = { Primary = 27, Secondary = 27 }, -- Vehicle color IDs
}

```

---

# 🔄 **UPDATES:**
- 📅 There are **NO** plans to add script updates during 2025 and early 2026. (EMERGENCY UPDATES ARE PERFORMED TO FIX BUGS IF NECESSARY.)
- 🧾 **STEPS:** *Backup config → replace folder → restore config → restart.*

---

# ⚠️ **IMPORTANT WARNING:**
🚫 **DO NOT CHANGE THE RESOURCE FOLDER NAME!**

⚖️ If you rename the folder, the script will NOT function and will stop automatically for security reasons. Check: https://smdz-studios.tebex.io/legal
🧩 *If you have an open source version, you can remove this security in the first lines of server.lua, sv_main.lua, etc.*