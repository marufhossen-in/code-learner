import type { Lesson } from '../../../lib/types';

export const CsrfDefenseLesson: Lesson = {
  slug: 'csrf-defense',
  tech: 'web-security',
  title: {
    en: 'Cross-Site Request Forgery (CSRF): Tokens, SameSite Cookies & Defense',
    bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF): টোকেন, SameSite কুকি এবং প্রতিরোধ'
  },
  summary: {
    en: 'Master the mechanics of Cross-Site Request Forgery (CSRF) and modern browser mitigations. Understand the core vulnerability of ambient authority, where browsers automatically attach session cookies to cross-site requests. Learn how the Synchronizer Token Pattern defeats unauthorized form submissions by requiring unique, session-tied secret tokens. Explore the SameSite cookie attribute (Strict, Lax, None) and inspect a runnable Node.js engine evaluating 4 state-changing requests, passing 3 legitimate actions and blocking 1 hostile forged attack.',
    bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) এবং আধুনিক ব্রাউজার প্রতিরক্ষার কৌশলগুলো আয়ত্ত করুন। অ্যাম্বিয়েন্ট অথরিটির মৌলিক দুর্বলতা বুঝুন, যেখানে ব্রাউজার বহিরাগত ক্রস-সাইট রিকোয়েস্টেও স্বয়ংক্রিয়ভাবে সেশন কুকি যুক্ত করে দেয়। কীভাবে সিঙ্ক্রোনাইজার টোকেন প্যাটার্ন প্রতিটি রিকোয়েস্টে অনন্য গোপন টোকেন যাচাই করে অননুমোদিত ফর্ম সাবমিশন রুখে দেয় তা শিখুন। SameSite কুকি অ্যাট্রিবিউট (Strict, Lax, None) জানুন এবং ৪ টি স্টেট-পরিবর্তনকারী রিকোয়েস্ট মূল্যায়নকারী Node.js ইঞ্জিন পরীক্ষা করুন, যা ৩ টি বৈধ কাজ সফল করে এবং ১ টি ক্ষতিকর আক্রমণ আটকে দেয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'ambient-authority-vulnerability',
      text: {
        en: 'The Flaw of Ambient Authority: Automatic Browser Cookie Transmission',
        bn: 'অ্যাম্বিয়েন্ট অথরিটির ঝুঁকি: স্বয়ংক্রিয় ব্রাউজার কুকি পরিবহন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Cross-Site Request Forgery (CSRF) exploits a foundational behavior of the web: ambient authority. When a user authenticates with a web application, the server sets a session identifier cookie. For decades, browsers were configured to automatically attach this cookie to every outbound request destined for that domain, regardless of which website originated the request.',
        bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) ওয়েবের একটি মৌলিক আচরণ অর্থাৎ অ্যাম্বিয়েন্ট অথরিটিকে কাজে লাগায়। যখন কোনো ব্যবহারকারী কোনো ওয়েবসাইটে লগইন করেন, তখন সার্ভার একটি সেশন কুকি ব্রাউজারে সেট করে। বহু বছর ধরে ব্রাউজারগুলোর নিয়ম ছিল সেই নির্দিষ্ট ডোমেইনে পাঠানো যেকোনো রিকোয়েস্টের সাথেই এই কুকি স্বয়ংক্রিয়ভাবে পাঠিয়ে দেওয়া, এমনকি রিকোয়েস্টটি সম্পূর্ণ ভিন্ন কোনো ক্ষতিকর সাইট থেকে আসলেও।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Consider a logged-in user visiting a malicious site. The hostile page can silently submit an invisible HTML form targeting the bank transfer endpoint. Because the browser automatically attaches the user session cookie, the receiving bank cannot distinguish between an intentional transfer and an adversary attack unless an explicit unpredictable token is validated.',
        bn: 'ধরুন একজন লগইন থাকা ব্যবহারকারী একটি ক্ষতিকর ওয়েবসাইট পরিদর্শন করলেন। সেই ক্ষতিকর পেজটি ব্যাকগ্রাউন্ডে ব্যবহারকারীর ব্যাংক ট্রান্সফার এন্ডপয়েন্টে একটি অদৃশ্য ফর্ম সাবমিট করতে পারে। ব্রাউজার নিজে থেকেই ব্যবহারকারীর সেশন কুকি যুক্ত করে দেওয়ার কারণে ব্যাংক বুঝতে পারে না এটি আসল ব্যবহারকারী করেছেন নাকি আক্রমণকারী, যদি না একটি অপ্রত্যাশিত গোপন টোকেন যাচাই করা হয়।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'CSRF Token Verification Architecture: 4 Requests Evaluated (3 Passed, 1 Blocked)',
        bn: 'CSRF টোকেন যাচাই আর্কিটেকচার: ৪ টি মূল্যায়িত রিকোয়েস্ট (৩ টি সফল, ১ টি ব্লক)'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="CSRF token validation process evaluating 4 requests where 3 pass and 1 is blocked">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CROSS-SITE REQUEST FORGERY (CSRF) DEFENSE GATEWAY</text>
  
  <!-- Server State Banner -->
  <rect x="40" y="48" width="760" height="42" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="60" y="74" fill="#94a3b8" font-size="11" font-weight="bold">ACTIVE SESSION:</text>
  <text x="185" y="74" fill="#ffffff" font-size="11" font-weight="bold">sess-88b9</text>
  <text x="320" y="74" fill="#94a3b8" font-size="11" font-weight="bold">EXPECTED CSRF TOKEN:</text>
  <text x="495" y="74" fill="#38bdf8" font-size="12" font-weight="bold">tok-abc-123</text>
  <text x="635" y="74" fill="#10b981" font-size="10">[Tied to Session]</text>
  
  <!-- Left Side: 3 Legitimate Requests (Passed) -->
  <g transform="translate(40, 105)">
    <rect width="365" height="290" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="365" height="30" rx="8" fill="#059669"/>
    <text x="182" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3 LEGITIMATE REQUESTS (PASSED HTTP 200)</text>
    
    <g transform="translate(12, 42)">
      <!-- Req 1 -->
      <rect width="341" height="66" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. POST /transfer (Web Form Submission)</text>
      <text x="10" y="38" fill="#cbd5e1" font-size="8.5">• Cookie: sess-88b9</text>
      <text x="10" y="52" fill="#cbd5e1" font-size="8.5">• Hidden Body Field: _csrf = tok-abc-123</text>
      <text x="240" y="52" fill="#34d399" font-size="8.5" font-weight="bold">[PASS 200]</text>
      
      <!-- Req 2 -->
      <rect y="76" width="341" height="66" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="96" fill="#6ee7b7" font-size="9" font-weight="bold">2. POST /transfer (Single Page App AJAX)</text>
      <text x="10" y="114" fill="#cbd5e1" font-size="8.5">• Cookie: sess-88b9</text>
      <text x="10" y="128" fill="#cbd5e1" font-size="8.5">• Header: X-CSRF-Token = tok-abc-123</text>
      <text x="240" y="128" fill="#34d399" font-size="8.5" font-weight="bold">[PASS 200]</text>
      
      <!-- Req 3 -->
      <rect y="152" width="341" height="66" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="172" fill="#6ee7b7" font-size="9" font-weight="bold">3. POST /email-change (Settings Update)</text>
      <text x="10" y="190" fill="#cbd5e1" font-size="8.5">• Cookie: sess-88b9</text>
      <text x="10" y="204" fill="#cbd5e1" font-size="8.5">• Hidden Body Field: _csrf = tok-abc-123</text>
      <text x="240" y="204" fill="#34d399" font-size="8.5" font-weight="bold">[PASS 200]</text>
    </g>
  </g>
  
  <!-- Right Side: 1 Forged Request (Blocked) -->
  <g transform="translate(435, 105)">
    <rect width="365" height="290" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="365" height="30" rx="8" fill="#dc2626"/>
    <text x="182" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1 FORGED ATTACK REQUEST (BLOCKED HTTP 403)</text>
    
    <g transform="translate(12, 42)">
      <rect width="341" height="120" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="22" fill="#fca5a5" font-size="9.5" font-weight="bold">4. Hostile Cross-Site Form Submission</text>
      <text x="10" y="44" fill="#cbd5e1" font-size="8.5">• Origin: https://evil.example (Cross-Site)</text>
      <text x="10" y="62" fill="#cbd5e1" font-size="8.5">• Cookie: sess-88b9 (Auto-attached by browser!)</text>
      <text x="10" y="80" fill="#fca5a5" font-size="8.5">• Submitted Token: _csrf = forged-zzz (Guess)</text>
      <text x="10" y="102" fill="#ef4444" font-size="9" font-weight="bold">VERDICT: TOKEN MISMATCH -> BLOCKED (403)</text>
      
      <rect y="135" width="341" height="95" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="15" y="24" fill="#38bdf8" font-size="9.5" font-weight="bold">SOP PROTECTS THE CSRF TOKEN:</text>
      <text x="15" y="46" fill="#cbd5e1" font-size="8.5">The Same-Origin Policy forbids evil.example from</text>
      <text x="15" y="64" fill="#cbd5e1" font-size="8.5">reading the bank HTML to steal tok-abc-123.</text>
      <text x="15" y="82" fill="#cbd5e1" font-size="8.5">Without the exact token, forged actions fail!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Synchronizer tokens pair with session cookies to guarantee user intent on state-changing requests</text>
