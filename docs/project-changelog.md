# Changelog

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
