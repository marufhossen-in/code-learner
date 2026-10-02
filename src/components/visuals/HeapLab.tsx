import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { heapSteps, type HeapKind } from './heapSim';

/** Heap Lab: the complete tree living in an array. Dual view — the array strip
 *  (the machine) above, the tree ghost (the vow) below — index arithmetic binds
 *  them: parent (i−1)>>1 · children 2i+1 / 2i+2. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: HeapKind; en: string; bn: string }[] = [
  { id: 'build', en: '⤴ sift-up (build)', bn: '⤴ ঊর্ধ্ব-ছাঁকাই (নির্মাণ)' },
  { id: 'serve', en: '👑 the throne serves', bn: '👑 সিংহাসন পরিবেশন করে' },
  { id: 'heapify', en: '⤵ heapify (the ambush)', bn: '⤵ হিপিফাই (অ্যামবুশ)' },
  { id: 'topk', en: '🏆 top-3 gatekeeper', bn: '🏆 top-3 গেটকিপার' },
];

const X_UNIT = 58;
const Y_UNIT = 64;
const PAD = 26;
const R = 16;

/** inorder-rank layout over the heap region of the array */
function positions(n: number): { x: number; y: number }[] {
  const pos: { x: number; y: number }[] = new Array(n).fill({ x: 0, y: 0 });
  let rank = 0;
  const walk = (i: number, d: number): void => {
    if (i >= n) return;
    walk(2 * i + 1, d + 1);
    pos[i] = { x: rank++, y: d };
    walk(2 * i + 2, d + 1);
  };
  if (n > 0) walk(0, 0);
  return pos;
}

export function HeapLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<HeapKind>('build');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => heapSteps(scene), [scene]);
  const step = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 820);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const inSwap = (idx: number) => step.swapped !== undefined && (step.swapped[0] === idx || step.swapped[1] === idx);
  const cellCls = (idx: number) => {
    if (step.hot === idx || step.hot2 === idx) return 'border-accent bg-accent/10 text-accent';
    if (inSwap(idx)) return 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400';
    if (idx >= step.n) return 'border-dashed border-border text-muted opacity-50';
    return 'border-border text-text';
  };

  const pos = positions(step.n);
  const maxX = Math.max(0, ...pos.map((p) => p.x));
  const maxY = Math.max(0, ...pos.map((p) => p.y));
  const W = (maxX + 1) * X_UNIT + PAD * 2;
  const H = (maxY + 1) * Y_UNIT + PAD * 2;
  const px = (idx: number) => ({ cx: pos[idx].x * X_UNIT + PAD + X_UNIT / 2, cy: pos[idx].y * Y_UNIT + PAD });

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
        {/* the array strip — the machine */}
        <div className="mx-auto w-fit">
          <div className="mb-1 text-center font-mono text-[10px] text-muted">
            {T({ en: `the array truth${step.n < step.arr.length ? ' (dimmed = already served)' : ''} · ${step.mode}-mode`, bn: `অ্যারে-সত্য${step.n < step.arr.length ? ' (ম্লান = পরিবেশিতা)' : ''} · ${step.mode}-রীতি` })}
          </div>
          <div className="flex gap-1.5">
            {step.arr.map((v, idx) => (
              <div key={idx} className="flex w-[52px] flex-col items-center gap-1">
                <span className="font-mono text-[9px] text-muted">{idx === 0 ? '👑 0' : idx}</span>
                <div className={`flex h-11 w-full items-center justify-center rounded-md border font-mono text-sm font-bold transition-all duration-300 ${cellCls(idx)}`}>
                  {idx < step.n ? v : <span className="text-[11px]">{v}</span>}
                </div>
                {idx < step.n && idx > 0 && <span className="font-mono text-[8px] text-muted">⌈{idx}⌉→{(idx - 1) >> 1}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* the tree ghost — the vow */}
        {step.n > 0 && (
          <svg width={W} height={H} className="mx-auto mt-5 block" role="img" aria-label="complete tree ghost of the heap">
            {Array.from({ length: step.n }, (_, idx) => idx).map((c) => {
              if (c === 0) return null;
              const p = (c - 1) >> 1;
              if (p >= step.n) return null;
              const hotEdge = step.hot === c || step.hot2 === c || inSwap(c);
              return (
                <line key={c} x1={px(p).cx} y1={px(p).cy} x2={px(c).cx} y2={px(c).cy}
                  stroke={hotEdge ? 'var(--color-accent)' : 'var(--color-border)'}
                  strokeWidth={hotEdge ? 2 : 1.2} strokeDasharray={hotEdge ? '0' : '3 3'} />
              );
            })}
            {Array.from({ length: step.n }, (_, idx) => idx).map((idx) => {
              const isHot = step.hot === idx || step.hot2 === idx;
              const isSwap = inSwap(idx);
              return (
                <g key={idx}>
                  {isHot && <circle cx={px(idx).cx} cy={px(idx).cy} r={R + 5} fill="none" stroke="var(--color-accent)" strokeWidth="1.4" strokeDasharray="3 3" />}
                  <circle cx={px(idx).cx} cy={px(idx).cy} r={R}
                    fill={isHot ? 'var(--color-accent)' : isSwap ? 'var(--color-emerald-500, #10b981)' : 'var(--color-surface2)'}
                    stroke={isHot || isSwap ? 'none' : 'var(--color-border)'} strokeWidth="1.3" />
                  <text x={px(idx).cx} y={px(idx).cy + 4.4} textAnchor="middle" fontSize="12" fontFamily="monospace" fontWeight="700"
                    fill={isHot ? 'var(--color-bg)' : isSwap ? '#052e16' : 'var(--color-text)'}>{step.arr[idx]}</text>
                  {idx === 0 && <text x={px(idx).cx} y={px(idx).cy - R - 6} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="var(--color-muted)">throne</text>}
                </g>
              );
            })}
          </svg>
        )}

        {step.msg && (
          <div className="mx-auto mt-3 w-fit max-w-full rounded-md border border-accent/40 bg-accent/10 px-3 py-1 text-center font-mono text-[12px] text-accent">
            {step.msg}
          </div>
        )}

        {step.out !== undefined && step.out.length > 0 && (
          <div className="mx-auto mt-3 flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-muted">{T({ en: 'served ⟹', bn: 'পরিবেশিতা ⟹' })}</span>
            {step.out.map((v, k) => (
              <span key={k} className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] ${k === step.out!.length - 1 ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400' : 'border-border text-muted'}`}>{v}</span>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {step.sift && <span className="rounded-full border border-cyan-500/60 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] text-cyan-400">{step.sift === 'up' ? '⤴ sift-up' : '⤵ sift-down'}</span>}
          {step.swapped && <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">⇅ swap [{step.swapped.join(' ↔ ')}]</span>}
          {step.settled && <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">✓ vow settled</span>}
          <span className="ml-auto font-mono text-[11px] text-muted">
            {T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length} · heap size ${step.n}`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length} · হিপ-আকার ${step.n}` })}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'parent(i)=(i−1)>>1 · children 2i+1 & 2i+2 — a complete tree with zero pointers; the throne arr[0] always knows the loudest alive.',
            bn: 'parent(i)=(i−1)>>1 · children 2i+1 & 2i+2 — শূন্য পয়েন্টারের সম্পূর্ণ গাছ; সিংহাসন arr[0] সর্বদা জানে জরুরিতম কে বেঁচে আছে।',
          })}
        </p>
      </div>
    </div>
  );
}
