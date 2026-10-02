import { useEffect, useRef, useState } from 'react';
import type { LText } from '../../lib/types';
import { useI18n } from '../../lib/i18n';
import { CodeBlock } from '../CodeBlock';

/** EVENT LOOP visualization (Section 6/37): text and diagram stay synchronized, with PLAY. */

interface Frame {
  line: number;
  stack: string[];
  webapis: string[];
  micro: string[];
  macro: string[];
  out?: string;
  active: 'stack' | 'web' | 'micro' | 'macro' | 'loop' | 'out';
  note: LText;
}

const CODE = `console.log("A: start");
setTimeout(() => console.log("B: timeout"), 0);
Promise.resolve().then(() => console.log("C: promise"));
console.log("D: end");`;

const FRAMES: Frame[] = [
  {
    line: 1, stack: ['main script'], webapis: [], micro: [], macro: [], active: 'stack',
    note: { en: 'The script is the first TASK. It runs on the call stack from top to bottom.', bn: 'স্ক্রিপ্টটি প্রথম টাস্ক। কল স্ট্যাকে উপর থেকে নিচে চলে।' },
  },
  {
    line: 1, stack: ['main script', 'log()'], webapis: [], micro: [], macro: [], out: 'A: start', active: 'out',
    note: { en: 'console.log is synchronous: it prints "A: start" immediately.', bn: 'console.log সিঙ্ক্রোনাস: সাথে সাথে "A: start" প্রিন্ট করে।' },
  },
  {
    line: 2, stack: ['main script'], webapis: ['⏱ timer (0ms)'], micro: [], macro: [], active: 'web',
    note: {
      en: 'setTimeout is handed to the BROWSER (Web API). The browser counts 0ms on its own — JavaScript does not wait.',
      bn: 'setTimeout ব্রাউজারের (Web API) হাতে দেওয়া হলো। ব্রাউজার আলাদা 0ms গুনছে — জাভাস্ক্রিপ্ট অপেক্ষা করে না।',
    },
  },
  {
    line: 3, stack: ['main script'], webapis: ['⏱ timer (0ms)'], micro: ['then() → "C"'], macro: [], active: 'micro',
    note: {
      en: 'Promise.resolve() is already resolved, so its .then callback is queued as a MICROTASK — high priority.',
      bn: 'Promise.resolve() আগে থেকেই resolved, তাই .then কলব্যাক মাইক্রোটাস্ক হিসেবে কিউতে গেলো — উচ্চ অগ্রাধিকার।',
    },
  },
  {
    line: 4, stack: ['main script', 'log()'], webapis: ['⏱ timer (0ms)'], micro: ['then() → "C"'], macro: [], out: 'A: start\nD: end', active: 'out',
    note: { en: 'Still inside the task: "D: end" prints. The timer and the promise must keep waiting.', bn: 'এখনো টাস্কের ভেতরে: "D: end" প্রিন্ট হলো। টাইমার ও প্রমিজকে অপেক্ষা করতে হচ্ছে।' },
  },
  {
    line: 4, stack: [], webapis: [], micro: ['then() → "C"'], macro: ['timeout cb → "B"'], active: 'loop',
    note: {
      en: 'The stack is EMPTY. The event loop now looks at the queues. The 0ms timer finished long ago — its callback moved to the task queue.',
      bn: 'স্ট্যাক খালি। ইভেন্ট লুপ এখন কিউগুলো দেখছে। 0ms টাইমার কবে শেষ — কলব্যাকটি টাস্ক কিউতে চলে এসেছে।',
    },
  },
  {
    line: 3, stack: ['run microtasks'], webapis: [], micro: [], macro: ['timeout cb → "B"'], out: 'A: start\nD: end\nC: promise', active: 'micro',
    note: {
      en: 'RULE: microtasks always go first — ALL of them. The promise callback prints "C: promise".',
      bn: 'নিয়ম: মাইক্রোটাস্ক সবসময় আগে — সবগুলো। প্রমিজ কলব্যাক "C: promise" প্রিন্ট করলো।',
    },
  },
  {
    line: 2, stack: ['timeout cb'], webapis: [], micro: [], macro: [], out: 'A: start\nD: end\nC: promise\nB: timeout', active: 'macro',
    note: {
      en: 'Only NOW does the loop take ONE macrotask: the timer callback finally prints "B: timeout".',
      bn: 'এবারই লুপ একটি ম্যাক্রোটাস্ক নিলো: টাইমার কলব্যাক অবশেষে "B: timeout" প্রিন্ট করলো।',
    },
  },
  {
    line: 4, stack: [], webapis: [], micro: [], macro: [], out: 'A: start\nD: end\nC: promise\nB: timeout', active: 'loop',
    note: {
      en: 'Final order: A → D → C → B. Sync first, microtasks second, macrotasks last. The loop idles until new work arrives.',
      bn: 'চূড়ান্ত ক্রম: A → D → C → B। আগে সিঙ্ক, তারপর মাইক্রোটাস্ক, শেষে ম্যাক্রোটাস্ক। নতুন কাজ না আসা পর্যন্ত লুপ অলস।',
    },
  },
];

