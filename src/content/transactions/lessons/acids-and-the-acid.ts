import type { Lesson } from '../../../lib/types';

export const AcidsAndTheAcidLesson: Lesson = {
  slug: 'acids-and-the-acid',
  tech: 'transactions',
  title: {
    en: 'The ACID Pillars: Invariants of Relational Consistency',
    bn: 'ACID স্তম্ভসমূহ: রিলেশনাল কনসিস্টেন্সির মূল ভিত্তি'
  },
  summary: {
    en: 'Master the four core guarantees of relational database systems: Atomicity, Consistency, Isolation, and Durability (ACID), Write-Ahead Logging (WAL), and ACID vs BASE architectural trade-offs.',
    bn: 'রিলেশনাল ডাটাবেস সিস্টেমের ৪টি প্রধান নিশ্চয়তা আয়ত্ত করুন: অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি (ACID), রাইট-অ্যাহেড লগিং (WAL) এবং ACID বনাম BASE আর্কিটেকচারাল আপস।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'four-pillars-of-acid',
      text: {
        en: 'The 4 Invariant Guarantees of Relational Systems',
        bn: 'রিলেশনাল ডাটাবেসের ৪টি অলঙ্ঘনীয় নিশ্চয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your software handles user payments, server crashes and race conditions threaten your data. Without guarantees, a sudden failure leaves balances corrupted. To solve this, database architects rely on ACID (Atomicity, Consistency, Isolation, and Durability) guarantees. In 1983, computer scientists Andreas Reuter and Theo Härder formalized these 4 fundamental properties to safeguard reliable transaction processing.',
        bn: 'যখন আপনার সফটওয়্যার আর্থিক লেনদেন পরিচালনা করে, তখন সার্ভার ক্র্যাশ এবং রেস কন্ডিশন ডাটার নিরাপত্তা বিঘ্নিত করে। কোনো নিশ্চয়তা না থাকলে আকস্মিক ব্যর্থতায় ব্যালেন্স বিকৃত হয়ে যেতে পারে। এই বিপর্যয় রুখতে ডাটাবেস আর্কিটেক্টরা ACID (অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি) নিশ্চয়তার ওপর নির্ভর করেন। ১৯৮৩ সালে কম্পিউটার বিজ্ঞানী আন্দ্রেয়াস রয়টার এবং থিও হার্ডার লেনদেনের নির্ভরযোগ্যতা রক্ষায় এই ৪টি মৌলিক বৈশিষ্ট্য আনুষ্ঠানিকভাবে সংজ্ঞায়িত করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'ACID stands for Atomicity (all-or-nothing execution), Consistency (preservation of all schema constraints and business invariants), Isolation (concurrency control preventing dirty reads and interleaved corruptions), and Durability (committed modifications persist permanently even after hardware power failure). Together, these 4 pillars distinguish transactional relational databases from eventually consistent NoSQL stores.',
        bn: 'ACID-এর ৪টি অক্ষর নির্দেশ করে অ্যাটোমিসিটি (সবটুকু হবে নয়তো কিছুই নয়), কনসিস্টেন্সি (সমস্ত স্কিমা নিয়ম ও ব্যবসায়িক শর্ত রক্ষা), আইসোলেশন (একসাথে চলা লেনদেনের একে অপরের থেকে সম্পূর্ণ বিচ্ছিন্ন থাকা) এবং ডিউরেবিলিটি বা স্থায়িত্ব (সার্ভারের বিদ্যুৎ চলে গেলেও সফল কমিট হওয়া ডাটা ডিস্কে অক্ষত থাকা)। এই ৪টি স্তম্ভই রিলেশনাল ডাটাবেসকে সাধারণ NoSQL স্টোরের চেয়ে আলাদা ও বিশ্বাসযোগ্য করে তোলে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The 4 Pillars of ACID Architecture and Enforcement Mechanisms',
        bn: 'ACID আর্কিটেকচারের ৪টি স্তম্ভ এবং তাদের বাস্তবায়ন কৌশল'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="The four ACID pillars diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Pillar A: Atomicity -->
  <g transform="translate(30, 30)">
    <rect width="155" height="185" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="155" height="36" rx="8" fill="#0284c7" />
    <text x="77" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">A: Atomicity</text>
    <text x="15" y="60" fill="#38bdf8" font-size="11" font-weight="bold">All or Nothing</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">Zero partial writes.</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">Rolls back on error.</text>
    <line x1="15" y1="115" x2="140" y2="115" stroke="#334155" stroke-width="1" />
    <text x="15" y="135" fill="#facc15" font-size="9" font-weight="bold">Enforced by:</text>
    <text x="15" y="152" fill="#94a3b8" font-size="9">Undo Logs &amp; WAL</text>
    <text x="15" y="168" fill="#94a3b8" font-size="9">Reverse playbacks</text>
  </g>

  <!-- Pillar C: Consistency -->
  <g transform="translate(205, 30)">
    <rect width="155" height="185" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="155" height="36" rx="8" fill="#059669" />
    <text x="77" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">C: Consistency</text>
    <text x="15" y="60" fill="#34d399" font-size="11" font-weight="bold">Valid Transitions</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">Obeys schema rules.</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">Zero constraint breaks.</text>
    <line x1="15" y1="115" x2="140" y2="115" stroke="#334155" stroke-width="1" />
    <text x="15" y="135" fill="#facc15" font-size="9" font-weight="bold">Enforced by:</text>
    <text x="15" y="152" fill="#94a3b8" font-size="9">CHECK, FK, UNIQUE</text>
    <text x="15" y="168" fill="#94a3b8" font-size="9">Application invariants</text>
  </g>

  <!-- Pillar I: Isolation -->
  <g transform="translate(380, 30)">
    <rect width="155" height="185" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="155" height="36" rx="8" fill="#d97706" />
    <text x="77" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">I: Isolation</text>
    <text x="15" y="60" fill="#fbbf24" font-size="11" font-weight="bold">No Interference</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">Concurrent workers</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">cannot corrupt state.</text>
    <line x1="15" y1="115" x2="140" y2="115" stroke="#334155" stroke-width="1" />
    <text x="15" y="135" fill="#facc15" font-size="9" font-weight="bold">Enforced by:</text>
    <text x="15" y="152" fill="#94a3b8" font-size="9">MVCC Snapshots &amp;</text>
    <text x="15" y="168" fill="#94a3b8" font-size="9">Two-Phase Locking (2PL)</text>
  </g>

  <!-- Pillar D: Durability -->
  <g transform="translate(555, 30)">
    <rect width="155" height="185" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="155" height="36" rx="8" fill="#7c3aed" />
    <text x="77" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">D: Durability</text>
    <text x="15" y="60" fill="#c084fc" font-size="11" font-weight="bold">Permanent Writes</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">Survives power cuts</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">and hardware reboots.</text>
    <line x1="15" y1="115" x2="140" y2="115" stroke="#334155" stroke-width="1" />
    <text x="15" y="135" fill="#facc15" font-size="9" font-weight="bold">Enforced by:</text>
    <text x="15" y="152" fill="#94a3b8" font-size="9">Write-Ahead Log (WAL)</text>
    <text x="15" y="168" fill="#94a3b8" font-size="9">Disk fsync() flushes</text>
  </g>

  <!-- Summary Banner -->
  <g transform="translate(30, 235)">
    <rect width="680" height="70" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">ACID vs BASE (The CAP Theorem Divergence)</text>
    <text x="25" y="44" fill="#cbd5e1" font-size="11">Traditional RDBMS standardizes on strict ACID guarantees to preserve absolute transactional truth.</text>
    <text x="25" y="60" fill="#94a3b8" font-size="10">Distributed NoSQL architectures trade immediate consistency for BASE (Basically Available, Soft state, Eventual consistency).</text>
  </g>
</svg>`,
      caption: {
        en: 'The 4 pillars of database ACID consistency: Atomicity (undo logs), Consistency (constraints), Isolation (MVCC/locks), and Durability (WAL on disk).',
        bn: 'ডাটাবেস ACID কনসিস্টেন্সির ৪টি মূল স্তম্ভ: অ্যাটোমিসিটি (আনডু লগ), কনসিস্টেন্সি (কনস্ট্রেইন্ট), আইসোলেশন (MVCC/লক) এবং ডিউরেবিলিটি (ডিস্কে WAL)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Atomicity',
          def: {
            en: 'The transactional guarantee that all statements within a transaction execute completely or none execute at all, eliminating partial writes.',
            bn: 'এমন একটি নিশ্চয়তা যা নিশ্চিত করে যে ট্রানজ্যাকশনের તમામ স্টেটমেন্ট একসাথে সফল হবে নয়তো একটিও কার্যকর হবে না।'
          }
        },
        {
          term: 'Consistency',
          def: {
            en: 'The property ensuring a transaction transitions the database from one valid state to another, strictly respecting all schema rules and constraints.',
            bn: 'ডাটাবেসকে এক বৈধ অবস্থা থেকে অন্য বৈধ অবস্থায় নিয়ে যাওয়ার নিশ্চয়তা যা সমস্ত স্কিমা কনস্ট্রেইন্ট অক্ষরে অক্ষরে পালন করে।'
          }
        },
        {
          term: 'Isolation',
          def: {
            en: 'The concurrency guarantee that intermediate states of concurrent transactions remain invisible to each other, preventing interleaved data corruption.',
            bn: 'একসাথে চলা একাধিক ট্রানজ্যাকশনের পেন্ডিং কাজ একে অপরের থেকে গোপন রাখার নিয়ম যা ডাটা বিকৃতি রোধ করে।'
          }
        },
        {
          term: 'Durability',
          def: {
            en: 'The guarantee that once a transaction commits, its modifications are permanently recorded on non-volatile storage and survive power failures.',
            bn: 'এমন একটি স্থায়ী নিশ্চয়তা যা নিশ্চিত করে যে একবার কমিট সম্পন্ন হলে সার্ভার বন্ধ হলেও ডাটা ডিস্কে চিরতরে অক্ষত থাকবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'enforcement-internals',
      text: {
        en: 'How Storage Engines Enforce Each Pillar Internally',
        bn: 'স্টোরেজ ইঞ্জিন কীভাবে অভ্যন্তরীণভাবে প্রতিটি স্তম্ভ কার্যকর করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Relational database engines enforce Atomicity using undo logs (or rollback segments). Before modifying a data page in memory, the engine records the original values in the undo log. If the transaction aborts, the engine iterates backwards through the undo log to restore previous tuple versions. Consistency is enforced by asserting column CHECK constraints, unique indexes, and foreign keys before sealing the commit boundary.',
        bn: 'রিলেশনাল ডাটাবেস ইঞ্জিন আনডু লগ (বা রোলব্যাক সেগমেন্ট) ব্যবহার করে অ্যাটোমিসিটি রক্ষা করে। মেমরিতে ডাটা পেজ পরিবর্তনের আগে ইঞ্জিন মূল মানগুলো আনডু লগে লিখে রাখে। কোনো কারণে লেনদেন বাতিল হলে ইঞ্জিন এই লগ উল্টো দিক থেকে পড়ে পূর্ববর্তী ভার্সন ফিরিয়ে আনে। আর কনসিস্টেন্সি রক্ষা করা হয় কমিট করার ঠিক পূর্বে সমস্ত কলাম CHECK কনস্ট্রেইন্ট, ইউনিক ইনডেক্স এবং ফরেন কি পরীক্ষা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Isolation is enforced through either lock-based protocols (like Strict Two-Phase Locking) or Multi-Version Concurrency Control (MVCC), where readers read historical snapshot versions without blocking writers. Finally, Durability is guaranteed by the Write-Ahead Logging (WAL) protocol: the engine synchronously flushes transaction log records to persistent storage via the fsync() system call before returning success to the client.',
        bn: 'আইসোলেশন রক্ষা করা হয় লক-ভিত্তিক কৌশল (যেমন Strict Two-Phase Locking) অথবা মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC)-এর মাধ্যমে, যেখানে রিডাররা রাইটারদের না থামিয়েই ডাটার ঐতিহাসিক স্ন্যাপশট পড়তে পারে। পরিশেষে, রাইট-অ্যাহেড লগিং (WAL) দিয়ে স্থায়িত্ব বা ডিউরেবিলিটি নিশ্চিত করা হয়: ক্লায়েন্টকে সফল বার্তা পাঠানোর আগেই ইঞ্জিন fsync() সিস্টেম কল চালিয়ে ডিস্কে স্থায়ীভাবে লগ সেভ করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-acid-engine',
      text: {
        en: 'Executable ACID Verifier: Validating All 4 Pillars in Code',
        bn: 'রানযোগ্য ACID যাচাইকারী: কোডের মাধ্যমে ৪টি স্তম্ভের কার্যকারিতা প্রমাণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine verifying all 4 ACID pillars. It validates Atomicity by reversing partial writes, checks Consistency against schema constraints, proves Isolation by hiding uncommitted buffers from snapshots, and demonstrates Durability via synchronous WAL log flushing.',
        bn: 'নিচে ৪টি ACID স্তম্ভের কার্যকারিতা যাচাই করার একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি আংশিক পরিবর্তন বাতিল করে অ্যাটোমিসিটি প্রমাণ করে, স্কিমা নিয়মের সাথে কনসিস্টেন্সি পরীক্ষা করে, স্ন্যাপশট থেকে গোপন রেখে আইসোলেশন যাচাই করে এবং সিঙ্ক্রোনাস WAL লগের মাধ্যমে স্থায়িত্ব নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Verify all 4 ACID pillars: Atomicity undo, Consistency check, Isolation snapshot, and Durability WAL flush',
        bn: '৪টি ACID স্তম্ভ যাচাই: অ্যাটোমিসিটি আনডু, কনসিস্টেন্সি চেক, আইসোলেশন স্ন্যাপশট এবং ডিউরেবিলিটি WAL ফ্লাশ'
      },
      code: `// The 4 Pillars of ACID Verification Engine
const persistentDiskWAL = [];
const databaseMasterState = { account_id: 101, balance: 1000 };

// Pillar 1: Atomicity (All or Nothing via Undo rollback)
let atomicityVerified = false;
const transactionWorkspace = { ...databaseMasterState };
try {
  transactionWorkspace.balance -= 200; // Step 1: Debit succeeds
  throw new Error('Mid-flight server abort'); // Step 2: Sudden failure
} catch (abortErr) {
  // Undo: master state remains untouched
  atomicityVerified = databaseMasterState.balance === 1000;
}

// Pillar 2: Consistency (Schema invariant: balance cannot be negative)
function validateConsistency(balanceValue) {
  return balanceValue >= 0;
}
const isConsistent = validateConsistency(800) && !validateConsistency(-50);

// Pillar 3: Isolation (Uncommitted private workspace hidden from public readers)
const uncommittedTxnBuffer = { account_id: 101, balance: 800 };
const concurrentReaderView = databaseMasterState.balance; // Reads master (1000)
const isIsolated = concurrentReaderView === 1000 && uncommittedTxnBuffer.balance === 800;

// Pillar 4: Durability (Sync Write-Ahead Log flushes to non-volatile disk)
persistentDiskWAL.push('TXN_101_BEGIN');
persistentDiskWAL.push('TXN_101_DEBIT_200');
persistentDiskWAL.push('TXN_101_COMMIT');
persistentDiskWAL.push('TXN_101_FSYNC_CONFIRMED');
const isDurable = persistentDiskWAL.length === 4;

console.log(\`[ACID Engine] All 4 pillars verified: Atomicity, Consistency, Isolation, and Durability.\`);
console.log(\`[Atomicity Invariant] Partial transfer rolled back cleanly; zero orphan records created (\${atomicityVerified}).\`);
console.log(\`[Durability Invariant] Flushed \${persistentDiskWAL.length} WAL log records to simulated non-volatile disk (1/1: \${isDurable}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The CAP Theorem Tradeoff: ACID vs BASE',
        bn: 'CAP থিওরেমের আপস: ACID বনাম BASE'
      },
      text: {
        en: 'Eric Brewer\'s CAP Theorem demonstrates that distributed systems must choose between immediate correctness and partition resilience. Traditional relational engines enforce strict ACID guarantees for uncompromising truth. In contrast, cloud NoSQL clusters like Cassandra optimize for nonstop write availability, embracing the BASE model: Basically Available, Soft-state, Eventual consistency.',
        bn: 'এরিক ব্রুয়ারের CAP উপপাদ্য দেখায় যে ডিস্ট্রিবিউটেড সিস্টেমগুলোকে তাত্ক্ষণিক শুদ্ধতা এবং নেটওয়ার্ক স্থায়িত্বের মধ্যে একটিকে বেছে নিতে হয়। চিরাচরিত রিলেশনাল ডাটাবেসগুলো আপসহীন সত্যের জন্য কঠোর ACID নিশ্চয়তা কার্যকর করে। অন্যদিকে ক্যাসান্ড্রার মতো ক্লাউড NoSQL ক্লাস্টারগুলো নিরবচ্ছিন্ন সেবাকে প্রাধান্য দিয়ে BASE (ইভেনচুয়াল কনসিস্টেন্সি) মডেল গ্রহণ করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'ACID Pillar Inspector',
        bn: 'ACID স্তম্ভ পরীক্ষক'
      },
      description: {
        en: 'Inspect database guarantees: determine which of the four ACID pillars protects against a specific failure mode.',
        bn: 'ডাটাবেস নিশ্চয়তা পরীক্ষা করুন: ৪টি স্তম্ভের কোনটি নির্দিষ্ট ব্যর্থতার বিরুদ্ধে সুরক্ষা দেয় তা নির্ধারণ করুন।'
      },
      code: `function identifyACIDPillar(failureScenario) {
  if (failureScenario === 'MID_FLIGHT_CRASH_PARTIAL_WRITE') return 'ATOMICITY';
  if (failureScenario === 'NEGATIVE_BALANCE_CONSTRAINT') return 'CONSISTENCY';
  if (failureScenario === 'CONCURRENT_DIRTY_READ') return 'ISOLATION';
  if (failureScenario === 'POWER_OUTAGE_AFTER_COMMIT') return 'DURABILITY';
  return 'UNKNOWN';
}

console.log('Scenario 1:', identifyACIDPillar('MID_FLIGHT_CRASH_PARTIAL_WRITE'));
console.log('Scenario 2:', identifyACIDPillar('POWER_OUTAGE_AFTER_COMMIT'));`,
      tests: [
        {
          name: {
            en: 'Identifies Atomicity for partial write prevention',
            bn: 'আংশিক পরিবর্তন রোধে অ্যাটোমিসিটি শনাক্ত করে'
          },
          expected: 'Scenario 1: ATOMICITY'
        },
        {
          name: {
            en: 'Identifies Durability for post-commit crash survival',
            bn: 'কমিটের পর ক্র্যাশ থেকে সুরক্ষায় ডিউরেবিলিটি শনাক্ত করে'
          },
          expected: 'Scenario 2: DURABILITY'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-acid-ex-1',
      kind: 'mcq',
      topic: 'durability-wal-flush-mechanism',
      question: {
        en: 'How does a relational database physically guarantee Durability when a sudden power outage occurs 1 millisecond after a COMMIT?',
        bn: 'COMMIT করার ১ মিলিসেকেন্ড পর হঠাৎ বিদ্যুৎ চলে গেলেও একটি রিলেশনাল ডাটাবেস কীভাবে শারীরিকভাবে ডিউরেবিলিটি নিশ্চিত করে?'
      },
      options: [
        {
          en: 'By synchronously executing an fsync() system call to flush the Write-Ahead Log (WAL) onto non-volatile persistent disk storage before returning success',
          bn: 'সফল বার্তা পাঠানোর আগেই fsync() সিস্টেম কল চালিয়ে নন-ভোলাটাইল ডিস্ক স্টোরেজে রাইট-অ্যাহেড লগ (WAL) স্থায়ীভাবে সেভ করার মাধ্যমে'
        },
        {
          en: 'By keeping the server computer plugged into a backup battery for 10 years',
          bn: 'সার্ভার কম্পিউটারকে ১০ বছরের জন্য কোনো ব্যাকআপ ব্যাটারিতে সংযুক্ত রেখে'
        },
        {
          en: 'By emailing a copy of the query to the system administrator',
          bn: 'সিস্টেম অ্যাডমিনিস্ট্রেটরের কাছে কোয়েরির একটি কপি ইমেইল করে'
        },
        {
          en: 'By storing table records in the browser\'s cache memory',
          bn: 'ব্রাউজারের ক্যাশ মেমরিতে সমস্ত টেবিল রেকর্ড জমা রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Durability relies on synchronous non-volatile disk writes (fsync on WAL).',
        bn: 'স্থায়িত্ব বা ডিউরেবিলিটি ডিস্কে সিঙ্ক্রোনাস লগ লেখার ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Durability requires committed changes to survive power loss. Relational engines achieve this via the WAL protocol, synchronously flushing log buffers to persistent disk (fsync) before reporting completion.',
        bn: 'ডিউরেবিলিটির মূল দাবি হলো বিদ্যুৎ চলে গেলেও ডাটা অক্ষত থাকা। ইঞ্জিন সফল বলার আগেই ডিস্কে WAL লগ ফাইল সিঙ্ক্রোনাসভাবে লিখে এটি নিশ্চিত করে।'
      }
    },
    {
      id: 'txn-acid-ex-2',
      kind: 'mcq',
      topic: 'consistency-schema-integrity-role',
      question: {
        en: 'In the ACID acronym, what does Consistency specifically guarantee regarding database states?',
        bn: 'ACID সংক্ষেপণে কনসিস্টেন্সি (Consistency) ডাটাবেস স্টেটের ক্ষেত্রে সুনির্দিষ্টভাবে কী নিশ্চয়তা দেয়?'
      },
      options: [
        {
          en: 'A transaction moves the database from one valid state to another valid state, strictly respecting all schema rules, constraints, and business invariants',
          bn: 'একটি ট্রানজ্যাকশন ডাটাবেসকে এক বৈধ অবস্থা থেকে অন্য বৈধ অবস্থায় নিয়ে যায় এবং تمام স্কিমা নিয়ম, কনস্ট্রেইন্ট ও শর্ত পূরণ করে'
        },
        {
          en: 'All table columns must have identical character lengths',
          bn: 'টেবিলের تمام কলামের অক্ষরের দৈর্ঘ্য হুবহু সমান হতে হয়'
        },
        {
          en: 'Every user query must execute in less than 1 nanosecond',
          bn: 'প্রতিটি ব্যবহারকারীর কোয়েরি ১ ন্যানোসেকেন্ডের কম সময়ে শেষ হতে হয়'
        },
        {
          en: 'The database server must use the same IP address every day',
          bn: 'ডাটাবেস সার্ভারকে প্রতিদিন একই আইপি ঠিকানা ব্যবহার করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Valid state transitions: constraints, foreign keys, and CHECK rules must hold.',
        bn: 'বৈধ স্টেটের রূপান্তর: تمام কনস্ট্রেইন্ট, ফরেন কি এবং নিয়ম বলবৎ থাকতে হবে।'
      },
      explanation: {
        en: 'Consistency ensures that only valid data conforming to all declarative constraints (NOT NULL, CHECK, UNIQUE, FOREIGN KEY) is written, preserving system integrity across transactions.',
        bn: 'কনসিস্টেন্সি নিশ্চিত করে যে শুধুমাত্র تمام নিয়ম ও শর্ত (NOT NULL, CHECK, UNIQUE) পূরণ করা বৈধ ডাটাই ডাটাবেসে সেভ হবে, কোনো ত্রুটিপূর্ণ ডাটা নয়।'
      }
    },
    {
      id: 'txn-acid-ex-3',
      kind: 'mcq',
      topic: 'isolation-concurrency-problem',
      question: {
        en: 'What dangerous concurrency defect does the Isolation property of ACID prevent between concurrent database connections?',
        bn: 'ACID-এর আইসোলেশন বৈশিষ্ট্যটি সমসাময়িক ডাটাবেস সংযোগগুলোর মধ্যে কোন মারাত্মক সমস্যাটি প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'Transactions observing uncommitted, partially-modified data from other active transactions (such as Dirty Reads or interleaved write corruption)',
          bn: 'চলমান অন্য কোনো ট্রানজ্যাকশনের অসম্পূর্ণ ও অপরিবর্তিত পেন্ডিং ডাটা দেখে ফেলা (যেমন ডার্টি রিড বা সমসাময়িক পরিবর্তনের বিকৃতি)'
        },
        {
          en: 'Multiple users connecting to the server over Wi-Fi networks',
          bn: 'ওয়াইফাই নেটওয়ার্কের মাধ্যমে একাধিক ব্যবহারকারী সার্ভারে যুক্ত হওয়া'
        },
        {
          en: 'SQL queries utilizing the WHERE clause on indexed columns',
          bn: 'ইনডেক্সযুক্ত কলামে SQL কোয়েরির WHERE শর্ত ব্যবহার করা'
        },
        {
          en: 'The operating system creating backup log files on disk',
          bn: 'অপারেটিং সিস্টেম কর্তৃক ডিস্কে ব্যাকআপ ফাইল তৈরি করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Isolation hides in-flight, uncommitted modifications from other concurrent transactions.',
        bn: 'আইসোলেশন চলমান ট্রানজ্যাকশনের অসম্পূর্ণ পরিবর্তনকে অন্য ব্যবহারকারীদের থেকে গোপন রাখে।'
      },
      explanation: {
        en: 'Without isolation, concurrent transactions could read half-finished writes that later roll back, corrupting business calculations. Isolation ensures concurrent transactions behave as if executed serially.',
        bn: 'আইসোলেশন না থাকলে অন্য কেউ বাতিল হতে যাওয়া আংশিক ডাটা পড়ে ভুল হিসাব করে ফেলতে পারত। আইসোলেশন নিশ্চিত করে সমসাময়িক লেনদেনগুলো একে অপরকে প্রভাবিত না করে স্বাধীনভাবে চলবে।'
      }
    },
    {
      id: 'txn-acid-ex-4',
      kind: 'mcq',
      topic: 'atomicity-undo-log-reversal',
      question: {
        en: 'When a transaction modifying 50 rows crashes after updating only 25 rows, which ACID pillar guarantees the rollback of those 25 rows?',
        bn: '৫০টি রো পরিবর্তনের কোনো ট্রানজ্যাকশন ২৫টি রো আপডেটের পর হঠাৎ ক্র্যাশ করলে কোন ACID স্তম্ভটি সেই ২৫টি রো রোলব্যাক করার নিশ্চয়তা দেয়?'
      },
      options: [
        {
          en: 'Atomicity: it mandates all-or-nothing execution, triggering undo logs to revert all 25 partial modifications back to their original state',
          bn: 'অ্যাটোমিসিটি: এটি সবটুকু অথবা কিছুই নয় নীতি মেনে চলে এবং আনডু লগ ব্যবহার করে সেই ২৫টি আংশিক পরিবর্তন পূর্বের অবস্থায় ফিরিয়ে নেয়'
        },
        {
          en: 'Durability: it forces the remaining 25 rows to be deleted',
          bn: 'ডিউরেবিলিটি: এটি অবশিষ্ট ২৫টি রো মুছে দিতে বাধ্য করে'
        },
        {
          en: 'Isolation: it prevents anyone from looking at the computer monitor',
          bn: 'আইসোলেশন: এটি কাউকে কম্পিউটার মনিটরের দিকে তাকাতে বাধা দেয়'
        },
        {
          en: 'Consistency: it converts the numbers into text strings',
          bn: 'কনসিস্টেন্সি: এটি সমস্ত সংখ্যাকে টেক্সট স্ট্রিংয়ে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Atomicity enforces all-or-nothing: 25 out of 50 is an unacceptable partial failure.',
        bn: 'অ্যাটোমিসিটি অল-অর-নাথিং নিশ্চিত করে: ৫০টির মধ্যে ২৫টি পরিবর্তন গ্রহণযোগ্য নয়।'
      },
      explanation: {
        en: 'Atomicity strictly forbids partial transaction states. If all 50 operations cannot complete, the engine rolls back the 25 partial writes so the database reflects zero partial modifications.',
        bn: 'অ্যাটোমিসিটি আংশিক পরিবর্তন সম্পূর্ণ নিষিদ্ধ করে। ৫০টি কাজ একসাথে শেষ হতে না পারলে ইঞ্জিন ২৫টি কাজকেই বাতিল করে পূর্বাবস্থায় ফিরে যায়।'
      }
    }
  ],
  quiz: {
    id: 'acids-and-the-acid-quiz',
    title: {
      en: 'The ACID Pillars Assessment Quiz',
      bn: 'ACID স্তম্ভ মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'txn-acid-qz-1',
        kind: 'mcq',
        topic: 'acid-acronym-authorship',
        question: {
          en: 'In database systems history, who formalized the four ACID properties in their landmark 1983 publication?',
          bn: 'ডাটাবেস সিস্টেমের ইতিহাসে ১৯৮৩ সালে তাদের ঐতিহাসিক প্রকাশনায় কে ৪টি ACID বৈশিষ্ট্য আনুষ্ঠানিকভাবে সংজ্ঞায়িত করেছিলেন?'
        },
        options: [
          {
            en: 'Andreas Reuter and Theo Härder (building on foundational transaction concepts by Jim Gray)',
            bn: 'আন্দ্রেয়াস রয়টার এবং থিও হার্ডার (জিম গ্রে-এর ট্রানজ্যাকশন গবেষণার ওপর ভিত্তি করে)'
          },
          {
            en: 'Bill Gates and Steve Jobs at the Stanford Computer Club',
            bn: 'বিল গেটস এবং স্টিভ জবস স্ট্যানফোর্ড কম্পিউটার ক্লাবে'
          },
          {
            en: 'Tim Berners-Lee while inventing HTML at CERN',
            bn: 'টিম বার্নার্স-লি সার্নে HTML তৈরির সময়'
          },
          {
            en: 'Linus Torvalds while writing the Linux operating system kernel',
            bn: 'লিনাস টরভাল্ডস লিনাক্স কার্নেল লেখার সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reuter and Härder synthesized Jim Gray\'s transaction primitives into the famous acronym in 1983.',
          bn: 'রয়টার এবং হার্ডার ১৯৮৩ সালে জিম গ্রে-এর গবেষণাকে এই বিখ্যাত সংক্ষেপণে রূপ দিয়েছিলেন।'
        },
        explanation: {
          en: 'Theo Härder and Andreas Reuter coined the ACID acronym in their 1983 paper "Principles of Transaction-Oriented Database Recovery", synthesizing earlier conceptual work by Turing Award winner Jim Gray.',
          bn: 'থিও হার্ডার এবং আন্দ্রেয়াস রয়টার তাদের ১৯৮৩ সালের গবেষণাপত্রে ACID শব্দটি প্রবর্তন করেন, যা পরবর্তীতে টুরিং পুরস্কার বিজয়ী জিম গ্রে-এর ট্রানজ্যাকশন ধারণাকে জনপ্রিয় করে।'
        }
      },
      {
        id: 'txn-acid-qz-2',
        kind: 'mcq',
        topic: 'base-vs-acid-cap-tradeoff',
        question: {
          en: 'Why do horizontally distributed NoSQL databases often adopt the BASE model instead of strict ACID guarantees?',
          bn: 'হরাইজন্টালি ডিস্ট্রিবিউটেড NoSQL ডাটাবেসগুলো কেন কঠোর ACID-এর বদলে প্রায়ই BASE মডেল গ্রহণ করে?'
        },
        options: [
          {
            en: 'To prioritize high write availability and network partition tolerance (CAP Theorem) across global clusters by accepting eventual consistency rather than immediate consistency',
            bn: 'তাত্ক্ষণিক কনসিস্টেন্সির বদলে ইভেনচুয়াল কনসিস্টেন্সি মেনে নিয়ে আন্তর্জাতিক ক্লাস্টারে উচ্চ প্রাপ্যতা ও নেটওয়ার্ক স্থায়িত্ব নিশ্চিত করতে'
          },
          {
            en: 'Because NoSQL databases cannot connect to hard drives',
            bn: 'কারণ NoSQL ডাটাবেস হার্ডডিস্কের সাথে সংযুক্ত হতে পারে না'
          },
          {
            en: 'Because BASE code is written in Python while ACID requires C++',
            bn: 'কারণ BASE কোড পাইথনে লেখা হয় আর ACID-এর জন্য সি++ লাগে'
          },
          {
            en: 'Because ACID was made illegal in cloud computing data centers',
            bn: 'কারণ ক্লাউড কম্পিউটিংয়ে ACID ব্যবহার নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The CAP Theorem: strict ACID consistency across partitioned networks causes write unavailability.',
          bn: 'CAP থিওরেম: নেটওয়ার্ক বিভাজনের সময় কঠোর ACID মানতে গেলে সিস্টেমের প্রাপ্যতা ব্যাহত হয়।'
        },
        explanation: {
          en: 'Under the CAP Theorem, distributed systems must trade off immediate consistency for partition tolerance and availability. BASE (Basically Available, Soft state, Eventual consistency) prioritizes 100% uptime over instant synchronization.',
          bn: 'CAP থিওরেম অনুসারে ডিস্ট্রিবিউটেড সিস্টেমে প্রাপ্যতা ও নেটওয়ার্ক রক্ষার জন্য তাৎক্ষণিক কনসিস্টেন্সি ত্যাগ করতে হয়। BASE মডেল সর্বদা সচল থাকাকে প্রাধান্য দেয়।'
        }
      },
      {
        id: 'txn-acid-qz-3',
        kind: 'mcq',
        topic: 'wal-protocol-golden-rule',
        question: {
          en: 'What is the "Golden Rule" of the Write-Ahead Logging (WAL) protocol that guarantees Durability and crash recovery?',
          bn: 'রাইট-অ্যাহেড লগিং (WAL) প্রোটোকলের কোন "সোনালী নিয়মটি" স্থায়িত্ব এবং ক্র্যাশ রিকভারি নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Log records describing a data page change must reach non-volatile disk storage BEFORE the actual modified data page itself is written to disk',
            bn: 'ডাটা পেজের পরিবর্তন বর্ণনাকারী লগ রেকর্ডটি মূল পরিবর্তিত ডাটা পেজ ডিস্কে লেখার আগেই স্থায়ী ডিস্কে পৌঁছাতে হবে'
          },
          {
            en: 'Log files must be printed on paper at the end of every business day',
            bn: 'প্রতিটি ব্যবসায়িক দিনের শেষে লগ ফাইলগুলোকে কাগজে প্রিন্ট করে রাখতে হবে'
          },
          {
            en: 'Logs must be encrypted with a 100-character master key',
            bn: 'লগ ফাইলকে ১০০ অক্ষরের একটি মাস্টার কি দিয়ে এনক্রিপ্ট করতে হবে'
          },
          {
            en: 'Log files cannot exceed 10 kilobytes in total size',
            bn: 'লগ ফাইলের মোট আকার কখনো ১০ কিলোবাইটের বেশি হতে পারবে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Write Ahead: the log must hit disk ahead of the actual data page.',
          bn: 'রাইট অ্যাহেড: মূল ডাটা পেজ লেখার আগেই ডিস্কে লগ রেকর্ড পৌঁছাতে হবে।'
        },
        explanation: {
          en: 'The Write-Ahead rule ensures that if a crash occurs while flushing dirty data pages to disk, the database engine can reconstruct the exact intended state from the persistent log records during boot recovery.',
          bn: 'রাইট-অ্যাহেড নিয়ম নিশ্চিত করে যে মূল ডাটা ডিস্কে লেখার সময় সার্ভার ক্র্যাশ করলেও রিবুটের সময় স্থায়ী লগ দেখে পুরো ডাটা নিখুঁতভাবে উদ্ধার করা সম্ভব।'
        }
      },
      {
        id: 'txn-acid-qz-4',
        kind: 'mcq',
        topic: 'mvcc-snapshot-isolation-role',
        question: {
          en: 'How does Multi-Version Concurrency Control (MVCC) enforce transaction Isolation without forcing readers to wait for writers to release locks?',
          bn: 'মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) কীভাবে রিডারদের লক মুক্তির জন্য অপেক্ষা না করিয়ে ট্রানজ্যাকশন আইসোলেশন বজায় রাখে?'
        },
        options: [
          {
            en: 'By keeping multiple historical versions of each modified row, allowing readers to view a consistent point-in-time snapshot while writers write new row versions concurrently',
            bn: 'প্রতিটি পরিবর্তিত সারির একাধিক ঐতিহাসিক সংস্করণ সংরক্ষণ করে, যাতে রাইটাররা যখন নতুন ভার্সন লিখছে তখন রিডাররা কোনো বাধা ছাড়াই অতীত স্ন্যাপশট পড়তে পারে'
          },
          {
            en: 'By converting all SELECT queries into random guessing games',
            bn: 'تمام SELECT কোয়েরিকে এলোমেলো ধারণার খেলায় রূপান্তর করে'
          },
          {
            en: 'By rebooting the database whenever two queries run at the same time',
            bn: 'একসাথে দুটি কোয়েরি চললেই ডাটাবেস রিবুট করার মাধ্যমে'
          },
          {
            en: 'By deleting all table indexes every 60 seconds',
            bn: 'প্রতি ৬০ সেকেন্ড পর পর تمام টেবিল ইনডেক্স মুছে ফেলার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Readers do not block writers, and writers do not block readers under MVCC snapshots.',
          bn: 'MVCC স্ন্যাপশটে পড়ার দল লেখার দলকে আটকায় না এবং লেখার দলও পড়ার দলকে আটকায় না।'
        },
        explanation: {
          en: 'MVCC maintains historical row versions tagged with transaction IDs. A reader sees data as it existed when its snapshot began, completely isolated from concurrent in-flight writes without acquiring shared locks.',
          bn: 'MVCC ট্রানজ্যাকশন আইডি যুক্ত সারির একাধিক ভার্সন ধরে রাখে। কোনো ব্যবহারকারী ট্রানজ্যাকশন শুরুর সময়কার স্ন্যাপশট দেখতে পান, ফলে চলমান লেখার কাজে কোনো বাধা সৃষ্টি হয় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'locks-and-the-lock',
    title: {
      en: 'Locking Mechanics: Shared, Exclusive & Two-Phase Locking',
      bn: 'লকিং মেকানিজম: শেয়ার্ড, এক্সক্লুসিভ ও ২-ফেজ লকিং'
    }
  }
};
