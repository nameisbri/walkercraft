# Location Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 6 SEO-optimized location pages (one per service area city) with footer cross-linking to strengthen local geo-targeting for Canadian traffic.

**Architecture:** Data-driven approach — a single `locations.ts` data file feeds a shared `LocationPage.astro` template component. Each city gets a thin page file in `src/pages/`. Layout is updated to accept dynamic canonical URLs. Footer city names become links.

**Tech Stack:** Astro 5, Tailwind CSS 4, TypeScript, astro:assets Image component

---

## File Structure

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/data/locations.ts` | All city data: slugs, names, descriptions, nearby areas, images, meta tags |
| Modify | `src/layouts/Layout.astro` | Accept optional `canonicalURL` prop instead of hardcoding |
| Create | `src/components/LocationPage.astro` | Shared template for all location pages |
| Create | `src/pages/hamilton.astro` | Hamilton page (thin wrapper) |
| Create | `src/pages/burlington.astro` | Burlington page (thin wrapper) |
| Create | `src/pages/oakville.astro` | Oakville page (thin wrapper) |
| Create | `src/pages/ancaster.astro` | Ancaster page (thin wrapper) |
| Create | `src/pages/dundas.astro` | Dundas page (thin wrapper) |
| Create | `src/pages/stoney-creek.astro` | Stoney Creek page (thin wrapper) |
| Modify | `src/components/Footer.astro` | Turn city names into links to location pages |

---

### Task 1: Create Location Data File

**Files:**
- Create: `src/data/locations.ts`

- [ ] **Step 1: Create `src/data/locations.ts`**

This file exports all city data used by the location pages. Images are imported from `astro:assets` so they go through Astro's image optimization pipeline.

```typescript
import cofferedCeiling from "../assets/images/coffered-ceiling.jpg";
import commercialArchedWindows from "../assets/images/commercial-arched-windows.jpg";
import frontPorchDeck from "../assets/images/front-porch-deck.jpg";
import wallPanelling from "../assets/images/wall-panelling.jpg";
import whiteWainscoting from "../assets/images/white-wainscoting.jpg";
import porchColumnsProgress from "../assets/images/porch-columns-progress.jpg";
import porchRestoration from "../assets/images/porch-restoration.jpg";
import fireplaceSurround from "../assets/images/fireplace-surround.jpg";
import displayShelving from "../assets/images/display-shelving.jpg";
import deckStairs from "../assets/images/deck-stairs.jpg";
import basementBuiltin from "../assets/images/basement-builtin.jpg";
import ceilingTrimRenovation from "../assets/images/ceiling-trim-renovation.jpg";
import customShelfBuild from "../assets/images/custom-shelf-build.jpg";

