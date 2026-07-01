import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { brand } from '../config/brand'
import { downloads } from '../config/downloads'
import { pillars } from '../config/pillars'
import { computeSummaryStats } from '../config/summary-stats'
import { PageHero } from '../components/PageHero'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import type { PillarId } from '../config/pillars'

const PILLAR_ABBR: Record<PillarId, string> = {
  'education-pipeline': 'Edu',
  'entry-work-ai': 'Entry',
  'genz-readiness': 'GenZ',
  'skills-infrastructure': 'Skills',
  'policy-participation': 'Policy',
  'talent-mobility': 'Mobility',
}

function flagUrl(code: string) {
  return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`
}

export function ExecutiveSummaryPage() {
  const stats = computeSummaryStats()
  const today = new Date().toISOString().slice(0, 10)

  return (
    <>
      <PageHero
        label="Executive Summary"
        title="The state of Africa's next workforce"
        subtitle={`Live intelligence from ${stats.countryCount} pilot countries. Updated for the ${brand.edition} from public sources, institutional research, and ANWI proprietary analysis.`}
        badge={<span className="badge-new">Live Data</span>}
      >
        <div className="flex flex-wrap gap-4">
          <a href={downloads.brief.path} download className="btn-primary">
            <Download className="h-4 w-4" />
            Download Intelligence Brief
          </a>
          <Link to="/methodology" className="btn-secondary">
            View Methodology
          </Link>
        </div>
      </PageHero>

      <section className="border-t border-white/10 bg-anwi-navy pb-16 md:pb-20">
        <div className="container-anwi">
          <ScrollReveal immediate delay={320}>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 md:gap-8">
              {[
                { value: stats.countryCount, label: 'Countries' },
                { value: stats.pillarCount, label: 'Pillars' },
                { value: stats.indicatorCount, label: 'Indicators' },
                { value: `${stats.totalYouthM}M`, label: 'Youth Under 25' },
                { value: stats.continentalAvg, label: 'Pilot Average' },
                { value: stats.strongConversion, label: 'Strong Converters' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="stat-number-gold text-4xl md:text-5xl">{value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Youth Conversion"
              title="Pilot conversion capacity remains uneven"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                value: stats.strongConversion,
                title: 'Strong converters',
                desc: 'ANWI score ≥60 — structured pathways from education to productive work',
              },
              {
                value: stats.emerging,
                title: 'Emerging markets',
                desc: 'Score 45–59 — identifiable strengths with structural constraints',
              },
              {
                value: stats.constrained,
                title: 'Structurally constrained',
                desc: 'Score below 45 — skills infrastructure and entry pathways lag peers',
              },
            ].map(({ value, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 70}>
                <div className="stat-card h-full">
                  <p className="stat-number text-4xl md:text-5xl">{value}</p>
                  <h3 className="mt-4 font-semibold text-anwi-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ScrollReveal delay={80}>
              <div className="card h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-anwi-muted">
                  Top 5 Pilot Leaders
                </h3>
                <ol className="mt-6 space-y-4">
                  {stats.topFive.map((country) => (
                    <li key={country.code} className="flex items-center gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-anwi-gold/15 text-xs font-bold text-anwi-gold-dark">
                        {country.rank}
                      </span>
                      <img
                        src={flagUrl(country.code)}
                        alt=""
                        width={24}
                        height={18}
                        className="shrink-0 rounded-sm"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-anwi-navy">{country.name}</p>
                        <p className="truncate text-xs text-anwi-muted">{country.highlights[0]}</p>
                      </div>
                      <span className="font-serif text-xl font-bold text-anwi-gold">
                        {country.overallScore}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="card h-full overflow-x-auto">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-anwi-muted">
                  Regional Conversion Average
                </h3>
                <table className="anwi-table mt-6 w-full min-w-[320px]">
                  <thead>
                    <tr className="text-left">
                      <th>Region</th>
                      <th>Countries</th>
                      <th>Avg Score</th>
                      <th>Youth Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.regional.map((row) => (
                      <tr key={row.region}>
                        <td className="font-medium text-anwi-navy">{row.label}</td>
                        <td>{row.count}</td>
                        <td className="font-semibold text-anwi-gold-dark">{row.avgScore}</td>
                        <td>{row.youthShare}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Full ANWI Assessment"
              title={`${stats.countryCount}-country pilot scored on ${stats.pillarCount} pillars, ${stats.indicatorCount} indicators`}
              subtitle="Unlike headline conversion tiers above, each country has been assessed using the complete ANWI methodology covering education pipeline, entry work, GenZ readiness, skills infrastructure, policy, and talent mobility."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-anwi-border bg-white shadow-sm">
              <table className="anwi-table w-full min-w-[900px] px-4">
                <thead>
                  <tr className="border-b border-anwi-border bg-anwi-bg-subtle text-left">
                    <th className="px-4 pt-4">#</th>
                    <th className="px-4 pt-4">Country</th>
                    <th className="px-4 pt-4">ANWI Score</th>
                    {pillars.map((pillar) => (
                      <th key={pillar.id} className="px-2 pt-4 text-center" title={pillar.name}>
                        {PILLAR_ABBR[pillar.id]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stats.sortedByRank.map((country) => (
                    <tr key={country.code} className="hover:bg-anwi-bg-subtle/60">
                      <td className="px-4 text-anwi-muted">{country.rank}</td>
                      <td className="px-4">
                        <span className="inline-flex items-center gap-2 font-medium text-anwi-navy">
                          <img
                            src={flagUrl(country.code)}
                            alt=""
                            width={24}
                            height={18}
                            className="rounded-sm"
                          />
                          {country.name}
                        </span>
                      </td>
                      <td className="px-4 font-serif text-lg font-bold text-anwi-gold">
                        {country.overallScore}
                      </td>
                      {pillars.map((pillar) => (
                        <td key={pillar.id} className="px-2 text-center text-sm text-anwi-muted">
                          {country.pillars[pillar.id].score}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/compare" className="btn-outline">
                Open Compare Tool
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={downloads.methodology.path} download className="btn-outline">
                <Download className="h-4 w-4" />
                Download Methodology
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Pillar Analysis"
              title="Continental pillar averages reveal where conversion breaks down"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.pillarAvgs.map((pillar, i) => {
              const meta = pillars.find((entry) => entry.id === pillar.id)!
              return (
                <ScrollReveal key={pillar.id} delay={i * 60}>
                  <div className="card h-full">
                    <p className="text-xs font-semibold uppercase tracking-wider text-anwi-gold">
                      {meta.shortName}
                    </p>
                    <p className="mt-2 font-serif text-4xl font-bold text-anwi-navy">{pillar.avg}</p>
                    <p className="mt-2 text-sm text-anwi-muted">{meta.description}</p>
                    <p className="mt-3 text-xs font-semibold text-anwi-muted">
                      {(meta.weight * 100).toFixed(0)}% weight
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding hero-dark">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Skills Infrastructure"
              title="Digital skills ecosystems remain the binding constraint"
              subtitle="The widest score spread of any pillar. Bootcamp density, connectivity, and AI literacy programs concentrate in a handful of urban hubs — while youth population growth continues continent-wide."
              dark
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: stats.skillsLeader.pillars['skills-infrastructure'].score,
                label: 'Top skills score',
                detail: stats.skillsLeader.name,
              },
              {
                value: stats.educationLeader.pillars['education-pipeline'].score,
                label: 'Top education pipeline',
                detail: stats.educationLeader.name,
              },
              {
                value: stats.continentalAvg,
                label: 'Pilot average',
                detail: 'Composite ANWI score',
              },
              {
                value: `${stats.totalYouthM}M`,
                label: 'Youth in cohort',
                detail: 'Under age 25, pilot markets',
              },
            ].map(({ value, label, detail }, i) => (
              <ScrollReveal key={label} delay={i * 70}>
                <div className="card-dark text-center">
                  <p className="font-serif text-4xl font-bold text-anwi-gold">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{label}</p>
                  <p className="mt-1 text-xs text-white/50">{detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={280}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/60">
              Leading markets combine bootcamp-to-employer pipelines with youth connectivity above
              the pilot mean. Constrained markets show policy intent without matching skills
              infrastructure — the gap ANWI is built to measure and close.
            </p>
            <Link to="/compare" className="btn-primary mt-8">
              Explore Country Scores
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Intelligence Tools"
              title="Integrated trackers and analytical instruments"
              centered
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Country Compare',
                desc: 'Side-by-side pillar scores for up to four pilot countries.',
                kind: 'link' as const,
                to: '/compare',
              },
              {
                title: 'Methodology',
                desc: 'Six pillars, 18 indicators, scoring rules, and limitations.',
                kind: 'link' as const,
                to: '/methodology',
              },
              {
                title: 'Executive Brief',
                desc: 'Download the full pilot intelligence brief (PDF).',
                kind: 'download' as const,
                href: downloads.brief.path,
              },
              {
                title: 'Methodology Report',
                desc: 'Download the complete methodology paper (PDF).',
                kind: 'download' as const,
                href: downloads.methodology.path,
              },
            ].map((tool, i) => (
              <ScrollReveal key={tool.title} delay={i * 70}>
                <div className="card flex h-full flex-col">
                  <h3 className="font-semibold text-anwi-navy">{tool.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-anwi-muted">{tool.desc}</p>
                  {tool.kind === 'link' ? (
                    <Link
                      to={tool.to}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-anwi-gold-dark hover:text-anwi-gold"
                    >
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={tool.href}
                      download
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-anwi-gold-dark hover:text-anwi-gold"
                    >
                      Download
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi mx-auto max-w-3xl">
          <ScrollReveal>
            <SectionHeading label="Methodology and Data Sources" title="How this brief was produced" />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-anwi-muted">
              All data is drawn from the ANWI platform&apos;s pilot databases, aggregating information
              from official government publications, international organisations (ILO, UNESCO, World
              Bank, African Union), verified labour-market research, and ANWI proprietary expert
              review.
            </p>
            <p className="mt-4 text-base leading-relaxed text-anwi-muted">
              The ANWI methodology is structured around {stats.pillarCount} pillars and{' '}
              {stats.indicatorCount} indicators per country. The full methodology is documented in
              the {brand.edition} Methodology Report.
            </p>
            <div className="card mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-anwi-navy">
                Suggested Citation
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-anwi-muted">
                Africa Next Workforce Index ({new Date().getFullYear()}). &ldquo;Executive Summary:
                The State of Africa&apos;s Next Workforce.&rdquo; ANWI. Retrieved {today}. Available
                at: {brand.siteUrl}/executive-summary
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={downloads.brief.path} download className="btn-primary">
                <Download className="h-4 w-4" />
                Download Intelligence Brief
              </a>
              <Link to="/methodology" className="btn-outline">
                Full Methodology
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
