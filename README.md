# M International Health INC | Website (React)

React version of minternationalhealthinc.com, built by Creative Squad Inc.
Same design, copy and layout as the HTML version, rebuilt with **React 18 + Vite + React Router**.

## Run it

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

A ready-built copy is included in `dist/`. Upload the contents of `dist/` to the web host as is.

## Hosting

Every page has a clean URL (for example `/travel-dental`), so the host must send all routes to `index.html`:

- **Netlify**: `public/_redirects` is included.
- **Vercel**: `vercel.json` is included.
- **cPanel / Apache**: `public/.htaccess` is included.
- **Nginx**: add `try_files $uri /index.html;`

## Project structure

```
src/
  main.jsx              App entry
  App.jsx               Routes for all 14 pages
  styles/style.css      All styles (brand colours and fonts at the top)
  lib/site.js           Domain, Instagram link, FORM_ENDPOINT, organisation schema
  components/
    Layout.jsx          Header + page + footer + cookie banner, virtual page views
    Header.jsx          Logo A, navigation, dropdowns, mobile menu
    Footer.jsx          Footer links, contact, disclaimer
    CookieBanner.jsx    Cookie consent with Google Consent Mode v2
    EnquiryForm.jsx     Free care coordination consultation form
    Seo.jsx             Title, description, canonical, Open Graph, structured data per page
    Blocks.jsx          Breadcrumbs, CTA band, proof strip, journey map, FAQ
    Icons.jsx           Logo mark and icons
  pages/                One file per page
public/
  assets/img/           Logo A files (mark, horizontal, light version) and favicon
  sitemap.xml, robots.txt
```

## Pages and routes

| Route | Page |
|---|---|
| `/` | Home |
| `/travel-health-checkup` | Travel + Health Checkup (ad landing page, inline form) |
| `/travel-dental` | Travel + Dental (ad landing page, inline form) |
| `/health-checkups` | Health Checkups |
| `/dental-veneers` | Dental Veneers (inline form) |
| `/medical-treatment` | Medical Treatment |
| `/how-it-works` | How It Works |
| `/concierge` | Concierge and Travel |
| `/about` | About M |
| `/faq` | FAQ (FAQPage structured data) |
| `/free-consultation` | Free Consultation (main form) |
| `/thank-you` | Thank You (conversion page, noindex) |
| `/privacy-policy` | Privacy Policy (template, needs legal review) |
| `/terms` | Terms (template, needs legal review) |

## Before launch: replace these

1. **Google Tag Manager ID**: in `index.html`, replace `GTM-XXXXXXX` with M's container ID. GTM stays off until this is done.
2. **Form endpoint**: in `src/lib/site.js`, set `FORM_ENDPOINT` to M's form handler (CRM, Formspree or similar). Until then forms only validate and go to `/thank-you`, and no data is sent.
3. **Social links**: Facebook and TikTok URLs in `Footer.jsx` (marked `TODO`).
4. **Contact details**: M's public email and WhatsApp or phone (`Footer.jsx` and `pages/FreeConsultation.jsx`, marked `TODO`).
5. **Photos**: elements with the class `ph` are photo placeholders. Replace them with approved photos from M's partner clinics, hospitals and hotels.
6. **Privacy Policy and Terms**: complete every item in [square brackets] with M's legal adviser.

## Tracking (set up inside GTM)

- **Consent**: Google Consent Mode v2 defaults to "denied" in `index.html`; `CookieBanner.jsx` updates it after the visitor chooses.
- **Page views**: this is a single page app, so `Layout.jsx` pushes `{ event: 'page_view', page_path }` on every route change. In GTM, trigger GA4 page views on this event (or use the History Change trigger).
- **Leads**: fire Google Ads and Meta Lead conversions on the `form_submit_enquiry` event (includes `form_name`, `interest`, `country`) or on `lead_thank_you` (sent when `/thank-you` loads).
- **Search Console**: verify the domain and submit `/sitemap.xml`.

## SEO note

Each page sets its own title, description, canonical URL, Open Graph tags and structured data in the browser. Google renders JavaScript, but some AI search tools and social previews read only the raw HTML. For the strongest SEO and GEO results, add prerendering at build time (for example `vite-plugin-prerender` or `react-snap`) so every route ships as static HTML.

## Brand

- Colours: Deep Harbour `#0F2733`, Jade `#1F7A6D`, Vermilion `#C2412D` (buttons only), Gold `#C9A45C`, Rice Paper `#F6F1E8`.
- Fonts: Fraunces (headings) and DM Sans (body) from Google Fonts.

## Copy rules

- Always "dedicated care coordination", never a promise of one individual coordinator.
- The free consultation is a care coordination consultation, never a medical consultation.
- No outcome promises, and no prices, accreditations or claims unless supplied and approved by M.
