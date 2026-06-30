'use client'

import CaseStudyPage, { type CaseStudy } from '@/components/CaseStudyPage'
import { useLang } from '@/lib/LangContext'
import { mapmimaData } from '@/lib/projectsData'

const ACCENT = '#8B5CF6'

export default function MapmimaPage() {
  const { lang } = useLang()
  const d = mapmimaData[lang]

  const caseStudy: CaseStudy = {
    title: d.title,
    subtitle: d.subtitle,
    label: d.label,
    intro: d.intro,
    meta: d.meta,
    stats: d.stats,
    accent: ACCENT,
    heroVisuals: [
      { src: '/projects/mapmima/17.png', alt: 'The Catenary emotional spectrum', caption: 'The Catenary', wide: true },
      { src: '/projects/mapmima/18.png', alt: 'The Cube flow within', caption: 'The Cube', wide: true },
    ],
    sections: [
      {
        kicker: d.background.label,
        title: d.background.title,
        body: `${d.background.body} ${d.background.context}`,
        quote: d.background.insight,
      },
      {
        kicker: d.research.label,
        title: d.research.title,
        body: d.research.method,
        quote: d.research.finding,
      },
      {
        kicker: d.personas.label,
        title: d.personas.title,
        items: d.personas.items.map((persona) => ({
          title: persona.name,
          meta: `${persona.age} · ${persona.role} · ${persona.tag}`,
          body: persona.conflict,
          items: [...persona.goals, persona.expectation],
        })),
      },
      {
        kicker: d.concept.label,
        title: d.concept.title,
        body: d.concept.intro,
        items: d.concept.spaces.map((space) => ({
          title: space.name,
          meta: space.sub,
          body: space.body,
          items: space.features,
        })),
      },
      {
        kicker: d.appFeatures.label,
        title: lang === 'en' ? 'The app extends spatial care into daily life.' : 'App 将空间中的关怀延伸到日常生活。',
        items: d.appFeatures.sections.flatMap((section) =>
          section.items.map((item) => ({
            title: item.name,
            meta: section.title,
            body: item.desc,
          })),
        ),
        visuals: [
          { src: '/projects/mapmima/19.png', alt: 'Mapmima app screens', caption: lang === 'en' ? 'App UI screens' : 'App 界面', wide: true },
        ],
      },
      {
        kicker: d.iteration.label,
        title: d.iteration.title,
        items: d.iteration.versions.map((version) => ({
          title: version.v,
          meta: version.elements,
          body: `${version.insights} ${version.improvements}`,
        })),
        visuals: [
          { src: '/projects/mapmima/20.png', alt: 'Design iteration detail', caption: lang === 'en' ? 'Iteration detail' : '迭代细节' },
          { src: '/projects/mapmima/21.png', alt: 'Final system detail', caption: lang === 'en' ? 'Final system' : '最终系统' },
        ],
      },
      {
        kicker: d.principles.label,
        title: d.principles.title,
        items: d.principles.items.map((principle) => ({
          title: principle.title,
          body: principle.desc,
        })),
        visuals: [
          { src: '/projects/mapmima/22.png', alt: 'Mapmima final presentation', caption: lang === 'en' ? 'Final presentation' : '最终展示', wide: true },
        ],
      },
      {
        kicker: d.reflection.label,
        title: d.reflection.title,
        body: d.reflection.body,
      },
    ],
    next: { href: '/projects/starbucks-echo', label: lang === 'en' ? 'Next: Starbucks Echo' : '下一个：Starbucks Echo' },
  }

  return <CaseStudyPage caseStudy={caseStudy} lang={lang} />
}
