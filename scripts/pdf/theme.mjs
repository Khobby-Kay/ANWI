/** Shared ANWI PDF design system — aligned with AAGI institutional report style */

export const colors = {
  navy: '#0d1117',
  navyMid: '#161b22',
  gold: '#c8a951',
  goldDark: '#9e8440',
  text: '#1a1a1a',
  muted: '#555555',
  light: '#888888',
  border: '#d1d5db',
  white: '#ffffff',
  tableHead: '#f6f7f9',
}

export const fonts = {
  title: 'Helvetica-Bold',
  heading: 'Helvetica-Bold',
  body: 'Helvetica',
  italic: 'Helvetica-Oblique',
}

export const layout = {
  margin: 54,
  footerY: 760,
  contentBottom: 718,
  headerLabel: 'ANWI 2026 Methodology Report, Pilot Edition (v0.1)',
  headerBrand: 'Africa Next Workforce Index',
}

export function pageWidth(doc) {
  return doc.page.width - layout.margin * 2
}

export function ensureSpace(doc, needed = 80, onNewPage) {
  if (doc.y > layout.contentBottom - needed) {
    doc.addPage()
    if (onNewPage) onNewPage()
    return true
  }
  return false
}

export function drawBriefHeader(doc, { title, subtitle, meta }) {
  doc.rect(0, 0, doc.page.width, 110).fill(colors.navy)
  doc.fillColor(colors.gold).font(fonts.title).fontSize(22).text(title, layout.margin, 28, {
    width: pageWidth(doc),
  })
  doc.fillColor(colors.white).font(fonts.body).fontSize(11).text(subtitle, layout.margin, 58, {
    width: pageWidth(doc),
  })
  doc.fontSize(8.5).fillColor('#ffffff99')
  meta.forEach((line, i) => {
    doc.text(line, layout.margin, 78 + i * 11, { width: pageWidth(doc) })
  })
  doc.y = 130
}

/** AAGI-style cover: stacked lines, edition metadata, publisher */
export function drawReportCover(doc, { blocks, footer }) {
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.navy)
  let y = 150
  blocks.forEach(({ text, size = 11, color = '#ffffffcc', gap = 22, bold = false }) => {
    doc
      .font(bold ? fonts.title : fonts.body)
      .fontSize(size)
      .fillColor(color)
      .text(text, 0, y, { align: 'center', width: doc.page.width })
    y += gap
  })
  doc.font(fonts.body).fontSize(10).fillColor(colors.gold).text(footer, 0, doc.page.height - 72, {
    align: 'center',
    width: doc.page.width,
  })
  doc.addPage()
}

/** AAGI running header/footer on content pages */
export function drawRunningFooter(doc, pageNum) {
  const y = layout.footerY
  doc.font(fonts.body).fontSize(7.5).fillColor(colors.text)
  doc.text(layout.headerLabel, layout.margin, y, { width: pageWidth(doc) * 0.42, align: 'left' })
  doc.text(layout.headerBrand, layout.margin, y, { width: pageWidth(doc), align: 'center' })
  doc.text(`Page ${pageNum}`, layout.margin, y, { width: pageWidth(doc), align: 'right' })
  doc.y = layout.margin + 4
}

export function sectionHeading(doc, title, onNewPage) {
  ensureSpace(doc, 56, onNewPage)
  doc.font(fonts.heading).fontSize(14).fillColor(colors.navy).text(title)
  doc.moveDown(0.45)
}

/** Brief PDF compatibility */
export function sectionTitle(doc, number, title, onNewPage) {
  sectionHeading(doc, `${number}. ${title}`, onNewPage)
}

export function subHeading(doc, title, onNewPage) {
  ensureSpace(doc, 36, onNewPage)
  doc.font(fonts.heading).fontSize(11).fillColor(colors.navy).text(title)
  doc.moveDown(0.25)
}

export function bodyText(doc, text, opts = {}, onNewPage) {
  ensureSpace(doc, 44, onNewPage)
  doc.font(fonts.body).fontSize(10).fillColor(colors.muted).text(text, {
    width: pageWidth(doc),
    lineGap: 4,
    align: opts.align || 'left',
  })
  doc.moveDown(0.35)
}

export function italicQuote(doc, text, onNewPage) {
  ensureSpace(doc, 44, onNewPage)
  doc.font(fonts.italic).fontSize(10).fillColor(colors.text).text(text, {
    width: pageWidth(doc),
    lineGap: 4,
    indent: 12,
  })
  doc.moveDown(0.35)
}

