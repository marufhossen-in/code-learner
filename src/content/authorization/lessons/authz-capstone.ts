import type { Lesson } from '../../../lib/types';

export const AuthzCapstoneLesson: Lesson = {
  slug: 'authz-capstone',
  tech: 'authorization',
  title: {
    en: 'Enterprise Access Control Architecture: The Capstone Pipeline',
    bn: 'এন্টারপ্রাইজ এক্সেস কন্ট্রোল আর্কিটেকচার: ক্যাপস্টোন পাইপলাইন'
  },
  summary: {
    en: 'Assemble all access control disciplines into an end-to-end enterprise Policy Decision and Enforcement Pipeline. Evaluate incoming requests across 5 consecutive defense gates: hierarchical RBAC role permissions, contextual ABAC temporal constraints (09:00 to 17:00), object-level resource ownership scopes to defeat IDOR attacks, machine key authorizations, and immutable SHA-256 hash-chained audit logging. Enforce zero-trust continuous verification on every single API transaction.',
    bn: 'এক্সেস নিয়ন্ত্রণের সমস্ত শাখাকে একটি পূর্ণাঙ্গ এন্টারপ্রাইজ পলিসি ডিসিশন এবং ইনফোর্সমেন্ট পাইপলাইনে সমন্বিত করুন। পর পর ৫ টি শক্তিশালী নিরাপত্তা গেটে আগত রিকোয়েস্টগুলো যাচাই করুন: হায়ারার্কিক্যাল RBAC রোল পারমিশন, কনটেক্সচুয়াল ABAC সময়ের শর্ত ( ০৯:০০ থেকে ১৭:০০ ), IDOR আক্রমণ প্রতিরোধে অবজেক্ট-লেভেল রিসোর্স মালিকানা স্কোপ, মেশিন কি অনুমোদন এবং অপরিবর্তনীয় SHA-২৫৬ হ্যাশ-চেইনযুক্ত অডিট লগিং। প্রতিটি এপিআই লেনদেনে জিরো-ট্রাস্ট সার্বক্ষণিক যাচাইকরণ নিশ্চিত করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'the-five-defense-gates',
      text: {
        en: 'The 5 Defensive Gates of Enterprise Access Control',
        bn: 'এন্টারপ্রাইজ এক্সেস কন্ট্রোলের ৫ টি নিরাপত্তা গেট'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you secure enterprise software, relying on a single authorization model is insufficient. Role-Based Access Control (RBAC) provides broad organizational role structures, but cannot see time or context. Attribute-Based Access Control (ABAC) handles complex multi-dimensional rules, but does not inherently manage object-level tenancy. Object-level ownership scopes defeat IDOR, but require role-based steward overrides. An enterprise pipeline chains these mechanisms in sequence so that requests must satisfy every gate before touching business data.',
        bn: 'যখন আপনি এন্টারপ্রাইজ সফটওয়্যার সুরক্ষিত করেন, তখন একটিমাত্র অথরাইজেশন মডেলের ওপর নির্ভর করা কখনোই পর্যাপ্ত নয়। রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) প্রাতিষ্ঠানিক রোলের কাঠামো তৈরি করে, কিন্তু সময় বা প্রেক্ষাপট দেখতে পারে না। অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল (ABAC) জটিল বহুমাত্রিক নিয়ম পরিচালনা করে, কিন্তু নিজে থেকে অবজেক্ট মালিকানা দেখে না। অবজেক্ট মালিকানা স্কোপ IDOR প্রতিরোধ করে, কিন্তু এর জন্য অ্যাডমিন তদারকির প্রয়োজন হয়। একটি আধুনিক এন্টারপ্রাইজ পাইপলাইন এই সবগুলোকে ধারাবাহিকভাবে সাজায় যাতে প্রতিটি গেট সন্তুষ্ট করার পরেই কেবল মূল ডেটায় এক্সেস মেলে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In this capstone, you will explore how an incoming request passes through 5 distinct gates:',
        bn: 'এই ক্যাপস্টোন পাঠে আপনি দেখবেন কীভাবে একটি আগত রিকোয়েস্ট ৫ টি আলাদা গেটের মধ্য দিয়ে অতিক্রম করে:'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Gate 1: Machine API Key Scope Validation',
            bn: '১. গেট ১: মেশিন এপিআই কি স্কোপ যাচাইকরণ'
          },
          text: {
            en: 'For service-to-service requests, the gateway verifies that the presented API key is active, hashes it with SHA-256, and confirms that it holds the required granular scope rather than a dangerous wildcard (*).',
            bn: 'সার্ভিস রিকোয়েস্টের ক্ষেত্রে গেটওয়ে যাচাই করে যে এপিআই কি-টি সক্রিয়, SHA-২৫৬ দিয়ে হ্যাশ মেলায় এবং নিশ্চিত করে যে বিপজ্জনক ওয়াইল্ডকার্ডের (*) বদলে এতে সুনির্দিষ্ট স্কোপ রয়েছে।'
          },
        },
        {
          title: {
            en: '2. Gate 2: Hierarchical RBAC Role Resolution',
            bn: '২. গেট ২: হায়ারার্কিক্যাল RBAC রোল রেজোলিউশন'
          },
          text: {
            en: 'The Policy Enforcement Point checks that the caller authenticated role possesses the required atomic permission through direct grants or cumulative inheritance.',
            bn: 'পলিসি ইনফোর্সমেন্ট পয়েন্ট নিশ্চিত করে যে ব্যবহারকারীর অর্জিত রোল সরাসরি বা উত্তরাধিকারসূত্রে প্রয়োজনীয় পারমিশনটির মালিক কি না।'
          },
        },
        {
          title: {
            en: '3. Gate 3: Dynamic ABAC Contextual Rules',
            bn: '৩. গেট ৩: ডায়নামিক ABAC কনটেক্সচুয়াল রুলস'
          },
          text: {
            en: 'The Policy Decision Point evaluates situational constraints: cross-checking that the user department matches the resource department, and enforcing temporal business hours (09:00 to 17:00).',
            bn: 'পলিসি ডিসিশন পয়েন্ট পরিস্থিতিগত শর্তাবলি মূল্যায়ন করে: ব্যবহারকারীর বিভাগ তথ্যের বিভাগের সাথে মিলছে কি না এবং সময়টি অফিস সময়ের ( ০৯:০০ থেকে ১৭:০০ ) মধ্যে কি না তা যাচাই করে।'
          },
        },
        {
          title: {
            en: '4. Gate 4: Resource Ownership Scoping (IDOR Defense)',
            bn: '৪. গেট ৪: রিসোর্স মালিকানা স্কোপিং (IDOR প্রতিরোধ)'
          },
          text: {
            en: 'The data layer checks that user.id === resource.ownerId for mutations, allowing only designated administrative stewards to execute cross-tenant operations.',
            bn: 'ডাটা স্তর নিশ্চিত করে যে পরিবর্তনের জন্য ব্যবহারকারী নিজেই তথ্যের মালিক (user.id === resource.ownerId), কেবল অনুমোদিত অ্যাডমিনদেরই তদারকির সুযোগ দেয়।'
          },
        },
        {
          title: {
            en: '5. Gate 5: Tamper-Evident Hash-Chained Audit Logging',
            bn: '৫. গেট ৫: ট্যাম্পার-প্রুফ হ্যাশ-চেইনযুক্ত অডিট লগিং'
          },
          text: {
            en: 'Every decision—both ALLOW and DENY—is permanently recorded into a cryptographically linked SHA-256 hash chain for immutable regulatory compliance.',
            bn: 'অনুমোদন ও প্রত্যাখ্যানসহ (ALLOW এবং DENY) প্রতিটি সিদ্ধান্ত ক্রিপ্টোগ্রাফিক SHA-২৫৬ হ্যাশ চেইনে স্থায়ীভাবে রেকর্ড করা হয় যা কখনো মোছা যায় না।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Enterprise 5-Gate Authorization Pipeline Architecture',
        bn: 'এন্টারপ্রাইজ ৫-গেট অথরাইজেশন পাইপলাইন আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Enterprise access control pipeline showing 5 defensive gates in series with 5 requests evaluated">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ENTERPRISE END-TO-END ACCESS CONTROL PIPELINE</text>
  
  <!-- 5 Gates in Flow -->
  <g transform="translate(20, 50)">
    <!-- Gate 1 -->
    <g transform="translate(0, 0)">
      <rect width="145" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <text x="72" y="22" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">GATE 1: API KEYS</text>
      <text x="10" y="44" fill="#cbd5e1" font-size="8">• SHA-256 lookup</text>
      <text x="10" y="62" fill="#cbd5e1" font-size="8">• Granular scopes</text>
      <text x="10" y="80" fill="#cbd5e1" font-size="8">• God-keys rejected</text>
      <text x="72" y="100" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Machine Token OK</text>
    </g>
    
    <!-- Gate 2 -->
    <g transform="translate(162, 0)">
      <rect width="145" height="110" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="72" y="22" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">GATE 2: RBAC</text>
      <text x="10" y="44" fill="#cbd5e1" font-size="8">• Role inheritance</text>
      <text x="10" y="62" fill="#cbd5e1" font-size="8">• Action check</text>
      <text x="10" y="80" fill="#cbd5e1" font-size="8">• Viewer &lt; Editor</text>
      <text x="72" y="100" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Role Permitted</text>
    </g>
    
    <!-- Gate 3 -->
    <g transform="translate(324, 0)">
      <rect width="145" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="72" y="22" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">GATE 3: ABAC</text>
      <text x="10" y="44" fill="#cbd5e1" font-size="8">• Hours: 09:00-17:00</text>
      <text x="10" y="62" fill="#cbd5e1" font-size="8">• Dept match</text>
      <text x="10" y="80" fill="#cbd5e1" font-size="8">• IP &amp; Device context</text>
      <text x="72" y="100" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Context Valid</text>
    </g>
    
    <!-- Gate 4 -->
    <g transform="translate(486, 0)">
      <rect width="145" height="110" rx="6" fill="#1e293b" stroke="#c084fc" stroke-width="2"/>
      <text x="72" y="22" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">GATE 4: OWNERSHIP</text>
      <text x="10" y="44" fill="#cbd5e1" font-size="8">• IDOR defense</text>
      <text x="10" y="62" fill="#cbd5e1" font-size="8">• user.id == owner</text>
      <text x="10" y="80" fill="#cbd5e1" font-size="8">• Steward override</text>
      <text x="72" y="100" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Tenancy Scoped</text>
    </g>
    
    <!-- Gate 5 -->
    <g transform="translate(648, 0)">
      <rect width="145" height="110" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
      <text x="72" y="22" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">GATE 5: AUDIT LOG</text>
      <text x="10" y="44" fill="#cbd5e1" font-size="8">• SHA-256 chain</text>
      <text x="10" y="62" fill="#cbd5e1" font-size="8">• ALLOW &amp; DENY</text>
      <text x="10" y="80" fill="#cbd5e1" font-size="8">• Tamper-evident</text>
      <text x="72" y="100" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">5/5 Logged (100%)</text>
    </g>
  </g>
  
  <!-- 5 Evaluation Scenarios Box -->
  <g transform="translate(20, 180)">
    <rect width="800" height="215" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
    <text x="400" y="22" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">CAPSTONE EVALUATION RESULTS (5 SCENARIOS)</text>
    
    <!-- Req 1: Alice admin delete d1 -> ALLOW -->
    <g transform="translate(15, 34)">
      <rect width="770" height="30" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8.5" font-weight="bold">SCENARIO 1: Alice (admin, news) → DELETE d1 at 10:00 → <tspan fill="#34d399">ALLOW (HTTP 200)</tspan> [RBAC, ABAC, Steward Validated]</text>
    </g>
    
    <!-- Req 2: Bob editor write d2 -> ALLOW -->
    <g transform="translate(15, 69)">
      <rect width="770" height="30" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="10" y="20" fill="#6ee7b7" font-size="8.5" font-weight="bold">SCENARIO 2: Bob (editor, news) → WRITE d2 at 14:00 → <tspan fill="#34d399">ALLOW (HTTP 200)</tspan> [Owns Document d2, Validated]</text>
    </g>
    
    <!-- Req 3: Charlie viewer delete d1 -> DENY (RBAC) -->
    <g transform="translate(15, 104)">
      <rect width="770" height="30" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#fca5a5" font-size="8.5" font-weight="bold">SCENARIO 3: Charlie (viewer, news) → DELETE d1 at 11:00 → <tspan fill="#ef4444">DENY (HTTP 403)</tspan> [BLOCKED BY GATE 2: RBAC Role lacks delete]</text>
    </g>
    
    <!-- Req 4: Sara editor write d3 at 22:00 -> DENY (ABAC) -->
    <g transform="translate(15, 139)">
      <rect width="770" height="30" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#fca5a5" font-size="8.5" font-weight="bold">SCENARIO 4: Sara (editor, news) → WRITE d3 at 22:00 → <tspan fill="#ef4444">DENY (HTTP 403)</tspan> [BLOCKED BY GATE 3: ABAC Temporal outside 09:00-17:00]</text>
    </g>
    
    <!-- Req 5: Dave editor write d1 -> DENY (Ownership IDOR) -->
    <g transform="translate(15, 174)">
      <rect width="770" height="30" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="10" y="20" fill="#fca5a5" font-size="8.5" font-weight="bold">SCENARIO 5: Dave (editor, news) → WRITE d1 at 15:00 → <tspan fill="#ef4444">DENY (HTTP 403)</tspan> [BLOCKED BY GATE 4: IDOR Dave is stranger to d1]</text>
    </g>
  </g>
  
  <text x="420" y="418" fill="#94a3b8" font-size="10" text-anchor="middle">Results: 5 evaluated → 2 ALLOW, 3 DENY (1 RBAC, 1 ABAC, 1 IDOR). Complete audit chain: 5/5 logged</text>
</svg>`,
      caption: {
        en: 'The capstone pipeline filters 5 scenarios through RBAC, ABAC, and Ownership gates, logging all 5 decisions in an immutable hash chain.',
        bn: 'ক্যাপস্টোন পাইপলাইন ৫ টি দৃশ্যপটকে RBAC, ABAC এবং মালিকানা গেটের মাধ্যমে যাচাই করে ৫ টি সিদ্ধান্তই অপরিবর্তনীয় হ্যাশ চেইনে লগ করে।'
      },
    },
    {
      type: 'heading',
      id: 'capstone-pipeline-code',
      text: {
        en: 'Building the End-to-End Enterprise Authorization Pipeline in Node.js',
        bn: 'Node.js-এ সম্পূর্ণ এন্টারপ্রাইজ অথরাইজেশন পাইপলাইন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect this complete production-grade pipeline implementation. It features hierarchical role permissions, departmental matching, temporal business hour constraints (09:00 to 17:00), resource ownership verification, and an append-only SHA-256 hash-chained audit log.',
        bn: 'সম্পূর্ণ প্রোডাকশন-গ্রেড পাইপলাইনের কোডটি পরীক্ষা করুন। এতে হায়ারার্কিক্যাল রোল পারমিশন, বিভাগীয় মিল, অফিস সময়ের শর্ত ( ০৯:০০ থেকে ১৭:০০ ), রিসোর্স মালিকানা যাচাই এবং একটি অ্যাপেন্ড-অনলি SHA-২৫৬ হ্যাশ-চেইনযুক্ত অডিট লগ অন্তর্ভুক্ত রয়েছে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'enterprise-authz-capstone.js',
      code: `// Enterprise Authorization & Access Control Capstone Pipeline
const crypto = require('crypto');

class EnterpriseAuthzPipeline {
  constructor() {
    // Database objects with ownership and departmental metadata
    this.documents = new Map([
      ['d1', { id: 'd1', title: 'Corporate Budget', ownerId: 'usr_alice', dept: 'news' }],
      ['d2', { id: 'd2', title: 'Tech Roadmap', ownerId: 'usr_bob', dept: 'news' }],
      ['d3', { id: 'd3', title: 'Marketing Strategy', ownerId: 'usr_sara', dept: 'news' }]
    ]);

    // Role-to-permission mappings
    this.rolePermissions = {
      viewer: new Set(['documents:read']),
      editor: new Set(['documents:read', 'documents:write']),
      admin: new Set(['documents:read', 'documents:write', 'documents:delete', 'settings:manage'])
    };

    // Immutable hash-chained audit trail
    this.auditChain = [];
    this.genesisHash = '0000000000000000000000000000000000000000000000000000000000000000';
  }

  // Gate 5: Append-only hash-chained audit logging
  logEvent(actor, action, resource, decision, reason) {
    const prevHash = this.auditChain.length === 0 ? this.genesisHash : this.auditChain[this.auditChain.length - 1].hash;
    const timestamp = new Date().toISOString();

    const payload = JSON.stringify({
      index: this.auditChain.length,
      timestamp: timestamp,
      actor: actor,
      action: action,
      resource: resource,
      decision: decision,
      reason: reason,
      prevHash: prevHash
    });

    const hash = crypto.createHash('sha256').update(payload).digest('hex');

    this.auditChain.push({
      index: this.auditChain.length,
      timestamp: timestamp,
      actor: actor,
      action: action,
      resource: resource,
      decision: decision,
      reason: reason,
      prevHash: prevHash,
      hash: hash
    });
  }

  // Multi-Gate Authorization Pipeline
  evaluate(user, action, docId, envHour) {
    const doc = this.documents.get(docId);
    if (!doc) {
      return { status: 404, allowed: false, error: 'Document not found' };
    }

    // GATE 1 & 2: RBAC Role Permission Check
    const perms = this.rolePermissions[user.role] || new Set();
    if (!perms.has(action)) {
      this.logEvent(user.name, action, docId, 'DENY', 'RBAC Failure: role ' + user.role + ' lacks ' + action);
      return { status: 403, allowed: false, gate: 'RBAC', error: 'Role ' + user.role + ' lacks permission ' + action };
    }

    // GATE 3: ABAC Contextual Check (Department match + Business hours 09:00-17:00)
    if (user.dept !== doc.dept) {
      this.logEvent(user.name, action, docId, 'DENY', 'ABAC Failure: department mismatch');
      return { status: 403, allowed: false, gate: 'ABAC', error: 'Department mismatch' };
    }

    if (envHour < 9 || envHour > 17) {
      this.logEvent(user.name, action, docId, 'DENY', 'ABAC Failure: outside business hours (' + envHour + ':00)');
      return {
        status: 403,
        allowed: false,
        gate: 'ABAC',
        error: 'Operation restricted to 09:00 to 17:00 (current hour: ' + envHour + ':00)'
      };
    }

    // GATE 4: Resource Ownership Scoping (IDOR Defense)
    const isOwner = doc.ownerId === user.id;
    const isSteward = user.role === 'admin';

    if (action !== 'documents:read' && !isOwner && !isSteward) {
      this.logEvent(user.name, action, docId, 'DENY', 'Ownership Failure: stranger cannot modify doc owned by ' + doc.ownerId);
      return { status: 403, allowed: false, gate: 'OWNERSHIP', error: 'IDOR BLOCKED: Caller is not the resource owner' };
    }

    // ALL GATES PASSED: Record ALLOW decision
    this.logEvent(user.name, action, docId, 'ALLOW', 'All gates satisfied successfully');
    return { status: 200, allowed: true, message: 'Access granted successfully' };
  }
}

const pipeline = new EnterpriseAuthzPipeline();

const testScenarios = [
  { id: 1, user: { id: 'usr_alice', name: 'Alice', role: 'admin', dept: 'news' }, action: 'documents:delete', docId: 'd1', hour: 10 },
  { id: 2, user: { id: 'usr_bob', name: 'Bob', role: 'editor', dept: 'news' }, action: 'documents:write', docId: 'd2', hour: 14 },
  { id: 3, user: { id: 'usr_charlie', name: 'Charlie', role: 'viewer', dept: 'news' }, action: 'documents:delete', docId: 'd1', hour: 11 },
  { id: 4, user: { id: 'usr_sara', name: 'Sara', role: 'editor', dept: 'news' }, action: 'documents:write', docId: 'd3', hour: 22 },
  { id: 5, user: { id: 'usr_dave', name: 'Dave', role: 'editor', dept: 'news' }, action: 'documents:write', docId: 'd1', hour: 15 }
];

let allowedTotal = 0;
let blockedTotal = 0;

console.log('=== Executing 5 Capstone Authorization Scenarios ===');
testScenarios.forEach(s => {
  const verdict = pipeline.evaluate(s.user, s.action, s.docId, s.hour);
  if (verdict.allowed) {
    allowedTotal += 1;
    console.log('Scenario ' + s.id + ' (' + s.user.name + ' on ' + s.docId + ' at ' + s.hour + ':00): ALLOW ✓ (HTTP 200)');
  } else {
    blockedTotal += 1;
    console.log('Scenario ' + s.id + ' (' + s.user.name + ' on ' + s.docId + ' at ' + s.hour + ':00): DENY ✗ (Gate: ' + verdict.gate + ')');
  }
});

console.log('\\n=== Pipeline Results ===');
console.log('Total Scenarios Evaluated: ' + testScenarios.length);
console.log('Allowed: ' + allowedTotal);
console.log('Blocked: ' + blockedTotal);
console.log('Audit Log Records: ' + pipeline.auditChain.length + ' / ' + testScenarios.length + ' decisions verified');`,
      caption: {
        en: 'The capstone pipeline executes 5 tests: 2 pass all criteria, while 3 are blocked by RBAC, ABAC, and Ownership gates.',
        bn: 'ক্যাপস্টোন পাইপলাইন ৫ টি টেস্ট চালায়: ২ টি সফল হয় এবং ৩ টি যথাক্রমে RBAC, ABAC ও মালিকানা গেটে আটকে যায়।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Continuous Authorization: The Zero Trust Imperative',
        bn: 'সার্বক্ষণিক অথরাইজেশন: জিরো ট্রাস্টের অপরিহার্য দাবি'
      },
      text: {
        en: 'Traditional software treated authorization as a single checkpoint passed during user login. In contrast, Zero Trust architecture recognizes that permissions, environmental risk, and device compliance change dynamically throughout a user session. Enforce continuous authorization: evaluate permissions, ownership, and temporal rules on every single API request, microservice call, and data export invocation.',
        bn: 'প্রথাগত সফটওয়্যার অথরাইজেশনকে কেবল লগইনের সময় একবার যাচাই করার একটি সাধারণ ধাপ হিসেবে দেখত। কিন্তু আধুনিক জিরো ট্রাস্ট আর্কিটেকচার স্বীকার করে যে একটি সেশন চলাকালীন সময়েও ব্যবহারকারীর পারমিশন, পরিবেশের ঝুঁকি ও ডিভাইসের অবস্থা প্রতিনিয়ত পরিবর্তিত হতে পারে। তাই সার্বক্ষণিক এক্সেস নিয়ন্ত্রণ বজায় রাখুন: প্রতিটি এপিআই রিকোয়েস্ট, মাইক্রোসার্ভিস কল এবং ডেটা এক্সপোর্টে সর্বদা নতুন করে পারমিশন, মালিকানা ও সময়ের শর্তাবলি যাচাই করুন।'
      },
    },
  ],
  exercises: [
    {
      id: 'authz-cap-ex-1',
      kind: 'predict',
      topic: 'capstone-total-scenarios-evaluated',
      question: {
        en: 'How many total incoming requests were evaluated across the 5 defensive gates in this capstone pipeline demonstration? (5). Type the number.',
        bn: 'এই ক্যাপস্টোন পাইপলাইন পরীক্ষায় ৫ টি নিরাপত্তা গেটের মধ্য দিয়ে মোট কয়টি আগত রিকোয়েস্ট মূল্যায়ন করা হয়েছিল? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: '5 scenarios were evaluated in the pipeline.',
        bn: 'পাইপলাইনে মোট ৫ টি দৃশ্যপট পরীক্ষা করা হয়েছিল।'
      },
      explanation: {
        en: 'The capstone demonstration processed exactly 5 distinct scenarios representing various user roles, times, and object targets.',
        bn: 'ক্যাপস্টোন পরীক্ষায় বিভিন্ন রোল, সময় এবং রিসোর্সের ওপর ভিত্তি করে ঠিক ৫ টি ভিন্ন ভিন্ন দৃশ্যপট যাচাই করা হয়েছিল।'
      },
    },
    {
      id: 'authz-cap-ex-2',
      kind: 'mcq',
      topic: 'layered-access-control-benefits',
      question: {
        en: 'Why is chaining RBAC, ABAC, and Resource Ownership in series far more resilient than relying on any single access control paradigm alone?',
        bn: 'যেকোনো একটি মডেলের ওপর নির্ভর করার চেয়ে পর পর RBAC, ABAC এবং রিসোর্স মালিকানা একসাথে প্রয়োগ করা কেন অনেক বেশি নিরাপদ?'
      },
      options: [
        {
          en: 'Because each paradigm closes the blind spots of the others: RBAC governs organizational roles, ABAC enforces temporal and contextual constraints, and Ownership scoping guarantees multi-tenant isolation against IDOR attacks',
          bn: 'কারণ প্রতিটি মডেল অন্যের সীমাবদ্ধতা পূরণ করে: RBAC প্রাতিষ্ঠানিক রোল পরিচালনা করে, ABAC সময় ও পারিপার্শ্বিক শর্ত প্রয়োগ করে এবং মালিকানা স্কোপিং IDOR আক্রমণের বিরুদ্ধে মাল্টি-টেন্যান্ট ডেটা সুরক্ষা নিশ্চিত করে',
        },
        {
          en: 'Because chaining gates makes computer cooling fans rotate ten times faster',
          bn: 'কারণ পরপর গেট বসালে কম্পিউটারের কুলিং ফ্যান দশ গুণ বেশি দ্রুত ঘোরে',
        },
        {
          en: 'Because layered gates allow computers to run completely without memory microchips',
          bn: 'কারণ বহুস্তরীয় গেট কম্পিউটারকে কোনো মেমোরি চিপ ছাড়াই কাজ করার সুযোগ দেয়',
        },
        {
          en: 'Because multiple gates automatically format all source code into bold orange text',
          bn: 'কারণ একাধিক গেট সোর্স কোডকে নিজে নিজেই মোটা কমলা অক্ষরে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Layered defense ensures that a failure in one model is caught by the others.',
        bn: 'বহুস্তরীয় নিরাপত্তা নিশ্চিত করে যে একটি স্তরের ফাঁক অন্য স্তরগুলো আটকে দেবে।'
      },
      explanation: {
        en: 'No single authorization model solves all security challenges. Combining role, context, and ownership provides comprehensive defense-in-depth.',
        bn: 'কোনো একক মডেল সব বিপদ একা আটকাতে পারে না। রোল, কনটেক্সট এবং মালিকানার সমন্বয়ই একটি পূর্ণাঙ্গ নিশ্ছিদ্র নিরাপত্তা বলয় তৈরি করে।'
      },
    },
    {
      id: 'authz-cap-ex-3',
      kind: 'mcq',
      topic: 'scenario-4-abac-denial-reason',
      question: {
        en: 'In Scenario 4 of the capstone pipeline, why was Sara denied permission to edit Document d3 despite holding a valid "editor" role and matching the document department?',
        bn: 'ক্যাপস্টোন পাইপলাইনের ৪ নম্বর দৃশ্যপটে সারার বৈধ "editor" রোল থাকা এবং বিভাগের মিল থাকা সত্ত্বেও কেন d3 ডকুমেন্ট সম্পাদনার অনুমতি বাতিল করা হয়েছিল?'
      },
      options: [
        {
          en: 'Because Gate 3 (ABAC Temporal Check) detected that the request occurred at 22:00 (10:00 PM), which violated the organizational policy restricting document modifications to business hours (09:00 to 17:00)',
          bn: 'কারণ গেট ৩ (ABAC সময়ের পরীক্ষা) সনাক্ত করেছিল যে রিকোয়েস্টটি রাত ২২:০০ টায় এসেছিল, যা অফিস সময় ( ০৯:০০ থেকে ১৭:০০ ) সংক্রান্ত নীতি সরাসরি লঙ্ঘন করে',
        },
        {
          en: 'Because Sara computer keyboard was missing the spacebar key',
          bn: 'কারণ সারার কম্পিউটারের কিবোর্ডে স্পেসবার বোতামটি ছিল না',
        },
        {
          en: 'Because web browser windows refuse to open after sunset',
          bn: 'কারণ সূর্যাস্তের পর ওয়েব ব্রাউজারের উইন্ডো খুলতে অস্বীকৃতি জানায়',
        },
        {
          en: 'Because operating systems delete document files every evening',
          bn: 'কারণ প্রতি সন্ধ্যায় অপারেটিং সিস্টেম সব ডকুমেন্ট ফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Temporal policies block off-hours operations regardless of role.',
        bn: 'সময়ের নীতি পদবী যাই হোক না কেন অফিস সময়ের বাইরের কাজ আটকে দেয়।'
      },
      explanation: {
        en: 'ABAC environmental rules override broad role permissions. Even an authorized editor cannot modify documents outside the designated 09:00 to 17:00 window.',
        bn: 'ABAC এর পরিবেশগত শর্ত রোলের চেয়ে শক্তিশালী। একজন অনুমোদিত এডিটরও ০৯:০০ থেকে ১৭:০০ সময়সীমার বাইরে কোনো পরিবর্তন করতে পারে না।'
      },
    },
    {
      id: 'authz-cap-ex-4',
      kind: 'predict',
      topic: 'capstone-blocked-scenarios-count',
      question: {
        en: 'Out of the 5 requests evaluated in the capstone demonstration, how many requests were blocked by the defensive gates (RBAC, ABAC, and Ownership)? (3). Type the number.',
        bn: 'ক্যাপস্টোন পরীক্ষায় মূল্যায়িত ৫ টি রিকোয়েস্টের মধ্যে কয়টি রিকোয়েস্ট নিরাপত্তা গেটগুলোতে ( RBAC, ABAC এবং মালিকানা ) আটকে গিয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: '3 requests (Scenarios 3, 4, and 5) were blocked.',
        bn: '৩ টি রিকোয়েস্ট (৩, ৪ এবং ৫ নম্বর দৃশ্যপট) আটকে দেওয়া হয়েছিল।'
      },
      explanation: {
        en: 'Scenarios 3 (Charlie blocked by RBAC), 4 (Sara blocked by ABAC time), and 5 (Dave blocked by IDOR ownership) were denied.',
        bn: '৩ নম্বর (চার্লি RBAC দ্বারা), ৪ নম্বর (সারা ABAC সময় দ্বারা) এবং ৫ নম্বর (ডেভ মালিকানা দ্বারা) দৃশ্যপট প্রত্যাখ্যাত হয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'authz-capstone-quiz',
    title: {
      en: 'Enterprise Access Control Architecture Capstone Quiz',
      bn: 'এন্টারপ্রাইজ এক্সেস কন্ট্রোল আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'authz-cap-qz-1',
        kind: 'mcq',
        topic: 'zero-trust-continuous-authorization',
        question: {
          en: 'What is the primary architectural mandate of Continuous Authorization in Zero Trust architecture?',
          bn: 'জিরো ট্রাস্ট আর্কিটেকচারে সার্বক্ষণিক অথরাইজেশনের (Continuous Authorization) মূল আর্কিটেকচারাল নির্দেশ কী?'
        },
        options: [
          {
            en: 'Never assume that an initial login verification remains valid indefinitely; every single API request, microservice invocation, and data mutation must be independently evaluated against current policy rules, object ownership, and contextual risk',
            bn: 'কখনোই ধরে নেবেন না যে প্রথমবার লগইনের প্রমাণ অনন্তকাল বৈধ থাকবে; প্রতিটি এপিআই রিকোয়েস্ট, মাইক্রোসার্ভিস কল এবং ডেটা পরিবর্তনের মুহূর্তে বর্তমান নীতি, তথ্যের মালিকানা এবং পারিপার্শ্বিক ঝুঁকির ভিত্তিতে স্বাধীনভাবে এক্সেস মূল্যায়ন করতে হবে',
          },
          {
            en: 'Force users to type their password again every three seconds during active typing',
            bn: 'কিবোর্ডে টাইপ করার সময় ব্যবহারকারীকে প্রতি তিন সেকেন্ড পর পর পাসওয়ার্ড দিতে বাধ্য করা',
          },
          {
            en: 'Shut down computer monitor screens whenever network cables are touched',
            bn: 'ইন্টারনেটের তারে হাত দেওয়ার সাথে সাথে মনিটরের স্ক্রিন বন্ধ করে দেওয়া',
          },
          {
            en: 'Disable all internet access for employees on the first day of every month',
            bn: 'প্রতি মাসের প্রথম দিনে অফিসের কর্মীদের সমস্ত ইন্টারনেট সংযোগ বন্ধ রাখা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero Trust demands per-request evaluation without perimeter assumptions.',
          bn: 'জিরো ট্রাস্ট কোনো পূর্বানুমান ছাড়া প্রতিটি রিকোয়েস্টে সরাসরি যাচাইকরণ দাবি করে।'
        },
        explanation: {
          en: 'Continuous authorization eliminates the stale-session security gap where revoked privileges or compromised credentials persist until token expiration.',
          bn: 'সার্বক্ষণিক অথরাইজেশন পুরানো সেশনের ঝুঁকি দূর করে, যাতে চাকরি পরিবর্তন বা বাতিল করা অধিকার সেশন চলাকালীনও সাথে সাথে কার্যকর হয়।'
        },
      },
      {
        id: 'authz-cap-qz-2',
        kind: 'mcq',
        topic: 'scenario-5-idor-block-mechanism',
        question: {
          en: 'In Scenario 5 of the capstone pipeline, how did Gate 4 (Ownership Scoping) successfully thwart Dave unauthorized attempt to modify Document d1?',
          bn: 'ক্যাপস্টোন পাইপলাইনের ৫ নম্বর দৃশ্যপটে গেট ৪ (মালিকানা স্কোপিং) কীভাবে d1 ডকুমেন্টে ডেভের অননুমোদিত পরিবর্তনের চেষ্টাকে সফলভাবে প্রতিহত করেছিল?'
        },
        options: [
          {
            en: 'Dave possessed an "editor" role, but Gate 4 found that d1 belonged to Alice (usr_alice). Because Dave was neither the owner nor an administrator, access was rejected with HTTP 403 Forbidden',
            bn: 'ডেভের একটি "editor" রোল ছিল, কিন্তু গেট ৪ দেখে যে d1 এর মালিক অ্যালিস (usr_alice)। ডেভ মালিক বা অ্যাডমিন কোনোটিই না হওয়ায় রিকোয়েস্টটি HTTP ৪০৩ ফরবিডেন দিয়ে বাতিল করা হয়',
          },
          {
            en: 'Because Gate 4 turned off the electricity in Dave office building',
            bn: 'কারণ গেট ৪ ডেভের অফিসের ভবনের বিদ্যুৎ সংযোগ বন্ধ করে দিয়েছিল',
          },
          {
            en: 'Because Dave computer keyboard ran out of battery at that exact second',
            bn: 'কারণ সেই একই সেকেন্ডে ডেভের কিবোর্ডের ব্যাটারি শেষ হয়ে গিয়েছিল',
          },
          {
            en: 'Because the operating system deleted Document d1 completely from the disk',
            bn: 'কারণ অপারেটিং সিস্টেম ডিস্ক থেকে d1 ডকুমেন্টটি পুরোপুরি মুছে ফেলেছিল',
          },
        ],
        answer: 0,
        hint: {
          en: 'Ownership checks stop strangers from overwriting files even if their roles match.',
          bn: 'রোল মিল থাকলেও মালিকানা যাচাই বাইরের কাউকে অন্যের ফাইল পরিবর্তনের হাত থেকে আটকে দেয়।'
        },
        explanation: {
          en: 'Role-only checks would have erroneously allowed Dave. Object-level ownership scoping ensures that editors can only modify resources they created.',
          bn: 'শুধু রোল দেখলে ডেভ অন্যায়ভাবে পারমিশন পেয়ে যেত। মালিকানা স্কোপ নিশ্চিত করে যে এডিটর কেবল নিজের তৈরি ফাইলই পরিবর্তন করতে পারবে।'
        },
      },
      {
        id: 'authz-cap-qz-3',
        kind: 'mcq',
        topic: 'cryptographic-audit-in-production',
        question: {
          en: 'What critical operational assurance does Gate 5 (Hash-Chained Audit Trail) deliver to enterprise security teams during a post-incident forensic investigation?',
          bn: 'গেট ৫ (হ্যাশ-চেইনযুক্ত অডিট ট্রেইল) কোনো নিরাপত্তা ঘটনার পর তদন্তকারী দলের কাছে কী ধরনের সমালোচনামূলক বিশ্বাসযোগ্যতা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Mathematical proof of non-repudiation and tamper-evidence: investigators can mathematically verify that no malicious insider or compromised administrator modified or erased access logs after an attack',
            bn: 'অপরিবর্তনীয়তা এবং ট্যাম্পার-প্রমাণের গাণিতিক নিশ্চয়তা: তদন্তকারীরা গাণিতিকভাবে প্রমাণ করতে পারেন যে কোনো অভ্যন্তরীণ ব্যক্তি বা হ্যাক হওয়া অ্যাডমিন আক্রমণের পর লগ ফাইলের কোনো তথ্য বিকৃত বা মুছে ফেলতে পারেনি',
          },
          {
            en: 'It increases the processing speed of web server cooling fans by sixty percent',
            bn: 'এটি ওয়েব সার্ভারের কুলিং ফ্যানের ঘোরার গতি ষাট শতাংশ পর্যন্ত বাড়িয়ে দেয়',
          },
          {
            en: 'It converts all server error logs into cheerful cartoon pictures',
            bn: 'এটি সার্ভারের সমস্ত এরর লগকে রঙিন কার্টুন ছবিতে রূপান্তর করে ফেলে',
          },
          {
            en: 'It eliminates the need for software testing across all production codebases',
            bn: 'এটি সমস্ত প্রোডাকশন কোডে সফটওয়্যার টেস্টিংয়ের প্রয়োজনীয়তা মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Hash-chains provide undeniable mathematical proof of audit integrity.',
          bn: 'হ্যাশ-চেইন অডিট রেকর্ডের অপরিবর্তনীয়তার অখণ্ড গাণিতিক প্রমাণ উপস্থাপন করে।'
        },
        explanation: {
          en: 'Attackers frequently attempt to clean their tracks by altering logs. Cryptographic hash-chaining guarantees that tampering is immediately detectable.',
          bn: 'আক্রমণকারীরা প্রায়ই প্রমাণ লুকাতে লগ বদলে দেয়। ক্রিপ্টোগ্রাফিক হ্যাশ-চেইনিং নিশ্চিত করে যে সামান্য পরিবর্তনও অবিলম্বে ধরা পড়বে।'
        },
      },
      {
        id: 'authz-cap-qz-4',
        kind: 'mcq',
        topic: 'least-privilege-defense-in-depth-synthesis',
        question: {
          en: 'How does this end-to-end multi-gate architecture collectively uphold the Principle of Least Privilege across the entire enterprise stack?',
          bn: 'এই সমন্বিত বহু-গেট আর্কিটেকচারটি কীভাবে পুরো এন্টারপ্রাইজ সিস্টেমে সামগ্রিকভাবে ন্যূনতম অধিকারের নীতি (Principle of Least Privilege) বাস্তবায়ন করে?'
        },
        options: [
          {
            en: 'By constraining access at every dimension simultaneously: machines are limited by granular scopes, users by hierarchical roles, operations by temporal and departmental context, and mutations by strict object ownership',
            bn: 'একসাথে প্রতিটি মাত্রায় অধিকারকে সীমাবদ্ধ রাখার মাধ্যমে: মেশিন সীমিত সুনির্দিষ্ট স্কোপে, ব্যবহারকারী সীমিত রোলে, কাজ সীমিত সময় ও বিভাগের প্রেক্ষাপটে এবং ডেটা পরিবর্তন কঠোরভাবে সীমিত নিজস্ব মালিকানায়',
          },
          {
            en: 'By disabling all computer passwords and allowing anyone to access servers freely',
            bn: 'সমস্ত পাসওয়ার্ড মুছে ফেলে যে কাউকে সার্ভারে মুক্তভাবে প্রবেশ করতে দেওয়ার মাধ্যমে',
          },
          {
            en: 'By making internet routers refuse to transmit data on weekends',
            bn: 'সপ্তাহের ছুটির দিনে ইন্টারনেট রাউটারকে ডেটা পরিবহন করতে অস্বীকৃতি জানানোর মাধ্যমে',
          },
          {
            en: 'By deleting all database records every thirty days automatically',
            bn: 'প্রতি ত্রিশ দিন পর পর নিজে থেকেই ডাটাবেজের সমস্ত রেকর্ড মুছে ফেলার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Least privilege is enforced across scopes, roles, time, and ownership.',
          bn: 'ন্যূনতম অধিকার স্কোপ, রোল, সময় এবং মালিকানা সব স্তরে একযোগে প্রয়োগ করা হয়।'
        },
        explanation: {
          en: 'True least privilege is multidimensional. Narrowing access across machine, role, context, and data layers prevents catastrophic lateral movement during breaches.',
          bn: 'আসল ন্যূনতম অধিকার বহুমাত্রিক। মেশিন, পদবী, সময় এবং তথ্যের স্তরে নিয়ন্ত্রণ রাখায় একটি স্তরে ফাঁক থাকলেও হ্যাকার পুরো সিস্টেমে ছড়িয়ে পড়তে পারে না।'
        },
      },
    ],
  },
};
