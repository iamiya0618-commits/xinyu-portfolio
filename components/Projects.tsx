'use client'

import { useState } from 'react'
import { usePageTransition } from '@/lib/TransitionContext'

type FanCard = {
  name: string
  discipline: string
  artClass: string
  textColor: string
  left: number
  top: number
  rotation: number
  zIndex: number
  slug: string | null
  transitionColor: string
}

const cards: FanCard[] = [
  {
    name: 'AI Canvas',
    discipline: 'UX / UI',
    artClass: 'art-blue',
    textColor: '#fff',
    left: 70,
    top: 36,
    rotation: -7,
    zIndex: 1,
    slug: 'ai-canvas',
    transitionColor: 'blue',
  },
  {
    name: 'Mapmima',
    discipline: 'Interaction Design',
    artClass: 'art-purple',
    textColor: '#fff',
    left: 250,
    top: 50,
    rotation: -2,
    zIndex: 2,
    slug: 'mapmima',
    transitionColor: 'purple',
  },
  {
    name: 'Starbucks Echo',
    discipline: 'AI · Product Strategy',
    artClass: 'art-green',
    textColor: '#fff',
    left: 470,
    top: 36,
    rotation: 4,
    zIndex: 3,
    slug: 'starbucks-echo',
    transitionColor: 'green',
  },
  {
    name: 'HungryHub',
    discipline: 'Experience Design',
    artClass: 'art-orange',
    textColor: '#0a0a0a',
    left: 690,
    top: 54,
    rotation: -3,
    zIndex: 4,
    slug: null,
    transitionColor: '#ff8a00',
  },
  {
    name: 'Xiaohongshu',
    discipline: 'PM Case Study',
    artClass: 'art-pink',
    textColor: '#0a0a0a',
    left: 910,
    top: 36,
    rotation: 6,
    zIndex: 5,
    slug: null,
    transitionColor: '#ff2e8b',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)
  const { trigger } = usePageTransition()

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
          style={{ height: '490px', marginTop: '34px' }}
        >
          {cards.map((c) => {
            const isHovered = hovered === c.name
            const cardEl = (
              <div
                className={`${c.artClass} overflow-hidden relative`}
                style={{
                  width: 232,
                  height: 332,
                  transform: `rotate(${c.rotation}deg) scale(${isHovered ? 1.1 : 1})`,
                  boxShadow: isHovered
                    ? '0 28px 64px rgba(0,0,0,0.38)'
                    : '0 8px 22px rgba(0,0,0,0.22)',
                  transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                  cursor: c.slug ? 'pointer' : 'default',
                }}
              >
                <div className="absolute left-[14px] bottom-[12px]">
                  <span
                    className="lab block"
                    style={{
                      color: c.textColor,
                      fontSize: '13px',
                      mixBlendMode: c.textColor === '#fff' ? 'difference' : 'normal',
                    }}
                  >
                    {c.name}
                  </span>
                  <span
                    className="lab block"
                    style={{
                      color: c.textColor,
                      fontSize: '10px',
                      opacity: 0.7,
                      marginTop: '3px',
                      mixBlendMode: c.textColor === '#fff' ? 'difference' : 'normal',
                    }}
                  >
                    {c.discipline}
                  </span>
                </div>
              </div>
            )

            return (
              <div
                key={c.name}
                style={{
                  position: 'absolute',
                  left: c.left,
                  top: c.top,
                  zIndex: isHovered ? 20 : c.zIndex,
                  width: 232,
                  height: 332,
                }}
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(c)}
              >
                {cardEl}
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
                  <span className="lab block text-[12px]" style={{ color: c.textColor }}>
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
