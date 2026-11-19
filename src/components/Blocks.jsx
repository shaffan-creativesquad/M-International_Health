import { Link } from 'react-router-dom'

export function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map(([label, to]) => (
        <span key={label}>
          {'  /  '}
          {to ? <Link to={to}>{label}</Link> : <span aria-current="page">{label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function Cta({
  title = 'Ready to plan your care journey?',
  text = 'Book a free care coordination consultation. We reply within one business day.',
}) {
  return (
    <section className="section cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p className="lead" style={{ margin: '0 auto 30px' }}>
          {text}
        </p>
        <Link className="btn" to="/free-consultation">
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}

export function ProofStrip() {
  return (
    <section className="strip" aria-label="What we coordinate">
      <div className="container">
        <ul>
          <li>Dedicated care coordination</li>
          <li>Licensed partner providers</li>
          <li>Interpreter support</li>
          <li>Travel and stay arranged</li>
          <li>Clear quote before you travel</li>
        </ul>
      </div>
    </section>
  )
}

export function Journey() {
  return (
    <div className="journey" aria-hidden="true">
      <div className="journey-map">
        <svg viewBox="0 0 640 560" preserveAspectRatio="xMidYMid slice">
          <g stroke="#2C5566" strokeWidth="1.2" fill="none">
            <circle cx="420" cy="300" r="300" />
            <ellipse cx="420" cy="300" rx="130" ry="300" />
            <ellipse cx="420" cy="300" rx="300" ry="95" />
            <ellipse cx="420" cy="300" rx="300" ry="200" />
          </g>
          <path
            d="M110 380C230 150 420 120 520 210"
            fill="none"
            stroke="#E0634C"
            strokeWidth="4"
            strokeDasharray="10 10"
            strokeLinecap="round"
          />
          <circle cx="110" cy="380" r="9" fill="#F6F1E8" />
          <circle cx="520" cy="210" r="26" fill="#0277bb" />
          <rect x="514" y="196" width="12" height="28" rx="3" fill="#F6F1E8" />
          <rect x="506" y="204" width="28" height="12" rx="3" fill="#F6F1E8" />
        </svg>
        <span className="journey-label" style={{ left: '9%', top: '71%' }}>
          EUROPE
        </span>
        <span className="journey-label" style={{ left: '74%', top: '44%', color: '#F6F1E8' }}>
          CHINA
        </span>
      </div>
      <div className="chip" style={{ left: 0, top: '8%' }}>
        <span className="dot"></span>Provider matched
      </div>
      <div className="chip chip-right" style={{ right: 0, top: '22%' }}>
        <span className="dot"></span>Appointment confirmed
      </div>
      <div className="chip" style={{ left: 0, bottom: '24%' }}>
        <span className="dot" style={{ background: '#C2412D' }}></span>Interpreter arranged
      </div>
      <div className="chip" style={{ right: '4%', bottom: '7%' }}>
        <span className="dot" style={{ background: '#C9A45C' }}></span>Airport pickup booked
      </div>
    </div>
  )
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}
