# FAST REPAIR - ADVANCED VEHICLE REPAIR NPC

<div align="center" style="margin-bottom: 1.5rem;">
  <!-- Replace the src with your real showcase video URL (YouTube, etc.) -->
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/uL_LQjPPQtvLUg"
    title="smdz_example showcase"
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
- **Name:** `smdz_speedforzones`
- **Author:** SMDZ Studios
- **Framework:** ESX / QBCore 
- **Version:** `1.0.0`
- **Status:** <span class="badge badge--stable">Stable</span>

Welcome to the official documentation for smdz_speedforzones, your all-in-one solution for zone-based speed control in FiveM.
This guide covers everything: installation, configuration, features, troubleshooting, FAQs, and more.
Emojis highlight key sections for clarity and navigation.


# ⚡ **FEATURES:**

- 🚧 Zone-based speed limits using PolyZone polygons.
- 🌊 Smooth speed cap transitions for realistic driving.
- 🛡️ Anti-overspeed clamp to prevent glitch or abuse.
- 🏁 Overlapping zone support: the most restrictive limit applies.
- 🔓 Temporary unlocks via hack items and PCB minigame.
- 🛒 Dealer integration (ox_lib): players purchase unlocks in-game.
- 🧑‍💻 Full ESX and QBCore compatibility (auto-detect or manual).
- 🗃️ ox_inventory support (optional).
- 📣 Discord webhook logging for events and moderation.
- ⚡ OneSync Infinity ready: optimized for high player counts.
- 🧩 Centralized config.lua: configure everything easily.
- 🔒 Security-first design: all critical logic runs server-side.
- 🚨 Resource folder name protection: script halts if misnamed.
- 🐞 Debug mode for setup and troubleshooting.
- 🌎 Multilingual support (English/Spanish, extendable).


# 📦 **REQUIREMENTS AND INSTALLATION:**
### 1. 🧩 **DEPENDENCIES:**

- **ox_lib** (required for dealer UI)
- **PolyZone** (required for zones)
- **pcb_minigame** (required for hacking)
- **ox_inventory** (optional, recommended for modern inventory)
- **OneSync Infinity** (recommended)

### 2. 📁 **FOLDER NAME:**

- Must be **EXACTLY:** `smdz_speedforzones`
**The script will print credits and block execution if the folder name is incorrect.**


### 3. 📄 **SERVER.CFG ORDER:**

```cfg
ensure ox_lib
ensure PolyZone
ensure pcb_minigame

ensure ox_inventory   # optional
ensure smdz_speedforzones
```


# 🗺️ **ZONES:**
Zones are defined in config.lua under Config.Zones.
Each uses PolyZone polygons (vector2 points) and custom texts for banners.
1. Zone options:
- ✅ enabled: true/false
- ✅ unlimited: true (no limit in zone)
- ✅ limit: speed cap (in km/h or mph)
- ✅ texts: enter/exit banner strings
- ✅ points: vector2 polygon
- 🔁 Overlapping zones:

*If a vehicle is inside multiple zones, the lowest limit applies.*
```lua
-- EXAMPLE:
Config.Zones = {
  CITY = {
    enabled = true,
    unlimited = false,
    limit = 60,
    texts = { enter = 'CITY LIMIT', exit = 'LEFT CITY' },
    points = { vector2(x1, y1), vector2(x2, y2), ... }
  }
} 
```


# 🧩 **HACK ITEMS & MINIGAME:**

Players can temporarily bypass speed limits by purchasing and using hack items.

**Flow:**

1. 🛒 Buy a hack item (mothercard) from a dealer.  
2. 🚶‍♂️ Use it while on foot near a vehicle.  
3. ✖️ Complete the PCB minigame (from `pcb_minigame`).  
4. 🔓 On success, the vehicle is “unlocked” for a set time.

**Config options:**

- 🧱 `Config.Hack.minigame`: resource name (default: `pcb_minigame`)  
- 🔩 `solderCount`: minigame difficulty  
- ⏱️ `minigameTimeSec`: minigame duration  
- 🧷 `consumeOnSuccess` / `consumeOnFail`: item removal  
- 🧪 Items: label, duration, price per item  

**🔒 SECURITY:**  
All hack attempts and item removals are validated server-side.  
The unlock applies only to the specific vehicle and exactly for the configured time.


# 💰 **DEALERS:**

Dealers use **ox_lib** menus for a modern experience.

**Config options:**

- 📍 `coords`: dealer location  
- 🧍 `pedModel`: character model  
- 🛒 `saleItems`: items and prices  
- 💳 `money.mode`: `account` (ESX/QB) or `item` (inventory)  
- ⏳ `purchaseCooldownMin`: cooldown per player to prevent spam  

**Flow:**

- 🚶 Approach dealer NPC.  
- 📑 Open menu, select item to buy.  
- 🔍 Server checks funds, cooldown, proximity.  
- 📦 Item delivered; if inventory fails, refund is automatic.



# ⚙️ **CONFIGURATION:**
Everything is in config.lua.
Key sections:
- 🧑‍💻 FrameworkMode: auto, esx, qb, none
- 🚦 Units: kmh/mph
- 🗺️ Zones: polygons and texts
- 🧩 Hack: items, minigame, durations, flags
- 💰 Dealers: NPCs, sale items, cooldowns
- 🔑 Bypass: admin/job permissions
- 📣 Logging: Discord webhook, embed colors
- 🌊 Smoothing: control transitions
- 🐞 Debug: setup mode

All in `config.lua`:

