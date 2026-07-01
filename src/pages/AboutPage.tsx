import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { brand } from '../config/brand'
import { countries } from '../config/countries'
import { downloads } from '../config/downloads'
import { pillars } from '../config/pillars'
import { PageHero } from '../components/PageHero'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'

const OFFICES = [
  { city: 'Accra', country: 'Ghana', flag: 'gh', primary: true },
  { city: 'Nairobi', country: 'Kenya', flag: 'ke' },
  { city: 'Johannesburg', country: 'South Africa', flag: 'za' },
  { city: 'Cairo', country: 'Egypt', flag: 'eg' },
]

const FAQ = [
  {
    q: 'What does ANWI measure?',
    a: `ANWI evaluates ${countries.length} pilot countries using six pillars and 18 indicators per country, measuring how effectively nations convert youth into productive participation in an AI-shaped economy.`,
  },
  {
    q: 'How is ANWI different from other indices?',
    a: 'Unlike generic competitiveness or education rankings, ANWI focuses on the conversion pipeline — from schooling through first employment to AI-era skills and cross-border talent mobility.',
  },
  {
    q: 'Are ANWI scores official government statistics?',
    a: 'No. ANWI v0.1 scores are pilot research estimates built from public data and expert review. They are documented transparently and are not endorsed by any government.',
  },
  {
    q: 'Can my organisation partner with ANWI?',
    a: 'Yes. ANWI welcomes partnerships with governments, employers, universities, and research institutions. Contact us to explore country participation, data collaboration, or validation partnerships.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About ANWI"
        title="Africa's Next Workforce Standard"
        subtitle="The independent framework built to assess how African nations convert youth into productive participation in an AI-shaped economy."
      />

      {/* Mission */}
      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi mx-auto max-w-4xl">
          <ScrollReveal>
            <SectionHeading label="About the ANWI" title="Measuring what matters for Africa's youth" />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-anwi-muted">
              <p>
                The <strong className="text-anwi-navy">{brand.indexName}</strong> is the first
                independent, evidence-based framework assessing youth-to-workforce conversion across
                African nations. It uses a six-pillar methodology and 18 indicators per country to
                answer one central question:
              </p>
              <blockquote className="about-quote">
                Is this country converting its young population into productive participation in an
                AI-shaped economy?
              </blockquote>
              <p>
                Africa&apos;s defining demographic asset is its youth — over 500 million people under
                age 25. The bottleneck is not population size; it is conversion: from schooling to
                first job, from first job to AI-era productivity, and from local talent to
                continental and global competitiveness.
              </p>
              <p>
                ANWI is intentionally separate from any individual speaker brand, consultancy, or
                political agenda. It follows the institutional model of independent indices —
                transparent methodology, public compare tools, downloadable intelligence briefs, and
                annual reporting — applied to workforce readiness in the AI era.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we measure */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Framework"
              title="What ANWI measures"
              subtitle="Six weighted pillars capturing every dimension of youth-to-workforce conversion."
              centered
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.id} delay={i * 70}>
                <div className="card h-full">
                  <span className="text-sm font-bold text-anwi-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-semibold text-anwi-navy">{pillar.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{pillar.description}</p>
                  <p className="mt-4 text-xs font-semibold text-anwi-gold-dark">
                    {(pillar.weight * 100).toFixed(0)}% weight
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional model + founder */}
      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading label="Institutional Model" title="Independent. Open. African-led." />
            <ul className="mt-8 space-y-4 text-anwi-muted">
              {[
                'Transparent methodology published openly — no black-box scoring.',
                'Public compare tools and executive intelligence briefs for policymakers and researchers.',
                'Pilot estimates clearly labelled — not official government statistics.',
                'Built for governments, employers, educators, and young Africans — not political campaigns.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-anwi-gold" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={downloads.brief.path} download className="btn-outline">
                Download Intelligence Brief
              </a>
              <Link to="/methodology" className="btn-outline">
                View Methodology
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card h-full">
              <SectionHeading label="Leadership" title="Founder" />
              <p className="mt-6 text-lg font-semibold text-anwi-navy">{brand.founder}</p>
              <p className="mt-4 text-sm leading-relaxed text-anwi-muted">
                ANWI emerges from years of work at the intersection of youth strategy, institutional
                transformation, and Africa&apos;s digital economy. The index exists to give
                policymakers, employers, educators, and young Africans a shared language for
                measuring progress on the continent&apos;s most important economic question.
              </p>
              <p className="mt-4 text-sm text-anwi-muted">
                {brand.edition} · {countries.length}-country pilot cohort
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Our Focus"
              title="Continental presence"
              subtitle={`Headquarters in ${brand.headquarters}. Research and partnerships anchored across four African hubs.`}
              centered
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 70}>
                <div className="office-card">
                  <img
                    src={`https://flagcdn.com/w40/${office.flag}.png`}
                    alt=""
                    width={40}
                    height={30}
                    className="mx-auto rounded-sm"
                  />
                  <p className="mt-4 font-semibold text-anwi-navy">{office.city}</p>
                  <p className="text-sm text-anwi-muted">{office.country}</p>
                  {office.primary && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-anwi-gold">
                      Headquarters
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-anwi-bg">
        <div className="container-anwi">
          <ScrollReveal>
            <SectionHeading
              label="Contact"
              title="Get in touch"
              subtitle="Questions, partnership inquiries, or media requests."
              centered
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Research & Methodology',
                email: brand.contactEmail,
                desc: 'Methodology feedback, data questions, and general inquiries.',
              },
              {
                title: 'Partnerships',
                email: brand.partnershipsEmail,
                desc: 'Country participation, data partnerships, and sponsorship.',
              },
              {
                title: 'Media',
                email: brand.pressEmail,
                desc: 'Press enquiries, interviews, and speaking requests.',
              },
            ].map(({ title, email, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="card h-full">
                  <Mail className="h-5 w-5 text-anwi-gold" />
                  <h3 className="mt-4 font-semibold text-anwi-navy">{title}</h3>
                  <p className="mt-2 text-sm text-anwi-muted">{desc}</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-4 inline-block text-sm font-medium text-anwi-gold-dark hover:text-anwi-gold"
                  >
                    {email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-anwi-bg-subtle">
        <div className="container-anwi mx-auto max-w-3xl">
          <ScrollReveal>
            <SectionHeading label="FAQ" title="Frequently asked questions" centered />
          </ScrollReveal>
          <div className="mt-10 space-y-6">
            {FAQ.map(({ q, a }, i) => (
              <ScrollReveal key={q} delay={i * 60}>
                <div className="card">
                  <h3 className="font-semibold text-anwi-navy">{q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anwi-muted">{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="section-padding hero-dark">
        <div className="container-anwi text-center">
          <ScrollReveal>
            <SectionHeading
              label="Partnerships"
              title="Shape the future of Africa's next workforce"
              subtitle="ANWI is built for governments, employers, universities, and research institutions across the continent. If your organisation belongs in that group, we'd like to hear from you."
              dark
              centered
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Governments',
                desc: 'Request pilot participation or benchmark your country against peers.',
              },
              {
                title: 'Partners',
                desc: 'Explore data partnerships, sponsorship, or research collaboration.',
              },
              {
                title: 'Researchers',
                desc: 'Contribute methodology feedback or independent validation.',
              },
            ].map(({ title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="card-dark text-left">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/60">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={240}>
            <a href={`mailto:${brand.contactEmail}`} className="btn-primary mt-10">
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
