import type { Lesson } from '../../../lib/types';

export const TheServerAndYourFirstQueryLesson: Lesson = {
  slug: 'the-server-and-your-first-query',
  tech: 'mysql',
  title: {
    en: 'MySQL Architecture & Client-Server Fundamentals',
    bn: 'MySQL আর্কিটেকচার ও ক্লায়েন্ট-সার্ভার ফান্ডামেন্টালস'
  },
  summary: {
    en: 'Beginner to expert guide to MySQL client-server architecture, database creation, and session management across ten structured topics. Dissect the four internal layers of the mysqld daemon. Connect over Unix domain sockets versus TCP port 3306. Orient yourself with SELECT VERSION() and SHOW PROCESSLIST. Create modern utf8mb4 databases with utf8mb4_0900_ai_ci collations. Control query delimiters, cancel buffered lines with \\c, and format tabular rows with \\G. Explore physical datadir storage layouts including InnoDB .ibd tablespaces. Inspect system variables, and build production connection pools in Node.js.',
    bn: 'দশটি সুসংগঠিত পয়েন্টে MySQL ক্লায়েন্ট-সার্ভার আর্কিটেকচার, ডাটাবেস তৈরি এবং সেশন ব্যবস্থাপনা আয়ত্ত করুন। mysqld ডিমেনের ৪টি অভ্যন্তরীণ লেয়ার বিশ্লেষণ করুন। ইউনিক্স ডোমেন সকেট বনাম টিসিপি পোর্ট ৩৩০৬ দিয়ে কানেক্ট করুন। SELECT VERSION() এবং SHOW PROCESSLIST দিয়ে সার্ভারের অবস্থা জানুন। utf8mb4_0900_ai_ci কোলেইশন সহ আধুনিক utf8mb4 ডাটাবেস তৈরি করুন। কোয়েরি ডিলিমিটার নিয়ন্ত্রণ, \\c দিয়ে ভুল বাফার বাতিল এবং \\G দিয়ে কলাম ভিত্তিক ফলাফল দেখা শিখুন। InnoDB .ibd টেবিলস্পেস সহ ফিজিক্যাল datadir স্টোরেজ কাঠামো পর্যবেক্ষণ করুন। সিস্টেম ভেরিয়েবল টিউন করুন এবং Node.js-এ প্রোডাকশন কানেকশন পুল তৈরি করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'tables-and-the-types-in-them',
    tech: 'mysql',
    title: {
      en: 'MySQL Tables, Data Types & Storage Engines',
      bn: 'MySQL টেবিল, ডেটা টাইপ ও স্টোরেজ ইঞ্জিন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The MySQL Architecture: Four Internal Layers', bn: '১. MySQL আর্কিটেকচার: ৪টি অভ্যন্তরীণ স্তর' } },
    {
      type: 'para',
      text: {
        en: 'MySQL is not a monolithic program; it operates as a modular multi-threaded database server divided into four distinct architectural layers. The top layer handles incoming network client connections, thread allocation, and user authentication. Below it sits the SQL query parsing and rewriting layer. The third layer contains the cost-based optimizer and execution engine. Finally, the pluggable storage engine layer (such as InnoDB) directly manages data storage and index pages on physical disk.',
        bn: 'MySQL কোনো একক অখণ্ড সফটওয়্যার নয়; এটি একটি মডুলার মাল্টি-থ্রেডেড ডাটাবেস সার্ভার যা ৪টি ভিন্ন স্তরে বিভক্ত। প্রথম স্তরটি নেটওয়ার্ক ক্লায়েন্ট কানেকশন, থ্রেড বরাদ্দ ও ইউজার অথেনটিকেশন পরিচালনা করে। এর নিচে থাকে এসকিউএল কোয়েরি পার্সিং ও রিরাইটিং স্তর। তৃতীয় স্তরে কস্ট-বেসড অপ্টিমাইজার এবং এক্সিকিউশন ইঞ্জিন থাকে। আর সবশেষে প্লাগঅ্যাবল স্টোরেজ ইঞ্জিন লেয়ার (যেমন InnoDB) সরাসরি ফিজিক্যাল ডিস্কে ডেটা ও ইনডেক্স সংরক্ষণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MYSQL 8 SERVER ARCHITECTURAL LAYERS:
+─────────────────────────────────────────────────────────────+
| Layer 1: Connection & Thread Pool (TCP 3306 / Unix Socket)  |
| • Handles authentication, TLS handshake, thread allocation  |
+──────────────────────────────┬──────────────────────────────+
                               │
+──────────────────────────────▼──────────────────────────────+
| Layer 2: SQL Parsing, Preprocessing & Query Cache Deprecated|
| • Lexical/syntax analysis, AST generation, semantic checks  |
+──────────────────────────────┬──────────────────────────────+
                               │
+──────────────────────────────▼──────────────────────────────+
| Layer 3: Query Optimizer & Execution Engine                  |
| • Evaluates index scans, join permutations, cost models     |
+──────────────────────────────┬──────────────────────────────+
                               │
+──────────────────────────────▼──────────────────────────────+
| Layer 4: Pluggable Storage Engine API (InnoDB default)      |
| • Buffer Pool, Redo Log, Undo Tablespaces, .ibd disk files  |
+─────────────────────────────────────────────────────────────+`,
      caption: {
        en: 'The pluggable storage engine interface isolates physical storage algorithms from SQL execution.',
        bn: 'প্লাগঅ্যাবল স্টোরেজ ইঞ্জিন ইন্টারফেস এসকিউএল লজিক থেকে ডিস্ক স্টোরেজ মেকানিজমকে সম্পূর্ণ আলাদা রাখে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'MySQL Client-Server TCP vs Socket Connection Architecture', bn: 'MySQL ক্লায়েন্ট-সার্ভার TCP বনাম সকেট কানেকশন আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="MySQL Connection Architecture">
<g transform="translate(20, 20)">
<rect x="0" y="15" width="160" height="120" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="40" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Client Applications</text>
<text x="80" y="62" font-size="9" fill="#cbd5e1" text-anchor="middle">mysql CLI Shell</text>
<text x="80" y="82" font-size="9" fill="#cbd5e1" text-anchor="middle">Node.js mysql2 pool</text>
<text x="80" y="102" font-size="9" fill="#cbd5e1" text-anchor="middle">Python / Go drivers</text>
<text x="80" y="122" font-size="8" fill="#fbbf24" text-anchor="middle">mysql -h 127.0.0.1 -P 3306</text>

<path d="M165,55 L265,55" stroke="#38bdf8" stroke-width="2"/>
<text x="215" y="48" font-size="8" fill="#38bdf8" text-anchor="middle">TCP Port 3306</text>

<path d="M165,95 L265,95" stroke="#10b981" stroke-width="2"/>
<text x="215" y="88" font-size="8" fill="#10b981" text-anchor="middle">/var/run/mysqld.sock</text>

<rect x="270" y="15" width="180" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="360" y="40" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">mysqld Daemon Core</text>
<text x="360" y="62" font-size="9" fill="#cbd5e1" text-anchor="middle">Thread Pool (1 per client)</text>
<text x="360" y="82" font-size="9" fill="#cbd5e1" text-anchor="middle">Parser &amp; Cost Optimizer</text>
<text x="360" y="102" font-size="9" fill="#fbbf24" text-anchor="middle">InnoDB Buffer Pool (RAM)</text>
<text x="360" y="122" font-size="8" fill="#cbd5e1" text-anchor="middle">Default Port: 3306</text>

<path d="M455,75 L525,75" stroke="#10b981" stroke-width="2"/>
<text x="490" y="68" font-size="8" fill="#10b981" text-anchor="middle">Sync I/O</text>

<rect x="530" y="15" width="140" height="120" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="600" y="40" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Physical Storage</text>
<text x="600" y="62" font-size="8" fill="#cbd5e1" text-anchor="middle">/var/lib/mysql/datadir</text>
<text x="600" y="82" font-size="8" fill="#cbd5e1" text-anchor="middle">shop/orders.ibd</text>
<text x="600" y="102" font-size="8" fill="#cbd5e1" text-anchor="middle">ibdata1 (sys space)</text>
<text x="600" y="122" font-size="8" fill="#4ade80" text-anchor="middle">#ib_redo* (WAL)</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Client Connections: Sockets vs TCP Port 3306', bn: '২. ক্লায়েন্ট কানেকশন: সকেট বনাম টিসিপি পোর্ট ৩৩০৬' } },
    {
      type: 'para',
      text: {
        en: 'When you connect locally on Linux, specifying host "localhost" instructs the client to bypass the network stack and use the high-speed Unix domain socket at /var/run/mysqld/mysqld.sock. Specifying IP "127.0.0.1" forces the client through TCP/IP on port 3306. Remote servers across containers or cloud instances always connect via TCP with authentication credentials.',
        bn: 'Linux-এ লোকাল কানেকশন দেওয়ার সময় হোস্ট হিসেবে "localhost" লিখলে ক্লায়েন্ট নেটওয়ার্ক স্ট্যাক এড়িয়ে সরাসরি /var/run/mysqld/mysqld.sock ডোমেন সকেট ব্যবহার করে, যা অনেক বেশি দ্রুত। কিন্তু "127.0.0.1" আইপি দিলে তা নেটওয়ার্কের মাধ্যমে টিসিপি পোর্ট ৩৩০৬ ব্যবহার করতে বাধ্য হয়। ক্লাউড বা রিমোট সার্ভারের ক্ষেত্রে সর্বদা টিসিপি প্রোটোকলের মাধ্যমেই সংযোগ স্থাপন করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Connect over TCP/IP loopback on port 3306:
mysql -h 127.0.0.1 -P 3306 -u root -p

# Connect locally using high-performance Unix domain socket:
mysql -u root -p --socket=/var/run/mysqld/mysqld.sock

# Execute non-interactive batch SQL and pipe output to shell:
mysql -h 127.0.0.1 -u root -p -e "SELECT VERSION(), NOW();"
# Output:
# +-----------+---------------------+
# | VERSION() | NOW()               |
# +-----------+---------------------+
# | 8.0.36    | 2026-10-01 10:00:00 |
# +-----------+---------------------+`,
      caption: {
        en: 'The -e flag enables shell scripts and CI pipelines to execute queries non-interactively.',
        bn: '-e ফ্ল্যাগ স্ক্রিপ্টিং ও অটোমেশনে টার্মিনাল থেকেই সরাসরি কোয়েরি চালানোর সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Server Introspection: Status, Processlist & Version', bn: '৩. সার্ভার পর্যবেক্ষণ: স্ট্যাটাস, প্রসেসলিস্ট ও ভার্সন' } },
    {
      type: 'para',
      text: {
        en: 'When connecting to an unfamiliar MySQL instance, run three orientation statements immediately. SELECT VERSION() reveals whether features like Common Table Expressions or enforced CHECK constraints are supported (which require MySQL 8.0 or newer). SHOW PROCESSLIST reveals currently executing client threads, identifying hung queries. Typing STATUS (or \\s) outputs server uptime, threads, and network throughput.',
        bn: 'অপরিচিত কোনো MySQL সার্ভারে ঢোকার সাথে সাথে ৩টি ওরিয়েন্টেশন কমান্ড চালানো উচিত। SELECT VERSION() নিশ্চিত করে সিটিই বা চেক কনস্ট্রেইন্টের মতো আধুনিক ফিচার চলবে কিনা (যা MySQL ৮.০ সংস্করণে যুক্ত হয়েছে)। SHOW PROCESSLIST সার্ভারের চলমান সমস্ত ক্লায়েন্ট থ্রেড এবং দীর্ঘ সময় আটকে থাকা কোয়েরি দেখায়। আর STATUS (বা \\s) সার্ভারের আপটাইম, থ্রেড ও নেটওয়ার্ক ট্রাফিকের সারসংক্ষেপ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Discover exact engine version:
SELECT VERSION();
-- Output: 8.0.36

-- 2. Inspect active client threads and execution times:
SHOW FULL PROCESSLIST;
-- Output:
-- +----+------+-----------------+------+---------+------+-------+-----------------------+
-- | Id | User | Host            | db   | Command | Time | State | Info                  |
-- +----+------+-----------------+------+---------+------+-------+-----------------------+
-- | 12 | root | localhost:51240 | shop | Query   |    0 | init  | SHOW FULL PROCESSLIST |
-- +----+------+-----------------+------+---------+------+-------+-----------------------+

-- 3. Check connected user and effective authenticated account:
SELECT USER(), CURRENT_USER();
-- Output: root@localhost, root@localhost`,
      caption: {
        en: 'SHOW PROCESSLIST is the primary operational diagnostic for identifying stuck or slow queries.',
        bn: 'SHOW PROCESSLIST সার্ভারে আটকে থাকা বা অতিরিক্ত সময় নেওয়া ধীরগতির কোয়েরি শনাক্ত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Database & Schema Namespaces in MySQL', bn: '৪. MySQL ডাটাবেস ও স্কিমা নেমস্পেস' } },
    {
      type: 'para',
      text: {
        en: 'In MySQL, the terms DATABASE and SCHEMA are completely synonymous: CREATE SCHEMA executes the identical code path as CREATE DATABASE. A database is a logical namespace of tables mapping to a physical directory on disk. Executing USE <database> sets the default namespace for your session, allowing you to reference tables directly without dot-prefixed prefixes like shop.orders.',
        bn: 'MySQL অপারেটিং সিস্টেমে DATABASE এবং SCHEMA শব্দের অর্থ সম্পূর্ণ অভিন্ন: CREATE SCHEMA এবং CREATE DATABASE মূলত একই কাজ করে। ডাটাবেস হলো টেবিলগুলোর একটি লজিক্যাল নেমস্পেস যা ডিস্কে একটি নির্দিষ্ট ফোল্ডারে সংরক্ষিত থাকে। USE কমান্ডের মাধ্যমে বর্তমান সেশনের জন্য নির্দিষ্ট ডাটাবেস সক্রিয় করা হয়, ফলে টেবিলের আগে ডাটাবেসের নাম (যেমন shop.orders) বারবার লিখতে হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create production database with modern UTF-8 support:
CREATE DATABASE shop
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

-- Switch session default database:
USE shop;

-- Verify which database is currently active:
SELECT DATABASE();
-- Output: shop

-- List all tables currently existing in active database:
SHOW TABLES;
-- Output: Empty set (0.00 sec)`,
      caption: {
        en: 'USE sets session state; database creation requires utf8mb4 for comprehensive Unicode fidelity.',
        bn: 'USE সেশনের ডিফল্ট ডাটাবেস ঠিক করে; utf8mb4 নিশ্চিত করে আন্তর্জাতিক সকল ইউনিকোড সমর্থন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Semicolons, Delimiters & Buffer Control', bn: '৫. সেমিকোলন, ডিলিমিটার ও বাফার নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'The MySQL interactive client sends text to the server only when it encounters the active statement delimiter, which defaults to a semicolon (;). If you press Enter without typing a semicolon, the client buffers lines and displays continuation prompts like -> or \'>. To abandon a mistyped multi-line statement cleanly, type \\c. To render wide tabular results vertically for readability, terminate queries with \\G instead of a semicolon.',
        bn: 'MySQL ক্লায়েন্ট স্টেটমেন্ট ডিলিমিটার (ডিফল্টভাবে সেমিকোলন ;) না পাওয়া পর্যন্ত কোনো টেক্সট সার্ভারে পাঠায় না। সেমিকোলন ছাড়া এন্টার চাপলে ক্লায়েন্ট লাইনগুলো জমিয়ে রাখে এবং -> চিহ্ন দেখায়। ভুল টাইপ করা কোয়েরির বাফার মুছে ফ্রেশ প্রম্পট পেতে \\c টাইপ করতে হয়। আর অনেকগুলো কলাম বিশিষ্ট চওড়া টেবিল সুন্দরভাবে লম্বালম্বি দেখতে সেমিকোলনের বদলে \\G ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Multiline statement buffering until semicolon:
SELECT
    id,
    customer_name,
    total_amount
FROM orders
WHERE id = 1042;
-- Output: 1 row in set (0.00 sec)

-- Abandoning a mistyped query buffer with \\c:
SELECT * FROM broken_table WHERE id = 1
  AND some_typo... \c
-- Result: Clean mysql> prompt restored immediately!

-- Vertical formatting using \\G (indispensable for wide tables):
SELECT * FROM performance_schema.threads WHERE processlist_id = 12 \\G
-- Output:
-- *************************** 1. row ***************************
--           THREAD_ID: 45
--                NAME: thread/sql/one_connection
--      PROCESSLIST_ID: 12`,
      caption: {
        en: 'Terminating queries with \\G transposes columns into rows, eliminating horizontal line wrapping.',
        bn: '\\G দিয়ে কোয়েরি শেষ করলে প্রতিটি কলাম আলাদা লাইনে সাজিয়ে সুন্দরভাবে দেখা যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Character Sets & Collations: Why utf8mb4 is Mandatory', bn: '৬. ক্যারেক্টার সেট ও কোলেইশন: utf8mb4 কেন আবশ্যক' } },
    {
      type: 'para',
      text: {
        en: 'Historical MySQL versions offered a character set named "utf8" (alias for utf8mb3) that supported at most 3 bytes per character. Inserting 4-byte characters like emojis, mathematical symbols, or historic scripts into a utf8 column causes silent truncation or error 1366. Production databases must always standardize on utf8mb4 with collation utf8mb4_0900_ai_ci, providing true Unicode compliance.',
        bn: 'MySQL-এর পুরনো সংস্করণে "utf8" (utf8mb3) নামে একটি ক্যারেক্টার সেট ছিল যা প্রতি ক্যারেক্টারের জন্য সর্বোচ্চ ৩ বাইট জায়গা দিত। ফলে আধুনিক ৪-বাইটের ইমোজি বা বিশেষ ভাষা ইনসার্ট করতে গেলে ডেটা কেটে যেত বা এরর ১৩৬৬ দিত। প্রোডাকশনে সর্বদা ৪-বাইটের utf8mb4 এবং utf8mb4_0900_ai_ci কোলেইশন ব্যবহার করা আবশ্যক, যা শতভাগ ইউনিকোড সমর্থন করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Inspect default character set variables:
SHOW VARIABLES WHERE Variable_name LIKE 'character_set_%';
-- Output:
-- | character_set_client     | utf8mb4 |
-- | character_set_connection | utf8mb4 |
-- | character_set_database   | utf8mb4 |
-- | character_set_server     | utf8mb4 |

-- Test 4-byte emoji storage in utf8mb4:
CREATE TABLE feedback (
  id INT PRIMARY KEY AUTO_INCREMENT,
  comment VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
);

INSERT INTO feedback (comment) VALUES ('Service was amazing! 🚀✨');
-- Output: Query OK, 1 row affected (0.01 sec)

SELECT comment FROM feedback;
-- Output: Service was amazing! 🚀✨`,
      caption: {
        en: 'utf8mb4 allocates up to 4 bytes per character, supporting modern emojis and international scripts.',
        bn: 'utf8mb4 প্রতি অক্ষরে সর্বোচ্চ ৪ বাইট বরাদ্দ করে নিখুঁতভাবে ইমোজি ও আন্তর্জাতিক ভাষা সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Physical Storage Layout: The datadir Filesystem', bn: '৭. ফিজিক্যাল স্টোরেজ কাঠামো: datadir ফাইলসিস্টেম' } },
    {
      type: 'para',
      text: {
        en: 'MySQL stores all persistent state on disk inside the directory defined by the datadir configuration variable (typically /var/lib/mysql). Under modern InnoDB settings (innodb_file_per_table=ON), each database corresponds to a filesystem directory, and each individual table lives inside its own .ibd tablespace file holding its clustered B+Tree index and leaf pages.',
        bn: 'MySQL তার সমস্ত তথ্য ডিস্কের datadir ফোল্ডারে (সাধারণত /var/lib/mysql) সংরক্ষণ করে। আধুনিক InnoDB সেটিংসে প্রতিটি ডাটাবেসের জন্য ডিস্কে আলাদা ফোল্ডার থাকে এবং প্রতিটি টেবিলের জন্য একটি করে নিজস্ব .ibd ফাইল থাকে। এই .ibd ফাইলের ভেতরেই টেবিলের আসল ক্লাস্টার্ড বি+ট্রি ইনডেক্স ও ডেটা পেজগুলো সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MYSQL PHYSICAL STORAGE HIERARCHY:
/var/lib/mysql/ (datadir)
├── ibdata1                 (System tablespace: doublewrite buffer, undo logs)
├── #ib_redo10              (Write-Ahead Redo Log file for crash recovery)
├── binlog.000042           (Binary log stream for point-in-time recovery)
├── mysql/                  (Internal system database: user accounts, roles)
├── performance_schema/     (In-memory instrumentation tables)
└── shop/                   (User Database directory)
    ├── orders.ibd          (InnoDB tablespace: data pages + clustered index)
    ├── customers.ibd       (InnoDB tablespace: primary key B+Tree)
    └── products.ibd        (InnoDB tablespace: product rows and secondary keys)`,
      caption: {
        en: 'Each InnoDB table resides in an isolated .ibd tablespace file when innodb_file_per_table is active.',
        bn: 'innodb_file_per_table সক্রিয় থাকলে প্রতি টেবিলের জন্য আলাদা .ibd ফাইল তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Global vs Session System Variables', bn: '৮. গ্লোবাল বনাম সেশন সিস্টেম ভেরিয়েবল' } },
    {
      type: 'para',
      text: {
        en: 'MySQL differentiates configuration settings between two distinct scopes. Global variables govern the entire server process across all clients (such as max_connections or innodb_buffer_pool_size). Session variables apply strictly to the currently connected client connection (such as sql_mode, autocommit, or time_zone). Disconnecting resets all session variables to server global defaults.',
        bn: 'MySQL কনফিগারেশন সেটিংসকে দুটি আলাদা সীমানায় ভাগ করে। গ্লোবাল ভেরিয়েবল পুরো সার্ভার প্রসেস এবং সকল ক্লায়েন্টের জন্য প্রযোজ্য হয় (যেমন max_connections বা বাফার পুল সাইজ)। আর সেশন ভেরিয়েবল কেবল নির্দিষ্ট ক্লায়েন্ট কানেকশনের জন্য কার্যকর থাকে (যেমন autocommit বা time_zone)। কানেকশন কেটে গেলে সেশন ভেরিয়েবলগুলো পুনরায় গ্লোবাল ডিফল্ট মানে ফিরে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Inspect global max connections allowed on server:
SHOW GLOBAL VARIABLES LIKE 'max_connections';
-- Output:
-- | max_connections | 151 |

-- Inspect session transaction autocommit status:
SHOW SESSION VARIABLES LIKE 'autocommit';
-- Output:
-- | autocommit | ON |

-- Adjust session SQL mode for strict data validation:
SET SESSION sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';

-- Verify current active thread count:
SHOW GLOBAL STATUS LIKE 'Threads_connected';
-- Output:
-- | Threads_connected | 4 |`,
      caption: {
        en: 'Changing session variables isolates runtime modifications without impacting concurrent clients.',
        bn: 'সেশন ভেরিয়েবল পরিবর্তন করলে অন্য ক্লায়েন্টদের কাজে কোনো প্রভাব না ফেলেই সেটিংস বদলানো যায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: Connection Methods Compared', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: কানেকশন পদ্ধতির তুলনা' } },
    {
      type: 'para',
      text: {
        en: 'Choosing the correct connection protocol depends on deployment topology. Unix domain sockets deliver lowest latency on single-node instances. TCP/IP is mandatory for microservices and cloud managed databases. Connection pools reuse established TCP sockets to eliminate expensive TLS handshake overhead during high-concurrency spikes.',
        bn: 'কানেকশন প্রোটোকল নির্বাচন নির্ভর করে সিস্টেম কাঠামোর ওপর। একই মেশিনে চললে ইউনিক্স ডোমেন সকেট সবচেয়ে কম ল্যাটেন্সিতে দ্রুত কাজ করে। ক্লাউড বা ডকার কন্টেইনারের ক্ষেত্রে টিসিপি কানেকশন বাধ্যতামূলক। আর ওয়েব অ্যাপ্লিকেশনে টিসিপি হ্যান্ডশেকের খরচ কমাতে কানেকশন পুল ব্যবহার করা অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `MYSQL CONNECTION METHOD COMPARISON:
+---------------------+-------------------+-------------------+--------------------+
| Dimension           | Unix Socket       | TCP Loopback      | Connection Pool    |
+---------------------+-------------------+-------------------+--------------------+
| Protocol Target     | /var/run/mysqld   | 127.0.0.1:3306    | Pooled TCP Sockets |
| Cross-Machine       | Prohibited (Same) | Supported (LAN)   | Supported (Cloud)  |
| Handshake Overhead  | Microscopic       | Moderate (TCP)    | Zero on borrow     |
| Best Use Case       | Local CLI / Cron  | Isolated Docker   | Production Backend |
+---------------------+-------------------+-------------------+--------------------+`,
      caption: {
        en: 'Production backend services must always employ connection pools to reuse pre-authenticated sockets.',
        bn: 'প্রোডাকশন সার্ভারে কানেকশন তৈরির খরচ এড়াতে সর্বদা কানেকশন পুলিং ব্যবহার করতে হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production Connection Pooling in Node.js', bn: '১০. Node.js-এ প্রোডাকশন কানেকশন পুলিং' } },
    {
      type: 'para',
      text: {
        en: 'Here is a Node.js database connector using the high-performance mysql2/promise library to create a connection pool, inspect server metadata, and execute parameterized queries.',
        bn: 'নিচে উচ্চগতির mysql2/promise লাইব্রেরি ব্যবহার করে কানেকশন পুল তৈরি, সার্ভারের মেটাডেটা যাচাই এবং প্যারামিটারাইজড কোয়েরি চালানোর একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import mysql from "mysql2/promise";

// Configure production connection pool:
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "production_password",
  database: "shop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4"
});

async function verifyServerConnection() {
  const [rows] = await pool.query("SELECT VERSION() AS ver, DATABASE() AS db, NOW() AS serverTime;");
  console.log("Connected to MySQL Server:", rows[0]);
  return rows[0];
}

const serverInfo = await verifyServerConnection();
console.log("MySQL connection verification completed successfully");
// Output: MySQL connection verification completed successfully`,
      caption: {
        en: 'mysql2 connection pools automatically balance queries across pre-warmed TCP sockets.',
        bn: 'mysql2 কানেকশন পুল আগে থেকে তৈরি করা সকেটগুলোর মাধ্যমে দ্রুত কোয়েরি সম্পন্ন করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'msq-srv-ex1',
      kind: 'predict',
      topic: 'mysql: default tcp listener port',
      question: {
        en: 'What is the default TCP network port that the MySQL database daemon listens on for incoming client connections?',
        bn: 'নতুন ক্লায়েন্ট কানেকশনের জন্য MySQL ডাটাবেস ডিমেন ডিফল্টভাবে কোন টিসিপি নেটওয়ার্ক পোর্টে লিসেন করে?'
      },
      code: `/* Default MySQL TCP port: */
/* port === ____ */`,
      answer: '3306',
      accept: ['3306'],
      hint: {
        en: 'Port 3306.',
        bn: 'পোর্ট ৩৩০৬।'
      },
      explanation: {
        en: 'Port 3306 is the standard registered IANA TCP port for MySQL database communication.',
        bn: 'MySQL ডাটাবেস যোগাযোগের জন্য প্রমিত নিবন্ধিত আইএএনএ টিসিপি পোর্ট হলো ৩৩০৬।'
      }
    },
    {
      id: 'msq-srv-ex2',
      kind: 'mcq',
      topic: 'mysql: clear mistyped query buffer command',
      question: {
        en: 'Which client-side shortcut clears an unfinished multi-line query buffer in the mysql shell and restores a fresh prompt?',
        bn: 'mysql শেলে ভুল টাইপ করা মাল্টি-লাইন কোয়েরির বাফার বাতিল করে পরিষ্কার প্রম্পটে ফিরে আসতে কোন শর্টকাটটি ব্যবহৃত হয়?'
      },
      options: [
        { en: '\\c', bn: '\\c' },
        { en: '\\q', bn: '\\q' },
        { en: '\\s', bn: '\\s' },
        { en: '\\G', bn: '\\G' }
      ],
      answer: 0,
      hint: {
        en: '\\c (clear).',
        bn: '\\c (ক্লিয়ার)।'
      },
      explanation: {
        en: '\\c tells the client parser to discard buffered input without sending it to the server.',
        bn: '\\c ক্লায়েন্টকে আগের জমে থাকা বাফার মুছে ফ্রেশ প্রম্পট দেওয়ার নির্দেশ দেয়।'
      }
    },
    {
      id: 'msq-srv-ex3',
      kind: 'mcq',
      topic: 'mysql: utf8mb4 vs utf8 distinction',
      question: {
        en: 'Why is "utf8mb4" mandatory instead of historic "utf8" (utf8mb3) in modern MySQL schemas?',
        bn: 'আধুনিক MySQL স্কিমায় পুরনো "utf8" (utf8mb3)-এর বদলে "utf8mb4" ব্যবহার করা কেন বাধ্যতামূলক?'
      },
      options: [
        { en: 'utf8mb4 supports full 4-byte Unicode characters, preventing truncation when storing modern emojis and international symbols', bn: 'utf8mb4 সম্পূর্ণ ৪-বাইটের ইউনিকোড সমর্থন করে, যা আধুনিক ইমোজি ও আন্তর্জাতিক চিহ্ন নিরাপদে সংরক্ষণ করতে পারে' },
        { en: 'utf8mb4 makes queries execute twice as fast', bn: 'কোয়েরির গতি দ্বিগুণ করে' },
        { en: 'utf8mb4 encrypts the hard drive', bn: 'হার্ডড্রাইভ এনক্রিপ্ট করে' },
        { en: 'utf8 was deleted from computers in 2020', bn: '২০২০ সালে মুছে ফেলা হয়েছে' }
      ],
      answer: 0,
      hint: {
        en: 'Supports 4-byte characters and emojis.',
        bn: '৪-বাইটের ক্যারেক্টার ও ইমোজি সমর্থন করে।'
      },
      explanation: {
        en: 'MySQL historic utf8 stores only 3 bytes per character, failing on 4-byte characters. utf8mb4 supports complete UTF-8.',
        bn: 'পুরনো utf8 মাত্র ৩ বাইট সাপোর্ট করত; পূর্ণাঙ্গ ইউনিকোড ও ইমোজির জন্য ৪ বাইটের utf8mb4 আবশ্যক।'
      }
    }
  ],
  quiz: {
    id: 'msq-srv-quiz',
    title: { en: 'MySQL Architecture & Fundamentals Quiz', bn: 'MySQL আর্কিটেকচার ও ফান্ডামেন্টালস কুইজ' },
    questions: [
      {
        id: 'msqrvq1',
        kind: 'mcq',
        topic: 'mysql: database versus schema identity',
        question: {
          en: 'In the MySQL database engine, what is the technical distinction between a DATABASE and a SCHEMA?',
          bn: 'MySQL ডাটাবেস ইঞ্জিনে DATABASE এবং SCHEMA-এর মধ্যে প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          { en: 'They are completely synonymous; CREATE SCHEMA executes identical code to CREATE DATABASE', bn: 'তারা সম্পূর্ণ সমার্থক; CREATE SCHEMA এবং CREATE DATABASE মূলত হুবহু একই কোড চালায়' },
          { en: 'A database can hold 10 schemas', bn: 'একটি ডাটাবেসে ১০টি স্কিমা থাকে' },
          { en: 'Schemas only exist in memory while databases exist on disk', bn: 'স্কিমা মেমরিতে থাকে আর ডাটাবেস ডিস্কে থাকে' },
          { en: 'Schemas are written in Python', bn: 'স্কিমা পাইথনে লেখা' }
        ],
        answer: 0,
        hint: {
          en: 'They are completely synonymous in MySQL.',
          bn: 'MySQL-এ তারা সম্পূর্ণ সমার্থক।'
        },
        explanation: {
          en: 'Unlike PostgreSQL or Oracle where schemas live inside databases, in MySQL DATABASE and SCHEMA mean the exact same thing.',
          bn: 'ওরাকল বা পোস্টগ্রেসের মতো নয়, MySQL-এ ডাটাবেস এবং স্কিমা সম্পূর্ণ একই জিনিস বোঝায়।'
        }
      },
      {
        id: 'msqrvq2',
        kind: 'mcq',
        topic: 'mysql: localhost socket vs 127.0.0.1 tcp',
        question: {
          en: 'On a Linux system, what mechanism does the mysql client use when connecting with "-h localhost" versus "-h 127.0.0.1"?',
          bn: 'Linux সিস্টেমে "-h localhost" দিয়ে কানেক্ট করলে এবং "-h 127.0.0.1" দিয়ে কানেক্ট করলে ক্লায়েন্ট কোন পদ্ধতি ব্যবহার করে?'
        },
        options: [
          { en: 'localhost connects via Unix domain socket file; 127.0.0.1 connects via TCP network loopback', bn: 'localhost লোকাল ইউনিক্স ডোমেন সকেট ফাইল দিয়ে ঢোকে; আর 127.0.0.1 টিসিপি নেটওয়ার্ক লুপব্যাক ব্যবহার করে' },
          { en: '127.0.0.1 connects over satellite internet', bn: 'স্যাটেলাইট ইন্টারনেট দিয়ে কানেক্ট করে' },
          { en: 'localhost bypasses user authentication', bn: 'পাসওয়ার্ড ছাড়াই লগইন করে' },
          { en: 'There is zero difference', bn: 'কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'localhost uses Unix sockets; 127.0.0.1 uses TCP.',
          bn: 'localhost সকেট ব্যবহার করে; 127.0.0.1 টিসিপি ব্যবহার করে।'
        },
        explanation: {
          en: 'In MySQL clients, the string "localhost" triggers Unix domain socket communication, while IP addresses use TCP/IP.',
          bn: 'MySQL ক্লায়েন্টে "localhost" লিখলে সরাসরি ইউনিক্স সকেট ফাইল খোলে এবং আইপি লিখলে টিসিপি নেটওয়ার্ক চলে।'
        }
      },
      {
        id: 'msqrvq3',
        kind: 'mcq',
        topic: 'mysql: vertical output delimiter shortcut',
        question: {
          en: 'Which termination delimiter transposes a query’s wide column output into vertical key-value rows in the mysql terminal?',
          bn: 'mysql টার্মিনালে চওড়া টেবিলের কলামগুলোকে লম্বালম্বি কি-ভ্যালু আকারে দেখতে কোন ডিলিমিটারটি দিয়ে কোয়েরি শেষ করতে হয়?'
        },
        options: [
          { en: '\\G', bn: '\\G' },
          { en: ';', bn: ';' },
          { en: '\\c', bn: '\\c' },
          { en: '--vertical', bn: '--vertical' }
        ],
        answer: 0,
        hint: {
          en: '\\G delimiter.',
          bn: '\\G ডিলিমিটার।'
        },
        explanation: {
          en: 'Terminating a statement with \\G instructs the shell to display results vertically, row by row.',
          bn: '\\G দিয়ে কোয়েরি শেষ করলে ক্লায়েন্ট প্রতিটি কলামকে আলাদা লাইনে সুন্দরভাবে প্রদর্শন করে।'
        }
      },
      {
        id: 'msqrvq4',
        kind: 'mcq',
        topic: 'mysql: connection pooling advantage',
        question: {
          en: 'What is the primary performance benefit of using a connection pool in high-concurrency backend services?',
          bn: 'উচ্চ ট্রাফিকের ব্যাকএন্ড সার্ভিসে ডাটাবেস কানেকশন পুল ব্যবহারের মূল পারফরম্যান্স সুবিধা কোনটি?'
        },
        options: [
          { en: 'It reuses pre-warmed TCP sockets, eliminating the latency overhead of repeated TCP and TLS handshakes per query', bn: 'এটি পূর্বে তৈরি করা টিসিপি সকেট পুনরায় ব্যবহার করে, ফলে প্রতি কোয়েরিতে বারবার হ্যান্ডশেক করার ল্যাটেন্সি বাঁচে' },
          { en: 'It deletes slow queries from disk', bn: 'ধীরগতির কোয়েরি মুছে ফেলে' },
          { en: 'It eliminates the need for SQL indexes', bn: 'ইনডেক্সের প্রয়োজন দূর করে' },
          { en: 'It compresses table rows into zip files', bn: 'টেবিলকে জিপ ফাইলে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Reuses connections and avoids handshakes.',
          bn: 'কানেকশন পুনরায় ব্যবহার করে হ্যান্ডশেক এড়ায়।'
        },
        explanation: {
          en: 'Opening new TCP connections is computationally expensive. Connection pools keep a set of persistent sockets alive for instant queries.',
          bn: 'নতুন কানেকশন তৈরির সময় ও রিসোর্স খরচ কমাতে কানেকশন পুল সকেটগুলোকে সক্রিয় রেখে তাৎক্ষণিক সেবা দেয়।'
        }
      }
    ]
  }
};
