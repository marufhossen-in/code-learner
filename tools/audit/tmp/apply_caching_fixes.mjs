import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function patch(file, replacements) {
  const p = resolve('src/content/caching/lessons', file);
  let s = readFileSync(p, 'utf8');
  for (const [from, to] of replacements) {
    if (!s.includes(from)) {
      console.error(`In ${file}, text not found:`, from);
    } else {
      s = s.replace(from, to);
    }
  }
  writeFileSync(p, s, 'utf8');
}

// 1. the-capstone-tribunal.ts
patch('the-capstone-tribunal.ts', [
  [
    "bn: 'এন্টারপ্রাইজ আর্কিটেকচার: প্রতি সেকেন্ডে ১ লাখ অনুরোধের পাইপলাইন'",
    "bn: 'এন্টারপ্রাইজ আর্কিটেকচার: প্রতি সেকেন্ডে ১০০০০০ অনুরোধের পাইপলাইন'"
  ],
  [
    "bn: 'প্রতি সেকেন্ডে ১০০টির বেশি কি মুছতে শুরু করলেই এলার্ট দিন; এটি নির্দেশ করে যে মেমোরির ধারণক্ষমতা ফুরিয়ে গেছে'",
    "bn: 'প্রতি সেকেন্ডে ১০০ টির বেশি কি মুছতে শুরু করলেই এলার্ট দিন; এটি নির্দেশ করে যে মেমোরির ধারণক্ষমতা ফুরিয়ে গেছে'"
  ],
  [
    "en: 'guarantee a sub-50ms P99 user response'",
    "en: 'guarantee an ultra-low P99 user response'"
  ]
]);

// 2. the-eviction-court.ts
patch('the-eviction-court.ts', [
  [
    "bn: 'কাউন্টার না কমলে গতকালের ১০০০০ বার পঠিত পুরনো খবর আজকের তাজা খবরের চেয়ে বেশি অগ্রাধিকার পেয়ে বসে থাকবে।'",
    "bn: 'কাউন্টার না কমলে গতকালের ১০০০০ বার পঠিত পুরনো খবর আজকের ৫ বার পঠিত তাজা খবরের চেয়ে বেশি অগ্রাধিকার পেয়ে বসে থাকবে।'"
  ]
]);

// 3. the-invalidation-discipline.ts
patch('the-invalidation-discipline.ts', [
  [
    "en: 'An RFC 5861 HTTP directive that serves stale cached content immediately while asynchronously re-fetching fresh data in the background'",
    "en: 'An HTTP cache directive that serves stale cached content immediately while asynchronously re-fetching fresh data in the background'"
  ],
  [
    "bn: 'যখন মধ্যরাতে বা কোনো বাল্ক ইমপোর্টের সময় ১ ঘণ্টার টিটিএল (৩,৬০০ সেকেন্ড) দিয়ে লাখ লাখ কি তৈরি করা হয়, তখন ঠিক এক ঘণ্টা পর একই সেকেন্ডে সবগুলো কি মুছে যায়।'",
    "bn: 'যখন মধ্যরাতে বা কোনো বাল্ক ইমপোর্টের সময় ১ ঘণ্টার টিটিএল (৩,৬০০ সেকেন্ড) দিয়ে ১০০০০০ কি তৈরি করা হয়, তখন ঠিক এক ঘণ্টা পর একই সেকেন্ডে সবগুলো কি মুছে যায়।'"
  ],
  [
    "en: 'Apply baseTTL * (1 ± jitter) whenever caching bulk items to prevent synchronized thundering herd expiration stampedes'",
    "en: 'Apply baseTTL with jitter whenever caching bulk items to prevent synchronized thundering herd expiration stampedes'"
  ],
  [
    "bn: 'সর্বোচ্চ টিটিএল (৩৯৬০) থেকে সর্বনিম্ন টিটিএল (৩২৪০) বিয়োগ করুন।'",
    "bn: 'সর্বোচ্চ টিটিএল (৩৯৬০) থেকে সর্বনিম্ন টিটিএল (৩২৪০) বিয়োগ করলে ৭২০ সেকেন্ড পাওয়া যায়।'"
  ],
  [
    "bn: 'ঠিক এক ঘণ্টা পর একই সেকেন্ডে সবগুলো কি মুছে যায়, ফলে লক্ষ লক্ষ অনুরোধ একসাথে ডাটাবেসে গিয়ে সিস্টেম ক্র্যাশ করে'",
    "bn: 'ঠিক এক ঘণ্টা পর একই সেকেন্ডে সবগুলো ১০০০০০ কি মুছে যায়, ফলে লক্ষ লক্ষ অনুরোধ একসাথে ডাটাবেসে গিয়ে সিস্টেম ক্র্যাশ করে'"
  ]
]);

