import { useEffect, useMemo, useState } from 'react';
import { REST_LAWS, restSteps, type RestLaw, type RestVerdict } from './restSim';
import { useI18n } from '../../lib/i18n';

/** REST lab — The Endpoint Docket. One fixed 10-beat workload, four API-design laws,
 * seven counters: the ledger shows exactly what each dialect buys and wastes. */

const LAW_CLS: Record<RestLaw, string> = {
  rpc: 'border-rose-400/50 text-rose-300',
  naive: 'border-amber-400/50 text-amber-300',
  pure: 'border-emerald-400/50 text-emerald-300',
  hyper: 'border-sky-400/50 text-sky-300',
};
const LAW_DOT: Record<RestLaw, string> = {
  rpc: 'bg-rose-400', naive: 'bg-amber-400', pure: 'bg-emerald-400', hyper: 'bg-sky-400',
};

const VERDICT_CLS: Record<RestVerdict, string> = {
  clean: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  deduped: 'border-teal-400/40 bg-teal-400/10 text-teal-300',
  'rpc-envelope': 'border-rose-400/40 bg-rose-400/10 text-rose-300',
  verbed: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  'status-lie': 'border-amber-400/50 bg-amber-400/15 text-amber-200',
  'wrong-method': 'border-rose-400/40 bg-rose-400/10 text-rose-300',
  'semantics-bent': 'border-orange-400/40 bg-orange-400/10 text-orange-300',
  'unsafe-get': 'border-red-500/50 bg-red-500/15 text-red-300',
  overfetch: 'border-orange-400/40 bg-orange-400/10 text-orange-300',
  underfetch: 'border-indigo-400/40 bg-indigo-400/10 text-indigo-300',
  'dup-write': 'border-red-500/50 bg-red-500/15 text-red-200',
};

const STATUS_CLS = (s: number) =>
  s >= 500 ? 'text-rose-300' : s >= 400 ? 'text-amber-300' : s >= 300 ? 'text-sky-300' : 'text-emerald-300';

