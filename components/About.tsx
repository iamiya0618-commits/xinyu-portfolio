'use client'

import { useLang } from '@/lib/LangContext'

export default function About() {
  const { t, lang } = useLang()

  return (
    <section id="about" className="py-28 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
              {t.about.title}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {lang === 'en' ? (
                <>Design, Strategy<br />&amp; <span className="gradient-text">Media.</span></>
              ) : (
                <>设计 · 策略<br /><span className="gradient-text">与传媒。</span></>
              )}
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t.about.bio}
            </p>
          </div>

          {/* Right: skills */}
          <div className="lg:pt-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
              {t.about.skills}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.about.skillsList.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 hover:border-violet-500 hover:text-violet-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Decorative stat-like elements */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { num: '5+', label: 'Projects' },
                { num: '2+', label: 'Years Experience' },
              ].map(({ num, label }) => (
                <div key={label} className="border-l-2 border-violet-500 pl-4">
                  <p className="text-3xl font-bold text-white">{num}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
