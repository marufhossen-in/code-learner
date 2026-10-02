import type { Lesson } from '../../../lib/types';

export const PermissionsChecksLesson: Lesson = {
  slug: 'permissions-checks',
  tech: 'authorization',
  title: {
    en: 'Permission Checks & Middleware: Policy Enforcement Points (PEP)',
    bn: 'পারমিশন চেক এবং মিডলওয়্যার: পলিসি ইনফোর্সমেন্ট পয়েন্ট (PEP)'
  },
  summary: {
    en: 'Master the design and implementation of centralized authorization middleware in web applications and API gateways. Discover why scattering permission checks inside business controller methods inevitably leads to broken access control vulnerabilities. Learn how to construct declarative Policy Enforcement Points that intercept requests before execution, evaluate caller permissions under fail-closed default-deny semantics, and reliably return HTTP 403 Forbidden responses.',
    bn: 'ওয়েব অ্যাপ্লিকেশন এবং এপিআই গেটওয়েতে কেন্দ্রীভূত অথরাইজেশন মিডলওয়্যারের ডিজাইন ও বাস্তবায়ন আয়ত্ত করুন। কন্ট্রোলার মেথডের ভেতরে বিচ্ছিন্নভাবে পারমিশন চেক রাখলে কেন ব্রোকেন এক্সেস কন্ট্রোল ত্রুটি ঘটে তা জানুন। রিকোয়েস্ট কার্যকরের আগেই আটকে দেওয়ার ডিক্লারেটিভ পলিসি ইনফোর্সমেন্ট পয়েন্ট তৈরি, ফেইল-ক্লোজড ডিফল্ট-ডিনাই নিয়মে অনুমতি মূল্যায়ন এবং কার্যকরভাবে HTTP ৪০৩ ফরবিডেন রেসপন্স পাঠানো শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'centralized-middleware-architecture',
      text: {
        en: 'Why Scattered Access Checks Fail: The Case for Centralized Middleware',
        bn: 'বিচ্ছিন্ন এক্সেস চেক কেন ব্যর্থ হয়: কেন্দ্রীভূত মিডলওয়্যারের প্রয়োজনীয়তা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When developers implement authorization manually inside individual controller functions, human error is mathematically guaranteed. When a developer rushes to add a new endpoint (such as an internal diagnostic or data export route), they frequently forget to copy-paste the permission verification block, leaving sensitive data completely exposed to the public internet.',
        bn: 'যখন ডেভেলপাররা প্রতিটি কন্ট্রোলার ফাংশনের ভেতরে আলাদা আলাদাভাবে অথরাইজেশন কোড লেখেন, তখন মানুষের ভুলের ঝুঁকি নিশ্চিতভাবেই তৈরি হয়। দ্রুত কোনো নতুন এপিআই এন্ডপয়েন্ট ( যেমন অভ্যন্তরীণ ডায়াগনস্টিক বা ডেটা এক্সপোর্ট রুট ) যুক্ত করার সময় ডেভেলপার প্রায়ই পারমিশন যাচাইয়ের কোড লিখতে ভুলে যান, যার ফলে গোপন তথ্য সবার জন্য অনিরাপদভাবে উন্মুক্ত হয়ে পড়ে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Policy Enforcement Point (PEP) middleware architecture solves this problem by centralizing access control at the routing layer. Before any controller logic runs, the middleware intercepts the incoming request, inspects the authenticated user permissions, and blocks unauthorized traffic before it ever touches business services.',
        bn: 'পলিসি ইনফোর্সমেন্ট পয়েন্ট (PEP) মিডলওয়্যার আর্কিটেকচার রাউটিং স্তরে এক্সেস নিয়ন্ত্রণকে কেন্দ্রীভূত করে এই সমস্যার সমাধান করে। কন্ট্রোলারের কোনো কোড চলার আগেই মিডলওয়্যার আগত রিকোয়েস্টটিকে আটকে দেয়, ব্যবহারকারীর পারমিশন যাচাই করে এবং অননুমোদিত ট্রাফিককে ব্যবসায়িক লজিক স্পর্শ করার আগেই সরাসরি প্রতিহত করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Request Interception & Context Loading',
            bn: '১. রিকোয়েস্ট আটকানো এবং কনটেক্সট লোড'
          },
          text: {
            en: 'The HTTP middleware intercepts the incoming request and retrieves the caller identity (req.user) populated by upstream authentication.',
            bn: 'HTTP মিডলওয়্যার আগত রিকোয়েস্টটিকে আটকে দেয় এবং পূর্ববর্তী অথেনটিকেশন থেকে পাওয়া ব্যবহারকারীর পরিচয় (req.user) সংগ্রহ করে।'
          },
        },
        {
          title: {
            en: '2. Required Scope Resolution',
            bn: '২. প্রয়োজনীয় স্কোপ বা পারমিশন নির্ধারণ'
          },
          text: {
            en: 'The middleware reads the declarative permission requirement configured on the route definition (such as documents:delete).',
            bn: 'মিডলওয়্যারটি রাউট ডেফিনিশনে উল্লেখ থাকা ডিক্লারেটিভ পারমিশন শর্তটি ( যেমন documents:delete ) পড়ে নেয়।'
          },
        },
        {
          title: {
            en: '3. Permission Set Evaluation',
            bn: '৩. পারমিশন তালিকা যাচাইকরণ'
          },
          text: {
            en: 'The guard evaluates whether the caller assigned permissions include the required action under the Default-Deny rule.',
            bn: 'গার্ডটি ডিফল্ট-ডিনাই নিয়মে যাচাই করে যে ব্যবহারকারীর অর্জিত পারমিশন তালিকায় প্রয়োজনীয় অধিকারটি বিদ্যমান আছে কি না।'
          },
        },
        {
          title: {
            en: '4. Pipeline Dispatch (Next vs 403 Forbidden)',
            bn: '৪. পাইপলাইন পরিচালনা (পরবর্তী ধাপ বনাম ৪০৩ ফরবিডেন)'
          },
          text: {
            en: 'If permitted, the guard invokes next() to pass execution to the controller. If unauthorized, it immediately terminates the connection with HTTP 403 Forbidden.',
            bn: 'অনুমতি থাকলে গার্ডটি next() কল করে কন্ট্রোলারে যেতে দেয়। অননুমোদিত হলে এটি সাথে সাথে HTTP ৪০৩ ফরবিডেন দিয়ে রিকোয়েস্ট শেষ করে দেয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Middleware Enforcement Pipeline: 5 Requests Evaluated',
        bn: 'মিডলওয়্যার প্রয়োগ পাইপলাইন: ৫ টি রিকোয়েস্টের মূল্যায়ন'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Authorization middleware evaluating 5 incoming requests with 4 passing and 1 rejected with 403">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MIDDLEWARE POLICY ENFORCEMENT POINT (PEP)</text>
  
  <!-- Left Column: Pipeline Definition -->
  <g transform="translate(40, 55)">
    <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="125" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">ROUTE GUARD DECLARATION</text>
    
    <g transform="translate(15, 45)">
      <rect width="220" height="90" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="10" y="20" fill="#38bdf8" font-size="9" font-weight="bold">DECLARATIVE ROUTING:</text>
      <text x="10" y="40" fill="#cbd5e1" font-size="8">app.delete(</text>
      <text x="15" y="58" fill="#f8fafc" font-size="8">  '/documents/:id',</text>
      <text x="15" y="74" fill="#6ee7b7" font-size="8">  guard('documents:delete'),</text>
      <text x="15" y="90" fill="#cbd5e1" font-size="8">  controller.deleteDoc</text>
      <text x="10" y="106" fill="#cbd5e1" font-size="8">);</text>
      
      <rect y="125" width="220" height="150" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="110" y="150" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">FAIL-CLOSED PRINCIPLE</text>
      <text x="10" y="172" fill="#cbd5e1" font-size="8">• Checks run BEFORE handler</text>
      <text x="10" y="190" fill="#cbd5e1" font-size="8">• Zero business code touched</text>
      <text x="10" y="208" fill="#cbd5e1" font-size="8">• Standardized 403 payloads</text>
      <text x="10" y="226" fill="#cbd5e1" font-size="8">• Security audits centralized</text>
      <text x="10" y="244" fill="#10b981" font-size="8">• 100% route coverage</text>
    </g>
  </g>
  
  <!-- Right Column: 5 Requests Evaluated -->
  <g transform="translate(310, 55)">
    <rect width="490" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="245" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">5 INCOMING REQUEST EVALUATIONS</text>
    
    <!-- Req 1: Admin delete -> PASS -->
    <g transform="translate(15, 45)">
      <rect width="460" height="45" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">REQ 1: Alice (admin) → DELETE /documents/42</text>
      <text x="15" y="36" fill="#cbd5e1" font-size="8">Required: "documents:delete" | User has: [read, write, delete] → <tspan fill="#34d399" font-weight="bold">PASS (HTTP 200)</tspan></text>
    </g>
    
    <!-- Req 2: Editor write -> PASS -->
    <g transform="translate(15, 98)">
      <rect width="460" height="45" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">REQ 2: Bob (editor) → POST /documents</text>
      <text x="15" y="36" fill="#cbd5e1" font-size="8">Required: "documents:write" | User has: [read, write] → <tspan fill="#34d399" font-weight="bold">PASS (HTTP 200)</tspan></text>
    </g>
    
    <!-- Req 3: Viewer read -> PASS -->
    <g transform="translate(15, 151)">
      <rect width="460" height="45" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">REQ 3: Charlie (viewer) → GET /documents/42</text>
      <text x="15" y="36" fill="#cbd5e1" font-size="8">Required: "documents:read" | User has: [read] → <tspan fill="#34d399" font-weight="bold">PASS (HTTP 200)</tspan></text>
    </g>
    
    <!-- Req 4: Editor read -> PASS -->
    <g transform="translate(15, 204)">
      <rect width="460" height="45" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">REQ 4: Bob (editor) → GET /documents/42</text>
      <text x="15" y="36" fill="#cbd5e1" font-size="8">Required: "documents:read" | User has: [read, write] → <tspan fill="#34d399" font-weight="bold">PASS (HTTP 200)</tspan></text>
    </g>
    
    <!-- Req 5: Viewer delete -> FAIL 403 -->
    <g transform="translate(15, 257)">
      <rect width="460" height="55" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
      <text x="15" y="20" fill="#fca5a5" font-size="9" font-weight="bold">REQ 5: Charlie (viewer) → DELETE /documents/42</text>
      <text x="15" y="36" fill="#cbd5e1" font-size="8">Required: "documents:delete" | User has: [read] → <tspan fill="#ef4444" font-weight="bold">FORBIDDEN (HTTP 403)</tspan></text>
      <text x="15" y="48" fill="#fca5a5" font-size="7.5">Security gate blocks unauthorized deletion before controller execution!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Across 5 incoming calls: 4 passed with 200 OK, and 1 unauthorized request was terminated with 403 Forbidden</text>
</svg>`,
      caption: {
        en: 'The middleware evaluates 5 incoming requests: 4 legitimate calls proceed, while 1 unauthorized delete attempt is blocked with 403 Forbidden.',
        bn: 'মিডলওয়্যারটি ৫ টি আগত রিকোয়েস্ট যাচাই করে: ৪ টি বৈধ রিকোয়েস্ট এগিয়ে যায় এবং ১ টি অননুমোদিত রিকোয়েস্ট ৪০৩ ফরবিডেন দিয়ে আটকে দেওয়া হয়।'
      },
    },
    {
      type: 'heading',
      id: 'permission-middleware-code',
      text: {
        en: 'Building an Express-Style Permission Middleware Guard in Node.js',
        bn: 'Node.js-এ এক্সপ্রেস-স্টাইলের পারমিশন মিডলওয়্যার গার্ড তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect how a higher-order factory function creates reusable middleware route guards. Notice how the guard inspects caller credentials, checks required permissions under default-deny, and invokes next() or returns a 403 Forbidden error.',
        bn: 'একটি হায়ার-অর্ডার ফ্যাক্টরি ফাংশন কীভাবে পুনরায় ব্যবহারযোগ্য মিডলওয়্যার গার্ড তৈরি করে তা দেখুন। লক্ষ্য করুন কীভাবে গার্ড ব্যবহারকারীর পরিচয় যাচাই করে, ডিফল্ট-ডিনাই নিয়মে পারমিশন পরীক্ষা করে এবং অনুমতি মিললে next() কল করে অথবা ৪০৩ ফরবিডেন এরর ফেরত দেয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'permission-guard-middleware.js',
      code: `// Enterprise Permission Middleware Factory
function requirePermission(requiredPermission) {
  return function permissionGuard(req, res, next) {
    // Check 1: Authentication presence (Door 1)
    if (!req.user || !req.user.id) {
      return res({
        status: 401,
        body: { error: 'Unauthorized: Authentication credentials required.' }
      });
    }

    // Check 2: Permission verification under Default-Deny (Door 2)
    const userPermissions = req.user.permissions || [];
    const isAllowed = userPermissions.includes(requiredPermission);

    if (!isAllowed) {
      return res({
        status: 403,
        body: {
          error: 'Forbidden: Caller ' + req.user.name + ' (' + req.user.role + ') lacks ' + requiredPermission
        }
      });
    }

    // Pass control to next handler
    return next();
  };
}

// Factory instantiation for distinct endpoints
const deleteGuard = requirePermission('documents:delete');
const writeGuard = requirePermission('documents:write');
const readGuard = requirePermission('documents:read');

// Simulated 5 requests across 3 users
const testRequests = [
  {
    id: 1,
    action: 'DELETE /documents/42',
    guard: deleteGuard,
    user: { id: 'u1', name: 'Alice', role: 'admin', permissions: ['documents:read', 'documents:write', 'documents:delete'] }
  },
  {
    id: 2,
    action: 'POST /documents',
    guard: writeGuard,
    user: { id: 'u2', name: 'Bob', role: 'editor', permissions: ['documents:read', 'documents:write'] }
  },
  {
    id: 3,
    action: 'GET /documents/42',
    guard: readGuard,
    user: { id: 'u3', name: 'Charlie', role: 'viewer', permissions: ['documents:read'] }
  },
  {
    id: 4,
    action: 'GET /documents/42',
    guard: readGuard,
    user: { id: 'u2', name: 'Bob', role: 'editor', permissions: ['documents:read', 'documents:write'] }
  },
  {
    id: 5,
    action: 'DELETE /documents/42',
    guard: deleteGuard,
    user: { id: 'u3', name: 'Charlie', role: 'viewer', permissions: ['documents:read'] }
  }
];

let passedCount = 0;
let failedCount = 0;

console.log('=== Executing 5 Middleware Guard Checks ===');
testRequests.forEach(req => {
  // Execute middleware with mock response and next callbacks
  req.guard(
    req,
    // Error response callback
    errorResponse => {
      failedCount += 1;
      console.log('Request ' + req.id + ': ' + req.action + ' by ' + req.user.name + ' (' + req.user.role + ') -> FAIL ' + errorResponse.status);
    },
    // Next controller callback
    () => {
      passedCount += 1;
      console.log('Request ' + req.id + ': ' + req.action + ' by ' + req.user.name + ' (' + req.user.role + ') -> PASS (HTTP 200)');
    }
  );
});

console.log('\\n=== Verification Summary ===');
console.log('Total calls evaluated: 5');
console.log('Requests passed: ' + passedCount);
console.log('Requests blocked: ' + failedCount);`,
      caption: {
        en: 'The middleware factory evaluates 5 incoming requests, allowing 4 authorized calls and terminating 1 unauthorized request.',
        bn: 'মিডলওয়্যার ফ্যাক্টরি ৫ টি আগত রিকোয়েস্ট মূল্যায়ন করে ৪ টি অনুমোদিত কল চালু রাখে এবং ১ টি অননুমোদিত রিকোয়েস্ট আটকে দেয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The Missing Function Level Access Control Trap',
        bn: 'ফাংশন-লেভেল এক্সেস কন্ট্রোল বাদ পড়ার নিরাপত্তা ফাঁদ'
      },
      text: {
        en: 'OWASP categorizes Missing Function Level Access Control as a severe vulnerability. It occurs when public APIs use authentication middleware, but omit authorization checks on administrative routes (such as /api/admin/flush-cache or /api/users/export). Attackers discover these routes by inspecting JavaScript bundles, guessing URL patterns, or using fuzzing tools. Always wrap every administrative route with explicit permission middleware.',
        bn: 'OWASP ফাংশন-লেভেল এক্সেস কন্ট্রোল বাদ পড়াকে একটি মারাত্মক নিরাপত্তা দুর্বলতা হিসেবে চিহ্নিত করেছে। এটি ঘটে যখন এপিআইতে লগইন যাচাই থাকলেও অ্যাডমিন রুটে ( যেমন /api/admin/flush-cache বা /api/users/export ) কোনো পারমিশন মিডলওয়্যার রাখা হয় না। আক্রমণকারীরা জাভাস্ক্রিপ্ট বান্ডেল দেখে বা অনুমান করে এই রুটগুলো খুঁজে বের করে আক্রমণ করে। সর্বদা প্রতিটি সংবেদনশীল রুটের মুখে বাধ্যতামূলক পারমিশন মিডলওয়্যার যুক্ত রাখুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'perm-chk-ex-1',
      kind: 'predict',
      topic: 'middleware-requests-blocked-count',
      question: {
        en: 'Out of the 5 incoming API requests evaluated in this middleware demonstration, how many requests were blocked with HTTP 403 Forbidden? (1). Type the number.',
        bn: 'এই মিডলওয়্যার পরীক্ষায় ৫ টি আগত এপিআই রিকোয়েস্টের মধ্যে কয়টি রিকোয়েস্টকে HTTP ৪০৩ ফরবিডেন দিয়ে আটকে দেওয়া হয়েছে? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 request was blocked (viewer attempting delete).',
        bn: 'কেবল ১ টি রিকোয়েস্ট আটকে দেওয়া হয়েছিল (ভিউয়ারের ডিলিট চেষ্টা)।'
      },
      explanation: {
        en: 'Exactly 1 request (Request 5 from Charlie attempting documents:delete) was blocked because the viewer role lacked delete permissions.',
        bn: 'ঠিক ১ টি রিকোয়েস্ট (৫ নম্বর রিকোয়েস্টে চার্লির ডিলিট করার চেষ্টা) আটকে দেওয়া হয়েছিল কারণ ভিউয়ার রোলে ডিলিট করার কোনো অনুমতি ছিল না।'
      },
    },
    {
      id: 'perm-chk-ex-2',
      kind: 'mcq',
      topic: 'centralized-middleware-benefits',
      question: {
        en: 'What is the primary security advantage of enforcing permissions via centralized route middleware rather than manual controller checks?',
        bn: 'ম্যানুয়াল কন্ট্রোলার চেকের চেয়ে কেন্দ্রীভূত রাউট মিডলওয়্যারের মাধ্যমে পারমিশন প্রয়োগের প্রধান নিরাপত্তা সুবিধা কী?'
      },
      options: [
        {
          en: 'It guarantees that every request is evaluated before controller business logic executes, preventing developers from accidentally forgetting authorization checks when creating new routes',
          bn: 'এটি নিশ্চিত করে যে কন্ট্রোলারের ব্যবসায়িক কোড চলার আগেই প্রতিটি রিকোয়েস্ট কঠোরভাবে যাচাই করা হবে, ফলে নতুন রুট তৈরির সময় ডেভেলপারদের ভুলবশত পারমিশন চেক ভুলে যাওয়ার কোনো সুযোগ থাকে না',
        },
        {
          en: 'It reduces the physical temperature of the server room air conditioning',
          bn: 'এটি সার্ভার রুমের এয়ার কন্ডিশনারের শারীরিক তাপমাত্রা কমিয়ে দেয়',
        },
        {
          en: 'It allows computers to download files with no internet connection',
          bn: 'এটি কোনো ইন্টারনেট সংযোগ ছাড়াই কম্পিউটারকে ফাইল ডাউনলোড করার সুযোগ দেয়',
        },
        {
          en: 'It converts all server error logs into musical sounds',
          bn: 'এটি সার্ভারের সমস্ত এরর লগকে গানের মিষ্টি সুরে রূপান্তর করে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Centralized middleware eliminates human error in new endpoint declarations.',
        bn: 'কেন্দ্রীভূত মিডলওয়্যার নতুন এন্ডপয়েন্ট তৈরিতে মানুষের ভুলের ঝুঁকি সম্পূর্ণ দূর করে।'
      },
      explanation: {
        en: 'Scattered controller checks are prone to omission. Centralized declarative route guards guarantee consistent, fail-closed enforcement across the entire application surface.',
        bn: 'কন্ট্রোলারের ভেতরের চেক ভুলে যাওয়ার সম্ভাবনা থাকে। কেন্দ্রীভূত ডিক্লারেটিভ মিডলওয়্যার পুরো অ্যাপ্লিকেশনে সার্বক্ষণিক ও অপরিবর্তনীয় নিরাপত্তা নিশ্চিত করে।'
      },
    },
    {
      id: 'perm-chk-ex-3',
      kind: 'mcq',
      topic: 'fail-closed-semantics',
      question: {
        en: 'What does "fail-closed" semantics mean in authorization middleware design?',
        bn: 'অথরাইজেশন মিডলওয়্যার ডিজাইনে "ফেইল-ক্লোজড" (Fail-Closed) নীতির অর্থ কী?'
      },
      options: [
        {
          en: 'If an error, missing parameter, or unexpected exception occurs during permission evaluation, access is strictly denied (403 Forbidden) rather than erroneously allowed',
          bn: 'যদি পারমিশন মূল্যায়নের সময় কোনো এরর, অনুপস্থিত প্যারামিটার বা অপ্রত্যাশিত ত্রুটি দেখা দেয়, তবে কোনো অবস্থাতেই অনুমতি না দিয়ে সাথে সাথে এক্সেস কঠোরভাবে বাতিল (৪০৩ ফরবিডেন) করা হয়',
        },
        {
          en: 'It means the web browser window closes automatically whenever a typo occurs',
          bn: 'এর মানে হলো কিবোর্ডে কোনো বানান ভুল হলে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
        },
        {
          en: 'It means computer monitors turn black whenever a network cable is unplugged',
          bn: 'এর মানে হলো ইন্টারনেটের তার খুলে ফেললে কম্পিউটারের মনিটর সম্পূর্ণ কালো হয়ে যায়',
        },
        {
          en: 'It means server hard drives lock their read heads permanently after 100 requests',
          bn: 'এর মানে হলো ১০০ টি রিকোয়েস্টের পর সার্ভারের হার্ডড্রাইভ স্থায়ীভাবে লক হয়ে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Fail-closed defaults to refusal upon any uncertainty or error.',
        bn: 'ফেইল-ক্লোজড যেকোনো অনিশ্চয়তা বা ত্রুটির ক্ষেত্রে ডিফল্ট হিসেবে প্রবেশ বাতিল করে।'
      },
      explanation: {
        en: 'A fail-open bug accidentally grants access on failure. Fail-closed guarantees that unexpected failures default to safe refusal.',
        bn: 'ফেইল-ওপেন ত্রুটির কারণে ভুলে হ্যাকাররা ঢুকে পড়তে পারে। ফেইল-ক্লোজড নিশ্চিত করে যে কোনো অনিশ্চয়তায় সিস্টেম সর্বদা নিরাপদ অস্বীকৃতি জানাবে।'
      },
    },
    {
      id: 'perm-chk-ex-4',
      kind: 'predict',
      topic: 'middleware-requests-passed-count',
      question: {
        en: 'Out of the 5 incoming API requests evaluated in this middleware demonstration, how many requests succeeded with HTTP 200 OK? (4). Type the number.',
        bn: 'এই মিডলওয়্যার পরীক্ষায় ৫ টি আগত এপিআই রিকোয়েস্টের মধ্যে কয়টি রিকোয়েস্ট সফলভাবে HTTP ২০০ ওকে পেয়েছে? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: '4 out of 5 requests had valid permissions.',
        bn: '৫ টির মধ্যে ৪ টি রিকোয়েস্টে সঠিক পারমিশন ছিল।'
      },
      explanation: {
        en: 'Requests 1, 2, 3, and 4 possessed the required permissions and were passed to their respective handlers.',
        bn: '১, ২, ৩ এবং ৪ নম্বর রিকোয়েস্টে প্রয়োজনীয় পারমিশন থাকায় সেগুলোকে সফলভাবে পরবর্তী হ্যান্ডলারে পাঠানো হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'permissions-checks-quiz',
    title: {
      en: 'Permission Checks & Enforcement Middleware Quiz',
      bn: 'পারমিশন চেক ও প্রয়োগ মিডলওয়্যার কুইজ'
    },
    questions: [
      {
        id: 'perm-chk-qz-1',
        kind: 'mcq',
        topic: 'http-verb-tampering-defense',
        question: {
          en: 'How does HTTP Verb Tampering exploit improperly configured route middleware, and how do engineers prevent it?',
          bn: 'HTTP ভার্ব ট্যাম্পারিং কীভাবে ত্রুটিপূর্ণ রাউট মিডলওয়্যারের সুযোগ নেয় এবং ইঞ্জিনিয়াররা এটি কীভাবে প্রতিহত করেন?'
        },
        options: [
          {
            en: 'Attackers send alternative HTTP methods (such as HEAD, PUT, or custom verbs) against endpoints where middleware only secured GET or POST; engineers prevent it by enforcing authorization across all HTTP verbs on the route',
            bn: 'আক্রমণকারীরা বিকল্প HTTP মেথড ( যেমন HEAD, PUT বা কাস্টম ভার্ব ) পাঠিয়ে আক্রমণ করে যেখানে মিডলওয়্যার কেবল GET বা POST পাহারা দিচ্ছিল; ইঞ্জিনিয়াররা রাউটের সমস্ত HTTP মেথডের ওপর কঠোরভাবে মিডলওয়্যার প্রয়োগ করে এটি প্রতিরোধ করেন',
          },
          {
            en: 'Attackers turn off the electricity in the web server data center',
            bn: 'আক্রমণকারীরা ওয়েব সার্ভারের ডেটা সেন্টারের বিদ্যুৎ সংযোগ বন্ধ করে দেয়',
          },
          {
            en: 'Attackers change the font color of the website to dark purple',
            bn: 'আক্রমণকারীরা ওয়েবসাইটের লেখার রঙ গাঢ় বেগুনিতে পরিবর্তন করে দেয়',
          },
          {
            en: 'Attackers force smartphone screens to display thirty clock faces',
            bn: 'আক্রমণকারীরা স্মার্টফোনের পর্দায় ত্রিশটি ঘড়ির মুখ প্রদর্শন করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Secure all HTTP methods, not just common GET and POST requests.',
          bn: 'কেবল GET বা POST নয়, সমস্ত HTTP মেথড সুরক্ষিত রাখা নিশ্চিত করুন।'
        },
        explanation: {
          en: 'If a route only wraps GET, an attacker might invoke HEAD or POST to access sensitive data. Global or verb-comprehensive route guards eliminate this vector.',
          bn: 'যদি কেবল GET এ গার্ড থাকে, হ্যাকার HEAD পাঠিয়ে তথ্য নিতে পারে। সব মেথডে গার্ড থাকলে এই ঝুঁকি বন্ধ হয়।'
        },
      },
      {
        id: 'perm-chk-qz-2',
        kind: 'mcq',
        topic: 'dry-principle-in-authorization',
        question: {
          en: 'How does the declarative middleware pattern honor the DRY (Don\'t Repeat Yourself) software engineering principle?',
          bn: 'ডিক্লারেটিভ মিডলওয়্যার প্যাটার্ন কীভাবে সফটওয়্যার ইঞ্জিনিয়ারিংয়ের DRY (Don\'t Repeat Yourself) নীতি বাস্তবায়ন করে?'
        },
        options: [
          {
            en: 'Instead of duplicating permission inspection code across hundreds of controllers, a single higher-order middleware factory produces reusable route guards with identical enforcement semantics',
            bn: 'শত শত কন্ট্রোলারের ভেতর একই পারমিশন কোড বারবার লেখার পরিবর্তে একটি একক হায়ার-অর্ডার মিডলওয়্যার ফ্যাক্টরি পুনরায় ব্যবহারযোগ্য রাউট গার্ড তৈরি করে অভিন্ন নিরাপত্তা নিশ্চিত করে',
          },
          {
            en: 'It deletes half of the code written by junior software developers',
            bn: 'এটি জুনিয়র সফটওয়্যার ডেভেলপারদের লেখা অর্ধেক কোড মুছে ফেলে',
          },
          {
            en: 'It forces computers to run two antivirus programs at the same second',
            bn: 'এটি কম্পিউটারকে একই সেকেন্ডে দুটি অ্যান্টিভাইরাস প্রোগ্রাম চালাতে বাধ্য করে',
          },
          {
            en: 'It doubles the size of computer monitors connected to the server',
            bn: 'এটি সার্ভারের সাথে সংযুক্ত থাকা কম্পিউটারের মনিটরের আকার দ্বিগুণ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'DRY prevents code duplication by centralizing enforcement logic.',
          bn: 'DRY নিরাপত্তা লজিক এক জায়গায় সংহত করে কোডের পুনরাবৃত্তি রোধ করে।'
        },
        explanation: {
          en: 'Centralizing permission checks ensures that if authorization rules or error payloads ever change, updating the middleware updates the entire application instantly.',
          bn: 'এক জায়গায় গার্ড রাখায় নিয়মে পরিবর্তন এলে মিডলওয়্যার আপডেট করলেই পুরো অ্যাপ্লিকেশনে তা এক নিমেষে বদলে যায়।'
        },
      },
      {
        id: 'perm-chk-qz-3',
        kind: 'mcq',
        topic: 'middleware-ordering-importance',
        question: {
          en: 'Why is the sequence of middleware registration in an application pipeline critical for security?',
          bn: 'অ্যাপ্লিকেশন পাইপলাইনে মিডলওয়্যার নিবন্ধনের ক্রম বা ধারাবাহিকতা নিরাপত্তার জন্য কেন অত্যন্ত সংবেদনশীল?'
        },
        options: [
          {
            en: 'Authentication middleware must run BEFORE authorization middleware; otherwise, the authorization guard evaluates unpopulated user context and either fails or inadvertently allows anonymous traffic',
            bn: 'অথরাইজেশন মিডলওয়্যারের আগে অবশ্যই অথেনটিকেশন মিডলওয়্যার চালাতে হবে; অন্যথায় অথরাইজেশন গার্ড শূন্য পরিচয় পাবে এবং ভুল করে পরিচয়হীন ট্রাফিককে ঢুকতে দিয়ে দিতে পারে',
          },
          {
            en: 'Because computer processors run backward if middleware is registered incorrectly',
            bn: 'কারণ মিডলওয়্যার ভুলভাবে নিবন্ধন করলে কম্পিউটারের প্রসেসর উল্টোভাবে কাজ করে',
          },
          {
            en: 'Because internet cables only accept network packets in alphabetical order',
            bn: 'কারণ ইন্টারনেট কেবল কেবল বর্ণমালার ক্রমানুসারে নেটওয়ার্ক প্যাকেট গ্রহণ করে',
          },
          {
            en: 'Because web browser windows freeze if authentication runs first',
            bn: 'কারণ অথেনটিকেশন আগে চললে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই হ্যাং হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'You must authenticate the user before you can authorize their permissions.',
          bn: 'অনুমতি যাচাই করার আগে অবশ্যই ব্যবহারকারীর আসল পরিচয় জানতে হবে।'
        },
        explanation: {
          en: 'Ordering is foundational: 1. Rate Limiting -> 2. Authentication (populates req.user) -> 3. Authorization (evaluates permissions) -> 4. Controller.',
          bn: 'ধারাবাহিকতা অপরিহার্য: ১. রেট লিমিট -> ২. অথেনটিকেশন (পরিচয় নিশ্চিত) -> ৩. অথরাইজেশন (অনুমতি যাচাই) -> ৪. কন্ট্রোলার।'
        },
      },
      {
        id: 'perm-chk-qz-4',
        kind: 'mcq',
        topic: 'structured-403-error-payloads',
        question: {
          en: 'Why should production APIs return clear, structured JSON error responses on HTTP 403 Forbidden without leaking sensitive internal system architecture details?',
          bn: 'সংবেদনশীল অভ্যন্তরীণ তথ্য ফাঁস না করে প্রোডাকশন এপিআইতে কেন স্পষ্ট ও সুসংগঠিত JSON এরর রেসপন্স (HTTP ৪০৩) দেওয়া উচিত?'
        },
        options: [
          {
            en: 'Structured error codes allow frontend clients to handle permission denials gracefully (e.g. displaying upgrade prompts), while omitting stack traces, internal database schema details, or server directory paths prevents attackers from fingerprinting the infrastructure',
            bn: 'সুসংগঠিত এরর কোড ফ্রন্টএন্ড ক্লায়েন্টকে সুন্দরভাবে ভুল প্রদর্শন করতে দেয় ( যেমন আপগ্রেড অপশন দেখানো ), আর স্ট্যাক ট্রেস বা সার্ভার ডিরেক্টরি পাথ গোপন রাখায় আক্রমণকারীরা সিস্টেমের ভেতরের গঠন জানতে পারে না',
          },
          {
            en: 'Because unstructured errors cause computer speakers to emit loud beeping sounds',
            bn: 'কারণ অগোছালো এররের ফলে কম্পিউটারের স্পিকার থেকে বিকট শব্দ হতে থাকে',
          },
          {
            en: 'Because structured errors double the battery lifespan of mobile smartphones',
            bn: 'কারণ সুসংগঠিত এরর স্মার্টফোনের ব্যাটারির আয়ু দ্বিগুণ বাড়িয়ে দেয়',
          },
          {
            en: 'Because web servers refuse to restart if error messages lack punctuation',
            bn: 'কারণ এরর মেসেজে বিরামচিহ্ন না থাকলে ওয়েব সার্ভার রিস্টার্ট হতে অস্বীকার করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Provide actionable client errors while withholding internal system architecture secrets.',
          bn: 'ক্লায়েন্টকে কার্যকর মেসেজ দিন কিন্তু ভেতরের গোপন কারিগরি তথ্য সম্পূর্ণ গোপন রাখুন।'
        },
        explanation: {
          en: 'Leaking stack traces in 403 errors informs attackers about internal libraries and file paths. Clean, standardized error contracts protect operational security.',
          bn: '৪০৩ এররে স্ট্যাক ট্রেস দিলে আক্রমণকারী ভেতরের ফাইল পাথ জেনে যায়। পরিষ্কার স্ট্যান্ডার্ড এরর মেসেজ সিস্টেমকে সুরক্ষিত রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'abac-policies',
    title: {
      en: 'Attribute-Based Access Control (ABAC): Context, Environment & Temporal Rules',
      bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল (ABAC): কনটেক্সট, পরিবেশ এবং সময়ের নিয়ম'
    },
  },
};
