'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

export default function Contact() {
  const { lang } = useLang()

  return (
    <>
      <section id="contact" className="bg-white border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[70px] pt-[80px] pb-[28px]">

          {/* ── Large typographic CTA ── */}
          <div
            className="font-flex"
            style={{ fontSize: 'clamp(60px, 11vw, 160px)', lineHeight: 0.9 }}
          >
            <div>
              <span className="wide">
                {lang === 'en' ? 'GET IN' : '欢迎'}
              </span>
            </div>
            <div style={{ marginTop: '4px' }}>
              <span className="ultra-wide do-stretch">
                {lang === 'en' ? 'TOUCH.' : '联系我。'}
              </span>
            </div>
          </div>

          {/* ── Tagline ── */}
          <p
            className="font-noto mt-6"
            style={{ fontSize: '16px', color: '#555', maxWidth: '400px', lineHeight: 1.7 }}
          >
            {lang === 'en'
              ? 'Open to new roles, freelance projects, and creative collaborations.'
              : '欢迎新的工作机会、自由项目与创意合作。'}
          </p>

          {/* ── Primary CTA button ── */}
          <a
            href="mailto:iamiya0618@gmail.com"
            className="lab inline-block mt-8 px-6 py-3 bg-[#0a0a0a] text-white hover:bg-[#333] transition-colors"
            style={{ fontSize: '12px' }}
          >
            {lang === 'en' ? 'Send an Email ↗' : '发邮件 ↗'}
          </a>
        </div>

        {/* ── Contact info row ── */}
        <div
          className="max-w-[1440px] mx-auto px-[40px] lg:px-[70px] pb-[60px] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-10"
        >
          <div className="lab" style={{ lineHeight: 1.8, fontSize: '12px' }}>
            <a href="mailto:iamiya0618@gmail.com" className="hover:opacity-50 transition-opacity block">
              iamiya0618@gmail.com
            </a>
            <a href="mailto:iamiya0187@163.com" className="hover:opacity-50 transition-opacity block opacity-40">
              iamiya0187@163.com
            </a>
          </div>

          <div className="lab text-right" style={{ lineHeight: 1.8, fontSize: '12px' }}>
            <Link href="/cv" className="hover:opacity-50 transition-opacity block">
              Résumé PDF ↗
            </Link>
            <span className="opacity-30 block">LinkedIn ↗</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[70px] py-5 flex items-center justify-between">
          <p className="lab text-[11px] text-black/30">
            {lang === 'en' ? '© 2026 Xinyu Zhang' : '© 2026 张馨予'}
          </p>
          <p className="lab text-[11px] text-black/30">
            {lang === 'en' ? 'Designed & Built with care' : '用心设计与构建'}
          </p>
        </div>
      </footer>
    </>
  )
}
