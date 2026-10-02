import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { llSteps, collect, LL_BASE, type LlOp } from './llSim';

/** Linked List Lab: the four classical operations on a singly linked list,
 *  rendered as boxes, arrows and labeled hands (head, p, prev, cur, tmp, fresh…). */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const PTR_STYLE: Record<string, string> = {
  head: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400',
  p: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
  prev: 'border-violet-500/60 bg-violet-500/10 text-violet-400',
  cur: 'border-cyan-500/60 bg-cyan-500/10 text-cyan-400',
  tmp: 'border-rose-500/60 bg-rose-500/10 text-rose-400',
  fresh: 'border-sky-500/60 bg-sky-500/10 text-sky-400',
  victim: 'border-red-500/60 bg-red-500/10 text-red-400',
};

const OPS: { id: string; op: LlOp; en: string; bn: string }[] = [
  { id: 'walk', op: { kind: 'traverse', target: 2 }, en: '👣 traverse → index 2', bn: '👣 হাঁটা → ইনডেক্স ২' },
  { id: 'walkoob', op: { kind: 'traverse', target: LL_BASE.length }, en: '🌫️ walk past the end', bn: '🌫️ শেষ পেরিয়ে হাঁটা' },
  { id: 'pushfront', op: { kind: 'insertAt', index: 0, value: 'pineapple' }, en: '🍍 insert front', bn: '🍍 সামনে ইনসার্ট' },
  { id: 'insmid', op: { kind: 'insertAt', index: 2, value: 'pineapple' }, en: '🪡 insert at 2', bn: '🪡 ২-এ ইনসার্ট' },
  { id: 'delhead', op: { kind: 'deleteAt', index: 0 }, en: '✂️ delete head', bn: '✂️ head ডিলিট' },
  { id: 'delmid', op: { kind: 'deleteAt', index: 2 }, en: '✂️ delete at 2', bn: '✂️ ২-এ ডিলিট' },
  { id: 'reverse', op: { kind: 'reverse' }, en: '🔁 reverse (the dance)', bn: '🔁 উল্টানো (নাচ)' },
];

export function LlLab() {
  const { T } = useI18n();
  const [opId, setOpId] = useState('walk');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => llSteps(LL_BASE, OPS.find((o) => o.id === opId)!.op), [opId]);
  const step = steps[Math.min(i, steps.length - 1)];
  const chainIds = useMemo(() => collect(step.head, step.nodes), [step]);
  const byId = useMemo(() => new Map(step.nodes.map((n) => [n.id, n])), [step.nodes]);
  const ghosts = useMemo(() => step.nodes.filter((n) => !chainIds.includes(n.id)), [step.nodes, chainIds]);

  // pointer labels grouped by node id (a node may wear several hands in the dance)
  const ptrsAt = useMemo(() => {
    const m = new Map<number, { name: string }[]>();
    if (step.head !== null) {
      m.set(step.head, [...(m.get(step.head) ?? []), { name: 'head' }]);
    }
    for (const p of step.ptrs) {
      if (p.at !== null) m.set(p.at, [...(m.get(p.at) ?? []), { name: p.name }]);
    }
    return m;
  }, [step]);
  const nullHands = step.ptrs.filter((p) => p.at === null).map((p) => p.name);

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 700);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {OPS.map((o) => (
          <button key={o.id} type="button" onClick={() => { setOpId(o.id); reset(); }}
            className={`${chip} ${opId === o.id ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-muted hover:text-text'}`}>
            {T({ en: o.en, bn: o.bn })}
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

      <div className="overflow-x-auto px-4 pt-9 pb-4">
        <div className="flex min-w-max items-center gap-0">
          {chainIds.length === 0 && (
            <span className="font-mono text-xs text-muted">
              {T({ en: 'head → null — the empty hall', bn: 'head → null — খালি প্রকোষ্ঠ' })}
            </span>
          )}
          {chainIds.map((id, idx) => {
            const node = byId.get(id)!;
            const isFocus = step.focus === id;
            const handsHere = ptrsAt.get(id) ?? [];
            return (
              <div key={id} className="flex items-center">
                <div className="relative">
                  <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 gap-1">
                    {handsHere.map((h) => (
                      <span key={h.name} className={`rounded-full border px-1.5 py-0.5 font-mono text-[10px] ${PTR_STYLE[h.name] ?? 'border-border text-muted'}`}>
                        {h.name}
                      </span>
                    ))}
                  </div>
                  <div className={`flex h-14 w-[104px] overflow-hidden rounded-lg border font-mono text-xs transition-all duration-300 ${isFocus ? 'border-accent shadow-[0_0_0_3px_var(--color-accent-glow,rgba(99,102,241,.25))]' : 'border-border'}`}>
                    <div className="flex flex-1 items-center justify-center bg-accent/5 font-semibold text-text">{node.value}</div>
                    <div className="flex w-7 flex-col items-center justify-center border-l border-border bg-surface text-[10px] text-muted">
                      <span className="text-[8px] opacity-70">next</span>
                      {node.next !== null ? '●' : '∅'}
                    </div>
                  </div>
                </div>
                {idx < chainIds.length - 1 && (
                  <svg width="46" height="14" viewBox="0 0 46 14" className="shrink-0 text-muted" aria-hidden="true">
                    <line x1="2" y1="7" x2="36" y2="7" stroke="currentColor" strokeWidth="1.6" />
                    <polygon points="36,2 46,7 36,12" fill="currentColor" />
                  </svg>
                )}
              </div>
            );
          })}
          {chainIds.length > 0 && (
            <span className="ml-2 font-mono text-[11px] text-muted">null</span>
          )}
        </div>

        {(ghosts.length > 0 || nullHands.length > 0) && (
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-dashed border-border pt-3">
            {nullHands.length > 0 && (
              <div className="flex items-center gap-2" aria-label="hands holding null">
                <div className="flex gap-1">
                  {nullHands.map((h) => (
                    <span key={h} className={`rounded-full border px-1.5 py-0.5 font-mono text-[10px] ${PTR_STYLE[h] ?? 'border-border text-muted'}`}>{h}</span>
                  ))}
                </div>
                <span className="font-mono text-xs text-muted">→ null</span>
              </div>
            )}
            {ghosts.map((g) => (
              <div key={g.id} className="flex items-center gap-2 opacity-45">
                <div className="flex h-10 w-[86px] items-center justify-center rounded-lg border border-dashed border-red-500/50 font-mono text-xs text-red-400 line-through">
                  {g.value}
                </div>
                <span className="font-mono text-[10px] text-red-400">unreachable → GC</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-1 flex items-center justify-between font-mono text-[11px] text-muted">
          <span>{T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length}`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length}` })}</span>
          <span>{T({ en: `chain length: ${chainIds.length}`, bn: `শিকলের দৈর্ঘ্য: ${chainIds.length}` })}</span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'Every box lives somewhere in memory; only the arrows (next) make it a list. Losing the last hand to a node loses the node.',
            bn: 'প্রতিটি বাক্স মেমরির কোথাও বাস করে; লিস্ট বানায় কেবল তীরগুলো (next)। নোডের শেষ হাত হারালেই নোড হারানো।',
          })}
        </p>
      </div>
    </div>
  );
}
