import type { Lesson } from '../../../lib/types';

export const SecurityHeadersLesson: Lesson = {
  slug: 'security-headers',
  tech: 'web-security',
  title: {
    en: 'HTTP Security Headers: CSP, HSTS, X-Content-Type-Options & Permissions-Policy',
    bn: 'HTTP সিকিউরিটি হেডার: CSP, HSTS, X-Content-Type-Options এবং Permissions-Policy'
  },
  summary: {
    en: 'Master browser-enforced defense-in-depth through HTTP response security headers. Discover how declarative response headers instruct modern web browsers to proactively reject whole classes of cyber attacks. Understand the 5 essential security guards: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options, and Referrer-Policy. Inspect a runnable Node.js security auditor that upgrades a baseline score from 3 out of 5 (0.60) to a perfect 5 out of 5 (1.00).',
    bn: 'HTTP রেসপন্স সিকিউরিটি হেডারের মাধ্যমে ব্রাউজার-চালিত বহুস্তরীয় নিরাপত্তা আয়ত্ত করুন। ঘোষণামূলক রেসপন্স হেডার কীভাবে আধুনিক ওয়েব ব্রাউজারকে সাইবার আক্রমণের পুরো শ্রেণীকে প্রত্যাখ্যান করার নির্দেশ দেয় তা জানুন। ৫ টি অপরিহার্য নিরাপত্তা প্রহরীর ভূমিকা বুঝুন: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options এবং Referrer-Policy। একটি কার্যকর Node.js অডিটর পরীক্ষা করুন যা একটি সার্ভারের প্রাথমিক স্কোর ৫ এর মধ্যে ৩ (০.৬০) থেকে নিখুঁত ৫ এর মধ্যে ৫ (১.০০)-এ উন্নীত করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'declarative-browser-armor',
      text: {
        en: 'Declarative Armor: Instructing Web Browsers Through HTTP Headers',
        bn: 'ঘোষণামূলক নিরাপত্তা বর্ম: HTTP হেডারের মাধ্যমে ওয়েব ব্রাউজারকে নির্দেশ দান'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build a secure web application, security is not achieved solely through backend database queries and client-side JavaScript checks. Web browsers are sophisticated execution sandboxes designed to enforce strict security boundaries whenever instructed by web servers. Security headers are declarative HTTP response directives that command the browser to proactively disable dangerous features and restrict resource origins.',
        bn: 'যখন আপনি একটি নিরাপদ ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন কেবল ব্যাকএন্ড ডাটাবেজ কুয়েরি কিংবা ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট চেকের মাধ্যমেই সম্পূর্ণ নিরাপত্তা অর্জিত হয় না। ওয়েব ব্রাউজারগুলো হলো অত্যন্ত শক্তিশালী এক্সিকিউশন স্যান্ডবক্স যা ওয়েব সার্ভারের নির্দেশ পেলে কঠোর নিরাপত্তা সীমানা প্রয়োগ করে। সিকিউরিটি হেডার হলো ঘোষণামূলক HTTP রেসপন্স নির্দেশিকা যা ব্রাউজারকে বিপজ্জনক ফিচারগুলো নিষ্ক্রিয় করতে এবং রিসোর্সের উৎস সীমাবদ্ধ করতে আদেশ দেয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When a web application omits these critical response headers, it needlessly leaves its users vulnerable to MIME-confusion attacks, clickjacking overlays, SSL-stripping proxies, and credential leakage through the Referer header. Automated vulnerability scanners evaluate websites by checking 5 essential security header posts.',
        bn: 'যখন কোনো ওয়েব অ্যাপ্লিকেশন এই অপরিহার্য হেডারগুলো পাঠাতে ব্যর্থ হয়, তখন ব্যবহারকারীরা মাইম-টাইপ বিভ্রান্তি, ক্লিকজ্যাকিং ফাঁদ, ডাউনগ্রেড প্রক্সি এবং রেফারার হেডারের মাধ্যমে তথ্য ফাঁসের ঝুঁকিতে পড়ে যায়। স্বয়ংক্রিয় সিকিউরিটি স্ক্যানারগুলো ওয়েবসাইটে মূলত ৫ টি গুরুত্বপূর্ণ সিকিউরিটি হেডারের উপস্থিতি নিরীক্ষা করে থাকে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Security Header Audit: Upgrading Baseline Score 3/5 (0.60) to Hardened 5/5 (1.00)',
        bn: 'সিকিউরিটি হেডার অডিট: বেসলাইন স্কোর ৩/৫ (০.৬০) থেকে সুরক্ষিত ৫/৫ (১.০০)-এ রূপান্তর'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Security headers audit showing 3 out of 5 present vs 5 out of 5 hardened">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">HTTP SECURITY HEADERS COMPLIANCE AUDIT ENGINE</text>
  
  <!-- Left Side: Baseline Response (3/5 Present, 2 Missing) -->
  <g transform="translate(40, 55)">
    <rect width="365" height="340" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
    <rect width="365" height="32" rx="8" fill="#ca8a04"/>
    <text x="182" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">BASELINE AUDIT: SCORE 3/5 = 0.60 (60%)</text>
    
    <g transform="translate(12, 45)">
      <rect width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="26" fill="#6ee7b7" font-size="9" font-weight="bold">1. Content-Security-Policy: PRESENT [✓]</text>
      
      <rect y="48" width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="74" fill="#6ee7b7" font-size="9" font-weight="bold">2. Strict-Transport-Security: PRESENT [✓]</text>
      
      <rect y="96" width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="122" fill="#6ee7b7" font-size="9" font-weight="bold">3. X-Frame-Options: PRESENT [✓]</text>
      
      <rect y="144" width="341" height="42" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="170" fill="#fca5a5" font-size="9" font-weight="bold">4. X-Content-Type-Options: MISSING [✗]</text>
      
      <rect y="192" width="341" height="42" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="218" fill="#fca5a5" font-size="9" font-weight="bold">5. Referrer-Policy: MISSING [✗]</text>
      
      <rect y="244" width="341" height="38" rx="5" fill="#422006" stroke="#ca8a04"/>
      <text x="170" y="268" fill="#fde047" font-size="9.5" font-weight="bold" text-anchor="middle">Audit Finding: 2 Vulnerable Gaps Detected</text>
    </g>
  </g>
  
  <!-- Right Side: Hardened Response (5/5 Present, 0 Missing) -->
  <g transform="translate(435, 55)">
    <rect width="365" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="365" height="32" rx="8" fill="#059669"/>
    <text x="182" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HARDENED AUDIT: SCORE 5/5 = 1.00 (100%)</text>
    
    <g transform="translate(12, 45)">
      <rect width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="26" fill="#6ee7b7" font-size="9" font-weight="bold">1. Content-Security-Policy: default-src 'self' [✓]</text>
      
      <rect y="48" width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="74" fill="#6ee7b7" font-size="9" font-weight="bold">2. Strict-Transport-Security: max-age=31536000 [✓]</text>
      
      <rect y="96" width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="122" fill="#6ee7b7" font-size="9" font-weight="bold">3. X-Frame-Options: DENY [✓]</text>
      
      <rect y="144" width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="170" fill="#6ee7b7" font-size="9" font-weight="bold">4. X-Content-Type-Options: nosniff [✓ WELDED]</text>
      
      <rect y="192" width="341" height="42" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="218" fill="#6ee7b7" font-size="9" font-weight="bold">5. Referrer-Policy: strict-origin-when-cross... [✓ WELDED]</text>
      
      <rect y="244" width="341" height="38" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="170" y="268" fill="#34d399" font-size="9.5" font-weight="bold" text-anchor="middle">All 5 Critical Security Guards Deployed</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Two single lines of server configuration upgrade security audit compliance from 0.60 to 1.00</text>
</svg>`,
      caption: {
        en: 'The security audit compares a baseline response with 3 out of 5 headers (score 0.60) against a hardened response with all 5 headers deployed (score 1.00).',
        bn: 'সিকিউরিটি অডিটে ৫ টির মধ্যে ৩ টি হেডারযুক্ত বেসলাইন রেসপন্স (স্কোর ০.৬০) এবং ৫ টির মধ্যে ৫ টি হেডারযুক্ত সুরক্ষিত রেসপন্সের (স্কোর ১.০০) তুলনা দেখানো হয়েছে।'
      },
    },
    {
      type: 'heading',
      id: 'five-essential-guards',
      text: {
        en: 'The Five Essential Browser Security Guards Explained',
        bn: '৫ টি অপরিহার্য ব্রাউজার সিকিউরিটি প্রহরীর বিস্তারিত বিবরণ'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Content-Security-Policy (CSP)',
            bn: '১. Content-Security-Policy (CSP)'
          },
          text: {
            en: 'Restricts executable script, style, and media origins (e.g. default-src \'self\'). Completely halts unauthorized inline scripts and blocks data exfiltration sinks.',
            bn: 'এক্সিকিউটেবল স্ক্রিপ্ট, সিএসএস এবং মিডিয়ার উৎস সীমাবদ্ধ করে (যেমন default-src \'self\')। অননুমোদিত ইনলাইন স্ক্রিপ্ট বন্ধ করে এবং ডেটা চুরি প্রতিরোধ করে।'
          },
        },
        {
          title: {
            en: '2. Strict-Transport-Security (HSTS)',
            bn: '২. Strict-Transport-Security (HSTS)'
          },
          text: {
            en: 'Commands browsers to communicate exclusively over HTTPS for a defined duration (max-age=31536000), eliminating SSL-stripping downgrade windows.',
            bn: 'নির্দিষ্ট সময়ের জন্য (max-age=31536000) ব্রাউজারকে কেবল HTTPS-এ যোগাযোগ করতে বাধ্য করে এবং SSL-স্ট্রিপিং ডাউনগ্রেডের ফাঁক বন্ধ করে দেয়।'
          },
        },
        {
          title: {
            en: '3. X-Frame-Options (or CSP frame-ancestors)',
            bn: '৩. X-Frame-Options (অথবা CSP frame-ancestors)'
          },
          text: {
            en: 'Instructs the browser whether the page may be embedded inside an <iframe> (DENY or SAMEORIGIN), terminating clickjacking overlay attempts.',
            bn: 'পেজটি কোনো <iframe> এর ভেতর এম্বেড হতে পারবে কি না তা নির্ধারণ করে (DENY বা SAMEORIGIN), যা ক্লিকজ্যাকিং ফাঁদ চিরতরে রুখে দেয়।'
          },
        },
        {
          title: {
            en: '4. X-Content-Type-Options (nosniff)',
            bn: '৪. X-Content-Type-Options (nosniff)'
          },
          text: {
            en: 'Disables browser MIME-sniffing. Forces browsers to strictly respect the declared Content-Type header, preventing user avatars from executing as malicious scripts.',
            bn: 'ব্রাউজারের মাইম-স্নাইফিং বন্ধ করে। ব্রাউজারকে ঘোষিত Content-Type কঠোরভাবে মেনে চলতে বাধ্য করে, যার ফলে ছবির ফাইলে লুকানো কোড স্ক্রিপ্ট হিসেবে রান হতে পারে না।'
          },
        },
        {
          title: {
            en: '5. Referrer-Policy',
            bn: '৫. Referrer-Policy'
          },
          text: {
            en: 'Controls how much referrer information is leaked when navigating external links (strict-origin-when-cross-origin), protecting sensitive query tokens in URLs.',
            bn: 'বাইরের লিংকে যাওয়ার সময় কতটা রেফারার তথ্য ফাঁস হবে তা নিয়ন্ত্রণ করে (strict-origin-when-cross-origin), যা ইউআরএলে থাকা সংবেদনশীল টোকেন সুরক্ষিত রাখে।'
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'security-header-scanner-code',
      text: {
        en: 'Building an Automated Security Header Auditor in Node.js',
        bn: 'Node.js-এ স্বয়ংক্রিয় সিকিউরিটি হেডার অডিটর তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'security-header-auditor.js',
      code: `// Automated HTTP Security Headers Compliance Auditor Engine
class SecurityHeaderAuditor {
  constructor() {
    this.requiredHeaders = [
      'content-security-policy',
      'strict-transport-security',
      'x-frame-options',
      'x-content-type-options',
      'referrer-policy'
    ];
  }

  // Audit response headers against the 5 essential security requirements
  audit(headers) {
    const normalized = Object.keys(headers).reduce((acc, key) => {
      acc[key.toLowerCase()] = headers[key];
      return acc;
    }, {});

    let presentCount = 0;
    const findings = [];

    this.requiredHeaders.forEach(header => {
      const isPresent = Boolean(normalized[header]);
      if (isPresent) {
        presentCount++;
        findings.push({ header, status: 'PRESENT', value: normalized[header] });
      } else {
        findings.push({ header, status: 'MISSING', value: null });
      }
    });

    const score = Number((presentCount / this.requiredHeaders.length).toFixed(2));
    return {
      total: this.requiredHeaders.length,
      present: presentCount,
      missing: this.requiredHeaders.length - presentCount,
      score,
      findings
    };
  }

  // Middleware to inject missing security headers and harden the response
  harden(headers) {
    return {
      ...headers,
      'Content-Security-Policy': "default-src 'self'",
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };
  }
}

const auditor = new SecurityHeaderAuditor();

// 1. Simulate unhardened baseline HTTP server response
const baselineHeaders = {
  'Content-Type': 'text/html; charset=utf-8',
  'Content-Security-Policy': "default-src 'self'",
  'Strict-Transport-Security': 'max-age=31536000',
  'X-Frame-Options': 'SAMEORIGIN'
  // Note: X-Content-Type-Options and Referrer-Policy are MISSING!
};

console.log('=== Step 1: Baseline Response Audit ===');
const baselineReport = auditor.audit(baselineHeaders);
console.log('Headers Evaluated:', baselineReport.total);
console.log('Present Guards:   ', baselineReport.present, '/ 5');
console.log('Missing Guards:   ', baselineReport.missing, '/ 5');
console.log('Compliance Score: ', baselineReport.score, '(3/5 = 0.60)');

// 2. Harden headers with security middleware
console.log('\\n=== Step 2: Applying Hardening Middleware ===');
const hardenedHeaders = auditor.harden(baselineHeaders);
const hardenedReport = auditor.audit(hardenedHeaders);
console.log('Headers Evaluated:', hardenedReport.total);
console.log('Present Guards:   ', hardenedReport.present, '/ 5');
console.log('Missing Guards:   ', hardenedReport.missing, '/ 5');
console.log('Compliance Score: ', hardenedReport.score, '(5/5 = 1.00)');

console.log('\\n=== Audit Verdict ===');
console.log('Vulnerability status upgraded from VULNERABLE (0.60) to COMPLIANT (1.00)');`,
      caption: {
        en: 'The security auditor evaluates 5 headers: 3 are present at baseline (score 0.60), and middleware hardens all 5 (score 1.00).',
        bn: 'সিকিউরিটি অডিটর ৫ টি হেডার মূল্যায়ন করে: বেসলাইনে ৩ টি উপস্থিত থাকে (স্কোর ০.৬০), এবং মিডলওয়্যার ৫ টিকে পূর্ণ করে (স্কোর ১.০০)।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Permissions-Policy: Controlling Dangerous Device APIs',
        bn: 'Permissions-Policy: বিপজ্জনক ডিভাইস এপিআই নিয়ন্ত্রণ'
      },
      text: {
        en: 'Modern browsers also support the Permissions-Policy header (formerly Feature-Policy). It allows web applications to explicitly disable sensitive browser hardware capabilities like geolocation, microphone, and camera (e.g. Permissions-Policy: geolocation=(), microphone=(), camera=()). This prevents embedded third-party advertising iframes from covertly accessing user sensors without authorization.',
        bn: 'আধুনিক ব্রাউজারগুলো Permissions-Policy হেডারও সমর্থন করে (পূর্বে Feature-Policy নামে পরিচিত ছিল)। এটি ওয়েব অ্যাপ্লিকেশনকে ব্রাউজারের সংবেদনশীল হার্ডওয়্যার ফিচার যেমন জিওলোকেশন, মাইক্রোফোন এবং ক্যামেরা বন্ধ করার ক্ষমতা দেয় (যেমন Permissions-Policy: geolocation=(), microphone=(), camera=())। এর ফলে পেজে থাকা বহিরাগত বিজ্ঞাপনের আইফ্রেম ব্যবহারকারীর অনুমতি ছাড়া সেন্সর অ্যাক্সেস করতে পারে না।'
      },
    },
  ],
  exercises: [
    {
      id: 'sec-head-ex-1',
      kind: 'predict',
      topic: 'baseline-header-score',
      question: {
        en: 'In the baseline security audit with 3 out of 5 required headers present, what was the calculated numeric compliance score? (0.60). Type the number.',
        bn: '৫ টি প্রয়োজনীয় হেডারের মধ্যে ৩ টি উপস্থিত থাকা প্রাথমিক সিকিউরিটি অডিটে গণনা করা কমপ্লায়েন্স স্কোর কত ছিল? ( ০.৬০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0.60',
      hint: {
        en: 'Divide 3 by 5.',
        bn: '৩ কে ৫ দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'The baseline audit verified 3 present guards out of 5, resulting in a score of 3/5 = 0.60 (60% compliance).',
        bn: 'প্রাথমিক অডিটে ৫ টির মধ্যে ৩ টি হেডার পাওয়া যাওয়ায় স্কোর হয় ৩/৫ = ০.৬০ (৬০% কমপ্লায়েন্স)।'
      },
    },
    {
      id: 'sec-head-ex-2',
      kind: 'mcq',
      topic: 'x-content-type-options-nosniff',
      question: {
        en: 'What specific security hazard is prevented by transmitting X-Content-Type-Options: nosniff on all HTTP responses?',
        bn: 'সমস্ত HTTP রেসপন্সে X-Content-Type-Options: nosniff হেডার পাঠানোর মাধ্যমে কোন সুনির্দিষ্ট নিরাপত্তা ঝুঁকি প্রতিহত করা হয়?'
      },
      options: [
        {
          en: 'It prevents browsers from sniffing the body content to override the declared MIME type, stopping malicious image uploads containing HTML/JS from being executed as scripts',
          bn: 'এটি ব্রাউজারকে বডির ভেতরের কনটেন্ট শুঁকে বা স্নাইফ করে ঘোষিত মাইম-টাইপ পরিবর্তন করা থেকে বিরত রাখে, ফলে ক্ষতিকর এইচটিএমএল/জেএস যুক্ত ছবি স্ক্রিপ্ট হিসেবে রান হতে পারে না',
        },
        {
          en: 'It reduces the file size of images by ninety percent automatically',
          bn: 'এটি ছবির ফাইলের আকার নিজে থেকেই নব্বই শতাংশ কমিয়ে দেয়',
        },
        {
          en: 'It makes the mouse cursor move faster across the browser window',
          bn: 'এটি ব্রাউজার উইন্ডোর ভেতর মাউস কার্সারের গতি বৃদ্ধি করে',
        },
        {
          en: 'It deletes temporary cache files from local hard drives every minute',
          bn: 'এটি লোকাল হার্ডড্রাইভ থেকে প্রতি মিনিটে অস্থায়ী ক্যাশ ফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'nosniff forces browsers to respect the declared Content-Type header.',
        bn: 'nosniff ব্রাউজারকে ঘোষিত Content-Type কঠোরভাবে মানতে বাধ্য করে।'
      },
      explanation: {
        en: 'Without nosniff, an attacker who uploads an avatar containing <script> could trigger XSS if the browser sniffs the MIME type as text/html.',
        bn: 'nosniff না থাকলে হ্যাকারের আপলোড করা ছবির ভেতরের কোড ব্রাউজার টেক্সট/এইচটিএমএল হিসেবে স্নাইফ করে XSS চালিয়ে দিতে পারত।'
      },
    },
    {
      id: 'sec-head-ex-3',
      kind: 'mcq',
      topic: 'referrer-policy-token-leakage',
      question: {
        en: 'How does setting Referrer-Policy: strict-origin-when-cross-origin safeguard user privacy when clicking external links?',
        bn: 'Referrer-Policy: strict-origin-when-cross-origin সেট করা কীভাবে বাইরের লিংকে ক্লিকের সময় ব্যবহারকারীর গোপনীয়তা রক্ষা করে?'
      },
      options: [
        {
          en: 'It sends the full URL for same-origin requests, but strips private URL paths and query parameters (sending only the domain) when navigating cross-origin over HTTPS',
          bn: 'এটি নিজস্ব অরিজিনের রিকোয়েস্টে পুরো ইউআরএল পাঠায়, কিন্তু HTTPS-এ বাইরের কোনো সাইটে যাওয়ার সময় ইউআরএলের ভেতরের গোপনীয় পাথ এবং কুয়েরি প্যারামিটার ছেঁটে ফেলে কেবল ডোমেইন নাম পাঠায়',
        },
        {
          en: 'It permanently disables the back button in all web browsers',
          bn: 'এটি সমস্ত ওয়েব ব্রাউজারের ব্যাক বাটন স্থায়ীভাবে নিষ্ক্রিয় করে দেয়',
        },
        {
          en: 'It changes the text color of all external links to dark red',
          bn: 'এটি সমস্ত বহিরাগত লিংকের টেক্সটের রঙ গাঢ় লাল রঙে রূপান্তর করে',
        },
        {
          en: 'It requires users to enter their home address before clicking any button',
          bn: 'যেকোনো বাটনে ক্লিক করার আগে এটি ব্যবহারকারীর ঠিকানার তথ্য টাইপ করতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'It strips paths and query parameters on cross-origin navigations.',
        bn: 'এটি বহিরাগত সাইটে যাওয়ার সময় পাথ এবং কুয়েরি প্যারামিটারগুলো ছেঁটে ফেলে।'
      },
      explanation: {
        en: 'If a URL contains sensitive reset tokens or session keys in its query string, Referrer-Policy stops third-party sites from capturing those tokens.',
        bn: 'ইউআরএলে পাসওয়ার্ড রিসেট টোকেন বা গোপন তথ্য থাকলে Referrer-Policy বহিরাগত সাইটকে সেই টোকেন পাওয়া থেকে আটকে দেয়।'
      },
    },
    {
      id: 'sec-head-ex-4',
      kind: 'predict',
      topic: 'hardened-header-score',
      question: {
        en: 'After deploying security middleware and manning all 5 essential security header posts, what was the final compliance score? (1.00). Type the number.',
        bn: 'সিকিউরিটি মিডলওয়্যার যুক্ত করার পর ৫ টি অপরিহার্য হেডারের সবকয়টি উপস্থিত থাকায় চূড়ান্ত কমপ্লায়েন্স স্কোর কত হয়েছিল? ( ১.০০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1.00',
      hint: {
        en: 'Divide 5 by 5.',
        bn: '৫ কে ৫ দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'With all 5 security headers deployed, the server achieved a score of 5/5 = 1.00 (100% compliance).',
        bn: 'সবকয়টি অর্থাৎ ৫ টি সিকিউরিটি হেডার সক্রিয় থাকায় সার্ভারটি ৫/৫ = ১.০০ (১০০% কমপ্লায়েন্স) অর্জন করে।'
      },
    },
  ],
  quiz: {
    id: 'security-headers-quiz',
    title: {
      en: 'HTTP Security Headers Architecture & Implementation Quiz',
      bn: 'HTTP সিকিউরিটি হেডার আর্কিটেকচার ও বাস্তবায়ন কুইজ'
    },
    questions: [
      {
        id: 'sec-head-qz-1',
        kind: 'mcq',
        topic: 'csp-report-only-mode',
        question: {
          en: 'What is the operational advantage of testing a Content Security Policy using the Content-Security-Policy-Report-Only header before enforcing it?',
          bn: 'Content Security Policy সরাসরি প্রয়োগ করার আগে Content-Security-Policy-Report-Only হেডার দিয়ে পরীক্ষা করার ব্যবহারিক সুবিধা কী?'
        },
        options: [
          {
            en: 'It monitors and logs policy violations to a reporting endpoint without blocking resource loads, allowing engineers to identify and fix false positives before strict enforcement',
            bn: 'এটি কোনো বৈধ রিসোর্স বা স্ক্রিপ্ট ব্লক না করেই পলিসি লঙ্ঘনের ঘটনাগুলো লগ আকারে সার্ভারে রিপোর্ট পাঠায়, যার ফলে প্রকৌশলীরা আসল প্রয়োগের আগেই ভুল বা ত্রুটিগুলো সংশোধন করতে পারেন',
          },
          {
            en: 'It accelerates browser rendering speeds by fifty percent',
            bn: 'এটি ব্রাউজারের পেজ রেন্ডারিংয়ের গতি পঞ্চাশ শতাংশ পর্যন্ত ত্বরান্বিত করে',
          },
          {
            en: 'It causes the browser window to automatically maximize on open',
            bn: 'এটি ব্রাউজার উইন্ডো খোলার সাথে সাথে নিজে থেকেই ফুল-স্ক্রিন করে দেয়',
          },
          {
            en: 'It deletes unused JavaScript files from server hard drives',
            bn: 'এটি সার্ভারের হার্ডড্রাইভ থেকে অব্যবহৃত জাভাস্ক্রিপ্ট ফাইল মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Report-Only logs violations without breaking production user flows.',
          bn: 'Report-Only প্রোডাকশন সাইট না ভেঙে কেবল লঙ্ঘনের তথ্য রিপোর্ট করে।'
        },
        explanation: {
          en: 'Deploying a strict CSP without testing can accidentally break legitimate third-party analytics or widgets. Report-Only provides visibility without disruption.',
          bn: 'পরীক্ষা না করে হঠাৎ CSP চাপালে প্রয়োজনীয় স্ক্রিপ্ট আটকে সাইট ভেঙে যেতে পারে। Report-Only কোনো বিঘ্ন ছাড়াই প্রয়োজনীয় তথ্য দেয়।'
        },
      },
      {
        id: 'sec-head-qz-2',
        kind: 'mcq',
        topic: 'hsts-preload-list-requirements',
        question: {
          en: 'What conditions must a domain satisfy to be successfully submitted to the official Chromium HSTS preload list?',
          bn: 'অফিসিয়াল Chromium HSTS প্রিলোড তালিকায় অন্তর্ভুক্ত হতে কোনো ডোমেইনকে কোন শর্তগুলো পূরণ করতে হয়?'
        },
        options: [
          {
            en: 'Serve valid HTTPS, redirect all HTTP traffic to HTTPS, provide a max-age of at least 31536000 (1 year), include the includeSubDomains directive, and specify the preload flag',
            bn: 'বৈধ HTTPS থাকতে হবে, সমস্ত HTTP ট্রাফিক HTTPS-এ রিডাইরেক্ট করতে হবে, max-age কমপক্ষে ৩১৫৩৬০০০ (১ বছর) হতে হবে, includeSubDomains ডিরেক্টিভ থাকতে হবে এবং preload ফ্ল্যাগ থাকতে হবে',
          },
          {
            en: 'The website must be registered in the United States and have a blue logo',
            bn: 'ওয়েবসাইটটি যুক্তরাষ্ট্রে নিবন্ধিত হতে হবে এবং নীল রঙের লোগো থাকতে হবে',
          },
          {
            en: 'The website must receive more than one million visits every day',
            bn: 'ওয়েবসাইটটিতে প্রতিদিন দশ লাখেরও বেশি ভিজিটর ঢুকতে হবে',
          },
          {
            en: 'The web server must run exclusively on laptop computers',
            bn: 'ওয়েব সার্ভারটি কেবল ল্যাপটপ কম্পিউটারে পরিচালিত হতে হবে',
          },
        ],
        answer: 0,
        hint: {
          en: 'HSTS preload requires 1 year max-age, all subdomains covered, and the preload flag.',
          bn: 'HSTS প্রিলোডের জন্য ১ বছরের max-age, সব সাবডোমেইন এবং preload ফ্ল্যাগ প্রয়োজন।'
        },
        explanation: {
          en: 'Once added to the preload list, browsers hardcode HTTPS for your domain before ever sending the very first network request.',
          bn: 'প্রিলোড তালিকায় যুক্ত হলে ব্রাউজার প্রথমবার ঢোকার আগেই নিজে থেকে কেবল HTTPS-এ সংযোগ তৈরি করে।'
        },
      },
      {
        id: 'sec-head-qz-3',
        kind: 'mcq',
        topic: 'coop-coep-spectre-mitigation',
        question: {
          en: 'Why did browsers introduce Cross-Origin-Opener-Policy (COOP) and Cross-Origin-Embedder-Policy (COEP) headers in modern web applications?',
          bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনে ব্রাউজারগুলো কেন Cross-Origin-Opener-Policy (COOP) এবং Cross-Origin-Embedder-Policy (COEP) হেডার চালু করেছে?'
        },
        options: [
          {
            en: 'To isolate the application process memory context and unlock powerful features like SharedArrayBuffer while defeating Spectre CPU side-channel timing attacks',
            bn: 'অ্যাপ্লিকেশনের প্রসেস মেমোরিকে আলাদা রাখতে এবং Spectre সিপিইউ সাইড-চ্যানেল টাইমিং আক্রমণ প্রতিহত করে SharedArrayBuffer-এর মতো শক্তিশালী ফিচার নিরাপদে ব্যবহারের সুযোগ দিতে',
          },
          {
            en: 'To prevent computer screens from turning into screensaver mode',
            bn: 'কম্পিউটারের স্ক্রিন যাতে স্ক্রিনসেভার মোডে চলে না যায় তা প্রতিরোধ করতে',
          },
          {
            en: 'To change website font sizes automatically based on ambient room light',
            bn: 'ঘরের আলোর ওপর ভিত্তি করে ওয়েবসাইটের লেখার ফন্ট সাইজ নিজে থেকেই পরিবর্তন করতে',
          },
          {
            en: 'To compress video files into audio files automatically',
            bn: 'ভিডিও ফাইলগুলোকে স্বয়ংক্রিয়ভাবে অডিও ফাইলে রূপান্তর করার জন্য',
          },
        ],
        answer: 0,
        hint: {
          en: 'COOP and COEP isolate OS process memory to defend against Spectre attacks.',
          bn: 'COOP এবং COEP মেমোরি আলাদা করে Spectre আক্রমণ প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Spectre demonstrated that microarchitectural cache timing can leak cross-origin memory. COOP and COEP guarantee process isolation.',
          bn: 'Spectre দেখিয়েছে কীভাবে ক্যাশ টাইমিং দিয়ে মেমোরির তথ্য চুরি করা যায়। COOP এবং COEP প্রসেস আইসোলেশন নিশ্চিত করে।'
        },
      },
      {
        id: 'sec-head-qz-4',
        kind: 'mcq',
        topic: 'helmet-js-express-integration',
        question: {
          en: 'In Node.js web frameworks like Express, what is the role of the popular open-source middleware library "Helmet"?',
          bn: 'Express-এর মতো Node.js ওয়েব ফ্রেমওয়ার্কে জনপ্রিয় ওপেন সোর্স লাইব্রেরি "Helmet" এর ভূমিকা কী?'
        },
        options: [
          {
            en: 'It automatically configures and sets sensible, secure defaults for critical HTTP security headers (including CSP, HSTS, X-Content-Type-Options, and X-Frame-Options) with a single line of middleware',
            bn: 'এটি একটিমাত্র মিডলওয়্যার লাইনের মাধ্যমে গুরুত্বপূর্ণ সব সিকিউরিটি হেডারের (যেমন CSP, HSTS, X-Content-Type-Options এবং X-Frame-Options) আদর্শ ও সুরক্ষিত ডিফল্ট মান নিজে থেকেই সেট করে দেয়',
          },
          {
            en: 'It converts JavaScript code into Python programming language',
            bn: 'এটি জাভাস্ক্রিপ্ট কোডকে পাইথন প্রোগ্রামিং ভাষায় রূপান্তর করে দেয়',
          },
          {
            en: 'It limits the number of database connections to five users',
            bn: 'এটি ডাটাবেজ সংযোগকে সর্বোচ্চ পাঁচজন ব্যবহারকারীর মধ্যে সীমাবদ্ধ রাখে',
          },
          {
            en: 'It checks whether web developers are wearing physical safety helmets',
            bn: 'এটি ওয়েব ডেভেলপাররা মাথায় হেলমেট পরে কাজ করছেন কি না তা ক্যামেরা দিয়ে পরীক্ষা করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Helmet automatically attaches the recommended security headers in Express.',
          bn: 'Helmet এক্সপ্রেস অ্যাপে এক ক্লিকে প্রয়োজনীয় সমস্ত সিকিউরিটি হেডার সেট করে দেয়।'
        },
        explanation: {
          en: 'Calling app.use(helmet()) in an Express app installs 15 security headers out of the box, drastically reducing manual configuration overhead.',
          bn: 'এক্সপ্রেস অ্যাপে app.use(helmet()) কল করলেই প্রায় ১৫ টি সিকিউরিটি হেডার স্বয়ংক্রিয়ভাবে সেট হয়ে অ্যাপকে সুরক্ষিত করে তোলে।'
        },
      },
    ],
  },
  next: {
    slug: 'clickjacking',
    title: {
      en: 'Clickjacking Defense: X-Frame-Options & CSP Frame-Ancestors',
      bn: 'ক্লিকজ্যাকিং প্রতিরোধ: X-Frame-Options ও CSP Frame-Ancestors'
    },
  },
};
