import { useState } from 'react';
import { useI18n } from '../../lib/i18n';

/** Interactive flexbox lab (Section 6): axes, alignment and distribution, live. */

type Direction = 'row' | 'row-reverse' | 'column';
type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
type Align = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';

const JUSTIFIES: Justify[] = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
const ALIGNS: Align[] = ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'];
const DIRECTIONS: Direction[] = ['row', 'row-reverse', 'column'];

function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs font-semibold text-muted">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-xs text-text"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FlexboxLab() {
  const { T } = useI18n();
  const [direction, setDirection] = useState<Direction>('row');
  const [justify, setJustify] = useState<Justify>('space-between');
  const [align, setAlign] = useState<Align>('center');
  const [gap, setGap] = useState(8);

  const horizontal = direction !== 'column';
  const items = [
    { label: '1', size: 40, font: '1rem' },
    { label: '2', size: 64, font: '1.6rem' },
    { label: '3', size: 48, font: '1.1rem' },
    { label: '4', size: 72, font: '2rem' },
  ];

  const mainAxis = horizontal ? '→' : '↓';
  const crossAxis = horizontal ? '↓' : '→';

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
        {T({ en: 'Playground — change the container, watch the items obey', bn: 'প্লেগ্রাউন্ড — কন্টেইনার বদলান, আইটেমগুলো মেনে চলুক' })}
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,200px)]">
        <div>
          {/* axis legend */}
          <div className="mb-2 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
            <span className="rounded bg-accent/15 px-2 py-1 text-accent">
              main axis {mainAxis} — justify-content
            </span>
            <span className="rounded bg-accent2/15 px-2 py-1 text-accent2">
              cross axis {crossAxis} — align-items
            </span>
          </div>
          <div
            className="relative flex min-h-56 rounded-xl border-2 border-dashed border-accent/50 bg-bg p-3 transition-all duration-300"
            style={{ flexDirection: direction, justifyContent: justify, alignItems: align, gap }}
            aria-label="flexbox live demo"
          >
            {items.map((it) => (
              <div
                key={it.label}
                className="grid place-items-center rounded-lg border border-accent/60 bg-accent/20 font-bold text-accent transition-all duration-300"
                style={{
                  width: horizontal ? it.size + 16 : undefined,
                  alignSelf: undefined,
                  minWidth: horizontal ? undefined : 120,
                  height: horizontal ? it.size : 44,
                  fontSize: it.font,
                }}
              >
                {it.label}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <Select label="flex-direction" value={direction} options={DIRECTIONS} onChange={setDirection} />
          <Select label="justify-content (main)" value={justify} options={JUSTIFIES} onChange={setJustify} />
          <Select label="align-items (cross)" value={align} options={ALIGNS} onChange={setAlign} />
          <label className="flex flex-col gap-1 text-xs font-semibold text-muted">
            gap: {gap}px
            <input type="range" min={0} max={40} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="accent-[var(--accent)]" />
          </label>
        </div>
      </div>

      <div className="border-t border-border">
        <pre className="codeblock overflow-x-auto rounded-none border-0 p-3 font-mono text-xs leading-6">
{`.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};   /* main axis ${mainAxis} */
  align-items: ${align};         /* cross axis ${crossAxis} */
  gap: ${gap}px;
}`}
        </pre>
      </div>
      <p className="px-4 pb-3 pt-2 text-sm text-muted">
        {T({
          en: 'justify-content distributes space along the MAIN axis; align-items positions items on the CROSS axis. Switch to column and the axes rotate — the mental model never changes.',
          bn: 'justify-content মূল (main) অ্যাক্সিস বরাবর জায়গা ভাগ করে; align-items ক্রস অ্যাক্সিসে আইটেম বসায়। column করলে অ্যাক্সিস ঘুরে যায় — মানসিক মডেল একই থাকে।',
        })}
      </p>
    </div>
  );
}