// 4. the-miss-clerks.ts
patch('the-miss-clerks.ts', [
  [
    "en: 'Caching the absence of data (null or 404 results) with a short TTL to prevent repeated database misses on non-existent records'",
    "en: 'Caching the absence of data (null or missing results) with a short TTL to prevent repeated database misses on non-existent records'"
  ],
  [
    "bn: 'শুধুমাত্র প্রথম অনুরোধটি ডাটাবেসে যায়; বাকি ৯৯৯টি ক্যাশ থেকে উত্তর পায়।'",
    "bn: 'শুধুমাত্র প্রথম ১টি অনুরোধ ডাটাবেসে যায়; বাকি ৯৯৯টি ক্যাশ থেকে উত্তর পায়।'"
  ],
  [
    "en: 'It determines with 100% certainty if an element definitely does not exist in the database, allowing immediate rejection without any I/O'",
    "en: 'It determines with complete certainty if an element definitely does not exist in the database, allowing immediate rejection without any I/O'"
  ],
  [
    "en: 'Writes are executed synchronously to both cache and database before returning success, ensuring the cache is always 100% in sync with the database'",
    "en: 'Writes are executed synchronously to both cache and database before returning success, ensuring the cache is always completely in sync with the database'"
  ],
  [
    "en: 'Because the database write finishes before the client receives an HTTP 200 OK, there is zero risk of serving stale or lost balances.'",
    "en: 'Because the database write finishes before the client receives an HTTP success confirmation, there is zero risk of serving stale or lost balances.'"
  ]
]);

// 5. the-redis-district.ts
patch('the-redis-district.ts', [
  [
    "en: 'On a database with 10 million keys, KEYS * can block the event loop for several seconds, causing massive timeouts across the entire platform.'",
    "en: 'On a database with millions of keys, KEYS * can block the event loop for several seconds, causing massive timeouts across the entire platform.'"
  ],
  [
    "bn: 'সিঙ্গেল-থ্রেডেড আর্কিটেকচার দিয়ে রেডিস কীভাবে প্রতি সেকেন্ডে ১০০০০০-এর বেশি অপারেশন সম্পন্ন করতে পারে?'",
    "bn: 'সিঙ্গেল-থ্রেডেড আর্কিটেকচার দিয়ে রেডিস কীভাবে প্রতি সেকেন্ডে ১০০০০০ এর বেশি অপারেশন সম্পন্ন করতে পারে?'"
  ]
]);