export function statGrid(doc, stats, cols = 4, onNewPage) {
  ensureSpace(doc, 90, onNewPage)
  const gap = 10
  const colW = (pageWidth(doc) - gap * (cols - 1)) / cols
  const startY = doc.y
  const rowH = 52
  stats.forEach((stat, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = layout.margin + col * (colW + gap)
    const y = startY + row * rowH
    doc.rect(x, y, colW, rowH - 4).fill(colors.tableHead)
    doc.fillColor(colors.gold).font(fonts.title).fontSize(18).text(String(stat.value), x + 8, y + 8, {
      width: colW - 16,
    })
    doc.fillColor(colors.muted).font(fonts.body).fontSize(7).text(stat.label.toUpperCase(), x + 8, y + 32, {
      width: colW - 16,
    })
  })
  doc.y = startY + Math.ceil(stats.length / cols) * rowH + 8
}

export function drawTable(doc, headers, rows, opts = {}, onNewPage) {
  const fontSize = opts.fontSize || 8
  const headerH = opts.headerH || 22
  const rowH = opts.rowH || 18
  const tableW = pageWidth(doc)
  const widths = opts.colWidths || headers.map(() => tableW / headers.length)

  let y = doc.y
  let x = layout.margin

  const drawHeader = () => {
    x = layout.margin
    doc.rect(x, y, tableW, headerH).fill(colors.navy)
    headers.forEach((h, i) => {
      doc.fillColor(colors.white).font(fonts.heading).fontSize(fontSize)
      doc.text(h, x + 4, y + 6, { width: widths[i] - 8, align: opts.align?.[i] || 'left' })
      x += widths[i]
    })
    y += headerH
  }

  ensureSpace(doc, headerH + rowH + 10, onNewPage)
  drawHeader()

  rows.forEach((row, ri) => {
    if (y > layout.contentBottom - rowH) {
      doc.addPage()
      if (onNewPage) onNewPage()
      y = doc.y
      drawHeader()
    }
    x = layout.margin
    if (ri % 2 === 0) doc.rect(x, y, tableW, rowH).fill(colors.tableHead)
    row.forEach((cell, ci) => {
      doc.fillColor(colors.text).font(fonts.body).fontSize(fontSize)
      doc.text(String(cell ?? ''), x + 4, y + 4, { width: widths[ci] - 8, align: opts.align?.[ci] || 'left' })
      x += widths[ci]
    })
    y += rowH
  })
  doc.y = y + 10
}

export function bulletList(doc, items, onNewPage) {
  items.forEach((item) => {
    ensureSpace(doc, 22, onNewPage)
    doc.font(fonts.body).fontSize(9.5).fillColor(colors.muted).text(`•  ${item}`, {
      width: pageWidth(doc),
      indent: 10,
      lineGap: 2,
    })
  })
  doc.moveDown(0.3)
}

export function pillarBanner(doc, code, name, weight, indicatorCount, onNewPage) {
  ensureSpace(doc, 70, onNewPage)
  doc.font(fonts.heading).fontSize(13).fillColor(colors.goldDark).text(`${code}  ${name}`)
  doc.font(fonts.body).fontSize(8.5).fillColor(colors.light).text(`Weight: ${weight} | ${indicatorCount} Indicators`)
  doc.moveDown(0.35)
}

export function indicatorBlock(doc, indicator, onNewPage) {
  ensureSpace(doc, 120, onNewPage)
  doc.font(fonts.heading).fontSize(10).fillColor(colors.navy).text(`${indicator.id} ${indicator.name}`)
  doc.moveDown(0.2)
  subHeading(doc, 'Description', onNewPage)
  bodyText(doc, indicator.description, {}, onNewPage)
  subHeading(doc, 'Rationale', onNewPage)
  bodyText(doc, indicator.rationale, {}, onNewPage)
  subHeading(doc, 'Data Sources', onNewPage)
  bodyText(doc, indicator.sources, {}, onNewPage)
  subHeading(doc, 'Score Level Criteria', onNewPage)
  drawTable(
    doc,
    ['Score', 'Level', 'Criteria'],
    indicator.criteria,
    { colWidths: [42, 58, pageWidth(doc) - 100], fontSize: 7.5, rowH: 28 },
    onNewPage,
  )
  doc.moveDown(0.2)
}