export function RestLab() {
  const { T } = useI18n();
  const [law, setLaw] = useState<RestLaw>('naive');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => restSteps(law), [law]);
  const step = steps[i];
  const done = i === steps.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (done) { setPlaying(false); return; }
    const t = setTimeout(() => setI((v) => Math.min(v + 1, steps.length - 1)), 1400);
    return () => clearTimeout(t);
  }, [playing, i, done, steps.length]);

  const pick = (l: RestLaw) => { setLaw(l); setI(0); setPlaying(false); };

  const counters: { label: string; labelBn: string; value: number; max?: number }[] = [
    { label: 'calls', labelBn: 'ডাক', value: step.calls, max: 11 },
    { label: 'overfetch KB', labelBn: 'অতি-ফেচ KB', value: step.overBytes, max: 32 },
    { label: 'verbed URIs', labelBn: 'ক্রিয়ামিশ্রিত URI', value: step.verbed, max: 10 },
    { label: 'status lies', labelBn: 'স্ট্যাটাস-মিথ্যা', value: step.wrongStatuses, max: 3 },
    { label: 'dup writes', labelBn: 'দ্বৈত-লেখা', value: step.dups, max: 1 },
    { label: 'cache forfeits', labelBn: 'ক্যাশ-ত্যাগ', value: step.cacheForfeits, max: 5 },
    { label: 'links served', labelBn: 'পরিবেশিত লিংক', value: step.links, max: 10 },
  ];

  return (
    <div className="rounded-xl border border-edge bg-panel p-4 text-muted" role="region"
      aria-label={T({ en: 'REST endpoint docket lab', bn: 'REST এন্ডপয়েন্ট-ডকেট ল্যাব' })}>
      {/* law rail */}
      <div className="mb-3 flex flex-wrap gap-1.5" role="tablist" aria-label={T({ en: 'client law', bn: 'ক্লায়েন্ট-বিধান' })}>
        {REST_LAWS.map((l) => (
          <button key={l.id} role="tab" aria-selected={law === l.id} onClick={() => pick(l.id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              law === l.id ? `${LAW_CLS[l.id]} bg-white/5` : 'border-edge hover:bg-white/5'}`}>
            {T(l.name)}
          </button>
        ))}
      </div>
      <p className="mb-3 text-xs leading-5">{T(REST_LAWS.find((l) => l.id === law)!.brief)}</p>

      {/* transport */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <button onClick={() => { setPlaying(false); setI((v) => Math.max(0, v - 1)); }} disabled={i === 0}
          className="rounded-md border border-edge px-2.5 py-1 text-xs disabled:opacity-40" aria-label={T({ en: 'previous beat', bn: 'পূর্ববর্তী ছন্দ' })}>←</button>
        <button onClick={() => setPlaying((p) => !p)} disabled={done && !playing}
          className="rounded-md border border-edge px-2.5 py-1 text-xs disabled:opacity-40">
          {playing ? '⏸' : '▶'} {T({ en: 'play', bn: 'চালান' })}
        </button>
        <button onClick={() => { setPlaying(false); setI((v) => Math.min(v + 1, steps.length - 1)); }} disabled={done}
          className="rounded-md border border-edge px-2.5 py-1 text-xs disabled:opacity-40" aria-label={T({ en: 'next beat', bn: 'পরবর্তী ছন্দ' })}>→</button>
        <button onClick={() => { setPlaying(false); setI(0); }}
          className="rounded-md border border-edge px-2.5 py-1 text-xs">⟲ {T({ en: 'reset', bn: 'রিসেট' })}</button>
        <span className="ml-2 font-mono text-xs">beat {i + 1}/10</span>
      </div>

      {/* fate-line strip */}
      <div className="mb-4 flex flex-wrap gap-1" role="list" aria-label={T({ en: 'docket fate line', bn: 'ডকেট নিয়তি-রেখা' })}>
        {steps.map((s, k) => (
          <button key={s.beat.i} role="listitem" onClick={() => { setPlaying(false); setI(k); }}
            aria-label={T({ en: `beat ${s.beat.i}: ${s.verdict}`, bn: `ছন্দ ${s.beat.i}: ${s.verdict}` })}
            className={`h-7 w-7 rounded-md border font-mono text-[10px] font-bold transition ${VERDICT_CLS[s.verdict]} ${
              k === i ? 'ring-2 ring-white/60' : k > i ? 'opacity-35' : ''}`}>
            {s.beat.i}
          </button>
        ))}
      </div>

      {/* the two envelopes */}
      <div className="mb-3 grid gap-3 md:grid-cols-2">
        <div className={`rounded-lg border p-3 ${LAW_CLS[law]}`}>
          <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide">
            <span className={`h-2 w-2 rounded-full ${LAW_DOT[law]}`} />
            {T({ en: 'what the law sends', bn: 'বিধান যা পাঠায়' })}
          </div>
          <p className="font-mono text-xs leading-5 text-white/90">{step.request}</p>
          <p className="mt-1 text-[11px] leading-4 text-muted">
            {T({ en: 'grammar school:', bn: 'ব্যাকরণ-পাঠশালা:' })} <span className="font-mono">{step.beat.ideal}</span>
          </p>
        </div>
        <div className="rounded-lg border border-edge bg-black/20 p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide">
            {T({ en: 'what comes back', bn: 'যা ফিরে আসে' })}
          </div>
          <p className={`font-mono text-sm font-bold ${STATUS_CLS(step.status)}`}>{step.status}
            {step.status !== step.honestStatus && (
              <span className="ml-2 text-xs font-semibold text-amber-300">
                ⚠ {T({ en: `honest: ${step.honestStatus}`, bn: `সৎ: ${step.honestStatus}` })}
              </span>
            )}
          </p>
          <p className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[10px] font-bold ${VERDICT_CLS[step.verdict]}`}>
            {step.verdict}
          </p>
        </div>
      </div>

      <p className="mb-3 text-xs leading-5">
        <span className="font-semibold text-white/80">{T({ en: 'op: ', bn: 'কাজ: ' })}</span>{T(step.beat.op)}
        {' — '}{step.note}
      </p>

      {/* ledger grid */}
      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-7">
        {counters.map((c) => (
          <div key={c.label} className="rounded-lg border border-edge bg-black/20 px-2 py-1.5 text-center"
            title={T({ en: c.label, bn: c.labelBn })}>
            <div className={`font-mono text-sm font-bold ${c.value > 0 ? (c.label === 'links served' ? 'text-sky-300' : 'text-amber-300') : 'text-white/60'}`}>
              {c.value}
            </div>
            <div className="text-[9px] uppercase tracking-wide">{T({ en: c.label, bn: c.labelBn })}</div>
          </div>
        ))}
      </div>
      {done && (
        <p className="mt-3 rounded-lg border border-edge bg-black/20 px-3 py-2 text-xs leading-5">
          {law === 'pure' && T({ en: 'Ledger closed: the grammar school paid protocol prices for everything and waste for nothing — the retry cost zero orders.', bn: 'খাতা বন্ধ: ব্যাকরণ-পাঠশালা প্রোটোকল-মূল্য সব কিছুর দিয়েছে আর অপচয়ের কিছুই নয় — রিট্রাইয়ের মূল্য শূন্য অর্ডার।' })}
          {law === 'hyper' && T({ en: 'Ledger closed: same bill as the grammarian, plus 10 links — the API now names its own next steps; clients hardcode nothing but the front door.', bn: 'খাতা বন্ধ: ব্যাকরণবিদের বিলই, সঙ্গে 10টি লিংক — API এখন নাম হয় নিজের পরের পদক্ষেপের; ক্লায়েন্ট কঠোরকোড করে কেবল প্রবেশদ্বার।' })}
          {law === 'naive' && T({ en: 'Ledger closed: 8 KB of waste, 3 URI verbs, 3 status lies, 1 duplicate order, 1 armed GET, and one extra call still owed. Improvisation is a loan shark.', bn: 'খাতা বন্ধ: 8 KB অপচয়, 3টি ক্রিয়ামিশ্রিত URI, 3টি স্ট্যাটাস-মিথ্যা, 1টি দ্বৈত-অর্ডার, 1টি সজ্জিত GET, আর একটি অতিরিক্ত ডাক বাকি রইল। উদ্ভাবন এক কড়া সুদকর।' })}
          {law === 'rpc' && T({ en: 'Ledger closed: 32 KB of waste, verbless URIs everywhere, 5 cacheable answers cremated, 1 duplicate order — and intermediaries understood nothing at all.', bn: 'খাতা বন্ধ: 32 KB অপচয়, সর্বত্র ক্রিয়াহীন URI, 5টি ক্যাশযোগ্য-উত্তর দহনকৃত, 1টি দ্বৈত-অর্ডার — আর মধ্যস্থরা একদমই কিছু বুঝল না।' })}
        </p>
      )}
    </div>
  );
}
