<div align="center" style="margin-bottom: 1.5rem;">

  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="smdz_railway_job showcase"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%; border-radius: 12px;"
  ></iframe>
</div>
<p style="text-align: center; font-weight: bold; color: red;">
  ⚠️ THIS SCRIPT IS AVAILABLE IN ESCROW VERSION ONLY
</p>

<div
  class="five-metrics-resource"
  data-resource="smdz_railway_job"
></div>


---

# 🧩 **OVERVIEW:**

- 📌 **Name:** `smdz_railway_job`
- 💻 **Author:** SMDZ Studios
- 🧭 **Framework:** Standalone / ESX / QBCore / Qbox
- 🧾 **Version:** `1.0.0`
- ✅ **Status:** <span class="badge badge--stable">STABLE</span>


**Short description:**

`smdz_railway_job` is an immersive FiveM railway maintenance job where players repair rail sections, use a job vehicle, complete randomized minigames, earn money, compete in a weekly leaderboard, and claim configurable ranking rewards.

The script is designed for roleplay servers that want a polished, repeatable civilian job with global rail states, supervisor NPC dialogue, leaderboard TVs, framework bridges, fuel bridges, notification bridges, and strict server-side validation.
---

# ⭐ **FEATURES:**

- Railway repair job with SOUTH and NORTH work zones.
- Supervisor NPCs with configurable random world scenarios.
- Optional target support with fallback E-key interaction.
- Spawned Boxville work vehicle with configurable fuel and enabled vehicle extras.
- Tool pickup flow from the job vehicle.
- Global repaired rail states synced to all workers.
- Server-side point reservations to prevent two players repairing the same rail at once.
- Repaired rails stay completed for a configurable maintenance cooldown.
- Leaderboard reset clears previous repaired rail state for the new cycle.
- Four randomized custom NUI minigames with difficulty presets.
- Very hard minigame bonus support.
- Progressbar repair phase after minigame success.
- Job HUD with animated earned money and repaired rail count.
- Weekly leaderboard TVs with Top 15 display and automatic scrolling.
- Configurable Top 1 / Top 2 / Top 3 reward system.
- Reward claiming through NPC dialogue.
- Multi-framework bridge: Standalone, ESX, QBCore, Qbox.
- Notification bridge pack.
- Fuel bridge pack.
- CPU-conscious adaptive waits and nearby-point caching.
- Resource-stop cleanup for props, peds, vehicles, blips, cameras, DUI screens, NUI focus, and local state.
- Protected build with resource folder-name validation.
---

# 📦 **REQUIREMENTS:**

| Requirement | Required | Notes |
|---|---:|---|
| FiveM server artifact | ✅ | Use a recent recommended build. |
| `oxmysql` | ✅ | Required for leaderboard and reward persistence. |
| `ox_lib` | ✅ | Required for progressbar and callbacks. |
| Framework | Optional | ESX, QBCore, Qbox, or Standalone. |
| Target resource | Optional | `ox_target`, `qb-target`, or fallback E-key. |
| Fuel resource | Optional | Auto-detected or forced through config. |
| Notification resource | Optional | Auto-detected or forced through config. |

Recommended `server.cfg` order:

```bash
ensure oxmysql
ensure ox_lib
ensure smdz_railway_job
```

> `oxmysql` is mandatory. If it is not started before this resource, the server-side logic will stop and print an error.
---

# 📥 **INSTALLATION:**

1. Download and extract the resource.
2. Place the folder in your resources directory:

```text
resources/[smdz]/smdz_railway_job
```

3. Import the SQL file:

```text
smdz_railway_job/sql/install.sql
```

4. Add the resource to `server.cfg`:

```bash
## SMDZ Studios
ensure smdz_railway_job
```

5. Restart the server or start the resource manually.
6. Check the server console for validation and dependency messages.
7. Join the server and test both SOUTH and NORTH NPCs.

---

# 🗄️ **DATABASE / SQL:**

The script includes SQL for leaderboard and reward persistence:

```text
sql/install.sql
```

Main database usage:

| Table | Purpose |
|---|---|
| `smdz_railway_leaderboard` | Stores repaired rail counts by worker and week. |
| `smdz_railway_leaderboard_rewards` | Stores pending/claimed weekly ranking rewards. |

The resource also attempts to ensure required leaderboard tables on startup when `oxmysql` is available.
---

