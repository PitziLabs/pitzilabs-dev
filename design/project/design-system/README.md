# Pitzi Labs — Brand & Design System

The canonical design tokens live in `colors_and_type.css`. Link that one
stylesheet and you get the right palette, type, spacing, and motion tokens.

## Brand mark

The wordmark is `<pl:>` — angle brackets read as a command prompt, the `:>`
reads as a sideways smile. Three rendering scales are common:

- **Chip** — a small navy square with the orange brackets inside. Use for nav,
  business cards, favicons.
- **Inline accent** — `:>` on its own at the end of a sentence as a
  punctuation-style flourish (orange, mono).
- **Watermark** — giant translucent `:>` bleeding off a corner. Use sparingly
  on dark surfaces.

A reusable React component lives at `components/Brand.jsx` (`<BrandMark />`,
`<PromptSmile />`).

## Palette

| Token                 | Hex      | Notes                                  |
|-----------------------|----------|----------------------------------------|
| `--color-accent`      | `#e08438`| Brand orange. Primary action / link.   |
| `--color-accent-hover`| `#c66f24`| Hover / pressed.                       |
| `--color-navy`        | `#1c3552`| Brand navy. Mid surfaces.              |
| `--color-navy-deep`   | `#122237`| Deep navy. Primary text on cream.      |
| `--color-ink-strong`  | `#0a1628`| Hero / dark surfaces (near-black navy).|
| `--color-bg`          | `#faf7f2`| Warm cream paper.                      |
| `--color-bg-alt`      | `#f3eee5`| Subtle band.                           |

Status: `#4a9e82` ok · `#d4a12e` warn · `#e08438` info · `#c54a2a` err.

## Type

- **Display + body**: Space Grotesk (400/500/600/700)
- **Mono**: JetBrains Mono (400/500/600)
- Self-hosted under `assets/fonts/` and wired up in `assets/fonts.css`.

## Conventions

- Cream paper is the default surface; navy `--color-ink-strong` is the
  reserved dark surface (heroes, dark cards, terminal mocks).
- Orange is an accent color — one element per region, not a fill.
- Terminal mocks use `<pl:>` as the prompt glyph, not `$` or `>`.
