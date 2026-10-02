import type { Lesson } from '../../../lib/types';

export const InputValidationLesson: Lesson = {
  slug: 'input-validation',
  tech: 'secure-coding',
  title: {
    en: 'Input Validation: Schema Allowlists & Boundary Defenses',
    bn: 'ইনপুট ভ্যালিডেশন: স্কিমা অ্যালাউলিস্ট এবং বাউন্ডারি নিরাপত্তা'
  },
  summary: {
    en: 'Master defensive input validation architectures that reject malicious payloads before they reach business logic. Learn why positive allowlists strictly outperform negative denylists. Explore data normalization, regex canonicalization, boundary length limits, type coercion risks in JavaScript, and how prototype pollution vulnerabilities arise from unsafe recursive object merging.',
    bn: 'বিজনেস লজিকে পৌঁছানোর আগেই ক্ষতিকর পেলোড আটকে দেওয়ার ডিফেন্সিভ ইনপুট ভ্যালিডেশন আর্কিটেকচার আয়ত্ত করুন। নেগেটিভ ডিনাইলিস্টের চেয়ে পজিটিভ অ্যালাউলিস্ট কেন অনেক বেশি শক্তিশালী তা জানুন। ডাটা নরমালাইজেশন, রেজেক্স ক্যানোনিকালাইজেশন, বাউন্ডারি লিমিট, টাইপ রূপান্তরের ঝুঁকি এবং অনিরাপদ অবজেক্ট মার্জিং থেকে কীভাবে প্রোটোটাইপ পলিউশন আক্রমণ ঘটে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'trust-nothing-at-the-boundary',
      text: {
        en: 'The Front Door of Software: Trust Nothing at the Boundary',
        bn: 'সফটওয়্যারের প্রবেশদ্বার: সীমানায় কোনো কিছুকেই বিশ্বাস করবেন না'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When your application receives data from HTTP query parameters, JSON request bodies, or headers, that data is untrusted. Malicious users manipulate inputs to trigger buffer overflows, SQL injections, path traversals, and remote code execution.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন কোনো এইচটিটিপি কুয়েরি, রিকোয়েস্ট বডি বা হেডার থেকে ডাটা গ্রহণ করে, তখন সেই ডাটা সম্পূর্ণ অনিরাপদ। আক্রমণকারীরা মেমোরি উপচে ফেলা, এসকিউএল ইনজেকশন, পাথ ট্রাভার্সাল এবং রিমোট কোড এক্সিকিউশনের জন্য ইনপুটকে বিকৃত করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Input Validation is the engineering discipline of inspecting all incoming data at the trust boundary to ensure it strictly conforms to expected business constraints before passing it to inner layers. If incoming data fails schema rules, the server must reject it immediately with an HTTP 400 Bad Request error.',
        bn: 'ইনপুট ভ্যালিডেশন হলো সিস্টেমের প্রবেশদ্বারে সমস্ত আগত ডাটা যাচাই করার প্রকৌশল কৌশল, যা নিশ্চিত করে যে ভেতরের স্তরে যাওয়ার আগে ডাটা সমস্ত ব্যবসায়িক নিয়ম মেনে চলছে। ডাটা নিয়মের বাইরে গেলে সার্ভারকে অবশ্যই তাৎক্ষণিকভাবে HTTP ৪০০ ব্যাড রিকোয়েস্ট এরর দিয়ে তা প্রত্যাখ্যান করতে হবে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Positive Allowlists over Negative Denylists',
            bn: '১. নেগেটিভ ডিনাইলিস্টের বদলে পজিটিভ অ্যালাউলিস্ট'
          },
          text: {
            en: 'Never search for forbidden patterns (denylists fail because attackers invent new encodings). Always define an allowlist specifying allowed characters (such as 3 to 20 alphanumeric characters), expected data types, and permitted value ranges.',
            bn: 'কখনোই কেবল নিষিদ্ধ প্যাটার্ন খুঁজবেন না ( হ্যাকাররা নতুন এনকোডিং উদ্ভাবন করে ডিনাইলিস্ট এড়িয়ে যায় )। সর্বদা অ্যালাউলিস্টের মাধ্যমে অনুমোদিত ক্যারেক্টার ( যেমন ৩ থেকে ২০ অক্ষরের বর্ণ ও সংখ্যা ), ডাটা টাইপ এবং অনুমোদিত মান নির্ধারণ করুন।'
          },
        },
        {
          title: {
            en: '2. Canonicalization and Normalization First',
            bn: '২. ক্যানোনিকালাইজেশন এবং নরমালাইজেশন'
          },
          text: {
            en: 'Attackers use URL encoding, unicode homoglyphs, or mixed casing to disguise attacks. Always decode and canonicalize inputs to their simplest normal form before validating constraints.',
            bn: 'আক্রমণকারীরা আক্রমণ লুকাতে ইউআরএল এনকোডিং বা ইউনিকোড ব্যবহার করে। তাই ভ্যালিডেশন নিয়ম প্রয়োগ করার আগেই ইনপুটকে ডিকোড করে স্বাভাবিক সরলতম রূপে রূপান্তর করে নিন।'
          },
        },
        {
          title: {
            en: '3. Strict Boundary and Size Constraints',
            bn: '৩. কঠোর বাউন্ডারি এবং সাইজ সীমা'
          },
          text: {
            en: 'Enforce hard upper limits on string lengths, array item counts, and JSON nesting depths (such as limiting usernames to 50 characters and payload to 100KB) to prevent Denial of Service attacks.',
            bn: 'ডিনায়াল অফ সার্ভিস (DoS) আক্রমণ ঠেকাতে স্ট্রিংয়ের দৈর্ঘ্য, অ্যারের সাইজ ও নেস্টিং গভীরতার ওপর সর্বোচ্চ সীমা নির্ধারণ করুন ( যেমন ইউজারনেমে ৫০ অক্ষর এবং বডিতে ১০০ কিলোবাইট সীমা )। '
          },
        },
        {
          title: {
            en: '4. Prototype Pollution Defenses',
            bn: '৪. প্রোটোটাইপ পলিউশন প্রতিরোধ'
          },
          text: {
            en: 'In JavaScript, blindly merging client objects via deep clone allows attackers to inject prototype keys, poisoning global objects. Always reject dangerous prototype properties or parse using null-prototype dictionaries.',
            bn: 'জাভাস্ক্রিপ্টে ক্লায়েন্টের অবজেক্ট অন্ধভাবে মার্জ করলে আক্রমণকারীরা প্রোটোটাইপ কি ঢুকিয়ে দিয়ে গ্লোবাল অবজেক্ট বিষাক্ত করে ফেলতে পারে। সর্বদা প্রোটোটাইপ বৈশিষ্ট্য প্রত্যাখ্যান করুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Input Validation Architecture: The Multi-Stage Defensive Funnel',
        bn: 'ইনপুট ভ্যালিডেশন আর্কিটেকচার: বহুস্তরী প্রতিরক্ষামূলক ফিল্টার'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Input validation multi-stage funnel showing size cap, canonicalization, schema allowlist, and prototype pollution defenses">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DEFENSIVE INPUT VALIDATION: MULTI-STAGE FILTER FUNNEL</text>
  
  <!-- Left: Raw Hostile Input -->
  <g transform="translate(30, 48)">
    <rect width="180" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="90" y="24" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">HOSTILE REQUEST</text>
    
    <g transform="translate(10, 40)">
      <rect width="160" height="150" rx="4" fill="#0f172a"/>
      <text x="15" y="24" fill="#cbd5e1" font-size="9">{</text>
      <text x="25" y="44" fill="#fca5a5" font-size="8">"user": "ad&lt;script&gt;",</text>
      <text x="25" y="64" fill="#fca5a5" font-size="8">"age": "-5",</text>
      <text x="25" y="84" fill="#fca5a5" font-size="8">"role": "admin",</text>
      <text x="25" y="104" fill="#fca5a5" font-size="8">"__proto__": {</text>
      <text x="35" y="120" fill="#fca5a5" font-size="8">"isAdmin": true</text>
      <text x="25" y="136" fill="#fca5a5" font-size="8">}</text>
      <text x="15" y="148" fill="#cbd5e1" font-size="9">}</text>
      
      <rect y="165" width="160" height="120" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="80" y="188" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">THREATS PRESENT:</text>
      <text x="15" y="210" fill="#fca5a5" font-size="8">• Script Injection</text>
      <text x="15" y="228" fill="#fca5a5" font-size="8">• Negative Integer</text>
      <text x="15" y="246" fill="#fca5a5" font-size="8">• Privilege Escalation</text>
      <text x="15" y="264" fill="#fca5a5" font-size="8">• Prototype Pollution</text>
    </g>
  </g>
  
  <!-- Middle: Filter Funnel (3 Stages) -->
  <g transform="translate(230, 48)">
    <rect width="360" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="180" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">THE VALIDATION FUNNEL</text>
    
    <!-- Filter 1 -->
    <g transform="translate(15, 38)">
      <rect width="330" height="65" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="20" y="24" fill="#38bdf8" font-size="10" font-weight="bold">STAGE 1: PAYLOAD SIZE &amp; CANONICALIZATION</text>
      <text x="20" y="42" fill="#cbd5e1" font-size="9">Rejects bodies &gt; 100KB; decodes URL/UTF-8 escapes</text>
      <text x="20" y="56" fill="#6ee7b7" font-size="8">Prevents DoS and homoglyph bypasses</text>
    </g>
    
    <!-- Filter 2 -->
    <g transform="translate(15, 115)">
      <rect width="330" height="75" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="20" y="22" fill="#f59e0b" font-size="10" font-weight="bold">STAGE 2: SCHEMA ALLOWLIST &amp; KEY FILTER</text>
      <text x="20" y="40" fill="#cbd5e1" font-size="9">Strips unknown keys ("role": "admin" dropped!)</text>
      <text x="20" y="54" fill="#cbd5e1" font-size="8">Rejects prototype keys (__proto__, prototype)</text>
      <text x="20" y="68" fill="#ef4444" font-size="8" font-weight="bold">Blocks Mass Assignment &amp; Prototype Pollution</text>
    </g>
    
    <!-- Filter 3 -->
    <g transform="translate(15, 202)">
      <rect width="330" height="80" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="20" y="22" fill="#10b981" font-size="10" font-weight="bold">STAGE 3: TYPE COERCION &amp; REGEX BOUNDARIES</text>
      <text x="20" y="40" fill="#cbd5e1" font-size="9">username: must match /^[a-zA-Z0-9_]{3,16}$/</text>
      <text x="20" y="54" fill="#cbd5e1" font-size="8">age: must be strictly integer between 18 and 120</text>
      <text x="20" y="70" fill="#6ee7b7" font-size="8" font-weight="bold">Rejects scripts, HTML tags, and invalid boundaries</text>
    </g>
    
    <text x="180" y="325" fill="#fca5a5" font-size="9" text-anchor="middle">Any violation halts execution immediately with 400 Bad Request</text>
  </g>
  
  <!-- Right: Sanitized Output -->
  <g transform="translate(610, 48)">
    <rect width="200" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="100" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">CLEAN OUTPUT</text>
    
    <g transform="translate(15, 45)">
      <rect width="170" height="150" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="25" fill="#f8fafc" font-size="9">{</text>
      <text x="25" y="50" fill="#6ee7b7" font-size="9">"username":</text>
      <text x="35" y="68" fill="#f8fafc" font-size="9">"alice_99",</text>
      <text x="25" y="95" fill="#6ee7b7" font-size="9">"age": 25</text>
      <text x="15" y="125" fill="#f8fafc" font-size="9">}</text>
      <text x="85" y="142" fill="#6ee7b7" font-size="8" text-anchor="middle">100% Validated Types</text>
      
      <rect y="170" width="170" height="110" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="85" y="195" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">PASSED TO DB</text>
      <text x="15" y="220" fill="#cbd5e1" font-size="8">• Safe for SQL queries</text>
      <text x="15" y="238" fill="#cbd5e1" font-size="8">• Safe for business logic</text>
      <text x="15" y="256" fill="#cbd5e1" font-size="8">• Zero attack payloads</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Positive schema allowlists reject unexpected fields and validate character formats before reaching business logic</text>
</svg>`,
      caption: {
        en: 'A multi-stage validation funnel normalizes input, strips unauthorized fields, validates data types, and blocks prototype pollution.',
        bn: 'বহুস্তরী ভ্যালিডেশন ফানেল ইনপুট স্বাভাবিক করে, অননুমোদিত ফিল্ড বাতিল করে, ডাটা টাইপ নিশ্চিত করে এবং প্রোটোটাইপ পলিউশন ঠেকায়।'
      },
    },
    {
      type: 'heading',
      id: 'schema-validator-code',
      text: {
        en: 'Implementing a Defensive Schema Allowlist Validator',
        bn: 'ডিফেন্সিভ স্কিমা অ্যালাউলিস্ট ভ্যালিডেটর বাস্তবায়ন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how defensive schema validation prevents malicious input injection, inspect the following validator engine. It tests incoming user registrations against strict allowlists, rejecting script injections and prototype tampering.',
        bn: 'ডিফেন্সিভ স্কিমা ভ্যালিডেশন কীভাবে ক্ষতিকর ইনপুট প্রতিহত করে তা দেখতে নিচের ভ্যালিডেটর কোডটি পর্যালোচনা করুন। এটি ব্যবহারকারীর রেজিস্ট্রেশন ডেটাকে কঠোর অ্যালাউলিস্ট দিয়ে পরীক্ষা করে এবং ক্ষতিকর আক্রমণ রুখে দেয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'defensive-schema-validator.js',
      code: `// Production-Grade Schema Allowlist and Prototype Pollution Defense

class DefensiveValidator {
  constructor() {
    this.allowedFields = new Set(['username', 'age']);
    this.dangerousKeys = new Set(['__proto__', 'prototype', 'constructor']);
  }

  validateRegistration(inputPayload) {
    // Stage 1: Validate payload is a plain object
    if (!inputPayload || typeof inputPayload !== 'object' || Array.isArray(inputPayload)) {
      return { isValid: false, status: 400, error: 'Payload must be a valid JSON object.' };
    }

    // Stage 2: Check for prototype pollution & strip unlisted keys
    const sanitizedData = Object.create(null); // Clean dictionary without prototype

    for (const key of Object.keys(inputPayload)) {
      // Prototype pollution defense
      if (this.dangerousKeys.has(key)) {
        return { isValid: false, status: 400, error: 'Security violation: prototype tampering blocked.' };
      }
      // Positive allowlist: reject unexpected keys (e.g. role: admin)
      if (!this.allowedFields.has(key)) {
        return { isValid: false, status: 400, error: 'Forbidden field: ' + key + ' is not permitted.' };
      }
    }

    // Stage 3: Validate username format (allowlist: 3-16 alphanumeric + underscores)
    const rawUsername = inputPayload.username;
    if (typeof rawUsername !== 'string' || !/^[a-zA-Z0-9_]{3,16}$/.test(rawUsername)) {
      return { isValid: false, status: 400, error: 'Invalid username: must be 3-16 alphanumeric characters.' };
    }
    sanitizedData.username = rawUsername;

    // Stage 4: Validate age constraint (must be integer between 18 and 120)
    const rawAge = Number(inputPayload.age);
    if (!Number.isInteger(rawAge) || rawAge < 18 || rawAge > 120) {
      return { isValid: false, status: 400, error: 'Invalid age: must be an integer between 18 and 120.' };
    }
    sanitizedData.age = rawAge;

    return { isValid: true, status: 200, data: sanitizedData };
  }
}

const validator = new DefensiveValidator();

console.log('=== Step 1: Testing Script Injection in Username ===');
const attack1 = validator.validateRegistration({ username: '<script>alert(1)</script>', age: 25 });
console.log('Result:', attack1);

console.log('\\n=== Step 2: Testing Privilege Escalation Key Injection ===');
const attack2 = validator.validateRegistration({ username: 'alice_99', age: 25, role: 'admin' });
console.log('Result:', attack2);

console.log('\\n=== Step 3: Testing Prototype Pollution Attack ===');
const attack3 = validator.validateRegistration({ username: 'bob_01', age: 30, __proto__: { admin: true } });
console.log('Result:', attack3);

console.log('\\n=== Step 4: Testing Valid Registration Data ===');
const cleanInput = validator.validateRegistration({ username: 'charlie_dev', age: 28 });
console.log('Result:', cleanInput);`,
      caption: {
        en: 'The validator rejects script tags, mass assignment, and prototype pollution, only admitting sanitized data.',
        bn: 'ভ্যালিডেটরটি স্ক্রিপ্ট ট্যাগ, ম্যাস অ্যাসাইনমেন্ট ও প্রোটোটাইপ পলিউশন বাতিল করে কেবল যাচাইকৃত ডাটা গ্রহণ করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Path Traversal & Canonical File Paths',
        bn: 'পাথ ট্রাভার্সাল এবং ক্যানোনিকাল ফাইল পাথ'
      },
      text: {
        en: 'When an application accepts a filename from user input (for example, GET /download?file=report.pdf), attackers submit relative path traversal sequences like ../../../../etc/passwd to steal server credentials. Never use raw user-supplied strings directly with filesystem functions. Always resolve the absolute path using path.resolve(), and verify that the target path strictly begins with the intended base directory. If it attempts to escape, immediately reject the request!',
        bn: 'অ্যাপ্লিকেশন যখন ইনপুট হিসেবে কোনো ফাইলের নাম গ্রহণ করে ( যেমন GET /download?file=report.pdf ), তখন আক্রমণকারীরা ../../../../etc/passwd এর মতো আপেক্ষিক পথ পাঠিয়ে সার্ভারের গোপন ফাইল চুরির চেষ্টা করে। ফাইলসিস্টেম ফাংশনে কখনোই সরাসরি ব্যবহারকারীর পাঠানো স্ট্রিং ব্যবহার করবেন না। সর্বদা path.resolve() দিয়ে পরম পথ বের করুন এবং নিশ্চিত করুন যে ফাইলটি অনুমোদিত মূল ফোল্ডারের ভেতরেই অবস্থান করছে। ফোল্ডার অতিক্রমের চেষ্টা করা হলে সাথে সাথে রিকোয়েস্ট বাতিল করুন!'
      },
    },
  ],
  exercises: [
    {
      id: 'input-val-ex-1',
      kind: 'predict',
      topic: 'boundary-limits',
      question: {
        en: 'If a username allowlist requires between 3 and 16 characters, what is the maximum number of allowable characters? (16). Type the number.',
        bn: 'একটি ইউজারনেম অ্যালাউলিস্টের নিয়ম যদি ৩ থেকে ১৬ অক্ষরের হয়, তবে সর্বোচ্চ অনুমোদিত অক্ষরের সংখ্যা কত? ( ১৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '16',
      hint: {
        en: 'The maximum length boundary is 16.',
        bn: 'সর্বোচ্চ দৈর্ঘ্যের সীমা হলো ১৬।'
      },
      explanation: {
        en: 'Boundary enforcement restricts length to at most 16 characters, preventing buffer overruns and formatting bugs.',
        bn: 'বাউন্ডারি সীমা সর্বোচ্চ ১৬ অক্ষর নির্ধারণ করে বাফার উপচে পড়া ও ফরম্যাটিং ত্রুটি প্রতিরোধ করে।'
      },
    },
    {
      id: 'input-val-ex-2',
      kind: 'mcq',
      topic: 'positive-allowlists',
      question: {
        en: 'Why do positive allowlists strictly outperform negative denylists in secure coding architecture?',
        bn: 'সিকিউর কোডিং আর্কিটেকচারে নেগেটিভ ডিনাইলিস্টের তুলনায় পজিটিভ অ্যালাউলিস্ট কেন অনেক বেশি শক্তিশালী?'
      },
      options: [
        {
          en: 'Allowlists define exactly what is permitted and reject everything else by default, whereas denylists fail because attackers invent alternative encodings that bypass blacklist rules',
          bn: 'অ্যালাউলিস্ট কেবল অনুমোদিত বিষয়গুলোকে গ্রহণ করে বাকি সবকিছু ডিফল্টভাবে বাতিল করে, যেখানে আক্রমণকারীরা নতুন এনকোডিং উদ্ভাবন করে ডিনাইলিস্ট ফাঁকি দিতে পারে',
        },
        {
          en: 'Because allowlists turn off computer electrical power whenever bad words are typed',
          bn: 'কারণ খারাপ শব্দ টাইপ করলেই অ্যালাউলিস্ট কম্পিউটারের বিদ্যুৎ সংযোগ বন্ধ করে দেয়',
        },
        {
          en: 'Because denylists are only permitted on desktop computers, not cloud servers',
          bn: 'কারণ ডিনাইলিস্ট কেবল ডেস্কটপ কম্পিউটারে চলে, ক্লাউড সার্ভারে চলে না',
        },
        {
          en: 'Because allowlists reduce the physical price of server hosting hardware',
          bn: 'কারণ অ্যালাউলিস্ট সার্ভার হোস্টিং হার্ডওয়্যারের আর্থিক মূল্য কমিয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Allowlists accept only known safe patterns and reject everything else.',
        bn: 'অ্যালাউলিস্ট কেবল পরিচিত নিরাপদ ডাটা নেয় এবং বাকি সব বাতিল করে।',
      },
      explanation: {
        en: 'Denylists are fundamentally incomplete because the attack space is infinite. Positive allowlists enforce a known safe boundary.',
        bn: 'ডিনাইলিস্ট কখনোই সম্পূর্ণ হতে পারে না কারণ আক্রমণের রূপ অসীম। অ্যালাউলিস্ট একটি নিরাপদ গণ্ডি নিশ্চিত করে।'
      },
    },
    {
      id: 'input-val-ex-3',
      kind: 'mcq',
      topic: 'prototype-pollution',
      question: {
        en: 'What critical vulnerability occurs when a JavaScript application recursively copies untrusted JSON properties onto existing objects without filtering key names?',
        bn: 'জাভাস্ক্রিপ্ট অ্যাপ্লিকেশনে কি-এর নাম পরীক্ষা না করে ব্যবহারকারীর পাঠানো JSON প্রোপার্টি কপি করলে কোন মারাত্মক নিরাপত্তা ত্রুটি তৈরি হয়?'
      },
      options: [
        {
          en: 'Prototype Pollution: the attacker injects prototype keys to alter default object properties across the entire application runtime',
          bn: 'প্রোটোটাইপ পলিউশন: আক্রমণকারী প্রোটোটাইপ কি প্রবেশ করিয়ে পুরো অ্যাপ্লিকেশনের গ্লোবাল অবজেক্টের বৈশিষ্ট্য বিকৃত করে ফেলে',
        },
        {
          en: 'The computer keyboard permanently locks all vowel keys',
          bn: 'কিবোর্ডের সমস্ত ভাওয়েল বাটন চিরতরে অচল হয়ে যায়',
        },
        {
          en: 'The server hard drive starts emitting green optical laser light',
          bn: 'সার্ভারের হার্ড ড্রাইভ থেকে সবুজ লেজার রশ্মি বের হতে শুরু করে',
        },
        {
          en: 'All internet network cables change color to yellow',
          bn: 'সমস্ত ইন্টারনেট নেটওয়ার্ক কেবলের রঙ হলুদে পরিবর্তিত হয়ে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Prototype pollution poisons the global Object prototype.',
        bn: 'প্রোটোটাইপ পলিউশন গ্লোবাল অবজেক্ট প্রোটোটাইপকে বিষাক্ত করে তোলে।',
      },
      explanation: {
        en: 'Unchecked object merging allows attackers to overwrite Object.prototype, causing property injection, auth bypasses, and remote code execution.',
        bn: 'যাচাই ছাড়া অবজেক্ট মার্জ করলে আক্রমণকারীরা গ্লোবাল অবজেক্ট বদলে দিয়ে অথেনটিকেশন বাইপাস করতে পারে।'
      },
    },
    {
      id: 'input-val-ex-4',
      kind: 'predict',
      topic: 'integer-boundaries',
      question: {
        en: 'If a registration schema requires users to be at least 18 years old and under 120 years old, what is the minimum integer age? (18). Type the number.',
        bn: 'একটি রেজিস্ট্রেশন স্কিমায় ব্যবহারকারীর বয়স যদি ১৮ থেকে ১২০ বছরের মধ্যে হতে হয়, তবে সর্বনিম্ন গ্রহণযোগ্য বয়সের মান কত? ( ১৮ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '18',
      hint: {
        en: 'The lower boundary is 18.',
        bn: 'সর্বনিম্ন সীমা হলো ১৮।'
      },
      explanation: {
        en: 'The validator strictly enforces the lower boundary constraint of 18, rejecting younger or negative inputs.',
        bn: 'ভ্যালিডেটরটি কঠোরভাবে ১৮ এর সর্বনিম্ন সীমা প্রয়োগ করে ঋণাত্মক বা কম মান প্রত্যাখ্যান করে।'
      },
    },
  ],
  quiz: {
    id: 'input-validation-quiz',
    title: {
      en: 'Input Validation & Boundary Defenses Quiz',
      bn: 'ইনপুট ভ্যালিডেশন ও বাউন্ডারি নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'input-val-qz-1',
        kind: 'mcq',
        topic: 'normalization-before-validation',
        question: {
          en: 'Why must data normalization and canonicalization occur BEFORE validation rules are evaluated?',
          bn: 'ভ্যালিডেশন নিয়ম যাচাই করার পূর্বেই ডাটা নরমালাইজেশন এবং ক্যানোনিকালাইজেশন সম্পন্ন করা কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'Attackers use multiple layers of character encoding (like URL percent-encoding or unicode variants) to smuggle malicious payloads past regex filters that only inspect raw text',
            bn: 'আক্রমণকারীরা রেজেক্স ফিল্টারকে ফাঁকি দিতে বিভিন্ন এনকোডিং বা ইউনিকোড রূপ ব্যবহার করে, তাই আগেই সরলতম রূপ বের না করলে ক্ষতিকর কোড ফিল্টার এড়িয়ে ভেতরে ঢুকে পড়ে',
          },
          {
            en: 'Because computer hardware cannot evaluate numbers until text is capitalized',
            bn: 'কারণ লেখা বড় হাতের না করা পর্যন্ত কম্পিউটার কোনো সংখ্যা হিসাব করতে পারে না',
          },
          {
            en: 'Because normalization cuts the price of monthly cloud storage in half',
            bn: 'কারণ নরমালাইজেশন ক্লাউড স্টোরেজের মাসিক বিল অর্ধেক করে দেয়',
          },
          {
            en: 'Because un-normalized text makes the server cooling fan spin backwards',
            bn: 'কারণ নরমালাইজ না করা টেক্সট সার্ভারের কুলিং ফ্যানকে উল্টো দিকে ঘোরায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Normalize first so regex filters inspect canonical text, preventing encoding bypasses.',
          bn: 'আগে স্বাভাবিক করে নিলে ফিল্টার সঠিক লেখা দেখতে পায় এবং এনকোডিং বাইপাস ঠেকানো যায়।',
        },
        explanation: {
          en: 'If you validate before decoding, an attacker can submit %3Cscript%3E. The validator sees no < character, but the subsequent decoder restores the malicious tag.',
          bn: 'ডিকোড করার আগে যাচাই করলে %3Cscript%3E এর মতো কোড ফিল্টার ফাঁকি দিয়ে ভেতরে গিয়ে ক্ষতিকর স্ক্রিপ্টে পরিণত হতে পারে।'
        },
      },
      {
        id: 'input-val-qz-2',
        kind: 'mcq',
        topic: 'payload-size-limiting',
        question: {
          en: 'How does enforcing a 100KB payload size limit at the API gateway mitigate security threats?',
          bn: 'এপিআই গেটওয়েতে ১০০ কিলোবাইটের পেলোড সাইজ সীমা প্রয়োগ করলে কোন নিরাপত্তা ঝুঁকি হ্রাস পায়?'
        },
        options: [
          {
            en: 'It prevents Resource Exhaustion Denial of Service (DoS) attacks where attackers submit massive megabyte payloads to overwhelm JSON parsers, CPU threads, and memory allocations',
            bn: 'এটি মেমোরি ও সিপিইউ শেষ করে দেওয়া ডিনায়াল অফ সার্ভিস (DoS) আক্রমণ ঠেকায়, যেখানে আক্রমণকারীরা JSON পার্সারকে অচল করতে বিশাল মেগাবাইটের ডাটা পাঠায়',
          },
          {
            en: 'It stops computer displays from overheating during heavy sunshine',
            bn: 'এটি কড়া রোদের সময় কম্পিউটার ডিসপ্লে অতিরিক্ত গরম হওয়া রোধ করে',
          },
          {
            en: 'It makes all incoming network packets fly through physical air without cables',
            bn: 'এটি কোনো কেবল ছাড়াই নেটওয়ার্ক প্যাকেটকে বাতাসে উড়তে সাহায্য করে',
          },
          {
            en: 'It permanently deletes all spam emails from user inboxes',
            bn: 'এটি ব্যবহারকারীর ইনবক্স থেকে সমস্ত স্প্যাম ইমেইল চিরতরে মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Payload limits prevent JSON parser memory exhaustion DoS.',
          bn: 'পেলোড সীমা পার্সারের মেমোরি সংকট ও ডস আক্রমণ প্রতিরোধ করে।',
        },
        explanation: {
          en: 'Parsing deeply nested or multi-megabyte JSON payloads consumes quadratic CPU time and memory. Strict payload caps prevent parser-based DoS.',
          bn: 'অতিরিক্ত বড় বা জটিল JSON পার্স করতে প্রচুর সিপিইউ ও মেমোরি নষ্ট হয়। সাইজ সীমা এই বিপর্যয় ঠেকায়।'
        },
      },
      {
        id: 'input-val-qz-3',
        kind: 'mcq',
        topic: 'path-traversal-resolution',
        question: {
          en: 'How does combining path.resolve() with a startsWith() base directory check prevent directory traversal attacks?',
          bn: 'path.resolve() এর সাথে startsWith() ডিরেক্টরি যাচাই যুক্ত করলে কীভাবে পাথ ট্রাভার্সাল আক্রমণ প্রতিরোধ হয়?'
        },
        options: [
          {
            en: 'It resolves relative dots (..) to an absolute canonical filesystem path and verifies that the canonical path resides strictly inside the intended public sandbox directory',
            bn: 'এটি আপেক্ষিক ডট (..) দূর করে আসল পরম ফাইল পথ বের করে এবং নিশ্চিত করে যে সেই পথটি কঠোরভাবে নির্ধারিত নিরাপদ ফোল্ডারের ভেতরেই অবস্থান করছে',
          },
          {
            en: 'It encrypts the hard drive using physical padlocks and metal keys',
            bn: 'এটি ধাতব চাবি ও তালা ব্যবহার করে হার্ড ড্রাইভকে এনক্রিপ্ট করে ফেলে',
          },
          {
            en: 'It makes the computer operating system delete all text files',
            bn: 'এটি অপারেটিং সিস্টেমকে সমস্ত টেক্সট ফাইল মুছে ফেলতে বাধ্য করে',
          },
          {
            en: 'It changes the mouse cursor icon into an image of a red stop sign',
            bn: 'এটি মাউস কার্সারকে একটি লাল স্টপ চিহ্নের ছবিতে বদলে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Canonical path resolution detects and blocks directory escape attempts.',
          bn: 'আসল পথ যাচাইয়ের মাধ্যমে ফোল্ডার টপকে পালানোর চেষ্টা ধরা পড়ে ও আটকে যায়।',
        },
        explanation: {
          en: 'path.resolve strips relative traversal segments (like ../../). Checking startsWith ensures the resolved path cannot escape the safe root.',
          bn: 'path.resolve আপেক্ষিক পথকে সোজা করে আসল ঠিকানায় আনে এবং startsWith নিশ্চিত করে যে এটি নিরাপদ ফোল্ডারের বাইরে যায়নি।'
        },
      },
      {
        id: 'input-val-qz-4',
        kind: 'mcq',
        topic: 'why-runtime-validation-needed',
        question: {
          en: 'In TypeScript web applications, why does runtime input validation remain mandatory even when compile-time types are defined?',
          bn: 'টাইপস্ক্রিপ্ট অ্যাপ্লিকেশনে কম্পাইল-টাইম টাইপ থাকা সত্ত্বেও রানটাইম ইনপুট ভ্যালিডেশন কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'TypeScript types are completely erased during JavaScript compilation; at runtime, any arbitrary malformed or malicious JSON payload can be sent by an attacker',
            bn: 'জাভাস্ক্রিপ্ট কম্পাইলেশনের সময় টাইপস্ক্রিপ্টের সমস্ত টাইপ মুছে যায়; ফলে রানটাইমে আক্রমণকারীরা যেকোনো ক্ষতিকর ও অনিয়ন্ত্রিত ডাটা পাঠাতে সক্ষম',
          },
          {
            en: 'Because TypeScript compiler only runs when the computer mouse is clicked',
            bn: 'কারণ মাউসে ক্লিক না করা পর্যন্ত টাইপস্ক্রিপ্ট কম্পাইলার চলে না',
          },
          {
            en: 'Because JavaScript code cannot run on internet servers without validation',
            bn: 'কারণ ভ্যালিডেশন ছাড়া ইন্টারনেট সার্ভারে জাভাস্ক্রিপ্ট কোড চলতে পারে না',
          },
          {
            en: 'Because TypeScript types turn into physical paper documents',
            bn: 'কারণ টাইপস্ক্রিপ্ট টাইপগুলো কাগজের নথিতে রূপান্তরিত হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Types are erased at compile time; runtime JavaScript has no native type guarantees.',
          bn: 'কম্পাইলেশনের সময় টাইপ মুছে যায়, তাই রানটাইমে কোনো স্বতঃসিদ্ধ নিরাপত্তা থাকে না।',
        },
        explanation: {
          en: 'TypeScript only provides compile-time developer ergonomics. It offers zero runtime security protection against untrusted HTTP payloads.',
          bn: 'টাইপস্ক্রিপ্ট কেবল কোড লেখার সময় সাহায্য করে। রানটাইমে ক্ষতিকর পেলোড থেকে বাঁচতে বাস্তব ভ্যালিডেশন অপরিহার্য।'
        },
      },
    ],
  },
  next: {
    slug: 'output-encoding',
    title: {
      en: 'Output Encoding: Contextual Escaping & XSS Neutralization',
      bn: 'আউটপুট এনকোডিং: কনটেক্সচুয়াল এস্কেপিং এবং XSS প্রতিরোধ'
    },
  },
};
