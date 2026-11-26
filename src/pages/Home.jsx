import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Cta, ProofStrip, Faq } from '../components/Blocks'
import { Icon } from '../components/Icons'

const faqItems = [
  [
    'What does M International Health do?',
    'M International Health is an international healthcare coordination service for international patients seeking care in China. We organize your records, coordinate second opinions, appointments, translation, and travel, and support you throughout. We are not a medical provider. Licensed healthcare professionals make all medical decisions.',
  ],
  [
    'What is a China Health Journey?',
    'A China Health Journey is a fully arranged premium trip to China that combines travel, wellness and healthcare experiences. Our first confirmed journey is the Shenzhen Premium Health Journey — 5 days, 4 nights, small group, $2,999 per person — which includes five-star accommodation, private transportation, an English-speaking guide, Shenzhen city experiences, a complimentary premium health checkup and a complimentary traditional Chinese wellness experience.',
  ],
  [
    'Do I need to travel to China?',
    'Not necessarily. Our written medical second opinion is based on your records, so you can stay at home. If you do decide to travel, we will coordinate your medical care in China from your first appointment right through to your flight home.',
  ],
  [
    'Which medical services do you coordinate?',
    'We coordinate four core medical services: written medical second opinions, medical translation and interpreting, cross-border medical coordination for patients coming to China, and bespoke support for complex multi-specialty cases.',
  ],
  [
    'Are hospital and treatment costs included in the Health Journey price?',
    'The complimentary health checkup is included in the $2,999 per person Health Journey price. Any additional treatment or specialist consultations are arranged and paid separately, directly with the hospital or clinic.',
  ],
  [
    'What support will I have in China?',
    'Your trip includes private airport pickup, five-star accommodation, private local transport, and a dedicated bilingual coordinator. For Health Journeys, your English-speaking guide is with you throughout the entire experience.',
  ],
  [
    'Do I need my medical records ready to start?',
    'No. You can enquire without records. Once we understand what you need, we will tell you exactly what records to provide and how to pass them securely.',
  ],
  [
    'Can you guarantee that a hospital will accept my case?',
    'No. Hospitals and specialists decide whether and when they accept a case. We prepare your request properly, communicate professionally, and follow through. This is how we approach cross-border medical services.',
  ],
]

export default function Home() {
  return (
    <>
      <Seo
        title="M International Health | Travel China. Return Healthier."
        description="Premium China Health Journeys and medical coordination for international patients. Five-star accommodation, private transportation, bilingual coordination and healthcare — all arranged for you."
        path="/"
      />

      <section className="hero lattice">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Travel China. Return Healthier.</span>
            <h1>
              Premium China health journeys. <em>Every step coordinated.</em>
            </h1>
            <p className="lead">
              M International Health connects international patients with premium health journeys and licensed
              hospitals throughout China — with five-star accommodation, private transportation and a dedicated
              bilingual coordinator at every step.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/shenzhen-health-journey">
                Our Health Journeys
              </Link>
              <Link className="btn ghost" to="/free-consultation">
                Free Consultation
              </Link>
            </div>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Dedicated bilingual coordinator
              </span>
              <span>
                <span className="dot"></span>Five-star accommodation
              </span>
              <span>
                <span className="dot"></span>Written plan and costs before you travel
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
            <span className="eyebrow">Medical Services</span>
            <h2>
              From second opinions <em>to complex care.</em>
            </h2>
            <p className="lead">
              Need a specialist's view from home, or full coordination for a care trip to China? We cover
              every stage of international patient care.
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
              Four steps to seamless <em>international patient coordination.</em>
            </h2>
          </div>
          <div className="grid-4 steps">
            <div>
              <div className="step-num">01</div>
              <h3>Tell Us Your Goals</h3>
              <p>Share your needs and preferred dates in a free consultation.</p>
            </div>
            <div>
              <div className="step-num">02</div>
              <h3>Get Matched</h3>
              <p>We connect you with licensed providers and book your appointments.</p>
            </div>
            <div>
              <div className="step-num">03</div>
              <h3>Receive Your Plan</h3>
              <p>You'll receive your plan and estimated costs in writing before you commit.</p>
            </div>
            <div>
              <div className="step-num">04</div>
              <h3>Travel, Care and Follow-Up</h3>
              <p>On-site bilingual support and follow-up after you return home.</p>
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
              Five-star, <em>from arrival to departure.</em>
            </h2>
            <p className="lead">
              A private driver meets you at arrivals, five-star accommodation is arranged close to your
              clinic, and private transport takes you to every appointment. You are accompanied throughout
              by a dedicated bilingual coordinator.
            </p>
            <ul className="check-list" style={{ marginTop: '24px' }}>
              <li>Private Airport Pickup</li>
              <li>Five-Star Accommodation</li>
              <li>Private Local Transportation</li>
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
              Your care in China, <em>in trusted hands.</em>
            </h2>
            <p className="lead">
              Cross-border medical services need more than just a phone number. M provides international
              healthcare coordination via a professional bilingual team, with clear communication, written
              plans, and a high level of support from the very first message right through to you flying
              home.
            </p>
          </div>
          <ul className="check-list">
            <li>Fast, clear replies from your international patient coordination team</li>
            <li>A clear service plan and estimated costs before you book flights</li>
            <li>Licensed partner providers, introduced to you directly</li>
            <li>Support throughout your trip and after you return</li>
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
        title="Ready to begin your China health journey?"
        text="Book a free care coordination consultation with our international patient coordination team. We reply within one business day."
      />
    </>
  )
}
