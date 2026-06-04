import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'
import { TransitionProvider } from '@/lib/TransitionContext'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '张馨予 · Xinyu Zhang — Portfolio',
  description: 'Portfolio of Xinyu Zhang (张馨予), Interaction Designer & Product Manager.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&family=Space+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white">
        <LangProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </LangProvider>
      </body>
    </html>
  )
}
