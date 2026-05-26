'use client'

import { useLang } from '@/lib/LangContext'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="work" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-500 mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.work.title}
          </h2>
        </div>

        {/* Uniform 2×2 grid for all projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
