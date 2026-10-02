import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { dsSteps, EVENTS, DS_SCENES, type DSScene, type DStep } from './distsysSim';

/** The Partition Cathedral: three siblings — Asha, Bala, Cara — answer one fixed fate-line
 *  of six writes, eight reads and two falls of the wall, under four consistency laws.
 *  Watch the choir stall: naive learns that available everywhere means truthful nowhere;
 *  sloppy hides a ⌑ lodger the envelope may lose; majority closes doors so healing days
 *  have no duels; and the leader law runs a succession exam when the crown is stranded. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENE_LIST: { id: DSScene }[] = [{ id: 'naive' }, { id: 'sloppy' }, { id: 'majority' }, { id: 'leader' }];

const OC: Record<DStep['outcome'], { cls: string; en: string; bn: string; icon: string }> = {
  routine: { cls: 'border-edge bg-panel/40 text-muted', en: 'routine', bn: 'রুটিন', icon: '·' },
  accepted: { cls: 'border-emerald-500/70 bg-emerald-500/15 text-emerald-300', en: 'accepted', bn: 'গৃহীত', icon: '✓' },
  'stale-read': { cls: 'border-amber-500/70 bg-amber-500/15 text-amber-300', en: 'stale read', bn: 'বাসি পাঠ', icon: '🕯' },
  rejected: { cls: 'border-rose-500/70 bg-rose-500/15 text-rose-300', en: 'rejected', bn: 'প্রত্যাখ্যাত', icon: '⛔' },
  hinted: { cls: 'border-violet-500/70 bg-violet-500/15 text-violet-300', en: 'hinted ⌑', bn: 'ইঙ্গিত ⌑', icon: '✉' },
  conflict: { cls: 'border-orange-500/70 bg-orange-500/15 text-orange-300', en: 'conflict', bn: 'দ্বন্দ্ব', icon: '⚔' },
  'lost-write': { cls: 'border-rose-500/70 bg-rose-500/20 text-rose-300', en: 'lost write', bn: 'হারানো লেখা', icon: '🪦' },
  migrated: { cls: 'border-sky-500/70 bg-sky-500/15 text-sky-300', en: 'migrated', bn: 'স্থানান্তর', icon: '⇒' },
  healed: { cls: 'border-teal-500/70 bg-teal-500/15 text-teal-300', en: 'healed', bn: 'নিরামিত', icon: '✚' },
  partitioned: { cls: 'border-fuchsia-500/70 bg-fuchsia-500/15 text-fuchsia-300', en: 'partition!', bn: 'পার্টিশন!', icon: '⚡' },
  election: { cls: 'border-amber-400/70 bg-amber-400/15 text-amber-200', en: 'election', bn: 'নির্বাচন', icon: '👑' },
  'crown-held': { cls: 'border-amber-400/70 bg-amber-400/15 text-amber-200', en: 'crown held', bn: 'মুকুট ধারিত', icon: '👑' },
  'crown-moved': { cls: 'border-amber-400/70 bg-amber-400/15 text-amber-200', en: 'crown moved', bn: 'মুকুট সরে গেছে', icon: '👑' },
  'betrayed-read': { cls: 'border-red-500/70 bg-red-500/15 text-red-300', en: 'betrayed read', bn: 'বিশ্বাসঘাত-পাঠ', icon: '🗡' },
};

const EV_ICON: Record<string, string> = { W: '✍', R: '👁', F: '⚡', H: '✚', N: '§' };

const NODE_NAMES: Record<'A' | 'B' | 'C', { en: string; bn: string }> = {
  A: { en: 'Asha', bn: 'আশা' },
  B: { en: 'Bala', bn: 'বলা' },
  C: { en: 'Cara', bn: 'কারা' },
};

function NodeCard({
  id, notes, dimmed, crown, T,
}: { id: 'A' | 'B' | 'C'; notes: string[]; dimmed: boolean; crown: boolean; T: (p: { en: string; bn: string }) => string }) {
  return (
    <div
      className={`min-h-[7rem] rounded-xl border p-3 transition ${
        dimmed ? 'border-edge/50 bg-panel/20 opacity-50' : 'border-cyan-500/40 bg-cyan-500/5'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-bold text-fg">
          {id} · {T(NODE_NAMES[id])}
        </span>
        {crown && <span className="text-base" title="leader">👑</span>}
        {dimmed && <span className="text-[10px] uppercase tracking-wide text-muted">{T({ en: 'muted', bn: 'নীরব' })}</span>}
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {notes.length === 0 && <span className="text-[10px] text-muted">∅</span>}
        {notes.map((n, j) => (
          <span key={j} className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${n.includes('⌑') ? 'border-violet-500/60 bg-violet-500/15 text-violet-300' : 'border-edge bg-panel/60 text-fg/90'}`}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DistsysLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<DSScene>('naive');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => dsSteps(scene), [scene]);
  const step: DStep = steps[Math.min(i, steps.length - 1)];
  const oc = OC[step.outcome];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) { setPlaying(false); return; }
    const t = setTimeout(() => setI((v) => v + 1), 1050);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() { setI(0); setPlaying(false); }

  // on the first wall (side 'bala') A is muted while the wall stands; on the second wall
  // ('asha' semantics in events are client placements — visually mute B after i16 until heal)
  const wallUp = step.i > 4 && step.i < 9 ? 'bala' : step.i > 16 && step.i < 17 ? 'asha' : null;
  const mutedNode = wallUp === 'bala' ? 'C' : wallUp === 'asha' ? 'B' : null; // convention: the isolated sibling dims
  const evIcon = EV_ICON[step.ev.t] ?? '·';

  return (
    <div className="space-y-4">
      {/* scene rail */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="consistency laws">
        {SCENE_LIST.map(({ id }) => (
          <button key={id} role="tab" aria-selected={scene === id}
            onClick={() => { setScene(id); reset(); }}
            className={`${chip} ${scene === id ? 'border-accent bg-accent/15 text-fg' : 'border-edge text-muted hover:text-fg'}`}>
            {T(DS_SCENES[id].name)}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted">
        <span className="font-mono text-fg/70">{DS_SCENES[scene].law}</span> — {T(DS_SCENES[scene].arc)}
      </p>

      {/* controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button onClick={() => setPlaying((p) => !p)}
          className={`${chip} ${playing ? 'border-amber-500/60 bg-amber-500/15 text-amber-400' : 'border-emerald-500/60 bg-emerald-500/15 text-emerald-400'}`}>
          {playing ? T({ en: '⏸ pause', bn: '⏸ বিরতি' }) : T({ en: '▶ play', bn: '▶ চালান' })}
        </button>
        <button onClick={() => { setPlaying(false); setI((v) => Math.max(0, v - 1)); }} disabled={i === 0}
          className={`${chip} border-edge text-muted hover:text-fg disabled:opacity-40`}>◀ {T({ en: 'back', bn: 'পেছনে' })}</button>
        <button onClick={() => { setPlaying(false); setI((v) => Math.min(steps.length - 1, v + 1)); }} disabled={i >= steps.length - 1}
          className={`${chip} border-edge text-muted hover:text-fg disabled:opacity-40`}>▶ {T({ en: 'step', bn: 'ধাপ' })}</button>
        <button onClick={reset} className={`${chip} border-edge text-muted hover:text-fg`}>⟲ {T({ en: 'reset', bn: 'রিসেট' })}</button>
        <span className={`${chip} border-edge text-muted cursor-default`}>{i + 1}/{steps.length}</span>
      </div>

      {/* the fate-line */}
      <div className="rounded-xl border border-edge bg-panel/60 p-3">
        <div className="mb-2 text-[10px] uppercase tracking-wide text-muted">{T({ en: 'the fate-line', bn: 'নিয়তি-রেখা' })}</div>
        <div className="flex flex-wrap gap-1">
          {EVENTS.map((e, idx) => {
            const done = idx < i;
            const now = idx === i;
            return (
              <span key={e.beat} title={T(e.label)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-[11px] font-bold transition ${
                  now ? 'border-accent bg-accent/20 text-fg ring-2 ring-accent/40'
                    : done ? 'border-edge/60 bg-panel/40 text-muted'
                    : 'border-edge bg-panel/60 text-fg/70'
                }`}>
                {EV_ICON[e.t]}{e.key ? e.key.slice(1) : ''}
              </span>
            );
          })}
        </div>
      </div>

      {/* the choir stall */}
      <div className="rounded-xl border border-edge bg-panel/60 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`${chip} cursor-default font-bold ${oc.cls}`}>{oc.icon} {T({ en: oc.en, bn: oc.bn })}</span>
          <span className={`${chip} cursor-default border-edge text-fg`}>{evIcon} {T(step.ev.label)}</span>
          {step.leader && step.leader !== '—' && scene === 'leader' && (
            <span className={`${chip} cursor-default border-amber-400/60 bg-amber-400/10 text-amber-200`}>👑 {step.leader}</span>
          )}
          {step.note && <span className="text-xs text-amber-300/90 italic">{T(step.note)}</span>}
        </div>
        <p className="mt-2 text-sm text-fg/90">{T(step.msg)}</p>
      </div>

      {/* the three siblings */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {(['A', 'B', 'C'] as const).map((id) => (
          <NodeCard key={id} id={id} notes={step.nodes[id]}
            dimmed={mutedNode === id}
            crown={scene === 'leader' && step.leader === id}
            T={T} />
        ))}
      </div>

      {/* the ledger */}
      <div className="flex flex-wrap gap-2">
        <span className={`${chip} cursor-default border-emerald-500/50 bg-emerald-500/10 text-emerald-300`}>✍ W: {step.writes}</span>
        <span className={`${chip} cursor-default border-sky-500/50 bg-sky-500/10 text-sky-300`}>👁 R: {step.reads}</span>
        <span className={`${chip} cursor-default border-rose-500/50 bg-rose-500/10 text-rose-300`}>⛔ {T({ en: 'refusals', bn: 'প্রত্যাখ্যান' })}: {step.rejects}</span>
        <span className={`${chip} cursor-default border-amber-500/50 bg-amber-500/10 text-amber-300`}>🕯 {T({ en: 'stale', bn: 'বাসি' })}: {step.stales}</span>
        <span className={`${chip} cursor-default border-violet-500/50 bg-violet-500/10 text-violet-300`}>✉ ⌑: {step.hints}</span>
        <span className={`${chip} cursor-default border-orange-500/50 bg-orange-500/10 text-orange-300`}>⚔ {T({ en: 'duels', bn: 'দ্বন্দ্ব' })}: {step.conflicts}</span>
        <span className={`${chip} cursor-default border-rose-500/50 bg-rose-500/10 text-rose-300`}>🪦 {T({ en: 'buried', bn: 'সমাহিত' })}: {step.lost}</span>
        <span className={`${chip} cursor-default border-teal-500/50 bg-teal-500/10 text-teal-300`}>⇒ {T({ en: 'healings', bn: 'নিরাময়' })}: {step.migrations}</span>
      </div>

      <p className="text-xs text-muted">
        {T({
          en: 'Four laws over one fate-line. Naive answers every knock and buries k1←2 without a tear. Sloppy keeps every door open with a ⌑ lodger — one dead courier from a lie. Majority refuses twice so the healing day has zero duels. The leader law runs a succession exam at i16→i17: and i19’s betrayed lamp shows what happens when a deposed crown is still invited to speak.',
          bn: 'এক নিয়তি-রেখার উপর চার বিধান। নিরীক্ষ প্রতিটি ধক শোনে আর k1←2 সমাহিত করে চোখের পানি ছাড়াই। ঢিলা প্রতিটি দরজা খোলা রাখে ⌑ অতিথি দিয়ে — একটি মৃত বাহক দূরে মিথ্যা থেকে। সংখ্যাগরিষ্ঠ দুইবার প্রত্যাখ্যান করে যাতে নিরাময়-দিবসে দ্বন্দ্ব থাকে শূন্য। নেতা-বিধান i16→i17-এ উত্তরাধিকার-পরীক্ষা চালায়: আর i19-এ এর বিশ্বাসঘাত-প্রদীপ দেখায় কী হয় যখন পদচ্যুত-মুকুটকেও বলার দাওয়াত দেওয়া হয়।',
        })}
      </p>
    </div>
  );
}
