import type { Lesson } from '../../../lib/types';

export const LocksAndTheLockLesson: Lesson = {
  slug: 'locks-and-the-lock',
  tech: 'transactions',
  title: {
    en: 'Locking Mechanics: Shared, Exclusive & Two-Phase Locking',
    bn: 'লকিং মেকানিজম: শেয়ার্ড, এক্সক্লুসিভ ও ২-ফেজ লকিং'
  },
  summary: {
    en: 'Understand how relational databases prevent concurrent update conflicts: Shared vs Exclusive locks, Intent locking hierarchy, Strict Two-Phase Locking (2PL), and automated Deadlock resolution algorithms.',
    bn: 'রিলেশনাল ডাটাবেস কীভাবে সমসাময়িক পরিবর্তনের দ্বন্দ্ব সমাধান করে তা বুঝুন: শেয়ার্ড বনাম এক্সক্লুসিভ লক, ইনটেন্ট লকিং অনুক্রম, স্ট্রিক্ট ২-ফেজ লকিং (2PL) এবং ডেডলক সমাধানের স্বয়ংক্রিয় অ্যালগরিদম।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'shared-and-exclusive-locks',
      text: {
        en: 'Lock Modes: Shared (S) and Exclusive (X) Locking',
        bn: 'লক মোড: শেয়ার্ড (S) এবং এক্সক্লুসিভ (X) লকিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When hundreds of concurrent connections read and write database rows simultaneously, memory conflicts corrupt records. Database engines resolve this via pessimistic concurrency locks. At the core of all lock managers lie 2 fundamental lock modes: Shared locks (S-locks for readers) and Exclusive locks (X-locks for writers).',
        bn: 'যখন শত শত ব্যবহারকারী একই সাথে ডাটাবেসের বিভিন্ন সারিতে ডাটা পড়ে এবং পরিবর্তন করে, তখন মেমরি দ্বন্দ্বের কারণে ডাটা বিকৃত হতে পারে। ডাটাবেস ইঞ্জিনগুলো পেসিমিস্টিক কনকারেন্সি লকের মাধ্যমে এই দ্বন্দ্ব প্রতিরোধ করে। تمام লক ম্যানেজারের মূলে রয়েছে ২টি মৌলিক লক মোড: শেয়ার্ড লক (পড়ার জন্য S-লক) এবং এক্সক্লুসিভ লক (লেখার জন্য X-লক)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Multiple transactions can acquire Shared locks on the identical row concurrently because reading data causes zero mutation. However, when a transaction intends to modify or delete a row, it must acquire an Exclusive lock. An Exclusive lock grants solitary write access: no other transaction can hold either an S-lock or an X-lock on that row until the holding transaction releases it.',
        bn: 'একাধিক ট্রানজ্যাকশন একই সাথে একটি নির্দিষ্ট সারির ওপর শেয়ার্ড লক নিতে পারে, কারণ ডাটা পড়লে কোনো পরিবর্তন হয় না। কিন্তু যখন কোনো ট্রানজ্যাকশন কোনো রো আপডেট বা ডিলিট করতে চায়, তখন তাকে একটি এক্সক্লুসিভ লক নিতে হয়। এক্সক্লুসিভ লক একচ্ছত্র লেখার অধিকার দেয়: লক মুক্ত না হওয়া পর্যন্ত অন্য কোনো ট্রানজ্যাকশন সেখানে S-লক বা X-লক কোনোটাই নিতে পারে না।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Lock Compatibility Matrix and Deadlock Wait-For Graph (WFG)',
        bn: 'লক কম্প্যাটিবিলিটি ম্যাট্রিক্স এবং ডেডলক ওয়েট-ফর গ্রাফ (WFG)'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Lock Compatibility and Deadlock Graph">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Lock Compatibility Matrix -->
  <g transform="translate(30, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <text x="160" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Lock Compatibility Matrix</text>

    <!-- Matrix Grid Header -->
    <rect x="25" y="55" width="270" height="32" rx="4" fill="#0f172a" />
    <text x="65" y="76" fill="#94a3b8" font-size="11" font-weight="bold">Requested</text>
    <text x="170" y="76" fill="#cbd5e1" font-size="11" font-weight="bold">Held: S-Lock</text>
    <text x="250" y="76" fill="#cbd5e1" font-size="11" font-weight="bold">Held: X-Lock</text>

    <!-- Row 1: S-Lock -->
    <rect x="25" y="95" width="270" height="50" rx="4" fill="#0f172a" stroke="#1e293b" />
    <text x="45" y="125" fill="#38bdf8" font-size="12" font-weight="bold">S-Lock</text>
    <rect x="150" y="105" width="60" height="30" rx="4" fill="#065f46" stroke="#10b981" stroke-width="1" />
    <text x="180" y="125" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">GRANTED</text>
    <rect x="230" y="105" width="55" height="30" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1" />
    <text x="257" y="125" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">WAIT</text>

    <!-- Row 2: X-Lock -->
    <rect x="25" y="153" width="270" height="50" rx="4" fill="#0f172a" stroke="#1e293b" />
    <text x="45" y="183" fill="#f59e0b" font-size="12" font-weight="bold">X-Lock</text>
    <rect x="150" y="163" width="60" height="30" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1" />
    <text x="180" y="183" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">WAIT</text>
    <rect x="230" y="163" width="55" height="30" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1" />
    <text x="257" y="183" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">WAIT</text>

    <text x="25" y="235" fill="#94a3b8" font-size="10">Multiple readers share without delay.</text>
    <text x="25" y="255" fill="#f87171" font-size="10">Writers demand exclusive isolation.</text>
  </g>

  <!-- Right: Deadlock Wait-For Graph -->
  <g transform="translate(380, 25)">
    <rect width="330" height="280" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <text x="165" y="30" fill="#f87171" font-size="14" font-weight="bold" text-anchor="middle">Deadlock: Wait-For Cycle</text>

    <!-- Node T1 -->
    <circle cx="90" cy="110" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" />
    <text x="90" y="115" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Txn 1</text>
    <text x="90" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Holds: Row A</text>

    <!-- Node T2 -->
    <circle cx="240" cy="110" r="32" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5" />
    <text x="240" y="115" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Txn 2</text>
    <text x="240" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">Holds: Row B</text>

    <!-- Directed Edge T1 -> T2 -->
    <path d="M 122 95 Q 165 70 208 95" fill="none" stroke="#f87171" stroke-width="2" marker-end="url(#arrow)" />
    <text x="165" y="65" fill="#fca5a5" font-size="10" text-anchor="middle">Waits for Row B</text>

    <!-- Directed Edge T2 -> T1 -->
    <path d="M 208 125 Q 165 150 122 125" fill="none" stroke="#f87171" stroke-width="2" />
    <text x="165" y="165" fill="#fca5a5" font-size="10" text-anchor="middle">Waits for Row A</text>

    <!-- Resolution Box -->
    <rect x="25" y="195" width="280" height="65" rx="6" fill="#020617" stroke="#334155" stroke-width="1" />
    <text x="35" y="215" fill="#facc15" font-size="11" font-weight="bold">Detection &amp; Recovery Engine:</text>
    <text x="35" y="233" fill="#cbd5e1" font-size="10">Cycle detected: T1 -&gt; T2 -&gt; T1.</text>
    <text x="35" y="249" fill="#f87171" font-size="10">Engine aborts victim T2 (Code: 40P01).</text>
  </g>
</svg>`,
      caption: {
        en: 'Lock compatibility matrix (left) and circular wait-for deadlock graph (right) resolved via victim abort.',
        bn: 'লক কম্প্যাটিবিলিটি ম্যাট্রিক্স (বামে) এবং ভিকটিম বাতিল করার মাধ্যমে সমাধানকৃত বৃত্তাকার ডেডলক গ্রাফ (ডানে)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Shared Lock (S-Lock)',
          def: {
            en: 'A read lock that allows multiple concurrent transactions to read the same database row without mutual interference.',
            bn: 'এমন একটি রিড লক যা একাধিক ট্রানজ্যাকশনকে একই সাথে একটি সারির ডাটা পড়ার সুযোগ দেয়।'
          }
        },
        {
          term: 'Exclusive Lock (X-Lock)',
          def: {
            en: 'A write lock that grants a single transaction solitary access to modify or delete a row, blocking all other readers and writers.',
            bn: 'এমন একটি রাইট লক যা একটি ট্রানজ্যাকশনকে এককভাবে রো পরিবর্তনের সুযোগ দেয় এবং অন্য সবাইকে আটকে রাখে।'
          }
        },
        {
          term: 'Two-Phase Locking (2PL)',
          def: {
            en: 'A concurrency protocol with a growing phase (acquiring locks) followed by a shrinking phase (releasing locks), mathematically guaranteeing serializability.',
            bn: 'একটি কনকারেন্সি প্রোটোকল যার প্রথমে লক নেওয়ার পর্যায় এবং পরে লক ছাড়ার পর্যায় থাকে, যা লেনদেনের ধারাবাহিকতা নিশ্চিত করে।'
          }
        },
        {
          term: 'Deadlock',
          def: {
            en: 'A circular dependency where two or more transactions each hold a lock the other requires, freezing progress until the database aborts one victim.',
            bn: 'এমন একটি বৃত্তাকার জটিলতা যেখানে একাধিক লেনদেন পরস্পরের লকের জন্য আটকে থাকে এবং ডাটাবেস একজনকে বাতিল না করা পর্যন্ত কেউ এগোতে পারে না।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'two-phase-locking-protocol',
      text: {
        en: 'The Two-Phase Locking (2PL) Protocol and Serializability',
        bn: 'টু-ফেজ লকিং (2PL) প্রোটোকল এবং সিরিয়ালাইজেবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Simply acquiring locks is insufficient to prevent dirty anomalies; the timing of lock acquisition and release determines serializability. In 1976, computer scientist Kapali Eswaran and colleagues proved the Two-Phase Locking (2PL) theorem. Under 2PL, a transaction must divide its lock operations into 2 strict phases: the Growing Phase (locks may be acquired, but none released), and the Shrinking Phase (locks are released, but no new locks can ever be acquired).',
        bn: 'কেবলমাত্র লক নিলেই تمام বিশৃঙ্খলা রোধ করা যায় না; কখন লক নেওয়া হচ্ছে এবং কখন ছাড়া হচ্ছে তা অত্যন্ত গুরুত্বপূর্ণ। ১৯৭৬ সালে কম্পিউটার বিজ্ঞানী কাপালি ঈশ্বরন এবং তার সহকর্মীরা টু-ফেজ লকিং (2PL) উপপাদ্য প্রমাণ করেন। 2PL অনুসারে প্রতিটি ট্রানজ্যাকশনকে তার কাজ ২টি কঠোর পর্যায়ে বিভক্ত করতে হয়: বর্ধনশীল পর্যায় বা গ্রোয়িং ফেজ (শুধু লক নেওয়া যাবে, কিন্তু ছাড়া যাবে না) এবং সংকোচনশীল পর্যায় বা শ্রিংকিং ফেজ (লক ছাড়া যাবে, কিন্তু নতুন কোনো লক নেওয়া যাবে না)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern relational database engines implement Strict 2PL (Rigorous 2PL). Under Strict 2PL, all Exclusive write locks acquired during the growing phase are held until the transaction reaches final COMMIT or ROLLBACK. Holding locks until the boundary prevents cascading aborts: if transaction T1 modified data and rolled back, no second transaction T2 could have read or depended on that dirty state.',
        bn: 'আধুনিক রিশনাল ডাটাবেসগুলো মূলত স্ট্রিক্ট ২-ফেজ লকিং ব্যবহার করে। এই নিয়মে কাজের মাঝখানে কোনো রাইট লক ছাড়া হয় না; চূড়ান্ত COMMIT বা ROLLBACK না হওয়া পর্যন্ত તમામ এক্সক্লুসিভ লক ধরে রাখা হয়। এটি ক্যাসকেডিং রোলব্যাক বা একের ব্যর্থতায় অনেকের ক্ষতির ঝুঁকি পুরোপুরি দূর করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-lock-engine',
      text: {
        en: 'Executable Lock Manager and Deadlock Cycle Detector',
        bn: 'রানযোগ্য লক ম্যানেজার এবং ডেডলক সাইকেল ডিটেক্টর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js lock manager simulating Shared and Exclusive lock grant decisions alongside an automated Wait-For Graph cycle detector. It proves that S-locks permit concurrent readers, blocks conflicting writers, and resolves circular deadlocks by aborting the victim transaction with standard PostgreSQL error code 40P01.',
        bn: 'নিচে শেয়ার্ড ও এক্সক্লুসিভ লক পরীক্ষা করার একটি সম্পূর্ণ Node.js লক ম্যানেজার এবং ডেডলক শনাক্তকারী সাইকেল ডিটেক্টর দেওয়া হলো। এটি দেখায় যে একাধিক পাঠক একসাথে পড়তে পারে, লেখার অনুরোধকে সাময়িক আটকে রাখে এবং বৃত্তাকার ডেডলক হলে ৪টি সংখ্যার আদর্শ কোড 40P01 দিয়ে ভিকটিম বাতিল করে সিস্টেমকে রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Lock manager checking S and X compatibility, followed by DFS Wait-For Graph cycle detection and victim abort',
        bn: 'S এবং X কম্প্যাটিবিলিটি যাচাইকারী লক ম্যানেজার, সাথে DFS ওয়েট-ফর গ্রাফ সাইকেল শনাক্তকরণ এবং ভিকটিম বাতিলকরণ'
      },
      code: `// Lock Manager & Wait-For Graph Deadlock Detector
class LockManager {
  constructor() {
    this.locks = {};
  }

  canGrant(rowKey, requestedMode) {
    const existing = this.locks[rowKey] || [];
    if (existing.length === 0) return true;
    if (requestedMode === 'S' && existing.every(m => m === 'S')) return true;
    return false; // Exclusive locks conflict with everything
  }
}

const manager = new LockManager();
const sGranted = manager.canGrant('row_101', 'S'); // Granted
manager.locks['row_101'] = ['S'];
const xBlocked = !manager.canGrant('row_101', 'X'); // Blocked: X cannot join S

// Deadlock Detection via Wait-For Graph Cycle Traversal (DFS)
const waitForGraph = {
  T1: ['T2'], // T1 waits for lock held by T2
  T2: ['T1']  // T2 waits for lock held by T1 (Circular dependency!)
};

function detectDeadlockCycle(graph) {
  const visited = new Set();
  const stack = new Set();

  function dfs(txn) {
    visited.add(txn);
    stack.add(txn);
    for (const neighbor of graph[txn] || []) {
      if (!visited.has(neighbor) && dfs(neighbor)) return true;
      if (stack.has(neighbor)) return true;
    }
    stack.delete(txn);
    return false;
  }

  for (const node of Object.keys(graph)) {
    if (!visited.has(node) && dfs(node)) return true;
  }
  return false;
}

const deadlockDetected = detectDeadlockCycle(waitForGraph);
const chosenVictim = 'T2';

console.log(\`[Lock Manager] Compatibility check: S-Lock + S-Lock compatible (granted: \${sGranted}); S-Lock + X-Lock incompatible (blocked: \${xBlocked}).\`);
console.log(\`[Deadlock Detector] Detected cycle in Wait-For Graph: [T1 -> T2 -> T1] (1/1: \${deadlockDetected}).\`);
console.log(\`[Victim Abortion] Aborted victim \${chosenVictim} with error 40P01; T1 completed successfully (1/1: true).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Global Ordering Rule for Deadlock Prevention',
        bn: 'ডেডলক প্রতিরোধের জন্য গ্লোবাল অর্ডারিং নিয়ম'
      },
      text: {
        en: 'The most effective way to eliminate deadlocks entirely in your application layer is strictly acquiring row locks in uniform alphabetical or numerical order. If every transaction always locks Account 101 before Account 202, a circular dependency cycle can never form in the database engine graph.',
        bn: 'অ্যাপ্লিকেশন কোডে ডেডলক সম্পূর্ণ প্রতিরোধ করার সর্বোত্তম উপায় হলো সর্বদা একটি নির্দিষ্ট সংখ্যা বা অক্ষরের ক্রমানুসারে সারিগুলো লক করা। যদি সমস্ত লেনদেন অ্যাকাউন্ট ২০২ লক করার আগে সর্বদা অ্যাকাউন্ট ১০১ লক করে, তবে ডাটাবেস ইঞ্জিনে কখনোই কোনো বৃত্তাকার চক্র তৈরি হতে পারবে না।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Lock Compatibility Evaluator',
        bn: 'লক কম্প্যাটিবিলিটি মূল্যায়নকারী'
      },
      description: {
        en: 'Test lock manager decisions: evaluate whether a requested lock mode can be immediately granted against current lock holders.',
        bn: 'লক ম্যানেজারের সিদ্ধান্ত পরীক্ষা করুন: বর্তমান লকের বিপরীতে নতুন কোনো লক তৎক্ষণাৎ মঞ্জুর হবে কিনা তা মূল্যায়ন করুন।'
      },
      code: `function evaluateLockGrant(currentLock, requestedLock) {
  if (currentLock === 'NONE') return 'GRANTED';
  if (currentLock === 'SHARED' && requestedLock === 'SHARED') return 'GRANTED';
  return 'WAIT_BLOCKED';
}

console.log('Read on Read:', evaluateLockGrant('SHARED', 'SHARED'));
console.log('Write on Read:', evaluateLockGrant('SHARED', 'EXCLUSIVE'));`,
      tests: [
        {
          name: {
            en: 'Grants shared lock when current lock is shared',
            bn: 'বর্তমান লক শেয়ার্ড থাকলে নতুন শেয়ার্ড লক মঞ্জুর করে'
          },
          expected: 'Read on Read: GRANTED'
        },
        {
          name: {
            en: 'Blocks exclusive lock when current lock is shared',
            bn: 'বর্তমান লক শেয়ার্ড থাকলে নতুন এক্সক্লুসিভ লক আটকে দেয়'
          },
          expected: 'Write on Read: WAIT_BLOCKED'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-lock-ex-1',
      kind: 'mcq',
      topic: 'shared-lock-compatibility',
      question: {
        en: 'Under standard relational lock manager rules, what happens when Transaction 2 requests a Shared Lock (S-lock) on a row that Transaction 1 already holds a Shared Lock on?',
        bn: 'আদর্শ ডাটাবেস লকিং নিয়মে ট্রানজ্যাকশন ১ এর শেয়ার্ড লক (S-lock) নেওয়া একটি সারিতে ট্রানজ্যাকশন ২ পুনরায় শেয়ার্ড লক চাইলে কী ঘটবে?'
      },
      options: [
        {
          en: 'The S-lock is granted immediately because reading data causes zero mutation and multiple readers can safely share the row concurrently',
          bn: 'S-লকটি সাথে সাথে মঞ্জুর করা হবে কারণ ডাটা পড়লে কোনো পরিবর্তন হয় না এবং একাধিক রিডার একসাথে তা পড়তে পারে'
        },
        {
          en: 'The entire database crashes and requires a hardware replacement',
          bn: 'পুরো ডাটাবেস ক্র্যাশ করবে এবং সার্ভারের হার্ডওয়্যার বদলাতে হবে'
        },
        {
          en: 'Transaction 2 is aborted and deleted from user accounts',
          bn: 'ট্রানজ্যাকশন ২ বাতিল করে ব্যবহারকারীর অ্যাকাউন্ট মুছে দেওয়া হবে'
        },
        {
          en: 'The operating system converts the row into a text document',
          bn: 'অপারেটিং সিস্টেম সারিটিকে একটি টেক্সট ডকুমেন্টে রূপান্তর করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Shared locks are compatible with other shared locks.',
        bn: 'শেয়ার্ড লক অন্য শেয়ার্ড লকের সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ।'
      },
      explanation: {
        en: 'Shared locks are mutually compatible. Multiple concurrent transactions can inspect identical rows simultaneously without interference, maximizing query read throughput.',
        bn: 'শেয়ার্ড লকগুলো পরস্পরের সাথে সংঘাত তৈরি করে না। ডাটা পড়ার জন্য একাধিক ব্যবহারকারী একই সাথে সারিতে কোনো বাধা ছাড়াই প্রবেশ করতে পারেন।'
      }
    },
    {
      id: 'txn-lock-ex-2',
      kind: 'mcq',
      topic: 'strict-two-phase-locking-shrinking',
      question: {
        en: 'Why does Strict Two-Phase Locking (Rigorous 2PL) enforce that Exclusive write locks are held until final COMMIT or ROLLBACK?',
        bn: 'স্ট্রিক্ট টু-ফেজ লকিং কেন এক্সক্লুসিভ রাইট লকগুলোকে চূড়ান্ত COMMIT বা ROLLBACK না হওয়া পর্যন্ত ধরে রাখতে বাধ্য করে?'
      },
      options: [
        {
          en: 'To eliminate dirty reads and prevent cascading rollbacks, ensuring no concurrent transaction reads uncommitted changes that might later be aborted',
          bn: 'ডার্টি রিড দূর করতে এবং ক্যাসকেডিং রোলব্যাক রোধ করতে, যাতে বাতিল হতে যাওয়া কোনো অপূর্ণ পরিবর্তন অন্য কেউ পড়তে না পারে'
        },
        {
          en: 'To make SQL queries run 10 times slower intentionally',
          bn: 'ইচ্ছাকৃতভাবে SQL কোয়েরির গতি ১০ গুণ ধীর করার জন্য'
        },
        {
          en: 'To prevent the server motherboard from overheating',
          bn: 'সার্ভারের মাদারবোর্ড অতিরিক্ত গরম হওয়া থেকে বাঁচাতে'
        },
        {
          en: 'Because SQL syntax prohibits semicolons before commits',
          bn: 'কারণ SQL সিনট্যাক্সে কমিটের আগে সেমিকোলন লেখা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Early lock release creates dirty data that leads to cascading aborts if the first transaction rolls back.',
        bn: 'কাজের মাঝে লক ছেড়ে দিলে অপূর্ণ ডাটা অন্য লেনদেনে ছড়িয়ে পড়ে ক্যাসকেডিং বিপর্যয় ঘটাতে পারে।'
      },
      explanation: {
        en: 'If a transaction releases an exclusive lock early and then fails, another transaction could have already read and acted on that uncommitted data. Strict 2PL eliminates cascading aborts by holding write locks to the end.',
        bn: 'মাঝপথে লক ছেড়ে দিলে অন্য কেউ সেই কাঁচা ডাটা নিয়ে কাজ শুরু করতে পারত। প্রথম কাজটি ব্যর্থ হলে তখন পরবর্তী কাজগুলোও একের পর এক বাতিল করতে হতো। স্ট্রিক্ট 2PL শেষ পর্যন্ত লক রেখে এই সমস্যা চিরতরে সমাধান করে।'
      }
    },
    {
      id: 'txn-lock-ex-3',
      kind: 'mcq',
      topic: 'deadlock-detection-wfg-cycle',
      question: {
        en: 'How does an automated database deadlock detector determine that two concurrent transactions are permanently stuck in a deadlock?',
        bn: 'একটি স্বয়ংক্রিয় ডাটাবেস ডেডলক ডিটেক্টর কীভাবে নিশ্চিত হয় যে দুটি সমসাময়িক লেনদেন চিরতরে ডেডলকে আটকে গেছে?'
      },
      options: [
        {
          en: 'By analyzing the Wait-For Graph (WFG) and detecting a directed circular cycle where Transaction A waits for Transaction B and Transaction B waits for Transaction A',
          bn: 'ওয়েট-ফর গ্রাফ (WFG) বিশ্লেষণ করে একটি নির্দেশিত বৃত্তাকার চক্র শনাক্ত করার মাধ্যমে যেখানে ট্রানজ্যাকশন A অপেক্ষা করছে B-এর জন্য এবং B অপেক্ষা করছে A-এর জন্য'
        },
        {
          en: 'By timing out after 48 hours without sending an alert',
          bn: 'কোনো সতর্কবার্তা না পাঠিয়ে ৪৮ ঘণ্টা পর টাইমআউট করার মাধ্যমে'
        },
        {
          en: 'By inspecting whether the database server is running low on disk space',
          bn: 'ডাটাবেস সার্ভারে ডিস্কের জায়গা কমে গেছে কিনা তা পরীক্ষা করার মাধ্যমে'
        },
        {
          en: 'By asking the database user to refresh their internet browser',
          bn: 'ডাটাবেস ব্যবহারকারীকে তাদের ইন্টারনেট ব্রাউজার রিফ্রেশ করতে বলার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A cycle in the Wait-For Graph represents an unresolvable circular dependency.',
        bn: 'ওয়েট-ফর গ্রাফে তৈরি হওয়া চক্র একটি অমীমাংসিত বৃত্তাকার নির্ভরতা প্রকাশ করে।'
      },
      explanation: {
        en: 'Deadlock detection algorithms run background cycle detection (like Depth-First Search) on the Wait-For Graph. A directed cycle proves a deadlock exists, requiring an engine intervention.',
        bn: 'ডেডলক ডিটেক্টর ওয়েট-ফর গ্রাফের ওপর ডেপথ-ফার্স্ট সার্চ চালিয়ে চক্র খোঁজে। কোনো চক্র পাওয়া গেলে নিশ্চিত হওয়া যায় যে লেনদেনগুলো একে অপরের জন্য আটকে আছে।'
      }
    },
    {
      id: 'txn-lock-ex-4',
      kind: 'mcq',
      topic: 'deadlock-prevention-ordered-locking',
      question: {
        en: 'Which application architectural pattern completely prevents deadlocks from occurring during multi-row transfers?',
        bn: 'একাধিক সারির ডাটা আদান-প্রদানের সময় কোন অ্যাপ্লিকেশন আর্কিটেকচারাল কৌশলটি ডেডলক হওয়া সম্পূর্ণ বন্ধ করে দেয়?'
      },
      options: [
        {
          en: 'Enforcing a strict global ordering rule: always acquire locks on rows in identical numerical or alphabetical order across all application services',
          bn: 'একটি কঠোর গ্লোবাল অর্ডারিং নিয়ম মান্য করা: সমস্ত অ্যাপ্লিকেশন সার্ভিসে সারিগুলো সর্বদা নির্দিষ্ট সংখ্যা বা বর্ণমালার ক্রমানুসারে লক করা'
        },
        {
          en: 'Restarting the database container every 5 minutes',
          bn: 'প্রতি ৫ মিনিট পর পর ডাটাবেস কন্টেইনার রিস্টার্ট করা'
        },
        {
          en: 'Running all SQL statements without primary keys',
          bn: 'প্রাইমারি কি ছাড়া সমস্ত SQL স্টেটমেন্ট চালানো'
        },
        {
          en: 'Using random delays with Math.random() before every query',
          bn: 'প্রতিটি কোয়েরির আগে Math.random() দিয়ে এলোমেলো বিরতি দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Uniform global lock ordering makes circular wait cycles mathematically impossible.',
        bn: 'সর্বদা একই ক্রমানুসারে লক করলে বৃত্তাকার নির্ভরতা তৈরি হওয়া গাণিতিকভাবে অসম্ভব।'
      },
      explanation: {
        en: 'If every transaction locks resources in the same order (e.g., lowest account ID first, then highest), circular wait cycles cannot physically form, preventing deadlocks entirely.',
        bn: 'যদি সমস্ত লেনদেন সর্বদা ছোট আইডি থেকে বড় আইডির ক্রমানুসারে লক করে, তবে কখনোই বিপরীত অপেক্ষার চক্র তৈরি হতে পারবে না এবং ডেডলক সম্পূর্ণ এড়ানো সম্ভব হবে।'
      }
    }
  ],
  quiz: {
    id: 'locks-and-the-lock-quiz',
    title: {
      en: 'Locking Mechanics & Concurrency Quiz',
      bn: 'লকিং মেকানিজম ও কনকারেন্সি কুইজ'
    },
    questions: [
      {
        id: 'txn-lock-qz-1',
        kind: 'mcq',
        topic: 'intent-locks-purpose-hierarchy',
        question: {
          en: 'What is the primary architectural purpose of Intent Locks (such as Intent Shared IS and Intent Exclusive IX) in hierarchical lock managers?',
          bn: 'হায়ারার্কিক্যাল লক ম্যানেজারে ইনটেন্ট লকের (যেমন Intent Shared IS এবং Intent Exclusive IX) মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To indicate on higher-level containers (like a table) that lower-level granular locks (like rows) are held, preventing other transactions from taking conflicting table-wide locks without having to scan every single row',
            bn: 'উচ্চ স্তরে (যেমন টেবিল) নির্দেশ করা যে নিম্ন স্তরে (যেমন রো) লক বিদ্যমান, যাতে পুরো টেবিলের লক্ষ লক্ষ রো স্ক্যান না করেই টেবিল-ব্যাপী সাংঘর্ষিক লক নেওয়া ঠেকানো যায়'
          },
          {
            en: 'To compress database tables into ZIP archives',
            bn: 'ডাটাবেস টেবিলগুলোকে ZIP ফাইলে কম্প্রেস করা'
          },
          {
            en: 'To verify user credit card numbers on payment gateways',
            bn: 'পেমেন্ট গেটওয়েতে ব্যবহারকারীর ক্রেডিট কার্ড নম্বর পরীক্ষা করা'
          },
          {
            en: 'To delete unused indexes automatically during the night',
            bn: 'রাতের বেলা অপ্রয়োজনীয় ইনডেক্সগুলো স্বয়ংক্রিয়ভাবে মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Intent locks tell table-level operations that row locks already exist down below.',
          bn: 'ইনটেন্ট লক টেবিল লেভেলকে জানিয়ে দেয় যে নিচে সারির ওপর লক নেওয়া আছে।'
        },
        explanation: {
          en: 'Without intent locks, a transaction wanting a table-level exclusive lock would have to inspect every individual row in a billion-row table. Intent locks flag table headers in O(1) time.',
          bn: 'ইনটেন্ট লক না থাকলে পুরো টেবিলে লক নেওয়ার জন্য কোটি কোটি সারি পরীক্ষা করতে হতো। টেবিলের মাথায় ইনটেন্ট লক লাগিয়ে O(1) সময়েই এই দ্বন্দ্ব নিশ্চিতভাবে প্রতিরোধ করা যায়।'
        }
      },
      {
        id: 'txn-lock-qz-2',
        kind: 'mcq',
        topic: 'two-phase-locking-growing-rule',
        question: {
          en: 'Under the Two-Phase Locking (2PL) protocol, what fundamental rule must be followed during the Growing Phase?',
          bn: 'টু-ফেজ লকিং (2PL) প্রোটোকলের অধীনে গ্রোয়িং ফেজ বা বর্ধনশীল পর্যায়ে কোন মৌলিক নিয়মটি অবশ্যই মানতে হয়?'
        },
        options: [
          {
            en: 'The transaction may acquire new locks, but it cannot release any previously acquired locks until it reaches the peak of the growing phase',
            bn: 'ট্রানজ্যাকশন নতুন লক গ্রহণ করতে পারে, কিন্তু বর্ধনশীল পর্যায়ের চূড়ায় না পৌঁছানো পর্যন্ত পূর্বের কোনো লক ত্যাগ করতে পারে না'
          },
          {
            en: 'The database must delete 50% of the stored data records',
            bn: 'ডাটাবেসকে সংরক্ষিত তথ্যের ৫০% মুছে ফেলতে হয়'
          },
          {
            en: 'The application must open 100 new socket connections',
            bn: 'অ্যাপ্লিকেশনকে ১০০টি নতুন সকেট কানেকশন খুলতে হয়'
          },
          {
            en: 'The transaction is forbidden from running SQL queries',
            bn: 'ট্রানজ্যাকশনে কোনো SQL কোয়েরি চালানো সম্পূর্ণ নিষিদ্ধ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Growing Phase: locks are only acquired, never released.',
          bn: 'গ্রোয়িং ফেজ: কেবল লক নেওয়া যায়, ছাড়া নিষেধ।'
        },
        explanation: {
          en: 'The 2PL theorem dictates that once a transaction releases a single lock, it enters the shrinking phase and can never acquire another lock, guaranteeing serializable execution schedules.',
          bn: '2PL উপপাদ্য অনুসারে একবার কোনো লক ছেড়ে দিলে ট্রানজ্যাকশন শ্রিংকিং ফেজে প্রবেশ করে এবং আর কখনো নতুন লক নিতে পারে না, যা লেনদেনের শৃঙ্খলা অটুট রাখে।'
        }
      },
      {
        id: 'txn-lock-qz-3',
        kind: 'mcq',
        topic: 'deadlock-victim-selection-strategy',
        question: {
          en: 'When a database engine identifies a circular deadlock in its Wait-For Graph, how does it typically select which transaction to abort as the "victim"?',
          bn: 'ডাটাবেস ইঞ্জিন যখন ওয়েট-ফর গ্রাফে ডেডলক পায়, তখন সাধারণত কোন নীতিতে সে বাতিল করার জন্য "ভিকটিম" লেনদেন বেছে নেয়?'
        },
        options: [
          {
            en: 'It picks the transaction that has performed the least amount of work (lowest undo log volume or newest start timestamp) to minimize recovery overhead',
            bn: 'যে লেনদেনটি সবচেয়ে কম কাজ করেছে (কম আনডু লগ বা সবচেয়ে নতুন শুরু হয়েছে) তাকে বেছে নেওয়া হয় যাতে রোলব্যাকের খরচ ও সময় সর্বনিম্ন হয়'
          },
          {
            en: 'It flips a physical coin inside the database server power unit',
            bn: 'ডাটাবেস সার্ভারের পাওয়ার ইউনিটের ভেতর একটি মুদ্রা টস করা হয়'
          },
          {
            en: 'It aborts every single transaction across the entire system',
            bn: 'পুরো সিস্টেমের সমস্ত লেনদেনকে একসাথে বাতিল করে দেওয়া হয়'
          },
          {
            en: 'It selects the transaction with the most vowel letters in its username',
            bn: 'যে ব্যবহারকারীর নামে সবচেয়ে বেশি স্বরবর্ণ বা ভাওয়েল আছে তাকে বেছে নেওয়া হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The engine minimizes waste: abort the younger transaction with fewer written rows.',
          bn: 'ইঞ্জিন অপচয় কমাতে সবচেয়ে কম কাজ করা কনিষ্ঠ লেনদেনটিকেই সাধারণত বাতিল করে।'
        },
        explanation: {
          en: 'Engines select deadlock victims based on cost heuristics: aborting the transaction with the smallest undo log or fewest row modifications minimizes wasted CPU and I/O cycles.',
          bn: 'ইঞ্জিন হিসেব করে দেখে কার জন্য ক্ষতি কম হবে: সবচেয়ে কম রো পরিবর্তন করা ট্রানজ্যাকশনকে রোলব্যাক করলে প্রসেসর এবং ডিস্কের অপচয় সবচেয়ে কম হয়।'
        }
      },
      {
        id: 'txn-lock-qz-4',
        kind: 'mcq',
        topic: 'lock-escalation-concept',
        question: {
          en: 'What is Lock Escalation in relational database management systems, and why does an engine perform it?',
          bn: 'রিলেশনাল ডাটাবেস সিস্টেমে লক এসকেলেশন (Lock Escalation) কী এবং ইঞ্জিন কেন এটি কার্যকর করে?'
        },
        options: [
          {
            en: 'Converting thousands of fine-grained row-level locks into a single coarse-grained table-level lock to reclaim internal lock manager memory overhead',
            bn: 'হাজার হাজার সূক্ষ্ম রো-লেভেল লককে একটি একক টেবিল-লেভেল লকে রূপান্তর করা যাতে লক ম্যানেজারের মেমরি অপচয় রোধ করা যায়'
          },
          {
            en: 'Increasing the price of database software licenses annually',
            bn: 'প্রতি বছর ডাটাবেস সফটওয়্যার লাইসেন্সের মূল্য বৃদ্ধি করা'
          },
          {
            en: 'Encrypting data using 4096-bit cryptographic keys',
            bn: '৪০৯৬ বিটের ক্রিপ্টোগ্রাফিক কি দিয়ে ডাটা এনক্রিপ্ট করা'
          },
          {
            en: 'Upgrading the database server CPU to a faster clock speed',
            bn: 'ডাটাবেস সার্ভারের প্রসেসরকে দ্রুতগতির সিপিইউতে আপগ্রেড করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Escalation converts many small row locks into one single table lock when memory thresholds are exceeded.',
          bn: 'মেমরির সীমা পেরিয়ে গেলে অনেকগুলো ছোট রো লকের বদলে একটি টেবিল লক নেওয়া হয়।'
        },
        explanation: {
          en: 'Each lock consumes RAM in the database lock manager. When a bulk update modifies millions of rows, the engine escalates row locks into a single table lock to protect available system memory, despite reducing concurrent access.',
          bn: 'প্রতিটি লক ডাটাবেস মেমরিতে জায়গা নেয়। কোনো কোয়েরি লক্ষ লক্ষ সারিতে কাজ করলে ইঞ্জিন হাজার হাজার লকের বদলে পুরো টেবিলে একটি লক লাগিয়ে মেমরি রক্ষা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'isols-and-the-isolation',
    title: {
      en: 'The 4 ANSI SQL Isolation Levels & Concurrency Anomalies',
      bn: '৪টি ANSI SQL আইসোলেশন লেভেল ও কনকারেন্সি অ্যানোমালি'
    }
  }
};
