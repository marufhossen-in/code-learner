import type { Lesson } from '../../../lib/types';

export const BrokenAccessLesson: Lesson = {
  slug: 'broken-access',
  tech: 'owasp',
  title: {
    en: 'Broken Access Control: Defeating IDOR & Privilege Escalation',
    bn: 'ব্রোকেন অ্যাক্সেস কন্ট্রোল: আইডিওআর (IDOR) ও প্রিভিলেজ এস্কেলেশন প্রতিরোধ'
  },
  summary: {
    en: 'Master the architectural defenses against Broken Access Control (OWASP A01:2021), the number one web application security risk. Learn how Insecure Direct Object References (IDOR), vertical privilege escalation, and missing authorization checks permit unauthorized data exfiltration. Implement strict server-side ownership validation and default-deny policies. Inspect an executable Node.js authorization engine evaluating 4 client requests: 3 legitimate requests succeed, while 1 unauthorized IDOR probe is blocked with HTTP 403 Forbidden.',
    bn: 'ওয়েব অ্যাপ্লিকেশন নিরাপত্তার এক নম্বর প্রধান ঝুঁকি ব্রোকেন অ্যাক্সেস কন্ট্রোল (OWASP A01:2021) প্রতিহত করার কৌশল আয়ত্ত করুন। ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR), ভার্টিক্যাল প্রিভিলেজ এস্কেলেশন এবং অনুমোদন যাচাইয়ের ঘাটতি কীভাবে ডেটা ফাঁসের সুযোগ করে দেয় তা শিখুন। সার্ভার-সাইড ওনারশিপ ভ্যালিডেশন এবং ডিফল্ট-ডিনায় নীতি কার্যকর করুন। ৪ টি ক্লায়েন্ট রিকোয়েস্ট মূল্যায়নকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি বৈধ রিকোয়েস্ট সফলভাবে অনুমোদিত হয়, আর ১ টি অননুমোদিত আইডিওআর রিকোয়েস্ট HTTP 403 Forbidden দিয়ে বাতিল করা হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'why-broken-access-leads-owasp',
      text: {
        en: 'Broken Access Control: Why It Represents the #1 Threat in Modern Applications',
        bn: 'ব্রোকেন অ্যাক্সেস কন্ট্রোল: কেন এটি আধুনিক অ্যাপ্লিকেশনের শীর্ষ হুমকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build multi-user web applications, authentication only verifies who a user is. Access control, or authorization, dictates what that authenticated user is actually permitted to do. When developers forget to enforce ownership boundaries on every single API endpoint, users can tamper with parameters to access data belonging to others.',
        bn: 'মাল্টি-ইউজার ওয়েব অ্যাপ্লিকেশন তৈরির সময় প্রমাণীকরণ বা অথেনটিকেশন কেবল ব্যবহারকারীর পরিচয় নিশ্চিত করে। কিন্তু অ্যাক্সেস কন্ট্রোল বা অথরাইজেশন নির্ধারণ করে সেই ব্যবহারকারী কোন কোন কাজ করার অনুমতি পাবে। ডেভেলপাররা যদি প্রতিটি এপিআই এন্ডপয়েন্টে মালিকানা যাচাই করতে ভুলে যান, তবে ব্যবহারকারীরা প্যারামিটার পরিবর্তন করে অন্যের গোপন ডাটা হাতিয়ে নিতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The most infamous variant of broken access control is Insecure Direct Object Reference (IDOR). Consider an endpoint like /api/documents/101 that relies solely on the document ID supplied in the URL. If the server does not check whether the logged-in session owns that record, an attacker simply increments the ID to 102. This allows them to download another user private financial records without authorization.',
        bn: 'ব্রোকেন অ্যাক্সেস কন্ট্রোলের সবচেয়ে পরিচিত রূপ হলো ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR)। ধরুন /api/documents/101 এর মতো কোনো এন্ডপয়েন্ট শুধু ইউআরএলের আইডির ওপর নির্ভর করে। যদি সার্ভার যাচাই না করে যে লগইন করা সেশনটি ঐ রেকর্ডের মালিক কিনা, তবে আক্রমণকারী আইডি বাড়িয়ে 102 বানিয়ে ফেলে। এর মাধ্যমে সে অননুমোদিতভাবে আরেকজন ব্যবহারকারীর ব্যক্তিগত আর্থিক ফাইল ডাউনলোড করে নিতে পারে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Horizontal Privilege Escalation (IDOR)',
            bn: '১. হরাইজন্টাল প্রিভিলেজ এস্কেলেশন (IDOR)'
          },
          text: {
            en: 'Occurs when a user accesses resources belonging to another user with the same permission level (e.g. customer Alice accessing customer Bob private receipts by altering the receiptId in the URL).',
            bn: 'ঘটে যখন কোনো ব্যবহারকারী সমান প্রিভিলেজের অন্য কোনো ব্যবহারকারীর ডাটা দেখে ফেলে (যেমন অ্যালিস ইউআরএলের আইডি বদলে ববের ক্রয়ের রসিদ দেখে ফেলে)।'
          },
        },
        {
          title: {
            en: '2. Vertical Privilege Escalation',
            bn: '২. ভার্টিক্যাল প্রিভিলেজ এস্কেলেশন'
          },
          text: {
            en: 'Occurs when an unprivileged user accesses administrative functions (e.g. a regular member directly invoking /api/admin/delete-database or modifying their role field to "admin" in a JSON payload).',
            bn: 'ঘটে যখন কোনো সাধারণ ব্যবহারকারী অ্যাডমিন প্যানেলের ক্ষমতা পেয়ে যায় (যেমন সাধারণ ইউজার সরাসরি /api/admin/delete-database কল করে বা জেসন বডিতে রোল বদলে "admin" বানিয়ে ফেলে)।'
          },
        },
        {
          title: {
            en: '3. Enforce Server-Side Ownership Binding',
            bn: '৩. সার্ভার-সাইড মালিকানা যাচাই'
          },
          text: {
            en: 'Never query records using user-supplied primary keys alone. Always inject the verified session identity into database queries: SELECT * FROM documents WHERE id = ? AND owner_id = session.userId.',
            bn: 'কখনোই শুধু ব্যবহারকারীর পাঠানো আইডির ওপর নির্ভর করে কোয়েরি চালাবেন না। কোয়েরিতে সর্বদা সেশন থেকে প্রাপ্ত ইউজার আইডি যুক্ত রাখুন: WHERE id = ? AND owner_id = session.userId।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Access Control Policy Evaluation: 3 Permitted Requests vs 1 Blocked IDOR Probe',
        bn: 'অ্যাক্সেস কন্ট্রোল নীতি নিরীক্ষা: ৩ টি অনুমোদিত রিকোয়েস্ট বনাম ১ টি প্রতিহত আইডিওআর রিকোয়েস্ট'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Access control authorization architecture showing 3 allowed requests and 1 forbidden IDOR request">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">RBAC & IDOR AUTHORIZATION POLICY ENGINE (AUTHENTICATED USER: MINA [ID: 101])</text>
  
  <!-- Left Side: Inbound Resource Requests -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 CLIENT RESOURCE REQUESTS</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Request 1: GET /docs/1</text>
      <text x="12" y="36" fill="#ffffff" font-size="8">Resource: "Mina Project Notes"</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Owner: User 101 (Matches authenticated session)</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Request 2: GET /docs/3</text>
      <text x="12" y="104" fill="#ffffff" font-size="8">Resource: "Mina Quarterly Taxes"</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Owner: User 101 (Matches authenticated session)</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Request 3: GET /profile</text>
      <text x="12" y="172" fill="#ffffff" font-size="8">Resource: Authenticated User Settings</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Context: Tied directly to JWT session cookie</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Request 4: GET /docs/2 [IDOR PROBE]</text>
      <text x="12" y="240" fill="#ffffff" font-size="8">Resource: "Rafi Financial Statement"</text>
      <text x="12" y="254" fill="#fecaca" font-size="7.5">Owner: User 202 (Attacker attempts cross-user access!)</text>
    </g>
  </g>
  
  <!-- Right Side: Authorization Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">AUTHORIZATION DECISIONS: 3 ALLOWED | 1 FORBIDDEN</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PERMITTED [✓] (HTTP 200 OK)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Ownership verified: doc.ownerId === session.userId</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Payload dispatched to client browser</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">2. PERMITTED [✓] (HTTP 200 OK)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">Ownership verified: doc.ownerId === session.userId</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Payload dispatched to client browser</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">3. PERMITTED [✓] (HTTP 200 OK)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Session context resolution: Self-record read</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Profile data rendered securely</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">4. FORBIDDEN [✗ HTTP 403 BLOCKED]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">Ownership check failed: 202 !== 101</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">IDOR violation intercepted; security alert logged</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Identifiers in URLs never imply authorization: server-side ownership enforcement prevents IDOR exfiltration</text>
</svg>`,
      caption: {
        en: 'The access control engine inspects 4 client requests: 3 legitimate requests succeed, and 1 unauthorized IDOR probe is blocked with HTTP 403.',
        bn: 'অ্যাক্সেস কন্ট্রোল ইঞ্জিন ৪ টি ক্লায়েন্ট রিকোয়েস্ট পরীক্ষা করে: ৩ টি বৈধ রিকোয়েস্ট সফল হয় এবং ১ টি অননুমোদিত আইডিওআর রিকোয়েস্ট HTTP 403 দিয়ে প্রতিহত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'access-control-enforcement-code',
      text: {
        en: 'Building a Server-Side Access Control & IDOR Guard in Node.js',
        bn: 'Node.js-এ সার্ভার-সাইড অ্যাক্সেস কন্ট্রোল ও আইডিওআর গার্ড তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'access-control-guard.js',
      code: `// Deterministic Role-Based Access Control & IDOR Enforcement Engine
class AccessControlGuard {
  constructor(documentStore) {
    this.documents = documentStore;
  }

  // Authorize incoming HTTP request against session identity
  authorizeRequest(request) {
    const { sessionUser, path, resourceId } = request;

    // Route 1: Profile endpoint is implicitly scoped to the active session
    if (path === '/profile') {
      return {
        path,
        verdict: 'PERMITTED',
        httpCode: 200,
        explanation: \`Session verified for user \${sessionUser.username} (\${sessionUser.id})\`
      };
    }

    // Route 2: Document access requires explicit ownership verification
    if (path.startsWith('/docs/')) {
      const doc = this.documents[resourceId];

      if (!doc) {
        return {
          path,
          verdict: 'NOT_FOUND',
          httpCode: 404,
          explanation: \`Document \${resourceId} does not exist\`
        };
      }

      // Enforce strict ownership boundary
      if (doc.ownerId === sessionUser.id) {
        return {
          path,
          verdict: 'PERMITTED',
          httpCode: 200,
          explanation: \`Authorized: "\${doc.title}" is owned by user \${sessionUser.id}\`
        };
      } else {
        return {
          path,
          verdict: 'DENIED',
          httpCode: 403,
          explanation: \`IDOR Violation Blocked: Document belongs to user \${doc.ownerId}, not \${sessionUser.id}\`
        };
      }
    }
  }
}

// Mock database table with multi-tenant documents
const mockDatabase = {
  1: { id: 1, title: 'Mina Project Notes', ownerId: 101 },
  2: { id: 2, title: 'Rafi Financial Statement', ownerId: 202 },
  3: { id: 3, title: 'Mina Quarterly Taxes', ownerId: 101 }
};

const guard = new AccessControlGuard(mockDatabase);
const activeUser = { id: 101, username: 'mina', role: 'member' };

// 4 distinct client requests from Mina
const clientRequests = [
  { sessionUser: activeUser, path: '/docs/1', resourceId: 1 },
  { sessionUser: activeUser, path: '/docs/3', resourceId: 3 },
  { sessionUser: activeUser, path: '/profile', resourceId: null },
  { sessionUser: activeUser, path: '/docs/2', resourceId: 2 }
];

let allowedRequests = 0;
let deniedRequests = 0;

console.log('=== Access Control & IDOR Authorization Audit ===\\n');
clientRequests.forEach((req, index) => {
  const result = guard.authorizeRequest(req);

  if (result.verdict === 'PERMITTED') {
    allowedRequests++;
    console.log(\`[\${index + 1}] ALLOWED [✓]: \${result.path} -> HTTP \${result.httpCode}\`);
    console.log(\`    Detail: \${result.explanation}\\n\`);
  } else {
    deniedRequests++;
    console.log(\`[\${index + 1}] BLOCKED [✗]: \${result.path} -> HTTP \${result.httpCode}\`);
    console.log(\`    Detail: \${result.explanation}\\n\`);
  }
});

console.log('=== Authorization Audit Summary ===');
console.log('Total Requests Evaluated: ', clientRequests.length);
console.log('Legitimate Requests (Pass):', allowedRequests);
console.log('IDOR Probes Blocked (Fail):', deniedRequests);`,
      caption: {
        en: 'The access control guard tests 4 requests: 3 legitimate requests succeed, while 1 unauthorized IDOR probe is blocked with HTTP 403.',
        bn: 'অ্যাক্সেস কন্ট্রোল গার্ড ৪ টি রিকোয়েস্ট পরীক্ষা করে: ৩ টি বৈধ রিকোয়েস্ট সফল হয়, আর ১ টি অননুমোদিত আইডিওআর রিকোয়েস্ট HTTP 403 দিয়ে প্রতিহত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'UUIDs Are Not an Access Control Mechanism',
        bn: 'ইউইউআইডি (UUID) কোনো অ্যাক্সেস কন্ট্রোল ব্যবস্থা নয়'
      },
      text: {
        en: 'Some engineering teams attempt to solve IDOR by replacing sequential integers (e.g. /docs/1) with random UUIDv4 strings (e.g. /docs/f47ac10b-58cc-4372-a567-0e02b2c3d479). While UUIDs make enumeration harder, they represent "security through obscurity". If a UUID is leaked in an email, referer header, or browser history, any authenticated caller can access the document unless the server validates that the session user owns the record.',
        bn: 'অনেক দল ক্রমিক সংখ্যার বদলে র‍্যান্ডম UUIDv4 (যেমন /docs/f47ac10b...) ব্যবহার করে মনে করে আইডিওআর সমাধান হয়ে গেছে। ইউইউআইডি অনুমান করা কঠিন করলেও এটি নিরাপত্তার প্রকৃত বিকল্প নয়। কোনো ইমেইল বা ব্রাউজার হিস্ট্রির মাধ্যমে ইউইউআইডি একবার ফাঁস হলে যে কেউই ফাইলটিতে প্রবেশ করতে পারবে, যদি না সার্ভার সেশনের মাধ্যমে মালিকানা যাচাই করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-access-ex-1',
      kind: 'predict',
      topic: 'allowed-requests-count',
      question: {
        en: 'In the access control audit of the 4 client requests made by Mina, how many requests were verified as authorized and PERMITTED? (3). Type the number.',
        bn: 'মিনার ৪ টি রিকোয়েস্টের অ্যাক্সেস কন্ট্রোল নিরীক্ষায় সর্বমোট কয়টি রিকোয়েস্ট অনুমোদিত বলে প্রমাণিত হয়েছিল এবং PERMITTED মর্যাদা পেয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 requests were authorized.',
        bn: 'ঠিক ৩ টি রিকোয়েস্ট অনুমোদিত ছিল।'
      },
      explanation: {
        en: 'Three requests were permitted: /docs/1 (owned by Mina), /docs/3 (owned by Mina), and /profile (Mina session profile).',
        bn: '৩ টি রিকোয়েস্ট সফল হয়েছিল: /docs/1 (মিনার ফাইল), /docs/3 (মিনার ফাইল) এবং /profile (মিনার প্রোফাইল)।'
      },
    },
    {
      id: 'owasp-access-ex-2',
      kind: 'mcq',
      topic: 'idor-definition-and-impact',
      question: {
        en: 'What is an Insecure Direct Object Reference (IDOR), and what makes it dangerous?',
        bn: 'ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) কী এবং এটি কেন বিপজ্জনক?'
      },
      options: [
        {
          en: 'An application exposes an internal database key in an API URL and retrieves records directly based on that key without verifying whether the authenticated caller has permission to view or edit that specific object',
          bn: 'অ্যাপ্লিকেশন এপিআই ইউআরএলে সরাসরি ডাটাবেজ কি উন্মুক্ত করে এবং ব্যবহারকারীর ঐ অবজেক্ট দেখার অনুমতি আছে কিনা তা যাচাই না করেই সরাসরি ডাটা সরবরাহ করে থাকে',
        },
        {
          en: 'A network cable plugged into the wrong Ethernet wall port',
          bn: 'ভুল ইথারনেট পোর্টে লাগানো কোনো নেটওয়ার্ক ক্যাবল',
        },
        {
          en: 'A mechanical key that opens office storage closets',
          bn: 'অফিসের স্টোরেজ রুম খোলার কোনো ফিজিক্যাল চাবি',
        },
        {
          en: 'An image file with missing alt text descriptions',
          bn: 'অল্ট টেক্সট ছাড়া কোনো ছবির ফাইল',
        },
      ],
      answer: 0,
      hint: {
        en: 'IDOR fails to verify object ownership before returning data.',
        bn: 'IDOR ডাটা পাঠানোর আগে অবজেক্টের মালিকানা যাচাই করতে ব্যর্থ হয়।'
      },
      explanation: {
        en: 'IDOR allows attackers to harvest millions of records simply by writing a loop that iterates through sequential IDs.',
        bn: 'আইডিওআর থাকলে আক্রমণকারী একটি লুপ চালিয়ে মাত্র কয়েক মিনিটে হাজার হাজার ব্যবহারকারীর গোপন ডাটা চুরি করতে পারে।'
      },
    },
    {
      id: 'owasp-access-ex-3',
      kind: 'mcq',
      topic: 'vertical-privilege-escalation-defense',
      question: {
        en: 'How should an API backend protect administrative endpoints from Vertical Privilege Escalation?',
        bn: 'ভার্টিক্যাল প্রিভিলেজ এস্কেলেশন থেকে অ্যাডমিন এন্ডপয়েন্টগুলোকে সুরক্ষিত রাখতে ব্যাকএন্ডে কী ব্যবস্থা নেওয়া উচিত?'
      },
      options: [
        {
          en: 'Enforce server-side role and permission checks on every administrative route handler (e.g. requireRole("ADMIN")), ensuring unauthorized callers receive HTTP 403 Forbidden regardless of UI visibility',
          bn: 'প্রতিটি অ্যাডমিন রাউটে সার্ভার-সাইড রোল ও পারমিশন মিডলওয়্যার (যেমন requireRole("ADMIN")) কার্যকর করা, যাতে ফ্রন্টএন্ডে বাটন লুকানো থাকুক বা না থাকুক অননুমোদিত রিকোয়েস্টে সরাসরি HTTP 403 Forbidden ফেরত যায়',
        },
        {
          en: 'Hiding the administrator button using CSS display: none in HTML',
          bn: 'এইচটিএমএলে সিএসএস display: none ব্যবহার করে অ্যাডমিন বাটনটি লুকিয়ে রাখা',
        },
        {
          en: 'Changing the admin page background color to dark gray',
          bn: 'অ্যাডমিন পাতার ব্যাকগ্রাউন্ডের রঙ গাঢ় ধূসর রঙে বদলে দেওয়া',
        },
        {
          en: 'Asking users to promise they will not type admin URLs',
          bn: 'ব্যবহারকারীদের কাছে অঙ্গীকার নেওয়া যে তারা অ্যাডমিন ইউআরএল টাইপ করবে না',
        },
      ],
      answer: 0,
      hint: {
        en: 'Never rely on frontend UI hiding; enforce role checks on every server route.',
        bn: 'ফ্রন্টএন্ডের লুকানোর ওপর নির্ভর না করে প্রতিটি সার্ভার রুটে রোল যাচাই করুন।'
      },
      explanation: {
        en: 'Hiding buttons in CSS does not protect APIs. Attackers use curl or Postman to invoke API endpoints directly.',
        bn: 'সিএসএস দিয়ে বাটন লুকালে curl বা পোস্টম্যান দিয়ে সরাসরি এপিআই ডাকা আটকানো যায় না; সার্ভারেই যাচাই করতে হয়।'
      },
    },
    {
      id: 'owasp-access-ex-4',
      kind: 'predict',
      topic: 'denied-requests-count',
      question: {
        en: 'How many of the 4 client requests attempted an unauthorized IDOR access to another user data and were DENIED? (1). Type the number.',
        bn: '৪ টি ক্লায়েন্ট রিকোয়েস্টের মধ্যে সর্বমোট কয়টি রিকোয়েস্ট অন্য ব্যবহারকারীর ফাইলে অননুমোদিত আইডিওআর প্রবেশের চেষ্টা করেছিল এবং DENIED হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 request was an IDOR probe.',
        bn: 'কেবলমাত্র ১ টি রিকোয়েস্ট আইডিওআর আক্রমণ ছিল।'
      },
      explanation: {
        en: 'Only the request to /docs/2 was denied with HTTP 403 because document 2 belonged to user 202 (Rafi), not Mina.',
        bn: 'কেবলমাত্র /docs/2 রিকোয়েস্টটি HTTP 403 দিয়ে বাতিল হয়েছিল কারণ ২ নম্বর ফাইলটি ইউজার ২০২ (রাফি) এর ছিল, মিনার নয়।'
      },
    },
  ],
  quiz: {
    id: 'broken-access-quiz',
    title: {
      en: 'Broken Access Control & IDOR Defense Architecture Quiz',
      bn: 'ব্রোকেন অ্যাক্সেস কন্ট্রোল ও আইডিওআর প্রতিরক্ষা আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'owasp-acc-qz-1',
        kind: 'mcq',
        topic: 'cors-misconfiguration-data-leak',
        question: {
          en: 'How can a misconfigured Cross-Origin Resource Sharing (CORS) header lead to broken access control and cross-user data theft?',
          bn: 'ভুলভাবে কনফিগার করা ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS) হেডার কীভাবে অ্যাক্সেস কন্ট্রোল লঙ্ঘন করে অন্য ব্যবহারকারীর ডাটা চুরির সুযোগ দেয়?'
        },
        options: [
          {
            en: 'Setting Access-Control-Allow-Origin to dynamically reflect the attacker Origin header while setting Access-Control-Allow-Credentials: true allows malicious websites to read authenticated responses via user browser cookies',
            bn: 'আক্রমণকারীর অরিজিনকে স্বয়ংক্রিয়ভাবে রিফ্লেক্ট করে Access-Control-Allow-Credentials: true সেট করলে ক্ষতিকর ওয়েবসাইট ব্যবহারকারীর ব্রাউজার কুকি ব্যবহার করে গোপন তথ্য পড়ে নিতে পারে',
          },
          {
            en: 'By making fonts look blurry on high-resolution displays',
            bn: 'উচ্চ রেজোলিউশনের ডিসপ্লেতে ফন্টগুলো অস্পষ্ট দেখানোর মাধ্যমে',
          },
          {
            en: 'By playing music automatically whenever a browser opens',
            bn: 'ব্রাউজার খোলা মাত্রই স্বয়ংক্রিয়ভাবে গান বাজিয়ে ফেলার কারণে',
          },
          {
            en: 'By disabling keyboard shortcuts in web browsers',
            bn: 'ওয়েব ব্রাউজারের কীবোর্ড শর্টকাটগুলো অকেজো করে দেওয়ার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Reflecting arbitrary origins with credentials allows cross-origin data exfiltration.',
          bn: 'ক্রেডেনশিয়াল সহ যেকোনো অরিজিন অনুমোদন করলে বহিরাগত সাইট ডাটা চুরি করতে পারে।'
        },
        explanation: {
          en: 'Browsers block cross-origin reads by default. A loose CORS header overrides this protection, enabling malicious pages to fetch user data.',
          bn: 'ব্রাউজারের সেম-অরিজিন পলিসি অন্য সাইটকে ডাটা পড়তে দেয় না; ভুল CORS হেডার সেই সুরক্ষা ভেঙে দেয়।'
        },
      },
      {
        id: 'owasp-acc-qz-2',
        kind: 'mcq',
        topic: 'abac-vs-rbac-architecture',
        question: {
          en: 'When should an enterprise migrate from Role-Based Access Control (RBAC) to Attribute-Based Access Control (ABAC)?',
          bn: 'একটি এন্টারপ্রাইজ সিস্টেমের কখন রোল-ভিত্তিক (RBAC) থেকে অ্যাট্রিবিউট-ভিত্তিক (ABAC) অ্যাক্সেস কন্ট্রোলে যাওয়া উচিত?'
        },
        options: [
          {
            en: 'When authorization policies depend on dynamic context like resource ownership, tenant IDs, time-of-day, IP location, or department attributes rather than static user roles alone',
            bn: 'যখন অনুমোদন নীতিগুলো কেবল স্থির ইউজার রোলের ওপর নির্ভর না করে রিসোর্সের মালিকানা, টেন্যান্ট আইডি, দিনের সময়, আইপি লোকেশন বা বিভাগের মতো গতিশীল বৈশিষ্ট্যের ওপর নির্ভর করে',
          },
          {
            en: 'When the company purchases new office furniture',
            bn: 'কোম্পানি যখন নতুন অফিসের আসবাবপত্র কেনে',
          },
          {
            en: 'When employee salaries are increased by ten percent',
            bn: 'কর্মীদের বেতন যখন দশ শতাংশ বৃদ্ধি করা হয়',
          },
          {
            en: 'When computer monitors are upgraded to 4K resolution',
            bn: 'কম্পিউটার মনিটর যখন ফোর-কে (4K) রেজোলিউশনে আপগ্রেড করা হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'ABAC supports fine-grained contextual attributes like ownership and location.',
          bn: 'ABAC মালিকানা ও লোকেশনের মতো সূক্ষ্ম প্রাসঙ্গিক শর্তের ভিত্তিতে সিদ্ধান্ত নেয়।'
        },
        explanation: {
          en: 'RBAC causes role explosion (e.g. Doctor, Doctor-On-Duty, Doctor-Cardiology). ABAC evaluates attributes: user.dept === patient.dept && user.shift === active.',
          bn: 'RBAC-এ অসংখ্য রোল তৈরি হয়ে জটলা বাঁধে। ABAC ইউজার ও রিসোর্সের বিভিন্ন অ্যাট্রিবিউট মিলিয়ে নমনীয়ভাবে অনুমতি নির্ধারণ করে।'
        },
      },
      {
        id: 'owasp-acc-qz-3',
        kind: 'mcq',
        topic: 'mass-assignment-vulnerability',
        question: {
          en: 'What is a Mass Assignment (Over-Posting) vulnerability, and how does it relate to broken access control?',
          bn: 'ম্যাস অ্যাসাইনমেন্ট (Mass Assignment) দুর্বলতা কী এবং এটি কীভাবে ব্রোকেন অ্যাক্সেস কন্ট্রোলের সাথে সম্পর্কিত?'
        },
        options: [
          {
            en: 'An API automatically binds all client request body fields directly to internal database model objects (e.g. User.update(req.body)), allowing an attacker to inject privileged properties like {"isAdmin": true, "role": "admin"}',
            bn: 'এপিআই যখন ক্লায়েন্টের পাঠানো জেসন বডির সমস্ত ফিল্ড কোনো ফিল্টারিং ছাড়াই সরাসরি ডাটাবেজে আপডেট করে (যেমন User.update(req.body)), যার সুযোগ নিয়ে আক্রমণকারী {"isAdmin": true} পাঠিয়ে নিজেকে অ্যাডমিন বানিয়ে ফেলে',
          },
          {
            en: 'A school homework assignment that is too long for students to complete',
            bn: 'স্কুলের কোনো বাড়ির কাজ যা ছাত্রদের জন্য অনেক বেশি দীর্ঘ',
          },
          {
            en: 'A postal service delivering mail to the wrong city',
            bn: 'ডাক বিভাগ ভুল শহরে চিঠি পৌঁছে দেওয়া সংক্রান্ত কোনো ঘটনা',
          },
          {
            en: 'A computer virus that changes the font style of text documents',
            bn: 'কম্পিউটার ভাইরাস যা সমস্ত ডকুমেন্টের ফন্ট পরিবর্তন করে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Mass assignment binds raw request bodies to database models without whitelisting.',
          bn: 'অনুমোদিত ফিল্ডের তালিকা ছাড়া সরাসরি রিকোয়েস্ট বডি ডাটাবেজে বসালে এই ঝুঁকি হয়।'
        },
        explanation: {
          en: 'Mitigate mass assignment using strict schema validation (Zod, Joi) or DTOs that explicitly whitelist allowable client fields (e.g. name, email only).',
          bn: 'Zod বা DTO ব্যবহার করে শুধু নির্দিষ্ট ফিল্ড (যেমন নাম, ইমেইল) গ্রহণের অনুমতি দিয়ে এই আক্রমণ বন্ধ করা হয়।'
        },
      },
      {
        id: 'owasp-acc-qz-4',
        kind: 'mcq',
        topic: 'deny-by-default-architecture',
        question: {
          en: 'What does the "Deny by Default" architectural principle dictate for web API routes and resources?',
          bn: 'ওয়েব এপিআই রাউট এবং রিসোর্সের ক্ষেত্রে "ডিফল্ট-ডিনায়" (Deny by Default) স্থাপত্য নীতিটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'Every resource is inaccessible by default; access is granted only when an explicit, verified authorization rule matches the authenticated identity and resource permissions',
            bn: 'ডিফল্টভাবে সমস্ত ফাইল বা এন্ডপয়েন্টে প্রবেশাধিকার সম্পূর্ণ বন্ধ থাকবে; কেবল সুনির্দিষ্ট ও যাচাইকৃত অনুমোদন নীতি মিলে গেলেই প্রবেশাধিকার দেওয়া হবে',
          },
          {
            en: 'The server denies internet access to all users during night hours',
            bn: 'রাতের বেলা সার্ভার সমস্ত ব্যবহারকারীর ইন্টারনেট সংযোগ বন্ধ করে দেবে',
          },
          {
            en: 'The database deletes all user accounts once every month',
            bn: 'ডাটাবেজ প্রতি মাসে একবার সমস্ত ব্যবহারকারীর অ্যাকাউন্ট মুছে ফেলবে',
          },
          {
            en: 'Employees must fill out paper forms before opening web browsers',
            bn: 'ব্রাউজার খোলার আগে কর্মীদের কাগজের আবেদনপত্র পূরণ করতে হবে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Deny by default assumes no permission exists unless explicitly granted.',
          bn: 'ডিফল্ট-ডিনায় নীতিতে কোনো অনুমতি আগে থেকে ধরে নেওয়া হয় না।'
        },
        explanation: {
          en: 'Allow-by-default systems fail open: if a developer creates a new route and forgets to add security middleware, it becomes publicly accessible.',
          bn: 'ডিফল্ট-অনুমতি থাকলে নতুন রাউটে মিডলওয়্যার যোগ করতে ভুলে গেলেই তা সবার জন্য উন্মুক্ত হয়ে মারাত্মক বিপদ ডেকে আনে।'
        },
      },
    ],
  },
  next: {
    slug: 'xss-owasp',
    title: {
      en: 'Cross-Site Scripting (XSS): Sanitization, CSP & Defense',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): স্যানিটাইজেশন, সিএসপি ও প্রতিরক্ষা'
    },
  },
};
