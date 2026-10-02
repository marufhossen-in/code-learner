import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { techBySlug } from '../data/registry';
import { getHub } from '../content';
import { ExerciseCard } from '../components/ExerciseCard';
import { QuizPanel } from '../components/QuizPanel';
import { CodeBlock } from '../components/CodeBlock';
import type { LText } from '../lib/types';

const TABS = [
  'overview', 'roadmap', 'tutorials', 'exercises', 'quiz', 'projects',
  'reference', 'debugging', 'best', 'interview', 'real',
] as const;
type Tab = (typeof TABS)[number];

export default function TechHub() {
  const { slug = '' } = useParams();
  const { T, ui } = useI18n();
  const prog = useProgress();
  const [tab, setTab] = useState<Tab>('overview');
  const tech = techBySlug(slug);
  const hub = getHub(slug);

  const agg = useMemo(() => {
    if (!hub) return null;
    return {
      exercises: hub.lessons.flatMap((l) => l.exercises),
      quizzes: hub.lessons.map((l) => l.quiz),
      mistakes: hub.lessons.flatMap((l) =>
        l.blocks
          .filter((b) => b.type === 'callout' && (b.kind === 'mistake' || b.kind === 'warn'))
          .map((b) => ({ lesson: l.title, block: b })),
      ),
    };
  }, [hub]);

  if (!tech && !hub) {
    return (
      <div className="mx-auto max-w-2xl py-16 text-center">
        <div className="mb-3 text-4xl" aria-hidden="true">🔍</div>
        <h1 className="text-xl font-bold">{ui('notfound.title')}</h1>
        <p className="mt-2 text-muted">{ui('notfound.body')}</p>
        <Link to="/explore" className="mt-4 inline-block rounded-xl bg-accent px-5 py-2 font-bold text-onaccent">
          {ui('cta.explore')}
        </Link>
      </div>
    );
  }

  if (!hub) {
    // Known technology, hub not published yet — honest planned state.
    const t = tech!;
    return (
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 flex items-center gap-4">
          <span aria-hidden="true" className="text-5xl">{t.icon}</span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{t.name}</h1>
            <p className="text-muted">{T({ en: t.en, bn: t.bn })}</p>
          </div>
        </header>
        <div className="rounded-2xl border border-dashed border-warn/60 bg-warn/5 p-6">
          <h2 className="font-bold text-warn">🚧 {ui('planned.title')}</h2>
          <p className="mt-1 text-sm leading-6 text-muted">{ui('planned.body')}</p>
          {t.prereq && (
            <p className="mt-2 text-sm">
              <strong>{ui('planned.prereq')}:</strong>{' '}
              {t.prereq.map((p, i) => (
                <span key={p}>
                  {i > 0 && ', '}
                  <Link to={`/learn/${p}`} className="text-accent hover:underline">{p}</Link>
                </span>
              ))}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {TABS.map((tb) => (
              <span key={tb} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                {ui(`hub.${tb}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const allExIds = agg!.exercises.map((e) => e.id || '');

  return (
    <div className="mx-auto max-w-350">
      <header className="mb-4 flex flex-wrap items-center gap-4">
        <span aria-hidden="true" className="text-5xl">{hub.icon}</span>
        <div className="min-w-0">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{hub.name}</h1>
          <p className="text-muted">{T(hub.tagline)}</p>
        </div>
        <div className="ml-auto flex gap-2 text-xs">
          <span className="rounded-full bg-ok/15 px-2.5 py-1 font-bold text-ok">{ui('status.available')}</span>
          {tech && (
            <span className="rounded-full bg-elev px-2.5 py-1 font-bold text-muted">{ui(`diff.${tech.diff}`)}</span>
          )}
        </div>
      </header>

      <div className="scrolly sticky top-14 z-10 -mx-1 mb-5 flex gap-1 overflow-x-auto border-b border-border bg-bg/90 px-1 py-2 backdrop-blur" role="tablist" aria-label={`${hub.name} hub`}>
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm transition ${
              tab === t ? 'bg-accent font-semibold text-onaccent' : 'text-muted hover:bg-elev hover:text-text'
            }`}
          >
            {ui(`hub.${t}`)}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="space-y-5">
          <p className="max-w-3xl leading-8">{T((hub.about ?? hub.intro)!)}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">{hub.lessons.length}</div>
              <div className="text-xs text-muted">{ui('hub.tutorials')}</div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">{agg!.exercises.length}</div>
              <div className="text-xs text-muted">{ui('hub.exercises')}</div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4 text-center">
              <div className="text-2xl font-extrabold text-accent">{hub.projects.length}</div>
              <div className="text-xs text-muted">{ui('hub.projects')}</div>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {hub.lessons.map((l) => (
              <Link key={l.slug} to={`/learn/${hub.slug}/lessons/${l.slug}`} className="rounded-xl border border-border bg-surface p-4 transition hover:border-accent/60">
                <div className="font-semibold">{T(l.title)}</div>
                <p className="mt-1 text-sm text-muted">{T(l.summary)}</p>
                <div className="mt-2 text-xs text-muted">{l.minutes} {ui('lesson.minutes')} · {l.exercises.length} {ui('hub.exercises')}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {tab === 'roadmap' && (
        <ol className="relative space-y-6 border-l-2 border-border pl-6">
          {hub.roadmap.map((r, i) => (
            <li key={i} className="relative">
              <span aria-hidden="true" className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-accent" />
              <h3 className="font-bold">
                {r.stage != null && <span className="mr-2 text-accent">{r.stage}.</span>}
                {T(r.title)}
              </h3>
              <ul className="mt-2 space-y-1.5">
                {(r.items ?? (r.detail ? [r.detail] : [])).map((it, j) => {
                  const itText = typeof it === 'string' ? it : (('text' in it && it.text) ? T(it.text) : T(it as LText));
                  return (
                    <li key={j} className="flex items-center gap-2 text-sm text-text/85">
                      <span aria-hidden="true" className="text-accent">▸</span> {itText}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      )}

      {tab === 'tutorials' && (
        <div className="grid gap-3">
          {hub.lessons.map((l, i) => (
            <Link key={l.slug} to={`/learn/${hub.slug}/lessons/${l.slug}`} className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition hover:border-accent/60">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-elev font-mono font-bold text-muted">{i + 1}</span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 font-semibold">
                  {T(l.title)}
                  {prog.isLessonDone(`${l.tech}/${l.slug}`) && <span className="text-xs text-ok">✓</span>}
                </span>
                <span className="mt-0.5 block truncate text-sm text-muted">{T(l.summary)}</span>
              </span>
              <span className="shrink-0 text-xs text-muted">{l.minutes} {ui('lesson.minutes')}</span>
            </Link>
          ))}
        </div>
      )}

      {tab === 'exercises' && (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-muted">
            {prog.doneCount(allExIds)}/{allExIds.length} {ui('ex.progress')}
          </p>
          {agg!.exercises.map((e, i) => (
            <ExerciseCard key={e.id} ex={e} index={i} total={allExIds.length} />
          ))}
        </div>
      )}

      {tab === 'quiz' && (
        <div className="space-y-6">
          {agg!.quizzes.map((q) => (
            <QuizPanel key={q.id} quiz={q} />
          ))}
        </div>
      )}

      {tab === 'projects' && (
        <div className="grid gap-3 md:grid-cols-3">
          {hub.projects.map((p) => (
            <div key={p.title.en} className="rounded-xl border border-border bg-surface p-4">
              <span className="rounded-lg bg-elev px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-muted">
                {ui(`diff.${p.diff ?? p.difficulty}`)}
              </span>
              <h3 className="mt-2 font-bold">{T(p.title)}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{T((p.desc ?? p.brief)!)}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'reference' && (
        <div className="space-y-6">
          {(hub.reference ?? hub.references ?? []).map((g, gi) => {
            const gTitle = typeof g.group === 'string' ? g.group : T(g.group);
            const tag = typeof g.group === 'string' ? g.group : g.group.en;
            return (
              <section key={typeof g.group === 'string' ? g.group : `${g.group.en}-${gi}`}>
                <h3 className="mb-2 font-mono text-lg font-bold text-accent">{gTitle}</h3>
                {g.methods && (
                  <div className="grid gap-3 md:grid-cols-2">
                    {g.methods.map((m) => (
                      <article key={m.name} className="rounded-xl border border-border bg-surface p-4">
                        <div className="font-mono font-bold">
                          {tag}.<span className="text-accent">{m.name}</span>
                        </div>
                        <code className="mt-1 block rounded bg-elev px-2 py-1 font-mono text-xs">{m.signature}</code>
                        <dl className="mt-2 space-y-1 text-sm">
                          <div><dt className="inline font-semibold text-muted">Params: </dt><dd className="inline">{typeof m.params === 'string' ? m.params : (m.params ? T(m.params) : '')}</dd></div>
                          <div><dt className="inline font-semibold text-muted">Returns: </dt><dd className="inline">{typeof m.returns === 'string' ? m.returns : (m.returns ? T(m.returns) : '')}</dd></div>
                        </dl>
                        <div className="mt-2"><CodeBlock code={m.example ?? ''} lang="js" showLabel={false} /></div>
                        {m.mistake && <p className="mt-2 rounded-lg bg-err/10 px-2 py-1.5 text-xs text-err">⚠ {T(m.mistake)}</p>}
                        {m.related && (
                          <div className="mt-2 flex gap-1.5">
                            {m.related.map((r) => (
                              <span key={r} className="rounded-full bg-elev px-2 py-0.5 font-mono text-xs text-muted">.{r}()</span>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
                {g.items && (
                  <dl className="grid gap-3 md:grid-cols-2">
                    {g.items.map((kt) => (
                      <div key={kt.term} className="rounded-xl border border-border bg-surface p-4">
                        <dt className="font-mono font-bold text-accent">{kt.term ?? kt.name}</dt>
                        <dd className="mt-1 text-sm leading-6 text-text/85">{kt.def ? T(kt.def) : (kt.desc ? T(kt.desc) : '')}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </section>
            );
          })}
        </div>
      )}

      {tab === 'debugging' && (
        <div className="space-y-3">
          {agg!.mistakes.map(({ lesson, block }, i) =>
            block.type === 'callout' ? (
              <div key={i} className="rounded-xl border border-err/40 bg-err/5 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-muted">
                  🐛 {T(lesson)}
                </div>
                <div className="mt-1 font-semibold">{block.title ? T(block.title) : ''}</div>
                <p className="mt-1 text-sm leading-7 text-text/85">{T(block.text)}</p>
              </div>
            ) : null,
          )}
        </div>
      )}

      {tab === 'best' && (
        <ul className="grid gap-2 md:grid-cols-2">
          {hub.bestPractices.map((b, i) => (
            <li key={i} className="flex items-start gap-2 rounded-xl border border-border bg-surface p-3 text-sm leading-6">
              <span aria-hidden="true" className="text-ok">✓</span> {typeof b === 'string' ? b : T(b)}
            </li>
          ))}
        </ul>
      )}

      {tab === 'interview' && (
        <div className="space-y-3">
          {hub.interview.map((qa, i) => (
            <details key={i} className="group rounded-xl border border-border bg-surface">
              <summary className="cursor-pointer list-none p-4 font-semibold [&::-webkit-details-marker]:hidden">
                <span aria-hidden="true" className="mr-2 text-accent">Q{i + 1}.</span>
                {T(qa.q)}
                <span aria-hidden="true" className="float-right text-muted transition group-open:rotate-180">▾</span>
              </summary>
              <p className="border-t border-border p-4 text-sm leading-7 text-text/85">{T(qa.a)}</p>
            </details>
          ))}
        </div>
      )}

      {tab === 'real' && (
        <ul className="space-y-2">
          {hub.realWorld.map((r, i) => (
            <li key={i} className="flex items-start gap-2 rounded-xl border border-border bg-surface p-3 text-sm leading-6">
              <span aria-hidden="true">🌍</span> {typeof r === 'string' ? r : T(r)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
