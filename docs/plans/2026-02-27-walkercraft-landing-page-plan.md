# Walkercraft Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a lead-generation landing page for Walkercraft with 6 sections, Tailwind styling, and Web3Forms integration.

**Architecture:** Astro 5 static site with Tailwind CSS v4 via Vite plugin. Pure Astro components (no JS framework). Layout wraps all pages. Components compose into index.astro.

**Tech Stack:** Astro 5, Tailwind CSS v4 (`@tailwindcss/vite`), Web3Forms

---

### Task 1: Install Tailwind CSS v4 and configure Astro

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `astro.config.mjs`
- Create: `src/styles/global.css`

**Step 1: Install Tailwind CSS v4 and the Vite plugin**

Run: `npm install tailwindcss @tailwindcss/vite`

**Step 2: Update astro.config.mjs to add the Tailwind Vite plugin**

```js
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**Step 3: Create the global CSS file**

Create `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  --color-charcoal: #1a1a2e;
  --color-charcoal-light: #2a2a4a;
  --color-amber: #d4a843;
  --color-amber-dark: #b8922e;
  --color-cream: #f5f0e8;
}
```

**Step 4: Verify Tailwind works**

Run: `npm run dev`
Expected: Dev server starts without errors on http://localhost:4321

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: add Tailwind CSS v4 with custom color theme"
```

---

### Task 2: Create Layout.astro

**Files:**
- Create: `src/layouts/Layout.astro`

**Step 1: Create the layout file**

Create `src/layouts/Layout.astro`:

```astro
---
interface Props {
  title?: string;
  description?: string;
}

const {
  title = "Walkercraft | Custom Carpentry & Handyman Services in Hamilton & GTHA",
  description = "Professional carpentry and home repair services by Brett Walker. Serving Hamilton, Burlington, Oakville, and the GTHA. Get a free estimate today.",
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body class="bg-cream text-charcoal font-sans antialiased">
    <slot />
  </body>
</html>

<style is:global>
  @import "../styles/global.css";
</style>
```

**Step 2: Commit**

```bash
git add src/layouts/Layout.astro && git commit -m "feat: add Layout.astro with SEO meta tags"
```

---

### Task 3: Create Navbar.astro

**Files:**
- Create: `src/components/Navbar.astro`

**Step 1: Create the navbar component**

Create `src/components/Navbar.astro`:

```astro
---

---

<nav class="bg-charcoal text-white fixed w-full top-0 z-50">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="/" class="text-2xl font-bold tracking-wider text-amber">WALKERCRAFT</a>

    <a
      href="tel:+15551234567"
      class="hidden md:inline-flex items-center gap-2 bg-amber text-charcoal font-semibold px-5 py-2 rounded hover:bg-amber-dark transition-colors"
    >
      Call Now: (555) 123-4567
    </a>

    <button
      id="menu-toggle"
      class="md:hidden text-white focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <div id="mobile-menu" class="hidden md:hidden bg-charcoal-light px-4 pb-4">
    <a href="#services" class="block py-2 text-gray-300 hover:text-amber">Services</a>
    <a href="#about" class="block py-2 text-gray-300 hover:text-amber">About</a>
    <a href="#contact" class="block py-2 text-gray-300 hover:text-amber">Contact</a>
    <a
      href="tel:+15551234567"
      class="block mt-2 text-center bg-amber text-charcoal font-semibold px-5 py-2 rounded hover:bg-amber-dark transition-colors"
    >
      Call Now: (555) 123-4567
    </a>
  </div>
</nav>

<script>
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('hidden');
  });
</script>
```

**Step 2: Commit**

```bash
git add src/components/Navbar.astro && git commit -m "feat: add Navbar with mobile hamburger menu"
```

---

### Task 4: Create Hero.astro

**Files:**
- Create: `src/components/Hero.astro`

**Step 1: Create the hero component**

Create `src/components/Hero.astro`:

