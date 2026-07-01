import { brand } from '../config/brand'
import { countries } from '../config/countries'
import { downloads } from '../config/downloads'
import { pillars } from '../config/pillars'
import { Download } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'

export function MethodologyPage() {
  return (
    <>
      <PageHero
        label="Methodology"
        title={`How ANWI v${brand.version} works`}
        subtitle="Open, reproducible, and honest about limitations. This is a pilot methodology — not a final statistical standard."
      >
        <div className="flex flex-wrap gap-4">
          <a href={downloads.methodology.path} download className="btn-primary">
            <Download className="h-4 w-4" />
            Download methodology paper (PDF)
          </a>
          <a href={downloads.brief.path} download className="btn-secondary">
            <Download className="h-4 w-4" />
            Download executive brief (PDF)
          </a>
        </div>
      </PageHero>

      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi mx-auto max-w-3xl space-y-16">
          <ScrollReveal>
            <article>
              <SectionHeading label="Purpose" title="Why ANWI exists" />
              <p className="mt-6 text-anwi-muted leading-relaxed">
                The Africa Next Workforce Index (ANWI) answers one question:{' '}
                <strong className="text-anwi-navy">
                  Is this country converting its young population into productive participation in an
                  AI-shaped economy?
                </strong>{' '}
                Unlike generic competitiveness indices, ANWI focuses on the pipeline from education
                through first employment to skills that matter in the next decade.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <article>
              <SectionHeading label="Framework" title="Scoring framework" />
              <p className="mt-6 text-anwi-muted leading-relaxed">
                Each country receives a score from 0–100 on six pillars. Pillar scores are weighted
                and aggregated into an overall ANWI score. Indicator-level scores within each pillar
                are averaged unless noted otherwise.
              </p>
              <ul className="mt-8 space-y-4">
                {pillars.map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 50}>
                    <li className="card">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-anwi-gold/15 text-xs font-bold text-anwi-gold-dark">
                            {i + 1}
                          </span>
                          <div>
                            <h3 className="font-semibold text-anwi-navy">{p.name}</h3>
                            <p className="mt-1 text-sm text-anwi-muted">{p.description}</p>
                          </div>
                        </div>
                        <span className="badge-gold shrink-0">{(p.weight * 100).toFixed(0)}%</span>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <article>
              <SectionHeading label="Sources" title="Data sources (v0.1)" />
              <ul className="mt-6 list-disc space-y-2 pl-5 text-anwi-muted">
                <li>World Bank World Development Indicators &amp; education datasets</li>
                <li>ILO youth employment and NEET statistics</li>
                <li>National statistical agencies (country-specific)</li>
                <li>UNESCO UIS education enrollment and completion data</li>
                <li>Expert panel review for indicators lacking reliable cross-country data</li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <article>
              <SectionHeading label="Limitations" title="Pilot limitations" />
              <div className="mt-6 rounded-2xl border border-amber-200/80 bg-amber-50 p-6 text-sm text-amber-950">
                <ul className="list-disc space-y-2 pl-5">
                  <li>v0.1 covers {countries.length} countries — not the full continent.</li>
                  <li>Some indicators use expert estimates where public data is incomplete.</li>
                  <li>Scores are not endorsed by any government or multilateral institution.</li>
                  <li>Year-over-year comparability will improve as methodology matures.</li>
                </ul>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <article>
              <SectionHeading label="Roadmap" title="What's next" />
              <ol className="mt-6 list-decimal space-y-3 pl-5 text-anwi-muted">
                <li className="font-medium text-anwi-gold-dark">
                  Publish full methodology paper (PDF) — Q3 2026 ✓
                </li>
                <li className="font-medium text-anwi-gold-dark">
                  Expand to 20+ countries with verified primary data ✓
                </li>
                <li>Launch inaugural report: <em>State of Africa&apos;s Next Workforce 2027</em></li>
                <li>Partner with universities for independent validation</li>
              </ol>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
