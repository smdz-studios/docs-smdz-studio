# 🚀 SMDZ STUDIOS – FIVEM SCRIPT DOCS

<div class="hero-logo-panel">
  <div class="hero-logo-inner">
    <img src="assets/logo.png" alt="SMDZ Studios Logo" style="max-width: 210px; max-height: 210px;" />
  </div>
</div>

<div class="hero-header-wrapper" style="margin-top: 0.5rem; margin-bottom: 1.8rem; text-align: center;">
  <h1 class="hero-main-title">
    DOCUMENTATION THAT MATCHES YOUR SERVER QUALITY
  </h1>

  <p class="hero-subtitle" style="text-align: center;">
    All SMDZ Studios FiveM scripts documented in one place: clean, dark, and focused on what server owners
    actually need — clear installation steps, safe configuration and practical examples.
  </p>
</div>

---

## ⚡ QUICK START FOR NEW CUSTOMERS

If you are here because you just purchased a script, start with this checklist:

1. **Locate your script page**  
   Open **[Scripts Overview](scripts/README.md)** and click on the script you bought.

2. **Read the Requirements section**  
   Confirm you have:
   - Correct framework (ESX / QBCore / Standalone).  
   - Required dependencies (database adapter, target system, UI library, etc.).  

3. **Install the resource**  
   Follow the exact folder structure shown in the docs and add the `ensure` line to your `server.cfg`:

   ```bash
   ## SMDZ Studios resources
   ensure smdz_example
   # ensure smdz_your_script_here
   ```

4. **Configure before going live**  
   Open `config.lua` (or similar) and adjust:
   - Framework selection.  
   - Target / notification systems.  
   - Any options related to your economy, jobs or permissions.

5. **Test on a non‑production environment**  
   Always test new scripts first on:
   - A local server, or  
   - A staging/test server with fewer resources loaded.

---

## 🧭 WHAT YOU WILL FIND IN THESE DOCS

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

## 🧪 ADDING OR DOCUMENTING A NEW SMDZ SCRIPT

When you want to add your own documentation for a new SMDZ script:

1. **Duplicate the template file**

   ```text
   scripts/example-script.md
   ```

2. **Rename it** to match your resource name, for example:

   - `scripts/smdz_vehicleshop.md`  
   - `scripts/smdz_dispatch.md`

3. **Fill in each section carefully**

   - **Overview & Requirements** – short description and dependencies.  
   - **Installation & Configuration** – step‑by‑step with real paths and code blocks.  
   - **Usage** – commands, keybinds, menus, staff vs player features.  
   - **Events & Exports** – how other scripts can interact with this one.

4. **Link it from the index and sidebar**

   - Add it to **[Scripts Overview](scripts/README.md)**.  
   - Optionally, add a direct shortcut in `_sidebar.md` under **SCRIPTS FIVEM**.

---

## 📬 WHERE TO GO NEXT

Depending on what you need right now:

- 🧩 **You have a problem/error** → Go to **[Common Problems](problems.md)** for step‑by‑step diagnostics.  
- 🧾 **You want to understand Asset Escrow** → Read **[Asset Escrow System](fxap.md)**.  
- 🆘 **You need direct help** → Visit **[Support](support.md)** for contact details and what to include in your ticket.

Use the **search bar** in the sidebar whenever you remember a keyword but not the exact page name.  
Everything here is designed to save you time and reduce guesswork when running your FiveM server with SMDZ Studios scripts. 💚