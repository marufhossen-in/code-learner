import { useState } from 'react';
import { useI18n } from '../../lib/i18n';

/** CSS Grid lab: tracks, gaps, alignment and spanning — live. */

const COL_PRESETS = ['1fr 1fr 1fr', '2fr 1fr 1fr', '1fr 2fr', 'repeat(4, 1fr)', 'repeat(3, minmax(80px, 1fr))'];
const ROW_PRESETS = ['auto', 'repeat(2, 110px)'];
const ALIGN_OPTS = ['stretch', 'start', 'center', 'end'] as const;

export function GridLab() {
  const { T } = useI18n();
  const [cols, setCols] = useState(COL_PRESETS[0]);
  const [rows, setRows] = useState(ROW_PRESETS[0]);
  const [gap, setGap] = useState(12);
  const [ji, setJi] = useState<(typeof ALIGN_OPTS)[number]>('stretch');
  const [ai, setAi] = useState<(typeof ALIGN_OPTS)[number]>('stretch');
  const [span, setSpan] = useState(true);

  const cellCls = 'grid place-items-center rounded-lg border border-accent/60 bg-accent/20 font-bold text-accent transition-all duration-300 min-h-12';
  const items = ['1', '2', '3', '4', '5', '6', '7'];

  const selectCls = 'w-full rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-xs text-text';

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
        {T({ en: 'Two dimensions: rows AND columns', bn: 'দুই মাত্রা: সারি এবং কলাম' })}
      </div>
      <div className="grid gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,220px)]">
        <div>
          <div
            className="grid min-h-64 rounded-xl border-2 border-dashed border-accent/50 bg-bg p-3 transition-all duration-300"
            style={{
              gridTemplateColumns: cols,
              gridTemplateRows: rows,
              gap,
              justifyItems: ji,
              alignItems: ai,
            }}
            aria-label="grid live demo"
          >
            {items.map((n, i) => (
              <div
                key={n}
                className={i === 0 ? `${cellCls} border-accent2/70 bg-accent2/20 text-accent2 min-h-16` : cellCls}
                style={
                  i === 0 && span
                    ? { gridColumn: 'span 2', gridRow: 'span 2' }
                    : ji !== 'stretch'
                      ? { minWidth: 64 }
                      : undefined
                }
              >
                {i === 0 && span ? `1 (span 2×2)` : n}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2.5 text-xs font-semibold text-muted">
          <label className="flex flex-col gap-1">
            grid-template-columns
            <select value={cols} onChange={(e) => setCols(e.target.value)} className={selectCls}>
              {COL_PRESETS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            grid-template-rows
            <select value={rows} onChange={(e) => setRows(e.target.value)} className={selectCls}>
              {ROW_PRESETS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            gap: {gap}px
            <input type="range" min={0} max={32} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="accent-[var(--accent)]" />
          </label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1">
              justify-items
              <select value={ji} onChange={(e) => setJi(e.target.value as (typeof ALIGN_OPTS)[number])} className={selectCls}>
                {ALIGN_OPTS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              align-items
              <select value={ai} onChange={(e) => setAi(e.target.value as (typeof ALIGN_OPTS)[number])} className={selectCls}>
                {ALIGN_OPTS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="flex items-center gap-2 rounded-lg border border-border bg-elev px-3 py-2">
            <input type="checkbox" checked={span} onChange={(e) => setSpan(e.target.checked)} className="accent-[var(--accent)]" />
            <code className="font-mono">item 1 → span 2</code>
          </label>
        </div>
      </div>
      <div className="border-t border-border">
        <pre className="codeblock overflow-x-auto rounded-none border-0 p-3 font-mono text-xs leading-6">
{`.gallery {
  display: grid;
  grid-template-columns: ${cols};
  grid-template-rows: ${rows};
  gap: ${gap}px;
  justify-items: ${ji};
  align-items: ${ai};
}
${span ? `.featured {
  grid-column: span 2;   /* take two tracks */
  grid-row: span 2;
}` : '/* no spanning items right now */'}`}
        </pre>
      </div>
      <p className="px-4 pb-3 pt-2 text-sm text-muted">
        {T({
          en: 'fr means “share of free space”: 2fr 1fr 1fr gives the first track half of everything that remains. Items flow into cells automatically — and any item can span several tracks.',
          bn: 'fr অর্থ “ফাঁকা জায়গার অংশ”: 2fr 1fr 1fr প্রথম ট্র্যাককে বাকি জায়গার অর্ধেক দেয়। আইটেম স্বয়ংক্রিয়ভাবে ঘরে ঢোকে — যেকোনো আইটেম কয়েকটি ট্র্যাক জুড়ে ছড়াতে পারে।',
        })}
      </p>
    </div>
  );
}
