// Site-wide settings for M Global Health, Inc.
export const DOMAIN = 'https://minternationalhealthinc.com'
export const INSTAGRAM = 'https://www.instagram.com/m.international.health.inc'

// Set this to M's form handler (CRM, Formspree or similar). While it contains
// "YOUR_FORM_ENDPOINT", forms only validate and go to the thank-you page, and no data is sent.
export const FORM_ENDPOINT = 'YOUR_FORM_ENDPOINT'

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'M Global Health, Inc.',
  alternateName: 'M Global Health, Inc.',
  url: DOMAIN + '/',
  logo: DOMAIN + '/assets/img/logo-mark.svg',
  description:
    'Private concierge in China — Business, Lifestyle and Health. Curated business connections, premium lifestyle experiences and world-class healthcare, all arranged with a dedicated bilingual team.',
  sameAs: [INSTAGRAM],
}

export function pushDataLayer(obj) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(obj)
}

// Opens the cookie banner from anywhere (footer and privacy policy links).
export function openCookieSettings(e) {
  if (e) e.preventDefault()
  window.dispatchEvent(new Event('open-cookie-settings'))
}
