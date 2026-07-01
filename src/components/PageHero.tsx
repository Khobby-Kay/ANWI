import type { ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

type Props = {
  label: string
  title: string
  subtitle?: string
  children?: ReactNode
  badge?: ReactNode
}

export function PageHero({ label, title, subtitle, children, badge }: Props) {
  return (
    <section className="page-hero">
      <div className="container-anwi">
        <ScrollReveal immediate delay={0}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-label">{label}</p>
            {badge}
          </div>
        </ScrollReveal>
        <ScrollReveal immediate delay={80}>
          <h1 className="hero-title mt-4 text-4xl md:text-5xl lg:text-[3.25rem]">{title}</h1>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal immediate delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{subtitle}</p>
          </ScrollReveal>
        )}
        {children && (
          <ScrollReveal immediate delay={240}>
            <div className="mt-8">{children}</div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
