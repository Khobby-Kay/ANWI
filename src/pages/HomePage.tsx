import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { brand } from '../config/brand'
import { countries } from '../config/countries'
import { pillars } from '../config/pillars'
import { SectionHeading } from '../components/SectionHeading'

const INDICATORS_PER_COUNTRY = 18

export function HomePage() {
  const topThree = [...countries].sort((a, b) => a.rank - b.rank).slice(0, 3)
  const continentalAvg = Math.round(
    countries.reduce((sum, c) => sum + c.overallScore, 0) / countries.length,
  )
  const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative flex min-h-[85vh] flex-col justify-center pb-0 pt-8 md:min-h-[90vh]">
        <div className="container-anwi flex-1 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="hero-title">Africa&apos;s Next Workforce Standard</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              The independent framework built to assess how African nations convert youth into
              productive participation in an AI-shaped economy — across {countries.length} pilot
              countries, {pillars.length} pillars, and {INDICATORS_PER_COUNTRY} indicators.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/methodology" className="btn-primary">
                Explore the Methodology
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/compare" className="btn-secondary">
                View the Compare Tool
              </Link>
            </div>
          </div>

          {/* Hero stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-8">
            {[
              { value: countries.length, label: 'Nations' },
              { value: pillars.length, label: 'Pillars' },
              { value: INDICATORS_PER_COUNTRY, label: 'Indicators' },
              { value: '2026', label: 'Pilot Edition' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="stat-number-gold">{value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology ribbon */}
        <div className="methodology-ribbon">
          <div className="container-anwi flex flex-wrap items-center gap-4 py-4 text-sm md:gap-8">
            <span className="badge-gold">{brand.edition}</span>
            <span className="text-white/60">Methodology Published</span>
            <span className="hidden text-white/40 md:inline">·</span>
            <span className="text-white/60">
              {pillars.length} pillars · {INDICATORS_PER_COUNTRY} indicators · {countries.length}{' '}
              country pilot
            </span>
          </div>
        </div>

        <div className="container-anwi flex justify-center py-8">
          <a href="#story" className="scroll-indicator">
            Scroll
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Story in Numbers */}
      <section id="story" className="section-padding bg-anwi-bg">
        <div className="container-anwi">
          <SectionHeading
            label="The State of Africa's Next Workforce, 2026"
            title="The Story in Numbers"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: countries.length,
                title: 'Nations Assessed',
                desc: 'The ANWI pilot tracks youth-to-workforce conversion across a diverse cohort spanning five regions.',
              },
              {
                value: '500M+',
                title: 'Youth Under 25',
                desc: "Africa's defining demographic asset. The bottleneck is not population — it is conversion.",
              },
              {
                value: continentalAvg,
                title: 'Continental Average',
                desc: 'Pilot cohort mean ANWI score. Scores are normalized 0–100 across six weighted pillars.',
              },
              {
                value: pillars.length,
                title: 'Pillars Measured',
                desc: 'From education pipeline to cross-border talent flow — every dimension of youth conversion.',
              },
            ].map(({ value, title, desc }) => (
              <div key={title} className="stat-card">
                <p className="stat-number">{value}</p>
                <h3 className="mt-4 font-semibold text-anwi-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continental Coverage */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <SectionHeading
            label="Continental Coverage"
            title={`${countries.length} Nations, One Index`}
            subtitle="The ANWI pilot cohort spans East, West, North, Southern, and Central Africa. Expansion to 30+ countries planned for v0.2."
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {sortedCountries.map((c) => (
              <Link
                key={c.code}
                to="/compare"
                className="country-pill"
                title={`ANWI score: ${c.overallScore}`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Report */}
      <section className="section-padding hero-dark">
        <div className="container-anwi">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="badge-new">Now Published</span>
              <h2 className="section-title mt-4 text-white">
                ANWI 2026 Methodology Report
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                The first edition of Africa&apos;s Next Workforce Standard. {pillars.length} pillars,{' '}
                {INDICATORS_PER_COUNTRY} indicators per country, and expert-led scoring for the{' '}
                {countries.length}-country pilot cohort.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { value: INDICATORS_PER_COUNTRY, label: 'Indicators' },
                  { value: pillars.length, label: 'Pillars' },
                  { value: countries.length, label: 'Pilot Countries' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-anwi-gold">{value}</p>
                    <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/anwi-methodology-v0.1.pdf" download className="btn-primary">
                  <Download className="h-4 w-4" />
                  Read the Full Report
                </a>
                <Link to="/methodology" className="btn-secondary">
                  View Methodology
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {topThree.map((c) => (
                <div key={c.code} className="card-dark text-center">
                  <p className="text-xs uppercase tracking-wider text-white/40">Rank #{c.rank}</p>
                  <p className="mt-2 text-3xl font-bold text-anwi-gold">{c.overallScore}</p>
                  <p className="mt-1 font-semibold text-white">{c.name}</p>
                  <p className="mt-2 text-xs text-white/50">{c.highlights[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compare Tool — Flagship */}
      <section className="section-padding bg-white">
        <div className="container-anwi">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="badge-gold">Flagship Product</span>
              <h2 className="section-title mt-4">Country Compare Tool</h2>
              <p className="section-subtitle">
                Side-by-side pillar scores for up to four countries. Select from the{' '}
                {countries.length}-nation pilot cohort and compare conversion capacity across all
                six pillars and {INDICATORS_PER_COUNTRY} indicators.
              </p>
              <Link to="/compare" className="btn-primary mt-8">
                Explore the Compare Tool
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-anwi-muted">
                Six Pillars
              </p>
              <ul className="mt-4 space-y-3">
                {pillars.map((p, i) => (
                  <li key={p.id} className="flex items-start gap-3 border-b border-anwi-border pb-3 last:border-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-anwi-gold/15 text-xs font-bold text-anwi-gold-dark">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-anwi-navy">{p.name}</p>
                      <p className="text-xs text-anwi-muted">{(p.weight * 100).toFixed(0)}% weight</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <SectionHeading
            label="Framework"
            title="What We Measure"
            subtitle="Six weighted pillars capturing every dimension of youth-to-workforce conversion."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div key={pillar.id} className="card group">
                <span className="text-sm font-bold text-anwi-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-semibold text-anwi-navy">{pillar.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{pillar.description}</p>
                <p className="mt-4 text-xs font-semibold text-anwi-gold-dark">
                  {(pillar.weight * 100).toFixed(0)}% weight
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="section-padding hero-dark">
        <div className="container-anwi text-center">
          <SectionHeading
            label="Partnerships"
            title="Shape the Future of Africa's Next Workforce"
            subtitle="Governments, employers, universities, and research institutions contribute to ANWI's mission. If your organisation belongs in that group, get in touch."
            dark
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Governments',
                desc: 'Request pilot participation or benchmark your country against peers.',
              },
              {
                title: 'Partners',
                desc: 'Explore data partnerships, sponsorship, or research collaboration.',
              },
              {
                title: 'Researchers',
                desc: 'Contribute methodology feedback or independent validation.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="card-dark text-left">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{desc}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-primary mt-10">
            Get Involved
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
