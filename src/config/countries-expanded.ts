import type { CountryProfile } from './country-profile'

/** v0.1 expansion cohort — 10 additional countries (Central + regional gaps) */
export const expandedCountries: Omit<CountryProfile, 'rank'>[] = [
  {
    code: 'UG',
    name: 'Uganda',
    region: 'East',
    overallScore: 57,
    populationUnder25M: 16.8,
    pillars: {
      'education-pipeline': {
        score: 58,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 55 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 60 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 59 },
        ],
      },
      'entry-work-ai': {
        score: 56,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 52 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 55 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 61 },
        ],
      },
      'genz-readiness': {
        score: 55,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 54 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 53 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 58 },
        ],
      },
      'skills-infrastructure': {
        score: 60,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 58 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 64 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 58 },
        ],
      },
      'policy-participation': {
        score: 58,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 60 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 59 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 55 },
        ],
      },
      'talent-mobility': {
        score: 54,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 56 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 52 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 54 },
        ],
      },
    },
    highlights: [
      'Kampala tech ecosystem growing via mobile-money and fintech talent',
      'Youth population growth outpaces formal job creation',
    ],
    sources: ['UBOS Uganda', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'CI',
    name: "Côte d'Ivoire",
    region: 'West',
    overallScore: 56,
    populationUnder25M: 13.2,
    pillars: {
      'education-pipeline': {
        score: 57,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 55 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 59 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 57 },
        ],
      },
      'entry-work-ai': {
        score: 54,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 52 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 51 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 59 },
        ],
      },
      'genz-readiness': {
        score: 55,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 54 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 56 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 55 },
        ],
      },
      'skills-infrastructure': {
        score: 58,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 56 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 60 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 58 },
        ],
      },
      'policy-participation': {
        score: 57,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 59 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 58 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 54 },
        ],
      },
      'talent-mobility': {
        score: 55,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 54 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 56 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 55 },
        ],
      },
    },
    highlights: [
      'Abidjan anchors francophone West Africa outsourcing growth',
      'Post-conflict recovery driving vocational reform investment',
    ],
    sources: ['INS Côte d\'Ivoire', 'ILO', 'ANWI expert panel review'],
  },
  {
    code: 'TN',
    name: 'Tunisia',
    region: 'North',
    overallScore: 60,
    populationUnder25M: 3.4,
    pillars: {
      'education-pipeline': {
        score: 68,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 62 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 70 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 72 },
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
        score: 58,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 56 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 57 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 61 },
        ],
      },
      'skills-infrastructure': {
        score: 62,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 64 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 60 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 62 },
        ],
      },
      'policy-participation': {
        score: 59,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 61 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 58 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 58 },
        ],
      },
      'talent-mobility': {
        score: 57,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 60 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 54 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 57 },
        ],
      },
    },
    highlights: [
      'Strong tertiary education tradition but graduate unemployment persists',
      'Tunis and Sfax tech corridors expanding offshore services',
    ],
    sources: ['INS Tunisia', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'MU',
    name: 'Mauritius',
    region: 'East',
    overallScore: 69,
    populationUnder25M: 0.3,
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
        score: 67,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 68 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 66 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 67 },
        ],
      },
      'genz-readiness': {
        score: 70,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 72 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 66 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 72 },
        ],
      },
      'skills-infrastructure': {
        score: 74,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 78 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 70 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 74 },
        ],
      },
      'policy-participation': {
        score: 68,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 70 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 69 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 65 },
        ],
      },
      'talent-mobility': {
        score: 71,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 74 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 68 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 71 },
        ],
      },
    },
    highlights: [
      'Highest connectivity and skills infrastructure in the pilot cohort',
      'Small population but strong conversion to offshore and financial services roles',
    ],
    sources: ['Statistics Mauritius', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'BW',
    name: 'Botswana',
    region: 'Southern',
    overallScore: 58,
    populationUnder25M: 0.9,
    pillars: {
      'education-pipeline': {
        score: 62,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 60 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 64 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 62 },
        ],
      },
      'entry-work-ai': {
        score: 54,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 56 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 50 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 56 },
        ],
      },
      'genz-readiness': {
        score: 57,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 56 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 58 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 57 },
        ],
      },
      'skills-infrastructure': {
        score: 60,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 62 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 56 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 62 },
        ],
      },
      'policy-participation': {
        score: 61,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 64 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 60 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 59 },
        ],
      },
      'talent-mobility': {
        score: 55,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 56 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 52 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 57 },
        ],
      },
    },
    highlights: [
      'Stable governance supports consistent youth policy implementation',
      'Diamond economy diversification creating new entry-level sectors',
    ],
    sources: ['Statistics Botswana', 'ILO', 'ANWI expert panel review'],
  },
  {
    code: 'CM',
    name: 'Cameroon',
    region: 'Central',
    overallScore: 53,
    populationUnder25M: 12.6,
    pillars: {
      'education-pipeline': {
        score: 54,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 52 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 55 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 55 },
        ],
      },
      'entry-work-ai': {
        score: 51,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 48 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 50 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 55 },
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
        score: 54,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 52 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 56 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 54 },
        ],
      },
      'policy-participation': {
        score: 55,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 57 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 54 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 54 },
        ],
      },
      'talent-mobility': {
        score: 52,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 50 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 54 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 52 },
        ],
      },
    },
    highlights: [
      'Bilingual economy offers unique regional talent bridge',
      'Douala and Yaoundé tech scenes emerging but concentrated',
    ],
    sources: ['INS Cameroon', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'DZ',
    name: 'Algeria',
    region: 'North',
    overallScore: 55,
    populationUnder25M: 12.1,
    pillars: {
      'education-pipeline': {
        score: 58,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 52 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 60 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 62 },
        ],
      },
      'entry-work-ai': {
        score: 50,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 48 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 48 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 54 },
        ],
      },
      'genz-readiness': {
        score: 53,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 50 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 58 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 51 },
        ],
      },
      'skills-infrastructure': {
        score: 56,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 58 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 52 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 58 },
        ],
      },
      'policy-participation': {
        score: 57,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 60 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 55 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 56 },
        ],
      },
      'talent-mobility': {
        score: 50,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 48 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 50 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 52 },
        ],
      },
    },
    highlights: [
      'Large graduate output with public-sector hiring dependency',
      'Youth unemployment a persistent policy priority',
    ],
    sources: ['ONS Algeria', 'ILO', 'ANWI expert panel review'],
  },
  {
    code: 'AO',
    name: 'Angola',
    region: 'Southern',
    overallScore: 50,
    populationUnder25M: 8.9,
    pillars: {
      'education-pipeline': {
        score: 48,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 45 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 50 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 49 },
        ],
      },
      'entry-work-ai': {
        score: 47,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 44 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 45 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 52 },
        ],
      },
      'genz-readiness': {
        score: 49,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 47 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 52 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 48 },
        ],
      },
      'skills-infrastructure': {
        score: 51,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 48 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 50 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 55 },
        ],
      },
      'policy-participation': {
        score: 53,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 55 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 52 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 52 },
        ],
      },
      'talent-mobility': {
        score: 50,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 48 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 50 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 52 },
        ],
      },
    },
    highlights: [
      'Oil-dependent economy limits diversified entry-level job creation',
      'Luanda digital sector growing from low base',
    ],
    sources: ['INE Angola', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    region: 'Southern',
    overallScore: 49,
    populationUnder25M: 14.5,
    pillars: {
      'education-pipeline': {
        score: 50,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 48 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 51 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 51 },
        ],
      },
      'entry-work-ai': {
        score: 46,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 44 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 43 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 51 },
        ],
      },
      'genz-readiness': {
        score: 48,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 46 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 50 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 48 },
        ],
      },
      'skills-infrastructure': {
        score: 47,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 44 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 48 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 49 },
        ],
      },
      'policy-participation': {
        score: 52,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 54 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 51 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 51 },
        ],
      },
      'talent-mobility': {
        score: 50,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 48 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 52 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 50 },
        ],
      },
    },
    highlights: [
      'Maputo corridor shows early tech and services growth',
      'Connectivity and rural-urban divide constrain youth conversion at scale',
    ],
    sources: ['INE Mozambique', 'World Bank', 'ANWI expert panel review'],
  },
  {
    code: 'CD',
    name: 'Democratic Republic of the Congo',
    region: 'Central',
    overallScore: 47,
    populationUnder25M: 38.5,
    pillars: {
      'education-pipeline': {
        score: 46,
        indicators: [
          { id: 'grad-employment', label: 'Graduate employment linkage', score: 42 },
          { id: 'tvet-relevance', label: 'TVET labour-market alignment', score: 48 },
          { id: 'tertiary-access', label: 'Tertiary access vs demand', score: 48 },
        ],
      },
      'entry-work-ai': {
        score: 44,
        indicators: [
          { id: 'internship-density', label: 'Internship & graduate program density', score: 40 },
          { id: 'ai-tool-exposure', label: 'AI tool exposure in entry roles', score: 42 },
          { id: 'startup-hiring', label: 'Startup & tech hiring for juniors', score: 50 },
        ],
      },
      'genz-readiness': {
        score: 45,
        indicators: [
          { id: 'employer-flex', label: 'Employer flexibility for young hires', score: 43 },
          { id: 'public-sector-youth', label: 'Public sector youth absorption', score: 46 },
          { id: 'manager-training', label: 'Manager readiness for Gen Z', score: 46 },
        ],
      },
      'skills-infrastructure': {
        score: 48,
        indicators: [
          { id: 'connectivity', label: 'Youth digital connectivity', score: 44 },
          { id: 'bootcamps', label: 'Coding & digital bootcamp ecosystem', score: 50 },
          { id: 'ai-literacy', label: 'AI literacy program availability', score: 50 },
        ],
      },
      'policy-participation': {
        score: 50,
        indicators: [
          { id: 'youth-policy', label: 'National youth employment policy', score: 52 },
          { id: 'entrepreneurship', label: 'Youth entrepreneurship support', score: 48 },
          { id: 'voice-in-planning', label: 'Youth voice in economic planning', score: 50 },
        ],
      },
      'talent-mobility': {
        score: 48,
        indicators: [
          { id: 'remote-access', label: 'Remote work market access', score: 46 },
          { id: 'regional-mobility', label: 'Regional labour mobility', score: 48 },
          { id: 'visa-pathways', label: 'Skills visa & mobility pathways', score: 50 },
        ],
      },
    },
    highlights: [
      'Largest youth cohort in Central Africa — conversion at scale is the challenge',
      'Kinshasa fintech and mobile ecosystem offers early digital entry points',
    ],
    sources: ['INS DRC', 'World Bank', 'ANWI expert panel review'],
  },
]
