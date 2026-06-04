'use client'

import { useRef, useEffect } from 'react'
import { useLang } from '@/lib/LangContext'

function FitLine({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isCJK = /[一-鿿]/.test(text)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fit = () => {
      const parent = el.parentElement
      if (!parent) return
      el.style.fontSize = '100px'
      const textW = el.scrollWidth
      const parentW = parent.clientWidth
      if (textW > 0) {
        el.style.fontSize = Math.floor((parentW / textW) * 100 * 0.99) + 'px'
      }
    }

    const run = () => {
      fit()
      if (document.fonts) document.fonts.ready.then(fit)
    }

    run()
    const observer = new ResizeObserver(run)
    if (el.parentElement) observer.observe(el.parentElement)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`whitespace-nowrap ${className ?? 'font-flex ultra-wide'}`}
      style={{ lineHeight: isCJK ? 1 : 0.88, fontSize: '100px' }}
    >
      {text}
    </div>
  )
}

export default function Hero() {
  const { lang } = useLang()

  return (
    <section id="hero" className="h-screen flex flex-col bg-white overflow-x-hidden">

      {/* Spacer — pushes name to the lower half of the screen */}
      <div className="flex-1 min-h-0" />

      {/* Full-width name */}
      <div className="px-[40px] lg:px-[70px]">
        <p className="lab mb-3" style={{ fontSize: '11px', opacity: 0.35 }}>Portfolio</p>
        {lang === 'en' ? (
          <>
            <FitLine text="XINYU" />
            <FitLine text="ZHANG" />
          </>
        ) : (
          <FitLine text="张馨予" className="font-noto font-bold" />
        )}
      </div>

      {/* Role + tagline row */}
      <div
        className="px-[40px] lg:px-[70px] flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-[60px] mt-6 pb-10"
      >
        <div className="lab shrink-0" style={{ fontSize: '13px', lineHeight: 1.65 }}>
          {lang === 'en' ? (
            <>UX Designer<br />Product Manager<br />Open to work</>
          ) : (
            <>UX 设计师<br />产品经理<br />求职中</>
          )}
        </div>
        <p
          className="font-noto m-0"
          style={{ fontSize: '16px', lineHeight: 1.75, color: '#444', maxWidth: '460px' }}
        >
          {lang === 'en'
            ? 'Designing at the intersection of technology, strategy, and human communication.'
            : '在技术、策略与人的传播之间，做出有意义的设计。'}
        </p>
      </div>

    </section>
  )
}
