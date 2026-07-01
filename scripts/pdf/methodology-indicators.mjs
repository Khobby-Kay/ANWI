/** Five-level scoring bands reused across ANWI indicators (AAGI-style) */
export const SCORE_BANDS = [
  ['0–20', 'Nascent', 'Weak or no documented conversion capacity; no structured pathway.'],
  ['21–40', 'Emerging', 'Early signals or pilots; fragmented and structurally constrained.'],
  ['41–60', 'Developing', 'Moderate capacity with identifiable gaps vs African peers.'],
  ['61–80', 'Advancing', 'Strong relative performance; scaling pathways evident.'],
  ['81–100', 'Leading', 'Continental benchmark; systematic, measurable conversion at scale.'],
]

function ind(id, name, description, rationale, sources, criteria) {
  return { id, name, description, rationale, sources, criteria: criteria || SCORE_BANDS }
}

export const METHODOLOGY_PILLARS = [
  {
    code: 'P1',
    name: 'Education-to-Economy Pipeline',
    weight: '20%',
    summary:
      'This pillar assesses how effectively schooling, TVET, and higher education connect graduates to productive work. It examines graduate employment linkage, vocational alignment, and the balance between enrollment expansion and labour-market absorption.',
    indicators: [
      ind(
        '1.1',
        'Graduate Employment Linkage',
        'How effectively tertiary graduates enter relevant employment within 12–24 months of completion, measured through tracer studies, graduate surveys, and employer linkage programmes.',
        'Education expansion without employment absorption creates credential inflation. Linkage rates are the clearest signal that schooling converts to productive work.',
        'National statistical offices; UNESCO UIS; World Bank; university tracer studies; employer surveys; ANWI expert panel',
      ),
      ind(
        '1.2',
        'TVET Labour-Market Alignment',
        'Relevance of vocational and technical training curricula to employer demand, apprenticeship density, and certification recognition by industry.',
        'TVET is Africa\'s largest formal skills pipeline. Misalignment between training and hiring is the primary bottleneck in constrained markets.',
        'ILO skills surveys; national TVET authority records; sector skills councils; World Bank Skills Toward Employment reports',
      ),
      ind(
        '1.3',
        'Tertiary Access vs Demand',
        'Balance between tertiary enrollment growth and labour-market capacity to absorb graduates, including youth NEET rates among tertiary-educated cohorts.',
        'Enrollment without absorption signals a conversion failure at the highest education tier. This indicator penalises credential expansion disconnected from hiring.',
        'UNESCO enrollment data; ILO NEET statistics; national labour force surveys; African Development Bank education briefs',
      ),
    ],
  },
  {
    code: 'P2',
    name: 'Entry-Level Work & AI Exposure',
    weight: '18%',
    summary:
      'This pillar measures availability of first jobs, internships, and early-career roles that expose youth to digital and AI-augmented workflows. It captures whether markets create structured entry pathways into an AI-shaped economy.',
    indicators: [
      ind(
        '2.1',
        'Internship & Graduate Program Density',
        'Availability of structured internships, graduate schemes, and entry-level programmes in private sector, public sector, and high-growth industries.',
        'First employment is the critical conversion gate. Internship density signals whether employers invest in junior talent pipelines.',
        'Company career pages; ministry of labour records; startup ecosystem reports; LinkedIn job posting analysis (supplementary); expert validation',
      ),
      ind(
        '2.2',
        'AI Tool Exposure in Entry Roles',
        'Extent to which junior and entry-level roles involve digital workflows, automation tools, or AI-augmented tasks — proxy-scored where direct data is unavailable.',
        'AI exposure in first jobs determines whether youth enter the next economy or legacy employment. v0.1 uses sector and role proxies pending standardised surveys.',
        'Job posting analysis; sector adoption studies; McKinsey/Global Digital Jobs reports; ANWI expert panel',
      ),
      ind(
        '2.3',
        'Startup & Tech Hiring for Juniors',
        'Early-career hiring velocity in technology, fintech, and high-growth sectors relative to youth labour force size.',
        'Tech hiring for juniors is a leading indicator of conversion in digital economies. Hub cities drive disproportionate scores within countries.',
        'Startup ecosystem databases; tech employer surveys; Partech/Disrupt Africa labour market briefs; national innovation agency records',
      ),
    ],
  },
  {
    code: 'P3',
    name: 'Institutional GenZ Readiness',
    weight: '16%',
    summary:
      'This pillar evaluates whether employers, public sector institutions, and educators are structured to absorb and develop Gen Z talent — including hiring flexibility, public youth absorption, and manager readiness.',
    indicators: [
      ind(
        '3.1',
        'Employer Flexibility for Young Hires',
        'Hiring practices, onboarding design, role structures, and compensation models adapted for young workers entering first careers.',
        'Gen Z enters a labour market designed for prior generations. Employer flexibility determines absorption capacity where youth supply exceeds structured roles.',
        'Employer association surveys; HR policy reviews; youth employment programme evaluations; ILO school-to-work transition data',
      ),
      ind(
        '3.2',
        'Public Sector Youth Absorption',
        'Government employment programmes, national youth service schemes, and public-sector graduate intake relative to youth unemployment pressure.',
        'Public sector remains a major employer across Africa. Youth absorption programmes signal institutional commitment to conversion at scale.',
        'Public service commission data; national youth service records; government budget documents; AU youth employment trackers',
      ),
      ind(
        '3.3',
        'Manager Readiness for Gen Z',
        'Workplace adaptation including feedback culture, digital-native management practices, and development pathways for young employees.',
        'Youth digital fluency often exceeds manager readiness. This indicator captures the institutional friction that limits Gen Z productivity.',
        'Workforce development surveys; corporate training records; expert panel assessments; youth employment NGO reports',
      ),
    ],
  },
  {
    code: 'P4',
    name: 'Digital & AI Skills Infrastructure',
    weight: '18%',
    summary:
      'This pillar assesses the breadth of coding bootcamps, digital literacy programmes, youth connectivity, and AI learning pathways. It shows the widest score spread in the pilot cohort.',
    indicators: [
      ind(
        '4.1',
        'Youth Digital Connectivity',
        'Internet access, device availability, and affordability for under-25 populations, including mobile-first access patterns.',
        'Skills programmes cannot convert youth without connectivity. This is a binding precondition scored as a context-weighted governance indicator.',
        'ITU statistics; GSMA Mobile Connectivity Index; World Bank WDI; national telecom regulator data',
      ),
      ind(
        '4.2',
        'Coding & Digital Bootcamp Ecosystem',
        'Density, quality, and employer linkage of short-cycle digital skills providers including coding bootcamps and tech academies.',
        'Bootcamps are Africa\'s fastest conversion pathway outside formal education. Ecosystem density correlates strongly with overall ANWI scores.',
        'Bootcamp directories; AfriLabs; ministry of ICT records; employer partnership data; expert validation',
      ),
      ind(
        '4.3',
        'AI Literacy Program Availability',
        'National, institutional, or private AI upskilling initiatives targeting youth and early-career workers.',
        'AI literacy is the next-layer skill above digital basics. Availability signals whether countries prepare youth for AI-augmented work, not just digital access.',
        'Government digital skills programmes; university AI course offerings; private academy listings; UNESCO AI literacy trackers',
      ),
    ],
  },
  {
    code: 'P5',
    name: 'Policy & Economic Participation',
    weight: '14%',
    summary:
      'This pillar examines youth employment policy, entrepreneurship support, and inclusion of young people in economic planning — measuring whether governments treat conversion as a policy priority.',
    indicators: [
      ind(
        '5.1',
        'National Youth Employment Policy',
        'Existence, funding, implementation tracking, and institutional anchor for national youth employment frameworks.',
        'Policy signals government intent. Implementation and funding distinguish rhetoric from conversion strategy.',
        'Government youth ministry publications; AU youth employment trackers; national development plans; budget documents',
      ),
      ind(
        '5.2',
        'Youth Entrepreneurship Support',
        'Access to capital, incubation, regulatory support, and market linkage for young founders.',
        'Entrepreneurship is a major absorption pathway where formal hiring lags. Support infrastructure converts youth into economic participants directly.',
        'Development finance institution records; startup ecosystem reports; central bank SME data; innovation hub directories',
      ),
      ind(
        '5.3',
        'Youth Voice in Economic Planning',
        'Inclusion of under-35 stakeholders in policy design, national planning consultations, and economic advisory bodies.',
        'Conversion policy designed without youth input misaligns with Gen Z labour market behaviour. Voice indicators capture participatory governance.',
        'Consultation records; national planning commission documents; civil society reports; parliamentary committee records',
      ),
    ],
  },
  {
    code: 'P6',
    name: 'Cross-Border Talent Flow',
    weight: '14%',
    summary:
      'This pillar measures regional mobility, remote-work market access, and skills visa pathways — capturing whether African youth can compete in continental and global labour markets.',
    indicators: [
      ind(
        '6.1',
        'Remote Work Market Access',
        'Ability of youth to compete for remote digital roles globally, including payment infrastructure, platform access, and remote-job density.',
        'Remote work decouples conversion from local job scarcity. Markets with strong remote access outperform peers on overall ANWI scores.',
        'Remote job platform data; fintech/payment infrastructure reports; digital nomad policy reviews; expert surveys',
      ),
      ind(
        '6.2',
        'Regional Labour Mobility',
        'Intra-African labour mobility frameworks, AfCFTA labour provisions, and cross-border hiring for skilled youth.',
        'Regional mobility expands conversion opportunities beyond national labour markets. REC coordination is the primary governance signal.',
        'AfCFTA secretariat; REC labour mobility protocols; migration policy databases; World Bank migration briefs',
      ),
      ind(
        '6.3',
        'Skills Visa & Mobility Pathways',
        'Legal frameworks for talent export, return migration, and skills-based visa programmes benefiting youth workers.',
        'Managed mobility converts Africa\'s youth dividend into global competitiveness while enabling return of skills and capital.',
        'Immigration authority records; bilateral labour agreements; diaspora engagement policies; IOM migration data',
      ),
    ],
  },
]