```lua

-- #####  #     # ######  #######     #####  ####### #     # ######  ### #######  #####  
--#     # ##   ## #     #      #     #     #    #    #     # #     #  #  #     # #     # 
--#       # # # # #     #     #      #          #    #     # #     #  #  #     # #       
-- #####  #  #  # #     #    #        #####     #    #     # #     #  #  #     #  #####  
--      # #     # #     #   #              #    #    #     # #     #  #  #     #       # 
--#     # #     # #     #  #         #     #    #    #     # #     #  #  #     # #     # 
-- #####  #     # ######  #######     #####     #     #####  ######  ### #######  #####  
--[[
================================================================================
SMDZ SpeedForZones – MASTER CONFIG (READ-ONLY TEMPLATE)
================================================================================
🧭 INDEX
--------------------------------------------------------------------------------
0)  [ROOT] Config                         – Main container (do not rename)
1)  [RUNTIME] Framework Mode              – Autodetect or force ESX/QB/None
2)  [I18N] Active Locale                  – Select language key (must exist)
3)  [I18N] Locales                        – Translation packs (es, en)
4)  [UNITS] Speed Units                   – 'kmh' or 'mph'
5)  [UI] Notification Banner              – On-screen banner styling
6)  [ACCESS] Bypass Rules                 – ACE / ESX / QB / Job allowlist
7)  [LOGS] Discord Webhook               – Enter/Exit embed settings
8)  [DB] Placeholder                      – Future DB enrichment toggle -- NOT IN USE FOR NOW
9)  [HACK] Vehicle Unlocker System        – Minigame, items, durations, anim
10) [SHOP] Dealer NPCs                    – Where to buy unlocker items
11) [ZONES] PolyZone Areas                – North, Los Santos, and HOW-TO add more
12) [CAP SMOOTHING] Transition Tuning     – Smoothing + tolerance (m/s)
13) [ENFORCEMENT] Driver-Only Flag        – Cap driver seat only
14) [PERF] Tick Interval                  – Client loop cadence (ms)
15) [ANTI-SPAM] Notification Cooldown     – Banner dedupe window (ms)
16) [DEBUG] Verbosity                     – Debug toggle & level

QUICK EDIT TIPS
- Only change VALUES. Do NOT add/remove keys or table entries.
- If something breaks, revert to defaults here and retry.
- For ZONES: KEEP POLYGONS SIMPLE and NON-INTERSECTING.

⚠️ POLYZONE SHAPES:
USE THIS TOOL TO DRAW/EXPORT POLYGONS -> https://skyrossm.github.io/PolyZoneCreator/
Copy the exported vector2 points into your zone’s `points` array.

================================================================================
]]


-- ╔════════════════════════════════╗
-- ║ 0) [ROOT] MAIN CONFIG TABLE    ║
-- ╚════════════════════════════════╝
-- 🔺 WANT TO BREAK THE SCRIPT? CHANGE THIS.... NAH, DON'T BE STUPID, DON'T TOUCH IT :)
-- 🔺 WANT TO BREAK THE SCRIPT? CHANGE THIS.... NAH, DON'T BE STUPID, DON'T TOUCH IT :)

Config = {} -- Root configuration table (do not rename)



-- ╔══════════════════════════════════════════════════════╗
-- ║ 1) [RUNTIME] FRAMEWORK MODE                          ║
-- ╚══════════════════════════════════════════════════════╝
-- CONFIG: 'auto' will detect ESX/QBCore/none. Or force: 'esx' | 'qb' | 'none'
Config.FrameworkMode = 'auto' -- Framework selection: 'auto' to detect, or force 'esx' | 'qb' | 'none'



-- ╔══════════════════════════════════════════════════════╗
-- ║ 2) [I18N] ACTIVE LOCALE                              ║
-- ╚══════════════════════════════════════════════════════╝
-- Must match a key in Config.Locales (e.g., 'en', 'es')
Config.Locale = 'en' -- Active locale key in Config.Locales



-- ╔══════════════════════════════════════════════════════╗
-- ║ 3) [I18N] LOCALE DICTIONARIES                        ║
-- ╚══════════════════════════════════════════════════════╝
-- Keep keys identical across languages. Do not rename keys.
Config.Locales = { -- Translations container keyed by locale code
  es = { -- Spanish translation pack (kept as-is)
    unit_kmh = 'km/h', -- Unit label for kilometers per hour
    unit_mph = 'mph', -- Unit label for miles per hour
    dealer_ctx_title = 'Dealer · Deslimitadores', -- Dealer menu title
    dealer_ctx_desc = 'Selecciona un producto', -- Dealer menu description
    dealer_ctx_buy = 'Comprar', -- Dealer buy action label
    dealer_ctx_cancel = 'Cancelar', -- Dealer cancel option label
    dealer_price_prefix = '$', -- Currency prefix for prices
    dealer_need_near = 'Debes estar junto al vendedor', -- Message when not near dealer
    dealer_not_enough = 'Fondos insuficientes', -- Message when not enough money
    dealer_need = 'Necesitas', -- Prefix for required amount
    dealer_paid = 'Compra realizada', -- Successful purchase title
    dealer_paid_desc = 'Has comprado:', -- Successful purchase description
    dealer_pay_error = 'Error de pago', -- Payment processing error
    dealer_item_error = 'Error al entregar ítem', -- Item delivery error
    dealer_na = 'No disponible', -- Not available message
    dealer_item_invalid = 'Ítem inválido', -- Invalid item message
    dealer_cooldown = 'Enfriamiento activo', -- Cooldown active title
    dealer_cooldown_desc = 'Vuelve en %d minutos', -- Cooldown message with minutes placeholder
    hack_disabled = 'Sistema de hack desactivado', -- Hack system disabled
    hack_no_vehicle = 'No hay vehículos cercanos', -- No vehicle nearby
    hack_too_far = 'Te alejaste del vehículo', -- Too far from vehicle during validation
    hack_invalid_vehicle = 'Vehículo inválido', -- Invalid vehicle entity
    hack_failed = 'Hack fallido', -- Hack failed title
    hack_timeout = 'Tiempo agotado', -- Hack timeout message
    hack_error = 'Error en minijuego', -- Minigame error title
    hack_success = 'Hack exitoso', -- Hack success title
    hack_success_desc = 'Sin límite temporal en este vehículo', -- Hack success description
    hack_item_activated = 'activado temporalmente', -- Hack item activated note
    hacked_vehicle = 'Vehículo hackeado', -- Banner when vehicle hacked
    hacked_vehicle_desc = 'Activo por minutos', -- Banner subtext, minutes appended at runtime
    hack_in_vehicle = 'Debes estar a pie para hackear', -- Player must be on foot to hack
    hack_on_vehicle = 'No puedes estar encima del vehículo', -- Player cannot be standing on top of a vehicle
    hack_need_under = 'Debes estar bajo el vehículo para hackear', -- Player must be under the vehicle to hack
    hack_network_error = 'No se pudo registrar el vehículo en red', -- Vehicle could not be networked
    log_enter_title = 'Vehículo entró a zona', -- Webhook title for zone enter
    log_exit_title = 'Vehículo salió de zona' -- Webhook title for zone exit
  },
  en = { -- English translation pack (active if Config.Locale = 'en')
    unit_kmh = 'km/h', -- Unit label for kilometers per hour
    unit_mph = 'mph', -- Unit label for miles per hour
    dealer_ctx_title = 'Dealer · Unlockers', -- Dealer menu title
    dealer_ctx_desc = 'Pick a product', -- Dealer menu description
    dealer_ctx_buy = 'Buy', -- Dealer buy action label
    dealer_ctx_cancel = 'Cancel', -- Dealer cancel option label
    dealer_price_prefix = '$', -- Currency prefix for prices
    dealer_need_near = 'You must be near the dealer', -- Message when not near dealer
    dealer_not_enough = 'Insufficient funds', -- Not enough money message
    dealer_need = 'You need', -- Prefix for required amount
    dealer_paid = 'Purchase complete', -- Successful purchase title
    dealer_paid_desc = 'You bought:', -- Successful purchase description
    dealer_pay_error = 'Payment error', -- Payment processing error
    dealer_item_error = 'Delivery error', -- Item delivery error
    dealer_na = 'Not available', -- Not available message
    dealer_item_invalid = 'Invalid item', -- Invalid item message
    dealer_cooldown = 'Cooldown active', -- Cooldown active title
    dealer_cooldown_desc = 'Come back in %d minutes', -- Cooldown message with minutes placeholder
    hack_disabled = 'Hack system disabled', -- Hack system disabled
    hack_no_vehicle = 'No nearby vehicles', -- No vehicle nearby
    hack_too_far = 'You moved away from the vehicle', -- Too far from vehicle during validation
    hack_invalid_vehicle = 'Invalid vehicle', -- Invalid vehicle entity
    hack_failed = 'Hack failed', -- Hack failed title
    hack_timeout = 'Timed out', -- Hack timeout message
    hack_error = 'Minigame error', -- Minigame error title
    hack_success = 'Hack successful', -- Hack success title
    hack_success_desc = 'No limit temporarily on this vehicle', -- Hack success description (cap is disabled temporarily)
    hack_item_activated = 'activated temporarily', -- Hack item activated note (shown alongside item label)
    hacked_vehicle = 'Vehicle hacked', -- Banner when vehicle hacked
    hacked_vehicle_desc = 'Active for minutes', -- Banner subtext, minutes appended at runtime
    hack_in_vehicle = 'You must be on foot to hack', -- Player must be on foot to hack
    hack_on_vehicle = 'You cannot be on top of a vehicle', -- Player cannot be standing on top of a vehicle
    hack_need_under = 'You must be under the vehicle to hack it', -- Player must be under the vehicle to hack
    hack_network_error = 'Could not network the target vehicle', -- Vehicle could not be networked
    log_enter_title = 'Vehicle entered zone', -- Webhook title for zone enter
    log_exit_title = 'Vehicle left zone' -- Webhook title for zone exit
  },
  fr = { -- French translation pack
    unit_kmh = 'km/h', -- Unit label for kilometers per hour
    unit_mph = 'mph', -- Unit label for miles per hour
    dealer_ctx_title = 'Dealer · Débloqueurs', -- Dealer menu title
    dealer_ctx_desc = 'Choisissez un produit', -- Dealer menu description
    dealer_ctx_buy = 'Acheter', -- Dealer buy action label
    dealer_ctx_cancel = 'Annuler', -- Dealer cancel option label
    dealer_price_prefix = '$', -- Currency prefix for prices
    dealer_need_near = 'Vous devez être près du vendeur', -- Message when not near dealer
    dealer_not_enough = 'Fonds insuffisants', -- Not enough money message
    dealer_need = 'Il vous faut', -- Prefix for required amount
    dealer_paid = 'Achat effectué', -- Successful purchase title
    dealer_paid_desc = 'Vous avez acheté :', -- Successful purchase description
    dealer_pay_error = 'Erreur de paiement', -- Payment processing error
    dealer_item_error = 'Erreur de livraison', -- Item delivery error
    dealer_na = 'Indisponible', -- Not available message
    dealer_item_invalid = 'Objet invalide', -- Invalid item message
    dealer_cooldown = 'Temps d’attente actif', -- Cooldown active title
    dealer_cooldown_desc = 'Revenez dans %d minutes', -- Cooldown message with minutes placeholder
    hack_disabled = 'Système de piratage désactivé', -- Hack system disabled
    hack_no_vehicle = 'Aucun véhicule à proximité', -- No vehicle nearby
    hack_too_far = 'Vous vous êtes éloigné du véhicule', -- Too far from vehicle during validation
    hack_invalid_vehicle = 'Véhicule invalide', -- Invalid vehicle entity
    hack_failed = 'Piratage échoué', -- Hack failed title
    hack_timeout = 'Délai dépassé', -- Hack timeout message
    hack_error = 'Erreur de mini-jeu', -- Minigame error title
    hack_success = 'Piratage réussi', -- Hack success title
    hack_success_desc = 'Aucune limite temporaire sur ce véhicule', -- Hack success description
    hack_item_activated = 'activé temporairement', -- Hack item activated note
    hacked_vehicle = 'Véhicule piraté', -- Banner when vehicle hacked
    hacked_vehicle_desc = 'Actif pendant minutes', -- Banner subtext, minutes appended at runtime
    hack_in_vehicle = 'Vous devez être à pied pour pirater', -- Player must be on foot to hack
    hack_on_vehicle = 'Vous ne pouvez pas être sur le véhicule', -- Player cannot be standing on top of a vehicle
    hack_need_under = 'Vous devez être sous le véhicule pour pirater', -- Player must be under the vehicle to hack
    hack_network_error = 'Impossible de mettre le véhicule en réseau', -- Vehicle could not be networked
    log_enter_title = 'Véhicule entré dans la zone', -- Webhook title for zone enter
    log_exit_title = 'Véhicule sorti de la zone' -- Webhook title for zone exit
  },
  de = { -- German translation pack
    unit_kmh = 'km/h', -- Unit label for kilometers per hour
    unit_mph = 'mph', -- Unit label for miles per hour
    dealer_ctx_title = 'Händler · Entsperrer', -- Dealer menu title
    dealer_ctx_desc = 'Wähle ein Produkt', -- Dealer menu description
    dealer_ctx_buy = 'Kaufen', -- Dealer buy action label
    dealer_ctx_cancel = 'Abbrechen', -- Dealer cancel option label
    dealer_price_prefix = '$', -- Currency prefix for prices
    dealer_need_near = 'Du musst in der Nähe des Händlers sein', -- Message when not near dealer
    dealer_not_enough = 'Nicht genug Geld', -- Not enough money message
    dealer_need = 'Du brauchst', -- Prefix for required amount
    dealer_paid = 'Kauf abgeschlossen', -- Successful purchase title
    dealer_paid_desc = 'Du hast gekauft:', -- Successful purchase description
    dealer_pay_error = 'Zahlungsfehler', -- Payment processing error
    dealer_item_error = 'Lieferfehler', -- Item delivery error
    dealer_na = 'Nicht verfügbar', -- Not available message
    dealer_item_invalid = 'Ungültiger Gegenstand', -- Invalid item message
    dealer_cooldown = 'Abklingzeit aktiv', -- Cooldown active title
    dealer_cooldown_desc = 'Komm in %d Minuten wieder', -- Cooldown message with minutes placeholder
    hack_disabled = 'Hack-System deaktiviert', -- Hack system disabled
    hack_no_vehicle = 'Keine Fahrzeuge in der Nähe', -- No vehicle nearby
    hack_too_far = 'Du hast dich vom Fahrzeug entfernt', -- Too far from vehicle during validation
    hack_invalid_vehicle = 'Ungültiges Fahrzeug', -- Invalid vehicle entity
    hack_failed = 'Hack fehlgeschlagen', -- Hack failed title
    hack_timeout = 'Zeitüberschreitung', -- Hack timeout message
    hack_error = 'Minispiel-Fehler', -- Minigame error title
    hack_success = 'Hack erfolgreich', -- Hack success title
    hack_success_desc = 'Vorübergehend keine Begrenzung für dieses Fahrzeug', -- Hack success description
    hack_item_activated = 'vorübergehend aktiviert', -- Hack item activated note
    hacked_vehicle = 'Fahrzeug gehackt', -- Banner when vehicle hacked
    hacked_vehicle_desc = 'Aktiv für Minuten', -- Banner subtext, minutes appended at runtime
    hack_in_vehicle = 'Du musst zu Fuß sein, um zu hacken', -- Player must be on foot to hack
    hack_on_vehicle = 'Du darfst nicht auf dem Fahrzeug stehen', -- Player cannot be standing on top of a vehicle
    hack_need_under = 'Du musst unter dem Fahrzeug sein, um es zu hacken', -- Player must be under the vehicle to hack
    hack_network_error = 'Ziel-Fahrzeug konnte nicht vernetzt werden', -- Vehicle could not be networked
    log_enter_title = 'Fahrzeug hat Zone betreten', -- Webhook title for zone enter
    log_exit_title = 'Fahrzeug hat Zone verlassen' -- Webhook title for zone exit
  }
}





-- ╔══════════════════════════════════════════════════════╗
-- ║ 4) [UNITS] SPEED UNIT MODE                           ║
-- ╚══════════════════════════════════════════════════════╝
-- Affects math and UI labels. Valid: 'kmh' | 'mph'
Config.Units = { -- Unit system configuration
  mode = 'kmh' -- Mode for speed units: 'kmh' or 'mph'
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 5) [UI] NOTIFICATION BANNER                          ║
-- ╚══════════════════════════════════════════════════════╝
-- Purely visual; align with any custom NUI/CSS if you have one.
Config.Notifications = { -- Banner UI configuration
  enabled = true, -- Master toggle for banners
  durationMs = 2600, -- On-screen duration per banner (ms)
  fontFamily = 'Inter, system-ui, Arial, sans-serif', -- CSS font stack
  fontSize = '16px', -- Base font size for main line
  textColor = '#FFFFFF', -- Main text color
  textShadow = '0 0 6px rgba(0,0,0,0.8)', -- Improves legibility over bright scenes
  topOffset = '28px', -- Distance from top of screen
  subtitleEnabled = true -- Toggle the second line (subtext)
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 6) [ACCESS] BYPASS RULES                             ║
-- ╚══════════════════════════════════════════════════════╝
-- Lets staff/roles ignore caps. Item-based hacks still override caps.
Config.Bypass = { -- Bypass configuration for unlimited speed
  enabled = false, -- Global enable for bypass checks
  ace = { -- ACE permission gate
    enabled = false, -- Toggle ACE check
    permission = 'smdz_speedforzones.bypass' -- ACE permission string
  },
  esx = { -- ESX group-based gate
    enabled = false, -- Toggle ESX group check
    groups = { -- ESX groups eligible for bypass (true = allow)
      admin = false, -- ESX admin group
      superadmin = false -- ESX superadmin group
    }
  },
  qbcore = { -- QBCore permission/group gate
    enabled = false, -- Toggle QBCore check
    permissions = { -- QBCore HasPermission flags (true = allow)
      admin = false, -- QBCore admin flag
      god = false -- QBCore god flag
    },
    groups = { -- Optional fallback to PlayerData.group
      admin = false, -- Group name 'admin'
      god = false -- Group name 'god'
    }
  },
  jobs = { -- Job-based allowlist (ESX/QBCore)
    enabled = false, -- Toggle job whitelist
    list = { 'police', 'ambulance', 'mechanic' } -- Jobs allowed to bypass
  }
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 7) [LOGS] DISCORD WEBHOOK                            ║
-- ╚══════════════════════════════════════════════════════╝
-- Leave webhook empty to disable HTTP posts.
Config.Logging = { -- Discord webhook logging configuration
  enableEnterExitLogs = true, -- Log zone enter/exit events
  discordWebhook = '', -- Full webhook URL (empty = no posts)
  webhookUsername = 'smdz_speedforzones', -- Display name in embeds
  webhookAvatar = '', -- Optional avatar URL
  embedColorEnter = 5793266, -- Decimal embed color for ENTER
  embedColorExit = 16734296, -- Decimal embed color for EXIT
  minLogIntervalMs = 1200 -- Debounce per player+event (ms) to avoid spam
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 8) [DB] PLACEHOLDER (FUTURE USE)                     ║
-- ╚══════════════════════════════════════════════════════╝
-- 🔺 CURRENTLY NOT IN USE, HAS NO EFFECT, LEAVE IT DISABLED, PREPARED IN PRODUCTION FOR FUTURE UPDATES
-- 🔺 CURRENTLY NOT IN USE, HAS NO EFFECT, LEAVE IT DISABLED, PREPARED IN PRODUCTION FOR FUTURE UPDATES

-- Reserved for future DB enrichment (e.g., character names).
Config.Database = { -- Optional DB enrichment toggle (no queries shipped)
  enabled = false -- When true, server may enrich logs with DB data if implemented
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 9) [HACK] VEHICLE UNLOCKER SYSTEM                    ║
-- ╚══════════════════════════════════════════════════════╝
-- Temporarily disables the speed cap for the target vehicle after success.
Config.Hack = { -- Vehicle hacking system configuration
  enabled = true, -- Master toggle for hack system
  minigame = 'pcb_minigame', -- Resource name of the minigame to use
  solderCount = 4, -- Number of solder points/puzzles
  minigameTimeSec = 60, -- Global time limit (seconds)
  useDistance = 3.0, -- Max player->vehicle distance to use the item (client gate)
  validationDistance = 6.0, -- Server-side recheck distance (anti-cheat/lag safety)
  consumeOnSuccess = true, -- Remove item on success
  consumeOnFail = true, -- Remove item on fail (set false for testing)
  items = { -- Hack items definition keyed by item name (🔺 match your inventory 🔺)
    mothercard_classic = { -- Item key for inventory/shops
      label = 'Mothercard Classic', -- Human-readable label
      durationSec = 5 * 60, -- Temporary unlimited speed duration (seconds)
      defaultPrice = 10000 -- Used by dealers if price not overridden
    },
    mothercard_oldgen = {
      label = 'Mothercard OldGen',
      durationSec = 10 * 60,
      defaultPrice = 20000
    },
    mothercard_nextgen = {
      label = 'Mothercard NextGen',
      durationSec = 15 * 60,
      defaultPrice = 25000
    }
  },
  animation = { -- Client-side animation while hacking
    enabled = true, -- Play animation during minigame
    dict = 'anim@heists@ornate_bank@hack', -- Animation dictionary
    name = 'hack_loop', -- Animation clip
    flag = 1, -- TaskPlayAnim flags
    blendIn = 2.0, -- Blend-in speed
    blendOut = 2.0 -- Blend-out speed
  }
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 10) [SHOP] DEALER NPC LIST                           ║
-- ╚══════════════════════════════════════════════════════╝
-- Supports multiple dealers. Ensure ped model + coords are valid.
Config.Dealers = { -- Dealer NPC list
  {
    enabled = true, -- Enable this dealer entry
    pedModel = 's_m_y_dealer_01', -- Model for the dealer ped
    coords = vector3(774.7574, 1289.6350, 360.2964), -- Dealer world coordinates
    heading = 144.5051, -- Dealer heading
    scenario = 'WORLD_HUMAN_AA_SMOKE', -- Optional scenario (leave empty for idle)
    holdBagProp = false, -- Attach bag prop (cosmetic only)
    bag = { -- Bag prop attachment configuration (reserved for future use)
      model = 'prop_cs_heist_bag_02', -- Prop model name
      bone = 28422, -- Bone ID to attach the prop
      pos = { x = 0.13, y = -0.18, z = -0.02 }, -- Relative offsets
      rot = { x = 80.0, y = 0.0,  z = 10.0 } -- Relative rotations
    },
    ui = { -- 3D text & interaction
      drawDistance = 15.0, -- 3D text render distance
      interactDistance = 2.0, -- E key interaction distance
      keyPurchase = 38 -- Control index for purchase key (E)
    },
    money = { -- Payment method config
      mode = 'item', -- 'account' (ESX/QB bank/cash) or 'item' (cash item)
      accountName = 'money', -- Account name if mode = 'account'
      itemName = 'money' -- Item name if mode = 'item'
    },
    purchaseCooldownMin = 30, -- Per-player cooldown after a purchase (minutes)
    saleItems = { -- Items sold by this dealer
      { key = 'mothercard_classic', price = 10000 }, -- Classic tier
      { key = 'mothercard_oldgen',  price = 20000 }, -- OldGen tier
      { key = 'mothercard_nextgen', price = 25000 } -- NextGen tier
    }
  }
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 11) [ZONES] POLYZONE AREAS                           ║
-- ╚══════════════════════════════════════════════════════╝
-- `unlimited = true`  -> NO cap inside the zone.
-- `unlimited = false` -> Cap set to `limit` (interpreted by Units.mode).
-- KEEP POLYGONS SIMPLE. DO NOT SELF-INTERSECT.
-- 🔺 USE THIS TOOL TO CREATE YOUR POLYGONS: https://skyrossm.github.io/PolyZoneCreator/
Config.Zones = { -- Speed enforcement zones using PolyZone polygons

  -- ─────────────────── Built-in Zone: NORTH (unlimited speed inside) ───────────────────────────
  NORTH = { -- Zone identifier
    enabled = true, -- Toggle this zone on/off
    unlimited = true, -- If true, cap is disabled inside this zone
    limit = 0, -- Ignored when unlimited = true
    texts = { -- Banner texts for enter/exit
    enter = 'YOU HAVE ENTERED THE NORTH', -- Enter banner main text
    exit = 'YOU HAVE LEFT THE NORTH', -- Exit banner main text
    sub_enter = 'Drive responsibly. Enjoy our Blaine County!', -- Enter subtext
    sub_exit = 'Thanks for visiting, we hope to see you again soon.' -- Exit subtext
    },
    points = { -- Polygon 2D points (vector2) defining the zone contour
      vector2(1874.24, 1312.12), vector2(1739.39, 1342.42), vector2(1533.33, 1400.00),
      vector2(1103.79, 1488.64), vector2(639.39, 1524.24),  vector2(169.70, 1581.82),
      vector2(-359.09, 1656.06), vector2(-613.64, 1615.15), vector2(-853.03, 1575.76),
      vector2(-1100.00, 1483.33), vector2(-1519.70, 1350.00), vector2(-2216.67, 1045.45),
      vector2(-2427.27, 950.00), vector2(-2581.82, 898.48), vector2(-2704.55, 842.42),
      vector2(-2803.03, 754.55), vector2(-2830.30, 663.64), vector2(-2872.73, 572.73),
      vector2(-2945.45, 386.36), vector2(-2880.30, 193.94), vector2(-2819.70, 83.33),
      vector2(-2804.55, -60.61), vector2(-2960.61, -106.06), vector2(-3092.42, -115.15),
      vector2(-3159.09, -122.73), vector2(-3216.67, -65.15), vector2(-3289.39, 465.15),
      vector2(-3568.18, 1071.21), vector2(-3204.55, 2316.67), vector2(-3283.33, 3371.21),
      vector2(-2440.91, 4813.64), vector2(-2198.48, 5571.21), vector2(-1465.15, 6195.45),
      vector2(-386.36, 7031.82), vector2(-216.67, 7753.03), vector2(486.36, 7765.15),
      vector2(540.91, 7286.36), vector2(880.30, 6856.06), vector2(2092.42, 6922.73),
      vector2(3116.67, 6813.64), vector2(3837.88, 6195.45), vector2(4134.85, 5340.91),
      vector2(4395.45, 4092.42), vector2(4340.91, 3395.45), vector2(4207.58, 2759.09),
      vector2(3971.21, 1898.48), vector2(3559.09, 965.15), vector2(3516.67, 395.45),
      vector2(3460.61, 89.39), vector2(3283.33, 106.06), vector2(3089.39, 174.24),
      vector2(2925.76, 192.42), vector2(2662.12, 198.48), vector2(2436.36, 204.55),
      vector2(2372.73, 865.15), vector2(1962.12, 1325.76)
    }
  },

  -- ─────────────────── Built-in Zone: LOS SANTOS (limited speed inside) ────────────────────────
  LOS_SANTOS = { -- Zone identifier
    enabled = true, -- Toggle this zone on/off
    unlimited = false, -- If false, enforce `limit` inside this zone
    limit = 120, -- Speed cap (interpreted in Units.mode)
    texts = { -- Banner texts for enter/exit
    enter = 'YOU HAVE ENTERED LOS SANTOS', -- Enter banner main text
    exit = 'YOU HAVE LEFT LOS SANTOS', -- Exit banner main text
    sub_enter = 'Drive responsibly. Enjoy your stay!', -- Enter subtext
    sub_exit = 'Thanks for visiting, we hope to see you again soon.' -- Exit subtext
    },
    points = { -- Polygon 2D points (vector2) defining the zone contour
      vector2(-3053.03, -162.12), vector2(-2301.52, -1374.24), vector2(-1853.03, -2059.09),
      vector2(-1695.45, -2300.00), vector2(-2201.52, -2953.03), vector2(-2265.15, -3310.61),
      vector2(-956.06, -3986.36), vector2(-528.79, -3295.45), vector2(-422.73, -3098.48),
      vector2(1.52, -3110.61), vector2(-22.73, -3492.42), vector2(1568.18, -3565.15),
      vector2(1598.48, -3053.03), vector2(2089.39, -2940.91), vector2(2689.39, -2471.21),
      vector2(3189.39, -1716.67), vector2(3246.97, -965.15), vector2(3571.21, -4.55),
      vector2(2962.12, 165.15), vector2(2413.64, 171.21), vector2(2331.82, 865.15),
      vector2(1922.73, 1280.30), vector2(1128.79, 1462.12), vector2(584.85, 1484.85),
      vector2(295.45, 1522.73), vector2(-195.45, 1613.64), vector2(-895.45, 1537.88),
      vector2(-1701.52, 1237.88), vector2(-2213.64, 998.48), vector2(-2743.94, 777.27),
      vector2(-2901.52, 380.30), vector2(-2771.21, 31.82), vector2(-2765.15, -113.64)
    }
  }

  --[[
  ──────────────────────────────────────────────────────────────────────────────
  EXAMPLE: HOW TO ADD YOUR OWN ZONE (COPY/PASTE TEMPLATE)
  IMPORTANT:
    • KEEP YOUR POLYGON CLEAN (no self-intersections)
    • CHOOSE A UNIQUE KEY (e.g., "SANDY", "PALETO", "DOWNTOWN")
    • SET unlimited=false to enforce a speed `limit`
    • USE THIS TOOL TO DRAW/EXPORT: https://skyrossm.github.io/PolyZoneCreator/

  MY_CUSTOM_ZONE = {
    enabled = true,            -- Turn the zone on/off
    unlimited = false,         -- false = enforce cap; true = no cap inside
    limit = 80,                -- Interpreted by Config.Units.mode
    texts = {
      enter = 'YOU HAVE ENTERED MY CUSTOM ZONE',  -- Banner main text (enter)
      exit = 'YOU HAVE LEFT MY CUSTOM ZONE',      -- Banner main text (exit)
      sub_enter = 'Mind the speed limit and drive safe.', -- Optional subtext
      sub_exit = 'Come back soon. Respect local laws.'    -- Optional subtext
    },
    points = {
      -- Paste vector2(...) list exported by PolyZoneCreator here:
      -- vector2(x1, y1), vector2(x2, y2), vector2(x3, y3), ...
    }
  },
  ──────────────────────────────────────────────────────────────────────────────
  ]]
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 12) [CAP SMOOTHING] TRANSITION TUNING                ║
-- ╚══════════════════════════════════════════════════════╝
--- 🔺 STOP, DO NOT TOUCH, MODIFY ONLY IF YOU KNOW WHAT YOU ARE DOING, YOU COULD BREAK EVERYTHING, DO NOT TRY TO BE SMART ---
--- 🔺 STOP, DO NOT TOUCH, MODIFY ONLY IF YOU KNOW WHAT YOU ARE DOING, YOU COULD BREAK EVERYTHING, DO NOT TRY TO BE SMART ---

-- Helps avoid harsh jumps when caps change; values are in m/s semantics.
Config.Smoothing = { -- Cap smoothing and tolerance configuration
  enabled = true, -- Smooth transitions instead of instant snaps (when safe)
  decelMsPerSec = 45.0, -- How fast the cap drops (meters/second per second)
  snapDeltaMs = 12.0, -- If current cap exceeds target by ≥ this, snap immediately
  toleranceMs = 0.9 -- Allowed overshoot (m/s) before hard clamp engages
}



-- ╔══════════════════════════════════════════════════════╗
-- ║ 13) [ENFORCEMENT] DRIVER-ONLY FLAG                   ║
-- ╚══════════════════════════════════════════════════════╝
--- 🔺 STOP, DO NOT TOUCH, MODIFY ONLY IF YOU KNOW WHAT YOU ARE DOING, YOU COULD BREAK EVERYTHING, DO NOT TRY TO BE SMART ---
--- 🔺 STOP, DO NOT TOUCH, MODIFY ONLY IF YOU KNOW WHAT YOU ARE DOING, YOU COULD BREAK EVERYTHING, DO NOT TRY TO BE SMART ---

-- Prevents odd behavior for passengers (cap applies to driver only).
Config.EnforceDriverOnly = true -- Apply speed cap only for the driver seat



-- ╔══════════════════════════════════════════════════════╗
-- ║ 14) [PERF] CLIENT TICK INTERVAL                      ║
-- ╚══════════════════════════════════════════════════════╝
--- 🔺 STOP, DO NOT TOUCH, MODIFY ONLY IF YOU KNOW WHAT YOU ARE DOING, YOU COULD BREAK EVERYTHING, DO NOT TRY TO BE SMART ---
--- 🔺 STOP, DO NOT TOUCH, MODIFY ONLY IF YOU KNOW WHAT YOU ARE DOING, YOU COULD BREAK EVERYTHING, DO NOT TRY TO BE SMART ---

-- Lower = more responsive, more CPU. Higher = less CPU, lazier updates.
Config.TickIntervalMs = 120 -- Client loop interval for applying caps (ms)



-- ╔══════════════════════════════════════════════════════╗
-- ║ 15) [ANTI-SPAM] NOTIFICATION COOLDOWN                ║
-- ╚══════════════════════════════════════════════════════╝
-- Prevents banner spam if events fire in quick succession.
Config.NotificationCooldownMs = 900 -- Minimum gap between banner duplicates in ms



-- ╔══════════════════════════════════════════════════════╗
-- ║ 16) [DEBUG] VERBOSITY                                ║
-- ╚══════════════════════════════════════════════════════╝
-- Enable for troubleshooting; increase level for more detail.
Config.Debug = { -- Debug configuration
  enabled = false, -- Global debug on/off
  level = 1 -- 1 = info; >1 = verbose (may be noisy in production)
}




-- #####  #     # ######  #######     #####  ####### #     # ######  ### #######  #####  
--#     # ##   ## #     #      #     #     #    #    #     # #     #  #  #     # #     # 
--#       # # # # #     #     #      #          #    #     # #     #  #  #     # #       
-- #####  #  #  # #     #    #        #####     #    #     # #     #  #  #     #  #####  
--      # #     # #     #   #              #    #    #     # #     #  #  #     #       # 
--#     # #     # #     #  #         #     #    #    #     # #     #  #  #     # #     # 
-- #####  #     # ######  #######     #####     #     #####  ######  ### #######  #####  
```

