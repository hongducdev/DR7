# Design guidelines

## Brand palette

Defined as CSS variables in `css/layout.css` (`:root`).

| Token | Hex | Use |
| --- | --- | --- |
| `--green` | `#15c671` | Retouch accent, update badge |
| `--gray` | `#d3d3d7` | Neutral light |
| `--white` | `#ffffff` | Text on dark, cards |
| `--rose` | `#f50008` | Active tab underline, heart, makeup buttons |
| `--black` | `#000000` | Shadows, outlines |

## Retouch action grid

- Panel width: 300px default and minimum (manifest + `PANEL_MIN_WIDTH` in `js/panel.js`); three equal columns with 4px gaps.
- Action buttons: 23px high, 6px radius, 11px semibold label.
- Amber = primary/skin tone, green = retouch, blue = selection/tool, rose = makeup/detail.
- Keep full command meaning in `title` when the visible label is shortened.
- Hide unavailable commands instead of leaving dead controls in the main workflow.
