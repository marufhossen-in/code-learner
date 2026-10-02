import type { Lesson } from '../../../lib/types';

export const distributedSystemsCapstoneLesson: Lesson = {
  slug: 'distributed-systems-capstone',
  tech: 'distributed-systems',
  title: {
    en: 'Distributed Systems Capstone — Architecting Resilient Scale',
    bn: 'বিতরণকৃত সিস্টেম ক্যাপস্টোন: নির্ভরযোগ্য ক্লাউড আর্কিটেকচার'
  },
  summary: {
    en: 'Senior system architects do not treat distributed computing as a set of disconnected protocols. Instead, they synthesize these models into a cohesive, resilient production architecture. Architects map each workload to its exact consistency and partition requirements. They use CP and Raft consensus for financial ledgers, AP quorums for catalogs, and Sagas for workflows. By combining these with SWIM gossip for cluster membership, engineers build systems that withstand hardware failures, network cuts, and cascading outages. This capstone unifies all seven lessons into an industrial cloud architecture engine.',
    bn: 'দক্ষ সিস্টেম আর্কিটেক্টরা বিতরণকৃত কম্পিউটিংকে বিচ্ছিন্ন কিছু প্রোটোকল হিসেবে দেখেন না। বরং তারা এই মডেলগুলোকে একটি শক্তিশালী ও সুসংহত প্রোডাকশন আর্কিটেকচারে রূপ দেন। আর্কিটেক্টরা প্রতিটি কাজের জন্য সঠিক ধারাবাহিকতা ও বিভাজন মডেল নির্ধারণ করেন। আর্থিক লেনদেনে CP এবং রাফট, ক্যাটালগে AP কোরাম এবং সার্ভিসজুড়ে সাগা প্যাটার্ন ব্যবহৃত হয়। ক্লাস্টার সদস্যপদে সুইম গসিপ যুক্ত করে ইঞ্জিনিয়াররা এমন সিস্টেম তৈরি করেন যা হার্ডওয়্যার ত্রুটি ও নেটওয়ার্ক বিভাজনেও অবিচল থাকে। এই ক্যাপস্টোন পাঠটি পুরো হাবটিকে একটি শিল্পমানের ক্লাউড আর্কিটেকচার ইঞ্জিনে রূপ দেয়।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'distributed-architecture-synthesis',
      text: {
        en: 'The Unified Architecture of Resilient Distributed Systems',
        bn: 'নির্ভরযোগ্য বিতরণকৃত সিস্টেমের সমন্বিত আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you architect modern hyperscale cloud platforms, no single database model fits every workload. A financial payment ledger demands zero data loss and strict linearizability, while a product recommendation engine prioritizes sub-millisecond read latency and absolute uptime above all else.',
        bn: 'যখন আপনি আধুনিক বিশাল ক্লাউড প্ল্যাটফর্মের আর্কিটেকচার তৈরি করেন, তখন দেখতে পাবেন যে কোনো একক ডেটাবেস মডেল সব কাজের জন্য মানানসই নয়। একটি আর্থিক লেনদেনের খাতা কোনো ডাটা না হারানোর নিশ্চয়তা এবং কঠোর লিনিয়ারাইজ্যাবিলিটি দাবি করে, অন্যদিকে একটি পণ্য সুপারিশ ইঞ্জিন মিলিসেকেন্ডের কম সময়ের লেটেন্সি এবং সর্বোচ্চ সচলতাকে সবচেয়ে বেশি প্রাধান্য দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Architectural mastery requires segmenting your platform into specialized tiers. For distributed consensus and coordination, employ Raft or Multi-Paxos with strict majority quorums. For geographically distributed storage with elastic writes, use leaderless quorums. For multi-service business workflows, implement Orchestrated Sagas with compensating transactions. And for monitoring cluster membership across thousands of instances, deploy the SWIM gossip protocol.',
        bn: 'দক্ষ আর্কিটেকচার তৈরির জন্য পুরো প্ল্যাটফর্মটিকে সুনির্দিষ্ট স্তরে বিভক্ত করতে হয়। বিতরণকৃত ঐকমত্য এবং সমন্বয়ের জন্য কঠোর সংখ্যাগরিষ্ঠ কোরাম সহ রাফট বা মাল্টি-প্যাক্সোস ব্যবহার করুন। বিশ্বব্যাপী ভৌগোলিক স্টোরেজ ও স্থিতিস্থাপক রাইটের জন্য লিডারবিহীন কোরাম বেছে নিন। একাধিক সার্ভিসের কাজের জন্য ক্ষতিপূরণমূলক পদক্ষেপ সহ অর্কেস্ট্রেটেড সাগা প্রয়োগ করুন। আর হাজার হাজার সার্ভারের স্বাস্থ্য ও সদস্যপদ পর্যবেক্ষণে সুইম (SWIM) গসিপ প্রোটোকল পরিচালনা করুন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'workload-segmentation',
          def: {
            en: 'The architectural practice of partitioning data into CP or AP tiers based on business consistency requirements.',
            bn: 'ব্যবসায়িক চাহিদার ওপর ভিত্তি করে তথ্যকে CP অথবা AP স্তরে বিভক্ত করার কৌশলগত পদ্ধতি।'
          }
        },
        {
          term: 'multi-tier-coordination',
          def: {
            en: 'Combining consensus, sagas, and gossip into a unified architecture to balance latency and safety.',
            bn: 'লেটেন্সি এবং নিরাপত্তার ভারসাম্য বজায় রাখতে কনসেনসাস, সাগা ও গসিপকে একটি সমন্বিত কাঠামোতে যুক্ত করা।'
          }
        },
        {
          term: 'resilience-invariants',
          def: {
            en: 'Core systemic rules (idempotency, fencing tokens, quorum overlaps) preventing data corruption under failure.',
            bn: 'মৌলিক সিস্টেমিক নিয়মাবলি যা সার্ভার ক্র্যাশ বা নেটওয়ার্ক বিভাজনের মাঝেও তথ্যের বিকৃতি রোধ করে।'
          }
        },
        {
          term: 'cascading-failure-defense',
          def: {
            en: 'Techniques such as circuit breakers, backpressure, and jittered retries preventing widespread system collapse.',
            bn: 'সার্কিট ব্রেকার ও ব্যাকপ্রেশারের মতো প্রযুক্তি যা একটি সার্ভারের ত্রুটি পুরো ক্লাস্টারে ছড়িয়ে পড়া রোধ করে।'
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
      id: 'master-decision-matrix-table',
      text: {
        en: 'Master Distributed Systems Architecture Decision Matrix',
        bn: 'বিতরণকৃত সিস্টেম আর্কিটেকচারের পূর্ণাঙ্গ সিদ্ধান্ত ম্যাট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consult this master reference matrix to match enterprise workloads directly with proven distributed systems algorithms and consistency models.',
        bn: 'আপনার এন্টারপ্রাইজ সিস্টেমের কাজের ধরনের সাথে সেরা অ্যালগরিদম ও ধারাবাহিকতা মডেলটি মেলানোর জন্য এই পূর্ণাঙ্গ ম্যাট্রিক্সটি অনুসরণ করুন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Subsystem / Tier', bn: 'সাবসিস্টেম / স্তর' },
        { en: 'Chosen Protocol & Model', bn: 'নির্বাচিত প্রোটোকল ও মডেল' },
        { en: 'CAP Classification', bn: 'CAP শ্রেণিবিভাগ' },
        { en: 'Primary Failure Defense', bn: 'মূল ব্যর্থতা প্রতিরক্ষা ব্যবস্থা' }
      ],
      rows: [
        [
          { en: 'Core Payments & Ledger', bn: 'মূল লেনদেন ও আর্থিক খাতা' },
          { en: 'Raft Consensus with Linearizability', bn: 'লিনিয়ারাইজ্যাবিলিটি সহ রাফট কনসেনসাস' },
          { en: 'CP (Consistency Focus)', bn: 'CP (কঠোর ধারাবাহিকতা)' },
          { en: 'Fencing tokens and strict majority quorums', bn: 'ফেন্সিং টোকেন ও কঠোর সংখ্যাগরিষ্ঠ কোরাম' }
        ],
        [
          { en: 'Shopping Carts & Catalog', bn: 'শপিং কার্ট ও পণ্যের ক্যাটালগ' },
          { en: 'Leaderless replication with Quorums (W, R)', bn: 'কোরাম সহ লিডারবিহীন রেপ্লিকেশন (W, R)' },
          { en: 'AP (Availability Focus)', bn: 'AP (সর্বোচ্চ প্রাপ্যতা)' },
          { en: 'Read repair and anti-entropy Merkle trees', bn: 'রিড রিপেয়ার ও অ্যান্টি-এনট্রপি মারকেল ট্রি' }
        ],
        [
          { en: 'Multi-Service Order Workflow', bn: 'একাধিক সার্ভিসের অর্ডার প্রক্রিয়া' },
          { en: 'Orchestrated Saga Pattern', bn: 'অর্কেস্ট্রেটেড সাগা প্যাটার্ন' },
          { en: 'Eventual Consistency', bn: 'ইভেনচুয়াল ধারাবাহিকতা' },
          { en: 'Automated backward compensating transactions', bn: 'স্বয়ংক্রিয় ক্ষতিপূরণমূলক পদক্ষেপ (রিফান্ড)' }
        ],
        [
          { en: 'Cluster Membership & Health', bn: 'ক্লাস্টার সদস্যপদ ও স্বাস্থ্য' },
          { en: 'SWIM Gossip Protocol', bn: 'সুইম (SWIM) গসিপ প্রোটোকল' },
          { en: 'High Availability', bn: 'উচ্চ প্রাপ্যতা' },
          { en: 'Indirect peer pings and suspicion timers', bn: 'পরোক্ষ সমকক্ষ পিং ও সন্দেহ টাইমার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-capstone-code',
      text: {
        en: 'Executable Multi-Tier Distributed Engine Implementation',
        bn: 'সমন্বিত বিতরণকৃত সিস্টেম ইঞ্জিন ও অডিট ট্র্যাকিংয়ের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an enterprise Distributed Engine. It registers CP services (enforcing fencing tokens) alongside AP services. When a leader election increments the epoch to 2, stale write attempts with token 1 are safely rejected, preventing split-brain corruption.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি সমন্বিত এন্টারপ্রাইজ ডিস্ট্রিবিউটেড ইঞ্জিন বাস্তবায়ন করে। এটি AP সার্ভিসের পাশাপাশি CP সার্ভিস (যা ফেন্সিং টোকেন নিশ্চিত করে) পরিচালনা করে। নতুন লিডার নির্বাচনের পর ক্লাস্টারের ইপক ২ এ উন্নীত হলে সাবেক লিডারের টোকেন ১ নিয়ে আসা অনুরোধ সাথে সাথে বর্জিত হয়।'
      }
    },
    {
      type: 'code',
      code: `class DistributedEngine {
  constructor() {
    this.services = new Map();
    this.fencingEpoch = 1;
  }

  registerService(name, isCP) {
    this.services.set(name, { isCP, status: 'Healthy' });
  }

  processTransaction(serviceName, token, action) {
    const s = this.services.get(serviceName);
    if (!s) throw new Error('Service not found');

    // CP services strictly enforce fencing tokens
    if (s.isCP && token < this.fencingEpoch) {
      return {
        committed: false,
        reason: 'Stale fencing token ' + token + ' < current epoch ' + this.fencingEpoch
      };
    }

    return { committed: true, result: action() };
  }
}

const engine = new DistributedEngine();
engine.registerService('Payments', true); // CP Tier
engine.registerService('Recommendations', false); // AP Tier

// Active leader with token 1 completes charge
const r1 = engine.processTransaction('Payments', 1, () => 'Charged $50');
console.log('CP Payment commit:', r1.committed, r1.result);
// Output: CP Payment commit: true Charged $50

// Leader election increments cluster epoch to 2
engine.fencingEpoch = 2;

// Partitioned former leader attempts write with token 1
const r2 = engine.processTransaction('Payments', 1, () => 'Charged $30');
console.log('Old leader write status:', r2.committed, r2.reason);
// Output: Old leader write status: false Stale fencing token 1 < current epoch 2`
    },
    {
      type: 'heading',
      id: 'production-hardening-rules',
      text: {
        en: 'Production Hardening: Idempotency and Cascading Protection',
        bn: 'প্রোডাকশন সিস্টেমের নিরাপত্তা: আইডেমপোটেন্সি ও ক্যাসকেডিং প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In mission-critical distributed systems, failures are guaranteed to occur. Networks drop packets, creating duplicate retries that can accidentally double-bill users unless every mutating API accepts an Idempotency Key. Furthermore, when a downstream database degrades, callers must employ Circuit Breakers and Exponential Backoff with Jitter to prevent cascading retry storms that take down the entire datacenter.',
        bn: 'গুরুত্বপূর্ণ বিতরণকৃত সিস্টেমে ত্রুটি ঘটা একটি স্বাভাবিক ঘটনা। নেটওয়ার্কে প্যাকেট আটকে গিয়ে রিট্রাই হলে অসাবধানতাবশত গ্রাহকের অ্যাকাউন্টে ডাবল বিল হতে পারে, যদি না প্রতিটি পরিবর্তনশীল এপিআইতে আইডেমপোটেন্সি কি (Idempotency Key) যুক্ত থাকে। অধিকন্তু, কোনো ডেটাবেস ধীরগতির হয়ে পড়লে কলারদের অবশ্যই সার্কিট ব্রেকার এবং এক্সপোনেনশিয়াল ব্যাকঅফ ব্যবহার করতে হয়, যাতে রিট্রাইয়ের ঝড় পুরো ডেটা সেন্টারকে অচল না করে ফেলে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Tiered architecture: Map data categories to their exact consistency needs—CP for money, AP for content.',
          bn: 'স্তরভিত্তিক কাঠামো: তথ্যের ধরনের সাথে সামঞ্জস্য রেখে সঠিক মডেল বাছুন—টাকার জন্য CP এবং কনটেন্টের জন্য AP।',
        },
        {
          en: 'Defense in depth: Enforce majority quorums, leader leases, and fencing tokens to eliminate split-brain risks.',
          bn: 'নিরাপত্তার একাধিক স্তর: স্প্লিট-ব্রেইন দূর করতে সংখ্যাগরিষ্ঠ কোরাম, লিডার লিজ এবং ফেন্সিং টোকেন প্রয়োগ করুন।',
        },
        {
          en: 'Sagas over distributed locks: Replace brittle 2PC distributed locking with decoupled Sagas and compensating actions.',
          bn: 'লকিংয়ের বদলে সাগা: ভঙ্গুর ২PC লকিং ব্যবস্থার পরিবর্তে স্বাধীন সাগা এবং ক্ষতিপূরণমূলক পদক্ষেপ ব্যবহার করুন।',
        },
        {
          en: 'Idempotency and circuit breakers: Design every client request with unique idempotency keys to survive retry storms.',
          bn: 'আইডেমপোটেন্সি ও সার্কিট ব্রেকার: রিট্রাইয়ের ঝুঁকি সামলাতে প্রতিটি অনুরোধে অনন্য আইডেমপোটেন্সি কি নিশ্চিত করুন।',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'dsc-ex1',
      kind: 'mcq',
      topic: 'workload-tier-selection',
      question: {
        en: 'Which combination of distributed models is recommended for an enterprise banking ledger transferring money between accounts?',
        bn: 'অ্যাকাউন্টের মধ্যে অর্থ স্থানান্তরের একটি ব্যাংকিং সিস্টেমের জন্য কোন বিতরণকৃত মডেলগুলোর সমন্বয় সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'CP architecture utilizing Raft consensus, linearizable consistency, and strict fencing tokens',
          bn: 'রাফট কনসেনসাস, লিনিয়ারাইজ্যাবল ধারাবাহিকতা এবং কঠোর ফেন্সিং টোকেন সহ CP আর্কিটেকচার'
        },
        {
          en: 'AP architecture using eventual consistency and single-node in-memory storage',
          bn: 'ইভেনচুয়াল ধারাবাহিকতা সহ AP আর্কিটেকচার এবং একক মেমরি স্টোরেজ'
        },
        {
          en: 'Unreplicated SQLite on a shared network drive',
          bn: 'শেয়ার্ড নেটওয়ার্ক ড্রাইভে রেপ্লিকেশনহীন এসকিউলাইট (SQLite)'
        },
        {
          en: 'Sending text messages between server administrators',
          bn: 'সার্ভার অ্যাডমিনিস্ট্রেটরদের মাঝে এসএমএস পাঠানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a bank allow account balances to diverge or experience dirty reads during a network cut?',
        bn: 'নেটওয়ার্ক বিভাজনের সময় কোনো ব্যাংক কি হিসাবের গরমিল বা বাসি ব্যালেন্স দেখানো মেনে নিতে পারে?'
      },
      explanation: {
        en: 'Financial ledgers require strict linearizability and majority quorum protection to guarantee zero lost money under partitions.',
        bn: 'আর্থিক লেনদেনে কোনো টাকা যাতে নষ্ট না হয় সেজন্য কঠোর লিনিয়ারাইজ্যাবিলিটি এবং কোরাম নিরাপত্তা আবশ্যক।'
      }
    },
    {
      id: 'dsc-ex2',
      kind: 'mcq',
      topic: 'idempotency-key-purpose',
      question: {
        en: 'What critical danger does an "Idempotency Key" eliminate when client requests are retried over unreliable networks?',
        bn: 'অনির্ভরযোগ্য নেটওয়ার্কে ক্লায়েন্টের অনুরোধগুলো পুনরায় চেষ্টা করার সময় একটি "আইডেমপোটেন্সি কি" কোন মারাত্মক ঝুঁকি দূর করে?'
      },
      options: [
        {
          en: 'It prevents duplicate operations, ensuring that retrying a payment request multiple times only charges the customer once',
          bn: 'এটি দ্বৈত অপারেশন প্রতিহত করে, ফলে পেমেন্টের অনুরোধ একাধিকবার চেষ্টা করলেও গ্রাহককে মাত্র একবারই চার্জ করা হয়'
        },
        {
          en: 'It automatically increases the server’s internet speed',
          bn: 'এটি স্বয়ংক্রিয়ভাবে সার্ভারের ইন্টারনেটের গতি বাড়িয়ে দেয়'
        },
        {
          en: 'It deletes all user passwords from the database',
          bn: 'এটি ডেটাবেস থেকে ব্যবহারকারীর সমস্ত পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'It formats the client hard drive on every reboot',
          bn: 'প্রতিটি রিবুটে এটি ক্লায়েন্টের হার্ডড্রাইভ ফরম্যাট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a timeout occurs after the payment was already charged, a retry without an idempotency key would charge a second time.',
        bn: 'টাকা কাটার পর টাইমআউট হলে আইডেমপোটেন্সি কি ছাড়া পুনরায় কল দিলে গ্রাহকের থেকে দ্বিতীয়বার টাকা কেটে নেবে।'
      },
      explanation: {
        en: 'The server caches the result of the first execution matching the idempotency key, returning the cached success on subsequent retries.',
        bn: 'সার্ভার আইডেমপোটেন্সি কি এর প্রথম অপারেশনের ফলাফল ক্যাশে রেখে দেয় এবং পরবর্তী প্রতি কলেই সেই ক্যাশ ফলাফল ফিরিয়ে দেয়।'
      }
    },
    {
      id: 'dsc-ex3',
      kind: 'mcq',
      topic: 'circuit-breaker-pattern',
      question: {
        en: 'How does a Circuit Breaker prevent cascading outages when a downstream microservice begins timing out?',
        bn: 'কোনো ডাউনস্ট্রিম মাইক্রোসার্ভিস টাইমআউট হতে শুরু করলে একটি সার্কিট ব্রেকার কীভাবে সিস্টেমব্যাপী ক্যাসকেডিং ব্যর্থতা প্রতিহত করে?'
      },
      options: [
        {
          en: 'It "trips open", immediately failing subsequent calls locally without sending requests to the struggling downstream service, allowing it to recover',
          bn: 'এটি ট্রিপ করে খুলে যায় এবং সমস্যার মুখে থাকা ডাউনস্ট্রিমে অনুরোধ না পাঠিয়ে স্থানীয়ভাবে তাৎক্ষণিক ত্রুটি জানিয়ে ডাউনস্ট্রিমকে সেরে ওঠার সুযোগ দেয়'
        },
        {
          en: 'It doubles the number of requests sent every second',
          bn: 'এটি প্রতি সেকেন্ডে পাঠানো অনুরোধের সংখ্যা দ্বিগুণ করে দেয়'
        },
        {
          en: 'It permanently uninstalls the downstream service',
          bn: 'এটি ডাউনস্ট্রিম সার্ভিসটিকে স্থায়ীভাবে আনইনস্টল করে দেয়'
        },
        {
          en: 'It changes the color of the application user interface',
          bn: 'এটি অ্যাপ্লিকেশন ব্যবহারকারী ইন্টারফেসের রঙ পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of an electrical circuit breaker: when the circuit is overloaded, it cuts off current to prevent a fire.',
        bn: 'বৈদ্যুতিক সার্কিট ব্রেকারের কথা ভাবুন: মাত্রাতিরিক্ত চাপ পড়লে সে বিদ্যুৎ বন্ধ করে আগুন লাগা থেকে রক্ষা করে।'
      },
      explanation: {
        en: 'Circuit breakers fail fast locally, protecting upstream thread pools from exhaustion and shielding downstream systems from overload.',
        bn: 'সার্কিট ব্রেকার সাথে সাথে অনুরোধ বাতিল করে মূল সার্ভারের থ্রেড বাঁচায় এবং ডাউনস্ট্রিমকে অতিরিক্ত চাপের হাত থেকে রক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'distributed-systems-capstone-quiz',
    title: {
      en: 'Distributed Systems Capstone Quiz',
      bn: 'বিতরণকৃত সিস্টেম ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'dsc-q1',
        kind: 'mcq',
        topic: 'capstone-protocol-mapping',
        question: {
          en: 'In a global distributed cloud system, which protocol is optimally matched for maintaining cluster node health and membership across 10000 servers?',
          bn: 'একটি বৈশ্বিক ক্লাউড সিস্টেমে ১০০০০ সার্ভার জুড়ে নোডের স্বাস্থ্য ও সদস্যপদ পর্যবেক্ষণের জন্য কোন প্রোটোকলটি সবচেয়ে উপযোগী?'
        },
        options: [
          {
            en: 'SWIM Gossip Protocol with indirect pings and suspicion timers',
            bn: 'পরোক্ষ পিং এবং সন্দেহ টাইমার সহ সুইম (SWIM) গসিপ প্রোটোকল'
          },
          {
            en: 'Full-mesh all-to-all synchronous heartbeats',
            bn: 'ফুল-মেশ অল-টু-অল সিঙ্ক্রোনাস হার্টবিট'
          },
          {
            en: 'Manual telephone calls between system engineers',
            bn: 'সিস্টেম ইঞ্জিনিয়ারদের মাঝে ম্যানুয়াল টেলিফোন কল'
          },
          {
            en: 'Running Dijkstra’s algorithm on every millisecond',
            bn: 'প্রতি মিলিসেকেন্ডে ডাইকস্ট্রার অ্যালগরিদম চালানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Which protocol bounds per-node network traffic to O(1) messages and spreads updates in O(log N) time?',
          bn: 'কোন প্রোটোকল নোডপ্রতি নেটওয়ার্ক ট্রাফিক O(1) এ সীমাবদ্ধ রাখে এবং O(log N) সময়ে তথ্য ছড়ায়?'
        },
        explanation: {
          en: 'SWIM scales linearly to tens of thousands of nodes while indirect pings prevent cascade false alarms from transient switch congestion.',
          bn: 'সুইম হাজার হাজার নোডে সফলভাবে স্কেল করে এবং এর পরোক্ষ পিং সাময়িক নেটওয়ার্ক জ্যামের কারণে মিথ্যা অ্যালার্ম রোধ করে।'
        }
      },
      {
        id: 'dsc-q2',
        kind: 'mcq',
        topic: 'capstone-split-brain-defense',
        question: {
          en: 'What architectural combination provides the strongest defense against split-brain corruption during a network partition?',
          bn: 'নেটওয়ার্ক বিভাজনের সময় স্প্লিট-ব্রেইনের হাত থেকে তথ্য বাঁচাতে কোন স্থাপত্যিক সমন্বয়টি সবচেয়ে শক্তিশালী সুরক্ষা প্রদান করে?'
        },
        options: [
          {
            en: 'Odd-node clusters (3 or 5 nodes) enforcing majority quorums combined with monotonically increasing fencing tokens on storage',
            bn: 'বিজোড় নোডের ক্লাস্টার (৩ বা ৫টি নোড) যা সংখ্যাগরিষ্ঠ কোরাম মানে এবং স্টোরেজে ধারাবাহিকভাবে বর্ধনশীল ফেন্সিং টোকেন প্রয়োগ করে'
          },
          {
            en: 'Allowing all partitioned nodes to write independently without coordination',
            bn: 'সমন্বয় ছাড়াই বিচ্ছিন্ন সমস্ত নোডকে স্বাধীনভাবে লেখার অনুমতি দেওয়া'
          },
          {
            en: 'Deleting the cluster configuration files',
            bn: 'ক্লাস্টারের কনফিগারেশন ফাইল মুছে ফেলা'
          },
          {
            en: 'Turning off database indexing completely',
            bn: 'ডেটাবেস ইনডেক্সিং পুরোপুরি বন্ধ করে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'A strict majority guarantees only 1 partition can proceed, and fencing tokens stop partitioned former leaders from writing.',
          bn: 'কঠোর সংখ্যাগরিষ্ঠতা নিশ্চিত করে মাত্র ১টি পাশ কাজ করবে এবং ফেন্সিং টোকেন সাবেক বিচ্ছিন্ন লিডারের পুরনো রাইট প্রতিহত করে।'
        },
        explanation: {
          en: 'Majority quorums prevent dual leaders from being elected, while fencing tokens protect backend storage from stale writes.',
          bn: 'সংখ্যাগরিষ্ঠ কোরাম একাধিক লিডার তৈরি হতে দেয় না এবং ফেন্সিং টোকেন ব্যাকএন্ড স্টোরেজকে সাবেক লিডারের ভুল রাইট থেকে রক্ষা করে।'
        }
      },
      {
        id: 'dsc-q3',
        kind: 'mcq',
        topic: 'saga-vs-2pc-production-decision',
        question: {
          en: 'Why do modern microservice architectures favor the Saga pattern over Two-Phase Commit (2PC) for cross-service transactions?',
          bn: 'সার্ভিসজুড়ে ট্রানজ্যাকশনের ক্ষেত্রে আধুনিক মাইক্রোসার্ভিস আর্কিটেকচার কেন টু-ফেজ কমিটের (২PC) তুলনায় সাগা প্যাটার্নকে বেশি পছন্দ করে?'
        },
        options: [
          {
            en: 'Sagas avoid holding distributed database locks across services, eliminating coordinator blocking vulnerabilities and scaling horizontally',
            bn: 'সাগা সার্ভিসজুড়ে ডিস্ট্রিবিউটেড লক ধরে রাখা এড়ায়, কোঅর্ডিনেটরের ব্লকিং ঝুঁকি দূর করে এবং সহজেই স্কেল করে'
          },
          {
            en: '2PC can only be programmed in assembly language',
            bn: '২PC কেবল অ্যাসেম্বলি ভাষায় প্রোগ্রাম করা সম্ভব'
          },
          {
            en: 'Sagas completely eliminate the possibility of business errors',
            bn: 'সাগা ব্যবসায়িক ভুলের সম্ভাবনা সম্পূর্ণ দূর করে'
          },
          {
            en: '2PC requires 10 gigabytes of network bandwidth per second',
            bn: '২PC এর প্রতি সেকেন্ডে ১০ গিগাবাইট নেটওয়ার্ক ব্যান্ডউইথ প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Distributed locks held across separate network services create severe latency bottlenecks and crash-blocking vulnerabilities.',
          bn: 'ভিন্ন ভিন্ন সার্ভিসের মাঝে লক ধরে রাখলে সিস্টেম ধীরগতির হয়ে পড়ে এবং কোনো একটি ক্র্যাশ করলে পুরো প্রক্রিয়া আটকে যায়।'
        },
        explanation: {
          en: 'Sagas commit local transactions immediately and rely on compensating actions, keeping services decoupled and resilient.',
          bn: 'সাগা সাথে সাথে স্থানীয় ট্রানজ্যাকশন কমিট করে ক্ষতিপূরণমূলক পদক্ষেপের ওপর নির্ভর করে, যা মাইক্রোসার্ভিসকে স্বাধীন ও সচল রাখে।'
        }
      },
      {
        id: 'dsc-q4',
        kind: 'mcq',
        topic: 'jitter-exponential-backoff',
        question: {
          en: 'Why is "Full Jitter" added to exponential backoff when clients retry failed requests to a recovering database?',
          bn: 'একটি পুনরুদ্ধার হওয়া ডেটাবেসে ক্লায়েন্টরা যখন ব্যর্থ অনুরোধগুলো পুনরায় পাঠায়, তখন এক্সপোনেনশিয়াল ব্যাকঅফের সাথে কেন "জিটার" (Jitter) যুক্ত করা হয়?'
        },
        options: [
          {
            en: 'It randomizes retry timestamps across clients, preventing periodic synchronized waves of requests ("thundering herds") from crashing the database again',
            bn: 'এটি ক্লায়েন্টদের পুনরায় চেষ্টার সময়কে এলোমেলো করে দেয়, ফলে একসাথে বিপুল সংখ্যক অনুরোধের ঢেউ ("থান্ডারিং হার্ড") ডেটাবেসকে পুনরায় ক্র্যাশ করতে পারে না'
          },
          {
            en: 'To make client network cables vibrate for diagnostics',
            bn: 'ডায়াগনস্টিকের জন্য ক্লায়েন্ট নেটওয়ার্ক তারকে কম্পিত করতে'
          },
          {
            en: 'To automatically encrypt HTTP request headers',
            bn: 'স্বয়ংক্রিয়ভাবে এইচটিটিপি রিকোয়েস্ট হেডার এনক্রিপ্ট করার জন্য'
          },
          {
            en: 'Because computer clocks cannot count integers without jitter',
            bn: 'কারণ কম্পিউটারের ঘড়ি জিটার ছাড়া পূর্ণসংখ্যা গণনা করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'If 10000 clients all retry at exactly 1.0s, 2.0s, and 4.0s, what happens when all their requests hit the server at the exact same millisecond?',
          bn: '১০০০০ ক্লায়েন্ট যদি ঠিক ১.০ সেকেন্ড বা ২.০ সেকেন্ড পর একসাথে রিকোয়েস্ট পাঠায়, তবে সার্ভারের কী দশা হবে?'
        },
        explanation: {
          en: 'Randomizing retry intervals with jitter smooths out traffic spikes, turning concentrated retry bursts into a manageable uniform stream.',
          bn: 'জিটারের মাধ্যমে এলোমেলো বিরতি তৈরি করলে ট্রাফিকের আকস্মিক ঢেউ মসৃণ হয়ে একটি সহনশীল সাধারণ প্রবাহে রূপ নেয়।'
        }
      }
    ]
  }
};
