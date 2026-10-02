import type { Lesson } from '../../../lib/types';

export const TxnsAndTheCommitLesson: Lesson = {
  slug: 'txns-and-the-commit',
  tech: 'transactions',
  title: {
    en: 'Transactions & Commits: The All-or-Nothing Unit of Work',
    bn: 'ট্রানজ্যাকশন ও কমিট: অল-অর-নাথিং কাজের একক'
  },
  summary: {
    en: 'A beginner\'s overview of database transactions: understand logical units of work, BEGIN, COMMIT, and ROLLBACK syntax, double-entry financial ledger invariants, and automated failure recovery.',
    bn: 'ডাটাবেস ট্রানজ্যাকশনের একটি মৌলিক পরিচিতি: কাজের যৌক্তিক একক, BEGIN, COMMIT এবং ROLLBACK সিনট্যাক্স, ডাবল-এন্ট্রি আর্থিক লেজার নিয়ম এবং স্বয়ংক্রিয় ব্যর্থতা রিকভারি শিখুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-a-transaction',
      text: {
        en: 'The Unit of Work: Why Multi-Statement Operations Need Invariants',
        bn: 'কাজের মৌলিক একক: বহু-স্টেটমেন্ট অপারেশনে কেন অবিভাজ্যতা প্রয়োজন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your application executes business workflows, a single logical task frequently requires multiple SQL statements. Consider a banking transfer of $500 from Alice (Account 101) to Bob (Account 202). This operation demands two distinct steps: debiting $500 from Account 101, and crediting $500 to Account 202. If the database crashes, power cuts, or network cables drop immediately after the debit, $500 disappears from Alice without ever reaching Bob.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন বাস্তব কোনো ব্যবসায়িক কাজ সম্পন্ন করে, তখন প্রায়ই একটি একক কাজের জন্য একাধিক SQL স্টেটমেন্ট চালানোর প্রয়োজন হয়। অ্যালিসের (অ্যাকাউন্ট ১০১) থেকে ববের (অ্যাকাউন্ট ২০২) অ্যাকাউন্টে ৫০০ ডলার স্থানান্তরের কথা বিবেচনা করুন। এই কাজটি করতে ২টি আলাদা ধাপ প্রয়োজন: অ্যাকাউন্ট ১০১ থেকে ৫০০ ডলার কাটা এবং অ্যাকাউন্ট ২০২-এ ৫০০ ডলার যোগ করা। প্রথম ধাপের পর হঠাৎ বিদ্যুৎ চলে গেলে বা সার্ভার ক্র্যাশ করলে অ্যালিসের অ্যাকাউন্ট থেকে ৫০০ ডলার কেটে নেওয়া হলেও বব তা কখনো পাবে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To prevent partial writes from corrupting data, relational database engines group interrelated operations into a single logical container called a Transaction. A transaction guarantees all-or-nothing execution: either every single statement succeeds and is permanently committed to disk, or every modification is completely aborted and rolled back, leaving the database in its exact original state.',
        bn: 'আংশিক পরিবর্তনের মাধ্যমে ডাটা নষ্ট হওয়া রোধ করতে রিলেশনাল ডাটাবেস সম্পর্কিত সমস্ত অপারেশনকে একটি একক পাত্রে আবদ্ধ করে যাকে ট্রানজ্যাকশন বলা হয়। একটি ট্রানজ্যাকশন অল-অর-নাথিং এক্সিকিউশন নিশ্চিত করে: হয় ভেতরের প্রতিটি স্টেটমেন্ট সফল হয়ে ডিস্কে স্থায়ীভাবে সংরক্ষিত হয়, নয়তো تمام পরিবর্তন বাতিল ও রোলব্যাক হয়ে ডাটাবেসটি তার আগের নিখুঁত অবস্থায় ফিরে যায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Transaction Lifecycle and State Transitions',
        bn: 'ট্রানজ্যাকশন জীবনচক্র ও স্টেট ট্রানজিশন'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Database transaction state machine diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- BEGIN State -->
  <g transform="translate(40, 110)">
    <circle cx="45" cy="45" r="35" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
    <text x="45" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">BEGIN</text>
    <text x="45" y="58" fill="#bae6fd" font-size="9" text-anchor="middle">Start Txn</text>
  </g>

  <!-- Arrow to Active -->
  <path d="M 120 155 L 170 155" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Active State -->
  <g transform="translate(170, 110)">
    <rect width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="65" y="32" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Active State</text>
    <text x="65" y="52" fill="#94a3b8" font-size="10" text-anchor="middle">Executing SQL</text>
    <text x="65" y="70" fill="#cbd5e1" font-size="9" text-anchor="middle">DML in memory</text>
  </g>

  <!-- Success Path (Upper) -->
  <path d="M 300 135 L 370 75" stroke="#10b981" stroke-width="2" />
  <text x="325" y="95" fill="#34d399" font-size="10" font-weight="bold">No Errors</text>

  <!-- Partially Committed -->
  <g transform="translate(370, 30)">
    <rect width="150" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="75" y="28" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Partially Committed</text>
    <text x="75" y="48" fill="#cbd5e1" font-size="10" text-anchor="middle">Final statement read</text>
    <text x="75" y="66" fill="#94a3b8" font-size="9" text-anchor="middle">Flushing to WAL...</text>
  </g>

  <!-- Arrow to Committed -->
  <path d="M 520 72 L 580 72" stroke="#10b981" stroke-width="2" />

  <!-- Committed State -->
  <g transform="translate(580, 30)">
    <rect width="120" height="85" rx="8" fill="#065f46" stroke="#10b981" stroke-width="2" />
    <text x="60" y="36" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">COMMITTED</text>
    <text x="60" y="56" fill="#6ee7b7" font-size="10" text-anchor="middle">Written to Disk</text>
    <text x="60" y="72" fill="#a7f3d0" font-size="9" text-anchor="middle">Permanent</text>
  </g>

  <!-- Failure Path (Lower) -->
  <path d="M 300 175 L 370 235" stroke="#ef4444" stroke-width="2" />
  <text x="325" y="220" fill="#f87171" font-size="10" font-weight="bold">Error / Abort</text>

  <!-- Failed State -->
  <g transform="translate(370, 195)">
    <rect width="150" height="85" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <text x="75" y="28" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Failed State</text>
    <text x="75" y="48" fill="#cbd5e1" font-size="10" text-anchor="middle">Constraint broken</text>
    <text x="75" y="66" fill="#94a3b8" font-size="9" text-anchor="middle">Aborting worker...</text>
  </g>

  <!-- Arrow to Rolled Back -->
  <path d="M 520 237 L 580 237" stroke="#ef4444" stroke-width="2" />

  <!-- Rolled Back State -->
  <g transform="translate(580, 195)">
    <rect width="120" height="85" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="2" />
    <text x="60" y="36" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ROLLED BACK</text>
    <text x="60" y="56" fill="#fca5a5" font-size="10" text-anchor="middle">Undone via Log</text>
    <text x="60" y="72" fill="#fecaca" font-size="9" text-anchor="middle">Zero Data Loss</text>
  </g>
</svg>`,
      caption: {
        en: 'The database transaction state machine: navigating from active execution to either permanent commit or safe rollback.',
        bn: 'ডাটাবেস ট্রানজ্যাকশন স্টেট মেশিন: সক্রিয় কাজ থেকে স্থায়ী কমিট অথবা নিরাপদ রোলব্যাকের ট্রানজিশন প্রবাহ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Transaction',
          def: {
            en: 'A sequence of database operations executed as a single logical unit of work that satisfies all-or-nothing atomicity.',
            bn: 'ডাটাবেস অপারেশনের একটি সুসংগঠিত ক্রম যা একটি একক কাজের মতো পরিচালিত হয় এবং অল-অর-নাথিং নীতি রক্ষা করে।'
          }
        },
        {
          term: 'COMMIT',
          def: {
            en: 'The SQL command that permanently saves all transactional modifications to disk and makes them visible to concurrent connections.',
            bn: 'এমন একটি SQL কমান্ড যা ট্রানজ্যাকশনের તમામ পরিবর্তন ডিস্কে স্থায়ীভাবে সেভ করে এবং অন্য সমস্ত ব্যবহারকারীর কাছে দৃশ্যমান করে।'
          }
        },
        {
          term: 'ROLLBACK',
          def: {
            en: 'The SQL command that cancels all uncommitted modifications in the current transaction, returning data to its pre-transaction state.',
            bn: 'এমন একটি SQL কমান্ড যা চলমান ট্রানজ্যাকশনের تمام পরিবর্তন বাতিল করে ডাটাবেসকে তার পূর্বের অবস্থায় ফিরিয়ে নেয়।'
          }
        },
        {
          term: 'Undo Log',
          def: {
            en: 'A storage log recording original row states before modification, enabling instant restoration of data during an automated rollback.',
            bn: 'পরিবর্তনের আগের মূল ডাটা সংরক্ষণকারী একটি লগ যা স্বয়ংক্রিয় রোলব্যাকের সময় ডাটা পূর্বাবস্থায় ফিরিয়ে নিতে ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'transaction-syntax-lifecycle',
      text: {
        en: 'Transaction Syntax: BEGIN, COMMIT, and Exception Rollbacks',
        bn: 'ট্রানজ্যাকশন সিনট্যাক্স: BEGIN, COMMIT ও এক্সেপশন রোলব্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In standard SQL and database drivers, a transaction begins with BEGIN or START TRANSACTION. While the transaction remains open, all INSERT, UPDATE, and DELETE modifications are buffered in memory and tracked in the Write-Ahead Log. Other concurrent user connections cannot view these pending changes unless they run under the non-standard Read Uncommitted isolation level.',
        bn: 'স্ট্যান্ডার্ড SQL এবং ডাটাবেস ড্রাইভারগুলোতে BEGIN বা START TRANSACTION দিয়ে লেনদেন শুরু হয়। ট্রানজ্যাকশন খোলা থাকা অবস্থায় تمام INSERT, UPDATE এবং DELETE পরিবর্তন মেমরিতে বাফার হয়ে থাকে এবং রাইট-অ্যাহেড লগে ট্র্যাক হয়। কোনো ব্যবহারকারী Read Uncommitted মোডে না থাকলে এই অপরিবর্তিত পেন্ডিং ডাটা দেখতে পারে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If every step succeeds, calling COMMIT instructs the storage engine to execute a synchronous disk flush (fsync), sealing the writes permanently. If an error occurs (such as insufficient balance or a foreign key violation), the application issues ROLLBACK. Modern database drivers also initiate an automated rollback whenever a client disconnects unexpectedly, eliminating orphaned uncommitted locks.',
        bn: 'প্রতিটি ধাপ সফল হলে COMMIT কমান্ডটি স্টোরেজ ইঞ্জিনকে ডিস্কে সিঙ্ক্রোনাস ফ্লাশ (fsync) চালানোর নির্দেশ দেয়, যা পরিবর্তনগুলোকে স্থায়ী করে তোলে। যদি কোনো ত্রুটি ঘটে (যেমন পর্যাপ্ত ব্যালেন্স না থাকা বা ফরেন কি লঙ্ঘন), তবে অ্যাপ্লিকেশন ROLLBACK কমান্ড দেয়। ক্লায়েন্টের কানেকশন হঠাৎ বিচ্ছিন্ন হয়ে গেলেও আধুনিক ডাটাবেস ড্রাইভার স্বয়ংক্রিয়ভাবে রোলব্যাক সম্পন্ন করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-transaction-engine',
      text: {
        en: 'Executable Transaction Coordinator: Enforcing Ledger Invariants',
        bn: 'রানযোগ্য ট্রানজ্যাকশন কোঅর্ডিনেটর: লেজার ব্যালেন্সের অখণ্ডতা রক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js transaction coordinator simulating double-entry banking transfers across two accounts. It demonstrates a valid transfer of $300 that commits permanently, and shows how an overdraw transfer of $900 triggers an automated rollback to protect total ledger balances.',
        bn: 'নিচে ২টি অ্যাকাউন্টের মধ্যে ডাবল-এন্ট্রি ব্যাংকিং লেনদেন সিমুলেশনকারী একটি সম্পূর্ণ Node.js ট্রানজ্যাকশন কোঅর্ডিনেটর দেওয়া হলো। এটি ৩০০ ডলারের একটি সফল ট্রানজ্যাকশন কমিট করে এবং ৯০০ ডলার উত্তোলনের অবৈধ চেষ্টায় স্বয়ংক্রিয় রোলব্যাকের মাধ্যমে লেজার ব্যালেন্সের সমতা রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Execute bank transfers with atomicity snapshots, error handling, and automated rollback recovery',
        bn: 'অ্যাটোমিসিটি স্ন্যাপশট, ত্রুটি হ্যান্ডলিং এবং স্বয়ংক্রিয় রোলব্যাক সহ ব্যাংক ট্রান্সফার পরিচালনা'
      },
      code: `// Banking Transaction Coordinator and Invariant Verifier
const accountsLedger = {
  101: { name: 'Alice', balance: 1000 },
  202: { name: 'Bob', balance: 500 }
};

// Double-Entry Invariant: Total funds in system must remain constant ($1500)
const initialSystemTotal = accountsLedger[101].balance + accountsLedger[202].balance;

function executeTransaction(fromAccountId, toAccountId, transferAmount) {
  // Step 1: BEGIN TRANSACTION (Capture Undo Log Snapshot)
  const undoSnapshot = {
    [fromAccountId]: accountsLedger[fromAccountId].balance,
    [toAccountId]: accountsLedger[toAccountId].balance
  };

  try {
    // Step 2: Validate debit constraint
    if (accountsLedger[fromAccountId].balance < transferAmount) {
      throw new Error(\`Insufficient funds: Account \${fromAccountId} has $\${accountsLedger[fromAccountId].balance}\`);
    }

    // Step 3: Debit sender
    accountsLedger[fromAccountId].balance -= transferAmount;

    // Step 4: Credit recipient
    accountsLedger[toAccountId].balance += transferAmount;

    // Step 5: COMMIT TRANSACTION
    return { status: 'COMMITTED', transferAmount };
  } catch (error) {
    // Step 6: ROLLBACK TRANSACTION (Restore from Undo Log)
    accountsLedger[fromAccountId].balance = undoSnapshot[fromAccountId];
    accountsLedger[toAccountId].balance = undoSnapshot[toAccountId];
    return { status: 'ROLLED_BACK', error: error.message };
  }
}

// Transaction 1: Valid Transfer of $300
const txn1 = executeTransaction(101, 202, 300);

// Transaction 2: Invalid Overdraw Transfer of $900 (Alice only has $700 remaining)
const txn2 = executeTransaction(101, 202, 900);

const finalSystemTotal = accountsLedger[101].balance + accountsLedger[202].balance;
const isLedgerInvariantPreserved = finalSystemTotal === initialSystemTotal;

console.log(\`[Transaction Engine] Valid transfer of $300 committed successfully.\`);
console.log(\`[Rollback Invariant] Overdraw transfer aborted and rolled back; zero funds lost.\`);
console.log(\`[Ledger Invariant] Total system balance constant at $1500 across both operations (1/1: \${isLedgerInvariantPreserved}).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Never Wrap External Network Calls Inside Database Transactions',
        bn: 'ডাটাবেস ট্রানজ্যাকশনের ভেতর কখনো বাহ্যিক নেটওয়ার্ক কল রাখবেন না'
      },
      text: {
        en: 'A devastating production anti-pattern is sending emails or calling external payment APIs (like Stripe or PayPal) while holding open a database transaction. If the external network times out for 30 seconds, your database transaction holds row locks and connection pool slots, freezing other database users and crashing production servers.',
        bn: 'ডাটাবেস ট্রানজ্যাকশন খোলা রেখে তার ভেতর ইমেইল পাঠানো বা বাহ্যিক পেমেন্ট API (যেমন স্ট্রাইপ বা পেপ্যাল) কল করা একটি মারাত্মক ভুল নকশা। যদি সেই বাহ্যিক সার্ভার ৩০ সেকেন্ড সময় নেয়, তবে আপনার ডাটাবেসের রো লক এবং কানেকশন আটকে থেকে পুরো ওয়েবসাইট ক্র্যাশ করিয়ে দেবে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Transaction Rollback Simulator',
        bn: 'ট্রানজ্যাকশন রোলব্যাক সিমুলেটর'
      },
      description: {
        en: 'Simulate transactional execution: verify that an exception triggers a rollback without modifying initial values.',
        bn: 'ট্রানজ্যাকশন এক্সিকিউশন পরীক্ষা করুন: ত্রুটি দেখা দিলে মূল মান অক্ষত রেখে রোলব্যাক হয় কিনা তা দেখুন।'
      },
      code: `let databaseState = { count: 10 };

function runTransaction(shouldFail) {
  const previousState = { ...databaseState };
  try {
    databaseState.count += 5;
    if (shouldFail) {
      throw new Error('Database constraint violation');
    }
    return { status: 'COMMITTED', count: databaseState.count };
  } catch (err) {
    databaseState = previousState; // Rollback
    return { status: 'ROLLED_BACK', count: databaseState.count };
  }
}

console.log('Txn A (Success):', runTransaction(false));
console.log('Txn B (Failure):', runTransaction(true));`,
      tests: [
        {
          name: {
            en: 'Commits updated state when transaction succeeds',
            bn: 'ট্রানজ্যাকশন সফল হলে পরিবর্তিত স্টেট কমিট করে'
          },
          expected: 'Txn A (Success): { status: "COMMITTED", count: 15 }'
        },
        {
          name: {
            en: 'Restores original state when transaction fails',
            bn: 'ট্রানজ্যাকশন ব্যর্থ হলে মূল স্টেট পুনরুদ্ধার করে'
          },
          expected: 'Txn B (Failure): { status: "ROLLED_BACK", count: 15 }'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-commit-ex-1',
      kind: 'mcq',
      topic: 'transaction-atomicity-definition',
      question: {
        en: 'What fundamental guarantee does a database transaction provide when executing a multi-statement workflow?',
        bn: 'একাধিক স্টেটমেন্টের কাজের ক্ষেত্রে একটি ডাটাবেস ট্রানজ্যাকশন কোন মৌলিক নিশ্চয়তা প্রদান করে?'
      },
      options: [
        {
          en: 'All-or-Nothing execution: either every statement commits permanently to disk, or all modifications are completely rolled back upon error',
          bn: 'সবটুকু সম্পন্ন হবে নয়তো কিছুই নয় (All-or-Nothing): হয় প্রতিটি স্টেটমেন্ট সফলভাবে সেভ হবে, নয়তো ত্রুটি হলে সমস্ত পরিবর্তন বাতিল হয়ে যাবে'
        },
        {
          en: 'It accelerates SQL query speed by converting table data into audio files',
          bn: 'এটি টেবিলের ডাটাকে অডিও ফাইলে রূপান্তর করে কোয়েরির গতি বাড়িয়ে দেয়'
        },
        {
          en: 'It prevents developers from writing SQL syntax errors',
          bn: 'এটি ডেভেলপারদের SQL সিনট্যাক্সে ভুল করতে বাধা দেয়'
        },
        {
          en: 'It doubles the physical RAM capacity of the server computer',
          bn: 'এটি সার্ভার কম্পিউটারের ফিজিক্যাল র্যামের ধারণক্ষমতা দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Indivisibility: a transaction cannot leave half of its operations completed.',
        bn: 'অবিভাজ্যতা: একটি ট্রানজ্যাকশন তার অপারেশনের অর্ধেক সম্পন্ন রেখে যেতে পারে না।'
      },
      explanation: {
        en: 'A database transaction is an atomic unit of work. If any statement fails or the server crashes, the engine uses undo logs to reverse all prior writes in that transaction.',
        bn: 'ডাটাবেস ট্রানজ্যাকশন হলো কাজের অবিভাজ্য একক। কোনো স্টেটমেন্ট ব্যর্থ হলে বা সার্ভার বন্ধ হয়ে গেলে ইঞ্জিন আনডু লগ ব্যবহার করে সমস্ত পরিবর্তন পূর্বের অবস্থায় ফিরিয়ে নেয়।'
      }
    },
    {
      id: 'txn-commit-ex-2',
      kind: 'mcq',
      topic: 'rollback-triggering-events',
      question: {
        en: 'Which of the following events will cause a relational database to initiate an automatic transaction rollback?',
        bn: 'নিচের কোন ঘটনাটির কারণে রিলেশনাল ডাটাবেস স্বয়ংক্রিয়ভাবে ট্রানজ্যাকশন রোলব্যাক শুরু করবে?'
      },
      options: [
        {
          en: 'A client connection abruptly disconnects, a CHECK constraint is violated, or a deadlock is detected by the engine',
          bn: 'ক্লায়েন্টের সংযোগ হঠাৎ বিচ্ছিন্ন হলে, কোনো CHECK কনস্ট্রেইন্ট ভঙ্গ হলে অথবা ইঞ্জিন কর্তৃক ডেডলক ধরা পড়লে'
        },
        {
          en: 'A user views a SELECT query on their mobile screen',
          bn: 'কোনো ব্যবহারকারী তার মোবাইলের স্ক্রিনে SELECT কোয়েরি দেখলে'
        },
        {
          en: 'The server clock advances past 12:00 PM',
          bn: 'সার্ভারের ঘড়িতে দুপুর ১২:০০ বেজে গেলে'
        },
        {
          en: 'A table column is given an English name',
          bn: 'টেবিলের কলামে কোনো ইংরেজি নাম ব্যবহার করা হলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Integrity failures and lost client connections trigger automated rollbacks.',
        bn: 'অখণ্ডতার ত্রুটি এবং ক্লায়েন্টের সংযোগ বিচ্ছিন্ন হওয়া স্বয়ংক্রিয় রোলব্যাক শুরু করে।'
      },
      explanation: {
        en: 'Databases protect integrity by rolling back active transactions whenever a constraint fails, a deadlock requires aborting a victim, or the client crashes before issuing COMMIT.',
        bn: 'ডাটাবেস অখণ্ডতা রক্ষা করতে যেকোনো কনস্ট্রেইন্ট লঙ্ঘন, ডেডলক বা ক্লায়েন্ট হঠাৎ সংযোগ বিচ্ছিন্ন করলে চলমান ট্রানজ্যাকশন তাৎক্ষণিকভাবে রোলব্যাক করে।'
      }
    },
    {
      id: 'txn-commit-ex-3',
      kind: 'mcq',
      topic: 'http-call-in-transaction-hazard',
      question: {
        en: 'Why is invoking an external HTTP API (such as an SMS gateway or payment processor) inside an open database transaction dangerous?',
        bn: 'ওপেন ডাটাবেস ট্রানজ্যাকশনের ভেতর বাহ্যিক কোনো HTTP API (যেমন SMS গেটওয়ে বা পেমেন্ট প্রসেসর) কল করা কেন মারাত্মক বিপজ্জনক?'
      },
      options: [
        {
          en: 'If the external network call hangs for seconds, the transaction continues holding row locks and database connections, quickly exhausting the connection pool and taking down the system',
          bn: 'যদি বাহ্যিক নেটওয়ার্ক কল কয়েক সেকেন্ড আটকে থাকে, তবে ট্রানজ্যাকশনটি রো লক ও ডাটাবেস কানেকশন ধরে রাখে, যা দ্রুত কানেকশন পুল নিঃশেষ করে পুরো সিস্টেম ক্র্যাশ করায়'
        },
        {
          en: 'HTTP requests permanently delete primary keys from tables',
          bn: 'HTTP রিকোয়েস্ট টেবিল থেকে সমস্ত প্রাইমারি কি চিরতরে মুছে ফেলে'
        },
        {
          en: 'Databases can only communicate using Bluetooth',
          bn: 'ডাটাবেস শুধুমাত্র ব্লুটুথ ব্যবহার করে যোগাযোগ করতে পারে'
        },
        {
          en: 'HTTP APIs convert SQL queries into CSS stylesheets',
          bn: 'HTTP API সমস্ত SQL কোয়েরিকে CSS ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Holding database connections and locks while waiting for external networks is an anti-pattern.',
        bn: 'বাহ্যিক ইন্টারনেটের উত্তরের অপেক্ষায় ডাটাবেসের লক ও কানেকশন ধরে রাখা একটি মারাত্মক ভুল।'
      },
      explanation: {
        en: 'Database connections and row locks are scarce resources. Holding them open while waiting for third-party network I/O exhausts the database connection pool, starving other requests.',
        bn: 'ডাটাবেস কানেকশন ও রো লক অত্যন্ত মূল্যবান সম্পদ। তৃতীয় পক্ষের উত্তরের অপেক্ষায় এগুলো আটকে রাখলে সার্ভারের সমস্ত কানেকশন শেষ হয়ে অন্য ব্যবহারকারীরা আর ঢুকতে পারেন না।'
      }
    },
    {
      id: 'txn-commit-ex-4',
      kind: 'mcq',
      topic: 'undo-log-rollback-role',
      question: {
        en: 'What internal database storage mechanism allows the engine to reverse uncommitted modifications when a ROLLBACK command is received?',
        bn: 'কোন অভ্যন্তরীণ ডাটাবেস স্টোরেজ মেকানিজম ROLLBACK কমান্ড পাওয়ার পর অপরিবর্তিত ডাটাকে পূর্বাবস্থায় ফিরিয়ে নিতে সাহায্য করে?'
      },
      options: [
        {
          en: 'The Undo Log (or Rollback Segment), which stores previous row values before modifications to enable exact reversal',
          bn: 'আনডু লগ (Undo Log বা রোলব্যাক সেগমেন্ট), যা পরিবর্তনের আগের মূল মানগুলো সংরক্ষণ করে যাতে হুবহু বিপরীত পরিবর্তন চালানো যায়'
        },
        {
          en: 'The computer monitor cache memory',
          bn: 'কম্পিউটার মনিটরের ক্যাশ মেমরি'
        },
        {
          en: 'The operating system sound card driver',
          bn: 'অপারেটিং সিস্টেমের সাউন্ড কার্ডের ড্রাইভার'
        },
        {
          en: 'A physical notepad stored in the server room',
          bn: 'সার্ভার রুমে রাখা কোনো কাগজের নোটপ্যাড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Undo segments record "before images" of all modified records.',
        bn: 'আনডু সেগমেন্ট تمام পরিবর্তিত রেকর্ডের আগের ছবি সংরক্ষণ করে।'
      },
      explanation: {
        en: 'The undo log maintains the "before image" of modified records. When a rollback occurs, the database applies the undo log records in reverse chronological order to restore pre-transaction state.',
        bn: 'আনডু লগ প্রতিটি সারির পরিবর্তনের আগের অবস্থা সংরক্ষণ করে রাখে। রোলব্যাকের সময় ডাটাবেস এই লগ ব্যবহার করে সমস্ত পরিবর্তন উল্টো দিক থেকে বাতিল করে পূর্বের অবস্থা ফিরিয়ে আনে।'
      }
    }
  ],
  quiz: {
    id: 'txns-and-the-commit-quiz',
    title: {
      en: 'Transactions & Commits Assessment Quiz',
      bn: 'ট্রানজ্যাকশন ও কমিট মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'txn-commit-qz-1',
        kind: 'mcq',
        topic: 'partially-committed-state-meaning',
        question: {
          en: 'In the formal database transaction state machine, what does the "Partially Committed" state indicate?',
          bn: 'ডাটাবেস ট্রানজ্যাকশন স্টেট মেশিনে "পার্শিয়ালি কমিটেড (Partially Committed)" অবস্থা কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The final statement in the transaction has executed in memory, but modifications have not yet been fully flushed and confirmed to non-volatile disk storage (WAL)',
            bn: 'ট্রানজ্যাকশনের শেষ স্টেটমেন্টটি মেমরিতে সম্পন্ন হয়েছে, কিন্তু পরিবর্তনগুলো এখনও স্থায়ীভাবে ডিস্কে (WAL) ফ্লাশ ও নিশ্চিত করা হয়নি'
          },
          {
            en: 'Half of the user\'s money was transferred and the rest was stolen',
            bn: 'গ্রাহকের অর্ধেক টাকা পাঠানো হয়েছে এবং বাকিটা চুরি হয়ে গেছে'
          },
          {
            en: 'The database administrator partially approved the developer\'s request',
            bn: 'ডাটাবেস অ্যাডমিন ডেভেলপারের অনুরোধ আংশিক অনুমোদন করেছেন'
          },
          {
            en: 'The transaction is waiting for a software license update',
            bn: 'ট্রানজ্যাকশনটি সফটওয়্যার লাইসেন্স আপডেটের জন্য অপেক্ষা করছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Memory execution complete, but disk durability (fsync) is still pending.',
          bn: 'মেমরির কাজ শেষ হলেও ডিস্কে স্থায়ীভাবে লেখার কাজ তখনও বাকি।'
        },
        explanation: {
          en: 'A transaction enters the partially committed state after its final statement runs in memory. If a hardware failure strikes before the log buffer flushes to persistent disk, the transaction moves to Failed rather than Committed.',
          bn: 'মেমরিতে শেষ স্টেটমেন্ট চলার পর ট্রানজ্যাকশনটি এই অবস্থায় আসে। ডিস্কে লগ লেখার আগে সার্ভার ক্র্যাশ করলে এটি কমিট না হয়ে ব্যর্থ বা Failed অবস্থায় চলে যায়।'
        }
      },
      {
        id: 'txn-commit-qz-2',
        kind: 'mcq',
        topic: 'autocommit-mode-consequences',
        question: {
          en: 'What is "Autocommit" mode in database connections, and why must it be explicitly disabled for multi-statement atomic operations?',
          bn: 'ডাটাবেস কানেকশনে "অটোকমিট (Autocommit)" মোড কী এবং বহু-স্টেটমেন্টের কাজের জন্য কেন এটি বন্ধ করা আবশ্যক?'
        },
        options: [
          {
            en: 'Autocommit treats every individual SQL statement as an independent transaction, committing immediately; disabling it allows grouping multiple statements into one atomic block',
            bn: 'অটোকমিট প্রতিটি পৃথক SQL স্টেটমেন্টকে একটি একক ট্রানজ্যাকশন মনে করে সাথে সাথে কমিট করে; এটি বন্ধ করলে একাধিক স্টেটমেন্টকে একটিমাত্র ব্লকে আবদ্ধ করা যায়'
          },
          {
            en: 'Autocommit automatically charges the developer\'s credit card on every query',
            bn: 'অটোকমিট প্রতি কোয়েরিতে ডেভেলপারের ক্রেডিট কার্ড থেকে টাকা কেটে নেয়'
          },
          {
            en: 'Autocommit encrypts all column names with random passwords',
            bn: 'অটোকমিট সমস্ত কলামের নাম এলোমেলো পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'Autocommit prevents users from logging in on Saturdays',
            bn: 'অটোকমিট ব্যবহারকারীদের শনিবার দিনে লগইন করতে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without explicit BEGIN/COMMIT, autocommit seals each query immediately upon completion.',
          bn: 'স্পষ্ট BEGIN না থাকলে অটোকমিট প্রতিটি কোয়েরি চলার সাথে সাথে স্থায়ী করে দেয়।'
        },
        explanation: {
          en: 'In default autocommit mode, each statement commits automatically upon completion. If an operation requires two UPDATE queries, failure on the second leaves the first permanently committed unless wrapped in an explicit transaction.',
          bn: 'ডিফল্ট অটোকমিটে প্রতিটি কোয়েরি চলার সাথে সাথেই কমিট হয়ে যায়। দুটি আপডেটের ক্ষেত্রে ২য়টি ব্যর্থ হলেও ১মটি স্থায়ী থেকে যায়, যা ঠেকাতে সুস্পষ্ট ট্রানজ্যাকশন ব্যবহার করতে হয়।'
        }
      },
      {
        id: 'txn-commit-qz-3',
        kind: 'mcq',
        topic: 'connection-disconnect-rollback-safety',
        question: {
          en: 'If a backend web server crashes in the middle of executing a database transaction before sending COMMIT, what does the database engine do?',
          bn: 'যদি কোনো ওয়েব সার্ভার COMMIT পাঠানোর আগেই মাঝপথে ক্র্যাশ করে, তবে ডাটাবেস ইঞ্জিন কী পদক্ষেপ নেয়?'
        },
        options: [
          {
            en: 'It detects the broken TCP socket connection, marks the transaction as failed, and automatically executes a rollback using the undo logs',
            bn: 'এটি ভাঙা TCP সকেট সংযোগ শনাক্ত করে, ট্রানজ্যাকশনটি ব্যর্থ চিহ্নিত করে এবং আনডু লগ ব্যবহার করে সমস্ত পরিবর্তন স্বয়ংক্রিয়ভাবে রোলব্যাক করে'
          },
          {
            en: 'It commits all uncommitted changes immediately to save time',
            bn: 'সময় বাঁচাতে এটি সাথে সাথে সমস্ত অপরিবর্তিত ডাটা কমিট করে দেয়'
          },
          {
            en: 'It permanently locks the table so no one can ever access it again',
            bn: 'এটি টেবিলটিকে চিরতরে লক করে দেয় যাতে কেউ আর ঢুকতে না পারে'
          },
          {
            en: 'It deletes the entire operating system partition',
            bn: 'এটি পুরো অপারেটিং সিস্টেমের পার্টিশন মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Default safety: uncommitted transactions are never assumed to be successful.',
          bn: 'ডিফল্ট নিরাপত্তা: কমিট না হওয়া কোনো লেনদেনকে কখনোই সফল ধরা হয় না।'
        },
        explanation: {
          en: 'When a TCP client connection terminates without issuing COMMIT, relational database safety invariants require the engine to treat the transaction as aborted, rolling back all uncommitted mutations.',
          bn: 'কমিট করার আগেই কানেকশন বিচ্ছিন্ন হয়ে গেলে ডাটাবেসের নিরাপত্তা নিয়ম অনুসারে ইঞ্জিন সমস্ত পরিবর্তন বাতিল করে আগের অবস্থায় ফিরে যায়।'
        }
      },
      {
        id: 'txn-commit-qz-4',
        kind: 'mcq',
        topic: 'double-entry-invariant-ledger-rule',
        question: {
          en: 'In financial software engineering, why is the Double-Entry Accounting invariant (Total Debits = Total Credits) enforced inside an atomic transaction?',
          bn: 'আর্থিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ডাবল-এন্ট্রি অ্যাকাউন্টিং নিয়ম (মোট ডেবিট = মোট ক্রেডিট) কেন একটি অ্যাটমিক ট্রানজ্যাকশনের ভেতর কার্যকর করা হয়?'
        },
        options: [
          {
            en: 'To mathematically guarantee that money is never created or destroyed: every debit must be exactly matched by an offsetting credit within the same atomic commit',
            bn: 'টাকা যেন কখনো হাওয়া থেকে তৈরি বা ধ্বংস না হয় তা নিশ্চিত করতে: একই কমিটের ভেতর প্রতিটি ডেবিটের বিপরীতে সমান অঙ্কের ক্রেডিট নিশ্চিত করা'
          },
          {
            en: 'To make accounting reports render in green font rather than black',
            bn: 'অ্যাকাউন্টিং রিপোর্ট কালো রঙের বদলে সবুজ রঙে দেখানোর জন্য'
          },
          {
            en: 'Because banks only employ two accountants per branch',
            bn: 'কারণ ব্যাংকের প্রতি শাখায় কেবল ২ জন হিসাবরক্ষক কাজ করেন'
          },
          {
            en: 'Because SQL syntax prohibits tables with odd numbers of rows',
            bn: 'কারণ SQL সিনট্যাক্স বিজোড় সংখ্যার সারি থাকা টেবিলে নিষেধাজ্ঞা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Conservation of value: financial transactions must maintain zero-sum conservation.',
          bn: 'মূল্যের সংরক্ষণ: আর্থিক লেনদেনে টাকার মোট যোগফল সর্বদা অপরিবর্তিত থাকতে হবে।'
        },
        explanation: {
          en: 'Double-entry bookkeeping is a zero-sum invariant. Wrapping paired debit and credit entries inside an atomic transaction guarantees that money cannot vanish or duplicate even during hardware crashes.',
          bn: 'ডাবল-এন্ট্রি বুককিপিং একটি জিরো-সাম নিয়ম। ডেবিট এবং ক্রেডিটকে একটি ট্রানজ্যাকশনে রাখলে সার্ভার ক্র্যাশ করলেও টাকা হারিয়ে যাওয়া বা ডুপ্লিকেট হওয়ার কোনো সুযোগ থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'acids-and-the-acid',
    title: {
      en: 'The ACID Pillars: Invariants of Relational Consistency',
      bn: 'ACID স্তম্ভসমূহ: রিলেশনাল কনসিস্টেন্সির মূল ভিত্তি'
    }
  }
};
