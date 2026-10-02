import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { stackSteps, type StkKind } from './stkSim';

/** Stack Lab: plates on a spring tray — push/pop scenes, bracket validation,
 *  RPN arithmetic, call frames, and the overflow free-fall. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: StkKind; en: string; bn: string }[] = [
  { id: 'plates', en: '🥞 plates & underflow', bn: '🥞 থালা ও আন্ডারফ্লো' },
  { id: 'brackets-ok', en: '✅ brackets: valid', bn: '✅ বন্ধনী: বৈধ' },
  { id: 'brackets-bad', en: '❌ brackets: broken', bn: '❌ বন্ধনী: ভাঙা' },
  { id: 'rpn', en: '🧮 RPN arithmetic', bn: '🧮 RPN গাণিতিক' },
  { id: 'callstack', en: '📞 call frames', bn: '📞 কল-ফ্রেম' },
  { id: 'overflow', en: '🌋 stack overflow', bn: '🌋 স্ট্যাক অভারফ্লো' },
];

export function StkLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<StkKind>('plates');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => stackSteps(scene), [scene]);
  const step = steps[Math.min(i, steps.length - 1)];
  const topIdx = step.stack.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 750);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {SCENES.map((s) => (
          <button key={s.id} type="button" onClick={() => { setScene(s.id); reset(); }}
            className={`${chip} ${scene === s.id ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-muted hover:text-text'}`}>
            {T({ en: s.en, bn: s.bn })}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <button type="button" aria-label="previous step" onClick={() => { setPlaying(false); setI((v) => Math.max(0, v - 1)); }}
            className="rounded-md border border-border px-2 py-1 text-xs text-muted hover:text-text">◀</button>
          <button type="button" onClick={() => (i >= steps.length - 1 ? (setI(0), setPlaying(true)) : setPlaying((p) => !p))}
            className={`${chip} ${playing ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-muted hover:text-text'}`}>
            {playing ? '⏸' : '▶ PLAY'}
          </button>
          <button type="button" aria-label="next step" onClick={() => { setPlaying(false); setI((v) => Math.min(steps.length - 1, v + 1)); }}
            className="rounded-md border border-border px-2 py-1 text-xs text-muted hover:text-text">▶</button>
        </div>
      </div>

      {step.tokens && (
        <div className="flex flex-wrap items-center gap-1.5 border-b border-border px-4 py-2.5">
          {step.tokens.map((t, idx) => (
            <span key={idx} className={`rounded-md border px-2 py-1 font-mono text-xs transition ${idx === step.cursor ? 'border-accent bg-accent/10 text-accent' : idx < (step.cursor ?? 0) ? 'border-border text-muted opacity-60' : 'border-border text-text'}`}>
              {t}
            </span>
          ))}
          <span className="ml-2 font-mono text-[11px] text-muted">{T({ en: '← the tape (cursor glows)', bn: '← ফিতা (কার্সর জ্বলছে)' })}</span>
        </div>
      )}

      <div className={`grid gap-4 px-4 py-4 ${step.tokens ? 'grid-cols-[1fr]' : 'md:grid-cols-[minmax(0,220px)_1fr]'}`}>
        <div className="relative mx-auto flex w-full max-w-[240px] flex-col-reverse items-stretch gap-1.5 border-x-2 border-b-2 border-border px-3 pb-2 pt-1"
          style={{ minHeight: '200px', borderRadius: '0 0 14px 14px' }}>
          <div className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2" aria-hidden="true">
            <span className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted">⬇ top ⬇</span>
          </div>
          {step.stack.length === 0 && (
            <div className="self-center pt-8 text-center font-mono text-[11px] text-muted">
              {T({ en: '(empty tray)', bn: '(খালি বন্দনী)' })}
            </div>
          )}
          {step.stack.map((v, idx) => {
            const isTop = idx === topIdx;
            const isNew = step.pushed === v && isTop;
            return (
              <div key={`${idx}-${v}`}
                className={`flex items-center justify-between rounded-md border px-2.5 py-1.5 font-mono text-xs transition-all duration-300 ${isNew ? 'border-accent bg-accent/10 text-accent' : isTop ? 'border-accent/40 text-text' : 'border-border text-text'} ${step.popped?.includes(v) ? 'opacity-40 line-through' : ''}`}>
                <span className="truncate">{v}</span>
                {isNew && <span className="ml-2 shrink-0 text-[10px] text-accent">push ⤵</span>}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-center gap-2">
          {step.popped && step.popped.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {step.popped.map((p, k) => (
                <span key={k} className="rounded-full border border-amber-500/60 bg-amber-500/10 px-2 py-0.5 font-mono text-[11px] text-amber-400">
                  pop ⤴ {p}
                </span>
              ))}
            </div>
          )}
          {step.ret && (
            <span className="w-fit rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">
              return ⟶ {step.ret}
            </span>
          )}
          {step.error && (
            <div className={`rounded-lg border px-3 py-2 font-mono text-xs font-bold ${step.error === 'underflow' ? 'border-amber-500/60 bg-amber-500/10 text-amber-400' : 'border-red-500/60 bg-red-500/10 text-red-400'}`}>
              {step.error === 'underflow' && '⚠ STACK UNDERFLOW — pop() on empty'}
              {step.error === 'mismatch' && '✗ MISMATCH — wrong debt cashed'}
              {step.error === 'overflow' && '🌋 STACK OVERFLOW — RangeError: Maximum call stack size exceeded'}
            </div>
          )}
          <div className="font-mono text-[11px] text-muted">
            {T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length} · depth ${step.stack.length}`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length} · গভীরতা ${step.stack.length}` })}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-3">
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'A stack is a discipline, not a container: any structure that touches only one end qualifies. LIFO — last in, first out — is reversal with manners.',
            bn: 'স্ট্যাক কোনো ধারক নয়, এক শৃঙ্খলা: যে-কাঠামো একমুখেই স্পর্শ করে সে-ই যোগ্য। LIFO — শেষে ঢোকা, আগে বেরোনো — মানে শিষ্টাচার-সম্পন্ন উল্টে-দেওয়া।',
          })}
        </p>
      </div>
    </div>
  );
}
