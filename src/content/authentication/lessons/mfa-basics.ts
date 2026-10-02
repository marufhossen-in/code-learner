import type { Lesson } from '../../../lib/types';

export const MfaBasicsLesson: Lesson = {
  slug: 'mfa-basics',
  tech: 'authentication',
  title: {
    en: 'Multi-Factor Authentication: TOTP RFC 6238 & Authenticator Apps',
    bn: 'মাল্টি-ফ্যাক্টর অথেনটিকেশন: TOTP RFC ৬২৩৮ এবং অথেনটিকেটর অ্যাপ'
  },
  summary: {
    en: 'Master the cryptographic algorithms powering modern two-factor and multi-factor authentication. Explore Time-Based One-Time Passwords (TOTP RFC 6238) and HMAC-based One-Time Passwords (HOTP RFC 4226). Understand how offline authenticator apps like Google Authenticator and 1Password compute 6-digit verification codes using shared cryptographic secrets and 30-second time windows. Learn how to tolerate clock drift and securely issue one-time emergency recovery codes.',
    bn: 'আধুনিক টু-ফ্যাক্টর ও মাল্টি-ফ্যাক্টর অথেনটিকেশন পরিচালনাকারী ক্রিপ্টোগ্রাফিক অ্যালগরিদমগুলো আয়ত্ত করুন। টাইম-বেসড ওয়ান-টাইম পাসওয়ার্ড (TOTP RFC ৬২৩৮) এবং HMAC-ভিত্তিক ওয়ান-টাইম পাসওয়ার্ড (HOTP RFC ৪২২৬) এর গঠন বুঝুন। গুগল অথেনটিকেটর এবং ওয়ানপাসওয়ার্ডের মতো অফলাইন অ্যাপগুলো শেয়ার্ড ক্রিপ্টোগ্রাফিক কি এবং ৩০ সেকেন্ডের টাইম উইন্ডো ব্যবহার করে কীভাবে ৬ সংখ্যার কোড তৈরি করে তা শিখুন। ঘড়ির সময়ের ব্যবধান (ক্লক ড্রিফট) সামলানো এবং ব্যাকআপ রিকভারি কোড তৈরির প্রকৌশল পদ্ধতি জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-imperative-of-multi-factor-defense',
      text: {
        en: 'The Imperative of Multi-Factor Defense',
        bn: 'মাল্টি-ফ্যাক্টর নিরাপত্তার অপরিহার্যতা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you rely solely on passwords for user authentication, your system remains vulnerable to credential leaks and phishing attacks. Adding a second independent factor ensures that a compromised password alone cannot breach an account.',
        bn: 'যখন আপনি ব্যবহারকারীর প্রমাণীকরণের জন্য কেবল পাসওয়ার্ডের ওপর নির্ভর করেন, তখন আপনার সিস্টেম পাসওয়ার্ড চুরি ও ফিশিং আক্রমণের মুখে অরক্ষিত থাকে। একটি দ্বিতীয় স্বাধীন ফ্যাক্টর যুক্ত করলে পাসওয়ার্ড ফাঁস হলেও অ্যাকাউন্ট সুরক্ষিত থাকে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Multi-Factor Authentication requires users to provide evidence from 2 or more distinct categories before granting access. Today, the global standard for software-based authentication is the Time-Based Dynamic Password algorithm (TOTP, defined in RFC 6238). Authenticator applications generate changing 6-digit codes entirely offline every 30 seconds without sending network requests to the server.',
        bn: 'মাল্টি-ফ্যাক্টর অথেনটিকেশন ব্যবহারকারীকে অ্যাক্সেস দেওয়ার আগে ২ বা ততোধিক ভিন্ন ক্যাটাগরি থেকে প্রমাণ প্রদর্শনের দাবি করে। বর্তমানে সফটওয়্যার-ভিত্তিক অথেনটিকেশনের আন্তর্জাতিক মানদণ্ড হলো টাইম-বেসড ওটিপি অ্যালগরিদম ( TOTP, যা RFC ৬২৩৮ এ সংজ্ঞায়িত )। অথেনটিকেটর অ্যাপগুলো সার্ভারে কোনো ইন্টারনেট রিকোয়েস্ট না পাঠিয়ে সম্পূর্ণ অফলাইনে প্রতি ৩০ সেকেন্ড পর পর নতুন ৬ সংখ্যার কোড তৈরি করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Time-Step Counter Calculation',
            bn: '১. সময়-ধাপ কাউন্টার হিসাব'
          },
          text: {
            en: 'The device reads the current Unix timestamp in seconds and divides it by the 30-second step duration (T = floor(now / 30)). This integer is packed into an 8-byte big-endian binary buffer.',
            bn: 'ডিভাইসটি সেকেন্ডে বর্তমান ইউনিক্স সময় পড়ে এবং একে ৩০ সেকেন্ডের ধাপের সময়সীমা দিয়ে ভাগ করে ( T = floor(now / ৩০) )। এই পূর্ণসংখ্যাটিকে ৮ বাইটের বাইনারি বাফারে রূপান্তর করা হয়।'
          },
        },
        {
          title: {
            en: '2. Cryptographic HMAC Computation',
            bn: '২. ক্রিপ্টোগ্রাফিক HMAC গণনা'
          },
          text: {
            en: 'The algorithm hashes the 8-byte time counter using HMAC-SHA1 initialized with the shared cryptographic secret key, producing a 20-byte binary message digest.',
            bn: 'অ্যালগরিদমটি শেয়ার্ড সিক্রেট কি দিয়ে HMAC-SHA1 ব্যবহার করে সেই ৮ বাইটের কাউন্টার হ্যাশ করে একটি ২০ বাইটের ডাইজেস্ট তৈরি করে।'
          },
        },
        {
          title: {
            en: '3. Dynamic Truncation Extraction',
            bn: '৩. ডায়নামিক ট্রাঙ্কেশন নিষ্কাশন'
          },
          text: {
            en: 'To extract a fixed number from the digest, the algorithm reads the low-order 4 bits of the last byte as an offset (0 to 15). It slices 4 bytes starting at that offset, masking the most significant bit.',
            bn: 'ডাইজেস্ট থেকে নির্দিষ্ট সংখ্যা বের করতে শেষ বাইটের নিচের ৪ বিট পড়ে একটি অফসেট ( ০ থেকে ১৫ ) নেওয়া হয়। সেই অফসেট থেকে ৪ বাইট ডাটা কেটে নিয়ে প্রথম বিটটি মাস্ক করা হয়।'
          },
        },
        {
          title: {
            en: '4. Modulo Reduction to 6 Digits',
            bn: '৪. ৬ সংখ্যার মডিউলো রূপান্তর'
          },
          text: {
            en: 'The extracted 31-bit integer is reduced using modulo 1000000 and padded with leading zeros to format the final 6-digit numeric verification code presented to the user.',
            bn: 'সেই ৩১-বিট পূর্ণসংখ্যাটিকে ১০০০০০০ দিয়ে মডিউলো করে এবং শুরুতে শূন্য বসিয়ে চূড়ান্ত ৬ সংখ্যার কোডে পরিণত করা হয় যা ব্যবহারকারী স্ক্রিনে দেখতে পান।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The TOTP Cryptographic Architecture: RFC 6238 Algorithm Flow',
        bn: 'TOTP ক্রিপ্টোগ্রাফিক আর্কিটেকচার: RFC ৬২৩৮ অ্যালগরিদম প্রবাহ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="TOTP architecture showing shared secret, time counter, HMAC-SHA1, dynamic truncation, and 6-digit code">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">TIME-BASED ONE-TIME PASSWORD (TOTP RFC 6238) ENGINE</text>
  
  <!-- Left Box: Inputs -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. DUAL INPUTS</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="110" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="22" fill="#38bdf8" font-size="9" font-weight="bold">A. SHARED SECRET (K)</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="8">Base32 Encoded String</text>
      <text x="15" y="58" fill="#f8fafc" font-size="8">"JBSWY3DPEHPK3PXP"</text>
      <text x="15" y="78" fill="#6ee7b7" font-size="8">✓ Pre-shared via QR Code</text>
      <text x="15" y="94" fill="#6ee7b7" font-size="8">✓ Stored in phone &amp; server</text>
      
      <rect y="125" width="200" height="110" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="147" fill="#f59e0b" font-size="9" font-weight="bold">B. TIME COUNTER (C)</text>
      <text x="15" y="167" fill="#cbd5e1" font-size="8">Unix Time / 30 seconds</text>
      <text x="15" y="183" fill="#f8fafc" font-size="8">C = floor(now / 30)</text>
      <text x="15" y="203" fill="#6ee7b7" font-size="8">✓ 8-byte binary buffer</text>
      <text x="15" y="219" fill="#6ee7b7" font-size="8">✓ Changes every 30 secs</text>
      
      <rect y="248" width="200" height="40" rx="4" fill="#064e3b"/>
      <text x="100" y="272" fill="#6ee7b7" font-size="8" text-anchor="middle">ZERO Network Transit Needed!</text>
    </g>
  </g>
  
  <!-- Middle Box: Cryptographic Core -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. CRYPTOGRAPHIC CORE</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="85" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#f59e0b" font-size="10" font-weight="bold">HMAC-SHA1(K, C)</text>
      <text x="15" y="42" fill="#cbd5e1" font-size="8">Feeds shared secret &amp; time buffer</text>
      <text x="15" y="58" fill="#cbd5e1" font-size="8">into keyed-hash engine</text>
      <text x="15" y="74" fill="#6ee7b7" font-size="8">Output: 20-byte cryptographic digest</text>
      
      <rect y="98" width="240" height="95" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="120" fill="#10b981" font-size="10" font-weight="bold">DYNAMIC TRUNCATION</text>
      <text x="15" y="140" fill="#cbd5e1" font-size="8">offset = digest[19] &amp; 0x0F</text>
      <text x="15" y="156" fill="#cbd5e1" font-size="8">Extracts 4 bytes starting at offset</text>
      <text x="15" y="174" fill="#6ee7b7" font-size="8">binary = (b0 &amp; 0x7f)&lt;&lt;24 | b1&lt;&lt;16...</text>
      
      <rect y="205" width="240" height="85" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="228" fill="#6ee7b7" font-size="10" font-weight="bold">CLOCK DRIFT TOLERANCE</text>
      <text x="15" y="248" fill="#cbd5e1" font-size="8">Server checks: [T-1, T, T+1]</text>
      <text x="15" y="264" fill="#cbd5e1" font-size="8">Accepts ±30 seconds clock skew</text>
      <text x="15" y="280" fill="#38bdf8" font-size="8">Prevents transit delay failures</text>
    </g>
  </g>
  
  <!-- Right Box: Verification Output -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">3. 6-DIGIT OTP</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="130" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="9" font-weight="bold">CODE FORMATTING:</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8">code = binary % 1,000,000</text>
      
      <rect y="60" width="200" height="55" rx="4" fill="#064e3b"/>
      <text x="100" y="96" fill="#38bdf8" font-size="22" font-weight="bold" text-anchor="middle">482 910</text>
      
      <rect y="145" width="200" height="145" rx="4" fill="#0f172a" stroke="#818cf8"/>
      <text x="15" y="168" fill="#818cf8" font-size="9" font-weight="bold">BACKUP RECOVERY CODES</text>
      <text x="15" y="188" fill="#cbd5e1" font-size="8">• 8 single-use codes issued</text>
      <text x="15" y="206" fill="#cbd5e1" font-size="8">• Hashed in database</text>
      <text x="15" y="224" fill="#cbd5e1" font-size="8">• Used if phone is lost/broken</text>
      <text x="15" y="244" fill="#6ee7b7" font-size="8">✓ Burned after 1 usage</text>
      <text x="15" y="264" fill="#10b981" font-size="8">✓ Secure emergency bypass</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">TOTP computes cryptographic OTPs using shared secrets and synchronized 30-second clocks; no SMS networks involved</text>
</svg>`,
      caption: {
        en: 'The TOTP algorithm derives 6-digit codes by hashing the 30-second time step with HMAC-SHA1 and dynamic truncation.',
        bn: 'TOTP অ্যালগরিদম শেয়ার্ড কি এবং ৩০ সেকেন্ডের টাইম স্টেপকে HMAC-SHA1 ও ডায়নামিক ট্রাঙ্কেশনের মাধ্যমে ৬ সংখ্যার ওটিপিতে রূপান্তর করে।'
      },
    },
    {
      type: 'heading',
      id: 'totp-engine-code',
      text: {
        en: 'Building an RFC 6238 TOTP Engine in Node.js',
        bn: 'Node.js-এ RFC ৬২৩৮ TOTP ইঞ্জিন বাস্তবায়ন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how authenticator applications generate and verify time-based codes, inspect the following RFC 6238 implementation. It calculates time steps, extracts 6-digit numeric codes, and tolerates client clock drift windows.',
        bn: 'অথেনটিকেটর অ্যাপ কীভাবে সময়ভিত্তিক কোড তৈরি এবং যাচাই করে তা দেখতে নিচের RFC ৬২৩৮ কোডটি লক্ষ্য করুন। এটি সময় ধাপ হিসাব করে, ৬ সংখ্যার কোড বের করে এবং ক্লায়েন্টের ঘড়ির সময়ের ব্যবধান (ক্লক ড্রিফট) সামঞ্জস্য করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'totp-authenticator-engine.js',
      code: `// RFC 6238 Compliant TOTP Verification Engine using Node.js crypto
const crypto = require('crypto');

class TotpAuthenticator {
  // 1. Generate 6-digit code for a given timestamp (defaults to current time)
  static generateCode(sharedSecret, timestampMs = Date.now(), stepSeconds = 30) {
    // Calculate 30-second time-step counter
    const counter = Math.floor(timestampMs / 1000 / stepSeconds);

    // Pack counter into an 8-byte big-endian binary buffer
    const timeBuffer = Buffer.alloc(8);
    timeBuffer.writeBigInt64BE(BigInt(counter));

    // Compute HMAC-SHA1 digest
    const hmac = crypto.createHmac('sha1', Buffer.from(sharedSecret, 'utf8'));
    hmac.update(timeBuffer);
    const digest = hmac.digest();

    // Dynamic Truncation: extract 4-bit offset from last byte
    const offset = digest[digest.length - 1] & 0x0f;

    // Extract 31-bit big-endian unsigned integer
    const binaryValue =
      ((digest[offset] & 0x7f) << 24) |
      ((digest[offset + 1] & 0xff) << 16) |
      ((digest[offset + 2] & 0xff) << 8) |
      (digest[offset + 3] & 0xff);

    // Modulo 1,000,000 to produce 6-digit integer padded with zeros
    const codeNumber = binaryValue % 1000000;
    return codeNumber.toString().padStart(6, '0');
  }

  // 2. Verify submitted OTP with clock drift tolerance window ([-1, 0, +1])
  static verifyCode(submittedCode, sharedSecret, currentTimestampMs = Date.now(), windowTolerance = 1) {
    if (!submittedCode || submittedCode.length !== 6) return false;

    // Check previous, current, and future 30-second windows
    for (let stepOffset = -windowTolerance; stepOffset <= windowTolerance; stepOffset++) {
      const windowTimestamp = currentTimestampMs + (stepOffset * 30 * 1000);
      const expectedCode = TotpAuthenticator.generateCode(sharedSecret, windowTimestamp);

      // Use constant-time comparison to prevent timing attacks
      if (crypto.timingSafeEqual(Buffer.from(submittedCode), Buffer.from(expectedCode))) {
        return true;
      }
    }
    return false;
  }

  // 3. Generate single-use backup recovery codes
  static generateRecoveryCodes(count = 8) {
    const codes = [];
    for (let i = 0; i < count; i++) {
      const plainCode = crypto.randomBytes(5).toString('hex').toUpperCase(); // 10-char code
      const hashCode = crypto.createHash('sha256').update(plainCode).digest('hex');
      codes.push({ plain: plainCode, hash: hashCode });
    }
    return codes;
  }
}

const mockSecret = 'MY_SHARED_TOTP_KEY_2026';

console.log('=== Step 1: Generating Live TOTP Code (Valid for 30s) ===');
const liveCode = TotpAuthenticator.generateCode(mockSecret);
console.log('Current 6-Digit Authenticator Code:', liveCode);

console.log('\\n=== Step 2: Verifying Submitted Code on Server ===');
const isValid = TotpAuthenticator.verifyCode(liveCode, mockSecret);
console.log('Verification Result (Current Time):', isValid); // true

console.log('\\n=== Step 3: Verifying with 25-Second Clock Skew (Drift Tolerance) ===');
const skewTimestamp = Date.now() + (25 * 1000);
const isSkewValid = TotpAuthenticator.verifyCode(liveCode, mockSecret, skewTimestamp);
console.log('Verification Result (Clock Skew +25s):', isSkewValid); // true

console.log('\\n=== Step 4: Generating 8 Emergency Recovery Codes ===');
const backupCodes = TotpAuthenticator.generateRecoveryCodes(8);
console.log('First Recovery Code Plain:', backupCodes[0].plain);
console.log('First Recovery Code Hash: ', backupCodes[0].hash);`,
      caption: {
        en: 'The TOTP engine generates 6-digit codes from time-steps and shared secrets, validating them with drift tolerance.',
        bn: 'TOTP ইঞ্জিন টাইম-স্টেপ এবং শেয়ার্ড কি থেকে ৬ সংখ্যার কোড তৈরি করে এবং ক্লক ড্রিফট সহনশীলতার সাথে যাচাই করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why Clock Drift Windows are Mandatory in Production',
        bn: 'প্রোডাকশনে ক্লক ড্রিফট উইন্ডো কেন বাধ্যতামূলক'
      },
      text: {
        en: 'Smartphone hardware clocks and server clocks are never perfectly synchronized to the microsecond. If a user types their 6-digit code at second 29, network routing latency can cause it to reach the server at second 31 (a new 30-second time step). Without clock drift tolerance, the login would fail frustratingly! Standard production systems evaluate a verification window of [-1, 0, +1], accepting codes from the previous, current, or next 30-second window while recording used codes to prevent replay attacks.',
        bn: 'স্মার্টফোনের ঘড়ি এবং সার্ভারের ঘড়ি কখনোই মাইক্রোসেকেন্ড পর্যন্ত হুবহু এক থাকে না। ব্যবহারকারী যদি ২৯ তম সেকেন্ডে ৬ সংখ্যার কোড সাবমিট করেন, তবে নেটওয়ার্কের দেরির কারণে তা সার্ভারে পৌঁছাতে ৩১ তম সেকেন্ড ( নতুন ৩০ সেকেন্ডের উইন্ডো ) হয়ে যেতে পারে। ক্লক ড্রিফট উইন্ডো না থাকলে লগইন ব্যর্থ হবে! তাই আধুনিক সিস্টেমে [-১, ০, +১] উইন্ডো ব্যবহার করে পূর্ববর্তী, বর্তমান বা পরবর্তী ৩০ সেকেন্ডের কোড গ্রহণ করা হয় এবং রিপ্লে আক্রমণ ঠেকাতে ব্যবহৃত কোড রেকর্ড করে রাখা হয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'mfa-bas-ex-1',
      kind: 'predict',
      topic: 'totp-time-step-window',
      question: {
        en: 'How many seconds is the standard time step window (TTL) for TOTP RFC 6238 authenticator codes? (30). Type the number.',
        bn: 'TOTP RFC ৬২৩৮ অথেনটিকেটর কোডের স্ট্যান্ডার্ড সময় ধাপের উইন্ডো (TTL) কত সেকেন্ডের? ( ৩০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '30',
      hint: {
        en: 'The standard TOTP time interval is 30 seconds.',
        bn: 'স্ট্যান্ডার্ড TOTP সময় ব্যবধান হলো ৩০ সেকেন্ড।'
      },
      explanation: {
        en: 'RFC 6238 specifies a 30-second time step, balancing user typing convenience against credential exposure windows.',
        bn: 'RFC ৬২৩৮ প্রতি ৩০ সেকেন্ডের সময় ধাপ নির্ধারণ করে, যা ব্যবহারের সুবিধা এবং নিরাপত্তার ভারসাম্য রক্ষা করে।'
      },
    },
    {
      id: 'mfa-bas-ex-2',
      kind: 'mcq',
      topic: 'totp-offline-generation',
      question: {
        en: 'Why can authenticator applications like Google Authenticator generate valid 6-digit codes even in airplane mode without internet connectivity?',
        bn: 'গুগল অথেনটিকেটরের মতো অ্যাপগুলো কোনো ইন্টারনেট সংযোগ বা মোবাইল নেটওয়ার্ক ছাড়াই অ্যারোপ্লেন মোডে কীভাবে সঠিক ৬ সংখ্যার কোড তৈরি করতে পারে?'
      },
      options: [
        {
          en: 'Both the phone app and the server independently calculate the code using the pre-shared cryptographic secret key and the synchronized Unix epoch clock; no network communication is required to compute the hash',
          bn: 'ফোন এবং সার্ভার উভয়ই আগে থেকে সংরক্ষিত গোপন ক্রিপ্টোগ্রাফিক কি এবং সুসংগত ইউনিক্স ঘড়ি ব্যবহার করে স্বাধীনভাবে হিসাব করে; হ্যাশ তৈরির জন্য কোনো নেটওয়ার্ক যোগাযোগের প্রয়োজন নেই',
        },
        {
          en: 'Because smartphones receive invisible radio signals sent directly from NASA satellites',
          bn: 'কারণ স্মার্টফোন নাসা স্যাটেলাইট থেকে পাঠানো অদৃশ্য রেডিও সিগন্যাল গ্রহণ করে',
        },
        {
          en: 'Because authenticator apps store fifty million codes inside the phone camera lens',
          bn: 'কারণ অথেনটিকেটর অ্যাপ ফোনের ক্যামেরা লেন্সের ভেতরে পাঁচ কোটি কোড সংরক্ষণ করে রাখে',
        },
        {
          en: 'Because airplane mode speeds up the battery power to generate random numbers',
          bn: 'কারণ অ্যারোপ্লেন মোড ব্যাটারির গতি বাড়িয়ে নিজে নিজেই র্যান্ডম সংখ্যা তৈরি করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'TOTP is purely mathematical, combining a shared secret with the current system time.',
        bn: 'TOTP সম্পূর্ণ গাণিতিক, যা শেয়ার্ড কি এবং বর্তমান সিস্টেম সময়ের সমন্বয়ে কাজ করে।',
      },
      explanation: {
        en: 'Because both parties know the shared secret and the current time counter, they arrive at identical answers independently without internet traffic.',
        bn: 'উভয় পক্ষের কাছে শেয়ার্ড কি এবং সময় জানা থাকায় কোনো ইন্টারনেট ট্রাফিক ছাড়াই তারা হুবহু একই ফলাফল পায়।'
      },
    },
    {
      id: 'mfa-bas-ex-3',
      kind: 'mcq',
      topic: 'clock-drift-tolerance',
      question: {
        en: 'What is the primary architectural purpose of configuring clock drift window tolerance ([-1, 0, +1]) on server-side TOTP verification?',
        bn: 'সার্ভার-সাইড TOTP যাচাইকরণে ক্লক ড্রিফট উইন্ডো সহনশীলতা ( [-১, ০, +১] ) কনফিগার করার প্রধান আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To account for minor clock skew between user mobile devices and server time, as well as network transit delays when submitting codes near the boundary of a 30-second window',
          bn: 'ব্যবহারকারীর মোবাইল এবং সার্ভারের ঘড়ির সামান্য সময়ের ব্যবধান এবং ৩০ সেকেন্ডের উইন্ডোর শেষ মুহূর্তে সাবমিট করা কোডের নেটওয়ার্ক বিলম্ব সামলানো',
        },
        {
          en: 'To reduce the electricity consumed by the server motherboard clock',
          bn: 'সার্ভার মাদারবোর্ড ক্লক দ্বারা ব্যবহৃত বিদ্যুতের খরচ কমিয়ে আনা',
        },
        {
          en: 'To automatically translate English numbers into Bengali digits',
          bn: 'ইংরেজি সংখ্যাগুলোকে স্বয়ংক্রিয়ভাবে বাংলা সংখ্যায় রূপান্তর করা',
        },
        {
          en: 'To allow users to log in with yesterday expired passwords',
          bn: 'ব্যবহারকারীদের গতকালের মেয়াদোত্তীর্ণ পাসওয়ার্ড দিয়ে লগইন করার সুযোগ দেওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'Clock drift tolerance prevents login failures caused by slight clock desynchronization.',
        bn: 'ক্লক ড্রিফট সহনশীলতা ঘড়ির সামান্য অমিলের কারণে লগইন ব্যর্থ হওয়া প্রতিরোধ করে।',
      },
      explanation: {
        en: 'Without a ±1 window, network latency could cause codes generated at second 29 to arrive at second 31 and fail.',
        bn: '±১ উইন্ডো না থাকলে ২৯তম সেকেন্ডে পাঠানো কোড ৩১তম সেকেন্ডে পৌঁছে ব্যর্থ হতে পারে।'
      },
    },
    {
      id: 'mfa-bas-ex-4',
      kind: 'predict',
      topic: 'totp-digit-count',
      question: {
        en: 'How many digits is the standard output length of an RFC 6238 TOTP verification code? (6). Type the number.',
        bn: 'RFC ৬২৩৮ TOTP ভেরিফিকেশন কোডের স্ট্যান্ডার্ড আউটপুট কয় সংখ্যার হয়? ( ৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '6',
      hint: {
        en: 'The standard TOTP code is 6 digits long.',
        bn: 'স্ট্যান্ডার্ড TOTP কোড ৬ সংখ্যার দীর্ঘ হয়।'
      },
      explanation: {
        en: 'The standard TOTP code is 6 digits long, providing 1000000 possible combinations for each 30-second window.',
        bn: 'স্ট্যান্ডার্ড TOTP কোড ৬ সংখ্যার হয়, যা প্রতি ৩০ সেকেন্ডের জন্য ১০০০০০০ টি ভিন্ন সম্ভাবনা প্রদান করে।'
      },
    },
  ],
  quiz: {
    id: 'mfa-basics-quiz',
    title: {
      en: 'Multi-Factor Authentication & TOTP Quiz',
      bn: 'মাল্টি-ফ্যাক্টর অথেনটিকেশন ও TOTP কুইজ'
    },
    questions: [
      {
        id: 'mfa-bas-qz-1',
        kind: 'mcq',
        topic: 'dynamic-truncation-mechanism',
        question: {
          en: 'How does the Dynamic Truncation step in RFC 4226/6238 extract a 6-digit integer from a 20-byte HMAC-SHA1 digest?',
          bn: 'RFC ৪২২৬/৬২৩৮-এর ডায়নামিক ট্রাঙ্কেশন ধাপটি কীভাবে একটি ২০ বাইট HMAC-SHA1 ডাইজেস্ট থেকে ৬ সংখ্যার পূর্ণসংখ্যা বের করে?'
        },
        options: [
          {
            en: 'It reads the lower 4 bits of the 20th byte to determine an offset (0-15), extracts 4 contiguous bytes starting at that offset, masks the sign bit to 31 bits, and applies modulo 1,000,000',
            bn: 'এটি ২০তম বাইটের নিচের ৪ বিট পড়ে একটি অফসেট (০-১৫) বের করে, সেই অফসেট থেকে ৪ বাইট ডাটা নেয়, সাইন বিট মাস্ক করে ৩১-বিট মান পায় এবং শেষে ১০,০০,০০০ দিয়ে মডিউলো করে',
          },
          {
            en: 'It averages the values of all twenty bytes using a standard desktop calculator',
            bn: 'এটি সাধারণ ডেস্কটপ ক্যালকুলেটর দিয়ে ২০টি বাইটের গড় মান বের করে',
          },
          {
            en: 'It picks the first six characters of the alphabet from the string',
            bn: 'এটি স্ট্রিং থেকে বর্ণমালার প্রথম ছয়টি অক্ষর বেছে নেয়',
          },
          {
            en: 'It multiplies the digest by the physical screen resolution of the laptop',
            bn: 'এটি ডাইজেস্টকে ল্যাপটপের স্ক্রিন রেজোলিউশন দিয়ে গুণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Dynamic truncation uses the last byte to index 4 bytes, then applies modulo 10^6.',
          bn: 'ডায়নামিক ট্রাঙ্কেশন শেষ বাইট দিয়ে ৪ বাইট বাছাই করে এবং ১০^৬ দিয়ে মডিউলো করে।',
        },
        explanation: {
          en: 'The offset mechanism dynamically selects 4 bytes from the SHA-1 digest, creating an unpredictable 31-bit integer that formats into 6 digits.',
          bn: 'অফসেট কৌশলটি ২০ বাইট থেকে এলোমেলো ৪ বাইট বের করে ৩১-বিট পূর্ণসংখ্যা বানায় যা ৬ সংখ্যার ওটিপিতে পরিণত হয়।'
        },
      },
      {
        id: 'mfa-bas-qz-2',
        kind: 'mcq',
        topic: 'backup-codes-storage',
        question: {
          en: 'Why must emergency backup recovery codes be stored as cryptographic hashes in the database rather than plaintext?',
          bn: 'জরুরি ব্যাকআপ রিকভারি কোডগুলো ডাটাবেজে প্লেইনটেক্সট হিসেবে না রেখে কেন ক্রিপ্টোগ্রাফিক হ্যাশ হিসেবে সংরক্ষণ করতে হয়?'
        },
        options: [
          {
            en: 'Recovery codes bypass the second authentication factor entirely; if stored in plaintext, an attacker who obtains read access to the database could instantly breach all MFA-protected accounts',
            bn: 'রিকভারি কোড সরাসরি দ্বিতীয় ফ্যাক্টরকে বাইপাস করে; এগুলো প্লেইনটেক্সটে রাখলে ডাটাবেজ হ্যাক হওয়া মাত্র আক্রমণকারী সমস্ত MFA অ্যাকাউন্ট নিমেষেই দখল করতে পারবে',
          },
          {
            en: 'Because plaintext codes consume ten times more disk space in database tables',
            bn: 'কারণ প্লেইনটেক্সট কোড ডাটাবেজ টেবিলে দশ গুণ বেশি জায়গা নষ্ট করে',
          },
          {
            en: 'Because web browsers automatically reject plaintext numbers longer than four digits',
            bn: 'কারণ ওয়েব ব্রাউজার চার সংখ্যার চেয়ে বড় সাধারণ সংখ্যা স্বয়ংক্রিয়ভাবে প্রত্যাখ্যান করে',
          },
          {
            en: 'Because cryptographic hashing doubles the physical processing speed of server RAM',
            bn: 'কারণ ক্রিপ্টোগ্রাফিক হ্যাশিং সার্ভার র‍্যামের প্রসেসিং গতি দ্বিগুণ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Recovery codes are as powerful as passwords; they must be hashed to protect against database leaks.',
          bn: 'রিকভারি কোড পাসওয়ার্ডের মতোই শক্তিশালী; ডাটাবেজ ফাঁস থেকে বাঁচতে এদের হ্যাশ করে রাখতে হয়।',
        },
        explanation: {
          en: 'Like passwords, recovery codes are secrets. Hashing them (e.g. SHA-256 or bcrypt) ensures stolen databases cannot be used to bypass MFA.',
          bn: 'পাসওয়ার্ডের মতোই রিকভারি কোডও গোপনীয়। হ্যাশ করে রাখলে ডাটাবেজ চুরি হলেও MFA বাইপাস করা সম্ভব হয় না।'
        },
      },
      {
        id: 'mfa-bas-qz-3',
        kind: 'mcq',
        topic: 'totp-replay-attack-prevention',
        question: {
          en: 'How can an attacker perform a TOTP replay attack within a 30-second window, and how does a defensive server prevent it?',
          bn: 'একটি ৩০ সেকেন্ডের উইন্ডোর মধ্যে আক্রমণকারী কীভাবে TOTP রিপ্লে আক্রমণ করতে পারে এবং ডিফেন্সিভ সার্ভার কীভাবে তা প্রতিহত করে?'
        },
        options: [
          {
            en: 'If an attacker intercepts a valid code, they can reuse it before the 30-second window expires; servers prevent this by recording recently used codes in Redis and rejecting any reused OTP within the same window',
            bn: 'আক্রমণকারী কোনো কোড চুরি করলে ৩০ সেকেন্ড শেষ হওয়ার আগেই তা পুনরায় ব্যবহার করতে পারে; সার্ভার রেডিসে ব্যবহৃত কোড সংরক্ষণ করে এবং একই উইন্ডোতে পুনরায় কোড পাঠানো হলে তা বাতিল করে',
          },
          {
            en: 'By turning off the electricity to the entire city power grid',
            bn: 'পুরো শহরের মূল বৈদ্যুতিক গ্রিডের বিদ্যুৎ সংযোগ বন্ধ করে দেওয়ার মাধ্যমে',
          },
          {
            en: 'By unplugging the internet cables connected to the user mobile phone',
            bn: 'ব্যবহারকারীর মোবাইলে লাগানো ইন্টারনেট তার খুলে ফেলার মাধ্যমে',
          },
          {
            en: 'By changing the computer operating system language to Spanish',
            bn: 'কম্পিউটার অপারেটিং সিস্টেমের ভাষাকে স্প্যানিশ ভাষায় পরিবর্তন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Recording consumed OTPs in memory prevents replay within the active window.',
          bn: 'ব্যবহৃত ওটিপি মেমোরিতে লিখে রাখলে সক্রিয় উইন্ডোর ভেতর পুনরায় ব্যবহার ঠেকানো যায়।',
        },
        explanation: {
          en: 'TOTP codes remain mathematically valid for 30 seconds. Servers must mark codes as consumed upon first successful verification.',
          bn: 'TOTP কোড ৩০ সেকেন্ড কার্যকর থাকে। একবার সঠিক কোড ব্যবহারের সাথে সাথে সার্ভারকে এটিকে ব্যবহৃত হিসেবে চিহ্নিত করতে হয়।'
        },
      },
      {
        id: 'mfa-bas-qz-4',
        kind: 'mcq',
        topic: 'hotp-vs-totp-architecture',
        question: {
          en: 'What is the primary architectural difference between HOTP (RFC 4226) and TOTP (RFC 6238)?',
          bn: 'HOTP (RFC ৪২২৬) এবং TOTP (RFC ৬২৩৮) এর মধ্যে প্রধান আর্কিটেকচারাল পার্থক্য কী?'
        },
        options: [
          {
            en: 'HOTP increments an event counter on every button press (which can fall out of synchronization if pressed repeatedly), whereas TOTP uses the current Unix time step, guaranteeing automatic synchronization without manual counter resets',
            bn: 'HOTP প্রতিটি বাটন চাপে একটি ইভেন্ট কাউন্টার বাড়ায় ( যা বারবার চাপলে সার্ভারের সাথে অমিল হতে পারে ), আর TOTP বর্তমান ইউনিক্স টাইম ব্যবহার করে ফলে কোনো ম্যানুয়াল রিসেট ছাড়াই স্বয়ংক্রিয় মিল নিশ্চিত থাকে',
          },
          {
            en: 'HOTP only works on desktop computers, while TOTP only works on wristwatches',
            bn: 'HOTP কেবল ডেস্কটপ কম্পিউটারে কাজ করে আর TOTP কেবল হাতঘড়িতে কাজ করে',
          },
          {
            en: 'HOTP generates letters, while TOTP generates geometric shapes',
            bn: 'HOTP কেবল বর্ণ তৈরি করে আর TOTP কেবল জ্যামিতিক নকশা তৈরি করে',
          },
          {
            en: 'There is no difference; HOTP and TOTP are two names for the same algorithm',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; এগুলো কেবল একই অ্যালগরিদমের দুটি ভিন্ন নাম',
          },
        ],
        answer: 0,
        hint: {
          en: 'HOTP is counter-based; TOTP replaces the counter with the current time step.',
          bn: 'HOTP কাউন্টার-ভিত্তিক; আর TOTP কাউন্টারের বদলে বর্তমান সময় ব্যবহার করে।',
        },
        explanation: {
          en: 'TOTP is essentially HOTP where the counter variable is replaced by floor(current_time / 30). This eliminates counter desynchronization.',
          bn: 'TOTP মূলত HOTP এর উন্নত রূপ যেখানে কাউন্টারের জায়গায় বর্তমান সময়কে ৩০ দিয়ে ভাগ করে ব্যবহার করা হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'oauth-flows',
    title: {
      en: 'OAuth 2.0 & OpenID Connect: PKCE Flows & Identity Federation',
      bn: 'OAuth ২.০ এবং ওপেনআইডি কানেক্ট: PKCE ফ্লো এবং আইডেন্টিটি ফেডারেশন'
    },
  },
};
