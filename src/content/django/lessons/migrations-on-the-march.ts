import type { Lesson } from '../../../lib/types';

export const MigrationsOnTheMarchLesson: Lesson = {
  slug: 'migrations-on-the-march',
  tech: 'django',
  title: {
    en: 'Migrations — makemigrations, migrate, Schema Diffs & Conflicts',
    bn: 'মাইগ্রেশন — মেকমাইগ্রেশনস, মাইগ্রেট, স্কিমা ডিফস ও কনফ্লিক্ট সমাধান'
  },
  summary: {
    en: 'Django migrations provide declarative, version-controlled evolution for database schemas. In this lesson, you will master makemigrations, migrate, sqlmigrate, migration dependency graphs, resolving branch merge conflicts, and writing safe data migrations with RunPython.',
    bn: 'জ্যাঙ্গো মাইগ্রেশন সিস্টেম ডাটাবেজ স্কিমার বিবর্তনকে ভার্সন নিয়ন্ত্রিত ও নির্ভরযোগ্য রাখে। এই পাঠে আপনি makemigrations, migrate, sqlmigrate, মাইগ্রেশন ডিপেন্ডেন্সি গ্রাফ, ব্রাঞ্চের কনফ্লিক্ট সমাধান এবং RunPython দিয়ে নিরাপদ ডাটা মাইগ্রেশন তৈরি করা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'django-migrations-architecture',
      text: {
        en: 'The Django Migration Engine and Dependency Graph',
        bn: 'জ্যাঙ্গো মাইগ্রেশন ইঞ্জিন ও ডিপেন্ডেন্সি গ্রাফ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you evolve database schemas in team environments, Django migrations convert changes in your model definitions into deterministic Python files stored in each app migrations folder. The migration engine computes a Directed Acyclic Graph (DAG) across dependencies, guaranteeing operations execute in exact prerequisite order across development, staging, and production databases.',
        bn: 'যখন আপনি টিম প্রজেক্টে ডাটাবেজ স্কিমা পরিবর্তন করেন, তখন জ্যাঙ্গো মাইগ্রেশন মডেল সংজ্ঞার পরিবর্তনগুলোকে প্রতিটি অ্যাপের migrations ফোল্ডারে সুনির্দিষ্ট পাইথন ফাইলে রূপান্তর করে। মাইগ্রেশন ইঞ্জিন একটি নির্দেশিত অ্যাসাইক্লিক গ্রাফ (DAG) তৈরি করে, যা লোকাল থেকে প্রোডাকশন পর্যন্ত প্রতিটি স্তরে সঠিক ক্রমানুসারে স্কিমা আপডেট নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'makemigrations',
          def: {
            en: 'The CLI command that detects differences between your current models.py and previous migration files, writing a new migration file.',
            bn: 'এমন একটি কমান্ড যা বর্তমান models.py এবং পূর্ববর্তী মাইগ্রেশনের পার্থক্য বের করে একটি নতুন মাইগ্রেশন ফাইল তৈরি করে।'
          }
        },
        {
          term: 'migrate',
          def: {
            en: 'The CLI command that synchronizes the database with your migrations, applying unapplied files and tracking status in django_migrations.',
            bn: 'যে কমান্ডটি ডাটাবেজে না চলা মাইগ্রেশনগুলো কার্যকর করে এবং django_migrations টেবিলে স্কিমার বর্তমান অবস্থা লিখে রাখে।'
          }
        },
        {
          term: 'sqlmigrate',
          def: {
            en: 'The diagnostic command that outputs the exact raw SQL statements Django will execute for a given migration without modifying the database.',
            bn: 'একটি নিরীক্ষণ কমান্ড যা ডাটাবেজে পরিবর্তন না করেই দেখিয়ে দেয় সংশ্লিষ্ট মাইগ্রেশনটি চালাতে ঠিক কী এসকিউএল কোয়েরি কার্যকর হবে।'
          }
        },
        {
          term: 'RunPython Data Migration',
          def: {
            en: 'A migration operation executing custom Python functions to populate, transform, or backfill database records during deployment.',
            bn: 'একটি মাইগ্রেশন অপারেশন যা ডেপ্লয়মেন্টের সময় ডাটা তৈরি, রূপান্তর বা ব্যাকফিল করতে নিজস্ব পাইথন ফাংশন চালায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'migration-command-matrix',
      text: {
        en: 'Django Migration Management Commands Matrix',
        bn: 'জ্যাঙ্গো মাইগ্রেশন কমান্ড ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Command', bn: 'কমান্ড' },
        { en: 'Primary Purpose', bn: 'প্রধান উদ্দেশ্য' },
        { en: 'Production Impact', bn: 'প্রোডাকশনে ভূমিকা' }
      ],
      rows: [
        [
          { en: 'python manage.py makemigrations', bn: 'python manage.py makemigrations' },
          { en: 'Scans models and writes new migration files to disk', bn: 'মডেল স্ক্যান করে ডিস্কে নতুন মাইগ্রেশন ফাইল লেখে' },
          { en: 'Run in development; generated files are committed to Git', bn: 'ডেভেলপমেন্টে চলে; তৈরিকৃত ফাইলগুলো গিট-এ কমিট হয়' }
        ],
        [
          { en: 'python manage.py migrate', bn: 'python manage.py migrate' },
          { en: 'Applies unapplied migration files to the database schema', bn: 'ডাটাবেজে না চলা মাইগ্রেশন ফাইলগুলো কার্যকর করে' },
          { en: 'Executed during CI/CD release phase before container spin-up', bn: 'সার্ভার চালুর ঠিক আগে সিআই/সিডি রিলিজ ধাপে কার্যকর হয়' }
        ],
        [
          { en: 'python manage.py showmigrations', bn: 'python manage.py showmigrations' },
          { en: 'Lists all migrations indicating applied status with [X] or [ ]', bn: 'সব মাইগ্রেশনের তালিকা দেখায় এবং [X] বা [ ] দিয়ে অবস্থা জানায়' },
          { en: 'Verifies database synchronization state across environments', bn: 'পরিবেশভেদে ডাটাবেজ সমকালীন অবস্থা যাচাইয়ে সহায়ক' }
        ],
        [
          { en: 'python manage.py sqlmigrate blog 0002', bn: 'python manage.py sqlmigrate blog 0002' },
          { en: 'Inspects raw SQL statements for security and DBA review', bn: 'নিরাপত্তা ও ডিবিএ পর্যালোচনার জন্য মূল এসকিউএল দেখায়' },
          { en: 'Used for auditing heavy ALTER TABLE statements before migration', bn: 'মাইগ্রেশনের আগে ভারী ALTER TABLE কমান্ড নিরীক্ষায় ব্যবহৃত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'migration-graph-code',
      text: {
        en: 'Working Migration DAG and Conflict Detection Simulation',
        bn: 'কার্যকরী মাইগ্রেশন ডিএজি ও কনফ্লিক্ট শনাক্তকরণ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django Migration Directed Acyclic Graph (DAG)
class MigrationNode {
  constructor(app, name, dependencies = []) {
    this.app = app;
    this.name = name;
    this.dependencies = dependencies;
    this.applied = false;
  }
}

const graph = [
  new MigrationNode('blog', '0001_initial', []),
  new MigrationNode('blog', '0002_add_slug', ['0001_initial']),
  new MigrationNode('blog', '0003_add_published', ['0002_add_slug'])
];

let appliedCount = 0;
for (const node of graph) {
  const depsSatisfied = node.dependencies.every(dep => {
    const parent = graph.find(n => n.name === dep);
    return parent ? parent.applied : true;
  });

  if (depsSatisfied) {
    node.applied = true;
    appliedCount += 1;
  }
}

console.log('Total migrations registered in graph:', graph.length);
// -> Total migrations registered in graph: 3
console.log('Successfully applied migrations:', appliedCount);
// -> Successfully applied migrations: 3`,
      caption: {
        en: 'Evaluating 3 ordered migrations across the DAG dependency graph',
        bn: 'ডিএজি ডিপেন্ডেন্সি গ্রাফে ক্রমানুসারে ৩টি মাইগ্রেশন কার্যকর হচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'resolving-conflicts-and-data',
      text: {
        en: 'Branch Merge Conflicts and Safe Data Migrations',
        bn: 'ব্রাঞ্চ মার্জ কনফ্লিক্ট ও নিরাপদ ডাটা মাইগ্রেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In collaborative development, two developers branching from main may both create 0002 migrations. Django refuses to run migrate until this conflict is resolved. Running "python manage.py makemigrations --merge" generates a merge migration file linking both parallel branches into a single dependency node, resolving the ambiguity.',
        bn: 'টিম ডেভেলপমেন্টে যখন ২ জন ডেভেলপার একই সাথে কাজ করে দুটি 0002 মাইগ্রেশন তৈরি করেন, তখন জ্যাঙ্গো কনফ্লিক্ট শনাক্ত করে migrate বন্ধ রাখে। তখন "python manage.py makemigrations --merge" কমান্ড দিলে জ্যাঙ্গো একটি মার্জ মাইগ্রেশন ফাইল বানিয়ে দুটি শাখাকে একটি সাধারণ নোডে যুক্ত করে সংঘাত মিটিয়ে ফেলে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Commit Migrations to Git: Migration files are source code and must always be committed alongside model changes.',
          bn: '১. গিটে মাইগ্রেশন রাখুন: মাইগ্রেশন ফাইলগুলো সোর্স কোডের অংশ, তাই মডেল পরিবর্তনের সাথে সাথেই এগুলো গিট-এ কমিট করতে হবে।'
        },
        {
          en: '2. Provide Defaults for NOT NULL: When adding a non-nullable column to an existing table, provide a sensible default value.',
          bn: '২. NOT NULL ফিল্ডে ডিফল্ট মান: পুরোনো টেবিলে নতুন ফিল্ড যোগ করার সময় নাল মান এড়াতে যুক্তিসঙ্গত ডিফল্ট মান দিন।'
        },
        {
          en: '3. Test Rollbacks Locally: Use "python manage.py migrate app <prev_num>" to test whether backwards migrations work cleanly.',
          bn: '৩. লোকালি রোলব্যাক পরীক্ষা: পেছনের ভার্সনে ফিরে যেতে মাইগ্রেশন রোলব্যাক ঠিকমতো কাজ করছে কিনা তা যাচাই করুন।'
        },
        {
          en: '4. Pair RunPython with Reverse: Always provide a reverse_code function to RunPython so data migrations remain fully reversible.',
          bn: '৪. RunPython-এ রিভার্স কোড: ডাটা মাইগ্রেশনে reverse_code ফাংশন যুক্ত করুন যাতে প্রয়োজনে ডাটা নিরাপদে পূর্বাবস্থায় ফিরিয়ে আনা যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-mig-ex1',
      kind: 'mcq',
      topic: 'resolving migration branch conflicts',
      question: {
        en: 'When two developers create separate migrations that share the same predecessor, which Django command resolves the conflict?',
        bn: 'যখন দুজন ডেভেলপার একই পূর্বসূরী থেকে দুটি আলাদা মাইগ্রেশন তৈরি করেন, তখন কোন জ্যাঙ্গো কমান্ড দিয়ে কনফ্লিক্ট সমাধান করা হয়?'
      },
      options: [
        {
          en: 'python manage.py makemigrations --merge',
          bn: 'python manage.py makemigrations --merge'
        },
        {
          en: 'python manage.py migrate --force-delete',
          bn: 'python manage.py migrate --force-delete'
        },
        {
          en: 'python manage.py drop_database',
          bn: 'python manage.py drop_database'
        },
        {
          en: 'python manage.py reset_migrations --all',
          bn: 'python manage.py reset_migrations --all'
        }
      ],
      answer: 0,
      hint: {
        en: 'The makemigrations tool provides a dedicated --merge flag.',
        bn: 'মেকমাইগ্রেশনস টুলে বিশেষভাবে --merge ফ্ল্যাগটি ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Running makemigrations --merge creates a merge migration whose dependencies include both conflicting branches, uniting them into the DAG.',
        bn: 'makemigrations --merge দিলে একটি সমন্বিত মার্জ ফাইল তৈরি হয় যা উভয় শাখার ওপর নির্ভর করে গ্রাফকে জোড়া লাগিয়ে দেয়।'
      }
    },
    {
      id: 'dj-mig-ex2',
      kind: 'mcq',
      topic: 'inspecting sql before execution with sqlmigrate',
      question: {
        en: 'Why do database administrators and senior engineers inspect migrations using "python manage.py sqlmigrate <app> <num>" before production deploys?',
        bn: 'প্রোডাকশনে ডেপ্লয় করার আগে ডিবিএ এবং সিনিয়র ইঞ্জিনিয়াররা কেন "python manage.py sqlmigrate <app> <num>" দিয়ে মাইগ্রেশন পরীক্ষা করেন?'
      },
      options: [
        {
          en: 'To inspect the exact SQL statements generated by Django, checking for locking operations (like table-rewriting ALTER TABLE) or missing indexes before running against live databases',
          bn: 'জ্যাঙ্গো ঠিক কী এসকিউএল তৈরি করেছে তা দেখে নেওয়া, যাতে লাইভ ডাটাবেজে টেবিল লক হওয়া বা ইনডেক্স মিস হওয়ার মতো ঝুঁকি আগে থেকেই এড়ানো যায়'
        },
        {
          en: 'To translate Python code into JavaScript code for frontend widgets',
          bn: 'ফ্রন্টএন্ডের জন্য পাইথন কোডকে জাভাস্ক্রিপ্ট কোডে রূপান্তর করতে'
        },
        {
          en: 'To compress the PostgreSQL database backup file',
          bn: 'পোস্টগ্রেস ডাটাবেজের ব্যাকআপ ফাইলকে সংকুচিত করতে'
        },
        {
          en: 'To generate fake user profile records automatically',
          bn: 'স্বয়ংক্রিয়ভাবে ডামি ইউজার প্রোফাইল ডাটা তৈরি করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'sqlmigrate reveals the underlying SQL without executing it.',
        bn: 'sqlmigrate ডাটাবেজ না চালিয়েই পর্দার পেছনের আসল এসকিউএল কোড দেখিয়ে দেয়।'
      },
      explanation: {
        en: 'sqlmigrate prints the raw SQL queries that will execute. This allows teams to verify that migrations won\'t lock tables or cause unexpected downtime on production databases.',
        bn: 'sqlmigrate কোনো পরিবর্তন না ঘটিয়ে আসল এসকিউএল কমান্ড দেখায়, যার ফলে প্রোডাকশন ডাটাবেজে লক লাগা বা ডাউনটাইমের ঝুঁকি এড়ানো সম্ভব হয়।'
      }
    },
    {
      id: 'dj-mig-ex3',
      kind: 'mcq',
      topic: 'data migration using migrations.runpython',
      question: {
        en: 'How should you reference model classes inside a custom RunPython data migration function?',
        bn: 'একটি কাস্টম RunPython ডাটা মাইগ্রেশন ফাংশনের ভেতর মডেল ক্লাসকে কীভাবে রেফারেন্স করা উচিত?'
      },
      options: [
        {
          en: 'Use apps.get_model("app_label", "ModelName") provided by the migration runner rather than directly importing the model from models.py',
          bn: 'সরাসরি models.py থেকে ইম্পোর্ট না করে মাইগ্রেশনের apps.get_model("app_label", "ModelName") ব্যবহার করতে হয়'
        },
        {
          en: 'Import the model directly: from .models import ModelName',
          bn: 'সরাসরি মডেল ইম্পোর্ট করে: from .models import ModelName'
        },
        {
          en: 'Read the models using raw file I/O operations',
          bn: 'সরাসরি ফাইল রিড করে মডেল খুঁজে বের করার মাধ্যমে'
        },
        {
          en: 'Download the model schema definition from an external URL',
          bn: 'বাহ্যিক ইউআরএল থেকে মডেলের স্কিমা নামিয়ে এনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Directly importing models.py loads current code, not the historical state at that point in migration history.',
        bn: 'সরাসরি ইম্পোর্ট করলে বর্তমান কোড চলে আসে, কিন্তু মাইগ্রেশনের ওই সময়কার ঐতিহাসিক অবস্থা পাওয়া যায় না।'
      },
      explanation: {
        en: 'Using apps.get_model() loads the historical state of the model as it existed when that migration was generated, preventing errors when models change in the future.',
        bn: 'apps.get_model() ব্যবহার করলে ওই মাইগ্রেশনের সময়ের ঐতিহাসিক মডেল স্টেট লোড হয়, ফলে ভবিষ্যতে মডেল বদলালেও পুরোনো মাইগ্রেশন ভাঙে না।'
      }
    },
    {
      id: 'dj-mig-ex4',
      kind: 'mcq',
      topic: 'tracking applied migrations table',
      question: {
        en: 'Where does Django track which migration files have been successfully applied to the database?',
        bn: 'ডাটাবেজে কোন কোন মাইগ্রেশন ফাইল সফলভাবে কার্যকর হয়েছে তা জ্যাঙ্গো কোথায় লিখে রাখে?'
      },
      options: [
        {
          en: 'In a dedicated database table named "django_migrations"',
          bn: 'ডাটাবেজে "django_migrations" নামের একটি বিশেষ টেবিলে'
        },
        {
          en: 'In a hidden JSON file inside the user home folder',
          bn: 'ব্যবহারকারীর হোম ফোল্ডারে একটি লুকানো JSON ফাইলে'
        },
        {
          en: 'In the browser LocalStorage cache',
          bn: 'ব্রাউজারের লোকালস্টোরেজ ক্যাশে'
        },
        {
          en: 'In the Git commit message log',
          bn: 'গিট কমিট মেসেজের লগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django stores migration state directly inside the relational database.',
        bn: 'জ্যাঙ্গো মাইগ্রেশনের ইতিহাস সরাসরি রিলেশনাল ডাটাবেজের ভেতরে সংরক্ষণ করে।'
      },
      explanation: {
        en: 'Django maintains a special table called django_migrations that records the app label, migration name, and application timestamp for every executed migration.',
        bn: 'জ্যাঙ্গো ডাটাবেজে django_migrations টেবিল তৈরি করে প্রতিটি অ্যাপের নাম ও কার্যকর হওয়া মাইগ্রেশনের সময় সংরক্ষণ করে রাখে।'
      }
    }
  ],
  quiz: {
    id: 'migrations-on-the-march-quiz',
    title: {
      en: 'Django Migrations & Schema Evolution Quiz',
      bn: 'জ্যাঙ্গো মাইগ্রেশন ও স্কিমা বিবর্তন কুইজ'
    },
    questions: [
      {
        id: 'q-showmigrations-output-meaning',
        kind: 'mcq',
        topic: 'showmigrations checkbox status',
        question: {
          en: 'In the output of "python manage.py showmigrations", what does "[ ]" (empty brackets) indicate next to a migration name?',
          bn: '"python manage.py showmigrations" এর আউটপুটে মাইগ্রেশনের নামের পাশে "[ ]" (ফাঁকা বন্ধনী) কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The migration file exists on disk but has NOT yet been applied to the current database',
            bn: 'মাইগ্রেশন ফাইলটি ডিস্কে রয়েছে কিন্তু বর্তমান ডাটাবেজে এখনও কার্যকর (apply) করা হয়নি'
          },
          {
            en: 'The migration was corrupted and must be manually deleted',
            bn: 'মাইগ্রেশন ফাইলটি নষ্ট হয়ে গেছে এবং তা হাতে মুছে ফেলতে হবে'
          },
          {
            en: 'The database is currently disconnected from the network',
            bn: 'ডাটাবেজ বর্তমানে নেটওয়ার্ক থেকে বিচ্ছিন্ন অবস্থায় আছে'
          },
          {
            en: 'The migration was rolled back due to a syntax error',
            bn: 'সিনট্যাক্স এররের কারণে মাইগ্রেশনটি বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: '[X] indicates applied, while [ ] indicates unapplied.',
          bn: '[X] মানে কার্যকর করা হয়েছে, আর [ ] মানে এখনও কার্যকর করা হয়নি।'
        },
        explanation: {
          en: 'showmigrations marks applied migrations with [X] and unapplied pending migrations with [ ].',
          bn: 'showmigrations কমান্ড প্রয়োগ করা মাইগ্রেশনকে [X] এবং বাকি থাকা ফাইলগুলোকে [ ] হিসেবে চিহ্নিত করে।'
        }
      },
      {
        id: 'q-zero-migration-rollback',
        kind: 'mcq',
        topic: 'reverting all migrations of an app',
        question: {
          en: 'What occurs when you execute "python manage.py migrate blog zero"?',
          bn: '"python manage.py migrate blog zero" কমান্ডটি চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'Django reverses every migration applied for the "blog" app, rolling the database schema for that app back to an uninitialized state',
            bn: 'জ্যাঙ্গো "blog" অ্যাপের সমস্ত কার্যকর হওয়া মাইগ্রেশন উল্টো করে ফিরিয়ে নেয়, যার ফলে ওই অ্যাপের স্কিমা প্রাথমিক অবস্থায় ফিরে যায়'
          },
          {
            en: 'It resets all primary keys in the database to 0',
            bn: 'এটি ডাটাবেজের সমস্ত প্রাইমারি কি-এর মান ০ করে দেয়'
          },
          {
            en: 'It deletes all user passwords across the entire site',
            bn: 'এটি পুরো সাইটের সব ইউজারের পাসওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'It installs version 0 of the Django framework',
            bn: 'এটি জ্যাঙ্গো ফ্রেমওয়ার্কের ০ নম্বর সংস্করণ ইনস্টল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing "zero" as migration target instructs Django to unapply all migrations for that app.',
          bn: 'টার্গেট হিসেবে "zero" দিলে জ্যাঙ্গো ওই অ্যাপের সব মাইগ্রেশন সম্পূর্ণ আন-অ্যাপ্লাই করে।'
        },
        explanation: {
          en: 'Migrating to "zero" unapplies all migrations for that app in reverse order, dropping its created tables while maintaining other apps intact.',
          bn: 'নির্দিষ্ট অ্যাপের সাথে "zero" দিলে তা ক্রমানুসারে সব মাইগ্রেশন রোলব্যাক করে টেবিলগুলো বাদ দেয়, তবে অন্য অ্যাপগুলো অপরিবর্তিত থাকে।'
        }
      },
      {
        id: 'q-fake-migration-flag',
        kind: 'mcq',
        topic: 'fake migration flag purpose',
        question: {
          en: 'When is using "python manage.py migrate --fake" appropriate?',
          bn: '"python manage.py migrate --fake" ফ্ল্যাগটি ব্যবহার করা কখন উপযুক্ত?'
        },
        options: [
          {
            en: 'When the database table already physically exists (e.g. from a legacy database or manual DBA change) and you want Django to record the migration as applied without executing the SQL DDL commands',
            bn: 'যখন ডাটাবেজে টেবিলটি আগেই তৈরি ছিল এবং আপনি চান জ্যাঙ্গো নতুন করে এসকিউএল না চালিয়ে কেবল মাইগ্রেশনটিকে কার্যকর হিসেবে মার্ক করে রাখুক'
          },
          {
            en: 'When you want to simulate test data without creating real records',
            bn: 'যখন আপনি বাস্তব রেকর্ড ছাড়া কাল্পনিক ডাটা পরীক্ষা করতে চান'
          },
          {
            en: 'When the database server is running out of memory',
            bn: 'যখন ডাটাবেজ সার্ভারের মেমরি শেষ হয়ে যায়'
          },
          {
            en: 'To make the test suite pass without testing anything',
            bn: 'কোনো পরীক্ষা না চালিয়েই টেস্ট স্যুট পাস দেখানোর জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: '--fake records the migration in django_migrations without running SQL commands.',
          bn: '--fake এসকিউএল কোড না চালিয়েই django_migrations টেবিলে হিস্ট্রি এন্ট্রি তৈরি করে।'
        },
        explanation: {
          en: '--fake inserts a record into django_migrations without running the actual schema-modifying SQL, useful when adopting legacy tables or fixing out-of-sync state.',
          bn: '--fake কোনো ডিডিএল কমান্ড না চালিয়েই মাইগ্রেশন হিস্ট্রি আপডেট করে, যা লেগাসি টেবিল যুক্ত করতে অত্যন্ত কাজের।'
        }
      },
      {
        id: 'q-safe-zero-downtime-migration-strategy',
        kind: 'mcq',
        topic: 'zero downtime column renaming pattern',
        question: {
          en: 'To achieve zero-downtime deployments when renaming a database column in high-traffic applications, what is the recommended multi-step pattern?',
          bn: 'উচ্চ ট্রাফিকের অ্যাপ্লিকেশনে কোনো ডাউনটাইম ছাড়া ডাটাবেজের কলাম রিনেম করার প্রস্তাবিত বহু-ধাপ বিশিষ্ট পদ্ধতি কোনটি?'
        },
        options: [
          {
            en: '1. Add new column; 2. Dual-write to old and new columns in application code; 3. Backfill historic data; 4. Switch reads to new column; 5. Drop old column in a later release',
            bn: '১. নতুন কলাম তৈরি; ২. পুরোনো ও নতুন উভয় কলামে ডাটা লেখা; ৩. পুরোনো ডাটা ব্যাকফিল; ৪. নতুন কলাম থেকে রিড শুরু; ৫. পরবর্তী রিলিজে পুরোনো কলামটি মুছে ফেলা'
          },
          {
            en: 'Stop the production database server for 4 hours to rename the column directly with ALTER TABLE',
            bn: 'কলাম রিনেম করতে ৪ ঘণ্টার জন্য সার্ভার বন্ধ রেখে সরাসরি ALTER TABLE কমান্ড চালানো'
          },
          {
            en: 'Drop the database table and recreate it from empty state',
            bn: 'পুরো টেবিলটি ড্রপ করে দিয়ে শূন্য থেকে পুনরায় নতুন টেবিল তৈরি করা'
          },
          {
            en: 'Change the Python attribute and hope the database automatically renames columns on reboot',
            bn: 'পাইথনের ভেরিয়েবল বদলে দিয়ে আশা করা যে রিবুটে ডাটাবেজ নিজে থেকে কলাম বদলে নেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Zero-downtime requires backward-compatible phased database migrations.',
          bn: 'ডাউনটাইমহীন পরিবর্তনের জন্য ধাপে ধাপে ব্যাকওয়ার্ড-কম্প্যাটিবল পরিবর্তন করতে হয়।'
        },
        explanation: {
          en: 'Renaming a live column locks tables and breaks running app instances. The expand-and-contract pattern (add column, dual-write, backfill, migrate reads, drop old) guarantees zero downtime.',
          bn: 'চলমান কলাম রিনেম করলে টেবিল লক ও সার্ভিস বিঘ্নিত হয়। ধাপে ধাপে কলাম তৈরি, উভয়টিতে রাইট ও ডাটা স্থানান্তরের মাধ্যমে ডাউনটাইমহীন ডেপ্লয় সম্ভব।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-admin-counter',
    title: {
      en: 'Django Admin — ModelAdmin, List Displays, Search, Filters & Inlines',
      bn: 'জ্যাঙ্গো অ্যাডমিন — মডেলঅ্যাডমিন, লিস্ট ডিসপ্লে, সার্চ, ফিল্টার ও ইনলাইন'
    }
  }
};
