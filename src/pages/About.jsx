import Seo from '../components/Seo'
import { Crumbs, Cta } from '../components/Blocks'

export default function About() {
  return (
    <>
      <Seo
        title="About M International Health | Care Across Borders, Made Simple"
        description="M International Health is an international healthcare navigation platform connecting patients with healthcare providers in China, with professional care coordination and clear communication."
        path="/about"
      />

      <section className="page-hero">
        <div className="container split">
          <div>
            <Crumbs items={[['About M', null]]} />
            <span className="eyebrow">About M</span>
            <h1>
              Your trusted bridge <em>to care in China.</em>
            </h1>
            <p className="lead">
              M International Health is a premium international healthcare coordination platform for
              international patients seeking care in China. We connect you with licensed providers and manage
              everything around your care: second opinions, medical record translation, appointments, travel,
              and your stay, with a bilingual coordinator by your side.
            </p>
          </div>
          <div className="journey" style={{ minHeight: '420px' }} aria-hidden="true">
            <div className="journey-map" style={{ inset: '0' }}>
              <svg viewBox="0 0 620 420" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M200 330A130 130 0 1 1 420 330"
                  fill="none"
                  stroke="#C9A45C"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <line
                  x1="170"
                  y1="356"
                  x2="450"
                  y2="356"
                  stroke="#C9A45C"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <rect x="290" y="150" width="40" height="150" rx="10" fill="#1F7A6D" />
                <rect x="235" y="205" width="150" height="40" rx="10" fill="#1F7A6D" />
                <circle cx="480" cy="90" r="18" fill="#E0634C" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What guides us</span>
            <h2>
              Four promises <em>behind every journey.</em>
            </h2>
          </div>
          <div className="grid-4">
            <div className="card">
              <div className="step-num">01</div>
              <h3>Patient First</h3>
              <p>Every plan is shaped around your goals and comfort.</p>
            </div>
            <div className="card">
              <div className="step-num">02</div>
              <h3>Clear and Transparent</h3>
              <p>A clear service plan and estimated costs before you travel.</p>
            </div>
            <div className="card">
              <div className="step-num">03</div>
              <h3>Trusted Partners</h3>
              <p>Licensed providers and carefully chosen travel partners.</p>
            </div>
            <div className="card">
              <div className="step-num">04</div>
              <h3>Always by Your Side</h3>
              <p>Dedicated international healthcare coordination, start to finish.</p>
            </div>
          </div>
        </div>
      </section>
      <Cta
        title="Ready to begin your China health journey?"
        text="Book a free care coordination consultation, and our international healthcare coordination team will take it from there. We get back to you within one business day."
      />
    </>
  )
}
