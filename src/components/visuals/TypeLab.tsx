import { useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { simulate, TS_SCENARIOS } from './tsSim';

/** Type Lab: step through code while TypeScript's belief evolves beside you. */

const chip =
  'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

export function TypeLab() {
  const { T } = useI18n();
  const [sid, setSid] = useState(TS_SCENARIOS[0].id);
  const scenario = TS_SCENARIOS.find((s) => s.id === sid) ?? TS_SCENARIOS[0];
  const views = useMemo(() => simulate(scenario), [scenario]);
  const [i, setI] = useState(0);
  const view = views[Math.min(i, views.length - 1)];

  function pick(id: string) {
    setSid(id);
    setI(0);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* scenario picker */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {TS_SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => pick(s.id)}
            className={`${chip} ${s.id === sid ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-muted hover:text-text'}`}
          >
            {T(s.title)}
          </button>
        ))}
        <span className="ml-auto font-mono text-[10px] text-muted">
          {T({ en: `step ${i + 1}/${views.length}`, bn: `ধাপ ${i + 1}/${views.length}` })}
        </span>
      </div>

      <p className="border-b border-border bg-accent/5 px-3 py-2 text-sm">{T(scenario.intro)}</p>

      <div className="grid gap-0 md:grid-cols-2">
        {/* code with current line */}
        <div className="border-b border-border p-3 font-mono text-xs leading-6 md:border-b-0 md:border-r">
          {scenario.code.map((line, li) => {
            const lineNo = li + 1;
            const active = lineNo === view.line;
            return (
              <div key={li} className={`flex gap-3 rounded px-2 ${active ? 'bg-accent/15 text-accent' : 'text-muted'}`}>
                <span className="w-5 select-none text-right opacity-50">{lineNo}</span>
                <span className="whitespace-pre-wrap">{line}</span>
              </div>
            );
          })}
          {/* step controls */}
          <div className="mt-3 flex items-center gap-2">
            <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}
              className="rounded-lg border border-border px-3 py-1 text-xs transition hover:bg-elev disabled:opacity-40">← prev</button>
            <button type="button" onClick={() => setI((v) => Math.min(views.length - 1, v + 1))} disabled={i >= views.length - 1}
              className="rounded-lg border border-border px-3 py-1 text-xs transition hover:bg-elev disabled:opacity-40">next →</button>
            <button type="button" onClick={() => setI(0)}
              className="ml-auto rounded-lg border border-border px-2 py-1 font-mono text-xs text-muted transition hover:bg-elev">↺</button>
          </div>
        </div>

        {/* belief panel */}
        <div className="p-3">
          <h4 className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wide text-muted">
            {T({ en: 'What TypeScript believes', bn: 'TypeScript কী বিশ্বাস করছে' })}
          </h4>
          <div className="mb-3 space-y-1.5">
            {Object.entries(view.beliefs).map(([v, t]) => (
              <div key={`${v}-${t}-${i}`} className="fade-up flex items-center gap-2 rounded-lg border border-border bg-elev/40 px-2.5 py-1.5 font-mono text-xs">
                <span className="font-bold text-accent">{v}</span>
                <span className="text-muted">:</span>
                <span className={`rounded px-1.5 py-0.5 ${view.isError ? 'bg-err/15 text-err' : 'bg-ok/15 text-ok'}`}>{t}</span>
              </div>
            ))}
          </div>

          {view.branch && (
            <div className="fade-up mb-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-ok/40 bg-ok/5 p-2">
                <div className="mb-1 text-[10px] font-bold text-ok">{T({ en: 'inside if (…) ✓', bn: 'if (…)-এর ভেতরে ✓' })}</div>
                <div className="font-mono text-xs">{view.branch.var}: <span className="text-ok">{view.branch.trueBranch.type}</span></div>
              </div>
              <div className="rounded-lg border border-err/40 bg-err/5 p-2">
                <div className="mb-1 text-[10px] font-bold text-err">{T({ en: 'in else ✗', bn: 'else-এ ✗' })}</div>
                <div className="font-mono text-xs">{view.branch.var}: <span className="text-err">{view.branch.falseBranch.type}</span></div>
              </div>
            </div>
          )}

          {view.isError && (
            <div className="fade-up mb-3 rounded-lg border border-err/50 bg-err/10 px-2.5 py-1.5 font-mono text-[11px] text-err">
              {T({ en: '▲ TS error squiggles here — the compiler underlines exactly this line', bn: '▲ এখানেই TS এরর — কম্পাইলার হুবহু এই লাইনে দাগ দেয়' })}
            </div>
          )}

          {view.note && (
            <p key={`note-${i}`} className="fade-up rounded-lg border border-border bg-bg/60 px-2.5 py-2 text-sm">{T(view.note)}</p>
          )}
        </div>
      </div>

      <p className="border-t border-border px-3 py-2 text-sm text-muted">
        {T({
          en: 'The mental model: TS keeps a SET of possible types per variable per line — control flow edits the set; your guards are set operations.',
          bn: 'মানসিক মডেল: TS প্রতি ভেরিয়েবলে প্রতি লাইনে রাখে সম্ভাব্য টাইপের একটি সেট — কন্ট্রোল-ফ্লো সেট বদলায়; আপনার গার্ড হলো সেট-অপারেশন।',
        })}
      </p>
    </div>
  );
}
