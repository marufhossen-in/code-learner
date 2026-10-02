import type { Lesson } from '../../../lib/types';

export const MeetAuthzLesson: Lesson = {
  slug: 'meet-authz',
  tech: 'authorization',
  title: {
    en: 'Introduction to Authorization: What is Access Control & Permissions?',
    bn: 'অথরাইজেশনের পরিচিতি: এক্সেস কন্ট্রোল ও পারমিশন কী?'
  },
  summary: {
    en: 'Begin your journey into software security architecture by mastering the fundamental distinction between Authentication (who you are) and Authorization (what you are permitted to do). Understand why passing login does not automatically grant access to every room. Learn the Default-Deny principle, explore standard HTTP status codes (401 Unauthorized vs 403 Forbidden), and discover why hiding buttons on the client interface is not real security.',
    bn: 'অথেনটিকেশন (আপনি কে) এবং অথরাইজেশন (আপনার কী করার অনুমতি আছে) এর মধ্যকার মৌলিক পার্থক্য আয়ত্ত করে সফটওয়্যার নিরাপত্তা আর্কিটেকচারের যাত্রা শুরু করুন। লগইন সফল হলেও কেন প্রতিটি কক্ষের এক্সেস মেলে না তা বুঝুন। ডিফল্ট-ডিনাই নীতি জানুন, আদর্শ HTTP স্ট্যাটাস কোড (৪০১ আনঅথরাইজড বনাম ৪০৩ ফরবিডেন) শিখুন এবং ক্লায়েন্ট ইন্টারফেসে বোতাম লুকিয়ে রাখা কেন আসল নিরাপত্তা নয় তা জানুন।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'two-doors-security',
      text: {
        en: 'The Two-Door Security Model: Authentication vs Authorization',
        bn: 'দ্বি-দ্বার নিরাপত্তা মডেল: অথেনটিকেশন বনাম অথরাইজেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When designing secure software, engineers must visualize access control as two consecutive security doors. Door 1 is Authentication: it validates your identity at the building lobby using your password, passkey, or token. Door 2 is Authorization: it stands guard in front of specific rooms (such as billing settings, user databases, or admin consoles) and checks whether your verified identity actually holds permission to enter.',
        bn: 'নিরাপদ সফটওয়্যার ডিজাইন করার সময় ইঞ্জিনিয়ারদের এক্সেস কন্ট্রোলকে পর পর দুটি নিরাপত্তা দরজার মতো কল্পনা করতে হয়। ১ নম্বর দরজা হলো অথেনটিকেশন: এটি ভবনের প্রবেশপথে পাসওয়ার্ড, পাসকি বা টোকেন যাচাই করে আপনার পরিচয় নিশ্চিত করে। আর ২ নম্বর দরজা হলো অথরাইজেশন: এটি নির্দিষ্ট কক্ষের সামনে ( যেমন বিলিং সেটিংস, ইউজার ডাটাবেজ বা অ্যাডমিন কনসোল ) পাহারা দেয় এবং যাচাই করে যে আপনার সেই কক্ষে প্রবেশের বৈধ অনুমতি আছে কি না।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'This separation explains why HTTP defines 2 distinct error codes: HTTP 401 Unauthorized means "I do not know who you are, please log in". In contrast, HTTP 403 Forbidden means "I know exactly who you are, but you are not permitted to touch this resource".',
        bn: 'এই পার্থক্যের কারণেই HTTP প্রটোকলে ২টি আলাদা এরর কোড নির্ধারিত রয়েছে: HTTP ৪০১ আনঅথরাইজড মানে হলো "আমি জানি না আপনি কে, অনুগ্রহ করে লগইন করুন"। অন্যদিকে HTTP ৪০৩ ফরবিডেন মানে হলো "আমি আপনার পরিচয় জানি, কিন্তু এই তথ্য বা কাজটি করার কোনো অধিকার আপনার নেই"।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Identity Extraction & Proof Verification',
            bn: '১. পরিচয় সংগ্রহ এবং প্রমাণ যাচাই'
          },
          text: {
            en: 'The API gateway or web server extracts the authenticated identity from the session cookie or JWT bearer token. If unauthenticated, it terminates immediately with HTTP 401.',
            bn: 'এপিআই গেটওয়ে বা ওয়েব সার্ভার সেশন কুকি বা JWT বেয়ারার টোকেন থেকে প্রমাণীকৃত পরিচয় উদ্ধার করে। কোনো পরিচয় না পেলে সার্ভার সাথে সাথে HTTP ৪০১ ফেরত দিয়ে সংযোগ শেষ করে দেয়।'
          },
        },
        {
          title: {
            en: '2. Action & Resource Identification',
            bn: '২. কাজ এবং রিসোর্স সনাক্তকরণ'
          },
          text: {
            en: 'The application determines the specific action requested (e.g. read, write, delete) and the targeted resource object (e.g. document 42).',
            bn: 'অ্যাপ্লিকেশনটি ব্যবহারকারীর দাবিকৃত নির্দিষ্ট কাজ ( যেমন পড়া, লেখা, মোছা ) এবং উদ্দিষ্ট রিসোর্স অবজেক্টটি ( যেমন ৪২ নম্বর ডকুমেন্ট ) সনাক্ত করে।'
          },
        },
        {
          title: {
            en: '3. Policy Evaluation (PDP Check)',
            bn: '৩. পলিসি মূল্যায়ন (PDP যাচাই)'
          },
          text: {
            en: 'The Policy Decision Point checks the permissions matrix or policy rules against the user roles and attributes under the Default-Deny rule.',
            bn: 'পলিসি ডিসিশন পয়েন্ট ডিফল্ট-ডিনাই নিয়মের অধীনে ব্যবহারকারীর ভূমিকা বা বৈশিষ্ট্যের বিপরীতে পারমিশন ম্যাট্রিক্স পরীক্ষা করে।'
          },
        },
        {
          title: {
            en: '4. Enforcement & Access Grant (PEP)',
            bn: '৪. প্রয়োগ এবং এক্সেস অনুমোদন (PEP)'
          },
          text: {
            en: 'If an explicit allow rule exists, the request proceeds with HTTP 200 OK. Otherwise, access is immediately blocked with HTTP 403 Forbidden.',
            bn: 'যদি সুনির্দিষ্ট অনুমোদনের নিয়ম থাকে, তবে রিকোয়েস্ট এগিয়ে যায় এবং HTTP ২০০ ওকে রেসপন্স দেয়। অন্যথায় সাথে সাথে HTTP ৪০৩ ফরবিডেন দিয়ে এক্সেস আটকে দেওয়া হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Two-Door Access Gate: Authentication (401) vs Authorization (403)',
        bn: 'দ্বি-দ্বার এক্সেস গেট: অথেনটিকেশন (৪০১) বনাম অথরাইজেশন (৪০৩)'
      },
      svg: `<svg viewBox="0 0 840 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Access control diagram showing authentication 401 door and authorization 403 door">
  <rect width="840" height="420" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">AUTHENTICATION VS AUTHORIZATION: THE TWO-DOOR MODEL</text>
  
  <!-- Left Side: Door 1 Authentication -->
  <g transform="translate(40, 55)">
    <rect width="360" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="360" height="32" rx="8" fill="#0284c7"/>
    <text x="180" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DOOR 1: AUTHENTICATION (WHO ARE YOU?)</text>
    
    <g transform="translate(20, 48)">
      <rect width="320" height="110" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="15" y="22" fill="#38bdf8" font-size="10" font-weight="bold">CREDENTIAL VERIFICATION</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">• Checks Passwords, Passkeys, TOTP, or JWTs</text>
      <text x="15" y="62" fill="#cbd5e1" font-size="8.5">• Proves that caller is user "Charlie"</text>
      <text x="15" y="80" fill="#cbd5e1" font-size="8.5">• Determines authenticated session state</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8.5">✓ Login Successful → Proceed to Door 2</text>
      
      <rect y="125" width="320" height="135" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="15" y="22" fill="#fca5a5" font-size="10" font-weight="bold">IF AUTHENTICATION FAILS:</text>
      <text x="15" y="46" fill="#f87171" font-size="11" font-weight="bold">HTTP 401 UNAUTHORIZED</text>
      <text x="15" y="70" fill="#cbd5e1" font-size="8.5">• "Anonymous caller / Missing token"</text>
      <text x="15" y="88" fill="#cbd5e1" font-size="8.5">• Server has no idea who you are</text>
      <text x="15" y="106" fill="#cbd5e1" font-size="8.5">• Client must redirect user to /login</text>
      <text x="15" y="124" fill="#fca5a5" font-size="8.5">Access denied at the front lobby!</text>
    </g>
  </g>
  
  <!-- Right Side: Door 2 Authorization -->
  <g transform="translate(440, 55)">
    <rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="360" height="32" rx="8" fill="#059669"/>
    <text x="180" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DOOR 2: AUTHORIZATION (WHAT CAN YOU DO?)</text>
    
    <g transform="translate(20, 48)">
      <rect width="320" height="110" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="15" y="22" fill="#10b981" font-size="10" font-weight="bold">PERMISSION VERIFICATION</text>
      <text x="15" y="44" fill="#cbd5e1" font-size="8.5">• Checks User Role: "viewer" vs "admin"</text>
      <text x="15" y="62" fill="#cbd5e1" font-size="8.5">• Action: POST /api/v1/documents/publish</text>
      <text x="15" y="80" fill="#cbd5e1" font-size="8.5">• Does role have "documents:publish"?</text>
      <text x="15" y="98" fill="#6ee7b7" font-size="8.5">✓ If YES: HTTP 200 OK — Action executed!</text>
      
      <rect y="125" width="320" height="135" rx="6" fill="#451a03" stroke="#f59e0b"/>
      <text x="15" y="22" fill="#fcd34d" font-size="10" font-weight="bold">IF PERMISSION IS MISSING:</text>
      <text x="15" y="46" fill="#f59e0b" font-size="11" font-weight="bold">HTTP 403 FORBIDDEN</text>
      <text x="15" y="70" fill="#cbd5e1" font-size="8.5">• "Known user, but lacks required role"</text>
      <text x="15" y="88" fill="#cbd5e1" font-size="8.5">• Server knows you are Charlie (viewer)</text>
      <text x="15" y="106" fill="#cbd5e1" font-size="8.5">• Logging in again will NOT help!</text>
      <text x="15" y="124" fill="#fcd34d" font-size="8.5">Blocked by policy room guard!</text>
    </g>
  </g>
  
  <text x="420" y="405" fill="#94a3b8" font-size="10" text-anchor="middle">Authentication unlocks the building (401); Authorization unlocks individual rooms (403)</text>
</svg>`,
      caption: {
        en: 'The two-door model distinguishes identity verification (HTTP 401) from permission enforcement (HTTP 403).',
        bn: 'দ্বি-দ্বার মডেলটি পরিচয় যাচাইকরণ (HTTP ৪০১) এবং পারমিশন প্রয়োগের (HTTP ৪০৩) মধ্যে সুনির্দিষ্ট পার্থক্য তৈরি করে।'
      },
    },
    {
      type: 'heading',
      id: 'authorization-guard-code',
      text: {
        en: 'Building an Authorization Guard Middleware in Node.js',
        bn: 'Node.js-এ অথরাইজেশন গার্ড মিডলওয়্যার তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how production servers decouple authentication from authorization, inspect this runnable Node.js guard. Notice how it cleanly separates missing credentials (401) from insufficient privileges (403), enforcing the default-deny principle.',
        bn: 'প্রোডাকশন সার্ভার কীভাবে অথেনটিকেশন ও অথরাইজেশনকে আলাদা করে পরিচালনা করে তা দেখতে নিচের Node.js কোডটি লক্ষ্য করুন। লক্ষ্য করুন কীভাবে এটি পরিচয়হীন কল (৪০১) এবং অপর্যাপ্ত অধিকারকে (৪০৩) সুনির্দিষ্টভাবে আলাদা করে ডিফল্ট-ডিনাই নীতি প্রয়োগ করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'authorization-guard.js',
      code: `// Enterprise Authorization Guard: Authentication vs Authorization
const ROLE_PERMISSIONS = {
  admin: ['documents:read', 'documents:create', 'documents:publish', 'documents:delete'],
  editor: ['documents:read', 'documents:create', 'documents:publish'],
  viewer: ['documents:read']
};

class AuthorizationGuard {
  // Policy Enforcement Point (PEP)
  static evaluate(user, requiredPermission) {
    // DOOR 1: Authentication Gate (Who are you?)
    if (!user || !user.id) {
      return {
        status: 401,
        allowed: false,
        error: 'HTTP 401 Unauthorized: Valid login credentials required.'
      };
    }

    // DOOR 2: Authorization Gate (What are you allowed to do?)
    const userPermissions = ROLE_PERMISSIONS[user.role] || [];
    const hasPermission = userPermissions.includes(requiredPermission);

    // Default Deny: Unless explicitly listed, refuse access!
    if (!hasPermission) {
      return {
        status: 403,
        allowed: false,
        error: 'HTTP 403 Forbidden: User ' + user.name + ' (' + user.role + ') lacks ' + requiredPermission
      };
    }

    return {
      status: 200,
      allowed: true,
      message: 'HTTP 200 OK: Access granted for ' + user.name + ' to perform ' + requiredPermission
    };
  }
}

// Simulated active users
const users = [
  { id: 'usr_101', name: 'Alice', role: 'admin' },
  { id: 'usr_102', name: 'Bob', role: 'editor' },
  { id: 'usr_103', name: 'Charlie', role: 'viewer' }
];

console.log('=== Test 1: Action "documents:publish" ===');
users.forEach(user => {
  const verdict = AuthorizationGuard.evaluate(user, 'documents:publish');
  console.log(user.name + ' (' + user.role + '): ' + verdict.status + ' -> ' + (verdict.allowed ? 'ALLOW' : 'DENY'));
});

console.log('\\n=== Test 2: Action "documents:delete" ===');
users.forEach(user => {
  const verdict = AuthorizationGuard.evaluate(user, 'documents:delete');
  console.log(user.name + ' (' + user.role + '): ' + verdict.status + ' -> ' + (verdict.allowed ? 'ALLOW' : 'DENY'));
});

console.log('\\n=== Test 3: Unauthenticated Stranger Knocking ===');
const unauthVerdict = AuthorizationGuard.evaluate(null, 'documents:read');
console.log('Anonymous visitor:', unauthVerdict.status, '->', unauthVerdict.error);`,
      caption: {
        en: 'The guard evaluates authentication first (Door 1) then checks granular permissions under default-deny (Door 2).',
        bn: 'গার্ডটি প্রথমে পরিচয় যাচাই করে (দরজা ১) এবং তারপর ডিফল্ট-ডিনাই নিয়মে পারমিশন পরীক্ষা করে (দরজা ২)।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The Painted Door Fallacy: Client-Side UI Hiding is Not Security',
        bn: 'আঁকা দরজার ভুল: ক্লায়েন্ট সাইডে বোতাম লুকিয়ে রাখা কোনো নিরাপত্তা নয়'
      },
      text: {
        en: 'A dangerous beginner mistake is assuming that hiding a "Delete Account" button or an administrative tab in React or HTML provides security. Anyone can open browser DevTools, inspect network traffic, or trigger the underlying API endpoint directly using curl or Postman! Hiding UI elements improves user experience, but authorization MUST ALWAYS be enforced cryptographically and rigorously on the backend API server.',
        bn: 'নতুন ডেভেলপারদের একটি মারাত্মক ভুল হলো মনে করা যে React বা HTML-এ "Delete Account" বোতামটি লুকিয়ে রাখলেই নিরাপত্তা নিশ্চিত হয়ে গেল। যেকোনো ব্যক্তি ব্রাউজারের DevTools খুলে, নেটওয়ার্ক রিকোয়েস্ট দেখে বা curl ও Postman ব্যবহার করে সরাসরি এপিআইতে রিকোয়েস্ট পাঠাতে পারে! ইন্টারফেসে বোতাম লুকানো কেবল ইউজার এক্সপেরিয়েন্স উন্নত করে, কিন্তু আসল অথরাইজেশন সর্বদা ব্যাকএন্ড সার্ভারেই কঠোরভাবে প্রয়োগ করতে হবে।'
      },
    },
  ],
  exercises: [
    {
      id: 'meet-authz-ex-1',
      kind: 'predict',
      topic: 'http-status-codes-forbidden',
      question: {
        en: 'Which standard HTTP status code signifies that a user is successfully logged in, but lacks permission to perform the requested action? (403). Type the number.',
        bn: 'কোন আদর্শ HTTP স্ট্যাটাস কোডটি বোঝায় যে ব্যবহারকারী সফলভাবে লগইন করেছেন, কিন্তু দাবিকৃত কাজটি করার অনুমতি তার নেই? ( ৪০৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '403',
      hint: {
        en: '403 Forbidden indicates insufficient permissions.',
        bn: '৪০৩ ফরবিডেন নির্দেশ করে অপর্যাপ্ত অনুমতি।'
      },
      explanation: {
        en: 'HTTP 403 Forbidden means the server recognizes the caller identity, but refuses to authorize the requested operation.',
        bn: 'HTTP ৪০৩ ফরবিডেন বোঝায় যে সার্ভার ব্যবহারকারীকে চেনে, কিন্তু কাজটি করার অধিকার দেয় না।'
      },
    },
    {
      id: 'meet-authz-ex-2',
      kind: 'mcq',
      topic: 'default-deny-architecture',
      question: {
        en: 'What is the Default-Deny principle in authorization architecture, and why is it essential for enterprise security?',
        bn: 'অথরাইজেশন আর্কিটেকচারে ডিফল্ট-ডিনাই (Default-Deny) নীতি কী এবং এন্টারপ্রাইজ নিরাপত্তার জন্য এটি কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'All actions and resource requests are strictly blocked by default, unless an explicit allow rule specifically grants permission to that user or role',
          bn: 'পূর্বনির্ধারিতভাবে সব কাজ এবং রিসোর্স রিকোয়েস্ট সম্পূর্ণ বন্ধ থাকবে, যদি না কোনো সুস্পষ্ট অনুমোদনের নিয়ম নির্দিষ্টভাবে সেই ব্যবহারকারী বা রোলকে অনুমতি প্রদান করে',
        },
        {
          en: 'It means the server denies internet connections whenever it rains outside',
          bn: 'এর মানে হলো বাইরে বৃষ্টি হলে সার্ভার সমস্ত ইন্টারনেট সংযোগ বন্ধ করে দেবে',
        },
        {
          en: 'It forces computers to delete all files every Sunday at midnight',
          bn: 'এটি প্রতি রবিবার মধ্যরাতে কম্পিউটারের সমস্ত ফাইল নিজে থেকেই মুছে ফেলে',
        },
        {
          en: 'It requires web developers to change their keyboard language every morning',
          bn: 'এটি ওয়েব ডেভেলপারদের প্রতিদিন সকালে কিবোর্ডের ভাষা পরিবর্তন করতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Default deny blocks everything unless explicitly permitted.',
        bn: 'ডিফল্ট ডিনাই সুস্পষ্ট অনুমতি ছাড়া সবকিছু স্বয়ংক্রিয়ভাবে আটকে দেয়।'
      },
      explanation: {
        en: 'Default-deny prevents accidental data leaks when new endpoints or resources are added without explicit policy configurations.',
        bn: 'ডিফল্ট-ডিনাই নিশ্চিত করে যে নতুন কোনো এপিআই যুক্ত হলে নিয়ম না থাকলেও ভুলবশত কোনো ডেটা যেন উন্মুক্ত না হয়।'
      },
    },
    {
      id: 'meet-authz-ex-3',
      kind: 'mcq',
      topic: 'client-side-vs-backend-enforcement',
      question: {
        en: 'Why is hiding an administrative button in a frontend web application (e.g. React or Vue) insufficient for security?',
        bn: 'ফ্রন্টএন্ড ওয়েব অ্যাপ্লিকেশনে ( যেমন React বা Vue ) কোনো অ্যাডমিন বোতাম লুকিয়ে রাখা কেন নিরাপত্তার জন্য যথেষ্ট নয়?'
      },
      options: [
        {
          en: 'Because attackers can bypass the frontend UI completely and send HTTP requests directly to the backend API using tools like curl, Postman, or browser console scripts',
          bn: 'কারণ আক্রমণকারীরা ফ্রন্টএন্ড ইন্টারফেস সম্পূর্ণ এড়িয়ে সরাসরি curl, Postman বা ব্রাউজার স্ক্রিপ্ট দিয়ে ব্যাকএন্ড এপিআইতে রিকোয়েস্ট পাঠাতে পারে',
        },
        {
          en: 'Because hiding buttons makes computer monitors consume ten times more electricity',
          bn: 'কারণ বোতাম লুকিয়ে রাখলে কম্পিউটারের মনিটর দশ গুণ বেশি বিদ্যুৎ খরচ করে',
        },
        {
          en: 'Because web browser windows automatically close when buttons are hidden',
          bn: 'কারণ বোতাম লুকানো থাকলে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
        },
        {
          en: 'Because hidden buttons cause smartphone batteries to expand in size',
          bn: 'কারণ লুকানো বোতামের ফলে স্মার্টফোনের ব্যাটারির শারীরিক আকার ফুলে ওঠে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Attackers do not need the UI to invoke backend APIs.',
        bn: 'আক্রমণকারীদের ব্যাকএন্ড এপিআই ডাকার জন্য ইউজার ইন্টারফেসের প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'Frontend UI hiding is merely a convenience feature for usability. Real security must always be enforced at the backend server layer.',
        bn: 'ফ্রন্টএন্ডে বোতাম লুকানো কেবল ব্যবহার সহজ করার জন্য। আসল নিরাপত্তা সর্বদা ব্যাকএন্ড সার্ভারেই প্রয়োগ করতে হয়।'
      },
    },
    {
      id: 'meet-authz-ex-4',
      kind: 'predict',
      topic: 'http-status-codes-unauthorized',
      question: {
        en: 'Which standard HTTP status code signifies that a request lacks valid authentication credentials completely? (401). Type the number.',
        bn: 'কোন আদর্শ HTTP স্ট্যাটাস কোডটি নির্দেশ করে যে রিকোয়েস্টে কোনো বৈধ প্রমাণীকরণ বা লগইন তথ্য একেবারেই নেই? ( ৪০১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '401',
      hint: {
        en: '401 Unauthorized indicates unauthenticated requests.',
        bn: '৪০১ আনঅথরাইজড নির্দেশ করে পরিচয়হীন রিকোয়েস্ট।'
      },
      explanation: {
        en: 'HTTP 401 Unauthorized informs the client that credentials (session cookie or bearer token) are required to access the endpoint.',
        bn: 'HTTP ৪০১ আনঅথরাইজড ক্লায়েন্টকে জানায় যে এই এন্ডপয়েন্টে প্রবেশের জন্য লগইন ক্রেডেনশিয়াল বা টোকেন আবশ্যক।'
      },
    },
  ],
  quiz: {
    id: 'meet-authz-quiz',
    title: {
      en: 'Foundations of Authorization & Access Control Quiz',
      bn: 'অথরাইজেশন ও এক্সেস কন্ট্রোলের ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'meet-authz-qz-1',
        kind: 'mcq',
        topic: 'authentication-vs-authorization-boundary',
        question: {
          en: 'Which scenario correctly illustrates the boundary between authentication and authorization?',
          bn: 'কোন দৃশ্যপটটি অথেনটিকেশন এবং অথরাইজেশনের মধ্যকার সীমানাকে সঠিকভাবে তুলে ধরে?'
        },
        options: [
          {
            en: 'An employee scans their badge to unlock the company building lobby (Authentication), but the door to the high-security server room remains locked because their badge role only grants office access (Authorization)',
            bn: 'একজন কর্মী কোম্পানির মূল ভবনে ঢোকার জন্য তার কার্ড স্ক্যান করলেন (অথেনটিকেশন), কিন্তু উচ্চ-নিরাপত্তাযুক্ত সার্ভার রুমের দরজাটি খুলল না কারণ তার রোলে কেবল সাধারণ অফিসের অনুমতি দেওয়া ছিল (অথরাইজেশন)',
          },
          {
            en: 'An employee buys a cup of tea from the company cafeteria',
            bn: 'একজন কর্মী কোম্পানির ক্যাফেটেরিয়া থেকে এক কাপ চা কিনে নিলেন',
          },
          {
            en: 'An employee reboots their personal laptop computer twice',
            bn: 'একজন কর্মী তার ব্যক্তিগত ল্যাপটপ কম্পিউটারটি দুবার রিস্টার্ট দিলেন',
          },
          {
            en: 'An employee sets their desk chair to maximum height',
            bn: 'একজন কর্মী তার অফিসের চেয়ারের উচ্চতা সবচেয়ে উঁচুতে উঠিয়ে নিলেন',
          },
        ],
        answer: 0,
        hint: {
          en: 'Entering the building is authentication; accessing specific rooms is authorization.',
          bn: 'ভবনে ঢোকা হলো অথেনটিকেশন; নির্দিষ্ট ঘরে যাওয়া হলো অথরাইজেশন।'
        },
        explanation: {
          en: 'Authentication validates identity at the entrance; authorization determines which restricted areas that identity may enter.',
          bn: 'অথেনটিকেশন প্রবেশমুখে পরিচয় প্রমাণ করে; আর অথরাইজেশন নির্ধারণ করে সেই পরিচয় কোন কোন গোপন কক্ষে ঢুকতে পারবে।'
        },
      },
      {
        id: 'meet-authz-qz-2',
        kind: 'mcq',
        topic: 'pdp-vs-pep-concepts',
        question: {
          en: 'What is the technical distinction between a Policy Enforcement Point (PEP) and a Policy Decision Point (PDP)?',
          bn: 'পলিসি ইনফোর্সমেন্ট পয়েন্ট (PEP) এবং পলিসি ডিসিশন পয়েন্টের (PDP) মধ্যে কারিগরি পার্থক্য কী?'
        },
        options: [
          {
            en: 'The PEP intercepts the incoming request and enforces the verdict; the PDP evaluates policies against user attributes and context to render the decision (ALLOW or DENY)',
            bn: 'PEP আগত রিকোয়েস্ট আটকে সিদ্ধান্ত বাস্তবায়ন করে; আর PDP ব্যবহারকারীর তথ্য ও পলিসি বিচার করে চূড়ান্ত সিদ্ধান্ত (ALLOW বা DENY) প্রদান করে',
          },
          {
            en: 'The PEP controls server cooling fans while the PDP regulates computer screen brightness',
            bn: 'PEP সার্ভারের ফ্যান চালায় আর PDP কম্পিউটারের স্ক্রিনের আলো কম-বেশি করে',
          },
          {
            en: 'The PEP is only used on mobile phones and the PDP is only used on desktop computers',
            bn: 'PEP কেবল মোবাইল ফোনে ব্যবহৃত হয় এবং PDP কেবল ডেস্কটপ কম্পিউটারে ব্যবহৃত হয়',
          },
          {
            en: 'There is no difference; PEP and PDP are two names for the same hard disk cable',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; PEP এবং PDP একই হার্ডডিস্কের তারের দুটি নাম',
          },
        ],
        answer: 0,
        hint: {
          en: 'PEP enforces; PDP decides.',
          bn: 'PEP প্রয়োগ করে; PDP সিদ্ধান্ত দেয়।'
        },
        explanation: {
          en: 'Decoupling enforcement (PEP in gateway/middleware) from policy decision logic (PDP service) allows rules to change without rebuilding applications.',
          bn: 'প্রয়োগ (PEP) ও সিদ্ধান্তকে (PDP) আলাদা রাখায় অ্যাপের মূল কোড না বদলেই পলিসির নিয়ম তাৎক্ষণিকভাবে পরিবর্তন করা যায়।'
        },
      },
      {
        id: 'meet-authz-qz-3',
        kind: 'mcq',
        topic: 'idor-concept-overview',
        question: {
          en: 'What is Insecure Direct Object Reference (IDOR), and why does it represent broken authorization?',
          bn: 'ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) কী এবং কেন এটি অথরাইজেশনের ব্যর্থতা নির্দেশ করে?'
        },
        options: [
          {
            en: 'An attacker changes an object identifier in a request (e.g. /invoices/100 to /invoices/101) and the server retrieves the record without verifying that the authenticated user owns that record',
            bn: 'আক্রমণকারী রিকোয়েস্টের ভেতরের অবজেক্ট আইডি পরিবর্তন করে ( যেমন /invoices/100 থেকে /invoices/101 ) এবং সার্ভার ব্যবহারকারী আসলেই সেই রেকর্ডের মালিক কি না তা যাচাই না করেই তথ্য ফেরত দিয়ে দেয়',
          },
          {
            en: 'A bug where computer speakers play static noise during phone calls',
            bn: 'একটি সফটওয়্যার বাগ যার ফলে ফোন কলের সময় স্পিকারে শোঁ শোঁ শব্দ হয়',
          },
          {
            en: 'A condition where a wireless keyboard types numbers backward',
            bn: 'এমন একটি ত্রুটি যেখানে ওয়্যারলেস কিবোর্ডে সংখ্যাগুলো উল্টোভাবে টাইপ হয়',
          },
          {
            en: 'A failure of computer network cables to fit into wall sockets',
            bn: 'ইন্টারনেটের তার দেয়ালের সকেটের সাথে ঠিকমতো না লাগার একটি শারীরিক ত্রুটি',
          },
        ],
        answer: 0,
        hint: {
          en: 'IDOR occurs when servers trust client-supplied IDs without ownership checks.',
          bn: 'মালিকানা যাচাই না করে ক্লায়েন্টের দেওয়া আইডি অন্ধভাবে বিশ্বাস করলে IDOR ঘটে।'
        },
        explanation: {
          en: 'Even if the user is authenticated, failing to verify ownership or access rights on specific object IDs creates an IDOR vulnerability.',
          bn: 'ব্যবহারকারী লগইন করা থাকলেও নির্দিষ্ট রেকর্ডের মালিকানা নিশ্চিত না করায় IDOR নামক মারাত্মক তথ্য ফাঁসের ঝুঁকি তৈরি হয়।'
        },
      },
      {
        id: 'meet-authz-qz-4',
        kind: 'mcq',
        topic: 'least-privilege-principle',
        question: {
          en: 'How does adhering to the Principle of Least Privilege protect organizations from catastrophic security breaches?',
          bn: 'ন্যূনতম অধিকারের নীতি (Principle of Least Privilege) মেনে চলা কীভাবে সংস্থাকে মারাত্মক নিরাপত্তা বিপর্যয় থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'By ensuring users and automated services only receive the minimum permissions necessary for their duties, limiting the blast radius if an account or API key is compromised',
            bn: 'ব্যবহারকারী ও স্বয়ংক্রিয় সার্ভিসগুলোকে কেবল তাদের কাজের জন্য প্রয়োজনীয় ন্যূনতম পারমিশন দিয়ে রাখা, যাতে কোনো অ্যাকাউন্ট হ্যাক হলেও আক্রমণকারীর ক্ষতির পরিধি সীমিত থাকে',
          },
          {
            en: 'By making internet cables carry data at double the physical speed',
            bn: 'ইন্টারনেট তারের মাধ্যমে ডেটা চলাচলের গতি দ্বিগুণ বাড়িয়ে দিয়ে',
          },
          {
            en: 'By turning all website text into capital letters automatically',
            bn: 'ওয়েবসাইটের সমস্ত লেখাকে নিজে থেকেই বড় হাতের অক্ষরে রূপান্তর করে',
          },
          {
            en: 'By forcing employees to work exclusively from home without computers',
            bn: 'কর্মীদের কম্পিউটার ছাড়াই কেবল ঘরে বসে কাজ করতে বাধ্য করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Least privilege minimizes potential damage upon account compromise.',
          bn: 'ন্যূনতম অধিকার অ্যাকাউন্ট হ্যাক হলেও সম্ভাব্য ক্ষতির মাত্রা সর্বনিম্ন রাখে।'
        },
        explanation: {
          en: 'If a compromised service account only has "read:invoices", the attacker cannot drop database tables or modify administrative settings.',
          bn: 'হ্যাক হওয়া সার্ভিস একাউন্টে যদি কেবল ইনভয়েস দেখার অধিকার থাকে, তবে হ্যাকার পুরো ডাটাবেজ মুছে ফেলতে বা ক্ষতি করতে পারে না।'
        },
      },
    ],
  },
  next: {
    slug: 'rbac-basics',
    title: {
      en: 'Role-Based Access Control (RBAC): Roles, Grants & Hierarchies',
      bn: 'রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC): রোল, গ্রান্ট এবং হায়ারার্কি'
    },
  },
};
