import type { Lesson } from '../../../lib/types';

export const AuthCapstoneLesson: Lesson = {
  slug: 'auth-capstone',
  tech: 'authentication',
  title: {
    en: 'Enterprise Authentication Pipeline: The Multi-Layer Defense Capstone',
    bn: 'এন্টারপ্রাইজ অথেনটিকেশন পাইপলাইন: মাল্টি-লেয়ার ডিফেন্স ক্যাপস্টোন'
  },
  summary: {
    en: 'Assemble all authentication security concepts into a unified production pipeline. Combine rate limiting with 5-attempt brute-force lockouts, memory-hard password hashing using 16-byte cryptographic salts, step-up multi-factor verification with 30-second TOTP dynamic truncation, and dual-token issuance featuring 15-minute access tokens and rotating refresh tokens. Enforce timing-safe equality and defense-in-depth across the entire user authentication lifecycle.',
    bn: 'প্রমাণীকরণের সমস্ত নিরাপত্তা ধারণাকে একটি সমন্বিত প্রোডাকশন পাইপলাইনে যুক্ত করুন। ৫ বার ভুল চেষ্টার পর ব্রুট-ফোর্স লকআউটযুক্ত রেট লিমিটিং, ১৬-বাইটের ক্রিপ্টোগ্রাফিক সল্টসহ মেমোরি-হার্ড পাসওয়ার্ড হ্যাশিং, ৩০ সেকেন্ডের TOTP ডায়নামিক ট্রাঙ্কেশনের মাল্টি-ফ্যাক্টর যাচাই এবং ১৫ মিনিটের এক্সেস টোকেনসহ ঘূর্ণায়মান রিফ্রেশ টোকেন প্রদান ব্যবস্থা একীভূত করুন। সম্পূর্ণ প্রমাণীকরণ প্রক্রিয়ায় টাইমিং-সেফ তুলনা এবং বহুস্তরীয় নিরাপত্তা বলয় নিশ্চিত করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'defense-in-depth-pipeline',
      text: {
        en: 'The 4-Tier Defense Architecture of an Enterprise Gatehouse',
        bn: 'এন্টারপ্রাইজ গেটহাউসের ৪-স্তরীয় নিরাপত্তা আর্কিটেকচার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you secure mission-critical software, relying on a single security mechanism creates a catastrophic single point of failure. If an attacker bypasses one layer, the system collapses. Defense-in-depth architecture arranges defensive layers in sequence so that each layer independently validates credentials, detects anomalies, and restricts unauthorized access.',
        bn: 'যখন আপনি গুরুত্বপূর্ণ সফটওয়্যার সিস্টেম সুরক্ষিত করেন, তখন একটিমাত্র নিরাপত্তা কৌশলের ওপর নির্ভর করা বিপজ্জনক একক ব্যর্থতার ঝুঁকি তৈরি করে। আক্রমণকারী কোনোভাবে একটি স্তর ভাঙতে পারলে পুরো সিস্টেম ভেঙে পড়ে। বহুস্তরীয় নিরাপত্তা কাঠামো (Defense-in-Depth) ধারাবাহিক নিরাপত্তা স্তর এমনভাবে সাজায় যাতে প্রতিটি স্তর স্বাধীনভাবে তথ্য যাচাই করতে, অসঙ্গতি শনাক্ত করতে এবং অননুমোদিত প্রবেশ ঠেকাতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In this capstone, you will integrate the entire spectrum of authentication primitives into a unified 4-tier pipeline:',
        bn: 'এই ক্যাপস্টোন পাঠে আপনি সমস্ত গুরুত্বপূর্ণ প্রমাণীকরণ উপাদানগুলোকে একটি সমন্বিত ৪-স্তরীয় পাইপলাইনে যুক্ত করবেন:'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Tier 1: Rate Limiting & Brute-Force Gate',
            bn: '১. স্তর ১: রেট লিমিটিং এবং ব্রুট-ফোর্স প্রতিরোধক'
          },
          text: {
            en: 'Enforces a strict threshold of 5 consecutive failed login attempts per composite user-and-IP key. Once triggered, the pipeline temporarily locks the account for 15 minutes, neutralizing credential stuffing and automated password dictionary attacks.',
            bn: 'প্রতিটি ব্যবহারকারী এবং আইপি ঠিকানার জন্য সর্বোচ্চ ৫ বার ব্যর্থ লগইন চেষ্টার পর ১৫ মিনিটের সাময়িক লকআউট প্রয়োগ করে। এটি স্বয়ংক্রিয় ক্রেডেনশিয়াল স্টাফিং এবং পাসওয়ার্ড ডিকশনারি আক্রমণ সম্পূর্ণ ব্যর্থ করে দেয়।'
          },
        },
        {
          title: {
            en: '2. Tier 2: Primary Password Hash Verification',
            bn: '২. স্তর ২: মূল পাসওয়ার্ড হ্যাশ যাচাইকরণ'
          },
          text: {
            en: 'Computes memory-hard scrypt or Argon2id key derivation using a unique 16-byte random salt. Validates the hash against the stored database digest using constant-time equality (crypto.timingSafeEqual) to eliminate side-channel timing leaks.',
            bn: 'অনন্য ১৬-বাইটের র্যান্ডম সল্ট ব্যবহার করে মেমোরি-হার্ড scrypt বা Argon2id হ্যাশ গণনা করে। টাইমিং অ্যাটাক প্রতিরোধ করতে সার্ভার crypto.timingSafeEqual এর মাধ্যমে কনস্ট্যান্ট-টাইম পদ্ধতিতে সংরক্ষিত হ্যাশের সাথে তুলনা সম্পন্ন করে।'
          },
        },
        {
          title: {
            en: '3. Tier 3: Step-Up Multi-Factor Challenge (TOTP)',
            bn: '৩. স্তর ৩: স্টেপ-আপ মাল্টি-ফ্যাক্টর চ্যালেঞ্জ (TOTP)'
          },
          text: {
            en: 'Demands an RFC 6238 Time-Based Dynamic Code generated from HMAC-SHA1 dynamic truncation. Tolerates a ±30-second clock skew window (current, previous, and next interval) while immediately destroying used codes to prevent replay attacks.',
            bn: 'HMAC-SHA1 ডায়নামিক ট্রাঙ্কেশন থেকে তৈরি RFC ৬২৩৮ সময়ের ওপর ভিত্তি করে ওটিপি দাবি করে। সার্ভার এবং মোবাইলের ঘড়ির তারতম্য সামলাতে ±৩০ সেকেন্ডের উইন্ডো বিবেচনা করে এবং পুনরায় ব্যবহার ঠেকাতে ব্যবহৃত কোড সাথে সাথে ধ্বংস করে।'
          },
        },
        {
          title: {
            en: '4. Tier 4: Scoped Dual-Token Issuance',
            bn: '৪. স্তর ৪: সুনির্দিষ্ট দ্বৈত-টোকেন প্রদান'
          },
          text: {
            en: 'Upon successful authentication, the server issues a short-lived 15-minute (900-second) JWT access token signed with HMAC-SHA256 or RS256, alongside a 7-day cryptographically random refresh token. Refresh tokens rotate upon every renewal, immediately revoking token families if duplicate reuse is detected.',
            bn: 'সফল লগইনের পর সার্ভার একটি স্বল্পস্থায়ী ১৫ মিনিটের ( ৯০০ সেকেন্ডের ) সাইন করা এক্সেস টোকেন এবং একটি ৭ দিনের শক্তিশালী ঘূর্ণায়মান রিফ্রেশ টোকেন প্রদান করে। প্রতিবার নবায়নের সময় রিফ্রেশ টোকেন পরিবর্তিত হয় এবং কোনো অননুমোদিত নকল সনাক্ত হলে পুরো টোকেন ফ্যামিলি তাৎক্ষণিকভাবে বাতিল হয়ে যায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Enterprise Multi-Layer Authentication Pipeline',
        bn: 'এন্টারপ্রাইজ মাল্টি-লেয়ার অথেনটিকেশন পাইপলাইন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Enterprise authentication pipeline showing rate limiter, password hashing, MFA verification, and token issuance">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ENTERPRISE ZERO-TRUST AUTHENTICATION PIPELINE</text>
  
  <!-- Step 1: Client Request -->
  <g transform="translate(30, 48)">
    <rect width="160" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="80" y="24" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">STEP 1: CLIENT</text>
    
    <g transform="translate(10, 40)">
      <rect width="140" height="120" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="10" y="20" fill="#38bdf8" font-size="9" font-weight="bold">LOGIN PAYLOAD</text>
      <text x="10" y="40" fill="#cbd5e1" font-size="8">POST /api/v1/auth</text>
      <text x="10" y="60" fill="#f8fafc" font-size="8">• userId</text>
      <text x="10" y="78" fill="#f8fafc" font-size="8">• password</text>
      <text x="10" y="96" fill="#f8fafc" font-size="8">• totpCode (MFA)</text>
      <text x="10" y="114" fill="#6ee7b7" font-size="8">• clientIp</text>
      
      <rect y="135" width="140" height="150" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="70" y="155" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">FINAL RESULT</text>
      <text x="10" y="175" fill="#cbd5e1" font-size="8">HTTP 200 OK</text>
      <text x="10" y="195" fill="#34d399" font-size="8">• 15m Access Token</text>
      <text x="10" y="215" fill="#34d399" font-size="8">• 7d Refresh Token</text>
      <text x="10" y="235" fill="#cbd5e1" font-size="8">• Scoped to roles</text>
      <text x="10" y="255" fill="#10b981" font-size="8">• Zero plaintext stored</text>
    </g>
  </g>
  
  <!-- Step 2: Rate Limiter Gate -->
  <g transform="translate(205, 48)">
    <rect width="185" height="340" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="92" y="24" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">STEP 2: RATE LIMIT</text>
    
    <g transform="translate(10, 40)">
      <rect width="165" height="130" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="10" y="20" fill="#f59e0b" font-size="9" font-weight="bold">BRUTE FORCE SHIELD</text>
      <text x="10" y="42" fill="#cbd5e1" font-size="8">Track IP + UserId</text>
      <text x="10" y="60" fill="#cbd5e1" font-size="8">Max attempts: 5</text>
      <text x="10" y="78" fill="#cbd5e1" font-size="8">Lockout: 15 minutes</text>
      <text x="10" y="100" fill="#ef4444" font-size="8">if (attempts &gt;= 5)</text>
      <text x="10" y="118" fill="#fca5a5" font-size="8">  return HTTP 429;</text>
      
      <rect y="145" width="165" height="140" rx="4" fill="#451a03" stroke="#f59e0b"/>
      <text x="82" y="165" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">IP INTELLIGENCE</text>
      <text x="10" y="190" fill="#cbd5e1" font-size="8">• Defeats bots</text>
      <text x="10" y="210" fill="#cbd5e1" font-size="8">• Slows dictionary tools</text>
      <text x="10" y="230" fill="#cbd5e1" font-size="8">• Prevents CPU abuse</text>
      <text x="10" y="250" fill="#6ee7b7" font-size="8">• Clean logs recorded</text>
    </g>
  </g>
  
  <!-- Step 3: Password Hash Gate -->
  <g transform="translate(405, 48)">
    <rect width="200" height="340" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="100" y="24" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">STEP 3: HASH GATE</text>
    
    <g transform="translate(10, 40)">
      <rect width="180" height="130" rx="4" fill="#0f172a" stroke="#a855f7"/>
      <text x="10" y="20" fill="#c084fc" font-size="9" font-weight="bold">SCRYPT / ARGON2ID</text>
      <text x="10" y="42" fill="#cbd5e1" font-size="8">Salt: 16 random bytes</text>
      <text x="10" y="60" fill="#cbd5e1" font-size="8">Memory-hard key deriv.</text>
      <text x="10" y="80" fill="#cbd5e1" font-size="8">Constant-time match:</text>
      <text x="10" y="100" fill="#f8fafc" font-size="7.5">crypto.timingSafeEqual(</text>
      <text x="10" y="115" fill="#f8fafc" font-size="7.5">  storedHash, testHash)</text>
      
      <rect y="145" width="180" height="140" rx="4" fill="#3b0764" stroke="#a855f7"/>
      <text x="90" y="165" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">TIMING ATTACK PROOF</text>
      <text x="10" y="190" fill="#cbd5e1" font-size="8">• Prevents leak of hash</text>
      <text x="10" y="210" fill="#cbd5e1" font-size="8">• GPU cost is immense</text>
      <text x="10" y="230" fill="#cbd5e1" font-size="8">• Rainbow tables dead</text>
      <text x="10" y="250" fill="#34d399" font-size="8">• Constant time: 0 leaks</text>
    </g>
  </g>
  
  <!-- Step 4: Step-Up MFA & Tokens -->
  <g transform="translate(620, 48)">
    <rect width="190" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="95" y="24" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">STEP 4: MFA &amp; TOKENS</text>
    
    <g transform="translate(10, 40)">
      <rect width="170" height="130" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="10" y="20" fill="#10b981" font-size="9" font-weight="bold">TOTP VERIFICATION</text>
      <text x="10" y="42" fill="#cbd5e1" font-size="8">RFC 6238 HMAC-SHA1</text>
      <text x="10" y="60" fill="#cbd5e1" font-size="8">Window: [-30s, 0, +30s]</text>
      <text x="10" y="78" fill="#cbd5e1" font-size="8">Clock drift tolerated</text>
      <text x="10" y="98" fill="#6ee7b7" font-size="8">Token burned on use</text>
      <text x="10" y="116" fill="#10b981" font-size="8">Replay attacks blocked!</text>
      
      <rect y="145" width="170" height="140" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="85" y="165" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">TOKEN ISSUANCE</text>
      <text x="10" y="190" fill="#cbd5e1" font-size="8">• 15-min Access JWT</text>
      <text x="10" y="210" fill="#cbd5e1" font-size="8">• 7-day Rotating Refresh</text>
      <text x="10" y="230" fill="#cbd5e1" font-size="8">• HttpOnly cookies</text>
      <text x="10" y="250" fill="#10b981" font-size="8">• Redis revocation gate</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">A breach requires compromising rate limiters, memory-hard hashes, and physical MFA tokens simultaneously</text>
</svg>`,
      caption: {
        en: 'The multi-tier pipeline verifies IP rate limits, memory-hard scrypt hashes, and RFC 6238 TOTP codes before issuing dual tokens.',
        bn: 'মাল্টি-টিয়ার পাইপলাইনটি আইপি রেট লিমিট, মেমোরি-হার্ড scrypt হ্যাশ এবং RFC ৬২৩৮ TOTP কোড যাচাইয়ের পর দ্বৈত টোকেন প্রদান করে।'
      },
    },
    {
      type: 'heading',
      id: 'enterprise-pipeline-code',
      text: {
        en: 'Building an End-to-End Enterprise Auth Engine in Node.js',
        bn: 'Node.js-এ সম্পূর্ণ এন্টারপ্রাইজ অথেনটিকেশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Explore the complete production-grade pipeline implementation. It features brute-force detection with account lockout, scrypt password hashing with unique 16-byte cryptographic salts, RFC 6238 dynamic truncation with time-drift windows, and dual token generation.',
        bn: 'সম্পূর্ণ প্রোডাকশন-গ্রেড পাইপলাইন বাস্তবায়নটি পরীক্ষা করুন। এতে অ্যাকাউন্ট লকআউটসহ ব্রুট-ফোর্স সনাক্তকরণ, অনন্য ১৬-বাইটের ক্রিপ্টোগ্রাফিক সল্টসহ scrypt পাসওয়ার্ড হ্যাশিং, সময়ের ব্যবধান সহনশীল RFC ৬২৩৮ ডায়নামিক ট্রাঙ্কেশন এবং দ্বৈত টোকেন তৈরির ব্যবস্থা অন্তর্ভুক্ত রয়েছে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'enterprise-auth-pipeline.js',
      code: `// Enterprise Production-Grade Authentication Pipeline
const crypto = require('crypto');

class EnterpriseAuthPipeline {
  constructor() {
    this.users = new Map();
    this.rateLimiter = new Map(); // Composite key: "ip:userId" -> { attempts, lockoutUntil }
    this.activeRefreshTokens = new Set();
  }

  // Seed user with 16-byte random salt, scrypt hash, and TOTP secret
  registerUser(userId, rawPassword, totpSecretAscii) {
    const salt = crypto.randomBytes(16);
    const hash = crypto.scryptSync(rawPassword, salt, 64);

    this.users.set(userId, {
      userId: userId,
      salt: salt.toString('hex'),
      hash: hash.toString('hex'),
      totpSecret: Buffer.from(totpSecretAscii, 'ascii'),
      mfaEnabled: true
    });
    console.log('[USER REGISTERED] ' + userId + ' seeded with 16-byte salt and scrypt hash');
  }

  // RFC 6238 TOTP Dynamic Truncation Calculation
  static computeTotp(secretBuffer, timestampMs = Date.now()) {
    const timeStep = Math.floor(timestampMs / 30000); // 30-second window
    const counterBuf = Buffer.alloc(8);
    counterBuf.writeBigInt64BE(BigInt(timeStep));

    const hmac = crypto.createHmac('sha1', secretBuffer).update(counterBuf).digest();
    const offset = hmac[hmac.length - 1] & 0x0f;
    const truncatedCode =
      ((hmac[offset] & 0x7f) << 24) |
      ((hmac[offset + 1] & 0xff) << 16) |
      ((hmac[offset + 2] & 0xff) << 8) |
      (hmac[offset + 3] & 0xff);

    return (truncatedCode % 1000000).toString().padStart(6, '0');
  }

  // 4-Tier Pipeline Execution
  authenticate(userId, submittedPassword, submittedTotpCode, clientIp) {
    const now = Date.now();
    const rateKey = clientIp + ':' + userId;
    const rateRecord = this.rateLimiter.get(rateKey) || { attempts: 0, lockoutUntil: 0 };

    // TIER 1: Rate Limiter & Brute-Force Gate (5 consecutive failures)
    if (now < rateRecord.lockoutUntil) {
      const waitSec = Math.ceil((rateRecord.lockoutUntil - now) / 1000);
      return {
        status: 429,
        success: false,
        error: 'Too many failed login attempts. Locked out for ' + waitSec + ' seconds.'
      };
    }

    const user = this.users.get(userId);
    if (!user) {
      rateRecord.attempts += 1;
      this.rateLimiter.set(rateKey, rateRecord);
      return { status: 401, success: false, error: 'Invalid username or password.' };
    }

    // TIER 2: Primary Password Hash Verification (scrypt + timingSafeEqual)
    const saltBuf = Buffer.from(user.salt, 'hex');
    const storedHashBuf = Buffer.from(user.hash, 'hex');
    const computedHashBuf = crypto.scryptSync(submittedPassword, saltBuf, 64);

    const isPasswordCorrect = crypto.timingSafeEqual(storedHashBuf, computedHashBuf);
    if (!isPasswordCorrect) {
      rateRecord.attempts += 1;
      if (rateRecord.attempts >= 5) {
        rateRecord.lockoutUntil = now + 900000; // 15-minute (900s) lockout
        console.log('[SECURITY ALERT] 5 failed attempts reached! Account ' + userId + ' locked for 15 minutes.');
      }
      this.rateLimiter.set(rateKey, rateRecord);
      return { status: 401, success: false, error: 'Invalid username or password.' };
    }

    // TIER 3: Step-Up Multi-Factor Verification (TOTP ±30s window)
    if (user.mfaEnabled) {
      if (!submittedTotpCode) {
        return { status: 403, success: false, mfaRequired: true, error: 'Multi-factor TOTP code required.' };
      }

      const validCodes = [
        EnterpriseAuthPipeline.computeTotp(user.totpSecret, now - 30000), // Past window
        EnterpriseAuthPipeline.computeTotp(user.totpSecret, now),           // Current window
        EnterpriseAuthPipeline.computeTotp(user.totpSecret, now + 30000)  // Future window
      ];

      const isMfaValid = validCodes.includes(submittedTotpCode.trim());
      if (!isMfaValid) {
        rateRecord.attempts += 1;
        this.rateLimiter.set(rateKey, rateRecord);
        return { status: 401, success: false, error: 'Invalid or expired MFA code.' };
      }
    }

    // AUTHENTICATION SUCCESS: Clear failed attempt counter
    this.rateLimiter.delete(rateKey);

    // TIER 4: Scoped Dual-Token Issuance
    const accessToken = 'at_' + crypto.randomBytes(32).toString('hex');
    const refreshToken = 'rt_' + crypto.randomBytes(32).toString('hex');
    this.activeRefreshTokens.add(refreshToken);

    return {
      status: 200,
      success: true,
      tokenType: 'Bearer',
      expiresIn: 900, // 15 minutes (900 seconds)
      accessToken: accessToken,
      refreshToken: refreshToken
    };
  }
}

const pipeline = new EnterpriseAuthPipeline();
pipeline.registerUser('lead_engineer', 'UltraSecurePassword2026!', 'BASE_ENTERPRISE_SECRET_KEY');

console.log('=== Scenario 1: Successful Login with Valid Password & Valid TOTP ===');
const currentTotp = EnterpriseAuthPipeline.computeTotp(Buffer.from('BASE_ENTERPRISE_SECRET_KEY', 'ascii'));
const successResult = pipeline.authenticate('lead_engineer', 'UltraSecurePassword2026!', currentTotp, '10.0.0.45');
console.log('Login Result:', successResult);

console.log('\\n=== Scenario 2: Wrong Password Attempt ===');
const wrongPassResult = pipeline.authenticate('lead_engineer', 'BadPass999', currentTotp, '10.0.0.45');
console.log('Wrong Password Result:', wrongPassResult);

console.log('\\n=== Scenario 3: Correct Password But Wrong TOTP Code ===');
const wrongMfaResult = pipeline.authenticate('lead_engineer', 'UltraSecurePassword2026!', '123456', '10.0.0.45');
console.log('Wrong MFA Result:', wrongMfaResult);

console.log('\\n=== Scenario 4: Triggering 5-Attempt Account Lockout ===');
for (let i = 0; i < 4; i++) {
  pipeline.authenticate('lead_engineer', 'WrongAttempt', '000000', '10.0.0.45');
}
const lockedOutResult = pipeline.authenticate('lead_engineer', 'UltraSecurePassword2026!', currentTotp, '10.0.0.45');
console.log('Lockout Result:', lockedOutResult);`,
      caption: {
        en: 'The pipeline halts brute-force attacks via rate limits and enforces memory-hard password verification alongside TOTP dynamic truncation.',
        bn: 'পাইপলাইনটি রেট লিমিটের মাধ্যমে আক্রমণ প্রতিহত করে এবং TOTP ট্রাঙ্কেশনের সাথে মেমোরি-হার্ড পাসওয়ার্ড যাচাই নিশ্চিত করে।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Zero Trust Principles: Never Trust, Always Verify',
        bn: 'জিরো ট্রাস্ট নীতি: কখনোই বিশ্বাস করবেন না, সর্বদা যাচাই করুন'
      },
      text: {
        en: 'Modern security architecture abandons the outdated perimeter security model where internal networks were implicitly trusted. Under Zero Trust architecture, every single request, microservice call, and API invocation must independently authenticate and authorize using short-lived cryptographically signed tokens. Never trust network boundaries, user claims, or stale tokens; always verify signature integrity, expiration timestamps, and granular permissions.',
        bn: 'আধুনিক নিরাপত্তা ব্যবস্থা পুরানো পেরিমিটার নিরাপত্তা মডেল ত্যাগ করেছে যেখানে অভ্যন্তরীণ নেটওয়ার্ককে অন্ধভাবে বিশ্বাস করা হতো। জিরো ট্রাস্ট আর্কিটেকচারে প্রতিটি রিকোয়েস্ট, মাইক্রোসার্ভিস কল এবং এপিআই অনুরোধকে স্বল্পস্থায়ী ক্রিপ্টোগ্রাফিক টোকেনের মাধ্যমে স্বাধীনভাবে যাচাই করতে হয়। নেটওয়ার্ক সীমানা বা ব্যবহারকারীর দাবির ওপর অন্ধ বিশ্বাস না রেখে সর্বদা সিগনেচারের অখণ্ডতা, মেয়াদের সময়সীমা এবং নির্দিষ্ট অনুমতির সত্যতা প্রমাণ করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'auth-cap-ex-1',
      kind: 'predict',
      topic: 'brute-force-lockout-threshold',
      question: {
        en: 'How many consecutive failed login attempts trigger the temporary security lockout in this enterprise pipeline? (5). Type the number.',
        bn: 'এই এন্টারপ্রাইজ পাইপলাইনে কতবার একটানা ব্যর্থ লগইন চেষ্টার পর সাময়িক নিরাপত্তা লকআউট কার্যকর হয়? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: '5 failed attempts trigger the lockout threshold.',
        bn: '৫ টি ভুল চেষ্টার পর লকআউট সক্রিয় হয়।'
      },
      explanation: {
        en: 'A threshold of 5 failed attempts balances legitimate user typo tolerance with aggressive protection against automated password crackers.',
        bn: '৫ টি ভুল চেষ্টার সীমা সাধারণ ব্যবহারকারীর টাইপিং ভুল ক্ষমা করার পাশাপাশি পাসওয়ার্ড ভাঙার স্বয়ংক্রিয় সফটওয়্যার প্রতিহত করে।'
      },
    },
    {
      id: 'auth-cap-ex-2',
      kind: 'mcq',
      topic: 'defense-in-depth-rationale',
      question: {
        en: 'What is the primary architectural rationale behind combining rate limiting, memory-hard hashing, and step-up MFA in a single pipeline?',
        bn: 'একটিমাত্র পাইপলাইনে রেট লিমিটিং, মেমোরি-হার্ড হ্যাশিং এবং স্টেপ-আপ মাল্টি-ফ্যাক্টর অথেনটিকেশন যুক্ত করার প্রধান কারণ কী?'
      },
      options: [
        {
          en: 'Defense-in-depth ensures that the breach of any single security layer (e.g. an attacker guessing a password or obtaining a database hash dump) is stopped by the remaining independent defensive gates',
          bn: 'বহুস্তরীয় নিরাপত্তা ব্যবস্থা (Defense-in-depth) নিশ্চিত করে যে যেকোনো একটি স্তরে ত্রুটি দেখা দিলেও ( যেমন পাসওয়ার্ড অনুমান করা বা ডাটাবেজ ফাঁস হওয়া ) বাকি স্বাধীন স্তরগুলো আক্রমণকারীকে আটকে দিতে পারে',
        },
        {
          en: 'To make server cooling fans spin at ten thousand rotations per minute',
          bn: 'সার্ভারের কুলিং ফ্যানকে প্রতি মিনিটে দশ হাজার বার ঘোরাতে সাহায্য করা',
        },
        {
          en: 'To force all web browser windows to turn into dark mode automatically',
          bn: 'সব ওয়েব ব্রাউজারের উইন্ডোকে নিজে নিজেই ডার্ক মোডে পরিবর্তন করতে বাধ্য করা',
        },
        {
          en: 'To delete old video files from user hard drives every morning',
          bn: 'প্রতিদিন সকালে ব্যবহারকারীর হার্ডডিস্ক থেকে পুরানো ভিডিও ফাইল মুছে ফেলা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Defense-in-depth prevents a single vulnerability from causing system compromise.',
        bn: 'বহুস্তরীয় নিরাপত্তা একটিমাত্র দুর্বলতার কারণে পুরো সিস্টেম ভেঙে পড়া রোধ করে।'
      },
      explanation: {
        en: 'By chaining independent security gates, attackers cannot penetrate the system without defeating every distinct cryptographic and behavioural challenge.',
        bn: 'পরপর স্বাধীন নিরাপত্তা স্তর স্থাপন করায় সবগুলো স্তরকে ফাঁকি না দিয়ে আক্রমণকারী সিস্টেমে ঢুকতে পারে না।'
      },
    },
    {
      id: 'auth-cap-ex-3',
      kind: 'mcq',
      topic: 'short-lived-access-tokens-rationale',
      question: {
        en: 'Why does the enterprise pipeline issue 15-minute access tokens paired with rotating refresh tokens rather than issuing a single 30-day access token?',
        bn: 'এন্টারপ্রাইজ পাইপলাইনটি একটি একক ৩০ দিনের টোকেন দেওয়ার বদলে কেন ১৫ মিনিটের এক্সেস টোকেন এবং ঘূর্ণায়মান রিফ্রেশ টোকেন প্রদান করে?'
      },
      options: [
        {
          en: 'Short-lived access tokens dramatically minimize the window of exposure if a token is intercepted on the client, while rotating refresh tokens allow central servers to revoke sessions upon suspicious reuse',
          bn: 'স্বল্পস্থায়ী এক্সেস টোকেন কোনোভাবে ক্লায়েন্ট থেকে চুরি হলেও আক্রমণের কার্যকর সময়সীমা ব্যাপকভাবে কমিয়ে দেয়, এবং রিফ্রেশ টোকেন পরিবর্তনের মাধ্যমে সন্দেহজনক ব্যবহারে তাৎক্ষণিক সেশন বাতিল করা যায়',
        },
        {
          en: 'Because computer monitors can only display numbers for fifteen minutes before dimming',
          bn: 'কারণ কম্পিউটারের মনিটর অনুজ্জ্বল হওয়ার আগে মাত্র পনেরো মিনিট সংখ্যা প্রদর্শন করতে পারে',
        },
        {
          en: 'Because internet cables automatically disconnect every fifteen minutes',
          bn: 'কারণ ইন্টারনেট কেবল প্রতি পনেরো মিনিট পর পর সংযোগ বিচ্ছিন্ন করে দেয়',
        },
        {
          en: 'Because smartphones run out of battery if a token lasts longer than one hour',
          bn: 'কারণ টোকেনের মেয়াদ এক ঘণ্টার বেশি হলে স্মার্টফোনের ব্যাটারি শেষ হয়ে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Short-lived tokens minimize the blast radius of token interception.',
        bn: 'স্বল্পস্থায়ী টোকেন ফাঁসের ঝুঁকি এবং ক্ষতির পরিধি সর্বনিম্ন পর্যায়ে রাখে।'
      },
      explanation: {
        en: 'A 15-minute access token limits damage if stolen. The refresh token stays securely in an HttpOnly cookie and is revoked if reused maliciously.',
        bn: '১৫ মিনিটের টোকেন চুরি হলেও ক্ষতির সুযোগ খুব কম থাকে। রিফ্রেশ টোকেন নিরাপদ কুকিতে থাকে এবং অপব্যবহার ধরা পড়লে বাতিল হয়ে যায়।'
      },
    },
    {
      id: 'auth-cap-ex-4',
      kind: 'predict',
      topic: 'totp-time-step-window-seconds',
      question: {
        en: 'How many seconds is the standard validity period of each TOTP time-step window according to RFC 6238? (30). Type the number.',
        bn: 'RFC ৬২৩৮ স্ট্যান্ডার্ড অনুযায়ী প্রতিটি TOTP টাইম-স্টেপ উইন্ডোর সাধারণ কার্যকর সময়কাল কত সেকেন্ড? ( ৩০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '30',
      hint: {
        en: 'The standard TOTP time-step is 30 seconds.',
        bn: 'আদর্শ TOTP টাইম-স্টেপ হলো ৩০ সেকেন্ড।'
      },
      explanation: {
        en: 'RFC 6238 specifies a default time-step (X) of 30 seconds for generating dynamic OTP codes.',
        bn: 'RFC ৬২৩৮ স্ট্যান্ডার্ডে ডায়নামিক ওটিপি তৈরির জন্য আদর্শ সময়কাল হিসেবে ৩০ সেকেন্ড নির্ধারিত।'
      },
    },
  ],
  quiz: {
    id: 'auth-capstone-quiz',
    title: {
      en: 'Enterprise Authentication Architecture Capstone Quiz',
      bn: 'এন্টারপ্রাইজ অথেনটিকেশন আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'auth-cap-qz-1',
        kind: 'mcq',
        topic: 'rate-limiting-composite-key',
        question: {
          en: 'Why is it critical for the rate limiter to track failed attempts using a composite key (IP address + userId) rather than relying on IP address alone?',
          bn: 'রেট লিমিটারে কেবল আইপি ঠিকানার ওপর নির্ভর না করে একটি যৌথ কি ( আইপি ঠিকানা + ইউজার আইডি ) দিয়ে ব্যর্থ চেষ্টা ট্র্যাক করা কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'Tracking IP alone allows attackers using distributed botnets across millions of rotating IPs to brute-force a single account without triggering per-IP limits; composite keys track per-account attacks while avoiding blocking entire corporate offices sharing one NAT IP',
            bn: 'কেবল আইপি ট্র্যাক করলে আক্রমণকারীরা বিভিন্ন আইপির মাধ্যমে একটি অ্যাকাউন্টে হামলা করতে পারে; যৌথ কি ব্যবহারের ফলে একই অফিসের সবাই একসাথে আটকে যাওয়া এড়ানো যায় এবং নির্দিষ্ট অ্যাকাউন্টের ওপর হামলা রোধ করা সম্ভব হয়',
          },
          {
            en: 'Because computer networks only recognize letters when numbers are attached',
            bn: 'কারণ কম্পিউটার নেটওয়ার্ক কেবল তখনই অক্ষর চিনতে পারে যখন তার সাথে সংখ্যা থাকে',
          },
          {
            en: 'Because composite keys double the download speed of computer games',
            bn: 'কারণ যৌথ কি কম্পিউটার গেম ডাউনলোডের গতি দ্বিগুণ করে দেয়',
          },
          {
            en: 'Because web browser tabs freeze when IP addresses are tracked alone',
            bn: 'কারণ একা আইপি ঠিকানা ট্র্যাক করলে ব্রাউজারের ট্যাবগুলো হ্যাং হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Composite tracking defends against distributed credential stuffing and NAT collisions.',
          bn: 'যৌথ ট্র্যাকিং ডিস্ট্রিবিউটেড হামলা এবং শেয়ার্ড আইপির সমস্যা সমাধান করে।'
        },
        explanation: {
          en: 'Composite keys ensure distributed botnets attacking a single user trigger account defense, while distinct users sharing a university or office IP are not locked out.',
          bn: 'যৌথ কি নিশ্চিত করে যে একই একাউন্টে অনেক আইপি থেকে আক্রমণ হলেও তা ধরা পড়বে, আবার একটি অফিসের অন্য সবাই নিরাপদে থাকবে।'
        },
      },
      {
        id: 'auth-cap-qz-2',
        kind: 'mcq',
        topic: 'constant-time-comparison-side-channels',
        question: {
          en: 'Why must cryptographic token and password hash comparisons strictly utilize constant-time comparison (crypto.timingSafeEqual)?',
          bn: 'ক্রিপ্টোগ্রাফিক টোকেন এবং পাসওয়ার্ড হ্যাশ যাচাইয়ের ক্ষেত্রে কেন কঠোরভাবে কনস্ট্যান্ট-টাইম তুলনা (crypto.timingSafeEqual) ব্যবহার করা আবশ্যক?'
        },
        options: [
          {
            en: 'Standard string comparisons (== or ===) terminate early on the first mismatched byte, creating nanosecond timing differences that attackers can measure over network calls to guess valid hashes byte-by-byte',
            bn: 'সাধারণ স্ট্রিং তুলনা ( == বা === ) প্রথম অমিল বাইট পেলেই বন্ধ হয়ে যায়, যার ন্যানোসেকেন্ড সময়ের ব্যবধান মেপে আক্রমণকারীরা এক এক করে পুরো হ্যাশ বা টোকেন বের করে ফেলতে পারে',
          },
          {
            en: 'Because constant-time comparison prevents computer monitors from flickering',
            bn: 'কারণ কনস্ট্যান্ট-টাইম তুলনা কম্পিউটারের মনিটর কাঁপাকাঁপি করা বন্ধ করে',
          },
          {
            en: 'Because web servers run out of physical memory when strings are compared normally',
            bn: 'কারণ সাধারণ নিয়মে স্ট্রিং তুলনা করলে ওয়েব সার্ভারের সমস্ত মেমোরি শেষ হয়ে যায়',
          },
          {
            en: 'Because timingSafeEqual automatically deletes junk files from server hard drives',
            bn: 'কারণ timingSafeEqual সার্ভারের হার্ডডিস্ক থেকে অপ্রয়োজনীয় ফাইল নিজে থেকেই মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Early string exit leaks byte matching timing information.',
          bn: 'স্ট্রিং দ্রুত বের হয়ে যাওয়ায় সময়ের তথ্যে বাইট মেলার সংকেত ফাঁস হয়।'
        },
        explanation: {
          en: 'Constant-time comparison executes in identical CPU cycles regardless of where characters differ, closing the side-channel timing attack vector.',
          bn: 'কনস্ট্যান্ট-টাইম পদ্ধতি প্রতিটি তুলনার জন্য সমান সময় নেয়, ফলে টাইমিং অ্যাটাকের সব পথ বন্ধ হয়ে যায়।'
        },
      },
      {
        id: 'auth-cap-qz-3',
        kind: 'mcq',
        topic: 'refresh-token-rotation-replay-detection',
        question: {
          en: 'What security defense occurs when a backend detects an already-used or outdated refresh token submitted for renewal (Refresh Token Rotation Reuse Detection)?',
          bn: 'নবায়নের জন্য জমা দেওয়া রিফ্রেশ টোকেনটি ইতোমধ্যে ব্যবহৃত বা পুরানো বলে শনাক্ত হলে (রিফ্রেশ টোকেন রোটেশন রিইউজ ডিটেকশন) ব্যাকএন্ড কী ধরনের নিরাপত্তা ব্যবস্থা নেয়?'
        },
        options: [
          {
            en: 'The server treats the event as an active token theft, immediately revoking all issued tokens belonging to that entire user session family and requiring a full re-authentication',
            bn: 'সার্ভার এই ঘটনাটিকে সরাসরি টোকেন চুরির চেষ্টা হিসেবে গণ্য করে এবং সেই নির্দিষ্ট সেশনের সম্পূর্ণ টোকেন ফ্যামিলি তাৎক্ষণিকভাবে বাতিল করে ব্যবহারকারীকে পুনরায় লগইন করতে বাধ্য করে',
          },
          {
            en: 'The server increases the user bank account balance by fifty dollars',
            bn: 'সার্ভার ব্যবহারকারীর ব্যাংক অ্যাকাউন্টের ব্যালেন্স পঞ্চাশ ডলার বাড়িয়ে দেয়',
          },
          {
            en: 'The server turns the website text into large cursive calligraphy letters',
            bn: 'সার্ভার ওয়েবসাইটের সমস্ত লেখাকে বড় ক্যালিগ্রাফি ফন্টে রূপান্তরিত করে',
          },
          {
            en: 'The server shuts down the office electricity for twenty minutes',
            bn: 'সার্ভার অফিসের বিদ্যুৎ সংযোগ বিশ মিনিটের জন্য সম্পূর্ণ বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Reused refresh tokens trigger immediate revocation of the whole token chain.',
          bn: 'ব্যবহৃত রিফ্রেশ টোকেন পুনরায় দিলে পুরো টোকেন ফ্যামিলি সরাসরি বাতিল হয়।'
        },
        explanation: {
          en: 'If a legitimate client rotated a token and an attacker later presents the old token, the system realizes theft occurred and nukes the entire session family.',
          bn: 'বৈধ ক্লায়েন্ট টোকেন পরিবর্তনের পর হ্যাকার পুরানো টোকেন জমা দিলে সিস্টেম চুরি বুঝতে পারে এবং পুরো সেশন বাতিল করে দেয়।'
        },
      },
      {
        id: 'auth-cap-qz-4',
        kind: 'mcq',
        topic: 'zero-trust-principle',
        question: {
          en: 'What is the foundational philosophy of Zero Trust architecture in modern cloud and microservices security?',
          bn: 'আধুনিক ক্লাউড এবং মাইক্রোসার্ভিস নিরাপত্তায় জিরো ট্রাস্ট আর্কিটেকচারের মূল দর্শন কী?'
        },
        options: [
          {
            en: 'Never trust, always verify: assume networks are hostile, eliminate implicit trust based on physical location or IP, and cryptographically verify every identity, transaction, and data access request explicitly',
            bn: 'কখনোই অন্ধ বিশ্বাস করবেন না, সর্বদা যাচাই করুন: নেটওয়ার্ককে অনিরাপদ ধরে নিন, নেটওয়ার্ক অবস্থান বা আইপির ওপর ভিত্তি করে সুযোগ দেওয়া বন্ধ করুন এবং প্রতিটি রিকোয়েস্ট ও তথ্য আদান-প্রদান ক্রিপ্টোগ্রাফিকভাবে নিশ্চিত করুন',
          },
          {
            en: 'Never install software updates on any computer connected to the internet',
            bn: 'ইন্টারনেটের সাথে যুক্ত থাকা কোনো কম্পিউটারে সফটওয়্যার আপডেট কখনোই ইনস্টল না করা',
          },
          {
            en: 'Trust every computer that is physically located inside the same office building',
            bn: 'একই অফিস ভবনের ভেতরে শারীরিকভাবে থাকা সমস্ত কম্পিউটারকে অন্ধভাবে বিশ্বাস করা',
          },
          {
            en: 'Disable all passwords and let anyone access company databases freely',
            bn: 'সমস্ত পাসওয়ার্ড মুছে ফেলে কোম্পানির ডাটাবেজে যে কাউকে স্বাধীনভাবে ঢুকতে দেওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero Trust demands explicit verification for every request without perimeter assumptions.',
          bn: 'জিরো ট্রাস্ট কোনো পূর্বানুমান ছাড়া প্রতিটি রিকোয়েস্টে সরাসরি ক্রিপ্টোগ্রাফিক যাচাই দাবি করে।'
        },
        explanation: {
          en: 'Zero Trust acknowledges that attackers can exist inside the corporate network. Every access request must be authenticated and authorized with least privilege.',
          bn: 'জিরো ট্রাস্ট স্বীকার করে যে অভ্যন্তরীণ নেটওয়ার্কেও বিপদ থাকতে পারে। প্রতিটি এক্সেস সর্বনিম্ন অধিকার দিয়ে সরাসরি যাচাই করতে হয়।'
        },
      },
    ],
  },
};
