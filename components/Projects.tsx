'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePageTransition } from '@/lib/TransitionContext'

type FanCard = {
  name: string
  discipline: string
  year: string
  summary: string
  artClass: string
  textColor: string
  left: number
  top: number
  scale: number
  rotation: number
  zIndex: number
  slug: string | null
  transitionColor: string
}

const cards: FanCard[] = [
  {
    name: 'AI Canvas',
    discipline: 'UX / UI',
    year: '2024',
    summary: 'An AI-assisted learning system that lowers language anxiety and helps international students participate with confidence.',
    artClass: 'art-blue',
    textColor: '#fff',
    left: 90,
    top: 18,
    scale: 1.08,
    rotation: -7,
    zIndex: 1,
    slug: 'ai-canvas',
    transitionColor: 'blue',
  },
  {
    name: 'Mapmima',
    discipline: 'Interaction Design',
    year: '2024',
    summary: 'A cross-media care ecosystem for mothers, connecting spatial installations with a companion app.',
    artClass: 'art-purple',
    textColor: '#fff',
    left: 665,
    top: 108,
    scale: 0.94,
    rotation: -2,
    zIndex: 2,
    slug: 'mapmima',
    transitionColor: 'purple',
  },
  {
    name: 'Starbucks Echo',
    discipline: 'AI · Product Strategy',
    year: '2025',
    summary: 'A strategic service proposal that uses ambient AI, AR memory, and community loyalty to restore the third place.',
    artClass: 'art-green',
    textColor: '#fff',
    left: 270,
    top: 226,
    scale: 1.02,
    rotation: 4,
    zIndex: 3,
    slug: 'starbucks-echo',
    transitionColor: 'green',
  },
  {
    name: 'HungryHub',
    discipline: 'Experience Design',
    year: '2024',
    summary: 'A food discovery experience created through a focused design sprint, from research to prototype testing.',
    artClass: 'art-orange',
    textColor: '#0a0a0a',
    left: 790,
    top: 354,
    scale: 0.9,
    rotation: -3,
    zIndex: 4,
    slug: null,
    transitionColor: '#ff8a00',
  },
  {
    name: 'Xiaohongshu',
    discipline: 'PM Case Study',
    year: '2024',
    summary: 'A product management case study around lifestyle-platform strategy, feature definition, and iteration.',
    artClass: 'art-pink',
    textColor: '#0a0a0a',
    left: 135,
    top: 482,
    scale: 0.96,
    rotation: 6,
    zIndex: 5,
    slug: null,
    transitionColor: '#ff2e8b',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)
  const { trigger } = usePageTransition()
  const router = useRouter()

  useEffect(() => {
    cards.forEach((card) => {
      if (card.slug) router.prefetch(`/projects/${card.slug}`)
    })
  }, [router])

  const handleClick = (c: FanCard) => {
    if (!c.slug) return
    trigger(`/projects/${c.slug}`, c.transitionColor)
  }

  return (
    <section id="work" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[70px] pt-[80px] pb-[80px]">

        {/* Section header */}
        <div
          className="lab border-b-2 border-[#0a0a0a] pb-[10px] flex justify-between"
          style={{ fontSize: '13px' }}
        >
          <span>Selected Work — 精选作品</span>
          <span>05 Projects · 2024—2026</span>
        </div>

        {/* ── Fan layout — desktop ── */}
        <div
          className="relative hidden lg:block"
          style={{ height: '850px', marginTop: '34px' }}
        >
          {cards.map((c) => {
            const isHovered = hovered === c.name
            const hasHover = hovered !== null
            const isDimmed = hasHover && !isHovered
            const baseWidth = 232 * c.scale
            const baseHeight = 332 * c.scale
            const hoverWidth = baseWidth + 42
            const hoverHeight = baseHeight + 56
            const detailOnLeft = c.left > 560
            const detailWidth = 350
            const detailX = detailOnLeft ? -(detailWidth + 52) : hoverWidth + 86
            const coverX = detailOnLeft ? 0 : 0
            const detailCardX = detailOnLeft ? detailWidth + 64 : 0
            const hoverLift = detailOnLeft ? -(detailWidth + 18) : -28

            return (
              <div
                key={c.name}
                style={{
                  position: 'absolute',
                  left: c.left,
                  top: c.top,
                  zIndex: isHovered ? 20 : c.zIndex,
                  width: 790,
                  height: 470,
                  transform: isHovered ? `translateX(${hoverLift}px)` : 'translateX(0)',
                  opacity: isDimmed ? 0 : 1,
                  pointerEvents: isDimmed ? 'none' : 'auto',
                  transition:
                    'opacity 0.28s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                <div
                  className="absolute top-0"
                  style={{
                    left: detailOnLeft ? 0 : detailX,
                    width: detailWidth,
                    height: Math.max(332, baseHeight),
                    transform: isHovered
                      ? 'translateX(0) rotate(0deg)'
                      : `translateX(${detailOnLeft ? 96 : -96}px) rotate(${detailOnLeft ? 4 : -4}deg)`,
                    opacity: isHovered ? 1 : 0,
                    transition:
                      'opacity 0.22s ease, transform 0.58s cubic-bezier(0.22,1,0.36,1)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                >
                  <div className="h-full border-2 border-[#0a0a0a] bg-white px-9 py-7 shadow-[10px_10px_0_#0a0a0a]">
                    <div className="lab flex items-center justify-between text-[10px] text-gray-400">
                      <span>{c.year}</span>
                      <span>{c.slug ? 'Case Study' : 'Coming Soon'}</span>
                    </div>
                    <h3 className="mt-12 text-3xl font-semibold leading-none text-[#0a0a0a]">
                      {c.name}
                    </h3>
                    <p className="lab mt-3 text-[11px]" style={{ color: c.transitionColor }}>
                      {c.discipline}
                    </p>
                    <p className="mt-7 text-[15px] leading-6 text-gray-600">
                      {c.summary}
                    </p>
                    <p className="lab absolute bottom-7 left-9 text-[11px] text-[#0a0a0a]">
                      {c.slug ? 'Click to open' : 'Details soon'}
                    </p>
                  </div>
                </div>

                <div
                  className={`${c.artClass} absolute top-0 overflow-hidden`}
                  style={{
                    left: isHovered ? detailCardX : coverX,
                    width: isHovered ? hoverWidth : baseWidth,
                    height: isHovered ? hoverHeight : baseHeight,
                    transform: `rotate(${isHovered ? 0 : c.rotation}deg) scale(${isHovered ? 1.06 : 1})`,
                    boxShadow: isHovered
                      ? '0 30px 70px rgba(0,0,0,0.34)'
                      : '0 8px 22px rgba(0,0,0,0.22)',
                    transition:
                      'left 0.55s cubic-bezier(0.22,1,0.36,1), width 0.55s cubic-bezier(0.22,1,0.36,1), height 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
                    cursor: c.slug ? 'pointer' : 'default',
                    zIndex: 2,
                    pointerEvents: 'auto',
                  }}
                  onMouseEnter={() => setHovered(c.name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(c)}
                >
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5">
                    <span className="lab text-[11px]" style={{ color: c.textColor, opacity: 0.82 }}>
                      {c.year}
                    </span>
                    <span className="lab text-[11px]" style={{ color: c.textColor, opacity: 0.82 }}>
                      0{c.zIndex}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="font-flex ultra-wide m-0 max-w-full whitespace-normal break-words leading-[0.88]"
                      style={{
                        color: c.textColor,
                        fontSize: isHovered ? `${Math.max(38, 44 * c.scale)}px` : `${Math.max(28, 32 * c.scale)}px`,
                        mixBlendMode: c.textColor === '#fff' ? 'difference' : 'normal',
                        transition: 'font-size 0.35s ease',
                      }}
                    >
                      {c.name}
                    </h3>
                    <span
                      className="lab mt-4 block"
                      style={{
                        color: c.textColor,
                        fontSize: '11px',
                        opacity: 0.72,
                        mixBlendMode: c.textColor === '#fff' ? 'difference' : 'normal',
                      }}
                    >
                      {c.discipline}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Horizontal scroll — mobile/tablet ── */}
        <div
          className="flex lg:hidden gap-4 overflow-x-auto pt-8 pb-4"
          style={{ marginLeft: '-40px', marginRight: '-40px', paddingLeft: '40px', paddingRight: '40px' }}
        >
          {cards.map((c) => (
            <div
              key={c.name}
              className="flex-none flex flex-col gap-2"
              onClick={() => handleClick(c)}
              style={{ cursor: c.slug ? 'pointer' : 'default' }}
            >
              <span className="lab text-[11px]">{c.discipline}</span>
              <div
                className={`${c.artClass} overflow-hidden relative`}
                style={{ width: 180, height: 260, boxShadow: '0 6px 16px rgba(0,0,0,0.2)' }}
              >
                <div className="absolute left-3 bottom-3">
                  <span className="font-flex ultra-wide block text-[28px] leading-none" style={{ color: c.textColor }}>
                    {c.name}
                  </span>
                  <span className="lab block" style={{ color: c.textColor, fontSize: '9px', opacity: 0.7, marginTop: '2px' }}>
                    {c.discipline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
