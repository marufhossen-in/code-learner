import type { Lesson } from '../../../lib/types';

export const RbacBasicsLesson: Lesson = {
  slug: 'rbac-basics',
  tech: 'authorization',
  title: {
    en: 'Role-Based Access Control (RBAC): Roles, Grants & Hierarchies',
    bn: 'রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC): রোল, গ্রান্ট এবং হায়ারার্কি'
  },
  summary: {
    en: 'Master the industry-standard ANSI/NIST Role-Based Access Control model. Understand why assigning granular permissions directly to thousands of individual users creates unmanageable permission sprawl. Learn how roles act as an intermediate decoupling layer, how hierarchical inheritance chains permissions cleanly (Superadmin inherits Admin, which inherits Editor, which inherits Viewer), and how to enforce Separation of Duties to prevent catastrophic conflicts of interest.',
    bn: 'আন্তর্জাতিক ANSI/NIST মানসম্মত রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) মডেল আয়ত্ত করুন। হাজার হাজার ব্যবহারকারীকে আলাদাভাবে পারমিশন দিলে কেন বিশৃঙ্খলা তৈরি হয় তা জানুন। ব্যবহারকারী ও অনুমতির মাঝে রোল কীভাবে একটি সমন্বয়কারী স্তর হিসেবে কাজ করে তা শিখুন। হায়ারার্কিক্যাল ইনহেরিটেন্সের মাধ্যমে পারমিশনের বিস্তার (সুপারএডমিন থেকে অ্যাডমিন, এডিটর ও ভিউয়ার পর্যন্ত) এবং স্বার্থের সংঘাত রোধে সেপারেশন অব ডিউটিজের প্রয়োগ বুঝুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'rbac-decoupling-architecture',
      text: {
        en: 'The Core RBAC Decoupling: Users, Roles, and Permissions',
        bn: 'RBAC পৃথকীকরণ আর্কিটেকচার: ইউজার, রোল এবং পারমিশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build an application, you might initially be tempted to assign permissions directly to user records. As your organization grows to thousands of users, managing direct permissions becomes impossible: updating privileges requires touching thousands of database rows, and offboarding employees leaves orphaned privileges that invite security breaches.',
        bn: 'যখন আপনি একটি অ্যাপ্লিকেশন তৈরি করেন, তখন আপনি প্রতিটি ব্যবহারকারীর প্রোফাইলে সরাসরি পারমিশন যুক্ত করতে প্রলুব্ধ হতে পারেন। আপনার সংস্থা যখন হাজার হাজার কর্মীতে বড় হয়, তখন সরাসরি পারমিশন পরিচালনা করা অসম্ভব হয়ে ওঠে: কোনো সুবিধা পরিবর্তন করতে হাজার হাজার ডাটাবেজ রো আপডেট করতে হয় এবং চাকরি পরিবর্তনের পর অপ্রয়োজনীয় পারমিশন রয়ে গিয়ে নিরাপত্তার ভয়াবহ ঝুঁকি তৈরি করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Role-Based Access Control (RBAC) solves this crisis by introducing roles as a decoupling layer. Permissions are granted strictly to roles; users are merely assigned to roles. When an employee switches departments, administrators simply change their assigned role, instantly reconfiguring all their access rights in a single operation.',
        bn: 'রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) একটি মধ্যবর্তী স্তর হিসেবে রোল বা ভূমিকা যুক্ত করে এই সংকটের সমাধান করে। পারমিশন সর্বদা রোলের সাথে যুক্ত থাকে; আর ব্যবহারকারীদের কোনো নির্দিষ্ট রোলে অর্পণ করা হয়। কোনো কর্মী বিভাগ পরিবর্তন করলে অ্যাডমিনিস্ট্রেটর কেবল তার রোলটি পরিবর্তন করে দেন, ফলে এক নিমেষেই তার সব পুরোনো অধিকার বাতিল হয়ে নতুন অধিকার কার্যকর হয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Granular Permission Definition',
            bn: '১. সুনির্দিষ্ট পারমিশন নির্ধারণ'
          },
          text: {
            en: 'Define atomic, verb-noun permission strings that describe discrete actions (such as documents:read, documents:write, users:manage, billing:manage).',
            bn: 'নির্দিষ্ট কাজ বোঝাতে ক্ষুদ্রতম পারমিশন স্ট্রিং নির্ধারণ করুন ( যেমন documents:read, documents:write, users:manage, billing:manage )।',
          },
        },
        {
          title: {
            en: '2. Role Definition & Bundling',
            bn: '২. রোল তৈরি এবং বান্ডলিং'
          },
          text: {
            en: 'Group atomic permissions into meaningful business roles (such as Viewer, Editor, Admin, Superadmin) matching job functions.',
            bn: 'অফিসের বিভিন্ন কাজের ধরনের সাথে মিলিয়ে ক্ষুদ্র পারমিশনগুলোকে অর্থপূর্ণ ব্যবসায়িক রোলে ( যেমন Viewer, Editor, Admin, Superadmin ) একত্রিত করুন।'
          },
        },
        {
          title: {
            en: '3. Hierarchical Role Inheritance',
            bn: '৩. হায়ারার্কিক্যাল রোল ইনহেরিটেন্স'
          },
          text: {
            en: 'Establish an inheritance chain: Editor inherits Viewer, Admin inherits Editor, and Superadmin inherits Admin, avoiding duplicate rule declarations.',
            bn: 'একটি উত্তরাধিকার ধারাবাহিকতা তৈরি করুন: Editor উত্তরাধিকারসূত্রে Viewer-এর ক্ষমতা পাবে, Admin পাবে Editor-এর ক্ষমতা এবং Superadmin পাবে Admin-এর সব ক্ষমতা, ফলে নিয়মের পুনরাবৃত্তি এড়ানো যায়।'
          },
        },
        {
          title: {
            en: '4. User Role Assignment & Policy Evaluation',
            bn: '৪. ইউজার রোল বরাদ্দ এবং পলিসি মূল্যায়ন'
          },
          text: {
            en: 'Assign users to one or more roles. When an API call arrives, resolve the complete inherited permission set and evaluate access under default-deny.',
            bn: 'ব্যবহারকারীদের এক বা একাধিক রোলে অন্তর্ভুক্ত করুন। যখন কোনো এপিআই রিকোয়েস্ট আসে, তখন উত্তরাধিকারসূত্রে পাওয়া সব পারমিশন হিসাব করে ডিফল্ট-ডিনাই নিয়মে এক্সেস মূল্যায়ন করুন।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Hierarchical RBAC Staircase & Cumulative Inheritance Graph',
        bn: 'হায়ারার্কিক্যাল RBAC সিঁড়ি এবং পুঞ্জীভূত উত্তরাধিকার গ্রাফ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Hierarchical RBAC role inheritance showing viewer, editor, admin, and superadmin cumulative permissions">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">HIERARCHICAL RBAC (ANSI/NIST CUMULATIVE INHERITANCE)</text>
  
  <!-- Tier 1: Viewer (1 perm) -->
  <g transform="translate(40, 50)">
    <rect width="170" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="170" height="32" rx="8" fill="#0284c7"/>
    <text x="85" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. VIEWER</text>
    
    <g transform="translate(10, 45)">
      <text x="10" y="20" fill="#38bdf8" font-size="9" font-weight="bold">DIRECT PERMISSIONS (1):</text>
      <rect y="30" width="150" height="28" rx="4" fill="#0369a1"/>
      <text x="75" y="48" fill="#ffffff" font-size="8.5" text-anchor="middle">documents:read</text>
      
      <text x="10" y="110" fill="#94a3b8" font-size="8.5">Base level access.</text>
      <text x="10" y="128" fill="#94a3b8" font-size="8.5">Read-only privileges.</text>
      
      <rect y="235" width="150" height="36" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="75" y="258" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">TOTAL: 1 PERM</text>
    </g>
  </g>
  
  <!-- Tier 2: Editor (3 perms) -->
  <g transform="translate(235, 50)">
    <rect width="175" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="175" height="32" rx="8" fill="#059669"/>
    <text x="87" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. EDITOR</text>
    
    <g transform="translate(10, 45)">
      <text x="10" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">INHERITS VIEWER (1):</text>
      <rect y="28" width="155" height="24" rx="4" fill="#0369a1"/>
      <text x="77" y="44" fill="#ffffff" font-size="8" text-anchor="middle">documents:read</text>
      
      <text x="10" y="75" fill="#10b981" font-size="9" font-weight="bold">ADDS DIRECT (2):</text>
      <rect y="83" width="155" height="24" rx="4" fill="#047857"/>
      <text x="77" y="99" fill="#ffffff" font-size="8" text-anchor="middle">documents:write</text>
      <rect y="112" width="155" height="24" rx="4" fill="#047857"/>
      <text x="77" y="128" fill="#ffffff" font-size="8" text-anchor="middle">documents:publish</text>
      
      <rect y="235" width="155" height="36" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="77" y="258" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">TOTAL: 3 PERMS</text>
    </g>
  </g>
  
  <!-- Tier 3: Admin (5 perms) -->
  <g transform="translate(435, 50)">
    <rect width="175" height="330" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <rect width="175" height="32" rx="8" fill="#d97706"/>
    <text x="87" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. ADMIN</text>
    
    <g transform="translate(10, 45)">
      <text x="10" y="20" fill="#fcd34d" font-size="9" font-weight="bold">INHERITS EDITOR (3):</text>
      <rect y="28" width="155" height="22" rx="4" fill="#065f46"/>
      <text x="77" y="43" fill="#cbd5e1" font-size="7.5" text-anchor="middle">read, write, publish</text>
      
      <text x="10" y="70" fill="#f59e0b" font-size="9" font-weight="bold">ADDS DIRECT (2):</text>
      <rect y="78" width="155" height="24" rx="4" fill="#b45309"/>
      <text x="77" y="94" fill="#ffffff" font-size="8" text-anchor="middle">users:manage</text>
      <rect y="106" width="155" height="24" rx="4" fill="#b45309"/>
      <text x="77" y="122" fill="#ffffff" font-size="8" text-anchor="middle">settings:update</text>
      
      <rect y="235" width="155" height="36" rx="4" fill="#0f172a" stroke="#f59e0b"/>
      <text x="77" y="258" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">TOTAL: 5 PERMS</text>
    </g>
  </g>
  
  <!-- Tier 4: Superadmin (7 perms) -->
  <g transform="translate(635, 50)">
    <rect width="165" height="330" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <rect width="165" height="32" rx="8" fill="#dc2626"/>
    <text x="82" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. SUPERADMIN</text>
    
    <g transform="translate(10, 45)">
      <text x="10" y="20" fill="#fca5a5" font-size="9" font-weight="bold">INHERITS ADMIN (5):</text>
      <rect y="28" width="145" height="22" rx="4" fill="#78350f"/>
      <text x="72" y="43" fill="#cbd5e1" font-size="7.5" text-anchor="middle">read, write, pub, usr, set</text>
      
      <text x="10" y="70" fill="#ef4444" font-size="9" font-weight="bold">ADDS DIRECT (2):</text>
      <rect y="78" width="145" height="24" rx="4" fill="#991b1b"/>
      <text x="72" y="94" fill="#ffffff" font-size="8" text-anchor="middle">billing:manage</text>
      <rect y="106" width="145" height="24" rx="4" fill="#991b1b"/>
      <text x="72" y="122" fill="#ffffff" font-size="8" text-anchor="middle">audit:read</text>
      
      <rect y="235" width="145" height="36" rx="4" fill="#0f172a" stroke="#ef4444"/>
      <text x="72" y="258" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">TOTAL: 7 PERMS</text>
    </g>
  </g>
  
  <text x="420" y="405" fill="#94a3b8" font-size="10" text-anchor="middle">Inheritance guarantees that modifying Viewer automatically updates all 4 tiers without configuration drift</text>
</svg>`,
      caption: {
        en: 'Hierarchical RBAC enables cumulative inheritance, so senior roles automatically possess all powers of junior roles.',
        bn: 'হায়ারার্কিক্যাল RBAC পুঞ্জীভূত উত্তরাধিকার নিশ্চিত করে, ফলে উচ্চতর ভূমিকাগুলো নিম্নতর রোলের সব ক্ষমতা নিজে থেকেই লাভ করে।'
      },
    },
    {
      type: 'heading',
      id: 'hierarchical-rbac-code',
      text: {
        en: 'Building a Hierarchical RBAC Resolution Engine in Node.js',
        bn: 'Node.js-এ হায়ারার্কিক্যাল RBAC রেজোলিউশন ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect how an enterprise RBAC engine traverses role inheritance trees recursively and caches the resolved permission sets to achieve sub-millisecond evaluation times during high-throughput API routing.',
        bn: 'একটি এন্টারপ্রাইজ RBAC ইঞ্জিন কীভাবে রোলের উত্তরাধিকার ট্রির গভীরে গিয়ে সব পারমিশন হিসাব করে এবং উচ্চগতির এপিআই রাউটিংয়ের সময় সাব-মিলিমেকেন্ড গতি নিশ্চিত করতে ফলাফল ক্যাশ করে তা দেখুন।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'hierarchical-rbac-engine.js',
      code: `// ANSI/NIST Hierarchical Role-Based Access Control Engine
class HierarchicalRbacEngine {
  constructor() {
    this.roleGraph = new Map();
    this.resolvedPermissionCache = new Map();
  }

  // Define a role with direct permissions and an optional parent role
  defineRole(roleName, directPermissions = [], parentRole = null) {
    this.roleGraph.set(roleName, {
      directPermissions: new Set(directPermissions),
      parentRole: parentRole
    });
    // Invalidate cache when hierarchy changes
    this.resolvedPermissionCache.clear();
  }

  // Recursively resolve all cumulative inherited permissions
  resolveRolePermissions(roleName) {
    if (this.resolvedPermissionCache.has(roleName)) {
      return this.resolvedPermissionCache.get(roleName);
    }

    const definition = this.roleGraph.get(roleName);
    if (!definition) {
      return new Set();
    }

    // Start with direct permissions
    const cumulativePerms = new Set(definition.directPermissions);

    // Recursively inherit all permissions from the parent role
    if (definition.parentRole) {
      const parentPerms = this.resolveRolePermissions(definition.parentRole);
      for (const permission of parentPerms) {
        cumulativePerms.add(permission);
      }
    }

    // Memoize in fast memory cache
    this.resolvedPermissionCache.set(roleName, cumulativePerms);
    return cumulativePerms;
  }

  // Fast authorization decision: does user role have the required permission?
  hasPermission(userRole, requiredPermission) {
    const allPermissions = this.resolveRolePermissions(userRole);
    return allPermissions.has(requiredPermission);
  }
}

const rbac = new HierarchicalRbacEngine();

// Setup the 4-tier hierarchy
rbac.defineRole('viewer', ['documents:read']);
rbac.defineRole('editor', ['documents:write', 'documents:publish'], 'viewer');
rbac.defineRole('admin', ['users:manage', 'settings:update'], 'editor');
rbac.defineRole('superadmin', ['billing:manage', 'audit:read'], 'admin');

console.log('=== Resolved Cumulative Permission Counts ===');
console.log('1. Viewer Permissions (1):', [...rbac.resolveRolePermissions('viewer')]);
console.log('2. Editor Permissions (3):', [...rbac.resolveRolePermissions('editor')]);
console.log('3. Admin Permissions (5):', [...rbac.resolveRolePermissions('admin')]);
console.log('4. Superadmin Permissions (7):', [...rbac.resolveRolePermissions('superadmin')]);

console.log('\\n=== Policy Enforcement Point Decisions ===');
console.log('Can Editor read documents (inherited)?:', rbac.hasPermission('editor', 'documents:read'));
console.log('Can Editor manage users (admin-only)?:  ', rbac.hasPermission('editor', 'users:manage'));
console.log('Can Admin publish documents (inherited)?:', rbac.hasPermission('admin', 'documents:publish'));
console.log('Can Superadmin manage billing?:          ', rbac.hasPermission('superadmin', 'billing:manage'));
console.log('Can Viewer write documents?:             ', rbac.hasPermission('viewer', 'documents:write'));`,
      caption: {
        en: 'The recursive RBAC engine dynamically computes inherited permissions and memoizes results for high performance.',
        bn: 'রিকার্সিভ RBAC ইঞ্জিন উত্তরাধিকার সূত্রে প্রাপ্ত পারমিশন হিসাব করে এবং উচ্চগতির জন্য ফলাফল মেমরিতে সংরক্ষণ করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Separation of Duties (SoD) & Toxic Combinations',
        bn: 'সেপারেশন অব ডিউটিজ (SoD) এবং ঝুঁকিপূর্ণ সংমিশ্রণ'
      },
      text: {
        en: 'In regulated financial and healthcare systems, assigning too much power to a single user is illegal. Separation of Duties (SoD) prevents toxic combinations of permissions. For instance, an accounting employee who has permission to create invoices must NEVER be allowed to approve payments. Enforcing Mutually Exclusive Roles ensures that no single insider can perpetrate fraud undetected.',
        bn: 'আর্থিক এবং স্বাস্থ্যসেবা সংক্রান্ত সংবেদনশীল সফটওয়্যারে একজন ব্যক্তির হাতে অতিরিক্ত ক্ষমতা দেওয়া নিষিদ্ধ। সেপারেশন অব ডিউটিজ (SoD) বিপজ্জনক ক্ষমতার সংমিশ্রণ রোধ করে। উদাহরণস্বরূপ, যে কর্মী ইনভয়েস তৈরি করার অনুমতি রাখেন, তাকে কোনোভাবেই পেমেন্ট অনুমোদন করার ক্ষমতা দেওয়া যাবে না। পরস্পর বিরোধী রোল প্রয়োগের মাধ্যমে নিশ্চিত করা হয় যে কোনো অভ্যন্তরীণ কর্মী একা কোনো জালিয়াতি করতে পারবে না।'
      },
    },
  ],
  exercises: [
    {
      id: 'rbac-bas-ex-1',
      kind: 'predict',
      topic: 'hierarchical-rbac-cumulative-permissions',
      question: {
        en: 'How many total cumulative permissions does the Superadmin role possess after inheriting from Admin, Editor, and Viewer? (7). Type the number.',
        bn: 'অ্যাডমিন, এডিটর এবং ভিউয়ারের ক্ষমতা উত্তরাধিকারসূত্রে পাওয়ার পর সুপারএডমিন রোলের সর্বমোট কয়টি পারমিশন জমা হয়? ( ৭ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '7',
      hint: {
        en: '1 (viewer) + 2 (editor) + 2 (admin) + 2 (superadmin) = 7 total permissions.',
        bn: '১ (ভিউয়ার) + ২ (এডিটর) + ২ (অ্যাডমিন) + ২ (সুপারএডমিন) = মোট ৭ টি পারমিশন।'
      },
      explanation: {
        en: 'Hierarchical RBAC accumulates permissions across all parent tiers: 1 from Viewer, 2 from Editor, 2 from Admin, and 2 direct Superadmin privileges.',
        bn: 'হায়ারার্কিক্যাল RBAC সব ধাপের পারমিশন পুঞ্জীভূত করে: ভিউয়ারের ১ টি, এডিটরের ২ টি, অ্যাডমিনের ২ টি এবং সুপারএডমিনের নিজস্ব ২ টি মিলে মোট ৭ টি।'
      },
    },
    {
      id: 'rbac-bas-ex-2',
      kind: 'mcq',
      topic: 'rbac-vs-direct-user-permissions',
      question: {
        en: 'Why is assigning permissions to roles far superior to assigning direct permissions to individual user database records?',
        bn: 'প্রতিটি ব্যবহারকারীর ডাটাবেজ রেকর্ডে সরাসরি পারমিশন দেওয়ার চেয়ে রোলের মাধ্যমে পারমিশন নিয়ন্ত্রণ করা কেন অনেক বেশি কার্যকর?'
      },
      options: [
        {
          en: 'Roles decouple users from permissions: updating a role instantly updates thousands of assigned users, eliminating permission sprawl, configuration drift, and orphaned privileges',
          bn: 'রোল ব্যবহারকারীকে পারমিশন থেকে আলাদা রাখে: একটি রোল পরিবর্তন করলে সেই রোলের হাজার হাজার ব্যবহারকারীর অধিকার নিজে থেকেই পরিবর্তিত হয়, ফলে বিশৃঙ্খলা ও পরিত্যক্ত পারমিশনের ঝুঁকি দূর হয়',
        },
        {
          en: 'Because direct user permissions make internet routers emit smoke',
          bn: 'কারণ ব্যবহারকারীকে সরাসরি পারমিশন দিলে ইন্টারনেট রাউটার থেকে ধোঁয়া বের হতে পারে',
        },
        {
          en: 'Because computer sound speakers stop playing audio when roles are omitted',
          bn: 'কারণ রোলের ব্যবহার বাদ দিলে কম্পিউটারের সাউন্ড স্পিকারে শব্দ বাজানো বন্ধ হয়ে যায়',
        },
        {
          en: 'Because web browser windows refuse to scroll without role names',
          bn: 'কারণ রোলের নাম না থাকলে ওয়েব ব্রাউজারের উইন্ডো স্ক্রল করতে অস্বীকার করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Roles provide an abstraction layer that scales to millions of users.',
        bn: 'রোল এমন একটি বিমূর্ত স্তর যা লক্ষ লক্ষ ব্যবহারকারীর সিস্টেমেও সহজে নিয়ন্ত্রণ বজায় রাখে।'
      },
      explanation: {
        en: 'Without roles, promoting or offboarding employees requires manually finding and editing hundreds of individual permission flags across multiple database tables.',
        bn: 'রোল ছাড়া কর্মী পরিবর্তন বা অপসারণ করতে গেলে ডাটাবেজের শত শত রো খুঁজে আলাদাভাবে এডিট করতে হয় যা চরম ঝুঁকিপূর্ণ।'
      },
    },
    {
      id: 'rbac-bas-ex-3',
      kind: 'mcq',
      topic: 'separation-of-duties-concept',
      question: {
        en: 'What is the primary security goal of Separation of Duties (SoD) in enterprise access control?',
        bn: 'এন্টারপ্রাইজ এক্সেস কন্ট্রোলে সেপারেশন অব ডিউটিজের (SoD) প্রধান নিরাপত্তা লক্ষ্য কী?'
      },
      options: [
        {
          en: 'To prevent toxic combinations of permissions, ensuring that no single individual has enough unsupervised power to execute and conceal fraudulent operations (e.g. creating invoices and approving payments)',
          bn: 'বিপজ্জনক পারমিশনের সংমিশ্রণ প্রতিরোধ করা, যাতে কোনো একক ব্যক্তি একা কোনো অনিয়ম বা জালিয়াতি করার এবং তা গোপন করার মতো অনিয়ন্ত্রিত ক্ষমতা না পায় ( যেমন ইনভয়েস তৈরি ও পেমেন্ট অনুমোদন )',
        },
        {
          en: 'To split computer monitor screens into four equal quadrants',
          bn: 'কম্পিউটার মনিটরের স্ক্রিনকে চারটি সমান অংশে বিভক্ত করে ফেলা',
        },
        {
          en: 'To delete old email messages from the user inbox every Friday evening',
          bn: 'প্রতি শুক্রবার সন্ধ্যায় ব্যবহারকারীর ইনবক্স থেকে পুরানো ইমেইল মুছে ফেলা',
        },
        {
          en: 'To force keyboard keys to type in alphabetical order exclusively',
          bn: 'কিবোর্ডের বোতামগুলোকে কেবল বর্ণমালার ক্রমানুসারে টাইপ হতে বাধ্য করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'SoD prevents single-user fraud through mutually exclusive duties.',
        bn: 'SoD পরস্পর বিরোধী দায়িত্ব আলাদা রেখে একক ব্যক্তির জালিয়াতি রোধ করে।'
      },
      explanation: {
        en: 'By dividing critical workflows between multiple distinct roles, collusion or external oversight is required to complete sensitive transactions.',
        bn: 'গুরুত্বপূর্ণ কাজের ধাপগুলো একাধিক রোলের মধ্যে ভাগ করে দিলে কোনো একক ব্যক্তির পক্ষে জালিয়াতি করা অসম্ভব হয়ে পড়ে।'
      },
    },
    {
      id: 'rbac-bas-ex-4',
      kind: 'predict',
      topic: 'editor-direct-permissions-count',
      question: {
        en: 'How many direct permissions (documents:write and documents:publish) does the Editor role introduce before inheritance? (2). Type the number.',
        bn: 'ইনহেরিটেন্স বাদে এডিটর রোলে সরাসরি কয়টি নতুন পারমিশন ( documents:write এবং documents:publish ) যোগ করা হয়েছে? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'Editor adds 2 direct permissions to the inherited set.',
        bn: 'এডিটর পূর্বের পারমিশনের সাথে নতুন ২ টি পারমিশন যুক্ত করে।'
      },
      explanation: {
        en: 'The Editor role defines 2 direct permissions: documents:write and documents:publish, inheriting documents:read from Viewer.',
        bn: 'এডিটর রোল নিজে ২টি সরাসরি পারমিশন সংজ্ঞায়িত করে: documents:write এবং documents:publish, আর ভিউয়ার থেকে documents:read ধার নেয়।'
      },
    },
  ],
  quiz: {
    id: 'rbac-basics-quiz',
    title: {
      en: 'Role-Based Access Control Architecture Quiz',
      bn: 'রোল-ভিত্তিক এক্সেস কন্ট্রোল আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'rbac-bas-qz-1',
        kind: 'mcq',
        topic: 'role-explosion-problem',
        question: {
          en: 'What is the "Role Explosion" antipattern in RBAC, and when does it occur in expanding applications?',
          bn: 'RBAC সিস্টেমে "রোল এক্সপ্লোশন" (Role Explosion) নামক সমস্যাটি কী এবং এটি কখন ঘটে?'
        },
        options: [
          {
            en: 'When fine-grained business conditions (e.g. department, location, time-of-day, project status) are forced into static roles, causing the total number of distinct roles to multiply into hundreds or thousands of unmanageable combinations',
            bn: 'যখন সূক্ষ্ম শর্তাবলি ( যেমন বিভাগ, অবস্থান, অফিস সময়, প্রকল্পের অবস্থা ) স্ট্যাটিক রোলের ভেতর চাপিয়ে দেওয়া হয়, যার ফলে রোলের সংখ্যা গুণিতক হারে বেড়ে শত শত নিয়ন্ত্রণহীন সমন্বয় তৈরি করে',
          },
          {
            en: 'When a computer battery overheats and causes the laptop chassis to physically crack',
            bn: 'যখন ল্যাপটপের ব্যাটারি অতিরিক্ত গরম হয়ে প্লাস্টিকের বডি ফেটে যায়',
          },
          {
            en: 'When an employee presses the Enter key on the keyboard fifty times in a row',
            bn: 'যখন কোনো কর্মী কিবোর্ডের এন্টার বোতামটি পরপর পঞ্চাশ বার চেপে ধরে রাখেন',
          },
          {
            en: 'When a web browser tab downloads three video files at the same moment',
            bn: 'যখন একটি ওয়েব ব্রাউজারের ট্যাব একই সাথে তিনটি ভিডিও ফাইল ডাউনলোড করতে শুরু করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Role explosion happens when static roles try to encode dynamic context.',
          bn: 'যখন স্ট্যাটিক রোল দিয়ে গতিশীল শর্ত বোঝানোর চেষ্টা করা হয় তখন রোলের সংখ্যা অনিয়ন্ত্রিত হয়ে পড়ে।'
        },
        explanation: {
          en: 'Trying to express "US-Medical-NightShift-Editor" in RBAC creates combinatorial explosions. Such multi-dimensional rules require ABAC.',
          bn: 'RBAC এ অতিরিক্ত নির্দিষ্ট শর্ত জুড়তে গেলে রোলের সংখ্যা নিয়ন্ত্রণের বাইরে চলে যায়। এর জন্য তখন ABAC মডেল প্রয়োজন হয়।'
        },
      },
      {
        id: 'rbac-bas-qz-2',
        kind: 'mcq',
        topic: 'hierarchical-inheritance-advantages',
        question: {
          en: 'What is the primary architectural advantage of implementing Hierarchical RBAC over Flat RBAC?',
          bn: 'ফ্ল্যাট RBAC-এর তুলনায় হায়ারার্কিক্যাল RBAC ব্যবহারের প্রধান আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          {
            en: 'Senior roles automatically inherit all permissions granted to junior roles, eliminating the need to redundantly duplicate junior permission assignments across every higher administrative tier',
            bn: 'উচ্চপদস্থ রোলগুলো নিম্নপদস্থ রোলের সব পারমিশন নিজে থেকেই পেয়ে যায়, ফলে প্রতিটি স্তরের জন্য আলাদা করে একই পারমিশনের পুনরাবৃত্তি করার প্রয়োজন হয় না',
          },
          {
            en: 'It doubles the transmission speed of Wi-Fi routers inside the building',
            bn: 'এটি অফিসের ভেতরের ওয়াইফাই রাউটারের ডেটা পাঠানোর গতি দ্বিগুণ করে দেয়',
          },
          {
            en: 'It allows computers to function completely without motherboards',
            bn: 'এটি কম্পিউটারকে কোনো মাদারবোর্ড ছাড়াই কাজ করার সুযোগ করে দেয়',
          },
          {
            en: 'It turns the operating system desktop wallpaper bright orange',
            bn: 'এটি অপারেটিং সিস্টেমের ডেস্কটপের ব্যাকগ্রাউন্ড ছবি উজ্জ্বল কমলা রঙে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Hierarchy prevents permission duplication across tiered roles.',
          bn: 'হায়ারার্কি বিভিন্ন রোলের মাঝে পারমিশনের অপ্রয়োজনীয় পুনরাবৃত্তি রোধ করে।'
        },
        explanation: {
          en: 'In hierarchical RBAC, updating the base Viewer role automatically updates all senior roles that inherit from it, preventing configuration drift.',
          bn: 'হায়ারার্কিক্যাল মডেলে বেস ভিউয়ার রোলে কিছু পরিবর্তন করলে তার ওপরের সব রোল সেই পরিবর্তন সাথে সাথে পেয়ে যায়।'
        },
      },
      {
        id: 'rbac-bas-qz-3',
        kind: 'mcq',
        topic: 'static-vs-dynamic-sod',
        question: {
          en: 'What is the difference between Static Separation of Duties (SSOD) and Dynamic Separation of Duties (DSOD)?',
          bn: 'স্ট্যাটিক সেপারেশন অব ডিউটিজ (SSOD) এবং ডায়নামিক সেপারেশন অব ডিউটিজের (DSOD) মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'SSOD strictly forbids a user from being assigned to both conflicting roles simultaneously in the database; DSOD allows a user to hold both roles, but forbids activating both roles within the exact same active session or transaction',
            bn: 'SSOD একজন ব্যবহারকারীকে ডাটাবেজে একই সাথে দুটি পরস্পর বিরোধী রোলে অর্পণ করা সম্পূর্ণ নিষিদ্ধ করে; আর DSOD উভয় রোল রাখার অনুমতি দিলেও একই সেশনে বা লেনদেনে দুটি একসাথে ব্যবহার করা নিষিদ্ধ করে',
          },
          {
            en: 'SSOD is only used on weekends while DSOD is only used on weekdays',
            bn: 'SSOD কেবল ছুটির দিনে ব্যবহৃত হয় এবং DSOD কেবল কাজের দিনগুলোতে ব্যবহৃত হয়',
          },
          {
            en: 'SSOD controls computer screen brightness while DSOD sets audio volume',
            bn: 'SSOD স্ক্রিনের আলো নিয়ন্ত্রণ করে এবং DSOD সাউন্ডের ভলিউম নির্ধারণ করে',
          },
          {
            en: 'There is no difference; both terms refer to the same database index',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; দুটি শব্দ একই ডাটাবেজ ইনডেক্সকে নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Static restricts assignment; dynamic restricts active execution.',
          bn: 'স্ট্যাটিক পদবী বরাদ্দ নিষিদ্ধ করে; ডায়নামিক একই সাথে সক্রিয় ব্যবহার নিষিদ্ধ করে।'
        },
        explanation: {
          en: 'Under DSOD, a user qualified as both requester and auditor can perform either role, but cannot audit transactions they submitted themselves.',
          bn: 'DSOD এর অধীনে একজন কর্মী আবেদনকারী এবং অডিটর উভয় পদ পেলেও নিজের করা আবেদনের অডিট নিজে করতে পারেন না।'
        },
      },
      {
        id: 'rbac-bas-qz-4',
        kind: 'mcq',
        topic: 'principle-of-least-privilege-in-rbac',
        question: {
          en: 'How should an organization configure RBAC roles to honor the Principle of Least Privilege effectively?',
          bn: 'ন্যূনতম অধিকারের নীতি সঠিকভাবে বাস্তবায়ন করতে একটি সংস্থাকে কীভাবে RBAC রোল কনফিগার করা উচিত?'
        },
        options: [
          {
            en: 'Define narrow, purpose-driven roles containing only the exact permissions needed for daily duties, avoiding broad wildcard permissions and granting administrative access only upon temporary, audited elevation',
            bn: 'দৈনন্দিন কাজের জন্য প্রয়োজনীয় নির্দিষ্ট পারমিশন দিয়ে সংবেদনশীল ছোট ছোট রোল তৈরি করা, ওয়াইল্ডকার্ড পরিহার করা এবং কেবল সাময়িক ও অডিটযোগ্য ব্যবস্থার মাধ্যমে বিশেষ অ্যাডমিন ক্ষমতা দেওয়া',
          },
          {
            en: 'Give every single newly hired employee the Superadmin role on their first day',
            bn: 'চাকরিতে যোগ দেওয়া প্রতিটি নতুন কর্মীকে প্রথম দিনেই সুপারএডমিন রোল দিয়ে দেওয়া',
          },
          {
            en: 'Turn off all password requirements for company database servers',
            bn: 'কোম্পানির ডাটাবেজ সার্ভারের সমস্ত পাসওয়ার্ডের বাধ্যবাধকতা বন্ধ করে রাখা',
          },
          {
            en: 'Disable all logging and auditing software on corporate laptops',
            bn: 'অফিসের ল্যাপটপগুলোতে সমস্ত লগিং এবং অডিটিং সফটওয়্যার বন্ধ রাখা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Narrow, specific roles minimize excess privilege exposure.',
          bn: 'সুনির্দিষ্ট ও সীমিত রোল অপ্রয়োজনীয় অতিরিক্ত ক্ষমতার ঝুঁকি দূর করে।'
        },
        explanation: {
          en: 'Least privilege prevents catastrophic damage. If an employee account is compromised, the attacker only gains access to that employee specific, limited duties.',
          bn: 'ন্যূনতম অধিকার ক্ষতির মাত্রা সীমাবদ্ধ রাখে। কোনো কর্মীর একাউন্ট হ্যাক হলেও আক্রমণকারী কেবল সেই কর্মীর নির্দিষ্ট ক্ষমতার বাইরে কিছু করতে পারে না।'
        },
      },
    ],
  },
  next: {
    slug: 'permissions-checks',
    title: {
      en: 'Permission Checks & Middleware: Policy Enforcement Points (PEP)',
      bn: 'পারমিশন চেক এবং মিডলওয়্যার: পলিসি ইনফোর্সমেন্ট পয়েন্ট (PEP)'
    },
  },
};
