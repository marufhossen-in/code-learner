import { useEffect, useMemo, useRef, useState } from 'react';
import type { LText } from '../../lib/types';
import { useI18n } from '../../lib/i18n';
import { CodeBlock } from '../CodeBlock';

/** CODE + VISUAL SYNCHRONIZATION (Section 38): step through execution with memory, stack, heap and output. */

interface MemCell {
  name: string;
  value: string;
  env: string;
}
interface Step {
  line: number;
  mem: MemCell[];
  heap: { id: string; value: string }[];
  stack: string[];
  out?: string;
  note: LText;
}
interface Scenario {
  code: string;
  steps: Step[];
}

export const EXEC_SCENARIOS: Record<string, Scenario> = {
  sum: {
    code: `const x = 10;
const y = 20;
const z = x + y;
console.log(z);`,
    steps: [
      {
        line: 1,
        mem: [{ name: 'x', value: '10', env: 'global' }],
        heap: [],
        stack: ['main()'],
        note: {
          en: 'Line 1: the number 10 is stored in memory; the name x now points to it.',
          bn: 'লাইন ১: মেমোরিতে 10 সংরক্ষিত হলো; x নামটি এখন সেখানে নির্দেশ করে।',
        },
      },
      {
        line: 2,
        mem: [
          { name: 'x', value: '10', env: 'global' },
          { name: 'y', value: '20', env: 'global' },
        ],
        heap: [],
        stack: ['main()'],
        note: { en: 'Line 2: same thing for y = 20.', bn: 'লাইন ২: y = 20-ও একইভাবে বসলো।' },
      },
      {
        line: 3,
        mem: [
          { name: 'x', value: '10', env: 'global' },
          { name: 'y', value: '20', env: 'global' },
          { name: 'z', value: '30', env: 'global' },
        ],
        heap: [],
        stack: ['main()'],
        note: {
          en: 'Line 3: the engine reads x and y FROM memory, computes 30, then stores z.',
          bn: 'লাইন ৩: ইঞ্জিন মেমোরি থেকে x ও y পড়ে 30 হিসাব করে z-তে রাখে।',
        },
      },
      {
        line: 4,
        mem: [
          { name: 'x', value: '10', env: 'global' },
          { name: 'y', value: '20', env: 'global' },
          { name: 'z', value: '30', env: 'global' },
        ],
        heap: [],
        stack: ['main()', 'console.log()'],
        out: '30',
        note: {
          en: 'Line 4: console.log is CALLED — its frame sits on top of the stack, prints 30, and pops.',
          bn: 'লাইন ৪: console.log কল হলো — ফ্রেমটি স্ট্যাকের উপরে বসে 30 প্রিন্ট করে সরে যায়।',
        },
      },
      {
        line: 4,
        mem: [
          { name: 'x', value: '10', env: 'global' },
          { name: 'y', value: '20', env: 'global' },
          { name: 'z', value: '30', env: 'global' },
        ],
        heap: [],
        stack: [],
        note: {
          en: 'Program finished: the stack is empty again. Variables stay in the global scope.',
          bn: 'প্রোগ্রাম শেষ: স্ট্যাক আবার খালি। ভেরিয়েবলগুলো গ্লোবাল স্কোপে থাকে।',
        },
      },
    ],
  },
  closure: {
    code: `function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,
    steps: [
      {
        line: 1,
        mem: [{ name: 'makeCounter', value: 'fn #1', env: 'global' }],
        heap: [{ id: 'fn #1', value: 'makeCounter()' }],
        stack: ['main()'],
        note: {
          en: 'Before anything runs, declarations are registered: makeCounter is stored in global memory.',
          bn: 'কিছু চলার আগেই ডিক্লেয়ারেশন নিবন্ধিত হয়: makeCounter গ্লোবাল মেমোরিতে বসলো।',
        },
      },
      {
        line: 9,
        mem: [{ name: 'makeCounter', value: 'fn #1', env: 'global' }],
        heap: [{ id: 'fn #1', value: 'makeCounter()' }],
        stack: ['main()', 'makeCounter()'],
        note: {
          en: 'makeCounter() is CALLED — a new frame is pushed on the call stack with its own environment.',
          bn: 'makeCounter() কল হলো — নিজস্ব environment-সহ নতুন ফ্রেম স্ট্যাকে ঢুকলো।',
        },
      },
      {
        line: 2,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'count', value: '0', env: 'env A (makeCounter)' },
        ],
        heap: [{ id: 'fn #1', value: 'makeCounter()' }],
        stack: ['main()', 'makeCounter()'],
        note: {
          en: 'count = 0 lives in environment A — the private record of this call.',
          bn: 'count = 0 বসলো environment A-তে — এই কলের প্রাইভেট রেকর্ডে।',
        },
      },
      {
        line: 3,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'count', value: '0', env: 'env A (makeCounter)' },
        ],
        heap: [
          { id: 'fn #1', value: 'makeCounter()' },
          { id: 'fn #2', value: 'anonymous → [[Env]] = A' },
        ],
        stack: ['main()', 'makeCounter()'],
        note: {
          en: 'A new function object is created in the HEAP — with a hidden link [[Environment]] pointing back to A.',
          bn: 'হিপে নতুন ফাংশন অবজেক্ট তৈরি হলো — গোপন লিংক [[Environment]] দিয়ে A-কে নির্দেশ করে।',
        },
      },
      {
        line: 9,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'counter', value: 'fn #2', env: 'global' },
          { name: 'count', value: '0', env: 'env A (kept alive!)' },
        ],
        heap: [
          { id: 'fn #1', value: 'makeCounter()' },
          { id: 'fn #2', value: 'anonymous → [[Env]] = A' },
        ],
        stack: ['main()'],
        note: {
          en: 'makeCounter’s frame is POPPED — but environment A survives on the heap, because fn #2 still references it. THAT is the closure.',
          bn: 'makeCounter-এর ফ্রেম সরে গেলো — কিন্তু fn #2 রেফার করে বলে environment A হিপে টিকে রইল। এটাই ক্লোজার।',
        },
      },
      {
        line: 10,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'counter', value: 'fn #2', env: 'global' },
          { name: 'count', value: '1', env: 'env A (kept alive!)' },
        ],
        heap: [
          { id: 'fn #1', value: 'makeCounter()' },
          { id: 'fn #2', value: 'anonymous → [[Env]] = A' },
        ],
        stack: ['main()', 'fn #2 (counter)'],
        note: {
          en: 'counter() runs: it finds no local count, walks the scope chain into env A, and increments it to 1.',
          bn: 'counter() চলছে: লোকালে count নেই, স্কোপ চেইন ধরে env A-তে গিয়ে 1 করে দিলো।',
        },
      },
      {
        line: 10,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'counter', value: 'fn #2', env: 'global' },
          { name: 'count', value: '1', env: 'env A (kept alive!)' },
        ],
        heap: [
          { id: 'fn #1', value: 'makeCounter()' },
          { id: 'fn #2', value: 'anonymous → [[Env]] = A' },
        ],
        stack: ['main()'],
        out: '1',
        note: { en: 'fn #2 returns 1 → console.log prints 1, both frames pop.', bn: 'fn #2 রিটার্ন করে 1 → console.log প্রিন্ট করে 1, ফ্রেম দুটো সরে যায়।' },
      },
      {
        line: 11,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'counter', value: 'fn #2', env: 'global' },
          { name: 'count', value: '2', env: 'env A (kept alive!)' },
        ],
        heap: [
          { id: 'fn #1', value: 'makeCounter()' },
          { id: 'fn #2', value: 'anonymous → [[Env]] = A' },
        ],
        stack: ['main()'],
        out: '1\n2',
        note: {
          en: 'Second call: the SAME env A is re-entered — count was NOT reset. It is now 2.',
          bn: 'দ্বিতীয় কল: সেই একই env A-তে আবার ঢুকলো — count রিসেট হয়নি। এখন 2।',
        },
      },
      {
        line: 12,
        mem: [
          { name: 'makeCounter', value: 'fn #1', env: 'global' },
          { name: 'counter', value: 'fn #2', env: 'global' },
          { name: 'count', value: '3', env: 'env A (kept alive!)' },
        ],
        heap: [
          { id: 'fn #1', value: 'makeCounter()' },
          { id: 'fn #2', value: 'anonymous → [[Env]] = A' },
        ],
        stack: ['main()'],
        out: '1\n2\n3',
        note: {
          en: 'Third call → 3. From outside, count is unreachable — truly private state, powered only by the closure.',
          bn: 'তৃতীয় কল → 3। বাইরে থেকে count-এ পৌঁছানো যায় না — ক্লোজারের শক্তিতেই সত্যিকারের প্রাইভেট স্টেট।',
        },
      },
    ],
  },
};

export function ExecutionVisualizer({ scenario = 'sum' }: { scenario?: string }) {
  const { T, ui } = useI18n();
  const sc = EXEC_SCENARIOS[scenario] ?? EXEC_SCENARIOS.sum;
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);
  const step = sc.steps[i];

  useEffect(() => {
    if (!playing) return;
    timer.current = window.setInterval(() => {
      setI((v) => {
        if (v >= sc.steps.length - 1) {
          setPlaying(false);
          return v;
        }
        return v + 1;
      });
    }, 1600);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [playing, sc.steps.length]);

  const reset = () => {
    setPlaying(false);
    setI(0);
  };

  const btn = useMemo(
    () =>
      'rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text transition hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface',
    [],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <button type="button" className={btn} onClick={() => setPlaying((p) => !p)}>
          {playing ? '⏸ ' + ui('viz.pause') : '▶ ' + ui('viz.play')}
        </button>
        <button type="button" className={btn} onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
          ←
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => setI((v) => Math.min(sc.steps.length - 1, v + 1))}
          disabled={i === sc.steps.length - 1}
        >
          {ui('viz.step')} →
        </button>
        <button type="button" className={btn} onClick={reset}>
          ⟲ {ui('viz.reset')}
        </button>
        <span className="ml-auto font-mono text-xs text-muted">
          {ui('viz.step')} {i + 1} {ui('viz.stepof')} {sc.steps.length}
        </span>
      </div>

      <div className="grid gap-3 p-3 md:grid-cols-2">
        <div>
          <CodeBlock code={sc.code} lang="js" highlightLine={step.line} showLabel={false} />
          <p className="mt-3 rounded-lg bg-elev px-3 py-2 text-sm leading-relaxed text-text fade-up" key={i}>
            {T(step.note)}
          </p>
        </div>

        <div className="grid gap-3">
          <div className="node-box rounded-lg border border-border">
            <div className="border-b border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              {ui('viz.memory')}
            </div>
            <table className="w-full text-sm">
              <tbody>
                {step.mem.map((c) => (
                  <tr key={c.name + c.env} className="border-b border-border/50 last:border-0">
                    <td className="px-3 py-1.5 font-mono text-accent">{c.name}</td>
                    <td className="px-3 py-1.5 font-mono">{c.value}</td>
                    <td className="px-3 py-1.5 text-right text-xs text-muted">{c.env}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="node-box rounded-lg border border-border">
              <div className="border-b border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                {ui('viz.callstack')}
              </div>
              <div className="flex min-h-20 flex-col-reverse justify-start gap-1 p-2">
                {step.stack.length === 0 ? (
                  <span className="px-1 text-xs italic text-muted">∅</span>
                ) : (
                  step.stack.map((f, k) => (
                    <span
                      key={f + k}
                      className={`rounded border px-2 py-1 font-mono text-xs ${
                        k === step.stack.length - 1
                          ? 'border-accent bg-accent/15 text-text'
                          : 'border-border bg-elev text-muted'
                      }`}
                    >
                      {f}
                    </span>
                  ))
                )}
              </div>
            </div>
            <div className="node-box rounded-lg border border-border">
              <div className="border-b border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                {ui('viz.heap')}
              </div>
              <div className="flex min-h-20 flex-col gap-1 p-2">
                {step.heap.length === 0 ? (
                  <span className="px-1 text-xs italic text-muted">∅</span>
                ) : (
                  step.heap.map((h) => (
                    <span key={h.id} className="rounded border border-border bg-elev px-2 py-1 font-mono text-[11px] text-text">
                      <span className="text-accent2">{h.id}</span> · {h.value}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="node-box rounded-lg border border-border">
            <div className="border-b border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
              {ui('viz.output')}
            </div>
            <pre className="codeblock min-h-14 rounded-none border-0 p-2 font-mono text-sm">
              {step.out ?? ''}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
