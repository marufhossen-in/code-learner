import type { Lesson } from '../../../lib/types';

export const scriptTribunalLesson: Lesson = {
  slug: 'the-script-tribunal',
  tech: 'security-fundamentals',
  title: {
    en: 'Cross-Site Scripting (XSS) — Stored, Reflected, DOM-Based, and CSP Defense',
    bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): স্টোর্ড, রিফ্লেক্টেড, ডম-ভিত্তিক ও CSP প্রতিরক্ষা'
  },
  summary: {
    en: 'Cross-Site Scripting (XSS) occurs when an application executes untrusted, attacker-controlled strings inside a user browser session. In this lesson, you will dissect the 3 distinct flavors of XSS: Stored (persistent database injections), Reflected (URL query payload echoes), and DOM-based (client-side execution via innerHTML or eval). Master contextual output encoding for HTML body, attribute, and JavaScript contexts. Implement an executable HTML entity sanitizer in TypeScript that neutralizes dangerous script tags and event handlers, and enforce defense-in-depth using a strict Content Security Policy (CSP).',
    bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) ঘটে যখন কোনো ওয়েব অ্যাপ্লিকেশন ব্যবহারকারীর ব্রাউজারে অনিরাপদ ও ক্ষতিকর স্ক্রিপ্ট কোড চালানোর সুযোগ দেয়। এই পাঠে আপনি XSS-এর ৩টি ভিন্ন রূপ বিশদভাবে বিশ্লেষণ করবেন: স্টোর্ড (ডেটাবেসে স্থায়ী ইনজেকশন), রিফ্লেক্টেড (ইউআরএল লিংকের মাধ্যমে আক্রমণ) এবং ডম-ভিত্তিক (ক্লায়েন্টে innerHTML বা eval দ্বারা কার্যকর আক্রমণ)। এইচটিএমএল বডি, অ্যাট্রিবিউট এবং জাভাস্ক্রিপ্ট প্রসঙ্গের জন্য প্রাসঙ্গিক আউটপুট এনকোডিং কৌশল শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর এইচটিএমএল স্যানিটাইজার বাস্তবায়ন করা হয়েছে যা ক্ষতিকর স্ক্রিপ্ট ট্যাগ নিষ্ক্রিয় করে এবং কঠোর কনটেন্ট সিকিউরিটি পলিসি (CSP) দিয়ে ব্রাউজার সুরক্ষা নিশ্চিত করে।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'three-flavors-of-xss',
      text: {
        en: 'The 3 Flavors of Cross-Site Scripting',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিংয়ের ৩টি প্রধান ধরন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern web applications, you must ensure that user input can never execute as active code in someone else browser.',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির সময় আপনাকে নিশ্চিত করতে হবে যে ব্যবহারকারীর ইনপুট যেন অন্য কারো ব্রাউজারে ক্ষতিকর কোড হিসেবে কার্যকর না হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Cross-site scripting allows attackers to execute arbitrary JavaScript within the security context of a victim browser session.',
        bn: 'ক্রস-সাইট স্ক্রিপ্টিং আক্রমণকারীকে ব্যবহারকারীর ব্রাউজার সেশনে অননুমোদিত জাভাস্ক্রিপ্ট কোড চালানোর সুযোগ করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Browsers enforce the Same-Origin Policy (SOP) to isolate different websites. However, if an attacker injects executable code into a trusted website, the browser runs that code under the full authority of the legitimate application. Cross-Site Scripting manifests in 3 distinct architectural patterns: (1) Stored XSS occurs when malicious input is permanently persisted in a database (such as a forum comment or profile bio) and served to every visiting user. (2) Reflected XSS occurs when a web server echoes untrusted URL search parameters directly into HTML responses without encoding. (3) DOM-based XSS occurs entirely within client-side JavaScript, where code reads from an untrusted source (like location.hash) and writes directly into an execution sink (like innerHTML or eval).',
        bn: 'ব্রাউজার বিভিন্ন ওয়েবসাইটের নিরাপত্তা নিশ্চিত করতে সেম-অরিজিন পলিসি (SOP) প্রয়োগ করে। তবে কোনো আক্রমণকারী যদি একটি বিশ্বস্ত ওয়েবসাইটের ভেতরে ক্ষতিকর কোড ঢুকিয়ে দিতে পারে, তবে ব্রাউজার সেই কোডটিকে বৈধ ওয়েবসাইটের অংশ মনে করে সম্পূর্ণ ক্ষমতাসহ চালায়। ক্রস-সাইট স্ক্রিপ্টিং মূলত ৩টি ভিন্ন রূপে দেখা যায়: (১) স্টোর্ড XSS ঘটে যখন কোনো ক্ষতিকর ইনপুট ডেটাবেসে স্থায়ীভাবে জমা থাকে (যেমন কোনো ব্লগের মন্তব্য বা প্রোফাইল বায়ো) এবং পরবর্তীতে সাইটে আসা সব ব্যবহারকারীর ব্রাউজারে চলে। (২) রিফ্লেক্টেড XSS ঘটে যখন ওয়েব সার্ভার ইউআরএলের ক্ষতিকর প্যারামিটার সরাসরি কোনো এনকোডিং ছাড়া এইচটিএমএল পেজে দেখায়। (৩) ডম-ভিত্তিক XSS সম্পূর্ণভাবে ব্রাউজারের ভেতরের জাভাস্ক্রিপ্টে ঘটে, যেখানে কোড অনিরাপদ সোর্স (যেমন location.hash) থেকে তথ্য নিয়ে সরাসরি এক্সিকিউশন সিঙ্কে (যেমন innerHTML বা eval) পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'stored-xss',
          def: {
            en: 'A persistent vulnerability where attacker scripts are stored in the database and executed whenever subsequent users view the infected page.',
            bn: 'একটি স্থায়ী দুর্বলতা যেখানে ক্ষতিকর স্ক্রিপ্ট ডেটাবেসে জমা থাকে এবং প্রতিবার যেকোনো ব্যবহারকারী পেজটি খুললে স্বয়ংক্রিয়ভাবে কার্যকর হয়।'
          }
        },
        {
          term: 'reflected-xss',
          def: {
            en: 'A non-persistent attack where malicious script payloads in HTTP request parameters are immediately echoed in the server response.',
            bn: 'একটি তাৎক্ষণিক আক্রমণ যেখানে ইউআরএল বা রিকোয়েস্ট প্যারামিটারের ক্ষতিকর স্ক্রিপ্ট সার্ভার পেজে সরাসরি প্রদর্শন করে দেয়।'
          }
        },
        {
          term: 'dom-based-xss',
          def: {
            en: 'A client-side vulnerability where browser JavaScript modifies the Document Object Model using untrusted data without server interaction.',
            bn: 'একটি ক্লায়েন্ট-সাইড দুর্বলতা যেখানে ব্রাউজারের নিজস্ব জাভাস্ক্রিপ্ট কোনো সার্ভার কল ছাড়াই ক্ষতিকর ডেটা সরাসরি ডমে যুক্ত করে।'
          }
        },
        {
          term: 'content-security-policy',
          def: {
            en: 'An HTTP response header that restricts the sources from which scripts, styles, and other resources can be loaded and executed.',
            bn: 'একটি এইচটিটিপি রেসপন্স হেডার যা ওয়েবসাইটে কোন কোন উৎস থেকে স্ক্রিপ্ট বা ফাইল চলতে পারবে তা সুনির্দিষ্টভাবে নিয়ন্ত্রণ করে।'
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
      id: 'contextual-output-encoding-matrix',
      text: {
        en: 'Contextual Output Encoding: HTML, Attributes, and URLs',
        bn: 'প্রাসঙ্গিক আউটপুট এনকোডিং: বডি, অ্যাট্রিবিউট ও ইউআরএল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The golden rule of XSS defense is contextual encoding: characters that are completely harmless in HTML body text become devastatingly dangerous when placed inside HTML attributes or JavaScript execution contexts.',
        bn: 'XSS প্রতিরক্ষার প্রধান মূলনীতি হলো প্রাসঙ্গিক এনকোডিং: এইচটিএমএল বডিতে যে অক্ষরটি সম্পূর্ণ নিরাপদ, কোনো ট্যাগের অ্যাট্রিবিউট বা জাভাস্ক্রিপ্ট কোডের ভেতর সেই একই অক্ষর মারাত্মক ঝুঁকি তৈরি করতে পারে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Context Location', bn: 'কোডের অবস্থান' },
        { en: 'Dangerous Characters', bn: 'বিপজ্জনক অক্ষর' },
        { en: 'Required Encoding Strategy', bn: 'প্রয়োজনীয় এনকোডিং কৌশল' },
        { en: 'Safe Native API Alternative', bn: 'নিরাপদ বিকল্প এপিআই' }
      ],
      rows: [
        [
          { en: 'HTML Body (<div>...</div>)', bn: 'এইচটিএমএল বডি (<div>...</div>)' },
          { en: '<, >, &, ", \'', bn: '<, >, &, ", \'' },
          { en: 'Convert to &lt;, &gt;, &amp;, &quot;, &#39;', bn: '&lt;, &gt;, &amp;, &quot;, &#39; তে রূপান্তর' },
          { en: 'Use element.textContent instead of innerHTML', bn: 'innerHTML-এর বদলে element.textContent ব্যবহার' }
        ],
        [
          { en: 'HTML Attribute (<input value="...">)', bn: 'অ্যাট্রিবিউট (<input value="...">)' },
          { en: 'Quotes (", \'), backtick, space', bn: 'কোটেশন (", \'), ব্যাকটিক, স্পেস' },
          { en: 'Attribute entity encoding and strict attribute quoting', bn: 'অ্যাট্রিবিউট এনকোডিং এবং কোটেশন দিয়ে আবদ্ধকরণ' },
          { en: 'Use element.setAttribute(name, value)', bn: 'element.setAttribute(name, value) ব্যবহার' }
        ],
        [
          { en: 'JavaScript Variable (<script>...)', bn: 'জাভাস্ক্রিপ্ট ভেরিয়েবল (<script>...)' },
          { en: 'Quotes, backslashes, line terminators, </script>', bn: 'কোটেশন, ব্যাকস্ল্যাশ, নতুন লাইন, </script>' },
          { en: 'JSON serialization with unicode escape sequences', bn: 'ইউনিকোড এসকেপসহ JSON রূপান্তর' },
          { en: 'Pass structured data via HTML data-* attributes', bn: 'HTML data-* অ্যাট্রিবিউটের মাধ্যমে ডেটা প্রেরণ' }
        ],
        [
          { en: 'URL Attribute (<a href="...">)', bn: 'ইউআরএল লিঙ্ক (<a href="...">)' },
          { en: 'javascript:, data:, vbscript: schemes', bn: 'javascript:, data:, vbscript: স্কিম' },
          { en: 'Strict protocol allowlist (http:, https:, mailto:)', bn: 'কঠোর প্রোটোকল অনুমোদন তালিকা (https:, mailto:)' },
          { en: 'Validate URL scheme before setting href attributes', bn: 'href-এ বসানোর আগে প্রোটোকল যাচাই করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-sanitizer-code',
      text: {
        en: 'Executable HTML Entity Sanitizer Simulation',
        bn: 'এইচটিএমএল স্যানিটাইজারের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements contextual HTML entity escaping and protocol scheme validation, proving that dangerous scripts and javascript: pseudo-protocols are rendered completely inert.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি এইচটিএমএল এনটিটি এসকেপিং এবং ইউআরএল প্রোটোকল যাচাই বাস্তবায়ন করে দেখায় কীভাবে ক্ষতিকর স্ক্রিপ্ট এবং javascript: প্রোটোকল নিষ্ক্রিয় হয়ে যায়।'
      }
    },
    {
      type: 'code',
      code: `// Complete Contextual HTML Sanitizer and URL Validator

function escapeHtmlEntities(rawText: string): string {
  const entityMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  return rawText.replace(/[&<>"']/g, (char) => entityMap[char]);
}

function sanitizeLinkUrl(rawUrl: string): string {
  const trimmed = rawUrl.trim().toLowerCase();

  // Block dangerous pseudo-protocols like javascript: and data:
  if (
    trimmed.startsWith('javascript:') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('vbscript:')
  ) {
    return '#blocked-dangerous-scheme';
  }

  return rawUrl;
}

// 1. Defending HTML body against script tag injection
const maliciousBodyInput = "<script>alert('XSS-Cookie-Theft')</script>";
const safeBodyHtml = escapeHtmlEntities(maliciousBodyInput);

// 2. Defending anchor href against pseudo-protocol execution
const maliciousLinkInput = "javascript:alert(document.domain)";
const safeLinkHref = sanitizeLinkUrl(maliciousLinkInput);

const containsActiveScriptTag = safeBodyHtml.includes('<script>');
const containsEncodedEntities = safeBodyHtml.includes('&lt;script&gt;');
const isMaliciousSchemeBlocked = safeLinkHref === '#blocked-dangerous-scheme';

console.log('Sanitized body has active script tag:', containsActiveScriptTag);
console.log('Sanitized body has inert entity tags:', containsEncodedEntities);
console.log('Malicious javascript: URL blocked:', isMaliciousSchemeBlocked);

// prints: Sanitized body has active script tag: false
// prints: Sanitized body has inert entity tags: true
// prints: Malicious javascript: URL blocked: true`
    },
    {
      type: 'heading',
      id: 'content-security-policy-defense',
      text: {
        en: 'Defense-in-Depth: Strict Content Security Policy',
        bn: 'বহুস্তরী নিরাপত্তা: কঠোর কনটেন্ট সিকিউরিটি পলিসি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A robust defense requires layered protection. Content Security Policy (CSP) is an HTTP header returned by the server that instructs browsers which resource origins are permissible. A strict CSP disables inline script execution (prohibiting script tags without cryptographic nonces) and bans the dangerous eval() function entirely. For example, the header "Content-Security-Policy: default-src \'self\'; script-src \'self\' \'nonce-randomValue\';" ensures that even if an attacker successfully injects a script tag through an unescaped template, modern browsers will outright refuse to execute it.',
        bn: 'একটি নির্ভরযোগ্য ওয়েব সিস্টেমে বহুস্তরী সুরক্ষা প্রাচীর গড়ে তোলা অপরিহার্য। কনটেন্ট সিকিউরিটি পলিসি (CSP) হলো সার্ভার থেকে পাঠানো একটি বিশেষ এইচটিটিপি হেডার যা ব্রাউজারকে জানিয়ে দেয় কোন কোন উৎস থেকে কোড চালানো যাবে। একটি কঠোর CSP ইনলাইন স্ক্রিপ্ট চলা সম্পূর্ণ বন্ধ করে দেয় (অনুমোদিত ক্রিপ্টোগ্রাফিক ননস ছাড়া স্ক্রিপ্ট নিষিদ্ধ করে) এবং বিপজ্জনক eval() ফাংশন পুরোপুরি ব্লক করে। উদাহরণস্বরূপ, "Content-Security-Policy: default-src \'self\'; script-src \'self\' \'nonce-randomValue\';" হেডারটি ব্যবহার করলে কোনো অসতর্ক ইনজেকশন পেজে ঢুকে পড়লেও ব্রাউজার তা চালাতে সরাসরি অস্বীকৃতি জানায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Context determines encoding: Encode for the specific sink (HTML body, attribute, URL, or JavaScript).',
          bn: 'অবস্থান বুঝে এনকোডিং করুন: ডেটা কোথায় বসছে (বডি, অ্যাট্রিবিউট, লিঙ্ক নাকি কোড) তা বিবেচনা করে এনকোড করুন।'
        },
        {
          en: 'Use safe DOM APIs: Prefer element.textContent and element.setAttribute over raw innerHTML.',
          bn: 'নিরাপদ ডম এপিআই ব্যবহার করুন: innerHTML-এর মতো ঝুঁকিপূর্ণ পদ্ধতির বদলে textContent ব্যবহার করুন।'
        },
        {
          en: 'Validate URL schemes: Whitelist safe protocols (http, https, mailto) to eliminate javascript: pseudo-protocols.',
          bn: 'ইউআরএল প্রোটোকল যাচাই করুন: ক্ষতিকর javascript: স্কিম ঠেকাতে কেবল নিরাপদ প্রোটোকল অনুমোদন করুন।'
        },
        {
          en: 'Enforce a strict CSP: Deploy Content-Security-Policy headers with cryptographic nonces to restrict execution.',
          bn: 'কঠোর CSP নিশ্চিত করুন: কনটেন্ট সিকিউরিটি পলিসি হেডার প্রয়োগ করে অননুমোদিত স্ক্রিপ্ট চালানো বন্ধ রাখুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-counterfeit-courier',
    tech: 'security-fundamentals',
    title: {
      en: 'Cross-Site Request Forgery (CSRF) — Ambient Cookies and Origin Validation',
      bn: 'ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF): অ্যাম্বিয়েন্ট কুকি ও অরিজিন ভ্যালিডেশন'
    }
  },
  exercises: [
    {
      id: 'tribunal-ex1',
      kind: 'mcq',
      topic: 'dom-xss-sinks-sources',
      question: {
        en: 'In DOM-based Cross-Site Scripting, what is the distinction between an untrusted "Source" and an unsafe "Sink"?',
        bn: 'ডম-ভিত্তিক XSS আক্রমণে অনিরাপদ "সোর্স" (Source) এবং ঝুঁকিপূর্ণ "সিঙ্ক" (Sink)-এর মধ্যকার পার্থক্য কী?'
      },
      options: [
        {
          en: 'A source is an input property where untrusted user data enters JavaScript (e.g. location.search), while a sink is a DOM function that executes data as code (e.g. element.innerHTML or eval)',
          bn: 'সোর্স হলো এমন জায়গা যেখান থেকে ব্যবহারকারীর তথ্য জাভাস্ক্রিপ্টে ঢোকে (যেমন location.search), আর সিঙ্ক হলো এমন ফাংশন যা সেই তথ্যকে কোড হিসেবে চালায় (যেমন innerHTML বা eval)'
        },
        {
          en: 'Sources only work on desktop computers, while sinks only run on mobile phones',
          bn: 'সোর্স কেবল কম্পিউটারে চলে আর সিঙ্ক কেবল মোবাইলে কাজ করে'
        },
        {
          en: 'A sink is an encrypted database, while a source is a public CSS stylesheet',
          bn: 'সিঙ্ক হলো এনক্রিপ্ট করা ডেটাবেস আর সোর্স হলো সাধারণ সিএসএস ফাইল'
        },
        {
          en: 'Because sources and sinks were banned by international web browser standards in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক ব্রাউজার মানদণ্ডে সোর্স ও সিঙ্ক নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Data enters at the source. Dangerous execution occurs at the sink.',
        bn: 'সোর্স থেকে তথ্য প্রবেশ করে; আর সিঙ্কের মাধ্যমে কোড কার্যকর হয়।'
      },
      explanation: {
        en: 'Tracing taint from untrusted sources to execution sinks is the standard methodology for detecting DOM XSS vulnerabilities.',
        bn: 'অবিশ্বস্ত সোর্স থেকে এক্সিকিউশন সিঙ্ক পর্যন্ত ডেটার গতিপথ পর্যবেক্ষণ করাই ডম XSS শনাক্তকরণের মূল পদ্ধতি।'
      }
    },
    {
      id: 'tribunal-ex2',
      kind: 'mcq',
      topic: 'textcontent-vs-innerhtml',
      question: {
        en: 'Why does assigning user input to element.textContent completely prevent XSS, whereas assigning to element.innerHTML creates a critical vulnerability?',
        bn: 'ইউজার ইনপুটকে element.textContent-এ বসালে কেন XSS সম্পূর্ণ প্রতিরোধ হয়, কিন্তু element.innerHTML-এ বসালে মারাত্মক দুর্বলতা তৈরি হয়?'
      },
      options: [
        {
          en: 'textContent treats all characters strictly as inert text nodes without invoking the HTML parser, while innerHTML parses strings as markup and executes embedded script tags and event handlers',
          bn: 'textContent সমস্ত লেখাকে সাধারণ টেক্সট হিসেবে দেখে এবং কোনো এইচটিএমএল পার্সার চালায় না, অন্যদিকে innerHTML লেখাকে মার্কআপ হিসেবে পড়ে ভেতরের স্ক্রিপ্ট ও ইভেন্ট হ্যান্ডলার চালু করে দেয়'
        },
        {
          en: 'textContent automatically encrypts the browser graphics memory',
          bn: 'textContent ব্রাউজারের গ্রাফিক্স মেমরি স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করে'
        },
        {
          en: 'innerHTML is an obsolete function that was removed from modern web standards',
          bn: 'innerHTML একটি বাতিল ফাংশন যা আধুনিক ওয়েব মানদণ্ড থেকে মুছে ফেলা হয়েছে'
        },
        {
          en: 'textContent consumes exactly 100 times less electrical battery power',
          bn: 'textContent ব্যবহারে ব্যাটারির বিদ্যুৎ খরচ ঠিক ১০০ গুণ কমে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'textContent creates a TextNode. A TextNode never executes code.',
        bn: 'textContent কেবল টেক্সট নোড তৈরি করে; টেক্সট নোডে কখনোই কোড রান করতে পারে না।'
      },
      explanation: {
        en: 'textContent bypasses HTML markup parsing entirely, rendering tags and attributes as harmless printable characters.',
        bn: 'textContent কোনো এইচটিএমএল পার্সিং করে না বলে সমস্ত ট্যাগ ও স্ক্রিপ্ট সাধারণ দৃশ্যমান অক্ষরে পরিণত হয়।'
      }
    },
    {
      id: 'tribunal-ex3',
      kind: 'mcq',
      topic: 'javascript-pseudo-protocol-defense',
      question: {
        en: 'Why is standard HTML entity encoding insufficient on its own to secure a dynamic hyperlink such as <a href="...">?',
        bn: 'ডাইনামিক হাইপারলিঙ্ক (<a href="...">) সুরক্ষায় কেবল সাধারণ এইচটিএমএল এনটিটি এনকোডিং কেন যথেষ্ট নয়?'
      },
      options: [
        {
          en: 'An attacker can supply a "javascript:" pseudo-protocol (such as javascript:stealData()), which contains no special HTML characters but executes arbitrary code upon being clicked',
          bn: 'আক্রমণকারী "javascript:" সিউডো-প্রোটোকল (যেমন javascript:stealData()) পাঠাতে পারে, যাতে কোনো বিশেষ এইচটিএমএল অক্ষর না থাকলেও ক্লিকে সরাসরি কোড রান হয়'
        },
        {
          en: 'Hyperlink anchors cannot display fonts with serif styling',
          bn: 'হাইপারলিঙ্কে সেরিফ ফন্ট ব্যবহার করা অসম্ভব'
        },
        {
          en: 'Because web links automatically open in fullscreen video mode',
          bn: 'কারণ সব ওয়েব লিঙ্ক নিজে থেকেই ফুলস্ক্রিন ভিডিও চালু করে'
        },
        {
          en: 'Anchor tags were designed to transmit data only over analog modems',
          bn: 'কারণ অ্যাঙ্কর ট্যাগ কেবল এনালগ মডেমের জন্য তৈরি হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'What happens when a user clicks <a href="javascript:alert(1)">Click Me</a>? The browser runs the JavaScript.',
        bn: 'যদি লিঙ্কে javascript: থাকে তবে ক্লিকে ব্রাউজার সেই কোডটি চালিয়ে দেবে; তাই প্রোটোকল যাচাই করা আবশ্যক।'
      },
      explanation: {
        en: 'Hyperlink href attributes require validating protocol schemes against an allowlist (http:, https:) to block pseudo-protocol execution.',
        bn: 'লিঙ্কের href-এ কোড চলা বন্ধ করতে অনুমোদিত প্রোটোকল (http:, https:) যাচাই করা অপরিহার্য।'
      }
    },
    {
      id: 'tribunal-ex4',
      kind: 'mcq',
      topic: 'content-security-policy-nonces',
      question: {
        en: 'How does a Content Security Policy (CSP) cryptographic Nonce defend against injected inline script tags?',
        bn: 'কনটেন্ট সিকিউরিটি পলিসির (CSP) ক্রিপ্টোগ্রাফিক ননস (Nonce) কীভাবে ইনজেক্ট করা ক্ষতিকর স্ক্রিপ্ট ট্যাগ থেকে রক্ষা করে?'
      },
      options: [
        {
          en: 'The server generates a unique random nonce per HTTP response; the browser strictly executes only script tags that possess the exact matching nonce attribute, ignoring all unauthenticated injected scripts',
          bn: 'সার্ভার প্রতি রিকোয়েস্টে একটি অনন্য গোপন ননস তৈরি করে; ব্রাউজার কেবল সেই স্ক্রিপ্টগুলোই চালায় যাদের ননস হুবহু মিলে যায় এবং ইনজেক্ট করা সব বহিরাগত স্ক্রিপ্ট বাতিল করে দেয়'
        },
        {
          en: 'The nonce formats the client hard drive if an error occurs',
          bn: 'ননস কোনো ভুল হলে ক্লায়েন্টের হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'A nonce reduces server bandwidth consumption by 50 percent',
          bn: 'ননস সার্ভারের ব্যান্ডউইথ খরচ ৫০ শতাংশ কমিয়ে আনে'
        },
        {
          en: 'Because nonces were invented by international copyright organizations',
          bn: 'কারণ আন্তর্জাতিক কপিরাইট সংস্থা ননস তৈরি করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The attacker does not know the secret random nonce generated for that specific HTTP response.',
        bn: 'আক্রমণকারী সার্ভারের সেই মুহূর্তের তৈরি করা গোপন ননস কোডটি আগে থেকে জানতে পারে না।'
      },
      explanation: {
        en: 'Cryptographic nonces enforce provenance verification: only scripts signed with the per-response token execute.',
        bn: 'ক্রিপ্টোগ্রাফিক ননস নিশ্চিত করে যে কেবলমাত্র সার্ভার অনুমোদিত আসল স্ক্রিপ্টগুলোই ব্রাউজারে রান করতে পারবে।'
      }
    }
  ],
  quiz: {
    id: 'script-tribunal-quiz',
    title: {
      en: 'Cross-Site Scripting (XSS) and Client Execution Security Quiz',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) ও ক্লায়েন্ট এক্সিকিউশন সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'st-q1',
        kind: 'mcq',
        topic: 'stored-vs-reflected-impact',
        question: {
          en: 'Why is Stored XSS generally considered substantially more dangerous than Reflected XSS?',
          bn: 'স্টোর্ড XSS কেন সাধারণত রিফ্লেক্টেড XSS-এর চেয়ে বহুগুণ বেশি বিপজ্জনক বলে বিবেচিত হয়?'
        },
        options: [
          {
            en: 'Stored XSS requires no social engineering or tricking users into clicking phishing links; the malicious payload executes automatically on every authentic user who views the infected page',
            bn: 'স্টোর্ড XSS-এ কোনো ফিশিং লিঙ্কে ক্লিক করানোর প্রয়োজন হয় না; যে কোনো সাধারণ ব্যবহারকারী পেজটি ওপেন করলেই ক্ষতিকর কোডটি স্বয়ংক্রিয়ভাবে তার ব্রাউজারে চালু হয়ে যায়'
          },
          {
            en: 'Stored XSS increases server electricity costs by exactly 1000 dollars per month',
            bn: 'স্টোর্ড XSS ব্যবহারে প্রতি মাসে ঠিক ১০০০ ডলার বিদ্যুৎ খরচ বাড়ে'
          },
          {
            en: 'Reflected XSS only affects users whose computer monitors are powered off',
            bn: 'রিফ্লেক্টেড XSS কেবল তাদের ক্ষতি করে যাদের মনিটর বন্ধ থাকে'
          },
          {
            en: 'Stored XSS was declared illegal by international maritime treaties',
            bn: 'কারণ আন্তর্জাতিক সামুদ্রিক আইনে স্টোর্ড XSS নিষিদ্ধ করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stored XSS sits in the database waiting for victims. Reflected XSS requires crafting and distributing phishing links.',
          bn: 'স্টোর্ড আক্রমণ ডেটাবেসে ওঁৎ পেতে থাকে; আর রিফ্লেক্টেড আক্রমণে ব্যবহারকারীকে ফাঁদে ফেলে লিঙ্কে ক্লিক করাতে হয়।'
        },
        explanation: {
          en: 'Stored XSS operates autonomously against all visitors, maximizing the attacker scale and stealth.',
          bn: 'স্টোর্ড XSS সমস্ত ভিজিটরের বিরুদ্ধে স্বয়ংক্রিয়ভাবে কাজ করে বিধায় এর ক্ষতির পরিধি সবচেয়ে ব্যাপক।'
        }
      },
      {
        id: 'st-q2',
        kind: 'mcq',
        topic: 'httponly-cookies-mitigation-scope',
        question: {
          en: 'While the HttpOnly cookie flag is a critical defense, why does it NOT completely solve all threats posed by an XSS vulnerability?',
          bn: 'HttpOnly কুকি অত্যন্ত কার্যকর প্রতিরক্ষা হলেও এটি কেন XSS-এর সমস্ত ঝুঁকি পুরোপুরি দূর করতে পারে না?'
        },
        options: [
          {
            en: 'While HttpOnly prevents document.cookie theft, the injected script can still make authenticated API requests in the background (performing actions as the user) and deface the user interface',
            bn: 'HttpOnly কুকি চুরি আটকালেও পেজে চলা ক্ষতিকর স্ক্রিপ্ট ব্যবহারকারীর পক্ষে ব্যাকগ্রাউন্ডে এপিআই কল করতে পারে, তথ্য বদলাতে পারে এবং পেজের তথ্য বিকৃত করতে পারে'
          },
          {
            en: 'HttpOnly cookies expire after exactly 3 seconds on all web browsers',
            bn: 'HttpOnly কুকি সব ব্রাউজারে মাত্র ৩ সেকেন্ড পর অকেজো হয়ে যায়'
          },
          {
            en: 'HttpOnly causes computer keyboards to disconnect during typing',
            bn: 'HttpOnly ব্যবহারের ফলে টাইপ করার সময় কিবোর্ড সংযোগ বিচ্ছিন্ন হয়ে যায়'
          },
          {
            en: 'Because HttpOnly is only supported on analog telephone connections',
            bn: 'কারণ HttpOnly কেবল টেলিফোন ইন্টারনেট সংযোগে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The attacker does not need to steal the token if their injected code can send requests from inside the logged-in session.',
          bn: 'স্ক্রিপ্ট যদি পেজের ভেতরেই রান হতে পারে, তবে টোকেন চুরি না করেও সে ব্যবহারকারীর নামে যেকোনো কাজ করতে পারে।'
        },
        explanation: {
          en: 'XSS gives attackers full code execution in the page context, enabling background request forgery even without cookie access.',
          bn: 'XSS পেজে পূর্ণ কোড চালানোর ক্ষমতা দেয়, ফলে সরাসরি কুকি ছাড়াও আক্রমণকারী অননুমোদিত কাজ চালিয়ে যেতে পারে।'
        }
      },
      {
        id: 'st-q3',
        kind: 'mcq',
        topic: 'eval-and-innerhtml-danger',
        question: {
          en: 'Why do secure frontend development standards strictly prohibit functions like eval() and assigning untrusted data to innerHTML?',
          bn: 'নিরাপদ ফ্রন্টএন্ড কোডিং মানদণ্ডে কেন eval() এবং innerHTML-এ অনিরাপদ ডেটা বসানো কঠোরভাবে নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Both APIs pass arbitrary strings directly to execution compilers (JavaScript engine or HTML markup parser), turning unvalidated user data into executable instructions',
            bn: 'উভয় মেথডই যেকোনো টেক্সটকে সরাসরি কম্পাইলার বা পার্সারে পাঠিয়ে দেয়, যার ফলে ব্যবহারকারীর অনিরাপদ ইনপুট সরাসরি কার্যকর কোডে পরিণত হয়'
          },
          {
            en: 'Eval increases web page download size by 200 megabytes per call',
            bn: 'Eval ব্যবহারের ফলে পেজের সাইজ প্রতি কলেই ২০০ মেগাবাইট বেড়ে যায়'
          },
          {
            en: 'Because innerHTML was banned by the World Health Organization in 2020',
            bn: 'কারণ বিশ্ব স্বাস্থ্য সংস্থা ২০২০ সালে innerHTML নিষিদ্ধ করেছিল'
          },
          {
            en: 'Both functions permanently invert the color scheme of the operating system',
            bn: 'উভয় ফাংশন অপারেটিং সিস্টেমের কালার উল্টে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing strings to compilers turns data into syntax. Always use structured APIs.',
          bn: 'কম্পাইলারে সরাসরি টেক্সট পাঠালে ডেটা সিনট্যাক্সে বদলে যায়; তাই সবসময় সুরক্ষিত এপিআই ব্যবহার করতে হয়।'
        },
        explanation: {
          en: 'Execution sinks interpret strings dynamically, creating direct injection paths if untrusted variables are included.',
          bn: 'এক্সিকিউশন সিঙ্কগুলো টেক্সটকে কোড হিসেবে চালায় বিধায় সেখানে অবিশ্বস্ত ইনপুট দিলে সরাসরি ইনজেকশন ঘটে।'
        }
      },
      {
        id: 'st-q4',
        kind: 'mcq',
        topic: 'svg-image-xss-vector',
        question: {
          en: 'Why do file upload features that permit users to upload Scalable Vector Graphics (SVG) images pose a significant XSS risk if served directly to browsers?',
          bn: 'ওয়েবসাইটে এসভিজি (SVG) ফাইল আপলোডের সুবিধা থাকলে তা সরাসরি ব্রাউজারে প্রদর্শন করা কেন মারাত্মক XSS ঝুঁকি তৈরি করে?'
        },
        options: [
          {
            en: 'SVG is an XML-based document format that can natively contain embedded <script> tags and onload event attributes, which execute when the SVG is viewed directly in a browser tab',
            bn: 'এসভিজি হলো একটি এক্সএমএল ফাইল যাতে সরাসরি <script> ট্যাগ এবং onload ইভেন্ট থাকতে পারে, যা ব্রাউজারে সরাসরি ভিউ করলে সাথে সাথে কার্যকর হয়'
          },
          {
            en: 'SVG files cause computer cooling fans to spin backwards',
            bn: 'এসভিজি ফাইল কম্পিউটারের কুলিং ফ্যান উল্টো দিকে ঘুরিয়ে দেয়'
          },
          {
            en: 'Because SVG images consume 100 percent of internet server bandwidth',
            bn: 'কারণ এসভিজি ইমেজ ইন্টারনেটের ১০০ শতাংশ ব্যান্ডউইথ খরচ করে'
          },
          {
            en: 'SVG files were outlawed by international graphic design conventions',
            bn: 'কারণ আন্তর্জাতিক গ্রাফিক ডিজাইন সংস্থা এসভিজি নিষিদ্ধ করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SVGs are not raster pixels (like PNGs); they are XML code. XML code can contain JavaScript.',
          bn: 'এসভিজি সাধারণ ছবি নয়, এটি এক্সএমএল কোড; আর এক্সএমএল কোডের ভেতর জাভাস্ক্রিপ্ট লুকিয়ে রাখা যায়।'
        },
        explanation: {
          en: 'Because SVGs are XML markup, browsers parse and execute embedded scripts when the file is navigated to directly.',
          bn: 'এসভিজি মূলত এক্সএমএল কোড হওয়ায় ব্রাউজার সরাসরি ফাইলে নেভিগেট করলে ভেতরের স্ক্রিপ্ট চালিয়ে দেয়।'
        }
      }
    ]
  }
};
