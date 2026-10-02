import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import type { ExecResult } from './dbSim';
import { DB_PRESETS, executeQuery, makeUsers, parseSelect } from './dbSim';

/** Database Lab (Section 11): SELECT → parse → plan → scan/index-walk, with counters. */

const USERS = makeUsers();
const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface';

interface Comparison {
  label: string;
  examined: number;
}

export function DbLab() {
  const { T } = useI18n();
  const [sql, setSql] = useState(DB_PRESETS[1]);
  const [indexes, setIndexes] = useState<string[]>(['id']);
  const [exec, setExec] = useState<ExecResult | null>(null);
  const [stepIdx, setStepIdx] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [compare, setCompare] = useState<Comparison[]>([]);

  const parsed = parseSelect(sql);

  function runQuery() {
    if (!parsed.ok) return;
    const r = executeQuery(parsed.query, USERS, indexes);
    setExec(r);
    setStepIdx(0);
    setPlaying(true);
  }

  useEffect(() => {
    if (!playing || !exec) return;
    if (stepIdx >= exec.steps.length - 1) {
      setPlaying(false);
      setCompare((c) => {
        const label = `${exec.plan.op === 'INDEX SCAN' ? `index` : 'scan'} → ${exec.rowsExamined}`;
        const next = [...c.filter((x) => !x.label.startsWith(exec.plan.op === 'INDEX SCAN' ? 'index' : 'scan')), { label, examined: exec.rowsExamined }];
        return next.slice(-4);
      });
      return;
    }
    const t = setTimeout(() => setStepIdx((i) => i + 1), 750);
    return () => clearTimeout(t);
  }, [playing, stepIdx, exec]);

  const step = exec && stepIdx >= 0 ? exec.steps[stepIdx] : null;
  const highlight = useMemo(() => new Set(step?.rows ?? []), [step]);
  const done = exec && stepIdx === exec.steps.length - 1;

  function toggleIndex(col: string) {
    setIndexes((ix) => (ix.includes(col) ? ix.filter((c) => c !== col) : [...ix, col]));
    setExec(null);
    setStepIdx(-1);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* query input */}
      <div className="border-b border-border p-3">
        <div className="flex flex-col gap-2 md:flex-row">
          <textarea
            value={sql}
            onChange={(e) => { setSql(e.target.value); setExec(null); setStepIdx(-1); }}
            className="codeblock min-h-11 flex-1 resize-y rounded-lg border border-border px-2 py-1.5 font-mono text-xs focus:border-accent/60 focus:outline-none"
            spellCheck={false}
            aria-label="SQL query"
          />
          <div className="flex flex-row items-start gap-2 md:flex-col">
            <button type="button" className={btn} onClick={runQuery} disabled={!parsed.ok}>
              ⚙️ {T({ en: 'EXPLAIN + RUN', bn: 'EXPLAIN + রান' })}
            </button>
            {exec && (
              <button type="button" className={btn} onClick={() => { setExec(null); setStepIdx(-1); }}>↺</button>
            )}
          </div>
        </div>
        {!parsed.ok && <p className="mt-1 font-mono text-xs text-err">{T(parsed.error)}</p>}
        <div className="mt-1.5 flex flex-wrap gap-1">
          {DB_PRESETS.map((p) => (
            <button key={p} type="button" className="rounded bg-elev px-2 py-0.5 font-mono text-[10px] text-muted transition hover:text-accent" onClick={() => { setSql(p); setExec(null); setStepIdx(-1); }}>
              {p.length > 48 ? p.slice(0, 45) + '…' : p}
            </button>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted">{T({ en: 'Indexes:', bn: 'ইনডেক্স:' })}</span>
          {(['id', 'city', 'age'] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => toggleIndex(c)}
              disabled={c === 'id'}
              className={`rounded-full border px-2 py-0.5 font-mono text-[11px] transition ${
                indexes.includes(c) ? 'border-ok/60 text-ok' : 'border-border text-muted hover:border-accent/50'
              }`}
              title={c === 'id' ? 'PRIMARY KEY' : indexes.includes(c) ? `DROP INDEX idx_${c}` : `CREATE INDEX idx_${c}`}
            >
              {indexes.includes(c) ? '☑' : '☐'} idx_{c}
            </button>
          ))}
        </div>
      </div>

      {/* plan + counters */}
      <div className="grid gap-3 p-3 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-elev/40 p-3">
          <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted">EXPLAIN</div>
          {exec ? (
            <div className="space-y-1 font-mono text-xs">
              {exec.plan.explain.map((l, i) => (
                <div key={i}>
                  <div className={l.text.includes('INDEX') ? 'font-bold text-ok' : l.text.includes('SEQ') ? 'font-bold text-warn' : 'text-text/75'}>{l.text}</div>
                  {l.note && <div className="pl-3 text-[11px] text-muted">{T(l.note)}</div>}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs italic text-muted">{T({ en: 'Run a query to see its plan.', bn: 'প্ল্যান দেখতে কুয়েরি চালান।' })}</p>
          )}
          {step && (
            <p key={stepIdx} className="fade-up mt-2 border-t border-border pt-2 text-xs">
              {T(step.note)}
            </p>
          )}
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { n: step?.examined ?? 0, l: T({ en: 'rows examined', bn: 'রো পরীক্ষিত' }), c: step && step.examined > 30 ? 'var(--err)' : step && step.examined > 10 ? 'var(--warn)' : 'var(--ok)' },
              { n: step?.matched ?? 0, l: T({ en: 'rows matched', bn: 'রো মিলেছে' }), c: 'var(--accent)' },
              { n: step?.pagesRead ?? 0, l: T({ en: 'pages read', bn: 'পেজ পঠিত' }), c: 'var(--accent-2)' },
            ].map((s2) => (
              <div key={s2.l} className="rounded-xl border border-border bg-elev/40 px-2 py-2">
                <div className="font-mono text-xl font-bold" style={{ color: s2.c }}>{s2.n}</div>
                <div className="text-[10px] uppercase tracking-wide text-muted">{s2.l}</div>
              </div>
            ))}
          </div>
          {compare.length > 1 && done && (
            <div className="fade-up mt-2 rounded-lg border border-border bg-elev/40 px-3 py-2 text-xs">
              <b>{T({ en: 'Same engine, different plans:', bn: 'একই ইঞ্জিন, ভিন্ন প্ল্যান:' })}</b>
              <span className="ml-1 font-mono text-muted">{compare.map((c) => c.label).join('  vs  ')}</span>
            </div>
          )}
        </div>
      </div>

      {/* table + index tree */}
      <div className="grid gap-3 border-t border-border p-3 lg:grid-cols-[1fr_260px]">
        <div className="max-h-60 overflow-y-auto rounded-xl border border-border scrolly" aria-label="users table">
          <table className="w-full font-mono text-[11px]">
            <thead className="sticky top-0 bg-elev">
              <tr className="text-left text-muted">
                <th className="px-2 py-1">id</th><th className="px-2 py-1">name</th><th className="px-2 py-1">city</th><th className="px-2 py-1">age</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((r) => (
                <tr key={r.id} className={`transition-colors ${highlight.has(r.id) ? 'bg-accent/20' : ''}`}>
                  <td className="px-2 py-0.5 text-accent-2">{r.id}</td>
                  <td className="px-2 py-0.5">{r.name}</td>
                  <td className="px-2 py-0.5 text-muted">{r.city}</td>
                  <td className="px-2 py-0.5">{r.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-border bg-elev/40 p-3">
          <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wide text-muted">
            🌳 {T({ en: 'B-tree (shown when index used)', bn: 'B-tree (ইনডেক্স ব্যবহৃত হলে)' })}
          </div>
          {exec?.plan.op === 'INDEX SCAN' ? (
            <div className="space-y-1 font-mono text-[11px]">
              {['root: 1–100', 'internal: 34–67', 'leaf: matching entries'].map((n, i) => (
                <div key={n} className={`rounded border px-2 py-1 ${step && step.kind !== 'plan' && (step.kind !== 'index-walk' || i <= 2) && stepIdx >= 1 ? 'border-ok/50 text-ok' : 'border-border text-muted'}`}>
                  {'  '.repeat(i)}└─ {n}
                </div>
              ))}
              <p className="pt-1 text-[11px] text-muted">
                {T({ en: '3 page reads, no matter the table size — that is the superpower.', bn: 'টেবিল যত বড়ই হোক, ৩টি পেজ পঠন — এইটাই সুপারপাওয়ার।' })}
              </p>
            </div>
          ) : (
            <p className="text-xs italic text-muted">
              {exec
                ? T({ en: 'No index on this filter — the engine must walk ALL pages top to bottom.', bn: 'এই ফিল্টারে ইনডেক্স নেই — ইঞ্জিনকে সব পেজ উপর থেকে নিচ পর্যন্ত পড়তে হচ্ছে।' })
                : T({ en: 'Create an index (idx_city / idx_age) and rerun a WHERE query on that column.', bn: 'ইনডেক্স বানান (idx_city / idx_age) আর সেই কলামে WHERE কুয়েরি আবার চালান।' })}
            </p>
          )}
        </div>
      </div>
      <p className="border-t border-border px-3 pb-3 pt-2 text-sm text-muted">
        {T({
          en: 'The magic step: run "SELECT … WHERE city = \'Dhaka\'", note ~100 rows examined — then tick idx_city and run again. Same answer, a fraction of the work.',
          bn: 'জাদুর ধাপ: "SELECT … WHERE city = \'Dhaka\'" চালিয়ে ~১০০ রো পরীক্ষা দেখুন — তারপর idx_city চালু করে আবার চালান। একই উত্তর, খানিকটা কাজে।',
        })}
      </p>
    </div>
  );
}
