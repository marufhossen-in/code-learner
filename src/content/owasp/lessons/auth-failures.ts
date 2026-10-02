import type { Lesson } from '../../../lib/types';

export const AuthFailuresLesson: Lesson = {
  slug: 'auth-failures',
  tech: 'owasp',
  title: {
    en: 'Identification & Authentication Failures: Brute Force, Bcrypt & MFA',
    bn: 'প্রমাণীকরণ ত্রুটি: ব্রুট ফোর্স, bcrypt ও মাল্টি-ফ্যাক্টর অথেনটিকেশন'
  },
  summary: {
    en: 'Master defensive system architecture against Identification & Authentication Failures (OWASP A07:2021). Understand the mechanics of credential stuffing, password spraying, and session fixation attacks. Explore adaptive password hashing algorithms like bcrypt and Argon2id alongside multi-factor authentication (MFA) and phishing-resistant FIDO2 WebAuthn. Inspect an executable Node.js rate limiter evaluating 4 login streams against a 5-attempt threshold: 3 legitimate users authenticate safely, while 1 botnet flood of 50 attempts is throttled with HTTP 429.',
    bn: 'প্রমাণীকরণ ত্রুটি (OWASP A07:2021) প্রতিহত করার আধুনিক সিস্টেম আর্কিটেকচার আয়ত্ত করুন। ক্রেডেনশিয়াল স্টাফিং, পাসওয়ার্ড স্প্রেয়িং এবং সেশন ফিক্সেশন আক্রমণের কৌশলগুলো বুঝুন। bcrypt ও Argon2id এর মতো অ্যাডাপটিভ পাসওয়ার্ড হ্যাশিং এবং ফিশিং-প্রতিরোধী FIDO2 WebAuthn এর গুরুত্ব জানুন। সর্বোচ্চ ৫ টি প্রচেষ্টার সীমা সম্পন্ন একটি কার্যকর Node.js রেট লিমিটার পরীক্ষা করুন। এটি ৪ টি লগইন প্রবাহ মূল্যায়ন করে: ৩ জন বৈধ ব্যবহারকারী নিরাপদে লগইন করতে পারলেও ৫০ টি চেষ্টার ১ টি ক্ষতিকর বটনেট আক্রমণ প্রতিহত হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'authentication-threat-landscape',
      text: {
        en: 'The Authentication Battlefield: Credential Stuffing & Password Spraying',
        bn: 'প্রমাণীকরণ সুরক্ষার যুদ্ধক্ষেত্র: ক্রেডেনশিয়াল স্টাফিং ও পাসওয়ার্ড স্প্রেয়িং'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you expose a public login form on the internet, automated botnets attack it continuously. Attackers rarely guess passwords manually. Instead, they purchase billions of leaked username and password pairs from dark web breach dumps and launch automated credential stuffing attacks, relying on the fact that users reuse the same password across multiple online services.',
        bn: 'ইন্টারনেটে কোনো পাবলিক লগইন ফর্ম উন্মুক্ত রাখলে স্বয়ংক্রিয় বটনেটগুলো সেখানে অবিরাম আক্রমণ চালাতে থাকে। আক্রমণকারীরা সাধারণত নিজে নিজে পাসওয়ার্ড অনুমান করে না। বরং তারা ডার্ক ওয়েব থেকে বিভিন্ন সাইট হ্যাক হয়ে ফাঁস হওয়া কোটি কোটি ইউজারনেম ও পাসওয়ার্ডের তালিকা কেনে এবং স্বয়ংক্রিয় স্ক্রিপ্টের মাধ্যমে আপনার সাইটে চালিয়ে দেয়। যেহেতু অধিকাংশ মানুষ বিভিন্ন সাইটে একই পাসওয়ার্ড ব্যবহার করে, তাই সহজেই একাউন্ট হ্যাক হয়ে যায়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Another common technique is password spraying. In this attack, adversaries attempt a single commonly used password like "Company2026!" against thousands of different user accounts. This allows them to avoid triggering traditional account lockouts that activate when one user account experiences multiple wrong passwords. Defeating these automated threats requires adaptive rate limiting, slow hashing algorithms, and mandatory multi-factor authentication.',
        bn: 'আরেকটি সাধারণ আক্রমণ হলো পাসওয়ার্ড স্প্রেয়িং। এই আক্রমণে হ্যাকার একটিমাত্র বহুল ব্যবহৃত সাধারণ পাসওয়ার্ড (যেমন "Company2026!") হাজার হাজার ব্যবহারকারীর একাউন্টে একবার করে চেষ্টা করে। এর ফলে কোনো একক একাউন্টে বারবার ভুল পাসওয়ার্ডের লকআউট অ্যালার্ট চালু হয় না এবং হ্যাকার ধরা পড়ে না। এই ঝুঁকিগুলো প্রতিহত করার জন্য অ্যাডাপটিভ রেট লিমিটিং, স্লো পাসওয়ার্ড হ্যাশিং এবং মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA) ব্যবহার করা আবশ্যক।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Adaptive Password Hashing (Bcrypt & Argon2id)',
            bn: '১. অ্যাডাপটিভ পাসওয়ার্ড হ্যাশিং (Bcrypt ও Argon2id)'
          },
          text: {
            en: 'Never use general-purpose cryptographic hash functions like SHA-256 or MD5 for passwords. Use bcrypt or Argon2id with adaptive work factors (12+ rounds) that force CPU/RAM delay, rendering hardware cracking rigs useless.',
            bn: 'পাসওয়ার্ড সংরক্ষণে কখনো সাধারণ SHA-256 বা MD5 হ্যাশ ব্যবহার করবেন না। সর্বদা bcrypt বা Argon2id ব্যবহার করুন যা ইচ্ছাকৃতভাবে প্রসেসরে গণনা বিলম্ব তৈরি করে হ্যাকারদের গ্রাফিক্স কার্ডের মাধ্যমে পাসওয়ার্ড ক্র্যাক করা অসম্ভব করে তোলে।'
          },
        },
        {
          title: {
            en: '2. Rate Limiting & Account Throttling',
            bn: '২. রেট লিমিটিং ও লগইন নিয়ন্ত্রণ'
          },
          text: {
            en: 'Enforce strict rate limits on login endpoints (e.g. max 5 failed attempts per IP and per username). Beyond 5 failures, apply exponential backoff delays and require CAPTCHAs.',
            bn: 'লগইন গেটওয়েতে কঠোর রেট লিমিট প্রয়োগ করুন (যেমন আইপি এবং ইউজার প্রতি সর্বোচ্চ ৫ টি ব্যর্থ চেষ্টা)। ৫ বারের বেশি ভুল করলে বিলম্ব বাড়িয়ে দিন এবং ক্যাপচা বা সাময়িক লকআউট দিন।'
          },
        },
        {
          title: {
            en: '3. Phishing-Resistant MFA (WebAuthn / FIDO2)',
            bn: '৩. ফিশিং-প্রতিরোধী MFA (WebAuthn / FIDO2)'
          },
          text: {
            en: 'Upgrade beyond insecure SMS OTPs to Time-based One-Time Passwords (TOTP apps) or cryptographic hardware security keys (FIDO2 WebAuthn) that mathematically bind to the browser domain origin.',
            bn: 'ঝুঁকিপূর্ণ এসএমএস কোডের বদলে অথেনটিকেটর অ্যাপ (TOTP) বা হার্ডওয়্যার সিকিউরিটি কি (FIDO2) ব্যবহার করুন যা সরাসরি ওয়েবসাইটের ডোমেইনের সাথে ক্রিপ্টোগ্রাফিকভাবে যুক্ত থাকে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Login Rate Limiting Audit: 3 Legitimate Logins vs 1 Credential Stuffing Flood',
        bn: 'লগইন রেট লিমিটিং নিরীক্ষা: ৩ টি বৈধ লগইন বনাম ১ টি বটনেট আক্রমণ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Login rate limiting architecture evaluating 4 streams against a 5-attempt threshold">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">AUTHENTICATION RATE LIMITING & CREDENTIAL STUFFING DEFENSE (MAX: 5 TRIES)</text>
  
  <!-- Left Side: Inbound Login Streams -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 INBOUND LOGIN FLOWS EVALUATED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 1: User "mina" (2 attempts)</text>
      <text x="12" y="36" fill="#ffffff" font-size="8">Mistyped password once; succeeded on second try</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">2 attempts &lt;= 5 threshold: Natural human login behavior</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 2: User "rafi" (1 attempt)</text>
      <text x="12" y="104" fill="#ffffff" font-size="8">Entered correct credentials on initial attempt</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">1 attempt &lt;= 5 threshold: Immediate authentication</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Stream 3: User "sara" (4 attempts)</text>
      <text x="12" y="172" fill="#ffffff" font-size="8">Forgot password; verified on fourth attempt</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">4 attempts &lt;= 5 threshold: Approaching warning limit</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Stream 4: Botnet "attacker" (50 attempts) [STUFFING]</text>
      <text x="12" y="240" fill="#ffffff" font-size="8">High-speed credential stuffing script with breached wordlist</text>
      <text x="12" y="254" fill="#fecaca" font-size="7.5">Demands 50 tries: Exceeds 5 threshold by 45 attempts!</text>
    </g>
  </g>
  
  <!-- Right Side: Rate Limiter Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DECISIONS: 3 PERMITTED | 1 LOCKED OUT</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PERMITTED [✓] (HTTP 200 OK)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Login verified: Session cookie issued to Mina</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Failed attempt counter reset to 0</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">2. PERMITTED [✓] (HTTP 200 OK)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Login verified: Session cookie issued to Rafi</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Failed attempt counter reset to 0</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">3. PERMITTED [✓] (HTTP 200 OK)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Login verified: Session cookie issued to Sara</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Failed attempt counter reset to 0</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">4. THROTTLED & LOCKED [✗ HTTP 429]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Limit breached: 45 excess probes dropped immediately</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">Account locked; IP blocked; security alert dispatched</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Enforcing a strict 5-attempt threshold neutralizes automated credential stuffing while accommodating normal users</text>
</svg>`,
      caption: {
        en: 'The authentication rate limiter evaluates 4 login flows: 3 human users authenticate safely within the 5-attempt limit, while 1 credential stuffing botnet flood is throttled.',
        bn: 'অথেনটিকেশন রেট লিমিটার ৪ টি লগইন প্রবাহ মূল্যায়ন করে: ৩ জন স্বাভাবিক ব্যবহারকারী ৫ টি চেষ্টার মধ্যে সফলভাবে লগইন করেন, আর ১ টি ক্ষতিকর বটনেট আক্রমণ প্রতিহত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'authentication-throttler-code',
      text: {
        en: 'Building a Brute-Force Rate Limiter & Lockout Engine in Node.js',
        bn: 'Node.js-এ ব্রুট-ফোর্স রেট লিমিটার ও লকআউট ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'auth-rate-limiter.js',
      code: `// Deterministic Authentication Rate Limiter & Credential Stuffing Defense
class LoginRateLimiter {
  constructor(maxAllowedAttempts) {
    this.maxAttempts = maxAllowedAttempts; // Maximum allowed login attempts before throttling
  }

  // Evaluate inbound login stream against threshold
  evaluateLogin(stream) {
    if (stream.attempts <= this.maxAttempts) {
      return {
        username: stream.username,
        attemptsCount: stream.attempts,
        verdict: 'PERMITTED',
        httpStatus: 200,
        action: 'AUTHENTICATED',
        droppedAttempts: 0,
        explanation: \`Attempts count \${stream.attempts} is within the \${this.maxAttempts}-attempt safety threshold\`
      };
    } else {
      const dropped = stream.attempts - this.maxAttempts;
      return {
        username: stream.username,
        attemptsCount: stream.attempts,
        verdict: 'THROTTLED_LOCKOUT',
        httpStatus: 429, // Too Many Requests
        action: 'ACCOUNT_LOCKED',
        droppedAttempts: dropped,
        explanation: \`Exceeded \${this.maxAttempts} attempts: blocked \${dropped} brute-force attempts and initiated lockout\`
      };
    }
  }
}

// 5-attempt threshold before activating brute-force lockout
const rateLimiter = new LoginRateLimiter(5);

// 4 distinct client login flows evaluated
const loginFlows = [
  { username: 'mina', attempts: 2 },
  { username: 'rafi', attempts: 1 },
  { username: 'sara', attempts: 4 },
  { username: 'attacker', attempts: 50 }
];

let successfulLoginsCount = 0;
let throttledAttacksCount = 0;

console.log('=== Authentication Rate Limiting & Brute-Force Audit ===\\n');
loginFlows.forEach((flow, index) => {
  const result = rateLimiter.evaluateLogin(flow);

  if (result.verdict === 'PERMITTED') {
    successfulLoginsCount++;
    console.log(\`[\${index + 1}] ALLOWED   [✓]: User "\${result.username}" (\${result.attemptsCount} attempts)\`);
    console.log(\`    Status:   \${result.verdict} [HTTP \${result.httpStatus}]\`);
    console.log(\`    Detail:   \${result.explanation}\\n\`);
  } else {
    throttledAttacksCount++;
    console.log(\`[\${index + 1}] THROTTLED [✗]: User "\${result.username}" (\${result.attemptsCount} attempts)\`);
    console.log(\`    Status:   \${result.verdict} [HTTP \${result.httpStatus}]\`);
    console.log(\`    Action:   \${result.action} (\${result.droppedAttempts} excess probes dropped!)\\n\`);
  }
});

console.log('=== Authentication Defense Summary ===');
console.log('Total Login Flows Audited: ', loginFlows.length);
console.log('Permitted Human Users:     ', successfulLoginsCount);
console.log('Throttled Botnet Attacks:  ', throttledAttacksCount);`,
      caption: {
        en: 'The rate limiter evaluates 4 login streams: 3 legitimate flows stay under the 5-attempt limit and pass, while 1 botnet flood is throttled.',
        bn: 'রেট লিমিটার ৪ টি লগইন প্রবাহ পরীক্ষা করে: ৩ টি বৈধ প্রবাহ ৫ টি চেষ্টার মধ্যে থেকে পাস করে, আর ১ টি বটনেট আক্রমণ প্রতিহত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Generic Error Responses Prevent User Enumeration',
        bn: 'সাধারণ এরর মেসেজ ব্যবহারকারী তালিকা ফাঁস হওয়া রোধ করে'
      },
      text: {
        en: 'A subtle authentication design flaw occurs when the server returns different error messages depending on whether an email exists (e.g. "User does not exist" vs "Incorrect password"). Attackers use this distinction to perform User Enumeration, mapping valid employee emails before launching targeted spear-phishing or password spraying attacks. Always return a generic error message: "Invalid email or password".',
        bn: 'লগইন ফর্মে ইমেইলটি ডাটাবেজে আছে কিনা তার ওপর ভিত্তি করে ভিন্ন ভিন্ন এরর দেখানো (যেমন "ইউজার খুঁজে পাওয়া যায়নি" বনাম "ভুল পাসওয়ার্ড") একটি মারাত্মক ভুল। আক্রমণকারীরা এই পার্থক্যের সুযোগ নিয়ে কোনো ইমেইলটি সক্রিয় তা নিশ্চিত হয়ে নেয় (User Enumeration)। তারপর তারা সেই নির্দিষ্ট ইমেইলে আক্রমণ চালায়। তাই সর্বদা একটি সাধারণ মেসেজ দেখান: "ভুল ইমেইল অথবা পাসওয়ার্ড"।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-auth-ex-1',
      kind: 'predict',
      topic: 'permitted-logins-count',
      question: {
        en: 'In the authentication rate limiting audit of the 4 login flows, how many flows were within the 5-attempt limit and were PERMITTED? (3). Type the number.',
        bn: '৪ টি লগইন প্রবাহের রেট লিমিটিং নিরীক্ষায় সর্বমোট কয়টি প্রবাহ ৫ টি চেষ্টার সীমার মধ্যে ছিল এবং PERMITTED হিসেবে অনুমোদিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 human user login flows passed safely.',
        bn: 'ঠিক ৩ জন স্বাভাবিক ব্যবহারকারীর লগইন নিরাপদে সফল হয়েছিল।'
      },
      explanation: {
        en: 'Three user flows passed: Mina with 2 attempts, Rafi with 1 attempt, and Sara with 4 attempts. All were within the 5-attempt threshold.',
        bn: '৩ জন ব্যবহারকারী সফল হয়েছিলেন: মিনা ২ বার, রাফি ১ বার এবং সারা ৪ বার চেষ্টা করেছিলেন। সবগুলোই ৫ টি চেষ্টার সীমার মধ্যে ছিল।'
      },
    },
    {
      id: 'owasp-auth-ex-2',
      kind: 'mcq',
      topic: 'credential-stuffing-mechanics',
      question: {
        en: 'What is a "Credential Stuffing" attack, and why is it so effective against modern web services?',
        bn: '"ক্রেডেনশিয়াল স্টাফিং" (Credential Stuffing) আক্রমণ কী এবং আধুনিক ওয়েবসাইটে এটি কেন এত বেশি সফল হয়?'
      },
      options: [
        {
          en: 'Attackers use automated botnets to test massive lists of stolen username/password pairs harvested from past data breaches against target websites, exploiting the common human habit of password reuse across multiple services',
          bn: 'আক্রমণকারীরা অতীতে হ্যাক হওয়া বিভিন্ন সাইটের কোটি কোটি ইউজারনেম ও পাসওয়ার্ডের তালিকা নিয়ে বটনেটের মাধ্যমে নতুন ওয়েবসাইটে পরীক্ষা করে এবং ব্যবহারকারীদের একাধিক সাইটে একই পাসওয়ার্ড ব্যবহারের অভ্যাসের সুযোগ নেয়',
        },
        {
          en: 'An attack that fills the computer hard drive with text files until it crashes',
          bn: 'এমন কোনো আক্রমণ যা টেক্সট ফাইল দিয়ে কম্পিউটারের হার্ডড্রাইভ ভরিয়ে ক্র্যাশ করায়',
        },
        {
          en: 'An attack that cuts physical fiber optic cables under city streets',
          bn: 'এমন কোনো আক্রমণ যা শহরের রাস্তার নিচে থাকা ফাইবার ক্যাবল শারীরিকভাবে কেটে ফেলে',
        },
        {
          en: 'An attack that changes monitor screen brightness to maximum level',
          bn: 'এমন কোনো আক্রমণ যা কম্পিউটার মনিটরের উজ্জ্বলতা সর্বোচ্চ পর্যায়ে তুলে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Credential stuffing replays username/password pairs stolen from previous breaches.',
        bn: 'ক্রেডেনশিয়াল স্টাফিং পুরানো ফাঁসের তালিকা দিয়ে নতুন সাইটে লগইন করার চেষ্টা করে।'
      },
      explanation: {
        en: 'Because up to 60% of internet users reuse passwords, an attacker testing 100000 breached credentials can compromise thousands of accounts without discovering new zero-days.',
        bn: 'যেহেতু ৬০% মানুষ একই পাসওয়ার্ড ব্যবহার করে, তাই ১০০০০০ পুরানো ক্রেডেনশিয়াল পরীক্ষা করে হাজার হাজার নতুন অ্যাকাউন্ট হ্যাক করা সম্ভব।'
      },
    },
    {
      id: 'owasp-auth-ex-3',
      kind: 'mcq',
      topic: 'bcrypt-work-factor-slow-hashing',
      question: {
        en: 'Why is bcrypt or Argon2id preferred over high-speed algorithms like SHA-256 for password hashing?',
        bn: 'পাসওয়ার্ড হ্যাশিংয়ের ক্ষেত্রে দ্রুতগতির SHA-256 এর বদলে কেন bcrypt বা Argon2id এর মতো অ্যালগরিদম পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'bcrypt has an adjustable work factor (salt rounds) that introduces intentional computational and memory delay, slowing down offline GPU brute-force cracking rigs from billions of guesses per second to only a few dozen',
          bn: 'bcrypt-এ কাজের মাত্রা (Work Factor) বাড়ানো যায় যা ইচ্ছাকৃতভাবে গণনা ও মেমোরিতে বিলম্ব তৈরি করে, ফলে হ্যাকারের উচ্চগতির জিপিইউ (GPU) প্রতি সেকেন্ডে শত কোটি চেষ্টার বদলে মাত্র কয়েকটি চেষ্টা করতে পারে',
        },
        {
          en: 'Because bcrypt is written in HTML while SHA-256 is written in CSS',
          bn: 'কারণ bcrypt লেখা হয়েছে এইচটিএমএলে আর SHA-256 লেখা হয়েছে সিএসএসে',
        },
        {
          en: 'Because bcrypt automatically increases computer monitor refresh rates',
          bn: 'কারণ bcrypt কম্পিউটার মনিটরের রিফ্রেশ রেট স্বয়ংক্রিয়ভাবে বাড়িয়ে দেয়',
        },
        {
          en: 'Because SHA-256 requires internet connections to calculate hashes',
          bn: 'কারণ SHA-256 হ্যাশ বের করার জন্য সর্বদা সক্রিয় ইন্টারনেট সংযোগ প্রয়োজন',
        },
      ],
      answer: 0,
      hint: {
        en: 'Slow hashing algorithms intentionally delay cracking hardware using work factors.',
        bn: 'স্লো হ্যাশিং অ্যালগরিদম ইচ্ছাকৃতভাবে সময় বেশি নিয়ে হ্যাকারের গতি কমিয়ে দেয়।'
      },
      explanation: {
        en: 'Fast hashes are designed for speed (verifying gigabytes of data). Passwords need slow hashes so that stolen database hashes cannot be reversed by GPU clusters.',
        bn: 'দ্রুতগতির হ্যাশ তৈরি হয়েছে ফাইলের ডাটা যাচাইয়ের জন্য। পাসওয়ার্ডের ক্ষেত্রে স্লো হ্যাশ প্রয়োজন যাতে হ্যাকার হাজার হাজার অনুমান চালাতে না পারে।'
      },
    },
    {
      id: 'owasp-auth-ex-4',
      kind: 'predict',
      topic: 'throttled-attacks-count',
      question: {
        en: 'How many of the 4 evaluated login flows represented an aggressive credential stuffing attack that was THROTTLED and locked out? (1). Type the number.',
        bn: 'মূল্যায়ন করা ৪ টি লগইন প্রবাহের মধ্যে সর্বমোট কয়টি প্রবাহ একটি আক্রমণাত্মক ক্রেডেনশিয়াল স্টাফিং আক্রমণ ছিল যাকে THROTTLED করে লকআউট করা হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 botnet stream was throttled.',
        bn: 'কেবলমাত্র ১ টি বটনেট আক্রমণ প্রতিহত করা হয়েছিল।'
      },
      explanation: {
        en: 'Only the attacker stream with 50 rapid attempts exceeded the 5-attempt limit and was throttled with HTTP 429.',
        bn: 'কেবলমাত্র ৫০ বার চেষ্টার আক্রমণকারী স্ট্রিমটি ৫ টি চেষ্টার সীমা অতিক্রম করায় HTTP 429 দিয়ে প্রতিহত করা হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'auth-failures-quiz',
    title: {
      en: 'Identification & Authentication Failures Quiz',
      bn: 'প্রমাণীকরণ ত্রুটি ও অথেনটিকেশন সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'owasp-ath-qz-1',
        kind: 'mcq',
        topic: 'session-fixation-attack-prevention',
        question: {
          en: 'What is a Session Fixation attack, and how must web applications prevent it during authentication?',
          bn: 'সেশন ফিক্সেশন (Session Fixation) আক্রমণ কী এবং লগইনের সময় ওয়েব অ্যাপ্লিকেশন কীভাবে এটি প্রতিরোধ করতে পারে?'
        },
        options: [
          {
            en: 'An attacker tricks a victim into authenticating using a pre-set session identifier provided by the attacker; the application must always issue a freshly generated session ID immediately upon successful login and destroy the pre-auth session',
            bn: 'আক্রমণকারী ব্যবহারকারীকে এমন একটি সেশন আইডি দিয়ে লগইন করতে প্রলুব্ধ করে যা আক্রমণকারীর আগেই জানা ছিল; এটি ঠেকাতে লগইন সফল হওয়া মাত্রই পুরানো সেশন মুছে ফেলে সম্পূর্ণ নতুন সেশন আইডি তৈরি করতে হয়',
          },
          {
            en: 'An attack that fixes loose computer keyboard buttons',
            bn: 'এমন কোনো আক্রমণ যা কীবোর্ডের আলগা হয়ে যাওয়া বাটন ঠিক করে দেয়',
          },
          {
            en: 'An attack that changes internet browser window dimensions to square',
            bn: 'এমন আক্রমণ যা ওয়েব ব্রাউজার উইন্ডোর আকার বর্গাকার বানিয়ে ফেলে',
          },
          {
            en: 'An attack that automatically updates computer printer paper supplies',
            bn: 'এমন আক্রমণ যা প্রিন্টারের কাগজের সরবরাহ স্বয়ংক্রিয়ভাবে আপডেট করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Always regenerate the session ID immediately upon authentication.',
          bn: 'লগইন সফল হওয়া মাত্রই নতুন সেশন আইডি তৈরি করে পুরানোটি বাতিল করুন।'
        },
        explanation: {
          en: 'Regenerating session IDs on privilege change ensures that any session identifier snooped or planted by an attacker prior to login becomes instantly useless.',
          bn: 'লগইনের সাথে সাথে নতুন সেশন বসালে হ্যাকারের আগের তৈরি করা বা জানা সেশন টোকেন সম্পূর্ণ বাতিল হয়ে যায়।'
        },
      },
      {
        id: 'owasp-ath-qz-2',
        kind: 'mcq',
        topic: 'webauthn-phishing-resistance',
        question: {
          en: 'Why is FIDO2 / WebAuthn (passkeys and security keys) considered "Phishing-Resistant" compared to traditional SMS or TOTP authenticator codes?',
          bn: 'ঐতিহ্যবাহী এসএমএস বা TOTP কোডের তুলনায় FIDO2 / WebAuthn (পাস-কি ও হার্ডওয়্যার কি) কেন "ফিশিং-প্রতিরোধী" হিসেবে স্বীকৃত?'
        },
        options: [
          {
            en: 'The browser cryptographically verifies the website domain origin before signing the challenge with the private key held in hardware, ensuring the key will never sign or send credentials to a spoofed phishing website',
            bn: 'ব্রাউজার হার্ডওয়্যার চিপে সংরক্ষিত প্রাইভেট কি দিয়ে সই করার আগে ক্রিপ্টোগ্রাফিকভাবে ওয়েবসাইটের ডোমেইন যাচাই করে, যার ফলে কোনো ভুয়া বা ফিশিং ওয়েবসাইটে পাসওয়ার্ড বা কি পাঠানো গাণিতিকভাবে অসম্ভব',
          },
          {
            en: 'Because WebAuthn keys are painted with anti-phishing waterproof paint',
            bn: 'কারণ WebAuthn কি-তে ফিশিং-প্রতিরোধী বিশেষ পানিরোধক রঙ লাগানো থাকে',
          },
          {
            en: 'Because WebAuthn only operates during daytime working hours',
            bn: 'কারণ WebAuthn কেবল দিনের কাজের সময় চালু থাকে',
          },
          {
            en: 'Because WebAuthn deletes all phishing emails from the internet',
            bn: 'কারণ WebAuthn ইন্টারনেট থেকে সমস্ত ফিশিং ইমেইল মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'WebAuthn mathematically binds credentials to the exact website origin.',
          bn: 'WebAuthn ক্রিপ্টোগ্রাফির মাধ্যমে সুনির্দিষ্ট ডোমেইনের সাথে প্রমাণীকরণ আবদ্ধ করে।'
        },
        explanation: {
          en: 'If a user is tricked into visiting evil-bank.com instead of real-bank.com, the browser refuses to use the real-bank.com passkey, neutralizing reverse-proxy phishing kits (like Evilginx).',
          bn: 'ব্যবহারকারী কোনো ভুয়া নকল ব্যাংকের ওয়েবসাইটে ঢুকলেও ব্রাউজার বুঝতে পারে এবং আসল পাস-কি প্রদান করে না, ফলে ফিশিং সম্পূর্ণ ব্যর্থ হয়।'
        },
      },
      {
        id: 'owasp-ath-qz-3',
        kind: 'mcq',
        topic: 'jwt-none-algorithm-confusion',
        question: {
          en: 'What is the "None" algorithm vulnerability in JSON Web Token (JWT) authentication libraries?',
          bn: 'জেসন ওয়েব টোকেন (JWT) অথেনটিকেশন লাইব্রেরিতে "None" অ্যালগরিদম দুর্বলতা কী?'
        },
        options: [
          {
            en: 'Vulnerable verification libraries accept tokens whose header specifies {"alg": "none"}, skipping signature verification entirely and allowing attackers to forge arbitrary administrative payloads with no secret key',
            bn: 'অরক্ষিত ভ্যালিডেশন লাইব্রেরি এমন টোকেন গ্রহণ করে যার হেডারে {"alg": "none"} লেখা থাকে এবং কোনো ডিজিটাল স্বাক্ষর যাচাই না করেই আক্রমণকারীকে অ্যাডমিন ক্ষমতা দিয়ে দেয়',
          },
          {
            en: 'A vulnerability where JWT tokens cannot be read on Monday mornings',
            bn: 'এমন কোনো দুর্বলতা যাতে সোমবার সকালে টোকেন পড়া যায় না',
          },
          {
            en: 'A vulnerability that disconnects computer keyboards from USB ports',
            bn: 'এমন দুর্বলতা যা কম্পিউটারের কীবোর্ড খুলে ফেলে',
          },
          {
            en: 'A vulnerability that makes database queries run five times faster',
            bn: 'এমন দুর্বলতা যা ডাটাবেজ কোয়েরির গতি পাঁচ গুণ বাড়িয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'alg: none bypasses signature verification in flawed libraries.',
          bn: 'ভুলভাবে তৈরি লাইব্রেরিতে alg: none স্বাক্ষর যাচাই সম্পূর্ণ এড়িয়ে যায়।'
        },
        explanation: {
          en: 'Hardened libraries explicitly reject the "none" algorithm and enforce expected signature algorithms (e.g. algorithms: ["HS256"]).',
          bn: 'নিরাপদ লাইব্রেরিতে "none" অ্যালগরিদম কঠোরভাবে নিষিদ্ধ থাকে এবং সুনির্দিষ্ট অ্যালগরিদম (যেমন HS256) বাধ্যতামূলক করা হয়।'
        },
      },
      {
        id: 'owasp-ath-qz-4',
        kind: 'mcq',
        topic: 'nist-guidelines-password-expiration',
        question: {
          en: 'Why does NIST SP 800-63B explicitly advise against periodic forced password resets (such as requiring users to change passwords every 90 days)?',
          bn: 'NIST SP 800-63B নির্দেশিকা কেন প্রতি ৯০ দিন অন্তর বাধ্যতামূলক পাসওয়ার্ড পরিবর্তন করার প্রাচীন নিয়মের বিরোধিতা করে?'
        },
        options: [
          {
            en: 'Empirical research proves that frequent forced rotations cause users to pick predictable variations of their old passwords (e.g. Spring2025! to Spring2026!), ultimately decreasing overall enterprise security',
            bn: 'বাস্তব গবেষণায় দেখা গেছে বারবার পাসওয়ার্ড পরিবর্তন করতে বাধ্য করলে মানুষ পুরানো পাসওয়ার্ডের সাথে মিল রেখে সহজে অনুমানযোগ্য পরিবর্তন করে (যেমন Spring2025! বদলে Spring2026! করা), যা সামগ্রিক নিরাপত্তাকে দুর্বল করে দেয়',
          },
          {
            en: 'Because computer hard drives wear out when passwords change frequently',
            bn: 'কারণ ঘন ঘন পাসওয়ার্ড বদলালে কম্পিউটারের হার্ডড্রাইভ দ্রুত নষ্ট হয়ে যায়',
          },
          {
            en: 'Because changing passwords is forbidden by international copyright treaties',
            bn: 'কারণ আন্তর্জাতিক কপিরাইট আইনে পাসওয়ার্ড পরিবর্তন নিষিদ্ধ করা হয়েছে',
          },
          {
            en: 'Because reset passwords consume eighty percent more electricity',
            bn: 'কারণ নতুন পাসওয়ার্ড ব্যবহারের ফলে আশি শতাংশ বেশি বিদ্যুৎ খরচ হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Forced rotation leads to predictable variations rather than stronger passwords.',
          bn: 'বাধ্যতামূলক পরিবর্তনে মানুষ শক্তিশালী পাসওয়ার্ডের বদলে সামান্য পরিবর্তন করে।'
        },
        explanation: {
          en: 'NIST recommends changing passwords only when there is evidence of an actual compromise, prioritizing password length and multi-factor authentication instead.',
          bn: 'NIST-এর মতে পাসওয়ার্ড ফাঁসের সুনির্দিষ্ট প্রমাণ ছাড়া পরিবর্তনের বাধ্যবাধকতা না রেখে পাসওয়ার্ডের দৈর্ঘ্য এবং MFA চালুর ওপর জোর দেওয়া উচিত।'
        },
      },
    ],
  },
  next: {
    slug: 'owasp-capstone',
    title: {
      en: 'OWASP Capstone: Enterprise Web Application Security Assessment',
      bn: 'ওওয়াস্প ক্যাপস্টোন: এন্টারপ্রাইজ ওয়েব সিকিউরিটি মূল্যায়ন'
    },
  },
};
