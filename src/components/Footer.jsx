import { Link } from 'react-router-dom'
import { INSTAGRAM, openCookieSettings } from '../lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <img src="/assets/img/footer-logo.jpeg" alt="M Global Health, Inc." className="logo-img" />
            </Link>
            <p className="footer-about">
              An international healthcare navigation platform connecting patients with healthcare providers in
              China, with dedicated care coordination at every step.
            </p>
          </div>
          <div>
            <h4>Health Journeys</h4>
            <ul>
              <li>
                <Link to="/shenzhen-health-journey">Shenzhen Premium Health Journey</Link>
              </li>
            </ul>
            <h4 style={{ marginTop: '24px' }}>Medical Services</h4>
            <ul>
              <li>
                <Link to="/travel-health-checkup">Medical Second Opinion</Link>
              </li>
              <li>
                <Link to="/medical-translation">Medical Translation</Link>
              </li>
              <li>
                <Link to="/cross-border-coordination">Cross-Border Coordination</Link>
              </li>
              <li>
                <Link to="/complex-case-coordination">Complex Case Coordination</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/concierge">Concierge and Travel</Link>
              </li>
              <li>
                <Link to="/about">About M</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/free-consultation">Free Consultation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <Link to="/free-consultation">Book a free care coordination consultation</Link>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener">
                  Instagram: @m.international.health.inc
                </a>
              </li>
              {/* TODO: add M's Facebook page URL */}
              <li>
                <a href="#">Facebook</a>
              </li>
              {/* TODO: add M's TikTok profile URL */}
              <li>
                <a href="#">TikTok</a>
              </li>
              <li>
                13904 Orangevale Ave
                <br />
                Corona, CA 92880, USA
              </li>
              {/* TODO: add M's public email and WhatsApp/phone once confirmed */}
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <p>
            M Global Health, Inc. is a healthcare navigation and care coordination service. We do not
            provide medical treatment, diagnosis or medical advice. Treatment is provided by independent
            licensed healthcare providers. Travel, accommodation and transport are arranged through
            third-party providers.
          </p>
          <p>
            &copy; <span>{new Date().getFullYear()}</span> M Global Health, Inc. &middot;{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> &middot; <Link to="/terms">Terms</Link> &middot;{' '}
            <a href="#" onClick={openCookieSettings}>
              Cookie settings
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
