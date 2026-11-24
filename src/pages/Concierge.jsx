import Seo from '../components/Seo'
import { Crumbs, Cta } from '../components/Blocks'
import { Icon } from '../components/Icons'

export default function Concierge() {
  return (
    <>
      <Seo
        title="International Medical Concierge | Five-Star Care in China | M International Health"
        description="Private airport pickup, five-star accommodation, private local transport, and a dedicated bilingual coordinator. M International Health arranges everything through trusted partners."
        path="/concierge"
      />

      <section className="page-hero dark">
        <div className="container">
          <Crumbs items={[['Concierge', null]]} />
          <span className="eyebrow">International medical concierge</span>
          <h1>
            Five-star care, <em>from arrival to departure.</em>
          </h1>
          <p className="lead">
            Our international medical concierge will handle every aspect of your treatment, from a private
            driver on arrival to five-star accommodation and a dedicated bilingual coordinator. We arrange
            everything through our trusted partners so your trip is seamless from arrival to departure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <Icon />
              <h3>Private Airport Pickup</h3>
              <p>A private driver meets you at arrivals and takes you straight to your hotel.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Five-Star Accommodation</h3>
              <p>Premium hotels close to your clinic or hospital.</p>
            </div>
            <div className="card">
              <Icon />
              <h3>Private Local Transportation</h3>
              <p>Private transfers to every appointment, on your schedule.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Dedicated Bilingual Coordinator</h3>
              <p>English-speaking support throughout your visits and consultations.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Itinerary Planning</h3>
              <p>One clear schedule covering your care, rest, and travel.</p>
            </div>
            <div className="card">
              <Icon variant="red" />
              <h3>Companion Travel</h3>
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
            <span className="eyebrow">Travel essentials</span>
            <h2 style={{ marginBottom: '20px' }}>
              Prepared for every step <em>of your journey.</em>
            </h2>
            <ul className="check-list">
              <li>Passport valid for at least six months</li>
              <li>Copies of your medical records</li>
              <li>A mobile payment app set up before you fly</li>
              <li>Comfortable clothes for appointment days</li>
            </ul>
            <p className="form-note">
              Your coordinator shares a full checklist before you start traveling in China.
            </p>
          </div>
        </div>
      </section>

      <Cta
        title="Experience our international medical concierge."
        text="Book a free care coordination consultation for premium medical assistance in China for foreigners. We reply within one business day."
      />
    </>
  )
}
