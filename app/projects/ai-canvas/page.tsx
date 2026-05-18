'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { aiCanvasData } from '@/lib/projectsData'
import ProjectNav from '@/components/ProjectNav'

const CORAL = '#E8503A'
const NAVY = '#1a1625'

export default function AICanvasPage() {
  const { lang } = useLang()
  const d = aiCanvasData[lang]

  return (
    <main className="bg-white min-h-screen">
      <ProjectNav />

      {/* ── Hero ── */}
      <section className="pt-16 relative overflow-hidden" style={{ background: NAVY }}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: CORAL, filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.04]" style={{ background: CORAL, filter: 'blur(80px)' }} />
        {/* Large decorative number */}
        <div className="absolute right-8 top-16 text-[22rem] font-black leading-none select-none pointer-events-none opacity-[0.04] text-white">01</div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: CORAL }} />
            <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: CORAL }}>{d.label}</p>
          </div>

          <h1 className="text-[clamp(3.5rem,9vw,7rem)] font-black leading-none tracking-tight text-white mb-6">
            {d.title}
          </h1>
          <p className="text-xl text-gray-400 mb-14 max-w-lg leading-relaxed">{d.subtitle}</p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-7 pt-10 border-t border-white/10">
            {Object.entries(d.meta).map(([k, v]) => (
              <div key={k}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: CORAL + '99' }}>
                  {k === 'type' ? (lang === 'en' ? 'Type' : '类型') :
                   k === 'date' ? (lang === 'en' ? 'Timeline' : '时间') :
                   k === 'team' ? (lang === 'en' ? 'Team' : '团队') :
                   k === 'role' ? (lang === 'en' ? 'My Role' : '我的职责') :
                   (lang === 'en' ? 'Partner' : '合作方')}
                </p>
                <p className="text-white text-sm leading-snug">{v}</p>
              </div>
            ))}
          </div>

          {/* Intro */}
          <div className="mt-12 max-w-2xl pl-5 border-l-2" style={{ borderColor: CORAL }}>
            <p className="text-gray-300 leading-relaxed text-base">{d.intro}</p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: CORAL }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {d.stats.map((s) => (
              <div key={s.number} className="px-6 first:pl-0 last:pr-0">
                <p className="text-[3.5rem] md:text-[4.5rem] font-black text-white leading-none mb-3">{s.number}</p>
                <p className="text-sm text-white/70 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={CORAL}>{d.background.label}</SectionLabel>
          <div className="mt-12 grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">{d.background.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">{d.background.body}</p>
              {/* Pull quote */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${CORAL}, ${CORAL}44)` }} />
                <p className="text-xl font-semibold text-gray-800 leading-relaxed italic">{d.background.question}</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4 pt-2">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-gray-300 mb-6">
                {lang === 'en' ? 'Core Barriers' : '核心障碍'}
              </p>
              {d.background.barriers.map((b, i) => (
                <div key={b.icon} className="group flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300" style={{ background: i === 1 ? CORAL + '08' : 'white' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black shrink-0" style={{ background: CORAL }}>
                    {i + 1}
                  </div>
                  <span className="font-semibold text-gray-800">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="py-28" style={{ background: '#faf9f7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={CORAL}>{d.research.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">{d.research.title}</h2>

          {/* Methods — 3 col grid with coral top strip */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {d.research.methods.map((m, i) => (
              <div key={m.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-1" style={{ background: i % 2 === 0 ? CORAL : CORAL + '55' }} />
                <div className="p-6">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-3" style={{ color: CORAL }}>{m.name}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Personas */}
          <p className="text-[10px] font-black tracking-[0.25em] uppercase text-gray-300 mb-8">Persona</p>
          <div className="grid md:grid-cols-2 gap-6">
            {d.research.personas.map((p, i) => (
              <div key={p.name} className="rounded-2xl overflow-hidden border border-gray-100">
                {/* Card header */}
                <div className="px-8 py-6 flex items-center justify-between" style={{ background: i === 0 ? CORAL : NAVY }}>
                  <div>
                    <h3 className="text-2xl font-black text-white">{p.name}</h3>
                    <p className="text-sm text-white/60 mt-1">{p.age} · {p.program}</p>
                    <p className="text-xs text-white/50">{p.duration}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-black">
                    {p.name[0]}
                  </div>
                </div>
                {/* Card body */}
                <div className="bg-white p-8 grid grid-cols-3 gap-6">
                  {[
                    { label: lang === 'en' ? 'Goals' : '目标', items: p.goals },
                    { label: lang === 'en' ? 'Pain Points' : '痛点', items: p.pain },
                    { label: lang === 'en' ? 'Needs' : '需求', items: p.needs },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <p className="text-[10px] font-black tracking-wider uppercase mb-3 text-gray-400">{label}</p>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="text-xs text-gray-500 leading-snug flex gap-1.5">
                            <span style={{ color: CORAL }} className="shrink-0 mt-0.5">·</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opportunity ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: NAVY }}>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ background: CORAL, filter: 'blur(100px)' }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <SectionLabel light>{d.opportunity.label}</SectionLabel>
          <p className="text-gray-400 mt-6 mb-16 max-w-2xl leading-relaxed text-lg">{d.opportunity.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {d.opportunity.goals.map((g, i) => (
              <div key={g.title} className="rounded-2xl p-10 border border-white/10 hover:border-white/20 transition-colors" style={{ background: i === 0 ? CORAL + '18' : 'transparent' }}>
                <p className="text-5xl font-black mb-6 opacity-20 text-white">0{i + 1}</p>
                <h3 className="text-xl font-bold text-white mb-4">{g.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{g.body}</p>
                <ul className="space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm flex gap-3 items-start">
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: CORAL + '33' }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: CORAL }} />
                      </span>
                      <span className="text-gray-300 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={CORAL}>{d.features.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">{d.features.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.features.items.map((f, i) => (
              <div key={f.n} className="group rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-default relative overflow-hidden">
                {/* Hover color fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" style={{ background: CORAL }} />
                <p className="text-6xl font-black mb-6 leading-none" style={{ color: CORAL + (i % 2 === 0 ? '20' : '15') }}>{f.n}</p>
                <h3 className="font-bold text-gray-900 mb-3 text-base leading-snug">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategy ── */}
      <section className="py-28" style={{ background: '#faf9f7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={CORAL}>{d.strategy.label}</SectionLabel>
          <div className="mt-12 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">{d.strategy.rootCause}</p>
              <div className="space-y-4">
                {d.strategy.phases.map((p, i) => (
                  <div key={p.phase} className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100">
                    <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-black mt-0.5" style={{ background: CORAL + (i === 0 ? 'ff' : '55') }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-1" style={{ color: CORAL }}>{p.phase}</p>
                      <h4 className="font-bold text-gray-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10 border-2 border-dashed border-gray-200">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-5 text-gray-300">
                {lang === 'en' ? 'Iterative Refinement' : '迭代优化'}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">{d.strategy.refinement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Storyboard ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={CORAL}>{d.storyboard.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">{d.storyboard.title}</h2>

          {/* Timeline connector */}
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px" style={{ background: `linear-gradient(to right, ${CORAL}44, ${CORAL}22)` }} />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
              {d.storyboard.scenarios.map((s, i) => (
                <div key={s.name + i} className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Circle node */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black mb-5 relative z-10" style={{ background: CORAL }}>
                    {i + 1}
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-2">{s.name}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{s.situation}</p>
                  <div className="flex gap-1.5 items-start">
                    <span className="text-[10px] font-bold mt-0.5 shrink-0" style={{ color: CORAL }}>→</span>
                    <p className="text-xs text-gray-700 leading-relaxed">{s.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Storyboard visual */}
          <div className="mt-14 rounded-3xl overflow-hidden shadow-xl">
            <img src="/projects/ai-canvas/10.png" alt="Storyboard sketches" className="w-full" />
          </div>
        </div>
      </section>

      {/* ── UI Design ── */}
      <section className="py-28" style={{ background: '#faf9f7' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={CORAL}>{lang === 'en' ? 'UI Design' : 'UI 设计'}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">
            {lang === 'en' ? 'Screens across the learning ecosystem' : '学习生态系统中的各功能界面'}
          </h2>
          <div className="space-y-5">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="/projects/ai-canvas/11.png" alt="UI Design screens" className="w-full" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="/projects/ai-canvas/12.png" alt="Poster and booklet" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: CORAL }}>
        <div className="absolute right-0 bottom-0 text-[20rem] font-black leading-none select-none pointer-events-none opacity-[0.08] text-white">→</div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <SectionLabel light>{d.reflection.label}</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-8 max-w-2xl leading-tight">{d.reflection.title}</h2>
          <p className="text-white/80 leading-relaxed text-xl max-w-2xl">{d.reflection.body}</p>
        </div>
      </section>

      {/* ── Footer nav ── */}
      <FooterNav lang={lang} next={{ href: '/projects/mapmima', label: lang === 'en' ? 'Next: Mapmima →' : '下一个：Mapmima →' }} />
    </main>
  )
}

function SectionLabel({ children, color, light }: { children: React.ReactNode; color?: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-px" style={{ background: light ? 'rgba(255,255,255,0.3)' : (color || '#9CA3AF') }} />
      <p className={`text-[10px] font-black tracking-[0.3em] uppercase ${light ? 'text-white/40' : 'text-gray-400'}`}
         style={color && !light ? { color } : undefined}>
        {children}
      </p>
    </div>
  )
}

function FooterNav({ lang, next }: { lang: string; next: { href: string; label: string } }) {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
          ← {lang === 'en' ? 'Back to all work' : '返回全部作品'}
        </Link>
        <Link href={next.href}
          className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-violet-600 transition-all duration-300">
          {next.label}
        </Link>
      </div>
    </section>
  )
}
