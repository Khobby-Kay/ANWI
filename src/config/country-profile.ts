import type { PillarId } from './pillars'

export type Indicator = {
  id: string
  label: string
  score: number
  note?: string
}

export type PillarScore = {
  score: number
  indicators: Indicator[]
}

export type CountryProfile = {
  code: string
  name: string
  region: 'East' | 'West' | 'North' | 'Southern' | 'Central'
  overallScore: number
  rank: number
  populationUnder25M: number
  pillars: Record<PillarId, PillarScore>
  highlights: string[]
  sources: string[]
}
