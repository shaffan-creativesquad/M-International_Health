import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './Icons'

const NAV = [
  {
    label: 'Health Journeys',
    items: [
      {
        to: '/shenzhen-health-journey',
        title: 'Shenzhen Premium Health Journey',
        desc: '5 Days / 4 Nights · $2,999 per person',
      },
    ],
  },
  {
    label: 'Medical Services',
    items: [
      {
        to: '/travel-health-checkup',
        title: 'Medical Second Opinion',
        desc: 'Written specialist opinion, no travel needed',
      },
      { to: '/medical-translation', title: 'Medical Translation', desc: 'Records, translation and interpreting' },
      { to: '/cross-border-coordination', title: 'Cross-Border Coordination', desc: 'Medical coordination for patients in China' },
      { to: '/complex-case-coordination', title: 'Complex Case Coordination', desc: 'Multi-specialty and complex case support' },
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
  const headerRef = useRef(null)

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

  // Click outside closes dropdown
  useEffect(() => {
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenSub(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header" ref={headerRef}>
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="M Global Health, Inc. home">
            <LogoMark />
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