export const TOC_SECTIONS = [
  {
    title: 'Section 1: Measuring Youth Conversion in Africa',
    items: ['The Central Question', 'What ANWI Measures That Others Do Not', 'Scope and Boundaries'],
  },
  {
    title: 'Section 2: High-Level Framework',
    items: ['Theory of Change', 'The Six Pillars', 'Pillar Weightings'],
  },
  {
    title: 'Section 3: Scoring Methodology',
    items: [
      'Five-Level Scoring Scale',
      'Scoring Principles',
      'Documentation Quality Framework',
      'Aggregation Rules',
    ],
  },
  {
    title: 'Section 4: Detailed Framework',
    items: METHODOLOGY_PILLARS.map((p) => `${p.code}: ${p.name} (${p.weight})`),
  },
  {
    title: 'Section 5: Data Collection',
    items: [],
  },
  {
    title: 'Section 6: Data Processing',
    items: [],
  },
  {
    title: 'Section 7: Quality Assurance',
    items: [],
  },
  {
    title: 'Section 8: Relationship to Other Indices',
    items: [],
  },
  {
    title: 'Section 9: Pilot Scoring Results',
    items: [],
  },
  {
    title: 'Section 10: Limitations',
    items: [],
  },
]

export const ANWI_DIFFERENTIATORS = [
  ['Youth Conversion Focus', 'Measures schooling-to-productive-work pipeline, not generic competitiveness.'],
  ['Entry-Level & AI Exposure', 'First jobs and junior-role AI exposure scored explicitly — absent from most indices.'],
  ['Institutional GenZ Readiness', 'Employer and manager adaptation for Gen Z, not just skills supply.'],
  ['Bootcamp-to-Employer Pipeline', 'Short-cycle skills providers weighted as conversion infrastructure.'],
  ['Cross-Border Talent Flow', 'Remote work and regional mobility as conversion multipliers.'],
  ['Africa-Specific Expert Review', 'Expert panel fills gaps where youth conversion data is sparse continent-wide.'],
]
