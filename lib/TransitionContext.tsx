'use client'

import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'

type TransitionCtx = {
  trigger: (href: string, color: string) => void
}

const Ctx = createContext<TransitionCtx>({ trigger: () => {} })

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [opening, setOpening] = useState(false)
  const [color, setColor] = useState('#0a0a0a')
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => timerRef.current.forEach(clearTimeout)

  const trigger = useCallback((href: string, cardColor: string) => {
    clear()
    router.prefetch(href)
    setColor(cardColor)
    setOpening(false)
    setVisible(true)

    // Two rAFs: first commits the element, second paints it before we start the transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOpening(true)
      })
    })

    const t1 = setTimeout(() => router.push(href), 150)
    const t2 = setTimeout(() => {
      setVisible(false)
      setOpening(false)
    }, 560)
    timerRef.current = [t1, t2]
  }, [router])

  return (
    <Ctx.Provider value={{ trigger }}>
      {children}
      {visible && (
        <div
          className={opening ? 'card-cover-open' : 'card-cover'}
          style={{ background: cardGradient(color) }}
        />
      )}
    </Ctx.Provider>
  )
}

export const usePageTransition = () => useContext(Ctx)

// Reproduce the art-fill gradients from the CSS classes
function cardGradient(color: string): string {
  switch (color) {
    case 'purple':
      return 'radial-gradient(55% 55% at 60% 35%, #c98cff 0%, transparent 60%), linear-gradient(150deg, #7b2eff 0%, #b14bff 50%, #ff5ea8 100%)'
    case 'blue':
      return 'radial-gradient(120% 80% at 30% 20%, #6ea8ff 0%, #1c4dff 45%, #0a1f8f 100%)'
    case 'green':
      return 'linear-gradient(180deg, #0fae6e 0%, #1d8f63 40%, #6fae3e 70%, #d9c64a 100%)'
    default:
      return color
  }
}
