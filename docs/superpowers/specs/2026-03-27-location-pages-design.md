# Location-Specific Service Pages

## Goal

Create SEO-optimized landing pages for each service area city to strengthen local geo-targeting and reduce irrelevant US traffic. Pages are discoverable via footer links and search engines, not the main nav.

## Pages

6 pages at root-level URLs:

| URL | City |
|-----|------|
| `/hamilton/` | Hamilton |
| `/burlington/` | Burlington |
| `/oakville/` | Oakville |
| `/ancaster/` | Ancaster |
| `/dundas/` | Dundas |
| `/stoney-creek/` | Stoney Creek |

## Page Structure

Each page uses a shared template component with city-specific data.

### Sections (top to bottom)

1. **Navbar** — reuse existing `Navbar.astro`
2. **Location Hero** — city-specific H1 ("Carpentry & Handyman Services in [City]"), short paragraph about serving that city and surrounding area, CTA button linking to `/#contact`
3. **Services** — the 3 existing service categories (Custom Carpentry, Exterior Work, General Handyman) with city name woven into the intro text. Not a full duplicate of the homepage services — a condensed version with a link back to `/#services` for details.
4. **Projects** — 2-3 project images relevant to the city (where tagged), or general GTHA projects for cities without tagged photos. Links to `/#projects` for the full gallery.
5. **CTA Banner** — "Ready to get started?" with phone number and link to `/#contact`
6. **Cross-Links** — "Also serving" section linking to the other 5 location pages
7. **Footer** — reuse existing `Footer.astro`

### Image Mapping (from existing project captions)

| City | Available Tagged Images |
|------|----------------------|
| Hamilton | coffered-ceiling, commercial-arched-windows, front-porch-deck |
| Burlington | wall-panelling, white-wainscoting |
| Ancaster | porch-columns-progress, porch-restoration |
| Dundas | (none) — use: fireplace-surround, display-shelving |
| Stoney Creek | (none) — use: deck-stairs, basement-builtin |
| Oakville | (none) — use: ceiling-trim-renovation, custom-shelf-build |

## City Data

Each city entry contains:
- `slug` — URL slug (e.g., `stoney-creek`)
- `name` — Display name (e.g., `Stoney Creek`)
- `description` — 1-2 sentence intro specific to that city
- `nearbyAreas` — nearby neighborhoods/towns for keyword coverage
- `images` — array of image imports with alt text
- `metaTitle` — page title tag
- `metaDescription` — meta description

## SEO Per Page

- Unique `<title>`: "Carpentry & Handyman Services in [City] | Walkercraft Carpentry"
- Unique `<meta description>` mentioning the city and services
- `<link rel="canonical">` pointing to the page's own URL
- JSON-LD `HomeAndConstructionBusiness` schema with city-specific `areaServed`
- `hreflang="en-CA"` carried over from Layout
- Internal cross-links between all location pages

## Footer Changes

Turn the existing city names in the "Serving" column into `<a>` links pointing to their respective location pages.

## Technical Approach

- **Data file**: `src/data/locations.ts` — all city data in one place
- **Template component**: `src/components/LocationPage.astro` — shared layout for all location pages
- **Page files**: 6 files in `src/pages/` (e.g., `hamilton.astro`) — thin wrappers importing city data and passing to the template
- **Reuses**: existing Layout, Navbar, Footer components
- **No new dependencies**

## Design Style

Match the existing site aesthetic: warm parchment background, bark text, DM Sans/DM Serif Display fonts, Tailwind utility classes. Keep the same professional-but-approachable tone.
