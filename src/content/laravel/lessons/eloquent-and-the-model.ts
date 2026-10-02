import type { Lesson } from '../../../lib/types';

export const EloquentAndTheModelLesson: Lesson = {
  slug: 'eloquent-and-the-model',
  tech: 'laravel',
  title: {
    en: 'Eloquent ORM, Relationships & Query Performance',
    bn: 'এলোকুয়েন্ট ওআরএম, রিলেশনশিপ এবং কুয়েরি পারফরম্যান্স'
  },
  summary: {
    en: 'Master the Eloquent Active Record ORM: model definitions with mass assignment guards ($fillable), CRUD operations, relationship mappings (hasMany, belongsTo, belongsToMany), eliminating the devastating N+1 query problem through eager loading (with()), and authoring reusable query scopes.',
    bn: 'এলোকুয়েন্ট অ্যাক্টিভ রেকর্ড ওআরএম আয়ত্ত করুন: ম্যাস-অ্যাসাইনমেন্ট সুরক্ষা ($fillable), সিআরইউডি অপারেশন, রিলেশনশিপ ম্যাপিং (hasMany, belongsTo, belongsToMany), ইগার লোডিং (with()) দিয়ে মারাত্মক N+1 সমস্যা দূরীকরণ এবং কুয়েরি স্কোপ।'
  },
  minutes: 34,
  blocks: [
    {
      type: 'heading',
      id: 'active-record-crud-heading',
      text: {
        en: 'The Active Record Pattern, Mass Assignment, and Model Relationships',
        bn: 'অ্যাক্টিভ রেকর্ড প্যাটার্ন, ম্যাস-অ্যাসাইনমেন্ট এবং মডেল রিলেশনশিপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel (the web framework for PHP) implements database persistence using Eloquent, an Active Record object-relational mapper (ORM). Each database table maps to an Eloquent model class, where table rows correspond to individual model instances. To protect against malicious HTTP request injection where attackers attempt to overwrite administrative columns, models require an explicit $fillable whitelist property. Eloquent maps complex database connections through expressive methods like hasMany, belongsTo, and belongsToMany.',
        bn: 'লারাভেল (পিএইচপির ওয়েব ফ্রেমওয়ার্ক) ডেটাবেসের সাথে যোগাযোগের জন্য এলোকুয়েন্ট নামের একটি শক্তিশালী অবজেক্ট-রিলেশনাল ম্যাপার (ORM) ব্যবহার করে যা মূলত অ্যাক্টিভ রেকর্ড প্যাটার্ন মেনে চলে। ডেটাবেসের প্রতিটি টেবিল একটি মডেল ক্লাসের সাথে এবং প্রতিটি সারি একটি মডেল অবজেক্টের সাথে যুক্ত থাকে। হ্যাকাররা যেন ক্ষতিকর ইনপুট পাঠিয়ে অ্যাডমিন স্ট্যাটাস বা গোপন কলাম পরিবর্তন করতে না পারে, সেজন্য মডেলে স্পষ্ট $fillable হোয়াইটলিস্ট ঘোষণা করা বাধ্যতামূলক। এলোকুয়েন্ট hasMany, belongsTo এবং belongsToMany মেথডের সাহায্যে জটিল ডেটাবেস সম্পর্ককে খুব সহজ করে দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Comparison between the catastrophic N+1 query problem (101 queries) and optimized eager loading (2 queries) across 100 records.',
        bn: 'চিত্র ১: ১০০ টি রেকর্ডের ক্ষেত্রে মারাত্মক N+1 কুয়েরি সমস্যা (১০১ টি কুয়েরি) এবং অপ্টিমাইজড ইগার লোডিংয়ের (২ টি কুয়েরি) মধ্যে পারফরম্যান্স তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">THE N+1 QUERY CATASTROPHE vs ELOQUENT EAGER LOADING</text>

  <!-- Left: Lazy Loading (N+1) -->
  <g transform="translate(30, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#b91c1c" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Lazy Loading: $users = User::all();</text>
    
    <text x="15" y="55" fill="#f87171" font-size="10" font-family="monospace">1. SELECT * FROM users; // 100 rows</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="10" font-family="monospace">foreach ($users as $user) {</text>
    <text x="28" y="93" fill="#f87171" font-size="10" font-family="monospace">  $user-&gt;posts; // TRIGGERS NEW QUERY!</text>
    <text x="15" y="111" fill="#cbd5e1" font-size="10" font-family="monospace">}</text>

    <rect x="15" y="125" width="335" height="55" rx="5" fill="#450a0a" stroke="#ef4444" />
    <text x="22" y="145" fill="#fca5a5" font-size="9" font-family="monospace">Query 2: SELECT * FROM posts WHERE user_id = 1</text>
    <text x="22" y="165" fill="#fca5a5" font-size="9" font-family="monospace">Query 101: SELECT * FROM posts WHERE user_id = 100</text>

    <text x="15" y="200" fill="#fca5a5" font-size="10" font-family="sans-serif">&#10007; 101 separate database roundtrips for 100 users</text>
    <text x="15" y="218" fill="#f87171" font-size="11" font-family="sans-serif" font-weight="bold">Severe Latency: Database CPU &amp; I/O Choked</text>
  </g>

  <!-- Right: Eager Loading (2 queries) -->
  <g transform="translate(445, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#047857" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Eager Loading: User::with('posts')-&gt;get();</text>
    
    <text x="15" y="55" fill="#34d399" font-size="10" font-family="monospace">1. SELECT * FROM users;</text>
    <text x="25" y="72" fill="#94a3b8" font-size="9" font-family="sans-serif">Fetches all 100 user records (1 query)</text>

    <text x="15" y="100" fill="#34d399" font-size="10" font-family="monospace">2. SELECT * FROM posts</text>
    <text x="25" y="117" fill="#34d399" font-size="10" font-family="monospace">   WHERE user_id IN (1, 2, ..., 100);</text>

    <rect x="15" y="135" width="335" height="45" rx="5" fill="#064e3b" stroke="#10b981" />
    <text x="22" y="155" fill="#a7f3d0" font-size="9" font-family="sans-serif">&#10003; Exactly 2 queries regardless of record count</text>
    <text x="22" y="170" fill="#a7f3d0" font-size="9" font-family="sans-serif">&#10003; Models linked in RAM with zero extra roundtrips</text>

    <text x="15" y="200" fill="#a7f3d0" font-size="10" font-family="sans-serif">&#10003; 98% reduction in database network overhead</text>
    <text x="15" y="218" fill="#34d399" font-size="11" font-family="sans-serif" font-weight="bold">Blazing Fast: Sub-5ms Execution</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'eager-loading-scopes-heading',
      text: {
        en: 'Eliminating the N+1 Problem with with() and Authoring Local Query Scopes',
        bn: 'with() দিয়ে N+1 সমস্যা দূরীকরণ এবং লোকাল কুয়েরি স্কোপ তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The notorious N+1 query problem occurs when looping through 100 parent records and accessing a relationship attribute on each instance, unintentionally triggering 101 distinct database queries. Calling User::with("posts")->get() completely neutralizes this flaw: Eloquent queries all 100 parents in 1 query, collects their keys, and executes exactly 1 secondary query with WHERE IN, reducing 101 queries down to 2 queries. To keep controllers clean, reusable constraints are defined as local scopes (such as scopePublished), invoked fluently via Post::published()->get().',
        bn: 'মারাত্মক N+1 কুয়েরি সমস্যা তখন দেখা দেয় যখন ১০০ জন ইউজারের ওপর লুপ চালিয়ে প্রতিবার তাদের রিলেশনশিপের ডেটা চাওয়া হয়, যার ফলে ডেটাবেসে মোট ১০১ টি আলাদা কোয়েরি চলে। User::with("posts")->get() কল করলে এই সমস্যা পুরোপুরি দূর হয়। এলোকুয়েন্ট প্রথমে ১ টি কোয়েরিতে মূল ১০০ জন ইউজারকে আনে এবং এরপর WHERE IN দিয়ে মাত্র ১ টি কোয়েরিতে সব পোস্ট লোড করে ১০১ টি কোয়েরিকে মাত্র ২ টি কোয়েরিতে নামিয়ে আনে। কোড পরিচ্ছন্ন রাখতে বারবার ব্যবহৃত শর্তগুলোকে লোকাল স্কোপে (যেমন scopePublished) সংরক্ষণ করে Post::published()->get() আকারে সহজে ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Eloquent ORM comparing lazy loading (4 queries) against eager loading (2 queries) across 3 users.',
        bn: '৩ জন ইউজারের ক্ষেত্রে লেজি লোডিং (৪ টি কুয়েরি) বনাম ইগার লোডিংয়ের (২ টি কুয়েরি) সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Eloquent ORM Eager Loading and Query Scopes in TypeScript
interface MockUserEntity {
  id: number;
  name: string;
}

interface MockPostEntity {
  id: number;
  userId: number;
  title: string;
  isPublished: boolean;
}

// 3 users and 5 posts in simulated database
const usersTable: MockUserEntity[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const postsTable: MockPostEntity[] = [
  { id: 101, userId: 1, title: 'PHP 8.2 Features', isPublished: true },
  { id: 102, userId: 1, title: 'Laravel Routing Guide', isPublished: true },
  { id: 103, userId: 2, title: 'Blade Components', isPublished: false },
  { id: 104, userId: 3, title: 'Eloquent Relationships', isPublished: true },
  { id: 105, userId: 3, title: 'Redis Queues', isPublished: true }
];

export class EloquentSimulator {
  // Simulating Lazy Loading: 1 initial query + 3 separate relationship queries = 4 queries
  public simulateLazyLoading(): { queryCount: number; results: unknown[] } {
    let queryCount = 1; // SELECT * FROM users
    const results = usersTable.map((user) => {
      queryCount++; // SELECT * FROM posts WHERE user_id = user.id
      const userPosts = postsTable.filter((p) => p.userId === user.id);
      return { ...user, posts: userPosts };
    });
    return { queryCount, results };
  }

  // Simulating Eager Loading: User::with('posts')->get() => exactly 2 queries
  public simulateEagerLoading(): { queryCount: number; results: unknown[] } {
    const queryCount = 2; // Query 1: users, Query 2: posts WHERE user_id IN (1, 2, 3)
    const userIds = new Set(usersTable.map((u) => u.id));
    const allPosts = postsTable.filter((p) => userIds.has(p.userId));

    const results = usersTable.map((user) => ({
      ...user,
      posts: allPosts.filter((p) => p.userId === user.id)
    }));
    return { queryCount, results };
  }

  // Simulating local query scope: Post::published()->get()
  public scopePublished(): MockPostEntity[] {
    return postsTable.filter((p) => p.isPublished);
  }
}

// Execute comparisons
const orm = new EloquentSimulator();

const lazyRun = orm.simulateLazyLoading();
console.log('Lazy Loading Query Count (3 users):', lazyRun.queryCount); // 4 queries

const eagerRun = orm.simulateEagerLoading();
console.log('Eager Loading Query Count (3 users):', eagerRun.queryCount); // 2 queries

const publishedPosts = orm.scopePublished();
console.log('Published Scope Filter Count:', publishedPosts.length); // 4 published posts`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Active Record Pattern',
          def: {
            en: 'Architecture where a model class encapsulates database table schema, persistence methods, and relational domain logic.',
            bn: 'আর্কিটেকচার যেখানে একটি মডেল ক্লাস সরাসরি ডেটাবেসের টেবিল, ডেটা সেভ করার মেথড ও সম্পর্কের লজিক ধারণ করে।'
          }
        },
        {
          term: 'Mass Assignment',
          def: {
            en: 'Assigning multiple model attributes simultaneously via an array, guarded securely by the $fillable model property.',
            bn: 'একযোগে অ্যারের মাধ্যমে মডেলের একাধিক ফিল্ডে মান নির্ধারণ করা, যা $fillable প্রপার্টি দ্বারা সুরক্ষিত থাকে।'
          }
        },
        {
          term: 'N+1 Query Problem',
          def: {
            en: 'Performance flaw where fetching N records and iterating over their child relationships executes 1 + N distinct SQL queries.',
            bn: 'মারাত্মক পারফরম্যান্স দুর্বলতা যেখানে মূল রেকর্ড এবং লুপে তাদের রিলেশনশিপ আনতে মোট 1 + N টি কোয়েরি চালিত হয়।'
          }
        },
        {
          term: 'Eager Loading',
          def: {
            en: 'Optimization technique (with()) fetching parent records and all associated child entities in exactly 2 SQL queries.',
            bn: 'কোয়েরি অপ্টিমাইজেশন পদ্ধতি যা মাত্র ২টি এসকিউএল কোয়েরির সাহায্যে প্যারেন্ট ও সমস্ত চাইল্ড ডেটা একসাথে নিয়ে আসে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'n-plus-one-query-elimination-ex1',
      kind: 'mcq',
      topic: 'n-plus-one-eager-loading',
      question: {
        en: 'How many database queries are executed when running User::with("posts")->get() across 100 user records?',
        bn: '১০০ জন ইউজারের ক্ষেত্রে User::with("posts")->get() চালালে ডেটাবেসে মোট কতটি কোয়েরি কার্যকর হয়?'
      },
      options: [
        {
          en: 'Exactly 2 queries: one to fetch the 100 users, and a second query with WHERE user_id IN (...) fetching all posts',
          bn: 'ঠিক ২ টি কোয়েরি: একটি কোয়েরি দিয়ে ১০০ জন ইউজার এবং দ্বিতীয় কোয়েরিতে WHERE user_id IN (...) দিয়ে সমস্ত পোস্ট লোড হয়'
        },
        {
          en: '101 individual queries hitting the database',
          bn: 'ডেটাবেসে ১০১ টি আলাদা কোয়েরি আঘাত হানে'
        },
        {
          en: '500 queries because of relation overhead',
          bn: 'রিলেশনের কারণে ৫০০ টি কোয়েরি তৈরি হয়'
        },
        {
          en: '0 queries because Eloquent never accesses SQL',
          bn: '০ টি কোয়েরি কারণ এলোকুয়েন্ট কখনো ডেটাবেস স্পর্শ করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Eager loading condenses child queries into a single WHERE IN lookup.',
        bn: 'ইগার লোডিং সমস্ত চাইল্ড রেকর্ডকে একটিমাত্র WHERE IN কোয়েরিতে একত্রিত করে।'
      },
      explanation: {
        en: 'with() reduces 101 queries down to exactly 2 queries, eliminating N+1 database roundtrip latency.',
        bn: 'with() মেথড ১০১ টি কোয়েরিকে কমিয়ে মাত্র ২টি কোয়েরিতে নামিয়ে এনে N+1 ডেটাবেস কোয়েরির চাপ দূর করে।'
      }
    },
    {
      id: 'fillable-mass-assignment-protection-ex2',
      kind: 'mcq',
      topic: 'mass-assignment-fillable-security',
      question: {
        en: 'What security danger occurs if a developer uses Post::create($request->all()) without defining $fillable on the model?',
        bn: 'মডেলে $fillable ঘোষণা না করে Post::create($request->all()) ব্যবহার করলে কোন নিরাপত্তা বিপর্যয় ঘটতে পারে?'
      },
      options: [
        {
          en: 'Laravel throws a MassAssignmentException, or if unconstrained, malicious users could inject unwanted fields like is_admin=1 or account_balance=9999',
          bn: 'লারাভেল একটি MassAssignmentException দেবে, অথবা কোনো বাধা না থাকলে হ্যাকাররা is_admin=1 বা ব্যালেন্সের মতো সংবেদনশীল কলামের মান বদলে দিতে পারে'
        },
        {
          en: 'The MySQL database uninstalls itself from the server',
          bn: 'সার্ভার থেকে MySQL ডেটাবেস স্বয়ংক্রিয়ভাবে আনইনস্টল হয়ে যায়'
        },
        {
          en: 'The computer monitor turns off for 5 minutes',
          bn: 'কম্পিউটারের মনিটর ৫ মিনিটের জন্য বন্ধ হয়ে যায়'
        },
        {
          en: 'All text on the website is translated into Spanish',
          bn: 'ওয়েবসাইটের সমস্ত লেখা স্প্যানিশ ভাষায় রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '$fillable explicitly whitelists which database attributes can be modified via array assignments.',
        bn: '$fillable সুনির্দিষ্টভাবে বলে দেয় কোন কোন কলামে বাইরে থেকে সরাসরি মান বসানো নিরাপদ।'
      },
      explanation: {
        en: 'Mass assignment whitelisting ensures clients cannot tamper with sensitive columns by injecting extra fields into POST forms.',
        bn: 'হোয়াইটলিস্ট নিশ্চিত করে যে ব্যবহারকারী ফর্মে অতিরিক্ত ফিল্ড যুক্ত করলেও সংবেদনশীল কলামে কোনো পরিবর্তন হবে না।'
      }
    },
    {
      id: 'with-count-relationship-optimization-ex3',
      kind: 'mcq',
      topic: 'with-count-performance',
      question: {
        en: 'Why is User::withCount("posts")->get() superior to loading all posts just to count them in a view?',
        bn: 'ভিউতে পোস্টের সংখ্যা দেখানোর জন্য সমস্ত পোস্ট লোড করার চেয়ে User::withCount("posts")->get() ব্যবহার করা কেন বহুগুণ শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'It calculates the post count via a single SQL subquery without hydrating thousands of post model instances into server RAM, saving massive memory',
          bn: 'এটি মেমোরিতে হাজার হাজার মডেল অবজেক্ট না এনে সরাসরি একটিমাত্র এসকিউএল সাব-কোয়েরির মাধ্যমে সংখ্যা গণনা করে প্রচুর র‍্যাম বাঁচায়'
        },
        {
          en: 'It limits the user to writing a maximum of 10 posts',
          bn: 'এটি ব্যবহারকারীকে সর্বোচ্চ ১০ টি পোস্ট লেখার মধ্যে সীমাবদ্ধ করে'
        },
        {
          en: 'It deletes all posts that have zero comments',
          bn: 'এটি ০ টি মন্তব্য থাকা সমস্ত পোস্ট মুছে ফেলে'
        },
        {
          en: 'withCount only functions on integer numbers',
          bn: 'withCount কেবল পূর্ণসংখ্যার ক্ষেত্রেই কাজ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'withCount delegates tallying directly to the database engine without pulling model rows into PHP memory.',
        bn: 'withCount ডেটাবেস ইঞ্জিন দিয়েই গণনা সম্পন্ন করে, পিএইচপি মেমোরিতে অবজেক্ট লোড করার প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'withCount adds a posts_count column to the user record, avoiding memory bloat from instantiating child models.',
        bn: 'withCount ইউজারের রেকর্ডের সাথে সরাসরি posts_count যুক্ত করে মেমোরি সংকট থেকে অ্যাপ্লিকেশনকে বাঁচায়।'
      }
    },
    {
      id: 'local-query-scopes-purpose-ex4',
      kind: 'mcq',
      topic: 'eloquent-local-query-scopes',
      question: {
        en: 'How do local query scopes (such as scopePopular(Builder $query)) benefit large Laravel codebases?',
        bn: 'লোকাল কুয়েরি স্কোপ (যেমন scopePopular(Builder $query)) কীভাবে বড় লারাভেল অ্যাপ্লিকেশনকে সহায়তা করে?'
      },
      options: [
        {
          en: 'They encapsulate frequently repeated query constraints inside the model class, keeping controller code clean and DRY across the entire application',
          bn: 'এগুলো বারবার ব্যবহৃত কোয়েরি শর্তগুলোকে মডেল ক্লাসের ভেতরে সুন্দরভাবে আবদ্ধ রাখে, ফলে পুরো অ্যাপ্লিকেশনে কোড পরিচ্ছন্ন ও পরিপাটি থাকে'
        },
        {
          en: 'They prevent SQL queries from using more than 2 bytes of network bandwidth',
          bn: 'এগুলো এসকিউএল কোয়েরিকে ২ বাইটের বেশি নেটওয়ার্ক ব্যান্ডউইথ ব্যবহার করতে বাধা দেয়'
        },
        {
          en: 'They restrict database access exclusively to Sunday mornings',
          bn: 'এগুলো কেবল রবিবার সকালে ডেটাবেস অ্যাক্সেসের সুযোগ দেয়'
        },
        {
          en: 'Local scopes automatically back up the database to floppy disks',
          bn: 'লোকাল স্কোপ ডেটাবেসকে ফ্লপি ডিস্কে ব্যাকআপ করে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prefixing a model method with "scope" creates a chainable query constraint.',
        bn: 'মডেল মেথডের নামের শুরুতে "scope" লিখলে তা সহজে চেইন করার মতো কুয়েরি শর্তে পরিণত হয়।'
      },
      explanation: {
        en: 'Local scopes provide reusable query logic that can be chained fluently (e.g. Post::popular()->published()->get()).',
        bn: 'লোকাল স্কোপ কোডকে বারবার পুনরাবৃত্তি না করে পরিচ্ছন্ন ও সহজে ব্যবহারযোগ্য চেইনিং সুবিধা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-eloquent-and-the-model',
    title: {
      en: 'Laravel Eloquent ORM & Query Performance Quiz',
      bn: 'লারাভেল এলোকুয়েন্ট ওআরএম এবং কুয়েরি পারফরম্যান্স কুইজ'
    },
    questions: [
      {
        id: 'quiz-prevent-lazy-loading-strict-mode',
        kind: 'mcq',
        topic: 'model-prevent-lazy-loading-production',
        question: {
          en: 'What architectural protection does calling Model::preventLazyLoading(!app()->isProduction()) provide during local development?',
          bn: 'লোকাল ডেভেলপমেন্টের সময় Model::preventLazyLoading(!app()->isProduction()) কনফিগার করলে কোন স্থাপত্যিক সুরক্ষা নিশ্চিত হয়?'
        },
        options: [
          {
            en: 'It immediately throws an exception whenever an un-eager-loaded relationship is accessed, catching N+1 performance bugs before they ever reach production servers',
            bn: 'ইগার লোডিং ছাড়া কোনো রিলেশনশিপ অ্যাক্সেস করলেই এটি সাথে সাথে একটি এক্সেপশন ছুড়ে দেয়, ফলে প্রোডাকশনে যাওয়ার আগেই N+1 পারফরম্যান্স ত্রুটি ধরা পড়ে'
          },
          {
            en: 'It deletes all relationship methods from the application codebase',
            bn: 'এটি কোডবেস থেকে সমস্ত রিলেশনশিপ মেথড মুছে ফেলে'
          },
          {
            en: 'It prevents developers from logging into their computers on weekends',
            bn: 'এটি সপ্তাহান্তে ডেভেলপারদের কম্পিউটারে লগইন করতে বাধা দেয়'
          },
          {
            en: 'It doubles the size of every database table',
            bn: 'এটি প্রতিটি ডেটাবেস টেবিলের আকার দ্বিগুণ করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Strict mode forces developers to use with() by throwing visible errors in local development.',
          bn: 'কঠোর মোড লোকাল পরিবেশে ত্রুটি দেখিয়ে ডেভেলপারদের with() ব্যবহারে বাধ্য করে।'
        },
        explanation: {
          en: 'preventLazyLoading fails fast during development, enforcing strict eager loading to safeguard production performance.',
          bn: 'preventLazyLoading ডেভেলপমেন্টের শুরুতেই সতর্ক করে প্রোডাকশনের পারফরম্যান্সকে শতভাগ সুরক্ষিত রাখে।'
        }
      },
      {
        id: 'quiz-chunk-vs-lazy-collection-memory',
        kind: 'mcq',
        topic: 'eloquent-chunk-large-datasets',
        question: {
          en: 'Why is User::chunk(500, function ($users) { ... }) essential when processing 50000 records in a maintenance script?',
          bn: '৫০০০০ রেকর্ড প্রসেস করার সময় User::chunk(500, function ($users) { ... }) ব্যবহার করা কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'It fetches records in small batches of 500 at a time, keeping RAM consumption constant and preventing fatal "Allowed memory size exhausted" crashes',
            bn: 'এটি একসাথে সব না এনে ৫০০ টি করে ছোট ব্যাচে ডেটা সংগ্রহ করে মেমোরি খরচ স্থির রাখে, ফলে মেমোরি শেষ হয়ে সিস্টেম ক্র্যাশ করে না'
          },
          {
            en: 'It splits the database into 500 different physical computers',
            bn: 'এটি ডেটাবেসকে ৫০০ টি আলাদা কম্পিউটারে ভাগ করে দেয়'
          },
          {
            en: 'It limits the script to running for only 5 seconds',
            bn: 'এটি স্ক্রিপ্টটিকে কেবল ৫ সেকেন্ড চলার মধ্যে সীমাবদ্ধ করে'
          },
          {
            en: 'Chunking only works if all users have identical names',
            bn: 'চাংকিং কেবল তখনই কাজ করে যদি সব ইউজারের নাম এক হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Loading 50,000 Eloquent objects simultaneously will exhaust PHP memory limits; chunking queries incrementally.',
          bn: 'একসাথে ৫০,০০০ অবজেক্ট আনলে পিএইচপির মেমোরি শেষ হয়ে যাবে; চাংকিং ধাপে ধাপে ডেটা আনে।'
        },
        explanation: {
          en: 'chunk() processes records incrementally, freeing memory between batches to handle massive datasets gracefully.',
          bn: 'chunk() প্রতি ব্যাচ শেষে মেমোরি খালি করে দেয়, ফলে লক্ষ লক্ষ ডেটাও কোনো ক্র্যাশ ছাড়াই প্রসেস করা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-belongs-to-many-pivot-table',
        kind: 'mcq',
        topic: 'belongs-to-many-pivot-convention',
        question: {
          en: 'Under standard Laravel naming conventions, what is the default name of the pivot table connecting users and roles?',
          bn: 'লারাভেলের আদর্শ নামকরণের নিয়ম অনুযায়ী users এবং roles টেবিলের মধ্যবর্তী পিভট টেবিলটির ডিফল্ট নাম কী হবে?'
        },
        options: [
          { en: 'role_user (singular model names joined alphabetically in lowercase)', bn: 'role_user (বর্ণানুক্রমিক ছোট হাতের অক্ষরে দুটি সিঙ্গুলার নাম)' },
          { en: 'users_roles_table', bn: 'users_roles_table' },
          { en: 'pivot_connection_1', bn: 'pivot_connection_1' },
          { en: 'many_to_many_roles', bn: 'many_to_many_roles' }
        ],
        answer: 0,
        hint: {
          en: 'Laravel alphabetizes singular model names (role before user) separated by an underscore.',
          bn: 'লারাভেল বর্ণমালার ক্রম অনুসারে সিঙ্গুলার নামগুলোকে আন্ডারস্কোর দিয়ে যুক্ত করে।'
        },
        explanation: {
          en: 'Laravel alphabetical convention pairs singular model names into "role_user".',
          bn: 'লারাভেলের বর্ণানুক্রমিক নিয়ম অনুসারে সিঙ্গুলার মডেল যুক্ত হয়ে "role_user" নাম গ্রহণ করে।'
        }
      },
      {
        id: 'quiz-first-or-create-atomic-upsert',
        kind: 'mcq',
        topic: 'eloquent-first-or-create-helper',
        question: {
          en: 'What does Tag::firstOrCreate(["slug" => "php"], ["name" => "PHP Programming"]) execute?',
          bn: 'Tag::firstOrCreate(["slug" => "php"], ["name" => "PHP Programming"]) স্টেটমেন্টটি কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'It searches for an existing tag with slug="php"; if found it returns that record, otherwise it creates and persists a new tag with both attributes',
            bn: 'এটি slug="php" যুক্ত ট্যাগ খোঁজে; পেলে সেই রেকর্ড ফেরত দেয়, আর না পেলে উভয় তথ্য দিয়ে নতুন ট্যাগ তৈরি করে সেভ করে'
          },
          {
            en: 'It deletes all tags whose slug equals "php"',
            bn: 'এটি "php" স্লাগযুক্ত সমস্ত ট্যাগ মুছে ফেলে'
          },
          {
            en: 'It creates 2 duplicate tags in the database simultaneously',
            bn: 'এটি ডেটাবেসে একই সাথে ২টি ডুপ্লিকেট ট্যাগ তৈরি করে'
          },
          {
            en: 'It sends an alert to the web browser console',
            bn: 'এটি ব্রাউজারের কনসোলে একটি সতর্কবার্তা পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'firstOrCreate checks existence first before attempting database insertion.',
          bn: 'firstOrCreate প্রথমে রেকর্ডটি আছে কি না দেখে, না থাকলে নতুন তৈরি করে।'
        },
        explanation: {
          en: 'firstOrCreate retrieves the record matching the first array, or instantiates and saves with the merged attributes.',
          bn: 'firstOrCreate প্রথম শর্ত দিয়ে ডেটা খোঁজে, আর না পেলে নতুন রেকর্ড ইনসার্ট করে নিরাপদে অবজেক্ট রিটার্ন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'validation-and-the-request',
    title: {
      en: 'Form Requests, Validation Rules & Error Handling',
      bn: 'ফর্ম রিকোয়েস্ট, ভ্যালিডেশন রুল এবং এরর হ্যান্ডলিং'
    }
  }
};
