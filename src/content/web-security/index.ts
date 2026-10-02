import type { Hub } from '../../lib/types';
import { MeetWebsecLesson } from './lessons/meet-websec';
import { HttpsFundamentalsLesson } from './lessons/https-fundamentals';
import { SameOriginPolicyLesson } from './lessons/same-origin-policy';
import { XssAttacksLesson } from './lessons/xss-attacks';
import { CsrfDefenseLesson } from './lessons/csrf-defense';
import { SecurityHeadersLesson } from './lessons/security-headers';
import { ClickjackingLesson } from './lessons/clickjacking';
import { SecheadersCapstoneLesson } from './lessons/secheaders-capstone';

export const webSecurityHub: Hub = {
  slug: 'web-security',
  name: 'Web Security & Browser Defenses',
  icon: '🌐',
  tagline: {
    en: 'Master browser security architectures: Same-Origin Policy, XSS defenses, anti-CSRF tokens, clickjacking framing guards, TLS/HTTPS, and Content Security Policies.',
    bn: 'ব্রাউজার নিরাপত্তা আর্কিটেকচার আয়ত্ত করুন: সেম-অরিজিন পলিসি, XSS প্রতিরোধ, অ্যান্টি-CSRF টোকেন, ক্লিকজ্যাকিং গার্ড, TLS/HTTPS এবং কনটেন্ট সিকিউরিটি পলিসি (CSP)।',
  },
  intro: {
    en: 'Every web application deployed to the public internet operates in a hostile environment. The web browser is a unique execution sandbox where untrusted third-party scripts, malicious framing overlays, cross-site request forgeries, and man-in-the-middle eavesdroppers constantly probe for weaknesses. This hub provides comprehensive architectural coverage of browser security boundaries, defensive HTTP response headers, context-aware output encoding, cryptographic transit encryption, and robust multi-layered application hardening.',
    bn: 'ইন্টারনেটে উন্মুক্ত থাকা প্রতিটি ওয়েব অ্যাপ্লিকেশন একটি অনিরাপদ পরিবেশের মুখোমুখি হয়। ওয়েব ব্রাউজার এমন একটি বিশেষ স্যান্ডবক্স যেখানে ক্ষতিকর থার্ড-পার্টি স্ক্রিপ্ট, অদৃশ্য ফ্রেমিং ফাঁদ, ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) এবং ডেটা চুরির চেষ্টা সার্বক্ষণিক চলতে থাকে। এই হাবে আপনি ব্রাউজারের নিরাপত্তা সীমানা, শক্তিশালী HTTP রেসপন্স হেডার, কনটেক্সট-সচেতন আউটপুট এনকোডিং, ক্রিপ্টোগ্রাফিক ট্রানজিট এনক্রিপশন এবং বহুস্তরীয় ওয়েব সুরক্ষার কৌশলগুলো পুঙ্খানুপুঙ্খভাবে শিখবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Web Security Foundations & Transport Encryption',
        bn: 'ধাপ ১ — ওয়েব নিরাপত্তার মূল ভিত্তি ও ট্রানজিট এনক্রিপশন',
      },
      items: [
        {
          en: 'Overview of web attack surfaces, threat models, and fail-closed defenses',
          bn: 'ওয়েব আক্রমণের ক্ষেত্রসমূহ, থ্রেট মডেল এবং ফেইল-ক্লোজড সুরক্ষার সার্বিক পরিচিতি',
        },
        {
          en: 'HTTPS & TLS fundamentals, certificate authorities, forward secrecy, and HSTS',
          bn: 'HTTPS ও TLS এর মূল ভিত্তি, সার্টিফিকেট অথরিটি, ফরোয়ার্ড সিক্রেসি এবং HSTS',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Browser Sandbox Boundaries & Cross-Site Scripting (XSS)',
        bn: 'ধাপ ২ — ব্রাউজার স্যান্ডবক্স সীমানা এবং ক্রস-সাইট স্ক্রিপ্টিং (XSS)',
      },
      items: [
        {
          en: 'The Same-Origin Policy (SOP), origin tuple mechanics, and secure CORS architecture',
          bn: 'সেম-অরিজিন পলিসি (SOP), অরিজিন ট্রিপল এবং নিরাপদ CORS আর্কিটেকচার',
        },
        {
          en: 'Stored, Reflected, and DOM-based XSS attacks, context-aware sanitization, and CSP',
          bn: 'স্টোর্ড, রিফ্লেক্টেড এবং DOM-ভিত্তিক XSS আক্রমণ, কনটেক্সট-সচেতন স্যানিটাইজেশন ও CSP',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Request Forgery & UI Redressing Defenses',
        bn: 'ধাপ ৩ — রিকোয়েস্ট জালিয়াতি এবং UI রিড্রেসিং প্রতিরোধ',
      },
      items: [
        {
          en: 'Cross-Site Request Forgery (CSRF), anti-forgery tokens, and SameSite cookie flags',
          bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF), অ্যান্টি-ফোরজারি টোকেন এবং SameSite কুকি ফ্ল্যাগ',
        },
        {
          en: 'Clickjacking defenses, transparent overlay attacks, and frame-ancestors restrictions',
          bn: 'ক্লিকজ্যাকিং প্রতিরোধ, অদৃশ্য ওভারলে আক্রমণ এবং frame-ancestors নিষেধাজ্ঞা',
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Hardening Headers & Security Capstone Audit',
        bn: 'ধাপ ৪ — হার্ডেনিং হেডার এবং সিকিউরিটি ক্যাপস্টোন অডিট',
      },
      items: [
        {
          en: 'Essential HTTP security headers: CSP, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy',
          bn: 'অপরিহার্য HTTP সিকিউরিটি হেডার: CSP, X-Content-Type-Options, Referrer-Policy এবং Permissions-Policy',
        },
        {
          en: 'Capstone: End-to-end vulnerability audit and automated security header regression testing',
          bn: 'ক্যাপস্টোন: শুরু থেকে শেষ পূর্ণাঙ্গ দুর্বলতা অডিট এবং স্বয়ংক্রিয় সিকিউরিটি হেডার টেস্ট',
        },
      ],
    },
  ],
  lessons: [
    MeetWebsecLesson,
    HttpsFundamentalsLesson,
    SameOriginPolicyLesson,
    XssAttacksLesson,
    CsrfDefenseLesson,
    SecurityHeadersLesson,
    ClickjackingLesson,
    SecheadersCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Hardened E-Commerce API with Anti-CSRF & Contextual XSS Filters',
        bn: 'অ্যান্টি-CSRF এবং কনটেক্সচুয়াল XSS ফিল্টারযুক্ত সুরক্ষিত ই-কমার্স এপিআই',
      },
      brief: {
        en: 'Develop a high-security checkout service in Node.js. Implement cryptographic anti-CSRF synchronizer tokens for all mutating financial requests, enforce SameSite=Lax cookie policies, and build context-aware HTML/JavaScript output encoders that prevent injection across diverse DOM contexts.',
        bn: 'Node.js-এ একটি অত্যন্ত সুরক্ষিত চেকআউট সার্ভিস তৈরি করুন। সমস্ত আর্থিক পরিবর্তনের জন্য ক্রিপ্টোগ্রাফিক অ্যান্টি-CSRF সিনক্রোনাইজার টোকেন যুক্ত করুন, SameSite=Lax কুকি পলিসি প্রয়োগ করুন এবং বিভিন্ন DOM কনটেক্সটে ইনজেকশন রুখতে আউটপুট এনকোডার তৈরি করুন।',
      },
      difficulty: 'intermediate',
    },
    {
      title: {
        en: 'Strict Content Security Policy (CSP) & Clickjacking Defense Engine',
        bn: 'কঠোর কনটেন্ট সিকিউরিটি পলিসি (CSP) ও ক্লিকজ্যাকিং ডিফেন্স ইঞ্জিন',
      },
      brief: {
        en: 'Architect an Express/Connect security gateway providing strict Content Security Policies with cryptographic nonces (nonce-based script execution). Defeat iframe overlay framing attacks across all major browsers using Content-Security-Policy frame-ancestors and X-Frame-Options DENY.',
        bn: 'ক্রিপ্টোগ্রাফিক ননসযুক্ত (nonce-ভিত্তিক স্ক্রিপ্ট এক্সিকিউশন) কঠোর CSP সরবরাহকারী একটি এক্সপ্রেস গেটওয়ে তৈরি করুন। Content-Security-Policy frame-ancestors এবং X-Frame-Options DENY ব্যবহার করে সমস্ত ব্রাউজারে আইফ্রেম ক্লিকজ্যাকিং আক্রমণ সম্পূর্ণ প্রতিহত করুন।',
      },
      difficulty: 'advanced',
    },
    {
      title: {
        en: 'Automated Browser Security Header Audit & Telemetry Pipeline',
        bn: 'স্বয়ংক্রিয় ব্রাউজার সিকিউরিটি হেডার অডিট ও টেলিমেট্রি পাইপলাইন',
      },
      brief: {
        en: 'Construct a continuous security monitoring tool that crawls live endpoints, analyzes HTTP response headers against OWASP security baselines, tests CORS preflight configurations for wildcard reflections, and alerts teams when security headers are inadvertently omitted during production deployments.',
        bn: 'একটি সার্বক্ষণিক নিরাপত্তা পর্যবেক্ষণ টুল তৈরি করুন যা লাইভ এন্ডপয়েন্ট ক্রল করে, OWASP বেসলাইনের সাথে HTTP রেসপন্স হেডার মেলায়, ঝুঁকিপূর্ণ CORS কনফিগারেশন পরীক্ষা করে এবং প্রোডাকশনে কোনো সিকিউরিটি হেডার বাদ পড়লে সাথে সাথে সতর্কবার্তা পাঠায়।',
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    {
      en: 'Enforce HTTPS & HSTS Everywhere: Guarantee transport encryption with Strict-Transport-Security and zero-downgrade policies.',
      bn: 'সর্বত্র HTTPS ও HSTS প্রয়োগ করুন: Strict-Transport-Security দিয়ে ট্রানজিট এনক্রিপশন নিশ্চিত করুন এবং কোনো আন-এনক্রিপ্টেড সংযোগ অনুমোদন করবেন না।',
    },
    {
      en: 'Context-Aware Output Encoding: Sanitize and encode user input strictly according to where it is rendered (HTML body, attributes, JavaScript, or URLs).',
      bn: 'কনটেক্সট-সচেতন আউটপুট এনকোডিং: ব্যবহারকারীর ইনপুট কোথায় প্রদর্শিত হচ্ছে (HTML বডি, অ্যাট্রিবিউট, জাভাস্ক্রিপ্ট বা ইউআরএল) তার ওপর ভিত্তি করে সঠিক এনকোডিং করুন।',
    },
    {
      en: 'SameSite Cookies & Anti-CSRF Tokens: Pair SameSite=Lax cookies with unique cryptographically random synchronizer tokens for all state-changing mutations.',
      bn: 'SameSite কুকি এবং অ্যান্টি-CSRF টোকেন: সমস্ত ডাটা পরিবর্তনের রিকোয়েস্টে SameSite=Lax কুকির পাশাপাশি শক্তিশালী ক্রিপ্টোগ্রাফিক র্যান্ডম টোকেন ব্যবহার করুন।',
    },
    {
      en: 'Deploy Strict Content Security Policies: Disable unsafe inline scripts and restrict resource loading using cryptographic nonces and frame-ancestors.',
      bn: 'কঠোর CSP বাস্তবায়ন করুন: ঝুঁকিপূর্ণ ইনলাইন স্ক্রিপ্ট নিষিদ্ধ করুন এবং ক্রিপ্টোগ্রাফিক ননস ও frame-ancestors ব্যবহার করে রিসোর্স লোডিং সীমিত রাখুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'Why is standard HTML entity encoding (converting < and > to &lt; and &gt;) insufficient to prevent XSS when user input is injected into an href attribute or script block?',
        bn: 'ব্যবহারকারীর ইনপুট যখন কোনো href অ্যাট্রিবিউট বা স্ক্রিপ্ট ব্লকের ভেতরে বসে, তখন সাধারণ HTML এনকোডিং (< এবং > কে &lt; ও &gt; তে রূপান্তর) কেন XSS ঠেকাতে ব্যর্থ হয়?',
      },
      a: {
        en: 'HTML entity encoding only protects HTML body context. In an href attribute, an attacker can supply javascript:alert(document.cookie), which browsers execute without needing angle brackets! In a script block, input executes as executable code directly. Remediation requires context-aware encoding: validating URL schemes (allowing only http: and https:) and JSON-serializing variables safely.',
        bn: 'সাধারণ HTML এনকোডিং কেবল HTML বডির ভেতর কাজ করে। কিন্তু কোনো href অ্যাট্রিবিউটে আক্রমণকারী javascript:alert(document.cookie) লিখে দিতে পারে, যা ব্রাউজার কোনো < বা > চিহ্ন ছাড়াই সরাসরি চালিয়ে দেয়! স্ক্রিপ্ট ব্লকে লেখা ইনপুট সরাসরি কোড হিসেবে চলে। এর সঠিক সমাধান হলো কনটেক্সট-সচেতন এনকোডিং: ইউআরএল স্কিম যাচাই ( কেবল http: ও https: অনুমোদন ) এবং ভেরিয়েবলগুলোকে নিরাপদে JSON সিরিয়ালাইজ করা।',
      },
    },
    {
      q: {
        en: 'How does the Same-Origin Policy (SOP) protect users, and how does Cross-Origin Resource Sharing (CORS) establish safe cross-domain exceptions?',
        bn: 'সেম-অরিজিন পলিসি (SOP) কীভাবে ব্যবহারকারীদের সুরক্ষা দেয় এবং CORS কীভাবে নিরাপদ ক্রস-ডোমেইন ব্যতিক্রম তৈরি করে?',
      },
      a: {
        en: 'The SOP prevents scripts loaded from one origin (Scheme + Host + Port) from reading the DOM, cookies, or fetch responses of a different origin. CORS allows servers to explicitly authorize trusted external domains using the Access-Control-Allow-Origin response header. A catastrophic mistake is reflecting Origin headers dynamically or using wildcard (*) with credentials (cookies), which destroys SOP isolation.',
        bn: 'SOP একটি অরিজিনের (প্রটোকল + ডোমেইন + পোর্ট) স্ক্রিপ্টকে অন্য অরিজিনের DOM, কুকি বা নেটওয়ার্ক রেসপন্স পড়া থেকে কঠোরভাবে বিরত রাখে। CORS সার্ভারকে Access-Control-Allow-Origin হেডারের মাধ্যমে নির্দিষ্ট বিশ্বস্ত ডোমেইনকে তথ্য পড়ার অনুমতি দেওয়ার সুযোগ দেয়। একটি মারাত্মক ভুল হলো রিকোয়েস্টের অরিজিনকে অন্ধভাবে মেনে নেওয়া বা কুকিসহ ওয়াইল্ডকার্ড (*) ব্যবহার করা, যা ব্রাউজারের সুরক্ষাকে ধ্বংস করে।',
      },
    },
    {
      q: {
        en: 'Why does the SameSite=Lax cookie attribute provide significant CSRF protection, yet remain insufficient on its own for critical financial transactions?',
        bn: 'SameSite=Lax কুকি অ্যাট্রিবিউট উল্লেখযোগ্য CSRF সুরক্ষা দেওয়া সত্ত্বেও কেন আর্থিক লেনদেনের ক্ষেত্রে এটি একা যথেষ্ট নয়?',
      },
      a: {
        en: 'SameSite=Lax withholds cookies on cross-site subrequests (like POST forms or image tags), neutralizing traditional CSRF vectors. However, Lax sends cookies on top-level cross-site GET navigations (clicking a link). If an application improperly allows mutations via GET, or if an attacker chains an open redirect or sub-domain takeover, CSRF can succeed. High-value transactions must always require explicit anti-CSRF tokens and re-authentication.',
        bn: 'SameSite=Lax ক্রস-সাইট সাব-রিকোয়েস্টে (যেমন ক্ষতিকর POST ফর্ম বা ইমেজ ট্যাগ) কুকি পাঠানো বন্ধ করে সাধারণ CSRF আক্রমণ প্রতিহত করে। কিন্তু ব্যবহারকারী কোনো লিংকে ক্লিক করে নতুন পেজে গেলে (টপ-লেভেল GET) Lax কুকি পাঠিয়ে দেয়। অ্যাপ্লিকেশন যদি ভুলবশত GET রিকোয়েস্টে ডেটা পরিবর্তনের সুযোগ রাখে, তবে আক্রমণ সফল হতে পারে। তাই গুরুত্বপূর্ণ লেনদেনে সর্বদা অ্যান্টি-CSRF টোকেন ও রি-অথেনটিকেশন আবশ্যক।',
      },
    },
    {
      q: {
        en: 'What is Clickjacking (UI Redressing), and why is Content-Security-Policy frame-ancestors superior to the legacy X-Frame-Options header?',
        bn: 'ক্লিকজ্যাকিং (UI Redressing) কী এবং কেন পুরানো X-Frame-Options এর চেয়ে Content-Security-Policy frame-ancestors অনেক বেশি শক্তিশালী?',
      },
      a: {
        en: 'Clickjacking tricks users into clicking hidden, transparent iframe buttons overlaid on enticing decoy interfaces. While the legacy X-Frame-Options header only supports DENY and SAMEORIGIN, Content-Security-Policy: frame-ancestors \'none\' or \'self\' https://trusted.com allows granular, multi-domain whitelists and cannot be bypassed via proxy manipulation or nested frame nesting, providing modern multi-origin framing protection.',
        bn: 'ক্লিকজ্যাকিং ব্যবহারকারীকে একটি লোভনীয় ভুয়া বাটনে ক্লিক করতে প্রলুব্ধ করে যার নিচে অদৃশ্য আইফ্রেমে আসল স্পর্শকাতর বোতাম লুকানো থাকে। পুরানো X-Frame-Options কেবল DENY এবং SAMEORIGIN সমর্থন করে। পক্ষান্তরে Content-Security-Policy: frame-ancestors \'none\' বা নির্দিষ্ট অনুমোদিত ডোমেইনের তালিকা সমর্থন করে এবং নেস্টেড ফ্রেমের ফাঁকিবাজি প্রতিহত করে আধুনিক ও নিখুঁত ফ্রেমিং সুরক্ষা নিশ্চিত করে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Cloudflare Web Application Firewall (WAF): Inspects terabits of global web traffic per second to mitigate OWASP Top 10 vulnerabilities.',
      bn: 'ক্লাউডফ্লেয়ার ওয়েব অ্যাপ্লিকেশন ফায়ারওয়াল (WAF): OWASP শীর্ষ ১০ দুর্বলতা প্রতিহত করতে প্রতি সেকেন্ডে টেরাবিট বৈশ্বিক ওয়েব ট্রাফিক নিরীক্ষণ করে।',
    },
    {
      en: 'GitHub Security Architecture: Employs strict CSP with nonces, frame-ancestors restrictions, and automated secret scanning.',
      bn: 'গিটহাব সিকিউরিটি আর্কিটেকচার: ক্রিপ্টোগ্রাফিক ননসযুক্ত কঠোর CSP, ফ্রেমিং নিষেধাজ্ঞা এবং স্বয়ংক্রিয় সিক্রেট স্ক্যানিং ব্যবহার করে।',
    },
    {
      en: 'Stripe API & Checkout: Requires cryptographic HMAC signatures on webhooks, strict anti-CSRF synchronization, and TLS 1.3 transport security.',
      bn: 'স্ট্রাইপ এপিআই ও চেকআউট: ওয়েবহুকে ক্রিপ্টোগ্রাফিক HMAC সিগনেচার, কঠোর অ্যান্টি-CSRF টোকেন এবং TLS ১.৩ ট্রানজিট নিরাপত্তা প্রয়োগ করে।',
    },
    {
      en: 'Financial Institutions & Online Banking: Strictly preloads HSTS for entire domain trees, forbids framing, and enforces device-bound token binding.',
      bn: 'অনলাইন ব্যাংকিং ও আর্থিক সংস্থা: সম্পূর্ণ ডোমেইন ট্রির জন্য কঠোরভাবে HSTS প্রিলোড করে, যেকোনো ফ্রেমিং নিষিদ্ধ করে এবং ডিভাইস-বাউন্ড টোকেন প্রয়োগ করে।',
    },
  ],
};
