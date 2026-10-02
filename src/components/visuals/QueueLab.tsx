import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { queueSteps, type QKind } from './qSim';

/** Queue Lab: the four queue scenes — fair line, ring buffer wrap, two-tray
 *  machine (stacks in disguise), and the priority bargain. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENES: { id: QKind; en: string; bn: string }[] = [
  { id: 'line', en: '🚶 the fair line', bn: '🚶 ন্যায্য সারি' },
  { id: 'ring', en: '⭕ ring buffer', bn: '⭕ রিং-বাফার' },
  { id: 'twostack', en: '🥞🥞 two-tray machine', bn: '🥞🥞 দ্বি-বন্দনী যন্ত্র' },
  { id: 'priority', en: '🔊 the priority bargain', bn: '🔊 অগ্রাধিকার-সওদা' },
];

function Tray({ title, items, accent }: { title: string; items: string[]; accent: boolean }) {
  return (
    <div className="min-w-[130px]">
      <div className={`mb-1.5 text-center font-mono text-[10px] ${accent ? 'text-accent' : 'text-muted'}`}>{title}</div>
      <div className="flex flex-col-reverse items-stretch gap-1 rounded-b-xl border-x-2 border-b-2 border-border px-2 pb-2 pt-1" style={{ minHeight: 96 }}>
        {items.length === 0 && <div className="pt-6 text-center font-mono text-[10px] text-muted">dry</div>}
        {items.map((v, k) => (
          <div key={`${k}-${v}`} className={`rounded-md border px-2 py-1 text-center font-mono text-[11px] ${k === items.length - 1 ? (accent ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-text') : 'border-border text-muted'}`}>
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

export function QueueLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<QKind>('line');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => queueSteps(scene), [scene]);
  const step = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 800);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const itemCls = (v: string) => {
    const wasServed = step.dequeued === v;
    const arrived = step.enqueued === v;
    if (wasServed) return 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400';
    if (arrived) return 'border-accent bg-accent/10 text-accent';
    return 'border-border text-text';
  };

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

      <div className="overflow-x-auto px-4 py-5">
        {(scene === 'line' || scene === 'priority') && (
          <div className="flex min-w-max items-center gap-0">
            <div className="mr-3 flex flex-col items-center" aria-hidden="true">
              <span className="rounded-md border border-emerald-500/50 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-400">IN ⟶</span>
            </div>
            {step.queue.length === 0 && (
              <span className="font-mono text-[11px] text-muted">{T({ en: '(nobody waiting)', bn: '(কেউ অপেক্ষায় নেই)' })}</span>
            )}
            {[...step.queue].map((v, k) => (
              <div key={`${k}-${v}`} className={`flex items-center ${k === 0 ? '' : ''}`}>
                {k > 0 && <svg width="30" height="12" viewBox="0 0 30 12" className="shrink-0 text-muted" aria-hidden="true"><line x1="1" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth="1.4" /><polygon points="22,2 30,6 22,10" fill="currentColor" /></svg>}
                <div className={`relative rounded-md border px-2.5 py-1.5 font-mono text-[11px] transition-all duration-300 ${itemCls(v)}`}>
                  {k === 0 && <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] text-muted">☝ front</span>}
                  {k === step.queue.length - 1 && step.queue.length > 1 && <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] text-muted">☝ back</span>}
                  {v}
                </div>
              </div>
            ))}
            <div className="ml-3 flex flex-col items-center" aria-hidden="true">
              <span className="rounded-md border border-rose-500/50 bg-rose-500/10 px-2 py-1 font-mono text-[10px] text-rose-400">⟶ OUT</span>
            </div>
          </div>
        )}

        {scene === 'ring' && step.slots && (
          <div className="mx-auto w-fit">
            <div className="flex gap-1.5">
              {step.slots.map((s, idx) => (
                <div key={idx} className="flex w-[92px] flex-col items-center gap-1">
                  <div className="flex h-6 items-end gap-1.5 font-mono text-[10px]">
                    {step.head === idx && <span className="text-cyan-400">▲ head</span>}
                    {step.tail === idx && <span className="text-amber-400">▲ tail</span>}
                  </div>
                  <div className={`flex h-12 w-full items-center justify-center rounded-lg border font-mono text-xs transition-all duration-300 ${s ? (step.enqueued === s ? 'border-accent bg-accent/10 text-accent' : 'border-border text-text') : 'border-dashed border-border text-muted'}`}>
                    {s ?? '·'}
                  </div>
                  <span className="font-mono text-[9px] text-muted">slot {idx}</span>
                </div>
              ))}
            </div>
            {step.wrapped && !step.error && (
              <div className="mt-2 text-center font-mono text-[11px] text-accent">{T({ en: '↩ wrap! tail crossed the edge and resumed at 0 — x % capacity', bn: '↩ ভাঁজ! tail প্রান্ত পেরিয়ে শুরুতে ফিরল — x % capacity' })}</div>
            )}
          </div>
        )}

        {scene === 'twostack' && (
          <div className="mx-auto flex w-fit items-end gap-5">
            <Tray title={T({ en: 'inbox (LIFO tray)', bn: 'inbox (LIFO বন্দনী)' })} items={step.inbox ?? []} accent={false} />
            <div className="pb-10 text-center">
              <svg width="60" height="30" viewBox="0 0 60 30" aria-hidden="true" className={step.pourFrom ? 'text-accent' : 'text-muted'}>
                <path d="M4 4 C 30 34, 30 34, 56 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray={step.pourFrom ? '0' : '3 3'} />
                <polygon points="56,22 60,26 54,28" fill="currentColor" transform="rotate(-18 56 25)" />
              </svg>
              <div className={`font-mono text-[10px] ${step.pourFrom ? 'text-accent' : 'text-muted'}`}>
                {step.pourFrom ? T({ en: `pour ${step.pourFrom} ⇢`, bn: `ঢালাই ${step.pourFrom} ⇢` }) : T({ en: 'pour (only when dry)', bn: 'ঢালাই (শুকনো হলেই)' })}
              </div>
            </div>
            <Tray title={T({ en: 'outbox (serving)', bn: 'outbox (পরিবেশন)' })} items={step.outbox ?? []} accent={true} />
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {step.enqueued && <span className="rounded-full border border-cyan-500/60 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] text-cyan-400">enqueue ⇢ {step.enqueued}</span>}
          {step.dequeued && <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">dequeue ⇠ {step.dequeued}</span>}
          {step.error && (
            <span className={`rounded-md border px-2.5 py-1 font-mono text-[11px] font-bold ${step.error === 'underflow' ? 'border-amber-500/60 bg-amber-500/10 text-amber-400' : 'border-red-500/60 bg-red-500/10 text-red-400'}`}>
              {step.error === 'underflow' ? '⚠ QUEUE UNDERFLOW — nobody to serve' : '🚫 BOUNDED OVERFLOW — producer told to wait or lose'}
            </span>
          )}
          <span className="ml-auto font-mono text-[11px] text-muted">{T({ en: `step ${Math.min(i + 1, steps.length)}/${steps.length} · size ${step.queue.length}`, bn: `ধাপ ${Math.min(i + 1, steps.length)}/${steps.length} · আকার ${step.queue.length}` })}</span>
        </div>
        <p className="text-sm leading-relaxed text-text">{T(step.note)}</p>
        <p className="mt-1.5 font-mono text-[11px] text-muted">
          {T({
            en: 'FIFO — first in, first out — is fairness made structural: nobody jumps, nobody shifts, pointers do all the walking.',
            bn: 'FIFO — প্রথমে এলো, প্রথমে গেল — কাঠামোয় গড়া ন্যায়বিচার: কেউ টানে না, কেউ সড়ে না, সব হাঁটা করে পয়েন্টার।',
          })}
        </p>
      </div>
    </div>
  );
}
