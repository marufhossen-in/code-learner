import type { Lesson } from '../../../lib/types';

export const cacheSabbathLesson: Lesson = {
  slug: 'the-cache-sabbath',
  tech: 'system-design',
  title: {
    en: 'Caching Strategies & Memory Hierarchy — Cache-Aside, Eviction, and Stampedes',
    bn: 'ক্যাশিং স্ট্র্যাটেজি ও মেমরি হায়ারার্কি: ক্যাশ-অ্যাসাইড, ইভিকশন ও স্ট্যাম্পিড সুরক্ষা'
  },
  summary: {
    en: 'Caching is the cornerstone of sub-millisecond responsiveness in high-scale systems. In this lesson, you will master the hardware memory hierarchy and caching patterns: Cache-Aside (Lazy Loading), Write-Through, Write-Back (Write-Behind), and Refresh-Ahead. Analyze cache eviction algorithms including Least Recently Used (LRU), Least Frequently Used (LFU), and First-In First-Out (FIFO). Dissect critical failure modes such as Cache Stampedes (Thundering Herd), Cache Penetration, and Cache Avalanche. You will learn how probabilistic early expiration and distributed mutex locking shield primary databases. Implement an executable LRU cache simulation in TypeScript.',
    bn: 'উচ্চ ক্ষমতাসম্পন্ন সিস্টেমে সাব-মিলিসেকেন্ড রেসপন্স টাইম নিশ্চিত করতে ক্যাশিং এক অপরিহার্য কৌশল। এই পাঠে আপনি হার্ডওয়্যার মেমরি হায়ারার্কি এবং বিভিন্ন ক্যাশিং প্যাটার্ন শিখবেন: ক্যাশ-অ্যাসাইড (লেজি লোডিং), রাইট-থ্রু, রাইট-ব্যাক ও রিফ্রেশ-অ্যাহেড। লিস্ট রিসেন্টলি ইউজড (LRU), লিস্ট ফ্রিকোয়েন্টলি ইউজড (LFU) এবং FIFO ইভিকশন অ্যালগরিদমের কার্যপ্রণালী পর্যালোচনা করবেন। ক্যাশ স্ট্যাম্পিড (থান্ডারিং হার্ড), ক্যাশ পেনিট্রেশন এবং ক্যাশ অ্যাভালাঞ্চের মতো বিপজ্জনক জটিলতা এবং ডিস্ট্রিবিউটেড মিউটেক্সের মাধ্যমে ডেটাবেস রক্ষার বাস্তব সমাধান বিশ্লেষণ করা হয়েছে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর LRU ক্যাশ সিমুলেশন বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'memory-hierarchy-and-speed-gap',
      text: {
        en: 'The Memory Hierarchy: Why Nanoseconds Dictate System Scale',
        bn: 'মেমরি হায়ারার্কি: কেন ন্যানোসেকেন্ড সিস্টেমের স্কেল নিয়ন্ত্রণ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design high-throughput web applications, understanding the physical speed gap across storage tiers is essential.',
        bn: 'উচ্চগতির ওয়েব অ্যাপ্লিকেশন নকশা করার সময় বিভিন্ন ধরনের স্টোরেজ মাধ্যমের গতির বিশাল পার্থক্য অনুধাবন করা অপরিহার্য।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Fetching data from CPU L1 cache takes approximately 1 nanosecond, while main RAM takes 100 nanoseconds. Reading a random 4KB block from a solid-state disk takes 100 microseconds (100000 nanoseconds). Sending a network packet across continents takes 100 milliseconds (100000000 nanoseconds). The speed difference between RAM and disk is 1000x, and between RAM and inter-datacenter networks is 1000000x. Caching exploits locality: keeping the hot 20% of data in RAM prevents 80% of requests from hitting slow disks.',
        bn: 'সিপিইউ-এর L1 ক্যাশ থেকে তথ্য পেতে সময় লাগে প্রায় ১ ন্যানোসেকেন্ড, আর মূল র‍্যামে লাগে ১০০ ন্যানোসেকেন্ড। একটি দ্রুতগতির SSD ড্রাইভ থেকে ৪KB ব্লক পড়তে সময় লাগে ১০০ মাইক্রোসেকেন্ড (১০০০০০ ন্যানোসেকেন্ড)। আর এক মহাদেশ থেকে অন্য মহাদেশে নেটওয়ার্ক প্যাকেট পাঠাতে সময় লাগে ১০০ মিলিসেকেন্ড (১০০০০০০০০ ন্যানোসেকেন্ড)। র‍্যাম এবং ডিস্কের গতির পার্থক্য ১০০০ গুণ, আর র‍্যাম ও নেটওয়ার্কের মধ্যে পার্থক্য ১০০০০০০ গুণ। সর্বাধিক ব্যবহৃত ২০% ডেটা দ্রুতগতির র‍্যামে রেখে দিলে ৮০% রিকোয়েস্টের জন্য ধীরগতির ডিস্কে যাওয়ার প্রয়োজনই পড়ে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cache-aside-pattern',
          def: {
            en: 'Lazy loading pattern where the application reads from cache first; on a miss, it queries the database and populates the cache for future reads.',
            bn: 'এমন এক ক্যাশিং কৌশল যেখানে অ্যাপ প্রথমে ক্যাশে খোঁজে; ক্যাশে না পেলে ডেটাবেস থেকে পড়ে এনে ভবিষ্যতের জন্য ক্যাশে জমা রাখে।'
          }
        },
        {
          term: 'cache-stampede',
          def: {
            en: 'Also known as the Thundering Herd: when a popular cached key expires, thousands of concurrent requests miss simultaneously and crush the database.',
            bn: 'থান্ডারিং হার্ড নামেও পরিচিত: একটি জনপ্রিয় তথ্যের ক্যাশ মেয়াদোত্তীর্ণ হলে হাজার হাজার রিকোয়েস্ট একসাথে ডেটাবেসে আছড়ে পড়ে ডেটাবেসকে বিকল করে দেয়।'
          }
        },
        {
          term: 'least-recently-used',
          def: {
            en: 'A classic eviction policy that discards the item that has gone unaccessed for the longest period when cache memory capacity is exhausted.',
            bn: 'একটি ক্যাশ মোছার নিয়ম যা মেমরি পূর্ণ হয়ে গেলে সবচেয়ে দীর্ঘ সময় ধরে অব্যবহৃত থাকা তথ্যটি মুছে ফেলে নতুন তথ্যের জায়গা করে।'
          }
        },
        {
          term: 'cache-penetration',
          def: {
            en: 'A vulnerability where queries for non-existent keys bypass the cache and repeatedly strike the database, mitigated by caching nulls or Bloom filters.',
            bn: 'একটি দুর্বলতা যেখানে অস্তিত্বহীন ডেটার জন্য বারবার রিকোয়েস্ট পাঠিয়ে ক্যাশ এড়িয়ে ডেটাবেসের ক্ষতি করা হয়; ব্লুম ফিল্টার দিয়ে এটি ঠেকানো যায়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'caching-strategies-tradeoff-table',
      text: {
        en: 'Comparative Architecture: Caching Strategies and Write Patterns',
        bn: 'ক্যাশিং কৌশল ও রাইট প্যাটার্নের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Architects select caching strategies based on the acceptable tolerance for stale data, write latency overhead, and recovery complexity during infrastructure outages.',
        bn: 'সিস্টেমে পুরনো ডেটা কতটা গ্রহণযোগ্য, ডেটা লেখার বিলম্ব এবং সিস্টেম ডাউন হলে পুনরুদ্ধারের জটিলতা বিবেচনা করে সঠিক ক্যাশিং কৌশল বেছে নেওয়া হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Caching Strategy', bn: 'ক্যাশিং কৌশল' },
        { en: 'Read Flow & Miss Latency', bn: 'রিড প্রবাহ ও ক্যাশ মিস গতি' },
        { en: 'Write Flow & Consistency', bn: 'রাইট প্রবাহ ও ডেটার মিল' },
        { en: 'Tradeoffs & Vulnerabilities', bn: 'সুবিধা ও সম্ভাব্য ঝুঁকি' }
      ],
      rows: [
        [
          { en: 'Cache-Aside (Lazy)', bn: 'ক্যাশ-অ্যাসাইড (লেজি)' },
          { en: 'Sub-millisecond on hits; miss incurs 1 DB read + 1 cache write', bn: 'হিটে সাব-মিলিসেকেন্ড; মিস হলে ১টি ডেটাবেস ও ১টি ক্যাশ অপারেশন' },
          { en: 'Application writes to DB first, then invalidates or evicts cached key', bn: 'অ্যাপ প্রথমে ডেটাবেসে লেখে, তারপর ক্যাশের পুরনো কি মুছে দেয়' },
          { en: 'Cold cache penalty on startup; resilient if cache restarts', bn: 'শুরুতে ক্যাশ খালি থাকায় কিছুটা বিলম্ব; ক্যাশ রিস্টার্টে তথ্য হারায় না' }
        ],
        [
          { en: 'Write-Through', bn: 'রাইট-থ্রু' },
          { en: 'Consistently fast; cache always contains fresh written data', bn: 'সবসময় দ্রুত; ক্যাশে সবসময় সদ্য লিখিত তাজা তথ্য প্রস্তুত থাকে' },
          { en: 'Writes update cache and primary database synchronously in 1 step', bn: 'একই সাথে ক্যাশ এবং ডেটাবেস উভয়ের ভেতরেই ডেটা লিখে ১টি পদক্ষেপে নিশ্চিত করে' },
          { en: 'Higher write latency; pollutes cache with data that may never be read', bn: 'লেখার সময় কিছুটা বেশি লাগে; অপ্রয়োজনীয় ডেটায় ক্যাশ ভরে যেতে পারে' }
        ],
        [
          { en: 'Write-Back (Write-Behind)', bn: 'রাইট-ব্যাক' },
          { en: 'Fastest read and write speeds; operates entirely in-memory', bn: 'পড়া ও লেখা উভয় ক্ষেত্রেই দ্রুততম; পুরো কাজই মেমরিতে সম্পন্ন হয়' },
          { en: 'Writes modify cache instantly; async batch writes flush to DB later', bn: 'ক্যাশে সাথে সাথে লিখে দেয়; পরবর্তীতে ব্যাকগ্রাউন্ডে ডেটাবেসে জমায়' },
          { en: 'Data loss risk if cache crashes before flushing changes to disk', bn: 'ডেটাবেসে লেখার আগে ক্যাশ ক্র্যাশ করলে নতুন ডেটা হারানোর চরম ঝুঁকি' }
        ],
        [
          { en: 'Refresh-Ahead', bn: 'রিফ্রেশ-অ্যাহেড' },
          { en: 'Near-zero cache misses for predicted recurring hot keys', bn: 'জনপ্রিয় তথ্যের জন্য ক্যাশ মিস প্রায় শূন্য শতাংশে নামিয়ে আনে' },
          { en: 'Writes update DB; automated background worker refreshes key before TTL', bn: 'ডেটাবেসে লেখার পর ব্যাকগ্রাউন্ড ওয়ার্কার মেয়াদ শেষ হওয়ার আগেই ক্যাশ রিফ্রেশ করে' },
          { en: 'Complex to predict access patterns; wastes CPU if key becomes inactive', bn: 'কাজের ধরন অনুমান করা কঠিন; ব্যবহারকারী না আসলে মেমরি ও সিপিইউ অপচয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-lru-cache-code',
      text: {
        en: 'Executable LRU Cache Implementation and Hit Ratio Simulation',
        bn: 'LRU ক্যাশ এবং হিট রেশিও সিমুলেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a complete Least Recently Used (LRU) cache with a fixed capacity of 3 items, demonstrating item promotion, eviction of the oldest entry, and hit rate calculation.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৩টি আইটেম ধারণক্ষমতার একটি পূর্ণাঙ্গ LRU ক্যাশ বাস্তবায়ন করে। এতে ডেটা প্রমোশন, সবচেয়ে পুরনো তথ্য মুছে ফেলা (ইভিকশন) এবং ক্যাশ হিট রেট পরিমাপ দেখানো হয়েছে।'
      }
    },
    {
      type: 'code',
      code: `// Complete In-Memory LRU Cache Implementation

interface CacheMetrics {
  capacity: number;
  hits: number;
  misses: number;
  hitRatePercent: number;
  survivingKeys: string[];
}

class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, V>;
  private hits: number = 0;
  private misses: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<K, V>();
  }

  get(key: K): V | null {
    if (!this.cache.has(key)) {
      this.misses++;
      return null;
    }

    this.hits++;
    const value = this.cache.get(key)!;
    // Re-insert to mark as most recently used (Map iterates in insertion order)
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key in iteration order)
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey);
      }
    }
    this.cache.set(key, value);
  }

  getMetrics(): CacheMetrics {
    const totalRequests = this.hits + this.misses;
    const hitRatePercent =
      totalRequests > 0
        ? Number(((this.hits / totalRequests) * 100).toFixed(1))
        : 0;

    return {
      capacity: this.capacity,
      hits: this.hits,
      misses: this.misses,
      hitRatePercent,
      survivingKeys: Array.from(this.cache.keys()).map(String)
    };
  }
}

// Instantiate cache with capacity 3
const lru = new LRUCache<string, string>(3);

lru.put('user:101', 'Alice');
lru.put('user:102', 'Bob');
lru.put('user:103', 'Charlie');

// Execute access pattern
lru.get('user:101'); // Hit: user:101 promoted to newest
lru.put('user:104', 'Diana'); // Evicts user:102 (capacity reached, 102 was oldest)
lru.get('user:102'); // Miss: user:102 was evicted
lru.get('user:101'); // Hit: user:101 exists
lru.get('user:103'); // Hit: user:103 exists
lru.get('user:104'); // Hit: user:104 exists

const stats = lru.getMetrics();

console.log('LRU Cache capacity:', stats.capacity);
console.log('Total cache hits:', stats.hits);
console.log('Total cache misses:', stats.misses);
console.log('Calculated hit rate:', stats.hitRatePercent + '%');
console.log('Surviving keys in memory:', stats.survivingKeys.join(', '));

// prints: LRU Cache capacity: 3
// prints: Total cache hits: 4
// prints: Total cache misses: 1
// prints: Calculated hit rate: 80%
// prints: Surviving keys in memory: user:101, user:103, user:104`
    },
    {
      type: 'heading',
      id: 'cache-stampede-defense-and-locks',
      text: {
        en: 'Defending Against Cache Stampedes: Mutex Locking and Jitter',
        bn: 'ক্যাশ স্ট্যাম্পিড প্রতিরক্ষা: মিউটেক্স ও জিটার কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Cache Stampede (or Thundering Herd) occurs when a heavily accessed key expires while traffic is high. If 5000 concurrent requests arrive within 10 milliseconds, all 5000 see a cache miss and simultaneously query the database to regenerate the key, creating an instant outage. High-scale platforms defend against stampedes using two techniques. Mutex Locking lets the first thread acquire a lock to recompute the value while 4999 threads sleep briefly. In addition, TTL Jitter adds a random offset such as 300 seconds plus or minus 15 seconds so cached records do not expire at once.',
        bn: 'একটি ক্যাশ স্ট্যাম্পিড (বা থান্ডারিং হার্ড) ঘটে যখন কোনো জনপ্রিয় কি-এর মেয়াদের অবসান ঘটে তীব্র ট্র্যাফিকের মুহূর্তে। যদি ১০ মিলিসেকেন্ডের মধ্যে ৫০০০টি রিকোয়েস্ট আসে এবং সবাই দেখে ক্যাশ খালি, তবে ৫০০০টি রিকোয়েস্টই সরাসরি ডেটাবেসে গিয়ে আঘাত হানে। বড় প্ল্যাটফর্মগুলোতে এই বিপর্যয় ঠেকাতে ২টি কৌশল ব্যবহৃত হয়। প্রথমত, মিউটেক্স লকিং: প্রথম রিকোয়েস্টটি একটি লক নিয়ে ডেটাবেস থেকে ক্যাশ আপডেট করে, আর বাকি ৪৯৯৯টি রিকোয়েস্ট কয়েক মুহূর্ত অপেক্ষা করে। দ্বিতীয়ত, TTL জিটার: মেয়াদের সাথে ৩০০ সেকেন্ডের ওপর ১৫ সেকেন্ডের মতো এলোমেলো সময় যোগ করা, যাতে হাজার হাজার কি একই সাথে মেয়াদোত্তীর্ণ না হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Memory is 1000x faster than disk: Reading from RAM takes 100 nanoseconds versus 100 microseconds for solid-state disk access.',
          bn: 'মেমরির গতি ডিস্কের চেয়ে ১০০০ গুণ বেশি: র‍্যাম থেকে পড়তে লাগে ১০০ ন্যানোসেকেন্ড এবং সলিড-স্টেট ডিস্ক থেকে লাগে ১০০ মাইক্রোসেকেন্ড।'
        },
        {
          en: 'Use Cache-Aside for read-heavy resilience: Writes update the database and invalidate the cache key to guarantee fresh subsequent reads.',
          bn: 'রিড-প্রধান সিস্টেমের সুরক্ষায় ক্যাশ-অ্যাসাইড ব্যবহার করুন: ডেটাবেস আপডেট করে ক্যাশ মুছে দিলে পরবর্তী রিডে তাজা তথ্য নিশ্চিত হয়।'
        },
        {
          en: 'LRU evicts oldest unused keys: Keep memory bounded by discarding the item that has not been accessed for the longest period.',
          bn: 'LRU সবচেয়ে পুরনো অব্যবহৃত কি মুছে দেয়: ধারণক্ষমতা বজায় রাখতে দীর্ঘ সময় ব্যবহৃত না হওয়া আইটেমটি মেমরি থেকে সরিয়ে দিন।'
        },
        {
          en: 'Prevent cache stampedes with mutexes and jitter: Spread TTL expirations randomly to protect databases from simultaneous surges.',
          bn: 'মিউটেক্স ও জিটার দিয়ে ক্যাশ স্ট্যাম্পিড ঠেকান: ডেটাবেস রক্ষা করতে TTL-এর মেয়াদে সামান্য এলোমেলো সময় যোগ করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-queue-patience',
    tech: 'system-design',
    title: {
      en: 'Message Queues & Asynchronous Processing — Event Buffering, Backpressure, and Idempotency',
      bn: 'মেসেজ কিউ ও অ্যাসিঙ্ক্রোনাস প্রসেসিং: ব্যাকপ্রেশার ও আইডেমপোটেন্সি'
    }
  },
  exercises: [
    {
      id: 'cache-ex1',
      kind: 'mcq',
      topic: 'cache-aside-lifecycle-flow',
      question: {
        en: 'In the Cache-Aside (Lazy Loading) pattern, what exact sequence of steps occurs when an application receives a read request for user profile data?',
        bn: 'ক্যাশ-অ্যাসাইড (লেজি লোডিং) প্যাটার্নে যখন কোনো অ্যাপ ব্যবহারকারীর প্রোফাইল পড়ার রিকোয়েস্ট পায়, তখন কোন সঠিক ক্রমে কাজগুলো সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'The app checks cache first; if present (hit), it returns immediately; if absent (miss), it queries the database, writes the result to the cache, and returns the response',
          bn: 'অ্যাপ প্রথমে ক্যাশ পরীক্ষা করে; পাওয়া গেলে সাথে সাথে ফেরত দেয়; না পাওয়া গেলে ডেটাবেস থেকে পড়ে এনে ক্যাশে লিখে তারপর ব্যবহারকারীকে ফেরত পাঠায়'
        },
        {
          en: 'The app deletes the database table and creates a new one on every read',
          bn: 'অ্যাপ প্রতিটি রিডে মূল ডেটাবেস টেবিল মুছে ফেলে নতুন টেবিল তৈরি করে'
        },
        {
          en: 'The app queries all internet computers simultaneously',
          bn: 'অ্যাপ ইন্টারনেটের সব কম্পিউটারে একসাথে রিকোয়েস্ট পাঠায়'
        },
        {
          en: 'Cache-aside was declared obsolete by international standards bodies in 2022',
          bn: 'কারণ ২০২২ সালে আন্তর্জাতিক স্ট্যান্ডার্ড কমিটি ক্যাশ-অ্যাসাইড বাতিল ঘোষণা করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Check cache -> Miss -> Read DB -> Populate cache -> Return data.',
        bn: 'ক্যাশে খোঁজা -> না পেলে ডেটাবেস থেকে পড়া -> ক্যাশে রাখা -> ডেটা ফেরত দেওয়া।'
      },
      explanation: {
        en: 'Cache-aside populates the cache on-demand only for data that is actively requested, keeping memory consumption lean.',
        bn: 'ক্যাশ-অ্যাসাইড কেবল সক্রিয়ভাবে চাওয়া তথ্যের জন্যই মেমরি ব্যবহার করে, ফলে ক্যাশে অপ্রয়োজনীয় ডেটার ভিড় জমে না।'
      }
    },
    {
      id: 'cache-ex2',
      kind: 'mcq',
      topic: 'write-back-caching-danger',
      question: {
        en: 'While Write-Back (Write-Behind) caching offers the highest write performance, what critical architectural risk does it introduce?',
        bn: 'রাইট-ব্যাক ক্যাশিং সর্বোচ্চ লেখার গতি দিলেও এটি কোন মারাত্মক আর্কিটেকচারাল ঝুঁকি তৈরি করে?'
      },
      options: [
        {
          en: 'Risk of permanent data loss: if the in-memory cache server crashes before asynchronously flushing dirty updates to persistent disk storage, committed writes vanish',
          bn: 'স্থায়ীভাবে ডেটা হারানোর মারাত্মক ঝুঁকি: মেমরির ডেটা ডিস্কে লেখার আগেই ক্যাশ সার্ভার ক্র্যাশ করলে নতুন লেখা সমস্ত তথ্য চিরতরে হারিয়ে যায়'
        },
        {
          en: 'Write-back caching doubles internet bandwidth costs for end users',
          bn: 'রাইট-ব্যাক ক্যাশিং ব্যবহারকারীদের ইন্টারনেটের খরচ দ্বিগুণ করে দেয়'
        },
        {
          en: 'Because write-back caching permanently locks the computer keyboard',
          bn: 'কারণ রাইট-ব্যাক ক্যাশিং কম্পিউটারের কিবোর্ড লক করে দেয়'
        },
        {
          en: 'Write-back caching prevents servers from displaying text in English',
          bn: 'রাইট-ব্যাক ক্যাশিং সার্ভারে ইংরেজি লেখা প্রদর্শনে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Volatile RAM loses data on power loss. If writes only live in RAM, an outage equals lost data.',
        bn: 'র‍্যামে থাকা তথ্য বিদ্যুৎ চলে গেলে মুছে যায়; ডিস্কে লেখার আগেই ক্র্যাশ হলে ডেটা ফিরে পাওয়া অসম্ভব।'
      },
      explanation: {
        en: 'Write-back trades durability for ultra-low latency; it requires battery-backed NVRAM or persistent logs to avoid catastrophic data loss.',
        bn: 'রাইট-ব্যাক অতি উচ্চ গতির বিনিময়ে স্থায়িত্বের ঝুঁকি নেয়; নিরাপদ থাকতে ব্যাকআপ পাওয়ার বা বিশেষ মেমরি প্রয়োজন হয়।'
      }
    },
    {
      id: 'cache-ex3',
      kind: 'mcq',
      topic: 'cache-stampede-thundering-herd-mitigation',
      question: {
        en: 'How does a Distributed Mutex Lock protect the primary database during a Cache Stampede when a highly popular key expires?',
        bn: 'একটি জনপ্রিয় কি মেয়াদোত্তীর্ণ হওয়ার পর ক্যাশ স্ট্যাম্পিডের সময় ডিস্ট্রিবিউটেড মিউটেক্স লক কীভাবে মূল ডেটাবেসকে রক্ষা করে?'
      },
      options: [
        {
          en: 'Only the single thread that acquires the lock is permitted to query the database and refresh the cache; all other concurrent requests wait briefly or serve stale data until the lock releases',
          bn: 'লক পাওয়া একটিমাত্র থ্রেডকে ডেটাবেস থেকে তথ্য এনে ক্যাশ তাজা করার অনুমতি দেওয়া হয়; বাকি সব রিকোয়েস্ট কয়েক মুহূর্ত অপেক্ষা করে অথবা সাময়িকভাবে পুরনো তথ্য গ্রহণ করে'
        },
        {
          en: 'The mutex lock turns off all database network switches',
          bn: 'মিউটেক্স লক ডেটাবেসের সমস্ত নেটওয়ার্ক সুইচ বন্ধ করে দেয়'
        },
        {
          en: 'Because mutex locks format database hard drives every 10 seconds',
          bn: 'কারণ মিউটেক্স লক প্রতি ১০ সেকেন্ড পরপর হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'The lock permanently bans the client IP addresses from the website',
          bn: 'লকটি ওই ক্লায়েন্ট আইপিগুলোকে ওয়েবসাইট থেকে স্থায়ীভাবে নিষিদ্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Instead of 10,000 queries hitting the database at once, only 1 query goes through while 9,999 wait.',
        bn: '১০,০০০ রিকোয়েস্ট একসাথে ডেটাবেসে না গিয়ে মাত্র ১টি যাবে, বাকি ৯,৯৯৯টি অপেক্ষা করবে।'
      },
      explanation: {
        en: 'Mutex locking serializes the database rebuild for hot keys, converting an overwhelming traffic surge into a single controlled query.',
        bn: 'মিউটেক্স লক হাজার হাজার রিকোয়েস্টের ভিড়কে একটিমাত্র নিরাপদ কোয়েরিতে রূপান্তর করে ডেটাবেসকে নিশ্চিত ক্র্যাশ থেকে বাঁচায়।'
      }
    },
    {
      id: 'cache-ex4',
      kind: 'mcq',
      topic: 'ttl-jitter-avalanche-defense',
      question: {
        en: 'Why do production caching layers add randomized "TTL Jitter" (e.g. setting expiration to 3600 seconds plus a random 1 to 60 seconds) instead of a fixed expiration time?',
        bn: 'প্রোডাকশন ক্যাশিং সিস্টেমে নির্দিষ্ট মেয়াদের বদলে কেন সামান্য এলোমেলো সময় বা "TTL জিটার" (যেমন ৩৬০০ সেকেন্ডের সাথে ১ থেকে ৬০ সেকেন্ড এলোমেলো যোগ করা) ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'To prevent Cache Avalanche: spreading expiration timestamps prevents thousands of keys written in the same batch from expiring simultaneously and flooding the database',
          bn: 'ক্যাশ অ্যাভালাঞ্চ (ধস) প্রতিরোধ করতে: বিভিন্ন কি-এর মেয়াদের সময় সামান্য আলাদা করে দিলে একসাথে লাখ লাখ কি মেয়াদোত্তীর্ণ হয়ে ডেটাবেসের ওপর চাপ তৈরি করতে পারে না'
        },
        {
          en: 'TTL jitter reduces server electrical consumption by 80 percent',
          bn: 'TTL জিটার সার্ভারের বিদ্যুৎ খরচ ৮০ শতাংশ কমিয়ে আনে'
        },
        {
          en: 'Because fixed TTLs are strictly prohibited by internet browser standards',
          bn: 'কারণ ব্রাউজার স্ট্যান্ডার্ডে নির্দিষ্ট TTL ব্যবহার পুরোপুরি নিষিদ্ধ'
        },
        {
          en: 'Jitter increases computer monitor refresh rates automatically',
          bn: 'জিটার নিজে থেকেই মনিটরের রিফ্রেশ রেট বৃদ্ধি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If 100000 keys expire at the exact same second, the database experiences an avalanche.',
        bn: 'যদি ১০০০০০ কি একই সেকেন্ডে মেয়াদোত্তীর্ণ হয়, তবে ডেটাবেসে হঠাৎ মারাত্মক ধস নামে।'
      },
      explanation: {
        en: 'Jitter de-synchronizes expiration events, smoothing out cache miss traffic into a manageable trickle over time.',
        bn: 'জিটার মেয়াদের সমাপ্তিকে ভিন্ন ভিন্ন সেকেন্ডে ছড়িয়ে দেয়, ফলে ডেটাবেসে কোনো আকস্মিক ট্র্যাফিক ধাক্কা তৈরি হয় না।'
      }
    }
  ],
  quiz: {
    id: 'cache-sabbath-quiz',
    title: {
      en: 'Caching Architecture, Eviction Policies, and Resilience Quiz',
      bn: 'ক্যাশিং আর্কিটেকচার, ইভিকশন পলিসি ও স্থিতিস্থাপকতা কুইজ'
    },
    questions: [
      {
        id: 'csq-q1',
        kind: 'mcq',
        topic: 'cache-eviction-lru-vs-lfu',
        question: {
          en: 'What is the fundamental difference between Least Recently Used (LRU) and Least Frequently Used (LFU) cache eviction algorithms?',
          bn: 'লিস্ট রিসেন্টলি ইউজড (LRU) এবং লিস্ট ফ্রিকোয়েন্টলি ইউজড (LFU) ক্যাশ ইভিকশন অ্যালগরিদমের মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'LRU evicts the item that has not been accessed for the longest time interval, whereas LFU evicts the item that has accumulated the lowest total access count',
            bn: 'LRU সেই আইটেমটি মুছে ফেলে যা সবচেয়ে দীর্ঘ সময় ধরে পড়া হয়নি, আর LFU সেই আইটেমটি মোছে যা সবচেয়ে কম সংখ্যক বার অ্যাক্সেস করা হয়েছে'
          },
          {
            en: 'LRU only runs on Linux servers while LFU only runs on Windows computers',
            bn: 'LRU কেবল লিনাক্স সার্ভারে চলে আর LFU কেবল উইন্ডোজ কম্পিউটারে চলে'
          },
          {
            en: 'LFU permanently erases client hard drives upon memory exhaustion',
            bn: 'মেমরি শেষ হয়ে গেলে LFU ক্লায়েন্টের হার্ড ড্রাইভ পুরোপুরি মুছে দেয়'
          },
          {
            en: 'Because LRU was replaced by international law in 2023',
            bn: 'কারণ ২০২৩ সালে আন্তর্জাতিক আইন দ্বারা LRU বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recency (time since last access) vs Frequency (total count of accesses).',
          bn: 'সম্প্রতি কতক্ষণ আগে ব্যবহৃত হয়েছে (LRU) বনাম মোট কতবার ব্যবহৃত হয়েছে (LFU)।'
        },
        explanation: {
          en: 'LRU prioritizes temporal locality; LFU prioritizes overall popularity over time.',
          bn: 'LRU সাম্প্রতিক ব্যবহারের ওপর গুরুত্ব দেয়, আর LFU দীর্ঘসময়ের জনপ্রিয়তার ওপর নির্ভর করে।'
        }
      },
      {
        id: 'csq-q2',
        kind: 'mcq',
        topic: 'bloom-filter-cache-penetration',
        question: {
          en: 'How does a Bloom filter effectively mitigate Cache Penetration attacks where malicious actors query millions of non-existent user IDs?',
          bn: 'দুর্বৃত্তরা যখন অস্তিত্বহীন লাখ লাখ ইউজার আইডির রিকোয়েস্ট পাঠিয়ে আক্রমণ চালায়, তখন ব্লুম ফিল্টার কীভাবে ক্যাশ পেনিট্রেশন প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'A Bloom filter provides a fast in-memory probabilistic check: if it says an ID does NOT exist, the app rejects the query immediately with zero false negatives, never touching the database',
            bn: 'ব্লুম ফিল্টার মেমরিতে একটি দ্রুত সম্ভাব্যতা পরীক্ষা চালায়: ফিল্টার যদি বলে আইডিটি নেই, তবে অ্যাপ সাথে সাথে রিকোয়েস্টটি নাকচ করে দেয় এবং ডেটাবেসে কোনো কোয়েরিই পাঠায় না'
          },
          {
            en: 'The Bloom filter shuts down server electricity to prevent overheating',
            bn: 'ব্লুম ফিল্টার সার্ভার অতিরিক্ত গরম হওয়া রোধে বিদ্যুৎ সংযোগ বন্ধ করে দেয়'
          },
          {
            en: 'Because Bloom filters compress all user passwords into binary zeros',
            bn: 'কারণ ব্লুম ফিল্টার সব পাসওয়ার্ড শূন্যে রূপান্তর করে দেয়'
          },
          {
            en: 'A Bloom filter sends an email alert to every user on every request',
            bn: 'ব্লুম ফিল্টার প্রতিটি রিকোয়েস্টে সকল ব্যবহারকারীকে ইমেইল পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a Bloom filter says an element is not in the set, it is 100% definitely not in the set.',
          bn: 'ব্লুম ফিল্টার যদি বলে কোনো তথ্য নেই, তবে ১০০% নিশ্চিতভাবেই তা সিস্টেমে অনুপস্থিত।'
        },
        explanation: {
          en: 'Bloom filters exhibit zero false negatives: non-existent keys are definitively identified and blocked before reaching the database.',
          bn: 'ব্লুম ফিল্টারে কোনো ফলস নেগেটিভ নেই; অস্তিত্বহীন কি শনাক্ত করে ডেটাবেসে যাওয়া আগেই আটকে দেওয়া হয়।'
        }
      },
      {
        id: 'csq-q3',
        kind: 'mcq',
        topic: 'cache-invalidation-write-race',
        question: {
          en: 'In high-concurrency systems using Cache-Aside, why is evicting (deleting) a cached key upon database update considered safer than actively updating the cache key with new data?',
          bn: 'ক্যাশ-অ্যাসাইড ব্যবস্থায় ডেটাবেস আপডেটের সময় ক্যাশের তথ্য নিজে আপডেট করার চেয়ে ক্যাশের কি-টি পুরোপুরি মুছে (ডিলিট) দেওয়া কেন বেশি নিরাপদ?'
        },
        options: [
          {
            en: 'Deleting avoids write-race conditions where concurrent updates arrive out-of-order in the cache, leaving stale overwritten data permanently stranded in memory',
            bn: 'মুছে দিলে লেখার প্রতিযোগিতামূলক গোলযোগ (race condition) এড়ানো যায়; সমান্তরাল আপডেটের সময় উল্টাপাল্টা ক্রমে ডেটা পৌঁছে ক্যাশে পুরনো তথ্য স্থায়ী হয়ে যাওয়ার ঝুঁকি থাকে না'
          },
          {
            en: 'Deleting cache keys reduces server electricity consumption by 50 percent',
            bn: 'ক্যাশ কি মুছে দিলে সার্ভারের বিদ্যুৎ খরচ ৫০ শতাংশ কমে যায়'
          },
          {
            en: 'Because updating cache keys formats the database storage hard drives',
            bn: 'কারণ ক্যাশ কি আপডেট করলে হার্ড ড্রাইভ ফরম্যাট হয়ে যায়'
          },
          {
            en: 'Cache updates were declared illegal under software patent treaties in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক পেটেন্ট আইনে ক্যাশ আপডেট নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'If Write A happens then Write B, but Cache receives B then A, the cache holds stale data A forever. Eviction forces a fresh read from DB.',
          bn: 'যদি দুটি রাইট উল্টো ক্রমে ক্যাশে পৌঁছায়, তবে ক্যাশে চিরতরে ভুল তথ্য থেকে যেতে পারে; ডিলিট করে দিলে পরবর্তী রিডে ডেটাবেস থেকে সঠিক ডেটা আসে।'
        },
        explanation: {
          en: 'Cache invalidation forces subsequent reads to reload the canonical value from the database, eliminating concurrent write-order hazards.',
          bn: 'ক্যাশ মুছে দিলে পরবর্তী রিড বাধ্য হয়ে ডেটাবেস থেকে সঠিক মানটি পড়ে নিয়ে আসে, ফলে কনকারেন্ট রাইটের অসঙ্গতি দূর হয়।'
        }
      },
      {
        id: 'csq-q4',
        kind: 'mcq',
        topic: 'redis-single-threaded-concurrency',
        question: {
          en: 'Why is Redis able to process over 100000 operations per second on a single CPU core without experiencing database thread lock contention?',
          bn: 'রেডিস (Redis) কোনো ডেটাবেস থ্রেড লক জটিলতা ছাড়াই একটিমাত্র সিপিইউ কোরে প্রতি সেকেন্ডে ১০০০০০ এর বেশি অপারেশন কীভাবে সম্পন্ন করতে পারে?'
        },
        options: [
          {
            en: 'Redis stores all data in fast RAM and uses a non-blocking I/O event loop (epoll/kqueue) that executes commands sequentially without thread locking or context-switching overhead',
            bn: 'রেডিস সমস্ত ডেটা দ্রুতগতির র‍্যামে রাখে এবং নন-ব্লকিং ইভেন্ট লুপ (epoll/kqueue) ব্যবহার করে একটার পর একটা কমান্ড অতি দ্রুত চালায়, ফলে কোনো থ্রেড লক বা কনটেক্সট সুইচের বাড়তি ঝামেলা থাকে না'
          },
          {
            en: 'Redis runs on nuclear-powered hardware processors',
            bn: 'রেডিস পারমাণবিক শক্তিসম্পন্ন প্রসেসরে চলে'
          },
          {
            en: 'Because Redis compresses all data into zero bits of binary memory',
            bn: 'কারণ রেডিস সমস্ত ডেটাকে শূন্য বিটে সংকুচিত করে'
          },
          {
            en: 'Redis executes queries inside client web browsers rather than on servers',
            bn: 'রেডিস সার্ভারে না চলে ব্যবহারকারীর ওয়েব ব্রাউজারে কোয়েরি চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In-memory execution + non-blocking multiplexed event loop = high throughput without lock contention.',
          bn: 'র‍্যামের অতি উচ্চ গতি এবং নন-ব্লকিং সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ থ্রেড লকিংয়ের ঝামেলা পুরোপুরি দূর করে।'
        },
        explanation: {
          en: 'Operating purely in-memory eliminates disk waits, and the single-threaded event loop eliminates expensive multi-threaded lock synchronization.',
          bn: 'ডিস্কহীন মেমরি অপারেশন এবং সিঙ্গেল-থ্রেডেড লুপ থ্রেড সিনক্রোনাইজেশনের চাপ পরিহার করে অসাধারণ থ্রুপুট দেয়।'
        }
      }
    ]
  }
};
