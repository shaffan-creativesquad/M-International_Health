import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Crumbs, Cta } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function Concierge() {
  return (
    <>
      <Seo
        title="International Medical Concierge | Five-Star Care in China | M International Health"
        description="Private airport pickup, five-star accommodation, private local transport, and a dedicated bilingual coordinator. M International Health arranges everything through trusted partners."
        path="/concierge"
      />

      <section className="page-hero dark">
        <div className="container">
          <Crumbs items={[['Concierge', null]]} />
          <span className="eyebrow">International medical concierge</span>
          <h1>
            Five-star care, <em>from arrival to departure.</em>
          </h1>
          <p className="lead">
            Our international medical concierge handles every aspect of your stay in China — from a private
            driver on arrival to five-star accommodation and a dedicated bilingual coordinator who is with
            you throughout.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/free-consultation">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width arrival image */}
      <section className="section tight">
        <div className="container">
          <img
            src="/assets/img/business-colleagues-arriving-with-luggage-at-workp-2026-09-23-21-38-41-utc.JPG"
            alt="Private arrival and transfer — premium concierge service in China"
            className="section-img"
            style={{ maxHeight: '500px', width: '100%' }}
          />
        </div>
      </section>

      {/* Four core concierge services — 2×2 premium cards */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="eyebrow">What we arrange</span>
            <h2>
              Every detail, <em>taken care of.</em>
            </h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon variant="gold" />
              <h3>Private Airport Pickup</h3>
              <p>
                A private driver meets you at arrivals and takes you straight to your five-star hotel. No
                queuing for taxis, no navigating unfamiliar transport — just a smooth, comfortable arrival
                from the moment you land.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Five-Star Accommodation</h3>
              <p>
                Premium hotels selected for comfort, location and proximity to your clinic or hospital. We
                arrange check-in, room preferences and any special requirements in advance so everything is
                ready when you arrive.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Private Local Transportation</h3>
              <p>
                Private transfers to every appointment, on your schedule. No shared vehicles, no waiting
                around — door-to-door service for every clinic visit, every day of your stay.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Dedicated Bilingual Coordinator</h3>
              <p>
                Your coordinator is with you throughout — translating consultations, communicating with the
                medical team, answering every question and ensuring the whole experience runs smoothly from
                arrival to departure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City + destination section */}
      <section className="section">
        <div className="container split">
          <img
            src="/assets/img/beautiful-shanghai-skyline-at-night-modern-urban-b-2026-09-24-21-46-36-utc.jpg"
            alt="Modern China city skyline"
            className="section-img"
          />
          <div>
            <span className="eyebrow">Your destination</span>
            <h2 style={{ marginBottom: '20px' }}>
              Premium hotels, <em>close to your clinic.</em>
            </h2>
            <p>
              Every accommodation we arrange is selected for quality, comfort and proximity to your
              medical facility. You will never be far from your clinic, and you will always be staying
              somewhere that reflects the standard of the trip.
            </p>
            <ul className="check-list" style={{ marginTop: '24px' }}>
              <li>Five-star hotels only</li>
              <li>Close to your clinic or hospital</li>
              <li>Pre-arranged with your arrival details</li>
              <li>Itinerary shared with you before departure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Also included</span>
            <h2>
              More ways we <em>look after you.</em>
            </h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon />
              <h3>Itinerary Planning</h3>
              <p>
                One clear schedule covering your care, accommodation, transfers and any cultural or dining
                experiences — shared with you in advance so you know exactly what to expect.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Companion Travel</h3>
              <p>
                Bringing family or a companion? We plan their stay alongside yours — same hotels, same
                private transfers, the same level of care for everyone travelling with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="Experience our international medical concierge."
        text="Book a free care coordination consultation. We reply within one business day and will walk you through every detail."
      />
    </>
  )
}
