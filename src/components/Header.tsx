import { Link, NavLink } from 'react-router-dom'
import { brand } from '../config/brand'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/compare', label: 'Compare' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/about', label: 'About' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="group">
          <span className="block text-lg font-bold tracking-tight text-anwi-navy">
            {brand.shortName}
          </span>
          <span className="block text-xs text-anwi-slate group-hover:text-anwi-teal">
            Africa Next Workforce Index
          </span>
        </Link>
        <nav className="flex gap-1 md:gap-2">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-anwi-navy text-white'
                    : 'text-anwi-slate hover:bg-slate-100 hover:text-anwi-navy'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
