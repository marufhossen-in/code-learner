import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HUBS, getHub } from '../content';
import { ROADMAPS } from '../data/roadmaps';
import type { Roadmap, RoadmapStage } from '../data/roadmaps';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';

/** Roadmaps (Section 25): dependencies, honest durations, live progress. */

const LEVEL_BADGE: Record<RoadmapStage['level'], { cls: string; key: string }> = {
  beginner: { cls: 'text-ok border-ok/40', key: 'road.beginner' },
  intermediate: { cls: 'text-info border-info/40', key: 'road.intermediate' },
  advanced: { cls: 'text-warn border-warn/40', key: 'road.advanced' },
  pro: { cls: 'text-err border-err/40', key: 'road.pro' },
};

function roadmapProgress(r: Roadmap, lessons: string[]): { done: number; total: number } {
  let done = 0;
  let total = 0;
  const seen = new Set<string>();
  for (const s of r.stages) {
    for (const it of s.items) {
      if (!it.slug || seen.has(it.slug)) continue;
      seen.add(it.slug);
      const hub = getHub(it.slug);
      if (!hub) continue;
      total += hub.lessons.length;
      done += hub.lessons.filter((l) => lessons.includes(`${l.tech}/${l.slug}`)).length;
    }
  }
  return { done, total };
}

function HubChip({ slug, done }: { slug: string; done: number }) {
  const hub = HUBS.find((h) => h.slug === slug)!;
  return (
    <span className="rounded-full bg-ok/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-ok">
      ✓ {done}/{hub.lessons.length}
    </span>
  );
}

export default function RoadmapsPage() {
  const { T, ui } = useI18n();
  const { lessons } = useProgress();
  const hubSlugs = useMemo(() => new Set(HUBS.map((h) => h.slug)), []);

  return (
    <div className="mx-auto max-w-350 space-y-12">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">🗺️ {ui('nav.roadmaps')}</h1>
        <p className="mt-1 max-w-2xl text-muted">
          {T({
            en: 'Dependencies, honest durations, and your live progress: green chips count lessons you have finished inside each hub.',
            bn: 'নির্ভরতা, সৎ সময়-অনুমান, আর আপনার লাইভ অগ্রগতি: সবুজ চিপ গুনছে প্রতিটি হাবের ভেতর আপনার শেষ করা লেসন।',
          })}
        </p>
      </header>

      {ROADMAPS.map((r) => {
        const p = roadmapProgress(r, lessons);
        const pct = p.total === 0 ? 0 : Math.round((p.done / p.total) * 100);
        return (
          <section key={r.id} id={r.id} className="scroll-mt-20 rounded-2xl border border-border bg-surface p-5">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span aria-hidden="true" className="text-3xl">{r.icon}</span>
              <div>
                <h2 className="text-xl font-bold">{T(r.title)}</h2>
                <p className="text-sm text-muted">{T(r.summary)}</p>
              </div>
              <div className="ml-auto min-w-40">
                <div className="mb-1 flex justify-between text-[11px] text-muted">
                  <span>{T({ en: 'your progress (available hubs)', bn: 'আপনার অগ্রগতি (উপলব্ধ হাব)' })}</span>
                  <span className="font-mono font-bold text-accent">{pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-elev" role="progressbar" aria-valuenow={pct} aria-valuemax={100}>
                  <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>
            <ol className="relative space-y-7 border-l-2 border-border pl-6">
              {r.stages.map((s, i) => (
                <li key={i} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[31px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 bg-bg text-[10px] font-bold ${LEVEL_BADGE[s.level].cls}`}
                  >
                    {i + 1}
                  </span>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${LEVEL_BADGE[s.level].cls}`}>
                      {ui(LEVEL_BADGE[s.level].key)}
                    </span>
                    <strong>{T(s.title)}</strong>
                    <span className="rounded-full bg-elev px-2 py-0.5 font-mono text-[10px] text-muted">⏱ {T(s.weeks)}</span>
                  </div>
                  <p className="mb-2.5 text-sm text-muted">
                    🎯 {T({ en: 'After this stage:', bn: 'এই ধাপের পরে:' })} {T(s.goal)}
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {s.items.map((it, j) => {
                      const available = it.slug ? hubSlugs.has(it.slug) : false;
                      const hub = available ? getHub(it.slug!) : undefined;
                      const doneCount = hub ? hub.lessons.filter((l) => lessons.includes(`${l.tech}/${l.slug}`)).length : 0;
                      return (
                        <li key={j}>
                          {it.slug ? (
                            <Link
                              to={`/learn/${it.slug}`}
                              className={`flex items-center gap-2 rounded-lg border bg-bg px-3 py-2 text-sm transition hover:border-accent/60 ${available ? 'border-ok/30' : 'border-border'}`}
                            >
                              <span aria-hidden="true" className={available ? 'text-ok' : 'text-accent'}>▸</span>
                              <span className="flex-1">{T(it.label)}</span>
                              {available ? (
                                <HubChip slug={it.slug} done={doneCount} />
                              ) : (
                                <span className="rounded-full bg-elev px-1.5 py-0.5 text-[9px] font-bold uppercase text-muted">
                                  {ui('status.planned')}
                                </span>
                              )}
                            </Link>
                          ) : (
                            <span className="flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2 text-sm">
                              <span aria-hidden="true" className="text-accent">▸</span>
                              {T(it.label)}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
