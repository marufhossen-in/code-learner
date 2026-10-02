import type { Lesson } from '../../../lib/types';

export const FilesAndTheTableLesson: Lesson = {
  slug: 'files-and-the-table',
  tech: 'sqlite',
  title: {
    en: 'Single-File Architecture & Storage Engine: B-Trees, Pages & In-Memory Databases',
    bn: 'সিঙ্গেল-ফাইল আর্কিটেকচার ও স্টোরেজ ইঞ্জিন: B-Tree, পেজ ও ইন-মেমরি ডাটাবেস'
  },
  summary: {
    en: 'A beginner overview of the internal architecture of SQLite. Learn how an entire relational database lives inside a single cross-platform file, the 100-byte database header, 4096-byte B-Tree page layouts, in-memory databases (:memory:), and the SQLite CLI.',
    bn: 'SQLite-এর অভ্যন্তরীণ আর্কিটেকচার ও সহজ পরিচিতি। কীভাবে একটি সম্পূর্ণ রিলেশনাল ডাটাবেস একক ক্রস-প্ল্যাটফর্ম ফাইলে সংরক্ষিত থাকে, ১০০-বাইটের ফাইল হেডার, ৪০৯৬-বাইটের B-Tree পেজ লেআউট, ইন-মেমরি ডাটাবেস (:memory:) এবং SQLite CLI কমান্ড আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'serverless-architecture',
      text: {
        en: 'The Serverless Architecture: An In-Process Relational Database',
        bn: 'সার্ভারলেস আর্কিটেকচার: ইন-প্রসেস রিলেশনাল ডাটাবেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build software with SQLite, you interact with one of the most widely deployed software modules in human history. Unlike traditional databases that run as background network services, SQLite is an embedded engine that lives directly inside your application process.',
        bn: 'যখন আপনি SQLite দিয়ে সফটওয়্যার তৈরি করেন, আপনি মানব ইতিহাসের অন্যতম সর্বাধিক ব্যবহৃত সফটওয়্যারের সাথে কাজ করেন। ব্যাকগ্রাউন্ড নেটওয়ার্ক সার্ভিস হিসেবে চলা চিরাচরিত ডাটাবেসের তুলনায় SQLite একটি এমবেডেড ইঞ্জিন যা সরাসরি আপনার অ্যাপ্লিকেশন প্রসেসের ভেতরেই কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'There are no network ports to open, no daemons to configure, and no user permission privileges to manage. Your application talks to SQLite through direct C library calls, reading and writing an entire database contained inside a single cross-platform disk file.',
        bn: 'এতে কোনো নেটওয়ার্ক পোর্ট খোলার ঝামেলা নেই, ব্যাকগ্রাউন্ড সার্ভিস কনফিগার করার দরকার নেই এবং ব্যবহারকারীর অনুমতি নিয়ন্ত্রণেরও প্রয়োজন নেই। অ্যাপ্লিকেশন সরাসরি C লাইব্রেরি কলের মাধ্যমে SQLite-এর সাথে যোগাযোগ করে একটি সাধারণ ফাইলে পুরো ডাটাবেস পরিচালনা করে।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-architecture-diagram',
      caption: {
        en: 'Figure 1: SQLite internal engine layers and single-file B-Tree page layout on disk.',
        bn: 'চিত্র ১: SQLite ইঞ্জিনের অভ্যন্তরীণ স্তরসমূহ এবং ডিস্কে সিঙ্গেল-ফাইল B-Tree পেজ লেআউট।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="sqHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="engineGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="pageGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="100%" stop-color="#0c0a09"/>
    </linearGradient>
  </defs>

  <!-- Title Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#sqHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🪶</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE ENGINE ARCHITECTURE &amp; SINGLE-FILE STORAGE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">In-process VDBE virtual machine, B-Tree pager, 100-byte file header, and 4096-byte pages</text>

  <!-- Top Container: Host Application Process -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#engineGrad)" stroke="#0284c7" stroke-width="1.5"/>
  <text x="44" y="118" fill="#38bdf8" font-size="13" font-weight="bold">HOST APPLICATION PROCESS (In-Memory)</text>
  <text x="44" y="136" fill="#94a3b8" font-size="10">Zero network latency: Direct function call interface</text>

  <!-- Engine Sub-Layers -->
  <rect x="44" y="150" width="400" height="42" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="176" fill="#cbd5e1" font-size="11" font-weight="bold">1. SQL Parser &amp; Tokenizer (Lemon Parser)</text>

  <rect x="44" y="202" width="400" height="42" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="228" fill="#cbd5e1" font-size="11" font-weight="bold">2. Code Generator &amp; Query Optimizer</text>

  <rect x="44" y="254" width="400" height="42" rx="6" fill="#030712" stroke="#38bdf8"/>
  <text x="56" y="280" fill="#38bdf8" font-size="11" font-weight="bold">3. VDBE (Virtual Database Engine / Bytecode VM)</text>

  <rect x="44" y="306" width="400" height="42" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="332" fill="#cbd5e1" font-size="11" font-weight="bold">4. B-Tree Layer (Table &amp; Index B-Trees)</text>

  <rect x="44" y="358" width="400" height="42" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="384" fill="#cbd5e1" font-size="11" font-weight="bold">5. Pager Layer (Caching &amp; ACID Transactions)</text>

  <rect x="44" y="408" width="400" height="36" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="431" fill="#94a3b8" font-size="10">6. OS Interface (VFS: POSIX, Windows, Memory)</text>

  <!-- Right Container: Single Disk File Layout -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#pageGrad)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="516" y="118" fill="#fbbf24" font-size="13" font-weight="bold">DATABASE FILE ON DISK (app.db)</text>
  <text x="516" y="136" fill="#94a3b8" font-size="10">Single cross-platform binary file; 4096-byte fixed pages</text>

  <!-- Page 1: 100-byte Header + sqlite_schema -->
  <rect x="516" y="150" width="400" height="70" rx="6" fill="#292524" stroke="#d97706"/>
  <text x="528" y="172" fill="#fde68a" font-size="11" font-weight="bold">PAGE 1 (Root Page: 4096 Bytes)</text>
  <text x="528" y="190" fill="#38bdf8" font-size="10">[0-99]: 100-Byte Database File Header (Magic, PageSize)</text>
  <text x="528" y="206" fill="#cbd5e1" font-size="10">[100-4095]: sqlite_schema Master Table (All DDL statements)</text>

  <!-- Page 2: Table B-Tree Leaf -->
  <rect x="516" y="230" width="400" height="65" rx="6" fill="#1c1917" stroke="#44403c"/>
  <text x="528" y="252" fill="#e2e8f0" font-size="11" font-weight="bold">PAGE 2: Table B-Tree Leaf (0x0d)</text>
  <text x="528" y="270" fill="#94a3b8" font-size="10">Cell Pointer Array (Top) &lt;--&gt; Row Records (Bottom)</text>
  <text x="528" y="284" fill="#10b981" font-size="10">Stores: users table rows with 64-bit integer rowid</text>

  <!-- Page 3: Index B-Tree Leaf -->
  <rect x="516" y="305" width="400" height="65" rx="6" fill="#1c1917" stroke="#44403c"/>
  <text x="528" y="327" fill="#e2e8f0" font-size="11" font-weight="bold">PAGE 3: Index B-Tree Leaf (0x0a)</text>
  <text x="528" y="345" fill="#94a3b8" font-size="10">Stores: idx_users_email (email text + target rowid)</text>

  <!-- Free / Freelist Pages -->
  <rect x="516" y="380" width="400" height="64" rx="6" fill="#1c1917" stroke="#44403c"/>
  <text x="528" y="402" fill="#94a3b8" font-size="11" font-weight="bold">PAGES 4..N: Freelist Trunk &amp; Overflow Pages</text>
  <text x="528" y="420" fill="#a8a29e" font-size="10">Reclaimed space from deleted rows; overflow for large BLOBs</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'database-header-anatomy',
      text: {
        en: 'The 100-Byte Database File Header and Page Layout',
        bn: '১০০-বাইটের ডাটাবেস ফাইল হেডার ও পেজ লেআউট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The very first 100 bytes of Page 1 in an SQLite file contain critical metadata required by the storage engine to read the database safely.',
        bn: 'SQLite ফাইলের পেজ 1 এর প্রথম 100 বাইট জুড়ে অত্যন্ত গুরুত্বপূর্ণ মেটাডাটা সংরক্ষিত থাকে যা স্টোরেজ ইঞ্জিনকে নিরাপদে ফাইলটি পড়তে সহায়তা করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bytes 0 to 15: The magic string SQLite format 3 followed by a null terminator, identifying the binary format.',
          bn: 'বাইট ০ থেকে ১৫: SQLite format 3 ম্যাজিক স্ট্রিং এবং নাল টার্মিনেটর, যা বাইনারি ফাইল ফরম্যাট শনাক্ত করে।'
        },
        {
          en: 'Bytes 16 to 17: Database page size in bytes, defaulting to 4096 bytes and ranging between 512 and 65536 bytes.',
          bn: 'বাইট ১৬ থেকে ১৭: ডাটাবেসের পেজ সাইজ, যা ডিফল্টভাবে ৪০৯৬ বাইট হয় এবং ৫১২ থেকে ৬৫৫৩৬ বাইট পর্যন্ত হতে পারে।'
        },
        {
          en: 'Bytes 18 to 19: File format write and read versions (1 for traditional rollback journal, 2 for Write-Ahead Logging).',
          bn: 'বাইট ১৮ থেকে ১৯: ফাইল ফরম্যাট রাইট ও রিড সংস্করণ (১ হলো রোলব্যাক জার্নাল, ২ হলো রাইট-অ্যাহেড লগিং বা WAL)।'
        },
        {
          en: 'Bytes 24 to 27: The file change counter, incremented by the database engine on every committed transaction.',
          bn: 'বাইট ২৪ থেকে ২৭: ফাইল পরিবর্তন কাউন্টার, যা প্রতিটি সফল কমিটের সময় ডাটাবেস ইঞ্জিন দ্বারা ১ করে বৃদ্ধি পায়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'in-memory-databases',
      text: {
        en: 'In-Memory Databases and Temporary Storage Modes',
        bn: 'ইন-মেমরি ডাটাবেস ও অস্থায়ী স্টোরেজ মোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'SQLite provides a specialized in-memory mode accessed by opening the URI path :memory:. When running in memory, all B-Tree pages reside purely in process RAM, eliminating physical disk I/O and boosting write throughput by orders of magnitude.',
        bn: 'SQLite একটি বিশেষ ইন-মেমরি মোড সরবরাহ করে যা :memory: পাথ দিয়ে চালু করা যায়। মেমরিতে চলার সময় সমস্ত B-Tree পেজ সরাসরি র‍্যামে থাকে, ফলে কোনো ডিস্ক I/O হয় না এবং লেখার গতি বহু গুণ বৃদ্ধি পায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In-memory databases are completely ephemeral. When the database connection closes, the entire dataset is immediately discarded. This makes it the gold standard for automated unit test suites, transient data transformation pipelines, and high-speed local caches.',
        bn: 'ইন-মেমরি ডাটাবেস পুরোপুরি অস্থায়ী। যখনই ডাটাবেস সংযোগ বন্ধ করা হয়, তখনই মেমরি থেকে সমস্ত ডাটা মুছে যায়। ফলে এটি সফটওয়্যারের ইউনিট টেস্ট, তাৎক্ষণিক ডাটা প্রসেসিং এবং দ্রুতগতির লোকাল ক্যাশের জন্য বিশ্বমানের সমাধান হিসেবে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-storage-sim',
      text: {
        en: 'Interactive Benchmark: SQLite Header Decoding & Page Allocation',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: SQLite হেডার ডিকোডিং ও পেজ বরাদ্দ সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-storage-simulator.ts',
      code: `// SQLite Storage Engine & Header Decoder Simulator
function simulateSqliteStorage() {
  const PAGE_SIZE = 4096;
  const HEADER_SIZE = 100;
  const MAGIC_STRING = "SQLite format 3\\0";

  console.log("=== SQLITE STORAGE ENGINE & HEADER SIMULATOR ===");

  // 1. Simulating 100-byte Database Header Decoding
  console.log("\\n1. Decoding SQLite Database Header (Page 1, 100 Bytes):");
  console.log(\`   Bytes 0-15  : Magic String = "\${MAGIC_STRING.trim()}" (Valid SQLite 3 File)\`);
  console.log(\`   Bytes 16-17 : Page Size = \${PAGE_SIZE} Bytes\`);
  console.log(\`   Bytes 18-19 : File Format Read/Write Version = 2 (Write-Ahead Logging / WAL)\`);
  console.log(\`   Bytes 24-27 : File Change Counter = 42\`);
  console.log(\`   Bytes 40-43 : Schema Cookie = 1 (1 table / index schema change)\`);

  // 2. Leaf Page Capacity Calculation
  const TUPLE_SIZE_BYTES = 128;
  const LEAF_HEADER_BYTES = 8;
  const USABLE_PAGE_BYTES = PAGE_SIZE - LEAF_HEADER_BYTES;
  const ROWS_PER_PAGE = Math.floor(USABLE_PAGE_BYTES / TUPLE_SIZE_BYTES);

  console.log("\\n2. B-Tree Leaf Page Allocation:");
  console.log(\`   Page Capacity: \${PAGE_SIZE} Bytes | Usable: \${USABLE_PAGE_BYTES} Bytes\`);
  console.log(\`   Tuple Size: \${TUPLE_SIZE_BYTES} Bytes -> Rows Per Leaf Page: \${ROWS_PER_PAGE} rows\`);

  // 3. Storage Mode Speed Benchmark
  console.log("\\n3. Storage Mode Latency Benchmark:");
  console.log("   :memory: (RAM Database)   : 10000 inserts in ~4.5 ms (Zero disk I/O)");
  console.log("   Disk File (WAL Mode)       : 10000 inserts in ~24.0 ms (Buffered fsync)");
  console.log("   Disk File (Rollback Mode)  : 10000 inserts in ~480.0 ms (Full disk fsync per commit)");
}

simulateSqliteStorage();`
    },
    {
      type: 'terminal',
      id: 'storage-output',
      cmd: 'npx tsx sqlite-storage-simulator.ts',
      output: `=== SQLITE STORAGE ENGINE & HEADER SIMULATOR ===

1. Decoding SQLite Database Header (Page 1, 100 Bytes):
   Bytes 0-15  : Magic String = "SQLite format 3" (Valid SQLite 3 File)
   Bytes 16-17 : Page Size = 4096 Bytes
   Bytes 18-19 : File Format Read/Write Version = 2 (Write-Ahead Logging / WAL)
   Bytes 24-27 : File Change Counter = 42
   Bytes 40-43 : Schema Cookie = 1 (1 table / index schema change)

2. B-Tree Leaf Page Allocation:
   Page Capacity: 4096 Bytes | Usable: 4088 Bytes
   Tuple Size: 128 Bytes -> Rows Per Leaf Page: 31 rows

3. Storage Mode Latency Benchmark:
   :memory: (RAM Database)   : 10000 inserts in ~4.5 ms (Zero disk I/O)
   Disk File (WAL Mode)       : 10000 inserts in ~24.0 ms (Buffered fsync)
   Disk File (Rollback Mode)  : 10000 inserts in ~480.0 ms (Full disk fsync per commit)`
    }
  ],
  exercises: [
    {
      id: 'sql-fil-ex-1',
      kind: 'mcq',
      topic: 'sqlite-100-byte-database-header',
      question: {
        en: 'How many bytes does the SQLite database file header occupy at the very start of page 1?',
        bn: 'পেজ 1 এর শুরুতে SQLite ডাটাবেস ফাইল হেডার কত বাইট জায়গা দখল করে?'
      },
      options: [
        {
          en: '100 bytes, containing the 16 byte magic string, page size, version numbers, and schema cookie',
          bn: '100 বাইট, যার মধ্যে 16 বাইট ম্যাজিক স্ট্রিং, পেজ সাইজ, সংস্করণ সংখ্যা এবং স্কিমা কুকি থাকে'
        },
        {
          en: '512 bytes, containing an encryption key',
          bn: '৫১২ বাইট, যার মধ্যে একটি এনক্রিপশন কি থাকে'
        },
        {
          en: '0 bytes, because SQLite does not use headers',
          bn: '০ বাইট, কারণ SQLite কোনো হেডার ব্যবহার করে না'
        },
        {
          en: '4096 bytes, consuming the entire first page',
          bn: '৪০৯৬ বাইট, যা পুরো প্রথম পেজটিই দখল করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The header occupies exactly 100 bytes at offset 0 of page 1.',
        bn: 'হেডারটি পেজ ১-এর ০ অফসেটে ঠিক ১০০ বাইট জায়গা নেয়।'
      },
      explanation: {
        en: 'The first 100 bytes of an SQLite database file contain the file format specification, including magic string, page size, and change counter.',
        bn: 'SQLite ফাইলের প্রথম ১০০ বাইটে ম্যাজিক স্ট্রিং, পেজ সাইজ ও পরিবর্তন কাউন্টারসহ সমস্ত প্রয়োজনীয় মেটাডাটা থাকে।'
      }
    },
    {
      id: 'sql-fil-ex-2',
      kind: 'mcq',
      topic: 'default-page-size-allocation',
      question: {
        en: 'What is the default page size for newly created SQLite databases since version 3.12?',
        bn: 'ভার্সন 3.12 থেকে নতুন তৈরি হওয়া SQLite ডাটাবেসের ডিফল্ট পেজ সাইজ কত?'
      },
      options: [
        {
          en: '4096 bytes, aligning with standard modern OS filesystem cluster and SSD block sizes',
          bn: '4096 বাইট, যা আধুনিক অপারেটিং সিস্টেমের ক্লাস্টার ও এসএসডি ব্লক সাইজের সাথে মানানসই'
        },
        {
          en: '1024 bytes, for compatibility with floppy disk drives',
          bn: '১০২৪ বাইট, পুরোনো ফ্লপি ডিস্কের সাথে মিল রাখার জন্য'
        },
        {
          en: '65536 bytes, the absolute maximum page size',
          bn: '৬৫৫৩৬ বাইট, যা সর্বোচ্চ পেজ সাইজ'
        },
        {
          en: '128 bytes, for tiny IoT microcontrollers',
          bn: '১২৮ বাইট, ছোট আইওটি ডিভাইসের জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modern SQLite defaults to 4096 bytes (4KB).',
        bn: 'আধুনিক SQLite ডিফল্টভাবে ৪০৯৬ বাইট (৪KB) ব্যবহার করে।'
      },
      explanation: {
        en: '4096 bytes matches modern operating system page allocation units, minimizing write amplification.',
        bn: '৪০৯৬ বাইট আধুনিক অপারেটিং সিস্টেমের মেমরি পেজের সাথে পুরোপুরি মিলে যায়, ফলে ডিস্কের অপচয় কমে।'
      }
    },
    {
      id: 'sql-fil-ex-3',
      kind: 'mcq',
      topic: 'in-memory-database-lifecycle',
      question: {
        en: 'What happens to data stored in an SQLite :memory: database when the application connection closes?',
        bn: 'অ্যাপ্লিকেশন সংযোগ বন্ধ হয়ে গেলে একটি SQLite :memory: ডাটাবেসে সংরক্ষিত তথ্যের কী ঘটে?'
      },
      options: [
        {
          en: 'All data is immediately discarded from RAM and completely erased',
          bn: 'মেমরি থেকে সমস্ত ডাটা তাৎক্ষণিকভাবে মুছে যায় এবং বিলুপ্ত হয়'
        },
        {
          en: 'The data is automatically saved to desktop as a CSV file',
          bn: 'ডাটা স্বয়ংক্রিয়ভাবে ডেক্সটপে একটি সিএসভি ফাইল হিসেবে সংরক্ষিত হয়'
        },
        {
          en: 'The data is uploaded to a remote cloud server',
          bn: 'ডাটা একটি রিমোট ক্লাউড সার্ভারে আপলোড হয়ে যায়'
        },
        {
          en: 'The operating system freezes until the database is reopened',
          bn: 'ডাটাবেস পুনরায় না খোলা পর্যন্ত অপারেটিং সিস্টেম স্থগিত থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In-memory databases exist purely in volatile process RAM.',
        bn: 'ইন-মেমরি ডাটাবেস কেবল অস্থায়ী র‍্যামে অবস্থান করে।'
      },
      explanation: {
        en: ':memory: databases are ephemeral. Because they never touch disk storage, all state vanishes when the connection closes.',
        bn: ':memory: ডাটাবেস সম্পূর্ণ অস্থায়ী। ডিস্কে কোনো ফাইল না থাকায় সংযোগ বন্ধের সাথে সাথে সমস্ত তথ্য মুছে যায়।'
      }
    },
    {
      id: 'sql-fil-ex-4',
      kind: 'mcq',
      topic: 'sqlite-master-schema-table',
      question: {
        en: 'Where does SQLite internally store all SQL table definitions, index definitions, and view schemas?',
        bn: 'SQLite তার সমস্ত টেবিল, ইনডেক্স এবং ভিউয়ের স্কিমা কোথায় অভ্যন্তরীণভাবে সংরক্ষণ করে?'
      },
      options: [
        {
          en: 'In the sqlite_schema system table located starting on page 1 of the database file',
          bn: 'ডাটাবেস ফাইলের পেজ ১-এ অবস্থিত sqlite_schema নামক সিস্টেম টেবিলে'
        },
        {
          en: 'In a separate XML configuration file in the user home directory',
          bn: 'ব্যবহারকারীর হোম ডিরেক্টরিতে একটি আলাদা এক্সএমএল ফাইলে'
        },
        {
          en: 'Inside the operating system Windows Registry or Linux /etc folder',
          bn: 'অপারেটিং সিস্টেমের রেজিস্ট্রি বা /etc ফোল্ডারের ভেতরে'
        },
        {
          en: 'SQLite does not store schemas anywhere',
          bn: 'SQLite কোথাও স্কিমা সংরক্ষণ করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The master schema table is named sqlite_schema (historically sqlite_master).',
        bn: 'মাস্টার স্কিমা টেবিলটির নাম sqlite_schema।'
      },
      explanation: {
        en: 'sqlite_schema resides on page 1. It records every CREATE TABLE, CREATE INDEX, and CREATE TRIGGER statement executed in the database.',
        bn: 'sqlite_schema পেজ ১-এ থাকে। এটি ডাটাবেসে চলা প্রতিটি CREATE TABLE, INDEX এবং TRIGGER স্টেটমেন্ট সংরক্ষণ করে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite Architecture & Storage Engine Quiz',
      bn: 'SQLite আর্কিটেকচার ও স্টোরেজ ইঞ্জিন কুইজ'
    },
    questions: [
      {
        id: 'sql-fil-qz-1',
        kind: 'mcq',
        topic: 'sqlite-cross-platform-portability',
        question: {
          en: 'Why is an SQLite database file considered 100% cross-platform portable across different operating systems and CPU architectures?',
          bn: 'কেন একটি SQLite ডাটাবেস ফাইল বিভিন্ন অপারেটিং সিস্টেম এবং সিপিইউ আর্কিটেকচারে শতভাগ ক্রস-প্ল্যাটফর্ম পোর্টেবল?'
        },
        options: [
          {
            en: 'The SQLite file format defines a strict big-endian binary specification that reads identically on 32-bit, 64-bit, ARM, and x86 hardware',
            bn: 'SQLite ফাইল ফরম্যাট একটি নির্দিষ্ট বিগ-এন্ডিয়ান বাইনারি স্পেসিফিকেশন মেনে চলে যা 32-বিট, 64-বিট, ARM এবং x86 এ অবিকল একইভাবে কাজ করে'
          },
          {
            en: 'Because SQLite converts all database tables into plaintext HTML files',
            bn: 'কারণ SQLite সমস্ত টেবিলকে প্লেইনটেক্সট এইচটিএমএল ফাইলে রূপান্তর করে'
          },
          {
            en: 'Because SQLite requires Java Virtual Machine to run on all platforms',
            bn: 'কারণ সব প্ল্যাটফর্মে চলার জন্য SQLite-এর জাভা ভার্চুয়াল মেশিন প্রয়োজন হয়'
          },
          {
            en: 'It is only portable between identical laptops made by the same company',
            bn: 'এটি কেবল একই কোম্পানির তৈরি অভিন্ন ল্যাপটপের মধ্যেই নেওয়া যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'SQLite files use a strictly standardized binary endianness and page layout.',
          bn: 'SQLite ফাইল একটি সুনির্দিষ্ট মানসম্মত বাইনারি লেআউট ব্যবহার করে।'
        },
        explanation: {
          en: 'An SQLite file created on a 64-bit Mac can be copied directly to a 32-bit Raspberry Pi or Windows PC and read without any conversion.',
          bn: '৬৪-বিটের ম্যাক কম্পিউটারে তৈরি SQLite ফাইল কোনো রূপান্তর ছাড়াই সরাসরি ৩২-বিটের রাস্পবেরি পাই বা উইন্ডোজে হুবহু চালানো যায়।'
        }
      },
      {
        id: 'sql-fil-qz-2',
        kind: 'mcq',
        topic: 'sqlite-vdbe-engine-role',
        question: {
          en: 'What is the role of the Virtual Database Engine (VDBE) inside the SQLite core processing pipeline?',
          bn: 'SQLite-এর মূল প্রসেসিং পাইপলাইনে ভার্চুয়াল ডাটাবেস ইঞ্জিন (VDBE)-এর কাজ কী?'
        },
        options: [
          {
            en: 'It executes compiled bytecode instructions produced by the SQL compiler, orchestrating B-Tree reads, writes, and comparisons',
            bn: 'এটি এসকিউএল কম্পাইলার দ্বারা তৈরি বাইটকোড নির্দেশাবলী সম্পাদন করে B-Tree রিড, রাইট ও তুলনা পরিচালনা করে'
          },
          {
            en: 'It connects to external PostgreSQL servers over the internet',
            bn: 'এটি ইন্টারনেটের মাধ্যমে বাইরের PostgreSQL সার্ভারের সাথে সংযোগ তৈরি করে'
          },
          {
            en: 'It renders 3D graphics in the user browser window',
            bn: 'এটি ব্রাউজার উইন্ডোতে থ্রিডি গ্রাফিক্স রেন্ডার করে'
          },
          {
            en: 'It converts SQL statements into Python scripts',
            bn: 'এটি এসকিউএল স্টেটমেন্টগুলোকে পাইথন স্ক্রিপ্টে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The VDBE is a register-based virtual machine executing internal opcode instructions.',
          bn: 'VDBE হলো একটি রেজিস্টার-ভিত্তিক ভার্চুয়াল মেশিন যা অভ্যন্তরীণ অপকোড চালায়।'
        },
        explanation: {
          en: 'SQLite compiles SQL into bytecode opcodes. The VDBE virtual machine iterates through these opcodes to fetch and manipulate records.',
          bn: 'SQLite এসকিউএল কোডকে অপকোডে রূপান্তর করে। VDBE ভার্চুয়াল মেশিন সেই নির্দেশগুলো চালিয়ে ডাটা উদ্ধার ও পরিবর্তন করে।'
        }
      },
      {
        id: 'sql-fil-qz-3',
        kind: 'mcq',
        topic: 'sqlite-leaf-page-cell-pointer-mechanics',
        question: {
          en: 'How does an SQLite B-Tree Leaf Page organize its internal storage space between cell pointers and record payloads?',
          bn: 'একটি SQLite B-Tree লিফ পেজ সেল পয়েন্টার এবং রেকর্ড তথ্যের মধ্যে কীভাবে মেমরি বিন্যাস করে?'
        },
        options: [
          {
            en: 'Cell pointers grow downward from the top of the page, while row records grow upward from the bottom, meeting in unallocated free space in the center',
            bn: 'সেল পয়েন্টারগুলো পেজের ওপর থেকে নিচের দিকে বাড়ে এবং রো রেকর্ডগুলো নিচ থেকে ওপরের দিকে বাড়ে, মাঝখানের খালি অংশে এসে মিলিত হয়'
          },
          {
            en: 'All data is written in reverse alphabetical order on tape drives',
            bn: 'সমস্ত তথ্য টেপ ড্রাইভে বিপরীত বর্ণানুক্রমিক ক্রমে লেখা হয়'
          },
          {
            en: 'Every row record must be exactly 50% of the entire page',
            bn: 'প্রতিটি রো রেকর্ডকে পুরো পেজের ঠিক ৫০% হতে হয়'
          },
          {
            en: 'Cell pointers are stored on a separate USB flash drive',
            bn: 'সেল পয়েন্টারগুলো আলাদা একটি ইউএসবি ড্রাইভে সংরক্ষণ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pointers grow forward from the top; payloads grow backward from the bottom.',
          bn: 'পয়েন্টার ওপর থেকে নিচে বাড়ে; পেলোড নিচ থেকে ওপরে বাড়ে।'
        },
        explanation: {
          en: 'This two-way growth maximizes usable space and accommodates variable-length rows without wasting fragmentation bytes.',
          bn: 'এই দুইমুখী বৃদ্ধির ফলে পরিবর্তনশীল দৈর্ঘ্যের রো সংরক্ষণ করা যায় এবং পেজের মেমরি অপচয় সর্বনিম্ন হয়।'
        }
      },
      {
        id: 'sql-fil-qz-4',
        kind: 'mcq',
        topic: 'sqlite-cli-dot-commands',
        question: {
          en: 'In the official SQLite Command-Line Interface (CLI), how do dot-commands (.schema, .tables, .open) differ from standard SQL statements?',
          bn: 'অফিসিয়াল SQLite কমান্ড-লাইন ইন্টারফেসে ডট-কমান্ড (.schema, .tables, .open) কীভাবে সাধারণ SQL স্টেটমেন্ট থেকে আলাদা?'
        },
        options: [
          {
            en: 'Dot-commands are shell-level administrative instructions interpreted directly by the CLI client, requiring no ending semicolon',
            bn: 'ডট-কমান্ডগুলো সিএলআই ক্লায়েন্টের নিজস্ব প্রশাসনিক নির্দেশ যা সরাসরি ক্লায়েন্টে চলে এবং কোনো সেমিকোলন লাগে না'
          },
          {
            en: 'Dot-commands are only supported on supercomputers',
            bn: 'ডট-কমান্ড কেবল সুপারকম্পিউটারেই কাজ করে'
          },
          {
            en: 'Dot-commands are compiled into C++ executable binaries',
            bn: 'ডট-কমান্ডগুলো সি++ বাইনারিতে রূপান্তরিত হয়'
          },
          {
            en: 'Standard SQL statements must begin with a dot',
            bn: 'সাধারণ এসকিউএল স্টেটমেন্টের শুরুতে অবশ্যই ডট থাকতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Commands beginning with a dot are intercepted by the SQLite CLI tool itself rather than sent to the SQL parser.',
          bn: 'ডট দিয়ে শুরু হওয়া কমান্ডগুলো এসকিউএল পার্সারে না গিয়ে সিএলআই টুল নিজেই সরাসরি সম্পাদন করে।'
        },
        explanation: {
          en: 'Dot-commands configure the CLI display mode, export schemas, and open files. Standard SQL statements are passed to the SQLite compiler and must end with a semicolon.',
          bn: 'ডট-কমান্ড সিএলআই পরিবেশ নিয়ন্ত্রণ, স্কিমা দেখা ও ফাইল খুলতে ব্যবহৃত হয়। সাধারণ এসকিউএল কোড ইঞ্জিনে যায় এবং সেমিকোলন দিয়ে শেষ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'types-and-the-column',
    title: {
      en: 'Dynamic Type Affinity & Strict Tables: Storage Classes & Coercion',
      bn: 'ডাইনামিক টাইপ অ্যাফিনিটি ও স্ট্রিক্ট টেবিল: স্টোরেজ ক্লাস ও রূপান্তর'
    }
  }
};
