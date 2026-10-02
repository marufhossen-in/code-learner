import type { Lesson } from '../../../lib/types';

export const theRedisDistrictLesson: Lesson = {
  slug: 'the-redis-district',
  tech: 'caching',
  title: {
    en: 'Redis In-Memory Architecture, Data Structures & Memory Overhead',
    bn: 'রেডিস ইন-মেমোরি আর্কিটেকচার, ডেটা স্ট্রাকচার ও মেমোরি ওভারহেড'
  },
  summary: {
    en: 'Redis (Remote Dictionary Server) is the global gold standard for distributed in-memory caching and high-velocity data storage. Built upon a single-threaded event loop and non-blocking I/O multiplexing (epoll and kqueue), Redis executes millions of operations per second with sub-millisecond latency by eliminating multi-threaded lock contention. Beyond basic key-value strings, Redis provides rich data structures: Hashes (field-value mapping), Lists (quicklists for queues), Sets (unique membership), and Sorted Sets (skiplists for real-time leaderboards). This lesson demystifies Redis internal architecture, explores atomic Lua scripting, and calculates internal memory framing overheads (showing why a 22-byte string consumes 92 bytes of real RAM).',
    bn: 'রেডিস (Redis) হলো ডিস্ট্রিবিউটেড ইন-মেমোরি ক্যাশিং এবং দ্রুতগতির ডেটা স্টোরেজের জন্য বিশ্বব্যাপী স্বীকৃত গোল্ড স্ট্যান্ডার্ড। নিজস্ব সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ এবং নন-ব্লকিং I/O মাল্টিপ্লেক্সিং (epoll ও kqueue) ব্যবহার করে রেডিস কোনো মাল্টি-থ্রেডেড লকের ঝামেলা ছাড়াই প্রতি সেকেন্ডে লক্ষ লক্ষ অপারেশন সম্পন্ন করে। সাধারণ স্ট্রিং ছাড়াও রেডিসে রয়েছে শক্তিশালী ডেটা স্ট্রাকচার: হ্যাশ (আলাদা ফিল্ড সংরক্ষণ), লিস্ট (কিউ তৈরির জন্য), সেট (অনন্য ডেটা) এবং সর্টেড সেট (স্কিপলিস্ট দিয়ে রিয়েল-টাইম লিডারবোর্ড)। এই পাঠে রেডিসের অভ্যন্তরীণ আর্কিটেকচার, অ্যাটমিক লুয়া স্ক্রিপ্টিং এবং মেমোরি ফ্রেমওয়ার্কের বাড়তি খরচ (কেন ২২ বাইটের ডেটা মেমোরিতে ৯২ বাইট জায়গা নেয়) বিস্তারিত ব্যাখ্যা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Why Redis Dominates the In-Memory Tier',
        bn: 'মূল ধারণা: ইন-মেমোরি ক্যাশিংয়ে রেডিসের একচ্ছত্র আধিপত্য কেন?'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you build distributed systems, retrieving data in sub-millisecond windows is vital. Traditional relational databases store records on persistent disk storage, relying on complex locking mechanisms to handle concurrent connections. Redis stores its entire working dataset directly in system RAM. By utilizing a single-threaded execution loop, every command runs to completion atomically without race conditions or thread context-switching overhead.',
        bn: 'যখন আপনি ডিস্ট্রিবিউটেড সিস্টেম তৈরি করেন, তখন মিলিসেকেন্ডের ভগ্নাংশে ডেটা পাওয়া অত্যন্ত জরুরি। সাধারণ রিলেশনাল ডাটাবেস ডিস্ক বা হার্ডড্রাইভে তথ্য সংরক্ষণ করে এবং কনকারেন্ট অনুরোধ সামলাতে জটিল লক ব্যবস্থার ওপর নির্ভর করে। অন্যদিকে রেডিস তার সমস্ত সক্রিয় ডেটা সরাসরি সিস্টেম র‍্যামে রাখে। একটি একক থ্রেডেড এক্সিকিউশন লুপ ব্যবহার করায় প্রতিটি কমান্ড কোনো রেস কন্ডিশন বা থ্রেড বদলানোর সময় নষ্ট না করেই মুহূর্তের মধ্যে শেষ হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Single-Threaded Event Loop',
          def: {
            en: 'Redis executes all client read and write commands sequentially on a single CPU thread, guaranteeing strict atomic execution without locks',
            bn: 'রেডিসের সমস্ত কমান্ড একটিমাত্র সিপিইউ থ্রেডে ধারাবাহিকভাবে চলে, ফলে কোনো লক ছাড়াই প্রতিটি কাজ স্বয়ংক্রিয়ভাবে শতভাগ নিরাপদ থাকে'
          }
        },
        {
          term: 'I/O Multiplexing (epoll/kqueue)',
          def: {
            en: 'The operating system mechanism that allows a single server thread to monitor thousands of concurrent client network sockets efficiently',
            bn: 'অপারেটিং সিস্টেমের একটি বিশেষ প্রযুক্তি যার সাহায্যে একটিমাত্র সার্ভার থ্রেড একসাথে হাজার হাজার নেটওয়ার্ক সংযোগ তদারকি করতে পারে'
          }
        },
        {
          term: 'Simple Dynamic String (SDS)',
          def: {
            en: 'The C struct used by Redis to store strings, tracking length explicitly to provide O(1) strlen and complete binary safety',
            bn: 'রেডিসের নিজস্ব স্ট্রিং কাঠামো যা লেখার দৈর্ঘ্য আগেই মেপে রাখে, ফলে O(1) গতিতে যেকোনো বাইনারি ডেটা নিখুঁতভাবে সংরক্ষণ করা যায়'
          }
        },
        {
          term: 'Sorted Set (ZSet)',
          def: {
            en: 'A collection of unique strings ordered by a floating-point score, implemented with a Skip List and Hash Table for O(log N) operations',
            bn: 'স্কোর অনুযায়ী সাজানো অনন্য ডেটার তালিকা যা স্কিপলিস্ট দিয়ে চলে এবং O(log N) গতিতে লিডারবোর্ড বা রেট লিমিট পরিচালনা করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'redis-data-structures',
      text: {
        en: 'The Core Five Data Structures of Redis',
        bn: 'রেডিসের ৫টি মৌলিক ডেটা স্ট্রাকচার'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Overview of Redis Core Data Structures and Use Cases',
        bn: 'রেডিসের মৌলিক ডেটা স্ট্রাকচার ও তাদের ব্যবহার'
      },
      head: [
        { en: 'Data Structure', bn: 'ডেটা স্ট্রাকচার' },
        { en: 'Key Commands', bn: 'প্রধান কমান্ড' },
        { en: 'Time Complexity', bn: 'টাইম কমপ্লেক্সিটি' },
        { en: 'Ideal Production Use Case', bn: 'উপযুক্ত ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'String (SDS)', bn: 'String' },
          { en: 'GET, SET, INCR, MGET', bn: 'GET, SET, INCR' },
          { en: 'O(1) per key', bn: 'O(1)' },
          { en: 'HTML page fragments, serialized JSON entities, and atomic integer counters', bn: 'এইচটিএমএল ফ্র্যাগমেন্ট, জেসন অবজেক্ট ও ভিজিটর কাউন্টার' }
        ],
        [
          { en: 'Hash', bn: 'Hash' },
          { en: 'HSET, HGET, HGETALL', bn: 'HSET, HGET' },
          { en: 'O(1) per field', bn: 'O(1)' },
          { en: 'User profile objects where individual fields can be read or modified without re-serializing', bn: 'ইউজার প্রোফাইল যেখানে পুরো ডেটা না টেনে একটি ফিল্ড বদলানো যায়' }
        ],
        [
          { en: 'List (quicklist)', bn: 'List' },
          { en: 'LPUSH, RPOP, BRPOP', bn: 'LPUSH, RPOP' },
          { en: 'O(1) push and pop', bn: 'O(1)' },
          { en: 'Message queues, worker job distribution, and recent activity feeds', bn: 'মেসেজ কিউ, ব্যাকগ্রাউন্ড টাস্ক ও সাম্প্রতিক অ্যাক্টিভিটি ফিড' }
        ],
        [
          { en: 'Set (intset / dict)', bn: 'Set' },
          { en: 'SADD, SMEMBERS, SINTER', bn: 'SADD, SINTER' },
          { en: 'O(1) add and test', bn: 'O(1)' },
          { en: 'Unique user IDs, article tags, and mutual follower intersection sets', bn: 'অনন্য ইউজার আইডি, আর্টিকেল ট্যাগ ও কমন ফ্রেন্ড খোঁজা' }
        ],
        [
          { en: 'Sorted Set (ZSet)', bn: 'Sorted Set' },
          { en: 'ZADD, ZRANGE, ZREVRANK', bn: 'ZADD, ZRANGE' },
          { en: 'O(log N) insert/rank', bn: 'O(log N)' },
          { en: 'Gaming score leaderboards, sliding window rate limiters, and priority queues', bn: 'গেমের লিডারবোর্ড, রেট লিমিটার ও প্রায়োরিটি কিউ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'memory-overhead-framing',
      text: {
        en: 'The Hidden Memory Framing Cost in Redis',
        bn: 'রেডিসে মেমোরি ফ্রেমওয়ার্কের লুকানো বাড়তি খরচ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent surprise for infrastructure teams is discovering that Redis consumes far more RAM than the raw payload size of stored data. For example, storing a key "user:1000" (9 bytes) with value "Alice Johnson" (13 bytes) represents only 22 bytes of raw application data. However, Redis allocates structural headers: a dictEntry struct (24 units) and two redisObject wrappers (16 each). Adding string metadata (6) and memory alignment padding (8) brings the true memory footprint to 92 bytes. This represents an overhead factor of 4.2 times the raw payload. Understanding this framing multiplier is essential for accurate hardware sizing.',
        bn: 'অনেক ইঞ্জিনিয়ার অবাক হয়ে লক্ষ্য করেন যে রেডিসে ডেটার আসল সাইজের চেয়ে অনেক বেশি র‍্যাম খরচ হয়। উদাহরণস্বরূপ, "user:1000" (৯ বাইট) কি-তে "Alice Johnson" (১৩ বাইট) মান রাখলে মূল ডেটা হয় মাত্র ২২ বাইট। কিন্তু রেডিসকে ডাটাবেস হ্যাশ টেবিলে কি-টি বসাতে dictEntry স্ট্রাকচার (২৪ ইউনিট) এবং দুটি redisObject হেডার (প্রতিটি ১৬ ইউনিট) বরাদ্দ করতে হয়। সাথে স্ট্রিং মেটাডেটা (৬) এবং মেমোরি অ্যালাইনমেন্ট প্যাডিং (৮) যোগ করলে মোট মেমোরি খরচ দাঁড়ায় ৯২ বাইট। এটি মূল ডেটার চেয়ে ৪.২ গুণ বেশি। সার্ভারের র‍্যামের সঠিক বাজেট করতে এই গুণকটি জানা অত্যন্ত জরুরি।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Redis Memory Framing Overhead Calculator',
        bn: 'চালনাযোগ্য সিমুলেশন: রেডিস মেমোরি ফ্রেমওয়ার্ক খরচ গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the exact internal memory footprint of a string entry in Redis, showing how 22 bytes of raw text scales to 92 bytes of resident memory:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি রেডিসে একটি সাধারণ স্ট্রিং সংরক্ষণে অভ্যন্তরীণ মেমোরি খরচ হিসাব করে দেখায় কীভাবে ২২ বাইটের সাধারণ টেক্সট মেমোরিতে ৯২ বাইট জায়গা দখল করে:'
      }
    },
    {
      type: 'code',
      id: 'caching-redis-mem-sim',
      lang: 'javascript',
      code: `// Redis Internal Memory Framing Multiplier Simulator
const rawKeyBytes = 9;   // Length of key "user:1000" in ASCII bytes
const rawValBytes = 13;  // Length of value "Alice Johnson" in ASCII bytes
const rawTotalBytes = rawKeyBytes + rawValBytes; // 22 bytes raw

// Redis Internal Structural Framing:
// - dictEntry structure linking key and val: 24 bytes
// - robj (redisObject) header for key: 16 bytes
// - robj (redisObject) header for value: 16 bytes
// - SDS (Simple Dynamic String) header metadata: 6 bytes
// - jemalloc memory allocator alignment padding: 8 bytes
const redisFramingOverhead = 24 + 16 + 16 + 6 + 8; // 70 bytes

// Total actual memory allocated in system RAM
const totalRedisMemory = rawTotalBytes + redisFramingOverhead; // 92 bytes
const overheadRatio = Number((totalRedisMemory / rawTotalBytes).toFixed(1));

console.log('Raw application payload size in bytes:', rawTotalBytes);
// -> Raw application payload size in bytes: 22

console.log('Total resident memory allocated by Redis in bytes:', totalRedisMemory);
// -> Total resident memory allocated by Redis in bytes: 92

console.log('Memory footprint inflation ratio:', overheadRatio);
// -> Memory footprint inflation ratio: 4.2`,
      caption: {
        en: 'Figure 7: A 22-byte raw text pair consumes 92 bytes in Redis due to internal pointers and headers (a 4.2x multiplier)',
        bn: 'চিত্র ৭: অভ্যন্তরীণ পয়েন্টার ও হেডারের কারণে ২২ বাইটের ডেটা রেডিসে ৯২ বাইট জায়গা নেয় (৪.২ গুণ বৃদ্ধি)'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Redis Caching Deployments',
        bn: 'রেডিস ক্যাশ ডিপ্লয়মেন্টের জন্য ৪টি আবশ্যকীয় প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 operational guidelines when managing Redis in high-throughput production environments:',
        bn: 'উচ্চগতির প্রোডাকশন সিস্টেমে রেডিস পরিচালনার সময় এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Never Run KEYS * in Production',
          def: {
            en: 'The KEYS command blocks the single-threaded event loop for seconds, freezing all traffic; use SCAN for non-blocking iteration',
            bn: 'KEYS কমান্ড চালালে রেডিসের একক থ্রেড সেকেন্ডের জন্য আটকে পুরো সাইট ফ্রিজ হয়ে যায়; এর বদলে সর্বদা SCAN ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 2: Use Hashes to Store Small Objects',
          def: {
            en: 'Small hashes are internally encoded as memory-efficient ziplists/listpacks, saving up to 70% RAM compared to individual string keys',
            bn: 'ছোট অবজেক্টের জন্য হ্যাশ ব্যবহার করুন; রেডিস এগুলোকে জিপলিস্ট হিসেবে রেখে সাধারণ স্ট্রিংয়ের চেয়ে ৭০% পর্যন্ত র‍্যাম বাঁচায়'
          }
        },
        {
          term: 'Rule 3: Use Pipelines for Bulk Operations',
          def: {
            en: 'Send batches of commands across a single TCP socket with pipeline() to eliminate network round-trip overhead',
            bn: 'একসাথে অনেক কমান্ড পাঠাতে পাইপলাইন ব্যবহার করুন যাতে প্রতিটি কমান্ডের জন্য আলাদা নেটওয়ার্ক দেরি না হয়'
          }
        },
        {
          term: 'Rule 4: Execute Complex Atomic Multi-Steps via Lua Scripts',
          def: {
            en: 'Encapsulate conditional check-and-set logic in Redis Lua scripts (EVAL) to ensure atomic execution without distributed locks',
            bn: 'শর্তযুক্ত একাধিক কাজ একবারে সম্পন্ন করতে রেডিস লুয়া স্ক্রিপ্ট চালান যাতে কোনো কনকারেন্ট রেস কন্ডিশন না ঘটে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-redis-overhead-calc-ex',
      kind: 'mcq',
      topic: 'Calculating memory inflation ratio in Redis',
      question: {
        en: 'If a key-value pair contains 22 bytes of raw data, but consumes 92 bytes of resident RAM in Redis due to framing, what is the overhead ratio?',
        bn: 'একটি কি-ভ্যালু জোড়ায় ২২ বাইট ডেটা থাকার পরও হেডারের কারণে রেডিসে ৯২ বাইট র‍্যাম খরচ হলে বৃদ্ধির অনুপাত কত?'
      },
      options: [
        {
          en: '4.2x (92 / 22)',
          bn: '৪.২ গুণ (৯২ / ২২)'
        },
        {
          en: '1.0x (no overhead)',
          bn: '১.০ গুণ (কোনো বাড়তি খরচ নেই)'
        },
        {
          en: '100.0x',
          bn: '১০০.০ গুণ'
        },
        {
          en: '0.5x',
          bn: '০.৫ গুণ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide total allocated memory (92) by raw data bytes (22).',
        bn: 'মোট মেমোরি (৯২) কে আসল ডেটা (২২) দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: '92 / 22 = 4.18, rounding to 4.2x. Pointers, headers, and memory alignment multiply small string footprints.',
        bn: '৯২ কে ২২ দিয়ে ভাগ করলে ৪.১৮ বা প্রায় ৪.২ গুণ দাঁড়ায়। পয়েন্টার ও হেডারের কারণে ছোট তথ্যে এই অনুপাত বেশি হয়।'
      }
    },
    {
      id: 'caching-redis-keys-danger-ex',
      kind: 'mcq',
      topic: 'Why KEYS command is banned in production',
      question: {
        en: 'Why is running the KEYS command strictly prohibited in production Redis clusters?',
        bn: 'প্রোডাকশন রেডিস ক্লাস্টারে KEYS কমান্ড চালানো কেন সম্পূর্ণ নিষিদ্ধ?'
      },
      options: [
        {
          en: 'Because Redis is single-threaded; KEYS performs an O(N) scan that blocks the event loop, freezing all client requests until it finishes',
          bn: 'কারণ রেডিস সিঙ্গেল-থ্রেডেড; KEYS কমান্ড পুরো ডাটাবেস স্ক্যান করার সময় থ্রেড আটকে রাখে, ফলে সব ব্যবহারকারীর অনুরোধ ফ্রিজ হয়ে যায়'
        },
        {
          en: 'Because KEYS deletes all data from disk permanently',
          bn: 'কারণ KEYS কমান্ড ডিস্ক থেকে সব ডেটা চিরতরে মুছে ফেলে'
        },
        {
          en: 'Because KEYS changes all passwords to default values',
          bn: 'কারণ KEYS সব পাসওয়ার্ড ডিফল্ট করে দেয়'
        },
        {
          en: 'Because KEYS only works on Microsoft Windows operating systems',
          bn: 'কারণ KEYS কেবল উইন্ডোজে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Single-threaded event loop blockage during O(N) scans.',
        bn: 'সিঙ্গেল থ্রেড আটকে গিয়ে পুরো সাইট থমকে যাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'On a database with millions of keys, KEYS * can block the event loop for several seconds, causing massive timeouts across the entire platform.',
        bn: 'কোটি কি থাকা সিস্টেমে KEYS কমান্ড চালালে কয়েক সেকেন্ডের জন্য সব কাজ থেমে গিয়ে বিশ্বজুড়ে টাইমআউট এরর দেখা দেয়।'
      }
    },
    {
      id: 'caching-redis-lua-ex',
      kind: 'mcq',
      topic: 'Purpose of Lua scripts in Redis',
      question: {
        en: 'What architectural benefit do Lua scripts (EVAL) provide when executing multiple operations in Redis?',
        bn: 'রেডিসে একাধিক অপারেশন চালানোর সময় লুয়া স্ক্রিপ্ট (EVAL) কোন প্রধান স্থাপত্য সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'They execute atomically from start to finish on the single thread, preventing any other command from interleaving or mutating state midway',
          bn: 'এগুলো একক থ্রেডে শুরু থেকে শেষ পর্যন্ত একটানা সম্পূর্ণ হয়, ফলে মাঝপথে অন্য কোনো কমান্ড এসে ডেটা ওলটপালট করতে পারে না'
        },
        {
          en: 'They turn Redis into an Apache web server',
          bn: 'তারা রেডিসকে ওয়েব সার্ভার বানিয়ে দেয়'
        },
        {
          en: 'They download games from the internet automatically',
          bn: 'তারা ইন্টারনেট থেকে গেম ডাউনলোড করে'
        },
        {
          en: 'They eliminate the need to purchase computer RAM',
          bn: 'তারা র‍্যাম কেনার প্রয়োজনীয়তা দূর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Strict atomic execution without race conditions.',
        bn: 'একটানা নিরবচ্ছিন্নভাবে শতভাগ নিরাপদ কাজের কথা ভাবুন।'
      },
      explanation: {
        en: 'Because Redis runs the entire script without interruption, developers can implement atomic check-and-set logic without distributed locks.',
        bn: 'কোনো বিরতি ছাড়া পুরো স্ক্রিপ্ট একসাথে চলায় কোনো জটিল লক ছাড়াই নিখুঁতভাবে শতভাগ সামঞ্জস্যপূর্ণ কাজ করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-redis-district',
    title: {
      en: 'Redis Architecture & Data Structures Quiz',
      bn: 'রেডিস আর্কিটেকচার ও ডেটা স্ট্রাকচার কুইজ'
    },
    questions: [
      {
        id: 'q-caching-redis-singlethread',
        kind: 'mcq',
        topic: 'Why Redis uses a single-threaded design',
        question: {
          en: 'How does a single-threaded event loop enable Redis to achieve over 100000 operations per second?',
          bn: 'সিঙ্গেল-থ্রেডেড আর্কিটেকচার দিয়ে রেডিস কীভাবে প্রতি সেকেন্ডে ১০০০০০ এর বেশি অপারেশন সম্পন্ন করতে পারে?'
        },
        options: [
          {
            en: 'Memory access is sub-microsecond, and eliminating multi-threaded mutex locking, condition variables, and context switching maximizes CPU efficiency',
            bn: 'মেমোরি অ্যাক্সেস অতি দ্রুতগতির এবং কোনো মাল্টি-থ্রেডেড লক বা কনটেক্সট সুইচের ঝামেলা না থাকায় সিপিইউ সম্পূর্ণ দক্ষতায় কাজ করে'
          },
          {
            en: 'By overclocking the physical server processor to 100 gigahertz',
            bn: 'প্রসেসরের গতি ১০০ গিগাহার্টজে বাড়িয়ে দিয়ে'
          },
          {
            en: 'By running only on specialized military supercomputers',
            bn: 'কেবল বিশেষ সুপারকম্পিউটারে চলার মাধ্যমে'
          },
          {
            en: 'Because single-threaded programs do not use electricity',
            bn: 'কারণ সিঙ্গেল-থ্রেডেড প্রোগ্রাম কোনো বিদ্যুৎ ব্যবহার করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Zero lock contention and pure in-memory execution.',
          bn: 'লকের ঝামেলাহীন মেমোরি গতির কথা ভাবুন।'
        },
        explanation: {
          en: 'In in-memory systems, the bottleneck is CPU cache misses and lock synchronization, not raw calculation. Single-threading eliminates lock overhead completely.',
          bn: 'ইন-মেমোরি সিস্টেমে থ্রেড লক সামলাতেই সবচেয়ে বেশি সময় নষ্ট হয়; সিঙ্গেল থ্রেড সেই ওভারহেড পুরোপুরি দূর করে দেয়।'
        }
      },
      {
        id: 'q-caching-redis-ziplist-opt',
        kind: 'mcq',
        topic: 'Memory optimization via small Hashes',
        question: {
          en: 'Why do high-scale architectures store small objects in Redis Hashes rather than individual String keys?',
          bn: 'বড় সিস্টেমে ছোট অবজেক্টগুলোকে আলাদা স্ট্রিং কি না বানিয়ে রেডিস হ্যাশে (Hash) রাখা কেন বেশি সুবিধাজনক?'
        },
        options: [
          {
            en: 'Small hashes are internally compacted into contiguous ziplists/listpacks, eliminating dictEntry and robj header overhead per field',
            bn: 'ছোট হ্যাশগুলো মেমোরিতে জিপলিস্ট হিসেবে অত্যন্ত কম জায়গায় জমা থাকে, ফলে প্রতি ফিল্ডে আলাদা হেডারের বাড়তি মেমোরি অপচয় বাঁচে'
          },
          {
            en: 'Because Hashes compress all data with 7-Zip',
            bn: 'কারণ হ্যাশ সব ডেটাকে সেভেন-জিপ দিয়ে সংকুচিত করে'
          },
          {
            en: 'Because individual String keys are banned by the open-source license',
            bn: 'কারণ ওপেন সোর্স লাইসেন্সে স্ট্রিং কি নিষিদ্ধ'
          },
          {
            en: 'To hide the data from database administrators',
            bn: 'ডাটাবেস অ্যাডমিনের কাছ থেকে তথ্য গোপন রাখতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compact memory encoding eliminating per-key headers.',
          bn: 'একসাথে সাজিয়ে হেডারের অপচয় রোধের কথা ভাবুন।'
        },
        explanation: {
          en: 'Packing multiple fields into a single hash shares one key header, slashing overall RAM usage by up to 70%.',
          bn: 'একই হ্যাশে একাধিক ফিল্ড রাখলে একটিমাত্র কি-এর হেডার লাগে, যার ফলে সার্বিক র‍্যাম খরচ প্রায় ৭০% কমে যায়।'
        }
      },
      {
        id: 'q-caching-redis-pipelining',
        kind: 'mcq',
        topic: 'How Redis Pipelining speeds up bulk operations',
        question: {
          en: 'What latency bottleneck does Redis Pipelining solve when executing 50 consecutive commands?',
          bn: 'পরপর ৫০টি কমান্ড চালানোর সময় রেডিস পাইপলাইনিং কোন প্রধান সমস্যা সমাধান করে?'
        },
        options: [
          {
            en: 'It bundles all 50 commands into a single network packet, paying the network round-trip time once instead of 50 times',
            bn: 'এটি ৫০টি কমান্ড একসাথে একটিমাত্র নেটওয়ার্ক প্যাকেটে পাঠায়, ফলে ৫০ বার নেটওয়ার্ক দেরির বদলে মাত্র ১ বার সময় লাগে'
          },
          {
            en: 'It increases the download speed of the local internet connection',
            bn: 'এটি স্থানীয় ইন্টারনেটের গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It converts slow HDD drives into fast SSD drives',
            bn: 'এটি হার্ডডিস্ককে এসএসডিতে বদলে দেয়'
          },
          {
            en: 'It forces the database to delete old data automatically',
            bn: 'এটি ডাটাবেসকে পুরনো ডেটা মুছতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single network round-trip for multiple commands.',
          bn: 'বারবার নেটওয়ার্কে না গিয়ে একবারে পাঠানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Without pipelining, 50 commands with 1 ms network latency take 50 ms. With pipelining, all commands execute in a single round-trip taking ~1 ms.',
          bn: 'পাইপলাইনিং ছাড়া ৫০টি কমান্ডে ৫০ মিলিসেকেন্ড লাগে; কিন্তু পাইপলাইনিংয়ে মাত্র ১ মিলিসেকেন্ডেই সব কাজ শেষ হয়।'
        }
      },
      {
        id: 'q-caching-redis-persistence-rdb-aof',
        kind: 'mcq',
        topic: 'Difference between RDB and AOF persistence in Redis',
        question: {
          en: 'What is the operational difference between Redis RDB snapshots and AOF (Append-Only File) logging?',
          bn: 'রেডিসে RDB স্ন্যাপশট এবং AOF (Append-Only File) লগের মধ্যে কার্যগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'RDB periodically takes point-in-time binary photographs of memory, while AOF logs every single write command to an append-only log on disk',
            bn: 'RDB নির্দিষ্ট সময় পর পর মেমোরির পূর্ণাঙ্গ বাইনারি ছবি তুলে রাখে, আর AOF প্রতিটি রাইট কমান্ডকে সাথে সাথে ডিস্কের ফাইলে লিখে রাখে'
          },
          {
            en: 'RDB is used only for audio files while AOF is used for video files',
            bn: 'RDB অডিও ফাইলের জন্য আর AOF ভিডিও ফাইলের জন্য ব্যবহৃত হয়'
          },
          {
            en: 'AOF deletes the database every 10 minutes',
            bn: 'AOF প্রতি ১০ মিনিটে ডাটাবেস মুছে ফেলে'
          },
          {
            en: 'RDB requires an active internet connection to function',
            bn: 'RDB চলতে ইন্টারনেটের সার্বক্ষণিক সংযোগ লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Point-in-time binary snapshot vs continuous write log.',
          bn: 'নির্দিষ্ট সময়ের পুরো ছবি বনাম প্রতিটি কাজের ধারাবাহিক রেকর্ডের কথা ভাবুন।'
        },
        explanation: {
          en: 'RDB offers fast restarts and compact backups; AOF offers maximum durability by ensuring at most 1 second of write loss.',
          bn: 'RDB দ্রুত সার্ভার চালুর জন্য সেরা; আর AOF সর্বোচ্চ নিরাপত্তা দেয় যাতে ক্র্যাশ করলেও ১ সেকেন্ডের বেশি ডেটা না হারায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-replication-accords',
    tech: 'caching',
    title: {
      en: 'Redis High Availability, Sentinel Failover & Cluster Sharding',
      bn: 'রেডিস হাই অ্যাভেইল্যাবিলিটি, সেন্টিনেল ফেইলওভার ও ক্লাস্টার শার্ডিং'
    }
  }
};