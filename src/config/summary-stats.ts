import { countries } from './countries'
import { pillars } from './pillars'

const REGION_LABELS = {
  East: 'East Africa',
  West: 'West Africa',
  North: 'North Africa',
  Southern: 'Southern Africa',
  Central: 'Central Africa',
} as const

export function computeSummaryStats() {
  const totalYouthM = countries.reduce((sum, country) => sum + country.populationUnder25M, 0)
  const continentalAvg = Math.round(
    countries.reduce((sum, country) => sum + country.overallScore, 0) / countries.length,
  )

  const regional = (['East', 'West', 'North', 'Southern', 'Central'] as const)
    .map((region) => {
      const inRegion = countries.filter((country) => country.region === region)
      if (inRegion.length === 0) return null

      const avgScore = Math.round(
        inRegion.reduce((sum, country) => sum + country.overallScore, 0) / inRegion.length,
      )
      const youthM = inRegion.reduce((sum, country) => sum + country.populationUnder25M, 0)

      return {
        region,
        label: REGION_LABELS[region],
        count: inRegion.length,
        avgScore,
        youthM: Math.round(youthM * 10) / 10,
        youthShare: Math.round((youthM / totalYouthM) * 100),
      }
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)

  const pillarAvgs = pillars.map((pillar) => ({
    id: pillar.id,
    shortName: pillar.shortName,
    avg: Math.round(
      countries.reduce((sum, country) => sum + country.pillars[pillar.id].score, 0) /
        countries.length,
    ),
  }))

  const sortedByRank = [...countries].sort((a, b) => a.rank - b.rank)
  const topFive = sortedByRank.slice(0, 5)
  const bottomFive = [...sortedByRank].reverse().slice(0, 5)

  const strongConversion = countries.filter((country) => country.overallScore >= 60).length
  const emerging = countries.filter(
    (country) => country.overallScore >= 45 && country.overallScore < 60,
  ).length
  const constrained = countries.filter((country) => country.overallScore < 45).length

  const skillsLeader = [...countries].sort(
    (a, b) => b.pillars['skills-infrastructure'].score - a.pillars['skills-infrastructure'].score,
  )[0]!

  const educationLeader = [...countries].sort(
    (a, b) => b.pillars['education-pipeline'].score - a.pillars['education-pipeline'].score,
  )[0]!

  return {
    countryCount: countries.length,
    indicatorCount: 18,
    pillarCount: pillars.length,
    totalYouthM: Math.round(totalYouthM * 10) / 10,
    continentalAvg,
    regional,
    pillarAvgs,
    topFive,
    bottomFive,
    strongConversion,
    emerging,
    constrained,
    sortedByRank,
    skillsLeader,
    educationLeader,
  }
}
