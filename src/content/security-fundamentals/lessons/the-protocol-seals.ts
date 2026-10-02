import type { Lesson } from '../../../lib/types';

export const protocolSealsLesson: Lesson = {
  slug: 'the-protocol-seals',
  tech: 'security-fundamentals',
  title: {
    en: 'The Protocol Seals — HTTPS, TLS Handshakes, and Defensive Security Headers',
    bn: 'প্রোটোকল সিল: এইচটিটিপিএস, টিএলএস হ্যান্ডশেক ও সিকিউরিটি হেডার্স'
  },
  summary: {
    en: 'Application code cannot guarantee security if data in transit can be intercepted, read, or modified by network adversaries. In this lesson, you will master the mechanics of Transport Layer Security (TLS 1.3), public key certificates, Certificate Authorities (CAs), and the cryptographic handshake. Dissect how opportunistic downgrade attacks operate and enforce non-negotiable encrypted transit with HTTP Strict Transport Security (HSTS). Implement an executable security headers evaluation engine in TypeScript that inspects live response headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy) and calculates a comprehensive compliance security score.',
    bn: 'নেটওয়ার্ক চলাকালীন ট্রাফিক যদি আক্রমণকারী পড়তে বা পরিবর্তন করতে পারে, তবে অ্যাপ্লিকেশনের অভ্যন্তরীণ কোনো নিরাপত্তাই কার্যকর থাকে না। এই পাঠে আপনি ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS 1.3), ডিজিটাল সার্টিফিকেট, সার্টিফিকেট অথরিটি (CA) এবং ক্রিপ্টোগ্রাফিক হ্যান্ডশেক মেকানিক্স বিশদভাবে শিখবেন। কীভাবে ডাউনগ্রেড আক্রমণ ঘটে তা বিশ্লেষণ করে HTTP Strict Transport Security (HSTS) প্রয়োগের মাধ্যমে স্থায়ী এনক্রিপশন নিশ্চিত করবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর সিকিউরিটি হেডার্স অডিটর বাস্তবায়ন করা হয়েছে যা রেসপন্স হেডার (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) পরীক্ষা করে স্বয়ংক্রিয়ভাবে নিরাপত্তা স্কোর তৈরি করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'wire-under-siege',
      text: {
        en: 'The Wire Under Siege: Why Transport Encryption is Mandatory',
        bn: 'তারের নিরাপত্তা: কেন ট্রান্সপোর্ট এনক্রিপশন বাধ্যতামূলক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your browser connects over unencrypted HTTP, every intermediate router and Wi-Fi access point can intercept your traffic.',
        bn: 'আন-এনক্রিপ্টেড এইচটিটিপি সংযোগে যেকোনো রাউটার বা ওয়াই-ফাই নেটওয়ার্ক সহজেই আপনার ডেটা পর্যবেক্ষণ করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Adversaries can read submitted passwords, steal session cookies, and inject malicious scripts into responses.',
        bn: 'আক্রমণকারীরা আপনার পাসওয়ার্ড পড়তে পারে, সেশন কুকি চুরি করতে পারে এবং ওয়েব পেজে ক্ষতিকর কোড ঢুকিয়ে দিতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Transport Layer Security (TLS 1.3) establishes an encrypted, authenticated tunnel between the client browser and the origin server. A cryptographic certificate signed by a globally trusted Certificate Authority (CA) mathematically proves the server identity, protecting against Man-in-the-Middle (MITM) impersonation. Simultaneously, symmetric cipher suites (such as AES-GCM or ChaCha20-Poly1305) encrypt every transmitted byte. Even if an attacker physically taps an undersea fiber-optic cable, the data appears as completely indecipherable random noise.',
        bn: 'ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS 1.3) ক্লায়েন্ট ব্রাউজার ও মূল সার্ভারের মাঝে একটি সম্পূর্ণ এনক্রিপ্ট করা ও বিশ্বস্ত সুড়ঙ্গ তৈরি করে। বিশ্বস্ত সার্টিফিকেট অথরিটি (CA) দ্বারা স্বাক্ষরিত ডিজিটাল সার্টিফিকেট সার্ভারের আসল পরিচয় নিশ্চিত করে, যা ম্যান-ইন-দ্য-মিডল (MITM) আক্রমণ প্রতিহত করে। একই সাথে সিমেট্রিক সাইফার (যেমন AES-GCM বা ChaCha20-Poly1305) প্রতিটি বাইটকে সুরক্ষিতভাবে এনক্রিপ্ট করে। এমনকি কোনো আক্রমণকারী যদি ইন্টারনেট ক্যাবলে সরাসরি নজরদারিও করে, তবুও সে কোনো তথ্য পড়তে পারবে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'transport-layer-security',
          def: {
            en: 'The cryptographic protocol (current version TLS 1.3) that provides end-to-end privacy, data integrity, and server authentication across computer networks.',
            bn: 'একটি শক্তিশালী ক্রিপ্টোগ্রাফিক প্রোটোকল (বর্তমান সংস্করণ TLS 1.3) যা নেটওয়ার্কে তথ্যের গোপনীয়তা, অখণ্ডতা এবং সার্ভারের সত্যতা নিশ্চিত করে।'
          }
        },
        {
          term: 'strict-transport-security',
          def: {
            en: 'An HTTP response header instructing browsers to strictly refuse insecure plain HTTP connections for a specified duration (e.g. 1 year).',
            bn: 'একটি এইচটিটিপি রেসপন্স হেডার যা ব্রাউজারকে নির্দিষ্ট সময়ের জন্য (যেমন ১ বছর) সাধারণ আন-এনক্রিপ্টেড এইচটিটিপি সংযোগ পুরোপুরি প্রত্যাখ্যান করতে বাধ্য করে।'
          }
        },
        {
          term: 'clickjacking-defense',
          def: {
            en: 'Defensive headers (X-Frame-Options: DENY and CSP frame-ancestors) preventing malicious sites from rendering your application inside transparent iframes.',
            bn: 'প্রতিরক্ষামূলক হেডার যা বাইরের ক্ষতিকর ওয়েবসাইটকে আপনার সাইটকে কোনো অদৃশ্য আইফ্রেমের (iframe) ভেতর রেখে ক্লিক চুরির সুযোগ দেওয়া বন্ধ করে।'
          }
        },
        {
          term: 'mime-sniffing-nosniff',
          def: {
            en: 'The X-Content-Type-Options: nosniff header prohibiting browsers from guessing file types when MIME headers differ from body bytes.',
            bn: 'X-Content-Type-Options: nosniff হেডার যা ব্রাউজারকে ফাইলের ভেতরের কোড আন্দাজ করে স্ক্রিপ্ট হিসেবে চালানো থেকে সম্পূর্ণ বিরত রাখে।'
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
      id: 'essential-security-headers-suite',
      text: {
        en: 'The Essential 5 Enterprise Security Headers Suite',
        bn: 'প্রয়োজনীয় ৫টি এন্টারপ্রাইজ সিকিউরিটি হেডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying a hardened web server requires configuring 5 distinct defensive HTTP response headers that turn the user browser into an active security enforcement agent.',
        bn: 'একটি সুরক্ষিত ওয়েব সার্ভার পরিচালনায় ৫টি অত্যন্ত গুরুত্বপূর্ণ এইচটিটিপি সিকিউরিটি হেডার কনফিগার করতে হয় যা ব্যবহারকারীর ব্রাউজারকে সরাসরি প্রতিরক্ষায় নিয়োজিত করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'HTTP Security Header', bn: 'এইচটিটিপি হেডার' },
        { en: 'Recommended Directive', bn: 'সুপারিশকৃত মান' },
        { en: 'Vulnerability Mitigated', bn: 'যে আক্রমণ প্রতিহত হয়' },
        { en: 'Enforcement Mechanism in Browser', bn: 'ব্রাউজারে প্রয়োগ পদ্ধতি' }
      ],
      rows: [
        [
          { en: 'Strict-Transport-Security', bn: 'Strict-Transport-Security' },
          { en: 'max-age=31536000; includeSubDomains; preload', bn: 'max-age=31536000; includeSubDomains; preload' },
          { en: 'SSL Stripping and protocol downgrade attacks', bn: 'এসএসএল স্ট্রিপিং ও আন-এনক্রিপ্টেড ডাউনগ্রেড' },
          { en: 'Forces browser to rewrite all http:// requests to https:// for 1 year', bn: '১ বছরের জন্য ব্রাউজারে সব http:// রিকোয়েস্টকে https:// এ রূপান্তর করে' }
        ],
        [
          { en: 'X-Frame-Options', bn: 'X-Frame-Options' },
          { en: 'DENY', bn: 'DENY' },
          { en: 'Clickjacking and UI redress attacks', bn: 'ক্লিকজ্যাকিং ও ইউআই রিড্রেস আক্রমণ' },
          { en: 'Completely blocks third-party sites from framing the page in an iframe', bn: 'অন্য কোনো সাইটে আইফ্রেমের মাধ্যমে পেজ প্রদর্শন পুরোপুরি বন্ধ করে' }
        ],
        [
          { en: 'X-Content-Type-Options', bn: 'X-Content-Type-Options' },
          { en: 'nosniff', bn: 'nosniff' },
          { en: 'MIME-confusion drive-by script execution', bn: 'MIME-কনফিউশন ও ড্রাইভ-বাই এক্সিকিউশন' },
          { en: 'Prohibits browser from guessing content type; strictly enforces declared MIME', bn: 'ঘোষিত MIME টাইপ ছাড়া ব্রাউজারকে ফাইল আন্দাজ করতে বাধা দেয়' }
        ],
        [
          { en: 'Referrer-Policy', bn: 'Referrer-Policy' },
          { en: 'strict-origin-when-cross-origin', bn: 'strict-origin-when-cross-origin' },
          { en: 'Sensitive token leakage via URL query paths', bn: 'ইউআরএল পাথ ও প্যারামিটার ফাঁস হওয়া' },
          { en: 'Strips URL paths and query parameters during cross-origin navigations', bn: 'বাইরের লিঙ্কে যাওয়ার সময় ইউআরএলের ভেতরের গোপন তথ্য মুছে কেবল ডোমেন পাঠায়' }
        ],
        [
          { en: 'Content-Security-Policy', bn: 'Content-Security-Policy' },
          { en: 'default-src \'self\'; script-src \'self\'', bn: 'default-src \'self\'; script-src \'self\'' },
          { en: 'Cross-Site Scripting (XSS) and data exfiltration', bn: 'ক্রস-সাইট স্ক্রিপ্টিং ও অননুমোদিত ডেটা চুরি' },
          { en: 'Restricts executable script, style, and media sources to trusted origins', bn: 'কেবল অনুমোদিত উৎস ছাড়া যেকোনো ক্ষতিকর স্ক্রিপ্ট ও মিডিয়া ব্লক করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-security-headers-code',
      text: {
        en: 'Executable Security Headers Auditor Simulation',
        bn: 'সিকিউরিটি হেডার্স অডিটরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an enterprise HTTP response header auditor: inspecting live server headers against the 5 core baseline standards and calculating a compliance percentage.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি কার্যকর সিকিউরিটি হেডার্স অডিটর বাস্তবায়ন করে: সার্ভারের রেসপন্স হেডারগুলোকে ৫টি মূল মানদণ্ডের সাথে তুলনা করে স্বয়ংক্রিয়ভাবে একটি শতকরা স্কোর তৈরি করে।'
      }
    },
    {
      type: 'code',
      code: `// Enterprise HTTP Security Headers Compliance Auditor

interface HeaderAuditRule {
  headerName: string;
  expectedDirective: string;
}

interface AuditReport {
  passedCount: number;
  totalCount: number;
  complianceScore: string;
}

function evaluateSecurityHeaders(
  responseHeaders: Record<string, string>
): AuditReport {
  const mandatoryRules: HeaderAuditRule[] = [
    { headerName: 'strict-transport-security', expectedDirective: 'max-age' },
    { headerName: 'content-security-policy', expectedDirective: 'default-src' },
    { headerName: 'x-frame-options', expectedDirective: 'deny' },
    { headerName: 'x-content-type-options', expectedDirective: 'nosniff' },
    { headerName: 'referrer-policy', expectedDirective: 'origin' }
  ];

  let passed = 0;

  for (const rule of mandatoryRules) {
    const headerValue = responseHeaders[rule.headerName]?.toLowerCase() || '';
    if (headerValue.includes(rule.expectedDirective)) {
      passed++;
    }
  }

  const scorePercentage = Math.round((passed / mandatoryRules.length) * 100);

  return {
    passedCount: passed,
    totalCount: mandatoryRules.length,
    complianceScore: scorePercentage + '%'
  };
}

// Enterprise hardened HTTP response headers
const productionHeaders: Record<string, string> = {
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'content-security-policy': "default-src 'self'; script-src 'self'",
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin'
};

const auditResults = evaluateSecurityHeaders(productionHeaders);

console.log('Audited headers passed:', auditResults.passedCount);
console.log('Total security headers checked:', auditResults.totalCount);
console.log('Overall compliance score:', auditResults.complianceScore);

// prints: Audited headers passed: 5
// prints: Total security headers checked: 5
// prints: Overall compliance score: 100%`
    },
    {
      type: 'heading',
      id: 'hsts-preload-tls-forward-secrecy',
      text: {
        en: 'HSTS Preload and Zero-Roundtrip TLS 1.3 Latency',
        bn: 'HSTS প্রিলোড এবং জিরো-রাউন্ডট্রিপ TLS 1.3 এর সুবিধা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional HTTPS redirection suffers from an initial vulnerability window: when a user types example.com into an address bar for the first time, the initial request goes over unencrypted HTTP (port 80) before receiving an HTTPS 301 redirect. An attacker on the local network can intercept that initial request and strip the redirect (an SSL Stripping attack). By enrolling in the browser HSTS Preload list, your domain is hardcoded directly into Chrome, Firefox, and Safari binaries. The browser guarantees that an unencrypted HTTP packet is never transmitted over the network under any circumstance.',
        bn: 'প্রথাগত এইচটিটিপিএস রিডাইরেকশনে প্রথমবার প্রবেশের সময় একটি সাময়িক ঝুঁকি থাকে: ব্যবহারকারী যখন ব্রাউজারে প্রথমবার example.com লিখে এন্টার দেন, তখন প্রথম রিকোয়েস্টটি পোর্ট ৮০ তে সাধারণ আন-এনক্রিপ্টেড অবস্থায় যায় এবং ৩০১ রিডাইরেক্ট পায়। লোকাল নেটওয়ার্কে থাকা আক্রমণকারী এই প্রাথমিক রিকোয়েস্ট আটকে দিয়ে এসএসএল স্ট্রিপিং (SSL Stripping) আক্রমণ ঘটাতে পারে। এর প্রতিকারে ব্রাউজারের HSTS Preload তালিকায় ডোমেন অন্তর্ভুক্ত করলে ক্রোম, ফায়ারফক্স ও সাফারির নিজস্ব কোডে ডোমেনটি স্থায়ীভাবে গেঁথে যায়। ফলে ব্রাউজার কখনোই নেটওয়ার্কে কোনো আন-এনক্রিপ্টেড রিকোয়েস্ট পাঠায় না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Enforce HSTS with long max-age: Configure Strict-Transport-Security for at least 1 year (31536000 seconds).',
          bn: 'দীর্ঘ মেয়াদের HSTS প্রয়োগ করুন: নূন্যতম ১ বছরের (৩১৫৩৬০০০ সেকেন্ড) জন্য Strict-Transport-Security চালু রাখুন।'
        },
        {
          en: 'Deny framing to kill clickjacking: Set X-Frame-Options: DENY and CSP frame-ancestors to prevent UI redress attacks.',
          bn: 'আইফ্রেমে প্রদর্শন নিষিদ্ধ করুন: ক্লিকজ্যাকিং আক্রমণ প্রতিরোধ করতে X-Frame-Options: DENY নির্ধারণ করুন।'
        },
        {
          en: 'Prevent MIME confusion: Always send X-Content-Type-Options: nosniff to stop browsers executing images as scripts.',
          bn: 'MIME বিভ্রান্তি রোধ করুন: ব্রাউজার যেন ছবিকে স্ক্রিপ্ট হিসেবে না চালায় সেজন্য nosniff হেডার ব্যবহার করুন।'
        },
        {
          en: 'Truncate cross-origin referrers: Use Referrer-Policy: strict-origin-when-cross-origin to protect confidential URL paths.',
          bn: 'রেফারার হেডার সংক্ষেপ করুন: ইউআরএল থেকে গোপন তথ্য ফাঁস হওয়া ঠেকাতে strict-origin-when-cross-origin ব্যবহার করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-authority-keep',
    tech: 'security-fundamentals',
    title: {
      en: 'The Authority Keep — Broken Access Control, IDOR, and Role-Based Authorization',
      bn: 'অথরিটি কিপ: ব্রোকেন অ্যাক্সেস কন্ট্রোল, IDOR ও রোল-ভিত্তিক অনুমোদন'
    }
  },
  exercises: [
    {
      id: 'proto-ex1',
      kind: 'mcq',
      topic: 'hsts-ssl-stripping-defense',
      question: {
        en: 'How does HTTP Strict Transport Security (HSTS) with the preload directive prevent SSL Stripping Man-in-the-Middle attacks?',
        bn: 'প্রিলোড ডিরেক্টিভসহ HTTP Strict Transport Security (HSTS) কীভাবে এসএসএল স্ট্রিপিং আক্রমণ প্রতিহত করে?'
      },
      options: [
        {
          en: 'The domain is hardcoded into browser installation binaries, instructing the browser to strictly connect via HTTPS from the very first request and never emit an unencrypted HTTP packet',
          bn: 'ডোমেনটি ব্রাউজারের ইনস্টলেশন ফাইলেই স্থায়ীভাবে গেঁথে দেওয়া থাকে, যার ফলে ব্রাউজার প্রথম রিকোয়েস্ট থেকেই কেবল HTTPS ব্যবহার করে এবং কখনোই কোনো আন-এনক্রিপ্টেড ডেটা পাঠায় না'
        },
        {
          en: 'HSTS increases internet connection upload bandwidth by 500 percent',
          bn: 'HSTS ব্যবহারের ফলে ইন্টারনেটের আপলোড স্পিড ৫০০ শতাংশ বেড়ে যায়'
        },
        {
          en: 'HSTS automatically deletes all browser bookmarks every night',
          bn: 'HSTS প্রতিদিন রাতে ব্রাউজারের সমস্ত বুকমার্ক নিজে থেকেই মুছে ফেলে'
        },
        {
          en: 'Because HSTS turns all server network routers into optical lasers',
          bn: 'কারণ HSTS সমস্ত সার্ভার রাউটারকে অপটিক্যাল লেজারে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preloading eliminates the initial unencrypted HTTP redirect window entirely.',
        bn: 'প্রিলোড ব্যবহারের ফলে প্রথমবার সাধারণ এইচটিটিপিতে প্রবেশের সুযোগটি চিরতরে বন্ধ হয়ে যায়।'
      },
      explanation: {
        en: 'HSTS Preload eliminates the vulnerable first-contact plaintext redirect by embedding HTTPS requirements into the browser source code.',
        bn: 'HSTS প্রিলোড ব্রাউজারের সোর্স কোডেই নিয়মটি ঢুকিয়ে দেয়, ফলে কোনো অনিরাপদ রিডাইরেকশনের ঝুঁকি থাকে না।'
      }
    },
    {
      id: 'proto-ex2',
      kind: 'mcq',
      topic: 'x-frame-options-clickjacking',
      question: {
        en: 'What specific web application attack does the HTTP response header "X-Frame-Options: DENY" directly neutralize?',
        bn: '"X-Frame-Options: DENY" হেডারটি সরাসরি কোন ধরনের ওয়েব আক্রমণ সম্পূর্ণ নিষ্ক্রিয় করে দেয়?'
      },
      options: [
        {
          en: 'Clickjacking (UI Redress attacks), where an adversary embeds your authenticated website inside a transparent iframe underneath a deceptive decoy button',
          bn: 'ক্লিকজ্যাকিং (UI Redress আক্রমণ), যেখানে আক্রমণকারী একটি ভুয়া বাটনের নিচে আপনার লগইন করা পেজটিকে একটি অদৃশ্য আইফ্রেমের ভেতর লুকিয়ে রাখে'
        },
        {
          en: 'SQL Injection attacks attempting to drop database tables',
          bn: 'ডেটাবেসের টেবিল মুছে ফেলার এসকিউএল ইনজেকশন আক্রমণ'
        },
        {
          en: 'Denial-of-Service attacks attempting to flood server CPU memory',
          bn: 'সার্ভারের প্রসেসর মেমরি উপচে ফেলার ডস (DoS) আক্রমণ'
        },
        {
          en: 'Network cable wiretapping at transatlantic undersea junctions',
          bn: 'সমুদ্রের নিচের ইন্টারনেট ক্যাবলে শারীরিক নজরদারি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think: Can an external site frame your page in an iframe? Not if DENY is set.',
        bn: 'ভাবুন: DENY করা থাকলে কোনো বহিরাগত সাইট কি আপনার পেজকে আইফ্রেমে লোড করতে পারবে? কখনোই না।'
      },
      explanation: {
        en: 'X-Frame-Options: DENY prevents iframe embedding, frustrating clickjacking overlays entirely.',
        bn: 'X-Frame-Options: DENY আইফ্রেমের ব্যবহার পুরোপুরি নিষিদ্ধ করে ক্লিকজ্যাকিং আক্রমণ বন্ধ করে।'
      }
    },
    {
      id: 'proto-ex3',
      kind: 'mcq',
      topic: 'mime-sniffing-nosniff',
      question: {
        en: 'Why is the header "X-Content-Type-Options: nosniff" critical when serving user-uploaded image files from your web servers?',
        bn: 'সার্ভার থেকে ব্যবহারকারীর আপলোড করা ছবি প্রদর্শনের সময় "X-Content-Type-Options: nosniff" হেডারটি কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'It stops the browser from "sniffing" the file body; without it, an uploaded text or HTML file disguised as a .png image could be executed as active JavaScript by the browser',
          bn: 'এটি ব্রাউজারকে ফাইলের ভেতরের লেখা আন্দাজ করা থেকে বিরত রাখে; এটি না থাকলে আক্রমণকারীর আপলোড করা ক্ষতিকর স্ক্রিপ্টকে ব্রাউজার নিজে থেকে চালিয়ে দিতে পারত'
        },
        {
          en: 'Nosniff compresses image files down to 10 percent of their original size',
          bn: 'Nosniff ছবির সাইজ সংকুচিত করে আসল সাইজের ১০ শতাংশে নামিয়ে আনে'
        },
        {
          en: 'Because nosniff converts all black-and-white photos into full color',
          bn: 'কারণ nosniff সব সাদাকালো ছবিকে রঙিন ছবিতে বদলে দেয়'
        },
        {
          en: 'Nosniff is required to display images on high-definition computer monitors',
          bn: 'উচ্চমানের মনিটরে ছবি দেখাতে nosniff ব্যবহার বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'MIME sniffing means guessing the file type based on contents rather than trusting the Content-Type header.',
        bn: 'MIME স্নীফিং মানে হেডার না মেনে ফাইলের ভেতরের লেখা দেখে ব্রাউজারের নিজে নিজে সিদ্ধান্ত নেওয়া।'
      },
      explanation: {
        en: 'The nosniff directive forces the browser to strictly honor the declared Content-Type header rather than attempting heuristic execution.',
        bn: 'nosniff ব্রাউজারকে ঘোষিত হেডার মেনে চলতে বাধ্য করে এবং কোনো অনুমানমূলক কোড চালানো সম্পূর্ণ বন্ধ করে।'
      }
    },
    {
      id: 'proto-ex4',
      kind: 'mcq',
      topic: 'referrer-policy-token-leakage',
      question: {
        en: 'Why is "Referrer-Policy: strict-origin-when-cross-origin" a recommended default for modern web applications?',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনে কেন "Referrer-Policy: strict-origin-when-cross-origin" একটি অত্যন্ত সুপারিশকৃত মান?'
      },
      options: [
        {
          en: 'It preserves full URL paths for internal navigation, but strips private paths and sensitive query tokens (such as password reset tokens) when users click external links',
          bn: 'এটি নিজের সাইটের ভেতরে সম্পূর্ণ ইউআরএল পাথ বজায় রাখে, কিন্তু ব্যবহারকারী বাইরের লিঙ্কে গেলে ইউআরএলের ভেতরের গোপন টোকেন মুছে কেবল মূল ডোমেনটি পাঠায়'
        },
        {
          en: 'It forces client browsers to refresh the page every 5 seconds',
          bn: 'এটি ব্রাউজারকে প্রতি ৫ সেকেন্ড পরপর পেজ রিলোড করতে বাধ্য করে'
        },
        {
          en: 'Because external websites charge money if full URL paths are transmitted',
          bn: 'কারণ পুরো ইউআরএল পাঠালে বাইরের ওয়েবসাইটগুলো টাকা দাবি করে'
        },
        {
          en: 'It encrypts the client computer motherboard serial number',
          bn: 'এটি ক্লায়েন্টের মাদারবোর্ডের সিরিয়াল নম্বর এনক্রিপ্ট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a URL is /reset-password?token=secret123, clicking an external link should not leak that secret token in the Referer header.',
        bn: 'যদি লিঙ্কে গোপন টোকেন থাকে, তবে বাইরের সাইটে যাওয়ার সময় যেন সেই টোকেনটি ফাঁস না হয় তা নিশ্চিত করাই এর কাজ।'
      },
      explanation: {
        en: 'Strict-origin-when-cross-origin protects confidential tokens in URL parameters by truncating cross-origin referrers to bare domain origins.',
        bn: 'এই নীতি বহিরাগত সাইটে কেবল মূল ডোমেন পাঠিয়ে ইউআরএল প্যারামিটারে থাকা সমস্ত গোপন তথ্য সুরক্ষিত রাখে।'
      }
    }
  ],
  quiz: {
    id: 'protocol-seals-quiz',
    title: {
      en: 'HTTPS, TLS Handshakes, and Defensive Headers Quiz',
      bn: 'এইচটিটিপিএস, টিএলএস হ্যান্ডশেক ও সিকিউরিটি হেডার্স কুইজ'
    },
    questions: [
      {
        id: 'ps-q1',
        kind: 'mcq',
        topic: 'tls-perfect-forward-secrecy',
        question: {
          en: 'What critical protection does Perfect Forward Secrecy (PFS) provide in modern TLS 1.3 encrypted sessions?',
          bn: 'আধুনিক TLS 1.3 এনক্রিপশনে পারফেক্ট ফরোয়ার্ড সিক্রেসি (PFS) কোন অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা দেয়?'
        },
        options: [
          {
            en: 'Session keys are ephemeral and discarded immediately after use; even if the server private key is compromised in the future, past recorded traffic cannot be decrypted',
            bn: 'সেশন কিগুলো ক্ষণস্থায়ী হওয়ায় কাজ শেষে সাথে সাথে মুছে যায়; ফলে ভবিষ্যতে সার্ভারের মূল প্রাইভেট কি ফাঁস হলেও অতীতের রেকর্ড করা ট্রাফিক ডিক্রিপ্ট করা অসম্ভব'
          },
          {
            en: 'PFS speeds up server processing clocks by exactly 10 gigahertz',
            bn: 'PFS ব্যবহারের ফলে সার্ভারের গতি ১০ গিগাহার্টজ বেড়ে যায়'
          },
          {
            en: 'PFS permanently blocks users from taking screenshots on their monitors',
            bn: 'PFS মনিটরে স্ক্রিনশট নেওয়া পুরোপুরি বন্ধ করে দেয়'
          },
          {
            en: 'Because TLS 1.3 was declared a national monument in 2023',
            bn: 'কারণ ২০২৩ সালে TLS 1.3 কে একটি সংরক্ষিত জাতীয় প্রযুক্তি ঘোষণা করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Past sessions stay locked forever, even if the main house key is stolen tomorrow.',
          bn: 'ভবিষ্যতে মূল চাবি চুরি হলেও অতীতের সমস্ত যোগাযোগ চিরদিনের জন্য সুরক্ষিত থাকে।'
        },
        explanation: {
          en: 'Ephemeral Diffie-Hellman key exchanges ensure that historical captured network ciphertext remains permanently undecipherable.',
          bn: 'ক্ষণস্থায়ী কি ব্যবহারের কারণে নেটওয়ার্কে রেকর্ড করে রাখা অতীত তথ্য কখনোই উন্মোচন করা যায় না।'
        }
      },
      {
        id: 'ps-q2',
        kind: 'mcq',
        topic: 'hsts-max-age-configuration',
        question: {
          en: 'Why is setting the HSTS max-age directive to at least 1 year (31536000 seconds) required for HSTS Preload submission?',
          bn: 'HSTS প্রিলোড তালিকায় অন্তর্ভুক্ত হতে হলে কেন max-age নূন্যতম ১ বছর (৩১৫৩৬০০০ সেকেন্ড) নির্ধারণ করা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'A 1-year duration ensures long-term commitment to HTTPS and prevents applications from oscillating between secure and insecure states, eliminating downgrade windows',
            bn: '১ বছরের দীর্ঘ মেয়াদ নিশ্চিত করে যে সাইটটি স্থায়ীভাবে HTTPS ব্যবহারে প্রতিশ্রুত এবং ঘন ঘন নিয়ম বদলে কোনো অনিরাপদ ডাউনগ্রেডের ঝুঁকি তৈরি করবে না'
          },
          {
            en: 'Browser software licenses expire if max-age is set to less than 1 year',
            bn: '১ বছরের কম মেয়াদ দিলে ব্রাউজারের লাইসেন্স বাতিল হয়ে যায়'
          },
          {
            en: 'Because standard web servers can only count time in increments of 1 year',
            bn: 'কারণ সার্ভার কেবল ১ বছর এককে সময় গণনা করতে পারে'
          },
          {
            en: 'International banking treaties mandate the number 31536000 for server power switches',
            bn: 'কারণ আন্তর্জাতিক ব্যাংকিং আইনে ৩১৫৩৬০০০ সংখ্যাটি ব্যবহারের বাধ্যবাধকতা রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Security is a long-term commitment. One year (31536000 seconds) proves your domain is fully HTTPS ready.',
          bn: 'দীর্ঘমেয়াদী প্রতিশ্রুতি: ১ বছর (৩১৫৩৬০০০ সেকেন্ড) মানে সাইটটি কোনো অবস্থাতেই আন-এনক্রিপ্টেড অবস্থায় ফিরবে না।'
        },
        explanation: {
          en: 'Browser vendors mandate a minimum 1-year max-age (31536000 seconds) to ensure domains accepted into preload lists do not revert to plaintext.',
          bn: 'ব্রাউজার নির্মাতারা নিশ্চিত হতে চান যে সাইটটি দীর্ঘদিন নিরাপদে থাকবে, তাই ১ বছর বা ৩১৫৩৬০০০ সেকেন্ডের সময়সীমা বাধ্যতামূলক।'
        }
      },
      {
        id: 'ps-q3',
        kind: 'mcq',
        topic: 'certificate-authority-verification',
        question: {
          en: 'When your browser establishes a TLS connection with a web server, how does it verify that the server public key is authentic rather than a forgery from an attacker?',
          bn: 'ব্রাউজার যখন কোনো সার্ভারের সাথে টিএলএস সংযোগ স্থাপন করে, তখন সে কীভাবে নিশ্চিত হয় যে পাবলিক কি-টি আসল এবং কোনো আক্রমণকারীর জাল করা কি নয়?'
        },
        options: [
          {
            en: 'The browser verifies the cryptographic signature on the server X.509 certificate against the pre-installed root certificates of trusted Certificate Authorities (CAs) embedded in the operating system',
            bn: 'অপারেটিং সিস্টেমে আগে থেকেই সংরক্ষিত বিশ্বস্ত সার্টিফিকেট অথরিটির (CA) ডিজিটাল স্বাক্ষর মিলিয়ে ব্রাউজার নিশ্চিত হয় যে সার্ভারের সার্টিফিকেটটি আসল'
          },
          {
            en: 'The browser places an automated telephone call to the server administrator',
            bn: 'ব্রাউজার নিজে থেকে সার্ভারের মালিককে ফোন করে সত্যতা যাচাই করে'
          },
          {
            en: 'Because all authentic certificates are exactly 12 bytes long',
            bn: 'কারণ সমস্ত আসল সার্টিফিকেটের সাইজ ঠিক ১২ বাইট হয়ে থাকে'
          },
          {
            en: 'The browser compares the server color scheme against a public database',
            bn: 'ব্রাউজার সার্ভারের ওয়েবসাইটের কালার মিলিয়ে সত্যতা যাচাই করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The root certificate trust store in your OS or browser verifies the cryptographic signature chain.',
          bn: 'অপারেটিং সিস্টেমে থাকা বিশ্বস্ত সিএ তালিকা ক্রিপ্টোগ্রাফিক চেইন যাচাই করে প্রমাণ দেয়।'
        },
        explanation: {
          en: 'The public key infrastructure (PKI) relies on a cryptographic chain of trust rooted in trusted Certificate Authority anchors.',
          bn: 'পাবলিক কি ইনফ্রাস্ট্রাকচার (PKI) একটি বিশ্বস্ত চেইনের ওপর ভিত্তি করে সার্ভারের সঠিক পরিচয় নিশ্চিত করে।'
        }
      },
      {
        id: 'ps-q4',
        kind: 'mcq',
        topic: 'tls-handshake-roundtrips-1-3',
        question: {
          en: 'What major performance improvement was achieved in TLS 1.3 compared to TLS 1.2 during the initial cryptographic handshake?',
          bn: 'টিএলএস ১.২ এর তুলনায় আধুনিক টিএলএস ১.৩ এ প্রাথমিক ক্রিপ্টোগ্রাফিক হ্যান্ডশেক প্রক্রিয়ায় কোন বিশাল গতিগত উন্নতি সাধিত হয়েছে?'
        },
        options: [
          {
            en: 'TLS 1.3 reduced the initial handshake latency from 2 full round-trips (2-RTT) down to just 1 round-trip (1-RTT), dramatically reducing connection setup time across mobile and cloud networks',
            bn: 'TLS 1.3 প্রাথমিক হ্যান্ডশেক সময়কে ২টি পূর্ণ রাউন্ড-ট্রিপ (2-RTT) থেকে কমিয়ে মাত্র ১টি রাউন্ড-ট্রিাপে (1-RTT) নামিয়ে এনেছে, যা সংযোগের গতি বহুগুণ বাড়িয়ে দেয়'
          },
          {
            en: 'TLS 1.3 completely eliminated the need for computers to use electricity',
            bn: 'TLS 1.3 ব্যবহারে কম্পিউটারে কোনো বিদ্যুৎ খরচের প্রয়োজন হয় না'
          },
          {
            en: 'TLS 1.3 requires 100 days of processing time to establish each connection',
            bn: 'TLS 1.3 এ প্রতি সংযোগে ১০০ দিন সময় লাগে'
          },
          {
            en: 'Handshakes in TLS 1.3 are conducted over analog radio frequencies',
            bn: 'TLS 1.3 এর সমস্ত হ্যান্ডশেক রেডিও তরঙ্গের মাধ্যমে পরিচালিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'From 2 round-trips to 1 round-trip: half the network latency to start an encrypted connection.',
          bn: '২টি রাউন্ড-ট্রিপ থেকে মাত্র ১টি রাউন্ড-ট্রিাপে নেমে আসায় সংযোগ তৈরি হয় দ্বিগুণ দ্রুত।'
        },
        explanation: {
          en: 'TLS 1.3 combines key exchange and cipher parameter negotiation into the initial ClientHello, cutting handshake overhead to a single round-trip.',
          bn: 'TLS 1.3 প্রথম বার্তাটিতেই চাবি ও নিয়মগুলো একসাথে পাঠিয়ে নেটওয়ার্ক বিলম্ব অর্ধেক কমিয়ে দেয়।'
        }
      }
    ]
  }
};
