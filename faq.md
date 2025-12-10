# ❓ FAQ – FREQUENTLY ASKED QUESTIONS

This page collects common questions about **SMDZ Studios** FiveM scripts and documentation.  
You can treat it as a “first stop” before opening a ticket.

---

## 🔄 HOW DO I UPDATE A SCRIPT WITHOUT LOSING MY CONFIG?

1. **Back up your configuration files**, usually things like `config.lua`, `settings.lua`, `locales/*.lua`.  
2. **Download the latest version** of the script from the official Tebex link.  
3. **Remove the old resource folder** from your server (or move it to a backup directory).  
4. **Extract the new version** to the same path as before.  
5. **Compare the new default config** with your backup and re‑apply your changes carefully:
   - Keep any **new options** the update introduced.  
   - Avoid deleting sections you do not understand.

If you are not sure how to merge a specific update, you can always ask in **Support** and share:

- Old `config.lua`.  
- New default `config.lua`.  
- The version you are upgrading from and to.

---

## 🧱 WHICH FRAMEWORKS ARE SUPPORTED?

Most SMDZ Studios scripts focus on the main modern FiveM ecosystems:

- **ESX** (including ESX Legacy).  
- **QBCore**.  
- Sometimes **Standalone** where it makes sense.

Each script page will clearly state:

- ✅ What frameworks are officially supported.  
- ⚠️ Whether a standalone or “partial” mode is available.  

If a script does not list your framework explicitly, assume it is **not** supported and reach out before purchasing if you are unsure.

---

## 🚀 HOW CAN I OPTIMIZE PERFORMANCE?

A few general recommendations:

- Keep your FiveM server artifacts **up to date** (within the recommended stable builds).  
- Avoid running multiple heavy resources that do similar work (for example several target systems at once).  
- Use `resmon 1` to monitor which resources consume the most CPU and focus optimizations there.  
- Read the “Performance” or “Configuration” sections of each script:
  - Many options let you tune update intervals, range checks and debug features.

If you believe a specific SMDZ script is heavier than it should be, gather:

- `resmon` screenshots.  
- Number of players connected.  
- Your configuration file.  

…and share them via **Support** so we can analyse the situation.

---

## 📜 WHAT ABOUT LICENSING AND ASSET ESCROW?

Some SMDZ scripts are protected using the **Asset Escrow** system from Cfx.re and Tebex.

- This protects core logic from being modified or leaked.  
- You can still edit configuration, translations and documented integration files.  
- The script validates ownership against your Cfx.re/Tebex account.

For a detailed explanation (including common entitlement errors and how to solve them), read:

👉 **[ASSET ESCROW SYSTEM (CFX.RE / TEBEX)](fxap.md)**

---

## 🧩 WHAT INFORMATION SHOULD I INCLUDE WHEN ASKING FOR HELP?

A very good support message usually contains:

- Script name and version (for example `smdz_example v1.0.0`).  
- Framework (ESX / QBCore / Standalone) and any relevant version details.  
- Tebex purchase ID.  
- Server artifacts build number.  
- Console/F8 error messages (copy/paste or screenshot).  
- Clear steps to reproduce the problem.

You can copy the checklist from the **Support** page and fill it each time.  
This keeps support professional, efficient and fair for everyone. 💬