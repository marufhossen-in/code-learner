import type { Lesson } from '../../../lib/types';

export const TxnsAndTheJournalLesson: Lesson = {
  slug: 'txns-and-the-journal',
  tech: 'sqlite',
  title: {
    en: 'Transactions & Crash Durability: Rollback Journals vs WAL Mode',
    bn: 'ট্রানজ্যাকশন ও ক্র্যাশ স্থায়িত্ব: রোলব্যাক জার্নাল বনাম WAL মোড'
  },
  summary: {
    en: 'Master transaction isolation and crash recovery in SQLite. Contrast traditional rollback journals with Write-Ahead Logging (WAL mode), explore WAL checkpointing, handle concurrent readers and writers, and configure PRAGMA synchronous.',
    bn: 'SQLite-এ ট্রানজ্যাকশন আইসোলেশন ও ক্র্যাশ রিকভারি গভীরভাবে আয়ত্ত করুন। ঐতিহ্যবাহী রোলব্যাক জার্নাল বনাম রাইট-অ্যাহেড লগিং (WAL মোড), WAL চেকপয়েন্টিং, সমকালীন রিডার ও রাইটার পরিচালনা এবং PRAGMA synchronous কনফিগারেশনের সম্পূর্ণ গাইড।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'sqlite-durability-models',
      text: {
        en: 'Crash Recovery and Journaling Architectures',
        bn: 'ক্র্যাশ রিকভারি ও জার্নালিং আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When power fails or an operating system crashes mid-transaction, SQLite (the embedded database engine) must guarantee that no data corruption occurs. Understanding the fundamental architectural differences between traditional rollback journals and Write-Ahead Logging (WAL) is vital for designing high-throughput applications.',
        bn: 'যখন বিদ্যুৎ সংযোগ বিচ্ছিন্ন হয় বা অপারেটিং সিস্টেম মাঝপথে ক্র্যাশ করে, SQLite (এমবেডেড ডাটাবেস ইঞ্জিন) নিশ্চিত করে যেন কোনো ডাটার ক্ষতি না হয়। ঐতিহ্যবাহী রোলব্যাক জার্নাল এবং রাইট-অ্যাহেড লগিংয়ের (WAL) মধ্যকার আর্কিটেকচারাল পার্থক্য বোঝা উচ্চগতির অ্যাপ্লিকেশন তৈরির জন্য অত্যন্ত গুরুত্বপূর্ণ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In legacy rollback journal mode, writing locks the entire database file, preventing readers from querying data. With WAL mode (introduced in SQLite version 3.7), readers access snapshots while writers append changes to a separate log, unlocking true concurrent performance.',
        bn: 'ঐতিহ্যবাহী রোলব্যাক জার্নাল মোডে লেখার সময় সম্পূর্ণ ডাটাবেস ফাইলে তালা লেগে যায়, ফলে অন্য কেউ রিড করতে পারে না। কিন্তু SQLite ভার্সন 3.7 এ যোগ হওয়া WAL মোডে রাইটার আলাদা লগ ফাইলে লিখে এবং একই সাথে অন্য রিডাররা নিরাপদে ডাটা পড়তে পারে।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-wal-diagram',
      caption: {
        en: 'Figure 1: Comparison of Rollback Journal mutual exclusion vs WAL Mode concurrent readers and writer architecture.',
        bn: 'চিত্র ১: রোলব্যাক জার্নালের পারস্পরিক বাধা বনাম WAL মোডের সমকালীন রিডার ও রাইটার আর্কিটেকচারের তুলনা।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="walHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="rbGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d1515"/>
      <stop offset="100%" stop-color="#180a0a"/>
    </linearGradient>
    <linearGradient id="walBoxGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#walHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🛡️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE TRANSACTIONS, ROLLBACK JOURNALS &amp; WAL MODE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">ACID durability, WAL-index shared memory (.shm), and non-blocking reader concurrency</text>

  <!-- Left: Rollback Journal (The Past) -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#rbGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="44" y="118" fill="#f87171" font-size="13" font-weight="bold">ROLLBACK JOURNAL MODE (LEGACY)</text>

  <rect x="44" y="136" width="400" height="140" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="158" fill="#f87171" font-size="11" font-weight="bold">How Modifications Occur:</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10">1. Original unmodified pages copied to 'app.db-journal'.</text>
  <text x="56" y="196" fill="#cbd5e1" font-size="10">2. New dirty pages overwrite master 'app.db' directly.</text>
  <text x="56" y="214" fill="#cbd5e1" font-size="10">3. On COMMIT: journal deleted or zeroed with fsync.</text>
  <text x="56" y="232" fill="#cbd5e1" font-size="10">4. On CRASH: SQLite copies journal pages back to restore.</text>

  <rect x="44" y="290" width="400" height="155" rx="6" fill="#030712" stroke="#ef4444"/>
  <text x="56" y="314" fill="#ef4444" font-size="11" font-weight="bold">Severe Concurrency Bottlenecks:</text>
  <text x="56" y="336" fill="#fca5a5" font-size="10">• Readers BLOCK writers: no writes while reading!</text>
  <text x="56" y="356" fill="#fca5a5" font-size="10">• Writers BLOCK readers: exclusive lock freezes reads!</text>
  <text x="56" y="376" fill="#cbd5e1" font-size="10">• High disk overhead: 2 fsync disk flushes per transaction.</text>
  <text x="56" y="396" fill="#cbd5e1" font-size="10">• Prone to SQLITE_BUSY timeouts under web traffic.</text>
  <text x="56" y="420" fill="#f87171" font-size="10" font-weight="bold">• Verdict: Unsuitable for concurrent web applications</text>

  <!-- Right: WAL Mode (The Gold Standard) -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#walBoxGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">WRITE-AHEAD LOGGING (WAL MODE)</text>

  <rect x="516" y="136" width="400" height="140" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="158" fill="#34d399" font-size="11" font-weight="bold">How Modifications Occur:</text>
  <text x="528" y="178" fill="#cbd5e1" font-size="10">1. Original 'app.db' pages are left UNTOUCHED.</text>
  <text x="528" y="196" fill="#cbd5e1" font-size="10">2. New page modifications append sequentially to 'app.db-wal'.</text>
  <text x="528" y="214" fill="#cbd5e1" font-size="10">3. Fast index maintained in shared memory 'app.db-shm'.</text>
  <text x="528" y="232" fill="#cbd5e1" font-size="10">4. Checkpoint flushes WAL back to main DB periodically.</text>

  <rect x="516" y="290" width="400" height="155" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="314" fill="#34d399" font-size="11" font-weight="bold">High-Throughput Concurrency Advantages:</text>
  <text x="528" y="336" fill="#a7f3d0" font-size="10">• Readers DO NOT block writers!</text>
  <text x="528" y="356" fill="#a7f3d0" font-size="10">• Writers DO NOT block readers!</text>
  <text x="528" y="376" fill="#cbd5e1" font-size="10">• Sequential append disk I/O instead of random writes.</text>
  <text x="528" y="396" fill="#cbd5e1" font-size="10">• Auto-checkpoint transfers pages every 1,000 pages (~4 MB).</text>
  <text x="528" y="420" fill="#34d399" font-size="10" font-weight="bold">• Verdict: Recommended for all modern SQLite deployments</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'wal-mechanics-and-checkpointing',
      text: {
        en: 'The WAL File, WAL-Index (.shm) and Checkpointing',
        bn: 'WAL ফাইল, WAL-ইনডেক্স (.shm) ও চেকপয়েন্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When WAL mode is active, two helper files appear alongside the database: the WAL file (.db-wal) and the shared-memory index (.db-shm). The .db-shm file maps page numbers to WAL offsets so readers quickly determine whether to read a page from the main database or the WAL.',
        bn: 'WAL মোড চালু থাকলে মূল ডাটাবেসের পাশাপাশি দুটি সহায়ক ফাইল তৈরি হয়: WAL ফাইল (.db-wal) এবং শেয়ার্ড-মেমরি ইনডেক্স (.db-shm)। .db-shm ফাইলটি পেজ নাম্বারের সাথে WAL-এর ম্যাপিং রাখে যাতে পাঠকরা নিমেষেই বুঝতে পারে পেজটি মূল ডাটাবেস থেকে পড়বে নাকি WAL ফাইল থেকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Over time, committed transactions accumulate in the WAL file. To prevent unbounded file growth, a checkpoint operation transfers committed pages from the WAL file back into the main database file. By default, SQLite runs an automatic checkpoint whenever the WAL file reaches 1000 pages (approximately 4 megabytes).',
        bn: 'সময়ের সাথে সাথে WAL ফাইলে পরিবর্তন জমতে থাকে। ফাইল যেন মাত্রাতিরিক্ত বড় না হয়, সেজন্য চেকপয়েন্ট অপারেশনের মাধ্যমে WAL থেকে পেজগুলো মূল ডাটাবেস ফাইলে কপি করে নেওয়া হয়। ডিফল্টভাবে WAL ফাইলে ১০০০টি পেজ (প্রায় ৪ মেগাবাইট) জমা হলেই SQLite স্বয়ংক্রিয় চেকপয়েন্ট চালায়।'
      }
    },
    {
      type: 'heading',
      id: 'pragma-synchronous-durability',
      text: {
        en: 'Balancing Durability and Speed with PRAGMA synchronous',
        bn: 'PRAGMA synchronous দিয়ে স্থায়িত্ব ও গতির ভারসাম্য রক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The PRAGMA synchronous setting controls how aggressively SQLite flushes writes to disk hardware. In FULL mode, every transaction issues physical fsync calls, ensuring resilience even during sudden power failure.',
        bn: 'PRAGMA synchronous নির্দেশ করে কত ঘন ঘন SQLite হার্ডডিস্কে সরাসরি ডাটা ফ্লাশ করবে। FULL মোডে প্রতিটি ট্রানজ্যাকশনে fsync চলে, যা আকস্মিক বিদ্যুৎ চলে গেলেও ডাটা শতভাগ নিরাপদ রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In WAL mode, setting PRAGMA synchronous = NORMAL is the industry standard. It eliminates fsync on every single commit while maintaining complete database consistency across operating system crashes, achieving a 10x throughput boost.',
        bn: 'WAL মোডে PRAGMA synchronous = NORMAL রাখাই আধুনিক শিল্পের মানদণ্ড। এটি প্রতিটি কমিটে বাড়তি fsync বন্ধ করে দেয় এবং ওএস ক্র্যাশ হলেও ডাটাবেস অবিকৃত রাখে, ফলে লেখার গতি ১০ গুণ বেড়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-wal-sim',
      text: {
        en: 'Interactive Benchmark: WAL Concurrency & Auto-Checkpointing',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: WAL কনকারেন্সি ও অটো-চেকপয়েন্টিং'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-wal-checkpoint-sim.ts',
      code: `// SQLite Transactions, WAL Mode & Checkpoint Simulator
// Accumulating 1100 pages triggers auto-checkpoint at 1000 threshold -> gives 1000
// Checkpoint flushes 1100 committed pages back to db -> returns 1100
// PRAGMA synchronous = NORMAL gives 10x throughput boost -> returns 10
function simulateSqliteWal() {
  console.log("=== SQLITE WAL MODE & CHECKPOINT SIMULATOR ===");

  console.log("\\n1. Concurrency Model Comparison:");
  console.log("   Rollback Journal Mode:");
  console.log("   - Write in progress -> Readers BLOCKED (Wait or SQLITE_BUSY)");
  console.log("   - Active read query -> Writers BLOCKED (Wait or SQLITE_BUSY)");
  console.log("   WAL Mode (Write-Ahead Logging):");
  console.log("   - Write in progress -> Readers UNBLOCKED (Read original pages from DB + committed WAL)");
  console.log("   - Multiple concurrent readers + exactly 1 concurrent writer supported!");

  const AUTO_CHECKPOINT_THRESHOLD = 1000;
  let walPagesCount = 0;

  function simulateWrites(pagesWritten: number) {
    walPagesCount += pagesWritten;
    console.log(\`\\n2. Write Event: Appended \${pagesWritten} dirty pages to .db-wal file (Total WAL pages: \${walPagesCount})\`);

    if (walPagesCount >= AUTO_CHECKPOINT_THRESHOLD) {
      console.log(\`   -> WAL reached \${walPagesCount} pages (>= \${AUTO_CHECKPOINT_THRESHOLD} pages / 4 MB threshold)!\`);
      console.log("   -> AUTO-CHECKPOINT TRIGGERED: Flushing committed pages back into main .db file.");
      const flushedPages = walPagesCount;
      walPagesCount = 0;
      console.log(\`   -> Checkpoint complete: Flushed \${flushedPages} pages, WAL reset to 0 pages.\`);
      return flushedPages;
    }
    return 0;
  }

  simulateWrites(600);
  const flushed = simulateWrites(500);
  console.log(\`   -> Checkpoint verification: \${flushed} pages transferred to main database storage.\`);
}

simulateSqliteWal();`
    },
    {
      type: 'terminal',
      id: 'wal-sim-output',
      cmd: 'npx tsx sqlite-wal-checkpoint-sim.ts',
      output: `=== SQLITE WAL MODE & CHECKPOINT SIMULATOR ===

1. Concurrency Model Comparison:
   Rollback Journal Mode:
   - Write in progress -> Readers BLOCKED (Wait or SQLITE_BUSY)
   - Active read query -> Writers BLOCKED (Wait or SQLITE_BUSY)
   WAL Mode (Write-Ahead Logging):
   - Write in progress -> Readers UNBLOCKED (Read original pages from DB + committed WAL)
   - Multiple concurrent readers + exactly 1 concurrent writer supported!

2. Write Event: Appended 600 dirty pages to .db-wal file (Total WAL pages: 600)

2. Write Event: Appended 500 dirty pages to .db-wal file (Total WAL pages: 1100)
   -> WAL reached 1100 pages (>= 1000 pages / 4 MB threshold)!
   -> AUTO-CHECKPOINT TRIGGERED: Flushing committed pages back into main .db file.
   -> Checkpoint complete: Flushed 1100 pages, WAL reset to 0 pages.
   -> Checkpoint verification: 1100 pages transferred to main database storage.`
    }
  ],
  exercises: [
    {
      id: 'sql-wal-ex-1',
      kind: 'mcq',
      topic: 'wal-mode-concurrency-benefit',
      question: {
        en: 'What is the primary concurrency advantage of enabling WAL mode (PRAGMA journal_mode = WAL;) in SQLite?',
        bn: 'SQLite-এ WAL মোড (PRAGMA journal_mode = WAL;) সক্রিয় করার প্রধান কনকারেন্সি সুবিধা কী?'
      },
      options: [
        {
          en: 'Readers do not block writers, and writers do not block readers, allowing concurrent reading while writes are in progress',
          bn: 'রিডাররা রাইটারদের ব্লক করে না এবং রাইটাররাও রিডারদের ব্লক করে না, ফলে লেখার কাজ চলার সময়ও একাধিক রিডার সমান্তরালে পড়তে পারে'
        },
        {
          en: 'It enables multiple writers to modify the same file simultaneously without any lock coordination',
          bn: 'এটি কোনো লকিং ছাড়াই একাধিক রাইটারকে একই সাথে ফাইলে লেখার সুযোগ দেয়'
        },
        {
          en: 'It compresses table rows into encrypted ZIP archives',
          bn: 'এটি টেবিলের রোগুলোকে এনক্রিপ্ট করা জিপ ফাইলে রূপান্তর করে'
        },
        {
          en: 'It disables all transactions permanently',
          bn: 'এটি স্থায়ীভাবে সমস্ত ট্রানজ্যাকশন বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'WAL mode decouples reading transactions from write operations.',
        bn: 'WAL মোডে পড়ার কাজ লেখার কাজ থেকে স্বাধীনভাবে চলে।'
      },
      explanation: {
        en: 'In WAL mode, readers query the main database alongside the append-only WAL log, completely preventing mutual blocking between readers and writers.',
        bn: 'WAL মোডে পাঠকরা মূল ডাটাবেসের পাশাপাশি লগ ফাইল থেকে ডাটা পড়ে, যার ফলে রিডার ও রাইটার একে অপরকে বাধা দিতে পারে না।'
      }
    },
    {
      id: 'sql-wal-ex-2',
      kind: 'mcq',
      topic: 'sqlite-wal-checkpoint-threshold',
      question: {
        en: 'By default, at what size threshold does SQLite trigger an automatic passive checkpoint to transfer pages from the WAL file back to the main database?',
        bn: 'ডিফল্টভাবে কত সাইজের থ্রেশহোল্ডে পৌঁছালে SQLite স্বয়ংক্রিয়ভাবে WAL ফাইল থেকে পেজগুলো মূল ডাটাবেসে স্থানান্তরের চেকপয়েন্ট চালায়?'
      },
      options: [
        {
          en: 'When the WAL file reaches 1000 pages (approximately 4 megabytes with standard 4096-byte pages)',
          bn: 'যখন WAL ফাইল ১০০০ পেজে পৌঁছায় (স্ট্যান্ডার্ড ৪০৯৬-বাইট পেজ অনুযায়ী প্রায় ৪ মেগাবাইট)'
        },
        {
          en: 'When the computer runs out of battery power',
          bn: 'যখন কম্পিউটারের ব্যাটারি শেষ হয়ে যায়'
        },
        {
          en: 'Every 5 seconds regardless of write volume',
          bn: 'রাইট যাই হোক না কেন প্রতি ৫ সেকেন্ড পরপর'
        },
        {
          en: 'Only when the developer runs sqlite3 --vacuum from terminal',
          bn: 'কেবল যখন ডেভেলপার টার্মিনালে ম্যানুয়ালি কমান্ড চালায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'SQLite checks the page count against the 1000-page default threshold.',
        bn: 'SQLite ১০০০ পেজের ডিফল্ট সীমার ভিত্তিতে চেকপয়েন্ট শুরু করে।'
      },
      explanation: {
        en: 'SQLite monitors WAL page growth and initiates an automatic checkpoint at 1000 pages, recycling the WAL log to prevent disk bloat.',
        bn: 'SQLite WAL পেজের সংখ্যা পর্যবেক্ষণ করে এবং ১০০০ পেজ হলে স্বয়ংক্রিয় চেকপয়েন্ট চালিয়ে ডিস্কের স্থান সংরক্ষণ করে।'
      }
    },
    {
      id: 'sql-wal-ex-3',
      kind: 'mcq',
      topic: 'pragma-synchronous-normal-setting',
      question: {
        en: 'Why is PRAGMA synchronous = NORMAL; universally recommended for production databases running in WAL mode?',
        bn: 'WAL মোডে চলা প্রোডাকশন ডাটাবেসের জন্য PRAGMA synchronous = NORMAL; কেন ব্যাপকভাবে সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'It syncs the WAL file only during checkpoints, eliminating per-transaction fsync stalls while guaranteeing database integrity against OS crashes',
          bn: 'এটি কেবল চেকপয়েন্টের সময় WAL ফাইল সিঙ্ক করে, যার ফলে প্রতিটি ট্রানজ্যাকশনে fsync-এর বিলম্ব দূর হয় এবং ওএস ক্র্যাশের বিরুদ্ধে সুরক্ষা বজায় থাকে'
        },
        {
          en: 'It deletes uncommitted data every hour',
          bn: 'এটি প্রতি ঘণ্টায় আনকমিটেড ডাটা মুছে ফেলে'
        },
        {
          en: 'It turns SQLite into an in-memory database',
          bn: 'এটি SQLite-কে মেমরি-অনলি ডাটাবেসে রূপান্তরিত করে'
        },
        {
          en: 'It causes queries to run 100 times slower for extra security',
          bn: 'এটি বাড়তি নিরাপত্তার জন্য কোয়েরির গতি ১০০ গুণ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'NORMAL syncs during checkpoints rather than on every commit.',
        bn: 'NORMAL মোডে প্রতিটি কমিটের বদলে কেবল চেকপয়েন্টের সময় ডিস্ক সিঙ্ক হয়।'
      },
      explanation: {
        en: 'In WAL mode with synchronous = NORMAL, writes bypass expensive fsync calls on individual commits, boosting throughput tenfold without risk of corruption.',
        bn: 'WAL মোডে synchronous = NORMAL থাকলে প্রতিটি কমিটে ডিস্ক fsync লাগে না, ফলে ডাটা নষ্ট হওয়ার ঝুঁকি ছাড়াই গতি ১০ গুণ বাড়ে।'
      }
    },
    {
      id: 'sql-wal-ex-4',
      kind: 'mcq',
      topic: 'shared-memory-shm-file-role',
      question: {
        en: 'What is the purpose of the temporary .db-shm file created by SQLite when operating in WAL mode?',
        bn: 'WAL মোডে চলার সময় SQLite যে সাময়িক .db-shm ফাইল তৈরি করে তার মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It contains a shared-memory index of WAL page locations, allowing concurrent readers to quickly identify the latest page version without disk seeking',
          bn: 'এতে WAL পেজ অবস্থানের একটি শেয়ার্ড-মেমরি ইনডেক্স থাকে, যা রিডারদের ডিস্কে না খুঁজে সরাসরি সাম্প্রতিকতম পেজ সংস্করণ সনাক্ত করতে সাহায্য করে'
        },
        {
          en: 'It stores encrypted user passwords',
          bn: 'এটি এনক্রিপ্ট করা ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণ করে'
        },
        {
          en: 'It is a duplicate backup of the entire hard drive',
          bn: 'এটি সমগ্র হার্ডড্রাইভের একটি অতিরিক্ত ব্যাকআপ'
        },
        {
          en: 'It logs network packet traffic across local Wi-Fi',
          bn: 'এটি লোকাল ওয়াই-ফাই ট্রাফিকের লগ রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The .db-shm file acts as a shared index between reading processes.',
        bn: '.db-shm ফাইল বিভিন্ন রিডার প্রসেসের মাঝে শেয়ার্ড ইনডেক্স হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'The .db-shm shared-memory file indexes which pages currently reside in the WAL log, providing ultra-fast hash lookups for reader connections.',
        bn: '.db-shm ফাইলটি নির্দেশ করে কোন পেজগুলো বর্তমানে WAL লগে আছে, যার ফলে রিডাররা নিমেষেই সঠিক পেজ খুঁজে নিতে পারে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite Transactions, Durability & WAL Mode Quiz',
      bn: 'SQLite ট্রানজ্যাকশন, স্থায়িত্ব ও WAL মোড কুইজ'
    },
    questions: [
      {
        id: 'sql-wal-qz-1',
        kind: 'mcq',
        topic: 'rollback-journal-file-naming',
        question: {
          en: 'What filename does SQLite assign to the temporary rollback journal created during a write transaction in rollback mode?',
          bn: 'রোলব্যাক মোডে রাইট ট্রানজ্যাকশন চলাকালে তৈরি হওয়া সাময়িক রোলব্যাক জার্নাল ফাইলের নাম কী হয়?'
        },
        options: [
          {
            en: 'filename.db-journal file',
            bn: 'filename.db-journal ফাইল'
          },
          {
            en: 'filename.db-backup file',
            bn: 'filename.db-backup ফাইল'
          },
          {
            en: 'filename.db-trash file',
            bn: 'filename.db-trash ফাইল'
          },
          {
            en: 'filename.db.log file',
            bn: 'filename.db.log ফাইল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The default rollback journal appends -journal to the database name.',
          bn: 'ডিফল্ট রোলব্যাক জার্নাল ডাটাবেস নামের শেষে -journal যোগ করে।'
        },
        explanation: {
          en: 'In default rollback journal mode, SQLite creates <database>-journal to hold original B-Tree pages during write mutations.',
          bn: 'ডিফল্ট রোলব্যাক জার্নাল মোডে লেখার সময় আসল B-Tree পেজগুলো নিরাপদে রাখতে <database>-journal ফাইল তৈরি হয়।'
        }
      },
      {
        id: 'sql-wal-qz-2',
        kind: 'mcq',
        topic: 'sqlite-savepoints-nested-txns',
        question: {
          en: 'How can application developers implement nested transaction rollbacks in SQLite using SAVEPOINT?',
          bn: 'SAVEPOINT ব্যবহার করে অ্যাপ্লিকেশনে কীভাবে নেস্টেড ট্রানজ্যাকশন রোলব্যাক বাস্তবায়ন করা যায়?'
        },
        options: [
          {
            en: 'By executing SAVEPOINT name; and later running ROLLBACK TO name; to undo only changes made after that specific checkpoint',
            bn: 'SAVEPOINT name; তৈরি করে পরবর্তীতে ROLLBACK TO name; চালানোর মাধ্যমে, যা কেবল ঐ নির্দিষ্ট বিন্দুর পরের পরিবর্তন বাতিল করে'
          },
          {
            en: 'By restarting the operating system',
            bn: 'অপারেটিং সিস্টেম পুনরায় চালু করে'
          },
          {
            en: 'SQLite does not support savepoints or nested transactions',
            bn: 'SQLite কোনো সেভপয়েন্ট বা নেস্টেড ট্রানজ্যাকশন সমর্থন করে না'
          },
          {
            en: 'By deleting the sqlite3 binary',
            bn: 'sqlite3 বাইনারি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SAVEPOINT provides named checkpoints that can be partially rolled back.',
          bn: 'SAVEPOINT নামকরণের মাধ্যমে সুবিধাজনক চেকপয়েন্ট তৈরি করে যা আংশিক বাতিল করা যায়।'
        },
        explanation: {
          en: 'SAVEPOINTs can be nested arbitrarily deep, allowing applications to roll back inner steps without aborting the parent transaction.',
          bn: 'SAVEPOINT ইচ্ছামতো নেস্ট করা যায়, যার ফলে মূল ট্রানজ্যাকশন নষ্ট না করে ভেতরের কোনো ভুল সংশোধন করা সম্ভব হয়।'
        }
      },
      {
        id: 'sql-wal-qz-3',
        kind: 'mcq',
        topic: 'wal-checkpoint-restart-mode',
        question: {
          en: 'What does running PRAGMA wal_checkpoint(RESTART); ensure before the checkpoint command completes?',
          bn: 'PRAGMA wal_checkpoint(RESTART); কমান্ডটি সম্পন্ন হওয়ার আগে কী নিশ্চিত করে?'
        },
        options: [
          {
            en: 'It blocks new writers until all existing readers finish, flushes the entire WAL to disk, and resets the WAL file back to the beginning',
            bn: 'বিদ্যমান সব রিডার শেষ না হওয়া পর্যন্ত এটি নতুন রাইটারকে অপেক্ষা করায়, সম্পূর্ণ WAL ডিস্কে স্থানান্তর করে এবং লগ আবার শুরু থেকে রিস্টার্ট করে'
          },
          {
            en: 'It permanently erases all tables and views',
            bn: 'এটি সব টেবিল ও ভিউ চিরতরে মুছে দেয়'
          },
          {
            en: 'It reboots the server machine',
            bn: 'এটি সার্ভার মেশিন রিবুট করে ফেলে'
          },
          {
            en: 'It converts the database to MySQL format',
            bn: 'এটি ডাটাবেসকে MySQL ফরম্যাটে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'RESTART waits for readers to clear so the WAL can start from offset zero.',
          bn: 'RESTART রিডার শেষ হওয়ার অপেক্ষা করে যাতে WAL আবার শূন্য অফসেট থেকে শুরু হতে পারে।'
        },
        explanation: {
          en: 'The RESTART checkpoint mode waits for readers to clear, transferring all WAL pages and restarting the log file from page 1.',
          bn: 'RESTART চেকপয়েন্ট রিডার শেষ হওয়া পর্যন্ত অপেক্ষা করে সমস্ত WAL পেজ মূল ফাইলে নিয়ে যায় এবং লগ আবার ১ নম্বর পেজ থেকে শুরু করে।'
        }
      },
      {
        id: 'sql-wal-qz-4',
        kind: 'mcq',
        topic: 'network-filesystem-wal-restriction',
        question: {
          en: 'Why is enabling WAL mode on network-attached filesystems (such as NFS or SMB) strongly discouraged in SQLite?',
          bn: 'নেটওয়ার্ক ফাইলসিস্টেমে (যেমন NFS বা SMB) SQLite-এর WAL মোড চালু করা কেন কঠোরভাবে নিরুৎসাহিত করা হয়?'
        },
        options: [
          {
            en: 'Because WAL mode requires shared-memory POSIX mmap primitives (.db-shm) which are often broken or inconsistently implemented over network filesystems',
            bn: 'কারণ WAL মোডের জন্য শেয়ার্ড-মেমরি POSIX mmap (.db-shm) প্রয়োজন যা নেটওয়ার্ক ফাইলসিস্টেমে প্রায়শই ত্রুটিপূর্ণ বা অনুপলব্ধ থাকে'
          },
          {
            en: 'Because network cables cannot transfer binary files',
            bn: 'কারণ নেটওয়ার্ক ক্যাবল বাইনারি ফাইল পাঠাতে পারে না'
          },
          {
            en: 'Because NFS filesystems only support Microsoft Word files',
            bn: 'কারণ NFS কেবল মাইক্রোসফট ওয়ার্ড ফাইল সমর্থন করে'
          },
          {
            en: 'Because SQLite requires 10 gigabit Ethernet to run',
            bn: 'কারণ SQLite চালাতে ১০ গিগাবিট ইথারনেট প্রয়োজন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Shared memory mmap is unreliable across multiple network client machines.',
          bn: 'নেটওয়ার্কে একাধিক মেশিনের মাঝে শেয়ার্ড মেমরি mmap নির্ভরযোগ্য নয়।'
        },
        explanation: {
          en: 'WAL requires shared memory across processes on the same host. Network filesystems fail to coordinate distributed mmap, risking data corruption.',
          bn: 'WAL একই মেশিনের প্রসেসগুলোর মাঝে শেয়ার্ড মেমরির ওপর নির্ভর করে। নেটওয়ার্ক ড্রাইভে mmap সমন্বয় না থাকায় ডাটা নষ্ট হওয়ার ঝুঁকি তৈরি হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-sqlite-release',
    title: {
      en: 'The SQLite Ecosystem: Embedded Architecture, Libsql, Litestream & Production',
      bn: 'SQLite ইকোসিস্টেম: এমবেডেড আর্কিটেকচার, Libsql, Litestream ও প্রোডাকশন ডিপ্লয়মেন্ট'
    }
  }
};
