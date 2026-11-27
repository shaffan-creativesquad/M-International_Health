import Seo from '../components/Seo'
import { Cta } from '../components/Blocks'

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works | Private Concierge in China | M Global Health, Inc."
        description="Five steps from your first message to your return home: free consultation, bespoke plan, clear itinerary and costs, full on-the-ground support, and follow-up."
        path="/how-it-works"
      />

      <section className="page-hero lattice center">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h1 style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            From first message to <em>safe return.</em>
          </h1>
          <p className="lead">
            Five clear steps from your first enquiry to your return home — whether you are coming to China
            for business, lifestyle or health.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-num">1</div>
              <div className="card">
                <h3>Free consultation</h3>
                <p>
                  Share your goals — business, lifestyle, health or a combination. This is a planning call,
                  not a medical consultation.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">2</div>
              <div className="card">
                <h3>Bespoke plan</h3>
                <p>Your concierge team builds a plan to match your brief — connections, experiences, appointments and accommodation.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">3</div>
              <div className="card">
                <h3>Clear itinerary and costs</h3>
                <p>You receive your full itinerary and estimated costs in writing before you commit to anything.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">4</div>
              <div className="card">
                <h3>Your stay with full support</h3>
                <p>
                  Private transfers, five-star accommodation and a dedicated bilingual coordinator with you
                  throughout your entire stay.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">5</div>
              <div className="card">
                <h3>Return and follow-up</h3>
                <p>
                  We follow up after you return home — whether that means collecting reports or staying in
                  touch with a provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
