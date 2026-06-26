<div class="tool-shell" id="item-converter-tool" data-mode="ox-to-qb">
  <div class="tool-banner">
    <img src="/assets/other/banner-item-converter.png" alt="Item Converter banner" class="tool-banner-image" />
  </div>

> Convert common item definitions between `ox_inventory` and `QBCore`.

---

  <div class="tool-hero">
    <div class="tool-hero-copy">
      <p class="tool-kicker">Tools</p>
      <h1>ox_inventory to QBCore Item Converter</h1>
      <p class="tool-description">Paste a Lua item table, auto-detect the source format, and generate the target structure. The parser understands common ox_inventory and QBCore layouts, then gives you a clean, copy-ready result.</p>
    </div>
    <div class="tool-hero-note">
      <p class="tool-note"><strong>Useful fast paths:</strong> load a sample, drop a file into the input box, or paste raw Lua and let the tool detect the direction automatically.</p>
    </div>
  </div>

  <div class="tool-stats" aria-label="Conversion summary">
    <div class="tool-stat"><span class="tool-stat-label">Format</span><strong id="item-converter-format">ox_inventory</strong></div>
    <div class="tool-stat"><span class="tool-stat-label">Items</span><strong id="item-converter-items">0</strong></div>
    <div class="tool-stat"><span class="tool-stat-label">Warnings</span><strong id="item-converter-warnings">0</strong></div>
    <div class="tool-stat"><span class="tool-stat-label">Output</span><strong id="item-converter-output-count">0 chars</strong></div>
  </div>

  <div class="tool-toolbar">
    <div class="tool-switcher" role="tablist" aria-label="Conversion direction">
      <button type="button" class="tool-switcher-button is-active" data-direction="ox-to-qb">ox_inventory to QBCore</button>
      <button type="button" class="tool-switcher-button" data-direction="qb-to-ox">QBCore to ox_inventory</button>
      <button type="button" class="tool-switcher-button tool-switcher-button--neutral" data-action="swap">Swap direction</button>
      <button type="button" class="tool-switcher-button tool-switcher-button--neutral" data-action="clear">Clear</button>
    </div>
    <div class="tool-toolbar-actions">
      <button type="button" id="item-converter-convert" class="tool-button">Convert</button>
      <button type="button" class="tool-button tool-button--ghost" data-sample="ox">Load ox sample</button>
      <button type="button" class="tool-button tool-button--ghost" data-sample="qb">Load QBCore sample</button>
      <button type="button" id="item-converter-copy" class="tool-button tool-button--ghost">Copy output</button>
      <button type="button" id="item-converter-download" class="tool-button">Download .lua</button>
    </div>
  </div>

  <section class="tool-workspace">
    <div class="tool-workspace-pane">
      <div class="tool-pane-head">
        <h3>Input</h3>
        <span class="tool-pane-subtitle">Paste Lua or drop a file</span>
      </div>
      <textarea id="item-converter-input" class="tool-textarea" spellcheck="false" placeholder="Paste your Lua item table here. You can also drag and drop a .lua or .txt file."></textarea>
      <div class="tool-status" id="item-converter-hint">Drop a file or paste Lua to begin.</div>
    </div>

    <div class="tool-workspace-pane tool-workspace-pane--output">
      <div class="tool-pane-head">
        <h3>Output</h3>
        <span class="tool-pane-subtitle">Copy-ready Lua</span>
      </div>
      <div id="item-converter-output" class="tool-output tool-output--plain" aria-live="polite">Converted Lua will appear here.</div>
      <div class="tool-status" id="item-converter-status">Ready.</div>
    </div>

    
  </section>

  <div class="tool-info-bar">
    <div class="tool-info-item"><strong>Mapped</strong><span>`label`, `weight`, `stack`, `unique`, `close`, `shouldClose`, `description`, `image`</span></div>
    <div class="tool-info-item"><strong>Tip</strong><span>Use the sample buttons or drop a `.lua` file for the fastest migration flow.</span></div>
  </div>
</div>
