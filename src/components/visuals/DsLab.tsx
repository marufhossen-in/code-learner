import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { binaryProbes, bubbleOps, growthTable, linearProbes, mergeRun, mergeUpperBound } from './dsaSim';

/** DSA Lab: count the work — search races, sort races, and the growth table. */

type Tab = 'search-race' | 'sort-race' | 'growth-table';

const chip =
  'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

/** Static class maps — Tailwind only ships classes it can see literally. */
const RACE = {
  err: {
    label: 'text-err',
    cellSeen: 'bg-err/25 border-err/40 text-err',
    bar: 'bg-err/70',
  },
  ok: {
    label: 'text-ok',
    cellSeen: 'bg-ok/25 border-ok/40 text-ok',
    bar: 'bg-ok/70',
  },
} as const;
type RaceColor = keyof typeof RACE;

export function DsLab() {
  const { T } = useI18n();
  const [tab, setTab] = useState<Tab>('search-race');
  const [n, setN] = useState(32);
  const [target, setTarget] = useState(29);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const lin = useMemo(() => linearProbes(n, target), [n, target]);
  const bin = useMemo(() => binaryProbes(n, target), [n, target]);
  const maxSteps = Math.max(lin.probes.length, bin.probes.length);
  const step = Math.min(i, maxSteps - 1);
  const linSeen = new Set(lin.probes.slice(0, step + 1));
  const binSeen = new Set(bin.probes.slice(0, step + 1));

  useEffect(() => {
    if (!playing) return;
    if (step >= maxSteps - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 240);
    return () => clearTimeout(t);
  }, [playing, step, maxSteps]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const bubble = useMemo(() => bubbleOps(n), [n]);
  const merge = useMemo(() => mergeRun(n), [n]);
  const rows = useMemo(() => growthTable([8, 64, 512, 4096]), []);

  const tabs: { id: Tab; en: string; bn: string }[] = [
    { id: 'search-race', en: 'Search race', bn: 'সার্চ-দৌড়' },
    { id: 'sort-race', en: 'Sort race', bn: 'সর্ট-দৌড়' },
    { id: 'growth-table', en: 'Growth table', bn: 'বৃদ্ধি-ছক' },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {tabs.map((t) => (
          <button key={t.id} type="button" onClick={() => { setTab(t.id); reset(); }}
            className={`${chip} ${tab === t.id ? 'border-accent/60 bg-accent/10 text-accent' : 'border-border text-muted hover:text-text'}`}>
            {T({ en: t.en, bn: t.bn })}
          </button>
        ))}
        <label className="ml-auto flex items-center gap-2 font-mono text-[11px] text-muted">
          n = {n}
          <input type="range" min={8} max={64} value={n}
            onChange={(e) => { const v = Number(e.target.value); setN(v); setTarget((tg) => Math.min(tg, v - 1)); reset(); }}
            className="w-28 accent-accent" />
        </label>
      </div>

      {tab === 'search-race' && (
        <div className="p-3">
          <p className="mb-3 rounded-lg border border-border bg-accent/5 px-3 py-2 text-sm">
            {T({
              en: 'Same sorted shelf, two hunters. LINEAR checks every box left to right; BINARY halves the shelf each guess. Pick a target and press PLAY.',
              bn: 'একই সাজানো তাক, দুই শিকারি। লিনিয়ার বাম থেকে প্রতিটি বাক্স দেখে; বাইনারি প্রতি অনুমানে তাক অর্ধেকে নামায়। লক্ষ্য বেছে PLAY চাপুন।',
            })}
          </p>
          <label className="mb-3 flex items-center gap-2 font-mono text-[11px] text-muted">
            {T({ en: 'target index', bn: 'লক্ষ্য ইনডেক্স' })} = {target}
            <input type="range" min={0} max={n - 1} value={target}
              onChange={(e) => { setTarget(Number(e.target.value)); reset(); }}
              className="w-32 accent-accent" />
          </label>

          {([
            { name: 'O(n) linear', nameBn: 'O(n) লিনিয়ার', seen: linSeen, color: 'err' as RaceColor, done: step >= lin.probes.length - 1, count: lin.probes.slice(0, step + 1).length },
            { name: 'O(log n) binary', nameBn: 'O(log n) বাইনারি', seen: binSeen, color: 'ok' as RaceColor, done: step >= bin.probes.length - 1, count: bin.probes.slice(0, step + 1).length },
          ]).map((r) => (
            <div key={r.name} className="mb-3">
              <div className="mb-1 flex items-baseline justify-between font-mono text-[11px]">
                <span className={`font-bold ${RACE[r.color].label}`}>{T({ en: r.name, bn: r.nameBn })}</span>
                <span className="text-muted">
                  {T({ en: `${r.count} probes`, bn: `${r.count}টি প্রোব` })}
                  {r.done && ` ✓`}
                </span>
              </div>
              <div className="flex flex-wrap gap-[2px]">
                {Array.from({ length: n }, (_, k) => (
                  <div key={k}
                    className={`h-4 w-3 rounded-sm border text-[8px] leading-4 text-center font-mono ${
                      k === target ? 'border-accent bg-accent/25 text-accent'
                      : r.seen.has(k) ? RACE[r.color].cellSeen
                      : 'border-border bg-elev/40 text-transparent'}`}>
                    {k === target ? '◆' : '·'}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={step === 0}
              className="rounded-lg border border-border px-3 py-1 text-xs transition hover:bg-elev disabled:opacity-40">← prev</button>
            <button type="button" onClick={() => setI((v) => Math.min(maxSteps - 1, v + 1))} disabled={step >= maxSteps - 1}
              className="rounded-lg border border-border px-3 py-1 text-xs transition hover:bg-elev disabled:opacity-40">next →</button>
            <button type="button" onClick={() => { if (step >= maxSteps - 1) setI(0); setPlaying((p) => !p); }}
              className="rounded-lg border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-bold text-accent transition hover:bg-accent/20">
              {playing ? '⏸' : '▶'} PLAY
            </button>
            <button type="button" onClick={reset}
              className="ml-auto rounded-lg border border-border px-2 py-1 font-mono text-xs text-muted transition hover:bg-elev">↺</button>
          </div>
        </div>
      )}

      {tab === 'sort-race' && (
        <div className="p-3">
          <p className="mb-3 rounded-lg border border-border bg-accent/5 px-3 py-2 text-sm">
            {T({
              en: 'BUBBLE compares every adjacent pair on every pass (worst case shown). MERGE splits to size-1, then zips sorted runs back together. Watch the bill split as n grows.',
              bn: 'বাবল প্রতি পাসে প্রতি পাশাপাশি জোড়া তুলনা করে (ওয়ারস্ট-কেস)। মার্জ আকার-১ পর্যন্ত ভাগ করে, তারপর সাজানো ধারা জিপারের মতো জোড়া দেয়। n বাড়ার সঙ্গে বিলের ফাঁক দেখুন।',
            })}
          </p>
          {[
            { name: 'O(n²) bubble', nameBn: 'O(n²) বাবল', comps: bubble.comparisons, color: 'err' as RaceColor, extra: T({ en: `${bubble.swaps} swaps`, bn: `${bubble.swaps}টি সোয়াপ` }) },
            { name: 'O(n log n) merge', nameBn: 'O(n log n) মার্জ', comps: merge.comparisons, color: 'ok' as RaceColor, extra: T({ en: `${merge.writes} writes`, bn: `${merge.writes}টি লেখা` }) },
          ].map((r) => {
            const pct = Math.max(2, Math.round((r.comps / bubble.comparisons) * 100));
            return (
              <div key={r.name} className="mb-3">
                <div className="mb-1 flex items-baseline justify-between font-mono text-[11px]">
                  <span className={`font-bold ${RACE[r.color].label}`}>{T({ en: r.name, bn: r.nameBn })}</span>
                  <span className="text-muted">{r.comps} {T({ en: 'comparisons', bn: 'তুলনা' })} · {r.extra}</span>
                </div>
                <div className="h-3 rounded-full bg-elev">
                  <div className={`h-3 rounded-full ${RACE[r.color].bar} transition-all`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
          <p className="font-mono text-[11px] text-muted">
            {T({
              en: `merge saved ${bubble.comparisons - merge.comparisons} comparisons (${Math.round((1 - merge.comparisons / bubble.comparisons) * 100)}%). Textbook bound n·⌈log₂n⌉ = ${mergeUpperBound(n)} — merge stays under it, always.`,
              bn: `মার্জ বাঁচালো ${bubble.comparisons - merge.comparisons}টি তুলনা (${Math.round((1 - merge.comparisons / bubble.comparisons) * 100)}%)। পাঠ্য-সীমা n·⌈log₂n⌉ = ${mergeUpperBound(n)} — মার্জ সবসময় তার নিচে থাকে।`,
            })}
          </p>
        </div>
      )}

      {tab === 'growth-table' && (
        <div className="p-3">
          <p className="mb-3 rounded-lg border border-border bg-accent/5 px-3 py-2 text-sm">
            {T({
              en: 'The bill each family hands you as input doubles. At n=8 every algorithm feels instant; at n=4096 shape is destiny.',
              bn: 'ইনপুট দ্বিগুণ হলে প্রতি পরিবার আপনার হাতে যে বিল ধরায়। n=8-এ সব algorithms মুহূর্তের মতো লাগে; n=4096-ে আকৃতিই নিয়তি।',
            })}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-[11px]">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="py-1 pr-3">{T({ en: 'n', bn: 'n' })}</th>
                  <th className="py-1 pr-3">O(1)</th>
                  <th className="py-1 pr-3">O(log n)</th>
                  <th className="py-1 pr-3">O(n)</th>
                  <th className="py-1 pr-3">O(n log n)</th>
                  <th className="py-1">O(n²)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.n} className="border-b border-border/50">
                    <td className="py-1 pr-3 font-bold text-accent">{r.n.toLocaleString()}</td>
                    <td className="py-1 pr-3 text-ok">{r.constant}</td>
                    <td className="py-1 pr-3 text-ok">{r.log}</td>
                    <td className="py-1 pr-3">{r.linear.toLocaleString()}</td>
                    <td className="py-1 pr-3 text-warn">{r.nlogn.toLocaleString()}</td>
                    <td className="py-1 text-err">{r.quadratic.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="border-t border-border px-3 py-2 text-sm text-muted">
        {T({
          en: 'The mental model: do not time code — COUNT its decisions per input element. Loops add, nesting multiplies, halving divides.',
          bn: 'মানসিক মডেল: কোডের সময় মাপবেন না — ইনপুট-উপাদানপ্রতি তার সিদ্ধান্ত গুনুন। লুপ যোগ করে, নেস্টিং গুণ করে, অর্ধেক-করা ভাগ করে।',
        })}
      </p>
    </div>
  );
}
