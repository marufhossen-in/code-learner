import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { GLOSSARY, GLOSSARY_CATS, TERM_CAT } from '../data/glossary';
import type { GlossaryCatId } from '../data/glossary';

export default function GlossaryPage() {
  const { ui, lang, T } = useI18n();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<GlossaryCatId | 'all'>('all');

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = GLOSSARY.filter((g) => {
      if (cat !== 'all' && TERM_CAT[g.term] !== cat) return false;
      if (!s) return true;
      return (
        g.term.toLowerCase().includes(s) ||
        g.en.toLowerCase().includes(s) ||
        g.bn.includes(s) ||
        g.simpleEn.toLowerCase().includes(s) ||
        g.simpleBn.includes(s)
      );
    });
    return [...list].sort((a, b) => a.term.localeCompare(b.term));
  }, [q, cat]);

  const catOf = (term: string) => GLOSSARY_CATS.find((c) => c.id === TERM_CAT[term]);

  return (
    <div className="mx-auto max-w-350">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">📖 {ui('nav.glossary')}</h1>
        <p className="mt-1 text-muted">
          {lang === 'bn'
            ? 'ডেভেলপার শব্দের অভিধান — সহজ ব্যাখ্যা, টেকনিক্যাল ব্যাখ্যা, উদাহরণ।'
            : 'The developer dictionary — simple meaning, technical meaning, examples.'}
        </p>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`⌕ ${ui('gloss.search')}`}
          className="mt-4 w-full max-w-md rounded-xl border border-border bg-surface px-4 py-2.5 text-sm focus:border-accent"
        />
        <div className="mt-3 flex flex-wrap gap-1.5" role="tablist" aria-label="categories">
          <button
            type="button"
            onClick={() => setCat('all')}
            aria-pressed={cat === 'all'}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              cat === 'all' ? 'border-accent bg-accent/10 text-accent' : 'border-border bg-surface text-muted hover:border-accent/50'
            }`}
          >
            {lang === 'bn' ? 'সব' : 'All'} ({GLOSSARY.length})
          </button>
          {GLOSSARY_CATS.map((c) => {
            const n = GLOSSARY.filter((g) => TERM_CAT[g.term] === c.id).length;
            if (n === 0) return null;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCat(cat === c.id ? 'all' : c.id)}
                aria-pressed={cat === c.id}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  cat === c.id ? 'border-accent bg-accent/10 text-accent' : 'border-border bg-surface text-muted hover:border-accent/50'
                }`}
              >
                {c.icon} {lang === 'bn' ? c.bn : c.en} ({n})
              </button>
            );
          })}
        </div>
      </header>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((g) => (
          <article key={g.term} id={g.term} className="scroll-mt-20 rounded-xl border border-border bg-surface p-4">
            <div className="flex items-center gap-2">
              <h2 className="font-mono text-lg font-bold text-accent">{g.term}</h2>
              {catOf(g.term) && (
                <button
                  type="button"
                  onClick={() => setCat(TERM_CAT[g.term])}
                  className="ml-auto rounded-full bg-elev px-2 py-0.5 text-[10px] font-semibold text-muted transition hover:text-accent"
                >
                  {catOf(g.term)!.icon} {lang === 'bn' ? catOf(g.term)!.bn : catOf(g.term)!.en}
                </button>
              )}
            </div>
            <p className="text-sm text-muted">
              <span lang="en">{g.en}</span> · <span lang="bn">{g.bn}</span>
            </p>
            <div className="mt-3">
              <div className="text-xs font-bold uppercase tracking-wide text-muted">{ui('gloss.simple')}</div>
              <p className="mt-0.5 text-sm leading-6">{lang === 'bn' ? g.simpleBn : g.simpleEn}</p>
            </div>
            <details className="mt-2">
              <summary className="cursor-pointer text-xs font-bold uppercase tracking-wide text-muted hover:text-text">
                {ui('gloss.technical')} ▾
              </summary>
              <p className="mt-1 text-sm leading-6 text-text/85">{lang === 'bn' ? g.techBn : g.techEn}</p>
            </details>
            {g.example && (
              <pre className="codeblock mt-2 overflow-x-auto rounded-lg p-2 font-mono text-xs">{g.example}</pre>
            )}
            {g.related.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] uppercase tracking-wide text-muted">{ui('gloss.related')}:</span>
                {g.related.map((r) => (
                  <Link
                    key={r}
                    to={`/glossary#${encodeURIComponent(r)}`}
                    className="rounded-full bg-elev px-2 py-0.5 text-xs text-muted transition hover:bg-accent/15 hover:text-accent"
                  >
                    {r}
                  </Link>
                ))}
              </div>
            )}
            {g.link && (
              <Link
                to={g.link.to}
                className="mt-2 inline-flex items-center gap-1 rounded-lg border border-accent/40 px-2.5 py-1 text-xs font-semibold text-accent transition hover:bg-accent/10"
              >
                🧪 {T({ en: g.link.en, bn: g.link.bn })} →
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
