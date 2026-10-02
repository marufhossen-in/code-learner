import type { Lesson } from '../../../lib/types';

export const resolverFoundryLesson: Lesson = {
  slug: 'the-resolver-foundry',
  tech: 'graphql',
  title: {
    en: 'Resolvers & DataLoader — Execution Tree, Batching & Solving the N+1 Problem',
    bn: 'রিসলভার্স ও DataLoader — এক্সিকিউশন ট্রি, ব্যাচিং ও N+1 সমস্যা সমাধান'
  },
  summary: {
    en: 'While GraphQL schemas establish architectural contracts, field resolvers perform the actual work of retrieving, transforming, and authorizing data. The GraphQL execution engine processes queries by walking the requested selection tree and invoking a resolver function for each individual field. When handling lists of relational entities, this field-grained execution naturally triggers the devastating N+1 database query problem. Facebook introduced the DataLoader pattern to resolve this cascade cleanly. By exploiting the JavaScript event loop microtask queue, DataLoader coalesces concurrent individual foreign key lookups into a single batched SQL query using an IN clause, while simultaneously memoizing duplicate keys within the lifecycle of a single HTTP request.',
    bn: 'GraphQL স্কিমা কাঠামোগত চুক্তি প্রতিষ্ঠা করলেও ফিল্ড রিসলভাররাই ডেটা সংগ্রহ, রূপান্তর এবং অনুমোদনের আসল কাজ সম্পাদন করে। GraphQL এক্সিকিউশন ইঞ্জিন কোয়েরি ট্রির প্রতিটি ফিল্ডের জন্য স্বাধীনভাবে একটি রিসলভার ফাংশন আহ্বান করে ডেটা প্রসেস করে। কিন্তু সম্পর্কযুক্ত সত্তার তালিকার ক্ষেত্রে এই ফিল্ড-লেভেল এক্সিকিউশন মারাত্মক N+1 ডেটাবেজ কোয়েরি সমস্যা সৃষ্টি করে। ফেসবুক এই সংকট নিরসনে DataLoader প্যাটার্ন উদ্ভাবন করেছে। জাভাস্ক্রিপ্ট ইভেন্ট লুপের মাইক্রোটাস্ক কিউকে কাজে লাগিয়ে DataLoader একই সময়ে আসা একাধিক আইডির সন্ধানকে একটিমাত্র এসকিউএল IN ক্লজে একত্রিত করে এবং একটি রিকোয়েস্টের ভেতরে ডুপ্লিকেট কি-গুলোকে মেমোইজ করে সার্ভারের পারফরম্যান্স অক্ষুণ্ণ রাখে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Field-Level Execution Model',
        bn: 'মূল ধারণা: ফিল্ড-লেভেল এক্সিকিউশন মডেল'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you run a GraphQL server in production, the resolver execution engine is where theoretical schemas transform into concrete database queries. While GraphQL allows clients to request nested relations gracefully, executing resolvers field-by-field naively triggers the catastrophic N+1 database cascade. Facebook developed the DataLoader utility to solve this by queuing, deduplicating, and batching individual field lookups within the JavaScript event loop.',
        bn: 'যখন আপনি প্রোডাকশনে একটি GraphQL সার্ভার পরিচালনা করেন, তখন রিসলভার এক্সিকিউশন ইঞ্জিনই তাত্ত্বিক স্কিমাকে বাস্তব ডেটাবেজ কোয়েরিতে রূপান্তর করে। GraphQL ক্লায়েন্টকে নির্বিঘ্নে নেস্টেড রিলেশন চাওয়ার সুযোগ দিলেও প্রতিটি ফিল্ডের জন্য আলাদা আলাদা রিসলভার চালালে মারাত্মক N+1 ডেটাবেজ ক্যাসকেড সৃষ্টি হয়। ফেসবুক জাভাস্ক্রিপ্ট ইভেন্ট লুপের একটি একক টিকে ফিল্ড রিকোয়েস্টগুলোকে কিউইং, ডিডুপ্লিকেটিং এবং ব্যাচিং করার মাধ্যমে এই সমস্যা দূর করতে DataLoader ইউটিলিটি উদ্ভাবন করেছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Resolver Signature',
          def: {
            en: 'The standard 4-argument handler function (parent, args, context, info) executing data retrieval for a schema field',
            bn: '৪টি আর্গুমেন্ট বিশিষ্ট আদর্শ হ্যান্ডলার ফাংশন (parent, args, context, info) যা স্কিমার ফিল্ডের জন্য ডেটা সংগ্রহ করে'
          }
        },
        {
          term: 'Trivial Resolver',
          def: {
            en: 'Default fallback resolver that reads property parent[fieldName] directly when no explicit custom resolver is declared',
            bn: 'ডিফল্ট ফলব্যাক রিসলভার যা কোনো কাস্টম কোড না থাকলে সরাসরি parent[fieldName] প্রপার্টি থেকে মান পড়ে নেয়'
          }
        },
        {
          term: 'N+1 Problem',
          def: {
            en: 'Performance bottleneck where fetching N parent records triggers N additional independent database queries for related children',
            bn: 'পারফরম্যান্স সংকট যেখানে N সংখ্যক প্যারেন্ট রেকর্ড আনার পর চাইল্ড তথ্যের জন্য আরো N সংখ্যক আলাদা ডেটাবেজ কল চলে'
          }
        },
        {
          term: 'DataLoader Batching',
          def: {
            en: 'Pattern aggregating individual lookups across a microtask tick into a single SQL IN-clause query with request memoization',
            bn: 'প্যাটার্ন যা একটি মাইক্রোটাস্ক টিকে একাধিক অনুসন্ধানকে একটিমাত্র এসকিউএল IN ক্লজে একত্রিত করে এবং মেমোইজ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'resolver-arguments',
      text: {
        en: 'The Four Pillars: parent, args, context, and info',
        bn: 'রিসলভারের চার ভিত্তি: parent, args, context এবং info'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every resolver function receives four standardized arguments. The parent argument contains the result returned by the enclosing parent resolver, allowing child fields to access foreign keys. The args parameter contains all input arguments declared on the field in the client query document.',
        bn: 'প্রতিটি রিসলভার ফাংশন চারটি মানসম্মত আর্গুমেন্ট গ্রহণ করে। parent আর্গুমেন্টে ওপরের প্যারেন্ট রিসলভার থেকে ফেরত আসা ডেটা থাকে, যার ফলে চাইল্ড ফিল্ডগুলো সহজেই ফরেন কি অ্যাক্সেস করতে পারে। আর args প্যারামিটারে ক্লায়েন্টের পাঠানো সমস্ত ইনপুট আর্গুমেন্ট সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The context argument is a shared per-request crucible instantiated at the HTTP gateway. It typically contains authenticated user sessions, database connection pools, tenant identifiers, and DataLoader instances. Finally, the info parameter carries runtime AST metadata, including the field name, selection set nodes, and schema definitions.',
        bn: 'context আর্গুমেন্ট হলো প্রতিটি HTTP রিকোয়েস্টের শুরুতে তৈরি হওয়া একটি সার্বজনীন অবজেক্ট। এতে সাধারণ ব্যবহারকারীর সেশন, ডেটাবেজ কানেকশন পুল, এবং DataLoader ইনস্ট্যান্স সংরক্ষিত থাকে। সবশেষে info প্যারামিটার ফিল্ডের নাম, সিলেকশন সেট নোড এবং স্কিমা ডেফিনিশন সহ রানটাইম AST মেটাডেটা বহন করে।'
      }
    },
    {
      type: 'heading',
      id: 'n-plus-one-cascade',
      text: {
        en: 'The Anatomy of the N+1 Cascade',
        bn: 'N+1 ক্যাসকেডের অভ্যন্তরীণ কার্যপদ্ধতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider a query requesting 20 users and their company: users { id name company { name } }. The Query.users resolver executes 1 SQL query to load 20 user rows. Next, the execution engine steps into the User.company field. Because resolvers run field-by-field, the engine calls the company resolver 20 times individually: SELECT * FROM companies WHERE id = 10, firing 20 separate network calls.',
        bn: '২০ জন ব্যবহারকারী এবং তাদের কোম্পানির তথ্য চাওয়ার একটি কোয়েরির কথা ভাবুন: users { id name company { name } }। প্রথমে Query.users রিসলভার ১ টি এসকিউএল কোয়েরি চালিয়ে ২০ জন ব্যবহারকারী আনে। এরপর ইঞ্জিন User.company ফিল্ডে প্রবেশ করে। যেহেতু রিসলভারগুলো ফিল্ড ধরে আলাদাভাবে চলে, তাই ইঞ্জিন ২০ বার আলাদা আলাদা এসকিউএল কোয়েরি চালায়: SELECT * FROM companies WHERE id = 10।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This results in 1 + 20 = 21 database roundtrips for a single screen. On larger pages with 100 users and nested orders with line items, a single HTTP call can explode into over 500 database queries, saturating connection pools and taking seconds to respond.',
        bn: 'এর ফলে একটিমাত্র স্ক্রিনের জন্য মোট ১ + ২০ = ২১ টি ডেটাবেজ রিকোয়েস্ট চলে। ১০০ জন ব্যবহারকারী এবং নেস্টেড অর্ডার সহ বড় পেজে একটিমাত্র রিকোয়েস্ট ৫০০ টিরও বেশি ডেটাবেজ কোয়েরি ঘটিয়ে সার্ভারের কানেকশন পুল ব্যস্ত করে ফেলে এবং প্রচণ্ড বিলম্ব ঘটায়।'
      }
    },
    {
      type: 'heading',
      id: 'dataloader-solution',
      text: {
        en: 'The DataLoader Solution: Batching and Per-Request Memoization',
        bn: 'DataLoader সমাধান: ব্যাচিং ও রিকোয়েস্ট-লেভেল মেমোইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'DataLoader decouples resolver calls from database execution. When 20 user resolvers simultaneously call companyLoader.load(companyId), DataLoader buffers all 20 IDs in an internal queue. At the end of the current JavaScript event loop tick, DataLoader fires a single batch query: SELECT * FROM companies WHERE id IN (10, 20, 30).',
        bn: 'DataLoader রিসলভার কলকে সরাসরি ডেটাবেজ এক্সিকিউশন থেকে বিচ্ছিন্ন করে। যখন ২০ জন ব্যবহারকারীর রিসলভার একই সাথে companyLoader.load(companyId) কল করে, DataLoader সেই ২০ টি আইডি একটি অভ্যন্তরীণ কিউতে জমা করে। বর্তমান জাভাস্ক্রিপ্ট ইভেন্ট লুপের টিক শেষ হওয়ার সাথে সাথে DataLoader একটিমাত্র ব্যাচ কোয়েরি চালায়: SELECT * FROM companies WHERE id IN (10, 20, 30)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Furthermore, DataLoader performs per-request memoization. If 10 of those 20 users work at Acme Corp (ID 10), DataLoader queries company 10 exactly once, fulfilling all 10 promises with the same cached JavaScript object in memory. In a typical application, 21 database roundtrips collapse into just 2.',
        bn: 'অধিকন্তু DataLoader প্রতি রিকোয়েস্টে মেমোইজেশন পরিচালনা করে। যদি ২০ জনের মধ্যে ১০ জন একই কোম্পানিতে (আইডি ১০) কাজ করেন, তবে DataLoader কোম্পানি ১০ এর জন্য কেবল একবার ডেটাবেজ কল করে এবং মেমোরিতে থাকা একই অবজেক্ট দিয়ে ১০ টি প্রমিজই পূর্ণ করে। ফলে ২১ টি ডেটাবেজ কল মাত্র ২ টি কলে নেমে আসে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Data Fetching Strategies in Resolvers',
        bn: 'কাঠামোগত তুলনা: রিসলভারে ডেটা সংগ্রহের কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Strategy Dimension', bn: 'কৌশলগত মাত্রা' },
        { en: 'Naive Field Resolvers', bn: 'সাধারণ ফিল্ড রিসলভার্স' },
        { en: 'DataLoader Batching', bn: 'DataLoader ব্যাচিং' },
        { en: 'SQL Join Pushdown', bn: 'SQL জয়েন পুশডাউন' }
      ],
      rows: [
        [
          { en: 'Database Query Volume', bn: 'ডেটাবেজ কোয়েরির সংখ্যা' },
          { en: 'N+1 queries (e.g. 21 queries for 20 rows)', bn: 'N+1 কোয়েরি (যেমন ২০ রো-এর জন্য ২১ টি কোয়েরি)' },
          { en: 'Constant 2 queries (1 for parent, 1 batched IN)', bn: 'ধ্রুবক ২ টি কোয়েরি (১ টি প্যারেন্ট, ১ টি ব্যাচড IN)' },
          { en: 'Single giant SQL query with complex LEFT JOINs', bn: 'জটিল LEFT JOIN সম্বলিত একটিমাত্র এসকিউএল কোয়েরি' }
        ],
        [
          { en: 'Code Complexity & Coupling', bn: 'কোড জটিলতা ও কাপলিং' },
          { en: 'Simplest code, but catastrophic scalability', bn: 'সবচেয়ে সহজ কোড, কিন্তু মারাত্মক পারফরম্যান্স ঘাটতি' },
          { en: 'Clean separation of concerns; reusable loaders', bn: 'দায়িত্বের চমৎকার বিভাজন; পুনরায় ব্যবহারযোগ্য লোডার' },
          { en: 'High coupling; resolver must parse info AST', bn: 'উচ্চ কাপলিং; রিসলভারকে জটিল AST পার্স করতে হয়' }
        ],
        [
          { en: 'Deduplication across Branches', bn: 'ডুপ্লিকেট ডেটা পরিহার' },
          { en: 'None; repeated foreign keys trigger repeat queries', bn: 'নেই; একই ফরেন কি থাকলে বারবার নতুন কোয়েরি চলে' },
          { en: 'Automatic per-request memoization cache', bn: 'স্বয়ংক্রিয় রিকোয়েস্ট-লেভেল মেমোইজেশন ক্যাশ' },
          { en: 'Manual SQL DISTINCT or manual client stitching', bn: 'ম্যানুয়াল SQL DISTINCT বা ক্লায়েন্টে ডেটা জোড়া লাগানো' }
        ],
        [
          { en: 'Microservice / REST Source Support', bn: 'মাইক্রোসার্ভিস বা REST সমর্থন' },
          { en: 'Works out-of-the-box with massive network latency', bn: 'সরাসরি চলে কিন্তু প্রচণ্ড নেটওয়ার্ক বিলম্ব তৈরি করে' },
          { en: 'Excellent; batches HTTP GET /batch?ids=1,2,3', bn: 'চমৎকার; HTTP GET /batch?ids=1,2,3 দিয়ে ব্যাচিং করে' },
          { en: 'Impossible; joins only work inside a single SQL DB', bn: 'অসম্ভব; জয়েন কেবল একটিমাত্র এসকিউএল ডেটাবেজে চলে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: DataLoader Batching & Deduplication',
        bn: 'বাস্তব কোড সিমুলেশন: DataLoader ব্যাচিং ও ডিডুপ্লিকেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of DataLoader Batching and Deduplication in Node.js

class MockDataLoader<K, V> {
  private queue: Array<{ key: K; resolve: (val: V) => void; reject: (err: any) => void }> = [];
  private cache = new Map<K, Promise<V>>();
  private scheduled = false;

  constructor(private batchFn: (keys: K[]) => Promise<V[]>) {}

  load(key: K): Promise<V> {
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    }

    const promise = new Promise<V>((resolve, reject) => {
      this.queue.push({ key, resolve, reject });
      if (!this.scheduled) {
        this.scheduled = true;
        queueMicrotask(() => this.dispatch());
      }
    });

    this.cache.set(key, promise);
    return promise;
  }

  private async dispatch() {
    this.scheduled = false;
    const currentQueue = this.queue;
    this.queue = [];

    const keys = [...new Set(currentQueue.map(item => item.key))];
    const results = await this.batchFn(keys);
    const resultMap = new Map<K, V>();

    for (let i = 0; i < keys.length; i++) {
      resultMap.set(keys[i], results[i]);
    }

    for (const item of currentQueue) {
      item.resolve(resultMap.get(item.key)!);
    }
  }
}

async function run() {
  let dbQueryCount = 0;

  const companiesTable = [
    { id: '10', name: 'Acme Corp' },
    { id: '20', name: 'Stark Industries' },
    { id: '30', name: 'Wayne Enterprises' }
  ];

  // Batch loading function (executes 1 SQL query: SELECT * FROM companies WHERE id IN (...))
  const batchLoadCompanies = async (ids: string[]) => {
    dbQueryCount++;
    return ids.map(id => companiesTable.find(c => c.id === id)!);
  };

  const loader = new MockDataLoader<string, { id: string; name: string }>(batchLoadCompanies);

  // 4 user records requesting their company:
  // User 1 -> Company 10
  // User 2 -> Company 10 (deduplicated!)
  // User 3 -> Company 20
  // User 4 -> Company 30
  const userCompanyIds = ['10', '10', '20', '30'];

  // All 4 resolvers invoke loader.load in the same execution tick
  const promises = userCompanyIds.map(cid => loader.load(cid));
  const resolvedCompanies = await Promise.all(promises);

  console.log('Total users resolved:', resolvedCompanies.length);
  // -> Total users resolved: 4
  console.log('Unique companies queried:', 3);
  // -> Unique companies queried: 3
  console.log('Total database batch queries executed:', dbQueryCount);
  // -> Total database batch queries executed: 1
  console.log('User 1 company name:', resolvedCompanies[0].name);
  // -> User 1 company name: Acme Corp
  console.log('User 2 company name (deduplicated):', resolvedCompanies[1].name);
  // -> User 2 company name (deduplicated): Acme Corp
}

run();`,
      caption: {
        en: 'Simulation: 4 users resolve 3 unique companies in 1 batch query; company 10 is deduplicated with zero extra DB calls',
        bn: 'সিমুলেশন: ৪ জন ইউজার ১ টি ব্যাচ কোয়েরিতে ৩ টি কোম্পানি সমাধান করে; কোম্পানি ১০ কোনো বাড়তি কল ছাড়াই ডিডুপ্লিকেট হয়'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always instantiate DataLoaders inside the per-request context factory. Never declare DataLoaders as global singletons, or user data and permissions will leak across distinct HTTP requests, corrupting multi-tenant security.',
        bn: 'নিয়ম ১: প্রতিটি রিকোয়েস্টের কনটেক্সট তৈরির সময় নতুন DataLoader তৈরি করুন। কখনো গ্লোবাল সিঙ্গেলটন ডিক্লেয়ার করবেন না, অন্যথায় এক ব্যবহারকারীর ডেটা অন্য ব্যবহারকারীর কাছে ফাঁস হয়ে মারাত্মক নিরাপত্তা সংকট তৈরি হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Ensure the batch function returns an array matching the exact length and order of the input keys. If an ID has no matching record in the database, return null or an Error at that index rather than omitting the element.',
        bn: 'নিয়ম ২: ব্যাচ ফাংশন থেকে ইনপুট কি-গুলোর হুবহু সমান দৈর্ঘ্য ও ক্রমানুসারে অ্যারে ফেরত দিন। কোনো আইডির তথ্য ডেটাবেজে না থাকলে উপাদান বাদ না দিয়ে সেই নির্দিষ্ট ইনডেক্সে null অথবা Error ফেরত পাঠাতে হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Keep business logic inside domain services rather than fat resolvers. Resolvers should act purely as thin transport routing adapters that extract arguments, delegate to domain logic, and return shapes.',
        bn: 'নিয়ম ৩: ব্যবসায়িক লজিক সরাসরি রিসলভারে না লিখে পৃথক ডোমেন সার্ভিসে রাখুন। রিসলভারকে কেবল একটি হালকা রাউটার অ্যাডাপ্টার হিসেবে রাখুন যা আর্গুমেন্ট গ্রহণ করে সার্ভিসে পাঠায় এবং ফলাফল ফেরত দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Rely on default resolvers for direct property access. Do not write explicit resolvers for simple scalar properties that already exist on the parent object; GraphQL defaultFieldResolver reads parent properties automatically.',
        bn: 'নিয়ম ৪: সরাসরি প্রপার্টি রিড করার জন্য ডিফল্ট রিসলভারের ওপর ভরসা রাখুন। প্যারেন্ট অবজেক্টে বিদ্যমান সাধারণ ফিল্ডের জন্য বাড়তি রিসলভার লেখার প্রয়োজন নেই; GraphQL-এর defaultFieldResolver স্বয়ংক্রিয়ভাবে তা পড়ে নেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-foundry-ex1',
      kind: 'mcq',
      topic: 'Mechanism of DataLoader batching',
      question: {
        en: 'How does DataLoader batch multiple individual .load(id) calls into a single database query?',
        bn: 'DataLoader কীভাবে একাধিক স্বতন্ত্র .load(id) কলকে একটিমাত্র ডেটাবেজ কোয়েরিতে একত্রিত করে?'
      },
      options: [
        {
          en: 'It queues all requested keys within the current event loop microtask tick and executes the batch function once in the next microtask',
          bn: 'এটি বর্তমান ইভেন্ট লুপ মাইক্রোটাস্ক টিকে আসা সমস্ত কি বাফার করে এবং পরবর্তী মাইক্রোটাস্কে ব্যাচ ফাংশনটি একবার পরিচালনা করে'
        },
        {
          en: 'It delays the entire HTTP response by 5 seconds to wait for more incoming traffic',
          bn: 'আরো ট্রাফিকের আশায় এটি পুরো এইচটিটিপি রেসপন্সকে ৫ সেকেন্ডের জন্য থামিয়ে রাখে'
        },
        {
          en: 'It rewrites server CPU machine instructions using dynamic assembly patching',
          bn: 'এটি ডাইনামিক অ্যাসেম্বলি প্যাচিং দিয়ে সার্ভারের সিপিইউ নির্দেশনা পুনর্লিখন করে'
        },
        {
          en: 'It compresses multiple SQL queries into a single zip file sent over TCP',
          bn: 'এটি একাধিক এসকিউএল কোয়েরিকে জিপ ফাইলে কম্প্রেস করে টিসিপিতে পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about queueMicrotask or process.nextTick scheduling in Node.js.',
        bn: 'Node.js-এর queueMicrotask বা process.nextTick শিডিউলিংয়ের কথা বিবেচনা করুন।'
      },
      explanation: {
        en: 'DataLoader uses the Node.js microtask queue (queueMicrotask or Promise.resolve()) to collect all synchronous resolver calls before dispatching the batch load function.',
        bn: 'DataLoader নোড জেএস-এর মাইক্রোটাস্ক কিউ ব্যবহার করে এক টিকে আসা সমস্ত রিসলভার কল জমা করে এবং পরবর্তীতে একবারে ব্যাচ ফাংশন চালায়।'
      }
    },
    {
      id: 'gql-foundry-ex2',
      kind: 'mcq',
      topic: 'DataLoader lifecycle and scoping rule',
      question: {
        en: 'Why is it critical to instantiate DataLoader instances per-request inside the GraphQL context rather than globally?',
        bn: 'DataLoader ইনস্ট্যান্সগুলোকে গ্লোবালি না রেখে প্রতি রিকোয়েস্টে GraphQL কনটেক্সটের ভেতরে তৈরি করা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'To prevent caching and leaking private user data across different HTTP requests, which would cause severe multi-tenant security breaches',
          bn: 'ভিন্ন ভিন্ন রিকোয়েস্টের মধ্যে গোপন ডেটা ক্যাশ ও ফাঁস হওয়া রোধ করতে, অন্যথায় মাল্টি-টেন্যান্ট নিরাপত্তা বিঘ্নিত হবে'
        },
        {
          en: 'Because Node.js garbage collection automatically deletes global variables every 10 seconds',
          bn: 'কারণ নোড জেএস গারবেজ কালেক্টর প্রতি ১০ সেকেন্ড পরপর গ্লোবাল ভেরিয়েবল মুছে দেয়'
        },
        {
          en: 'Because DataLoader only supports 1 single load operation in its entire lifetime',
          bn: 'কারণ DataLoader তার পুরো জীবনে মাত্র ১ টি লোড অপারেশন সমর্থন করতে পারে'
        },
        {
          en: 'To force all database queries to execute synchronously on the main thread',
          bn: 'যাতে সমস্ত ডেটাবেজ কোয়েরি মেইন থ্রেডে সিনক্রোনাসভাবে চলতে বাধ্য হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If DataLoader is global, User A could read cached data fetched by User B.',
        bn: 'DataLoader গ্লোবাল হলে ইউজার A ভুল করে ইউজার B-এর ক্যাশ করা ব্যক্তিগত ডেটা দেখতে পাবে।'
      },
      explanation: {
        en: 'DataLoader caches promises by key in memory. A global singleton would retain cached records indefinitely and serve one user private data to another user. Scoping it per-request ensures isolation.',
        bn: 'DataLoader মেমোরিতে প্রমিজ ক্যাশ করে রাখে। গ্লোবাল সিঙ্গেলটন বানালে এক ব্যবহারকারীর ডেটা অন্য ব্যবহারকারীর কাছে চলে যাবে; তাই প্রতি রিকোয়েস্টে আলাদা লোডার তৈরি করে আইসোলেশন বজায় রাখা হয়।'
      }
    },
    {
      id: 'gql-foundry-ex3',
      kind: 'mcq',
      topic: 'Ordering contract in DataLoader batch functions',
      question: {
        en: 'What strict contract must a DataLoader batch loading function obey regarding its returned array of results?',
        bn: 'DataLoader-এর ব্যাচ লোডিং ফাংশনটিকে তার ফেরত দেওয়া ফলাফলের অ্যারের ক্ষেত্রে কোন কঠোর চুক্তি মেনে চলতে হয়?'
      },
      options: [
        {
          en: 'The returned array must have the exact same length and index order as the input array of keys',
          bn: 'ফেরত আসা অ্যারের দৈর্ঘ্য এবং উপাদানের ক্রম অবশ্যই ইনপুট কি-এর অ্যারের সাথে হুবহু সমান ও সামঞ্জস্যপূর্ণ হতে হবে'
        },
        {
          en: 'The returned array must always be sorted alphabetically by database primary key',
          bn: 'ফেরত আসা অ্যারে সর্বদা প্রাইমারি কি অনুসারে বর্ণানুক্রমে সাজানো থাকতে হবে'
        },
        {
          en: 'The batch function must return a raw SQL string instead of JavaScript objects',
          bn: 'ব্যাচ ফাংশনটিকে জাভাস্ক্রিপ্ট অবজেক্টের বদলে সরাসরি এসকিউএল স্ট্রিং ফেরত দিতে হবে'
        },
        {
          en: 'The returned array must contain at least 100 elements even if fewer keys were requested',
          bn: 'কম কি চাওয়া হলেও ফেরত আসা অ্যারেতে কমপক্ষে ১০০ টি উপাদান থাকতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'DataLoader matches results to keys by array position index.',
        bn: 'DataLoader অ্যারের পজিশন ইনডেক্স ধরে কি-র সাথে ফলাফল মেলায়।'
      },
      explanation: {
        en: 'DataLoader maps results back to corresponding promises by index position: result[i] corresponds to keys[i]. If lengths or order diverge, incorrect data is returned to callers.',
        bn: 'DataLoader ইনডেক্স ধরে কি-র সাথে প্রমিজ মেলায়: result[i] মূলত keys[i]-এর ফলাফল। ক্রম বা দৈর্ঘ্য এলোমেলো হলে ভুল ডেটা ফেরত চলে যাবে।'
      }
    },
    {
      id: 'gql-foundry-ex4',
      kind: 'mcq',
      topic: 'Default field resolver behavior',
      question: {
        en: 'What does the default GraphQL field resolver (defaultFieldResolver) do when no explicit resolver is declared for a field?',
        bn: 'কোনো ফিল্ডের জন্য কাস্টম রিসলভার ঘোষণা না থাকলে ডিফল্ট রিসলভার (defaultFieldResolver) কী কাজ করে?'
      },
      options: [
        {
          en: 'It looks for a property matching the field name on the parent object (parent[fieldName]) and returns its value',
          bn: 'এটি প্যারেন্ট অবজেক্টে ফিল্ডের নামের সাথে মিল থাকা প্রপার্টিটি (parent[fieldName]) খুঁজে তার মান সরাসরি ফেরত দেয়'
        },
        {
          en: 'It throws a critical unhandled schema missing resolver error',
          bn: 'এটি রিসলভার খুঁজে না পেয়ে মারাত্মক এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'It queries all tables in the database to guess the correct column name',
          bn: 'এটি সঠিক কলামের নাম অনুমান করতে ডেটাবেজের সমস্ত টেবিলে অনুসন্ধান চালায়'
        },
        {
          en: 'It converts the field name into a cryptographic SHA-256 hash',
          bn: 'এটি ফিল্ডের নামকে একটি SHA-256 ক্রিপ্টোগ্রাফিক হ্যাশে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trivial resolvers read directly from the parent object in memory.',
        bn: 'সাধারণ রিসলভার সরাসরি মেমোরিতে থাকা প্যারেন্ট অবজেক্ট থেকে মান রিড করে।'
      },
      explanation: {
        en: 'If a parent resolver already returns an object containing { title: "Clean Code" }, the default resolver for title simply extracts parent.title without needing custom code.',
        bn: 'প্যারেন্ট রিসলভার যদি { title: "Clean Code" } ফেরত দেয়, তবে title-এর ডিফল্ট রিসলভার কোনো বাড়তি কোড ছাড়াই parent.title বের করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-resolver-foundry-quiz',
    title: {
      en: 'Resolvers, Execution Tree & DataLoader Quiz',
      bn: 'রিসলভার্স, এক্সিকিউশন ট্রি ও DataLoader কুইজ'
    },
    questions: [
      {
        id: 'q-context-injection',
        kind: 'mcq',
        topic: 'Role of the GraphQL context object',
        question: {
          en: 'What is the primary architectural purpose of the context argument passed to every GraphQL resolver?',
          bn: 'প্রতিটি GraphQL রিসলভারে পাস করা context আর্গুমেন্টের মূল কাঠামোগত উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To provide shared per-request dependencies such as authenticated user identity, database clients, and DataLoader instances to all resolvers across the execution tree',
            bn: 'এক্সিকিউশন ট্রির সমস্ত রিসলভারকে ব্যবহারকারীর পরিচয়, ডেটাবেজ ক্লায়েন্ট এবং DataLoader-এর মতো রিকোয়েস্ট-লেভেল ডিপেন্ডেন্সি সরবরাহ করা'
          },
          {
            en: 'To store the HTML markup of the frontend web application',
            bn: 'ফ্রন্টএন্ড ওয়েব অ্যাপ্লিকেশনের এইচটিএমএল মার্কআপ সংরক্ষণ করা'
          },
          {
            en: 'To restart the server whenever a database query fails',
            bn: 'যেকোনো ডেটাবেজ কোয়েরি ব্যর্থ হলেই সার্ভার রিস্টার্ট করা'
          },
          {
            en: 'To encrypt all outgoing network responses using asymmetric keys',
            bn: 'অ্যাসিমেট্রিক কি ব্যবহার করে সমস্ত আউটগোয়িং নেটওয়ার্ক রেসপন্স এনক্রিপ্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about dependency injection scoped to an individual incoming HTTP request.',
          bn: 'একটি নির্দিষ্ট এইচটিটিপি রিকোয়েস্টের জন্য ডিপেন্ডেন্সি ইনজেকশনের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'The context object is created once per HTTP request and passed to every resolver in the execution tree, making it the ideal place to inject authentication and DataLoaders.',
          bn: 'প্রতিটি রিকোয়েস্টের শুরুতে একবার context তৈরি হয় এবং পুরো ট্রিতে প্রবাহিত হয়, ফলে অথেনটিকেশন ও DataLoader ইনজেক্ট করার জন্য এটি সবচেয়ে উপযুক্ত।'
        }
      },
      {
        id: 'q-dataloader-cache-invalidation',
        kind: 'mcq',
        topic: 'Mutations and DataLoader cache clearing',
        question: {
          en: 'What must developers remember regarding DataLoader cache when executing a mutation that updates database state?',
          bn: 'ডেটাবেজ আপডেটকারী কোনো মিউটেশন চালানোর সময় DataLoader ক্যাশের ব্যাপারে ডেভেলপারদের কী মনে রাখতে হবে?'
        },
        options: [
          {
            en: 'Call loader.clear(key) or loader.clearAll() to purge stale cached promises so subsequent resolvers read updated state',
            bn: 'loader.clear(key) বা loader.clearAll() ডেকে পুরোনো ক্যাশ মুছে ফেলতে হবে যাতে পরবর্তী রিসলভার নতুন তথ্য দেখতে পায়'
          },
          {
            en: 'Delete the entire database and recreate all schema tables from scratch',
            bn: 'পুরো ডেটাবেজ মুছে ফেলে শুরু থেকে আবার সব টেবিল তৈরি করতে হবে'
          },
          {
            en: 'DataLoader automatically updates external SQL database rows via machine learning',
            bn: 'DataLoader কৃত্রিম বুদ্ধিমত্তা দিয়ে বাইরের এসকিউএল টেবিল নিজে থেকেই আপডেট করে দেয়'
          },
          {
            en: 'Mutations are forbidden from using DataLoaders under any circumstances',
            bn: 'কোনো অবস্থাতেই মিউটেশনের ভেতরে DataLoader ব্যবহার করা সম্পূর্ণ নিষেধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a loader already memoized an entity, modifying the DB will not invalidate that in-memory promise.',
          bn: 'লোডার ইতিমধ্যে কোনো ডেটা মেমোইজ করে থাকলে ডেটাবেজ পাল্টালেও মেমোরির সেই প্রমিজ নিজে থেকে বদলায় না।'
        },
        explanation: {
          en: 'Because DataLoader memoizes keys in memory, updating a record in the database will not update the cached promise. Calling clear(id) purges the stale entry.',
          bn: 'যেহেতু DataLoader মেমোরিতে প্রমিজ ক্যাশ রাখে, তাই ডেটাবেজে কোনো রেকর্ড আপডেট করলে মেমোরি স্বয়ংক্রিয়ভাবে বদলায় না। clear(id) ডেকে বাসি ক্যাশ মুছে দিতে হয়।'
        }
      },
      {
        id: 'q-info-field-ast',
        kind: 'mcq',
        topic: 'Inspecting requested child fields using info',
        question: {
          en: 'How can an advanced resolver inspect which specific subfields were requested by the client using the info argument?',
          bn: 'info আর্গুমেন্ট ব্যবহার করে একটি উন্নত রিসলভার কীভাবে জানতে পারে ক্লায়েন্ট ঠিক কোন কোন সাবফিল্ড চেয়েছে?'
        },
        options: [
          {
            en: 'By inspecting fieldNodes in the AST metadata to extract child selection sets and optimize SQL joins dynamically',
            bn: 'AST মেটাডেটার ভেতরের fieldNodes পরীক্ষা করে চাইল্ড সিলেকশন সেট খুঁজে নিয়ে ডাইনামিক এসকিউএল জয়েন অপ্টিমাইজ করার মাধ্যমে'
          },
          {
            en: 'By asking the client to send a separate text message to the server administrator',
            bn: 'ক্লায়েন্টকে সার্ভার অ্যাডমিনের কাছে আলাদা টেক্সট মেসেজ পাঠাতে বলে'
          },
          {
            en: 'By running an automated OCR scan on the user computer monitor',
            bn: 'ব্যবহারকারীর কম্পিউটার মনিটরে স্বয়ংক্রিয় ওসিআর স্ক্যান চালিয়ে'
          },
          {
            en: 'By decompiling the V8 JavaScript bytecode inside the Node.js runtime',
            bn: 'নোড জেএস রানটাইমের ভেতর ভি৮ জাভাস্ক্রিপ্ট বাইটকোড ডিকম্পাইল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The info argument contains the AST node representation of the current field selection.',
          bn: 'info আর্গুমেন্টে বর্তমান ফিল্ড সিলেকশনের AST নোড সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'Libraries like graphql-fields or custom AST traversals parse info.fieldNodes to discover which nested columns were requested, allowing optimized SQL query projection.',
          bn: 'info.fieldNodes বিশ্লেষণ করে রিসলভার জানতে পারে কোন কোন নেস্টেড কলাম চাওয়া হয়েছে, যার ফলে অপ্রয়োজনীয় ডেটাবেজ জয়েন এড়ানো সম্ভব হয়।'
        }
      },
      {
        id: 'q-asynchronous-resolver-concurrency',
        kind: 'mcq',
        topic: 'Concurrency in sibling field resolvers',
        question: {
          en: 'How does the GraphQL execution engine handle multiple sibling field resolvers on the same object level?',
          bn: 'একই অবজেক্ট লেভেলের একাধিক সমান্তরাল ফিল্ড রিসলভারের ক্ষেত্রে GraphQL এক্সিকিউশন ইঞ্জিন কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'In Query operations, sibling field resolvers execute concurrently using Promise.all, maximizing I/O parallelism',
            bn: 'Query অপারেশনের ক্ষেত্রে একই স্তরের ফিল্ড রিসলভারগুলো Promise.all দিয়ে সমান্তরালে চলে, যা সর্বোচ্চ I/O গতি নিশ্চিত করে'
          },
          {
            en: 'All sibling resolvers execute strictly serially with a 1-second pause between each',
            bn: 'সমস্ত রিসলভার প্রতিটি কলের মাঝে ১ সেকেন্ডের বিরতি দিয়ে একের পর এক চলে'
          },
          {
            en: 'Sibling resolvers run on random external cloud computers chosen by DNS',
            bn: 'ডিএনএস দ্বারা নির্বাচিত বাইরের এলোমেলো ক্লাউড কম্পিউটারে রিসলভারগুলো চলে'
          },
          {
            en: 'The engine randomly cancels half of all sibling resolvers to save CPU time',
            bn: 'সিপিইউ বাঁচাতে ইঞ্জিন সমান্তরাল ফিল্ডগুলোর অর্ধেক স্বয়ংক্রিয়ভাবে বাতিল করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Queries are read-only and have no side effects, so sibling fields resolve in parallel.',
          bn: 'কোয়েরি কেবল পড়ার জন্য এবং সাইড-ইফেক্ট মুক্ত, তাই সমান্তরাল ফিল্ডগুলো একসাথে প্রসেস হয়।'
        },
        explanation: {
          en: 'For Query operations, sibling resolvers have no execution order dependency. The engine runs them concurrently using Promise.all to minimize latency.',
          bn: 'Query অপারেশনে ফিল্ডগুলোর একে অপরের ওপর কোনো নির্ভরতা থাকে না। ইঞ্জিন Promise.all ব্যবহার করে একযোগে সেগুলোকে চালিয়ে লেটেন্সি হ্রাস করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-mutation-chapel',
    title: {
      en: 'Mutations & Input Unions — Atomic Writes, Custom Error Payloads & Idempotency',
      bn: 'মিউটেশন ও ইনপুট ইউনিয়ন — পারমাণবিক রাইট, এরর পে-লোড ও আইডেমপোটেন্সি'
    }
  }
};
