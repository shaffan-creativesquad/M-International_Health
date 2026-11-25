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
            Five days in one of China's most forward-thinking cities — with a premium health checkup, a
            traditional Chinese wellness experience, and every detail arranged for you.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/free-consultation">
              Book a Free Consultation
            </Link>
            <Link className="btn ghost" to="/concierge">
              Our Concierge
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>5 Days / 4 Nights</h3>
              <p style={{ margin: 0 }}>Short trip, full experience.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>4–6 Guests</h3>
              <p style={{ margin: 0 }}>Small group, personal attention.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px', color: 'var(--jade)' }}>$2,999 / person</h3>
              <p style={{ margin: 0 }}>All-inclusive. No hidden extras.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Shenzhen, China</h3>
              <p style={{ margin: 0 }}>Modern city, world-class care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What's included</span>
            <h2>
              Everything arranged, <em>so you just experience it.</em>
            </h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Five-Star Accommodation</h3>
              <p>
                Four nights in a premium hotel in the heart of Shenzhen, selected for comfort, location and
                proximity to your health facility.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Private Transportation</h3>
              <p>
                Airport transfers, hotel to clinic, and all Shenzhen travel in a private vehicle throughout
                your stay. No queuing, no shared rides.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>English-Speaking Guide</h3>
              <p>
                A dedicated English-speaking guide with you throughout — handling every conversation,
                every appointment and every local experience.
              </p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Shenzhen Travel Experiences</h3>
              <p>
                Curated cultural and city experiences that show you the real Shenzhen — a modern, vibrant
                city well beyond any clinic.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Complimentary Health Checkup</h3>
              <p>
                A premium comprehensive health checkup at a leading Shenzhen facility — included in the
                trip price, with no additional cost.
              </p>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Traditional Chinese Wellness</h3>
              <p>
                A complimentary authentic traditional Chinese wellness session — one of the highlights of
                the trip and an experience that stays with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <img
            src="/assets/img/beautiful-shanghai-skyline-at-night-modern-urban-b-2026-09-24-21-46-36-utc.jpg"
            alt="Modern Shenzhen skyline at night"
            className="section-img"
          />
          <div>
            <span className="eyebrow">Why Shenzhen</span>
            <h2 style={{ marginBottom: '20px' }}>
              A city built for <em>modern living.</em>
            </h2>
            <p>
              Shenzhen is one of China's most forward-thinking cities — home to world-class hospitals,
              five-star hotels and a vibrant urban culture that most international visitors never get to
              experience. Our first Health Journey is based here for a reason.
            </p>
            <ul className="check-list" style={{ marginTop: '24px' }}>
              <li>World-class medical and wellness facilities</li>
              <li>Outstanding modern hotels and dining</li>
              <li>Safe, clean and very easy to navigate</li>
              <li>Vibrant food, culture and contemporary city life</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container split">
          <div>
            <span className="eyebrow">Beyond the clinic</span>
            <h2 style={{ marginBottom: '20px' }}>
              A real China experience, <em>designed for you.</em>
            </h2>
            <p>
              This is not a medical trip with a hotel. It is a fully designed China experience with
              healthcare included. Your guide will take you to great food, local culture and the highlights
              of Shenzhen — all woven around your clinic appointments at a pace that suits you.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/free-consultation">
                Book a Free Consultation
              </Link>
              <Link className="btn ghost" to="/concierge">
                Our Concierge
              </Link>
            </div>
          </div>
          <img
            src="/assets/img/enthusiastic-woman-taking-selfie-with-food-in-rest-2026-09-22-12-40-57-utc.jpg"
            alt="Enjoying Shenzhen food and culture"
            className="section-img"
          />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Your five days</span>
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
              <span>Arrive in Shenzhen. Private airport pickup to your five-star hotel. Welcome briefing with your coordinator.</span>
            </li>
            <li>
              <b>Day 2</b>
              <span>Premium health checkup at a leading Shenzhen facility. Private transfers. Afternoon city orientation with your guide.</span>
            </li>
            <li>
              <b>Day 3</b>
              <span>Full Shenzhen experience day. Curated cultural and dining experiences with your English-speaking guide.</span>
            </li>
            <li>
              <b>Day 4</b>
              <span>Traditional Chinese wellness session. Free time for personal exploration or rest.</span>
            </li>
            <li>
              <b>Day 5</b>
              <span>Relaxed morning. Private transfer to Shenzhen airport for departure.</span>
            </li>
          </ul>
        </div>
      </section>

      <Cta
        title="Begin your Shenzhen Health Journey."
        text="Book a free care coordination consultation. We reply within one business day and will walk you through every detail of the trip."
      />
    </>
  )
}