# ⚙️ **CONFIGURATION:**

Main files:
- `config.lua`
- `coords_config.lua`


---

# 🎮 **PLAYER FLOW:**

1. Go to a railway supervisor NPC.
2. Talk to the supervisor using target or the E-key fallback.
3. Read the dialogue and start a maintenance shift.
4. The script spawns a Boxville job vehicle.
5. Drive near any red repair point.
6. Leave the vehicle and take tools from the Boxville.
7. Walk to the marker and start the repair.
8. Complete one of the randomized minigames.
9. After success, complete the repair progressbar.
10. The rail becomes globally repaired for the configured cooldown.
11. The player receives money and leaderboard progress.
12. Continue repairing other available rails.
13. Return the Boxville and talk to the supervisor to end the shift.
---

# 🧠 **MINIGAMES:**

The script includes four randomized minigames:

| Minigame | Gameplay |
|---|---|
| Keys | Press the requested key at the correct time. |
| Calibration | Click when the indicator enters the target zone. |
| Pressure | Hold/release click inside the correct zone. |
| Falling keycaps | Press falling letters when they reach the lower box. |

All minigames use the same difficulty pool:

| Difficulty | Notes |
|---|---|
| Easy | Larger windows, slower movement. |
| Medium | Balanced. |
| Hard | Smaller windows, faster movement. |
| Very hard | Smallest windows, most demanding, optional extra bonus. |
---

# 🏆 **LEADERBOARD & REWARDS:**

The leaderboard tracks repaired rails for the current weekly period.

## TV behavior

- Shows up to `Config.Leaderboard.TopLimit` workers.
- Default maximum: `15`.
- If the list has more rows than the visible area can fit, the TV scrolls slowly down and back up.
- Only TVs spawned by this script display the leaderboard UI.

## Reset behavior

When the leaderboard period resets:

- Rewards are generated for configured paid ranks.
- Previous repaired rail state is cleared.
- Repair points become available for the new cycle.
- Workers can start competing again from zero.

## Reward configuration

```lua
Config.Leaderboard.Rewards = {
    Enabled = true,
    Account = 'money',
    Top1 = 7500,
    Top2 = 4000,
    Top3 = 2500
}
```

Set a rank amount to `0` if you do not want that rank to receive a reward.
---

# 🔌 **BRIDGES:**

## Framework bridge

Supports:

- Standalone.
- ESX.
- QBCore.
- Qbox.

Used for:

- Player identifiers.
- Character names.
- Job checks.
- Payments.

## Notification bridge

Supported providers:

```text
ox / esx / qb / okokNotify / origen_notify / wasabi_notify / wasabi_uikit
rtx_notify / codem-notification / vms_notifyv2 / esx_notify / brutal_notify
FL-Notify / gtm-ui / RO_Notify / RxNotify
```

Normalized types:

```text
success / info / warning / error
```

## Fuel bridge

Supported providers:

```text
native / LegacyFuel / ps-fuel / cdn-fuel / qs-fuelstations / lc_fuel
lyre_fuel / qb-fuel / Renewed-Fuel / rcore_fuel / ox_fuel
```

The script also applies native fallback fuel and statebag fuel when possible.

## Target bridge

Supported providers:

```text
ox_target / qb-target / fallback E-key
```

## Progress bridge

Uses `ox_lib` progressbar.
---

# 🔌 **EVENTS & CALLBACKS (DEVELOPERS):**

> These events and callbacks are internal. They are documented to help owners debug issues, not as a public API.
>
> Do not trigger repair completion or point sync manually from another resource unless you fully understand the server validation flow.

## Client events

| Event name | Parameters | Triggered by | Description |
|---|---|---|---|
| `smdz_railway:notify` | `message`, `type` | Any side/client use | Shows a client notification through the selected bridge. |
| `smdz_railway:syncAll` | `zone`, `states` | Server | Syncs all point states for the player's active zone. |
| `smdz_railway:syncPoint` | `zone`, `pointId`, `state`, `remaining` | Server | Updates one point as pending, reserved, or done. |
| `smdz_railway:leaderboardUpdate` | `payload` | Server | Updates leaderboard TV data on clients. |
| `smdz_railway:clientStartJob` | `zone` | Server | Starts local job state after approval. |
| `smdz_railway:clientStopJob` | none | Server | Stops local job state and cleans local job UI. |
| `smdz_railway:forceCancelJob` | `reason`, `notifyKey` | Server | Cancels the job from server-side validation or cleanup. |

