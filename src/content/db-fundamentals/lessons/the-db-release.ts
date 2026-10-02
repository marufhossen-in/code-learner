import type { Lesson } from '../../../lib/types';

export const TheDbReleaseLesson: Lesson = {
  slug: 'the-db-release',
  tech: 'db-fundamentals',
  title: {
    en: 'Database Releases: Migrations, Zero-Downtime & Rollbacks',
    bn: 'ডাটাবেস রিলিজ: মাইগ্রেশন, জিরো-ডাউনটাইম ও রোলব্যাক'
  },
  summary: {
    en: 'Safely evolve production relational database schemas with zero-downtime migrations: master up/down scripts, the expand/contract deployment pattern, non-blocking index creation, and automated rollback strategies.',
    bn: 'জিরো-ডাউনটাইম মাইগ্রেশনের মাধ্যমে নিরাপদে প্রোডাকশন ডাটাবেস স্কিমা পরিবর্তন করুন: আপ/ডাউন স্ক্রিপ্ট, এক্সপ্যান্ড/কনট্রাক্ট ডেপ্লয়মেন্ট প্যাটার্ন, নন-ব্লকিং ইনডেক্স তৈরি এবং রোলব্যাক কৌশল শিখুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'production-migration-hazards',
      text: {
        en: 'The Danger of Production Schema Alterations',
        bn: 'প্রোডাকশন স্কিমা পরিবর্তনের মারাত্মক ঝুঁকি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When web servers deploy new application code, rolling back a bug is as simple as reverting a container or git commit. However, database systems maintain persistent state on disk. If a naive database migration acquires an exclusive table lock on a 50-million-row table, all incoming application queries stall, database connection pools exhaust, and user-facing traffic crashes in seconds.',
        bn: 'ওয়েব সার্ভারে নতুন অ্যাপ্লিকেশন কোড ডেপ্লয় করার পর কোনো সমস্যা দেখা দিলে একটি কন্টেইনার বা গিট কমিট রিভার্ট করেই সহজে পুরনো অবস্থায় ফেরা যায়। কিন্তু ডাটাবেস সিস্টেমে স্থায়ী ডাটা ডিস্কে জমা থাকে। যদি একটি ভুল মাইগ্রেশন ৫০ মিলিয়ন সারির কোনো টেবিলে এক্সক্লুসিভ টেবিল লক বসিয়ে দেয়, তবে আসা সমস্ত অ্যাপ্লিকেশন কোয়েরি আটকে যায়, ডাটাবেস কানেকশন পুল পূর্ণ হয়ে যায় এবং চোখের পলকে পুরো সিস্টেম ক্র্যাশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To alter database schemas safely without taking production services offline, database engineers rely on structured versioned migrations. Every schema modification must be deterministic, reversible through an automated down script, and engineered to run concurrently with active user traffic.',
        bn: 'প্রোডাকশন সেবা বন্ধ না করে নিরাপদে ডাটাবেস স্কিমা পরিবর্তনের জন্য প্রকৌশলীরা ভার্সনযুক্ত সুসংগঠিত মাইগ্রেশনের ওপর নির্ভর করেন। প্রতিটি স্কিমা পরিবর্তনকে অবশ্যই সুনির্দিষ্ট হতে হয়, একটি ডাউন স্ক্রিপ্টের মাধ্যমে পূর্বের অবস্থায় ফেরানো যায় এবং সক্রিয় ট্রাফিকের সাথে প্যারালালভাবে নির্বাহ করার উপযোগী করে তৈরি করতে হয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Expand and Contract Zero-Downtime Migration Pattern',
        bn: 'জিরো-ডাউনটাইম এক্সপ্যান্ড ও কনট্রাক্ট মাইগ্রেশন প্যাটার্ন'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Expand and Contract zero-downtime database migration workflow">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Step 1: Expand -->
  <g transform="translate(30, 30)">
    <rect width="125" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="20" cy="20" r="12" fill="#0284c7" />
    <text x="20" y="24" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1</text>
    <text x="65" y="24" fill="#38bdf8" font-size="12" font-weight="bold">Expand</text>
    <text x="12" y="55" fill="#94a3b8" font-size="10">Add new column</text>
    <text x="12" y="72" fill="#cbd5e1" font-size="10">Nullable / no lock</text>
    <text x="12" y="92" fill="#64748b" font-size="9">ALTER TABLE ADD...</text>
  </g>

  <!-- Step 2: Dual Write -->
  <g transform="translate(175, 30)">
    <rect width="125" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="20" cy="20" r="12" fill="#0284c7" />
    <text x="20" y="24" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2</text>
    <text x="65" y="24" fill="#38bdf8" font-size="12" font-weight="bold">Dual-Write</text>
    <text x="12" y="55" fill="#94a3b8" font-size="10">Deploy app code</text>
    <text x="12" y="72" fill="#cbd5e1" font-size="10">Writes both fields</text>
    <text x="12" y="92" fill="#64748b" font-size="9">Reads old field</text>
  </g>

  <!-- Step 3: Backfill -->
  <g transform="translate(320, 30)">
    <rect width="125" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <circle cx="20" cy="20" r="12" fill="#d97706" />
    <text x="20" y="24" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3</text>
    <text x="65" y="24" fill="#fbbf24" font-size="12" font-weight="bold">Backfill</text>
    <text x="12" y="55" fill="#94a3b8" font-size="10">Background batch</text>
    <text x="12" y="72" fill="#cbd5e1" font-size="10">500 rows/batch</text>
    <text x="12" y="92" fill="#64748b" font-size="9">Fills historical data</text>
  </g>

  <!-- Step 4: Switch Read -->
  <g transform="translate(465, 30)">
    <rect width="125" height="110" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <circle cx="20" cy="20" r="12" fill="#059669" />
    <text x="20" y="24" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4</text>
    <text x="65" y="24" fill="#34d399" font-size="12" font-weight="bold">Switch Read</text>
    <text x="12" y="55" fill="#94a3b8" font-size="10">Deploy app code</text>
    <text x="12" y="72" fill="#cbd5e1" font-size="10">Reads new field</text>
    <text x="12" y="92" fill="#64748b" font-size="9">Old field idle</text>
  </g>

  <!-- Step 5: Contract -->
  <g transform="translate(610, 30)">
    <rect width="105" height="110" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <circle cx="20" cy="20" r="12" fill="#dc2626" />
    <text x="20" y="24" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5</text>
    <text x="60" y="24" fill="#f87171" font-size="12" font-weight="bold">Contract</text>
    <text x="12" y="55" fill="#94a3b8" font-size="10">Stop old writes</text>
    <text x="12" y="72" fill="#cbd5e1" font-size="10">Drop old column</text>
    <text x="12" y="92" fill="#64748b" font-size="9">Migration clean</text>
  </g>

  <!-- Connective Arrows -->
  <path d="M 155 85 L 175 85" stroke="#94a3b8" stroke-width="2" />
  <path d="M 300 85 L 320 85" stroke="#94a3b8" stroke-width="2" />
  <path d="M 445 85 L 465 85" stroke="#94a3b8" stroke-width="2" />
  <path d="M 590 85 L 610 85" stroke="#94a3b8" stroke-width="2" />

  <!-- Explanatory Box -->
  <g transform="translate(30, 175)">
    <rect width="685" height="125" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="30" y="28" fill="#f8fafc" font-size="13" font-weight="bold">Why Direct Schema Renames Crash Systems</text>
    <text x="30" y="52" fill="#94a3b8" font-size="11">Renaming a column directly (e.g. name to full_name) breaks running app servers because old code expects the old column.</text>
    <text x="30" y="72" fill="#94a3b8" font-size="11">The Expand / Contract pattern decouples database migration from application code releases across multiple deployment stages,</text>
    <text x="30" y="92" fill="#94a3b8" font-size="11">ensuring older code versions continue reading successfully while newer workers write modern schema structures.</text>
  </g>
</svg>`,
      caption: {
        en: 'The 5-stage Expand/Contract zero-downtime migration lifecycle: expanding schema, dual-writing, backfilling legacy records, switching readers, and contracting old columns.',
        bn: '৫টি ধাপে বিভক্ত এক্সপ্যান্ড/কনট্রাক্ট জিরো-ডাউনটাইম মাইগ্রেশন জীবনচক্র: স্কিমা সম্প্রসারণ, ডুয়াল-রাইটিং, ব্যাকফিলিং, রিডার সুইচিং এবং পুরনো কলাম ছাঁটাই।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Expand and Contract',
          def: {
            en: 'A multi-phase database deployment pattern that introduces new schema additions before removing legacy structures, enabling rolling releases without downtime.',
            bn: 'একটি বহুমুখী ডাটাবেস ডেপ্লয়মেন্ট পদ্ধতি যেখানে পুরনো কাঠামো বাদ দেওয়ার আগে নতুন স্কিমা যুক্ত করা হয়, ফলে কোনো ডাউনটাইম ছাড়াই সিস্টেম আপডেট করা যায়।'
          }
        },
        {
          term: 'Migration Up & Down',
          def: {
            en: 'Paired executable scripts where "up" applies forward schema changes and "down" safely reverses those exact operations during an emergency rollback.',
            bn: 'একজোড়া এক্সিকিউটেবল স্ক্রিপ্ট যার "আপ" নতুন স্কিমা পরিবর্তন কার্যকর করে এবং "ডাউন" কোনো জরুরি প্রয়োজনে সেই পরিবর্তনগুলো হুবহু পূর্বাবস্থায় ফিরিয়ে নেয়।'
          }
        },
        {
          term: 'Lock Timeout',
          def: {
            en: 'A database safety setting that aborts a migration if it cannot acquire required table locks within a few seconds, preventing traffic queues.',
            bn: 'একটি ডাটাবেস নিরাপত্তা সেটিংস যা কয়েক সেকেন্ডের মধ্যে প্রয়োজনীয় টেবিল লক না পেলে মাইগ্রেশন বাতিল করে দেয়, যাতে কোনো ট্রাফিক জ্যাম না ঘটে।'
          }
        },
        {
          term: 'Non-Blocking Index',
          def: {
            en: 'An index creation method (such as CREATE INDEX CONCURRENTLY) that builds auxiliary B-Trees without acquiring exclusive write locks on the table.',
            bn: 'ইনডেক্স তৈরির এমন একটি নিরাপদ পদ্ধতি যা টেবিলে কোনো এক্সক্লুসিভ রাইট লক না বসিয়ে ব্যাকগ্রাউন্ডে বি-ট্রি ইনডেক্স তৈরি করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'migration-best-practices',
      text: {
        en: 'Lock Safety and Non-Blocking Index Building',
        bn: 'লক নিরাপত্তা এবং নন-ব্লকিং ইনডেক্স তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When creating an index on a large active production table, standard CREATE INDEX acquires a SHARE lock. This lock permits concurrent SELECT queries but completely blocks all incoming INSERT, UPDATE, and DELETE operations until the entire index build finishes. If indexing takes 30 minutes, your write pipeline remains completely frozen for half an hour.',
        bn: 'একটি বৃহৎ এবং সক্রিয় প্রোডাকশন টেবিলে সাধারণ CREATE INDEX চালালে এটি একটি SHARE লক গ্রহণ করে। এই লকটি কেবল SELECT কোয়েরি চালানোর অনুমতি দেয় কিন্তু পুরো ইনডেক্স তৈরি শেষ না হওয়া পর্যন্ত সমস্ত INSERT, UPDATE এবং DELETE অপারেশন সম্পূর্ণ অবরুদ্ধ করে রাখে। ইনডেক্স তৈরিতে যদি ৩০ মিনিট সময় লাগে, তবে আধা ঘণ্টার জন্য আপনার পুরো লেখার কাজ বন্ধ হয়ে থাকবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In PostgreSQL, modern engines solve this using CREATE INDEX CONCURRENTLY. This command scans the table in multiple passes without holding write-exclusive locks, allowing active web workers to write data continuously throughout the build. Furthermore, always configure SET lock_timeout = \'2s\' prior to running ALTER TABLE commands so the database engine immediately aborts the migration rather than queueing up and taking down your API.',
        bn: 'PostgreSQL-এ আধুনিক ডাটাবেস ইঞ্জিনগুলো CREATE INDEX CONCURRENTLY ব্যবহার করে এই সমস্যার সমাধান করে। এই কমান্ডটি কোনো রাইট লক না ধরেই একাধিক ধাপে টেবিল স্ক্যান করে, ফলে ইনডেক্স তৈরির পুরো সময় জুড়ে সক্রিয় ওয়েব সার্ভার নির্বিঘ্নে ডাটা লিখতে পারে। উপরন্তু, ALTER TABLE চালানোর আগে সর্বদা SET lock_timeout = \'2s\' সেট করুন যাতে ডাটাবেস লক না পেলে লাইনে অপেক্ষা করে সার্ভার ক্র্যাশ না ঘটিয়ে সাথে সাথে মাইগ্রেশনটি বাতিল করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-migration-runner',
      text: {
        en: 'Executable Migration Engine: Version Tracking and Rollback Recovery',
        bn: 'রানযোগ্য মাইগ্রেশন ইঞ্জিন: ভার্সন ট্র্যাকিং ও রোলব্যাক রিকভারি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js migration coordinator demonstrating version tracking and safe rollback execution. It applies 3 sequential migrations, expands schema fields safely, and shows how an unexpected error during migration triggers automatic rollback to restore clean database state.',
        bn: 'নিচে ভার্সন ট্র্যাকিং এবং নিরাপদ রোলব্যাক প্রদর্শনকারী একটি সম্পূর্ণ Node.js মাইগ্রেশন কোঅর্ডিনেটর দেওয়া হলো। এটি ৩টি ধারাবাহিক মাইগ্রেশন কার্যকর করে, স্কিমা ফিল্ড নিরাপদে প্রসারিত করে এবং দেখায় কীভাবে ত্রুটি দেখা দিলে স্বয়ংক্রিয় রোলব্যাকের মাধ্যমে পূর্ববর্তী সুস্থ অবস্থা পুনরুদ্ধার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Run versioned schema migrations with Expand pattern and automated error rollback recovery',
        bn: 'এক্সপ্যান্ড প্যাটার্ন এবং স্বয়ংক্রিয় ত্রুটি রোলব্যাক রিকভারি সহ ভার্সনযুক্ত স্কিমা মাইগ্রেশন চালান'
      },
      code: `// Zero-Downtime Database Migration Runner
class MigrationRunner {
  constructor() {
    this.applied = [];
    this.tables = { accounts: [] };
  }

  // Execute forward migration (UP)
  apply(migration) {
    console.log(\`Applying migration: \${migration.id}\`);
    migration.up(this.tables);
    this.applied.push(migration.id);
  }

  // Execute rollback (DOWN)
  rollbackLast(migration) {
    console.log(\`Rolling back migration: \${migration.id}\`);
    migration.down(this.tables);
    this.applied = this.applied.filter(id => id !== migration.id);
  }
}

const runner = new MigrationRunner();

// Migration 001: Initial Table Creation
const m001 = {
  id: '001_create_accounts',
  up: (db) => { db.accounts.push({ id: 1, balance: 1000 }); },
  down: (db) => { db.accounts = []; }
};

// Migration 002: Zero-Downtime Expand (Add tier column with safe default)
const m002 = {
  id: '002_add_status_expand',
  up: (db) => { db.accounts.forEach(a => { a.account_tier = 'standard'; }); },
  down: (db) => { db.accounts.forEach(a => { delete a.account_tier; }); }
};

// Migration 003: Backfill legacy records
const m003 = {
  id: '003_backfill_and_verify',
  up: (db) => { db.accounts.forEach(a => { if (!a.account_tier) a.account_tier = 'standard'; }); },
  down: (db) => { /* noop */ }
};

runner.apply(m001);
runner.apply(m002);
runner.apply(m003);

// Migration 004: Faulty migration triggering rollback
const m004 = {
  id: '004_invalid_syntax_migration',
  up: () => { throw new Error('Lock timeout reached: could not acquire table lock'); },
  down: () => { /* clean rollback */ }
};

let rollbackStatus = 'IDLE';
try {
  runner.apply(m004);
} catch (err) {
  runner.rollbackLast(m004);
  rollbackStatus = 'ROLLED_BACK';
}

console.log(\`[Migration Engine] Applied \${runner.applied.length} schema migrations successfully (001, 002, 003).\`);
console.log(\`[Zero-Downtime Expand] Added column account_tier without exclusive table lock.\`);
console.log(\`[Rollback Invariant] Failed migration rolled back (\${rollbackStatus}); schema restored to version 3.\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Never Drop a Database Column in the Same Release as Code',
        bn: 'কখনও একই রিলিজের মধ্যে কোড পরিবর্তন এবং ডাটাবেস কলাম ডিলিট করবেন না'
      },
      text: {
        en: 'When modernizing schema, never execute ALTER TABLE DROP COLUMN in the same release that updates application queries. During deployment, older server instances still running the previous release will instantly crash when trying to query the dropped column. Always execute deletions in a subsequent release after all old servers are decommissioned.',
        bn: 'স্কিমা পরিবর্তনের সময় অ্যাপ্লিকেশন কোড আপডেটের একই রিলিজে কখনও ALTER TABLE DROP COLUMN চালাবেন না। কারণ ডেপ্লয়মেন্ট চলাকালীন পুরনো রিলিজ চালানো কিছু ওয়েব সার্ভার সেই মুছে ফেলা কলামটি খুঁজতে গিয়ে সাথে সাথে ক্র্যাশ করবে। সর্বদা সমস্ত পুরনো সার্ভার বন্ধ হওয়ার পর পরবর্তী কোনো রিলিজে কলাম মুছে ফেলুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Lock Timeout Migration Guard',
        bn: 'লক টাইমআউট মাইগ্রেশন গার্ড'
      },
      description: {
        en: 'Simulate a lock timeout guard: abort migrations gracefully instead of hanging database connection pools.',
        bn: 'লক টাইমআউট সিমুলেশন পরীক্ষা করুন: ডাটাবেস কানেকশন ঝুলিয়ে রাখার বদলে নিরাপদে মাইগ্রেশন বাতিল করুন।'
      },
      code: `function attemptMigrationWithTimeout(lockWaitSeconds, maxAllowedWaitSeconds = 2) {
  if (lockWaitSeconds > maxAllowedWaitSeconds) {
    return 'ABORT_LOCK_TIMEOUT_EXCEEDED';
  }
  return 'MIGRATION_LOCK_ACQUIRED_SUCCESS';
}

console.log('Migration A (1 second wait):', attemptMigrationWithTimeout(1));
console.log('Migration B (5 second wait):', attemptMigrationWithTimeout(5));`,
      tests: [
        {
          name: {
            en: 'Acquires lock when within timeout threshold',
            bn: 'টাইমআউটের ভেতরে থাকলে লক গ্রহণ করে'
          },
          expected: 'Migration A (1 second wait): MIGRATION_LOCK_ACQUIRED_SUCCESS'
        },
        {
          name: {
            en: 'Aborts gracefully when lock wait exceeds threshold',
            bn: 'লকের অপেক্ষা সীমা ছাড়িয়ে গেলে বাতিল করে'
          },
          expected: 'Migration B (5 second wait): ABORT_LOCK_TIMEOUT_EXCEEDED'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-rel-ex-1',
      kind: 'mcq',
      topic: 'expand-contract-benefit',
      question: {
        en: 'Why is the Expand and Contract pattern necessary when performing breaking schema changes on a production database?',
        bn: 'প্রোডাকশন ডাটাবেসে ব্রেকিং স্কিমা পরিবর্তনের সময় কেন এক্সপ্যান্ড ও কনট্রাক্ট প্যাটার্ন অনুসরণ করা অপরিহার্য?'
      },
      options: [
        {
          en: 'It permits both old and new versions of application code to run simultaneously during rolling deployments without causing queries to fail',
          bn: 'এটি রোলিং ডেপ্লয়মেন্ট চলাকালীন পুরনো এবং নতুন উভয় সংস্করণের অ্যাপ্লিকেশন কোডকে কোনো ব্যর্থতা ছাড়াই একসাথে চলার সুবিধা দেয়'
        },
        {
          en: 'It compresses table files on disk to save cloud hosting fees',
          bn: 'এটি ক্লাউড হোস্টিং বিল বাঁচাতে ডিস্কে টেবিল ফাইল সংকুচিত করে'
        },
        {
          en: 'It allows SQL code to be written in browser JavaScript',
          bn: 'এটি ব্রাউজার জাভাস্ক্রিপ্টে SQL কোড লেখার অনুমতি দেয়'
        },
        {
          en: 'It converts all relational tables into Excel spreadsheets',
          bn: 'এটি সমস্ত রিলেশনাল টেবিলকে এক্সেল স্প্রেডশিটে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Zero downtime requires supporting both old and new application instances simultaneously.',
        bn: 'জিরো ডাউনটাইমের জন্য পুরনো এবং নতুন উভয় অ্যাপ্লিকেশন সংস্করণকে একসাথে কাজ করতে হয়।'
      },
      explanation: {
        en: 'In modern zero-downtime rolling deployments, new servers spin up while old servers finish requests. The Expand/Contract pattern ensures the database supports both the old code (reading old columns) and the new code (reading new columns) throughout the transition.',
        bn: 'জিরো-ডাউনটাইম রোলিং ডেপ্লয়মেন্টে পুরনো সার্ভার চালু থাকা অবস্থাতেই নতুন সার্ভার চালু হয়। এক্সপ্যান্ড/কনট্রাক্ট প্যাটার্ন নিশ্চিত করে যে ডাটাবেস রূপান্তরের পুরো সময়টাতে পুরনো কোড (পুরনো কলাম পড়ছে) এবং নতুন কোড (নতুন কলাম পড়ছে) উভয়কেই নিরবচ্ছিন্ন সমর্থন দেয়।'
      }
    },
    {
      id: 'db-rel-ex-2',
      kind: 'mcq',
      topic: 'concurrent-index-creation',
      question: {
        en: 'What critical operational advantage does CREATE INDEX CONCURRENTLY offer over standard CREATE INDEX in PostgreSQL?',
        bn: 'PostgreSQL-এ সাধারণ CREATE INDEX-এর তুলনায় CREATE INDEX CONCURRENTLY কোন গুরুত্বপূর্ণ সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It builds the B-Tree index without acquiring exclusive write locks, allowing INSERT, UPDATE, and DELETE operations to continue unimpeded',
          bn: 'এটি কোনো এক্সক্লুসিভ রাইট লক না নিয়ে বি-ট্রি ইনডেক্স তৈরি করে, ফলে INSERT, UPDATE ও DELETE অপারেশন নির্বিঘ্নে চলতে পারে'
        },
        {
          en: 'It makes all queries execute 100 times faster instantly',
          bn: 'এটি সাথে সাথে সমস্ত কোয়েরির গতি ১০০ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'It removes the requirement for primary keys',
          bn: 'এটি প্রাইমারি কি থাকার প্রয়োজনীয়তা বাতিল করে'
        },
        {
          en: 'It reboots the server operating system silently',
          bn: 'এটি কাউকে না জানিয়ে সার্ভারের অপারেটিং সিস্টেম রিবুট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Concurrent index builds avoid locking writes on production tables.',
        bn: 'কনকারেন্ট ইনডেক্স তৈরি প্রোডাকশন টেবিলে লেখার অপারেশনে কোনো বাধা সৃষ্টি করে না।'
      },
      explanation: {
        en: 'Standard CREATE INDEX locks out all data writes until indexing finishes. CREATE INDEX CONCURRENTLY performs multiple table scans in the background, keeping web APIs fully responsive.',
        bn: 'সাধারণ CREATE INDEX ইনডেক্সিং শেষ না হওয়া পর্যন্ত টেবিলে সমস্ত ডাটা রাইট আটকে রাখে। কিন্তু CREATE INDEX CONCURRENTLY ব্যাকগ্রাউন্ডে একাধিকবার টেবিল স্ক্যান করে, ফলে অ্যাপ্লিকেশন পুরোপুরি সচল থাকে।'
      }
    },
    {
      id: 'db-rel-ex-3',
      kind: 'mcq',
      topic: 'lock-timeout-protection',
      question: {
        en: 'Why is it critical to set SET lock_timeout = \'2s\' before running an ALTER TABLE migration in high-traffic environments?',
        bn: 'উচ্চ ট্রাফিকের পরিবেশে ALTER TABLE মাইগ্রেশন চালানোর আগে SET lock_timeout = \'2s\' নির্ধারণ করা কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'If the migration cannot obtain a lock within 2 seconds, it aborts immediately rather than queueing and stalling hundreds of incoming production queries',
          bn: 'যদি মাইগ্রেশনটি ২ সেকেন্ডের মধ্যে লক না পায়, তবে লাইনে অপেক্ষা করে শত শত প্রোডাকশন কোয়েরি আটকে না রেখে সাথে সাথে এটি বাতিল হয়ে যায়'
        },
        {
          en: 'It shuts down the database server after 2 seconds to cool the hardware',
          bn: 'এটি হার্ডওয়্যার ঠান্ডা রাখতে ২ সেকেন্ড পর ডাটাবেস সার্ভার বন্ধ করে দেয়'
        },
        {
          en: 'It limits table row count to 2 rows maximum',
          bn: 'এটি টেবিলের মোট রো সংখ্যা সর্বোচ্চ ২টিতে সীমাবদ্ধ করে'
        },
        {
          en: 'It gives developers 2 seconds to fix typos in SQL syntax',
          bn: 'এটি ডেভেলপারদের SQL সিনট্যাক্সের ভুল সংশোধনের জন্য ২ সেকেন্ড সময় দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A blocked DDL migration queues all subsequent queries, causing catastrophic connection pool exhaustion.',
        bn: 'একটি আটকে থাকা DDL মাইগ্রেশন পেছনের সমস্ত কোয়েরিকে থামিয়ে দেয় এবং সার্ভারের কানেকশন নষ্ট করে।'
      },
      explanation: {
        en: 'When an ALTER TABLE waits for a lock, it blocks all subsequent reads and writes behind it. Without a lock timeout, this queue can exhaust all database connections in seconds, taking down the entire website.',
        bn: 'যখন একটি ALTER TABLE লকের জন্য অপেক্ষা করে, তখন তার পেছনের সমস্ত রিড ও রাইট কোয়েরি লাইনে আটকে যায়। লক টাইমআউট না থাকলে মাত্র কয়েক সেকেন্ডেই সব ডাটাবেস কানেকশন ফুরিয়ে পুরো ওয়েবসাইট ক্র্যাশ করতে পারে।'
      }
    },
    {
      id: 'db-rel-ex-4',
      kind: 'mcq',
      topic: 'safe-backfill-batches',
      question: {
        en: 'When backfilling data for a newly added column across 10 million rows, why should updates be executed in small batches (e.g. 500 rows) rather than a single UPDATE query?',
        bn: '১০ মিলিয়ন সারির নতুন কলামে পুরনো ডাটা পপুলেট বা ব্যাকফিল করার সময় কেন একটি একক UPDATE কোয়েরির বদলে ছোট ছোট ব্যাচে (যেমন ৫০০ রো) আপডেট করা উচিত?'
      },
      options: [
        {
          en: 'A single massive UPDATE creates a giant transaction that exhausts undo/WAL disk space, locks rows for extended periods, and spikes replication lag',
          bn: 'একটি বিশালাকার UPDATE কোয়েরি এক বিশাল ট্রানজ্যাকশন তৈরি করে যা WAL ডিস্ক স্পেস শেষ করে, দীর্ঘ সময় রো লক করে রাখে এবং রেপ্লিকেশন ল্যাগ বাড়ায়'
        },
        {
          en: 'Databases are mathematically incapable of updating more than 500 rows per day',
          bn: 'ডাটাবেস গাণিতিকভাবে দিনে ৫০০ সারির বেশি আপডেট করতে অক্ষম'
        },
        {
          en: 'Batching automatically converts text strings into audio files',
          bn: 'ব্যাচিং টেক্সট স্ট্রিংকে স্বয়ংক্রিয়ভাবে অডিও ফাইলে রূপান্তর করে'
        },
        {
          en: 'Batching requires no database connection or network',
          bn: 'ব্যাচিংয়ের জন্য কোনো ডাটাবেস কানেকশন বা ইন্টারনেটের প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Chunking updates keeps transaction sizes small and prevents WAL log bloat.',
        bn: 'আপডেট ছোট ছোট ভাগে ভাগ করলে ট্রানজ্যাকশনের আকার ছোট থাকে এবং WAL লগের চাপ কমে।'
      },
      explanation: {
        en: 'Updating 10 million rows in 1 single statement locks millions of rows, bloats the transaction log (WAL), and causes severe replication delays on read replicas. Updating in batches of 500 rows keeps locks ephemeral and disk I/O smooth.',
        bn: 'একবারে ১০ মিলিয়ন রো ১টি একক স্টেটমেন্টে আপডেট করতে গেলে লক্ষ লক্ষ রো লক হয়ে যায়, ট্রানজ্যাকশন লগ ফুলে ওঠে এবং রিড রেপ্লিকেটরে মারাত্মক ল্যাগ তৈরি হয়। ৫০০ সারির ব্যাচে আপডেট করলে লক থাকে সাময়িক এবং ডিস্কের ওপর কোনো বাড়তি চাপ পড়ে না।'
      }
    }
  ],
  quiz: {
    id: 'the-db-release-quiz',
    title: {
      en: 'Database Releases & Zero-Downtime Migrations Quiz',
      bn: 'ডাটাবেস রিলিজ ও জিরো-ডাউনটাইম মাইগ্রেশন কুইজ'
    },
    questions: [
      {
        id: 'db-rel-qz-1',
        kind: 'mcq',
        topic: 'migration-metadata-table-purpose',
        question: {
          en: 'What is the primary role of a schema_migrations metadata table in production database migration frameworks?',
          bn: 'প্রোডাকশন ডাটাবেস মাইগ্রেশন ফ্রেমওয়ার্কে schema_migrations মেটাডাটা টেবিলের প্রধান ভূমিকা কী?'
        },
        options: [
          {
            en: 'It records which migration versions have already executed, ensuring idempotent execution so the same migration is never run twice',
            bn: 'এটি ইতিমধ্যে কোন কোন মাইগ্রেশন ভার্সন সফলভাবে নির্বাহ হয়েছে তা রেকর্ড করে, যাতে একই মাইগ্রেশন দ্বিতীয়বার না চলে এবং আইডেমপোটেন্সি বজায় থাকে'
          },
          {
            en: 'It stores the credit card passwords of database administrators',
            bn: 'এটি ডাটাবেস অ্যাডমিনিস্ট্রেটরদের ক্রেডিট কার্ডের পাসওয়ার্ড সংরক্ষণ করে'
          },
          {
            en: 'It compiles TypeScript code into machine binaries',
            bn: 'এটি টাইপস্ক্রিপ্ট কোডকে মেশিন বাইনারিতে কম্পাইল করে'
          },
          {
            en: 'It restarts the database server every midnight automatically',
            bn: 'এটি প্রতি মধ্যরাতে স্বয়ংক্রিয়ভাবে ডাটাবেস সার্ভার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Idempotency: tracking applied migration version strings guarantees each script runs once.',
          bn: 'আইডেমপোটেন্সি: প্রয়োগকৃত মাইগ্রেশন ভার্সন ট্র্যাক রাখলে প্রতিটি স্ক্রিপ্ট কেবল একবারই চালানো নিশ্চিত হয়।'
        },
        explanation: {
          en: 'The migration framework queries schema_migrations upon boot. Any migration file matching an already-recorded version is skipped, guaranteeing safe, idempotent deployments.',
          bn: 'মাইগ্রেশন ফ্রেমওয়ার্ক চালুর সময় schema_migrations টেবিল চেক করে। যেসব স্ক্রিপ্টের নাম এই টেবিলে আগে থেকেই লিপিবদ্ধ থাকে সেগুলো বাদ দেওয়া হয়, যা নিরাপদ ও দ্বিরুক্তিমুক্ত ডেপ্লয়মেন্ট নিশ্চিত করে।'
        }
      },
      {
        id: 'db-rel-qz-2',
        kind: 'mcq',
        topic: 'rollback-down-script-contract',
        question: {
          en: 'What must every production database migration script include to satisfy zero-incident disaster recovery standards?',
          bn: 'জিরো-ইনসিডেন্ট ডিজাস্টার রিকভারি মান পূরণ করতে প্রতিটি প্রোডাকশন মাইগ্রেশন স্ক্রিপ্টে কী থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'A thoroughly tested "down" script that exactly reverses all tables, columns, indexes, and constraints created in the "up" migration',
            bn: 'একটি যথাযথভাবে পরীক্ষিত "ডাউন" স্ক্রিপ্ট যা "আপ" মাইগ্রেশনে তৈরি সমস্ত টেবিল, কলাম, ইনডেক্স এবং কনস্ট্রেইন্ট নিখুঁতভাবে পূর্বাবস্থায় ফিরিয়ে নিতে পারে'
          },
          {
            en: 'A hardcoded database root password in plain text',
            bn: 'একটি প্লেইন টেক্সট আকারে লেখা ডাটাবেস রুট পাসওয়ার্ড'
          },
          {
            en: 'An external API call to social media platforms',
            bn: 'সোশ্যাল মিডিয়া প্ল্যাটফর্মে একটি বাহ্যিক API কল'
          },
          {
            en: 'A timer that deletes the database if traffic drops below 50 percent',
            bn: 'একটি টাইমার যা ট্রাফিক ৫০ শতাংশের নিচে নামলে ডাটাবেস মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reversibility: every change must be undoable in an emergency rollback.',
          bn: 'প্রত্যাবর্তনযোগ্যতা: জরুরি রোলব্যাকের ক্ষেত্রে প্রতিটি পরিবর্তন পূর্বের অবস্থায় ফেরানোর উপায় থাকতে হবে।'
        },
        explanation: {
          en: 'If a newly deployed code release experiences critical defects, ops engineers must execute a rollback. Without a matching down migration that reverses schema mutations cleanly, code rollbacks will crash against the modified database.',
          bn: 'নতুন কোড ডেপ্লয় করার পর মারাত্মক ত্রুটি ধরা পড়লে ইঞ্জিনিয়ারদের দ্রুত রোলব্যাক করতে হয়। স্কিমা পরিবর্তন নিখুঁতভাবে ফিরিয়ে আনার মতো ডাউন মাইগ্রেশন না থাকলে কোড রোলব্যাক করার পর পরিবর্তিত ডাটাবেসের সাথে সংঘর্ষ ঘটে সিস্টেম ক্র্যাশ করবে।'
        }
      },
      {
        id: 'db-rel-qz-3',
        kind: 'mcq',
        topic: 'not-null-default-migration-trap',
        question: {
          en: 'Why was adding a column with NOT NULL and a non-constant DEFAULT dangerous on large tables in older database engines?',
          bn: 'পুরনো ডাটাবেস ইঞ্জিনগুলোতে বিশাল টেবিলে NOT NULL এবং নন-কনস্ট্যান্ট DEFAULT সহ নতুন কলাম যুক্ত করা কেন বিপজ্জনক ছিল?'
        },
        options: [
          {
            en: 'It forced the engine to rewrite every single disk page and row to populate the default value, holding an exclusive table lock for the entire duration',
            bn: 'এটি ডিফল্ট মান বসানোর জন্য ডিস্কের প্রতিটি পেজ ও রো নতুন করে লিখতে বাধ্য করত এবং পুরোটা সময় টেবিলে একটি এক্সক্লুসিভ লক ধরে রাখত'
          },
          {
            en: 'It permanently deleted all primary keys from memory',
            bn: 'এটি মেমরি থেকে সমস্ত প্রাইমারি কি চিরতরে মুছে ফেলত'
          },
          {
            en: 'It converted the database into an unstructured text file',
            bn: 'এটি ডাটাবেসকে একটি অসংগঠিত টেক্সট ফাইলে রূপান্তরিত করত'
          },
          {
            en: 'It disconnected the physical server power cables',
            bn: 'এটি সার্ভারের পাওয়ার ক্যাবল বিচ্ছিন্ন করে দিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Full table rewrite: every row had to be modified on disk while locking all readers and writers.',
          bn: 'ফুল টেবিল রিরাইট: সমস্ত রিডার ও রাইটার লক করে ডিস্কের প্রতিটি রো পুনরায় লিখতে হতো।'
        },
        explanation: {
          en: 'In older database engines, adding a NOT NULL column with a default value required rewriting every table page on disk to add the new field to every tuple. Modern engines store defaults in table catalog metadata without table rewrites.',
          bn: 'পুরনো ডাটাবেসে ডিফল্ট মান সহ NOT NULL কলাম যোগ করতে ডিস্কের প্রতিটি পেজ নতুন করে লিখে প্রতিটি সারিতে নতুন ফিল্ড বসাতে হতো। আধুনিক ইঞ্জিনগুলো পুরো টেবিল না লিখে মেটাডাটা ক্যাটালগে ডিফল্ট মান সংরক্ষণ করে এই সমস্যা সমাধান করেছে।'
        }
      },
      {
        id: 'db-rel-qz-4',
        kind: 'mcq',
        topic: 'canary-migration-verification',
        question: {
          en: 'What testing step should engineering teams perform in staging environments before executing migrations on live production databases?',
          bn: 'লাইভ প্রোডাকশন ডাটাবেসে মাইগ্রেশন চালানোর আগে স্টেজিং পরিবেশে ইঞ্জিনিয়ারিং টিমের কোন পরীক্ষাটি চালানো উচিত?'
        },
        options: [
          {
            en: 'Test both "up" and "down" scripts against a sanitized production-scale dataset to verify timing, lock durations, and rollback fidelity',
            bn: 'সময়সীমা, লক চলার সময় এবং রোলব্যাকের নির্ভুলতা যাচাই করতে প্রোডাকশন আকারের ডাটার ওপর "আপ" এবং "ডাউন" উভয় স্ক্রিপ্টই পরীক্ষা করা'
          },
          {
            en: 'Run the migration without looking at logs and immediately ship to production',
            bn: 'লগ না দেখেই মাইগ্রেশন চালানো এবং সাথে সাথে প্রোডাকশনে পাঠিয়ে দেওয়া'
          },
          {
            en: 'Delete all test data so migrations run in under 1 millisecond',
            bn: 'সব টেস্ট ডাটা মুছে ফেলা যাতে ১ মিলিসেকেন্ডের মধ্যে মাইগ্রেশন শেষ হয়'
          },
          {
            en: 'Disable all foreign keys and primary keys permanently',
            bn: 'চিরতরে সমস্ত ফরেন কি এবং প্রাইমারি কি নিষ্ক্রিয় করে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dress rehearsal: practicing both up and down migrations on realistic data volume catches lock pileups.',
          bn: 'মহড়া: বাস্তবসম্মত ডাটা ভলিউমে আপ এবং ডাউন মাইগ্রেশন পরীক্ষা করলে লক সংক্রান্ত সমস্যা আগেই ধরা পড়ে।'
        },
        explanation: {
          en: 'Testing migrations on production-scale datasets reveals unexpected table lock times, WAL volume surges, and edge-case constraint violations before real users are impacted. Practicing down rollbacks guarantees disaster readiness.',
          bn: 'প্রোডাকশন আকারের ডাটাবেসে পরীক্ষা করলে সম্ভাব্য টেবিল লকের সময়, WAL ফাইলের অস্বাভাবিক বৃদ্ধি এবং কনস্ট্রেইন্ট ভায়োলেশন বাস্তব ব্যবহারকারীরা ভোগার আগেই ধরা পড়ে। আর ডাউন স্ক্রিপ্টের মহড়া যেকোনো বিপর্যয়ে দ্রুত পুনরুদ্ধারের প্রস্তুতি নিশ্চিত করে।'
        }
      }
    ]
  }
};
