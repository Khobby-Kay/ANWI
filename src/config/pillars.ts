export const PILLAR_IDS = [
  'education-pipeline',
  'entry-work-ai',
  'genz-readiness',
  'skills-infrastructure',
  'policy-participation',
  'talent-mobility',
] as const

export type PillarId = (typeof PILLAR_IDS)[number]

export type Pillar = {
  id: PillarId
  name: string
  shortName: string
  description: string
  weight: number
}

export const pillars: Pillar[] = [
  {
    id: 'education-pipeline',
    name: 'Education-to-Economy Pipeline',
    shortName: 'Education Pipeline',
    description:
      'How effectively schooling, TVET, and higher education connect graduates to productive work.',
    weight: 0.2,
  },
  {
    id: 'entry-work-ai',
    name: 'Entry-Level Work & AI Exposure',
    shortName: 'Entry Work & AI',
    description:
      'Availability of first jobs, internships, and early-career roles that expose youth to digital and AI tools.',
    weight: 0.18,
  },
  {
    id: 'genz-readiness',
    name: 'Institutional GenZ Readiness',
    shortName: 'GenZ Readiness',
    description:
      'Whether employers, public sector, and educators are structured to absorb and develop Gen Z talent.',
    weight: 0.16,
  },
  {
    id: 'skills-infrastructure',
    name: 'Digital & AI Skills Infrastructure',
    shortName: 'Skills Infrastructure',
    description:
      'Breadth of coding bootcamps, digital literacy programs, connectivity, and AI learning pathways.',
    weight: 0.18,
  },
  {
    id: 'policy-participation',
    name: 'Policy & Economic Participation',
    shortName: 'Policy & Participation',
    description:
      'Youth employment policy, entrepreneurship support, and inclusion of young people in economic planning.',
    weight: 0.14,
  },
  {
    id: 'talent-mobility',
    name: 'Cross-Border Talent Flow',
    shortName: 'Talent Mobility',
    description:
      'Regional mobility, remote-work access, and pathways for African youth to compete in continental and global markets.',
    weight: 0.14,
  },
]

export const pillarById = Object.fromEntries(
  pillars.map((p) => [p.id, p]),
) as Record<PillarId, Pillar>
