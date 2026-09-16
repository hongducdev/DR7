# Changelog

## 2026-09-16 — Keep only working functions (26 buttons)

- Remove every unavailable (dimmed) action button and the whole icon toolbar + logo from index.html.
  Panel now has exactly 26 action buttons plus the ↻ reload button; content height shrinks to fit.
- Delete the scripts that only served removed features: js/pp.js, css/icons.css, css/style.css,
  jsx/5.jsxbin (Tần số 8/16), jsx/{002,004,007,014,015,017,br,cr,dark,dv,ee,fade,fit,fs,light,liq,mid,sm,st,vw}.jsx.
- Trim jsx/main.jsx from 21,511 to 2,432 lines: keep only GGXS, TJSH, JMXS, TJYY, FSJH, MBPF, ZCZQ, DKACR
  (reachability from those roots, including string-form calls, removes 72 top-level blocks: other commands,
  panel_* wrapper dialogs and the leftover stigmata/DRM code).
- Trim jsx/mhk-replacements.jsx to CGYSB, MLXG, mcwl, sfb and PP_DETAIL; drop backgrounds, hide-texture,
  mixer-brush and the unused pattern helpers.
- Trim jsx/Photoshop.jsx to the BUGFIX startup helper (ZO/SP/HB/PA/CL/PC/SA/MA/BW/FW/LA tools removed).
- Remove unused resources: assets/ and every img/ theme folder; only img/icon-large.png (panel icon) remains.
- Loader no longer evaluates jsx/5.jsxbin; verify_plugin.js accepts commands defined in $.mhkReplacements.
- Checks: _dev/tools/check_syntax.js (15/15 files), _dev/tools/check-autorun.js (16 core files, 0 side effects),
  _dev/tools/verify_plugin.js (12 doa + 15 onClickButton commands, bridge payloads valid), verify_assets.js.

## 2026-09-16 — Original MHK resources and hot reload

- Add eight original PAT tiles (100,654 bytes) with stable UUIDs and a dependency-free generator.
- Replace 13 unavailable actions; add pp.js for backgrounds, detail, texture visibility and Mixer Brush.
- Native Photoshop 23.2 verification: PAT import and 36/36 replacement command cases on RGB 8/16-bit; output layers are named and nonempty.
- Fix stamped-layer identity handling and Find Edges action call; avoid preset name collisions.
- Add manual reload and Node watcher for runtime source sync. Busy panel commands defer copying/reload.
- Live installed CEP verification passed manual reload, source save, automatic copy/reload and restoration.
- Refit restored actions: 57 buttons, 738px content height, 6px bottom spacing.
- New effects intentionally differ from DR6. Manifest/CEP configuration changes still require Photoshop restart.
- Checks: tests/check-script-stability.js, tests/check-hot-reload.js, tests/check-live-reload.js, tests/photoshop-replacements-audit.jsx.

## 2026-09-15 — Compact panel layout

- Reflow working actions into a dense three-column grid at the 235px CEP width.
- Reduce button height and spacing; soften the existing category colors and interaction states.
- Hide confirmed unavailable controls and shorten five long labels with full tooltips retained.
- Visual content ends at 607px; no clipped, wrapped or horizontally overflowing labels.

## 2026-09-15 — Script stability

- High: fix evalFile caller-scope loss of 33 main command functions with explicit namespace exports.
- Preserve loader helpers; report all loading errors and require confirmed readiness.
- Prevent overlapping commands; report host error context and restore dialog/ruler preferences.
- Restore 10 script resources and matching binary preset names; resolve paths from CEP root.
- Repair typeof token typos; use native eyedropper when optional preset absent; material file picker.
- Disable 13 confirmed unsupported legacy pattern/source-layer actions, retaining explanatory tooltips.
- Verification: 72 callable entries, 36 loaded files, 16 image operations and 11 tools passed in Photoshop 23.2.
- Limit: missing original pattern assets; interactive/batch flows and other image modes not fully verified.
- Regression checks: tests/check-script-stability.js and tests/photoshop-script-audit.jsx.
