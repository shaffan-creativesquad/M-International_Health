import Seo from '../components/Seo'
import { Crumbs } from '../components/Blocks'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use | M Global Health, Inc."
        description="Terms for using the M Global Health, Inc. website and care coordination services."
        path="/terms"
      />

      <section className="section">
        <div className="container legal">
          <Crumbs items={[['Terms', null]]} />
          <h1 style={{ fontSize: '2.6rem', marginBottom: '24px' }}>Terms of Use</h1>
          <div className="template-note">
            <b>Template for review.</b> This text is a starting structure only. It must be reviewed and
            approved by M Global Health, Inc. and its legal adviser before the site goes live, including the
            items in [square brackets].
          </div>
          <p>
            <b>Last updated:</b> [date]
          </p>
          <h2>Our service</h2>
          <p>
            M Global Health, Inc. provides healthcare navigation and care coordination services. We do
            not provide medical treatment, diagnosis or medical advice. All medical services are provided by
            independent licensed healthcare providers, who are responsible for their own care.
          </p>
          <h2>Third-party providers</h2>
          <p>
            Travel, accommodation and transport are arranged through third-party providers, whose own terms
            apply to their services.
          </p>
          <h2>Quotes and payments</h2>
          <p>[Describe how quotes are issued, what they include, payment terms and currency.]</p>
          <h2>Changes and cancellations</h2>
          <p>[Cancellation and rescheduling terms to be confirmed.]</p>
          <h2>Website information</h2>
          <p>
            Information on this website is general and is not medical advice. Always consult a qualified
            healthcare professional about your own situation.
          </p>
          <h2>Liability</h2>
          <p>[Limitation of liability to be drafted by M's legal adviser.]</p>
          <h2>Governing law</h2>
          <p>[To be confirmed.]</p>
          <h2>Contact</h2>
          <p>[contact email] · 13904 Orangevale Ave, Corona, CA 92880, USA</p>
        </div>
      </section>
    </>
  )
}