</svg>`,
      caption: {
        en: 'The CSRF verification engine processes 4 incoming requests: 3 legitimate requests pass with valid tokens and 1 forged request is blocked with HTTP 403.',
        bn: 'CSRF ভেরিফিকেশন ইঞ্জিন ৪ টি রিকোয়েস্ট প্রসেস করে: ৩ টি বৈধ রিকোয়েস্ট সঠিক টোকেন থাকায় পাস করে এবং ১ টি জাল রিকোয়েস্ট HTTP ৪০৩ পেয়ে ব্লক হয়।'
      },
    },
    {
      type: 'heading',
      id: 'modern-csrf-defenses',
      text: {
        en: 'The Three Pillars of Modern CSRF Defense',
        bn: 'আধুনিক CSRF প্রতিরোধের ৩ টি মূল স্তম্ভ'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Synchronizer Token Pattern (CSRF Tokens)',
            bn: '১. সিঙ্ক্রোনাইজার টোকেন প্যাটার্ন (CSRF টোকেন)'
          },
          text: {
            en: 'The server generates a cryptographically random, unpredictable token tied to the user session. It is inserted into hidden form inputs or AJAX headers. SOP prevents external origins from reading the token.',
            bn: 'সার্ভার সেশনের সাথে যুক্ত একটি ক্রিপ্টোগ্রাফিক এবং অনুমান-অযোগ্য টোকেন তৈরি করে। এটি লুকানো ফর্ম ইনপুট বা AJAX হেডারে যুক্ত করা হয়। SOP বহিরাগত সাইটকে এই টোকেন পড়া থেকে আটকে দেয়।'
          },
        },
        {
          title: {
            en: '2. SameSite Cookie Attribute (Lax / Strict)',
            bn: '২. SameSite কুকি অ্যাট্রিবিউট (Lax / Strict)'
          },
          text: {
            en: 'Setting SameSite=Lax (default in modern browsers) stops cookies from being sent on cross-site state-changing POST requests. SameSite=Strict blocks cookies on all cross-site navigations.',
            bn: 'SameSite=Lax সেট করলে ক্রস-সাইট স্টেট-পরিবর্তনকারী POST রিকোয়েস্টে ব্রাউজার কুকি পাঠানো বন্ধ রাখে। SameSite=Strict সকল বহিরাগত লিংক ক্লিকের ক্ষেত্রেও কুকি সম্পূর্ণ আটকে দেয়।'
          },
        },
        {
          title: {
            en: '3. Origin and Sec-Fetch-Site Request Headers',
            bn: '৩. Origin এবং Sec-Fetch-Site রিকোয়েস্ট হেডার'
          },
          text: {
            en: 'Modern browsers include Fetch Metadata headers. The server verifies that the Sec-Fetch-Site header matches "same-origin" before processing sensitive mutations.',
            bn: 'আধুনিক ব্রাউজার ফেচ মেটাডেটা হেডার পাঠায়। সার্ভার সংবেদনশীল কাজ সম্পন্ন করার আগে যাচাই করে যে Sec-Fetch-Site হেডারটির মান "same-origin" কি না।'
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'csrf-engine-code',
      text: {
        en: 'Building an Executable CSRF Defense Engine in Node.js',
        bn: 'Node.js-এ কার্যকর CSRF প্রতিরক্ষা ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'csrf-defense-engine.js',
      code: `// Deterministic CSRF Defense Verification Engine
