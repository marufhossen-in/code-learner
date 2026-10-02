import type { LText } from '../../lib/types';

/** Pure security engine (Section 11): REAL SHA-256 / HMAC, JWT sign+verify, password hashing demos. */

/* ---------------- SHA-256 (FIPS 180-4) ---------------- */

const K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

function rotr(x: number, n: number): number {
  return (x >>> n) | (x << (32 - n));
}

function hexToBytes(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return out;
}

function sha256BytesHex(bytes: Uint8Array): string {
  const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  const bitLen = bytes.length * 8;
  const padLen = ((bytes.length + 9 + 63) >> 6) << 6;
  const buf = new Uint8Array(padLen);
  buf.set(bytes);
  buf[bytes.length] = 0x80;
  const view = new DataView(buf.buffer);
  view.setUint32(padLen - 8, Math.floor(bitLen / 0x100000000));
  view.setUint32(padLen - 4, bitLen >>> 0);

  const w = new Array<number>(64);
  for (let off = 0; off < padLen; off += 64) {
    for (let t = 0; t < 16; t++) w[t] = view.getUint32(off + t * 4);
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3);
      const s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10);
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0;
    }
    let a = H[0]; let b = H[1]; let c = H[2]; let d = H[3];
    let e = H[4]; let f = H[5]; let g = H[6]; let h = H[7];
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + K[t] + w[t]) | 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) | 0;
      h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
    H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
  }
  return H.map((x) => (x >>> 0).toString(16).padStart(8, '0')).join('');
}

export function sha256Hex(message: string): string {
  return sha256BytesHex(new TextEncoder().encode(message));
}

export function hmacSha256Hex(key: string, message: string): string {
  let k: Uint8Array = new TextEncoder().encode(key);
  if (k.length > 64) k = hexToBytes(sha256BytesHex(k));
  const block = new Uint8Array(64);
  block.set(k);
  const ipad = block.map((b) => b ^ 0x36);
  const opad = block.map((b) => b ^ 0x5c);
  const mb = new TextEncoder().encode(message);
  const inner = new Uint8Array(64 + mb.length);
  inner.set(ipad);
  inner.set(mb, 64);
  const outer = new Uint8Array(64 + 32);
  outer.set(opad);
  outer.set(hexToBytes(sha256BytesHex(inner)), 64);
  return sha256BytesHex(outer);
}

/* ---------------- base64url + JWT ---------------- */

