import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '../types';

interface LanguageContextValue {
  lang: Lang;
  isRtl: boolean;
  setLang: (next: Lang) => void;
  toggleLang: () => void;
  pick: (en: string, ar?: string | null) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  isRtl: false,
  setLang: () => {},
  toggleLang: () => {},
  pick: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  const pick = (en: string, ar?: string | null) => {
    if (lang === 'ar' && ar && ar.trim().length > 0) return ar;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ lang, isRtl, setLang, toggleLang, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
