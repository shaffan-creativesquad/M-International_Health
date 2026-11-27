import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Crumbs, Cta } from '../components/Blocks'

export default function MedicalTreatment() {
  return (
    <>
      <Seo
        title="Medical Treatment in China | Specialist Referrals | M Global Health, Inc."
        description="Send your medical records for review by qualified providers in China. M coordinates appointments, interpreters, travel and your stay around the treatment plan."
        path="/medical-treatment"
      />

      <section className="page-hero dark">
        <div className="container">
          <Crumbs
            items={[
              ['Treatments', null],
              ['Medical Treatment', null],
            ]}
          />
          <span className="eyebrow">Specialist care</span>
          <h1>
            Specialist treatment in China, <em>coordinated with care.</em>
          </h1>
          <p className="lead">
            Share your medical records and we arrange a review with qualified providers, then plan every
            appointment and your stay around their treatment plan.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/free-consultation">
              Start with a Consultation
            </Link>
            <Link className="btn ghost" to="/how-it-works">
              How It Works
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Your path to treatment</span>
            <h2>
              From records to <em>recovery.</em>
            </h2>
          </div>
          <div className="grid-4">
            <div className="card">
              <div className="step-num">01</div>
              <h3>Share records</h3>
              <p>After your consultation, we explain how to send reports and scans securely.</p>
            </div>
            <div className="card">
              <div className="step-num">02</div>
              <h3>Provider review</h3>
              <p>A qualified provider reviews your case.</p>
            </div>
            <div className="card">
              <div className="step-num">03</div>
              <h3>Treatment plan</h3>
              <p>Your provider sets the plan and the quote.</p>
            </div>
            <div className="card">
              <div className="step-num">04</div>
              <h3>Travel and stay</h3>
              <p>We arrange the logistics around it.</p>
            </div>
          </div>
          <div className="notice" style={{ marginTop: '36px' }}>
            <b>Clear roles.</b> Your provider makes every medical decision. M coordinates everything around
            your care and does not give medical advice.
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
