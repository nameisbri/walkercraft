# SEO Audit Report — Walkercraft Carpentry

**URL:** https://walkercraftcarpentry.ca
**Scope:** Single-page full audit
**Date:** 2026-03-07
**Overall Score: 29/100 — Critical**

## Top 3 Issues
1. **No structured data (JSON-LD)** — Zero schema markup. LocalBusiness schema is essential for a local service business to appear in Google's local pack and rich results.
2. **No real images** — All project photos and headshots are placeholder divs. A carpentry portfolio with no actual photos cannot rank for image search or convert visitors.
3. **No canonical URL** — Combined with the 307 redirect (bare → www), search engines may index duplicate versions of the site.

## Top 3 Opportunities
1. Add LocalBusiness + Service JSON-LD schema — immediate eligibility for local pack and rich results.
2. Add real project photos with descriptive alt text — unlocks image search traffic and dramatically improves conversion.
3. Create a robots.txt + sitemap.xml + canonical tag — foundational crawl/index hygiene that takes 15 minutes.

---

## Findings Table

| # | Area | Severity | Confidence | Finding | Evidence | Fix |
|---|------|----------|------------|---------|----------|-----|
| 1 | Schema | Critical | Confirmed | No JSON-LD structured data | `parse_html: "schema": []` | Add LocalBusiness, Organization, and WebSite JSON-LD to `<head>` |
| 2 | Images | Critical | Confirmed | No actual images on site — all placeholders | HTML shows `<div>` placeholders like "Photo of Brett", "Photo of truck" | Replace all placeholder divs with real `<img>` tags with descriptive alt text |
| 3 | Technical | Critical | Confirmed | No canonical URL tag | `parse_html: "canonical": null` | Add `<link rel="canonical" href="https://www.walkercraftcarpentry.ca/" />` |
| 4 | Technical | Critical | Confirmed | No robots.txt | `robots_checker: Status: 404` | Create `public/robots.txt` with `User-agent: *`, `Allow: /`, and `Sitemap:` directive |
| 5 | Technical | Critical | Confirmed | No sitemap.xml | WebFetch returned 404 for `/sitemap.xml` | Add `@astrojs/sitemap` integration or create `public/sitemap.xml` manually |
| 6 | Social | Warning | Confirmed | Missing og:image — no social preview image | `social_meta: og:image: missing (required)` | Create a 1200x630 OG image and add `<meta property="og:image">` |
| 7 | Social | Warning | Confirmed | Missing og:url | `social_meta: og:url: missing (required)` | Add `<meta property="og:url" content="https://www.walkercraftcarpentry.ca/" />` |
| 8 | Social | Warning | Confirmed | No Twitter Card tags | `social_meta: twitter:card: missing` | Add `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| 9 | On-Page | Warning | Confirmed | Title tag too long (79 chars) | `"Walkercraft Carpentry \| Custom Carpentry & Handyman Services in Hamilton & GTHA"` | Shorten to ~55 chars, e.g. `"Walkercraft Carpentry \| Hamilton & GTHA Handyman"` |
| 10 | Technical | Warning | Confirmed | 307 temporary redirect (bare → www) | `redirect_checker: [307] → www` | Change to 301 permanent redirect to consolidate link equity |
| 11 | Content | Warning | Confirmed | Thin content — only 322 words | `parse_html: "word_count": 322` | Expand service descriptions, add FAQ section, aim for 800+ words on homepage |
| 12 | Content | Warning | Confirmed | Only 1 testimonial | Single blockquote in Trust component | Add 3-5 real customer testimonials with full names and locations |
| 13 | Content | Warning | Confirmed | Difficult readability (Flesch: 41.9) | `readability: "flesch_reading_ease": 41.9, grade 12.6` | Simplify complex sentences, break into shorter paragraphs |
| 14 | Technical | Warning | Confirmed | Missing security headers (5 of 6) | `security_headers: Score 45/100` | Add CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy via hosting config |
| 15 | Links | Warning | Confirmed | Zero internal links | `internal_links: Total internal links: 0` (anchor links don't count as internal links for SEO) | Consider adding service-area pages or a blog for internal linking |
| 16 | GEO | Warning | Confirmed | No llms.txt | `llms_txt_checker: Status: 404` | Create `public/llms.txt` with business name, services, and service area |
| 17 | On-Page | Pass | Confirmed | Proper heading hierarchy | H1 → H2 → H3, single H1 with target keywords | — |
| 18 | On-Page | Pass | Confirmed | Meta description present and well-written | 143 chars with keywords and CTA | — |
| 19 | Technical | Pass | Confirmed | HTTPS with HSTS | `security_headers: HSTS: max-age=63072000` | — |
| 20 | Technical | Pass | Confirmed | Viewport meta tag present | `<meta name="viewport" content="width=device-width, initial-scale=1">` | — |
| 21 | Performance | Pass | Likely | Minimal JS, static Astro build | Only ~30 lines of client JS (form submit + menu toggle) | — |
| 22 | Performance | Pass | Confirmed | Font preconnect hints | `<link rel="preconnect" href="https://fonts.googleapis.com">` | — |
| 23 | Accessibility | Pass | Confirmed | prefers-reduced-motion respected | CSS disables animations when reduced motion is preferred | — |
| 24 | Accessibility | Pass | Confirmed | Focus-visible styles defined | Custom gold outline on focus-visible for all interactive elements | — |

---

## Category Scores

| Category | Weight | Score | Weighted | Justification |
|----------|--------|-------|----------|---------------|
| Technical SEO | 25% | 35 | 8.75 | HTTPS + HSTS + clean HTML + viewport are solid (+), penalized by missing robots.txt (Critical, -15), missing sitemap (Critical, -15), missing canonical (Critical, -15), 307 redirect (Warning, -5) |
| Content Quality | 20% | 35 | 7.00 | Well-written human copy with clear value proposition (+), penalized by thin content at 322 words (Warning, -5), single testimonial (Warning, -5), no supporting pages (Warning, -5) |
| On-Page SEO | 15% | 40 | 6.00 | Good heading hierarchy, meta description with keywords, service areas listed (+), penalized by overlong title (Warning, -5), missing canonical (Critical, -15) |
| Schema / Structured Data | 15% | 0 | 0.00 | Zero JSON-LD schema found. No LocalBusiness, Organization, WebSite, or any structured data. Score: 0 |
| Performance (CWV) | 10% | 65 | 6.50 | Minimal JS, static build, font preconnect (+), penalized by render-blocking Google Fonts (Warning, -5). Score confidence: Low — PageSpeed API rate-limited |
| Image Optimization | 10% | 0 | 0.00 | No actual images exist — all placeholder divs. No alt text, no optimization possible. Score: 0 |
| AI Search Readiness | 5% | 15 | 0.75 | Clear factual content and location info (+), penalized by no llms.txt (Warning, -5), no schema for AI parsing (Warning, -5), thin content (Warning, -5) |
| **Overall** | **100%** | | **29.00** | **Critical** |

---

## Unknowns and Follow-ups

| Item | Status | How to Confirm |
|------|--------|----------------|
| Core Web Vitals (LCP, INP, CLS) | Hypothesis | Run PageSpeed Insights manually or with API key |
| Google Search Console indexing status | Unknown | Verify site ownership in GSC and check index coverage |
| Google Business Profile | Unknown | Check if GBP is set up and linked to this domain |
| SSL certificate validity | Hypothesis | urllib3 showed InsecureRequestWarning — verify SSL cert chain |
| Domain age and authority | Unknown | Check via Ahrefs/Moz or Google Search Console |

---

## Environment Limitations

- PageSpeed Insights API was rate-limited; CWV scores could not be confirmed.
- Performance score is based on code analysis only (confidence: Likely).
