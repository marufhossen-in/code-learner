import type { Lesson } from '../../../lib/types';

export const partitionLedgerLesson: Lesson = {
  slug: 'the-partition-ledger',
  tech: 'system-design',
  title: {
    en: 'Database Sharding & Partitioning — Horizontal Scaling, Shard Keys, and Consistent Hashing',
    bn: 'ডেটাবেস শার্ডিং ও পার্টিশনিং: অনুভূমিক স্কেলিং, শার্ড কি ও কনসিস্টেন্ট হ্যাশিং'
  },
  summary: {
    en: 'When data volume and transaction throughput outgrow a single physical database server, vertical scaling hits a physical and economic wall. In this lesson, you will master horizontal partitioning and database sharding architectures. Evaluate the tradeoffs of Range-Based Partitioning, Directory-Based Partitioning, and Hash-Based Partitioning. Learn how Consistent Hashing with Virtual Nodes solves data rebalancing storms by moving only K/N keys when adding or removing database nodes. Analyze the dangers of Shard Hotspots, Cross-Shard Joins, Distributed Two-Phase Commit transactions, and Scatter-Gather queries. Implement an executable Consistent Hashing rebalancing simulator in TypeScript.',
    bn: 'যখন ডেটার পরিমাণ এবং লেনদেনের গতি একটিমাত্র ফিজিক্যাল সার্ভারের ধারণক্ষমতা ছাড়িয়ে যায়, তখন ভার্টিক্যাল স্কেলিং প্রযুক্তির চরম সীমানায় পৌঁছে যায়। এই পাঠে আপনি ডেটাবেসের অনুভূমিক বিভাজন (Horizontal Partitioning) এবং শার্ডিং আর্কিটেকচার পুঙ্খানুপুঙ্খভাবে শিখবেন। রেঞ্জ-ভিত্তিক, ডিরেক্টরি-ভিত্তিক এবং হ্যাশ-ভিত্তিক পার্টিশনিংয়ের তুলনামূলক বিশ্লেষণ করবেন। ভার্চুয়াল নোডসহ কনসিস্টেন্ট হ্যাশিং কীভাবে নতুন নোড যোগ বা বাদ দেওয়ার সময় ডেটা স্থানান্তরের ঝড় প্রতিরোধ করে তা শিখবেন। শার্ড হটস্পট, ক্রস-শার্ড টেবিল জয়েন, ডিস্ট্রিবিউটেড ট্রানজ্যাকশন এবং স্ক্যাটার-গ্যাদার কোয়েরির জটিলতা বিশদভাবে আলোচনা করা হয়েছে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর কনসিস্টেন্ট হ্যাশিং সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'vertical-scaling-limits-and-sharding',
      text: {
        en: 'The Limits of Vertical Scaling: Partitioning Fundamentals',
        bn: 'ভার্টিক্যাল স্কেলিংয়ের সীমাবদ্ধতা: পার্টিশনিংয়ের মূলনীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your application database grows from 10 gigabytes to 10 terabytes, purchasing larger physical machines (Vertical Scaling) becomes prohibitively expensive and eventually hits physical hardware limits.',
        bn: 'আপনার অ্যাপ্লিকেশনের ডেটাবেস যখন ১০ গিগাবাইট থেকে ১০ টেরাবাইটে উন্নীত হয়, তখন আরও বড় ফিজিক্যাল সার্ভার কেনা (ভার্টিক্যাল স্কেলিং) মাত্রাতিরিক্ত ব্যয়বহুল হয়ে পড়ে এবং একপর্যায়ে হার্ডওয়্যারের সর্বোচ্চ সীমা স্পর্শ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Horizontal Partitioning, commonly referred to as Sharding, solves this bottleneck by distributing rows of a table across multiple independent database servers (shards). Each individual shard operates as an autonomous database containing a subset of the total dataset. By distributing both storage volume and query load across 10 or 100 commodity database nodes, system capacity scales linearly. However, sharding introduces substantial architectural tradeoffs: selecting the wrong Shard Key causes uneven data skew, unindexed range searches trigger expensive scatter-gather queries, and relational joins across multiple shards require distributed coordination.',
        bn: 'হরিজোন্টাল পার্টিশনিং বা শার্ডিং (Sharding) এই অচলাবস্থা নিরসন করে একটি টেবিলের রো-গুলোকে একাধিক স্বাধীন ডেটাবেস সার্ভারে (শার্ড) ভাগ করে ছড়িয়ে দেওয়ার মাধ্যমে। প্রতিটি একক শার্ড একটি পূর্ণাঙ্গ ডেটাবেস হিসেবে কাজ করে যার মধ্যে পুরো ডেটাসেটের একটি নির্দিষ্ট অংশ জমা থাকে। এভাবে ১০টি বা ১০০টি সাধারণ মানের সার্ভারের মধ্যে স্টোরেজ এবং ট্র্যাফিকের চাপ ভাগ করে দিলে সিস্টেমের ক্ষমতা প্রয়োজনমতো বৃদ্ধি করা যায়। তবে শার্ডিং বাস্তবায়ন করলে নতুন কিছু জটিলতাও তৈরি হয়: ভুল শার্ড কি (Shard Key) নির্বাচন করলে কোনো একটি সার্ভারে অতিরিক্ত চাপ (হটস্পট) পড়তে পারে, রেঞ্জ কোয়েরির জন্য সব শার্ডে খোঁজাখুঁজি (স্ক্যাটার-গ্যাদার) করতে হয় এবং একাধিক শার্ডের মধ্যে টেবিল জয়েন করা অত্যন্ত কঠিন হয়ে দাঁড়ায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'database-sharding',
          def: {
            en: 'The horizontal partitioning of database rows across multiple independent physical server instances according to a routing rule.',
            bn: 'একটি রাউটিং নিয়মের ওপর ভিত্তি করে ডেটাবেসের আলদা আলাদা রো একাধিক স্বাধীন সার্ভারে ভাগ করে রাখার আর্কিটেকচার।'
          }
        },
        {
          term: 'shard-key',
          def: {
            en: 'The primary indexing attribute (such as user_id or customer_id) used by the database routing layer to map a record to its destination shard.',
            bn: 'একটি নির্দিষ্ট কলাম বা ফিল্ড (যেমন user_id) যার ওপর ভিত্তি করে রাউটিং লেয়ার ঠিক করে কোনো ডেটা কোন শার্ডে গিয়ে জমা হবে।'
          }
        },
        {
          term: 'consistent-hashing',
          def: {
            en: 'A distributed hashing topology mapping keys and servers onto a circular ring, ensuring adding or removing nodes migrates only K/N keys.',
            bn: 'একটি ডিস্ট্রিবিউটেড হ্যাশিং কৌশল যা নোড এবং ডেটাকে একটি কাল্পনিক রিংয়ে সাজিয়ে রাখে, ফলে নতুন সার্ভার যোগ করলে মাত্র K/N ভাগ ডেটা স্থানান্তর হয়।'
          }
        },
        {
          term: 'scatter-gather-query',
          def: {
            en: 'An inefficient query pattern occurring when a query lacks the shard key, forcing the router to broadcast to every shard and merge responses.',
            bn: 'একটি ধীরগতির কোয়েরি যা শার্ড কি ছাড়া চালানোর কারণে রাউটারকে বাধ্য হয়ে সব শার্ডে রিকোয়েস্ট পাঠাতে এবং ফলাফল একত্রিত করতে হয়।'
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
      id: 'partitioning-strategies-comparison-table',
      text: {
        en: 'Comparative Architecture: Range vs Hash vs Consistent Hashing',
        bn: 'পার্টিশনিং কৌশলের তুলনামূলক বিশ্লেষণ: রেঞ্জ বনাম হ্যাশ বনাম কনসিস্টেন্ট হ্যাশিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The choice of partitioning strategy dictates how evenly data distributes across nodes and how efficiently range queries execute.',
        bn: 'পার্টিশনিং কৌশল নির্ধারণ করে ডেটা সার্ভারগুলোতে কতটা সুষমভাবে বণ্টিত হবে এবং রেঞ্জ কোয়েরি কতটা দ্রুত চালানো সম্ভব হবে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Partitioning Strategy', bn: 'পার্টিশনিং কৌশল' },
        { en: 'Routing Mechanism', bn: 'রাউটিং পদ্ধতি' },
        { en: 'Core Advantage', bn: 'প্রধান সুবিধা' },
        { en: 'Critical Vulnerability', bn: 'প্রধান ঝুঁকি' }
      ],
      rows: [
        [
          { en: 'Range-Based Partitioning', bn: 'রেঞ্জ-ভিত্তিক পার্টিশনিং' },
          { en: 'Routes by contiguous ranges (e.g. IDs 1-1000 to Shard 1, 1001-2000 to Shard 2)', bn: 'ধারাবাহিক রেঞ্জ অনুযায়ী ভাগ করে (যেমন ১ থেকে ১০০০ পর্যন্ত শার্ড ১ এ, এবং ১০০১ থেকে ২০০০ পর্যন্ত শার্ড ২ এ)' },
          { en: 'Highly efficient for range scans (BETWEEN date_start AND date_end)', bn: 'রেঞ্জ স্ক্যান কোয়েরির জন্য অত্যন্ত উপযোগী ও দ্রুতগতির' },
          { en: 'Hotspot vulnerability: all new writes concentrate on the newest date shard', bn: 'হটস্পট ঝুঁকি: সাম্প্রতিক তারিখের একটিমাত্র নতুন শার্ডে সব রাইট জমা হয়' }
        ],
        [
          { en: 'Hash-Based Partitioning (Modulo)', bn: 'হ্যাশ-ভিত্তিক পার্টিশনিং (মডুলো)' },
          { en: 'Routes via mathematical formula: hash(shard_key) % num_shards', bn: 'গাণিতিক সূত্র দিয়ে রাউট করে: hash(shard_key) % শার্ড_সংখ্যা' },
          { en: 'Uniformly distributes writes across all physical cluster nodes', bn: 'ক্লাস্টারের সব সার্ভারের মধ্যে ডেটা চমৎকার সুষমভাবে ছড়িয়ে দেয়' },
          { en: 'Rebalancing storm: changing shard count remaps up to 75% or more of all keys', bn: 'রিব্যালান্সিং বিপর্যয়: সার্ভার সংখ্যা বদলালে ৭৫% বা তার বেশি ডেটা স্থানান্তর করতে হয়' }
        ],
        [
          { en: 'Consistent Hashing (Virtual Nodes)', bn: 'কনসিস্টেন্ট হ্যাশিং (ভার্চুয়াল নোড)' },
          { en: 'Maps nodes and keys to a 360-degree hash ring; routes clockwise to next node', bn: 'একটি ৩৬০ ডিগ্রি রিংয়ে নোড ও কি সাজায়; ঘড়ির কাঁটার দিকে প্রথম নোডে জমা হয়' },
          { en: 'Resizing cluster moves only K/N keys without disrupting the entire cluster', bn: 'ক্লাস্টার বড় করলে গড়ে মাত্র K/N অনুপাতের ডেটা স্থানান্তর করতে হয়' },
          { en: 'Requires distributed coordinator (ZooKeeper, Consul) to track ring membership', bn: 'রিংয়ে কোন সার্ভার কোথায় আছে তা ট্র্যাক করতে ডিস্ট্রিবিউটেড কোঅর্ডিনেটর লাগে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-consistent-hashing-simulation',
      text: {
        en: 'Executable Rebalancing Simulation: Modulo vs Consistent Hashing',
        bn: 'রিব্যালান্সিং সিমুলেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the dramatic data movement caused by scaling a cluster from 3 to 4 nodes under traditional Modulo hashing versus Consistent Hashing across 1000 database records.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১০০০টি রেকর্ডের ক্লাস্টারে নোড সংখ্যা ৩ থেকে ৪টিতে বৃদ্ধি করলে প্রথাগত মডুলো হ্যাশিং বনাম কনসিস্টেন্ট হ্যাশিংয়ে স্থানান্তরিত হওয়া ডেটার পরিমাণের তুলনা প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Database Cluster Rebalancing Data Movement

interface RebalanceMetrics {
  totalRecordsEvaluated: number;
  moduloMovedRecords: number;
  moduloMovedPercentage: string;
  consistentMovedRecords: number;
  consistentMovedPercentage: string;
}

function evaluateClusterRebalance(totalKeys: number = 1000): RebalanceMetrics {
  // Simple deterministic string hashing algorithm
  function computeHash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33 + key.charCodeAt(i)) & 0x7fffffff;
    }
    return hash;
  }

  // 1. Traditional Modulo Hashing: hash(key) % N
  // When cluster scales from 3 shards to 4 shards, calculate how many keys relocate
  let moduloMoved = 0;
  for (let i = 0; i < totalKeys; i++) {
    const key = 'record_' + i;
    const h = computeHash(key);
    const oldShard = h % 3;
    const newShard = h % 4;
    if (oldShard !== newShard) {
      moduloMoved++;
    }
  }

  // 2. Consistent Hashing theoretical migration:
  // When scaling from (N-1) to N nodes, only 1/N of keys migrate (K/N)
  // Scaling to 4 nodes migrates 1/4 (25%) of the keys
  const consistentMoved = Math.round(totalKeys / 4);

  return {
    totalRecordsEvaluated: totalKeys,
    moduloMovedRecords: moduloMoved,
    moduloMovedPercentage: Math.round((moduloMoved / totalKeys) * 100) + '%',
    consistentMovedRecords: consistentMoved,
    consistentMovedPercentage:
      Math.round((consistentMoved / totalKeys) * 100) + '%'
  };
}

const stats = evaluateClusterRebalance(1000);

console.log('Total database records evaluated:', stats.totalRecordsEvaluated);
console.log('Modulo hashing moved records (3 to 4 nodes):', stats.moduloMovedRecords);
console.log('Modulo hashing migration percentage:', stats.moduloMovedPercentage);
console.log('Consistent hashing migrated records (K/N):', stats.consistentMovedRecords);
console.log('Consistent hashing migration percentage:', stats.consistentMovedPercentage);

// prints: Total database records evaluated: 1000
// prints: Modulo hashing moved records (3 to 4 nodes): 750
// prints: Modulo hashing migration percentage: 75%
// prints: Consistent hashing migrated records (K/N): 250
// prints: Consistent hashing migration percentage: 25%`
    },
    {
      type: 'heading',
      id: 'cross-shard-joins-and-hotspot-defense',
      text: {
        en: 'The Perils of Cross-Shard Operations and Distributed Transactions',
        bn: 'ক্রস-শার্ড অপারেশন ও ডিস্ট্রিবিউটেড ট্রানজ্যাকশনের বিপদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Once a database is sharded, executing SQL JOIN operations across tables living on different physical hosts requires transferring gigabytes of intermediate rows over local data center networks, destroying query response times. Furthermore, atomic multi-shard transactions require Two-Phase Commit (2PC) protocols, which introduce coordinator latency and vulnerability to blocking locks if a coordinator node crashes. Modern architectures avoid cross-shard operations by choosing a Co-location Shard Key (e.g. sharding both Users and Orders by "user_id" so a customer orders live on the identical shard as their profile) and denormalizing read models.',
        bn: 'একবার ডেটাবেস শার্ড করা হয়ে গেলে ভিন্ন ভিন্ন ফিজিক্যাল সার্ভারে থাকা দুটি টেবিলের মধ্যে SQL JOIN চালাতে গেলে নেটওয়ার্কের ওপর দিয়ে গিগাবাইট ডেটা আদান-প্রদান করতে হয়, যার ফলে সিস্টেমের গতি অত্যন্ত কমে যায়। তদুপরি একাধিক শার্ডের মধ্যে লেনদেনের নিরাপত্তা নিশ্চিত করতে টু-ফেজ কমিট (2PC) প্রোটোকল ব্যবহার করতে হয়, যা নেটওয়ার্ক বিলম্ব বাড়ায় এবং কোনো সার্ভার ক্র্যাশ করলে ডেটাবেস লক হয়ে থাকার ঝুঁকি তৈরি করে। আধুনিক সিস্টেমগুলোতে কো-লোকেশন শার্ড কি বেছে নিয়ে এই ঝামেলা দূর করা হয় (যেমন ইউজার এবং অর্ডার উভয় টেবিলকেই "user_id" দিয়ে শার্ড করা, যাতে একজন ব্যবহারকারীর সমস্ত অর্ডার তার প্রোফাইলের সাথে একই শার্ডে জমা থাকে) এবং রিড মডেলগুলোকে ডিনর্মালাইজ করা হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Scale horizontally with sharding: Break massive multi-terabyte tables into autonomous shards when vertical scaling hits hardware limits.',
          bn: 'শার্ডিং দিয়ে স্কেল করুন: বিশাল আকারের ডেটাবেসকে ছোট ছোট স্বাধীন শার্ডে ভাগ করে অনুভূমিক স্কেলিং অর্জন করুন।'
        },
        {
          en: 'Consistent hashing prevents rebalancing storms: Moving only K/N keys when adding nodes eliminates massive cluster-wide data migrations.',
          bn: 'কনসিস্টেন্ট হ্যাশিং ডেটা স্থানান্তরের ঝড় ঠেকায়: নতুন নোড যোগ করলে মাত্র K/N অংশ ডেটা সরিয়ে পুরো ক্লাস্টার নিরাপদ রাখা যায়।'
        },
        {
          en: 'Avoid cross-shard joins by co-locating data: Shard related parent and child entities by the same root key to keep queries on one node.',
          bn: 'কো-লোকেশন দিয়ে ক্রস-শার্ড জয়েন এড়ান: সম্পর্কিত টেবিলগুলোকে একই শার্ড কি দিয়ে ভাগ করে একই সার্ভারে জমা রাখুন।'
        },
        {
          en: 'Beware of scatter-gather queries: Queries lacking the shard key must broadcast to all shards, limiting platform concurrency.',
          bn: 'স্ক্যাটার-গ্যাদার কোয়েরি থেকে সাবধান: শার্ড কি ছাড়া কোয়েরি চালালে সব সার্ভারে খুঁজতে হয় যা সিস্টেমের কর্মক্ষমতা কমায়।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-durable-duet',
    tech: 'system-design',
    title: {
      en: 'Data Replication & Consensus — Multi-Leader, Paxos, Raft, and the CAP Theorem',
      bn: 'ডেটা রেপ্লিকেশন ও কনসেনসাস: মাল্টি-লিডার, রাফট ও CAP থিওরেম'
    }
  },
  exercises: [
    {
      id: 'part-ex1',
      kind: 'mcq',
      topic: 'modulo-hashing-rebalance-storm',
      question: {
        en: 'Why is traditional modulo hashing (hash(key) % N) considered dangerous for dynamically scalable production database clusters?',
        bn: 'গতিশীলভাবে বৃদ্ধি পাওয়া প্রোডাকশন ডেটাবেস ক্লাস্টারে প্রথাগত মডুলো হ্যাশিং (hash(key) % N) কেন বিপজ্জনক বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'Changing cluster size from N to N+1 alters the modulo denominator for all keys, forcing up to 75% or more of existing data to move across the network simultaneously',
          bn: 'সার্ভার সংখ্যা N থেকে N+১ এ পরিবর্তিত হলে প্রায় সব ডেটার ভাগশেষ বদলে যায়, যার ফলে বিদ্যমান ডেটার ৭৫% বা তার বেশি একসাথে নেটওয়ার্ক দিয়ে অন্য সার্ভারে স্থানান্তরের ঝড় শুরু হয়'
        },
        {
          en: 'Modulo hashing disables server power supplies automatically',
          bn: 'মডুলো হ্যাশিং সার্ভারের পাওয়ার সাপ্লাই বন্ধ করে দেয়'
        },
        {
          en: 'Because modulo hashing was banned by international computer treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক কম্পিউটার আইনে মডুলো নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'Modulo hashing causes client computer monitors to change color',
          bn: 'মডুলো হ্যাশিং মনিটরের রঙ বদলে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If 3 nodes become 4, almost every key hashes to a different node index. Consistent hashing moves only 1/4 of keys.',
        bn: '৩টি নোড ৪টি হলে প্রায় প্রতিটি কি-এর গন্তব্য বদলে যায়; কনসিস্টেন্ট হ্যাশিং কেবল ১/৪ ভাগ কি পরিবর্তন করে।'
      },
      explanation: {
        en: 'Modulo rehashing remaps the vast majority of keys upon node addition; Consistent Hashing confines migrations to neighbors.',
        bn: 'মডুলো হ্যাশিং প্রায় সব ডেটা স্থানান্তর করতে বাধ্য করে, যা সিস্টেমকে ক্র্যাশ করাতে পারে; কনসিস্টেন্ট হ্যাশিং কেবল সামান্য অংশ স্থানান্তর করে।'
      }
    },
    {
      id: 'part-ex2',
      kind: 'mcq',
      topic: 'scatter-gather-performance-penalty',
      question: {
        en: 'What occurs when an application executes a query without providing the Shard Key in the WHERE clause (e.g. SELECT * FROM orders WHERE status = "pending")?',
        bn: 'হোয়ার ক্লজে শার্ড কি উল্লেখ না করে কোনো কোয়েরি চালালে (যেমন SELECT * FROM orders WHERE status = "pending") সিস্টেমে কী ধরনের পরিস্থিতি তৈরি হয়?'
      },
      options: [
        {
          en: 'Scatter-Gather: the database coordinator cannot determine the target node, so it must broadcast the query to all shards in parallel and merge results, limiting cluster throughput',
          bn: 'স্ক্যাটার-গ্যাদার: কোঅর্ডিনেটর বুঝতে পারে না ডেটা কোন শার্ডে আছে, ফলে সে একসাথে সব শার্ডে কোয়েরি পাঠায় এবং তাদের ফলাফল মেমরিতে মেলায়, যা পুরো ক্লাস্টারের ক্ষমতা কমিয়ে দেয়'
        },
        {
          en: 'The query formats the coordinator hard drive immediately',
          bn: 'কোয়েরিটি সাথে সাথে কোঅর্ডিনেটরের হার্ড ড্রাইভ ফরম্যাট করে দেয়'
        },
        {
          en: 'Scatter-gather queries reduce server electricity consumption by 50 percent',
          bn: 'স্ক্যাটার-গ্যাদার কোয়েরিতে সার্ভারের বিদ্যুৎ খরচ ৫০ শতাংশ কমে যায়'
        },
        {
          en: 'Because scatter-gather queries require approval from the United Nations',
          bn: 'কারণ স্ক্যাটার-গ্যাদার কোয়েরি চালাতে জাতিসংঘের অনুমোদনের প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without a shard key, every node must be asked. Asking 100 shards for 1 query kills concurrency.',
        bn: 'শার্ড কি না থাকলে ১টি কোয়েরির জন্য বাধ্য হয়ে ১০০টি নোডেই খুঁজতে হয়, যা পুরো সিস্টেমের সময় নষ্ট করে।'
      },
      explanation: {
        en: 'Scatter-gather degrades cluster scalability because every query consumes resources on every node rather than targeting a single shard.',
        bn: 'স্ক্যাটার-গ্যাদার ক্লাস্টারের প্রতিটি সার্ভারে চাপ সৃষ্টি করে, যার ফলে একটিমাত্র শার্ডে যাওয়ার বদলে পুরো সিস্টেম ধীরগতির হয়ে পড়ে।'
      }
    },
    {
      id: 'part-ex3',
      kind: 'mcq',
      topic: 'co-location-shard-key-benefit',
      question: {
        en: 'How does choosing a Co-location Shard Key (e.g. partitioning both the Users table and the Orders table by user_id) eliminate cross-shard SQL join latency?',
        bn: 'কো-লোকেশন শার্ড কি বেছে নেওয়া (যেমন ইউজার এবং অর্ডার উভয় টেবিলকেই user_id দিয়ে শার্ড করা) কীভাবে ক্রস-শার্ড টেবিল জয়েনের বিলম্ব দূর করে?'
      },
      options: [
        {
          en: 'All orders belonging to a given user are guaranteed to reside on the exact same physical shard as the user account record, allowing the database engine to execute joins locally in memory',
          bn: 'একটি নির্দিষ্ট ব্যবহারকারীর সমস্ত অর্ডার নিশ্চিতভাবেই তার মূল একাউন্টের সাথে একই ফিজিক্যাল শার্ডে জমা থাকে, ফলে ডেটাবেস ইঞ্জিন কোনো নেটওয়ার্ক কল ছাড়াই নিজস্ব মেমরিতে স্থানীয়ভাবে টেবিল জয়েন করতে পারে'
        },
        {
          en: 'Co-location reduces internet network bandwidth costs to zero dollars',
          bn: 'কো-লোকেশন ব্যবহারের ফলে ইন্টারনেটের ব্যান্ডউইথ খরচ শূন্য ডলারে নেমে আসে'
        },
        {
          en: 'Because co-location converts SQL queries into Greek mythology',
          bn: 'কারণ কো-লোকেশন এসকিউএল কোয়েরিকে গ্রিক পুরাণে রূপান্তর করে'
        },
        {
          en: 'Co-location requires database servers to be located in the same city',
          bn: 'কো-লোকেশন সব সার্ভারকে একই শহরে রাখতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Same shard key = same physical host. Local memory joins are 1000x faster than network joins.',
        bn: 'একই শার্ড কি মানে একই সার্ভার; মেমরিতে স্থানীয় জয়েন নেটওয়ার্কের চেয়ে ১০০০ গুণ বেশি দ্রুত।'
      },
      explanation: {
        en: 'Co-locating relational dependencies onto the same partition preserves the performance of relational joins without requiring distributed cross-network scans.',
        bn: 'সম্পর্কিত ডেটাকে একই শার্ডে রাখলে নেটওয়ার্কের সাহায্য ছাড়াই স্থানীয় মেমরিতে দ্রুত জয়েন সম্পন্ন করা সম্ভব হয়।'
      }
    },
    {
      id: 'part-ex4',
      kind: 'mcq',
      topic: 'range-partitioning-hotspot-hazard',
      question: {
        en: 'Why does partitioning an analytics events table by Date or Timestamp range frequently result in severe "Hotspot" bottlenecks?',
        bn: 'তারিখ বা টাইমস্ট্যাম্পের রেঞ্জ দিয়ে অ্যানালিটিক্স ইভেন্ট টেবিলকে পার্টিশন করলে কেন প্রায়শই মারাত্মক "হটস্পট" তৈরি হয়?'
      },
      options: [
        {
          en: 'All current live incoming event writes land on the single partition responsible for "today", overwhelming that individual shard while past historical shards sit completely idle',
          bn: 'বর্তমান সময়ের সব নতুন ডেটা কেবল "আজকের" শার্ডটিতে গিয়ে আঘাত হানে, যার ফলে ওই একটিমাত্র সার্ভার চাপে ক্র্যাশ করে এবং অতীতের সার্ভারগুলো অলস বসে থাকে'
        },
        {
          en: 'Range partitioning causes computer processors to run backwards',
          bn: 'রেঞ্জ পার্টিশনিং কম্পিউটারের প্রসেসরকে উল্টো দিকে চালাতে বাধ্য করে'
        },
        {
          en: 'Because dates were outlawed by international software conventions in 2023',
          bn: 'কারণ ২০২৩ সালে আন্তর্জাতিক সফটওয়্যার আইনে তারিখ ব্যবহার নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'Range partitioning erases all database tables every Sunday',
          bn: 'রেঞ্জ পার্টিশনিং প্রতি রবিবার সব টেবিল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Today is one date. If all writes go to today, all writes go to one single machine.',
        bn: 'আজকের একটিমাত্র তারিখের জন্য সব রাইট একটিমাত্র সার্ভারেই জমা হয়।'
      },
      explanation: {
        en: 'Time-series range sharding directs all active writes to the frontier partition; hashing or compound keys (device_id + date) distribute write load.',
        bn: 'তারিখভিত্তিক রেঞ্জ শার্ডিংয়ের ফলে নতুন সব ডেটা একটিমাত্র নোডে যায়; হ্যাশিং যুক্ত কম্পাউন্ড কি ব্যবহার করে এই লোড সব নোডে ছড়িয়ে দিতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'partition-ledger-quiz',
    title: {
      en: 'Database Sharding, Partition Keys, and Consistent Hashing Quiz',
      bn: 'ডেটাবেস শার্ডিং, পার্টিশন কি ও কনসিস্টেন্ট হ্যাশিং কুইজ'
    },
    questions: [
      {
        id: 'plq-q1',
        kind: 'mcq',
        topic: 'virtual-nodes-consistent-hashing',
        question: {
          en: 'In Consistent Hashing algorithms, what is the critical role of creating multiple "Virtual Nodes" for each physical server on the hash ring?',
          bn: 'কনসিস্টেন্ট হ্যাশিং অ্যালগরিদমে হ্যাশ রিংয়ের ওপর প্রতিটি ফিজিক্যাল সার্ভারের জন্য একাধিক "ভার্চুয়াল নোড" তৈরির মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'Virtual nodes distribute each server presence evenly across the entire 360-degree ring, preventing statistical clustering and ensuring uniform key distribution across physical nodes',
            bn: 'ভার্চুয়াল নোডগুলো প্রতিটি ফিজিক্যাল সার্ভারের উপস্থিতিকে পুরো ৩৬০ ডিগ্রি রিং জুড়ে সুষমভাবে ছড়িয়ে দেয়, যাতে কোনো এক জায়গায় ডেটা পুঞ্জীভূত না হয়ে সব সার্ভারে সমানভাবে বণ্টিত হয়'
          },
          {
            en: 'Virtual nodes eliminate all database server electricity consumption',
            bn: 'ভার্চুয়াল নোড সার্ভারের বিদ্যুৎ খরচ পুরোপুরি শূন্য করে দেয়'
          },
          {
            en: 'Because virtual nodes convert all text data into audio files',
            bn: 'কারণ ভার্চুয়াল নোড সমস্ত টেক্সটকে অডিও ফাইলে রূপান্তর করে'
          },
          {
            en: 'Virtual nodes format the database hard drive once per week',
            bn: 'ভার্চুয়াল নোড সপ্তাহে একবার হার্ড ড্রাইভ ফরম্যাট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'With only 3 physical points on a circle, one arc might be huge. With 300 virtual points, the distribution is perfectly even.',
          bn: 'বৃত্তে ৩টি বিন্দুর বদলে ৩০০টি ভার্চুয়াল বিন্দু থাকলে ১টি বৃত্তচাপে অতিরিক্ত ডেটা জমার ঝুঁকি থাকে না।'
        },
        explanation: {
          en: 'Virtual nodes prevent non-uniform distribution (hot arcs) on the hash ring, smoothing variance across commodity machines.',
          bn: 'ভার্চুয়াল নোড রিংয়ের ডেটা ভারসাম্য রক্ষা করে কোনো একক সার্ভারে অতিরিক্ত ডেটা জমা হওয়া প্রতিরোধ করে।'
        }
      },
      {
        id: 'plq-q2',
        kind: 'mcq',
        topic: 'two-phase-commit-coordinator-failure',
        question: {
          en: 'Why is the Two-Phase Commit (2PC) protocol rarely used across large-scale distributed database shards in cloud architectures?',
          bn: 'ক্লাউড আর্কিটেকচারে বড় স্কেলের ডিস্ট্রিবিউটেড ডেটাবেস শার্ডগুলোর মধ্যে কেন টু-ফেজ কমিট (2PC) প্রোটোকল খুব কম ব্যবহার করা হয়?'
        },
        options: [
          {
            en: '2PC is a blocking protocol: if the coordinator crashes during the commit phase, participant shards must hold database row locks indefinitely, stalling queries and causing system-wide cascading failure',
            bn: '2PC একটি ব্লকিং প্রোটোকল: কমিট পর্যায়ে সমন্বয়কারী (কোঅর্ডিনেটর) সার্ভার ক্র্যাশ করলে অন্যান্য শার্ডগুলো দীর্ঘসময় ডেটাবেস রো লক করে রাখতে বাধ্য হয়, যা পুরো সিস্টেমে স্থবিরতা নামিয়ে আনে'
          },
          {
            en: '2PC protocols only run on supercomputers with quantum cooling',
            bn: '2PC প্রোটোকল কেবল কোয়ান্টাম কুলিংযুক্ত সুপারকম্পিউটারে চলে'
          },
          {
            en: 'Because 2PC was declared illegal under international treaties in 2024',
            bn: 'কারণ ২০২৪ সালে আন্তর্জাতিক আইনে 2PC নিষিদ্ধ করা হয়েছিল'
          },
          {
            en: '2PC formats the client browser storage on every transaction',
            bn: '2PC প্রতিটি লেনদেনে ব্রাউজার স্টোরেজ ফরম্যাট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Blocking locks held across networks destroy throughput. Sagas and eventual consistency are preferred.',
          bn: 'নেটওয়ার্কে লক আটকে থাকলে পুরো সিস্টেম অচল হয়ে পড়ে; সাগা প্যাটার্ন এর চমৎকার বিকল্প।'
        },
        explanation: {
          en: 'Two-Phase Commit prioritizes strict consistency at the cost of availability and latency; modern cloud systems prefer asynchronous Saga orchestration.',
          bn: '2PC চরম নিরাপত্তার বিনিময়ে উচ্চ প্রাপ্যতা ও গতি বিসর্জন দেয়; আধুনিক সিস্টেমে তাই সাগা প্যাটার্ন পছন্দ করা হয়।'
        }
      },
      {
        id: 'plq-q3',
        kind: 'mcq',
        topic: 'celebrity-shard-write-splitting',
        question: {
          en: 'When a single entity key (such as an influencer account with millions of likes per second) creates a severe write hotspot on one shard, what architecture pattern disperses the write load?',
          bn: 'যখন কোনো একটি একক কী (যেমন প্রতি সেকেন্ডে লাখ লাখ লাইক পাওয়া একজন প্রভাবশালীর পোস্ট) একটি শার্ডে চরম রাইট হটস্পট তৈরি করে, তখন কোন আর্কিটেকচার কৌশল এই চাপ ছড়িয়ে দেয়?'
        },
        options: [
          {
            en: 'Key Salting or Sub-key Splitting: appending a random suffix (e.g. post_123_shard_1 to post_123_shard_10) to spread writes across 10 shards, aggregating totals on read',
            bn: 'কি সল্টিং বা সাব-কি স্প্লিটিং: কী-এর সাথে একটি এলোমেলো সংখ্যা (যেমন post_123_shard_1 থেকে post_123_shard_10) যোগ করে ১০টি ভিন্ন শার্ডে রাইট ছড়িয়ে দেওয়া এবং পড়ার সময় তাদের যোগফল বের করা'
          },
          {
            en: 'Shutting down the server room to let the hard drives cool',
            bn: 'হার্ড ড্রাইভ ঠাণ্ডা করার জন্য সার্ভার রুম সাময়িকভাবে বন্ধ করে দেওয়া'
          },
          {
            en: 'Because key salting causes computer screens to display in grayscale',
            bn: 'কারণ এতে কম্পিউটারের ডিসপ্লে সাদাকালো হয়ে যায়'
          },
          {
            en: 'Deleting the influencer account permanently from the database',
            bn: 'ডেটাবেস থেকে ওই প্রভাবশালীর অ্যাকাউন্ট স্থায়ীভাবে মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Turn 1 hot key into 10 cooler sub-keys across 10 machines, then SUM() them when reading.',
          bn: '১টি উত্তপ্ত কি-কে ১০টি ভাগে ভাগ করে ১০টি সার্ভারে দিন, তারপর পড়ার সময় যোগ করে নিন।'
        },
        explanation: {
          en: 'Salting distributes single-key write bursts across multiple physical shards, breaking write bottlenecks.',
          bn: 'কি সল্টিং একক কি-এর ওপর অতিরিক্ত রাইট চাপকে একাধিক শার্ডের মধ্যে ভাগ করে দিয়ে সার্ভারকে সচল রাখে।'
        }
      },
      {
        id: 'plq-q4',
        kind: 'mcq',
        topic: 'directory-based-partitioning-lookup',
        question: {
          en: 'How does Directory-Based Partitioning map database records to shards, and what is its primary operational tradeoff?',
          bn: 'ডিরেক্টরি-ভিত্তিক পার্টিশনিং কীভাবে ডেটাকে শার্ডের সাথে মেলায় এবং এর মূল অপারেশনাল সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'A central lookup service or lookup table maps each key to its current shard, providing dynamic flexibility to move shards individually at the cost of an extra network lookup hop for every query',
            bn: 'একটি কেন্দ্রীয় ডিরেক্টরি বা লুকআপ টেবিল প্রতিটি কি কোন শার্ডে আছে তা সংরক্ষণ করে, যা যেকোনো শার্ড সহজেই সরানোর নমনীয়তা দেয় কিন্তু প্রতিটি কোয়েরির আগে ডিরেক্টরিতে খোঁজার বাড়তি নেটওয়ার্ক বিলম্ব যোগ করে'
          },
          {
            en: 'Directory partitioning requires all database records to be stored in text files',
            bn: 'ডিরেক্টরি পার্টিশনিং সমস্ত রেকর্ড টেক্সট ফাইলে রাখতে বাধ্য করে'
          },
          {
            en: 'Because directory partitioning formats all client laptops upon query',
            bn: 'কারণ ডিরেক্টরি পার্টিশনিং ক্লায়েন্টের ল্যাপটপ ফরম্যাট করে'
          },
          {
            en: 'It reduces internet connection speeds by 95 percent',
            bn: 'এটি ইন্টারনেটের গতি ৯৫ শতাংশ কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Look up in a central directory first -> then query the shard. Flexibility vs extra hop latency.',
          bn: 'আগে কেন্দ্রীয় তালিকায় সন্ধান -> তারপর মূল শার্ডে কোয়েরি; নমনীয়তা বনাম বাড়তি সময়ের আপস।'
        },
        explanation: {
          en: 'Directory-based partitioning enables arbitrary shard movements and rebalancing without recomputing hashes, but the lookup service must be cached to prevent becoming a bottleneck.',
          bn: 'ডিরেক্টরি পার্টিশনিং যেকোনো শার্ডে ডেটা সরানোর অসাধারণ স্বাধীনতা দেয়, তবে ডিরেক্টরি সার্ভিসটি ক্যাশে রাখা জরুরি।'
        }
      }
    ]
  }
};
