import type { Lesson } from '../../../lib/types';

export const authorityKeepLesson: Lesson = {
  slug: 'the-authority-keep',
  tech: 'security-fundamentals',
  title: {
    en: 'Authorization & Access Control — Broken Object-Level Authorization (IDOR) and RBAC',
    bn: 'অনুমোদন ও প্রবেশাধিকার নিয়ন্ত্রণ: ব্রোকেন অবজেক্ট-লেভেল অথরাইজেশন (IDOR) ও RBAC'
  },
  summary: {
    en: 'Authentication proves who a user is; Authorization determines what actions that authenticated user is permitted to perform. Broken Object-Level Authorization (BOLA), historically known as Insecure Direct Object References (IDOR), is currently the number 1 vulnerability on the OWASP API Security Top 10 list, with proper verification stopping 100 percent of unauthorized cross-tenant data access. In this lesson, you will master the critical distinction between coarse-grained Role-Based Access Control (RBAC) and fine-grained Attribute-Based Access Control (ABAC). Implement an executable tenant-isolated authorization engine in TypeScript that validates record ownership before returning sensitive data.',
    bn: 'অথেনটিকেশন বা প্রমাণীকরণ ব্যবহারকারীর পরিচয় নিশ্চিত করে; আর অথরাইজেশন বা অনুমোদন নির্ধারণ করে সেই ব্যবহারকারী কোন কোন কাজ করার অধিকার রাখেন। ব্রোকেন অবজেক্ট-লেভেল অথরাইজেশন (BOLA), যা পূর্বে IDOR নামে পরিচিত ছিল, বর্তমানে OWASP API সিকিউরিটি শীর্ষ ১০ তালিকার ১ নম্বর ঝুঁকি, যেখানে সঠিক যাচাইকরণ ১০০ শতাংশ অননুমোদিত তথ্য চুরি বন্ধ করে। এই পাঠে আপনি রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল (RBAC) এবং অ্যাট্রিবিউট-ভিত্তিক অ্যাক্সেস কন্ট্রোল (ABAC)-এর মধ্যকার পার্থক্য শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর অবজেক্ট-লেভেল অথরাইজেশন ইঞ্জিন বাস্তবায়ন করা হয়েছে যা ডেটা ফেরত দেওয়ার পূর্বে ব্যবহারকারীর নিজস্ব অধিকার যাচাই করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'two-doors-of-access',
      text: {
        en: 'The Two Doors of Access: Authentication vs Authorization',
        bn: 'প্রবেশের দুই দরজা: প্রমাণীকরণ বনাম অনুমোদন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build software that serves multiple users, verifying an identity at login is only the first of two mandatory security gates.',
        bn: 'একাধিক ব্যবহারকারীর সফটওয়্যার তৈরির সময় লগইনে পরিচয় নিশ্চিত করা কেবল ২টি প্রধান নিরাপত্তা তোরণের প্রথম ধাপ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Authentication asks: "Who are you?" (yielding HTTP 401 Unauthorized if verification fails). Authorization asks: "Are you allowed to perform this action on this specific object?" (yielding HTTP 403 Forbidden or 404 Not Found). The most pervasive security disaster in modern cloud APIs occurs when an application correctly authenticates a user, but fails to check authorization at the object level. In Insecure Direct Object Reference (IDOR) attacks, user 42 simply changes a URL parameter from /api/invoices/1042 to /api/invoices/1041. If the handler queries the database solely by invoice ID without asserting user ownership, customer 42 reads competitor 99 confidential billing records with full cryptographic authentication.',
        bn: 'অথেনটিকেশন বা প্রমাণীকরণ প্রশ্ন করে: "আপনি কে?" (ব্যর্থ হলে এইচটিটিপি ৪০১ কোড দেয়)। আর অথরাইজেশন বা অনুমোদন প্রশ্ন করে: "এই নির্দিষ্ট তথ্যে আপনার কাজ করার অনুমতি আছে কি?" (ব্যর্থ হলে এইচটিটিপি ৪০৩ বা ৪০৪ কোড দেয়)। আধুনিক ক্লাউড এপিআইতে সবচেয়ে ভয়াবহ বিপর্যয় ঘটে যখন সার্ভার ব্যবহারকারীকে ঠিকই চেনে, কিন্তু নির্দিষ্ট অবজেক্টে তার অধিকার যাচাই করে না। ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) আক্রমণে ৪২ নম্বর ইউজার ইউআরএলে /api/invoices/1042 এর জায়গায় /api/invoices/1041 লিখে দেয়। সার্ভার যদি কেবল ইনভয়েস আইডি দিয়ে খোঁজে এবং ব্যবহারকারীর মালিকানা পরীক্ষা না করে, তবে বৈধ লগইন থাকা অবস্থাতেই ৪২ নম্বর গ্রাহক অন্য ৯৯ নম্বর গ্রাহকের অত্যন্ত গোপনীয় বিলের কপি দেখে ফেলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'broken-object-level-authorization',
          def: {
            en: 'An API access control vulnerability where endpoints expose object identifiers without validating whether the requesting user owns or has rights to that object.',
            bn: 'একটি এপিআই দুর্বলতা যেখানে ব্যবহারকারীর মালিকানা বা অধিকার যাচাই না করেই সরাসরি আইডির ভিত্তিতে যেকোনো অবজেক্টের তথ্য উন্মুক্ত করে দেওয়া হয়।'
          }
        },
        {
          term: 'role-based-access-control',
          def: {
            en: 'An authorization model where system permissions are grouped into static roles (e.g. admin, manager, user) assigned to individuals.',
            bn: 'এমন একটি অনুমোদন ব্যবস্থা যেখানে নির্দিষ্ট কিছু ভূমিকার (যেমন অ্যাডমিন, ম্যানেজার, সদস্য) ওপর ভিত্তি করে অনুমতি নির্ধারণ করা হয়।'
          }
        },
        {
          term: 'attribute-based-access-control',
          def: {
            en: 'A fine-grained authorization model evaluating dynamic policies combining user attributes, resource attributes (e.g. owner_id), and environmental context.',
            bn: 'একটি সূক্ষ্ম অনুমোদন ব্যবস্থা যা ব্যবহারকারীর পরিচয়, অবজেক্টের মালিকানা (যেমন owner_id) এবং পরিবেশগত প্রাসঙ্গিকতা মিলিয়ে সিদ্ধান্ত নেয়।'
          }
        },
        {
          term: 'horizontal-privilege-escalation',
          def: {
            en: 'An unauthorized access pattern where a user accesses data belonging to another user operating at the exact same permission tier.',
            bn: 'এমন এক অননুমোদিত প্রবেশাধিকার যেখানে কোনো ব্যবহারকারী একই স্তরের অন্য একজন সাধারণ ব্যবহারকারীর গোপন ডেটা দেখে ফেলে।'
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
      id: 'rbac-vs-abac-comparison',
      text: {
        en: 'Access Control Architecture: RBAC vs ABAC',
        bn: 'প্রবেশাধিকার নিয়ন্ত্রণ স্থাপত্য: RBAC বনাম ABAC'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Selecting the appropriate access control model requires balancing organizational simplicity against granular multi-tenant data isolation.',
        bn: 'সঠিক অ্যাক্সেস কন্ট্রোল মডেল নির্বাচনে প্রাতিষ্ঠানিক সরলতা এবং মাল্টি-টেন্যান্ট ডেটা সুরক্ষার ভারসাম্যের দিকে নজর দিতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Access Control Model', bn: 'অনুমোদন মডেল' },
        { en: 'Core Enforcement Mechanism', bn: 'মূল প্রয়োগ পদ্ধতি' },
        { en: 'Scalability in SaaS Multi-Tenancy', bn: 'মাল্টি-টেন্যান্ট সিস্টেমে সক্ষমতা' },
        { en: 'Primary Security Failure Mode', bn: 'প্রধান ঝুঁকি বা দুর্বলতা' }
      ],
      rows: [
        [
          { en: 'Role-Based (RBAC)', bn: 'রোল-ভিত্তিক (RBAC)' },
          { en: 'Checks static role flags (user.role === "manager")', bn: 'নির্দিষ্ট রোল দেখে (user.role === "manager")' },
          { en: 'High simplicity; poor at multi-tenant ownership boundaries', bn: 'সহজ বাস্তবায়ন; তবে মালিকানা যাচাইয়ে দুর্বল' },
          { en: 'Cannot detect horizontal IDOR: manager A reads manager B records', bn: 'একই রোলের অন্য টেন্যান্টের ডেটা চুরি শনাক্ত করতে পারে না' }
        ],
        [
          { en: 'Attribute-Based (ABAC)', bn: 'অ্যাট্রিবিউট-ভিত্তিক (ABAC)' },
          { en: 'Evaluates dynamic rules (actor.id === resource.ownerId && tenantId)', bn: 'বহুবিধ শর্ত যাচাই করে (actor.id === resource.ownerId)' },
          { en: 'Gold standard for multi-tenant SaaS and enterprise data privacy', bn: 'ক্লাউড ও মাল্টি-টেন্যান্ট সফটওয়্যারের সেরা মানদণ্ড' },
          { en: 'High policy complexity and slightly higher evaluation latency', bn: 'পলিসি ব্যবস্থাপনা তুলনামূলক জটিল এবং কিছুটা সময়সাপেক্ষ' }
        ],
        [
          { en: 'Discretionary (DAC)', bn: 'ব্যবহারকারী-নিয়ন্ত্রিত (DAC)' },
          { en: 'Resource creators grant explicit read/write rights to others', bn: 'মালিক নিজে অন্যকে দেখার বা লেখার অধিকার দেন' },
          { en: 'Flexible document collaboration (e.g. Google Drive sharing)', bn: 'ডকুমেন্ট শেয়ারিংয়ে কার্যকর (যেমন গুগল ড্রাইভ)' },
          { en: 'Permission sprawl and accidental public link exposure', bn: 'ভুল লিঙ্কে ক্লিক করে অনিচ্ছাকৃত তথ্য ফাঁসের ঝুঁকি' }
        ],
        [
          { en: 'Mandatory (MAC)', bn: 'বাধ্যতামূলক সরকারি (MAC)' },
          { en: 'Centralized sensitivity labels and user security clearances', bn: 'কেন্দ্রীয়ভাবে কঠোর লেবেল ও সামরিক ছাড়পত্র' },
          { en: 'Rigid military classification; inappropriate for standard web apps', bn: 'অত্যন্ত কঠোর ও অনমনীয়; সাধারণ ওয়েব অ্যাপে অনুপযোগী' },
          { en: 'High administrative overhead and difficult operational maintenance', bn: 'পরিচালনগত জটিলতা ও অতিরিক্ত প্রশাসনিক চাপ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-idor-defense-code',
      text: {
        en: 'Executable Object-Level Authorization Simulation',
        bn: 'অবজেক্ট-লেভেল অনুমোদনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an insecure direct object lookup leaks confidential records, and contrasts it with a secure object-scope validator that verifies ownership before delivering records.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি দেখায় কীভাবে অসতর্ক কোড অন্যের গোপন ডেটা ফাঁস করে দেয় এবং তার বিপরীতে সুরক্ষিত অবজেক্ট-লেভেল ভ্যালিডেটর কীভাবে মালিকানা নিশ্চিত করে আক্রমণ ঠেকিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vulnerable IDOR vs Secure Object-Scope Authorization

interface Invoice {
  id: string;
  ownerId: string;
  amount: number;
}

const enterpriseDatabase: Invoice[] = [
  { id: 'inv_1041', ownerId: 'usr_99', amount: 1500 },
  { id: 'inv_1042', ownerId: 'usr_42', amount: 250 }
];

// 1. Vulnerable endpoint: queries database purely by primary key ID
function fetchInvoiceVulnerable(requestedInvoiceId: string) {
  const record = enterpriseDatabase.find(inv => inv.id === requestedInvoiceId);
  if (!record) {
    return { statusCode: 404, payload: null };
  }
  return { statusCode: 200, payload: record };
}

// 2. Secure endpoint: enforces ownership scope check
function fetchInvoiceSecure(
  authenticatedUserId: string,
  requestedInvoiceId: string
) {
  // Query must filter BOTH by resource ID AND authenticated user identity
  const record = enterpriseDatabase.find(
    inv => inv.id === requestedInvoiceId && inv.ownerId === authenticatedUserId
  );

  if (!record) {
    // Return 404 to avoid confirming whether record exists to unauthorized attackers
    return {
      statusCode: 404,
      error: 'Resource not found or insufficient access privileges'
    };
  }

  return { statusCode: 200, payload: record };
}

const activeUser = 'usr_42';
const competitorInvoiceId = 'inv_1041';

const idorBreachResult = fetchInvoiceVulnerable(competitorInvoiceId);
const protectedResult = fetchInvoiceSecure(activeUser, competitorInvoiceId);

console.log('Vulnerable endpoint status:', idorBreachResult.statusCode);
console.log('Vulnerable leaked invoice owner:', idorBreachResult.payload?.ownerId);
console.log('Secure endpoint status:', protectedResult.statusCode);
console.log('Secure access blocked:', protectedResult.statusCode === 404);

// prints: Vulnerable endpoint status: 200
// prints: Vulnerable leaked invoice owner: usr_99
// prints: Secure endpoint status: 404
// prints: Secure access blocked: true`
    },
    {
      type: 'heading',
      id: 'uuid-unpredictability-and-rls',
      text: {
        en: 'UUID Unpredictability and Database Row-Level Security',
        bn: 'UUID-এর গুরুত্ব এবং ডেটাবেস রো-লেভেল সিকিউরিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Using sequential integer primary keys (such as IDs 1041, 1042, 1043) greatly simplifies automated scraping attacks: an adversary can script a loop to iterate through every customer record across a weekend. Migrating to Version 4 UUIDs (128-bit cryptographically random strings) makes enumeration computationally infeasible. However, developers must recognize that UUIDs do not replace authorization checks; they merely prevent enumeration. The ultimate defense-in-depth architectural pattern is Database Row-Level Security (RLS), where the database engine itself enforces tenant isolation policies on every SQL query, guaranteeing that even buggy application code cannot read cross-tenant rows.',
        bn: 'ধারাবাহিক পূর্ণসংখ্যা প্রাইমারি কি (যেমন আইডি ১০৪১, ১০৪২, ১০৪৩) ব্যবহার করলে আক্রমণকারীর জন্য স্বয়ংক্রিয় স্ক্রিপ্ট দিয়ে সব তথ্য চুরি করা খুব সহজ হয়ে যায়। এর বদলে ভার্সন ৪ ইউইউআইডি (Version 4 UUID - ১২৮ বিটের এলোমেলো স্ট্রিং) ব্যবহার করলে আইডি অনুমান করা অসম্ভব হয়ে ওঠে। তবে মনে রাখা জরুরি, ইউইউআইডি কেবল অনুমান ঠেকায়, এটি অনুমোদন যাচাইয়ের বিকল্প নয়। এর সর্বোচ্চ প্রতিরক্ষা স্তর হলো ডেটাবেসের রো-লেভেল সিকিউরিটি (RLS), যেখানে ডেটাবেস ইঞ্জিন নিজেই প্রতিটি এসকিউএল কোয়েরিতে টেন্যান্ট ফিল্টার প্রয়োগ করে অ্যাপ্লিকেশন কোডে ভুল থাকলেও অন্যের তথ্য প্রদর্শন পুরোপুরি আটকে দেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Authentication does not equal authorization: Always verify whether the user has rights to the specific requested record.',
          bn: 'লগইন করলেই সব দেখা যায় না: ব্যবহারকারীর ওই নির্দিষ্ট রেকর্ডটি দেখার অধিকার আছে কিনা তা প্রতিটি রিকোয়েস্টে যাচাই করুন।'
        },
        {
          en: 'Bind queries to user context: Filter database lookups by both resource ID and authenticated user/tenant ID.',
          bn: 'কোয়েরিতে ব্যবহারকারীর আইডি বাঁধুন: ডেটাবেসে খোঁজার সময় রিসোর্স আইডির পাশাপাশি ইউজারের নিজস্ব আইডি দিয়ে ফিল্টার করুন।'
        },
        {
          en: 'Return 404 on authorization failures: Avoid revealing whether private records exist by returning 404 Not Found instead of 403.',
          bn: 'অনুমতি না থাকলে ৪০৪ কোড দিন: তথ্যটি আদৌ সিস্টেমে আছে কিনা তা গোপন রাখতে ৪০৩-এর বদলে ৪০৪ কোড ফেরত দিন।'
        },
        {
          en: 'Adopt Row-Level Security: Enforce database-level multi-tenant policies to prevent application layer leaks.',
          bn: 'রো-লেভেল সিকিউরিটি চালু রাখুন: অ্যাপ্লিকেশন কোডের ভুল এড়াতে ডেটাবেসের নিজস্ব স্তরেই টেন্যান্ট সুরক্ষা নিশ্চিত করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-closed-ledger',
    tech: 'security-fundamentals',
    title: {
      en: 'Security Auditing & Secrets Management — Threat Modeling and Enterprise Defense',
      bn: 'নিরাপত্তা নিরীক্ষা ও সিক্রেটস ব্যবস্থাপনা: থ্রেট মডেলিং ও এন্টারপ্রাইজ প্রতিরক্ষা'
    }
  },
  exercises: [
    {
      id: 'auth-ex1',
      kind: 'mcq',
      topic: 'idor-root-cause',
      question: {
        en: 'What is the architectural root cause that permits an Insecure Direct Object Reference (IDOR / BOLA) vulnerability to exist?',
        bn: 'কোন স্থাপত্যিক ভুলের কারণে সিস্টেমে ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR / BOLA) দুর্বলতা তৈরি হয়?'
      },
      options: [
        {
          en: 'The backend endpoint accepts an object identifier directly from user input and queries the database without validating that the authenticated requester owns or is permitted to view that object',
          bn: 'ব্যাকএন্ড এন্ডপয়েন্ট ব্যবহারকারীর কাছ থেকে সরাসরি আইডি গ্রহণ করে ডেটাবেস থেকে তথ্য এনে দেয়, কিন্তু অনুরোধকারী ব্যবহারকারীর সেই তথ্য দেখার অধিকার আছে কিনা তা পরীক্ষা করে না'
        },
        {
          en: 'The database server runs out of physical hard drive storage space',
          bn: 'ডেটাবেস সার্ভারের হার্ড ড্রাইভের জায়গা পুরোপুরি শেষ হয়ে যাওয়া'
        },
        {
          en: 'Because HTML form inputs are styled using CSS flexbox rather than grid',
          bn: 'কারণ এইচটিএমএল ফর্ম সিএসএস গ্রিডের বদলে ফ্লেক্সবক্স দিয়ে সাজানো হয়েছে'
        },
        {
          en: 'IDOR vulnerabilities only happen when users connect via satellite internet',
          bn: 'IDOR দুর্বলতা কেবল তখনই ঘটে যখন ব্যবহারকারী স্যাটেলাইট ইন্টারনেট ব্যবহার করেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The server looked up the object by ID, but never checked: "Does THIS user own THIS object?"',
        bn: 'সার্ভার আইডি দিয়ে তথ্য খুঁজেছে ঠিকই, কিন্তু "এই ব্যবহারকারী কি এই তথ্যের মালিক?" তা দেখেনি।'
      },
      explanation: {
        en: 'BOLA/IDOR occurs when access decisions rely on unvalidated client-supplied keys without context-aware ownership enforcement.',
        bn: 'ব্যবহারকারীর পাঠানো আইডির ওপর অন্ধ বিশ্বাস রেখে মালিকানা যাচাই না করাই IDOR দুর্বলতার মূল কারণ।'
      }
    },
    {
      id: 'auth-ex2',
      kind: 'mcq',
      topic: 'rbac-vs-abac-granularity',
      question: {
        en: 'Why is simple Role-Based Access Control (RBAC) often insufficient to protect user data in multi-tenant SaaS applications?',
        bn: 'মাল্টি-টেন্যান্ট ক্লাউড সফটওয়্যারে কেবল সাধারণ রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল (RBAC) কেন তথ্যের নিরাপত্তা দিতে ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'RBAC checks broad roles (such as "is user a manager?"), but cannot determine horizontal data boundaries (such as "is manager A in company X allowed to read invoices from company Y?") without ABAC attribute checks',
          bn: 'RBAC কেবল সাধারণ পদবী দেখে (যেমন "ইউজার কি ম্যানেজার?"), কিন্তু কোম্পানি বা টেন্যান্টের সীমানা (যেমন কোম্পানি ক-এর ম্যানেজার কি কোম্পানি খ-এর বিল দেখতে পারবেন?) বিচার করতে পারে না'
        },
        {
          en: 'RBAC causes computer monitors to permanently display black-and-white colors',
          bn: 'RBAC ব্যবহারের ফলে মনিটরে কেবল সাদাকালো রঙ প্রদর্শিত হয়'
        },
        {
          en: 'Because RBAC was declared obsolete by international treaties in 2025',
          bn: 'কারণ ২০২৫ সালে আন্তর্জাতিক চুক্তির মাধ্যমে RBAC বাতিল করা হয়েছিল'
        },
        {
          en: 'RBAC reduces server CPU clock speed by exactly 50 percent',
          bn: 'RBAC সার্ভারের প্রসেসরের গতি ঠিক ৫০ শতাংশ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Both Alice and Bob are "managers". But Alice works at Acme Corp and Bob works at Globex. RBAC alone cannot separate them.',
        bn: 'দুজনেই "ম্যানেজার", কিন্তু দুজন আলাদা প্রতিষ্ঠানের। শুধু পদবী দেখে দুজনের ডেটা আলাদা রাখা অসম্ভব।'
      },
      explanation: {
        en: 'RBAC provides coarse-grained functional permissions; separating tenants requires fine-grained attributes such as tenant_id and owner_id.',
        bn: 'RBAC সাধারণ কাজের অধিকার দেয়; কিন্তু বিভিন্ন প্রতিষ্ঠানের তথ্য আলাদা রাখতে tenant_id এর মতো অ্যাট্রিবিউট যাচাই জরুরি।'
      }
    },
    {
      id: 'auth-ex3',
      kind: 'mcq',
      topic: 'http-status-404-vs-403',
      question: {
        en: 'Why do security best practices recommend returning HTTP 404 (Not Found) rather than HTTP 403 (Forbidden) when an unauthorized user attempts an IDOR lookup?',
        bn: 'অননুমোদিত কোনো ব্যবহারকারী IDOR আক্রমণ চালালে কেন তাকে HTTP ৪০৩ (Forbidden) এর বদলে HTTP ৪০৪ (Not Found) কোড দেওয়া উচিত?'
      },
      options: [
        {
          en: 'Returning 403 confirms to an attacker that the targeted record exists (enabling enumeration), whereas 404 conceals the existence of the private resource entirely',
          bn: '৪০৩ দিলে আক্রমণকারী নিশ্চিত হয়ে যায় যে ওই আইডির তথ্যটি ডেটাবেসে আছে (তথ্য খোঁজা সহজ হয়), কিন্তু ৪০৪ দিলে তথ্যটি আদৌ আছে কি নেই তা পুরোপুরি গোপন থাকে'
        },
        {
          en: 'HTTP 404 uses less network electricity than HTTP 403',
          bn: 'HTTP ৪০৪ ব্যবহারে ৪০৩ এর চেয়ে কম বিদ্যুৎ খরচ হয়'
        },
        {
          en: 'Because web browsers automatically restart whenever they receive a 403 error',
          bn: 'কারণ ৪০৩ এরর পেলে ওয়েব ব্রাউজার নিজে থেকেই রিস্টার্ট নেয়'
        },
        {
          en: 'HTTP 403 status codes were removed from the official HTTP specification',
          bn: 'কারণ এইচটিটিপি স্পেসিফিকেশন থেকে ৪০৩ কোডটি মুছে ফেলা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: '403 says: "It exists, but you can\'t have it." 404 says: "Nothing here." Giving no information protects privacy.',
        bn: '৪০৩ বলে: "জিনিসটি আছে কিন্তু আপনাকে দেব না।" আর ৪০৪ বলে: "এখানে কিছু নেই।" কোনো তথ্য ফাঁস না করাই উত্তম।'
      },
      explanation: {
        en: 'Returning 404 prevents oracle attacks that allow adversaries to map valid database IDs across the platform.',
        bn: '৪০৪ ফেরত দিলে আক্রমণকারী কোনো আইডির সত্যতা যাচাই করতে পারে না, ফলে পুরো সিস্টেমের তথ্য সুরক্ষিত থাকে।'
      }
    },
    {
      id: 'auth-ex4',
      kind: 'mcq',
      topic: 'database-row-level-security',
      question: {
        en: 'How does Database Row-Level Security (RLS) provide defense-in-depth against authorization bugs in application backend code?',
        bn: 'ডেটাবেসের রো-লেভেল সিকিউরিটি (RLS) কীভাবে ব্যাকএন্ড কোডের ভুলের বিরুদ্ধে বহুস্তরী নিরাপত্তা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'RLS policies are enforced directly inside the database engine; even if a backend developer forgets to filter by tenant_id in a query, the database automatically filters out unauthorized rows',
          bn: 'RLS সরাসরি ডেটাবেস ইঞ্জিনের ভেতরে কাজ করে; ফলে কোনো ডেভেলপার অসাবধানতাবশত কোয়েরিতে tenant_id ফিল্টার করতে ভুলে গেলেও ডেটাবেস নিজে থেকেই অননুমোদিত ডেটা বাদ দিয়ে দেয়'
        },
        {
          en: 'RLS compresses every database table into a single ZIP archive',
          bn: 'RLS সমস্ত ডেটাবেস টেবিলকে একটি জিপ (ZIP) ফাইলে সংকুচিত করে ফেলে'
        },
        {
          en: 'RLS automatically charges money to any unauthorized IP address',
          bn: 'RLS অননুমোদিত যেকোনো আইপি অ্যাড্রেস থেকে স্বয়ংক্রিয়ভাবে টাকা কেটে নেয়'
        },
        {
          en: 'Because RLS replaces database queries with mathematical calculus equations',
          bn: 'কারণ RLS সমস্ত কোয়েরিকে গণিতের জটিল সূত্রে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The security policy lives at the storage layer. Even buggy code cannot bypass database-level filtering.',
        bn: 'সুরক্ষা ব্যবস্থা ডেটাবেসের ভেতরেই গেঁথে থাকে; কোডে ভুল থাকলেও ডেটাবেস সীমা অতিক্রম করতে দেয় না।'
      },
      explanation: {
        en: 'Row-Level Security moves authorization enforcement down to the database tier, preventing software bugs from causing data leaks.',
        bn: 'রো-লেভেল সিকিউরিটি অনুমোদন প্রক্রিয়াকে ডেটাবেসের স্তরে নামিয়ে এনে সফটওয়্যার ভুলের কারণে তথ্য ফাঁসের ঝুঁকি বন্ধ করে।'
      }
    }
  ],
  quiz: {
    id: 'authority-keep-quiz',
    title: {
      en: 'Authorization, Access Control, and Object Security Quiz',
      bn: 'অনুমোদন, প্রবেশাধিকার নিয়ন্ত্রণ ও অবজেক্ট সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'ak-q1',
        kind: 'mcq',
        topic: 'horizontal-vs-vertical-escalation',
        question: {
          en: 'What is the distinction between Horizontal Privilege Escalation and Vertical Privilege Escalation?',
          bn: 'হরাইজন্টাল প্রিভিলেজ এসকেলেশন এবং ভার্টিক্যাল প্রিভিলেজ এসকেলেশনের মধ্যকার পার্থক্য কী?'
        },
        options: [
          {
            en: 'Horizontal escalation occurs when a user accesses data belonging to a peer at the same permission tier; vertical escalation occurs when a standard user gains higher administrative privileges',
            bn: 'হরাইজন্টাল এসকেলেশনে একজন ব্যবহারকারী একই স্তরের অন্য ব্যবহারকারীর তথ্য চুরি করে; আর ভার্টিক্যাল এসকেলেশনে একজন সাধারণ ব্যবহারকারী উচ্চতর অ্যাডমিন অধিকার লাভ করে'
          },
          {
            en: 'Horizontal escalation only affects wide monitors, while vertical escalation affects tall screens',
            bn: 'হরাইজন্টাল কেবল চওড়া মনিটরে হয় আর ভার্টিক্যাল কেবল লম্বা স্ক্রিনে ঘটে'
          },
          {
            en: 'Vertical escalation is legal under cybersecurity guidelines, while horizontal is not',
            bn: 'ভার্টিক্যাল আক্রমণ আইনিভাবে বৈধ কিন্তু হরাইজন্টাল আক্রমণ অবৈধ'
          },
          {
            en: 'Both terms describe identical physical movements of database server racks',
            bn: 'উভয় শব্দ সার্ভার র‍্যাকের শারীরিক নড়াচড়াকে বোঝায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Horizontal = moving sideways to a peer. Vertical = moving upwards to an admin.',
          bn: 'হরাইজন্টাল মানে পাশাপাশি অন্য সমপর্যায়ের কারও ডেটা দেখা; আর ভার্টিক্যাল মানে উপরে উঠে অ্যাডমিন হওয়া।'
        },
        explanation: {
          en: 'Horizontal escalation targets peer resources (IDOR), whereas vertical escalation targets elevated administrative functions.',
          bn: 'হরাইজন্টাল আক্রমণ সহকর্মীর তথ্যে হানা দেয় আর ভার্টিক্যাল আক্রমণ অ্যাডমিন ক্ষমতা ছিনতাই করে।'
        }
      },
      {
        id: 'ak-q2',
        kind: 'mcq',
        topic: 'ui-only-access-control-fallacy',
        question: {
          en: 'Why is hiding an "Admin Settings" button in frontend UI code considered completely useless as a security control?',
          bn: 'ফ্রন্টএন্ড কোডে কেবল "অ্যাডমিন সেটিংস" বাটনটি লুকিয়ে রাখলে কেন তা কোনো কার্যকর নিরাপত্তা হিসেবে গণ্য হয় না?'
        },
        options: [
          {
            en: 'An attacker can inspect JavaScript code or directly submit HTTP requests to backend API endpoints, which will execute the administrative action if server-side authorization is missing',
            bn: 'আক্রমণকারী খুব সহজেই ব্রাউজারের কোড দেখতে পারে বা সরাসরি ব্যাকএন্ড এপিআইতে রিকোয়েস্ট পাঠাতে পারে; সার্ভারে যাচাই না থাকলে কাজগুলো ঠিকই কার্যকর হয়ে যাবে'
          },
          {
            en: 'Hiding buttons consumes 100 percent of client computer battery power',
            bn: 'বাটন লুকিয়ে রাখলে ডিভাইসের ব্যাটারি ১০০ শতাংশ খরচ হয়ে যায়'
          },
          {
            en: 'Because hidden buttons automatically delete database tables after 24 hours',
            bn: 'কারণ লুকানো বাটন ২৪ ঘণ্টা পর ডেটাবেস মুছে ফেলে'
          },
          {
            en: 'Web browser regulations mandate that all HTML buttons must be permanently visible',
            bn: 'কারণ ব্রাউজারের নিয়মে সব বাটন সবসময় দৃশ্যমান রাখার বাধ্যবাধকতা রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The frontend belongs to the user. Security decisions must always be enforced on the backend server.',
          bn: 'ফ্রন্টএন্ড ব্রাউজারের নিয়ন্ত্রণে থাকে; নিরাপত্তার যেকোনো সিদ্ধান্ত সবসময় সার্ভারে কার্যকর করতে হয়।'
        },
        explanation: {
          en: 'Client-side UI checks are user-experience conveniences; true security boundaries exist strictly on the backend API.',
          bn: 'ফ্রন্টএন্ড চেক কেবল ব্যবহারকারীর দেখার সুবিধার জন্য; আসল নিরাপত্তা প্রাচীর কেবল ব্যাকএন্ড সার্ভারেই তৈরি হয়।'
        }
      },
      {
        id: 'ak-q3',
        kind: 'mcq',
        topic: 'uuids-and-authorization-limits',
        question: {
          en: 'While using UUIDv4 random identifiers prevents sequential ID scraping, why does using UUIDs NOT solve authorization by itself?',
          bn: 'UUIDv4 ব্যবহার করলে ক্রমানুসারে আইডি অনুমান করা বন্ধ হলেও এটি নিজে থেকে কেন সম্পূর্ণ অনুমোদন সমস্যার সমাধান করতে পারে না?'
        },
        options: [
          {
            en: 'If an attacker discovers a UUID through referral links, shared screens, or API responses, a vulnerable endpoint without authorization checks will still grant unauthorized access',
            bn: 'আক্রমণকারী যদি কোনো শেয়ার্ড লিঙ্ক, স্ক্রিনশট বা অন্য এপিআই থেকে UUID টি জেনে যায়, তবে অনুমোদন যাচাই না থাকা সার্ভার তাকেও অননুমোদিত ডেটা দেখিয়ে দেবে'
          },
          {
            en: 'UUIDs permanently crash database query engines when tables exceed 10 rows',
            bn: 'টেবিলে ১০টির বেশি রো থাকলে UUID ডেটাবেস ক্র্যাশ করিয়ে দেয়'
          },
          {
            en: 'Because UUID strings are translated into German words during execution',
            bn: 'কারণ কোড চলার সময় UUID স্ট্রিংগুলো জার্মান ভাষায় রূপান্তরিত হয়ে যায়'
          },
          {
            en: 'UUIDs were banned by the Internet Engineering Task Force in 2023',
            bn: 'কারণ ২০২৩ সালে আইইটিএফ সংস্থা UUID নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Security through obscurity is not authorization. Knowing the name of a file should not give you permission to read it.',
          bn: 'আইডি জটিল করলেই নিরাপত্তা হয় না; ফাইলের অদ্ভুত নাম জানা মানেই তা পড়ার অধিকার থাকা নয়।'
        },
        explanation: {
          en: 'UUIDs prevent enumeration but do not enforce access control; endpoints must explicitly verify user rights regardless of identifier format.',
          bn: 'ইউইউআইডি কেবল অনুমান ঠেকায়, কিন্তু অধিকার নিশ্চিত করে না; তাই আইডির ধরন যাই হোক, মালিকানা যাচাই বাধ্যতামূলক।'
        }
      },
      {
        id: 'ak-q4',
        kind: 'mcq',
        topic: 'step-up-authentication-elevation',
        question: {
          en: 'What is the purpose of implementing "Step-Up Authentication" before allowing users to perform highly sensitive administrative operations (such as changing passwords or deleting organizations)?',
          bn: 'অত্যন্ত সংবেদনশীল কাজ (যেমন পাসওয়ার্ড বদলানো বা পুরো টিম মুছে ফেলা) করার পূর্বে "স্টেপ-আপ অথেনটিকেশন" চাওয়ার মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It re-verifies the user credentials (via password re-entry or multi-factor prompt) immediately prior to high-risk mutations, defending against session hijacking and unattended unlocked laptops',
            bn: 'উচ্চ ঝুঁকির কাজের ঠিক পূর্বে পাসওয়ার্ড বা ওটিপি চেয়ে ব্যবহারকারীর পরিচয় নিশ্চিত করা হয়, যা সেশন চুরি বা খোলা পড়ে থাকা ল্যাপটপের অপব্যবহার রোধ করে'
          },
          {
            en: 'It forces the client to download 10 gigabytes of software updates',
            bn: 'এটি ক্লায়েন্টকে ১০ গিগাবাইট সফটওয়্যার আপডেট ডাউনলোড করতে বাধ্য করে'
          },
          {
            en: 'Because step-up authentication reduces server electricity costs to zero',
            bn: 'কারণ এতে সার্ভারের বিদ্যুৎ খরচ পুরোপুরি শূন্য হয়ে যায়'
          },
          {
            en: 'Step-up authentication is only required on Tuesdays and Thursdays',
            bn: 'কারণ এটি কেবল সপ্তাহের নির্দিষ্ট দিনে ব্যবহার করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you leave your desk for coffee, someone could click "Delete Account". Step-up auth requires your password again.',
          bn: 'অফিসে ল্যাপটপ খোলা রেখে কফি খেতে গেলে কেউ যেন অ্যাকাউন্ট ডিলিট করতে না পারে, সেজন্য আবার পাসওয়ার্ড চাওয়া হয়।'
        },
        explanation: {
          en: 'Step-up authentication provides critical defense for high-value actions by demanding fresh cryptographic proof of user presence.',
          bn: 'স্টেপ-আপ অথেনটিকেশন গুরুত্বপূর্ণ কাজের সময় ব্যবহারকারীর সক্রিয় উপস্থিতি পুনরায় যাচাই করে সর্বোচ্চ নিরাপত্তা নিশ্চিত করে।'
        }
      }
    ]
  }
};
