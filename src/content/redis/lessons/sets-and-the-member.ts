import type { Lesson } from '../../../lib/types';

export const SetsAndTheMemberLesson: Lesson = {
  slug: 'sets-and-the-member',
  tech: 'redis',
  title: {
    en: 'Redis Sets & Sorted Sets: Sets, ZSETs & Leaderboards',
    bn: 'Redis সেট ও সর্টেড সেট: সেট, ZSET ও লিডারবোর্ড'
  },
  summary: {
    en: 'Master Redis Sets, Sorted Sets (ZSET), and probabilistic HyperLogLog structures across 10 structured topics. Store unique members and execute O(1) membership checks with SADD and SISMEMBER. Compute mathematical intersections and unions using SINTER and SUNION. Explore the dual hash-table and skip-list architecture of Sorted Sets. Build real-time gaming leaderboards with ZINCRBY, ZREVRANK, and ZREVRANGE. Query lexicographical ranges with ZRANGEBYLEX, and count billions of unique visitors using only 12 KB of RAM via HyperLogLog.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Redis সেট, সর্টেড সেট (ZSET) এবং প্রবাবিলিস্টিক হাইপারলগলগ ডেটা স্ট্রাকচার আয়ত্ত করুন। SADD ও SISMEMBER দিয়ে ইউনিক উপাদান সংরক্ষণ ও O(1) গতিতে সদস্যপদ পরীক্ষা করুন। SINTER ও SUNION দিয়ে গানিতিক ইন্টারসেকশন এবং ইউনিয়ন হিসাব করুন। সর্টেড সেটের ডুয়াল হ্যাশ-টেবিল ও স্কিপ-লিস্ট আর্কিটেকচার বুঝুন। ZINCRBY, ZREVRANK এবং ZREVRANGE দিয়ে রিয়েল-টাইম গেমিং লিডারবোর্ড তৈরি করুন। ZRANGEBYLEX দিয়ে লেক্সিকোগ্রাফিক্যাল রেঞ্জ কুয়েরি করুন এবং হাইপারলগলগ দিয়ে মাত্র ১২ কিলোবাইট মেমরিতে কোটি কোটি ইউনিক ভিজিটর গণনা করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'streams-and-the-group',
    tech: 'redis',
    title: {
      en: 'Redis Streams: Event Sourcing, Consumer Groups & PEL',
      bn: 'Redis স্ট্রিমস: ইভেন্ট সোর্সিং, কনজিউমার গ্রুপ ও PEL'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Unordered Sets: Unique Membership & O(1) Lookups', bn: '১. আন-অর্ডারড সেট: অনন্য উপাদান ও O(1) লুকআপ' } },
    {
      type: 'para',
      text: {
        en: 'When you manage collections where duplicate values must be prevented, Redis Sets store unique, unordered binary strings. Implemented internally as a hash table, checking whether an element exists takes constant O(1) time regardless of set size. The `SADD` command inserts new members, `SREM` removes members, and `SISMEMBER` tests membership instantly.',
        bn: 'যখন আপনাকে এমন কোনো কালেকশন পরিচালনা করতে হয় যেখানে ডুপ্লিকেট মান থাকা নিষিদ্ধ, তখন Redis সেট অনন্য স্ট্রিং সংরক্ষণ করে। অভ্যন্তরীণভাবে একটি হ্যাশ টেবিল হিসেবে তৈরি হওয়ায় সেটের আকার যাই হোক না কেন কোনো উপাদান আছে কিনা তা পরীক্ষা করতে ধ্রুব O(1) সময় লাগে। `SADD` নতুন উপাদান যোগ করে, `SREM` উপাদান মুছে দেয় এবং `SISMEMBER` তাৎক্ষণিকভাবে সদস্যপদ যাচাই করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Adding unique tags to an article:
SADD article:1042:tags "redis" "database" "caching" "performance"
# Attempting to add duplicate tag:
SADD article:1042:tags "redis"
# Output: (integer) 0 (Duplicates ignored automatically!)

# Instant O(1) membership check:
SISMEMBER article:1042:tags "caching"
# Output: (integer) 1

# Inspecting total count of members:
SCARD article:1042:tags
# Output: (integer) 4`,
      caption: {
        en: 'Sets enforce uniqueness natively, rejecting duplicate insertions in O(1) time.',
        bn: 'সেট নিজে থেকেই ডুপ্লিকেট মান বাতিল করে এবং O(1) সময়ে অস্তিত্ব নিশ্চিত করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Sorted Set Skip List & Hash Table Dual Architecture', bn: 'সর্টেড সেটের স্কিপ লিস্ট ও হ্যাশ টেবিল ডুয়াল আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis Sorted Set dual Skip List and Hash Table architecture">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="180" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="90" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Hash Table Store</text>
<text x="90" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">Member -> Score Map</text>
<text x="90" y="90" font-size="10" fill="#4ade80" text-anchor="middle">ZSCORE: O(1) time</text>
<text x="90" y="110" font-size="9" fill="#94a3b8" text-anchor="middle">Instant score lookup</text>

<path d="M185,75 L245,75" stroke="#38bdf8" stroke-width="2"/>

<rect x="250" y="20" width="410" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="455" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Skip List Multi-Level Hierarchy</text>

<rect x="270" y="60" width="80" height="25" rx="4" fill="#0f172a" stroke="#38bdf8"/>
<text x="310" y="76" font-size="9" fill="#e2e8f0" text-anchor="middle">Score: 1200</text>

<rect x="380" y="60" width="80" height="25" rx="4" fill="#0f172a" stroke="#38bdf8"/>
<text x="420" y="76" font-size="9" fill="#e2e8f0" text-anchor="middle">Score: 2450</text>

<rect x="490" y="60" width="80" height="25" rx="4" fill="#0f172a" stroke="#38bdf8"/>
<text x="530" y="76" font-size="9" fill="#e2e8f0" text-anchor="middle">Score: 9800</text>

<path d="M350,72 L380,72 M460,72 L490,72" stroke="#10b981" stroke-width="2"/>
<text x="455" y="112" font-size="9" fill="#fbbf24" text-anchor="middle">ZRANK & ZRANGE: Logarithmic O(log N) Ordering</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Mathematical Set Operations: SINTER, SUNION & SDIFF', bn: '২. গাণিতিক সেট অপারেশন: SINTER, SUNION ও SDIFF' } },
    {
      type: 'para',
      text: {
        en: 'Redis executes set mathematics directly inside server RAM. SINTER computes the intersection of multiple sets (such as common interests between friends). SUNION merges sets together, while SDIFF returns members present in the first set but absent in subsequent sets. SINTERSTORE writes the result directly to a new key in memory.',
        bn: 'Redis সরাসরি সার্ভারের মেমরিতে দ্রুতগতির গাণিতিক সেট অপারেশন সম্পন্ন করে। SINTER একাধিক সেটের মধ্যকার সাধারণ উপাদানগুলো (যেমন বন্ধুদের কমন পছন্দ) বের করে আনে। SUNION একাধিক সেটকে একত্রিত করে এবং SDIFF প্রথম সেটে থাকা কিন্তু অন্য সেটে না থাকা উপাদানগুলোকে আলাদা করে। SINTERSTORE ফলাফলটিকে সরাসরি নতুন কি হিসেবে সেভ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Finding mutual followers between two users:
SADD user:101:following "alice" "bob" "charlie" "david"
SADD user:202:following "bob" "david" "elena"

# Compute common friends (Intersection):
SINTER user:101:following user:202:following
# Output:
# 1) "bob"
# 2) "david"

# Store intersection into cache for 1 hour:
SINTERSTORE mutual:101:202 user:101:following user:202:following
EXPIRE mutual:101:202 3600`,
      caption: {
        en: 'Set algebra executes in RAM, eliminating relational database JOIN complexity.',
        bn: 'সেট অ্যালজেব্রা সরাসরি মেমরিতে সম্পন্ন হয়ে জটিল ডাটাবেস জয়েনের ঝামেলা দূর করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Random Sampling & Lotteries: SRANDMEMBER vs SPOP', bn: '৩. র্যান্ডম স্যাম্পলিং ও লটারি: SRANDMEMBER বনাম SPOP' } },
    {
      type: 'para',
      text: {
        en: 'Selecting random elements is common in lottery systems, recommendation engines, and load balancers. SRANDMEMBER returns random members without altering the set. SPOP selects and deletes random elements from the set atomically, making it ideal for raffle ticket drawings and non-repeating item distribution.',
        bn: 'লটারি, সুপারিশ ইঞ্জিন বা লোড ব্যালান্সারে এলোমেলো উপাদান বাছাই করার প্রয়োজন হয়। SRANDMEMBER সেট অপরিবর্তিত রেখে র্যান্ডম উপাদান প্রদর্শন করে। আর SPOP র্যান্ডম উপাদান নির্বাচন করার সাথে সাথে সেট থেকে তা মুছে দেয়, যা পুরস্কারের লটারি বা কাউকে একবারই কোনো টোকেন দেওয়ার জন্য চমৎকার।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `SADD raffle:contestants "usr_1" "usr_2" "usr_3" "usr_4" "usr_5"

# Sample 2 winners WITHOUT removing them from the pool:
SRANDMEMBER raffle:contestants 2

# Draw 1 grand prize winner and atomically REMOVE from pool:
SPOP raffle:contestants
# Output: "usr_3" (usr_3 cannot win twice!)`,
      caption: {
        en: 'SPOP ensures non-repeating fair random drawings directly inside memory.',
        bn: 'SPOP মেমরির ভেতর শতভাগ নিরপেক্ষ ও পুনরাবৃত্তিহীন লটারি নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Sorted Sets (ZSET): The Score-Value Model', bn: '৪. সর্টেড সেট (ZSET): স্কোর-ভ্যালু মডেল' } },
    {
      type: 'para',
      text: {
        en: 'A Sorted Set (ZSET) is one of the most powerful data structures in Redis. Like a standard Set, every member is unique. However, every member is paired with a floating-point score. Redis maintains the collection in strict numerical score order at all times.',
        bn: 'সর্টেড সেট (ZSET) হলো Redis-এর অন্যতম শক্তিশালী ডেটা স্ট্রাকচার। সাধারণ সেটের মতো এর প্রতিটি উপাদান অনন্য হয়। তবে এতে প্রতিটি উপাদানের সাথে একটি ফ্লোটিং-পয়েন্ট স্কোর থাকে। Redis সার্বক্ষণিকভাবে উপাদানগুলোকে তাদের স্কোরের ঊর্ধ্বক্রম অনুসারে সুসংগঠিতভাবে সাজিয়ে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Adding players with their initial scores:
ZADD leaderboard 1450 "PlayerA" 2890 "PlayerB" 950 "PlayerC"
# Output: (integer) 3

# Querying total count of ranked players:
ZCARD leaderboard
# Output: (integer) 3

# Checking a player score:
ZSCORE leaderboard "PlayerB"
# Output: "2890"`,
      caption: {
        en: 'Sorted Sets pair unique members with floating-point scores for automatic ranking.',
        bn: 'সর্টেড সেট প্রতিটি উপাদানের সাথে স্কোর যুক্ত করে স্বয়ংক্রিয় লিডারবোর্ড বানায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Dual Architecture: Hash Table + Skip List', bn: '৫. ডুয়াল আর্কিটেকচার: হ্যাশ টেবিল ও স্কিপ লিস্ট' } },
    {
      type: 'para',
      text: {
        en: 'To achieve both instant lookups and fast range queries, Redis implements Sorted Sets using two coordinated data structures. First, a Hash Table maps members to scores in O(1) time. Second, a Skip List maintains elements ordered by score, allowing rank lookups and range scans in logarithmic O(log N) time.',
        bn: 'একই সাথে তাৎক্ষণিক লুকআপ ও দ্রুত রেঞ্জ কুয়েরি করতে Redis সমান্তরাল দুটি কাঠামোর সমন্বয়ে সর্টেড সেট তৈরি করে। প্রথমে একটি হ্যাশ টেবিল সদস্য থেকে স্কোরের ম্যাপিং O(1) সময়ে দেয়। দ্বিতীয়ত একটি স্কিপ লিস্ট স্কোর অনুসারে উপাদান সাজিয়ে রাখে, ফলে র‍্যাঙ্ক এবং রেঞ্জ খোঁজার কাজ O(log N) সময়ে সম্পন্ন হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `ZSET DUAL DATA STRUCTURE:
Member "PlayerA" (Score: 1450)
  |---> Hash Table Entry : "PlayerA" => 1450           (O(1) ZSCORE)
  |---> Skip List Node   : [Level 3] -> [Level 2] -> 1450 (O(log N) ZRANK)`,
      caption: {
        en: 'Skip lists deliver balanced-tree logarithmic performance without complex rebalancing locks.',
        bn: 'স্কিপ লিস্ট কোনো জটিল লকিং ছাড়াই ব্যালান্সড-ট্রির মতো O(log N) গতি নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Building Real-Time Leaderboards: ZINCRBY & ZREVRANK', bn: '৬. রিয়েল-টাইম লিডারবোর্ড তৈরি: ZINCRBY ও ZREVRANK' } },
    {
      type: 'para',
      text: {
        en: 'In gaming and financial tickers, scores update continuously. ZINCRBY atomically increments a member’s score, automatically shifting their rank in the skip list. ZREVRANK returns a player’s 0-based rank from highest to lowest score, while ZREVRANGE fetches the top N players instantly.',
        bn: 'গেমিং বা লাইভ ট্রেডিংয়ে স্কোর প্রতিনিয়ত পরিবর্তিত হয়। ZINCRBY অবিভাজ্যভাবে কোনো খেলোয়াড়ের স্কোর বাড়িয়ে সাথে সাথে স্কিপ লিস্টে তার নতুন র‍্যাঙ্ক নির্ধারণ করে। ZREVRANK সর্বোচ্চ স্কোরের ভিত্তিতে খেলোয়াড়ের অবস্থান জানায় এবং ZREVRANGE নিমিষেই শীর্ষ খেলোয়াড়দের তালিকা বের করে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Increment score of PlayerC by 2000 points:
ZINCRBY leaderboard 2000 "PlayerC"
# Output: "2950" (PlayerC now has highest score!)

# Check 0-based rank of PlayerC (Highest score first):
ZREVRANK leaderboard "PlayerC"
# Output: (integer) 0 (Rank #1 globally!)

# Fetch top 2 players with scores:
ZREVRANGE leaderboard 0 1 WITHSCORES
# Output:
# 1) "PlayerC"
# 2) "2950"
# 3) "PlayerB"
# 4) "2890"`,
      caption: {
        en: 'ZREVRANK and ZREVRANGE provide real-time top-N leaderboards across millions of gamers.',
        bn: 'ZREVRANK ও ZREVRANGE লাখ লাখ গেমারের মাঝে রিয়েল-টাইম লিডারবোর্ড প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Lexicographical Slicing & Auto-Complete: ZRANGEBYLEX', bn: '৭. লেক্সিকোগ্রাফিক্যাল স্লাইসিং ও অটো-কমপ্লিট' } },
    {
      type: 'para',
      text: {
        en: 'When all members in a Sorted Set have identical scores (e.g. score: 0), Redis orders elements strictly in alphabetical (lexicographical) order. Using ZRANGEBYLEX, applications execute instant dictionary prefix searches, implementing lightning-fast auto-complete search bars.',
        bn: 'যখন একটি সর্টেড সেটের সব উপাদানের স্কোর সমান (যেমন ০) রাখা হয়, তখন Redis উপাদানগুলোকে হুবহু বর্ণমালার ক্রমানুসারে সাজায়। ZRANGEBYLEX কমান্ড ব্যবহার করে অ্যাপ্লিকেশনগুলো অভিধানের মতো প্রিফিক্স সার্চ করতে পারে, যা বিদ্যুৎগতির সার্চ অটো-কমপ্লিট তৈরি করতে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Populate dictionary prefix list with score 0:
ZADD autocomplete 0 "apple" 0 "application" 0 "apply" 0 "banana" 0 "band"

# Find words starting with "app" (Lexicographical bracket range):
ZRANGEBYLEX autocomplete "[app" "[app\\xff"
# Output:
# 1) "apple"
# 2) "application"
# 3) "apply"`,
      caption: {
        en: 'Zero-score Sorted Sets function as fast lexicographical search tries for auto-complete.',
        bn: 'সমান স্কোরের সর্টেড সেট দ্রুতগতির বর্ণানুক্রমিক অটো-কমপ্লিট ইঞ্জিন হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. HyperLogLog: Counting Billions with 12 KB Memory', bn: '৮. হাইপারলগলগ: মাত্র ১২ কিলোবাইটে শত কোটি গণনা' } },
    {
      type: 'para',
      text: {
        en: 'Storing billions of unique user IDs in a standard Set requires over 10 gigabytes of RAM. HyperLogLog is a probabilistic cardinality estimation algorithm. It counts billions of unique items with a standard error of 0.81 percent, using a constant maximum of 12 kilobytes of memory per key.',
        bn: 'কোটি কোটি ইউনিক ইউজারের আইডি একটি সাধারণ সেটে রাখতে গেলে ১০ গিগাবাইটেরও বেশি র‍্যাম লেগে যায়। হাইপারলগলগ (HyperLogLog) হলো একটি বিশেষ প্রবাবিলিস্টিক গণনা অ্যালগরিদম। এটি মাত্র ০.৮১ শতাংশ ত্রুটি রেখে যেকোনো সংখ্যক অনন্য উপাদান গণনা করতে পারে এবং প্রতিটি কি-র জন্য সর্বোচ্চ মাত্র ১২ কিলোবাইট মেমরি ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Adding elements to a HyperLogLog structure:
PFADD site:unique_visitors "user_101" "user_202" "user_303"
# Output: (integer) 1

# Adding duplicate member:
PFADD site:unique_visitors "user_101"
# Output: (integer) 0 (Discovered existing hash pattern!)

# Query approximate unique cardinality:
PFCOUNT site:unique_visitors
# Output: (integer) 3 (Standard error < 0.81%)`,
      caption: {
        en: 'HyperLogLog provides constant 12 KB memory footprints regardless of cardinality scale.',
        bn: 'হাইপারলগলগ ডেটার পরিমাণ কোটি কোটি হলেও সর্বদা সর্বোচ্চ ১২ কিলোবাইট মেমরি নেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: Sets vs ZSETs vs HyperLogLog', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: সেট বনাম ZSET বনাম হাইপারলগলগ' } },
    {
      type: 'para',
      text: {
        en: 'Choosing the right structure depends on business precision requirements: Use Sets when you require 100 percent exact uniqueness and set algebra. Use Sorted Sets when you need ordered score rankings or sliding-window rate limiters. Use HyperLogLog when estimating massive cardinality where 1 percent variance is acceptable.',
        bn: 'সঠিক ডেটা টাইপ বেছে নেওয়া নির্ভর করে নিখুঁত মানের চাহিদার ওপর: যখন ১০০ শতাংশ নিখুঁত ইউনিক মান ও গাণিতিক অপারেশন দরকার তখন সাধারণ সেট ব্যবহার করুন। যখন স্কোর অনুযায়ী সাজানো বা রেট লিমিটিং দরকার তখন সর্টেড সেট ব্যবহার করুন। আর যখন ১ শতাংশ ত্রুটি মেনে নিয়ে কোটি কোটি ইউনিক গণনা করতে চান তখন হাইপারলগলগ বেছে নিন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `CARDINALITY & RANKING COMPARISON:
+-------------------+--------------------+--------------------+--------------------+
| Dimension         | Redis Set          | Sorted Set (ZSET)  | HyperLogLog (HLL)  |
+-------------------+--------------------+--------------------+--------------------+
| Uniqueness        | 100% Exact         | 100% Exact         | 99.19% Accurate    |
| Score / Ordering  | Unordered          | Ordered by Score   | None               |
| Memory Usage      | High (Stores IDs)  | Highest (Skip List)| Constant 12 KB     |
| Retrieve Members  | Yes (SMEMBERS)     | Yes (ZRANGE)       | No (Count Only!)   |
| Primary Use Case  | Unique Tags / Auth | Gaming Leaderboard | Daily Unique Users |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Compare precision requirements against memory budgets when selecting set structures.',
        bn: 'মেমরি বাজেট ও নিখুঁততার ওপর ভিত্তি করে উপযুক্ত সেট স্ট্রাকচার নির্বাচন করুন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing a Production Gaming Leaderboard in Node.js', bn: '১০. Node.js-এ প্রোডাকশন গেমিং লিডারবোর্ড বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a high-concurrency gaming leaderboard class in Node.js utilizing ioredis with score updates, rank lookups, and top-N queries.',
        bn: 'নিচে ioredis ব্যবহার করে তৈরি একটি পূর্ণাঙ্গ প্রোডাকশন গেমিং লিডারবোর্ড ক্লাস দেওয়া হলো যা দ্রুত স্কোর আপডেট ও গ্লোবাল র‍্যাঙ্ক প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";
const redis = new Redis("redis://127.0.0.1:6379");

class LeaderboardService {
  static async addScore(userId, points) {
    // Atomically increments user score in O(log N) time:
    return await redis.zincrby("game:leaderboard", points, userId);
  }

  static async getUserRank(userId) {
    // Returns 1-based rank (ZREVRANK is 0-based):
    const rank = await redis.zrevrank("game:leaderboard", userId);
    const score = await redis.zscore("game:leaderboard", userId);
    return rank !== null ? { rank: rank + 1, score: Number(score) } : null;
  }

  static async getTopPlayers(limit = 10) {
    const raw = await redis.zrevrange("game:leaderboard", 0, limit - 1, "WITHSCORES");
    const results = [];
    for (let i = 0; i < raw.length; i += 2) {
      results.push({ userId: raw[i], score: Number(raw[i + 1]) });
    }
    return results;
  }
}

console.log("Production gaming leaderboard service initialized successfully");
// Output: Production gaming leaderboard service initialized successfully`,
      caption: {
        en: 'Production leaderboard service combining ZINCRBY, ZREVRANK, and ZREVRANGE.',
        bn: 'ZINCRBY, ZREVRANK ও ZREVRANGE সমন্বয়ে তৈরি প্রোডাকশন লিডারবোর্ড সার্ভিস।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-set-ex1',
      kind: 'predict',
      topic: 'redis: hyperloglog max memory in KB',
      question: {
        en: 'What is the maximum memory allocation in kilobytes consumed by a Redis HyperLogLog structure regardless of the number of elements counted?',
        bn: 'যত সংখ্যক উপাদানই গণনা করা হোক না কেন, একটি Redis HyperLogLog সর্বোচ্চ কত কিলোবাইট মেমরি ব্যবহার করে?'
      },
      code: `/* HyperLogLog Maximum Memory in KB: */
/* max_memory = __ KB */`,
      answer: '12',
      accept: ['12', '12KB', '12 KB'],
      hint: {
        en: '12 kilobytes.',
        bn: '১২ কিলোবাইট।'
      },
      explanation: {
        en: 'HyperLogLog registers use a fixed dense encoding of 12 KB, providing 99.19% estimation accuracy across billions of items.',
        bn: 'হাইপারলগলগ মাত্র ১২ কিলোবাইট স্থায়ী মেমরি ব্যবহার করে শত কোটি ইউনিক ডেটা গণনা করতে পারে।'
      }
    },
    {
      id: 'red-set-ex2',
      kind: 'mcq',
      topic: 'redis: set intersection command',
      question: {
        en: 'Which Redis command computes the common elements shared across multiple Sets (mathematical intersection)?',
        bn: 'একাধিক সেটের মধ্যকার সাধারণ বা কমন উপাদানগুলো (গাণিতিক ইন্টারসেকশন) বের করতে কোন Redis কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'SINTER', bn: 'SINTER' },
        { en: 'SUNION', bn: 'SUNION' },
        { en: 'SDIFF', bn: 'SDIFF' },
        { en: 'SMEMBERS', bn: 'SMEMBERS' }
      ],
      answer: 0,
      hint: {
        en: 'The SINTER command.',
        bn: 'SINTER কমান্ড।'
      },
      explanation: {
        en: 'SINTER computes the set intersection of all specified keys directly in memory.',
        bn: 'SINTER সরাসরি মেমরিতে একাধিক সেটের মধ্যকার কমন উপাদানগুলো খুঁজে বের করে।'
      }
    },
    {
      id: 'red-set-ex3',
      kind: 'mcq',
      topic: 'redis: zset rank time complexity',
      question: {
        en: 'What is the algorithmic time complexity of ranking lookups (such as ZRANK or ZREVRANK) in a Redis Sorted Set?',
        bn: 'Redis সর্টেড সেটে কোনো উপাদানের অবস্থান বা র‍্যাঙ্ক বের করার (যেমন ZRANK বা ZREVRANK) টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        { en: 'O(log N)', bn: 'O(log N)' },
        { en: 'O(N^2)', bn: 'O(N^2)' },
        { en: 'O(N!)', bn: 'O(N!)' },
        { en: 'O(1/N)', bn: 'O(1/N)' }
      ],
      answer: 0,
      hint: {
        en: 'Logarithmic time O(log N).',
        bn: 'লগারিদমিক সময় O(log N)।'
      },
      explanation: {
        en: 'Sorted Sets maintain elements in an internal skip list, providing logarithmic O(log N) traversal for rank queries.',
        bn: 'সর্টেড সেট ভেতরে স্কিপ লিস্ট ব্যবহার করায় র‍্যাঙ্ক খোঁজার গতি হয় লগারিদমিক O(log N)।'
      }
    }
  ],
  quiz: {
    id: 'red-set-quiz',
    title: { en: 'Redis Sets, ZSETs & HyperLogLog Quiz', bn: 'Redis সেট, ZSET ও হাইপারলগলগ কুইজ' },
    questions: [
      {
        id: 'rzkq1',
        kind: 'mcq',
        topic: 'redis: zset dual internal structures',
        question: {
          en: 'Which two internal data structures does Redis maintain concurrently to power a Sorted Set (ZSET)?',
          bn: 'সর্টেড সেট (ZSET) পরিচালনার জন্য Redis একসাথে কোন দুটি অভ্যন্তরীণ ডেটা স্ট্রাকচার বজায় রাখে?'
        },
        options: [
          { en: 'A Hash Table (for O(1) score lookups) and a Skip List (for O(log N) ordered range scans)', bn: 'একটি হ্যাশ টেবিল (O(1) স্কোর লুকআপের জন্য) এবং একটি স্কিপ লিস্ট (O(log N) রেঞ্জ স্ক্যানের জন্য)' },
          { en: 'A text file and an Excel spreadsheet', bn: 'একটি টেক্সট ফাইল এবং একটি এক্সেল শিট' },
          { en: 'Two relational SQL tables', bn: 'দুটি রিলেশনাল এসকিউএল টেবিল' },
          { en: 'An uncompressed binary string array', bn: 'একটি আনকমপ্রেসড বাইনারি স্ট্রিং অ্যারে' }
        ],
        answer: 0,
        hint: {
          en: 'Hash Table and Skip List.',
          bn: 'হ্যাশ টেবিল এবং স্কিপ লিস্ট।'
        },
        explanation: {
          en: 'The dual hash table and skip list design guarantees both instant score lookups and rapid score-ordered traversals.',
          bn: 'হ্যাশ টেবিল তাৎক্ষণিক স্কোর এবং স্কিপ লিস্ট ক্রমানুসারে সাজানো রেঞ্জ দ্রুত খুঁজে দিতে সাহায্য করে।'
        }
      },
      {
        id: 'rzkq2',
        kind: 'mcq',
        topic: 'redis: random element atomic removal',
        question: {
          en: 'Which Redis Set command selects a random element from a Set and atomically removes it (ideal for lottery drawings)?',
          bn: 'কোন Redis সেট কমান্ডটি সেট থেকে একটি র্যান্ডম উপাদান বেছে নেয় এবং সাথে সাথে তা মুছে ফেলে (লটারির জন্য আদর্শ)?'
        },
        options: [
          { en: 'SPOP', bn: 'SPOP' },
          { en: 'SRANDMEMBER', bn: 'SRANDMEMBER' },
          { en: 'SDEL', bn: 'SDEL' },
          { en: 'SREMOVE', bn: 'SREMOVE' }
        ],
        answer: 0,
        hint: {
          en: 'SPOP removes and returns.',
          bn: 'SPOP তুলে এনে মুছে দেয়।'
        },
        explanation: {
          en: 'SPOP pops random elements and removes them, whereas SRANDMEMBER returns random elements without modifying the set.',
          bn: 'SPOP উপাদানটি মুছে ফেরত দেয়, আর SRANDMEMBER সেট অক্ষত রেখে শুধু দেখায়।'
        }
      },
      {
        id: 'rzkq3',
        kind: 'mcq',
        topic: 'redis: hyperloglog standard error rate',
        question: {
          en: 'What is the standard error rate of cardinality estimates computed by Redis HyperLogLog?',
          bn: 'Redis HyperLogLog দিয়ে করা গণনার স্ট্যান্ডার্ড ভুলের হার (Standard Error) কত শতাংশ?'
        },
        options: [
          { en: '0.81%', bn: '০.৮১%' },
          { en: '15.0%', bn: '১৫.০%' },
          { en: '50.0%', bn: '৫০.০%' },
          { en: '0.0% (always exact)', bn: '০.০% (সর্বদা নিখুঁত)' }
        ],
        answer: 0,
        hint: {
          en: '0.81 percent standard error.',
          bn: '০.৮১ শতাংশ ত্রুটির হার।'
        },
        explanation: {
          en: 'HyperLogLog uses 16,384 registers to achieve a low standard error of 0.81% across massive datasets.',
          bn: 'হাইপারলগলগ ১৬,৩৮৪টি রেজিস্টার ব্যবহার করে মাত্র ০.৮১% সম্ভাব্য ভুলের মধ্যে কোটি কোটি ইউনিক মান গণনা করে।'
        }
      },
      {
        id: 'rzkq4',
        kind: 'mcq',
        topic: 'redis: zset auto-complete prefix search',
        question: {
          en: 'How can developers implement auto-complete dictionary prefix lookups using Redis Sorted Sets?',
          bn: 'Redis সর্টেড সেট ব্যবহার করে কীভাবে ডিকশনারি সার্চ অটো-কমপ্লিট তৈরি করা যায়?'
        },
        options: [
          { en: 'By assigning all members identical scores (e.g. 0) and querying with ZRANGEBYLEX', bn: 'সব উপাদানের স্কোর সমান (যেমন ০) রেখে ZRANGEBYLEX দিয়ে বর্ণানুক্রমিক রেঞ্জ অনুসন্ধান করে' },
          { en: 'By running KEYS * on the database', bn: 'ডাটাবেসে KEYS * কমান্ড চালিয়ে' },
          { en: 'By encrypting all words with AES-256', bn: 'সব শব্দ এনক্রিপ্ট করে' },
          { en: 'It is impossible to do in Redis', bn: 'রেডিসে এটি করা অসম্ভব' }
        ],
        answer: 0,
        hint: {
          en: 'Score 0 with ZRANGEBYLEX.',
          bn: 'স্কোর ০ সহ ZRANGEBYLEX।'
        },
        explanation: {
          en: 'When scores are identical, Sorted Sets order members lexicographically, allowing ZRANGEBYLEX to match prefix boundaries.',
          bn: 'স্কোর এক হলে সর্টেড সেট বর্ণমালার ক্রমে ডেটা সাজায়, যা ZRANGEBYLEX দিয়ে অটো-কমপ্লিট করতে সাহায্য করে।'
        }
      }
    ]
  }
};
