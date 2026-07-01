import { brand } from '../config/brand'
import { SectionHeading } from '../components/SectionHeading'

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-anwi">
          <p className="section-label">About ANWI</p>
          <h1 className="hero-title mt-3 text-4xl md:text-5xl">
            An independent index for Africa&apos;s future workforce
          </h1>
        </div>
      </section>

      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi mx-auto max-w-3xl space-y-8 text-anwi-muted leading-relaxed">
          <p>
            The <strong className="text-anwi-navy">{brand.indexName}</strong> is a research
            initiative focused on one of Africa&apos;s defining questions: will the continent&apos;s
            youth become its greatest economic asset, or its most persistent challenge?
          </p>
          <p>
            ANWI is intentionally separate from any individual speaker, consultancy, or political
            agenda. It follows the institutional model of independent indices — transparent
            methodology, public compare tools, and annual reporting — applied to workforce readiness
            in the AI era.
          </p>
          <p>
            Founded by {brand.founder}, ANWI emerges from years of work at the intersection of youth
            strategy, institutional transformation, and Africa&apos;s digital economy. The index
            exists to give policymakers, employers, educators, and young Africans a shared language
            for measuring progress.
          </p>

          <div className="card">
            <SectionHeading label="Contact" title="Contact & partnerships" />
            <p className="mt-4 text-sm">
              For methodology feedback, data partnerships, or media inquiries:{' '}
              <a
                href={`mailto:${brand.contactEmail}`}
                className="font-medium text-anwi-gold-dark hover:underline"
              >
                {brand.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
