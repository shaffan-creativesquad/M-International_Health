import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs } from '../components/Blocks'
import { PlusIcon } from '../components/Icons'
import { INSTAGRAM } from '../lib/site'

export default function FreeConsultation() {
  return (
    <>
      <Seo
        title="Free Care Coordination Consultation | M International Health"
        description="Book a free care coordination consultation with M International Health. Share your goals and dates, and we reply within one business day with next steps."
        path="/free-consultation"
      />

      <section className="section">
        <div className="container split consult-grid">
          <div>
            <Crumbs items={[['Free Consultation', null]]} />
            <span className="eyebrow">Free consultation</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.2vw,3.5rem)', margin: '6px 0 20px' }}>
              Let's plan your <em>care journey.</em>
            </h1>
            <p className="lead">
              Share a few details and a member of our care coordination team will reply within one business
              day with next steps.
            </p>
            <div className="notice" style={{ marginTop: '28px' }}>
              <b>Please note:</b> this is a care coordination consultation about your goals, dates and
              options. It is not a medical consultation or diagnosis. Medical advice always comes from your
              chosen licensed provider.
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="icon">
                  <PlusIcon />
                </div>
                <div>
                  <b>Instagram</b>
                  <span>
                    <a href={INSTAGRAM} target="_blank" rel="noopener">
                      @m.international.health.inc
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-card">
                <div className="icon gold">
                  <PlusIcon />
                </div>
                <div>
                  <b>Office</b>
                  <span>13904 Orangevale Ave, Corona, CA 92880, USA</span>
                </div>
              </div>
              {/* TODO: add email and WhatsApp contact cards once M confirms them */}
            </div>
          </div>
          <EnquiryForm name="consultation" title="Request your care plan" />
        </div>
      </section>
    </>
  )
}
