import { useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';

/** Interactive CSS box model (Section 6): drag sliders, watch the four layers and totals. */

function Slider({
  label,
  value,
  min,
  max,
  onChange,
  color,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  color: string;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="inline-block h-3 w-3 rounded-sm" style={{ background: color }} aria-hidden="true" />
      <span className="w-20 font-medium">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="min-w-0 flex-1 accent-[var(--accent)]"
        aria-label={label}
      />
      <span className="w-12 text-right font-mono text-xs text-muted">{value}px</span>
    </label>
  );
}

export function BoxModelLab() {
  const { T } = useI18n();
  const [margin, setMargin] = useState(20);
  const [border, setBorder] = useState(6);
  const [padding, setPadding] = useState(24);
  const [width, setWidth] = useState(160);
  const [borderBox, setBorderBox] = useState(false);

  const contentW = borderBox ? Math.max(30, width - padding * 2 - border * 2) : width;
  const total = contentW + padding * 2 + border * 2;
  const totalWithMargin = total + margin * 2;

  const code = useMemo(
    () => `.card {
  width: ${width}px;${borderBox ? '' : `\n  padding: ${padding}px;\n  border: ${border}px solid indigo;`}
${
  borderBox
    ? `  padding: ${padding}px;\n  border: ${border}px solid indigo;\n  box-sizing: border-box;`
    : ''
}
  margin: ${margin}px;
}
/* rendered content width: ${contentW}px
   total box width: ${total}px
   occupied incl. margin: ${totalWithMargin}px */`,
    [width, padding, border, margin, borderBox, contentW, total, totalWithMargin],
  );

  const cMargin = 'color-mix(in srgb, var(--warn) 30%, transparent)';
  const cBorder = 'color-mix(in srgb, var(--accent) 55%, transparent)';
  const cPadding = 'color-mix(in srgb, var(--ok) 30%, transparent)';
  const cContent = 'color-mix(in srgb, var(--accent-2) 35%, transparent)';

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
        {T({ en: 'Interactive diagram — every element is nested boxes', bn: 'ইন্টারঅ্যাক্টিভ ডায়াগ্রাম — প্রতিটি এলিমেন্ট ভেতরে-ভেতরে বাক্স' })}
      </div>
      <div className="grid gap-4 p-4 lg:grid-cols-2">
        {/* the visual */}
        <div className="flex items-center justify-center overflow-x-auto py-2">
          <div
            className="transition-all duration-200"
            style={{ background: cMargin, padding: `${margin / 2}px`, border: '1.5px dashed var(--warn)' }}
          >
            <div className="relative transition-all duration-200" style={{ background: cBorder, padding: `${border / 2}px` }}>
              <span className="absolute -top-5 left-0 font-mono text-[10px] text-warn">margin ×2</span>
              <div className="transition-all duration-200" style={{ background: cPadding, padding: `${padding / 2}px` }}>
                <div
                  className="grid place-items-center font-mono text-xs font-bold transition-all duration-200"
                  style={{ background: cContent, width: contentW, height: Math.max(48, contentW / 2) }}
                >
                  {contentW} × {Math.max(48, Math.round(contentW / 2))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="space-y-2.5">
          <Slider label={T({ en: 'margin', bn: 'মার্জিন' })} value={margin} min={0} max={60} onChange={setMargin} color={cMargin} />
          <Slider label={T({ en: 'border', bn: 'বর্ডার' })} value={border} min={0} max={20} onChange={setBorder} color={cBorder} />
          <Slider label={T({ en: 'padding', bn: 'প্যাডিং' })} value={padding} min={0} max={60} onChange={setPadding} color={cPadding} />
          <Slider label="width" value={width} min={60} max={300} onChange={setWidth} color={cContent} />
          <label className="flex items-center gap-2 rounded-lg border border-border bg-elev px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={borderBox}
              onChange={(e) => setBorderBox(e.target.checked)}
              className="accent-[var(--accent)]"
            />
            <code className="font-mono text-xs">box-sizing: {borderBox ? 'border-box' : 'content-box'}</code>
          </label>
          <div className="rounded-lg border border-border bg-bg p-3 font-mono text-xs leading-6">
            <div>
              content: <strong className="text-accent2">{contentW}px</strong>
            </div>
            <div>
              total box:{' '}
              <strong className="text-accent">
                {borderBox ? `${width}px (width includes padding+border)` : `${contentW} + ${padding * 2} + ${border * 2} = ${total}px`}
              </strong>
            </div>
            <div>
              + margin: <strong>{totalWithMargin}px</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <pre className="codeblock overflow-x-auto rounded-none border-0 p-3 font-mono text-xs leading-6">{code}</pre>
      </div>
      <p className="px-4 pb-3 pt-2 text-sm text-muted">
        {borderBox
          ? T({
              en: 'border-box: the declared width STAYS the total — padding and border shrink the content instead. This is why every modern reset uses it.',
              bn: 'border-box: ঘোষিত width-ই মোট থাকে — প্যাডিং আর বর্ডার কনটেন্টকে ছোট করে। এই কারণেই প্রতিটি আধুনিক রিসেট এটি ব্যবহার করে।',
            })
          : T({
              en: 'content-box (default): width means only the CONTENT. Padding, border and margin are added on top — the classic source of layout surprises.',
              bn: 'content-box (ডিফল্ট): width অর্থ শুধু কনটেন্ট। প্যাডিং, বর্ডার আর মার্জিন উপরে যোগ হয় — লেআউট বিস্ময়ের ক্লাসিক উৎস।',
            })}
      </p>
    </div>
  );
}
