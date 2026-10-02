import type { Hub } from '../../lib/types';
import { MeetAuthzLesson } from './lessons/meet-authz';
import { RbacBasicsLesson } from './lessons/rbac-basics';
import { PermissionsChecksLesson } from './lessons/permissions-checks';
import { AbacPoliciesLesson } from './lessons/abac-policies';
import { OwnershipScopesLesson } from './lessons/ownership-scopes';
import { ApiKeysTokensLesson } from './lessons/api-keys-tokens';
import { AuthzAuditLesson } from './lessons/authz-audit';
import { AuthzCapstoneLesson } from './lessons/authz-capstone';

export const authorizationHub: Hub = {
  slug: 'authorization',
  name: 'Authorization & Access Control',
  icon: '🛡️',
  tagline: {
    en: 'Master enterprise access control architectures: RBAC, ABAC, relationship-based access, fine-grained scopes, and tamper-evident audit trails.',
    bn: 'এন্টারপ্রাইজ এক্সেস কন্ট্রোল আর্কিটেকচার আয়ত্ত করুন: RBAC, ABAC, রিলেশনশিপ-ভিত্তিক এক্সেস, সূক্ষ্ম স্কোপ এবং ট্যাম্পার-প্রুফ অডিট ট্রেইল।',
  },
  intro: {
    en: 'While authentication verifies who an entity is, authorization enforces what that entity is permitted to do. In modern software engineering, improper access control remains one of the top critical vulnerabilities (OWASP Top 10 Broken Access Control). This hub takes you on an architectural journey from core role-based access control (RBAC) to complex multi-dimensional attribute-based policies (ABAC), object-level ownership scopes, API key permissions, and comprehensive security audit pipelines.',
    bn: 'অথেনটিকেশন যখন নিশ্চিত করে ব্যবহারকারী কে, তখন অথরাইজেশন নির্ধারণ করে ব্যবহারকারীর কী কী করার অনুমতি রয়েছে। আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ত্রুটিপূর্ণ এক্সেস কন্ট্রোল হলো সবচেয়ে মারাত্মক নিরাপত্তা ঝুঁকিগুলোর একটি (OWASP শীর্ষ ১০ ব্রোকেন এক্সেস কন্ট্রোল)। এই হাবে আপনি মৌলিক রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) থেকে শুরু করে বহুমাত্রিক অ্যাট্রিবিউট-ভিত্তিক পলিসি (ABAC), অবজেক্ট-লেভেল মালিকানা স্কোপ, এপিআই কি পারমিশন এবং সমন্বিত অডিট লগ আর্কিটেকচার পুঙ্খানুপুঙ্খভাবে শিখবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Access Control Foundations & RBAC',
        bn: 'ধাপ ১ — এক্সেস কন্ট্রোলের মূল ভিত্তি ও RBAC',
      },
      items: [
        {
          en: 'Overview of identification versus authorization and the default-deny principle',
          bn: 'আইডেন্টিফিকেশন বনাম অথরাইজেশনের সার্বিক পরিচিতি এবং ডিফল্ট-ডিনাই নীতি',
        },
        {
          en: 'Role-Based Access Control (RBAC) models, role hierarchies, and permission matrices',
          bn: 'রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) মডেল, রোলের শ্রেণিবিন্যাস এবং পারমিশন ম্যাট্রিক্স',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Enforcement Gates & Multi-Dimensional Policies',
        bn: 'ধাপ ২ — ইনফোর্সমেন্ট গেট এবং বহুমাত্রিক পলিসি',
      },
      items: [
        {
          en: 'Enforcement middleware, gatekeepers, and policy decision points (PDP / PEP)',
          bn: 'ইনফোর্সমেন্ট মিডলওয়্যার, গেটকিপার এবং পলিসি ডিসিশন পয়েন্ট (PDP / PEP)',
        },
        {
          en: 'Attribute-Based Access Control (ABAC) using context, environment, and temporal constraints',
          bn: 'কনটেক্সট, পরিবেশ এবং সময়ের শর্তাবলি ব্যবহার করে অ্যাট্রিবিউট-ভিত্তিক পলিসি (ABAC)',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Resource Ownership & Machine Delegation',
        bn: 'ধাপ ৩ — রিসোর্স মালিকানা এবং মেশিন ডেলিগেশন',
      },
      items: [
        {
          en: 'Object-level permissions, multitenant isolation, and mitigating Insecure Direct Object References (IDOR)',
          bn: 'অবজেক্ট-লেভেল পারমিশন, মাল্টিটেন্যান্ট আইসোলেশন এবং IDOR নিরাপত্তা ঝুঁকি প্রতিরোধ',
        },
        {
          en: 'Service-to-service credentials, API key rotation, granular scopes, and machine access delegation',
          bn: 'সার্ভিস-টু-সার্ভিস ক্রেডেনশিয়াল, এপিআই কি রোটেশন, সুনির্দিষ্ট স্কোপ এবং মেশিন এক্সেস ডেলিগেশন',
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Tamper-Resistant Auditing & Production Capstone',
        bn: 'ধাপ ৪ — বিকৃতি-প্রতিরোধী অডিট এবং প্রোডাকশন ক্যাপস্টোন',
      },
      items: [
        {
          en: 'Cryptographic append-only audit logging and anomalous denial spike detection',
          bn: 'ক্রিপ্টোগ্রাফিক অ্যাপেন্ড-অনলি অডিট লগিং এবং অস্বাভাবিক ডিনাই স্পাইক সনাক্তকরণ',
        },
        {
          en: 'Capstone: Building an end-to-end zero-trust enterprise authorization engine',
          bn: 'ক্যাপস্টোন: শুরু থেকে শেষ একটি পূর্ণাঙ্গ জিরো-ট্রাস্ট এন্টারপ্রাইজ অথরাইজেশন ইঞ্জিন তৈরি',
        },
      ],
    },
  ],
  lessons: [
    MeetAuthzLesson,
    RbacBasicsLesson,
    PermissionsChecksLesson,
    AbacPoliciesLesson,
    OwnershipScopesLesson,
    ApiKeysTokensLesson,
    AuthzAuditLesson,
    AuthzCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Multi-Tenant Hierarchical RBAC Authorization Engine',
        bn: 'মাল্টি-টেন্যান্ট হায়ারার্কিক্যাল RBAC অথরাইজেশন ইঞ্জিন',
      },
      brief: {
        en: 'Design and build a high-performance role-based access control engine in Node.js. Implement role inheritance (Superadmin > Org Admin > Editor > Viewer), permission caching with Redis, and a policy evaluation middleware that rejects unauthorized API requests with precise 403 Forbidden responses.',
        bn: 'Node.js-এ একটি দ্রুতগতির রোল-ভিত্তিক এক্সেস কন্ট্রোল ইঞ্জিন তৈরি করুন। রোলের উত্তরাধিকার (সুপারএডমিন > অর্গ এডমিন > এডিটর > ভিউয়ার), রেডিসে পারমিশন ক্যাশিং এবং অননুমোদিত রিকোয়েস্ট আটকে ৪০৩ রেসপন্স পাঠানো মিডলওয়্যার যুক্ত করুন।',
      },
      difficulty: 'intermediate',
    },
    {
      title: {
        en: 'Dynamic ABAC Policy Engine with Temporal & Geolocation Rules',
        bn: 'সময় ও লোকেশন শর্তযুক্ত ডায়নামিক ABAC পলিসি ইঞ্জিন',
      },
      brief: {
        en: 'Implement an Attribute-Based Access Control evaluator evaluating user attributes (department, clearance), resource metadata (classification, tenant), and environmental factors (business hours, approved IP subnets). Test that requests outside operating hours are denied even for administrative accounts.',
        bn: 'ইউজার অ্যাট্রিবিউট (বিভাগ, ক্লিয়ারেন্স), রিসোর্স মেটাডেটা (শ্রেণিবিভাগ, টেন্যান্ট) এবং পরিবেশগত তথ্য (অফিস সময়, আইপি সাবনেট) বিশ্লেষণকারী একটি ABAC ইঞ্জিন তৈরি করুন। অফিসের সময়ের বাইরে অ্যাডমিন অ্যাকাউন্ট হলেও এক্সেস আটকে দেওয়ার নিয়ম পরীক্ষা করুন।',
      },
      difficulty: 'advanced',
    },
    {
      title: {
        en: 'Cryptographically Verified Append-Only Security Audit Trail',
        bn: 'ক্রিপ্টোগ্রাফিক যাচাইকৃত অ্যাপেন্ড-অনলি সিকিউরিটি অডিট ট্রেইল',
      },
      brief: {
        en: 'Construct an authorization telemetry pipeline that logs every access evaluation into a hash-chained, tamper-evident log store. Implement automated detection for abnormal permission denial spikes indicating brute-force or privilege escalation probes.',
        bn: 'একটি অথরাইজেশন টেলিমেট্রি পাইপলাইন তৈরি করুন যা প্রতিটি এক্সেস মূল্যায়নকে হ্যাশ-চেইনের মাধ্যমে ট্যাম্পার-প্রুফ লগ স্টোরে জমা রাখে। কোনো হ্যাকার প্রভিলেজ এসকেলেশন বা ব্রুট-ফোর্স চালানোর চেষ্টা করলে অস্বাভাবিক ডিনাই স্পাইক নিজে থেকেই সনাক্ত করার ব্যবস্থা যুক্ত করুন।',
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    {
      en: 'Enforce Default Deny: Always reject access unless an explicit allow rule grants permission.',
      bn: 'ডিফল্ট ডিনাই প্রয়োগ করুন: সুস্পষ্ট অনুমোদনের নিয়ম ছাড়া যেকোনো এক্সেস সর্বদা সরাসরি বাতিল করুন।',
    },
    {
      en: 'Principle of Least Privilege: Grant users and services only the minimum permissions necessary to perform their specific job functions.',
      bn: 'ন্যূনতম অধিকারের নীতি: ব্যবহারকারী ও সার্ভিসগুলোকে কেবল তাদের নির্দিষ্ট কাজের জন্য প্রয়োজনীয় ন্যূনতম পারমিশন প্রদান করুন।',
    },
    {
      en: 'Validate Object Ownership on Every Fetch: Defend against IDOR by checking ownership at the database query layer, never relying on client-supplied IDs.',
      bn: 'প্রতিটি রিকোয়েস্টে রিসোর্সের মালিকানা যাচাই করুন: ডাটাবেজ কোয়েরির স্তরে মালিকানা যাচাই করে IDOR ঝুঁকি দূর করুন, ক্লায়েন্টের পাঠানো আইডির ওপর অন্ধ বিশ্বাস করবেন না।',
    },
    {
      en: 'Centralize Policy Decisions: Separate authorization policy logic from business controllers using the Policy Decision Point (PDP) pattern.',
      bn: 'পলিসি সিদ্ধান্ত এক জায়গায় কেন্দ্রীভূত করুন: PDP প্যাটার্ন ব্যবহার করে বিজনেস লজিক থেকে অথরাইজেশন নিয়ম আলাদা ও সংহত রাখুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is an Insecure Direct Object Reference (IDOR) vulnerability, and how do you remediate it in production APIs?',
        bn: 'ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) দুর্বলতা কী এবং প্রোডাকশন এপিআইতে এটি কীভাবে দূর করবেন?',
      },
      a: {
        en: 'IDOR occurs when an application exposes a reference to an internal database object (such as /api/documents/42) and fails to verify whether the authenticated user actually owns or has permission to view that specific record. Remediate IDOR by scoping database queries with the authenticated tenant/user ID (e.g., SELECT * FROM documents WHERE id = 42 AND owner_id = currentUser.id) rather than checking authentication alone.',
        bn: 'IDOR ঘটে যখন একটি অ্যাপ্লিকেশন সরাসরি ডাটাবেজ অবজেক্টের রেফারেন্স প্রকাশ করে ( যেমন /api/documents/42 ) কিন্তু প্রমাণীকৃত ব্যবহারকারীর সেই নির্দিষ্ট রেকর্ডটি দেখার অধিকার আছে কি না তা যাচাই করতে ব্যর্থ হয়। এটি দূর করতে কেবল লগইন যাচাই না করে ডাটাবেজ কোয়েরির সাথে বর্তমান ইউজার বা অর্গানাইজেশন আইডি যুক্ত করে দিন ( যেমন SELECT * FROM documents WHERE id = 42 AND owner_id = currentUser.id )।',
      },
    },
    {
      q: {
        en: 'How does Attribute-Based Access Control (ABAC) differ fundamentally from Role-Based Access Control (RBAC)?',
        bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল (ABAC) কীভাবে রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) থেকে মৌলিকভাবে আলাদা?',
      },
      a: {
        en: 'RBAC maps static permissions to broad user roles (Admin, Editor, Viewer). While simple to manage, RBAC suffers from "role explosion" when granular rules (e.g., time of day, location, document classification) are needed. ABAC evaluates dynamic boolean policies across 4 dimensions: Subject attributes (clearance, department), Resource attributes (owner, sensitivity), Action (read, write), and Environment context (current time, IP geolocation).',
        bn: 'RBAC ব্যবহারকারীর সাধারণ ভূমিকা বা রোলের সাথে নির্দিষ্ট পারমিশন যুক্ত করে ( যেমন অ্যাডমিন, এডিটর, ভিউয়ার )। এটি সহজ হলেও সময়ের শর্ত বা ভৌগোলিক অবস্থানের মতো জটিল নিয়ম যুক্ত করতে গেলে অস্বাভাবিক রোলের সংখ্যা বৃদ্ধি পায়। অন্যদিকে ABAC চারটি মাত্রার (সাবজেক্টের বৈশিষ্ট্য, রিসোর্সের বৈশিষ্ট্য, কাজের ধরন এবং পরিবেশগত প্রেক্ষাপট) ওপর ভিত্তি করে ডায়নামিক বুলিয়ান পলিসির মাধ্যমে সিদ্ধান্ত গ্রহণ করে।',
      },
    },
    {
      q: {
        en: 'What is the role of Policy Decision Points (PDP) versus Policy Enforcement Points (PEP) in modern decoupled authorization architectures?',
        bn: 'আধুনিক ডিকাপলড অথরাইজেশন আর্কিটেকচারে পলিসি ডিসিশন পয়েন্ট (PDP) এবং পলিসি ইনফোর্সমেন্ট পয়েন্টের (PEP) ভূমিকা কী?',
      },
      a: {
        en: 'The PEP intercepts user requests at API gateways, routers, or controllers and queries the PDP for an authorization decision. The PDP evaluates the requested action against centralized policy definitions and context, returning a binary ALLOW or DENY verdict. Decoupling ensures that authorization rules can be updated instantly across microservices without modifying application business code.',
        bn: 'PEP এপিআই গেটওয়ে বা কন্ট্রোলারে রিকোয়েস্ট আটকে দেয় এবং অনুমোদনের সিদ্ধান্তের জন্য PDP-কে অনুরোধ পাঠায়। PDP কেন্দ্রীভূত পলিসির নিয়ম ও কনটেক্সট যাচাই করে সরাসরি ALLOW অথবা DENY রায় ফেরত দেয়। এই পৃথকীকরণের ফলে অ্যাপ্লিকেশনের মূল কোড পরিবর্তন না করেই সমস্ত মাইক্রোসার্ভিসের অনুমোদনের নিয়ম এক জায়গা থেকে সাথে সাথে পরিবর্তন করা যায়।',
      },
    },
    {
      q: {
        en: 'How should API keys and machine service tokens be scoped to prevent catastrophic blast radius upon leakage?',
        bn: 'ফাঁস হয়ে যাওয়ার ক্ষতিকর প্রভাব সর্বনিম্ন রাখতে এপিআই কি এবং সার্ভিস টোকেন কীভাবে স্কোপ করা উচিত?',
      },
      a: {
        en: 'Never issue wildcard "god-keys" that have unrestricted access across an entire platform. Instead, enforce fine-grained granular scopes (e.g., read:payments instead of write:*), restrict tokens to specific IP CIDR ranges, assign short lifespans with automated rotation, and hash API keys in the database using SHA-256 so database compromises do not leak plaintext keys.',
        bn: 'কখনোই প্ল্যাটফর্মের সব ক্ষমতার অধিকারী ওয়াইল্ডকার্ড বা গড-কি তৈরি করবেন না। বরং সুনির্দিষ্ট স্কোপ প্রয়োগ করুন ( যেমন write:* এর বদলে read:payments ), টোকেনের জন্য অনুমোদিত আইপি রেঞ্জ নির্দিষ্ট করে দিন, সংক্ষিপ্ত মেয়াদ ও রোটেশন যুক্ত করুন এবং ডাটাবেজে প্লেইনটেক্সট কি না রেখে SHA-২৫৬ হ্যাশ সংরক্ষণ করুন যাতে ডাটাবেজ ফাঁস হলেও কি নিরাপদ থাকে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'AWS Identity and Access Management (IAM): Evaluates billions of JSON policy rules daily using default-deny and explicit allow evaluations.',
      bn: 'এডব্লিউএস আইডেন্টিটি অ্যান্ড এক্সেস ম্যানেজমেন্ট (IAM): প্রতিদিন ডিফল্ট-ডিনাই এবং এক্সপ্লিসিট-অ্যালাউ নিয়মের মাধ্যমে শত কোটি JSON পলিসি মূল্যায়ন করে।',
    },
    {
      en: 'Google Zanzibar: A globally distributed relationship-based access control (ReBAC) system powering Google Drive, YouTube, and Cloud IAM.',
      bn: 'গুগল জানজিবার: একটি বৈশ্বিক রিলেশনশিপ-ভিত্তিক এক্সেস কন্ট্রোল (ReBAC) সিস্টেম যা গুগল ড্রাইভ, ইউটিউব ও ক্লাউড আইএএম পরিচালনা করে।',
    },
    {
      en: 'GitHub Fine-Grained Personal Access Tokens: Allows developers to restrict access to specific repositories with isolated resource permissions.',
      bn: 'গিটহাব ফাইন-গ্রেইনড পার্সোনাল এক্সেস টোকেন: ডেভেলপারদের নির্দিষ্ট রিপোজিটরির ওপর সুনির্দিষ্ট রিসোর্স পারমিশন বরাদ্দ করার সুবিধা দেয়।',
    },
    {
      en: 'Stripe Restricted API Keys: Enables fintech applications to create least-privilege tokens restricted to single endpoints like invoice retrieval.',
      bn: 'স্ট্রাইপ রেস্ট্রিক্টেড এপিআই কি: ফিনটেক অ্যাপগুলোকে একক এন্ডপয়েন্টে (যেমন শুধু ইনভয়েস দেখা) সীমিত ন্যূনতম-অধিকারের টোকেন তৈরির সুযোগ দেয়।',
    },
  ],
};
