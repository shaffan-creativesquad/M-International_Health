import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { Crumbs, Cta } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function HealthCheckups() {
  return (
    <>
      <Seo
        title="Health Checkups in China | Comprehensive Screening | M International Health"
        description="Comprehensive health checkups at partner hospitals in China, with results explained in English. M coordinates appointments, interpreters, hotel and transfers."
        path="/health-checkups"
      />

      <section className="page-hero lattice">
        <div className="container">
          <Crumbs
            items={[
              ['Treatments', null],
              ['Health Checkups', null],
            ]}
          />
          <span className="eyebrow">Preventive care</span>
          <h1>
            Health checkups in China, <em>explained in English.</em>
          </h1>
          <p className="lead">
            Comprehensive screening at partner hospitals, with your schedule, interpreter and results review
            arranged by our care coordination team.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/free-consultation">
              Find the Right Checkup
            </Link>
            <Link className="btn ghost" to="/travel-health-checkup">
              Get a second opinion
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split wide-left">
          <div>
            <div className="section-head" style={{ marginBottom: '28px' }}>
              <span className="eyebrow">A checkup can include</span>
              <h2>Six building blocks.</h2>
            </div>
            <div className="grid-3">
              <div className="card">
                <Icon />
                <h3>Lab tests</h3>
                <p>Blood and urine panels</p>
              </div>
              <div className="card">
                <Icon />
                <h3>Imaging</h3>
                <p>Ultrasound, X ray or CT</p>
              </div>
              <div className="card">
                <Icon />
                <h3>Heart screening</h3>
                <p>ECG and related checks</p>
              </div>
              <div className="card">
                <Icon variant="red" />
                <h3>Specialist review</h3>
                <p>Doctor consultation on results</p>
              </div>
              <div className="card">
                <Icon variant="red" />
                <h3>English report</h3>
                <p>Results explained to you</p>
              </div>
              <div className="card">
                <Icon variant="red" />
                <h3>Follow up</h3>
                <p>Support after you return</p>
              </div>
            </div>
            <p className="form-note" style={{ marginTop: '18px' }}>
              Final package contents are set by the partner hospital.
            </p>
          </div>
          <div>
            <div className="card" style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}>
              <span className="eyebrow">Typical trip outline</span>
              <ul className="itinerary" style={{ color: 'var(--ivory)' }}>
                <li>
                  <b>Day 1</b>
                  <span>Arrival and transfer</span>
                </li>
                <li>
                  <b>Day 2</b>
                  <span>Checkup with interpreter</span>
                </li>
                <li>
                  <b>Day 3</b>
                  <span>Results review</span>
                </li>
                <li>
                  <b>After</b>
                  <span>Report and follow up</span>
                </li>
              </ul>
              <Link className="btn" style={{ width: '100%', marginTop: '22px' }} to="/free-consultation">
                Request My Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
