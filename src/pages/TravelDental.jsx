import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs, Cta, ProofStrip } from '../components/Blocks'

export default function TravelDental() {
  return (
    <>
      <Seo
        title="Travel + Dental in China | Veneers with a City Break | M International Health"
        description="Dental veneers and dental care in China, planned around a city break. Real time with your chosen dentist, interpreter support, hotel and transfers coordinated by M."
        path="/travel-dental"
      />

      <section className="page-hero lattice">
        <div className="container split wide-left">
          <div>
            <Crumbs
              items={[
                ['Care Trips', null],
                ['Travel + Dental', null],
              ]}
            />
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Travel + Dental
            </span>
            <h1>
              Expert dental care, unhurried. <em>With a city break built in.</em>
            </h1>
            <p className="lead">
              Choose your dentist. Choose your dates. We coordinate consultations, visits, interpreter
              support, your hotel and transfers, so the whole trip runs on one clear plan.
            </p>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Real time with your dentist
              </span>
              <span>
                <span className="dot"></span>Interpreter at every visit
              </span>
              <span>
                <span className="dot"></span>Clear quote before you travel
              </span>
            </div>
          </div>
          <EnquiryForm
            name="lp-dental"
            title="Plan your dental trip"
            dark
            interest="dental-veneers"
            compact
          />
        </div>
      </section>
      <ProofStrip />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">How a dental trip works</span>
            <h2 style={{ marginBottom: '24px' }}>
              Four stages. <em>One plan.</em>
            </h2>
            <ul className="itinerary">
              <li>
                <b>Stage 1</b>
                <span>Consultation with your chosen dentist</span>
              </li>
              <li>
                <b>Stage 2</b>
                <span>Your dentist sets the treatment plan</span>
              </li>
              <li>
                <b>Stage 3</b>
                <span>Fitting visits, scheduled around rest and sightseeing</span>
              </li>
              <li>
                <b>Stage 4</b>
                <span>Final review, then home</span>
              </li>
            </ul>
            <p className="form-note">The number of visits depends on your dentist's plan.</p>
          </div>
          <div className="ph">
            <span>Photo: partner dental clinic</span>
          </div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we coordinate</span>
            <h2>
              Considered, <em>never rushed.</em>
            </h2>
          </div>
          <ul className="check-list cols">
            <li>Introductions to licensed partner dental clinics</li>
            <li>Consultation and visit scheduling</li>
            <li>Interpreter support at every appointment</li>
            <li>A comfortable hotel near your clinic</li>
            <li>Airport and clinic transfers</li>
            <li>Follow up support after you fly home</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Before you book</span>
            <h2>
              Ask every question <em>first.</em>
            </h2>
            <p className="lead">We help you get clear answers to all five before you travel.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="step-num">01</div>
              <h3>Who is my dentist?</h3>
              <p>Their background and licence, shared before you decide.</p>
            </div>
            <div className="card">
              <div className="step-num">02</div>
              <h3>What is the full plan?</h3>
              <p>Every stage, set out by your dentist.</p>
            </div>
            <div className="card">
              <div className="step-num">03</div>
              <h3>What is included?</h3>
              <p>A clear quote, so there are no surprises.</p>
            </div>
            <div className="card">
              <div className="step-num">04</div>
              <h3>How many visits?</h3>
              <p>So your trip length is planned properly.</p>
            </div>
            <div className="card">
              <div className="step-num">05</div>
              <h3>What about aftercare?</h3>
              <p>How follow up works once you are home.</p>
            </div>
            <div className="card" style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}>
              <h3 style={{ color: 'var(--ivory)', marginTop: '0' }}>Your answers start here</h3>
              <p style={{ color: 'var(--mist)' }}>Book a free care coordination consultation.</p>
              <Link className="btn" to="/free-consultation">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta title="Plan your dental trip." />
    </>
  )
}
