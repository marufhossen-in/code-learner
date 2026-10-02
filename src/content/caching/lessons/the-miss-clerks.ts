import type { Lesson } from '../../../lib/types';

export const theMissClerksLesson: Lesson = {
  slug: 'the-miss-clerks',
  tech: 'caching',
  title: {
    en: 'Cache Access Patterns, Write-Behind & Negative Caching',
    bn: 'ক্যাশ অ্যাক্সেস প্যাটার্ন, রাইট-বিহাইন্ড ও নেগেটিভ ক্যাশিং'
  },
  summary: {
    en: 'Architecting high-throughput data systems requires selecting the optimal interaction pattern between application code, cache storage, and authoritative databases. Beyond traditional Cache-Aside, systems leverage Read-Through (transparent retrieval), Write-Through (synchronous consistency), and Write-Behind (asynchronous batched flushes for extreme write throughput). Furthermore, systems must defend against Cache Penetration — where attackers query non-existent keys to bypass the cache and exhaust database connections. This lesson explores write patterns, demonstrates Bloom filters, and implements Negative Caching (caching empty results with short TTLs) to eliminate 99.9% of malicious database penetration.',
    bn: 'উচ্চগতির ডেটা সিস্টেমে অ্যাপ্লিকেশন, ক্যাশ মেমোরি এবং মূল ডাটাবেসের মধ্যে যোগাযোগের সঠিক প্যাটার্ন বেছে নেওয়া অত্যন্ত জরুরি। সাধারণ ক্যাশ-অ্যাসাইড ছাড়াও সিস্টেমে রিড-থ্রু (স্বচ্ছ ডেটা আনয়ন), রাইট-থ্রু (একযোগে নিশ্চিত লেখা) এবং রাইট-বিহাইন্ড (অ্যাসিনক্রোনাস ব্যাচ রাইট দিয়ে দ্রুতগতি প্রদান) ব্যবহৃত হয়। তাছাড়া ক্যাশ পেনিট্রেশন আক্রমণ — যেখানে আক্রমণকারীরা উদ্দেশ্যপ্রণোদিতভাবে অস্তিত্বহীন কি-এর জন্য অনুরোধ পাঠিয়ে ক্যাশ পাশ কাটিয়ে ডাটাবেস ক্র্যাশ করায় — তা প্রতিহত করা শেখানো হয়েছে। এই পাঠে ব্লুম ফিল্টার ও নেগেটিভ ক্যাশিং (স্বল্পমেয়াদে খালি ফলাফল ক্যাশ করা) প্রয়োগ করে ডাটাবেসের ৯৯.৯% অপ্রয়োজনীয় চাপ দূর করা দেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Who Orchestrates the Cache Journey?',
        bn: 'মূল ধারণা: ক্যাশের দায়িত্ব কার হাতে থাকবে?'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'In basic software design, application code manually issues get and set commands to the cache. As architectures scale, decoupling data access logic into standardized patterns improves maintainability and system resilience. Understanding whether reads and writes occur inline or asynchronously determines your system throughput limits.',
        bn: 'সাধারণ সফটওয়্যারে অ্যাপ্লিকেশন কোড নিজেই সরাসরি ক্যাশে খোঁজাখুঁজি করে। কিন্তু সিস্টেম বড় হলে ডেটা ব্যবস্থাপনাকে সুনির্দিষ্ট প্যাটার্নে আলাদা করলে কোড পরিচ্ছন্ন থাকে এবং কাজের গতি বাড়ে। ডেটা পড়া ও লেখার কাজটি সরাসরি হবে নাকি ব্যাকগ্রাউন্ডে হবে, তার ওপর নির্ভর করে সিস্টেমের সর্বোচ্চ ধারণক্ষমতা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Read-Through Pattern',
          def: {
            en: 'The application queries the cache layer directly; on a miss, the cache itself fetches data from the database and returns it transparently',
            bn: 'অ্যাপ্লিকেশন কেবল ক্যাশের সাথেই কথা বলে; ক্যাশে ডেটা না থাকলে ক্যাশ নিজেই ডাটাবেস থেকে এনে অ্যাপকে ফেরত দেয়'
          }
        },
        {
          term: 'Write-Through Pattern',
          def: {
            en: 'The application writes to the cache, and the cache synchronously writes to the database before confirming success to the caller',
            bn: 'অ্যাপ্লিকেশন ক্যাশে ডেটা লেখে এবং ক্যাশ সাথে সাথে ডাটাবেসে লিখে উভয়টি নিশ্চিত করার পর সফলতার সংকেত দেয়'
          }
        },
        {
          term: 'Write-Behind (Write-Back)',
          def: {
            en: 'The application writes to fast cache memory immediately; a background queue asynchronously batches and flushes writes to the database',
            bn: 'অ্যাপ্লিকেশন দ্রুতগতির ক্যাশে লিখে সাথে সাথে সাড়া দেয়; ব্যাকগ্রাউন্ডে একটি কিউ ধীরে ধীরে ব্যাচ আকারে ডাটাবেসে সেভ করে'
          }
        },
        {
          term: 'Negative Caching',
          def: {
            en: 'Caching the absence of data (null or missing results) with a short TTL to prevent repeated database misses on non-existent records',
            bn: 'অস্তিত্বহীন তথ্যের ফলাফলকে (খালি বা নাল) অল্প সময়ের জন্য ক্যাশ করে রাখা যাতে বারবার ডাটাবেসে অপ্রয়োজনীয় কোয়েরি না যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'pattern-matrix',
      text: {
        en: 'Architectural Comparison: Four Caching Patterns',
        bn: 'আর্কিটেকচার তুলনা: ৪টি প্রধান ক্যাশিং প্যাটার্ন'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Cache Access and Mutation Patterns',
        bn: 'ক্যাশ অ্যাক্সেস ও রাইট প্যাটার্নের তুলনা'
      },
      head: [
        { en: 'Pattern', bn: 'প্যাটার্ন' },
        { en: 'Write Latency', bn: 'লেখার সময়' },
        { en: 'Data Consistency', bn: 'তথ্যের নিশ্চয়তা' },
        { en: 'Ideal Production Use Case', bn: 'উপযুক্ত ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Cache-Aside (Lazy)', bn: 'ক্যাশ-অ্যাসাইড' },
          { en: 'Fast (writes DB, deletes cache key)', bn: 'দ্রুত (ডিবি লিখে ক্যাশ ডিলিট)' },
          { en: 'Eventual consistency (subsequent read refills)', bn: 'ইভেনচুয়াল কনসিস্টেন্সি' },
          { en: 'General-purpose read-heavy web applications and microservices', bn: 'সাধারণ ওয়েব অ্যাপ ও রিড-হেভি মাইক্রোসার্ভিস' }
        ],
        [
          { en: 'Read-Through', bn: 'রিড-থ্রু' },
          { en: 'Identical to Cache-Aside', bn: 'ক্যাশ-অ্যাসাইডের অনুরূপ' },
          { en: 'Consistent through unified data access layer', bn: 'একক ডেটা লেয়ারের মাধ্যমে সামঞ্জস্যপূর্ণ' },
          { en: 'Abstracted ORMs and enterprise data gateway services', bn: 'এন্টারপ্রাইজ ডেটা গেটওয়ে ও ওআরএম স্তর' }
        ],
        [
          { en: 'Write-Through', bn: 'রাইট-থ্রু' },
          { en: 'Slower (pays cache write + DB write synchronously)', bn: 'ধীর (ক্যাশ ও ডিবি দুটোতেই একযোগে লিখে)' },
          { en: 'Strict consistency; cache never contains stale values', bn: 'কঠোর সামঞ্জস্য; ক্যাশে কখনো ভুল থাকে না' },
          { en: 'Financial ledgers, payment balances, and audit trails', bn: 'আর্থিক লেনদেন ও ব্যাংক একাউন্ট ব্যালেন্স' }
        ],
        [
          { en: 'Write-Behind (Write-Back)', bn: 'রাইট-বিহাইন্ড' },
          { en: 'Ultra-fast (1 ms memory write, DB updated later)', bn: 'অতি দ্রুত (১ মিলিসেকেন্ডে ক্যাশে লিখে শেষ)' },
          { en: 'Risk of data loss if cache crashes before database flush', bn: 'ক্যাশ ক্র্যাশ করলে শেষ কিছু ডেটা হারানোর ঝুঁকি' },
          { en: 'IoT sensor telemetry, video game stats, website view counters', bn: 'আইওটি সেন্সর ডেটা ও ভিউ কাউন্টার ট্র্যাকিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'cache-penetration-and-negative-caching',
      text: {
        en: 'Defeating Cache Penetration with Negative Caching',
        bn: 'নেগেটিভ ক্যাশিং দিয়ে ক্যাশ পেনিট্রেশন প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Cache Penetration occurs when clients continuously request keys that do not exist in either the cache or the database (for instance, querying /users/-9999 or random UUID strings). Because the key never exists, every single request bypasses the cache entirely and hits the database. Under an automated bot assault of 1000 requests per second, the database is overwhelmed with futile SELECT queries. The solution is Negative Caching: when the database returns null or record not found, store a sentinel null value in the cache with a short TTL (such as 60 seconds). Subsequent queries for that non-existent entity return the cached null instantly, saving 999 database queries.',
        bn: 'ক্যাশ পেনিট্রেশন ঘটে যখন ক্লায়েন্ট বা বট এমন কি-এর জন্য বারবার অনুরোধ পাঠায় যা ক্যাশ বা ডাটাবেস কোনোটিতেই নেই (যেমন /users/-9999)। যেহেতু ডেটাটি কোথাও নেই, তাই প্রতিবার ক্যাশে মিস হয়ে অনুরোধটি সরাসরি ডাটাবেসে গিয়ে আঘাত হানে। প্রতি সেকেন্ডে ১০০০টি ভুয়া অনুরোধ এলে ডাটাবেসের স্বাভাবিক কার্যক্রম বন্ধ হয়ে যেতে পারে। এর সহজ সমাধান হলো নেগেটিভ ক্যাশিং: ডাটাবেসে ডেটা না পেলে ক্যাশে স্বল্প মেয়াদের জন্য (যেমন ৬০ সেকেন্ড) একটি খালি বা নাল মান জমা রাখা হয়। এর ফলে পরবর্তী ১০০০টি অনুরোধের মধ্যে ৯৯৯টিই ক্যাশ থেকে শূন্য ফলাফল নিয়ে ফিরে যায় এবং ডাটাবেস সম্পূর্ণ সুরক্ষিত থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Negative Caching Database Load Reduction',
        bn: 'চালনাযোগ্য সিমুলেশন: নেগেটিভ ক্যাশিংয়ে ডাটাবেস লোড হ্রাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates an attack of 1000 requests for a missing user ID, demonstrating how negative caching reduces database queries by 99.9%:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি অস্তিত্বহীন আইডিতে ১০০০ অনুরোধের ক্ষেত্রে নেগেটিভ ক্যাশিং কীভাবে ডাটাবেসের ৯৯.৯% চাপ বাঁচায় তা গণনা করে:'
      }
    },
    {
      type: 'code',
      id: 'caching-negative-sim',
      lang: 'javascript',
      code: `// Negative Caching Load Offload Simulator
const totalQueriesForMissingUser = 1000;
const negativeCacheTtlSeconds = 60; // 60 second safety TTL

// Without negative caching: all 1000 requests hit database
// With negative caching: request 1 hits DB and caches null; next 999 hit cache
const dbQueriesWithNegativeCache = 1;
const dbQueriesSaved = totalQueriesForMissingUser - dbQueriesWithNegativeCache;
const loadReductionPercent = ((dbQueriesSaved / totalQueriesForMissingUser) * 100);

console.log('Total incoming requests for missing ID:', totalQueriesForMissingUser);
// -> Total incoming requests for missing ID: 1000

console.log('Database queries executed with negative cache:', dbQueriesWithNegativeCache);
// -> Database queries executed with negative cache: 1

console.log('Database queries prevented by negative caching:', dbQueriesSaved);
// -> Database queries prevented by negative caching: 999

console.log('Database query load reduction percentage:', Number(loadReductionPercent.toFixed(1)));
// -> Database query load reduction percentage: 99.9`,
      caption: {
        en: 'Figure 4: Negative caching blocks 999 out of 1000 penetration attempts, achieving a 99.9% database query reduction',
        bn: 'চিত্র ৪: নেগেটিভ ক্যাশিং ১০০০টি অনুরোধের মধ্যে ৯৯৯টি ব্লক করে ডাটাবেসের ৯৯.৯% কোয়েরি চাপ হ্রাস করে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Cache Access Design',
        bn: 'ক্যাশ অ্যাক্সেস প্যাটার্নের জন্য ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 operational standards when structuring application data pipelines:',
        bn: 'অ্যাপ্লিকেশনে ডেটা পাইপলাইন তৈরির সময় এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Apply Short TTL to Negative Caches',
          def: {
            en: 'Never cache null values for long durations; set TTL to 30 or 60 seconds so newly registered users can log in quickly',
            bn: 'খালি মান কখনো বেশি সময়ের জন্য ক্যাশ করবেন না; ৩০ বা ৬০ সেকেন্ড মেয়াদ রাখুন যাতে নতুন ইউজার রেজিস্টার করলে দ্রুত লগইন করতে পারে'
          }
        },
        {
          term: 'Rule 2: Protect Write-Behind with Persistent Buffers',
          def: {
            en: 'When using Write-Behind, ensure the write buffer is backed by persistent storage (like Kafka or Redis AOF) to prevent data loss on crash',
            bn: 'রাইট-বিহাইন্ডে মেমোরির সাথে কাফকা বা পারসিস্টেন্ট কিউ রাখুন যাতে সার্ভার ক্র্যাশ করলেও জমাকৃত ডেটা হারিয়ে না যায়'
          }
        },
        {
          term: 'Rule 3: Deploy Bloom Filters for Massive Non-Existent Key Spaces',
          def: {
            en: 'Place a probabilistic Bloom Filter in front of the cache to instantly reject queries for IDs that definitely do not exist',
            bn: 'বিশাল ডেটাসেটে ব্লুম ফিল্টার ব্যবহার করুন যা মেমোরিতেই নিশ্চিত বলে দিতে পারে কোনো আইডি ডাটাবেসে আছে কি নেই'
          }
        },
        {
          term: 'Rule 4: Use Write-Through for Strict Consistency Ledgers',
          def: {
            en: 'When writing financial balances or inventory stock, write through to the database synchronously before acknowledging client requests',
            bn: 'টাকার হিসাব বা পণ্যের মজুত পরিবর্তনের সময় রাইট-থ্রু ব্যবহার করে ডাটাবেসে নিশ্চিত সেভ হওয়ার পরই ব্যবহারকারীকে জানান'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-negative-calc-ex',
      kind: 'mcq',
      topic: 'Database query reduction with negative caching',
      question: {
        en: 'If an attacker sends 1000 requests for an invalid user ID, how many database queries are saved by caching the null result after the first lookup?',
        bn: 'আক্রমণকারী যদি ভুল আইডিতে ১০০০ অনুরোধ পাঠায়, তবে প্রথমবার খোঁজার পর নাল মান ক্যাশ করলে কতটি ডাটাবেস কোয়েরি বাঁচে?'
      },
      options: [
        {
          en: '999 queries (1000 total requests minus 1 initial query)',
          bn: '৯৯৯টি কোয়েরি (১০০০টি মোট অনুরোধ থেকে প্রথম ১টি বাদ)'
        },
        {
          en: '1000 queries',
          bn: '১০০০টি কোয়েরি'
        },
        {
          en: '0 queries',
          bn: '০টি কোয়েরি'
        },
        {
          en: '500 queries',
          bn: '৫০০টি কোয়েরি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only the very first request queries the DB; the remaining 999 hit the cache.',
        bn: 'শুধুমাত্র প্রথম ১টি অনুরোধ ডাটাবেসে যায়; বাকি ৯৯৯টি ক্যাশ থেকে উত্তর পায়।'
      },
      explanation: {
        en: 'Request 1 executes the database SELECT, finds nothing, and writes a null key with a short TTL. The other 999 requests read that cached null.',
        bn: 'প্রথম ১টি অনুরোধ ডাটাবেস দেখে কিছু না পেয়ে ক্যাশে নাল সেভ করে। ফলে বাকি ৯৯৯টি অনুরোধ ডাটাবেসে না গিয়ে ক্যাশ থেকেই ফিরে যায়।'
      }
    },
    {
      id: 'caching-write-behind-risk-ex',
      kind: 'mcq',
      topic: 'The core risk of Write-Behind caching',
      question: {
        en: 'What is the primary architectural vulnerability associated with Write-Behind (Write-Back) caching?',
        bn: 'রাইট-বিহাইন্ড (Write-Back) ক্যাশিংয়ের প্রধান কারিগরি ঝুঁকি কোনটি?'
      },
      options: [
        {
          en: 'If the cache node abruptly crashes or loses power before the background worker flushes writes to disk, unpersisted data is permanently lost',
          bn: 'ব্যাকগ্রাউন্ড ওয়ার্কার ডাটাবেসে লেখার আগেই যদি ক্যাশ নোড ক্র্যাশ করে বা বিদ্যুৎ চলে যায়, তবে মেমোরির জমাকৃত ডেটা চিরতরে হারিয়ে যায়'
        },
        {
          en: 'Write-Behind makes database reads 100 times slower',
          bn: 'রাইট-বিহাইন্ড ডাটাবেস পড়া ১০০ গুণ ধীর করে দেয়'
        },
        {
          en: 'It requires deleting the entire database schema every midnight',
          bn: 'এতে প্রতি মধ্যরাতে পুরো ডাটাবেস টেবিল মুছে ফেলতে হয়'
        },
        {
          en: 'It prevents JavaScript from running on mobile devices',
          bn: 'এটি মোবাইলে জাভাস্ক্রিপ্ট চলা বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Asynchronous delayed writes risk data loss on sudden power failure.',
        bn: 'মেমোরিতে রেখে পরে লেখার কারণে ক্র্যাশ করলে ডেটা হারানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'Because acknowledgement occurs as soon as data hits RAM, any hardware failure prior to the database flush results in data loss.',
        bn: 'যেহেতু র‍্যামে আসার সাথে সাথেই ব্যবহারকারীকে সফল বলা হয়, তাই ডাটাবেসে পৌঁছানোর আগে সার্ভার বন্ধ হলে ওই ডেটা আর মেলে না।'
      }
    },
    {
      id: 'caching-bloom-filter-ex',
      kind: 'mcq',
      topic: 'How Bloom Filters prevent cache penetration',
      question: {
        en: 'How does a Bloom filter protect both cache and database from cache penetration attacks?',
        bn: 'ব্লুম ফিল্টার কীভাবে ক্যাশ এবং ডাটাবেস উভয়কে ক্যাশ পেনিট্রেশন আক্রমণ থেকে রক্ষা করে?'
      },
      options: [
        {
          en: 'It determines with complete certainty if an element definitely does not exist in the database, allowing immediate rejection without any I/O',
          bn: 'এটি শতভাগ নিশ্চিতভাবে বলে দিতে পারে কোনো ডেটা ডাটাবেসে নেই, ফলে কোনো মেমোরি বা ডিস্ক কল ছাড়াই অনুরোধ বাতিল করা যায়'
        },
        {
          en: 'It converts SQL database tables into video files',
          bn: 'এটি ডাটাবেস টেবিলকে ভিডিও ফাইলে রূপান্তর করে'
        },
        {
          en: 'It automatically bans all users from visiting the website',
          bn: 'এটি সব ব্যবহারকারীকে ওয়েবসাইটে ঢুকতে নিষিদ্ধ করে'
        },
        {
          en: 'It decrypts HTTPS traffic in the browser',
          bn: 'এটি ব্রাউজারে এইচটিটিপিএস ট্রাফিক ডিক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Definitive negative responses with zero database lookups.',
        bn: 'কোনো ডেটা নিশ্চিতভাবে ডাটাবেসে না থাকলে সাথে সাথে না বলে দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Bloom filters have zero false negatives: if the filter says an ID does not exist, it definitely does not exist, saving both cache and DB lookups.',
        bn: 'ব্লুম ফিল্টারে কোনো ফলস নেগেটিভ হয় না: ফিল্টার না বললে ওই ডেটা নিশ্চিতভাবেই নেই, ফলে কোনো কোয়েরি করার প্রয়োজন পড়ে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-miss-patterns',
    title: {
      en: 'Cache Access Patterns & Negative Caching Quiz',
      bn: 'ক্যাশ অ্যাক্সেস প্যাটার্ন ও নেগেটিভ ক্যাশিং কুইজ'
    },
    questions: [
      {
        id: 'q-caching-penetration-nature',
        kind: 'mcq',
        topic: 'Definition of Cache Penetration',
        question: {
          en: 'What distinguishes Cache Penetration from a standard cache miss?',
          bn: 'সাধারণ ক্যাশ মিসের সাথে ক্যাশ পেনিট্রেশনের মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'In Cache Penetration, the requested key does not exist in the database either, causing every repeated request to hit the database directly',
            bn: 'ক্যাশ পেনিট্রেশনে কাঙ্ক্ষিত ডেটা ডাটাবেসেও থাকে না, ফলে প্রতিটি অনুরোধ সরাসরি ডাটাবেসে গিয়ে আঘাত হানে'
          },
          {
            en: 'Cache Penetration only happens when the internet cable is unplugged',
            bn: 'ক্যাশ পেনিট্রেশন কেবল ইন্টারনেটের তার খুলে ফেললে ঘটে'
          },
          {
            en: 'It refers to upgrading RAM memory chips on the motherboard',
            bn: 'এটি মাদারবোর্ডে র‍্যাম বাড়ানোকে বোঝায়'
          },
          {
            en: 'Cache Penetration means database passwords have been stolen',
            bn: 'এর মানে ডাটাবেস পাসওয়ার্ড চুরি হয়ে গেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Non-existent data queried continuously, bypassing cache.',
          bn: 'ডাটাবেসেও অস্তিত্ব না থাকা তথ্যের জন্য বারবার কোয়েরি যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Standard misses populate the cache for subsequent callers; penetration queries never find data, so the cache remains empty without negative caching.',
          bn: 'সাধারণ মিসে পরের কলের জন্য ডেটা জমা হয়; কিন্তু পেনিট্রেশনে ডেটাই না থাকায় ক্যাশ খালি থাকে এবং প্রতিবার ডাটাবেসে চাপ পড়ে।'
        }
      },
      {
        id: 'q-caching-negative-ttl-length',
        kind: 'mcq',
        topic: 'Why negative cache entries must have brief TTLs',
        question: {
          en: 'Why should negative cache entries (caching null values) have short TTLs (e.g. 60 seconds) rather than 24 hours?',
          bn: 'নেগেটিভ ক্যাশের (নাল মান) মেয়াদ ২৪ ঘণ্টার বদলে কেন খুব কম (যেমন ৬০ সেকেন্ড) হওয়া উচিত?'
        },
        options: [
          {
            en: 'If a user registers an account with that ID moments later, a 24-hour negative cache would falsely report that the user does not exist for an entire day',
            bn: 'কয়েক মুহূর্ত পর যদি কোনো ব্যবহারকারী ওই আইডিতে অ্যাকাউন্ট খোলে, তবে ২৪ ঘণ্টার ক্যাশ থাকলে সারাদিন তাকে অস্তিত্বহীন দেখাবে'
          },
          {
            en: 'Because Redis crashes if a null key lives longer than 5 minutes',
            bn: 'কারণ নাল কি ৫ মিনিটের বেশি থাকলে রেডিস ক্র্যাশ করে'
          },
          {
            en: 'Because null keys consume 10 megabytes of memory each',
            bn: 'কারণ প্রতিটি নাল কি ১০ মেগাবাইট মেমোরি দখল করে'
          },
          {
            en: 'To force browsers to clear local history',
            bn: 'ব্রাউজারের হিস্ট্রি মুছে ফেলতে বাধ্য করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prevents newly created records from being masked as non-existent.',
          bn: 'নতুন তৈরি হওয়া ডেটা যাতে ব্লক না থাকে সে কথা ভাবুন।'
        },
        explanation: {
          en: 'Short TTLs allow newly inserted records to become visible quickly without waiting hours for stale negative markers to clear.',
          bn: 'স্বল্প মেয়াদ রাখলে নতুন রেকর্ড তৈরি হলে তা দ্রুত দৃশ্যমান হয় এবং সিস্টেমে কৃত্রিম বাধা তৈরি হয় না।'
        }
      },
      {
        id: 'q-caching-write-through-consistency',
        kind: 'mcq',
        topic: 'Consistency guarantee of Write-Through caching',
        question: {
          en: 'Why is Write-Through caching considered the safest pattern for financial applications?',
          bn: 'আর্থিক লেনদেনের সিস্টেমে রাইট-থ্রু ক্যাশিং কেন সবচেয়ে নিরাপদ প্যাটার্ন হিসেবে বিবেচিত হয়?'
        },
        options: [
          {
            en: 'Writes are executed synchronously to both cache and database before returning success, ensuring the cache is always completely in sync with the database',
            bn: 'সাফল্য জানানোর আগেই ক্যাশ ও ডাটাবেস উভয়টিতে একসাথে নিশ্চিতভাবে লেখা হয়, ফলে তথ্যে কোনো অমিল থাকে না'
          },
          {
            en: 'It encrypts all bank account numbers with AES-256 automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে সব ব্যাংক অ্যাকাউন্ট নাম্বার এনক্রিপ্ট করে'
          },
          {
            en: 'It runs without connecting to any database server',
            bn: 'এটি কোনো ডাটাবেস সার্ভার ছাড়াই কাজ করে'
          },
          {
            en: 'Because Write-Through caches are legally certified by governments',
            bn: 'কারণ রাইট-থ্রু ক্যাশ সরকার দ্বারা অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Synchronous dual-persistence before success acknowledgement.',
          bn: 'উভয় জায়গায় একসাথে সেভ করে তবেই ইউজারকে জানানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Because the database write finishes before the client receives an HTTP success confirmation, there is zero risk of serving stale or lost balances.',
          bn: 'ক্লায়েন্ট সফলতার সংকেত পাওয়ার আগেই ডাটাবেস আপডেট সম্পন্ন হয়, ফলে কোনো পুরনো তথ্য বা ডেটা হারানোর সুযোগ থাকে না।'
        }
      },
      {
        id: 'q-caching-refresh-ahead',
        kind: 'mcq',
        topic: 'How Refresh-Ahead functions for hot keys',
        question: {
          en: 'What is the operational mechanism behind Refresh-Ahead caching for viral, hot keys?',
          bn: 'অতিরিক্ত জনপ্রিয় বা ভাইরাল কি-এর ক্ষেত্রে রিফ্রেশ-অ্যাহেড (Refresh-Ahead) ক্যাশিং কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'When a request accesses a key whose TTL has elapsed past a threshold (e.g. 80% expired), an asynchronous background task refreshes the value before it dies',
            bn: 'কি-এর মেয়াদের বেশিরভাগ অংশ (যেমন ৮০%) পার হলে কোনো রিড এলে ব্যাকগ্রাউন্ডে আগেই নতুন ডেটা এনে ক্যাশ নবায়ন করা হয় যাতে কি কখনো খালি না হয়'
          },
          {
            en: 'It restarts all microservices every 10 seconds',
            bn: 'এটি প্রতি ১০ সেকেন্ডে সব মাইক্রোসার্ভিস রিস্টার্ট করে'
          },
          {
            en: 'It permanently disables the database query cache',
            bn: 'এটি ডাটাবেসের কোয়েরি ক্যাশ চিরতরে বন্ধ করে দেয়'
          },
          {
            en: 'It sends text messages to system administrators on every cache hit',
            bn: 'এটি প্রতি হিটে সিস্টেম অ্যাডমিনকে এসএমএস পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preemptive asynchronous refresh before TTL expiration.',
          bn: 'মেয়াদ শেষ হওয়ার আগেই ব্যাকগ্রাউন্ডে নতুন তথ্য এনে রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'Refresh-Ahead ensures hot keys never expire in production, providing uninterrupted sub-millisecond cache hits for all users.',
          bn: 'রিফ্রেশ-অ্যাহেড নিশ্চিত করে যে জনপ্রিয় কি-গুলো কখনো শূন্য হয় না, ফলে সমস্ত ব্যবহারকারী নিরবচ্ছিন্ন দ্রুতগতি পায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-eviction-court',
    tech: 'caching',
    title: {
      en: 'Cache Eviction Policies, O(1) LRU Data Structures & Belady Anomaly',
      bn: 'ক্যাশ ইভিকশন পলিসি, O(1) LRU ডেটা স্ট্রাকচার ও বেলাডি অ্যানোমালি'
    }
  }
};