# 🔒 **SECURITY:**
### Expanded Security Information

- 🛡️ **All critical logic is enforced server-side.**
  - Purchases, hack outcomes, item consumption, and event logging are processed and validated by the server. The client cannot fake purchases, hacks, or bypasses.

- 🚫 **No trust in client-side data.**
  - Every event (buy, use item, hack) is double-checked: player identity, permissions, item presence, and proximity.

- 🪪 **Permissions and role protection.**
  - Use ACE permissions, ESX/QBCore groups and job whitelists.  
    Only authorized users (admins, certain jobs) can bypass or access special features if you configure them.

- 🔥 **Discord webhook logging.**
  - All important events (zone entry/exit, purchases, hack attempts) can be logged to your Discord for moderation and audit.  
    Keep track of what happens, who buys, and who hacks.

- 🧬 **Resource folder name protection.**
  - If the resource folder is not named **smdz_speedforzones**, the script will **NOT** run.  
    This prevents accidental leaks and ensures you control where the script runs.

- 🐞 **Debug mode for safe setup.**
  - Enable debug for verbose logs during installation and testing.  
    Disable it in production for performance and security.

### Best Practices:

- ✅ Always start your dependencies in the correct order.  
- ✅ Use webhooks for real-time monitoring in production.  
- ✅ Set admin bypasses and job whitelists only for trusted users.  
- ✅ Review logs regularly for suspicious activity.  
- 🔄 Restart the server or resource after changing `config.lua`.



