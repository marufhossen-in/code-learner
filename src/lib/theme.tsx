import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export const THEMES = [
  'light',
  'dark',
  'system',
  'midnight',
  'ocean',
  'forest',
  'solarized',
  'contrast',
] as const;
export type Theme = (typeof THEMES)[number];

const LS_KEY = 'csh.theme';

interface ThemeCtx {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

function resolve(t: Theme): 'light' | 'dark' | 'midnight' | 'ocean' | 'forest' | 'solarized' | 'contrast' {
  if (t !== 'system') return t;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initial(): Theme {
  try {
    const s = localStorage.getItem(LS_KEY);
    if (s && (THEMES as readonly string[]).includes(s)) return s as Theme;
  } catch { /* ignore */ }
  return 'system';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initial);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem(LS_KEY, t); } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    const apply = () => {
      document.documentElement.dataset.theme = resolve(theme);
    };
    apply();
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme(): ThemeCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useTheme must be used inside <ThemeProvider>');
  return v;
}
