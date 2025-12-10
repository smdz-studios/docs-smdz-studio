# SMDZ Studios – FiveM Script Documentation

<div class="hero">

<div>

<div class="hero-tagline">
  <span class="hero-tagline-dot"></span>
  Production‑ready FiveM resources
</div>

<h1 class="hero-main-title">
  <span class="hero-gradient">SMDZ Studios</span><br />
  Documentation Hub
</h1>

<p class="hero-subtitle">
  All official guides for SMDZ Studios FiveM scripts, in one place.
  Install, configure, and extend your server with clean, well organized docs – built on a dark background and a green accent style.
</p>

<div class="hero-actions">
  <a href="#-start-here" class="btn-primary">
    <span class="btn-icon">🚀</span>
    Start here
  </a>
  <a href="scripts/README.md" class="btn-ghost">
    <span class="btn-icon">📚</span>
    Browse scripts
  </a>
</div>

</div>

<div class="hero-logo-panel">
  <div class="hero-logo-inner">
    <!-- Big centered logo -->
    <img src="assets/logo.png" alt="SMDZ Studios Logo" />
  </div>
  <div class="hero-logo-caption">
    <span>Official SMDZ Studios documentation</span>
    <span class="hero-logo-badge">Optimized • Modular • Documented</span>
  </div>
</div>

</div>

---

## 🌌 What Is SMDZ Studios?

SMDZ Studios creates **high‑quality FiveM scripts** focused on:

- **Performance** – optimized, low CPU impact resources.
- **Clarity** – readable code and documented behavior.
- **Customization** – flexible configs to match your server style.
- **Integration** – events and exports ready for advanced servers.

This site is the **single source of truth** for learning how to use each SMDZ Studios script.

---

## 🧭 Start Here

### 1. Understand the Documentation Layout

The navigation is simple:

- **Home** – You are here. Global overview, concepts, and quick start.
- **Scripts** – One page per script:
  - Setup & installation
  - Configuration explained
  - Commands, keybinds, and UI
  - Events & exports for developers

Use the **sidebar on the left** to jump between pages, or the **search bar** to quickly find a script or keyword.

---

### 2. Quick Start for Any SMDZ Script

All SMDZ Studios scripts follow the same basic pattern:

1. **Download** the script from the official SMDZ Studios distribution (Tebex, GitHub, or direct link).
2. **Drop** the script folder into your FiveM `resources` directory.
3. **Ensure** the resource in your `server.cfg`.
4. **Configure** it using the corresponding documentation page.

Minimal `server.cfg` example:

```bash
## SMDZ Studios resources
ensure smdz_example      # demo / template script
ensure smdz_vehicleshop  # vehicle shop system
ensure smdz_dispatch     # dispatch / radio logic
```

After a restart, check your **server console** for any errors and verify that the resource started successfully.

---

### 3. Requirements & Compatibility

Most scripts assume:

- A current **FiveM server** using the latest recommended artifacts.
- A framework (if needed by the script):
  - ESX
  - QBCore
  - Standalone (no framework, when specified).

Each script page starts with a **Requirements** section so you can quickly see:

- Which framework is supported.
- Whether a database is required.
- Any extra dependencies (UI frameworks, target systems, inventory systems, etc.).

---

## 🧱 Documentation Philosophy

SMDZ Studios documentation is designed for **server owners**, **developers**, and **staff**.

We keep a consistent structure across all script pages:

1. **Overview**
   - What the script does.
   - When and why you should use it.
2. **Requirements**
   - Framework, dependencies, and compatibility notes.
3. **Installation**
   - Exact steps from download to `ensure`.
4. **Configuration**
   - Explanation of all important options.
   - Realistic config examples.
5. **Usage**
   - Commands, keybinds, and how players interact with the script.
6. **Events & Exports**
   - Hooks and functions for deeper integration.
7. **Debugging & Common Issues**
   - Typical mistakes, console errors, and how to fix them.

> Tip: When you create a new script for SMDZ Studios, always start its docs
> from the **[Example Script Template](scripts/example-script.md)**.

---

## 🧩 Scripts Overview

The **Scripts** section contains all documented SMDZ Studios resources.

Some typical categories you might encounter:

- **Core Gameplay**
  - Jobs, economy, progression systems.
- **Police & Emergency**
  - Dispatch, tools, MDT, callouts.
- **Vehicles & Dealerships**
  - Vehicle shops, garages, rentals.
- **UI & Quality of Life**
  - HUDs, notifications, menus, and utilities.

Go to **[Scripts Overview](scripts/README.md)** to see the current list and jump directly to each script page.

---

## 🛠 Example Workflow: Adding a New SMDZ Script

When you add a new script to your portfolio, follow this workflow:

1. **Create the resource** in your FiveM `resources` folder.
2. **Test it locally** and stabilize the features.
3. **Document it**:
   - Duplicate the file: `scripts/example-script.md`.
   - Rename it: `scripts/smdz_your_script_name.md`.
   - Fill in:
     - Overview
     - Requirements
     - Installation
     - Configuration explanation
     - Commands, keybinds, events, exports
4. **Update the index**:
   - Add the script to `scripts/README.md`.
   - Optionally add a direct link in `/_sidebar.md` under **Scripts**.
5. **Publish** or update the resource on your distribution platform.

This keeps **code and documentation in sync**, and makes maintenance easier over time.

---

## 📦 Recommended Knowledge Before Using These Scripts

You do not need to be a professional developer, but it helps to understand:

- How to edit `server.cfg`.
- How to start/stop resources (`start`, `ensure`, `restart`).
- How to read **server console logs** for errors.
- Basic Lua / configuration editing (copy/paste, booleans, numbers, strings).

For more developer‑focused integrations (events, exports, and callbacks), some experience with:

- Lua scripting in FiveM.
- ESX / QBCore internals (depending on your framework).

---

## 🧪 Troubleshooting Checklist

When something does not work as expected:

1. **Check console logs**
   - Look for script name (for example: `smdz_example`) and errors.
2. **Double‑check folder names**
   - Do not rename the resource folder unless the documentation explicitly allows it.
3. **Confirm dependencies**
   - Make sure required frameworks and other scripts are running.
4. **Compare configs**
   - Use the examples in this documentation and verify your values.
5. **Reproduce the issue**
   - Write down clear steps to reproduce before asking for support.

Having these details ready will speed up support and make debugging easier.

---

## 📫 Support & Feedback

When you need help with an SMDZ Studios script, prepare:

- Script name and version (for example: `smdz_example v1.0.0`).
- Framework (ESX / QBCore / Standalone) and version if relevant.
- FiveM server build/artifacts version.
- What you tried already and what exactly happens.
- Any console log errors.

Then reach out through the official SMDZ Studios **support channels** (Discord, tickets, or contact methods you define).

---

## ✅ Next Steps

- Visit **[Scripts Overview](scripts/README.md)** to explore all available scripts.
- Use the **search bar** in the sidebar to find functions, events, or keywords.
- When you ship a new script, use the **[Example Script Template](scripts/example-script.md)** so your docs stay consistent and professional.