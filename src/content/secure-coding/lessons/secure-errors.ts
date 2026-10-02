import type { Lesson } from '../../../lib/types';

export const SecureErrorsLesson: Lesson = {
  slug: 'secure-errors',
  tech: 'secure-coding',
  title: {
    en: 'Secure Error Handling: Information Leakage & Stack Sanitization',
    bn: 'নিরাপদ এরর হ্যান্ডলিং: তথ্য ফাঁসরোধ এবং স্ট্যাক স্যানিটাইজেশন'
  },
  summary: {
    en: 'Design resilient error handling architectures that safeguard internal system architecture from reconnaissance attacks. Understand why raw exception stack traces, internal server file paths, SQL query snippets, and distinct authentication error messages act as gift maps for adversaries. Master safe public error abstraction, correlation tracking IDs, structured audit logging, and constant-time error responses.',
    bn: 'অভ্যন্তরীণ সিস্টেম আর্কিটেকচারকে গোয়েন্দা আক্রমণ থেকে রক্ষা করতে স্থিতিস্থাপক এরর হ্যান্ডলিং আর্কিটেকচার ডিজাইন করুন। র এক্সেপশন স্ট্যাক ট্রেস, সার্ভারের ফাইল পাথ, এসকিউএল কুয়েরি এবং লগইন এররের বিভিন্নতা কেন আক্রমণকারীদের জন্য সহায়ক মানচিত্র হয়ে দাঁড়ায় তা জানুন। নিরাপদ পাবলিক এরর অ্যাবস্ট্রাকশন, কোরিলেশন ট্র্যাকিং আইডি, স্ট্রাকচার্ড অডিট লগিং এবং কনস্ট্যান্ট-টাইম এরর রেসপন্স পদ্ধতি আয়ত্ত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-information-leakage-vulnerability',
      text: {
        en: 'The Danger of Leaking Server Internals in Error Messages',
        bn: 'এরর মেসেজের মাধ্যমে সার্ভারের ভেতরের তথ্য ফাঁসের মারাত্মক ঝুঁকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When your application encounters an unhandled exception, the error message returned to the client can become a dangerous vulnerability. Attackers deliberately trigger errors to map your database schemas, library versions, and filesystem paths.',
        bn: 'যখন আপনার অ্যাপ্লিকেশনে কোনো অপ্রত্যাশিত ত্রুটি ঘটে, তখন ক্লায়েন্টকে পাঠানো এরর মেসেজ মারাত্মক নিরাপত্তা ঝুঁকি তৈরি করতে পারে। আক্রমণকারীরা আপনার ডাটাবেজ স্কিমা, লাইব্রেরি সংস্করণ এবং সার্ভার ফাইল পাথ খুঁজে বের করতে ইচ্ছাকৃতভাবে ভুল ডাটা পাঠায়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Internal stack traces expose absolute file paths, database connection strings, and vulnerable package dependencies. Even small differences in authentication error messages—such as "User does not exist" versus "Incorrect password"—allow adversaries to build complete lists of valid accounts. A defensive error handling boundary sanitizes all public error responses while preserving full diagnostic data in private logs.',
        bn: 'সার্ভারের অভ্যন্তরীণ স্ট্যাক ট্রেস ফাইলের পরম পথ, ডাটাবেজ সংযোগ এবং ব্যবহৃত লাইব্রেরির দুর্বলতা ফাঁস করে দেয়। এমনকি লগইন এররের সামান্য পার্থক্যও ( যেমন "ইউজার পাওয়া যায়নি" বনাম "ভুল পাসওয়ার্ড" ) হ্যাকারদের বৈধ একাউন্টের তালিকা তৈরি করতে সাহায্য করে। একটি সুরক্ষিত এরর হ্যান্ডলিং বাউন্ডারি বাইরের ব্যবহারকারীর জন্য সমস্ত এরর নিরাপদ রাখে এবং ভেতরের লগে সম্পূর্ণ তথ্য সংরক্ষণ করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Generic Client Error Abstraction',
            bn: '১. ক্লায়েন্টের জন্য সাধারণ এরর রূপ'
          },
          text: {
            en: 'Never send raw exception objects or stack traces to HTTP responses. Return clean, structured JSON containing only a high-level status, a safe error message, and a unique tracking identifier.',
            bn: 'কখনোই ক্লায়েন্টের কাছে সরাসরি এক্সেপশন অবজেক্ট বা স্ট্যাক ট্রেস পাঠাবেন না। কেবল একটি সাধারণ মেসেজ এবং ট্র্যাকিং আইডি সমৃদ্ধ সংক্ষিপ্ত JSON রেসপন্স প্রদান করুন।'
          },
        },
        {
          title: {
            en: '2. Internal Correlation Request IDs',
            bn: '২. কোরিলেশন রিকোয়েস্ট আইডি ব্যবহার'
          },
          text: {
            en: 'Generate a unique request identifier for every incoming transaction. Return this identifier to the user so they can report it to support, while logging the full raw stack trace internally with that same ID.',
            bn: 'প্রতিটি রিকোয়েস্টের জন্য একটি অনন্য আইডি তৈরি করুন। ব্যবহারকারীকে এই আইডি দিন যাতে তারা সাপোর্টে যোগাযোগ করতে পারে এবং এই একই আইডির বিপরীতে সার্ভার লগে সম্পূর্ণ স্ট্যাক ট্রেস রাখুন।'
          },
        },
        {
          title: {
            en: '3. Uniform Authentication Responses',
            bn: '৩. লগইনে অভিন্ন এরর মেসেজ'
          },
          text: {
            en: 'Always return the exact same generic error (such as "Invalid username or password") regardless of whether the account exists or the password was incorrect, preventing user enumeration.',
            bn: 'অ্যাকাউন্ট না থাকা বা ভুল পাসওয়ার্ড উভয়ের জন্যই সর্বদা একই সাধারণ এরর ( যেমন "ইউজারনেম বা পাসওয়ার্ড সঠিক নয়" ) দিন যাতে ব্যবহারকারীর নাম শনাক্ত করা অসম্ভব হয়।'
          },
        },
        {
          title: {
            en: '4. Fail-Closed Error Defenses',
            bn: '৪. ফেইল-ক্লোজড নিরাপত্তা নীতি'
          },
          text: {
            en: 'If an error occurs during an authorization or cryptographic check, immediately deny access by default. Never allow unexpected exceptions to bypass security gates.',
            bn: 'নিরাপত্তা যাচাইয়ের সময় কোনো ত্রুটি দেখা দিলে তাৎক্ষণিকভাবে সমস্ত অ্যাক্সেস বন্ধ করে দিন। কখনোই কোনো ত্রুটির সুযোগে নিরাপত্তা গেট উন্মুক্ত রাখবেন না।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Defensive Error Boundary: Segregating Public Responses from Internal Logs',
        bn: 'ডিফেন্সিভ এরর বাউন্ডারি: পাবলিক রেসপন্স এবং ইন্টারনাল লগের সুস্পষ্ট বিভাজন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Defensive error boundary showing server crash caught, detailed log sent to CloudWatch/Elastic, and sanitized HTTP 500 sent to client">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THE DEFENSIVE ERROR BOUNDARY ARCHITECTURE</text>
  
  <!-- Left: Unhandled Server Crash -->
  <g transform="translate(30, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="115" y="24" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">SERVER EXCEPTION</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="150" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#ef4444" font-size="9" font-weight="bold">RAW ERROR OBJECT:</text>
      <text x="15" y="44" fill="#fca5a5" font-size="8">PostgresError: syntax error</text>
      <text x="15" y="60" fill="#fca5a5" font-size="8">at /srv/app/db.ts:142</text>
      <text x="15" y="76" fill="#cbd5e1" font-size="8">Query: SELECT * FROM users</text>
      <text x="15" y="92" fill="#cbd5e1" font-size="8">WHERE token = 'secret'</text>
      <text x="15" y="112" fill="#fca5a5" font-size="8">at Module.run (v8.js:89)</text>
      <text x="15" y="130" fill="#fca5a5" font-size="8">at async handleRequest()</text>
      
      <rect y="170" width="200" height="120" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="100" y="195" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">LETHAL IF LEAKED</text>
      <text x="15" y="220" fill="#fca5a5" font-size="8">• Reveals database dialect</text>
      <text x="15" y="238" fill="#fca5a5" font-size="8">• Reveals filesystem path</text>
      <text x="15" y="256" fill="#fca5a5" font-size="8">• Exposes table column names</text>
      <text x="15" y="274" fill="#fca5a5" font-size="8">• May leak secret query data</text>
    </g>
  </g>
  
  <!-- Middle: Error Boundary Middleware -->
  <g transform="translate(285, 48)">
    <rect width="270" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="135" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">CENTRAL ERROR BOUNDARY</text>
    
    <g transform="translate(15, 40)">
      <rect width="240" height="95" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#f59e0b" font-size="10" font-weight="bold">1. ASSIGN CORRELATION ID</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="9">requestId = "req-98f21e"</text>
      <text x="15" y="60" fill="#6ee7b7" font-size="9">Links public error to backend</text>
      <text x="15" y="78" fill="#cbd5e1" font-size="8">Enables instant customer support</text>
      
      <rect y="115" width="240" height="100" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="137" fill="#38bdf8" font-size="10" font-weight="bold">2. INTERNAL AUDIT LOGGING</text>
      <text x="15" y="157" fill="#cbd5e1" font-size="9">Streams full trace to Datadog</text>
      <text x="15" y="173" fill="#cbd5e1" font-size="9">Includes user ID and metadata</text>
      <text x="15" y="195" fill="#6ee7b7" font-size="8">Private to verified engineers only</text>
      
      <rect y="235" width="240" height="65" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="120" y="260" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">3. FAIL-CLOSED DEFAULT</text>
      <text x="15" y="280" fill="#cbd5e1" font-size="8">Security gates reject on any fault</text>
    </g>
  </g>
  
  <!-- Right: Public Sanitized Output -->
  <g transform="translate(580, 48)">
    <rect width="230" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">PUBLIC HTTP RESPONSE</text>
    
    <g transform="translate(15, 40)">
      <rect width="200" height="145" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="10" font-weight="bold">HTTP 500 INTERNAL ERROR</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="9">{</text>
      <text x="25" y="62" fill="#6ee7b7" font-size="9">"error":</text>
      <text x="35" y="78" fill="#f8fafc" font-size="8">"Internal Error",</text>
      <text x="25" y="96" fill="#6ee7b7" font-size="9">"code": 500,</text>
      <text x="25" y="114" fill="#6ee7b7" font-size="9">"requestId":</text>
      <text x="35" y="130" fill="#f8fafc" font-size="8">"req-98f21e"</text>
      <text x="15" y="142" fill="#cbd5e1" font-size="9">}</text>
      
      <rect y="165" width="200" height="125" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="100" y="190" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">DEFENSE PROVEN</text>
      <text x="15" y="215" fill="#cbd5e1" font-size="8">• Zero stack traces exposed</text>
      <text x="15" y="233" fill="#cbd5e1" font-size="8">• Zero directory paths</text>
      <text x="15" y="251" fill="#cbd5e1" font-size="8">• Zero database hints</text>
      <text x="15" y="269" fill="#10b981" font-size="8">• Reconnaissance thwarted</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">The error boundary intercepts exceptions: full traces are saved privately, while clients receive clean generic errors</text>
</svg>`,
      caption: {
        en: 'The central error boundary intercepts unexpected faults, securely logging raw details while returning clean generic JSON with a requestId.',
        bn: 'সেন্ট্রাল এরর বাউন্ডারি সমস্ত ত্রুটি আটকে দেয়, বিস্তারিত তথ্য নিরাপদে ইন্টারনাল লগে রেখে ক্লায়েন্টকে কেবল একটি রিকোয়েস্ট আইডিসহ সাধারণ রেসপন্স পাঠায়।'
      },
    },
    {
      type: 'heading',
      id: 'secure-error-handler-code',
      text: {
        en: 'Implementing an Error Boundary and Sanitizer in Node.js',
        bn: 'Node.js-এ এরর বাউন্ডারি এবং স্যানিটাইজার বাস্তবায়ন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how secure web frameworks distinguish between safe operational errors and internal software faults, inspect the following middleware. It ensures clients receive sanitized responses while operations teams get full debugging context.',
        bn: 'সুরক্ষিত ওয়েব ফ্রেমওয়ার্ক কীভাবে সাধারণ ব্যবহারিক ভুল এবং সার্ভারের অভ্যন্তরীণ ক্র্যাশের মধ্যে পার্থক্য করে তা দেখতে নিচের কোডটি লক্ষ্য করুন। এটি নিশ্চিত করে যে ক্লায়েন্ট কখনোই সার্ভারের গোপন তথ্য দেখতে পাবে না কিন্তু সাপোর্ট টিম সম্পূর্ণ তথ্য পাবে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'secure-error-boundary.js',
      code: `// Enterprise Error Boundary & Information Leakage Defense Engine

class AppOperationalError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Safe to expose high-level message to client
  }
}

class SecureErrorDispatcher {
  static handle(error, reqContext) {
    const correlationId = 'req-' + Math.random().toString(36).substring(2, 9);

    // 1. Private internal diagnostics logging (Elastic / CloudWatch)
    console.log('[INTERNAL DIAGNOSTIC LOG] ' + JSON.stringify({
      timestamp: new Date().toISOString(),
      requestId: correlationId,
      path: reqContext.path,
      method: reqContext.method,
      errorName: error.name,
      errorMessage: error.message,
      stack: error.stack ? error.stack.split('\\n').slice(0, 3) : null
    }));

    // 2. Safe client response formatting
    if (error.isOperational) {
      // Known business logic violation (e.g., 400 Bad Request, 404 Not Found)
      return {
        status: error.statusCode,
        payload: {
          error: error.message,
          code: error.statusCode,
          requestId: correlationId
        }
      };
    }

    // 3. Unhandled fatal system error (e.g., database connection crash)
    // NEVER expose raw error.message or stack trace to the public!
    return {
      status: 500,
      payload: {
        error: 'An unexpected internal error occurred. Please contact support.',
        code: 500,
        requestId: correlationId
      }
    };
  }
}

console.log('=== Step 1: Handling Operational Input Error (HTTP 400) ===');
const operationalError = new AppOperationalError('Username must be 3-16 characters.', 400);
const res1 = SecureErrorDispatcher.handle(operationalError, { method: 'POST', path: '/register' });
console.log('Client Response:', res1);

console.log('\\n=== Step 2: Handling Fatal Database Crash (HTTP 500) ===');
const systemCrash = new Error('FATAL: connection to PostgreSQL server failed at /var/run/postgresql/.s.PGSQL.5432');
const res2 = SecureErrorDispatcher.handle(systemCrash, { method: 'GET', path: '/api/v1/users' });
console.log('Client Response (Sanitized):', res2);

console.log('\\n=== Step 3: Verifying User Enumeration Defense in Auth ===');
function authenticateUser(username, password) {
  // Always return identical error message for both non-existent users and wrong passwords
  const genericAuthError = new AppOperationalError('Invalid credentials.', 401);
  return SecureErrorDispatcher.handle(genericAuthError, { method: 'POST', path: '/login' });
}
console.log('Auth Failure Response:', authenticateUser('alice', 'wrong-pass').payload);`,
      caption: {
        en: 'The dispatcher logs raw stack traces privately while returning sanitized error payloads with correlation IDs.',
        bn: 'ডিসপ্যাচার সার্ভারের ভেতর সম্পূর্ণ স্ট্যাক ট্রেস সংরক্ষণ করে এবং ক্লায়েন্টকে রিকোয়েস্ট আইডিসহ নিরীহ এরর মেসেজ প্রদান করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Timing Attacks and User Enumeration Mitigations',
        bn: 'টাইমিং অ্যাটাক এবং ইউজার এনামারেশন প্রতিরোধ'
      },
      text: {
        en: 'When implementing login or password recovery flows, subtle differences in processing time can betray whether a username exists. If a server returns 401 in 2 milliseconds when an account is missing, but takes 150 milliseconds computing bcrypt when the user exists, attackers measure network latency to identify valid usernames! Mitigate this vulnerability by performing dummy cryptographic operations when accounts are not found, maintaining consistent response durations.',
        bn: 'লগইন বা পাসওয়ার্ড পুনরুদ্ধারের সময় প্রসেসিং সময়ের সামান্য পার্থক্যও কোনো ইউজারনেম সার্ভারে আছে কি না তা ফাঁস করে দিতে পারে। ইউজার না থাকলে সার্ভার যদি ৪০১ স্ট্যাটাস দিয়ে ২ মিলিঙ্কেন্ডে এরর দেয় এবং ইউজার থাকলে পাসওয়ার্ড হ্যাশ করতে ১৫০ মিলিঙ্কেন্ড সময় নেয়, তবে আক্রমণকারীরা সময়ের পার্থক্য মেপে সঠিক ব্যবহারকারী শনাক্ত করে ফেলে! এই ঝুঁকি এড়াতে ইউজার না থাকলেও একটি ডামি হ্যাশিং চালিয়ে রেসপন্সের সময় সর্বদা সমান রাখা উচিত।'
      },
    },
  ],
  exercises: [
    {
      id: 'sec-err-ex-1',
      kind: 'predict',
      topic: 'http-status-500',
      question: {
        en: 'If a client encounters an unexpected server crash that triggers a generic internal server error, what is that standard HTTP status code? (500). Type the number.',
        bn: 'কোনো অপ্রত্যাশিত সার্ভার ক্র্যাশের কারণে যদি একটি সাধারণ ইন্টারনাল সার্ভার এরর তৈরি হয়, তবে সেই স্ট্যান্ডার্ড HTTP স্ট্যাটাস কোড কত? ( ৫০০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '500',
      hint: {
        en: 'The standard internal server error status is 500.',
        bn: 'স্ট্যান্ডার্ড ইন্টারনাল সার্ভার এরর কোড হলো ৫০০।'
      },
      explanation: {
        en: 'HTTP status 500 indicates an unexpected server condition where details are masked from the client.',
        bn: 'HTTP স্ট্যাটাস ৫০০ নির্দেশ করে যে সার্ভারে অপ্রত্যাশিত ত্রুটি ঘটেছে এবং এর বিস্তারিত ক্লায়েন্টের কাছে গোপন রাখা হয়েছে।'
      },
    },
    {
      id: 'sec-err-ex-2',
      kind: 'mcq',
      topic: 'correlation-request-id',
      question: {
        en: 'Why should public error responses return a correlation requestId rather than a full stack trace?',
        bn: 'পাবলিক এরর রেসপন্সে সম্পূর্ণ স্ট্যাক ট্রেসের বদলে কোরিলেশন রিকোয়েস্ট আইডি পাঠানো কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'A correlation ID allows engineers to look up detailed diagnostics in private internal logs without exposing filesystem directories, database schemas, or dependency versions to potential attackers',
          bn: 'একটি রিকোয়েস্ট আইডি ইঞ্জিনিয়ারদের প্রাইভেট লগে বিস্তারিত তথ্য দেখার সুযোগ দেয় এবং আক্রমণকারীদের কাছে সার্ভারের ডিরেক্টরি পাথ বা ডাটাবেজ স্কিমা প্রকাশ পাওয়া থেকে রক্ষা করে',
        },
        {
          en: 'Because correlation IDs turn off the server electricity automatically',
          bn: 'কারণ রিকোয়েস্ট আইডি সার্ভারের বৈদ্যুতিক লাইন নিজে থেকেই বিচ্ছিন্ন করে দেয়',
        },
        {
          en: 'Because stack traces double the price of monthly domain registration',
          bn: 'কারণ স্ট্যাক ট্রেস পাঠালে ডোমেইন রেজিস্ট্রেশনের মাসিক খরচ দ্বিগুণ হয়ে যায়',
        },
        {
          en: 'Because correlation IDs make user computer screens display faster',
          bn: 'কারণ রিকোয়েস্ট আইডি ব্যবহারকারীর কম্পিউটারের পর্দা দ্রুত চলতে সাহায্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Correlation IDs bridge support requests to internal logs without leaking system structure.',
        bn: 'রিকোয়েস্ট আইডি সিস্টেমের তথ্য ফাঁস না করে সাপোর্টের জন্য লগে খোঁজার সুবিধা দেয়।',
      },
      explanation: {
        en: 'Correlation IDs protect internal architecture from discovery while maintaining complete operational observability.',
        bn: 'রিকোয়েস্ট আইডি সিস্টেমের অভ্যন্তরীণ গঠন গোপন রাখে এবং একই সাথে ইঞ্জিনিয়ারদের তদন্তে পূর্ণ সহায়তা করে।'
      },
    },
    {
      id: 'sec-err-ex-3',
      kind: 'mcq',
      topic: 'uniform-auth-errors',
      question: {
        en: 'Why must login and authentication endpoints return identical generic error messages (such as "Invalid credentials") for all failures?',
        bn: 'লগইন এবং অথেনটিকেশন সিস্টেমে যেকোনো ব্যর্থতার জন্য কেন সর্বদা একই সাধারণ এরর মেসেজ ( যেমন "Invalid credentials" ) প্রদান করা উচিত?'
      },
      options: [
        {
          en: 'Different messages (like "User not found" vs "Wrong password") allow attackers to enumerate and collect valid registered usernames across your database',
          bn: 'আলাদা আলাদা মেসেজ ( যেমন "ইউজার নেই" বনাম "ভুল পাসওয়ার্ড" ) আক্রমণকারীদের আপনার ডাটাবেজে কোন কোন ইউজার নিবন্ধিত আছে তা নিশ্চিত হতে সাহায্য করে',
        },
        {
          en: 'Because web browsers refuse to display login buttons with multiple error texts',
          bn: 'কারণ একাধিক এরর টেক্সট থাকলে ওয়েব ব্রাউজার লগইন বাটন দেখাতে অস্বীকার করে',
        },
        {
          en: 'Because computers can only translate a single sentence into Bengali',
          bn: 'কারণ কম্পিউটার কেবল একটিমাত্র বাক্যই বাংলায় অনুবাদ করতে পারে',
        },
        {
          en: 'Because identical messages reduce the weight of physical server racks',
          bn: 'কারণ একই মেসেজ সার্ভার র্যাকের শারীরিক ওজন কিছুটা কমিয়ে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Identical messages stop attackers from validating which usernames exist.',
        bn: 'একই রকম মেসেজ দিলে হ্যাকাররা বুঝতে পারে না কোন ইউজারনেম আসল আর কোনটি নকল।',
      },
      explanation: {
        en: 'User enumeration lets attackers build target lists for credential stuffing. Uniform error messages prevent this discovery vector.',
        bn: 'আলাদা এরর মেসেজ হ্যাকারদের টার্গেট লিস্ট বানাতে দেয়। অভিন্ন এরর মেসেজ এই তথ্য ফাঁসের পথ বন্ধ করে।'
      },
    },
    {
      id: 'sec-err-ex-4',
      kind: 'predict',
      topic: 'secure-error-pillars',
      question: {
        en: 'How many primary pillars (Generic Errors, Correlation IDs, Safe Auth, Fail-Closed) form secure error management? (4). Type the number.',
        bn: 'নিরাপদ এরর ব্যবস্থাপনার প্রধান ভিত্তি ( সাধারণ এরর, কোরিলেশন আইডি, নিরাপদ লগইন এরর, ফেইল-ক্লোজড নীতি ) সর্বমোট কয়টি? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Count the 4 architectural pillars.',
        bn: '৪ টি মূল স্তম্ভ গণনা করুন।'
      },
      explanation: {
        en: 'The 4 pillars ensure complete error containment without sacrificing internal observability.',
        bn: 'এই ৪ টি স্তম্ভ অভ্যন্তরীণ পর্যবেক্ষণ অক্ষুণ্ণ রেখে এররের তথ্য ফাঁস পুরোপুরি নিয়ন্ত্রণ করে।'
      },
    },
  ],
  quiz: {
    id: 'secure-errors-quiz',
    title: {
      en: 'Secure Error Handling and Diagnostics Quiz',
      bn: 'নিরাপদ এরর হ্যান্ডলিং এবং ডায়াগনস্টিক কুইজ'
    },
    questions: [
      {
        id: 'sec-err-qz-1',
        kind: 'mcq',
        topic: 'stack-trace-reconnaissance',
        question: {
          en: 'How do attackers exploit raw stack traces returned in HTTP 500 error responses during system reconnaissance?',
          bn: 'সিস্টেমে অনুসন্ধানের সময় আক্রমণকারীরা HTTP ৫০০ রেসপন্সে আসা র স্ট্যাক ট্রেসকে কীভাবে কাজে লাগায়?'
        },
        options: [
          {
            en: 'They inspect stack traces to identify operating system directory layouts, exact versions of installed third-party libraries, and database column names to locate known CVE vulnerabilities',
            bn: 'তারা স্ট্যাক ট্রেস পর্যালোচনা করে সার্ভারের অপারেটিং সিস্টেম ডিরেক্টরি, লাইব্রেরির সুনির্দিষ্ট সংস্করণ এবং ডাটাবেজ কলামের নাম বের করে পরিচিত CVE দুর্বলতাগুলো খোঁজে',
          },
          {
            en: 'They use stack traces to increase the physical screen resolution of their laptops',
            bn: 'তারা তাদের ল্যাপটপের পর্দার রেজোলিউশন শারীরিকভাবে বাড়াতে স্ট্যাক ট্রেস ব্যবহার করে',
          },
          {
            en: 'They use stack traces to erase the physical copper inside internet cables',
            bn: 'তারা ইন্টারনেট কেবলের ভেতরের তামার তার গলিয়ে ফেলতে স্ট্যাক ট্রেস পাঠায়',
          },
          {
            en: 'They change the background color of the web browser to green',
            bn: 'তারা ওয়েব ব্রাউজারের ব্যাকগ্রাউন্ড রঙ সবুজে পরিবর্তন করে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Stack traces reveal internal directory structures and library versions.',
          bn: 'স্ট্যাক ট্রেস সার্ভারের ভেতরের ফোল্ডার এবং লাইব্রেরির সুনির্দিষ্ট সংস্করণ ফাঁস করে দেয়।',
        },
        explanation: {
          en: 'Stack traces reveal specific file paths and library versions, enabling targeted exploits against known security flaws.',
          bn: 'স্ট্যাক ট্রেস ফাইল পাথ এবং লাইব্রেরি সংস্করণ ফাঁস করে, যার মাধ্যমে হ্যাকাররা সুনির্দিষ্ট আক্রমণ চালাতে পারে।'
        },
      },
      {
        id: 'sec-err-qz-2',
        kind: 'mcq',
        topic: 'timing-attack-mitigation',
        question: {
          en: 'How does performing a dummy cryptographic hash calculation mitigate timing attacks on authentication endpoints?',
          bn: 'একটি ডামি ক্রিপ্টোগ্রাফিক হ্যাশ হিসাব সম্পন্ন করলে কীভাবে অথেনটিকেশন সিস্টেমে টাইমিং আক্রমণ প্রতিরোধ করা যায়?'
        },
        options: [
          {
            en: 'It equalizes the server processing duration for both existing and non-existent users, preventing attackers from using millisecond response timing differences to enumerate valid accounts',
            bn: 'এটি বৈধ এবং অস্তিত্বহীন উভয় ইউজারের জন্যই সার্ভারের সময় সমান করে দেয়, ফলে সময়ের সামান্য পার্থক্য পরিমাপ করে আসল অ্যাকাউন্ট চেনার কোনো উপায় থাকে না',
          },
          {
            en: 'It encrypts the physical network router with a secret padlock',
            bn: 'এটি একটি গোপন তালা ব্যবহার করে নেটওয়ার্কের রাউটারকে শারীরিকভাবে তালাবদ্ধ করে',
          },
          {
            en: 'It causes the server hard disk to spin in the opposite direction',
            bn: 'এটি সার্ভারের হার্ড ডিস্ককে উল্টো দিকে ঘুরতে বাধ্য করে',
          },
          {
            en: 'It deletes all user passwords immediately upon registration',
            bn: 'এটি রেজিস্ট্রেশনের সাথে সাথে ব্যবহারকারীর সমস্ত পাসওয়ার্ড মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Dummy hashes ensure constant execution time across valid and invalid users.',
          bn: 'ডামি হ্যাশিং বৈধ ও অবৈধ উভয় ইউজারের জন্য সমান সময় নিশ্চিত করে।',
        },
        explanation: {
          en: 'Hashing passwords takes significant CPU time. Running a dummy hash when an account does not exist equalizes latency, defeating timing analysis.',
          bn: 'পাসওয়ার্ড হ্যাশ করতে সময় লাগে। একাউন্ট না থাকলেও ডামি হ্যাশ চালালে দুই ক্ষেত্রের সময় সমান হয় এবং টাইমিং অ্যাটাক ব্যর্থ হয়।'
        },
      },
      {
        id: 'sec-err-qz-3',
        kind: 'mcq',
        topic: 'fail-closed-philosophy',
        question: {
          en: 'Why must security-critical modules adhere strictly to a "fail-closed" architecture rather than "fail-open"?',
          bn: 'নিরাপত্তার ক্ষেত্রে গুরুত্বপূর্ণ মডিউলগুলোকে কেন "ফেইল-ওপেন" এর বদলে কঠোরভাবে "ফেইল-ক্লোজড" নীতি মেনে চলতে হয়?'
        },
        options: [
          {
            en: 'In fail-closed systems, any unhandled error or database timeout defaults to denying access, ensuring an unexpected exception never accidentally grants unauthorized administrative privileges',
            bn: 'ফেইল-ক্লোজড সিস্টেমে যেকোনো অপ্রত্যাশিত এরর বা ডাটাবেজ টাইমআউট ঘটলে ডিফল্টভাবে অ্যাক্সেস বাতিল হয়, ফলে কোনো ত্রুটির সুযোগে কেউ অবৈধ সুবিধা পায় না',
          },
          {
            en: 'Because fail-closed systems turn off computer monitor backlights',
            bn: 'কারণ ফেইল-ক্লোজড সিস্টেম কম্পিউটার মনিটরের ব্যাকলাইট বন্ধ করে দেয়',
          },
          {
            en: 'Because fail-open systems make internet downloads twenty times slower',
            bn: 'কারণ ফেইল-ওপেন সিস্টেম ইন্টারনেটের ডাউনলোডের গতি ২০ গুণ কমিয়ে দেয়',
          },
          {
            en: 'Because fail-closed systems delete all source code files from Git',
            bn: 'কারণ ফেইল-ক্লোজড সিস্টেম গিট থেকে সমস্ত সোর্স কোড ফাইল মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Fail-closed denies access on any unexpected fault.',
          bn: 'ফেইল-ক্লোজড নীতি যেকোনো ত্রুটিতে অ্যাক্সেস পুরোপুরি বন্ধ রাখে।',
        },
        explanation: {
          en: 'If an authorization policy crashes due to a bug, fail-open grants access, whereas fail-closed safely rejects the request.',
          bn: 'অথরাইজেশন কোড ক্র্যাশ করলে ফেইল-ওপেন সিস্টেম অনুমতি দিয়ে দেয়, কিন্তু ফেইল-ক্লোজড সিস্টেম নিরাপদে অ্যাক্সেস বন্ধ করে।'
        },
      },
      {
        id: 'sec-err-qz-4',
        kind: 'mcq',
        topic: 'operational-vs-system-errors',
        question: {
          en: 'What is the primary architectural difference between an operational error and a programmer or system error?',
          bn: 'একটি অপারেশানাল এরর এবং প্রোগ্রামার বা সিস্টেম এররের মধ্যে প্রধান আর্কিটেকচারাল পার্থক্য কী?'
        },
        options: [
          {
            en: 'Operational errors represent anticipated runtime events (such as invalid user input or missing files) that require informative client feedback, whereas system errors are unexpected code bugs or crashes that must be masked from clients',
            bn: 'অপারেশানাল এরর হলো প্রত্যাশিত রানটাইম পরিস্থিতি ( যেমন ভুল ইনপুট বা ফাইল না পাওয়া ) যার জন্য ক্লায়েন্টকে বার্তা দেওয়া নিরাপদ, আর সিস্টেম এরর হলো অপ্রত্যাশিত বাগ বা ক্র্যাশ যা ক্লায়েন্টের কাছ থেকে গোপন রাখতে হয়',
          },
          {
            en: 'Operational errors only happen on desktop computers, while system errors only happen on mobile phones',
            bn: 'অপারেশানাল এরর কেবল ডেস্কটপ কম্পিউটারে ঘটে এবং সিস্টেম এরর কেবল মোবাইল ফোনে ঘটে',
          },
          {
            en: 'System errors can be fixed by blowing dust out of computer ports',
            bn: 'কম্পিউটার পোর্টের ধুলাবালি ফুঁ দিয়ে পরিষ্কার করলেই সিস্টেম এরর ঠিক হয়ে যায়',
          },
          {
            en: 'Operational errors turn website text upside down',
            bn: 'অপারেশানাল এরর ওয়েবসাইটের সমস্ত টেক্সটকে উল্টো দিকে ঘুরিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Operational errors are expected client conditions; system errors are unhandled faults.',
          bn: 'অপারেশানাল এরর হলো প্রত্যাশিত ক্লায়েন্ট ত্রুটি; সিস্টেম এরর হলো অপ্রত্যাশিত অভ্যন্তরীণ ক্র্যাশ।',
        },
        explanation: {
          en: 'Operational errors require structured user messages (400, 404). System errors are bugs or infrastructure failures that must trigger alarms and generic 500s.',
          bn: 'অপারেশানাল এররে উপযুক্ত বার্তা দেওয়া যায় ( ৪০০, ৪০৪ )। কিন্তু সিস্টেম এরর হলো অভ্যন্তরীণ বাগ যা লুকিয়ে রেখে ৫০০ এরর দিতে হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'safe-dependencies',
    title: {
      en: 'Safe Dependencies: Supply Chain Security & Package Auditing',
      bn: 'নিরাপদ ডিপেন্ডেন্সি: সফটওয়্যার সাপ্লাই চেইন নিরাপত্তা এবং প্যাকেজ অডিটিং'
    },
  },
};
