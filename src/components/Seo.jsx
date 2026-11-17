import { useEffect } from 'react'
import { DOMAIN, ORG_SCHEMA } from '../lib/site'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Per-page title, description, canonical URL, Open Graph tags and structured data.
export default function Seo({ title, description, path = '/', schema = [], noindex = false }) {
  useEffect(() => {
    const url = DOMAIN + path
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    let ld = document.getElementById('seo-jsonld')
    if (!ld) {
      ld = document.createElement('script')
      ld.type = 'application/ld+json'
      ld.id = 'seo-jsonld'
      document.head.appendChild(ld)
    }
    const all = [ORG_SCHEMA, ...schema]
    ld.textContent = JSON.stringify(all.length > 1 ? all : all[0])
  }, [title, description, path, noindex, schema])

  return null
}
