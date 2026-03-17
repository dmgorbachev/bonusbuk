# Bonusbuk — Advertising Widget UI Variations

Prototype collection of advertising widget designs for [Sports.ru](https://www.sports.ru/). Includes a pixel-perfect homepage replica and multiple widget variations across different design directions.

## Project Structure

```
├── index.html              # Static Sports.ru homepage replica with floating ad widget
├── styles.css              # Homepage styles
├── variants.html           # Bonus slider widget — base + 5 UI variations
├── variants.css            # Bonus slider variant styles
├── assets/                 # Images, icons, SVGs from Figma
└── sports-homepage/        # Vite + React application
    └── src/
        └── components/
            ├── FloatingAdWidget/     # Floating overlay widget (Figma replica)
            └── AdWidgetVariants/     # 10 branded UI variations
                ├── AdWidgetVariant01..10.jsx
                ├── VariantShowcase.jsx
                └── variants.module.css
```

## Widget Variations (React)

10 structurally unique ad widget concepts — not just color tweaks:

| #  | Direction | Name            | Layout                                         |
|----|-----------|-----------------|--------------------------------------------------|
| 01 | Native    | Inline Bar      | Horizontal strip, single row                    |
| 02 | Native    | Feed Card       | Vertical card with author-style header           |
| 03 | Native    | Sidebar Minimal | Narrow centered column, text-link CTA            |
| 04 | Branded   | Hero Split      | Two-column grid: red / dark                      |
| 05 | Branded   | Full Bleed      | Solid red gradient, inverted white CTA           |
| 06 | Branded   | Ribbon Banner   | Wide horizontal banner with left accent stripe   |
| 07 | Creative  | Circular Hub    | Circle shape, radial gradient, centered logo     |
| 08 | Creative  | Stacked Depth   | Layered card stack with offset shadows           |
| 09 | Creative  | Diagonal Split  | clip-path diagonal: red triangle / dark content  |
| 10 | Creative  | Wide Pill        | Horizontal pill, content flows left to right     |

## Getting Started

### Static pages (no build required)

Open `index.html` or `variants.html` directly in a browser.

### React application

```bash
cd sports-homepage
npm install
npm run dev
```

The dev server starts at `http://localhost:5173/`. The showcase displays all 10 widget variations in a horizontal scrollable slider.

## Design Source

All widgets are based on Figma designs:
- [Рекламные виджеты](https://www.figma.com/design/4UEdaroc0glxiLCmtzwbVZ/) — source file

## Tech Stack

- **Static pages**: HTML, CSS, vanilla JS
- **React app**: Vite, React 18, CSS Modules
- **Design tokens**: CSS Custom Properties
- **Assets**: SVG icons, PNG images (exported from Figma)

## Screenshots

Screenshots of the homepage and widgets are generated locally and excluded from the repository via `.gitignore`.
