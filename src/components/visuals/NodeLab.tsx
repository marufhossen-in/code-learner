import { useEffect, useMemo, useState } from 'react';
import { NODE_LAWS, nodeSteps, type NodeLaw, type NodeVerdict } from './nodeSim';
import { useI18n } from '../../lib/i18n';

/** Node lab — The Loop Docket. One fixed 8-beat traffic docket, four runtime disciplines,
 * seven counters: the ledger shows exactly what async discipline, middleware vows and
 * pacing buy — and what survives them. */

const LAW_CLS: Record<NodeLaw, string> = {
  blocker: 'border-rose-400/50 text-rose-300',
  careless: 'border-amber-400/50 text-amber-300',
  chained: 'border-emerald-400/50 text-emerald-300',
  streamed: 'border-sky-400/50 text-sky-300',
};
const LAW_DOT: Record<NodeLaw, string> = {
  blocker: 'bg-rose-400', careless: 'bg-amber-400', chained: 'bg-emerald-400', streamed: 'bg-sky-400',
};

const VERDICT_CLS: Record<NodeVerdict, string> = {
  served: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  blocked: 'border-rose-400/40 bg-rose-400/10 text-rose-300',
  buffered: 'border-red-500/50 bg-red-500/15 text-red-200',
  streamed: 'border-sky-400/40 bg-sky-400/10 text-sky-300',
  'worker-offloaded': 'border-violet-400/40 bg-violet-400/10 text-violet-300',
  'error-propagated': 'border-green-500/50 bg-green-500/15 text-green-300',
  hung: 'border-orange-500/50 bg-orange-500/15 text-orange-300',
  swallowed: 'border-red-500/50 bg-red-500/15 text-red-200',
  crashed: 'border-red-500/60 bg-red-500/20 text-red-100',
  refused: 'border-zinc-400/40 bg-zinc-400/10 text-zinc-300',
  queued: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  'load-shed': 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
};

