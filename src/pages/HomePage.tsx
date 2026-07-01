import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { brand } from '../config/brand'
import { countries } from '../config/countries'
import { downloads } from '../config/downloads'
import { pillars } from '../config/pillars'
import { ScrollReveal } from '../components/ScrollReveal'
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
      <section className="hero-dark relative flex min-h-[88vh] flex-col justify-center pb-0 pt-8 md:min-h-[92vh]">
        <div className="container-anwi flex-1 py-16 md:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <ScrollReveal immediate>
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge-gold">{brand.edition}</span>
                <Link
                  to="/executive-summary"
                  className="badge-new transition hover:bg-emerald-500/25"
                >
                  Executive Summary
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal immediate delay={80}>
              <h1 className="hero-title mt-6">Africa&apos;s Next Workforce Standard</h1>
            </ScrollReveal>
            <ScrollReveal immediate delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                The independent framework built to assess how African nations convert youth into
                productive participation in an AI-shaped economy — across {countries.length} pilot
                countries, {pillars.length} pillars, and {INDICATORS_PER_COUNTRY} indicators.
              </p>
            </ScrollReveal>
            <ScrollReveal immediate delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={downloads.brief.path} download className="btn-primary">
                  <Download className="h-4 w-4" />
                  Download Intelligence Brief
                </a>
                <Link to="/methodology" className="btn-secondary">
                  View Methodology
                </Link>
                <Link to="/executive-summary" className="btn-secondary">
                  Executive Summary
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal immediate delay={200} className="relative mt-12 hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
              <img
                src="/anwi-hero-africa.webp"
                alt="Africa from space at night showing interconnected city lights"
                className="h-full w-full scale-110 object-cover"
                width={1200}
                height={900}
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anwi-bg-dark/40 via-transparent to-transparent" />
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-widest text-white/40">
              Continental workforce intelligence
            </p>
          </ScrollReveal>

          {/* Hero stats — full width below grid */}
          <ScrollReveal immediate delay={320} className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-8 lg:col-span-2">
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
          </ScrollReveal>
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
          <ScrollReveal>
            <SectionHeading
              label="The State of Africa's Next Workforce, 2026"
              title="The Story in Numbers"
            />
          </ScrollReveal>
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
            ].map(({ value, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 70}>
                <div className="stat-card h-full">
                  <p className="stat-number">{value}</p>
                  <h3 className="mt-4 font-semibold text-anwi-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Continental Coverage */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Continental Coverage"
              title={`${countries.length} Nations, One Index`}
              subtitle="The ANWI pilot cohort spans East, West, North, Southern, and Central Africa. Expansion to 30+ countries planned for v0.2."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology Report */}
      <section className="section-padding hero-dark">
        <div className="container-anwi">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
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
                <a href={downloads.brief.path} download className="btn-primary">
                  <Download className="h-4 w-4" />
                  Download Intelligence Brief
                </a>
                <a href={downloads.methodology.path} download className="btn-secondary">
                  <Download className="h-4 w-4" />
                  Methodology Report
                </a>
                <Link to="/methodology" className="btn-secondary">
                  View Methodology
                </Link>
              </div>
              </div>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {topThree.map((c, i) => (
                <ScrollReveal key={c.code} delay={i * 80}>
                  <div className="card-dark text-center">
                    <p className="text-xs uppercase tracking-wider text-white/40">Rank #{c.rank}</p>
                    <p className="mt-2 text-3xl font-bold text-anwi-gold">{c.overallScore}</p>
                    <p className="mt-1 font-semibold text-white">{c.name}</p>
                    <p className="mt-2 text-xs text-white/50">{c.highlights[0]}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compare Tool — Flagship */}
      <section className="section-padding bg-white">
        <div className="container-anwi">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
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
            </ScrollReveal>
            <ScrollReveal delay={100}>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Framework"
              title="What We Measure"
              subtitle="Six weighted pillars capturing every dimension of youth-to-workforce conversion."
              centered
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.id} delay={i * 70}>
                <div className="card group h-full">
                  <span className="text-sm font-bold text-anwi-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-semibold text-anwi-navy">{pillar.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{pillar.description}</p>
                  <p className="mt-4 text-xs font-semibold text-anwi-gold-dark">
                    {(pillar.weight * 100).toFixed(0)}% weight
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="section-padding hero-dark">
        <div className="container-anwi text-center">
          <ScrollReveal>
            <SectionHeading
              label="Partnerships"
              title="Shape the Future of Africa's Next Workforce"
              subtitle="Governments, employers, universities, and research institutions contribute to ANWI's mission. If your organisation belongs in that group, get in touch."
              dark
              centered
            />
          </ScrollReveal>
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
            ].map(({ title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="card-dark text-left">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/60">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={240}>
            <Link to="/about" className="btn-primary mt-10">
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
