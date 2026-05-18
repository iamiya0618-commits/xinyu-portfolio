'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang, translations } from './i18n'

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof translations['en']
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
