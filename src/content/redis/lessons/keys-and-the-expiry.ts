import type { Lesson } from '../../../lib/types';

export const KeysAndTheExpiryLesson: Lesson = {
  slug: 'keys-and-the-expiry',
  tech: 'redis',
  title: {
    en: 'Redis Beginner Guide: In-Memory Engine, Keys & Expiry',
    bn: 'Redis বিগিনার গাইড: ইন-মেমরি ইঞ্জিন, কি ও মেয়াদের নিয়ম'
  },
  summary: {
    en: 'Master Redis fundamentals and in-memory key lifecycles across 10 structured topics. Understand why RAM storage delivers sub-millisecond latencies. Learn how the single-threaded event loop leverages I/O multiplexing. Structure key namespaces using colon conventions. Manage key lifecycles with EXISTS, TYPE, DEL, and asynchronous UNLINK. Implement precise expiration with EXPIRE, TTL, and PERSIST. Compare active sampling with passive expiry. Replace blocking KEYS scans with cursor-based SCAN. Configure maxmemory eviction policies like allkeys-lru, and monitor memory fragmentation.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Redis ফান্ডামেন্টালস এবং ইন-মেমরি কি জীবনচক্র আয়ত্ত করুন। র‍্যাম স্টোরেজ কেন সাব-মিলিসেকেন্ড গতি দেয় তা জানা যায়। I/O মাল্টিপ্লেক্সিং সমৃদ্ধ সিঙ্গেল-থ্রেডেড ইভেন্ট লুপের কৌশল শিখুন। কোলন কনভেনশন দিয়ে কি-র নেইমস্পেস সাজাতে পারেন। EXISTS, TYPE, DEL এবং অ্যাসিনক্রোনাস UNLINK দিয়ে কি পরিচালনা পদ্ধতি দেখানো হয়েছে। EXPIRE, TTL ও PERSIST দিয়ে নির্দিষ্ট মেয়াদ নির্ধারণ করা যায়। অ্যাক্টিভ ও প্যাসিভ এক্সপায়ারির তুলনা বুঝুন। ব্লকিং KEYS কমান্ড বাদ দিয়ে কার্সরভিত্তিক SCAN ব্যবহার করতে হয়। allkeys-lru এর মতো মেমরি এভিকশন নীতি কনফিগারেশন এবং ফ্র্যাগমেন্টেশন পর্যবেক্ষণ কৌশল রপ্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'strings-and-the-hash',
    tech: 'redis',
    title: {
      en: 'Redis Data Structures: Strings, Bitmaps & Hashes',
      bn: 'Redis ডেটা স্ট্রাকচার: স্ট্রিং, বিটম্যাপ ও হ্যাশ'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. In-Memory Data Model vs Traditional Disk Databases', bn: '১. ইন-মেমরি ডেটা মডেল বনাম ঐতিহ্যবাহী ডিস্ক ডাটাবেস' } },
    {
      type: 'para',
      text: {
        en: 'When you build high-performance web backends, traditional disk-based databases like PostgreSQL or MySQL must navigate physical disk seek latencies measuring between 1 and 10 milliseconds. Redis (Remote Dictionary Server) operates entirely within high-speed RAM, serving read and write requests in microseconds (under 1 ms).',
        bn: 'উচ্চগতির ওয়েব ব্যাকএন্ড তৈরির সময় ঐতিহ্যবাহী ডিস্কভিত্তিক ডাটাবেস যেমন PostgreSQL বা MySQL-কে মেকানিক্যাল ডিস্ক বা এসএসডি থেকে ডেটা পড়তে ১ থেকে ১০ মিলিসেকেন্ড সময় নিতে হয়। বিপরীতে Redis (রিমোট ডিকশনারি সার্ভার) সম্পূর্ণভাবে দ্রুতগতির র‍্যামের (RAM) ওপর কাজ করে, যার ফলে প্রতিটি রিড ও রাইট রিকোয়েস্ট মাইক্রোসেকেন্ডে (১ মিলিসেকেন্ডেরও কম সময়ে) সম্পন্ন হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `STORAGE LATENCY HIERARCHY:
+-------------------+--------------------+------------------------+
| Storage Medium    | Access Latency     | Relative Speed         |
+-------------------+--------------------+------------------------+
| CPU L1/L2 Cache   | ~1 nanosecond      | 1,000,000x faster      |
| RAM (Redis Store) | ~100 nanoseconds   | 100,000x faster        |
| NVMe Flash SSD    | ~100 microseconds  | 100x slower than RAM   |
| Mechanical HDD    | ~10 milliseconds   | 100,000x slower than RAM|
+-------------------+--------------------+------------------------+`,
      caption: {
        en: 'In-memory storage eliminates physical disk seek delays, unlocking massive throughput.',
        bn: 'ইন-মেমরি স্টোরেজ ডিস্কের ধীরগতি দূর করে বিদ্যুৎগতির ডেটা আদান-প্রদান নিশ্চিত করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Redis Single-Threaded I/O Multiplexing Event Loop', bn: 'Redis সিঙ্গেল-থ্রেডেড I/O মাল্টিপ্লেক্সিং ইভেন্ট লুপ' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis single-threaded event loop and socket multiplexing">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="150" height="100" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
<text x="75" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Concurrent Clients</text>
<text x="75" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Socket 1: GET user:1</text>
<text x="75" y="90" font-size="10" fill="#cbd5e1" text-anchor="middle">Socket 2: SET cart:9</text>
<text x="75" y="110" font-size="9" fill="#94a3b8" text-anchor="middle">10,000+ Sockets</text>

<path d="M155,70 L215,70" stroke="#38bdf8" stroke-width="2"/>
<text x="185" y="62" font-size="9" fill="#38bdf8" text-anchor="middle">epoll</text>

<rect x="220" y="20" width="200" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="320" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">I/O Multiplexer</text>
<text x="320" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Non-blocking Socket Poll</text>
<text x="320" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Dispatches Ready Events</text>

<path d="M425,70 L485,70" stroke="#10b981" stroke-width="2"/>

<rect x="490" y="20" width="160" height="100" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="570" y="45" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Event Loop</text>
<text x="570" y="70" font-size="10" fill="#4ade80" text-anchor="middle">Single Thread Execution</text>
<text x="570" y="90" font-size="9" fill="#cbd5e1" text-anchor="middle">Zero Mutex Locks</text>
<text x="570" y="105" font-size="9" fill="#94a3b8" text-anchor="middle">Pure RAM Mutator</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Single-Threaded Event Loop & I/O Multiplexing', bn: '২. সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ ও I/O মাল্টিপ্লেক্সিং' } },
    {
      type: 'para',
      text: {
        en: 'A common misconception is that high concurrency requires thousands of operating system threads. Redis processes all data commands sequentially on a single core using non-blocking I/O multiplexing (epoll on Linux, kqueue on macOS). By eliminating thread switching and lock contention, Redis achieves over 100000 operations per second effortlessly.',
        bn: 'অনেকে মনে করেন বেশি ট্রাফিক সামলাতে হাজার হাজার অপারেটিং সিস্টেম থ্রেড লাগে। কিন্তু Redis একটিমাত্র কোরে নন-ব্লকিং I/O মাল্টিপ্লেক্সিং (লিনাক্সে epoll, ম্যাক-এ kqueue) ব্যবহার করে ধারাবাহিক সব কমান্ড সম্পন্ন করে। থ্রেড সুইচিং ও মিউটেক্স লকিংয়ের ঝামেলা না থাকায় Redis খুব সহজেই প্রতি সেকেন্ডে ১০০০০০ এর বেশি অপারেশন সম্পন্ন করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `WHY SINGLE-THREADED REDIS RUNS SO FAST:
1. Pure Memory Access : Reads and updates happen directly in CPU-adjacent RAM.
2. Zero Thread Locks  : No mutexes, condition variables, or deadlock races.
3. Zero Context Switch: CPU cores never waste cycles saving thread registers.
4. Non-Blocking I/O   : The epoll selector notifies the loop only when sockets have data.`,
      caption: {
        en: 'Single-threaded memory execution guarantees atomic command ordering without locking overhead.',
        bn: 'একক থ্রেডে মেমরি আপডেট হওয়ায় কোনো লকিং ছাড়াই প্রতিটি কাজ অবিভাজ্য ও সুরক্ষিত থাকে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Key Naming Conventions & Hierarchical Namespaces', bn: '৩. কি নামকরণের নিয়ম ও হায়ারার্কিক্যাল নেইমস্পেস' } },
    {
      type: 'para',
      text: {
        en: 'In Redis, keys are binary-safe strings that can span up to 512 megabytes. Industry standards structure keys into colon-delimited hierarchical namespaces: object-type:id:field. For instance, user:1042:profile or order:8819:items immediately convey entity type and relationship boundaries.',
        bn: 'Redis-এ কি হলো বাইনারি-সেফ স্ট্রিং যা সর্বোচ্চ ৫১২ মেগাবাইট পর্যন্ত হতে পারে। ইন্ডাস্ট্রির সেরা নিয়ম অনুযায়ী কোলন (:) ব্যবহার করে হায়ারার্কিক্যাল নেইমস্পেস তৈরি করা হয়: object-type:id:field। যেমন user:1042:profile বা order:8819:items দেখলে নিমিষেই বোঝা যায় এটি কোন ব্যবহারকারী বা অর্ডারের ডেটা।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard colon-delimited key names:
SET user:1042:email "tariq@example.com"
SET user:1042:status "active"
SET tenant:5:org:99:settings "{\\"theme\\":\\"dark\\"}"

# Inspecting key metadata:
TYPE user:1042:email
# Output: string

EXISTS user:1042:email
# Output: (integer) 1`,
      caption: {
        en: 'Colon notation organizes unstructured keys into logical hierarchical domains.',
        bn: 'কোলন নোটেশন ফ্ল্যাট কি-গুলোকে সহজে বোধগম্য ও সুসংগঠিত গ্রুপে বিন্যস্ত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Key Lifecycle Operations: EXISTS, TYPE, DEL vs UNLINK', bn: '৪. কি জীবনচক্র পরিচালনা: EXISTS, TYPE, DEL বনাম UNLINK' } },
    {
      type: 'para',
      text: {
        en: 'Checking key existence is performed using EXISTS, while TYPE returns the underlying data structure. When deleting large structures (like a set with 500000 elements), the synchronous DEL command blocks the single-threaded engine while reclaiming memory. The non-blocking UNLINK command unlinks the key in O(1) time and deallocates memory in a background thread.',
        bn: 'কোনো কি বিদ্যমান কিনা তা EXISTS দিয়ে জানা যায়, আর TYPE দেখায় ডেটাটি কোন স্ট্রাকচারের। যখন কোনো বিশাল ডেটা মুছতে হয় (যেমন ৫০০০০০ উপাদানের একটি সেট), তখন সিঙ্ক্রোনাস DEL কমান্ড মেমরি খালি করার সময় ইভেন্ট লুপকে আটকে দেয়। কিন্তু নন-ব্লকিং UNLINK কমান্ড O(1) সময়ে কি বিচ্ছিন্ন করে ব্যাকগ্রাউন্ড থ্রেডে মেমরি মুক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Synchronous deletion (Blocks main thread if key holds millions of items):
DEL massive_user_set

# Asynchronous non-blocking deletion (Safe for production clusters):
UNLINK massive_user_set
# Output: (integer) 1 (Unlinked in 1 microsecond; memory freed in background!)`,
      caption: {
        en: 'Always prefer UNLINK over DEL for large keys in production to avoid event loop stalls.',
        bn: 'প্রোডাকশনে সার্ভার আটকে যাওয়া এড়াতে বড় কি মুছতে DEL-এর বদলে সর্বদা UNLINK ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Time-To-Live (TTL) & Expiry Mechanics: EXPIRE & PERSIST', bn: '৫. টাইম-টু-লাইভ (TTL) ও মেয়াদের নিয়ম: EXPIRE ও PERSIST' } },
    {
      type: 'para',
      text: {
        en: 'Redis allows attaching an automatic expiration timestamp to any key. The EXPIRE command assigns a TTL in seconds, while PEXPIRE configures millisecond precision. The TTL command queries remaining lifetime (-1 indicates a persistent key with no expiration, while -2 indicates the key does not exist). PERSIST removes the timeout, making the key permanent.',
        bn: 'Redis-এ যেকোনো কি-তে স্বয়ংক্রিয় মেয়াদ নির্ধারণ করে দেওয়া যায়। EXPIRE কমান্ড সেকেন্ডে মেয়াদ ঠিক করে, আর PEXPIRE মিলিসেকেন্ডের নিখুঁত মান দেয়। TTL কমান্ড অবশিষ্ট সময় জানায় (-১ মানে কোনো মেয়াদ নেই বা চিরস্থায়ী, আর -২ মানে কিটির অস্তিত্ব নেই)। PERSIST কমান্ড মেয়াদের সময়সীমা তুলে দিয়ে কি-কে পুনরায় স্থায়ী করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Setting a cache token with 60 seconds lifetime:
SET session:auth_token_99 "valid" EX 60

# Checking remaining lifetime in seconds:
TTL session:auth_token_99
# Output: (integer) 58

# Removing the timeout and making it permanent:
PERSIST session:auth_token_99
# Output: (integer) 1

TTL session:auth_token_99
# Output: (integer) -1 (Persistent key)`,
      caption: {
        en: 'TTL values provide deterministic ephemeral lifecycles for cache tokens and sessions.',
        bn: 'TTL মেকানিজম ক্যাশ টোকেন ও সেশনের নির্দিষ্ট মেয়াদ স্বয়ংক্রিয়ভাবে কার্যকর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Active vs Passive Expiration: How Redis Clears Memory', bn: '৬. অ্যাক্টিভ বনাম প্যাসিভ এক্সপায়ারি: Redis কীভাবে মেমরি খালি করে' } },
    {
      type: 'para',
      text: {
        en: 'To conserve CPU cycles, Redis does not maintain active timers for every key. Expiration is handled through complementary strategies. Passive Expiration: when a client requests a key, Redis checks its expiration timestamp and deletes it immediately if expired. Active Expiration: ten times every second, Redis tests 20 random volatile keys, purging all expired keys discovered until under 25 percent are expired.',
        bn: 'প্রসেসরের ওপর চাপ কমাতে Redis প্রতিটি কি-র জন্য আলাদা টাইমার চালায় না। এর বদলে পরিপূরক কৌশলে মেয়াদ শেষ করা হয়। প্যাসিভ এক্সপায়ারি: যখন কোনো ক্লায়েন্ট ডেটা পড়তে যায়, তখন Redis মেয়াদ দেখে উত্তীর্ণ হলে সাথে সাথে মুছে দেয়। অ্যাক্টিভ এক্সপায়ারি: প্রতি সেকেন্ডে ১০ বার র্যান্ডম ২০টি কি পরীক্ষা করে মেয়াদোত্তীর্ণ কি মুছে দেয় যতক্ষণ না ২৫ শতাংশের কম কি অবশিষ্ট থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `EXPIRATION STRATEGY FLOW:
1. Passive Trigger:
   Client -> GET session:101 -> Redis checks timestamp -> Expired! -> Deletes key & returns nil.

2. Active Random Sweep (10 times per second):
   Redis samples 20 keys with TTL -> Deletes 6 expired keys.
   If > 25% of sample were expired, repeat immediately to protect RAM!`,
      caption: {
        en: 'Dual active/passive expiration prevents memory waste while keeping CPU overhead minimal.',
        bn: 'অ্যাক্টিভ ও প্যাসিভ নিয়মের যুগলবন্দী প্রসেসর সাশ্রয় করে মেমরি পরিষ্কার রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Safe Iteration: Why KEYS * is Fatal and How SCAN Works', bn: '৭. নিরাপদ স্ক্যানিং: KEYS * কেন মারাত্মক এবং SCAN কীভাবে চলে' } },
    {
      type: 'para',
      text: {
        en: 'Never run KEYS * in production environments. Because Redis is single-threaded, KEYS searches the entire memory dictionary sequentially, freezing all other traffic for seconds on instances holding millions of records. Instead, use the non-blocking SCAN command, which returns an integer cursor and a small batch of keys incrementally.',
        bn: 'প্রোডাকশন সার্ভারে কখনোই KEYS * কমান্ড চালানো উচিত নয়। Redis সিঙ্গেল-থ্রেডেড হওয়ায় KEYS কমান্ড পুরো মেমরি ধারাবাহিকভাবে খোঁজে, যা লাখ লাখ রেকর্ডযুক্ত সার্ভারে অন্য সব ক্লায়েন্টকে কয়েক সেকেন্ড আটকে রাখে। এর বদলে সর্বদা নন-ব্লকিং SCAN কমান্ড ব্যবহার করুন, যা একটি কার্সর এবং অল্প কিছু কি ব্যাচ আকারে ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Safe incremental scanning with cursor:
# Syntax: SCAN <cursor> [MATCH pattern] [COUNT count]

SCAN 0 MATCH user:* COUNT 100
# Output:
# 1) "17"                     <- Next cursor position (0 means scan finished)
# 2) 1) "user:101:profile"
#    2) "user:102:profile"

# Resume next iteration using returned cursor:
SCAN 17 MATCH user:* COUNT 100`,
      caption: {
        en: 'The SCAN cursor traverses the internal hash table in chunks without stalling the server.',
        bn: 'SCAN কার্সর পুরো সার্ভারকে আটকে না রেখে ধাপে ধাপে মেমরি টেবিল অনুসন্ধান করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Memory Limits & Eviction Policies (maxmemory-policy)', bn: '৮. মেমরি সীমা ও এভিকশন পলিসি (maxmemory-policy)' } },
    {
      type: 'para',
      text: {
        en: 'When memory consumption hits the configured maxmemory threshold, Redis evicts keys according to the defined maxmemory-policy. Common choices include noeviction (returns error on writes), allkeys-lru (removes least recently used keys across all data), volatile-lru (removes LRU keys with an expiry), and allkeys-lfu (removes least frequently accessed keys).',
        bn: 'র‍্যাম ব্যবহার যখন maxmemory সীমায় পৌঁছে যায়, তখন Redis নির্ধারিত maxmemory-policy মেনে পুরনো কি ফেলে দেয়। প্রধান বিকল্পগুলো হলো: noeviction (নতুন লেখায় এরর দেয়), allkeys-lru (সব কি-র মধ্যে সবচেয়ে কম ব্যবহৃত কি মুছে ফেলে), volatile-lru (মেয়াদ থাকা কি-র মধ্যে LRU খোঁজে) এবং allkeys-lfu (সবচেয়ে কম ঘন ঘন ব্যবহৃত কি ছাঁটাই করে)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Configuration inside redis.conf:
maxmemory 4gb
maxmemory-policy allkeys-lru # Ideal for pure caching layers

# Common Eviction Policies:
# - noeviction    : Default. Rejects writes with OOM error.
# - allkeys-lru   : Evicts least-recently used keys first (Pure cache).
# - volatile-lru  : Evicts least-recently used keys that have a TTL set.
# - allkeys-lfu   : Evicts least-frequently used keys (Access counter based).
# - volatile-ttl  : Evicts keys with shortest remaining time-to-live.`,
      caption: {
        en: 'Choosing an eviction policy determines how Redis behaves under memory saturation.',
        bn: 'সঠিক এভিকশন পলিসি নির্ধারণ করে মেমরি পূর্ণ হয়ে গেলে Redis কীভাবে আচরণ করবে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Memory Telemetry & Fragmentation Ratios', bn: '৯. মেমরি টেলিমেট্রি ও ফ্র্যাগমেন্টেশন অনুপাত' } },
    {
      type: 'para',
      text: {
        en: 'Administrators audit server health using the command INFO memory. The primary metric is mem_fragmentation_ratio (used_memory_rss divided by used_memory). A ratio between 1.0 and 1.5 indicates healthy RAM allocation. Ratios exceeding 1.5 signify severe operating system fragmentation overhead, which can be eliminated online via activedefrag yes.',
        bn: 'অ্যাডমিনরা INFO memory কমান্ড দিয়ে মেমরির স্বাস্থ্য নিরীক্ষা করেন। এর প্রধান সূচক হলো mem_fragmentation_ratio (অপারেটিং সিস্টেমের used_memory_rss ভাগ Redis-এর used_memory)। এই মান ১.০ থেকে ১.৫ এর মধ্যে থাকা সুস্থতার লক্ষণ। মান ১.৫ ছাড়ালে মারাত্মক মেমরি অপচয় বোঝায়, যা সার্ভার রিস্টার্ট না করেই activedefrag yes দিয়ে ঠিক করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting memory diagnostics:
INFO memory

# Key telemetry output fields:
# used_memory:2147483648          <- 2 GB used by Redis data structures
# used_memory_rss:2684354560      <- 2.5 GB allocated by OS kernel
# mem_fragmentation_ratio:1.25    <- Healthy allocation ratio!

# Triggering active online defragmentation:
CONFIG SET activedefrag yes`,
      caption: {
        en: 'Active defragmentation reclaims fragmented physical RAM pages without service restarts.',
        bn: 'অ্যাক্টিভ ডিফ্র্যাগমেন্টেশন রিস্টার্ট ছাড়াই এলোমেলো মেমরি পেজগুলো পুনরায় গুছিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Key Expiry & Scanning in Node.js', bn: '১০. Node.js-এ কি এক্সপায়ারি ও স্ক্যানিং বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'The modern ioredis library provides a resilient client interface for interacting with key lifecycles and iterating over large key sets with streaming cursors.',
        bn: 'আধুনিক ioredis লাইব্রেরি Node.js ডেভেলপারদের জন্য কি-র মেয়াদ নিয়ন্ত্রণ এবং কার্সর দিয়ে নিরাপদে হাজার হাজার কি খোঁজার সেরা সুবিধা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Key lifecycle management with ioredis:
import Redis from "ioredis";
const redis = new Redis("redis://127.0.0.1:6379");

// 1. Set key with 300 seconds TTL:
await redis.set("user:101:session", "active_jwt_token", "EX", 300);

// 2. Query TTL:
const remainingSec = await redis.ttl("user:101:session");
console.log("Remaining TTL in seconds:", remainingSec);
// Output: Remaining TTL in seconds: 300

// 3. Incremental scanning without blocking event loop:
const stream = redis.scanStream({ match: "user:*", count: 50 });
let keyCount = 0;

stream.on("data", (resultKeys) => {
  keyCount += resultKeys.length;
});

stream.on("end", () => {
  console.log("Finished non-blocking scan; total keys examined:", keyCount);
});
// Output: Finished non-blocking scan; total keys examined: 1`,
      caption: {
        en: 'ioredis scanStream abstracts cursor iteration into a non-blocking readable Node stream.',
        bn: 'ioredis scanStream কার্সর ব্যবস্থাপনাকে একটি নন-ব্লকিং স্ট্রিমে রূপান্তর করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-key-ex1',
      kind: 'predict',
      topic: 'redis: persistent key ttl return value',
      question: {
        en: 'What integer value does the Redis TTL command return when a key exists but has no expiration attached (persistent key)?',
        bn: 'কোনো কি বিদ্যমান কিন্তু তার কোনো মেয়াদ নির্ধারণ করা না থাকলে (চিরস্থায়ী কি) Redis TTL কমান্ড কোন সংখ্যাটি ফেরত দেয়?'
      },
      code: `/* Return value of TTL on a persistent key: */
/* TTL = __ */`,
      answer: '-1',
      accept: ['-1', 'negative 1', '- 1'],
      hint: {
        en: 'Negative one (-1).',
        bn: 'ঋণাত্মক এক (-১)।'
      },
      explanation: {
        en: 'Redis returns -1 if the key exists without a TTL, and -2 if the key does not exist.',
        bn: 'কি বিদ্যমান থাকলে কিন্তু মেয়াদ না থাকলে Redis -১ ফেরত দেয়, আর কি না থাকলে -২ দেয়।'
      }
    },
    {
      id: 'red-key-ex2',
      kind: 'mcq',
      topic: 'redis: non-blocking key deletion command',
      question: {
        en: 'Which Redis command deletes large keys asynchronously in a background thread to prevent blocking the event loop?',
        bn: 'ইভেন্ট লুপ আটকে যাওয়া রোধ করতে কোন Redis কমান্ডটি ব্যাকগ্রাউন্ড থ্রেডে অ্যাসিনক্রোনাসভাবে বড় কি মুছে দেয়?'
      },
      options: [
        { en: 'UNLINK', bn: 'UNLINK' },
        { en: 'DEL', bn: 'DEL' },
        { en: 'DROP', bn: 'DROP' },
        { en: 'PURGE', bn: 'PURGE' }
      ],
      answer: 0,
      hint: {
        en: 'The UNLINK command.',
        bn: 'UNLINK কমান্ড।'
      },
      explanation: {
        en: 'UNLINK decouples the key from the keyspace in O(1) time and reclaims memory in a background thread, unlike synchronous DEL.',
        bn: 'UNLINK তাৎক্ষণিকভাবে কি বিচ্ছিন্ন করে ব্যাকগ্রাউন্ড থ্রেডে মেমরি খালি করে, ফলে সার্ভার সচল থাকে।'
      }
    },
    {
      id: 'red-key-ex3',
      kind: 'mcq',
      topic: 'redis: production key search command',
      question: {
        en: 'Why is the KEYS command forbidden in production environments with millions of keys?',
        bn: 'লাখ লাখ কি থাকা প্রোডাকশন সার্ভারে KEYS কমান্ড ব্যবহার করা কেন কঠোরভাবে নিষিদ্ধ?'
      },
        options: [
          { en: 'Because it is an O(N) blocking operation that freezes the single-threaded event loop while scanning all keys', bn: 'কারণ এটি একটি O(N) ব্লকিং অপারেশন যা সব কি খোঁজার সময় সিঙ্গেল-থ্রেডেড ইভেন্ট লুপকে সম্পূর্ণ আটকে ফেলে' },
          { en: 'Because KEYS deletes all data in the database', bn: 'কারণ KEYS সব ডেটা মুছে দেয়' },
          { en: 'Because KEYS only works on Windows servers', bn: 'কারণ KEYS শুধু উইন্ডোজে চলে' },
          { en: 'Because KEYS is not supported on Linux systems', bn: 'কারণ KEYS লিনাক্স সিস্টেমে চলে না' }
        ],
      answer: 0,
      hint: {
        en: 'Blocks the single-threaded event loop.',
        bn: 'সিঙ্গেল-থ্রেডেড ইভেন্ট লুপকে আটকে রাখে।'
      },
      explanation: {
        en: 'Redis is single-threaded. KEYS * traverses every memory bucket in one continuous pass, blocking all client operations until completion. Use SCAN instead.',
        bn: 'Redis একক থ্রেডে কাজ করায় KEYS কমান্ড পুরো মেমরি একবারে স্ক্যান করতে গিয়ে সব ক্লায়েন্ট ট্রাফিক থামিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'red-key-quiz',
    title: { en: 'Redis In-Memory Engine & Key Expiry Quiz', bn: 'Redis ইন-মেমরি ইঞ্জিন ও কি মেয়াদের কুইজ' },
    questions: [
      {
        id: 'rkq1',
        kind: 'mcq',
        topic: 'redis: I/O multiplexing mechanism',
        question: {
          en: 'How does Redis process tens of thousands of concurrent network connections while executing commands on a single thread?',
          bn: 'একটিমাত্র থ্রেডে কাজ করা সত্ত্বেও Redis কীভাবে একসাথে হাজার হাজার ক্লায়েন্ট সংযোগ সামলায়?'
        },
        options: [
          { en: 'By utilizing operating system non-blocking I/O multiplexing mechanisms (such as epoll or kqueue) inside an event loop', bn: 'একটি ইভেন্ট লুপের ভেতর অপারেটিং সিস্টেমের নন-ব্লকিং I/O মাল্টিপ্লেক্সিং (যেমন epoll বা kqueue) ব্যবহার করে' },
          { en: 'By spawning 50,000 background worker threads', bn: '৫০,০০০ ব্যাকগ্রাউন্ড থ্রেড তৈরি করে' },
          { en: 'By compiling commands directly to GPU hardware', bn: 'জিপিইউ হার্ডওয়্যারে কোড রান করে' },
          { en: 'By disabling network encryption', bn: 'নেটওয়ার্ক এনক্রিপশন বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Non-blocking I/O multiplexing like epoll.',
          bn: 'epoll-এর মতো নন-ব্লকিং I/O মাল্টিপ্লেক্সিং।'
        },
        explanation: {
          en: 'Redis uses I/O multiplexing to monitor thousands of client sockets simultaneously, executing memory mutations sequentially without thread locking.',
          bn: 'I/O মাল্টিপ্লেক্সিংয়ের সাহায্যে Redis হাজার হাজার সকেট পর্যবেক্ষণ করে এবং লকিং ছাড়াই দ্রুত মেমরিতে কমান্ড সম্পন্ন করে।'
        }
      },
      {
        id: 'rkq2',
        kind: 'mcq',
        topic: 'redis: eviction policy for pure caching',
        question: {
          en: 'Which maxmemory-policy is typically recommended for a pure caching layer where discarding the least recently used keys is desirable under memory pressure?',
          bn: 'মেমরির টান পড়লে অপ্রয়োজনীয় পুরনো কি ফেলে দেওয়ার জন্য নিখাদ ক্যাশিং সার্ভারে কোন maxmemory-policy সবচেয়ে উপযুক্ত?'
        },
        options: [
          { en: 'allkeys-lru', bn: 'allkeys-lru' },
          { en: 'noeviction', bn: 'noeviction' },
          { en: 'volatile-ttl', bn: 'volatile-ttl' },
          { en: 'random-crash', bn: 'random-crash' }
        ],
        answer: 0,
        hint: {
          en: 'allkeys-lru policy.',
          bn: 'allkeys-lru পলিসি।'
        },
        explanation: {
          en: 'allkeys-lru evicts the least recently used keys across the entire dataset when memory capacity is reached, ideal for general-purpose web caches.',
          bn: 'allkeys-lru মেমরি পূর্ণ হলে সবচেয়ে কম ব্যবহৃত কি-গুলোকে আগে সরিয়ে দেয়, যা ক্যাশের জন্য সবচেয়ে কার্যকর।'
        }
      },
      {
        id: 'rkq3',
        kind: 'mcq',
        topic: 'redis: memory fragmentation ratio health',
        question: {
          en: 'What does a mem_fragmentation_ratio value between 1.0 and 1.5 signify in Redis memory diagnostics?',
          bn: 'Redis মেমরি ডায়াগনস্টিকসে mem_fragmentation_ratio এর মান ১.০ থেকে ১.৫ এর মধ্যে থাকার অর্থ কী?'
        },
        options: [
          { en: 'Healthy, efficient memory allocation with minimal operating system fragmentation overhead', bn: 'অপারেটিং সিস্টেমের নূন্যতম ফ্র্যাগমেন্টেশনসহ অত্যন্ত চমৎকার ও সুস্থ মেমরি ব্যবহার' },
          { en: 'The server has crashed', bn: 'সার্ভার ক্র্যাশ করেছে' },
          { en: 'All keys have expired', bn: 'সব কি মুছে গেছে' },
          { en: 'The database is completely full', bn: 'ডাটাবেস সম্পূর্ণ ভরে গেছে' }
        ],
        answer: 0,
        hint: {
          en: 'Represents healthy memory allocation.',
          bn: 'সুস্থ মেমরি ব্যবহারের নির্দেশক।'
        },
        explanation: {
          en: 'A ratio between 1.0 and 1.5 indicates expected memory overhead. A ratio above 1.5 suggests excessive fragmentation, which active defragmentation can cure.',
          bn: '১.০ থেকে ১.৫ মান নির্দেশ করে মেমরির বিন্যাস চমৎকার অবস্থায় আছে।'
        }
      },
      {
        id: 'rkq4',
        kind: 'mcq',
        topic: 'redis: active expiration sweep frequency',
        question: {
          en: 'How often does Redis execute its active expiration sampling sweep to purge expired volatile keys from RAM?',
          bn: 'র‍্যাম থেকে মেয়াদোত্তীর্ণ কি মুছে ফেলতে Redis প্রতি সেকেন্ডে কতবার অ্যাক্টিভ এক্সপায়ারি সুইপ চালায়?'
        },
        options: [
          { en: '10 times per second (every 100 milliseconds)', bn: 'প্রতি সেকেন্ডে ১০ বার (প্রতি ১০০ মিলিসেকেন্ডে)' },
          { en: 'Once every 24 hours', bn: '২৪ ঘণ্টায় একবার' },
          { en: 'Only when the server reboots', bn: 'শুধুমাত্র সার্ভার রিবুট করার সময়' },
          { en: 'Every microsecond', bn: 'প্রতি মাইক্রোসেকেন্ডে' }
        ],
        answer: 0,
        hint: {
          en: '10 times per second.',
          bn: 'প্রতি সেকেন্ডে ১০ বার।'
        },
        explanation: {
          en: 'Redis samples volatile keys 10 times a second in an active routine to clean expired memory without spiking CPU usage.',
          bn: 'Redis প্রতি সেকেন্ডে ১০ বার র্যান্ডম কি পরীক্ষা করে মেয়াদোত্তীর্ণ ডেটা সরিয়ে র‍্যাম পরিষ্কার রাখে।'
        }
      }
    ]
  }
};
