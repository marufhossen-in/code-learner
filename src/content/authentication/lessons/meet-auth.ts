import type { Lesson } from '../../../lib/types';

export const MeetAuthLesson: Lesson = {
  slug: 'meet-auth',
  tech: 'authentication',
  title: {
    en: 'Authentication Overview: Identification, Credentials & The 3 Factors',
    bn: 'অথেনটিকেশন ওভারভিউ: আইডেন্টিফিকেশন, ক্রেডেনশিয়াল এবং ৩ টি ফ্যাক্টর'
  },
  summary: {
    en: 'Beginner overview of identity verification systems in modern web and distributed applications. Understand the critical distinctions between identification, authentication, and authorization. Master the 3 primary authentication factors (knowledge, possession, and inherence), explore credential verification lifecycles, and implement rate-limiting defenses against brute-force and credential stuffing attacks.',
    bn: 'আধুনিক ওয়েব এবং ডিস্ট্রিবিউটেড সিস্টেমে পরিচয় প্রমাণীকরণের বিগিনার ওভারভিউ। পরিচিতি, প্রমাণীকরণ এবং অনুমোদনের মধ্যকার মৌলিক পার্থক্যগুলো বুঝুন। ৩ টি প্রধান প্রমাণীকরণ ফ্যাক্টর (জ্ঞান, অধিকার এবং বৈশিষ্ট্য), ক্রেডেনশিয়াল যাচাইয়ের জীবনচক্র এবং ব্রুট-ফোর্স ও ক্রেডেনশিয়াল স্টাফিং আক্রমণ প্রতিহতকারী রেট লিমিটিং কৌশল আয়ত্ত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'authentication-gateway-concept',
      text: {
        en: 'The Gatekeeper of Software Systems: Proving Identity',
        bn: 'সফটওয়্যার সিস্টেমের প্রবেশদ্বার: পরিচয় প্রমাণীকরণ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications, authentication is the front gatekeeper that verifies the identity of every incoming user or service. Without robust authentication, anyone could impersonate your users and access their confidential data.',
        bn: 'যখন আপনি কোনো ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন অথেনটিকেশন হলো সেই প্রবেশদ্বার যা প্রতিটি ইনকামিং ব্যবহারকারী বা সার্ভিসের পরিচয় নিশ্চিত করে। শক্তিশালী অথেনটিকেশন ব্যবস্থা ছাড়া যেকোনো ব্যক্তি অন্যের ছদ্মবেশ ধারণ করে গোপনীয় তথ্য হাতিয়ে নিতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To design secure authentication systems, developers must differentiate three fundamental concepts. Identification is claiming who you are, Authentication is proving that claim with verifiable evidence, and Authorization is determining what actions you can perform.',
        bn: 'নিরাপদ অথেনটিকেশন ব্যবস্থা তৈরির জন্য তিনটি ধারণার পার্থক্য বোঝা জরুরি। আইডেন্টিফিকেশন হলো নিজের পরিচয় দাবি করা, অথেনটিকেশন হলো প্রমাণের মাধ্যমে সেই দাবির সত্যতা নিশ্চিত করা, আর অথরাইজেশন হলো সফলভাবে প্রমাণিত পরিচয়ের ভিত্তিতে কাজের ক্ষমতা নির্ধারণ করা।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Knowledge Factor (Something You Know)',
            bn: '১. নলেজ ফ্যাক্টর ( এমন কিছু যা কেবল আপনি জানেন )'
          },
          text: {
            en: 'Information the user remembers, such as passwords, personal identification numbers (PINs), or cryptographic passphrases. Vulnerable to keyloggers, phishing, and password reuse.',
            bn: 'এমন তথ্য যা ব্যবহারকারী মুখস্থ রাখেন, যেমন পাসওয়ার্ড, পিন নম্বর বা সিক্রেট পাসফ্রেজ। এটি ফিশিং, কিলগার এবং পাসওয়ার্ড চুরির আক্রমণের মুখে ঝুঁকিপূর্ণ হতে পারে।'
          },
        },
        {
          title: {
            en: '2. Possession Factor (Something You Have)',
            bn: '২. পজেশন ফ্যাক্টর ( এমন কিছু যা আপনার অধিকারে আছে )'
          },
          text: {
            en: 'Physical or digital objects the user possesses, such as mobile authenticator apps (TOTP), SMS one-time codes, or hardware security keys (FIDO2 YubiKeys).',
            bn: 'ব্যবহারকারীর কাছে শারীরিকভাবে থাকা বস্তু বা ডিভাইস, যেমন স্মার্টফোনের অথেনটিকেটর অ্যাপ (TOTP), এসএমএস কোড বা হার্ডওয়্যার ইউবিকি (YubiKey)।'
          },
        },
        {
          title: {
            en: '3. Inherence Factor (Something You Are)',
            bn: '৩. ইনহ্যারেন্স ফ্যাক্টর ( যা আপনার শারীরিক বৈশিষ্ট্য )'
          },
          text: {
            en: 'Biometric physical traits unique to an individual, including fingerprint scanners, facial recognition cameras, or retina scanners. Convenient but impossible to rotate if leaked.',
            bn: 'ব্যক্তির নিজস্ব বায়োমেট্রিক শারীরিক বৈশিষ্ট্য, যেমন আঙুলের ছাপ (ফিঙ্গারপ্রিন্ট), ফেস আইডি বা চোখের রেটিনা স্ক্যান। এটি অত্যন্ত সুবিধাজনক হলেও কখনো ফাঁস হলে পরিবর্তন করা অসম্ভব।'
          },
        },
        {
          title: {
            en: '4. Multi-Factor Authentication (MFA)',
            bn: '৪. মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA)'
          },
          text: {
            en: 'Combining two or more distinct factors (such as a password from Knowledge plus an authenticator code from Possession). If an attacker steals a password, they still cannot breach the account without the second factor.',
            bn: 'দুটি ভিন্ন ক্যাটাগরির ফ্যাক্টরের সমন্বয় ( যেমন নলেজ থেকে পাসওয়ার্ড এবং পজেশন থেকে অথেনটিকেটর ওটিপি )। হ্যাকাররা পাসওয়ার্ড চুরি করলেও দ্বিতীয় ফ্যাক্টর ছাড়া একাউন্টে ঢুকতে পারে না।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Complete Identity Pipeline: From Identification to Protected Resources',
        bn: 'সম্পূর্ণ আইডেন্টিটি পাইপলাইন: পরিচয় দাবি থেকে সুরক্ষিত ডেটা এক্সেস পর্যন্ত'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Identity pipeline showing identification, authentication verification, and authorization access control">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THE 3-STAGE IDENTITY PIPELINE &amp; BRUTE-FORCE SHIELD</text>
  
  <!-- Stage 1: Identification -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. IDENTIFICATION</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="120" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="22" fill="#38bdf8" font-size="9" font-weight="bold">USER CLAIMS IDENTITY:</text>
      <text x="15" y="44" fill="#f8fafc" font-size="9">POST /api/v1/login</text>
      <text x="15" y="66" fill="#cbd5e1" font-size="8">Identifier: "alice@site.com"</text>
      <text x="15" y="86" fill="#6ee7b7" font-size="8">Status: Unproven Claim</text>
      <text x="15" y="106" fill="#94a3b8" font-size="8">Anyone can type any email!</text>
      
      <rect y="140" width="200" height="150" rx="4" fill="#0f172a"/>
      <text x="100" y="165" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">RATE LIMITER SHIELD</text>
      <text x="15" y="190" fill="#cbd5e1" font-size="8">• Max 5 tries per 15 mins</text>
      <text x="15" y="210" fill="#cbd5e1" font-size="8">• IP + Account Throttling</text>
      <text x="15" y="230" fill="#6ee7b7" font-size="8">• Captcha challenge on fail</text>
      <text x="15" y="250" fill="#ef4444" font-size="8">• Defeats Credential Stuffing</text>
      <text x="15" y="270" fill="#ef4444" font-size="8">• Halts Brute Force Bots</text>
    </g>
  </g>
  
  <!-- Stage 2: Authentication -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. AUTHENTICATION (PROOF)</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="150" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#f59e0b" font-size="10" font-weight="bold">VERIFYING MULTI-FACTOR PROOF:</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="9">Factor 1 (Know):</text>
      <text x="25" y="60" fill="#6ee7b7" font-size="8">Argon2id Hash Matches DB</text>
      
      <text x="15" y="84" fill="#cbd5e1" font-size="9">Factor 2 (Have):</text>
      <text x="25" y="100" fill="#6ee7b7" font-size="8">TOTP 6-Digit Code Verified</text>
      
      <text x="15" y="124" fill="#cbd5e1" font-size="9">Timing Defense:</text>
      <text x="25" y="140" fill="#6ee7b7" font-size="8">constantTimeCompare() used</text>
      
      <rect y="170" width="240" height="120" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="120" y="195" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">IDENTITY CONFIRMED ✓</text>
      <text x="15" y="220" fill="#f8fafc" font-size="9">Server issues authenticated token:</text>
      <text x="15" y="240" fill="#cbd5e1" font-size="8">• Set-Cookie: sess_88f12... (HttpOnly)</text>
      <text x="15" y="260" fill="#cbd5e1" font-size="8">• Or signed JWT Authorization header</text>
      <text x="15" y="278" fill="#10b981" font-size="8">HTTP 200 OK — Identity Proven</text>
    </g>
  </g>
  
  <!-- Stage 3: Authorization -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">3. AUTHORIZATION</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="140" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="10" font-weight="bold">PERMISSION EVALUATION:</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8">Request: DELETE /api/user/9</text>
      <text x="15" y="64" fill="#f8fafc" font-size="8">User is: Alice (authenticated)</text>
      <text x="15" y="84" fill="#cbd5e1" font-size="8">Role: role = "editor"</text>
      <text x="15" y="104" fill="#ef4444" font-size="8">Required: role = "admin"</text>
      <text x="15" y="124" fill="#ef4444" font-size="8">Verdict: 403 Forbidden</text>
      
      <rect y="160" width="200" height="130" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="185" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">KEY PRINCIPLE</text>
      <text x="15" y="210" fill="#f8fafc" font-size="8">• Authentication answers:</text>
      <text x="25" y="225" fill="#6ee7b7" font-size="8">"Who are you?"</text>
      <text x="15" y="245" fill="#f8fafc" font-size="8">• Authorization answers:</text>
      <text x="25" y="260" fill="#6ee7b7" font-size="8">"What can you do?"</text>
      <text x="15" y="280" fill="#cbd5e1" font-size="8">Never mix up these two gates!</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">The 3-stage identity lifecycle: claim identity, prove identity via multi-factor evidence, and evaluate role permissions</text>
</svg>`,
      caption: {
        en: 'The 3-tier identity process: Identification claims who you are, Authentication verifies proof, and Authorization checks permissions.',
        bn: '৩-স্তরী আইডেন্টিটি প্রক্রিয়া: আইডেন্টিফিকেশন পরিচয় দাবি করে, অথেনটিকেশন প্রমাণ যাচাই করে এবং অথরাইজেশন অনুমতি পরীক্ষা করে।'
      },
    },
    {
      type: 'heading',
      id: 'authentication-pipeline-code',
      text: {
        en: 'Implementing an Authentication Engine with Rate Limiting',
        bn: 'রেট লিমিটিং সংবলিত অথেনটিকেশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how secure authentication systems protect user credentials while throttling brute-force login attempts, inspect the following pipeline. It enforces two-factor verification and temporarily locks accounts when repeated invalid attempts occur.',
        bn: 'সুরক্ষিত অথেনটিকেশন সিস্টেম কীভাবে ব্যবহারকারীর ক্রেডেনশিয়াল যাচাই করে এবং ব্রুট-ফোর্স আক্রমণ প্রতিহত করে তা দেখতে নিচের কোডটি লক্ষ্য করুন। এটি টু-ফ্যাক্টর প্রমাণীকরণ নিশ্চিত করে এবং বারবার ভুল পাসওয়ার্ড দিলে অ্যাকাউন্ট সাময়িকভাবে লক করে দেয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'defensive-auth-service.js',
      code: `// Multi-Factor Authentication Service with Brute-Force Rate Limiting
const crypto = require('crypto');

class AuthenticationService {
  constructor() {
    // Mock user database with pre-hashed credentials and MFA secret
    this.userStore = new Map([
      ['alice@example.com', {
        id: 'usr_101',
        passwordHash: 'argon2id_mock_hash_for_alice_secret',
        mfaSecretCode: '748291',
        role: 'admin',
        failedAttempts: 0,
        lockedUntil: 0
      }]
    ]);
  }

  authenticate(email, plaintextPassword, mfaCode) {
    const user = this.userStore.get(email);
    const now = Date.now();

    // 1. Defeat user enumeration: return identical error for missing user or wrong pass
    if (!user) {
      return { status: 401, error: 'Invalid email or password.' };
    }

    // 2. Enforce account lockout against brute-force attacks
    if (user.lockedUntil > now) {
      const waitSeconds = Math.ceil((user.lockedUntil - now) / 1000);
      return {
        status: 429,
        error: 'Account temporarily locked. Please retry in ' + waitSeconds + ' seconds.'
      };
    }

    // 3. Verify password hash using simulated constant-time comparison
    const expectedPassword = 'argon2id_mock_hash_for_alice_secret';
    const isPasswordValid = (plaintextPassword === 'CorrectPassword123!');
    const isMfaValid = (mfaCode === user.mfaSecretCode);

    if (!isPasswordValid || !isMfaValid) {
      user.failedAttempts++;
      // Lock account after 5 consecutive failures for 15 minutes
      if (user.failedAttempts >= 5) {
        user.lockedUntil = now + (15 * 60 * 1000); // 15 minutes lockout
        console.log('[SECURITY ALERT] Account locked for 15 minutes: ' + email);
        return {
          status: 429,
          error: 'Excessive failed login attempts. Account locked for 15 minutes.'
        };
      }
      return { status: 401, error: 'Invalid email or password.' };
    }

    // 4. Reset counter on successful multi-factor authentication
    user.failedAttempts = 0;
    const sessionToken = 'sess_' + crypto.randomBytes(24).toString('hex');

    return {
      status: 200,
      user: { id: user.id, email: email, role: user.role },
      sessionToken: sessionToken
    };
  }

  // Authorization gate: check if authenticated user can perform admin action
  authorizeAdmin(userObject) {
    if (!userObject || userObject.role !== 'admin') {
      return { status: 403, error: 'Forbidden: Insufficient administrative privileges.' };
    }
    return { status: 200, message: 'Administrative access granted.' };
  }
}

const auth = new AuthenticationService();

console.log('=== Step 1: Testing Multi-Factor Login with Correct Credentials ===');
const successLogin = auth.authenticate('alice@example.com', 'CorrectPassword123!', '748291');
console.log('Login Result:', successLogin);

console.log('\\n=== Step 2: Testing Authorization Gate ===');
const authzResult = auth.authorizeAdmin(successLogin.user);
console.log('Authorization Result:', authzResult);

console.log('\\n=== Step 3: Triggering Brute-Force Account Lockout (5 Failed Attempts) ===');
for (let i = 1; i <= 5; i++) {
  const failRes = auth.authenticate('alice@example.com', 'BadPassword!', '000000');
  console.log('Attempt ' + i + ' status: ' + failRes.status + ' -> ' + failRes.error);
}

console.log('\\n=== Step 4: Testing Login While Account is Locked ===');
const lockedAttempt = auth.authenticate('alice@example.com', 'CorrectPassword123!', '748291');
console.log('Locked Attempt Result:', lockedAttempt);`,
      caption: {
        en: 'The service verifies credentials, resets counters on success, and locks accounts after 5 failures.',
        bn: 'সার্ভিসটি ক্রেডেনশিয়াল যাচাই নিশ্চিত করে, সফলতায় কাউন্টার রিসেট করে এবং ৫ বার ভুল হলে অ্যাকাউন্ট লক করে দেয়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Credential Stuffing & Rate Limiting Defenses',
        bn: 'ক্রেডেনশিয়াল স্টাফিং এবং রেট লিমিটিং প্রতিরক্ষা'
      },
      text: {
        en: 'Credential stuffing is an automated attack where bots test millions of username/password pairs stolen from external corporate breaches against your login portal. Because many users reuse identical passwords across services, automated botnets achieve a 1% to 2% success rate unless blocked! Mitigate this with strict IP and account rate limiting (e.g. 5 failed logins per 15-minute window), bot detection CAPTCHAs, and mandatory Multi-Factor Authentication.',
        bn: 'ক্রেডেনশিয়াল স্টাফিং হলো একটি স্বয়ংক্রিয় সাইবার আক্রমণ যেখানে বট অন্য কোনো সাইটের চুরি হওয়া কোটি কোটি পাসওয়ার্ড আপনার লগইন পেজে পরীক্ষা করে। অনেক ব্যবহারকারী বিভিন্ন ওয়েবসাইটে একই পাসওয়ার্ড ব্যবহার করায় এই আক্রমণগুলোতে প্রায় ১% থেকে ২% সাফল্য পাওয়া যায় যদি সঠিক সুরক্ষা না থাকে! এই ঝুঁকি রুখতে কঠোর আইপি ও অ্যাকাউন্ট রেট লিমিটিং ( যেমন ১৫ মিনিটে ৫ টি ব্যর্থ চেষ্টার পর লক ), ক্যাপচা এবং বাধ্যতামূলক মাল্টি-ফ্যাক্টর অথেনটিকেশন প্রয়োগ করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'meet-auth-ex-1',
      kind: 'predict',
      topic: 'three-authentication-factors',
      question: {
        en: 'How many primary authentication factors (Knowledge, Possession, Inherence) form the foundation of multi-factor authentication? (3). Type the number.',
        bn: 'মাল্টি-ফ্যাক্টর অথেনটিকেশনের ভিত্তি গঠনকারী প্রধান ফ্যাক্টর ( জ্ঞান, অধিকার, শারীরিক বৈশিষ্ট্য ) সর্বমোট কয়টি? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'The 3 factors: Something you know, have, and are.',
        bn: '৩ টি ফ্যাক্টর: যা আপনি জানেন, যা আপনার আছে এবং যা আপনি স্বয়ং।'
      },
      explanation: {
        en: 'Authentication is categorized into 3 universal factors: Knowledge (passwords), Possession (tokens/devices), and Inherence (biometrics).',
        bn: 'অথেনটিকেশন ৩ টি সার্বজনীন ক্যাটাগরিতে বিভক্ত: জ্ঞান (পাসওয়ার্ড), অধিকার (টোকেন/ডিভাইস) এবং শারীরিক বৈশিষ্ট্য (বায়োমেট্রিক)।'
      },
    },
    {
      id: 'meet-auth-ex-2',
      kind: 'mcq',
      topic: 'authn-vs-authz',
      question: {
        en: 'What is the precise architectural distinction between Authentication and Authorization?',
        bn: 'অথেনটিকেশন (Authentication) এবং অথরাইজেশনের (Authorization) মধ্যে সুনির্দিষ্ট আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'Authentication verifies the identity of the user (who you are), while Authorization determines the permissions and resources the authenticated user is allowed to access (what you can do)',
          bn: 'অথেনটিকেশন ব্যবহারকারীর আসল পরিচয় যাচাই করে ( আপনি কে ), আর অথরাইজেশন যাচাইকৃত ব্যবহারকারী কোন কোন ডেটা বা সম্পদ ব্যবহারের অনুমতি পাবে তা নির্ধারণ করে ( আপনি কী করতে পারেন )',
        },
        {
          en: 'Authentication is for mobile phones, while Authorization is only for desktop computers',
          bn: 'অথেনটিকেশন কেবল মোবাইল ফোনের জন্য এবং অথরাইজেশন কেবল ডেস্কটপ কম্পিউটারের জন্য',
        },
        {
          en: 'Authentication turns off the computer monitor, while Authorization turns it back on',
          bn: 'অথেনটিকেশন কম্পিউটার মনিটর বন্ধ করে এবং অথরাইজেশন মনিটর আবার চালু করে',
        },
        {
          en: 'There is no difference; both terms mean exactly the same thing in software',
          bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; সফটওয়্যারে দুটি শব্দ সম্পূর্ণ একই অর্থে ব্যবহৃত হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Authentication answers "Who are you?"; Authorization answers "What can you do?".',
        bn: 'অথেনটিকেশন বলে "আপনি কে?"; আর অথরাইজেশন বলে "আপনার কী কী ক্ষমতা আছে?"।',
      },
      explanation: {
        en: 'Authentication must happen before authorization. A user can be successfully authenticated but still denied authorization to administrative endpoints.',
        bn: 'অথরাইজেশনের আগেই অথেনটিকেশন হতে হয়। একজন ব্যবহারকারী সফলভাবে লগইন করলেও তিনি অ্যাডমিন পেজে যাওয়ার অনুমোদন নাও পেতে পারেন।'
      },
    },
    {
      id: 'meet-auth-ex-3',
      kind: 'mcq',
      topic: 'sms-mfa-flaws',
      question: {
        en: 'Why are SMS-based one-time codes considered significantly weaker than hardware security keys or authenticator apps?',
        bn: 'হার্ডওয়্যার সিকিউরিটি কি বা অথেনটিকেটর অ্যাপের তুলনায় এসএমএস-ভিত্তিক ওয়ান-টাইম কোড কেন উল্লেখযোগ্যভাবে দুর্বল বলে গণ্য হয়?'
      },
      options: [
        {
          en: 'SMS messages travel unencrypted across telecommunication networks and are vulnerable to SIM swapping attacks, SS7 routing interception, and social engineering at telecom providers',
          bn: 'এসএমএস বার্তা টেলিযোগাযোগ নেটওয়ার্কে কোনো এনক্রিপশন ছাড়া চলাচল করে এবং এটি সিম সোয়াপিং (SIM Swap), SS7 প্রটোকল আক্রমণ ও মোবাইল অপারেটরের প্রতারণার মুখে অত্যন্ত ঝুঁকিপূর্ণ',
        },
        {
          en: 'Because SMS messages can only be sent on Tuesdays and Thursdays',
          bn: 'কারণ এসএমএস বার্তা কেবল মঙ্গলবার এবং বৃহস্পতিবার পাঠানো যায়',
        },
        {
          en: 'Because SMS codes take ten hours to arrive on modern smartphones',
          bn: 'কারণ আধুনিক স্মার্টফোনে এসএমএস কোড পৌঁছাতে ১০ ঘণ্টা সময় লাগে',
        },
        {
          en: 'Because telecom towers refuse to transmit six-digit numbers',
          bn: 'কারণ মোবাইল নেটওয়ার্ক টাওয়ার কোনো ৬ সংখ্যার কোড আদান-প্রদান করতে অস্বীকার করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'SMS is vulnerable to SIM swap fraud and SS7 telecommunication attacks.',
        bn: 'এসএমএস সিম সোয়াপ জালিয়াতি এবং টেলিকম নেটওয়ার্ক আক্রমণের মুখে অসুরক্ষিত।',
      },
      explanation: {
        en: 'Attackers trick cell carriers into porting the victim phone number to an attacker SIM card, instantly intercepting all SMS verification codes.',
        bn: 'আক্রমণকারীরা মোবাইল অপারেটরকে বিভ্রান্ত করে ব্যবহারকারীর নম্বর নিজের সিম কার্ডে সরিয়ে নেয়, ফলে সমস্ত এসএমএস কোড হ্যাকারের কাছে চলে যায়।'
      },
    },
    {
      id: 'meet-auth-ex-4',
      kind: 'predict',
      topic: 'account-lockout-threshold',
      question: {
        en: 'If a security policy locks an account after 5 consecutive failed login attempts, how many attempts trigger that lockout? (5). Type the number.',
        bn: 'একটি নিরাপত্তা নীতিমালায় যদি টানা ৫ টি ব্যর্থ লগইন চেষ্টার পর অ্যাকাউন্ট লক করার নিয়ম থাকে, তবে কয়টি ব্যর্থ চেষ্টা লকআউট চালু করে? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'The lockout threshold is 5 attempts.',
        bn: 'লকআউট সীমা হলো ৫ টি চেষ্টা।'
      },
      explanation: {
        en: 'Limiting consecutive invalid attempts to 5 halts automated dictionary attacks and protects user accounts from password guessing.',
        bn: 'টানা ভুল চেষ্টার সংখ্যা ৫ এ সীমাবদ্ধ রাখলে স্বয়ংক্রিয় অভিধান আক্রমণ বন্ধ হয় এবং পাসওয়ার্ড অনুমান রোধ করা যায়।'
      },
    },
  ],
  quiz: {
    id: 'meet-auth-quiz',
    title: {
      en: 'Authentication Foundations Quiz',
      bn: 'অথেনটিকেশন ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'meet-auth-qz-1',
        kind: 'mcq',
        topic: 'why-multi-factor-superior',
        question: {
          en: 'Why does requiring two distinct authentication factors (such as Knowledge + Possession) provide vastly superior security over requiring two items of the same factor?',
          bn: 'একই ফ্যাক্টরের দুটি জিনিসের তুলনায় দুটি সম্পূর্ণ ভিন্ন ফ্যাক্টর ( যেমন জ্ঞান + অধিকার ) বাধ্যতামূলক করলে কেন বহুগুণ বেশি নিরাপত্তা পাওয়া যায়?'
        },
        options: [
          {
            en: 'Compromise of one category of defense (e.g. a database password leak) does not compromise the second independent physical category (e.g. a hardware token held in the user hand)',
            bn: 'এক ক্যাটাগরির নিরাপত্তা ভেঙে পড়লেও ( যেমন ডাটাবেজ থেকে পাসওয়ার্ড চুরি হলেও ) দ্বিতীয় স্বাধীন শারীরিক ক্যাটাগরি ( যেমন ব্যবহারকারীর হাতের হার্ডওয়্যার কি ) সম্পূর্ণ অক্ষত থাকে',
          },
          {
            en: 'Because computers run out of physical battery power when two passwords are used',
            bn: 'কারণ দুটি পাসওয়ার্ড ব্যবহার করলে কম্পিউটারের ব্যাটারি দ্রুত শেষ হয়ে যায়',
          },
          {
            en: 'Because web browsers only allow users to type on keyboard buttons with one hand',
            bn: 'কারণ ওয়েব ব্রাউজার ব্যবহারকারীদের কেবল এক হাত দিয়ে কিবোর্ডে টাইপ করার অনুমতি দেয়',
          },
          {
            en: 'Because multi-factor authentication turns internet websites into black and white text',
            bn: 'কারণ মাল্টি-ফ্যাক্টর অথেনটিকেশন ওয়েবসাইটের সমস্ত রঙিন অংশ সাদাকালো করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Distinct factors prevent a single compromise method from breaching both defenses.',
          bn: 'ভিন্ন ফ্যাক্টর ব্যবহারের ফলে একটি কৌশল দিয়ে দুটি সুরক্ষাই ভাঙা অসম্ভব হয়।',
        },
        explanation: {
          en: 'Requiring two passwords (both Knowledge) means a single keylogger steals both. Requiring a password plus a hardware key requires compromising two completely different domains.',
          bn: 'দুটি পাসওয়ার্ড দিলে একটি কিলগার দিয়েই দুটি চুরি হয়। পাসওয়ার্ডের সাথে হার্ডওয়্যার কি চাইলে হ্যাকারকে সম্পূর্ণ দুটি ভিন্ন জগতে আক্রমণ করতে হয়।'
        },
      },
      {
        id: 'meet-auth-qz-2',
        kind: 'mcq',
        topic: 'credential-stuffing-mitigation',
        question: {
          en: 'How does implementing account rate limiting and exponential backoff mitigate credential stuffing attacks?',
          bn: 'অ্যাকাউন্টে রেট লিমিটিং এবং এক্সপোনেনশিয়াল ব্যাকঅফ প্রয়োগ করলে কীভাবে ক্রেডেনশিয়াল স্টাফিং আক্রমণ প্রতিহত হয়?'
        },
        options: [
          {
            en: 'Credential stuffing relies on automated botnets trying thousands of leaked password combinations per second; rate limiting restricts request frequency, making large-scale brute force computationally and economically impossible',
            bn: 'ক্রেডেনশিয়াল স্টাফিং মূলত প্রতি সেকেন্ডে হাজার হাজার পাসওয়ার্ড পরীক্ষা করা রোবটের ওপর নির্ভর করে; রেট লিমিটিং রিকোয়েস্টের গতি কমিয়ে দিয়ে বৃহৎ পরিসরের আক্রমণকে অসম্ভব ও অকার্যকর করে তোলে',
          },
          {
            en: 'It disconnects the physical server from the building electrical circuit breaker',
            bn: 'এটি ভবনের মূল বৈদ্যুতিক সার্কিট ব্রেকার থেকে সার্ভারের সংযোগ বিচ্ছিন্ন করে দেয়',
          },
          {
            en: 'It deletes the website domain name from the global internet DNS servers',
            bn: 'এটি গ্লোবাল ইন্টারনেট ডিএনএস সার্ভার থেকে ওয়েবসাইটের ডোমেইন নাম মুছে ফেলে',
          },
          {
            en: 'It causes the user computer monitor to double its physical brightness level',
            bn: 'এটি ব্যবহারকারীর কম্পিউটার মনিটরের উজ্জ্বলতা শারীরিকভাবে দ্বিগুণ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Rate limiting destroys the speed and economic viability of automated password spraying.',
          bn: 'রেট লিমিটিং আক্রমণকারী বটের গতি নষ্ট করে স্বয়ংক্রিয় আক্রমণকে ব্যর্থ করে।',
        },
        explanation: {
          en: 'Attackers need speed to test millions of leaked credentials. Throttling attempts to 5 per 15 minutes destroys the automated attack vector.',
          bn: 'লাখ লাখ ক্রেডেনশিয়াল পরীক্ষার জন্য আক্রমণকারীর গতি দরকার। ১৫ মিনিটে ৫ বারের সীমা আক্রমণকারীর সেই গতি সম্পূর্ণরূপে ধ্বংস করে দেয়।'
        },
      },
      {
        id: 'meet-auth-qz-3',
        kind: 'mcq',
        topic: 'client-vs-server-auth-trust',
        question: {
          en: 'Why is client-side authentication completely untrusted in backend API architectures?',
          bn: 'ব্যাকএন্ড এপিআই আর্কিটেকচারে ক্লায়েন্ট-সাইড অথেনটিকেশনকে কেন সম্পূর্ণ অবিশ্বস্ত বলে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'Clients (web browsers and mobile devices) run in an environment entirely controlled by the user or an attacker; any client-side boolean flag like "isAuthenticated: true" can be trivially forged or manipulated',
            bn: 'ক্লায়েন্ট বা ব্রাউজার ব্যবহারকারী বা আক্রমণকারীর নিজস্ব নিয়ন্ত্রণে চলে; ফলে "isAuthenticated: true" এর মতো যেকোনো ক্লায়েন্ট কোড বা শর্ত হ্যাকাররা নিমিষেই বদলে ফেলতে পারে',
          },
          {
            en: 'Because client computers lack internal microprocessors capable of calculating numbers',
            bn: 'কারণ ক্লায়েন্ট কম্পিউটারে কোনো সংখ্যা হিসাব করার মতো মাইক্রোপ্রসেসর থাকে না',
          },
          {
            en: 'Because internet cables only transmit data in one direction from server to client',
            bn: 'কারণ ইন্টারনেট কেবল কেবল সার্ভার থেকে ক্লায়েন্টের দিকে একমুখী ডাটা পাঠাতে পারে',
          },
          {
            en: 'Because client-side JavaScript code dissolves when viewed in darkness',
            bn: 'কারণ অন্ধকারে দেখলে ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট কোড নিজে থেকেই বিলীন হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Client runtimes are attacker-controlled; the backend must independently verify evidence.',
          bn: 'ক্লায়েন্ট পরিবেশ হ্যাকারের নিয়ন্ত্রণে থাকে; তাই ব্যাকএন্ডকে অবশ্যই নিজস্ব প্রমাণ যাচাই করতে হয়।',
        },
        explanation: {
          en: 'Never trust authentication assertions from clients. The server must cryptographically verify credentials on every API request.',
          bn: 'ক্লায়েন্টের কোনো দাবি বিশ্বাস করা যাবে না। প্রতিটি এপিআই রিকোয়েস্টে সার্ভারকে নিজে ক্রিপ্টোগ্রাফিক প্রমাণ যাচাই করতে হবে।'
        },
      },
      {
        id: 'meet-auth-qz-4',
        kind: 'mcq',
        topic: 'inherence-factor-vulnerabilities',
        question: {
          en: 'What is the primary architectural limitation of inherence factors (biometrics) compared to knowledge factors (passwords)?',
          bn: 'নলেজ ফ্যাক্টরের (পাসওয়ার্ড) তুলনায় ইনহ্যারেন্স ফ্যাক্টরের (বায়োমেট্রিক) প্রধান আর্কিটেকচারাল সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'Biometric data cannot be rotated or changed if compromised; once an attacker extracts a high-resolution fingerprint or facial template, the victim cannot revoke their biological identity',
            bn: 'বায়োমেট্রিক ডাটা একবার ফাঁস হয়ে গেলে তা পরিবর্তন বা বাতিল করা অসম্ভব; কেউ যদি আঙুলের ছাপের ডাটা চুরি করে ফেলে, তবে ব্যবহারকারী তার শারীরিক পরিচয় বদলে ফেলতে পারেন না',
          },
          {
            en: 'Biometric sensors only operate when computers are plugged into car batteries',
            bn: 'বায়োমেট্রিক সেন্সর কেবল তখনই কাজ করে যখন কম্পিউটার গাড়ির ব্যাটারিতে লাগানো থাকে',
          },
          {
            en: 'Biometric scans double the physical weight of smartphone hardware',
            bn: 'বায়োমেট্রিক স্ক্যান স্মার্টফোনের শারীরিক ওজন দ্বিগুণ করে দেয়',
          },
          {
            en: 'Biometric data automatically deletes user bank accounts every month',
            bn: 'বায়োমেট্রিক ডাটা প্রতি মাসে ব্যবহারকারীর ব্যাংক অ্যাকাউন্ট নিজে নিজেই মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Biometrics cannot be rotated; a compromised fingerprint remains compromised forever.',
          bn: 'বায়োমেট্রিক পরিবর্তন করা যায় না; একবার ফাঁস হওয়া আঙুলের ছাপ চিরতরে ঝুঁকিপূর্ণ থাকে।',
        },
        explanation: {
          en: 'If a password leaks, you reset it. If your biometric data leaks from a database, you cannot change your face or fingerprints. Biometrics require local device-bound matching (like WebAuthn).',
          bn: 'পাসওয়ার্ড ফাঁস হলে বদলে নেওয়া যায়, কিন্তু আঙুলের ছাপ বদলানো যায় না। তাই বায়োমেট্রিক ডাটা সরাসরি সার্ভারে না পাঠিয়ে লোকাল ডিভাইসে যাচাই করতে হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'passwords-hashing',
    title: {
      en: 'Password Hashing: Argon2id, bcrypt & Rainbow Table Defenses',
      bn: 'পাসওয়ার্ড হ্যাশিং: Argon2id, bcrypt এবং রেইনবো টেবিল প্রতিরোধ'
    },
  },
};
