import { brand } from '../config/brand'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-bold text-anwi-navy">{brand.indexName}</p>
            <p className="mt-1 max-w-md text-sm text-anwi-slate">{brand.disclaimer}</p>
          </div>
          <div className="text-sm text-anwi-slate">
            <p>{brand.edition}</p>
            <p className="mt-1">Methodology v{brand.version}</p>
            <p className="mt-1">
              <a
                href={`mailto:${brand.contactEmail}`}
                className="text-anwi-teal hover:underline"
              >
                {brand.contactEmail}
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-anwi-slate">
          © {new Date().getFullYear()} {brand.indexName}. Independent research initiative.
        </p>
      </div>
    </footer>
  )
}
