'use client'

import Link from 'next/link'
import ProjectNav from '@/components/ProjectNav'

type Meta = Record<string, string>

export type CaseVisual = {
  src?: string
  alt: string
  caption?: string
  wide?: boolean
}

export type CaseSection = {
  kicker: string
  title: string
  body?: string
  quote?: string
  items?: Array<{
    title: string
    body?: string
    meta?: string
    items?: string[]
  }>
  visuals?: CaseVisual[]
}

export type CaseStudy = {
  title: string
  subtitle: string
  label: string
  intro: string
  meta: Meta
  stats?: Array<{ number: string; label: string }>
  accent: string
  next?: { href: string; label: string }
  sections: CaseSection[]
  heroVisuals?: CaseVisual[]
}

export default function CaseStudyPage({ caseStudy, lang }: { caseStudy: CaseStudy; lang: string }) {
  const metaEntries = Object.entries(caseStudy.meta)

  return (
    <main className="min-h-screen bg-white text-[#111]">
      <ProjectNav />

      <section className="px-5 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px] border-t border-[#111]">
          <div className="grid gap-10 border-b border-[#111] py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-12">
            <div>
              <p className="lab mb-5 text-[11px] text-gray-500">{caseStudy.label}</p>
              <h1 className="font-flex ultra-wide text-[clamp(4rem,14vw,13rem)] leading-[0.82]">
                {caseStudy.title}
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-8">
              <p className="max-w-xl text-2xl leading-tight text-gray-900 md:text-4xl">
                {caseStudy.subtitle}
              </p>
              <p className="max-w-xl text-base leading-7 text-gray-500 md:text-lg">{caseStudy.intro}</p>
            </div>
          </div>

          <div className="grid border-b border-[#111] md:grid-cols-3 lg:grid-cols-5">
            {metaEntries.map(([key, value]) => (
              <div key={key} className="border-b border-[#111] px-0 py-5 md:border-b-0 md:border-r md:px-5 last:border-r-0">
                <p className="lab mb-2 text-[10px] text-gray-400">{metaLabel(key, lang)}</p>
                <p className="text-sm leading-snug text-gray-900">{value}</p>
              </div>
            ))}
          </div>

          {caseStudy.heroVisuals && (
            <VisualGrid visuals={caseStudy.heroVisuals} accent={caseStudy.accent} />
          )}
        </div>
      </section>

      {caseStudy.stats && (
        <section className="px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1500px] border-b border-[#111] md:grid-cols-4">
            {caseStudy.stats.map((stat) => (
              <div key={stat.number} className="border-b border-[#111] py-8 md:border-b-0 md:border-r md:px-6 last:border-r-0">
                <p className="font-flex ultra-wide text-[clamp(3rem,7vw,6rem)] leading-none" style={{ color: caseStudy.accent }}>
                  {stat.number}
                </p>
                <p className="mt-3 max-w-52 text-sm leading-snug text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          {caseStudy.sections.map((section, index) => (
            <article key={section.kicker + section.title} className="grid border-b border-[#111] py-14 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-24">
              <aside>
                <p className="lab text-[11px]" style={{ color: caseStudy.accent }}>
                  {String(index + 1).padStart(2, '0')} / {section.kicker}
                </p>
              </aside>
              <div>
                <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-normal text-gray-950 md:text-6xl">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">{section.body}</p>
                )}
                {section.quote && (
                  <p className="mt-10 max-w-4xl border-l-2 pl-6 text-2xl leading-snug text-gray-900" style={{ borderColor: caseStudy.accent }}>
                    {section.quote}
                  </p>
                )}
                {section.items && <ItemGrid items={section.items} accent={caseStudy.accent} />}
                {section.visuals && <VisualGrid visuals={section.visuals} accent={caseStudy.accent} compact />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 border-t border-[#111] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="lab text-[12px] text-gray-500 hover:text-gray-950">
            {lang === 'en' ? 'Back to all work' : '返回全部作品'}
          </Link>
          {caseStudy.next && (
            <Link href={caseStudy.next.href} className="lab inline-flex w-fit items-center border border-[#111] px-5 py-3 text-[12px] hover:bg-[#111] hover:text-white">
              {caseStudy.next.label}
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}

function ItemGrid({ items, accent }: { items: CaseSection['items']; accent: string }) {
  if (!items) return null

  return (
    <div className="mt-12 grid gap-px bg-[#111] md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <div key={item.title + index} className="bg-white p-6 md:p-8">
          <p className="lab mb-8 text-[10px] text-gray-400">{String(index + 1).padStart(2, '0')}</p>
          {item.meta && <p className="lab mb-2 text-[10px]" style={{ color: accent }}>{item.meta}</p>}
          <h3 className="text-xl font-semibold leading-tight text-gray-950">{item.title}</h3>
          {item.body && <p className="mt-4 text-sm leading-6 text-gray-500">{item.body}</p>}
          {item.items && (
            <ul className="mt-5 space-y-2">
              {item.items.map((child) => (
                <li key={child} className="flex gap-3 text-sm leading-snug text-gray-600">
                  <span style={{ color: accent }}>+</span>
                  <span>{child}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

function VisualGrid({ visuals, accent, compact }: { visuals: CaseVisual[]; accent: string; compact?: boolean }) {
  return (
    <div className={`grid gap-px bg-[#111] ${compact ? 'mt-12' : ''} ${visuals.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {visuals.map((visual) => (
        <figure key={visual.alt} className={`${visual.wide ? 'md:col-span-2' : ''} bg-white p-3`}>
          {visual.src ? (
            <img src={visual.src} alt={visual.alt} className="block h-full min-h-64 w-full object-cover" />
          ) : (
            <div className="flex min-h-80 items-center justify-center border border-dashed border-gray-300 bg-gray-50">
              <p className="lab max-w-56 text-center text-[11px] leading-5 text-gray-400">
                {visual.alt}
              </p>
            </div>
          )}
          {visual.caption && (
            <figcaption className="lab mt-3 text-[10px]" style={{ color: accent }}>
              {visual.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

function metaLabel(key: string, lang: string) {
  const labels: Record<string, [string, string]> = {
    type: ['Type', '类型'],
    date: ['Timeline', '时间'],
    team: ['Team', '团队'],
    role: ['My Role', '我的职责'],
    partner: ['Partner', '合作方'],
    context: ['Context', '背景'],
    tools: ['Tools', '工具'],
  }
  const label = labels[key]
  return label ? label[lang === 'en' ? 0 : 1] : key
}
