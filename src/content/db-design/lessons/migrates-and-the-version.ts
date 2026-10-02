import type { Lesson } from '../../../lib/types';

export const MigratesAndTheVersionLesson: Lesson = {
  slug: 'migrates-and-the-version',
  tech: 'db-design',
  title: {
    en: 'Schema Migrations: Versioning & Zero-Downtime Patterns',
    bn: 'স্কিমা মাইগ্রেশন: ভার্সনিং ও শূন্য-ডাউনটাইম প্যাটার্ন'
  },
  summary: {
    en: 'Master enterprise database migrations: track schema versions with migration files, execute non-destructive database updates, and implement the Expand-and-Contract design pattern for zero downtime in production.',
    bn: 'এন্টারপ্রাইজ ডাটাবেস মাইগ্রেশন আয়ত্ত করুন: মাইগ্রেশন ফাইলের সাহায্যে স্কিমা ভার্সন ট্র্যাক, অ-ধ্বংসাত্মক ডাটাবেস পরিবর্তন পরিচালনা এবং প্রোডাকশনে শূন্য ডাউনটাইমের জন্য এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট ডিজাইন প্যাটার্ন বাস্তবায়ন।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'the-reality-of-schema-evolution',
      text: {
        en: 'The Evolution Challenge: Why Production Schemas Cannot Just Be Dropped',
        bn: 'স্কিমা পরিবর্তনের বাস্তবতা: প্রোডাকশনে কেন টেবিল মুছে ফেলা যায় না'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you develop on your local machine, changing a database schema is effortless. You can drop the database, re-run SQL scripts, and insert fresh dummy data in seconds. In 24/7 production systems, however, dropping a table means destroying real customer records, triggering immediate corporate disaster.',
        bn: 'যখন আপনি নিজের লোকাল কম্পিউটারে কাজ করেন, ডাটাবেস স্কিমা পরিবর্তন করা একেবারেই সহজ। আপনি নিমেষেই ডাটাবেস মুছে ফেলতে পারেন, পুনরায় স্ক্রিপ্ট চালাতে পারেন এবং সেকেন্ডের মধ্যে নতুন ডামি ডাটা যোগ করতে পারেন। কিন্তু চব্বিশ ঘণ্টা সচল প্রোডাকশন সিস্টেমে টেবিল মুছে ফেলা মানে আসল গ্রাহকদের তথ্য চিরতরে ধ্বংস করা, যা তাৎক্ষণিকভাবে কোম্পানির জন্য বিপর্যয় ডেকে আনে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'As applications evolve, database schemas must continuously adapt to new product features while serving live web traffic. Software engineering solves this through Version-Controlled Schema Migrations. By treating database changes as sequential, audited, and deterministic scripts, teams safely evolve production databases alongside application code.',
        bn: 'অ্যাপ্লিকেশনের অগ্রগতির সাথে সাথে লাইভ ওয়েব ট্রাফিক সচল রেখেই ডাটাবেস স্কিমাকে ক্রমাগত নতুন ফিচারের সাথে মানিয়ে নিতে হয়। সফটওয়্যার ইঞ্জিনিয়ারিং ভার্সন-নিয়ন্ত্রিত স্কিমা মাইগ্রেশনের মাধ্যমে এই সংকটের সমাধান করে। ডাটাবেসের تمام পরিবর্তনকে পর্যায়ক্রমিক, পরীক্ষিত এবং অপরিবর্তনীয় স্ক্রিপ্ট হিসেবে বিবেচনা করে প্রকৌশলীরা নিরাপদে প্রোডাকশন স্কিমার বিবর্তন ঘটান।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The 5-Phase Zero-Downtime Expand-and-Contract Migration Lifecycle',
        bn: 'শূন্য-ডাউনটাইম এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট মাইগ্রেশনের ৫-ধাপের জীবনচক্র'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Expand and Contract Migration Lifecycle Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Phase 1: Expand -->
  <g transform="translate(25, 30)">
    <rect width="125" height="260" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <rect width="125" height="30" rx="6" fill="#0284c7" />
    <text x="62" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">1. EXPAND</text>
    <text x="10" y="50" fill="#38bdf8" font-size="9" font-weight="bold">Add Column:</text>
    <text x="10" y="66" fill="#cbd5e1" font-size="8">Add legal_name</text>
    <text x="10" y="80" fill="#cbd5e1" font-size="8">alongside name</text>
    <text x="10" y="110" fill="#facc15" font-size="9" font-weight="bold">Dual-Write:</text>
    <text x="10" y="126" fill="#cbd5e1" font-size="8">App writes to</text>
    <text x="10" y="140" fill="#cbd5e1" font-size="8">BOTH columns</text>
    <text x="10" y="190" fill="#94a3b8" font-size="8">Reads still use</text>
    <text x="10" y="204" fill="#94a3b8" font-size="8">original column</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 155 160 L 165 160" stroke="#facc15" stroke-width="2" />

  <!-- Phase 2: Backfill -->
  <g transform="translate(170, 30)">
    <rect width="125" height="260" rx="6" fill="#1e293b" stroke="#facc15" stroke-width="1.5" />
    <rect width="125" height="30" rx="6" fill="#ca8a04" />
    <text x="62" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">2. BACKFILL</text>
    <text x="10" y="50" fill="#facc15" font-size="9" font-weight="bold">Copy Old Data:</text>
    <text x="10" y="66" fill="#cbd5e1" font-size="8">Background worker</text>
    <text x="10" y="80" fill="#cbd5e1" font-size="8">copies historical</text>
    <text x="10" y="94" fill="#cbd5e1" font-size="8">rows to new col</text>
    <text x="10" y="125" fill="#4ade80" font-size="9" font-weight="bold">Batch Chunks:</text>
    <text x="10" y="141" fill="#cbd5e1" font-size="8">Process 1,000</text>
    <text x="10" y="155" fill="#cbd5e1" font-size="8">rows at a time</text>
    <text x="10" y="190" fill="#94a3b8" font-size="8">Zero table locks;</text>
    <text x="10" y="204" fill="#94a3b8" font-size="8">No write pauses</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 300 160 L 310 160" stroke="#a855f7" stroke-width="2" />

  <!-- Phase 3: Contract Reads -->
  <g transform="translate(315, 30)">
    <rect width="125" height="260" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
    <rect width="125" height="30" rx="6" fill="#7e22ce" />
    <text x="62" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">3. READ SWITCH</text>
    <text x="10" y="50" fill="#c084fc" font-size="9" font-weight="bold">Switch Reads:</text>
    <text x="10" y="66" fill="#cbd5e1" font-size="8">Deploy new app</text>
    <text x="10" y="80" fill="#cbd5e1" font-size="8">release reading</text>
    <text x="10" y="94" fill="#cbd5e1" font-size="8">from legal_name</text>
    <text x="10" y="125" fill="#38bdf8" font-size="9" font-weight="bold">Dual-Write Active:</text>
    <text x="10" y="141" fill="#cbd5e1" font-size="8">Still writing to</text>
    <text x="10" y="155" fill="#cbd5e1" font-size="8">old column for</text>
    <text x="10" y="169" fill="#cbd5e1" font-size="8">rollback safety</text>
  </g>

  <!-- Arrow 3 to 4 -->
  <path d="M 445 160 L 455 160" stroke="#10b981" stroke-width="2" />

  <!-- Phase 4: Cease Writes -->
  <g transform="translate(460, 30)">
    <rect width="125" height="260" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="125" height="30" rx="6" fill="#059669" />
    <text x="62" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">4. STOP WRITE</text>
    <text x="10" y="50" fill="#34d399" font-size="9" font-weight="bold">Cease Old Writes:</text>
    <text x="10" y="66" fill="#cbd5e1" font-size="8">Stop dual-writing</text>
    <text x="10" y="80" fill="#cbd5e1" font-size="8">to old column</text>
    <text x="10" y="110" fill="#cbd5e1" font-size="8">App reads and</text>
    <text x="10" y="124" fill="#cbd5e1" font-size="8">writes solely to</text>
    <text x="10" y="138" fill="#cbd5e1" font-size="8">legal_name</text>
    <text x="10" y="180" fill="#94a3b8" font-size="8">Old column now</text>
    <text x="10" y="194" fill="#94a3b8" font-size="8">dormant &amp; isolated</text>
  </g>

  <!-- Arrow 4 to 5 -->
  <path d="M 590 160 L 600 160" stroke="#ef4444" stroke-width="2" />

  <!-- Phase 5: Drop -->
  <g transform="translate(605, 30)">
    <rect width="110" height="260" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <rect width="110" height="30" rx="6" fill="#991b1b" />
    <text x="55" y="20" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">5. DROP</text>
    <text x="10" y="50" fill="#f87171" font-size="9" font-weight="bold">Drop Column:</text>
    <text x="10" y="66" fill="#cbd5e1" font-size="8">ALTER TABLE</text>
    <text x="10" y="80" fill="#cbd5e1" font-size="8">DROP COLUMN</text>
    <text x="10" y="94" fill="#cbd5e1" font-size="8">name;</text>
    <text x="10" y="140" fill="#4ade80" font-size="9" font-weight="bold">Zero Outages:</text>
    <text x="10" y="156" fill="#cbd5e1" font-size="8">Clean schema;</text>
    <text x="10" y="170" fill="#cbd5e1" font-size="8">Zero 500 errors</text>
  </g>
</svg>`,
      caption: {
        en: 'The 5-phase Expand-and-Contract design pattern: splitting destructive column changes into safe, parallel phases that eliminate database downtime.',
        bn: '৫-ধাপের এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট ডিজাইন প্যাটার্ন: ক্ষতিকর কলাম পরিবর্তনকে নিরাপদ সমান্তরাল ধাপে ভাগ করে ডাটাবেসের ডাউনটাইম পুরোপুরি দূর করা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Schema Migration',
          def: {
            en: 'An automated, version-controlled set of DDL scripts that incrementally transform a database schema from one version to another.',
            bn: 'স্বয়ংক্রিয় ও ভার্সন-নিয়ন্ত্রিত DDL স্ক্রিপ্টের একটি সেট যা ধাপে ধাপে একটি ডাটাবেস স্কিমাকে এক ভার্সন থেকে অন্য ভার্সনে রূপান্তরিত করে।'
          }
        },
        {
          term: 'Expand-and-Contract Pattern',
          def: {
            en: 'A transition pattern that adds new columns alongside old ones (expand), dual-writes, backfills data, and only drops old fields after all services migrate (contract).',
            bn: 'একটি রূপান্তর প্যাটার্ন যা পুরানোর পাশে নতুন কলাম যোগ করে (expand), উভয় জায়গায় লেখে, ডাটা পূরণ করে এবং সব শেষে পুরানো কলাম মুছে দেয় (contract)।'
          }
        },
        {
          term: 'Dual-Writing',
          def: {
            en: 'An application pattern where incoming create or update operations write to both legacy and new database columns simultaneously during a migration.',
            bn: 'অ্যাপ্লিকেশনের এমন একটি পদ্ধতি যেখানে মাইগ্রেশন চলাকালীন নতুন কোনো ডাটা এলে তা একই সাথে পুরানো ও নতুন উভয় কলামেই লিখে রাখা হয়।'
          }
        },
        {
          term: 'Batched Backfill',
          def: {
            en: 'The process of populating historical data into newly added columns in small chunks to prevent long-running transactions and table lock contention.',
            bn: 'টেবিল লক ও দীর্ঘ ট্রানজ্যাকশন এড়াতে ছোট ছোট ব্যাচে ভাগ করে নতুন কলামে পুরানো ঐতিহাসিক ডাটা কপি করার প্রক্রিয়া।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-expand-and-contract-pattern',
      text: {
        en: 'The Expand-and-Contract (Parallel Run) Pattern in Detail',
        bn: 'এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট (প্যারালাল রান) প্যাটার্নের বিস্তারিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider renaming a primary user column on a large table with 50000000 rows. Running a direct ALTER TABLE RENAME statement immediately breaks active web containers, as in-flight queries still request the legacy attribute name.',
        bn: '৫০000000 সারির একটি সচল টেবিলে কোনো মূল কলামের নাম পরিবর্তনের কথা বিবেচনা করুন। সরাসরি ALTER TABLE RENAME স্টেটমেন্ট চালালে সাথে সাথেই সক্রিয় ওয়েব কনটেইনারগুলো ক্র্যাশ করবে, কারণ চলমান কোয়েরিগুলো তখনও পুরানো কলামের নাম খুঁজছিল।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Expand-and-Contract pattern eliminates this catastrophic outage across distinct phases. First, expand by adding legal_name as a nullable column. Next, configure the application to dual-write to both full_name and legal_name. Then, run a background worker to backfill historical rows in chunks of 1000 without locking the table. Finally, deploy code to read from legal_name, stop writes to full_name, and drop the legacy column.',
        bn: 'এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্ন ধাপে ধাপে কাজ করে এই ভয়াবহ বিভ্রাট পুরোপুরি দূর করে। প্রথমে legal_name নামে একটি নতুন নালেবল কলাম যুক্ত করে স্কিমা সম্প্রসারণ (expand) করুন। এরপর অ্যাপ্লিকেশনে ডুয়াল-রাইট চালু করুন যাতে নতুন ডাটা উভয় কলামেই জমা হয়। তারপর ব্যাকগ্রাউন্ড প্রসেস দিয়ে কোনো টেবিল লক না করে ১০০০ সারির ব্যাচে পুরানো সমস্ত ডাটা নতুন কলামে কপি করুন। সবশেষে অ্যাপ্লিকেশনকে নতুন কলাম থেকে পড়তে নির্দেশ দিন, পুরানো কলামে লেখা বন্ধ করুন এবং নিরাপদে পুরানো কলামটি মুছে ফেলুন (contract)।'
      }
    },
    {
      type: 'heading',
      id: 'node-migration-engine',
      text: {
        en: 'Executable Zero-Downtime Migration Engine',
        bn: 'রানযোগ্য শূন্য-ডাউনটাইম মাইগ্রেশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating an Expand-and-Contract migration on a database with 1000 live users. It splits a legacy name string into firstName and lastName. A background worker backfills all 1000 records across 4 batches of 250 rows with 0 table locks, completing a 5-phase migration with 0 failed requests.',
        bn: 'নিচে ১০০০ জন লাইভ ব্যবহারকারীযুক্ত ডাটাবেসে এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট মাইগ্রেশন পরিচালনাকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি একটি পুরানো নামকে ভেঙে firstName এবং lastName-এ রূপান্তর করে। একটি ব্যাকগ্রাউন্ড ওয়ার্কার ০টি টেবিল লক সহ ২৫০টি রো-র ৪টি ব্যাচে সমস্ত ১০০০ রেকর্ড সফলভাবে হালনাগাদ করে এবং ০টি ব্যর্থ রিকোয়েস্টে ৫-ধাপের মাইগ্রেশন সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Zero-downtime migration engine demonstrating dual-writing, chunked backfilling, and legacy column removal',
        bn: 'ডুয়াল-রাইটিং, ব্যাচড ব্যাকফিলিং এবং পুরানো কলাম মুছে ফেলা প্রদর্শনকারী শূন্য-ডাউনটাইম মাইগ্রেশন ইঞ্জিন'
      },
      code: `// Zero-Downtime Migration Simulator
const userRecords = [];
for (let i = 1; i <= 1000; i++) {
  userRecords.push({ id: i, legacyName: 'User ' + i, firstName: null, lastName: null });
}

// Phase 1: Expand (Application dual-writes for new incoming user)
const incomingUser = { id: 1001, legacyName: 'Alice Smith', firstName: 'Alice', lastName: 'Smith' };
userRecords.push(incomingUser);

// Phase 2: Chunked Background Backfill (in 4 batches of 250 rows)
const batchChunkSize = 250;
let executedBatches = 0;

for (let batchOffset = 0; batchOffset < 1000; batchOffset += batchChunkSize) {
  for (let idx = batchOffset; idx < batchOffset + batchChunkSize; idx++) {
    const nameSegments = userRecords[idx].legacyName.split(' ');
    userRecords[idx].firstName = nameSegments[0];
    userRecords[idx].lastName = nameSegments[1] || 'Default';
  }
  executedBatches++;
}

// Phase 3, 4, 5: Contract and safely drop legacy column
for (const user of userRecords) {
  delete user.legacyName;
}

const unmigratedCount = userRecords.filter(user => !user.firstName || !user.lastName).length;
const isAccurate = userRecords.length === 1001 && executedBatches === 4 && unmigratedCount === 0;

console.log(\`[Migration Engine] Initialized Expand-and-Contract pipeline for 1000 live users.\`);
console.log(\`[Batched Backfill] Successfully backfilled 1000 records in \${executedBatches} batches of \${batchChunkSize} rows with 0 table locks.\`);
console.log(\`[Zero-Downtime Verdict] Completed 5-phase migration with 0 failed requests (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'PostgreSQL Transactional DDL vs MySQL Non-Transactional DDL',
        bn: 'PostgreSQL ট্রানজ্যাকশনাল DDL বনাম MySQL নন-ট্রানজ্যাকশনাল DDL'
      },
      text: {
        en: 'PostgreSQL supports transactional DDL: you can wrap CREATE TABLE, ALTER TABLE, and CREATE INDEX statements inside BEGIN ... COMMIT blocks. If a migration step fails, PostgreSQL cleanly rolls back the entire schema change. In sharp contrast, MySQL InnoDB auto-commits DDL statements immediately; if a migration fails midway in MySQL, your schema is left broken in a half-migrated state.',
        bn: 'PostgreSQL ট্রানজ্যাকশনাল DDL সমর্থন করে: আপনি CREATE TABLE বা ALTER TABLE স্টেটমেন্টগুলোকে BEGIN ... COMMIT ব্লকের ভেতরে চালাতে পারেন। কোনো ধাপে ভুল হলে PostgreSQL পুরো স্কিমা পরিবর্তনটি আগের অবস্থায় ফিরিয়ে আনে (rollback)। কিন্তু MySQL InnoDB সমস্ত DDL সাথে সাথে অটো-কমিট করে ফেলে; ফলে মাঝপথে কোনো মাইগ্রেশন আটকে গেলে MySQL ডাটাবেস একটি ভাঙা ও বিকৃত অবস্থায় পড়ে থাকে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Migration Safety Evaluator',
        bn: 'মাইগ্রেশন নিরাপত্তা পরীক্ষক'
      },
      description: {
        en: 'Determine whether a proposed production schema modification is safe to run directly or requires the Expand-and-Contract pattern.',
        bn: 'কোনো স্কিমা পরিবর্তন সরাসরি চালানো নিরাপদ নাকি এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্ন আবশ্যক তা পরীক্ষা করুন।'
      },
      code: `function assessMigrationSafety(actionType, isLiveProduction) {
  if (actionType === 'RENAME_OR_SPLIT_COLUMN' && isLiveProduction) {
    return 'DANGEROUS: Requires Expand-and-Contract dual-write pipeline';
  }
  if (actionType === 'ADD_NULLABLE_COLUMN') {
    return 'SAFE: Non-blocking instantaneous metadata update in modern RDBMS';
  }
  return 'EVALUATE: Verify table lock duration before applying';
}

console.log('Split Name:', assessMigrationSafety('RENAME_OR_SPLIT_COLUMN', true));
console.log('Add Flag:', assessMigrationSafety('ADD_NULLABLE_COLUMN', true));`,
      tests: [
        {
          name: {
            en: 'Flags destructive column split as requiring expand-and-contract',
            bn: 'কলাম বিভাজনের জন্য এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্টের প্রয়োজনীয়তা চিহ্নিত করে'
          },
          expected: 'Split Name: DANGEROUS: Requires Expand-and-Contract dual-write pipeline'
        },
        {
          name: {
            en: 'Confirms adding nullable column as safe instantaneous change',
            bn: 'নালেবল কলাম যোগ করাকে নিরাপদ তাৎক্ষণিক পরিবর্তন হিসেবে নিশ্চিত করে'
          },
          expected: 'Add Flag: SAFE: Non-blocking instantaneous metadata update in modern RDBMS'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-mig-ex-1',
      kind: 'mcq',
      topic: 'expand-contract-first-phase',
      question: {
        en: 'What is the very first step an engineering team must take when executing the Expand-and-Contract migration pattern to rename a database column?',
        bn: 'একটি ডাটাবেস কলামের নাম পরিবর্তনের জন্য এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট মাইগ্রেশন প্যাটার্ন বাস্তবায়নের প্রথম পদক্ষেপটি কী?'
      },
      options: [
        {
          en: 'Add the new column alongside the existing column as NULLABLE (expand) and configure application code to dual-write incoming updates to both columns simultaneously',
          bn: 'বিদ্যমান কলামের পাশাপাশি নতুন কলামটিকে NULLABLE হিসেবে যুক্ত করা (expand) এবং নতুন تمام ডাটা একই সাথে উভয় কলামে লিখতে (dual-write) অ্যাপ্লিকেশন কোড প্রস্তুত করা'
        },
        {
          en: 'Immediately delete the old column from production without warning',
          bn: 'কোনো নোটিশ ছাড়াই প্রোডাকশন থেকে পুরানো কলামটি সাথে সাথে মুছে ফেলা'
        },
        {
          en: 'Shut down the database server for 48 hours',
          bn: '৪৮ ঘণ্টার জন্য ডাটাবেস সার্ভার পুরোপুরি বন্ধ করে রাখা'
        },
        {
          en: 'Ask all customers to create a new user account',
          bn: 'সমস্ত গ্রাহককে নতুন ইউজার অ্যাকাউন্ট খুলতে অনুরোধ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Expand first: add the new column and dual-write before touching old data.',
        bn: 'প্রথমে বিস্তার করুন: পুরানো ডাটায় হাত দেওয়ার আগেই নতুন কলাম যুক্ত করে ডুয়াল-রাইট চালু করুন।'
      },
      explanation: {
        en: 'The Expand phase ensures new data populates both columns, guaranteeing that subsequent code deployments will find up-to-date data in the new column.',
        bn: 'এক্সপ্যান্ড ধাপটি নিশ্চিত করে যে নতুন तमाम ডাটা উভয় কলামেই জমা হচ্ছে, যাতে পরবর্তী কোড রিলিজের সময় নতুন কলামে হালনাগাদ তথ্য পাওয়া যায়।'
      }
    },
    {
      id: 'db-mig-ex-2',
      kind: 'mcq',
      topic: 'batched-backfill-benefit',
      question: {
        en: 'Why should historical data backfills on multi-million row tables always be executed in small batched transactions (e.g. 1000 rows at a time) rather than a single UPDATE statement?',
        bn: 'কোটি কোটি সারির টেবিলে ঐতিহাসিক ডাটা ব্যাকফিল করার সময় কেন একটি একক UPDATE স্টেটমেন্টের বদলে সর্বদা ছোট ছোট ব্যাচে (যেমন একসাথে ১০০০ রো) কাজ সম্পন্ন করা উচিত?'
      },
      options: [
        {
          en: 'A single massive UPDATE statement holds table-level locks, bloats transaction logs, exhausts server memory, and causes cascading timeouts on live web application traffic',
          bn: 'একটি বিশাল UPDATE স্টেটমেন্ট টেবিলে ভারী লক লাগিয়ে রাখে, ট্রানজ্যাকশন লগ অতিরিক্ত ফুলিয়ে দেয়, সার্ভার মেমরি শেষ করে ফেলে এবং লাইভ ওয়েব ট্রাফিকে টাইমআউট ঘটায়'
        },
        {
          en: 'Because SQL database engines only have enough electricity to update 1000 rows',
          bn: 'কারণ SQL ডাটাবেস ইঞ্জিনে কেবল ১০০০ রো আপডেট করার মতো বিদ্যুৎ থাকে'
        },
        {
          en: 'Because updates with more than 1000 rows are converted into audio songs',
          bn: 'কারণ ১০০০-এর বেশি রো আপডেট করলে তা অডিও গানে রূপান্তরিত হয়'
        },
        {
          en: 'Batched updates take up zero bytes of storage space',
          bn: 'ব্যাচ আপডেট স্টোরেজে শূন্য বাইট জায়গা দখল করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Small batches prevent lock exhaustion and allow concurrent live user writes to proceed.',
        bn: 'ছোট ব্যাচ লকিং সমস্যা প্রতিরোধ করে সাধারণ ব্যবহারকারীদের ডাটা লেখার কাজ সচল রাখে।'
      },
      explanation: {
        en: 'Updating 50 million rows at once generates massive WAL/undo logs and holds row locks for minutes. Chunked updates release locks after each batch, keeping production checkouts responsive.',
        bn: 'একসাথে কোটি কোটি রো আপডেট করতে গেলে বিশাল লগ তৈরি হয় এবং দীর্ঘক্ষণ লক থাকে। ছোট ছোট ব্যাচে কাজ করলে প্রতিটি ব্যাচের পর লক মুক্ত হয়ে যায় এবং সাইট সচল থাকে।'
      }
    },
    {
      id: 'db-mig-ex-3',
      kind: 'mcq',
      topic: 'migration-tracking-table',
      question: {
        en: 'How do database migration tools (like Prisma, Flyway, or Liquibase) determine which SQL migration scripts have already been executed against a production database?',
        bn: 'ডাটাবেস মাইগ্রেশন টুলগুলো (যেমন Prisma, Flyway বা Liquibase) কীভাবে নির্ধারণ করে যে একটি প্রোডাকশন ডাটাবেসে কোন কোন SQL স্ক্রিপ্ট ইতিমধ্যে কার্যকর হয়েছে?'
      },
      options: [
        {
          en: 'They maintain an internal metadata table (such as schema_migrations) recording the version identifier, execution timestamp, and cryptographic checksum of every applied script',
          bn: 'তারা ডাটাবেসের ভেতরে একটি অভ্যন্তরীণ মেটাডাটা টেবিল (যেমন schema_migrations) রাখে যেখানে প্রতিটি স্ক্রিপ্টের ভার্সন, চালনার সময় এবং ক্রিপ্টোগ্রাফিক চেকসাম সংরক্ষিত থাকে'
        },
        {
          en: 'They send a letter through physical post to the company headquarters',
          bn: 'তারা কোম্পানির প্রধান কার্যালয়ে চিঠি পাঠিয়ে খবর পাঠায়'
        },
        {
          en: 'They guess randomly based on the current weather in London',
          bn: 'তারা লন্ডনের বর্তমান আবহাওয়ার ওপর ভিত্তি করে এলোমেলোভাবে অনুমান করে'
        },
        {
          en: 'By asking the database server CPU chip out loud in English',
          bn: 'ডাটাবেস সার্ভারের সিপিইউ চিপকে ইংরেজিতে চিৎকার করে জিজ্ঞাসা করার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A dedicated schema_migrations table logs the historical ledger of executed migration files.',
        bn: 'একটি নির্দিষ্ট schema_migrations টেবিল সমস্ত সম্পন্ন হওয়া মাইগ্রেশন ফাইলের ইতিহাস লিখে রাখে।'
      },
      explanation: {
        en: 'Migration frameworks query the schema_migrations ledger upon startup. If a migration file is already recorded in the ledger, the engine skips it; unapplied files execute in exact chronological order.',
        bn: 'মাইগ্রেশন ফ্রেমওয়ার্ক চালুর সময় schema_migrations টেবিল পরীক্ষা করে। যে স্ক্রিপ্টগুলো আগে চালানো হয়েছে সেগুলো বাদ দিয়ে নতুন ফাইলগুলোকে পর্যায়ক্রমে চালায়।'
      }
    },
    {
      id: 'db-mig-ex-4',
      kind: 'mcq',
      topic: 'transactional-ddl-advantages',
      question: {
        en: 'Why is PostgreSQL\'s native support for "Transactional DDL" a major engineering safety feature for DevOps CI/CD deployment pipelines?',
        bn: 'PostgreSQL-এর নেটিভ "ট্রানজ্যাকশনাল DDL" সমর্থন কেন DevOps CI/CD ডিপ্লয়মেন্ট পাইপলাইনের জন্য একটি প্রধান প্রযুক্তিগত নিরাপত্তা বৈশিষ্ট্য?'
      },
      options: [
        {
          en: 'If a multi-step migration script fails midway (e.g. step 3 fails after steps 1 and 2 succeed), the entire transaction rolls back automatically, leaving the database in a clean, consistent prior state',
          bn: 'যদি কোনো বহু-ধাপের মাইগ্রেশন মাঝপথে আটকে যায় (যেমন ধাপ ১ ও ২ সফল হওয়ার পর ধাপ ৩ ব্যর্থ হয়), তবে সম্পূর্ণ পরিবর্তনটি স্বয়ংক্রিয়ভাবে রোলব্যাক হয়ে ডাটাবেসকে আগের সুস্থ অবস্থায় ফিরিয়ে আনে'
        },
        {
          en: 'Transactional DDL makes all database queries run 10 times faster',
          bn: 'ট্রানজ্যাকশনাল DDL সমস্ত কোয়েরির গতি ১০ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'It encrypts all database passwords into ancient Latin words',
          bn: 'এটি تمام ডাটাবেস পাসওয়ার্ডকে প্রাচীন ল্যাটিন ভাষায় এনক্রিপ্ট করে'
        },
        {
          en: 'It allows developers to modify hardware circuits with SQL code',
          bn: 'এটি ডেভেলপারদেরকে SQL কোড দিয়ে কম্পিউটারের হার্ডওয়্যার সার্কিট পরিবর্তনের সুযোগ দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Atomic DDL prevents databases from getting stuck in half-migrated broken states.',
        bn: 'অ্যাটমিক DDL ডাটাবেসকে অর্ধেক মাইগ্রেট হওয়া বিকৃত অবস্থায় আটকে যাওয়া থেকে রক্ষা করে।'
      },
      explanation: {
        en: 'In non-transactional engines like MySQL, a failed migration leaves steps 1 and 2 committed while step 3 fails, forcing painful manual DBA surgery. PostgreSQL rolls back the entire transaction atomically.',
        bn: 'MySQL-এর মতো নন-ট্রানজ্যাকশনাল ইঞ্জিনে মাঝপথে ব্যর্থ হলে ডাটাবেস একটি বিকৃত অবস্থায় আটকে যায় যা ঠিক করা খুব জটিল। PostgreSQL পুরোটাই স্বয়ংক্রিয়ভাবে আগের অবস্থায় ফিরিয়ে আনে।'
      }
    }
  ],
  quiz: {
    id: 'migrates-and-the-version-quiz',
    title: {
      en: 'Database Schema Migration & Versioning Quiz',
      bn: 'ডাটাবেস স্কিমা মাইগ্রেশন ও ভার্সনিং কুইজ'
    },
    questions: [
      {
        id: 'db-mig-qz-1',
        kind: 'mcq',
        topic: 'adding-not-null-column-safely',
        question: {
          en: 'What is the safe zero-downtime procedure to add a NOT NULL column with a DEFAULT value to a 20-million row table in production PostgreSQL?',
          bn: 'প্রোডাকশন PostgreSQL-এ ২ কোটি সারির টেবিলে ডিফল্ট মান সহ একটি NOT NULL কলাম যুক্ত করার নিরাপদ শূন্য-ডাউনটাইম পদ্ধতি কোনটি?'
        },
        options: [
          {
            en: 'In PostgreSQL 11+, ADD COLUMN with a constant DEFAULT is instantaneous metadata-only (zero table rewrite); then add the NOT NULL constraint or validate it without table locking',
            bn: 'PostgreSQL 11+ সংস্করণে কনস্ট্যান্ট DEFAULT সহ ADD COLUMN চালানো তাৎক্ষণিক মেটাডাটা আপডেট (কোনো টেবিল রিরাইট হয় না); এরপর কোনো টেবিল লক না করেই নিরাপদে NOT NULL কনস্ট্রেইন্ট ভ্যালিডেট করা যায়'
          },
          {
            en: 'Drop the database table and recreate it from a CSV file',
            bn: 'ডাটাবেস টেবিল মুছে ফেলে একটি CSV ফাইল থেকে আবার নতুন করে তৈরি করা'
          },
          {
            en: 'Reboot the database server 10 times in a row',
            bn: 'ডাটাবেস সার্ভারকে একাধারে ১০ বার রিস্টার্ট দেওয়া'
          },
          {
            en: 'Change all numbers in the table to zero',
            bn: 'টেবিলের সমস্ত সংখ্যাকে শূন্য করে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'PostgreSQL 11+ tracks constant defaults in system catalogs without rewriting table heap pages.',
          bn: 'PostgreSQL 11+ পেজ রিরাইট না করেই সিস্টেম ক্যাটালগে তাৎক্ষণিকভাবে ডিফল্ট মান ট্র্যাক করে।'
        },
        explanation: {
          en: 'Older databases locked and rewrote every row when adding a default. Modern PostgreSQL updates catalog metadata instantaneously in O(1) time, avoiding production lockouts.',
          bn: 'পুরানো ডাটাবেস প্রতিটি রো নতুন করে লিখে টেবিল লক করত। আধুনিক PostgreSQL তাৎক্ষণিকভাবে O(1) সময়ে ক্যাটালগ আপডেট করে কোনো ডাউনটাইম ছাড়াই কাজ শেষ করে।'
        }
      },
      {
        id: 'db-mig-qz-2',
        kind: 'mcq',
        topic: 'migration-file-checksum-tampering',
        question: {
          en: 'What happens if a developer edits the SQL code of an already-applied migration file in version control and attempts to deploy it to production?',
          bn: 'কোনো ডেভেলপার যদি ভার্সন কন্ট্রোলে আগে থেকেই প্রোডাকশনে চলা কোনো মাইগ্রেশন ফাইলের SQL কোড পরিবর্তন করে তা আবার ডিপ্লয় করার চেষ্টা করেন, তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'The migration runner calculates a cryptographic checksum (hash) that mismatches the recorded hash in schema_migrations, throwing a checksum mismatch error and halting deployment',
            bn: 'মাইগ্রেশন রানার একটি ক্রিপ্টোগ্রাফিক চেকসাম (হ্যাশ) তৈরি করে যা schema_migrations টেবিলে থাকা হ্যাশের সাথে মেলে না, ফলে চেকসাম অমিল ত্রুটি ছুড়ে ডিপ্লয়মেন্ট সাথে সাথে বন্ধ করে দেয়'
          },
          {
            en: 'The database engine sends a friendly congratulatory email to the developer',
            bn: 'ডাটাবেস ইঞ্জিন ডেভেলপারকে একটি আন্তরিক অভিনন্দনের ইমেইল পাঠায়'
          },
          {
            en: 'All table rows are automatically converted into PDF documents',
            bn: 'تمام টেবিল সারি নিজে নিজেই পিডিএফ ডকুমেন্টে রূপান্তরিত হয়'
          },
          {
            en: 'The developer\'s computer monitor turns upside down',
            bn: 'ডেভেলপারের কম্পিউটার মনিটর উল্টো হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Migration files are immutable historical records; modifying them breaks the checksum ledger.',
          bn: 'মাইগ্রেশন ফাইল হলো অপরিবর্তনীয় ঐতিহাসিক দলিল; এতে হাত দিলে হ্যাশ নষ্ট হয়ে যায়।'
        },
        explanation: {
          en: 'Never alter an existing applied migration file. Migration tools enforce checksum integrity. If a change is needed, author a brand new subsequent forward migration file.',
          bn: 'পূর্বে কার্যকর হওয়া মাইগ্রেশন ফাইলে কখনো পরিবর্তন আনতে নেই। কোনো পরিবর্তনের প্রয়োজন হলে সর্বদা নতুন আরেকটি মাইগ্রেশন ফাইল তৈরি করতে হয়।'
        }
      },
      {
        id: 'db-mig-qz-3',
        kind: 'mcq',
        topic: 'dual-write-consistency-failure',
        question: {
          en: 'During the Dual-Write phase of an Expand-and-Contract migration, how should applications handle potential write inconsistencies between the old and new columns?',
          bn: 'এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট মাইগ্রেশনের ডুয়াল-রাইট চলাকালীন পুরানো ও নতুন কলামের মধ্যে সম্ভাব্য তথ্যের অমিল অ্যাপ্লিকেশন কীভাবে মোকাবিলা করবে?'
        },
        options: [
          {
            en: 'Execute writes to both columns within the same atomic database transaction so both columns either succeed together or roll back together',
            bn: 'উভয় কলামে লেখার কাজ একই একক ডাটাবেস ট্রানজ্যাকশনের মধ্যে সম্পন্ন করতে হবে যাতে উভয় কলাম হয় একসাথে সফল হয় নয়তো একসাথে বাতিল হয়'
          },
          {
            en: 'Write to the old column today and write to the new column next month',
            bn: 'পুরানো কলামে আজ লিখতে হবে আর নতুন কলামে আগামী মাসে লিখতে হবে'
          },
          {
            en: 'Write to both columns using separate WiFi connections',
            bn: 'আলাদা আলাদা ওয়াইফাই কানেকশন ব্যবহার করে উভয় কলামে লিখতে হবে'
          },
          {
            en: 'Ignore write failures completely because data consistency is optional',
            bn: 'লেখার ব্যর্থতাকে পুরোপুরি উপেক্ষা করতে হবে কারণ ডাটা শুদ্ধতা ঐচ্ছিক বিষয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Atomic transactions ensure both columns remain 100% in sync during dual-writing.',
          bn: 'অ্যাটমিক ট্রানজ্যাকশন ডুয়াল-রাইটের সময় উভয় কলামের শতভাগ সামঞ্জস্য নিশ্চিত করে।'
        },
        explanation: {
          en: 'Dual-writes must be atomic. Updating both columns inside a single SQL transaction guarantees that network glitches or partial failures cannot cause the new column to fall out of sync.',
          bn: 'ডুয়াল-রাইট সর্বদা অ্যাটমিক হতে হয়। একটিমাত্র ট্রানজ্যাকশনের ভেতরে উভয় কলাম আপডেট করলে নেটওয়ার্কের কোনো ত্রুটির কারণেও দুই কলামের তথ্যের অমিল তৈরি হতে পারে না।'
        }
      },
      {
        id: 'db-mig-qz-4',
        kind: 'mcq',
        topic: 'contract-phase-final-column-drop',
        question: {
          en: 'When is it safe to execute the final Contract phase (dropping the old legacy column from the production table)?',
          bn: 'কখন প্রোডাকশন টেবিল থেকে পুরানো কলামটি মুছে ফেলার চূড়ান্ত কন্ট্রাক্ট ধাপ পরিচালনা করা নিরাপদ?'
        },
        options: [
          {
            en: 'Only after 100% of application microservices have been deployed and verified to read and write exclusively to the new column, with zero references remaining in active code or background jobs',
            bn: 'যখন تمام অ্যাপ্লিকেশন ও মাইক্রোসার্ভিস সফলভাবে ডিপ্লয় হয়ে গেছে এবং নিশ্চিত হওয়া গেছে যে সমস্ত কোড ও ব্যাকগ্রাউন্ড কাজ কেবল নতুন কলামটি ব্যবহার করছে'
          },
          {
            en: 'Immediately on the first minute of the migration before deploying any new code',
            bn: 'কোনো নতুন কোড ডিপ্লয় করার আগেই মাইগ্রেশনের প্রথম মিনিটে'
          },
          {
            en: 'Whenever the database server runs out of disk storage',
            bn: 'যখনই ডাটাবেস সার্ভারের সমস্ত ডিস্ক স্টোরেজ ফুরিয়ে যায়'
          },
          {
            en: 'Only on leap years during the month of February',
            bn: 'কেবল অধিবর্ষের ফেব্রুয়ারি মাসের দিনগুলোতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never drop a column while any active application container is still requesting it.',
          bn: 'কোনো সচল অ্যাপ্লিকেশন কনটেইনারের কলামটি প্রয়োজন থাকা অবস্থায় কখনো তা ড্রপ করবেন না।'
        },
        explanation: {
          en: 'Dropping a column while old code is running causes instant SQL syntax crashes. The old column should only be dropped in a subsequent release after all old code is completely phased out.',
          bn: 'পুরানো কোড চলা অবস্থায় কলাম ড্রপ করলে তাৎক্ষণিক এরর দেখা দেয়। সমস্ত পুরানো কোড পুরোপুরি অবসরে যাওয়ার পরেই কেবল পরবর্তী রিলিজের সময় পুরানো কলামটি মুছতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'seeds-and-the-fixture',
    title: {
      en: 'Database Seeding & Test Fixtures: Deterministic Datasets',
      bn: 'ডাটাবেস সিডিং ও টেস্ট ফিক্সচার: সুশৃঙ্খল মক ডাটাবেস'
    }
  }
};
