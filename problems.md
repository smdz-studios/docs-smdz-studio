# 🚀 **COMMON PROBLEMS & TROUBLESHOOTING:**

Use this page as a **lookup guide**.  
Search the **index** first, then jump directly to the section that matches what you see in your console or in‑game.

---


## SCRIPT WON’T START / CRASHES ON STARTUP:

**What you see:**

- Resource never appears as started.
- Console shows red errors when running `ensure` or on server boot.
- `resources list` does not show the script as loaded.

### A. QUICK CHECKLIST:

```text
[ ] Folder name is correct
[ ] Resource is in the right path
[ ] "ensure" name matches folder
[ ] All dependencies are started FIRST
[ ] No obvious syntax error in config
```

---

### B. FOLDER NAME / PATH PROBLEMS:

**Symptoms (console examples):**

```text
Could not find resource smdz_example.
Resource smdz_exmaple does not exist.
```

**Steps:**

1. Check the **folder name**:
   - Should be exactly something like:
     ```text
     resources/[smdz]/smdz_example
     ```
2. Check `server.cfg`:
   ```bash
   ensure smdz_example
   ```
3. Avoid:
   - Spaces: `smdz example`
   - Capitalization mismatches: `SMDZ_Example`

---

### C. MISSING DEPENDENCIES:

**Look for words like:** `es_extended`, `qb-core`, `oxmysql`, `mysql-async`, `target`, `inventory`.

**Example errors:**

```text
attempt to index a nil value (global 'ESX')
attempt to index a nil value (global 'QBCore')
No such export oxmysql:execute
```

**Steps:**

1. Open the script’s docs page and find the **REQUIREMENTS** section.
2. In `server.cfg`, ensure dependencies start **before** the SMDZ script, e.g.:

   ```bash
   ensure oxmysql
   ensure es_extended   # or qb-core
   ensure smdz_example
   ```

3. Restart the server and re‑check the console.

---

### D. ESCROW / ENTITLEMENT ERRORS:

**Examples:**

```text
This asset is not owned by this account
You lack the required entitlement to use smdz_prop_finder
Failed to verify protected resource
```

If you see anything like this, go to:  
👉 **[ASSET ESCROW SYSTEM (CFX.RE / TEBEX)](fxap.md)** for a dedicated guide.

---

# 🗄 **DATABASE & SQL ISSUES:**

**What you see:**

- Tables missing.
- Data not saving.
- Connection or adapter errors.

---

### A. QUICK IDENTIFIER:

Check the console for words like:

- `oxmysql`
- `mysql-async`
- `MySQL`
- `table doesn't exist`

---

### B. ADAPTER NOT INSTALLED / NOT STARTED:

**Errors:**

```text
[oxmysql] [ERROR] connection failed
[mysql-async] Error: connect ECONNREFUSED
```

**Steps:**

1. Make sure you have **one** DB adapter:

   - Recommended: `oxmysql`
   - Legacy: `mysql-async`

2. Configure it with the correct DB credentials.
3. Start it first in `server.cfg`:

   ```bash
   ensure oxmysql
   ensure es_extended  # or qb-core
   ensure smdz_example
   ```

---

### C. MISSING TABLES / MIGRATIONS:

**Errors:**

```text
[oxmysql] [ERROR] Table 'dbname.smdz_example' doesn't exist
```

**Steps:**

1. Look in the script files for `.sql` (e.g. `smdz_example.sql`).
2. In your DB manager (phpMyAdmin, HeidiSQL, DBeaver…):
   - Select your FiveM database.
   - Import the `.sql` file.
3. Restart the server and check again.

---

### D. WRONG DATABASE CREDENTIALS:

If the server can’t connect at all:

- Recheck host, user, password, database, port.
- Confirm the DB server accepts connections from your FiveM host.

---

## 👥 PERMISSIONS & ADMIN COMMANDS NOT WORKING:

**What you see:**

- Admin commands do nothing for staff.
- Normal players can run admin commands.
- Messages like **“access denied”**.

---

### A. FRAMEWORK PERMISSION CONFIG:

Each framework handles perms differently:

- **ESX** → groups like `user`, `mod`, `admin`, `superadmin`.
- **QBCore** → permission levels, `Group`, etc.

**Steps:**

1. Check script docs for **required group/permission**.
2. For ESX, confirm the player has `group.admin` / `group.superadmin`.
3. For QBCore, use existing permission systems or custom exports to give access.

---

### B. ACE PERMISSIONS:

