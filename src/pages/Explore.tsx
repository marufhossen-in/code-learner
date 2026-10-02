import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { CATEGORIES, TECHS, techsByCategory } from '../data/registry';

export default function Explore() {
  const { T, ui } = useI18n();
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return null;
    return TECHS.filter(
      (t) => t.name.toLowerCase().includes(s) || t.slug.includes(s) || t.en.toLowerCase().includes(s) || t.bn.includes(s),
    );
  }, [q]);

  const cards = (list: typeof TECHS) => (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {list.map((t) => (
        <Link
          key={t.slug}
          to={`/learn/${t.slug}`}
          className="group rounded-xl border border-border bg-surface p-4 transition hover:border-accent/60 hover:shadow-lg"
        >
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="text-2xl">{t.icon}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{t.name}</span>
                {t.status === 'available' ? (
                  <span className="rounded-full bg-ok/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ok">
                    {ui('status.available')}
                  </span>
                ) : (
                  <span className="rounded-full bg-elev px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted">
                    {ui('status.planned')}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-6 text-muted">{T({ en: t.en, bn: t.bn })}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                <span className="rounded bg-elev px-1.5 py-0.5">{ui(`diff.${t.diff}`)}</span>
                {t.prereq && t.prereq.length > 0 && (
                  <span className="truncate">
                    {ui('planned.prereq')}: {t.prereq.join(', ')}
                  </span>
                )}
              </div>
            </div>
            <span aria-hidden="true" className="text-accent opacity-0 transition group-hover:opacity-100">→</span>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-350">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{ui('nav.explore')}</h1>
        <p className="mt-1 text-muted">
          {T({ en: 'Every technology on the platform roadmap — searchable and categorized.', bn: 'প্ল্যাটফর্মের রোডম্যাপের সব টেকনোলজি — অনুসন্ধানযোগ্য ও সাজানো।' })}
        </p>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`⌕ ${ui('search.placeholder')}`}
          className="mt-4 w-full max-w-md rounded-xl border border-border bg-surface px-4 py-2.5 text-sm focus:border-accent"
        />
      </header>

      {filtered ? (
        filtered.length ? (
          cards(filtered)
        ) : (
          <p className="text-muted">{ui('search.empty')}</p>
        )
      ) : (
        <div className="space-y-10">
          {CATEGORIES.map((c) => {
            const list = techsByCategory(c.id);
            return (
              <section key={c.id} id={c.id} className="scroll-mt-20">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
                  <span aria-hidden="true">{c.icon}</span>
                  {T({ en: c.en, bn: c.bn })}
                  <span className="rounded-full bg-elev px-2 py-0.5 text-xs font-semibold text-muted">{list.length}</span>
                </h2>
                {cards(list)}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
