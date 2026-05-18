'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

type Project = {
  title: string
  category: string
  description: string
  year: string
  accent: string
  comingSoon: boolean
  slug?: string
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang()

  const card = (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent bar */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ background: project.comingSoon ? '#D1D5DB' : project.accent }}
      />

      {/* Visual placeholder */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          background: project.comingSoon
            ? 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)'
            : `linear-gradient(135deg, ${project.accent}15 0%, ${project.accent}30 100%)`,
        }}
      >
        {/* Abstract shape */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          aria-hidden
        >
          <div
            className="w-32 h-32 rounded-full blur-2xl"
            style={{ background: project.accent }}
          />
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-sm text-gray-500">
            {project.year}
          </span>
        </div>

        {/* Coming soon overlay */}
        {project.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 border border-gray-300 px-3 py-1.5 rounded-full">
              {t.work.comingSoon}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: project.comingSoon ? '#9CA3AF' : project.accent }}
          >
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {project.description}
        </p>

        {!project.comingSoon && (
          <span className="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
            {t.work.viewCase}
          </span>
        )}
      </div>
    </div>
  )

  if (!project.comingSoon && project.slug) {
    return <Link href={`/projects/${project.slug}`}>{card}</Link>
  }

  return card
}
