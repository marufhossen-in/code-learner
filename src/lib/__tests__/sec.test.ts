import { describe, expect, it } from 'vitest';
import {
  alphabetSize,
  b64urlDecodeString,
  b64urlEncodeString,
  crackSeconds,
  hmacSha256Hex,
  jwtSign,
  jwtVerify,
  saltedHash,
  sha256Hex,
  slowHash,
} from '../../components/visuals/secSim';

describe('SHA-256 + HMAC (RFC vectors)', () => {
  it('matches known SHA-256 digests', () => {
    expect(sha256Hex('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
    expect(sha256Hex('')).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });
  it('matches the RFC 4231 HMAC vector', () => {
    expect(hmacSha256Hex('key', 'The quick brown fox jumps over the lazy dog')).toBe(
      'f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8',
    );
  });
  it('base64url round-trips and avoids +/=', () => {
    const s = '{"a":"সবুজ✓"}><?/';
    expect(b64urlDecodeString(b64urlEncodeString(s))).toBe(s);
    expect(b64urlEncodeString(s)).not.toMatch(/[+/=]/);
  });
});

describe('JWT (Section 11)', () => {
  it('reproduces the canonical jwt.io token exactly', () => {
    const token = jwtSign(
      { alg: 'HS256', typ: 'JWT' },
      { sub: '1234567890', name: 'John Doe', iat: 1516239022 },
      'your-256-bit-secret',
    );
    expect(token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    );
  });

  const good = jwtSign({ alg: 'HS256', typ: 'JWT' }, { sub: '42', role: 'user' }, 's3cr3t');

  it('verifies a genuine token', () => {
    const r = jwtVerify(good, 's3cr3t');
    expect(r.ok).toBe(true);
    expect((r.payload as Record<string, unknown>).role).toBe('user');
  });
  it('rejects the right token with the wrong secret', () => {
    expect(jwtVerify(good, 'wrong').ok).toBe(false);
  });
  it('rejects a tampered payload (role: admin)', () => {
    const parts = good.split('.');
    const forged = b64urlEncodeString(JSON.stringify({ sub: '42', role: 'admin' }));
    const r = jwtVerify(`${parts[0]}.${forged}.${parts[2]}`, 's3cr3t');
    expect(r.ok).toBe(false);
    expect(r.reason.en).toContain('MISMATCH');
  });
  it('rejects the alg:none attack', () => {
    const h = b64urlEncodeString(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const p = b64urlEncodeString(JSON.stringify({ sub: '42', role: 'admin' }));
    const r = jwtVerify(`${h}.${p}.`, 's3cr3t');
    expect(r.ok).toBe(false);
    expect(r.reason.bn).toContain('অ্যালগরিদম');
  });
  it('rejects malformed tokens gracefully', () => {
    expect(jwtVerify('a.b', 'x').ok).toBe(false);
    expect(jwtVerify('not-a-jwt', 'x').ok).toBe(false);
    expect(jwtVerify('.payload.sig', 'x').ok).toBe(false);
  });
});

describe('password hashing demos', () => {
  it('salt makes identical passwords hash differently', () => {
    expect(saltedHash('pw', 'saltA')).not.toBe(saltedHash('pw', 'saltB'));
    expect(saltedHash('pw', 'saltA')).toBe(saltedHash('pw', 'saltA'));
  });
  it('slow hashing is deterministic and round-sensitive', () => {
    expect(slowHash('pw', 's', 1000)).toBe(slowHash('pw', 's', 1000));
    expect(slowHash('pw', 's', 1)).not.toBe(slowHash('pw', 's', 1000));
    expect(slowHash('pw', 's', 1000)).toMatch(/^[0-9a-f]{64}$/);
  });
  it('crack-time estimates grow with length, alphabet and rounds', () => {
    expect(alphabetSize('abc')).toBe(26);
    expect(alphabetSize('abc1')).toBe(36);
    expect(crackSeconds('abcdefgh', 1)).toBe(Math.pow(26, 8));
    expect(crackSeconds('abcdefgh', 1e6)).toBeLessThan(crackSeconds('abcdefgh', 1e3));
  });
});
