import { useMemo, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import type { JwtCheck } from './secSim';
import { b64urlDecodeString, b64urlEncodeString, crackSeconds, humanSeconds, JWT_DEFAULTS, jwtSign, jwtVerify, saltedHash, sha256Hex, slowHash } from './secSim';

/** Security Lab (Section 11): forge/verify real JWTs, tamper, alg-none attack, hashing. */

const btn =
  'rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs transition hover:border-accent/60 hover:bg-elev disabled:opacity-40 disabled:hover:bg-surface';

const SEG = ['var(--accent)', 'var(--accent-2)', 'var(--ok)'];

function TokenView({ token }: { token: string }) {
  const parts = token.split('.');
  return (
    <div className="codeblock break-all rounded-lg p-2 font-mono text-[11px] leading-5" data-testid="jwt-token">
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <span className="font-bold text-muted">.</span>}
          <span style={{ color: SEG[i] || 'var(--muted)' }}>{p || '(empty)'}</span>
        </span>
      ))}
    </div>
  );
}

export function SecurityLab() {
  const { T } = useI18n();
  const [headerTxt, setHeaderTxt] = useState(JWT_DEFAULTS.header);
  const [payloadTxt, setPayloadTxt] = useState(JWT_DEFAULTS.payload);
  const [secret, setSecret] = useState(JWT_DEFAULTS.secret);
  const [token, setToken] = useState(() => jwtSign(JSON.parse(JWT_DEFAULTS.header), JSON.parse(JWT_DEFAULTS.payload), JWT_DEFAULTS.secret));
  const [check, setCheck] = useState<JwtCheck | null>(null);
  const [signError, setSignError] = useState('');

  function sign() {
    try {
      setToken(jwtSign(JSON.parse(headerTxt), JSON.parse(payloadTxt), secret));
      setCheck(null);
      setSignError('');
    } catch {
      setSignError(T({ en: 'header/payload must be valid JSON', bn: 'header/payload অবশ্যই বৈধ JSON হতে হবে' }));
    }
  }
  function verify() {
    setCheck(jwtVerify(token.trim(), secret));
  }
  function tamper() {
    try {
      const p = JSON.parse(b64urlDecodeString(token.split('.')[1])) as Record<string, unknown>;
      p.role = 'admin';
      const forged = b64urlEncodeString(JSON.stringify(p));
      const parts = token.split('.');
      setToken(`${parts[0]}.${forged}.${parts[2]}`);
      setCheck(null);
    } catch { /* preset payload always parses */ }
  }
  function algNone() {
    const h = b64urlEncodeString(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const p = JSON.parse(b64urlDecodeString(token.split('.')[1])) as Record<string, unknown>;
    p.role = 'admin';
    setToken(`${h}.${b64urlEncodeString(JSON.stringify(p))}.`);
    setCheck(null);
  }

  // password section
  const [pw, setPw] = useState('password123');
  const [salt, setSalt] = useState('x7Q$k2');
  const [rounds, setRounds] = useState(50000);
  const hashes = useMemo(() => {
    if (!pw) return null;
    return {
      plain: sha256Hex(pw),
      salted: saltedHash(pw, salt),
      slow: slowHash(pw, salt, rounds),
    };
  }, [pw, salt, rounds]);
  const crackFast = crackSeconds(pw, 1e11); // GPU rig vs raw sha256
  const crackSlow = crackSeconds(pw, 1e11 / Math.max(1, rounds));

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* JWT card */}
      <div className="border-b border-border p-3">
        <h3 className="mb-2 text-lg font-bold">🔏 {T({ en: 'JWT — build, verify, attack', bn: 'JWT — বানান, যাচাই করুন, আক্রমণ করুন' })}</h3>
        <div className="grid gap-2 md:grid-cols-3">
          {[
            { label: 'header.json', v: headerTxt, set: setHeaderTxt, c: SEG[0] },
            { label: 'payload.json', v: payloadTxt, set: setPayloadTxt, c: SEG[1] },
          ].map((f) => (
            <label key={f.label} className="block">
              <span className="mb-0.5 block font-mono text-[10px] font-bold uppercase" style={{ color: f.c }}>{f.label}</span>
              <textarea value={f.v} onChange={(e) => f.set(e.target.value)} className="codeblock h-24 w-full resize-y rounded-lg border border-border p-1.5 font-mono text-[11px] focus:border-accent/60 focus:outline-none scrolly" spellCheck={false} />
            </label>
          ))}
          <label className="block">
            <span className="mb-0.5 block font-mono text-[10px] font-bold uppercase" style={{ color: SEG[2] }}>secret (server-side only!)</span>
            <input value={secret} onChange={(e) => setSecret(e.target.value)} className="w-full rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-[11px] focus:border-accent/60 focus:outline-none" spellCheck={false} />
            <span className="mt-0.5 block text-[10px] text-muted">{T({ en: 'The signature = HMAC-SHA256(header.payload, secret)', bn: 'স্বাক্ষর = HMAC-SHA256(header.payload, সিক্রেট)' })}</span>
          </label>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" className={btn} onClick={sign}>🔏 {T({ en: 'sign', bn: 'সাইন' })}</button>
          <button type="button" className={btn} onClick={verify}>🧬 {T({ en: 'verify (as the server)', bn: 'যাচাই (সার্ভার হয়ে)' })}</button>
          <button type="button" className={btn} onClick={tamper}>😈 {T({ en: 'tamper → become admin', bn: 'ছেড়া → এডমিন হয়ে যান' })}</button>
          <button type="button" className={btn} onClick={algNone}>👻 alg:none {T({ en: 'attack', bn: 'আক্রমণ' })}</button>
          <button type="button" className={`${btn} ml-auto`} onClick={() => { setHeaderTxt(JWT_DEFAULTS.header); setPayloadTxt(JWT_DEFAULTS.payload); setSecret(JWT_DEFAULTS.secret); setToken(jwtSign(JSON.parse(JWT_DEFAULTS.header), JSON.parse(JWT_DEFAULTS.payload), JWT_DEFAULTS.secret)); setCheck(null); }}>↺</button>
        </div>
        {signError && <p className="mt-1 font-mono text-xs text-err">{signError}</p>}
        <div className="mt-2"><TokenView token={token} /></div>
        {check && (
          <p key={check.reason.en} className={`fade-up mt-2 rounded-lg border px-3 py-2 text-sm ${check.ok ? 'border-ok/40 bg-ok/5' : 'border-err/40 bg-err/5'}`}>
            {check.ok ? '✅' : '❌'} {T(check.reason)}
          </p>
        )}
        <p className="mt-2 text-xs text-muted">
          {T({
            en: 'The three dots are not magic: header (how it was made) · payload (who you are — readable by anyone!) · signature (proof of integrity). Try the attack buttons, then verify.',
            bn: 'তিন ডট কোনো জাদু নয়: header (কীভাবে বানানো) · payload (আপনি কে — যে কেউ পড়তে পারে!) · signature (অখণ্ডতার প্রমাণ)। আক্রমণ বাটন চাপুন, তারপর যাচাই করুন।',
          })}
        </p>
      </div>

      {/* password hashing card */}
      <div className="p-3">
        <h3 className="mb-2 text-lg font-bold">🧂 {T({ en: 'Password hashing — salt + slow KDF', bn: 'পাসওয়ার্ড হ্যাশিং — সল্ট + ধীর KDF' })}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <input value={pw} onChange={(e) => setPw(e.target.value)} className="min-w-44 rounded-lg border border-border bg-bg px-2 py-1.5 font-mono text-xs focus:border-accent/60 focus:outline-none" spellCheck={false} aria-label="password" />
          <label className="flex items-center gap-1 font-mono text-[11px] text-muted">
            salt: <code className="rounded bg-elev px-1 text-accent-2">{salt}</code>
            <button type="button" className={`${btn} !px-2 !py-0.5`} onClick={() => setSalt(Math.random().toString(36).slice(2, 8))}>🎲</button>
          </label>
          <label className="flex items-center gap-2 font-mono text-[11px] text-muted">
            rounds: <input type="range" min={1} max={200000} step={1} value={rounds} onChange={(e) => setRounds(Number(e.target.value))} className="w-28 accent-[var(--accent)]" />
            <code>{rounds.toLocaleString()}</code>
          </label>
        </div>
        {hashes && (
          <div className="mt-2 space-y-1.5 font-mono text-[11px]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-40 font-bold text-err">sha256(pw) ✗</span>
              <code className="break-all text-text/70">{hashes.plain.slice(0, 28)}…</code>
              <span className="text-muted">{T({ en: 'rainbow-table bait', bn: 'রেইনবো টেবিলের খোরাক' })}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-40 font-bold text-warn">sha256(salt:pw) ~</span>
              <code className="break-all text-text/70">{hashes.salted.slice(0, 28)}…</code>
              <span className="text-muted">{T({ en: '🎲 salt → different every time', bn: '🎲 সল্ট → প্রতিবার ভিন্ন' })}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-40 font-bold text-ok">slow hash × rounds ✓</span>
              <code className="break-all text-text/70">{hashes.slow.slice(0, 28)}…</code>
              <span className="text-muted">{T({ en: 'bcrypt/argon2 idea', bn: 'bcrypt/argon2 দর্শন' })}</span>
            </div>
          </div>
        )}
        <div className="mt-2 grid gap-2 rounded-lg border border-border bg-elev/50 p-2 font-mono text-[11px] sm:grid-cols-2">
          <div>
            <span className="text-muted">{T({ en: 'GPU rig vs fast hash:', bn: 'GPU রিগ বনাম দ্রুত হ্যাশ:' })} </span>
            <b className={crackFast < 86400 ? 'text-err' : 'text-ok'}>{humanSeconds(crackFast)}</b>
          </div>
          <div>
            <span className="text-muted">{T({ en: 'same rig vs slow hash:', bn: 'সেই রিগ বনাম ধীর হ্যাশ:' })} </span>
            <b className="text-ok">{humanSeconds(crackSlow)}</b>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted">
          {T({
            en: 'Never store passwords. The salt kills precomputed tables; the slow rounds tax every guess (real apps: bcrypt, scrypt, argon2 — same weapon family).',
            bn: 'পাসওয়ার্ড কখনো সরাসরি রাখবেন না। সল্ট প্রি-কম্পিউটেড টেবিল মেরে ফেলে; ধীর রাউন্ড প্রতিটি অনুমানের ওপর কর দেয় (আসল অ্যাপে: bcrypt, scrypt, argon2 — একই অস্ত্রপরিবার)।',
          })}
        </p>
      </div>
    </div>
  );
}