export function b64urlEncodeString(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function b64urlDecodeString(b64: string): string {
  const pad = '='.repeat((4 - (b64.length % 4)) % 4);
  const bin = atob(b64.replace(/-/g, '+').replace(/_/g, '/') + pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function hexToB64url(hex: string): string {
  const bytes = hexToBytes(hex);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function jwtSign(header: object, payload: object, secret: string): string {
  const h = b64urlEncodeString(JSON.stringify(header));
  const p = b64urlEncodeString(JSON.stringify(payload));
  const sig = hexToB64url(hmacSha256Hex(secret, `${h}.${p}`));
  return `${h}.${p}.${sig}`;
}

export interface JwtCheck {
  ok: boolean;
  reason: LText;
  header?: Record<string, unknown>;
  payload?: Record<string, unknown>;
}

export function jwtVerify(token: string, secret: string): JwtCheck {
  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] === '' || parts[1] === '') {
    return { ok: false, reason: { en: 'Malformed: a JWT is exactly header.payload.signature.', bn: 'বিকৃত: JWT হলো ঠিক header.payload.signature।' } };
  }
  let header: Record<string, unknown>;
  let payload: Record<string, unknown>;
  try {
    header = JSON.parse(b64urlDecodeString(parts[0]));
    payload = JSON.parse(b64urlDecodeString(parts[1]));
  } catch {
    return { ok: false, reason: { en: 'Malformed: segments are not base64url JSON.', bn: 'বিকৃত: সেগমেন্টগুলো base64url JSON নয়।' } };
  }
  if (header.alg !== 'HS256') {
    return {
      ok: false, header, payload,
      reason: {
        en: `REJECTED: alg="${String(header.alg)}" — servers must PIN the algorithm; accepting "none" was the famous 2015 JWT strike.`,
        bn: `বাতিল: alg="${String(header.alg)}" — সার্ভারকে অ্যালগরিদম পিন করতেই হবে; "none" মেনে নেওয়াটাই ছিল বিখ্যাত ২০১৫ JWT আঘাত।`,
      },
    };
  }
  const expected = hexToB64url(hmacSha256Hex(secret, `${parts[0]}.${parts[1]}`));
  if (expected !== parts[2]) {
    return {
      ok: false, header, payload,
      reason: {
        en: 'Signature MISMATCH. The payload may have been edited — without the secret, a valid signature cannot be forged.',
        bn: 'স্বাক্ষর মিলল না। পেলোড বদলানো হয়ে থাকতে পারে — সিক্রেট ছাড়া বৈধ স্বাক্ষর জাল করা যায় না।',
      },
    };
  }
  if (typeof payload.exp === 'number' && payload.exp * 1000 < Date.now()) {
    return {
      ok: false, header, payload,
      reason: {
        en: 'Signature is valid BUT the token has EXPIRED (exp < now). Valid does not mean usable.',
        bn: 'স্বাক্ষর সঠিক কিন্তু টোকেনের মেয়াদ শেষ (exp < এখন)। বৈধ মানেই ব্যবহারযোগ্য নয়।',
      },
    };
  }
  return {
    ok: true, header, payload,
    reason: {
      en: 'VALID: the signature matches — only the secret holder could have made this token.',
      bn: 'বৈধ: স্বাক্ষর মিলেছে — এই টোকেন কেবল সিক্রেটের মালিকই বানাতে পারে।',
    },
  };
}

/* ---------------- password hashing ---------------- */

export function saltedHash(pw: string, salt: string): string {
  return sha256Hex(`${salt}:${pw}`);
}

/** PBKDF2-style iterated hashing (educational — real apps use bcrypt/scrypt/argon2). */
export function slowHash(pw: string, salt: string, rounds: number): string {
  let h = sha256Hex(`${salt}:${pw}`);
  for (let i = 1; i < rounds; i++) h = sha256Hex(h);
  return h;
}

export function alphabetSize(pw: string): number {
  let a = 0;
  if (/[a-z]/.test(pw)) a += 26;
  if (/[A-Z]/.test(pw)) a += 26;
  if (/[0-9]/.test(pw)) a += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) a += 33;
  return Math.max(1, a);
}

/** Rough brute-force estimate: full keyspace / guesses-per-second. */
export function crackSeconds(pw: string, guessesPerSec: number): number {
  if (!pw) return 0;
  return Math.pow(alphabetSize(pw), pw.length) / guessesPerSec;
}

export function humanSeconds(sec: number): string {
  if (sec < 1) return '< 1 second';
  if (sec < 60) return `≈ ${Math.round(sec)} seconds`;
  if (sec < 3600) return `≈ ${Math.round(sec / 60)} minutes`;
  if (sec < 86400) return `≈ ${Math.round(sec / 3600)} hours`;
  if (sec < 86400 * 365) return `≈ ${Math.round(sec / 86400)} days`;
  const years = sec / (86400 * 365);
  return years > 1000 ? `≈ ${Math.round(years).toLocaleString()} years` : `≈ ${Math.round(years)} years`;
}

export const JWT_DEFAULTS = {
  header: '{\n  "alg": "HS256",\n  "typ": "JWT"\n}',
  payload: '{\n  "sub": "1234567890",\n  "name": "Mitu",\n  "role": "user",\n  "iat": 1516239022\n}',
  secret: 'your-256-bit-secret',
};
