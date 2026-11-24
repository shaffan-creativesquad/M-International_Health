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
    'How does international patient coordination work?',
    'You begin with a short request or a free care coordination consultation. We assess what your case requires and put in writing a clear service plan and estimated costs. We then go on to coordinate each step for you (appointments, translation, travel, follow-up, etc).',
  ],
  [
    'Do I need to travel to China?',
    'Not necessarily. Our written medical second opinion is based on your records, so you can, in fact, stay at home. If you do decide to travel, we will coordinate your medical care in China for foreigners from your first appointment right through to your flight home.',
  ],
  [
    'Which services do you coordinate?',
    'We provide four core services: written medical second opinions, medical translation and interpreting, cross-border medical coordination for patients coming to China, and bespoke support for the more complex multi-specialty cases.',
  ],
  [
    'Are hospital and treatment costs included?',
    'No. Medical costs are paid directly to the hospital or clinic. You\'ll be given a full service plan and an estimate of costs prior to travel, and the hospital will then confirm the final treatment costs with you.',
  ],
  [
    'What support will I have in China?',
    'Your trip can include private airport pickup, five-star accommodation in the vicinity of your clinic, private local transport, and a dedicated bilingual coordinator. Travel and accommodation are arranged via established partners, so the healthcare in China is very much a calm, well-organized affair.',
  ],
  [
    'Do I need my medical records ready to start?',
    'No. You can request without records. Once we\'ve got a good understanding of what you\'re after, we\'ll let you know precisely what records you need to provide and how to securely pass them to us.',
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
        title="M International Health | Care Journeys to China, Every Step Coordinated"
        description="Health checkups, dental veneers and medical treatment in China, with dedicated care coordination, interpreter support and travel arranged for patients from the UK, Ireland and the Netherlands."
        path="/"
      />

      <section className="hero lattice">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">International patient coordination | China</span>
            <h1>
              Premium care in China. <em>Every step coordinated.</em>
            </h1>
            <p className="lead">
              M International Health connects international patients with licensed hospitals and clinics
              throughout China via a single dedicated team. Get a written second opinion from home, or
              experience healthcare in China with five-star accommodation, private transfers, and a bilingual
              coordinator to look after you.
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
                <span className="dot"></span>Dedicated bilingual coordinator
              </span>
              <span>
                <span className="dot"></span>Interpreter support
              </span>
              <span>
                <span className="dot"></span>Clear service plan and estimated costs before you travel
              </span>
            </div>
          </div>
          <img
            src="/assets/img/hero-banner.jpeg"
            alt="International patient care coordination"
            className="hero-banner-img"
          />
        </div>
      </section>

      <ProofStrip />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we help</span>
            <h2>
              Your care, from home <em>or in China.</em>
            </h2>
            <p className="lead">
              Start with a written second opinion without having to leave the house at all, or travel to China,
              with every appointment and every detail arranged for you.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon />
              <h3>From Home: Remote Services</h3>
              <p>
                No need to travel at all. You send us your records, and we arrange for a specialist in China to
                provide you with a written second opinion. We also deal with the translation of your medical
                records so that your reports are complete, accurate, and ready to be reviewed by the specialist.
              </p>
              <Link className="link-arrow" to="/free-consultation">
                Get a Second Opinion
              </Link>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>In China: Premium Care Trips</h3>
              <p>
                If you're planning a trip, we can arrange your full medical care in China for you from your very
                first appointment right through to your flight home. We'll arrange five-star accommodation,
                private transfers, and all the associated details around your dates so you can just focus on your
                care and have a proper trip.
              </p>
              <Link className="link-arrow" to="/free-consultation">
                Plan a Care Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Care trips</span>
            <h2>
              Where premium care meets <em>modern China.</em>
            </h2>
            <p className="lead">
              Two all-inclusive China medical trips, built around your dates and designed to be just as
              rewarding as the destination.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon />
              <h3>Medical Second Opinion</h3>
              <p>
                A written second opinion from a specialist in China on your existing diagnosis or treatment
                plan. Based entirely on your records — no travel and no video visit required.
              </p>
              <Link className="link-arrow" to="/travel-health-checkup">
                Get a second opinion
              </Link>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Cross-Border Medical Coordination</h3>
              <p>
                For patients planning to travel to China for care. Hospital and department direction,
                appointment coordination, record preparation, pre-travel arrangements, and on-site
                communication support — all in a written plan before any work begins.
              </p>
              <Link className="link-arrow" to="/cross-border-coordination">
                Plan your care in China
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Services we coordinate</span>
            <h2>
              From second opinions <em>to complex care.</em>
            </h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <Icon />
              <h3>Medical Second Opinion</h3>
              <p>
                A written second opinion from a specialist in China on your existing diagnosis or treatment plan.
                It's based on your records, with no travel and no video visit.
              </p>
              <Link className="link-arrow" to="/medical-treatment">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Medical Translation and Interpreting</h3>
              <p>
                Your existing records organized and indexed, with professional medical document translation and
                interpreting arranged when your case needs them. We assess and confirm the scope before anything
                starts.
              </p>
              <Link className="link-arrow" to="/medical-treatment">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon variant="gold" />
              <h3>Cross-Border Medical Coordination</h3>
              <p>
                For patients planning to travel to China for care. This covers hospital and department direction,
                appointment coordination, record preparation, pre-travel arrangements, and on-site communication
                support.
              </p>
              <Link className="link-arrow" to="/medical-treatment">
                Learn more
              </Link>
            </div>
            <div className="card">
              <Icon />
              <h3>Complex Case Coordination</h3>
              <p>
                Tailored support for cases involving multiple specialties, several hospitals, extensive treatment
                history, or complex admission and surgical pathways, with a written plan.
              </p>
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

      <section className="section dark">
        <div className="container split">
          <div>
            <span className="eyebrow">Concierge</span>
            <h2 style={{ marginBottom: '20px' }}>
              Five-star, <em>from arrival to departure.</em>
            </h2>
            <p className="lead">
              We take care of every single detail from the moment you arrive. A private driver will meet you at
              arrivals, five-star accommodation is arranged close to your clinic, and private transport will
              take you to all your appointments. You're accompanied throughout by a dedicated bilingual
              coordinator. All is arranged via established partners.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/concierge">
                Explore Concierge
              </Link>
            </div>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3 style={{ margin: '0' }}>Private Airport Pickup</h3>
            </div>
            <div className="card">
              <h3 style={{ margin: '0' }}>Five-Star Accommodation</h3>
            </div>
            <div className="card">
              <h3 style={{ margin: '0' }}>Private Local Transportation</h3>
            </div>
            <div className="card">
              <h3 style={{ margin: '0' }}>Dedicated Bilingual Coordinator</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container split">
          <div>
            <span className="eyebrow">Why choose M</span>
            <h2 style={{ marginBottom: '20px' }}>
              Your care in China, <em>in trusted hands.</em>
            </h2>
            <p className="lead">
              Cross-border medical services need more than just a phone number. M provides international
              healthcare coordination via a professional bilingual team, with clear communication, written
              plans, and a very high level of support from the very first message right through to you flying
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

      <section className="section">
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
