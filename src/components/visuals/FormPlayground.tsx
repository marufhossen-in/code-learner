import { useState } from 'react';
import { useI18n } from '../../lib/i18n';

/** Native form validation playground: no JS validation — the browser does it all. */

export function FormPlayground() {
  const { T } = useI18n();
  const [novalidate, setNovalidate] = useState(false);
  const [submitted, setSubmitted] = useState<[string, string][] | null>(null);

  const inputCls =
    'w-full rounded-lg border border-border bg-bg px-3 py-2 font-mono text-sm focus:border-accent valid:border-ok/60';

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {T({ en: 'Try submitting — wrong, then right', bn: 'সাবমিট করে দেখুন — আগে ভুল, তারপর ঠিক' })}
        </span>
        <label className="ml-auto flex items-center gap-2 text-xs">
          <input type="checkbox" checked={novalidate} onChange={(e) => setNovalidate(e.target.checked)} className="accent-[var(--accent)]" />
          <code className="font-mono">novalidate</code>
        </label>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <form
          noValidate={novalidate}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            setSubmitted([...data.entries()].map(([k, v]) => [k, String(v)]));
          }}
          className="space-y-3"
        >
          <label className="block text-sm">
            <span className="mb-1 block font-semibold">
              {T({ en: 'Username', bn: 'ইউজারনেম' })} <code className="text-xs text-muted">required minlength=3</code>
            </span>
            <input name="username" required minLength={3} className={inputCls} placeholder="ada" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-semibold">
              Email <code className="text-xs text-muted">type=email</code>
            </span>
            <input name="email" type="email" required className={inputCls} placeholder="ada@lovelace.dev" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-semibold">
              {T({ en: 'Rating (1–10)', bn: 'রেটিং (১–১০)' })} <code className="text-xs text-muted">type=number min max</code>
            </span>
            <input name="rating" type="number" min={1} max={10} className={inputCls} placeholder="7" />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="terms" type="checkbox" required className="accent-[var(--accent)]" />
            {T({ en: 'I accept the terms (required)', bn: 'আমি শর্ত মানছি (আবশ্যক)' })}
          </label>
          <button type="submit" className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-onaccent transition hover:opacity-90">
            {T({ en: 'Submit', bn: 'সাবমিট' })}
          </button>
        </form>
        <div>
          <div className="codeblock min-h-40 rounded-lg p-3 font-mono text-xs leading-6">
            {submitted ? (
              <>
                <div className="mb-1 font-bold text-ok">✓ FormData →</div>
                {submitted.map(([k, v]) => (
                  <div key={k}>
                    <span className="text-accent">{k}</span>: <span className="text-ok">{v === '' ? '(empty)' : v}</span>
                  </div>
                ))}
              </>
            ) : (
              <span className="text-muted/70">
                {T({
                  en: '// Submitted FormData will appear here.\n// While a field is INVALID, the browser blocks\n// submission and shows a bubble — zero JavaScript.',
                  bn: '// সাবমিট হওয়া FormData এখানে দেখা যাবে।\n// কোনো ফিল্ড অবৈধ থাকলে ব্রাউজার সাবমিশন আটকায়\n// আর বুদবুদ দেখায় — এক লাইনও JavaScript ছাড়া।',
                })}
              </span>
            )}
          </div>
          <p className="mt-3 rounded-lg bg-elev px-3 py-2 text-xs leading-6 text-muted">
            {T({
              en: 'required, minlength, type="email", min/max and pattern are CONSTRAINTS. On submit, the browser checks every control (constraint validation API) and focuses the first invalid one. novalidate switches this whole system off.',
              bn: 'required, minlength, type="email", min/max আর pattern হলো কনস্ট্রেইন্ট। সাবমিটে ব্রাউজার প্রতিটি কন্ট্রোল যাচাই করে (constraint validation API) আর প্রথম অবৈধটিতে ফোকাস করে। novalidate এই পুরো সিস্টেম বন্ধ করে দেয়।',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
