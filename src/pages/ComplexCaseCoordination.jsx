import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs, Cta, Faq } from '../components/Blocks'
import { Icon } from '../components/Icons'

const faqItems = [
  [
    'What does medical assistance in China for foreigners include?',
    "It will depend on your individual case. Coordination can cover hospital and department direction, appointment coordination, record preparation, pre-travel arrangements, on-site support, test visits, and next steps. We'll confirm the scope in writing.",
  ],
  [
    'Is this a fixed package?',
    'No. We look at your individual case requirements and put together a written plan and quote prior to any work commencing.',
  ],
  [
    'How do you go about choosing the right hospital or the right department?',
    "We start with your records and the question you're trying to answer, then work out which specialty and which hospital type would be the one to deal with that case.",
  ],
  [
    'Will someone be standing by me in China?',
    'Yes. On-site communication and process support can be included in your plan. Professional medical interpreting is quoted separately if required.',
  ],
  [
    'Are hospital and medical costs included?',
    'No. You pay the registration, consultations, tests, treatment, flights, and accommodation directly to the providers. Our service fees are separate.',
  ],
  [
    'Can you guarantee that a hospital will accept my case?',
    "No. That depends on the hospital and the specialist. We'll prepare your request appropriately, communicate with them professionally, and then follow through.",
  ],
]

export default function ComplexCaseCoordination() {
  return (
    <>
      <Seo
        title="Complex Case Coordination in China | M International Health"
        description="Planning to travel to China for treatment? M International Health coordinates hospital direction, appointments, record preparation, and on-site support. Written plan before any work begins."
        path="/complex-case-coordination"
      />

      <section className="page-hero lattice">
        <div className="container split wide-left">
          <div>
            <Crumbs items={[['Treatment', null], ['Complex Case Coordination', null]]} />
            <span className="eyebrow">Cross-border medical coordination | For patients travelling to China</span>
            <h1>
              Medical assistance in China for foreigners,{' '}
              <em>from the first step to the last.</em>
            </h1>
            <p className="lead">
              If you're planning to go to China for treatment, we'll advise you on exactly which services your
              case requires — hospital and department direction, appointment coordination, record preparation,
              and on-site support. You'll get a written plan and a quote prior to any work commencing.
            </p>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Written plan before work begins
              </span>
              <span>
                <span className="dot"></span>On-site communication support
              </span>
              <span>
                <span className="dot"></span>Reply within 2 business days
              </span>
            </div>
          </div>
          <EnquiryForm
            name="lp-complex-case"
            title="Plan your care in China"
            dark
            interest="complex-case"
            compact
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>
              International medical coordination, <em>in four steps.</em>
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
              <h3>We assess your case</h3>
              <p>We reply within 2 business days and assess which services your case needs.</p>
            </div>
            <div>
              <div className="step-num">03</div>
              <h3>You receive a written plan</h3>
              <p>A written plan and quote, confirmed before any work begins.</p>
            </div>
            <div>
              <div className="step-num">04</div>
              <h3>Full coordination begins</h3>
              <p>We coordinate your appointments, pre-travel preparation, and on-site support in China.</p>
            </div>
          </div>
          <p className="form-note" style={{ textAlign: 'center', marginTop: '20px' }}>
            Hospitals and specialists decide whether and when they accept a case.
          </p>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What it includes</span>
            <h2>
              Every stage of your care, <em>carefully coordinated.</em>
            </h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Hospital Direction</h3>
              <p>We identify the right hospital type and department for your case through our hospital coordination services.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Appointment Coordination</h3>
              <p>We prepare and follow through on hospital appointments on your behalf.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Record Preparation</h3>
              <p>We organize your records so the hospital's international patient office can review them.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Pre-Travel Arrangements</h3>
              <p>We complete preparations before you book anything.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>On-Site Support</h3>
              <p>Communication and process support during your visit in China.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Test Visits and Next Steps</h3>
              <p>Coordinate medical appointments for test visits and arrange follow-up.</p>
            </div>
          </div>
          <p className="form-note" style={{ marginTop: '20px' }}>
            Professional translation and interpreting are assessed and quoted separately when required.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why choose M</span>
            <h2>
              Care in China, <em>without the complexity.</em>
            </h2>
            <p className="lead">
              Different languages, unfamiliar hospital systems, and the sheer complexity of the procedures can
              all have a bearing on the speed of care. Our International Patient Services in China take that
              very complex situation and turn it into a clear written plan so that medical services in China for
              foreigners are a very structured and manageable process.
            </p>
          </div>
          <ul className="check-list">
            <li>Services tailored to what your case actually needs</li>
            <li>Requests prepared properly for international patient offices</li>
            <li>Waiting time between appointments is not billed as daily support</li>
            <li>Scope and fees confirmed in writing before work begins</li>
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="notice gold">
            M International Health runs the process. We are not a medical provider in any way and do not
            diagnose or make any treatment recommendations. The hospitals and the specialists themselves decide
            whether they will take the case. Medical, travel, and third-party costs are all separate and are
            paid directly to the providers.
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
        title="Start your medical assistance in China for foreigners."
        text="Request your written care plan today. We reply within 2 business days."
      />
    </>
  )
}
