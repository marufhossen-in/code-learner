import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { cacheSteps, C_SCENES, LINE, CAP, type CacheScene, type CStep, type VaultCell } from './cacheSim';

/** The Vault Tribunal: eleven references knock on a three-seat residence, and one eviction
 *  law presides. LRU moves the touched to the head, FIFO reads only arrival stamps, LFU counts
 *  oaths, and the TTL undertaker sweeps graves before judging. Watch the reference line, the
 *  vault strip and the counter ledger until the final seating matches your own prediction. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENE_LIST: { id: CacheScene }[] = [
  { id: 'lru' },
  { id: 'fifo' },
  { id: 'lfu' },
  { id: 'ttl' },
];

type Outcome = CStep['outcome'];

const OUTCOME_STYLE: Record<Outcome, { cls: string; en: string; bn: string; icon: string }> = {
  hit: { cls: 'border-emerald-500/70 bg-emerald-500/15 text-emerald-300', en: 'HIT', bn: 'হিট', icon: '✦' },
  insert: { cls: 'border-sky-500/70 bg-sky-500/15 text-sky-300', en: 'INSERT', bn: 'প্রবেশ', icon: '⇒' },
  evict: { cls: 'border-rose-500/70 bg-rose-500/15 text-rose-300', en: 'EVICT', bn: 'বহিষ্কার', icon: '⚖' },
  reclaim: { cls: 'border-amber-500/70 bg-amber-500/15 text-amber-300', en: 'RECLAIM', bn: 'কবর-ঝাড়ু', icon: '🪦' },
  phantom: { cls: 'border-violet-500/70 bg-violet-500/15 text-violet-300', en: 'PHANTOM', bn: 'ফ্যান্টম', icon: '👻' },
};

const META_LABEL: Record<CacheScene, { en: string; bn: string }> = {
  lru: { en: 'recency: head = freshest', bn: 'সতেজতা: মাথা = সবচেয়ে নব' },
  fifo: { en: 'arrival stamp aⁿ', bn: 'আগমন-সিল aⁿ' },
  lfu: { en: 'oath count ×n', bn: 'শপথ-গণনা ×n' },
  ttl: { en: 'lease deadline dˢ', bn: 'লিজ-মেয়াদ dˢ' },
};

function VaultSlot({ cell, pos, T }: { cell: VaultCell | null; pos: number; T: (p: { en: string; bn: string }) => string }) {
  const posLabel = [
    { en: 'head · newest', bn: 'মাথা · নবতম' },
    { en: 'mid', bn: 'মাঝ' },
    { en: 'tail · next out', bn: 'লেজ · পরের বলি' },
  ][pos];
  if (!cell) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-edge/60 bg-panel/20 px-3 py-3 opacity-50">
        <span className="font-mono text-lg text-muted">∅</span>
        <span className="mt-1 text-[10px] uppercase tracking-wide text-muted">{T({ en: 'open grave', bn: 'খোলা কবর' })}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-500/50 bg-cyan-500/10 px-3 py-3">
      <span className="font-mono text-xl font-bold text-fg">{cell.k}</span>
      {cell.meta && <span className="mt-0.5 font-mono text-[10px] text-cyan-300/90">{cell.meta}</span>}
      <span className="mt-1 text-[10px] uppercase tracking-wide text-muted">{T(posLabel)}</span>
    </div>
  );
}

export function CacheLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<CacheScene>('lru');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => cacheSteps(scene), [scene]);
  const step: CStep = steps[Math.min(i, steps.length - 1)];
  const oc = OUTCOME_STYLE[step.outcome];

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

  const vaultCells: (VaultCell | null)[] = Array.from({ length: CAP }, (_, idx) => step.vault[idx] ?? null);
  const hitRate = step.i > 0 ? Math.round((step.hits / step.i) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* scene rail */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="eviction laws">
        {SCENE_LIST.map(({ id }) => (
          <button
            key={id}
            role="tab"
            aria-selected={scene === id}
            onClick={() => { setScene(id); reset(); }}
            className={`${chip} ${scene === id ? 'border-accent bg-accent/15 text-fg' : 'border-edge text-muted hover:text-fg'}`}
          >
            {T(C_SCENES[id].title)}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted">{T(C_SCENES[scene].arc)}</p>

      {/* controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setPlaying((p) => !p)}
          className={`${chip} ${playing ? 'border-amber-500/60 bg-amber-500/15 text-amber-400' : 'border-emerald-500/60 bg-emerald-500/15 text-emerald-400'}`}
        >
          {playing ? T({ en: '⏸ pause', bn: '⏸ বিরতি' }) : T({ en: '▶ play', bn: '▶ চালান' })}
        </button>
        <button
          onClick={() => { setPlaying(false); setI((v) => Math.max(0, v - 1)); }}
          disabled={i === 0}
          className={`${chip} border-edge text-muted hover:text-fg disabled:opacity-40`}
        >
          ◀ {T({ en: 'back', bn: 'পেছনে' })}
        </button>
        <button
          onClick={() => { setPlaying(false); setI((v) => Math.min(steps.length - 1, v + 1)); }}
          disabled={i >= steps.length - 1}
          className={`${chip} border-edge text-muted hover:text-fg disabled:opacity-40`}
        >
          ▶ {T({ en: 'step', bn: 'ধাপ' })}
        </button>
        <button onClick={reset} className={`${chip} border-edge text-muted hover:text-fg`}>
          ⟲ {T({ en: 'reset', bn: 'রিসেট' })}
        </button>
        <span className={`${chip} border-edge text-muted cursor-default`}>
          {i + 1}/{steps.length}
        </span>
      </div>

      {/* the reference line — eleven knocks at the vault */}
      <div className="rounded-xl border border-edge bg-panel/60 p-3">
        <div className="mb-2 text-[10px] uppercase tracking-wide text-muted">
          {T({ en: 'reference line', bn: 'রেফারেন্স-সারি' })}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {LINE.map((k, idx) => {
            const done = idx < i;
            const now = idx === i;
            return (
              <span
                key={idx}
                className={`flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-sm font-bold transition ${
                  now
                    ? 'border-accent bg-accent/20 text-fg ring-2 ring-accent/40'
                    : done
                      ? 'border-edge/60 bg-panel/40 text-muted line-through decoration-2'
                      : 'border-edge bg-panel/60 text-fg/70'
                }`}
              >
                {k}
              </span>
            );
          })}
        </div>
      </div>

      {/* the tribunal jumbotron */}
      <div className="rounded-xl border border-edge bg-panel/60 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`${chip} cursor-default font-bold ${oc.cls}`}>
            {oc.icon} {T({ en: oc.en, bn: oc.bn })}
          </span>
          <span className={`${chip} cursor-default border-edge text-fg`}>
            {T({ en: 'ref', bn: 'রেফ' })} #{step.i} → {step.key}
          </span>
          {step.victim && (
            <span className={`${chip} cursor-default border-rose-500/60 bg-rose-500/10 text-rose-300`}>
              {T({ en: 'victim', bn: 'বলি' })}: {step.victim}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-fg/90">{T(step.msg)}</p>
      </div>

      {/* the vault strip — three seats under the law */}
      <div className="rounded-xl border border-edge bg-panel/60 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wide text-muted">
            {T({ en: 'the vault (3 seats)', bn: 'তিজোরি (৩টি আসন)' })}
          </span>
          <span className="text-[10px] text-muted">{T(META_LABEL[scene])}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {vaultCells.map((c, idx) => (
            <VaultSlot key={idx} cell={c} pos={idx} T={T} />
          ))}
        </div>
      </div>

      {/* the counter ledger */}
      <div className="flex flex-wrap gap-2">
        <span className={`${chip} cursor-default border-emerald-500/50 bg-emerald-500/10 text-emerald-300`}>
          ✦ {T({ en: 'hits', bn: 'হিট' })}: {step.hits}
        </span>
        <span className={`${chip} cursor-default border-rose-500/50 bg-rose-500/10 text-rose-300`}>
          ✗ {T({ en: 'misses', bn: 'মিস' })}: {step.misses}
        </span>
        <span className={`${chip} cursor-default border-amber-500/50 bg-amber-500/10 text-amber-300`}>
          🪦 {T({ en: 'reclaims', bn: 'কবর-ঝাড়ু' })}: {step.reclaims}
        </span>
        <span className={`${chip} cursor-default border-violet-500/50 bg-violet-500/10 text-violet-300`}>
          ⚖ {T({ en: 'evictions', bn: 'বহিষ্কার' })}: {step.evicts}
        </span>
        {step.phantoms > 0 && (
          <span className={`${chip} cursor-default border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-300`}>
            👻 {T({ en: 'phantoms', bn: 'ফ্যান্টম' })}: {step.phantoms}
          </span>
        )}
        <span className={`${chip} cursor-default border-accent/50 bg-accent/10 text-fg`}>
          {T({ en: 'hit-rate', bn: 'হিট-হার' })}: {hitRate}%
        </span>
      </div>

      <p className="text-xs text-muted">
        {T({
          en: 'Same eleven references, four laws, four fates. LRU keeps 2 alive, FIFO only 1 — a law that ignores use forgets what matters. LFU remembers A forever; the undertaker frees graves for free and executes the living only when it must.',
          bn: 'একই এগারো রেফারেন্স, চার বিধান, চার ভাগ্য। LRU বাঁচিয়ে রাখে ২টি, FIFO মাত্র ১টি — ব্যবহার উপেক্ষা করা বিধান গুরুত্বপূর্ণটাই ভুলে যায়। LFU A-কে চিরকাল মনে রাখে; কবরখেকো কবর ফাঁকা করে বিনামূল্যে, জীবিতকে মারে শুধু বাধ্য হলে।',
        })}
      </p>
    </div>
  );
}
