import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { chainSteps, HT_KEYS, probeSteps } from './htSim';

/** Hash Lab: watch content become addresses — chains, probe walks and the resize rescue. */

const chip =
  'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

export function HtLab() {
  const { T } = useI18n();
  const [mode, setMode] = useState<'chain' | 'probe'>('chain');
  const [count, setCount] = useState(1);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => (mode === 'chain' ? chainSteps(HT_KEYS.slice(0, count)) : probeSteps(HT_KEYS.slice(0, count))), [mode, count]);
  const step = steps[Math.min(i, steps.length - 1)];
  const probeSet = new Set(step.probePath ?? []);

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 650);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {([
          { id: 'chain' as const, en: 'Chaining + resize', bn: 'চেইনিং + রিসাইজ' },
          { id: 'probe' as const, en: 'Linear probing', bn: 'লিনিয়ার প্রোবিং' },
        ]).map((m) => (
          <button key={m.id} type="button" onClick={() => { setMode(m.id); reset(); }}
            className={`${chip} ${mode === m.id ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-muted hover:text-text'}`}>
            {T({ en: m.en, bn: m.bn })}
          </button>
        ))}
        <label className="ml-auto flex items-center gap-2 font-mono text-[11px] text-muted">
          {T({ en: `${count} keys`, bn: `${count}টি চাবি` })}
          <input type="range" min={4} max={HT_KEYS.length} value={count}
            onChange={(e) => { setCount(Number(e.target.value)); reset(); }}
            className="w-24 accent-accent" />
        </label>
      </div>

      <p className="border-b border-border bg-accent/5 px-3 py-2 text-sm">
        {mode === 'chain'
          ? T({
              en: 'Each key is hashed into a door; occupied doors grow CHAINS. When α = keys/slots nears 0.75, the whole table doubles and everyone rehashes — the amortized rescue.',
              bn: 'প্রতি চাবি হ্যাশে যায় এক দরজায়; অধিষ্ঠিত দরজায় বাড়ে চেইন। α = চাবি/স্লট ০.৭৫-এর কাছে গেলে পুরো টেবিল দ্বিগুণ হয়ে সবাই পুনঃহ্যাশ হয় — অ্যামর্টাইজড উদ্ধার।',
            })
          : T({
              en: 'Same door math, different answer to “occupied”: the key walks forward to the next empty seat. Watch CLUSTERS form — each cluster makes every future walk longer.',
              bn: 'একই দরজা-পাটিগণিত, “অধিষ্ঠিত?”-এর ভিন্ন জবাব: চাবি এগিয়ে যায় পরের খালি আসনে। গুচ্ছ গড়তে দেখুন — প্রতি গুচ্ছ ভবিষ্যৎ-হাঁটা আরও লম্বা করে।',
            })}
      </p>

      <div className="grid gap-0 md:grid-cols-[1fr_220px]">
        {/* table view */}
        <div className="max-h-80 overflow-y-auto p-3">
          <div className="grid gap-1">
            {step.table.map((slot) => {
              const isProbeDoor = probeSet.has(slot.index);
              const isTarget = slot.index === step.slot;
              return (
                <div key={`${slot.index}-${slot.chain.join(',')}-${i}`}
                  className={`fade-up flex items-center gap-2 rounded-lg border px-2 py-1 font-mono text-[11px] ${
                    isProbeDoor ? 'border-err/60 bg-err/10'
                    : isTarget ? 'border-warn/60 bg-warn/10'
                    : slot.chain.length === 0 ? 'border-border/50 bg-bg/40 text-muted/50'
                    : 'border-border bg-elev/40'
                  }`}>
                  <span className="w-6 select-none text-right text-[10px] text-muted">{slot.index}</span>
                  {slot.chain.length === 0 ? (
                    <span className="opacity-40">∅</span>
                  ) : (
                    slot.chain.map((k, ki) => (
                      <span key={`${k}-${ki}`} className="flex items-center gap-1">
                        {ki > 0 && <span className="text-muted">→</span>}
                        <span className={`rounded px-1.5 py-0.5 ${k === step.key ? 'bg-accent/20 font-bold text-accent' : 'bg-ok/15 text-ok'}`}>{k}</span>
                      </span>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* side panel */}
        <div className="border-t border-border p-3 md:border-l md:border-t-0">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-wide text-muted">
            {T({ en: 'current insert', bn: 'চলতি ইনসার্ট' })}
          </div>
          <div className="mb-3 rounded-lg border border-border bg-elev/40 px-2.5 py-2 font-mono text-xs">
            <div className="font-bold text-accent">«{step.key}»</div>
            <div className="mt-1 text-muted">hash: {step.hash.toLocaleString()}</div>
            <div className="text-muted">slot: {step.slot} {step.collision ? T({ en: '(collision!)', bn: '(সংঘর্ষ!)' }) : T({ en: '(open)', bn: '(খালি)' })}</div>
          </div>

          <div className="mb-1 flex items-baseline justify-between font-mono text-[10px] text-muted">
            <span>{T({ en: 'load factor α', bn: 'লোড-ফ্যাক্টর α' })}</span>
            <span>{(step.loadFactor * 100).toFixed(0)}%</span>
          </div>
          <div className="relative mb-3 h-3 rounded-full bg-elev">
            <div className={`h-3 rounded-full transition-all ${step.loadFactor > 0.7 ? 'bg-warn/80' : 'bg-ok/70'}`} style={{ width: `${step.loadFactor * 100}%` }} />
            <div className="absolute top-0 h-3 w-px bg-err" style={{ left: '75%' }} />
          </div>

          {step.resized && (
            <div className="fade-up mb-3 rounded-lg border border-warn/60 bg-warn/10 px-2.5 py-2 font-mono text-[11px] text-warn">
              {T({ en: `⇧ RESIZE ${step.resizedFrom}→${step.capacity}: every key rehashed`, bn: `⇧ রিসাইজ ${step.resizedFrom}→${step.capacity}: প্রতি চাবি পুনঃহ্যাসিত` })}
            </div>
          )}

          <p key={`note-${i}`} className="fade-up rounded-lg border border-border bg-bg/60 px-2.5 py-2 text-sm">{T(step.note)}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-border px-3 py-2">
        <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}
          className="rounded-lg border border-border px-3 py-1 text-xs transition hover:bg-elev disabled:opacity-40">← prev</button>
        <button type="button" onClick={() => setI((v) => Math.min(steps.length - 1, v + 1))} disabled={i >= steps.length - 1}
          className="rounded-lg border border-border px-3 py-1 text-xs transition hover:bg-elev disabled:opacity-40">next →</button>
        <button type="button" onClick={() => { if (i >= steps.length - 1) setI(0); setPlaying((p) => !p); }}
          className="rounded-lg border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-bold text-accent transition hover:bg-accent/20">
          {playing ? '⏸' : '▶'} PLAY
        </button>
        <span className="ml-auto font-mono text-[10px] text-muted">
          {T({ en: `slots ${step.capacity} · keys ${step.inserts} · step ${i + 1}/${steps.length}`, bn: `স্লট ${step.capacity} · চাবি ${step.inserts} · ধাপ ${i + 1}/${steps.length}` })}
        </span>
        <button type="button" onClick={reset}
          className="rounded-lg border border-border px-2 py-1 font-mono text-xs text-muted transition hover:bg-elev">↺</button>
      </div>

      <p className="border-t border-border px-3 py-2 text-sm text-muted">
        {T({
          en: 'The mental model: addressing by CONTENT, not order. Uniform hashing keeps doors fair; α stays low so chains stay short; equality answers the final “is this you?”.',
          bn: 'মানসিক মডেল: ক্রম নয়, বিষয়বস্তু-ঠিকানা। অভিন্ন হ্যাশিং দরজা ন্যায্য রাখে; α কম থাকে ফলে চেইন ছোট থাকে; আর সমতা উত্তর দেয় শেষ “এ তুমি?”।',
        })}
      </p>
    </div>
  );
}