# 🐞 COMMON PROBLEMS:

## 📁 FOLDER NAME ERROR:
**Problem:** Resource prints an error and stops.  
**Solution:** Rename the folder to **smdz_speedforzones**.


## 📍 DEALER MENU DOESN'T OPEN:
**Problem:** No menu at dealer location.  
**Solution:** Start **ox_lib** before this resource and check dealer config.

## 🛠️ HACK ITEM NOT CONSUMED:
**Problem:** Item remains after use.  
**Solution:** Check your inventory integration (ox_inventory recommended), confirm item is registered and present.


## 🚗 VEHICLE NOT UNLOCKED AFTER HACK:
**Problem:** Speed cap still applies after minigame.  
**Solution:** Make sure **OneSync** is enabled and vehicle is networked. Confirm hack event is processed by the server.


## 🔥 WEBHOOK LOGS NOT SENT:
**Problem:** No Discord notifications.  
**Solution:** Verify webhook URL in config.lua. Check server firewall and Discord permissions.


## 🧩 FRAMEWORK NOT DETECTED:
**Problem:** Money/items not working.  
**Solution:** Explicitly set **FrameworkMode** if your server has both ESX and QBCore.


## 🚦 CLAMP FEELS TOO SOFT OR HARD:
**Problem:** Speed transitions feel unnatural.  
**Solution:** Adjust **Smoothing** parameters in config.


