import type { Lesson } from '../../../lib/types';

export const ShardsAndTheKeyLesson: Lesson = {
  slug: 'shards-and-the-key',
  tech: 'mongodb',
  title: {
    en: 'MongoDB Sharding: Chunk Balancing, Shard Keys & Horizontal Scale',
    bn: 'MongoDB শার্ডিং: চাঙ্ক ব্যালান্সিং, শার্ড কি ও অনুভূমিক স্কেলিং'
  },
  summary: {
    en: 'Master horizontal database partitioning and massive cluster scaling in MongoDB across 10 structured topics. Understand the three components of a partitioned cluster: storage nodes, configuration servers, and mongos query routers. Evaluate partitioning key criteria: cardinality, frequency, and monotonicity. Compare ranged strategies with hashed algorithms. Prevent hotspot bottlenecks using compound partitioning keys. Explore the 64 MB chunk threshold and background chunk migrators. Contrast targeted single-node queries with scatter-gather broadcast queries. Implement geographic zone tagging and diagnose cluster health with sh.status().',
    bn: '১০টি সুসংগঠিত পয়েন্টে MongoDB-র অনুভূমিক পার্টিশনিং ও ক্লাস্টার স্কেলিং আয়ত্ত করুন। ক্লাস্টারের তিনটি মূল উপাদান: স্টোরেজ নোড, কনফিগ সার্ভার ও mongos কুয়েরি রাউটার বুঝুন। শার্ড কি নির্বাচনের মানদণ্ড: কার্ডিনালিটি, ফ্রিকোয়েন্সি ও মোনোটোনিসিটি বিশ্লেষণ করুন। রেঞ্জ বনাম হ্যাশড স্ট্র্যাটেজির তুলনা জানুন। কম্পাউন্ড কি দিয়ে হটস্পট সমস্যা প্রতিরোধ করুন। ৬৪ মেগাবাইট চাঙ্ক সীমা ও ব্যাকগ্রাউন্ড ব্যালান্সার কার্যপদ্ধতি শিখুন। টার্গেটেড একক কুয়েরি বনাম স্ক্যাটার-গ্যাদার ব্রডকাস্ট কুয়েরির পার্থক্য বুঝুন। জিওগ্রাফিক জোন ট্যাগিং বাস্তবায়ন করুন এবং sh.status() দিয়ে ক্লাস্টার নিরীক্ষা করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'txns-and-the-session',
    tech: 'mongodb',
    title: {
      en: 'MongoDB Multi-Document ACID Transactions & Sessions',
      bn: 'MongoDB মাল্টি-ডকুমেন্ট এসিড ট্রানজ্যাকশন ও সেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Horizontal Scaling vs Vertical Scaling: Scaling Past Limits', bn: '১. অনুভূমিক বনাম উল্লম্ব স্কেলিং: একক সার্ভারের সীমা অতিক্রম' } },
    {
      type: 'para',
      text: {
        en: 'When your applications experience massive user growth, vertical scaling upgrades a single server with more CPU cores and RAM. Eventually, your hardware hits physical limits and exponential costs. Sharding provides horizontal scaling, distributing your datasets across dozens of independent database clusters.',
        bn: 'আপনার অ্যাপ্লিকেশনের ব্যবহারকারী দ্রুত বৃদ্ধি পেলে উল্লম্ব স্কেলিংয়ের মাধ্যমে একটিমাত্র সার্ভারে প্রসেসর ও র‍্যাম বাড়ানো হয়। তবে একসময় আপনার হার্ডওয়্যার চরম ক্ষমতা স্পর্শ করে এবং খরচও বহুগুণ বেড়ে যায়। শার্ডিং অনুভূমিক স্কেলিং সুবিধা দেয়, যা আপনার বিশাল ডেটাসেটকে একাধিক স্বাধীন ডাটাবেস ক্লাস্টারের মাঝে ছড়িয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `VERTICAL SCALING (Scale-Up):
Single Giant Server: 128 Cores, 2 TB RAM -> EXTREMELY EXPENSIVE & HITS HARDWARE ROOF!

HORIZONTAL SCALING (Scale-Out / Sharding):
Cluster of 20 Commodity Servers:
Shard 1 (20 TB) + Shard 2 (20 TB) + Shard 3 (20 TB) ... = 400 Terabytes!
(Scale dynamically by adding new nodes without downtime!)`,
      caption: {
        en: 'Horizontal scaling divides the storage burden across many commodity machines.',
        bn: 'অনুভূমিক স্কেলিং অনেকগুলো সাধারণ মেশিনে ডেটার চাপ ভাগ করে দেয়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Sharded Cluster Topology & Query Routing', bn: 'শার্ডেড ক্লাস্টার আর্কিটেকচার ও রাউটিং ব্যবস্থা' },
      svg: `<svg viewBox="0 0 680 190" font-family="system-ui, sans-serif" role="img" aria-label="MongoDB Sharded Cluster Topology with mongos and config servers">
<g transform="translate(20, 15)">
<rect x="220" y="0" width="200" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
<text x="320" y="25" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">mongos Query Routers</text>

<path d="M220,20 L110,55" stroke="#94a3b8" stroke-width="1.5"/>
<path d="M420,20 L530,55" stroke="#94a3b8" stroke-width="1.5"/>

<rect x="200" y="55" width="240" height="35" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
<text x="320" y="77" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Config Servers (Metadata Catalog)</text>

<path d="M260,90 L100,120" stroke="#10b981" stroke-width="2"/>
<path d="M320,90 L320,120" stroke="#10b981" stroke-width="2"/>
<path d="M380,90 L540,120" stroke="#10b981" stroke-width="2"/>

<rect x="10" y="120" width="180" height="50" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
<text x="100" y="142" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">SHARD 1 (Replica)</text>
<text x="100" y="158" font-size="9" fill="#94a3b8" text-anchor="middle">Chunks: A -> M</text>

<rect x="230" y="120" width="180" height="50" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
<text x="320" y="142" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">SHARD 2 (Replica)</text>
<text x="320" y="158" font-size="9" fill="#94a3b8" text-anchor="middle">Chunks: N -> S</text>

<rect x="450" y="120" width="180" height="50" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
<text x="540" y="142" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">SHARD 3 (Replica)</text>
<text x="540" y="158" font-size="9" fill="#94a3b8" text-anchor="middle">Chunks: T -> Z</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Sharded Cluster Architecture: Shards, Config Servers & mongos', bn: '২. শার্ডেড ক্লাস্টার আর্কিটেকচার: শার্ড, কনফিগ সার্ভার ও mongos' } },
    {
      type: 'para',
      text: {
        en: 'A MongoDB sharded cluster consists of three distinct components. First, Shards are independent replica sets that hold partitions of data. Second, the Config Database is a dedicated 3-node replica set storing routing metadata. Third, mongos Routers act as stateless query proxies routing operations to the proper storage partition.',
        bn: 'একটি MongoDB শার্ডেড ক্লাস্টারে তিনটি মূল উপাদান থাকে: ১) শার্ড (Shard): প্রতিটি শার্ড একটি স্বয়ংসম্পূর্ণ রেপ্লিকা সেট যা নির্দিষ্ট ডেটা ধারণ করে; ২) কনফিগ সার্ভার: ৩-নোডের একটি রেপ্লিকা সেট যা ক্লাস্টারের ম্যাপিং ও মেটাডেটা রাখে। ৩) mongos রাউটার: স্টেটলেস কুয়েরি প্রক্সি যা ক্লায়েন্টের কুয়েরি বুঝে সঠিক শার্ডে পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SHARDED CLUSTER ARCHITECTURE:
                  [Client Applications]
                     /            \\
                    v              v
           [mongos Router 1]   [mongos Router 2]
                   \\                /
                    v              v
               [Config Server Replica Set]
               (Stores Metadata & Chunk Maps)
              /            |            \\
             v             v             v
       +-----------+ +-----------+ +-----------+
       |  SHARD 1  | |  SHARD 2  | |  SHARD 3  |
       | (Replica) | | (Replica) | | (Replica) |
       +-----------+ +-----------+ +-----------+`,
      caption: {
        en: 'Clients interact with stateless mongos routers, completely abstracting physical shards.',
        bn: 'ক্লায়েন্ট mongos রাউটারের সাথে যুক্ত থাকে, মূল শার্ডগুলো পেছনে লুকানো থাকে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Shard Key Selection: Cardinality, Frequency & Monotonicity', bn: '৩. শার্ড কি নির্বাচন: কার্ডিনালিটি, ফ্রিকোয়েন্সি ও মোনোটোনিসিটি' } },
    {
      type: 'para',
      text: {
        en: 'Choosing the partitioning key is the most critical architectural decision. Three essential criteria determine viability: 1) High Cardinality (must possess millions of distinct values, e.g. customerId instead of boolean flags); 2) Low Frequency (no single value dominates total volume); 3) Non-Monotonic (avoid monotonically increasing IDs like auto-increments or ObjectIDs).',
        bn: 'শার্ড কি নির্বাচন করা সবচেয়ে গুরুত্বপূর্ণ স্থাপত্য সিদ্ধান্ত। তিনটি মূল বিষয়ের ওপর নজর দিতে হয়: ১) উচ্চ কার্ডিনালিটি (লাখ লাখ ভিন্ন মান থাকতে হবে, যেমন customerId); ২) কম ফ্রিকোয়েন্সি (কোনো একক মানের সংখ্যা যেন অতিরিক্ত বেশি না হয়). ৩) নন-মোনোটোনিক (ধারাবাহিক বৃদ্ধির মান যেমন অটো-ইনক্রিমেন্ট বা ObjectId একক নোডে চাপ সৃষ্টি করে, তাই তা এড়িয়ে চলা উচিত)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ CATASTROPHIC SHARD KEY: { status: 1 }
Low Cardinality (Only "active" or "inactive")
Result: Maximum 2 chunks! 99% of servers sit completely idle!

❌ HOTSPOT MONOTONIC KEY: { createdAt: 1 }
Monotonically increasing timestamp
Result: 100% of new write traffic hits ONLY the newest shard!

✅ OPTIMAL SHARD KEY: { customerId: "hashed" } OR { region: 1, customerId: 1 }
High cardinality, even write distribution across all cluster nodes!`,
      caption: {
        en: 'Poor shard key selection creates severe write bottlenecks on single machines.',
        bn: 'ভুল শার্ড কি বেছে নিলে একটিমাত্র সার্ভারে সব ট্রাফিকের চাপ তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Partitioning Strategies: Ranged vs Hashed', bn: '৪. পার্টিশনিং কৌশল: রেঞ্জড বনাম হ্যাশড' } },
    {
      type: 'para',
      text: {
        en: 'MongoDB offers two primary partitioning algorithms: Ranged partitions group contiguous values into ordered chunks, excelling at range queries like date filters but susceptible to hotspotting. Hashed partitions compute an MD5 hash of the field value, dispersing writes evenly across all cluster machines at the cost of broadcast range searches.',
        bn: 'MongoDB দুটি প্রধান পার্টিশনিং পদ্ধতি দেয়: রেঞ্জড পদ্ধতিতে কাছাকাছি মানগুলোকে একসাথে সাজিয়ে রাখা হয়, যা রেঞ্জ কুয়েরির জন্য দারুণ কিন্তু একটি সার্ভারে চাপ তৈরির ঝুঁকি থাকে। আর হ্যাশড পদ্ধতিতে মানের MD5 হ্যাশ বের করে সম্পূর্ণ ক্লাস্টারে সুষমভাবে ডেটা ছড়িয়ে দেওয়া হয়, ফলে লেখার চাপ চমৎকারভাবে বণ্টিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Sharding a collection with Hashed strategy (Uniform distribution):
sh.shardCollection("ecommerce.users", { userId: "hashed" });

// 2. Sharding with Ranged compound key:
sh.shardCollection("ecommerce.orders", { country: 1, orderId: 1 });

console.log("Collections partitioned across cluster shards successfully");
// Output: Collections partitioned across cluster shards successfully`,
      caption: {
        en: 'Hashed keys guarantee uniform write dispersal across all cluster storage nodes.',
        bn: 'হ্যাশড কি ক্লাস্টারের প্রতিটি স্টোরেজ নোডে লেখার চাপ সমানভাবে ভাগ করে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Chunks, Thresholds & Autosplit Mechanics', bn: '৫. চাঙ্ক, সাইজ সীমা ও অটোস্প্লিট মেকানিক্স' } },
    {
      type: 'para',
      text: {
        en: 'Data within a partition is grouped into contiguous ranges called chunks. The default chunk size is 64 megabytes. When incoming writes expand a chunk beyond this 64 MB threshold, the mongos router triggers an autosplit, dividing the chunk into two smaller chunks at the midpoint without moving physical data.',
        bn: 'একটি শার্ডের ভেতরের ডেটাকে ছোট ছোট ভাগে ভাগ করা হয় যাকে চাঙ্ক (Chunk) বলে। প্রতিটি চাঙ্কের ডিফল্ট আকার ৬৪ মেগাবাইট। নতুন ডেটা প্রবেশের কারণে কোনো চাঙ্ক যখন এই ৬৪ মেগাবাইট সীমা ছাড়িয়ে যায়, তখন mongos রাউটার অটোস্প্লিট চালু করে কোনো ডেটা স্থানান্তর না করেই চাঙ্কটিকে মাঝখান দিয়ে দুটি নতুন চাঙ্কে ভাগ করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `CHUNK SPLITTING LIFECYCLE:
[Initial Chunk: customerId 0 -> 100,000] (Size: 64 MB)
                   |
     Writes increase size to 65 MB
                   v
[Autosplit at Midpoint (50,000)]
      /                        \\
[Chunk A: 0 -> 50,000]    [Chunk B: 50,001 -> 100,000]
(Size: 32.5 MB)           (Size: 32.5 MB)`,
      caption: {
        en: 'Chunks autosplit at the 64 MB boundary to maintain manageable partition sizes.',
        bn: 'চাঙ্কগুলো ৬৪ মেগাবাইট হলেই দুটি ভাগে ভাগ হয়ে আকার নিয়ন্ত্রণে রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Cluster Balancer & Zero-Downtime Chunk Migration', bn: '৬. ক্লাস্টার ব্যালান্সার ও ব্যাকগ্রাউন্ড চাঙ্ক মাইগ্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'Over time, uneven insertion patterns cause some shards to hold more chunks than others. The Cluster Balancer is a background service managed by config servers. When chunk count disparities exceed migration thresholds, the balancer migrates chunks between nodes in the background without downtime or locking.',
        bn: 'সময়ের সাথে সাথে ডেটা জমার পার্থক্যের কারণে কিছু শার্ডে বেশি চাঙ্ক জমা হয়ে ভারসাম্যহীনতা তৈরি হতে পারে। ক্লাস্টার ব্যালান্সার (Cluster Balancer) হলো কনফিগ সার্ভার দ্বারা পরিচালিত একটি ব্যাকগ্রাউন্ড সার্ভিস। কোনো শার্ডে বেশি চাঙ্ক জমলে ব্যালান্সার নিজে থেকেই লাইভ ডাটাবেস লক না করে ব্যাকগ্রাউন্ডে চাঙ্ক স্থানান্তর করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Checking and managing the cluster balancer:
sh.isBalancerRunning(); // Returns true or false

// Restricting balancer to off-peak maintenance hours (02:00 to 05:00 UTC):
sh.setBalancerWindow({ start: "02:00", stop: "05:00" });

console.log("Balancer active with automated migration window");
// Output: Balancer active with automated migration window`,
      caption: {
        en: 'Scheduling the balancer during off-peak windows reduces production network congestion.',
        bn: 'অফ-পিক সময়ে ব্যালান্সার চালু রাখলে নেটওয়ার্কের ওপর বাড়তি চাপ পড়ে না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Targeted Single-Node vs Scatter-Gather Queries', bn: '৭. টার্গেটেড একক কুয়েরি বনাম স্ক্যাটার-গ্যাদার কুয়েরি' } },
    {
      type: 'para',
      text: {
        en: 'Read throughput in a partitioned cluster depends entirely on your filter attributes. When a request includes the partition key, the mongos router directs traffic to that single storage node as a targeted operation. Conversely, omitting the key forces mongos to broadcast the search across every machine in the cluster, degrading overall performance.',
        bn: 'শার্ডেড ক্লাস্টারে পড়ার গতি নির্ভর করে ফিল্টারে শার্ড কি দেওয়া আছে কিনা তার ওপর। যখন কোনো অনুসন্ধানে শার্ড কি উপস্থিত থাকে, তখন mongos সরাসরি নির্দিষ্ট টার্গেট নোডে নির্দেশ পাঠায়। পক্ষান্তরে শার্ড কি না থাকলে mongos ক্লাস্টারের সবকটি শার্ডে অনুসন্ধান ব্রডকাস্ট করে, যা ক্লাস্টারের স্কেলেবিলিটি নষ্ট করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. TARGETED QUERY (Optimal: Routes to 1 single shard directly):
db.orders.find({ userId: 1042, status: "completed" });

// 2. SCATTER-GATHER QUERY (Slow: Broadcasts to ALL 10 shards):
db.orders.find({ status: "pending" }); // Omitted shard key!

console.log("Targeted queries bypass scatter-gather broadcast latency");
// Output: Targeted queries bypass scatter-gather broadcast latency`,
      caption: {
        en: 'Including the shard key allows mongos to pinpoint the exact destination shard.',
        bn: 'শার্ড কি দিলে mongos সরাসরি সঠিক গন্তব্য নোড খুঁজে নিয়ে দ্রুত ফল দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Geographic Zone Tagging (Tag-Aware Sharding)', bn: '৮. জিওগ্রাফিক জোন ট্যাগিং (ট্যাগ-অ্যাওয়্যার শার্ডিং)' } },
    {
      type: 'para',
      text: {
        en: 'Zone sharding associates specific ranges of a partition key with designated hardware zones. This enables multi-region data sovereignty compliance (such as GDPR mandating European data stay inside European data centers) and ensures local users read from geographically local nodes with low latency.',
        bn: 'জোন শার্ডিং কোনো নির্দিষ্ট ডেটা রেঞ্জকে নির্দিষ্ট ভৌগোলিক হার্ডওয়্যারের সাথে যুক্ত করে দেয়। এটি বিভিন্ন দেশের ডেটা সার্বভৌমত্ব আইন (যেমন ইউরোপীয় নাগরিকদের ডেটা ইউরোপেই রাখার GDPR আইন) পালন করতে সাহায্য করে এবং স্থানীয় ব্যবহারকারীদের দ্রুততম সময়ে নিকটস্থ সার্ভার থেকে ডেটা পড়ার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Defining European data residency zone:
sh.addShardToZone("shard-eu-1", "EU_ZONE");
sh.addShardToZone("shard-eu-2", "EU_ZONE");

// Assigning European customer records to EU_ZONE shards:
sh.updateZoneKeyRange(
  "ecommerce.users",
  { country: "DE", userId: MinKey },
  { country: "DE", userId: MaxKey },
  "EU_ZONE"
);

console.log("Geographic data residency rules configured for GDPR compliance");
// Output: Geographic data residency rules configured for GDPR compliance`,
      caption: {
        en: 'Zone sharding pins regional data ranges to dedicated geographic data centers.',
        bn: 'জোন শার্ডিং আঞ্চলিক ডেটাকে নির্দিষ্ট ভৌগোলিক ডাটা সেন্টারে সীমাবদ্ধ রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Cluster Diagnostics & Monitoring with sh.status()', bn: '৯. sh.status() দিয়ে ক্লাস্টারের সার্বিক অবস্থা নিরীক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'Operators inspect cluster topology using sh.status(). The diagnostic output details active shards, shard key definitions, chunk distributions per shard, balancer status, and whether jumbo chunks require manual intervention.',
        bn: 'অ্যাডমিনরা sh.status() কমান্ড দিয়ে সম্পূর্ণ ক্লাস্টারের গঠন নিরীক্ষা করেন। এটি সক্রিয় শার্ডগুলোর তালিকা, শার্ড কি-র নাম, প্রতি নোডে চাঙ্কের বিন্যাস, ব্যালান্সারের অবস্থা এবং কোনো জাম্বো চাঙ্ক তৈরি হয়েছে কিনা তা স্পষ্টভাবে দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Inspecting cluster health:
const clusterInfo = sh.status();

// Sample diagnostic snapshot:
// shards:
//   { "_id": "shard01", "host": "shard01/mongo1:27018,mongo2:27018" }
//   { "_id": "shard02", "host": "shard02/mongo3:27018,mongo4:27018" }
// databases:
//   { "_id": "ecommerce", "primary": "shard01", "partitioned": true }
//     ecommerce.orders chunks:
//       shard01: 42
//       shard02: 43`,
      caption: {
        en: 'The sh.status() command displays chunk distributions across all cluster nodes.',
        bn: 'sh.status() কমান্ড সব নোডে ডেটা ও চাঙ্কের সুষম বিন্যাস প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production mongos Connection Setup in Node.js', bn: '১০. Node.js-এ প্রোডাকশন mongos কানেকশন সেটআপ' } },
    {
      type: 'para',
      text: {
        en: 'In production, applications connect to multiple mongos routers behind a load balancer or provide multiple router addresses directly in the connection URI. The driver balances connection requests and routes queries smoothly without application awareness of underlying partition splits.',
        bn: 'প্রোডাকশনে অ্যাপ্লিকেশনগুলো একাধিক mongos রাউটারের আইপি কানেকশন স্ট্রিংয়ে যুক্ত করে। ড্রাইভার নিজে থেকেই বিভিন্ন রাউটারে কাজের চাপ ভাগ করে দেয়, ফলে ভেতরের শত শত পার্টিশন বা শার্ড কীভাবে কাজ করছে তা অ্যাপ্লিকেশনের ভাবার প্রয়োজন হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Production MongoClient connecting to dual mongos routers:
import { MongoClient } from "mongodb";

const uri = "mongodb://router1:27017,router2:27017/ecommerce";
const client = new MongoClient(uri, {
  maxPoolSize: 100,
  serverSelectionTimeoutMS: 5000
});

await client.connect();
console.log("Connected to MongoDB Sharded Cluster via resilient mongos router pool");
// Output: Connected to MongoDB Sharded Cluster via resilient mongos router pool`,
      caption: {
        en: 'Applications connect seamlessly to mongos proxies as if talking to a single database.',
        bn: 'অ্যাপ্লিকেশন mongos-এর সাথে এমনভাবে কথা বলে যেন এটি একটিমাত্র একক ডাটাবেস।'
      }
    }
  ],
  exercises: [
    {
      id: 'mng-shd-ex1',
      kind: 'predict',
      topic: 'mongodb: default chunk size in MB',
      question: {
        en: 'What is the default chunk size in megabytes in a MongoDB sharded cluster before an autosplit is triggered?',
        bn: 'MongoDB শার্ডেড ক্লাস্টারে অটোস্প্লিট শুরু হওয়ার আগে ডিফল্ট চাঙ্ক সাইজ কত মেগাবাইট?'
      },
      code: `/* Default chunk size in megabytes: */
/* chunkSize = __ MB */`,
      answer: '64',
      accept: ['64', '64MB', '64 MB'],
      hint: {
        en: '64 megabytes.',
        bn: '৬৪ মেগাবাইট।'
      },
      explanation: {
        en: 'MongoDB defaults to a 64 MB chunk size, balancing migration overhead against chunk distribution granularity.',
        bn: 'MongoDB ডিফল্ট চাঙ্ক সাইজ ৬৪ মেগাবাইট রাখে, যা মাইগ্রেশন খরচ এবং নিখুঁত বণ্টনের মধ্যে চমৎকার ভারসাম্য দেয়।'
      }
    },
    {
      id: 'mng-shd-ex2',
      kind: 'mcq',
      topic: 'mongodb: scatter-gather query cause',
      question: {
        en: 'What query pattern causes an expensive "scatter-gather" operation across every shard in the cluster?',
        bn: 'কোন ধরনের কুয়েরি ব্যবহারের কারণে ক্লাস্টারের প্রতিটি শার্ডে অপ্রয়োজনীয় এবং ব্যয়বহুল "স্ক্যাটার-গ্যাদার" অপারেশন চালাতে হয়?'
      },
      options: [
        { en: 'Executing a find() query that completely omits the shard key from the filter criteria', bn: 'এমন একটি find() কুয়েরি চালানো যার ফিল্টারে শার্ড কি সম্পূর্ণ অনুপস্থিত থাকে' },
        { en: 'Using hashed sharding keys', bn: 'হ্যাশড শার্ড কি ব্যবহার করলে' },
        { en: 'Querying by primary _id', bn: 'প্রাইমারি _id দিয়ে কুয়েরি করলে' },
        { en: 'Using Node.js instead of Python', bn: 'পাইথনের বদলে নোডজেএস ব্যবহার করলে' }
      ],
      answer: 0,
      hint: {
        en: 'Omitting the shard key forces a broadcast to all shards.',
        bn: 'ফিল্টারে শার্ড কি না দিলে সব শার্ডে খুঁজতে হয়।'
      },
      explanation: {
        en: 'When a query lacks the shard key, the mongos router has no way of knowing which shard holds the data, forcing it to broadcast the query to every single shard.',
        bn: 'ফিল্টারে শার্ড কি না থাকলে mongos জানে না কোন শার্ডে ডেটা আছে, তাই বাধ্য হয়ে সব নোডে কুয়েরি পাঠাতে হয়।'
      }
    },
    {
      id: 'mng-shd-ex3',
      kind: 'mcq',
      topic: 'mongodb: hashed sharding benefit',
      question: {
        en: 'What is the primary architectural advantage of using Hashed Sharding over Ranged Sharding?',
        bn: 'রেঞ্জড শার্ডিংয়ের তুলনায় হ্যাশড শার্ডিং ব্যবহারের মূল সুবিধা কোনটি?'
      },
      options: [
        { en: 'It distributes write operations evenly across all cluster nodes, completely eliminating single-shard write hotspot bottlenecks', bn: 'এটি ক্লাস্টারের সব নোডে সমানভাবে লেখার ট্রাফিক ভাগ করে দেয়, ফলে একক শার্ডে অতিরিক্ত চাপের হটস্পট তৈরি হতে পারে না' },
        { en: 'It compresses data by 90 percent', bn: 'ডেটা ৯০ শতাংশ সংকুচিত করে' },
        { en: 'It turns off authentication for faster queries', bn: 'দ্রুত কুয়েরির জন্য সিকিউরিটি বন্ধ করে দেয়' },
        { en: 'It eliminates the need for replica sets', bn: 'রেপ্লিকা সেটের প্রয়োজন দূর করে' }
      ],
      answer: 0,
      hint: {
        en: 'Uniform write distribution across all nodes.',
        bn: 'সব নোডে সমানভাবে লেখার চাপ ভাগ করে।'
      },
      explanation: {
        en: 'Hashed sharding computes a pseudo-random hash of the key, scattering adjacent sequential inserts across different shards to prevent write bottlenecks.',
        bn: 'হ্যাশড শার্ডিং মানগুলোকে এলোমেলোভাবে বিভিন্ন শার্ডে ছড়িয়ে দেয়, ফলে একক নোডে অতিরিক্ত লেখার চাপ পড়ে না।'
      }
    }
  ],
  quiz: {
    id: 'mng-shd-quiz',
    title: { en: 'MongoDB Sharding & Massive Scale Architecture Quiz', bn: 'MongoDB শার্ডিং ও বৃহৎ ক্লাস্টার স্কেলিং কুইজ' },
    questions: [
      {
        id: 'msdq1',
        kind: 'mcq',
        topic: 'mongodb: config servers function',
        question: {
          en: 'What is the role of the Config Server replica set in a MongoDB sharded cluster?',
          bn: 'একটি MongoDB শার্ডেড ক্লাস্টারে কনফিগ সার্ভার রেপ্লিকা সেটের মূল ভূমিকা কী?'
        },
        options: [
          { en: 'To store cluster metadata, shard key definitions, and chunk routing boundaries so mongos routers know where data lives', bn: 'ক্লাস্টারের মেটাডেটা, শার্ড কি এবং চাঙ্কের রাউটিং সীমা সংরক্ষণ করা যাতে mongos রাউটার জানতে পারে ডেটা কোথায় আছে' },
          { en: 'To host client-facing React web applications', bn: 'ওয়েব অ্যাপ্লিকেশন হোস্ট করা' },
          { en: 'To automatically delete old customer records', bn: 'পুরনো কাস্টমার ডেটা ডিলিট করা' },
          { en: 'To replace hardware network switches', bn: 'নেটওয়ার্ক সুইচ প্রতিস্থাপন করা' }
        ],
        answer: 0,
        hint: {
          en: 'Stores cluster metadata and chunk routing maps.',
          bn: 'ক্লাস্টার মেটাডেটা এবং রাউটিং তথ্য জমা রাখে।'
        },
        explanation: {
          en: 'Config servers hold the cluster routing catalog. mongos caches this metadata to direct incoming queries to the proper shards.',
          bn: 'কনফিগ সার্ভার ক্লাস্টারের মূল রাউটিং ম্যাপ সংরক্ষণ করে, যার ওপর ভিত্তি করে mongos কুয়েরি পথ নির্ধারণ করে।'
        }
      },
      {
        id: 'msdq2',
        kind: 'mcq',
        topic: 'mongodb: zone sharding use case',
        question: {
          en: 'Which production requirement is specifically fulfilled by implementing Zone Sharding (Tag-Aware Sharding)?',
          bn: 'জোন শার্ডিং (ট্যাগ-অ্যাওয়্যার শার্ডিং) বাস্তবায়ন করে কোন প্রোডাকশন চাহিদাটি নির্দিষ্টভাবে পূরণ করা হয়?'
        },
        options: [
          { en: 'Geographic data sovereignty compliance, ensuring specific regional records reside physically inside local regional data centers', bn: 'ভৌগোলিক ডেটা সার্বভৌমত্ব আইন মেনে নির্দিষ্ট অঞ্চলের ডেটা স্থানীয় ডাটা সেন্টারের ভেতরেই সুরক্ষিত রাখা' },
          { en: 'Converting BSON into CSV format', bn: 'BSON-কে CSV ফাইলে রূপান্তর করা' },
          { en: 'Increasing JavaScript memory limit to 16 GB', bn: 'জাভাস্ক্রিপ্ট মেমরি ১৬ জিবিতে উন্নীত করা' },
          { en: 'Eliminating the need for backup copies', bn: 'ব্যাকআপ রাখার প্রয়োজন দূর করা' }
        ],
        answer: 0,
        hint: {
          en: 'Complies with regional data residency and reduces latency.',
          bn: 'আঞ্চলিক ডেটা আইন পালন ও লেটেন্সি কমাতে সাহায্য করে।'
        },
        explanation: {
          en: 'Zone sharding maps key ranges (e.g. country: "FR") to specific physical shards located in that geographic region, fulfilling regulatory mandates like GDPR.',
          bn: 'জোন শার্ডিং নির্দিষ্ট দেশের ডেটাকে স্থানীয় ডাটা সেন্টারের শার্ডে সীমাবদ্ধ রেখে আন্তর্জাতিক আইন মেনে চলতে সাহায্য করে।'
        }
      },
      {
        id: 'msdq3',
        kind: 'mcq',
        topic: 'mongodb: default chunk size megabytes',
        question: {
          en: 'What is the default chunk size in megabytes before an autosplit occurs in MongoDB sharded clusters?',
          bn: 'MongoDB শার্ডেড ক্লাস্টারে অটোস্প্লিট ঘটার আগে প্রতিটি চাঙ্কের ডিফল্ট সাইজ কত মেগাবাইট?'
        },
        options: [
          { en: '64 MB', bn: '৬৪ মেগাবাইট' },
          { en: '16 MB', bn: '১৬ মেগাবাইট' },
          { en: '128 MB', bn: '১২৮ মেগাবাইট' },
          { en: '512 MB', bn: '৫১২ মেগাবাইট' }
        ],
        answer: 0,
        hint: {
          en: '64 MB default chunk size.',
          bn: '৬৪ মেগাবাইট ডিফল্ট চাঙ্ক সাইজ।'
        },
        explanation: {
          en: '64 MB provides an optimal balance between chunk migration speed and metadata management.',
          bn: '৬৪ মেগাবাইট চাঙ্ক সাইজ মাইগ্রেশনের গতি ও মেটাডেটা ব্যবস্থাপনার মধ্যে চমৎকার ভারসাম্য রক্ষা করে।'
        }
      },
      {
        id: 'msdq4',
        kind: 'mcq',
        topic: 'mongodb: hashed sharding mechanism',
        question: {
          en: 'Which hashing algorithm does MongoDB use to uniformly disperse document writes across shards in Hashed Sharding?',
          bn: 'হ্যাশড শার্ডিংয়ে সব শার্ডের মাঝে সুষমভাবে ডেটা ছড়িয়ে দিতে MongoDB কোন হ্যাশিং পদ্ধতি ব্যবহার করে?'
        },
        options: [
          { en: 'An internal MD5-based cryptographic hash of the shard key value', bn: 'শার্ড কি-র মানের একটি অভ্যন্তরীণ MD5-ভিত্তিক ক্রিপ্টোগ্রাফিক হ্যাশ' },
          { en: 'A simple modulo arithmetic division by 2', bn: '২ দিয়ে ভাগ করা সাধারণ ভাগশেষ' },
          { en: 'Converting the key to Base64 text', bn: 'কি-কে বেইস৬৪ টেক্সটে রূপান্তর' },
          { en: 'No hashing is performed', bn: 'কোনো হ্যাশিং করা হয় না' }
        ],
        answer: 0,
        hint: {
          en: 'Internal MD5 hash of shard key.',
          bn: 'শার্ড কি-র অভ্যন্তরীণ MD5 হ্যাশ।'
        },
        explanation: {
          en: 'MongoDB computes an MD5 hash of the shard key field to pseudo-randomly scatter writes across all cluster nodes.',
          bn: 'MongoDB শার্ড কি-র MD5 হ্যাশ বের করে সম্পূর্ণ ক্লাস্টারে সুষমভাবে ডেটা লিখে।'
        }
      }
    ]
  }
};
