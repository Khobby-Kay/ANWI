import { Fragment, useMemo, useState } from 'react'
import { brand } from '../config/brand'
import { countries, countryByCode, defaultCompareCodes } from '../config/countries'
import { pillars } from '../config/pillars'
import { OverallScoreCards, PillarChart } from '../components/PillarChart'
import { SectionHeading } from '../components/SectionHeading'

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
        <div className="container-anwi">
          <p className="section-label">Compare</p>
          <h1 className="hero-title mt-3 text-4xl md:text-5xl">Country Comparison</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Select up to four countries to compare ANWI pillar scores. Scores are normalized 0–100.
          </p>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi">
          <div className="card mb-8">
            <SectionHeading label="Selection" title="Select countries" />
            <div className="mt-6 flex flex-wrap gap-2">
              {countries.map((c) => {
                const active = selected.includes(c.code)
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => toggleCountry(c.code)}
                    className={active ? 'country-pill-active' : 'country-pill'}
                  >
                    {c.name} ({c.overallScore})
                  </button>
                )
              })}
            </div>
            <p className="mt-4 text-xs text-anwi-muted">
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
              <table className="anwi-table mt-4 w-full min-w-[480px] text-left">
                <thead>
                  <tr>
                    <th className="pr-4">Indicator</th>
                    {selectedCountries.map((c) => (
                      <th key={c.code} className="px-2 text-center">
                        {c.code}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pillars.map((pillar) => {
                    const indicators =
                      countryByCode[selected[0]]?.pillars[pillar.id].indicators ?? []
                    return (
                      <Fragment key={pillar.id}>
                        <tr className="bg-anwi-bg-subtle">
                          <td
                            colSpan={selectedCountries.length + 1}
                            className="py-2 pr-4 font-semibold text-anwi-navy"
                          >
                            {pillar.shortName}
                          </td>
                        </tr>
                        {indicators.map((ind, idx) => (
                          <tr key={`${pillar.id}-${ind.id}`}>
                            <td className="pr-4 text-anwi-muted">{ind.label}</td>
                            {selectedCountries.map((c) => (
                              <td
                                key={c.code}
                                className="px-2 text-center font-medium text-anwi-navy"
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
