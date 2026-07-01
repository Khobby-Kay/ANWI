import { pillars } from '../config/pillars'
import type { CountryProfile } from '../config/countries'

const COLORS = ['#c8a951', '#0d1117', '#9e8440', '#555555']

type Props = {
  countries: CountryProfile[]
}

export function PillarChart({ countries }: Props) {
  return (
    <div className="space-y-5">
      {pillars.map((pillar) => (
        <div key={pillar.id}>
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-anwi-navy">{pillar.shortName}</span>
            <span className="text-xs text-anwi-muted">{pillar.weight * 100}% weight</span>
          </div>
          <div className="space-y-2">
            {countries.map((country, i) => {
              const score = country.pillars[pillar.id].score
              return (
                <div key={country.code} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs font-medium text-anwi-muted">
                    {country.code}
                  </span>
                  <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-anwi-bg-subtle">
                    <div
                      className="flex h-full items-center rounded-md px-2 text-xs font-semibold text-white transition-all"
                      style={{
                        width: `${score}%`,
                        backgroundColor: COLORS[i % COLORS.length],
                        minWidth: score > 0 ? '2.5rem' : 0,
                      }}
                    >
                      {score}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export function OverallScoreCards({ countries }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {countries.map((country, i) => (
        <div key={country.code} className="card text-center">
          <div
            className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-anwi-navy"
            style={{ backgroundColor: `${COLORS[i % COLORS.length]}22`, color: COLORS[i % COLORS.length] }}
          >
            {country.overallScore}
          </div>
          <p className="font-semibold text-anwi-navy">{country.name}</p>
          <p className="text-xs text-anwi-muted">
            Rank #{country.rank} · {country.region} Africa
          </p>
        </div>
      ))}
    </div>
  )
}
