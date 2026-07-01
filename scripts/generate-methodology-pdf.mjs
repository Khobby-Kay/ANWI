/**
 * Generates public/anwi-methodology-v0.1.pdf from docs/anwi-methodology-v0.1.md
 * Run: node scripts/generate-methodology-pdf.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import PDFDocument from 'pdfkit'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const mdPath = path.join(root, 'docs', 'anwi-methodology-v0.1.md')
const outPath = path.join(root, 'public', 'anwi-methodology-v0.1.pdf')

const md = fs.readFileSync(mdPath, 'utf8')

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 72, bottom: 72, left: 72, right: 72 },
  info: {
    Title: 'ANWI Methodology Paper v0.1',
    Author: 'Africa Next Workforce Index',
    Subject: 'Pilot Edition 2026',
  },
})

const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

const navy = '#0f2744'
const slate = '#334155'
const gold = '#c9a227'

function heading(text, size = 14) {
  doc.moveDown(0.6)
  doc.font('Helvetica-Bold').fontSize(size).fillColor(navy).text(text, { continued: false })
  doc.moveDown(0.3)
}

function body(text) {
  doc.font('Helvetica').fontSize(10).fillColor(slate).text(text, {
    align: 'left',
    lineGap: 3,
  })
}

function bullet(text) {
  doc.font('Helvetica').fontSize(10).fillColor(slate).text(`•  ${text}`, {
    indent: 12,
    lineGap: 2,
  })
}

// Title page
doc.font('Helvetica-Bold').fontSize(22).fillColor(navy).text('Africa Next Workforce Index (ANWI)', {
  align: 'center',
})
doc.moveDown(0.5)
doc.font('Helvetica').fontSize(16).fillColor(gold).text('Methodology Paper — Version 0.1', {
  align: 'center',
})
doc.moveDown(1)
doc.font('Helvetica').fontSize(11).fillColor(slate).text('Pilot Edition 2026', { align: 'center' })
doc.moveDown(2)
doc.font('Helvetica').fontSize(10).fillColor(slate)
doc.text('Publisher: Africa Next Workforce Index', { align: 'center' })
doc.text('Contact: research@anwi.africa', { align: 'center' })
doc.text('Founder: Aikins Armstrong', { align: 'center' })
doc.text('Date: July 2026', { align: 'center' })
doc.addPage()

// Parse markdown sections (simplified — key sections only)
const sections = md.split(/^## /m).slice(1)

for (const section of sections) {
  const [titleLine, ...rest] = section.split('\n')
  const title = titleLine.replace(/^#+\s*/, '').trim()
  const content = rest.join('\n').trim()

  if (doc.y > doc.page.height - 120) doc.addPage()

  heading(title)

  const blocks = content.split(/\n\n+/)
  for (const block of blocks) {
    const trimmed = block.trim()
    if (!trimmed || trimmed.startsWith('---')) continue

    if (trimmed.startsWith('|')) {
      // Skip markdown tables in PDF — render as simplified text
      const rows = trimmed.split('\n').filter((r) => r.includes('|') && !r.includes('---'))
      for (const row of rows) {
        const cells = row
          .split('|')
          .map((c) => c.trim())
          .filter(Boolean)
        if (cells.length >= 2) {
          bullet(`${cells[0]}: ${cells.slice(1).join(' — ')}`)
        }
      }
      doc.moveDown(0.3)
      continue
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
      const items = trimmed.split('\n')
      for (const item of items) {
        const clean = item.replace(/^[-*\d.]+\s*/, '').replace(/\*\*/g, '')
        if (clean) bullet(clean)
      }
      doc.moveDown(0.3)
      continue
    }

    const clean = trimmed
      .replace(/\*\*/g, '')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/^#+\s*/gm, '')
      .replace(/`/g, '')
      .replace(/```[\s\S]*?```/g, '')
    if (clean) {
      body(clean)
      doc.moveDown(0.4)
    }

    if (doc.y > doc.page.height - 80) doc.addPage()
  }
}

doc.end()

stream.on('finish', () => {
  console.log(`Generated ${outPath}`)
})
