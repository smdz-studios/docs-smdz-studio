# 🚌 SMDZ BUS TRAVELS — DOCUMENTATION
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

Welcome to **SMDZ Bus Travels**, a configurable public transport system for FiveM with support for multiple frameworks, inventories, targets, notifications, progress bars, and advanced roleplay features.

---

# 🚌 SMDZ BUS TRAVELS — DOCUMENTATION
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

---

# ✨ FEATURES:

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

# 📦 INSTALLATION:

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

# ⚙️ CONFIGURATION (SHARED/CONFIG.LUA):

Everything is controlled from `shared/config.lua`.  
All options are documented inline, so open that file and edit values.

# 🧩 BRIDGES (PROVIDERS):

## 🔔 NOTIFICATIONS:

Set:

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

Set:

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

# 🕒 NIGHT BLOCKING:

If `Config.NightDisabled = true`, the service blocks between:

```
Config.NightFromHour -> Config.NightToHour
```

Players will see a message that includes the available hours.

---

# 🌧️ WEATHER BLOCKING:

Use `Config.WeatherBlock.Blocked` to define blocked weather types:

```
Blocked = { 'XMAS', 'SNOW', 'SNOWLIGHT', 'RAIN', 'THUNDER' }
```

When blocked, the menu shows a warning and prevents travel.

---

# 💸 PRICING:

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

# 🎖️ VIP ACCESS (DISCOUNT OR FREE):

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

# 🚌 BUS SPAWN REALISM:

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

# 🗺️ STOPS:

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

# 🌍 LOCALES:

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

# 🔎 DEBUG MODE:

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

# 📡 WEBHOOKS:

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

# 👨‍💻 EVENTS & EXPORTS (DEVELOPERS):

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

# 🛠️ TROUBLESHOOTING:

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

# ❓ FAQ – FREQUENTLY ASKED QUESTIONS:

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

**Recommended dependencies:**
- `ox_lib`
- `ox_target` (optional)
- `ox_inventory` (optional)

Other supported systems work fine if detected.

---

## 💬 Support

If you need help, open an issue with:

- your config
- framework/inventory/target setup
- client and server console logs

---

Enjoy the ride. 🚍
