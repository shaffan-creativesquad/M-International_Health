import Seo from '../components/Seo'
import { Crumbs, Cta } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function Concierge() {
  return (
    <>
      <Seo
        title="Concierge and Travel | Hotels, Transfers, Interpreters | M International Health"
        description="Airport pickup, accommodation near your clinic, local transport, interpreter support and itinerary planning, arranged through trusted third-party providers."
        path="/concierge"
      />

      <section className="page-hero dark">
        <div className="container">
          <Crumbs items={[['Concierge and Travel', null]]} />
          <span className="eyebrow">Concierge and travel</span>
          <h1>
            Arrive cared for. <em>Leave at ease.</em>
          </h1>
          <p className="lead">
            We take care of the logistics around your treatment, through trusted third-party providers, so
            your trip feels calm from landing to departure.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Airport pickup</h3>
              <p>A driver meets you at arrivals and takes you to your hotel.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Accommodation</h3>
              <p>Comfortable hotels close to your clinic or hospital.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Local transport</h3>
              <p>Transfers to every appointment, on your schedule.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Interpreter support</h3>
              <p>English-speaking support during visits and consultations.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Itinerary planning</h3>
              <p>One clear schedule covering care, rest and travel.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Companion travel</h3>
              <p>Bringing family? We plan their stay alongside yours.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container split">
          <div className="ph sand">
            <span>Photo: partner hotel or city view</span>
          </div>
          <div>
            <span className="eyebrow">Practical travel</span>
            <h2 style={{ marginBottom: '20px' }}>
              Ready before <em>you land.</em>
            </h2>
            <ul className="check-list">
              <li>Passport valid for at least six months</li>
              <li>Copies of your medical records</li>
              <li>A mobile payment app set up before you fly</li>
              <li>Comfortable clothes for appointment days</li>
            </ul>
            <p className="form-note">
              Your care coordination team shares a full checklist before you travel.
            </p>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
