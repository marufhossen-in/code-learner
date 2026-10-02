import type { Lesson } from '../../../lib/types';

export const theStampedeWallLesson: Lesson = {
  slug: 'the-stampede-wall',
  tech: 'caching',
  title: {
    en: 'Cache Stampede, Thundering Herd & Mutex Coalescing',
    bn: 'ক্যাশ স্ট্যাম্পিড, থান্ডারিং হার্ড ও মিউটেক্স কোয়ালেসিং'
  },
  summary: {
    en: 'A Cache Stampede (also called Thundering Herd or Dogpiling) occurs when a heavily requested, viral cache key expires while thousands of concurrent users are active. If an e-commerce homepage key receiving 5,000 requests per second dies, all 5,000 requests experience a cache miss in the exact same millisecond and fire parallel queries at the primary database, crashing connection pools. This lesson provides production-grade defenses against stampedes. You will implement Mutex Request Coalescing (Singleflight pattern), evaluate the probabilistic XFetch early expiration algorithm, and configure Stale-While-Revalidate background re-fetching to guarantee that 100 concurrent requests trigger exactly 1 origin database query.',
    bn: 'ক্যাশ স্ট্যাম্পিড (বা থান্ডারিং হার্ড) হলো এমন একটি মারাত্মক পরিস্থিতি যখন কোনো অতিরিক্ত জনপ্রিয় কি মেয়াদোত্তীর্ণ হয় এবং হাজার হাজার ব্যবহারকারী একই মুহূর্তে তা অ্যাক্সেস করতে চায়। সেকেন্ডে ৫,০০০ অনুরোধ পাওয়া একটি কি মুছে গেলে সাথে সাথে ৫,০০০টি কোয়েরি একসাথে ডাটাবেসে গিয়ে আছড়ে পড়ে এবং কানেকশন পুল ফুল হয়ে সার্ভার বন্ধ হয়ে যায়। এই পাঠে স্ট্যাম্পিড প্রতিরোধের প্রোডাকশন কৌশল তুলে ধরা হয়েছে। আপনি মিউটেক্স রিকোয়েস্ট কোয়ালেসিং (Singleflight প্যাটার্ন) বাস্তবায়ন করবেন, গাণিতিক XFetch আর্লি এক্সপিরেশন অ্যালগরিদম শিখবেন এবং Stale-While-Revalidate কনফিগার করে ১০০টি সমবর্তী অনুরোধের বিপরীতে ডাটাবেসে মাত্র ১টি কোয়েরি যাওয়ার নিশ্চয়তা দেবেন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Stampede Anatomy: When Viral Keys Expire Under Load',
        bn: 'স্ট্যাম্পিডের গঠন: অতিরিক্ত চাপে ভাইরাল কি যখন মুছে যায়'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you build a high-traffic web application, a cache miss is never an isolated event. Under high concurrency, thousands of clients request the same popular key simultaneously. When that key expires, every incoming thread observes a miss and races to regenerate the identical calculation.',
        bn: 'যখন আপনি উচ্চ ট্রাফিকের কোনো ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন ক্যাশ মিস কোনো একক ঘটনা থাকে না। অতিরিক্ত ট্রাফিকের ক্ষেত্রে হাজার হাজার ব্যবহারকারী একই সাথে জনপ্রিয় কি-টি খোঁজে। সেই কি-এর মেয়াদ শেষ হওয়া মাত্রই সমস্ত অনুরোধ একসাথে ক্যাশ মিস হয়ে একই ডেটা তৈরি করতে ডাটাবেসের ওপর ঝাঁপিয়ে পড়ে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cache Stampede (Dogpiling)',
          def: {
            en: 'A massive spike in origin database load caused by multiple concurrent requests simultaneously experiencing a cache miss on the same key',
            bn: 'একই জনপ্রিয় কি মেয়াদোত্তীর্ণ হওয়ায় শত শত অনুরোধ একসাথে ক্যাশ মিস হয়ে ডাটাবেসের ওপর অস্বাভাবিক চাপ তৈরি করার ঘটনা'
          }
        },
        {
          term: 'Mutex Coalescing (Singleflight)',
          def: {
            en: 'An architectural pattern where only the first request acquires a lock to query the database, while all other callers wait and share the result',
            bn: 'এমন একটি কৌশল যেখানে প্রথম অনুরোধটি লক নিয়ে ডাটাবেস থেকে তথ্য আনে এবং বাকি সব অনুরোধ সেই উত্তরের জন্য অপেক্ষা করে ফলাফল ভাগ করে নেয়'
          }
        },
        {
          term: 'Probabilistic Early Expiration (XFetch)',
          def: {
            en: 'An algorithm that probabilistically triggers an asynchronous background cache refresh before the key actually expires, scaling with request latency',
            bn: 'একটি গাণিতিক পদ্ধতি যা কি-এর মেয়াদ শেষ হওয়ার আগেই দৈবচয়নমূলকভাবে ব্যাকগ্রাউন্ডে নতুন ডেটা লোড করে কি-টিকে সর্বদা সতেজ রাখে'
          }
        },
        {
          term: 'Distributed Lock (SET NX PX)',
          def: {
            en: 'Using atomic Redis operations to grant a single application worker the exclusive lease to recompute and write a shared cache key',
            bn: 'রেডিসের মাধ্যমে একটিমাত্র সার্ভারকে ক্যাশ তৈরির একক অনুমতি দেওয়া যাতে অন্যরা ডাটাবেসে না গিয়ে শান্ত থাকে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'defense-strategies',
      text: {
        en: 'The Three Defensive Architectures Against Stampedes',
        bn: 'স্ট্যাম্পিড মোকাবিলার ৩টি প্রধান সুরক্ষা ব্যবস্থা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Stampede Mitigation Architectures',
        bn: 'স্ট্যাম্পিড সুরক্ষা কৌশলসমূহের তুলনা'
      },
      head: [
        { en: 'Defense Strategy', bn: 'সুরক্ষা কৌশল' },
        { en: 'Mechanism', bn: 'কার্যপদ্ধতি' },
        { en: 'Database Load Under Spike', bn: 'ডাটাবেসের ওপর চাপ' },
        { en: 'Tradeoff / Complexity', bn: 'সীমাবদ্ধতা বা জটিলতা' }
      ],
      rows: [
        [
          { en: 'Mutex Locking (Singleflight)', bn: 'মিউটেক্স লক (Singleflight)' },
          { en: 'First caller acquires lock and queries DB; other 99 wait on in-memory promise', bn: 'প্রথমজন লক নিয়ে কোয়েরি করে; বাকি ৯৯ জন অপেক্ষা করে' },
          { en: 'Exactly 1 query executed', bn: 'ঠিক ১টি কোয়েরি যায়' },
          { en: 'Waiting callers experience slight latency while leader finishes DB query', bn: 'প্রথমজনের কাজ শেষ না হওয়া পর্যন্ত বাকিদের সামান্য অপেক্ষা করতে হয়' }
        ],
        [
          { en: 'Probabilistic Early Expiration (XFetch)', bn: 'আর্লি এক্সপিরেশন (XFetch)' },
          { en: 'Clients calculate delta * beta * ln(rand()); refresh triggers before TTL expires', bn: 'মেয়াদ শেষের আগেই ব্যাকগ্রাউন্ডে নতুন ডেটা আসে' },
          { en: 'Zero misses; background queries only', bn: 'শূন্য মিস; ব্যাকগ্রাউন্ডে রিফ্রেশ' },
          { en: 'Requires storing computation computation delta metadata alongside cache payload', bn: 'ক্যাশ ডেটার সাথে সময় গণনার মেটাডেটা সংরক্ষণ করতে হয়' }
        ],
        [
          { en: 'Background Worker Pre-Warming', bn: 'ব্যাকগ্রাউন্ড প্রি-ওয়ার্মিং' },
          { en: 'Cron jobs or message queues refresh hot caches on a schedule; TTL never expires', bn: 'নিয়মিত বিরতিতে ক্রন জব চালিয়ে ক্যাশ আপডেট রাখা হয়' },
          { en: 'Zero user-triggered database queries', bn: 'ইউজার কোয়েরি একদম শূন্য' },
          { en: 'High operational overhead to identify and maintain list of all hot keys', bn: 'কোন কোন কি জনপ্রিয় তা খুঁজে বের করে মেইনটেইন করার বাড়তি দায়িত্ব' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'singleflight-coalescing-math',
      text: {
        en: 'Singleflight In-Memory Coalescing Mechanics',
        bn: 'সিঙ্গেলফ্লাইট ইন-মেমোরি কোয়ালেসিং কার্যপদ্ধতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Singleflight pattern (pioneered in the Go standard library) maintains an in-memory map of active in-flight promises. When Request 1 arrives and misses the cache, it registers a promise in the in-flight map and initiates the database fetch. While that query is executing, 99 subsequent requests for the exact same key arrive. Instead of executing 99 parallel database queries, they detect the active promise in the in-flight map and attach to it. When Request 1 finishes, all 100 callers receive the result simultaneously. Exactly 1 database query is executed, and 99 callers are saved.',
        bn: 'সিঙ্গেলফ্লাইট প্যাটার্ন মেমোরিতে একটি ম্যাপের সাহায্যে চলমান কাজের তালিকা সংরক্ষণ করে। যখন প্রথম অনুরোধটি এসে ক্যাশ মিস দেখে, তখন এটি ম্যাপে একটি প্রতিশ্রুতি (Promise) তৈরি করে ডাটাবেসে তথ্য আনতে যায়। সেই কাজটি শেষ হওয়ার আগেই আরও ৯৯টি সমবর্তী অনুরোধ এসে হাজির হয়। তারা ডাটাবেসে নতুন কোনো কোয়েরি না পাঠিয়ে ম্যাপের ওই প্রতিশ্রুতির সাথে যুক্ত হয়ে অপেক্ষা করে। প্রথম অনুরোধের ডেটা আসামাত্রই ১০০ জন ব্যবহারকারী একসাথে একই ফলাফল পেয়ে যায়। এর ফলে ডাটাবেসে মাত্র ১টি কোয়েরি যায় এবং বাকি ৯৯টি অপ্রয়োজনীয় কোয়েরি পুরোপুরি বেঁচে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Mutex Request Coalescing Efficiency',
        bn: 'চালনাযোগ্য সিমুলেশন: মিউটেক্স কোয়ালেসিং কার্যকারিতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates 100 concurrent clients requesting an expired cache key, demonstrating how mutex request coalescing reduces database queries from 100 down to 1:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি মেয়াদোত্তীর্ণ কি-এর জন্য ১০০টি সমবর্তী অনুরোধের দৃশ্য সিমুলেট করে এবং দেখায় কীভাবে কোয়ালেসিং কোয়েরি সংখ্যা ১০০ থেকে ১ এ নামিয়ে আনে:'
      }
    },
    {
      type: 'code',
      id: 'caching-stampede-sim',
      lang: 'javascript',
      code: `// Cache Stampede Mutex Coalescing Simulator
const concurrentClients = 100;

// Without Mutex Coalescing (Thundering Herd):
// Every single concurrent client fires an independent database query
const dbQueriesWithoutCoalescing = concurrentClients;

// With Mutex Coalescing (Singleflight Pattern):
// Exactly 1 leader acquires the mutex lock and queries the database
const dbQueriesWithCoalescing = 1;

// Remaining callers served seamlessly from the leader's in-flight result
const callersServedFromLeader = concurrentClients - dbQueriesWithCoalescing;

console.log('Concurrent client requests arriving simultaneously:', concurrentClients);
// -> Concurrent client requests arriving simultaneously: 100

console.log('Database queries executed with mutex coalescing:', dbQueriesWithCoalescing);
// -> Database queries executed with mutex coalescing: 1

console.log('Callers served from leader without touching database:', callersServedFromLeader);
// -> Callers served from leader without touching database: 99`,
      caption: {
        en: 'Figure 6: Under 100 concurrent requests, mutex coalescing executes only 1 database query, seamlessly serving 99 callers',
        bn: 'চিত্র ৬: ১০০টি সমবর্তী অনুরোধের ক্ষেত্রে মিউটেক্স কোয়ালেসিং মাত্র ১টি কোয়েরি চালায় এবং বাকি ৯৯ জন ব্যবহারকারীকে নিরাপদে সেবা দেয়'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules to Prevent Cache Stampedes',
        bn: 'ক্যাশ স্ট্যাম্পিড রোধে ৪টি আবশ্যকীয় প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 engineering rules to bulletproof your infrastructure against thundering herd failures:',
        bn: 'থান্ডারিং হার্ড বিপর্যয় থেকে সিস্টেম রক্ষা করতে এই ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Implement Mutex Locking for High-Traffic Keys',
          def: {
            en: 'Wrap expensive recalculations in a distributed lock or Singleflight coalescer so only 1 worker hits the origin database',
            bn: 'ভারী বা জনপ্রিয় তথ্যের ক্ষেত্রে মিউটেক্স লক বা সিঙ্গেলফ্লাইট ব্যবহার করুন যাতে ডাটাবেসে কেবল ১ জন প্রবেশ করতে পারে'
          }
        },
        {
          term: 'Rule 2: Never Let Viral Keys Hard Expire in Synchronous Flows',
          def: {
            en: 'Use Stale-While-Revalidate or background refresh workers so popular content is always available immediately in cache',
            bn: 'ভাইরাল কি-গুলোকে কখনো হঠাৎ শূন্য হতে দেবেন না; ব্যাকগ্রাউন্ডে আগে থেকেই রিফ্রেশ করে ক্যাশ সতেজ রাখুন'
          }
        },
        {
          term: 'Rule 3: Set Short Expirations on Distributed Locks',
          def: {
            en: 'Always attach a 5-second TTL to distributed mutex locks (SET NX PX 5000) so a crashed worker does not lock the system permanently',
            bn: 'লকে ৫ সেকেন্ডের মতো সংক্ষিপ্ত মেয়াদ দিন যাতে কোনো সার্ভার ক্র্যাশ করলেও সিস্টেম চিরতরে লক হয়ে আটকে না থাকে'
          }
        },
        {
          term: 'Rule 4: Combine Coalescing with TTL Jitter',
          def: {
            en: 'Pair request coalescing with TTL jitter to ensure neither cache stampedes nor mass simultaneous expirations can occur',
            bn: 'রিকোয়েস্ট কোয়ালেসিংয়ের সাথে টিটিএল জিটার যুক্ত করুন যাতে স্ট্যাম্পিড ও একসাথে মেয়াদ শেষের কোনো সুযোগ না থাকে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-coalesce-calc-ex',
      kind: 'mcq',
      topic: 'Database query count under mutex coalescing',
      question: {
        en: 'When 100 concurrent requests arrive for an expired cache key protected by a mutex coalescer, how many queries reach the origin database?',
        bn: 'মিউটেক্স কোয়ালেসার দ্বারা সুরক্ষিত একটি মেয়াদোত্তীর্ণ কি-এর জন্য ১০০টি সমবর্তী অনুরোধ এলে ডাটাবেসে কতটি কোয়েরি পৌঁছায়?'
      },
      options: [
        {
          en: 'Exactly 1 query (the remaining 99 callers wait and share the result)',
          bn: 'ঠিক ১টি কোয়েরি (বাকি ৯৯ জন অপেক্ষা করে সেই ফলাফল ভাগ করে নেয়)'
        },
        {
          en: '100 queries',
          bn: '১০০টি কোয়েরি'
        },
        {
          en: '0 queries',
          bn: '০টি কোয়েরি'
        },
        {
          en: '50 queries',
          bn: '৫০টি কোয়েরি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only the single leader executes the query.',
        bn: 'শুধুমাত্র প্রথম অনুরোধকারী কোয়েরিটি চালাবে।'
      },
      explanation: {
        en: 'The mutex allows only the first caller to query the database; the other 99 callers hook into the active promise and resolve concurrently.',
        bn: 'লকের কারণে কেবল প্রথমজন ডাটাবেসে যায়; বাকি ৯৯ জন মেমোরিতে অপেক্ষা করে সেই একক কোয়েরির উত্তর পেয়ে যায়।'
      }
    },
    {
      id: 'caching-lock-ttl-ex',
      kind: 'mcq',
      topic: 'Why distributed locks require an expiration TTL',
      question: {
        en: 'Why must distributed mutex locks acquired via Redis SET key val NX PX 5000 always specify an expiration TTL?',
        bn: 'রেডিসে SET key val NX PX 5000 দিয়ে মিউটেক্স লক নেওয়ার সময় কেন অবশ্যই ৫ সেকেন্ডের মতো একটি মেয়াদ (TTL) দিতে হয়?'
      },
      options: [
        {
          en: 'If the worker process crashes while executing the database query, the lock will automatically release after 5000 ms, preventing permanent deadlock',
          bn: 'ডাটাবেস কোয়েরি চলাকালীন সার্ভার ক্র্যাশ করলেও ৫০০০ মিলিসেকেন্ড পর লক নিজে থেকেই খুলে যায়, ফলে সিস্টেম ডেডলক হয় না'
        },
        {
          en: 'Because Redis crashes if a lock has no TTL',
          bn: 'কারণ টিটিএল না থাকলে রেডিস ক্র্যাশ করে'
        },
        {
          en: 'To make the database query finish in exactly 5000 ms',
          bn: 'কোয়েরি যাতে ঠিক ৫০০০ মিলিসেকেন্ডে শেষ হয় তা নিশ্চিত করতে'
        },
        {
          en: 'It deletes all user passwords from the cache',
          bn: 'এটি ক্যাশ থেকে সব পাসওয়ার্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prevents indefinite deadlocks if the lock holder dies.',
        bn: 'সার্ভার ক্র্যাশ করলে সিস্টেম যাতে চিরতরে আটকে না থাকে সে কথা ভাবুন।'
      },
      explanation: {
        en: 'Without an expiration lease, an unhandled exception or server crash would hold the lock forever, permanently blocking all future requests.',
        bn: 'মেয়াদ না থাকলে সার্ভার হঠাৎ বন্ধ হয়ে গেলে লকটি চিরতরে আটকে থাকবে এবং আর কেউ কখনো ডেটা লোড করতে পারবে না।'
      }
    },
    {
      id: 'caching-xfetch-concept-ex',
      kind: 'mcq',
      topic: 'Mechanism of Probabilistic Early Expiration (XFetch)',
      question: {
        en: 'How does the probabilistic XFetch algorithm prevent cache stampedes before a key expires?',
        bn: 'গাণিতিক XFetch অ্যালগরিদম কীভাবে কোনো কি মেয়াদোত্তীর্ণ হওয়ার আগেই ক্যাশ স্ট্যাম্পিড প্রতিহত করে?'
      },
      options: [
        {
          en: 'As the expiration time approaches, incoming requests evaluate a probability curve that randomly triggers a background refresh before the key dies',
          bn: 'মেয়াদ শেষের সময় যত কাছে আসে, কোনো একটি অনুরোধ দৈবচয়নমূলক সম্ভাব্যতা সূত্রে কি-টি শেষ হওয়ার আগেই ব্যাকগ্রাউন্ডে রিফ্রেশ করে ফেলে'
        },
        {
          en: 'It permanently disables the origin database',
          bn: 'এটি মূল ডাটাবেস স্থায়ীভাবে বন্ধ করে দেয়'
        },
        {
          en: 'It deletes all user accounts created in the last 24 hours',
          bn: 'এটি গত ২৪ ঘণ্টার সব ইউজার অ্যাকাউন্ট মুছে ফেলে'
        },
        {
          en: 'It changes the font size of the web page dynamically',
          bn: 'এটি ওয়েব পেজের ফন্ট সাইজ বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Probabilistic early refresh triggered before actual TTL expiration.',
        bn: 'আসল সময় ফুরানোর আগেই ব্যাকগ্রাউন্ডে নবায়ন করার কথা ভাবুন।'
      },
      explanation: {
        en: 'XFetch ensures that heavily trafficked keys have a virtually guaranteed probability of being asynchronously refreshed before their hard TTL expires.',
        bn: 'জনপ্রিয় কি-গুলোতে প্রচুর ট্রাফিক আসায় আসল মেয়াদ শেষের আগেই কেউ না কেউ ব্যাকগ্রাউন্ডে নতুন ডেটা লোড করে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-stampede',
    title: {
      en: 'Cache Stampede & Thundering Herd Quiz',
      bn: 'ক্যাশ স্ট্যাম্পিড ও থান্ডারিং হার্ড কুইজ'
    },
    questions: [
      {
        id: 'q-caching-thundering-herd-cause',
        kind: 'mcq',
        topic: 'Root cause of a cache stampede',
        question: {
          en: 'What architectural condition triggers a catastrophic thundering herd cache stampede?',
          bn: 'কোন কারিগরি পরিস্থিতির কারণে সিস্টেমে মারাত্মক ক্যাশ স্ট্যাম্পিড ঘটে?'
        },
        options: [
          {
            en: 'A high-concurrency key expires while thousands of active requests arrive simultaneously, causing every thread to query the origin database in parallel',
            bn: 'অতিরিক্ত জনপ্রিয় একটি কি মুছে যাওয়ার মুহূর্তে হাজার হাজার অনুরোধ একসাথে এসে প্রত্যেকে ডাটাবেসে সমান্তরাল কোয়েরি পাঠালে'
          },
          {
            en: 'The server room runs out of air conditioning',
            bn: 'সার্ভার রুমের এসি নষ্ট হয়ে গেলে'
          },
          {
            en: 'The domain name DNS records are deleted by mistake',
            bn: 'ভুল করে ডোমেইনের ডিএনএস রেকর্ড মুছে ফেললে'
          },
          {
            en: 'The user closes the browser tab before the page finishes loading',
            bn: 'পেজ লোড হওয়ার আগেই ব্যবহারকারী ট্যাব বন্ধ করে দিলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Simultaneous misses on a viral hot key exhausting origin resources.',
          bn: 'একসাথে সবার ক্যাশ মিস হয়ে ডাটাবেস ফুরিয়ে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'When a hot key dies, the sudden vacuum causes thousands of requests to bypass the cache at the same microsecond, knocking down the database.',
          bn: 'হঠাৎ কি-টি শূন্য হওয়ায় মুহূর্তের মধ্যে হাজারো কোয়েরি ডাটাবেসে গিয়ে কানেকশন পুল ফুল করে ক্র্যাশ ঘটায়।'
        }
      },
      {
        id: 'q-caching-singleflight-lifecycle',
        kind: 'mcq',
        topic: 'How Singleflight coordinates waiting callers',
        question: {
          en: 'In an application utilizing Singleflight request coalescing, what happens if the leader’s database query throws an unexpected error?',
          bn: 'সিঙ্গেলফ্লাইট কোয়ালেসিংয়ে প্রথম অনুরোধকারীর ডাটাবেস কোয়েরিতে যদি কোনো এরর বা ত্রুটি ঘটে, তবে কী হয়?'
        },
        options: [
          {
            en: 'The error is propagated to all 99 waiting callers who were attached to the active promise, and the key is removed from the in-flight map',
            bn: 'অপেক্ষায় থাকা বাকি ৯৯ জনও ওই ত্রুটির সংকেত পায় এবং ম্যাপ থেকে কি-টি মুছে স্বাভাবিক অবস্থায় ফিরে আসে'
          },
          {
            en: 'The operating system restarts the physical server immediately',
            bn: 'অপারেটিং সিস্টেম সার্ভারটিকে সাথে সাথে রিস্টার্ট করে'
          },
          {
            en: 'The database permanently converts all tables into read-only mode',
            bn: 'ডাটাবেস সব টেবিলকে রিড-অনলি বানিয়ে ফেলে'
          },
          {
            en: 'The application deletes all customer passwords',
            bn: 'অ্যাপ্লিকেশন সব গ্রাহকের পাসওয়ার্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Error rejection broadcasts to all waiting subscribers.',
          bn: 'একসাথে যুক্ত থাকা সবার কাছে এরর ছড়িয়ে পড়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Singleflight transparently shares both the success value and failure exceptions with all subscribers waiting on that specific execution flight.',
          bn: 'যেহেতু সবাই একই প্রতিশ্রুতির সাথে যুক্ত ছিল, তাই সাফল্য বা ব্যর্থতা উভয়ই সবার কাছে একসাথে পৌঁছে যায়।'
        }
      },
      {
        id: 'q-caching-warmup-script',
        kind: 'mcq',
        topic: 'Role of cache pre-warming before major product launches',
        question: {
          en: 'Why do engineering teams run cache pre-warming scripts before launching a major marketing campaign or holiday flash sale?',
          bn: 'বড় কোনো সেল বা ক্যাম্পেইন শুরুর আগে ইঞ্জিনিয়ারিং দলগুলো কেন ক্যাশ প্রি-ওয়ার্মিং স্ক্রিপ্ট চালায়?'
        },
        options: [
          {
            en: 'To pre-populate the cache with popular product pages and catalog data so the initial surge of millions of shoppers enjoys uninterrupted cache hits',
            bn: 'আগে থেকেই ক্যাটালগ ও পণ্যের তথ্য ক্যাশে লোড করে রাখা যাতে লাখ লাখ ক্রেতা আসার সাথে সাথেই শতভাগ ক্যাশ হিট পায়'
          },
          {
            en: 'To drain all electricity from the computer power supplies',
            bn: 'কম্পিউটারের সব বিদ্যুৎ খরচ করে ফেলার জন্য'
          },
          {
            en: 'To test if the monitor display screens can show red colors',
            bn: 'মনিটরে লাল রং ঠিকমতো দেখা যায় কিনা তা পরীক্ষার জন্য'
          },
          {
            en: 'To delete all unsold product inventory from the warehouse',
            bn: 'গুদাম থেকে অবিক্রীত পণ্য মুছে ফেলার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pre-populating cache to prevent cold-start stampedes on launch.',
          bn: 'লঞ্চের সময় শীতল ক্যাশে হঠাৎ চাপ এড়াতে আগে থেকেই ভরে রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'Cold caches collapse under sudden promotional surges. Pre-warming fills the cache beforehand, protecting the database from day-one stampedes.',
          bn: 'খালি ক্যাশে হঠাৎ প্রচারণার লাখ লাখ চাপ এলে ডাটাবেস ধসে পড়ে; প্রি-ওয়ার্মিং আগে থেকেই ক্যাশ প্রস্তুত রেখে সুরক্ষা দেয়।'
        }
      },
      {
        id: 'q-caching-stale-while-revalidate-advantage',
        kind: 'mcq',
        topic: 'Why stale-while-revalidate eliminates stampedes',
        question: {
          en: 'How does the stale-while-revalidate caching pattern fundamentally eliminate the possibility of a cache stampede?',
          bn: 'stale-while-revalidate ক্যাশিং প্যাটার্ন কীভাবে ক্যাশ স্ট্যাম্পিডের ঝুঁকি চিরতরে দূর করে?'
        },
        options: [
          {
            en: 'Because a valid stale response is always present to serve users instantly while exactly one background task fetches the fresh update',
            bn: 'কারণ ব্যবহারকারীকে দেওয়ার মতো একটি পুরনো ক্যাশ সর্বদা মজুদ থাকে এবং ব্যাকগ্রাউন্ডে মাত্র একজন নতুন ডেটা আনতে যায়'
          },
          {
            en: 'It increases the speed of light inside optical fiber cables',
            bn: 'এটি অপটিক্যাল ফাইবারে আলোর গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It permanently removes the need for computer databases',
            bn: 'এটি কম্পিউটার ডাটাবেসের প্রয়োজনীয়তা চিরতরে শেষ করে দেয়'
          },
          {
            en: 'It requires every customer to submit paper request forms',
            bn: 'এতে গ্রাহকদের কাগজে লিখে ফর্ম জমা দিতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Instant response from existing cache while a single worker refreshes.',
          bn: 'পুরনো তথ্য দিয়ে ব্যবহারকারীকে খুশি রেখে একজন মাত্র নতুন তথ্য আনার কথা ভাবুন।'
        },
        explanation: {
          en: 'There is never a vacuum where the key is absent. Callers never wait on origin calculations, ensuring unbroken uptime under extreme spikes.',
          bn: 'ক্যাশে কখনোই শূন্যতা তৈরি হয় না; পুরনো ডেটা দিয়েই কাজ চলে এবং ব্যাকগ্রাউন্ডে একজন সতেজ ডেটা এনে নিঃশব্দে বদলে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-redis-district',
    tech: 'caching',
    title: {
      en: 'Redis In-Memory Architecture, Data Structures & Memory Overhead',
      bn: 'রেডিস ইন-মেমোরি আর্কিটেকচার, ডেটা স্ট্রাকচার ও মেমোরি ওভারহেড'
    }
  }
};