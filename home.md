<div class="hero-logo-panel">
  <div class="hero-logo-inner">
    <img src="assets/logo.png" alt="SMDZ Studios Logo" style="max-width: 290px; max-height: 290px;" />
  </div>
</div>

<div class="hero-header-wrapper" style="margin-top: 0.5rem; margin-bottom: 1.8rem; text-align: center;">
  <h1 class="hero-main-title">
    OFFICIAL DOCUMENTATION
  </h1>
</div>

---

## ⚡ **QUICK START FOR NEW CUSTOMERS:**

If you are here because you just purchased a script, follow this path before touching your live server:

1. **Find your script page**  
   Open the left menu and click on the exact script you bought.

2. **Read the “Requirements” section carefully**  
   Confirm that you have:
   - The correct framework: **ESX / QBCore / Standalone**  
   - Required dependencies: database adapter, target system, UI library, etc.  
   - Any extra resources mentioned on that script’s page.

3. **Install the resource in the correct folder**  
   Place the script following the structure recommended in the docs, then add the `ensure` line to your `server.cfg`:

   <pre><code>## SMDZ Studios resources
ensure smdz_example
# ensure smdz_your_script_here
</code></pre>

4. **Configure before going live**  
   Open `config.lua` (or similar) and check at least:

   - `Config.Framework` (ESX / QBCore / Standalone)  
   - Target / interaction system (for example `qb-target`, `ox_target`, etc.)  
   - Notification / UI system (for example `ox_lib`, `mythic_notify`…)  
   - Options linked to your economy, jobs, permissions or inventory.

5. **Test in a non‑production environment**  
   Before using it on your main RP server:

   - Run the script on a **local test server**, or  
   - Use a dedicated **staging/testing server** with fewer resources loaded.

   This makes it easier to detect conflicts and understand how the script behaves in a clean setup.

---

## 🧭 **WHAT YOU WILL FIND IN THESE DOCS:**

Think of this documentation as a focused hub for **server owners** and **developers** using SMDZ Studios scripts:

<div class="feature-row">
  <div class="feature-card">
    <h3>🏠 Home</h3>
    <p>
      A clean entry point with links to the most important areas:
      scripts list, support, FAQ and troubleshooting.
    </p>
  </div>
  <div class="feature-card">
    <h3>📚 Script pages</h3>
    <p>
      Each script has its own page covering:
      requirements, installation, configuration, usage, developer events and exports.
    </p>
  </div>
  <div class="feature-card">
    <h3>🆘 Support & Troubleshooting</h3>
    <p>
      Dedicated sections for common problems, Asset Escrow explanations,
      performance tips and how to open an effective support ticket.
    </p>
  </div>
</div>

---

## 🧩 **HOW TO USE THESE DOCS EFFICIENTLY:**

To avoid wasting time and to keep your server stable, use this flow whenever you work with an SMDZ Studios resource:

1. **Start from the script page**  
   - Read the page of the script you are installing or updating from top to bottom.  
   - Do not skip the “Requirements” or any “Notes for updates”.

2. **Search by keyword when you are stuck**  
   - Use the search box on the left for specific terms such as  
     `framework`, `export`, `event`, `command`, `target`, `notify`, etc.  
   - This is useful if you remember the feature but not the exact section.

3. **Use troubleshooting before opening a ticket**  
   - Check **[Common Problems](problems.md)** when:
     - The resource doesn’t start.  
     - There are SQL / database issues.  
     - Permissions do not behave as expected.  
     - Performance seems worse than it should be.

4. **Go to support when you have a real, reproducible issue**  
   - When something feels “off” and you can reproduce it, move to **[Support](support.md)**.  
   - There you will find exactly what information to include so that SMDZ Studios can help effectively.

---

## 🧪 **FOR SERVER OWNERS & DEVELOPERS:**

Whether you are just installing scripts or building systems around them:

- **Server owners / staff**

  Focus mainly on:

  - **Requirements** – what the script needs to run.  
  - **Installation** – where to place it and how to start it.  
  - **Configuration** – framework mode, target, notifications, economy and jobs.  
  - **Usage** – commands, keybinds, menus, jobs and permissions.

- **Developers / integrators**

  Look for:

  - **Events** – server/client events you can listen to or trigger.  
  - **Exports** – functions you can call from other scripts.  
  - **Callbacks / Interfaces** – ways to plug your systems into SMDZ resources.

This lets you connect SMDZ scripts with:

- Job systems.  
- Logs and admin panels.  
- Custom UIs.  
- Other RP systems (garages, inventories, dispatch, etc.).

If you need more technical detail for developers, you can suggest new sections via support so they can be added to the documentation.

---

## 📬 **WHERE TO GO NEXT:**

Depending on what you need right now:

- 🧩 **You have a problem/error**  
  → Go to **[Common Problems](problems.md)** for step‑by‑step diagnostics.  

- 🧾 **You want to understand Asset Escrow / entitlements**  
  → Read **[Asset Escrow System](fxap.md)** to understand how Cfx.re / Tebex protection works and how to fix typical entitlement issues.  

- 🆘 **You need direct help**  
  → Visit **[Support](support.md)** for contact details and what to include in your ticket so it can be handled quickly and professionally.  

Use the **search bar** in the sidebar whenever you remember a keyword but not the exact page name.  
Everything here is designed to save you time and reduce guesswork when running your FiveM server with SMDZ Studios scripts. 💚