export function NodeLab() {
  const { T } = useI18n();
  const [law, setLaw] = useState<NodeLaw>('blocker');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => nodeSteps(law), [law]);
  const step = steps[i];
  const done = i === steps.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (done) { setPlaying(false); return; }
    const t = setTimeout(() => setI((v) => Math.min(v + 1, steps.length - 1)), 1500);
    return () => clearTimeout(t);
  }, [playing, i, done, steps.length]);

  const pick = (l: NodeLaw) => { setLaw(l); setI(0); setPlaying(false); };

  const counters: { label: string; labelBn: string; value: number; max: number; good?: boolean }[] = [
    { label: 'loop stall ms', labelBn: 'লুপ-স্থবিরতা ms', value: step.blockedMs, max: 20408 },
    { label: 'max latency ms', labelBn: 'সর্বোচ্চ লেটেন্সি ms', value: step.maxLatencyMs, max: 30000 },
    { label: 'hung requests', labelBn: 'ঝুলন্ত অনুরোধ', value: step.hungRequests, max: 51 },
    { label: 'swallowed errors', labelBn: 'গিলে-ফেলা ত্রুটি', value: step.swallowedErrors, max: 2 },
    { label: 'error-home hits', labelBn: 'ত্রুটি-বাসা-হিট', value: step.errorHandlerHits, max: 2, good: true },
    { label: 'memory peak MB', labelBn: 'স্মৃতি-শিখর MB', value: step.memoryPeakMB, max: 90 },
    { label: 'throughput rps', labelBn: 'থ্রুপুট rps', value: step.throughputRps, max: 19, good: true },
  ];

  return (
    <div className="rounded-xl border border-edge bg-panel p-4 text-muted" role="region"
      aria-label={T({ en: 'Node loop docket lab', bn: 'Node লুপ-ডকেট ল্যাব' })}>
      {/* law rail */}
      <div className="mb-3 flex flex-wrap gap-1.5" role="tablist" aria-label={T({ en: 'runtime discipline', bn: 'রানটাইম-শৃঙ্খলা' })}>
        {NODE_LAWS.map((l) => (
          <button key={l.id} role="tab" aria-selected={law === l.id} onClick={() => pick(l.id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              law === l.id ? `${LAW_CLS[l.id]} bg-white/5` : 'border-edge hover:bg-white/5'}`}>
            {T(l.name)}
          </button>
        ))}
      </div>
      <p className="mb-3 text-xs leading-5">{T(NODE_LAWS.find((l) => l.id === law)!.brief)}</p>

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
        <span className="ml-2 font-mono text-xs">beat {i + 1}/8</span>
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

      {/* the request + what the runtime spends */}
      <div className="mb-3 grid gap-3 md:grid-cols-2">
        <div className={`rounded-lg border p-3 ${LAW_CLS[law]}`}>
          <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide">
            <span className={`h-2 w-2 rounded-full ${LAW_DOT[law]}`} />
            {T({ en: 'what the client asks', bn: 'ক্লায়েন্ট যা চায়' })}
          </div>
          <p className="font-mono text-xs leading-5 text-white/90">{step.beat.route}</p>
          <p className="mt-1 text-[11px] leading-4 text-muted">{T(step.beat.op)}</p>
        </div>
        <div className="rounded-lg border border-edge bg-black/20 p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide">
            {T({ en: 'what the runtime pays', bn: 'রানটাইম যা খরচ করে' })}
          </div>
          <p className="font-mono text-sm font-bold text-white/90">
            {step.blockedMsThisBeat} <span className="text-xs font-semibold text-muted">{T({ en: 'ms stall', bn: 'ms স্থবিরতা' })}</span>
            <span className="ml-3 text-xs font-semibold text-muted">{step.latencyMsThisBeat} ms {T({ en: 'client wait', bn: 'ক্লায়েন্ট-প্রতীক্ষা' })}</span>
          </p>
          <p className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[10px] font-bold ${VERDICT_CLS[step.verdict]}`}>
            {step.verdict}
          </p>
        </div>
      </div>

      <p className="mb-3 text-xs leading-5">{step.note}</p>

      {/* ledger grid */}
      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-7">
        {counters.map((c) => (
          <div key={c.label} className="rounded-lg border border-edge bg-black/20 px-2 py-1.5 text-center"
            title={T({ en: c.label, bn: c.labelBn })}>
            <div className={`font-mono text-sm font-bold ${
              c.good && c.value > 0 ? 'text-emerald-300' : c.value > 0 ? 'text-amber-300' : 'text-white/60'}`}>
              {c.value}
            </div>
            <div className="text-[9px] uppercase tracking-wide">{T({ en: c.label, bn: c.labelBn })}</div>
          </div>
        ))}
      </div>
      {done && (
        <p className="mt-3 rounded-lg border border-edge bg-black/20 px-3 py-2 text-xs leading-5">
          {law === 'blocker' && T({ en: 'Ledger closed: 898ms of hostage loop, then one async throw killed the whole process — 51 clients starved, 0 rps at the end. The sync school pays every request in person and leaves the register unattended.', bn: 'খাতা বন্ধ: 898ms জিম্মি-লুপ, তারপর একটি async ছোঁড়া-ত্রুটি পুরো প্রসেস মেরে ফেলল — 51 ক্লায়েন্ট অনাহারী, শেষে 0 rps। সিঙ্ক-শিক্ষা প্রতি অনুরোধের মূল্য দেয় নিজ-হাতে, আর রওকদারি-ঘর ফাঁকা রেখে যায়।' })}
          {law === 'careless' && T({ en: 'Ledger closed: the libuv pool saved beat 2, but two unwitnessed rejections hung two sockets to 30s timeouts, and the 20s burst bill still landed in full. A promise is only as good as the .catch wired to it — or the wrapper that does it for you.', bn: 'খাতা বন্ধ: libuv-পুল বাঁচাল ছন্দ 2, কিন্তু দুটি অপ্রত্যক্ষ রিজেকশন দুই সকেট ঝুলিয়ে রাখল 30 সেকেন্ড-টাইমআউট পর্যন্ত, আর 20-সেকেন্ডের বিস্ফোরণ-বিল এল পুরোপুরি। প্রতিশ্রুতি ততটুকুই ভালো, যতটুকু তার সাথে .catch জোড়া — বা সেই মোড়ক, যা নিজেই জুড়ে দেয়।' })}
          {law === 'chained' && T({ en: 'Ledger closed: zero hangs, zero swallowed truths — both errors landed in the one 4-arg home. But the ledger is honest: the chain bought survival, not speed. 50×400ms still totals a 20-second queue.', bn: 'খাতা বন্ধ: শূন্য ঝুলন্ত-অনুরোধ, শূন্য গিলে-ফেলা সত্য — দুই ত্রুটিই নামল এক 4-আর্গ বাসায়। কিন্তু খাতা সৎ: শৃঙ্খল কিনল টিকে-থাকা, গতি নয়। 50×400ms তবু এক 20-সেকেন্ডের সারি।' })}
          {law === 'streamed' && T({ en: 'Ledger closed: 8ms total stall, 1600ms worst wait, memory flat at 42MB, throughput 19 rps — CPU on workers, bytes on backpressure, overflow answered with an honest 503 instead of a 20s queue. The loop kept its promise.', bn: 'খাতা বন্ধ: মোট 8ms স্থবিরতা, সবচেয়ে খারাপ প্রতীক্ষা 1600ms, স্মৃতি সমতল 42MB-তে, থ্রুপুট 19 rps — CPU ওয়ার্কারে, বাইট ব্যাকপ্রেশারে, উপচে-পড়া-চাপের উত্তর সৎ 503, 20-সেকেন্ডের সারির বদলে। লুপ তার প্রতিশ্রুতি রাখল।' })}
        </p>
      )}
    </div>
  );
}
