# Walkercraft Landing Page Design

## Overview

Lead-generation landing page for Walkercraft, a local carpentry and handyman business owned by Brett Walker. Based in Hamilton, Ontario, serving the Greater Toronto and Hamilton Area (GTHA).

## Tech Stack

- Astro 5 + Tailwind CSS v4 (`@astrojs/tailwind`)
- No JS frameworks — pure Astro components
- Minimal inline `<script>` for mobile nav toggle and form submission
- Web3Forms for form handling

## File Structure

```
src/
├── layouts/
│   └── Layout.astro
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── About.astro
│   ├── Contact.astro
│   └── Footer.astro
└── pages/
    └── index.astro
```

## Visual Direction

- **Colors**: Dark charcoal (#1a1a2e) + warm amber/gold accent (#d4a843) + white text
- **Typography**: System font stack, bold headings
- **Layout**: Mobile-first, single column on mobile, grid on desktop
- **Flow**: Navbar → Hero → Services → About → Contact → Footer

## Components

### Layout.astro
- Title: "Walkercraft | Custom Carpentry & Handyman Services in Hamilton & GTHA"
- Meta description: "Professional carpentry and home repair services by Brett Walker. Serving Hamilton, Burlington, Oakville, and the GTHA. Get a free estimate today."
- Viewport meta, charset, favicon links
- Slot for page content

### Navbar.astro
- "WALKERCRAFT" logo text on the left
- "Call Now" button on the right
- Hamburger menu on mobile with toggle script

### Hero.astro
- Full-width dark background section
- Headline: "Expert Carpentry & Handyman Services in the GTHA."
- Subheadline: "From custom woodwork to essential home repairs, Walkercraft delivers quality craftsmanship you can trust."
- Two CTA buttons: "Request a Free Quote" (anchor to #contact) and "Call Now: (555) 123-4567" (tel: link)

### Services.astro
- 3-card responsive grid (1 col mobile, 3 col desktop)
- Cards:
  1. Custom Carpentry — Built-ins, trim, shelving
  2. Exterior Work — Decks, fences, repairs
  3. General Handyman — Drywall, fixture installation, maintenance
- Each card has icon placeholder, title, bullet list

### About.astro
- Two-column layout (text + image placeholder) on desktop, stacked on mobile
- Brett Walker's story and dedication to quality
- "Locally owned in Hamilton, Ontario" badge
- Placeholder for photo of Brett and his truck

### Contact.astro
- Centered form card
- Fields: Name, Phone, Email, City (dropdown of service areas), Project description (textarea)
- Web3Forms integration:
  - Hidden `access_key` field with `YOUR_ACCESS_KEY_HERE` placeholder
  - Hidden `subject` field: "New Walkercraft Lead"
  - POST to `https://api.web3forms.com/submit`
  - Inline script for fetch-based submission with success/error feedback

### Footer.astro
- Three columns (stacked on mobile):
  1. Brand name + copyright
  2. Service areas: Hamilton, Burlington, Oakville, Ancaster, Dundas, Stoney Creek
  3. Contact info (phone, email placeholders)
