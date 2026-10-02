import type { Lesson } from '../../../lib/types';

export const ModelsInTheLarderLesson: Lesson = {
  slug: 'models-in-the-larder',
  tech: 'django',
  title: {
    en: 'Models & ORM — QuerySets, Relational Fields & N+1 Optimization',
    bn: 'মডেল ও ওআরএম — কোয়েরিসেট, রিলেশনাল ফিল্ড ও N+1 অপটিমাইজেশন'
  },
  summary: {
    en: 'Django Object-Relational Mapper (ORM) maps Python classes to relational database tables. In this lesson, you will master model definitions, field options (null vs blank), relational fields (ForeignKey, ManyToMany), lazy QuerySets, and query optimization using select_related and prefetch_related to eliminate N+1 bottlenecks.',
    bn: 'জ্যাঙ্গো অবজেক্ট-রিলেশনাল ম্যাপার (ORM) পাইথন ক্লাসগুলোকে রিলেশনাল ডাটাবেজ টেবিলে ম্যাপ করে। এই পাঠে আপনি মডেল সংজ্ঞা, ফিল্ড অপশন (null বনাম blank), রিলেশনাল ফিল্ড (ForeignKey, ManyToMany), লেজি কোয়েরিসেট এবং N+1 সমস্যা দূর করতে select_related ও prefetch_related অপটিমাইজেশন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'django-orm-architecture',
      text: {
        en: 'The Django ORM and QuerySet Architecture',
        bn: 'জ্যাঙ্গো ওআরএম ও কোয়েরিসেট আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you manage application data with Django, models act as the definitive source of truth for your database schema. Each model subclasses django.db.models.Model, where class attributes represent database columns. Django translates Python operations into optimized SQL queries, keeping database logic independent of specific database engines.',
        bn: 'যখন আপনি জ্যাঙ্গো দিয়ে অ্যাপ্লিকেশনের ডাটা পরিচালনা করেন, তখন মডেলগুলো ডাটাবেজ স্কিমার একক নির্ভরযোগ্য উৎস হিসেবে কাজ করে। প্রতিটি মডেল django.db.models.Model থেকে ইনহেরিট করে এবং ক্লাসের চলকগুলো ডাটাবেজের কলাম তৈরি করে। জ্যাঙ্গো পাইথন কোডকে অপটিমাইজড এসকিউএল কোয়েরিতে রূপান্তর করে ডাটাবেজের কার্যকারিতা নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lazy QuerySets',
          def: {
            en: 'QuerySets do not hit the database when created; SQL execution is deferred until iteration, slicing, len(), or explicit evaluation occurs.',
            bn: 'কোয়েরিসেট তৈরির সাথে সাথে ডাটাবেজ কল করে না; লুপ চালানো, স্লাইসিং বা ডাটা চাওয়ার আগ পর্যন্ত এসকিউএল এক্সিকিউশন স্থগিত থাকে।'
          }
        },
        {
          term: 'select_related',
          def: {
            en: 'A QuerySet optimization that performs an SQL JOIN to fetch foreign key and one-to-one related objects in a single database query.',
            bn: 'একটি কোয়েরিসেট পদ্ধতি যা এসকিউএল JOIN ব্যবহার করে একক কুয়েরিতে ফরেন কি এবং ওয়ান-টু-ওয়ান ডাটা একত্রে তুলে আনে।'
          }
        },
        {
          term: 'prefetch_related',
          def: {
            en: 'A QuerySet optimization that executes a second query with WHERE id IN (...) and performs Python-side relationship joining for many-to-many fields.',
            bn: 'একটি অপটিমাইজেশন পদ্ধতি যা WHERE id IN (...) দিয়ে দ্বিতীয় কুয়েরি চালায় এবং পাইথনের ভেতর মেনি-টু-মেনি সম্পর্কের ডাটা সাজিয়ে দেয়।'
          }
        },
        {
          term: 'null vs blank',
          def: {
            en: 'null=True controls database NULL column storage; blank=True governs form and model clean() validation requirement.',
            bn: 'null=True ডাটাবেজের কলামে NULL মান সংরক্ষণ নিয়ন্ত্রণ করে; আর blank=True ফর্ম ও মডেল ভ্যালিডেশনে ফিল্ডটি ফাঁকা রাখা যাবে কিনা তা ঠিক করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'orm-relationship-matrix',
      text: {
        en: 'Relational Fields and Optimization Matrix',
        bn: 'রিলেশনাল ফিল্ড ও অপটিমাইজেশন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Relationship Type', bn: 'সম্পর্কের ধরন' },
        { en: 'Django Field', bn: 'জ্যাঙ্গো ফিল্ড' },
        { en: 'Recommended Optimization', bn: 'প্রস্তাবিত অপটিমাইজেশন' },
        { en: 'Underlying Mechanism', bn: 'অভ্যন্তরীণ কার্যপ্রণালী' }
      ],
      rows: [
        [
          { en: 'Many-to-One (e.g. Author to Articles)', bn: 'মেনি-টু-ওয়ান (যেমন লেখক ও প্রবন্ধ)' },
          { en: 'models.ForeignKey', bn: 'models.ForeignKey' },
          { en: 'select_related("author")', bn: 'select_related("author")' },
          { en: 'SQL INNER JOIN or LEFT OUTER JOIN in single query', bn: 'একক কুয়েরিতে এসকিউএল INNER বা LEFT JOIN' }
        ],
        [
          { en: 'One-to-One (e.g. User to Profile)', bn: 'ওয়ান-টু-ওয়ান (যেমন ইউজার ও প্রোফাইল)' },
          { en: 'models.OneToOneField', bn: 'models.OneToOneField' },
          { en: 'select_related("profile")', bn: 'select_related("profile")' },
          { en: 'Single SQL query fetching both rows at once', bn: 'একক কুয়েরিতে উভয় টেবিলের রো লোড' }
        ],
        [
          { en: 'Many-to-Many (e.g. Article to Tags)', bn: 'মেনি-টু-মেনি (যেমন প্রবন্ধ ও ট্যাগ)' },
          { en: 'models.ManyToManyField', bn: 'models.ManyToManyField' },
          { en: 'prefetch_related("tags")', bn: 'prefetch_related("tags")' },
          { en: '2 distinct SQL queries joined in Python memory', bn: '২টি পৃথক এসকিউএল কুয়েরি পাইথন মেমরিতে একত্রীকরণ' }
        ],
        [
          { en: 'Reverse ForeignKey (e.g. Article Comments)', bn: 'রিভার্স ফরেন কি (যেমন আর্টিকেলের কমেন্ট)' },
          { en: 'article.comments.all()', bn: 'article.comments.all()' },
          { en: 'prefetch_related("comments")', bn: 'prefetch_related("comments")' },
          { en: 'Avoids N individual SELECT queries during loops', bn: 'লুপ চলাকালীন N সংখ্যক পৃথক সিলেক্ট কুয়েরি প্রতিরোধ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'queryset-optimization-code',
      text: {
        en: 'Working QuerySet Batching and N+1 Elimination Simulation',
        bn: 'কার্যকরী কোয়েরিসেট ব্যাচিং ও N+1 প্রতিরোধ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django select_related vs Unoptimized N+1 Queries
let sqlQueryCount = 0;

function executeSql(query) {
  sqlQueryCount += 1;
}

// 1. Simulating Unoptimized N+1 behavior
sqlQueryCount = 0;
const articles = [{ id: 1, authorId: 10 }, { id: 2, authorId: 20 }, { id: 3, authorId: 30 }];
executeSql('SELECT * FROM articles LIMIT 3'); // 1 initial query

for (const article of articles) {
  executeSql(\`SELECT * FROM authors WHERE id = \${article.authorId}\`); // N extra queries
}
const unoptimizedTotal = sqlQueryCount;

// 2. Simulating Optimized select_related behavior
sqlQueryCount = 0;
executeSql('SELECT articles.*, authors.* FROM articles INNER JOIN authors ON articles.author_id = authors.id LIMIT 3');
const optimizedTotal = sqlQueryCount;

console.log('Unoptimized query count for 3 articles:', unoptimizedTotal);
// -> Unoptimized query count for 3 articles: 4
console.log('select_related query count for 3 articles:', optimizedTotal);
// -> select_related query count for 3 articles: 1`,
      caption: {
        en: 'select_related reduces database operations from 4 queries down to 1 query',
        bn: 'select_related ডাটাবেজ অপারেশন ৪টি কুয়েরি থেকে কমিয়ে মাত্র ১টি কুয়েরিতে নামিয়ে আনে'
      }
    },
    {
      type: 'heading',
      id: 'model-best-practices',
      text: {
        en: 'Production Model Schema & QuerySet Rules',
        bn: 'প্রোডাকশন মডেল স্কিমা ও কোয়েরিসেট নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Designing scalable Django applications requires thoughtful schema choices. Never use null=True on text-based fields like CharField and TextField because Django uses empty strings for blank values; allowing both leads to data ambiguity with two potential representations for missing content (empty string versus NULL).',
        bn: 'স্কেলেবল জ্যাঙ্গো অ্যাপ্লিকেশন ডিজাইনের জন্য সঠিক স্কিমা নির্বাচন জরুরি। CharField এবং TextField-এর মতো টেক্সট ফিল্ডে কখনই null=True ব্যবহার করবেন না, কারণ ফাঁকা মানের জন্য জ্যাঙ্গো এম্পটি স্ট্রিং ব্যবহার করে; দুটিই চালু রাখলে ডাটাবেজে তথ্যের দ্বিমুখী রূপ তৈরি হয় (ফাঁকা স্ট্রিং বনাম নাল)।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Explicit related_name: Always define related_name on ForeignKey fields to establish readable reverse relationship accessors.',
          bn: '১. স্পষ্ট related_name: রিভার্স সম্পর্ক সহজে অ্যাক্সেস করতে ForeignKey ফিল্ডে সর্বদা related_name উল্লেখ করুন।'
        },
        {
          en: '2. Add db_index=True for Filters: Add database indexes to columns frequently filtered by views (such as status or slug).',
          bn: '২. ফিল্টারে db_index=True: ভিউতে ঘন ঘন খোঁজা হয় এমন কলামে (যেমন status বা slug) ডাটাবেজ ইনডেক্স যোগ করুন।'
        },
        {
          en: '3. Atomic Transactions: Wrap multi-table write operations inside transaction.atomic() to ensure database integrity.',
          bn: '৩. ট্রানজেকশনে একমুখী ডাটা: একাধিক টেবিলে একসাথে ডাটা লিখতে transaction.atomic() ব্লক ব্যবহার করুন।'
        },
        {
          en: '4. F() Expressions for Race Conditions: Use django.db.models.F() for arithmetic updates to prevent concurrent write race conditions.',
          bn: '৪. রেস কন্ডিশনে F() এক্সপ্রেশন: সরাসরি ভেরিয়েবল না বাড়িয়ে F() এক্সপ্রেশন দিয়ে ডাটাবেজ স্তরে সংখ্যা বৃদ্ধি করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-mod-ex1',
      kind: 'mcq',
      topic: 'difference between select_related and prefetch_related',
      question: {
        en: 'When should you choose select_related() over prefetch_related() in Django ORM?',
        bn: 'জ্যাঙ্গো ওআরএমে prefetch_related()-এর বদলে কখন select_related() বেছে নেওয়া উচিত?'
      },
      options: [
        {
          en: 'When following single-valued relationships (ForeignKey or OneToOne) where an SQL JOIN can fetch all required data in a single database query',
          bn: 'যখন একক সম্পর্কের ফিল্ড (ForeignKey বা OneToOne) থাকে যেখানে এসকিউএল JOIN দিয়ে একটিমাত্র কুয়েরিতে সব ডাটা আনা সম্ভব'
        },
        {
          en: 'When working with ManyToManyField relationships spanning thousands of records',
          bn: 'যখন হাজার হাজার রেকর্ডের সাথে ManyToManyField সম্পর্ক থাকে'
        },
        {
          en: 'Only when querying SQLite databases in local development mode',
          bn: 'কেবল লোকাল ডেভেলপমেন্টে SQLite ডাটাবেজ ব্যবহারের সময়'
        },
        {
          en: 'When you want to bypass the database cache completely',
          bn: 'যখন আপনি ডাটাবেজ ক্যাশ সম্পূর্ণ বাইপাস করতে চান'
        }
      ],
      answer: 0,
      hint: {
        en: 'select_related works via SQL JOINs for single-object relations.',
        bn: 'select_related একক অবজেক্ট সম্পর্কের জন্য এসকিউএল JOIN পদ্ধতি ব্যবহার করে।'
      },
      explanation: {
        en: 'select_related creates an SQL JOIN and fetches the related object in the same query. It is designed specifically for single-valued relationships (ForeignKey, OneToOne).',
        bn: 'select_related এসকিউএল JOIN করে একটিমাত্র কুয়েরিতে ডাটা আনে। এটি কেবল একক সম্পর্কের (ForeignKey ও OneToOne) জন্য সবচেয়ে কার্যকর।'
      }
    },
    {
      id: 'dj-mod-ex2',
      kind: 'mcq',
      topic: 'null versus blank convention on text fields',
      question: {
        en: 'Why is setting null=True on a Django CharField or TextField considered an anti-pattern?',
        bn: 'জ্যাঙ্গো CharField বা TextField-এ null=True সেট করাকে কেন একটি ভুল বা অ্যান্টি-প্যাটার্ন হিসেবে গণ্য করা হয়?'
      },
      options: [
        {
          en: 'It creates two distinct ways to represent "no data" in the database (an empty string "" versus NULL), complicating queries and business logic',
          bn: 'এটি ডাটাবেজে "ডাটা নেই" বোঝানোর জন্য দুটি ভিন্ন অবস্থা তৈরি করে (খালি স্ট্রিং বনাম NULL), যা কোয়েরি ও লজিককে জটিল করে'
        },
        {
          en: 'The database server immediately terminates the connection',
          bn: 'ডাটাবেজ সার্ভার তৎক্ষণাৎ সংযোগ বিচ্ছিন্ন করে দেয়'
        },
        {
          en: 'PostgreSQL refuses to create text columns with null values',
          bn: 'পোস্টগ্রেস নাল মানযুক্ত টেক্সট কলাম তৈরি করতে অস্বীকার করে'
        },
        {
          en: 'It increases disk storage consumption by 10 times',
          bn: 'এটি ডিস্ক স্টোরেজের ব্যবহার ১০ গুণ বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django convention uses the empty string for missing text data.',
        bn: 'জ্যাঙ্গোর প্রচলিত নিয়ম অনুযায়ী ফাঁকা টেক্সটের জন্য কেবল এম্পটি স্ট্রিং ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'The Django convention is to use empty string "" for empty text fields. Setting null=True creates two possible representations for missing data: NULL and "".',
        bn: 'টেক্সট ফিল্ড ফাঁকা থাকলে জ্যাঙ্গো খালি স্ট্রিং "" ব্যবহার করে। null=True দিলে NULL ও "" দুটি অবস্থা তৈরি হয়ে বিভ্রান্তি সৃষ্টি করে।'
      }
    },
    {
      id: 'dj-mod-ex3',
      kind: 'mcq',
      topic: 'lazy evaluation of django querysets',
      question: {
        en: 'Which of the following operations does NOT trigger an immediate SQL database query on a Django QuerySet?',
        bn: 'নিচের কোন অপারেশনটি চালানোর সময় জ্যাঙ্গো কোয়েরিসেটে তৎক্ষণাৎ কোনো ডাটাবেজ এসকিউএল কুয়েরি এক্সিকিউট হয় না?'
      },
      options: [
        {
          en: 'Chaining another filter: filtered_qs = posts.filter(status="published")',
          bn: 'আরেকটি ফিল্টার চেইন করা: filtered_qs = posts.filter(status="published")'
        },
        {
          en: 'Iterating over the queryset in a for loop: for post in posts: ...',
          bn: 'ফর লুপ দিয়ে আইটারেট করা: for post in posts: ...'
        },
        {
          en: 'Evaluating list conversion: post_list = list(posts)',
          bn: 'লিস্টে রূপান্তর করা: post_list = list(posts)'
        },
        {
          en: 'Checking row count with the len() function: count = len(posts)',
          bn: 'len() ফাংশন দিয়ে দৈর্ঘ্য পরীক্ষা করা: count = len(posts)'
        }
      ],
      answer: 0,
      hint: {
        en: 'QuerySets are lazy; adding filter criteria simply returns a new unevaluated QuerySet.',
        bn: 'কোয়েরিসেট লেজি প্রকৃতির; নতুন ফিল্টার যুক্ত করলে শুধু একটি নতুন কোয়েরিসেট রিটার্ন হয়।'
      },
      explanation: {
        en: 'Chaining .filter() or .exclude() constructs a new QuerySet without touching the database. The database is only queried when the data is evaluated (e.g. loops, list(), len()).',
        bn: '.filter() বা .exclude() যুক্ত করলে ডাটাবেজে কোনো কল যায় না। কেবল লুপ বা লিস্টে রূপান্তরের সময় বাস্তব কোয়েরি চলে।'
      }
    },
    {
      id: 'dj-mod-ex4',
      kind: 'mcq',
      topic: 'f expressions prevent race conditions',
      question: {
        en: 'How does using "Product.objects.filter(id=1).update(views=F(\'views\') + 1)" prevent concurrency race conditions?',
        bn: '"Product.objects.filter(id=1).update(views=F(\'views\') + 1)" ব্যবহার করলে কীভাবে রেস কন্ডিশন প্রতিরোধ হয়?'
      },
      options: [
        {
          en: 'It pushes the arithmetic operation directly into the database engine (UPDATE ... SET views = views + 1) rather than loading, incrementing, and saving in Python memory',
          bn: 'এটি পাইথন মেমরিতে সংখ্যা বৃদ্ধি না করে সরাসরি ডাটাবেজ ইঞ্জিনে (UPDATE ... SET views = views + 1) যোগের কাজটি সম্পন্ন করে'
        },
        {
          en: 'It locks the entire operating system thread pool for 5 seconds',
          bn: 'এটি অপারেটিং সিস্টেমের সমস্ত থ্রেড ৫ সেকেন্ডের জন্য লক করে'
        },
        {
          en: 'It converts the column type from integer to floating-point',
          bn: 'এটি কলামের ধরন পূর্ণসংখ্যা থেকে দশমিকে রূপান্তর করে'
        },
        {
          en: 'F() expressions convert SQLite databases into PostgreSQL',
          bn: 'F() এক্সপ্রেশন SQLite ডাটাবেজকে পোস্টগ্রেসে রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'F() expressions instruct SQL to perform the math at the database server level.',
        bn: 'F() এক্সপ্রেশন ডাটাবেজ লেভেলেই সরাসরি গাণিতিক হিসাব সম্পন্ন করতে নির্দেশ দেয়।'
      },
      explanation: {
        en: 'F() generates SQL that updates the column in-place at the database level, preventing race conditions where two simultaneous requests overwrite each other.',
        bn: 'F() সরাসরি ডাটাবেজ লেভেলে ফিল্ড আপডেট করে, যার ফলে একসাথে একাধিক রিকোয়েস্ট আসলেও ডাটা নষ্ট বা ওভাররাইট হয় না।'
      }
    }
  ],
  quiz: {
    id: 'models-in-the-larder-quiz',
    title: {
      en: 'Django Models & ORM QuerySets Quiz',
      bn: 'জ্যাঙ্গো মডেল ও ওআরএম কোয়েরিসেট কুইজ'
    },
    questions: [
      {
        id: 'q-cascade-delete-foreignkey',
        kind: 'mcq',
        topic: 'on_delete models cascade behavior',
        question: {
          en: 'What happens to associated articles if an author is deleted when the ForeignKey specifies on_delete=models.CASCADE?',
          bn: 'ForeignKey-তে on_delete=models.CASCADE থাকলে লেখককে মুছে দিলে তার সাথে সংশ্লিষ্ট প্রবন্ধগুলোর কী পরিণতি হয়?'
        },
        options: [
          {
            en: 'All articles authored by that specific author are automatically deleted from the database in the same transaction',
            bn: 'ওই নির্দিষ্ট লেখকের তৈরি করা সমস্ত প্রবন্ধ ডাটাবেজ থেকে স্বয়ংক্রিয়ভাবে একই ট্রানজেকশনে মুছে যায়'
          },
          {
            en: 'The author field on the articles is set to NULL while articles remain',
            bn: 'প্রবন্ধগুলো থেকে যায় কিন্তু লেখকের ফিল্ডে NULL বসে'
          },
          {
            en: 'Django raises a ProtectedError and cancels the author deletion',
            bn: 'জ্যাঙ্গো একটি ProtectedError ছুড়ে দিয়ে ডিলিট বাতিল করে'
          },
          {
            en: 'The articles are transferred to the superuser account',
            bn: 'প্রবন্ধগুলো স্বয়ংক্রিয়ভাবে সুপারইউজার অ্যাকাউন্টে স্থানান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CASCADE mimics relational SQL CASCADE behavior: child rows are removed with parent.',
          bn: 'CASCADE সম্পর্কযুক্ত চাইল্ড রেকর্ডগুলোকে প্যারেন্ট রেকর্ডের সাথে একসাথে মুছে দেয়।'
        },
        explanation: {
          en: 'models.CASCADE cascades deletion down to related objects. If the parent author is deleted, all their child articles are also deleted.',
          bn: 'CASCADE দিলে প্যারেন্ট অবজেক্ট মুছে ফেলার সাথে সাথে তার সাথে যুক্ত সমস্ত চাইল্ড অবজেক্টও মুছে ফেলা হয়।'
        }
      },
      {
        id: 'q-annotate-vs-aggregate',
        kind: 'mcq',
        topic: 'annotate per row versus aggregate whole queryset',
        question: {
          en: 'What is the architectural distinction between aggregate() and annotate() in Django ORM?',
          bn: 'জ্যাঙ্গো ওআরএমে aggregate() এবং annotate()-এর মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
        },
        options: [
          {
            en: 'aggregate() computes summary metrics over the entire QuerySet returning a dictionary, whereas annotate() attaches a computed calculation to each individual row object in the QuerySet',
            bn: 'aggregate() পুরো কোয়েরিসেটের সামগ্রিক হিসাব করে একটি ডিকশনারি দেয়, আর annotate() কোয়েরিসেটের প্রতিটি রো বা অবজেক্টের সাথে গণনাকৃত মান যোগ করে'
          },
          {
            en: 'annotate() deletes records, while aggregate() inserts records',
            bn: 'annotate() রেকর্ড মুছে ফেলে, আর aggregate() রেকর্ড তৈরি করে'
          },
          {
            en: 'aggregate() is only available on MySQL databases',
            bn: 'aggregate() কেবল মাইএসকিউএল ডাটাবেজে কাজ করে'
          },
          {
            en: 'There is no difference; they are alias names for identical operations',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; তারা একই কাজের দুটি আলাদা নাম'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of aggregate as summary numbers (like Avg) and annotate as per-row GROUP BY values.',
          bn: 'aggregate পুরো টেবিলের গড় বা যোগফল দেয়, আর annotate প্রতিটি সারির সাথে নতুন মান যুক্ত করে।'
        },
        explanation: {
          en: 'aggregate() reduces a QuerySet to a dictionary of values (e.g., average price). annotate() performs a GROUP BY and adds calculated fields to every individual object in the QuerySet.',
          bn: 'aggregate() পুরো কুয়েরির সামারি ডিকশনারি দেয়, আর annotate() প্রতিটি অবজেক্টের সাথে গ্রুপকৃত মান (যেমন প্রতিটি পোস্টের কমেন্ট সংখ্যা) যোগ করে।'
        }
      },
      {
        id: 'q-django-signals-vs-model-save',
        kind: 'mcq',
        topic: 'overriding save method versus post_save signal',
        question: {
          en: 'Why do experienced Django architects often prefer overriding model save() or using domain services over post_save signals for core business logic?',
          bn: 'অভিজ্ঞ জ্যাঙ্গো আর্কিটেক্টরা ব্যবসায়িক মূল লজিকের জন্য post_save সিগন্যালের চেয়ে মডেলের save() ওভাররাইড করা বা ডোমেন সার্ভিস ব্যবহারকে কেন অগ্রাধিকার দেন?'
        },
        options: [
          {
            en: 'Signals are implicitly dispatched and hard to trace through the call stack, making debugging difficult, whereas model methods and services have clear, explicit execution flow',
            bn: 'সিগন্যাল অস্পষ্টভাবে কার্যকর হয় বলে ডিবাগিং কঠিন হয়ে পড়ে, পক্ষান্তরে মডেলের মেথড বা সার্ভিসের কোড স্পষ্ট ও সহজে অনুসরণযোগ্য'
          },
          {
            en: 'Signals slow down network connections by 90 percent',
            bn: 'সিগন্যাল নেটওয়ার্কের গতি ৯০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'Django deprecated the signals framework in version 3.0',
            bn: 'জ্যাঙ্গো ৩.০ সংস্করণে সিগন্যাল ফ্রেমওয়ার্ক বাতিল করেছে'
          },
          {
            en: 'Signals only work when the server runs on macOS',
            bn: 'সিগন্যাল কেবল ম্যাক ওএসে সার্ভার চললে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Implicit side effects in signals obscure control flow and make unit testing tricky.',
          bn: 'সিগন্যালে পরোক্ষ প্রভাবের কারণে কোডের প্রবাহ সহজে বোঝা যায় না এবং টেস্টিং কঠিন হয়।'
        },
        explanation: {
          en: 'Signals introduce implicit control flow, making side effects hard to trace and test. Overriding save() or writing explicit service functions makes business logic obvious and testable.',
          bn: 'সিগন্যালে পরোক্ষভাবে কোড রান হয় যা ডিবাগ করা কঠিন করে। save() ওভাররাইড করলে বা সার্ভিস ফাংশন লিখলে কোড প্রবাহ পরিষ্কার থাকে।'
        }
      },
      {
        id: 'q-only-defer-queryset-optimization',
        kind: 'mcq',
        topic: 'defer and only queryset methods for column loading',
        question: {
          en: 'What performance benefit do only() and defer() provide when retrieving large tables with TextField columns?',
          bn: 'বড় টেবিল থেকে TextField কলামযুক্ত ডাটা তোলার সময় only() এবং defer() কোন পারফরম্যান্স সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'They restrict the SQL SELECT clause to specific needed columns, avoiding the expensive transfer of massive text data into Python memory when not required',
            bn: 'তারা এসকিউএল SELECT কুয়েরিকে প্রয়োজনীয় কলামে সীমাবদ্ধ রাখে, ফলে অপ্রয়োজনীয় বিশাল টেক্সট ডাটা পাইথন মেমরিতে লোড হওয়ার চাপ বাঁচে'
          },
          {
            en: 'They convert textual data into MP3 audio streams',
            bn: 'তারা টেক্সট ডাটাকে এমপিথ্রি অডিও ফাইলে রূপান্তর করে'
          },
          {
            en: 'They encrypt the database columns using SHA-256',
            bn: 'তারা ডাটাবেজ কলামগুলোকে SHA-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'They delete older rows to reduce table size',
            bn: 'তারা টেবিলের আকার ছোট করতে পুরোনো রো মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'defer() tells Django not to load heavy columns unless explicitly accessed later.',
          bn: 'defer() নির্দেশ দেয় যাতে ভারী টেক্সট কলামগুলো প্রয়োজন না হওয়া পর্যন্ত লোড না করা হয়।'
        },
        explanation: {
          en: 'defer() and only() limit which columns are fetched in the SQL SELECT statement. Heavy fields (like giant text blocks) are omitted from memory until accessed.',
          bn: 'defer() ও only() নির্দেশিত কলামগুলোকেই শুধু এসকিউএল থেকে টানে। এর ফলে মেমরি বাঁচে এবং অ্যাপ্লিকেশনের গতি অনেক বৃদ্ধি পায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'migrations-on-the-march',
    title: {
      en: 'Migrations — makemigrations, migrate, Schema Diffs & Conflicts',
      bn: 'মাইগ্রেশন — মেকমাইগ্রেশনস, মাইগ্রেট, স্কিমা ডিফস ও কনফ্লিক্ট সমাধান'
    }
  }
};
