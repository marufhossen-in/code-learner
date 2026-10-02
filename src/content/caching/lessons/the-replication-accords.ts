import type { Lesson } from '../../../lib/types';

export const theReplicationAccordsLesson: Lesson = {
  slug: 'the-replication-accords',
  tech: 'caching',
  title: {
    en: 'Redis High Availability, Sentinel Failover & Cluster Sharding',
    bn: 'রেডিস হাই অ্যাভেইল্যাবিলিটি, সেন্টিনেল ফেইলওভার ও ক্লাস্টার শার্ডিং'
  },
  summary: {
    en: 'A standalone cache instance is a single point of failure: if the host crashes or exhausts memory, the origin database faces an instant catastrophic outage. Scaling cache infrastructure to enterprise tiers requires replication and horizontal clustering. Redis provides two primary clustering architectures: Redis Sentinel (providing automated failover and health monitoring across master-replica topologies) and Redis Cluster (providing distributed horizontal sharding across 16384 hash slots). This lesson explores replication lag, split-brain mitigation via min-replicas-to-write, CRC16 hash slot mathematics, and Hash Tags for co-locating multi-key transactions onto identical cluster shards.',
    bn: 'একটি একক ক্যাশ সার্ভার পুরো সিস্টেমের জন্য চরম ঝুঁকিপূর্ণ: যদি সেই সার্ভারটি ক্র্যাশ করে, তবে সব অনুরোধ নিমেষেই ডাটাবেসে গিয়ে পুরো সিস্টেম বন্ধ করে দেয়। এন্টারপ্রাইজ স্কেলে ক্যাশ পরিচালনা করতে রেপ্লিকেশন ও অনুভূমিক ক্লাস্টারিং অপরিহার্য। রেডিসে দুটি প্রধান হাই-অ্যাভেইল্যাবিলিটি ব্যবস্থা রয়েছে: রেডিস সেন্টিনেল (স্বয়ংক্রিয় ফেইলওভার ও মাস্টার-রিপ্লিকা তদারকি) এবং রেডিস ক্লাস্টার (১৬৩৮৪টি হ্যাশ স্লটে অনুভূমিক ডেটা শার্ডিং)। এই পাঠে রেপ্লিকেশন ল্যাগ, স্প্লিট-ব্রেন প্রতিরোধ, CRC16 হ্যাশ স্লট গণিত এবং হ্যাশ ট্যাগের মাধ্যমে একই নোডে একাধিক সম্পর্কিত কি সংরক্ষণের কৌশল ব্যাখ্যা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Resilience Imperative: From Single Node to High Availability',
        bn: 'স্থায়িত্বের অপরিহার্যতা: একক নোড থেকে হাই অ্যাভেইল্যাবিলিটি'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'Running a single Redis server in production invites disaster. When memory runs out, hardware fails, or network partitions occur, every request falls back to the database. High-availability architectures deploy replica nodes that mirror state continuously, ready to assume leadership within seconds of a master failure.',
        bn: 'প্রোডাকশনে একটিমাত্র রেডিস সার্ভার চালানো অত্যন্ত ঝুঁকিপূর্ণ। মেমোরি ফুরিয়ে গেলে, হার্ডওয়্যার নষ্ট হলে বা নেটওয়ার্ক বিচ্ছিন্ন হলে সমস্ত চাপ মূল ডাটাবেসের ওপর গিয়ে পড়ে। হাই-অ্যাভেইল্যাবিলিটি সিস্টেমে একাধিক রিপ্লিকা নোড রাখা হয় যা সার্বক্ষণিক তথ্য সিঙ্ক রাখে এবং মূল সার্ভার নষ্ট হলে কয়েক সেকেন্ডের মধ্যে দায়িত্ব গ্রহণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Master-Replica Replication',
          def: {
            en: 'An asynchronous replication pipeline where a primary master node streams write commands to one or more read-only replica nodes',
            bn: 'একটি অ্যাসিনক্রোনাস ব্যবস্থা যেখানে মূল মাস্টার সার্ভার তার সমস্ত রাইট কমান্ড এক বা একাধিক রিড-অনলি রিপ্লিকায় পাঠায়'
          }
        },
        {
          term: 'Redis Sentinel',
          def: {
            en: 'A distributed monitoring and coordination daemon that detects master failures via quorum voting and automatically promotes a replica',
            bn: 'একটি তদারককারী ব্যবস্থা যা সার্ভারগুলোর অবস্থা পর্যবেক্ষণ করে এবং মাস্টার ডাউন হলে ভোটের মাধ্যমে নতুন মাস্টার নির্বাচন করে'
          }
        },
        {
          term: 'Redis Cluster',
          def: {
            en: 'A shared-nothing distributed Redis architecture that automatically partitions data across 16384 hash slots over multiple master shards',
            bn: 'রেডিসের একটি আধুনিক ক্লাস্টার যা ১৬৩৮৪টি হ্যাশ স্লটে পুরো ডেটাসেটকে একাধিক সার্ভারে স্বয়ংক্রিয়ভাবে ভাগ করে দেয়'
          }
        },
        {
          term: 'Hash Tags ({tag})',
          def: {
            en: 'Enclosing part of a key in curly brackets to force Redis Cluster to hash only that bracketed substring, guaranteeing shard colocation',
            bn: 'কি-এর নির্দিষ্ট অংশকে ব্র্যাকেটে আবদ্ধ করে হ্যাশ করা যাতে সম্পর্কিত ডেটা একই ক্লাস্টার নোডে জমা থাকে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'sentinel-vs-cluster',
      text: {
        en: 'Architectural Comparison: Redis Sentinel vs Redis Cluster',
        bn: 'আর্কিটেকচার তুলনা: রেডিস সেন্টিনেল বনাম রেডিস ক্লাস্টার'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison Between Redis Sentinel and Redis Cluster',
        bn: 'রেডিস সেন্টিনেল ও রেডিস ক্লাস্টারের তুলনামূলক বিশ্লেষণ'
      },
      head: [
        { en: 'Dimension', bn: 'বৈশিষ্ট্য' },
        { en: 'Redis Sentinel Architecture', bn: 'রেডিস সেন্টিনেল' },
        { en: 'Redis Cluster Architecture', bn: 'রেডিস ক্লাস্টার' }
      ],
      rows: [
        [
          { en: 'Primary Focus', bn: 'মূল লক্ষ্য' },
          { en: 'High Availability (automatic failover for a single dataset)', bn: 'হাই অ্যাভেইল্যাবিলিটি (একক ডেটাসেটের স্বয়ংক্রিয় ব্যাকআপ)' },
          { en: 'Horizontal Scalability (sharding massive datasets across servers)', bn: 'অনুভূমিক স্কেলিং (বিশাল ডেটা বহু সার্ভারে ভাগ করা)' }
        ],
        [
          { en: 'Memory Capacity Limit', bn: 'মেমোরি ধারণক্ষমতার সীমা' },
          { en: 'Limited to the RAM size of a single physical server machine', bn: 'একটিমাত্র মেশিনের র‍্যামের মধ্যেই সীমাবদ্ধ থাকে' },
          { en: 'Scales linearly to hundreds of terabytes across large clusters', bn: 'বহু সার্ভার মিলে শত শত টেরাবাইট পর্যন্ত স্কেল করা যায়' }
        ],
        [
          { en: 'Data Partitioning', bn: 'ডেটা বিভাজন' },
          { en: 'No sharding; every replica holds a complete duplicate copy of data', bn: 'কোনো বিভাজন নেই; প্রতিটি নোডে সম্পূর্ণ ডেটার অনুলিপি থাকে' },
          { en: 'Automated sharding across exactly 16384 virtual hash slots', bn: '১৬৩৮৪টি হ্যাশ স্লটে স্বয়ংক্রিয়ভাবে ডেটা বিভক্ত হয়' }
        ],
        [
          { en: 'Multi-Key Operations', bn: 'মাল্টি-কি অপারেশন' },
          { en: 'Supported natively across all keys without constraints', bn: 'যেকোনো কি-এর ওপর কোনো বাধা ছাড়াই লেনদেন চালানো যায়' },
          { en: 'Requires Hash Tags ({tag}) to guarantee multi-key colocation', bn: 'একই নোডে রাখতে ব্র্যাকেটযুক্ত হ্যাশ ট্যাগ ({tag}) আবশ্যক' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'cluster-hash-slot-mechanics',
      text: {
        en: 'CRC16 Hash Slot Mathematics & Hash Tag Colocation',
        bn: 'CRC16 হ্যাশ স্লট গণিত ও হ্যাশ ট্যাগ কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Redis Cluster, data is partitioned across exactly 16384 virtual hash slots (numbered 0 to 16383). When saving a key, Redis passes the key bytes through a CRC16 checksum function and computes modulo 16384: HASH_SLOT = CRC16(key) % 16384. A cluster with 3 master shards assigns slots 0 to 5460 to Shard 1, 5461 to 10922 to Shard 2, and 10923 to 16383 to Shard 3. Multi-key transactions (such as MGET or Lua scripts) fail with a CROSSSLOT error if the keys reside on different shards. To solve this, developers use Hash Tags: enclosing a shared substring in curly brackets, like {user:100}:profile and {user:100}:orders. Redis hashes only the text inside the brackets, guaranteeing that both keys hash to slot 9308 and land on the exact same shard.',
        bn: 'রেডিস ক্লাস্টারে সমস্ত ডেটা ঠিক ১৬৩৮৪ ভার্চুয়াল হ্যাশ স্লটে (০ থেকে ১৬৩৮৩ পর্যন্ত) বিভক্ত থাকে। কোনো কি সেভ করার সময় রেডিস CRC16 অ্যালগরিদম দিয়ে কি-এর মান বের করে এবং ১৬৩৮৪ দিয়ে ভাগশেষ নির্ধারণ করে: HASH_SLOT = CRC16(key) % 16384। ৩ মাস্টার নোড থাকলে শার্ড ১ পায় ০ থেকে ৫৪৬০, শার্ড ২ পায় ৫৪৬১ থেকে ১০৯২২ এবং শার্ড ৩ পায় ১০৯২৩ থেকে ১৬৩৮৩ নম্বর স্লট। একাধিক কি-এর ওপর ট্রানজ্যাকশন চালাতে গেলে সেগুলো ভিন্ন নোডে থাকলে CROSSSLOT এরর দেখা দেয়। এর সমাধানে হ্যাশ ট্যাগ ({tag}) ব্যবহৃত হয়: যেমন {user:100}:profile এবং {user:100}:orders। রেডিস কেবল ব্র্যাকেটের ভেতরের অংশটিকে হ্যাশ করায় উভয় কি হুবহু ৯৩০৮ নম্বর স্লটে যায় এবং একই সার্ভারে নিরাপদে সংরক্ষিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: CRC16 Hash Slot & Hash Tag Alignment',
        bn: 'চালনাযোগ্য সিমুলেশন: CRC16 হ্যাশ স্লট ও হ্যাশ ট্যাগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates CRC16 hash slots for tagged and untagged keys across the 16384-slot cluster space, proving that hash tags produce identical slot placement:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১৬৩৮৪ স্লটের ক্লাস্টারে সাধারণ কি এবং হ্যাশ ট্যাগযুক্ত কি-এর স্লট হিসাব করে দেখায় যে ট্যাগ ব্যবহারের ফলে উভয় কি একই স্লটে বসে:'
      }
    },
    {
      type: 'code',
      id: 'caching-cluster-sim',
      lang: 'javascript',
      code: `// Redis Cluster CRC16 Hash Slot & Hash Tag Simulator
function crc16(buf) {
  let crc = 0x0000;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i] << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }
  return crc;
}

function getClusterSlot(key) {
  // If key contains {hashTag}, hash only the tag contents
  const s = key.indexOf('{');
  const e = key.indexOf('}');
  let strToHash = key;
  if (s !== -1 && e !== -1 && e > s + 1) {
    strToHash = key.substring(s + 1, e);
  }
  const buf = Buffer.from(strToHash, 'utf8');
  return crc16(buf) % 16384;
}

const totalSlots = 16384;
const slotProfile = getClusterSlot('{user:100}:profile');
const slotOrders = getClusterSlot('{user:100}:orders');
const slotGeneral = getClusterSlot('global:config');

console.log('Total virtual hash slots in Redis Cluster:', totalSlots);
// -> Total virtual hash slots in Redis Cluster: 16384

console.log('Calculated hash slot for {user:100}:profile:', slotProfile);
// -> Calculated hash slot for {user:100}:profile: 9308

console.log('Calculated hash slot for {user:100}:orders:', slotOrders);
// -> Calculated hash slot for {user:100}:orders: 9308

console.log('Calculated hash slot for general key global:config:', slotGeneral);
// -> Calculated hash slot for general key global:config: 8074`,
      caption: {
        en: 'Figure 8: Hash tags force both profile and orders to slot 9308 out of 16384, while untagged global:config maps to slot 8074',
        bn: 'চিত্র ৮: হ্যাশ ট্যাগ ব্যবহারের ফলে ১৬৩৮৪ স্লটের মধ্যে প্রোফাইল ও অর্ডার উভয়ই ৯৩০৮ স্লটে বসে, আর ট্যাগহীন কি ৮০৭৪ স্লটে যায়'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Redis High Availability',
        bn: 'রেডিস হাই অ্যাভেইল্যাবিলিটির জন্য ৪টি আবশ্যকীয় নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 operational rules to guarantee zero data loss and flawless failovers:',
        bn: 'কোনো ডেটা না হারিয়ে মসৃণ ফেইলওভার নিশ্চিত করতে এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Deploy an Odd Number of Sentinels',
          def: {
            en: 'Deploy at least 3 Sentinel daemons across independent availability zones to prevent split-brain quorum deadlocks',
            bn: 'ভোটের মাধ্যমে নির্ভুল ফেইলওভার নিশ্চিত করতে সর্বদা অন্তত ৩টি সেন্টিনেল আলাদা ক্লাউড জোনে চালান'
          }
        },
        {
          term: 'Rule 2: Configure min-replicas-to-write for Split-Brain Safety',
          def: {
            en: 'Set min-replicas-to-write 1 to stop an isolated partitioned master from accepting writes that will be wiped upon failover',
            bn: 'min-replicas-to-write ১ কনফিগার করুন যাতে নেটওয়ার্ক বিচ্ছিন্ন কোনো পুরনো মাস্টার ভুল ডেটা গ্রহণ না করে'
          }
        },
        {
          term: 'Rule 3: Use Hash Tags for Multi-Key Transactions in Cluster',
          def: {
            en: 'Always use {entityId}:attribute syntax when multi-key commands or Lua scripts must execute against Redis Cluster',
            bn: 'ক্লাস্টারে মাল্টি-কি ট্রানজ্যাকশন চালানোর সময় সর্বদা ব্র্যাকেটযুক্ত হ্যাশ ট্যাগ দিয়ে একই নোডে ডেটা রাখুন'
          }
        },
        {
          term: 'Rule 4: Monitor Master-Replica Replication Lag',
          def: {
            en: 'Track the master_repl_offset metric continuously; lag spikes signal network saturation or slow queries blocking the replica',
            bn: 'মাস্টার ও রিপ্লিকার মধ্যবর্তী দূরত্বের অফসেট নিয়মিত পর্যবেক্ষণ করুন যাতে বাসি ডেটার সমস্যা দ্রুত ধরা পড়ে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'caching-cluster-slots-calc-ex',
      kind: 'mcq',
      topic: 'Total number of virtual hash slots in Redis Cluster',
      question: {
        en: 'How many total virtual hash slots are partitioned across nodes in a Redis Cluster?',
        bn: 'রেডিস ক্লাস্টারে নোডগুলোর মধ্যে মোট কতটি ভার্চুয়াল হ্যাশ স্লট বিভক্ত থাকে?'
      },
      options: [
        {
          en: 'Exactly 16384 slots (numbered 0 to 16,383)',
          bn: 'ঠিক ১৬৩৮৪টি স্লট (০ থেকে ১৬,৩৮৩ পর্যন্ত)'
        },
        {
          en: '1000 slots',
          bn: '১০০০টি স্লট'
        },
        {
          en: '100 slots',
          bn: '১০০টি স্লট'
        },
        {
          en: '65,536 slots',
          bn: '৬৫,৫৩৬টি স্লট'
        }
      ],
      answer: 0,
      hint: {
        en: '2 to the power of 14 = 16384.',
        bn: '২ এর পাওয়ার ১৪ বা ১৬৩৮৪ এর কথা ভাবুন।'
      },
      explanation: {
        en: 'Redis Cluster allocates exactly 16384 slots, balancing memory-efficient gossip heartbeat packets with granular shard resharding.',
        bn: 'রেডিস ক্লাস্টার ১৬৩৮৪টি স্লট ব্যবহার করে যাতে ক্লাস্টারের হার্টবিট বার্তা ছোট থাকে এবং সহজে নোড পরিবর্তন করা যায়।'
      }
    },
    {
      id: 'caching-hash-tag-colocate-ex',
      kind: 'mcq',
      topic: 'How Hash Tags solve CROSSSLOT errors in Redis Cluster',
      question: {
        en: 'Why do {user:100}:profile and {user:100}:orders map to the exact same hash slot (9308) in Redis Cluster?',
        bn: 'রেডিস ক্লাস্টারে {user:100}:profile এবং {user:100}:orders কেন হুবহু একই হ্যাশ স্লটে (৯৩০৮) অবস্থান করে?'
      },
      options: [
        {
          en: 'Because Redis Cluster extracts and hashes only the text inside the curly brackets ("user:100"), ignoring the rest of the key',
          bn: 'কারণ রেডিস ক্লাস্টার ব্র্যাকেটের ভেতরের অংশ ("user:100") হ্যাশ করে এবং বাইরের অংশকে উপেক্ষা করে'
        },
        {
          en: 'Because all keys ending in orders go to slot 9308',
          bn: 'কারণ orders দিয়ে শেষ হওয়া সব কি ৯৩০৮ স্লটে যায়'
        },
        {
          en: 'Because Redis Cluster only has one slot in total',
          bn: 'কারণ রেডিস ক্লাস্টারে একটিমাত্র স্লট থাকে'
        },
        {
          en: 'It is a pure mathematical coincidence',
          bn: 'এটি নিছক একটি কাকতালীয় ঘটনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only the substring enclosed in curly brackets is hashed.',
        bn: 'কেবলমাত্র দ্বিতীয় বন্ধনীর ভেতরের অংশ হ্যাশ করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Hash tags guarantee that keys sharing the same bracketed identifier reside on the identical master node, allowing multi-key operations.',
        bn: 'হ্যাশ ট্যাগ নিশ্চিত করে যে একই আইডির সমস্ত ডেটা একটিমাত্র সার্ভারে জমা হয়, যার ফলে কোনো এরর ছাড়া লেনদেন করা সম্ভব হয়।'
      }
    },
    {
      id: 'caching-split-brain-ex',
      kind: 'mcq',
      topic: 'What causes a split-brain condition in replication topologies',
      question: {
        en: 'What dangerous state is referred to as a Split-Brain in a Redis master-replica topology?',
        bn: 'রেডিস মাস্টার-রিপ্লিকা সিস্টেমে স্প্লিট-ব্রেন (Split-Brain) বলতে কোন বিপজ্জনক পরিস্থিতিকে বোঝায়?'
      },
      options: [
        {
          en: 'A network partition isolates the old master, causing Sentinels to elect a new master while clients continue writing to both masters concurrently',
          bn: 'নেটওয়ার্ক সমস্যার কারণে বিচ্ছিন্ন পুরনো মাস্টার একা হয়ে যায় এবং সেন্টিনেল নতুন মাস্টার বানালে ব্যবহারকারীরা দুটি মাস্টারেই একসাথে লিখতে থাকে'
        },
        {
          en: 'The server motherboard breaks into two physical halves',
          bn: 'সার্ভারের মাদারবোর্ড ভেঙে দুই টুকরো হয়ে গেলে'
        },
        {
          en: 'When a database stores only negative numbers',
          bn: 'ডাটাবেস যখন কেবল ঋণাত্মক সংখ্যা জমা রাখে'
        },
        {
          en: 'When the computer monitor displays two desktop screens',
          bn: 'কম্পিউটার স্ক্রিনে দুটি ডেস্কটপ ভেসে উঠলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Two active masters accepting conflicting writes during a network partition.',
        bn: 'একসাথে দুটি সার্ভার নিজেকে মূল দাবি করে ডেটা লেখার বিপদের কথা ভাবুন।'
      },
      explanation: {
        en: 'When the partition heals, the old master is demoted to a replica, permanently erasing all writes accepted during the split.',
        bn: 'নেটওয়ার্ক ঠিক হলে পুরনো মাস্টার ডিমোট হয়ে যায় এবং বিচ্ছিন্ন অবস্থায় তাতে লেখা সব ডেটা চিরতরে মুছে নষ্ট হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-caching-replication-cluster',
    title: {
      en: 'Redis High Availability & Clustering Quiz',
      bn: 'রেডিস হাই অ্যাভেইল্যাবিলিটি ও ক্লাস্টারিং কুইজ'
    },
    questions: [
      {
        id: 'q-caching-sentinel-quorum',
        kind: 'mcq',
        topic: 'Why an odd number of Sentinels is required',
        question: {
          en: 'Why is it mandatory to deploy an odd number of Redis Sentinel instances (e.g. 3 or 5)?',
          bn: 'রেডিস সেন্টিনেল সিস্টেমে কেন সর্বদা বিজোড় সংখ্যক (যেমন ৩ বা ৫টি) ইনস্ট্যান্স রাখা আবশ্যক?'
        },
        options: [
          {
            en: 'To guarantee a clear majority quorum during failover voting, preventing split tie votes during network partitions',
            bn: 'যাতে ফেইলওভারের সময় সংখ্যাগরিষ্ঠের নিশ্চিত ভোট পাওয়া যায় এবং ড্র বা অমীমাংসিত পরিস্থিতি এড়ানো সম্ভব হয়'
          },
          {
            en: 'Because even numbers are not recognized by the Linux kernel',
            bn: 'কারণ লিনাক্স কার্নেলে জোড় সংখ্যা চেনে না'
          },
          {
            en: 'To reduce electricity consumption by 50%',
            bn: 'বিদ্যুৎ খরচ ৫০% কমানোর জন্য'
          },
          {
            en: 'Because Sentinels can only communicate in groups of three',
            bn: 'কারণ সেন্টিনেল কেবল তিনজনের গ্রুপে কথা বলতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Majority quorum avoids tie-vote stalemates.',
          bn: 'ভোটের সংখ্যাগরিষ্ঠতা নিশ্চিত করার কথা ভাবুন।'
        },
        explanation: {
          en: 'An odd count ensures that in any two-way network split, exactly one partition contains a strict majority of nodes to elect a leader.',
          bn: 'বিজোড় সংখ্যা নিশ্চিত করে যে নেটওয়ার্ক ভাগ হলেও যেকোনো এক পাশে নিশ্চিতভাবে অর্ধেকের বেশি ভোট থাকবে।'
        }
      },
      {
        id: 'q-caching-psync-backlog',
        kind: 'mcq',
        topic: 'Role of replication backlog in PSYNC',
        question: {
          en: 'How does the Redis replication backlog buffer facilitate efficient recovery after a brief network disconnect?',
          bn: 'সাময়িক নেটওয়ার্ক বিচ্ছিন্নতার পর দ্রুত স্বাভাবিক হতে রেডিসের রেপ্লিকেশন ব্যাকলগ বাফার কীভাবে সাহায্য করে?'
        },
        options: [
          {
            en: 'It stores recent write commands in a circular memory ring buffer, allowing the replica to fetch only missed delta commands via PSYNC instead of transferring the entire full database',
            bn: 'এটি মেমোরিতে সাম্প্রতিক কমান্ডগুলো জমা রাখে, ফলে বিচ্ছিন্ন রিপ্লিকা পুরো ডাটাবেস নতুন করে না এনে কেবল ছুটে যাওয়া অংশটুকু এনে দ্রুত সিঙ্ক হতে পারে'
          },
          {
            en: 'It permanently deletes all keys that were touched during the disconnect',
            bn: 'বিচ্ছিন্নতার সময় পরিবর্তিত সমস্ত কি এটি চিরতরে মুছে ফেলে'
          },
          {
            en: 'It sends text alerts to all mobile phones on the cellular network',
            bn: 'এটি সব মোবাইল ফোনে এসএমএস পাঠায়'
          },
          {
            en: 'It compresses the operating system files into a ZIP archive',
            bn: 'এটি অপারেটিং সিস্টেমকে জিপ ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Partial resynchronization of delta writes instead of a full snapshot.',
          bn: 'পুরো ডেটা না এনে শুধু ছুটে যাওয়া অংশটুকু আনার কথা ভাবুন।'
        },
        explanation: {
          en: 'If the replica reconnects while its offset is still within the master’s replication backlog ring, it resumes seamlessly with zero snapshot overhead.',
          bn: 'রিপ্লিকা ফিরে এলে যদি তার অফসেট বাফারের মধ্যে থাকে, তবে পুরো ডেটা ডাম্প না করে মুহূর্তেই সিঙ্ক হয়ে যায়।'
        }
      },
      {
        id: 'q-caching-cluster-crossslot',
        kind: 'mcq',
        topic: 'Cause of CROSSSLOT error in Redis Cluster',
        question: {
          en: 'What causes Redis Cluster to return a CROSSSLOT Keys in request don’t hash to the same slot error?',
          bn: 'রেডিস ক্লাস্টারে CROSSSLOT Keys in request don’t hash to the same slot এরর কেন ঘটে?'
        },
        options: [
          {
            en: 'An atomic multi-key command or transaction was executed on keys that hash to different virtual slots residing on different physical cluster shards',
            bn: 'একাধিক কি-এর ওপর ট্রানজ্যাকশন চালানোর সময় কি-গুলো ভিন্ন ভিন্ন হ্যাশ স্লটে ভিন্ন ভিন্ন সার্ভারে অবস্থান করায়'
          },
          {
            en: 'The server administrator forgot to enter a license key',
            bn: 'সার্ভার অ্যাডমিন লাইসেন্স কি দিতে ভুলে গেলে'
          },
          {
            en: 'The internet bandwidth exceeded 10 gigabits per second',
            bn: 'ইন্টারনেট ব্যান্ডউইথ ১০ গিগাবিট পার সেকেন্ড ছাড়িয়ে গেলে'
          },
          {
            en: 'The computer hard drive was formatted during the request',
            bn: 'অনুরোধ চলাকালীন হার্ডডিস্ক ফরম্যাট হয়ে গেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multi-key operations across disparate cluster shards.',
          bn: 'আলাদা আলাদা সার্ভারে থাকা তথ্যের ওপর একসাথে কাজ করার বাধার কথা ভাবুন।'
        },
        explanation: {
          en: 'Redis Cluster nodes operate independently; an atomic operation cannot span network partitions between disparate cluster nodes.',
          bn: 'যেহেতু প্রতিটি ক্লাস্টার নোড আলাদা, তাই দুটি ভিন্ন নোডে থাকা ডেটার ওপর একযোগে কোনো একক কমান্ড চালানো সম্ভব নয়।'
        }
      },
      {
        id: 'q-caching-replication-lag-read',
        kind: 'mcq',
        topic: 'Consequence of reading from a lagging replica',
        question: {
          en: 'In an architecture where read queries are routed to Redis replicas, what anomaly can occur if replication lag is elevated?',
          bn: 'রিড কোয়েরিগুলো যখন রিপ্লিকায় পাঠানো হয়, তখন রেপ্লিকেশন ল্যাগ বেশি থাকলে কোন সমস্যা দেখা দিতে পারে?'
        },
        options: [
          {
            en: 'Clients may read stale or outdated data because write updates accepted on the master have not yet streamed to the replica',
            bn: 'ব্যবহারকারী পুরনো বা বাসি তথ্য দেখতে পারে কারণ মাস্টারে লেখা নতুন ডেটা এখনো রিপ্লিকায় এসে পৌঁছায়নি'
          },
          {
            en: 'The user screen turns into a blue error page permanently',
            bn: 'ব্যবহারকারীর স্ক্রিন চিরতরে নীল এরর পেজে বদলে যায়'
          },
          {
            en: 'The database server burns out its network interface card',
            bn: 'সার্ভারের নেটওয়ার্ক কার্ড পুড়ে নষ্ট হয়ে যায়'
          },
          {
            en: 'All passwords in the application become public on the web',
            bn: 'অ্যাপ্লিকেশনের সব পাসওয়ার্ড ওয়েবে সবার কাছে উন্মুক্ত হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stale reads due to asynchronous replication delay.',
          bn: 'অ্যাসিনক্রোনাস দেরির কারণে পুরনো তথ্য পাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Because replication is asynchronous, a small latency window exists where replicas lag behind the master state (violating read-your-writes).',
          bn: 'যেহেতু ডেটা কপি হতে সামান্য কয়েক মিলিসেকেন্ড সময় লাগে, তাই ল্যাগ থাকলে রিপ্লিকা থেকে পুরনো তথ্য আসতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-capstone-tribunal',
    tech: 'caching',
    title: {
      en: 'Production Distributed Caching Architecture — Enterprise Capstone',
      bn: 'প্রোডাকশন ডিস্ট্রিবিউটেড ক্যাশিং আর্কিটেকচার — এন্টারপ্রাইজ ক্যাপস্টোন'
    }
  }
};