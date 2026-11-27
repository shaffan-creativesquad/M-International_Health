import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Cta, ProofStrip, Faq } from '../components/Blocks'
import { Icon } from '../components/Icons'

const faqItems = [
  [
    'What does M Global Health, Inc. do?',
    'M Global Health, Inc. is your private concierge in China — covering Business, Lifestyle and Health. We arrange executive business visits and industry connections, premium lifestyle and travel experiences, and healthcare coordination with licensed providers in China, all with a dedicated bilingual team.',
  ],
  [
    'What business services does M arrange?',
    'We curate executive visits, factory tours, industry introductions and business connections across China. Everything is arranged to your brief — meetings, itinerary, transport and accommodation — so you can focus on the relationship, not the logistics.',
  ],
  [
    'What lifestyle experiences does M offer?',
    'Private travel, premium hotels, fine dining reservations, cultural experiences, local guides and bespoke transportation — we arrange China at its very best, tailored to your interests and schedule.',
  ],
  [
    'What is a China Health Journey?',
    'A China Health Journey is a fully arranged premium trip to China that combines travel, wellness and healthcare experiences. Our first confirmed journey is the Shenzhen Premium Health Journey — 5 days, 4 nights, small group, $2,999 per person — which includes five-star accommodation, private transportation, an English-speaking guide, Shenzhen city experiences, a complimentary premium health checkup and a complimentary traditional Chinese wellness experience.',
  ],
  [
    'Which medical services do you coordinate?',
    'We coordinate executive health checkups, dental, wellness experiences, written medical second opinions, medical translation and interpreting, cross-border medical coordination for patients coming to China, and bespoke support for complex multi-specialty cases.',
  ],
  [
    'Do I need to travel to China for medical services?',
    'Not necessarily. Our written medical second opinion is based on your records, so you can stay at home. If you do decide to travel, we will coordinate your medical care in China from your first appointment right through to your flight home.',
  ],
  [
    'What support will I have on the ground in China?',
    'Your trip includes private airport pickup, five-star accommodation, private local transport, and a dedicated bilingual coordinator throughout — whether you are here for business, lifestyle, healthcare or a combination of all three.',
  ],
  [
    'Are hospital and treatment costs included in the Health Journey price?',
    'The complimentary health checkup is included in the $2,999 per person Health Journey price. Any additional treatment or specialist consultations are arranged and paid separately, directly with the hospital or clinic.',
  ],
]

