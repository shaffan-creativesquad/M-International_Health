import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs, Cta, Faq } from '../components/Blocks'
import { Icon } from '../components/Icons'

const faqItems = [
  [
    'Is this an online specialist medical consultation?',
    "It's a written, records-based opinion. You request a specialist second opinion online, and you get the specialist's written response (no video or phone call).",
  ],
  [
    "Can I get a second opinion on treatment plan options I've already been offered?",
    "Yes. Let us know what you've been offered and what your decision is about. A specialist will then go through your treatment plan questions against your records.",
  ],
  [
    'Can I get a second opinion for medical diagnosis?',
    'Yes. If you already have a diagnosis, then a specialist in China will look at your records and give you a written opinion.',
  ],
  [
    'Is this a medical consultation with Chinese doctors?',
    'This is a written review by a qualified specialist in China based on your records. An online medical specialist opinion is essentially your own records being reviewed by an expert, with you not having to travel or attend a face-to-face appointment.',
  ],
  [
    'How is M different from other medical second opinion services?',
    'We deal with the bits that normally hold up a cross-border case (the record organisation, the translation assessment and getting your case to the right specialist). You get an expert medical opinion online without having to do any of that yourself.',
  ],
  [
    'Is this the same as an online doctor second opinion?',
    "It's the same, just written up based on your records and carried out by a qualified professional who will look at your existing records. We'll work around those.",
  ],
]

export default function TravelHealthCheckup() {
  return (
    <>
      <Seo
        title="Medical Second Opinion from China | M International Health"
        description="Get a written medical second opinion from a specialist in China. Records-based, no travel required. M International Health organises your records and coordinates the opinion."
        path="/travel-health-checkup"
      />

      <section className="page-hero lattice">
        <div className="container split wide-left">
          <div>
            <Crumbs items={[['Care Trips', null], ['Medical Second Opinion', null]]} />
            <span className="eyebrow">Medical second opinion | No travel required</span>
            <h1>
              Your online medical second opinion,{' '}
              <em>from a specialist in China.</em>
            </h1>
            <p className="lead">
              You already have a diagnosis or treatment plan. We organise your records, assess what needs
              translating, and coordinate a written medical second opinion from a specialist in China.
              Everything is based on your records so that you can stay at home.
            </p>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Records-based written opinion
              </span>
              <span>
                <span className="dot"></span>No travel, no video visit
              </span>
              <span>
                <span className="dot"></span>Reply within 2 business days
              </span>
            </div>
          </div>
          <EnquiryForm
            name="lp-second-opinion"
            title="Request your second opinion"
            dark
            interest="medical-second-opinion"
            compact
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>
              An independent medical opinion, <em>in four steps.</em>
            </h2>
          </div>
          <div className="grid-4 steps">
            <div>
              <div className="step-num">01</div>
              <h3>Send a short request</h3>
              <p>It takes about two minutes, and you don't need any records to start.</p>
            </div>
            <div>
              <div className="step-num">02</div>
              <h3>We reply within 2 business days</h3>
              <p>With what's missing and the next step.</p>
            </div>
            <div>
              <div className="step-num">03</div>
              <h3>We organise your records</h3>
              <p>And confirm any translation in writing first.</p>
            </div>
            <div>
              <div className="step-num">04</div>
              <h3>Written opinion delivered</h3>
              <p>We coordinate your second opinion with doctors in China and provide a written response.</p>
            </div>
          </div>
          <p className="form-note" style={{ textAlign: 'center', marginTop: '20px' }}>
            Timing depends on your records and the specialty involved.
          </p>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What it includes</span>
            <h2>
              A fully coordinated specialist <em>medical second opinion.</em>
            </h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Case Assessment</h3>
              <p>We review your request and tell you what's missing.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Records Organised</h3>
              <p>We sort and index your files for a specialist review.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Translation Assessment</h3>
              <p>We confirm what needs translating and provide a quote before any work starts.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Specialty Direction</h3>
              <p>We send your case to the right specialty for review by a medical specialist in China.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Written Opinion</h3>
              <p>Delivered in writing so that you can share it with your own doctor.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>End-to-End Coordination</h3>
              <p>We manage every step through to delivery.</p>
            </div>
          </div>
          <p className="form-note" style={{ marginTop: '20px' }}>
            Professional medical translation is quoted separately, if your records need it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why choose M</span>
            <h2>
              Reassurance from <em>a specialist in China.</em>
            </h2>
            <p className="lead">
              An international medical second opinion gives you the view of an international medical specialist
              working in a different healthcare system. A China medical second opinion brings that perspective
              to you in writing rather than requiring you to travel there to see the specialist.
            </p>
          </div>
          <ul className="check-list">
            <li>A medical expert second opinion based on your existing records</li>
            <li>Records organised so the specialist can read them properly</li>
            <li>Confirm translation needs before anything is translated</li>
            <li>Scope and fees confirmed in writing before work begins</li>
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="notice gold">
            M International Health manages the process. We are not a medical provider, and we do not diagnose
            or make any treatment recommendations. A qualified medical professional will provide the written
            opinion. A second opinion is not a substitute for the care you would normally receive from your own
            doctor.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions.</h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      <Cta
        title="Get a second view on your care."
        text="Request your online medical second opinion today. We reply within 2 business days."
      />
    </>
  )
}
