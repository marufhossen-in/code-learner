import type { Lesson } from '../../../lib/types';

export const residenceLesson: Lesson = {
  slug: 'the-residence-vow',
  tech: 'caching',
  title: {
    en: 'Caching Fundamentals, Memory Hierarchy & Cache-Aside Architecture',
    bn: 'ক্যাশিং ফান্ডামেন্টালস, মেমোরি হায়ারার্কি ও ক্যাশ-অ্যাসাইড আর্কিটেকচার'
  },
  summary: {
    en: 'Caching is the fundamental technique of storing copies of data in fast, accessible memory to serve future requests with minimal latency. Memory in modern computing is stratified across physical hardware layers: CPU L1/L2 caches operate in nanoseconds, system RAM responds in approximately 100 nanoseconds, solid-state drives require microseconds, and network database calls take tens of milliseconds. This lesson demystifies the mathematics of cache hits, misses, and hit rate ratios. You will learn how improving hit rates from 90 percent to 99 percent slashes average latency by a factor of 5 and reduces origin database queries tenfold. We build the industry-standard Cache-Aside pattern in TypeScript, demonstrating robust read paths, write invalidations, and latency budgeting.',
    bn: 'ক্যাশিং হলো দ্রুতগতির মেমোরিতে ডেটার অনুলিপি সংরক্ষণ করার মৌলিক কৌশল, যাতে ভবিষ্যতের অনুরোধগুলো সর্বনিম্ন দেরিতে দ্রুত সরবরাহ করা যায়। আধুনিক কম্পিউটারে মেমোরি বিভিন্ন স্তরে বিন্যস্ত: সিপিইউ এল১/এল২ ক্যাশ ন্যানোসেকেন্ডে কাজ করে, সিস্টেম র‍্যাম প্রায় ১০০ ন্যানোসেকেন্ডে সাড়া দেয়, এসএসডি ড্রাইভের জন্য মাইক্রোসেকেন্ড লাগে এবং নেটওয়ার্ক ডাটাবেস কলগুলোতে দশ থেকে শত মিলিসেকেন্ড সময় ব্যয় হয়। এই পাঠে ক্যাশ হিট, মিস এবং হিট রেটের গাণিতিক হিসাব সহজভাবে ব্যাখ্যা করা হয়েছে। আপনি দেখবেন কীভাবে হিট রেট ৯০ শতাংশ থেকে ৯৯ শতাংশে উন্নীত করলে গড় লেটেন্সি ৫ গুণ কমে যায় এবং মূল ডাটাবেসের ওপর চাপ ১০ গুণ হ্রাস পায়। আমরা টাইপস্ক্রিপ্টে বহুল ব্যবহৃত ক্যাশ-অ্যাসাইড প্যাটার্ন তৈরি করব।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Why Caching Governs Modern System Performance',
        bn: 'মূল ধারণা: ক্যাশিং কেন আধুনিক সিস্টেম পারফরম্যান্সের ভিত্তি'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Every computing request involves moving data across physical hardware. In modern computers, memory is arranged hierarchically by speed, cost, and capacity. Small, ultra-fast memory sits directly on the CPU die, while large, economical storage resides across network servers. Caching stores the most frequently requested data near the application, bypassing slow database queries.',
        bn: 'প্রতিটি কম্পিউটিং অনুরোধে হার্ডওয়্যারের মধ্য দিয়ে ডেটা আদান-প্রদান করতে হয়। আধুনিক কম্পিউটারে গতি, খরচ এবং ধারণক্ষমতার ওপর ভিত্তি করে মেমোরি ধাপে ধাপে সাজানো থাকে। ক্ষুদ্র ও অতি দ্রুতগতির মেমোরি সিপিইউ প্রসেসরে বসানো থাকে, আর বিশাল অথচ সস্তা স্টোরেজ থাকে দূরবর্তী নেটওয়ার্ক সার্ভারে। ক্যাশিং সবচেয়ে বেশি ব্যবহৃত ডেটাকে অ্যাপ্লিকেশনের কাছে জমিয়ে রেখে ধীরগতির ডাটাবেস কোয়েরি এড়িয়ে চলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cache Hit',
          def: {
            en: 'When requested data is found immediately in the fast cache store, returning the response without touching the primary database',
            bn: 'অনুরোধ করা ডেটা যখন সরাসরি দ্রুতগতির ক্যাশে পাওয়া যায় এবং মূল ডাটাবেসে না গিয়েই তাত্ক্ষণিক ফলাফল ফেরত দেয়'
          }
        },
        {
          term: 'Cache Miss',
          def: {
            en: 'When requested data is not present in the cache, forcing the system to query the slower origin database and populate the cache',
            bn: 'ক্যাশে কাঙ্ক্ষিত ডেটা না থাকলে যখন ধীরগতির মূল ডাটাবেস থেকে ডেটা আনতে হয় এবং পরবর্তী ব্যবহারের জন্য ক্যাশে জমা রাখতে হয়'
          }
        },
        {
          term: 'Hit Rate',
          def: {
            en: 'The ratio of cache hits to total requests (hits / total requests), serving as the primary benchmark of caching effectiveness',
            bn: 'মোট অনুরোধের কত শতাংশ ক্যাশ থেকে সফলভাবে মেটানো গেল তার অনুপাত (হিট / মোট অনুরোধ), যা ক্যাশের কার্যকারিতা পরিমাপ করে'
          }
        },
        {
          term: 'Cache-Aside Pattern',
          def: {
            en: 'An architectural pattern where the application first checks the cache, queries the database on a miss, and updates the cache before responding',
            bn: 'একটি সাধারণ আর্কিটেকচার যেখানে অ্যাপ্লিকেশন আগে ক্যাশ দেখে, না পেলে ডাটাবেস থেকে এনে ক্যাশে রাখে এবং ফলাফল প্রদান করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'hardware-latency-hierarchy',
      text: {
        en: 'The Physical Latency Ladder: Nanoseconds to Milliseconds',
        bn: 'হার্ডওয়্যার লেটেন্সি মই: ন্যানোসেকেন্ড থেকে মিলিসেকেন্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To understand why caching matters, consider the physical time needed to fetch one byte from different computer subsystems. Accessing an L1 CPU cache takes about 0.5 nanoseconds. Reading from main system memory (RAM) takes roughly 100 nanoseconds — about 200 times slower. Next on the ladder, solid-state NVMe drives require approximately 100 microseconds (1000 times slower than RAM). Fetching data across a network database takes 10 to 100 milliseconds. Because network calls are hundreds of thousands of times slower than memory, caching an answer in RAM transforms system responsiveness.',
        bn: 'ক্যাশিংয়ের গুরুত্ব বুঝতে বিভিন্ন হার্ডওয়্যার মাধ্যম থেকে এক বাইট ডেটা পড়তে কত সময় লাগে তা জানা জরুরি। সিপিইউ এল১ ক্যাশ পড়তে সময় লাগে প্রায় ০.৫ ন্যানোসেকেন্ড। মূল সিস্টেম র‍্যাম থেকে ডেটা পড়তে লাগে প্রায় ১০০ ন্যানোসেকেন্ড — যা ২০০ গুণ ধীর। এর পরের ধাপে সলিড-স্টেট এনভিএমই ড্রাইভ থেকে ডেটা পড়তে লাগে প্রায় ১০০ মাইক্রোসেকেন্ড (র‍্যামের চেয়ে ১০০০ গুণ ধীর)। আর নেটওয়ার্ক ডাটাবেস থেকে কোয়েরি করতে ১০ থেকে ১০০ মিলিসেকেন্ড পর্যন্ত সময় লাগে। নেটওয়ার্কের ধীরগতির তুলনায় মেমোরি লাখ গুণ দ্রুত হওয়ায় র‍্যামে ক্যাশ রাখলে অ্যাপ্লিকেশনের গতি অভাবনীয় বৃদ্ধি পায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Hardware Memory Access Latency Comparison',
        bn: 'হার্ডওয়্যার মেমোরি অ্যাক্সেস লেটেন্সির তুলনা'
      },
      head: [
        { en: 'Hardware Tier', bn: 'হার্ডওয়্যার স্তর' },
        { en: 'Physical Access Latency', bn: 'অ্যাক্সেস লেটেন্সি' },
        { en: 'Relative Human Scale (Scaled to 1s)', bn: 'মানুষের স্কেলে রূপান্তর (১ সেকেন্ডে)' }
      ],
      rows: [
        [
          { en: 'CPU L1 Cache', bn: 'সিপিইউ এল১ ক্যাশ' },
          { en: '0.5 nanoseconds', bn: '০.৫ ন্যানোসেকেন্ড' },
          { en: '1 second (one heart beat)', bn: '১ সেকেন্ড (একটি হৃদস্পন্দন)' }
        ],
        [
          { en: 'System Memory (RAM)', bn: 'সিস্টেম র‍্যাম' },
          { en: '100 nanoseconds', bn: '১০০ ন্যানোসেকেন্ড' },
          { en: '3.3 minutes', bn: '৩.৩ মিনিট' }
        ],
        [
          { en: 'NVMe Solid-State Disk', bn: 'এনভিএমই এসএসডি' },
          { en: '100 microseconds', bn: '১০০ মাইক্রোসেকেন্ড' },
          { en: '2.3 days', bn: '২.৩ দিন' }
        ],
        [
          { en: 'Network Database Query', bn: 'নেটওয়ার্ক ডাটাবেস কোয়েরি' },
          { en: '100 milliseconds', bn: '১০০ মিলিসেকেন্ড' },
          { en: '6.3 years', bn: '৬.৩ বছর' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'hit-rate-mathematics',
      text: {
        en: 'The Mathematics of Hit Rate: Why 99% Crushes 90%',
        bn: 'হিট রেটের গণিত: কেন ৯০% এর চেয়ে ৯৯% বহুগুণ সেরা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Novice engineers often assume that a 90% cache hit rate is almost identical to a 99% hit rate. The mathematical reality is astonishingly different. Average request latency follows the formula: T_avg = (h * T_cache) + ((1 - h) * (T_cache + T_origin)). Assuming a 1 ms cache latency and a 100 ms database latency, a 90% hit rate produces an average latency of 11.0 ms. Raising the hit rate to 99% drops average latency to 2.0 ms — more than 5 times faster. More importantly, at 10000 requests per second, a 90% hit rate sends 1000 queries per second to the database, whereas a 99% hit rate sends only 100 queries per second. That single 9% improvement eliminates 900 database queries every second.',
        bn: 'অনেকে মনে করেন ৯০% হিট রেট আর ৯৯% হিট রেটের মধ্যে পার্থক্য সামান্য। কিন্তু বাস্তব গণিত সম্পূর্ণ ভিন্ন। গড় লেটেন্সির সূত্র হলো: T_avg = (h * T_cache) + ((1 - h) * (T_cache + T_origin))। যদি ক্যাশ থেকে পড়তে ১ মিলিসেকেন্ড এবং ডাটাবেস থেকে পড়তে ১০০ মিলিসেকেন্ড লাগে, তবে ৯০% হিট রেটে গড় সময় দাঁড়ায় ১১.০ মিলিসেকেন্ড। আর হিট রেট ৯৯% এ পৌঁছালে গড় সময় কমে হয় মাত্র ২.০ মিলিসেকেন্ড — যা ৫ গুণ বেশি দ্রুত। সবচেয়ে বড় কথা, প্রতি সেকেন্ডে ১০০০০ অনুরোধ এলে ৯০% হিট রেটে ডাটাবেসে ১০০০ কোয়েরি যায়, কিন্তু ৯৯% হলে মাত্র ১০০ কোয়েরি যায়। মাত্র ৯% উন্নতি প্রতি সেকেন্ডে ডাটাবেসের ৯০০ কোয়েরি বাঁচিয়ে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Hit Rate Latency & Origin Load',
        bn: 'চালনাযোগ্য সিমুলেশন: হিট রেট লেটেন্সি ও ডাটাবেস চাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates average latency and origin queries per second across 90% and 99% hit rates under 10000 incoming requests per second:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি সেকেন্ডে ১০০০০ অনুরোধের ক্ষেত্রে ৯০% এবং ৯৯% হিট রেটে গড় লেটেন্সি ও ডাটাবেস কোয়েরি গণনা করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'caching-hitrate-sim',
      lang: 'javascript',
      code: `// Caching Hit Rate & Origin Offload Simulator
const cacheLatencyMs = 1;
const originLatencyMs = 100;
const requestsPerSec = 10000;

// Scenario A: 90% Hit Rate
const hitRate90 = 0.90;
const avgLatency90 = (hitRate90 * cacheLatencyMs) + ((1 - hitRate90) * (cacheLatencyMs + originLatencyMs));
const originQps90 = requestsPerSec * (1 - hitRate90);

// Scenario B: 99% Hit Rate
const hitRate99 = 0.99;
const avgLatency99 = (hitRate99 * cacheLatencyMs) + ((1 - hitRate99) * (cacheLatencyMs + originLatencyMs));
const originQps99 = requestsPerSec * (1 - hitRate99);

console.log('Scenario A (90% hit rate) Average Latency in ms:', Number(avgLatency90.toFixed(1)));
// -> Scenario A (90% hit rate) Average Latency in ms: 11

console.log('Scenario A (90% hit rate) Origin Database Queries per Sec:', originQps90);
// -> Scenario A (90% hit rate) Origin Database Queries per Sec: 1000

console.log('Scenario B (99% hit rate) Average Latency in ms:', Number(avgLatency99.toFixed(1)));
// -> Scenario B (99% hit rate) Average Latency in ms: 2

console.log('Scenario B (99% hit rate) Origin Database Queries per Sec:', originQps99);
// -> Scenario B (99% hit rate) Origin Database Queries per Sec: 100`,
      caption: {
        en: 'Figure 1: Improving hit rate from 90% to 99% drops latency from 11 ms to 2 ms and origin queries from 1000 to 100',
        bn: 'চিত্র ১: হিট রেট ৯০% থেকে ৯৯% এ উন্নীত করলে লেটেন্সি ১১ থেকে ২ মিলিসেকেন্ডে নামে এবং ডাটাবেস কোয়েরি ১০০০ থেকে ১০০ তে নেমে আসে'
      }
    },
    {
      type: 'heading',
      id: 'cache-aside-code',
      text: {
        en: 'Production Implementation: The Cache-Aside Pattern',
        bn: 'প্রোডাকশন ইমপ্লিমেন্টেশন: ক্যাশ-অ্যাসাইড প্যাটার্ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Cache-Aside pattern (also known as Lazy Loading) is the most widely adopted caching architecture. The application is responsible for coordinating reads and writes between cache and database. On read, the application first requests the key from the cache. If present, it returns the data immediately. If missing, it queries the database, writes the result to the cache with an expiration Time-To-Live (TTL), and returns the record. On write, the application updates the database and deletes the corresponding cache key to prevent serving stale data.',
        bn: 'ক্যাশ-অ্যাসাইড প্যাটার্ন হলো আধুনিক ওয়েব ডেভেলপমেন্টে সবচেয়ে বেশি ব্যবহৃত কৌশল। এখানে অ্যাপ্লিকেশন নিজেই ক্যাশ ও ডাটাবেসের মধ্যে সমন্বয় করে। পড়ার সময় অ্যাপ্লিকেশন প্রথমে ক্যাশে খুঁজে দেখে। ডেটা থাকলে তা ফিরিয়ে দেয়। না থাকলে ডাটাবেস থেকে ডেটা পড়ে আনে, নির্দিষ্ট মেয়াদ (TTL) সহ ক্যাশে জমা রাখে এবং ব্যবহারকারীকে ফেরত দেয়। ডেটা পরিবর্তনের সময় অ্যাপ্লিকেশন ডাটাবেস আপডেট করার পর ক্যাশের পুরনো কি-টি মুছে ফেলে যাতে কেউ বাসি ডেটা না পায়।'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Essential Production Rules for Caching',
        bn: 'ক্যাশিংয়ের জন্য ৪টি অত্যাবশ্যকীয় প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 golden rules when designing system caching layers:',
        bn: 'সিস্টেমে ক্যাশিং যুক্ত করার সময় এই ৪টি সুবর্ণ নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Set a Time-To-Live (TTL)',
          def: {
            en: 'Never store keys without an expiration TTL; unexpiring keys cause slow memory leaks and serve outdated data when invalidation fails',
            bn: 'কখনোই মেয়াদ ছাড়া কি সংরক্ষণ করবেন না; মেয়াদহীন কি মেমোরি লিক ঘটায় এবং ইনভ্যালিডেশনে ভুল হলে চিরকাল বাসি তথ্য দেখায়'
          }
        },
        {
          term: 'Rule 2: Invalidate Cache on Database Mutation',
          def: {
            en: 'Always delete or update the corresponding cache entry when updating or deleting database rows to avoid data inconsistency',
            bn: 'ডাটাবেসে কোনো পরিবর্তন বা ডিলিট হলে সাথে সাথে ক্যাশ থেকেও সেই কি ডিলিট বা আপডেট করুন যাতে অমিল না ঘটে'
          }
        },
        {
          term: 'Rule 3: Ensure Keys Reflect All Variable Dimensions',
          def: {
            en: 'Include tenant ID, user permissions, and query parameters in cache keys (e.g. user:100:profile) to avoid data leakage between users',
            bn: 'ক্যাশ কি-তে ইউজার আইডি ও প্যারামিটার যুক্ত করুন (যেমন user:100:profile) যাতে এক ইউজারের তথ্য অন্য ইউজারের কাছে না যায়'
          }
        },
        {
          term: 'Rule 4: Monitor Hit Rates and Eviction Counts',
          def: {
            en: 'A cache with low hit rate wastes memory overhead; track hit ratios, memory utilization, and eviction velocity in production monitoring',
            bn: 'কম হিট রেটের ক্যাশ সিস্টেমের ক্ষতি করে; তাই সবসময় হিট রেট, মেমোরি খরচ এবং বহিষ্কারের হার পর্যবেক্ষণ করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-hitrate-calc-ex',
      kind: 'mcq',
      topic: 'Calculating average request latency from hit rate',
      question: {
        en: 'If a cache responds in 1 ms, the database responds in 100 ms, and the hit rate is 90%, what is the average latency?',
        bn: 'ক্যাশ যদি ১ মিলিসেকেন্ডে এবং ডাটাবেস ১০০ মিলিসেকেন্ডে সাড়া দেয়, তবে ৯০% হিট রেটে গড় লেটেন্সি কত?'
      },
      options: [
        {
          en: '11.0 ms (0.90 * 1 + 0.10 * 101)',
          bn: '১১.০ মিলিসেকেন্ড (০.৯০ * ১ + ০.১০ * ১০১)'
        },
        {
          en: '100.0 ms',
          bn: '১০০.০ মিলিসেকেন্ড'
        },
        {
          en: '1.0 ms',
          bn: '১.০ মিলিসেকেন্ড'
        },
        {
          en: '50.0 ms',
          bn: '৫০.০ মিলিসেকেন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Average = (0.9 * 1) + (0.1 * 101) = 0.9 + 10.1 = 11.0 ms.',
        bn: 'গড় = (০.৯ * ১) + (০.১ * ১০১) = ০.৯ + ১০.১ = ১১.০ মিলিসেকেন্ড।'
      },
      explanation: {
        en: '90% of requests finish in 1 ms (0.9 ms), while 10% incur the 1 ms cache check plus 100 ms database fetch (10.1 ms), totaling 11.0 ms.',
        bn: '৯০% অনুরোধ ১ মিলিসেকেন্ডে শেষ হয়, আর ১০% অনুরোধে ক্যাশ চেক ও ১০০ মিলিসেকেন্ড ডাটাবেস মিলিয়ে ১০১ মিলিসেকেন্ড লাগে; মোট ১১.০ মিলিসেকেন্ড।'
      }
    },
    {
      id: 'caching-cache-aside-ex',
      kind: 'mcq',
      topic: 'How Cache-Aside handles cache misses',
      question: {
        en: 'In the Cache-Aside pattern, what action does the application take when requested data is not found in the cache?',
        bn: 'ক্যাশ-অ্যাসাইড প্যাটার্নে ক্যাশে কাঙ্ক্ষিত ডেটা না পাওয়া গেলে অ্যাপ্লিকেশন কী পদক্ষেপ গ্রহণ করে?'
      },
      options: [
        {
          en: 'It reads the data from the origin database, populates the cache with a TTL, and returns the result to the caller',
          bn: 'এটি মূল ডাটাবেস থেকে ডেটা পড়ে আনে, নির্দিষ্ট মেয়াদসহ ক্যাশে জমা রাখে এবং ব্যবহারকারীকে ফেরত দেয়'
        },
        {
          en: 'It immediately throws a 404 error without checking the database',
          bn: 'ডাটাবেস চেক না করেই এটি সাথে সাথে একটি ৪০৪ এরর ছুড়ে দেয়'
        },
        {
          en: 'It shuts down the web server instance',
          bn: 'এটি ওয়েব সার্ভার বন্ধ করে দেয়'
        },
        {
          en: 'It deletes the database table permanently',
          bn: 'এটি চিরতরে ডাটাবেস টেবিল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The application queries the database and caches the result.',
        bn: 'অ্যাপ্লিকেশন ডাটাবেস থেকে এনে ক্যাশে রেখে তারপর ফেরত দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Cache-Aside delegates lazy loading to the application: on miss, fetch from primary store and write back to cache.',
        bn: 'ক্যাশ-অ্যাসাইডে মিস হলে অ্যাপ্লিকেশন ডাটাবেস থেকে এনে ক্যাশ পূর্ণ করে এবং পরবর্তী কলের জন্য প্রস্তুত রাখে।'
      }
    },
    {
      id: 'caching-write-invalidation-ex',
      kind: 'mcq',
      topic: 'Why database writes invalidate cache keys',
      question: {
        en: 'When a user updates their profile in the database, what should the application do to the corresponding cache key?',
        bn: 'ইউজার যখন ডাটাবেসে নিজের প্রোফাইল আপডেট করেন, তখন ক্যাশের সংশ্লিষ্ট কি-টির সাথে অ্যাপ্লিকেশনের কী করা উচিত?'
      },
      options: [
        {
          en: 'Delete the cache key (or update it) so subsequent reads do not serve outdated, stale information',
          bn: 'ক্যাশ কি-টি মুছে ফেলা (বা আপডেট করা) যাতে পরবর্তী রিডগুলোতে বাসি ও পুরনো তথ্য না পৌঁছায়'
        },
        {
          en: 'Keep the old value in cache forever',
          bn: 'ক্যাশে পুরনো মানটি চিরতরে রেখে দেওয়া'
        },
        {
          en: 'Double the TTL of the key to 100 days',
          bn: 'কি-এর মেয়াদ দ্বিগুণ করে ১০০ দিন করা'
        },
        {
          en: 'Disable user login completely',
          bn: 'ব্যবহারকারীর লগইন সম্পূর্ণ বন্ধ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Invalidate or delete to maintain data consistency.',
        bn: 'তথ্য সঠিক রাখতে পুরনো ক্যাশ মুছে ফেলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Deleting the key forces the next read to fetch the newly updated database record, preventing stale data bugs.',
        bn: 'ক্যাশ ডিলিট করলে পরবর্তী অনুরোধে ডাটাবেস থেকে নতুন মান এসে আবার ক্যাশ হয়, ফলে তথ্যের গরমিল হয় না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-fundamentals',
    title: {
      en: 'Caching Fundamentals & Memory Hierarchy Quiz',
      bn: 'ক্যাশিং ফান্ডামেন্টালস ও মেমোরি হায়ারার্কি কুইজ'
    },
    questions: [
      {
        id: 'q-caching-hardware-speed',
        kind: 'mcq',
        topic: 'Relative speed of RAM compared to network database calls',
        question: {
          en: 'Approximately how much faster is reading from system RAM compared to querying a database across a network?',
          bn: 'নেটওয়ার্কে ডাটাবেস কোয়েরি করার তুলনায় সিস্টেম র‍্যাম থেকে ডেটা পড়া আনুমানিক কত গুণ দ্রুত?'
        },
        options: [
          {
            en: '100000 to 1000000 times faster (nanoseconds vs tens of milliseconds)',
            bn: '১০০০০০ থেকে ১০০০০০০ গুণ দ্রুত (ন্যানোসেকেন্ড বনাম মিলিসেকেন্ড)'
          },
          {
            en: 'Only 2 times faster',
            bn: 'মাত্র ২ গুণ দ্রুত'
          },
          {
            en: 'RAM is actually slower than network databases',
            bn: 'র‍্যাম আসলে নেটওয়ার্ক ডাটাবেসের চেয়ে ধীরগতির'
          },
          {
            en: 'They operate at identical physical speeds',
            bn: 'উভয়ই একদম সমান গতিতে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'RAM is ~100 nanoseconds while network DB queries are 10-100 milliseconds.',
          bn: 'র‍্যাম ১০০ ন্যানোসেকেন্ডে আর নেটওয়ার্ক ১০ থেকে ১০০ মিলিসেকেন্ডে কাজ করে।'
        },
        explanation: {
          en: '100 nanoseconds vs 100 milliseconds is a difference of six orders of magnitude (1000000x).',
          bn: '১০০ ন্যানোসেকেন্ড বনাম ১০০ মিলিসেকেন্ডের ব্যবধান প্রায় ১০০০০০০ গুণ।'
        }
      },
      {
        id: 'q-caching-hitrate-origin-load',
        kind: 'mcq',
        topic: 'Origin load reduction when hit rate improves from 90% to 99%',
        question: {
          en: 'Under 10000 requests per second, how many database queries are eliminated each second by improving the hit rate from 90% to 99%?',
          bn: 'প্রতি সেকেন্ডে ১০০০০ অনুরোধের ক্ষেত্রে হিট রেট ৯০% থেকে ৯৯% এ উন্নীত করলে প্রতি সেকেন্ডে কতটি ডাটাবেস কোয়েরি বাঁচানো যায়?'
        },
        options: [
          {
            en: '900 queries per second (1000 drops down to 100)',
            bn: 'প্রতি সেকেন্ডে ৯০০টি কোয়েরি (১০০০ থেকে কমে ১০০ তে নেমে আসে)'
          },
          {
            en: '9 queries per second',
            bn: 'প্রতি সেকেন্ডে ৯টি কোয়েরি'
          },
          {
            en: '0 queries (no difference)',
            bn: '০টি কোয়েরি (কোনো পার্থক্য নেই)'
          },
          {
            en: '10000 queries per second',
            bn: 'প্রতি সেকেন্ডে ১০০০০টি কোয়েরি'
          }
        ],
        answer: 0,
        hint: {
          en: '10% of 10000 is 1000; 1% of 10000 is 100. 1000 - 100 = 900.',
          bn: '১০০০০ এর ১০% হলো ১০০০ আর ১% হলো ১০০। ১০০০ - ১০০ = ৯০০।'
        },
        explanation: {
          en: 'Origin queries drop from 1000 qps to 100 qps, freeing up 90% of origin database capacity.',
          bn: 'ডাটাবেসে যাওয়া কোয়েরি ১০০০ থেকে কমে ১০০ তে নামে, যার ফলে ডাটাবেসের ৯০% কাজের চাপ বেঁচে যায়।'
        }
      },
      {
        id: 'q-caching-ttl-importance',
        kind: 'mcq',
        topic: 'Why every cache key needs a TTL',
        question: {
          en: 'What is the danger of writing keys to a cache without specifying an expiration TTL?',
          bn: 'মেয়াদ (TTL) নির্ধারণ না করে ক্যাশে কি সংরক্ষণ করার প্রধান ঝুঁকি কী?'
        },
        options: [
          {
            en: 'Memory gradually leaks as stale keys accumulate forever, and bugs in invalidation logic leave outdated data permanently',
            bn: 'অব্যবহৃত কি জমা হয়ে মেমোরি ফুরিয়ে যায় এবং ইনভ্যালিডেশনে ভুল হলে ব্যবহারকারী চিরকাল ভুল ও বাসি তথ্য দেখে'
          },
          {
            en: 'The server network card explodes physically',
            bn: 'সার্ভারের নেটওয়ার্ক কার্ড বিস্ফোরিত হয়'
          },
          {
            en: 'The cache automatically converts all numbers into text',
            bn: 'ক্যাশ সব সংখ্যাকে লেখায় রূপান্তর করে'
          },
          {
            en: 'The database stops accepting new SQL queries',
            bn: 'ডাটাবেস নতুন এসকিউএল কোয়েরি নেওয়া বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unbounded memory growth and zombie stale data.',
          bn: 'মেমোরি ফুরিয়ে যাওয়া এবং পুরনো ভুল তথ্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'TTL acts as an ultimate safety net: even if an invalidation webhook is lost, the key will naturally expire and refresh.',
          bn: 'টিটিএল হলো সুরক্ষার শেষ দেওয়াল: কোনো কারণে ইনভ্যালিডেশন ব্যর্থ হলেও নির্দিষ্ট সময় পর পুরনো কি নিজে থেকেই মুছে যায়।'
        }
      },
      {
        id: 'q-caching-low-hitrate-penalty',
        kind: 'mcq',
        topic: 'Why low hit rate caches can harm system performance',
        question: {
          en: 'Why is an ineffective cache with a very low hit rate (e.g. 5%) often worse than having no cache at all?',
          bn: 'খুব কম হিট রেটের (যেমন ৫%) একটি অকার্যকর ক্যাশ কেন ক্যাশ না থাকার চেয়েও বেশি ক্ষতিকর হতে পারে?'
        },
        options: [
          {
            en: 'Every miss pays a double latency penalty (checking the cache plus querying the database) while wasting CPU and RAM for almost no benefit',
            bn: 'প্রতিটি মিসে দ্বিগুণ সময় নষ্ট হয় (ক্যাশ চেক এবং তারপর ডাটাবেস কোয়েরি) এবং কোনো লাভ ছাড়াই মেমোরি ও সিপিইউ অপচয় হয়'
          },
          {
            en: 'Because low hit rate caches delete the operating system kernel',
            bn: 'কারণ কম হিট রেটের ক্যাশ অপারেটিং সিস্টেমের কার্নেল মুছে দেয়'
          },
          {
            en: 'Because Redis charges money per cache miss',
            bn: 'কারণ প্রতি মিসে রেডিস টাকা কাটে'
          },
          {
            en: 'Because the browser refuses to render HTML from low hit rate caches',
            bn: 'কারণ ব্রাউজার কম হিট রেটের তথ্য দেখাতে অস্বীকৃতি জানায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tollbooth penalty on misses with negligible hit savings.',
          bn: 'ক্যাশ খোঁজার বাড়তি সময় এবং কোনো সুবিধা না পাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'On misses, the system incurs the network hop to the cache store before hitting the database, adding latency without saving load.',
          bn: 'প্রতিটি মিসে ক্যাশে যাওয়ার বাড়তি সময় যোগ হয় কিন্তু ডাটাবেসের কোনো চাপ কমে না, উল্টো গড় গতি ধীর হয়ে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-invalidation-discipline',
    tech: 'caching',
    title: {
      en: 'Cache Invalidation, TTL Strategies & Jitter Mechanics',
      bn: 'ক্যাশ ইনভ্যালিডেশন, টিটিএল কৌশল ও জিটার মেকানিক্স'
    }
  }
};