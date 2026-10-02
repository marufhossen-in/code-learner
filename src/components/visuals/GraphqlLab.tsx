import { useEffect, useMemo, useState } from 'react';
import { GQL_LAWS, gqlSteps, type GqlLaw, type GqlVerdict } from './graphqlSim';
import { useI18n } from '../../lib/i18n';

/** GraphQL lab — The Query Docket. One fixed 8-beat session, four resolution laws,
 * seven counters: the ledger shows exactly what batching, budgets and shelves buy. */

const LAW_CLS: Record<GqlLaw, string> = {
  naive: 'border-rose-400/50 text-rose-300',
  batched: 'border-amber-400/50 text-amber-300',
  budgeted: 'border-emerald-400/50 text-emerald-300',
  cached: 'border-sky-400/50 text-sky-300',
};
const LAW_DOT: Record<GqlLaw, string> = {
  naive: 'bg-rose-400', batched: 'bg-amber-400', budgeted: 'bg-emerald-400', cached: 'bg-sky-400',
};

const VERDICT_CLS: Record<GqlVerdict, string> = {
  resolved: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  'n-plus-one': 'border-rose-400/40 bg-rose-400/10 text-rose-300',
  batched: 'border-teal-400/40 bg-teal-400/10 text-teal-300',
  'cache-hit': 'border-sky-400/40 bg-sky-400/10 text-sky-300',
  'depth-bomb-executed': 'border-red-500/50 bg-red-500/15 text-red-200',
  rejected: 'border-green-500/50 bg-green-500/15 text-green-300',
  'partial-error': 'border-indigo-400/40 bg-indigo-400/10 text-indigo-300',
  'anonymous-op': 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  'named-op': 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
  persisted: 'border-violet-400/40 bg-violet-400/10 text-violet-300',
};

