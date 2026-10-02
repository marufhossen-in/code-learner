import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { simulate, SCENES as SD_SCENES, type SceneKey, type SdStep } from './sysdSim';

/** Envelope Ledger: watch ten million DAUs become fourteen boxes, seven disks,
 *  ~111 Mbps and one 8 GB Redis node — one disciplined row at a time.
 *  Each scene is the same judicial walk: census → day-total → per-second pulse →
 *  peak halo → headroom covenant → physical verdict. Rows fade in top-down;
 *  the freshly-landed row wears the accent ring, the verdict rows go emerald. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENE_LIST: { id: SceneKey }[] = [
  { id: 'traffic' },
  { id: 'storage' },
  { id: 'bandwidth' },
  { id: 'memory' },
];

const rowCls = (isFocus: boolean, isVerdict: boolean) => {
  if (isFocus && isVerdict) return 'border-emerald-500/70 bg-emerald-500/15 text-emerald-300';
  if (isFocus) return 'border-accent/70 bg-accent/10 text-fg';
  if (isVerdict) return 'border-emerald-500/40 bg-emerald-500/5 text-emerald-400/80';
  return 'border-edge bg-panel/40 text-muted';
};

export function SysdLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<SceneKey>('traffic');
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => simulate(scene), [scene]);
  const step: SdStep = steps[Math.min(i, steps.length - 1)];

  useEffect(() => {
    if (!playing) return;
    if (i >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setI((v) => v + 1), 900);
    return () => clearTimeout(t);
  }, [playing, i, steps.length]);

  function reset() {
    setI(0);
    setPlaying(false);
  }

  const focusRow = step.rows[step.focus];
  const isVerdict = (idx: number) => {
    const lbl = step.rows[idx]?.label.en ?? '';
    return lbl.startsWith('⇒') || lbl.startsWith('−') || lbl.startsWith('= five-year');
  };

  return (
    <div className="space-y-4">
      {/* scene rail */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="ledger scenes">
        {SCENE_LIST.map(({ id }) => (
          <button
            key={id}
            role="tab"
            aria-selected={scene === id}
            onClick={() => { setScene(id); reset(); }}
            className={`${chip} ${scene === id ? 'border-accent bg-accent/15 text-fg' : 'border-edge text-muted hover:text-fg'}`}
          >
            {T(SD_SCENES[id].title)}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted">{T(SD_SCENES[scene].arc)}</p>

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

      {/* the jumbotron: the row that just landed */}
      <div className="rounded-xl border border-edge bg-panel/60 p-4">
        <div className="text-xs uppercase tracking-wide text-muted">{T(focusRow.label)}</div>
        <div className="mt-1 font-mono text-3xl font-bold text-fg">
          {focusRow.fmt}
          <span className="ml-2 text-sm font-normal text-muted">{focusRow.unit}</span>
        </div>
        <p className="mt-2 text-sm text-fg/90">{T(step.msg)}</p>
        <p className="mt-1 text-xs text-muted">{T(focusRow.note)}</p>
      </div>

      {/* the ledger table */}
      <div className="overflow-x-auto rounded-xl border border-edge">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-edge text-xs uppercase tracking-wide text-muted">
              <th className="px-3 py-2 font-medium">{T({ en: 'row', bn: 'সারি' })}</th>
              <th className="px-3 py-2 font-medium">{T({ en: 'line item', bn: 'লাইন-আইটেম' })}</th>
              <th className="px-3 py-2 font-medium text-right">{T({ en: 'fmt', bn: 'মান' })}</th>
              <th className="px-3 py-2 font-medium text-right">{T({ en: 'unit', bn: 'একক' })}</th>
            </tr>
          </thead>
          <tbody>
            {step.rows.map((r, idx) => (
              <tr
                key={idx}
                className={`border-b border-edge/50 transition-colors ${rowCls(idx === step.focus, isVerdict(idx))}`}
              >
                <td className="px-3 py-2 font-mono text-xs">{String(idx + 1).padStart(2, '0')}</td>
                <td className="px-3 py-2">{T(r.label)}</td>
                <td className="px-3 py-2 text-right font-mono font-semibold">{r.fmt}</td>
                <td className="px-3 py-2 text-right font-mono text-xs opacity-80">{r.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted">
        {T({
          en: 'Loose math, tight discipline: round gaily, track units ruthlessly. The envelope is a negotiation with physics — the halo and the covenant are not optional rows.',
          bn: 'ঢিলা পাটিগণিত, শক্ত শৃঙ্খলা: নির্দ্বিধায় গোল করুন, একক নির্মমভাবে ট্র্যাক করুন। খাম হলো পদার্থবিদ্যার সঙ্গে দর-কষাকষি — হ্যালো আর চুক্তি-সারি ঐচ্ছিক নয়।',
        })}
      </p>
    </div>
  );
}