## Server events

| Event name | Parameters | Triggered by | Description |
|---|---|---|---|
| `smdz_railway:requestSync` | none | Client | Requests a full point sync for the player's current active job. |
| `playerDropped` | internal FiveM event | FiveM | Releases reservations and cleans active job data for disconnected players. |
| `onResourceStop` | `resourceName` | FiveM | Performs server-side cleanup when the resource stops. |

## Server callbacks

| Callback | Parameters | Returns | Description |
|---|---|---|---|
| `smdz_railway:startJob` | `zone` | `ok`, `states/error` | Starts a job after validating zone, points, and job requirement. |
| `smdz_railway:registerVehicle` | `netId`, `zone`, `spawnCoords` | `ok`, `error` | Registers the spawned job vehicle with server-side protection. |
| `smdz_railway:stopJob` | `reason` | `ok`, `error` | Stops the job and releases server-side state. |
| `smdz_railway:vehicleLost` | `reason` | `true` | Cancels job when the vehicle is missing, destroyed, or invalid. |
| `smdz_railway:canTakeTools` | `vehicleCoords` | `ok`, `error` | Validates whether tools can be taken near an available point. |
| `smdz_railway:tryReservePoint` | `pointId`, `playerCoords` | `ok`, `token/error`, `difficulty`, `minigame` | Reserves a repair point and assigns minigame settings. |
| `smdz_railway:cancelRepair` | `pointId`, `token` | `true` | Releases a reserved point after failure/cancel. |
| `smdz_railway:completePoint` | `pointId`, `playerCoords`, `vehicleCoords`, `token` | `done`, `pay/error`, `finishedAll`, `bonus`, `difficultyBonus` | Completes and pays a valid repair. |
| `smdz_railway:getLeaderboard` | none | `payload` | Returns current leaderboard data and next reset time. |
| `smdz_railway:getLeaderboardRewardStatus` | none | `status` | Returns pending reward state for NPC dialogue. |
| `smdz_railway:claimLeaderboardReward` | none | `ok`, `reward/error` | Claims a pending weekly reward if available. |

## NUI callbacks

| Callback | Data | Description |
|---|---|---|
| `dialogAction` | NPC dialogue action payload | Handles dialogue buttons such as start, stop, close, and claim reward. |
| `minigameResult` | success/failure result | Returns the custom minigame result to the client script. |

## Exports

This resource does not expose public exports by default.
---

# 🌐 **LOCALES:**

Included languages:

| Locale | Language |
|---|---|
| `es` | Spanish |
| `en` | English |
| `de` | German |
| `fr` | French |

To change language:

```lua
Config.Locale = 'en'
```

Locale rules:

- Keep every locale file with the same keys.
- Do not duplicate keys.
- Do not remove keys unless you confirm they are unused.
- Use `\n` for line breaks.
- Avoid editing client/server files for visible text.
---

# 🧹 **RESOURCE STOP CLEANUP:**

When the resource stops, the script cleans:

| Area | Cleanup |
|---|---|
| NUI | Closes minigames, dialogue, HUD and focus. |
| Peds | Deletes spawned supervisor NPCs. |
| Vehicles | Deletes local job vehicle if present. |
| Props | Deletes tools, repair props, and spawned TVs. |
| DUI | Destroys leaderboard DUI handles. |
| Blips | Removes active repair blips. |
| Camera | Destroys NPC dialogue camera. |
| Server state | Clears active jobs, reservations, invalid attempts, and pending vehicle registrations. |
---

# ⚡ **PERFORMANCE NOTES:**

The script uses adaptive waits and caching to reduce resmon impact:

| Optimization | Description |
|---|---|
| Nearby point cache | Avoids scanning every repair point every frame. |
| Adaptive idle waits | Loops sleep longer when players are not near relevant objects. |
| TV draw distance | Leaderboard DUI is only drawn near spawned script TVs. |
| Server validation intervals | Vehicle and point cleanup use timed checks instead of frame loops. |

Main tuning section:

```lua
Config.Optimization = {
    PointScanInterval = 350,
    IdleLoopWait = 900,
    NearNpcLoopWait = 250,
    VehicleWatchFastWait = 250,
    TvIdleWait = 1000
}
```

Higher values usually reduce CPU use but may make nearby detection feel slightly less instant.
---

