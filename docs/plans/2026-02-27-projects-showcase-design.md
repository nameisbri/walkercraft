# Projects Showcase Section Design

## Overview

A trust-building image grid showcasing completed Walkercraft projects. Simple, no filtering or categories — just 6 photos proving quality work.

## Component

`src/components/Projects.astro` — inserted between Services and About in `index.astro`.

## Layout

- Dark section (`bg-bark`, grain texture) to maintain dark/light rhythm
- 2 columns on mobile, 3 columns on desktop
- Asymmetric grid: 2 of the 6 images use `grid-row: span 2` for visual variety
- No eyebrow label — just left-aligned serif heading "Our Work"

## Image Cells

- Photos fill grid cells with `object-cover`, `rounded-sm`, `border border-white/10`
- Hover: dark overlay fades in (opacity transition) with one-line caption (e.g., "Custom deck — Ancaster")
- Placeholder divs until real photos are added, styled like About section placeholders

## Page Flow

Hero → Services → **Projects** → About → Contact → Footer