export function GraphqlLab() {
  const { T } = useI18n();
  const [law, setLaw] = useState<GqlLaw>('naive');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => gqlSteps(law), [law]);
  const step = steps[i];
  const done = i === steps.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (done) { setPlaying(false); return; }
    const t = setTimeout(() => setI((v) => Math.min(v + 1, steps.length - 1)), 1500);
    return () => clearTimeout(t);
  }, [playing, i, done, steps.length]);

  const pick = (l: GqlLaw) => { setLaw(l); setI(0); setPlaying(false); };

  const counters: { label: string; labelBn: string; value: number; max: number; good?: boolean }[] = [
    { label: 'db queries', labelBn: 'db প্রশ্ন', value: step.dbQueries, max: 537 },
    { label: 'cache hits', labelBn: 'ক্যাশ-হিট', value: step.cacheHits, max: 2, good: true },
    { label: 'rejected', labelBn: 'প্রত্যাখ্যাত', value: step.rejected, max: 1, good: true },
    { label: 'named ops', labelBn: 'নামকৃত-অপ', value: step.namedOps, max: 1, good: true },
    { label: 'partial errors', labelBn: 'আংশিক-ত্রুটি', value: step.partialErrors, max: 1 },
    { label: 'bytes sent', labelBn: 'প্রেরিত বাইট', value: step.bytesSent, max: 1350 },
    { label: 'max depth', labelBn: 'সর্বোচ্চ গভীরতা', value: step.maxDepth, max: 8 },
  ];

  return (
    <div className="rounded-xl border border-edge bg-panel p-4 text-muted" role="region"
      aria-label={T({ en: 'GraphQL query docket lab', bn: 'GraphQL কোয়েরি-ডকেট ল্যাব' })}>
      {/* law rail */}
      <div className="mb-3 flex flex-wrap gap-1.5" role="tablist" aria-label={T({ en: 'resolution law', bn: 'রেজোলিউশন-বিধান' })}>
        {GQL_LAWS.map((l) => (
          <button key={l.id} role="tab" aria-selected={law === l.id} onClick={() => pick(l.id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              law === l.id ? `${LAW_CLS[l.id]} bg-white/5` : 'border-edge hover:bg-white/5'}`}>
            {T(l.name)}
          </button>
        ))}
      </div>
      <p className="mb-3 text-xs leading-5">{T(GQL_LAWS.find((l) => l.id === law)!.brief)}</p>

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
      <div className="mb-4 flex flex-wrap gap-1" role="list" aria-label={T({ en: 'session fate line', bn: 'সেশন নিয়তি-রেখা' })}>
        {steps.map((s, k) => (
          <button key={s.beat.i} role="listitem" onClick={() => { setPlaying(false); setI(k); }}
            aria-label={T({ en: `beat ${s.beat.i}: ${s.verdict}`, bn: `ছন্দ ${s.beat.i}: ${s.verdict}` })}
            className={`h-7 w-7 rounded-md border font-mono text-[10px] font-bold transition ${VERDICT_CLS[s.verdict]} ${
              k === i ? 'ring-2 ring-white/60' : k > i ? 'opacity-35' : ''}`}>
            {s.beat.i}
          </button>
        ))}
      </div>

      {/* the query + the gate */}
      <div className="mb-3 grid gap-3 md:grid-cols-2">
        <div className={`rounded-lg border p-3 ${LAW_CLS[law]}`}>
          <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide">
            <span className={`h-2 w-2 rounded-full ${LAW_DOT[law]}`} />
            {T({ en: 'what the client asks', bn: 'ক্লায়েন্ট যা চায়' })}
          </div>
          <p className="font-mono text-xs leading-5 text-white/90">{step.beat.query}</p>
          <p className="mt-1 text-[11px] leading-4 text-muted">{T(step.beat.op)}</p>
        </div>
        <div className="rounded-lg border border-edge bg-black/20 p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide">
            {T({ en: 'what the server spends', bn: 'সার্ভার যা খরচ করে' })}
          </div>
          <p className="font-mono text-sm font-bold text-white/90">
            {step.dbQueriesThisBeat} <span className="text-xs font-semibold text-muted">{T({ en: 'db queries', bn: 'db প্রশ্ন' })}</span>
            <span className="ml-3 text-xs font-semibold text-muted">{step.bytesThisBeat} B {T({ en: 'on the wire', bn: 'তারে' })}</span>
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
          {law === 'naive' && T({ en: 'Ledger closed: 537 database queries for a dashboard — 510 of them fired by a stranger’s depth bomb nobody rejected. Honest resolvers, blind gate: the forager pays for every field in person.', bn: 'খাতা বন্ধ: একটি ড্যাশবোর্ডের জন্য 537টি ডেটাবেস-প্রশ্ন — তার 510টি ছড়িয়েছে এক অপরিচিতের গভীরতা-বোমা, যা কেউ প্রত্যাখ্যান করেনি। সৎ রিসলভার, অন্ধ ফাটক: তৃণভোজী প্রতি ক্ষেত্রের মূল্য দেয় নিজ-হাতে।' })}
          {law === 'batched' && T({ en: 'Ledger closed: 23 queries — DataLoader collapsed the cascade honestly. But the gate stayed blind: the bomb still executed (8 queries), the wire still carried 1,350 bytes of full text, and beat 7 is still anonymous.', bn: 'খাতা বন্ধ: 23টি প্রশ্ন — DataLoader ক্যাসকেড সৎভাবে ভেঙেছে। কিন্তু ফাটক ছিল অন্ধ: বোমাটি তবু কার্যকর (৮টি প্রশ্ন), তারে তবু 1,350 বাইট পূর্ণ-পাঠ্য, আর ৭ ছন্দ তবু নামহীন।' })}
          {law === 'budgeted' && T({ en: 'Ledger closed: 15 queries, 160 bytes, one bomb dead at the gate, one operation with a name. The only instrument missing is memory — the librarian answers the repeat question for free.', bn: 'খাতা বন্ধ: 15টি প্রশ্ন, 160 বাইট, একটি বোমা নিহত ফাটকেই, একটি অপারেশন নামধারী। একমাত্র অনুপস্থিত যন্ত্র হলো স্মৃতি — গ্রন্থাগারিক পুনরাবৃত-প্রশ্নের উত্তর দেয় বিনামূল্যে।' })}
          {law === 'cached' && T({ en: 'Ledger closed: 9 queries total, two shelf hits, one bomb rejected, full observability. The trust budget at the gate plus memory on the shelf — the dashboard is almost free to serve.', bn: 'খাতা বন্ধ: মোট 9টি প্রশ্ন, দুটি তাক-হিট, একটি বোমা প্রত্যাখ্যাত, পূর্ণ পর্যবেক্ষণ। ফাটকে বিশ্বাস-বাজেট আর তাকে স্মৃতি — ড্যাশবোর্ড পরিবেশন প্রায় বিনামূল্যা।' })}
        </p>
      )}
    </div>
  );
}
