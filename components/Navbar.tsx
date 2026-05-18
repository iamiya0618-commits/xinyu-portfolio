'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/lib/LangContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-semibold text-sm tracking-wide text-gray-900 hover:opacity-60 transition-opacity"
        >
          Xinyu Zhang
        </button>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            {(['work', 'about', 'contact'] as const).map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {t.nav[key]}
              </button>
            ))}
          </div>

          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600 transition-all"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}
