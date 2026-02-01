# Design System

## Color Palette

The color system is defined in `src/index.css` using CSS variables.

| Variable | Hex | Usage |
| :--- | :--- | :--- |
| `--color-bg` | `#452b1f` | Main background (Deep Brown) |
| `--color-accent` | `#fff3db` | Accents & highlights (Cream) |
| `--color-text-main` | `#ffffff` | Primary text |
| `--color-text-dark` | `#452b1f` | Text on light backgrounds |
| `--color-service-bg` | `#2c2c2c` | Secondary sections (Dark Gray) |

## Typography

Fonts are loaded via Google Fonts.

| Type | Family | CSS Variable |
| :--- | :--- | :--- |
| **Headings** | 'Playfair Display', serif | `--font-heading` |
| **Body** | 'Manrope', 'Inter', sans-serif | `--font-body` |

## Spacing & Layout

- **Container Width**: `1440px` (Max width for large screens)
- **Padding**: `2rem` (Horizontal padding for containers)
- **Scrollbar**: Custom "no-scrollbar" utility for clean aesthetics.
