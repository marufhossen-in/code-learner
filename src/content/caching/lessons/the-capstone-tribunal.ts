import type { Lesson } from '../../../lib/types';

export const theCapstoneTribunalLesson: Lesson = {
  slug: 'the-capstone-tribunal',
  tech: 'caching',
  title: {
    en: 'Production Distributed Caching Architecture — Enterprise Capstone',
    bn: 'প্রোডাকশন ডিস্ট্রিবিউটেড ক্যাশিং আর্কিটেকচার — এন্টারপ্রাইজ ক্যাপস্টোন'
  },
  summary: {
    en: 'This production capstone synthesizes every caching technology and architectural discipline mastered across the track into a unified high-scale design capable of handling 100000 requests per second. You will architect an end-to-end multi-tier pipeline: browser-level asset caching, edge CDN route absorption, API gateway in-process caching, Redis Cluster distributed storage, and database protection. We evaluate circuit breakers for graceful cache fallback and establish production monitoring baselines. You will analyze Hit Ratios, Eviction Velocity, and Memory Fragmentation Ratios. Finally, we calculate compound tier offloading — demonstrating how tiered caching shields primary databases from 98.5% of all incoming enterprise traffic.',
    bn: 'এই ক্যাপস্টোন লেসনে পুরো ক্যাশিং ট্র্যাকে শেখা সমস্ত প্রযুক্তি ও স্থাপত্য কৌশল একত্রিত করে প্রতি সেকেন্ডে ১০০০০০ অনুরোধ সামলাতে সক্ষম একটি পূর্ণাঙ্গ এন্টারপ্রাইজ আর্কিটেকচার ডিজাইন করা হয়েছে। আপনি ক্লায়েন্ট ব্রাউজার ক্যাশ, এজ সিডিএন, এপিআই গেটওয়ে, রেডিস ক্লাস্টার এবং ডাটাবেস সুরক্ষার একটি শক্তিশালী সমন্বয় গড়ে তুলবেন। আমরা ক্যাশ ডাউন হলে সিস্টেম সচল রাখতে সার্কিট ব্রেকার এবং গুরুত্বপূর্ণ মনিটরিং মেট্রিক্স মূল্যায়ন করব। আপনি হিট রেশিও, ইভিকশন গতিবেগ এবং মেমোরি ফ্র্যাগমেন্টেশন অনুপাত বিশ্লেষণ করবেন। সবশেষে আমরা বহুস্তরীয় ট্রাফিক সুরক্ষার পূর্ণাঙ্গ হিসাব পরীক্ষা করব — যা দেখায় কীভাবে এই নকশা ডাটাবেসের ৯৮.৫% চাপ সফলভাবে প্রতিরোধ করে।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Enterprise Architecture: The Anatomy of a 100000 RPS Pipeline',
        bn: 'এন্টারপ্রাইজ আর্কিটেকচার: প্রতি সেকেন্ডে ১০০০০০ অনুরোধের পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'Operating a global internet service handling 100000 requests per second without a disciplined caching strategy is impossible. If every request reached the database, the required server infrastructure would cost millions of dollars and collapse under peak promotional events. A multi-tier caching architecture acts as a series of defensive dams, filtering traffic at every step.',
        bn: 'সঠিক ক্যাশিং কৌশল ছাড়া প্রতি সেকেন্ডে ১০০০০০ অনুরোধ সামলানো কোনো বৈশ্বিক ইন্টারনেট সেবার পক্ষে অসম্ভব। প্রতিটি অনুরোধ যদি সরাসরি ডাটাবেসে যেত, তবে কোটি কোটি টাকার অবকাঠামো তৈরি করেও পিক আওয়ারে সার্ভার রক্ষা করা যেত না। বহুস্তরীয় ক্যাশিং আর্কিটেকচার একটি বাঁধের মতো কাজ করে, যা প্রতিটি ধাপে ধাপে ট্রাফিকের চাপ ফিল্টার করে কমিয়ে আনে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'End-to-End Latency Budget',
          def: {
            en: 'Allocating specific millisecond targets across every hop (CDN, gateway, cache, and database) to guarantee a sub-50ms P99 user response',
            bn: 'সিডিএন, গেটওয়ে, ক্যাশ ও ডাটাবেসের মধ্যে সুনির্দিষ্ট সময় বরাদ্দ করা যাতে ব্যবহারকারী ৫০ মিলিসেকেন্ডের মধ্যে সাড়া পায়'
          }
        },
        {
          term: 'Cache Circuit Breaker',
          def: {
            en: 'A defensive pattern that detects cache outages, trips open to avoid cascading timeouts, and gracefully serves fallback default values',
            bn: 'ক্যাশ সার্ভার ধীর বা ডাউন হলে সিস্টেম যাতে টাইমআউটে আটকে না যায়, সেজন্য সরাসরি সতর্ক সংকেত দিয়ে নিরাপদ ব্যাকআপ ডেটা পাঠানো'
          }
        },
        {
          term: 'Memory Fragmentation Ratio',
          def: {
            en: 'The quotient of system-level RSS allocation divided by internal payload usage (used_memory_rss / used_memory)',
            bn: 'অপারেটিং সিস্টেমের বরাদ্দকৃত মোট আকারকে কার্যকর ডেটার সাইজ দিয়ে ভাগের ফল'
          }
        },
        {
          term: 'Eviction Velocity',
          def: {
            en: 'The rate of keys discarded per second by eviction algorithms, indicating whether the active working set has outgrown configured RAM',
            bn: 'মেমোরি ফুরিয়ে যাওয়ার কারণে প্রতি সেকেন্ডে কতটি কি মুছে যাচ্ছে তার গতি, যা মেমোরি সংকট নির্দেশ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'monitoring-dashboard-metrics',
      text: {
        en: 'The Four Critical Health Metrics for Production Caches',
        bn: 'প্রোডাকশন ক্যাশের ৪টি অত্যন্ত গুরুত্বপূর্ণ মনিটরিং মেট্রিক'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Production Caching Health Metrics and Operational Thresholds',
        bn: 'ক্যাশ মনিটরিং মেট্রিক্স ও তাদের নিরাপদ মাত্রা'
      },
      head: [
        { en: 'Metric', bn: 'মেট্রিক' },
        { en: 'Healthy Production Target', bn: 'নিরাপদ মাত্রা' },
        { en: 'Danger Signal', bn: 'বিপদের লক্ষণ' },
        { en: 'Root Cause & Remediation', bn: 'কারণ ও সমাধান' }
      ],
      rows: [
        [
          { en: 'Cache Hit Ratio', bn: 'হিট রেশিও' },
          { en: '95% to 99%', bn: '৯৫% থেকে ৯৯%' },
          { en: 'Drop below 90%', bn: '৯০% এর নিচে নামলে' },
          { en: 'Key fragmentation, improper TTLs, or un-normalized query strings; audit keys and add normalization', bn: 'কি ফ্র্যাগমেন্টেশন বা ছোট টিটিএল; কি নরমালাইজেশন চালু করুন' }
        ],
        [
          { en: 'Memory Fragmentation Ratio', bn: 'ফ্র্যাগমেন্টেশন অনুপাত' },
          { en: '1.0 to 1.5', bn: '১.০ থেকে ১.৫' },
          { en: 'Spike above 1.5 or below 1.0', bn: '১.৫ ছাড়িয়ে গেলে' },
          { en: 'Operating system page allocation gaps; enable Redis activedefrag yes or restart shards gracefully', bn: 'মেমোরি খণ্ডবিখণ্ড হওয়া; রেডিসের activedefrag চালু করুন' }
        ],
        [
          { en: 'Eviction Velocity', bn: 'ইভিকশন গতি' },
          { en: '0 to 10 keys per second', bn: '০ থেকে ১০ কি/সেকেন্ড' },
          { en: 'Sustained spikes above 100/s', bn: '১০০ ছাড়িয়ে গেলে' },
          { en: 'Active working set exceeds RAM capacity; scale out cluster shards or increase instance memory', bn: 'কাজের ডেটা র‍্যামের চেয়ে বড়; ক্লাস্টারে আরও মেমোরি যোগ করুন' }
        ],
        [
          { en: 'P99 Response Latency', bn: 'P99 লেটেন্সি' },
          { en: 'Under 5 milliseconds', bn: '৫ মিলিসেকেন্ডের নিচে' },
          { en: 'Sustained latency above 20 ms', bn: '২০ মিলিসেকেন্ডের বেশি' },
          { en: 'Slow O(N) commands blocking single thread (e.g. KEYS, HGETALL on giant hash); check SLOWLOG', bn: 'ভারী কমান্ড থ্রেড আটকে রেখেছে; স্লোলগ দেখে কমান্ড অপটিমাইজ করুন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'compound-tier-mathematics',
      text: {
        en: 'The Mathematics of Compound Multi-Tier Offloading',
        bn: 'যৌগিক বহুস্তরীয় ট্রাফিক সুরক্ষার গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider an enterprise architecture receiving 100000 requests per second. The edge CDN achieves a 70% hit ratio on cached HTML, static assets, and catalog data, absorbing 70000 requests immediately. The remaining 30,000 requests reach the origin application gateway. The distributed Redis Cluster achieves a 95% hit ratio on remaining queries (sessions, inventory, profiles), absorbing 28500 requests. Only 1500 requests per second reach the relational database. Together, the tiered caching system absorbs 98.5% of total enterprise volume, allowing a modest database cluster to effortlessly handle massive traffic.',
        bn: 'ধরা যাক একটি এন্টারপ্রাইজ সিস্টেমে প্রতি সেকেন্ডে ১০০০০০ অনুরোধ আসে। সামনের এজ সিডিএন ৭০% হিট রেট দিয়ে এইচটিএমএল ও ক্যাটালগ থেকে ৭০০০০ অনুরোধ সাথে সাথে মিটিয়ে দেয়। অবশিষ্ট ৩০,০০০ অনুরোধ অ্যাপ্লিকেশনের কাছে পৌঁছায়। সেখানে সেন্ট্রালাইজড রেডিস ক্লাস্টার বাকিগুলোর ৯৫% হিট রেট দিয়ে সেশন ও প্রোফাইল থেকে ২৮৫০০ অনুরোধ সামলে নেয়। মূল ডাটাবেসের কাছে পৌঁছায় প্রতি সেকেন্ডে মাত্র ১৫০০টি কোয়েরি। সব মিলিয়ে এই বহুস্তরীয় ক্যাশ পুরো প্ল্যাটফর্মের ৯৮.৫% ট্রাফিক সফলভাবে হজম করে ফেলে, ফলে সাধারণ মানের একটি ডাটাবেস দিয়েই বিশাল ট্রাফিক অনায়াসে চালানো সম্ভব হয়।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Enterprise Multi-Tier Offload Calculation',
        bn: 'চালনাযোগ্য সিমুলেশন: এন্টারপ্রাইজ ট্রাফিক সুরক্ষা গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the compound offload mathematics across a 100000 requests-per-second enterprise workload, calculating hits at each tier and final database queries:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি সেকেন্ডে ১০০০০০ অনুরোধের ক্ষেত্রে বিভিন্ন স্তরে ট্রাফিক ফিল্টারিং হিসাব করে এবং ডাটাবেসের চূড়ান্ত চাপ দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'caching-capstone-sim',
      lang: 'javascript',
      code: `// Enterprise Multi-Tier Caching Offload Simulator
const totalRequests = 100000; // 100K requests per second
const cdnHitRatio = 0.70;     // 70% absorbed at edge CDN
const redisHitRatio = 0.95;   // 95% absorbed at Redis Cluster

// Step 1: CDN edge tier absorption
const cdnHits = totalRequests * cdnHitRatio; // 70000
const cdnMisses = totalRequests - cdnHits;   // 30,000

// Step 2: Distributed Redis Cluster tier absorption
const redisHits = cdnMisses * redisHitRatio; // 28500
const originDbQueries = cdnMisses - redisHits; // 1500

// Step 3: Overall system offload calculation
const overallCacheOffloadPercent = Number((((totalRequests - originDbQueries) / totalRequests) * 100).toFixed(1));

console.log('Total incoming requests per second:', totalRequests);
// -> Total incoming requests per second: 100000

console.log('Requests absorbed at Edge CDN:', cdnHits);
// -> Requests absorbed at Edge CDN: 70000

console.log('Requests absorbed at Redis Cluster:', redisHits);
// -> Requests absorbed at Redis Cluster: 28500

console.log('Final queries reaching origin database:', originDbQueries);
// -> Final queries reaching origin database: 1500

console.log('Total enterprise traffic offloaded by cache layers (%):', overallCacheOffloadPercent);
// -> Total enterprise traffic offloaded by cache layers (%): 98.5`,
      caption: {
        en: 'Figure 9: From 100000 initial requests, CDN absorbs 70000 and Redis absorbs 28500, leaving only 1500 database queries (a 98.5% total offload)',
        bn: 'চিত্র ৯: ১০০০০০ অনুরোধ থেকে সিডিএন ৭০০০০ ও রেডিস ২৮৫০০ শোষণ করে, ফলে ডাটাবেসে যায় মাত্র ১৫০০ কোয়েরি (৯৮.৫% সুরক্ষা)'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Architecture Rules for Enterprise Caching Systems',
        bn: 'এন্টারপ্রাইজ ক্যাশিং সিস্টেমের জন্য ৪টি স্থাপত্য নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Adhere to these 4 architectural principles when delivering enterprise caching platforms:',
        bn: 'এন্টারপ্রাইজ ক্যাশিং প্ল্যাটফর্ম নির্মাণের সময় এই ৪টি নিয়ম নিষ্ঠার সাথে অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Implement Circuit Breakers Around Cache Lookups',
          def: {
            en: 'Never let cache degradation crash applications; use timeouts and circuit breakers to fall back gracefully to the database or static defaults',
            bn: 'ক্যাশ ধীর হলে যেন অ্যাপ বন্ধ না হয়; টাইমআউট ও সার্কিট ব্রেকার দিয়ে সরাসরি ডাটাবেস বা ডিফল্ট মান ফেরত দিন'
          }
        },
        {
          term: 'Rule 2: Alert on Eviction Velocity Spikes',
          def: {
            en: 'Set automated alerts when evictions exceed 100 keys per second; rapid evictions signal that active working sets exceed provisioned RAM',
            bn: 'প্রতি সেকেন্ডে ১০০ টির বেশি কি মুছতে শুরু করলেই এলার্ট দিন; এটি নির্দেশ করে যে মেমোরির ধারণক্ষমতা ফুরিয়ে গেছে'
          }
        },
        {
          term: 'Rule 3: Establish Multi-Tier Defense in Depth',
          def: {
            en: 'Layer Browser, CDN, and Redis caches so failure of any single tier does not directly expose the primary database to the entire traffic volume',
            bn: 'ব্রাউজার, সিডিএন ও রেডিসের একাধিক স্তর রাখুন যাতে কোনো একটি স্তর নষ্ট হলেও ডাটাবেসের ওপর একযোগে সব চাপ না পড়ে'
          }
        },
        {
          term: 'Rule 4: Track Redis Memory Fragmentation in Production',
          def: {
            en: 'Monitor mem_fragmentation_ratio; if it exceeds 1.5, enable active defragmentation (activedefrag yes) to reclaim operating system pages',
            bn: 'ফ্র্যাগমেন্টেশন অনুপাত ১.৫ ছাড়ালে activedefrag চালু করুন যাতে অপারেটিং সিস্টেমের মেমোরি অপচয় দূর হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-capstone-calc-ex',
      kind: 'mcq',
      topic: 'Calculating compound cache offload percentage',
      question: {
        en: 'Under 100000 requests per second, if CDN absorbs 70000 and Redis absorbs 28500, leaving 1500 queries to the database, what is the total cache offload percentage?',
        bn: 'সেকেন্ডে ১০০০০০ অনুরোধের মধ্যে সিডিএন ৭০০০০ এবং রেডিস ২৮৫০০ শোষণ করার পর ডাটাবেসে ১৫০০ কোয়েরি গেলে মোট কত শতাংশ ট্রাফিক ক্যাশ রক্ষা করল?'
      },
      options: [
        {
          en: '98.5% ((100000 - 1500) / 100000 * 100)',
          bn: '৯৮.৫% ((১০০০০০ - ১৫০০) / ১০০০০০ * ১০০)'
        },
        {
          en: '70.0%',
          bn: '৭০.০%'
        },
        {
          en: '95.0%',
          bn: '৯৫.০%'
        },
        {
          en: '50.0%',
          bn: '৫০.০%'
        }
      ],
      answer: 0,
      hint: {
        en: 'Subtract 1500 from 100000 and divide by 100000.',
        bn: '১০০০০০ থেকে ১৫০০ বাদ দিয়ে ১০০০০০ দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: '98500 requests out of 100000 were satisfied by the cache layers, achieving a 98.5% total offload of the database.',
        bn: '১০০০০০ এর মধ্যে ৯৮৫০০ অনুরোধ ক্যাশ থেকেই মিটেছে, যার ফলে ডাটাবেস ৯৮.৫% চাপ থেকে সম্পূর্ণ নিরাপদ ছিল।'
      }
    },
    {
      id: 'caching-circuit-breaker-ex',
      kind: 'mcq',
      topic: 'Role of circuit breakers in cache infrastructure',
      question: {
        en: 'Why is a circuit breaker critical when communicating with a distributed Redis cluster?',
        bn: 'ডিস্ট্রিবিউটেড রেডিস ক্লাস্টারের সাথে যোগাযোগের সময় সার্কিট ব্রেকার কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'If Redis becomes saturated or slow, the circuit breaker opens to fail fast, preventing application connection pools from hanging and crashing',
          bn: 'রেডিস কোনো কারণে ধীর বা ডাউন হলে সার্কিট ব্রেকার সাথে সাথে সংযোগ বিচ্ছিন্ন করে অ্যাপকে আটকে থাকা বা ক্র্যাশ করা থেকে বাঁচায়'
        },
        {
          en: 'To reduce the electricity bill of the server room',
          bn: 'সার্ভার রুমের বিদ্যুৎ বিল কমানোর জন্য'
        },
        {
          en: 'To make the database queries run twice as fast',
          bn: 'ডাটাবেস কোয়েরি দ্বিগুণ দ্রুত চালানোর জন্য'
        },
        {
          en: 'Because Redis requires a physical hardware fuse on the motherboard',
          bn: 'কারণ রেডিসের জন্য মাদারবোর্ডে ফিউজ লাগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prevents cascading connection pool exhaustion during cache degradation.',
        bn: 'সার্ভার আটকে গিয়ে ধসে পড়া রোধের কথা ভাবুন।'
      },
      explanation: {
        en: 'A degraded cache can lock up hundreds of application threads waiting on socket timeouts. Circuit breakers fail fast to preserve stability.',
        bn: 'ক্যাশ ধীর হলে শত শত থ্রেড আটকে গিয়ে পুরো অ্যাপ্লিকেশন ক্র্যাশ করে; সার্কিট ব্রেকার দ্রুত সিদ্ধান্ত নিয়ে সিস্টেমকে বাঁচায়।'
      }
    },
    {
      id: 'caching-frag-ratio-ex',
      kind: 'mcq',
      topic: 'Interpretation of memory fragmentation ratio',
      question: {
        en: 'What does a Redis mem_fragmentation_ratio of 2.2 indicate to an operations team?',
        bn: 'রেডিসে mem_fragmentation_ratio ২.২ দেখালে অপারেশন দল কী বুঝতে পারে?'
      },
      options: [
        {
          en: 'The operating system has allocated 2.2 times more RAM than Redis is actually using for data, indicating severe memory fragmentation',
          bn: 'রেডিস যতখানি ডেটা রেখেছে তার চেয়ে ২.২ গুণ বেশি মেমোরি অপারেটিং সিস্টেম ধরে রেখেছে, যা চরম মেমোরি ফ্র্যাগমেন্টেশন নির্দেশ করে'
        },
        {
          en: 'The database has doubled in speed',
          bn: 'ডাটাবেস দ্বিগুণ দ্রুত হয়ে গেছে'
        },
        {
          en: 'There are exactly 2.2 keys left in the database',
          bn: 'ডাটাবেসে মাত্র ২.২টি কি বাকি আছে'
        },
        {
          en: 'The server network connection is disconnected',
          bn: 'সার্ভারের নেটওয়ার্ক বিচ্ছিন্ন হয়ে গেছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'RSS memory is more than double the actual data size.',
        bn: 'আসল ডেটার চেয়ে দ্বিগুণেরও বেশি মেমোরি অপচয়ের কথা ভাবুন।'
      },
      explanation: {
        en: 'A ratio above 1.5 means significant physical RAM is tied up in allocator fragmentation. Active defragmentation or a restart is warranted.',
        bn: 'অনুপাত ১.৫ ছাড়ালে প্রচুর র‍্যাম খালি পড়ে থেকেও আটকে থাকে; তখন ডিফ্র্যাগমেন্টেশন চালানো আবশ্যক।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-capstone',
    title: {
      en: 'Enterprise Caching Architecture Capstone Quiz',
      bn: 'এন্টারপ্রাইজ ক্যাশিং আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'q-caching-eviction-velocity-alarm',
        kind: 'mcq',
        topic: 'Why spiking eviction velocity triggers an emergency alarm',
        question: {
          en: 'Why does an eviction velocity spike (e.g. 5,000 evictions per second) trigger an immediate severity-one engineering alarm?',
          bn: 'প্রতি সেকেন্ডে ৫,০০০ কি মুছে যাওয়ার মতো ইভিকশন স্পাইক কেন জরুরি ইঞ্জিনিয়ারিং সতর্কবার্তা হিসেবে চিহ্নিত হয়?'
        },
        options: [
          {
            en: 'It proves the active working set has drastically exceeded configured RAM, thrashing the cache and forcing huge miss cascades onto the database',
            bn: 'এটি প্রমাণ করে যে কাজের ডেটার পরিমাণ র‍্যামের তুলনায় অনেক বেশি, ফলে দরকারি ডেটা মুছে গিয়ে ডাটাবেসে সুনামি আঘাত হানছে'
          },
          {
            en: 'It means the Linux operating system kernel is corrupted',
            bn: 'এর মানে লিনাক্স কার্নেল নষ্ট হয়ে গেছে'
          },
          {
            en: 'It indicates that all computer mice have stopped working',
            bn: 'এটি নির্দেশ করে যে সব মাউস নষ্ট হয়ে গেছে'
          },
          {
            en: 'Because Redis evictions cost real money per key',
            bn: 'কারণ রেডিস কি মুছতে টাকা কাটে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Working set size outgrowing RAM capacity, causing cache thrashing.',
          bn: 'র‍্যাম ফুরিয়ে গিয়ে কাজের দরকারি জিনিস মুছে ফেলার বিপদের কথা ভাবুন।'
        },
        explanation: {
          en: 'High eviction velocity means items are evicted almost immediately after being cached, reducing hit rate and overwhelming the database.',
          bn: 'দ্রুত ডেটা মুছে যাওয়ার মানে হলো সেভ হওয়ার সাথে সাথেই আবার মুছে যাচ্ছে, ফলে ক্যাশ কোনো কাজে না এসে ডাটাবেস ধ্বংস হয়।'
        }
      },
      {
        id: 'q-caching-p99-slowlog',
        kind: 'mcq',
        topic: 'How to diagnose P99 latency degradation in Redis',
        question: {
          en: 'When a Redis cluster shows healthy hit rates but experiences elevated P99 latency, which diagnostic command should you inspect first?',
          bn: 'রেডিসে হিট রেট ভালো থাকা সত্ত্বেও P99 লেটেন্সি বেশি হলে সবার আগে কোন কমান্ড দিয়ে সমস্যা শনাক্ত করবেন?'
        },
        options: [
          {
            en: 'SLOWLOG GET to identify long-running O(N) commands (like KEYS or huge HGETALLs) that are blocking the single-threaded event loop',
            bn: 'SLOWLOG GET চালিয়ে কোন ভারী কমান্ডটি (যেমন KEYS বা বড় HGETALL) একক থ্রেড আটকে রাখছে তা দ্রুত বের করা'
          },
          {
            en: 'FORMAT DISK to wipe the hard drive clean',
            bn: 'ডিস্ক মুছে ফেলার জন্য FORMAT DISK চালানো'
          },
          {
            en: 'SHUTDOWN NOSAVE to turn off the server instantly',
            bn: 'সার্ভার বন্ধ করতে SHUTDOWN NOSAVE দেওয়া'
          },
          {
            en: 'PING 10000 times in a terminal window',
            bn: 'টার্মিনালে ১০০০০ বার PING লেখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'SLOWLOG identifies commands that exceeded execution thresholds.',
          bn: 'কোন কোয়েরি বেশি সময় নিচ্ছে তা স্লোলগ দিয়ে দেখার কথা ভাবুন।'
        },
        explanation: {
          en: 'Because Redis is single-threaded, a single poorly written command executing for 50 ms delays all other requests behind it in the queue.',
          bn: 'রেডিস একক থ্রেডে চলায় একটি ভুল ভারী কমান্ড ৫০ মিলিসেকেন্ড আটকে থাকলে পেছনের শত শত অনুরোধে দেরি হয়ে লেটেন্সি বাড়ে।'
        }
      },
      {
        id: 'q-caching-defense-in-depth',
        kind: 'mcq',
        topic: 'Concept of Defense-in-Depth in multi-tier caching',
        question: {
          en: 'What is the core architectural principle of Defense-in-Depth in enterprise caching?',
          bn: 'এন্টারপ্রাইজ ক্যাশিংয়ে ডিফেন্স-ইন-ডেপথ (Defense-in-Depth) এর মূল স্থাপত্য নীতি কী?'
        },
        options: [
          {
            en: 'Deploying multiple independent layers (Browser, CDN, Gateway, Redis) so that the failure or cold restart of one layer is absorbed by other layers',
            bn: 'একাধিক স্বাধীন স্তর (ব্রাউজার, সিডিএন, গেটওয়ে, রেডিস) রাখা যাতে যেকোনো একটি স্তর নষ্ট বা রিস্টার্ট হলেও বাকিগুলো পুরো সিস্টেমকে রক্ষা করতে পারে'
          },
          {
            en: 'Hiring security guards to protect the server room physically',
            bn: 'সার্ভার রুম পাহারায় দারোয়ান রাখা'
          },
          {
            en: 'Encrypting every cache key with five different passwords',
            bn: 'পাঁচটি পাসওয়ার্ড দিয়ে ক্যাশ লক করা'
          },
          {
            en: 'Running applications without any internet connectivity',
            bn: 'ইন্টারনেট সংযোগ ছাড়া অ্যাপ্লিকেশন চালানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multi-layer protection absorbing failures across tiers.',
          bn: 'এক স্তরের ব্যর্থতা অন্য স্তর দিয়ে সামলানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'If the Redis cluster is restarted, edge CDNs continue serving 70% of traffic, preventing the database from collapsing under the cold start.',
          bn: 'রেডিস রিস্টার্ট হলেও সামনের সিডিএন ৭০% ট্রাফিক ধরে রাখে, ফলে ডাটাবেস ধসে পড়ার কোনো ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'q-caching-defrag-safety',
        kind: 'mcq',
        topic: 'How active defragmentation functions safely in Redis',
        question: {
          en: 'How does Redis active defragmentation (activedefrag yes) reclaim memory without stopping production traffic?',
          bn: 'রেডিসের অ্যাক্টিভ ডিফ্র্যাগমেন্টেশন (activedefrag yes) কীভাবে প্রোডাকশন সার্ভিস বন্ধ না করেই মেমোরি পরিষ্কার করে?'
        },
        options: [
          {
            en: 'It runs incrementally in the background during spare CPU cycles, allocating contiguous memory pages and releasing fragmented gaps back to the OS',
            bn: 'এটি ব্যাকগ্রাউন্ডে অবসর সময়ে একটু একটু করে চলে, ছড়ানো ডেটাকে গুছিয়ে সুন্দরভাবে সাজায় এবং বাড়তি মেমোরি অপারেটিং সিস্টেমকে ফিরিয়ে দেয়'
          },
          {
            en: 'It deletes half of all user data randomly',
            bn: 'এটি ইচ্ছেমতো অর্ধেক ব্যবহারকারীর ডেটা মুছে ফেলে'
          },
          {
            en: 'It restarts the server machine every 15 minutes',
            bn: 'এটি প্রতি ১৫ মিনিটে সার্ভার রিস্টার্ট দেয়'
          },
          {
            en: 'It converts RAM memory into permanent solid gold',
            bn: 'এটি র‍্যামকে সলিড গোল্ডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Incremental background defragmentation during idle CPU cycles.',
          bn: 'সার্ভার বন্ধ না করে ব্যাকগ্রাউন্ডে মেমোরি গোছানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Active defragmentation operates gradually on a timer without blocking incoming client requests, safely shrinking resident memory (RSS).',
          bn: 'সার্ভিস চালু রেখেই এটি একটু একটু করে মেমোরি গুছিয়ে দেয়, ফলে কোনো ডাউনটাইম ছাড়াই ফ্র্যাগমেন্টেশন কমে আসে।'
        }
      }
    ]
  }
};
