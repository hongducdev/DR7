# Design guidelines

## Brand palette

Defined as CSS variables in `css/layout.css` (`:root`).

| Token | Hex | Use |
| --- | --- | --- |
| `--green` | `#15c671` | Done state, update badge |
| `--gray` | `#d3d3d7` | Neutral light |
| `--white` | `#ffffff` | Text on dark, cards |
| `--rose` | `#f50008` | Active tab underline, heart, primary button |
| `--black` | `#000000` | Shadows, outlines |

## Retouch action grid

- Panel width: 300px default and minimum (manifest + `PANEL_MIN_WIDTH` in `js/panel.js`); three equal columns with 4px gaps.
- Groups are dark cards (`#262626`, 10px radius) whose uppercase title has a chevron; clicking it collapses the group (`js/section-collapse.js`).
- Action buttons: 28px high, 8px radius, 11px semibold label, neutral dark fill with a thin border; the only filled button is the rose primary (`Làm Da V5.0`, 34px).
- A finished state (e.g. brush already set up) uses a green border and tint.
- Keep full command meaning in `title` when the visible label is shortened.
- Hide unavailable commands instead of leaving dead controls in the main workflow.
- Button icons are thin-stroke SVG masks in `css/button-icons.css` (class `icon-btn` + `--icon`), so they follow the label colour; never put emoji or symbol characters in button text.
