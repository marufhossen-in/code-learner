import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { galgSteps, type GAKind, type GAStep } from './galgSim';

/** Graph Algorithms Lab: three worlds priced by four machines.
 *  kruskal welds cheapest-first across families · prim grows one wall through the cheapest crossing
 *  bellman relaxes every corridor for V−1 honest rounds · floyd lets every citizen mediate every pair. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: GAKind; en: string; bn: string }[] = [
  { id: 'kruskal', en: '🔗 kruskal — sort & weld', bn: '🔗 Kruskal — সাজাও ও ঝালাই' },
  { id: 'prim', en: '🧱 prim — the growing wall', bn: '🧱 Prim — বর্ধমান প্রাচীর' },
  { id: 'bellman', en: '⚖️ bellman — honest rounds', bn: '⚖️ Bellman — সৎ রাউন্ড' },
  { id: 'floyd', en: '🗳️ floyd — every pair', bn: '🗳️ Floyd — প্রতি জোড়া' },
];

const X_UNIT = 108;
const Y_UNIT = 96;
const PAD = 30;
const R = 18;

export function GraphAlgoLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<GAKind>('kruskal');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => galgSteps(scene), [scene]);
  const step: GAStep = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 950);
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
    for (const n of step.nodes) byId.set(n.id, { cx: PAD + n.x * X_UNIT + X_UNIT / 2, cy: PAD + n.y * Y_UNIT });
    return { byId, W: PAD * 2 + (maxX + 0.5) * X_UNIT + X_UNIT / 2, H: PAD * 2 + (maxY + 1) * Y_UNIT };
  }, [step]);

  const at = (id: string) => geom.byId.get(id) ?? { cx: PAD, cy: PAD };
  const key = (a: string, b: string) => [a, b].sort().join('|');
  const chosenSet = new Set(step.chosen.map(([a, b]) => key(a, b)));
  const isNew = (a: string, b: string) => step.newest !== undefined && key(step.newest[0], step.newest[1]) === key(a, b);
  const isHotEdge = (a: string, b: string) => step.hotEdge !== undefined && key(step.hotEdge[0], step.hotEdge[1]) === key(a, b);
  const isGun = (a: string, b: string) => step.rejected !== undefined && key(step.rejected[0], step.rejected[1]) === key(a, b);

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
        <svg width={geom.W} height={geom.H} className="mx-auto block" role="img" aria-label={`graph algorithms scene: ${scene}`}>
          <defs>
            <marker id="galgArrow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill="var(--color-border)" />
            </marker>
            <marker id="galgArrowHot" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 z" fill="var(--color-accent)" />
            </marker>
          </defs>

          {step.edges.map((e) => {
            const A = at(e.u); const B = at(e.v);
            const dx = B.cx - A.cx; const dy = B.cy - A.cy;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len; const uy = dy / len;
            const x1 = A.cx + ux * R; const y1 = A.cy + uy * R;
            const x2 = B.cx - ux * (R + (step.directed ? 5 : 0)); const y2 = B.cy - uy * (R + (step.directed ? 5 : 0));
            const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2;
            const gun = isGun(e.u, e.v);
            const welded = chosenSet.has(key(e.u, e.v));
            const hot = isHotEdge(e.u, e.v);
            const stroke = gun ? '#ef4444' : isNew(e.u, e.v) ? '#10b981' : hot ? 'var(--color-accent)' : welded ? '#10b981' : 'var(--color-border)';
            return (
              <g key={`${e.u}|${e.v}|${e.w}`}>
                <line x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={stroke} strokeWidth={welded || hot ? 2.6 : 1.2}
                  strokeDasharray={gun && hot ? '5 4' : '0'} opacity={welded || hot ? 1 : 0.7}
                  markerEnd={step.directed ? (hot || welded ? 'url(#galgArrowHot)' : 'url(#galgArrow)') : undefined} />
                <rect x={mx - 9} y={my - 7.5} width={18} height={15} rx={4}
                  fill="var(--color-surface)" stroke={welded ? '#10b981' : 'var(--color-border)'} strokeWidth="0.8" opacity="0.95" />
                <text x={mx + (e.w < 0 ? 1 : 0)} y={my + 3.8} textAnchor="middle" fontSize="9.5" fontFamily="monospace" fontWeight="700"
                  fill={e.w < 0 ? '#f87171' : welded ? '#10b981' : 'var(--color-muted)'}>{e.w}</text>
              </g>
            );
          })}

          {step.nodes.map((n) => {
            const { cx, cy } = at(n.id);
            const hot = step.hot === n.id;
            const touched = step.chosen.some(([a, b]) => a === n.id || b === n.id);
            const d = step.dist?.[n.id];
            return (
              <g key={n.id}>
                {hot && <circle cx={cx} cy={cy} r={R + 5} fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 3" />}
                <circle cx={cx} cy={cy} r={R}
                  fill={hot ? 'var(--color-accent)' : touched && (scene === 'kruskal' || scene === 'prim') ? 'var(--color-emerald-500, #10b981)' : 'var(--color-surface2)'}
                  stroke={hot || touched && (scene === 'kruskal' || scene === 'prim') ? 'none' : 'var(--color-border)'} strokeWidth="1.2" />
                <text x={cx} y={cy + 4.4} textAnchor="middle" fontSize="12" fontFamily="monospace" fontWeight="700"
                  fill={hot ? 'var(--color-bg)' : touched && (scene === 'kruskal' || scene === 'prim') ? '#052e16' : 'var(--color-text)'}>{n.id}</text>
                {d !== undefined && (
                  <text x={cx} y={cy + R + 14} textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="700"
                    fill={d >= 0 && d !== Infinity ? '#34d399' : d !== Infinity ? '#f87171' : 'var(--color-muted)'}>
                    {d === Infinity ? '∞' : d}
                  </text>
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

        {/* the candidate tray — prim’s crossings / the world’s corridor ledger */}
        {step.tray.length > 0 && scene !== 'floyd' && (
          <div className="mx-auto mt-3 flex w-fit max-w-full flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[10px] text-muted">
              {T({ en: scene === 'prim' ? 'crossing tray ⟶' : 'corridor ledger ⟶', bn: scene === 'prim' ? 'পেরোনোর ট্রে ⟶' : 'করিডর-খাতা ⟶' })}
            </span>
            {step.tray.slice(0, 12).map((t, k2) => (
              <span key={k2} className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] ${k2 === 0 && scene === 'prim' ? 'border-cyan-500/60 bg-cyan-500/10 text-cyan-400' : 'border-border text-muted'}`}>{t}</span>
            ))}
            {step.tray.length > 12 && <span className="font-mono text-[10px] text-muted">+{step.tray.length - 12}</span>}
          </div>
        )}

        {/* floyd’s table — the democratic ledger */}
        {step.matrix && (
          <div className="mx-auto mt-4 w-fit max-w-full overflow-x-auto">
            <table className="border-collapse font-mono text-[11px]">
              <thead>
                <tr>
                  <th className="border border-border px-1.5 py-0.5 text-muted">⇢</th>
                  {step.matrix.ids.map((id) => (
                    <th key={id} className={`border border-border px-1.5 py-0.5 ${step.matrix!.k === id ? 'bg-cyan-500/10 text-cyan-400' : 'text-muted'}`}>{id}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {step.matrix.d.map((row, ri) => (
                  <tr key={step.matrix!.ids[ri]}>
                    <th className={`border border-border px-1.5 py-0.5 text-left ${step.matrix!.k === step.matrix!.ids[ri] ? 'bg-cyan-500/10 text-cyan-400' : 'text-muted'}`}>{step.matrix!.ids[ri]}</th>
                    {row.map((v, j) => (
                      <td key={j} className={`border px-1.5 py-0.5 text-center border-border ${
                        step.matrix!.hi && step.matrix!.hi[0] === ri && step.matrix!.hi[1] === j
                          ? 'bg-accent/15 font-bold text-accent'
                          : v === null ? 'text-muted opacity-50' : 'text-text'
                      }`}>{v === null ? '∞' : v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-1.5 text-center font-mono text-[10px] text-muted">
              {T({ en: 'cyan column = mediator auditioning · accent cell = a price just renegotiated · ∞ = unpriced pair', bn: 'নীল কলাম = অভিষেক-মঞ্চে মধ্যস্থ · অ্যাসেন্ট ঘর = এইমাত্র পুনরায়-দর-কষাকষিকৃত মূল্য · ∞ = অমূল্যায়িত জোড়া' })}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {step.comps !== undefined && <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">{step.chosen.length} {T({ en: 'welds', bn: 'ঝালাই' })} · {step.comps} {T({ en: 'families', bn: 'পরিবার' })}</span>}
          {step.directed && <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted">{T({ en: '⟶ directed, priced world', bn: '⟶ নির্দেশিত, মূল্যধার্য জগৎ' })}</span>}
          <span className="ml-auto font-mono text-[11px] text-muted">
            {T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length}`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length}` })}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'greedy welds are lawful only because the cut property signs them; negative tolls suspend the wave law, so the honest ledger relaxes instead; and a matrix with one induction prices what no single walk can see: everyone, to everyone.',
            bn: 'লোভী ঝালাই বৈধ কেবল কাট-প্রপার্টি সই করায়; ঋণাত্মক টোল তরঙ্গ-বিধান স্থগিত করে, তাই সৎ খাতা শিথিল করেই এগোয়; আর একটি ইন্ডাকশনসহ ম্যাট্রিক্স মূল্য দেয় যা কোনো একক হাঁটা দেখতে পায় না: সবাইকে, সবার কাছে।',
          })}
        </p>
      </div>
    </div>
  );
}
