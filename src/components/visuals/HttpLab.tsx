import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { httpSteps, HTTP_SCENES, type HttpScene, type HttpStep, type HttpVerdict, type HttpLedger } from './httpSim';

/** The Envelope Ledger: one fixed twelve-beat conversation between a browser and
 *  an origin, walked by four client laws. The absent-minded browser pays 122,300
 *  origin bytes; the validator pays 69,300 by never missing an If-None-Match;
 *  the proxy clerk pays the same bytes with one fewer origin trip; and the
 *  method purist matches the clerk while refusing the 302 demotion of POST. */

const chip = 'rounded-full border px-2.5 py-1 text-[11px] font-mono transition cursor-pointer';

const SCENE_LIST: { id: HttpScene; color: string }[] = [
  { id: 'naive', color: 'border-rose-500/60 bg-rose-500/10 text-rose-300' },
  { id: 'conditional', color: 'border-sky-500/60 bg-sky-500/10 text-sky-300' },
  { id: 'layered', color: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300' },
  { id: 'strict', color: 'border-amber-500/60 bg-amber-500/10 text-amber-300' },
];

const OC: Record<HttpVerdict, { cls: string; en: string; bn: string; icon: string }> = {
  'fresh-fetch': { cls: 'border-cyan-500/70 bg-cyan-500/15 text-cyan-300', en: 'fresh fetch', bn: 'প্রথম আনয়ন', icon: '✦' },
  refetch: { cls: 'border-rose-500/70 bg-rose-500/15 text-rose-300', en: 'refetch', bn: 'পুনরায়ন', icon: '⊘' },
  'not-modified': { cls: 'border-emerald-500/70 bg-emerald-500/15 text-emerald-300', en: '304 seal kept', bn: '৩০৪ সিল অক্ষত', icon: '✓' },
  'cache-hit': { cls: 'border-amber-400/70 bg-amber-400/15 text-amber-200', en: 'cache hit', bn: 'ক্যাশ-হিট', icon: '⚡' },
  redirect: { cls: 'border-blue-500/70 bg-blue-500/15 text-blue-300', en: 'redirect', bn: 'পুনর্নির্দেশ', icon: '↪' },
  'method-rewritten': { cls: 'border-orange-500/70 bg-orange-500/15 text-orange-300', en: 'method rewritten', bn: 'পদ্ধতি পুনর্লিখিত', icon: '✎' },
  'method-kept': { cls: 'border-teal-500/70 bg-teal-500/15 text-teal-300', en: 'method kept', bn: 'পদ্ধতি রক্ষিত', icon: '✊' },
  challenge: { cls: 'border-fuchsia-500/70 bg-fuchsia-500/15 text-fuchsia-300', en: '401 challenge', bn: '৪০১ চ্যালেঞ্জ', icon: '🛡' },
  retried: { cls: 'border-emerald-500/70 bg-emerald-500/20 text-emerald-300', en: 'retried ✓', bn: 'শংসাপত্রসহ পুনঃচেষ্টা ✓', icon: '🔑' },
  served: { cls: 'border-edge bg-panel/40 text-muted', en: 'served', bn: 'পরিবেশিত', icon: '·' },
};

const LEDGER: { k: keyof HttpLedger; en: string; bn: string }[] = [
  { k: 'requests', en: 'requests', bn: 'অনুরোধ' },
  { k: 'originHits', en: 'origin knocks', bn: 'অরিজিন-ধক' },
  { k: 'originBytes', en: 'origin bytes', bn: 'অরিজিন-বাইট' },
  { k: 'cacheHits', en: 'cache hits', bn: 'ক্যাশ-হিট' },
  { k: 'revalidations', en: 'revalidations', bn: 'পুনঃযাচাই' },
  { k: 'notModified', en: '304 sealed', bn: '৩০৪ সিল' },
  { k: 'challenges', en: '401 challenges', bn: '৪০১ চ্যালেঞ্জ' },
  { k: 'rewrites', en: 'method rewrites', bn: 'পদ্ধতি-পুনর্লিখন' },
  { k: 'redirects', en: 'redirects followed', bn: 'পুনর্নির্দেশ অনুসৃত' },
];

const STATUS_CLS: Record<number, string> = {
  200: 'text-emerald-300',
  301: 'text-blue-300',
  302: 'text-orange-300',
  304: 'text-teal-300',
  401: 'text-fuchsia-300',
};

function Envelope({ step, T }: { step: HttpStep; T: (p: { en: string; bn: string }) => string }) {
  const b = step.beat;
  const oc = OC[step.verdict];
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-edge bg-panel/60 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted">→ request</span>
          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-mono ${oc.cls}`}>{oc.icon} {T({ en: oc.en, bn: oc.bn })}</span>
        </div>
        <div className="font-mono text-sm text-fg">
          <span className="font-bold text-sky-300">{step.requestMethod}</span>{' '}
          <span className="text-fg/90">{b.url}</span>{' '}
          <span className="text-muted">HTTP/1.1</span>
        </div>
        <dl className="mt-2 space-y-1 border-t border-edge/60 pt-2 font-mono text-xs">
          {b.reqBytes > 0 && (
            <div className="flex gap-2"><dt className="text-muted">Content-Length</dt><dd className="text-fg/80">{b.reqBytes}</dd></div>
          )}
          {step.askHeaders.map((h) => (
            <div key={h.k} className="flex gap-2">
              <dt className="font-semibold text-amber-300/90">{h.k}</dt>
              <dd className="text-fg/80">{h.v}</dd>
            </div>
          ))}
          {(b.i === 11) && (
            <div className="flex gap-2"><dt className="font-semibold text-amber-300/90">Authorization</dt><dd className="text-fg/80">Bearer tk-live</dd></div>
          )}
        </dl>
      </div>
      <div className="rounded-xl border border-edge bg-panel/60 p-4">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">← response</div>
        <div className="font-mono text-sm">
          <span className="text-muted">HTTP/1.1</span>{' '}
          <span className={`font-bold ${STATUS_CLS[step.seenStatus] ?? 'text-fg'}`}>{step.seenStatus}</span>{' '}
          <span className="text-fg/80">{step.seenStatus === 304 ? 'Not Modified' : step.seenStatus === 401 ? 'Unauthorized' : step.seenStatus === 301 ? 'Moved Permanently' : step.seenStatus === 302 ? 'Found' : 'OK'}</span>
          {step.fromCache && <span className="ml-2 rounded bg-amber-400/15 px-1.5 py-0.5 text-[10px] text-amber-200">from cache</span>}
        </div>
        <dl className="mt-2 space-y-1 border-t border-edge/60 pt-2 font-mono text-xs">
          {b.headers.map((h) => (
            <div key={h.k} className="flex gap-2">
              <dt className="font-semibold text-violet-300/90">{h.k}</dt>
              <dd className="text-fg/80">{h.v}</dd>
            </div>
          ))}
          <div className="flex gap-2">
            <dt className="text-muted">body bytes over wire</dt>
            <dd className="text-fg/80">
              {step.seenStatus === 304 || step.fromCache ? '0' : (b.bodyBytes || b.noteBytes || 0).toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function HttpLab() {
  const { T } = useI18n();
  const [scene, setScene] = useState<HttpScene>('naive');
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const steps = useMemo(() => httpSteps(scene), [scene]);
  const step = steps[idx];

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setIdx((i) => {
        if (i >= steps.length - 1) { setPlaying(false); return i; }
        return i + 1;
      });
    }, 1400);
    return () => clearInterval(t);
  }, [playing, steps.length]);

  const pick = (s: HttpScene) => { setScene(s); setIdx(0); setPlaying(false); };

  return (
    <div className="space-y-4 rounded-2xl border border-edge bg-bg-alt/60 p-4">
      {/* scene rail */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[11px] font-bold uppercase tracking-widest text-muted">
          {T({ en: 'client law:', bn: 'ক্লায়েন্ট-বিধান:' })}
        </span>
        {SCENE_LIST.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => pick(s.id)}
            className={`${chip} ${scene === s.id ? s.color : 'border-edge bg-panel/30 text-muted hover:text-fg'}`}
          >
            {T(HTTP_SCENES[s.id].name)}
          </button>
        ))}
        <span className="ml-auto hidden max-w-md text-[11px] leading-4 text-muted lg:block">{T(HTTP_SCENES[scene].arc)}</span>
      </div>

      {/* transport */}
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={chip + ' border-edge bg-panel/40 text-fg'} onClick={() => setIdx((i) => Math.max(0, i - 1))}>◀ {T({ en: 'back', bn: 'পেছনে' })}</button>
        <button
          type="button"
          className={chip + ' border-cyan-500/60 bg-cyan-500/15 text-cyan-200'}
          onClick={() => { if (idx >= steps.length - 1) setIdx(0); setPlaying(!playing); }}
        >
          {playing ? `⏸ ${T({ en: 'pause', bn: 'বিরতি' })}` : `▶ ${T({ en: 'play', bn: 'চালান' })}`}
        </button>
        <button type="button" className={chip + ' border-edge bg-panel/40 text-fg'} onClick={() => setIdx((i) => Math.min(steps.length - 1, i + 1))}>{T({ en: 'step', bn: 'ধাপ' })} ▶</button>
        <button type="button" className={chip + ' border-edge bg-panel/40 text-muted'} onClick={() => { setIdx(0); setPlaying(false); }}>↺ {T({ en: 'reset', bn: 'রিসেট' })}</button>
        <span className="ml-auto font-mono text-xs text-muted">{T({ en: 'beat', bn: 'ছন্দ' })} {step.i}/12</span>
      </div>

      {/* fate-line strip */}
      <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-12">
        {steps.map((s, k) => {
          const o = OC[s.verdict];
          return (
            <button
              key={s.i}
              type="button"
              onClick={() => { setIdx(k); setPlaying(false); }}
              title={T({ en: o.en, bn: o.bn })}
              className={`rounded-lg border px-1 py-1.5 text-center font-mono text-[10px] transition ${
                k === idx ? `${o.cls} ring-1 ring-current` : 'border-edge/60 bg-panel/20 text-muted hover:text-fg'
              }`}
            >
              <div className="text-sm leading-none">{o.icon}</div>
              <div className="mt-1 truncate">{`${s.beat.method[0]}${s.beat.url.replace('/api/', '·').replace('/assets/', '·')}`}</div>
            </button>
          );
        })}
      </div>

      {/* envelopes */}
      <Envelope step={step} T={T} />

      {/* narration */}
      <p className="rounded-xl border border-edge bg-panel/40 p-3 text-[13px] leading-6 text-fg/85">{T(step.msg)}</p>

      {/* ledger */}
      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-9">
        {LEDGER.map((c) => (
          <div key={c.k} className="rounded-lg border border-edge/70 bg-panel/30 px-2 py-1.5 text-center">
            <div className="font-mono text-sm font-bold text-fg">{step[c.k].toLocaleString()}</div>
            <div className="text-[10px] text-muted">{T({ en: c.en, bn: c.bn })}</div>
          </div>
        ))}
      </div>

      <p className="text-[11px] leading-4 text-muted">
        {T({
          en: 'Same twelve knocks, four verdicts — count the counters: 122,300 vs 69,300 origin bytes; 12 vs 11 origin knocks; and the only law that lets a POST stay a POST.',
          bn: 'একই বারো ধক, চার রায় — গণক গুনুন: 122,300 বনাম 69,300 অরিজিন-বাইট; 12 বনাম 11 অরিজিন-ধক; আর একমাত্র বিধান যা POST-কে POST-ই থাকতে দেয়।',
        })}
      </p>
    </div>
  );
}
