import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { AppShell } from './AppShell'

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('anwi-cookie-consent')) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('anwi-cookie-consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('anwi-cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-anwi-border bg-white p-4 shadow-lg md:p-5">
      <div className="container-anwi flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-anwi-muted">
          We use essential cookies for site functionality and optional analytics cookies to improve
          your experience.
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={reject} className="btn-outline py-2 text-xs">
            Reject All
          </button>
          <button type="button" onClick={accept} className="btn-primary py-2 text-xs">
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppShell />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
