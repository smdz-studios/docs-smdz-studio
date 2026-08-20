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
    src="https://www.youtube.com/embed/KsUE11fhFI0"
    title="SMDZ Witness Calls showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN OPEN SOURCE AND ESCROW VERSIONS
</p>

---

<section class="support-hero support-hero--shield">
  <p class="support-eyebrow">USAGE METRICS</p>
  <h1>STATISTICS ON THE RESOURCE</h1>
  <p>Check here for a list of servers using this resource and the number of players enjoying it. (Data provided by 5Metrics)</p>
  <div class="support-search-tip">Info: If you don't see anything directly below, it may be because it's not in use or there's a problem obtaining the metrics.</div>
</section>

<div align="center">

[![](https://badges.5metrics.dev/smdz_witness_calls/servers.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_witness_calls) | [![](https://badges.5metrics.dev/smdz_witness_calls/players.svg?style=for-the-badge)](https://5metrics.dev/resource/smdz_witness_calls)

</div>

---

# 🧩 **OVERVIEW:**

- 📌 **Resource Name:** `smdz_witness_calls`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone
- 🧾 **Version:** `1.0.1`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>


**Short description:**
SMDZ Witness Calls adds immersive civilian witnesses to FiveM. Nearby NPCs can detect crimes, call emergency services with synchronized phone animations, display a clean world-space progress interface, and send detailed alerts through supported dispatch systems.

---







# ⭐ FEATURES

- 📞 **Dynamic NPC Witness Calls** — Civilians NPC automatically report crimes they see or hear, creating more realistic and unpredictable police interactions.
- 🚨 **Multiple Crime Detection Types** — Supports gunshots, visible firearms, bladed weapons, assaults, vehicle thefts, hit-and-runs, civilian deaths, and player-down incidents.
- 👁️ **Intelligent Witness Selection** — The system evaluates distance, visibility, NPC condition, behavior, and criminal involvement before selecting a valid witness.
- 🏃 **Realistic Witness Reactions** — Witnesses can complete the call, flee the scene, surrender when threatened, drop their phone, or cancel the report when injured.
- 🔌 **Extensive Dispatch Compatibility** — Includes multiple ready-to-use dispatch bridges and developer exports for integrating custom robberies, missions, and illegal activities.
- 🌍 **Highly Configurable and Multilingual** — Customize crime probabilities, call duration, cooldowns, simultaneous reports, UI visibility, ignored NPCs, and ten included languages.
- 🧩 **Developer-Friendly Exports** — Easily connect custom robberies, missions, illegal activities, and third-party resources through flexible client and server exports with fully customizable report data.


## 🚨 **CRIMES DETECTED BY DEFAULT:**

- 🔫 Shots Fired — Civilians can report nearby gunshots, even when they do not directly see the shooter.
- 👀 Visible Firearms — NPCs can report players openly carrying pistols, rifles, and other firearms.
- 🔪 Visible Bladed Weapons — Detects knives, machetes, axes, and other configured melee weapons displayed in public.
- 👊 Assault in Progress — Witnesses can report players physically attacking civilians or other players.
- 🚗 Vehicle Theft — Detects players stealing occupied vehicles and includes the vehicle model and license plate in the report.
- 💥 Hit and Run — Civilians can report pedestrians being struck by vehicles, including vehicle details and estimated speed.
- ☠️ Civilian Killed — Nearby witnesses can report the death of an NPC caused by a player.
- 🚑 Person Down — Civilians can report when another player is critically injured or killed.




---


# 📦 **REQUIREMENTS:**

- **FiveM server:** Latest recommended artifact build.
- **Framework:** Standalone. Compatible with ESX, QBCore, Qbox, and custom frameworks because no framework dependency is required.
- **Required dependencies:** smdz_bridge
- **Optional dependency:** One supported dispatch resource when police alerts are required.

### Supported dispatch bridges:

- `bub_mdt` - BubbleDK
- `cd_dispatch` - Codesign Software
- `dusa_dispatch` - Dusa Scripts
- `fd_dispatch` - Felis Development
- `origen_police` - Origen Network
- `ps-dispatch` - Project Sloth
- `qf_mdt_police_v2` - QF Developers
- `qs_dispatch` - Quasar Store
- `qs_police_creator` - Quasar Store
- `rcore_dispatch` - RCore
- `tk_dispatch` - TK Scripts
- `lb-tablet` - LB Scripts
- `wasabi_mdt` - Wasabi Scripts
- `0r-dispatch` - 0Resmon Studio
- `plt_mdt` -  Pluto Development
- `plt_departments` - Pluto Development

---

# 📥 **INSTALLATION:**

1. Download the resource: `smdz_witness_calls.zip`
2. Extract the folder into your FiveM `resources` directory:

```text
resources/[smdz]/smdz_witness_calls
```

3. If you use a dispatch system, ensure it starts before this resource.
4. Add the resource to `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_bridge
ensure smdz_witness_calls
```

5. Restart the server or start the resource manually:

```bash
start smdz_witness_calls
```

6. Check the server console for the SMDZ startup banner and confirm the detected dispatch bridge, locale, receiver jobs, and enabled crime types.

---

# ⚙️ **CONFIGURATION:**

The main configuration file is `config.lua`. All options include inline English comments.

```lua


Config = {}

--──────────────────────────────────────────────────────────────────────────────
-- 1. GENERAL SETTINGS
--──────────────────────────────────────────────────────────────────────────────

Config.Enabled = true -- Enables or disables the whole witness system.

Config.Locale = 'en' -- Active language file. Available by default: 'en' and 'es'.

Config.Debug = false -- Enables translated debug prints in F8 when you need troubleshooting.

--──────────────────────────────────────────────────────────────────────────────
-- 2. WITNESS BEHAVIOR
--──────────────────────────────────────────────────────────────────────────────

Config.Witness = {
    maxActiveCalls = 4, -- Maximum witness calls that can be active at the same time for this player. Increase this when multiple calls in one area are enabled.

    randomCandidatePool = 4, -- Number of valid nearby NPCs used for the final random witness selection.

    requireLineOfSight = true, -- Requires NPCs to have line of sight unless the crime type overrides it.

    cancelIfDamaged = true, -- Cancels the call if the witness is damaged after the grace period.

    cancelIfDead = true, -- Cancels the call if the witness dies before the call completes.

    damageGracePeriod = 1200, -- Milliseconds after call start before damage can interrupt the witness.

    preferVisibleWitness = true, -- Prefers witnesses currently visible on screen for better DUI placement.

    markWitnessAsMissionEntity = true, -- Protects selected ambient NPCs from despawning while calling.

    fleeAfterCall = true, -- Makes the witness flee after a completed phone call.

    fleeAfterCancel = true, -- Makes the witness flee after the call is cancelled.

    threatCancel = {
        enabled = true, -- Allows the suspect to cancel the call by aiming a firearm at the witness.

        distance = 2.0, -- Maximum distance in meters required to threaten the witness.

        handsUpTime = 3500, -- Time in milliseconds the witness keeps their hands raised.

        fleeDelay = 2500, -- Delay in milliseconds before the threatened witness starts fleeing.

        deleteDroppedPhoneAfter = 9000 -- Time in milliseconds before the dropped phone prop is deleted.
    },

    ignorePolicePeds = true, -- Prevents police-style NPCs from becoming civilian witnesses by ped type.

    ignoredPedModels = { -- Ped models that can never become witnesses. Add police, sheriff, FIB, army, gangs, custom peds, etc.
        's_m_y_cop_01', -- LSPD male cop.
        's_f_y_cop_01', -- LSPD female cop.
        's_m_y_hwaycop_01', -- Highway patrol / traffic officer.
        's_m_y_sheriff_01', -- Sheriff male deputy.
        's_f_y_sheriff_01', -- Sheriff female deputy.
        's_m_y_ranger_01', -- Ranger male officer.
        's_f_y_ranger_01', -- Ranger female officer.
        's_m_y_swat_01', -- SWAT unit.
        's_m_m_fibsec_01', -- FIB security.
        's_m_m_fiboffice_01', -- FIB office agent.
        's_m_m_fiboffice_02', -- FIB office agent variant.
        's_m_m_ciasec_01', -- Federal/CIA security style ped.
        'u_m_m_fibarchitect', -- FIB architect/story ped.
        's_m_y_armymech_01', -- Army mechanic.
        's_m_y_marine_01', -- Marine soldier variant 1.
        's_m_y_marine_02', -- Marine soldier variant 2.
        's_m_y_marine_03', -- Marine soldier variant 3.
        's_m_m_marine_01', -- Marine soldier.
        's_m_m_marine_02', -- Marine soldier variant.
        's_m_y_blackops_01', -- Black ops soldier.
        's_m_y_blackops_02', -- Black ops soldier variant.
        's_m_y_blackops_03', -- Black ops soldier variant.
        's_m_m_security_01', -- Private security guard.
        's_m_m_prisguard_01' -- Prison guard.
    },

    ignoreMissionPeds = false, -- Ignores mission/entity-owned peds when enabled.

    replication = {
        enabled = true, -- Replicates witness phone visuals to nearby players.

        radius = 65.0, -- Distance in meters where nearby players can receive the witness animation/prop.

        playAnimationForNearby = true, -- Makes nearby players see the NPC phone animation when possible.

        createPhoneForNearby = true -- Makes nearby players see the phone prop when possible.
    }
}

--──────────────────────────────────────────────────────────────────────────────
-- 3. AUTOMATIC DETECTIONS
--──────────────────────────────────────────────────────────────────────────────

Config.Detections = {
    enabled = true, -- Enables all built-in automatic detections.

    shotsFired = {
        enabled = true, -- Detects gunshots heard by nearby civilians.

        cooldown = 9000 -- Cooldown in milliseconds for repeated shots fired detection.
    },

    visibleWeapon = {
        enabled = true, -- Detects players visibly holding weapons near civilians.

        cooldown = 65000, -- Cooldown in milliseconds for visible weapon reports.

        tick = 2500, -- Check interval in milliseconds for visible weapon detection.

        ignoreInVehicle = false, -- Allows weapon visibility reports while the player is inside a vehicle.

        ignoredWeapons = {
            [`WEAPON_UNARMED`] = true, -- Ignores unarmed state.
            [`WEAPON_FLASHLIGHT`] = true, -- Ignores flashlight.
            [`WEAPON_PETROLCAN`] = true, -- Ignores petrol can.
            [`WEAPON_FIREEXTINGUISHER`] = true, -- Ignores fire extinguisher.
            [`WEAPON_SNOWBALL`] = true, -- Ignores snowball.
            [`WEAPON_BALL`] = true -- Ignores thrown ball.
        },

        bladeWeapons = {
            [`WEAPON_KNIFE`] = true, -- Treats knife as a bladed/melee weapon.
            [`WEAPON_DAGGER`] = true, -- Treats dagger as a bladed/melee weapon.
            [`WEAPON_SWITCHBLADE`] = true, -- Treats switchblade as a bladed/melee weapon.
            [`WEAPON_MACHETE`] = true, -- Treats machete as a bladed/melee weapon.
            [`WEAPON_BATTLEAXE`] = true, -- Treats battle axe as a bladed/melee weapon.
            [`WEAPON_HATCHET`] = true, -- Treats hatchet as a bladed/melee weapon.
            [`WEAPON_BOTTLE`] = true, -- Treats bottle as a melee weapon.
            [`WEAPON_BAT`] = true, -- Treats bat as a melee weapon.
            [`WEAPON_CROWBAR`] = true, -- Treats crowbar as a melee weapon.
            [`WEAPON_GOLFCLUB`] = true, -- Treats golf club as a melee weapon.
            [`WEAPON_HAMMER`] = true, -- Treats hammer as a melee weapon.
            [`WEAPON_NIGHTSTICK`] = true, -- Treats nightstick as a melee weapon.
            [`WEAPON_POOLCUE`] = true, -- Treats pool cue as a melee weapon.
            [`WEAPON_WRENCH`] = true, -- Treats wrench as a melee weapon.
            [`WEAPON_STONE_HATCHET`] = true -- Treats stone hatchet as a bladed/melee weapon.
        }
    },

    vehicleTheft = {
        enabled = true, -- Detects players stealing or attempting to steal NPC vehicles.

        cooldown = 14000, -- Cooldown in milliseconds for vehicle theft reports.

        tick = 350 -- Check interval in milliseconds for vehicle theft detection.
    },

    vehicleHit = {
        enabled = true, -- Detects players running over NPCs or players with a vehicle.

        cooldown = 10000 -- Cooldown in milliseconds for hit-and-run reports.
    },

    assault = {
        enabled = true, -- Detects assault against NPCs or players near witnesses.

        cooldown = 10000, -- Cooldown in milliseconds for assault reports.

        tick = 500 -- Check interval in milliseconds for assault detection.
    },

    entityDamage = {
        enabled = true, -- Detects entity damage events such as kills and serious attacks.

        cooldown = 8000 -- Cooldown in milliseconds for entity damage reports.
    }
}

--──────────────────────────────────────────────────────────────────────────────
-- 4. CRIME TYPE SETTINGS / ALERT TOGGLES
--──────────────────────────────────────────────────────────────────────────────

-- Disable one entry here when you want to keep the detection code loaded but stop
-- that specific alert from creating witness calls or dispatch reports.
Config.CrimeTypes = {
    shots_fired = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Shots fired', -- Fallback label if the locale key is missing.
        localeKey = 'crime_shots_fired', -- Locale key displayed in the DUI and dispatch message.
        code = '10-13', -- Dispatch code for this crime type.
        priority = 'high', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 62.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = false, -- Shots can be heard, so direct line of sight is not required.
        callTime = { min = 10, max = 14 }, -- Random call duration in seconds.
        blip = { sprite = 110, color = 1, scale = 1.25, time = 5 } -- Dispatch blip settings when supported.
    },

    weapon_firearm_visible = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Person with firearm', -- Fallback label if the locale key is missing.
        localeKey = 'crime_weapon_firearm_visible', -- Locale key displayed in the DUI and dispatch message.
        code = '10-32', -- Dispatch code for this crime type.
        priority = 'high', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 36.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the firearm.
        callTime = { min = 10, max = 15 }, -- Random call duration in seconds.
        blip = { sprite = 161, color = 47, scale = 1.05, time = 4 } -- Dispatch blip settings when supported.
    },

    weapon_blade_visible = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Person with bladed weapon', -- Fallback label if the locale key is missing.
        localeKey = 'crime_weapon_blade_visible', -- Locale key displayed in the DUI and dispatch message.
        code = '10-32', -- Dispatch code for this crime type.
        priority = 'medium', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 33.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the weapon.
        callTime = { min = 10, max = 15 }, -- Random call duration in seconds.
        blip = { sprite = 154, color = 47, scale = 1.0, time = 4 } -- Dispatch blip settings when supported.
    },

    vehicle_theft = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Vehicle theft', -- Fallback label if the locale key is missing.
        localeKey = 'crime_vehicle_theft', -- Locale key displayed in the DUI and dispatch message.
        code = '10-31', -- Dispatch code for this crime type.
        priority = 'medium', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 38.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the theft.
        callTime = { min = 10, max = 15 }, -- Random call duration in seconds.
        blip = { sprite = 225, color = 1, scale = 1.1, time = 5 } -- Dispatch blip settings when supported.
    },

    vehicle_hit = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Vehicle hit and run', -- Fallback label if the locale key is missing.
        localeKey = 'crime_vehicle_hit', -- Locale key displayed in the DUI and dispatch message.
        code = '10-50', -- Dispatch code for this crime type.
        priority = 'high', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 45.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the collision.
        callTime = { min = 10, max = 14 }, -- Random call duration in seconds.
        blip = { sprite = 225, color = 1, scale = 1.15, time = 5 } -- Dispatch blip settings when supported.
    },

    assault = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Assault in progress', -- Fallback label if the locale key is missing.
        localeKey = 'crime_assault', -- Locale key displayed in the DUI and dispatch message.
        code = '10-10', -- Dispatch code for this crime type.
        priority = 'high', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 36.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the assault.
        callTime = { min = 10, max = 14 }, -- Random call duration in seconds.
        blip = { sprite = 311, color = 1, scale = 1.15, time = 5 } -- Dispatch blip settings when supported.
    },

    player_killed = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Person down', -- Fallback label if the locale key is missing.
        localeKey = 'crime_player_killed', -- Locale key displayed in the DUI and dispatch message.
        code = '10-52', -- Dispatch code for this crime type.
        priority = 'critical', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 50.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the attack.
        callTime = { min = 10, max = 13 }, -- Random call duration in seconds.
        blip = { sprite = 303, color = 1, scale = 1.3, time = 6 } -- Dispatch blip settings when supported.
    },

    npc_killed = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Civilian attacked', -- Fallback label if the locale key is missing.
        localeKey = 'crime_npc_killed', -- Locale key displayed in the DUI and dispatch message.
        code = '10-54', -- Dispatch code for this crime type.
        priority = 'high', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 42.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the attack.
        callTime = { min = 10, max = 14 }, -- Random call duration in seconds.
        blip = { sprite = 303, color = 1, scale = 1.2, time = 5 } -- Dispatch blip settings when supported.
    },

    custom = {
        enabled = true, -- Enables or disables only this specific alert type.

        label = 'Suspicious activity', -- Fallback label if the locale key is missing.
        localeKey = 'crime_custom', -- Locale key displayed in the DUI and dispatch message.
        code = '10-66', -- Dispatch code for custom integrations.
        priority = 'medium', -- Internal priority: low, medium, high, or critical.
        chance = 90, -- Percentage chance that a valid witness will call.
        radius = 35.0, -- Search radius in meters for valid witnesses.
        requireLineOfSight = true, -- Requires the witness to see the custom action.
        callTime = { min = 10, max = 15 }, -- Random call duration in seconds.
        blip = { sprite = 280, color = 1, scale = 1.1, time = 5 } -- Dispatch blip settings when supported.
    }
}

--──────────────────────────────────────────────────────────────────────────────
-- 5. COOLDOWNS
--──────────────────────────────────────────────────────────────────────────────

Config.Cooldowns = {
    perCrime = 12000, -- Global cooldown in milliseconds per crime type when no matching call is already active nearby.

    perArea = 20000, -- Area cooldown in milliseconds used when multipleCallsInSameArea.enabled is false.

    areaRadius = 45.0, -- Radius in meters used to group calls as being in the same area.

    multipleCallsInSameArea = {
        enabled = true, -- Allows several witness calls to remain active at the same time inside the same area radius.

        maxActive = 3, -- Maximum simultaneous calls permitted inside one area. Use 0 for no per-area limit.

        allowSameCrime = true -- Allows another call for the same crime type while a matching call is already active in that area.
    }
}

--──────────────────────────────────────────────────────────────────────────────
-- 6. DISPATCH BRIDGE
--──────────────────────────────────────────────────────────────────────────────

Config.Dispatch = {
    system = 'auto', -- Bridge mode: auto, none, origen_police, bub-mdt, cd_dispatch, fd_dispatch, kartik-mdt, lb-tablet, p_mdt, qs-dispatch, tk_dispatch, redutzu-mdt, rcore_dispatch, core_dispatch, kibra-dispatch, 0r-dispatch.

    jobs = { 'police', 'sheriff', 'fib' } -- Jobs that receive dispatch alerts. This global list has priority over provider defaults.
}

--──────────────────────────────────────────────────────────────────────────────
-- 7. DUI / NUI VISIBILITY
--──────────────────────────────────────────────────────────────────────────────

Config.UI = {
    visibility = 'suspect', -- DUI visibility: suspect, nearby, suspect_and_participants, or none.

    nearbyRadius = 35.0, -- Distance in meters for nearby players when visibility is set to nearby.

    showGender = false, -- Shows suspect gender in the DUI when enabled. Dispatch metadata still receives it.

    showCrime = true, -- Shows the crime label above the circular progress DUI.

    showCode = false, -- Shows the dispatch code in the DUI when enabled.

    hideDelayAfterEnd = 850, -- Delay in milliseconds before the DUI hides after completed/cancelled state.

    updateInterval = 16, -- DUI screen position update interval in milliseconds.

    maxDistance = 50.0, -- Maximum distance in meters where the DUI can be shown.

    minScale = 0.50, -- Minimum DUI scale at far distance.

    maxScale = 0.88, -- Maximum DUI scale at close distance.

    scaleStartDistance = 5.0, -- Distance in meters where the DUI starts scaling down.

    scaleEndDistance = 50.0 -- Distance in meters where the DUI reaches minimum scale.
}

```

### Multiple calls in one area

`Config.Cooldowns.multipleCallsInSameArea.enabled` allows several witness calls to remain active inside the radius defined by `Config.Cooldowns.areaRadius`.

- `maxActive` controls the maximum simultaneous calls in one area. Set it to `0` for no per-area limit.
- `allowSameCrime` allows a second report for the same crime type while another matching call is already active nearby.
- `Config.Witness.maxActiveCalls` remains the global per-player safety limit.
- Every simultaneous call selects a different available NPC.
- Set `enabled = false` to restore the standard `perArea` cooldown behavior.

### Built-in crime types

Each entry in `Config.CrimeTypes` can be enabled or disabled independently and has its own probability, radius, line-of-sight requirement, call duration, dispatch code, priority, and blip settings.

```text
shots_fired
weapon_firearm_visible
weapon_blade_visible
vehicle_theft
vehicle_hit
assault
player_killed
npc_killed
custom
```


The DUI never displays through walls and automatically hides when the witness is outside the configured display distance or outside the player's view.

---

# 🎮 **USAGE:**

The resource operates automatically. Players do not need to use commands or keybinds.

### Commands

| Command | Description | Permission / Notes |
|---|---|---|
| None | All built-in crime detection is automatic. | No permissions required. |

### Keybinds

- No default keybinds are registered.
- A suspect can interrupt a call by approaching the witness and aiming a firearm at them when `Config.Witness.threatCancel.enabled` is active.

### Automatic situations

NPC witnesses can report:

- Gunshots.
- Visible firearms.
- Visible bladed or melee weapons.
- NPC vehicle theft.
- Vehicle hit-and-run incidents.
- Assaults against players or NPCs.
- Player deaths caused by the suspect.
- NPC deaths caused by the suspect.
- Custom illegal actions reported by another resource.

### Witness behavior

A valid witness can play a phone animation, hold a synchronized phone prop, complete an individual call timer, and flee after the report. Calls can be interrupted when the witness is threatened, injured, killed, or lost according to the configured behavior.

### Dispatch behavior

The dispatch alert is sent only after the witness completes the call. Vehicle reports can include the model, plate, and speed. The global receiver list is controlled by `Config.Dispatch.jobs`.

---

# 🔌 **EVENTS & EXPORTS (DEVELOPERS):**

`SMDZ Witness Calls` is framework-independent and can be integrated into robberies, drugs, vehicle systems, missions, jobs, minigames, alarms, or any other resource that produces an illegal action.

The recommended integration method is the public `ReportIllegalAction` export. Internal network events are documented for reference only and should not normally be called from third-party resources.

## Choosing the correct export side

| Situation | Recommended side | Reason |
|---|---|---|
| The action is detected only by the local game client | Client export | Immediate access to the local player, entity, vehicle, and coordinates. |
| The action is validated by the server | Server export | Prevents a modified client from creating reports for an action that never happened. |
| Several players participate in the same crime | Server export | The server can choose one owner and provide all participant server IDs. |
| A purely visual or low-risk interaction starts locally | Client export | Simpler integration when server authority is not required. |

> For economy, rewards, robberies, inventory actions, or protected gameplay systems, validate the illegal action server-side first and call the server export only after validation succeeds.

## Export reference

| Export name | Side | Signature | Returns | Meaning |
|---|---|---|---|---|
| `ReportIllegalAction` | Client | `ReportIllegalAction(data)` | `boolean` | Returns `true` only when a valid witness is found and the witness call actually begins. Returns `false` when disabled, blocked by cooldowns or limits, rejected by probability, or no valid witness is available. |
| `ReportIllegalAction` | Server | `ReportIllegalAction(target, data)` | `boolean` | Returns `true` when `target` is a valid connected player and the report request is sent to that player's client. It does not guarantee that a witness will be found or that the call will begin. |

## Client-side integration

Use the client export when the current player's client detects the illegal action.

```lua
local playerPed = PlayerPedId()

local started = exports['smdz_witness_calls']:ReportIllegalAction({
    type = 'custom',
    coords = GetEntityCoords(playerPed),
    label = 'Store robbery',
    code = '10-90',
    priority = 'high',
    chance = 100
})

if started then
    print('[my_resource] A witness started reporting the robbery.')
else
    print('[my_resource] No witness call was started.')
end
```

### Client integration inside another event

```lua
RegisterNetEvent('my_robbery:client:alarmTriggered', function(storeCoords)
    exports['smdz_witness_calls']:ReportIllegalAction({
        type = 'custom',
        coords = storeCoords,
        label = 'Commercial alarm activation',
        title = 'Civilian Emergency Call',
        code = '10-90',
        priority = 'high',
        chance = 100,
        metadata = {
            store = '24/7 Supermarket',
            alarmType = 'Silent alarm'
        }
    })
end)
```

## Server-side integration

Use the server export after the server has confirmed that the action is legitimate. Pass the player source that should be treated as the crime owner, followed by the report data.

```lua
RegisterNetEvent('my_robbery:server:robberyStarted', function(storeId)
    local src = source
    local ped = GetPlayerPed(src)

    if ped == 0 then return end

    -- Perform your own validation here before creating the report.
    local coords = GetEntityCoords(ped)

    local delivered = exports['smdz_witness_calls']:ReportIllegalAction(src, {
        type = 'custom',
        coords = coords,
        label = 'Store robbery',
        code = '10-90',
        priority = 'high',
        chance = 100,
        metadata = {
            storeId = storeId
        }
    })

    if not delivered then
        print(('[my_robbery] Could not send witness request to player %s.'):format(src))
    end
end)
```

The server return value only confirms delivery to a connected target. The final witness search, probability check, cooldown validation, and call start happen on the target player's client.

## Group crime integration

Choose one player as the call owner and include all participating server IDs in `suspects`. This is especially useful with `uiVisibility = 'suspect_and_participants'`.

```lua
local owner = source
local participants = { owner, 12, 24 }

exports['smdz_witness_calls']:ReportIllegalAction(owner, {
    type = 'custom',
    coords = GetEntityCoords(GetPlayerPed(owner)),
    label = 'Armed group robbery',
    code = '10-90',
    priority = 'critical',
    chance = 100,
    uiVisibility = 'suspect_and_participants',
    suspects = participants
})
```

Do not call the export once for every participant unless you intentionally want several independent NPC witnesses and dispatch reports.

## Vehicle integration

Provide known vehicle information through `metadata`. The included dispatch bridges use supported values when the provider accepts them.

```lua
local ped = PlayerPedId()
local vehicle = GetVehiclePedIsIn(ped, false)

if vehicle ~= 0 then
    local modelHash = GetEntityModel(vehicle)
    local model = GetDisplayNameFromVehicleModel(modelHash)
    local plate = GetVehicleNumberPlateText(vehicle)
    local speed = math.floor(GetEntitySpeed(vehicle) * 3.6)

    exports['smdz_witness_calls']:ReportIllegalAction({
        type = 'vehicle_hit',
        coords = GetEntityCoords(ped),
        priority = 'high',
        metadata = {
            model = model,
            plate = plate,
            speed = ('%s km/h'):format(speed)
        }
    })
end
```

## Custom dispatch text

Normally, the resource builds a localized dispatch message using the crime, suspect gender, street, and metadata. Use `title` or `message` only when the integration needs completely custom wording.

```lua
exports['smdz_witness_calls']:ReportIllegalAction({
    type = 'custom',
    coords = GetEntityCoords(PlayerPedId()),
    label = 'Illegal street race',
    title = 'Civilian Traffic Report',
    message = 'A civilian reported several vehicles racing through the area.',
    code = '10-94',
    priority = 'high'
})
```

Custom text should already be localized by the resource that calls the export.

## Report data fields

| Field | Type | Required | Default / behavior | Description |
|---|---|---|---|---|
| `type` | `string` | No | `custom` | Uses a key from `Config.CrimeTypes`. Built-in keys inherit their configured radius, line-of-sight rule, duration, code, priority, chance, and blip. |
| `coords` | `vector3` or coordinate table | Recommended | Current target player's coordinates | Crime location used for witness selection, street lookup, replication, cooldown grouping, and dispatch. Passing explicit coordinates is strongly recommended. |
| `label` | `string` | No | Localized crime label | Text used by the DUI and as the crime name in dispatch. |
| `title` | `string` | No | Configured civilian report title | Overrides the dispatch title. |
| `message` | `string` | No | Automatically generated localized message | Replaces the complete dispatch description. |
| `code` | `string` | No | Crime configuration value | Overrides the dispatch code, such as `10-90`. |
| `priority` | `string` | No | Crime configuration value | Recommended values: `low`, `medium`, `high`, or `critical`. Provider-specific bridges translate these values when necessary. |
| `chance` | `number` | No | Crime configuration value | Percentage chance from `0` to `100` that a valid witness attempts the call. Use `100` for scripted scenes that should always attempt to start. |
| `uiVisibility` | `string` | No | `Config.UI.visibility` | Per-report DUI mode: `suspect`, `nearby`, `suspect_and_participants`, or `none`. |
| `suspects` | `table` | No | Crime owner only | Server IDs of additional participants used by `suspect_and_participants` visibility. |
| `suspectGender` | `string` | No | Detected from crime owner's ped | Overrides the suspect gender included in the dispatch payload. |
| `gender` | `string` | No | Detected from crime owner's ped | Compatibility alias for `suspectGender`. |
| `metadata` | `table` | No | Empty table | Additional provider data. Common values include `model`, `vehicle`, `plate`, `speed`, `weapon`, `origenType`, and `dispatchType`. |

### Coordinate table formats

Both keyed and indexed coordinate tables are accepted:

```lua
coords = { x = 215.2, y = -810.4, z = 30.7 }
```

```lua
coords = { 215.2, -810.4, 30.7 }
```

A native FiveM `vector3` is preferred where available.

## Built-in crime type keys

```text
shots_fired
weapon_firearm_visible
weapon_blade_visible
vehicle_theft
vehicle_hit
assault
player_killed
npc_killed
custom
```

Use `custom` when the action does not match an existing type. Using a built-in type does not trigger its detector; it only reuses that crime type's configured witness and dispatch behavior.

## DUI visibility per integration

| Value | Who sees the DUI |
|---|---|
| `suspect` | Only the client that owns the witness call. |
| `nearby` | The owner and eligible nearby players inside the replication radius. |
| `suspect_and_participants` | The owner and server IDs listed in `suspects`, provided they are eligible for replication. |
| `none` | No player sees the DUI. Witness animations and dispatch behavior can still run. |

## Integration best practices

- Call the export once when the illegal action is confirmed, not every frame or inside a fast loop.
- Keep robbery, inventory, reward, and payment validation server-side.
- Pass the real action coordinates instead of relying on the player's current position later.
- Use `chance = 100` only when the scripted action must always attempt a witness call.
- Do not send a separate report from every participant unless duplicate reports are intentional.
- Let SMDZ Witness Calls handle NPC selection. Third-party resources normally should not select or control the witness ped.
- Expect `false` from the client export during cooldowns, active-call limits, probability failures, or when no eligible NPC exists.
- A started witness call can still be interrupted before dispatch if the witness is threatened, injured, killed, or otherwise invalidated.
- Dispatch is sent only after the NPC completes the call.
- Keep custom labels, titles, and messages translated inside the integrating resource.

## Adding a custom dispatch bridge

Create a client file inside `bridge/dispatch/your_resource.lua`:

```lua
SMDZ_RegisterDispatchBridge('your_resource', {
    resource = 'your_resource',

    send = function(data, settings)
        local coords = SMDZ_DispatchVec3(data.coords)

        exports['your_resource']:CustomAlert({
            coords = coords,
            title = data.title,
            description = data.message,
            code = data.code,
            jobs = SMDZ_DispatchJobs(settings)
        })
    end
})
```

Add the file to `client_scripts` in `fxmanifest.lua`, then set:

```lua
Config.Dispatch.system = 'your_resource'
```

For automatic detection, keep `Config.Dispatch.system = 'auto'` and ensure the registered `resource` name exactly matches the started resource.

### Dispatch payload available to bridges

| Field | Description |
|---|---|
| `crimeType` | Internal crime type key. |
| `crime` | Final localized or custom crime label. |
| `title` | Dispatch title. |
| `message` | Final dispatch description. |
| `code` | Dispatch code. |
| `priority` | Normalized integration priority. |
| `gender` / `suspectGender` | Suspect gender text. |
| `coords` | Crime coordinates. |
| `street` | Resolved GTA street name when available. |
| `blip` | Crime type blip configuration. |
| `metadata` | Integration-provided metadata. |

## Internal events

These events support synchronization between the owner client, server, and nearby clients. Their payloads may change between versions; exports are the stable public integration layer.

### Server events

| Event name | Parameters | Description |
|---|---|---|
| `smdz_witness_calls:server:witnessVisualStart` | `data` (`table`) | Replicates a witness animation, phone prop, and optional DUI to eligible nearby players. |
| `smdz_witness_calls:server:witnessVisualStop` | `data` (`table`) | Stops a replicated witness visual when a call completes or is interrupted. |

### Client events

| Event name | Parameters | Description |
|---|---|---|
| `smdz_witness_calls:client:reportCrime` | `data` (`table`) | Internal entry point used by the server export. |
| `smdz_witness_calls:client:remoteVisualStart` | `data` (`table`) | Starts replicated visuals for another player's witness. |
| `smdz_witness_calls:client:remoteVisualStop` | `data` (`table`) | Stops replicated visuals for another player's witness. |

---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

| Question | Answer |
|---|---|
| Does the resource require ESX, QBCore, or Qbox? | No. It is standalone and can be used alongside any framework. |
| Is a database required? | No. Witness calls are runtime gameplay events and do not require SQL. |
| Does the police alert happen immediately? | No. Dispatch is sent only after the selected NPC completes the call. |
| Can several witnesses call in the same area? | Yes. Enable `Config.Cooldowns.multipleCallsInSameArea.enabled` and configure the global and per-area limits. |
| Can the same crime create several calls? | Yes, when `allowSameCrime = true`, limits and cooldown rules permit it, and different valid NPCs are available. |
| Will the same NPC be used for two active calls? | No. Active local and replicated witnesses are excluded from new selections. |
| Can players stop a witness from calling? | Yes. Depending on configuration, threatening, injuring, killing, or invalidating the witness can interrupt the call. |
| Does running away cancel the report? | No. Leaving the area does not automatically stop an NPC that has already started calling. |
| Can witnesses call from inside vehicles? | Yes. Valid NPC drivers can use the phone animation without being forced to leave their vehicle. |
| Does the DUI display through walls? | No. It hides when the witness is obstructed, off-screen, or outside the configured distance. |
| Can the DUI be hidden while keeping witness behavior? | Yes. Use `Config.UI.visibility = 'none'` globally or `uiVisibility = 'none'` for one report. |
| Can other resources create witness calls? | Yes. Use the client or server `ReportIllegalAction` export. |
| Should I use the client or server export? | Use the client export for locally detected low-risk actions. Use the server export after authoritative server validation for robberies, inventory actions, rewards, or protected systems. |
| Does a `true` return guarantee police receive an alert? | The client export confirms the call started, but it can still be interrupted. The server export only confirms delivery to the target client. Neither guarantees call completion. |
| Can I provide my own dispatch title and message? | Yes. Pass `title` and `message`. Custom text must be localized by the integrating resource. |
| Can I attach custom data to a report? | Yes. Use `metadata`. Included bridges forward supported values and ignore unsupported ones. |
| Can group members see the same DUI? | Yes. Use `uiVisibility = 'suspect_and_participants'` and provide participant server IDs in `suspects`. |
| Can I disable automatic detection and use only exports? | Yes. Disable automatic detections while leaving the resource and the required crime types enabled. |
| Can I run the script without a dispatch resource? | Yes. Set `Config.Dispatch.system = 'none'`. NPC behavior and the DUI can still operate. |
| How do I support a dispatch system that is not included? | Register a new bridge in `bridge/dispatch`, add it to `fxmanifest.lua`, and map the SMDZ payload to the provider's API. |
| Are built-in network events a stable public API? | No. Use exports for third-party integrations because internal event payloads may change between versions. |
| Why does a custom report use the built-in radius and call time? | The `type` selects a `Config.CrimeTypes` profile. Use `custom` and adjust its configuration when you need a shared profile for external integrations. |
| How can I make a showcase call always attempt to start? | Pass `chance = 100`, remove or reduce relevant cooldowns, ensure limits allow another call, and place valid civilian NPCs nearby. |


---

# 🧪 **COMMON ISSUES:**

| Issue | Recommended Solution |
|---|---|
| Resource does not start | Confirm the folder is named exactly `smdz_witness_calls` and is not nested inside another folder.<br>Check that `ensure smdz_witness_calls` exists in `server.cfg`.<br>Review the first red console error rather than later follow-up errors.<br>Use a current recommended FiveM artifact. |
| Startup banner reports no dispatch | Start the dispatch resource before `smdz_witness_calls`.<br>Confirm its resource folder name matches the supported bridge name.<br>Set `Config.Dispatch.system` to the exact bridge name when auto detection cannot identify a renamed resource. |
| No NPC starts calling | Confirm `Config.Enabled = true`, `Config.Detections.enabled = true`, and the relevant `Config.CrimeTypes[type].enabled = true`.<br>Ensure a living civilian is inside the configured crime radius.<br>Check line of sight, ignored models, ped type filters, chance, cooldowns, and active-call limits.<br>Enable `Config.Debug` and review the translated F8 rejection reason. |
| Calls work only sometimes | Crime types use a configurable probability. Increase the relevant `chance` or pass `chance = 100` through an integration.<br>Also check detector cooldowns and whether a valid NPC is present. |
| A custom export returns `false` | On the client, `false` means the report was rejected or no call began.<br>Check enabled state, crime type, cooldowns, area limits, probability, player state, and witness availability.<br>Client exports should not be treated as guaranteed dispatch alerts. |
| The server export returns `true`, but no NPC calls | The server return value confirms only that the target player existed and the event was delivered.<br>The target client can still reject the report because of cooldowns, limits, probability, invalid state, or no valid NPC. Enable client debug for that player. |
| Custom integration does nothing | Verify the signature.<br>Client: `ReportIllegalAction(data)`.<br>Server: `ReportIllegalAction(target, data)`.<br>Confirm the target is connected and pass valid coordinates.<br>Make sure the selected crime type is enabled. |
| Custom report appears at coordinates `0, 0, 0` | Pass a native `vector3` or a table containing valid `x`, `y`, and `z` values.<br>Do not send JSON strings or partially populated coordinate tables. |
| Only one call starts | Increase `Config.Witness.maxActiveCalls`.<br>Enable `Config.Cooldowns.multipleCallsInSameArea.enabled`.<br>Increase `multipleCallsInSameArea.maxActive` or use `0` for no per-area limit. |
| Repeated calls are blocked in the same area | Enable `multipleCallsInSameArea.enabled` and `allowSameCrime`.<br>Remember that automatic detectors also have their own cooldowns.<br>The global per-crime cooldown may still prevent rapid duplicate reports when no matching active call exists. |
| Too many calls or dispatch alerts are created | Lower `Config.Witness.maxActiveCalls` and `multipleCallsInSameArea.maxActive`.<br>Increase detector, crime, or area cooldowns.<br>Make sure another resource is not calling the export repeatedly inside a loop or from every participant. |
| The same NPC appears to be selected twice | Version `1.1.14` blocks active local and replicated witnesses from being reused.<br>Confirm all clients use the updated resource and restart it on both server and clients.<br>Check that a second copied resource is not running. |
| The witness animation plays but the phone is missing | Check that the configured phone model exists and can be streamed.<br>Confirm nearby replication has `createPhoneForNearby` enabled.<br>Look for model loading errors or another resource deleting attached props. |
| The phone or animation remains after a call | Confirm the resource was not force-restarted during the call.<br>Check for script errors that stop the cleanup thread.<br>Restart the resource once to clear abandoned local state and inspect F8 errors before reproducing it. |
| DUI is not visible | Confirm `Config.UI.visibility` is not `none` and `Config.UI.showCrime` is configured as desired.<br>Stay within `Config.UI.maxDistance`, face the witness, and keep a clear line of sight.<br>The DUI intentionally hides off-screen and behind geometry. |
| Nearby players see the NPC animation but not the DUI | With `visibility = 'suspect'`, this is expected.<br>Use `nearby` or `suspect_and_participants` and check the replication radius.<br>For participant mode, provide valid server IDs in `suspects`. |
| DUI appears to the wrong players | Review the global `Config.UI.visibility` and any per-report `uiVisibility` override.<br>Check that `suspects` contains server IDs, not local player indexes or character identifiers. |
| Witness immediately cancels the call | The NPC may be dead, injured, threatened, deleted, or otherwise invalid.<br>Check threat distance and aiming settings.<br>Another AI or combat resource may also be changing the NPC state. |
| Aiming at a witness does not cancel the call | Confirm `Config.Witness.threatCancel.enabled = true`.<br>Use a firearm, stay inside the configured distance, and aim directly at the witness.<br>Check whether another resource blocks free aim or alters ped targeting. |
| Phone animation is visible, but no dispatch arrives | Dispatch is sent only after the witness completes the timer.<br>Ensure the witness was not interrupted.<br>Confirm the dispatch resource is running, the correct bridge is selected, and no bridge error appears in F8. |
| Dispatch arrives without vehicle details | Pass `metadata.model`, `metadata.plate`, and optionally `metadata.speed`.<br>Some providers do not display every custom metadata field.<br>Confirm the selected crime type is `vehicle_theft` or `vehicle_hit` when using the built-in formatted messages. |
| Dispatch goes to the wrong jobs | Update `Config.Dispatch.jobs` with the exact job names used by your police resources.<br>Restart the resource after editing the configuration.<br>Provider-side permissions can still restrict recipients. |
| Dispatch text is not translated | Built-in messages use the selected SMDZ locale.<br>Custom `label`, `title`, and `message` values come directly from the integrating resource and must be translated there. |
| A supported dispatch was renamed | Auto detection checks resource names.<br>Restore the original folder name or create/register a bridge using the renamed resource name.<br>Do not set `Config.Dispatch.system` to a name that has no registered bridge. |
| Performance increases in crowded areas | Reduce crime radii, `Config.UI.maxDistance`, replication radius, and simultaneous-call limits.<br>Increase UI update intervals only after visual testing.<br>Check that another resource is not triggering exports continuously. |
| Debug logs are too noisy | Use `Config.Debug = true` only while testing and disable it in production after resolving the issue. |


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
