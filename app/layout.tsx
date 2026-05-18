import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Xinyu Zhang — UI/UX Designer & Product Manager',
  description: 'Portfolio of Xinyu Zhang (张馨予), UI/UX Designer and Product Manager.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full font-sans">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