```astro
---

---

<section class="bg-charcoal text-white pt-28 pb-20 md:pt-36 md:pb-28">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      Expert Carpentry &amp; Handyman Services in the GTHA.
    </h1>
    <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
      From custom woodwork to essential home repairs, Walkercraft delivers quality craftsmanship you can trust.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#contact"
        class="bg-amber text-charcoal font-bold px-8 py-4 rounded text-lg hover:bg-amber-dark transition-colors"
      >
        Request a Free Quote
      </a>
      <a
        href="tel:+15551234567"
        class="border-2 border-amber text-amber font-bold px-8 py-4 rounded text-lg hover:bg-amber hover:text-charcoal transition-colors"
      >
        Call Now: (555) 123-4567
      </a>
    </div>
  </div>
</section>
```

**Step 2: Commit**

```bash
git add src/components/Hero.astro && git commit -m "feat: add Hero section with CTA buttons"
```

---

### Task 5: Create Services.astro

**Files:**
- Create: `src/components/Services.astro`

**Step 1: Create the services component**

Create `src/components/Services.astro`:

```astro
---
const services = [
  {
    title: "Custom Carpentry",
    description: "Precision woodwork tailored to your space.",
    items: ["Built-in cabinetry", "Crown moulding & trim", "Custom shelving & storage"],
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
  },
  {
    title: "Exterior Work",
    description: "Built to withstand Canadian weather.",
    items: ["Deck building & repair", "Fence installation", "Exterior repairs & siding"],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "General Handyman",
    description: "No job too small. Get it done right.",
    items: ["Drywall patching & repair", "Fixture installation", "General maintenance"],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];
---

<section id="services" class="py-16 md:py-24 bg-cream">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">What We Do</h2>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Quality craftsmanship across every project, big or small.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div class="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={service.icon} />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">{service.title}</h3>
          <p class="text-gray-600 mb-4">{service.description}</p>
          <ul class="space-y-2">
            {service.items.map((item) => (
              <li class="flex items-start gap-2 text-gray-700">
                <svg class="w-5 h-5 text-amber mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Commit**

```bash
git add src/components/Services.astro && git commit -m "feat: add Services section with 3-card grid"
```

---

### Task 6: Create About.astro

**Files:**
- Create: `src/components/About.astro`

**Step 1: Create the about component**

Create `src/components/About.astro`:

```astro
---

---

<section id="about" class="py-16 md:py-24 bg-charcoal text-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Meet Brett Walker</h2>
        <p class="text-gray-300 text-lg mb-4">
          With years of hands-on experience in carpentry and home repair, Brett Walker founded Walkercraft with a simple mission: deliver honest work and quality results for every client.
        </p>
        <p class="text-gray-300 text-lg mb-6">
          Whether it's a custom built-in for your living room or a deck that stands up to Ontario winters, Brett brings the same attention to detail to every job.
        </p>
        <div class="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 text-amber px-4 py-2 rounded-full text-sm font-semibold">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Locally owned in Hamilton, Ontario
        </div>
      </div>

      <div class="space-y-4">
        <!-- Placeholder: Replace with photo of Brett -->
        <div class="bg-charcoal-light rounded-lg aspect-[4/3] flex items-center justify-center border border-gray-700">
          <div class="text-center text-gray-500">
            <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p class="text-sm">Photo of Brett</p>
          </div>
        </div>
        <!-- Placeholder: Replace with photo of truck -->
        <div class="bg-charcoal-light rounded-lg aspect-[16/9] flex items-center justify-center border border-gray-700">
          <div class="text-center text-gray-500">
            <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 17h8M8 17v-4m8 4v-4m-8 0h8m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4m4 0h1a1 1 0 011 1v2a1 1 0 01-1 1h-1m-16 0H3a1 1 0 01-1-1v-2a1 1 0 011-1h1" />
            </svg>
            <p class="text-sm">Photo of truck</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Commit**

```bash
git add src/components/About.astro && git commit -m "feat: add About section with image placeholders"
```

---

### Task 7: Create Contact.astro

**Files:**
- Create: `src/components/Contact.astro`

