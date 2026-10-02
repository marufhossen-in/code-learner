import type { Lesson } from '../../../lib/types';

export const theTowerOfLayersLesson: Lesson = {
  slug: 'the-tower-of-layers',
  tech: 'caching',
  title: {
    en: 'Multi-Tier Caching Architecture, Key Normalization & The Vary Header',
    bn: 'মাল্টি-টিয়ার ক্যাশিং আর্কিটেকচার, কি নরমালাইজেশন ও ভ্যারি হেডার'
  },
  summary: {
    en: 'Real-world internet systems never rely on a single isolated cache. Instead, requests traverse a multi-tier hierarchy of caching layers: local browser storage, edge Content Delivery Networks (CDNs), reverse proxy gateways (Nginx/Varnish), application in-process memory (Caffeine/Node LRU), centralized distributed clusters (Redis/Memcached), and database buffer pools. Each tier balances capacity, proximity, and operational cost. This lesson explores the multi-tier caching stack. You will master cache key normalization (preventing duplicate cache entries caused by out-of-order query parameters), understand HTTP Vary headers to prevent security leaks between authenticated users, and calculate latency accumulation across multi-tier architectures.',
    bn: 'বাস্তব জীবনের কোনো আধুনিক ইন্টারনেট সিস্টেম একটিমাত্র ক্যাশের ওপর নির্ভর করে না। অনুরোধগুলো একটি বহুস্তরীয় ক্যাশিং কাঠামোর মধ্য দিয়ে প্রবাহিত হয়: ব্রাউজার স্টোরেজ, এজ সিডিএন (CDN), রিভার্স প্রক্সি গেটওয়ে (Nginx/Varnish), অ্যাপ্লিকেশনের নিজস্ব মেমোরি (Node LRU), সেন্ট্রালাইজড ডিস্ট্রিবিউটেড ক্লাস্টার (Redis) এবং ডাটাবেস বাফার পুল। প্রতিটি স্তরে গতি, ধারণক্ষমতা এবং খরচের চমৎকার ভারসাম্য থাকে। এই পাঠে আপনি মাল্টি-টিয়ার ক্যাশিং আয়ত্ত করবেন, কি নরমালাইজেশন শিখবেন যাতে কোয়েরি প্যারামিটারের কারণে একই ডেটা বারবার জমা না হয়, HTTP Vary হেডারের মাধ্যমে তথ্যের সুরক্ষা নিশ্চিত করবেন এবং প্রতিটি স্তরের লেটেন্সি যোগফল হিসাব করবেন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Multi-Tier Hierarchy: From Client Display to Database Silicon',
        bn: 'বহুস্তরীয় কাঠামো: ক্লায়েন্ট স্ক্রিন থেকে ডাটাবেস সিলিকন'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'A user clicking a link on the web does not immediately talk to a database. The request cascades through a sequence of intermediate caching tiers. The earliest tier that can legally satisfy the request halts the journey, returning the payload with minimal latency and zero origin impact.',
        bn: 'ওয়েবে কোনো লিংকে ক্লিক করলেই অনুরোধ সরাসরি ডাটাবেসে চলে যায় না। এটি মধ্যবর্তী বেশ কয়েকটি ক্যাশ স্তরের মধ্য দিয়ে ধাপে ধাপে প্রবাহিত হয়। সবচেয়ে সামনের যে স্তরটি বৈধভাবে অনুরোধ মেটাতে পারে, সে সেখান থেকেই ডেটা ফেরত দেয় এবং পেছনের সিস্টেমে কোনো চাপ সৃষ্টি করে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Multi-Tier Caching',
          def: {
            en: 'Arranging multiple distinct caching technologies in series, from edge locations close to users down to database internal memory',
            bn: 'ব্যবহারকারীর কাছের এজ সার্ভার থেকে শুরু করে ডাটাবেসের ভেতরের মেমোরি পর্যন্ত ধারাবাহিকভাবে একাধিক ক্যাশ স্তর সাজানো'
          }
        },
        {
          term: 'In-Process (L1) Cache',
          def: {
            en: 'Memory stored inside the application runtime process heap (such as a local Node.js Map or LRU instance) with nanosecond access',
            bn: 'অ্যাপ্লিকেশন প্রসেসের নিজস্ব হিপ মেমোরিতে রক্ষিত ক্যাশ যা কোনো নেটওয়ার্ক কল ছাড়াই ন্যানোসেকেন্ডে পাওয়া যায়'
          }
        },
        {
          term: 'Distributed (L2) Cache',
          def: {
            en: 'A centralized in-memory service (like Redis or Memcached) shared across all application microservice instances',
            bn: 'একটি কেন্দ্রীয় ইন-মেমোরি সেবা (যেমন রেডিস) যা ক্লাউডের সমস্ত অ্যাপ্লিকেশন সার্ভার একসাথে শেয়ার করে ব্যবহার করে'
          }
        },
        {
          term: 'Cache Key Normalization',
          def: {
            en: 'Sanitizing, sorting, and lowercasing request parameters so equivalent queries generate identical deterministic cache keys',
            bn: 'অনুরোধের প্যারামিটারগুলোকে বর্ণানুক্রমে সাজিয়ে ও ছোট হাতের অক্ষরে রূপান্তর করে একটি সুনির্দিষ্ট ক্যাশ কি তৈরি করা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-six-tiers',
      text: {
        en: 'The Six Architectural Tiers in Enterprise Production',
        bn: 'এন্টারপ্রাইজ প্রোডাকশনের ৬টি প্রধান ক্যাশ স্তর'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'The Six Multi-Tier Caching Layers and Their Characteristics',
        bn: '৬টি ক্যাশিং স্তর এবং তাদের বৈশিষ্ট্যসমূহ'
      },
      head: [
        { en: 'Tier', bn: 'স্তর' },
        { en: 'Technology / Location', bn: 'প্রযুক্তি / অবস্থান' },
        { en: 'Typical Latency', bn: 'গড় লেটেন্সি' },
        { en: 'Primary Responsibility', bn: 'প্রধান দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'Tier 1: Browser', bn: 'স্তর ১: ব্রাউজার' },
          { en: 'Client RAM and Disk storage', bn: 'ক্লায়েন্টের র‍্যাম ও ডিস্ক' },
          { en: '0.1 milliseconds', bn: '০.১ মিলিসেকেন্ড' },
          { en: 'Images, stylesheets, static JS bundles, and user-private API caches', bn: 'ছবি, সিএসএস, স্ট্যাটিক স্ক্রিপ্ট ও ব্যক্তিগত এপিআই' }
        ],
        [
          { en: 'Tier 2: Edge CDN', bn: 'স্তর ২: এজ সিডিএন' },
          { en: 'Cloudflare, Fastly, AWS CloudFront PoPs', bn: 'ক্লাউডফ্লেয়ার, ক্লাউডফ্রন্ট এজ PoP' },
          { en: '10 to 20 milliseconds', bn: '১০ থেকে ২০ মিলিসেকেন্ড' },
          { en: 'Geographic proximity caching, static media, public page HTML', bn: 'ভৌগোলিক নৈকট্য ক্যাশিং, পাবলিক পেজের এইচটিএমএল' }
        ],
        [
          { en: 'Tier 3: Reverse Proxy', bn: 'স্তর ৩: রিভার্স প্রক্সি' },
          { en: 'Nginx, Varnish, Envoy Gateway', bn: 'এনজিনএক্স, ভার্নিশ গেটওয়ে' },
          { en: '2 to 5 milliseconds', bn: '২ থেকে ৫ মিলিসেকেন্ড' },
          { en: 'Microservice API fragment caching and response compression', bn: 'মাইক্রোসার্ভিস এপিআই ক্যাশিং ও রেসপন্স কম্প্রেশন' }
        ],
        [
          { en: 'Tier 4: App In-Process', bn: 'স্তর ৪: অ্যাপ মেমোরি' },
          { en: 'Node.js lru-cache, Caffeine (Java)', bn: 'নোড.জেএস lru-cache' },
          { en: '0.01 milliseconds', bn: '০.০১ মিলিসেকেন্ড' },
          { en: 'Frequently read configuration objects, feature flags, permissions', bn: 'কনফিগারেশন, ফিচার ফ্ল্যাগ ও ঘন ঘন পঠিত পারমিশন' }
        ],
        [
          { en: 'Tier 5: Distributed', bn: 'স্তর ৫: ডিস্ট্রিবিউটেড' },
          { en: 'Redis Cluster, AWS ElastiCache', bn: 'রেডিস ক্লাস্টার' },
          { en: '1 to 2 milliseconds', bn: '১ থেকে ২ মিলিসেকেন্ড' },
          { en: 'Shared session states, user profiles, shopping carts, rate limits', bn: 'শেয়ার্ড সেশন, ইউজার প্রোফাইল, শপিং কার্ট ও রেট লিমিট' }
        ],
        [
          { en: 'Tier 6: DB Buffer Pool', bn: 'স্তর ৬: ডিবি বাফার পুল' },
          { en: 'PostgreSQL Shared Buffers, MySQL InnoDB', bn: 'পোস্টগ্রেস বাফার, ইনোডিবি পুল' },
          { en: '5 to 10 milliseconds', bn: '৫ থেকে ১০ মিলিসেকেন্ড' },
          { en: 'Keeping active database index b-trees and recent pages in RAM', bn: 'ডাটাবেসের ইনডেক্স ও সাম্প্রতিক টেবিল পেজ র‍্যামে রাখা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'key-normalization-and-vary',
      text: {
        en: 'Key Normalization & The HTTP Vary Header',
        bn: 'কি নরমালাইজেশন ও এইচটিটিপি ভ্যারি হেডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A major flaw in naive caching is Key Fragmentation. For example, /products?category=shoes&sort=price and /products?sort=price&category=shoes return identical data. If keys are generated directly from the raw URL string, the system stores two duplicate copies, halving cache efficiency. Proper key normalization strips irrelevant tracking parameters (like utm_source), sorts remaining query parameters alphabetically, and lowercases keys before hashing. Furthermore, when serving responses that differ by language or authentication, include the HTTP Vary header (Vary: Accept-Encoding, Accept-Language). This instructs CDNs to partition cached variants cleanly, preventing English users from seeing Spanish translations.',
        bn: 'ক্যাশিংয়ের একটি বড় ভুল হলো কি ফ্র্যাগমেন্টেশন। যেমন, /products?category=shoes&sort=price এবং /products?sort=price&category=shoes দুটি ইউআরএল হুবহু একই তথ্য দেখায়। কিন্তু ইউআরএল সরাসরি কি বানালে ক্যাশে দুটি আলাদা কপি তৈরি হয়ে মেমোরি নষ্ট করে। সঠিক কি নরমালাইজেশন অপ্রয়োজনীয় ট্র্যাকিং প্যারামিটার (যেমন utm_source) মুছে ফেলে এবং বাকি প্যারামিটারগুলোকে বর্ণানুক্রমে সাজিয়ে সুনির্দিষ্ট কি তৈরি করে। তাছাড়া ভাষা বা কম্প্রেশনের ওপর ভিত্তি করে আলাদা আউটপুট হলে HTTP Vary হেডার (Vary: Accept-Encoding, Accept-Language) ব্যবহার করা জরুরি, যাতে সিডিএন বিভিন্ন ব্যবহারকারীকে তাদের উপযোগী সঠিক ক্যাশ কপি প্রদর্শন করে।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Multi-Tier Cumulative Latency Tracing',
        bn: 'চালনাযোগ্য সিমুলেশন: মাল্টি-টিয়ার পুঞ্জীভূত লেটেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script traces a request descending through a 5-tier architecture, computing cumulative latency for a cache hit at Redis versus a complete miss to the database:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৫টি স্তরের মধ্য দিয়ে একটি অনুরোধের যাত্রা হিসাব করে এবং রেডিস থেকে ক্যাশ হিট বনাম ডাটাবেসে সম্পূর্ণ মিসের পুঞ্জীভূত লেটেন্সি দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'caching-multitier-sim',
      lang: 'javascript',
      code: `// Multi-Tier Architecture Latency Accumulation Simulator
const tiers = {
  browser: 0.1,    // Client local cache check
  cdn: 15.0,       // Edge PoP round-trip
  gateway: 5.0,    // Reverse proxy / API Gateway processing
  redis: 1.0,      // Centralized distributed cache fetch
  database: 80.0   // Primary relational database query
};

// Scenario A: Cache Hit at Redis (Tier 5)
// Traverses Browser -> CDN -> Gateway -> Redis
const hitAtRedisLatency = tiers.browser + tiers.cdn + tiers.gateway + tiers.redis;

// Scenario B: Complete Cache Miss
// Traverses Browser -> CDN -> Gateway -> Redis -> Database
const fullMissLatency = hitAtRedisLatency + tiers.database;

console.log('Tier 1 (Browser check) latency in ms:', tiers.browser);
// -> Tier 1 (Browser check) latency in ms: 0.1

console.log('Cumulative Latency on Redis Cache Hit in ms:', Number(hitAtRedisLatency.toFixed(1)));
// -> Cumulative Latency on Redis Cache Hit in ms: 21.1

console.log('Cumulative Latency on Full Origin Database Miss in ms:', Number(fullMissLatency.toFixed(1)));
// -> Cumulative Latency on Full Origin Database Miss in ms: 101.1`,
      caption: {
        en: 'Figure 3: A Redis cache hit finishes in 21.1 ms (saving 80 ms), while a full database miss incurs 101.1 ms across 5 tiers',
        bn: 'চিত্র ৩: রেডিসে ক্যাশ হিট হলে ২১.১ মিলিসেকেন্ডে শেষ হয় (৮০ মিলিসেকেন্ড বাঁচে), আর ডাটাবেস মিস হলে ৫ স্তরে ১০১.১ মিলিসেকেন্ড সময় লাগে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Multi-Tier Caching',
        bn: 'মাল্টি-টিয়ার ক্যাশিংয়ের জন্য ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 core principles when engineering multi-layer caching architectures:',
        bn: 'একাধিক ক্যাশ স্তর তৈরির সময় এই ৪টি মূল নীতি মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Normalize Query Parameters',
          def: {
            en: 'Sort parameters alphabetically and strip tracking tags before hashing cache keys to prevent memory fragmentation',
            bn: 'ক্যাশ কি বানানোর আগে প্যারামিটারগুলো বর্ণানুক্রমে সাজান এবং ট্র্যাকিং ট্যাগ বাদ দিন যাতে মেমোরি অপচয় না হয়'
          }
        },
        {
          term: 'Rule 2: Never Cache Authenticated User Responses in Public CDNs',
          def: {
            en: 'Use Cache-Control: private on user-specific endpoints to prevent CDN edge nodes from serving private profile data to strangers',
            bn: 'ব্যক্তিগত তথ্যে Cache-Control: private ব্যবহার করুন যাতে সিডিএন অন্য কারও কাছে ব্যক্তিগত তথ্য ক্যাশ থেকে না পাঠায়'
          }
        },
        {
          term: 'Rule 3: Keep Shorter TTLs as You Move Downstream',
          def: {
            en: 'Edge CDNs should have shorter TTLs than origin caches, or support instantaneous global purge webhooks on content change',
            bn: 'এজ সিডিএনে মূল ক্যাশের চেয়ে কম মেয়াদ রাখুন অথবা ডেটা বদলের সাথে সাথে গ্লোবাল পার্জ ওয়েবহুক ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 4: Set Proper Vary Headers',
          def: {
            en: 'Specify Vary: Accept-Encoding so compressed responses (gzip/brotli) are never served to clients without compression support',
            bn: 'কম্প্রেস করা ডেটা ঠিকমতো পৌঁছাতে Vary: Accept-Encoding হেডার দিন যাতে কোনো ব্রাউজারে ফরম্যাট গরমিল না হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-multitier-calc-ex',
      kind: 'mcq',
      topic: 'Cumulative multi-tier latency calculation',
      question: {
        en: 'If Browser takes 0.1 ms, CDN takes 15 ms, Gateway takes 5 ms, and Redis takes 1 ms, what is the total latency of a Redis cache hit?',
        bn: 'ব্রাউজারে ০.১, সিডিএনে ১৫, গেটওয়েতে ৫ এবং রেডিসে ১ মিলিসেকেন্ড লাগলে রেডিস ক্যাশ হিটের মোট সময় কত?'
      },
      options: [
        {
          en: '21.1 ms (0.1 + 15 + 5 + 1)',
          bn: '২১.১ মিলিসেকেন্ড (০.১ + ১৫ + ৫ + ১)'
        },
        {
          en: '101.1 ms',
          bn: '১০১.১ মিলিসেকেন্ড'
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
        en: 'Add the latencies of all 4 tiers: 0.1 + 15 + 5 + 1 = 21.1 ms.',
        bn: '৪টি স্তরের সময় যোগ করুন: ০.১ + ১৫ + ৫ + ১ = ২১.১ মিলিসেকেন্ড।'
      },
      explanation: {
        en: 'The request traverses the browser (0.1ms), network to CDN (15ms), gateway (5ms), and reaches Redis (1ms), totaling 21.1 ms.',
        bn: 'অনুরোধটি ব্রাউজার, সিডিএন, গেটওয়ে এবং রেডিস হয়ে আসে; ফলে মোট সময় ২১.১ মিলিসেকেন্ড লাগে।'
      }
    },
    {
      id: 'caching-normalize-key-ex',
      kind: 'mcq',
      topic: 'Why query parameter normalization is necessary',
      question: {
        en: 'Why should an application sort query parameters alphabetically before generating cache keys?',
        bn: 'ক্যাশ কি তৈরির আগে অ্যাপ্লিকেশনের কেন কোয়েরি প্যারামিটারগুলোকে বর্ণানুক্রমে সাজানো উচিত?'
      },
      options: [
        {
          en: 'To ensure URLs with identical parameters in different orders share the exact same cache entry instead of duplicating memory',
          bn: 'যাতে ভিন্ন ক্রমে থাকা একই প্যারামিটারের ইউআরএলগুলো নতুন কি না বানিয়ে একই ক্যাশ ডেটা ব্যবহার করতে পারে'
        },
        {
          en: 'Because Redis only accepts keys sorted in alphabetical order',
          bn: 'কারণ রেডিস কেবল বর্ণানুক্রমিক কি গ্রহণ করতে পারে'
        },
        {
          en: 'To make the database queries run backwards',
          bn: 'ডাটাবেস কোয়েরি পেছনের দিকে চালানোর জন্য'
        },
        {
          en: 'To prevent users from opening web browsers',
          bn: 'ব্যবহারকারীকে ব্রাউজার খুলতে বাধা দেওয়ার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prevents cache key fragmentation and duplicated storage.',
        bn: 'একই তথ্যের ডুপ্লিকেট ক্যাশ রোধের কথা ভাবুন।'
      },
      explanation: {
        en: 'Sorting guarantees that /items?a=1&b=2 and /items?b=2&a=1 map to the identical cache key items:a=1:b=2.',
        bn: 'প্যারামিটার সাজালে /items?a=1&b=2 এবং /items?b=2&a=1 উভয় ইউআরএল একই ক্যাশ কি তৈরি করে মেমোরি বাঁচায়।'
      }
    },
    {
      id: 'caching-vary-private-ex',
      kind: 'mcq',
      topic: 'Protecting private user data in public CDNs',
      question: {
        en: 'What directive must be sent in the Cache-Control header to prevent public shared CDNs from caching personal user dashboards?',
        bn: 'পাবলিক সিডিএনে যাতে কোনো ব্যবহারকারীর ব্যক্তিগত তথ্য ক্যাশ না হয়, সেজন্য Cache-Control হেডারে কী ব্যবহার করতে হয়?'
      },
      options: [
        {
          en: 'Cache-Control: private',
          bn: 'Cache-Control: private'
        },
        {
          en: 'Cache-Control: public, max-age=31536000',
          bn: 'Cache-Control: public, max-age=31536000'
        },
        {
          en: 'Cache-Control: delete-all',
          bn: 'Cache-Control: delete-all'
        },
        {
          en: 'Cache-Control: unrestricted',
          bn: 'Cache-Control: unrestricted'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "private" directive restricts caching to client browsers only.',
        bn: 'প্রাইভেট নির্দেশিকা কেবল ব্রাউজারেই ক্যাশ করার অনুমতি দেয়।'
      },
      explanation: {
        en: 'Cache-Control: private permits caching in individual user browsers while forbidding shared intermediary CDNs from storing the payload.',
        bn: 'private নির্দেশিকা থাকলে সিডিএন নিজে ক্যাশ না রেখে সরাসরি ব্যবহারকারীর কাছে পাঠায়, কিন্তু ব্যবহারকারীর নিজস্ব ব্রাউজারে ক্যাশ হতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-multitier',
    title: {
      en: 'Multi-Tier Caching Architecture Quiz',
      bn: 'মাল্টি-টিয়ার ক্যাশিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-caching-l1-vs-l2',
        kind: 'mcq',
        topic: 'Tradeoff between in-process (L1) and distributed (L2) cache',
        question: {
          en: 'What is the primary advantage of an in-process memory cache over a centralized Redis distributed cache?',
          bn: 'সেন্ট্রালাইজড রেডিস ক্যাশের তুলনায় অ্যাপ্লিকেশনের ইন-প্রসেস মেমোরি ক্যাশের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'In-process cache eliminates network I/O completely, responding in nanoseconds instead of milliseconds',
            bn: 'ইন-প্রসেস ক্যাশে কোনো নেটওয়ার্ক কল লাগে না, ফলে মিলিসেকেন্ডের বদলে ন্যানোসেকেন্ডে ডেটা পাওয়া যায়'
          },
          {
            en: 'In-process cache can hold 100 terabytes of data on a micro-instance',
            bn: 'ইন-প্রসেস ক্যাশ ১০০ টেরাবাইট ডেটা রাখতে পারে'
          },
          {
            en: 'In-process cache automatically syncs across all global cloud regions for free',
            bn: 'এটি বিশ্বজুড়ে সব ক্লাউডে ফ্রিতে নিজে নিজে সিঙ্ক হয়'
          },
          {
            en: 'In-process cache never uses any system RAM',
            bn: 'এটি কোনো সিস্টেম র‍্যাম ব্যবহার করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Zero network serialization and zero socket hops.',
          bn: 'নেটওয়ার্ক না লাগায় চোখের পলকে কাজ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'In-process caches read directly from RAM heap pointers without TCP socket serialization or network transit.',
          bn: 'ইন-প্রসেস ক্যাশ সরাসরি র‍্যাম থেকে মেমোরি পয়েন্টার দিয়ে ডেটা পড়ে, কোনো নেটওয়ার্ক দেরির ঝামেলা থাকে না।'
        }
      },
      {
        id: 'q-caching-vary-encoding',
        kind: 'mcq',
        topic: 'Role of Vary: Accept-Encoding',
        question: {
          en: 'What problem occurs if a CDN ignores the Vary: Accept-Encoding header?',
          bn: 'সিডিএন যদি Vary: Accept-Encoding হেডার উপেক্ষা করে তবে কোন সমস্যাটি ঘটে?'
        },
        options: [
          {
            en: 'A gzip-compressed response might be served to an older client that cannot decompress it, resulting in raw unreadable binary garbage',
            bn: 'জিপ দিয়ে কম্প্রেস করা ডেটা এমন ব্রাউজারে চলে যেতে পারে যা ডিকম্প্রেস করতে পারে না, ফলে স্ক্রিনে অবোধ্য লেখা দেখা যাবে'
          },
          {
            en: 'The website domain name expires immediately',
            bn: 'ওয়েবসাইটের ডোমেইন সাথে সাথে বাতিল হয়ে যায়'
          },
          {
            en: 'All images on the website become black and white',
            bn: 'সব ছবি সাদা-কালো হয়ে যায়'
          },
          {
            en: 'The user battery drains completely in 10 seconds',
            bn: '১০ সেকেন্ডে মোবাইলের ব্যাটারি শেষ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Serving compressed bytes to a client lacking decompression.',
          bn: 'কম্প্রেশন না জানা ব্রাউজারে কম্প্রেস করা ফাইল যাওয়ার বিপদের কথা ভাবুন।'
        },
        explanation: {
          en: 'Vary: Accept-Encoding tells the CDN to keep separate cache representations for gzip, brotli, and uncompressed clients.',
          bn: 'এই হেডার সিডিএনকে নির্দেশ দেয় কম্প্রেসড ও সাধারণ ব্রাউজারের জন্য ক্যাশে আলাদা সংস্করণ সংরক্ষণ করতে।'
        }
      },
      {
        id: 'q-caching-key-structure',
        kind: 'mcq',
        topic: 'Best practice cache key format',
        question: {
          en: 'Which format represents the industry standard hierarchical convention for naming distributed cache keys?',
          bn: 'ডিস্ট্রিবিউটেড ক্যাশ কি নামকরণের জন্য নিচের কোন ফরম্যাটটি ইন্ডাস্ট্রির আদর্শ মান?'
        },
        options: [
          {
            en: 'namespace:entity_type:entity_id:field (e.g. ecom:user:1042:profile)',
            bn: 'namespace:entity_type:entity_id:field (যেমন ecom:user:1042:profile)'
          },
          {
            en: 'A single integer like 42',
            bn: 'শুধুমাত্র একটি সংখ্যা যেমন ৪২'
          },
          {
            en: 'The full HTML document text as the key',
            bn: 'পুরো এইচটিএমএল লেখাটিকেই কি বানানো'
          },
          {
            en: 'Random characters generated every millisecond',
            bn: 'প্রতি ফ্রেমে এলোমেলো শব্দ তৈরি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hierarchical colon-separated namespace convention.',
          bn: 'কোলন দিয়ে আলাদা করা পরিচ্ছন্ন কাঠামোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Colon-separated namespaces make keys self-describing, easy to inspect in debugging tools, and easy to group or delete by pattern.',
          bn: 'কোলন দিয়ে ভাগ করা কি সহজে বোঝা যায়, ডিবাগ করা সহজ হয় এবং নির্দিষ্ট গ্রুপ ধরে মুছে ফেলা যায়।'
        }
      },
      {
        id: 'q-caching-etag-mechanism',
        kind: 'mcq',
        topic: 'How HTTP ETags enable 304 Not Modified responses',
        question: {
          en: 'How does an HTTP ETag (Entity Tag) reduce bandwidth consumption between client and server?',
          bn: 'HTTP ETag কীভাবে ক্লায়েন্ট ও সার্ভারের মধ্যে ব্যান্ডউইথ খরচ কমায়?'
        },
        options: [
          {
            en: 'The browser sends If-None-Match with its stored hash; if the file is unchanged, the server returns a tiny 304 Not Modified header without the body',
            bn: 'ব্রাউজার সংরক্ষিত হ্যাশ পাঠিয়ে যাচাই করে; ফাইল না বদলালে সার্ভার কোনো বডি ছাড়া ছোট্ট ৩০৪ Not Modified হেডার পাঠিয়ে ব্যান্ডউইথ বাঁচায়'
          },
          {
            en: 'It deletes large video files from the internet',
            bn: 'এটি ইন্টারনেট থেকে বড় ভিডিও মুছে ফেলে'
          },
          {
            en: 'It converts JavaScript into WebAssembly',
            bn: 'এটি জাভাস্ক্রিপ্টকে ওয়েবঅ্যাসেম্বলিতে রূপান্তর করে'
          },
          {
            en: 'It doubles the physical download speed of the Wi-Fi',
            bn: 'এটি ওয়াইফাইয়ের গতি দ্বিগুণ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Conditional validation returning 304 Not Modified.',
          bn: '৩০৪ রেসপন্সে বডি ছাড়া শুধু হেডার পাঠানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'If the resource fingerprint matches, no payload needs to travel across the network, saving immense bandwidth.',
          bn: 'হ্যাশ মিলে গেলে সার্ভার থেকে বাড়তি কোনো ডেটা পাঠাতে হয় না, ফলে ব্যান্ডউইথ ও সময় দুটোই প্রচুর বাঁচে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-miss-clerks',
    tech: 'caching',
    title: {
      en: 'Cache Access Patterns, Write-Behind & Negative Caching',
      bn: 'ক্যাশ অ্যাক্সেস প্যাটার্ন, রাইট-বিহাইন্ড ও নেগেটিভ ক্যাশিং'
    }
  }
};