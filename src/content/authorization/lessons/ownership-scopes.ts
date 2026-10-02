import type { Lesson } from '../../../lib/types';

export const OwnershipScopesLesson: Lesson = {
  slug: 'ownership-scopes',
  tech: 'authorization',
  title: {
    en: 'Resource Ownership & Scopes: Preventing Insecure Direct Object References (IDOR)',
    bn: 'রিসোর্স মালিকানা ও স্কোপ: ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) প্রতিরোধ'
  },
  summary: {
    en: 'Eliminate one of the most widespread vulnerabilities in modern web applications: Insecure Direct Object References (IDOR). Understand why checking broad role permissions alone fails when multiple users share the same role. Learn how to bind access to resource ownership, implement multi-tenant scoping at the database query layer, and allow system stewards and administrators supervised override capabilities without compromising tenant isolation.',
    bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনের অন্যতম মারাত্মক দুর্বলতা ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) দূর করুন। একই রোলে একাধিক ব্যবহারকারী থাকলে কেন কেবল সাধারণ রোল যাচাই যথেষ্ট নয় তা বুঝুন। রিসোর্স মালিকানার সাথে এক্সেস বেঁধে রাখা, ডাটাবেজ কোয়েরির স্তরে মাল্টি-টেন্যান্ট স্কোপ প্রয়োগ এবং টেন্যান্ট নিরাপত্তা নষ্ট না করেই সিস্টেম অ্যাডমিনদের নিয়ন্ত্রিত তদারকির সুযোগ তৈরি করতে শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-idor-vulnerability-trap',
      text: {
        en: 'The Fatal Flaw of Role-Only Authorization: The IDOR Vulnerability',
        bn: 'শুধু রোল যাচাইয়ের মারাত্মক ত্রুটি: IDOR নিরাপত্তা ঝুঁকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Imagine an application where users can edit documents. The developer writes a permission check verifying that the caller has the role "editor". If Mina creates Document d1 and Rafi creates Document d2, both users share the identical role of "editor". If Sara (another editor) sends an HTTP request updating Document d1 (PUT /api/documents/d1), a system checking only roles will allow Sara to overwrite Mina private document! This catastrophic flaw is known as an Insecure Direct Object Reference (IDOR).',
        bn: 'কল্পনা করুন এমন একটি সিস্টেম যেখানে ব্যবহারকারীরা ডকুমেন্ট সম্পাদনা করতে পারেন। ডেভেলপার কোডে শুধু এটি যাচাই করলেন যে ব্যবহারকারীর রোল "editor" কি না। এখন মিনা তৈরি করল d1 ডকুমেন্ট এবং রাফি তৈরি করল d2 ডকুমেন্ট, অথচ দুজনের পদবীই কিন্তু "editor"। এখন সারা (আরেকজন এডিটর) যদি d1 ডকুমেন্টে পরিবর্তনের রিকোয়েস্ট পাঠায় ( PUT /api/documents/d1 ), তবে শুধু রোল যাচাই করা সিস্টেম সারাকে মিনার গোপন ডকুমেন্ট পরিবর্তন করার সুযোগ দিয়ে দেবে! এই মারাত্মক ত্রুটিটিকেই বলা হয় ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR)।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To prevent IDOR, authorization must be object-aware: it must verify not only WHAT action is attempted, but precisely WHO owns the specific targeted resource. Every resource fetch or modification must enforce ownership scopes at the data layer.',
        bn: 'IDOR রোধ করতে হলে অথরাইজেশনকে অবজেক্ট-সচেতন হতে হবে: কেবল কী কাজ করা হচ্ছে তা দেখলেই চলবে না, উদ্দিষ্ট সুনির্দিষ্ট তথ্যের আসল মালিক কে তাও নিশ্চিত করতে হবে। প্রতিটি তথ্য দেখা বা পরিবর্তনের সময় ডাটা স্তরে মালিকানার সীমানা বা স্কোপ কঠোরভাবে প্রয়োগ করতে হবে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Resource Ownership Association',
            bn: '১. রিসোর্সের মালিকানা নির্ধারণ'
          },
          text: {
            en: 'Every database record stores an immutable owner ID (ownerId) and tenant identifier (orgId) assigned upon creation.',
            bn: 'ডাটাবেজের প্রতিটি রেকর্ডে তৈরির মুহূর্তেই অপরিবর্তনীয় মালিক আইডি (ownerId) এবং প্রতিষ্ঠান আইডি (orgId) স্থায়ীভাবে সংরক্ষণ করা হয়।'
          },
        },
        {
          title: {
            en: '2. Identity Context Extraction',
            bn: '২. ব্যবহারকারীর পরিচয় সংগ্রহ'
          },
          text: {
            en: 'The application extracts the authenticated user ID and assigned roles from the verified session or token.',
            bn: 'অ্যাপ্লিকেশনটি যাচাইকৃত সেশন বা টোকেন থেকে ব্যবহারকারীর আইডি এবং বরাদ্দকৃত রোল সংগ্রহ করে।'
          },
        },
        {
          title: {
            en: '3. Ownership & Steward Evaluation',
            bn: '৩. মালিকানা এবং তদারকি অধিকার যাচাই'
          },
          text: {
            en: 'The authorization layer verifies that either user.id === resource.ownerId, OR the user possesses an administrative steward role with explicit cross-tenant override rights.',
            bn: 'অথরাইজেশন স্তরটি যাচাই করে যে ব্যবহারকারী নিজেই তথ্যের মালিক (user.id === resource.ownerId), অথবা ব্যবহারকারী এমন একজন অ্যাডমিন যার বিশেষ তদারকি ক্ষমতা রয়েছে।'
          },
        },
        {
          title: {
            en: '4. Database Query Scoping',
            bn: '৪. ডাটাবেজ কোয়েরি স্কোপিং'
          },
          text: {
            en: 'Rather than fetching by raw ID alone, queries append ownership filters (e.g. WHERE id = :docId AND owner_id = :userId), making IDOR impossible at the database engine level.',
            bn: 'সরাসরি শুধু আইডি দিয়ে খোঁজার বদলে কোয়েরির সাথে মালিকানার শর্ত জুড়ে দেওয়া হয় ( যেমন WHERE id = :docId AND owner_id = :userId ), যা ডাটাবেজ ইঞ্জিন স্তরেই IDOR অসম্ভব করে তোলে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Resource Ownership Enforcement: 4 Requests Evaluated',
        bn: 'রিসোর্স মালিকানা যাচাই: ৪ টি রিকোয়েস্টের মূল্যায়ন'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Ownership scope evaluation showing 4 requests with 3 passing and 1 stranger blocked by IDOR protection">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">OBJECT-LEVEL ACCESS CONTROL &amp; IDOR MITIGATION</text>
  
  <!-- Left Side: Document Store State -->
  <g transform="translate(40, 55)">
    <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="125" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">DATABASE OBJECT REGISTRY</text>
    
    <g transform="translate(15, 45)">
      <rect width="220" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="10" y="22" fill="#6ee7b7" font-size="9" font-weight="bold">DOCUMENT d1</text>
      <text x="10" y="42" fill="#cbd5e1" font-size="8.5">• title: "Mina Finances"</text>
      <text x="10" y="58" fill="#38bdf8" font-size="8.5">• ownerId: "usr_mina"</text>
      
      <rect y="85" width="220" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="10" y="22" fill="#6ee7b7" font-size="9" font-weight="bold">DOCUMENT d2</text>
      <text x="10" y="42" fill="#cbd5e1" font-size="8.5">• title: "Rafi Roadmap"</text>
      <text x="10" y="58" fill="#38bdf8" font-size="8.5">• ownerId: "usr_rafi"</text>
      
      <rect y="170" width="220" height="105" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="110" y="195" fill="#6ee7b7" font-size="9.5" font-weight="bold" text-anchor="middle">OWNERSHIP RULE</text>
      <text x="10" y="218" fill="#cbd5e1" font-size="8">allow = (user.id == ownerId)</text>
      <text x="10" y="236" fill="#cbd5e1" font-size="8">     || (user.role == 'admin');</text>
      <text x="10" y="258" fill="#34d399" font-size="8">Strangers blocked instantly!</text>
    </g>
  </g>
  
  <!-- Right Side: 4 Requests Evaluated -->
  <g transform="translate(310, 55)">
    <rect width="490" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="245" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">4 RESOURCE MODIFICATION REQUESTS</text>
    
    <!-- Req 1: Mina -> d1 -->
    <g transform="translate(15, 45)">
      <rect width="460" height="48" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9.5" font-weight="bold">REQ 1: Mina (editor) → PUT /documents/d1</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Target: d1 (owner: usr_mina) | Caller: usr_mina → <tspan fill="#34d399" font-weight="bold">PASS (Own Document) ✓</tspan></text>
    </g>
    
    <!-- Req 2: Rafi -> d2 -->
    <g transform="translate(15, 105)">
      <rect width="460" height="48" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9.5" font-weight="bold">REQ 2: Rafi (editor) → PUT /documents/d2</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Target: d2 (owner: usr_rafi) | Caller: usr_rafi → <tspan fill="#34d399" font-weight="bold">PASS (Own Document) ✓</tspan></text>
    </g>
    
    <!-- Req 3: Admin -> d1 -->
    <g transform="translate(15, 165)">
      <rect width="460" height="48" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="20" fill="#6ee7b7" font-size="9.5" font-weight="bold">REQ 3: Admin (admin) → PUT /documents/d1</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Target: d1 (owner: usr_mina) | Caller: Administrator → <tspan fill="#34d399" font-weight="bold">PASS (System Steward) ✓</tspan></text>
    </g>
    
    <!-- Req 4: Sara -> d1 (Blocked) -->
    <g transform="translate(15, 225)">
      <rect width="460" height="60" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
      <text x="15" y="20" fill="#fca5a5" font-size="9.5" font-weight="bold">REQ 4: Sara (editor) → PUT /documents/d1 (ATTACK)</text>
      <text x="15" y="38" fill="#cbd5e1" font-size="8.5">Target: d1 (owner: usr_mina) | Caller: usr_sara → <tspan fill="#ef4444" font-weight="bold">FORBIDDEN (HTTP 403) ✗</tspan></text>
      <text x="15" y="52" fill="#fca5a5" font-size="7.5">IDOR BLOCKED: Sara is an editor, but does NOT own document d1!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Results: 4 requests evaluated → 3 granted PASS (2 owners, 1 steward), and 1 blocked by IDOR protection</text>
</svg>`,
      caption: {
        en: 'The ownership scope engine evaluates 4 requests: Mina, Rafi, and the Admin pass, while Sara unauthorized overwrite attempt on d1 is blocked.',
        bn: 'মালিকানা স্কোপ ইঞ্জিনটি ৪ টি রিকোয়েস্ট যাচাই করে: মিনা, রাফি এবং অ্যাডমিন অনুমতি পায়, আর d1-এ সারার অননুমোদিত পরিবর্তনের চেষ্টা আটকে দেওয়া হয়।'
      },
    },
    {
      type: 'heading',
      id: 'ownership-scope-code',
      text: {
        en: 'Building an Object-Level Ownership Verifier in Node.js',
        bn: 'Node.js-এ অবজেক্ট-লেভেল মালিকানা যাচাইকারী তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect this implementation demonstrating object-level ownership verification and SQL query scoping. Notice how it prevents unauthorized access to documents owned by other users, while allowing designated administrators to perform supervised system stewardship.',
        bn: 'অবজেক্ট-লেভেল মালিকানা যাচাই এবং এসকিউএল কোয়েরি স্কোপিংয়ের বাস্তবায়নটি দেখুন। লক্ষ্য করুন কীভাবে এটি অন্যের তৈরি ডকুমেন্টে অননুমোদিত এক্সেস আটকে দেয় এবং একই সাথে অনুমোদিত সিস্টেম অ্যাডমিনকে বিশেষ তদারকির সুযোগ দেয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'ownership-scope-guard.js',
      code: `// Enterprise Object-Level Access Control & IDOR Defense Engine
class DocumentService {
  constructor() {
    this.documents = new Map([
      ['d1', { id: 'd1', title: 'Mina Financial Report', ownerId: 'usr_mina' }],
      ['d2', { id: 'd2', title: 'Rafi Roadmap Plan', ownerId: 'usr_rafi' }]
    ]);
  }

  // Scoped modification: Enforces ownership or administrator steward rights
  updateDocument(user, documentId, newTitle) {
    const doc = this.documents.get(documentId);

    // Guard 1: Record existence
    if (!doc) {
      return { status: 404, error: 'Document ' + documentId + ' not found' };
    }

    // Guard 2: Object-level ownership check
    const isOwner = doc.ownerId === user.id;
    const isSteward = user.role === 'admin';

    if (!isOwner && !isSteward) {
      return {
        status: 403,
        error: '[IDOR BLOCKED] User ' + user.name + ' (' + user.id + ') is not permitted to modify ' + documentId + ' owned by ' + doc.ownerId
      };
    }

    // Update state upon valid ownership
    doc.title = newTitle;
    return {
      status: 200,
      success: true,
      message: 'Document ' + documentId + ' successfully updated by ' + user.name
    };
  }
}

const service = new DocumentService();

const users = {
  mina: { id: 'usr_mina', name: 'Mina', role: 'editor' },
  rafi: { id: 'usr_rafi', name: 'Rafi', role: 'editor' },
  admin: { id: 'usr_admin', name: 'Admin', role: 'admin' },
  sara: { id: 'usr_sara', name: 'Sara', role: 'editor' }
};

// 4 Evaluation Requests
const evaluationRequests = [
  { id: 1, user: users.mina, docId: 'd1', title: 'Mina Revised Q3 Report' },
  { id: 2, user: users.rafi, docId: 'd2', title: 'Rafi Revised Roadmap' },
  { id: 3, user: users.admin, docId: 'd1', title: 'Admin Formatted Report' },
  { id: 4, user: users.sara, docId: 'd1', title: 'Sara Unauthorized Vandalism' }
];

let passedCount = 0;
let failedCount = 0;

console.log('=== Evaluating 4 Resource Ownership Requests ===');
evaluationRequests.forEach(req => {
  const result = service.updateDocument(req.user, req.docId, req.title);
  if (result.status === 200) {
    passedCount += 1;
    console.log('Request ' + req.id + ': ' + req.user.name + ' on ' + req.docId + ' -> PASS (HTTP 200)');
  } else {
    failedCount += 1;
    console.log('Request ' + req.id + ': ' + req.user.name + ' on ' + req.docId + ' -> FAIL (' + result.status + ': ' + result.error + ')');
  }
});

console.log('\\n=== Verification Summary ===');
console.log('Total Requests: ' + evaluationRequests.length);
console.log('Passed: ' + passedCount);
console.log('Blocked by IDOR: ' + failedCount);`,
      caption: {
        en: 'The ownership engine validates 4 modification requests: 3 succeed (2 owners, 1 admin), and 1 stranger request is blocked with 403.',
        bn: 'মালিকানা ইঞ্জিনটি ৪ টি পরিবর্তনের অনুরোধ যাচাই করে: ৩ টি সফল হয় (২ জন মালিক, ১ জন অ্যাডমিন) এবং ১ টি অননুমোদিত অনুরোধ ৪০৩ দিয়ে আটকে দেওয়া হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Database Query Scoping: The Universal Anti-IDOR Pattern',
        bn: 'ডাটাবেজ কোয়েরি স্কোপিং: সার্বজনীন IDOR প্রতিরোধ প্যাটার্ন'
      },
      text: {
        en: 'The most bulletproof way to eradicate IDOR vulnerabilities in multi-tenant SaaS applications is Database Query Scoping. Never execute SELECT * FROM invoices WHERE id = :id. Instead, always append the tenant context: SELECT * FROM invoices WHERE id = :id AND (owner_id = :userId OR org_id = :orgId). When you scope queries at the SQL level, even if an attacker guesses valid IDs across the entire universe, the database simply returns zero rows, preventing data leaks completely.',
        bn: 'মাল্টি-টেন্যান্ট সফটওয়্যারে IDOR দুর্বলতা নির্মূল করার সবচেয়ে কার্যকর কৌশল হলো ডাটাবেজ কোয়েরি স্কোপিং। কখনোই কেবল SELECT * FROM invoices WHERE id = :id চালাবেন না। এর পরিবর্তে সর্বদা কোয়েরির সাথে বর্তমান ব্যবহারকারীর আইডি যুক্ত করুন: SELECT * FROM invoices WHERE id = :id AND (owner_id = :userId OR org_id = :orgId)। এসকিউএল স্তরে এই নিয়ম বেঁধে দিলে আক্রমণকারী যেকোনো সঠিক আইডি অনুমান করলেও ডাটাবেজ কোনো তথ্য খুঁজে পাবে না, ফলে তথ্য ফাঁসের ঝুঁকি চিরতরে বন্ধ হবে।'
      },
    },
  ],
  exercises: [
    {
      id: 'own-scp-ex-1',
      kind: 'predict',
      topic: 'ownership-requests-blocked-count',
      question: {
        en: 'Out of the 4 resource modification requests evaluated in this ownership demonstration, how many requests were blocked by the IDOR guard? (1). Type the number.',
        bn: 'এই মালিকানা পরীক্ষায় মূল্যায়িত ৪ টি রিসোর্স পরিবর্তনের অনুরোধের মধ্যে কয়টি অনুরোধকে IDOR গার্ড দ্বারা আটকে দেওয়া হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 request (Sara trying to modify d1) was blocked.',
        bn: 'কেবল ১ টি অনুরোধ (d1-এ সারার পরিবর্তনের চেষ্টা) আটকে দেওয়া হয়েছিল।'
      },
      explanation: {
        en: 'Request 4 from Sara was blocked with 403 Forbidden because Sara was not the owner of document d1 and did not have an admin role.',
        bn: 'সারার ৪ নম্বর অনুরোধটি ৪০৩ ফরবিডেন দিয়ে আটকে দেওয়া হয়েছিল কারণ সারা d1 ডকুমেন্টের মালিক ছিলেন না এবং তার কোনো অ্যাডমিন পদবীও ছিল না।'
      },
    },
    {
      id: 'own-scp-ex-2',
      kind: 'mcq',
      topic: 'idor-root-cause-in-role-systems',
      question: {
        en: 'Why do Role-Based Access Control checks fail to prevent Insecure Direct Object References (IDOR) on their own?',
        bn: 'কেবল রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) একা কেন ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) প্রতিরোধ করতে পারে না?'
      },
      options: [
        {
          en: 'Because RBAC only checks whether a user holds a generic role (e.g. "editor"), but completely ignores whether the authenticated user owns or is authorized for the specific record identifier being modified',
          bn: 'কারণ RBAC কেবল ব্যবহারকারীর সাধারণ পদবী বা রোল ( যেমন "editor" ) পরীক্ষা করে, কিন্তু ব্যবহারকারী আসলেই সেই নির্দিষ্ট তথ্যের মালিক কি না তা সম্পূর্ণ উপেক্ষা করে',
        },
        {
          en: 'Because RBAC causes network routers to delete twenty percent of network traffic',
          bn: 'কারণ RBAC নেটওয়ার্ক রাউটারকে বিশ শতাংশ নেটওয়ার্ক ট্রাফিক মুছে ফেলতে বাধ্য করে',
        },
        {
          en: 'Because computer keyboards fail to type the letters I, D, O, and R simultaneously',
          bn: 'কারণ কম্পিউটারের কিবোর্ডে একই সাথে I, D, O, এবং R অক্ষরগুলো টাইপ করা যায় না',
        },
        {
          en: 'Because web browser windows automatically close when multiple users exist',
          bn: 'কারণ একাধিক ব্যবহারকারী থাকলে ওয়েব ব্রাউজারের উইন্ডো নিজে থেকেই বন্ধ হয়ে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Roles check generic powers; ownership checks specific object tenancy.',
        bn: 'রোল সাধারণ ক্ষমতা দেখে; আর মালিকানা সুনির্দিষ্ট তথ্যের অধিকার যাচাই করে।'
      },
      explanation: {
        en: 'Two different users can both be "editors". If authorization only checks the "editor" role, either editor can modify the other private files without ownership checks.',
        bn: 'দুজন ভিন্ন ব্যবহারকারীই "editor" হতে পারেন। মালিকানা না দেখলে একজন এডিটর অন্য এডিটরের ব্যক্তিগত ফাইলে অবৈধ হস্তক্ষেপ করতে পারেন।'
      },
    },
    {
      id: 'own-scp-ex-3',
      kind: 'mcq',
      topic: 'database-query-scoping-defense',
      question: {
        en: 'How does Database Query Scoping prevent IDOR vulnerabilities even when attackers enumerate sequential record IDs?',
        bn: 'আক্রমণকারীরা ক্রমানুসারে আইডি অনুমান করলেও ডাটাবেজ কোয়েরি স্কোপিং কীভাবে IDOR দুর্বলতা প্রতিহত করে?'
      },
      options: [
        {
          en: 'By appending ownership filters directly to database queries (e.g. WHERE id = :id AND owner_id = :userId), ensuring that if an attacker queries another user record ID, the database returns zero rows rather than leaking private records',
          bn: 'ডাটাবেজ কোয়েরির সাথে সরাসরি মালিকানার ফিল্টার যুক্ত করে ( যেমন WHERE id = :id AND owner_id = :userId ), যার ফলে আক্রমণকারী অন্যের রেকর্ড আইডি দিলেও ডাটাবেজ কোনো তথ্য খুঁজে না পেয়ে শূন্য রো ফেরত দেয়',
        },
        {
          en: 'By turning off the electricity in the office building at night',
          bn: 'রাতে অফিসের ভবনের বিদ্যুৎ সংযোগ সম্পূর্ণ বন্ধ করে দেওয়ার মাধ্যমে',
        },
        {
          en: 'By making computer cooling fans rotate at maximum speed',
          bn: 'কম্পিউটারের কুলিং ফ্যানকে সর্বোচ্চ গতিতে ঘুরতে বাধ্য করার মাধ্যমে',
        },
        {
          en: 'By formatting all database text into capital cursive letters',
          bn: 'ডাটাবেজের সমস্ত লেখাকে বড় হাতের ক্যালিগ্রাফি ফন্টে রূপান্তর করার মাধ্যমে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Scoping queries at the database layer makes unauthorized rows invisible.',
        bn: 'ডাটাবেজের স্তরে কোয়েরি ফিল্টার করলে অন্যের তথ্য আক্রমণকারীর চোখে সম্পূর্ণ অদৃশ্য থাকে।'
      },
      explanation: {
        en: 'Query scoping enforces multi-tenant boundaries at the SQL level. Unauthorized records are never loaded into application memory.',
        bn: 'কোয়েরি স্কোপিং এসকিউএল স্তরেই নিরাপত্তা সীমানা নিশ্চিত করে, ফলে অননুমোদিত তথ্য কখনো মেমরিতে লোডই হয় না।'
      },
    },
    {
      id: 'own-scp-ex-4',
      kind: 'predict',
      topic: 'ownership-requests-passed-count',
      question: {
        en: 'Out of the 4 resource modification requests evaluated in this ownership demonstration, how many requests were granted HTTP 200 OK access? (3). Type the number.',
        bn: 'এই মালিকানা পরীক্ষায় মূল্যায়িত ৪ টি রিসোর্স পরিবর্তনের অনুরোধের মধ্যে কয়টি অনুরোধ সফলভাবে HTTP ২০০ ওকে অনুমোদন পেয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: '3 requests (Mina, Rafi, and Admin) were authorized.',
        bn: '৩ টি অনুরোধ (মিনা, রাফি এবং অ্যাডমিন) সফলভাবে অনুমোদিত হয়েছিল।'
      },
      explanation: {
        en: 'Mina and Rafi passed as legitimate owners of d1 and d2 respectively, and the Admin passed as an authorized system steward.',
        bn: 'মিনা এবং রাফি যথাক্রমে d1 ও d2-এর বৈধ মালিক হিসেবে এবং অ্যাডমিন তদারককারী হিসেবে পাস করায় মোট ৩ টি অনুরোধ সফল হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'ownership-scopes-quiz',
    title: {
      en: 'Resource Ownership & IDOR Protection Quiz',
      bn: 'রিসোর্স মালিকানা ও IDOR সুরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'own-scp-qz-1',
        kind: 'mcq',
        topic: 'uuid-vs-sequential-ids-myth',
        question: {
          en: 'Why is replacing sequential integer IDs (1, 2, 3) with random UUIDs (v4) helpful, yet NOT a sufficient security defense against IDOR on its own?',
          bn: 'ধারাবাহিক পূর্ণসংখ্যা আইডির (১, ২, ৩) বদলে র্যান্ডম UUID (v4) ব্যবহার করা সহায়ক হলেও কেন এটি একা IDOR প্রতিরোধের জন্য যথেষ্ট নয়?'
        },
        options: [
          {
            en: 'UUIDs prevent sequential enumeration guessing, but if an attacker obtains a valid UUID (via logs, referer headers, shared links, or brute-force APIs), a system lacking ownership verification will still grant unauthorized access',
            bn: 'UUID সহজে অনুমান করা ঠেকায় ঠিকই, কিন্তু আক্রমণকারী কোনোভাবে একটি বৈধ UUID পেয়ে গেলে ( লগ, রেফারার হেডার বা শেয়ার করা লিংকের মাধ্যমে ) মালিকানা যাচাই না থাকা সিস্টেম তাকে অননুমোদিত এক্সেস দিয়েই দেবে',
          },
          {
            en: 'Because UUIDs consume ten times more physical electricity on computer microchips',
            bn: 'কারণ কম্পিউটারের মাইক্রোচিপে UUID দশ গুণ বেশি বিদ্যুৎ খরচ করায়',
          },
          {
            en: 'Because operating systems refuse to store UUIDs inside database tables',
            bn: 'কারণ অপারেটিং সিস্টেম ডাটাবেজ টেবিলে UUID সংরক্ষণ করতে অস্বীকৃতি জানায়',
          },
          {
            en: 'Because UUIDs make computer sound speakers play static noise constantly',
            bn: 'কারণ UUID এর ব্যবহারের ফলে কম্পিউটারের স্পিকারে সবসময় শোঁ শোঁ শব্দ হতে থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Obscurity is not authorization. Always enforce ownership checks regardless of ID format.',
          bn: 'গোপনীয়তা কোনো নিরাপত্তা নয়। আইডির ধরন যাই হোক, সর্বদা মালিকানা যাচাই নিশ্চিত করুন।'
        },
        explanation: {
          en: 'UUIDs are unguessable, but not secret. Leaked UUIDs will be abused if the backend relies on ID secrecy rather than true ownership verification.',
          bn: 'UUID অনুমান করা কঠিন হলেও গোপন নয়। ব্যাকএন্ডে মালিকানা যাচাই না থাকলে ফাঁস হওয়া UUID দিয়ে যে কেউ তথ্য চুরি করতে পারে।'
        },
      },
      {
        id: 'own-scp-qz-2',
        kind: 'mcq',
        topic: 'steward-override-pattern',
        question: {
          en: 'How should applications architect administrative "steward" overrides without compromising tenant security boundaries?',
          bn: 'টেন্যান্টের নিরাপত্তা সীমানা নষ্ট না করেই কীভাবে অ্যাডমিনিস্ট্রেটিভ "তদারকি" (Steward Override) অধিকার আর্কিটেকচার করা উচিত?'
        },
        options: [
          {
            en: 'Explicitly code administrator exceptions into the authorization rule (e.g. isOwner || isAdmin) and log every administrative cross-tenant modification into a tamper-proof audit trail for regulatory compliance',
            bn: 'অথরাইজেশন নিয়মের ভেতরে স্পষ্টভাবে অ্যাডমিনের ব্যতিক্রম উল্লেখ করুন ( যেমন isOwner || isAdmin ) এবং প্রতিটি প্রশাসনিক হস্তক্ষেপের তথ্য ট্যাম্পার-প্রুফ অডিট ট্রেইলে লিপিবদ্ধ করে রাখুন',
          },
          {
            en: 'Disable all passwords for administrators so they can log into any account with one click',
            bn: 'অ্যাডমিনদের সব পাসওয়ার্ড তুলে দেওয়া যাতে তারা এক ক্লিকেই যেকোনো অ্যাকাউন্টে ঢুকতে পারেন',
          },
          {
            en: 'Allow any user whose name contains the letter A to edit all documents in the database',
            bn: 'নামের মধ্যে A অক্ষর থাকা যেকোনো ব্যবহারকারীকে ডাটাবেজের সব ডকুমেন্ট সম্পাদনার অনুমতি দেওয়া',
          },
          {
            en: 'Store administrative passwords in a public text file on the company website',
            bn: 'কোম্পানির ওয়েবসাইটে একটি সবার জন্য উন্মুক্ত টেক্সট ফাইলে অ্যাডমিন পাসওয়ার্ড লিখে রাখা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Steward actions require explicit authorization logic paired with mandatory auditing.',
          bn: 'তদারকি কাজের জন্য সুস্পষ্ট কোড লজিকের পাশাপাশি বাধ্যতামূলক অডিট লগিং আবশ্যক।'
        },
        explanation: {
          en: 'Administrative overrides must never be silent. Logging every steward access ensures accountability and compliance with data privacy regulations.',
          bn: 'অ্যাডমিনের কোনো কাজই গোপনে হতে পারবে না। প্রতিটি হস্তক্ষেপ অডিট লগে সংরক্ষণ করা জবাবদিহিতা নিশ্চিত করে।'
        },
      },
      {
        id: 'own-scp-qz-3',
        kind: 'mcq',
        topic: 'mass-assignment-vulnerabilities',
        question: {
          en: 'What is a Mass Assignment vulnerability, and how can it lead to unauthorized privilege escalation in resource ownership?',
          bn: 'ম্যাস অ্যাসাইনমেন্ট (Mass Assignment) দুর্বলতা কী এবং কীভাবে এটি রিসোর্স মালিকানায় অননুমোদিত ক্ষমতা বৃদ্ধির কারণ হতে পারে?'
        },
        options: [
          {
            en: 'When an API blindly binds incoming JSON payloads directly to database entities, allowing an attacker to inject fields like "ownerId": "attackerId" or "role": "admin" into update requests',
            bn: 'যখন কোনো এপিআই আগত JSON ডেটাকে সরাসরি ডাটাবেজ রেকর্ডে বসিয়ে দেয়, যার সুযোগ নিয়ে আক্রমণকারী রিকোয়েস্টে "ownerId": "attackerId" বা "role": "admin" এর মতো গোপন ফিল্ড ঢুকিয়ে দিতে পারে',
          },
          {
            en: 'When a computer keyboard types fifty exclamation marks upon pressing the shift key',
            bn: 'যখন শিফট বোতাম চাপলে কিবোর্ড নিজে থেকেই পঞ্চাশটি আশ্চর্যবোধক চিহ্ন টাইপ করে ফেলে',
          },
          {
            en: 'When an internet browser window downloads twenty music albums at midnight',
            bn: 'যখন মধ্যরাতে একটি ওয়েব ব্রাউজারের উইন্ডো বিশটি গানের অ্যালবাম ডাউনলোড করতে শুরু করে',
          },
          {
            en: 'When a laptop battery reaches one hundred percent charge in two seconds',
            bn: 'যখন ল্যাপটপের ব্যাটারি মাত্র দুই সেকেন্ডের মধ্যে শতভাগ চার্জ সম্পন্ন করে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Always use strict DTO whitelists to prevent attackers from overwriting sensitive fields.',
          bn: 'আক্রমণকারী যেন গোপন ফিল্ড পরিবর্তন করতে না পারে সেজন্য সর্বদা কঠোর DTO হোয়াইটলিস্ট ব্যবহার করুন।'
        },
        explanation: {
          en: 'Without strict input whitelisting (DTOs), users can change the ownerId field of an object, stealing ownership of documents.',
          bn: 'ইনপুট হোয়াইটলিস্ট না থাকলে আক্রমণকারী ownerId বদলে অন্যের ফাইলের মালিক বনে যেতে পারে।'
        },
      },
      {
        id: 'own-scp-qz-4',
        kind: 'mcq',
        topic: 'multi-tenant-isolation-best-practices',
        question: {
          en: 'What is the most secure multi-tenant isolation pattern for SaaS applications handling sensitive customer data?',
          bn: 'সংবেদনশীল গ্রাহক তথ্য পরিচালনাকারী SaaS অ্যাপ্লিকেশনের জন্য সবচেয়ে নিরাপদ মাল্টি-টেন্যান্ট আইসোলেশন প্যাটার্ন কোনটি?'
        },
        options: [
          {
            en: 'Enforcing tenant separation at multiple layers: tenant ID scoping in every database query, Row-Level Security (RLS) policies inside the database engine, and isolated tenant encryption keys',
            bn: 'একাধিক স্তরে টেন্যান্ট পৃথকীকরণ নিশ্চিত করা: প্রতিটি ডাটাবেজ কোয়েরিতে টেন্যান্ট আইডি ফিল্টার, ডাটাবেজ ইঞ্জিনের ভেতরে রো-লেভেল সিকিউরিটি (RLS) প্রয়োগ এবং আলাদা আলাদা টেন্যান্ট এনক্রিপশন কি ব্যবহার করা',
          },
          {
            en: 'Allowing all tenants to share a single unencrypted spreadsheet file with no passwords',
            bn: 'কোনো পাসওয়ার্ড ছাড়াই সমস্ত গ্রাহককে একটি একক সাধারণ স্প্রেডশীট ফাইল শেয়ার করতে দেওয়া',
          },
          {
            en: 'Printing all customer records onto paper cards and storing them in an unlocked cabinet',
            bn: 'সব গ্রাহকের তথ্য কাগজের কার্ডে প্রিন্ট করে একটি খোলা আলমারিতে রেখে দেওয়া',
          },
          {
            en: 'Restarting all database servers every fifteen minutes during business hours',
            bn: 'অফিস চলাকালীন সময়ে প্রতি পনেরো মিনিট পর পর সব ডাটাবেজ সার্ভার রিস্টার্ট দেওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Multi-layer tenant isolation combines query scoping, database RLS, and encryption.',
          bn: 'বহুস্তরীয় টেন্যান্ট পৃথকীকরণে কোয়েরি স্কোপিং, ডাটাবেজ RLS এবং এনক্রিপশন একসাথে কাজ করে।'
        },
        explanation: {
          en: 'Layering application query scoping with database-native Row-Level Security ensures that even if an application bug omits a WHERE clause, the database rejects cross-tenant data leaks.',
          bn: 'অ্যাপ্লিকেশনের কোয়েরির পাশাপাশি ডাটাবেজে রো-লেভেল সিকিউরিটি রাখলে কোডে ভুল হলেও ডাটাবেজ নিজে থেকে অন্যের তথ্য ফাঁস হতে দেয় না।'
        },
      },
    ],
  },
  next: {
    slug: 'api-keys-tokens',
    title: {
      en: 'API Keys & Machine Tokens: Granular Scopes, Rotation & Delegation',
      bn: 'এপিআই কি এবং মেশিন টোকেন: সূক্ষ্ম স্কোপ, রোটেশন এবং ডেলিগেশন'
    },
  },
};