## 🎮 MINIGAME DOES NOT LAUNCH:
**Problem:** Nothing happens when using hack item.  
**Solution:** Ensure **pcb_minigame** is started and matches the configured resource name.


## ⚡ PLAYERS REPORT LAG OR SLOW RESPONSE:
**Problem:** Delay in speed enforcement or menu opening.  
**Solution:** Check server performance, ensure OneSync is enabled, and debug logs are disabled in production.


## 📦 ITEMS OR DEALERS NOT SHOWING UP:
**Problem:** Players cannot see or use items/dealers.  
**Solution:** Check registration in inventory system, dealer config and ensure correct dependency start order.



# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**
- ❓ **CAN I USE THIS ON ESX OR QBCORE?**
Yes, both are supported and auto-detected.

- ❓ **DO I NEED OX_INVENTORY?**
No, but it’s recommended for modern inventory features and better compatibility.

- ❓ **HOW DO I ADD MORE HACK ITEMS?**
Add entries to Config.Hack.items and register them in your inventory system (ESX/QBCore/ox_inventory).

- ❓ **CAN I CHANGE THE MINIGAME?**
Yes, set Config.Hack.minigame to your preferred resource name.

- ❓ **WHAT HAPPENS IF I RENAME THE RESOURCE FOLDER?**
The script will not start for security reasons. Always use smdz_speedforzones.

