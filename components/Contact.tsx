'use client'

import { useLang } from '@/lib/LangContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <>
      <section id="contact" className="py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          {/* Decorative background text */}
          <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(4rem,15vw,12rem)] font-black text-gray-50 select-none pointer-events-none leading-none tracking-tighter">
            HELLO
          </p>

          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
              {t.contact.tagline}
            </p>

            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-violet-600 transition-all duration-300 group"
            >
              {t.contact.emailLabel}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <p className="mt-4 text-sm text-gray-400">{t.contact.email}</p>
          </div>
        </div>
      </section>

      <footer className="py-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-400">{t.footer.copy}</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:iamiya0618@gmail.com"
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
