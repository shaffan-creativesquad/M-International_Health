import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Cta, Journey, ProofStrip } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function Home() {
  return (
    <>
      <Seo
        title="M International Health | Care Journeys to China, Every Step Coordinated"
        description="Health checkups, dental veneers and medical treatment in China, with dedicated care coordination, interpreter support and travel arranged for patients from the UK, Ireland and the Netherlands."
        path="/"
      />

      <section className="hero lattice">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">International patient coordination | China</span>
            <h1>
              Quality care in China. <em>Every step coordinated.</em>
            </h1>
            <p className="lead">
              We connect patients from the UK, Ireland and the Netherlands with trusted healthcare providers
              in China, then coordinate appointments, interpreters, travel and your stay, so you can focus on
              your care.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/free-consultation">
                Book a Free Consultation
              </Link>
              <Link className="btn ghost" to="/how-it-works">
                See How It Works
              </Link>
            </div>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Dedicated care coordination
              </span>
              <span>
                <span className="dot"></span>Interpreter support
              </span>
              <span>
                <span className="dot"></span>Clear quote before you travel
              </span>
            </div>
          </div>
          <Journey />
        </div>
      </section>
      <ProofStrip />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Care trips</span>
            <h2>
              Care and a trip <em>worth taking.</em>
            </h2>
            <p className="lead">
              Two ways to make the most of your time in China, planned around your dates.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon />
              <h3>Travel + Health Checkup</h3>
              <p>
                A comprehensive health check at a partner hospital, scheduled around a few days to explore.
                Results explained in English.
              </p>
              <Link className="link-arrow" to="/travel-health-checkup">
                Plan a checkup trip
              </Link>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Travel + Dental</h3>
              <p>
                Dental veneers and dental care with real time from your chosen dentist, and a city break built
                around your visits.
              </p>
              <Link className="link-arrow" to="/travel-dental">
                Plan a dental trip
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container">
          <div
            className="section-head"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span className="eyebrow">Treatments we coordinate</span>
              <h2>Start with what you need.</h2>
            </div>
            <Link className="btn ghost" to="/health-checkups">
              Explore treatments
            </Link>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Health Checkups</h3>
              <p>
                Comprehensive screening packages at partner hospitals, with your results explained in English.
              </p>
              <Link className="link-arrow" to="/health-checkups">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Dental Veneers</h3>
              <p>Consultation, treatment planning and visits coordinated around your travel dates.</p>
              <Link className="link-arrow" to="/dental-veneers">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Medical Treatment</h3>
              <p>Records review, specialist referrals and appointments with qualified providers.</p>
              <Link className="link-arrow" to="/medical-treatment">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>
              Four steps. <em>Dedicated care coordination.</em>
            </h2>
          </div>
          <div className="grid-4 steps">
            <div>
              <div className="step-num">01</div>
              <h3>Tell us your goals</h3>
              <p>Share what you need and your preferred dates in a free care coordination consultation.</p>
            </div>
            <div>
              <div className="step-num">02</div>
              <h3>Get matched</h3>
              <p>We introduce suitable licensed providers and arrange your appointments.</p>
            </div>
            <div>
              <div className="step-num">03</div>
              <h3>We plan your trip</h3>
              <p>Hotel, transfers and local transport, booked through trusted partners.</p>
            </div>
            <div>
              <div className="step-num">04</div>
              <h3>Care and follow up</h3>
              <p>Interpreter support on site and help staying connected after you return.</p>
            </div>
          </div>
          <div className="btn-row">
            <Link className="btn ghost" to="/how-it-works">
              The full process
            </Link>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container split">
          <div>
            <span className="eyebrow">Concierge</span>
            <h2 style={{ marginBottom: '20px' }}>
              Your stay, <em>handled.</em>
            </h2>
            <p className="lead">
              Airport pickup, comfortable hotels near your clinic, local transport and interpreters, arranged
              through trusted third-party partners so nothing is left to chance.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/concierge">
                Explore Concierge
              </Link>
            </div>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3 style={{ margin: '0' }}>Airport pickup</h3>
            </div>
            <div className="card">
              <h3 style={{ margin: '0' }}>Accommodation</h3>
            </div>
            <div className="card">
              <h3 style={{ margin: '0' }}>Local transport</h3>
            </div>
            <div className="card">
              <h3 style={{ margin: '0' }}>Interpreter support</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container split">
          <div>
            <span className="eyebrow">Why M</span>
            <h2 style={{ marginBottom: '20px' }}>
              A structured service, <em>not a single contact.</em>
            </h2>
            <p className="lead">
              Medical travel deserves more than a phone number. M is built around clear communication,
              transparent planning and a professional care coordination team, from first message to flight
              home.
            </p>
          </div>
          <ul className="check-list">
            <li>Fast, clear replies from a care coordination team</li>
            <li>A clear quote and plan before you book flights</li>
            <li>Licensed partner providers, introduced to you directly</li>
            <li>Support during your trip and after you return</li>
          </ul>
        </div>
      </section>
      <Cta />
    </>
  )
}
