# SEO Action Plan — Walkercraft Carpentry

**Current Score: 29/100 (Critical)**
**Target Score: 70+ (Good)**

---

## Phase 1 — Immediate Blockers (do this week)

### 1. Add canonical URL tag
**Impact:** Critical | **Effort:** 5 min
```html
<!-- In Layout.astro <head> -->
<link rel="canonical" href="https://www.walkercraftcarpentry.ca/" />
```

### 2. Create robots.txt
**Impact:** Critical | **Effort:** 5 min
```
// Create public/robots.txt
User-agent: *
Allow: /

Sitemap: https://www.walkercraftcarpentry.ca/sitemap.xml
```

### 3. Add sitemap.xml
**Impact:** Critical | **Effort:** 10 min
```bash
npx astro add sitemap
```
Then set `site: 'https://www.walkercraftcarpentry.ca'` in `astro.config.mjs`.

### 4. Add og:url meta tag
**Impact:** Warning | **Effort:** 2 min
```html
<meta property="og:url" content="https://www.walkercraftcarpentry.ca/" />
```

### 5. Shorten title tag
**Impact:** Warning | **Effort:** 2 min
Current (79 chars): `Walkercraft Carpentry | Custom Carpentry & Handyman Services in Hamilton & GTHA`
Suggested (~56 chars): `Walkercraft Carpentry | Hamilton & GTHA Handyman Services`

### 6. Fix redirect: 307 → 301
**Impact:** Warning | **Effort:** 10 min
Change the bare domain → www redirect from temporary (307) to permanent (301) in your hosting provider's settings (Netlify/Vercel/Cloudflare).

---

## Phase 2 — Quick Wins (this month)

### 7. Add LocalBusiness JSON-LD schema
**Impact:** Critical | **Effort:** 30 min
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Walkercraft Carpentry",
  "description": "Professional carpentry and handyman services in Hamilton and the GTHA.",
  "url": "https://www.walkercraftcarpentry.ca",
  "telephone": "+1-226-789-6525",
  "email": "info@walkercraftcarpentry.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hamilton",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": [
    {"@type": "City", "name": "Hamilton"},
    {"@type": "City", "name": "Burlington"},
    {"@type": "City", "name": "Oakville"},
    {"@type": "City", "name": "Ancaster"},
    {"@type": "City", "name": "Dundas"},
    {"@type": "City", "name": "Stoney Creek"}
  ],
  "founder": {
    "@type": "Person",
    "name": "Brett Walker"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 07:00-18:00",
  "sameAs": []
}
</script>
```

### 8. Add WebSite schema with SearchAction
**Impact:** Warning | **Effort:** 10 min
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Walkercraft Carpentry",
  "url": "https://www.walkercraftcarpentry.ca"
}
</script>
```

### 9. Replace placeholder images with real photos
**Impact:** Critical | **Effort:** 2-4 hours
- Replace "Photo of Brett" placeholder with actual headshot
- Replace "Photo of truck" placeholder with branded truck photo
- Replace all 6 project placeholders with real project photos
- Use descriptive alt text: `alt="Custom built-in shelving installed in Hamilton home by Walkercraft Carpentry"`
- Optimize images: WebP format, max 200KB each, serve responsive sizes

### 10. Create OG image for social sharing
**Impact:** Warning | **Effort:** 30 min
- Create a 1200x630px branded image (logo + tagline + photo)
- Save as `public/og-image.jpg`
- Add `<meta property="og:image" content="https://www.walkercraftcarpentry.ca/og-image.jpg" />`

### 11. Add Twitter Card meta tags
**Impact:** Warning | **Effort:** 5 min
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Walkercraft Carpentry | Hamilton & GTHA" />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="https://www.walkercraftcarpentry.ca/og-image.jpg" />
```

---

## Phase 3 — Strategic Improvements (next 1-3 months)

### 12. Expand homepage content to 800+ words
**Impact:** Warning | **Effort:** 2-3 hours
- Expand service descriptions with specific details (materials, process, timelines)
- Add a "Why Choose Walkercraft" section with differentiators
- Add an FAQ section (5-8 common questions about carpentry/handyman services in Hamilton)
- Note: Do NOT use FAQPage schema (restricted to gov/health only) — just add the content

### 13. Add 3-5 real customer testimonials
**Impact:** Warning | **Effort:** 1-2 hours
- Get written permission from past clients
- Include full name, city, and project type
- Consider adding star ratings (use Review schema within LocalBusiness)

### 14. Set up Google Business Profile
**Impact:** Critical | **Effort:** 1 hour
- Create/claim GBP listing at business.google.com
- Add photos, services, hours, service area
- Link to website
- Request reviews from past clients

### 15. Add security headers
**Impact:** Warning (indirect) | **Effort:** 30 min
Add to hosting config (Netlify `_headers` / Vercel `vercel.json`):
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://api.web3forms.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src https://api.web3forms.com
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 16. Create llms.txt for AI search readiness
**Impact:** Low | **Effort:** 10 min
```
// Create public/llms.txt
# Walkercraft Carpentry

> Professional carpentry and handyman services serving Hamilton, Burlington, Oakville, and the GTHA.

## Services
- Custom Carpentry: shelves, cabinets, crown moulding, trim
- Exterior Work: decks, fences, siding, exterior repairs
- General Handyman: drywall, fixtures, maintenance

## Contact
- Phone: (226) 789-6525
- Email: info@walkercraftcarpentry.ca
- Website: https://www.walkercraftcarpentry.ca

## Service Area
Hamilton, Burlington, Oakville, Ancaster, Dundas, Stoney Creek
```

### 17. Consider adding service-area or blog pages
**Impact:** Strategic | **Effort:** Ongoing
- Create individual pages for top service areas (Hamilton, Burlington, Oakville)
- Start a blog with project case studies ("Deck Build in Ancaster — Before & After")
- This builds internal links, targets long-tail keywords, and demonstrates E-E-A-T

---

## Estimated Impact

| Phase | Items | Est. Score After |
|-------|-------|-----------------|
| Phase 1 (blockers) | #1-6 | ~42 |
| Phase 2 (quick wins) | #7-11 | ~62 |
| Phase 3 (strategic) | #12-17 | ~75+ |

---

## Verification Checklist

After implementing fixes, verify with:
- [ ] Google Search Console — submit sitemap, check index coverage
- [ ] Google Rich Results Test — validate JSON-LD schema
- [ ] PageSpeed Insights — confirm CWV scores
- [ ] Facebook Sharing Debugger — verify OG tags render correctly
- [ ] Twitter Card Validator — verify Twitter preview
- [ ] Mobile-Friendly Test — confirm responsive layout
