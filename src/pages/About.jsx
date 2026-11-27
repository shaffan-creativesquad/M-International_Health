import Seo from '../components/Seo'
import { Crumbs, Cta } from '../components/Blocks'

export default function About() {
  return (
    <>
      <Seo
        title="About M Global Health, Inc. | Your Private Concierge in China"
        description="M Global Health, Inc. is your private concierge in China — Business, Lifestyle and Health. A bilingual team arranging curated business connections, premium lifestyle experiences and world-class healthcare."
        path="/about"
      />

      <section className="page-hero">
        <div className="container split">
          <div>
            <Crumbs items={[['About M', null]]} />
            <span className="eyebrow">About M</span>
            <h1>
              Your private concierge <em>in China.</em>
            </h1>
            <p className="lead">
              M Global Health, Inc. is a private concierge for discerning visitors to China. We arrange
              executive business connections, premium lifestyle experiences and world-class healthcare —
              Business, Lifestyle and Health — with a dedicated bilingual team at every step.
            </p>
          </div>
          <img
            src="/assets/img/6.jpeg"
            alt="Professionals on the go"
            className="section-img"
          />
        </div>
      </section>
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What guides us</span>
            <h2>
              Four promises <em>behind every journey.</em>
            </h2>
          </div>
          <div className="grid-4">
            <div className="card">
              <div className="step-num">01</div>
              <h3>Guest First</h3>
              <p>Every plan is shaped around your goals, priorities and comfort.</p>
            </div>
            <div className="card">
              <div className="step-num">02</div>
              <h3>Clear and Transparent</h3>
              <p>A clear service plan and estimated costs before you travel.</p>
            </div>
            <div className="card">
              <div className="step-num">03</div>
              <h3>Trusted Partners</h3>
              <p>Licensed providers and carefully chosen travel partners.</p>
            </div>
            <div className="card">
              <div className="step-num">04</div>
              <h3>Always by Your Side</h3>
              <p>Dedicated bilingual concierge support, start to finish.</p>
            </div>
          </div>
        </div>
      </section>
      <Cta
        title="Ready for your private China experience?"
        text="Talk to our concierge team about Business, Lifestyle or Health. We reply within one business day."
      />
    </>
  )
}
