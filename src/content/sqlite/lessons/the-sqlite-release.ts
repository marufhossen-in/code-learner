import type { Lesson } from '../../../lib/types';

export const TheSqliteReleaseLesson: Lesson = {
  slug: 'the-sqlite-release',
  tech: 'sqlite',
  title: {
    en: 'The SQLite Ecosystem: Embedded Architecture, Libsql, Litestream & Production',
    bn: 'SQLite ইকোসিস্টেম: এমবেডেড আর্কিটেকচার, Libsql, Litestream ও প্রোডাকশন ডিপ্লয়মেন্ট'
  },
  summary: {
    en: 'Master modern production SQLite deployments and the surrounding ecosystem. Explore the single C file amalgamation release, memory-mapped I/O with mmap, online backup APIs, replication with Litestream, and cloud edge forks like Libsql/Turso.',
    bn: 'আধুনিক প্রোডাকশন SQLite ডিপ্লয়মেন্ট ও এর সামগ্রিক ইকোসিস্টেম আয়ত্ত করুন। একক সি ফাইল অ্যামালগামেশন রিলিজ, mmap মেমরি-ম্যাপড আই/ও, অনলাইন ব্যাকআপ API, Litestream দিয়ে রিয়েল-টাইম রেপ্লিকেশন এবং Libsql/Turso এর মতো ক্লাউড এজ ফ্রেমওয়ার্কের সম্পূর্ণ ব্যবহারবিধি।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'amalgamation-and-distribution',
      text: {
        en: 'The Single-File Amalgamation and Extreme Reliability Testing',
        bn: 'একক-ফাইলের অ্যামালগামেশন ও নিখুঁত নির্ভরযোগ্যতা পরীক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When deploying SQLite (the embedded database engine) to production environments, developers benefit from an extraordinary software architecture refined over more than two decades. From the single-file C amalgamation to modern cloud replication tools like Litestream, the ecosystem offers incredible reliability and performance.',
        bn: 'যখন প্রোডাকশন পরিবেশে SQLite (এমবেডেড ডাটাবেস ইঞ্জিন) ডিপ্লয় করা হয়, ডেভেলপাররা দুই দশকেরও বেশি সময় ধরে পরিমার্জিত এক অসাধারণ সফটওয়্যার আর্কিটেকচারের সুবিধা পান। একক সি ফাইলের অ্যামালগামেশন থেকে শুরু করে Litestream-এর মতো ক্লাউড রেপ্লিকেশন টুল পর্যন্ত, এই ইকোসিস্টেম নির্ভরযোগ্যতা এবং গতির অপূর্ব সমন্বয় উপহার দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rather than distributing hundreds of source files, the official SQLite release concatenates everything into a single sqlite3.c file containing 240000 lines of code. This design gives compilers global inlining visibility and ensures 100% MC/DC branch test coverage matching avionics safety standards.',
        bn: 'শত শত সোর্স ফাইল বিতরণের বদলে অফিসিয়াল SQLite রিলিজ সবকিছুকে ২৪০০০০ লাইনের একটি একক sqlite3.c ফাইলে একত্রিত করে। এই স্থাপত্য কম্পাইলারকে সামগ্রিক ইনলাইনিং অপ্টিমাইজেশনের সুযোগ দেয় এবং এভিয়েশন নিরাপত্তার মানদণ্ড অনুসারে ১০০% MC/DC ব্রাঞ্চ টেস্ট কভারেজ নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-ecosystem-diagram',
      caption: {
        en: 'Figure 1: SQLite single-file amalgamation, memory-mapped I/O architecture, and Litestream continuous cloud replication.',
        bn: 'চিত্র ১: SQLite একক-ফাইল অ্যামালগামেশন, মেমরি-ম্যাপড আই/ও আর্কিটেকচার এবং Litestream রিয়েল-টাইম ক্লাউড রেপ্লিকেশন।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="ecoHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="amalGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="replGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#ecoHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🚀</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">THE MODERN PRODUCTION SQLITE ECOSYSTEM</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Amalgamation architecture, memory-mapped I/O, VACUUM INTO online backups &amp; Litestream replication</text>

  <!-- Left: The Amalgamation & MMAP -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#amalGrad)" stroke="#6366f1" stroke-width="1.5"/>
  <text x="44" y="118" fill="#a5b4fc" font-size="13" font-weight="bold">AMALGAMATION &amp; EMBEDDED ENGINE</text>

  <rect x="44" y="136" width="400" height="135" rx="6" fill="#030712" stroke="#312e81"/>
  <text x="56" y="158" fill="#818cf8" font-size="11" font-weight="bold">Single-File sqlite3.c (240,000 LOC):</text>
  <text x="56" y="178" fill="#cbd5e1" font-size="10">• Automated script combines ~140 C files into 1 file.</text>
  <text x="56" y="196" fill="#cbd5e1" font-size="10">• Linker &amp; compiler inline static functions across modules.</text>
  <text x="56" y="214" fill="#34d399" font-size="10">• 100% MC/DC branch test coverage (Avionics safety standard).</text>
  <text x="56" y="232" fill="#cbd5e1" font-size="10">• Zero runtime external library dependencies.</text>
  <text x="56" y="252" fill="#38bdf8" font-size="10" font-weight="bold">• Embedded into iOS, Android, macOS, Windows &amp; Node.js</text>

  <rect x="44" y="285" width="400" height="155" rx="6" fill="#030712" stroke="#4f46e5"/>
  <text x="56" y="310" fill="#38bdf8" font-size="12" font-weight="bold">Memory-Mapped I/O (PRAGMA mmap_size):</text>
  <text x="56" y="332" fill="#cbd5e1" font-size="10">• Maps DB pages directly into virtual address space.</text>
  <text x="56" y="350" fill="#cbd5e1" font-size="10">• Bypasses POSIX read() system calls &amp; kernel copies.</text>
  <text x="56" y="368" fill="#34d399" font-size="10">• PRAGMA mmap_size = 268435456; (256 MB memory map).</text>
  <text x="56" y="386" fill="#cbd5e1" font-size="10">• Reads stream at memory speeds straight from page cache.</text>
  <text x="56" y="412" fill="#a7f3d0" font-size="10" font-weight="bold">• 2x-3x higher SELECT throughput on NVMe SSD drives</text>

  <!-- Right: Litestream & Online Backups -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#replGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">ONLINE BACKUPS &amp; CLOUD REPLICATION</text>

  <rect x="516" y="136" width="400" height="135" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="158" fill="#34d399" font-size="11" font-weight="bold">Safe Online Backups (VACUUM INTO):</text>
  <text x="528" y="178" fill="#cbd5e1" font-size="10">• NEVER use OS 'cp' while writers are actively modifying!</text>
  <text x="528" y="196" fill="#a78bfa" font-size="10">• VACUUM INTO 'backup.db';</text>
  <text x="528" y="214" fill="#cbd5e1" font-size="10">• Atomic snapshot produced without blocking concurrent readers.</text>
  <text x="528" y="232" fill="#cbd5e1" font-size="10">• Compacts, defragments, and verifies B-Tree structure.</text>
  <text x="528" y="252" fill="#34d399" font-size="10" font-weight="bold">• Safe for live production continuous archiving</text>

  <rect x="516" y="285" width="400" height="155" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="310" fill="#6ee7b7" font-size="12" font-weight="bold">Litestream Continuous Replication:</text>
  <text x="528" y="332" fill="#cbd5e1" font-size="10">• Background daemon monitors SQLite's .db-wal file.</text>
  <text x="528" y="350" fill="#cbd5e1" font-size="10">• Streams incremental WAL frame changes to S3 storage.</text>
  <text x="528" y="368" fill="#cbd5e1" font-size="10">• Replication frequency: 1 second intervals.</text>
  <text x="528" y="386" fill="#34d399" font-size="10">• Enables Point-In-Time Recovery (PITR) to any second.</text>
  <text x="528" y="412" fill="#a7f3d0" font-size="10" font-weight="bold">• Provides zero-RPO disaster recovery for embedded databases</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'online-backups-vacuum-into',
      text: {
        en: 'Safe Backups with VACUUM INTO vs Operating System File Copies',
        bn: 'VACUUM INTO দিয়ে নিরাপদ ব্যাকআপ বনাম ওএস ফাইল কপি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Copying an active SQLite database using operating system tools like cp or rsync while write transactions are occurring leads to torn pages and corrupted backup files.',
        bn: 'রাইট ট্রানজ্যাকশন চলাকালে cp বা rsync দিয়ে সক্রিয় SQLite ডাটাবেস কপি করলে অসঙ্গত ও ক্ষতিগ্রস্ত ব্যাকআপ ফাইল তৈরি হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To solve this, SQLite provides VACUUM INTO target_file. This command creates a transactionally consistent, fully defragmented clone of the database in the background without locking readers or requiring application downtime.',
        bn: 'এই সমস্যা সমাধানে SQLite-এ VACUUM INTO target_file রয়েছে। এই কমান্ডটি রিডারদের না থামিয়েই ব্যাকগ্রাউন্ডে সম্পূর্ণ পরিষ্কার এবং অবিকৃত ক্লোন তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'litestream-and-edge-cloud',
      text: {
        en: 'Continuous Replication with Litestream and Edge SQLite (Libsql)',
        bn: 'Litestream দিয়ে রিয়েল-টাইম রেপ্লিকেশন ও এজ SQLite (Libsql)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tools like Litestream stream incremental WAL frames to object storage every 1 second. This gives single-node SQLite servers the disaster resilience and point-in-time recovery capabilities of multi-node enterprise database clusters.',
        bn: 'Litestream-এর মতো আধুনিক টুল প্রতি ১ সেকেন্ডে WAL ফ্রেম অবজেক্ট স্টোরেজে পাঠিয়ে দেয়। এর মাধ্যমে একক মেশিনের SQLite ডাটাবেসও মাল্টি-নোড ক্লাউড ক্লাস্টারের মতো দুর্যোগ মোকাবিলার শক্তি অর্জন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern edge forks such as Libsql (powering Turso) extend SQLite with a network protocol, enabling developers to run embedded databases replicated across global data centers with microsecond local read performance.',
        bn: 'Libsql (যা Turso-কে পরিচালনা করে) এর মতো এজ ফ্রেমওয়ার্ক SQLite-এ নেটওয়ার্ক প্রোটোকল যুক্ত করেছে, যার মাধ্যমে বিশ্বজুড়ে বিভিন্ন ডাটা সেন্টারে রেপ্লিকেট হওয়া ডাটাবেস থেকে চোখের পলকে রিড করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-ecosystem-sim',
      text: {
        en: 'Interactive Benchmark: Simulating Amalgamation, VACUUM INTO & Litestream',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: অ্যামালগামেশন, VACUUM INTO ও Litestream সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-ecosystem-sim.ts',
      code: `// SQLite Production Architecture & Ecosystem Simulator
// Amalgamation bundles 240000 lines of C code -> gives 240000
// Test suite achieves 100% MC/DC branch coverage -> returns 100
// Litestream replicates WAL frames every 1 second -> returns 1
function simulateSqliteEcosystem() {
  console.log("=== SQLITE ECOSYSTEM & PRODUCTION SIMULATOR ===");

  const AMALGAMATION_LOC = 240000;
  const BRANCH_COVERAGE_PCT = 100;
  console.log("\\n1. Single C File Amalgamation (sqlite3.c):");
  console.log(\`   Consolidates ~140 source files into 1 monolithic file with \${AMALGAMATION_LOC} lines of C code.\`);
  console.log(\`   Test suite achieves \${BRANCH_COVERAGE_PCT}% MC/DC branch coverage under flight-critical avionics standards!\`);

  console.log("\\n2. Online Non-Blocking Backups (VACUUM INTO):");
  console.log("   Command: VACUUM INTO 'production-backup.db';");
  console.log("   -> Creates atomic snapshot while concurrent readers and writers continue safely.");
  console.log("   -> Result: Safe, defragmented backup copy created without application downtime.");

  console.log("\\n3. Litestream Real-Time S3 Replication:");
  const walFramesReplicated = 42;
  console.log(\`   Monitors .db-wal file -> Streams \${walFramesReplicated} WAL frames to S3 bucket every 1 second.\`);
  console.log("   -> Point-in-time recovery (PITR) enabled with near-zero RPO (Recovery Point Objective).");
}

simulateSqliteEcosystem();`
    },
    {
      type: 'terminal',
      id: 'ecosystem-sim-output',
      cmd: 'npx tsx sqlite-ecosystem-sim.ts',
      output: `=== SQLITE ECOSYSTEM & PRODUCTION SIMULATOR ===

1. Single C File Amalgamation (sqlite3.c):
   Consolidates ~140 source files into 1 monolithic file with 240000 lines of C code.
   Test suite achieves 100% MC/DC branch coverage under flight-critical avionics standards!

2. Online Non-Blocking Backups (VACUUM INTO):
   Command: VACUUM INTO 'production-backup.db';
   -> Creates atomic snapshot while concurrent readers and writers continue safely.
   -> Result: Safe, defragmented backup copy created without application downtime.

3. Litestream Real-Time S3 Replication:
   Monitors .db-wal file -> Streams 42 WAL frames to S3 bucket every 1 second.
   -> Point-in-time recovery (PITR) enabled with near-zero RPO (Recovery Point Objective).`
    }
  ],
  exercises: [
    {
      id: 'sql-eco-ex-1',
      kind: 'mcq',
      topic: 'sqlite-amalgamation-single-file',
      question: {
        en: 'What is the SQLite amalgamation (sqlite3.c) and why is it distributed as a single massive C source file?',
        bn: 'SQLite অ্যামালগামেশন (sqlite3.c) কী এবং কেন এটি একটিমাত্র বিশাল সি সোর্স ফাইল হিসেবে বিতরণ করা হয়?'
      },
      options: [
        {
          en: 'It bundles over 100 source files into a single file with 240000 lines of code, enabling cross-function compiler optimizations and effortless zero-dependency builds',
          bn: 'এটি ১০০টির বেশি সোর্স ফাইলকে ২৪০০০০ লাইনের একটি একক ফাইলে একত্রিত করে, যা কম্পাইলারকে দারুণ অপ্টিমাইজেশন করার সুযোগ দেয় এবং জিরো-ডিপেন্ডেন্সিতে বিল্ড করা যায়'
        },
        {
          en: 'Because C compilers cannot link more than 1 file together',
          bn: 'কারণ সি কম্পাইলার ১টির বেশি ফাইল একসাথে লিঙ্ক করতে পারে না'
        },
        {
          en: 'It is a proprietary commercial secret hidden from developers',
          bn: 'এটি ডেভেলপারদের থেকে লুকানো একটি বাণিজ্যিক গোপন বিষয়'
        },
        {
          en: 'To make the file impossible to open on standard text editors',
          bn: 'যাতে কোনো সাধারণ এডিটরে ফাইলটি ওপেন করা না যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The amalgamation merges all C source modules into one unit for compiler optimization.',
        bn: 'অ্যামালগামেশন সমস্ত সি ফাইলকে একটি ফাইলে রূপান্তর করে যাতে কম্পাইলার গতি বাড়াতে পারে।'
      },
      explanation: {
        en: 'Consolidating the engine into sqlite3.c allows the compiler to inline code across compilation units, yielding up to 10% faster execution and zero-friction integration.',
        bn: 'একটি ফাইলে রূপান্তরের ফলে কম্পাইলার ফাংশনগুলোকে সহজে ইনলাইন করতে পারে, যার ফলে কোড প্রায় ১০% দ্রুত চলে এবং যেকোনো প্রজেক্টে সহজে যুক্ত করা যায়।'
      }
    },
    {
      id: 'sql-eco-ex-2',
      kind: 'mcq',
      topic: 'safe-online-backups-vacuum-into',
      question: {
        en: 'Why is using VACUUM INTO backup.db; vastly superior to executing a standard filesystem file copy (cp app.db backup.db)?',
        bn: 'সাধারণ ফাইলসিস্টেম কপি কমান্ডের (cp app.db backup.db) চেয়ে VACUUM INTO backup.db; ব্যবহার করা কেন অনেক বেশি নিরাপদ?'
      },
      options: [
        {
          en: 'VACUUM INTO creates an atomic snapshot that safely handles concurrent writes and defragments pages, preventing corrupt torn-page backups',
          bn: 'VACUUM INTO একটি সুসংগত স্ন্যাপশট তৈরি করে যা লেখার কাজ চলার সময়ও পেজ নষ্ট হওয়া থেকে রক্ষা করে এবং সম্পূর্ণ পরিষ্কার ব্যাকআপ দেয়'
        },
        {
          en: 'It deletes the production database to free up drive space',
          bn: 'এটি ড্রাইভের জায়গা খালি করতে মূল ডাটাবেসটি সাথে সাথে মুছে ফেলে'
        },
        {
          en: 'It converts SQL tables into Excel spreadsheets',
          bn: 'এটি এসকিউএল টেবিলগুলোকে এক্সেল ফাইলে বদলে দেয়'
        },
        {
          en: 'Because operating systems refuse to copy files larger than 10 megabytes',
          bn: 'কারণ অপারেটিং সিস্টেম ১০ মেগাবাইটের বেশি ফাইল কপি করতে দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'VACUUM INTO generates a clean, defragmented atomic snapshot.',
        bn: 'VACUUM INTO কোনো ডাটা নষ্ট না করে পরিচ্ছন্ন ও সুসংগত স্ন্যাপশট তৈরি করে।'
      },
      explanation: {
        en: 'Standard OS file copying is unaware of SQLite internal write transactions, resulting in torn pages. VACUUM INTO safely clones the live database atomically.',
        bn: 'সাধারণ ফাইল কপি অভ্যন্তরীণ ট্রানজ্যাকশন বোঝে না, তাই ফাইল নষ্ট হতে পারে। VACUUM INTO নিরাপদে চলমান ডাটাবেসের অবিকৃত ক্লোন তৈরি করে।'
      }
    },
    {
      id: 'sql-eco-ex-3',
      kind: 'mcq',
      topic: 'litestream-wal-continuous-replication',
      question: {
        en: 'How does Litestream enable disaster recovery and point-in-time recovery for single-node SQLite servers?',
        bn: 'একক মেশিনের SQLite সার্ভারের জন্য Litestream কীভাবে দুর্যোগের পর ডাটা পুনরুদ্ধার এবং পয়েন্ট-ইন-টাইম রিকভারি নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It runs as a background process that continuously streams new WAL frames to cloud object storage (like S3) every 1 second',
          bn: 'এটি ব্যাকগ্রাউন্ড প্রসেস হিসেবে চলে এবং প্রতি ১ সেকেন্ড পর পর নতুন WAL ফ্রেমগুলোকে ক্লাউড অবজেক্ট স্টোরেজে (যেমন S3) পাঠিয়ে দেয়'
        },
        {
          en: 'It prints paper copies of every database record',
          bn: 'এটি প্রতিটি ডাটাবেস রেকর্ডের কাগজের কপি প্রিন্ট করে'
        },
        {
          en: 'It requires 5 separate dedicated hardware server racks',
          bn: 'এর জন্য ৫টি আলাদা ডেডিকেটেড সার্ভার র্যাক প্রয়োজন হয়'
        },
        {
          en: 'It reboots the application server whenever an error occurs',
          bn: 'কোনো এরর দেখা দিলে এটি অ্যাপ সার্ভার সাথে সাথে রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Litestream continuously synchronizes WAL frames to remote object storage.',
        bn: 'Litestream অনবরত WAL ফ্রেমগুলোকে দূরবর্তী অবজেক্ট স্টোরেজে সিঙ্ক করে।'
      },
      explanation: {
        en: 'Litestream streams incremental changes from the WAL log directly to cloud buckets with near-zero overhead, enabling microsecond restore capabilities.',
        bn: 'Litestream কোনো বাড়তি চাপ ছাড়াই WAL লগ থেকে নতুন পরিবর্তনগুলো সরাসরি ক্লাউড বাকUpSync করে, ফলে যেকোনো মুহূর্তের ডাটা উদ্ধার করা যায়।'
      }
    },
    {
      id: 'sql-eco-ex-4',
      kind: 'mcq',
      topic: 'memory-mapped-io-pragma-mmap',
      question: {
        en: 'What performance benefit does configuring PRAGMA mmap_size provide for read-intensive SQLite workloads?',
        bn: 'অতিরিক্ত রিড হওয়া SQLite ডাটাবেসে PRAGMA mmap_size কনফিগার করলে কোন পারফরম্যান্স সুবিধা পাওয়া যায়?'
      },
      options: [
        {
          en: 'It maps database file pages directly into virtual memory, bypassing OS read() system calls and double-buffering kernel copies',
          bn: 'এটি ডাটাবেস পেজগুলোকে সরাসরি ভার্চুয়াল মেমরিতে ম্যাপ করে, যা ওএস read() সিস্টেম কল এবং বাড়তি কার্নেল বাফার কপি করার ঝামেলা দূর করে'
        },
        {
          en: 'It permanently erases disk files to save electricity',
          bn: 'এটি বিদ্যুৎ সাশ্রয় করতে ডিস্কের ফাইলগুলো স্থায়ীভাবে মুছে দেয়'
        },
        {
          en: 'It limits table size to 64 kilobytes',
          bn: 'এটি টেবিলের আকার সর্বোচ্চ ৬৪ কিলোবাইটে সীমাবদ্ধ রাখে'
        },
        {
          en: 'It stops all background virus scans on the computer',
          bn: 'এটি কম্পিউটারের সমস্ত ব্যাকগ্রাউন্ড অ্যান্টিভাইরাস স্ক্যান বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Memory-mapped I/O (mmap) allows zero-copy virtual memory access.',
        bn: 'মেমরি-ম্যাপড আই/ও (mmap) বাড়তি কপি ছাড়াই সরাসরি মেমরি থেকে পড়ার সুযোগ দেয়।'
      },
      explanation: {
        en: 'PRAGMA mmap_size instructs the OS to map file pages into the process address space, yielding 2x-3x faster SELECT query throughput on modern NVMe SSDs.',
        bn: 'PRAGMA mmap_size ওএস-কে সরাসরি মেমরিতে ফাইল রাখার নির্দেশ দেয়, যা আধুনিক এসএসডিতে রিড কোয়েরির গতি ২ থেকে ৩ গুণ পর্যন্ত বাড়িয়ে দেয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'The SQLite Production Architecture & Ecosystem Quiz',
      bn: 'SQLite প্রোডাকশন আর্কিটেকচার ও ইকোসিস্টেম কুইজ'
    },
    questions: [
      {
        id: 'sql-eco-qz-1',
        kind: 'mcq',
        topic: 'sqlite-test-suite-mcdc-standard',
        question: {
          en: 'To what rigorous software testing standard is the SQLite core engine subjected before each official public release?',
          bn: 'প্রতিটি অফিসিয়াল পাবলিক রিলিজের আগে SQLite কোর ইঞ্জিনকে কোন কঠোর সফটওয়্যার টেস্টিং মানদণ্ড দিয়ে যাচাই করা হয়?'
        },
        options: [
          {
            en: '100% Modified Condition/Decision Coverage (MC/DC) branch testing, the same rigorous standard required for commercial avionics flight control software',
            bn: '১০০% Modified Condition/Decision Coverage (MC/DC) ব্রাঞ্চ টেস্টিং, যা উড়োজাহাজের ফ্লাইট কন্ট্রোল সফটওয়্যারের সুরক্ষার জন্য নির্ধারিত মানদণ্ড'
          },
          {
            en: 'A 5-minute manual review by an intern',
            bn: 'কোনো ইন্টার্ন দিয়ে ৫ মিনিটের একটি সাধারণ ম্যানুয়াল রিভিউ'
          },
          {
            en: 'Testing only on Windows 95 computers',
            bn: 'শুধুমাত্র উইন্ডোজ ৯৫ কম্পিউটারে পরীক্ষা করা'
          },
          {
            en: 'No automated tests are ever run on SQLite code',
            bn: 'SQLite কোডে কখনোই কোনো স্বয়ংক্রিয় পরীক্ষা চালানো হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'SQLite undergoes aviation-grade MC/DC code coverage testing.',
          bn: 'SQLite এভিয়েশন গ্রেডের নিখুঁত MC/DC কোড কভারেজ পরীক্ষা দিয়ে যাচাই করা হয়।'
        },
        explanation: {
          en: 'SQLite achieves 100% branch test coverage across exhaustive automated test cases, making it an exceptionally thoroughly verified software engine in history.',
          bn: 'নিয়মিত স্বয়ংক্রিয় টেস্ট কেসের মাধ্যমে SQLite ১০০% ব্রাঞ্চ টেস্ট কভারেজ অর্জন করে, যা একে বিশ্বের অত্যন্ত বিশ্বস্ত সফটওয়্যার ইঞ্জিনের মর্যাদা দিয়েছে।'
        }
      },
      {
        id: 'sql-eco-qz-2',
        kind: 'mcq',
        topic: 'libsql-turso-edge-features',
        question: {
          en: 'What key modern cloud capabilities does Libsql (the open-source SQLite fork created by Turso) introduce?',
          bn: 'Libsql (Turso কর্তৃক তৈরি ওপেন-সোর্স SQLite ফর্ক) আধুনিক ক্লাউডের কোন গুরুত্বপূর্ণ সুবিধাগুলো যুক্ত করেছে?'
        },
        options: [
          {
            en: 'A remote network protocol over HTTP/WebSockets, edge distributed replicas across multiple regions, and web assembly compatibility',
            bn: 'HTTP/ওয়েবসকেটের মাধ্যমে রিমোট নেটওয়ার্ক প্রোটোকল, বিভিন্ন অঞ্চলে এজ রেপ্লিকেশন এবং ওয়েব অ্যাসেম্বলি ব্যবহারের সুবিধা'
          },
          {
            en: 'It replaces SQL syntax with Python code',
            bn: 'এটি এসকিউএল কোডের জায়গায় পাইথন কোড ব্যবহার করতে বাধ্য করে'
          },
          {
            en: 'It makes SQLite run on blockchain cryptocurrency nodes',
            bn: 'এটি SQLite-কে ক্রিপ্টোকারেন্সি ব্লকচেইনে চালায়'
          },
          {
            en: 'It limits connections to 1 user per continent',
            bn: 'এটি প্রতি মহাদেশে কেবল ১ জন ব্যবহারকারীর সংযোগ অনুমোদন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Libsql enables distributed edge database replication over HTTP.',
          bn: 'Libsql এইচটিটিপির মাধ্যমে বিশ্বজুড়ে ডিস্ট্রিবিউটেড ডাটাবেস রেপ্লিকেশন করে।'
        },
        explanation: {
          en: 'Libsql turns SQLite into a globally distributed edge database, bringing SQLite local read speeds to serverless web applications worldwide.',
          bn: 'Libsql SQLite-কে ক্লাউড-বান্ধব বৈশ্বিক এজ ডাটাবেসে রূপান্তর করেছে, যা যেকোনো ওয়েব অ্যাপ্লিকেশনে বিদ্যুৎগতির পারফরম্যান্স দেয়।'
        }
      },
      {
        id: 'sql-eco-qz-3',
        kind: 'mcq',
        topic: 'sqlite3-close-leak-prevention',
        question: {
          en: 'When closing an SQLite connection in C or Node.js bindings, what happens if unfinalized prepared statements are left open?',
          bn: 'C বা Node.js-এ SQLite সংযোগ বন্ধ করার সময় যদি কোনো প্রিপেয়ার্ড স্টেটমেন্ট আনফাইনলাইজড অবস্থায় খোলা থেকে যায় তবে কী ঘটে?'
        },
        options: [
          {
            en: 'sqlite3_close() returns SQLITE_BUSY and fails to release resources until all prepared statements are finalized with sqlite3_finalize()',
            bn: 'sqlite3_close() কমান্ডটি SQLITE_BUSY এরর দেয় এবং sqlite3_finalize() না করা পর্যন্ত মেমরি বা রিসোর্স মুক্ত করতে অস্বীকৃতি জানায়'
          },
          {
            en: 'The operating system restarts immediately',
            bn: 'অপারেটিং সিস্টেম সাথে সাথে রিস্টার্ট হয়'
          },
          {
            en: 'All table rows are automatically converted to uppercase',
            bn: 'টেবিলের সমস্ত রো স্বয়ংক্রিয়ভাবে বড় হাতের অক্ষরে বদলে যায়'
          },
          {
            en: 'The database file size multiplies by 10',
            bn: 'ডাটাবেস ফাইলের সাইজ ১০ গুণ বৃদ্ধি পায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Active prepared statements prevent connection closure.',
          bn: 'খোলা থাকা প্রিপেয়ার্ড স্টেটমেন্ট কানেকশন বন্ধ করতে বাধা দেয়।'
        },
        explanation: {
          en: 'SQLite protects against resource leaks. All prepared statements must be finalized before a connection handle can be safely closed.',
          bn: 'রিসোর্স লিক থেকে বাঁচাতে SQLite নিয়ম মেনে চলে। কানেকশন বন্ধ করার আগে সমস্ত স্টেটমেন্ট অবশ্যই ফাইনলাইজ করতে হয়।'
        }
      },
      {
        id: 'sql-eco-qz-4',
        kind: 'mcq',
        topic: 'sqlite-embedded-vs-client-server',
        question: {
          en: 'Why is an embedded database like SQLite fundamentally different from client-server database engines like PostgreSQL or MySQL?',
          bn: 'PostgreSQL বা MySQL এর মতো ক্লায়েন্ট-সার্ভার ডাটাবেসের তুলনায় SQLite-এর মতো এমবেডেড ডাটাবেস মৌলিকভাবে কেন আলাদা?'
        },
        options: [
          {
            en: 'SQLite runs directly inside the host application process without any separate server daemon, eliminating network latency and socket serialization overhead',
            bn: 'SQLite আলাদা কোনো সার্ভার ডিমন ছাড়াই সরাসরি অ্যাপ্লিকেশনের মেমরির ভেতর চলে, ফলে নেটওয়ার্ক লেটেন্সি ও সকেট সিরিয়ালাইজেশনের কোনো বাড়তি খরচ থাকে না'
          },
          {
            en: 'PostgreSQL cannot store text data',
            bn: 'PostgreSQL কোনো টেক্সট ডাটা রাখতে পারে না'
          },
          {
            en: 'SQLite can only run on magnetic tape drives',
            bn: 'SQLite কেবল ম্যাগনেটিক ফিতা বা টেপ ড্রাইভে চলতে পারে'
          },
          {
            en: 'MySQL does not use tables or rows',
            bn: 'MySQL কোনো টেবিল বা রো ব্যবহার করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Embedded means in-process with zero network overhead.',
          bn: 'এমবেডেড মানে একই প্রসেসের ভেতরে শূন্য নেটওয়ার্ক খরচে চলা।'
        },
        explanation: {
          en: 'Client-server databases communicate via TCP sockets, adding network latency. SQLite executes directly in application memory, providing near-instantaneous function-call query execution.',
          bn: 'ক্লায়েন্ট-সার্ভার ডাটাবেসে নেটওয়ার্ক সকেটের মাধ্যমে তথ্য আদান-প্রদান করতে হয়। অন্যদিকে SQLite সরাসরি অ্যাপের মেমরিতে সাধারণ ফাংশন কলের মতো অতি দ্রুতগতিতে চলে।'
        }
      }
    ]
  }
};
