import { Fragment, useMemo, useState } from 'react'
import { brand } from '../config/brand'
import { countries, countryByCode, defaultCompareCodes } from '../config/countries'
import { pillars } from '../config/pillars'
import { OverallScoreCards, PillarChart } from '../components/PillarChart'

const MAX_SELECTION = 4

export function ComparePage() {
  const [selected, setSelected] = useState<string[]>(defaultCompareCodes)

  const selectedCountries = useMemo(
    () => selected.map((code) => countryByCode[code]).filter(Boolean),
    [selected],
  )

  function toggleCountry(code: string) {
    setSelected((prev) => {
      if (prev.includes(code)) {
        return prev.length > 1 ? prev.filter((c) => c !== code) : prev
      }
      if (prev.length >= MAX_SELECTION) return prev
      return [...prev, code]
    })
  }

  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-anwi-gold">Compare</p>
          <h1 className="mt-2 text-4xl font-bold">Country Comparison</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Select up to four countries to compare ANWI pillar scores. Scores are normalized 0–100.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="card mb-8">
            <h2 className="font-semibold text-anwi-navy">Select countries</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {countries.map((c) => {
                const active = selected.includes(c.code)
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => toggleCountry(c.code)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'border-anwi-teal bg-anwi-teal text-white'
                        : 'border-slate-200 bg-white text-anwi-slate hover:border-anwi-teal'
                    }`}
                  >
                    {c.name} ({c.overallScore})
                  </button>
                )
              })}
            </div>
            <p className="mt-3 text-xs text-anwi-slate">
              {selected.length}/{MAX_SELECTION} selected · {brand.disclaimer}
            </p>
          </div>

          <OverallScoreCards countries={selectedCountries} />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="card">
              <h2 className="text-lg font-semibold text-anwi-navy">Pillar comparison</h2>
              <div className="mt-6">
                <PillarChart countries={selectedCountries} />
              </div>
            </div>

            <div className="card overflow-x-auto">
              <h2 className="text-lg font-semibold text-anwi-navy">Detailed indicators</h2>
              <table className="mt-4 w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-anwi-slate">
                    <th className="pb-2 pr-4 font-medium">Indicator</th>
                    {selectedCountries.map((c) => (
                      <th key={c.code} className="pb-2 px-2 text-center font-medium">
                        {c.code}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pillars.map((pillar) => {
                    const indicators = countryByCode[selected[0]]?.pillars[pillar.id].indicators ?? []
                    return (
                      <Fragment key={pillar.id}>
                        <tr className="bg-slate-50">
                          <td
                            colSpan={selectedCountries.length + 1}
                            className="py-2 pr-4 font-semibold text-anwi-navy"
                          >
                            {pillar.shortName}
                          </td>
                        </tr>
                        {indicators.map((ind, idx) => (
                          <tr key={`${pillar.id}-${ind.id}`} className="border-b border-slate-100">
                            <td className="py-2 pr-4 text-anwi-slate">{ind.label}</td>
                            {selectedCountries.map((c) => (
                              <td
                                key={c.code}
                                className="py-2 px-2 text-center font-medium text-anwi-navy"
                              >
                                {c.pillars[pillar.id].indicators[idx]?.score ?? '—'}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