**Error examples:**

```text
Access denied for command /smdz_admin
```

**Steps:**

1. In `server.cfg`, add something like:

   ```bash
   add_ace group.admin smdz.scripts allow
   add_principal identifier.license:xxxxxxxxxxxxxxxx group.admin
   ```

2. Replace `identifier.license:...` with your staff licenses.
3. Restart server (or re‑exec these lines) and test again.

---

# 🔑 **FRAMEWORK COMPATIBILITY (ESX / QBCORE / STANDALONE):**

**What you see:**

- Script clearly says “for ESX” or “for QBCore”, but you’re using another framework.
- Functions like `ESX.GetPlayerFromId` or `QBCore.Functions.GetPlayer` are `nil`.

---

### A. WRONG FRAMEWORK MODE IN CONFIG:

Look for a setting similar to:

```lua
Config.Framework = 'ESX'       -- 'ESX', 'QBCore' or 'Standalone'
```

**Steps:**

1. Set the value to match your environment.
2. Confirm the chosen framework is actually installed and started.

---

### B. FRAMEWORK START ORDER:

Make sure frameworks start **before** SMDZ scripts:

```bash
ensure es_extended   # or qb-core
ensure smdz_example
```

---

## 🎛 CONFIGURATION MISTAKES:

**What you see:**

- No obvious console error, but the script doesn’t behave as expected.
- Blips not showing, zones not working, features half‑active.

---

### A. COMPARE WITH DEFAULT CONFIG:

1. Take your current `config.lua`.
2. Compare it with the **fresh config** from a clean download.
3. Look for:
   - Removed lines.
   - Wrong types (string instead of number, etc.).
   - Invalid coordinates.

---

### B. COMMON CONFIG PITFALLS:

- Empty required fields (e.g. webhooks, keys).
- Typos in enum values (`ESX` vs `esx`, etc.).
- Coordinates in the wrong format:

  ```lua
  -- GOOD:
  vector3(215.0, -810.0, 30.0)

  -- RISKY:
  { x = 215, y = -810 }  -- if script expects vector3
  ```

---

# 🎨 **UI / NOTIFICATIONS / TARGET INTEGRATIONS:**

**What you see:**

- Looking at an entity does nothing (no target).
- Menus don’t open, but there’s no clear error.
- Notifications never appear.

---

### A. IDENTIFY WHICH SYSTEM YOU USE:

Check your own resources:

- Target: `qb-target`, `ox_target`, `qtarget`, etc.
- Notifications: `ox_lib`, `mythic_notify`, `okokNotify`, etc.

Then open the script config. You’ll often see:

```lua
Config.Target      = 'qb-target'   -- 'ox_target', 'qtarget', etc.
Config.Notification = 'ox_lib'     -- 'mythic', 'okok', etc.
```

**Steps:**

1. Set these values to match your actual resources.
2. Check that those resources are started.
3. Restart the server and test again.

---

# 🌍 **PERFORMANCE & TICK USAGE:**

**What you see:**

- Players report “lag”.
- You suspect a script might be heavy.

---

### A. MEASURE FIRST:

Use the built‑in profiler:

```text
resmon 1
```

Look specifically at the line for the SMDZ script, e.g. `smdz_example`.

- **Idle usage** in ms should be low.
- Compare with other heavy scripts on your server.

---

### B. IF USAGE IS HIGH:

1. Check config for:
   - Tight loops (e.g. every `0` or `0.01` seconds).
   - Large scan ranges or many entities.
2. Try:
   - Increasing timers slightly.
   - Disabling optional, heavy features (e.g. debug visuals).
3. Test on a **clean server** with only the framework + SMDZ script to isolate.

If it still seems heavy, gather:

- `resmon` screenshot.
- Player count.
- Your config file.

…then contact support.

---

# **📬 WHEN TO CONTACT SUPPORT:**

If you have gone through:

- The **section that matches your error**, and
- The script’s dedicated documentation page,

…but the problem persists, it’s time to open a ticket.

---

### PREPARE THIS INFORMATION:

```text
• Script name:         smdz_example
• Script version:      v1.0.0
• Framework:           ESX / QBCore / Standalone
• Tebex purchase ID:   ################
• Server artifacts:    (build number)
• Full console log:    from startup until the issue appears
• Steps to reproduce:  1, 2, 3...
```

Then go to **[Support](support.md)** and contact SMDZ Studios by **email** or **Discord**.

The more precise your report, the **faster** and **better** the help you will receive.