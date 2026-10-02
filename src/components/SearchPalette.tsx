import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { TECHS } from '../data/registry';
import { GLOSSARY } from '../data/glossary';
import { allLessons } from '../content';

/** Global search (Section 23/34): Ctrl+K, autocomplete over techs, lessons, glossary, pages. */

interface Item {
  label: string;
  sub: string;
  kind: 'tech' | 'lesson' | 'term' | 'page';
  path: string;
  hay: string;
}

const KIND_ICON: Record<Item['kind'], string> = { tech: '📘', lesson: '📗', term: '📙', page: '📄' };

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { T, ui, lang } = useI18n();
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const base: Item[] = [
      { label: ui('nav.home'), sub: 'page', kind: 'page', path: '/', hay: 'home হোম' },
      { label: ui('nav.explore'), sub: 'page', kind: 'page', path: '/explore', hay: 'explore technologies directory' },
      { label: ui('nav.roadmaps'), sub: 'page', kind: 'page', path: '/roadmaps', hay: 'roadmap path' },
      { label: ui('nav.labs'), sub: 'page', kind: 'page', path: '/labs', hay: 'labs event loop execution visualizer' },
      { label: ui('nav.playground'), sub: 'page', kind: 'page', path: '/playground', hay: 'playground code editor run' },
      { label: ui('nav.glossary'), sub: 'page', kind: 'page', path: '/glossary', hay: 'glossary dictionary' },
    ];
    for (const t of TECHS) {
      base.push({
        label: `${t.icon} ${t.name}`,
        sub: t.cat,
        kind: 'tech',
        path: `/learn/${t.slug}`,
        hay: `${t.name} ${t.slug} ${t.en} ${t.bn}`.toLowerCase(),
      });
    }
    for (const l of allLessons()) {
      base.push({
        label: `${l.tech}: ${T(l.title)}`,
        sub: 'lesson',
        kind: 'lesson',
        path: `/learn/${l.tech}/lessons/${l.slug}`,
        hay: `${l.title.en} ${l.title.bn} ${l.summary.en} ${l.summary.bn} lesson`.toLowerCase(),
      });
    }
    for (const g of GLOSSARY) {
      base.push({
        label: g.term,
        sub: lang === 'bn' ? g.bn : g.en,
        kind: 'term',
        path: `/glossary#${encodeURIComponent(g.term)}`,
        hay: `${g.term} ${g.en} ${g.bn} ${g.simpleEn} ${g.simpleBn}`.toLowerCase(),
      });
    }
    return base;
  }, [ui, T, lang]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items.slice(0, 12);
    return items.filter((it) => it.hay.includes(s) || it.label.toLowerCase().includes(s)).slice(0, 14);
  }, [q, items]);

  useEffect(() => {
    if (open) {
      setQ('');
      setSel(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  const go = (path: string) => {
    onClose();
    nav(path);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[12vh]"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ui('search.placeholder')}
        className="fade-up w-full max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-3">
          <span aria-hidden="true" className="text-muted">⌕</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSel((v) => Math.min(results.length - 1, v + 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSel((v) => Math.max(0, v - 1));
              } else if (e.key === 'Enter' && results[sel]) {
                go(results[sel].path);
              } else if (e.key === 'Escape') {
                onClose();
              }
            }}
            placeholder={ui('search.placeholder')}
            className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results"
            aria-activedescendant={results[sel] ? `sr-${sel}` : undefined}
          />
          <kbd className="rounded border border-border bg-elev px-1.5 py-0.5 text-[10px] text-muted">ESC</kbd>
        </div>
        <ul id="search-results" role="listbox" className="max-h-80 overflow-y-auto p-1.5">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted">{ui('search.empty')}</li>
          ) : (
            results.map((r, k) => (
              <li key={r.path + k} role="option" id={`sr-${k}`} aria-selected={k === sel}>
                <button
                  type="button"
                  onMouseEnter={() => setSel(k)}
                  onClick={() => go(r.path)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm ${
                    k === sel ? 'bg-accent/15' : ''
                  }`}
                >
                  <span aria-hidden="true">{KIND_ICON[r.kind]}</span>
                  <span className="min-w-0 flex-1 truncate font-medium">{r.label}</span>
                  <span className="shrink-0 rounded bg-elev px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                    {r.sub}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="border-t border-border px-3 py-1.5 text-[11px] text-muted">{ui('search.hint')}</div>
      </div>
    </div>
  );
}
