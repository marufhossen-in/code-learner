import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { graphSteps, type GN, type GStep, type GraphKind } from './graphSim';

/** Graph Lab: four walks, one machine each.
 *  bfs — wavefront on the demo world (queue borrowed) · dfs — corridor plunge (stack borrowed)
 *  cycle — three-color descent, back edge as smoking gun · topo — Kahn’s zero-debt tray on the curriculum DAG.
 *  World truth: emerald = doors opened · cyan = stamped, waiting · accent halo = being served now. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: GraphKind; en: string; bn: string }[] = [
  { id: 'bfs', en: '🌊 bfs — the wavefront', bn: '🌊 BFS — তরঙ্গ-সারি' },
  { id: 'dfs', en: '🤿 dfs — the plunge', bn: '🤿 DFS — ডুব' },
  { id: 'cycle', en: '🚬 cycle — the smoking gun', bn: '🚬 চক্র — ধোঁয়াশা বন্দুক' },
  { id: 'topo', en: '📜 topo — build order', bn: '📜 টপো — নির্মাণ-ক্রম' },
];

const X_UNIT = 118;
const Y_UNIT = 96;
const PAD = 34;
const R = 19;

export function GraphLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<GraphKind>('bfs');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => graphSteps(scene), [scene]);
  const step: GStep = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 900);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const geom = useMemo(() => {
    const byId = new Map<string, { cx: number; cy: number }>();
    const maxX = Math.max(0, ...step.nodes.map((n) => n.x));
    const maxY = Math.max(0, ...step.nodes.map((n) => n.y));
    for (const n of step.nodes) byId.set(n.id, { cx: PAD + n.x * X_UNIT + X_UNIT / 2.6, cy: PAD + n.y * Y_UNIT });
    return { byId, W: PAD * 2 + (maxX + 1) * X_UNIT + X_UNIT / 2.6, H: PAD * 2 + (maxY + 1) * Y_UNIT };
  }, [step]);

  const at = (id: string) => geom.byId.get(id) ?? { cx: PAD, cy: PAD };
  const isVis = (id: string) => step.visited.includes(id);
  const isFront = (id: string) => step.frontier.includes(id);
  const isTree = (a: string, b: string) =>
    step.treeEdges.some(([u, v]) => (u === a && v === b) || (u === b && v === a));
  const isGun = (a: string, b: string) =>
    step.backEdge !== undefined &&
    ((step.backEdge[0] === a && step.backEdge[1] === b) || (step.backEdge[0] === b && step.backEdge[1] === a));

  const frontierLabel =
    scene === 'bfs' ? T({ en: 'queue ⟶', bn: 'কিউ ⟶' })
      : scene === 'dfs' ? T({ en: 'stack · dive ⟶', bn: 'স্ট্যাক · ডুব ⟶' })
        : scene === 'cycle' ? T({ en: 'next dives ⟶', bn: 'পরের ডুব ⟶' })
          : T({ en: 'zero-debt tray ⟶', bn: 'শূন্য-ঋণ ট্রে ⟶' });

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
        <svg width={geom.W} height={geom.H} className="mx-auto block" role="img" aria-label={`graph scene: ${scene}`}>
          <defs>
            <marker id="graphArrow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill="var(--color-border)" />
            </marker>
            <marker id="graphArrowHot" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill="var(--color-accent)" />
            </marker>
          </defs>

          {step.edges.map(([a, b]) => {
            const A = at(a); const B = at(b);
            const dx = B.cx - A.cx; const dy = B.cy - A.cy;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len; const uy = dy / len;
            const x1 = A.cx + ux * R; const y1 = A.cy + uy * R;
            const x2 = B.cx - ux * (R + (step.directed ? 5 : 0)); const y2 = B.cy - uy * (R + (step.directed ? 5 : 0));
            const gun = isGun(a, b); const tree = !gun && isTree(a, b);
            return (
              <line key={`${a}|${b}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={gun ? '#ef4444' : tree ? 'var(--color-accent)' : 'var(--color-border)'}
                strokeWidth={gun ? 2.2 : tree ? 2.6 : 1.2}
                strokeDasharray={gun ? '5 4' : '0'} opacity={gun ? 0.95 : tree ? 1 : 0.75}
                markerEnd={step.directed ? (tree ? 'url(#graphArrowHot)' : 'url(#graphArrow)') : undefined} />
            );
          })}

          {step.nodes.map((n: GN) => {
            const { cx, cy } = at(n.id);
            const hot = step.hot === n.id;
            const vis = isVis(n.id);
            const front = !vis && isFront(n.id);
            return (
              <g key={n.id}>
                {hot && <circle cx={cx} cy={cy} r={R + 6} fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 3" />}
                {front && <circle cx={cx} cy={cy} r={R + 3.5} fill="none" stroke="#22d3ee" strokeWidth="1.6" />}
                <circle cx={cx} cy={cy} r={R}
                  fill={vis ? 'var(--color-emerald-500, #10b981)' : front ? 'var(--color-surface2)' : 'var(--color-surface2)'}
                  stroke={front ? '#22d3ee' : 'var(--color-border)'} strokeWidth={front ? 1.4 : 1.2}
                  opacity={vis || front || hot ? 1 : 0.6} />
                <text x={cx} y={cy + 4.6} textAnchor="middle" fontSize="12.5" fontFamily="monospace" fontWeight="700"
                  fill={vis ? '#052e16' : 'var(--color-text)'}>{n.id}</text>
                {scene === 'bfs' && hot && step.wave !== undefined && (
                  <text x={cx} y={cy + R + 15} textAnchor="middle" fontSize="9.5" fontFamily="monospace" fill="var(--color-accent)">w{step.wave}</text>
                )}
              </g>
            );
          })}
        </svg>

        {step.msg && (
          <div className="mx-auto mt-3 w-fit max-w-full rounded-md border border-accent/40 bg-accent/10 px-3 py-1 text-center font-mono text-[12px] text-accent">
            {step.msg}
          </div>
        )}

        {/* frontier tray — the live machine */}
        {step.frontier.length > 0 && (
          <div className="mx-auto mt-3 flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-muted">{frontierLabel}</span>
            {step.frontier.map((id, k) => (
              <span key={k} className={`rounded-md border px-2 py-0.5 font-mono text-[11.5px] ${k === 0 ? 'border-cyan-500/60 bg-cyan-500/10 text-cyan-400' : 'border-border text-muted'}`}>{id}</span>
            ))}
          </div>
        )}

        {/* discovery order — settled so far */}
        {step.visited.length > 0 && (
          <div className="mx-auto mt-3 flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-muted">{T({ en: scene === 'topo' ? 'served ⟹' : 'opened ⟹', bn: scene === 'topo' ? 'পরিবেশিতা ⟹' : 'খোলা হলো ⟹' })}</span>
            {step.visited.map((id, k) => (
              <span key={k} className={`rounded-md border px-2 py-0.5 font-mono text-[11.5px] ${k === step.visited.length - 1 ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400' : 'border-border text-muted'}`}>{id}</span>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {step.backEdge && <span className="rounded-full border border-red-500/60 bg-red-500/10 px-2 py-0.5 font-mono text-[11px] text-red-400">🚬 back edge {step.backEdge.join(' — ')}</span>}
          {step.directed && <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted">{T({ en: '⟶ directed world', bn: '⟶ নির্দেশিত জগৎ' })}</span>}
          <span className="ml-auto font-mono text-[11px] text-muted">
            {T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length} · ${step.visited.length}/${step.nodes.length} opened`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length} · ${step.visited.length}/${step.nodes.length} খোলা` })}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'one law never changes: the mark at the DOOR keeps every citizen to exactly one visit — nothing else about the machine matters as much as that stamp.',
            bn: 'একটি আইন কখনো বদলায় না: দুয়ারেই দাগ প্রতিটি নাগরিকের পরিদর্শন রাখে ঠিক একবার — যন্ত্রের আর কিছুর চেয়ে এই স্ট্যাম্পই গুরুতর।',
          })}
        </p>
      </div>
    </div>
  );
}
