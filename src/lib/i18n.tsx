import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, LText } from './types';
import { UI } from './ui-strings';

const LS_KEY = 'csh.lang';

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Translate a bilingual content pair. */
  T: (t: LText) => string;
  /** Translate a UI string by key. */
  ui: (key: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

function detect(): Lang {
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (saved === 'en' || saved === 'bn') return saved;
  } catch { /* private mode */ }
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('bn')
    ? 'bn'
    : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(LS_KEY, l); } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    document.title =
      lang === 'bn'
        ? 'কোডশিখন — English ও বাংলায় ডেভেলপমেন্ট শিখুন'
        : 'CodeShikhon — Learn Development in English & বাংলা';
  }, [lang]);

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      setLang,
      T: (t) => (lang === 'bn' ? t.bn : t.en),
      ui: (key) => {
        const e = UI[key];
        if (!e) return key;
        return lang === 'bn' ? e.bn : e.en;
      },
    }),
    [lang, setLang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useI18n must be used inside <I18nProvider>');
  return v;
}
