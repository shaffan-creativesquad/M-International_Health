import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Crumbs, Cta } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function ShenzhenHealthJourney() {
  return (
    <>
      <Seo
        title="Shenzhen Premium Health Journey | 5 Days / 4 Nights | M International Health"
        description="Experience Shenzhen with a premium health checkup and traditional Chinese wellness included. 5 days, 4 nights, small group of 4–6 guests, $2,999 per person. Five-star accommodation, private transportation and bilingual coordination included."
        path="/shenzhen-health-journey"
      />

      <section className="page-hero dark">
        <div className="container">
          <Crumbs items={[['Health Journeys', '/health-journeys'], ['Shenzhen Premium Health Journey', null]]} />
          <span className="eyebrow">Health Journeys · Shenzhen, China</span>
          <h1>
            Shenzhen Premium <em>Health Journey</em>
          </h1>
          <p className="lead">
            Five days in one of China's most forward-thinking cities, with a premium health checkup, a
            traditional Chinese wellness experience, and every detail arranged for you.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/free-consultation">
              Reserve Your Place
            </Link>
            <Link className="btn ghost" to="/free-consultation">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>5 Days / 4 Nights</h3>
              <p style={{ margin: 0 }}>A short trip with the full experience.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>4–6 Guests</h3>
              <p style={{ margin: 0 }}>A small group with personal attention.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px', color: 'var(--jade)' }}>$2,999 / person</h3>
              <p style={{ margin: 0 }}>Five-star stay, transfers, and guide included.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Shenzhen, China</h3>
              <p style={{ margin: 0 }}>A modern, vibrant city by the bay.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What's Included</span>
            <h2>
              Everything arranged, <em>so you can focus on the experience.</em>
            </h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Five-Star Accommodation</h3>
              <p>
                Four nights in a premium hotel in the heart of Shenzhen, selected for comfort, location,
                and easy access to your health appointments.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Private Airport Pickup</h3>
              <p>
                Met on arrival and driven straight to your hotel. No taxis, no waiting.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Private Transport</h3>
              <p>
                Airport transfers, hotel-to-clinic journeys and city travel in a private vehicle
                throughout your stay. No queues, no shared vehicles.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>English-Speaking Guide</h3>
              <p>
                A dedicated English-speaking guide for your city experiences, your dining and all
                the local highlights.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Dedicated Bilingual Coordination</h3>
              <p>
                Your coordination team works in both English and Chinese, manages your schedule and
                appointments, and is on hand throughout your stay.
              </p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Shenzhen Travel Experiences</h3>
              <p>
                Curated cultural and city experiences that will show you the real Shenzhen — a very
                modern, very vibrant city, far beyond the clinic.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Complimentary Premium Health Checkup</h3>
              <p>
                Full premium health checkup in Shenzhen included.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Complimentary Traditional Chinese Wellness</h3>
              <p>
                An authentic Traditional Chinese wellness session and one of the highlights of the
                trip, which you will definitely take away with you.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Reports and Follow-Up</h3>
              <p>
                We'll help you collect your checkup reports and keep you in touch with your provider
                once you're home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <img
            src="/assets/img/2.jpeg"
            alt="Modern Shenzhen skyline at night"
            className="section-img"
          />
          <div>
            <span className="eyebrow">Why Shenzhen</span>
            <h2 style={{ marginBottom: '20px' }}>
              A city built for <em>modern living.</em>
            </h2>
            <p>
              Shenzhen is one of China's most progressive cities, with some pretty striking
              architecture, five-star hotels, and a very much alive urban culture which many
              international visitors never get to see. That's why we picked Shenzhen as our first
              Health Journey city.
            </p>
            <ul className="check-list" style={{ marginTop: '24px' }}>
              <li>Modern healthcare and wellness options</li>
              <li>Outstanding hotels and dining</li>
              <li>Clean, modern and easy to explore</li>
              <li>Vibrant food, culture and contemporary city life</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container split">
          <div>
            <span className="eyebrow">Beyond the Clinic</span>
            <h2 style={{ marginBottom: '20px' }}>
              A real China experience, <em>designed for you.</em>
            </h2>
            <p>
              This isn't a medical trip with a hotel attached. It's a fully designed China experience
              with healthcare included. Your guide takes you to great food, local culture, and the
              highlights of Shenzhen, all planned around your appointments at a pace that suits you.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/free-consultation">
                Reserve Your Place
              </Link>
              <Link className="btn ghost" to="/concierge">
                Our Concierge
              </Link>
            </div>
          </div>
          <img
            src="/assets/img/3.jpeg"
            alt="Enjoying Shenzhen food and culture"
            className="section-img"
          />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Your Five Days</span>
            <h2>
              A sample <em>itinerary.</em>
            </h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              The exact schedule is confirmed once your group is set. Here is how a typical five-day
              Shenzhen Health Journey is structured.
            </p>
          </div>
          <ul className="itinerary" style={{ maxWidth: '760px', margin: '48px auto 0' }}>
            <li>
              <b>Day 1</b>
              <span>Arrive in Shenzhen; private airport pickup to your five-star hotel, then a welcome briefing with your coordinator.</span>
            </li>
            <li>
              <b>Day 2</b>
              <span>Premium health checkup, with private transfers. Afternoon city orientation with your guide.</span>
            </li>
            <li>
              <b>Day 3</b>
              <span>A full Shenzhen experience day, with curated cultural and dining experiences alongside your English-speaking guide.</span>
            </li>
            <li>
              <b>Day 4</b>
              <span>Enjoy a traditional Chinese wellness session, then free time to explore or rest.</span>
            </li>
            <li>
              <b>Day 5</b>
              <span>A relaxed morning, then a private transfer to Shenzhen airport for departure.</span>
            </li>
          </ul>
        </div>
      </section>

      <Cta
        title="Begin your Shenzhen Health Journey."
        text="Travel China. Return Healthier. Book a free care coordination consultation. We reply within one business day and will walk you through every detail of the trip."
      />
    </>
  )
}
