import Seo from '../components/Seo'
import EnquiryForm from '../components/EnquiryForm'
import { Crumbs, Cta, ProofStrip } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function TravelHealthCheckup() {
  return (
    <>
      <Seo
        title="Travel + Health Checkup in China | M International Health"
        description="Combine a trip to China with a comprehensive health check at a partner hospital. Appointments, interpreter, hotel and transfers coordinated for you. Free care coordination consultation."
        path="/travel-health-checkup"
      />

      <section className="page-hero lattice">
        <div className="container split wide-left">
          <div>
            <Crumbs
              items={[
                ['Care Trips', null],
                ['Travel + Health Checkup', null],
              ]}
            />
            <span className="eyebrow">Travel + Health Checkup</span>
            <h1>
              Your full health check, <em>done properly in one considered trip.</em>
            </h1>
            <p className="lead">
              A comprehensive health check at a partner hospital in China, planned around your travel dates,
              with time left to explore. Every appointment, interpreter and transfer coordinated by M.
            </p>
            <div className="trust-row">
              <span>
                <span className="dot"></span>Results explained in English
              </span>
              <span>
                <span className="dot"></span>Dedicated care coordination
              </span>
              <span>
                <span className="dot"></span>Clear quote before you travel
              </span>
            </div>
          </div>
          <EnquiryForm
            name="lp-checkup"
            title="Plan your checkup trip"
            dark
            interest="health-checkup"
            compact
          />
        </div>
      </section>
      <ProofStrip />
      <section className="section">
        <div className="container split">
          <div className="ph">
            <span>Photo: partner hospital exterior or reception</span>
          </div>
          <div>
            <span className="eyebrow">What your trip looks like</span>
            <h2 style={{ marginBottom: '24px' }}>
              Three focused days. <em>The rest is yours.</em>
            </h2>
            <ul className="itinerary">
              <li>
                <b>Day 1</b>
                <span>Arrive, airport pickup and settle into your hotel</span>
              </li>
              <li>
                <b>Day 2</b>
                <span>Your health check, with an interpreter by your side</span>
              </li>
              <li>
                <b>Day 3</b>
                <span>Results reviewed and explained in English</span>
              </li>
              <li>
                <b>After</b>
                <span>Explore the city, then fly home with your report</span>
              </li>
            </ul>
            <p className="form-note">Exact timing depends on the hospital package you choose.</p>
          </div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What a checkup can include</span>
            <h2>
              Thorough, organised, <em>clearly explained.</em>
            </h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Lab tests</h3>
              <p>Blood and urine panels.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Imaging</h3>
              <p>Ultrasound, X ray or CT, depending on the package.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Heart screening</h3>
              <p>ECG and related checks.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Specialist review</h3>
              <p>A doctor consultation on your results.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>English report</h3>
              <p>Your results explained in English.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Follow up</h3>
              <p>Help staying connected after you return.</p>
            </div>
          </div>
          <p className="form-note" style={{ marginTop: '20px' }}>
            Final package contents are set by the partner hospital and confirmed in your plan.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why plan it with M</span>
            <h2>
              Your time is valuable. <em>We protect it.</em>
            </h2>
          </div>
          <ul className="check-list">
            <li>Appointments scheduled around your travel dates</li>
            <li>Interpreter support at the hospital</li>
            <li>Hotel near the hospital, with transfers arranged</li>
            <li>A clear quote and itinerary before you book flights</li>
          </ul>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="notice gold">
            <b>Travelling from the UK, Ireland or the Netherlands?</b> Short visits to China are currently
            visa-free for up to 30 days under China's present policy. Entry rules can change, so always check
            the latest requirements with the Chinese embassy before you book.
          </div>
        </div>
      </section>
      <Cta title="Plan your health check trip." />
    </>
  )
}
