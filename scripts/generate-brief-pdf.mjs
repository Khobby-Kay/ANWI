/**
 * Generates public/anwi-executive-brief-v0.1.pdf — AAGI Intelligence Brief style
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'
import {
  bodyText,
  bulletList,
  colors,
  drawBriefHeader,
  drawTable,
  ensureSpace,
  fonts,
  layout,
  pageWidth,
  sectionTitle,
  statGrid,
} from './pdf/theme.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dataPath = path.join(root, 'scripts', 'data', 'pilot-data.json')
const outPath = path.join(root, 'public', 'anwi-executive-brief-v0.1.pdf')

const { countries, pillars, exportedAt } = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const today = exportedAt || new Date().toISOString().slice(0, 10)

const REGION_LABELS = {
  East: 'East Africa',
  West: 'West Africa',
  North: 'North Africa',
  Southern: 'Southern Africa',
  Central: 'Central Africa',
}

const PILLAR_ABBR = {
  'education-pipeline': 'Edu',
  'entry-work-ai': 'Entry',
  'genz-readiness': 'GenZ',
  'skills-infrastructure': 'Skills',
  'policy-participation': 'Policy',
  'talent-mobility': 'Mobility',
}

const totalYouthM = countries.reduce((s, c) => s + c.populationUnder25M, 0)
const continentalAvg = Math.round(
  countries.reduce((s, c) => s + c.overallScore, 0) / countries.length,
)
const strong = countries.filter((c) => c.overallScore >= 60).length
const emerging = countries.filter((c) => c.overallScore >= 45 && c.overallScore < 60).length
const constrained = countries.filter((c) => c.overallScore < 45).length

const regional = ['East', 'West', 'North', 'Southern', 'Central']
  .map((region) => {
    const inRegion = countries.filter((c) => c.region === region)
    if (!inRegion.length) return null
    const youthM = inRegion.reduce((s, c) => s + c.populationUnder25M, 0)
    return {
      label: REGION_LABELS[region],
      count: inRegion.length,
      avg: Math.round(inRegion.reduce((s, c) => s + c.overallScore, 0) / inRegion.length),
      youthShare: Math.round((youthM / totalYouthM) * 100),
    }
  })
  .filter(Boolean)

const sorted = [...countries].sort((a, b) => a.rank - b.rank)
const topFive = sorted.slice(0, 5)

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 0, bottom: 54, left: layout.margin, right: layout.margin },
  info: {
    Title: 'ANWI Intelligence Brief — July 2026',
    Author: 'Africa Next Workforce Index',
    Subject: 'Pilot Edition 2026',
  },
})

const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

let pageNum = 1
function footer() {
  doc.font(fonts.body).fontSize(7).fillColor(colors.light)
  doc.text(
    `ANWI Intelligence Brief — ${today}  |  Page ${pageNum}`,
    layout.margin,
    layout.footerY + 16,
    { width: pageWidth(doc), align: 'center' },
  )
  pageNum++
}

drawBriefHeader(doc, {
  title: 'ANWI Intelligence Brief',
  subtitle: 'Africa Next Workforce Index — Comprehensive Platform Summary',
  meta: [
    `Generated: ${today} | Data as of: ${today}`,
    'Classification: Open — Redistribution permitted with full attribution',
  ],
})

sectionTitle(doc, 1, 'Platform Coverage at a Glance')
statGrid(doc, [
  { value: countries.length, label: 'Countries Assessed' },
  { value: pillars.length, label: 'Pillars' },
  { value: 18, label: 'Indicators' },
  { value: `${Math.round(totalYouthM)}M`, label: 'Youth Under 25' },
  { value: continentalAvg, label: 'Pilot Average' },
  { value: strong, label: 'Strong Converters' },
])
bodyText(
  doc,
  'The ANWI platform measures youth-to-workforce conversion across a 20-country pilot cohort through six weighted pillars: education pipeline, entry-level work & AI exposure, institutional GenZ readiness, digital skills infrastructure, policy participation, and cross-border talent flow.',
)

sectionTitle(doc, 2, 'Youth Conversion Landscape')
bodyText(
  doc,
  `${strong} countries score ≥60 (strong converters). ${emerging} are emerging (45–59). ${constrained} remain structurally constrained (<45). Conversion capacity is uneven — digital skills infrastructure and entry-level hiring pathways diverge most sharply between leaders and laggards.`,
)
bodyText(doc, 'Regional Conversion Average', { align: 'left' })
drawTable(
  doc,
  ['Region', 'Countries', 'Avg Score', 'Youth Share'],
  regional.map((r) => [r.label, r.count, r.avg, `${r.youthShare}%`]),
  { colWidths: [140, 70, 70, 80], fontSize: 8.5 },
)

bodyText(doc, 'Top 5 Pilot Leaders by ANWI Score')
drawTable(
  doc,
  ['#', 'Country', 'Score', 'Highlight'],
  topFive.map((c) => [c.rank, c.name, `${c.overallScore}/100`, c.highlights[0] || '']),
  { colWidths: [28, 100, 55, pageWidth(doc) - 183], fontSize: 8 },
)

footer()
doc.addPage()
doc.y = layout.margin

sectionTitle(doc, 3, 'Pilot Cohort — Full ANWI Assessment')
bodyText(
  doc,
  'All 20 pilot countries assessed using the complete ANWI methodology (6 pillars, 18 indicators). Scores are normalized 0–100. Pillar abbreviations: Edu, Entry, GenZ, Skills, Policy, Mobility.',
)

const abbrHeaders = pillars.map((p) => PILLAR_ABBR[p.id] || p.shortName.slice(0, 5))
const tableRows = sorted.map((c) => [
  c.rank,
  c.name,
  c.overallScore,
  ...pillars.map((p) => c.pillars[p.id]),
])
const colW = [22, 95, 38, ...Array(6).fill(34)]
drawTable(doc, ['#', 'Country', 'ANWI', ...abbrHeaders], tableRows, {
  colWidths: colW,
  fontSize: 7,
  rowH: 16,
})

bodyText(
  doc,
  `${sorted[0].name} leads with ${sorted[0].overallScore}/100. The gap between pillar scores reveals that policy intent alone does not capture conversion capacity — skills infrastructure and entry-level pathways often lag policy scores.`,
)

sectionTitle(doc, 4, 'Continental Pillar Averages')
drawTable(
  doc,
  ['Pillar', 'Weight', 'Pilot Avg'],
  pillars.map((p) => {
    const avg = Math.round(
      countries.reduce((s, c) => s + c.pillars[p.id], 0) / countries.length,
    )
    return [p.name, `${(p.weight * 100).toFixed(0)}%`, avg]
  }),
  { colWidths: [240, 60, 60], fontSize: 8.5 },
)

sectionTitle(doc, 5, 'Skills & Conversion Spotlight')
const skillsLeader = [...countries].sort(
  (a, b) => b.pillars['skills-infrastructure'] - a.pillars['skills-infrastructure'],
)[0]
bodyText(
  doc,
  `Digital skills infrastructure shows the widest score spread of any pillar. ${skillsLeader.name} leads on skills infrastructure (${skillsLeader.pillars['skills-infrastructure']}/100). Bootcamp density, youth connectivity, and AI literacy programs concentrate in urban hubs while youth population growth continues continent-wide.`,
)

ensureSpace(doc, 120)
sectionTitle(doc, 6, 'Intelligence Tools Overview')
drawTable(
  doc,
  ['Tool', 'Coverage', 'Description'],
  [
    ['Country Compare', `${countries.length} countries`, 'Side-by-side pillar scores for up to four pilot countries'],
    ['Executive Summary', 'Live', 'Headline intelligence, regional breakdown, full assessment table'],
    ['Methodology', '6 pillars', 'Scoring framework, indicators, limitations, and data sources'],
    ['Executive Brief', 'PDF', 'This document — downloadable intelligence summary'],
    ['Methodology Report', 'PDF', 'Full methodology paper with detailed framework'],
  ],
  { colWidths: [110, 80, pageWidth(doc) - 190], fontSize: 8 },
)

footer()
doc.addPage()
doc.y = layout.margin

sectionTitle(doc, 7, 'Strategic Implications')
bulletList(doc, [
  'Governments: Move beyond enrollment metrics to track graduate employment linkage, internship density, and AI literacy availability.',
  'Employers: Entry-level role design and GenZ-ready management are competitive differentiators where youth supply exceeds absorption.',
  'Educators: TVET alignment and bootcamp-to-employer pipelines are highest-leverage interventions in constrained markets.',
  'Investors: Digital skills infrastructure investment yields measurable conversion gains; policy-only interventions show limited impact alone.',
])

sectionTitle(doc, 8, 'Methodology & Data Sources')
bodyText(
  doc,
  'All data is drawn from the ANWI platform pilot databases, aggregating official government publications, ILO, UNESCO, World Bank, African Union research, and ANWI expert panel review. The methodology is structured around 6 pillars and 18 indicators per country. Full documentation: anwi.vercel.app/methodology',
)

sectionTitle(doc, 9, 'Citation')
bodyText(
  doc,
  `Africa Next Workforce Index (${new Date().getFullYear()}). "ANWI Intelligence Brief: The State of Africa's Next Workforce." ANWI. Retrieved ${today}. Available at: https://anwi.vercel.app/executive-summary`,
)
bodyText(
  doc,
  `© ${new Date().getFullYear()} Africa Next Workforce Index. This brief is generated from pilot data and may be redistributed with full attribution.`,
)

footer()
doc.end()

stream.on('finish', () => {
  console.log(`Generated ${outPath}`)
})