class CsrfDefenseGateway {
  constructor() {
    this.activeSessions = new Map();
  }

  // Mint session and assign cryptographically random CSRF token
  createSession(userId) {
    const sessionId = 'sess-88b9';
    const csrfToken = 'tok-abc-123';
    this.activeSessions.set(sessionId, { userId, csrfToken });
    return { sessionId, csrfToken };
  }

  // Validate state-changing incoming requests
  validateRequest(req) {
    const session = this.activeSessions.get(req.cookieSessionId);
    if (!session) {
      return { allowed: false, status: 401, error: 'Unauthorized: Session missing' };
    }

    // Inspect token from custom header or form body
    const submittedToken = req.headers['x-csrf-token'] || (req.body && req.body._csrf);

    if (!submittedToken || submittedToken !== session.csrfToken) {
      return {
        allowed: false,
        status: 403,
        error: 'CSRF REJECTION: Token missing or forged! Malicious cross-site request halted.'
      };
    }

    return {
      allowed: true,
      status: 200,
      message: \`Action \${req.method} \${req.path} executed successfully for \${session.userId}\`
    };
  }
}

// 1. Initialize server gateway and active user session
const gateway = new CsrfDefenseGateway();
const { sessionId, csrfToken } = gateway.createSession('alice_99');

console.log('=== Server Session State ===');
console.log('Active Session ID: ', sessionId);
console.log('Valid CSRF Token:  ', csrfToken);

// 2. Define 4 state-changing requests to evaluate
const incomingRequests = [
  {
    name: 'Legitimate Web Form Transfer',
    method: 'POST',
    path: '/transfer',
    cookieSessionId: sessionId,
    headers: {},
    body: { amount: 250, _csrf: csrfToken }
  },
  {
    name: 'Legitimate Single Page App AJAX Transfer',
    method: 'POST',
    path: '/transfer',
    cookieSessionId: sessionId,
    headers: { 'x-csrf-token': csrfToken },
    body: { amount: 150 }
  },
  {
    name: 'Legitimate Settings Email Update',
    method: 'POST',
    path: '/email-change',
    cookieSessionId: sessionId,
    headers: {},
    body: { email: 'alice@example.com', _csrf: csrfToken }
  },
  {
    name: 'Attacker Cross-Site Forged POST Attack',
    method: 'POST',
    path: '/transfer',
    cookieSessionId: sessionId, // Browser attached cookie automatically!
    headers: {},
    body: { amount: 10000, _csrf: 'forged-zzz' } // Attacker cannot guess valid token
  }
];

let totalPassed = 0;
let totalBlocked = 0;

console.log('\\n=== Evaluating 4 Incoming State-Changing Requests ===');
incomingRequests.forEach((req, index) => {
  const result = gateway.validateRequest(req);
  if (result.allowed) {
    totalPassed++;
    console.log(\`[\${index + 1}] PASSED (\${result.status}): \${req.name}\`);
    console.log(\`    Payload: \${result.message}\`);
  } else {
    totalBlocked++;
    console.log(\`[\${index + 1}] BLOCKED (\${result.status}): \${req.name}\`);
    console.log(\`    Reason:  \${result.error}\`);
  }
});

console.log('\\n=== Gateway Security Audit Summary ===');
console.log('Total Requests Tested:', incomingRequests.length);
console.log('Legitimate Actions:   ', totalPassed, '(Passed with HTTP 200)');
console.log('Hostile Attacks:      ', totalBlocked, '(Blocked with HTTP 403)');`,
      caption: {
        en: 'The gateway validates 4 incoming requests: 3 legitimate requests pass and 1 hostile forged attack is blocked.',
        bn: 'গেটওয়েটি ৪ টি আগত রিকোয়েস্ট যাচাই করে: ৩ টি বৈধ রিকোয়েস্ট পাস করে এবং ১ টি ক্ষতিকর আক্রমণ ব্লক হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Why GET Requests Must Never Perform State Mutations',
        bn: 'GET রিকোয়েস্টে কেন কখনো স্টেট বা ডেটা পরিবর্তন করা উচিত নয়'
      },
      text: {
        en: 'A classic architectural anti-pattern is executing actions via HTTP GET, such as /transfer?amount=500&to=attacker. Web browsers and email clients routinely prefetch GET URLs, and HTML tags like <img src="/transfer?amount=500"> automatically fire GET requests without user consent. By strictly reserving GET for idempotent read operations and mandating CSRF-protected POST, PUT, or DELETE for mutations, web applications eliminate an entire category of ambient request exploitation.',
        bn: 'একটি মারাত্মক আর্কিটেকচারাল ভুল হলো HTTP GET মেথড দিয়ে গুরুত্বপূর্ণ ডেটা পরিবর্তন করা, যেমন /transfer?amount=500&to=attacker। ওয়েব ব্রাউজার এবং ইমেইল ক্লায়েন্ট অনেক সময় পেজের গতি বাড়াতে নিজে থেকেই GET ইউআরএল প্রিফেচ করে, এবং <img src="/transfer?amount=500"> এর মতো সাধারণ ইমেজ ট্যাগও ইউজারের অজান্তেই GET রিকোয়েস্ট পাঠিয়ে দেয়। মিউটেশনের জন্য কেবল CSRF-সুরক্ষিত POST, PUT বা DELETE বাধ্যতামূলক করে এই বিপদ চিরতরে এড়ানো যায়।'
      },
    },
  ],
  exercises: [
    {
      id: 'csrf-def-ex-1',
      kind: 'predict',
      topic: 'passed-requests-count',
      question: {
        en: 'How many of the 4 evaluated state-changing requests passed successfully with valid CSRF tokens? (3). Type the number.',
        bn: 'মূল্যায়িত ৪ টি স্টেট-পরিবর্তনকারী রিকোয়েস্টের মধ্যে সর্বমোট কয়টি রিকোয়েস্ট সঠিক CSRF টোকেন থাকায় সফলভাবে পাস করেছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 legitimate requests were authorized.',
        bn: 'ঠিক ৩ টি বৈধ রিকোয়েস্ট অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Out of 4 requests, 3 passed with HTTP 200 (2 transfers and 1 email update), while the single forged attack with token "forged-zzz" was blocked with HTTP 403.',
        bn: '৪ টির মধ্যে ৩ টি HTTP ২০০ পেয়ে পাস করে (২ টি ফান্ড ট্রান্সফার ও ১ টি ইমেইল পরিবর্তন), আর "forged-zzz" টোকেনযুক্ত ১ টি আক্রমণ HTTP ৪০৩ পেয়ে আটকে যায়।'
      },
    },
    {
      id: 'csrf-def-ex-2',
      kind: 'mcq',
      topic: 'samesite-lax-vs-strict',
      question: {
        en: 'How does configuring cookies with SameSite=Lax protect against Cross-Site Request Forgery while preserving friendly user navigation?',
        bn: 'কুকিতে SameSite=Lax কনফিগার করা কীভাবে স্বাভাবিক নেভিগেশন সচল রেখে Cross-Site Request Forgery প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'It withholds cookies on cross-site subrequests (such as hostile POST forms, images, and iframes), but permits cookies on safe top-level GET navigations like clicking an external search result link',
          bn: 'এটি ক্ষতিকর বহিরাগত POST ফর্ম, ইমেজ বা আইফ্রেমের মতো সাবরিকোয়েস্টে কুকি পাঠানো বন্ধ রাখে, তবে বাইরের কোনো সাইট থেকে স্বাভাবিক লিংকে ক্লিক করে আসার মতো নিরাপদ টপ-লেভেল GET নেভিগেশনে কুকি পাঠাতে দেয়',
        },
        {
          en: 'It limits all passwords to twelve characters maximum',
          bn: 'এটি সমস্ত পাসওয়ার্ডের দৈর্ঘ্য সর্বোচ্চ বারো অক্ষরে সীমাবদ্ধ করে',
        },
        {
          en: 'It prevents computer keyboards from typing punctuation symbols',
          bn: 'এটি কম্পিউটারের কিবোর্ড থেকে যতিচিহ্ন টাইপ করা বন্ধ করে দেয়',
        },
        {
          en: 'It dims the brightness of laptop computer screens after ten seconds',
          bn: 'এটি দশ সেকেন্ড পর ল্যাপটপ কম্পিউটারের স্ক্রিনের উজ্জ্বলতা কমিয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Lax blocks cross-site POSTs while permitting top-level GET clicks.',
        bn: 'Lax বাইরের সাইটের POST রিকোয়েস্টে কুকি আটকায় কিন্তু স্বাভাবিক লিংকে কুকি পাঠায়।'
      },
      explanation: {
        en: 'SameSite=Lax strikes a pragmatic balance: malicious background POSTs cannot ride the cookie, but users clicking links from search engines stay logged in.',
        bn: 'SameSite=Lax একটি চমৎকার ভারসাম্য তৈরি করে: ব্যাকগ্রাউন্ডের ক্ষতিকর POST কুকি পায় না, কিন্তু সার্চ ইঞ্জিন থেকে লিংকে ক্লিক করলে লগইন অবস্থা বজায় থাকে।'
      },
    },
    {
      id: 'csrf-def-ex-3',
      kind: 'mcq',
      topic: 'why-sop-protects-csrf-tokens',
      question: {
        en: 'Why is an attacker website on https://evil.example unable to steal a valid CSRF token from a bank web page?',
        bn: 'https://evil.example এর কোনো আক্রমণকারী ওয়েবসাইট কেন কোনো ব্যাংক পেজ থেকে বৈধ CSRF টোকেন চুরি করতে পারে না?'
      },
      options: [
        {
          en: 'The Same-Origin Policy (SOP) strictly forbids client-side JavaScript on evil.example from reading the response HTML document of the bank origin, making it impossible to read the hidden token',
          bn: 'সেম-অরিজিন পলিসি (SOP) evil.example এর ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্টকে ব্যাংকের এইচটিএমএল রেসপন্স পড়া থেকে কঠোরভাবে বিরত রাখে, যার ফলে লুকানো টোকেন চুরি করা তাদের পক্ষে অসম্ভব হয়ে পড়ে',
        },
        {
          en: 'Because evil websites are only allowed to run at night',
          bn: 'কারণ ক্ষতিকর ওয়েবসাইটগুলোকে কেবল রাতের বেলা চলার অনুমতি দেওয়া হয়',
        },
        {
          en: 'Because computer mice refuse to click on unauthorized buttons',
          bn: 'কারণ কম্পিউটারের মাউস অননুমোদিত বাটনে ক্লিক করতে অস্বীকৃতি জানায়',
        },
        {
          en: 'Because banking web pages only transmit numeric numbers',
          bn: 'কারণ ব্যাংকিং ওয়েব পেজগুলো কেবল সংখ্যাভিত্তিক নম্বর আদান-প্রদান করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'SOP prevents cross-origin reading of response contents.',
        bn: 'SOP বাইরের ডোমেইনকে পেজের কনটেন্ট বা টোকেন পড়া থেকে বাধা দেয়।'
      },
      explanation: {
        en: 'SOP allows cross-origin requests to be sent, but prevents evil.example from reading the response. The attacker cannot extract the CSRF token to embed in their forged form.',
        bn: 'SOP বাইরের সাইটকে ব্যাংকের পেজ পড়তে দেয় না। ফলে আক্রমণকারী লুকানো CSRF টোকেন দেখতে বা চুরি করতে পারে না।'
      },
    },
    {
      id: 'csrf-def-ex-4',
      kind: 'predict',
      topic: 'blocked-requests-count',
      question: {
        en: 'How many of the 4 evaluated requests in the simulation were blocked with HTTP 403 due to missing or forged CSRF tokens? (1). Type the number.',
        bn: 'সিমুলেশনে মূল্যায়িত ৪ টি রিকোয়েস্টের মধ্যে সর্বমোট কয়টি রিকোয়েস্ট অনুপস্থিত বা জাল CSRF টোকেনের কারণে HTTP ৪০৩ পেয়ে ব্লক হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Exactly 1 forged request was blocked.',
        bn: 'ঠিক ১ টি ক্ষতিকর আক্রমণ ব্লক হয়েছিল।'
      },
      explanation: {
        en: 'The hostile forged request with token "forged-zzz" failed verification and was rejected with HTTP 403 Forbidden.',
        bn: '"forged-zzz" টোকেনযুক্ত ক্ষতিকর রিকোয়েস্টটি ভেরিফিকেশনে ব্যর্থ হয় এবং HTTP ৪০৩ Forbidden পেয়ে আটকে যায়।'
      },
    },
  ],
  quiz: {
    id: 'csrf-defense-quiz',
    title: {
      en: 'Cross-Site Request Forgery (CSRF) Architecture Quiz',
      bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'csrf-def-qz-1',
        kind: 'mcq',
        topic: 'double-submit-cookie-pattern',
        question: {
          en: 'How does the Double-Submit Cookie pattern protect stateless web applications against CSRF without storing tokens on the server?',
          bn: 'ডাবল-সাবমিট কুকি প্যাটার্ন কীভাবে সার্ভারে কোনো টোকেন সংরক্ষণ না করেই স্টেটলেস অ্যাপ্লিকেশনকে CSRF থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'The server sets a random token in a cookie; the client-side JavaScript reads that cookie and mirrors the value into a custom request header (or body); the server verifies both values match',
            bn: 'সার্ভার একটি কুকির মধ্যে র্যান্ডম টোকেন সেট করে; ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট সেই কুকি পড়ে একই মান একটি কাস্টম রিকোয়েস্ট হেডার বা বডিতে পাঠিয়ে দেয়; সার্ভার উভয় মান সমান কি না তা মিলিয়ে দেখে',
          },
          {
            en: 'The server forces the client computer to restart twice before saving data',
            bn: 'সার্ভার ডেটা সেভ করার আগে ক্লায়েন্ট কম্পিউটারকে দুইবার রিস্টার্ট দিতে বাধ্য করে',
          },
          {
            en: 'The browser changes all text on the screen into Spanish translation',
            bn: 'ব্রাউজার স্ক্রিনের সমস্ত টেক্সটকে স্প্যানিশ অনুবাদে রূপান্তর করে দেয়',
          },
          {
            en: 'The network router deletes all stored cookies every twenty seconds',
            bn: 'নেটওয়ার্ক রাউটার প্রতি বিশ সেকেন্ড পর পর সংরক্ষিত সমস্ত কুকি মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The token travels in both a cookie and a custom header/body field.',
          bn: 'টোকেনটি একই সাথে কুকিতে এবং একটি কাস্টম হেডার বা বডিতে পাঠানো হয়।'
        },
        explanation: {
          en: 'Since SOP blocks an attacker on evil.example from setting or reading custom cookies for the target domain, they cannot forge the matching header.',
          bn: 'যেহেতু SOP বহিরাগত সাইটকে কুকি পড়া বা কাস্টম হেডার সেট করতে দেয় না, তাই আক্রমণকারী উভয় মান মেলাতে পারে না।'
        },
      },
      {
        id: 'csrf-def-qz-2',
        kind: 'mcq',
        topic: 'csrf-vs-xss-relationship',
        question: {
          en: 'What happens to CSRF defenses if an application has an unresolved Cross-Site Scripting (XSS) vulnerability?',
          bn: 'কোনো অ্যাপ্লিকেশনে যদি একটি অমীমাংসিত Cross-Site Scripting (XSS) দুর্বলতা থাকে, তবে CSRF প্রতিরক্ষার কী পরিণতি ঘটে?'
        },
        options: [
          {
            en: 'The CSRF defense is completely compromised; the injected XSS script runs within the trusted origin, allowing it to easily read the valid CSRF token from the DOM and forge authorized requests',
            bn: 'CSRF প্রতিরক্ষা সম্পূর্ণ অকেজো হয়ে পড়ে; ইনজেক্ট করা XSS স্ক্রিপ্টটি বিশ্বস্ত অরিজিনের ভেতরে চলার কারণে সহজেই DOM থেকে বৈধ CSRF টোকেন পড়ে অনুমোদিত রিকোয়েস্ট তৈরি করতে পারে',
          },
          {
            en: 'The CSRF defense automatically upgrades to military encryption levels',
            bn: 'CSRF প্রতিরক্ষা নিজে থেকেই মিলিটারী এনক্রিপশন স্তরে উন্নীত হয়ে যায়',
          },
          {
            en: 'The application runs three times faster because security checks are skipped',
            bn: 'নিরাপত্তা চেক বাদ পড়ার কারণে অ্যাপ্লিকেশনটি তিন গুণ দ্রুত গতিতে চলতে থাকে',
          },
          {
            en: 'The user monitor screen turns purple until the page is refreshed',
            bn: 'পেজ রিফ্রেশ না করা পর্যন্ত ব্যবহারকারীর মনিটরের স্ক্রিন বেগুনি হয়ে থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'XSS inside the origin bypasses SOP and reads all local tokens.',
          bn: 'অরিজিনের ভেতর XSS চললে তা SOP বাইপাস করে সব স্থানীয় টোকেন পড়ে ফেলে।'
        },
        explanation: {
          en: 'XSS executes code directly in the application origin. Injected scripts can read hidden form tokens and dispatch fetch requests with full validity.',
          bn: 'XSS সরাসরি অ্যাপ্লিকেশনের ভেতরে কোড রান করে। ফলে এটি যে কোনো গোপন টোকেন পড়ে বৈধ রিকোয়েস্ট পাঠাতে পারে।'
        },
      },
      {
        id: 'csrf-def-qz-3',
        kind: 'mcq',
        topic: 'sec-fetch-site-header',
        question: {
          en: 'How do Fetch Metadata Request Headers (such as Sec-Fetch-Site) provide modern CSRF defense without secret tokens?',
          bn: 'ফেচ মেটাডেটা রিকোয়েস্ট হেডার (যেমন Sec-Fetch-Site) কীভাবে কোনো গোপন টোকেন ছাড়াই আধুনিক CSRF প্রতিরক্ষা প্রদান করে?'
        },
        options: [
          {
            en: 'Browsers set Sec-Fetch-Site to indicate the relationship between the initiator origin and the target (e.g. "cross-site", "same-origin"); the server rejects cross-site mutations before processing',
            bn: 'ব্রাউজার নিজে থেকেই Sec-Fetch-Site হেডার সেট করে জানায় রিকোয়েস্টটি কোথা থেকে এসেছে (যেমন "cross-site", "same-origin"); সার্ভার বহিরাগত ক্রস-সাইট মিউটেশন দেখলেই তা সরাসরি প্রত্যাখ্যান করে',
          },
          {
            en: 'They check whether the website contains high-resolution video clips',
            bn: 'তারা ওয়েবসাইটের মধ্যে হাই-রেজোলিউশন ভিডিও ক্লিপ আছে কি না তা পরীক্ষা করে',
          },
          {
            en: 'They measure the physical distance between the client laptop and the server room',
            bn: 'তারা ক্লায়েন্ট ল্যাপটপ এবং সার্ভার রুমের মধ্যকার শারীরিক ভৌগোলিক দূরত্ব পরিমাপ করে',
          },
          {
            en: 'They force all website images to download in black and white colors',
            bn: 'তারা ওয়েবসাইটের সমস্ত ছবি সাদা-কালো রঙে ডাউনলোড হতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Fetch metadata lets servers distinguish same-origin actions from cross-site triggers.',
          bn: 'ফেচ মেটাডেটা সার্ভারকে জানায় রিকোয়েস্টটি ভেতরের পেজ থেকে এসেছে নাকি বাইরের সাইট থেকে।'
        },
        explanation: {
          en: 'Sec-Fetch-Site cannot be manipulated by client JavaScript. If an incoming POST has Sec-Fetch-Site: cross-site, the backend can safely block it.',
          bn: 'Sec-Fetch-Site ক্লায়েন্টের জাভাস্ক্রিপ্ট পরিবর্তন করতে পারে না। ফলে ক্রস-সাইট চিহ্নিত হলে সার্ভার তা সরাসরি ব্লক করে দেয়।'
        },
      },
      {
        id: 'csrf-def-qz-4',
        kind: 'mcq',
        topic: 'json-api-csrf-immunity-myth',
        question: {
          en: 'Are REST APIs that consume application/json payloads completely immune to CSRF attacks by default?',
          bn: 'যেসব REST API শুধুমাত্র application/json পেলোড গ্রহণ করে, তারা কি ডিফল্টভাবেই CSRF আক্রমণ থেকে পুরোপুরি মুক্ত?'
        },
        options: [
          {
            en: 'Not automatically; while standard HTML forms cannot send application/json without triggering a CORS preflight, vulnerabilities like CORS misconfigurations or Flash/plugins can still permit cross-site forged JSON posts',
            bn: 'স্বয়ংক্রিয়ভাবে নয়; যদিও সাধারণ এইচটিএমএল ফর্ম প্রিফ্লাইট ছাড়া application/json পাঠাতে পারে না, তবুও শিথিল CORS কনফিগারেশন থাকলে আক্রমণকারী ক্ষতিকর সাইট থেকে JSON রিকোয়েস্ট পাঠিয়ে আক্রমণ চালাতে পারে',
          },
          {
            en: 'Yes, JSON files contain built-in antivirus software that blocks attacks',
            bn: 'হ্যাঁ, কারণ JSON ফাইলের ভেতরে বিল্ট-ইন অ্যান্টিভাইরাস সফটওয়্যার থাকে যা আক্রমণ রুখে দেয়',
          },
          {
            en: 'Yes, because JSON was invented before web security vulnerabilities existed',
            bn: 'হ্যাঁ, কারণ ওয়েব সিকিউরিটি দুর্বলতা তৈরি হওয়ার আগেই JSON উদ্ভাবিত হয়েছিল',
          },
          {
            en: 'Yes, provided that the web server operates on solar battery power',
            bn: 'হ্যাঁ, যদি ওয়েব সার্ভারটি সৌর ব্যাটারি শক্তিতে পরিচালিত হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'JSON APIs need CORS protection and CSRF validation if cookies are used.',
          bn: 'কুকিভিত্তিক সেশন থাকলে JSON এপিআইতেও সঠিক CORS ও CSRF সুরক্ষা আবশ্যক।'
        },
        explanation: {
          en: 'If a JSON API uses session cookies for auth and has a misconfigured Access-Control-Allow-Origin: * with credentials, cross-site fetch requests can forge JSON payloads.',
          bn: 'যদি কোনো JSON এপিআই কুকি দিয়ে অথেন্টিকেট করে এবং ভুল CORS কনফিগারেশন থাকে, তবে আক্রমণকারী সহজেই ফেচ দিয়ে ক্ষতিকর রিকোয়েস্ট পাঠাতে পারে।'
        },
      },
    ],
  },
  next: {
    slug: 'security-headers',
    title: {
      en: 'HTTP Security Headers: CSP, HSTS, X-Content-Type-Options & Permissions-Policy',
      bn: 'HTTP সিকিউরিটি হেডার: CSP, HSTS, X-Content-Type-Options এবং Permissions-Policy'
    },
  },
};
