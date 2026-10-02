import { useEffect, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { planJourney } from './networkSim';

/** Network Simulator (Section 11): watch one request travel the whole stack. */

const NODES = [
  { icon: '🖥️', en: 'Browser', bn: 'ব্রাউজার' },
  { icon: '🌐', en: 'Router / ISP', bn: 'রাউটার / ISP' },
  { icon: '📖', en: 'DNS', bn: 'DNS' },
  { icon: '⚡', en: 'CDN edge', bn: 'CDN এজ' },
  { icon: '⚖️', en: 'Load balancer', bn: 'লোড ব্যালান্সার' },
  { icon: '🖧', en: 'App server', bn: 'অ্যাপ সার্ভার' },
  { icon: '🗄️', en: 'Database', bn: 'ডেটাবেস' },
];

const PRESETS = [
  'https://example.com/',
  'https://example.com/api/products',
  'https://example.com/style.css',
  'http://example.com/about',
  'https://example.com/missing',
];

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40';

export function NetworkLab() {
  const { T } = useI18n();
  const [url, setUrl] = useState(PRESETS[0]);
  const [cached, setCached] = useState(false);
  const [keepAlive, setKeepAlive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(-1);

  const journey = planJourney(url, { cached, keepAlive });
  const done = idx >= 0 && idx >= journey.steps.length - 1;

  useEffect(() => {
    if (!playing || !journey.ok) return;
    if (idx >= journey.steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setIdx((i) => i + 1), 950);
    return () => clearTimeout(t);
  }, [playing, idx, journey]);

  function start() {
    setIdx(0);
    setPlaying(true);
  }
  function stop() {
    setPlaying(false);
    setIdx(-1);
  }

  const activeNode = idx >= 0 && journey.steps[idx] ? journey.steps[idx].node : -1;
  const visitedNodes = new Set(journey.steps.slice(0, Math.max(0, idx + 1)).map((s) => s.node));

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <input
          value={url}
          onChange={(e) => { setUrl(e.target.value); stop(); }}
          className="min-w-56 flex-1 rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-xs focus:border-accent/60 focus:outline-none"
          aria-label="URL"
          spellCheck={false}
        />
        <label className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <input type="checkbox" checked={cached} onChange={(e) => { setCached(e.target.checked); stop(); }} />
          {T({ en: 'in cache', bn: 'ক্যাশে আছে' })}
        </label>
        <label className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <input type="checkbox" checked={keepAlive} onChange={(e) => { setKeepAlive(e.target.checked); stop(); }} />
          keep-alive
        </label>
        <button type="button" className={btn} onClick={start} disabled={playing}>
          ▶ {T({ en: 'send packet', bn: 'প্যাকেট পাঠান' })}
        </button>
        {(idx >= 0) && <button type="button" className={btn} onClick={stop}>↺</button>}
      </div>
      <div className="flex flex-wrap gap-1 border-b border-border px-3 py-1.5">
        {PRESETS.map((p) => (
          <button key={p} type="button" className="rounded bg-elev px-2 py-0.5 font-mono text-[10px] text-muted transition hover:text-accent" onClick={() => { setUrl(p); setCached(false); setKeepAlive(false); stop(); }}>
            {p}
          </button>
        ))}
      </div>

      {/* node map */}
      <div className="flex items-stretch gap-1 overflow-x-auto px-3 pt-3 scrolly" aria-label="network topology">
        {NODES.map((n, i) => (
          <div key={n.en} className="flex min-w-24 flex-1 items-center">
            <div
              className={`relative flex h-16 w-full flex-col items-center justify-center rounded-xl border text-center transition-all duration-300 ${
                i === activeNode
                  ? 'scale-105 border-accent bg-accent/10 shadow-glow'
                  : visitedNodes.has(i)
                    ? 'border-ok/50 bg-ok/5'
                    : 'border-border bg-elev/60 opacity-60'
              }`}
            >
              <span className="text-xl" aria-hidden="true">{n.icon}</span>
              <span className="px-1 text-[10px] font-bold leading-tight">{T({ en: n.en, bn: n.bn })}</span>
              {i === activeNode && idx >= 0 && (
                <span className="absolute -top-2 rounded-full px-1.5 py-0.5 text-[9px] font-bold text-onaccent" style={{ background: journey.steps[idx]?.dir === 'res' ? 'var(--ok)' : 'var(--accent)' }}>
                  {journey.steps[idx]?.dir === 'res' ? '← RESPONSE' : journey.steps[idx]?.dir === 'req' ? '→ REQUEST' : '● LOCAL'}
                </span>
              )}
            </div>
            {i < NODES.length - 1 && <span className="px-0.5 text-muted" aria-hidden="true">⟷</span>}
          </div>
        ))}
      </div>

      {/* current step caption */}
      <div className="min-h-12 px-3 py-2">
        {journey.ok ? (
          idx >= 0 && journey.steps[idx] ? (
            <p key={idx} className="fade-up text-sm">
              <span className="mr-2 rounded bg-elev px-1.5 py-0.5 font-mono text-xs font-bold text-accent">+{journey.steps[idx].ms}ms</span>
              <b>{T(journey.steps[idx].title)}</b>
              <span className="text-muted"> — {T(journey.steps[idx].detail)}</span>
            </p>
          ) : (
            <p className="text-sm italic text-muted">
              {T({ en: 'Press "send packet" and watch the journey, node by node.', bn: '"প্যাকেট পাঠান" চাপুন — নোড ধরে ধরে যাত্রা দেখুন।' })}
            </p>
          )
        ) : (
          <p className="text-sm font-semibold text-err">{T(journey.error!)}</p>
        )}
      </div>

      {/* timeline */}
      <div className="border-t border-border px-3 py-2">
        {idx >= 0 && (
          <ol className="max-h-44 space-y-1 overflow-y-auto font-mono text-[11px] scrolly" aria-label="journey timeline">
            {journey.steps.slice(0, idx + 1).map((s, i) => (
              <li key={i} className="flex items-baseline gap-2">
                <span className={s.dir === 'res' ? 'text-ok' : s.dir === 'req' ? 'text-accent' : 'text-accent-2'}>
                  {s.dir === 'res' ? '⇣' : s.dir === 'req' ? '⇡' : '•'}
                </span>
                <span className="w-12 shrink-0 text-muted">{s.ms}ms</span>
                <span className="text-text/85">{T(s.title)}</span>
              </li>
            ))}
          </ol>
        )}
        {done && (
          <div className="fade-up mt-2 flex flex-wrap items-center gap-3 rounded-lg border border-border bg-elev/50 px-3 py-2 text-sm">
            <span className="font-bold">
              {T({ en: 'Total:', bn: 'মোট:' })} <span className="font-mono text-accent">{journey.totalMs}ms</span>
            </span>
            <span className={`rounded px-1.5 py-0.5 font-mono text-xs font-bold ${journey.status === 200 ? 'text-ok' : 'text-warn'}`}>
              {journey.status}{journey.fromCache ? ' (from cache)' : ''}
            </span>
            <span className="text-muted">
              {journey.fromCache
                ? T({ en: 'The fastest request is the one never sent.', bn: 'সবচেয়ে দ্রুত রিকোয়েস্ট সেটিই যা পাঠাতেই হয়নি।' })
                : T({ en: 'DNS + handshake + TLS is the "hidden tax" of every cold connection.', bn: 'DNS + হ্যান্ডশেক + TLS — প্রতিটি নতুন কানেকশনের "লুকানো কর"।' })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
