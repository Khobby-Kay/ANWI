import { brand } from '../config/brand'
import { countries } from '../config/countries'
import { pillars } from '../config/pillars'
import { Download } from 'lucide-react'

export function MethodologyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-anwi-gold">Methodology</p>
          <h1 className="mt-2 text-4xl font-bold">How ANWI v{brand.version} works</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Open, reproducible, and honest about limitations. This is a pilot methodology — not
            a final statistical standard.
          </p>
          <a
            href="/anwi-methodology-v0.1.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-anwi-gold px-5 py-2.5 text-sm font-semibold text-anwi-navy transition hover:bg-anwi-gold/90"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download methodology paper (PDF)
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-12">
          <article>
            <h2 className="text-2xl font-bold text-anwi-navy">Purpose</h2>
            <p className="mt-4 text-anwi-slate leading-relaxed">
              The Africa Next Workforce Index (ANWI) answers one question:{' '}
              <strong className="text-anwi-navy">
                Is this country converting its young population into productive participation in an
                AI-shaped economy?
              </strong>{' '}
              Unlike generic competitiveness indices, ANWI focuses on the pipeline from education
              through first employment to skills that matter in the next decade.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-anwi-navy">Scoring framework</h2>
            <p className="mt-4 text-anwi-slate leading-relaxed">
              Each country receives a score from 0–100 on six pillars. Pillar scores are weighted
              and aggregated into an overall ANWI score. Indicator-level scores within each pillar
              are averaged unless noted otherwise.
            </p>
            <ul className="mt-6 space-y-4">
              {pillars.map((p) => (
                <li key={p.id} className="card">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-anwi-navy">{p.name}</h3>
                    <span className="shrink-0 rounded bg-anwi-teal/10 px-2 py-1 text-xs font-semibold text-anwi-teal">
                      {(p.weight * 100).toFixed(0)}% weight
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-anwi-slate">{p.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-anwi-navy">Data sources (v0.1)</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-anwi-slate">
              <li>World Bank World Development Indicators &amp; education datasets</li>
              <li>ILO youth employment and NEET statistics</li>
              <li>National statistical agencies (country-specific)</li>
              <li>UNESCO UIS education enrollment and completion data</li>
              <li>Expert panel review for indicators lacking reliable cross-country data</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-anwi-navy">Pilot limitations</h2>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
              <ul className="list-disc space-y-2 pl-5">
                <li>v0.1 covers {countries.length} countries — not the full continent.</li>
                <li>Some indicators use expert estimates where public data is incomplete.</li>
                <li>Scores are not endorsed by any government or multilateral institution.</li>
                <li>Year-over-year comparability will improve as methodology matures.</li>
              </ul>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-anwi-navy">Roadmap</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-anwi-slate">
              <li className="text-anwi-teal font-medium">
                Publish full methodology paper (PDF) — Q3 2026 ✓
              </li>
              <li className="text-anwi-teal font-medium">
                Expand to 20+ countries with verified primary data ✓
              </li>
              <li>Launch inaugural report: <em>State of Africa&apos;s Next Workforce 2027</em></li>
              <li>Partner with universities for independent validation</li>
            </ol>
          </article>
        </div>
      </section>
    </>
  )
}
