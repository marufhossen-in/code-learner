import type { Lesson } from '../../../lib/types';

export const SavesAndTheSavepointLesson: Lesson = {
  slug: 'saves-and-the-savepoint',
  tech: 'transactions',
  title: {
    en: 'Savepoints & Nested Transactions: Partial Rollback Control',
    bn: 'সেভপয়েন্ট ও নেস্টেড ট্রানজ্যাকশন: আংশিক রোলব্যাক নিয়ন্ত্রণ'
  },
  summary: {
    en: 'Learn how to perform granular partial rollbacks without abandoning entire transactions using SQL SAVEPOINT, ROLLBACK TO SAVEPOINT, and RELEASE SAVEPOINT commands.',
    bn: 'SQL SAVEPOINT, ROLLBACK TO SAVEPOINT এবং RELEASE SAVEPOINT কমান্ড ব্যবহার করে পুরো লেনদেন বাতিল না করেই সূক্ষ্ম আংশিক রোলব্যাক করার কৌশল শিখুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'granularity-in-transaction-rollbacks',
      text: {
        en: 'The Need for Partial Rollbacks in Complex Workflows',
        bn: 'জটিল কাজের ধারায় আংশিক রোলব্যাকের প্রয়োজনীয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard SQL transaction is all-or-nothing: calling ROLLBACK discards every write executed since BEGIN. In complex multi-step workflows like e-commerce checkout, an error in an optional final step should not destroy all earlier progress. Standard SQL-1999 introduced Savepoints to provide intermediate safety markers within an active transaction.',
        bn: 'একটি সাধারণ SQL ট্রানজ্যাকশন সম্পূর্ণ বা শূন্য নীতিতে চলে: ROLLBACK চালালে BEGIN-এর পর থেকে করা تمام কাজ মুছে যায়। ই-কমার্সের মতো জটিল বহুধাপের কেনাকাটায় শেষের কোনো ঐচ্ছিক ধাপে ভুল হলে আগের সমস্ত কাজ বাতিল হওয়া কাম্য নয়। ১৯৯৯ সালের SQL মানদণ্ডে চলমান লেনদেনের ভেতরে মধ্যবর্তী সুরক্ষা মার্কার হিসেবে সেভপয়েন্ট (Savepoint) প্রবর্তন করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Savepoint establishes a named checkpoint in the transaction undo log. If an unexpected error occurs during a subsequent step, your application can selectively roll back only the modifications made after that savepoint. Earlier valid work remains protected, and the outer transaction stays alive to attempt alternate routes.',
        bn: 'সেভপয়েন্ট ট্রানজ্যাকশনের আনডু লগে একটি নামযুক্ত চেকপয়েন্ট তৈরি করে। পরবর্তী কোনো ধাপে অপ্রত্যাশিত ত্রুটি দেখা দিলে অ্যাপ্লিকেশনটি শুধুমাত্র সেই সেভপয়েন্টের পরের পরিবর্তনগুলো বাতিল করে দিতে পারে। আগের সঠিক কাজগুলো অক্ষত থাকে এবং মূল ট্রানজ্যাকশনটি সচল থেকে বিকল্প উপায়ে কাজ সম্পন্ন করতে পারে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Transaction Savepoint Stack and Selective Rollback Flow',
        bn: 'ট্রানজ্যাকশন সেভপয়েন্ট স্ট্যাক এবং নির্বাচনী রোলব্যাক প্রবাহ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Transaction Savepoint Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Timeline Bar -->
  <line x1="50" y1="130" x2="690" y2="130" stroke="#334155" stroke-width="4" />

  <!-- Step 1: BEGIN -->
  <g transform="translate(50, 95)">
    <circle cx="35" cy="35" r="25" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="35" y="40" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">BEGIN</text>
    <text x="35" y="75" fill="#94a3b8" font-size="9" text-anchor="middle">Txn Opens</text>
  </g>

  <!-- Step 2: Insert Order -->
  <g transform="translate(160, 95)">
    <rect width="100" height="50" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="50" y="24" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Step 1: Order</text>
    <text x="50" y="40" fill="#cbd5e1" font-size="9" text-anchor="middle">Insert Order #101</text>
  </g>

  <!-- Step 3: SAVEPOINT sp_pay -->
  <g transform="translate(300, 75)">
    <polygon points="30,0 60,30 30,60 0,30" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
    <text x="30" y="34" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">SAVEPOINT</text>
    <text x="30" y="80" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">sp_pay</text>
  </g>

  <!-- Step 4: Primary Gateway Failed -->
  <g transform="translate(400, 95)">
    <rect width="110" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
    <text x="55" y="24" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Primary Gateway</text>
    <text x="55" y="40" fill="#fecaca" font-size="9" text-anchor="middle">Card Declined (FAIL)</text>
  </g>

  <!-- Arc: Rollback to Savepoint -->
  <path d="M 455 95 Q 395 30 330 75" fill="none" stroke="#f87171" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#arrow)" />
  <text x="400" y="40" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">ROLLBACK TO sp_pay</text>

  <!-- Step 5: Secondary Gateway (OK) -->
  <g transform="translate(540, 95)">
    <rect width="110" height="50" rx="6" fill="#065f46" stroke="#10b981" stroke-width="1.5" />
    <text x="55" y="24" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Backup Gateway</text>
    <text x="55" y="40" fill="#a7f3d0" font-size="9" text-anchor="middle">Charge Succeeded</text>
  </g>

  <!-- Step 6: COMMIT -->
  <g transform="translate(640, 205)">
    <circle cx="35" cy="35" r="28" fill="#047857" stroke="#10b981" stroke-width="2" />
    <text x="35" y="40" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">COMMIT</text>
  </g>

  <!-- Explanation Banner -->
  <g transform="translate(30, 210)">
    <rect width="580" height="95" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="26" fill="#facc15" font-size="12" font-weight="bold">The 3 SQL Savepoint Commands:</text>
    <text x="25" y="48" fill="#38bdf8" font-size="11">1. SAVEPOINT name;</text>
    <text x="200" y="48" fill="#94a3b8" font-size="11">Creates a named checkpoint marker</text>
    <text x="25" y="68" fill="#f87171" font-size="11">2. ROLLBACK TO name;</text>
    <text x="200" y="68" fill="#94a3b8" font-size="11">Undoes later writes; preserves earlier work</text>
    <text x="25" y="88" fill="#34d399" font-size="11">3. RELEASE SAVEPOINT name;</text>
    <text x="200" y="88" fill="#94a3b8" font-size="11">Frees checkpoint resources; keeps changes pending</text>
  </g>
</svg>`,
      caption: {
        en: 'Transaction savepoint lifecycle: partial rollback reverts failed primary payment without losing the order record.',
        bn: 'ট্রানজ্যাকশন সেভপয়েন্ট জীবনচক্র: আংশিক রোলব্যাকের মাধ্যমে অর্ডার রেকর্ড না হারিয়েই ব্যর্থ পেমেন্ট বাতিল করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'SAVEPOINT',
          def: {
            en: 'An SQL statement creating a named checkpoint marker inside an active transaction without committing changes to disk.',
            bn: 'একটি SQL স্টেটমেন্ট যা ডিস্কে কমিট না করেই চলমান লেনদেনের ভেতরে একটি নামযুক্ত চেকপয়েন্ট মার্কার তৈরি করে।'
          }
        },
        {
          term: 'ROLLBACK TO SAVEPOINT',
          def: {
            en: 'An SQL command that undoes all operations executed after the named savepoint, preserving earlier work and leaving the transaction open.',
            bn: 'একটি SQL কমান্ড যা নির্দিষ্ট সেভপয়েন্টের পরের সমস্ত কাজ মুছে দেয় কিন্তু আগের কাজ অক্ষত রেখে লেনদেন সচল রাখে।'
          }
        },
        {
          term: 'RELEASE SAVEPOINT',
          def: {
            en: 'An SQL command that removes a savepoint marker from memory without undoing or committing any transactional changes.',
            bn: 'একটি SQL কমান্ড যা কোনো কাজ বাতিল বা কমিট না করেই মেমরি থেকে সেভপয়েন্ট মার্কারটি মুছে ফেলে।'
          }
        },
        {
          term: 'Nested Transaction',
          def: {
            en: 'A hierarchical transaction structure where inner transactions can commit or abort independently of the enclosing parent transaction.',
            bn: 'এমন একটি শ্রেণিবদ্ধ ট্রানজ্যাকশন যেখানে ভেতরের লেনদেন মূল লেনদেনের বাইরে স্বাধীনভাবে কমিট বা বাতিল হতে পারে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'savepoints-vs-nested-txns',
      text: {
        en: 'Savepoints vs True Nested Transactions and ORM Emulation',
        bn: 'সেভপয়েন্ট বনাম সত্যিকারের নেস্টেড ট্রানজ্যাকশন এবং ORM কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Most production relational engines (including PostgreSQL and MySQL) do not support true physical nested transactions with independent parent-child commits. If a child transaction commits, its modifications cannot become permanent until the top-level parent transaction commits. If the parent subsequently rolls back, all child commits are obliterated.',
        bn: 'বেশিরভাগ প্রোডাকশন ডাটাবেস (যেমন PostgreSQL ও MySQL) স্বাধীনভাবে চাইল্ড কমিট করার মতো সত্যিকারের নেস্টেড ট্রানজ্যাকশন সমর্থন করে না। চাইল্ড ট্রানজ্যাকশন কমিট করলেও মূল প্যারেন্ট ট্রানজ্যাকশন চূড়ান্ত কমিট না করা পর্যন্ত তা ডিস্কে স্থায়ী হয় না। প্যারেন্ট কোনো কারণে রোলব্যাক করলে تمام চাইল্ড পরিবর্তনও নিশ্চিহ্ন হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Popular Object-Relational Mappers (ORMs) such as Prisma, TypeORM, Hibernate, and Django ORM emulate nested transactions using savepoints transparently. When an inner service annotated with a transactional decorator executes, the ORM issues SAVEPOINT nested_txn. Should that nested logic throw an unexpected exception, the framework catches the failure and triggers ROLLBACK TO SAVEPOINT nested_txn, preserving outer state.',
        bn: 'জনপ্রিয় ORM ফ্রেমওয়ার্কগুলো (যেমন Prisma, TypeORM বা Django ORM) নেপথ্যে সেভপয়েন্ট ব্যবহার করে নেস্টেড ট্রানজ্যাকশন অনুকরণ করে। যখন কোনো ট্রানজ্যাকশনাল মেথডের ভেতর আরেকটি মেথড ডাকা হয়, ORM একটি নতুন সেভপয়েন্ট তৈরি করে। ভেতরের কোডে কোনো ত্রুটি দেখা দিলে ফ্রেমওয়ার্ক সাথে সাথে তা ধরে ফেলে এবং ROLLBACK TO SAVEPOINT nested_txn কমান্ড চালিয়ে বাইরের মূল অবস্থাকে অক্ষত রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'node-savepoint-engine',
      text: {
        en: 'Executable Savepoint Stack and Partial Rollback Engine',
        bn: 'রানযোগ্য সেভপয়েন্ট স্ট্যাক এবং আংশিক রোলব্যাক ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine demonstrating the 3 SQL savepoint commands in a multi-gateway checkout workflow. It creates an order record, marks a savepoint, rolls back a failed payment attempt, successfully charges a secondary gateway, and commits 2 valid records.',
        bn: 'নিচে একাধিক পেমেন্ট গেটওয়েযুক্ত কেনাকাটায় ৩টি SQL সেভপয়েন্ট কমান্ডের কার্যকারিতা প্রদর্শনের একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি একটি অর্ডার রেকর্ড তৈরি করে, সেভপয়েন্ট চিহ্নিত করে, ব্যর্থ পেমেন্ট রোলব্যাক করে, সফলভাবে ব্যাকআপ গেটওয়েতে চার্জ করে এবং ২টি বৈধ রেকর্ড কমিট করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Transaction engine demonstrating SAVEPOINT creation, partial ROLLBACK TO, and final COMMIT',
        bn: 'SAVEPOINT তৈরি, আংশিক ROLLBACK TO এবং চূড়ান্ত COMMIT প্রদর্শনকারী ট্রানজ্যাকশন ইঞ্জিন'
      },
      code: `// Stack-based Transaction Savepoint Coordinator
class SavepointTransaction {
  constructor() {
    this.ledger = [];
    this.savepoints = {};
  }

  insert(entry) {
    this.ledger.push(entry);
  }

  savepoint(name) {
    // Record current stack depth
    this.savepoints[name] = this.ledger.length;
  }

  rollbackTo(name) {
    const targetDepth = this.savepoints[name];
    if (targetDepth !== undefined) {
      // Truncate ledger back to savepoint checkpoint
      this.ledger = this.ledger.slice(0, targetDepth);
    }
  }

  release(name) {
    delete this.savepoints[name];
  }
}

const txn = new SavepointTransaction();

// Step 1: Create Order #101
txn.insert({ id: 101, type: 'ORDER_CREATED', amount: 500 });
console.log(\`[Savepoint Engine] Step 1: Created order record (ID: 101).\`);

// Step 2: Set Savepoint before testing external payment gateway
txn.savepoint('sp_payment');
txn.insert({ id: 201, type: 'CHARGE_PRIMARY_GATEWAY_REJECTED' });

// Step 3: Primary payment failed! Execute partial rollback to savepoint
txn.rollbackTo('sp_payment');
console.log(\`[Savepoint Engine] Rolled back to SAVEPOINT sp_payment; order record preserved while failed charge reverted.\`);

// Step 4: Fallback to secondary payment gateway (succeeds)
txn.insert({ id: 202, type: 'CHARGE_SECONDARY_GATEWAY_APPROVED' });
txn.release('sp_payment');

const isCommitted = txn.ledger.length === 2 && txn.ledger[0].id === 101 && txn.ledger[1].id === 202;
console.log(\`[Savepoint Engine] Secondary gateway succeeded; committed transaction with \${txn.ledger.length} records (1/1: \${isCommitted}).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Memory Overhead of Unreleased Savepoints',
        bn: 'মুক্ত না করা সেভপয়েন্টের মেমরি অপচয়'
      },
      text: {
        en: 'Each active savepoint retains an undo sub-transaction snapshot in server RAM. In massive loops inserting millions of rows, failing to call RELEASE SAVEPOINT exhausts memory and slows down subsequent query execution. Always release savepoints as soon as an operation confirms success.',
        bn: 'প্রতিটি সক্রিয় সেভপয়েন্ট সার্ভারের মেমরিতে আনডু সাব-ট্রানজ্যাকশন স্ন্যাপশট ধরে রাখে। লক্ষ লক্ষ রো প্রসেস করার সময় RELEASE SAVEPOINT না চালালে মেমরি শেষ হয়ে সার্ভার ধীরগতির হয়ে পড়তে পারে। কাজ নিশ্চিত হওয়ার সাথে সাথেই সেভপয়েন্ট রিলিজ করে দেওয়া উচিত।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Savepoint Rollback Predictor',
        bn: 'সেভপয়েন্ট রোলব্যাক পূর্বাভাসক'
      },
      description: {
        en: 'Simulate transactional stacks: evaluate the number of surviving records after a partial rollback to a named savepoint.',
        bn: 'ট্রানজ্যাকশন স্ট্যাক সিমুলেট করুন: সেভপয়েন্টে আংশিক রোলব্যাকের পর কতটি রেকর্ড অবশিষ্ট থাকে তা মূল্যায়ন করুন।'
      },
      code: `function simulateSavepointStack() {
  const stack = ['ROW_1', 'ROW_2'];
  const spIndex = stack.length; // SAVEPOINT sp1 (depth = 2)

  stack.push('ROW_3_FAIL');
  stack.push('ROW_4_FAIL');

  // ROLLBACK TO sp1
  stack.length = spIndex;

  stack.push('ROW_3_SUCCESS');
  return stack.join(', ');
}

console.log('Surviving Records:', simulateSavepointStack());`,
      tests: [
        {
          name: {
            en: 'Preserves pre-savepoint records and appends new recovery record',
            bn: 'সেভপয়েন্টের আগের রেকর্ড অক্ষত রেখে নতুন রিকভারি রেকর্ড যুক্ত করে'
          },
          expected: 'Surviving Records: ROW_1, ROW_2, ROW_3_SUCCESS'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-save-ex-1',
      kind: 'mcq',
      topic: 'rollback-to-savepoint-action',
      question: {
        en: 'What specific database action occurs when an application executes the ROLLBACK TO SAVEPOINT order_checkpoint statement?',
        bn: 'অ্যাপ্লিকেশন যখন ROLLBACK TO SAVEPOINT order_checkpoint স্টেটমেন্ট চালায়, তখন ডাটাবেসে সুনির্দিষ্টভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'All modifications made after order_checkpoint was declared are reverted, while all modifications made prior to that savepoint remain active and uncommitted',
          bn: 'order_checkpoint তৈরির পরের તમામ পরিবর্তন বাতিল হয়ে যায়, কিন্তু সেই সেভপয়েন্টের আগের সমস্ত কাজ বহাল ও সক্রিয় থাকে'
        },
        {
          en: 'The entire database is deleted and re-installed from source code',
          bn: 'পুরো ডাটাবেস মুছে গিয়ে সোর্স কোড থেকে পুনরায় ইনস্টল হয়'
        },
        {
          en: 'The database server immediately terminates all user sessions across the world',
          bn: 'ডাটাবেস সার্ভার বিশ্বজুড়ে تمام ব্যবহারকারীর সেশন সাথে সাথে বন্ধ করে দেয়'
        },
        {
          en: 'All data tables are printed out onto paper documents',
          bn: 'تمام ডাটা টেবিল স্বয়ংক্রিয়ভাবে কাগজে প্রিন্ট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rollback to savepoint is partial: it only reverts work done after the checkpoint.',
        bn: 'সেভপয়েন্টে রোলব্যাক হলো আংশিক: এটি কেবল চেকপয়েন্টের পরের কাজ বাতিল করে।'
      },
      explanation: {
        en: 'ROLLBACK TO SAVEPOINT allows granular failure recovery. Modifications preceding the savepoint remain intact in the transaction workspace.',
        bn: 'ROLLBACK TO SAVEPOINT আংশিক ব্যর্থতা কাটিয়ে ওঠার সুযোগ দেয়। সেভপয়েন্টের আগের সমস্ত সঠিক কাজ অক্ষত থেকে যায়।'
      }
    },
    {
      id: 'txn-save-ex-2',
      kind: 'mcq',
      topic: 'release-savepoint-purpose',
      question: {
        en: 'What is the precise purpose of executing RELEASE SAVEPOINT my_savepoint in SQL?',
        bn: 'SQL-এ RELEASE SAVEPOINT my_savepoint চালানোর সুনির্দিষ্ট উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It destroys the named savepoint marker and frees transaction manager resources without rolling back or committing any pending data changes',
          bn: 'এটি কোনো কাজ বাতিল বা কমিট না করেই মেমরি থেকে সেভপয়েন্ট মার্কারটি মুছে ফেলে সিস্টেম রিসোর্স খালি করে'
        },
        {
          en: 'It permanently commits the transaction directly to physical disk',
          bn: 'এটি স্থায়ীভাবে ট্রানজ্যাকশনকে সরাসরি ডিস্কে কমিট করে দেয়'
        },
        {
          en: 'It undoes all operations back to the start of the transaction',
          bn: 'এটি লেনদেনের শুরু পর্যন্ত সমস্ত অপারেশন বাতিল করে দেয়'
        },
        {
          en: 'It locks the database computer with a secret password',
          bn: 'এটি একটি গোপন পাসওয়ার্ড দিয়ে ডাটাবেস কম্পিউটারকে লক করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Release destroys the marker; changes remain pending until final COMMIT.',
        bn: 'রিলিজ মার্কারটি মুছে ফেলে; পরিবর্তনগুলো চূড়ান্ত COMMIT পর্যন্ত পেন্ডিং থাকে।'
      },
      explanation: {
        en: 'RELEASE SAVEPOINT disposes of the bookmark once it is no longer needed, reclaiming lock manager and transaction table RAM while retaining modifications.',
        bn: 'RELEASE SAVEPOINT অপ্রয়োজনীয় হয়ে যাওয়া মার্কারটি মুছে মেমরি রিসোর্স খালি করে, কিন্তু ট্রানজ্যাকশনের কোনো পরিবর্তন নষ্ট করে না।'
      }
    },
    {
      id: 'txn-save-ex-3',
      kind: 'mcq',
      topic: 'parent-child-rollback-fate',
      question: {
        en: 'If an inner nested block succeeds and releases its savepoint, but the enclosing parent transaction later executes a full ROLLBACK, what happens to the inner changes?',
        bn: 'যদি কোনো ভেতরের ব্লক সফল হয়ে তার সেভপয়েন্ট রিলিজ করে, কিন্তু পরবর্তীতে মূল প্যারেন্ট ট্রানজ্যাকশন সম্পূর্ণ ROLLBACK করে, তবে ভেতরের পরিবর্তনের কী পরিণতি হয়?'
      },
      options: [
        {
          en: 'All inner changes are completely rolled back because savepoint modifications are provisional until the top-level parent transaction commits',
          bn: 'ভেতরের તમામ পরিবর্তন সম্পূর্ণরূপে বাতিল হয়ে যায় কারণ শীর্ষ স্তরের প্যারেন্ট কমিট না করা পর্যন্ত সেভপয়েন্টের কোনো কাজই স্থায়ী হয় না'
        },
        {
          en: 'The inner changes remain permanently written to the disk drive',
          bn: 'ভেতরের পরিবর্তনগুলো ডিস্কে স্থায়ীভাবে সংরক্ষিত থেকে যায়'
        },
        {
          en: 'The database server crashes with an unrecoverable kernel panic',
          bn: 'ডাটাবেস সার্ভার কার্নেল প্যানিক সৃষ্টি করে স্থায়ীভাবে বন্ধ হয়ে যায়'
        },
        {
          en: 'Only half of the numbers in the inner block are saved',
          bn: 'ভেতরের ব্লকের শুধুমাত্র অর্ধেক সংখ্যা সেভ হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Parent rollback wipes out everything under its scope, including released savepoints.',
        bn: 'প্যারেন্ট রোলব্যাক হলে তার আওতাধীন تمام কাজ এবং রিলিজ করা সেভপয়েন্টও মুছে যায়।'
      },
      explanation: {
        en: 'Savepoints exist purely within the lifecycle of the parent transaction. If the parent transaction aborts, all provisional writes within it are reverted.',
        bn: 'সেভপয়েন্টের স্থায়িত্ব মূল ট্রানজ্যাকশনের ওপর নির্ভরশীল। মূল লেনদেন বাতিল হলে তার ভেতরে হওয়া সমস্ত কাজই বাতিল হয়ে যায়।'
      }
    },
    {
      id: 'txn-save-ex-4',
      kind: 'mcq',
      topic: 'orm-nested-transaction-emulation',
      question: {
        en: 'How do popular Object-Relational Mappers (ORMs like Prisma and Hibernate) implement nested transaction functions without native database support?',
        bn: 'জনপ্রিয় ORM ফ্রেমওয়ার্কগুলো (যেমন Prisma বা Hibernate) ডাটাবেসের সরাসরি নেস্টেড সাপোর্ট ছাড়াই কীভাবে নেস্টেড ট্রানজ্যাকশন কার্যকর করে?'
      },
      options: [
        {
          en: 'By mapping inner transaction scopes to intermediate SQL SAVEPOINT commands and issuing ROLLBACK TO SAVEPOINT if an inner exception is caught',
          bn: 'ভেতরের লেনদেনগুলোকে SQL SAVEPOINT কমান্ডে রূপান্তর করে এবং কোনো এক্সেপশন ধরা পড়লে ROLLBACK TO SAVEPOINT চালিয়ে'
        },
        {
          en: 'By creating 100 new database user accounts for every query',
          bn: 'প্রতিটি কোয়েরির জন্য ১০০টি নতুন ব্যবহারকারী অ্যাকাউন্ট তৈরি করে'
        },
        {
          en: 'By transferring all tables into Microsoft Word documents',
          bn: 'تمام টেবিলগুলোকে মাইক্রোসফট ওয়ার্ড ফাইলে স্থানান্তর করে'
        },
        {
          en: 'By pausing the computer CPU for 10 seconds between lines',
          bn: 'কোডের প্রতিটি লাইনের মাঝে সিপিইউকে ১০ সেকেন্ডের জন্য থামিয়ে রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'ORMs map nested transaction decorators to SQL SAVEPOINT and ROLLBACK TO SAVEPOINT.',
        bn: 'ORM নেস্টেড ট্রানজ্যাকশনগুলোকে SQL সেভপয়েন্ট ও রোলব্যাকের সাথে যুক্ত করে।'
      },
      explanation: {
        en: 'Because standard databases lack multi-level autonomous sub-transactions, ORMs translate nested boundaries into SAVEPOINT statements, rolling back partially upon errors.',
        bn: 'অধিকাংশ ডাটাবেসে সত্যিকারের নেস্টেড ট্রানজ্যাকশন না থাকায় ORM সেভপয়েন্ট ব্যবহার করে বুদ্ধিমত্তার সাথে আংশিক রোলব্যাকের সুবিধা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'saves-and-the-savepoint-quiz',
    title: {
      en: 'Savepoints & Granular Rollbacks Quiz',
      bn: 'সেভপয়েন্ট ও আংশিক রোলব্যাক কুইজ'
    },
    questions: [
      {
        id: 'txn-save-qz-1',
        kind: 'mcq',
        topic: 'savepoint-standard-history',
        question: {
          en: 'Which international SQL standard officially introduced the SAVEPOINT and ROLLBACK TO SAVEPOINT syntax to relational databases?',
          bn: 'কোন আন্তর্জাতিক SQL মানদণ্ডে রিলেশনাল ডাটাবেসের জন্য SAVEPOINT এবং ROLLBACK TO SAVEPOINT সিনট্যাক্স আনুষ্ঠানিকভাবে অন্তর্ভুক্ত করা হয়েছিল?'
        },
        options: [
          {
            en: 'SQL:1999 (also known informally as SQL3)',
            bn: 'SQL:1999 (অনানুষ্ঠানিকভাবে SQL3 নামেও পরিচিত)'
          },
          {
            en: 'SQL-86 (the original 1986 ANSI specification)',
            bn: 'SQL-86 (মূল ১৯৮৬ সালের ANSI স্পেসিফিকেশন)'
          },
          {
            en: 'HTML5 specification published by W3C',
            bn: 'W3C কর্তৃক প্রকাশিত HTML5 স্পেসিফিকেশন'
          },
          {
            en: 'ECMAScript 2015 JavaScript standard',
            bn: 'ECMAScript 2015 জাভাস্ক্রিপ্ট স্ট্যান্ডার্ড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Savepoints were introduced in SQL:1999.',
          bn: 'সেভপয়েন্ট SQL:1999 মানদণ্ডে প্রবর্তন করা হয়েছিল।'
        },
        explanation: {
          en: 'SQL:1999 introduced several major architectural enhancements to the SQL standard, including triggers, recursive queries (WITH RECURSIVE), and transactional SAVEPOINTS.',
          bn: 'SQL:1999 স্ট্যান্ডার্ডে ট্রিগার, রিকার্সিভ কোয়েরি এবং ট্রানজ্যাকশনাল সেভপয়েন্টের মতো গুরুত্বপূর্ণ আধুনিক ফিচারগুলো যুক্ত করা হয়।'
        }
      },
      {
        id: 'txn-save-qz-2',
        kind: 'mcq',
        topic: 'savepoint-duplicate-names',
        question: {
          en: 'In PostgreSQL, what occurs if you create a new SAVEPOINT with the identical name of an already existing savepoint in the same transaction?',
          bn: 'PostgreSQL-এ একই ট্রানজ্যাকশনে পূর্বে বিদ্যমান একটি সেভপয়েন্টের একই নামে নতুন SAVEPOINT তৈরি করলে কী ঘটে?'
        },
        options: [
          {
            en: 'The earlier savepoint with that name is overshadowed; ROLLBACK TO SAVEPOINT will roll back to the newest marker created with that name',
            bn: 'পূর্বের সেভপয়েন্টটি ঢাকা পড়ে যায়; ROLLBACK TO SAVEPOINT চালালে একই নামের সর্বশেষ তৈরিকৃত মার্কারটিতে রোলব্যাক হবে'
          },
          {
            en: 'The database server immediately catches fire',
            bn: 'ডাটাবেস সার্ভারে সাথে সাথে আগুন ধরে যায়'
          },
          {
            en: 'The entire database converts all tables into JSON files',
            bn: 'পুরো ডাটাবেস تمام টেবিলকে JSON ফাইলে রূপান্তর করে'
          },
          {
            en: 'An unrecoverable syntax crash destroys the hard drive',
            bn: 'একটি মারাত্মক সিনট্যাক্স ক্র্যাশ হার্ডডিস্ক নষ্ট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Duplicate savepoints push onto a name stack, shadowing older checkpoints.',
          bn: 'একই নামের সেভপয়েন্ট স্ট্যাকের ওপর বসে এবং আগেরটিকে ঢেকে দেয়।'
        },
        explanation: {
          en: 'PostgreSQL maintains a stack for duplicate savepoint names. Rolling back returns to the most recently defined checkpoint bearing that name.',
          bn: 'PostgreSQL একই নামের সেভপয়েন্টের জন্য একটি স্ট্যাক রাখে। রোলব্যাক করলে সেই নামের সর্বশেষ তৈরিকৃত পয়েন্টটিতেই ফিরে যাওয়া হয়।'
        }
      },
      {
        id: 'txn-save-qz-3',
        kind: 'mcq',
        topic: 'savepoints-and-lock-retention',
        question: {
          en: 'When rolling back to a savepoint, what happens to row locks acquired by SQL statements executed after that savepoint?',
          bn: 'কোনো সেভপয়েন্টে রোলব্যাক করার সময় সেই সেভপয়েন্টের পরে নেওয়া রো লকগুলোর কী পরিণতি হয়?'
        },
        options: [
          {
            en: 'The locks acquired exclusively by the reverted statements are released by the lock manager, while locks acquired prior to the savepoint remain held',
            bn: 'বাতিলকৃত স্টেটমেন্টগুলোর নেওয়া লকগুলো লক ম্যানেজার মুক্ত করে দেয়, কিন্তু সেভপয়েন্টের আগের নেওয়া লকগুলো বহাল থাকে'
          },
          {
            en: 'All locks across the entire table are permanently frozen forever',
            bn: 'পুরো টেবিলের تمام লক চিরতরে স্তব্ধ হয়ে যায়'
          },
          {
            en: 'The database server turns off its internal network ports',
            bn: 'ডাটাবেস সার্ভার তার অভ্যন্তরীণ নেটওয়ার্ক পোর্ট বন্ধ করে দেয়'
          },
          {
            en: 'The locks are transferred to a random user on the internet',
            bn: 'লকগুলো ইন্টারনেটের কোনো এলোমেলো ব্যবহারকারীর কাছে চলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Locks on reverted modifications are freed, freeing waiting transactions.',
          bn: 'বাতিল হওয়া পরিবর্তনের ওপর থাকা লকগুলো ছেড়ে দেওয়া হয়, ফলে অন্য কোয়েরি চলতে পারে।'
        },
        explanation: {
          en: 'When a sub-transaction rolls back to a savepoint, modifications are undone and the locks held specifically on those reverted rows are released back to the lock pool.',
          bn: 'সেভপয়েন্টে রোলব্যাকের সময় যে পরিবর্তনগুলো বাতিল করা হয়, তাদের ওপর থাকা লকগুলো লক ম্যানেজার আবার উন্মুক্ত করে দেয়।'
        }
      },
      {
        id: 'txn-save-qz-4',
        kind: 'mcq',
        topic: 'autonomous-transactions-oracle-contrast',
        question: {
          en: 'How do Oracle Autonomous Transactions (PRAGMA AUTONOMOUS_TRANSACTION) differ from standard SQL savepoints?',
          bn: 'Oracle অটোনোমাস ট্রানজ্যাকশন কীভাবে সাধারণ SQL সেভপয়েন্ট থেকে আলাদা?'
        },
        options: [
          {
            en: 'An autonomous transaction executes in an entirely separate context with its own independent commit boundary; its commit persists even if the calling parent rolls back',
            bn: 'একটি অটোনোমাস ট্রানজ্যাকশন সম্পূর্ণ পৃথক প্রেক্ষাপটে নিজস্ব স্বাধীন কমিট নিয়ে চলে; মূল প্যারেন্ট বাতিল হলেও এর কমিট ডিস্কে স্থায়ী থাকে'
          },
          {
            en: 'Autonomous transactions can only run on mobile phones',
            bn: 'অটোনোমাস ট্রানজ্যাকশন কেবল মোবাইল ফোনে চলতে পারে'
          },
          {
            en: 'They require users to manually type 1000 lines of binary numbers',
            bn: 'এতে ব্যবহারকারীকে ম্যানুয়ালি ১০০০ লাইনের বাইনারি সংখ্যা টাইপ করতে হয়'
          },
          {
            en: 'They delete the primary key from all referenced tables',
            bn: 'তারা সমস্ত সংশ্লিষ্ট টেবিল থেকে প্রাইমারি কি মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Autonomous transactions commit independently of the parent caller.',
          bn: 'অটোনোমাস ট্রানজ্যাকশন প্যারেন্ট ট্রানজ্যাকশন থেকে সম্পূর্ণ স্বাধীনভাবে কমিট হতে পারে।'
        },
        explanation: {
          en: 'Autonomous transactions suspend the calling transaction, start a separate physical transaction, commit independent audit logs, and resume the parent. Unlike savepoints, their commits are truly permanent.',
          bn: 'অটোনোমাস ট্রানজ্যাকশন মূল লেনদেনকে সাময়িক থামিয়ে সম্পূর্ণ স্বাধীনভাবে কাজ করে অডিট লগ সেভ করে। সেভপয়েন্টের মতো এটি প্যারেন্টের ওপর নির্ভরশীল নয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'recovers-and-the-recovery',
    title: {
      en: 'Crash Recovery Internals: Write-Ahead Logging & ARIES',
      bn: 'ক্র্যাশ রিকভারি কৌশল: রাইট-অ্যাহেড লগিং ও ARIES অ্যালগরিদম'
    }
  }
};
