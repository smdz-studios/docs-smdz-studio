# ASSET ESCROW SYSTEM (CFX.RE / TEBEX):

The **Asset Escrow** system is used by Cfx.re and Tebex to protect premium FiveM resources, including several scripts created by **SMDZ Studios**.  
This page is written for **server owners**, even if you do not have a deep technical background. The goal is to explain, in clear language, what this system does and how to resolve the most common problems related to it.

---

## 🧠 WHAT IS ASSET ESCROW?:

You can think about Asset Escrow as a **lock** that protects the internal logic of a script, while still allowing you to configure and use it on your server.

In practice:

- Part of the code (usually the most complex and critical logic) is **compiled and protected**.
- Another part of the code (configuration files, translations, and integration points) remains **fully editable**.
- When your FiveM server starts, it contacts the Cfx.re/Tebex systems to verify that:
  - The script is **genuinely owned** by the account running your server.
  - The script has **not** been tampered with in an unsupported way.

If the check is successful, the resource behaves like any normal script.  
If the check fails, the resource may refuse to start and will usually display a clear error message in the console.

---

## 🔗 HOW LICENSING & ACCOUNT LINKING WORKS:

The licensing model for escrowed assets involves **three main elements**:

1. Your **Tebex account**, where you purchase the script.  
2. Your **Cfx.re (FiveM) account**, which is linked to Tebex and owns your server license key.  
3. The **FiveM server license key**, which identifies your specific server.

All three must align correctly.

### STEP 1 – PURCHASE ON TEBEX:

- All official SMDZ Studios scripts are sold exclusively via:  
  👉 **[SMDZ Studios Tebex Store](https://smdz-studios.tebex.io/)**

When you purchase a script:

- The license to use that script is attached to the **Tebex account** that made the purchase.
- This account must be correctly linked to a Cfx.re account, which is the account that will be validated when the server starts.

---

### STEP 2 – LINK YOUR CFX.RE ACCOUNT TO TEBEX:

The link between Tebex and Cfx.re ensures that **Cfx.re knows which FiveM account owns which asset**.

To verify or create this link:

1. Log into **Cfx.re Keymaster** with the FiveM account that will own the server license key:  
   👉 <https://keymaster.fivem.net/>
2. Log into your **Tebex account** in the same browser session.
3. Follow the instructions in Tebex/Keymaster to link your accounts (if they are not already linked).
4. Confirm that:
   - The Cfx.re account shown in Keymaster is the one you intend to use for your SMDZ Studios assets.
   - This account is the same one that appears as owning your purchase in the Tebex control panel.

---

### STEP 3 – USE THE CORRECT SERVER LICENSE KEY:

Your FiveM server uses a **server license key**, created in Keymaster. This key is strictly tied to a specific Cfx.re account.

For the escrow checks to pass, the following must be true:

- The Cfx.re account that owns the **server license key** must also own (or have been transferred) the SMDZ script.
- The license key you place in `server.cfg` must be the one associated with that account.

If the ownership does not match, you will see errors about missing entitlements or assets not being owned.

---

## ✏️ WHAT YOU ARE ALLOWED TO EDIT (AND WHAT YOU ARE NOT):

A simple, safe rule to remember is:

> **Always edit configuration and settings files; never edit protected core logic.**

### ✅ SAFE TO EDIT:

You can normally edit:

- **Configuration files**, for example:
  - `config.lua`
  - `settings.lua`
  - `config.json`

- **Language / translation files**:
  - `locales/en.lua`
  - `locales/es.lua`
  - Any other translation resources provided by the script

- **Integration options**, such as:
  - Framework mode (`ESX`, `QBCore`, `Standalone`)
  - Target system selector (`qb-target`, `ox_target`, etc.)
  - Notification system selector (`ox_lib`, `okokNotify`, etc.)
  - Webhook URLs for Discord logs or similar.

These files are intentionally left open so that server owners can configure the script to fit their environment without risk.

---

### ❌ MUST NOT BE EDITED:

Files that you should not attempt to modify include:

- Any **compiled/obfuscated `.lua` files** that do not read like normal human‑written Lua.
- Files inside folders explicitly documented as **protected**, **core**, or **do-not-edit**.
- License handling or anti‑tamper code.

Editing protected areas can:

- Prevent the resource from starting.
- Trigger additional errors or unexpected behaviour.
- Make it much harder for SMDZ Studios to support you, because the resource no longer matches the released version.

---

## 🔁 UPDATING AN ESCROWED SCRIPT SAFELY:

When a new version of an escrowed script is published, you should follow a methodical update process to avoid losing configuration or breaking the validation.

### RECOMMENDED UPDATE PROCESS:

1. **Back up your configuration files.**

   For example:

   ```bash
   cp resources/[smdz]/smdz_example/config.lua backups/smdz_example_config_backup.lua
   ```

2. **Download the latest version** from the official Tebex download link.

3. **Remove the old resource folder** from your server:

   ```bash
   rm -rf resources/[smdz]/smdz_example
   ```

4. **Extract the new version** into your resources directory:

   ```bash
   unzip smdz_example_latest.zip -d resources/[smdz]/
   ```

5. **Re‑apply your configuration changes carefully:**

   - Open the new `config.lua` and your backup side‑by‑side.
   - Copy your values from the backup into the new file.
   - Pay attention to any **new options** introduced in the update and keep them intact.

6. **Restart the entire FiveM server** and observe the console for any issues.

By following these steps, you keep your configuration while ensuring that the escrowed code remains untouched and valid.

---

## 🚨 ESCROW / ENTITLEMENT ERRORS – DETAILED GUIDE:

Below you will find the most common error messages related to Asset Escrow, with clear explanations and action plans.

---

### ERROR TYPE 1 – “THIS ASSET IS NOT OWNED BY THIS ACCOUNT”:

**Console example:**

```text
This asset is not owned by this account
```

**Meaning in practice:**

Your server is trying to start an asset that the **current Cfx.re account** (the one that owns the license key) does not own.

#### COMMON CAUSES:

- The script was purchased on a different Cfx.re account.
- The asset belongs to a previous owner and has not been transferred to you.
- You changed the server license key to a key owned by another Cfx.re account.

#### HOW TO FIX IT:

1. **Identify the owning account:**
   - Check in Tebex which Cfx.re account is linked to your purchase.

2. **Identify the server account:**
   - Log into Keymaster and confirm which Cfx.re account owns your server license key.

3. **Align both:**
   - If they are different, you need to transfer the asset to the account that owns the server key.

   You can do this using the official Cfx.re transfer system:  
   👉 [How to transfer assets on Portal](https://support.cfx.re/hc/en-us/articles/16539411062044-How-to-transfer-assets-on-Portal)

4. Once the transfer has completed, **restart the server** and confirm that the error no longer appears.

---

### ERROR TYPE 2 – “YOU LACK THE REQUIRED ENTITLEMENT”:

**Console example:**

```text
You lack the required entitlement to use smdz_prop_finder
```

This error indicates that the server is missing a valid **entitlement** for the asset. This is closely related to ownership, but can also involve temporary or environmental conditions.

There are three typical scenarios.

---

#### 2.1 THE ASSET WAS PURCHASED ON A DIFFERENT ACCOUNT:

If the resource was bought using a different Cfx.re account than the one associated with your server key, the entitlement is not visible to your current server.

**Resolution:**

1. Follow the official transfer guide:  
   👉 [Transfer resource guide](https://support.cfx.re/hc/en-us/articles/16539411062044-How-to-transfer-assets-on-Portal)
2. Transfer the asset to the account owning the server license key.
3. Perform a **full server restart** and re‑check the console.

---

#### 2.2 THE SERVER HAS NOT BEEN RESTARTED SINCE PURCHASE OR TRANSFER:

After purchasing or transferring an asset, entitlements may not be applied until the server has been properly restarted.

**Resolution:**

- Stop the FiveM server process completely.
- Start it again from zero, allowing it to run all startup checks.
- Watch the console to confirm that the entitlement error has disappeared.

---

#### 2.3 THE SERVER OPERATING SYSTEM TIME IS INCORRECT:

If the system clock on the server is significantly ahead or behind real time (commonly by more than one minute), some security checks and entitlements may fail.

**How to check and correct the time:**

1. On the server machine, open:  
   👉 <https://time.is/>
2. Compare:
   - The time shown on `time.is`.
   - The local server time.

3. If the difference is larger than around **60 seconds**, correct the system time.

**On Windows servers:**

- Enable:
  - “Set time automatically”
  - “Set time zone automatically”
- Or configure an NTP server under the Date & Time settings.

**On Linux servers:**

- Use:

  ```bash
  timedatectl set-ntp true
  ```

- Or configure `chrony` / `ntpd` with public NTP servers.

For a visual explanation, you can refer to this video (external resource):

> Time synchronization example: <https://www.youtube.com/watch?v=cLJGy4-sMZg>

After adjusting the time:

- Restart the server and verify whether the entitlement error has been resolved.

---

### ERROR TYPE 3 – “FAILED TO VERIFY PROTECTED RESOURCE” OR SIMILAR:

This error often points to **network or connectivity problems** between your server and the Cfx.re/Tebex validation infrastructure.

#### POSSIBLE CAUSES:

- Strict firewall rules blocking outgoing connections.
- Temporary outages or connectivity issues at your hosting provider.
- Misconfigured DNS or network stack.

#### ACTION STEPS:

1. Verify that the server has full internet connectivity.
2. Temporarily relax strict firewall rules or DDoS protections and test again.
3. Restart the server after making changes.
4. If the error continues, contact your hosting provider and SMDZ Studios support with:
   - Detailed console logs.
   - Information about your hosting environment (VPS, dedicated machine, game panel, etc.).

---

## 📌 BEST PRACTICES WHEN USING ASSET ESCROW:

To maintain a stable and secure environment while using escrowed SMDZ Studios scripts:

- Always purchase from the **official SMDZ Studios Tebex store**.
- Make sure your **Tebex**, **Cfx.re**, and **server license key** are all aligned.
- Only modify:
  - Configuration files.
  - Translation and clearly documented integration points.
- Never attempt to bypass, decompile, or otherwise tamper with escrow protection.

These practices protect both your investment and the stability of your server.

---

## ❓ STILL NEED HELP WITH ESCROW OR ENTITLEMENTS?:

If, after following this guide, you still experience problems:

1. Gather the following information:

   - Script name and version (for example: `smdz_prop_finder v1.0.0`).
   - Framework and version (ESX / QBCore / Standalone).
   - Tebex purchase ID.
   - Full console log from server startup until the error appears.
   - A short description of what you have already tried.

2. Visit the **[Support](support.md)** page and contact SMDZ Studios through the official email or Discord.

With complete and precise information, SMDZ Studios can diagnose entitlement and escrow issues quickly and provide a clear resolution path.

---

# COMMON PROBLEMS & TROUBLESHOOTING:

The following guide is designed to help **server owners of any experience level** systematically diagnose and resolve common issues with SMDZ Studios scripts.  
Each section follows the same structure:

1. **What you see** in game or in the console.  
2. **Why this usually happens**.  
3. **Step‑by‑step actions** you can take to solve it.

---

## 🔍 QUICK INDEX:

- [SCRIPT WON’T START / CRASHES ON STARTUP](#🚀-script-won-t-start--crashes-on-startup)
- [DATABASE & SQL ISSUES](#🗄-database--sql-issues)
- [PERMISSIONS & ADMIN COMMANDS](#👥-permissions--admin-commands-not-working)
- [FRAMEWORK (ESX / QBCORE / STANDALONE) PROBLEMS](#🔑-framework-compatibility-esx--qbcore--standalone)
- [CONFIGURATION MISTAKES](#🎛-configuration-mistakes)
- [UI / TARGET / NOTIFICATION ISSUES](#🎨-ui--notifications--target-integrations)
- [PERFORMANCE & TICK USAGE](#🌍-performance--tick-usage)
- [WHEN TO CONTACT SUPPORT](#📬-when-to-contact-support)

---

## 🚀 SCRIPT WON’T START / CRASHES ON STARTUP:

### WHAT YOU SEE:

- The script does not appear as `started` in the console.
- You call `ensure smdz_example` and immediately see errors in red.
- Players cannot access any menu or feature belonging to the script.

---

### QUICK SELF‑CHECK:

Before anything else, quickly confirm:

```text
[ ] The folder name of the resource is correct and has no typos.
[ ] The resource is placed in an appropriate folder, for example: resources/[smdz]/smdz_example
[ ] The line in server.cfg uses exactly the same name: ensure smdz_example
[ ] All frameworks and required dependencies are started BEFORE this script.
[ ] You have looked at the server console during startup for errors mentioning this resource.
```

---

### A. INCORRECT FOLDER NAME OR ENSURE NAME:

**Typical console message:**

```text
Could not find resource smdz_example.
```

This means the server cannot find a resource with that exact name.

**How to correct it:**

1. Open your FTP or file manager and check the folder name of the resource.
2. Ensure the path looks like this (as an example):

   ```text
   resources/[smdz]/smdz_example
   ```

3. In `server.cfg`, confirm you are using:

   ```bash
   ensure smdz_example
   ```

4. Avoid:

   - Spaces: `smdz example`
   - Extra text: `smdz_example-main`
   - Incorrect capitalization: `SMDZ_Example`

---

### B. MISSING REQUIRED FRAMEWORKS OR LIBRARIES:

Many scripts require other resources to function, such as:

- A framework: `es_extended` (ESX) or `qb-core` (QBCore).
- A database adapter: `oxmysql` or `mysql-async`.
- Third‑party libraries for UI, notifications, or targeting.

**Console hints:**

```text
attempt to index a nil value (global 'ESX')
attempt to index a nil value (global 'QBCore')
No such export oxmysql:execute
```

**How to proceed:**

1. Visit the documentation page of the script and locate the **REQUIREMENTS** section.
2. Install any missing scripts (framework, database adapter, UI libs, etc.).
3. In `server.cfg`, ensure the order is correct. A common example:

   ```bash
   ensure oxmysql
   ensure es_extended   # or qb-core
   ensure smdz_example
   ```

4. Fully restart the server and observe the console again.

---

### C. ESCROW / ENTITLEMENT ISSUES:

If the script is protected, some errors will relate to Asset Escrow or entitlements.

**Typical examples:**

```text
This asset is not owned by this account
You lack the required entitlement to use smdz_prop_finder
Failed to verify protected resource
```

In these cases, you should go to:  
👉 **[ASSET ESCROW SYSTEM (CFX.RE / TEBEX)](fxap.md)**

That page explains, in detail, how to fix ownership and entitlement problems.

---

## 🗄 DATABASE & SQL ISSUES:

### WHAT YOU SEE:

- Data is not being saved to the database (vehicles, inventories, logs, etc.).
- The console logs errors regarding `oxmysql`, `mysql-async`, or database tables.
- Some functionality appears to work but does not persist between restarts.

---

### A. HOW TO IDENTIFY DATABASE PROBLEMS:

Search your console for keywords such as:

- `oxmysql`
- `mysql-async`
- `MySQL`
- `table doesn't exist`
- `connection failed` or `ECONNREFUSED`

---

### B. DATABASE ADAPTER NOT INSTALLED OR NOT RUNNING:

If the adapter is missing or misconfigured, you might see:

```text
[oxmysql] [ERROR] connection failed
[mysql-async] [ERROR] Could not connect
```

**Step‑by‑step solution:**

1. Decide which adapter you want to use:
   - **Recommended:** `oxmysql`
   - **Legacy:** `mysql-async`
2. Install and configure the adapter with your DB credentials.
3. Make sure the adapter is started before any framework or SMDZ script, for example:

   ```bash
   ensure oxmysql
   ensure es_extended   # or qb-core
   ensure smdz_example
   ```

4. Restart the server and check if the connection errors disappear.

---

### C. MISSING TABLES OR UNAPPLIED SQL FILES:

If the script expects certain database tables that do not exist, you might see:

```text
[oxmysql] [ERROR] Table 'mydb.smdz_example' doesn't exist
```

**How to resolve:**

1. Look inside the resource directory for `.sql` files, such as `smdz_example.sql`.
2. Open your database manager (phpMyAdmin, HeidiSQL, DBeaver, etc.).
3. Select the correct database used by your FiveM server.
4. Import the `.sql` file(s).
5. Restart the server and verify that the errors are gone.

---

### D. WRONG DATABASE CREDENTIALS:

When credentials are incorrect, the adapter will simply fail to connect.

**What to check:**

- Host address (e.g. `127.0.0.1` or the IP of your DB server).
- Port (default MariaDB/MySQL: `3306`).
- Database name, username, and password.
- Whether the DB user has permission to connect from your FiveM host.

Correct these values in the adapter configuration and restart the server.

---

## 👥 PERMISSIONS & ADMIN COMMANDS NOT WORKING:

### WHAT YOU SEE:

- Staff or admins cannot execute certain commands or open admin menus.
- Regular players can access functions that should be restricted.
- You may see “access denied” warnings in the console.

---

### A. FRAMEWORK PERMISSION SYSTEM (ESX / QBCORE):

Each framework provides a way to define permission groups or roles:

- **ESX:** `user`, `mod`, `admin`, `superadmin`.
- **QBCore:** roles managed in the player data or dedicated permission systems.

**Recommended approach:**

1. In the script documentation, check what role or group is required for admin features.
2. Confirm in your **framework configs or database** that your staff members are assigned to the appropriate role.
3. Test with a known admin account and verify that the script behaves as expected.

---

### B. ACE PERMISSIONS:

Some SMDZ scripts use ACE, FiveM’s built‑in permission system, on top of the framework’s system.

**Example of an ACE restriction:**

```text
Access denied for command /smdz_admin
```

**How to configure ACE:**

1. In your `server.cfg`, add lines similar to:

   ```bash
   add_ace group.admin smdz.scripts allow
   add_principal identifier.license:xxxxxxxxxxxxxxxx group.admin
   ```

2. Replace `identifier.license:...` with real identifiers for your admin accounts.
3. Restart the server or re‑execute the config file.
4. Test again with your staff accounts.

---

## 🔑 FRAMEWORK COMPATIBILITY (ESX / QBCORE / STANDALONE):

### WHAT YOU SEE:

- The script claims to support ESX or QBCore but does not behave correctly on your server.
- Console shows that `ESX` or `QBCore` is `nil` or not defined.

---

### A. FRAMEWORK MODE MISMATCH:

Most multi‑framework scripts include a setting such as:

```lua
Config.Framework = 'ESX'       -- or 'QBCore' or 'Standalone'
```

If this value does not match your real setup, the resource will fail to initialize correctly.

**Action plan:**

1. Open the script’s main configuration file.
2. Locate the framework mode option.
3. Set it to `ESX`, `QBCore`, or `Standalone` exactly as documented.
4. Confirm that the appropriate framework resource (e.g. `es_extended` or `qb-core`) is installed and started before the SMDZ script.

---

### B. START ORDER OF FRAMEWORKS:

Even if the framework is properly configured, it must be loaded **before** the SMDZ script.

**Example of a correct order:**

```bash
ensure es_extended   # or qb-core
ensure smdz_example
```

If the order is reversed, the framework variables will not be available when the script initializes.

---

## 🎛 CONFIGURATION MISTAKES:

### WHAT YOU SEE:

- No direct console error, but specific features do not work.
- Blips, zones, or interactions are missing or placed incorrectly.
- Notifications, timers, or cooldowns behave unexpectedly.

---

### A. COMPARE WITH THE DEFAULT CONFIGURATION:

The simplest way to detect configuration mistakes is to compare your file with a clean copy:

1. Back up your current `config.lua`.
2. Download a fresh copy of the resource from the official source.
3. Compare line by line:
   - Are there options you accidentally deleted?
   - Are there values that no longer exist in the new version?
4. Carefully merge your settings into the new configuration file.

---

### B. TYPICAL CONFIG ERRORS:

Some recurring patterns include:

- Empty strings where values are required (e.g. webhooks left completely blank when mandatory).
- Typographical errors in mode names or option keys.
- Incorrect coordinate formats or missing vector wrappers.

Whenever possible, stick closely to the examples provided in the documentation and comments within the configuration file.

---

## 🎨 UI / NOTIFICATIONS / TARGET INTEGRATIONS:

### WHAT YOU SEE:

- Nothing happens when aiming at a marker or pressing the interaction key.
- Menus or notifications do not appear, even though the script seems to run.
- No obvious error appears in the console.

---

### A. UNDERSTANDING YOUR OWN STACK:

Modern FiveM servers often use several external systems:

- **Target systems:** `qb-target`, `ox_target`, `qtarget`, etc.
- **Notification systems:** `ox_lib`, `mythic_notify`, `okokNotify`, and others.

SMDZ scripts usually include configuration options that allow you to choose which one to use.

**Typical configuration block:**

```lua
Config.Target       = 'qb-target'   -- 'ox_target', 'qtarget', etc.
Config.Notification = 'ox_lib'      -- 'mythic', 'okok', etc.
```

**Steps to align everything:**

1. Decide which target and notification systems you want to standardize on across your server.
2. Make sure those systems are actually installed and started.
3. Set the configuration values in the SMDZ script to exactly match these resource names.
4. Restart the server and test in‑game.

---

## 🌍 PERFORMANCE & TICK USAGE:

### WHAT YOU SEE:

- Players mention “lag” or delayed responses.
- You suspect a particular script might be heavy on CPU.

---

### A. MEASURING, NOT GUESSING:

FiveM provides a built‑in resource monitor that you can enable in the console:

```text
resmon 1
```

This command shows per‑resource CPU usage. Focus on the line that corresponds to the SMDZ script (for example `smdz_example`) and note:

- The average **ms** value.
- Whether there are frequent spikes.

---

### B. IF A SCRIPT APPEARS HEAVY:

1. Review the configuration and identify options that might be expensive:
   - Very frequent loops with low wait times.
   - Extremely large areas or lists processed every frame.
2. Increase wait times moderately or reduce the size and frequency of scanning operations.
3. Disable optional diagnostic features, such as heavy debug printing or visualization.
4. Test the script on a **minimal test server** (only framework + DB + SMDZ script) to rule out interference from other resources.

If you still experience high usage, gather:

- Screenshots of `resmon`.
- Your configuration file.
- Estimated player load.

…and include this information in a support request.

---

## 📬 WHEN TO CONTACT SUPPORT:

If you have worked through the relevant section for your problem and still cannot resolve the issue, SMDZ Studios is available to assist.

### INFORMATION THAT GREATLY SPEEDS UP SUPPORT:

Prepare the following details:

```text
• Script name:         smdz_example
• Script version:      v1.0.0
• Framework:           ESX / QBCore / Standalone
• Tebex purchase ID:   ################
• Server artifacts:    FiveM build number
• Full console log:    From server start until the issue appears
• Steps to reproduce:  1) ..., 2) ..., 3) ...
```

Then visit the **[Support](support.md)** page and use the provided email or Discord contact.

A clear and structured report allows SMDZ Studios to analyse your situation quickly and provide accurate, professional guidance for your specific case.