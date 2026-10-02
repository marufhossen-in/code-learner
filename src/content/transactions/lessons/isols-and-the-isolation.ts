import type { Lesson } from '../../../lib/types';

export const IsolsAndTheIsolationLesson: Lesson = {
  slug: 'isols-and-the-isolation',
  tech: 'transactions',
  title: {
    en: 'The 4 ANSI SQL Isolation Levels & Concurrency Anomalies',
    bn: '৪টি ANSI SQL আইসোলেশন লেভেল ও কনকারেন্সি অ্যানোমালি'
  },
  summary: {
    en: 'Master database concurrency isolation: Dirty Reads, Non-Repeatable Reads, Phantom Reads, Write Skew, and the four ANSI SQL isolation tiers from Read Uncommitted to Serializable.',
    bn: 'ডাটাবেস কনকারেন্সি আইসোলেশন আয়ত্ত করুন: ডার্টি রিড, নন-রিপিটেবল রিড, ফ্যান্টম রিড, রাইট স্কিউ এবং রিড আনকমিটেড থেকে শুরু করে সিরিয়ালাইজেবল পর্যন্ত ৪টি ANSI SQL আইসোলেশন স্তর।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'the-isolation-spectrum',
      text: {
        en: 'Balancing Throughput and Correctness Across 4 Isolation Tiers',
        bn: '৪টি আইসোলেশন স্তরে থ্রুপুট এবং নির্ভুলতার ভারসাম্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Running database transactions purely one after another guarantees perfect accuracy, but cripples application performance. High-traffic web systems need hundreds of users reading and writing simultaneously. To balance query speed against data consistency, the SQL-92 standard established four standardized transaction isolation levels.',
        bn: 'একের পর এক সম্পূর্ণ এককভাবে ট্রানজ্যাকশন চালালে সর্বোচ্চ নির্ভুলতা পাওয়া যায়, কিন্তু সিস্টেমের গতি মারাত্মক কমে যায়। আধুনিক ওয়েব অ্যাপ্লিকেশনে একই সময়ে শত শত ব্যবহারকারীর ডাটা পড়া ও লেখার সুবিধা দরকার। কোয়েরির গতি এবং তথ্যের নির্ভুলতার মধ্যে ভারসাম্য বজায় রাখতে ১৯৯২ সালের SQL মানদণ্ডে ৪টি নির্দিষ্ট আইসোলেশন লেভেল তৈরি করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Each isolation tier defines which concurrency anomalies the database engine prevents. Lower levels maximize concurrent throughput by permitting subtle anomalies, while higher levels enforce bulletproof correctness at the expense of query contention and abort retries.',
        bn: 'প্রতিটি আইসোলেশন স্তর সুনির্দিষ্টভাবে ঠিক করে দেয় ডাটাবেস ইঞ্জিন কোন কোন কনকারেন্সি সমস্যা বা অ্যানোমালি প্রতিরোধ করবে। নিচের দিকের স্তরগুলো কিছুটা ভুল তথ্য পড়ার ঝুঁকি মেনে নিয়ে উচ্চ গতি দেয়, আর ওপরের স্তরগুলো পুনরায় চেষ্টার ঝুঁকি নিয়েও শতভাগ নিখুঁত ফলাফল নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The 4 ANSI SQL Isolation Levels and Anomaly Matrix',
        bn: '৪টি ANSI SQL আইসোলেশন লেভেল এবং অ্যানোমালি ম্যাট্রিক্স'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="ANSI SQL Isolation Levels Matrix">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Table Header -->
  <rect x="25" y="25" width="690" height="40" rx="6" fill="#1e293b" />
  <text x="45" y="50" fill="#f8fafc" font-size="13" font-weight="bold">Isolation Level</text>
  <text x="250" y="50" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Dirty Read</text>
  <text x="415" y="50" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Non-Repeatable Read</text>
  <text x="590" y="50" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">Phantom Read</text>

  <!-- Level 1: Read Uncommitted -->
  <g transform="translate(25, 75)">
    <rect width="690" height="50" rx="4" fill="#111827" stroke="#374151" stroke-width="1" />
    <text x="20" y="30" fill="#ef4444" font-size="12" font-weight="bold">1. Read Uncommitted</text>
    <rect x="205" y="12" width="90" height="26" rx="4" fill="#7f1d1d" />
    <text x="250" y="29" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">POSSIBLE</text>
    <rect x="370" y="12" width="90" height="26" rx="4" fill="#7f1d1d" />
    <text x="415" y="29" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">POSSIBLE</text>
    <rect x="545" y="12" width="90" height="26" rx="4" fill="#7f1d1d" />
    <text x="590" y="29" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">POSSIBLE</text>
  </g>

  <!-- Level 2: Read Committed -->
  <g transform="translate(25, 135)">
    <rect width="690" height="50" rx="4" fill="#111827" stroke="#374151" stroke-width="1" />
    <text x="20" y="30" fill="#38bdf8" font-size="12" font-weight="bold">2. Read Committed (PG Def)</text>
    <rect x="205" y="12" width="90" height="26" rx="4" fill="#065f46" />
    <text x="250" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">PREVENTED</text>
    <rect x="370" y="12" width="90" height="26" rx="4" fill="#7f1d1d" />
    <text x="415" y="29" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">POSSIBLE</text>
    <rect x="545" y="12" width="90" height="26" rx="4" fill="#7f1d1d" />
    <text x="590" y="29" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">POSSIBLE</text>
  </g>

  <!-- Level 3: Repeatable Read -->
  <g transform="translate(25, 195)">
    <rect width="690" height="50" rx="4" fill="#111827" stroke="#374151" stroke-width="1" />
    <text x="20" y="30" fill="#a855f7" font-size="12" font-weight="bold">3. Repeatable Read (MySQL Def)</text>
    <rect x="205" y="12" width="90" height="26" rx="4" fill="#065f46" />
    <text x="250" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">PREVENTED</text>
    <rect x="370" y="12" width="90" height="26" rx="4" fill="#065f46" />
    <text x="415" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">PREVENTED</text>
    <rect x="545" y="12" width="90" height="26" rx="4" fill="#7f1d1d" />
    <text x="590" y="29" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">POSSIBLE</text>
  </g>

  <!-- Level 4: Serializable -->
  <g transform="translate(25, 255)">
    <rect width="690" height="50" rx="4" fill="#111827" stroke="#10b981" stroke-width="1.5" />
    <text x="20" y="30" fill="#10b981" font-size="12" font-weight="bold">4. Serializable (Full SSI)</text>
    <rect x="205" y="12" width="90" height="26" rx="4" fill="#065f46" />
    <text x="250" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">PREVENTED</text>
    <rect x="370" y="12" width="90" height="26" rx="4" fill="#065f46" />
    <text x="415" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">PREVENTED</text>
    <rect x="545" y="12" width="90" height="26" rx="4" fill="#065f46" />
    <text x="590" y="29" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">PREVENTED</text>
  </g>
</svg>`,
      caption: {
        en: 'The 4 ANSI SQL isolation levels and the 3 classic anomalies they prevent or permit.',
        bn: '৪টি ANSI SQL আইসোলেশন লেভেল এবং ৩টি চিরাচরিত অ্যানোমালি যা তারা প্রতিরোধ বা অনুমোদন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Dirty Read',
          def: {
            en: 'Reading uncommitted data from a concurrent transaction that subsequently rolls back, causing calculations based on phantom data.',
            bn: 'চলমান অন্য ট্রানজ্যাকশনের অপূর্ণ ডাটা পড়ে ফেলা যা পরবর্তীতে রোলব্যাক হয়ে যায় এবং ভুলের সৃষ্টি করে।'
          }
        },
        {
          term: 'Non-Repeatable Read',
          def: {
            en: 'Re-reading the exact same row within a transaction and receiving different column values because another transaction committed an update in between.',
            bn: 'একই ট্রানজ্যাকশনে একই রো পুনরায় পড়ে ভিন্ন মান পাওয়া কারণ এর মাঝে অন্য কেউ ডাটা আপডেট করে কমিট করেছে।'
          }
        },
        {
          term: 'Phantom Read',
          def: {
            en: 'Re-running a range query and discovering new rows inserted by another concurrent committed transaction that matched the search filter.',
            bn: 'নির্দিষ্ট রেঞ্জের কোয়েরি পুনরায় চালিয়ে নতুন কিছু রো খুঁজে পাওয়া যা অন্য কোনো ব্যবহারকারী মাঝপথে ইনসার্ট করেছে।'
          }
        },
        {
          term: 'Write Skew',
          def: {
            en: 'An anomaly where concurrent transactions read overlapping data and update distinct rows, together violating a global cross-row invariant.',
            bn: 'এমন একটি অসঙ্গতি যেখানে দুটি লেনদেন একই ডাটা দেখে ভিন্ন ভিন্ন সারি আপডেট করে সামগ্রিক শর্ত ভঙ্গ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'breakdown-of-the-anomalies',
      text: {
        en: 'The 3 Classic Concurrency Anomalies Explained',
        bn: '৩টি চিরাচরিত কনকারেন্সি অ্যানোমালির বিশদ ব্যাখ্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Dirty Read happens when Transaction 1 updates a row without committing, and Transaction 2 reads that uncommitted value. If Transaction 1 aborts due to an error, Transaction 2 has computed actions based on hallucinated values that never truly existed. Read Committed eliminates this anomaly by strictly hiding dirty, uncommitted rows from outside readers.',
        bn: 'ডার্টি রিড ঘটে যখন ট্রানজ্যাকশন ১ একটি রো পরিবর্তন করে কিন্তু কমিট করে না, আর ট্রানজ্যাকশন ২ সেই অপূর্ণ ডাটা পড়ে নেয়। যদি কোনো ভুলের কারণে ট্রানজ্যাকশন ১ রোলব্যাক করে, তবে ট্রানজ্যাকশন ২ এমন একটি ডাটার ওপর ভিত্তি করে কাজ করে ফেলে যার বাস্তবে কোনো অস্তিত্ব ছিল না। রিড কমিটেড লেভেল অপূর্ণ ডাটা অন্য রিডারদের থেকে গোপন রেখে এই বিপদ দূর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Non-Repeatable Read occurs when Transaction 1 reads a row, then Transaction 2 updates that row and commits. When Transaction 1 re-reads the row, its values have changed mid-transaction! Repeatable Read solves this by freezing a point-in-time MVCC snapshot when the transaction begins, guaranteeing that repeated reads of the same row always yield identical data.',
        bn: 'নন-রিপিটেবল রিড ঘটে যখন ট্রানজ্যাকশন ১ কোনো রো পড়ে, এরপর ট্রানজ্যাকশন ২ সেই রো আপডেট করে কমিট করে দেয়। যখন ট্রানজ্যাকশন ১ পুনরায় সেই রো পড়ে, তখন সে ভিন্ন ডাটা দেখতে পায়! রিপিটেবল রিড লেভেল লেনদেন শুরুর মুহূর্তের একটি নির্দিষ্ট স্ন্যাপশট ধরে রেখে এই সমস্যা মেটায়, ফলে বারবার পড়লেও একই ডাটা পাওয়া যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Phantom Read occurs when a transaction runs a range query (such as counting rows WHERE status = active), and a concurrent transaction inserts and commits a new matching row. The next count query returns a higher number! Serializable isolation prevents phantoms using range locks or predicate locks, guaranteeing sequential execution semantics.',
        bn: 'ফ্যান্টম রিড ঘটে যখন কোনো ট্রানজ্যাকশন নির্দিষ্ট শর্তে রেঞ্জ কোয়েরি চালায় (যেমন active স্ট্যাটাসের রো গণনা), আর অন্য কেউ নতুন একটি রো ইনসার্ট করে কমিট করে দেয়। পরের বার গণনা করলে নতুন রো খুঁজে পাওয়া যায়! সিরিয়ালাইজেবল লেভেল রেঞ্জ লক বা প্রেডিকেট লকের সাহায্যে নতুন রো ঢুকতে বাধা দিয়ে এই বিভ্রান্তি রোধ করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-isolation-engine',
      text: {
        en: 'Executable Concurrency Anomaly & Isolation Guard Engine',
        bn: 'রানযোগ্য কনকারেন্সি অ্যানোমালি ও আইসোলেশন গার্ড ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine demonstrating the prevention of Dirty Reads, Non-Repeatable Reads, and Write Skew anomalies across the 4 ANSI SQL isolation levels. It simulates an on-call doctor roster where Serializable Snapshot Isolation (SSI) detects a write skew conflict and safely aborts the offending transaction.',
        bn: 'নিচে ৪টি ANSI SQL আইসোলেশন লেভেলের অধীনে ডার্টি রিড, নন-রিপিটেবল রিড এবং রাইট স্কিউ প্রতিরোধ প্রদর্শনের একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি একটি হাসপাতালের অন-কল ডাক্তারদের তালিকা সিমুলেট করে যেখানে সিরিয়ালাইজেবল স্ন্যাপশট আইসোলেশন (SSI) রাইট স্কিউ ধরে ফেলে একটি ট্রানজ্যাকশন সফলভাবে বাতিল করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Simulate Read Committed, Repeatable Read, and Serializable Write Skew conflict resolution',
        bn: 'রিড কমিটেড, রিপিটেবল রিড এবং সিরিয়ালাইজেবল রাইট স্কিউ দ্বন্দ্ব সমাধান সিমুলেশন'
      },
      code: `// ANSI SQL Isolation Level & Anomaly Simulator
const databaseMaster = {
  account_balance: 1000,
  active_doctors: ['Dr. Alice', 'Dr. Bob'] // Hospital invariant: >= 1 doctor on call
};

// 1. Read Committed prevents Dirty Read
let uncommittedDebit = 500; // In-flight transaction modified value
// Reader at Read Committed queries master table, ignoring uncommitted buffer
const readerView = databaseMaster.account_balance; // Reads 1000, not 500

// 2. Repeatable Read prevents Non-Repeatable Read (Snapshot frozen)
const txnSnapshot = databaseMaster.account_balance; // 1000
databaseMaster.account_balance = 1200; // Concurrent update commits
const repeatedRead = txnSnapshot; // Snapshot still yields 1000!

// 3. Serializable prevents Write Skew Anomaly
// Invariant: At least 1 active doctor must remain on call
let activeCount = databaseMaster.active_doctors.length; // 2 doctors
let doctorAliceLeaves = true;
activeCount -= 1; // Alice leaves, 1 doctor left

let txn2Aborted = false;
// Dr. Bob concurrently tries to leave
if (activeCount - 1 < 1) {
  // SSI detects cross-row conflict: hospital would be left with 0 doctors!
  txn2Aborted = true; // Abort Txn 2 to protect invariant
}

console.log(\`[Isolation Engine] Simulated 4 ANSI SQL isolation levels and their concurrency anomalies.\`);
console.log(\`[Read Committed] Dirty read prevented; reader observes committed master value (\${readerView}).\`);
console.log(\`[Serializable Guard] Write skew detected: concurrent shift drops active doctors to 0; aborting Txn 2 (1/1: \${txn2Aborted}).\`);`
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Database Defaults: PostgreSQL vs MySQL',
        bn: 'ডাটাবেসের ডিফল্ট লেভেল: PostgreSQL বনাম MySQL'
      },
      text: {
        en: 'PostgreSQL, Oracle, and Microsoft SQL Server set Read Committed as their default isolation level to maximize concurrent performance while stopping dirty reads. In contrast, MySQL InnoDB defaults to Repeatable Read, using Next-Key locking to stop both fuzzy reads and phantoms.',
        bn: 'PostgreSQL, Oracle এবং SQL Server তাদের ডিফল্ট আইসোলেশন হিসেবে Read Committed ব্যবহার করে যা ডার্টি রিড ঠেকানোর পাশাপাশি সর্বোচ্চ গতি দেয়। অন্যদিকে MySQL InnoDB ডিফল্ট হিসেবে Repeatable Read বেছে নেয় এবং নেক্সট-কি লকিং দিয়ে ফ্যান্টম রিডও প্রতিরোধ করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Isolation Anomaly Classifier',
        bn: 'আইসোলেশন অ্যানোমালি শ্রেণিবিন্যাসকারী'
      },
      description: {
        en: 'Classify concurrency bugs: determine which anomaly occurred based on observed query results.',
        bn: 'কনকারেন্সি ত্রুটি শনাক্ত করুন: কোয়েরির ফলাফলের ওপর ভিত্তি করে কোন অ্যানোমালি ঘটেছে তা নির্ধারণ করুন।'
      },
      code: `function identifyAnomaly(observation) {
  if (observation === 'READ_UNCOMMITTED_DATA_THAT_WAS_ROLLED_BACK') return 'DIRTY_READ';
  if (observation === 'SAME_ROW_VALUES_CHANGED_IN_SECOND_READ') return 'NON_REPEATABLE_READ';
  if (observation === 'NEW_ROWS_APPEARED_IN_IDENTICAL_RANGE_QUERY') return 'PHANTOM_READ';
  return 'UNKNOWN';
}

console.log('Test 1:', identifyAnomaly('READ_UNCOMMITTED_DATA_THAT_WAS_ROLLED_BACK'));
console.log('Test 2:', identifyAnomaly('NEW_ROWS_APPEARED_IN_IDENTICAL_RANGE_QUERY'));`,
      tests: [
        {
          name: {
            en: 'Identifies Dirty Read from uncommitted data',
            bn: 'অপূর্ণ ডাটা থেকে ডার্টি রিড শনাক্ত করে'
          },
          expected: 'Test 1: DIRTY_READ'
        },
        {
          name: {
            en: 'Identifies Phantom Read from new range rows',
            bn: 'নতুন সারির উপস্থিতি থেকে ফ্যান্টম রিড শনাক্ত করে'
          },
          expected: 'Test 2: PHANTOM_READ'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-isol-ex-1',
      kind: 'mcq',
      topic: 'dirty-read-definition-risk',
      question: {
        en: 'What sequence of operations defines a classic Dirty Read anomaly in a database system?',
        bn: 'একটি ডাটাবেস সিস্টেমে কোন ধারাবাহিক অপারেশনের মাধ্যমে ক্লাসিক ডার্টি রিড অ্যানোমালি তৈরি হয়?'
      },
      options: [
        {
          en: 'Transaction 1 modifies a row without committing; Transaction 2 reads that uncommitted data; then Transaction 1 aborts and rolls back',
          bn: 'ট্রানজ্যাকশন ১ একটি রো পরিবর্তন করে কিন্তু কমিট করে না; ট্রানজ্যাকশন ২ সেই অপূর্ণ ডাটা পড়ে নেয়; অতঃপর ট্রানজ্যাকশন ১ বাতিল ও রোলব্যাক হয়ে যায়'
        },
        {
          en: 'A user types their password incorrectly three times in a row',
          bn: 'কোনো ব্যবহারকারী পরপর তিনবার ভুল পাসওয়ার্ড টাইপ করলে'
        },
        {
          en: 'The database server screen becomes covered in dust',
          bn: 'ডাটাবেস সার্ভার স্ক্রিনের ওপর ধুলাবালি জমলে'
        },
        {
          en: 'Two SELECT queries run at 12:00 PM simultaneously',
          bn: 'দুপুর ১২:০০ টায় দুটি SELECT কোয়েরি একসাথে চললে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A dirty read reads uncommitted modifications that subsequently roll back.',
        bn: 'ডার্টি রিড হলো এমন ডাটা পড়া যা পরবর্তীতে রোলব্যাক হয়ে মুছে যায়।'
      },
      explanation: {
        en: 'A dirty read operates on phantom updates that never committed to disk. If the writing transaction rolls back, all actions taken by the reading transaction are based on corrupted premises.',
        bn: 'ডার্টি রিড মূলত এমন পরিবর্তনের ওপর কাজ করে যা কখনোই ডিস্কে স্থায়ী হয়নি। লেখক রোলব্যাক করলে পাঠকের تمام পরবর্তী হিসাব ভুল হয়ে যায়।'
      }
    },
    {
      id: 'txn-isol-ex-2',
      kind: 'mcq',
      topic: 'read-committed-default-behavior',
      question: {
        en: 'What is the default isolation level in PostgreSQL and Oracle, and which anomaly does it strictly prevent?',
        bn: 'PostgreSQL এবং Oracle-এর ডিফল্ট আইসোলেশন লেভেল কোনটি এবং এটি সুনির্দিষ্টভাবে কোন সমস্যাটি প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'Read Committed: it strictly prevents Dirty Reads by ensuring queries only observe rows that were committed before the query began',
          bn: 'Read Committed: এটি কোয়েরি শুরুর আগে কমিট হওয়া ডাটাই কেবল পড়তে দিয়ে ডার্টি রিড সম্পূর্ণ প্রতিরোধ করে'
        },
        {
          en: 'Read Uncommitted: it allows all users to edit code without passwords',
          bn: 'Read Uncommitted: এটি কাউকে পাসওয়ার্ড ছাড়াই কোড এডিট করার সুযোগ দেয়'
        },
        {
          en: 'Serializable: it shuts down the database after 5 minutes of idle time',
          bn: 'Serializable: এটি ৫ মিনিট অলস থাকলে ডাটাবেস সম্পূর্ণ বন্ধ করে দেয়'
        },
        {
          en: 'Repeatable Read: it forces all text columns to use uppercase letters',
          bn: 'Repeatable Read: এটি সমস্ত টেক্সট কলামকে বড় হাতের অক্ষরে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Read Committed is the default in PostgreSQL; it guarantees no dirty reads.',
        bn: 'PostgreSQL-এর ডিফল্ট লেভেল হলো Read Committed; এটি ডার্টি রিড হতে দেয় না।'
      },
      explanation: {
        en: 'PostgreSQL defaults to Read Committed. Each statement sees only data committed prior to that statement, completely eliminating dirty reads with minimal locking overhead.',
        bn: 'PostgreSQL ডিফল্টভাবে Read Committed চালায়। প্রতিটি স্টেটমেন্ট কেবল পূর্বেই কমিট হওয়া ডাটা দেখতে পায়, ফলে অতি সামান্য লক খরচে ডার্টি রিড দূর হয়।'
      }
    },
    {
      id: 'txn-isol-ex-3',
      kind: 'mcq',
      topic: 'phantom-read-range-query',
      question: {
        en: 'How does a Phantom Read anomaly differ from a Non-Repeatable Read anomaly?',
        bn: 'একটি ফ্যান্টম রিড অ্যানোমালি কীভাবে নন-রিপিটেবল রিড অ্যানোমালি থেকে আলাদা?'
      },
      options: [
        {
          en: 'A Non-Repeatable Read changes values of an existing row, whereas a Phantom Read inserts entirely new rows that match a search range filter',
          bn: 'নন-রিপিটেবল রিডে পূর্বের বিদ্যমান কোনো সারির মান বদলে যায়, আর ফ্যান্টম রিডে ফিল্টার শর্তের সাথে মিলে যাওয়া সম্পূর্ণ নতুন সারি যুক্ত হয়'
        },
        {
          en: 'Phantom reads only occur on Halloween night at midnight',
          bn: 'ফ্যান্টম রিড কেবল হ্যালোইন উৎসবের রাতে মধ্যরাতে ঘটে থাকে'
        },
        {
          en: 'Non-repeatable reads only affect numeric columns while phantoms affect text',
          bn: 'নন-রিপিটেবল রিড শুধু সংখ্যার কলামে এবং ফ্যান্টম কেবল টেক্সটে ঘটে'
        },
        {
          en: 'There is zero difference between the two terms in relational theory',
          bn: 'রিলেশনাল তত্ত্বে এই দুটি শব্দের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fuzzy read modifies an existing tuple; Phantom read inserts brand new tuples into a range.',
        bn: 'নন-রিপিটেবল বিদ্যমান সারির মান বদলায়; ফ্যান্টম নতুন সারি প্রবেশ করায়।'
      },
      explanation: {
        en: 'Non-repeatable reads alter existing row data (UPDATE/DELETE). Phantom reads involve new rows appearing in a collection or range query (INSERT), changing row counts.',
        bn: 'নন-রিপিটেবল বিদ্যমান রো-এর ডাটা বদলে দেয়। অন্যদিকে ফ্যান্টম রিডে নতুন রো ইনসার্ট হওয়ায় গণনায় সারির সংখ্যা বেড়ে যায়।'
      }
    },
    {
      id: 'txn-isol-ex-4',
      kind: 'mcq',
      topic: 'serializable-write-skew-protection',
      question: {
        en: 'Which isolation level is required to prevent Write Skew anomalies (such as two on-call doctors both concurrently going off-duty)?',
        bn: 'রাইট স্কিউ অ্যানোমালি (যেমন অন-কল থাকা দুইজন ডাক্তারের একই সাথে ছুটি নেওয়া) প্রতিরোধ করতে কোন আইসোলেশন লেভেল প্রয়োজন?'
      },
      options: [
        {
          en: 'Serializable (or Serializable Snapshot Isolation SSI), which detects conflicting dependencies across disjoint rows and aborts one transaction',
          bn: 'Serializable (বা Serializable Snapshot Isolation SSI), যা ভিন্ন ভিন্ন সারির সাংঘর্ষিক নির্ভরতা শনাক্ত করে একটি ট্রানজ্যাকশন বাতিল করে দেয়'
        },
        {
          en: 'Read Uncommitted, because it deletes the doctor table entirely',
          bn: 'Read Uncommitted, কারণ এটি ডাক্তারদের টেবিলটি পুরোপুরি মুছে দেয়'
        },
        {
          en: 'Read Committed, because it disables all internet connections',
          bn: 'Read Committed, কারণ এটি تمام ইন্টারনেট সংযোগ বিচ্ছিন্ন করে দেয়'
        },
        {
          en: 'None: write skew is mathematically impossible in relational databases',
          bn: 'কোনোটিই নয়: রিলেশনাল ডাটাবেসে রাইট স্কিউ হওয়া গাণিতিকভাবে অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Write skew slips past Repeatable Read; only Serializable prevents it.',
        bn: 'রাইট স্কিউ রিপিটেবল রিডকে ফাঁকি দিয়ে ঢুকে পড়ে; কেবল সিরিয়ালাইজেবল এটি ঠেকায়।'
      },
      explanation: {
        en: 'Write skew occurs when transactions modify disjoint rows based on overlapping reads. Repeatable Read permits this because neither row was updated twice. Only Serializable guarantees full serial equivalence.',
        bn: 'রাইট স্কিউ ভিন্ন ভিন্ন সারিতে লেখার কারণে রিপিটেবল রিড এটি ধরতে পারে না। একমাত্র সিরিয়ালাইজেবল লেভেল সামগ্রিক শর্ত পাহারা দিয়ে এটি প্রতিরোধ করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'isols-and-the-isolation-quiz',
    title: {
      en: 'Isolation Levels & Concurrency Anomalies Quiz',
      bn: 'আইসোলেশন লেভেল ও কনকারেন্সি অ্যানোমালি কুইজ'
    },
    questions: [
      {
        id: 'txn-isol-qz-1',
        kind: 'mcq',
        topic: 'ansi-sql-isolation-levels-count',
        question: {
          en: 'How many standardized transaction isolation levels were formalized in the ANSI/ISO SQL-92 database specification?',
          bn: 'ANSI/ISO SQL-92 ডাটাবেস স্পেসিফিকেশনে কতটি প্রমিত ট্রানজ্যাকশন আইসোলেশন লেভেল আনুষ্ঠানিকভাবে সংজ্ঞায়িত করা হয়েছিল?'
        },
        options: [
          {
            en: '4 levels: Read Uncommitted, Read Committed, Repeatable Read, and Serializable',
            bn: '৪টি স্তর: Read Uncommitted, Read Committed, Repeatable Read এবং Serializable'
          },
          {
            en: '10 levels corresponding to the numbers 0 through 9',
            bn: '১০টি স্তর যা ০ থেকে ৯ সংখ্যার সাথে সামঞ্জস্যপূর্ণ'
          },
          {
            en: 'Only 1 single level: Maximum Speed Mode',
            bn: 'কেবলমাত্র ১টি স্তর: ম্যাক্সিমাম স্পিড মোড'
          },
          {
            en: '50 levels defined for every country in the world',
            bn: 'বিশ্বের প্রতিটি দেশের জন্য ৫০টি স্তর'
          }
        ],
        answer: 0,
        hint: {
          en: 'The ANSI SQL-92 standard defines exactly 4 isolation tiers.',
          bn: 'ANSI SQL-92 স্ট্যান্ডার্ডে ঠিক ৪টি আইসোলেশন স্তর রয়েছে।'
        },
        explanation: {
          en: 'SQL-92 formally specified 4 isolation levels based on the tolerance of 3 phenomena: Dirty Read, Non-Repeatable Read, and Phantom Read.',
          bn: 'SQL-92 মানদণ্ডে ৩টি মূল সমস্যার সহনশীলতার ওপর ভিত্তি করে ঠিক ৪টি আইসোলেশন লেভেল সংজ্ঞায়িত করা হয়েছিল।'
        }
      },
      {
        id: 'txn-isol-qz-2',
        kind: 'mcq',
        topic: 'snapshot-isolation-repeatable-read',
        question: {
          en: 'Under Snapshot Isolation (used by PostgreSQL Repeatable Read), what does a query see when reading data?',
          bn: 'স্ন্যাপশট আইসোলেশনের অধীনে (যা PostgreSQL-এর Repeatable Read ব্যবহার করে) ডাটা পড়ার সময় একটি কোয়েরি কী দেখতে পায়?'
        },
        options: [
          {
            en: 'A frozen point-in-time snapshot of the database state as it existed at the exact moment the transaction began, ignoring later external commits',
            bn: 'ট্রানজ্যাকশন শুরুর মুহূর্তে ডাটাবেসের অবস্থার একটি স্থির স্ন্যাপশট, যা পরবর্তী বাইরের কোনো কমিটকে পুরোপুরি উপেক্ষা করে'
          },
          {
            en: 'The future state of the database 10 years in advance',
            bn: '১০ বছর পরের ভবিষ্যতের ডাটাবেস অবস্থা'
          },
          {
            en: 'Randomly generated numbers produced by the CPU clock',
            bn: 'সিপিইউ ক্লক কর্তৃক তৈরি করা এলোমেলো কিছু সংখ্যা'
          },
          {
            en: 'Only the table structure without any data records',
            bn: 'কোনো ডাটা ছাড়া কেবলমাত্র টেবিলের কঙ্কাল বা গঠন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Snapshot isolation freezes database visibility at the start of the transaction.',
          bn: 'স্ন্যাপশট আইসোলেশন লেনদেন শুরুর সময়ে ডাটাবেসের দৃশ্যমানতাকে স্থির করে রাখে।'
        },
        explanation: {
          en: 'Snapshot Isolation provides each transaction with a consistent view of the database taken at transaction inception. Even if other users commit billions of rows, the snapshot remains unchanged.',
          bn: 'স্ন্যাপশট আইসোলেশন লেনদেন শুরু হওয়ার সময়ের একটি নিখুঁত দৃশ্য রিডারকে উপহার দেয়। বাইরে অন্য কেউ লক্ষ লক্ষ ডাটা সেভ করলেও এই স্ন্যাপশটে কোনো নড়চড় হয় না।'
        }
      },
      {
        id: 'txn-isol-qz-3',
        kind: 'mcq',
        topic: 'ssi-serializable-snapshot-isolation',
        question: {
          en: 'What revolutionary breakthrough did Serializable Snapshot Isolation (SSI) introduce in modern database systems like PostgreSQL?',
          bn: 'PostgreSQL-এর মতো আধুনিক ডাটাবেস সিস্টেমে Serializable Snapshot Isolation (SSI) কোন বৈপ্লবিক অগ্রগতি নিয়ে এসেছে?'
        },
        options: [
          {
            en: 'It achieves full Serializable correctness without requiring heavy read locks, instead tracking dependency graph anomalies (rw-antidependencies) and aborting conflicting transactions only when cycles occur',
            bn: 'এটি ভারী রিড লক ছাড়াই পূর্ণ সিরিয়ালাইজেবল নির্ভুলতা দেয়, কেবল ডিপেন্ডেন্সি গ্রাফে দ্বন্দ্ব ট্র্যাক করে এবং চক্র তৈরি হলেই কেবল অপরাধী লেনদেন বাতিল করে'
          },
          {
            en: 'It replaced all SQL commands with plain English voice instructions',
            bn: 'এটি সমস্ত SQL কমান্ডের বদলে ইংরেজি ভয়েস কমান্ড চালু করেছে'
          },
          {
            en: 'It allows database servers to operate without electric power',
            bn: 'এটি বিদ্যুৎ ছাড়াই ডাটাবেস সার্ভার চলার ব্যবস্থা করেছে'
          },
          {
            en: 'It converts relational tables into flat CSV files automatically',
            bn: 'এটি রিলেশনাল টেবিলকে স্বয়ংক্রিয়ভাবে সাধারণ CSV ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SSI provides true serializability without read locks by tracking rw-conflict cycles.',
          bn: 'SSI রিড লক ছাড়াই ডিপেন্ডেন্সি গ্রাফে দ্বন্দ্ব খুঁজে পূর্ণ সিরিয়ালাইজেবল নিরাপত্তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Pioneered by Cahill, Röhm, and Fekete (2008), SSI tracks read-write conflict edges in memory. It delivers strict serializability at nearly the speed of snapshot isolation without pessimistic read locking.',
          bn: '২০০৮ সালে আবিষ্কৃত SSI মেমরিতে রিড-রাইট দ্বন্দ্বের গ্রাফ ট্র্যাক করে। এটি ভারী লক ছাড়াই স্ন্যাপশট আইসোলেশনের প্রায় সমান গতিতে শতভাগ সিরিয়ালাইজেবল নিরাপত্তা নিশ্চিত করে।'
        }
      },
      {
        id: 'txn-isol-qz-4',
        kind: 'mcq',
        topic: 'read-uncommitted-production-verdict',
        question: {
          en: 'Why is the Read Uncommitted isolation level strictly forbidden in production financial and transactional architectures?',
          bn: 'উৎপাদনমুখী আর্থিক ও লেনদেনমূলক আর্কিটেকচারে কেন Read Uncommitted আইসোলেশন লেভেল ব্যবহার করা কঠোরভাবে নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Because it exposes dirty reads: applications make financial decisions on in-flight data that aborts moments later, destroying ledger balances and business accounting',
            bn: 'কারণ এতে ডার্টি রিড ঘটে: অ্যাপ্লিকেশন এমন অপূর্ণ তথ্যের ওপর আর্থিক সিদ্ধান্ত নিয়ে ফেলে যা মুহূর্ত পরেই বাতিল হয়ে হিসাবের খাতায় মারাত্মক বিপর্যয় ডেকে আনে'
          },
          {
            en: 'Because it requires 100 gigabytes of internet bandwidth per second',
            bn: 'কারণ এতে প্রতি সেকেন্ডে ১০০ গিগাবাইট ইন্টারনেট ব্যান্ডউইথ খরচ হয়'
          },
          {
            en: 'Because it changes the colors of database desktop icons to purple',
            bn: 'কারণ এটি ডাটাবেসের ডেস্কটপ আইকনের রং বেগুনি করে দেয়'
          },
          {
            en: 'Because SQL standards removed it from all computer languages in 1950',
            bn: 'কারণ ১৯৫০ সালে تمام কম্পিউটার ভাষা থেকে এটিকে বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dirty reads ruin financial integrity.',
          bn: 'ডার্টি রিড আর্থিক নির্ভুলতা ধ্বংস করে দেয়।'
        },
        explanation: {
          en: 'Read Uncommitted provides zero isolation against dirty reads. If a transaction debits $1,000,000 and then aborts, a concurrent transfer could read that phantom million and dispense real money, causing catastrophic loss.',
          bn: 'Read Uncommitted ডার্টি রিডের বিরুদ্ধে কোনো সুরক্ষা দেয় না। কোনো একাউন্ট থেকে টাকা কাটার পর লেনদেনটি ব্যর্থ হলেও অন্য কেউ সেই কাঁচা ব্যালেন্স দেখে টাকা পাঠিয়ে দিলে চরম আর্থিক ক্ষতি হতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'saves-and-the-savepoint',
    title: {
      en: 'Savepoints & Nested Transactions: Partial Rollback Control',
      bn: 'সেভপয়েন্ট ও নেস্টেড ট্রানজ্যাকশন: আংশিক রোলব্যাক নিয়ন্ত্রণ'
    }
  }
};
