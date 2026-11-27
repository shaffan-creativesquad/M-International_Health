import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs } from '../components/Blocks'
import { PlusIcon } from '../components/Icons'
import { INSTAGRAM } from '../lib/site'

export default function FreeConsultation() {
  return (
    <>
      <Seo
        title="Free Care Coordination Consultation | M Global Health, Inc."
        description="Book a free care coordination consultation with M Global Health, Inc.. Share your goals and dates, and we reply within one business day with next steps."
        path="/free-consultation"
      />

      <section className="section">
        <div className="container split consult-grid">
          <div>
            <Crumbs items={[['Free Consultation', null]]} />
            <span className="eyebrow">Free consultation</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4.2vw,3.5rem)', margin: '6px 0 20px' }}>
              Begin your <em>China experience.</em>
            </h1>
            <p className="lead">
              Share a few details about your goals — business, lifestyle or health — and our concierge
              team will reply within one business day with clear next steps.
            </p>
            <div className="notice" style={{ marginTop: '28px' }}>
              <b>Please note:</b> this is a care coordination consultation about your goals, your dates, and
              your options. It is not a medical consultation or a diagnosis. Any medical advice would always
              come from your chosen licensed provider.
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
              {/* TODO: add office/mailing address once M confirms a public address */}
              {/* TODO: add email and WhatsApp contact cards once M confirms them */}
            </div>
          </div>
          <EnquiryForm name="consultation" title="Request your care plan" />
        </div>
      </section>
    </>
  )
}
