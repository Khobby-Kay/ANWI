/**
 * Generates public/anwi-methodology-v0.1.pdf — AAGI 2026 Methodology Report structure
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'
import {
  ANWI_DIFFERENTIATORS,
  METHODOLOGY_PILLARS,
  SCORE_BANDS,
  TOC_SECTIONS,
} from './pdf/methodology-indicators.mjs'
import {
  bodyText,
  bulletList,
  drawReportCover,
  drawRunningFooter,
  drawTable,
  indicatorBlock,
  italicQuote,
  layout,
  pillarBanner,
  sectionHeading,
  subHeading,
} from './pdf/theme.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dataPath = path.join(root, 'scripts', 'data', 'pilot-data.json')
const outPath = path.join(root, 'public', 'anwi-methodology-v0.1.pdf')

const { countries, pillars } = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const sorted = [...countries].sort((a, b) => a.rank - b.rank)
const continentalAvg = Math.round(
  countries.reduce((s, c) => s + c.overallScore, 0) / countries.length,
)

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: layout.margin, bottom: 54, left: layout.margin, right: layout.margin },
  info: {
    Title: 'ANWI 2026 Methodology Report — Pilot Edition (v0.1)',
    Author: 'Africa Next Workforce Index',
    Subject: '6 Pillars | 18 Indicators | 20-Nation Pilot',
  },
})

const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

let pageNum = 1
const onPage = () => drawRunningFooter(doc, pageNum++)

drawReportCover(doc, {
  blocks: [
    { text: 'AFRICA NEXT', size: 14, color: '#c8a951', gap: 28, bold: true },
    { text: 'WORKFORCE INDEX', size: 34, color: '#ffffff', gap: 36, bold: true },
    { text: '2026', size: 20, color: '#ffffffcc', gap: 24, bold: true },
    { text: 'Methodology Report', size: 18, color: '#ffffffcc', gap: 22 },
    { text: 'Pilot Edition (v0.1)', size: 13, color: '#ffffff99', gap: 20 },
    { text: '6 Pillars | 18 Indicators | 20-Nation Pilot', size: 11, color: '#ffffff99', gap: 18 },
    { text: 'Published July 2026', size: 11, color: '#ffffff99', gap: 18 },
    { text: 'Expert Panel Review | 20-Country Assessment', size: 10, color: '#ffffff80', gap: 28 },
    { text: 'Africa Next Workforce Index', size: 10, color: '#c8a951', gap: 14 },
    { text: 'anwi.vercel.app', size: 10, color: '#c8a951', gap: 14 },
  ],
  footer: '',
})

onPage()

// Acknowledgements
sectionHeading(doc, 'Acknowledgements', onPage)
bodyText(doc, 'This report was produced by the Africa Next Workforce Index (ANWI).', {}, onPage)
subHeading(doc, 'Founder', onPage)
bodyText(doc, 'Aikins Armstrong', {}, onPage)
subHeading(doc, 'Research & Methodology', onPage)
bodyText(doc, 'research@anwi.africa', {}, onPage)
bodyText(
  doc,
  'This pilot edition incorporates structured feedback from independent expert review and is validated through a 20-country pilot assessment using the complete ANWI scoring framework.',
  {},
  onPage,
)
bodyText(doc, 'Published July 2026.', {}, onPage)
bodyText(doc, 'For questions or comments, please contact research@anwi.africa', {}, onPage)
bodyText(
  doc,
  'ANWI v0.1 is an open research product. Citation and redistribution are permitted with full attribution.',
  {},
  onPage,
)

doc.addPage()
onPage()

// Table of Contents
sectionHeading(doc, 'Table of Contents', onPage)
TOC_SECTIONS.forEach(({ title, items }) => {
  bodyText(doc, title, {}, onPage)
  items.forEach((item) => {
    doc.font('Helvetica').fontSize(9.5).fillColor('#555555').text(`    ${item}`, { lineGap: 3 })
  })
  doc.moveDown(0.25)
})

doc.addPage()
onPage()

// ── Section 1 ──
sectionHeading(doc, 'Section 1: Measuring Youth Conversion in Africa', onPage)
subHeading(doc, 'The Central Question', onPage)
bodyText(
  doc,
  'The Africa Next Workforce Index (ANWI) is a comparative assessment framework built to answer one question:',
  {},
  onPage,
)
italicQuote(
  doc,
  'Is this country converting its young population into productive participation in an AI-shaped economy?',
  onPage,
)
bodyText(
  doc,
  'This question is distinct from generic competitiveness indices that ask how ready an economy is for growth. ANWI asks something more specific and urgent for the continent: whether nations are converting their defining demographic asset — over 500 million people under age 25 — into productive, AI-era participation.',
  {},
  onPage,
)
bodyText(
  doc,
  'Three realities shaped this framing. First, Africa\'s youth population is the world\'s largest and fastest-growing — the bottleneck is conversion, not headcount. Second, AI is reshaping entry-level work globally; countries that fail to expose junior workers to digital and AI-augmented roles will fall permanently behind. Third, African labour markets are fragmented across formal, informal, remote, and cross-border channels — no single employment metric captures conversion capacity.',
  {},
  onPage,
)

subHeading(doc, 'Scope and Boundaries', onPage)
bodyText(
  doc,
  'ANWI measures youth-to-workforce conversion capacity, not general economic maturity. The distinction is critical. Competitiveness indices assess market development; ANWI assesses whether a country has the education linkage, entry pathways, skills infrastructure, and mobility frameworks to convert youth into productive participation — regardless of where that country sits on the development curve.',
  {},
  onPage,
)
bulletList(
  doc,
  [
    'Geographic scope: 20-country pilot cohort (v0.1); expansion to 30+ planned for v0.2.',
    'Population focus: Youth under 25 and early-career workforce (0–5 years post-education).',
    'Temporal scope: Pilot Edition 2026; annual refresh planned from 2027.',
    'ANWI is a research index — not an official government statistic.',
  ],
  onPage,
)

subHeading(doc, 'What ANWI Measures That Others Do Not', onPage)
bodyText(
  doc,
  'Global workforce and education indices provide valuable cross-country comparisons. But they were not designed for Africa\'s conversion challenge. ANWI fills specific gaps:',
  {},
  onPage,
)
drawTable(
  doc,
  ['ANWI Indicator', 'Why It Matters'],
  ANWI_DIFFERENTIATORS,
  { colWidths: [160, 328], fontSize: 8.5, rowH: 22 },
  onPage,
)

doc.addPage()
onPage()

// ── Section 2 ──
sectionHeading(doc, 'Section 2: High-Level Framework', onPage)
subHeading(doc, 'Theory of Change', onPage)
bodyText(
  doc,
  'ANWI operates on a theory of change that connects institutional capacity to youth conversion through six interconnected pillars. The logic is sequential but not linear; pillars reinforce each other.',
  {},
  onPage,
)
bodyText(
  doc,
  'Effective conversion starts with education-to-economy linkage (Pillar 1). Graduates must enter structured first jobs with AI exposure (Pillar 2). Employers and public institutions must be ready to absorb Gen Z talent (Pillar 3). Digital and AI skills infrastructure must exist at scale (Pillar 4). Policy must prioritise youth economic participation (Pillar 5). And cross-border talent flow must expand conversion beyond local labour markets (Pillar 6).',
  {},
  onPage,
)

subHeading(doc, 'The Six Pillars', onPage)
drawTable(
  doc,
  ['Pillar', 'Name', 'Weight', 'What It Measures'],
  pillars.map((p, i) => [i + 1, p.name, `${(p.weight * 100).toFixed(0)}%`, p.description]),
  { colWidths: [36, 130, 44, 278], fontSize: 8, rowH: 26 },
  onPage,
)

subHeading(doc, 'Pillar Weightings', onPage)
bodyText(
  doc,
  'Weights are explicit, not implicit. They reflect a normative position about what matters most for youth-to-workforce conversion in an AI-shaped economy. Education Pipeline (20%) and Skills Infrastructure (18%) carry the highest combined weight because conversion fails at the schooling-to-work and skills-to-hiring interfaces before policy or mobility can compensate.',
  {},
  onPage,
)
bodyText(
  doc,
  'Entry-Level Work & AI Exposure (18%) is weighted equally with Skills Infrastructure because exposure in first jobs determines whether youth enter the AI-era economy or remain in legacy employment. GenZ Readiness (16%), Policy & Participation (14%), and Talent Mobility (14%) capture institutional, governance, and market-expansion dimensions.',
  {},
  onPage,
)

doc.addPage()
onPage()

// ── Section 3 ──
sectionHeading(doc, 'Section 3: Scoring Methodology', onPage)
subHeading(doc, 'Five-Level Scoring Scale', onPage)
bodyText(
  doc,
  'Every indicator is scored on a 0–100 scale using five performance levels. This granularity captures meaningful distinctions between countries at similar stages of development and provides actionable guidance: a country scored at "Emerging" (21–40) can see what is required to reach "Developing" (41–60).',
  {},
  onPage,
)
drawTable(doc, ['Score', 'Level', 'Definition'], SCORE_BANDS, {
  colWidths: [42, 58, 388],
  fontSize: 8.5,
  rowH: 22,
}, onPage)

subHeading(doc, 'Scoring Principles', onPage)
bulletList(
  doc,
  [
    'Evidence-Based: All scores supported by documented evidence or structured expert panel review.',
    'Most Recent Data: The most recent available data is used; evidence older than three years is flagged.',
    'Conservative Scoring: When evidence is ambiguous, scores are assigned conservatively (lower).',
    'Peer-Relative: Normalised within the African context; v0.1 does not claim global OECD comparability.',
    'Transparent: Methodology, limitations, and sources published openly on anwi.vercel.app.',
  ],
  onPage,
)

subHeading(doc, 'Documentation Quality Framework', onPage)
bodyText(
  doc,
  'Evidence quality varies across the continent. ANWI defines acceptable evidence through a tiered framework:',
  {},
  onPage,
)
drawTable(
  doc,
  ['Tier', 'Source Type', 'Treatment'],
  [
    ['1 (Primary)', 'Official government publications, national statistics, enacted policies, budget documents', 'Full evidentiary weight. Primary scoring basis.'],
    ['2 (Secondary)', 'ILO, UNESCO, World Bank, AfDB, UNECA, peer-reviewed research', 'Full weight. Corroboration and gap-filling.'],
    ['3 (Supplementary)', 'Expert panel assessments, credible news, NGO reports, employer surveys', 'Partial weight. Corroborated by Tier 1–2 where possible.'],
    ['4 (Excluded)', 'Unverified social media, undated documents, self-curated profiles alone', 'Not accepted as primary evidence.'],
  ],
  { colWidths: [68, 180, 240], fontSize: 7.5, rowH: 28 },
  onPage,
)

subHeading(doc, 'Aggregation Rules', onPage)
bodyText(doc, 'Pillar score = arithmetic mean of three indicator scores (v0.1).', {}, onPage)
bodyText(doc, 'Overall ANWI score = weighted sum of pillar scores (weights sum to 1.0).', {}, onPage)
bodyText(
  doc,
  'Ranking: Countries ranked by overall score descending. Ties broken by Education Pipeline score, then Entry Work & AI Exposure.',
  {},
  onPage,
)

doc.addPage()
onPage()

// ── Section 4 ──
sectionHeading(doc, 'Section 4: Detailed Framework', onPage)
bodyText(
  doc,
  'This section provides scoring criteria for all 18 indicators across six pillars. Each indicator includes description, rationale, data sources, and five-level scoring criteria.',
  {},
  onPage,
)

METHODOLOGY_PILLARS.forEach((pillar) => {
  doc.addPage()
  onPage()
  pillarBanner(doc, pillar.code, pillar.name, pillar.weight, '3', onPage)
  bodyText(doc, pillar.summary, {}, onPage)
  pillar.indicators.forEach((indicator) => {
    indicatorBlock(doc, indicator, onPage)
  })
})

doc.addPage()
onPage()

// ── Section 5 ──
sectionHeading(doc, 'Section 5: Data Collection', onPage)
bodyText(doc, 'Data for ANWI v0.1 comes from three broad source categories:', {}, onPage)
bulletList(
  doc,
  [
    'Secondary data from reputable international databases (World Bank WDI, ILO, UNESCO UIS, ITU, AfDB, UNECA).',
    'Desk research using official government publications, national statistical agencies, and sector reports.',
    'Structured expert panel review where cross-country youth conversion data is incomplete or outdated.',
  ],
  onPage,
)
subHeading(doc, 'Desk Research Protocol', onPage)
bodyText(
  doc,
  'Researchers conduct initial searches using official government websites, AU policy trackers, and established databases. Each data point requires verification from at least two independent sources where possible. For francophone and lusophone countries with limited digitised records, structured expert validation supplements desk research.',
  {},
  onPage,
)

doc.addPage()
onPage()

// ── Section 6 ──
sectionHeading(doc, 'Section 6: Data Processing', onPage)
subHeading(doc, 'Stage 1: Data Cleaning', onPage)
bodyText(
  doc,
  'Raw inputs are normalised to the 0–100 scale. Qualitative assessments from the expert panel are converted using the five-level rubric defined in Section 3.',
  {},
  onPage,
)
subHeading(doc, 'Stage 2: Pillar Aggregation', onPage)
bodyText(doc, 'Indicator scores within each pillar are averaged arithmetically (equal weight per indicator in v0.1).', {}, onPage)
subHeading(doc, 'Stage 3: Overall Score & Ranking', onPage)
bodyText(
  doc,
  'Pillar scores are combined using explicit weights from Section 2. Countries are ranked globally within the pilot cohort and analysed by AU regional grouping.',
  {},
  onPage,
)

doc.addPage()
onPage()

// ── Section 7 ──
sectionHeading(doc, 'Section 7: Quality Assurance', onPage)
bodyText(doc, 'ANWI v0.1 employs a three-layer quality assurance process:', {}, onPage)
bulletList(
  doc,
  [
    'Layer 1 — Expert Panel Review: Country scores reviewed by domain experts with Africa labour-market experience.',
    'Layer 2 — Source Verification: All indicator scores traced to Tier 1–3 evidence documented in country source notes.',
    'Layer 3 — Limitation Disclosure: Pilot constraints, estimation flags, and coverage gaps published transparently.',
  ],
  onPage,
)
bodyText(
  doc,
  'Independent dual-scorer verification and inter-rater reliability testing are planned for the v0.2 edition as country coverage expands beyond the 20-nation pilot.',
  {},
  onPage,
)

doc.addPage()
onPage()

// ── Section 8 ──
sectionHeading(doc, 'Section 8: Relationship to Other Indices', onPage)
bodyText(
  doc,
  'ANWI is designed to complement, not duplicate, global workforce and governance indices. The table below maps the relationship between ANWI pillars and related international frameworks.',
  {},
  onPage,
)
drawTable(
  doc,
  ['ANWI Pillar', 'Related Indices / Frameworks'],
  [
    ['Education Pipeline', 'UNESCO Education Index; World Bank Human Capital Index (education components)'],
    ['Entry Work & AI', 'ILO youth employment indicators; WEF Future of Jobs (entry-level exposure)'],
    ['GenZ Readiness', 'No direct equivalent — ANWI original contribution'],
    ['Skills Infrastructure', 'ITU Digital Development Index; GSMA Mobile Connectivity Index'],
    ['Policy & Participation', 'ILO youth policy trackers; AU youth employment frameworks'],
    ['Talent Mobility', 'IOM migration data; AfCFTA labour mobility provisions'],
  ],
  { colWidths: [130, 358], fontSize: 8.5, rowH: 22 },
  onPage,
)

doc.addPage()
onPage()

// ── Section 9 ──
sectionHeading(doc, 'Section 9: Pilot Scoring Results', onPage)
bodyText(
  doc,
  `To validate that the ANWI scoring framework produces meaningful differentiation, a pilot assessment was conducted across ${countries.length} countries spanning East, West, North, Southern, and Central Africa.`,
  {},
  onPage,
)
subHeading(doc, 'Pilot Rankings', onPage)
drawTable(
  doc,
  ['Rank', 'Country', 'ANWI Score', 'Region'],
  sorted.map((c) => [c.rank, c.name, c.overallScore, c.region]),
  { colWidths: [40, 140, 70, 100], fontSize: 8.5, rowH: 16 },
  onPage,
)
bodyText(
  doc,
  `${sorted[0].name} leads the pilot with ${sorted[0].overallScore}/100. Continental pilot average: ${continentalAvg}/100. The gap between pillar scores reveals that skills infrastructure and entry-level pathways often diverge from policy scores — conversion capacity cannot be inferred from policy intent alone.`,
  {},
  onPage,
)

subHeading(doc, 'Pillar Score Summary (Pilot Average)', onPage)
drawTable(
  doc,
  ['Pillar', 'Pilot Avg'],
  pillars.map((p) => {
    const avg = Math.round(
      countries.reduce((s, c) => s + c.pillars[p.id], 0) / countries.length,
    )
    return [p.name, avg]
  }),
  { colWidths: [280, 80], fontSize: 8.5 },
  onPage,
)

doc.addPage()
onPage()

// ── Section 10 ──
sectionHeading(doc, 'Section 10: Limitations', onPage)
bodyText(doc, 'No composite index is without limitations. ANWI v0.1 users should note:', {}, onPage)
bulletList(
  doc,
  [
    'Pilot coverage: 20 countries — not the full continent. Rankings are valid within the pilot cohort only.',
    'Expert estimation: Approximately 35% of indicator scores rely on structured expert estimates where public data is sparse.',
    'AI exposure proxies: Entry-level AI exposure uses sector and role proxies pending standardised labour-force surveys.',
    'Development confound: Higher-income countries may score higher on connectivity and hiring density indicators.',
    'Snapshot vs trajectory: Year-on-year change tracking planned for v0.2.',
    'No inter-rater reliability test in v0.1: Dual-scorer verification planned for the next edition.',
  ],
  onPage,
)

doc.addPage()
onPage()

// Get in Touch
sectionHeading(doc, 'Get in Touch', onPage)
bodyText(
  doc,
  'ANWI is a living framework. We welcome feedback on the methodology, indicators, weightings, and scoring criteria. We invite African governments, employers, universities, and researchers to engage with the framework and to submit evidence for assessment.',
  {},
  onPage,
)
bodyText(doc, 'Contact: research@anwi.africa', {}, onPage)
bodyText(doc, 'Web: anwi.vercel.app', {}, onPage)
doc.moveDown(1)
bodyText(
  doc,
  `© ${new Date().getFullYear()} Africa Next Workforce Index. All rights reserved.`,
  { align: 'center' },
  onPage,
)

doc.end()

stream.on('finish', () => {
  console.log(`Generated ${outPath}`)
})
