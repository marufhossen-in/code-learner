import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { treeSteps, type TreeKind } from './treeSim';

/** Tree Lab: four scenes — grow the search tree by comparison hops, follow a
 *  guided hit and an honest ∅ miss, watch the three traversal orders, and see
 *  the O(1) rotations that repair height crimes without breaking the search vow. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: TreeKind; en: string; bn: string }[] = [
  { id: 'build', en: '🌱 grow the search tree', bn: '🌱 অনুসন্ধান-গাছ গড়ুন' },
  { id: 'search', en: '🔍 hit & the honest ∅', bn: '🔍 হিট ও সৎ ∅' },
  { id: 'traverse', en: '🧭 three visiting orders', bn: '🧭 তিন পরিদর্শন-ক্রম' },
  { id: 'rotate', en: '🌀 the repair spins', bn: '🌀 মেরামত-ঘূর্ণন' },
];

const X_UNIT = 58;
const Y_UNIT = 66;
const PAD_X = 34;
const PAD_Y = 30;
const R = 17;

export function TreeLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<TreeKind>('build');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => treeSteps(scene), [scene]);
  const step = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 780);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const maxX = Math.max(0, ...step.nodes.map((n) => n.x));
  const maxY = Math.max(0, ...step.nodes.map((n) => n.y));
  const W = (maxX + 1) * X_UNIT + PAD_X * 2;
  const H = (maxY + 1) * Y_UNIT + PAD_Y * 2;
  const px = (n: { x: number; y: number }) => ({ cx: n.x * X_UNIT + PAD_X + X_UNIT / 2 * 0, cy: n.y * Y_UNIT + PAD_Y });
  const byId = new Map(step.nodes.map((n) => [n.id, n]));

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
        <svg width={W} height={H} className="mx-auto block" role="img" aria-label="binary search tree stage">
          {step.edges.map((e, k) => {
            const a = byId.get(e.a)!;
            const b = byId.get(e.b)!;
            const hotEdge = step.hot === e.b || step.hit === e.b;
            return (
              <line key={k} x1={px(a).cx} y1={px(a).cy} x2={px(b).cx} y2={px(b).cy}
                stroke={hotEdge ? 'var(--color-accent)' : 'var(--color-border)'}
                strokeWidth={hotEdge ? 2.2 : 1.4} strokeDasharray={hotEdge ? '0' : '4 3'} />
            );
          })}
          {step.nodes.map((n) => {
            const isHot = step.hot === n.id;
            const isHit = step.hit === n.id;
            const inOut = step.out?.includes(n.v) ?? false;
            const fill = isHit ? 'var(--color-emerald-500, #10b981)' : isHot ? 'var(--color-accent)' : 'var(--color-surface2)';
            return (
              <g key={n.id} style={{ transition: 'all .35s' }}>
                {isHot && <circle cx={px(n).cx} cy={px(n).cy} r={R + 6} fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeDasharray="3 3" />}
                <circle cx={px(n).cx} cy={px(n).cy} r={R} fill={fill}
                  stroke={isHit ? '#10b981' : isHot ? 'var(--color-accent)' : inOut ? 'var(--color-accent)' : 'var(--color-border)'}
                  strokeWidth={isHit || isHot ? 2.2 : 1.4} opacity={inOut && !isHot && !isHit ? 0.9 : 1} />
                <text x={px(n).cx} y={px(n).cy + 4.5} textAnchor="middle" fontSize="12" fontFamily="monospace" fontWeight="700"
                  fill={isHit ? '#052e16' : isHot ? 'var(--color-bg)' : 'var(--color-text)'}>{n.v}</text>
                {n.y === 0 && (
                  <text x={px(n).cx} y={px(n).cy - R - 8} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="var(--color-muted)">root</text>
                )}
              </g>
            );
          })}
        </svg>

        {step.msg && (
          <div className="mx-auto mt-2 w-fit max-w-full rounded-md border border-accent/40 bg-accent/10 px-3 py-1 text-center font-mono text-[12px] text-accent">
            {step.rotated ? `${step.rotated === 'L' ? '↺' : '↻'} ` : ''}{step.msg}
          </div>
        )}

        {step.out !== undefined && (
          <div className="mx-auto mt-3 flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-muted">
              {step.order === 'in' ? 'INORDER ⟹' : step.order === 'pre' ? 'PREORDER ⟹' : 'POSTORDER ⟹'}
            </span>
            {step.out.length === 0 && <span className="font-mono text-[11px] text-muted">[ ]</span>}
            {step.out.map((v, k) => (
              <span key={k} className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] ${k === step.out!.length - 1 ? 'border-accent bg-accent/10 text-accent' : 'border-border text-muted'}`}>{v}</span>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {step.hit !== undefined && <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">◉ {byId.get(step.hit)?.v}</span>}
          {step.rotated && <span className="rounded-full border border-accent/60 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent">{step.rotated === 'L' ? '↺ LEFT rotation' : '↻ RIGHT rotation'}</span>}
          <span className="ml-auto font-mono text-[11px] text-muted">
            {T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length} · nodes ${step.nodes.length} · height ${maxY}`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length} · নোড ${step.nodes.length} · উচ্চতা ${maxY}` })}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'The search vow — everything left is smaller, everything right is bigger — is the whole inheritance; height is its interest rate.',
            bn: 'অনুসন্ধান-শপথ — বামের সব ছোট, ডানের সব বড় — পুরো উত্তরাধিকারই এটি; উচ্চতাই এর সুদের হার।',
          })}
        </p>
      </div>
    </div>
  );
}
