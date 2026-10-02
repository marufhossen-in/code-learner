import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useTheme, THEMES } from '../lib/theme';
import { CATEGORIES, techsByCategory } from '../data/registry';
import { SearchPalette } from './SearchPalette';

function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex overflow-hidden rounded-lg border border-border" role="group" aria-label="Language">
      {(['en', 'bn'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 text-xs font-bold transition ${
            lang === l ? 'bg-accent text-onaccent' : 'bg-surface text-muted hover:bg-elev'
          }`}
        >
          {l === 'en' ? 'EN' : 'বাংলা'}
        </button>
      ))}
    </div>
  );
}

const THEME_DOT: Record<string, string> = {
  light: '#f4f6fb', dark: '#151c30', system: 'linear-gradient(90deg,#f4f6fb 50%,#151c30 50%)',
  midnight: '#0b1020', ocean: '#0a2b2e', forest: '#122417', solarized: '#fdf6e3', contrast: '#000',
};

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { ui } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ui('theme.label')}
        className="rounded-lg border border-border bg-surface px-2.5 py-1 text-sm transition hover:bg-elev"
      >
        {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : theme === 'system' ? '💻' : '🎨'}
      </button>
      {open && (
        <ul role="listbox" aria-label={ui('theme.label')} className="absolute right-0 z-40 mt-1 w-40 overflow-hidden rounded-lg border border-border bg-surface py-1 shadow-xl">
          {THEMES.map((t) => (
            <li key={t} role="option" aria-selected={theme === t}>
              <button
                type="button"
                onClick={() => {
                  setTheme(t);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition hover:bg-elev ${
                  theme === t ? 'font-semibold text-accent' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-3.5 w-3.5 rounded-full border border-border"
                  style={{ background: THEME_DOT[t] }}
                />
                {ui(`theme.${t}`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const NAV = [
  { to: '/explore', key: 'nav.explore' },
  { to: '/roadmaps', key: 'nav.roadmaps' },
  { to: '/labs', key: 'nav.labs' },
  { to: '/debug', key: 'nav.debug' },
  { to: '/playground', key: 'nav.playground' },
  { to: '/glossary', key: 'nav.glossary' },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
      <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm text-onaccent">
        {'</>'}
      </span>
      <span className="text-lg">
        Code<span className="text-accent">Shikhon</span>
      </span>
    </Link>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { ui, T } = useI18n();
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-1.5 text-sm transition ${
      isActive ? 'bg-accent/15 font-semibold text-accent' : 'text-muted hover:bg-elev hover:text-text'
    }`;
  return (
    <nav className="space-y-4" aria-label="primary">
      <div className="space-y-0.5">
        <NavLink to="/" end className={linkCls} onClick={onNavigate}>
          🏠 {ui('nav.home')}
        </NavLink>
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} className={linkCls} onClick={onNavigate}>
            {n.to === '/explore' ? '🧭 ' : n.to === '/roadmaps' ? '🗺️ ' : n.to === '/labs' ? '🧪 ' : n.to === '/playground' ? '⚡ ' : '📖 '}
            {ui(n.key)}
          </NavLink>
        ))}
      </div>
      <div className="border-t border-border pt-3">
        <div className="mb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-muted">
          {T({ en: 'Technologies', bn: 'টেকনোলজিসমূহ' })}
        </div>
        {CATEGORIES.map((c) => (
          <details key={c.id} className="group">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted transition hover:bg-elev hover:text-text [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="text-xs transition group-open:rotate-90">▸</span>
              <span aria-hidden="true">{c.icon}</span>
              <span className="truncate">{T({ en: c.en, bn: c.bn })}</span>
              <span className="ml-auto text-[10px] text-muted/70">{techsByCategory(c.id).length}</span>
            </summary>
            <div className="ml-4 space-y-0.5 border-l border-border pl-2">
              {techsByCategory(c.id).map((t) => (
                <NavLink
                  key={t.slug}
                  to={`/learn/${t.slug}`}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 rounded px-2 py-1 text-[13px] transition ${
                      isActive ? 'bg-accent/15 font-semibold text-accent' : 'text-muted hover:bg-elev hover:text-text'
                    }`
                  }
                >
                  <span aria-hidden="true">{t.icon}</span>
                  <span className="truncate">{t.name}</span>
                  {t.status === 'available' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-ok" aria-label="available" />}
                </NavLink>
              ))}
            </div>
          </details>
        ))}
      </div>
    </nav>
  );
}

export function Layout() {
  const { ui } = useI18n();
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!loc.hash) window.scrollTo({ top: 0 });
    else {
      const el = document.getElementById(decodeURIComponent(loc.hash.slice(1)));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [loc.pathname, loc.hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-350 items-center gap-3 px-3">
          <button
            type="button"
            className="rounded-lg border border-border p-1.5 lg:hidden"
            onClick={() => setDrawer(true)}
            aria-label={ui('nav.menu')}
            aria-expanded={drawer}
          >
            ☰
          </button>
          <Brand />
          <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="top">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `rounded-lg px-2.5 py-1.5 text-sm transition ${
                    isActive ? 'bg-accent/15 font-semibold text-accent' : 'text-muted hover:bg-elev hover:text-text'
                  }`
                }
              >
                {ui(n.key)}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted transition hover:bg-elev sm:flex"
              aria-label="Search (Ctrl+K)"
            >
              ⌕ <span className="hidden lg:inline">{ui('search.open')}</span>
              <kbd className="rounded border border-border bg-elev px-1 text-[10px]">Ctrl K</kbd>
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm sm:hidden"
              aria-label="Search"
            >
              ⌕
            </button>
            <LanguageToggle />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-350 flex-1">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border p-3 scrolly lg:block">
          <SidebarContent />
        </aside>

        {drawer && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label={ui('nav.menu')}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setDrawer(false)} />
            <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto bg-bg p-3 scrolly">
              <div className="mb-2 flex items-center justify-between">
                <Brand />
                <button type="button" onClick={() => setDrawer(false)} aria-label={ui('nav.close')} className="rounded-lg border border-border p-1.5">
                  ✕
                </button>
              </div>
              <SidebarContent onNavigate={() => setDrawer(false)} />
            </div>
          </div>
        )}

        <main id="main" className="min-w-0 flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      <footer className="border-t border-border py-6">
        <div className="mx-auto flex max-w-350 flex-col items-center gap-2 px-4 text-center text-sm text-muted">
          <span>
            <strong className="text-text">CodeShikhon</strong> · {ui('footer.note')}
          </span>
          <span className="font-mono text-xs">EN · বাংলা · Vite · React · TypeScript · Tailwind</span>
        </div>
      </footer>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
