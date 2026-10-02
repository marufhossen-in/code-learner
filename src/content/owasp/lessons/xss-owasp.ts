import type { Lesson } from '../../../lib/types';

export const XssOwaspLesson: Lesson = {
  slug: 'xss-owasp',
  tech: 'owasp',
  title: {
    en: 'Cross-Site Scripting (XSS): Sanitization, CSP & Defense',
    bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): স্যানিটাইজেশন, সিএসপি ও প্রতিরক্ষা'
  },
  summary: {
    en: 'Master the mechanics of Cross-Site Scripting (XSS) and defensive browser security architecture. Differentiate between Reflected, Stored, and DOM-based XSS attacks. Learn how unescaped HTML angle brackets trick the browser into executing malicious JavaScript inside an authenticated victim session. Implement contextual output encoding, safe DOM APIs (textContent), and strict Content Security Policy (CSP) headers. Inspect an executable Node.js sanitization engine testing 4 inputs: 3 escaped inputs render safely as inert text, while 1 raw unescaped script tag triggers an XSS breach.',
    bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) এর মেকানিজম এবং আধুনিক ব্রাউজার নিরাপত্তা আর্কিটেকচার আয়ত্ত করুন। রিফ্লেক্টেড, স্টোরড এবং ডম-ভিত্তিক (DOM) এক্সএসএস আক্রমণের মধ্যকার পার্থক্য বুঝুন। অনিয়ন্ত্রিত এইচটিএমএল ব্র্যাকেট কীভাবে ব্রাউজারকে বিভ্রান্ত করে ব্যবহারকারীর লগইন সেশনের ভেতর ক্ষতিকর কোড চালায় তা শিখুন। কনটেক্সচুয়াল আউটপুট এনকোডিং, নিরাপদ ডম এপিআই (textContent) এবং কঠোর কনটেন্ট সিকিউরিটি পলিসি (CSP) প্রয়োগ করুন। ৪ টি ইনপুট মূল্যায়নকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি এনকোড করা ইনপুট নিরাপদ টেক্সট হিসেবে প্রদর্শিত হয়, আর ১ টি কাঁচা স্ক্রিপ্ট ক্ষতিকর এক্সএসএস আক্রমণ ঘটায়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'xss-anatomy-and-variants',
      text: {
        en: 'The Anatomy of Cross-Site Scripting: Hijacking Client-Side Execution Context',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিংয়ের স্বরূপ: ক্লায়েন্ট-সাইড এক্সিকিউশন কনটেক্সট দখল'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you render user-submitted text directly into web pages without encoding, you introduce Cross-Site Scripting (XSS). Browsers cannot determine whether a pair of angle brackets represents intended markup or malicious payload strings. If an attacker injects executable JavaScript into your HTML, the browser executes the script with the full privileges of the victim session.',
        bn: 'ব্যবহারকারীর পাঠানো টেক্সট কোনো রূপান্তর ছাড়া সরাসরি ওয়েব পেজে প্রদর্শন করলে ক্রস-সাইট স্ক্রিপ্টিং (XSS) ঝুঁকি তৈরি হয়। ব্রাউজারের পক্ষে বোঝা সম্ভব নয় যে ইনপুটের অ্যাঙ্গেল ব্র্যাকেটটি সাধারণ লেখা নাকি আক্রমণকারীর ক্ষতিকর কোড। আক্রমণকারী যদি আপনার এইচটিএমএলে ক্ষতিকর জাভাস্ক্রিপ্ট কোড ঢুকিয়ে দিতে পারে, তবে ব্রাউজার ব্যবহারকারীর সম্পূর্ণ অধিকার নিয়ে সেই কোডটি চালিয়ে ফেলে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'XSS allows attackers to hijack session cookies, read local storage tokens, capture keystrokes, or silently perform actions on behalf of the user. Understanding how the browser parses markup across different contexts is essential for designing resilient client defenses.',
        bn: 'এক্সএসএস আক্রমণের মাধ্যমে হ্যাকাররা সেশন কুকি চুরি করতে পারে, লোকাল স্টোরেজের সিক্রেট টোকেন হাতিয়ে নিতে পারে, কীবোর্ডের পাসওয়ার্ড রেকর্ড করতে পারে এবং ব্যবহারকারীর অজান্তেই অনাকাঙ্ক্ষিত লেনদেন ঘটাতে পারে। ব্রাউজার কীভাবে বিভিন্ন পরিস্থিতিতে এইচটিএমএল পার্স করে তা বোঝা একটি নিরাপদ ফ্রন্টএন্ড তৈরির জন্য অপরিহার্য।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Reflected XSS (Non-Persistent)',
            bn: '১. রিফ্লেক্টেড এক্সএসএস (অস্থায়ী)'
          },
          text: {
            en: 'The malicious script is embedded in a search query parameter or URL link. When a victim clicks the link, the server immediately echoes the unescaped script back in the HTTP response.',
            bn: 'ক্ষতিকর কোডটি ইউআরএল লিংক বা সার্চ প্যারামিটারে যুক্ত থাকে। কোনো ব্যবহারকারী লিংকে ক্লিক করলেই সার্ভার সেই স্ক্রিপ্টটিকে ফিরতি এইচটিটিপি রেসপন্সে পেজের ভেতর প্রদর্শন করে দেয়।'
          },
        },
        {
          title: {
            en: '2. Stored XSS (Persistent)',
            bn: '২. স্টোরড এক্সএসএস (স্থায়ী)'
          },
          text: {
            en: 'The payload is permanently saved in the application database (e.g. in a public comment, chat message, or user profile). Every user who views the page executes the malicious script.',
            bn: 'পেলোডটি অ্যাপ্লিকেশনের ডাটাবেজে স্থায়ীভাবে সংরক্ষিত হয় (যেমন কোনো কমেন্ট বা চ্যাট মেসেজে)। পরবর্তীতে যে ব্যবহারকারীই পাতাটি ভিজিট করে, তার ব্রাউজারেই আক্রমণ কার্যকর হয়ে যায়।'
          },
        },
        {
          title: {
            en: '3. DOM-Based XSS (Client-Side)',
            bn: '৩. ডম-ভিত্তিক এক্সএসএস (ক্লায়েন্ট-সাইড)'
          },
          text: {
            en: 'The vulnerability exists entirely in client-side JavaScript. Unsafe sinks like element.innerHTML or eval() consume data from untrusted sources like location.hash without ever hitting the server.',
            bn: 'দুর্বলতাটি সম্পূর্ণভাবে ফ্রন্টএন্ড জাভাস্ক্রিপ্টে থাকে। সার্ভারে কোনো রিকোয়েস্ট না পাঠিয়েও innerHTML বা eval() এর মতো অনিরাপদ ফাংশনে location.hash থেকে আসা ডাটা বসালে এটি ঘটে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'XSS Sanitization & Rendering Audit: 3 Safe Inputs vs 1 Live Script Breach',
        bn: 'এক্সএসএস স্যানিটাইজেশন ও রেন্ডারিং নিরীক্ষা: ৩ টি নিরাপদ ইনপুট বনাম ১ টি ক্ষতিকর স্ক্রিপ্ট'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="XSS sanitization evaluation showing 3 encoded inputs rendered safely and 1 raw script executing">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">HTML SANITIZATION & CLIENT-SIDE XSS DEFENSE AUDIT</text>
  
  <!-- Left Side: Inbound Raw Inputs -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 USER INPUTS RECEIVED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Input 1: Plain Text Greeting</text>
      <text x="12" y="36" fill="#ffffff" font-size="8">Raw: "hi"</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Context: Standard alphanumeric string</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Input 2: HTML Formatting Attempt</text>
      <text x="12" y="104" fill="#ffffff" font-size="8">Raw: "&lt;b&gt;welcome&lt;/b&gt;"</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Context: User attempts bold font formatting</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Input 3: Image Tag with Event Handler</text>
      <text x="12" y="172" fill="#ffffff" font-size="8">Raw: "&lt;img src=\\"x\\" onerror=\\"alert(1)\\"&gt;"</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Context: Obfuscated event-handler injection</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Input 4: Raw Executable Script [VULNERABLE]</text>
      <text x="12" y="240" fill="#ffffff" font-size="8">Raw: "&lt;script&gt;steal(document.cookie)&lt;/script&gt;"</text>
      <text x="12" y="254" fill="#fecaca" font-size="7.5">Mode: Unescaped innerHTML rendering into DOM</text>
    </g>
  </g>
  
  <!-- Right Side: Rendering Engine Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DOM VERDICTS: 3 INERT | 1 EXECUTED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PASSED [✓] (Rendered as Text)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Rendered: "hi"</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Harmless text node; no active execution</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">2. PASSED [✓] (Rendered as Text)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Rendered: "&amp;lt;b&amp;gt;welcome&amp;lt;/b&amp;gt;"</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Escaped entities display literally on screen</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">3. PASSED [✓] (Rendered as Text)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Rendered: "&amp;lt;img src=&amp;quot;x&amp;quot;...&amp;gt;"</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Quotes and brackets neutralized; onerror inert</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">4. XSS TRIGGERED [✗ LIVE EXECUTION]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Browser evaluates raw JavaScript in page context</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">Session cookies and auth tokens compromised!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Encoding dynamic data into HTML entities and deploying Content Security Policy (CSP) headers neutralizes XSS</text>
</svg>`,
      caption: {
        en: 'The XSS sanitization engine evaluates 4 inputs: 3 inputs are safely escaped and rendered as inert text, while 1 raw unescaped script tag executes in the browser.',
        bn: 'এক্সএসএস স্যানিটাইজেশন ইঞ্জিন ৪ টি ইনপুট মূল্যায়ন করে: ৩ টি ইনপুট এনকোড হয়ে নিরাপদ টেক্সট হিসেবে প্রদর্শিত হয়, আর ১ টি কাঁচা স্ক্রিপ্ট ব্রাউজারে সক্রিয়ভাবে চলে।'
      },
    },
    {
      type: 'heading',
      id: 'xss-sanitizer-code-engine',
      text: {
        en: 'Building an HTML Sanitizer & XSS Defense Engine in Node.js',
        bn: 'Node.js-এ এইচটিএমএল স্যানিটাইজার ও এক্সএসএস প্রতিরোধ ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'xss-sanitizer-engine.js',
      code: `// Deterministic HTML Output Encoding & XSS Mitigation Engine
function escapeHtmlEntities(stringInput) {
  return stringInput
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

class XssDefenseAuditor {
  // Evaluates input rendering mode against XSS risks
  auditInput(inputItem) {
    if (inputItem.mode === 'ESCAPED') {
      const escapedOutput = escapeHtmlEntities(inputItem.raw);
      return {
        id: inputItem.id,
        rawContent: inputItem.raw,
        renderedContent: escapedOutput,
        verdict: 'PASSED',
        executionRisk: 'INERT_TEXT',
        mechanism: 'HTML entities prevent browser parser from creating executable elements'
      };
    } else {
      // Unescaped raw DOM injection mode
      const containsScriptTags = /<script[\\s\\S]*?>|<img[\\s\\S]*?onerror=/i.test(inputItem.raw);
      return {
        id: inputItem.id,
        rawContent: inputItem.raw,
        renderedContent: inputItem.raw,
        verdict: containsScriptTags ? 'XSS_TRIGGERED' : 'PASSED',
        executionRisk: containsScriptTags ? 'ACTIVE_EXECUTION' : 'SAFE',
        mechanism: 'Raw angle brackets parsed as executable DOM nodes in client browser context'
      };
    }
  }
}

const auditor = new XssDefenseAuditor();

// 4 distinct user inputs evaluated for client execution safety
const testInputs = [
  { id: 'Input 1', raw: 'hi', mode: 'ESCAPED' },
  { id: 'Input 2', raw: '<b>welcome</b>', mode: 'ESCAPED' },
  { id: 'Input 3', raw: '<img src="x" onerror="alert(1)">', mode: 'ESCAPED' },
  { id: 'Input 4', raw: '<script>steal(document.cookie)</script>', mode: 'RAW_UNESCAPED' }
];

let safeInputsCount = 0;
let xssBreachesCount = 0;

console.log('=== HTML Output Encoding & XSS Audit ===\\n');
testInputs.forEach((item, index) => {
  const result = auditor.auditInput(item);

  if (result.verdict === 'PASSED') {
    safeInputsCount++;
    console.log(\`[\${index + 1}] SECURE [✓]: \${result.id}\`);
    console.log(\`    Raw:      \${result.rawContent}\`);
    console.log(\`    Rendered: \${result.renderedContent}\`);
    console.log(\`    Status:   \${result.verdict} (\${result.mechanism})\\n\`);
  } else {
    xssBreachesCount++;
    console.log(\`[\${index + 1}] BREACH [✗]: \${result.id}\`);
    console.log(\`    Raw:      \${result.rawContent}\`);
    console.log(\`    Rendered: \${result.renderedContent}\`);
    console.log(\`    Status:   \${result.verdict} (\${result.mechanism})\\n\`);
  }
});

console.log('=== XSS Audit Summary ===');
console.log('Total Inputs Evaluated:   ', testInputs.length);
console.log('Safely Rendered (Pass):   ', safeInputsCount);
console.log('XSS Exploitations (Fail): ', xssBreachesCount);`,
      caption: {
        en: 'The XSS auditor tests 4 inputs: 3 inputs are rendered safely as inert text, while 1 unescaped script tag executes in the browser.',
        bn: 'এক্সএসএস অডিটর ৪ টি ইনপুট পরীক্ষা করে: ৩ টি ইনপুট নিরাপদ টেক্সট হিসেবে রেন্ডার হয়, আর ১ টি কাঁচা স্ক্রিপ্ট ব্রাউজারে রান করে।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Dual Defense: CSP and HttpOnly Cookie Flags',
        bn: 'দ্বৈত সুরক্ষা: সিএসপি এবং HttpOnly কুকি ফ্ল্যাগ'
      },
      text: {
        en: 'Even with rigorous output encoding, sophisticated attackers occasionally discover encoding bypasses. True defense-in-depth requires two additional controls. First, deploy a strict Content Security Policy (CSP) header that forbids inline scripts. Second, set the HttpOnly flag on authentication cookies so that document.cookie returns empty even during active XSS.',
        bn: 'কঠোর আউটপুট এনকোডিং করার পরেও চতুর হ্যাকাররা অনেক সময় বাইপাস পদ্ধতি বের করে ফেলে। তাই প্রকৃত সুরক্ষার জন্য দুটি বাড়তি ব্যবস্থা আবশ্যক। প্রথমত, একটি কঠোর কনটেন্ট সিকিউরিটি পলিসি (CSP) হেডার প্রয়োগ করুন যা ইনলাইন স্ক্রিপ্ট চালানো নিষিদ্ধ করে। দ্বিতীয়ত, লগইন কুকিতে HttpOnly ফ্ল্যাগ যুক্ত করুন যাতে এক্সএসএস ঘটলেও document.cookie দিয়ে আসল টোকেন চুরি করা না যায়।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-xss-ex-1',
      kind: 'predict',
      topic: 'safe-inputs-count',
      question: {
        en: 'In the XSS sanitization audit of the 4 inputs, how many inputs were safely encoded and rendered as inert text? (3). Type the number.',
        bn: '৪ টি ইনপুটের এক্সএসএস স্যানিটাইজেশন নিরীক্ষায় সর্বমোট কয়টি ইনপুট সঠিকভাবে এনকোড করা হয়েছিল এবং নিরাপদ টেক্সট হিসেবে প্রদর্শিত হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 inputs were rendered safely.',
        bn: 'ঠিক ৩ টি ইনপুট নিরাপদে প্রদর্শিত হয়েছিল।'
      },
      explanation: {
        en: 'Three inputs (Input 1: "hi", Input 2: bold tag, and Input 3: img tag) were properly escaped into HTML entities and rendered safely. Only Input 4 failed.',
        bn: '৩ টি ইনপুট (১ নম্বর "hi", ২ নম্বর বোল্ড ট্যাগ এবং ৩ নম্বর ইমেজ ট্যাগ) এইচটিএমএল এনটিটিতে রূপান্তর হওয়ায় নিরাপদ ছিল। কেবল ৪ নম্বর ইনপুট ব্যর্থ হয়।'
      },
    },
    {
      id: 'owasp-xss-ex-2',
      kind: 'mcq',
      topic: 'textcontent-vs-innerhtml-safety',
      question: {
        en: 'In modern frontend JavaScript, why is element.textContent completely immune to XSS compared to element.innerHTML?',
        bn: 'আধুনিক ফ্রন্টএন্ড জাভাস্ক্রিপ্টে element.innerHTML এর তুলনায় element.textContent কেন এক্সএসএস আক্রমণ থেকে শতভাগ নিরাপদ?'
      },
      options: [
        {
          en: 'element.textContent sets the data as a raw text node in the DOM tree without invoking the HTML parser, ensuring characters like "<script>" are rendered purely as visible text and never compiled into executable nodes',
          bn: 'element.textContent ব্রাউজারের এইচটিএমএল পার্সার না চালিয়েই সরাসরি ডম ট্রিতে টেক্সট নোড হিসেবে ডাটা বসায়, যার ফলে "<script>" এর মতো লেখাও কেবল সাধারণ দৃশ্যমান টেক্সট হিসেবে প্রদর্শিত হয় এবং কোড হিসেবে কার্যকর হতে পারে না',
        },
        {
          en: 'Because textContent uses artificial intelligence to delete all virus files',
          bn: 'কারণ textContent কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে সব ভাইরাস ফাইল মুছে দেয়',
        },
        {
          en: 'Because textContent converts all images into text descriptions',
          bn: 'কারণ textContent সব ছবিকে টেক্সট বিবরণে রূপান্তরিত করে ফেলে',
        },
        {
          en: 'Because textContent only works on computers running Linux',
          bn: 'কারণ textContent কেবল লিনাক্স চালিত কম্পিউটারে কাজ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'textContent bypasses the HTML parser and creates a pure text node.',
        bn: 'textContent এইচটিএমএল পার্সারকে এড়িয়ে সরাসরি টেক্সট নোড তৈরি করে।'
      },
      explanation: {
        en: 'Using element.innerHTML invokes the browser HTML rendering engine, compiling tags into live elements. textContent treats input as plain text without parsing.',
        bn: 'innerHTML ব্যবহার করলে ব্রাউজার ট্যাগগুলোকে জীবন্ত উপাদান হিসেবে পার্স করে। textContent পার্সিং ছাড়াই কেবল সাধারণ লেখা হিসেবে ডাটা বসায়।'
      },
    },
    {
      id: 'owasp-xss-ex-3',
      kind: 'mcq',
      topic: 'content-security-policy-inline-script-block',
      question: {
        en: 'How does a strict Content Security Policy (CSP) header stop XSS even if an attacker manages to inject a raw <script> tag into the HTML page?',
        bn: 'আক্রমণকারী কোনোভাবে এইচটিএমএল পেজের ভেতর কাঁচা <script> ট্যাগ ঢোকাতে সক্ষম হলেও একটি কঠোর কনটেন্ট সিকিউরিটি পলিসি (CSP) হেডার কীভাবে এক্সএসএস আক্রমণ প্রতিহত করে?'
      },
      options: [
        {
          en: 'By configuring the script-src directive without "unsafe-inline", the browser engine refuses to execute any inline script blocks or event handlers unless they match a cryptographically random per-request nonce or trusted domain',
          bn: 'script-src নির্দেশে "unsafe-inline" নিষিদ্ধ রাখলে ব্রাউজার পেজের ভেতরের যেকোনো ইনলাইন স্ক্রিপ্ট বা ইভেন্ট হ্যান্ডলার চালাতে সরাসরি অস্বীকার করে, যদি না তাতে সার্ভার থেকে পাঠানো ক্রিপ্টোগ্রাফিক ননস (nonce) থাকে',
        },
        {
          en: 'By turning off the computer network card whenever a script runs',
          bn: 'কোনো স্ক্রিপ্ট চালু হওয়া মাত্রই কম্পিউটার নেটওয়ার্ক কার্ড বন্ধ করে দিয়ে',
        },
        {
          en: 'By restarting the web server every fifteen seconds',
          bn: 'প্রতি পনেরো সেকেন্ড অন্তর ওয়েব সার্ভার রিস্টার্ট করার মাধ্যমে',
        },
        {
          en: 'By encrypting the user hard drive with a government password',
          bn: 'ব্যবহারকারীর হার্ডড্রাইভ সরকারি পাসওয়ার্ড দিয়ে এনক্রিপ্ট করার মাধ্যমে',
        },
      ],
      answer: 0,
      hint: {
        en: 'CSP script-src without unsafe-inline blocks all unauthorized inline scripts.',
        bn: 'সিএসপির script-src কোনো অননুমোদিত ইনলাইন স্ক্রিপ্ট চলতে দেয় না।'
      },
      explanation: {
        en: 'CSP operates at the browser level as a second layer of defense. Injected script tags lack the required cryptographic nonce and are refused by the JavaScript engine.',
        bn: 'ব্রাউজার স্তরে সিএসপি দ্বিতীয় স্তরের প্রতিরক্ষা দেয়। আক্রমণকারীর ইনজেক্ট করা স্ক্রিপ্টে সিক্রেট ননস না থাকায় ব্রাউজার তা চালায় না।'
      },
    },
    {
      id: 'owasp-xss-ex-4',
      kind: 'predict',
      topic: 'failed-inputs-count',
      question: {
        en: 'How many of the 4 evaluated inputs were rendered raw without escaping, resulting in an active XSS execution vulnerability? (1). Type the number.',
        bn: 'মূল্যায়ন করা ৪ টি ইনপুটের মধ্যে সর্বমোট কয়টি ইনপুট এনকোডিং ছাড়া সরাসরি রেন্ডার করা হয়েছিল, যার ফলে সক্রিয় এক্সএসএস দুর্বলতা দেখা দিয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 input resulted in an XSS breach.',
        bn: 'কেবলমাত্র ১ টি ইনপুট এক্সএসএস আক্রমণ ঘটিয়েছিল।'
      },
      explanation: {
        en: 'Only Input 4 failed because it was rendered directly using raw unescaped markup, allowing the <script> tag to execute in the browser.',
        bn: 'কেবল ৪ নম্বর ইনপুটটি কোনো রূপান্তর ছাড়া সরাসরি এইচটিএমএলে বসানোর কারণে ব্যর্থ হয় এবং ব্রাউজারে ক্ষতিকর স্ক্রিপ্টটি চলে।'
      },
    },
  ],
  quiz: {
    id: 'xss-owasp-quiz',
    title: {
      en: 'Cross-Site Scripting (XSS) & Browser Security Architecture Quiz',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) ও ব্রাউজার সিকিউরিটি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'owasp-xss-qz-1',
        kind: 'mcq',
        topic: 'dompurify-sanitization-mechanism',
        question: {
          en: 'Why is a specialized library like DOMPurify recommended when applications must allow users to input rich HTML markup (such as formatted blog posts)?',
          bn: 'অ্যাপ্লিকেশনে যখন ব্যবহারকারীদের ফরম্যাটেড এইচটিএমএল লেখার অনুমতি দিতেই হয় (যেমন ব্লগ পোস্ট), তখন DOMPurify এর মতো বিশেষায়িত লাইব্রেরি ব্যবহার কেন জরুরি?'
        },
        options: [
          {
            en: 'DOMPurify builds an in-memory DOM tree, walks through all nodes, and strips dangerous tags (like <script>, <iframe>) and attributes (like onload, onerror, javascript: URIs) while preserving safe formatting tags (like <b>, <i>, <p>)',
            bn: 'DOMPurify মেমরিতে একটি ডম ট্রি বানিয়ে প্রতিটি নোড পরীক্ষা করে এবং বিপজ্জনক ট্যাগ (<script>, <iframe>) ও অ্যাট্রিবিউট (onload, onerror, javascript:) মুছে ফেলে, কিন্তু নিরাপদ ফরম্যাটিং ট্যাগ (<b>, <i>, <p>) অক্ষত রাখে',
          },
          {
            en: 'Because DOMPurify translates English text into twelve foreign languages',
            bn: 'কারণ DOMPurify ইংরেজি টেক্সটকে বারোটি বিদেশী ভাষায় অনুবাদ করে',
          },
          {
            en: 'Because DOMPurify speeds up internet connection bandwidth',
            bn: 'কারণ DOMPurify ইন্টারনেট কানেকশনের ব্যান্ডউইথ দ্রুত করে',
          },
          {
            en: 'Because DOMPurify is required by international postal treaties',
            bn: 'কারণ আন্তর্জাতিক ডাক চুক্তির কারণে DOMPurify ব্যবহার বাধ্যতামূলক',
          },
        ],
        answer: 0,
        hint: {
          en: 'DOMPurify strips dangerous elements and event handlers while preserving safe tags.',
          bn: 'DOMPurify নিরাপদ ট্যাগ রেখে সব ক্ষতিকর কোড ও ইভেন্ট হ্যান্ডলার ছেঁটে ফেলে।'
        },
        explanation: {
          en: 'Writing custom regular expressions to sanitize HTML almost always fails due to obscure browser parsing quirks. DOMPurify uses the browser own parser to safely clean content.',
          bn: 'রেজেক্স (Regex) দিয়ে এইচটিএমএল ফিল্টার করতে গেলে ব্রাউজারের বিভিন্ন জটিল ট্রিক্সে তা বাইপাস হয়। DOMPurify নির্ভুলভাবে ডম পরিষ্কার করে।'
        },
      },
      {
        id: 'owasp-xss-qz-2',
        kind: 'mcq',
        topic: 'httponly-cookie-protection',
        question: {
          en: 'How does setting the "HttpOnly" attribute on session cookies reduce the blast radius of an XSS vulnerability?',
          bn: 'সেশন কুকিতে "HttpOnly" অ্যাট্রিবিউট যুক্ত করলে তা কীভাবে এক্সএসএস আক্রমণের ক্ষয়ক্ষতির সীমাকে উল্লেখযোগ্যভাবে কমিয়ে দেয়?'
        },
        options: [
          {
            en: 'The browser prohibits client-side JavaScript from accessing the cookie via document.cookie, preventing injected XSS payloads from stealing session identifiers and impersonating users',
            bn: 'ব্রাউজার ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্টকে document.cookie দিয়ে ঐ কুকি পড়তে কঠোরভাবে নিষেধ করে, ফলে পেজে ক্ষতিকর স্ক্রিপ্ট ঢুকলেও হ্যাকার সেশন টোকেন চুরি করতে পারে না',
          },
          {
            en: 'It deletes all user passwords from the server memory',
            bn: 'এটি সার্ভারের মেমোরি থেকে সব ইউজারের পাসওয়ার্ড মুছে ফেলে',
          },
          {
            en: 'It doubles the size of computer memory caches',
            bn: 'এটি কম্পিউটারের মেমোরি ক্যাশের আকার দ্বিগুণ করে তোলে',
          },
          {
            en: 'It converts web pages into downloadable PDF documents',
            bn: 'এটি ওয়েব পেজকে সরাসরি ডাউনলোডযোগ্য পিডিএফ ফাইলে রূপান্তরিত করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'HttpOnly prevents document.cookie from exposing session secrets to scripts.',
          bn: 'HttpOnly ফ্ল্যাগ স্ক্রিপ্টকে document.cookie পড়তে বাধা দিয়ে সেশন রক্ষা করে।'
        },
        explanation: {
          en: 'While an attacker could still perform actions through the user browser (session riding), they cannot exfiltrate the raw token to use from external machines.',
          bn: 'HttpOnly থাকলে হ্যাকার মূল টোকেন বাইরে বের করে নিতে পারে না, ফলে দূরবর্তী কম্পিউটার থেকে ব্যবহারকারীর অ্যাকাউন্টে ঢোকা আটকানো যায়।'
        },
      },
      {
        id: 'owasp-xss-qz-3',
        kind: 'mcq',
        topic: 'context-aware-output-encoding',
        question: {
          en: 'Why is HTML entity encoding (< to &lt;) insufficient when rendering untrusted data inside an HTML attribute (e.g. <a href="...">)?',
          bn: 'কোনো এইচটিএমএল অ্যাট্রিবিউটের ভেতর (যেমন <a href="...">) ডাটা বসানোর সময় কেবল সাধারণ এইচটিএমএল এনটিটি এনকোডিং (< কে &lt; করা) কেন যথেষ্ট নয়?'
        },
        options: [
          {
            en: 'An attacker can supply a "javascript:" pseudo-protocol URL (e.g. href="javascript:steal()"); since the payload contains no angle brackets, HTML entity encoding leaves the executable link completely intact',
            bn: 'আক্রমণকারী কোনো অ্যাঙ্গেল ব্র্যাকেট ছাড়াই "javascript:" প্রোটোকল লিংক (যেমন href="javascript:steal()") পাঠাতে পারে; ব্রাউজার লিংকে ক্লিক করা মাত্রই ক্ষতিকর স্ক্রিপ্ট কার্যকর হয়ে যাবে',
          },
          {
            en: 'Because HTML attributes are only supported on color television sets',
            bn: 'কারণ এইচটিএমএল অ্যাট্রিবিউট কেবল রঙিন টেলিভিশন সেটে সমর্থিত',
          },
          {
            en: 'Because href links cannot connect to databases',
            bn: 'কারণ href লিংক ডাটাবেজের সাথে যোগাযোগ করতে পারে না',
          },
          {
            en: 'Because attributes change font colors to purple automatically',
            bn: 'কারণ অ্যাট্রিবিউট ফন্টের রঙ স্বয়ংক্রিয়ভাবে বেগুনি রঙে বদলে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Attribute contexts can execute code via javascript: URIs without using brackets.',
          bn: 'অ্যাট্রিবিউটের ভেতর ব্র্যাকেট ছাড়াও javascript: লিংক দিয়ে কোড চালানো যায়।'
        },
        explanation: {
          en: 'Context-aware encoding requires validating URL schemes (allowing only http: and https:) in addition to escaping quotes when populating attribute values.',
          bn: 'অ্যাট্রিবিউটে ডাটা বসানোর সময় কোটেশন এনকোড করার পাশাপাশি ইউআরএল স্কিম (শুধু http/https অনুমোদন) যাচাই করা বাধ্যতামূলক।'
        },
      },
      {
        id: 'owasp-xss-qz-4',
        kind: 'mcq',
        topic: 'stored-xss-worm-propagation',
        question: {
          en: 'How did the historic Samy Kamkar MySpace Worm (2005) leverage Stored XSS to infect over 1000000 users in under 20 hours?',
          bn: 'ঐতিহাসিক স্যামি কামকার মাইস্পেস ওয়ার্ম (২০০৫) কীভাবে স্টোরড এক্সএসএস ব্যবহার করে মাত্র ২০ ঘণ্টার মধ্যে ১০০০০০০ এরও বেশি ব্যবহারকারীকে সংক্রমিত করেছিল?'
        },
        options: [
          {
            en: 'The injected script forced any viewing user browser to automatically send a friend request to Samy, copy the worm JavaScript payload onto their own profile page, and propagate exponentially to all their visitors',
            bn: 'ইনজেক্ট করা স্ক্রিপ্টটি প্রোফাইল দেখা মাত্রই স্বয়ংক্রিয়ভাবে স্যামিকে ফ্রেন্ড রিকোয়েস্ট পাঠাত এবং নিজের প্রোফাইলেও একই স্ক্রিপ্ট যুক্ত করে দিত, ফলে যে তার প্রোফাইল দেখত সেও সংক্রমিত হয়ে জ্যামিতিক হারে ছড়িয়ে পড়েছিল',
          },
          {
            en: 'It physically short-circuited the hard drives in server data centers',
            bn: 'এটি সার্ভার ডাটা সেন্টারের হার্ডড্রাইভে শর্ট সার্কিট ঘটিয়ে দিয়েছিল',
          },
          {
            en: 'It changed the company logo to a picture of a bicycle',
            bn: 'এটি কোম্পানির লোগো বদলে সেখানে একটি সাইকেলের ছবি বসিয়ে দিয়েছিল',
          },
          {
            en: 'It deleted all audio files stored on desktop computers',
            bn: 'এটি ডেস্কটপ কম্পিউটারে থাকা সমস্ত অডিও গান ডিলিট করে দিয়েছিল',
          },
        ],
        answer: 0,
        hint: {
          en: 'The payload replicated itself to the profile of every user who viewed it.',
          bn: 'স্ক্রিপ্টটি পাতা দেখা প্রতিটি ব্যবহারকারীর প্রোফাইলে নিজেকে স্বয়ংক্রিয়ভাবে প্রতিলিপি করত।'
        },
        explanation: {
          en: 'This demonstrated the devastating viral capability of Stored XSS: autonomous worms replicating through authenticated web sessions without downloading external software.',
          bn: 'এটি প্রমাণ করেছিল যে কোনো ফাইল ডাউনলোড ছাড়াই শুধু লগইন করা ওয়েব সেশনের মাধ্যমে স্টোরড এক্সএসএস কত দ্রুত বিশ্বজুড়ে ছড়িয়ে পড়তে পারে।'
        },
      },
    ],
  },
  next: {
    slug: 'security-misconfig',
    title: {
      en: 'Security Misconfiguration: Hardening Defaults, Headers & Cloud Storage',
      bn: 'সিকিউরিটি মিসকনফিগারেশন: ডিফল্ট সেটিংস, হেডার ও ক্লাউড স্টোরেজ সুরক্ষা'
    },
  },
};
