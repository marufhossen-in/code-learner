import { useEffect, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import type { Algo, LBState } from './lbSim';
import { addServer, initialLBState, throughput, tick, toggleServer, TRAFFIC_RATES } from './lbSim';

/** Load Balancing Lab (Section 11): algorithms, capacity, failover — live. */

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface';

const ALGOS: { key: Algo; en: string; bn: string; den: string; dbn: string }[] = [
  { key: 'round-robin', en: 'round-robin', bn: 'রাউন্ড-রবিন', den: 'Take turns: 1, 2, 3, 1, 2, 3…', dbn: 'পালা করে: ১, ২, ৩, ১, ২, ৩…' },
  { key: 'least-connections', en: 'least-connections', bn: 'লিস্ট-কানেকশনস', den: 'Go to whoever is LEAST busy.', dbn: 'যে সবচেয়ে কম ব্যস্ত, তাকেই দাও।' },
  { key: 'random', en: 'random', bn: 'র‍্যান্ডম', den: 'Chance — works surprisingly well at scale.', dbn: 'ভাগ্য — বড় স্কেলে আশ্চর্যজনকভাবে ভালো কাজ করে।' },
];

function ServerCard({ s, onToggle }: { s: LBState['servers'][number]; onToggle: () => void }) {
  const pct = Math.round((s.active / s.capacity) * 100);
  const color = !s.up ? 'var(--muted)' : pct > 85 ? 'var(--err)' : pct > 55 ? 'var(--warn)' : 'var(--ok)';
  return (
    <div className={`fade-up rounded-xl border p-3 transition ${s.up ? 'border-border bg-elev/40' : 'border-err/40 bg-err/5 opacity-75'}`}>
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm font-bold">{s.name}</span>
        <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase ${s.up ? 'text-ok' : 'text-err'}`}>
          {s.up ? 'healthy' : 'DOWN'}
        </span>
        <button type="button" className={`${btn} ml-auto !px-2 !py-0.5 text-[10px]`} onClick={onToggle}>
          {s.up ? 'kill' : 'restart'}
        </button>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-bg" role="img" aria-label={`load ${pct}%`}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[10px] text-muted">
        <span>{s.active}/{s.capacity} in-flight</span>
        <span>✓{s.done}{s.dropped > 0 ? ` · ✗${s.dropped}` : ''}</span>
      </div>
    </div>
  );
}

export function LbLab() {
  const { T } = useI18n();
  const [state, setState] = useState<LBState>(() => initialLBState());
  const [algo, setAlgo] = useState<Algo>('round-robin');
  const [rate, setRate] = useState(TRAFFIC_RATES[1]);
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [note, setNote] = useState<{ en: string; bn: string } | null>(null);

  function doTick() {
    const r = tick(state, algo, rate.arrivals);
    setState(r.state);
    const per: Record<string, number> = {};
    let dropped = 0;
    for (const a of r.assignments) {
      if (a.outcome === 'routed' && a.serverId !== null) per[`app-${a.serverId}`] = (per[`app-${a.serverId}`] ?? 0) + 1;
      else dropped += 1;
    }
    const line = `tick ${r.state.tick}: ${r.assignments.length} req → ${Object.entries(per).map(([k, v]) => `${k}×${v}`).join(', ') || '—'}${dropped ? ` · ✗${dropped} dropped (503)` : ''} · ✓${r.completed} done`;
    setLog((l) => [...l.slice(-4), line]);
  }

  useEffect(() => {
    if (!running) return;
    const t = setInterval(doTick, 800);
    return () => clearInterval(t);
  });

  const lostPct = state.totalArrivals === 0 ? 0 : Math.round((state.totalDropped / state.totalArrivals) * 100);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        {ALGOS.map((a) => (
          <button
            key={a.key}
            type="button"
            className={`${btn} ${algo === a.key ? 'border-accent/60 !bg-accent/10 text-accent' : ''}`}
            title={T({ en: a.den, bn: a.dbn })}
            onClick={() => setAlgo(a.key)}
          >
            {T({ en: a.en, bn: a.bn })}
          </button>
        ))}
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
        {TRAFFIC_RATES.map((r) => (
          <button key={r.label} type="button" className={`${btn} ${rate.label === r.label ? 'border-accent2/60 text-accent-2' : ''}`} onClick={() => setRate(r)}>
            {r.label} ({r.arrivals}/t)
          </button>
        ))}
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
        <button type="button" className={btn} onClick={() => setRunning((v) => !v)}>{running ? '⏸' : '▶ ' + T({ en: 'start traffic', bn: 'ট্রাফিক' })}</button>
        <button type="button" className={btn} onClick={doTick}>⏭</button>
        <button type="button" className={btn} onClick={() => { const r = addServer(state); setState(r.state); setNote(r.note); }}>+ {T({ en: 'server', bn: 'সার্ভার' })}</button>
        <button type="button" className={`${btn} ml-auto`} onClick={() => { setState(initialLBState()); setLog([]); setNote(null); }}>↺</button>
      </div>

      {note && <p className="fade-up border-b border-border bg-accent/5 px-3 py-2 text-sm">{T(note)}</p>}
      <p className="border-b border-border px-3 py-1.5 text-xs text-muted">
        {T({ en: 'Algorithm:', bn: 'অ্যালগরিদম:' })} <b>{algo}</b> — {T({ en: ALGOS.find((a) => a.key === algo)!.den, bn: ALGOS.find((a) => a.key === algo)!.dbn })}
      </p>

      {/* balancer visual + servers */}
      <div className="p-3">
        <div className="mx-auto mb-3 w-fit rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 font-mono text-xs font-bold text-accent">
          ⚖️ YOUR-LOAD-BALANCER
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {state.servers.map((s) => (
            <ServerCard key={s.id} s={s} onToggle={() => { const r = toggleServer(state, s.id); setState(r.state); setNote(r.note); }} />
          ))}
        </div>
        <p className="mt-2 font-mono text-[10px] text-muted">
          {T({ en: 'Each server drains', bn: 'প্রতিটি সার্ভার টিকে' })} ≈{throughput(state.servers[0])}{' '}
          {T({ en: 'requests/tick. Flood a 3×10 pool and watch requests die — then add a server or pick least-connections.', bn: 'টি রিকোয়েস্ট শেষ করে। ৩×১০ পুলে flood ছাড়ুন আর রিকোয়েস্ট মরতে দেখুন — তারপর সার্ভার যোগ করুন বা least-connections বাছুন।' })}
        </p>
      </div>

      {/* stats + log */}
      <div className="grid gap-3 border-t border-border p-3 lg:grid-cols-[220px_1fr]">
        <div className="grid grid-cols-3 gap-2 text-center lg:grid-cols-1">
          {[
            { n: state.totalArrivals, l: T({ en: 'arrived', bn: 'এসেছে' }), c: 'var(--text)' },
            { n: state.totalDone, l: T({ en: 'served', bn: 'সেবা পেয়েছে' }), c: 'var(--ok)' },
            { n: `${state.totalDropped}${lostPct ? ` (${lostPct}%)` : ''}`, l: T({ en: 'dropped', bn: 'বাদ পড়েছে' }), c: state.totalDropped ? 'var(--err)' : 'var(--muted)' },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-elev/40 px-2 py-1.5">
              <div className="font-mono text-lg font-bold" style={{ color: s.c }}>{s.n}</div>
              <div className="text-[9px] uppercase tracking-wide text-muted">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="codeblock min-h-24 rounded-lg p-2 font-mono text-[11px] leading-5" role="log" aria-label="balancer log">
          {log.length === 0 ? (
            <span className="text-muted/60">{T({ en: '# press ▶ — every tick is one burst of requests', bn: '# ▶ চাপুন — প্রতিটি টিকে রিকোয়েস্টের এক ঢল' })}</span>
          ) : (
            log.map((l, i) => <div key={i} className={l.includes('✗') ? 'text-err' : 'text-text/80'}>{l}</div>)
          )}
        </div>
      </div>
    </div>
  );
}
