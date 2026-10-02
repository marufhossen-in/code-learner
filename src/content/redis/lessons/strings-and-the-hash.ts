import type { Lesson } from '../../../lib/types';

export const StringsAndTheHashLesson: Lesson = {
  slug: 'strings-and-the-hash',
  tech: 'redis',
  title: {
    en: 'Redis Data Structures: Strings, Bitmaps & Hashes',
    bn: 'Redis ডেটা স্ট্রাকচার: স্ট্রিং, বিটম্যাপ ও হ্যাশ'
  },
  summary: {
    en: 'Master foundational Redis data structures and caching architecture across 10 structured topics. Store binary-safe strings up to 512 MB. Execute atomic numerical increments using INCRBY and INCRBYFLOAT. Compress boolean metrics into dense bitmaps using SETBIT and BITCOUNT. Model multi-attribute objects with Redis Hashes using HSET, HGETALL, and HINCRBY. Understand internal listpack memory encodings. Architect production Cache-Aside patterns, and eliminate Cache Penetration, Breakdown, and Avalanche failure modes with TTL jitter.',
    bn: '১০টি সুসংগঠিত পয়েন্টে মৌলিক Redis ডেটা স্ট্রাকচার এবং ক্যাশিং আর্কিটেকচার আয়ত্ত করুন। ৫১২ মেগাবাইট পর্যন্ত বাইনারি-সেফ স্ট্রিং সংরক্ষণ করা যায়। INCRBY ও INCRBYFLOAT প্রয়োগে অবিভাজ্য সংখ্যা গণনা সম্পন্ন করতে পারেন। SETBIT ও BITCOUNT ব্যবহারের মাধ্যমে ঘন বিটম্যাপে কোটি কোটি বুলিয়ান মান সংকুচিত হয়। HSET, HGETALL ও HINCRBY দিয়ে অবজেক্ট ডেটা পরিচালনা শিখুন। ইন্টারনাল লিস্টপ্যাক মেমরি এনকোডিং বুঝুন। প্রোডাকশন ক্যাশ-অ্যাসাইড প্যাটার্ন বাস্তবায়ন করা এবং TTL জিটার যোগ করে ক্যাশ পেনিট্রেশন, ব্রেকডাউন ও অ্যাভালাঞ্চের ঝুঁকি নির্মূল করার কৌশল রপ্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'lists-and-the-queue',
    tech: 'redis',
    title: {
      en: 'Redis Lists & Queues: LPUSH, RPOP & Blocking Workers',
      bn: 'Redis লিস্ট ও কিউ: LPUSH, RPOP ও ব্লকিং ওয়ার্কার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Binary-Safe Strings: The Foundation of Redis Storage', bn: '১. বাইনারি-সেফ স্ট্রিং: Redis স্টোরেজের মূল ভিত্তি' } },
    {
      type: 'para',
      text: {
        en: 'When you store values in Redis, the most fundamental data type is the String. Unlike C strings which terminate at null bytes, Redis Strings are completely binary-safe: they can hold raw text, serialized JSON payloads, compressed image binary buffers, or protocol buffers up to a maximum size of 512 MB per key.',
        bn: 'যখন আপনি Redis-এ কোনো ডেটা রাখেন, তার সবচেয়ে মৌলিক রূপ হলো স্ট্রিং। সি ভাষার সাধারণ স্ট্রিং নাল বাইটে শেষ হলেও Redis-এর স্ট্রিং শতভাগ বাইনারি-সেফ: এতে প্লেইন টেক্সট, জেসন অবজেক্ট, ছবির বাইনারি বাফার কিংবা প্রোটোকল বাফার রাখা যায় এবং প্রতি কি-র সর্বোচ্চ আকার হতে পারে ৫১২ মেগাবাইট।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Storing strings, numbers, and serialized payloads:
SET greeting "Hello Bangladesh"
SET visitor_counter 1042
SET user:99:raw_json "{\\"name\\":\\"Tanvir\\",\\"role\\":\\"architect\\"}"

GET greeting
# Output: "Hello Bangladesh"

STRLEN greeting
# Output: (integer) 16`,
      caption: {
        en: 'Binary-safe strings handle text and arbitrary binary blobs with equal efficiency.',
        bn: 'বাইনারি-সেফ স্ট্রিং টেক্সট এবং যেকোনো বাইনারি ডেটা সমান দক্ষতায় সংরক্ষণ করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Cache-Aside Read & Write Architecture', bn: 'ক্যাশ-অ্যাসাইড রিড ও রাইট আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Cache-Aside Pattern Read and Write Flow">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="160" height="100" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Application Server</text>
<text x="80" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">1. Queries Redis</text>
<text x="80" y="90" font-size="10" fill="#4ade80" text-anchor="middle">Cache Hit: 1 ms</text>
<text x="80" y="105" font-size="9" fill="#fca5a5" text-anchor="middle">Cache Miss: Seek DB</text>

<path d="M165,55 L255,55" stroke="#38bdf8" stroke-width="2"/>
<text x="210" y="48" font-size="9" fill="#38bdf8" text-anchor="middle">GET key</text>

<rect x="260" y="20" width="170" height="100" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
<text x="345" y="45" font-size="11" font-weight="700" fill="#f87171" text-anchor="middle">Redis In-Memory</text>
<text x="345" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Hot Key Store</text>
<text x="345" y="90" font-size="10" fill="#fbbf24" text-anchor="middle">TTL with Jitter</text>

<path d="M165,95 L495,95" stroke="#10b981" stroke-width="2" stroke-dasharray="4"/>
<text x="330" y="112" font-size="9" fill="#4ade80" text-anchor="middle">2. Fallback on Miss (SQL / Mongo)</text>

<rect x="500" y="20" width="160" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="580" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Primary Database</text>
<text x="580" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">PostgreSQL / MongoDB</text>
<text x="580" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Disk Storage Engine</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Atomic Numerical Increments: INCR, DECR & INCRBY', bn: '২. অবিভাজ্য সংখ্যা গণনা: INCR, DECR ও INCRBY' } },
    {
      type: 'para',
      text: {
        en: 'Redis interprets string values containing integers as 64-bit signed numbers. The INCR and DECR commands atomically increment or decrement numbers in memory. Because Redis executes commands on a single thread, atomic increments eliminate read-modify-write race conditions without database locks.',
        bn: 'পূর্ণসংখ্যাযুক্ত স্ট্রিং মানকে Redis নিজে থেকেই ৬৪-বিট সাইনড সংখ্যা হিসেবে চিনে নেয়। INCR এবং DECR কমান্ড মেমরিতে সরাসরি সংখ্যা যোগ বা বিয়োগ করে। একক থ্রেডে কাজ সম্পন্ন হওয়ায় কোনো রিলেশনাল ডাটাবেস লক ছাড়াই কোটি কোটি সমসাময়িক ট্রাফিকেও রেস কন্ডিশনের ঝুঁকি শূন্য থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Atomic counter management:
SET api:rate:user_44 0

# Increment by 1:
INCR api:rate:user_44
# Output: (integer) 1

# Increment by custom delta:
INCRBY api:rate:user_44 25
# Output: (integer) 26

# Floating point addition:
INCRBYFLOAT wallet:balance_101 14.75
# Output: "14.75"`,
      caption: {
        en: 'Atomic numerical mutations prevent concurrent race conditions under heavy traffic.',
        bn: 'অবিভাজ্য সংখ্যা পরিবর্তন হাজার হাজার ট্রাফিকের চাপেও গণনার ভুল হতে দেয় না।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Substring & String Range Operations: GETRANGE & SETRANGE', bn: '৩. সাবস্ট্রিং ও রেঞ্জ অপারেশন: GETRANGE ও SETRANGE' } },
    {
      type: 'para',
      text: {
        en: 'Redis supports surgical string modifications using byte offsets. GETRANGE extracts a substring slice using start and end indices (similar to array slicing). SETRANGE overwrites part of a string at a designated byte offset without replacing the surrounding payload.',
        bn: 'Redis সম্পূর্ণ স্ট্রিং না ছুঁয়ে বাইট অফসেট ব্যবহার করে নির্দিষ্ট অংশ পরিবর্তনের সুবিধা দেয়। GETRANGE শুরু ও শেষের ইনডেক্স ধরে সাবস্ট্রিং বের করে আনে। আর SETRANGE নির্দিষ্ট অফসেটে কোনো অক্ষত অংশ নষ্ট না করেই নতুন অক্ষর বা বাইট বসিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `SET banner "Welcome to Arena Platform"

# Slice substring from index 11 to 15:
GETRANGE banner 11 15
# Output: "Arena"

# Overwrite starting at offset 11:
SETRANGE banner 11 "Codeshikhon"
# Output: (integer) 28

GET banner
# Output: "Welcome to Codeshikhonatform"`,
      caption: {
        en: 'Range operations allow zero-copy substring extraction and surgical in-place mutations.',
        bn: 'রেঞ্জ অপারেশন সম্পূর্ণ ডেটা না বদলেই নির্দিষ্ট বাইটে সরাসরি পরিবর্তন আনে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Bitmaps: Ultra-Dense Boolean Analytics (SETBIT & BITCOUNT)', bn: '৪. বিটম্যাপ: অতি-সংকুচিত বুলিয়ান অ্যানালিটিক্স' } },
    {
      type: 'para',
      text: {
        en: 'Bitmaps are not a separate data type; they are binary operations performed on standard Redis Strings. Using SETBIT and GETBIT, developers set individual bits to 0 or 1. This allows tracking daily active users across millions of accounts using approximately 12 megabytes of RAM.',
        bn: 'বিটম্যাপ কোনো আলাদা ডাটা টাইপ নয়; এটি সাধারণ স্ট্রিংয়ের ওপর বাইনারি বিট অপারেশন। SETBIT এবং GETBIT দিয়ে প্রতিটি একক বিটকে ০ বা ১ করা যায়। এর সাহায্যে লাখ লাখ সক্রিয় অ্যাকাউন্টের হিসাব রাখতে মাত্র ১২ মেগাবাইট র‍্যাম প্রয়োজন হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Tracking daily active users for date 2026-09-26:
# User IDs act directly as bit offsets!

# User 1042 logged in today:
SETBIT dau:20260926 1042 1
# User 5081 logged in today:
SETBIT dau:20260926 5081 1

# Check if User 1042 logged in today:
GETBIT dau:20260926 1042
# Output: (integer) 1

# Compute total unique active users for the entire day:
BITCOUNT dau:20260926
# Output: (integer) 2`,
      caption: {
        en: 'Bitmaps condense millions of discrete boolean flags into a few megabytes of memory.',
        bn: 'বিটম্যাপ কোটি কোটি ট্রু/ফলস তথ্যকে মাত্র কয়েক মেগাবাইট মেমরিতে সংকুচিত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Hashes as In-Memory Objects: Field-Value Stores', bn: '৫. অবজেক্ট হিসেবে হ্যাশ: ফিল্ড-ভ্যালু স্টোর' } },
    {
      type: 'para',
      text: {
        en: 'A Redis Hash is an in-memory dictionary mapping string fields to string values, perfectly modeling entity objects like user profiles or cart items. HSET sets fields, HGET retrieves a field, HMGET reads multiple fields simultaneously, and HGETALL retrieves the complete object.',
        bn: 'Redis হ্যাশ হলো একটি ইন-মেমরি ডিকশনারি যা ফিল্ডের সাথে মানের ম্যাপিং রাখে। এটি ব্যবহারকারীর প্রোফাইল বা শপিং কার্টের মতো অবজেক্ট মডেলিংয়ের জন্য আদর্শ। HSET ফিল্ডের মান সেট করে, HGET একটি নির্দিষ্ট ফিল্ড পড়ে, HMGET একসাথে একাধিক ফিল্ড আনে এবং HGETALL পুরো অবজেক্টটি ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Storing a structured customer profile:
HSET user:1042 name "Rahim" email "rahim@test.com" age 28 role "admin"

# Reading specific fields:
HMGET user:1042 name role
# Output:
# 1) "Rahim"
# 2) "admin"

# Incrementing numerical sub-fields inside the hash:
HINCRBY user:1042 login_count 1
# Output: (integer) 1`,
      caption: {
        en: 'Redis Hashes provide granular sub-field updates without re-writing entire documents.',
        bn: 'হ্যাশ পুরো অবজেক্ট পুনরায় না লিখে সরাসরি নির্দিষ্ট ফিল্ড আপডেটের সুবিধা দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Internal Memory Encoding: listpack vs hashtable', bn: '৬. ইন্টারনাল মেমরি এনকোডিং: listpack বনাম hashtable' } },
    {
      type: 'para',
      text: {
        en: 'Small hashes containing few fields are internally encoded as a contiguous memory buffer called listpack (or ziplist in legacy versions). This compact representation avoids pointer overhead. Once a hash exceeds hash-max-listpack-entries (default: 128) or hash-max-listpack-value (default: 64 bytes), Redis converts it into a standard hash table.',
        bn: 'অল্প ফিল্ডযুক্ত ছোট হ্যাশগুলোকে Redis মেমরিতে একটি নিরবচ্ছিন্ন বাফার হিসেবে রাখে যাকে listpack বলা হয়। এটি পয়েন্টারের বাড়তি খরচ বাঁচিয়ে প্রচুর র‍্যাম সাশ্রয় করে। তবে ফিল্ড সংখ্যা ১২৮ (hash-max-listpack-entries) বা কোনো ফিল্ডের মান ৬৪ বাইট (hash-max-listpack-value) ছাড়ালে Redis একে সাধারণ হ্যাশ টেবিলে বদলে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting internal memory representation:
OBJECT ENCODING user:1042
# Output: "listpack" (Compact memory-efficient representation!)

# Exceeding threshold converts to hashtable automatically:
HSET user:1042 large_bio "A".repeat(100)
OBJECT ENCODING user:1042
# Output: "hashtable"`,
      caption: {
        en: 'Redis automatically switches internal encodings to balance RAM density and CPU performance.',
        bn: 'Redis নিজে থেকেই ইন্টারনাল এনকোডিং বদলে মেমরি সাশ্রয় ও প্রসেসর গতির ভারসাম্য রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Hash vs Serialized JSON String: Architectural Tradeoffs', bn: '৭. হ্যাশ বনাম সিরিয়ালাইজড JSON স্ট্রিং: স্থাপত্যের তুলনা' } },
    {
      type: 'para',
      text: {
        en: 'Choosing between a serialized JSON String and a Redis Hash is a fundamental design decision. Use Strings when the entire object is always read and written together, and payload compression (like gzip) is beneficial. Use Hashes when application logic frequently inspects or modifies individual fields independently.',
        bn: 'JSON স্ট্রিং নাকি Redis হ্যাশ কোনটি ব্যবহার করবেন তা একটি গুরুত্বপূর্ণ সিদ্ধান্ত। যখন পুরো অবজেক্টটি সর্বদা একসাথে পড়া বা লেখা হয় এবং ডেটা কমপ্রেস করা দরকার, তখন সাধারণ স্ট্রিং উত্তম। আর যখন অ্যাপ্লিকেশনে অবজেক্টের ভেতরের নির্দিষ্ট কিছু ফিল্ড আলাদাভাবে আপডেট করতে হয়, তখন হ্যাশ ব্যবহার করা শ্রেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `ARCHITECTURAL COMPARISON:
+---------------------+-------------------------------+-------------------------------+
| Attribute           | Serialized JSON String        | Redis Hash                    |
+---------------------+-------------------------------+-------------------------------+
| Storage Command     | SET user:101 '{"a":1,"b":2}'  | HSET user:101 a 1 b 2         |
| Granular Updates    | No (Must replace whole JSON)  | Yes (HSET user:101 a 9)       |
| Numerical Mutation  | No (Requires manual parse)    | Yes (HINCRBY user:101 score 5)|
| Per-Field TTL       | No (TTL applies to whole key) | No (TTL applies to whole key) |
| Compression Support | Excellent (Can store gzipped) | Moderate                      |
+---------------------+-------------------------------+-------------------------------+`,
      caption: {
        en: 'Evaluate read/write granularity when deciding between serialized strings and hashes.',
        bn: 'ফিল্ড লেভেল আপডেটের প্রয়োজনীয়তা বুঝে স্ট্রিং বা হ্যাশের মধ্যে সঠিকটি বেছে নিন।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. The Cache-Aside Pattern: Read-Through Architecture', bn: '৮. ক্যাশ-অ্যাসাইড প্যাটার্ন: রিড-থ্রু আর্কিটেকচার' } },
    {
      type: 'para',
      text: {
        en: 'The Cache-Aside (Lazy Loading) pattern is the gold standard for caching database records. The application first checks Redis. If the key exists (Cache Hit), it returns data immediately. If the key is missing (Cache Miss), the application reads from the primary database, populates Redis with an expiration timeout, and responds to the client.',
        bn: 'ডাটাবেস ক্যাশিংয়ের জন্য ক্যাশ-অ্যাসাইড (Cache-Aside) প্যাটার্ন বিশ্বজুড়ে সবচেয়ে জনপ্রিয়। অ্যাপ্লিকেশন প্রথমে Redis-এ ডেটা খোঁজে। ডেটা পাওয়া গেলে (Cache Hit) সাথে সাথে ক্লায়েন্টকে ফেরত দেয়। আর ক্যাশে ডেটা না থাকলে (Cache Miss) মূল ডাটাবেস থেকে পড়ে এনে নির্দিষ্ট মেয়াদসহ Redis-এ লিখে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Cache-Aside implementation:
async function getUserProfile(userId, redis, db) {
  const cacheKey = \`user:\${userId}:profile\`;

  // 1. Check Redis memory cache:
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached); // Cache Hit (1 ms latency)
  }

  // 2. Cache Miss: Fall back to primary database:
  const user = await db.collection("users").findOne({ _id: userId });
  if (user) {
    // 3. Write to Redis with 10 minutes TTL:
    await redis.set(cacheKey, JSON.stringify(user), "EX", 600);
  }
  return user;
}`,
      caption: {
        en: 'Cache-Aside lazily hydrates Redis memory on demand, protecting primary database I/O.',
        bn: 'ক্যাশ-অ্যাসাইড প্রয়োজনের সময় মেমরিতে ডেটা ভরে মূল ডাটাবেসের কাজের চাপ কমায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Cache Failures: Penetration, Breakdown & Avalanche', bn: '৯. ক্যাশ বিপর্যয়: পেনিট্রেশন, ব্রেকডাউন ও অ্যাভালাঞ্চ' } },
    {
      type: 'para',
      text: {
        en: 'High-throughput caching architectures must defend against three major failure modes. Cache Penetration: malicious queries for non-existent IDs bypass cache and hit the database (defend by caching null objects with short TTL). Cache Breakdown: a heavily queried hot key expires, causing thousands of queries to slam the database simultaneously (defend with distributed mutex locks). Cache Avalanche: thousands of keys expire at the exact same second (defend by adding randomized TTL jitter).',
        bn: 'উচ্চগতির ক্যাশিং সিস্টেমে তিনটি বড় বিপর্যয় দেখা দিতে পারে। ক্যাশ পেনিট্রেশন: অস্তিত্বহীন আইডির অনুরোধ ক্যাশ এড়িয়ে সরাসরি ডাটাবেসে চাপ ফেলে (স্বল্পস্থায়ী নাল অবজেক্ট ক্যাশ করে এটি ঠেকানো হয়)। ক্যাশ ব্রেকডাউন: বহুল ব্যবহৃত কোনো হট কি-র মেয়াদ শেষ হলে হাজার হাজার রিকোয়েস্ট একসাথে ডাটাবেসে গিয়ে আঘাত করে (মিউটেক্স লক দিয়ে সমাধান করা হয়)। ক্যাশ অ্যাভালাঞ্চ: একই সেকেন্ডে হাজার হাজার কি একসাথে এক্সপায়ার হয়ে ডাটাবেস ডাউন করে দেয় (TTL-এর সাথে এলোমেলো কিছু সেকেন্ড বা জিটার যোগ করে এটি প্রতিরোধ করা হয়)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Adding randomized jitter to prevent Cache Avalanche:
function calculateTTLWithJitter(baseSeconds = 3600, jitterMax = 300) {
  const randomJitter = Math.floor(Math.random() * jitterMax);
  return baseSeconds + randomJitter; // Staggers expiration across 3600 to 3900 seconds!
}

console.log("Calculated staggered TTL to protect primary database from mass expiry");
// Output: Calculated staggered TTL to protect primary database from mass expiry`,
      caption: {
        en: 'Adding randomized jitter disperses expiration timestamps, eliminating cache avalanches.',
        bn: 'এলোমেলো জিটার যোগ করলে সব কি একসাথে এক্সপায়ার না হয়ে পর্যায়ক্রমে খালি হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Resilient Hash Cache Repository in Node.js', bn: '১০. Node.js-এ নিরাপদ হ্যাশ ক্যাশ রিপোজিটরি তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production user repository utilizing Redis Hashes with automatic field mapping and synchronized updates.',
        bn: 'নিচে Redis হ্যাশ ব্যবহার করে ফিল্ড ম্যাপিং ও ক্যাশ সিঙ্ক্রোনাইজেশন সমৃদ্ধ একটি পূর্ণাঙ্গ প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";
const redis = new Redis("redis://127.0.0.1:6379");

class UserCacheRepository {
  static async saveUser(user) {
    const key = \`user:\${user.id}\`;
    await redis.hset(key, {
      name: user.name,
      email: user.email,
      credits: String(user.credits)
    });
    // Set 1-hour expiration with 60 seconds jitter:
    await redis.expire(key, 3600 + Math.floor(Math.random() * 60));
  }

  static async incrementCredits(userId, amount) {
    return await redis.hincrby(\`user:\${userId}\`, "credits", amount);
  }
}

console.log("Production user cache repository initialized with resilient hash helpers");
// Output: Production user cache repository initialized with resilient hash helpers`,
      caption: {
        en: 'A production Redis Hash repository providing atomic sub-field updates and expiration.',
        bn: 'একটি প্রোডাকশন Redis হ্যাশ রিপোজিটরি যা অবিভাজ্য ফিল্ড আপডেট ও মেয়াদ নিয়ন্ত্রণ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-str-ex1',
      kind: 'predict',
      topic: 'redis: maximum string key size limit in MB',
      question: {
        en: 'What is the absolute maximum size limit in megabytes for a single Redis String value?',
        bn: 'একটি একক Redis স্ট্রিং মানের সর্বোচ্চ আকার কত মেগাবাইট হতে পারে?'
      },
      code: `/* Maximum Redis String size in MB: */
/* max_size = ___ MB */`,
      answer: '512',
      accept: ['512', '512MB', '512 MB'],
      hint: {
        en: '512 megabytes.',
        bn: '৫১২ মেগাবাইট।'
      },
      explanation: {
        en: 'A Redis String can hold any binary payload up to a strict architectural limit of 512 MB.',
        bn: 'Redis স্ট্রিং যেকোনো বাইনারি ডেটা সর্বোচ্চ ৫১২ মেগাবাইট পর্যন্ত ধারণ করতে পারে।'
      }
    },
    {
      id: 'red-str-ex2',
      kind: 'mcq',
      topic: 'redis: cache avalanche mitigation',
      question: {
        en: 'How do software architects effectively prevent a "Cache Avalanche" where thousands of keys expire simultaneously?',
        bn: 'হাজার হাজার কি একই সেকেন্ডে একসাথে মেয়াদোত্তীর্ণ হয়ে "ক্যাশ অ্যাভালাঞ্চ" ঘটা কীভাবে রোধ করা যায়?'
      },
      options: [
        { en: 'By adding randomized TTL jitter to staggered expiration timestamps across a distributed range', bn: 'মেয়াদ নির্ধারণের সময় মূল সময়ের সাথে এলোমেলো কিছু সেকেন্ড বা জিটার (Jitter) যোগ করে' },
        { en: 'By restarting the Redis server every 10 minutes', bn: 'প্রতি ১০ মিনিটে সার্ভার রিস্টার্ট করে' },
        { en: 'By disabling persistence', bn: 'পারসিস্টেন্স বন্ধ করে' },
        { en: 'By deleting the primary SQL database', bn: 'মূল ডাটাবেস মুছে ফেলে' }
      ],
      answer: 0,
      hint: {
        en: 'Add randomized TTL jitter.',
        bn: 'এলোমেলো TTL জিটার যোগ করুন।'
      },
      explanation: {
        en: 'Adding random jitter staggers key expirations over a span of minutes, smoothing database load.',
        bn: 'জিটার যোগ করলে সব কি একসাথে খালি না হয়ে কয়েক মিনিটের ব্যবধানে খালি হয়, ফলে ডাটাবেসে চাপ পড়ে না।'
      }
    },
    {
      id: 'red-str-ex3',
      kind: 'mcq',
      topic: 'redis: bitmap memory efficiency',
      question: {
        en: 'Which Redis data structure operation allows tracking boolean active status for millions of users using approximately 12 megabytes of RAM?',
        bn: 'কোন Redis ডেটা স্ট্রাকচার অপারেশন ব্যবহার করে মাত্র ১২ মেগাবাইট মেমরিতে লাখ লাখ ব্যবহারকারীর সক্রিয়তার হিসাব রাখা সম্ভব?'
      },
      options: [
        { en: 'Bitmaps using SETBIT and BITCOUNT on binary-safe strings', bn: 'বাইনারি-সেফ স্ট্রিংয়ের ওপর SETBIT ও BITCOUNT ব্যবহার করে বিটম্যাপের মাধ্যমে' },
        { en: 'Creating millions of individual JSON documents', bn: 'লাখ লাখ আলাদা জেসন ফাইল বানিয়ে' },
        { en: 'Storing CSV files in Redis Hashes', bn: 'হ্যাশের ভেতর সিএসভি ফাইল রেখে' },
        { en: 'Using SQL relational tables', bn: 'এসকিউএল টেবিল ব্যবহার করে' }
      ],
      answer: 0,
      hint: {
        en: 'Bitmaps with SETBIT and BITCOUNT.',
        bn: 'SETBIT ও BITCOUNT সহ বিটম্যাপ।'
      },
      explanation: {
        en: 'Bitmaps map each user ID directly to a single bit offset, delivering extreme storage efficiency.',
        bn: 'বিটম্যাপ প্রতিটি ব্যবহারকারীকে একটিমাত্র বিটে রূপান্তর করে চরম মেমরি সাশ্রয় নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'red-str-quiz',
    title: { en: 'Redis Strings, Bitmaps & Hashes Quiz', bn: 'Redis স্ট্রিং, বিটম্যাপ ও হ্যাশ কুইজ' },
    questions: [
      {
        id: 'rsq1',
        kind: 'mcq',
        topic: 'redis: string numerical increment atomicity',
        question: {
          en: 'Why are numerical operations like INCR and INCRBY completely immune to concurrency race conditions in Redis?',
          bn: 'Redis-এ INCR এবং INCRBY-এর মতো সংখ্যা বৃদ্ধির অপারেশনগুলো কেন কনকারেন্সি রেস কন্ডিশন থেকে শতভাগ মুক্ত?'
        },
        options: [
          { en: 'Because Redis executes commands sequentially within a single-threaded event loop', bn: 'কারণ Redis একটি একক থ্রেডের ইভেন্ট লুপের ভেতর পরপর ধারাবাহিক কমান্ড সম্পন্ন করে' },
          { en: 'Because Redis uses 100 multi-threaded background locks', bn: 'কারণ Redis ১০০টি ব্যাকগ্রাউন্ড লক চালায়' },
          { en: 'Because numbers are stored on flash hard drives', bn: 'কারণ সংখ্যাগুলো হার্ডডিস্কে জমা থাকে' },
          { en: 'Because Redis disables writes when reading', bn: 'কারণ পড়ার সময় লেখা বন্ধ থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Executed sequentially in a single thread.',
          bn: 'একক থ্রেডে ধারাবাহিকভাবে সম্পন্ন হয়।'
        },
        explanation: {
          en: 'The single-threaded execution model guarantees that an INCR command completes entirely before any other client request can interleave.',
          bn: 'সিঙ্গেল-থ্রেডেড আর্কিটেকচার নিশ্চিত করে যে একটি INCR সম্পূর্ণ শেষ হওয়ার আগে অন্য কোনো কমান্ড ঢুকতে পারবে না।'
        }
      },
      {
        id: 'rsq2',
        kind: 'mcq',
        topic: 'redis: hash internal listpack encoding',
        question: {
          en: 'What is the internal memory representation used by Redis for small hashes before exceeding size thresholds?',
          bn: 'আকারের সীমা অতিক্রম করার আগে ছোট হ্যাশগুলোর জন্য Redis অভ্যন্তরীণভাবে কোন মেমরি রিপ্রেজেন্টেশন ব্যবহার করে?'
        },
        options: [
          { en: 'listpack (a compact sequential byte buffer that eliminates pointer overhead)', bn: 'listpack (একটি অত্যন্ত সংকুচিত বাইট বাফার যা মেমরি পয়েন্টারের অপচয় রোধ করে)' },
          { en: 'A B-tree index on disk', bn: 'ডিস্কের বি-ট্রি ইনডেক্স' },
          { en: 'An XML document tree', bn: 'এক্সএমএল ডকুমেন্ট ট্রি' },
          { en: 'An uncompressed binary tree', bn: 'আনকমপ্রেসড বাইনারি ট্রি' }
        ],
        answer: 0,
        hint: {
          en: 'listpack compact buffer.',
          bn: 'listpack সংকুচিত বাফার।'
        },
        explanation: {
          en: 'Redis stores small hashes in a listpack buffer to maximize cache density and prevent memory fragmentation.',
          bn: 'মেমরির অপচয় কমাতে Redis ছোট হ্যাশগুলোকে listpack বাফারে সুসংগঠিতভাবে রাখে।'
        }
      },
      {
        id: 'rsq3',
        kind: 'mcq',
        topic: 'redis: cache penetration defense',
        question: {
          en: 'What architectural defense stops Cache Penetration where malicious queries constantly look up non-existent record IDs?',
          bn: 'অস্তিত্বহীন আইডির অনুরোধ বারবার ডাটাবেসে গিয়ে আঘাত হানার "ক্যাশ পেনিট্রেশন" সমস্যা কীভাবে রোধ করা যায়?'
        },
        options: [
          { en: 'Caching null results with a brief expiration timeout, or verifying IDs with a Bloom filter beforehand', bn: 'স্বল্প মেয়াদের জন্য নাল (null) রেজাল্ট ক্যাশ করে রাখা অথবা আগেই ব্লুম ফিল্টার দিয়ে আইডি যাচাই করা' },
          { en: 'Shutting down the server firewall', bn: 'সার্ভার ফায়ারওয়াল বন্ধ করে' },
          { en: 'Allowing all queries to scan the hard drive', bn: 'সব কুয়েরিকে হার্ডডিস্কে খুঁজতে দেওয়া' },
          { en: 'Converting all numbers to zero', bn: 'সব সংখ্যাকে শূন্যে বদলে দেওয়া' }
        ],
        answer: 0,
        hint: {
          en: 'Cache null objects or use Bloom filters.',
          bn: 'নাল অবজেক্ট ক্যাশ করুন বা ব্লুম ফিল্টার ব্যবহার করুন।'
        },
        explanation: {
          en: 'Caching a null sentinel object ensures subsequent requests hit Redis memory rather than querying the primary database.',
          bn: 'নাল ভ্যালু ক্যাশ করে রাখলে পরের বার একই ভুল আইডি খুঁজলে তা সরাসরি মেমরি থেকেই ফেরত যায়।'
        }
      },
      {
        id: 'rsq4',
        kind: 'mcq',
        topic: 'redis: hash sub-field update command',
        question: {
          en: 'Which Redis command updates or sets individual fields inside an existing Hash without replacing the entire entity?',
          bn: 'সম্পূর্ণ অবজেক্ট না মুছে বা না বদলে একটি বিদ্যমান হ্যাশের নির্দিষ্ট ফিল্ডের মান সেট বা আপডেট করতে কোন কমান্ড ব্যবহৃত হয়?'
        },
        options: [
          { en: 'HSET', bn: 'HSET' },
          { en: 'UPDATE', bn: 'UPDATE' },
          { en: 'MODIFY', bn: 'MODIFY' },
          { en: 'INSERT', bn: 'INSERT' }
        ],
        answer: 0,
        hint: {
          en: 'HSET command.',
          bn: 'HSET কমান্ড।'
        },
        explanation: {
          en: 'HSET creates or updates the specified fields in the hash, leaving unmentioned fields untouched.',
          bn: 'HSET অন্য কোনো ফিল্ড ক্ষতিগ্রস্ত না করে কেবল নির্দিষ্ট ফিল্ডটি আপডেট করে।'
        }
      }
    ]
  }
};
