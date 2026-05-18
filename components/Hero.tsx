'use client'

import { useLang } from '@/lib/LangContext'

export default function Hero() {
  const { t } = useLang()

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100 rounded-full blur-3xl opacity-40 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Greeting + role */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-6">
            {t.hero.greeting}
          </p>
        </div>

        {/* Name */}
        <div className="animate-fade-in-up" style={{ animationDelay: '80ms' }}>
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-none tracking-tight text-gray-900 mb-8">
            {t.hero.name}
          </h1>
        </div>

        {/* Divider */}
        <div className="animate-fade-in-up" style={{ animationDelay: '160ms' }}>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-orange-500 mb-8" />
        </div>

        {/* Role + tagline */}
        <div className="animate-fade-in-up max-w-xl" style={{ animationDelay: '240ms' }}>
          <p className="text-lg font-medium text-gray-800 mb-3">{t.hero.role}</p>
          <p className="text-gray-500 leading-relaxed">{t.hero.tagline}</p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up mt-12" style={{ animationDelay: '320ms' }}>
          <button
            onClick={scrollToWork}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-violet-600 transition-all duration-300"
          >
            {t.hero.cta}
            <span className="group-hover:translate-x-1 transition-transform">↓</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up absolute bottom-10 left-1/2 -translate-x-1/2" style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col items-center gap-1 opacity-30">
            <div className="w-px h-12 bg-gray-900 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
