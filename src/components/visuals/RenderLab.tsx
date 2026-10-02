import { useState } from 'react';
import { useI18n } from '../../lib/i18n';
import type { ChangeKind } from './reactSim';
import { captionFor, REACT_TREE, reRendered } from './reactSim';

/** Re-render Lab: poke state, watch which components re-run, shield with memo. */

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface';

interface NodeViewProps {
  name: string;
  depth: number;
  rendered: Set<string>;
  counts: Record<string, number>;
  memo: Set<string>;
  pulse: number;
}

function NodeView({ name, depth, rendered, counts, memo, pulse }: NodeViewProps) {
  const node = REACT_TREE[name];
  const hot = rendered.has(name);
  return (
    <div style={{ marginLeft: depth * 22 }} className="relative">
      {depth > 0 && <span className="absolute -left-4 top-3 text-border" aria-hidden="true">├─</span>}
      <div
        key={hot ? `hot-${pulse}` : `cold-${pulse}`}
        className={`mb-1.5 inline-flex w-full max-w-64 items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-xs transition ${
          hot ? 'fade-up border-err/60 bg-err/10' : 'border-border bg-elev/40 opacity-80'
        }`}
      >
        <span className="font-bold">{memo.has(name) ? `memo(${name})` : name}</span>
        {node.owns.length > 0 && (
          <span className="rounded bg-accent/15 px-1 text-[9px] text-accent">owns: {node.owns.join(', ')}</span>
        )}
        {node.props.length > 0 && (
          <span className="rounded bg-elev px-1 text-[9px] text-muted">props: {node.props.join(', ')}</span>
        )}
        <span className={`ml-auto text-[10px] ${hot ? 'font-bold text-err' : 'text-muted'}`}>
          {hot ? '🔥 render' : '…'}
        </span>
        <span className="rounded bg-bg px-1 text-[10px] text-muted">×{counts[name] ?? 0}</span>
      </div>
      {node.children.map((c) => (
        <NodeView key={c} name={c} depth={depth + 1} rendered={rendered} counts={counts} memo={memo} pulse={pulse} />
      ))}
    </div>
  );
}

export function RenderLab() {
  const { T } = useI18n();
  const [memo, setMemo] = useState<Set<string>>(new Set());
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [change, setChange] = useState<ChangeKind>('count');
  const [pulse, setPulse] = useState(0);

  const rendered = new Set(reRendered(change, memo));
  const caption = pulse > 0 ? captionFor(change, memo, [...rendered]) : null;

  function fire(kind: ChangeKind) {
    setChange(kind);
    setPulse((p) => p + 1);
    setCounts((prev) => {
      const next = { ...prev };
      for (const n of reRendered(kind, memo)) next[n] = (next[n] ?? 0) + 1;
      return next;
    });
  }

  function toggleMemo(name: string) {
    setMemo((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <span className="font-mono text-xs text-muted">{T({ en: 'state setState →', bn: 'স্টেট setState →' })}</span>
        <button type="button" className={btn} onClick={() => fire('count')}>count++</button>
        <button type="button" className={btn} onClick={() => fire('text')}>"{T({ en: 'type a letter in text', bn: 'text-এ এক অক্ষর লিখুন' })}"</button>
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
        {['Header', 'Counter', 'List', 'Item', 'Footer'].map((n) => (
          <label key={n} className={`flex cursor-pointer items-center gap-1 rounded-lg border px-2 py-1 font-mono text-[10px] transition ${memo.has(n) ? 'border-ok/60 text-ok' : 'border-border text-muted'}`}>
            <input type="checkbox" className="hidden" checked={memo.has(n)} onChange={() => toggleMemo(n)} />
            {memo.has(n) ? '🛡' : '☐'} {n}
          </label>
        ))}
        <button type="button" className={`${btn} ml-auto`} onClick={() => { setCounts({}); setPulse(0); }}>↺</button>
      </div>

      {caption && (
        <p key={`cap-${pulse}`} className="fade-up border-b border-border bg-accent/5 px-3 py-2 text-sm">{T(caption)}</p>
      )}

      <div className="p-3">
        <NodeView name="App" depth={0} rendered={rendered} counts={counts} memo={memo} pulse={pulse} />
        {pulse === 0 && (
          <p className="mt-2 text-sm italic text-muted">
            {T({
              en: 'Press count++ and watch EVERYTHING burn — then shield nodes with memo and try again. Red = your function ran again.',
              bn: 'count++ চাপুন আর দেখুন সবকিছু জ্বলে ওঠে — তারপর memo দিয়ে ঢাকা দিয়ে আবার চেষ্টা করুন। লাল = আপনার ফাংশন আবার চলেছে।',
            })}
          </p>
        )}
      </div>

      <div className="border-t border-border px-3 pb-2 pt-2 font-mono text-[11px] text-muted">
        <code>const [count, setCount] = useState(0) — App-এ; </code>
        <code>props হিসেবে নিচে নামে: Main → Counter (count), Main → List → Item (text)</code>
      </div>
      <p className="border-t border-border px-3 pb-3 pt-2 text-sm text-muted">
        {T({
          en: 'The truth React ads skip: re-render ≠ re-paint. Your functions re-RUN cheaply; the DOM only changes where output differs (reconciliation). But wasted runs still cost — memo returns "same props, same UI" so React can skip the run.',
          bn: 'React-বিজ্ঞাপনের অবলিখিত সত্য: re-render ≠ re-paint। ফাংশন সস্তায় আবার চলে; DOM বদলায় শুধু যেখানে আউটপুট আলাদা (reconciliation)। তবু নিষ্ফল চালার খরচও আছে — memo বলে "একই props, একই UI", তাই React চালানোই বাদ দেয়।',
        })}
      </p>
    </div>
  );
}
