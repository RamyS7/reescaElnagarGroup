# Website QA Report — Reesca Elnagar Group

**Date:** 2026-11-27
**Build tested:** local production build (`next build` + `next start`); the working tree includes uncommitted changes.
**Tester:** automated and manual checks driven through a Chromium browser pane.

Status legend: **Passed** · **Failed** · **Fixed** (failed, then fixed and re-tested) · **Not Tested** · **Blocked**

---

## A. Project Overview

| Item | Value |
|---|---|
| Framework | Next.js 15.0.8 (App Router), React 19 RC, TypeScript 5 |
| i18n | next-intl 3.26 · locales `ar` (default, RTL) and `en` (LTR) · `localePrefix: "always"` |
| Styling | Tailwind CSS 3.4 · self-hosted fonts via @fontsource (Playfair Display, Inter, Tajawal, Cairo) |
| Forms | Client-side validation (`lib/validation.ts`). Submission through Web3Forms when `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set, otherwise a `mailto:` fallback |
| Backend / API | None in this repo: no API routes, auth or database |
| Public pages | 5 routes × 2 locales = **10 pages**, plus `/robots.txt` and `/sitemap.xml` (added) |
| Internal-only page | `/[locale]/dev/components`: returns 404 in production (`notFound()` when `NODE_ENV=production`) |

**Testing tools available in the project:** `tsc`, ESLint (`next lint`), `next build` and `npm audit`. **Not installed:** Playwright, Jest/Vitest, Testing Library, Lighthouse and axe. Per the brief, no dependencies were installed. Browser checks used scripted DOM, Performance API and network inspection in Chromium, plus real mouse clicks and key presses.

---

## B. Testing Results by Category

### 1. Static checks

| Test | Result |
|---|---|
| TypeScript `tsc --noEmit` | Passed |
| ESLint `next lint` | Passed (0 warnings) |
| Production build | Passed. The first attempts failed with *out of memory*, caused by the machine's exhausted memory and not by the code; it passed after memory was freed. |
| `npm audit --omit=dev` | **Failed**: 4 advisories (see Security) |

### 2. Functional testing

| Test | Result |
|---|---|
| All 10 pages return HTTP 200 | Passed |
| `/` and an unknown locale redirect; unknown path returns 404 | Passed |
| 10 unique internal links | Passed (all 200) |
| 20 local images and backgrounds | Passed (all 200, no broken images) |
| External links (tel, mailto, wa.me, Google Maps): 19 unique | Passed (format checked) · **Not Tested** (reachability of third-party hosts) |
| All `target="_blank"` links have `rel="noopener"` | Passed (9/9) |
| Desktop navigation links | Passed |
| Mobile menu: open, slide from correct side (RTL left / LTR right), body scroll lock, Escape closes, closes on navigation, link navigates | Passed |
| Mobile menu: closed drawer's links reachable by Tab | **Fixed** |
| Language switcher keeps the current page (`/ar/wood-products` → `/en/wood-products`), switches `lang`/`dir` | Passed |
| Product modal: opens, `role="dialog"`, `aria-modal`, labelled, focus moves to Close, body scroll locked and unlocked | Passed |
| Product modal: Tab escaped the dialog to the page behind | **Fixed** (focus trap) |
| Product modal: Escape closed it but did not return focus to the trigger | **Fixed** |
| Search, filtering, sorting, pagination, auth | Not applicable (features don't exist) |

### 3. Forms (inquiry form: wood, trading and contact variants)

| Test | Result |
|---|---|
| Every field has a label | Passed (8/8) |
| Empty submit shows "required" on name, email, product and message | Passed |
| Invalid email (`not-an-email`) | Passed: "Please enter a valid email address" |
| Invalid phone (`12ab`) | Passed: "Please enter a valid phone number" |
| Message under 10 characters | Passed: "Message is too short" |
| Message over 2000 characters | Passed: field marked invalid |
| Valid values clear the errors | Passed |
| HTML in the name field is not rendered as markup | Passed |
| Real submission, success and error states, duplicate submit | **Blocked**: no Web3Forms key is configured, so submit opens the visitor's mail client. Sending a real email was not authorized. |

### 4. Responsive design

Every page in both languages was tested at 375, 390, 430, 768, 1024, 1366 and 1920 px: **70 combinations**.

| Test | Result |
|---|---|
| Horizontal scroll and overflow | **Fixed**: `/en` (and the stats strip on any page at 768–1023 px) scrolled 32 px sideways. After the fix, 70/70 pass. |
| Mobile menu on a 375 px phone | Passed |
| Header labels wrapping at 1024 px | Passed |

### 5. UI/UX

| Test | Result |
|---|---|
| Typography by locale (EN: Playfair + Inter; AR: Tajawal + Cairo) | Passed: only the active locale's fonts are downloaded (5 font files on `/en`) |
| Visible keyboard focus (`:focus-visible`, 2 px gold outline) | Passed |
| Hover and active states, animations: full visual review | Not Tested (spot-checked only) |
| Product modal title uses Playfair (a Latin font) even in Arabic | Failed (Low), recommendation only |

### 6. Arabic / English, RTL / LTR

| Test | Result |
|---|---|
| `lang` and `dir` correct on all 10 pages | Passed |
| Mobile drawer and directional arrows mirror in RTL | Passed |
| Hardcoded English "MENU" label shown in Arabic drawer | **Fixed** (now "القائمة") |
| Stray Arabic diacritic (kasra) before "Afamia" in `ar.json`, which also leaked into the Google Maps search link | **Fixed** |
| Modal still has English strings in Arabic: Close button `aria-label`, prefilled WhatsApp message | Failed (Low), recommendation only |
| Branch names in `ar.json` are now English, with inconsistent casing (`mobilya stls` vs `Mobilya Stls`, `LLc`) | Content decision for the owner, not changed |

### 7. Console and runtime

| Test | Result |
|---|---|
| JavaScript errors, hydration errors, React warnings (10 pages) | Passed: none |
| Failed requests during normal page loads | Passed: none. The only 404s logged were deliberate test probes. |
| Warning: logo preloaded at one size, used at another | Failed (Low), recommendation only |

### 8. API / backend

Not applicable. The site has no API routes, auth or database. The only external integration is Web3Forms, which is **Blocked** (see Forms).

---

## C. Bug Report

| # | Severity | Issue | Affected | Root cause | Status |
|---|---|---|---|---|---|
| 1 | **Critical** | Next.js 15.0.8 has published critical/high advisories (middleware redirect SSRF, cache poisoning, image-optimizer DoS, and others) | `package.json` | Outdated framework version | **Not fixed, needs approval**: upgrade to the latest Next 15.5.x patch, which `npm audit` proposes as 15.5.29. Re-test after upgrading. |
| 2 | **High** | The inquiry form does not deliver leads by itself: with no Web3Forms key, submit only opens the visitor's mail client | `components/forms/InquiryForm.tsx`, env | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` not set | **Not fixed, needs owner action**: create a key for Sales@reescaelnagargroup.com and set it in the hosting environment |
| 3 | High | postcss (bundled in Next) and sharp advisories | dependencies | Transitive versions | Fixed by the Next upgrade in #1 |
| 4 | Medium | 32 px horizontal scroll at 768–1023 px | `components/sections/home/StatsStrip.tsx` | 4 columns plus 48 px gutters and the 56 px "1000+" don't fit in tablet width | **Fixed**: 2 columns below `lg`; 4 columns and dividers unchanged from 1024 px up |
| 5 | Medium | Tab escapes the open product modal | `components/ui/ProductModal.tsx` | No focus trap | **Fixed**: Tab / Shift+Tab cycle inside the dialog |
| 6 | Medium | Escape closes the modal but focus is lost | `components/ui/ProductModal.tsx` | Escape called `onClose` directly, skipping focus restore | **Fixed**: Escape goes through `handleClose` |
| 7 | Medium | Closed mobile drawer's links are keyboard-focusable while off-screen | `components/layout/MobileMenu.tsx` | Drawer only translated off-screen | **Fixed**: `invisible` when closed, with visibility transitioned alongside the slide |
| 8 | Medium | Gold text (#C9A961) on cream/white fails WCAG AA contrast (2.0–2.25:1, minimum 4.5:1); also stat numbers and eyebrows | site-wide | Brand palette | **Not fixed**: changing brand colors needs design approval. Suggest a darker gold for small text on light backgrounds. |
| 9 | Medium | No `robots.txt` or `sitemap.xml` | `app/` | Not implemented | **Fixed**: `app/robots.ts` and `app/sitemap.ts` (10 URLs with hreflang alternates; `/dev/` disallowed) |
| 10 | Medium | No security headers; `X-Powered-By: Next.js` exposed | `next.config.ts` | Not configured | **Fixed**: `nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, `Permissions-Policy`, `poweredByHeader: false` |
| 11 | Low | Stray kasra (ِ) before "Afamia" in the Arabic branch name and its Maps link | `messages/ar.json` | Typing artifact | **Fixed** |
| 12 | Low | "MENU" hardcoded in English | `MobileMenu.tsx` | Missing translation | **Fixed**: new `nav.menu` key in both languages |
| 13 | Low | No `og:image` / Twitter image; no JSON-LD (Organization) | `lib/seo.ts` | Not implemented | Recommended |
| 14 | Low | Modal English-only strings; Playfair forced on the Arabic title | `ProductModal.tsx` | Hardcoded strings and inline font | Recommended |
| 15 | Low | Hero/section backgrounds and 5 trading images load full-size from Unsplash as CSS backgrounds (no responsive sizes; the home page has about 900 KB of images) | Hero, trading data | CSS `background-image` bypasses `next/image` | Recommended: self-host the images and use `next/image` with `sizes` |
| 16 | Low | Logo preload warning | `Navbar.tsx` | Priority preload candidate differs from the rendered srcset choice | Recommended |
| 17 | Low | Footer uses `h4` directly after page `h2` (skips `h3`) | `Footer.tsx` | Heading level choice | Recommended |
| 18 | Info | WhatsApp button: white on #25D366 is 1.98:1 | `WhatsAppButton.tsx` | WhatsApp brand color | Left as is (brand convention) |

---

## D. Performance Results

Measured on a local production server, desktop, warm cache. **Lighthouse is not installed**, so Lighthouse scores were **Not Tested**.

| Page | TTFB | DOMContentLoaded | Load | CLS | JS (transfer) | Requests |
|---|---|---|---|---|---|---|
| /en | 28 ms | 41 ms | 57 ms | 0 | 141 KB | 35 |
| /ar | 39 ms | 53 ms | 69 ms | 0 | 141 KB | 35 |
| /en/about | 27 ms | 44 ms | 59 ms | 0 | 141 KB | 32 |
| /en/wood-products | 26 ms | 41 ms | 54 ms | 0 | 148 KB | 44 |
| /en/general-trading | 24 ms | 37 ms | 53 ms | 0 | 141 KB | 32 |
| /en/contact | 24 ms | 45 ms | 56 ms | 0 | 145 KB | 31 |

- **First-load JS:** 100 KB shared, 112–150 KB per route (from the build output). This is reasonable.
- **CLS:** 0 on every page measured. Passed.
- **LCP / INP:** Not Tested. The browser pane was in the background, so no paint timing was recorded, and INP needs real user interaction traces.
- **Fonts:** self-hosted; each locale downloads only its own fonts. Passed.
- **Images:** see bug #15. This is the main performance opportunity.
- Local timings don't reflect real-network latency.

## E. SEO Results

| Element | Status |
|---|---|
| Unique `<title>` per page and locale (10/10) | ✅ Implemented |
| Meta description (102–143 characters, 10/10) | ✅ Implemented |
| Canonical URL (absolute) | ✅ Implemented |
| hreflang `ar`, `en`, `x-default` | ✅ Implemented |
| Exactly one `<h1>` per page | ✅ Implemented |
| Open Graph title, description, url, site_name, locale, type | ✅ Implemented |
| Twitter tags | ✅ Present (3 tags) |
| Image `alt` attributes (0 missing) | ✅ Implemented |
| Favicon (`/icon.png` via App Router) | ✅ Implemented |
| `robots.txt` / `sitemap.xml` | ✅ **Added** in this audit |
| `og:image` / Twitter image | ❌ Missing |
| Structured data (JSON-LD) | ❌ Missing |
| Live domain | ⚠️ `reescaelnagargroup.com` currently shows a Hostinger parked page, so canonical and sitemap URLs point to a domain that isn't serving the site yet |

## F. Accessibility Results

- **Passed:**
  - Landmarks: header, nav, main, footer.
  - All buttons and links have accessible names, with no duplicate IDs.
  - Every form field has a label, and errors are tied to their fields.
  - Visible `:focus-visible` outline.
  - Dialog semantics.
  - Escape closes the menu and the modal.
  - `lang`/`dir` set per locale.
- **Fixed:**
  - Modal focus trap (#5).
  - Focus restored on Escape (#6).
  - Hidden drawer removed from the Tab order (#7).
  - Translated menu label (#12).
- **Open:**
  - Gold-on-light contrast (#8).
  - English strings inside the Arabic modal (#14).
  - Heading level skip in the footer (#17).
- **Not Tested:** a real screen reader (NVDA/VoiceOver), and an axe-core scan (axe not installed).

## G. Security Results

- **Dependencies:** 4 advisories (1 critical, 2 high, 1 moderate) in next, postcss (via next), sharp and next-intl. Fix: upgrade Next to the latest 15.5.x patch. This was **not applied**, because it needs approval.
- **Secrets:**
  - `.env.local` is git-ignored.
  - No server-only env value appears in the client bundle; `RESEND_API_KEY` is empty and unused.
  - Only `NEXT_PUBLIC_*` values (WhatsApp number, site URL) are public, by design.
  - A future Web3Forms access key is public by design.
- **XSS:** no `dangerouslySetInnerHTML`, `eval` or `innerHTML` in the source; form input is rendered as text.
- **Open redirects:** none. Language switching uses next-intl routing.
- **Headers:** baseline headers added (#10). CSP and HSTS were not added: CSP needs tuning for Next inline scripts, and HSTS belongs on the HTTPS host or CDN. Both are recommended at deploy time.
- **Auth / authorization:** not applicable.

---

## H. Final Summary

| Metric | Count |
|---|---|
| Test checks executed (including the 70 responsive combinations and 10-page SEO/console sweeps) | **≈ 230** |
| Passed (first run) | ≈ 205 |
| Failed (first run) | 22 checks → **18 distinct issues** (table C) |
| Issues fixed and re-tested | **9** (#4, #5, #6, #7, #9, #10, #11, #12, plus the responsive re-run) |
| Remaining issues | **9** (#1, #2, #3, #8, #13–#17), plus 1 informational |
| Blocked | Real form submission (no key; sending email not authorized) |
| Not Tested | Lighthouse, LCP/INP, axe, screen reader, browsers other than Chromium, third-party link reachability |

**Files changed by this audit:**
- `components/sections/home/StatsStrip.tsx`
- `components/ui/ProductModal.tsx`
- `components/layout/MobileMenu.tsx`
- `messages/ar.json`
- `messages/en.json`
- `next.config.ts`
- `app/robots.ts` (new)
- `app/sitemap.ts` (new)

After the fixes, typecheck, lint, the build, all 10 pages and the 70 responsive combinations pass again.

**Overall assessment:** the site is in **good shape functionally**. Every page and route works, there are no runtime errors, layout shift is zero, and RTL/LTR handling and forms are solid. Before launch, two things matter most:
1. **Upgrade Next.js** (#1).
2. **Configure the Web3Forms key** so inquiries actually arrive (#2).

After that, the main improvements are brand-color contrast (#8), social share images and JSON-LD (#13), and self-hosted responsive images (#15).