- ❓ **HOW DO I MONITOR PURCHASES AND HACKS?**
Enable Discord webhook logging via Config.Logging.discordWebhook.

- ❓ **CAN I ALLOW ADMINS OR CERTAIN JOBS TO BYPASS LIMITS?**
Yes, configure ACE and framework bypass settings in config.lua.

- ❓ **IS IT OPTIMIZED FOR BIG SERVERS?**
Yes, OneSync Infinity is recommended for best performance with many players.

- ❓ **CAN PLAYERS USE UNLOCKS IN ANY VEHICLE?**
No, unlocks apply only to the specific vehicle targeted during the hack.

- ❓ **DO BANNERS AND NOTIFICATIONS WORK IN ANY LANGUAGE?**
Banners support English and Spanish by default. You can add more translations in config.lua.

- ❓ **CAN I RESTRICT DEALER ACCESS TO CERTAIN JOBS?**
Yes, use job whitelist and permissions in the dealer config.

- ❓ **IS SERVER RESTART REQUIRED AFTER CHANGING CONFIG.LUA?**
Yes, restart the resource or server to apply config changes.

- ❓ **HOW DO I GET SUPPORT OR REPORT BUGS?**
Contact through the Tebex page, Discord, or the official documentation links.
- ❓ **HOW CAN I TROUBLESHOOT ISSUES IF THINGS DON'T WORK?**
1. Enable debug mode for more logs.
2. Check dependency order.
3. Verify proper registration of items and dealers.
4. Monitor server console for errors and warnings.

- ❓ **IS THIS SYSTEM SECURE AGAINST CHEATERS?**
Yes, all critical actions are validated server-side. No client can bypass restrictions or hack the system without server approval.

# 🔄 **UPDATES:**
- There are **NO** plans to add script updates during 2025 and early 2026.
- **STEPS:** *Backup config → replace folder → restore config → restart.*


# 📬 **SUPPORT:**
Include version, framework, logs, reproduction steps.



# ⚠️🚨 **IMPORTANT WARNING:**
**DO NOT CHANGE THE RESOURCE FOLDER NAME!**

If you rename the folder, the script will NOT function and will stop automatically for security reasons.
*Always use the exact name: smdz_speedforzones*