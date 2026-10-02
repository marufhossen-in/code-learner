import type { Lesson } from '../../../lib/types';

export const EntityFrameworkAndTheDbcontextLesson: Lesson = {
  slug: 'entity-framework-and-the-dbcontext',
  tech: 'dotnet',
  title: {
    en: 'Entity Framework Core & DbContext Mastery',
    bn: 'Entity Framework Core এবং DbContext মাস্টারি'
  },
  summary: {
    en: 'Master enterprise relational data access with Entity Framework Core. Model relational domains using Fluent API, understand change tracking mechanisms, prevent memory bloat with AsNoTracking, eliminate N+1 query disasters with Split Queries, and execute safe database schema migrations.',
    bn: 'Entity Framework Core দিয়ে এন্টারপ্রাইজ রিলেশনাল ডেটাবেস পরিচালনা শিখুন। Fluent API দিয়ে রিলেশনাল ডোমেইন মডেলিং, চেঞ্জ ট্র্যাকিং মেকানিজম, AsNoTracking দিয়ে মেমোরি সাশ্রয়, Split Queries দিয়ে N+1 কুয়েরি দূরীকরণ এবং নিরাপদ স্কিমা মাইগ্রেশন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'dbcontext-and-change-tracking-heading',
      text: {
        en: 'DbContext, Entity States, and Change Tracking',
        bn: 'DbContext, এন্টিটি স্টেট এবং চেঞ্জ ট্র্যাকিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Entity Framework Core (EF Core) is the modern object-relational mapping (ORM) library for .NET. The heart of EF Core is the DbContext class, which combines the Unit of Work and Repository design patterns. When an entity is queried from a DbSet, the internal Change Tracker records an immutable snapshot of its original property values. The tracker assigns the entity 1 of 5 states: Unchanged, Added, Modified, Deleted, or Detached. When developers invoke SaveChangesAsync(), the Change Tracker executes DetectChanges, computes delta modifications against snapshots, and emits batched SQL statements wrapped within a single atomic database transaction.',
        bn: 'Entity Framework Core (সংক্ষেপে EF Core) হলো .NET-এর আধুনিক object-relational mapping (ORM) ডেটাবেস লাইব্রেরি। EF Core-এর প্রাণকেন্দ্র হলো DbContext ক্লাস, যা একই সাথে Unit of Work এবং Repository ডিজাইন প্যাটার্ন বাস্তবায়ন করে। যখন কোনো DbSet থেকে ডেটা কোয়েরি করা হয়, তখন অভ্যন্তরীণ চেঞ্জ ট্র্যাকার (Change Tracker) অবজেক্টের প্রাথমিক অবস্থার একটি অপরিবর্তনীয় স্ন্যাপশট সংরক্ষণ করে। ট্র্যাকার প্রতিটি এন্টিটিকে ৫ টি স্টেটের ১ টি প্রদান করে: Unchanged, Added, Modified, Deleted, অথবা Detached। ডেভেলপার SaveChangesAsync() কল করলে চেঞ্জ ট্র্যাকার প্রতিটি পরিবর্তনের পার্থক্য হিসাব করে এবং একটিমাত্র ট্রানজ্যাকশনে ব্যাচ এসকিউএল (SQL) স্টেটমেন্ট ডেটাবেসে পাঠায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-step execution lifecycle of the Entity Framework Core Change Tracker during query, mutation, and atomic database persistence.',
        bn: 'চিত্র ১: ডেটা কোয়েরি, পরিবর্তন এবং সেভ করার সময় Entity Framework Core চেঞ্জ ট্র্যাকারের ৪-ধাপের কার্যচক্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">EF CORE CHANGE TRACKER &amp; PERSISTENCE LIFECYCLE</text>

  <!-- Step 1: Query Execution -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Query Materialization</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Users.FindAsync(42)</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">SELECT * FROM Users</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Reads DB Row</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Hydrates C# Object</text>
  </g>

  <!-- Step 2: Snapshot Created -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Change Tracking</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">State = Unchanged</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Takes Memory Snapshot</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Tracks Property Values</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Unit of Work Scope</text>
  </g>

  <!-- Step 3: In-Memory Mutation -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Mutation</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">user.Email = "new@..."</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">State = Modified</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">DetectChanges Identifies</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Dirty Property Tracked</text>
  </g>

  <!-- Step 4: Batch Commit -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Commit</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">SaveChangesAsync()</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">UPDATE Users SET ...</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">Single Atomic Trans</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Database Persisted</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'asnotracking-and-split-queries-heading',
      text: {
        en: 'High Performance: AsNoTracking and Split Queries',
        bn: 'উচ্চ পারফরম্যান্স: AsNoTracking এবং Split Queries'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput read-heavy APIs, tracking entities creates unnecessary memory allocations and garbage collection pressure. Appending ".AsNoTracking()" instructs EF Core to materialize entities without allocating snapshots inside the Change Tracker, speeding up queries by up to 3 times. Another frequent performance bottleneck is the Cartesian explosion when querying related collections using multiple ".Include()" calls. EF Core solves this with Split Queries (".AsSplitQuery()"). Instead of generating a massive SQL JOIN that duplicates parent rows millions of times across the wire, EF Core executes separate, targeted SQL queries per collection and stitches them together efficiently in memory.',
        bn: 'উচ্চগতির রিড-হেভি এপিআইগুলোতে সব অবজেক্ট ট্র্যাক করলে অনর্থক প্রচুর মেমোরি খরচ হয় এবং গার্বেজ কালেক্টরের ওপর চাপ পড়ে। কুয়েরির শেষে ".AsNoTracking()" যোগ করলে EF Core কোনো স্ন্যাপশট না বানিয়ে সরাসরি ডেটা ফেরত দেয়, যা কুয়েরির গতিকে ৩ গুণ পর্যন্ত বাড়িয়ে দিতে পারে। আরেকটি পরিচিত সমস্যা হলো একাধিক ".Include()" ব্যবহার করার ফলে সৃষ্ট কার্টেসিয়ান বিস্ফোরণ (Cartesian explosion)। এর ফলে এসকিউএল জয়েনে মূল ডেটা বারবার ডুপ্লিকেট হয়ে নেটওয়ার্ক ট্র্যাফিক অপচয় করে। EF Core এর সমাধান হিসেবে Split Queries (".AsSplitQuery()") প্রদান করে। এটি একটি বিশাল জয়েন কুয়েরির বদলে প্রতিটি কালেকশনের জন্য আলাদা এসকিউএল কুয়েরি চালায় এবং মেমোরিতে সেগুলো সুন্দরভাবে জোড়া লাগায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Entity Framework Core change tracking: Original snapshot comparison, state transitions (Unchanged to Modified), and batched SQL generation.',
        bn: 'Entity Framework Core চেঞ্জ ট্র্যাকিং, স্ন্যাপশট তুলনা, স্টেট রূপান্তর এবং ব্যাচ এসকিউএল স্টেটমেন্ট তৈরির TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Entity Framework Core Change Tracker & Unit of Work

export type EntityState = 'Unchanged' | 'Added' | 'Modified' | 'Deleted' | 'Detached';

export interface UserEntity {
  id: number;
  name: string;
  email: string;
}

export class ChangeTrackerSimulator {
  private snapshots: Map<number, UserEntity> = new Map();
  private trackedEntities: Map<number, { entity: UserEntity; state: EntityState }> = new Map();

  // 1. Simulating Query Materialization with tracking
  public attachTracked(entity: UserEntity): void {
    // Clone snapshot for diffing later
    this.snapshots.set(entity.id, { ...entity });
    this.trackedEntities.set(entity.id, { entity, state: 'Unchanged' });
  }

  // 2. Simulating DetectChanges() during SaveChangesAsync()
  public detectChanges(): string[] {
    const generatedSqlStatements: string[] = [];

    for (const [id, entry] of this.trackedEntities.entries()) {
      const snapshot = this.snapshots.get(id);
      if (!snapshot) continue;

      if (entry.entity.name !== snapshot.name || entry.entity.email !== snapshot.email) {
        entry.state = 'Modified';
        generatedSqlStatements.push(
          \`UPDATE Users SET Name = '\${entry.entity.name}', Email = '\${entry.entity.email}' WHERE Id = \${id};\`
        );
      }
    }

    return generatedSqlStatements;
  }
}

// Execution demonstration
const tracker = new ChangeTrackerSimulator();

// Step 1: User 42 loaded from database
const user42: UserEntity = { id: 42, name: 'Alice Smith', email: 'alice@example.com' };
tracker.attachTracked(user42);
console.log('Initial Entity Loaded into DbContext:', user42.name);

// Step 2: Mutating user properties in business code
user42.email = 'alice.smith@enterprise.corp';

// Step 3: Triggering SaveChangesAsync()
const pendingSql = tracker.detectChanges();
console.log('Generated Batched SQL Count:', pendingSql.length); // 1
console.log('Emitted SQL Command:', pendingSql[0]);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'DbContext',
          def: {
            en: 'Primary class in EF Core orchestrating database connections, queries, entity tracking, and atomic transactions.',
            bn: 'EF Core-এর মূল ক্লাস যা ডেটাবেস সংযোগ, কোয়েরি, এন্টিটি ট্র্যাকিং ও লেনদেন পরিচালনা করে।'
          }
        },
        {
          term: 'Change Tracker',
          def: {
            en: 'Internal engine comparing active entity properties against original snapshots to identify database updates.',
            bn: 'অভ্যন্তরীণ ইঞ্জিন যা আদি স্ন্যাপশটের সাথে বর্তমান মানের তুলনা করে আপডেট শনাক্ত করে।'
          }
        },
        {
          term: 'AsNoTracking',
          def: {
            en: 'LINQ operator disabling change tracker snapshots for read-only queries, reducing memory usage and allocations.',
            bn: 'অপারেটর যা শুধু পড়ার জন্য করা কুয়েরিতে স্ন্যাপশট বন্ধ করে মেমোরি সাশ্রয় করে।'
          }
        },
        {
          term: 'Split Queries',
          def: {
            en: 'EF Core query mode (.AsSplitQuery) loading child collections via separate SQL statements to prevent Cartesian join explosions.',
            bn: 'কুয়েরি মোড যা জয়েনের বদলে পৃথক কুয়েরি চালিয়ে ডেটার অযাচিত ডুপ্লিকেশন প্রতিরোধ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'asnotracking-read-only-performance-ex1',
      kind: 'mcq',
      topic: 'asnotracking-read-only-queries-memory',
      question: {
        en: 'Why should software engineers append ".AsNoTracking()" to Entity Framework Core read-only queries in Web APIs?',
        bn: 'ওয়েব এপিআই-তে শুধু পড়ার জন্য করা Entity Framework Core কুয়েরির শেষে ইঞ্জিনিয়ারদের কেন ".AsNoTracking()" যোগ করা উচিত?'
      },
      options: [
        {
          en: 'It stops EF Core from generating in-memory tracking snapshots and identity map entries, cutting memory usage and accelerating query execution speed',
          bn: 'এটি মেমোরিতে অনর্থক ট্র্যাকিং স্ন্যাপশট তৈরি বন্ধ করে দেয়, ফলে মেমোরি খরচ বাঁচে এবং কুয়েরির গতি উল্লেখযোগ্যভাবে বৃদ্ধি পায়'
        },
        {
          en: 'It encrypts the database tables with an SHA-512 password',
          bn: 'এটি ডেটাবেসের টেবিলগুলোকে SHA-512 পাসওয়ার্ড দিয়ে লক করে'
        },
        {
          en: 'It prevents any user from viewing the web page',
          bn: 'এটি কোনো ব্যবহারকারীকে ওয়েব পেজ দেখতে বাধা দেয়'
        },
        {
          en: 'AsNoTracking can only be used with SQLite databases',
          bn: 'AsNoTracking কেবল SQLite ডেটাবেসে ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'AsNoTracking bypasses tracking snapshots, saving heap memory on read operations.',
        bn: 'রিড অপারেশনে স্ন্যাপশট না বানালে প্রচুর হিপ মেমোরি ও প্রসেসিং সময় বাঁচে।'
      },
      explanation: {
        en: 'For read-only operations where entities will not be modified or saved back, AsNoTracking avoids snapshot overhead, yielding up to 3x faster LINQ execution.',
        bn: 'যে ডেটা মডিফাই করার প্রয়োজন নেই, সেগুলোকে ট্র্যাক না করাই সর্বোত্তম ক্লাউড প্র্যাকটিস।'
      }
    },
    {
      id: 'split-queries-cartesian-explosion-ex2',
      kind: 'mcq',
      topic: 'split-queries-prevent-cartesian-explosion',
      question: {
        en: 'What dangerous database issue does EF Core\'s ".AsSplitQuery()" feature eliminate when loading multiple related child collections?',
        bn: 'একাধিক চাইল্ড কালেকশন লোড করার সময় EF Core-এর ".AsSplitQuery()" ফিচারটি কোন মারাত্মক ডেটাবেস সমস্যা দূর করে?'
      },
      options: [
        {
          en: 'Cartesian explosion, where SQL multi-table JOINs duplicate parent columns exponentially across thousands of rows transmitted over the network',
          bn: 'কার্টেসিয়ান বিস্ফোরণ (Cartesian explosion), যেখানে একাধিক টেবিলের JOIN-এর কারণে মূল ডেটা হাজার হাজার বার ডুপ্লিকেট হয়ে নেটওয়ার্ককে জ্যাম করে ফেলে'
        },
        {
          en: 'Overheating of the server CPU fan',
          bn: 'সার্ভারের সিপিইউ ফ্যান অতিরিক্ত গরম হয়ে যাওয়া'
        },
        {
          en: 'Accidental deletion of all database passwords',
          bn: 'ডেটাবেসের সমস্ত পাসওয়ার্ড দুর্ঘটনাবশত মুছে যাওয়া'
        },
        {
          en: 'Split queries are unsupported in modern C#',
          bn: 'আধুনিক C# এ স্প্লিট কুয়েরি সমর্থিত নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Split queries split JOINs into separate SQL queries to prevent row duplication.',
        bn: 'স্প্লিট কুয়েরি বিশাল একমুখী জয়েন পরিহার করে পৃথক ছোট কুয়েরির মাধ্যমে ডেটা আনে।'
      },
      explanation: {
        en: 'When querying multiple 1-to-many collections simultaneously, a single SQL query produces an exponential Cartesian product. AsSplitQuery issues isolated queries safely.',
        bn: 'প্রতিটি কালেকশনের জন্য আলাদা কুয়েরি চালিয়ে ক্লাউড ব্যান্ডউইথ ও মেমোরি দুটিই সাশ্রয় করা হয়।'
      }
    },
    {
      id: 'ef-core-migrations-idempotent-script-ex3',
      kind: 'mcq',
      topic: 'idempotent-migrations-production-deployment',
      question: {
        en: 'How should production database schema migrations be safely applied in enterprise CI/CD deployment pipelines?',
        bn: 'এন্টারপ্রাইজ CI/CD ডেপ্লয়মেন্ট পাইপলাইনে প্রোডাকশন ডেটাবেস স্কিমা মাইগ্রেশন কীভাবে সবচেয়ে নিরাপদ উপায়ে প্রয়োগ করা উচিত?'
      },
      options: [
        {
          en: 'Generate idempotent SQL migration scripts using "dotnet ef migrations script --idempotent" and execute them via controlled database deployment jobs',
          bn: '"dotnet ef migrations script --idempotent" কমান্ড দিয়ে আইডেমপোটেন্ট এসকিউএল স্ক্রিপ্ট তৈরি করে নিয়ন্ত্রিত ডেটাবেস ডেপ্লয়মেন্ট জবের মাধ্যমে চালানো'
        },
        {
          en: 'Calling "context.Database.EnsureDeleted()" on application startup',
          bn: 'অ্যাপ চালুর সাথে সাথে "context.Database.EnsureDeleted()" কল করে'
        },
        {
          en: 'Manually editing binary .dll files with a hex editor',
          bn: 'হেক্স এডিটর দিয়ে ম্যানুয়ালি বাইনারি ডেল ফাইল এডিট করে'
        },
        {
          en: 'Never migrating databases in production environments',
          bn: 'প্রোডাকশন পরিবেশে ডেটাবেস মাইগ্রেশন পুরোপুরি বন্ধ রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Idempotent SQL scripts can be safely inspected and run by DBAs and CI/CD pipelines.',
        bn: 'আইডেমপোটেন্ট এসকিউএল স্ক্রিপ্ট নিরাপদে বারবার চালানো যায় এবং এটি ডেটাবেস নষ্ট করে না।'
      },
      explanation: {
        en: 'Idempotent scripts inspect the "__EFMigrationsHistory" table before applying each migration step, preventing duplicate execution and allowing zero-downtime updates.',
        bn: 'কোন মাইগ্রেশনগুলো আগে রান হয়েছে তা যাচাই করে কেবল নতুন পরিবর্তনগুলোই এটি কার্যকর করে।'
      }
    },
    {
      id: 'fluent-api-vs-dataannotations-ex4',
      kind: 'mcq',
      topic: 'fluent-api-onmodelcreating-advantages',
      question: {
        en: 'Why do enterprise architects prefer configuring domain entities using the Fluent API in "OnModelCreating" rather than DataAnnotations attributes?',
        bn: 'এন্টারপ্রাইজ আর্কিটেক্টরা ডেটাবেস কনফিগারেশনের জন্য DataAnnotations-এর চেয়ে "OnModelCreating"-এ Fluent API ব্যবহার করা কেন বেশি পছন্দ করেন?'
      },
      options: [
        {
          en: 'It keeps core domain entities clean and decoupled from database infrastructure concerns, while supporting advanced configurations like composite keys, shadow properties, and custom indexes',
          bn: 'এটি ডোমেইন এন্টিটিগুলোকে ডেটাবেসের অবকাঠামোগত জটিলতা থেকে মুক্ত রাখে এবং কম্পোজিট কি, শ্যাডো প্রপার্টি ও কাস্টম ইনডেক্সের মতো জটিল ফিচার সমর্থন করে'
        },
        {
          en: 'DataAnnotations only work on Microsoft Windows XP',
          bn: 'DataAnnotations কেবল উইন্ডোজ এক্সপিতে কাজ করে'
        },
        {
          en: 'Fluent API deletes the database every 24 hours',
          bn: 'Fluent API প্রতি ২৪ ঘণ্টায় ডেটাবেস মুছে ফেলে'
        },
        {
          en: 'Fluent API is written in JavaScript',
          bn: 'Fluent API জাভাস্ক্রিপ্ট ভাষায় লেখা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fluent API separates database configuration from clean domain POCO classes.',
        bn: 'Fluent API ডোমেইন ক্লাসগুলোকে পুরোপুরি পরিচ্ছন্ন রেখে আলাদা কনফিগারেশনে ডেটাবেস নিয়ম নির্ধারণ করে।'
      },
      explanation: {
        en: 'Fluent API preserves Domain-Driven Design (DDD) purity by isolating mapping configurations inside dedicated IEntityTypeConfiguration classes.',
        bn: 'কোডের স্থাপত্য পরিচ্ছন্ন ও পরিবর্তনশীল রাখতে Fluent API ব্যবহার করাই আধুনিক আদর্শ।'
      }
    }
  ],
  quiz: {
    id: 'quiz-entity-framework-and-the-dbcontext',
    title: {
      en: 'Entity Framework Core & DbContext Mastery Quiz',
      bn: 'Entity Framework Core এবং DbContext কুইজ'
    },
    questions: [
      {
        id: 'quiz-dbcontext-thread-safety-pooling',
        kind: 'mcq',
        topic: 'dbcontextpooling-concurrency-safety',
        question: {
          en: 'Why must DbContext instances never be used concurrently across multiple parallel background threads?',
          bn: 'DbContext ইনস্ট্যান্স কেন কখনোই একসাথে একাধিক সমান্তরাল ব্যাকগ্রাউন্ড থ্রেডে ব্যবহার করা যাবে না?'
        },
        options: [
          {
            en: 'DbContext is fundamentally NOT thread-safe; concurrent access corrupts internal Change Tracker state and crashes underlying ADO.NET database connections',
            bn: 'DbContext স্বভাবগতভাবেই থ্রেড-নিরাপদ (thread-safe) নয়; একসাথে একাধিক থ্রেড অ্যাক্সেস করলে চেঞ্জ ট্র্যাকার নষ্ট হয়ে যায় এবং কানেকশন ক্র্যাশ করে'
          },
          {
            en: 'Because C# threads can only process mathematical numbers',
            bn: 'কারণ C# থ্রেড কেবল গাণিতিক সংখ্যা নিয়ে কাজ করতে পারে'
          },
          {
            en: 'Multi-threading causes all tables to be converted into CSV files',
            bn: 'মাল্টি-থ্রেডিং সব টেবিলকে সিএসভি ফাইলে রূপান্তর করে দেয়'
          },
          {
            en: 'DbContext requires an optical fiber network card',
            bn: 'DbContext ব্যবহারের জন্য অপটিক্যাল ফাইবার নেটওয়ার্ক কার্ড থাকা জরুরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'DbContext instances are single-threaded by design. Never share them across threads.',
          bn: 'DbContext একটি একক থ্রেডের কাজের জন্য তৈরি; মাল্টি-থ্রেডে আলাদা স্কোপ বানাতে হয়।'
        },
        explanation: {
          en: 'DbContext state tracking and socket connections are not synchronized. Multi-threaded operations trigger InvalidOperationException immediately.',
          bn: 'কানেকশন রক্ষা করতে ব্যাকগ্রাউন্ড থ্রেডে IServiceScopeFactory দিয়ে নতুন DbContext নিতে হয়।'
        }
      },
      {
        id: 'quiz-dbcontextpooling-performance-boost',
        kind: 'mcq',
        topic: 'dbcontextpooling-memory-optimization',
        question: {
          en: 'What architectural benefit does "services.AddDbContextPool<AppDbContext>()" provide over standard "AddDbContext"?',
          bn: 'সাধারণ "AddDbContext"-এর তুলনায় "services.AddDbContextPool<AppDbContext>()" কোন স্থাপত্যিক সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It recycles and reuses DbContext instances from an in-memory pool across HTTP requests, eliminating the allocation and garbage collection overhead of instantiating new contexts repeatedly',
            bn: 'এটি প্রতি রিকোয়েস্টে নতুন অবজেক্ট তৈরি না করে মেমোরি পুল থেকে পূর্ববর্তী DbContext অবজেক্ট রিসাইকেল করে ব্যবহার করে, ফলে মেমোরি অ্যালোকেশন ও গার্বেজ কালেকশন খরচ বিপুল সাশ্রয় হয়'
          },
          {
            en: 'It compresses the database size by 90 percent',
            bn: 'এটি ডেটাবেসের আকার ৯০ শতাংশ পর্যন্ত সংকুচিত করে'
          },
          {
            en: 'It allows storing images inside the computer BIOS',
            bn: 'এটি কম্পিউটারের বায়োসে ছবি সংরক্ষণ করার সুযোগ দেয়'
          },
          {
            en: 'DbContextPool only works with in-memory database mocks',
            bn: 'DbContextPool কেবল ইন-মেমোরি মক ডেটাবেসের সাথে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pooling reuses DbContext instances to cut object creation costs.',
          bn: 'পুলিং অবজেক্টের পুনর্ব্যবহার নিশ্চিত করে সার্ভারের কাজের গতি অনেক বাড়িয়ে দেয়।'
        },
        explanation: {
          en: 'DbContextPool maintains a cache of context instances, resetting their state and reusing them across requests to maximize server throughput.',
          bn: 'উচ্চ ট্রাফিকের ওয়েবসাইটে নতুন অবজেক্ট তৈরির চাপ কমাতে পুলিং একটি অপরিহার্য কৌশল।'
        }
      },
      {
        id: 'quiz-shadow-properties-audit-trail',
        kind: 'mcq',
        topic: 'shadow-properties-audit-metadata',
        question: {
          en: 'What are "Shadow Properties" in Entity Framework Core, and what is their primary use case in enterprise architectures?',
          bn: 'Entity Framework Core-এ "Shadow Properties" কী এবং এন্টারপ্রাইজ সিস্টেমে এর মূল ব্যবহার কোথায়?'
        },
        options: [
          {
            en: 'Properties mapped to database columns that are NOT defined on the C# entity class itself, commonly used for audit timestamps (CreatedAt, ModifiedBy) maintained transparently in SaveChanges',
            bn: 'এমন প্রপার্টি যা ডেটাবেস কলামে থাকে কিন্তু C# ডোমেইন ক্লাসে সংজ্ঞায়িত থাকে না; সাধারণত অডিট টাইমস্ট্যাম্প (CreatedAt, ModifiedBy) সংরক্ষণ করতে এটি ব্যবহৃত হয়'
          },
          {
            en: 'Variables that are automatically hidden by the operating system monitor',
            bn: 'এমন ভেরিয়েবল যা মনিটরের স্ক্রিন থেকে লুকিয়ে রাখা হয়'
          },
          {
            en: 'Properties that can only store negative numbers',
            bn: 'প্রপার্টি যা কেবল ঋণাত্মক সংখ্যা ধারণ করতে পারে'
          },
          {
            en: 'Shadow properties were deprecated in EF Core 7',
            bn: 'EF Core ৭ সংস্করণে শ্যাডো প্রপার্টি বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Shadow properties exist in the EF model and DB without polluting the C# class.',
          bn: 'শ্যাডো প্রপার্টি ডোমেইন ক্লাসকে পরিচ্ছন্ন রেখে ডেটাবেসের গোপন অডিট তথ্য ট্র্যাক করে।'
        },
        explanation: {
          en: 'Shadow properties keep C# domain POCOs pure while allowing EF Core infrastructure to populate audit columns automatically during SaveChanges.',
          bn: 'ডোমেইন লজিক স্পর্শ না করেই ডেটা তৈরির সময় বা ব্যবহারকারী ট্র্যাকিং করা সহজ হয়।'
        }
      },
      {
        id: 'quiz-compiled-queries-linq-speed',
        kind: 'mcq',
        topic: 'compiled-queries-ef-compileasyncquery',
        question: {
          en: 'When should high-throughput cloud services utilize "EF.CompileAsyncQuery(...)" in Entity Framework Core?',
          bn: 'উচ্চগতির ক্লাউড সার্ভিসে কখন Entity Framework Core-এর "EF.CompileAsyncQuery(...)" ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'For frequently executed, parameterized queries where caching the translated SQL query tree bypasses the LINQ expression parsing and translation overhead on every invocation',
            bn: 'ঘন ঘন চলা প্যারামিটারাইজড কুয়েরির জন্য, যেখানে আগে থেকেই কম্পাইল করা এসকিউএল কুয়েরি ট্রির ক্যাশিং প্রতিবার LINQ এক্সপ্রেশন পার্স করার বাড়তি সময় বাঁচিয়ে দেয়'
          },
          {
            en: 'When turning off the database server permanently',
            bn: 'যখন ডেটাবেস সার্ভার চিরতরে বন্ধ করে দেওয়া হয়'
          },
          {
            en: 'To translate C# LINQ queries into Python scripts',
            bn: 'C# LINQ কুয়েরিকে পাইথন স্ক্রিপ্টে রূপান্তর করতে'
          },
          {
            en: 'Compiled queries can only return single boolean values',
            bn: 'কম্পাইল করা কুয়েরি কেবল বুলিয়ান মান ফেরত দিতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compiled queries cache the translation step for maximum throughput.',
          bn: 'কম্পাইল কুয়েরি LINQ পার্সিংয়ের সময় সাশ্রয় করে প্রায় কাঁচা এসকিউএল-এর মতো গতি দেয়।'
        },
        explanation: {
          en: 'Compiling LINQ queries ahead of time completely eliminates query pipeline compilation latency, yielding near raw ADO.NET execution speeds.',
          bn: 'প্রতি সেকেন্ডে হাজার হাজার বার চলা কুয়েরিগুলোর জন্য এটি অসাধারণ গতি নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'logging-and-the-telemetry',
    title: {
      en: 'Structured Logging & OpenTelemetry',
      bn: 'স্ট্রাকচার্ড লগিং এবং ওপেন-টেলিমেট্রি'
    }
  }
};
