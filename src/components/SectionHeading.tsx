type Props = {
  label: string
  title: string
  subtitle?: string
  dark?: boolean
  centered?: boolean
}

export function SectionHeading({ label, title, subtitle, dark, centered }: Props) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className={`section-label ${dark ? 'text-anwi-gold' : ''}`}>{label}</p>
      <h2 className={`section-title mt-3 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p
          className={`section-subtitle ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/60' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
