import type { Lesson } from '../../../lib/types';

export const CryptoPitfallsLesson: Lesson = {
  slug: 'crypto-pitfalls',
  tech: 'secure-coding',
  title: {
    en: 'Cryptographic Pitfalls: Salted Hashes, IVs & Constant-Time Verification',
    bn: 'ক্রিপ্টোগ্রাফিক ফাঁদ: সল্টেড হ্যাশ, IV এবং কনস্ট্যান্ট-টাইম যাচাই'
  },
  summary: {
    en: 'Avoid catastrophic cryptographic implementation mistakes in modern applications. Understand why fast algorithms like MD5 and SHA-1 fail password storage against GPU rainbow tables. Master memory-hard password hashing with Argon2id and bcrypt, unique initialization vectors for AES-256-GCM authenticated encryption, cryptographically secure random number generators, and timing attack mitigation using timingSafeEqual.',
    bn: 'আধুনিক সফটওয়্যারে ক্রিপ্টোগ্রাফি ব্যবহারের মারাত্মক ভুলগুলো এড়িয়ে চলুন। পাসওয়ার্ড সংরক্ষণে MD5 এবং SHA-1 এর মতো দ্রুত গতির অ্যালগরিদমগুলো GPU রেইনবো টেবিল আক্রমণের মুখে কেন অচল তা বুঝুন। Argon2id ও bcrypt এর মতো মেমোরি-হার্ড পাসওয়ার্ড হ্যাশিং, AES-২৫৬-GCM এর জন্য ইউনিক ইনিশিয়ালাইজেশন ভেক্টর (IV), ক্রিপ্টোগ্রাফিক র্যান্ডম জেনারেটর (CSPRNG) এবং timingSafeEqual দিয়ে টাইমিং অ্যাটাক প্রতিরোধের পদ্ধতি আয়ত্ত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'cryptographic-implementation-hazards',
      text: {
        en: 'The Golden Rule: Never Roll Your Own Cryptography',
        bn: 'সোনালী নিয়ম: কখনোই নিজস্ব ক্রিপ্টোগ্রাফি বানাবেন না'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you implement cryptography in software, subtle mistakes can introduce catastrophic security vulnerabilities. A system can appear to function smoothly while having implementation flaws that completely destroy protection.',
        bn: 'যখন আপনি সফটওয়্যারে ক্রিপ্টোগ্রাফি প্রয়োগ করেন, তখন আপাতদৃষ্টিতে সামান্য মনে হওয়া ছোট ভুলও ভয়াবহ নিরাপত্তা ঝুঁকি তৈরি করতে পারে। সিস্টেমটি কোনো এরর ছাড়াই চলতে পারে, অথচ ছোট একটি বাস্তবায়ন ত্রুটির কারণে এর সম্পূর্ণ সুরক্ষা ব্যবস্থা ভেঙে পড়তে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The fundamental maxim of defensive engineering is: never invent custom cryptographic algorithms or custom padding logic. Always rely on standard, peer-reviewed primitives and well-tested system cryptographic modules. Even when using approved algorithms, small pitfalls like reusing initialization vectors or comparing secrets using standard equality operators can surrender full control to attackers.',
        bn: 'ডিফেন্সিভ ইঞ্জিনিয়ারিংয়ের মূল নীতি হলো: কখনোই নিজস্ব ক্রিপ্টোগ্রাফিক অ্যালগরিদম বা প্যাডিং কোড লিখবেন না। সর্বদা বিশ্বস্ত ও প্রমিত ক্রিপ্টোগ্রাফিক মডিউল ব্যবহার করুন। এমনকি মানসম্মত অ্যালগরিদম ব্যবহার করলেও ইনিশিয়ালাইজেশন ভেক্টর বারবার ব্যবহার করা বা সাধারণ সমতা চিহ্ন দিয়ে পাসওয়ার্ড মেলানোর মতো ছোটখাটো ভুল সম্পূর্ণ সিস্টেমের নিয়ন্ত্রণ আক্রমণকারীর হাতে তুলে দিতে পারে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Fast Hashes versus Memory-Hard Password Algorithms',
            bn: '১. দ্রুত হ্যাশ বনাম মেমোরি-হার্ড পাসওয়ার্ড অ্যালগরিদম'
          },
          text: {
            en: 'Standard hashing functions like MD5 and SHA-256 were designed for fast integrity verification, not password security. Modern GPUs compute billions of hashes per second. For passwords, always use slow, memory-hard algorithms like Argon2id or bcrypt paired with unique cryptographic salts.',
            bn: 'MD5 বা SHA-২৫৬ এর মতো অ্যালগরিদমগুলো ফাইলের সত্যতা দ্রুত যাচাইয়ের জন্য তৈরি, পাসওয়ার্ড নিরাপত্তার জন্য নয়। আধুনিক GPU প্রতি সেকেন্ডে শত কোটি হ্যাশ হিসাব করতে পারে। পাসওয়ার্ডের ক্ষেত্রে সর্বদা অনন্য সল্টসহ Argon2id বা bcrypt-এর মতো ধীরগতির মেমোরি-হার্ড অ্যালগরিদম ব্যবহার করুন।'
          },
        },
        {
          title: {
            en: '2. Initialization Vector (IV) Freshness in AES-GCM',
            bn: '২. AES-GCM এ ইনিশিয়ালাইজেশন ভেক্টরের (IV) স্বাতন্ত্র্য'
          },
          text: {
            en: 'In AES-256-GCM authenticated encryption, never reuse the same initialization vector with the same cryptographic key. Reusing an IV reveals the XOR difference between plaintexts and allows forgery. Generate a fresh 12-byte random IV for every single encryption call.',
            bn: 'AES-২৫৬-GCM এনক্রিপশনে একই কী-এর সাথে কখনোই একই ইনিশিয়ালাইজেশন ভেক্টর পুনরায় ব্যবহার করবেন না। IV পুনরায় ব্যবহার করলে মূল বার্তার গোপনীয়তা ফাঁস হয়ে যায়। প্রতিবার এনক্রিপ্ট করার সময় ক্রিপ্টোগ্রাফিক র্যান্ডম দিয়ে নতুন ১২ বাইট IV তৈরি করুন।'
          },
        },
        {
          title: {
            en: '3. Cryptographically Secure Pseudo-Random Numbers (CSPRNG)',
            bn: '৩. ক্রিপ্টোগ্রাফিক র্যান্ডম জেনারেটর ব্যবহার'
          },
          text: {
            en: 'Standard pseudo-random generators like Math.random() produce mathematically predictable sequences. Never use Math.random() for security tokens or session IDs. Always use entropy-backed random generators like crypto.randomBytes().',
            bn: 'Math.random()-এর মতো সাধারণ র্যান্ডম ফাংশনগুলো অনুমেয় মান তৈরি করে। সেশন আইডি বা নিরাপত্তা টোকেন তৈরিতে কখনোই Math.random() ব্যবহার করবেন না। সর্বদা ক্রিপ্টোগ্রাফিক crypto.randomBytes() ব্যবহার করুন।'
          },
        },
        {
          title: {
            en: '4. Constant-Time Verification to Defeat Timing Attacks',
            bn: '৪. টাইমিং আক্রমণ প্রতিরোধে কনস্ট্যান্ট-টাইম যাচাই'
          },
          text: {
            en: 'Standard string equality returns false on the very first mismatched character, creating measurable timing differences. To compare secret tokens and cryptographic signatures safely, always use constant-time functions like crypto.timingSafeEqual().',
            bn: 'সাধারণ স্ট্রিং মেলানোর অপারেটর প্রথম অমিল অক্ষরের সাথে সাথেই মিথ্যা রিটার্ন করে, যা পরিমাপযোগ্য সময়ের পার্থক্য তৈরি করে। টোকেন এবং ডিজিটাল স্বাক্ষর যাচাই করতে সর্বদা কনস্ট্যান্ট-টাইম crypto.timingSafeEqual() ব্যবহার করুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Cryptographic Implementation Matrix: Common Pitfalls versus Hardened Defenses',
        bn: 'ক্রিপ্টোগ্রাফিক ম্যাট্রিক্স: সাধারণ ফাঁদ বনাম আধুনিক প্রতিরক্ষামূলক সমাধান'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Cryptographic implementation matrix comparing broken patterns against secure primitives">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CRYPTOGRAPHIC HARDENING: TRAPS VS PRODUCTION DEFENSES</text>
  
  <!-- Row 1: Password Storage -->
  <g transform="translate(30, 48)">
    <rect width="780" height="75" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text x="20" y="24" fill="#38bdf8" font-size="11" font-weight="bold">1. USER PASSWORD STORAGE</text>
    
    <rect x="20" y="34" width="360" height="32" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="30" y="54" fill="#fca5a5" font-size="9">TRAP: MD5 / SHA-256 (GPU cracked 10B/sec)</text>
    
    <rect x="400" y="34" width="360" height="32" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="410" y="54" fill="#6ee7b7" font-size="9">DEFENSE: Argon2id / bcrypt + Unique Salt</text>
  </g>
  
  <!-- Row 2: Symmetric Encryption -->
  <g transform="translate(30, 133)">
    <rect width="780" height="75" rx="6" fill="#1e293b" stroke="#f59e0b"/>
    <text x="20" y="24" fill="#f59e0b" font-size="11" font-weight="bold">2. SYMMETRIC DATA ENCRYPTION</text>
    
    <rect x="20" y="34" width="360" height="32" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="30" y="54" fill="#fca5a5" font-size="9">TRAP: AES-ECB / Reused Fixed IV (Leaks XOR)</text>
    
    <rect x="400" y="34" width="360" height="32" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="410" y="54" fill="#6ee7b7" font-size="9">DEFENSE: AES-256-GCM + Fresh 12-byte IV + Tag</text>
  </g>
  
  <!-- Row 3: Randomness Generation -->
  <g transform="translate(30, 218)">
    <rect width="780" height="75" rx="6" fill="#1e293b" stroke="#10b981"/>
    <text x="20" y="24" fill="#10b981" font-size="11" font-weight="bold">3. TOKEN &amp; SECRET GENERATION</text>
    
    <rect x="20" y="34" width="360" height="32" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="30" y="54" fill="#fca5a5" font-size="9">TRAP: Math.random() (Predictable PRNG)</text>
    
    <rect x="400" y="34" width="360" height="32" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="410" y="54" fill="#6ee7b7" font-size="9">DEFENSE: crypto.randomBytes() (CSPRNG Entropy)</text>
  </g>
  
  <!-- Row 4: Signature / Token Verification -->
  <g transform="translate(30, 303)">
    <rect width="780" height="75" rx="6" fill="#1e293b" stroke="#818cf8"/>
    <text x="20" y="24" fill="#818cf8" font-size="11" font-weight="bold">4. SIGNATURE &amp; HASH VERIFICATION</text>
    
    <rect x="20" y="34" width="360" height="32" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="30" y="54" fill="#fca5a5" font-size="9">TRAP: strA === strB (Early return timing leak)</text>
    
    <rect x="400" y="34" width="360" height="32" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="410" y="54" fill="#6ee7b7" font-size="9">DEFENSE: crypto.timingSafeEqual (Constant Time)</text>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Applying tested cryptographic primitives prevents GPU cracking, IV collision leakage, and timing side-channels</text>
</svg>`,
      caption: {
        en: 'The 4 major cryptographic pitfalls contrasted against production-grade defenses: memory-hard hashes, fresh IVs, CSPRNGs, and constant-time equality.',
        bn: '৪ টি প্রধান ক্রিপ্টোগ্রাফিক ফাঁদ বনাম আধুনিক সমাধান: মেমোরি-হার্ড হ্যাশ, নতুন IV, CSPRNG এবং কনস্ট্যান্ট-টাইম যাচাই।'
      },
    },
    {
      type: 'heading',
      id: 'secure-crypto-engine-code',
      text: {
        en: 'Building an Authenticated Encryption & Verification Engine in Node.js',
        bn: 'Node.js-এ অথেনটিকেটেড এনক্রিপশন ও ভেরিফিকেশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how secure cryptography operates in practice using native Node.js primitives, inspect the following implementation. It demonstrates authenticated encryption with AES-256-GCM, cryptographic random generation, and constant-time signature comparison.',
        bn: 'নেটিভ Node.js মডিউল ব্যবহার করে আধুনিক ক্রিপ্টোগ্রাফি কীভাবে কার্যকর হয় তা দেখতে নিচের কোডটি লক্ষ্য করুন। এটি AES-২৫৬-GCM দিয়ে অথেনটিকেটেড এনক্রিপশন, ক্রিপ্টোগ্রাফিক র্যান্ডম জেনারেশন এবং কনস্ট্যান্ট-টাইম সিগনেচার যাচাই প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'hardened-crypto-engine.js',
      code: `// Production Cryptographic Engine Using Native Node.js crypto
const crypto = require('crypto');

class HardenedCryptoEngine {
  // 1. Generate unpredictable cryptographically secure tokens (CSPRNG)
  static generateSecureToken(byteLength = 32) {
    return crypto.randomBytes(byteLength).toString('hex');
  }

  // 2. Authenticated Encryption with Associated Data (AEAD) using AES-256-GCM
  static encrypt(plaintext, secretKey32Bytes) {
    // Generate a fresh, unique 12-byte Initialization Vector (IV) for every call
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', secretKey32Bytes, iv);

    let ciphertext = cipher.update(plaintext, 'utf8', 'hex');
    ciphertext += cipher.final('hex');

    // 16-byte cryptographic authentication tag guarantees data integrity
    const authTag = cipher.getAuthTag();

    return {
      ciphertext: ciphertext,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  // 3. Authenticated Decryption verifying both confidentiality and integrity
  static decrypt(ciphertextHex, secretKey32Bytes, ivHex, authTagHex) {
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-gcm', secretKey32Bytes, iv);
    decipher.setAuthTag(authTag); // Fails immediately if ciphertext or IV was altered!

    let decrypted = decipher.update(ciphertextHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  // 4. Constant-Time verification defeating timing attack side channels
  static constantTimeCompare(secretA, secretB) {
    const bufA = Buffer.from(String(secretA));
    const bufB = Buffer.from(String(secretB));

    if (bufA.length !== bufB.length) {
      return false;
    }
    return crypto.timingSafeEqual(bufA, bufB);
  }
}

console.log('=== Step 1: Generating CSPRNG Security Token ===');
const apiToken = HardenedCryptoEngine.generateSecureToken(32);
console.log('Cryptographic Token (64 hex chars):', apiToken);

console.log('\\n=== Step 2: Encrypting Data with AES-256-GCM ===');
const masterKey = crypto.randomBytes(32); // 256-bit symmetric key
const sensitiveMedicalData = 'Patient: Jane Doe, Diagnosis: Healthy, SSN: 000-11-2222';

const encryptedPackage = HardenedCryptoEngine.encrypt(sensitiveMedicalData, masterKey);
console.log('Encrypted Payload:', encryptedPackage);

console.log('\\n=== Step 3: Decrypting & Authenticating Data ===');
const recoveredData = HardenedCryptoEngine.decrypt(
  encryptedPackage.ciphertext,
  masterKey,
  encryptedPackage.iv,
  encryptedPackage.authTag
);
console.log('Decrypted Text:', recoveredData);

console.log('\\n=== Step 4: Constant-Time Comparison ===');
const isValid = HardenedCryptoEngine.constantTimeCompare('secret_sig_99', 'secret_sig_99');
console.log('Signature Matches:', isValid);`,
      caption: {
        en: 'The crypto engine uses AES-256-GCM with fresh 12-byte IVs and timingSafeEqual for constant-time comparisons.',
        bn: 'ক্রিপ্টো ইঞ্জিনটি প্রতিবার নতুন ১২ বাইট IV সহ AES-২৫৬-GCM এবং টাইমিং আক্রমণ প্রতিরোধে timingSafeEqual ব্যবহার করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why Authenticated Encryption (AEAD) is Mandatory',
        bn: 'কেন অথেনটিকেটেড এনক্রিপশন (AEAD) বাধ্যতামূলক'
      },
      text: {
        en: 'Older symmetric encryption modes like AES-CBC only guarantee confidentiality, not integrity. Attackers can alter bits of the ciphertext in transit (such as in padding oracle attacks) to trick the server into decrypting malicious payloads. In contrast, AES-GCM generates a 16-byte authentication tag alongside the ciphertext. If even a single bit of the ciphertext or IV is modified by an attacker, decryption fails instantly, protecting both confidentiality and integrity!',
        bn: 'পুরানো AES-CBC এর মতো এনক্রিপশন মোডগুলো কেবল তথ্যের গোপনীয়তা নিশ্চিত করত, অবিকৃত অবস্থা নয়। আক্রমণকারীরা ট্রাফিকের মাঝপথে সাইফারটেক্সটের কিছু অংশ পরিবর্তন করে সার্ভারকে ভুল ডাটা ডিক্রিপ্ট করতে প্ররোচিত করত। বিপরীতে, AES-GCM সাইফারটেক্সটের পাশাপাশি একটি ১৬ বাইটের অথেনটিকেশন ট্যাগ তৈরি করে। কেউ যদি সাইফারটেক্সট বা IV-এর একটি মাত্র বিটও বদলে দেয়, তবে সাথে সাথে ডিক্রিপশন ব্যর্থ হয় এবং আক্রমণ ধরা পড়ে যায়!'
      },
    },
  ],
  exercises: [
    {
      id: 'cryp-pit-ex-1',
      kind: 'predict',
      topic: 'aes-gcm-iv-length',
      question: {
        en: 'How many bytes is the standard secure initialization vector (IV) for AES-256-GCM authenticated encryption? (12). Type the number.',
        bn: 'AES-২৫৬-GCM অথেনটিকেটেড এনক্রিপশনে আদর্শ ও নিরাপদ ইনিশিয়ালাইজেশন ভেক্টরের (IV) সাইজ কত বাইট? ( ১২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '12',
      hint: {
        en: 'The standard GCM IV is 12 bytes (96 bits).',
        bn: 'স্ট্যান্ডার্ড GCM IV হলো ১২ বাইট ( ৯৬ বিট )। '
      },
      explanation: {
        en: 'A 12-byte (96-bit) IV is the NIST-recommended size for AES-GCM, maximizing performance and avoiding internal counter collisions.',
        bn: '১২ বাইটের ( ৯৬ বিট ) IV হলো AES-GCM এর জন্য আদর্শ সাইজ, যা সর্বোচ্চ গতি এবং অভ্যন্তরীণ কাউন্টার নিরাপত্তা নিশ্চিত করে।'
      },
    },
    {
      id: 'cryp-pit-ex-2',
      kind: 'mcq',
      topic: 'prng-vs-csprng',
      question: {
        en: 'Why must Math.random() never be used to generate session tokens, password reset links, or cryptographic keys?',
        bn: 'সেশন টোকেন, পাসওয়ার্ড রিসেট লিংক বা ক্রিপ্টোগ্রাফিক চাবি তৈরিতে Math.random() কেন কখনোই ব্যবহার করা যাবে না?'
      },
      options: [
        {
          en: 'Math.random() is a pseudo-random algorithm with an internal mathematical state that is predictable; once an attacker observes a few outputs, they can accurately predict all future generated tokens',
          bn: 'Math.random() একটি সাধারণ অ্যালগরিদম যার অভ্যন্তরীণ রূপ গাণিতিকভাবে অনুমেয়; আক্রমণকারী কয়েকটি মান লক্ষ্য করলেই পরবর্তী সমস্ত টোকেনের মান হুবহু বলে দিতে পারে',
        },
        {
          en: 'Because Math.random() disconnects the computer from the local Wi-Fi router',
          bn: 'কারণ Math.random() কম্পিউটারকে লোকাল ওয়াই-ফাই রাউটার থেকে বিচ্ছিন্ন করে দেয়',
        },
        {
          en: 'Because Math.random() only generates negative decimal numbers',
          bn: 'কারণ Math.random() কেবল ঋণাত্মক দশমিক সংখ্যা তৈরি করতে পারে',
        },
        {
          en: 'Because Math.random() causes physical damage to the computer power supply',
          bn: 'কারণ Math.random() কম্পিউটারের পাওয়ার সাপ্লাইয়ের শারীরিক ক্ষতি করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Math.random() is not cryptographically secure and can be predicted.',
        bn: 'Math.random() ক্রিপ্টোগ্রাফিকভাবে সুরক্ষিত নয় এবং এর মান অনুমান করা যায়।',
      },
      explanation: {
        en: 'Only CSPRNGs like crypto.randomBytes use entropy pools to generate truly unpredictable cryptographic random numbers.',
        bn: 'কেবল crypto.randomBytes-এর মতো ক্রিপ্টোগ্রাফিক জেনারেটরই সত্যিকার অর্থে অনুমানের অতীত র্যান্ডম মান দিতে পারে।'
      },
    },
    {
      id: 'cryp-pit-ex-3',
      kind: 'mcq',
      topic: 'constant-time-comparison',
      question: {
        en: 'How does crypto.timingSafeEqual protect applications during sensitive token comparisons?',
        bn: 'সংবেদনশীল টোকেন মেলানোর সময় crypto.timingSafeEqual কীভাবে অ্যাপ্লিকেশনকে সুরক্ষিত রাখে?'
      },
      options: [
        {
          en: 'It compares all bytes of both buffers in constant time regardless of where differences occur, preventing attackers from measuring millisecond latency differences to guess secret bytes one by one',
          bn: 'এটি অমিল যেখানেই থাকুক না কেন উভয় বাফারের প্রতিটি বাইট সম্পূর্ণ সমান সময়ে তুলনা করে, ফলে সময়ের সামান্য পার্থক্য মেপে হ্যাকারদের পক্ষে সিক্রেট অনুমান করা অসম্ভব হয়',
        },
        {
          en: 'It deletes all user passwords from the server memory immediately',
          bn: 'এটি সার্ভার মেমোরি থেকে সাথে সাথে ব্যবহারকারীর সমস্ত পাসওয়ার্ড মুছে দেয়',
        },
        {
          en: 'It doubles the physical frequency of the computer motherboard clock',
          bn: 'এটি কম্পিউটারের মাদারবোর্ড ক্লকের গতি দ্বিগুণ করে দেয়',
        },
        {
          en: 'It turns the website background color into pure white',
          bn: 'এটি ওয়েবসাইটের ব্যাকগ্রাউন্ড রঙ সম্পূর্ণ সাদায় রূপান্তরিত করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Constant-time comparison executes in identical duration regardless of byte equality.',
        bn: 'কনস্ট্যান্ট-টাইম তুলনা অক্ষর মিলুক বা না মিলুক সর্বদা সমান সময় নেয়।',
      },
      explanation: {
        en: 'Standard string comparisons return early on the first mismatched byte. TimingSafeEqual prevents side-channel information leakage.',
        bn: 'সাধারণ তুলনা প্রথম ভুলেই থেমে যায় যা টাইমিং ফাঁসের সুযোগ দেয়। TimingSafeEqual পুরোটা পরীক্ষা করে এই ঝুঁকি দূর করে।'
      },
    },
    {
      id: 'cryp-pit-ex-4',
      kind: 'predict',
      topic: 'cryptographic-pitfalls-count',
      question: {
        en: 'How many primary cryptographic traps (Fast Hashes, IV Reuse, Insecure Randomness, Timing Comparisons) were explored? (4). Type the number.',
        bn: 'এই পাঠে আলোচিত প্রধান ক্রিপ্টোগ্রাফিক ফাঁদ ( দ্রুত হ্যাশ, IV পুনরাবৃত্তি, অনিরাপদ র্যান্ডম, টাইমিং তুলনা ) সর্বমোট কয়টি? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Count the 4 cryptographic pitfalls.',
        bn: '৪ টি ক্রিপ্টোগ্রাফিক ফাঁদ গণনা করুন।'
      },
      explanation: {
        en: 'The 4 pitfalls highlight why developers must use established cryptographic primitives rather than naive implementations.',
        bn: 'এই ৪ টি ফাঁদ নির্দেশ করে কেন ডেভেলপারদের সাধারণ কোড না লিখে সুপ্রতিষ্ঠিত ক্রিপ্টোগ্রাফিক মডিউল ব্যবহার করা উচিত।'
      },
    },
  ],
  quiz: {
    id: 'crypto-pitfalls-quiz',
    title: {
      en: 'Cryptographic Security and Pitfalls Quiz',
      bn: 'ক্রিপ্টোগ্রাফিক নিরাপত্তা ও ফাঁদ কুইজ'
    },
    questions: [
      {
        id: 'cryp-pit-qz-1',
        kind: 'mcq',
        topic: 'why-fast-hashes-fail-passwords',
        question: {
          en: 'Why are fast hashing algorithms like MD5 and SHA-256 dangerous for storing user passwords, even when unique salts are applied?',
          bn: 'ইউনিক সল্ট ব্যবহার করা সত্ত্বেও ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণে MD5 এবং SHA-২৫৬ এর মতো দ্রুত অ্যালগরিদম কেন অত্যন্ত বিপজ্জনক?'
        },
        options: [
          {
            en: 'Modern GPU cracking rigs compute tens of billions of SHA-256 hashes per second; without memory-hardness and deliberate computational friction, attackers can crack salted passwords through brute force within hours',
            bn: 'আধুনিক GPU প্রতি সেকেন্ডে শত কোটি SHA-২৫৬ হ্যাশ গণনা করতে পারে; মেমোরি-হার্ড এবং ধীরগতির অ্যালগরিদম না হলে আক্রমণকারীরা কয়েক ঘণ্টার মধ্যেই ব্রুট-ফোর্স চালিয়ে পাসওয়ার্ড বের করে ফেলে',
          },
          {
            en: 'Because SHA-256 hashes make computer cooling fans spin in reverse',
            bn: 'কারণ SHA-২৫৬ হ্যাশ কম্পিউটারের কুলিং ফ্যানকে উল্টো দিকে ঘোরায়',
          },
          {
            en: 'Because salted hashes cannot be stored on modern solid-state hard drives',
            bn: 'কারণ সল্টেড হ্যাশ আধুনিক এসএসডি হার্ড ড্রাইভে সংরক্ষণ করা যায় না',
          },
          {
            en: 'Because MD5 was invented exclusively for desktop calculator machines',
            bn: 'কারণ MD5 কেবল ডেস্কটপ ক্যালকুলেটরের জন্য বিশেষভাবে তৈরি করা হয়েছিল',
          },
        ],
        answer: 0,
        hint: {
          en: 'Fast algorithms lack memory hardness, making GPU brute-force attacks trivial.',
          bn: 'দ্রুত গতির অ্যালগরিদমে মেমোরি বাধা থাকে না, ফলে GPU দিয়ে খুব সহজেই পাসওয়ার্ড ভাঙা যায়।',
        },
        explanation: {
          en: 'Password hashes must be slow and memory-intensive (like Argon2id or bcrypt) so GPUs cannot parallelize billions of guesses per second.',
          bn: 'পাসওয়ার্ড হ্যাশকে অবশ্যই ধীর ও মেমোরি-নির্ভর হতে হবে যাতে GPU দিয়ে দ্রুত কোটি কোটি অনুমান চালানো অসম্ভব হয়।'
        },
      },
      {
        id: 'cryp-pit-qz-2',
        kind: 'mcq',
        topic: 'iv-reuse-catastrophe',
        question: {
          en: 'What catastrophic vulnerability occurs when the same Initialization Vector (IV) is reused with the same key in AES-GCM encryption?',
          bn: 'AES-GCM এনক্রিপশনে একই চাবির সাথে যদি একই ইনিশিয়ালাইজেশন ভেক্টর (IV) বারবার ব্যবহার করা হয়, তবে কী ভয়াবহ বিপর্যয় ঘটে?'
        },
        options: [
          {
            en: 'Reusing an IV destroys the security of the Galois counter mode, exposing the XOR differences of the plaintexts and enabling attackers to forge valid authentication tags and decrypt traffic',
            bn: 'IV পুনরাবৃত্তি কাউন্টার মোডের নিরাপত্তা ধ্বংস করে মূল বার্তার গোপনীয়তা প্রকাশ করে ফেলে এবং আক্রমণকারীকে ভুয়া ট্যাগ বানিয়ে ট্রাফিকের ডাটা ডিক্রিপ্ট করার সুযোগ দেয়',
          },
          {
            en: 'The computer operating system immediately deletes all desktop wallpaper images',
            bn: 'কম্পিউটার অপারেটিং সিস্টেম সাথে সাথে সমস্ত ডেস্কটপ ওয়ালপেপার ছবি মুছে ফেলে',
          },
          {
            en: 'The encryption key physically dissolves inside the computer microchip',
            bn: 'কম্পিউটারের মাইক্রোচিপের ভেতরে ক্রিপ্টোগ্রাফিক চাবি শারীরিকভাবে গলে যায়',
          },
          {
            en: 'The internet browser turns all website fonts into Times New Roman',
            bn: 'ওয়েব ব্রাউজার ইন্টারনেটের সমস্ত ওয়েবসাইটের ফন্ট টাইমস নিউ রমানে বদলে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'IV reuse in GCM mode allows mathematical recovery of authentication keys and plaintext.',
          bn: 'GCM মোডে IV পুনরাবৃত্তি অথেনটিকেশন কি ও মূল বার্তা পুনরুদ্ধারের মারাত্মক পথ খুলে দেয়।',
        },
        explanation: {
          en: 'GCM security fundamentally depends on nonce uniqueness. Reusing an IV with the same key breaks the authentication guarantee entirely.',
          bn: 'GCM এর পুরো নিরাপত্তাই নির্ভর করে অনন্য IV-এর ওপর। একই IV আবার ব্যবহার করলে সব সুরক্ষা মুহূর্তে শেষ হয়ে যায়।'
        },
      },
      {
        id: 'cryp-pit-qz-3',
        kind: 'mcq',
        topic: 'gcm-auth-tag-function',
        question: {
          en: 'What critical security guarantee is provided by the 16-byte authentication tag in AES-256-GCM authenticated encryption?',
          bn: 'AES-২৫৬-GCM অথেনটিকেটেড এনক্রিপশনে ১৬ বাইটের অথেনটিকেশন ট্যাগ কোন অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা নিশ্চয়তা প্রদান করে?'
        },
        options: [
          {
            en: 'It guarantees message integrity and authenticity; if an adversary alters even a single bit of the ciphertext or initialization vector in transit, decryption immediately aborts',
            bn: 'এটি বার্তার অবিকৃত সত্যতা নিশ্চিত করে; আক্রমণকারী যদি ট্রানজিটের সময় সাইফারটেক্সট বা IV-এর একটি মাত্র বিটও পরিবর্তন করে, তবে ডিক্রিপশন সাথে সাথে বাতিল হয়ে যায়',
          },
          {
            en: 'It accelerates data transmission speeds over fiber optic internet cables',
            bn: 'এটি অপটিক্যাল ফাইবার কেবলে ডাটা আদান-প্রদানের গতি বহু গুণ বাড়িয়ে দেয়',
          },
          {
            en: 'It prints an invoice receipt for the computer user automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে কম্পিউটার ব্যবহারকারীর জন্য একটি বিলের রসিদ প্রিন্ট করে দেয়',
          },
          {
            en: 'It prevents the computer display screen from ever turning black',
            bn: 'এটি কম্পিউটার স্ক্রিনের ডিসপ্লে কখনো কালো হয়ে যাওয়া স্থায়ীভাবে প্রতিরোধ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The auth tag detects any tampering with ciphertext or metadata.',
          bn: 'অথেনটিকেশন ট্যাগ সাইফারটেক্সট বা মেটাডাটার যেকোনো পরিবর্তন মুহূর্তে শনাক্ত করে।',
        },
        explanation: {
          en: 'Without authenticated encryption, attackers can manipulate ciphertexts (bit-flipping attacks). The tag guarantees tamper detection.',
          bn: 'অথেনটিকেশন ট্যাগ ছাড়া সাইফারটেক্সট পরিবর্তন করে বিভ্রান্তি তৈরি করা যায়। এই ট্যাগ যেকোনো বিকৃতি প্রতিহত করে।'
        },
      },
      {
        id: 'cryp-pit-qz-4',
        kind: 'mcq',
        topic: 'purpose-of-cryptographic-salt',
        question: {
          en: 'What fundamental security role does a unique cryptographic salt play when hashing user passwords?',
          bn: 'ব্যবহারকারীর পাসওয়ার্ড হ্যাশ করার সময় একটি ইউনিক ক্রিপ্টোগ্রাফিক সল্ট কোন মৌলিক নিরাপত্তা ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It ensures that identical passwords produce distinct hash outputs, neutralizing precomputed rainbow table lookups and forcing attackers to attack each hash individually',
            bn: 'এটি নিশ্চিত করে যে দুটি একই পাসওয়ার্ডের হ্যাশ ফল সর্বদা সম্পূর্ণ ভিন্ন হবে, যার ফলে আক্রমণকারীরা পূর্বনির্মিত রেইনবো টেবিল ব্যবহার করতে পারে না এবং প্রতিটি হ্যাশ আলাদাভাবে আক্রমণ করতে বাধ্য হয়',
          },
          {
            en: 'It turns user passwords into short four-digit numbers',
            bn: 'এটি ব্যবহারকারীর পাসওয়ার্ডকে ছোট চার সংখ্যার পিন কোডে রূপান্তর করে',
          },
          {
            en: 'It deletes forgotten passwords from the database automatically',
            bn: 'এটি ডাটাবেজ থেকে ভুলে যাওয়া পাসওয়ার্ডগুলো নিজে থেকেই মুছে ফেলে',
          },
          {
            en: 'It makes password hashing run ten times faster on computer CPUs',
            bn: 'এটি কম্পিউটার প্রসেসরে পাসওয়ার্ড হ্যাশিংয়ের কাজ দশ গুণ দ্রুত সম্পন্ন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Salts defeat rainbow tables and ensure unique hashes for identical passwords.',
          bn: 'সল্ট রেইনবো টেবিল আক্রমণ প্রতিহত করে এবং একই পাসওয়ার্ডের জন্য ভিন্ন হ্যাশ দেয়।',
        },
        explanation: {
          en: 'Salts prevent attackers from cracking identical passwords across multiple accounts in one calculation, rendering precomputed dictionaries useless.',
          bn: 'সল্ট ব্যবহারের ফলে হ্যাকারদের তৈরি করা আগের অভিধান বা রেইনবো টেবিল সম্পূর্ণ অচল হয়ে যায়।'
        },
      },
    ],
  },
  next: {
    slug: 'secure-code-capstone',
    title: {
      en: 'Secure Coding Capstone: End-to-End Defensive Architecture',
      bn: 'সিকিউর কোডিং ক্যাপস্টোন: শুরু থেকে শেষ পূর্ণাঙ্গ প্রতিরক্ষামূলক আর্কিটেকচার'
    },
  },
};
