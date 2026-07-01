import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { countries } from '../src/config/countries'
import { pillars } from '../src/config/pillars'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'scripts', 'data')
mkdirSync(outDir, { recursive: true })

const payload = {
  exportedAt: new Date().toISOString().slice(0, 10),
  countries: countries.map((c) => ({
    code: c.code,
    name: c.name,
    region: c.region,
    overallScore: c.overallScore,
    rank: c.rank,
    populationUnder25M: c.populationUnder25M,
    pillars: Object.fromEntries(
      Object.entries(c.pillars).map(([id, p]) => [id, p.score]),
    ),
    highlights: c.highlights,
  })),
  pillars: pillars.map((p) => ({
    id: p.id,
    name: p.name,
    shortName: p.shortName,
    weight: p.weight,
    description: p.description,
  })),
}

writeFileSync(join(outDir, 'pilot-data.json'), JSON.stringify(payload, null, 2))
console.log(`Exported ${countries.length} countries to scripts/data/pilot-data.json`)
