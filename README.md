# Africa Next Workforce Index (ANWI)

**Pilot Edition 2026 · Methodology v0.1**

Independent research initiative measuring how African nations convert youth into productive participation in an AI-shaped economy.

## Thesis

Africa's defining asset is its young population — over 500 million under 25. The bottleneck is not demographics; it is **conversion**: from education to first job, from first job to AI-era productivity, from local talent to continental and global competitiveness.

ANWI exists to make that conversion measurable, comparable, and actionable.

## Six Pillars

| # | Pillar | Weight |
|---|--------|--------|
| 1 | Education-to-Economy Pipeline | 20% |
| 2 | Entry-Level Work & AI Exposure | 18% |
| 3 | Institutional GenZ Readiness | 16% |
| 4 | Digital & AI Skills Infrastructure | 18% |
| 5 | Policy & Economic Participation | 14% |
| 6 | Cross-Border Talent Flow | 14% |

## Scoring

- All scores normalized **0–100**
- Pillar score = average of 3 indicators (v0.1)
- Overall score = weighted sum of pillar scores
- v0.1 uses public data + expert panel review where data gaps exist

## Pilot Cohort (20 countries)

Rwanda, Kenya, Mauritius, South Africa, Ghana, Morocco, Nigeria, Tunisia, Egypt, Senegal, Botswana, Uganda, Côte d'Ivoire, Algeria, Tanzania, Cameroon, Ethiopia, Angola, Mozambique, Democratic Republic of the Congo

## Deployment

The site deploys automatically to GitHub Pages on push to `main`. Alternative hosts:

- **Vercel (production):** [https://anwi.vercel.app](https://anwi.vercel.app) — `vercel.json` includes SPA rewrites
- **Netlify:** Connect repo — `public/_redirects` handles client-side routing
- **GitHub Pages:** [https://khobby-kay.github.io/ANWI/](https://khobby-kay.github.io/ANWI/) — auto-deploys on push to `main`

```bash
npm run build:pdf   # Generate methodology PDF
npm run build       # Production build → dist/
npm run preview     # Preview production build locally
```

## Limitations

This is a **pilot**. Scores are not official statistics. See `/methodology` on the site for full transparency.

## Development

```bash
cd africa-next-workforce-index
npm install
npm run dev
```

## Brand separation

- **ANWI** = independent index / research product
- **Aikins Armstrong speaker site** = separate project (bookings, thought leadership)

No cross-linking until both products are ready.

## Roadmap

1. ✅ v0.1 web app with compare tool
2. ✅ Methodology PDF (full paper)
3. ✅ Expand to 20+ countries
4. ⬜ Inaugural report: *State of Africa's Next Workforce 2027*
5. ✅ Deploy to production — [anwi.vercel.app](https://anwi.vercel.app)

## Contact

research@anwi.africa
