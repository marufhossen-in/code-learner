import type { Lesson } from '../../../lib/types';

export const TxnsAndTheAcidLesson: Lesson = {
  slug: 'txns-and-the-acid',
  tech: 'db-fundamentals',
  title: {
    en: 'ACID Transactions: Concurrency, Locks & Isolation Levels',
    bn: 'ACID ট্রানজ্যাকশন: কনকারেন্সি, লক ও আইসোলেশন লেভেল'
  },
  summary: {
    en: 'Master database transaction guarantees: Atomicity, Consistency, Isolation, and Durability (ACID), Write-Ahead Logging (WAL), and the 4 ANSI SQL isolation levels defending against dirty and phantom reads.',
    bn: 'ডাটাবেস ট্রানজ্যাকশনের নিশ্চয়তা আয়ত্ত করুন: অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি (ACID), রাইট-অ্যাহেড লগিং (WAL) এবং ডার্টি ও ফ্যান্টম রিড প্রতিরোধকারী ৪টি ANSI SQL আইসোলেশন লেভেল।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'the-four-acid-pillars',
      text: {
        en: 'The Four ACID Pillars: Defending Data Invariants',
        bn: 'ACID-এর ৪টি স্তম্ভ: ডাটা ইনভেরিয়েন্ট সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your application handles real user payments, servers crash, network packets drop, and multiple workers mutate shared records concurrently. Without rigorous transaction guarantees, partial writes would leave your bank accounts debited without crediting the recipient. To solve this, database engines rely on ACID (Atomicity, Consistency, Isolation, and Durability) guarantees: four mathematical invariants that safeguard data state transitions.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন ব্যবহারকারীর আর্থিক লেনদেন পরিচালনা করে, তখন সার্ভার ক্র্যাশ হতে পারে, নেটওয়ার্ক সংযোগ বিচ্ছিন্ন হতে পারে এবং একাধিক কর্মী একসাথে একই ডাটা পরিবর্তন করতে পারে। কঠোর ট্রানজ্যাকশন নিশ্চয়তা না থাকলে কোনো ব্যাংকিং লেনদেনে প্রেরকের একাউন্ট থেকে টাকা কেটে নিলেও প্রাপক তা নাও পেতে পারত। এই বিপর্যয় রুখতে ডাটাবেস ইঞ্জিন ACID (অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন ও ডিউরেবিলিটি) নিশ্চয়তার ওপর নির্ভর করে: ৪টি গাণিতিক স্তম্ভ যা প্রতিটি ডাটা পরিবর্তনকে নিরাপদ রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Atomicity enforces all-or-nothing execution: if any statement in a 5-step transaction fails, the entire transaction aborts and rolls back to its exact initial state. Consistency ensures that every committed transaction transitions the database from one valid schema state to another, strictly honoring all CHECK, UNIQUE, and FOREIGN KEY rules. Isolation guarantees that concurrent transactions execute without viewing intermediate uncommitted changes. Durability ensures that once a COMMIT succeeds, data persists permanently across power outages and crashes via non-volatile Write-Ahead Logs.',
        bn: 'অ্যাটোমিসিটি (Atomicity) সবটুকু সম্পন্ন করা বা কিছুই না করার নীতি কার্যকর করে: ৫-ধাপের কোনো লেনদেনে একটি স্টেটমেন্টও ব্যর্থ হলে পুরো লেনদেন বাতিল হয়ে আগের অবস্থায় ফিরে যায়। কনসিস্টেন্সি (Consistency) নিশ্চিত করে যে প্রতিটি সফল লেনদেন ডাটাবেসকে একটি বৈধ স্কিমা অবস্থা থেকে অন্য বৈধ অবস্থায় নিয়ে যাবে এবং সকল CHECK, UNIQUE ও ফরেন কি নিয়ম মানবে। আইসোলেশন (Isolation) নিশ্চিত করে যে একসাথে চলা একাধিক লেনদেন একে অপরের মাঝপথে থাকা পরিবর্তন দেখতে পাবে না। আর স্থায়িত্ব বা ডিউরেবিলিটি (Durability) নিশ্চিত করে যে একবার COMMIT সফল হলে বিদ্যুৎ চলে গেলেও বা সার্ভার ক্র্যাশ করলেও রাইট-অ্যাহেড লগের (WAL) মাধ্যমে ডাটা চিরতরে সুরক্ষিত থাকবে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The ACID Transaction Engine: Execution and Recovery Pipeline',
        bn: 'ACID ট্রানজ্যাকশন ইঞ্জিন: পরিচালনা ও রিকভারি পাইপলাইন'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="ACID transaction guarantees diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- 4 Pillars Row -->
  <g transform="translate(30, 25)">
    <!-- A -->
    <rect x="0" y="0" width="160" height="175" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="80" cy="30" r="16" fill="#0284c7" />
    <text x="80" y="36" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
    <text x="80" y="66" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Atomicity</text>
    <text x="80" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">All or Nothing</text>
    <rect x="10" y="102" width="140" height="60" rx="4" fill="#0c4a6e" />
    <text x="80" y="120" fill="#7dd3fc" font-size="9" text-anchor="middle">Undo / Rollback Log</text>
    <text x="80" y="136" fill="#ffffff" font-size="9" text-anchor="middle">Aborts restore state</text>
    <text x="80" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">Zero partial writes</text>

    <!-- C -->
    <rect x="173" y="0" width="160" height="175" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <circle cx="253" cy="30" r="16" fill="#059669" />
    <text x="253" y="36" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
    <text x="253" y="66" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Consistency</text>
    <text x="253" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Valid State Shifts</text>
    <rect x="183" y="102" width="140" height="60" rx="4" fill="#064e3b" />
    <text x="253" y="120" fill="#a7f3d0" font-size="9" text-anchor="middle">Schema Rules Guard</text>
    <text x="253" y="136" fill="#ffffff" font-size="9" text-anchor="middle">CHECK, FK, UNIQUE</text>
    <text x="253" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">Invariants held true</text>

    <!-- I -->
    <rect x="346" y="0" width="160" height="175" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
    <circle cx="426" cy="30" r="16" fill="#7c3aed" />
    <text x="426" y="36" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">I</text>
    <text x="426" y="66" fill="#a78bfa" font-size="12" font-weight="bold" text-anchor="middle">Isolation</text>
    <text x="426" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Concurrency Safe</text>
    <rect x="356" y="102" width="140" height="60" rx="4" fill="#4c1d95" />
    <text x="426" y="120" fill="#ddd6fe" font-size="9" text-anchor="middle">MVCC & Row Locks</text>
    <text x="426" y="136" fill="#ffffff" font-size="9" text-anchor="middle">Blocks Dirty Reads</text>
    <text x="426" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">4 Isolation Levels</text>

    <!-- D -->
    <rect x="520" y="0" width="160" height="175" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <circle cx="600" cy="30" r="16" fill="#d97706" />
    <text x="600" y="36" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">D</text>
    <text x="600" y="66" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Durability</text>
    <text x="600" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Crash-Resistant</text>
    <rect x="530" y="102" width="140" height="60" rx="4" fill="#78350f" />
    <text x="600" y="120" fill="#fde68a" font-size="9" text-anchor="middle">Write-Ahead Log (WAL)</text>
    <text x="600" y="136" fill="#ffffff" font-size="9" text-anchor="middle">fsync flushed to SSD</text>
    <text x="600" y="152" fill="#94a3b8" font-size="9" text-anchor="middle">Survives power cut</text>
  </g>

  <!-- Isolation Levels Ladder Banner -->
  <g transform="translate(30, 220)">
    <rect width="680" height="85" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="24" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">The 4 ANSI SQL Isolation Levels (Lowest to Highest Protection)</text>
    <text x="340" y="46" fill="#94a3b8" font-size="11" text-anchor="middle">1. Read Uncommitted  -&gt;  2. Read Committed (Postgres Default)  -&gt;  3. Repeatable Read  -&gt;  4. Serializable</text>
    <text x="340" y="68" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Tradeoff: Higher isolation guarantees total mathematical safety at the cost of concurrency throughput.</text>
  </g>
</svg>`,
      caption: {
        en: 'The ACID architecture: Atomicity protects against partial failures, Consistency defends schema rules, Isolation arbitrates concurrency, and Durability guarantees persistence via WAL.',
        bn: 'ACID আর্কিটেকচার: অ্যাটোমিসিটি আংশিক ব্যর্থতা রোধ করে, কনসিস্টেন্সি স্কিমা নিয়ম রক্ষা করে, আইসোলেশন কনকারেন্সি নিয়ন্ত্রণ করে এবং ডিউরেবিলিটি WAL-এর মাধ্যমে স্থায়িত্ব নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Atomicity',
          def: {
            en: 'The property guaranteeing that a multi-statement transaction executes in its entirety or leaves the database completely unchanged.',
            bn: 'এমন এক বৈশিষ্ট্য যা নিশ্চিত করে একাধিক স্টেটমেন্টের একটি লেনদেন হয় সম্পূর্ণ সফল হবে অথবা ডাটাবেসকে সম্পূর্ণ অপরিবর্তিত রাখবে।'
          }
        },
        {
          term: 'Write-Ahead Logging (WAL)',
          def: {
            en: 'An append-only log on non-volatile disk where changes are flushed before table data pages are modified in memory, enabling crash recovery.',
            bn: 'হার্ডডিস্কে থাকা একটি অ্যাপেন্ড-অনলি লগ যেখানে মূল ডাটা ফাইলে লেখার আগেই পরিবর্তনগুলো স্থায়ীভাবে সেভ করা হয়, যা ক্র্যাশ রিকভারি সম্ভব করে।'
          }
        },
        {
          term: 'Dirty Read',
          def: {
            en: 'A concurrency anomaly where a transaction reads uncommitted, in-flight data written by another concurrent transaction that may later roll back.',
            bn: 'একটি কনকারেন্সি ত্রুটি যেখানে একটি ট্রানজ্যাকশন অন্য একটি চলমান ট্রানজ্যাকশনের সেভ না হওয়া ডাটা পড়ে ফেলে যা পরবর্তীতে রোলব্যাক হতে পারে।'
          }
        },
        {
          term: 'Serializable Isolation',
          def: {
            en: 'The highest SQL isolation level, mathematically guaranteeing that concurrent transactions produce the same state as if run sequentially one by one.',
            bn: 'সর্বোচ্চ SQL আইসোলেশন লেভেল, যা গাণিতিকভাবে নিশ্চিত করে যে একাধিক ট্রানজ্যাকশন একসাথে চললেও তার ফলাফল একে একে ক্রমানুসারে চালানোর সমান হবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'isolation-levels-deep-dive',
      text: {
        en: 'The 4 ANSI SQL Isolation Levels & Concurrency Anomalies',
        bn: '৪টি ANSI SQL আইসোলেশন লেভেল ও কনকারেন্সি অ্যানোমালি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When multiple database connections update the same records simultaneously, race conditions emerge. ANSI SQL defines four standard isolation levels to control concurrency phenomena. Under Read Uncommitted, transactions can read uncommitted dirty data written by other sessions (Dirty Read). If that other session encounters an error and rolls back, the first transaction based its decisions on corrupted phantom data.',
        bn: 'যখন একাধিক ব্যবহারকারী একই সময়ে ডাটাবেসের একই রেকর্ড পরিবর্তন করতে যান, তখন রেস কন্ডিশনের সৃষ্টি হয়। ANSI SQL এই জটিলতা নিয়ন্ত্রণে ৪টি স্ট্যান্ডার্ড আইসোলেশন লেভেল নির্ধারণ করেছে। Read Uncommitted মোডে একটি ট্রানজ্যাকশন অন্য সেশনের সেভ না হওয়া কাঁচা ডাটা পড়ে ফেলতে পারে (Dirty Read)। সেই সেশনে কোনো ত্রুটি ঘটে যদি ডাটা রোলব্যাক হয়, তবে প্রথম ট্রানজ্যাকশনটি একটি অস্তিত্বহীন তথ্যের ওপর ভিত্তি করে সিদ্ধান্ত নিয়ে ফেলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Read Committed (the default in PostgreSQL and Oracle) solves this by ensuring transactions only view committed changes. However, it permits Non-Repeatable Reads: if Transaction A reads a row, and Transaction B updates that row and commits, Transaction A re-reading the row sees different values. Repeatable Read uses Multi-Version Concurrency Control (MVCC) snapshots to ensure that reading a row multiple times within a transaction always returns the exact same snapshot. Finally, Serializable prevents all anomalies, including Write Skew, by aborting conflicting transactions.',
        bn: 'Read Committed (PostgreSQL ও Oracle-এর ডিফল্ট) নিশ্চিত করে যে একটি ট্রানজ্যাকশন কেবল সফলভাবে সেভ হওয়া ডাটাই দেখতে পাবে। তবে এতে নন-রিপিটেবল রিড (Non-Repeatable Read) ঘটতে পারে: ট্রানজ্যাকশন A কোনো রো পড়ার পর ট্রানজ্যাকশন B তা আপডেট করে কমিট করলে, ট্রানজ্যাকশন A পুনরায় সেই রো পড়ে পরিবর্তিত মান দেখতে পায়। Repeatable Read মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) স্ন্যাপশট ব্যবহার করে নিশ্চিত করে যে লেনদেনের ভেতর একাধিকবার পড়লেও একই স্ন্যাপশট দেখা যাবে। আর Serializable কনফ্লিক্ট ধরা পড়লে লেনদেন বাতিল করে রাইট সিউ (Write Skew) সহ সকল অ্যানোমালি প্রতিহত করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-acid-engine',
      text: {
        en: 'Executable ACID Engine: Double-Entry Ledger & Automatic Rollback',
        bn: 'রানযোগ্য ACID ইঞ্জিন: ডাবল-এন্ট্রি লেজার ও স্বয়ংক্রিয় রোলব্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation of an ACID transaction coordinator. It executes a banking ledger transfer of $40 between Alice and Bob, asserts the consistency balance invariant ($150 total), and simulates an overdraw transfer of $1000 that aborts and rolls back automatically without money loss.',
        bn: 'নিচে একটি ACID ট্রানজ্যাকশন সমন্বয়কারীর সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি অ্যালিস ও ববের মধ্যে ৪০ ডলারের ব্যাংকিং লেনদেন পরিচালনা করে, ব্যালেন্স ইনভেরিয়েন্ট (মোট ১৫০ ডলার) নিশ্চিত করে এবং ১০০০ ডলারের একটি অতিরিক্ত উত্তোলনের ব্যর্থ লেনদেনে স্বয়ংক্রিয় রোলব্যাক পরিচালনা করে অর্থ অপচয় রোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Execute double-entry bank transfer with consistency checks and atomic rollback on failure',
        bn: 'ব্যালেন্স যাচাই ও ব্যর্থতায় স্বয়ংক্রিয় রোলব্যাক সহ ডাবল-এন্ট্রি ব্যাংক স্থানান্তর পরিচালনা'
      },
      code: `// In-Memory ACID Transaction Coordinator
class BankLedger {
  constructor() {
    this.accounts = { Alice: 100, Bob: 50 };
  }

  // Execute atomic transfer between two accounts
  transfer(fromAccount, toAccount, transferAmount) {
    // Snapshot state for Atomicity (in-memory Undo Log)
    const stateSnapshot = { ...this.accounts };

    try {
      // Step 1: Check debit constraints
      if (this.accounts[fromAccount] < transferAmount) {
        throw new Error(\`Insufficient funds: \${fromAccount} has $\${this.accounts[fromAccount]}, requested $\${transferAmount}\`);
      }

      // Step 2: Execute double-entry mutation
      this.accounts[fromAccount] -= transferAmount;
      this.accounts[toAccount] += transferAmount;

      // Step 3: Assert Consistency Invariant (Total money must remain exactly $150)
      const currentSystemTotal = Object.values(this.accounts).reduce((sum, bal) => sum + bal, 0);
      if (currentSystemTotal !== 150) {
        throw new Error(\`Consistency violation: Expected $150, calculated $\${currentSystemTotal}\`);
      }

      // Commit successful state
      return { success: true, accounts: { ...this.accounts } };
    } catch (err) {
      // Rollback on any failure (Atomicity guarantee: Zero partial writes)
      this.accounts = stateSnapshot;
      return { success: false, error: err.message, accounts: { ...this.accounts } };
    }
  }
}

const ledger = new BankLedger();

// Test 1: Successful transfer of $40 (Alice -> Bob)
const txn1 = ledger.transfer('Alice', 'Bob', 40);

// Test 2: Illegal transfer of $1000 (Exceeds balance -> Triggers Rollback)
const txn2 = ledger.transfer('Alice', 'Bob', 1000);

console.log(\`[ACID Engine] Transaction 1: transferred $40 from Alice to Bob -> COMMITTED cleanly (Total $150).\`);
console.log(\`[Rollback Experiment] Transaction 2: transfer of $1000 exceeded balance -> ROLLED BACK (1/1: \${!txn2.success}).\`);
console.log(\`[Durability Invariant] Ledger preserved zero-loss state: Alice $\${ledger.accounts.Alice}, Bob $\${ledger.accounts.Bob}.\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Production Practice: Keep Transactions Short and Focused',
        bn: 'প্রোডাকশন সেরা অনুশীলন: ট্রানজ্যাকশন সংক্ষিপ্ত ও সুনির্দিষ্ট রাখুন'
      },
      text: {
        en: 'Never make external HTTP API calls, send emails, or perform heavy file hashing inside an open database transaction block (BEGIN ... COMMIT). Transactions hold row-level exclusive locks in memory. A slow 2-second external network call keeps database locks open, causing connection pool exhaustion and cascading system timeouts across microservices.',
        bn: 'ডাটাবেস ট্রানজ্যাকশন ব্লকের (BEGIN ... COMMIT) ভেতর কখনোই এক্সটার্নাল HTTP এপিআই কল, ইমেইল পাঠানো বা ভারী ফাইল হ্যাশ করার মতো কাজ করবেন না। ট্রানজ্যাকশন চলাকালীন মেমরিতে রো-লেভেল এক্সক্লুসিভ লক সক্রিয় থাকে। একটি ধীরগতির ২-সেকেন্ডের নেটওয়ার্ক কল ডাটাবেস লক ধরে রেখে কানেকশন পুল শেষ করে দেবে এবং অন্যান্য সকল সার্ভিসে টাইমআউট সৃষ্টি করবে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Atomic Transaction Coordinator Simulator',
        bn: 'অ্যাটমিক ট্রানজ্যাকশন সমন্বয়কারী সিমুলেটর'
      },
      description: {
        en: 'Test transaction atomicity: observe how an error rolls back both debit and credit steps to protect consistency.',
        bn: 'ট্রানজ্যাকশন অ্যাটোমিসিটি পরীক্ষা করুন: কোনো ত্রুটিতে কীভাবে ডেবিট ও ক্রেডিট উভয় ধাপ বাতিল হয়ে ডাটার নিরাপত্তা বজায় থাকে তা দেখুন।'
      },
      code: `let senderBalance = 500;
let receiverBalance = 200;

function executeTransfer(amount) {
  const originalSender = senderBalance;
  const originalReceiver = receiverBalance;

  try {
    senderBalance -= amount;
    if (senderBalance < 0) {
      throw new Error('BALANCE_NEGATIVE_ABORT');
    }
    receiverBalance += amount;
    return 'TRANSACTION_COMMITTED';
  } catch (err) {
    // Rollback to original snapshot
    senderBalance = originalSender;
    receiverBalance = originalReceiver;
    return 'TRANSACTION_ROLLED_BACK';
  }
}

console.log('Transfer $100:', executeTransfer(100));
console.log('Balances after commit: Sender =', senderBalance, ', Receiver =', receiverBalance);

console.log('Transfer $900:', executeTransfer(900));
console.log('Balances after rollback: Sender =', senderBalance, ', Receiver =', receiverBalance);`,
      tests: [
        {
          name: {
            en: 'Commits valid transaction within balance limits',
            bn: 'ব্যালেন্স সীমার মধ্যে থাকা সঠিক লেনদেন সফলভাবে কমিট করে'
          },
          expected: 'Transfer $100: TRANSACTION_COMMITTED'
        },
        {
          name: {
            en: 'Rolls back transaction exceeding account balance',
            bn: 'অ্যাকাউন্ট ব্যালেন্সের অতিরিক্ত লেনদেন রোলব্যাক করে'
          },
          expected: 'Transfer $900: TRANSACTION_ROLLED_BACK'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-txn-ex-1',
      kind: 'mcq',
      topic: 'atomicity-guarantee',
      question: {
        en: 'In an ACID database system, what happens if the 4th SQL statement in a 5-statement transaction fails due to a network glitch?',
        bn: 'একটি ACID ডাটাবেস সিস্টেমে ৫টি স্টেটমেন্ট বিশিষ্ট কোনো লেনদেনের ৪র্থ স্টেটমেন্টটি নেটওয়ার্ক ত্রুটিতে ব্যর্থ হলে কী ঘটে?'
      },
      options: [
        {
          en: 'The entire transaction aborts, and all changes from statements 1, 2, and 3 are automatically rolled back, leaving zero partial writes',
          bn: 'সম্পূর্ণ লেনদেনটি বাতিল হয় এবং ১, ২ ও ৩ নম্বর স্টেটমেন্টের সকল পরিবর্তন স্বয়ংক্রিয়ভাবে রোলব্যাক হয়ে যায়, ফলে কোনো আংশিক ডাটা থাকে না'
        },
        {
          en: 'Statements 1, 2, and 3 remain permanently saved, and statement 4 is ignored',
          bn: '১, ২ ও ৩ নম্বর স্টেটমেন্টের পরিবর্তন স্থায়ীভাবে সেভ হয়ে থাকে এবং ৪র্থটি উপেক্ষা করা হয়'
        },
        {
          en: 'The database server crashes and deletes all table files',
          bn: 'ডাটাবেস সার্ভার ক্র্যাশ করে এবং সমস্ত টেবিল ফাইল মুছে ফেলে'
        },
        {
          en: 'The operating system restarts the computer in safe mode',
          bn: 'অপারেটিং সিস্টেম কম্পিউটারটিকে সেফ মোডে রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Atomicity means "all or nothing": incomplete operations are undone.',
        bn: 'অ্যাটোমিসিটি মানে "সবটুকু নয়তো কিছুই নয়": অসম্পূর্ণ কাজগুলো পূর্বের অবস্থায় ফিরিয়ে নেওয়া হয়।'
      },
      explanation: {
        en: 'Atomicity treats a multi-step transaction as a single indivisible unit of work. If any step fails, the undo engine reverses all preceding operations, ensuring the database is never left in a half-finished state.',
        bn: 'অ্যাটোমিসিটি একটি বহু-ধাপের লেনদেনকে একটি অবিভাজ্য একক কাজ হিসেবে বিবেচনা করে। কোনো একটি ধাপ ব্যর্থ হলে আনডু ইঞ্জিন আগের সমস্ত কাজ বাতিল করে দেয়, যাতে ডাটাবেস কখনো আংশিক অসম্পূর্ণ অবস্থায় না থাকে।'
      }
    },
    {
      id: 'db-txn-ex-2',
      kind: 'mcq',
      topic: 'wal-durability-mechanism',
      question: {
        en: 'How does Write-Ahead Logging (WAL) achieve Durability without writing every updated database page directly to disk before committing?',
        bn: 'প্রতিটি আপডেট হওয়া ডাটা পেজ ডিস্কে লেখার আগেই কীভাবে রাইট-অ্যাহেড লগিং (WAL) লেনদেনের স্থায়িত্ব (Durability) নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It writes sequential append-only change records to a dedicated log file flushed to disk (fsync); table data pages can be written to disk lazily in the background',
          bn: 'এটি একটি সুনির্দিষ্ট লগ ফাইলে ক্রমিক অ্যাপেন্ড-অনলি পরিবর্তন লিখে সাথে সাথে ডিস্কে (fsync) সেভ করে; আর মূল টেবিল পেজগুলো পরবর্তীতে অলসভাবে সেভ করা হয়'
        },
        {
          en: 'It sends a copy of the database to an email inbox',
          bn: 'এটি একটি ইমেইল ইনবক্সে ডাটাবেসের একটি কপি পাঠিয়ে দেয়'
        },
        {
          en: 'It stores table data inside CPU cache memory forever',
          bn: 'এটি সিপিইউ ক্যাশ মেমরির ভেতর চিরতরে ডাটা জমা রাখে'
        },
        {
          en: 'It converts database transactions into audio files',
          bn: 'এটি ডাটাবেস ট্রানজ্যাকশনগুলোকে অডিও ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequential append to log is thousands of times faster than random page writes.',
        bn: 'ডিস্কের বিভিন্ন স্থানে এলোমেলো লেখার চেয়ে লগে ক্রমানুসারে অ্যাপেন্ড করা হাজার গুণ দ্রুত।'
      },
      explanation: {
        en: 'Random disk I/O on large tables is slow. WAL appends compact change records sequentially to disk before returning COMMIT. If power is lost, the recovery engine replays the WAL on reboot to restore dirty pages.',
        bn: 'বিশাল টেবিলে ডিস্কের বিভিন্ন স্থানে এলোমেলো লেখা ধীরগতির। WAL কমিট করার আগে দ্রুতগতিতে লগে পরিবর্তনগুলো লিখে নেয়। বিদ্যুৎ চলে গেলে রিস্টার্টের সময় এই লগ রিড করে ডাটাবেস পুনরায় আগের অবস্থানে ফিরে আসে।'
      }
    },
    {
      id: 'db-txn-ex-3',
      kind: 'mcq',
      topic: 'dirty-read-definition',
      question: {
        en: 'What specific concurrency problem is known as a "Dirty Read" in database systems?',
        bn: 'ডাটাবেস সিস্টেমে কোন নির্দিষ্ট কনকারেন্সি ত্রুটিকে "ডার্টি রিড" (Dirty Read) বলা হয়?'
      },
      options: [
        {
          en: 'Transaction A reads data that was modified by Transaction B, but Transaction B has not yet committed and might still roll back',
          bn: 'ট্রানজ্যাকশন A এমন ডাটা পড়ে ফেলে যা ট্রানজ্যাকশন B পরিবর্তন করেছে কিন্তু এখনও কমিট করেনি এবং পরবর্তীতে তা বাতিলও হতে পারে'
        },
        {
          en: 'A user types invalid characters into a form field',
          bn: 'ব্যবহারকারী কোনো ফর্ম ফিল্ডে ভুল অক্ষর টাইপ করে'
        },
        {
          en: 'The database server screen becomes covered in dust',
          bn: 'ডাটাবেস সার্ভারের স্ক্রিন ধুলোয় ঢেকে যায়'
        },
        {
          en: 'A query returns rows that were deleted 10 years ago',
          bn: 'একটি কোয়েরি এমন সারি রিটার্ন করে যা ১০ বছর আগে মুছে ফেলা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reading uncommitted data that could vanish upon rollback.',
        bn: 'সেভ না হওয়া ডাটা পড়া যা রোলব্যাকের কারণে যেকোনো সময় উধাও হয়ে যেতে পারে।'
      },
      explanation: {
        en: 'A Dirty Read occurs when a session views in-flight uncommitted modifications. If the writing transaction rolls back, the reading transaction has acted upon phantom data that never officially existed in the database.',
        bn: 'ডার্টি রিড ঘটে যখন কোনো সেশন অন্য সেশনের মাঝপথে থাকা অ-কমিটকৃত পরিবর্তন দেখে ফেলে। যদি পরিবর্তনকারী লেনদেনটি রোলব্যাক হয়, তবে পাঠক সেশনটি এমন তথ্যের ওপর ভিত্তি করে কাজ করেছে যার কোনো বাস্তব অস্তিত্ব ছিল না।'
      }
    },
    {
      id: 'db-txn-ex-4',
      kind: 'mcq',
      topic: 'external-calls-in-transactions',
      question: {
        en: 'Why is it an anti-pattern to perform external HTTP API calls inside an active database transaction block (BEGIN ... COMMIT)?',
        bn: 'চলমান ডাটাবেস ট্রানজ্যাকশন ব্লকের (BEGIN ... COMMIT) ভেতর এক্সটার্নাল HTTP এপিআই কল করা কেন একটি ক্ষতিকর প্র্যাকটিস (অ্যান্টি-প্যাটার্ন)?'
      },
      options: [
        {
          en: 'Because open transactions hold exclusive row and table locks; a slow network call holds locks open for seconds, exhausting connection pools and causing cascading system timeouts',
          bn: 'কারণ উন্মুক্ত ট্রানজ্যাকশন রো ও টেবিল লক ধরে রাখে; একটি ধীরগতির নেটওয়ার্ক কল কয়েক সেকেন্ড লক ধরে রেখে কানেকশন পুল শেষ করে দেয় এবং সিস্টেমে টাইমআউট ঘটায়'
        },
        {
          en: 'Because SQL commands cannot run on computers connected to Wi-Fi',
          bn: 'কারণ ওয়াইফাই যুক্ত কম্পিউটারে SQL কমান্ড চালানো যায় না'
        },
        {
          en: 'Because HTTP requests delete all primary keys in the database',
          bn: 'কারণ HTTP রিকোয়েস্ট ডাটাবেসের সমস্ত প্রাইমারি কি মুছে ফেলে'
        },
        {
          en: 'Because web browsers automatically close when an API call is made',
          bn: 'কারণ এপিআই কল করা মাত্রই ওয়েব ব্রাউজার স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lock contention: database locks must be released in milliseconds, not network seconds.',
        bn: 'লক কনটেনশন: ডাটাবেস লক মিলিসেকেন্ডের মধ্যে ছেড়ে দেওয়া উচিত, নেটওয়ার্কের সেকেন্ডের জন্য ধরে রাখা নয়।'
      },
      explanation: {
        en: 'Database transactions must be microsecond-fast. Placing external network requests inside transactions holds row locks open while waiting for third-party servers, starving other queries and freezing application throughput.',
        bn: 'ডাটাবেস ট্রানজ্যাকশন মিলিসেকেন্ডের মধ্যে শেষ হওয়া উচিত। ট্রানজ্যাকশনের ভেতর নেটওয়ার্ক রিকোয়েস্ট রাখলে থার্ড-পার্টি সার্ভারের জন্য অপেক্ষা করতে গিয়ে লক আটকে থাকে, যা অন্যান্য কোয়েরিকে থামিয়ে সম্পূর্ণ অ্যাপ হ্যাং করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'txns-and-the-acid-quiz',
    title: {
      en: 'ACID Transactions & Concurrency Quiz',
      bn: 'ACID ট্রানজ্যাকশন ও কনকারেন্সি কুইজ'
    },
    questions: [
      {
        id: 'db-txn-qz-1',
        kind: 'mcq',
        topic: 'read-committed-default',
        question: {
          en: 'What is the default transaction isolation level in major enterprise databases like PostgreSQL and Oracle?',
          bn: 'PostgreSQL এবং Oracle-এর মতো প্রধান এন্টারপ্রাইজ ডাটাবেসে ডিফল্ট ট্রানজ্যাকশন আইসোলেশন লেভেল কোনটি?'
        },
        options: [
          {
            en: 'Read Committed',
            bn: 'Read Committed'
          },
          {
            en: 'Read Uncommitted',
            bn: 'Read Uncommitted'
          },
          {
            en: 'Serializable',
            bn: 'Serializable'
          },
          {
            en: 'Snapshot Without Locks',
            bn: 'লকবিহীন স্ন্যাপশট (Snapshot Without Locks)'
          }
        ],
        answer: 0,
        hint: {
          en: 'It blocks dirty reads while maintaining high concurrency throughput.',
          bn: 'এটি উচ্চ কনকারেন্সি বজায় রেখে ডার্টি রিড প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Read Committed is the standard default for PostgreSQL and Oracle because it provides a practical balance: it eliminates dirty reads while avoiding the heavy lock overhead and serialization aborts of higher isolation levels.',
          bn: 'PostgreSQL ও Oracle-এ Read Committed ডিফল্ট হিসেবে থাকে কারণ এটি একটি চমৎকার ভারসাম্য দেয়: এটি ডার্টি রিড দূর করে কিন্তু উচ্চ লেভেলের মতো অতিরিক্ত লক বা লেনদেন বাতিল করে না।'
        }
      },
      {
        id: 'db-txn-qz-2',
        kind: 'mcq',
        topic: 'mvcc-snapshot-mechanism',
        question: {
          en: 'How does Multi-Version Concurrency Control (MVCC) allow database readers to read rows without blocking database writers?',
          bn: 'মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) কীভাবে লেখকদের (writers) লক না করে পাঠকদের (readers) ডাটা পড়ার সুবিধা দেয়?'
        },
        options: [
          {
            en: 'By keeping multiple historical versions of each row with transaction timestamps, so readers view an immutable point-in-time snapshot while writers append new versions',
            bn: 'টাইমস্ট্যাম্প সহ প্রতিটি সারির একাধিক অতীত সংস্করণ সংরক্ষণ করে, যাতে লেখকরা নতুন সংস্করণ তৈরি করলেও পাঠকরা একটি অপরিবর্তনীয় স্ন্যাপশট দেখতে পায়'
          },
          {
            en: 'By converting all table data into read-only PDF documents',
            bn: 'সমস্ত টেবিল ডাটাকে রিড-অনলি পিডিএফ ডকুমেন্টে রূপান্তর করার মাধ্যমে'
          },
          {
            en: 'By pausing all database writers for 1 hour every morning',
            bn: 'প্রতিদিন সকালে ১ ঘণ্টার জন্য ডাটাবেসের সমস্ত লেখা স্থগিত রাখার মাধ্যমে'
          },
          {
            en: 'By storing table rows in the browser cache instead of RAM',
            bn: 'র‍্যামের বদলে ব্রাউজার ক্যাশে টেবিল সারি সংরক্ষণ করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Writers do not block readers, and readers do not block writers in MVCC.',
          bn: 'MVCC-তে লেখকরা পাঠকদের থামায় না, আর পাঠকরাও লেখকদের কাজে বাধা দেয় না।'
        },
        explanation: {
          en: 'MVCC achieves concurrency by treating updates as inserts of newer versions with transaction visibility tags. Readers see an older, consistent snapshot without waiting for concurrent writing transactions to finish.',
          bn: 'MVCC প্রতিটি আপডেটকে নতুন সংস্করণ ইনসার্ট করার মতো দেখে কনকারেন্সি অর্জন করে। পাঠকরা অপেক্ষমাণ না থেকেই পুরনো ও নির্ভুল স্ন্যাপশট দেখতে পায়, ফলে সিস্টেমের গতি সবসময় সচল থাকে।'
        }
      },
      {
        id: 'db-txn-qz-3',
        kind: 'mcq',
        topic: 'non-repeatable-read-anomaly',
        question: {
          en: 'What is a Non-Repeatable Read anomaly in database transaction execution?',
          bn: 'ডাটাবেস ট্রানজ্যাকশন পরিচালনায় নন-রিপিটেবল রিড (Non-Repeatable Read) অ্যানোমালি বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'A transaction reads a row once, another transaction updates and commits that row, and the first transaction re-reads the row seeing modified values',
            bn: 'একটি লেনদেন কোনো সারি পড়ার পর অন্য একটি লেনদেন তা আপডেট করে কমিট করে, এবং প্রথম লেনদেনটি পুনরায় সেই সারি পড়ে পরিবর্তিত মান দেখতে পায়'
          },
          {
            en: 'A database column that cannot be read by any user',
            bn: 'একটি ডাটাবেস কলাম যা কোনো ব্যবহারকারীই পড়তে পারে না'
          },
          {
            en: 'A keyboard key that produces double characters when pressed',
            bn: 'কিবোর্ডের এমন একটি কি যা চাপলে ডাবল অক্ষর টাইপ হয়'
          },
          {
            en: 'A hard drive that refuses to spin when reading data',
            bn: 'ডাটা পড়ার সময় হার্ডড্রাইভ ঘুরতে অস্বীকার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Re-reading the same row within the same transaction returns different column data.',
          bn: 'একই লেনদেনের মধ্যে একই সারি পুনরায় পড়লে ভিন্ন কলামের মান পাওয়া যায়।'
        },
        explanation: {
          en: 'In Read Committed isolation, if row 1 is read, modified by an external session, and re-read within the original transaction, the values differ. Repeatable Read isolates transactions from such mid-flight modifications.',
          bn: 'Read Committed মোডে কোনো সারি পড়ার পর বাইরের কেউ তা আপডেট করলে পুনরায় পড়লে নতুন মান দেখা যায়। Repeatable Read ট্রানজ্যাকশনকে এই পরিবর্তন থেকে সুরক্ষিত রাখে।'
        }
      },
      {
        id: 'db-txn-qz-4',
        kind: 'mcq',
        topic: 'write-skew-serializable-defense',
        question: {
          en: 'What subtle concurrency bug is known as Write Skew, and which isolation level is required to prevent it?',
          bn: 'কোন জটিল কনকারেন্সি ত্রুটিকে রাইট সিউ (Write Skew) বলা হয় এবং এটি প্রতিরোধ করতে কোন আইসোলেশন লেভেল প্রয়োজন?'
        },
        options: [
          {
            en: 'Two concurrent transactions read overlapping data and make conflicting updates that violate an invariant (such as two on-call doctors both signing off simultaneously); prevented only by Serializable isolation',
            bn: 'দুটি সমান্তরাল লেনদেন একই ডাটা পড়ে এমন দুটি পরিবর্তন করে যা নিয়ম ভঙ্গ করে (যেমন অন-কল থাকা দুইজন ডাক্তার একসাথে ছুটি নিয়ে ফেলা); যা কেবল Serializable আইসোলেশন দিয়ে প্রতিহত করা যায়'
          },
          {
            en: 'A bug where text is written in italics instead of normal font',
            bn: 'একটি ত্রুটি যার ফলে টেক্সট সোজা না হয়ে বাঁকা বা ইটালিক হরফে লেখা হয়'
          },
          {
            en: 'A hard disk motor spinning in the wrong direction',
            bn: 'হার্ডডিস্কের মোটর ভুল দিকে ঘোরা'
          },
          {
            en: 'A database table having more columns than rows',
            bn: 'একটি ডাটাবেস টেবিলে সারির চেয়ে কলামের সংখ্যা বেশি হওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Write skew occurs even under Repeatable Read; only Serializable guarantees serial order.',
          bn: 'Repeatable Read মোডেও রাইট সিউ ঘটতে পারে; কেবল Serializable সম্পূর্ণ ক্রমিক নিশ্চয়তা দেয়।'
        },
        explanation: {
          en: 'Write skew happens when concurrent transactions read distinct rows that together enforce an invariant, and modify them disjointly. Because neither transaction updates the row the other is modifying, Repeatable Read permits both. Only Serializable detects the dependency conflict.',
          bn: 'রাইট সিউ ঘটে যখন দুটি ট্রানজ্যাকশন আলাদা রো পড়ে যৌথ একটি নিয়ম রক্ষা করে এবং আলাদা আলাদা রো আপডেট করে। যেহেতু কেউ অন্যের রো আপডেট করছে না, তাই Repeatable Read উভয়কেই অনুমোদন দেয়। কেবল Serializable এই ডিপেন্ডেন্সি কনফ্লিক্ট ধরে রক্ষা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'indexes-and-the-index',
    title: {
      en: 'B-Tree Indexes: Clustered, Secondary & Composite Lookups',
      bn: 'বি-ট্রি ইনডেক্স: ক্লাস্টার্ড, সেকেন্ডারি ও কম্পোজিট লুকআপ'
    }
  }
};
