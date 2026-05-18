'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { mapmimaData } from '@/lib/projectsData'

const PURPLE = '#2d2040'
const LAVENDER = '#C4A8E8'
const PINK = '#F4A7B9'

export default function MapmimaPage() {
  const { lang } = useLang()
  const d = mapmimaData[lang]

  return (
    <main className="bg-white min-h-screen">
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <span>←</span> {lang === 'en' ? 'Back to Work' : '返回作品'}
          </Link>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">Case Study</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-16 relative overflow-hidden" style={{ background: PURPLE }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: LAVENDER, filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10" style={{ background: PINK, filter: 'blur(80px)' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-0">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: LAVENDER }}>{d.label}</p>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-tight tracking-tight text-white mb-5 whitespace-pre-line">
            {d.title}
          </h1>
          <p className="text-xl mb-10 max-w-xl" style={{ color: LAVENDER }}>{d.subtitle}</p>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 pb-14 border-b border-white/10">
            {Object.entries(d.meta).map(([k, v]) => (
              <div key={k}>
                <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: LAVENDER + '80' }}>
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

          <p className="text-gray-300 leading-relaxed py-10 max-w-3xl text-base">{d.intro}</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14" style={{ background: LAVENDER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {d.stats.map((s) => (
              <div key={s.number}>
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: PURPLE }}>{s.number}</p>
                <p className="text-sm leading-snug" style={{ color: PURPLE + 'CC' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Label color={LAVENDER}>{d.background.label}</Label>
          <div className="mt-10 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{d.background.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{d.background.body}</p>
              <p className="text-gray-600 leading-relaxed">{d.background.context}</p>
            </div>
            <div className="space-y-5">
              <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: LAVENDER }}>
                  {lang === 'en' ? 'Key Insight' : '核心洞察'}
                </p>
                <p className="text-gray-700 leading-relaxed">{d.background.insight}</p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: PURPLE }}>
                <p className="text-white/70 text-sm leading-relaxed italic">{d.research.finding}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Label color={LAVENDER}>{d.research.label}</Label>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-6">{d.research.title}</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">{d.research.method}</p>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Label color={LAVENDER}>{d.personas.label}</Label>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-12">{d.personas.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.personas.items.map((p, i) => {
              const colors = [LAVENDER, PINK, '#A8D5E8']
              return (
                <div key={p.name} className="rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                      <p className="text-sm text-gray-400">{p.age} · {p.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                         style={{ background: colors[i] + 'CC' }}>
                      {p.name[0]}
                    </div>
                  </div>
                  <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                       style={{ background: colors[i] + '30', color: PURPLE }}>
                    {p.tag}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.conflict}</p>
                  <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: colors[i] }}>
                    {lang === 'en' ? 'Goals' : '目标'}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {p.goals.map((g) => <li key={g} className="text-xs text-gray-500 leading-snug">· {g}</li>)}
                  </ul>
                  <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: colors[i] }}>
                    {lang === 'en' ? 'Expectation' : '期待'}
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">{p.expectation}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Concept ── */}
      <section className="py-24" style={{ background: PURPLE }}>
        <div className="max-w-6xl mx-auto px-6">
          <Label light>{d.concept.label}</Label>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">{d.concept.title}</h2>
          <p className="text-gray-400 max-w-2xl mb-14 leading-relaxed">{d.concept.intro}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {d.concept.spaces.map((s, i) => {
              const accent = [LAVENDER, PINK, '#A8D5E8'][i]
              return (
                <div key={s.name} className="rounded-2xl p-8 border border-white/10">
                  <span className="text-3xl mb-5 block" style={{ color: accent }}>{s.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{s.name}</h3>
                  <p className="text-xs font-medium mb-5" style={{ color: accent }}>{s.sub}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.body}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="text-xs text-gray-500 flex gap-2">
                        <span style={{ color: accent }}>·</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Concept visuals: Catenary + Cube ── */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <img src="/projects/mapmima/17.png" alt="The Catenary — Emotional Spectrum" className="w-full rounded-2xl shadow-md" />
          <img src="/projects/mapmima/18.png" alt="The Cube — Flow Within" className="w-full rounded-2xl shadow-md" />
        </div>
      </section>

      {/* ── App Features ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Label color={LAVENDER}>{d.appFeatures.label}</Label>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {d.appFeatures.sections.map((sec, si) => {
              const accent = si === 0 ? PINK : LAVENDER
              return (
                <div key={sec.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                  <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: accent }}>{sec.title}</p>
                  <div className="space-y-6">
                    {sec.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed pl-3.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── App UI screens ── */}
      <section className="bg-gray-50 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <img src="/projects/mapmima/19.png" alt="App UI screens" className="w-full rounded-2xl shadow-md" />
        </div>
      </section>

      {/* ── Design Iteration ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Label color={LAVENDER}>{d.iteration.label}</Label>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-12">{d.iteration.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {d.iteration.versions.map((v) => (
              <div key={v.v} className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
                <p className="text-lg font-black mb-4" style={{ color: LAVENDER }}>{v.v}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'Key Elements' : '核心元素'}
                </p>
                <p className="text-xs text-gray-600 mb-4 leading-snug">{v.elements}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'User Insights' : '用户洞察'}
                </p>
                <p className="text-xs text-gray-600 mb-4 leading-snug">{v.insights}</p>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: LAVENDER }}>
                  {lang === 'en' ? 'Improvements' : '改进措施'}
                </p>
                <p className="text-xs text-gray-700 leading-snug">{v.improvements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24" style={{ background: LAVENDER }}>
        <div className="max-w-6xl mx-auto px-6">
          <Label light>{d.principles.label}</Label>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-12" style={{ color: PURPLE }}>{d.principles.title}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {d.principles.items.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7">
                <h3 className="font-bold mb-3" style={{ color: PURPLE }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: PURPLE + 'BB' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="py-24" style={{ background: PURPLE }}>
        <div className="max-w-6xl mx-auto px-6 max-w-3xl">
          <Label light>{d.reflection.label}</Label>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{d.reflection.title}</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{d.reflection.body}</p>
        </div>
      </section>

      {/* ── Footer nav ── */}
      <FooterNav lang={lang} next={{ href: '/projects/ai-canvas', label: lang === 'en' ? 'View: AI Canvas' : '查看：AI Canvas' }} />
    </main>
  )
}

function Label({ children, color, light }: { children: React.ReactNode; color?: string; light?: boolean }) {
  return (
    <p className={`text-xs font-bold tracking-[0.25em] uppercase ${light ? 'text-white/40' : 'text-gray-400'}`}
       style={color && !light ? { color } : undefined}>
      {children}
    </p>
  )
}

function FooterNav({ lang, next }: { lang: string; next: { href: string; label: string } }) {
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          ← {lang === 'en' ? 'Back to all work' : '返回全部作品'}
        </Link>
        <Link href={next.href}
          className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-violet-600 transition-all duration-300">
          {next.label}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
