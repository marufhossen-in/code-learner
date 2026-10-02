import type { Lesson } from '../../../lib/types';

export const TheRedisReleaseLesson: Lesson = {
  slug: 'the-redis-release',
  tech: 'redis',
  title: {
    en: 'Redis in Production: Transactions, Pipelines & Clustering',
    bn: 'প্রোডাকশনে Redis: ট্রানজ্যাকশন, পাইপলাইনিং ও ক্লাস্টারিং'
  },
  summary: {
    en: 'Master enterprise-grade Redis production architecture across 10 structured topics. Slash network round-trip latency using command Pipelining. Execute atomic transaction blocks with MULTI, EXEC, and optimistic WATCH locks. Build atomic server-side workflows using Lua scripts and Redis Functions. Implement safe distributed locks with Redlock principles and random tokens. High-availability master failovers with Redis Sentinel. Scale horizontally to hundreds of nodes using 16,384 hash slots in Redis Cluster. Tune maxmemory eviction policies, enforce ACL access controls, and build robust failover-safe clients in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে এন্টারপ্রাইজ গ্রেড Redis প্রোডাকশন আর্কিটেকচার আয়ত্ত করুন। কমান্ড পাইপলাইনিং দিয়ে নেটওয়ার্ক লেটেন্সি কমিয়ে আনুন। MULTI, EXEC এবং অপটিমিস্টিক WATCH লকিং দিয়ে অবিভাজ্য ট্রানজ্যাকশন পরিচালনা শেখা যাবে। লুয়া (Lua) স্ক্রিপ্ট এবং ফাংশন দিয়ে সার্ভার সাইড অটোমেশন বানাতে পারবেন। রেডলক নীতি ও র্যান্ডম টোকেন দিয়ে নিরাপদ ডিস্ট্রিবিউটেড লক ব্যবহারের নিয়ম জানুন। সেন্টিনেল (Sentinel) দিয়ে স্বয়ংক্রিয় ফেইলওভার নিশ্চিত রাখুন। ১৬,৩৮৪টি হ্যাশ স্লটের মাধ্যমে Redis ক্লাস্টারে অনুভূমিকভাবে স্কেল করার কৌশল দেখুন। maxmemory এভিকশন পলিসি ও ACL নিরাপত্তা বিশ্লেষণ ও Node.js-এ ক্লাস্টার ক্লায়েন্ট বাস্তবায়ন জানুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Pipelining: Slashing Network Round-Trip Time (RTT)', bn: '১. পাইপলাইনিং: নেটওয়ার্ক রাউন্ড-ট্রিপ সময় সাশ্রয়' } },
    {
      type: 'para',
      text: {
        en: 'When a client executes 1,000 commands individually across a network with 2 milliseconds latency, the client wastes 2,000 milliseconds waiting for individual ACKs. Redis Pipelining allows clients to bundle multiple commands into a single TCP socket packet, reducing network overhead to a single round-trip and boosting throughput dramatically.',
        bn: 'যখন কোনো ক্লায়েন্ট ২ মিলিসেকেন্ড লেটেন্সির নেটওয়ার্কে ১,০০০টি কমান্ড আলাদাভাবে পাঠায়, তখন রেসপন্সের অপেক্ষায় মোট ২,০০০ মিলিসেকেন্ড সময় নষ্ট হয়। Redis পাইপলাইনিং ক্লায়েন্টকে একসাথে অনেকগুলো কমান্ড একটিমাত্র টিসিপি প্যাকেটে পাঠাতে দেয়, যা নেটওয়ার্কের রাউন্ড-ট্রিপ কমিয়ে গতি বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `STANDARD EXECUTION (Sequential RTT):
Client -> [SET a 1] --------> Server (Wait 2ms)
Client <- [OK] <------------- Server
Client -> [SET b 2] --------> Server (Wait 2ms)
Client <- [OK] <------------- Server
Total: 4ms for 2 commands

PIPELINED EXECUTION (Batched RTT):
Client -> [SET a 1; SET b 2; SET c 3] -> Server (Single 2ms trip!)
Client <- [OK; OK; OK] <---------------- Server
Total: 2ms for 3 commands`,
      caption: {
        en: 'Pipelining groups commands into a single TCP frame, eliminating sequential network delays.',
        bn: 'পাইপলাইনিং কমান্ডগুলোকে একটি প্যাকেটে পাঠায় এবং নেটওয়ার্কের অযথা কালক্ষেপণ দূর করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Redis Enterprise Architecture: Sentinel vs Cluster Sharding', bn: 'Redis এন্টারপ্রাইজ আর্কিটেকচার: সেন্টিনেল বনাম ক্লাস্টার শার্ডিং' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis Sentinel and Cluster architecture">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="290" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="145" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Redis Sentinel (High Availability)</text>
<rect x="20" y="48" width="110" height="35" rx="4" fill="#1e293b" stroke="#10b981"/>
<text x="75" y="68" font-size="9" fill="#4ade80" text-anchor="middle">Master Node (Writes)</text>
<rect x="160" y="48" width="110" height="35" rx="4" fill="#1e293b" stroke="#f59e0b"/>
<text x="215" y="68" font-size="9" fill="#fbbf24" text-anchor="middle">Replica Node (Reads)</text>
<text x="145" y="115" font-size="9" fill="#cbd5e1" text-anchor="middle">3 Sentinels Monitor & Auto-Failover</text>

<rect x="330" y="10" width="310" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="485" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Redis Cluster (16,384 Hash Slots)</text>
<rect x="345" y="48" width="85" height="35" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="387" y="68" font-size="8" fill="#e2e8f0" text-anchor="middle">Slots: 0 - 5460</text>
<rect x="442" y="48" width="85" height="35" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="484" y="68" font-size="8" fill="#e2e8f0" text-anchor="middle">Slots: 5461 - 10922</text>
<rect x="540" y="48" width="85" height="35" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="582" y="68" font-size="8" fill="#e2e8f0" text-anchor="middle">Slots: 10923 - 16383</text>
<text x="485" y="115" font-size="9" fill="#fbbf24" text-anchor="middle">Horizontal Linear Scale across Shards</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Transactions in Redis: MULTI, EXEC & DISCARD', bn: '২. Redis-এ ট্রানজ্যাকশন: MULTI, EXEC ও DISCARD' } },
    {
      type: 'para',
      text: {
        en: 'A Redis transaction begins with MULTI and commits with EXEC. Commands queued inside MULTI are executed sequentially as an isolated unit without any other client commands interleaving. However, Redis transactions do not support rollbacks on runtime syntax or data type errors: valid commands still commit even if one command fails.',
        bn: 'Redis ট্রানজ্যাকশন শুরু হয় MULTI দিয়ে এবং সম্পন্ন হয় EXEC দিয়ে। MULTI-এর মধ্যে জমা হওয়া সমস্ত কমান্ড ধারাবাহিকভাবে একটি অবিভাজ্য ইউনিট হিসেবে চলে এবং অন্য কোনো ক্লায়েন্টের কমান্ড এর মাঝে ঢুকতে পারে না। তবে রানটাইম ত্রুটিতে Redis রোলব্যাক সমর্থন করে না: একটি ভুল কমান্ড থাকলেও বাকি সঠিক কমান্ডগুলো মেমরিতে সেভ হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Beginning atomic transaction block:
MULTI
# Output: OK

# Queueing commands:
SET account:101:balance 450
# Output: QUEUED
INCR counter:transfers
# Output: QUEUED

# Execute transaction atomically:
EXEC
# Output:
# 1) OK
# 2) (integer) 1`,
      caption: {
        en: 'Commands within MULTI and EXEC run sequentially without interleaving other client queries.',
        bn: 'MULTI ও EXEC ব্লকের ভেতরের কমান্ডগুলো অন্য কোনো কুয়েরির হস্তক্ষেপ ছাড়াই চলে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Optimistic Locking with WATCH: Preventing Race Conditions', bn: '৩. WATCH দিয়ে অপটিমিস্টিক লকিং: রেস কন্ডিশন প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'Standard MULTI does not allow reading a value to conditionally calculate the next write. The WATCH command provides optimistic locking. It monitors specified keys: if any other client alters a watched key before EXEC executes, the entire transaction is automatically aborted, returning a null multi-bulk reply.',
        bn: 'সাধারণ MULTI ব্লকে কোনো মান পড়ে সেটির ওপর ভিত্তি করে নতুন মান হিসাব করা যায় না। WATCH কমান্ড অপটিমিস্টিক লকিংয়ের মাধ্যমে এটি সমাধান করে। এটি নির্দিষ্ট কি-গুলো পর্যবেক্ষণ করে: EXEC চালানোর আগে অন্য কোনো ক্লায়েন্ট ওই কি পরিবর্তন করলে পুরো ট্রানজ্যাকশন বাতিল হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Optimistic balance deduction pattern:
WATCH account:user_42:balance

# Read current balance in application:
# balance = 500

MULTI
DECRBY account:user_42:balance 100
SET account:user_42:last_deduct 1727352000

# If another client modified account:user_42:balance in the meantime:
EXEC
# Output: (nil) -> Transaction aborted cleanly due to collision!`,
      caption: {
        en: 'WATCH detects concurrent modifications, aborting colliding transactions safely.',
        bn: 'WATCH সমান্তরাল পরিবর্তন শনাক্ত করে ট্রানজ্যাকশন বাতিল করে ডেটার ভারসাম্য রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Lua Scripting & Functions: Pure Atomic Server Workflows', bn: '৪. লুয়া স্ক্রিপ্টিং ও ফাংশন: শতভাগ অবিভাজ্য সার্ভার লজিক' } },
    {
      type: 'para',
      text: {
        en: 'While WATCH requires network round-trips to retry aborted transactions, Lua scripts execute directly inside the single-threaded Redis engine. Because the entire Lua script runs atomically without interruption, it can read, compute, and write data without race conditions, making it ideal for token bucket rate limiters.',
        bn: 'WATCH ফেইল করলে ক্লায়েন্টকে পুনরায় চেষ্টা করতে হয়, কিন্তু লুয়া (Lua) স্ক্রিপ্ট সরাসরি Redis সার্ভারের একক থ্রেডে চলে। সম্পূর্ণ স্ক্রিপ্টটি কোনো বাধা ছাড়াই অবিভাজ্যভাবে শেষ হয়, ফলে স্ক্রিপ্টের ভেতর রিড ও রাইট অপারেশনের মাঝে কোনো রেস কন্ডিশন হতে পারে না।'
      }
    },
    {
      type: 'code',
      lang: 'lua',
      code: `-- Atomic Rate Limiter Script executed on Redis:
-- KEYS[1] = Rate limit key (e.g. rate:user_101)
-- ARGV[1] = Max allowed requests (e.g. 5)
-- ARGV[2] = Window in seconds (e.g. 60)

local current = redis.call('INCR', KEYS[1])
if tonumber(current) == 1 then
  redis.call('EXPIRE', KEYS[1], ARGV[2])
end
if tonumber(current) > tonumber(ARGV[1]) then
  return 0 -- Rejected! Limit exceeded
end
return 1 -- Allowed!`,
      caption: {
        en: 'Server-side Lua scripts guarantee atomic read-modify-write safety without client locks.',
        bn: 'সার্ভার সাইড লুয়া স্ক্রিপ্ট কোনো ক্লায়েন্ট লকিং ছাড়াই নিশ্চিত পরমাণুসম সুরক্ষা দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Distributed Locking: Atomic SET NX PX & Release Tokens', bn: '৫. ডিস্ট্রিবিউটেড লকিং: অ্যাটমিক SET NX PX ও রিলিজ টোকেন' } },
    {
      type: 'para',
      text: {
        en: 'Distributed locks coordinate shared resources across microservices. A secure lock requires setting a random UUID token with SET resource_name token NX PX 30000. Releasing the lock requires a Lua script that verifies the token matches before calling DEL, preventing a slow worker from accidentally releasing a lock acquired by another process.',
        bn: 'ডিস্ট্রিবিউটেড লক বিভিন্ন মাইক্রোসার্ভিসের মাঝে শেয়ার্ড রিসোর্স ব্যবহারে শৃঙ্খলা আনে। নিরাপদ লকের জন্য SET resource_name token NX PX 30000 কমান্ডে একটি ইউনিক র্যান্ডম টোকেন দেওয়া হয়। লক খোলার সময় লুয়া স্ক্রিপ্ট দিয়ে টোকেন যাচাই করে তারপর DEL চালানো হয়, যাতে কোনো ধীরগতির কর্মী অন্যের নতুন লক ভুলবশত খুলে না ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Acquire lock with 30,000 ms expiration (NX = only if not exists):
SET lock:invoice_42 "random_token_uuid_891" NX PX 30000
# Output: OK (Acquired successfully!)

# Release lock safely using atomic Lua verification:
# if redis.call("get", KEYS[1]) == ARGV[1] then
#   return redis.call("del", KEYS[1])
# else
#   return 0
# end`,
      caption: {
        en: 'Atomic acquisition with unique release tokens prevents distributed lock corruption.',
        bn: 'ইউনিক টোকেন এবং যাচাইকরণ স্ক্রিপ্ট ডিস্ট্রিবিউটেড লকের অপব্যবহার ও ভুল খালাস রোধ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. High Availability with Redis Sentinel', bn: '৬. Redis সেন্টিনেল দিয়ে হাই অ্যাভেইলেবিলিটি (HA)' } },
    {
      type: 'para',
      text: {
        en: 'In standalone Redis, if the master crashes, writes cease immediately. Redis Sentinel provides high availability through automated monitoring, notification, and failover. A quorum of Sentinel daemons (typically 3 nodes) monitors master health. If the master becomes unresponsive, Sentinels elect a replica and promote it to master automatically.',
        bn: 'স্ট্যান্ডঅ্যালোন সিস্টেমে মাস্টার সার্ভার ডাউন হলে সমস্ত রাইট রিকোয়েস্ট বন্ধ হয়ে যায়। Redis Sentinel স্বয়ংক্রিয় মনিটরিং ও ফেইলওভারের মাধ্যমে সার্বক্ষণিক সচলতা নিশ্চিত করে। সাধারণত ৩টি সেন্টিনেল নোড মাস্টারের ওপর নজর রাখে। মাস্টার সার্ভার অফলাইন হলে সেন্টিনেলগুলো ভোটাভুটির মাধ্যমে একটি রেপলিকাকে নতুন মাস্টার বানিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SENTINEL QUORUM ARCHITECTURE:
[Sentinel 1] <--- Heartbeats ---> [Sentinel 2] <--- Heartbeats ---> [Sentinel 3]
       \\                                |                                /
        +-------------------------------+-------------------------------+
                                        |
                 Monitors: redis-master (192.168.1.10:6379)
                 Failover Quorum: 2 votes required to promote replica`,
      caption: {
        en: 'Sentinels reach consensus via quorum before promoting a replica during failover.',
        bn: 'সেন্টিনেলগুলো সংখ্যাগরিষ্ঠ মতামতের ভিত্তিতে রেপলিকাকে নতুন মাস্টার হিসেবে পদোন্নতি দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Redis Cluster Architecture: 16,384 Hash Slots & Hash Tags', bn: '৭. Redis ক্লাস্টার আর্কিটেকচার: ১৬,৩৮৪ হ্যাশ স্লট ও হ্যাশ ট্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'When dataset volume exceeds the RAM of a single physical machine, Redis Cluster distributes keys horizontally across multiple nodes using 16,384 logical Hash Slots. Redis computes CRC16(key) mod 16384 to assign keys. Multi-key operations across slots fail unless wrapped in curly braces {hash_tag} to force co-location on the identical shard.',
        bn: 'যখন ডেটার আকার একটি সিঙ্গেল মেশিনের মেমরির চেয়ে বড় হয়ে যায়, তখন Redis Cluster ১৬,৩৮৪টি লজিক্যাল হ্যাশ স্লট ব্যবহার করে ডেটা একাধিক নোডে ভাগ করে দেয়। Redis প্রতি কি-র জন্য CRC16(key) mod 16384 হিসাব করে নির্দিষ্ট নোড ঠিক করে। হ্যাশ ট্যাগ {hash_tag} ব্যবহার করে একাধিক কি-কে একই নোডে রাখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Multi-key operations on different slots fail with CROSSSLOT error:
# MSET user:101:profile "A" user:202:profile "B" -> (error) CROSSSLOT

# Solution: Use Hash Tags {tag} to route related keys to identical hash slot:
MSET {user:101}:profile "Alice" {user:101}:settings "dark_theme"
# Output: OK (Both keys hash to the same slot calculated from "user:101"!)`,
      caption: {
        en: 'Hash tags force related keys onto the same cluster node, enabling multi-key commands.',
        bn: 'হ্যাশ ট্যাগ সংশ্লিষ্ট কি-গুলোকে একই নোডে পাঠিয়ে মাল্টি-কি অপারেশন সচল রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Memory Eviction Policies: maxmemory & volatile-lru', bn: '৮. মেমরি এভিকশন পলিসি: maxmemory ও volatile-lru' } },
    {
      type: 'para',
      text: {
        en: 'When dataset size reaches maxmemory, Redis applies an eviction algorithm to purge keys and accept new writes. Configurations include: volatile-lru (evicts least recently used keys with an expiry), allkeys-lru (evicts LRU across all keys), volatile-lfu (least frequently used), and noeviction (returns OOM error on writes).',
        bn: 'ডাটাবেস যখন maxmemory সীমানায় পৌঁছে যায়, তখন নতুন ডেটা ঢোকাতে Redis এভিকশন অ্যালগরিদম চালায়। এর প্রধান পলিসিগুলো হলো: volatile-lru (মেয়াদ থাকা সবচেয়ে কম ব্যবহৃত কি মুছে দেয়), allkeys-lru (সব কি-র মধ্যে কম ব্যবহৃত কি মুছে দেয়), volatile-lfu (সবচেয়ে কম ঘনঘন ব্যবহৃত কি) এবং noeviction (মেমরি শেষ হলে নতুন রাইট বাতিল করে)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Memory limits and eviction settings inside redis.conf:
maxmemory 4gb
maxmemory-policy allkeys-lru

# Eviction Policies Summary:
# allkeys-lru   : Evicts least recently used keys first (Standard cache best practice)
# volatile-lru  : Evicts LRU keys that possess an explicit TTL expiration
# volatile-lfu  : Evicts least frequently accessed keys with an expiry
# noeviction    : Refuses new writes with OOM error while continuing reads`,
      caption: {
        en: 'Select allkeys-lru for general caches, and noeviction for non-volatile databases.',
        bn: 'সাধারণ ক্যাশের জন্য allkeys-lru এবং অপরিবর্তনীয় ডাটাবেসের জন্য noeviction বেছে নিন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Security Hardening: ACLs, TLS & Disabling Dangerous Commands', bn: '৯. নিরাপত্তা সুরক্ষা: ACL, TLS ও ঝুঁকিপূর্ণ কমান্ড নিষ্ক্রিয়করণ' } },
    {
      type: 'para',
      text: {
        en: 'Exposing Redis to networks without authentication is a critical security vulnerability. Production hardening mandates: 1) Enforcing TLS encryption; 2) Using Redis 6+ Access Control Lists (ACLs) to scope user permissions; 3) Renaming or disabling destructive administration commands like FLUSHALL and CONFIG.',
        bn: 'পাসওয়ার্ড বা নিরাপত্তা ছাড়া Redis নেটওয়ার্কে উন্মুক্ত রাখা চরম ঝুঁকিপূর্ণ। প্রোডাকশনে সুরক্ষিত রাখতে: ১) TLS এনক্রিপশন ব্যবহার করতে হয়; ২) Redis ৬+ অ্যাক্সেস কন্ট্রোল লিস্টের (ACL) মাধ্যমে ব্যবহারকারীর ক্ষমতা নির্দিষ্ট করতে হয়; ৩) FLUSHALL এবং CONFIG এর মতো ধ্বংসাত্মক কমান্ডগুলো রিনেম বা বন্ধ করে দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Hardening redis.conf for enterprise production:
# 1. Disable destructive administrative commands:
rename-command FLUSHALL ""
rename-command FLUSHDB ""
rename-command DEBUG ""

# 2. Configure Access Control List (ACL) user with restricted permissions:
# ACL SETUSER appuser on >StrongPassword ~app:* +get +set +del`,
      caption: {
        en: 'Disabling FLUSHALL and scoping ACLs prevents accidental or malicious data destruction.',
        bn: 'FLUSHALL নিষ্ক্রিয় ও ACL নিয়ন্ত্রণ দুর্ঘটনাজনিত ডাটাবেস মুছে যাওয়া থেকে রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Production Cluster & Distributed Locks in Node.js', bn: '১০. Node.js-এ প্রোডাকশন ক্লাস্টার ও ডিস্ট্রিবিউটেড লক বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production Redis distributed lock utility in Node.js using ioredis with random token validation and atomic Lua release scripts.',
        bn: 'নিচে ioredis ব্যবহার করে র্যান্ডম টোকেন ও পারমাণবিক লুয়া স্ক্রিপ্ট সমৃদ্ধ একটি নিরাপদ প্রোডাকশন ডিস্ট্রিবিউটেড লক ক্লাস দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";
import crypto from "crypto";

const redis = new Redis("redis://127.0.0.1:6379");

const RELEASE_LOCK_SCRIPT = \`
  if redis.call("get", KEYS[1]) == ARGV[1] then
    return redis.call("del", KEYS[1])
  else
    return 0
  end
\`;

class DistributedLock {
  static async acquire(resource, ttlMs = 5000) {
    const token = crypto.randomUUID();
    const result = await redis.set(\`lock:\${resource}\`, token, "PX", ttlMs, "NX");
    return result === "OK" ? token : null;
  }

  static async release(resource, token) {
    return await redis.eval(RELEASE_LOCK_SCRIPT, 1, \`lock:\${resource}\`, token);
  }
}

const lockToken = await DistributedLock.acquire("user_payment_1042", 5000);
if (lockToken) {
  try {
    console.log("Acquired lock successfully:", lockToken);
  } finally {
    await DistributedLock.release("user_payment_1042", lockToken);
    console.log("Released lock cleanly");
  }
}
// Output: Released lock cleanly`,
      caption: {
        en: 'Production distributed lock wrapper preventing race conditions and stale releases.',
        bn: 'প্রোডাকশন ডিস্ট্রিবিউটেড লক যা রেস কন্ডিশন ও ভুল আনলক প্রতিরোধ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-rel-ex1',
      kind: 'predict',
      topic: 'redis: cluster total hash slots count',
      question: {
        en: 'What is the exact total number of logical hash slots used to partition data across nodes in a Redis Cluster?',
        bn: 'Redis ক্লাস্টারে নোডগুলোর মাঝে ডেটা ভাগ করতে মোট কতটি লজিক্যাল হ্যাশ স্লট ব্যবহৃত হয়?'
      },
      code: `/* Total Redis Cluster Hash Slots: */
/* Total Slots = _____ */`,
      answer: '16384',
      accept: ['16384', '16,384', '16384 slots'],
      hint: {
        en: '16,384 hash slots (2^14).',
        bn: '১৬,৩৮৪টি হ্যাশ স্লট (২^১৪)।'
      },
      explanation: {
        en: 'Redis Cluster divides the entire keyspace into 16,384 hash slots, distributed among master nodes.',
        bn: 'Redis ক্লাস্টার পুরো ডেটাস্পেসকে ১৬,৩৮৪টি হ্যাশ স্লটে ভাগ করে বিভিন্ন মাস্টার নোডে রাখে।'
      }
    },
    {
      id: 'red-rel-ex2',
      kind: 'mcq',
      topic: 'redis: atomic transaction commands',
      question: {
        en: 'Which pair of commands initiates and commits an atomic transaction block in Redis?',
        bn: 'Redis-এ একটি পারমাণবিক ট্রানজ্যাকশন ব্লক শুরু এবং সম্পন্ন করতে কোন জোড়া কমান্ড ব্যবহৃত হয়?'
      },
      options: [
        { en: 'MULTI and EXEC', bn: 'MULTI এবং EXEC' },
        { en: 'BEGIN and COMMIT', bn: 'BEGIN এবং COMMIT' },
        { en: 'START and STOP', bn: 'START এবং STOP' },
        { en: 'OPEN and CLOSE', bn: 'OPEN এবং CLOSE' }
      ],
      answer: 0,
      hint: {
        en: 'MULTI and EXEC.',
        bn: 'MULTI এবং EXEC।'
      },
      explanation: {
        en: 'MULTI begins queuing commands for isolated execution, and EXEC executes all queued commands atomically.',
        bn: 'MULTI কমান্ড কিউ করা শুরু করে এবং EXEC সবগুলো কমান্ড একসাথে অবিভাজ্যভাবে কার্যকর করে।'
      }
    },
    {
      id: 'red-rel-ex3',
      kind: 'mcq',
      topic: 'redis: hash tag syntax for cluster co-location',
      question: {
        en: 'Which bracket characters are used as a Hash Tag to force multiple keys to map to the identical hash slot in Redis Cluster?',
        bn: 'Redis ক্লাস্টারে একাধিক কি-কে একই হ্যাশ স্লটে আবদ্ধ রাখতে কোন বন্ধনী ব্যবহার করে হ্যাশ ট্যাগ লেখা হয়?'
      },
      options: [
        { en: 'Curly braces {tag}', bn: 'কার্লি ব্র্যাকেট বা দ্বিতীয় বন্ধনী {tag}' },
        { en: 'Square brackets [tag]', bn: 'স্কয়ার ব্র্যাকেট [tag]' },
        { en: 'Angle brackets <tag>', bn: 'অ্যাঙ্গেল ব্র্যাকেট <tag>' },
        { en: 'Parentheses (tag)', bn: 'প্রথম বন্ধনী (tag)' }
      ],
      answer: 0,
      hint: {
        en: 'Curly braces {like_this}.',
        bn: 'কার্লি ব্র্যাকেট {like_this}।'
      },
      explanation: {
        en: 'Curly braces specify the substring used for CRC16 hashing, ensuring keys with the same tag co-locate on the same slot.',
        bn: 'দ্বিতীয় বন্ধনীর { } ভেতরের অংশের হ্যাশ বের করে Redis কি-গুলোকে একই নোডে রাখে।'
      }
    }
  ],
  quiz: {
    id: 'red-rel-quiz',
    title: { en: 'Redis Production Architecture Quiz', bn: 'Redis প্রোডাকশন আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'rrkq1',
        kind: 'mcq',
        topic: 'redis: pipelining primary benefit',
        question: {
          en: 'What is the primary operational advantage of using Redis Pipelining?',
          bn: 'Redis পাইপলাইনিং ব্যবহারের প্রধান অপারেশনাল সুবিধা কোনটি?'
        },
        options: [
          { en: 'It batches multiple commands into a single network packet, eliminating individual round-trip network delays (RTT)', bn: 'এটি একাধিক কমান্ড একটিমাত্র নেটওয়ার্ক প্যাকেটে পাঠিয়ে প্রতি কমান্ডের জন্য আলাদা নেটওয়ার্ক কালক্ষেপণ (RTT) দূর করে' },
          { en: 'It encrypts all data with quantum keys', bn: 'কোয়ান্টাম কি দিয়ে সব ডেটা এনক্রিপ্ট করে' },
          { en: 'It permanently saves data to optical disks', bn: 'অপটিক্যাল ডিস্কে ডেটা সেভ করে' },
          { en: 'It reduces RAM consumption to zero bytes', bn: 'মেমরি ব্যবহার শূন্য করে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Eliminates round-trip network delays.',
          bn: 'নেটওয়ার্ক রাউন্ড-ট্রিপ সময় কমায়।'
        },
        explanation: {
          en: 'Pipelining allows clients to issue many commands without waiting for individual replies, slashing latency.',
          bn: 'পাইপলাইনিং ক্লায়েন্টকে উত্তরের অপেক্ষা না করেই শত শত কমান্ড পাঠাতে দেয়, ফলে লেটেন্সি কমে যায়।'
        }
      },
      {
        id: 'rrkq2',
        kind: 'mcq',
        topic: 'redis: sentinel high availability function',
        question: {
          en: 'What is the primary role of Redis Sentinel in enterprise deployments?',
          bn: 'এন্টারপ্রাইজ পরিবেশে Redis সেন্টিনেলের প্রধান ভূমিকা কী?'
        },
        options: [
          { en: 'To monitor master nodes and automatically orchestrate failovers by promoting a replica when the master goes down', bn: 'মাস্টার সার্ভার পর্যবেক্ষণ করা এবং মাস্টার ডাউন হলে স্বয়ংক্রিয়ভাবে একটি রেপলিকাকে নতুন মাস্টার বানানো' },
          { en: 'To compress videos into MP4 format', bn: 'ভিডিও ফাইল কমপ্রেস করা' },
          { en: 'To replace Node.js web servers', bn: 'ওয়েব সার্ভার প্রতিস্থাপন করা' },
          { en: 'To convert Redis keys into SQL tables', bn: 'এসকিউএল টেবিলে রূপান্তর করা' }
        ],
        answer: 0,
        hint: {
          en: 'Automated monitoring and replica promotion.',
          bn: 'স্বয়ংক্রিয় পর্যবেক্ষণ ও রেপ্লিকা পদোন্নতি।'
        },
        explanation: {
          en: 'Redis Sentinel monitors node health and executes automated failovers when a master node becomes unresponsive.',
          bn: 'মাস্টার সাড়া না দিলে সেন্টিনেল স্বয়ংক্রিয়ভাবে রেপলিকাকে পদোন্নতি দিয়ে সেবা সচল রাখে।'
        }
      },
      {
        id: 'rrkq3',
        kind: 'mcq',
        topic: 'redis: lua scripting atomicity advantage',
        question: {
          en: 'Why are Lua scripts preferred over client-side WATCH/MULTI logic for complex conditional mutations?',
          bn: 'জটিল শর্তসাপেক্ষ পরিবর্তনের জন্য ক্লায়েন্ট সাইড WATCH/MULTI লজিকের চেয়ে লুয়া (Lua) স্ক্রিপ্ট কেন বেশি পছন্দনীয়?'
        },
        options: [
          { en: 'Because Lua scripts execute completely atomically inside Redis without network round-trips or collision aborts', bn: 'কারণ লুয়া স্ক্রিপ্ট সার্ভারের ভেতরে কোনো নেটওয়ার্ক রাউন্ড-ট্রিপ বা ট্রানজ্যাকশন সংঘর্ষ ছাড়াই শতভাগ অবিভাজ্যভাবে চলে' },
          { en: 'Because Lua is written in HTML', bn: 'কারণ লুয়া এইচটিএমএলে লেখা' },
          { en: 'Because Lua bypasses server passwords', bn: 'পাসওয়ার্ড বাইপাস করে' },
          { en: 'Because Lua requires no memory', bn: 'কোনো মেমরি লাগে না' }
        ],
        answer: 0,
        hint: {
          en: 'Server-side atomic execution without collision retries.',
          bn: 'কোনো সংঘর্ষ ছাড়া সার্ভার সাইড অবিভাজ্য এক্সেকিউশন।'
        },
        explanation: {
          en: 'Lua scripts run atomically on the server event loop, avoiding the retry overhead associated with optimistic WATCH aborts.',
          bn: 'লুয়া স্ক্রিপ্ট একবারে শেষ না হওয়া পর্যন্ত অন্য কোনো কমান্ড চলে না, তাই কোনো সংঘর্ষ বা ট্রানজ্যাকশন রিট্রাই লাগে না।'
        }
      },
      {
        id: 'rrkq4',
        kind: 'mcq',
        topic: 'redis: eviction policy allkeys-lru behavior',
        question: {
          en: 'How does the allkeys-lru eviction policy behave when Redis reaches maxmemory?',
          bn: 'Redis যখন maxmemory সীমানায় পৌঁছে যায় তখন allkeys-lru পলিসি কী আচরণ করে?'
        },
        options: [
          { en: 'It evicts the least recently used keys across the entire keyspace to make room for incoming writes', bn: 'নতুন লেখার জায়গা তৈরি করতে পুরো ডাটাবেস থেকে সবচেয়ে কম সম্প্রতি ব্যবহৃত (LRU) কি-গুলো মুছে ফেলে' },
          { en: 'It immediately deletes the entire database', bn: 'পুরো ডাটাবেস একসাথে মুছে ফেলে' },
          { en: 'It shuts down the operating system', bn: 'অপারেটিং সিস্টেম বন্ধ করে দেয়' },
          { en: 'It sends an email to all registered users', bn: 'সব ইউজারকে ইমেইল পাঠায়' }
        ],
        answer: 0,
        hint: {
          en: 'Evicts least recently used keys.',
          bn: 'সবচেয়ে কম ব্যবহৃত কি মুছে দেয়।'
        },
        explanation: {
          en: 'allkeys-lru drops the least recently accessed keys across all keys regardless of whether they have a TTL.',
          bn: 'allkeys-lru মেমরি খালি করতে সবচেয়ে পুরনো অব্যবহৃত কি-গুলো বেছে মুছে ফেলে।'
        }
      }
    ]
  }
};