# ❓ **FAQ – FREQUENTLY ASKED QUESTIONS:**

This FAQ is intended to answer the most common setup, configuration, gameplay, leaderboard, and troubleshooting questions before opening a support ticket.

| Question | Answer |
|---|---|
| Can I rename the resource folder? | No. This protected build must stay named exactly `smdz_railway_job`. If the folder name is changed, the server-side resource guard will stop the script automatically. |
| Why is the folder name locked? | The protected build includes a hard resource-name validation layer to avoid incorrect installs, renamed folders, or unauthorized repackaging. Keep the folder name unchanged. |
| Can I use this without ESX or QBCore? | Yes. The script supports Standalone mode. You can leave `Config.Framework = 'auto'` or force the framework option depending on your server setup. |
| What frameworks are supported? | The bridge is designed to work with ESX, QBCore/Qbox-style setups, and Standalone usage. For best results, keep framework resources started before this script. |
| Is `oxmysql` optional? | No. `oxmysql` is required because the leaderboard, weekly stats, and pending reward system use persistent SQL storage. |
| Is `ox_lib` required? | Yes. The repair progress flow uses `ox_lib` progress handling. Make sure `ox_lib` is started before this resource. |
| Do I need to import SQL? | Yes. Import `sql/install.sql` before using the resource on a live server. Without the tables, leaderboard and reward logic cannot persist correctly. |
| Can I disable the leaderboard? | Yes. Set `Config.Leaderboard.Enabled = false`. This disables the TV ranking UI and related leaderboard display behavior. |
| Can I change how many players appear on the leaderboard TV? | Yes. Edit `Config.Leaderboard.TopLimit`. The default is `15`. If more than 6 players are shown, the TV UI scrolls smoothly so all visible entries can be seen. |
| Can I change leaderboard rewards? | Yes. Edit `Config.Leaderboard.Rewards.Top1`, `Top2`, and `Top3`. NPC dialogue reads the config dynamically, so the text stays aligned with your reward values. |
| Can I remove Top 3 payment? | Yes. Set `Config.Leaderboard.Rewards.Top3 = 0`. If a reward value is `0`, it should not be presented as a paid rank. |
| Can I remove all leaderboard payments? | Yes. Set `Top1`, `Top2`, and `Top3` to `0`. The leaderboard can still be used as a competition board without claimable payouts. |
| When are leaderboard rewards generated? | Rewards are generated during the leaderboard reset cycle. Winners receive pending rewards based on the configured paid ranks. |
| Can winners claim rewards later? | Yes. Rewards are stored as pending SQL entries until claimed. Players do not need to be online at the exact reset moment to keep their pending reward. |
| Can a player claim the same reward twice? | No. Claimed rewards are marked as claimed in SQL and cannot be collected again. |
| What happens to repaired rails when the leaderboard resets? | Repaired rail states are cleared during leaderboard reset, so the next cycle starts with rails available again. |
| Can I add more repair points? | Yes. Add new points in `shared/coords_config.lua`. Each point must have a unique ID within the full points list. Avoid duplicate IDs. |
| Can I remove repair points? | Yes. Remove the point entries from `shared/coords_config.lua`. After removing points, restart the resource and test the zone. |
| Can I add more zones? | The config is structured around zones, but adding a fully new zone requires matching NPC, vehicle spawn, points, labels, and possible logic/UI expectations. It is safer to duplicate an existing zone structure carefully. |
| Why can players not take tools? | The player must be out of the vehicle, the job vehicle must be close to an available repair point, and the point must not already be completed or reserved. |
| Does the Boxville need to be near the exact point? | It must be within `Config.Job.VehicleRequiredDistanceToAvailablePoint` of an available point. This prevents players from repairing rails without bringing the job vehicle. |
| Can players repair the same point together? | No. Points are reserved server-side. Once one player starts working on a point, another player cannot duplicate the same repair. |
| Why is a repaired point green? | Green means the rail is globally completed and does not need maintenance until the configured cooldown ends or until the next leaderboard reset clears repaired states. |
| Can I change how long a repaired rail stays completed? | Yes. Edit `Config.Job.RepairedStateDuration`. This controls how long a repaired point remains unavailable before needing maintenance again. |
| Why did the job cancel automatically? | The most common reasons are: the vehicle was too far away, destroyed, exploded, deleted by an admin/cleanup script, or server validation detected invalid repair behavior. |
| Can I change the job vehicle? | Yes. Change `Config.Job.VehicleModel`. Make sure the vehicle exists on your server and can spawn properly. |
| Does the job vehicle spawn with extras enabled? | Yes. The bridge attempts to enable all available vehicle extras on the spawned job vehicle. |
| Can I change the job payment? | Yes. Edit `Config.Job.PayMin`, `Config.Job.PayMax`, and `Config.Job.FinishBonus`. Payment account is controlled by `Config.Job.PayAccount`. |
| Can I require a specific job? | Yes. Set `Config.Job.RequiredJob` to the framework job name you want. Leave it as `nil` for public access. |
| Can I change NPC positions? | Yes. NPC positions are stored in `shared/coords_config.lua` per zone. Use `vec4(x, y, z, heading)`. |
| Can I change NPC animations? | Yes. Edit `Config.NPC.Scenarios` and `Config.NPC.ScenarioChangeInterval`. NPC scenarios rotate randomly from the configured list. |
| Can I change target interaction distance? | Yes. Edit `Config.NPC.TargetDistance`. The default should remain short enough to prevent long-distance interaction. |
| Does the script work without a target resource? | Yes. It includes a fallback interaction flow if no supported target provider is detected, depending on your bridge/config setup. |
| Can I change the notification style? | Yes. Set `Config.Notify` to a supported provider or keep it on `auto`. If `auto` fails to pick your preferred system, force the exact provider name. |
| Can I change the fuel provider? | Yes. Set `Config.Fuel` to a supported provider or keep it on `auto`. If the vehicle does not receive fuel correctly, force your provider or use `native`. |
| Can I change progressbar behavior? | The progress flow depends on `ox_lib`. You can adjust repair duration using `Config.Progress.DurationMin` and `Config.Progress.DurationMax`. |
| Can I change minigame difficulty? | Yes. Difficulties are configured in `Config.Minigame.Difficulties`. Adjust rounds, speed, hit windows, target zones, and related values carefully. |
| Can I disable a minigame type? | Yes. Remove that minigame type from the random type pool in `Config.Minigame.RandomTypes`. Keep at least one valid type enabled. |
| Does Very Hard pay extra? | Yes, if `Config.Minigame.VeryHardBonus.Enabled = true`. You can change the amount, account, and conditions in config. |
| Does the TV UI appear on every matching prop in the map? | No. The DUI/TV display is only drawn on TV objects spawned by this script. It is not applied globally to every prop with the same model. |
| Can I move the leaderboard TVs with a command? | No. The final build does not include the old TV move debug command. TV positions are configured directly in the config/coords setup. |
| Can I translate the script? | Yes. Edit the locale files in `locales/`. Keep the same keys across all languages to avoid missing text. |
| What happens if a locale key is missing? | The UI or notification may show the raw key name or fallback behavior. Always keep locale files synchronized. |
| Do I need to edit client/server code? | Usually no. Most customization should be done through `shared/config.lua`, `shared/coords_config.lua`, and `locales/*.lua`. |
| Can I change the watermark/header in Lua files? | It is not recommended unless you are preparing your own private build. For purchased builds, keep author/watermark information intact. |
| Can I use this on a live server immediately? | Yes, after importing SQL, ensuring dependencies start first, checking config, and testing the full job flow with at least one player. |
| What should I test before opening the server to players? | Test NPC interaction, vehicle spawn, taking tools, all minigames, repair completion, payment, stopping the job, leaderboard updates, reward claiming, and resource restart cleanup. |
| Should `Config.Debug` stay enabled on live servers? | No. Use `Config.Debug = false` in production to reduce console spam and keep resmon lower. Enable it only while testing. |
| Will support fix custom edits? | Support is usually for the original script behavior. If you heavily edit code, configs, bridges, or SQL, always test your changes and keep backups. |
---

