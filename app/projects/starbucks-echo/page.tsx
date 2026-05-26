'use client'

import { useLang } from '@/lib/LangContext'
import ProjectNav from '@/components/ProjectNav'

const DARK = '#1E3932'
const GREEN = '#00704A'
const GOLD = '#CBA258'
const CREAM = '#F5F0E8'

export default function StarbucksEchoPage() {
  const { lang } = useLang()
  const d = lang === 'en' ? dataEn : dataZh

  return (
    <main className="bg-white min-h-screen">
      <ProjectNav />

      {/* ── Hero ── */}
      <section className="pt-16 relative overflow-hidden" style={{ background: DARK }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.08]" style={{ background: GREEN, filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: GOLD, filter: 'blur(80px)' }} />
        <div className="absolute right-6 top-20 text-[20rem] font-black leading-none select-none pointer-events-none opacity-[0.03] text-white">★</div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: GOLD }} />
            <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>{d.label}</p>
          </div>

          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-none tracking-tight text-white mb-4">
            Starbucks<br /><span style={{ color: GOLD }}>Echo</span>
          </h1>
          <p className="text-xl text-gray-400 mb-14 max-w-xl leading-relaxed">{d.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-7 pt-10 border-t border-white/10">
            {Object.entries(d.meta).map(([k, v]) => (
              <div key={k}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: GOLD + '99' }}>
                  {k === 'type' ? (lang === 'en' ? 'Type' : '类型') :
                   k === 'date' ? (lang === 'en' ? 'Timeline' : '时间') :
                   k === 'context' ? (lang === 'en' ? 'Context' : '背景') :
                   k === 'role' ? (lang === 'en' ? 'My Role' : '我的职责') :
                   (lang === 'en' ? 'Tools' : '工具')}
                </p>
                <p className="text-white text-sm leading-snug">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl pl-5 border-l-2" style={{ borderColor: GOLD }}>
            <p className="text-gray-300 leading-relaxed text-base">{d.intro}</p>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section style={{ background: GREEN }} className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {d.stats.map((s) => (
              <div key={s.number} className="px-6 first:pl-0 last:pr-0">
                <p className="text-[3rem] md:text-[4rem] font-black text-white leading-none mb-2">{s.number}</p>
                <p className="text-sm text-white/70 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={GREEN}>{d.problem.label}</SectionLabel>
          <div className="mt-10 grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">{d.problem.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">{d.problem.body}</p>
              <div className="relative pl-6 border-l-2" style={{ borderColor: GREEN }}>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed italic">{d.problem.quote}</p>
                <p className="text-xs text-gray-400 mt-2">— Howard Schultz</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-gray-300 mb-6">
                {lang === 'en' ? 'Three Pain Points' : '三大痛点'}
              </p>
              {d.problem.painPoints.map((p, i) => (
                <div key={p.title} className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5" style={{ background: GREEN }}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{p.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section className="py-28" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={GREEN}>{d.solution.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-4">{d.solution.title}</h2>
          <p className="text-gray-500 mb-14 max-w-2xl leading-relaxed">{d.solution.intro}</p>

          {/* Architecture — arrow flow */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16 bg-white rounded-3xl p-8 border border-gray-100">
            <div className="flex-1 text-center p-6 rounded-2xl" style={{ background: DARK }}>
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>Layer 1</p>
              <p className="text-white font-bold">{d.solution.arch[0]}</p>
              <p className="text-gray-400 text-xs mt-1">{d.solution.archSub[0]}</p>
            </div>
            <div className="text-gray-300 font-bold text-2xl hidden md:block">→</div>
            <div className="flex-1 text-center p-6 rounded-2xl" style={{ background: GREEN }}>
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-2 text-white/60">Layer 2</p>
              <p className="text-white font-bold">{d.solution.arch[1]}</p>
              <p className="text-white/60 text-xs mt-1">{d.solution.archSub[1]}</p>
            </div>
            <div className="text-gray-300 font-bold text-2xl hidden md:block">+</div>
            <div className="flex-1 text-center p-6 rounded-2xl border-2" style={{ borderColor: GOLD }}>
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>Layer 3</p>
              <p className="text-gray-900 font-bold">{d.solution.arch[2]}</p>
              <p className="text-gray-500 text-xs mt-1">{d.solution.archSub[2]}</p>
            </div>
            <div className="text-gray-300 font-bold text-2xl hidden md:block">→</div>
            <div className="flex-1 text-center p-6 rounded-2xl bg-gray-900">
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-2 text-gray-500">Echo</p>
              <p className="text-white font-bold">{d.solution.arch[3]}</p>
              <p className="text-gray-400 text-xs mt-1">{d.solution.archSub[3]}</p>
            </div>
          </div>

          {/* Layer detail cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {d.solution.layers.map((layer, i) => (
              <div key={layer.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="h-1.5" style={{ background: i === 0 ? DARK : i === 1 ? GREEN : GOLD }} />
                <div className="p-8">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-3 text-gray-400">Layer {i + 1}</p>
                  <h3 className="font-bold text-gray-900 mb-1">{layer.name}</h3>
                  <p className="text-xs font-medium mb-4" style={{ color: i === 0 ? DARK : i === 1 ? GREEN : GOLD }}>{layer.tech}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{layer.desc}</p>
                  <ul className="space-y-2">
                    {layer.features.map((f) => (
                      <li key={f} className="text-xs text-gray-500 flex gap-2">
                        <span style={{ color: GREEN }} className="shrink-0">·</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Journey ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: DARK }}>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full opacity-[0.06]" style={{ background: GOLD, filter: 'blur(100px)' }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <SectionLabel light>{d.journey.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-5 mb-4">{d.journey.title}</h2>

          {/* Persona card */}
          <div className="mb-14 flex flex-col md:flex-row gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:w-72 shrink-0">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mb-4" style={{ background: GREEN }}>
                E
              </div>
              <h3 className="text-white font-bold text-xl mb-1">{d.journey.persona.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{d.journey.persona.desc}</p>
              <ul className="space-y-2">
                {d.journey.persona.traits.map((t) => (
                  <li key={t} className="text-xs text-gray-400 flex gap-2">
                    <span style={{ color: GOLD }}>·</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {d.journey.steps.map((step, i) => (
                <div key={step.title} className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors" style={{ background: i % 2 === 0 ? 'rgba(0,112,74,0.12)' : 'transparent' }}>
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>{step.phase}</p>
                  <h4 className="text-white font-bold mb-2 text-sm">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.body}</p>
                  {step.ai && (
                    <div className="mt-3 px-3 py-1.5 rounded-full inline-block text-xs font-medium" style={{ background: GREEN + '33', color: '#6ee7b7' }}>
                      {step.ai}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Proposition ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={GREEN}>{d.value.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">{d.value.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.value.items.map((item, i) => (
              <div key={item.title} className="rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: i === 0 ? DARK : i === 1 ? GREEN : GOLD }} />
                <p className="text-5xl font-black mb-6 leading-none opacity-10 text-gray-900">0{i + 1}</p>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.body}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 italic">{item.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation Roadmap ── */}
      <section className="py-28" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={GREEN}>{d.roadmap.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">{d.roadmap.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.roadmap.phases.map((phase, i) => (
              <div key={phase.title} className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                <div className="px-8 py-5" style={{ background: i === 0 ? GOLD : i === 1 ? GREEN : DARK }}>
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-white/70 mb-1">{phase.period}</p>
                  <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex gap-3 items-start">
                        <span className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ background: i === 0 ? GOLD + '20' : i === 1 ? GREEN + '20' : DARK + '15' }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? GOLD : i === 1 ? GREEN : DARK }} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risks & Ethics ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel color={GREEN}>{d.ethics.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-5 mb-14">{d.ethics.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {d.ethics.items.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white font-black text-sm" style={{ background: GREEN }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mt-1.5">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: DARK }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(circle at 30% 50%, ${GREEN}, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <SectionLabel light center>{d.reflection.label}</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-8 mb-8 leading-tight">{d.reflection.title}</h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">{d.reflection.body}</p>
          <div className="inline-block px-8 py-6 rounded-2xl border border-white/10 max-w-2xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <p className="text-white font-semibold leading-relaxed italic text-lg" style={{ color: GOLD }}>
              "{d.reflection.quote}"
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────
function SectionLabel({ children, color, light, center }: {
  children: React.ReactNode; color?: string; light?: boolean; center?: boolean
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <div className="w-8 h-px" style={{ background: color || (light ? 'rgba(255,255,255,0.3)' : '#ccc') }} />
      <p className={`text-[10px] font-black tracking-[0.3em] uppercase ${light ? 'text-white/50' : ''}`}
        style={color ? { color } : undefined}>
        {children}
      </p>
    </div>
  )
}

// ─── Content Data ─────────────────────────────────────────────────────────────
const dataEn = {
  label: 'AI Product Strategy · Service Design',
  subtitle: 'Reimagining Starbucks as an AI-Enhanced Third Place',
  meta: {
    type: 'Digital Transformation Strategy Proposal',
    date: '2025',
    context: 'Academic Consulting Simulation · DESN9002',
    role: 'Strategy · UX Research · Service Design · Visual Presentation',
    tools: 'Figma · Service Design Methods · Academic Research',
  },
  intro: 'Starbucks is not just a coffee brand — it is one of the world\'s largest experience-driven community spaces. Yet the same digital tools that drive ~60% of revenue are quietly eroding the "third place" that defines the brand. This proposal asks: what if AI could restore humanity to efficiency?',
  stats: [
    { number: '38,000+', label: 'Stores across 80+ countries' },
    { number: '~60%', label: 'Revenue from Mobile Order & Pay' },
    { number: '3', label: 'Core pain points identified' },
    { number: '3', label: 'Phase implementation roadmap' },
  ],
  problem: {
    label: 'Problem Space',
    title: 'The Efficiency Paradox',
    body: 'Mobile Order & Pay (MOP) has transformed Starbucks operations — but at a cost. The same system that drives efficiency is overloading baristas, disrupting store atmospheres, and converting emotional brand relationships into purely transactional ones. Starbucks\' existing digital system knows everything about what customers order, but nothing about how they feel inside the store.',
    quote: '"People all over the world are eager to establish connections between people." Starbucks must be the core force of the community.',
    painPoints: [
      {
        title: 'Loss of Human Recognition',
        body: 'Customers are reduced to order numbers. The complete experience is simplified to an app interaction — customers are no longer "seen" or "remembered," which makes brand loyalty drop from emotional to transactional.',
      },
      {
        title: 'Operational & Atmospheric Overload',
        body: 'MOP-driven order surges overload staff and disrupt store atmosphere. Baristas are overwhelmed by digital orders and unable to provide the interpersonal interaction essential to the Starbucks experience.',
      },
      {
        title: 'The Undervalued Presence',
        body: 'The traditional retail model regards long-term customers\' physical presence as irrelevant to revenue, ignoring the community value they create. Time spent in-store generates no recognition or reward.',
      },
    ],
  },
  solution: {
    label: 'The Echo System',
    title: 'A 3-Layer AI Ambient Intelligence System',
    intro: 'Starbucks Echo transforms the physical store from a passive retail location into an environment with responsiveness and emotional perception — making every customer feel seen, remembered, and valued.',
    arch: ['Ambient Sensing', 'AR Digital Memory', 'Blockchain Loyalty', 'Echo Ecosystem'],
    archSub: ['Computer Vision + Affective Computing', 'Personalised Narrative', 'Social & Community Impact', 'Seen · Remembered · Contributing'],
    layers: [
      {
        name: 'Ambient Sensing Layer',
        tech: 'Computer Vision · Affective Computing',
        desc: 'Captures real-time behavioral and emotional signals from physical space — without requiring any explicit input from customers. Built on Starbucks\' existing CCTV infrastructure at minimal incremental cost.',
        features: [
          'Micro-expression and facial emotion detection',
          'Voice sentiment analysis ("so sweet!")',
          'Multimodal data fusion for real-time preference inference',
          'Edge computing — no raw footage stored',
        ],
      },
      {
        name: 'AR Digital Memory',
        tech: 'Generative AR · Digital Storytelling',
        desc: 'Transforms every cup into a personalised, interactive media object. Customers scan their cup label to trigger AR animations and access a digital diary of their Starbucks moments.',
        features: [
          'Generative AR sticker customisation on cup labels',
          'Digital diary: every visit logged as a personal story',
          'AI-suggested orders based on preference history',
          'Shareable "coffee memory" social content',
        ],
      },
      {
        name: 'Blockchain Loyalty Points',
        tech: 'Blockchain · Smart Contracts',
        desc: 'Converts in-store dwell time ("Star Time") into verifiable community impact points. Like Alipay\'s Ant Forest, daily presence provides financial support for environmental and social causes.',
        features: [
          '"Star Time" — time in store converted to points',
          'Points redeemable for verified community projects',
          'Blockchain impact certificates with user\'s name',
          'Transparent, automated reward distribution',
        ],
      },
    ],
  },
  journey: {
    label: 'Customer Journey',
    title: 'A Day with Echo — Eileen\'s Story',
    persona: {
      name: 'Eileen',
      desc: 'Age 26 · Urban Professional · 3–4 Starbucks visits per week',
      traits: [
        'Treats Starbucks as a thinking space and social buffer',
        'Comfortable with mobile payment and digital systems',
        'Values personalised experiences and transparent data exchange',
        'Comes for a sense of meaningful presence, not just coffee',
      ],
    },
    steps: [
      {
        phase: 'Arrival',
        title: 'The Arrival',
        body: 'Eileen walks in as usual. Her app starts tracking Star Time the moment she enters.',
        ai: null,
      },
      {
        phase: 'Detection',
        title: 'Ambient Detection',
        body: 'After trying a new drink and frowning, the system captures her "so sweet" reaction via computer vision and voice analysis.',
        ai: 'AI captures: dissatisfaction signal',
      },
      {
        phase: 'Personalisation',
        title: 'The AI Nudge',
        body: 'After 3 hours of focus work, the app sends: "You\'ve been studying for nearly 3 hours. How about a blueberry muffin?"',
        ai: 'AI suggests: contextual recommendation',
      },
      {
        phase: 'AR Memory',
        title: 'Generative AR Magic',
        body: 'Eileen scans her cup label to reveal a custom AR animation — her coffee becomes a personal memory asset.',
        ai: 'AR unlocks: personalised story',
      },
      {
        phase: 'Community',
        title: 'Social Impact Choice',
        body: 'Eileen converts her Star Time into points and directs them to the Sydney Harbour Cleanup project.',
        ai: 'Blockchain records: verified contribution',
      },
      {
        phase: 'Legacy',
        title: 'The Blockchain Legacy',
        body: 'Eileen receives a digital certificate — "Eileen Zhang, Digital Community Impact Contributor" — verifiable and shareable.',
        ai: 'Certificate minted on blockchain',
      },
    ],
  },
  value: {
    label: 'Value Proposition',
    title: 'Research-Backed Business Case',
    items: [
      {
        title: 'Ambient Intelligence Drives Revenue',
        body: 'AI-driven real-time responsive design significantly outperforms static approaches in space utilisation efficiency, user satisfaction, and cost reduction. McKinsey research (2022) confirms UX optimisation leads to 2–7% revenue growth and 7–10% increase in shareholder returns.',
        source: 'Liu, 2025 · McKinsey & Company, 2022',
      },
      {
        title: 'AR Creates Emotional Stickiness',
        body: 'Immersive AR experiences significantly improve emotional connection and memory retention — with particularly high participation from first-time users. Generative AR transforms standardised products into social currency and triggers viral word-of-mouth (see: Heytea × Fendi collaboration).',
        source: 'Xu, 2026 · Jing Daily, 2023',
      },
      {
        title: 'Blockchain Gamification Builds Loyalty',
        body: 'Structured gamification combined with social cause mechanics significantly increases charitable donations and intrinsic motivation. Echo\'s loyalty model gives social value to time already spent — without requiring any behavioral change from customers.',
        source: 'Gong & Ye, 2025 · Chainlink, 2026',
      },
    ],
  },
  roadmap: {
    label: 'Implementation',
    title: 'A 3-Phase Deployment Roadmap',
    phases: [
      {
        period: 'Short-term · 0–12 months',
        title: 'Flagship Pilot',
        items: [
          'Deploy in 2–3 flagship stores in major urban markets',
          'Validate AI sensing model accuracy with real customers',
          'Test opt-in consent flow and privacy architecture',
          'Collect user feedback and iterate on the AR experience',
        ],
      },
      {
        period: 'Mid-term · 1–3 years',
        title: 'Expand & Launch',
        items: [
          'Expand to core commercial districts across key markets',
          'Launch blockchain loyalty system with community partners',
          'Establish community impact ecosystem',
          'Refine predictive recommendation engine',
        ],
      },
      {
        period: 'Long-term · 3+ years',
        title: 'Global Standardisation',
        items: [
          'Roll out globally with localised community partners',
          'Develop predictive care functionality',
          'Establish industry benchmark for AI-enhanced hospitality',
          'Open Echo API for third-party community integrations',
        ],
      },
    ],
  },
  ethics: {
    label: 'Risks & Ethics',
    title: 'Responsible by Design',
    items: [
      {
        icon: '🔒',
        title: 'Privacy: Opt-In, Not Opt-Out',
        body: 'Only customers who actively choose to participate have their behavioural signals captured. All data undergoes comprehensive de-identification before any personalisation logic is applied — the system never retains raw footage or biometric identifiers. Customers retain the right to adjust settings or withdraw consent at any time.',
      },
      {
        icon: '🌱',
        title: 'Environmental Footprint',
        body: 'Echo is built on Starbucks\' existing CCTV infrastructure rather than new hardware deployment — significantly reducing the environmental footprint. Low-power AI architecture and long-lifecycle hardware design are prioritised from the outset.',
      },
      {
        icon: '🔧',
        title: 'Hardware Maintenance Reality',
        body: 'In urban environments, camera lens dust accumulation can reduce recognition accuracy by 12% within three months (Liu, 2025). Regular calibration cycles must be built into operational workflows as a necessary ongoing task.',
      },
      {
        icon: '🤝',
        title: 'Human-AI Collaboration',
        body: 'Echo is designed to enhance rather than replace baristas. By automating preference inference and routine data tasks, the system frees baristas to refocus on the interpersonal connections that define the Starbucks experience — the very thing the brand is trying to protect.',
      },
    ],
  },
  reflection: {
    label: 'Reflection',
    title: 'Technology in Service of Humanity',
    body: 'The core challenge facing Starbucks is not a lack of technology — it is a structural imbalance between digital efficiency and genuine human connection. Years of digital investment have optimised the transaction; in doing so, they have gradually eroded the emotional experience that makes Starbucks more than just a coffee stop.',
    quote: 'Starbucks Echo is not a technological upgrade — it is a return to what the third place was always meant to be.',
  },
}

const dataZh = {
  label: 'AI 产品策略 · 服务设计',
  subtitle: '将星巴克重塑为具有 AI 感知能力的"第三空间"',
  meta: {
    type: '数字化转型战略提案',
    date: '2025年',
    context: '学术设计顾问模拟项目 · DESN9002',
    role: '战略研究 · UX 研究 · 服务设计 · 视觉呈现',
    tools: 'Figma · 服务设计方法 · 学术研究',
  },
  intro: '星巴克不只是咖啡品牌，更是全球最大的体验型社区空间之一。然而推动约60%门店收入的数字化工具，正在悄悄侵蚀品牌赖以存在的"第三空间"。这份提案的核心问题是：如果 AI 能让效率重归人性，会怎样？',
  stats: [
    { number: '38,000+', label: '全球门店数，覆盖80+国家' },
    { number: '~60%', label: '门店收入来自移动端点单（MOP）' },
    { number: '3', label: '核心痛点识别' },
    { number: '3', label: '分阶段落地路线图' },
  ],
  problem: {
    label: '问题空间',
    title: '效率悖论',
    body: '移动端点单（MOP）彻底改变了星巴克的运营模式——但也付出了代价。同一个系统在提升效率的同时，正在令咖啡师不堪重负、侵蚀门店氛围，将情感型品牌关系转化为纯交易型关系。星巴克现有数字系统知道顾客点了什么，却对他们在店内的感受一无所知。',
    quote: '"全世界的人都渴望建立人与人之间的连接。"星巴克必须成为社区的核心力量。',
    painPoints: [
      {
        title: '人性识别的丧失',
        body: '顾客被简化为订单号码。完整的体验被压缩为 App 操作——顾客不再被"看见"或"记住"，品牌忠诚度从情感驱动变为价格驱动。',
      },
      {
        title: '运营与氛围过载',
        body: 'MOP 带来的订单涌入令咖啡师不堪重负，门店氛围遭到破坏。咖啡师被淹没在数字订单中，无法提供星巴克体验中至关重要的人际互动。',
      },
      {
        title: '未被认可的在场价值',
        body: '传统零售思维将长期顾客的实际在场视为与营收无关的因素，忽视了他们所创造的社区价值。在店时间没有被任何形式的认可或奖励。',
      },
    ],
  },
  solution: {
    label: 'Echo 系统',
    title: '三层 AI 环境感知系统',
    intro: 'Starbucks Echo 将实体门店从被动的零售场所，转化为具有响应性和情感感知能力的空间——让每位顾客都感到被看见、被记住、被重视。',
    arch: ['环境感知层', 'AR 数字记忆', '区块链积分', 'Echo 生态系统'],
    archSub: ['计算机视觉 + 情感计算', '个性化叙事', '社会与社区影响', '被看见 · 被记住 · 有贡献'],
    layers: [
      {
        name: '环境感知层',
        tech: '计算机视觉 · 情感计算',
        desc: '无需顾客主动反馈，从物理空间中实时捕捉行为与情绪信号。基于星巴克现有闭路电视基础设施构建，增量成本极低。',
        features: [
          '微表情与面部情绪识别',
          '语音情感分析（如"太甜了！"）',
          '多模态数据融合实现实时偏好推断',
          '边缘计算处理，不存储原始画面',
        ],
      },
      {
        name: 'AR 数字记忆',
        tech: '生成式 AR · 数字叙事',
        desc: '将每杯咖啡转化为个性化的互动媒体资产。顾客扫描杯标即可触发 AR 动画，并访问记录每次到访的数字日记。',
        features: [
          '杯标个性化生成式 AR 贴纸定制',
          '数字日记：每次到访都成为个人故事',
          'AI 基于偏好历史推荐下次点单',
          '可分享的"咖啡记忆"社交内容',
        ],
      },
      {
        name: '区块链积分',
        tech: '区块链 · 智能合约',
        desc: '将在店停留时间（"星光时刻"）转化为可验证的社区贡献积分。类似支付宝蚂蚁森林的逻辑——日常行为为环保和社会事业提供资金支持。',
        features: [
          '"星光时刻"——在店时间直接转化为积分',
          '积分可兑换并支持经验证的社区项目',
          '区块链影响力证书，附带用户姓名',
          '透明、自动化的奖励分配机制',
        ],
      },
    ],
  },
  journey: {
    label: '顾客旅程',
    title: 'Eileen 的一天与 Echo',
    persona: {
      name: 'Eileen',
      desc: '26岁 · 城市白领 · 每周到访星巴克3-4次',
      traits: [
        '将星巴克视为工作与社交的缓冲空间',
        '熟悉移动支付和数字会员体系',
        '重视个性化体验，接受透明的数据交换',
        '来星巴克不只为咖啡，更为有意义的存在感',
      ],
    },
    steps: [
      {
        phase: '到达',
        title: '到达门店',
        body: 'Eileen 像往常一样走进店里。App 在她进门的瞬间开始记录"星光时刻"。',
        ai: null,
      },
      {
        phase: '感知',
        title: '环境感知',
        body: '她尝试一款新饮品后皱眉，系统通过计算机视觉和语音分析捕捉到她说"太甜了"的瞬间。',
        ai: 'AI 捕捉：不满情绪信号',
      },
      {
        phase: '个性化',
        title: 'AI 智能提示',
        body: '专注学习近3小时后，App 发来提示："你已经专注学习了近3小时，来块蓝莓马芬补充能量吧？"',
        ai: 'AI 推荐：情境化建议',
      },
      {
        phase: 'AR 记忆',
        title: '生成式 AR 魔法',
        body: 'Eileen 扫描杯标，触发专属 AR 动画——这杯咖啡成为她的个人记忆资产。',
        ai: 'AR 解锁：个性化故事',
      },
      {
        phase: '社区',
        title: '社会影响选择',
        body: 'Eileen 将"星光时刻"转化为积分，并将其捐赠给悉尼港湾清洁项目。',
        ai: '区块链记录：可验证的贡献',
      },
      {
        phase: '传承',
        title: '区块链证书',
        body: 'Eileen 收到数字证书——"Eileen Zhang，数字社区影响力贡献者"，可验证，可分享。',
        ai: '证书铸造于区块链',
      },
    ],
  },
  value: {
    label: '价值主张',
    title: '有研究支撑的商业案例',
    items: [
      {
        title: '环境智能驱动营收增长',
        body: 'AI 驱动的实时响应设计在空间利用效率、用户满意度和成本降低方面显著优于静态方法。麦肯锡研究（2022年）证实，UX 优化可带来2-7%营收增长和7-10%股东回报提升。',
        source: 'Liu, 2025 · McKinsey & Company, 2022',
      },
      {
        title: 'AR 创造情感黏性',
        body: '沉浸式 AR 体验显著提升情感连接与记忆留存，且首次用户的参与度尤其高。生成式 AR 将标准化产品转化为社交货币，引发口碑传播（参见：喜茶 × Fendi 联名案例）。',
        source: 'Xu, 2026 · Jing Daily, 2023',
      },
      {
        title: '区块链游戏化构建忠诚度',
        body: '结构化游戏化机制结合社会公益元素可显著提升慈善捐赠和内在动机。Echo 的积分模型将顾客已有的在店时间赋予社会价值——无需改变任何行为习惯。',
        source: 'Gong & Ye, 2025 · Chainlink, 2026',
      },
    ],
  },
  roadmap: {
    label: '落地计划',
    title: '三阶段部署路线图',
    phases: [
      {
        period: '短期 · 0–12个月',
        title: '旗舰店试点',
        items: [
          '在主要城市市场的2-3家旗舰店部署',
          '用真实顾客验证 AI 感知模型的准确性',
          '测试用户同意授权流程与隐私架构',
          '收集用户反馈，迭代 AR 体验',
        ],
      },
      {
        period: '中期 · 1–3年',
        title: '扩展与发布',
        items: [
          '向核心商圈门店扩展',
          '联合社区合作方正式上线区块链积分系统',
          '构建社区影响力生态系统',
          '优化预测推荐引擎',
        ],
      },
      {
        period: '长期 · 3年+',
        title: '全球化标准推广',
        items: [
          '结合本地化社区合作方在全球推广',
          '开发预测性关怀功能',
          '建立 AI 增强型餐饮体验行业基准',
          '开放 Echo API 支持第三方社区集成',
        ],
      },
    ],
  },
  ethics: {
    label: '风险与伦理',
    title: '以负责任为设计原则',
    items: [
      {
        icon: '🔒',
        title: '隐私：主动选择，而非默认开启',
        body: '只有主动选择参与的顾客，其行为信号才会被采集。所有数据在应用任何个性化逻辑之前都经过全面去标识化处理——系统永远不会保留原始视频或生物特征标识符。顾客可随时调整设置或撤回同意授权。',
      },
      {
        icon: '🌱',
        title: '环境影响',
        body: 'Echo 基于星巴克现有闭路电视基础设施构建，而非部署全新硬件，显著降低了环境足迹。从一开始就优先采用低功耗 AI 架构和长生命周期硬件设计。',
      },
      {
        icon: '🔧',
        title: '硬件维护的现实挑战',
        body: '在城市环境中，摄像头镜头的灰尘积累会在三个月内使识别准确率下降12%（Liu, 2025）。定期校准周期必须作为必要的日常运营任务纳入工作流程。',
      },
      {
        icon: '🤝',
        title: '人机协作',
        body: 'Echo 旨在增强而非取代咖啡师。通过自动化偏好推断和常规数据处理任务，系统将咖啡师从信息工作中解放出来，让他们重新专注于人际连接——而这正是品牌试图守护的核心价值。',
      },
    ],
  },
  reflection: {
    label: '反思',
    title: '让技术服务于人性',
    body: '星巴克面临的核心挑战不是技术匮乏，而是数字效率与真实人际连接之间的结构性失衡。多年的数字化投资优化了交易流程，却在此过程中逐渐侵蚀了让星巴克不只是一个买咖啡的地方的情感体验。',
    quote: 'Starbucks Echo 不是一次技术升级——它是"第三空间"回归其本应有的模样。',
  },
}