const btnC =
  'rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text transition hover:bg-elev disabled:opacity-40';

function QueueBox({
  title,
  items,
  active,
  hint,
}: {
  title: string;
  items: string[];
  active: boolean;
  hint?: string;
}) {
  return (
    <div
      className={`node-box rounded-lg border bg-surface ${active ? 'node-active border' : 'border-border'}`}
      aria-current={active ? 'true' : undefined}
    >
      <div className="border-b border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
        {title}
      </div>
      <div className="flex min-h-16 flex-col gap-1 p-2">
        {items.length === 0 ? (
          <span className="px-1 text-xs italic text-muted">∅ {hint ?? ''}</span>
        ) : (
          items.map((it) => (
            <span key={it} className={`rounded border border-accent/50 bg-accent/15 px-2 py-1 font-mono text-[11px] ${active ? 'soft-pulse' : ''}`}>
              {it}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export function EventLoopLab() {
  const { T, ui } = useI18n();
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const timer = useRef<number | null>(null);
  const f = FRAMES[i];

  useEffect(() => {
    if (!playing) return;
    timer.current = window.setInterval(() => {
      setI((v) => {
        if (v >= FRAMES.length - 1) {
          setPlaying(false);
          return v;
        }
        return v + 1;
      });
    }, 1700 / speed);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [playing, speed]);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2">
        <button type="button" className={btnC} onClick={() => setPlaying((p) => !p)}>
          {playing ? '⏸ ' + ui('viz.pause') : '▶ ' + ui('viz.play')}
        </button>
        <button type="button" className={btnC} onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
          ←
        </button>
        <button type="button" className={btnC} onClick={() => setI((v) => Math.min(FRAMES.length - 1, v + 1))} disabled={i === FRAMES.length - 1}>
          {ui('viz.step')} →
        </button>
        <button
          type="button"
          className={btnC}
          onClick={() => {
            setPlaying(false);
            setI(0);
          }}
        >
          ⟲ {ui('viz.reset')}
        </button>
        <label className="ml-auto flex items-center gap-2 text-xs text-muted">
          {ui('viz.speed')}
          <input
            type="range"
            min={1}
            max={3}
            step={0.5}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-20 accent-[var(--accent)]"
          />
        </label>
        <span className="font-mono text-xs text-muted">
          {i + 1} {ui('viz.stepof')} {FRAMES.length}
        </span>
      </div>

      <div className="grid gap-3 p-3 lg:grid-cols-2">
        <div>
          <CodeBlock code={CODE} lang="js" highlightLine={f.line} showLabel={false} />
          <p key={i} className="fade-up mt-3 rounded-lg bg-elev px-3 py-2 text-sm leading-relaxed">
            {T(f.note)}
          </p>
          <div className="mt-3">
            <div className={`node-box rounded-lg border ${f.active === 'out' ? 'node-active' : 'border-border'}`}>
              <div className="border-b border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
                {ui('viz.output')}
              </div>
              <pre className="codeblock min-h-24 rounded-none border-0 p-2 font-mono text-sm">{f.out ?? ''}</pre>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <QueueBox title={ui('viz.callstack')} items={f.stack} active={f.active === 'stack'} />
            <QueueBox title={ui('viz.webapis')} items={f.webapis} active={f.active === 'web'} />
          </div>

          <div className="flex items-center justify-center" aria-hidden="true">
            <svg width="24" height="30" viewBox="0 0 24 30" className="text-accent">
              <path d="M12 0 V22 M5 15 L12 24 L19 15" stroke="currentColor" strokeWidth="2" fill="none" className="flow-arrow" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <QueueBox title={ui('viz.micro')} items={f.micro} active={f.active === 'micro'} />
            <div className={`flex flex-col items-center ${f.active === 'loop' ? 'soft-pulse' : ''}`}>
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full border-2 text-center text-[10px] font-bold uppercase leading-tight ${
                  f.active === 'loop' ? 'node-active' : 'border-border'
                }`}
              >
                ♻️
                <br />
                {ui('viz.loop')}
              </div>
            </div>
            <QueueBox title={ui('viz.macro')} items={f.macro} active={f.active === 'macro'} />
          </div>
        </div>
      </div>
    </div>
  );
}