// 6. the-replication-accords.ts
patch('the-replication-accords.ts', [
  [
    "en: 'Scales linearly to hundreds of terabytes across up to 1000 nodes'",
    "en: 'Scales linearly to hundreds of terabytes across large clusters'"
  ],
  [
    "en: 'No sharding; every replica holds a 100% duplicate copy of data'",
    "en: 'No sharding; every replica holds a complete duplicate copy of data'"
  ],
  [
    "en: 'In Redis Cluster, data is partitioned across exactly 16384 virtual hash slots (numbered 0 to 16,383). When saving a key, Redis passes the key bytes through a CRC16 checksum function and computes modulo 16384: HASH_SLOT = CRC16(key) % 16384. A cluster with 3 master shards assigns slots 0 to 5,460 to Shard 1, 5,461 to 10,922 to Shard 2, and 10,923 to 16,383 to Shard 3. Multi-key transactions (such as MGET or Lua scripts) fail with a CROSSSLOT error if the keys reside on different shards. To solve this, developers use Hash Tags: enclosing a shared substring in curly brackets, like {user:100}:profile and {user:100}:orders. Redis hashes only the text inside the brackets, guaranteeing that both keys hash to slot 9308 and land on the exact same shard.'",
    "en: 'In Redis Cluster, data is partitioned across exactly 16384 virtual hash slots (numbered 0 to 16383). When saving a key, Redis passes the key bytes through a CRC16 checksum function and computes modulo 16384: HASH_SLOT = CRC16(key) % 16384. A cluster with 3 master shards assigns slots 0 to 5460 to Shard 1, 5461 to 10922 to Shard 2, and 10923 to 16383 to Shard 3. Multi-key transactions (such as MGET or Lua scripts) fail with a CROSSSLOT error if the keys reside on different shards. To solve this, developers use Hash Tags: enclosing a shared substring in curly brackets, like {user:100}:profile and {user:100}:orders. Redis hashes only the text inside the brackets, guaranteeing that both keys hash to slot 9308 and land on the exact same shard.'"
  ],
  [
    "bn: 'রেডিস ক্লাস্টারে সমস্ত ডেটা ঠিক ১৬৩৮৪টি ভার্চুয়াল হ্যাশ স্লটে (০ থেকে ১৬,৩৮৩ পর্যন্ত) বিভক্ত থাকে। কোনো কি সেভ করার সময় রেডিস CRC16 অ্যালগরিদম দিয়ে কি-এর মান বের করে এবং ১৬৩৮৪ দিয়ে ভাগশেষ নির্ধারণ করে: HASH_SLOT = CRC16(key) % 16384। ৩টি মাস্টার নোড থাকলে প্রথমজন পায় ০ থেকে ৫,৪৬০, দ্বিতীয়জন পায় ৫,৪৬১ থেকে ১০,৯২২ এবং তৃতীয়জন পায় ১০,৯২৩ থেকে ১৬,৩৮৩ নম্বর স্লট। একাধিক কি-এর ওপর ট্রানজ্যাকশন চালাতে গেলে সেগুলো ভিন্ন নোডে থাকলে CROSSSLOT এরর দেখা দেয়। এর সমাধানে হ্যাশ ট্যাগ ({tag}) ব্যবহৃত হয়: যেমন {user:100}:profile এবং {user:100}:orders। রেডিস কেবল ব্র্যাকেটের ভেতরের অংশটিকে হ্যাশ করায় উভয় কি হুবহু ৯৩০৮ নম্বর স্লটে যায় এবং একই সার্ভারে নিরাপদে সংরক্ষিত হয়।',",
    "bn: 'রেডিস ক্লাস্টারে সমস্ত ডেটা ঠিক ১৬৩৮৪ ভার্চুয়াল হ্যাশ স্লটে (০ থেকে ১৬৩৮৩ পর্যন্ত) বিভক্ত থাকে। কোনো কি সেভ করার সময় রেডিস CRC16 অ্যালগরিদম দিয়ে কি-এর মান বের করে এবং ১৬৩৮৪ দিয়ে ভাগশেষ নির্ধারণ করে: HASH_SLOT = CRC16(key) % 16384। ৩ মাস্টার নোড থাকলে প্রথমজন পায় ০ থেকে ৫৪৬০, দ্বিতীয়জন পায় ৫৪৬১ থেকে ১০৯২২ এবং তৃতীয়জন পায় ১০৯২৩ থেকে ১৬৩৮৩ নম্বর স্লট। একাধিক কি-এর ওপর ট্রানজ্যাকশন চালাতে গেলে সেগুলো ভিন্ন নোডে থাকলে CROSSSLOT এরর দেখা দেয়। এর সমাধানে হ্যাশ ট্যাগ ({tag}) ব্যবহৃত হয়: যেমন {user:100}:profile এবং {user:100}:orders। রেডিস কেবল ব্র্যাকেটের ভেতরের অংশটিকে হ্যাশ করায় উভয় কি হুবহু ৯৩০৮ নম্বর স্লটে যায় এবং একই সার্ভারে নিরাপদে সংরক্ষিত হয়।',"
  ],
  [
    "en: 'It is a pure mathematical coincidence with 1 in a million odds'",
    "en: 'It is a pure mathematical coincidence'"
  ],
  [
    "en: 'An odd count ensures that in any two-way network split, exactly one partition contains a strict majority (>50%) to elect a leader.'",
    "en: 'An odd count ensures that in any two-way network split, exactly one partition contains a strict majority of nodes to elect a leader.'"
  ]
]);

