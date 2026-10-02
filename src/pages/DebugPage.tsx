import { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import type { DebugScenario } from '../content/debugScenarios';
import { DEBUG_DIFF_LABELS, DEBUG_SCENARIOS, scoreFor } from '../content/debugScenarios';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';

/** Debug challenge mode (Section 14): symptom → investigate → identify → fix → learn. */

const TECH_ICON: Record<DebugScenario['tech'], string> = { javascript: '🟨', html: '🌐', css: '🎨' };

export function DebugPage() {
  const { T, ui } = useI18n();
  const { debugPoints, debugTotal, solveDebug, pushRecent } = useProgress();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(1);
  const [picked, setPicked] = useState<string[]>([]);
  const [solvedNow, setSolvedNow] = useState(false);

  const solvedCount = Object.keys(debugPoints).length;
  const maxTotal = DEBUG_SCENARIOS.reduce((a, s) => a + s.points, 0);
  const active = DEBUG_SCENARIOS.find((s) => s.id === activeId) ?? null;
  const alreadySolved = active ? active.id in debugPoints : false;

  function open(s: DebugScenario) {
    setActiveId(s.id);
    setAttempts(1);
    setPicked([]);
    setSolvedNow(false);
    pushRecent({ path: '/debug', kind: 'page', title: { en: 'Debug Labs', bn: 'ডিবাগ ল্যাব' } });
  }

  function pick(option: DebugScenario['options'][number]) {
    if (!active || solvedNow || alreadySolved) return;
    setPicked((p) => [...p, option.id]);
    if (option.correct) {
      setSolvedNow(true);
      solveDebug(active.id, scoreFor(active.points, attempts));
    } else {
      setAttempts((a) => a + 1);
    }
  }

  if (!active) {
    return (
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-1 text-2xl font-bold">🐞 {T({ en: 'Debug Labs', bn: 'ডিবাগ ল্যাব' })}</h1>
        <p className="mb-4 text-muted">
          {T({
            en: 'Real broken code. Read the SYMPTOM first, gather evidence, then name the bug. Fewer guesses = more points.',
            bn: 'আসল ভাঙা কোড। আগে লক্ষণ পড়ুন, প্রমাণ জোগাড়ুন, তারপর বাগের নাম বলুন। কম অনুমান = বেশি পয়েন্ট।',
          })}
        </p>
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-border bg-surface p-3 text-sm">
          <b>{solvedCount}/{DEBUG_SCENARIOS.length}</b>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-elev" role="progressbar" aria-valuenow={solvedCount} aria-valuemax={DEBUG_SCENARIOS.length}>
            <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${(solvedCount / DEBUG_SCENARIOS.length) * 100}%` }} />
          </div>
          <span className="font-mono font-bold text-accent">{debugTotal} / {maxTotal} pts</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {DEBUG_SCENARIOS.map((s) => {
            const done = s.id in debugPoints;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => open(s)}
                className={`rounded-xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-glow ${done ? 'border-ok/50 bg-ok/5' : 'border-border bg-surface hover:border-accent/40'}`}
              >
                <div className="flex items-center gap-2">
                  <span aria-hidden="true">{TECH_ICON[s.tech]}</span>
                  <span className="font-bold">{T(s.title)}</span>
                  <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${done ? 'bg-ok/15 text-ok' : 'bg-elev text-muted'}`}>
                    {done ? `✓ ${debugPoints[s.id]}pts` : `${s.points}pts`}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{T(s.symptom)}</p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-muted">
                  <span className="rounded bg-elev px-1.5 py-0.5 font-mono">{s.tech}</span>
                  <span className={`rounded px-1.5 py-0.5 font-bold ${s.difficulty === 'hard' ? 'text-err' : s.difficulty === 'medium' ? 'text-warn' : 'text-ok'}`}>
                    {T(DEBUG_DIFF_LABELS[s.difficulty])}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const showAnswer = solvedNow || alreadySolved;

  return (
    <div className="mx-auto max-w-4xl">
      <button type="button" onClick={() => setActiveId(null)} className="mb-3 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition hover:border-accent/50">
        ← {T({ en: 'all challenges', bn: 'সব চ্যালেঞ্জ' })}
      </button>

      <div className="mb-3">
        <h1 className="text-xl font-bold">
          {TECH_ICON[active.tech]} {T(active.title)}{' '}
          <span className="text-sm font-normal text-muted">· {active.points}pts · {T(DEBUG_DIFF_LABELS[active.difficulty])}</span>
        </h1>
      </div>

      {/* symptom */}
      <div className="mb-3 rounded-xl border border-err/40 bg-err/5 p-3">
        <div className="mb-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-err">🚨 {T({ en: 'Symptom (observed)', bn: 'লক্ষণ (দেখা গেছে)' })}</div>
        <p className="text-sm">{T(active.symptom)}</p>
      </div>

      {/* broken code */}
      <CodeBlock code={active.code} lang={active.lang} />

      {/* options */}
      <h2 className="mb-2 mt-4 text-sm font-bold uppercase tracking-wide text-muted">
        🔍 {showAnswer ? T({ en: 'The verdict', bn: 'রায়' }) : T({ en: 'What is the bug?', bn: 'বাগটা কী?' })}
      </h2>
      <div className="space-y-2">
        {active.options.map((o) => {
          const wasPicked = picked.includes(o.id);
          const reveal = showAnswer || wasPicked;
          return (
            <div key={o.id} className={`rounded-xl border p-3 transition ${reveal ? (o.correct ? 'border-ok/50 bg-ok/5' : 'border-err/40 bg-err/5') : 'border-border bg-surface'}`}>
              <button
                type="button"
                disabled={showAnswer || wasPicked}
                onClick={() => pick(o)}
                className="w-full text-left text-sm disabled:cursor-default"
              >
                {reveal && (o.correct ? '✅ ' : '❌ ')}{T(o.label)}
              </button>
              {reveal && <p className="mt-1 border-t border-border/60 pt-1.5 text-xs text-muted">{T(o.why)}</p>}
            </div>
          );
        })}
      </div>

      {solvedNow && (
        <div className="fade-up mt-3 rounded-xl border border-ok/50 bg-ok/5 p-3 text-sm">
          🎉 <b>{T({ en: 'Bug found!', bn: 'বাগ পাওয়া গেছে!' })}</b>{' '}
          {T({ en: `+${scoreFor(active.points, attempts)} points`, bn: `+${scoreFor(active.points, attempts)} পয়েন্ট` })}
          {attempts > 1 && (
            <span className="text-muted"> · {T({ en: `${attempts} attempts (fewer guesses = more points)`, bn: `${attempts}টি চেষ্টা (কম অনুমান = বেশি পয়েন্ট)` })}</span>
          )}
        </div>
      )}

      {showAnswer && (
        <div className="fade-up mt-4 space-y-3">
          <div>
            <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wide text-ok">✔ {T({ en: 'Fixed code', bn: 'ঠিক করা কোড' })}</div>
            <CodeBlock code={active.fixedCode} lang={active.lang} />
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 text-sm">
            <b>💡 {T({ en: 'Why the bug happens', bn: 'বাগ হয় কেন' })}</b>
            <p className="mt-1 text-muted">{T(active.explanation)}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 text-sm">
            <b>🏢 {T({ en: 'In the real world', bn: 'বাস্তব জগতে' })}</b>
            <p className="mt-1 text-muted">{T(active.realWorld)}</p>
          </div>
          <button type="button" onClick={() => setActiveId(null)} className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-onaccent transition hover:brightness-110">
            {solvedCount >= DEBUG_SCENARIOS.length && !alreadySolved ? '🏆' : '→'} {T({ en: 'back to challenges', bn: 'চ্যালেঞ্জে ফিরুন' })}
          </button>
        </div>
      )}

      {!showAnswer && (
        <p className="mt-3 text-xs text-muted">
          {ui('debug.hint')}
        </p>
      )}
    </div>
  );
}

export default DebugPage;
