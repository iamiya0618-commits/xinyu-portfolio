'use client'

import CaseStudyPage, { type CaseStudy } from '@/components/CaseStudyPage'
import { useLang } from '@/lib/LangContext'
import { aiCanvasData } from '@/lib/projectsData'

const ACCENT = '#E8503A'

export default function AICanvasPage() {
  const { lang } = useLang()
  const d = aiCanvasData[lang]

  const caseStudy: CaseStudy = {
    title: d.title,
    subtitle: d.subtitle,
    label: d.label,
    intro: d.intro,
    meta: d.meta,
    stats: d.stats,
    accent: ACCENT,
    heroVisuals: [
      { src: '/projects/ai-canvas/11.png', alt: 'AI Canvas interface overview', caption: lang === 'en' ? 'Selected interface system' : '核心界面系统', wide: true },
    ],
    sections: [
      {
        kicker: d.background.label,
        title: d.background.title,
        body: d.background.body,
        quote: d.background.question,
        items: d.background.barriers.map((barrier) => ({ title: barrier.text })),
      },
      {
        kicker: d.research.label,
        title: d.research.title,
        items: d.research.methods.map((method) => ({
          title: method.name,
          body: method.desc,
        })),
      },
      {
        kicker: lang === 'en' ? 'Personas' : '用户画像',
        title: lang === 'en' ? 'Two student realities shaped the design direction.' : '两类学生处境，共同塑造设计方向。',
        items: d.research.personas.map((persona) => ({
          title: persona.name,
          meta: `${persona.age} · ${persona.program}`,
          body: persona.duration,
          items: [...persona.goals, ...persona.pain, ...persona.needs],
        })),
      },
      {
        kicker: d.opportunity.label,
        title: lang === 'en' ? 'The opportunity: make participation feel safe before making collaboration efficient.' : '机会点：先让参与变得安全，再让协作变得高效。',
        body: d.opportunity.intro,
        items: d.opportunity.goals.map((goal) => ({
          title: goal.title,
          body: goal.body,
          items: goal.items,
        })),
      },
      {
        kicker: d.features.label,
        title: d.features.title,
        items: d.features.items.map((feature) => ({
          title: feature.title,
          meta: feature.n,
          body: feature.desc,
        })),
      },
      {
        kicker: d.strategy.label,
        title: lang === 'en' ? 'From passive translation to active expression support.' : '从被动翻译，转向主动表达支持。',
        body: d.strategy.rootCause,
        quote: d.strategy.refinement,
        items: d.strategy.phases.map((phase) => ({
          title: phase.title,
          meta: phase.phase,
          body: phase.desc,
        })),
      },
      {
        kicker: d.storyboard.label,
        title: d.storyboard.title,
        items: d.storyboard.scenarios.map((scenario) => ({
          title: scenario.name,
          body: scenario.situation,
          items: [scenario.resolution],
        })),
        visuals: [
          { src: '/projects/ai-canvas/10.png', alt: 'Storyboard sketches', caption: lang === 'en' ? 'Storyboard' : '故事板', wide: true },
        ],
      },
      {
        kicker: lang === 'en' ? 'UI Design' : 'UI 设计',
        title: lang === 'en' ? 'Screens across the learning ecosystem.' : '学习生态系统中的各功能界面。',
        visuals: [
          { src: '/projects/ai-canvas/12.png', alt: 'Poster and booklet', caption: lang === 'en' ? 'Poster and booklet' : '海报与手册', wide: true },
        ],
      },
      {
        kicker: d.reflection.label,
        title: d.reflection.title,
        body: d.reflection.body,
      },
    ],
    next: { href: '/projects/mapmima', label: lang === 'en' ? 'Next: Mapmima' : '下一个：Mapmima' },
  }

  return <CaseStudyPage caseStudy={caseStudy} lang={lang} />
}