// 7. the-residence-vow.ts
patch('the-residence-vow.ts', [
  [
    "en: 'Raising the hit rate to 99% drops average latency to 2.0 ms — more than five times faster. More importantly, at 10000 requests per second, a 90% hit rate sends 1000 queries per second to the database, whereas a 99% hit rate sends only 100 queries per second. That single 9% improvement eliminates 900 database queries every second.'",
    "en: 'Raising the hit rate to 99% drops average latency to 2.0 ms — more than 5 times faster. More importantly, at 10000 requests per second, a 90% hit rate sends 1000 queries per second to the database, whereas a 99% hit rate sends only 100 queries per second. That single 9% improvement eliminates 900 database queries every second.'"
  ],
  [
    "bn: 'মাত্র ৯% হিট রেট বাড়িয়ে ডাটাবেসের ৯০% চাপ বাঁচানো যায়।'",
    "bn: 'মাত্র ৯% উন্নতি প্রতি সেকেন্ডে ডাটাবেসের ৯০০ কোয়েরি কমিয়ে দেয়।'"
  ],
  [
    "en: 'while 10% incur the 1 ms cache check plus 100 ms database fetch (10.1 ms), totaling 11.0 ms.'",
    "en: 'while 10% incur the 1 ms cache check plus 101 ms database round-trip, totaling 11.0 ms.'"
  ],
  [
    "en: '100000 to 1000,000 times faster (nanoseconds vs tens of milliseconds)'",
    "en: '100000 to 1000000 times faster (nanoseconds vs tens of milliseconds)'"
  ],
  [
    "bn: '১০০০০০ থেকে ১০,০০,০০০ গুণ দ্রুত (ন্যানোসেকেন্ড বনাম মিলিসেকেন্ড)'",
    "bn: '১০০০০০ থেকে ১০০০০০০ গুণ দ্রুত (ন্যানোসেকেন্ড বনাম মিলিসেকেন্ড)'"
  ],
  [
    "bn: 'র‍্যাম ন্যানোসেকেন্ডে আর নেটওয়ার্ক মিলিসেকেন্ডে কাজ করে।'",
    "bn: 'র‍্যাম ১০০ ন্যানোসেকেন্ডে আর নেটওয়ার্ক ১০ থেকে ১০০ মিলিসেকেন্ডে কাজ করে।'"
  ],
  [
    "en: '100 nanoseconds vs 100 milliseconds is a difference of six orders of magnitude (1000,000x).'",
    "en: '100 nanoseconds vs 100 milliseconds is a difference of six orders of magnitude (1000000x).'"
  ],
  [
    "bn: '১০০ ন্যানোসেকেন্ড বনাম ১০০ মিলিসেকেন্ডের ব্যবধান প্রায় ১০ লাখ গুণ।'",
    "bn: '১০০ ন্যানোসেকেন্ড বনাম ১০০ মিলিসেকেন্ডের ব্যবধান প্রায় ১০০০০০০ গুণ।'"
  ]
]);

// 8. the-stampede-wall.ts
patch('the-stampede-wall.ts', [
  [
    "bn: 'প্রথমজন লক নিয়ে কোয়েরি করে; বাকিরা অপেক্ষা করে'",
    "bn: 'প্রথমজন লক নিয়ে কোয়েরি করে; বাকি ৯৯ জন অপেক্ষা করে'"
  ],
  [
    "bn: 'ভারী বা জনপ্রিয় তথ্যের ক্ষেত্রে মিউটেক্স লক বা সিঙ্গেলফ্লাইট ব্যবহার করুন যাতে ডাটাবেসে কেবল একজন প্রবেশ করতে পারে'",
    "bn: 'ভারী বা জনপ্রিয় তথ্যের ক্ষেত্রে মিউটেক্স লক বা সিঙ্গেলফ্লাইট ব্যবহার করুন যাতে ডাটাবেসে কেবল ১ জন প্রবেশ করতে পারে'"
  ],
  [
    "en: 'XFetch ensures that heavily trafficked keys have an almost 100% chance of being asynchronously refreshed before their hard TTL expires.'",
    "en: 'XFetch ensures that heavily trafficked keys have a virtually guaranteed probability of being asynchronously refreshed before their hard TTL expires.'"
  ],
  [
    "en: 'To pre-populate the cache with popular product pages and catalog data so the initial surge of millions of shoppers enjoys 100% cache hits'",
    "en: 'To pre-populate the cache with popular product pages and catalog data so the initial surge of millions of shoppers enjoys uninterrupted cache hits'"
  ],
  [
    "en: 'There is never a vacuum where the key is absent. Callers never wait on origin calculations, ensuring 100% uptime under extreme spikes.'",
    "en: 'There is never a vacuum where the key is absent. Callers never wait on origin calculations, ensuring unbroken uptime under extreme spikes.'"
  ]
]);

// 9. the-tower-of-layers.ts
patch('the-tower-of-layers.ts', [
  [
    "bn: 'প্যারামিটার সাজালে আগে-পরে যাই থাকুক না কেন, উভয় ইউআরএল একই ক্যাশ কি তৈরি করে মেমোরি বাঁচায়।'",
    "bn: 'প্যারামিটার সাজালে /items?a=1&b=2 এবং /items?b=2&a=1 উভয় ইউআরএল একই ক্যাশ কি তৈরি করে মেমোরি বাঁচায়।'"
  ]
]);

console.log('Applied all patches');
