import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { searchSteps, type SearchKind, type SStep } from './searchSim';

/** Search Lab: four lenses, one row of seats.
 *  linear walks every chair · binary retires halves by law · boundary collapses [lo,hi) onto
 *  the first seat ≥ x · interp guesses by proportion over the squares strip.
 *  Excluded seats dim to ghosts; the live window wears brackets; probes are accent-ringed. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: SearchKind; en: string; bn: string }[] = [
  { id: 'linear', en: '🚶 linear — door to door', bn: '🚶 লিনিয়ার — দুয়ারে দুয়ারে' },
  { id: 'binary', en: '✂️ binary — the halving vow', bn: '✂️ বাইনারি — অর্ধেক-করণ শপথ' },
  { id: 'boundary', en: '📍 lower_bound — the warrant', bn: '📍 lower_bound — পরোয়ানা' },
  { id: 'interp', en: '🧭 interp — the proportion compass', bn: '🧭 ইন্টারপোলেশন — অনুপাত-কম্পাস' },
];

export function SearchLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<SearchKind>('binary');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => searchSteps(scene), [scene]);
  const step: SStep = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 850);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const alive = (idx: number) => {
    if (scene === 'linear') return true; // no exclusions under the no-vow lens
    if (scene === 'boundary') return idx >= step.lo && idx < step.hi;
    return idx >= step.lo && idx <= step.hi;
  };
  const isProbe = (idx: number) => step.mid === idx;
  const isFound = (idx: number) => step.found === idx;
  const tag = (idx: number): string => {
    if (scene === 'linear') return isFound(idx) ? '★' : '';
    const parts: string[] = [];
    if (idx === step.lo) parts.push('lo');
    if (idx === step.hi) parts.push('hi');
    return parts.join('·');
  };

  const cellCls = (idx: number) => {
    if (isFound(idx)) return 'border-emerald-500/70 bg-emerald-500/15 text-emerald-400';
    if (isProbe(idx)) {
      if (step.out === 'low') return 'border-amber-500/70 bg-amber-500/10 text-amber-400';
      if (step.out === 'boundary') return 'border-cyan-500/70 bg-cyan-500/10 text-cyan-400';
      if (step.out === 'high') return 'border-violet-500/70 bg-violet-500/10 text-violet-400';
      return 'border-accent bg-accent/10 text-accent';
    }
    if (!alive(idx)) return 'border-dashed border-border text-muted opacity-40';
    return 'border-border text-text';
  };

  const outLabel = step.out === 'low'
    ? { en: `< ${step.target} — retire left`, bn: `< ${step.target} — বাম অবসরে` }
    : step.out === 'high'
      ? { en: `> ${step.target} — retire right`, bn: `> ${step.target} — ডান অবসরে` }
      : step.out === 'boundary'
        ? { en: `≥ ${step.target} — candidate, look left`, bn: `≥ ${step.target} — প্রার্থী, বামে দেখুন` }
        : step.out === 'hit'
          ? { en: '═ HIT', bn: '═ পাওয়া' }
          : undefined;

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

      <div className="overflow-x-auto px-4 py-4">
        <div className="mx-auto w-fit">
          <div className="mb-1 text-center font-mono text-[10px] text-muted">
            {T({
              en: scene === 'interp' ? `the squares strip · target ${step.target}` : `the sorted strip · target ${step.target}${scene === 'boundary' ? ' (first seat ≥)' : ''}`,
              bn: scene === 'interp' ? `বর্গ-সারি · লক্ষ্য ${step.target}` : `সাজানো সারি · লক্ষ্য ${step.target}${scene === 'boundary' ? ' (প্রথম চেয়ার ≥)' : ''}`,
            })}
          </div>
          <div className="flex gap-1.5">
            {step.arr.map((v, idx) => (
              <div key={idx} className="flex w-[46px] flex-col items-center gap-1">
                <span className={`font-mono text-[9px] ${isProbe(idx) ? 'text-accent font-bold' : 'text-muted'}`}>
                  {isProbe(idx) ? '▼' : ''} {idx}
                </span>
                <div className={`flex h-11 w-full items-center justify-center rounded-md border font-mono text-sm font-bold transition-all duration-300 ${cellCls(idx)}`}>
                  {v}
                </div>
                <span className="font-mono text-[9px] text-muted">{tag(idx)}</span>
              </div>
            ))}
          </div>
        </div>

        {step.msg && (
          <div className="mx-auto mt-3 w-fit max-w-full rounded-md border border-accent/40 bg-accent/10 px-3 py-1 text-center font-mono text-[12px] text-accent">
            {step.msg}
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {outLabel && (
            <span className={`rounded-full border px-2 py-0.5 font-mono text-[11px] ${
              step.out === 'hit' ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400'
                : step.out === 'boundary' ? 'border-cyan-500/60 bg-cyan-500/10 text-cyan-400'
                  : step.out === 'low' ? 'border-amber-500/60 bg-amber-500/10 text-amber-400'
                    : 'border-violet-500/60 bg-violet-500/10 text-violet-400'
            }`}>{T(outLabel)}</span>
          )}
          {scene !== 'linear' && (
            <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
              {T({ en: `window ${scene === 'boundary' ? `[${step.lo}, ${step.hi})` : `[${step.lo}…${step.hi}]`} · ${scene === 'boundary' ? Math.max(0, step.hi - step.lo) : Math.max(0, step.hi - step.lo + 1)} seats live`, bn: `জানালা ${scene === 'boundary' ? `[${step.lo}, ${step.hi})` : `[${step.lo}…${step.hi}]`} · ${scene === 'boundary' ? Math.max(0, step.hi - step.lo) : Math.max(0, step.hi - step.lo + 1)} চেয়ার জীবিত` })}
            </span>
          )}
          <span className="ml-auto font-mono text-[11px] text-muted">
            {T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length} · ${step.comparisons} comparisons`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length} · ${step.comparisons} তুলনা` })}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'a search machine is only ever as strong as the vow the row signed: no vow → walk every chair; sorted vow → retire halves by law; distribution vow → guess by proportion — and pray the clusters agree.',
            bn: 'সার্চ-যন্ত্র ততটুকুই শক্তিশালী, সারি যতটুকু শপথ সই করেছে: শপথ নেই → প্রতি চেয়ারে হাঁটুন; সাজানো-শপথ → আইনে অর্ধেক অবসর দিন; বণ্টন-শপথ → অনুপাতে অনুমান করুন — আর প্রার্থনা করুন গুচ্ছগুলো রাজি থাকে।',
          })}
        </p>
      </div>
    </div>
  );
}
