'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

export default function ProjectNav() {
  const { lang, setLang } = useLang()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>{lang === 'en' ? 'Back to Work' : '返回作品'}</span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300 hidden sm:block">
            Case Study
          </span>
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