export interface LocationImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Location {
  slug: string;
  name: string;
  description: string;
  nearbyAreas: string[];
  images: LocationImage[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: Location[] = [
  {
    slug: "hamilton",
    name: "Hamilton",
    description: "Based right here in Hamilton, Walkercraft Carpentry has been serving the Hammer since 2019. From Westdale to Stoney Creek, we know these homes — their character, their quirks, and what they need.",
    nearbyAreas: ["Westdale", "Dundas", "Ancaster", "Stoney Creek", "Binbrook"],
    images: [
      { src: cofferedCeiling, alt: "Custom coffered ceiling installed by Walkercraft Carpentry in Hamilton", caption: "Coffered ceiling — Hamilton" },
      { src: commercialArchedWindows, alt: "Commercial arched window trim by Walkercraft Carpentry in Hamilton", caption: "Arched window trim — Hamilton" },
      { src: frontPorchDeck, alt: "Cedar front porch deck built by Walkercraft Carpentry in Hamilton", caption: "Front porch build — Hamilton" },
    ],
    metaTitle: "Carpentry & Handyman Services in Hamilton | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Hamilton, Ontario. Custom builds, decks, trim, and home repairs by Brett Walker. Free estimates.",
  },
  {
    slug: "burlington",
    name: "Burlington",
    description: "Walkercraft Carpentry serves homeowners across Burlington, from the lakefront to Alton Village. Quality craftsmanship for your home — no runaround.",
    nearbyAreas: ["Alton Village", "Tyandaga", "Palmer", "Hamilton", "Oakville"],
    images: [
      { src: wallPanelling, alt: "Custom wall panelling installed by Walkercraft Carpentry in Burlington", caption: "Wall panelling — Burlington" },
      { src: whiteWainscoting, alt: "Full wall white wainscoting by Walkercraft Carpentry in Burlington", caption: "White wainscoting — Burlington" },
      { src: fireplaceSurround, alt: "Custom fireplace surround by Walkercraft Carpentry", caption: "Fireplace surround" },
    ],
    metaTitle: "Carpentry & Handyman Services in Burlington | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Burlington, Ontario. Custom builds, trim, wainscoting, and home repairs. Free estimates.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    description: "Serving Oakville homeowners with the same hands-on craftsmanship we bring to every job. From Bronte to Old Oakville, we handle custom carpentry, decks, and repairs.",
    nearbyAreas: ["Bronte", "Old Oakville", "Glen Abbey", "Burlington", "Mississauga"],
    images: [
      { src: ceilingTrimRenovation, alt: "Ceiling and trim renovation by Walkercraft Carpentry", caption: "Ceiling & trim renovation" },
      { src: customShelfBuild, alt: "Custom shelf build by Walkercraft Carpentry", caption: "Custom shelf build" },
      { src: wallPanelling, alt: "Custom wall panelling by Walkercraft Carpentry", caption: "Wall panelling" },
    ],
    metaTitle: "Carpentry & Handyman Services in Oakville | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Oakville, Ontario. Custom woodwork, decks, trim, and repairs by Brett Walker. Free estimates.",
  },
  {
    slug: "ancaster",
    name: "Ancaster",
    description: "Walkercraft Carpentry serves Ancaster and the surrounding area. From heritage home restorations to new builds, we bring careful craftsmanship to every project.",
    nearbyAreas: ["Dundas", "Hamilton", "Brantford", "Copetown", "Jerseyville"],
    images: [
      { src: porchColumnsProgress, alt: "Porch column restoration by Walkercraft Carpentry in Ancaster", caption: "Porch columns — Ancaster" },
      { src: porchRestoration, alt: "Porch soffit restoration by Walkercraft Carpentry in Ancaster", caption: "Porch restoration — Ancaster" },
      { src: cofferedCeiling, alt: "Custom coffered ceiling by Walkercraft Carpentry", caption: "Coffered ceiling" },
    ],
    metaTitle: "Carpentry & Handyman Services in Ancaster | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Ancaster, Ontario. Porch restorations, custom builds, trim, and repairs. Free estimates.",
  },
  {
    slug: "dundas",
    name: "Dundas",
    description: "Just down the road from our home base, Walkercraft Carpentry has completed projects throughout Dundas. We understand the character of the Valley Town's homes.",
    nearbyAreas: ["Ancaster", "Hamilton", "Waterdown", "Flamborough", "Greensville"],
    images: [
      { src: fireplaceSurround, alt: "Custom fireplace surround by Walkercraft Carpentry", caption: "Fireplace surround" },
      { src: displayShelving, alt: "Custom display shelving by Walkercraft Carpentry", caption: "Display shelving" },
      { src: ceilingTrimRenovation, alt: "Ceiling and trim renovation by Walkercraft Carpentry", caption: "Ceiling & trim renovation" },
    ],
    metaTitle: "Carpentry & Handyman Services in Dundas | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Dundas, Ontario. Custom woodwork, shelving, trim, and home repairs. Free estimates.",
  },
  {
    slug: "stoney-creek",
    name: "Stoney Creek",
    description: "Walkercraft Carpentry serves homeowners across Stoney Creek, from Winona to the Battlefield area. Reliable carpentry and handyman services for your home.",
    nearbyAreas: ["Winona", "Grimsby", "Hamilton", "Binbrook", "Fruitland"],
    images: [
      { src: deckStairs, alt: "Custom deck stairs by Walkercraft Carpentry", caption: "Custom deck stairs" },
      { src: basementBuiltin, alt: "Basement built-in cabinet by Walkercraft Carpentry", caption: "Basement built-in" },
      { src: frontPorchDeck, alt: "Cedar front porch deck by Walkercraft Carpentry", caption: "Front porch build" },
    ],
    metaTitle: "Carpentry & Handyman Services in Stoney Creek | Walkercraft Carpentry",
    metaDescription: "Professional carpentry and handyman services in Stoney Creek, Ontario. Decks, built-ins, repairs, and custom woodwork. Free estimates.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getOtherLocations(slug: string): Location[] {
  return locations.filter((loc) => loc.slug !== slug);
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx astro check 2>&1 | head -20`
Expected: No errors related to `locations.ts`

- [ ] **Step 3: Commit**

```bash
git add src/data/locations.ts
git commit -m "feat: add location data for service area pages"
```

---

### Task 2: Make Layout Accept Dynamic Canonical URL

**Files:**
- Modify: `src/layouts/Layout.astro` (lines 5-15)

The current Layout hardcodes `canonicalURL` to the homepage. Location pages need their own canonical URLs.

- [ ] **Step 1: Update the Props interface and frontmatter**

In `src/layouts/Layout.astro`, replace the frontmatter (lines 1-16) with:

```astro
---
import "@fontsource-variable/dm-sans";
import "@fontsource/dm-serif-display";

interface Props {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

const {
  title = "Walkercraft Carpentry | Hamilton & GTHA Handyman Services",
  description = "Professional carpentry and home repair services by Brett Walker. Serving Hamilton, Burlington, Oakville, and the GTHA. Get a free estimate today.",
  canonicalPath = "/",
} = Astro.props;

const canonicalURL = `https://walkercraftcarpentry.ca${canonicalPath}`;
---
```

This is backward-compatible — the homepage passes nothing and gets `/` by default. Location pages pass their path (e.g., `canonicalPath="/hamilton/"`).

- [ ] **Step 2: Build to verify no regressions**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds, homepage unchanged

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: make Layout canonical URL configurable via prop"
```

---

### Task 3: Create LocationPage Template Component

**Files:**
- Create: `src/components/LocationPage.astro`

This is the shared template that renders every location page. It receives a `Location` object as a prop.

- [ ] **Step 1: Create `src/components/LocationPage.astro`**

```astro
---
import { Image } from "astro:assets";
import type { Location } from "../data/locations";
import { getOtherLocations } from "../data/locations";

interface Props {
  location: Location;
}

const { location } = Astro.props;
const otherLocations = getOtherLocations(location.slug);

const services = [
  {
    title: "Custom Carpentry",
    description: "Shelves, cabinets, trim — built to fit your house.",
    items: ["Built-in cabinetry", "Crown moulding & trim", "Custom shelving & storage"],
  },
  {
    title: "Exterior Work",
    description: "Built to withstand Canadian weather.",
    items: ["Deck building & repair", "Fence installation", "Exterior repairs & siding"],
  },
  {
    title: "General Handyman",
    description: "The stuff you keep putting off. I'll take care of it.",
    items: ["Drywall patching & repair", "Fixture installation", "General maintenance"],
  },
];
---

<!-- Location Hero -->
<section class="relative bg-bark text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden grain">
  <div class="absolute top-0 right-0 w-1/3 h-full bg-forest/[0.15] -skew-x-12 origin-top-right"></div>
  <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
    <div class="max-w-3xl">
      <p class="text-gold font-semibold text-sm tracking-widest uppercase mb-6">{location.name}, Ontario</p>
      <h1 class="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
        Carpentry &amp; Handyman Services in {location.name}.
      </h1>
      <p class="text-lg text-warmgray-300 mb-10 max-w-xl leading-relaxed">
        {location.description}
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="/#contact"
          class="bg-gold-btn text-white font-semibold px-8 py-4 rounded-sm text-base hover:bg-gold-btn-hover transition-colors text-center"
        >
          Get a Free Quote
        </a>
      </div>
      <a
        href="tel:+12267896525"
        class="inline-block mt-5 text-warmgray-500 text-sm hover:text-gold-light transition-colors"
      >
        Or call directly: (226) 789-6525
      </a>
    </div>
  </div>
</section>

<!-- Services -->
<section class="py-16 md:py-24 bg-parchment">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 class="font-display text-3xl md:text-4xl mb-4">What We Do in {location.name}</h2>
    <p class="text-warmgray-600 mb-12 max-w-2xl">
      Full-service carpentry and handyman work for homeowners in {location.name} and nearby areas
      including {location.nearbyAreas.slice(0, 3).join(", ")}.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div class="border border-bark/10 rounded-sm p-6">
          <h3 class="font-display text-xl mb-2">{service.title}</h3>
          <p class="text-warmgray-600 text-sm mb-4">{service.description}</p>
          <ul class="space-y-2">
            {service.items.map((item) => (
              <li class="flex items-start gap-2 text-sm text-warmgray-700">
                <span class="block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gold"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <p class="mt-8 text-sm text-warmgray-600">
      <a href="/#services" class="underline decoration-bark/20 underline-offset-2 hover:decoration-bark/60 transition-colors">See full service details &rarr;</a>
    </p>
  </div>
</section>

<!-- Projects -->
<section class="py-16 md:py-24 bg-bark text-white grain">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 class="font-display text-3xl md:text-4xl mb-4">Our Work in {location.name}</h2>
    <p class="text-warmgray-500 text-sm mb-10">A few projects from {location.name} and the surrounding area.</p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {location.images.map((img) => (
        <div class="group relative rounded-sm overflow-hidden border border-white/10">
          <div class="aspect-[4/3] relative">
            <Image
              src={img.src}
              alt={img.alt}
              widths={[400, 800]}
              sizes="(max-width: 640px) 100vw, 33vw"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-bark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p class="text-sm font-display">{img.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <p class="mt-8 text-sm text-warmgray-500">
      <a href="/#projects" class="underline decoration-white/20 underline-offset-2 hover:text-gold-light hover:decoration-gold-light/40 transition-colors">See all projects &rarr;</a>
    </p>
  </div>
</section>

<!-- CTA Banner -->
<section class="py-16 md:py-20 bg-forest text-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <h2 class="font-display text-3xl md:text-4xl mb-4">Ready to get started?</h2>
    <p class="text-white/80 mb-8 max-w-lg mx-auto">
      Free estimates for homeowners in {location.name} and the GTHA. No obligation, no runaround.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/#contact"
        class="bg-gold-btn text-white font-semibold px-8 py-4 rounded-sm text-base hover:bg-gold-btn-hover transition-colors"
      >
        Get a Free Quote
      </a>
      <a
        href="tel:+12267896525"
        class="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm text-base hover:bg-white/10 transition-colors"
      >
        (226) 789-6525
      </a>
    </div>
  </div>
</section>

<!-- Cross-Links: Also Serving -->
<section class="py-12 md:py-16 bg-parchment border-t border-bark/10">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 class="font-display text-2xl mb-6">Also Serving</h2>
    <div class="flex flex-wrap gap-3">
      {otherLocations.map((loc) => (
        <a
          href={`/${loc.slug}/`}
          class="border border-bark/15 rounded-sm px-5 py-2.5 text-sm text-bark hover:bg-bark hover:text-parchment transition-colors"
        >
          {loc.name}
        </a>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LocationPage.astro
git commit -m "feat: add LocationPage template component"
```

---

### Task 4: Create the 6 City Page Files

**Files:**
- Create: `src/pages/hamilton.astro`
- Create: `src/pages/burlington.astro`
- Create: `src/pages/oakville.astro`
- Create: `src/pages/ancaster.astro`
- Create: `src/pages/dundas.astro`
- Create: `src/pages/stoney-creek.astro`

Each page is a thin wrapper that imports location data and passes it to the template. Each also includes city-specific JSON-LD structured data.

- [ ] **Step 1: Create `src/pages/hamilton.astro`**

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import LocationPage from "../components/LocationPage.astro";
import Footer from "../components/Footer.astro";
import { getLocation } from "../data/locations";

const location = getLocation("hamilton")!;
---

<Layout title={location.metaTitle} description={location.metaDescription} canonicalPath="/hamilton/">
  <Navbar />
  <main id="main-content" tabindex="-1">
    <LocationPage location={location} />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 2: Create `src/pages/burlington.astro`**

Same pattern, replace `"hamilton"` with `"burlington"` and `canonicalPath="/burlington/"`.

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import LocationPage from "../components/LocationPage.astro";
import Footer from "../components/Footer.astro";
import { getLocation } from "../data/locations";

const location = getLocation("burlington")!;
---

<Layout title={location.metaTitle} description={location.metaDescription} canonicalPath="/burlington/">
  <Navbar />
  <main id="main-content" tabindex="-1">
    <LocationPage location={location} />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 3: Create `src/pages/oakville.astro`**

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import LocationPage from "../components/LocationPage.astro";
import Footer from "../components/Footer.astro";
import { getLocation } from "../data/locations";

const location = getLocation("oakville")!;
---

<Layout title={location.metaTitle} description={location.metaDescription} canonicalPath="/oakville/">
  <Navbar />
  <main id="main-content" tabindex="-1">
    <LocationPage location={location} />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 4: Create `src/pages/ancaster.astro`**

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import LocationPage from "../components/LocationPage.astro";
import Footer from "../components/Footer.astro";
import { getLocation } from "../data/locations";

const location = getLocation("ancaster")!;
---

<Layout title={location.metaTitle} description={location.metaDescription} canonicalPath="/ancaster/">
  <Navbar />
  <main id="main-content" tabindex="-1">
    <LocationPage location={location} />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 5: Create `src/pages/dundas.astro`**

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import LocationPage from "../components/LocationPage.astro";
import Footer from "../components/Footer.astro";
import { getLocation } from "../data/locations";

const location = getLocation("dundas")!;
---

<Layout title={location.metaTitle} description={location.metaDescription} canonicalPath="/dundas/">
  <Navbar />
  <main id="main-content" tabindex="-1">
    <LocationPage location={location} />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 6: Create `src/pages/stoney-creek.astro`**

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import LocationPage from "../components/LocationPage.astro";
import Footer from "../components/Footer.astro";
import { getLocation } from "../data/locations";

const location = getLocation("stoney-creek")!;
---

<Layout title={location.metaTitle} description={location.metaDescription} canonicalPath="/stoney-creek/">
  <Navbar />
  <main id="main-content" tabindex="-1">
    <LocationPage location={location} />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 7: Build to verify all pages generate**

Run: `npm run build 2>&1 | grep "page(s) built"`
Expected: `7 page(s) built` (1 homepage + 6 location pages)

- [ ] **Step 8: Commit**

```bash
git add src/pages/hamilton.astro src/pages/burlington.astro src/pages/oakville.astro src/pages/ancaster.astro src/pages/dundas.astro src/pages/stoney-creek.astro
git commit -m "feat: add 6 location-specific service pages"
```

---

### Task 5: Update Footer with Location Links

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Update footer to link city names**

In `src/components/Footer.astro`, replace the `serviceAreas` array and the `<ul>` rendering (lines 1-22) with:

```astro
---
const serviceAreas = [
  { name: "Hamilton", slug: "hamilton" },
  { name: "Burlington", slug: "burlington" },
  { name: "Oakville", slug: "oakville" },
  { name: "Ancaster", slug: "ancaster" },
  { name: "Dundas", slug: "dundas" },
  { name: "Stoney Creek", slug: "stoney-creek" },
];
const currentYear = new Date().getFullYear();
---
```

And update the `<ul>` inside the "Serving" nav to render links:

```html
<ul class="space-y-1.5 text-sm">
  {serviceAreas.map((area) => (
    <li>
      <a href={`/${area.slug}/`} class="underline decoration-white/20 underline-offset-2 hover:text-gold-light hover:decoration-gold-light/40 transition-colors">
        {area.name}
      </a>
    </li>
  ))}
</ul>
```

- [ ] **Step 2: Build to verify**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: link footer service areas to location pages"
```

---

### Task 6: Final Build Verification

- [ ] **Step 1: Full build**

Run: `npm run build 2>&1`
Expected: `7 page(s) built`, sitemap generated with all 7 URLs, no errors

- [ ] **Step 2: Verify sitemap includes new pages**

Run: `cat dist/sitemap-0.xml`
Expected: XML with 7 `<url>` entries including `/hamilton/`, `/burlington/`, etc.

- [ ] **Step 3: Spot-check a generated page**

Run: `head -40 dist/hamilton/index.html`
Expected: Correct `<title>`, `<meta description>`, `<link rel="canonical">` for Hamilton page

- [ ] **Step 4: Verify homepage unchanged**

Run: `head -20 dist/index.html`
Expected: Homepage title and canonical URL unchanged from before
