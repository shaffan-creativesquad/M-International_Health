import Seo from '../components/Seo'
import { Cta } from '../components/Blocks'

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works | Care Coordination from Enquiry to Return | M International Health"
        description="Five steps from your first message to your safe return: free care coordination consultation, provider matching, trip planning, care with support, and follow up."
        path="/how-it-works"
      />

      <section className="page-hero lattice center">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h1 style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            From first message to <em>safe return.</em>
          </h1>
          <p className="lead">Dedicated care coordination at every stage of your care journey.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-num">1</div>
              <div className="card">
                <h3>Free care coordination consultation</h3>
                <p>
                  Tell us your goals and preferred travel window. This is a coordination conversation, not a
                  medical consultation.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">2</div>
              <div className="card">
                <h3>Provider matching</h3>
                <p>We introduce suitable licensed providers in China and arrange your appointments.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">3</div>
              <div className="card">
                <h3>Clear plan and quote</h3>
                <p>You receive your itinerary and a clear quote before you book flights.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">4</div>
              <div className="card">
                <h3>Care with support</h3>
                <p>
                  Accommodation, transfers and interpreter support are arranged, and our care coordination
                  team stays reachable throughout your trip.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">5</div>
              <div className="card">
                <h3>Return and follow up</h3>
                <p>We help you collect reports and stay connected with your provider after you are home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
