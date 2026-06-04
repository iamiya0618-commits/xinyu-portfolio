'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

export default function Navbar() {
  const { lang, setLang } = useLang()
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
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/10' : 'bg-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[70px] py-[18px] flex items-start justify-between">
        {/* Left: identity */}
        <div className="lab leading-[1.7] text-[12px] lg:text-[14px]">
          张馨予 — Xinyu Zhang<br />
          <span className="hidden sm:inline">Interaction &amp; Product Design</span>
        </div>

        {/* Center: portfolio mark */}
        <div className="lab text-center leading-[1.7] text-[12px] lg:text-[14px] hidden md:block">
          Portfolio<br />©2026
        </div>

        {/* Right: nav links + lang toggle */}
        <div className="lab text-right leading-[1.7] text-[12px] lg:text-[14px]">
          <div className="flex items-center gap-4 justify-end">
            <button onClick={() => scrollTo('work')} className="hover:opacity-50 transition-opacity hidden sm:block">
              Work
            </button>
            <button onClick={() => scrollTo('about')} className="hover:opacity-50 transition-opacity hidden sm:block">
              About
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:opacity-50 transition-opacity hidden sm:block">
              Contact
            </button>
            <Link href="/cv" className="hover:opacity-50 transition-opacity hidden sm:block">
              Résumé
            </Link>
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="hover:opacity-50 transition-opacity border border-black px-2 py-0.5"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
          </div>
          <div className="mt-1 hidden lg:block opacity-50">Sydney · Open to work</div>
        </div>
      </div>
    </nav>
  )
}
