# SMDZ Studios – FiveM Script Documentation

Welcome to the official documentation hub for **SMDZ Studios** FiveM resources.  
This site is built with **Docsify**, rendered in **dark mode**, and hosted on **GitHub Pages**.

> This documentation is focused on helping you install, configure, and extend SMDZ Studios scripts for your FiveM server.

---

## 👋 About SMDZ Studios

SMDZ Studios creates **high‑quality FiveM scripts** designed to be:

- **Optimized** – low CPU usage and efficient architecture.
- **Configurable** – easy to customize through clear configuration files.
- **Modular** – independent resources that work well together.
- **Documented** – each script includes detailed guides and examples.

---

## 📦 What You Will Find Here

- **Getting Started** – how to install SMDZ Studios scripts on your FiveM server.
- **Script Catalog** – documentation for each individual script.
- **Configuration Guides** – how to tweak each script to match your server.
- **Developer Notes** – integration tips, exports, events, and best practices.

Use the **sidebar on the left** to navigate between pages.

---

## 🚀 Quick Start

To quickly start using a script by SMDZ Studios:

1. Download the resource from the official source (Tebex, GitHub, or direct link).
2. Place the resource folder inside your FiveM `resources` directory.
3. Add `ensure smdz_<scriptname>` in your `server.cfg`.
4. Open the script documentation in the **Scripts** section of this site.
5. Follow the installation and configuration instructions.

Example minimal `server.cfg` snippet:

```bash
## SMDZ Studios resources
ensure smdz_example
ensure smdz_vehicleshop
ensure smdz_dispatch
```

---

## 📚 Structure of This Documentation

- **Home** – Overview of SMDZ Studios and basic concepts.
- **Scripts** – One page per script, including:
  - Installation
  - Configuration
  - Commands & keybinds
  - Events & exports (for developers)
- **Changelog** – High‑level changelog for major updates (optional).

> Tip: Every time you add a new script, create a new Markdown file following the template in `scripts/example-script.md` and link it from `scripts/README.md` and `_sidebar.md`.

---

## 🛠 Requirements

Most SMDZ Studios scripts assume:

- A running **FiveM server** (latest recommended build).
- A framework (if required by the script), such as:
  - ESX
  - QBCore
  - Standalone (no framework) – when specified.
- Basic knowledge of:
  - Editing `server.cfg`
  - Starting/stopping resources
  - Reading console logs for errors

Always check the **Requirements** section of each script page.

---

## 📫 Support & Feedback

If you encounter any issues or have feature requests:

- Check the script's page for known issues or FAQs.
- Verify your configuration against the examples.
- Collect relevant logs and error messages from your server console.

Then contact SMDZ Studios using the official support channels (Discord, ticket system, etc. – add links here).

---

## ✅ Next Steps

- Open the **[Scripts](scripts/README.md)** section to see the list of documented scripts.
- Use the search box in the top left to quickly find what you need.
- When you add new scripts to your portfolio, remember to:
  - Duplicate the **example script template**.
  - Fill in each section with details specific to your script.
  - Link it in the sidebar for easy navigation.