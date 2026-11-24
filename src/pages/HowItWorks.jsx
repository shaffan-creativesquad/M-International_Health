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
          <p className="lead">
            Clear, step-by-step international patient coordination, from your first enquiry until you are
            home again.
          </p>
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
                  Share your care goals and when you'd like to travel. This is a planning call, not a medical
                  consultation.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">2</div>
              <div className="card">
                <h3>Provider matching</h3>
                <p>We match you with licensed providers in China and book your appointments.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">3</div>
              <div className="card">
                <h3>Clear plan and quote</h3>
                <p>Get your itinerary and a clear quote before you book flights.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">4</div>
              <div className="card">
                <h3>Care with support</h3>
                <p>
                  Your stay, transfers, and interpreter are arranged, and our team stays reachable throughout
                  your trip.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-num">5</div>
              <div className="card">
                <h3>Return and follow-up</h3>
                <p>
                  We help you collect your reports and stay connected with your provider once you're home.
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
