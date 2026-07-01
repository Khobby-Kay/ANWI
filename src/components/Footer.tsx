import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { downloads } from '../config/downloads'

const footerLinks = [
  { to: '/executive-summary', label: 'Executive Summary' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
  { href: downloads.brief.path, label: 'Executive Brief (PDF)' },
  { href: downloads.methodology.path, label: 'Methodology Report (PDF)' },
]

export function Footer() {
  return (
    <footer className="border-t border-anwi-border bg-anwi-bg-subtle">
      <div className="container-anwi section-padding pb-8 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/anwi-logo.png"
              alt="ANWI — Africa Next Workforce Index"
              className="h-24 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-anwi-muted">
              Measuring how African nations convert youth into productive participation in an
              AI-shaped economy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-anwi-navy">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-xs text-anwi-muted">Research &amp; Methodology</span>
                <br />
                <a href={`mailto:${brand.contactEmail}`} className="footer-link font-medium">
                  {brand.contactEmail}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-anwi-navy">
              Our Focus
            </h3>
            <ul className="mt-4 space-y-2">
              {['Accra, Ghana', 'Nairobi, Kenya', 'Johannesburg, South Africa', 'Cairo, Egypt'].map(
                (office) => (
                  <li key={office} className="text-sm text-anwi-muted">
                    {office}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-anwi-navy">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {'href' in link ? (
                    <a href={link.href} download className="footer-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-anwi-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-anwi-muted">
            © {new Date().getFullYear()} {brand.indexName}. All rights reserved.
          </p>
          <p className="max-w-lg text-xs text-anwi-muted">{brand.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
