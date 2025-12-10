# 🚀 SMDZ STUDIOS – FIVEM SCRIPT DOCS

<div class="hero-logo-panel">
  <div class="hero-logo-inner">
    <img src="assets/logo.png" alt="SMDZ Studios Logo" />
  </div>
</div>

<div class="hero">

<div>

<div class="hero-header-wrapper">
  <div class="hero-tagline">
    <span class="hero-tagline-dot"></span>
    FiveM scripts by SMDZ Studios
  </div>

  <h1 class="hero-main-title">
    CLEAN DOCUMENTATION FOR SERIOUS SERVERS
  </h1>

  <p class="hero-subtitle">
    A focused, dark‑mode documentation hub where you can install, configure and maintain SMDZ Studios scripts with confidence — without endless scrolling or confusing walls of text.
  </p>
</div>

<div class="hero-actions">
  <a href="https://smdz-studios.tebex.io/" class="btn-primary" target="_blank" rel="noopener">
    <span class="btn-icon">🛒</span>
    Visit the store
  </a>
</div>

</div>

</div>

---

## ⚡ QUICK START

If you just purchased a script and want to get it running as fast as possible, follow this path:

1. Open **[Scripts Overview](scripts/README.md)**.  
2. Click on the script you are installing.  
3. Follow the sections in order:

   - **Requirements** – what your server needs to have installed.  
   - **Installation** – where to place the resource and how to `ensure` it.  
   - **Configuration** – how to adapt the script to your framework and preferences.  
   - **Usage** – commands, keybinds and how your staff/players will interact with it.

A minimal example in your `server.cfg` could look like:

```bash
## SMDZ Studios resources
ensure smdz_example
# ensure smdz_your_script_here
```

---

## 🧭 HOW THIS DOCS SITE IS ORGANIZED

Think of this documentation as a compact, well‑structured hub:

<div class="feature-row">
  <div class="feature-card">
    <h3>🏠 Home</h3>
    <p>
      High‑level overview, quick start guide and links to the most important sections.
      If you are lost, start here.
    </p>
  </div>
  <div class="feature-card">
    <h3>📚 Scripts</h3>
    <p>
      One dedicated page per script with everything you need:
      installation, configuration, usage examples, events and exports.
    </p>
  </div>
  <div class="feature-card">
    <h3>🆘 Support & Guides</h3>
    <p>
      Practical guides for common issues, Asset Escrow explanations and how to open an effective support ticket.
    </p>
  </div>
</div>

---

## 🧪 ADDING A NEW SMDZ SCRIPT

Whenever you release or install a new SMDZ script and want to document it properly, follow this workflow:

1. Duplicate the template:

   ```text
   scripts/example-script.md
   ```

2. Rename it to match your script name, for example:

   - `scripts/smdz_vehicleshop.md`  
   - `scripts/smdz_dispatch.md`

3. Fill in the sections:

   - **Overview & Requirements** – what the script does and what it depends on.  
   - **Installation & Configuration** – exact steps and key options.  
   - **Usage** – commands, keybinds, admin features and player flow.  
   - **Events & Exports** – for owners and developers who want to integrate it with other systems.

4. Add the file to **[Scripts Overview](scripts/README.md)** and, if you want quick access from the menu, to `_sidebar.md`.

💡 **Tip:**  
In a future chat you can paste your new `scripts/smdz_myscript.md` here and I can help you refine the wording, explain options clearly and structure the page so it feels as polished as the rest of the docs.