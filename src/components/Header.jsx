import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './Icons'

const NAV = [
  {
    label: 'Care Trips',
    items: [
      {
        to: '/travel-health-checkup',
        title: 'Travel + Health Checkup',
        desc: 'A full check, planned around your trip',
      },
      { to: '/travel-dental', title: 'Travel + Dental', desc: 'Dental care with a city break built in' },
    ],
  },
  {
    label: 'Treatments',
    items: [
      { to: '/health-checkups', title: 'Health Checkups', desc: 'Comprehensive screening' },
      { to: '/dental-veneers', title: 'Dental Veneers', desc: 'Cosmetic dentistry' },
      { to: '/medical-treatment', title: 'Medical Treatment', desc: 'Specialist referrals' },
    ],
  },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Concierge', to: '/concierge' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)

  // Close menus on page change
  useEffect(() => {
    setMenuOpen(false)
    setOpenSub(null)
  }, [pathname])

  // Escape closes dropdowns
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenSub(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="M International Health home">
            <LogoMark />
            <span className="brand-name">
              M International Health<small>Care journeys to China</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav${menuOpen ? ' open' : ''}`} id="site-nav" aria-label="Main">
            <ul>
              {NAV.map((item) =>
                item.items ? (
                  <li key={item.label} className={`has-menu${openSub === item.label ? ' open' : ''}`}>
                    <button
                      className="nav-link"
                      type="button"
                      aria-expanded={openSub === item.label ? 'true' : 'false'}
                      style={item.items.some((s) => s.to === pathname) ? { color: 'var(--ink)' } : undefined}
                      onClick={() => setOpenSub((v) => (v === item.label ? null : item.label))}
                    >
                      {item.label}
                    </button>
                    <ul className="submenu">
                      {item.items.map((s) => (
                        <li key={s.to}>
                          <NavLink to={s.to} end>
                            {s.title}
                            <small>{s.desc}</small>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink className="nav-link" to={item.to} end>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
            <Link className="btn" to="/free-consultation">
              Free Consultation
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
