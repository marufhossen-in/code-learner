import type { Lesson } from '../../../lib/types';

export const durableDuetLesson: Lesson = {
  slug: 'the-durable-duet',
  tech: 'system-design',
  title: {
    en: 'Data Replication & Consensus — Multi-Leader, Paxos, Raft, and the CAP Theorem',
    bn: 'ডেটা রেপ্লিকেশন ও কনসেনসাস: মাল্টি-লিডার, রাফট ও CAP থিওরেম'
  },
  summary: {
    en: 'Distributed storage systems rely on replication to survive hardware failures and deliver low-latency global reads. In this lesson, you will master the fundamental replication models: Single-Leader, Multi-Leader (Active-Active), and Leaderless (Dynamo-style) architectures. Analyze the PACELC theorem and CAP theorem tradeoffs under network partitions. Dissect consensus algorithms including Raft and Paxos, quorum arithmetic (W + R > N), and conflict resolution techniques like Last-Write-Wins (LWW) and Conflict-free Replicated Data Types (CRDTs). Implement an executable Quorum Consensus validator in TypeScript.',
    bn: 'ডিস্ট্রিবিউটেড স্টোরেজ সিস্টেম হার্ডওয়্যারের ব্যর্থতা সামলাতে এবং বিশ্বজুড়ে ব্যবহারকারীদের দ্রুত ডেটা পৌঁছে দিতে রেপ্লিকেশনের ওপর নির্ভর করে। এই পাঠে আপনি প্রধান রেপ্লিকেশন মডেলগুলো পুঙ্খানুপুঙ্খভাবে শিখবেন: সিঙ্গেল-লিডার, মাল্টি-লিডার (অ্যাক্টিভ-অ্যাক্টিভ) এবং লিডারলেস (ডায়নামো-স্টাইল) আর্কিটেকচার। নেটওয়ার্ক বিভাজনের মুখে PACELC এবং CAP থিওরেমের আপসগুলো বিশ্লেষণ করবেন। কনসেনসাস অ্যালগরিদম যেমন Raft ও Paxos, কোরাম পাটিগণিত (W + R > N) এবং লাস্ট-রাইট-উইনস (LWW) ও CRDT-এর মতো দ্বন্দ্ব নিরসন কৌশল শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর কোরাম কনসেনসাস সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'replication-goals-and-spectrum',
      text: {
        en: 'The Replication Spectrum: Single-Leader vs Multi-Leader vs Leaderless',
        bn: 'রেপ্লিকেশনের ধরন: সিঙ্গেল-লিডার বনাম মাল্টি-লিডার বনাম লিডারলেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design mission-critical data stores, keeping only 1 physical copy of your database guarantees catastrophic data loss when hardware crashes.',
        bn: 'গুরুত্বপূর্ণ ডেটাবেস সিস্টেম নকশা করার সময় মাত্র ১টি ফিজিক্যাল কপি রাখা মারাত্মক ঝুঁকি তৈরি করে, কারণ যেকোনো হার্ডওয়্যার ত্রুটিতে সমস্ত ডেটা চিরতরে হারিয়ে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Data replication accomplishes three fundamental goals. First, High Availability keeps the platform operational if a database server fails. Second, Latency Reduction places replicas near users across regions to deliver sub-10ms reads. Third, Read Scalability multiplies read throughput across dozens of machines. Modern architectures select between three core topologies: Single-Leader (1 master node accepts writes), Multi-Leader (regional nodes accept writes locally), and Leaderless (clients write to a quorum of peer nodes directly).',
        bn: 'ডেটা রেপ্লিকেশন মূলত ৩টি মৌলিক লক্ষ্য পূরণ করে। প্রথমত, উচ্চ প্রাপ্যতা: কোনো সার্ভার নষ্ট হলেও সিস্টেম সচল থাকে। দ্বিতীয়ত, নেটওয়ার্ক বিলম্ব কমানো: ব্যবহারকারীর কাছাকাছি রেপ্লিকা রেখে ১০ মিলিসেকেন্ডের নিচে রিড গতি দেওয়া। তৃতীয়ত, রিড স্কেলিং: ডজন ডজন রেপ্লিকা নোডের মধ্যে পড়ার চাপ ভাগ করে নেওয়া। আধুনিক ডিস্ট্রিবিউটেড সিস্টেমে প্রধান ৩টি রেপ্লিকেশন আর্কিটেকচার ব্যবহৃত হয়: সিঙ্গেল-লিডার (১টি মাস্টার সার্ভার সব রাইট নেয়), মাল্টি-লিডার (প্রতিটি ডেটা সেন্টারের লিডার স্থানীয়ভাবে রাইট নেয়), এবং লিডারলেস (ক্লায়েন্ট সরাসরি একাধিক নোডের কোরামে ডেটা লিখে)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cap-theorem',
          def: {
            en: 'A foundational theorem proving that in the presence of a Network Partition (P), a distributed system must choose between Consistency (C) and Availability (A).',
            bn: 'একটি মৌলিক নীতি যা প্রমাণ করে যে নেটওয়ার্ক বিভাজনের (P) সময় একটি ডিস্ট্রিবিউটেড সিস্টেমকে কনসিস্টেন্সি (C) অথবা অ্যাভেইলেবিলিটি (A)-এর যেকোনো একটি বেছে নিতে হয়।'
          }
        },
        {
          term: 'quorum-consensus',
          def: {
            en: 'A mathematical guarantee where write quorum (W) plus read quorum (R) exceeds total replicas (N), guaranteeing that read and write sets overlap on at least 1 node.',
            bn: 'একটি গাণিতিক নিশ্চয়তা যেখানে রাইট কোরাম (W) ও রিড কোরামের (R) যোগফল মোট রেপ্লিকার (N) চেয়ে বেশি হলে কমপক্ষে ১টি নোডে সর্বশেষ আপডেট পাওয়া নিশ্চিত হয়।'
          }
        },
        {
          term: 'raft-consensus',
          def: {
            en: 'An understandable leader-based consensus algorithm that guarantees linearizable, deterministic log replication across odd-numbered server clusters.',
            bn: 'একটি সহজবোধ্য লিডার-ভিত্তিক কনসেনসাস অ্যালগরিদম যা বিজোড় সংখ্যক সার্ভার ক্লাস্টারের মধ্যে ডেটা লগের নির্ভুল ও ধারাবাহিক রেপ্লিকেশন নিশ্চিত করে।'
          }
        },
        {
          term: 'crdt-data-types',
          def: {
            en: 'Conflict-free Replicated Data Types: concurrent data structures that can be updated independently across nodes and automatically merged without locks.',
            bn: 'এমন কিছু ডেটা স্ট্রাকচার যা একাধিক সার্ভারে সমান্তরালে আপডেট করা যায় এবং পরবর্তীতে কোনো লক ছাড়াই নিখুঁতভাবে স্বয়ংক্রিয়ভাবে একত্রিত করা সম্ভব হয়।'
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
      id: 'replication-topologies-table',
      text: {
        en: 'Comparative Architecture: Replication Topologies and Tradeoffs',
        bn: 'রেপ্লিকেশন টপোলজি ও আপসের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'System architects evaluate replication topologies by comparing write availability, network latency, and the operational complexity of resolving concurrent write conflicts.',
        bn: 'রাইট প্রাপ্যতা, নেটওয়ার্ক বিলম্ব এবং সমান্তরাল রাইট দ্বন্দ্ব মেটানোর জটিলতা তুলনা করে আর্কিটেক্টরা সঠিক রেপ্লিকেশন মডেল নির্ধারণ করেন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Replication Topology', bn: 'রেপ্লিকেশন টপোলজি' },
        { en: 'Write Routing Flow', bn: 'রাইট রাউটিং প্রবাহ' },
        { en: 'Read Routing Flow', bn: 'রিড রাউটিং প্রবাহ' },
        { en: 'Conflict Risk & Failure Modes', bn: 'দ্বন্দ্বের ঝুঁকি ও দুর্বলতা' }
      ],
      rows: [
        [
          { en: 'Single-Leader', bn: 'সিঙ্গেল-লিডার' },
          { en: 'All writes route strictly to 1 designated Leader node', bn: 'লেখার সমস্ত রিকোয়েস্ট কেবল ১টি নির্দিষ্ট লিডার নোডে যায়' },
          { en: 'Reads load-balance across multiple follower read replicas', bn: 'পড়ার রিকোয়েস্ট একাধিক ফলোয়ার রেপ্লিকার মধ্যে ভাগ হয়' },
          { en: 'Zero write conflicts; Leader is a single point of failure for writes during failover', bn: 'কোনো রাইট দ্বন্দ্ব নেই; তবে লিডার ক্র্যাশ করলে ফেইলওভার চলাকালীন রাইট বন্ধ থাকে' }
        ],
        [
          { en: 'Multi-Leader (Active-Active)', bn: 'মাল্টি-লিডার' },
          { en: 'Writes route to nearest local regional Leader node in each datacenter', bn: 'লেখার রিকোয়েস্ট প্রতিটি ডেটা সেন্টারের স্থানীয় লিডারে যায়' },
          { en: 'Reads served with ultra-low latency from local regional replicas', bn: 'পড়ার রিকোয়েস্ট স্থানীয় রেপ্লিকা থেকে অতি দ্রুত সাব-মিলিসেকেন্ডে আসে' },
          { en: 'High write availability; concurrent conflicting writes in 2 regions require resolution', bn: 'উচ্চ রাইট প্রাপ্যতা; তবে একই সাথে ২টি অঞ্চলে ভিন্ন ডেটা লিখলে দ্বন্দ্ব নিরসন লাগে' }
        ],
        [
          { en: 'Leaderless (Dynamo-Style)', bn: 'লিডারলেস' },
          { en: 'Client broadcasts writes to W peer replicas concurrently without a leader', bn: 'ক্লায়েন্ট কোনো লিডার ছাড়াই সরাসরি W সংখ্যক নোডে সমান্তরালে লেখে' },
          { en: 'Client queries R peer replicas in parallel and resolves newest timestamp', bn: 'ক্লায়েন্ট একসাথে R সংখ্যক নোড থেকে পড়ে সবচেয়ে তাজা ডেটা বেছে নেয়' },
          { en: 'Extreme write resilience; requires strict quorum arithmetic (W + R > N) to avoid stale reads', bn: 'চরম সহনশীলতা; তবে বাসি ডেটা এড়াতে কঠোর কোরাম সূত্র (W + R > N) মানা বাধ্যতামূলক' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-quorum-consensus-code',
      text: {
        en: 'Executable Quorum Consensus Validation Simulation',
        bn: 'কোরাম কনসেনসাস সিমুলেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates quorum consensus properties for a 5-node replica cluster under Strong Quorum configuration (W=3, R=3) versus Weak Quorum configuration (W=2, R=2).',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৫টি নোডের একটি রেপ্লিকা ক্লাস্টারে শক্তিশালী কোরাম (W=৩, R=৩) বনাম দুর্বল কোরামের (W=২, R=২) গাণিতিক নিশ্চয়তা হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Distributed Quorum Consensus Arithmetic

interface QuorumValidation {
  totalReplicas: number;
  writeQuorum: number;
  readQuorum: number;
  quorumSum: number;
  guaranteesLatestRead: boolean;
  overlappingNodeCount: number;
}

function evaluateQuorumConfiguration(
  totalNodes: number,
  wCount: number,
  rCount: number
): QuorumValidation {
  const quorumSum = wCount + rCount;
  // Pigeonhole Principle: If W + R > N, at least 1 node in the read set
  // is guaranteed to contain the most recent write.
  const guaranteesLatestRead = quorumSum > totalNodes;
  const overlappingNodeCount = guaranteesLatestRead
    ? quorumSum - totalNodes
    : 0;

  return {
    totalReplicas: totalNodes,
    writeQuorum: wCount,
    readQuorum: rCount,
    quorumSum,
    guaranteesLatestRead,
    overlappingNodeCount
  };
}

const strongCluster = evaluateQuorumConfiguration(5, 3, 3);
const weakCluster = evaluateQuorumConfiguration(5, 2, 2);

console.log('Cluster total replicas (N):', strongCluster.totalReplicas);
console.log('Strong Quorum (W=3, R=3) sum:', strongCluster.quorumSum);
console.log('Strong Quorum guarantees latest read:', strongCluster.guaranteesLatestRead);
console.log('Strong Quorum overlap node count:', strongCluster.overlappingNodeCount);
console.log('Weak Quorum (W=2, R=2) sum:', weakCluster.quorumSum);
console.log('Weak Quorum guarantees latest read:', weakCluster.guaranteesLatestRead);

// prints: Cluster total replicas (N): 5
// prints: Strong Quorum (W=3, R=3) sum: 6
// prints: Strong Quorum guarantees latest read: true
// prints: Strong Quorum overlap node count: 1
// prints: Weak Quorum (W=2, R=2) sum: 4
// prints: Weak Quorum guarantees latest read: false`
    },
    {
      type: 'heading',
      id: 'pacelc-theorem-and-conflict-resolution',
      text: {
        en: 'The PACELC Theorem: Consistency vs Latency in Normal States',
        bn: 'PACELC থিওরেম: স্বাভাবিক সময়ে কনসিস্টেন্সি বনাম লেটেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The famous CAP theorem describes system tradeoffs during a network partition (P). Computer scientist Daniel Abadi formulated the PACELC theorem to explain tradeoffs during normal operation: If Partition (P), trade Availability (A) or Consistency (C); Else (E), trade Latency (L) or Consistency (C). Even without network faults, strict consistency requires waiting for cross-node acknowledgments, increasing write latency. In multi-master systems, concurrent conflicts are resolved using Last-Write-Wins or CRDTs that merge changes deterministically.',
        bn: 'বিখ্যাত CAP থিওরেম কেবল নেটওয়ার্ক বিভাজনের (P) সময় সিস্টেমের আপস ব্যাখ্যা করে। ড্যানিয়েল আবাদির PACELC থিওরেম স্বাভাবিক সময়ের আপসও স্পষ্টভাবে তুলে ধরে: যদি নেটওয়ার্ক বিভাজন (P) ঘটে, তবে প্রাপ্যতা (A) অথবা কনসিস্টেন্সি (C)-এর একটি বেছে নিন; নতুবা স্বাভাবিক অবস্থায় (E), লেটেন্সি (L) অথবা কনসিস্টেন্সি (C)-এর মধ্যে আপস করুন। কোনো নেটওয়ার্ক সমস্যা না থাকলেও শতভাগ কনসিস্টেন্সি চাইলে অন্য সার্ভারের উত্তরের জন্য অপেক্ষা করতে হয়, যার ফলে লেখার বিলম্ব বাড়ে। মাল্টি-মাস্টার সিস্টেমে সমান্তরাল দ্বন্দ্ব মেটাতে লাস্ট-রাইট-উইনস অথবা ডেটা না হারিয়ে পরিবর্তনগুলো মেলাতে CRDT ব্যবহৃত হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Replication guarantees survival: Replicating state across independent servers prevents catastrophic data loss during hardware crashes.',
          bn: 'রেপ্লিকেশন স্থায়িত্ব দেয়: একাধিক স্বাধীন সার্ভারে ডেটা রাখলে হার্ডওয়্যার নষ্ট হলেও কোনো তথ্য চিরতরে হারিয়ে যায় না।'
        },
        {
          en: 'Quorums enforce consistency: Ensure write quorum plus read quorum exceeds total nodes (W + R > N) to eliminate stale reads.',
          bn: 'কোরাম নির্ভুলতা নিশ্চিত করে: বাসি ডেটা এড়াতে নিশ্চিত করুন যেন রাইট ও রিড কোরামের যোগফল মোট নোডের চেয়ে বেশি (W + R > N) হয়।'
        },
        {
          en: 'PACELC governs normal latency: You cannot achieve zero-latency writes while simultaneously demanding synchronous cross-node consistency.',
          bn: 'PACELC স্বাভাবিক সময়ের গতি নিয়ন্ত্রণ করে: একই সাথে তাৎক্ষণিক রাইট গতি এবং শতভাগ নিখুঁত কনসিস্টেন্সি দাবি করা বাস্তবসম্মত নয়।'
        },
        {
          en: 'Favor CRDTs over Last-Write-Wins: Deterministic merge functions prevent the silent data overwrites caused by server clock drift.',
          bn: 'LWW-এর চেয়ে CRDT বেছে নিন: সার্ভারের ঘড়ির সামান্য ব্যবধানে ডেটা হারিয়ে যাওয়া প্রতিরোধে মার্জ ফাংশন ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dur-ex1',
      kind: 'mcq',
      topic: 'quorum-arithmetic-pigeonhole-guarantee',
      question: {
        en: 'In a 5-node replica cluster (N=5), why does setting Write Quorum W=3 and Read Quorum R=3 mathematically guarantee that every read sees the latest committed write?',
        bn: '৫টি নোডের একটি রেপ্লিকা ক্লাস্টারে (N=৫) রাইট কোরাম W=৩ এবং রিড কোরাম R=৩ নির্ধারণ করলে কেন গাণিতিকভাবে নিশ্চিত হয় যে প্রতিটি রিড সর্বশেষ ডেটা দেখতে পাবে?'
      },
      options: [
        {
          en: 'By the Pigeonhole Principle, W + R = 6, which is strictly greater than N (5); therefore, the read set and write set must overlap on at least 1 node containing the latest timestamp',
          bn: 'পিজিয়নহোল নীতি অনুযায়ী W + R = ৬, যা মোট নোড N (৫)-এর চেয়ে বেশি; সুতরাং রিড সেট এবং রাইট সেটের মধ্যে কমপক্ষে ১টি নোড অবশ্যই সাধারণ থাকবে যার কাছে সর্বশেষ ডেটা বিদ্যমান'
        },
        {
          en: 'Because 5 is a prime number, which automatically fixes all database errors',
          bn: 'কারণ ৫ একটি মৌলিক সংখ্যা, যা নিজে থেকেই সব ডেটাবেস এরর ঠিক করে ফেলে'
        },
        {
          en: 'Quorum math requires servers to be powered by solar energy',
          bn: 'কোরাম গণিতে সার্ভারকে সৌরশক্তিতে চালাতে হয়'
        },
        {
          en: 'W=3 was mandated by international banking treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক ব্যাংক আইনে W=৩ বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Overlap = W + R - N = 3 + 3 - 5 = 1 overlapping node guaranteed to have the newest update.',
        bn: 'ওভারল্যাপ = ৩ + ৩ - ৫ = ১টি নোড নিশ্চিতভাবেই সর্বশেষ আপডেট ধারণ করবে।'
      },
      explanation: {
        en: 'When W + R > N, the read quorum intersects the write quorum, guaranteeing linearizable visibility of committed transactions.',
        bn: 'যখন W + R > N হয়, তখন রিড সেট ও রাইট সেটের সংযোগস্থলে সর্বদা অন্তত একটি আপডেটেড নোড থাকে।'
      }
    },
    {
      id: 'dur-ex2',
      kind: 'mcq',
      topic: 'pacelc-else-latency-tradeoff',
      question: {
        en: 'Under the PACELC theorem, what tradeoff must a distributed system make when network partitions are NOT occurring (the "Else" clause)?',
        bn: 'PACELC থিওরেম অনুসারে যখন নেটওয়ার্কে কোনো বিভাজন থাকে না (স্বাভাবিক অবস্থা বা "Else"), তখন একটি ডিস্ট্রিবিউটেড সিস্টেমকে কোন দুটি বিষয়ের মধ্যে আপস করতে হয়?'
      },
      options: [
        {
          en: 'Tradeoff between Latency (L) and Consistency (C): returning fast writes requires asynchronous replication (accepting stale reads), while strict consistency requires waiting for cross-node network ACKs',
          bn: 'লেটেন্সি (L) এবং কনসিস্টেন্সি (C)-এর মধ্যে আপস: দ্রুত লেখার গতি চাইলে অ্যাসিঙ্ক্রোনাস রেপ্লিকেশন (বাসি পড়ার ঝুঁকি) মানতে হয়, আর শতভাগ কনসিস্টেন্সি চাইলে নেটওয়ার্ক স্বীকৃতির জন্য অপেক্ষা করতে হয়'
        },
        {
          en: 'Tradeoff between server room lighting and electricity voltage',
          bn: 'সার্ভার রুমের লাইটিং এবং বিদ্যুতের ভোল্টেজের মধ্যে আপস'
        },
        {
          en: 'Because the Else clause formats all client computers on every write',
          bn: 'কারণ এলস ক্লজ প্রতিটি রাইটে ক্লায়েন্টের কম্পিউটার ফরম্যাট করে'
        },
        {
          en: 'Tradeoff between computer screen resolution and font size',
          bn: 'কম্পিউটার স্ক্রিনের রেজোলিউশন ও ফন্টের আকারের মধ্যে আপস'
        }
      ],
      answer: 0,
      hint: {
        en: 'In normal times (Else): fast writes (low Latency) vs waiting for replicas (high Consistency).',
        bn: 'স্বাভাবিক সময়ে (Else): দ্রুত লেখার গতি (কম লেটেন্সি) বনাম অন্য নোডের উত্তরের জন্য অপেক্ষা (উচ্চ কনসিস্টেন্সি)।'
      },
      explanation: {
        en: 'PACELC proves that even in healthy network conditions, latency and consistency are physically in tension due to network travel times.',
        bn: 'PACELC প্রমাণ করে যে নেটওয়ার্ক ভালো থাকলেও তথ্যের আদান-প্রদানের সময়ের কারণে গতি ও নিখুঁততার মধ্যে চিরন্তন দ্বন্দ্ব থাকে।'
      }
    },
    {
      id: 'dur-ex3',
      kind: 'mcq',
      topic: 'last-write-wins-clock-drift-hazard',
      question: {
        en: 'Why is "Last-Write-Wins" (LWW) conflict resolution considered dangerous in distributed multi-leader databases like Cassandra?',
        bn: 'ক্যাসান্ড্রার মতো মাল্টি-লিডার ডেটাবেসে "লাস্ট-রাইট-উইনস" (LWW) দ্বন্দ্ব নিরসন কৌশলকে কেন ঝুঁকিপূর্ণ মনে করা হয়?'
      },
      options: [
        {
          en: 'Physical hardware clocks on different servers drift (NTP clock skew); a write that occurred earlier in real-world time may silently overwrite a later write if its server clock was skewed ahead',
          bn: 'ভিন্ন ভিন্ন সার্ভারের ফিজিক্যাল ঘড়ির মধ্যে সময়ের সামান্য তারতম্য (ক্লক স্কিউ) থাকে; ফলে বাস্তবে আগে ঘটা কোনো তথ্য এগিয়ে থাকা ভুল ঘড়ির কারণে পরের তথ্যকে স্থায়ীভাবে মুছে দিতে পারে'
        },
        {
          en: 'LWW permanently damages computer cooling fans',
          bn: 'LWW কম্পিউটারের কুলিং ফ্যান নষ্ট করে দেয়'
        },
        {
          en: 'Because LWW was banned by international software agreements in 2022',
          bn: 'কারণ ২০২২ সালে আন্তর্জাতিক সফটওয়্যার চুক্তিতে LWW নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'LWW forces all text to be stored in hexadecimal numbers',
          bn: 'LWW সমস্ত লেখাকে হেক্সাডেসিমাল সংখ্যায় রাখতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Server clocks never agree 100%. A 50-millisecond clock drift can silently erase valid data.',
        bn: 'সার্ভারের ঘড়ি কখনোই ১০০% নিখুঁত থাকে না; সামান্য ৫০ মিলিসেকেন্ডের ক্লক ড্রিফটে মূল্যবান ডেটা মুছে যেতে পারে।'
      },
      explanation: {
        en: 'LWW depends on physical clocks that drift, causing non-deterministic data loss; CRDTs and vector clocks provide causal ordering without relying on wall-clock time.',
        bn: 'LWW ফিজিক্যাল ঘড়ির ওপর নির্ভর করে যা ভুল তথ্য মুছে দিতে পারে; ভেক্টর ক্লক বা CRDT ঘড়ির ওপর নির্ভর না করে নিরাপদ সমাধান দেয়।'
      }
    },
    {
      id: 'dur-ex4',
      kind: 'mcq',
      topic: 'raft-leader-election-majority-rule',
      question: {
        en: 'In the Raft consensus algorithm, how does a candidate node become the recognized cluster Leader during an election term?',
        bn: 'রাফট (Raft) কনসেনসাস অ্যালগরিদমে নির্বাচনের সময় একটি প্রার্থী নোড কীভাবে ক্লাস্টারের স্বীকৃত লিডারে পরিণত হয়?'
      },
      options: [
        {
          en: 'The candidate must receive affirmative votes from a strict majority of nodes in the cluster (e.g. at least 3 votes in a 5-node cluster) during that election term',
          bn: 'প্রার্থী নোডটিকে ওই নির্বাচনী মেয়াদের জন্য ক্লাস্টারের সংখ্যাগরিষ্ঠ নোডের সমর্থন বা ভোট (যেমন ৫টি নোডের ক্লাস্টারে কমপক্ষে ৩টি ভোট) অর্জন করতে হয়'
        },
        {
          en: 'The node with the highest internet bandwidth speed is automatically chosen',
          bn: 'যে নোডের ইন্টারনেটের গতি সবচেয়ে বেশি সে নিজে থেকেই লিডার হয়ে যায়'
        },
        {
          en: 'Because candidate nodes format rival servers to win elections',
          bn: 'কারণ প্রার্থী নোড নির্বাচনে জিততে প্রতিদ্বন্দ্বী সার্ভার ফরম্যাট করে'
        },
        {
          en: 'Raft elections are decided by the server operating system manufacturer',
          bn: 'সার্ভারের অপারেটিং সিস্টেম প্রস্তুতকারক কোম্পানি রাফট নির্বাচনের রায় দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Strict majority = floor(N / 2) + 1. In a 5-node cluster, at least 3 votes are required.',
        bn: 'সংখ্যাগরিষ্ঠ ভোট = অর্ধেকের বেশি; ৫টি নোডের মধ্যে অন্তত ৩টি ভোট পেতেই হবে।'
      },
      explanation: {
        en: 'Strict majority voting guarantees that at most one candidate can win leadership in any given term, completely preventing split-brain dual leaders.',
        bn: 'সংখ্যাগরিষ্ঠ ভোটের নিয়ম নিশ্চিত করে যে যেকোনো মেয়াদে একটিমাত্র লিডার নির্বাচিত হতে পারে, যা স্প্লিট-ব্রেইন সমস্যা পুরোপুরি দূর করে।'
      }
    }
  ],
  quiz: {
    id: 'durable-duet-quiz',
    title: {
      en: 'Data Replication, Consensus Algorithms, and Quorums Quiz',
      bn: 'ডেটা রেপ্লিকেশন, কনসেনসাস অ্যালগরিদম ও কোরাম কুইজ'
    },
    questions: [
      {
        id: 'ddq-q1',
        kind: 'mcq',
        topic: 'asynchronous-replication-failover-loss',
        question: {
          en: 'What dangerous edge-case occurs when a primary database crashes while operating under Asynchronous Replication with a read replica?',
          bn: 'অ্যাসিঙ্ক্রোনাস রেপ্লিকেশনের অধীনে চলা কোনো প্রাইমারি ডেটাবেস হঠাৎ ক্র্যাশ করলে কোন বিপজ্জনক সমস্যা দেখা দেয়?'
        },
        options: [
          {
            en: 'Unreplicated In-flight Transactions: writes that were committed on the primary but not yet shipped over the network to the replica will be permanently lost when the replica is promoted to new leader',
            bn: 'অপ্রেরিত লেনদেন হারানো: যে রাইটগুলো মূল প্রাইমারিতে লেখা সম্পন্ন হলেও নেটওয়ার্ক দিয়ে রেপ্লিকায় পৌঁছায়নি, রেপ্লিকাকে নতুন লিডার বানানোর সাথে সাথে সেই ডেটা চিরতরে হারিয়ে যায়'
          },
          {
            en: 'The replica hard drive catches fire due to sudden electrical surge',
            bn: 'হঠাৎ বিদ্যুৎ বাড়ার কারণে রেপ্লিকার হার্ড ড্রাইভে আগুন ধরে যায়'
          },
          {
            en: 'Because asynchronous failovers format all client smartphones',
            bn: 'কারণ এতে ব্যবহারকারীদের স্মার্টফোন ফরম্যাট হয়ে যায়'
          },
          {
            en: 'The replica permanently translates all numbers into Romanian words',
            bn: 'রেপ্লিকা সব সংখ্যাকে রোমানিয়ান ভাষায় রূপান্তর করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Async means the primary acknowledges the client before the replica confirms. If primary dies in that gap, those writes vanish.',
          bn: 'অ্যাসিঙ্ক্রোনাসে রেপ্লিকায় যাওয়ার আগেই ক্লায়েন্টকে সফল বলা হয়; মাঝপথে প্রাইমারি নষ্ট হলে ওই ডেটা আর মেলে না।'
        },
        explanation: {
          en: 'Asynchronous replication prioritizes write speed over durability; surviving replicas may miss the most recent transactions upon leader failover.',
          bn: 'অ্যাসিঙ্ক্রোনাস রেপ্লিকেশন দ্রুত গতির জন্য স্থায়িত্বে সামান্য আপস করে; ফলে আকস্মিক ক্র্যাশে শেষ মুহূর্তের ডেটা হারানোর ঝুঁকি থাকে।'
        }
      },
      {
        id: 'ddq-q2',
        kind: 'mcq',
        topic: 'read-repair-anti-entropy',
        question: {
          en: 'In leaderless Dynamo-style distributed datastores (such as Cassandra), what is "Read Repair"?',
          bn: 'ক্যাসান্ড্রার মতো লিডারলেস ডিস্ট্রিবিউটেড ডেটাবেসে "রিড রিপেয়ার" (Read Repair) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'When a client reads from multiple replicas and detects version discrepancies, it returns the newest version to the caller and asynchronously writes the latest data back to the out-of-date replicas',
            bn: 'যখন কোনো ক্লায়েন্ট একাধিক রেপ্লিকা থেকে ডেটা পড়ে তাদের মধ্যে অমিল দেখতে পায়, তখন সে ক্লায়েন্টকে তাজা ডেটা ফেরত দেয় এবং বাসি রেপ্লিকাগুলোতে ব্যাকগ্রাউন্ডে তাজা ডেটা লিখে আপডেট করে দেয়'
          },
          {
            en: 'Read repair physically repairs damaged sectors on solid-state drives',
            bn: 'রিড রিপেয়ার হার্ড ড্রাইভের নষ্ট সেক্টর হার্ডওয়্যার দিয়ে ঠিক করে'
          },
          {
            en: 'Because read repair formats all database tables every Sunday night',
            bn: 'কারণ এটি প্রতি রবিবার রাতে সব টেবিল ফরম্যাট করে ফেলে'
          },
          {
            en: 'It disconnects the internet connection whenever an error occurs',
            bn: 'কোনো এরর ঘটলেই এটি ইন্টারনেট সংযোগ বিচ্ছিন্ন করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reading detects an out-of-date replica -> writes the newest value back to fix the lagging node.',
          bn: 'পড়ার সময় বাসি রেপ্লিকা ধরা পড়লে সাথে সাথে সেখানে নতুন মান লিখে তা ঠিক করা হয়।'
        },
        explanation: {
          en: 'Read Repair continuously heals drifting replicas opportunistically during active read traffic without requiring full cluster background scans.',
          bn: 'রিড রিপেয়ার প্রতিদিনের সাধারণ ট্র্যাফিকের সুযোগ নিয়ে বাসি সার্ভারগুলোকে নিজে থেকেই সুস্থ ও আপডেটেড করে তোলে।'
        }
      },
      {
        id: 'ddq-q3',
        kind: 'mcq',
        topic: 'cap-theorem-network-partition-reality',
        question: {
          en: 'Why is it technically impossible for a distributed system to choose "CA" (Consistency and Availability) simultaneously according to the modern interpretation of the CAP theorem?',
          bn: 'আধুনিক CAP থিওরেমের ব্যাখ্যা অনুসারে একটি ডিস্ট্রিবিউটেড সিস্টেমের পক্ষে কেন একই সাথে "CA" (কনসিস্টেন্সি এবং অ্যাভেইলেবিলিটি) নির্বাচন করা অসম্ভব?'
        },
        options: [
          {
            en: 'Network partitions (P) are an unavoidable physical reality of distributed infrastructure (cables get cut, routers fail); when a partition occurs, the system is strictly forced to choose between C or A',
            bn: 'ডিস্ট্রিবিউটেড অবকাঠামোতে নেটওয়ার্ক বিভাজন (P) একটি অনিবার্য ভৌত বাস্তবতা (যেমন তার কেটে যাওয়া, রাউটার নষ্ট হওয়া); ফলে বিভাজন ঘটলে সিস্টেম বাধ্য হয়ে কেবল C অথবা A-এর একটি বেছে নিতে পারে'
          },
          {
            en: 'Because CA systems are strictly prohibited by international law in 2024',
            bn: 'কারণ ২০২৪ সালে আন্তর্জাতিক আইনে CA সিস্টেম নিষিদ্ধ করা হয়েছিল'
          },
          {
            en: 'CA systems require computer processors to run at absolute zero temperature',
            bn: 'CA সিস্টেম চালাতে প্রসেসরকে পরম শূন্য তাপমাত্রায় রাখতে হয়'
          },
          {
            en: 'Network routers refuse to transmit packets from CA database systems',
            bn: 'রাউটার CA ডেটাবেসের কোনো প্যাকেট ইন্টারনেটে পাঠাতে রাজি হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'You cannot "choose not to have network partitions". You can only choose how to behave when one happens.',
          bn: 'নেটওয়ার্ক সমস্যা হবেই; সমস্যা ঘটলে আপনি কি সিস্টেম বন্ধ রাখবেন নাকি ভুল ডেটা দেখাবেন, সেটাই মূল পছন্দ।'
        },
        explanation: {
          en: 'Partitions are inevitable real-world faults; systems must handle partitions either by failing requests (CP) or serving potentially stale data (AP).',
          bn: 'নেটওয়ার্ক ত্রুটি এড়ানো অসম্ভব; তাই হয় অপারেশনে ব্যর্থতা মেনে নিতে হয় (CP) নয়তো সাময়িক বাসি ডেটা সরবরাহ করতে হয় (AP)।'
        }
      },
      {
        id: 'ddq-q4',
        kind: 'mcq',
        topic: 'crdt-concurrent-counters',
        question: {
          en: 'How does a Distributed PN-Counter (Positive-Negative Counter CRDT) maintain accurate global counts across 3 disconnected regional data centers without distributed locks?',
          bn: 'একটি ডিস্ট্রিবিউটেড PN-Counter (CRDT) কোনো ডিস্ট্রিবিউটেড লক ছাড়াই ৩টি বিচ্ছিন্ন আঞ্চলিক ডেটা সেন্টারের মধ্যে কীভাবে মোট গণনার নিখুঁত হিসাব বজায় রাখে?'
        },
        options: [
          {
            en: 'Each data center maintains its own independent positive and negative counter arrays; when regions reconnect, they take the maximum of each node count, guaranteeing convergence without coordination',
            bn: 'প্রতিটি ডেটা সেন্টার নিজস্ব বৃদ্ধি ও হ্রাসের আলাদা তালিকা রাখে; সংযোগ ফিরে এলে তারা প্রতিটি নোডের সর্বোচ্চ মানটি (MAX) গ্রহণ করে, ফলে কোনো লক ছাড়াই উভয় পাশে নিখুঁত যোগফল মেলে'
          },
          {
            en: 'PN-counters send physical postal letters between data centers once per month',
            bn: 'PN-কাউন্টার মাসে একবার ডাকযোগে চিঠি পাঠিয়ে ডেটা সেন্টারে হিসাব মেলায়'
          },
          {
            en: 'Because PN-counters convert all numbers into Latin syllables',
            bn: 'কারণ PN-কাউন্টার সব সংখ্যাকে ল্যাটিন শব্দে রূপান্তর করে'
          },
          {
            en: 'PN-counters format all regional database storage drives on reconnection',
            bn: 'সংযোগ ফিরে এলে PN-কাউন্টার সব আঞ্চলিক ড্রাইভ ফরম্যাট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'State-based CRDTs merge using mathematical semilattices: MAX(local, remote) is associative, commutative, and idempotent.',
          bn: 'ম্যাক্সিমাম (MAX) ফাংশন ব্যবহার করে যেকোনো ক্রমে ডেটা মেলালেও ফলাফল সবসময় একই এবং নিখুঁত থাকে।'
        },
        explanation: {
          en: 'CRDTs achieve strong eventual consistency deterministically through commutative merge rules, eliminating distributed lock bottlenecks.',
          bn: 'CRDT কোনো লকিং ছাড়াই গাণিতিক নিয়মে একাধিক নোডের স্বাধীন আপডেট সুন্দরভাবে মিলিয়ে ফেলতে পারে।'
        }
      }
    ]
  }
};