export default function Home() {
  return (
    <>
      <Seo
        title="M Global Health, Inc. | Your Private Concierge in China"
        description="M Global Health, Inc. is your private concierge in China — Business, Lifestyle and Health. Curated business connections, premium lifestyle experiences and world-class healthcare, all arranged for you."
        path="/"
      />

      <section className="hero lattice">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Business · Lifestyle · Health</span>
            <h1>
              Your Private Concierge <em>in China.</em>
            </h1>
            <p className="lead">
              M Global Health, Inc. is your private concierge in China — curating executive business
              connections, premium lifestyle experiences, and world-class healthcare, with a dedicated
              bilingual team at every step.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/free-consultation">
                Book a Free Consultation
              </Link>
              <Link className="btn ghost" to="/shenzhen-health-journey">
                View Health Journeys
              </Link>
            </div>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Business concierge
              </span>
              <span>
                <span className="dot"></span>Lifestyle experiences
              </span>
              <span>
                <span className="dot"></span>Health coordination
              </span>
            </div>
          </div>
          <img
            src="/assets/img/1.jpeg"
            alt="Premium China health journey"
            className="hero-banner-img"
          />
        </div>
      </section>

      <ProofStrip />

      {/* Three Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What M does</span>
            <h2>
              One concierge. <em>Three pillars.</em>
            </h2>
            <p className="lead">
              Whether you are in China for business, travel or healthcare — or all three — M arranges every
              detail so you can focus on the experience.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon variant="gold" />
              <h3>Business</h3>
              <p>
                Curated industry visits, executive introductions, factory tours and business connections —
                arranged with the precision your schedule demands.
              </p>
            </div>
            <div className="card">
              <Icon />
              <h3>Lifestyle</h3>
              <p>
                Private travel, premium hotels, fine dining, local cultural experiences and bespoke
                transportation — China at its very best.
              </p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Health</h3>
              <p>
                Executive health checkups, dental, wellness and full medical coordination — with licensed
                providers and a bilingual coordinator throughout.
              </p>
              <Link className="link-arrow" to="/shenzhen-health-journey">View Health Journeys</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Health Journey */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Health Journeys</span>
            <h2>
              Experience China. <em>Return healthier.</em>
            </h2>
            <p className="lead">
              Our China Health Journeys combine premium travel, Shenzhen city experiences and healthcare —
              all in one seamless, fully arranged trip.
            </p>
          </div>
          <div className="split" style={{ alignItems: 'start', gap: '48px' }}>
            <img
              src="/assets/img/2.jpeg"
              alt="Shenzhen city skyline at night"
              className="section-img"
            />
            <div>
              <span className="eyebrow" style={{ color: 'var(--jade)' }}>Now Available</span>
              <h3 style={{ fontSize: '1.7rem', margin: '8px 0 4px' }}>Shenzhen Premium Health Journey</h3>
              <p style={{ fontWeight: 700, color: 'var(--jade)', margin: '0 0 20px' }}>
                5 Days / 4 Nights &nbsp;·&nbsp; Small Group: 4–6 Guests &nbsp;·&nbsp; $2,999 per person
              </p>
              <ul className="check-list">
                <li>Five-star accommodation and private transportation throughout</li>
                <li>English-speaking guide and dedicated bilingual coordination</li>
                <li>Complimentary premium health checkup at a leading Shenzhen facility</li>
                <li>Complimentary traditional Chinese wellness experience</li>
                <li>Curated Shenzhen city experiences included</li>
              </ul>
              <div className="btn-row">
                <Link className="btn" to="/shenzhen-health-journey">
                  View the Journey
                </Link>
                <Link className="btn ghost" to="/free-consultation">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City experience visual */}
      <section className="section bg-sand">
        <div className="container split">
          <div>
            <span className="eyebrow">Beyond the clinic</span>
            <h2 style={{ marginBottom: '20px' }}>
              A real China experience, <em>not just a medical trip.</em>
            </h2>
            <p className="lead">
              Our Health Journeys are designed to show you modern China at its best — the food, the culture,
              the city — with healthcare woven into an experience you will actually remember.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/shenzhen-health-journey">
                Explore Shenzhen
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

      {/* Medical Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Health</span>
            <h2>
              Medical care in China, <em>fully coordinated.</em>
            </h2>
            <p className="lead">
              From executive health checkups and dental to written second opinions and complex care
              coordination — M handles every stage so you don't have to.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon />
              <h3>Medical Second Opinion</h3>
              <p>
                A written second opinion from a specialist in China on your existing diagnosis or treatment
                plan — based entirely on your records. No travel required.
              </p>
              <Link className="link-arrow" to="/travel-health-checkup">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Cross-Border Medical Coordination</h3>
              <p>
                For patients planning to travel to China for care. Hospital direction, appointment
                coordination, record preparation, pre-travel arrangements and on-site support — all in a
                written plan before anything starts.
              </p>
              <Link className="link-arrow" to="/cross-border-coordination">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Medical Translation and Interpreting</h3>
              <p>
                Your records organized and indexed, with professional medical document translation and
                interpreting arranged when your case needs it. Scope confirmed before anything starts.
              </p>
              <Link className="link-arrow" to="/medical-translation">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon />
              <h3>Complex Case Coordination</h3>
              <p>
                Tailored support for cases involving multiple specialties, several hospitals, extensive
                treatment history or complex admission pathways — with a written plan throughout.
              </p>
              <Link className="link-arrow" to="/complex-case-coordination">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>
              Four steps to a seamless <em>China experience.</em>
            </h2>
          </div>
          <div className="grid-4 steps">
            <div>
              <div className="step-num">01</div>
              <h3>Tell Us What You Need</h3>
              <p>Share your goals — business, lifestyle, health or all three — in a free consultation.</p>
            </div>
            <div>
              <div className="step-num">02</div>
              <h3>We Build Your Plan</h3>
              <p>Your concierge team arranges connections, experiences and appointments to match your brief.</p>
            </div>
            <div>
              <div className="step-num">03</div>
              <h3>Review Before You Travel</h3>
              <p>You receive your full itinerary and estimated costs in writing before committing to anything.</p>
            </div>
            <div>
              <div className="step-num">04</div>
              <h3>Travel with Full Support</h3>
              <p>Your bilingual coordinator is with you on the ground and follows up once you return.</p>
            </div>
          </div>
          <div className="btn-row">
            <Link className="btn ghost" to="/how-it-works">
              The full process
            </Link>
          </div>
        </div>
      </section>

      {/* Concierge - visually premium with image */}
      <section className="section dark">
        <div className="container split">
          <div>
            <span className="eyebrow">Concierge</span>
            <h2 style={{ marginBottom: '20px' }}>
              Private, <em>seamless, five-star.</em>
            </h2>
            <p className="lead">
              Whether you are here on business, for a lifestyle experience or for healthcare, your M
              concierge handles every detail — from private airport pickup and five-star accommodation to
              curated itineraries and a bilingual coordinator throughout your stay.
            </p>
            <ul className="check-list" style={{ marginTop: '24px' }}>
              <li>Private Airport Pickup and Transfers</li>
              <li>Five-Star Accommodation</li>
              <li>Curated Business and Lifestyle Itineraries</li>
              <li>Dedicated Bilingual Coordinator</li>
            </ul>
            <div className="btn-row">
              <Link className="btn" to="/concierge">
                Explore Concierge
              </Link>
            </div>
          </div>
          <img
            src="/assets/img/4.jpeg"
            alt="Private arrival and concierge service in China"
            className="section-img"
          />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why choose M</span>
            <h2 style={{ marginBottom: '20px' }}>
              Your China experience, <em>in trusted hands.</em>
            </h2>
            <p className="lead">
              M is a private, bilingual concierge for discerning visitors to China. Whether your priority
              is business, lifestyle or health, we bring the same level of planning, communication and
              on-the-ground support to every engagement.
            </p>
          </div>
          <ul className="check-list">
            <li>Personal bilingual concierge for every engagement</li>
            <li>Clear itinerary and estimated costs confirmed before you travel</li>
            <li>Trusted partners across business, travel and healthcare</li>
            <li>Full support throughout your stay and after you return</li>
          </ul>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>
              Your questions, <em>answered.</em>
            </h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      <Cta
        title="Ready for your private China experience?"
        text="Talk to our concierge team about Business, Lifestyle or Health — or all three. We reply within one business day."
      />
    </>
  )
}