# 🧪 **COMMON PROBLEMS:**

Use this section before opening a ticket. Most issues are caused by install order, folder naming, missing SQL, wrong bridge selection, or edited config syntax.

| Problem | Most likely cause | Fix |
|---|---|---|
| Resource stops immediately on startup | The resource folder was renamed or the folder path is wrong. | Rename the folder exactly to `smdz_railway_job`. Do not add spaces, version numbers, or extra suffixes to the live resource folder. |
| Console says the resource name validation failed | The protected build detected a different resource name. | Use the exact expected folder name and update your `server.cfg` to `ensure smdz_railway_job`. Restart the server after renaming. |
| `oxmysql is required` appears | `oxmysql` is missing, stopped, or started after the script. | Add `ensure oxmysql` above `ensure smdz_railway_job` in `server.cfg`. Confirm `oxmysql` starts without errors. |
| Database/SQL errors appear on startup | SQL tables were not imported or the database connection is not ready. | Import `sql/install.sql`, verify your database connection, and restart the server. Check that table names were created correctly. |
| Leaderboard TV is empty | No repairs have been recorded for the current cycle, SQL was not imported, or leaderboard is disabled. | Complete at least one repair, confirm SQL tables exist, and make sure `Config.Leaderboard.Enabled = true`. |
| Leaderboard does not reset | The server did not run long enough for the reset cycle, SQL timing data is incorrect, or debug reset is disabled. | Check leaderboard config, reset timing, server console logs, and SQL state. For testing, use debug reset options only in a development environment. |
| Rewards cannot be claimed | The player did not place in a paid rank, the reward amount is set to `0`, or the reward was already claimed. | Check `Config.Leaderboard.Rewards`, verify the player placed in Top 1/2/3, and inspect reward SQL rows if needed. |
| Top reward dialogue shows wrong values | Config and locales were edited incorrectly or the resource was not restarted after config changes. | Restart the resource after editing `Config.Leaderboard.Rewards`. The final dialogue reads config values dynamically. |
| Repaired rails do not reset after leaderboard cycle | Old repaired state cleanup did not run, SQL/leaderboard reset failed, or the server was interrupted mid-reset. | Confirm leaderboard reset logs, check `Config.Leaderboard.Enabled`, and restart the resource if the server was stopped during a reset. |
| Progressbar does not show | `ox_lib` is missing, outdated, or started after the script. | Add `ensure ox_lib` before this resource. Update `ox_lib` if necessary and test again. |
| Minigame does not open | NUI files are missing, browser cache issue, or JavaScript error after editing files. | Restore original `web/` files, clear FiveM cache if needed, and check F8 console for NUI errors. |
| Minigame text shows keys instead of real text | Missing locale key or wrong locale selected. | Check `Config.Locale`, then verify the selected file in `locales/` contains the same keys as the other language files. |
| Player cannot start job | Required framework job is not met, framework bridge failed, or the selected zone has no valid points. | Check `Config.Job.RequiredJob`, framework detection, and `shared/coords_config.lua`. Leave `RequiredJob = nil` for public access. |
| NPC does not spawn | Model loading failed, coords are invalid, or the client did not initialize correctly. | Verify NPC coords in `shared/coords_config.lua`, check model name in config, restart the resource, and watch F8/client console. |
| NPC target works from too far away | Target resource cached old options or target distance was changed. | Confirm `Config.NPC.TargetDistance = 3.0` or your chosen value, restart both target resource and `smdz_railway_job`. |
| NPC target does not show | Unsupported target provider, target resource not started, or fallback interaction is being used. | Start your target resource before this script, set `Config.Target` manually, or use the fallback interaction flow. |
| NPC animation does not change | Scenario list has only one valid scenario, interval is too high, or invalid scenario names were added. | Check `Config.NPC.Scenarios` and `Config.NPC.ScenarioChangeInterval`. Use valid GTA/FiveM world scenario names. |
| Job vehicle does not spawn | Spawn point is blocked, vehicle model is invalid, or server/client spawn logic was interrupted. | Clear the spawn area, verify `Config.Job.VehicleModel`, and check console for vehicle creation errors. |
| Job vehicle has no fuel | Wrong fuel bridge was auto-detected or the fuel resource uses a different export version. | Force `Config.Fuel` to your exact provider. If unsure, test with `Config.Fuel = 'native'`. |
| Job vehicle extras are not visible | The selected vehicle model does not have extras or extras are hidden by the model itself. | Test another model or confirm the vehicle actually has extras available. The script attempts to enable all extras that exist. |
| Player cannot take tools | Player is inside a vehicle, the Boxville is too far from an available point, or the nearby point is already repaired/reserved. | Exit the vehicle and park the Boxville near a pending repair point within `Config.Job.VehicleRequiredDistanceToAvailablePoint`. |
| Tools stay in player hand after cancel/restart | Resource was restarted unexpectedly or cleanup was interrupted. | Restart the resource once. The final build includes stronger cleanup on resource stop, but forced crashes may still require reconnecting. |
| Repair point says already repaired | The point is globally completed and is waiting for the maintenance cooldown or leaderboard reset. | Wait for `Config.Job.RepairedStateDuration`, repair another pending point, or wait for the leaderboard cycle reset. |
| Another player cannot repair the same rail | This is intended. The point is reserved server-side. | Wait until the current player finishes/fails the repair or choose another point. This prevents duplicate payments/exploits. |
| Job cancels when driving away | The job vehicle moved too far from the player or active job validation failed. | Keep the job vehicle within the configured distance and avoid deleting, storing, exploding, or replacing it. |
| Job cancels after vehicle is deleted by admin script | External cleanup/garage/admin script removed the job vehicle. | Whitelist the job vehicle from aggressive cleanup scripts or increase cleanup restrictions in your admin tools. |
| Player receives no money | Framework account mapping is wrong or Standalone mode has no money integration. | Check `Config.Job.PayAccount` and your framework bridge. In Standalone, add your own payment handling if needed. |
| Notifications do not appear | Wrong notify provider selected or provider resource is not started. | Force `Config.Notify` to your provider, start that provider before this script, or use framework/native fallback. |
| Notification colors/types look wrong | Provider uses different type names from the normalized bridge. | The bridge normalizes common types, but some resources style them differently. Force another provider or adjust bridge mappings carefully. |
| Fuel does not set correctly | Wrong fuel provider, old export version, or vehicle entity/network ID mismatch. | Force the provider in `Config.Fuel`, check your fuel resource docs, and test spawning a job vehicle after restart. |
| Config edit caused a Lua syntax error | Missing comma, broken table, wrong quotes, or invalid `vec3/vec4` format. | Restore your backup, re-edit carefully, and use proper Lua syntax. For line breaks in strings, prefer `\n`. |
| Coords config breaks the resource | Duplicate point IDs, missing commas, invalid vector format, or incomplete zone structure. | Check every new point entry, keep IDs unique, and compare your structure with existing working points. |
| Locale file breaks the resource | Missing comma, duplicate key, invalid quote, or multiline string error. | Compare with the English locale, keep identical keys, and avoid raw multiline strings unless you know Lua syntax well. |
| TV UI appears too bright/dark | Client graphics settings, timecycle, or custom visual packs can affect DUI appearance. | Test without visual mods first. Adjust CSS only if you know what you are doing. |
| TV UI appears on the wrong prop | You are using an outdated build or edited TV rendering logic. | Use the final build. The TV UI should only render on TVs spawned by this script, not every matching map prop. |
| High resmon while idle | Debug enabled, loops were edited, or many nearby entities/points are being processed. | Set `Config.Debug = false`, keep optimization settings close to defaults, and avoid adding huge point counts without testing. |
| High resmon during active job | Many active players, many markers nearby, TV UI, and NUI minigames can increase usage while the job is active. | This is expected to some degree. Tune `Config.Optimization`, reduce draw distance, and test with real player counts. |
| Players can exploit minigame/reward timing | Anti-cheat thresholds were lowered too much or client/server validation was edited. | Keep server validation enabled and avoid reducing `Config.AntiCheat.MinRepairSeconds` too aggressively. |
| Player is kicked/dropped by validation | The client completed repair too quickly, desynced, or triggered repeated invalid attempts. | Check ping/desync, review anti-cheat config, and test with debug on in a private environment. |
| Server console has many debug messages | Debug mode is enabled. | Set `Config.Debug = false` for production. Only enable debug while testing or diagnosing issues. |
| Changes do not apply after editing config | Server was not restarted or an old cached resource folder is being ensured. | Restart the resource/server and confirm `server.cfg` points to the correct folder. Remove duplicate copies from `resources`. |
| Players report missing UI after update | Browser/FiveM cache, partial upload, or old files mixed with new files. | Replace the full resource folder, clear cache if needed, and never merge random old `web/` files into a new version. |
| Resource works locally but not on production | Dependency order, database permissions, or edited config differs between environments. | Compare `server.cfg`, SQL import, resource versions, and config files between test and production. |
| Support asks for a clean test | The issue may be caused by third-party edits or conflicts. | Test the original ZIP with only required dependencies. If the clean version works, the issue is caused by custom edits or another resource. |
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
