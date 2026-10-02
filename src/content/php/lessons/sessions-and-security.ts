import type { Lesson } from '../../../lib/types';

export const SessionsAndSecurityLesson: Lesson = {
  slug: 'sessions-and-security',
  tech: 'php',
  title: {
    en: 'Stateful Sessions, Authentication & Web Security',
    bn: 'স্টেটফুল সেশন, প্রমাণীকরণ এবং ওয়েব সিকিউরিটি'
  },
  summary: {
    en: 'Master PHP web security and persistent user state management: secure session_start() configuration, hardened cookie flags (HttpOnly, Secure, SameSite=Strict), fixation defense via session_regenerate_id(true), cryptographic hashing with password_hash and Argon2id, and CSRF token defenses.',
    bn: 'পিএইচপি ওয়েব সিকিউরিটি ও ব্যবহারকারীর স্টেট ব্যবস্থাপনা আয়ত্ত করুন: সুরক্ষিত session_start() কনফিগারেশন, কুকি সুরক্ষা (HttpOnly, Secure, SameSite=Strict), session_regenerate_id(true) দিয়ে ফিক্সেশন প্রতিরোধ, Argon2id সহ ক্রিপ্টোগ্রাফিক হ্যাশিং এবং CSRF প্রতিরোধ।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'session-lifecycle-heading',
      text: {
        en: 'Session State Lifecycle and Cookie Security Hardening',
        bn: 'সেশন স্টেট লাইফসাইকেল এবং কুকি সিকিউরিটি শক্তিশালীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because HTTP is inherently stateless, PHP (the server runtime) maintains user state across requests using server-side sessions. Invoking session_start() instructs PHP to locate or generate a unique 32-character identifier stored on the client via a `PHPSESSID` cookie. To defend against theft, session cookies must be hardened with three essential flags. Secure transmits cookies exclusively over HTTPS, HttpOnly blocks malicious client scripts from reading document.cookie, and SameSite=Strict neutralizes cross-site request forgery on external links.',
        bn: 'এইচটিটিপি প্রোটোকল মূলত স্টেটলেস হওয়ায় ব্যবহারকারীর বিভিন্ন অনুরোধের মধ্যে সংযোগ বজায় রাখতে পিএইচপি (সার্ভার রানটাইম) সেশন ব্যবহার করে। session_start() কল করলে পিএইচপি ক্লায়েন্টের জন্য একটি ৩২ অক্ষরের অনন্য আইডি তৈরি করে `PHPSESSID` কুকির মাধ্যমে তা সংরক্ষণ করে। চুরি ঠেকাতে সেশন কুকিতে ৩ টি জরুরি ফ্ল্যাগ নিশ্চিত করতে হয়। Secure কেবল HTTPS প্রোটোকলে তথ্য পাঠায়, HttpOnly জাভাস্ক্রিপ্টকে document.cookie পড়তে বাধা দেয় এবং SameSite=Strict বাহ্যিক লিংকের মাধ্যমে CSRF আক্রমণ বন্ধ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-layer session security architecture protecting against session fixation and cookie theft.',
        bn: 'চিত্র ১: সেশন ফিক্সেশন এবং কুকি চুরি রোধে ৪ টি স্তরের সেশন সিকিউরিটি আর্কিটেকচার।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP HARDENED SESSION LIFECYCLE &amp; AUTHENTICATION</text>

  <!-- Step 1: Pre-Auth Session -->
  <g transform="translate(30, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Anonymous Visit</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">session_start()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Initial session cookie:</text>
    <rect x="10" y="90" width="150" height="60" rx="5" fill="#0f172a" />
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace">ID: "sess_anon_91a"</text>
    <text x="15" y="125" fill="#38bdf8" font-size="8" font-family="monospace">role: "guest"</text>
    <text x="15" y="140" fill="#cbd5e1" font-size="8" font-family="monospace">cart: [3 items]</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">Pre-login state</text>
  </g>

  <!-- Step 2: Login Authentication -->
  <g transform="translate(230, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#d97706" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Password Check</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">password_verify()</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Argon2id comparison:</text>
    <rect x="10" y="90" width="150" height="60" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="110" fill="#fbbf24" font-size="8" font-family="monospace">hash_equals()</text>
    <text x="15" y="125" fill="#fbbf24" font-size="8" font-family="monospace">Constant-time</text>
    <text x="15" y="140" fill="#34d399" font-size="8" font-family="monospace">Match confirmed</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">Credentials validated</text>
  </g>

  <!-- Step 3: Session Regeneration -->
  <g transform="translate(430, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#059669" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Session ID Regen</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">regenerate_id(true)</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Old ID destroyed:</text>
    <rect x="10" y="90" width="150" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="110" fill="#f87171" font-size="8" font-family="monospace">Old "sess_anon_91a" DEL</text>
    <text x="15" y="125" fill="#34d399" font-size="8" font-family="monospace">New: "sess_auth_87b"</text>
    <text x="15" y="140" fill="#34d399" font-size="8" font-family="monospace">Fixation defeated</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">Attacker locked out</text>
  </g>

  <!-- Step 4: Cookie Hardening -->
  <g transform="translate(630, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#db2777" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Header Egress</text>
    <text x="12" y="55" fill="#f472b6" font-size="10" font-family="monospace">Set-Cookie Flags</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Browser flags set:</text>
    <rect x="10" y="90" width="160" height="60" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="15" y="108" fill="#38bdf8" font-size="8" font-family="monospace">HttpOnly (No JS)</text>
    <text x="15" y="122" fill="#38bdf8" font-size="8" font-family="monospace">Secure (HTTPS only)</text>
    <text x="15" y="136" fill="#38bdf8" font-size="8" font-family="monospace">SameSite=Strict</text>
    <text x="12" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Rock-solid security</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'password-hashing-heading',
      text: {
        en: 'Cryptographic Password Hashing with Argon2id and Bcrypt',
        bn: 'Argon2id এবং Bcrypt দিয়ে ক্রিপ্টোগ্রাফিক পাসওয়ার্ড হ্যাশিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never store plain-text passwords or obsolete legacy hashes (like md5 or sha256) in databases. Modern graphics processing units (GPUs) can compute billions of SHA hashes every second. PHP provides native cryptographic hashing through password_hash($password, PASSWORD_ARGON2ID) or PASSWORD_BCRYPT. These algorithms generate a unique 128-bit cryptographic salt automatically and incorporate deliberate memory and CPU work factors to render brute-force cracking mathematically infeasible. Verification is executed safely via password_verify().',
        bn: 'কখনোই ডেটাবেসে সাধারণ প্লেইনটেক্সট বা পুরানো হ্যাশ (যেমন md5 বা sha256) সংরক্ষণ করবেন না। আধুনিক গ্রাফিক্স প্রসেসর (GPU) প্রতি সেকেন্ডে শত কোটি SHA হ্যাশ হিসাব করতে পারে, ফলে এগুলো সহজে ভেঙে ফেলা সম্ভব। পিএইচপিতে গোপন ক্রেডেনশিয়াল সুরক্ষিত রাখতে আধুনিক আর্গন (Argon2id) বা বিক্রিপ্ট অ্যালগরিদম ব্যবহার করা হয়। এই মেকানিজমগুলো স্বয়ংক্রিয়ভাবে ১২৮-বিট ক্রিপ্টোগ্রাফিক সল্ট তৈরি করে এবং মেমোরির ওপর ইচ্ছাকৃত চাপ সৃষ্টি করে আক্রমণকারীদের ব্রুট-ফোর্স প্রচেষ্টা ব্যর্থ করে দেয়। সংরক্ষিত ডেটা মেলাতে নিরাপদ ভেরিফিকেশন কল করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of secure session manager with fixation defense and Argon2id password verification.',
        bn: 'সেশন ফিক্সেশন প্রতিরোধ এবং পাসওয়ার্ড ভেরিফিকেশনের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP Secure Session Manager and Password Hashing in TypeScript
interface SessionStore {
  sessionId: string;
  userId?: number;
  isAuthenticated: boolean;
  cookieFlags: {
    secure: boolean;
    httpOnly: boolean;
    sameSite: 'Strict' | 'Lax' | 'None';
  };
}

export class SecureSessionManager {
  private session: SessionStore;

  constructor() {
    this.session = {
      sessionId: 'sess_anon_91a',
      isAuthenticated: false,
      cookieFlags: { secure: true, httpOnly: true, sameSite: 'Strict' }
    };
  }

  // Simulating PHP: session_regenerate_id(true)
  public login(userId: number): void {
    const oldId = this.session.sessionId;
    // Regenerate ID to destroy fixation link
    this.session.sessionId = 'sess_auth_87b';
    this.session.userId = userId;
    this.session.isAuthenticated = true;
    console.log('Regenerated Session ID: Old ' + oldId + ' replaced by ' + this.session.sessionId);
  }

  public getSession(): SessionStore {
    return this.session;
  }
}

// Simulated password verification with timing-safe comparison
export function verifyPassword(provided: string, expectedHash: string): boolean {
  // Simulating password_verify($password, $hash)
  return provided === 'SecretPass2026';
}

// 2 user authentications simulated
const sessionMgr = new SecureSessionManager();
console.log('Initial Session Auth:', sessionMgr.getSession().isAuthenticated); // false

const isPasswordCorrect = verifyPassword('SecretPass2026', '$argon2id$v=19$m=65536,t=4,p=1$...');
if (isPasswordCorrect) {
  sessionMgr.login(101); // User ID 101 logs in
}

console.log('Post-Login Session Auth:', sessionMgr.getSession().isAuthenticated); // true
console.log('Hardened Cookie Flags Verified:', sessionMgr.getSession().cookieFlags.httpOnly); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Session Fixation',
          def: {
            en: 'Attack where an adversary tricks a user into authenticating with a known session ID, hijacking access upon login.',
            bn: 'সাইবার আক্রমণ যেখানে হ্যাকার ব্যবহারকারীকে পূর্বনির্ধারিত সেশন আইডি দিয়ে লগইন করিয়ে তার অ্যাকাউন্টের সম্পূর্ণ নিয়ন্ত্রণ দখল করে।'
          }
        },
        {
          term: 'HttpOnly Cookie Flag',
          def: {
            en: 'Browser directive preventing client-side JavaScript from accessing cookies, mitigating XSS session token exfiltration.',
            bn: 'ব্রাউজার নির্দেশিকা যা ক্লায়েন্ট জাভাস্ক্রিপ্টকে কুকি পড়া থেকে বিরত রেখে ক্ষতিকর স্ক্রিপ্ট দ্বারা সেশন আইডি চুরি হওয়া রোধ করে।'
          }
        },
        {
          term: 'Argon2id Hashing',
          def: {
            en: 'State-of-the-art key derivation function resistant to both side-channel attacks and GPU/ASIC parallel cracking.',
            bn: 'পাসওয়ার্ড সুরক্ষার সর্বাধুনিক অ্যালগরিদম যা মেমোরি ও জটিল প্রক্রিয়ার মাধ্যমে জিপিইউ এবং হার্ডওয়্যার আক্রমণ রুখে দেয়।'
          }
        },
        {
          term: 'SameSite Flag',
          def: {
            en: 'Cookie attribute dictating whether cookies are sent with cross-site requests, providing robust protection against CSRF exploits.',
            bn: 'কুকি অ্যাট্রিবিউট যা বাহ্যিক ওয়েবসাইট থেকে আসা অনুরোধে ব্রাউজারকে কুকি পাঠাতে বাধা দিয়ে CSRF আক্রমণ প্রতিহত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'session-regenerate-id-fixation-ex1',
      kind: 'mcq',
      topic: 'session-fixation-defense',
      question: {
        en: 'Why is calling session_regenerate_id(true) immediately upon user login essential for web security?',
        bn: 'ব্যবহারকারী লগইন করার সাথে সাথে session_regenerate_id(true) কল করা কেন ওয়েব নিরাপত্তার জন্য অপরিহার্য?'
      },
      options: [
        {
          en: 'It destroys the pre-login session identifier and issues a fresh random ID, preventing session fixation attacks where an adversary supplied the initial session ID',
          bn: 'এটি লগইনের আগের পুরোনো সেশন আইডিটি মুছে ফেলে একটি নতুন র্যান্ডম আইডি দেয়, ফলে আক্রমণকারীর পূর্বে সরবরাহ করা সেশন আইডি দিয়ে অ্যাকাউন্ট হাইজ্যাকের ঝুঁকি থাকে না'
        },
        {
          en: 'It clears the user browser cache and history',
          bn: 'এটি ব্যবহারকারীর ব্রাউজারের ক্যাশ এবং হিস্ট্রি পরিষ্কার করে ফেলে'
        },
        {
          en: 'It shuts down the web server for 10 seconds',
          bn: 'এটি ১০ সেকেন্ডের জন্য ওয়েব সার্ভার বন্ধ করে দেয়'
        },
        {
          en: 'It deletes the user password from the database',
          bn: 'এটি ডেটাবেস থেকে ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Session fixation exploits pre-existing IDs; regenerating a new ID on privilege elevation neutralizes the attack.',
        bn: 'সেশন ফিক্সেশন পুরানো আইডির সুযোগ নেয়; লগইনের সময় নতুন আইডি তৈরি করলে আক্রমণকারী আর প্রবেশ করতে পারে না।'
      },
      explanation: {
        en: 'Passing true to session_regenerate_id destroys the old unauthenticated session token on disk immediately.',
        bn: 'true প্যারামিটার দিলে পুরোনো অনিরাপদ সেশন টোকেন ডিস্ক থেকে সাথে সাথে মুছে ফেলে নতুন সুরক্ষিত সেশন চালু হয়।'
      }
    },
    {
      id: 'httponly-cookie-flag-purpose-ex2',
      kind: 'mcq',
      topic: 'httponly-cookie-protection',
      question: {
        en: 'What specific protection does the HttpOnly cookie attribute provide to PHPSESSID session cookies?',
        bn: 'PHPSESSID সেশন কুকিতে HttpOnly অ্যাট্রিবিউটটি মূলত কোন নির্দিষ্ট সুরক্ষা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It blocks client-side JavaScript (document.cookie) from accessing the session cookie, stopping attackers from stealing tokens via XSS scripts',
          bn: 'এটি ব্রাউজারের জাভাস্ক্রিপ্টকে (document.cookie) সেশন কুকি পড়তে বাধা দেয়, ফলে কোনো XSS আক্রমণ হলেও হ্যাকার সেশন আইডি চুরি করতে পারে না'
        },
        {
          en: 'It forces the website to load only in the Google Chrome browser',
          bn: 'এটি ওয়েবসাইটকে কেবল গুগল ক্রোম ব্রাউজারেই খুলতে বাধ্য করে'
        },
        {
          en: 'It encrypts the HTML text using 128-bit encryption',
          bn: 'এটি ১২৮-বিট এনক্রিপশন দিয়ে এইচটিএমএল টেক্সট এনক্রিপ্ট করে'
        },
        {
          en: 'It prevents the user from taking screenshots of the web page',
          bn: 'এটি ব্যবহারকারীকে ওয়েব পেজের স্ক্রিনশট নেওয়া থেকে বিরত রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'HttpOnly restricts cookie transmission to HTTP headers, denying access to browser JavaScript APIs.',
        bn: 'HttpOnly কুকিকে কেবল HTTP হেডারে সীমাবদ্ধ রাখে এবং জাভাস্ক্রিপ্ট এপিআই থেকে নাগালের বাইরে রাখে।'
      },
      explanation: {
        en: 'HttpOnly ensures that even if an XSS script vulnerability exists on the page, the session identifier remains protected.',
        bn: 'ওয়েব পেজে কোনো XSS দুর্বলতা থাকলেও HttpOnly নিশ্চিত করে যে সেশন কুকি কখনো জাভাস্ক্রিপ্ট দ্বারা হস্তগত হবে না।'
      }
    },
    {
      id: 'argon2id-vs-md5-security-ex3',
      kind: 'mcq',
      topic: 'password-hashing-argon2id',
      question: {
        en: 'Why is password_hash($pass, PASSWORD_ARGON2ID) vastly superior to older hashing algorithms like md5() or sha1()?',
        bn: 'পুরানো হ্যাশিং অ্যালগরিদম যেমন md5() বা sha1() এর চেয়ে password_hash($pass, PASSWORD_ARGON2ID) বহুগুণ শ্রেষ্ঠ কেন?'
      },
      options: [
        {
          en: 'Argon2id uses memory-hard functions and unique cryptographic salts, making mass parallel GPU and ASIC brute-force attacks computationally impractical',
          bn: 'Argon2id মেমোরি-হার্ড প্রক্রিয়া এবং অনন্য ক্রিপ্টোগ্রাফিক সল্ট ব্যবহার করে, যার ফলে শক্তিশালী জিপিইউ ও হার্ডওয়্যার দিয়ে ব্রুট-ফোর্স আক্রমণ চালানো অসম্ভব হয়ে পড়ে'
        },
        {
          en: 'Argon2id makes user passwords only 4 letters long',
          bn: 'Argon2id ব্যবহারকারীর পাসওয়ার্ডকে মাত্র ৪ অক্ষরের বানিয়ে দেয়'
        },
        {
          en: 'MD5 is illegal in the United States and Canada',
          bn: 'মার্কিন যুক্তরাষ্ট্র ও কানাডায় MD5 ব্যবহার করা বেআইনি'
        },
        {
          en: 'Argon2id runs without consuming any CPU cycles',
          bn: 'Argon2id কোনো প্রসেসর ক্ষমতা ব্যবহার না করেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fast hashes (MD5, SHA) are designed for speed, whereas password hashing requires deliberate computational cost.',
        bn: 'MD5 দ্রুত ফাইল পরীক্ষার জন্য তৈরি; পাসওয়ার্ড সুরক্ষার জন্য ইচ্ছাকৃতভাবে সময় ও মেমোরি ব্যয় করা অ্যালগরিদম দরকার।'
      },
      explanation: {
        en: 'Argon2id requires massive physical memory and computation per attempt, defeating GPU rainbow table attacks.',
        bn: 'Argon2id প্রচুর মেমোরি দাবি করে, ফলে হ্যাকারদের দ্রুত কোটি কোটি হ্যাশ মেলানোর চেষ্টা সম্পূর্ণ ব্যর্থ হয়।'
      }
    },
    {
      id: 'samesite-strict-csrf-defense-ex4',
      kind: 'mcq',
      topic: 'samesite-strict-cookie-attribute',
      question: {
        en: 'How does configuring SameSite=Strict on session cookies protect authenticated users from CSRF attacks?',
        bn: 'সেশন কুকিতে SameSite=Strict কনফিগার করলে তা কীভাবে লগইন থাকা ব্যবহারকারীকে CSRF আক্রমণ থেকে রক্ষা করে?'
      },
      options: [
        {
          en: 'The browser completely suppresses sending the session cookie when following links or making requests originating from third-party external websites',
          bn: 'যেকোনো বাহ্যিক তৃতীয় পক্ষের ওয়েবসাইট থেকে পাঠানো অনুরোধ বা লিংকের ক্ষেত্রে ব্রাউজার সেশন কুকি পাঠানো সম্পূর্ণ বন্ধ রাখে'
        },
        {
          en: 'It blocks users from clicking back buttons in their browser',
          bn: 'এটি ব্রাউজারে ব্যাক বাটনে ক্লিক করা আটকে দেয়'
        },
        {
          en: 'It logs the user out after 10 seconds of inactivity',
          bn: 'এটি ১০ সেকেন্ড নিষ্ক্রিয় থাকলে ব্যবহারকারীকে লগআউট করে দেয়'
        },
        {
          en: 'SameSite only operates on desktop computers with wired Ethernet',
          bn: 'SameSite কেবল তারযুক্ত ইন্টারনেটের ডেস্কটপ কম্পিউটারে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Strict same-site policies restrict cookie transmission exclusively to first-party contexts.',
        bn: 'Strict নীতি কেবল আপনার নিজস্ব ওয়েবসাইটের ভেতরের অনুরোধেই কুকি পাঠানোর অনুমতি দেয়।'
      },
      explanation: {
        en: 'SameSite=Strict prevents external malicious domains from leveraging ambient user authentication credentials.',
        bn: 'SameSite=Strict নিশ্চিত করে অন্য কোনো ক্ষতিকর সাইটের লিংক থেকে এলে সেশন কুকি যুক্ত হবে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-sessions-and-security',
    title: {
      en: 'PHP Stateful Sessions and Web Security Quiz',
      bn: 'পিএইচপি সেশন এবং ওয়েব সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-password-needs-rehash-utility',
        kind: 'mcq',
        topic: 'password-needs-rehash-migration',
        question: {
          en: 'What architectural benefit does the password_needs_rehash($hash, $algo, $options) function provide?',
          bn: 'password_needs_rehash($hash, $algo, $options) ফাংশনটি সিস্টেমে কোন স্থাপত্যিক সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It checks whether an existing stored hash was generated with weaker cost factors or older algorithms, enabling transparent password upgrades upon successful login',
            bn: 'এটি পরীক্ষা করে দেখে যে সংরক্ষিত হ্যাশটি পুরানো অ্যালগরিদম বা কম শক্তিশালী প্যারামিটারে তৈরি কি না, ফলে লগইনের সাথে সাথে নির্বিঘ্নে পাসওয়ার্ড নতুন অ্যালগরিদমে আপগ্রেড করা যায়'
          },
          {
            en: 'It forces users to change their password every 7 days',
            bn: 'এটি ব্যবহারকারীদের প্রতি ৭ দিন পর পর পাসওয়ার্ড পরিবর্তন করতে বাধ্য করে'
          },
          {
            en: 'It sends the plain-text password to the company server log',
            bn: 'এটি সার্ভারের লগ ফাইলে সাধারণ টেক্সট পাসওয়ার্ড সংরক্ষণ করে'
          },
          {
            en: 'It prevents passwords from containing numbers',
            bn: 'এটি পাসওয়ার্ডে সংখ্যা ব্যবহার নিষিদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'As hardware improves over time, password_needs_rehash allows zero-friction cryptographic cost increases.',
          bn: 'হার্ডওয়্যার শক্তিশালী হওয়ার সাথে সাথে এটি কোনো ঝামেলা ছাড়াই পুরানো হ্যাশকে আধুনিক শক্তিশালী মানে রূপান্তর করতে দেয়।'
        },
        explanation: {
          en: 'password_needs_rehash permits seamless cryptographic migrations without requiring mass password resets.',
          bn: 'ব্যবহারকারীকে বিরক্ত না করে লগইনের সময়ই পাসওয়ার্ডকে নতুন শক্তিশালী হ্যাশে আপডেট করতে এই ফাংশন অতুলনীয়।'
        }
      },
      {
        id: 'quiz-session-destroy-semantics',
        kind: 'mcq',
        topic: 'session-destroy-unsetting',
        question: {
          en: 'When implementing a secure user logout, what is the correct sequence of operations in PHP?',
          bn: 'পিএইচপিতে নিরাপদ ইউজার লগআউট বাস্তবায়নের সঠিক ধাপ কোনটি?'
        },
        options: [
          {
            en: '$_SESSION = []; setcookie(session_name(), "", time() - 3600); session_destroy(); to clear memory, delete the client cookie, and wipe server storage',
            bn: '$_SESSION = []; setcookie(session_name(), "", time() - 3600); session_destroy(); যার মাধ্যমে মেমোরি খালি করা, ক্লায়েন্ট কুকি মুছে ফেলা এবং সার্ভার স্টোরেজ ধ্বংস করা হয়'
          },
          {
            en: 'Simply typing session_destroy() and leaving the session array populated in RAM',
            bn: 'কেবল session_destroy() লেখা এবং মেমোরিতে তথ্য রেখে দেওয়া'
          },
          {
            en: 'Restarting the computer server',
            bn: 'সার্ভার কম্পিউটারটি রিস্টার্ট করা'
          },
          {
            en: 'Deleting the user record from the MySQL database',
            bn: 'MySQL ডেটাবেস থেকে ব্যবহারকারীর রেকর্ডটি মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'A complete logout must clear the memory array ($_SESSION), invalidate the browser cookie, and destroy the server file.',
          bn: 'একটি পূর্ণাঙ্গ লগআউটে মেমোরির অ্যারে পরিষ্কার, ব্রাউজার কুকি বাতিল এবং সার্ভারের সেশন ফাইল তিনটিই ডিলিট করতে হয়।'
        },
        explanation: {
          en: 'True logout requires wiping $_SESSION in RAM, expiring the cookie timestamp on the client, and calling session_destroy() on disk.',
          bn: 'মেমোরি শূন্য করা, কুকির মেয়াদ অতীত সময়ে নিয়ে বাতিল করা এবং ডিস্ক ফাইল মুছে ফেলাই সবচেয়ে নিরাপদ লগআউট প্রক্রিয়া।'
        }
      },
      {
        id: 'quiz-session-storage-file-concurrency',
        kind: 'mcq',
        topic: 'session-file-locking-concurrency',
        question: {
          en: 'Why do concurrent AJAX requests from the same user session sometimes queue and execute sequentially in standard PHP?',
          bn: 'একই ব্যবহারকারীর সেশন থেকে একসাথে একাধিক AJAX কল এলে সাধারণ পিএইচপিতে সেগুলো কেন একটির পর একটি সারিবদ্ধভাবে কার্যকর হয়?'
        },
        options: [
          {
            en: 'PHP session handler places an exclusive lock on the session storage file until the request completes or session_write_close() is called',
            bn: 'পিএইচপি সেশন ফাইলটিতে এক্সক্লুসিভ লক লাগিয়ে রাখে যতক্ষণ না অনুরোধটি শেষ হয় বা session_write_close() কল করে লক মুক্ত করা হয়'
          },
          {
            en: 'Browsers are legally prohibited from sending more than 1 request at a time',
            bn: 'একসাথে ১ টির বেশি অনুরোধ পাঠানো ব্রাউজারের জন্য আইনত নিষিদ্ধ'
          },
          {
            en: 'PHP can only execute on single-core 1995 processors',
            bn: 'পিএইচপি কেবল ১৯৯৫ সালের সিঙ্গেল-কোর প্রসেসরে চলতে পারে'
          },
          {
            en: 'AJAX requests are automatically downgraded to 56k modem speeds',
            bn: 'AJAX অনুরোধগুলোর গতি স্বয়ংক্রিয়ভাবে কমিয়ে দেওয়া হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Session file locking prevents race conditions, but blocks parallel requests unless released with session_write_close().',
          bn: 'সেশন ফাইল লক ডেটার অখণ্ডতা রক্ষা করে, কিন্তু session_write_close() না দিলে সমান্তরাল অনুরোধগুলো আটকে রাখে।'
        },
        explanation: {
          en: 'PHP locks session files to prevent concurrent write corruption; call session_write_close() as soon as writes finish to unlock.',
          bn: 'ডেটা বিকৃতি রোধে পিএইচপি ফাইল লক করে রাখে; সেশনের কাজ শেষ হলেই session_write_close() দিয়ে লক খুলে দেওয়া উত্তম।'
        }
      },
      {
        id: 'quiz-argon2id-cryptographic-salt',
        kind: 'mcq',
        topic: 'cryptographic-salt-generation',
        question: {
          en: 'Why does password_hash() generate a distinct random salt for every individual password hashing execution?',
          bn: 'password_hash() প্রতিবার পাসওয়ার্ড হ্যাশ করার সময় কেন একটি আলাদা দৈব সল্ট তৈরি করে?'
        },
        options: [
          {
            en: 'It ensures that two users with identical passwords end up with completely different hash strings, defeating precomputed rainbow table attacks',
            bn: 'এটি নিশ্চিত করে যে দুজন ব্যবহারকারীর পাসওয়ার্ড হুবহু একই হলেও তাদের হ্যাশ স্ট্রিং সম্পূর্ণ ভিন্ন হবে, ফলে প্রি-কম্পিউটেড রেইনবো টেবিল আক্রমণ ব্যর্থ হয়'
          },
          {
            en: 'It changes the color of the user avatar image',
            bn: 'এটি ব্যবহারকারীর প্রোফাইল ছবির রঙ পরিবর্তন করে'
          },
          {
            en: 'It reduces the database file size by 50 percent',
            bn: 'এটি ডেটাবেস ফাইলের আকার ৫০ শতাংশ ছোট করে'
          },
          {
            en: 'It translates the hash into Japanese characters',
            bn: 'এটি হ্যাশটিকে জাপানি অক্ষরে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Random salts prevent identical plaintexts from yielding identical hash digests.',
          bn: 'দৈব সল্ট নিশ্চিত করে একই পাসওয়ার্ড হলেও তাদের হ্যাশ কখনো এক হবে না।'
        },
        explanation: {
          en: 'Unique cryptographic salts prevent adversaries from cracking multiple identical passwords with a single precomputed lookup.',
          bn: 'অনন্য সল্ট ব্যবহারের কারণে হ্যাকারদের পূর্বপ্রস্তুতকৃত হ্যাশ টেবিল বা রেইনবো টেবিল দিয়ে পাসওয়ার্ড ভাঙার সুযোগ থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-classic-serve',
    title: {
      en: 'Production Architecture: OPcache, FastCGI & Architecture Capstone',
      bn: 'প্রোডাকশন আর্কিটেকচার: OPcache, FastCGI এবং আর্কিটেকচার ক্যাপস্টোন'
    }
  }
};
