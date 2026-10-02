import type { Lesson } from '../../../lib/types';

export const counterfeitCourierLesson: Lesson = {
  slug: 'the-counterfeit-courier',
  tech: 'security-fundamentals',
  title: {
    en: 'Cross-Site Request Forgery (CSRF) — Ambient Cookies, SameSite Policies, and Token Defense',
    bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF): অ্যাম্বিয়েন্ট কুকি, সেমসাইট পলিসি ও টোকেন প্রতিরক্ষা'
  },
  summary: {
    en: 'Cross-Site Request Forgery (CSRF) exploits the browser automated credential transmission model, tricking a victim authenticated session into executing unauthorized state-changing actions on a trusted website. In this lesson, you will dissect ambient authority, hidden auto-submitting forms, and malicious image tags. Master the modern 3-layer enterprise defense: SameSite cookie attributes (Strict, Lax, None), Sec-Fetch-Site and Origin header validation, and cryptographic Anti-CSRF Synchronizer Tokens. Implement an executable CSRF token validator and origin checker in TypeScript that distinguishes safe idempotent GET reads from forged POST mutations.',
    bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) ব্রাউজারের স্বয়ংক্রিয় কুকি প্রেরণের স্বভাবকে কাজে লাগিয়ে ব্যবহারকারীর অজান্তে কোনো বিশ্বস্ত ওয়েবসাইটে অননুমোদিত কাজ বা লেনদেন সম্পন্ন করে। এই পাঠে আপনি অ্যাম্বিয়েন্ট অথরিটি, গোপনে সাবমিট হওয়া ফর্ম এবং ক্ষতিকর ইমেজ ট্যাগের আক্রমণ কৌশল বিশ্লেষণ করবেন। আধুনিক ৩-স্তরী এন্টারপ্রাইজ প্রতিরক্ষা ব্যবস্থা আয়ত্ত করবেন: সেমসাইট কুকি পলিসি (Strict, Lax, None), Sec-Fetch-Site ও Origin হেডার যাচাই এবং ক্রিপ্টোগ্রাফিক অ্যান্টি-CSRF সিনক্রোনাইজার টোকেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর CSRF টোকেন ভ্যালিডেটর বাস্তবায়ন করা হয়েছে যা নিরাপদ GET রিকোয়েস্ট ও ক্ষতিকর ভুয়া POST রিকোয়েস্টের পার্থক্য নিখুঁতভাবে চিহ্নিত করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'ambient-authority-trap',
      text: {
        en: 'The Ambient Credential Trap: How CSRF Hijacks User Trust',
        bn: 'অ্যাম্বিয়েন্ট কুকির ফাঁদ: কীভাবে CSRF ব্যবহারকারীর অধিকার ছিনতাই করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you log into your banking or email portal, your browser stores an authentication session cookie that it automatically attaches to every future request sent to that domain.',
        bn: 'যখন আপনি আপনার ব্যাংক বা ইমেইল পোর্টালে লগইন করেন, তখন ব্রাউজার একটি প্রমাণীকরণ সেশন কুকি সংরক্ষণ করে যা সে ভবিষ্যতে ঐ ডোমেনের যেকোনো রিকোয়েস্টের সাথে স্বয়ংক্রিয়ভাবে জুড়ে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This automatic credential attachment is known as Ambient Authority. The browser does not ask which browser tab or external website initiated the network request: whenever an HTTP request targets bank.example.com, the browser attaches the existing cookie. In a classic CSRF exploit, an attacker lures a logged-in user to evil-site.com. In the background, hidden HTML elements (such as an auto-submitting form or image tag) immediately fire a state-changing POST request to bank.example.com/api/transfer. Because the user is logged in, the browser automatically transmits the authentic session cookie, and the vulnerable server executes the transfer without verifying whether the user genuinely intended the action.',
        bn: 'ব্রাউজারের এই স্বয়ংক্রিয়ভাবে কুকি পাঠানোর আচরণকে অ্যাম্বিয়েন্ট অথরিটি (Ambient Authority) বলা হয়। ব্রাউজার কখনোই যাচাই করে না কোন ট্যাব বা বাইরের ওয়েবসাইট থেকে রিকোয়েস্টটি পাঠানো হচ্ছে: যখনই কোনো রিকোয়েস্টের গন্তব্য bank.example.com হয়, ব্রাউজার সাথে সাথে সংরক্ষিত সেশন কুকিটি যুক্ত করে দেয়। একটি ক্লাসিক CSRF আক্রমণে আক্রমণকারী লগইন থাকা কোনো ব্যবহারকারীকে evil-site.com এ নিয়ে আসে। সেখানে পেজ লোড হতেই ব্যাকগ্রাউন্ডে থাকা একটি গোপন ফর্ম bank.example.com/api/transfer এ টাকা পাঠানোর একটি POST রিকোয়েস্ট পাঠিয়ে দেয়। যেহেতু ব্যবহারকারী ইতিমধ্যে লগইন আছেন, তাই ব্রাউজার স্বয়ংক্রিয়ভাবে আসল সেশন কুকিটি সাথে পাঠিয়ে দেয় এবং অসতর্ক সার্ভার ব্যবহারকারীর সক্রিয় সম্মতি ছাড়াই টাকা স্থানান্তর কার্যকর করে ফেলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cross-site-request-forgery',
          def: {
            en: 'An attack that forces an end user to execute unwanted actions on a web application in which they are currently authenticated.',
            bn: 'এমন একটি আক্রমণ যা ব্যবহারকারীর বর্তমান লগইন সেশনকে ব্যবহার করে তার অজান্তে কোনো ওয়েবসাইটে অননুমোদিত কাজ করিয়ে নেয়।'
          }
        },
        {
          term: 'ambient-authority',
          def: {
            en: 'The architectural pattern where authentication credentials (cookies, HTTP basic auth) are attached automatically by the browser to every cross-origin request.',
            bn: 'ব্রাউজারের এমন একটি স্বভাব যেখানে কোনো নির্দিষ্ট ডোমেনের প্রতিটি রিকোয়েস্টে সংরক্ষিত প্রমাণপত্র (কুকি) নিজে থেকেই জুড়ে দেওয়া হয়।'
          }
        },
        {
          term: 'samesite-cookie-attribute',
          def: {
            en: 'A security flag (Strict, Lax, None) instructing browsers whether cookies should be transmitted during cross-site requests.',
            bn: 'একটি কুকি ফ্ল্যাগ (Strict, Lax, None) যা ব্রাউজারকে জানিয়ে দেয় বাইরের কোনো ওয়েবসাইট থেকে রিকোয়েস্ট এলে কুকি পাঠানো যাবে কি না।'
          }
        },
        {
          term: 'anti-csrf-synchronizer-token',
          def: {
            en: 'A unique, unpredictable secret value generated on the server and embedded into forms that must accompany mutations to prove user intent.',
            bn: 'সার্ভারে তৈরি অনন্য ও গোপন একটি টোকেন যা ফর্মে গেঁথে দেওয়া হয় এবং ব্যবহারকারীর সক্রিয় ইচ্ছা নিশ্চিত করতে প্রতিটি পরিবর্তনে সাথে পাঠাতে হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'security'
    },
    {
      type: 'heading',
      id: 'samesite-cookie-modes-comparison',
      text: {
        en: 'The 3 SameSite Modes: Strict vs Lax vs None',
        bn: 'সেমসাইটের ৩টি মোড: Strict বনাম Lax বনাম None'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The introduction of the SameSite cookie attribute revolutionized web security by fundamentally redefining browser cross-origin cookie policies across 3 operational modes.',
        bn: 'সেমসাইট কুকি পলিসির আগমন ওয়েব নিরাপত্তায় এক বিশাল পরিবর্তন এনেছে এবং ৩টি ভিন্ন মোডের মাধ্যমে ব্রাউজারের বহিরাগত কুকি পাঠানোর নিয়ম পুনর্নির্ধারণ করেছে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'SameSite Attribute', bn: 'সেমসাইট মান' },
        { en: 'Top-Level Navigation (Clicking Link)', bn: 'টপ-লেভেল লিঙ্ক ক্লিক' },
        { en: 'Cross-Site POST / Form Submissions', bn: 'বাইরের সাইট থেকে POST ফর্ম' },
        { en: 'CSRF Defense Capability', bn: 'CSRF প্রতিরোধ সক্ষমতা' }
      ],
      rows: [
        [
          { en: 'SameSite=Strict', bn: 'SameSite=Strict' },
          { en: 'Cookie withheld (User arrives as logged-out visitor)', bn: 'কুকি পাঠানো বন্ধ (ব্যবহারকারীকে লগআউট দেখায়)' },
          { en: 'Cookie strictly withheld by browser', bn: 'ব্রাউজার কুকি পাঠানো পুরোপুরি আটকে দেয়' },
          { en: 'Maximum security: 100% immune to CSRF, but sacrifices external link UX', bn: 'সর্বোচ্চ সুরক্ষা: CSRF থেকে ১০০% নিরাপদ, তবে বাইরের লিঙ্কে লগইন থাকে না' }
        ],
        [
          { en: 'SameSite=Lax (Modern Default)', bn: 'SameSite=Lax (আধুনিক ডিফল্ট)' },
          { en: 'Cookie sent with safe top-level GET navigation', bn: 'নিরাপদ GET নেভিগেশনে কুকি স্বাভাবিকভাবে পাঠানো হয়' },
          { en: 'Cookie withheld on cross-origin POST, PUT, DELETE', bn: 'বাইরের সাইট থেকে কোনো POST রিকোয়েস্টে কুকি যাবে না' },
          { en: 'Balanced security: eliminates standard form-based CSRF without breaking UX', bn: 'চমৎকার ভারসাম্য: ব্যবহারকারীর সুবিধা বজায় রেখে ফর্মভিত্তিক আক্রমণ বন্ধ করে' }
        ],
        [
          { en: 'SameSite=None; Secure', bn: 'SameSite=None; Secure' },
          { en: 'Cookie sent on all cross-site requests', bn: 'সব ধরনের বহিরাগত রিকোয়েস্টে কুকি পাঠানো হয়' },
          { en: 'Cookie sent on all cross-origin requests', bn: 'সব বহিরাগত রিকোয়েস্টে কুকি স্বাভাবিকভাবে চলে যায়' },
          { en: 'Zero native defense: requires explicit Anti-CSRF Synchronizer Tokens', bn: 'কোনো নিজস্ব সুরক্ষা নেই: বাধ্যতামূলক অ্যান্টি-CSRF টোকেন ব্যবহার করতে হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-csrf-defense-code',
      text: {
        en: 'Executable CSRF Token and Origin Validation Simulation',
        bn: 'CSRF টোকেন ও অরিজিন যাচাইয়ের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an enterprise Anti-CSRF protection middleware: evaluating HTTP methods (allowing safe idempotent GET reads), validating Origin headers, and comparing cryptographic session tokens using constant-time comparison.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি কার্যকর অ্যান্টি-CSRF মিডলওয়্যার বাস্তবায়ন করে: এইচটিটিপি মেথড যাচাই করা (নিরাপদ GET রিকোয়েস্ট অনুমোদন), Origin হেডার পরীক্ষা করা এবং কনস্ট্যান্ট-টাইম তুলনা দিয়ে গোপন টোকেন মেলানো।'
      }
    },
    {
      type: 'code',
      code: `// Enterprise Anti-CSRF Validation Middleware Simulation
import crypto from 'node:crypto';

interface HttpRequest {
  method: string;
  sessionId: string;
  headers: { origin?: string };
  body: { csrfToken?: string; transferAmount?: number };
}

interface ValidationResult {
  status: 'ALLOWED' | 'BLOCKED';
  reason: string;
}

function verifyCsrfSafety(
  request: HttpRequest,
  serverSecret: string
): ValidationResult {
  // 1. Safe idempotent methods like GET do not mutate server state
  if (request.method === 'GET') {
    return { status: 'ALLOWED', reason: 'Idempotent read operation permitted' };
  }

  // 2. Validate Origin header matches trusted corporate domain
  const trustedOrigin = 'https://bank.example.com';
  if (request.headers.origin && request.headers.origin !== trustedOrigin) {
    return {
      status: 'BLOCKED',
      reason: 'Untrusted cross-site Origin header detected'
    };
  }

  // 3. Cryptographically derive and verify the expected Anti-CSRF token
  const expectedToken = crypto
    .createHmac('sha256', serverSecret)
    .update(request.sessionId)
    .digest('hex');

  const providedToken = request.body.csrfToken || '';

  const isTokenMatching =
    providedToken.length === expectedToken.length &&
    crypto.timingSafeEqual(
      Buffer.from(providedToken),
      Buffer.from(expectedToken)
    );

  if (!isTokenMatching) {
    return {
      status: 'BLOCKED',
      reason: 'Invalid or missing cryptographic CSRF token'
    };
  }

  return {
    status: 'ALLOWED',
    reason: 'Verified origin and valid Anti-CSRF token'
  };
}

const SERVER_SECRET = 'bank-csrf-secret-key-32b';
const userSession = 'session_usr_99';
const authenticToken = crypto
  .createHmac('sha256', SERVER_SECRET)
  .update(userSession)
  .digest('hex');

// Scenario 1: Authentic user transfer initiated from the banking portal
const legitimateRequest: HttpRequest = {
  method: 'POST',
  sessionId: userSession,
  headers: { origin: 'https://bank.example.com' },
  body: { transferAmount: 500, csrfToken: authenticToken }
};

// Scenario 2: Cross-site forged transfer initiated from evil-attacker.com
const forgedRequest: HttpRequest = {
  method: 'POST',
  sessionId: userSession,
  headers: { origin: 'https://evil-attacker.com' },
  body: { transferAmount: 500, csrfToken: 'attacker-guessed-token' }
};

const validResult = verifyCsrfSafety(legitimateRequest, SERVER_SECRET);
const forgedResult = verifyCsrfSafety(forgedRequest, SERVER_SECRET);

console.log('Legitimate transfer status:', validResult.status);
console.log('Forged transfer status:', forgedResult.status);
console.log('Forged transfer block reason:', forgedResult.reason);

// prints: Legitimate transfer status: ALLOWED
// prints: Forged transfer status: BLOCKED
// prints: Forged transfer block reason: Untrusted cross-site Origin header detected`
    },
    {
      type: 'heading',
      id: 'modern-defense-sec-fetch-site',
      text: {
        en: 'Modern Defense: Sec-Fetch-Site and Custom Headers',
        bn: 'আধুনিক প্রতিরক্ষা: Sec-Fetch-Site এবং কাস্টম হেডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beyond SameSite cookies and synchronizer tokens, modern browsers support Fetch Metadata headers. The browser-controlled Sec-Fetch-Site header reliably tells the server whether a request originated from "same-origin", "same-site", or "cross-site". Because attackers cannot spoof Sec-Fetch-* headers with JavaScript, backend middleware can reject any state-changing mutation with Sec-Fetch-Site: cross-site before parsing request bodies. Additionally, APIs communicating via AJAX or Fetch often require custom headers (e.g. X-Requested-With or X-CSRF-Token). Because HTML form tags cannot send custom headers without triggering a cross-origin preflight check, custom headers provide another robust layer of defense.',
        bn: 'সেমসাইট কুকি ও টোকেনের পাশাপাশি আধুনিক ব্রাউজারগুলো ফেচ মেটাডেটা হেডার পাঠায়। ব্রাউজার নিয়ন্ত্রিত Sec-Fetch-Site হেডার সার্ভারকে নিশ্চিতভাবে জানায় রিকোয়েস্টটি একই সাইট থেকে এসেছে নাকি বাইরের সাইট (cross-site) থেকে। আক্রমণকারী জাভাস্ক্রিপ্ট দিয়ে এই হেডার পরিবর্তন করতে পারে না বলে সার্ভার বডি পড়ার আগেই যেকোনো cross-site রিকোয়েস্ট সাথে সাথে বাতিল করে দিতে পারে। তাছাড়া এপিআই কল করার সময় বিশেষ কাস্টম হেডার (যেমন X-Requested-With বা X-CSRF-Token) বাধ্যতামূলক করলে সাধারণ এইচটিএমএল ফর্ম বা ছবি দিয়ে কোনো ভুয়া রিকোয়েস্ট পাঠানো পুরোপুরি অসম্ভব হয়ে যায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Set SameSite=Lax by default: Ensure authentication cookies use SameSite=Lax, Secure, and HttpOnly.',
          bn: 'ডিফল্টে SameSite=Lax দিন: সেশন কুকিতে SameSite=Lax, Secure ও HttpOnly ফ্ল্যাগ নিশ্চিত করুন।'
        },
        {
          en: 'Deploy Anti-CSRF Synchronizer Tokens: Require a secret per-session cryptographic token in all state-changing HTML forms.',
          bn: 'অ্যান্টি-CSRF টোকেন ব্যবহার করুন: যেকোনো ফর্ম সাবমিশনের সাথে একটি অনন্য ও গোপন টোকেন পাঠানো বাধ্যতামূলক করুন।'
        },
        {
          en: 'Never permit state changes via GET: Strictly preserve the idempotency of GET requests to prevent image-tag attacks.',
          bn: 'GET মেথডে ডেটা পরিবর্তন নিষিদ্ধ: ইমেজ ট্যাগ দিয়ে আক্রমণ ঠেকাতে GET রিকোয়েস্টে কখনোই ডেটাবেস পরিবর্তন করবেন না।'
        },
        {
          en: 'Leverage Sec-Fetch-Site headers: Inspect browser-controlled metadata headers to block cross-site mutations at the gateway.',
          bn: 'Sec-Fetch-Site হেডার ব্যবহার করুন: বহিরাগত আক্রমণ ঠেকাতে ব্রাউজার নিয়ন্ত্রিত মেটাডেটা হেডারের ওপর নজর রাখুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-protocol-seals',
    tech: 'security-fundamentals',
    title: {
      en: 'The Protocol Seals — HTTPS, TLS Handshakes, and Transport Security',
      bn: 'প্রোটোকল সিল: এইচটিটিপিএস, টিএলএস হ্যান্ডশেক ও ট্রান্সপোর্ট সিকিউরিটি'
    }
  },
  exercises: [
    {
      id: 'courier-ex1',
      kind: 'mcq',
      topic: 'ambient-authority-nature',
      question: {
        en: 'What core browser architectural behavior constitutes the "Ambient Authority" model that enables CSRF attacks?',
        bn: 'ব্রাউজারের কোন মৌলিক স্বভাব "অ্যাম্বিয়েন্ট অথরিটি" তৈরি করে যা CSRF আক্রমণের পথ খুলে দেয়?'
      },
      options: [
        {
          en: 'The browser automatically attaches stored authentication cookies to every outgoing HTTP request destined for a domain, regardless of which website triggered the request',
          bn: 'কোনো ডোমেনের উদ্দেশ্যে পাঠানো প্রতিটি রিকোয়েস্টে ব্রাউজার নিজে থেকেই সংরক্ষিত কুকি জুড়ে দেয়, রিকোয়েস্টটি যে ওয়েবসাইট থেকেই শুরু হোক না কেন'
        },
        {
          en: 'Browsers automatically download all files stored in server root folders',
          bn: 'ব্রাউজার সার্ভারের সমস্ত ফাইল ব্যবহারকারীর কম্পিউটারে নিজে থেকেই ডাউনলোড করে ফেলে'
        },
        {
          en: 'Because browsers shut down whenever an external image is loaded',
          bn: 'কারণ বাইরের কোনো ছবি লোড হলে ব্রাউজার সাথে সাথে বন্ধ হয়ে যায়'
        },
        {
          en: 'Ambient authority means all user passwords are encrypted with the letter Z',
          bn: 'অ্যাম্বিয়েন্ট অথরিটি মানে সমস্ত পাসওয়ার্ড Z অক্ষর দিয়ে এনক্রিপ্ট করা থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The browser attaches cookies automatically based on the destination domain, not based on user intent.',
        bn: 'ব্যবহারকারী নিজে চান কি না তা বিবেচনা না করে ব্রাউজার শুধু গন্তব্য ডোমেন দেখেই কুকি পাঠিয়ে দেয়।'
      },
      explanation: {
        en: 'Ambient credentials travel automatically with network requests, allowing malicious websites to piggyback on authentic sessions.',
        bn: 'কুকি স্বয়ংক্রিয়ভাবে ভ্রমণ করে বলে বহিরাগত ক্ষতিকর ওয়েবসাইট খুব সহজেই সক্রিয় সেশনের সুযোগ নিতে পারে।'
      }
    },
    {
      id: 'courier-ex2',
      kind: 'mcq',
      topic: 'samesite-lax-vs-strict',
      question: {
        en: 'How does configuring cookies with SameSite=Lax differ from SameSite=Strict when a user clicks an external link to your application?',
        bn: 'বাইরের কোনো লিঙ্কে ক্লিক করার সময় কুকিতে SameSite=Lax নির্ধারণ করা এবং SameSite=Strict নির্ধারণ করার মধ্যকার পার্থক্য কী?'
      },
      options: [
        {
          en: 'SameSite=Lax permits cookies on top-level safe GET navigations (keeping the user logged in after clicking a link), while SameSite=Strict withholds cookies even on external link clicks',
          bn: 'SameSite=Lax নিরাপদ টপ-লেভেল GET নেভিগেশনে কুকি পাঠায় (লিঙ্কে ক্লিকে লগইন বজায় থাকে), কিন্তু SameSite=Strict বাইরের লিঙ্কে ক্লিকেও কুকি পাঠানো পুরোপুরি আটকে দেয়'
        },
        {
          en: 'SameSite=Strict converts all web page text into uppercase letters',
          bn: 'SameSite=Strict পেজের সমস্ত লেখাকে বড় হাতের অক্ষরে বদলে দেয়'
        },
        {
          en: 'SameSite=Lax only functions when computers are running Linux operating systems',
          bn: 'SameSite=Lax কেবল লিনাক্স অপারেটিং সিস্টেমে চলা কম্পিউটারে কাজ করে'
        },
        {
          en: 'Because SameSite=Strict causes the client internet connection to disconnect',
          bn: 'কারণ SameSite=Strict ব্যবহারের ফলে ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lax balances usability and security: GET navigation works, but cross-site POST is blocked.',
        bn: 'Lax ব্যবহারের সুবিধা ও নিরাপত্তা নিশ্চিত করে: লিঙ্ক ক্লিকে লগইন থাকে, কিন্তু বাইরের POST ফর্ম ব্লক থাকে।'
      },
      explanation: {
        en: 'SameSite=Lax allows top-level read-only GET requests while blocking cross-origin POST forms, protecting users without degrading user experience.',
        bn: 'SameSite=Lax নিরাপদ নেভিগেশন অনুমোদন করলেও ক্ষতিকর ফর্ম সাবমিশন ঠেকিয়ে চমৎকার নিরাপত্তা দেয়।'
      }
    },
    {
      id: 'courier-ex3',
      kind: 'mcq',
      topic: 'state-changes-in-get-requests',
      question: {
        en: 'Why is it considered a catastrophic security failure to permit state-changing database actions (such as account deletions or money transfers) via HTTP GET requests?',
        bn: 'এইচটিটিপি GET রিকোয়েস্টের মাধ্যমে কোনো ডেটা পরিবর্তন (যেমন অ্যাকাউন্ট মুছে ফেলা বা টাকা পাঠানো) অনুমোদন করা কেন মারাত্মক ভুল?'
      },
      options: [
        {
          en: 'An attacker can trigger unauthorized state changes simply by embedding a link in a standard HTML <img> or <script> tag on a third-party webpage, which browsers fetch automatically via GET',
          bn: 'আক্রমণকারী যেকোনো সাধারণ ওয়েবসাইটে <img src="..."> ট্যাগের ভেতর লিঙ্কটি বসিয়ে দিলেই ব্রাউজার নিজে থেকে GET রিকোয়েস্ট পাঠিয়ে পরিবর্তনটি ঘটিয়ে ফেলবে'
        },
        {
          en: 'GET requests consume 100 times more network bandwidth than POST requests',
          bn: 'GET রিকোয়েস্টে POST-এর চেয়ে ১০০ গুণ বেশি ইন্টারনেট ব্যান্ডউইথ খরচ হয়'
        },
        {
          en: 'Because GET requests permanently damage web server hard drives',
          bn: 'কারণ GET রিকোয়েস্ট ব্যবহারের ফলে সার্ভারের হার্ড ড্রাইভ নষ্ট হয়ে যায়'
        },
        {
          en: 'GET requests were banned by the World Wide Web Consortium in 2022',
          bn: 'কারণ ২০২২ সালে ওয়ার্ল্ড ওয়াইড ওয়েব কনসোর্টিয়াম GET মেথড নিষিদ্ধ করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Browsers preload and fetch images automatically. If an image src changes state, visiting a page triggers the action.',
        bn: 'ব্রাউজার পেজে থাকা সমস্ত ছবি নিজে থেকেই ফেচ করে; ছবিতে পরিবর্তনের লিঙ্ক থাকলে পেজ খোলামাত্রই তা কার্যকর হবে।'
      },
      explanation: {
        en: 'HTTP specifications mandate that GET requests must remain idempotent and safe; violating this allows passive exploitation via image tags.',
        bn: 'এইচটিটিপি নিয়ম অনুযায়ী GET মেথড কেবল তথ্য দেখার জন্য এবং সম্পূর্ণ পরিবর্তনহীন হওয়া আবশ্যক।'
      }
    },
    {
      id: 'courier-ex4',
      kind: 'mcq',
      topic: 'sec-fetch-site-header-utility',
      question: {
        en: 'Why are Sec-Fetch-Site and Origin headers more reliable for verifying request origin than the traditional Referer header?',
        bn: 'রিকোয়েস্টের সত্যতা যাচাইয়ে পুরনো Referer হেডারের চেয়ে Sec-Fetch-Site ও Origin হেডার কেন বহুগুণ বেশি নির্ভরযোগ্য?'
      },
      options: [
        {
          en: 'Sec-Fetch-Site and Origin are strictly controlled by the browser engine and cannot be altered or suppressed by frontend JavaScript, whereas Referer headers are often stripped by privacy settings',
          bn: 'Sec-Fetch-Site এবং Origin সম্পূর্ণভাবে ব্রাউজারের নিজস্ব নিয়ন্ত্রণে থাকে এবং কোনো জাভাস্ক্রিপ্ট তা বদলাতে পারে না, যেখানে Referer হেডার প্রায়শই গোপনীয়তার কারণে মুছে যায়'
        },
        {
          en: 'Sec-Fetch-Site compresses image files before sending them over the wire',
          bn: 'Sec-Fetch-Site ছবিগুলোকে নেটওয়ার্কে পাঠানোর আগেই সংকুচিত করে ফেলে'
        },
        {
          en: 'Because Origin headers are written in pure mathematical hexadecimal notation',
          bn: 'কারণ Origin হেডার কেবল হেক্সাডেসিমেল সংখ্যায় লেখা হয়'
        },
        {
          en: 'Referer headers only work on weekends and national holidays',
          bn: 'কারণ Referer হেডার কেবল ছুটির দিনে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sec-Fetch headers are forbidden header names: JavaScript cannot modify or spoof them.',
        bn: 'Sec-Fetch হেডারগুলো সংরক্ষিত; কোনো ক্ষতিকর জাভাস্ক্রিপ্ট এদের মান পরিবর্তন বা জাল করতে পারে না।'
      },
      explanation: {
        en: 'Fetch metadata headers provide programmatic browser-level guarantees of origin that untrusted scripts cannot manipulate.',
        bn: 'ফেচ মেটাডেটা হেডার ব্রাউজার স্তরে নিশ্চিত প্রমাণ দেয় যা কোনো অবিশ্বস্ত স্ক্রিপ্টের পক্ষে পরিবর্তন করা অসম্ভব।'
      }
    }
  ],
  quiz: {
    id: 'counterfeit-courier-quiz',
    title: {
      en: 'Cross-Site Request Forgery and Ambient Authority Security Quiz',
      bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি ও অ্যাম্বিয়েন্ট অথরিটি কুইজ'
    },
    questions: [
      {
        id: 'cc-q1',
        kind: 'mcq',
        topic: 'csrf-vs-xss-core-difference',
        question: {
          en: 'What is the fundamental architectural difference between Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF)?',
          bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) এবং ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF)-এর মধ্যকার মূল প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'XSS exploits the user trust in a vulnerable application by executing malicious scripts on the site, while CSRF exploits an application trust in the user browser by sending unauthorized requests',
            bn: 'XSS সাইটের দুর্বলতাকে কাজে লাগিয়ে সেখানে ক্ষতিকর কোড চালায়, আর CSRF সার্ভারের ব্রাউজার-বিশ্বাসের সুযোগ নিয়ে ব্যবহারকারীর অজান্তে অননুমোদিত রিকোয়েস্ট পাঠায়'
          },
          {
            en: 'XSS only occurs on mobile devices, while CSRF only happens on desktop computers',
            bn: 'XSS কেবল মোবাইলে ঘটে আর CSRF কেবল কম্পিউটারে ঘটে'
          },
          {
            en: 'CSRF was discontinued and replaced by CSS stylesheets',
            bn: 'CSRF বন্ধ হয়ে গেছে এবং এর জায়গায় সিএসএস ব্যবহার করা হচ্ছে'
          },
          {
            en: 'Both attacks are identical and have no technical difference',
            bn: 'উভয় আক্রমণ সম্পূর্ণ একই এবং এদের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'XSS = running attacker script inside your app. CSRF = tricking the browser into sending requests to your app.',
          bn: 'XSS মানে অ্যাপের ভেতরে কোড চালানো; আর CSRF মানে ব্রাউজারকে দিয়ে গোপনে অ্যাপে রিকোয়েস্ট পাঠানো।'
        },
        explanation: {
          en: 'XSS violates client code execution integrity, whereas CSRF exploits ambient session cookies during cross-site requests.',
          bn: 'XSS পেজের কোড এক্সিকিউশন নষ্ট করে আর CSRF ব্রাউজারের স্বয়ংক্রিয় কুকি ব্যবহারের সুযোগ নেয়।'
        }
      },
      {
        id: 'cc-q2',
        kind: 'mcq',
        topic: 'anti-csrf-token-generation-and-validation',
        question: {
          en: 'Why is an attacker unable to forge or bypass an Anti-CSRF Synchronizer Token during a cross-site attack?',
          bn: 'ক্রস-সাইট আক্রমণের সময় আক্রমণকারী কেন একটি অ্যান্টি-CSRF সিনক্রোনাইজার টোকেন জাল বা বাইপাস করতে পারে না?'
        },
        options: [
          {
            en: 'Due to the Same-Origin Policy (SOP), the attacker cross-origin website cannot read the authentic token from the victim banking page, making it impossible to guess and include in the forged submission',
            bn: 'সেম-অরিজিন পলিসির (SOP) কারণে আক্রমণকারীর ওয়েবসাইট ব্যবহারকারীর আসল পেজ থেকে গোপন টোকেনটি পড়তে পারে না, ফলে ভুয়া রিকোয়েস্টে সঠিক টোকেন পাঠানো অসম্ভব হয়ে যায়'
          },
          {
            en: 'Anti-CSRF tokens cause the attacker computer monitor to power off',
            bn: 'অ্যান্টি-CSRF টোকেন আক্রমণকারীর মনিটর বন্ধ করে দেয়'
          },
          {
            en: 'Because tokens expire after exactly 1 microsecond on the server',
            bn: 'কারণ টোকেন ১ মাইক্রোসেকেন্ড পর সার্ভারে অকেজো হয়ে যায়'
          },
          {
            en: 'Tokens are verified by the national postal inspection service',
            bn: 'কারণ টোকেনগুলো ডাক বিভাগ দ্বারা যাচাই করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The attacker can trigger a POST request, but cannot read the contents of your page to steal the token.',
          bn: 'আক্রমণকারী রিকোয়েস্ট পাঠাতে পারলেও ব্রাউজারের নিরাপত্তার কারণে পেজের ভেতরের গোপন টোকেন পড়তে পারে না।'
        },
        explanation: {
          en: 'The Same-Origin Policy prevents external domains from inspecting response DOMs, keeping embedded synchronizer tokens private.',
          bn: 'সেম-অরিজিন পলিসি বহিরাগত ডোমেনকে পেজের তথ্য দেখা থেকে বিরত রেখে টোকেনের গোপনীয়তা রক্ষা করে।'
        }
      },
      {
        id: 'cc-q3',
        kind: 'mcq',
        topic: 'login-csrf-vulnerability',
        question: {
          en: 'What occurs during a "Login CSRF" attack, and why is it dangerous to end users?',
          bn: '"লগইন CSRF" আক্রমণে কী ঘটে এবং এটি ব্যবহারকারীর জন্য কেন বিপজ্জনক?'
        },
        options: [
          {
            en: 'The attacker tricks the victim into logging into the ATTACKER account; the victim then unwittingly enters sensitive data or financial records that the attacker can view later',
            bn: 'আক্রমণকারী ব্যবহারকারীকে অজান্তে আক্রমণকারীর নিজস্ব অ্যাকাউন্টে লগইন করিয়ে দেয়; এরপর ব্যবহারকারী স্পর্শকাতর ব্যক্তিগত বা আর্থিক তথ্য সেখানে জমা দিলে আক্রমণকারী তা দেখে ফেলে'
          },
          {
            en: 'Login CSRF causes the user password to change to the word "Admin"',
            bn: 'লগইন CSRF ব্যবহারকারীর পাসওয়ার্ড বদলে "Admin" করে দেয়'
          },
          {
            en: 'It permanently breaks the client mouse buttons during login',
            bn: 'এটি লগইনের সময় মাউসের বাটন নষ্ট করে ফেলে'
          },
          {
            en: 'Because login forms are not allowed to use SSL encryption',
            bn: 'কারণ লগইন ফর্মে এসএসএল এনক্রিপশন ব্যবহারে নিষেধাজ্ঞা রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The attacker logs you into THEIR account. You search or buy things, and the attacker watches the history.',
          bn: 'আক্রমণকারী আপনাকে তার অ্যাকাউন্টে ঢুকিয়ে দেয়; আপনি সেখানে কাজ করলে সে পরে সব তথ্য দেখে ফেলে।'
        },
        explanation: {
          en: 'Login CSRF binds victim activity to an attacker-controlled identity, enabling surreptitious monitoring and data harvesting.',
          bn: 'লগইন CSRF ব্যবহারকারীর তথ্য আক্রমণকারীর নিজস্ব অ্যাকাউন্টে সংরক্ষণ করিয়ে গোপনে তথ্য চুরির সুযোগ দেয়।'
        }
      },
      {
        id: 'cc-q4',
        kind: 'mcq',
        topic: 'custom-headers-csrf-prevention',
        question: {
          en: 'Why does requiring a custom HTTP header (such as X-CSRF-Token or X-Requested-With) on API endpoints effectively prevent simple HTML form-based CSRF attacks?',
          bn: 'এপিআই এন্ডপয়েন্টে কাস্টম এইচটিটিপি হেডার (যেমন X-CSRF-Token) বাধ্যতামূলক করলে কেন তা সাধারণ এইচটিএমএল ফর্মভিত্তিক CSRF আক্রমণ পুরোপুরি ঠেকিয়ে দেয়?'
        },
        options: [
          {
            en: 'Standard HTML <form> tags cannot set custom HTTP request headers; setting custom headers requires JavaScript Fetch/XHR, which triggers browser CORS preflight (OPTIONS) checks that block cross-origin requests',
            bn: 'সাধারণ এইচটিএমএল ফর্ম কোনো কাস্টম হেডার পাঠাতে পারে না; কাস্টম হেডার পাঠাতে জাভাস্ক্রিপ্ট লাগে যা ব্রাউজারের CORS প্রি-ফ্লাইট পরীক্ষা চালু করে বহিরাগত রিকোয়েস্ট আটকে দেয়'
          },
          {
            en: 'Custom headers cause computer processors to run at half speed',
            bn: 'কাস্টম হেডার ব্যবহারের ফলে প্রসেসরের গতি অর্ধেক কমে যায়'
          },
          {
            en: 'Because custom headers automatically erase user browser cookies',
            bn: 'কারণ কাস্টম হেডার ব্রাউজারের সমস্ত কুকি নিজে থেকেই মুছে দেয়'
          },
          {
            en: 'Custom headers are strictly prohibited on internet web servers',
            bn: 'কারণ ইন্টারনেট সার্ভারে কাস্টম হেডার ব্যবহারে নিষেধাজ্ঞা আছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Forms only send standard headers. Custom headers force a CORS preflight that external sites cannot pass.',
          bn: 'ফর্ম কেবল সাধারণ হেডার পাঠায়; কাস্টম হেডার দিলে ব্রাউজার আগে সার্ভারের অনুমতি (CORS) যাচাই করে।'
        },
        explanation: {
          en: 'Cross-origin requests carrying custom headers trigger CORS preflights, ensuring that external sites without CORS permissions are blocked.',
          bn: 'কাস্টম হেডারযুক্ত রিকোয়েস্টে ব্রাউজার আগে প্রি-ফ্লাইট যাচাই করে, ফলে অনুমতিবিহীন বাইরের সাইটের রিকোয়েস্ট শুরুতেই বাতিল হয়ে যায়।'
        }
      }
    ]
  }
};
