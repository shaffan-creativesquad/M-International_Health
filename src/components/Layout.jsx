import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import { pushDataLayer } from '../lib/site'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top and send a virtual page view to GTM on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
    pushDataLayer({ event: 'page_view', page_path: pathname })
  }, [pathname])

  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
