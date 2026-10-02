import { useState } from 'react';
import type { Exercise, LText } from '../lib/types';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { CodeBlock } from './CodeBlock';

/** Exercise engine (Section 14): question → hint → try → submit → result → explanation → solution. */

export function ExerciseCard({ ex, index, total }: { ex: Exercise; index: number; total: number }) {
  const { T, ui } = useI18n();
  const { markExercise, exercises } = useProgress();
  const [selected, setSelected] = useState<number | null>(null);
  const [text, setText] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<null | boolean>(null);
  const exId = ex.id ?? String(index);
  const done = exercises[exId];

  const check = () => {
    let ok = false;
    if (ex.kind === 'fill') {
      const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase();
      const candidates = [String(ex.answer), ...(ex.accept ?? [])].map(norm);
      ok = candidates.includes(norm(text));
    } else {
      ok = selected === ex.answer;
    }
    setResult(ok);
    markExercise(exId, ok);
  };

  const kindLabel =
    ex.kind === 'mcq' ? 'MCQ' : ex.kind === 'fill' ? (T({ en: 'Fill in', bn: 'পূরণ করুন' })) : ui('ex.predict');

  return (
    <article
      className={`rounded-xl border bg-surface p-4 ${done ? 'border-ok/50' : 'border-border'}`}
      aria-label={`Exercise ${index + 1}`}
    >
      <header className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
        <span className="rounded-full bg-elev px-2 py-0.5 font-mono">
          {index + 1}/{total}
        </span>
        <span className="rounded-full bg-elev px-2 py-0.5">{kindLabel}</span>
        <span className="rounded-full bg-elev px-2 py-0.5">{ex.topic}</span>
        {done && <span className="ml-auto font-semibold text-ok">✓</span>}
      </header>

      <h4 className="mb-3 font-medium leading-7">{T(ex.question)}</h4>
      {ex.code && (
        <div className="mb-3">
          <CodeBlock code={ex.code} lang="js" showLabel={false} />
        </div>
      )}

      {ex.options ? (
        <div className="space-y-2" role="radiogroup">
          {ex.options.map((op, k) => {
            const isSel = selected === k;
            const isAns = result !== null && k === ex.answer;
            const isWrongSel = result === false && isSel;
            return (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={isSel}
                onClick={() => result === null && setSelected(k)}
                className={`block w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                  isAns
                    ? 'border-ok bg-ok/15'
                    : isWrongSel
                      ? 'border-err bg-err/15'
                      : isSel
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:bg-elev'
                }`}
              >
                <span className="mr-2 font-mono text-muted">{String.fromCharCode(65 + k)}.</span>
                {typeof op === 'string' ? op : T(op as LText)}
              </button>
            );
          })}
        </div>
      ) : (
        <input
          type="text"
          value={text}
          disabled={result !== null}
          onChange={(e) => setText(e.target.value)}
          placeholder={ui('ex.typeanswer')}
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 font-mono text-sm focus:border-accent"
          aria-label={ui('ex.typeanswer')}
        />
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          disabled={result !== null || (ex.options ? selected === null : text.trim() === '')}
          className="rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-onaccent transition hover:opacity-90 disabled:opacity-40"
        >
          {ui('ex.check')}
        </button>
        <button
          type="button"
          onClick={() => setShowHint((s) => !s)}
          className="rounded-lg border border-border px-3 py-1.5 text-sm transition hover:bg-elev"
        >
          💡 {ui('ex.hint')}
        </button>
        {result !== null && (
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setSelected(null);
              setText('');
            }}
            className="rounded-lg border border-border px-3 py-1.5 text-sm transition hover:bg-elev"
          >
            ⟲ {ui('play.reset')}
          </button>
        )}
      </div>

      {showHint && result === null && (
        <p className="fade-up mt-3 rounded-lg bg-elev px-3 py-2 text-sm text-muted">💡 {T(ex.hint)}</p>
      )}

      {result !== null && (
        <div className={`fade-up mt-3 rounded-lg border p-3 ${result ? 'border-ok/50 bg-ok/10' : 'border-err/50 bg-err/10'}`} role="status">
          <p className={`mb-1 font-semibold ${result ? 'text-ok' : 'text-err'}`}>
            {result ? '✅ ' + ui('ex.correct') : '❌ ' + ui('ex.incorrect')}
          </p>
          <p className="text-sm leading-7">
            <strong>{ui('ex.explanation')}: </strong>
            {T(ex.explanation)}
          </p>
          {ex.reported && (
            <p className="mt-2 rounded-lg border border-warn/40 bg-warn/10 px-3 py-1.5 text-xs leading-6 text-warn" role="note">
              ⚠ <strong>{T({ en: 'reported in production', bn: 'উৎপাদনে অভিযোগকৃত' })}: </strong>
              {T(ex.reported)}
            </p>
          )}
          {ex.arms && (
            <div className="mt-2 space-y-1">
              {ex.arms.map((a, k) => (
                <div key={k} className="flex items-start gap-2 rounded-lg border border-border bg-elev px-2.5 py-1.5 text-xs leading-5">
                  <span className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] font-bold ${a.sols ? 'bg-ok/15 text-ok' : 'bg-err/15 text-err'}`}>
                    {a.sols === true ? '✓' : a.sols === false ? '✗' : '?'} {T({ en: `arm ${k + 1}`, bn: `শাখা ${k + 1}` })}
                  </span>
                  {a.ctx && <span className="text-muted">{T(a.ctx)}</span>}
                </div>
              ))}
            </div>
          )}
          {(ex.solution || ex.solutionLines) && !ex.options && (
            <div className="mt-2">
              <button type="button" onClick={() => setShowSolution((s) => !s)} className="text-sm font-semibold text-accent hover:underline">
                {ui('ex.solution')} {showSolution ? '▲' : '▼'}
              </button>
              {showSolution && (
                ex.solutionLines ? (
                  <pre className="codeblock mt-2 rounded-lg p-2 font-mono text-sm">
                    {ex.solutionLines.map((ln, k) => (
                      <div key={k}>
                        {ln.ctx && <span className="mr-2 select-none rounded bg-elev px-1 text-[10px] font-bold text-muted">{ln.ctx}</span>}
                        {T(ln.text)}
                      </div>
                    ))}
                  </pre>
                ) : (
                  <pre className="codeblock mt-2 rounded-lg p-2 font-mono text-sm">{ex.solution}</pre>
                )
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
