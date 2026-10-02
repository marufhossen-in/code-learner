import type { Lesson } from '../../../lib/types';

export const WritesAndTheChangeLesson: Lesson = {
  slug: 'writes-and-the-change',
  tech: 'sqlite',
  title: {
    en: 'Atomic Writes & Upsert Mutations: INSERT, UPDATE, DELETE & RETURNING',
    bn: 'অ্যাটমিক রাইট ও আপসার্ট মিউটেশন: INSERT, UPDATE, DELETE ও RETURNING'
  },
  summary: {
    en: 'Master data modification and atomic write operations in SQLite. Explore INSERT, multi-row batch inserts, UPDATE with expressions, DELETE, modern RETURNING clauses, and idempotent ON CONFLICT DO UPDATE upserts.',
    bn: 'SQLite-এ ডাটা পরিবর্তন ও অ্যাটমিক রাইট অপারেশন গভীরভাবে আয়ত্ত করুন। INSERT, মাল্টি-রো ব্যাচ ইনসার্ট, এক্সপ্রেশনসহ UPDATE, DELETE, আধুনিক RETURNING ক্লজ এবং আইডেমপোটেন্ট ON CONFLICT DO UPDATE আপসার্ট ব্যবহারের সম্পূর্ণ গাইড।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'atomic-writes-overview',
      text: {
        en: 'The Life of a Write Mutation and Transaction Batching',
        bn: 'রাইট মিউটেশনের গতিপ্রকৃতি ও ট্রানজ্যাকশন ব্যাচিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you write data into SQLite (the embedded relational database engine), you trigger a carefully orchestrated sequence of transaction state transitions. From inserting single user profiles to batching thousands of sensor events, understanding write mechanics is essential for avoiding catastrophic performance bottlenecks.',
        bn: 'যখন আপনি SQLite (এমবেডেড রিলেশনাল ডাটাবেস ইঞ্জিন) এ ডাটা লেখেন, আপনি সুনির্দিষ্টভাবে পরিকল্পিত ট্রানজ্যাকশন সিকোয়েন্স সক্রিয় করেন। একক ব্যবহারকারীর প্রোফাইল যুক্ত করা থেকে শুরু করে হাজার হাজার সেন্সর ইভেন্ট ব্যাচ করা পর্যন্ত, ক্ষতিকর ধীরগতি পরিহার করতে রাইট মেকানিজম আয়ত্ত করা জরুরি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'By default, SQLite operates in autocommit mode. If you execute 1000 separate INSERT statements without an explicit transaction, SQLite creates 1000 distinct transactions, each requiring a physical disk fsync. This can cause the insert process to take 15 seconds instead of 15 milliseconds.',
        bn: 'ডিফল্টভাবে SQLite অটো-কমিট মোডে চলে। স্পষ্ট ট্রানজ্যাকশন ছাড়া আপনি ১০০০টি আলাদা INSERT স্টেটমেন্ট চালালে SQLite ১০০০টি আলাদা ট্রানজ্যাকশন তৈরি করে, যার প্রতিটিতে ডিস্ক fsync প্রয়োজন হয়। ফলে কাজটি ১৫ মিলিসেকেন্ডের বদলে ১৫ সেকেন্ড পর্যন্ত সময় নিতে পারে।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-writes-diagram',
      caption: {
        en: 'Figure 1: Standalone autocommit writes vs batched atomic transaction commits, and ON CONFLICT upsert evaluation.',
        bn: 'চিত্র ১: একক অটোকমিট রাইট বনাম ব্যাচড অ্যাটমিক ট্রানজ্যাকশন কমিট এবং ON CONFLICT আপসার্ট কার্যপদ্ধতি।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="wrtHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="badBatchGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#311010"/>
      <stop offset="100%" stop-color="#180a0a"/>
    </linearGradient>
    <linearGradient id="goodBatchGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#wrtHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">✍️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE WRITE PIPELINE &amp; BATCH MUTATION ARCHITECTURE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Autocommit disk penalties, atomic batch transactions, ON CONFLICT upserts, and RETURNING clauses</text>

  <!-- Top: Batching Comparison -->
  <rect x="24" y="90" width="912" height="175" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
  <text x="44" y="118" fill="#38bdf8" font-size="13" font-weight="bold">TRANSACTION BATCHING: 1,000 INSERTS BENCHMARK</text>

  <!-- Bad Lane: 1000 Standalone fsyncs -->
  <rect x="44" y="132" width="416" height="115" rx="8" fill="url(#badBatchGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="56" y="154" fill="#f87171" font-size="12" font-weight="bold">Un-batched Autocommit (The Trap)</text>
  <text x="56" y="174" fill="#cbd5e1" font-size="10">• Loop of 1,000 separate INSERT statements</text>
  <text x="56" y="192" fill="#ef4444" font-size="10">• 1,000 transactions -&gt; 1,000 physical disk fsyncs!</text>
  <text x="56" y="210" fill="#fca5a5" font-size="10">• Severe disk I/O bottleneck: ~15,000 ms (15.0 seconds)</text>
  <text x="56" y="228" fill="#ef4444" font-size="10" font-weight="bold">• Latency: 66 inserts / second</text>

  <!-- Good Lane: Batched in 1 Transaction -->
  <rect x="480" y="132" width="436" height="115" rx="8" fill="url(#goodBatchGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="496" y="154" fill="#34d399" font-size="12" font-weight="bold">Explicit Transaction (The Solution)</text>
  <text x="496" y="174" fill="#cbd5e1" font-size="10">• BEGIN TRANSACTION; [1,000 inserts] COMMIT;</text>
  <text x="496" y="192" fill="#10b981" font-size="10">• 1 single transaction -&gt; Exactly 1 disk fsync!</text>
  <text x="496" y="210" fill="#a7f3d0" font-size="10">• Blazing speed: ~15 ms (1,000x throughput boost!)</text>
  <text x="496" y="228" fill="#34d399" font-size="10" font-weight="bold">• Throughput: 65,000+ inserts / second</text>

  <!-- Bottom Left: ON CONFLICT Upsert -->
  <rect x="24" y="280" width="446" height="180" rx="10" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
  <text x="44" y="308" fill="#34d399" font-size="13" font-weight="bold">ON CONFLICT DO UPDATE (UPSERT)</text>
  <rect x="40" y="322" width="414" height="125" rx="6" fill="#030712" stroke="#047857"/>
  <text x="52" y="344" fill="#a78bfa" font-size="10">INSERT INTO counters (id, hits)</text>
  <text x="52" y="362" fill="#f1f5f9" font-size="10">VALUES (42, 1)</text>
  <text x="52" y="380" fill="#fbbf24" font-size="10">ON CONFLICT(id) DO UPDATE SET</text>
  <text x="72" y="398" fill="#34d399" font-size="10">hits = counters.hits + excluded.hits;</text>
  <text x="52" y="420" fill="#94a3b8" font-size="9">• Atomically updates existing row if unique constraint collides.</text>
  <text x="52" y="434" fill="#94a3b8" font-size="9">• excluded pseudo-table accesses proposed new values.</text>

  <!-- Bottom Right: RETURNING Clause -->
  <rect x="490" y="280" width="446" height="180" rx="10" fill="#111827" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="510" y="308" fill="#38bdf8" font-size="13" font-weight="bold">RETURNING CLAUSES (SQLite 3.35+)</text>
  <rect x="506" y="322" width="414" height="125" rx="6" fill="#030712" stroke="#0284c7"/>
  <text x="518" y="344" fill="#a78bfa" font-size="10">INSERT INTO users (name, role)</text>
  <text x="518" y="362" fill="#f1f5f9" font-size="10">VALUES ('Diana', 'admin')</text>
  <text x="518" y="380" fill="#38bdf8" font-size="10">RETURNING id, created_at, rowid;</text>
  <text x="518" y="404" fill="#94a3b8" font-size="9">• Eliminates follow-up SELECT queries to fetch generated IDs.</text>
  <text x="518" y="420" fill="#94a3b8" font-size="9">• Works seamlessly on INSERT, UPDATE, and DELETE.</text>
  <text x="518" y="434" fill="#34d399" font-size="9">• Perfect for audit logging and single-roundtrip API mutations.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'upsert-semantics',
      text: {
        en: 'Upsert Mechanics: ON CONFLICT DO UPDATE and the excluded Table',
        bn: 'আপসার্ট মেকানিজম: ON CONFLICT DO UPDATE ও excluded টেবিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An upsert operation atomically inserts a row or updates an existing record if a unique constraint or primary key conflict occurs. In SQLite, this is accomplished using the ON CONFLICT clause.',
        bn: 'আপসার্ট হলো এমন একটি অপারেশন যা নতুন রো ইনসার্ট করে অথবা ইউনিক প্রাইমারি কি-র সংঘাত ঘটলে বিদ্যমান রো আপডেট করে। SQLite-এ এটি ON CONFLICT ক্লজ দিয়ে সম্পন্ন করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Inside the DO UPDATE block, SQLite provides a special pseudo-table named excluded. This table contains the exact values that were proposed for insertion, enabling clean expressions like hits = counters.hits + excluded.hits without client-side race conditions.',
        bn: 'DO UPDATE ব্লকের ভেতরে SQLite excluded নামের একটি বিশেষ টেবিল তৈরি করে। ইনসার্টের জন্য পাঠানো নতুন মানগুলো এই টেবিলে থাকে, যার ফলে hits = counters.hits + excluded.hits এর মতো শর্ত লিখে কোনো রেস কন্ডিশন ছাড়াই নির্ভুল ডাটা আপডেট করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'returning-clause',
      text: {
        en: 'Modern RETURNING Clauses: Eliminating Follow-up SELECTs',
        bn: 'আধুনিক RETURNING ক্লজ: দ্বিতীয়বার SELECT চালানোর প্রয়োজনীয়তা দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Starting in SQLite version 3.35, the RETURNING clause allows write statements to immediately emit modified rows. Instead of performing an INSERT followed by a separate SELECT last_insert_rowid(), the application receives newly generated columns in a single atomic roundtrip.',
        bn: 'SQLite ভার্সন 3.35 থেকে যোগ হওয়া RETURNING ক্লজ রাইট স্টেটমেন্টের সাথে সাথে পরিবর্তিত সারি ফেরত পাঠানোর সুযোগ দেয়। ইনসার্ট করার পর আলাদা SELECT last_insert_rowid() কোয়েরি না চালিয়ে একবারে সরাসরি নতুন আইডি ও ডাটা পাওয়া যায়।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-mutations-sim',
      text: {
        en: 'Interactive Benchmark: Transaction Batching, Upserts & RETURNING',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: ট্রানজ্যাকশন ব্যাচিং, আপসার্ট ও RETURNING'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-write-mutations-sim.ts',
      code: `// SQLite Write Mutations & Upsert Simulator
// 1000 standalone inserts take ~15000 ms -> gives 15000
// 1000 batched inserts finish in ~15 ms -> 1000x speedup
// Upsert user 42 increments loginCount from 1 to 2 -> returns 2
function simulateSqliteMutations() {
  console.log("=== SQLITE WRITE MUTATIONS & UPSERT SIMULATOR ===");

  const ROWS_COUNT = 1000;
  console.log(\`\\n1. Write Throughput Benchmark (\${ROWS_COUNT} records):\`);
  console.log(\`   Standalone (1000 fsyncs): ~15000.0 ms (15.0 seconds disk wait)\`);
  console.log(\`   Batched in BEGIN..COMMIT: ~15.0 ms (1000x speedup with 1 single fsync)\`);

  const table = new Map<number, { userId: number; name: string; loginCount: number }>();
  function upsertUser(userId: number, name: string, loginCount: number) {
    if (table.has(userId)) {
      const existing = table.get(userId)!;
      const updated = {
        userId,
        name: existing.name,
        loginCount: existing.loginCount + loginCount
      };
      table.set(userId, updated);
      return { action: "UPDATED", record: updated };
    } else {
      const created = { userId, name, loginCount };
      table.set(userId, created);
      return { action: "INSERTED", record: created };
    }
  }

  console.log("\\n2. Upsert Simulation (ON CONFLICT DO UPDATE):");
  const op1 = upsertUser(42, "Alice", 1);
  console.log(\`   Attempt 1 (User 42) -> Action: \${op1.action} | loginCount: \${op1.record.loginCount}\`);
  const op2 = upsertUser(42, "Alice", 1);
  console.log(\`   Attempt 2 (User 42) -> Action: \${op2.action} | loginCount: \${op2.record.loginCount}\`);

  console.log("\\n3. Modern SQLite RETURNING Clause (Version 3.35+):");
  console.log("   INSERT INTO orders (customer_id, total) VALUES (101, 99.50) RETURNING id, created_at;");
  console.log("   -> Yields: { id: 1, customer_id: 101, total: 99.50, created_at: '2026-09-30 12:00:00' } in single roundtrip");
}

simulateSqliteMutations();`
    },
    {
      type: 'terminal',
      id: 'mutations-output',
      cmd: 'npx tsx sqlite-write-mutations-sim.ts',
      output: `=== SQLITE WRITE MUTATIONS & UPSERT SIMULATOR ===

1. Write Throughput Benchmark (1000 records):
   Standalone (1000 fsyncs): ~15000.0 ms (15.0 seconds disk wait)
   Batched in BEGIN..COMMIT: ~15.0 ms (1000x speedup with 1 single fsync)

2. Upsert Simulation (ON CONFLICT DO UPDATE):
   Attempt 1 (User 42) -> Action: INSERTED | loginCount: 1
   Attempt 2 (User 42) -> Action: UPDATED | loginCount: 2

3. Modern SQLite RETURNING Clause (Version 3.35+):
   INSERT INTO orders (customer_id, total) VALUES (101, 99.50) RETURNING id, created_at;
   -> Yields: { id: 1, customer_id: 101, total: 99.50, created_at: '2026-09-30 12:00:00' } in single roundtrip`
    }
  ],
  exercises: [
    {
      id: 'sql-wrt-ex-1',
      kind: 'mcq',
      topic: 'transaction-batching-performance',
      question: {
        en: 'Why does inserting 1000 separate rows individually take several seconds in SQLite unless wrapped in an explicit transaction?',
        bn: 'স্পষ্ট ট্রানজ্যাকশনে আবদ্ধ না করলে SQLite-এ আলাদাভাবে 1000টি সারি ইনসার্ট করতে কেন কয়েক সেকেন্ড সময় লাগে?'
      },
      options: [
        {
          en: 'Without an explicit transaction, SQLite creates an automatic transaction and disk fsync for every single statement, multiplying disk I/O latency',
          bn: 'স্পষ্ট ট্রানজ্যাকশন না থাকলে SQLite প্রতিটি একক স্টেটমেন্টের জন্য স্বয়ংক্রিয় ট্রানজ্যাকশন ও ডিস্ক fsync চালায়, যা ডিস্ক লেটেন্সি বহুগুণ বাড়িয়ে দেয়'
        },
        {
          en: 'Because SQLite can only write 1 row per hour by design',
          bn: 'কারণ SQLite প্রতি ঘণ্টায় কেবল ১টি রো লিখতে পারে'
        },
        {
          en: 'Because inserting numbers requires consulting an external cloud server',
          bn: 'কারণ সংখ্যা ইনসার্ট করতে বাইরের ক্লাউড সার্ভারের অনুমতি লাগে'
        },
        {
          en: 'The operating system refuses to store more than 10 records at a time',
          bn: 'অপারেটিং সিস্টেম একসাথে ১০টির বেশি রেকর্ড রাখতে দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each autocommit transaction forces a physical disk sync (fsync) to guarantee durability.',
        bn: 'প্রতিটি অটোকমিট ট্রানজ্যাকশন স্থায়িত্ব নিশ্চিত করতে ডিস্কে সরাসরি fsync চালায়।'
      },
      explanation: {
        en: 'Wrapping 1000 statements in BEGIN TRANSACTION ... COMMIT bundles all modifications into a single disk fsync, speeding up execution by 1000x.',
        bn: 'BEGIN TRANSACTION ... COMMIT দিয়ে ১০০০টি ইনসার্ট একসাথে বাঁধলে একটিমাত্র fsync লাগে, ফলে কাজ ১০০০ গুণ দ্রুত হয়।'
      }
    },
    {
      id: 'sql-wrt-ex-2',
      kind: 'mcq',
      topic: 'upsert-excluded-pseudo-table',
      question: {
        en: 'In an SQLite ON CONFLICT(id) DO UPDATE statement, what does the excluded pseudo-table represent?',
        bn: 'SQLite-এর ON CONFLICT(id) DO UPDATE স্টেটমেন্টে excluded নামের বিশেষ টেবিলটি কী প্রকাশ করে?'
      },
      options: [
        {
          en: 'The values that were proposed for insertion in the current statement which collided with existing records',
          bn: 'বর্তমান স্টেটমেন্টে ইনসার্ট করার জন্য পাঠানো নতুন মানগুলো যা বিদ্যমান রেকর্ডের সাথে সংঘাত ঘটিয়েছে'
        },
        {
          en: 'A list of banned IP addresses',
          bn: 'নিষিদ্ধ আইপি ঠিকানার তালিকা'
        },
        {
          en: 'All rows that were permanently deleted yesterday',
          bn: 'গতকাল চিরতরে মুছে ফেলা সমস্ত সারির তালিকা'
        },
        {
          en: 'The name of the database file on disk',
          bn: 'ডিস্কে থাকা ডাটাবেস ফাইলের নাম'
        }
      ],
      answer: 0,
      hint: {
        en: 'excluded contains the incoming candidate row values.',
        bn: 'excluded-এ নতুন ইনসার্ট করতে চাওয়া মানগুলো থাকে।'
      },
      explanation: {
        en: 'excluded.col allows the UPDATE expression to reference the new values provided in the VALUES clause during conflict resolution.',
        bn: 'excluded.col ব্যবহারের মাধ্যমে কনফ্লিক্ট সমাধানের সময় VALUES ক্লজে পাঠানো নতুন মানগুলো সরাসরি রেফারেন্স করা যায়।'
      }
    },
    {
      id: 'sql-wrt-ex-3',
      kind: 'mcq',
      topic: 'sqlite-returning-clause-efficiency',
      question: {
        en: 'What is the primary benefit of appending RETURNING id, created_at to an INSERT statement in SQLite version 3.35+?',
        bn: 'SQLite ভার্সন 3.35+ এ INSERT স্টেটমেন্টের শেষে RETURNING id, created_at যোগ করার মূল সুবিধা কী?'
      },
      options: [
        {
          en: 'It returns the newly generated primary key and default values in the same execution without issuing a follow-up SELECT query',
          bn: 'পরবর্তীতে আলাদা SELECT কোয়েরি না চালিয়েই একই সাথে নতুন তৈরি হওয়া প্রাইমারি কি এবং ডিফল্ট মানগুলো পাওয়া যায়'
        },
        {
          en: 'It encrypts the database using AES-256',
          bn: 'এটি ডাটাবেসকে AES-256 দিয়ে এনক্রিপ্ট করে ফেলে'
        },
        {
          en: 'It makes the insert statement run on a background web worker thread',
          bn: 'এটি ইনসার্ট স্টেটমেন্টকে ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কারে চালায়'
        },
        {
          en: 'It rolls back the transaction immediately after writing',
          bn: 'লেখার সাথে সাথে এটি ট্রানজ্যাকশন বাতিল করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'RETURNING streams modified tuples directly to the client.',
        bn: 'RETURNING সরাসরি ক্লায়েন্টের কাছে পরিবর্তিত ডাটা পাঠিয়ে দেয়।'
      },
      explanation: {
        en: 'RETURNING eliminates the need for separate SELECT last_insert_rowid() calls, saving latency and simplifying application code.',
        bn: 'RETURNING ব্যবহারের ফলে আলাদাভাবে SELECT last_insert_rowid() চালানোর দরকার হয় না, ফলে কোড সহজ হয় ও সময় বাঁচে।'
      }
    },
    {
      id: 'sql-wrt-ex-4',
      kind: 'mcq',
      topic: 'single-writer-concurrency-rule',
      question: {
        en: 'Why does SQLite allow only one active write transaction at any given moment across all database connections?',
        bn: 'কেন SQLite যেকোনো মুহূর্তে সমস্ত সংযোগ মিলিয়ে কেবল একটিমাত্র সক্রিয় রাইট ট্রানজ্যাকশন চালানোর অনুমতি দেয়?'
      },
      options: [
        {
          en: 'To guarantee ACID serializability and database integrity on a single shared file without requiring a centralized server daemon lock manager',
          bn: 'কোনো কেন্দ্রীয় সার্ভার ডিমন ছাড়াই একক ফাইলে ACID ধারাবাহিকতা ও তথ্যের সুরক্ষা নিশ্চিত করার জন্য'
        },
        {
          en: 'Because hard drives only have one spinning platter',
          bn: 'কারণ হার্ডড্রাইভে কেবল একটিমাত্র ঘূর্ণায়মান ডিস্ক থাকে'
        },
        {
          en: 'Because C compilers cannot execute multi-threaded code',
          bn: 'কারণ সি কম্পাইলার মাল্টি-থ্রেডেড কোড চালাতে পারে না'
        },
        {
          en: 'To limit the total database size to 100 megabytes',
          bn: 'ডাটাবেসের মোট আকার ১০০ মেগাবাইটে সীমাবদ্ধ রাখার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'SQLite is an embedded file engine without a central server lock manager daemon.',
        bn: 'SQLite কোনো কেন্দ্রীয় সার্ভার ডিমন ছাড়া ফাইলের ওপর সরাসরি কাজ করে।'
      },
      explanation: {
        en: 'SQLite coordinates concurrency via OS file locks. Restricting writes to a single connection prevents corrupted B-Tree pages and file conflicts.',
        bn: 'SQLite অপারেটিং সিস্টেমের ফাইল লকের ওপর নির্ভর করে। একসাথে একাধিক রাইট আটকে দিয়ে এটি ফাইলের ক্ষতি হওয়া থেকে রক্ষা করে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite Atomic Writes & Upsert Mutations Quiz',
      bn: 'SQLite অ্যাটমিক রাইট ও আপসার্ট মিউটেশন কুইজ'
    },
    questions: [
      {
        id: 'sql-wrt-qz-1',
        kind: 'mcq',
        topic: 'sqlite-transaction-states',
        question: {
          en: 'Which progression of internal lock states does an SQLite write transaction follow before modifying pages on disk?',
          bn: 'ডিস্কের পেজ পরিবর্তনের আগে একটি SQLite রাইট ট্রানজ্যাকশন অভ্যন্তরীণ লকের কোন ধারাবাহিক ধাপগুলো অনুসরণ করে?'
        },
        options: [
          {
            en: 'UNLOCKED -> SHARED -> RESERVED -> PENDING -> EXCLUSIVE',
            bn: 'UNLOCKED -> SHARED -> RESERVED -> PENDING -> EXCLUSIVE'
          },
          {
            en: 'OPEN -> CLOSED -> LOCKED -> DELETED',
            bn: 'OPEN -> CLOSED -> LOCKED -> DELETED'
          },
          {
            en: 'READ -> WRITE -> COMMIT -> ROLLBACK',
            bn: 'READ -> WRITE -> COMMIT -> ROLLBACK'
          },
          {
            en: 'START -> PAUSE -> RESUME -> STOP',
            bn: 'START -> PAUSE -> RESUME -> STOP'
          }
        ],
        answer: 0,
        hint: {
          en: 'The progression moves from SHARED read lock to EXCLUSIVE write lock.',
          bn: 'ধাপগুলো SHARED রিড লক থেকে শুরু হয়ে EXCLUSIVE রাইট লকে গিয়ে শেষ হয়।'
        },
        explanation: {
          en: 'SQLite moves through SHARED (reading), RESERVED (preparing to write), PENDING (waiting for readers to clear), and EXCLUSIVE (exclusive write lock).',
          bn: 'SQLite প্রথমে SHARED (রিড), তারপর RESERVED (রাইটের প্রস্তুতি), PENDING (রিডার শেষ হওয়ার অপেক্ষা) এবং শেষে EXCLUSIVE (রাইট) লক নেয়।'
        }
      },
      {
        id: 'sql-wrt-qz-2',
        kind: 'mcq',
        topic: 'on-conflict-do-nothing-semantics',
        question: {
          en: 'What is the operational function of the statement INSERT INTO tags (name) VALUES (tech) ON CONFLICT(name) DO NOTHING;?',
          bn: 'INSERT INTO tags (name) VALUES (tech) ON CONFLICT(name) DO NOTHING; স্টেটমেন্টটির মূল কাজ কী?'
        },
        options: [
          {
            en: 'It safely ignores the insert if a tag named tech already exists, avoiding unique constraint violations without throwing an error',
            bn: 'tech নামের ট্যাগ আগে থেকেই থাকলে এটি কোনো এরর না দিয়ে নিরাপদে ইনসার্টটি উপেক্ষা করে'
          },
          {
            en: 'It deletes all existing tags in the database',
            bn: 'এটি ডাটাবেসের সমস্ত ট্যাগ মুছে ফেলে'
          },
          {
            en: 'It shuts down the host application process',
            bn: 'এটি অ্যাপ্লিকেশনের প্রসেস পুরোপুরি বন্ধ করে দেয়'
          },
          {
            en: 'It renames tech to undefined',
            bn: 'এটি tech-এর নাম পরিবর্তন করে undefined করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'DO NOTHING is an idempotent insert pattern.',
          bn: 'DO NOTHING একটি আইডেমপোটেন্ট ইনসার্ট প্যাটার্ন।'
        },
        explanation: {
          en: 'DO NOTHING allows applications to insert records idempotently. If the unique key already exists, the statement silently finishes without error.',
          bn: 'DO NOTHING অ্যাপ্লিকেশনকে নিরাপদ ইনসার্টের সুযোগ দেয়। মান আগে থেকে থাকলে কোনো এরর না দিয়ে এটি কাজ সম্পন্ন করে।'
        }
      },
      {
        id: 'sql-wrt-qz-3',
        kind: 'mcq',
        topic: 'delete-with-returning-audit',
        question: {
          en: 'How can a developer archive deleted rows into an audit log table in a single atomic SQL statement using RETURNING?',
          bn: 'RETURNING ব্যবহার করে একটিমাত্র অ্যাটমিক স্টেটমেন্টে কীভাবে মুছে ফেলা রোগুলো অডিট টেবিলে সংরক্ষণ করা যায়?'
        },
        options: [
          {
            en: 'INSERT INTO audit_log SELECT * FROM (DELETE FROM orders WHERE status = cancelled RETURNING *);',
            bn: 'INSERT INTO audit_log SELECT * FROM (DELETE FROM orders WHERE status = cancelled RETURNING *);'
          },
          {
            en: 'By emailing the database administrator before deleting',
            bn: 'মুছে ফেলার আগে ডাটাবেস অ্যাডমিনকে ইমেইল করে'
          },
          {
            en: 'Deleted rows can never be recovered or captured with RETURNING',
            bn: 'মুছে ফেলা রো কখনো RETURNING দিয়ে ধরা যায় না'
          },
          {
            en: 'By restarting the server in audit mode',
            bn: 'সার্ভারকে অডিট মোডে রিস্টার্ট করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In SQLite 3.35+, DELETE statements support RETURNING just like INSERT and UPDATE.',
          bn: 'SQLite 3.35+ এ DELETE স্টেটমেন্টেও INSERT-এর মতো RETURNING কাজ করে।'
        },
        explanation: {
          en: 'SQLite allows combining a DELETE ... RETURNING clause with an INSERT statement, atomically moving deleted records into an archive table.',
          bn: 'DELETE ... RETURNING এর সাথে INSERT যোগ করে মুছে ফেলা ডাটাকে একবারে নিরাপদে আর্কাইভ টেবিলে স্থানান্তর করা সম্ভব।'
        }
      },
      {
        id: 'sql-wrt-qz-4',
        kind: 'mcq',
        topic: 'sqlite-busy-timeout-resolution',
        question: {
          en: 'If a write transaction attempts to acquire a lock while another transaction is currently writing, how does PRAGMA busy_timeout = 5000; prevent failure?',
          bn: 'অন্য ট্রানজ্যাকশন লেখার সময় কোনো রাইট লক নেওয়ার চেষ্টা করলে PRAGMA busy_timeout = 5000; কীভাবে ব্যর্থতা রোধ করে?'
        },
        options: [
          {
            en: 'It causes the blocked connection to sleep and retry acquiring the lock for up to 5000 milliseconds before throwing SQLITE_BUSY',
            bn: 'এটি সাথে সাথে ব্যর্থ না হয়ে সর্বোচ্চ 5000 মিলিসেকেন্ড পর্যন্ত অপেক্ষা করে বারবার লক নেওয়ার চেষ্টা চালিয়ে যায়'
          },
          {
            en: 'It increases the database connection pool to 5000 servers',
            bn: 'এটি ডাটাবেস কানেকশন পুলকে ৫০০০ সার্ভারে উন্নীত করে'
          },
          {
            en: 'It forces the operating system to delete the competing transaction',
            bn: 'এটি অপারেটিং সিস্টেমকে প্রতিযোগী ট্রানজ্যাকশন মুছে ফেলতে বাধ্য করে'
          },
          {
            en: 'It turns off write verification permanently',
            bn: 'এটি স্থায়ীভাবে রাইট যাচাইকরণ বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'busy_timeout sets an automatic sleep-and-retry duration.',
          bn: 'busy_timeout স্বয়ংক্রিয়ভাবে অপেক্ষা করে পুনরায় চেষ্টার সময় নির্ধারণ করে।'
        },
        explanation: {
          en: 'Without busy_timeout, SQLite immediately returns SQLITE_BUSY. Setting a 5000ms timeout enables graceful concurrency handling.',
          bn: 'busy_timeout না থাকলে সাথে সাথে এরর আসে। ৫০০০ms টাইমআউট দিলে এটি অপেক্ষা করে লক খালি হওয়ার সুযোগ দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'joins-and-the-view',
    title: {
      en: 'Relational Joins & Subqueries: INNER, LEFT, CTEs & Views',
      bn: 'রিলেশনাল জয়েন ও সাবকোয়েরি: INNER, LEFT, CTE ও ভিউ'
    }
  }
};
