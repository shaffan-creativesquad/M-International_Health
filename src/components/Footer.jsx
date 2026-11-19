import { Link } from 'react-router-dom'
import { INSTAGRAM, openCookieSettings } from '../lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <img src="/assets/img/footer-logo.jpeg" alt="M International Health" className="logo-img" />
            </Link>
            <p className="footer-about">
              An international healthcare navigation platform connecting patients with healthcare providers in
              China, with dedicated care coordination at every step.
            </p>
          </div>
          <div>
            <h4>Care</h4>
            <ul>
              <li>
                <Link to="/travel-health-checkup">Travel + Health Checkup</Link>
              </li>
              <li>
                <Link to="/travel-dental">Travel + Dental</Link>
              </li>
              <li>
                <Link to="/health-checkups">Health Checkups</Link>
              </li>
              <li>
                <Link to="/dental-veneers">Dental Veneers</Link>
              </li>
              <li>
                <Link to="/medical-treatment">Medical Treatment</Link>
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
            M International Health INC is a healthcare navigation and care coordination service. We do not
            provide medical treatment, diagnosis or medical advice. Treatment is provided by independent
            licensed healthcare providers. Travel, accommodation and transport are arranged through
            third-party providers.
          </p>
          <p>
            &copy; <span>{new Date().getFullYear()}</span> M International Health INC &middot;{' '}
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
