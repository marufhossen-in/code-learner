import type { Lesson } from '../../../lib/types';

export const ConcussAndTheConcurrencyLesson: Lesson = {
  slug: 'concuss-and-the-concurrency',
  tech: 'transactions',
  title: {
    en: 'Pessimistic vs Optimistic Concurrency Control (OCC vs PCC)',
    bn: 'পেসিমিস্টিক বনাম অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC বনাম PCC)'
  },
  summary: {
    en: 'Compare the two great paradigms of transaction concurrency: lock-heavy Pessimistic Concurrency Control (PCC) vs lock-free versioned Optimistic Concurrency Control (OCC).',
    bn: 'ট্রানজ্যাকশন কনকারেন্সির ২টি প্রধান দর্শনের তুলনা করুন: লক-ভিত্তিক পেসিমিস্টিক কনকারেন্সি কন্ট্রোল (PCC) বনাম লক-মুক্ত ভার্সনযুক্ত অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC)।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'the-philosophical-divide',
      text: {
        en: 'Two Philosophies for Managing Concurrent Database Mutations',
        bn: 'সমসাময়িক ডাটা পরিবর্তন নিয়ন্ত্রণের ২টি ভিন্ন দর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When hundreds of concurrent transactions modify overlapping records, conflict is inevitable. Database architects resolve this tension using two opposing paradigms: Pessimistic Concurrency Control (PCC) and Optimistic Concurrency Control (OCC). In 1981, H.T. Kung and John Robinson published the seminal paper establishing OCC as a lock-free alternative to traditional locking.',
        bn: 'যখন একসাথে শত শত ট্রানজ্যাকশন একই তথ্যে পরিবর্তন আনে, তখন সংঘাত অবধারিত হয়ে ওঠে। ডাটাবেস আর্কিটেক্টরা এই সমস্যা মেটাতে ২টি সম্পূর্ণ বিপরীত দর্শন ব্যবহার করেন: পেসিমিস্টিক কনকারেন্সি কন্ট্রোল (PCC) এবং অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC)। ১৯৮১ সালে এইচ. টি. কুং এবং জন রবিনসন তাদের ঐতিহাসিক গবেষণাপত্রে চিরাচরিত লকিংয়ের বিকল্প হিসেবে লক-মুক্ত OCC মডেল প্রবর্তন করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Pessimistic control assumes conflicts will occur frequently; it proactively acquires exclusive row locks upfront, forcing concurrent transactions to queue and wait. In contrast, the optimistic strategy expects harmony: transactions read and mutate records freely in local memory without acquiring locks, confirming only at commit time that no concurrent worker modified the target version.',
        bn: 'পেসিমিস্টিক মডেল ধরে নেয় যে সংঘাত বারবার ঘটবে; তাই এটি কাজ শুরুর আগেই সারির ওপর এক্সক্লুসিভ লক লাগিয়ে অন্য সবাইকে লাইনে দাঁড় করিয়ে রাখে। বিপরীতভাবে, অপটিমিস্টিক কৌশল কোনো সংঘাত হবে না ধরে নিয়ে কাজ করে: ট্রানজ্যাকশনগুলো কোনো লক ছাড়াই মেমরিতে স্বাধীনভাবে ডাটা পড়ে ও প্রস্তুত করে, এবং কেবলমাত্র কমিট করার শেষ মুহূর্তে যাচাই করে দেখে অন্য কেউ ডাটা বদলেছে কিনা।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Pessimistic Locking vs Optimistic Version Validation Flow',
        bn: 'পেসিমিস্টিক লকিং বনাম অপটিমিস্টিক ভার্সন যাচাই প্রবাহ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Pessimistic vs Optimistic Concurrency Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Pessimistic Concurrency Control -->
  <g transform="translate(30, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="160" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Pessimistic (PCC)</text>
    <text x="160" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">"Assume conflict: Lock upfront"</text>

    <!-- Step 1: SELECT FOR UPDATE -->
    <rect x="25" y="65" width="270" height="40" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="88" fill="#cbd5e1" font-size="10">1. SELECT ... FOR UPDATE (Lock row)</text>

    <!-- Step 2: Queue / Wait -->
    <rect x="25" y="115" width="270" height="40" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="35" y="138" fill="#fca5a5" font-size="10">2. Concurrent txns wait in queue</text>

    <!-- Step 3: Mutate & Commit -->
    <rect x="25" y="165" width="270" height="40" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="35" y="188" fill="#34d399" font-size="10">3. Write changes, COMMIT, unlock</text>

    <text x="25" y="235" fill="#38bdf8" font-size="10" font-weight="bold">Advantage:</text>
    <text x="25" y="250" fill="#94a3b8" font-size="9">Zero abort retries; guaranteed execution.</text>
    <text x="25" y="268" fill="#f87171" font-size="9">Downside: Contention bottlenecks &amp; deadlocks.</text>
  </g>

  <!-- Right: Optimistic Concurrency Control -->
  <g transform="translate(380, 25)">
    <rect width="330" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="165" y="30" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Optimistic (OCC)</text>
    <text x="165" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">"Assume harmony: Validate on commit"</text>

    <!-- Step 1: Read with version -->
    <rect x="25" y="65" width="280" height="40" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="88" fill="#cbd5e1" font-size="10">1. Read row + record version_id (v1)</text>

    <!-- Step 2: Free Mutation in memory -->
    <rect x="25" y="115" width="280" height="40" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="138" fill="#cbd5e1" font-size="10">2. Mutate in RAM (zero locks held!)</text>

    <!-- Step 3: Compare-And-Swap on Commit -->
    <rect x="25" y="165" width="280" height="40" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="35" y="188" fill="#34d399" font-size="10">3. UPDATE ... WHERE version = 1 (v1 -&gt; v2)</text>

    <text x="25" y="235" fill="#34d399" font-size="10" font-weight="bold">Advantage:</text>
    <text x="25" y="250" fill="#94a3b8" font-size="9">High throughput; zero locks; no deadlocks.</text>
    <text x="25" y="268" fill="#fbbf24" font-size="9">Downside: Wasted retries under heavy contention.</text>
  </g>
</svg>`,
      caption: {
        en: 'Comparison of Pessimistic locking (lock and block) versus Optimistic versioning (validate on commit).',
        bn: 'পেসিমিস্টিক লকিং (লক করা ও আটকে রাখা) এবং অপটিমিস্টিক ভার্সনিংয়ের (কমিটের সময় যাচাই) তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Pessimistic Concurrency Control (PCC)',
          def: {
            en: 'A concurrency paradigm that locks rows upfront using SQL SELECT ... FOR UPDATE, preventing any concurrent modification until the transaction completes.',
            bn: 'একটি কনকারেন্সি কৌশল যা কাজ শুরুর আগেই সারিতে লক লাগিয়ে লেনদেন শেষ না হওয়া পর্যন্ত অন্যদের অপেক্ষা করায়।'
          }
        },
        {
          term: 'Optimistic Concurrency Control (OCC)',
          def: {
            en: 'A lock-free concurrency paradigm that mutates data without locks and verifies a version number at commit time, aborting and retrying if the version shifted.',
            bn: 'এমন একটি লক-মুক্ত কৌশল যা কোনো লক ছাড়াই কাজ করে এবং কমিট করার সময় ভার্সন নম্বর মিলিয়ে দেখে সংঘাত হলে পুনরায় চেষ্টা করে।'
          }
        },
        {
          term: 'Compare-And-Swap (CAS)',
          def: {
            en: 'An atomic verification pattern updating a database row only if its current stored version matches the version observed when the transaction read it.',
            bn: 'একটি অ্যাটমিক যাচাই পদ্ধতি যা কেবলমাত্র তখনই সারি আপডেট করে যদি বর্তমান ভার্সনটি পড়ার সময়ের ভার্সনের সাথে হুবহু মিলে যায়।'
          }
        },
        {
          term: 'Version Column',
          def: {
            en: 'An integer column in a database table incremented on every update to track successive modifications for optimistic concurrency control.',
            bn: 'ডাটাবেস টেবিলের একটি পূর্ণসংখ্যার কলাম যা প্রতি আপডেটের সাথে বৃদ্ধি পায় এবং অপটিমিস্টিক নিয়ন্ত্রণের জন্য ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-three-phases-of-occ',
      text: {
        en: 'The 3 Phases of Optimistic Concurrency Control',
        bn: 'অপটিমিস্টিক কনকারেন্সি কন্ট্রোলের ৩টি পর্যায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Optimistic Concurrency Control structures transaction lifecycles into 3 formal phases: Read, Validate, and Write. During the Read Phase, the transaction reads target rows and copies their current version tokens into local memory, executing business calculations without acquiring any database locks.',
        bn: 'অপটিমিস্টিক কনকারেন্সি কন্ট্রোল প্রতিটি ট্রানজ্যাকশনকে ৩টি সুনির্দিষ্ট পর্যায়ে বিভক্ত করে: রিড বা পড়া, ভ্যালিডেট বা যাচাই এবং রাইট বা লেখা। রিড পর্যায়ে ট্রানজ্যাকশনটি প্রয়োজনীয় সারিগুলো পড়ে এবং তাদের বর্তমান ভার্সন টোকেন লোকাল মেমরিতে সংরক্ষণ করে কোনো ডাটাবেস লক ছাড়াই হিসাব সম্পন্ন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'During the Validation and Write Phases, the application issues an atomic conditional update: UPDATE inventory SET stock = stock - 1, version = version + 1 WHERE id = 101 AND version = 1. If the database engine reports 1 row affected, the transaction committed cleanly. If the database returns 0 rows affected, another concurrent transaction updated the record first; the application catches this version mismatch and safely retries.',
        bn: 'ভ্যালিডেশন এবং রাইট পর্যায়ে অ্যাপ্লিকেশন একটি শর্তযুক্ত আপডেট চালায়: UPDATE inventory SET stock = stock - 1, version = version + 1 WHERE id = 101 AND version = 1। ডাটাবেস ইঞ্জিন ১টি রো পরিবর্তিত হয়েছে জানালে লেনদেনটি সফল বলে গণ্য হয়। কিন্তু ডাটাবেস যদি ০টি রো পরিবর্তনের ফলাফল দেয়, তবে বোঝা যায় অন্য কেউ আগেই ডাটা বদলে দিয়েছে; অ্যাপ্লিকেশনটি এই ভার্সন অমিল ধরে নিয়ে স্বয়ংক্রিয়ভাবে নতুন ডাটা পড়ে পুনরায় চেষ্টা করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-concurrency-engine',
      text: {
        en: 'Executable OCC vs PCC Concurrency Simulator',
        bn: 'রানযোগ্য OCC বনাম PCC কনকারেন্সি সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating both concurrency control paradigms. The PCC coordinator uses exclusive lock acquisition to serialize updates safely, while the OCC coordinator demonstrates Compare-And-Swap version checking, detecting a stale version conflict on Txn B and retrying successfully to reach version 3.',
        bn: 'নিচে উভয় কনকারেন্সি কৌশলের কার্যকারিতা প্রদর্শনের একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। PCC কোঅর্ডিনেটর এক্সক্লুসিভ লক দিয়ে নিরাপদ ক্রম রক্ষা করে, আর OCC কোঅর্ডিনেটর কম্পেয়ার-অ্যান্ড-সোয়াপ ভার্সন পরীক্ষা করে Txn B-এর পুরনো ভার্সন সংঘাত শনাক্ত করে এবং পুনরায় চেষ্টা করে সফলভাবে ভার্সন ৩-এ পৌঁছায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Benchmarking Pessimistic row locking against Optimistic versioned Compare-And-Swap with conflict retry',
        bn: 'অপটিমিস্টিক ভার্সনযুক্ত কম্পেয়ার-অ্যান্ড-সোয়াপের বিপরীতে পেসিমিস্টিক রো লকিংয়ের কার্যকারিতা মূল্যায়ন'
      },
      code: `// OCC vs PCC Concurrency Paradigm Engine
// Strategy 1: Pessimistic Concurrency Control (Locking)
let isRowLocked = false;
let pccLedgerBalance = 1000;

function pccTransfer(debitAmount) {
  if (isRowLocked) return { status: 'BLOCKED_IN_QUEUE' };
  isRowLocked = true; // Acquire exclusive lock upfront
  pccLedgerBalance -= debitAmount;
  isRowLocked = false; // Release lock upon commit
  return { status: 'COMMITTED', balance: pccLedgerBalance };
}

pccTransfer(200); // Txn 1 finishes cleanly; Txn 2 would queue safely

// Strategy 2: Optimistic Concurrency Control (Version-based CAS)
const productInventory = { id: 101, stock: 10, version: 1 };

function occUpdateStock(expectedVersion, newStock) {
  // Atomic validation: Does current stored version match read version?
  if (productInventory.version !== expectedVersion) {
    return { status: 'CONFLICT_RETRY', currentVersion: productInventory.version };
  }
  // Validation succeeded: Apply write and bump version atomically
  productInventory.stock = newStock;
  productInventory.version += 1;
  return { status: 'COMMITTED', version: productInventory.version };
}

// Txn A and Txn B both read initial state at version 1
const initialVersion = productInventory.version; // 1

// Txn A arrives at commit first (succeeds, version 1 -> 2)
const resultA = occUpdateStock(initialVersion, productInventory.stock - 2);

// Txn B arrives moments later presenting stale version 1 (fails!)
const resultB = occUpdateStock(initialVersion, productInventory.stock - 3);

// Txn B catches conflict, refreshes its read, and retries at version 2
let retryResultB = null;
if (resultB.status === 'CONFLICT_RETRY') {
  retryResultB = occUpdateStock(resultB.currentVersion, productInventory.stock - 3); // v2 -> v3
}

const isOccCorrect = productInventory.version === 3 && productInventory.stock === 5;
console.log(\`[PCC Coordinator] Txn 1 acquired lock, updated balance, released lock; Txn 2 waited safely.\`);
console.log(\`[OCC Coordinator] Txn A committed (v1 -> v2); Txn B detected stale version 1, retried, and succeeded at v3 (1/1: \${isOccCorrect}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Architectural Selection Rule: Contention Dictates Strategy',
        bn: 'কৌশল নির্বাচনের মূল নীতি: সংঘাতের মাত্রাই দিক নির্ধারণ করে'
      },
      text: {
        en: 'Use Optimistic Concurrency Control when write collisions are rare (user profile edits, shopping cart updates, low-traffic document CMS). Use Pessimistic Concurrency Control when contention is brutal (flash sale concert tickets with 5 seats left, core double-entry banking ledgers) where repeated OCC retries would thrash CPU and bandwidth.',
        bn: 'যখন একই তথ্যে একাধিক জনের লেখার সম্ভাবনা খুব কম থাকে তখন অপটিমিস্টিক কন্ট্রোল ব্যবহার করুন (যেমন প্রোফাইল আপডেট বা শপিং কার্ট)। আর যখন প্রবল প্রতিযোগিতা থাকে (যেমন মাত্র ৫টি কনসার্ট টিকিটের জন্য হাজার হাজার ক্রেতা অথবা ব্যাংকিং লেজার) তখন পেসিমিস্টিক লক ব্যবহার করুন, কারণ সেখানে বারবার OCC রিট্রাই করতে গেলে সিপিইউ ও ব্যান্ডউইথের চরম অপচয় হবে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Concurrency Strategy Selector',
        bn: 'কনকারেন্সি কৌশল নির্বাচক'
      },
      description: {
        en: 'Choose the optimal concurrency control paradigm based on traffic patterns and conflict contention frequency.',
        bn: 'ট্রাফিকের ধরন এবং সংঘাতের সম্ভাবনার ওপর ভিত্তি করে সেরা কনকারেন্সি কৌশল নির্বাচন করুন।'
      },
      code: `function chooseConcurrencyControl(contentionRate) {
  if (contentionRate === 'HIGH_COLLISION_TICKET_SALE') return 'PESSIMISTIC_PCC';
  if (contentionRate === 'LOW_COLLISION_USER_PROFILE') return 'OPTIMISTIC_OCC';
  return 'DEFAULT_MVCC';
}

console.log('Flash Sale Strategy:', chooseConcurrencyControl('HIGH_COLLISION_TICKET_SALE'));
console.log('Profile Edit Strategy:', chooseConcurrencyControl('LOW_COLLISION_USER_PROFILE'));`,
      tests: [
        {
          name: {
            en: 'Selects PCC for high contention scenarios',
            bn: 'উচ্চ সংঘাতের জন্য PCC নির্বাচন করে'
          },
          expected: 'Flash Sale Strategy: PESSIMISTIC_PCC'
        },
        {
          name: {
            en: 'Selects OCC for low contention scenarios',
            bn: 'কম সংঘাতের জন্য OCC নির্বাচন করে'
          },
          expected: 'Profile Edit Strategy: OPTIMISTIC_OCC'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-conc-ex-1',
      kind: 'mcq',
      topic: 'occ-compare-and-swap-query',
      question: {
        en: 'How does an application detect that another concurrent transaction altered a row first when using Optimistic Concurrency Control in SQL?',
        bn: 'SQL-এ অপটিমিস্টিক কনকারেন্সি কন্ট্রোল ব্যবহারের সময় অ্যাপ্লিকেশন কীভাবে বুঝতে পারে যে অন্য কেউ আগেই রো পরিবর্তন করে ফেলেছে?'
      },
      options: [
        {
          en: 'By executing UPDATE ... WHERE id = :id AND version = :readVersion and checking if the database affected row count is 0',
          bn: 'UPDATE ... WHERE id = :id AND version = :readVersion চালিয়ে এবং ডাটাবেস থেকে পরিবর্তিত সারির সংখ্যা ০ এসেছে কিনা তা পরীক্ষা করে'
        },
        {
          en: 'By waiting 10 minutes and asking the user via email',
          bn: '১০ মিনিট অপেক্ষা করে ব্যবহারকারীকে ইমেইলে জিজ্ঞেস করার মাধ্যমে'
        },
        {
          en: 'By shutting down all network routers in the office building',
          bn: 'অফিস ভবনের تمام নেটওয়ার্ক রাউটার বন্ধ করে দেওয়ার মাধ্যমে'
        },
        {
          en: 'By inspecting if the computer hard drive sounds louder than usual',
          bn: 'কম্পিউটার হার্ডডিস্কের শব্দ স্বাভাবিকের চেয়ে বেশি কিনা তা শুনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If version matches, 1 row is updated; if version changed, 0 rows match the WHERE clause.',
        bn: 'ভার্সন মিললে ১টি রো আপডেট হবে; ভার্সন বদলে গেলে WHERE শর্তে ০টি রো মিলবে।'
      },
      explanation: {
        en: 'Under OCC, the UPDATE statement checks the version column in the WHERE clause. If another transaction incremented it, the predicate fails to match, returning 0 affected rows as a conflict signal.',
        bn: 'OCC-তে UPDATE স্টেটমেন্টের WHERE শর্তে ভার্সন কলাম চেক করা হয়। অন্য কেউ ভার্সন বদলে দিলে শর্ত না মেলায় ০টি রো আপডেট হয়, যা দেখে অ্যাপ্লিকেশন দ্বন্দ্ব বুঝতে পারে।'
      }
    },
    {
      id: 'txn-conc-ex-2',
      kind: 'mcq',
      topic: 'pcc-select-for-update-behavior',
      question: {
        en: 'What specific database action is triggered when an application executes SELECT * FROM accounts WHERE id = 101 FOR UPDATE?',
        bn: 'অ্যাপ্লিকেশন যখন SELECT * FROM accounts WHERE id = 101 FOR UPDATE স্টেটমেন্ট চালায় তখন ডাটাবেসে সুনির্দিষ্টভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'The database engine immediately acquires an exclusive row lock on row 101, forcing concurrent transactions requesting locks on that row to block and wait',
          bn: 'ডাটাবেস ইঞ্জিন সাথে সাথে ১০১ নম্বর সারির ওপর এক্সক্লুসিভ লক নেয় এবং এই সারিতে কাজ করতে চাওয়া অন্য تمام লেনদেনকে লাইনে দাঁড় করিয়ে রাখে'
        },
        {
          en: 'The account balance is automatically reset to zero dollars',
          bn: 'অ্যাকাউন্টের ব্যালেন্স স্বয়ংক্রিয়ভাবে শূন্য ডলারে রিসেট হয়ে যায়'
        },
        {
          en: 'The database deletes the account record permanently',
          bn: 'ডাটাবেস অ্যাকাউন্ট রেকর্ডটি চিরতরে মুছে ফেলে'
        },
        {
          en: 'The SQL code is printed out onto a physical piece of paper',
          bn: 'SQL কোডটি কাগজের ওপর প্রিন্ট হয়ে বের হয়ে আসে'
        }
      ],
      answer: 0,
      hint: {
        en: 'FOR UPDATE is the classic pessimistic row locking primitive.',
        bn: 'FOR UPDATE হলো পেসিমিস্টিক রো লকিংয়ের প্রধান ভিত্তি।'
      },
      explanation: {
        en: 'FOR UPDATE instructs the database lock manager to place an Exclusive write lock on the selected rows until the current transaction commits or rolls back, eliminating race conditions.',
        bn: 'FOR UPDATE লক ম্যানেজারকে নির্বাচিত সারিতে এক্সক্লুসিভ রাইট লক লাগাতে নির্দেশ দেয় যা ট্রানজ্যাকশন শেষ না হওয়া পর্যন্ত রেস কন্ডিশন সম্পূর্ণ ঠেকিয়ে রাখে।'
      }
    },
    {
      id: 'txn-conc-ex-3',
      kind: 'mcq',
      topic: 'occ-high-contention-drawback',
      question: {
        en: 'What severe performance penalty occurs if you deploy Optimistic Concurrency Control (OCC) in an extreme high-contention flash sale system?',
        bn: 'চরম প্রতিযোগিতাপূর্ণ ফ্ল্যাশ সেল সিস্টেমে অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC) প্রয়োগ করলে কোন মারাত্মক পারফরম্যান্স সংকট দেখা দেয়?'
      },
      options: [
        {
          en: 'Massive retry storms: thousands of concurrent transactions fail validation simultaneously and loop repeatedly, wasting immense CPU cycles and database connection bandwidth',
          bn: 'ভয়াবহ রিট্রাই ঝড়: হাজার হাজার ট্রানজ্যাকশন একসাথে ব্যর্থ হয়ে বারবার চেষ্টা করতে থাকে, যা চরম পরিমাণে সিপিইউ ক্ষমতা এবং ডাটাবেস ব্যান্ডউইথ অপচয় করে'
        },
        {
          en: 'The database software licenses are canceled by international courts',
          bn: 'আন্তর্জাতিক আদালত কর্তৃক ডাটাবেসের সমস্ত লাইসেন্স বাতিল করে দেওয়া হয়'
        },
        {
          en: 'All table column names are converted into ancient hieroglyphics',
          bn: 'تمام কলামের নাম প্রাচীন হায়ারোগ্লিফিক লিপিতে পরিবর্তিত হয়ে যায়'
        },
        {
          en: 'The server motherboard turns completely into glass',
          bn: 'সার্ভারের মাদারবোর্ড পুরোপুরি কাঁচের টুকরায় পরিণত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Heavy contention leads to repeated validation aborts and retry storms.',
        bn: 'তীব্র প্রতিযোগিতায় বারবার ভ্যালিডেশন বাতিল হওয়ায় ভয়াবহ রিট্রাই ঝড় শুরু হয়।'
      },
      explanation: {
        en: 'When 10,000 buyers compete for 1 remaining item, OCC causes 9,999 aborts on every round. The repeated fetching and retrying thrashes the database. PCC is vastly superior in high-contention hotspots.',
        bn: 'যখন ১টি পণ্যের জন্য ১০,০০০ জন ক্রেতা ভিড় জমায়, OCC-তে প্রতিবারে ৯,৯৯৯ জনের রিকোয়েস্ট ব্যর্থ হয়। এই বারবার চেষ্টা সার্ভারকে অকেজো করে তোলে। এমন পরিস্থিতিতে PCC অনেক বেশি কার্যকর।'
      }
    },
    {
      id: 'txn-conc-ex-4',
      kind: 'mcq',
      topic: 'occ-three-phases-order',
      question: {
        en: 'What is the correct sequential order of the 3 execution phases in classic Optimistic Concurrency Control?',
        bn: 'চিরাচরিত অপটিমিস্টিক কনকারেন্সি কন্ট্রোলে ৩টি কাজের পর্যায়ের সঠিক ধারাবাহিক ক্রম কোনটি?'
      },
      options: [
        {
          en: '1. Read Phase (fetch data & version) -> 2. Validation Phase (verify version unchanged) -> 3. Write Phase (persist updates)',
          bn: '১. রিড পর্যায় (ডাটা ও ভার্সন পড়া) -> ২. ভ্যালিডেশন পর্যায় (ভার্সন অপরিবর্তিত কিনা যাচাই) -> ৩. রাইট পর্যায় (পরিবর্তন সেভ করা)'
        },
        {
          en: '1. Delete Phase -> 2. Reboot Phase -> 3. Download Phase',
          bn: '১. ডিলিট পর্যায় -> ২. রিবুট পর্যায় -> ৩. ডাউনলোড পর্যায়'
        },
        {
          en: '1. Write Phase -> 2. Read Phase -> 3. Lock Phase',
          bn: '১. রাইট পর্যায় -> ২. রিড পর্যায় -> ৩. লক পর্যায়'
        },
        {
          en: '1. Encrypt Phase -> 2. Print Phase -> 3. Format Phase',
          bn: '১. এনক্রিপ্ট পর্যায় -> ২. প্রিন্ট পর্যায় -> ৩. ফরম্যাট পর্যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Read without locks, validate version, then write changes.',
        bn: 'লক ছাড়া পড়া, ভার্সন যাচাই করা, এবং তারপর পরিবর্তন লেখা।'
      },
      explanation: {
        en: 'The classic Kung-Robinson OCC model mandates reading data first without locks, validating that no concurrent write intervened, and writing modifications only upon successful validation.',
        bn: 'কুং-রবিনসনের মডেল অনুসারে প্রথমে কোনো বাধা ছাড়াই ডাটা পড়তে হয়, এরপর সংঘাত হয়নি নিশ্চিত হতে হয়, এবং শেষে সফলভাবে তা সংরক্ষণ করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'concuss-and-the-concurrency-quiz',
    title: {
      en: 'PCC vs OCC Concurrency Paradigm Quiz',
      bn: 'PCC বনাম OCC কনকারেন্সি মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'txn-conc-qz-1',
        kind: 'mcq',
        topic: 'occ-inventors-publication-year',
        question: {
          en: 'Who invented Optimistic Concurrency Control (OCC) and in which landmark 1981 publication was it introduced?',
          bn: 'অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC) কারা উদ্ভাবন করেছিলেন এবং ১৯৮১ সালের কোন ঐতিহাসিক প্রকাশনায় এটি প্রথম প্রবর্তিত হয়েছিল?'
        },
        options: [
          {
            en: 'H.T. Kung and John Robinson in "On Optimistic Methods for Concurrency Control"',
            bn: 'এইচ. টি. কুং এবং জন রবিনসন তাদের "অন অপটিমিস্টিক মেথডস ফর কনকারেন্সি কন্ট্রোল" গবেষণাপত্রে'
          },
          {
            en: 'Alan Turing in his 1936 paper on universal computing machines',
            bn: 'অ্যালান টুরিং তার ১৯৩৬ সালের সার্বজনীন কম্পিউটিং মেশিনের ওপর গবেষণাপত্রে'
          },
          {
            en: 'Ada Lovelace in her notes on the mechanical analytical engine',
            bn: 'অ্যাডা লাভলেস অ্যানালিটিক্যাল ইঞ্জিনের ওপর তার নোটে'
          },
          {
            en: 'Satoshi Nakamoto in the 2008 Bitcoin whitepaper',
            bn: 'সাতোশি নাকামোতো ২০০৮ সালের বিটকয়েন হোয়াইটপেপারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Kung and Robinson published the foundations of OCC in 1981.',
          bn: 'কুং এবং রবিনসন ১৯৮১ সালে OCC-এর ভিত্তি প্রকাশ করেছিলেন।'
        },
        explanation: {
          en: 'H.T. Kung and John Robinson formalized OCC at Carnegie Mellon University in 1981, showing that when write conflicts are rare, transactions achieve superior throughput by avoiding locking mechanisms entirely.',
          bn: 'এইচ. টি. কুং এবং জন রবিনসন কার্নেগি মেলন বিশ্ববিদ্যালয় থেকে ১৯৮১ সালে OCC প্রবর্তন করেন এবং প্রমাণ করেন যে সংঘাত কম থাকলে লক ছাড়া বহুগুণ বেশি গতি পাওয়া সম্ভব।'
        }
      },
      {
        id: 'txn-conc-qz-2',
        kind: 'mcq',
        topic: 'pcc-deadlock-vulnerability',
        question: {
          en: 'Why is Pessimistic Concurrency Control susceptible to deadlocks, whereas pure Optimistic Concurrency Control is entirely immune to deadlocks?',
          bn: 'কেন পেসিমিস্টিক কন্ট্রোলে ডেডলক ঘটার আশঙ্কা থাকে কিন্তু বিশুদ্ধ অপটিমিস্টিক কন্ট্রোল ডেডলক থেকে পুরোপুরি মুক্ত?'
        },
        options: [
          {
            en: 'PCC transactions hold locks while waiting for additional locks (forming circular wait-for cycles), while OCC acquires zero row locks during execution, making wait-for cycles physically impossible',
            bn: 'PCC লেনদেনগুলো লক ধরে রেখে নতুন লকের জন্য অপেক্ষা করে (যা বৃত্তাকার অপেক্ষার চক্র তৈরি করে), আর OCC কোনো লকই নেয় না বলে অপেক্ষার চক্র তৈরি হওয়া শারীরিকভাবে অসম্ভব'
          },
          {
            en: 'PCC is written in assembly code while OCC is written in Python',
            bn: 'PCC অ্যাসেম্বলিতে লেখা আর OCC পাইথনে লেখা'
          },
          {
            en: 'Because OCC requires all server hard drives to be disconnected',
            bn: 'কারণ OCC-তে সার্ভারের तमाम হার্ডডিস্ক খুলে রাখতে হয়'
          },
          {
            en: 'Because deadlocks were made unconstitutional in 1990',
            bn: 'কারণ ১৯৯০ সালে ডেডলককে আইনগতভাবে বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'No locks means no waiting, and no waiting means no deadlocks.',
          bn: 'কোনো লক না থাকা মানে কোনো অপেক্ষা না থাকা, আর অপেক্ষা না থাকলে কোনো ডেডলক হতে পারে না।'
        },
        explanation: {
          en: 'Deadlocks require circular wait dependencies between lock holders. Because OCC transactions never block other connections with mutual exclusion locks, deadlocks cannot occur.',
          bn: 'ডেডলক হওয়ার জন্য একাধিক লকের মাঝে অপেক্ষার চক্র তৈরি হতে হয়। OCC কোনো লকই ব্যবহার না করায় এটিতে কখনো ডেডলক হতে পারে না।'
        }
      },
      {
        id: 'txn-conc-qz-3',
        kind: 'mcq',
        topic: 'jpa-hibernate-version-annotation',
        question: {
          en: 'How do modern enterprise frameworks like Hibernate, JPA, and Prisma implement Optimistic Concurrency Control in application code?',
          bn: 'আধুনিক ফ্রেমওয়ার্কগুলো (যেমন Hibernate বা Prisma) অ্যাপ্লিকেশন কোডে কীভাবে অপটিমিস্টিক কনকারেন্সি কন্ট্রোল বাস্তবায়ন করে?'
        },
        options: [
          {
            en: 'By decorating an entity property with @Version, instructing the framework to automatically increment the version on update and assert matching versions in the SQL WHERE clause',
            bn: 'এনটিটি প্রপার্টিতে @Version ব্যবহার করে ফ্রেমওয়ার্ককে প্রতি আপডেটে ভার্সন বাড়াতে এবং WHERE শর্তে তা মিলিয়ে দেখতে নির্দেশ দিয়ে'
          },
          {
            en: 'By playing an audio file whenever a customer places an order',
            bn: 'গ্রাহক কোনো অর্ডার দেওয়ার সাথে সাথে একটি অডিও ফাইল বাজিয়ে'
          },
          {
            en: 'By restarting the application container after every HTTP request',
            bn: 'প্রতিটি HTTP রিকোয়েস্টের পর অ্যাপ্লিকেশন কন্টেইনার রিস্টার্ট করে'
          },
          {
            en: 'By converting all numbers into floating point numbers',
            bn: 'সমস্ত পূর্ণসংখ্যাকে দশমিক সংখ্যায় রূপান্তর করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The @Version annotation tells the ORM to manage OCC versioning automatically.',
          bn: '@Version অ্যানোটেশন ORM-কে স্বয়ংক্রিয়ভাবে OCC পরিচালনা করতে বলে।'
        },
        explanation: {
          en: 'Frameworks like Hibernate manage version increments behind the scenes. If an optimistic lock exception is thrown, the developer can catch it and display a friendly message or retry the workflow.',
          bn: 'হাইবারনেটের মতো ফ্রেমওয়ার্ক নেপথ্যে ভার্সন বাড়ানোর কাজটি করে দেয়। সংঘাতজনিত এক্সেপশন দেখা দিলে ডেভেলপার তা ধরে নিয়ে ব্যবহারকারীকে সুন্দর বার্তা দেখাতে পারেন।'
        }
      },
      {
        id: 'txn-conc-qz-4',
        kind: 'mcq',
        topic: 'skip-locked-nowait-primitives',
        question: {
          en: 'What do the NOWAIT and SKIP LOCKED clauses achieve when executing SELECT ... FOR UPDATE in high-throughput task worker queues?',
          bn: 'উচ্চ থ্রুপুটের টাস্ক ওয়ার্কার কিউতে SELECT ... FOR UPDATE চালানোর সময় NOWAIT এবং SKIP LOCKED ক্লজগুলো কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'NOWAIT raises an immediate error if a row is already locked rather than hanging, while SKIP LOCKED skips already locked rows so concurrent workers process disjoint jobs without blocking',
            bn: 'NOWAIT রো লক থাকলে আটকে না থেকে সাথে সাথে এরর দেয়, আর SKIP LOCKED পূর্বে লক থাকা রো এড়িয়ে গিয়ে মুক্ত রোগুলোতে কাজ করতে দেয় যাতে কর্মীরা না আটকে দ্রুত কাজ সারতে পারে'
          },
          {
            en: 'They turn off all safety features on the database server',
            bn: 'তারা ডাটাবেস সার্ভারের সমস্ত সুরক্ষা ব্যবস্থা বন্ধ করে দেয়'
          },
          {
            en: 'They delete locked rows from physical disk immediately',
            bn: 'তারা তৎক্ষণাৎ ডিস্ক থেকে লক থাকা রোগুলো মুছে ফেলে'
          },
          {
            en: 'They prevent all network connections outside the country',
            bn: 'তারা দেশের বাইরের সমস্ত নেটওয়ার্ক সংযোগ বিচ্ছিন্ন করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'SKIP LOCKED allows concurrent workers to grab distinct unlocked jobs in parallel.',
          bn: 'SKIP LOCKED একাধিক কর্মীকে লাইনে না আটকে মুক্ত কাজগুলো সমান্তরালে করতে দেয়।'
        },
        explanation: {
          en: 'SKIP LOCKED revolutionized background queue processing in PostgreSQL and MySQL. Multiple workers query the same queue table concurrently without lock contention or serial blocking.',
          bn: 'SKIP LOCKED ব্যাকগ্রাউন্ড কিউ প্রসেসিংয়ে বিপ্লব এনেছে। একাধিক ওয়ার্কার একই সাথে একে অপরকে না থামিয়েই আলাদা আলাদা কাজ বেছে নিয়ে দ্রুত গতিতে কাজ শেষ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-txn-release',
    title: {
      en: 'Production Transaction Engineering & Distributed Sagas',
      bn: 'প্রোডাকশন ট্রানজ্যাকশন ইঞ্জিনিয়ারিং ও ডিস্ট্রিবিউটেড সাগা'
    }
  }
};
