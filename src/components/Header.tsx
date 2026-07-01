import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

const nav = [
  { to: '/methodology', label: 'Methodology' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-anwi-border bg-white/95 backdrop-blur-md">
      <div className="container-anwi flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src="/anwi-mark.svg" alt="" className="h-10 w-10 md:hidden" />
          <img
            src="/anwi-logo.svg"
            alt="ANWI — Africa Next Workforce Index"
            className="hidden h-11 w-auto md:block"
          />
          <div className="md:hidden">
            <span className="block font-serif text-base font-bold tracking-tight text-anwi-navy">
              ANWI
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-wider text-anwi-muted">
              Workforce Index
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-anwi-gold-dark'
                    : 'text-anwi-text hover:text-anwi-gold-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/anwi-methodology-v0.1.pdf"
            download
            className="rounded-lg px-3 py-2 text-sm font-medium text-anwi-text transition hover:text-anwi-gold-dark"
          >
            Report
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/compare" className="btn-primary py-2.5 text-sm">
            Compare Countries
          </Link>
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border border-anwi-border px-3 py-2 text-sm font-medium text-anwi-text"
            aria-label="Language: English"
          >
            EN
            <ChevronDown className="h-3.5 w-3.5 text-anwi-muted" />
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-anwi-navy lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-anwi-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? 'bg-anwi-gold/10 text-anwi-gold-dark' : 'text-anwi-text'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="/anwi-methodology-v0.1.pdf"
              download
              className="rounded-lg px-3 py-3 text-sm font-medium text-anwi-text"
            >
              Report (PDF)
            </a>
            <Link
              to="/compare"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Compare Countries
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
