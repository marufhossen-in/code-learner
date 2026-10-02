import type { Lesson } from '../../../lib/types';

export const RecoversAndTheRecoveryLesson: Lesson = {
  slug: 'recovers-and-the-recovery',
  tech: 'transactions',
  title: {
    en: 'Crash Recovery Internals: Write-Ahead Logging & ARIES',
    bn: 'ক্র্যাশ রিকভারি কৌশল: রাইট-অ্যাহেড লগিং ও ARIES অ্যালগরিদম'
  },
  summary: {
    en: 'Discover how database storage engines survive power cuts and hardware crashes using Write-Ahead Logging (WAL) and the classic 3-phase ARIES recovery algorithm.',
    bn: 'রাইট-অ্যাহেড লগিং (WAL) এবং ক্লাসিক ৩-ফেজ ARIES রিকভারি অ্যালগরিদম ব্যবহার করে ডাটাবেস স্টোরেজ ইঞ্জিন কীভাবে বিদ্যুৎ বিভ্রাট ও হার্ডওয়্যার ক্র্যাশ থেকে বেঁচে ফেরে তা জানুন।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'the-recovery-problem',
      text: {
        en: 'The Volatile Memory Dilemma and Write-Ahead Logging',
        bn: 'ভোলাটাইল মেমরির সংকট এবং রাইট-অ্যাহেড লগিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database servers store active data pages inside computer RAM to serve queries with microsecond speed. When you run an UPDATE statement, the engine modifies the page in RAM first, marking it dirty. If the physical power plug is pulled from the wall at that instant, every unwritten page in volatile memory vanishes into thin air.',
        bn: 'ডাটাবেস সার্ভার মাইক্রোসেকেন্ড গতিতে কোয়েরির উত্তর দিতে কম্পিউটার র‍্যামের ভেতর সক্রিয় ডাটা পেজ সংরক্ষণ করে। যখন আপনি কোনো UPDATE স্টেটমেন্ট চালান, ইঞ্জিন প্রথমে র‍্যামের পেজ পরিবর্তন করে এবং সেটিকে ডার্টি হিসেবে চিহ্নিত করে। সেই মুহূর্তে যদি সার্ভারের বিদ্যুৎ সংযোগ হঠাৎ বিচ্ছিন্ন হয়ে যায়, তবে মেমরির تمام অপূর্ণ পরিবর্তন নিমেষেই বাতাসে মিলিয়ে যাবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing data pages directly to random disk sectors during every query would cause extreme disk slowdowns. Instead, relational databases solve this with Write-Ahead Logging (WAL). The engine appends changes to a sequential log file on disk before modifying tables. Sequential disk writes are remarkably fast, providing full crash recovery at peak performance.',
        bn: 'প্রতিটি কোয়েরির সাথে সাথে সরাসরি হার্ডডিস্কের এলোমেলো সেক্টরে ডাটা পেজ লিখতে গেলে সার্ভারের গতি চরমভাবে হ্রাস পেত। এর বদলে রিলেশনাল ডাটাবেসগুলো রাইট-অ্যাহেড লগিং (WAL) কৌশল ব্যবহার করে। টেবিলে মূল পরিবর্তন আনার আগেই ইঞ্জিন ডিস্কে থাকা একটি ধারাবাহিক লগ ফাইলে সেই পরিবর্তনের বিবরণ লিখে রাখে। সিকোয়েনশিয়াল রাইট অত্যন্ত দ্রুতগতির হওয়ায় এটি সর্বোচ্চ গতিতে নিখুঁত ক্র্যাশ রিকভারির সুযোগ দেয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The 3 Phases of the ARIES Crash Recovery Algorithm',
        bn: 'ARIES ক্র্যাশ রিকভারি অ্যালগরিদমের ৩টি পর্যায়'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="ARIES Crash Recovery Algorithm Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Timeline Axis -->
  <line x1="40" y1="130" x2="700" y2="130" stroke="#334155" stroke-width="4" />

  <!-- Checkpoint Marker -->
  <g transform="translate(60, 60)">
    <rect width="120" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="60" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Checkpoint</text>
    <text x="60" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Known Clean State</text>
    <line x1="60" y1="50" x2="60" y2="70" stroke="#38bdf8" stroke-width="2" />
  </g>

  <!-- Phase 1: Analysis -->
  <g transform="translate(200, 45)">
    <rect width="130" height="65" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="130" height="24" rx="6" fill="#d97706" />
    <text x="65" y="16" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Phase 1: Analysis</text>
    <text x="10" y="40" fill="#fbbf24" font-size="9" font-weight="bold">Scan WAL Forward</text>
    <text x="10" y="55" fill="#cbd5e1" font-size="9">Find Winner / Loser txns</text>
  </g>

  <!-- Crash Point -->
  <g transform="translate(460, 95)">
    <circle cx="35" cy="35" r="26" fill="#7f1d1d" stroke="#ef4444" stroke-width="2" />
    <text x="35" y="32" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">POWER</text>
    <text x="35" y="46" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">CRASH</text>
  </g>

  <!-- Phase 2: Redo -->
  <g transform="translate(350, 45)">
    <rect width="130" height="65" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="130" height="24" rx="6" fill="#059669" />
    <text x="65" y="16" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Phase 2: Redo</text>
    <text x="10" y="40" fill="#34d399" font-size="9" font-weight="bold">Repeat History</text>
    <text x="10" y="55" fill="#cbd5e1" font-size="9">Replay all logged writes</text>
  </g>

  <!-- Phase 3: Undo -->
  <g transform="translate(520, 45)">
    <rect width="140" height="65" rx="6" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="140" height="24" rx="6" fill="#7c3aed" />
    <text x="70" y="16" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Phase 3: Undo</text>
    <text x="10" y="40" fill="#c084fc" font-size="9" font-weight="bold">Scan WAL Backward</text>
    <text x="10" y="55" fill="#cbd5e1" font-size="9">Rollback Loser writes</text>
  </g>

  <!-- Explanatory Timeline Arcs -->
  <path d="M 120 145 L 450 145" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)" />
  <text x="280" y="165" fill="#fbbf24" font-size="10" text-anchor="middle">Analysis &amp; Redo Scans Forward --&gt;</text>

  <path d="M 490 185 L 200 185" stroke="#8b5cf6" stroke-width="3" />
  <text x="350" y="205" fill="#c084fc" font-size="10" text-anchor="middle">&lt;-- Undo Scans Backward to Revert Losers</text>

  <!-- Bottom Summary Card -->
  <g transform="translate(40, 225)">
    <rect width="660" height="85" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="25" fill="#facc15" font-size="12" font-weight="bold">The Golden Rule of WAL (Write-Ahead Logging):</text>
    <text x="25" y="47" fill="#cbd5e1" font-size="11">Log records describing a change must hit non-volatile storage BEFORE the modified data page is flushed to disk.</text>
    <text x="25" y="67" fill="#94a3b8" font-size="10">Compensation Log Records (CLRs) written during Phase 3 guarantee crash recovery itself can survive re-crashing.</text>
  </g>
</svg>`,
      caption: {
        en: 'The 3 phases of ARIES crash recovery: Analysis scans forward, Redo repeats history, and Undo rolls back active loser transactions.',
        bn: 'ARIES ক্র্যাশ রিকভারির ৩টি পর্যায়: অ্যানালাইসিস সামনে স্ক্যান করে, রিডু অতীত ইতিহাস পুনরাবৃত্তি করে এবং আনডু অপূর্ণ লুজার লেনদেন বাতিল করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Write-Ahead Logging (WAL)',
          def: {
            en: 'The core database protocol requiring change log records to reach persistent disk storage before the corresponding modified data pages can be written.',
            bn: 'ডাটাবেসের একটি প্রধান নিয়ম যাতে মূল ডাটা পেজ ডিস্কে লেখার আগেই সংশ্লিষ্ট পরিবর্তনের বিবরণ ডিস্ক লগে লিখে রাখা বাধ্যতামূলক।'
          }
        },
        {
          term: 'Log Sequence Number (LSN)',
          def: {
            en: 'A monotonically increasing 64-bit integer assigning a unique ordered identity to every single record written in the WAL stream.',
            bn: 'ক্রমবর্ধমান একটি ৬৪-বিট ইন্টিজার সংখ্যা যা রাইট-অ্যাহেড লগ ফাইলের প্রতিটি রেকর্ডকে একটি অনন্য ক্রমিক পরিচয় দেয়।'
          }
        },
        {
          term: 'ARIES Algorithm',
          def: {
            en: 'Algorithms for Recovery and Isolation Exploiting Semantics: the industry-standard 3-phase algorithm (Analysis, Redo, Undo) for database crash recovery.',
            bn: 'ডাটাবেস রিকভারির শিল্পমান স্বীকৃত একটি অ্যালগরিদম যা অ্যানালাইসিস, রিডু ও আনডু—এই ৩টি ধাপে নিখুঁত রিকভারি নিশ্চিত করে।'
          }
        },
        {
          term: 'Compensation Log Record (CLR)',
          def: {
            en: 'A special WAL record written during the undo recovery phase describing the rollback of an operation, ensuring recovery never repeats rollbacks if it crashes again.',
            bn: 'আনডু রিকভারি চলাকালীন লেখা বিশেষ একটি লগ রেকর্ড যা নিশ্চিত করে যে রিকভারি চলার সময় পুনরায় ক্র্যাশ হলেও আগের বাতিল করা কাজ পুনরায় বাতিল করতে হবে না।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'aries-three-phases',
      text: {
        en: 'Deep Dive: Analysis, Redo, and Undo in ARIES',
        bn: 'ARIES-এর ৩টি পর্যায়: অ্যানালাইসিস, রিডু এবং আনডু'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Formalized in 1992 by C. Mohan and his IBM research team, ARIES remains the standard recovery algorithm powering PostgreSQL, SQLite, and MySQL InnoDB. When a crashed database boots, ARIES runs 3 distinct sequential phases.',
        bn: '১৯৯২ সালে সি. মোহন এবং তার আইবিএম গবেষক দল ARIES প্রবর্তন করেন, যা আজও PostgreSQL, SQLite এবং MySQL-এর ভিত্তি হিসেবে কাজ করছে। কোনো ক্র্যাশ হওয়া ডাটাবেস চালুর সাথে সাথে ARIES ধারাবাহিকভাবে ৩টি নির্দিষ্ট পর্যায় পরিচালনা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Phase 1 (Analysis), the engine reads the WAL forward from the most recent checkpoint. It reconstructs the active transaction table and identifies which transactions were committed winners and which were uncommitted losers when the crash struck. In Phase 2 (Redo), the engine repeats history forward from the oldest dirty page, re-applying all updates to return memory to the exact state it had at the moment of failure.',
        bn: '১ম পর্যায় বা অ্যানালাইসিসে ইঞ্জিন সর্বশেষ চেকপয়েন্ট থেকে শুরু করে সামনের দিকে লগ পড়ে। এটি লেনদেনের সক্রিয় তালিকা তৈরি করে দেখে কোন লেনদেনগুলো সফল বিজয়ী (উইনার) ছিল এবং কোনগুলো ক্র্যাশের মুহূর্তে অপূর্ণ পরাজিত (লুজার) অবস্থায় ছিল। ২য় পর্যায় বা রিডুতে ইঞ্জিন সবচেয়ে পুরনো ডার্টি পেজ থেকে সমস্ত পরিবর্তন পুনরায় মেমরিতে কার্যকর করে সিস্টেমকে হুবহু ক্র্যাশের মুহূর্তের অবস্থায় ফিরিয়ে নিয়ে আসে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Phase 3 (Undo), the engine scans backward through the WAL to reverse the partial writes of every loser transaction identified during Analysis. For every reverted operation, the engine writes a Compensation Log Record (CLR). If the server crashes a second time during the undo phase, the CLRs guarantee that already undone steps are never rolled back twice upon reboot.',
        bn: '৩য় পর্যায় বা আনডুতে ইঞ্জিন লগ ফাইলটি উল্টো দিক থেকে পড়ে এবং অ্যানালাইসিসে চিহ্নিত تمام লুজার লেনদেনের আংশিক কাজ বাতিল করে দেয়। প্রতিটি বাতিলকৃত অপারেশনের জন্য ইঞ্জিন একটি করে কম্পেনসেশন লগ রেকর্ড (CLR) লিখে রাখে। রিকভারি চলাকালীন যদি সার্ভার দ্বিতীয়বারও ক্র্যাশ করে, তবে এই CLR নিশ্চিত করে যে পূর্বেই বাতিলকৃত কোনো কাজ পুনরায় বাতিল করার অপচয় ঘটবে না।'
      }
    },
    {
      type: 'heading',
      id: 'node-aries-engine',
      text: {
        en: 'Executable 3-Phase ARIES Crash Recovery Engine',
        bn: 'রানযোগ্য ৩-ফেজ ARIES ক্র্যাশ রিকভারি ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating the 3 phases of ARIES. It replays a WAL containing a committed transaction (Txn 101) and an uncommitted in-flight transaction (Txn 102) interrupted by a power failure. It runs Analysis to separate winners from losers, executes Redo to repeat history, and carries out Undo to restore the ledger balance to 800 with CLRs.',
        bn: 'নিচে ARIES-এর ৩টি পর্যায় অনুকরণকারী একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি বিদ্যুৎ বিভ্রাটে বাধাগ্রস্ত একটি কমিট হওয়া লেনদেন (Txn 101) এবং একটি অপূর্ণ লেনদেন (Txn 102) যুক্ত WAL পুনরায় কার্যকর করে। এটি উইনার ও লুজার আলাদা করতে অ্যানালাইসিস চালায়, অতীত পুনর্নির্মাণে রিডু চালায় এবং CLR লিখে ব্যালেন্স ৮০০ টাকায় পুনরুদ্ধার করতে আনডু সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Simulating the 3 ARIES recovery phases: Analysis, Redo (repeating history), and Undo of loser transactions',
        bn: 'ARIES রিকভারির ৩টি পর্যায় সিমুলেশন: অ্যানালাইসিস, রিডু (ইতিহাসের পুনরাবৃত্তি) এবং লুজার লেনদেনের আনডু'
      },
      code: `// ARIES 3-Phase Crash Recovery Engine
const writeAheadLog = [
  { lsn: 1, txn: 101, type: 'BEGIN' },
  { lsn: 2, txn: 101, type: 'WRITE', field: 'balance', oldVal: 1000, newVal: 800 },
  { lsn: 3, txn: 101, type: 'COMMIT' },
  { lsn: 4, txn: 102, type: 'BEGIN' },
  { lsn: 5, txn: 102, type: 'WRITE', field: 'balance', oldVal: 800, newVal: 600 }
  // Sudden hardware power cut! Txn 102 never reached COMMIT
];

// Phase 1: Analysis (Find committed winners and in-flight losers)
const winners = new Set();
const losers = new Set();

for (const record of writeAheadLog) {
  if (record.type === 'BEGIN') losers.add(record.txn);
  if (record.type === 'COMMIT') {
    losers.delete(record.txn);
    winners.add(record.txn);
  }
}

// Phase 2: Redo (Repeat history: replay writes to match crash state)
const memoryState = { balance: 1000 };
for (const record of writeAheadLog) {
  if (record.type === 'WRITE') {
    memoryState[record.field] = record.newVal;
  }
}

// Phase 3: Undo (Scan backwards and rollback loser transactions with CLRs)
const compensationLogRecords = [];
for (let i = writeAheadLog.length - 1; i >= 0; i--) {
  const record = writeAheadLog[i];
  if (losers.has(record.txn) && record.type === 'WRITE') {
    memoryState[record.field] = record.oldVal; // Revert change
    compensationLogRecords.push({ lsn: 6, undoLsn: record.lsn, type: 'CLR' });
  }
}

const isRecovered = memoryState.balance === 800;
console.log(\`[ARIES Engine] Analysis Phase: Found \${winners.size} winner (Txn 101) and \${losers.size} loser (Txn 102).\`);
console.log(\`[ARIES Engine] Redo Phase: Replayed history through LSN 5 to match crash state.\`);
console.log(\`[ARIES Engine] Undo Phase: Rolled back loser Txn 102; restored balance to \${memoryState.balance} with CLR (1/1: \${isRecovered}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Fuzzy Checkpoints Prevent Latency Spikes',
        bn: 'ফাজি চেকপয়েন্ট ল্যাটেন্সি স্পাইক রোধ করে'
      },
      text: {
        en: 'A naive checkpoint stops all queries and flushes every dirty buffer pool page to disk, causing massive latency freezes. In contrast, modern engines write Fuzzy Checkpoints: background workers continuously flush dirty pages, recording only the dirty page table and transaction table into WAL without interrupting active client connections.',
        bn: 'একটি সাধারণ চেকপয়েন্ট تمام কোয়েরি থামিয়ে মেমরির সমস্ত ডার্টি পেজ ডিস্কে ফ্লাশ করে, যা সিস্টেমে দীর্ঘ বিলম্ব সৃষ্টি করে। এর বদলে আধুনিক ডাটাবেসগুলো ফাজি চেকপয়েন্ট ব্যবহার করে: ব্যাকগ্রাউন্ড প্রক্রিয়া কোনো বাধা সৃষ্টি না করেই আস্তে আস্তে পেজ ফ্লাশ করে কেবল ডার্টি টেবিলের বিবরণ লগে লিখে রাখে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Crash Recovery Winner/Loser Classifier',
        bn: 'ক্র্যাশ রিকভারি উইনার/লুজার শ্রেণিবিন্যাসকারী'
      },
      description: {
        en: 'Determine whether a transaction should be replayed or rolled back during the ARIES analysis phase.',
        bn: 'ARIES অ্যানালাইসিস পর্যায়ে কোনো লেনদেনকে রিডু করা হবে নাকি রোলব্যাক করা হবে তা নির্ধারণ করুন।'
      },
      code: `function classifyTransaction(logRecords, txnId) {
  const hasBegin = logRecords.some(r => r.txn === txnId && r.type === 'BEGIN');
  const hasCommit = logRecords.some(r => r.txn === txnId && r.type === 'COMMIT');

  if (hasBegin && hasCommit) return 'WINNER_PRESERVED';
  if (hasBegin && !hasCommit) return 'LOSER_ROLLED_BACK';
  return 'NOT_FOUND';
}

const sampleLog = [
  { txn: 101, type: 'BEGIN' },
  { txn: 101, type: 'COMMIT' },
  { txn: 102, type: 'BEGIN' }
];

console.log('Txn 101:', classifyTransaction(sampleLog, 101));
console.log('Txn 102:', classifyTransaction(sampleLog, 102));`,
      tests: [
        {
          name: {
            en: 'Classifies committed transaction as winner',
            bn: 'কমিট হওয়া লেনদেনকে উইনার হিসেবে শ্রেণিবিন্যাস করে'
          },
          expected: 'Txn 101: WINNER_PRESERVED'
        },
        {
          name: {
            en: 'Classifies uncommitted transaction as loser',
            bn: 'অপূর্ণ লেনদেনকে লুজার হিসেবে শ্রেণিবিন্যাস করে'
          },
          expected: 'Txn 102: LOSER_ROLLED_BACK'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'txn-recov-ex-1',
      kind: 'mcq',
      topic: 'wal-golden-rule-timing',
      question: {
        en: 'What does the fundamental "Write-Ahead" rule dictate regarding data pages and log records in a database engine?',
        bn: 'ডাটাবেস ইঞ্জিনে ডাটা পেজ এবং লগ রেকর্ডের সম্পর্কের ক্ষেত্রে মূল "রাইট-অ্যাহেড" নিয়মটি কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'A log record describing a modification must be written and flushed to persistent non-volatile disk before the corresponding dirty data page itself can be flushed to disk',
          bn: 'ডাটা পরিবর্তনের বর্ণনাকারী লগ রেকর্ডটি মূল ডার্টি ডাটা পেজ ডিস্কে লেখার আগেই স্থায়ী ডিস্কে লেখা ও ফ্লাশ হওয়া বাধ্যতামূলক'
        },
        {
          en: 'All queries must be written in handwriting on paper before running',
          bn: 'تمام কোয়েরি চালানোর আগে কাগজে হাতে লিখে রাখতে হয়'
        },
        {
          en: 'Log records are only saved once a month during server maintenance',
          bn: 'মাসে কেবল একবার সার্ভার রক্ষণাবেক্ষণের সময় লগ রেকর্ড সেভ করা হয়'
        },
        {
          en: 'Data pages must be deleted from memory before a query finishes',
          bn: 'কোয়েরি শেষ হওয়ার আগেই মেমরি থেকে ডাটা পেজ মুছে ফেলতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The log record must reach disk ahead of the dirty data page.',
        bn: 'ডার্টি ডাটা পেজের আগেই ডিস্কে লগ রেকর্ড পৌঁছাতে হবে।'
      },
      explanation: {
        en: 'If a dirty page reached disk first and the server crashed before the log was written, the database would have corrupted unlogged data with zero way to roll it back upon reboot.',
        bn: 'যদি লগের আগেই ডার্টি পেজ ডিস্কে চলে যেত এবং সার্ভার ক্র্যাশ করত, তবে ডাটা বিকৃত হয়ে যেত এবং রিবুটের সময় তা ফিরিয়ে আনার কোনো উপায় থাকত না।'
      }
    },
    {
      id: 'txn-recov-ex-2',
      kind: 'mcq',
      topic: 'aries-analysis-phase-duty',
      question: {
        en: 'What is the primary responsibility of Phase 1 (Analysis) in the ARIES crash recovery algorithm?',
        bn: 'ARIES ক্র্যাশ রিকভারি অ্যালগরিদমের ১ম পর্যায় বা অ্যানালাইসিসের মূল দায়িত্ব কী?'
      },
      options: [
        {
          en: 'Scanning forward from the latest checkpoint to reconstruct the dirty page table and identify which active transactions committed (winners) versus which were in-flight (losers)',
          bn: 'সর্বশেষ চেকপয়েন্ট থেকে সামনে স্ক্যান করে ডার্টি পেজ টেবিল পুনর্নির্মাণ করা এবং কোন লেনদেনগুলো সফল (উইনার) ও কোনগুলো অপূর্ণ (লুজার) ছিল তা শনাক্ত করা'
        },
        {
          en: 'Deleting all database tables and asking the user to start over',
          bn: 'تمام ডাটাবেস টেবিল মুছে ফেলে ব্যবহারকারীকে পুনরায় কাজ শুরু করতে বলা'
        },
        {
          en: 'Counting the number of letters in the SQL database configuration file',
          bn: 'SQL ডাটাবেস কনফিগারেশন ফাইলের অক্ষরের সংখ্যা গণনা করা'
        },
        {
          en: 'Testing whether the internet connection speed is above 100 Mbps',
          bn: 'ইন্টারনেট স্পিড ১০০ এমবিপিএস-এর বেশি আছে কিনা তা পরীক্ষা করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Analysis reconstructs memory state and finds winners vs losers.',
        bn: 'অ্যানালাইসিস মেমরি অবস্থা পুনর্নির্মাণ করে উইনার ও লুজার আলাদা করে।'
      },
      explanation: {
        en: 'Analysis inspects the WAL between checkpoint and crash, discovering all transactions that were alive when failure struck so they can be handled in subsequent recovery phases.',
        bn: 'অ্যানালাইসিস চেকপয়েন্ট ও ক্র্যাশের মধ্যকার লগ পর্যবেক্ষণ করে ঠিক কোন কোন লেনদেন সেসময় সচল ছিল তা খুঁজে বের করে পরবর্তী পদক্ষেপ ঠিক করে।'
      }
    },
    {
      id: 'txn-recov-ex-3',
      kind: 'mcq',
      topic: 'clr-compensation-log-record-function',
      question: {
        en: 'What crucial protection is provided by Compensation Log Records (CLRs) written during the ARIES Undo phase?',
        bn: 'ARIES-এর আনডু পর্যায়ে লিখিত কম্পেনসেশন লগ রেকর্ড (CLR) কোন অত্যন্ত গুরুত্বপূর্ণ সুরক্ষা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'They log the undo action so that if the database crashes AGAIN during recovery, reboot will never attempt to undo an operation that was already undone',
          bn: 'তারা আনডু কাজের রেকর্ড রাখে যাতে রিকভারি চলার সময় পুনরায় ক্র্যাশ হলেও রিবুটের পর পূর্বে বাতিলকৃত কোনো কাজ আবার বাতিল করার চেষ্টা না হয়'
        },
        {
          en: 'They give financial bonuses to database developers',
          bn: 'তারা ডাটাবেস ডেভেলপারদের আর্থিক বোনাস প্রদান করে'
        },
        {
          en: 'They change the server password to the word admin',
          bn: 'তারা সার্ভারের পাসওয়ার্ড পরিবর্তন করে admin বানিয়ে দেয়'
        },
        {
          en: 'They prevent all users from opening internet browsers',
          bn: 'তারা সমস্ত ব্যবহারকারীকে ইন্টারনেট ব্রাউজার খুলতে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'CLRs bound recovery time and prevent unbounded cascading rollbacks across repeated crashes.',
        bn: 'CLR রিকভারি চলার সময় পুনরায় ক্র্যাশ হলে একই কাজ দ্বিতীয়বার বাতিল করা রোধ করে।'
      },
      explanation: {
        en: 'Crash recovery itself can crash midway. CLRs record the rollback progress so a second reboot can pick up exactly where the previous recovery was interrupted.',
        bn: 'রিকভারি চলার মাঝেও বিদ্যুৎ চলে যেতে পারে। CLR পূর্ববর্তী রিকভারির অগ্রগতি লিখে রাখে যাতে পরবর্তী রিবুটে সেখান থেকেই কাজ শুরু করা যায়।'
      }
    },
    {
      id: 'txn-recov-ex-4',
      kind: 'mcq',
      topic: 'aries-redo-repeating-history',
      question: {
        en: 'Why does the ARIES Redo phase "repeat history" by replaying updates from BOTH committed winners and uncommitted losers?',
        bn: 'ARIES-এর রিডু পর্যায় কেন সফল উইনার এবং অপূর্ণ লুজার উভয়েরই تمام আপডেট পুনরায় কার্যকর করে "ইতিহাসের পুনরাবৃত্তি" ঘটায়?'
      },
      options: [
        {
          en: 'To restore the database buffer pool to the EXACT physical state it was in at the instant of failure, providing a solid foundation for the Undo phase to cleanly roll back losers',
          bn: 'ক্র্যাশের মুহূর্তে ডাটাবেস মেমরি যে অবস্থায় ছিল ঠিক সেই হুবহু অবস্থায় ফিরিয়ে আনতে, যাতে পরবর্তীতে আনডু পর্যায় নিখুঁতভাবে লুজারদের বাতিল করতে পারে'
        },
        {
          en: 'Because SQL standards require all queries to execute at least twice',
          bn: 'কারণ SQL মানদণ্ডে প্রতিটি কোয়েরি অন্তত দুইবার চালানো বাধ্যতামূলক'
        },
        {
          en: 'To fill up unused hard disk drive sectors with random data',
          bn: 'হার্ডডিস্কের খালি সেক্টরগুলোকে এলোমেলো ডাটা দিয়ে ভরে রাখার জন্য'
        },
        {
          en: 'Because computer processors cannot count numbers in reverse',
          bn: 'কারণ কম্পিউটার প্রসেসর উল্টো দিকে সংখ্যা গণনা করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Repeating history recreates the exact crash state before undoing losers.',
        bn: 'ইতিহাসের পুনরাবৃত্তির মাধ্যমে ক্র্যাশের মুহূর্তের মেমরি হুবহু তৈরি করা হয়।'
      },
      explanation: {
        en: 'ARIES philosophy relies on "repeating history". By re-executing all logged operations up to the crash point, page states become fully deterministic before the backward undo pass begins.',
        bn: 'ARIES-এর মূল দর্শন হলো ক্র্যাশের ঠিক আগের অবস্থাটি নিখুঁতভাবে তৈরি করা। এরপর সুশৃঙ্খলভাবে লুজারদের পরিবর্তনগুলো বাতিল করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'recovers-and-the-recovery-quiz',
    title: {
      en: 'Crash Recovery & WAL Assessment Quiz',
      bn: 'ক্র্যাশ রিকভারি ও WAL মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'txn-recov-qz-1',
        kind: 'mcq',
        topic: 'lsn-log-sequence-number-definition',
        question: {
          en: 'What is a Log Sequence Number (LSN) and how is it utilized by database page headers?',
          bn: 'লগ সিকোয়েন্স নম্বর (LSN) কী এবং ডাটাবেস পেজ হেডারে এটি কীভাবে ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'A monotonically increasing integer tracking log stream positions; each page header stores pageLSN indicating the newest log record applied to that page',
            bn: 'ক্রমবর্ধমান একটি ইন্টিজার সংখ্যা যা লগের অবস্থান নির্দেশ করে; প্রতিটি পেজ হেডার pageLSN সংরক্ষণ করে যা সেই পেজে কার্যকর হওয়া সর্বশেষ পরিবর্তন চিহ্নিত করে'
          },
          {
            en: 'The phone number of the database customer support team',
            bn: 'ডাটাবেস কাস্টমার সাপোর্ট টিমের ফোন নম্বর'
          },
          {
            en: 'The number of computer monitors attached to the server',
            bn: 'সার্ভারের সাথে সংযুক্ত কম্পিউটার মনিটরের সংখ্যা'
          },
          {
            en: 'A random 4-digit PIN code used to log into Windows',
            bn: 'উইন্ডোজ কম্পিউটারে লগইন করার জন্য ৪ সংখ্যার পিন কোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'PageLSN tracks whether a page on disk already reflects a specific log entry.',
          bn: 'PageLSN নির্দেশ করে যে কোনো পেজে লগের পরিবর্তন ইতোমধ্যে প্রয়োগ করা হয়েছে কিনা।'
        },
        explanation: {
          en: 'During Redo, the engine compares record LSN against pageLSN. If pageLSN >= record LSN, the update is already on disk and can be safely skipped, saving vast I/O work.',
          bn: 'রিডু করার সময় ইঞ্জিন LSN ও pageLSN তুলনা করে। পেজে যদি আগেই পরিবর্তন লেখা থাকে তবে ইঞ্জিন পুনরায় সেটি লেখার অপচয় এড়িয়ে যায়।'
        }
      },
      {
        id: 'txn-recov-qz-2',
        kind: 'mcq',
        topic: 'fuzzy-checkpointing-mechanism',
        question: {
          en: 'Why is Fuzzy Checkpointing preferred over Strict/Static Checkpointing in modern production databases?',
          bn: 'আধুনিক প্রোডাকশন ডাটাবেসে কেন স্ট্রিক্ট চেকপয়েন্টের চেয়ে ফাজি চেকপয়েন্ট বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'It avoids stalling user traffic because background workers flush dirty pages asynchronously without freezing concurrent read and write queries',
            bn: 'এটি ব্যবহারকারীদের কাজের গতি থামায় না কারণ ব্যাকগ্রাউন্ড প্রসেস চলমান রিড-রাইট কোয়েরি না থামিয়েই ডার্টি পেজগুলো ডিস্কে সেভ করতে পারে'
          },
          {
            en: 'It reduces electric bill costs by 99% every month',
            bn: 'এটি প্রতি মাসে সার্ভারের বিদ্যুৎ বিল ৯৯% কমিয়ে দেয়'
          },
          {
            en: 'It deletes older tables to free up physical space automatically',
            bn: 'জায়গা খালি করতে এটি স্বয়ংক্রিয়ভাবে পুরানো টেবিল মুছে ফেলে'
          },
          {
            en: 'It requires zero disk drives because data is kept in the clouds',
            bn: 'এতে কোনো হার্ডডিস্ক দরকার হয় না কারণ সমস্ত ডাটা মেঘে সংরক্ষিত থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fuzzy checkpoints flush asynchronously without locking all database tables.',
          bn: 'ফাজি চেকপয়েন্ট সমস্ত টেবিল লক না করে নীরবে ব্যাকগ্রাউন্ডে কাজ করে।'
        },
        explanation: {
          en: 'Strict checkpoints pause all transactions until every dirty page reaches disk, creating painful latency freezes. Fuzzy checkpoints let transactions proceed while recording active state snapshots.',
          bn: 'স্ট্রিক্ট চেকপয়েন্টে تمام কাজ থামিয়ে পেজ সেভ করার কারণে তীব্র ল্যাটেন্সি দেখা দেয়। ফাজি চেকপয়েন্ট ব্যবহারকারীদের কোনো বাধা না দিয়েই ক্র্যাশ রিকভারির পথ তৈরি করে।'
        }
      },
      {
        id: 'txn-recov-qz-3',
        kind: 'mcq',
        topic: 'aries-inventor-historical-context',
        question: {
          en: 'Who invented the ARIES database recovery algorithm, and at which research institution was it published in 1992?',
          bn: 'ARIES ডাটাবেস রিকভারি অ্যালগরিদম কে আবিষ্কার করেছিলেন এবং ১৯৯২ সালে কোন গবেষণা প্রতিষ্ঠান থেকে এটি প্রকাশিত হয়েছিল?'
        },
        options: [
          {
            en: 'C. Mohan and colleagues at the IBM Almaden Research Center',
            bn: 'সি. মোহন এবং তার সহকর্মীরা আইবিএম আলমাডেন রিসার্চ সেন্টারে'
          },
          {
            en: 'Larry Page and Sergey Brin at Stanford University',
            bn: 'ল্যারি পেজ এবং সার্গেই ব্রিন স্ট্যানফোর্ড বিশ্ববিদ্যালয়ে'
          },
          {
            en: 'Mark Zuckerberg at Harvard University',
            bn: 'মার্ক জুকারবার্গ হার্ভার্ড বিশ্ববিদ্যালয়ে'
          },
          {
            en: 'Guido van Rossum at the Python Software Foundation',
            bn: 'গুইডো ভ্যান রসাম পাইথন সফটওয়্যার ফাউন্ডেশনে'
          }
        ],
        answer: 0,
        hint: {
          en: 'C. Mohan published ARIES at IBM Research in 1992.',
          bn: 'সি. মোহন ১৯৯২ সালে আইবিএম রিসার্চ থেকে ARIES প্রকাশ করেছিলেন।'
        },
        explanation: {
          en: 'C. Mohan formalised ARIES (Algorithms for Recovery and Isolation Exploiting Semantics) at IBM Almaden. It remains one of the most cited and implemented algorithms in database history.',
          bn: 'সি. মোহন আইবিএমে ARIES তৈরি করেন। ডাটাবেস সিস্টেমের ইতিহাসে এটি অন্যতম বহুল পঠিত ও সফলভাবে প্রয়োগকৃত একটি মৌলিক অ্যালগরিদম।'
        }
      },
      {
        id: 'txn-recov-qz-4',
        kind: 'mcq',
        topic: 'fsync-system-call-criticality',
        question: {
          en: 'What role does the operating system fsync() call play in transaction Durability and WAL guarantees?',
          bn: 'ট্রানজ্যাকশনের ডিউরেবিলিটি এবং WAL নিশ্চয়তায় অপারেটিং সিস্টেমের fsync() কলের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It forces the operating system kernel and physical drive hardware to flush all internal volatile write caches onto permanent non-volatile storage media',
            bn: 'এটি অপারেটিং সিস্টেম কার্নেল এবং হার্ডডিস্কের অভ্যন্তরীণ অস্থায়ী ক্যাশ মেমরি থেকে تمام ডাটা ডিস্কের স্থায়ী মাধ্যমে সেভ করতে বাধ্য করে'
          },
          {
            en: 'It plays a sound alert through the server desktop speaker',
            bn: 'এটি সার্ভারের স্পিকারের মাধ্যমে একটি সতর্ক সংকেত বাজায়'
          },
          {
            en: 'It translates English SQL statements into French language text',
            bn: 'এটি ইংরেজি SQL স্টেটমেন্টগুলোকে ফরাসি ভাষায় রূপান্তর করে'
          },
          {
            en: 'It restarts the database server every time a query finishes',
            bn: 'প্রতিটি কোয়েরি শেষ হওয়ার সাথে সাথে এটি সার্ভারকে রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'fsync flushes volatile OS disk caches to physical permanent disk.',
          bn: 'fsync ক্যাশ মেমরি থেকে সরাসরি ফিজিক্যাল ডিস্কে ডাটা ফ্লাশ করে।'
        },
        explanation: {
          en: 'Standard OS write() calls only place data in the operating system page cache. Without fsync(), a power outage wipes the cache even if write() returned success. fsync() guarantees physical durability.',
          bn: 'সাধারণ write() কল শুধুমাত্র অপারেটিং সিস্টেমের ক্যাশে ডাটা রাখে। fsync() না চালালে বিদ্যুৎ চলে গেলে ক্যাশের ডাটা মুছে যাবে। fsync() শারীরিকভাবে ডিস্কে ডাটা পৌঁছানো নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'concuss-and-the-concurrency',
    title: {
      en: 'Pessimistic vs Optimistic Concurrency Control (OCC vs PCC)',
      bn: 'পেসিমিস্টিক বনাম অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC বনাম PCC)'
    }
  }
};
