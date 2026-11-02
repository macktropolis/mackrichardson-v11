# Mack Richardson Website

Personal website and blog at [mackrichardson.com](https://mackrichardson.com),
built with Astro and deployed to Netlify from GitHub's `main` branch.

The desktop UI takes its cues from Mac OS 9. The next iteration adds a
Newton-inspired notebook interface for phones and tablets.

## Development

Use the Node version specified in `.nvmrc` / `.node-version`, then install
dependencies with `npm install`.

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the dev server, normally at `localhost:4321` |
| `npm run dev -- --port 4324` | Start on the port used for the Newton theme review |
| `npm run build` | Run Astro checks, build `dist/`, generate the Pagefind index, and copy the index into `public/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI commands |

Use a production build when checking navigation and styling: development
can inline component styles that production extracts into CSS files.

## Interface modes

| Viewport width | Interface | Navigation |
| :--- | :--- | :--- |
| Up to and including 1024px | Newton-inspired notebook | Normal page navigation and document scrolling |
| Above 1024px | Mac OS 9 desktop | Draggable windows; supported internal links fetch content into windows |

The switch is based on viewport width, not device detection. Narrow desktop
windows also use the notebook interface. Resizing across the breakpoint
returns the current page's content between normal flow and its desktop window.
The independent Holiday Cards archive keeps its Christmas theme.

## Newton mobile theme

**Status:** first implementation on `newton-os-mobile`; review in
progress. Not yet merged into `main` or deployed to production.

This is a Newton-inspired interpretation with modern readability, rather
than an exact recreation of the original operating system:

- Green-gray screen colors, dark ink, monochrome controls, and readable text.
- Home, Journal, About, and Extras in a fixed bottom toolbar, with safe-area
  spacing for devices with a home indicator.
- An Extras dialog containing site shortcuts, contact links, published
  journal categories, and privacy information. It supports a close button,
  Escape, outside-click dismissal, and native modal focus handling.
- Journal lists and article views that scroll with the page, without
  desktop title bars or dragging. Floated article illustrations are stacked
  above text on phones to keep reading columns usable.
- A standalone `/privacy/` page for mobile navigation, sharing the existing
  privacy content.

### Main implementation files

| File | Responsibility |
| :--- | :--- |
| `src/components/NewtonShell.astro` | Notebook header, bottom navigation, Extras drawer, and published category links |
| `src/css/newton/index.css` | Notebook colors, responsive layout, controls, and content overrides |
| `src/components/PixelIcon.astro` | Shared Font Awesome Pixel icon markup |
| `src/components/BaseHead.astro` | Loads the Font Awesome kit |
| `src/components/WindowManager.astro` | Desktop window behavior and transitions between interface modes |
| `src/layouts/Layout.astro` | Includes both desktop and notebook shells |
| `src/pages/privacy.astro` | Standalone privacy route |

### Icons

The Newton interface uses Mack's Font Awesome kit:
`https://kit.fontawesome.com/c2df680238.js`.

Use `PixelIcon` with icon names included in that kit. It renders the
`fa-pixel fa-regular` family and hides decorative icons from assistive
technology; keep visible text or an accessible label on the control itself.
The kit is loaded remotely, so icon delivery depends on Font Awesome and
the kit's configuration. Desktop artwork remains in place.

### Verification and remaining work

The implementation has passed `npm run build` and browser checks of the
phone Home, Journal, article, and Extras views; the tablet About view;
privacy navigation; drawer dismissal and focus return; and breakpoint
transitions back to desktop windows. Category links were also checked
against generated pages. Font Awesome Pixel icons were verified in the
dev preview.

Before release, finish visual review, test real phones and tablets, check
accessibility and representative article formats, and run desktop regression
checks. See [TODO.md](TODO.md) for tracked work and release steps.

