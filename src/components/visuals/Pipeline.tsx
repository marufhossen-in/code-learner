import { useEffect, useRef, useState } from 'react';
import type { LText } from '../../lib/types';
import { useI18n } from '../../lib/i18n';

/** Generic synchronized pipeline animator (Section 37): each step lights up one diagram stage. */

export interface PipeStep {
  label: string;
  icon: string;
  desc: LText;
}

export function Pipeline({ steps, autoMs = 1300 }: { steps: PipeStep[]; autoMs?: number }) {
  const { T, ui } = useI18n();
  const [i, setI] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = window.setInterval(() => {
      setI((v) => {
        if (v >= steps.length - 1) {
          setPlaying(false);
          return v;
        }
        return v + 1;
      });
    }, autoMs);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [playing, steps.length, autoMs]);

  const play = () => {
    setI(0);
    setPlaying(true);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <button
          type="button"
          onClick={play}
          className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium transition hover:bg-elev"
        >
          ▶ {ui('viz.play')}
        </button>
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setI(-1);
          }}
          className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium transition hover:bg-elev"
        >
          ⟲ {ui('viz.reset')}
        </button>
        <span className="ml-auto text-xs text-muted">
          {i >= 0 ? `${i + 1} / ${steps.length}` : `— / ${steps.length}`}
        </span>
      </div>
      <div className="grid gap-0 p-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ol className="scrolly max-h-105 space-y-1 overflow-y-auto pr-2">
          {steps.map((s, k) => (
            <li key={s.label}>
              <div
                className={`node-box flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                  k === i ? 'node-active bg-accent/10' : k < i ? 'border-border opacity-75' : 'border-border'
                }`}
                aria-current={k === i ? 'step' : undefined}
              >
                <span aria-hidden="true">{s.icon}</span>
                <span className="font-mono font-medium">{s.label}</span>
                {k < i && (
                  <span className="ml-auto text-ok" aria-label="done">
                    ✓
                  </span>
                )}
              </div>
              {k < steps.length - 1 && (
                <div className="flex justify-center py-0.5" aria-hidden="true">
                  <svg width="12" height="14" viewBox="0 0 12 14" className={k === i ? 'text-accent' : 'text-border'}>
                    <path d="M6 0 V10 M1.5 6 L6 12 L10.5 6" stroke="currentColor" strokeWidth="1.6" fill="none" className={k === i ? 'flow-arrow' : ''} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-3 sm:mt-0 sm:pl-3">
          {i >= 0 ? (
            <div key={i} className="fade-up h-full rounded-lg border border-accent/40 bg-accent/10 p-4">
              <div className="mb-1 text-2xl" aria-hidden="true">
                {steps[i].icon}
              </div>
              <h4 className="mb-1 font-mono font-semibold">{steps[i].label}</h4>
              <p className="text-sm leading-relaxed text-text/90">{T(steps[i].desc)}</p>
            </div>
          ) : (
            <div className="flex h-full min-h-32 items-center justify-center rounded-lg border border-dashed border-border p-4 text-sm text-muted">
              {ui('viz.play')} ▶
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** The full browser rendering pipeline (Section 8). */
export const BROWSER_PIPELINE: PipeStep[] = [
  { label: 'URL', icon: '⌨️', desc: { en: 'You type https://example.com and press Enter.', bn: 'আপনি https://example.com লিখে Enter চাপলেন।' } },
  { label: 'DNS', icon: '📇', desc: { en: 'The resolver turns the hostname into an IP address (e.g. 93.184.216.34), checking caches first.', bn: 'রিজলভার হোস্টনেমকে IP ঠিকানায় বদলায় (যেমন 93.184.216.34) — আগে ক্যাশ দেখে।' } },
  { label: 'TCP', icon: '🤝', desc: { en: 'A connection is opened with the three-way handshake: SYN → SYN-ACK → ACK.', bn: 'তিন-ধাপের হ্যান্ডশেকে কানেকশন খোলে: SYN → SYN-ACK → ACK।' } },
  { label: 'TLS', icon: '🔒', desc: { en: 'Certificates are verified, keys are exchanged — from here on everything is encrypted.', bn: 'সার্টিফিকেট যাচাই হলো, কি বিনিময় হলো — এখন থেকে সবকিছু এনক্রিপ্টেড।' } },
  { label: 'HTTP', icon: '📨', desc: { en: 'The browser sends GET / with headers (cookies, accept, user-agent).', bn: 'ব্রাউজার হেডারসহ (কুকি, accept, user-agent) GET / পাঠায়।' } },
  { label: 'Server', icon: '🖥️', desc: { en: 'A reverse proxy routes to an app server, which may query databases and caches.', bn: 'রিভার্স প্রক্সি অ্যাপ সার্ভারে পাঠায়, যা ডেটাবেস ও ক্যাশে কোয়েরি করতে পারে।' } },
  { label: 'Response', icon: '📦', desc: { en: 'Status 200 + headers (cache-control, content-type) + HTML body stream back.', bn: 'স্ট্যাটাস 200 + হেডার (cache-control, content-type) + HTML বডি ফিরে আসে।' } },
  { label: 'HTML parsing', icon: '🧩', desc: { en: 'Bytes → characters → tokens → nodes. The parser works incrementally as data arrives.', bn: 'বাইট → ক্যারেক্টার → টোকেন → নোড। ডেটা আসতেই পার্সার কাজ করে।' } },
  { label: 'DOM', icon: '🌳', desc: { en: 'The live document tree is born — this is what JavaScript can see and change.', bn: 'জীবন্ত ডকুমেন্ট ট্রি তৈরি হলো — জাভাস্ক্রিপ্ট এটিই দেখে ও বদলায়।' } },
  { label: 'CSSOM', icon: '🎨', desc: { en: 'CSS rules are parsed into their own tree of styles (blocking render).', bn: 'CSS নিয়মগুলো আলাদা স্টাইল ট্রিতে পার্স হয় (রেন্ডার ব্লক করে)।' } },
  { label: 'Render Tree', icon: '🌲', desc: { en: 'DOM + CSSOM merge, dropping invisible nodes (display:none, <head>).', bn: 'DOM + CSSOM মিলে গেলো, অদৃশ্য নোড (display:none, <head>) বাদ।' } },
  { label: 'Layout', icon: '📐', desc: { en: 'Geometry: the exact box (x, y, width, height) of every visible node is computed.', bn: 'জ্যামিতি: প্রতিটি দৃশ্যমান নোডের নির্ভুল বাক্স (x, y, width, height) হিসাব করা হয়।' } },
  { label: 'Paint', icon: '🖌️', desc: { en: 'Pixels are drawn: text, colors, borders, shadows — layer by layer.', bn: 'পিক্সেল আঁকা হয়: টেক্সট, রং, বর্ডার, ছায়া — লেয়ার ধরে ধরে।' } },
  { label: 'Composite', icon: '🧱', desc: { en: 'Layers are merged by the GPU — transforms and opacity animate cheaply here.', bn: 'GPU লেয়ারগুলো একত্র করে — ট্রান্সফর্ম ও অপাসিটি এখানে সস্তায় অ্যানিমেট হয়।' } },
  { label: 'Screen', icon: '✨', desc: { en: 'The frame is presented. From Enter to pixels: often under one second.', bn: 'ফ্রেমটি দেখা গেলো। Enter থেকে পিক্সেল: প্রায়ই এক সেকেন্ডেরও কম।' } },
];
