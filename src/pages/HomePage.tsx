import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, BookOpen, Globe2 } from 'lucide-react'
import { brand } from '../config/brand'
import { countries } from '../config/countries'
import { pillars } from '../config/pillars'

export function HomePage() {
  const topThree = [...countries].sort((a, b) => a.rank - b.rank).slice(0, 3)

  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-anwi-gold">{brand.edition}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            {brand.indexName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{brand.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 rounded-lg bg-anwi-teal px-6 py-3 font-semibold text-white hover:bg-teal-600"
            >
              Compare Countries
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/methodology"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Read Methodology
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">The Thesis</p>
          <h2 className="mt-2 text-3xl font-bold text-anwi-navy">
            Africa&apos;s asset is its youth. The bottleneck is conversion.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-anwi-slate">
            Over 500 million Africans are under 25. ANWI measures whether nations are building
            pipelines — from classroom to first job to AI-era productivity — or losing that
            demographic dividend to unemployment and underemployment.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Six Pillars</p>
          <h2 className="mt-2 text-3xl font-bold text-anwi-navy">What we measure</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div key={pillar.id} className="card">
                <span className="text-sm font-bold text-anwi-teal">0{i + 1}</span>
                <h3 className="mt-2 font-semibold text-anwi-navy">{pillar.name}</h3>
                <p className="mt-2 text-sm text-anwi-slate">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Pilot Rankings</p>
          <h2 className="mt-2 text-3xl font-bold text-anwi-navy">Top performers (v0.1)</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {topThree.map((c) => (
              <div key={c.code} className="card">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-anwi-teal">#{c.rank}</span>
                  <span className="rounded-full bg-anwi-navy px-3 py-1 text-sm font-bold text-white">
                    {c.overallScore}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-anwi-slate">{c.highlights[0]}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-anwi-slate">
            {countries.length} countries in pilot cohort ·{' '}
            <Link to="/compare" className="text-anwi-teal hover:underline">
              Compare all
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-anwi-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="flex gap-4">
            <BarChart3 className="h-8 w-8 shrink-0 text-anwi-gold" />
            <div>
              <h3 className="font-semibold">Compare Tool</h3>
              <p className="mt-1 text-sm text-slate-300">
                Side-by-side pillar scores for up to four countries.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <BookOpen className="h-8 w-8 shrink-0 text-anwi-gold" />
            <div>
              <h3 className="font-semibold">Open Methodology</h3>
              <p className="mt-1 text-sm text-slate-300">
                Transparent scoring rubric, sources, and limitations.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Globe2 className="h-8 w-8 shrink-0 text-anwi-gold" />
            <div>
              <h3 className="font-semibold">Continental Scope</h3>
              <p className="mt-1 text-sm text-slate-300">
                Built for policymakers, employers, and youth advocates across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
