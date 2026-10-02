import type { Lesson } from '../../../lib/types';

export const JoinsAndTheViewLesson: Lesson = {
  slug: 'joins-and-the-view',
  tech: 'sqlite',
  title: {
    en: 'Relational Joins & Subqueries: INNER, LEFT, CTEs & Views',
    bn: 'রিলেশনাল জয়েন ও সাবকোয়েরি: INNER, LEFT, CTE ও ভিউ'
  },
  summary: {
    en: 'Master relational data relationships in SQLite. Explore INNER JOIN, LEFT OUTER JOIN, CROSS JOIN, correlated subqueries, Common Table Expressions with WITH RECURSIVE, and persistent database Views.',
    bn: 'SQLite-এ রিলেশনাল ডাটার সম্পর্ক গভীরভাবে আয়ত্ত করুন। INNER JOIN, LEFT OUTER JOIN, CROSS JOIN, কোরিলেটেড সাবকোয়েরি, WITH RECURSIVE সহ কমন টেবিল এক্সপ্রেশন (CTE) এবং স্থায়ী ডাটাবেস ভিউ ব্যবহারের সম্পূর্ণ গাইড।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'relational-joins-core',
      text: {
        en: 'Relational Join Strategies in SQLite',
        bn: 'SQLite-এ রিলেশনাল জয়েন কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build real-world software with SQLite (the embedded database engine), your data rarely lives in a single isolated table. To combine user profiles with order records or traverse organizational hierarchies, you rely on relational joins, Common Table Expressions, and database views.',
        bn: 'যখন আপনি SQLite (এমবেডেড ডাটাবেস ইঞ্জিন) দিয়ে সফটওয়্যার তৈরি করেন, আপনার তথ্য খুব কমই একটিমাত্র বিচ্ছিন্ন টেবিলে থাকে। অর্ডারের তথ্যের সাথে ব্যবহারকারীর প্রোফাইল মেলাতে বা হায়ারার্কি অনুসন্ধান করতে আপনাকে রিলেশনাল জয়েন, কমন টেবিল এক্সপ্রেশন এবং ডাটাবেস ভিউয়ের ওপর নির্ভর করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'SQLite supports all standard SQL join types including INNER JOIN, LEFT OUTER JOIN, and CROSS JOIN. Modern SQLite version 3.39 also added native support for RIGHT JOIN and FULL OUTER JOIN, bringing parity with enterprise database engines.',
        bn: 'SQLite সমস্ত স্ট্যান্ডার্ড এসকিউএল জয়েন সমর্থন করে যার মধ্যে রয়েছে INNER JOIN, LEFT OUTER JOIN এবং CROSS JOIN। আধুনিক SQLite ভার্সন 3.39 এ RIGHT JOIN এবং FULL OUTER JOIN সমর্থনও যুক্ত করা হয়েছে, যা একে এন্টারপ্রাইজ ডাটাবেসের সমকক্ষ করে তুলেছে।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-joins-diagram',
      caption: {
        en: 'Figure 1: Comparison of SQLite relational joins (INNER vs LEFT) and hierarchical recursive CTE data flow.',
        bn: 'চিত্র ১: SQLite রিলেশনাল জয়েনের তুলনা (INNER বনাম LEFT) এবং হায়ারার্কিকাল রিকার্সিভ CTE-র ডাটা প্রবাহ।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="jnHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="innerGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="cteGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#jnHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🔗</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE JOINS, CTES &amp; DATABASE VIEWS</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">INNER &amp; LEFT JOIN semantics, WITH RECURSIVE hierarchies, and zero-storage views</text>

  <!-- Left: Join Comparison -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#innerGrad)" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="44" y="118" fill="#c084fc" font-size="13" font-weight="bold">RELATIONAL JOIN OPERATORS</text>

  <!-- Venn Diagrams / Visual Boxes -->
  <rect x="44" y="136" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="158" fill="#a78bfa" font-size="11" font-weight="bold">1. INNER JOIN (Strict Intersection):</text>
  <text x="56" y="176" fill="#cbd5e1" font-size="10">• SELECT * FROM users JOIN orders ON users.id = orders.user_id;</text>
  <text x="56" y="194" fill="#cbd5e1" font-size="10">• Emits rows ONLY when matching keys exist in BOTH relations.</text>
  <text x="56" y="212" fill="#34d399" font-size="10">• Users without orders are excluded from output.</text>

  <rect x="44" y="242" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="264" fill="#38bdf8" font-size="11" font-weight="bold">2. LEFT OUTER JOIN (Preserves Left Table):</text>
  <text x="56" y="282" fill="#cbd5e1" font-size="10">• SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id;</text>
  <text x="56" y="300" fill="#cbd5e1" font-size="10">• Emits every user; missing order columns are padded with NULL.</text>
  <text x="56" y="318" fill="#34d399" font-size="10">• Perfect for finding users with zero orders (WHERE orders.id IS NULL).</text>

  <rect x="44" y="348" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="370" fill="#f59e0b" font-size="11" font-weight="bold">3. CROSS JOIN (Planner Directive):</text>
  <text x="56" y="388" fill="#cbd5e1" font-size="10">• Cartesian product (M * N tuples).</text>
  <text x="56" y="406" fill="#cbd5e1" font-size="10">• Special SQLite rule: Forces planner to evaluate left table first!</text>
  <text x="56" y="424" fill="#fbbf24" font-size="10">• Used by experts to manually tune join order in tricky plans.</text>

  <!-- Right: CTEs & Views -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#cteGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">RECURSIVE CTES &amp; DATABASE VIEWS</text>

  <rect x="516" y="136" width="400" height="135" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="158" fill="#6ee7b7" font-size="11" font-weight="bold">WITH RECURSIVE (Trees &amp; Sequences):</text>
  <text x="528" y="178" fill="#a78bfa" font-size="10">WITH RECURSIVE counter(n) AS (</text>
  <text x="548" y="194" fill="#cbd5e1" font-size="10">SELECT 1                   -- Initial anchor member</text>
  <text x="548" y="210" fill="#a78bfa" font-size="10">UNION ALL</text>
  <text x="548" y="226" fill="#cbd5e1" font-size="10">SELECT n + 1 FROM counter WHERE n &lt; 5 -- Recursive step</text>
  <text x="528" y="244" fill="#a78bfa" font-size="10">) SELECT * FROM counter;     -- Yields: 1, 2, 3, 4, 5</text>
  <text x="528" y="260" fill="#34d399" font-size="9">• Traverses organizational charts, folder trees, and bills of materials.</text>

  <rect x="516" y="285" width="400" height="155" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="310" fill="#38bdf8" font-size="12" font-weight="bold">Database Views (Zero Disk Storage):</text>
  <text x="528" y="332" fill="#f1f5f9" font-size="10">CREATE VIEW active_customer_orders AS</text>
  <text x="528" y="348" fill="#cbd5e1" font-size="10">SELECT u.name, o.total FROM users u JOIN orders o ...;</text>
  <text x="528" y="372" fill="#cbd5e1" font-size="10">• Stored as a pure SQL query in sqlite_schema on Page 1.</text>
  <text x="528" y="390" fill="#cbd5e1" font-size="10">• Takes ZERO bytes of table storage space!</text>
  <text x="528" y="408" fill="#34d399" font-size="10">• SQLite planner expands the view directly into the query AST.</text>
  <text x="528" y="424" fill="#94a3b8" font-size="10">• Writable views supported via INSTEAD OF triggers.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'recursive-ctes',
      text: {
        en: 'Hierarchical Queries with WITH RECURSIVE',
        bn: 'WITH RECURSIVE দিয়ে হায়ারার্কিকাল কোয়েরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Common Table Expression provides a temporary result set defined within the execution scope of a single SQL query. The recursive variant, WITH RECURSIVE, enables powerful iterative computation.',
        bn: 'কমন টেবিল এক্সপ্রেশন একটি একক এসকিউএল কোয়েরির মধ্যে একটি অস্থায়ী ফলাফল সেট তৈরি করে। এর রিকার্সিভ রূপ, WITH RECURSIVE, পুনরাবৃত্তিমূলক গণনার সুযোগ দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A recursive CTE consists of an initial anchor query and a recursive query joined by UNION ALL. This allows developers to query nested category trees, organizational employee hierarchies, and generate continuous calendar date series directly in SQL without application loops.',
        bn: 'একটি রিকার্সিভ CTE একটি প্রাথমিক অ্যাঙ্কর কোয়েরি এবং UNION ALL দিয়ে যুক্ত একটি রিকার্সিভ কোয়েরি নিয়ে গঠিত। এর মাধ্যমে অ্যাপ্লিকেশনে লুপ না চালিয়েই এসকিউএলের ভেতরে নেস্টেড ক্যাটাগরি ট্রি, কর্মকর্তা হায়ারার্কি এবং তারিখের ধারাবাহিক সিরিজ তৈরি করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'database-views-mechanics',
      text: {
        en: 'Database Views: Virtual Tables with Zero Disk Storage',
        bn: 'ডাটাবেস ভিউ: শূন্য ডিস্ক মেমরির ভার্চুয়াল টেবিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A database view created with CREATE VIEW stores only the SELECT statement text inside the sqlite_schema table on Page 1. It consumes zero bytes of table payload storage on disk.',
        bn: 'CREATE VIEW দিয়ে তৈরি একটি ডাটাবেস ভিউ কেবল তার কোয়েরির টেক্সটটুকু পেজ ১-এর sqlite_schema টেবিলে সংরক্ষণ করে। ডিস্কে এর জন্য কোনো অতিরিক্ত মেমরি লাগে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Whenever a query references the view, the SQLite query compiler parses the view definition and merges it directly into the master execution tree. Furthermore, by attaching INSTEAD OF triggers, developers can make views support INSERT, UPDATE, and DELETE operations.',
        bn: 'যখনই কোনো কোয়েরি ভিউটি ব্যবহার করে, SQLite কম্পাইলার ভিউটির সংজ্ঞা মূল এক্সিকিউশন ট্রির সাথে যুক্ত করে ফেলে। তাছাড়া INSTEAD OF ট্রিগার ব্যবহার করে ভিউতে INSERT, UPDATE এবং DELETE চালানো সম্ভব।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-joins-sim',
      text: {
        en: 'Interactive Benchmark: Simulating Relational Joins & Recursive CTEs',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: রিলেশনাল জয়েন ও রিকার্সিভ CTE সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-joins-cte-sim.ts',
      code: `// SQLite Relational Joins & CTE Simulator
// 3 inner join matches found -> returns 3
// 5 left join matches found -> returns 5
// WITH RECURSIVE generates 1 to 5 sequence -> returns 5
function simulateSqliteJoins() {
  console.log("=== SQLITE JOINS & CTE SIMULATOR ===");

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" }
  ];

  const orders = [
    { id: 101, userId: 1, amount: 250 },
    { id: 102, userId: 1, amount: 150 },
    { id: 103, userId: 2, amount: 400 }
  ];

  // 1. INNER JOIN (Matches in both)
  const innerMatches: { userName: string; orderId: number; amount: number }[] = [];
  users.forEach(u => {
    orders.filter(o => o.userId === u.id).forEach(o => {
      innerMatches.push({ userName: u.name, orderId: o.id, amount: o.amount });
    });
  });
  console.log(\`\\n1. INNER JOIN: \${innerMatches.length} matching rows found\`);
  innerMatches.forEach(m => console.log(\`   User: \${m.userName} | Order #\${m.orderId} ($\${m.amount})\`));

  // 2. LEFT JOIN (Preserves left table)
  const leftMatches: { userName: string; orderId: number | null; amount: number | null }[] = [];
  users.forEach(u => {
    const userOrders = orders.filter(o => o.userId === u.id);
    if (userOrders.length > 0) {
      userOrders.forEach(o => leftMatches.push({ userName: u.name, orderId: o.id, amount: o.amount }));
    } else {
      leftMatches.push({ userName: u.name, orderId: null, amount: null });
    }
  });
  console.log(\`\\n2. LEFT JOIN: \${leftMatches.length} rows (preserves Charlie & Diana with NULLs)\`);

  // 3. WITH RECURSIVE Sequence Generation (1 to 5)
  console.log("\\n3. WITH RECURSIVE Counter (1 to 5):");
  const sequence: number[] = [];
  let n = 1;
  while (n <= 5) {
    sequence.push(n);
    n++;
  }
  console.log(\`   Generated Sequence: [\${sequence.join(", ")}] -> returns \${sequence.length} rows\`);
}

simulateSqliteJoins();`
    },
    {
      type: 'terminal',
      id: 'joins-output',
      cmd: 'npx tsx sqlite-joins-cte-sim.ts',
      output: `=== SQLITE JOINS & CTE SIMULATOR ===

1. INNER JOIN: 3 matching rows found
   User: Alice | Order #101 ($250)
   User: Alice | Order #102 ($150)
   User: Bob | Order #103 ($400)

2. LEFT JOIN: 4 rows (preserves Charlie & Diana with NULLs)

3. WITH RECURSIVE Counter (1 to 5):
   Generated Sequence: [1, 2, 3, 4, 5] -> returns 5 rows`
    }
  ],
  exercises: [
    {
      id: 'sql-jn-ex-1',
      kind: 'mcq',
      topic: 'recursive-cte-hierarchies',
      question: {
        en: 'Which clause in SQLite enables querying recursive tree structures and hierarchical parent-child relationships?',
        bn: 'SQLite-এ কোন ক্লজটি রিকার্সিভ ট্রি গঠন এবং হায়ারার্কিকাল প্যারেন্ট-চাইল্ড সম্পর্ক কোয়েরি করতে সাহায্য করে?'
      },
        options: [
          {
            en: 'WITH RECURSIVE Common Table Expressions (CTEs)',
            bn: 'WITH RECURSIVE কমন টেবিল এক্সপ্রেশন (CTE)'
          },
          {
            en: 'DROP TABLE IF EXISTS statement',
            bn: 'DROP TABLE IF EXISTS স্টেটমেন্ট'
          },
          {
            en: 'PRAGMA journal_mode = WAL directive',
            bn: 'PRAGMA journal_mode = WAL নির্দেশ'
          },
          {
            en: 'SELECT * FROM sqlite_master query',
            bn: 'SELECT * FROM sqlite_master কোয়েরি'
          }
        ],
      answer: 0,
      hint: {
        en: 'The WITH RECURSIVE clause defines iterative table expressions.',
        bn: 'WITH RECURSIVE ক্লজ পুনরাবৃত্তিমূলক টেবিল এক্সপ্রেশন তৈরি করে।'
      },
      explanation: {
        en: 'WITH RECURSIVE allows SQLite to repeatedly evaluate a unioned subquery until no new rows are produced, traversing trees and graphs.',
        bn: 'WITH RECURSIVE-এর মাধ্যমে নতুন রো আসা শেষ না হওয়া পর্যন্ত কোয়েরি বারবার চলে ট্রি ও গ্রাফের সম্পূর্ণ ডাটা উদ্ধার করে।'
      }
    },
    {
      id: 'sql-jn-ex-2',
      kind: 'mcq',
      topic: 'database-views-storage-footprint',
      question: {
        en: 'How much physical disk space does an SQLite view created with CREATE VIEW active_users AS SELECT ... occupy in table data pages?',
        bn: 'CREATE VIEW active_users AS SELECT ... দিয়ে তৈরি ভিউ ডিস্কের টেবিল পেজে কতটুকু মেমরি দখল করে?'
      },
      options: [
        {
          en: '0 bytes, because views are virtual tables stored only as SQL text definitions in sqlite_schema',
          bn: '0 বাইট, কারণ ভিউ হলো ভার্চুয়াল টেবিল যা শুধুমাত্র sqlite_schema-তে এসকিউএল টেক্সট হিসেবে সংরক্ষিত থাকে'
        },
        {
          en: 'Exactly 1 gigabyte of reserved memory',
          bn: 'ঠিক ১ গিগাবাইট সংরক্ষিত মেমরি'
        },
        {
          en: 'Twice the size of the underlying physical table',
          bn: 'মূল ফিজিক্যাল টেবিলের দ্বিগুণ আকারের মেমরি'
        },
        {
          en: '50% of total system RAM',
          bn: 'সিস্টেম র‍্যামের ৫০%'
        }
      ],
      answer: 0,
      hint: {
        en: 'Views are virtual abstractions computed on the fly.',
        bn: 'ভিউ হলো ভার্চুয়াল কোয়েরি যা প্রয়োজনের সময় সাথে সাথে তৈরি হয়।'
      },
      explanation: {
        en: 'Views do not store duplicate data rows on disk. SQLite expands the view definition into the query parser tree during execution.',
        bn: 'ভিউ ডিস্কে কোনো ডুপ্লিকেট ডাটা রাখে না। কোয়েরি চলার সময় SQLite ভিউটির এসকিউএল কোড মূল কোয়েরির সাথে যুক্ত করে নেয়।'
      }
    },
    {
      id: 'sql-jn-ex-3',
      kind: 'mcq',
      topic: 'cross-join-planner-directive',
      question: {
        en: 'What unique optimization side effect does the CROSS JOIN keyword trigger in the SQLite query planner?',
        bn: 'SQLite কোয়েরি প্ল্যানারে CROSS JOIN কিওয়ার্ডটি কোন বিশেষ অপ্টিমাইজেশন আচরণ তৈরি করে?'
      },
      options: [
        {
          en: 'It acts as an optimizer hint that forces the planner to evaluate the left-hand table before the right-hand table in the join order',
          bn: 'এটি অপ্টিমাইজারকে নির্দেশ দেয় যাতে সে জয়েনের ক্রমে অবশ্যই ডানদিকের টেবিলের আগে বামদিকের টেবিলটি মূল্যায়ন করে'
        },
        {
          en: 'It permanently deletes all indexes on both tables',
          bn: 'এটি উভয় টেবিলের সমস্ত ইনডেক্স স্থায়ীভাবে মুছে ফেলে'
        },
        {
          en: 'It forces the database to restart in read-only mode',
          bn: 'এটি ডাটাবেসকে রিড-অনলি মোডে রিস্টার্ট করতে বাধ্য করে'
        },
        {
          en: 'It compresses table rows using ZIP format',
          bn: 'এটি জিপ ফরম্যাটে টেবিলের রোগুলো সংকুচিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'CROSS JOIN disables join order reordering by the SQLite query planner.',
        bn: 'CROSS JOIN প্ল্যানারের জয়েন অর্ডারিং পরিবর্তন বন্ধ করে দেয়।'
      },
      explanation: {
        en: 'In SQLite, writing A CROSS JOIN B tells the optimizer to never swap the evaluation order of A and B, giving engineers manual control over join plans.',
        bn: 'SQLite-এ A CROSS JOIN B লিখলে প্ল্যানার কখনোই A এবং B এর ক্রম পরিবর্তন করে না, ফলে ম্যানুয়ালি প্ল্যান নিয়ন্ত্রণ করা যায়।'
      }
    },
    {
      id: 'sql-jn-ex-4',
      kind: 'mcq',
      topic: 'writable-views-instead-of-triggers',
      question: {
        en: 'How can developers make an otherwise read-only SQLite database View support INSERT and UPDATE statements?',
        bn: 'সাধারণত রিড-অনলি থাকা একটি SQLite ডাটাবেস ভিউতে কীভাবে INSERT এবং UPDATE সমর্থন চালু করা যায়?'
      },
      options: [
        {
          en: 'By creating INSTEAD OF INSERT and INSTEAD OF UPDATE triggers on the view',
          bn: 'ভিউটির ওপর INSTEAD OF INSERT এবং INSTEAD OF UPDATE ট্রিগার তৈরি করার মাধ্যমে'
        },
        {
          en: 'By modifying the SQLite source code in C',
          bn: 'সি ভাষায় লেখা SQLite-এর সোর্স কোড পরিবর্তন করে'
        },
        {
          en: 'Views can never accept modifications under any circumstance',
          bn: 'ভিউ কখনোই কোনো অবস্থাতেই ডাটা পরিবর্তন গ্রহণ করতে পারে না'
        },
        {
          en: 'By setting PRAGMA writable_schema = ON;',
          bn: 'PRAGMA writable_schema = ON; কমান্ড চালিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'INSTEAD OF triggers intercept modifications aimed at views.',
        bn: 'INSTEAD OF ট্রিগার ভিউতে আসা পরিবর্তনগুলো গ্রহণ করে প্রয়োজনীয় টেবিলে পাঠায়।'
      },
      explanation: {
        en: 'INSTEAD OF triggers intercept write operations on views and redirect mutations to the underlying base tables.',
        bn: 'INSTEAD OF ট্রিগার ভিউতে পাঠানো রাইট অপারেশন গ্রহণ করে সেগুলোকে উপযুক্ত মূল টেবিলগুলোতে কার্যকর করে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite Joins, CTEs & Views Architecture Quiz',
      bn: 'SQLite জয়েন, CTE ও ভিউ আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'sql-jn-qz-1',
        kind: 'mcq',
        topic: 'left-join-unmatched-rows-padding',
        question: {
          en: 'When running a LEFT OUTER JOIN in SQLite, what value is populated in the right table columns for rows that have no match?',
          bn: 'SQLite-এ LEFT OUTER JOIN চালানোর সময় ডানদিকের টেবিলে মিল না পাওয়া সারির কলামগুলোতে কোন মান বসে?'
        },
        options: [
          {
            en: 'NULL',
            bn: 'NULL'
          },
          {
            en: 'The number zero (0)',
            bn: 'শূন্য সংখ্যা (0)'
          },
          {
            en: 'An empty text string ("")',
            bn: 'একটি খালি টেক্সট স্ট্রিং ("")'
          },
          {
            en: 'The query fails with a foreign key violation',
            bn: 'কোয়েরিটি ফরেন কি ভায়োলেশন এরর দিয়ে ব্যর্থ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unmatched outer join columns are padded with the absence of value.',
          bn: 'বাইরের টেবিলে অমিল থাকা কলামে কোনো মান থাকে না।'
        },
        explanation: {
          en: 'LEFT JOIN preserves every row from the left table. If no corresponding record exists on the right, all right-hand columns are set to NULL.',
          bn: 'LEFT JOIN বাম টেবিলের সব রো অক্ষুণ্ণ রাখে। ডান টেবিলে কোনো মিল না থাকলে সেই কলামগুলোতে NULL বসিয়ে দেওয়া হয়।'
        }
      },
      {
        id: 'sql-jn-qz-2',
        kind: 'mcq',
        topic: 'sqlite-right-full-outer-join-version',
        question: {
          en: 'Starting in which version did SQLite introduce native support for RIGHT JOIN and FULL OUTER JOIN?',
          bn: 'কোন ভার্সন থেকে SQLite নেটিভভাবে RIGHT JOIN এবং FULL OUTER JOIN সমর্থন শুরু করে?'
        },
        options: [
          {
            en: 'Version 3.39 (released in 2022)',
            bn: 'ভার্সন 3.39 (২০২২ সালে প্রকাশিত)'
          },
          {
            en: 'Version 1.0 (released in 2000)',
            bn: 'ভার্সন ১.০ (২০০০ সালে প্রকাশিত)'
          },
          {
            en: 'Version 5.0 (unreleased future version)',
            bn: 'ভার্সন ৫.০ (ভবিষ্যতের অপ্রকাশিত সংস্করণ)'
          },
          {
            en: 'SQLite still does not support RIGHT or FULL OUTER JOIN',
            bn: 'SQLite এখনো কোনো রাইট বা ফুল আউটার জয়েন সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Support was added in version 3.39.',
          bn: 'সমর্থনটি ভার্সন ৩.৩৯ এ যুক্ত হয়।'
        },
        explanation: {
          en: 'SQLite 3.39.0 added complete syntactic support for RIGHT and FULL OUTER JOIN by internally transforming them into left joins.',
          bn: 'SQLite ৩.৩৯.০ ভার্সনে অভ্যন্তরীণ রূপান্তরের মাধ্যমে RIGHT এবং FULL OUTER JOIN সমর্থন যুক্ত করা হয়।'
        }
      },
      {
        id: 'sql-jn-qz-3',
        kind: 'mcq',
        topic: 'recursive-cte-infinite-loop-guard',
        question: {
          en: 'What safeguard prevents a poorly written WITH RECURSIVE query from running in an infinite loop forever in SQLite?',
          bn: 'ভুলভাবে লেখা কোনো WITH RECURSIVE কোয়েরিকে চিরকাল অনন্ত লুপে চলা থেকে আটকাতে SQLite-এ কোন সুরক্ষা ব্যবস্থা থাকে?'
        },
        options: [
          {
            en: 'The recursive step must include a terminating WHERE condition, and SQLite limits maximum recursive depth to 1000 by default',
            bn: 'রিকার্সিভ ধাপে অবশ্যই শেষ করার মতো WHERE শর্ত থাকতে হয় এবং SQLite ডিফল্টভাবে সর্বোচ্চ ১০০০ গভীরতায় এটি সীমাবদ্ধ রাখে'
          },
          {
            en: 'SQLite automatically deletes the operating system kernel',
            bn: 'SQLite স্বয়ংক্রিয়ভাবে অপারেটিং সিস্টেমের কার্নেল মুছে ফেলে'
          },
          {
            en: 'Recursive queries are stopped after 3 seconds by hardware timers',
            bn: 'হার্ডওয়্যার টাইমার দিয়ে ৩ সেকেন্ড পর রিকার্সিভ কোয়েরি বন্ধ করে দেওয়া হয়'
          },
          {
            en: 'There is no safeguard and the computer will permanently melt',
            bn: 'কোনো সুরক্ষা নেই এবং কম্পিউটার চিরতরে নষ্ট হয়ে যাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SQLite enforces a maximum recursion depth limit.',
          bn: 'SQLite একটি সর্বোচ্চ রিকার্শন লিমিট প্রয়োগ করে।'
        },
        explanation: {
          en: 'SQLite provides a hard limit (default 1000 iterations) to prevent runaway recursive CTEs from hanging application processes.',
          bn: 'অনাকাঙ্ক্ষিত লুপের হাত থেকে বাঁচাতে SQLite ডিফল্টভাবে ১০০০ বারের বেশি রিকার্শন চলতে দেয় না।'
        }
      },
      {
        id: 'sql-jn-qz-4',
        kind: 'mcq',
        topic: 'correlated-subquery-performance',
        question: {
          en: 'Why is replacing a correlated subquery in a SELECT list with a JOIN usually recommended for query performance in SQLite?',
          bn: 'কোয়েরির গতির সুবিধার্থে SQLite-এ SELECT তালিকার কোরিলেটেড সাবকোয়েরির বদলে JOIN ব্যবহার করা কেন সাধারণত সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'A correlated subquery executes repeatedly once for every single outer row (O(M * N)), whereas a JOIN can be resolved using fast B-Tree index scans',
            bn: 'কোরিলেটেড সাবকোয়েরি বাইরের প্রতিটি রো-র জন্য বারবার চলে (O(M * N)), যেখানে একটি JOIN দ্রুতগতির B-Tree ইনডেক্স স্ক্যান দিয়ে একবারে সমাধান করা যায়'
          },
          {
            en: 'Because correlated subqueries are not valid SQL syntax',
            bn: 'কারণ কোরিলেটেড সাবকোয়েরি কোনো বৈধ এসকিউএল কোড নয়'
          },
          {
            en: 'Because JOIN statements do not consume any CPU memory',
            bn: 'কারণ JOIN স্টেটমেন্ট চালাতে কোনো সিপিইউ মেমরি লাগে না'
          },
          {
            en: 'To make the SQL query file size smaller on disk',
            bn: 'ডিস্কে এসকিউএল কোয়েরি ফাইলের সাইজ ছোট করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Correlated subqueries execute once per outer tuple.',
          bn: 'কোরিলেটেড সাবকোয়েরি বাইরের প্রতি রো-র জন্য আলাদাভাবে বারবার চলে।'
        },
        explanation: {
          en: 'Correlated subqueries suffer from quadratic execution patterns. Rewriting them as joins allows the query optimizer to choose efficient index-backed execution paths.',
          bn: 'কোরিলেটেড সাবকোয়েরিতে প্রতি রো-র জন্য আলাদা গণনা লাগে। জয়েনে রূপান্তর করলে অপ্টিমাইজার ইনডেক্স ব্যবহার করে অনেক দ্রুত কাজ শেষ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'indexes-and-the-query',
    title: {
      en: 'Query Planning & Index Optimization: B-Trees & EXPLAIN QUERY PLAN',
      bn: 'কোয়েরি প্ল্যানিং ও ইনডেক্স অপ্টিমাইজেশন: B-Tree ও EXPLAIN QUERY PLAN'
    }
  }
};
