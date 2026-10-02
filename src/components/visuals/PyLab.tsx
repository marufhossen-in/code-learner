import { useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { PY_SCENARIOS } from './pySim';

/** Python Lab: watch names (stickers) bind to objects (memory) step by step. */

const chip =
  'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const typeColor: Record<string, string> = {
  int: 'text-accent',
  str: 'text-ok',
  list: 'text-warn',
  tuple: 'text-warn',
  func: 'text-err',
};

export function PyLab() {
  const { T } = useI18n();
  const [sid, setSid] = useState(PY_SCENARIOS[0].id);
  const scenario = PY_SCENARIOS.find((s) => s.id === sid) ?? PY_SCENARIOS[0];
  const views = scenario.steps;
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
        {PY_SCENARIOS.map((s) => (
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

        {/* names + heap panel */}
        <div className="p-3">
          <h4 className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wide text-muted">
            {T({ en: 'Names (stickers)', bn: 'নাম (স্টিকার)' })}
          </h4>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {view.names.map((n) => (
              <div key={`${n.name}-${n.objId}-${i}`} className="fade-up flex items-center gap-1.5 rounded-lg border border-border bg-elev/40 px-2.5 py-1.5 font-mono text-xs">
                <span className="font-bold text-accent">{n.name}</span>
                <span className="text-muted">→</span>
                <span className="rounded bg-ok/15 px-1.5 py-0.5 text-ok">#{n.objId}</span>
              </div>
            ))}
          </div>

          <h4 className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wide text-muted">
            {T({ en: 'Memory (objects)', bn: 'মেমরি (অবজেক্ট)' })}
          </h4>
          <div className="mb-3 grid gap-1.5 sm:grid-cols-2">
            {view.objects.map((o) => (
              <div
                key={`${o.id}-${o.repr}-${i}`}
                className={`fade-up rounded-lg border px-2.5 py-1.5 font-mono text-xs ${o.id === view.highlight ? 'border-warn/60 bg-warn/10' : 'border-border bg-bg/60'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted">#{o.id}</span>
                  <span className={`text-[10px] font-bold uppercase ${typeColor[o.type] ?? 'text-muted'}`}>{o.type}</span>
                </div>
                <div className="mt-0.5 font-bold">{o.repr}</div>
                {o.note && <div className="mt-0.5 font-sans text-[10px] text-muted">{T(o.note)}</div>}
              </div>
            ))}
          </div>

          {view.note && (
            <p key={`note-${i}`} className="fade-up rounded-lg border border-border bg-bg/60 px-2.5 py-2 text-sm">{T(view.note)}</p>
          )}
        </div>
      </div>

      <p className="border-t border-border px-3 py-2 text-sm text-muted">
        {T({
          en: 'The mental model: values live in memory; names are stickers. = pastes a sticker, never photocopies the box. Mutability decides whether the box itself can change.',
          bn: 'মানসিক মডেল: মান থাকে মেমরিতে; নাম হলো স্টিকার। = স্টিকার লাগায়, বাক্স ফটোকপি করে না। বাক্স নিজে বদলাতে পারে কি না, সিদ্ধান্ত নেয় পরিবর্তনীয়তা।',
        })}
      </p>
    </div>
  );
}
