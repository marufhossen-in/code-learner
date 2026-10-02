import type { Lesson } from '../../../lib/types';

export const JwtTokensLesson: Lesson = {
  slug: 'jwt-tokens',
  tech: 'authentication',
  title: {
    en: 'JSON Web Tokens (JWT): Signatures, Claims & Cryptographic Verification',
    bn: 'JSON ওয়েব টোকেন (JWT): সিগনেচার, ক্লেইমস এবং ক্রিপ্টোগ্রাফিক যাচাই'
  },
  summary: {
    en: 'Master stateless authentication with JSON Web Tokens (RFC 7519). Learn how the 3 distinct parts (Header, Payload, and Signature) work together to guarantee message integrity. Understand how servers verify tokens without database lookups using HMAC-SHA256 or RS256. Protect against catastrophic security vulnerabilities including the "alg": "none" signature bypass attack, algorithm confusion, and payload exposure traps.',
    bn: 'JSON ওয়েব টোকেন (RFC ৭৫১৯) ব্যবহার করে স্টেটলেস প্রমাণীকরণ ব্যবস্থা আয়ত্ত করুন। টোকেনের ৩ টি প্রধান অংশ (হেডার, পে-লোড এবং সিগনেচার) কীভাবে একসাথে ডেটার অখণ্ডতা নিশ্চিত করে তা শিখুন। HMAC-SHA256 বা RS256 ব্যবহার করে ডাটাবেজ অনুসন্ধান ছাড়াই সার্ভার কীভাবে টোকেন যাচাই করে তা জানুন। "alg": "none" সিগনেচার বাইপাস আক্রমণ, অ্যালগরিদম কনফিউশন এবং পে-লোড ফাঁসের মতো মারাত্মক নিরাপত্তা ত্রুটি প্রতিরোধ করতে শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'jwt-architecture-triple',
      text: {
        en: 'The 3-Part Architecture of a JSON Web Token',
        bn: 'JSON ওয়েব টোকেনের ৩ টি মূল উপাদানের আর্কিটেকচার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A JSON Web Token (JWT) is a compact, URL-safe container for exchanging cryptographically signed claims across decoupled services. Rather than storing session state in server memory, the server signs user identity claims and hands them directly to the client.',
        bn: 'JSON ওয়েব টোকেন (JWT) হলো বিভিন্ন স্বাধীন সার্ভিসের মধ্যে ক্রিপ্টোগ্রাফিকভাবে সাইন করা তথ্য আদান-প্রদানের একটি সংক্ষিপ্ত এবং নিরাপদ মাধ্যম। সার্ভারের মেমরিতে সেশন ডেটা জমিয়ে রাখার পরিবর্তে সার্ভার ব্যবহারকারীর পরিচয় সংক্রান্ত তথ্য সাইন করে সরাসরি ক্লায়েন্টকে প্রদান করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Every valid JWT consists of exactly 3 distinct segments separated by periods: Header, Payload, and Signature (header.payload.signature). Each segment fulfills a specific cryptographic role:',
        bn: 'প্রতিটি বৈধ JWT ডট বা পিরিয়ড দ্বারা বিভক্ত ঠিক ৩ টি আলাদা অংশ নিয়ে গঠিত: হেডার, পে-লোড এবং সিগনেচার (header.payload.signature)। প্রতিটি অংশ একটি নির্দিষ্ট ক্রিপ্টোগ্রাফিক দায়িত্ব পালন করে:'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. The Header: Metadata & Algorithm Selection',
            bn: '১. হেডার: মেটাডেটা এবং অ্যালগরিদম নির্ধারণ'
          },
          text: {
            en: 'Contains JSON metadata declaring the token type ("typ": "JWT") and the signing algorithm used (such as "alg": "HS256" for HMAC-SHA256, or "RS256" for RSA asymmetric signing). This object is serialized to JSON and converted to base64url.',
            bn: 'এতে টোকেনের ধরন ("typ": "JWT") এবং ব্যবহৃত সাইনিং অ্যালগরিদম ( যেমন HMAC-SHA256 এর জন্য "alg": "HS256", বা RSA অ্যাসাইমেট্রিকের জন্য "RS256" ) উল্লেখ থাকে। এই অবজেক্টটি JSON স্ট্রিংয়ে রূপান্তরের পর base64url এ এনকোড করা হয়।'
          },
        },
        {
          title: {
            en: '2. The Payload: Claims & Identity Attributes',
            bn: '২. পে-লোড: ক্লেইমস এবং আইডেন্টিটি বৈশিষ্ট্য'
          },
          text: {
            en: 'Contains identity statements known as claims. RFC 7519 defines 6 standard registered claims: iss (issuer), sub (subject/user identifier), aud (audience), exp (expiration timestamp), nbf (not before), and iat (issued at). Custom claims like user role or organization ID can also be added. WARNING: The payload is NOT encrypted; it is merely base64url encoded and completely readable by anyone!',
            bn: 'এতে ক্লেইম নামের পরিচিতি বা পরিচয় সংক্রান্ত তথ্য থাকে। RFC ৭৫১৯ এ ৬ টি মানসম্মত নিবন্ধিত ক্লেইম সংজ্ঞায়িত: iss (ইস্যুকারী), sub (বিষয় বা ইউজার আইডি), aud (শ্রোতা), exp (মেয়াদের সময়সীমা), nbf (কার্যকর শুরুর সময়) এবং iat (ইস্যুর সময়)। কাস্টম ক্লেইম যেমন ব্যবহারকারীর রোল বা প্রতিষ্ঠান আইডিও যুক্ত করা যায়। সতর্কবার্তা: পে-লোড কিন্তু এনক্রিপ্ট করা থাকে না; এটি কেবল base64url এনকোড করা, ফলে যার কাছে টোকেন থাকবে সে-ই এটি পড়তে পারবে!'
          },
        },
        {
          title: {
            en: '3. The Cryptographic Signature: Message Integrity Seal',
            bn: '৩. ক্রিপ্টোগ্রাফিক সিগনেচার: তথ্যের অখণ্ডতার সিল'
          },
          text: {
            en: 'The server takes the base64url-encoded header, appends a period, appends the base64url-encoded payload, and hashes this combined string with its private secret key. If an attacker modifies even a single character in the payload, the recomputed signature will not match.',
            bn: 'সার্ভার base64url এনকোড করা হেডার নেয়, একটি ডট যুক্ত করে, base64url এনকোড করা পে-লোড যোগ করে এবং একটি গোপন সিক্রেট কি দিয়ে পুরো স্ট্রিংটিকে হ্যাশ করে। আক্রমণকারী যদি পে-লোডের একটি অক্ষরও পরিবর্তন করে, তবে পুনরায় তৈরি করা সিগনেচারের সাথে মূল সিগনেচার কখনোই মিলবে না।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'JWT Structure & Tamper Detection: Header, Payload & Signature',
        bn: 'JWT গঠন এবং বিকৃতি সনাক্তকরণ: হেডার, পে-লোড ও সিগনেচার'
      },
      svg: `<svg viewBox="0 0 840 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="JWT structure showing header, payload, and cryptographic signature validation">
  <rect width="840" height="420" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">JWT ANATOMY &amp; CRYPTOGRAPHIC VERIFICATION (RFC 7519)</text>
  
  <!-- Token parts visualization -->
  <g transform="translate(40, 50)">
    <rect width="760" height="46" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="20" y="28" font-size="11" font-weight="bold">
      <tspan fill="#ef4444">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</tspan>
      <tspan fill="#ffffff">.</tspan>
      <tspan fill="#c084fc">eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiQWxpY2UiLCJyb2xlIjoidXNlciJ9</tspan>
      <tspan fill="#ffffff">.</tspan>
      <tspan fill="#38bdf8">TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</tspan>
    </text>
  </g>
  
  <!-- Column 1: Header -->
  <g transform="translate(40, 115)">
    <rect width="240" height="180" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="240" height="28" rx="8" fill="#ef4444"/>
    <text x="120" y="19" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. HEADER (METADATA)</text>
    <text x="15" y="52" fill="#94a3b8" font-size="9">Decodes from Base64URL:</text>
    <rect x="12" y="60" width="216" height="80" rx="4" fill="#0f172a"/>
    <text x="20" y="82" fill="#ef4444" font-size="9">{</text>
    <text x="30" y="100" fill="#fca5a5" font-size="9">"alg": "HS256",</text>
    <text x="30" y="118" fill="#fca5a5" font-size="9">"typ": "JWT"</text>
    <text x="20" y="134" fill="#ef4444" font-size="9">}</text>
    <text x="120" y="165" fill="#ef4444" font-size="9" text-anchor="middle">Specifies cryptographic algorithm</text>
  </g>
  
  <!-- Column 2: Payload -->
  <g transform="translate(300, 115)">
    <rect width="240" height="180" rx="8" fill="#1e293b" stroke="#c084fc" stroke-width="2"/>
    <rect width="240" height="28" rx="8" fill="#c084fc"/>
    <text x="120" y="19" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. PAYLOAD (CLAIMS)</text>
    <text x="15" y="52" fill="#94a3b8" font-size="9">Decodes from Base64URL:</text>
    <rect x="12" y="60" width="216" height="80" rx="4" fill="#0f172a"/>
    <text x="20" y="78" fill="#c084fc" font-size="8.5">{</text>
    <text x="30" y="93" fill="#e9d5ff" font-size="8.5">"sub": "user_7491",</text>
    <text x="30" y="108" fill="#e9d5ff" font-size="8.5">"role": "user",</text>
    <text x="30" y="123" fill="#e9d5ff" font-size="8.5">"exp": 1790708000</text>
    <text x="20" y="136" fill="#c084fc" font-size="8.5">}</text>
    <text x="120" y="165" fill="#f87171" font-size="9" text-anchor="middle">READABLE TO ALL! Not encrypted!</text>
  </g>
  
  <!-- Column 3: Signature -->
  <g transform="translate(560, 115)">
    <rect width="240" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="240" height="28" rx="8" fill="#38bdf8"/>
    <text x="120" y="19" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">3. CRYPTO SIGNATURE</text>
    <text x="15" y="52" fill="#94a3b8" font-size="9">Computed on Server:</text>
    <rect x="12" y="60" width="216" height="80" rx="4" fill="#0f172a"/>
    <text x="20" y="80" fill="#38bdf8" font-size="8">HMACSHA256(</text>
    <text x="25" y="96" fill="#cbd5e1" font-size="8">  header + "." + payload,</text>
    <text x="25" y="112" fill="#f59e0b" font-size="8">  SERVER_SECRET_KEY</text>
    <text x="20" y="128" fill="#38bdf8" font-size="8">)</text>
    <text x="120" y="165" fill="#34d399" font-size="9" text-anchor="middle">Guarantees integrity of data</text>
  </g>
  
  <!-- Verification outcome comparison -->
  <g transform="translate(40, 310)">
    <rect width="365" height="85" rx="6" fill="#064e3b" stroke="#10b981"/>
    <text x="20" y="24" fill="#6ee7b7" font-size="10" font-weight="bold">CASE A: LEGITIMATE TOKEN (VALID)</text>
    <text x="20" y="44" fill="#cbd5e1" font-size="8.5">Recomputed HMAC matches signature string exactly.</text>
    <text x="20" y="62" fill="#cbd5e1" font-size="8.5">Current timestamp &lt; exp. No database lookup needed.</text>
    <text x="20" y="77" fill="#34d399" font-size="9" font-weight="bold">RESULT: 200 OK — User authenticated instantly!</text>
  </g>
  
  <g transform="translate(435, 310)">
    <rect width="365" height="85" rx="6" fill="#450a0a" stroke="#ef4444"/>
    <text x="20" y="24" fill="#fca5a5" font-size="10" font-weight="bold">CASE B: ATTACKER TAMPERED ROLE (INVALID)</text>
    <text x="20" y="44" fill="#cbd5e1" font-size="8.5">Attacker changed "role": "user" to "role": "admin".</text>
    <text x="20" y="62" fill="#cbd5e1" font-size="8.5">Recomputed HMAC produces completely different hash.</text>
    <text x="20" y="77" fill="#ef4444" font-size="9" font-weight="bold">RESULT: 401 Unauthorized — Tampering blocked!</text>
  </g>
</svg>`,
      caption: {
        en: 'A JWT combines base64url-encoded header and payload with a cryptographic HMAC signature, ensuring immediate tamper detection.',
        bn: 'JWT বেস৬৪ইউআরএল এনকোড করা হেডার এবং পে-লোডকে একটি ক্রিপ্টোগ্রাফিক HMAC সিগনেচারের সাথে যুক্ত করে তাত্ক্ষণিক বিকৃতি সনাক্তকরণ নিশ্চিত করে।'
      },
    },
    {
      type: 'heading',
      id: 'jwt-engine-code',
      text: {
        en: 'Building an RFC-Compliant JWT Engine in Node.js',
        bn: 'Node.js-এ RFC-মানসম্মত একটি JWT ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To master JWT security, write the verification algorithm directly using Node.js crypto primitives. Notice how timing-safe equality prevents timing attacks, and strict algorithm verification prevents "alg": "none" signature bypass attacks.',
        bn: 'JWT নিরাপত্তা গভীরভাবে বুঝতে Node.js ক্রিপ্টো ফাংশন দিয়ে সরাসরি ভেরিফিকেশন অ্যালগরিদম তৈরি করুন। লক্ষ্য করুন কীভাবে টাইমিং-সেফ মেকানিজম টাইমিং অ্যাটাক ঠেকায় এবং কঠোর অ্যালগরিদম যাচাইকরণ "alg": "none" সিগনেচার বাইপাস আক্রমণ প্রতিহত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'jwt-engine.js',
      code: `// RFC 7519 JSON Web Token (JWT) Cryptographic Engine
const crypto = require('crypto');

class JwtEngine {
  // Helper 1: Base64URL Encoding (RFC 4648)
  static base64UrlEncode(str) {
    return Buffer.from(str).toString('base64url');
  }

  // Helper 2: Base64URL Decoding
  static base64UrlDecode(str) {
    return Buffer.from(str, 'base64url').toString('utf8');
  }

  // Issue a fresh signed token
  static sign(payload, secretKey, expiresInSeconds = 900) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const now = Math.floor(Date.now() / 1000);
    const enrichedPayload = {
      ...payload,
      iat: now,
      exp: now + expiresInSeconds
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(enrichedPayload));
    const signingInput = encodedHeader + '.' + encodedPayload;

    // Cryptographic signature using HMAC-SHA256
    const signature = crypto
      .createHmac('sha256', secretKey)
      .update(signingInput)
      .digest('base64url');

    return signingInput + '.' + signature;
  }

  // Cryptographically verify incoming token
  static verify(token, secretKey) {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return { valid: false, error: 'Token must have exactly 3 dot-separated parts' };
    }

    const [encodedHeader, encodedPayload, signature] = parts;
    let header, payload;

    try {
      header = JSON.parse(this.base64UrlDecode(encodedHeader));
      payload = JSON.parse(this.base64UrlDecode(encodedPayload));
    } catch (err) {
      return { valid: false, error: 'Malformed JSON payload or header' };
    }

    // DEFENSE 1: Strict algorithm whitelist (Defeats "alg": "none" and Algorithm Confusion)
    if (header.alg !== 'HS256') {
      return { valid: false, error: 'Algorithm ' + header.alg + ' rejected. Only HS256 allowed.' };
    }

    // Recompute signature over received header and payload
    const signingInput = encodedHeader + '.' + encodedPayload;
    const recomputedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(signingInput)
      .digest('base64url');

    // DEFENSE 2: Constant-time comparison to prevent timing leak attacks
    const sigBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(recomputedSignature);

    if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedBuffer)) {
      return { valid: false, error: 'Cryptographic signature verification failed: payload tampered!' };
    }

    // DEFENSE 3: Token expiration check (exp)
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return { valid: false, error: 'Token expired at ' + payload.exp + ' (current: ' + now + ')' };
    }

    return { valid: true, payload: payload };
  }
}

const SERVER_SECRET = 'super_secret_enterprise_crypto_key_2026';

console.log('=== Step 1: Server Signs a Legitimate User Token ===');
const userPayload = { sub: 'user_4810', role: 'member' };
const validToken = JwtEngine.sign(userPayload, SERVER_SECRET, 900); // 15-minute validity
console.log('Issued JWT:', validToken);

console.log('\\n=== Step 2: Server Verifies Legitimate Token ===');
const validResult = JwtEngine.verify(validToken, SERVER_SECRET);
console.log('Legitimate Token Verification:', validResult);

console.log('\\n=== Step 3: Attacker Attempts Privilege Escalation ===');
// Attacker replaces "member" with "admin" in payload, keeping the original signature
const parts = validToken.split('.');
const tamperedPayloadObj = { sub: 'user_4810', role: 'admin', iat: 1000, exp: 9999999999 };
const tamperedEncodedPayload = JwtEngine.base64UrlEncode(JSON.stringify(tamperedPayloadObj));
const tamperedToken = parts[0] + '.' + tamperedEncodedPayload + '.' + parts[2];

const tamperedResult = JwtEngine.verify(tamperedToken, SERVER_SECRET);
console.log('Tampered Token Verification:', tamperedResult);

console.log('\\n=== Step 4: Attacker Attempts "alg": "none" Signature Strip ===');
const fakeHeader = JwtEngine.base64UrlEncode(JSON.stringify({ alg: 'none', typ: 'JWT' }));
const algNoneToken = fakeHeader + '.' + tamperedEncodedPayload + '.';
const algNoneResult = JwtEngine.verify(algNoneToken, SERVER_SECRET);
console.log('"alg": "none" Attack Verification:', algNoneResult);`,
      caption: {
        en: 'The custom JWT engine checks signatures using timing-safe comparisons and strictly prevents "alg": "none" exploits.',
        bn: 'কাস্টম JWT ইঞ্জিন টাইমিং-সেফ তুলনার মাধ্যমে সিগনেচার যাচাই করে এবং "alg": "none" আক্রমণ কঠোরভাবে প্রতিহত করে।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The Revocation Dilemma & Short-Lived Access Tokens',
        bn: 'টোকেন বাতিলের চ্যালেঞ্জ এবং স্বল্পস্থায়ী এক্সেস টোকেন'
      },
      text: {
        en: 'Because JWTs are stateless, once signed, a token remains valid until its exp timestamp passes. If a user loses their phone, changing their password in the database does not automatically invalidate an active token! To solve this architectural paradox: keep access tokens short-lived (for example 15 minutes), pair them with rotating refresh tokens stored in database or Redis, and maintain a short-lived Redis denylist for instant logouts.',
        bn: 'যেহেতু JWT স্টেটলেস, তাই একবার সাইন করা হলে exp মেয়াদ শেষ না হওয়া পর্যন্ত টোকেনটি বৈধ থাকে। ব্যবহারকারীর ফোন চুরি হলে ডাটাবেজে পাসওয়ার্ড পাল্টালেও সচল টোকেনটি সরাসরি অকেজো হয় না! এই সমস্যা সমাধানের সর্বোত্তম কৌশল: এক্সেস টোকেনের মেয়াদ খুব কম রাখুন ( যেমন ১৫ মিনিট ), ডাটাবেজ বা রেডিসে থাকা ঘূর্ণায়মান রিফ্রেশ টোকেন ব্যবহার করুন এবং জরুরি লগআউটের জন্য স্বল্পস্থায়ী রেডিস ব্ল্যাকলিস্ট বজায় রাখুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'jwt-tok-ex-1',
      kind: 'predict',
      topic: 'jwt-period-separated-segments',
      question: {
        en: 'How many period-separated segments (header.payload.signature) make up a valid JSON Web Token? (3). Type the number.',
        bn: 'একটি বৈধ JSON ওয়েব টোকেন ডট দ্বারা বিভক্ত মোট কয়টি অংশ ( header.payload.signature ) নিয়ে গঠিত? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'A JWT has exactly 3 parts.',
        bn: 'একটি JWT ঠিক ৩ টি অংশ নিয়ে গঠিত।'
      },
      explanation: {
        en: 'The 3 segments are Header, Payload, and Signature, joined together by dot characters.',
        bn: 'ডট চিহ্ন দিয়ে যুক্ত থাকা ৩ টি অংশ হলো হেডার, পে-লোড এবং সিগনেচার।'
      },
    },
    {
      id: 'jwt-tok-ex-2',
      kind: 'mcq',
      topic: 'jwt-payload-encryption-myth',
      question: {
        en: 'Why is it a critical security vulnerability to store sensitive secrets (such as raw database passwords or credit cards) in a standard JWT payload?',
        bn: 'একটি সাধারণ JWT পে-লোডের ভেতর সংবেদনশীল গোপন তথ্য ( যেমন পাসওয়ার্ড বা ক্রেডিট কার্ডের তথ্য ) সংরক্ষণ করা কেন মারাত্মক নিরাপত্তা ত্রুটি?'
      },
      options: [
        {
          en: 'Because standard JWT payloads are NOT encrypted; they are merely base64url encoded strings that can be decoded and read in plain text by anyone who inspects the token',
          bn: 'কারণ সাধারণ JWT পে-লোড মোটেও এনক্রিপ্ট করা থাকে না; এটি কেবল base64url এনকোড করা একটি স্ট্রিং যা টোকেনটি দেখতে পাওয়া যেকোনো ব্যক্তি সরাসরি প্লেইন টেক্সট হিসেবে পড়ে নিতে পারে',
        },
        {
          en: 'Because JWT tokens make computer screens turn completely upside down',
          bn: 'কারণ JWT টোকেন কম্পিউটারের স্ক্রিনকে পুরোপুরি উল্টো করে দেয়',
        },
        {
          en: 'Because computer sound cards stop playing music whenever a JWT payload exists',
          bn: 'কারণ JWT পে-লোড থাকলে কম্পিউটারের সাউন্ড কার্ড গান বাজানো বন্ধ করে দেয়',
        },
        {
          en: 'Because web browsers automatically email the token to random telephone numbers',
          bn: 'কারণ ওয়েব ব্রাউজারগুলো নিজে থেকেই অচেনা ফোন নম্বরে টোকেন ইমেইল করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Base64URL is an encoding scheme, not encryption.',
        bn: 'Base64URL কেবল একটি এনকোডিং মাধ্যম, কোনো এনক্রিপশন নয়।'
      },
      explanation: {
        en: 'JWT signatures protect against tampering, but do not provide confidentiality. For encrypted tokens, engineers must use JWE (JSON Web Encryption).',
        bn: 'JWT সিগনেচার ডেটা পরিবর্তন রোধ করে, কিন্তু গোপনীয়তা রক্ষা করে না। গোপনীয়তার জন্য JWE ব্যবহার করতে হয়।'
      },
    },
    {
      id: 'jwt-tok-ex-3',
      kind: 'mcq',
      topic: 'alg-none-vulnerability',
      question: {
        en: 'What is the notorious "alg": "none" vulnerability in JWT verification implementations?',
        bn: 'JWT ভেরিফিকেশন কোডে বহুল পরিচিত "alg": "none" নিরাপত্তা দুর্বলতাটি আসলে কী?'
      },
      options: [
        {
          en: 'An attacker modifies the header to specify algorithm "none" and strips the signature, tricking vulnerable verification libraries into accepting arbitrary forged payloads without checking any signature',
          bn: 'আক্রমণকারী হেডারে অ্যালগরিদম হিসেবে "none" লিখে সিগনেচার অংশটি মুছে ফেলে, ফলে ত্রুটিযুক্ত লাইব্রেরিগুলো কোনো সিগনেচার যাচাই না করেই জাল তথ্যযুক্ত টোকেন গ্রহণ করে ফেলে',
        },
        {
          en: 'A software bug that causes network routers to delete all WiFi passwords',
          bn: 'এমন একটি সফটওয়্যার বাগ যার ফলে ওয়াইফাই রাউটার সমস্ত পাসওয়ার্ড মুছে ফেলে',
        },
        {
          en: 'A condition where the user laptop battery refuses to charge past fifty percent',
          bn: 'এমন একটি অবস্থা যেখানে ল্যাপটপের ব্যাটারি পঞ্চাশ শতাংশের বেশি চার্জ হতে অস্বীকার করে',
        },
        {
          en: 'A keyboard malfunction where the spacebar key types the word none repeatedly',
          bn: 'কিবোর্ডের এমন একটি ত্রুটি যেখানে স্পেসবার চাপলে বারবার none শব্দটি টাইপ হতে থাকে',
        },
      ],
      answer: 0,
      hint: {
        en: 'The "alg": "none" exploit bypasses cryptographic signature verification completely.',
        bn: '"alg": "none" ত্রুটি ক্রিপ্টোগ্রাফিক সিগনেচার যাচাইকরণকে সম্পূর্ণ ফাঁকি দেয়।',
      },
      explanation: {
        en: 'Strict libraries prevent this by enforcing algorithm whitelisting and explicitly rejecting unsigned tokens.',
        bn: 'নিরাপদ লাইব্রেরিগুলো অ্যালগরিদমের অনুমোদিত তালিকা মেনে চলে এবং সিগনেচারবিহীন টোকেন সরাসরি বাতিল করে।'
      },
    },
    {
      id: 'jwt-tok-ex-4',
      kind: 'predict',
      topic: 'recommended-access-token-minutes',
      question: {
        en: 'How many minutes is typically recommended for short-lived access token lifespans to minimize exposure window? (15). Type the number.',
        bn: 'ঝুঁকির সময়সীমা কমিয়ে আনতে স্বল্পস্থায়ী এক্সেস টোকেনের জন্য সাধারণত কত মিনিট মেয়াদের সুপারিশ করা হয়? ( ১৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '15',
      hint: {
        en: 'A 15-minute lifespan is industry standard.',
        bn: 'শিল্পমানে ১৫ মিনিটের মেয়াদ সবচেয়ে আদর্শ হিসেবে বিবেচিত।'
      },
      explanation: {
        en: 'Short lifetimes (such as 15 minutes) limit the attack window if an access token is leaked, relying on secure refresh tokens for renewals.',
        bn: '১৫ মিনিটের মতো সংক্ষিপ্ত মেয়াদ টোকেন ফাঁসের ক্ষতি সীমিত রাখে এবং নবায়নের জন্য রিফ্রেশ টোকেন ব্যবহার করে।'
      },
    },
  ],
  quiz: {
    id: 'jwt-tokens-quiz',
    title: {
      en: 'JSON Web Tokens Cryptography & Architecture Quiz',
      bn: 'JSON ওয়েব টোকেন ক্রিপ্টোগ্রাফি ও আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'jwt-tok-qz-1',
        kind: 'mcq',
        topic: 'asymmetric-rs256-vs-symmetric-hs256',
        question: {
          en: 'What is the primary architectural advantage of using RS256 (asymmetric RSA) over HS256 (symmetric HMAC) for signing JWTs in microservices?',
          bn: 'মাইক্রোসার্ভিস ব্যবস্থায় JWT সাইন করার জন্য HS256 (সিমেট্রিক) এর পরিবর্তে RS256 (অ্যাসাইমেট্রিক RSA) ব্যবহারের প্রধান আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          {
            en: 'RS256 uses a private key for signing on the identity provider and a public key for verification across microservices, meaning downstream services can verify tokens without possessing the secret power to forge them',
            bn: 'RS256 অথ সার্ভারে সাইন করার জন্য একটি প্রাইভেট কি এবং অন্যান্য সার্ভিসে যাচাইয়ের জন্য একটি পাবলিক কি ব্যবহার করে, ফলে যেকোনো সার্ভিস টোকেন যাচাই করতে পারলেও নিজে নতুন টোকেন বানাতে পারে না',
          },
          {
            en: 'RS256 allows internet browsers to download games ten times faster',
            bn: 'RS256 ওয়েব ব্রাউজারগুলোকে দশ গুণ দ্রুত গেম ডাউনলোড করার সুবিধা দেয়',
          },
          {
            en: 'RS256 reduces the physical weight of server hard drives by twenty grams',
            bn: 'RS256 সার্ভারের হার্ডড্রাইভের শারীরিক ওজন বিশ গ্রাম পর্যন্ত কমিয়ে দেয়',
          },
          {
            en: 'RS256 automatically formats all server log files into bold green letters',
            bn: 'RS256 সার্ভারের সব লগ ফাইলকে নিজে নিজেই মোটা সবুজ অক্ষরে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Public keys allow safe verification without sharing the private signing key.',
          bn: 'পাবলিক কি প্রাইভেট কি ফাঁস না করেই নিরাপদে টোকেন যাচাই করার সুযোগ দেয়।',
        },
        explanation: {
          en: 'With HS256, every verifying service needs the shared secret. If one service is breached, an attacker can forge tokens for all services. RS256 isolates signing authority.',
          bn: 'HS256 এ সবাইকে একই সিক্রেট দিতে হয় যা ঝুঁকিপূর্ণ। RS256 কেবল পাবলিক কি প্রকাশ করে সাইনিং ক্ষমতাকে নিরাপদ রাখে।'
        },
      },
      {
        id: 'jwt-tok-qz-2',
        kind: 'mcq',
        topic: 'stateless-jwt-revocation-strategies',
        question: {
          en: 'How can an application reliably revoke user access immediately (e.g. upon account compromise or logout) when using stateless JWT access tokens?',
          bn: 'স্টেটলেস JWT এক্সেস টোকেন ব্যবহার করার সময় কোনো ব্যবহারকারীর এক্সেস তাৎক্ষণিকভাবে ( যেমন একাউন্ট চুরি বা লগআউটের সময় ) কীভাবে কার্যকরভাবে বাতিল করা যায়?'
        },
        options: [
          {
            en: 'By keeping access token durations extremely short (e.g. 15 minutes) and maintaining a fast in-memory Redis denylist of revoked token identifiers (jti) for the remainder of their active lifespan',
            bn: 'এক্সেস টোকেনের মেয়াদ অত্যন্ত সংক্ষিপ্ত ( যেমন ১৫ মিনিট ) রেখে এবং মেয়াদের বাকি সময়ের জন্য দ্রুতগতির ইন-মেমোরি রেডিসে বাতিল করা টোকেন আইডির (jti) একটি ব্ল্যাকলিস্ট সংরক্ষণ করে',
          },
          {
            en: 'By asking the user to blow air into their computer microphone for thirty seconds',
            bn: 'ব্যবহারকারীকে তার কম্পিউটারের মাইক্রোফোনে ত্রিশ সেকেন্ড ধরে ফুঁ দিতে অনুরোধ করে',
          },
          {
            en: 'By physically removing the Ethernet cables connected to the user building',
            bn: 'ব্যবহারকারীর ভবনে সংযুক্ত থাকা ইথারনেট তারগুলো শারীরিকভাবে খুলে ফেলে দিয়ে',
          },
          {
            en: 'By restarting the global telephone network across all seven continents',
            bn: 'সাতটি মহাদেশ জুড়ে থাকা বৈশ্বিক টেলিফোন নেটওয়ার্ক সম্পূর্ণ রিস্টার্ট দিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Short expiry combined with a Redis denylist provides revocation without full database lookups.',
          bn: 'সংক্ষিপ্ত মেয়াদ এবং রেডিস ব্ল্যাকলিস্টের সমন্বয়ে ডাটাবেজের চাপ ছাড়াই দ্রুত টোকেন বাতিল করা যায়।',
        },
        explanation: {
          en: 'A Redis denylist only needs to store revoked tokens until their exp timestamp passes, keeping storage minimal.',
          bn: 'রেডিসে কেবল মেয়াদের শেষ পর্যন্ত বাতিল টোকেনটি জমা রাখতে হয়, ফলে মেমোরির অপচয় হয় না।'
        },
      },
      {
        id: 'jwt-tok-qz-3',
        kind: 'mcq',
        topic: 'algorithm-confusion-attack',
        question: {
          en: 'How does an algorithm confusion attack work against a system expecting RS256 tokens?',
          bn: 'RS256 টোকেন প্রত্যাশা করে এমন একটি সিস্টেমের বিরুদ্ধে অ্যালগরিদম কনফিউশন আক্রমণ কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'The attacker changes the header algorithm to HS256 and signs the forged token with the server public key (which is public knowledge) as the HMAC secret key, exploiting servers that verify with whichever algorithm the client header specifies',
            bn: 'আক্রমণকারী হেডারের অ্যালগরিদম বদলে HS256 লিখে এবং সার্ভারের পাবলিক কি ( যা সবার জানা ) দিয়ে টোকেন সাইন করে; সার্ভার যদি ক্লায়েন্টের দেওয়া অ্যালগরিদম অন্ধভাবে বিশ্বাস করে তবে টোকেনটি ভুলবশত বৈধ হয়ে যায়',
          },
          {
            en: 'The attacker writes computer programs inside text document files',
            bn: 'আক্রমণকারী টেক্সট ডকুমেন্ট ফাইলের মধ্যে কম্পিউটার প্রোগ্রাম লিখে ফেলে',
          },
          {
            en: 'The attacker swaps the user keyboard keys between vowels and numbers',
            bn: 'আক্রমণকারী ব্যবহারকারীর কিবোর্ডের স্বরবর্ণ ও সংখ্যার বোতামগুলো অদলবদল করে দেয়',
          },
          {
            en: 'The attacker forces the server monitor screen to display backward letters',
            bn: 'আক্রমণকারী সার্ভারের মনিটরে সমস্ত অক্ষর উল্টোভাবে প্রদর্শন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Never trust the token header to choose the verification algorithm.',
          bn: 'টোকেন যাচাইয়ের জন্য কখনোই টোকেনের হেডার অ্যালগরিদমকে অন্ধভাবে বিশ্বাস করবেন না।',
        },
        explanation: {
          en: 'To prevent algorithm confusion, the server must strictly enforce the expected algorithm (e.g. RS256 only) regardless of what the token header claims.',
          bn: 'এই আক্রমণ ঠেকাতে সার্ভারকে হেডার উপেক্ষা করে নিজস্ব পূর্বনির্ধারিত অ্যালগরিদম ( যেমন কেবল RS256 ) কঠোরভাবে প্রয়োগ করতে হবে।'
        },
      },
      {
        id: 'jwt-tok-qz-4',
        kind: 'mcq',
        topic: 'exp-vs-nbf-claims',
        question: {
          en: 'What is the functional difference between the standard exp (Expiration Time) and nbf (Not Before) registered claims?',
          bn: 'মানসম্মত নিবন্ধিত ক্লেইম exp (মেয়াদের সময়সীমা) এবং nbf (কার্যকর শুরুর সময়) এর মধ্যে কার্যগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'exp specifies the exact Unix timestamp after which the token must be rejected as expired; nbf specifies the Unix timestamp before which the token must NOT be accepted as valid yet',
            bn: 'exp নির্দিষ্ট করে ঠিক কোন ইউনিক্স সময়ের পর টোকেনটিকে মেয়াদোত্তীর্ণ হিসেবে বাতিল করতে হবে; আর nbf নির্দিষ্ট করে কোন ইউনিক্স সময়ের পূর্বে টোকেনটি কোনোভাবেই কার্যকর বলে গ্রহণ করা যাবে না',
          },
          {
            en: 'exp controls screen brightness while nbf sets the speaker sound volume',
            bn: 'exp স্ক্রিনের উজ্জ্বলতা নিয়ন্ত্রণ করে এবং nbf স্পিকারের শব্দের মাত্রা নির্ধারণ করে',
          },
          {
            en: 'exp is only used in summer months and nbf is only used during winter months',
            bn: 'exp কেবল গ্রীষ্মের মাসগুলোতে এবং nbf কেবল শীতের মাসগুলোতে ব্যবহৃত হয়',
          },
          {
            en: 'There is no difference; both claims perform the identical mathematical function',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; দুটি ক্লেইম সম্পূর্ণ একই গাণিতিক কাজ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'exp sets the end time, while nbf sets the starting time.',
          bn: 'exp নির্ধারণ করে শেষ সময়, আর nbf নির্ধারণ করে শুরুর সময়।',
        },
        explanation: {
          en: 'Together, nbf and exp define a precise validity window [nbf, exp] for token acceptance.',
          bn: 'nbf এবং exp মিলে টোকেন গ্রহণের জন্য একটি সুনির্দিষ্ট সময়সীমা [nbf, exp] তৈরি করে।'
        },
      },
    ],
  },
  next: {
    slug: 'passwordless-auth',
    title: {
      en: 'Passwordless Authentication & Passkeys: WebAuthn, FIDO2 & Cryptographic Nonces',
      bn: 'পাসওয়ার্ডহীন প্রমাণীকরণ এবং পাসকি: WebAuthn, FIDO2 এবং ক্রিপ্টোগ্রাফিক ননস'
    },
  },
};
