import { useEffect } from 'react'
import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { PlusIcon } from '../components/Icons'
import { pushDataLayer } from '../lib/site'

export default function ThankYou() {
  // Conversion: GTM fires Google Ads and Meta Lead conversions on this event (or on form_submit_enquiry).
  useEffect(() => {
    pushDataLayer({ event: 'lead_thank_you' })
  }, [])
  return (
    <>
      <Seo
        title="Thank You | M Global Health, Inc."
        description="Thank you for your enquiry. Our care coordination team will reply within one business day."
        path="/thank-you"
        noindex
      />

      <section className="section center lattice" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="icon" style={{ margin: '0 auto 24px', width: '72px', height: '72px' }}>
            <PlusIcon />
          </div>
          <span className="eyebrow">Request received</span>
          <h1 style={{ maxWidth: '760px', margin: '0 auto 20px' }}>
            Thank you. <em>We'll be in touch.</em>
          </h1>
          <p className="lead">
            A member of our care coordination team will reply within one business day. Please check your
            inbox, including your spam folder.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link className="btn ghost" to="/how-it-works">
              See how it works
            </Link>
            <Link className="btn ghost" to="/faq">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
      {/* Conversion: GTM fires Google Ads and Meta Lead conversions on this page view (or on the form_submit_enquiry event). */}
    </>
  )
}
