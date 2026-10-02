import { useMemo, useState } from 'react';
import type { Quiz, LText } from '../lib/types';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { CodeBlock } from './CodeBlock';

/** Quiz engine (Section 15): score, accuracy, per-topic weakness, retry. */

export function QuizPanel({ quiz }: { quiz: Quiz }) {
  const { T, ui } = useI18n();
  const { recordQuiz } = useProgress();
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);

  const q = quiz.questions[idx];

  const score = useMemo(
    () => answers.reduce<number>((acc, a, k) => acc + (a === quiz.questions[k].answer ? 1 : 0), 0),
    [answers, quiz.questions],
  );

  const weakTopics = useMemo(() => {
    const wrong = new Map<string, number>();
    answers.forEach((a, k) => {
      if (a !== quiz.questions[k].answer) {
        const t = quiz.questions[k].topic ?? 'general';
        wrong.set(t, (wrong.get(t) ?? 0) + 1);
      }
    });
    return [...wrong.keys()];
  }, [answers, quiz.questions]);

  const choose = (k: number) => {
    const next = [...answers];
    next[idx] = k;
    setAnswers(next);
  };

  const finish = () => {
    setFinished(true);
    recordQuiz(quiz.id ?? 'quiz', score, quiz.questions.length);
  };

  const restart = () => {
    setAnswers([]);
    setIdx(0);
    setFinished(false);
    setStarted(true);
  };

  if (!started) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center">
        <div className="mb-2 text-3xl" aria-hidden="true">📝</div>
        <h3 className="mb-1 text-lg font-bold">{T(quiz.title)}</h3>
        <p className="mb-4 text-sm text-muted">
          {quiz.questions.length} {T({ en: 'questions', bn: 'টি প্রশ্ন' })}
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="rounded-lg bg-accent px-6 py-2 font-semibold text-onaccent transition hover:opacity-90"
        >
          {ui('quiz.start')}
        </button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-bold">{ui('quiz.score')}</h3>
        <div className="mb-4 flex flex-wrap items-end gap-6">
          <div>
            <div className={`text-5xl font-extrabold ${pct >= 70 ? 'text-ok' : pct >= 40 ? 'text-warn' : 'text-err'}`}>
              {score}/{quiz.questions.length}
            </div>
            <div className="mt-1 text-sm text-muted">
              {ui('quiz.accuracy')}: {pct}%
            </div>
          </div>
          <div className="h-3 min-w-40 flex-1 overflow-hidden rounded-full bg-elev" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div
              className={`h-full rounded-full ${pct >= 70 ? 'bg-ok' : pct >= 40 ? 'bg-warn' : 'bg-err'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {weakTopics.length > 0 ? (
          <div className="mb-4 rounded-lg border border-warn/40 bg-warn/10 p-3">
            <div className="mb-1 text-sm font-semibold">🎯 {ui('quiz.weak')}</div>
            <div className="flex flex-wrap gap-2">
              {weakTopics.map((t) => (
                <span key={t} className="rounded-full bg-warn/20 px-2.5 py-1 font-mono text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="mb-4 rounded-lg border border-ok/40 bg-ok/10 p-3 text-sm font-semibold text-ok">
            {T({ en: 'Perfect — no weak topics detected. 🎉', bn: 'নিখুঁত — কোনো দুর্বল টপিক নেই। 🎉' })}
          </p>
        )}

        <ol className="mb-4 space-y-3">
          {quiz.questions.map((qq, k) => {
            const ok = answers[k] === qq.answer;
            return (
              <li key={qq.id} className={`rounded-lg border p-3 text-sm ${ok ? 'border-ok/40' : 'border-err/40'}`}>
                <div className="mb-1 font-medium">
                  {ok ? '✅' : '❌'} {k + 1}. {T(qq.question)}
                </div>
                {!ok && (
                  <div className="text-muted">
                    <strong className="text-ok">{T({ en: 'Correct:', bn: 'সঠিক:' })}</strong>{' '}
                    {qq.options && typeof qq.answer === 'number' ? (typeof qq.options[qq.answer] === 'string' ? qq.options[qq.answer] : T(qq.options[qq.answer] as LText)) : String(qq.answer)}
                    <div className="mt-1">{T(qq.explanation)}</div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <button
          type="button"
          onClick={restart}
          className="rounded-lg border border-border px-4 py-2 font-semibold transition hover:bg-elev"
        >
          ⟲ {ui('quiz.retry')}
        </button>
      </div>
    );
  }

  const answered = answers[idx] !== undefined && answers[idx] !== null;
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-center justify-between text-xs text-muted">
        <span className="font-mono">
          {idx + 1} / {quiz.questions.length}
        </span>
        <div className="flex gap-1" aria-hidden="true">
          {quiz.questions.map((_, k) => (
            <span
              key={k}
              className={`h-1.5 w-5 rounded-full ${answers[k] != null ? 'bg-accent' : 'bg-elev'}`}
            />
          ))}
        </div>
      </div>

      {quiz.examinee && quiz.examinee.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5" role="list" aria-label={T({ en: 'graded exhibits', bn: 'পরীক্ষিত সাক্ষ্যসমূহ' })}>
          {quiz.box !== undefined && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-accent">
              {T({ en: `MODE ${quiz.box}`, bn: `মোড ${quiz.box}` })}
            </span>
          )}
          {quiz.examinee.map((mark, k) => (
            <span
              key={k}
              role="listitem"
              className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold ${
                mark === '✓'
                  ? 'border-ok/40 bg-ok/10 text-ok'
                  : mark === '✗'
                    ? 'border-err/40 bg-err/10 text-err'
                    : 'border-border bg-elev text-muted'
              }`}
            >
              {mark === 'x' ? '✗' : mark} {T({ en: `ex ${k + 1}`, bn: `সাক্ষ্য ${k + 1}` })}
            </span>
          ))}
        </div>
      )}

      {q.loc && (
        <p className="mb-2 rounded-lg bg-elev px-2.5 py-1 font-mono text-[11px] leading-5 text-muted" role="note">
          ⌖ {T({ en: 'response location profile', bn: 'প্রতিক্রিয়া অবস্থান-পরিচিতি' })}: {q.loc === '--' ? T({ en: 'no measurable locality', bn: 'পরিমাপযোগ্য স্থানীয়তা নেই' }) : q.loc}
        </p>
      )}

      <h4 className="mb-3 font-medium leading-7">{T(q.question)}</h4>
      {q.code && (
        <div className="mb-3">
          <CodeBlock code={q.code} lang="js" showLabel={false} />
        </div>
      )}

      <div className="space-y-2" role="radiogroup">
        {q.options?.map((op, k) => (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={answers[idx] === k}
            onClick={() => choose(k)}
            className={`block w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
              answers[idx] === k ? 'border-accent bg-accent/10' : 'border-border hover:bg-elev'
            }`}
          >
            <span className="mr-2 font-mono text-muted">{String.fromCharCode(65 + k)}.</span>
            {typeof op === 'string' ? op : T(op as LText)}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={() => setIdx((v) => Math.max(0, v - 1))}
          disabled={idx === 0}
          className="rounded-lg border border-border px-4 py-1.5 text-sm transition hover:bg-elev disabled:opacity-40"
        >
          ←
        </button>
        {idx < quiz.questions.length - 1 ? (
          <button
            type="button"
            onClick={() => setIdx((v) => v + 1)}
            disabled={!answered}
            className="rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-onaccent transition hover:opacity-90 disabled:opacity-40"
          >
            →
          </button>
        ) : (
          <button
            type="button"
            onClick={finish}
            disabled={!answered}
            className="rounded-lg bg-ok px-4 py-1.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-40"
          >
            ✓ {ui('quiz.score')}
          </button>
        )}
      </div>
    </div>
  );
}
