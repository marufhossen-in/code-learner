import type { Lesson } from '../../../lib/types';

export const PersistsAndTheSnapLesson: Lesson = {
  slug: 'persists-and-the-snap',
  tech: 'redis',
  title: {
    en: 'Redis Persistence: RDB Snapshots, AOF Logs & Durability',
    bn: 'Redis পারসিস্টেন্স: RDB স্ন্যাপশট, AOF লগ ও স্থায়িত্ব'
  },
  summary: {
    en: 'Master Redis data durability and disaster recovery across 10 structured topics. Explore point-in-time RDB binary snapshots created via OS fork and Copy-on-Write memory mechanics. Configure automatic BGSAVE thresholds. Understand Append-Only File (AOF) protocol logging and tune fsync durability policies between always, everysec, and no. Automate log compaction with BGREWRITEAOF. Implement hybrid RDB-preamble AOF persistence for rapid recovery, repair corrupted logs with redis-check-aof, and monitor persistence health in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Redis ডেটার স্থায়িত্ব এবং ডিজাস্টার রিকভারি কৌশল আয়ত্ত করুন। অপারেটিং সিস্টেমের fork এবং কপি-অন-রাইট (CoW) মেমরির মাধ্যমে RDB বাইনারি স্ন্যাপশট তৈরির অভ্যন্তরীণ প্রক্রিয়া জানুন। BGSAVE পলিসি কনফিগার করুন। অ্যাপেন্ড-অনলি ফাইল (AOF) প্রোটোকল লগিং বুঝুন এবং always, everysec ও no এর মধ্যে উপযুক্ত fsync পলিসি বেছে নিন। BGREWRITEAOF দিয়ে স্বয়ংক্রিয়ভাবে লগ ফাইল ছোট করুন। দ্রুততম রিস্টার্টের জন্য হাইব্রিড RDB-AOF পারসিস্টেন্স ব্যবহার করুন, redis-check-aof দিয়ে নষ্ট ফাইল মেরামত করুন এবং Node.js-এ পারসিস্টেন্সের স্বাস্থ্য পর্যবেক্ষণ করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-redis-release',
    tech: 'redis',
    title: {
      en: 'Redis in Production: Transactions, Pipelines & Clustering',
      bn: 'প্রোডাকশনে Redis: ট্রানজ্যাকশন, পাইপলাইনিং ও ক্লাস্টারিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. In-Memory Volatility vs Durability Trade-offs', bn: '১. ইন-মেমরি ক্ষণস্থায়িত্ব বনাম ডেটার স্থায়িত্ব' } },
    {
      type: 'para',
      text: {
        en: 'By default, Redis stores all data in volatile server RAM. While RAM provides sub-millisecond execution speeds, an operating system crash or power outage immediately wipes out all stored values. To prevent catastrophic data loss, Redis offers two complementary persistence engines: RDB (point-in-time snapshots) and AOF (continuous append-only command logs).',
        bn: 'ডিফল্টভাবে Redis সমস্ত ডেটা সার্ভারের ক্ষণস্থায়ী র‍্যামে সংরক্ষণ করে। র‍্যাম যেখানে বিদ্যুৎগতির পারফরম্যান্স নিশ্চিত করে, সেখানে অপারেটিং সিস্টেম ক্র্যাশ বা সার্ভারের বিদ্যুৎ চলে গেলে সমস্ত ডেটা নিমিষেই মুছে যেতে পারে। ডেটা হারানো প্রতিরোধ করতে Redis দুটি পরিপূরক পারসিস্টেন্স ইঞ্জিন অফার করে: RDB (নির্দিষ্ট সময়ের স্ন্যাপশট) এবং AOF (প্রতিটি কমান্ডের ধারাবাহিক লগ)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `PERSISTENCE MECHANISM TRADEOFF:
1. RDB (Snapshot)   : Fast recovery, compact binary image, potential loss of last few minutes.
2. AOF (Append Log) : High durability (everysec), append log, larger disk size.
3. Hybrid (Modern)  : Combines fast RDB loading with fine-grained AOF replay!`,
      caption: {
        en: 'Selecting between RDB and AOF balances disaster tolerance against disk I/O budgets.',
        bn: 'RDB এবং AOF-এর সঠিক নির্বাচন ডিস্কের সক্ষমতা এবং সুরক্ষার ভারসাম্য রক্ষা করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Redis Persistence Architecture: RDB Fork vs AOF Fsync', bn: 'Redis পারসিস্টেন্স আর্কিটেকচার: RDB ফর্ক বনাম AOF সিঙ্ক' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Redis Persistence Architecture Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="160" height="100" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Redis Main Process</text>
<text x="80" y="70" font-size="10" fill="#cbd5e1" text-anchor="middle">In-Memory RAM</text>
<text x="80" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Processes Client Ops</text>

<path d="M165,50 L255,30" stroke="#10b981" stroke-width="2"/>
<path d="M165,90 L255,110" stroke="#f59e0b" stroke-width="2"/>

<rect x="260" y="10" width="180" height="50" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
<text x="350" y="30" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">OS Fork Child (BGSAVE)</text>
<text x="350" y="48" font-size="9" fill="#cbd5e1" text-anchor="middle">Copy-on-Write (CoW)</text>

<rect x="260" y="80" width="180" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
<text x="350" y="100" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">AOF Buffer Engine</text>
<text x="350" y="118" font-size="9" fill="#cbd5e1" text-anchor="middle">Fsync: everysec</text>

<path d="M445,35 L525,35" stroke="#10b981" stroke-width="2"/>
<path d="M445,105 L525,105" stroke="#f59e0b" stroke-width="2"/>

<rect x="530" y="10" width="130" height="50" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
<text x="595" y="35" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">dump.rdb</text>
<text x="595" y="50" font-size="9" fill="#94a3b8" text-anchor="middle">Compact Binary</text>

<rect x="530" y="80" width="130" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
<text x="595" y="105" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">appendonly.aof</text>
<text x="595" y="120" font-size="9" fill="#94a3b8" text-anchor="middle">Continuous Log</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. RDB Architecture: Fork & Copy-on-Write (CoW)', bn: '২. RDB আর্কিটেকচার: ফর্ক ও কপি-অন-রাইট মেমরি' } },
    {
      type: 'para',
      text: {
        en: 'RDB snapshots save the entire dataset as a compressed binary file named dump.rdb. To take a snapshot without freezing client requests, Redis calls the operating system fork() system call. The child process inherits a point-in-time view of RAM via Copy-on-Write (CoW) memory pages and writes the file asynchronously while the parent continues serving traffic.',
        bn: 'RDB পুরো ডাটাবেসের একটি সংকুচিত বাইনারি ফাইল dump.rdb তৈরি করে। ক্লায়েন্টের রিকোয়েস্টে বিঘ্ন না ঘটিয়ে স্ন্যাপশট নিতে Redis লিনাক্সের fork() সিস্টেম কল চালায়। এর ফলে তৈরি হওয়া চাইল্ড প্রসেস কপি-অন-রাইট (CoW) মেমরি পেজের মাধ্যমে মূল মেমরির একটি স্ন্যাপশট পায় এবং ব্যাকগ্রাউন্ডে ফাইল লিখে ফেলে, যখন মূল প্রসেস ক্লায়েন্টের কাজ চালিয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Trigger asynchronous snapshot without blocking the main event loop:
BGSAVE
# Output: Background saving started

# Check last successful snapshot timestamp:
LASTSAVE
# Output: (integer) 1727352000

# Danger: SAVE blocks all incoming queries until completion:
# SAVE (Never use in production!)`,
      caption: {
        en: 'BGSAVE forks an asynchronous worker, while synchronous SAVE stalls server operations.',
        bn: 'BGSAVE ব্যাকগ্রাউন্ডে স্ন্যাপশট নেয়, কিন্তু SAVE পুরো সার্ভারকে সাময়িক ফ্রিজ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Configuring Automatic Snapshot Rules in redis.conf', bn: '৩. redis.conf ফাইলে স্বয়ংক্রিয় স্ন্যাপশট পলিসি কনফিগারেশন' } },
    {
      type: 'para',
      text: {
        en: 'In redis.conf, automatic snapshot intervals are configured using save directives. Each rule defines a threshold pairing elapsed seconds with the minimum number of modified keys. If either condition triggers, Redis invokes BGSAVE automatically in the background.',
        bn: 'redis.conf ফাইলে save নির্দেশিকা দিয়ে স্ন্যাপশটের সময়সূচি ঠিক করা হয়। প্রতিটি নিয়ম নির্দিষ্ট সেকেন্ডের মধ্যে নূন্যতম কতটি কি পরিবর্তিত হলো তার শর্ত নির্ধারণ করে। কোনো একটি শর্ত পূরণ হওয়ামাত্র Redis স্বয়ংক্রিয়ভাবে ব্যাকগ্রাউন্ডে BGSAVE শুরু করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Save the dataset to disk automatically:
# save <seconds> <changes>

save 900 1      # Save after 900 seconds (15 min) if at least 1 key changed
save 300 10     # Save after 300 seconds (5 min) if at least 10 keys changed
save 60 10000   # Save after 60 seconds if at least 10,000 keys changed

# To completely disable RDB snapshots:
# save ""`,
      caption: {
        en: 'Configuring multi-tiered save rules balances snapshot frequency against CPU load.',
        bn: 'বিভিন্ন স্তরের save নিয়ম স্ন্যাপশটের পুনরাবৃত্তি ও প্রসেসরের চাপের ভারসাম্য রাখে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Append-Only File (AOF): Continuous Protocol Logging', bn: '৪. অ্যাপেন্ড-অনলি ফাইল (AOF): ধারাবাহিক প্রোটোকল লগিং' } },
    {
      type: 'para',
      text: {
        en: 'If a server crashes 4 minutes after the last RDB snapshot, all writes that occurred during those 4 minutes are lost permanently. The Append-Only File (AOF) solves this by logging every single write command received by Redis in real-time using standard Redis Serialization Protocol (RESP).',
        bn: 'শেষ স্ন্যাপশট নেওয়ার ৪ মিনিট পর সার্ভার ক্র্যাশ করলে ওই ৪ মিনিটের সমস্ত ডেটা চিরতরে হারিয়ে যায়। অ্যাপেন্ড-অনলি ফাইল (AOF) প্রতিটি রাইট কমান্ড রিয়েল-টাইমে ফাইলে লিখে রেখে এই সমস্যার সমাধান করে। এর ফলে সার্ভার রিস্টার্টের সময় প্রতিটি কমান্ড পুনরায় চালিয়ে পুরো ডেটা হুবহু ফিরিয়ে আনা সম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting actual RESP commands stored inside appendonly.aof:
# *3\\r\\n$3\\r\\nSET\\r\\n$8\\r\\nuser:101\\r\\n$5\\r\\nAlice\\r\\n

# Turn on AOF persistence live via redis-cli:
CONFIG SET appendonly yes
# Output: OK (Redis immediately starts streaming writes to appendonly.aof)`,
      caption: {
        en: 'AOF stores human-readable RESP commands, ensuring transparency and easy auditing.',
        bn: 'AOF মানুষের পাঠযোগ্য RESP প্রোটোকলে কমান্ড লিখে রাখে যা সহজেই অডিট করা যায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. AOF Fsync Durability Policies: always vs everysec vs no', bn: '৫. AOF Fsync পলিসি: always বনাম everysec বনাম no' } },
    {
      type: 'para',
      text: {
        en: 'Writing to disk actually writes to the operating system kernel page cache. The appendfsync configuration dictates when the OS flushes that buffer to physical storage. appendfsync always flushes every single write (safest, lowest throughput). appendfsync everysec flushes once per second (industry gold standard). appendfsync no lets the OS decide when to flush.',
        bn: 'ফাইলে কোনো কিছু লিখলে প্রথমে তা অপারেটিং সিস্টেমের কার্নেল মেমরিতে জমা হয়। appendfsync কনফিগারেশন নির্ধারণ করে কখন ওএস তা ডিস্কে স্থায়ী করবে। appendfsync always প্রতিটি লেখার পর ডিস্কে সেভ করে (সবচেয়ে নিরাপদ কিন্তু ধীরগতির)। appendfsync everysec প্রতি সেকেন্ডে একবার সেভ করে (বিশ্বমানের সেরা সমাধান)। appendfsync no ওএসের ওপর সিদ্ধান্ত ছেড়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `FSYNC DURABILITY SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Policy            | Durability Level   | Write Performance  | Maximum Data Loss  |
+-------------------+--------------------+--------------------+--------------------+
| appendfsync always| Maximum Durability | Slow (~2-5k ops/s) | Zero Transactions  |
| appendfsync everysec| High (Recommended)| Fast (100k+ ops/s) | At most 1 second   |
| appendfsync no    | OS-Dependent       | Maximum Speed      | Up to 30+ seconds  |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Fsync everysec is the industry gold standard, losing at most 1 second of data upon power loss.',
        bn: 'Fsync everysec হলো সেরা স্ট্যান্ডার্ড, যা বিদ্যুৎ বিচ্ছিন্ন হলেও সর্বোচ্চ ১ সেকেন্ডের বেশি ডেটা হারায় না।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. AOF Compaction & Rewriting: BGREWRITEAOF', bn: '৬. AOF কম্প্যাকশন ও রিরাইটিং: BGREWRITEAOF' } },
    {
      type: 'para',
      text: {
        en: 'Over time, logging every operation causes appendonly.aof to expand into gigabytes. If a counter is incremented thousands of times, AOF holds thousands of lines. The BGREWRITEAOF command forks a child process to reconstruct the minimal commands required to rebuild current RAM state, shrinking those numerous increments into a single SET command.',
        bn: 'সময়ের সাথে সাথে প্রতিটি পরিবর্তন লিখতে গিয়ে AOF ফাইলটি বিশাল আকার ধারণ করতে পারে। একটি কাউন্টার হাজার হাজার বার বাড়ালে ফাইলে হাজার হাজার লাইন জমা হয়। BGREWRITEAOF কমান্ড ব্যাকগ্রাউন্ডে একটি চাইল্ড প্রসেস খুলে মেমরির বর্তমান মান দেখে নতুন একটি ছোট ফাইল লেখে, ফলে সেই অসংখ্য লাইনের বৃদ্ধি একটিমাত্র SET কমান্ডে সংকুচিত হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Trigger manual background AOF rewriting:
BGREWRITEAOF
# Output: Background append only file rewriting started

# Automatic rewrite settings inside redis.conf:
# auto-aof-rewrite-percentage 100 (Rewrites when file doubles in size)
# auto-aof-rewrite-min-size 64mb   (Minimum threshold before rewriting triggers)`,
      caption: {
        en: 'AOF rewriting purges obsolete intermediate modifications, keeping log sizes manageable.',
        bn: 'AOF রিরাইটিং অপ্রয়োজনীয় পুরনো কমান্ড বাদ দিয়ে ফাইল সাইজ ছোট রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Hybrid Persistence: RDB Preamble + AOF Delta Tail', bn: '৭. হাইব্রিড পারসিস্টেন্স: RDB প্রিঅ্যাম্বল ও AOF টেল' } },
    {
      type: 'para',
      text: {
        en: 'Loading a pure AOF file with millions of commands during server restart takes significant time. In modern Redis (version 5.0 and newer), aof-use-rdb-preamble yes creates a hybrid persistence format. The rewritten AOF file begins with a dense binary RDB snapshot representing base state, followed by pure RESP AOF commands representing recent deltas.',
        bn: 'সার্ভার রিস্টার্টের সময় কোটি কোটি লাইনের AOF ফাইল পড়া অনেক বেশি সময়সাপেক্ষ। আধুনিক Redis-এ aof-use-rdb-preamble yes দিয়ে একটি হাইব্রিড ফাইল ফরম্যাট তৈরি করা হয়। এখানে ফাইলের শুরুতে একটি দ্রুত লোডযোগ্য RDB স্ন্যাপশট থাকে এবং তার শেষে সাম্প্রতিক পরিবর্তনের AOF কমান্ডগুলো যুক্ত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `HYBRID PERSISTENCE FILE STRUCTURE:
+------------------------------------+----------------------------------+
| Binary RDB Snapshot Base           | Real-time RESP AOF Tail Delta    |
| [REDIS0009......(Instant Load)]    | [*3\\r\\n$3\\r\\nSET\\r\\n$4...]             |
+------------------------------------+----------------------------------+
<--------- Fast Startup (~95%) ------> <---- Fine-Grained Durability ---->`,
      caption: {
        en: 'Hybrid persistence merges fast RDB system startup times with granular AOF write safety.',
        bn: 'হাইব্রিড পারসিস্টেন্স RDB-এর বিদ্যুৎগতির বুট স্পিড এবং AOF-এর ডেটা নিরাপত্তা একত্রিত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Disaster Recovery & Repairing Corrupted Logs', bn: '৮. ডিজাস্টার রিকভারি ও নষ্ট ফাইল মেরামত' } },
    {
      type: 'para',
      text: {
        en: 'If a server suffers an abrupt power loss while the OS is flushing a write, the end of the AOF file can become corrupted. Redis ships with command-line utilities redis-check-rdb and redis-check-aof. Executing redis-check-aof --fix scans the log, cuts off incomplete or torn write frames at the tail, and restores boot viability.',
        bn: 'ডিস্কে লেখার সময় হঠাৎ বিদ্যুৎ চলে গেলে AOF ফাইলের শেষ প্রান্তটি নষ্ট হয়ে যেতে পারে। এর ফলে সার্ভার আর বুট হতে চায় না। Redis-এর সাথে redis-check-rdb এবং redis-check-aof নামের টুল থাকে। redis-check-aof --fix কমান্ড দিলে এটি নষ্ট কমান্ডের অংশটুকু কেটে ফাইল মেরামত করে সার্ভারকে চালু করার উপযোগী করে তোলে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Validating integrity of snapshot:
redis-check-rdb /var/lib/redis/dump.rdb

# Detecting and repairing truncated AOF file:
redis-check-aof --fix /var/lib/redis/appendonly.aof
# Successfully truncated 32 corrupted bytes; AOF file restored!`,
      caption: {
        en: 'CLI repair utilities eliminate boot failures caused by truncated power-loss frames.',
        bn: 'রিপায়ার ইউটিলিটি অসম্পূর্ণ কমান্ডের অংশ ছেঁটে ফেলে সার্ভার চালু করার নিশ্চয়তা দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Persistence Selection Matrix: Enterprise Playbooks', bn: '৯. পারসিস্টেন্স নির্বাচন ম্যাট্রিক্স: এন্টারপ্রাইজ গাইড' } },
    {
      type: 'para',
      text: {
        en: 'Different workloads require tailored durability architectures: Pure caching tiers (e.g. session tokens) disable persistence entirely to maximize throughput. Financial and transactional engines combine both RDB snapshots (shipped offsite to cloud storage every hour) and AOF everysec for production-grade reliability.',
        bn: 'কাজের ধরনের ওপর ভিত্তি করে পারসিস্টেন্স কৌশল ঠিক করতে হয়: সাধারণ ক্যাশের জন্য কোনো ফাইল সেভের দরকার নেই, ফলে সর্বোচ্চ স্পিড পাওয়া যায়। কিন্তু পেমেন্ট বা গুরুত্বপূর্ণ ডেটার জন্য প্রতি ঘণ্টায় নেওয়া RDB স্ন্যাপশট ক্লাউড স্টোরেজে ব্যাকআপ রাখা হয় এবং একই সাথে AOF everysec চালু রেখে ডেটার সর্বোচ্চ নিরাপত্তা নিশ্চিত করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `ENTERPRISE DURABILITY DECISION PLAYBOOK:
1. Cache-Only Microservice  : disable save (""), disable appendonly (no disk I/O).
2. Analytics & Session Store : save 300 10, disable AOF (RDB sufficient, fast restart).
3. Critical Production DB    : aof-use-rdb-preamble yes, appendfsync everysec, hourly RDB S3 backup.`,
      caption: {
        en: 'Tailor Redis persistence configurations to the business cost of transient data loss.',
        bn: 'ডেটা হারানোর ক্ষতির মাত্রা বিবেচনা করে উপযুক্ত পারসিস্টেন্স কনফিগারেশন বেছে নিন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Monitoring Persistence Health in Node.js', bn: '১০. Node.js-এ পারসিস্টেন্স স্বাস্থ্য পর্যবেক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'Production infrastructure must alert whenever background saving fails. Here is a health-check monitor querying INFO persistence using ioredis.',
        bn: 'ব্যাকগ্রাউন্ডে স্ন্যাপশট ফেইল করলে যেন সাথে সাথে অ্যালার্ট পাঠানো যায় সেজন্য ioredis ব্যবহার করে পারসিস্টেন্সের স্বাস্থ্য পর্যবেক্ষণের একটি স্ক্রিপ্ট নিচে দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import Redis from "ioredis";
const redis = new Redis("redis://127.0.0.1:6379");

async function checkPersistenceHealth() {
  const infoRaw = await redis.info("persistence");
  const metrics = {};

  infoRaw.split("\\r\\n").forEach(line => {
    const [key, value] = line.split(":");
    if (key && value) metrics[key] = value;
  });

  const bgsaveOk = metrics["rdb_last_bgsave_status"] === "ok";
  const aofEnabled = metrics["aof_enabled"] === "1";
  const aofRewriteOk = metrics["aof_last_bgrewrite_status"] !== "err";

  console.log("Persistence Audit Summary:", {
    bgsaveStatus: metrics["rdb_last_bgsave_status"],
    aofEnabled,
    rdbLastSaveTime: new Date(Number(metrics["rdb_last_save_time"]) * 1000).toISOString()
  });

  return bgsaveOk && aofRewriteOk;
}

await checkPersistenceHealth();
console.log("Persistence health check completed");
// Output: Persistence health check completed`,
      caption: {
        en: 'Automated health monitors catch disk write failures before they trigger data loss.',
        bn: 'স্বয়ংক্রিয় মনিটরিং ডিস্কের সমস্যা আগে থেকেই শনাক্ত করে ডেটা ক্ষতি রোধ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'red-per-ex1',
      kind: 'predict',
      topic: 'redis: recommended appendfsync policy',
      question: {
        en: 'What is the recommended industry gold standard value for appendfsync in production environments balancing performance with durability?',
        bn: 'পারফরম্যান্স ও নিরাপত্তার নিখুঁত ভারসাম্য বজায় রাখতে প্রোডাকশন পরিবেশে appendfsync এর প্রস্তাবিত সেরা মান কী?'
      },
      code: `/* Recommended appendfsync setting in redis.conf: */
/* appendfsync _______ */`,
      answer: 'everysec',
      accept: ['everysec', 'every second', 'every-sec'],
      hint: {
        en: 'everysec policy.',
        bn: 'everysec পলিসি।'
      },
      explanation: {
        en: 'appendfsync everysec flushes write buffers to disk once per second, offering blazing speed while capping data loss to at most 1 second.',
        bn: 'appendfsync everysec প্রতি সেকেন্ডে একবার ডিস্কে লেখে, যা চমৎকার গতির সাথে সর্বোচ্চ ১ সেকেন্ডের ঝুঁকি নিশ্চিত করে।'
      }
    },
    {
      id: 'red-per-ex2',
      kind: 'mcq',
      topic: 'redis: asynchronous snapshot command',
      question: {
        en: 'Which Redis command creates a point-in-time RDB snapshot in the background using a forked child process without blocking queries?',
        bn: 'কোন Redis কমান্ডটি ব্যাকগ্রাউন্ডে একটি ফর্কড চাইল্ড প্রসেস খুলে ক্লায়েন্টের কুয়েরি না থামিয়েই RDB স্ন্যাপশট তৈরি করে?'
      },
      options: [
        { en: 'BGSAVE', bn: 'BGSAVE' },
        { en: 'SAVE', bn: 'SAVE' },
        { en: 'DUMP', bn: 'DUMP' },
        { en: 'SNAPSHOT', bn: 'SNAPSHOT' }
      ],
      answer: 0,
      hint: {
        en: 'BGSAVE (Background Save).',
        bn: 'BGSAVE (ব্যাকগ্রাউন্ড সেভ)।'
      },
      explanation: {
        en: 'BGSAVE forks a child process to write the RDB file asynchronously, while SAVE blocks the main thread completely.',
        bn: 'BGSAVE ব্যাকগ্রাউন্ডে কাজ সম্পন্ন করে, কিন্তু SAVE মূল থ্রেডকে ব্লক করে রাখে।'
      }
    },
    {
      id: 'red-per-ex3',
      kind: 'mcq',
      topic: 'redis: aof repair cli tool',
      question: {
        en: 'Which command-line utility trims truncated corrupted write frames from an AOF file following an abrupt power loss?',
        bn: 'হঠাৎ বিদ্যুৎ চলে যাওয়ার পর নষ্ট হয়ে যাওয়া AOF ফাইল মেরামত করতে কোন কমান্ড-লাইন ইউটিলিটি ব্যবহার করা হয়?'
      },
      options: [
        { en: 'redis-check-aof --fix', bn: 'redis-check-aof --fix' },
        { en: 'redis-repair-db', bn: 'redis-repair-db' },
        { en: 'fsck-redis', bn: 'fsck-redis' },
        { en: 'fix-my-redis-now', bn: 'fix-my-redis-now' }
      ],
      answer: 0,
      hint: {
        en: 'redis-check-aof --fix tool.',
        bn: 'redis-check-aof --fix টুল।'
      },
      explanation: {
        en: 'redis-check-aof --fix strips corrupt trailing bytes from an append-only file, enabling the server to boot successfully.',
        bn: 'redis-check-aof --fix নষ্ট হয়ে যাওয়া প্রান্ত ছেঁটে ফাইল ঠিক করে দেয় যাতে সার্ভার নিরাপদে চালু হতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'red-per-quiz',
    title: { en: 'Redis Persistence & Disaster Recovery Quiz', bn: 'Redis পারসিস্টেন্স ও ডিজাস্টার রিকভারি কুইজ' },
    questions: [
      {
        id: 'rpkq1_snap',
        kind: 'mcq',
        topic: 'redis: operating system memory mechanism in bgsave',
        question: {
          en: 'Which operating system memory management feature allows Redis BGSAVE to snapshot RAM without duplicating memory consumption immediately?',
          bn: 'কোন অপারেটিং সিস্টেম মেমরি ফিচারটি Redis BGSAVE-কে সাথে সাথে অতিরিক্ত র‍্যাম ব্যবহার না করেই স্ন্যাপশট নিতে সাহায্য করে?'
        },
        options: [
          { en: 'Copy-on-Write (CoW)', bn: 'কপি-অন-রাইট (CoW)' },
          { en: 'Swap paging', bn: 'সোয়াপ পেজিং' },
          { en: 'Direct memory access', bn: 'ডিরেক্ট মেমরি এক্সেস' },
          { en: 'Virtual GPU partitioning', bn: 'ভার্চুয়াল জিপিইউ পার্টিশন' }
        ],
        answer: 0,
        hint: {
          en: 'Copy-on-Write mechanism.',
          bn: 'কপি-অন-রাইট মেকানিজম।'
        },
        explanation: {
          en: 'Copy-on-Write shares memory pages between parent and child until written to, keeping memory overhead minimal during snapshots.',
          bn: 'কপি-অন-রাইট ফিচারটি লেখার আগ পর্যন্ত প্যারেন্ট ও চাইল্ড প্রসেসের মাঝে মেমরি শেয়ার করে মেমরি অপচয় রোধ করে।'
        }
      },
      {
        id: 'rpkq2_snap',
        kind: 'mcq',
        topic: 'redis: aof rewriting command',
        question: {
          en: 'Which background command rewrites the append-only log into a compact minimal representation of current state?',
          bn: 'কোন ব্যাকগ্রাউন্ড কমান্ডটি অ্যাপেন্ড-অনলি ফাইলকে ছোট করে বর্তমান মেমরির সবচেয়ে কমসংখ্যক প্রয়োজনীয় কমান্ডে রূপান্তর করে?'
        },
        options: [
          { en: 'BGREWRITEAOF', bn: 'BGREWRITEAOF' },
          { en: 'COMPACT_AOF', bn: 'COMPACT_AOF' },
          { en: 'PURGE_LOGS', bn: 'PURGE_LOGS' },
          { en: 'SHRINK_DATABASE', bn: 'SHRINK_DATABASE' }
        ],
        answer: 0,
        hint: {
          en: 'BGREWRITEAOF command.',
          bn: 'BGREWRITEAOF কমান্ড।'
        },
        explanation: {
          en: 'BGREWRITEAOF creates a minimal replacement log in the background based on current keyspace contents.',
          bn: 'BGREWRITEAOF মেমরির বর্তমান মান নিয়ে ব্যাকগ্রাউন্ডে একটি নতুন ছোট AOF ফাইল তৈরি করে।'
        }
      },
      {
        id: 'rpkq3_snap',
        kind: 'mcq',
        topic: 'redis: hybrid persistence architecture',
        question: {
          en: 'What constitutes the structure of a modern Redis hybrid persistence file (aof-use-rdb-preamble yes)?',
          bn: 'আধুনিক Redis হাইব্রিড পারসিস্টেন্স ফাইলের (aof-use-rdb-preamble yes) অভ্যন্তরীণ গঠন কেমন হয়?'
        },
        options: [
          { en: 'An initial dense binary RDB snapshot base followed by streaming RESP AOF incremental commands at the tail', bn: 'শুরুতে দ্রুত লোডযোগ্য বাইনারি RDB স্ন্যাপশট এবং তার শেষে ধারাবাহিক RESP AOF কমান্ডের সমন্বয়' },
          { en: 'Two duplicate copies of an SQLite database', bn: 'একটি এসকিউলাইট ডাটাবেসের দুটি কপি' },
          { en: 'A ZIP archive holding PNG images', bn: 'ছবি সমৃদ্ধ একটি জিপ ফাইল' },
          { en: 'A plain JSON file with no compression', bn: 'কোনো কম্প্রেশন ছাড়া প্লেইন জেএসওন ফাইল' }
        ],
        answer: 0,
        hint: {
          en: 'Binary RDB preamble with AOF command tail.',
          bn: 'RDB প্রিঅ্যাম্বল এবং AOF কমান্ডের টেল।'
        },
        explanation: {
          en: 'The hybrid format allows Redis to boot in seconds by loading the RDB base, followed by applying recent AOF delta updates.',
          bn: 'হাইব্রিড ফরম্যাট RDB বেস লোড করে নিমিষেই বুট সম্পন্ন করে এবং সাম্প্রতিক AOF কমান্ড দিয়ে ডেটা আপডেট করে।'
        }
      },
      {
        id: 'rpkq4_snap',
        kind: 'mcq',
        topic: 'redis: disable persistence completely',
        question: {
          en: 'How do administrators disable both RDB snapshots and AOF logging for pure volatile caching workloads?',
          bn: 'সম্পূর্ণ ক্যাশিং কাজের জন্য কীভাবে RDB স্ন্যাপশট এবং AOF লগিং উভয়ই পুরোপুরি বন্ধ করা যায়?'
        },
        options: [
          { en: 'Set save "" and appendonly no in the redis configuration', bn: 'রেডিস কনফিগারেশনে save "" এবং appendonly no সেট করে' },
          { en: 'Delete the redis executable binary from Linux', bn: 'লিনাক্স থেকে রেডিস ফাইল মুছে ফেলে' },
          { en: 'Turn off the server power completely', bn: 'সার্ভার বন্ধ করে' },
          { en: 'Block database port traffic in the firewall', bn: 'ফায়ারওয়ালে ডাটাবেস পোর্ট ব্লক করে' }
        ],
        answer: 0,
        hint: {
          en: 'save "" and appendonly no.',
          bn: 'save "" এবং appendonly no।'
        },
        explanation: {
          en: 'Disabling save directives and turning off appendonly prevents any disk writes, maximizing pure in-memory throughput.',
          bn: 'save খালি এবং appendonly no রাখলে ডিস্কে কোনো কিছু লেখা হয় না, যা সর্বোচ্চ মেমরি স্পিড নিশ্চিত করে।'
        }
      }
    ]
  }
};
