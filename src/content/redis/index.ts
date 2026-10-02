import type { Hub } from '../../lib/types';
import { KeysAndTheExpiryLesson } from './lessons/keys-and-the-expiry';
import { StringsAndTheHashLesson } from './lessons/strings-and-the-hash';
import { ListsAndTheQueueLesson } from './lessons/lists-and-the-queue';
import { SetsAndTheMemberLesson } from './lessons/sets-and-the-member';
import { StreamsAndTheGroupLesson } from './lessons/streams-and-the-group';
import { PubsAndTheSubLesson } from './lessons/pubs-and-the-sub';
import { PersistsAndTheSnapLesson } from './lessons/persists-and-the-snap';
import { TheRedisReleaseLesson } from './lessons/the-redis-release';

export const redisHub: Hub = {
  slug: 'redis',
  name: 'Redis',
  icon: '🟥',
  tagline: {
    en: 'Master in-memory caching, advanced data structures, high-throughput pub/sub, streams, and distributed clustering with Redis.',
    bn: 'Redis দিয়ে ইন-মেমরি ক্যাশিং, উন্নত ডেটা স্ট্রাকচার, হাই-থ্রুপুট পাব/সাব, স্ট্রিম এবং ডিস্ট্রিবিউটেড ক্লাস্টারিং আয়ত্ত করুন।'
  },
  intro: {
    en: 'Redis is an open-source, in-memory data structure store used as a high-speed database, cache, streaming engine, and message broker. Built around a single-threaded non-blocking event loop using I/O multiplexing, Redis delivers sub-millisecond latencies and handles over 100,000 operations per second. This curriculum takes you from core string and hash manipulations to distributed streams, Redlock synchronization, and production cluster architectures.',
    bn: 'Redis হলো একটি ওপেন-সোর্স ইন-মেমরি ডেটা স্ট্রাকচার স্টোর যা আল্ট্রা-ফাস্ট ডাটাবেস, ক্যাশ, স্ট্রিমিং ইঞ্জিন এবং মেসেজ ব্রোকার হিসেবে ব্যবহৃত হয়। I/O মাল্টিপ্লেক্সিং সমৃদ্ধ নন-ব্লকিং ইভেন্ট লুপের ওপর ভিত্তি করে তৈরি Redis সাব-মিলিসেকেন্ড লেটেন্সিতে প্রতি সেকেন্ডে ১ লক্ষাধিক অপারেশন সম্পন্ন করতে পারে। এই কারিকুলামে মৌলিক স্ট্রিং ও হ্যাশ ম্যানিপুলেশন থেকে শুরু করে ডিস্ট্রিবিউটেড স্ট্রিমস, রেডলক সিঙ্ক এবং প্রোডাকশন ক্লাস্টার আর্কিটেকচার শেখানো হবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core In-Memory Data Structures (Strings, Hashes, Lists & Expiry)',
        bn: 'ধাপ ১ — কোর ইন-মেমরি ডেটা স্ট্রাকচার (স্ট্রিং, হ্যাশ, লিস্ট ও মেয়াদের নিয়ম)'
      },
      items: [
        {
          en: 'In-Memory Architecture & Key Expiry: Understanding RAM data layout, volatile keys, TTL mechanics, and eviction algorithms (LRU, LFU).',
          bn: 'ইন-মেমরি আর্কিটেকচার ও কি এক্সপায়ারি: র‍্যামে ডেটা বিন্যাস, ভোলাটাইল কি, TTL কার্যপদ্ধতি এবং মেমরি রিলিজ অ্যালগরিদম (LRU, LFU)।'
        },
        {
          en: 'Strings, Bitmaps & Hashes: Atomic counter increments, binary bitwise operations, structured object storage with HSET/HGET, and Cache-Aside patterns.',
          bn: 'স্ট্রিং, বিটম্যাপ ও হ্যাশ: অ্যাটমিক কাউন্টার বৃদ্ধি, বিটওয়াইজ অপারেশন, HSET/HGET দিয়ে অবজেক্ট সংরক্ষণ এবং ক্যাশ-অ্যাসাইড প্যাটার্ন।'
        },
        {
          en: 'Lists & Message Queues: Double-ended linked lists, LPUSH/RPOP worker queues, blocking pop operations (BRPOP), and rate limiter ring buffers.',
          bn: 'লিস্ট ও মেসেজ কিউ: ডাবল-এন্ডেড লিঙ্কড লিস্ট, LPUSH/RPOP ওয়ার্কার কিউ, ব্লকিং পপ অপারেশন (BRPOP) এবং রেট লিমিটার রিং বাফার।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Advanced Sets, Streams & Real-Time Messaging',
        bn: 'ধাপ ২ — অ্যাডভান্সড সেট, স্ট্রিম ও রিয়েল-টাইম মেসেজিং'
      },
      items: [
        {
          en: 'Sets & Sorted Sets (ZSET): Unique tag unions and intersections, skip list ranking leaderboards, and HyperLogLog probabilistic cardinality.',
          bn: 'সেট ও সর্টেড সেট (ZSET): ইউনিক ট্যাগ ইউনিয়ন ও ইন্টারসেকশন, স্কিপ লিস্ট লিডারবোর্ড এবং হাইপারলগলগ প্রবাবিলিস্টিক গণনা।'
        },
        {
          en: 'Redis Streams & Consumer Groups: Append-only log architecture (XADD), consumer groups, pending entries lists (PEL), and event sourcing workflows.',
          bn: 'রেডিস স্ট্রিম ও কনজিউমার গ্রুপ: অ্যাপেন্ড-অনলি লগ আর্কিটেকচার (XADD), কনজিউমার গ্রুপ, পেন্ডিং এন্ট্রি লিস্ট (PEL) এবং ইভেন্ট সোর্সিং।'
        },
        {
          en: 'Pub/Sub & Keyspace Notifications: Real-time broadcast messaging, pattern subscriptions, transient message limits, and expiry event triggers.',
          bn: 'পাব/সাব ও কি-স্পেস নোটিফিকেশন: রিয়েল-টাইম ব্রডকাস্ট মেসেজিং, প্যাটার্ন সাবস্ক্রিপশন, সাময়িক মেসেজ সীমাবদ্ধতা এবং এক্সপায়ারি ইভেন্ট ট্রিগার।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Persistence, High Availability & Production Clustering',
        bn: 'ধাপ ৩ — পারসিস্টেন্স, হাই অ্যাভেইল্যাবিলিটি ও প্রোডাকশন ক্লাস্টারিং'
      },
      items: [
        {
          en: 'Persistence Engines: Point-in-time RDB snapshots (fork copy-on-write), append-only file (AOF) journals, and fsync durability tradeoffs.',
          bn: 'পারসিস্টেন্স ইঞ্জিন: RDB স্ন্যাপশট (ফর্ক কপি-অন-রাইট), অ্যাপেন্ড-অনলি ফাইল (AOF) জার্নাল এবং fsync স্থায়িত্বের ভারসাম্য।'
        },
        {
          en: 'Production Operations & Clustering: Sentinel automated failover, 16,384 hash slot sharded clusters, memory optimization, and security hardening.',
          bn: 'প্রোডাকশন অপারেশনস ও ক্লাস্টারিং: সেন্টিনেল অটোমেটিক ফেইলওভার, ১৬,৩৮৪ হ্যাশ স্লটের শার্ডেড ক্লাস্টার, মেমরি টিউনিং ও নিরাপত্তা।'
        }
      ]
    }
  ],
  lessons: [
    KeysAndTheExpiryLesson,
    StringsAndTheHashLesson,
    ListsAndTheQueueLesson,
    SetsAndTheMemberLesson,
    StreamsAndTheGroupLesson,
    PubsAndTheSubLesson,
    PersistsAndTheSnapLesson,
    TheRedisReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Distributed API Rate Limiter & Token Bucket with Redis & Lua',
        bn: 'Redis ও Lua সহযোগে ডিস্ট্রিবিউটেড এপিআই রেট লিমিটার ও টোকেন বাকেট'
      },
      brief: {
        en: 'Architect a high-performance distributed rate limiting middleware for Node.js APIs. Implement sliding-window logs using Redis Sorted Sets (ZSET) and token bucket algorithms encapsulated in atomic Lua scripts to eliminate race conditions under 50,000 concurrent requests per second.',
        bn: 'Node.js এপিআই-এর জন্য একটি হাই-পারফরম্যান্স ডিস্ট্রিবিউটেড রেট লিমিটিং মিডলওয়্যার তৈরি করুন। প্রতি সেকেন্ডে ৫০,০০০ সমসাময়িক রিকোয়েস্টেও রেস কন্ডিশন দূর করতে Redis সর্টেড সেট (ZSET) দিয়ে স্লাইডিং উইন্ডো এবং অ্যাটমিক Lua স্ক্রিপ্ট দিয়ে টোকেন বাকেট অ্যালগরিদম বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Real-Time Gaming Leaderboard & Event-Driven Stream Engine',
        bn: 'রিয়েল-টাইম গেমিং লিডারবোর্ড ও ইভেন্ট-ড্রিভেন স্ট্রিম ইঞ্জিন'
      },
      brief: {
        en: 'Build a low-latency gaming backend tracking millions of players using Redis Sorted Sets with ZINCRBY, ZREVRANK, and ZREVRANGE. Integrate Redis Streams with consumer groups for durable match-making events, handling worker acknowledgments with XACK and reprocessing dead letters.',
        bn: 'Redis সর্টেড সেটের ZINCRBY, ZREVRANK এবং ZREVRANGE ব্যবহার করে লাখ লাখ খেলোয়াড়ের রিয়েল-টাইম লিডারবোর্ড ট্র্যাক করার ব্যাকএন্ড তৈরি করুন। ম্যাচ-মেকিং ইভেন্ট ব্যবস্থাপনার জন্য কনজিউমার গ্রুপসহ Redis Streams যুক্ত করুন, যেখানে XACK দিয়ে প্রসেসিং নিশ্চিত ও ডেড লেটার পুনরায় উদ্ধার করা হবে।'
      }
    }
  ],
  practices: [
    {
      title: { en: 'Always Attach Explicit TTLs to Dynamic Cache Keys', bn: 'ডায়নামিক ক্যাশ কি-তে সর্বদা সুনির্দিষ্ট TTL নির্ধারণ করুন' },
      text: {
        en: 'Volatile keys created without an expiration timestamp accumulate continuously until the server exhausts its RAM budget. Always use SET key val EX seconds to enforce deterministic cache lifetimes and prevent catastrophic out-of-memory crashes.',
        bn: 'মেয়াদ নির্ধারণ ছাড়া তৈরি করা ক্যাশ কি জমতে জমতে সার্ভারের র‍্যাম পূর্ণ করে ফেলে। ক্যাশের স্থায়ী অবক্ষয় ও মেমরি ক্র্যাশ রোধ করতে সর্বদা SET key val EX seconds কমান্ড দিয়ে নির্দিষ্ট মেয়াদ বেঁধে দিন।'
      }
    },
    {
      title: { en: 'Configure maxmemory and Eviction Policies Deliberately', bn: 'সচেতনভাবে maxmemory এবং এভিকশন পলিসি কনফিগার করুন' },
      text: {
        en: 'Never run Redis without defining maxmemory in redis.conf. For pure caching layers, select allkeys-lru or allkeys-lfu to discard cold keys automatically. For hybrid workloads holding stateful queues, use volatile-lru or noeviction to prevent losing un-replicated state.',
        bn: 'redis.conf-এ maxmemory নির্ধারণ না করে কখনো Redis চালাবেন না। শুধু ক্যাশিং সার্ভারের ক্ষেত্রে অপ্রয়োজনীয় পুরনো কি ছাঁটাই করতে allkeys-lru বা allkeys-lfu ব্যবহার করুন। আর কিউ বা স্টেটফুল ডেটার জন্য volatile-lru বা noeviction বেছে নিন।'
      }
    },
    {
      title: { en: 'Ban the KEYS Command in Production; Use SCAN Exclusively', bn: 'প্রোডাকশনে KEYS কমান্ড সম্পূর্ণ নিষিদ্ধ করুন; সর্বদা SCAN ব্যবহার করুন' },
      text: {
        en: 'Because Redis is single-threaded, executing KEYS * blocks the entire server event loop while scanning millions of memory addresses, freezing all client requests. Always use the non-blocking cursor-based SCAN command to iterate over keys incrementally.',
        bn: 'Redis সিঙ্গেল-থ্রেডেড হওয়ায় KEYS * কমান্ড চালালে লাখ লাখ মেমরি স্ক্যান করার সময় পুরো সার্ভারের ইভেন্ট লুপ আটকে যায় এবং অন্য সব রিকোয়েস্ট স্তব্ধ হয়ে পড়ে। প্রোডাকশনে কি অনুসন্ধানের জন্য সর্বদা নন-ব্লকিং কার্সরভিত্তিক SCAN কমান্ড ব্যবহার করুন।'
      }
    },
    {
      title: { en: 'Group Multi-Key Mutations into Atomic Lua Scripts or Transactions', bn: 'একাধিক কি পরিবর্তনের কাজ অ্যাটমিক Lua স্ক্রিপ্ট বা ট্রানজ্যাকশনে আবদ্ধ করুন' },
      text: {
        en: 'To prevent concurrency races between GET and SET operations, encapsulate multi-step business logic inside server-side Lua scripts executed via EVAL. Redis guarantees atomic execution of Lua scripts without intermediate interleaved client commands.',
        bn: 'GET এবং SET অপারেশনের মাঝে রেস কন্ডিশন এড়াতে মাল্টি-স্টেপ লজিককে EVAL দিয়ে সার্ভার-সাইড Lua স্ক্রিপ্টের ভেতর চালান। Redis কোনো প্রকার বিঘ্ন ছাড়াই সম্পূর্ণ Lua স্ক্রিপ্টটি একটি একক অবিভাজ্য অ্যাটমিক অপারেশন হিসেবে সম্পন্ন করে।'
      }
    },
    {
      title: { en: 'Balance RDB Snapshots and AOF fsync Durability vs Latency', bn: 'RDB স্ন্যাপশট ও AOF fsync স্থায়িত্ব এবং লেটেন্সির ভারসাম্য বজায় রাখুন' },
      text: {
        en: 'In mission-critical deployments, configure appendonly yes with appendfsync everysec. This achieves a near-zero performance penalty while guaranteeing at most one second of data loss during catastrophic power outages.',
        bn: 'গুরুত্বপূর্ণ সার্ভারে appendonly yes সহ appendfsync everysec কনফিগার করুন। এটি পারফরম্যান্সে কোনো প্রভাব না ফেলেই বিদ্যুৎ চলে যাওয়ার মতো চরম বিপর্যয়েও সর্বোচ্চ ১ সেকেন্ডের বেশি ডেটা হারানোর ঝুঁকি থাকে না।'
      }
    },
    {
      title: { en: 'Leverage Command Pipelining to Eliminate Network Latency Overhead', bn: 'নেটওয়ার্ক রাউন্ড-ট্রিপ কমাতে কমান্ড পাইপলাইনিং ব্যবহার করুন' },
      text: {
        en: 'Sending 100 individual sequential commands creates 100 network round-trip trips (RTT). Using Redis pipelining sends all 100 commands in a single network socket write, reducing multi-operation execution time from 50 ms down to 1 ms.',
        bn: 'পরপর ১০০টি কমান্ড আলাদাভাবে পাঠালে ১০০ বার নেটওয়ার্ক রাউন্ড-ট্রিপ (RTT) হয়। Redis পাইপলাইনিং ব্যবহারের মাধ্যমে সবকটি কমান্ড একটিমাত্র নেটওয়ার্ক প্যাকেটে পাঠিয়ে ৫০ মিলিসেকেন্ডের কাজ মাত্র ১ মিলিসেকেন্ডে নামিয়ে আনা যায়।'
      }
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Redis achieve 100,000+ operations per second despite executing commands on a single thread?',
        bn: 'একটিমাত্র থ্রেডে কমান্ড সম্পন্ন করা সত্ত্বেও Redis কীভাবে প্রতি সেকেন্ডে ১ লক্ষাধিক অপারেশন পরিচালনা করে?'
      },
      a: {
        en: 'Redis operates entirely in high-speed RAM, eliminating disk seek delays. Its single-threaded event loop utilizes OS-level non-blocking I/O multiplexing (epoll on Linux, kqueue on macOS) to handle tens of thousands of client network sockets concurrently. Being single-threaded eliminates CPU context switches, mutex locking overhead, and deadlock races, allowing memory-bound operations to complete in nanoseconds.',
        bn: 'Redis ডিস্কের সাহায্য ছাড়া সরাসরি বিদ্যুৎগতির র‍্যামে কাজ করে, ফলে ডিস্ক লেটেন্সি থাকে না। এর সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ অপারেটিং সিস্টেমের নন-ব্লকিং I/O মাল্টিপ্লেক্সিং (লিনাক্সে epoll, ম্যাক-এ kqueue) ব্যবহার করে একসাথে হাজার হাজার ক্লায়েন্ট সকেট হ্যান্ডেল করে। একক থ্রেড হওয়ায় থ্রেড সুইচিং, মিউটেক্স লকিং বা ডেডলকের বাড়তি কোনো চাপ থাকে না, ফলে ন্যানোসেকেন্ডে মেমরি অপারেশন শেষ হয়।'
      }
    },
    {
      q: {
        en: 'Explain the Cache-Aside pattern and describe how to mitigate Cache Penetration, Breakdown, and Avalanche.',
        bn: 'ক্যাশ-অ্যাসাইড (Cache-Aside) প্যাটার্ন ব্যাখ্যা করুন এবং ক্যাশ পেনিট্রেশন, ব্রেকডাউন ও অ্যাভালাঞ্চ কীভাবে সমাধান করবেন?'
      },
      a: {
        en: 'In Cache-Aside, the application queries Redis first; on a cache miss, it reads from the primary database, writes the result to Redis with a TTL, and returns it. To mitigate Cache Penetration (queries for non-existent IDs), cache null objects or deploy Bloom Filters. To prevent Cache Breakdown (hot key expiry under high traffic), use distributed mutex locks or background refreshers. To prevent Cache Avalanche (simultaneous mass expiration), add randomized jitter to TTL expirations.',
        bn: 'ক্যাশ-অ্যাসাইড প্যাটার্নে অ্যাপ্লিকেশন প্রথমে Redis-এ ডেটা খোঁজে; না পেলে ডাটাবেস থেকে পড়ে এনে নির্দিষ্ট TTL সহ Redis-এ লিখে রাখে। অস্তিত্বহীন আইডির অনুরোধে ক্যাশ পেনিট্রেশন ঠেকাতে নাল (null) ভ্যালু ক্যাশ বা ব্লুম ফিল্টার ব্যবহার করা হয়। হট কি মেয়াদোত্তীর্ণ হয়ে ক্যাশ ব্রেকডাউন ঠেকাতে ডিস্ট্রিবিউটেড লক লাগে। আর সব কি একসাথে এক্সপায়ার হয়ে ক্যাশ অ্যাভালাঞ্চ হওয়া রোধ করতে TTL-এর সাথে এলোমেলো কিছু সেকেন্ড (Jitter) যোগ করা হয়।'
      }
    },
    {
      q: {
        en: 'How do Redis Consumer Groups manage message delivery and acknowledge pending entries (PEL)?',
        bn: 'Redis কনজিউমার গ্রুপ কীভাবে মেসেজ ডেলিভারি পরিচালনা করে এবং পেন্ডিং এন্ট্রি লিস্ট (PEL) সমন্বয় করে?'
      },
      a: {
        en: 'Redis Streams support Consumer Groups through XREADGROUP. When a consumer reads a message, Redis records the message ID in that consumer’s Pending Entries List (PEL). If the worker crashes before invoking XACK, the message remains unacknowledged in the PEL. Other workers can inspect dead consumers via XPENDING and claim stalled messages using XCLAIM or XAUTOCLAIM, guaranteeing at-least-once message delivery.',
        bn: 'Redis Streams XREADGROUP কমান্ড দিয়ে কনজিউমার গ্রুপ চালায়। কোনো কনজিউমার মেসেজ পড়লে Redis তার পেন্ডিং এন্ট্রি লিস্টে (PEL) মেসেজের আইডি লিখে রাখে। কর্মী ক্র্যাশ করে XACK কমান্ড পাঠাতে ব্যর্থ হলে মেসেজটি PEL-এ থেকে যায়। তখন অন্য কর্মীরা XPENDING দিয়ে আটকে থাকা মেসেজ চিহ্নিত করে XCLAIM বা XAUTOCLAIM দিয়ে তা নিজেদের দায়িত্বে নিয়ে নেয়, যা অন্তত একবার ডেলিভারি নিশ্চিত করে।'
      }
    },
    {
      q: {
        en: 'What is the architectural difference between Redis Sentinel and Redis Cluster?',
        bn: 'Redis Sentinel এবং Redis Cluster-এর মধ্যকার স্থাপত্যের মূল পার্থক্য কী?'
      },
      a: {
        en: 'Redis Sentinel provides high availability and automatic failover for a single primary-replica dataset: Sentinels monitor the primary, elect a new primary during outages, and notify clients, but all nodes store identical data without horizontal partitioning. Redis Cluster provides true horizontal sharding: it automatically partitions datasets across multiple masters using 16,384 virtual hash slots (CRC16 mod 16384), supporting scale-out past a single node’s RAM capacity.',
        bn: 'Redis Sentinel একক প্রাইমারি-সেকেন্ডারি সেটের জন্য হাই অ্যাভেইল্যাবিলিটি ও স্বয়ংক্রিয় ফেইলওভার দেয়: এটি প্রাইমারিকে পাহারা দেয় এবং নষ্ট হলে নতুন প্রাইমারি নির্বাচন করে, তবে সব নোডে একই ডেটা থাকে। বিপরীতে Redis Cluster প্রকৃত অনুভূমিক স্কেলিং দেয়: এটি ১৬,৩৮৪টি ভার্চুয়াল হ্যাশ স্লটে (CRC16 mod 16384) ডেটা ভাগ করে একাধিক মাস্টারের মাঝে ছড়িয়ে দেয়, যা একটি সার্ভারের র‍্যামের সীমানা পেরিয়ে বিশাল আকারে বাড়তে পারে।'
      }
    }
  ],
  architectures: [
    {
      title: { en: 'Cache-Aside Caching Layer with Jitter & Bloom Filters', bn: 'জিটার ও ব্লুম ফিল্টার সমৃদ্ধ ক্যাশ-অ্যাসাইড আর্কিটেকচার' },
      detail: {
        en: 'Production high-concurrency architecture placing Redis in front of PostgreSQL or MongoDB. Incorporates randomized TTL jitter to prevent cache avalanche and a Redis Bloom Filter to reject non-existent entity IDs before touching storage engines.',
        bn: 'পোস্টগ্রেস বা মঙ্গোডিবির সামনে দ্রুতগতির Redis ক্যাশ লেয়ার। ক্যাশ অ্যাভালাঞ্চ রোধে এলোমেলো TTL জিটার এবং অস্তিত্বহীন ডেটার কুয়েরি ডাটাবেসে যাওয়া আটকাতে Redis ব্লুম ফিল্টার ব্যবহার করা হয়।'
      }
    },
    {
      title: { en: 'Distributed Mutex Locking via the Redlock Algorithm', bn: 'রেডলক অ্যালগরিদমের মাধ্যমে ডিস্ট্রিবিউটেড মিউটেক্স লক' },
      detail: {
        en: 'Fault-tolerant synchronization across multiple independent Redis instances. Utilizes SET resource_name my_random_token NX PX 30000 with atomic Lua release scripts to prevent split-brain dual-master concurrency bugs in distributed microservices.',
        bn: 'একাধিক স্বাধীন Redis সার্ভারজুড়ে ফল্ট-টলারেন্ট লকিং মেকানিজম। মাইক্রোসার্ভিসগুলোতে ডেটা বিশৃঙ্খলা এড়াতে SET NX PX ৩০ সেকেন্ড এবং অ্যাটমিক Lua রিলিজ স্ক্রিপ্ট দিয়ে কার্যকর ডিস্ট্রিবিউটেড লক তৈরি করা হয়।'
      }
    },
    {
      title: { en: 'Global Real-Time Leaderboard with Sliding Windows', bn: 'স্লাইডিং উইন্ডো সমৃদ্ধ গ্লোবাল রিয়েল-টাইম লিডারবোর্ড' },
      detail: {
        en: 'High-throughput gaming leaderboard engine utilizing Redis Sorted Sets (ZSET). Scores are updated in-place via ZINCRBY, and percentile rank calculations run in O(log N) time via ZREVRANK, supporting millions of concurrent active gamers.',
        bn: 'Redis সর্টেড সেট (ZSET) ব্যবহার করে তৈরি আল্ট্রা-ফাস্ট লিডারবোর্ড ইঞ্জিন। ZINCRBY দিয়ে তাৎক্ষণিক স্কোর আপডেট হয় এবং ZREVRANK দিয়ে O(log N) গতিতে নিখুঁত গ্লোবাল র‍্যাঙ্ক হিসাব করা যায়।'
      }
    },
    {
      title: { en: 'Event-Driven Microservice Pipeline with Consumer Groups', bn: 'কনজিউমার গ্রুপ সমৃদ্ধ ইভেন্ট-ড্রিভেন মাইক্রোসার্ভিস পাইপলাইন' },
      detail: {
        en: 'Durable pub/sub event bus built on Redis Streams. Independent consumer groups stream order events, handle worker failures via Pending Entries Lists (PEL), and guarantee exactly-once business processing without third-party heavy message brokers.',
        bn: 'Redis Streams দিয়ে তৈরি টেকসই ইভেন্ট বাস। স্বতন্ত্র কনজিউমার গ্রুপগুলো অর্ডারের ইভেন্ট পড়ে, পেন্ডিং এন্ট্রি লিস্ট (PEL) দিয়ে ব্যর্থ কর্মী উদ্ধার করে এবং অন্য কোনো ভারী ব্রোকার ছাড়াই নিখুঁত ইভেন্ট প্রসেসিং নিশ্চিত করে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always set defensive TTL expiration on cache entries with random jitter to prevent cache avalanche stampedes and memory exhaustion.',
      bn: 'মেমরি শেষ হওয়া ও ক্যাশ অ্যাভালাঞ্চ রোধে সর্বদা ছোট র্যান্ডম জিটারসহ স্পষ্ট TTL এক্সপায়ারি সেট করুন।'
    },
    {
      en: 'Use Redis Hashes instead of large serialized JSON strings when only specific fields are updated to avoid unnecessary network payloads.',
      bn: 'আংশিক আপডেটের জন্য ভারী সিরিয়ালাইজড স্ট্রিংয়ের বদলে হ্যাশ ব্যবহার করুন যা ব্যান্ডউইথ সাশ্রয় করে ও রেস কন্ডিশন এড়ায়।'
    },
    {
      en: 'Never run unbounded KEYS commands in production; always use SCAN with MATCH and COUNT to cursor safely through key namespaces.',
      bn: 'প্রোডাকশনে কখনো KEYS কমান্ড চালাবেন না; মূল ইভেন্ট লুপ ব্লক না করে উপাদান খুঁজতে SCAN কমান্ড ব্যবহার করুন।'
    },
    {
      en: 'Batch consecutive network commands inside Redis Pipelines or Lua scripts to slash round-trip network latency from multiple round-trips to one.',
      bn: 'নেটওয়ার্ক রাউন্ড-ট্রিপ সময় কমাতে একাধিক কমান্ডকে পাইপলাইন বা লুয়া স্ক্রিপ্টে গুচ্ছ আকারে পাঠান।'
    },
    {
      en: 'Configure explicit maxmemory limits with allkeys-lru eviction policies on cache tiers to prevent out-of-memory kernel termination.',
      bn: 'মেমরি ক্র্যাশ এড়াতে ক্যাশ নোডে স্পষ্ট maxmemory সীমা এবং allkeys-lru এভিকশন পলিসি কনফিগার করুন।'
    }
  ],
  realWorld: [
    {
      en: 'High-scale global platforms like GitHub deploy Redis for timeline caching and real-time activity feeds, processing hundreds of thousands of sub-millisecond queries every second.',
      bn: 'গিটহাবের মতো উচ্চ-স্কেলের প্ল্যাটফর্মগুলো টাইমলাইন ক্যাশিং এবং রিয়েল-টাইম অ্যাক্টিভিটি ফিডের জন্য রেডিস ব্যবহার করে প্রতি সেকেন্ডে লাখ লাখ দ্রুতগতির কুয়েরি পরিচালনা করে।'
    },
    {
      en: 'Multiplayer gaming studios deploy Redis Sorted Sets (ZSET) to compute real-time leaderboards and matchmaking queues across millions of active players.',
      bn: 'শীর্ষ গেমিং কোম্পানিগুলো লাখ লাখ খেলোয়াড়ের লাইভ লিডারবোর্ড ও ম্যাচ-মেকিং কিউ তৈরিতে রেডিস সর্টেড সেট ব্যবহার করে।'
    },
    {
      en: 'Ride-hailing services like Uber leverage Redis Streams and distributed locks for resilient event-driven dispatch and geo-temporal driver coordinate tracking.',
      bn: 'উবারের মতো রাইড-শেয়ারিং সেবাগুলো নির্ভরযোগ্য ইভেন্ট প্রসেসিং এবং ডিস্ট্রিবিউটেড লকিংয়ের জন্য রেডিস স্ট্রিম ও ভূ-অবস্থান ট্র্যাকিং ব্যবহার করে।'
    }
  ]
};
