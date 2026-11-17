import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { pushDataLayer } from '../lib/site'

// Cookie consent with Google Consent Mode v2.
// Defaults are set to "denied" in index.html. This updates them after the visitor chooses.
const KEY = 'mih_consent'

function readChoice() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}
function saveChoice(v) {
  try {
    localStorage.setItem(KEY, v)
  } catch {
    /* storage blocked */
  }
}
function applyChoice(v) {
  const granted = v === 'all' ? 'granted' : 'denied'
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
      analytics_storage: granted,
    })
  }
  pushDataLayer({ event: 'consent_update', consent_choice: v })
}

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const existing = readChoice()
    if (existing) applyChoice(existing)
    else setShow(true)
    const open = () => setShow(true)
    window.addEventListener('open-cookie-settings', open)
    return () => window.removeEventListener('open-cookie-settings', open)
  }, [])

  const choose = (v) => {
    saveChoice(v)
    applyChoice(v)
    setShow(false)
  }

  return (
    <div
      className={`cookie${show ? ' show' : ''}`}
      id="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
    >
      <h2>Your privacy</h2>
      <p>
        We use essential cookies to run this site. With your permission, we also use analytics and advertising
        cookies to understand how the site is used and to measure our ads. Read our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button className="btn" type="button" onClick={() => choose('all')}>
          Accept all
        </button>
        <button className="btn ghost" type="button" onClick={() => choose('essential')}>
          Essential only
        </button>
      </div>
    </div>
  )
}
