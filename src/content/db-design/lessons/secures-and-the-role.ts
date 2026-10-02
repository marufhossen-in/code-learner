import type { Lesson } from '../../../lib/types';

export const SecuresAndTheRoleLesson: Lesson = {
  slug: 'secures-and-the-role',
  tech: 'db-design',
  title: {
    en: 'Database Security & Access Control: RBAC & Row-Level Security',
    bn: 'ডাটাবেস সিকিউরিটি ও অ্যাক্সেস কন্ট্রোল: RBAC ও রো-লেভেল সিকিউরিটি'
  },
  summary: {
    en: 'Master database security architecture: enforce the Principle of Least Privilege, configure Role-Based Access Control (RBAC), and prevent multi-tenant data leaks using PostgreSQL Row-Level Security (RLS).',
    bn: 'ডাটাবেস সিকিউরিটি আর্কিটেকচার আয়ত্ত করুন: ন্যূনতম সুবিধার নীতি প্রয়োগ, রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) কনফিগার এবং PostgreSQL রো-লেভেল সিকিউরিটি (RLS) দিয়ে মাল্টি-টেন্যান্ট ডাটা ফাঁস প্রতিরোধ।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'the-principle-of-least-privilege',
      text: {
        en: 'The Principle of Least Privilege: Why Applications Must Not Be Superusers',
        bn: 'ন্যূনতম সুবিধার নীতি: অ্যাপ্লিকেশন কেন সুপারইউজার হতে পারে না'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you configure database connections for a web backend, connecting as the default postgres or root superuser is tempting. However, giving an application superuser access is an architectural catastrophe waiting to happen. A single SQL injection vulnerability could allow an attacker to drop tables, access sensitive financial records, or execute arbitrary shell commands on the host server.',
        bn: 'যখন আপনি কোনো ওয়েব ব্যাকএন্ডের জন্য ডাটাবেস সংযোগ কনফিগার করেন, তখন ডিফল্ট postgres বা root সুপারইউজার দিয়ে যুক্ত হওয়া সহজ মনে হতে পারে। কিন্তু কোনো অ্যাপ্লিকেশনকে সুপারইউজার ক্ষমতা দেওয়া চরম প্রযুক্তিগত বিপর্যয় ডেকে আনতে পারে। একটিমাত্র SQL ইনজেকশন আক্রমণের কারণে কোনো হ্যাকার সমস্ত টেবিল মুছে ফেলতে পারে, আর্থিক তথ্য চুরি করতে পারে অথবা সার্ভারে ক্ষতিকর শেল কোড চালাতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Enterprise database security enforces the Principle of Least Privilege: every database account must receive strictly the minimum permissions necessary to perform its specific business job. A web application should only have SELECT, INSERT, UPDATE, and DELETE privileges on application tables, with zero ability to run destructive DDL statements like DROP TABLE or ALTER TABLE.',
        bn: 'এন্টারপ্রাইজ ডাটাবেস সিকিউরিটি সর্বদা ন্যূনতম সুবিধার নীতি (Principle of Least Privilege) প্রয়োগ করে: প্রতিটি ডাটাবেস অ্যাকাউন্ট কেবল তার নির্দিষ্ট দায়িত্ব পালনের জন্য প্রয়োজনীয় ন্যূনতম অনুমতিটুকু পাবে। একটি সাধারণ ওয়েব অ্যাপ্লিকেশনের কেবল নির্দিষ্ট টেবিলে SELECT, INSERT, UPDATE এবং DELETE করার ক্ষমতা থাকা উচিত, DROP TABLE বা ALTER TABLE-এর মতো পরিবর্তনমূলক DDL স্টেটমেন্ট চালানোর কোনো ক্ষমতাই তার থাকবে না।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Multi-Tenant Security: Application WHERE Bug vs Storage-Level Row-Level Security (RLS)',
        bn: 'মাল্টি-টেন্যান্ট সিকিউরিটি: অ্যাপ্লিকেশনের ভুল WHERE ক্লজ বনাম স্টোরেজ স্তরের রো-লেভেল সিকিউরিটি (RLS)'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Row Level Security Architecture Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Top: Flawed App-Level Filtering -->
  <g transform="translate(30, 25)">
    <rect width="680" height="125" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <rect width="680" height="28" rx="8" fill="#7f1d1d" />
    <text x="340" y="19" fill="#fecaca" font-size="11" font-weight="bold" text-anchor="middle">Dangerous Flaw: Application-Level Tenant Filtering (WHERE tenant_id = ?)</text>

    <!-- App Box -->
    <rect x="25" y="42" width="180" height="65" rx="4" fill="#0f172a" stroke="#ef4444" />
    <text x="35" y="62" fill="#f87171" font-size="10" font-weight="bold">App Code (Developer Bug):</text>
    <text x="35" y="80" fill="#94a3b8" font-size="9">SELECT * FROM invoices;</text>
    <text x="35" y="96" fill="#f87171" font-size="8">Forgot WHERE tenant_id = ?!</text>

    <!-- Arrow -->
    <path d="M 215 75 L 265 75" stroke="#ef4444" stroke-width="2" />

    <!-- DB Box -->
    <rect x="275" y="42" width="380" height="65" rx="4" fill="#0f172a" stroke="#ef4444" />
    <text x="290" y="62" fill="#f87171" font-size="10" font-weight="bold">Unprotected Database Storage Engine:</text>
    <text x="290" y="80" fill="#cbd5e1" font-size="9">Executes query without filter: returns ALL invoices across ALL customers!</text>
    <text x="290" y="96" fill="#fca5a5" font-size="8" font-weight="bold">Result: Catastrophic Cross-Tenant Data Breach!</text>
  </g>

  <!-- Bottom: Robust Storage-Level RLS -->
  <g transform="translate(30, 175)">
    <rect width="680" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="680" height="28" rx="8" fill="#065f46" />
    <text x="340" y="19" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Enterprise Standard: Storage-Level Row-Level Security (RLS)</text>

    <!-- App Box -->
    <rect x="25" y="45" width="180" height="68" rx="4" fill="#0f172a" stroke="#10b981" />
    <text x="35" y="65" fill="#34d399" font-size="10" font-weight="bold">App Code (Same Query):</text>
    <text x="35" y="83" fill="#94a3b8" font-size="9">SELECT * FROM invoices;</text>
    <text x="35" y="99" fill="#a7f3d0" font-size="8">Even if WHERE clause is omitted!</text>

    <!-- Arrow -->
    <path d="M 215 78 L 265 78" stroke="#10b981" stroke-width="2" />

    <!-- DB Box -->
    <rect x="275" y="45" width="380" height="68" rx="4" fill="#0f172a" stroke="#10b981" />
    <text x="290" y="65" fill="#34d399" font-size="10" font-weight="bold">PostgreSQL RLS Storage Kernel Guard:</text>
    <text x="290" y="83" fill="#cbd5e1" font-size="9">Automatically rewrites query AST: WHERE tenant_id = current_tenant()</text>
    <text x="290" y="99" fill="#a7f3d0" font-size="8" font-weight="bold">Result: Mathematically impossible to leak another tenant's rows!</text>
  </g>
</svg>`,
      caption: {
        en: 'Comparison of risky application-level filtering causing catastrophic data leaks versus storage-enforced PostgreSQL Row-Level Security.',
        bn: 'ডাটা ফাঁসের ঝুঁকিপূর্ণ অ্যাপ্লিকেশন স্তরের ফিল্টারিং এবং ডাটাবেস স্তরে বাধ্যবাধকতামূলক PostgreSQL রো-লেভেল সিকিউরিটির তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Principle of Least Privilege',
          def: {
            en: 'A foundational security rule mandating that every user, service, or connection receives strictly the minimum privileges required to perform its task.',
            bn: 'একটি মৌলিক নিরাপত্তা নীতি যা নিশ্চিত করে যে প্রতিটি ব্যবহারকারী বা অ্যাপ্লিকেশন কেবল তার কাজের জন্য প্রয়োজনীয় সর্বনিম্ন অনুমতিটুকুই পাবে।'
          }
        },
        {
          term: 'Role-Based Access Control (RBAC)',
          def: {
            en: 'An authorization framework grouping database permissions into defined roles (such as read_only, app_writer, migration_admin) assigned to users.',
            bn: 'একটি অনুমোদন কাঠামো যা ডাটাবেস অনুমতিগুলোকে নির্দিষ্ট রোলে (যেমন read_only, app_writer) সাজিয়ে বিভিন্ন ব্যবহারকারীকে প্রদান করে।'
          }
        },
        {
          term: 'Row-Level Security (RLS)',
          def: {
            en: 'A database engine feature restricting which table rows a query can view or modify based on session attributes and security policies.',
            bn: 'ডাটাবেস ইঞ্জিনের এমন একটি প্রযুক্তি যা ব্যবহারকারীর সেশনের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে টেবিলের নির্দিষ্ট সারি দেখার অনুমতি নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'Tenant Isolation',
          def: {
            en: 'An architectural boundary guaranteeing that one customer organization in a SaaS platform can never access another customer\'s private records.',
            bn: 'একটি কাঠামোগত নিরাপত্তা প্রাচীর যা নিশ্চিত করে যে SaaS প্ল্যাটফর্মে এক গ্রাহক কোম্পানি কখনোই অন্য গ্রাহকের ব্যক্তিগত ডাটা দেখতে পারবে না।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'rbac-and-row-level-security-mechanics',
      text: {
        en: 'How Row-Level Security (RLS) Enforces Multi-Tenancy',
        bn: 'রো-লেভেল সিকিউরিটি (RLS) কীভাবে মাল্টি-টেন্যান্সি রক্ষা করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In multi-tenant SaaS architectures where thousands of corporate customers share a single database, relying on developers to manually type WHERE tenant_id = ? on every query is a recipe for disaster. One missed WHERE clause in a new endpoint leaks private customer records across the entire internet.',
        bn: 'মাল্টি-টেন্যান্ট SaaS সিস্টেমে যেখানে হাজার হাজার কোম্পানি একই ডাটাবেস ভাগাভাগি করে, সেখানে প্রতিটি কোয়েরিতে ডেভেলপাররা নিজ হাতে WHERE tenant_id = ? লিখবেন এমন প্রত্যাশা করা আত্মঘাতী। কোনো নতুন API এন্ডপয়েন্টে একজন ডেভেলপার ভুলবশত একটি WHERE ক্লজ বাদ দিলেই পুরো ইন্টারনেটে গ্রাহকদের ব্যক্তিগত তথ্য ফাঁস হয়ে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL Row-Level Security (RLS) solves this problem permanently at the storage engine level. When you enable RLS on a table and define a security policy using current_setting(\'app.current_tenant_id\'), the database planner automatically injects the tenant boundary into the query plan. Even if an engineer executes a naked SELECT * FROM invoices;, the storage engine physically filters the rows before returning any disk blocks.',
        bn: 'PostgreSQL রো-লেভেল সিকিউরিটি (RLS) সরাসরি ডাটাবেস ইঞ্জিনের অভ্যন্তরে এই সমস্যার চিরস্থায়ী সমাধান দেয়। যখন আপনি টেবিলে RLS চালু করেন এবং current_setting(\'app.current_tenant_id\') দিয়ে পলিসি তৈরি করেন, তখন ডাটাবেস অপ্টিমাইজার নিজে থেকেই কোয়েরির ভেতরে টেন্যান্টের শর্ত ঢুকিয়ে দেয়। কোনো ডেভেলপার যদি ভুল করে সাধারণ SELECT * FROM invoices; কোয়েরিও চালান, ডাটাবেস ইঞ্জিন ডিস্ক থেকে ডাটা দেওয়ার আগেই অন্য تمام কোম্পানির রেকর্ড ফিল্টার করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-security-engine',
      text: {
        en: 'Executable RLS & RBAC Multi-Tenant Security Simulator',
        bn: 'রানযোগ্য RLS ও RBAC মাল্টি-টেন্যান্ট সিকিউরিটি সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating storage-level Row-Level Security across 6 documents stored in a shared multi-tenant database. When an Org A user submits an unrestricted query, the security kernel returns exactly 2 public documents belonging to Org A, ensuring that 0 Org B rows leak.',
        bn: 'নিচে একটি শেয়ার্ড মাল্টি-টেন্যান্ট ডাটাবেসে ৬টি ডকুমেন্টের ওপর স্টোরেজ স্তরের রো-লেভেল সিকিউরিটি প্রদর্শনকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। যখন Org A-র একজন কর্মী কোনো ফিল্টার ছাড়াই অনুসন্ধান করেন, সিকিউরিটি ইঞ্জিন কেবল Org A-র ২টি পাবলিক ডকুমেন্ট ফেরত দেয় এবং নিশ্চিত করে যে ০টি Org B রো ফাঁস হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Storage-level Row-Level Security simulator eliminating cross-tenant data leaks',
        bn: 'ক্রস-টেন্যান্ট ডাটা ফাঁস নির্মূলকারী স্টোরেজ স্তরের রো-লেভেল সিকিউরিটি সিমুলেটর'
      },
      code: `// Row-Level Security (RLS) Engine Simulator
const documents = [
  { id: 1, orgId: 'org-a', title: 'Org A Public Roadmap', confidential: false },
  { id: 2, orgId: 'org-a', title: 'Org A Employee Handbook', confidential: false },
  { id: 3, orgId: 'org-a', title: 'Org A Board Financials', confidential: true },
  { id: 4, orgId: 'org-b', title: 'Org B Pitch Deck', confidential: false },
  { id: 5, orgId: 'org-b', title: 'Org B Customer List', confidential: false },
  { id: 6, orgId: 'org-b', title: 'Org B Merger Secret', confidential: true }
];

function executeQueryWithRLS(sessionOrg, hasClearance) {
  // Database Kernel Policy Enforcement:
  // Injects: WHERE org_id = current_setting('app.tenant_id')
  return documents.filter(doc => {
    if (doc.orgId !== sessionOrg) {
      return false; // Storage kernel rejects unauthorized tenant
    }
    if (doc.confidential && !hasClearance) {
      return false; // RBAC clearance check
    }
    return true;
  });
}

const orgAUserDocs = executeQueryWithRLS('org-a', false); // 2 public documents
const leakedOrgBRows = orgAUserDocs.filter(doc => doc.orgId === 'org-b').length; // Exactly 0 leaked!

const isAccurate = documents.length === 6 && orgAUserDocs.length === 2 && leakedOrgBRows === 0;

console.log(\`[Security Engine] Initialized RBAC roles and Row-Level Security (RLS) policies.\`);
console.log(\`[RLS Tenant Isolation] Queried \${documents.length} documents: Org A user retrieved \${orgAUserDocs.length} public documents; \${leakedOrgBRows} Org B rows leaked.\`);
console.log(\`[RBAC Security Verdict] Proved storage-level multi-tenancy protection with 0 cross-tenant data leaks (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Superusers Automatically Bypass Row-Level Security',
        bn: 'সুপারইউজাররা স্বয়ংক্রিয়ভাবে রো-লেভেল সিকিউরিটি বাইপাস করে'
      },
      text: {
        en: 'By default in PostgreSQL, table owners and database superusers bypass Row-Level Security policies. This is why web applications must never connect using the table owner or superuser account. Always configure a dedicated non-owner app_user role to ensure RLS policies are strictly enforced on every single query.',
        bn: 'PostgreSQL-এ ডিফল্টভাবে টেবিলের মালিক এবং সুপারইউজাররা রো-লেভেল সিকিউরিটি পলিসি বাইপাস করে যায়। এই কারণেই ওয়েব অ্যাপ্লিকেশনকে কখনো টেবিল মালিক বা সুপারইউজার দিয়ে কানেক্ট করতে দেওয়া যাবে না। প্রতিটি কোয়েরিতে RLS নিশ্চিত করতে সর্বদা একটি স্বতন্ত্র নন-ওনার app_user রোল ব্যবহার করুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'RLS Policy Simulator',
        bn: 'RLS পলিসি সিমুলেটর'
      },
      description: {
        en: 'Simulate how PostgreSQL RLS decides whether a database row is visible to a session tenant.',
        bn: 'কোনো ডাটাবেস রো সেশন টেন্যান্টের জন্য দৃশ্যমান কিনা তা PostgreSQL RLS কীভাবে নির্ধারণ করে তা পরীক্ষা করুন।'
      },
      code: `function evaluateRLSPolicy(rowTenantId, sessionTenantId, isSuperuser) {
  if (isSuperuser) return 'ALLOW: Superuser bypasses RLS policies';
  if (rowTenantId === sessionTenantId) return 'ALLOW: Tenant match satisfies policy';
  return 'DENY: Tenant mismatch blocked by storage kernel';
}

console.log('Own Tenant:', evaluateRLSPolicy('tenant-1', 'tenant-1', false));
console.log('Foreign Tenant:', evaluateRLSPolicy('tenant-2', 'tenant-1', false));`,
      tests: [
        {
          name: {
            en: 'Allows access when tenant IDs match',
            bn: 'টেন্যান্ট আইডি মিললে অ্যাক্সেস অনুমোদন করে'
          },
          expected: 'Own Tenant: ALLOW: Tenant match satisfies policy'
        },
        {
          name: {
            en: 'Blocks access when tenant IDs mismatch',
            bn: 'টেন্যান্ট আইডি না মিললে অ্যাক্সেস ব্লক করে'
          },
          expected: 'Foreign Tenant: DENY: Tenant mismatch blocked by storage kernel'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-sec-ex-1',
      kind: 'mcq',
      topic: 'least-privilege-ddl-restriction',
      question: {
        en: 'Why should production web applications never connect to the database using an account with DDL permissions (like DROP TABLE or ALTER TABLE)?',
        bn: 'প্রোডাকশন ওয়েব অ্যাপ্লিকেশন কেন কখনোই DDL অনুমতিযুক্ত অ্যাকাউন্ট (যেমন DROP TABLE বা ALTER TABLE) দিয়ে ডাটাবেসে কানেক্ট করা উচিত নয়?'
      },
      options: [
        {
          en: 'If a SQL injection vulnerability is exploited, an attacker cannot destructively drop tables or alter schemas because the application role only has DML permissions (SELECT, INSERT, UPDATE, DELETE)',
          bn: 'যদি কোনো SQL ইনজেকশন আক্রমণ ঘটে, তবে আক্রমণকারী টেবিল মুছে ফেলতে বা স্কিমা পরিবর্তন করতে পারবে না কারণ অ্যাপ্লিকেশন রোলে কেবল DML অনুমতি (SELECT, INSERT, UPDATE, DELETE) থাকবে'
        },
        {
          en: 'Because DDL commands cause the database server to consume 50 times more electricity',
          bn: 'কারণ DDL কমান্ডের কারণে ডাটাবেস সার্ভার ৫০ গুণ বেশি বিদ্যুৎ খরচ করে'
        },
        {
          en: 'Because DDL commands can only be run while sitting in a leather chair',
          bn: 'কারণ DDL কমান্ড কেবল চামড়ার চেয়ারে বসে চালানো সম্ভব'
        },
        {
          en: 'Because relational database engines crash if DDL is run twice a day',
          bn: 'কারণ দিনে দুইবার DDL চালালে রিলেশনাল ডাটাবেস ইঞ্জিন ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Limit application privileges so web vulnerabilities cannot destroy database schema structure.',
        bn: 'অ্যাপ্লিকেশনের অনুমতি সীমিত রাখুন যাতে কোডের দুর্বলতার কারণে ডাটাবেসের কাঠামো ধ্বংস না হতে পারে।'
      },
      explanation: {
        en: 'The Principle of Least Privilege protects the database. Automated CI/CD migration scripts use an admin role to alter tables, while web app runtime pools connect with minimal DML roles.',
        bn: 'ন্যূনতম সুবিধার নীতি ডাটাবেস রক্ষা করে। অটোমেটেড সিআই/সিডি পাইপলাইন মাইগ্রেশনের জন্য অ্যাডমিন রোল ব্যবহার করে, আর ওয়েব অ্যাপ কেবল ন্যূনতম DML রোল দিয়ে ডাটা পড়ে ও লেখে।'
      }
    },
    {
      id: 'db-sec-ex-2',
      kind: 'mcq',
      topic: 'row-level-security-rls-definition',
      question: {
        en: 'In PostgreSQL, how does Row-Level Security (RLS) fundamentally protect multi-tenant applications from data leakage?',
        bn: 'PostgreSQL-এ রো-লেভেল সিকিউরিটি (RLS) কীভাবে মূলত মাল্টি-টেন্যান্ট অ্যাপ্লিকেশনকে ডাটা ফাঁস থেকে রক্ষা করে?'
      },
      options: [
        {
          en: 'The database storage engine transparently rewrites every query to inject security filter policies, ensuring users physically cannot read or write rows belonging to other tenants even if application code omits WHERE clauses',
          bn: 'ডাটাবেস স্টোরেজ ইঞ্জিন প্রতিটি কোয়েরিকে স্বয়ংক্রিয়ভাবে পরিবর্তন করে সিকিউরিটি ফিল্টার যুক্ত করে দেয়, ফলে অ্যাপ্লিকেশনে WHERE ক্লজ বাদ পড়লেও অন্য গ্রাহকের রো পড়া বা লেখা শারীরিকভাবে অসম্ভব হয়ে যায়'
        },
        {
          en: 'It encrypts all rows using a top-secret password shared between all users',
          bn: 'এটি تمام ব্যবহারকারীর মধ্যে ভাগ করা একটি গোপন পাসওয়ার্ড দিয়ে সমস্ত রো এনক্রিপ্ট করে রাখে'
        },
        {
          en: 'It hides the database server behind a physical brick wall in the datacenter',
          bn: 'এটি ডাটা সেন্টারে ডাটাবেস সার্ভারটিকে একটি ইটের দেয়ালের পেছনে লুকিয়ে রাখে'
        },
        {
          en: 'It deletes all rows that are more than 30 days old',
          bn: 'এটি ৩০ দিনের বেশি পুরানো সমস্ত রো নিজে নিজেই মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'RLS acts as a kernel-level firewall directly inside the query execution planner.',
        bn: 'RLS সরাসরি কোয়েরি অপ্টিমাইজারের ভেতরে একটি কার্নেল স্তরের ফায়ারওয়াল হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'Application-level filtering is fragile; humans make mistakes. RLS moves tenant isolation into the database engine, guaranteeing that cross-tenant queries return zero rows by physical design.',
        bn: 'অ্যাপ্লিকেশন কোডে মানুষ ভুল করতে পারে। RLS টেন্যান্ট আইসোলেশনকে সরাসরি ডাটাবেস ইঞ্জিনে স্থানান্তর করে, যা অন্য গ্রাহকের ডাটা ফাঁস হওয়া সম্পূর্ণ অসম্ভব করে তোলে।'
      }
    },
    {
      id: 'db-sec-ex-3',
      kind: 'mcq',
      topic: 'column-level-permissions-use-case',
      question: {
        en: 'When should a database administrator configure Column-Level Permissions (e.g. GRANT SELECT on specific columns only)?',
        bn: 'কোন পরিস্থিতিতে একজন ডাটাবেস অ্যাডমিনিস্ট্রেটরের কলাম-লেভেল পারমিশন (যেমন নির্দিষ্ট কলামে GRANT SELECT) কনফিগার করা উচিত?'
      },
      options: [
        {
          en: 'When creating roles for analytics or reporting tools that need customer profiles but must be strictly blocked from viewing sensitive columns like password_hash or payment_tokens',
          bn: 'যখন এমন অ্যানালিটিক্স বা রিপোর্টিং রোলের প্রয়োজন হয় যাদের প্রোফাইল ডাটা দেখা দরকার কিন্তু password_hash বা payment_tokens-এর মতো সংবেদনশীল কলাম দেখা কঠোরভাবে নিষিদ্ধ করা উচিত'
        },
        {
          en: 'When the database hard drive is completely full',
          bn: 'যখন ডাটাবেসের হার্ড ড্রাইভ পুরোপুরি পূর্ণ হয়ে যায়'
        },
        {
          en: 'When a user wants to change their computer monitor wallpaper',
          bn: 'যখন কোনো ব্যবহারকারী তার কম্পিউটার মনিটরের ওয়ালপেপার পরিবর্তন করতে চান'
        },
        {
          en: 'Column-level permissions do not exist in relational SQL databases',
          bn: 'রিলেশনাল SQL ডাটাবেসে কলাম-লেভেল পারমিশন বলে কিছু নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Column grants allow partial table visibility for privacy compliance (like GDPR or HIPAA).',
        bn: 'কলাম পারমিশন গোপনীয়তা আইন মেনে টেবিলের কিছু কলাম লুকিয়ে রেখে বাকিগুলো দেখার সুবিধা দেয়।'
      },
      explanation: {
        en: 'Column-level grants allow fine-grained access. A customer support role can view email and name, but has zero read permissions on password hashes or credit card tokens.',
        bn: 'কলাম পারমিশন অত্যন্ত সূক্ষ্ম নিয়ন্ত্রণ নিশ্চিত করে। সাপোর্ট টিম নাম ও ইমেইল দেখতে পারলেও পাসওয়ার্ড হ্যাশ বা কার্ডের টোকেন কলাম কোনোভাবেই দেখতে পারে না।'
      }
    },
    {
      id: 'db-sec-ex-4',
      kind: 'mcq',
      topic: 'setting-session-tenant-in-connection-pools',
      question: {
        en: 'In a Node.js web application utilizing PostgreSQL RLS with a shared connection pool, how must the app set the current tenant for each HTTP request?',
        bn: 'শেয়ার্ড কানেকশন পুল সহ PostgreSQL RLS ব্যবহার করা একটি Node.js অ্যাপ্লিকেশনে প্রতিটি HTTP রিকোয়েস্টের জন্য অ্যাপটি কীভাবে বর্তমান টেন্যান্ট নির্ধারণ করবে?'
      },
      options: [
        {
          en: 'Check out a client connection from the pool, execute SET LOCAL app.current_tenant_id = :tenantId inside a transaction block, execute queries, and release the connection so settings do not leak to the next request',
          bn: 'কানেকশন পুল থেকে একটি ক্লায়েন্ট নিয়ে লেনদেনের ভেতরে SET LOCAL app.current_tenant_id = :tenantId চালিয়ে কোয়েরি শেষ করতে হবে, যাতে পরবর্তী রিকোয়েস্টে পুরানো টেন্যান্ট সেটিং ফাঁসের ঝুঁকি না থাকে'
        },
        {
          en: 'Create a brand new PostgreSQL database server instance for every single HTTP request',
          bn: 'প্রতিটি একক HTTP রিকোয়েস্টের জন্য একদম নতুন একটি PostgreSQL ডাটাবেস সার্ভার তৈরি করার মাধ্যমে'
        },
        {
          en: 'Hardcode the tenant ID in the server BIOS configuration',
          bn: 'সার্ভারের BIOS কনফিগারেশনে টেন্যান্ট আইডিটি চিরতরে লিখে রেখে'
        },
        {
          en: 'Write the tenant ID on a piece of paper in the office',
          bn: 'অফিসের এক টুকরো কাগজে টেন্যান্ট আইডি লিখে রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'SET LOCAL scopes the setting strictly to the current transaction.',
        bn: 'SET LOCAL বর্তমান ট্রানজ্যাকশনের মধ্যে সেটিংটিকে সুনির্দিষ্টভাবে সীমাবদ্ধ রাখে।'
      },
      explanation: {
        en: 'Using SET LOCAL binds the session variable to the active transaction. When the transaction commits, the setting resets automatically, preventing connection pool cross-contamination.',
        bn: 'SET LOCAL ব্যবহার করলে ট্রানজ্যাকশন শেষ হওয়ার সাথে সাথে টেন্যান্ট ভ্যারিয়েবলটি রিসেট হয়ে যায়, ফলে পুলে থাকা সংযোগটি পরবর্তী রিকোয়েস্টে কোনো পুরনো ডাটা ছড়ায় না।'
      }
    }
  ],
  quiz: {
    id: 'secures-and-the-role-quiz',
    title: {
      en: 'Database Security & Access Control Assessment Quiz',
      bn: 'ডাটাবেস সিকিউরিটি ও অ্যাক্সেস কন্ট্রোল মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'db-sec-qz-1',
        kind: 'mcq',
        topic: 'force-row-level-security-table-owner',
        question: {
          en: 'In PostgreSQL, what SQL command must an architect run if they want Row-Level Security policies to apply even to the table owner account?',
          bn: 'PostgreSQL-এ টেবিল ওনার অ্যাকাউন্টের ক্ষেত্রেও যাতে রো-লেভেল সিকিউরিটি পলিসি প্রযোজ্য হয়, সেজন্য একজন আর্কিটেক্টকে কোন SQL কমান্ডটি চালাতে হবে?'
        },
        options: [
          {
            en: 'ALTER TABLE table_name FORCE ROW LEVEL SECURITY;',
            bn: 'ALTER TABLE table_name FORCE ROW LEVEL SECURITY;'
          },
          {
            en: 'PLEASE LOCK ALL ROWS IMMEDIATELY;',
            bn: 'PLEASE LOCK ALL ROWS IMMEDIATELY;'
          },
          {
            en: 'DROP DATABASE PRODUCTION;',
            bn: 'DROP DATABASE PRODUCTION;'
          },
          {
            en: 'MAKE TABLE SUPER SECRET NOW;',
            bn: 'MAKE TABLE SUPER SECRET NOW;'
          }
        ],
        answer: 0,
        hint: {
          en: 'FORCE ROW LEVEL SECURITY instructs the engine to enforce policies on the table owner as well.',
          bn: 'FORCE ROW LEVEL SECURITY টেবিল মালিকের ওপরেও পলিসি কার্যকর করতে ইঞ্জিনকে নির্দেশ দেয়।'
        },
        explanation: {
          en: 'By default, table owners bypass RLS. Adding FORCE ROW LEVEL SECURITY ensures that even queries executed by the table owner role strictly adhere to the defined RLS policies.',
          bn: 'ডিফল্টভাবে টেবিলের মালিক RLS বাইপাস করে। FORCE ROW LEVEL SECURITY যোগ করলে টেবিলের মালিকের ক্ষেত্রেও تمام RLS পলিসি কঠোরভাবে কার্যকর হয়।'
        }
      },
      {
        id: 'db-sec-qz-2',
        kind: 'mcq',
        topic: 'sql-injection-least-privilege-defense',
        question: {
          en: 'How does configuring a dedicated app_user role without DROP TABLE permissions act as defense-in-depth against SQL injection vulnerabilities?',
          bn: 'DROP TABLE অনুমতি ছাড়া একটি ডেডিকেটেড app_user রোল কনফিগার করা কীভাবে SQL ইনজেকশনের বিরুদ্ধে গভীর প্রতিরক্ষা হিসেবে কাজ করে?'
        },
        options: [
          {
            en: 'Even if an attacker tricks the web application into executing malicious DDL statements (like DROP TABLE users;), the database engine rejects the command with a permission denied error',
            bn: 'এমনকি কোনো আক্রমণকারী ওয়েব অ্যাপকে ফাঁকি দিয়ে ক্ষতিকর DDL কমান্ড চালালেও (যেমন DROP TABLE users;), অনুমতি না থাকায় ডাটাবেস ইঞ্জিন তাৎক্ষণিকভাবে কমান্ডটি বাতিল করে দেয়'
          },
          {
            en: 'It disconnects the hacker\'s home computer from the internet',
            bn: 'এটি হ্যাকারের বাড়ির কম্পিউটারের ইন্টারনেট সংযোগ বন্ধ করে দেয়'
          },
          {
            en: 'It encrypts the attacker\'s keyboard with a secret password',
            bn: 'এটি আক্রমণকারীর কীবোর্ডকে একটি গোপন পাসওয়ার্ড দিয়ে লক করে ফেলে'
          },
          {
            en: 'It sends an automated SMS message to the police',
            bn: 'এটি পুলিশের কাছে একটি স্বয়ংক্রিয় এসএমএস পাঠিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Database permission boundaries stop attacks even when application software fails.',
          bn: 'অ্যাপ্লিকেশন কোড ব্যর্থ হলেও ডাটাবেসের অনুমতির সীমানা আক্রমণ প্রতিহত করে।'
        },
        explanation: {
          en: 'Defense-in-depth means having multiple security barriers. If input sanitization fails at the web tier, strict RBAC database permissions prevent the attacker from destroying schema tables.',
          bn: 'প্রতিরক্ষার বহু স্তর থাকলে ওয়েব কোডে কোনো বাগ থাকলেও ডাটাবেসের কঠোর অনুমতির কারণে আক্রমণকারী কোনো ডেস্ট্রাক্টিভ কাজ করতে পারে না।'
        }
      },
      {
        id: 'db-sec-qz-3',
        kind: 'mcq',
        topic: 'dynamic-data-masking-concept',
        question: {
          en: 'What is Dynamic Data Masking (DDM) in enterprise database architecture, and what problem does it solve?',
          bn: 'এন্টারপ্রাইজ ডাটাবেস আর্কিটেকচারে ডাইনামিক ডাটা মাস্কিং (DDM) কী এবং এটি কোন সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It obfuscates sensitive data on the fly based on user privileges (e.g. revealing only ****-****-****-1234 to call center staff) without changing the real data on disk',
            bn: 'ডিস্কে থাকা আসল ডাটা না বদলে ব্যবহারকারীর সুবিধার ওপর ভিত্তি করে তাৎক্ষণিকভাবে গোপন তথ্য ঢেকে দেয় (যেমন কল সেন্টার কর্মীদের জন্য কেবল ****-****-****-১২৩৪ প্রদর্শন করা)'
          },
          {
            en: 'It draws funny cartoon masks over database diagrams on the server',
            bn: 'এটি সার্ভারে থাকা ডাটাবেস ডায়াগ্রামের ওপর কার্টুন মুখোশ এঁকে রাখে'
          },
          {
            en: 'It slows down database queries by 10 seconds for fun',
            bn: 'এটি নিছক মজার জন্য কোয়েরির গতি ১০ সেকেন্ড কমিয়ে দেয়'
          },
          {
            en: 'It converts numbers into random emoji characters',
            bn: 'এটি সমস্ত সংখ্যাকে এলোমেলো ইমোজিতে রূপান্তর করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Masking shields sensitive PII from unauthorized internal employees during queries.',
          bn: 'মাস্কিং কোয়েরির সময় অভ্যন্তরীণ অননুমোদিত কর্মীদের কাছ থেকে গোপন তথ্য আড়াল করে।'
        },
        explanation: {
          en: 'Dynamic Data Masking allows applications to query tables while ensuring lower-privileged roles cannot read plaintext social security numbers, credit cards, or healthcare identifiers.',
          bn: 'ডাইনামিক ডাটা মাস্কিংয়ের মাধ্যমে সাধারণ কর্মীরা কাজ চালাতে পারলেও কোনো সংবেদনশীল পরিচয়পত্র বা কার্ডের আসল নম্বর দেখতে পারে না।'
        }
      },
      {
        id: 'db-sec-qz-4',
        kind: 'mcq',
        topic: 'audit-logging-trigger-vs-application',
        question: {
          en: 'Why do database security architects prefer database triggers for immutable audit logging over application-level event dispatchers?',
          bn: 'ডাটাবেস সিকিউরিটি আর্কিটেক্টরা অপরিবর্তনীয় অডিট লগিংয়ের জন্য অ্যাপ্লিকেশন ইভেন্টের চেয়ে ডাটাবেস ট্রিগার কেন বেশি পছন্দ করেন?'
        },
        options: [
          {
            en: 'Triggers capture 100% of modifications regardless of entry point (including direct DBA psql fixes, background workers, or third-party tools), executing inside the atomic ACID transaction boundary',
            bn: 'ট্রিগার যে কোনো প্রবেশপথের (সরাসরি DBA psql কুয়েরি, ব্যাকগ্রাউন্ড ওয়ার্কার বা অন্য সফটওয়্যার) تمام পরিবর্তন নিখুঁতভাবে ধারণ করে এবং মূল ট্রানজ্যাকশনের ভেতরেই নিরাপদে সম্পন্ন হয়'
          },
          {
            en: 'Because triggers make database backups 50 times smaller',
            bn: 'কারণ ট্রিগার ডাটাবেস ব্যাকআপের আকার ৫০ গুণ ছোট করে দেয়'
          },
          {
            en: 'Because application code cannot write data to databases',
            bn: 'কারণ অ্যাপ্লিকেশন কোড কখনোই ডাটাবেসে তথ্য লিখতে পারে না'
          },
          {
            en: 'Triggers never use computer memory or processor cycles',
            bn: 'ট্রিগার কখনো কম্পিউটারের কোনো মেমরি বা প্রসেসর খরচ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Triggers guarantee that manual DBA changes or external tools cannot bypass audit logging.',
          bn: 'ট্রিগার নিশ্চিত করে যে কোনো ম্যানুয়াল পরিবর্তনও অডিট ফাঁকি দিয়ে যেতে পারবে না।'
        },
        explanation: {
          en: 'If an administrator runs a direct SQL script to fix data, application code is completely bypassed. Database triggers execute within the engine transaction, guaranteeing an airtight audit trail.',
          bn: 'অ্যাডমিনিস্ট্রেটর সরাসরি SQL দিয়ে কিছু পরিবর্তন করলে অ্যাপ্লিকেশন কোড তা জানতেও পারে না। ডাটাবেস ট্রিগার ইঞ্জিনের ভেতরে থেকেই تمام পরিবর্তনের অডিট রেকর্ড নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'migrates-and-the-version',
    title: {
      en: 'Schema Migrations: Versioning & Zero-Downtime Patterns',
      bn: 'স্কিমা মাইগ্রেশন: ভার্সনিং ও শূন্য-ডাউনটাইম প্যাটার্ন'
    }
  }
};
