import type { CountryProfile } from './country-profile'
import { expandedCountries } from './countries-expanded'

export type { CountryProfile, Indicator, PillarScore } from './country-profile'

function assignRanks(data: Omit<CountryProfile, 'rank'>[]): CountryProfile[] {
  const order = [...data]
    .sort((a, b) => b.overallScore - a.overallScore)
    .map((c, i) => [c.code, i + 1] as const)
  const rankByCode = Object.fromEntries(order) as Record<string, number>
  return data.map((c) => ({ ...c, rank: rankByCode[c.code]! }))
}

/** Pilot v0.1 — expert-led estimates from public sources. Not official statistics. */
const pilotCountries: Omit<CountryProfile, 'rank'>[] = [
  {
    code: 'KE',
    name: 'Kenya',
    region: 'East',
    overallScore: 68,
    populationUnder25M: 22.4,
    pillars: {
      'education-pipeline': {
        score: 72,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 74 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 70 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 72 },
        ],
      },
      'entry-work-ai': {
        score: 71,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 68 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 74 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 71 },
        ],
      },
      'genz-readiness': {
        score: 65,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 63 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 58 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 74 },
        ],
      },
      'skills-infrastructure': {
        score: 78,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 76 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 82 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 76 },
        ],
      },
      'policy-participation': {
        score: 62,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 65 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 64 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 57 },
        ],
      },
      'talent-mobility': {
        score: 70,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 75 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 66 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 69 },
        ],
      },
    },
    highlights: [
      'Strongest digital skills bootcamp density in East Africa',
      'Nairobi hub drives entry-level tech hiring',
    ],
    sources: ['World Bank WDI', 'ILO youth employment briefs', 'ANWI expert panel review'],
  },
  {
    code: 'NG',
    name: 'Nigeria',
    region: 'West',
    overallScore: 61,
    populationUnder25M: 64.8,
    pillars: {
      'education-pipeline': {
        score: 58,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 52 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 55 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 67 },
        ],
      },
      'entry-work-ai': {
        score: 64,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 58 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 66 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 68 },
        ],
      },
      'genz-readiness': {
        score: 59,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 57 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 52 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 68 },
        ],
      },
      'skills-infrastructure': {
        score: 66,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 62 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 72 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 64 },
        ],
      },
      'policy-participation': {
        score: 55,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 58 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 56 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 51 },
        ],
      },
      'talent-mobility': {
        score: 63,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 70 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 58 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 61 },
        ],
      },
    },
    highlights: [
      'Largest youth population on the index — scale opportunity and pressure',
      'Lagos & Abuja drive disproportionate entry-level tech demand',
    ],
    sources: ['NBS Nigeria', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'ZA',
    name: 'South Africa',
    region: 'Southern',
    overallScore: 66,
    populationUnder25M: 18.2,
    pillars: {
      'education-pipeline': {
        score: 64,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 62 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 66 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 64 },
        ],
      },
      'entry-work-ai': {
        score: 63,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 68 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 61 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 60 },
        ],
      },
      'genz-readiness': {
        score: 62,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 60 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 55 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 71 },
        ],
      },
      'skills-infrastructure': {
        score: 71,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 74 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 70 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 69 },
        ],
      },
      'policy-participation': {
        score: 68,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 70 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 67 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 67 },
        ],
      },
      'talent-mobility': {
        score: 67,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 72 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 62 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 67 },
        ],
      },
    },
    highlights: [
      'Mature policy frameworks but youth unemployment remains structurally high',
      'Strong corporate graduate programs in finance and telecom',
    ],
    sources: ['Stats SA', 'ILO', 'ANWI expert panel review'],
  },
  {
    code: 'GH',
    name: 'Ghana',
    region: 'West',
    overallScore: 64,
    populationUnder25M: 11.3,
    pillars: {
      'education-pipeline': {
        score: 66,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 64 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 68 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 66 },
        ],
      },
      'entry-work-ai': {
        score: 60,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 58 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 59 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 63 },
        ],
      },
      'genz-readiness': {
        score: 63,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 65 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 60 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 64 },
        ],
      },
      'skills-infrastructure': {
        score: 67,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 68 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 66 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 67 },
        ],
      },
      'policy-participation': {
        score: 65,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 68 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 66 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 61 },
        ],
      },
      'talent-mobility': {
        score: 62,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 64 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 60 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 62 },
        ],
      },
    },
    highlights: [
      'Stable democratic governance supports youth policy continuity',
      'Accra emerging as a West African talent hub',
    ],
    sources: ['Ghana Statistical Service', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'RW',
    name: 'Rwanda',
    region: 'East',
    overallScore: 71,
    populationUnder25M: 5.1,
    pillars: {
      'education-pipeline': {
        score: 74,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 72 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 78 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 72 },
        ],
      },
      'entry-work-ai': {
        score: 68,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 66 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 70 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 68 },
        ],
      },
      'genz-readiness': {
        score: 72,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 74 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 70 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 72 },
        ],
      },
      'skills-infrastructure': {
        score: 75,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 78 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 74 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 73 },
        ],
      },
      'policy-participation': {
        score: 73,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 76 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 74 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 69 },
        ],
      },
      'talent-mobility': {
        score: 64,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 68 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 60 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 64 },
        ],
      },
    },
    highlights: [
      'Highest pilot score — strong institutional coordination on youth skills',
      'Kigali Innovation City anchors digital talent pipeline',
    ],
    sources: ['NISR Rwanda', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'EG',
    name: 'Egypt',
    region: 'North',
    overallScore: 59,
    populationUnder25M: 28.6,
    pillars: {
      'education-pipeline': {
        score: 62,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 58 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 64 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 64 },
        ],
      },
      'entry-work-ai': {
        score: 57,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 55 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 56 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 60 },
        ],
      },
      'genz-readiness': {
        score: 56,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 54 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 58 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 56 },
        ],
      },
      'skills-infrastructure': {
        score: 63,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 65 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 62 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 62 },
        ],
      },
      'policy-participation': {
        score: 60,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 62 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 61 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 57 },
        ],
      },
      'talent-mobility': {
        score: 55,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 58 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 52 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 55 },
        ],
      },
    },
    highlights: [
      'Large graduate output with mismatch to private-sector demand',
      'Cairo tech corridor growing but concentrated',
    ],
    sources: ['CAPMAS Egypt', 'ILO', 'ANWI expert panel review'],
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    region: 'East',
    overallScore: 52,
    populationUnder25M: 35.2,
    pillars: {
      'education-pipeline': {
        score: 54,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 50 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 56 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 56 },
        ],
      },
      'entry-work-ai': {
        score: 48,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 45 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 46 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 53 },
        ],
      },
      'genz-readiness': {
        score: 50,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 48 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 52 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 50 },
        ],
      },
      'skills-infrastructure': {
        score: 51,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 48 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 52 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 53 },
        ],
      },
      'policy-participation': {
        score: 55,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 58 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 54 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 53 },
        ],
      },
      'talent-mobility': {
        score: 52,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 50 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 52 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 54 },
        ],
      },
    },
    highlights: [
      'Second-largest youth cohort — industrial parks expanding entry-level manufacturing',
      'Digital infrastructure gap limits AI exposure at scale',
    ],
    sources: ['Ethiopian Statistical Service', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'MA',
    name: 'Morocco',
    region: 'North',
    overallScore: 63,
    populationUnder25M: 10.8,
    pillars: {
      'education-pipeline': {
        score: 65,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 63 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 68 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 64 },
        ],
      },
      'entry-work-ai': {
        score: 61,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 64 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 58 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 61 },
        ],
      },
      'genz-readiness': {
        score: 60,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 58 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 59 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 63 },
        ],
      },
      'skills-infrastructure': {
        score: 66,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 68 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 64 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 66 },
        ],
      },
      'policy-participation': {
        score: 64,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 66 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 65 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 61 },
        ],
      },
      'talent-mobility': {
        score: 62,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 64 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 58 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 64 },
        ],
      },
    },
    highlights: [
      'Strong Francophone-Europe talent bridge via outsourcing sector',
      'Casablanca & Rabat lead on graduate placement programs',
    ],
    sources: ['HCP Morocco', 'ILO', 'ANWI expert panel review'],
  },
  {
    code: 'SN',
    name: 'Senegal',
    region: 'West',
    overallScore: 58,
    populationUnder25M: 6.8,
    pillars: {
      'education-pipeline': {
        score: 60,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 58 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 62 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 60 },
        ],
      },
      'entry-work-ai': {
        score: 55,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 52 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 54 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 59 },
        ],
      },
      'genz-readiness': {
        score: 57,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 56 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 55 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 60 },
        ],
      },
      'skills-infrastructure': {
        score: 60,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 58 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 62 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 60 },
        ],
      },
      'policy-participation': {
        score: 59,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 61 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 60 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 56 },
        ],
      },
      'talent-mobility': {
        score: 56,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 58 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 54 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 56 },
        ],
      },
    },
    highlights: [
      'Dakar digital ecosystem growing via francophone tech networks',
      'Emerging focus on youth entrepreneurship through DER/FJ',
    ],
    sources: ['ANSD Senegal', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    region: 'East',
    overallScore: 54,
    populationUnder25M: 24.1,
    pillars: {
      'education-pipeline': {
        score: 56,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 54 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 58 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 56 },
        ],
      },
      'entry-work-ai': {
        score: 50,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 48 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 49 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 53 },
        ],
      },
      'genz-readiness': {
        score: 52,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 50 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 54 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 52 },
        ],
      },
      'skills-infrastructure': {
        score: 53,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 50 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 55 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 54 },
        ],
      },
      'policy-participation': {
        score: 57,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 60 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 58 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 53 },
        ],
      },
      'talent-mobility': {
        score: 54,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 52 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 55 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 55 },
        ],
      },
    },
    highlights: [
      'Dar es Salaam hub expanding but rural youth connectivity lags',
      'Policy momentum on vocational reform under National Development Vision',
    ],
    sources: ['NBS Tanzania', 'World Bank', 'ANWI expert panel review'],
  },
  ...expandedCountries,
]

export const countries = assignRanks(pilotCountries)

export const countryByCode = Object.fromEntries(
  countries.map((c) => [c.code, c]),
) as Record<string, CountryProfile>

export const defaultCompareCodes = ['RW', 'KE', 'NG', 'GH']
