import type { Lesson } from '../../../lib/types';

export const MigrationsAndTheSchemaLesson: Lesson = {
  slug: 'migrations-and-the-schema',
  tech: 'laravel',
  title: {
    en: 'Database Migrations, Schema Builder & Seeders',
    bn: 'ডেটাবেস মাইগ্রেশন, স্কিমা বিল্ডার এবং সিডার'
  },
  summary: {
    en: 'Master version-controlled database schemas in Laravel: generate migrations (artisan make:migration), define table structures using Schema Blueprint ($table->id(), foreignId), execute and rollback batch migrations, and populate realistic test environments using Model Factories and Database Seeders.',
    bn: 'লারাভেলে ভার্সন-নিয়ন্ত্রিত ডেটাবেস স্কিমা আয়ত্ত করুন: মাইগ্রেশন তৈরি (artisan make:migration), স্কিমা ব্লুপ্রিন্ট দিয়ে টেবিল গঠন ($table->id(), foreignId), মাইগ্রেশন চালানো ও রোলব্যাক এবং মডেল ফ্যাক্টরি ও সিডার দিয়ে টেস্ট ডেটা তৈরি।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'migrations-concept-heading',
      text: {
        en: 'Database Migrations: Version Control for Relational Schemas',
        bn: 'ডেটাবেস মাইগ্রেশন: রিলেশনাল স্কিমার জন্য ভার্সন কন্ট্রোল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel (the web framework for PHP) treats database structure as version-controlled code through migrations. Instead of manually running raw SQL schema queries across developer machines and production servers, migrations reside as timestamped PHP classes inside database/migrations. Each migration implements an up() method (which builds tables using Schema::create) and a down() method (which reverses changes via Schema::dropIfExists). An internal migrations database table records executed filenames and integer batch numbers to prevent duplicate executions.',
        bn: 'লারাভেল (পিএইচপির ওয়েব ফ্রেমওয়ার্ক) ডেটাবেসের গঠনকে মাইগ্রেশনের মাধ্যমে ভার্সন-নিয়ন্ত্রিত কোড হিসেবে পরিচালনা করে। বিভিন্ন মেশিনে ম্যানুয়ালি এসকিউএল স্কিমা কোয়েরি চালানোর বদলে ডেটাবেস পরিবর্তনের নিয়মগুলো database/migrations ফোল্ডারে টাইমস্ট্যাম্পযুক্ত পিএইচপি ক্লাস হিসেবে সংরক্ষিত থাকে। প্রতিটি মাইগ্রেশনে একটি up() মেথড (যা Schema::create দিয়ে টেবিল বানায়) এবং একটি down() মেথড (যা Schema::dropIfExists দিয়ে পরিবর্তন বাতিল করে) থাকে। ডেটাবেসের অভ্যন্তরীণ একটি migrations টেবিল চালিত ফাইলের নাম ও ব্যাচ নম্বর রেকর্ড করে রাখে যাতে একই ফাইল দুবার না চলে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-step migration batch execution and rollback lifecycle in Laravel database architecture.',
        bn: 'চিত্র ১: লারাভেল ডেটাবেস আর্কিটেকচারে ৪ টি ধাপের মাইগ্রেশন ব্যাচ এক্সিকিউশন ও রোলব্যাক লাইফসাইকেল।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">LARAVEL MIGRATION &amp; SCHEMA BATCH LIFECYCLE</text>

  <!-- Step 1: Migration Files -->
  <g transform="translate(30, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Migration Files</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">database/migrations/</text>
    <rect x="10" y="70" width="150" height="110" rx="5" fill="#0f172a" />
    <text x="15" y="90" fill="#cbd5e1" font-size="8" font-family="monospace">2026_create_users</text>
    <text x="15" y="105" fill="#38bdf8" font-size="8" font-family="monospace">up() / down()</text>
    <text x="15" y="125" fill="#cbd5e1" font-size="8" font-family="monospace">2026_create_posts</text>
    <text x="15" y="140" fill="#38bdf8" font-size="8" font-family="monospace">foreignId('user_id')</text>
    <text x="15" y="160" fill="#cbd5e1" font-size="8" font-family="monospace">2026_create_tags</text>
    <text x="12" y="205" fill="#38bdf8" font-size="9" font-family="sans-serif">Timestamped Classes</text>
  </g>

  <!-- Step 2: Artisan Migrate -->
  <g transform="translate(230, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#d97706" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Artisan Migrate</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">php artisan migrate</text>
    <rect x="10" y="70" width="150" height="110" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="90" fill="#fbbf24" font-size="8" font-family="monospace">Checks table:</text>
    <text x="15" y="105" fill="#cbd5e1" font-size="8" font-family="monospace">'migrations'</text>
    <text x="15" y="125" fill="#fbbf24" font-size="8" font-family="monospace">Identifies un-run</text>
    <text x="15" y="140" fill="#cbd5e1" font-size="8" font-family="monospace">Executes in Batch 1</text>
    <text x="15" y="160" fill="#34d399" font-size="8" font-family="monospace">Tables created</text>
    <text x="12" y="205" fill="#fbbf24" font-size="9" font-family="sans-serif">Atomic Batch Commit</text>
  </g>

  <!-- Step 3: Schema State -->
  <g transform="translate(430, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#059669" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Schema Blueprint</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">Relational DDL</text>
    <rect x="10" y="70" width="150" height="110" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="90" fill="#34d399" font-size="8" font-family="monospace">$table-&gt;id()</text>
    <text x="15" y="110" fill="#34d399" font-size="8" font-family="monospace">$table-&gt;string()</text>
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">foreignId()-&gt;</text>
    <text x="22" y="145" fill="#34d399" font-size="8" font-family="monospace">constrained()</text>
    <text x="15" y="165" fill="#34d399" font-size="8" font-family="monospace">cascadeOnDelete()</text>
    <text x="12" y="205" fill="#34d399" font-size="9" font-family="sans-serif">Foreign Key Integrity</text>
  </g>

  <!-- Step 4: Rollback Recovery -->
  <g transform="translate(630, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#db2777" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Rollback &amp; Seed</text>
    <text x="12" y="55" fill="#f472b6" font-size="10" font-family="monospace">artisan db:seed</text>
    <rect x="10" y="70" width="160" height="110" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="15" y="90" fill="#f472b6" font-size="8" font-family="monospace">migrate:rollback</text>
    <text x="15" y="105" fill="#cbd5e1" font-size="8" font-family="monospace">Reverses Batch 1</text>
    <text x="15" y="125" fill="#38bdf8" font-size="8" font-family="monospace">User::factory()</text>
    <text x="22" y="140" fill="#38bdf8" font-size="8" font-family="monospace">-&gt;count(50)</text>
    <text x="15" y="160" fill="#34d399" font-size="8" font-family="monospace">Faker mock rows</text>
    <text x="12" y="205" fill="#f472b6" font-size="9" font-family="sans-serif">Reversible &amp; Testable</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'blueprint-and-seeders-heading',
      text: {
        en: 'Schema Blueprint Columns, Foreign Keys, and Model Factories',
        bn: 'স্কিমা ব্লুপ্রিন্ট কলাম, ফরেন কি এবং মডেল ফ্যাক্টরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Schema Blueprint class provides an expressive, database-agnostic domain language for defining columns and constraints. Setting $table->string("title", 150) allocates a varchar field capped at 150 characters. Modern foreign keys are declared concisely using $table->foreignId("user_id")->constrained()->cascadeOnDelete(), enforcing relational referential integrity at the engine level. To populate development databases with realistic data, Model Factories pair with Faker: executing User::factory()->count(50)->create() seeds 50 authentic user records instantly.',
        bn: 'স্কিমা ব্লুপ্রিন্ট ক্লাসটি ডেটাবেসের টেবিল কলাম ও শর্ত সংজ্ঞায়িত করার জন্য একটি চমৎকার মাধ্যম। $table->string("title", 150) লিখলে এটি ১৫০ অক্ষরের একটি varchar ফিল্ড তৈরি করে। আধুনিক ফরেন কি খুব সহজে $table->foreignId("user_id")->constrained()->cascadeOnDelete() সিনট্যাক্স দিয়ে ঘোষণা করা যায়, যা ডেটাবেস স্তরেই সম্পর্কের নির্ভুলতা নিশ্চিত করে। ডেভেলপমেন্ট পরিবেশে বাস্তবসম্মত ডেটা তৈরি করতে মডেল ফ্যাক্টরির সাথে ফেকার ব্যবহার করা হয়: যেমন User::factory()->count(50)->create() চালালেই সাথে সাথে ৫০ টি বাস্তবসম্মত ব্যবহারকারী রেকর্ড তৈরি হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Laravel migration batch runner, schema blueprint, and model factory seeder.',
        bn: 'লারাভেল মাইগ্রেশন ব্যাচ রানার, স্কিমা ব্লুপ্রিন্ট এবং মডেল ফ্যাক্টরি সিডারের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Migration Runner and Factory Seeder in TypeScript
interface MigrationRecord {
  migration: string;
  batch: number;
}

interface MockUser {
  id: number;
  name: string;
  email: string;
}

export class MigrationRunnerSimulator {
  private executedMigrations: MigrationRecord[] = [];
  private currentBatch = 1;
  private usersTable: MockUser[] = [];

  // Simulating: php artisan migrate
  public runMigrations(): void {
    // 2 migrations executed in Batch 1
    this.executedMigrations.push({ migration: '2026_09_30_000001_create_users_table', batch: this.currentBatch });
    this.executedMigrations.push({ migration: '2026_09_30_000002_create_posts_table', batch: this.currentBatch });
    console.log('Executed 2 migrations in Batch ' + this.currentBatch);
  }

  // Simulating: User::factory()->count(3)->create()
  public seedUsers(count: number): void {
    for (let i = 1; i <= count; i++) {
      this.usersTable.push({
        id: i,
        name: 'User ' + i,
        email: 'user' + i + '@example.com'
      });
    }
  }

  // Simulating: php artisan migrate:rollback
  public rollback(): number {
    const lastBatch = this.currentBatch;
    const rolledBack = this.executedMigrations.filter((m) => m.batch === lastBatch);
    this.executedMigrations = this.executedMigrations.filter((m) => m.batch !== lastBatch);
    this.usersTable = [];
    return rolledBack.length;
  }

  public getUsersCount(): number {
    return this.usersTable.length;
  }
}

// Execute migration lifecycle
const runner = new MigrationRunnerSimulator();

// Step 1: Run migrations in Batch 1
runner.runMigrations();

// Step 2: Seed 3 mock user records via Factory
runner.seedUsers(3);
console.log('Seeded Users in Table:', runner.getUsersCount()); // 3

// Step 3: Rollback Batch 1
const revertedCount = runner.rollback();
console.log('Migrations Reverted on Rollback:', revertedCount); // 2
console.log('Table Cleaned After Rollback:', runner.getUsersCount()); // 0`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Database Migrations',
          def: {
            en: 'Version control files defining programmatic database schema evolutions (up) and reversals (down).',
            bn: 'ভার্সন কন্ট্রোল ফাইল যা কোডের মাধ্যমে ডেটাবেস স্কিমা তৈরি (up) ও বাতিল (down) করার নিয়ম নির্দিষ্ট করে।'
          }
        },
        {
          term: 'Schema Blueprint',
          def: {
            en: 'Laravel fluent builder configuring table columns, data types, indexes, and foreign key relationships.',
            bn: 'লারাভেলের সাবলীল বিল্ডার যা টেবিল কলাম, ডেটা টাইপ, ইনডেক্স এবং ফরেন কি সম্পর্ক তৈরি করতে সাহায্য করে।'
          }
        },
        {
          term: 'Foreign Key Constraints',
          def: {
            en: 'Relational database integrity rules guaranteeing child table records reference valid parent entity primary keys.',
            bn: 'ডেটাবেস শর্ত যা নিশ্চিত করে চাইল্ড টেবিলের রেকর্ড সর্বদা মূল প্যারেন্ট টেবিলের বৈধ আইডির সাথেই যুক্ত থাকবে।'
          }
        },
        {
          term: 'Model Factories',
          def: {
            en: 'Generators creating mock Eloquent model instances populated with realistic Faker data for automated testing.',
            bn: 'লারাভেল জেনারেটর যা টেস্টিংয়ের সুবিধার্থে ফেকার দিয়ে বাস্তবসম্মত ভুয়া ডেটা তৈরি করে মডেলে যুক্ত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'migration-rollback-batch-mechanism-ex1',
      kind: 'mcq',
      topic: 'migration-rollback-batch-behavior',
      question: {
        en: 'What specific migrations does php artisan migrate:rollback reverse by default?',
        bn: 'ডিফল্টভাবে php artisan migrate:rollback কমান্ড চালালে ঠিক কোন মাইগ্রেশনগুলো বাতিল হয়?'
      },
      options: [
        {
          en: 'It reverses only the migrations that were executed during the most recent migration "batch", preserving older previous batches intact',
          bn: 'এটি কেবল সর্বশেষ "ব্যাচ"-এ চালিত মাইগ্রেশনগুলোকেই রোলব্যাক করে, পূর্বের পুরোনো ব্যাচগুলোকে অক্ষত রাখে'
        },
        {
          en: 'It drops the entire production database and deletes all backups',
          bn: 'এটি সম্পূর্ণ প্রোডাকশন ডেটাবেস মুছে ফেলে সমস্ত ব্যাকআপ নষ্ট করে দেয়'
        },
        {
          en: 'It rolls back all migrations ever created since the year 2000',
          bn: 'এটি ২০০০ সাল থেকে তৈরি হওয়া সমস্ত মাইগ্রেশন মুছে ফেলে'
        },
        {
          en: 'It rolls back exactly 1 table column at random',
          bn: 'এটি দৈবচয়ন ভিত্তিতে কেবল ১ টি টেবিল কলাম মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The migrations table assigns an incrementing batch integer to each artisan migrate execution.',
        bn: 'migrations টেবিল প্রতিবার মাইগ্রেশন চালানোর সময় একটি নির্দিষ্ট ব্যাচ নম্বর বরাদ্দ করে।'
      },
      explanation: {
        en: 'migrate:rollback queries the maximum batch integer and executes down() methods exclusively for that batch.',
        bn: 'migrate:rollback সর্বশেষ ব্যাচের মাইগ্রেশনগুলোর down() মেথড চালিয়ে নিখুঁতভাবে আগের অবস্থায় ফিরে যায়।'
      }
    },
    {
      id: 'foreign-id-constrained-cascade-ex2',
      kind: 'mcq',
      topic: 'foreign-id-constrained-cascade',
      question: {
        en: 'In $table->foreignId("user_id")->constrained()->cascadeOnDelete();, what does cascadeOnDelete ensure?',
        bn: '$table->foreignId("user_id")->constrained()->cascadeOnDelete(); কোডে cascadeOnDelete কী নিশ্চিত করে?'
      },
      options: [
        {
          en: 'If a parent user record is deleted from the users table, the database automatically deletes all corresponding child records belonging to that user',
          bn: 'যদি users টেবিল থেকে কোনো ইউজারকে মুছে ফেলা হয়, তবে ডেটাবেস স্বয়ংক্রিয়ভাবে ওই ইউজারের সমস্ত চাইল্ড রেকর্ডও মুছে ফেলে'
        },
        {
          en: 'It prevents any user from ever being deleted from the database',
          bn: 'এটি ডেটাবেস থেকে যেকোনো ইউজার ডিলিট করা সম্পূর্ণ নিষিদ্ধ করে'
        },
        {
          en: 'It sends a cancellation email to the deleted user',
          bn: 'এটি ডিলিট হওয়া ইউজারের কাছে একটি বিদায় বার্তা পাঠায়'
        },
        {
          en: 'It encrypts the post content with 256-bit encryption',
          bn: 'এটি পোস্টের বিষয়বস্তুকে ২৫৬-বিট এনক্রিপশন দিয়ে সুরক্ষিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Cascading deletes eliminate orphaned child records automatically at the database engine level.',
        bn: 'ক্যাসকেড ডিলিট প্যারেন্ট মুছে গেলে চাইল্ড রেকর্ড ডেটাবেস থেকেই স্বয়ংক্রিয়ভাবে মুছে পরিষ্কার রাখে।'
      },
      explanation: {
        en: 'cascadeOnDelete configures an ON DELETE CASCADE constraint, preventing dangling orphaned foreign references.',
        bn: 'cascadeOnDelete ডেটাবেস স্তরে ক্যাসকেড শর্ত দেয়, ফলে প্যারেন্ট রেকর্ড ডিলিট হলে অবাস্তব কোনো তথ্য অবশিষ্ট থাকে না।'
      }
    },
    {
      id: 'migrate-fresh-vs-rollback-ex3',
      kind: 'mcq',
      topic: 'migrate-fresh-destructive-operation',
      question: {
        en: 'Why is php artisan migrate:fresh dangerous if accidentally run on a production database?',
        bn: 'প্রোডাকশন ডেটাবেসে ভুলবশত php artisan migrate:fresh চালালে তা অত্যন্ত বিপজ্জনক কেন?'
      },
      options: [
        {
          en: 'It completely drops every single table in the database without executing down() methods, permanently destroying all existing user data before re-running migrations',
          bn: 'এটি কোনো down() মেথড না চালিয়ে ডেটাবেসের প্রতিটি টেবিল সরাসরি সম্পূর্ণ মুছে ফেলে, ফলে সমস্ত তথ্য চিরতরে ধ্বংস হয়ে যায়'
        },
        {
          en: 'It increases the database storage invoice by 50 percent',
          bn: 'এটি ডেটাবেসের বিল ৫০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It slows down internet speeds across the local area network',
          bn: 'এটি লোকাল নেটওয়ার্কের ইন্টারনেটের গতি কমিয়ে দেয়'
        },
        {
          en: 'It converts the database from MySQL into Microsoft Excel',
          bn: 'এটি ডেটাবেসটিকে মাইক্রোসফট এক্সেলে বদলে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'migrate:fresh drops all tables and rebuilds the schema from scratch; use exclusively in local dev.',
        bn: 'migrate:fresh সব টেবিল মুছে ফেলে শূন্য থেকে শুরু করে; এটি কেবল লোকাল কম্পিউটারের জন্যই উপযুক্ত।'
      },
      explanation: {
        en: 'migrate:fresh executes DROP TABLE on all tables indiscriminately; never run it on live production systems.',
        bn: 'migrate:fresh সব টেবিল সম্পূর্ণ ড্রপ করে ফেলে, তাই এটি লাইভ প্রোডাকশনে চালানো কখনোই উচিত নয়।'
      }
    },
    {
      id: 'model-factories-faker-role-ex4',
      kind: 'mcq',
      topic: 'model-factories-testing',
      question: {
        en: 'What is the primary duty of Laravel Model Factories when developing automated test suites?',
        bn: 'স্বয়ংক্রিয় টেস্ট লেখার ক্ষেত্রে লারাভেল মডেল ফ্যাক্টরির প্রধান ভূমিকা কী?'
      },
      options: [
        {
          en: 'They generate realistic dummy model records on the fly using Faker, allowing tests to run against realistic database states without manual mock creation',
          bn: 'এগুলো ফেকার ব্যবহার করে চোখের পলকে বাস্তবসম্মত ভুয়া রেকর্ড তৈরি করে, ফলে কোনো কষ্ট ছাড়াই টেস্ট সম্পন্ন করা যায়'
        },
        {
          en: 'They compile PHP code directly into mobile smartphone applications',
          bn: 'এগুলো পিএইচপি কোডকে সরাসরি মোবাইল অ্যাপে রূপান্তর করে'
        },
        {
          en: 'They restrict database access to only 1 developer at a time',
          bn: 'এগুলো একসাথে কেবল ১ জন ডেভেলপারকে ডেটাবেস ব্যবহারের অনুমতি দেয়'
        },
        {
          en: 'Model factories only work on Friday afternoons',
          bn: 'মডেল ফ্যাক্টরি কেবল শুক্রবার বিকেলে কাজ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Factories automate test fixture generation with realistic names, emails, and dates.',
        bn: 'ফ্যাক্টরি টেস্টিংয়ের জন্য নাম, ইমেইল ও তারিখ দিয়ে বাস্তবসম্মত ডামি ডেটা তৈরি করে।'
      },
      explanation: {
        en: 'Model factories provide a fluent, repeatable mechanism for creating valid model fixtures during automated testing.',
        bn: 'মডেল ফ্যাক্টরি স্বয়ংক্রিয় টেস্টিং ও ডেভেলপমেন্টের সময় নির্ভুল ডেটাবেস স্টেট তৈরি করতে সাহায্য করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-migrations-and-the-schema',
    title: {
      en: 'Laravel Migrations, Schema & Seeders Quiz',
      bn: 'লারাভেল মাইগ্রেশন, স্কিমা এবং সিডার কুইজ'
    },
    questions: [
      {
        id: 'quiz-migration-squashing-feature',
        kind: 'mcq',
        topic: 'migration-squashing-artisan-schema-dump',
        question: {
          en: 'Why do mature enterprise Laravel projects with hundreds of historical migrations run php artisan schema:dump --prune?',
          bn: 'শত শত পুরোনো মাইগ্রেশনযুক্ত বড় প্রজেক্টে ডেভেলপাররা php artisan schema:dump --prune কমান্ডটি কেন ব্যবহার করেন?'
        },
        options: [
          {
            en: 'It collapses and squashes hundreds of old incremental migration files into a single optimized SQL schema dump, drastically accelerating test database setup times',
            bn: 'এটি শত শত পুরোনো মাইগ্রেশন ফাইলকে একটি একক অপ্টিমাইজড এসকিউএল স্কিমা ফাইলে একত্রিত করে, যা টেস্ট ডেটাবেস তৈরির সময় বহুগুণ বাঁচায়'
          },
          {
            en: 'It deletes all user passwords from the server memory',
            bn: 'এটি সার্ভারের মেমোরি থেকে সমস্ত পাসওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'It prevents developers from adding new columns to tables',
            bn: 'এটি টেবিলে নতুন কোনো কলাম যোগ করতে বাধা দেয়'
          },
          {
            en: 'It converts all varchar strings into integer numbers',
            bn: 'এটি সমস্ত স্ট্রিংকে পূর্ণসংখ্যায় পরিণত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Schema dumping compresses historical migrations into a consolidated SQL schema file.',
          bn: 'স্কিমা ডাম্পিং পুরোনো সব ছোটখাটো মাইগ্রেশনকে একটি সমন্বিত মূল ফাইলে পরিণত করে।'
        },
        explanation: {
          en: 'schema:dump squashes legacy migration history into a single SQL file, speeding up CI/CD test suite initialization.',
          bn: 'schema:dump পুরোনো মাইগ্রেশনের ভিড় কমিয়ে সিআই/সিডি পাইপলাইনে টেস্টিংয়ের সময় দ্রুত ডেটাবেস প্রস্তুত করে।'
        }
      },
      {
        id: 'quiz-foreign-key-index-automatic',
        kind: 'mcq',
        topic: 'foreign-key-index-creation',
        question: {
          en: 'What index does $table->foreignId("category_id")->constrained() create automatically in MySQL?',
          bn: 'MySQL ডেটাবেসে $table->foreignId("category_id")->constrained() স্বয়ংক্রিয়ভাবে কোন ইনডেক্সটি তৈরি করে?'
        },
        options: [
          {
            en: 'An unsigned big integer column with an index and a foreign key constraint linking to the id column of the categories table',
            bn: 'একটি আনসাইন্ড বিগ-ইনটিজার কলাম যার সাথে ইনডেক্স এবং categories টেবিলের id কলামের ফরেন কি লিংক যুক্ত থাকে'
          },
          {
            en: 'A full-text search index for dictionary words',
            bn: 'শব্দ খোঁজার জন্য একটি ফুল-টেক্সট সার্চ ইনডেক্স'
          },
          {
            en: 'A primary key that resets to 0 every night',
            bn: 'একটি প্রাইমারি কি যা প্রতি রাতে ০ হয়ে যায়'
          },
          {
            en: 'It creates no index whatsoever',
            bn: 'এটি কোনো ইনডেক্স তৈরি করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'foreignId creates an UNSIGNED BIGINT matching Laravel default id() column and sets an index constraint.',
          bn: 'foreignId স্বয়ংক্রিয়ভাবে UNSIGNED BIGINT কলাম বানায় এবং ইনডেক্স সহ ফরেন কি বসায়।'
        },
        explanation: {
          en: 'constrained() derives the table name from the column prefix (category_id -> categories) and establishes index constraints.',
          bn: 'constrained() কলামের নাম থেকে মূল টেবিলের নাম শনাক্ত করে স্বয়ংক্রিয়ভাবে ইনডেক্স ও ফরেন কি যোগ করে।'
        }
      },
      {
        id: 'quiz-change-column-modifier-doctrine',
        kind: 'mcq',
        topic: 'modify-existing-columns-change',
        question: {
          en: 'How do you modify an existing database column (e.g. expanding an email field to 255 characters) in a new migration?',
          bn: 'একটি নতুন মাইগ্রেশনে বিদ্যমান কোনো কলামের আকার (যেমন email ফিল্ডকে ২৫৫ অক্ষরে রূপান্তর) কীভাবে পরিবর্তন করবেন?'
        },
        options: [
          {
            en: 'Declare the revised column definition and append ->change(): $table->string("email", 255)->change();',
            bn: 'সংশোধিত কলামটি লিখে শেষে ->change() যুক্ত করে: $table->string("email", 255)->change();'
          },
          {
            en: 'Delete the entire database table and restart the computer',
            bn: 'সম্পূর্ণ ডেটাবেস টেবিল মুছে ফেলে কম্পিউটার রিস্টার্ট করে'
          },
          {
            en: 'Edit the MySQL binary C code manually with a text editor',
            bn: 'টেক্সট এডিটর দিয়ে MySQL এর বাইনারি কোড এডিট করে'
          },
          {
            en: 'Existing columns can never be modified in SQL',
            bn: 'এসকিউএলে কোনো বিদ্যমান কলাম পরিবর্তন করা সম্পূর্ণ অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'The ->change() modifier instructs Schema Blueprint to alter an existing column.',
          bn: '->change() মেথড বিদ্যমান কলামের ধরন বা আকার পরিবর্তন করতে লারাভেলকে নির্দেশ দেয়।'
        },
        explanation: {
          en: 'Appending ->change() issues an ALTER TABLE statement modifying the existing column attributes in place.',
          bn: '->change() মেথড ব্যবহারের ফলে লারাভেল ALTER TABLE কোয়েরি চালিয়ে নিরাপদে কলামটি আপডেট করে নেয়।'
        }
      },
      {
        id: 'quiz-db-seed-database-seeder',
        kind: 'mcq',
        topic: 'database-seeder-orchestration',
        question: {
          en: 'Which command runs both migrations and seeds the database with initial records in a single Artisan command?',
          bn: 'কোন আর্টিস্যান কমান্ডের মাধ্যমে একই সাথে মাইগ্রেশন চালানো এবং ডেটাবেসে প্রাথমিক ডেটা সিড করা সম্ভব?'
        },
        options: [
          { en: 'php artisan migrate --seed', bn: 'php artisan migrate --seed' },
          { en: 'php artisan database:all', bn: 'php artisan database:all' },
          { en: 'php artisan make:everything', bn: 'php artisan make:everything' },
          { en: 'php artisan seed:migrate:now', bn: 'php artisan seed:migrate:now' }
        ],
        answer: 0,
        hint: {
          en: 'Passing the --seed flag triggers DatabaseSeeder immediately after migrations finish.',
          bn: '--seed ফ্ল্যাগ দিলে মাইগ্রেশন শেষ হওয়ার সাথে সাথে DatabaseSeeder স্বয়ংক্রিয়ভাবে কার্যকর হয়।'
        },
        explanation: {
          en: 'migrate --seed runs all outstanding migrations and immediately populates initial database seeders.',
          bn: 'migrate --seed এক কমান্ডেই স্কিমা তৈরি করে প্রয়োজনীয় তথ্য দিয়ে ডেটাবেস সাজিয়ে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'eloquent-and-the-model',
    title: {
      en: 'Eloquent ORM, Relationships & Query Performance',
      bn: 'এলোকুয়েন্ট ওআরএম, রিলেশনশিপ এবং কুয়েরি পারফরম্যান্স'
    }
  }
};
