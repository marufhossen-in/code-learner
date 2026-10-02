import type { Lesson } from '../../../lib/types';

export const RolesAndTheGrantLesson: Lesson = {
  slug: 'roles-and-the-grant',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL Security & Multi-Tenancy: RBAC, RLS & Isolation',
    bn: 'PostgreSQL নিরাপত্তা ও মাল্টি-টেন্যান্সি: RBAC, RLS ও আইসোলেশন'
  },
  summary: {
    en: 'Master enterprise relational security, role-based access control, and row-level security across 10 structured topics. Understand unified Role architecture and user versus group mechanics. Design role hierarchies with INHERIT and automate permissions with ALTER DEFAULT PRIVILEGES. Compare multi-tenancy models across database, schema, and row isolation. Enforce declarative tenant boundaries using Row-Level Security (RLS) policies. Set session tenant context using current_setting and SET LOCAL. Encrypt sensitive columns with pgcrypto, and build secure multi-tenant queries in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে এন্টারপ্রাইজ রিলেশনাল নিরাপত্তা, রোল-বেসড এক্সেস কন্ট্রোল (RBAC) এবং রো-লেভেল সিকিউরিটি আয়ত্ত করুন। সমন্বিত রোল আর্কিটেকচার এবং ব্যবহারকারী বনাম গ্রুপ মেকানিজম বুঝুন। INHERIT দিয়ে রোল হায়ারার্কি সাজান এবং ALTER DEFAULT PRIVILEGES দিয়ে ভবিষ্যৎ পারমিশন স্বয়ংক্রিয় করুন। ডাটাবেস, স্কিমা ও রো আইসোলেশনের মধ্যে মাল্টি-টেন্যান্সি মডেল তুলনা করুন। রো-লেভেল সিকিউরিটি (RLS) পলিসি দিয়ে নিশ্চিত ডেটা নিরাপত্তা প্রয়োগ করুন। current_setting ও SET LOCAL দিয়ে সেশন টেন্যান্ট কনটেক্সট সেট করুন। pgcrypto দিয়ে সংবেদনশীল কলাম এনক্রিপ্ট করুন এবং Node.js-এ নিরাপদ মাল্টি-টেন্যান্ট কুয়েরি চালান।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-postgres-release',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL in Production: Tuning, Indexing & EXPLAIN',
      bn: 'প্রোডাকশনে PostgreSQL: টিউনিং, ইনডেক্সিং ও EXPLAIN'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Unified Role Concept: Users and Groups', bn: '১. সমন্বিত রোল ধারণা: ব্যবহারকারী ও গ্রুপ' } },
    {
      type: 'para',
      text: {
        en: 'When you configure database access, PostgreSQL does not separate users and permission groups into two different concepts. Instead, the engine unifies them into a single entity called a Role. Individual accounts gain network login privileges, while permission groups bundle authorization grants for multiple members to inherit cleanly.',
        bn: 'যখন আপনি ডাটাবেস নিরাপত্তা কনফিগার করেন, তখন PostgreSQL ইউজার ও পারমিশন গ্রুপকে দুটি আলাদা ধারণা হিসেবে দেখে না। বরং ইঞ্জিনটি উভয়কে রোল (Role) নামক একটিমাত্র সত্তায় একত্রিত করে। একক অ্যাকাউন্টগুলো সরাসরি নেটওয়ার্কে লগইন সুবিধা পায়, আর গ্রুপগুলো বিভিন্ন পারমিশন একসাথে গুচ্ছাকারে ধারণ করে যা সদস্যরা উত্তরাধিকার সূত্রে পায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Create a group role (NOLOGIN):
CREATE ROLE readonly_analyst NOLOGIN;

-- 2. Create an individual login role (User account):
CREATE ROLE data_engineer_sam WITH LOGIN PASSWORD 'SecureP@ss2026';

-- 3. Assign group membership (Sam inherits analyst privileges):
GRANT readonly_analyst TO data_engineer_sam;`,
      caption: {
        en: 'Roles with NOLOGIN act as permission groups, inherited by individual user roles.',
        bn: 'NOLOGIN রোলগুলো সিকিউরিটি গ্রুপ হিসেবে কাজ করে যা সাধারণ ইউজাররা উত্তরাধিকার সূত্রে পায়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Row-Level Security (RLS) Multi-Tenant Policy Evaluation', bn: 'রো-লেভেল সিকিউরিটি (RLS) মাল্টি-টেন্যান্ট পলিসি মূল্যায়ন' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Row Level Security Evaluation Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="160" height="90" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Client Application</text>
<text x="80" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Tenant ID: "acme_corp"</text>
<text x="80" y="90" font-size="9" fill="#4ade80" text-anchor="middle">SELECT * FROM orders</text>

<path d="M165,65 L235,65" stroke="#38bdf8" stroke-width="2"/>

<rect x="240" y="10" width="180" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="330" y="35" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">RLS Policy Engine</text>
<text x="330" y="58" font-size="9" fill="#cbd5e1" text-anchor="middle">ENABLE ROW LEVEL SECURITY</text>
<rect x="255" y="72" width="150" height="30" rx="4" fill="#0f172a" stroke="#f59e0b"/>
<text x="330" y="92" font-size="9" fill="#fbbf24" text-anchor="middle">WHERE tenant_id = "acme"</text>

<path d="M425,65 L485,65" stroke="#10b981" stroke-width="2"/>

<rect x="490" y="20" width="170" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="575" y="45" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">Filtered Rows Returned</text>
<text x="575" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">Acme Corp Rows (1042)</text>
<text x="575" y="90" font-size="9" fill="#f87171" text-anchor="middle">Other Tenants Blocked!</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Role-Based Access Control (RBAC) & Privileges', bn: '২. রোল-বেসড এক্সেস কন্ট্রোল (RBAC) ও প্রিভিলেজ' } },
    {
      type: 'para',
      text: {
        en: 'Granting permissions directly to individual developers becomes an administrative nightmare as teams grow. Role-Based Access Control (RBAC) models define abstract roles based on job functions (e.g. app_reader, app_writer, admin). Administrators grant schema permissions to roles, and subsequently grant those roles to employees.',
        bn: 'দল বড় হওয়ার সাথে সাথে প্রতিটি ডেভেলপারকে আলাদাভাবে পারমিশন দিতে গেলে জটিলতা তৈরি হয়। রোল-বেসড এক্সেস কন্ট্রোল (RBAC) কাজের দায়িত্বের ওপর ভিত্তি করে কিছু সাধারণ গ্রুপ তৈরি করে (যেমন app_reader, app_writer, admin)। অ্যাডমিনরা স্কিমার পারমিশন এই রোলগুলোতে দেন এবং পরবর্তীতে কর্মীদের ওই রোলের সদস্য বানিয়ে দেন।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create functional application roles:
CREATE ROLE app_reader NOLOGIN;
CREATE ROLE app_writer NOLOGIN;

-- Grant schema and table permissions:
GRANT USAGE ON SCHEMA public TO app_reader, app_writer;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_reader;
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_writer;

-- User roles inherit these permissions dynamically:
GRANT app_reader TO data_engineer_sam;`,
      caption: {
        en: 'RBAC decouples permission grants from individual employee accounts.',
        bn: 'RBAC পারমিশন ব্যবস্থাপনাকে সরাসরি কর্মীদের অ্যাকাউন্ট থেকে আলাদা ও সুশৃঙ্খল রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Future Tables: ALTER DEFAULT PRIVILEGES', bn: '৩. ভবিষ্যৎ টেবিলের পারমিশন: ALTER DEFAULT PRIVILEGES' } },
    {
      type: 'para',
      text: {
        en: 'A common pitfall occurs when GRANT SELECT ON ALL TABLES is executed, but subsequent tables created next week are inaccessible to readers. In PostgreSQL, object permissions apply strictly to existing objects. The ALTER DEFAULT PRIVILEGES command establishes automatic permission templates applied immediately whenever new tables are created.',
        bn: 'একটি সাধারণ সমস্যা হলো GRANT SELECT ON ALL TABLES চালানোর পর পরের সপ্তাহে নতুন টেবিল তৈরি করলে রিডাররা তা আর পড়তে পারে না। PostgreSQL-এ পারমিশন কেবল বর্তমান অবজেক্টেই কার্যকর হয়। ALTER DEFAULT PRIVILEGES কমান্ড একটি টেমপ্লেট তৈরি করে যা ভবিষ্যতে যেকোনো নতুন টেবিল তৈরি হওয়ামাত্র স্বয়ংক্রিয়ভাবে পারমিশন সেট করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Ensure all future tables created by migrations automatically grant access:
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT SELECT ON TABLES TO app_reader;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT INSERT, UPDATE, DELETE ON TABLES TO app_writer;

-- Also configure sequence default privileges for auto-increment keys:
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT USAGE, SELECT ON SEQUENCES TO app_writer;`,
      caption: {
        en: 'ALTER DEFAULT PRIVILEGES automates security across dynamic continuous deployments.',
        bn: 'ALTER DEFAULT PRIVILEGES নতুন টেবিল তৈরির সাথে সাথে সঠিক পারমিশন নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Multi-Tenancy Architecture Patterns in PostgreSQL', bn: '৪. PostgreSQL-এ মাল্টি-টেন্যান্সি আর্কিটেকচার প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'SaaS platforms partition multi-tenant data using three primary architectural patterns. First, Database-per-tenant provides maximum isolation and independent backups, but scales poorly past 500 tenants due to process overhead. Second, Schema-per-tenant uses a shared database with separate schemas, balancing isolation with shared connections. Third, Shared-table with Row-Level Security scales to millions of tenants with minimal memory overhead.',
        bn: 'SaaS প্ল্যাটফর্মগুলো ৩ টি প্রধান কাঠামোর যেকোনো একটি ব্যবহার করে বিভিন্ন গ্রাহকের ডেটা আলাদা রাখে। প্রথমত, ডাটাবেস-পার-টেন্যান্ট সর্বোচ্চ সুরক্ষা দেয় কিন্তু ৫০০টির বেশি হলে মেমরি সংকট হয়। দ্বিতীয়ত, স্কিমা-পার-টেন্যান্ট একই ডাটাবেসে আলাদা স্কিমা ব্যবহার করে সুন্দর ভারসাম্য তৈরি করে। তৃতীয়ত, রো-লেভেল সিকিউরিটি সহ শেয়ার্ড-টেবিল মডেল মেমরি অপচয় ছাড়াই লাখ লাখ গ্রাহকের ডেটা সামলাতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MULTI-TENANCY ISOLATION SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Dimension         | Database-per-Tenant| Schema-per-Tenant  | Shared-Table + RLS |
+-------------------+--------------------+--------------------+--------------------+
| Data Isolation    | Complete / Physical| Logical Namespace  | Declarative Policy |
| Memory Footprint  | Massive ($PGDATA)  | Moderate (Catalogs)| Lowest (Single Set)|
| Scale Limit       | ~500 Tenants       | ~5,000 Schemas     | 1,000,000+ Tenants |
| Migration Cost    | Multiply by N DBs  | Multiply by N Sch  | Single Migration   |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Shared tables with Row-Level Security provide optimal resource scaling for modern SaaS.',
        bn: 'রো-লেভেল সিকিউরিটি সমৃদ্ধ শেয়ার্ড টেবিল আধুনিক SaaS-এর জন্য সবচেয়ে সাশ্রয়ী সমাধান।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Row-Level Security (RLS): Bulletproof Data Isolation', bn: '৫. রো-লেভেল সিকিউরিটি (RLS): বুলেটপ্রুফ ডেটা নিরাপত্তা' } },
    {
      type: 'para',
      text: {
        en: 'In traditional applications, developers append WHERE tenant_id = 42 to every SQL query manually. If a junior engineer forgets this clause on one query, an entire corporate client’s private data leaks to other users. PostgreSQL Row-Level Security (RLS) injects the tenant filter automatically at the database engine level, making data leaks impossible.',
        bn: 'সাধারণত ডেভেলপাররা প্রতি কুয়েরিতে ম্যানুয়ালি WHERE tenant_id = 42 লিখে ডেটা ফিল্টার করেন। কোনো একজন ডেভেলপার একটিমাত্র কুয়েরিতে এটি লিখতে ভুলে গেলেই এক কোম্পানির গোপন ডেটা অন্য কোম্পানির সামনে ফাঁস হয়ে যেতে পারে। PostgreSQL রো-লেভেল সিকিউরিটি (RLS) সরাসরি ডাটাবেস ইঞ্জিনে এই নিয়ম যুক্ত করে দেয়, ফলে ডেটা ফাঁসের কোনো সুযোগ থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Enable RLS on the multi-tenant table:
ALTER TABLE customer_invoices ENABLE ROW LEVEL SECURITY;

-- 2. Force table owners to also obey RLS rules (Critical!):
ALTER TABLE customer_invoices FORCE ROW LEVEL SECURITY;

-- Even running "SELECT * FROM customer_invoices" with NO where clause
-- will only return rows belonging to the authenticated tenant!`,
      caption: {
        en: 'Enabling RLS enforces row filtering natively at the database engine level.',
        bn: 'RLS সক্রিয় করলে ডাটাবেস ইঞ্জিন নিজে থেকেই প্রতিটি কুয়েরিতে ফিল্টার বসিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Defining RLS Policies: USING vs WITH CHECK Clauses', bn: '৬. RLS পলিসি তৈরি: USING বনাম WITH CHECK ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'An RLS policy defines the security condition governing row visibility. The USING clause determines which existing rows are visible for SELECT, UPDATE, and DELETE operations. The WITH CHECK clause validates whether newly inserted or modified rows comply with security rules, preventing a malicious user from inserting records tagged with another tenant’s ID.',
        bn: 'একটি RLS পলিসি ঠিক করে কোন রো-টি কার কাছে দৃশ্যমান হবে। USING ক্লজ নির্ধারণ করে SELECT, UPDATE বা DELETE করার সময় কোন পুরনো রোগুলো দেখা যাবে। আর WITH CHECK ক্লজ নতুন ইনসার্ট বা আপডেটের সময় পরীক্ষা করে নিশ্চিত করে যে কোনো ইউজার যাতে অন্য কারো টেন্যান্ট আইডি দিয়ে ডেটা সেভ করতে না পারে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create tenant isolation policy:
CREATE POLICY tenant_isolation_policy ON customer_invoices
FOR ALL
USING (
  -- Controls which existing rows this session can see / update:
  tenant_id = current_setting('app.current_tenant_id', true)::BIGINT
)
WITH CHECK (
  -- Validates that new rows inserted match this session tenant:
  tenant_id = current_setting('app.current_tenant_id', true)::BIGINT
);`,
      caption: {
        en: 'USING governs visibility; WITH CHECK validates new and modified row records.',
        bn: 'USING দেখার পরিধি ঠিক করে এবং WITH CHECK নতুন ডেটার নিরাপত্তা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Dynamic Session Context: current_setting & SET LOCAL', bn: '৭. ডায়নামিক সেশন কনটেক্সট: current_setting ও SET LOCAL' } },
    {
      type: 'para',
      text: {
        en: 'Application servers connecting through a shared connection pool cannot create a separate database role for each website visitor. Instead, the backend uses SET LOCAL within an atomic transaction. This assigns the current tenant ID into a session configuration variable that expires automatically when the transaction completes, avoiding connection pool leakage.',
        bn: 'কানেকশন পুল ব্যবহার করা অ্যাপ্লিকেশন সার্ভারের পক্ষে প্রতিটি ভিজিটরের জন্য আলাদা ডাটাবেস রোল তৈরি করা সম্ভব নয়। এর বদলে ব্যাকএন্ড একটি ট্রানজ্যাকশনের মধ্যে SET LOCAL কমান্ড ব্যবহার করে। এটি সেশন ভেরিয়েবলে টেন্যান্ট আইডি সেট করে যা ট্রানজ্যাকশন শেষ হওয়ামাত্র স্বয়ংক্ৰিয়ভাবে মুছে যায়, ফলে কানেকশন পুলে কোনো ডেটা লিকেজ হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Application executes this inside each request transaction:
BEGIN;

-- Set tenant context for the duration of this single transaction:
SET LOCAL app.current_tenant_id = '1042';

-- Query invoices (PostgreSQL automatically applies tenant_id = 1042):
SELECT id, amount, customer_name FROM customer_invoices;

COMMIT; -- Context clears immediately upon commit!`,
      caption: {
        en: 'SET LOCAL binds tenant identifiers strictly to the scope of a single transaction.',
        bn: 'SET LOCAL টেন্যান্ট আইডিকে শুধুমাত্র একটিমাত্র ট্রানজ্যাকশনের ভেতর সীমাবদ্ধ রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Column Encryption & Data Masking: pgcrypto', bn: '৮. কলাম এনক্রিপশন ও ডেটা মাস্কিং: pgcrypto' } },
    {
      type: 'para',
      text: {
        en: 'Storing sensitive personally identifiable information (PII) like national identity numbers or payment secrets in plaintext creates catastrophic compliance liability. The pgcrypto extension enables field-level symmetric cryptographic encryption using pgp_sym_encrypt. Even if an attacker gains full access to disk storage or database dumps, encrypted fields remain unreadable without the secret key.',
        bn: 'জাতীয় পরিচয়পত্র বা পেমেন্ট তথ্যের মতো সংবেদনশীল ডেটা প্লেইন টেক্সটে রাখা মারাত্মক ঝুঁকিপূর্ণ। pgcrypto এক্সটেনশন pgp_sym_encrypt ব্যবহারের মাধ্যমে সরাসরি কলাম লেভেলে ক্রিপ্টোগ্রাফিক এনক্রিপশন সুবিধা দেয়। এর ফলে কোনো আক্রমণকারী পুরো ডাটাবেসের ব্যাকআপ ফাইল চুরি করলেও গোপন পাসওয়ার্ড ছাড়া এনক্রিপ্ট করা তথ্য পড়তে পারে না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Enable cryptographic extension:
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Insert encrypted credit card number:
INSERT INTO payment_cards (user_id, encrypted_card)
VALUES (
  101,
  pgp_sym_encrypt('4111-2222-3333-4444', 'master_secret_encryption_key_2026')
);

-- Decrypt field at query time for authorized billing processors:
SELECT user_id,
       pgp_sym_decrypt(encrypted_card, 'master_secret_encryption_key_2026') AS decrypted_card
FROM payment_cards
WHERE user_id = 101;`,
      caption: {
        en: 'pgcrypto encrypts sensitive columns symmetrically, protecting storage from dump compromises.',
        bn: 'pgcrypto সরাসরি কলাম এনক্রিপ্ট করে ডাটাবেস চুরি হলেও ডেটার সুরক্ষা অক্ষুণ্ণ রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Security Hardening Matrix: Roles vs RLS vs App Code', bn: '৯. নিরাপত্তা ম্যাট্রিক্স: রোল বনাম RLS বনাম অ্যাপ কোড' } },
    {
      type: 'para',
      text: {
        en: 'A multi-layered defense-in-depth model combines security controls at every tier: Use Roles to manage coarse infrastructure privileges (who can connect and modify schemas). Use Row-Level Security for multi-tenant data boundaries (who can see specific rows). Use Application Code for user authentication and UI route authorization.',
        bn: 'একটি নির্ভরযোগ্য বহুমাত্রিক নিরাপত্তা ব্যবস্থা প্রতিটি স্তরে সুরক্ষা বজায় রাখে: মূল সিস্টেম পারমিশন পরিচালনার জন্য রোল ব্যবহার করুন (কারা কানেক্ট বা স্কিমা বদলাতে পারবে)। বিভিন্ন গ্রাহকের ডেটা আলাদা রাখতে রো-লেভেল সিকিউরিটি ব্যবহার করুন (কারা নির্দিষ্ট রো দেখতে পারবে)। আর লগইন ও ইউজার ইন্টারফেস নিয়ন্ত্রণের জন্য অ্যাপ্লিকেশন কোড বেছে নিন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SECURITY HARDENING DEFENSE-IN-DEPTH:
Layer 1: Network / Firewall    -> pg_hba.conf blocks untrusted IP subnets
Layer 2: Database Roles (RBAC) -> Restricts table modification privileges
Layer 3: Row-Level Security   -> Guarantees zero tenant data leaks at engine
Layer 4: Column Encryption     -> pgcrypto protects sensitive columns at rest
Layer 5: Application Auth      -> JWT / Session authentication in Node.js`,
      caption: {
        en: 'Defense-in-depth ensures that an application-level bug cannot cause cross-tenant data leaks.',
        bn: 'বহুমাত্রিক নিরাপত্তা নিশ্চিত করে যেন অ্যাপে ভুল হলেও ডাটাবেসে ডেটা সুরক্ষিত থাকে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Multi-Tenant RLS Queries in Node.js', bn: '১০. Node.js-এ মাল্টি-টেন্যান্ট RLS কুয়েরি বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production multi-tenant query helper in Node.js utilizing node-postgres to wrap every query in an atomic transaction with SET LOCAL tenant context.',
        bn: 'নিচে node-postgres ব্যবহার করে প্রতিটি কুয়েরিকে SET LOCAL সহযোগে ট্রানজ্যাকশনে আবদ্ধ করে নিরাপদ মাল্টি-টেন্যান্ট সার্ভিস চালানোর একটি সম্পূর্ণ প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;
const pool = new Pool({ connectionString: "postgresql://postgres:secret@127.0.0.1:5432/saas_db" });

async function executeTenantQuery(tenantId, queryFn) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN;");

    // 1. Set tenant context strictly for this transaction:
    await client.query("SET LOCAL app.current_tenant_id = $1;", [String(tenantId)]);

    // 2. Execute user query with automatic RLS filtering:
    const result = await queryFn(client);

    await client.query("COMMIT;");
    return result;
  } catch (err) {
    await client.query("ROLLBACK;");
    throw err;
  } finally {
    client.release();
  }
}

// Fetch invoices safely without tenant leakage:
const tenantInvoices = await executeTenantQuery(1042, async (tx) => {
  const res = await tx.query("SELECT id, amount FROM customer_invoices;");
  return res.rows;
});

console.log("Tenant query executed with guaranteed RLS isolation");
// Output: Tenant query executed with guaranteed RLS isolation`,
      caption: {
        en: 'Transactional SET LOCAL ensures connection pool reuse never leaks tenant credentials.',
        bn: 'ট্রানজ্যাকশনভিত্তিক SET LOCAL নিশ্চিত করে কানেকশন পুলে কখনো টেন্যান্ট ডেটা ওভারল্যাপ হবে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-rol-ex1',
      kind: 'predict',
      topic: 'postgresql: group role creation parameter',
      question: {
        en: 'Which keyword parameter is passed to CREATE ROLE to prevent a role from logging in directly over the network, making it a group role?',
        bn: 'একটি রোল যাতে সরাসরি নেটওয়ার্কে লগইন না করতে পারে এবং সিকিউরিটি গ্রুপ হিসেবে কাজ করে, সেজন্য CREATE ROLE কমান্ডে কোন প্যারামিটারটি দিতে হয়?'
      },
      code: `/* Creating a security group role in PostgreSQL: */
/* CREATE ROLE analysts ______; */`,
      answer: 'NOLOGIN',
      accept: ['NOLOGIN', 'nologin'],
      hint: {
        en: 'The NOLOGIN keyword.',
        bn: 'NOLOGIN কিওয়ার্ড।'
      },
      explanation: {
        en: 'Roles created with NOLOGIN cannot authenticate directly; they serve as group roles inherited by user accounts.',
        bn: 'NOLOGIN দিয়ে তৈরি রোল সরাসরি লগইন করতে পারে না; এটি অন্যান্য ইউজারদের জন্য গ্রুপ রোল হিসেবে কাজ করে।'
      }
    },
    {
      id: 'pg-rol-ex2',
      kind: 'mcq',
      topic: 'postgresql: automated future object permissions',
      question: {
        en: 'Which SQL command configures default permission templates automatically applied to newly created tables in a schema?',
        bn: 'কোন এসকিউএল কমান্ডটি একটি স্কিমায় ভবিষ্যতে তৈরি হওয়া নতুন টেবিলগুলোতে স্বয়ংক্রিয়ভাবে পারমিশন সেট করে দেয়?'
      },
      options: [
        { en: 'ALTER DEFAULT PRIVILEGES', bn: 'ALTER DEFAULT PRIVILEGES' },
        { en: 'GRANT FUTURE PERMISSIONS', bn: 'GRANT FUTURE PERMISSIONS' },
        { en: 'SET GLOBAL GRANTS', bn: 'SET GLOBAL GRANTS' },
        { en: 'AUTO_GRANT ALL', bn: 'AUTO_GRANT ALL' }
      ],
      answer: 0,
      hint: {
        en: 'ALTER DEFAULT PRIVILEGES.',
        bn: 'ALTER DEFAULT PRIVILEGES।'
      },
      explanation: {
        en: 'ALTER DEFAULT PRIVILEGES applies security templates automatically to future tables and sequences created within a schema.',
        bn: 'ALTER DEFAULT PRIVILEGES ভবিষ্যতে তৈরি হওয়া সমস্ত টেবিলের জন্য স্বয়ংক্রিয় পারমিশন নিয়ম নির্ধারণ করে।'
      }
    },
    {
      id: 'pg-rol-ex3',
      kind: 'mcq',
      topic: 'postgresql: rls write validation clause',
      question: {
        en: 'Which clause in an RLS policy validates that newly inserted or modified rows conform to security criteria (preventing cross-tenant tagging)?',
        bn: 'একটি RLS পলিসিতে কোন ক্লজটি নিশ্চিত করে যে নতুন ইনসার্ট বা আপডেট হওয়া রোটি নিরাপত্তা নিয়ম মেনে চলছে (যাতে অন্য টেন্যান্টের ডেটা ঢোকানো না যায়)?'
      },
      options: [
        { en: 'WITH CHECK', bn: 'WITH CHECK' },
        { en: 'USING', bn: 'USING' },
        { en: 'WHERE', bn: 'WHERE' },
        { en: 'HAVING', bn: 'HAVING' }
      ],
      answer: 0,
      hint: {
        en: 'The WITH CHECK clause.',
        bn: 'WITH CHECK ক্লজ।'
      },
      explanation: {
        en: 'WITH CHECK validates row states on INSERT and UPDATE, rejecting rows that do not satisfy the policy condition.',
        bn: 'WITH CHECK ক্লজ নতুন ইনসার্ট বা আপডেটের সময় শর্ত যাচাই করে নিয়মভঙ্গকারী ডেটা বাতিল করে।'
      }
    }
  ],
  quiz: {
    id: 'pg-rol-quiz',
    title: { en: 'PostgreSQL Security & Multi-Tenancy Quiz', bn: 'PostgreSQL নিরাপত্তা ও মাল্টি-টেন্যান্সি কুইজ' },
    questions: [
      {
        id: 'prolq1',
        kind: 'mcq',
        topic: 'postgresql: row level security primary benefit',
        question: {
          en: 'Why is Row-Level Security (RLS) considered superior to application-level WHERE filtering in multi-tenant systems?',
          bn: 'মাল্টি-টেন্যান্ট সিস্টেমে অ্যাপ্লিকেশনে ম্যানুয়ালি WHERE ফিল্টার লেখার চেয়ে রো-লেভেল সিকিউরিটি (RLS) কেন শ্রেয়?'
        },
        options: [
          { en: 'RLS enforces row filtering natively inside the database engine, eliminating human coding errors that cause cross-tenant data leaks', bn: 'RLS সরাসরি ডাটাবেস ইঞ্জিনে নিয়ম কার্যকর করে, ফলে কোডিং ভুলের কারণে এক গ্রাহকের ডেটা অন্য গ্রাহকের কাছে ফাঁস হওয়া অসম্ভব হয়ে পড়ে' },
          { en: 'RLS turns off all user passwords', bn: 'পাসওয়ার্ড বন্ধ করে দেয়' },
          { en: 'RLS converts all tables into text files', bn: 'টেবিলকে টেক্সট ফাইলে রূপ দেয়' },
          { en: 'RLS increases internet bandwidth', bn: 'ইন্টারনেট ব্যান্ডউইথ বাড়ায়' }
        ],
        answer: 0,
        hint: {
          en: 'In-engine enforcement prevents application coding leaks.',
          bn: 'ইঞ্জিন লেভেলে নিয়ম প্রয়োগ করে অ্যাপের কোডিং ভুল রোধ করে।'
        },
        explanation: {
          en: 'RLS moves tenant isolation into the database engine, ensuring queries never return unauthorized rows even if developers omit WHERE clauses.',
          bn: 'RLS ডাটাবেস ইঞ্জিনে ফিল্টার পরিচালনা করে, ফলে কুয়েরিতে WHERE লিখতে ভুলে গেলেও ডেটা সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'prolq2',
        kind: 'mcq',
        topic: 'postgresql: session context command for connection pooling',
        question: {
          en: 'Which command sets tenant context for a single transaction without leaking variables across pooled connections?',
          bn: 'কানেকশন পুলে ডেটা লিকেজ না ঘটিয়ে একটিমাত্র ট্রানজ্যাকশনের জন্য টেন্যান্ট কনটেক্সট সেট করতে কোন কমান্ডটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'SET LOCAL app.current_tenant_id = "value";', bn: 'SET LOCAL app.current_tenant_id = "value";' },
          { en: 'SET GLOBAL tenant = "value";', bn: 'SET GLOBAL tenant = "value";' },
          { en: 'EXPORT TENANT_ID="value";', bn: 'EXPORT TENANT_ID="value";' },
          { en: 'ENV_SET app.tenant;', bn: 'ENV_SET app.tenant;' }
        ],
        answer: 0,
        hint: {
          en: 'SET LOCAL command.',
          bn: 'SET LOCAL কমান্ড।'
        },
        explanation: {
          en: 'SET LOCAL limits the variable lifespan strictly to the current transaction, safely resetting state upon commit or rollback.',
          bn: 'SET LOCAL ভেরিয়েবলের মেয়াদ কেবল বর্তমান ট্রানজ্যাকশনে সীমাবদ্ধ রাখে, ফলে পুলিংয়ে কোনো বিশৃঙ্খলা হয় না।'
        }
      },
      {
        id: 'prolq3',
        kind: 'mcq',
        topic: 'postgresql: field level encryption extension',
        question: {
          en: 'Which official PostgreSQL extension provides cryptographic hashing and symmetric column encryption functions (like pgp_sym_encrypt)?',
          bn: 'PostgreSQL-এ ক্রিপ্টোগ্রাফিক হ্যাশিং ও কলাম এনক্রিপশন ফাংশন (যেমন pgp_sym_encrypt) প্রদান করে কোন অফিসিয়াল এক্সটেনশনটি?'
        },
        options: [
          { en: 'pgcrypto', bn: 'pgcrypto' },
          { en: 'pg_security', bn: 'pg_security' },
          { en: 'pg_encrypt', bn: 'pg_encrypt' },
          { en: 'pg_ssl', bn: 'pg_ssl' }
        ],
        answer: 0,
        hint: {
          en: 'pgcrypto extension.',
          bn: 'pgcrypto এক্সটেনশন।'
        },
        explanation: {
          en: 'pgcrypto implements OpenPGP symmetric encryption algorithms, safeguarding sensitive columns on disk.',
          bn: 'pgcrypto ওপেন-পিজিপি স্ট্যান্ডার্ডে কলাম এনক্রিপ্ট করে ডিস্ক ব্যাকআপের শতভাগ সুরক্ষা দেয়।'
        }
      },
      {
        id: 'prolq4',
        kind: 'mcq',
        topic: 'postgresql: table owner rls enforcement',
        question: {
          en: 'Why should administrators execute ALTER TABLE ... FORCE ROW LEVEL SECURITY in addition to ENABLE ROW LEVEL SECURITY?',
          bn: 'অ্যাডমিনদের কেন ENABLE ROW LEVEL SECURITY-এর পাশাপাশি ALTER TABLE ... FORCE ROW LEVEL SECURITY চালানো উচিত?'
        },
        options: [
          { en: 'Because by default, table owners and superusers bypass RLS policies; FORCE forces table owners to obey the rules', bn: 'কারণ ডিফল্টভাবে টেবিল মালিক ও সুপারইউজাররা RLS নিয়ম এড়িয়ে যেতে পারে; FORCE দিলে টেবিল মালিকদের ওপরও নিয়ম কার্যকর হয়' },
          { en: 'To delete all table data instantly', bn: 'সব ডেটা মুছে ফেলার জন্য' },
          { en: 'Because PostgreSQL crashes without it', bn: 'কারণ এটি ছাড়া ক্র্যাশ করে' },
          { en: 'To convert table data into audio format', bn: 'অডিও ফরম্যাটে রূপান্তর করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents table owners from bypassing RLS policies.',
          bn: 'টেবিল মালিকদের RLS নিয়ম বাইপাস করা রোধ করে।'
        },
        explanation: {
          en: 'Table owners bypass RLS policies by default. FORCE ROW LEVEL SECURITY ensures that even table owners are bound by security policies.',
          bn: 'ডিফল্টভাবে টেবিল মালিকদের ওপর RLS কার্যকর হয় না, তবে FORCE দিলে তাদের ওপরও কঠোর সুরক্ষা বজায় থাকে।'
        }
      }
    ]
  }
};