**Step 1: Create the contact form component**

Create `src/components/Contact.astro`:

```astro
---
const cities = ["Hamilton", "Burlington", "Oakville", "Ancaster", "Dundas", "Stoney Creek", "Other"];
---

<section id="contact" class="py-16 md:py-24 bg-cream">
  <div class="max-w-2xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Get a Free Estimate</h2>
    <p class="text-center text-gray-600 mb-10">
      Tell us about your project and we'll get back to you within 24 hours.
    </p>

    <form id="contact-form" class="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-5">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <input type="hidden" name="subject" value="New Walkercraft Lead" />

      <div>
        <label for="name" class="block text-sm font-semibold mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label for="phone" class="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            class="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label for="city" class="block text-sm font-semibold mb-1">City</label>
        <select
          id="city"
          name="city"
          required
          class="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent bg-white"
        >
          <option value="" disabled selected>Select your city</option>
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <label for="message" class="block text-sm font-semibold mb-1">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          class="w-full border border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent resize-y"
          placeholder="Describe what you need help with..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-amber text-charcoal font-bold px-6 py-4 rounded text-lg hover:bg-amber-dark transition-colors"
      >
        Send My Request
      </button>

      <div id="form-status" class="hidden text-center py-3 rounded font-semibold"></div>
    </form>
  </div>
</section>

<script>
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const status = document.getElementById('form-status')!;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      });
      const data = await response.json();

      if (data.success) {
        status.textContent = 'Thanks! We\'ll be in touch within 24 hours.';
        status.className = 'text-center py-3 rounded font-semibold bg-green-100 text-green-800';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      status.textContent = 'Something went wrong. Please call us instead.';
      status.className = 'text-center py-3 rounded font-semibold bg-red-100 text-red-800';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send My Request';
    }
  });
</script>
```

**Step 2: Commit**

```bash
git add src/components/Contact.astro && git commit -m "feat: add Contact form with Web3Forms integration"
```

---

### Task 8: Create Footer.astro

**Files:**
- Create: `src/components/Footer.astro`

**Step 1: Create the footer component**

Create `src/components/Footer.astro`:

```astro
---
const serviceAreas = ["Hamilton", "Burlington", "Oakville", "Ancaster", "Dundas", "Stoney Creek"];
const currentYear = new Date().getFullYear();
---

<footer class="bg-charcoal text-gray-400 py-12">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <p class="text-2xl font-bold text-amber mb-2">WALKERCRAFT</p>
        <p class="text-sm">Custom carpentry &amp; handyman services for the GTHA.</p>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-3">Service Areas</h3>
        <ul class="space-y-1 text-sm">
          {serviceAreas.map((area) => (
            <li>{area}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-3">Contact</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="tel:+15551234567" class="hover:text-amber transition-colors">(555) 123-4567</a>
          </li>
          <li>
            <a href="mailto:brett@walkercraft.ca" class="hover:text-amber transition-colors">brett@walkercraft.ca</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
      <p>&copy; {currentYear} Walkercraft. All rights reserved.</p>
    </div>
  </div>
</footer>
```

**Step 2: Commit**

```bash
git add src/components/Footer.astro && git commit -m "feat: add Footer with service areas and contact info"
```

---

### Task 9: Wire everything into index.astro

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Replace index.astro with the composed page**

Replace the entire content of `src/pages/index.astro`:

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/Navbar.astro";
import Hero from "../components/Hero.astro";
import Services from "../components/Services.astro";
import About from "../components/About.astro";
import Contact from "../components/Contact.astro";
import Footer from "../components/Footer.astro";
---

<Layout>
  <Navbar />
  <main>
    <Hero />
    <Services />
    <About />
    <Contact />
  </main>
  <Footer />
</Layout>
```

**Step 2: Verify the full page works**

Run: `npm run dev`
Expected: All sections render correctly at http://localhost:4321

**Step 3: Run production build to verify**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 4: Commit**

```bash
git add src/pages/index.astro && git commit -m "feat: compose landing page from all components"
```
