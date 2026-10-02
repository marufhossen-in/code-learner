import type { Lesson } from '../../../lib/types';

export const partitionLedgerLesson: Lesson = {
  slug: 'the-partition-ledger',
  tech: 'distributed-systems',
  title: {
    en: 'Distributed Systems Overview — The CAP Theorem and Partitions',
    bn: 'বিতরণকৃত সিস্টেমের রূপরেখা: ক্যাপ উপপাদ্য এবং নেটওয়ার্ক বিভাজন'
  },
  summary: {
    en: 'When you start building distributed computing systems, network partitions are an unavoidable physical reality: underwater cables snap, top-of-rack switches fail, and GC pauses delay heartbeat messages. Eric Brewer’s CAP Theorem proves that when a network partition strikes, a distributed system must choose between Consistency (linearizable reads and writes) and Availability (answering every query without error). Systems cannot "choose CA" because network partitions cannot be prevented in physical reality. If both sides of a partitioned cluster attempt to elect leaders independently, the system suffers a catastrophic Split-Brain. Modern resilient architectures defend against split-brain using odd-node majority quorums, fencing tokens, and automated lease timeouts.',
    bn: 'যখন আপনি বিতরণকৃত কম্পিউটিং সিস্টেম তৈরি শুরু করেন, তখন নেটওয়ার্ক বিভাজন বা পার্টিশন একটি অবশ্যম্ভাবী বাস্তব সত্য: অপটিক্যাল তার কাটা পড়তে পারে, নেটওয়ার্ক সুইচ নষ্ট হতে পারে বা সার্ভারের মেমরি ক্লিন করার সময় হার্টবিট সংকেত আটকে যেতে পারে। এরিক ব্রুয়ারের ক্যাপ (CAP) উপপাদ্য প্রমাণ করে যে নেটওয়ার্ক বিভাজন ঘটলে একটি সিস্টেমকে ধারাবাহিকতা (কঠোর নির্ভুলতা) এবং প্রাপ্যতা (সচল থাকা) এই দুটির মধ্যে যেকোনো একটি বেছে নিতে হয়। বাস্তবে পার্টিশন বন্ধ করা অসম্ভব হওয়ায় "CA সিস্টেম" তৈরি করা অবাস্তব। বিভাজনের কারণে ক্লাস্টারের উভয় পাশ যদি নিজেদের নেতা বানিয়ে সমান্তরাল কাজ শুরু করে, তবে একে স্প্লিট-ব্রেইন ত্রুটি বলে। আধুনিক সিস্টেমগুলো বিজোড় নোডের কোরাম, ফেন্সিং টোকেন এবং লিডার লিজের মাধ্যমে স্প্লিট-ব্রেইন প্রতিরোধ করে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-consensus-choir',
    tech: 'distributed-systems',
    title: {
      en: 'Distributed Consensus — Paxos, Raft, and Quorums',
      bn: 'বিতরণকৃত ঐকমত্য: প্যাক্সোস, রাফট এবং কোরাম'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'cap-theorem-mechanics',
      text: {
        en: 'The Anatomy of Brewer’s CAP Theorem',
        bn: 'ব্রুয়ারের ক্যাপ (CAP) উপপাদ্যের শারীরস্থান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you run servers across multiple datacenters or cloud availability zones, network communication between machines is never perfectly reliable. Routers drop packets, fiber optic lines get severed during civil construction, and operating system pauses interrupt heartbeat pings. A network partition occurs whenever communication between clusters of nodes is broken.',
        bn: 'যখন আপনি একাধিক ডেটা সেন্টার বা ক্লাউড জোনে সার্ভার চালান, তখন মেশিনগুলোর মধ্যকার নেটওয়ার্ক যোগাযোগ কখনোই শতভাগ নিখুঁত থাকে না। রাউটারে প্যাকেট নষ্ট হতে পারে, অপটিক্যাল ফাইবার তার কাটা পড়তে পারে কিংবা মেমরি ক্লিন করার জন্য হার্টবিট সংকেত সাময়িক আটকে যেতে পারে। নোডগুলোর মধ্যকার যোগাযোগ বিচ্ছিন্ন হয়ে গেলেই নেটওয়ার্ক পার্টিশন বা বিভাজন ঘটে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Eric Brewer’s CAP Theorem, formally proven by Seth Gilbert and Nancy Lynch in 2002, establishes that a distributed system cannot achieve Consistency, Availability, and Partition Tolerance simultaneously. Because physical networks cannot guarantee zero partitions, Partition Tolerance (P) is mandatory. Therefore, architects must choose between Consistency (CP) or Availability (AP) during a network cut.',
        bn: 'এরিক ব্রুয়ারের ক্যাপ (CAP) উপপাদ্য (যা ২০০২ সালে সেথ গিলবার্ট এবং ন্যান্সি লিঞ্চ গাণিতিকভাবে প্রমাণ করেন) নির্দেশ করে যে কোনো বিতরণকৃত সিস্টেম একসাথে ধারাবাহিকতা (C), প্রাপ্যতা (A) এবং বিভাজন সহনশীলতা (P) এই তিনটি নিশ্চিত করতে পারে না। বাস্তব জগতে নেটওয়ার্ক বিচ্ছিন্নতা ঠেকানো অসম্ভব হওয়ায় পার্টিশন টলারেন্স (P) মানতেই হয়। ফলে নেটওয়ার্ক বিভাজনের সময় ইঞ্জিনিয়ারদের অবশ্যই CP অথবা AP এর মাঝে যেকোনো একটি বেছে নিতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'network-partition',
          def: {
            en: 'A network failure where communication between two or more groups of distributed nodes is severed while the nodes remain running.',
            bn: 'এমন একটি নেটওয়ার্ক ত্রুটি যেখানে নোডগুলো সচল থাকলেও তাদের মধ্যকার পারস্পরিক বার্তা আদান-প্রদান বিচ্ছিন্ন হয়ে যায়।'
          }
        },
        {
          term: 'cap-theorem',
          def: {
            en: 'The fundamental theorem stating that a distributed store can guarantee at most 2 of Consistency, Availability, and Partition Tolerance simultaneously.',
            bn: 'মৌলিক উপপাদ্য যা প্রমাণ করে যে বিতরণকৃত ডেটাবেস একসাথে ধারাবাহিকতা, প্রাপ্যতা এবং বিভাজন সহনশীলতার মধ্যে সর্বোচ্চ ২টি প্রদান করতে পারে।'
          }
        },
        {
          term: 'split-brain',
          def: {
            en: 'A critical failure state where a partitioned cluster divides into 2 competing halves that both act as the authoritative primary leader.',
            bn: 'একটি মারাত্মক ত্রুটি যেখানে ক্লাস্টার দ্বিখণ্ডিত হয়ে ২টি অংশে বিভক্ত হয় এবং উভয় অংশই নিজেদের একমাত্র সক্রিয় লিডার হিসেবে দাবি করে ডেটা বিনষ্ট করে।'
          }
        },
        {
          term: 'fencing-token',
          def: {
            en: 'A monotonically increasing sequence number attached to client requests to prevent stale, partitioned leaders from mutating shared storage.',
            bn: 'অনুরোধে যুক্ত একটি ধারাবাহিকভাবে বর্ধনশীল টোকেন, যা সাবেক বিচ্ছিন্ন লিডারের পুরনো অনুরোধ শেয়ার্ড স্টোরেজে লেখা প্রতিহত করে।'
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
      id: 'cp-vs-ap-architecture-table',
      text: {
        en: 'System Classification Matrix: CP vs AP',
        bn: 'সিস্টেমের শ্রেণিবিভাগ ম্যাট্রিক্স: CP বনাম AP'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Review the operational differences between CP and AP distributed database architectures to align system design with business objectives.',
        bn: 'ব্যবসার চাহিদার সাথে মিল রেখে সঠিক সিস্টেম তৈরি করতে CP এবং AP বিতরণকৃত ডেটাবেসের কাঠামোগত পার্থক্যগুলো পর্যালোচনা করুন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Dimension', bn: 'পরিমাপ / মাত্রা' },
        { en: 'CP Architecture (Consistency Focus)', bn: 'CP আর্কিটেকচার (ধারাবাহিকতা প্রাধান্য)' },
        { en: 'AP Architecture (Availability Focus)', bn: 'AP আর্কিটেকচার (প্রাপ্যতা প্রাধান্য)' }
      ],
      rows: [
        [
          { en: 'Partition Behavior', bn: 'বিভাজনে আচরণ' },
          { en: 'Rejects or pauses writes on the minority side', bn: 'সংখ্যালঘু অংশে রাইট গ্রহণ বন্ধ বা আটকে দেয়' },
          { en: 'Accepts writes on all partitioned nodes', bn: 'বিচ্ছিন্ন সমস্ত নোডেই রাইট গ্রহণ চালিয়ে যায়' }
        ],
        [
          { en: 'Data Integrity Level', bn: 'তথ্যের সততার স্তর' },
          { en: 'Strict linearizable consistency guaranteed', bn: 'কঠোর লিনিয়ারাইজ্যাবল ধারাবাহিকতা নিশ্চিত' },
          { en: 'Eventual consistency with possible write divergence', bn: 'ইভেনচুয়াল ধারাবাহিকতা ও তথ্যের অমিলের ঝুঁকি' }
        ],
        [
          { en: 'Split-Brain Defense', bn: 'স্প্লিট-ব্রেইন প্রতিরক্ষা' },
          { en: 'Strict majority quorum required to elect leaders', bn: 'লিডার নির্বাচনে কঠোর সংখ্যাগরিষ্ঠ কোরাম আবশ্যক' },
          { en: 'Asynchronous conflict reconciliation engines', bn: 'অ্যাসিঙ্ক্রোনাস দ্বন্দ্ব নিরসন ইঞ্জিনের ওপর নির্ভরশীল' }
        ],
        [
          { en: 'Industry Examples', bn: 'শিল্পক্ষেত্রে উদাহরণ' },
          { en: 'etcd, Consul, ZooKeeper, CockroachDB', bn: 'etcd, Consul, ZooKeeper, CockroachDB' },
          { en: 'Apache Cassandra, Amazon DynamoDB, CouchDB', bn: 'Apache Cassandra, Amazon DynamoDB, CouchDB' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-fencing-code',
      text: {
        en: 'Executable Fencing Token Storage Guard Implementation',
        bn: 'ফেন্সিং টোকেন ও স্প্লিট-ব্রেইন সুরক্ষার সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a storage node protected by monotonically increasing Fencing Tokens. Leader 1 writes with token 1. When a network partition prompts the cluster to elect Leader 2 with token 2, subsequent stale writes from Leader 1 with token 1 are instantly rejected.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ধারাবাহিকভাবে বর্ধনশীল ফেন্সিং টোকেন দ্বারা সুরক্ষিত একটি স্টোরেজ নোড বাস্তবায়ন করে। লিডার ১ টোকেন ১ দিয়ে লেখে। নেটওয়ার্ক বিভাজনের কারণে ক্লাস্টার নতুন লিডার ২ কে টোকেন ২ প্রদান করলে সাবেক লিডার ১ এর টোকেন ১ নিয়ে আসা অনুরোধগুলো সাথে সাথে বর্জিত হয়।'
      }
    },
    {
      type: 'code',
      code: `class StorageNode {
  constructor() {
    this.currentEpoch = 0;
    this.data = null;
  }

  write(epoch, value) {
    if (epoch < this.currentEpoch) {
      return {
        success: false,
        reason: 'Stale fencing token ' + epoch + ' < current ' + this.currentEpoch
      };
    }
    this.currentEpoch = epoch;
    this.data = value;
    return { success: true, epoch, value };
  }
}

const storage = new StorageNode();

// Leader 1 acquires lock with epoch 1
console.log('Leader 1 write:', storage.write(1, 'Order #101'));
// Output: Leader 1 write: { success: true, epoch: 1, value: 'Order #101' }

// Partition occurs; cluster elects Leader 2 with epoch 2
console.log('Leader 2 write:', storage.write(2, 'Order #102'));
// Output: Leader 2 write: { success: true, epoch: 2, value: 'Order #102' }

// Partition heals; old Leader 1 attempts write with stale epoch 1
console.log('Leader 1 stale attempt:', storage.write(1, 'Order #103'));
// Output: Leader 1 stale attempt: { success: false, reason: 'Stale fencing token 1 < current 2' }`
    },
    {
      type: 'heading',
      id: 'split-brain-prevention-strategies',
      text: {
        en: 'Production Defenses Against Split-Brain Anarchy',
        bn: 'স্প্লিট-ব্রেইন প্রতিরোধে বাস্তব ইঞ্জিনিয়ারিং কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Split-brain occurs when a network cut divides a cluster into two isolated sub-networks, and both sides elect a leader and accept writes concurrently. To prevent this, systems deploy an odd number of nodes (such as 3 or 5) and enforce the Majority Quorum Rule: only a partition containing strictly more than half the total nodes (e.g. 2 of 3, or 3 of 5) is allowed to elect leaders or commit state changes. The minority partition automatically freezes into read-only or rejection mode.',
        bn: 'স্প্লিট-ব্রেইন ঘটে যখন একটি নেটওয়ার্ক বিভাজনের কারণে ক্লাস্টার দুটি বিচ্ছিন্ন অংশে ভাগ হয়ে যায় এবং উভয় পাশই স্বাধীনভাবে নেতা নির্বাচন করে লিখতে শুরু করে। এটি রোধ করতে সিস্টেমগুলোতে বিজোড় সংখ্যক নোড (যেমন ৩ বা ৫টি) স্থাপন করা হয় এবং সংখ্যাগরিষ্ঠ কোরামের নিয়ম প্রয়োগ করা হয়: কেবলমাত্র মোট নোডের অর্ধেকের বেশি নোড বিশিষ্ট অংশটিই (যেমন ৩টির মধ্যে ২টি, বা ৫টির মধ্যে ৩টি) নেতা নির্বাচন বা পরিবর্তন কমিট করতে পারে। সংখ্যালঘু অংশটি স্বয়ংক্রিয়ভাবে কেবল-পড়ার মোডে চলে যায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Partitions are unavoidable: Because hardware networks inevitably fail, distributed systems cannot prevent partitions.',
          bn: 'বিভাজন অনিবার্য: ফিজিক্যাল নেটওয়ার্কের ত্রুটি সম্পূর্ণ রোধ করা অসম্ভব হওয়ায় পার্টিশন মেনে নিতেই হয়।'
        },
        {
          en: 'CP vs AP trade-off: During a partition, a system must choose between consistent data correctness or continuous availability.',
          bn: 'CP বনাম AP সমঝোতা: বিভাজনের সময় সিস্টেমকে তথ্যের কঠোর নির্ভুলতা অথবা নিরবচ্ছিন্ন সচলতার মধ্যে বেছে নিতে হয়।'
        },
        {
          en: 'Split-brain corruption: Allowing multiple leaders in disconnected partitions destroys data integrity through conflicting writes.',
          bn: 'স্প্লিট-ব্রেইনের ক্ষতি: বিচ্ছিন্ন অংশে একাধিক লিডারকে কাজ করতে দিলে ডাটাবেসের তথ্য পরস্পরবিরোধী হয়ে বিনষ্ট হয়।'
        },
        {
          en: 'Fencing tokens enforce order: Monotonically increasing epoch numbers prevent partitioned former leaders from overwriting new data.',
          bn: 'ফেন্সিং টোকেনের সুরক্ষা: ক্রমাগত বর্ধনশীল টোকেন ব্যবহার করে বিচ্ছিন্ন সাবেক লিডারের পুরনো ডাটা লেখা প্রতিহত করা হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pl-ex1',
      kind: 'mcq',
      topic: 'cap-theorem-impossibility-ca',
      question: {
        en: 'Why is it considered technically misleading for a distributed system vendor to claim their database is "CA" (Consistent and Available)?',
        bn: 'কোনো ডিস্ট্রিবিউটেড ডেটাবেস ভেন্ডরের নিজেদের সিস্টেমকে "CA" (ধারাবাহিক ও শতভাগ সচল) দাবি করাকে কেন প্রযুক্তিগতভাবে বিভ্রান্তিকর বলা হয়?'
      },
      options: [
        {
          en: 'Because network partitions (P) are an unavoidable physical reality; when a partition occurs, the system must choose between C and A',
          bn: 'কারণ নেটওয়ার্ক বিভাজন (P) একটি অনিবার্য বাস্তব সত্য; পার্টিশন ঘটলে সিস্টেমকে অবশ্যই C অথবা A বেছে নিতে হয়'
        },
        {
          en: 'Because CA databases cannot store dates and times',
          bn: 'কারণ CA ডেটাবেস তারিখ ও সময় সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Because the database requires 100 terabytes of RAM to start',
          bn: 'কারণ ডেটাবেস চালু করতে ১০০ টেরাবাইট র‍্যাম প্রয়োজন হয়'
        },
        {
          en: 'Because C and A stand for client and administrator',
          bn: 'কারণ C এবং A বলতে ক্লায়েন্ট এবং অ্যাডমিনিস্ট্রেটর বোঝায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can any software configuration guarantee that an undersea internet cable will never be severed?',
        bn: 'কোনো সফটওয়্যার কি নিশ্চয়তা দিতে পারে যে সমুদ্রের নিচের ইন্টারনেট তার কখনো ছিঁড়বে না?'
      },
      explanation: {
        en: 'A system can only be CA when the network is 100% reliable. Since physical networks fail, Partition Tolerance is non-negotiable.',
        bn: 'নেটওয়ার্ক ১০০% নিখুঁত থাকলেই কেবল CA সম্ভব। কিন্তু ফিজিক্যাল নেটওয়ার্কে ত্রুটি ঘটে বলেই পার্টিশন টলারেন্স অপরিহার্য।'
      }
    },
    {
      id: 'pl-ex2',
      kind: 'mcq',
      topic: 'split-brain-cause',
      question: {
        en: 'What specific failure event causes "Split-Brain" in a distributed server cluster?',
        bn: 'বিতরণকৃত সার্ভার ক্লাস্টারে কোন সুনির্দিষ্ট পরিস্থিতির কারণে "স্প্লিট-ব্রেইন" ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'A network partition disconnects nodes, causing both isolated halves to independently elect their own leader and accept conflicting writes',
          bn: 'নেটওয়ার্ক বিভাজনে নোডগুলো বিচ্ছিন্ন হয়ে উভয় অংশই নিজেদের স্বাধীন লিডার বানিয়ে পরস্পরবিরোধী রাইট গ্রহণ করতে শুরু করলে'
        },
        {
          en: 'A server CPU overheating above 90 degrees',
          bn: 'সার্ভারের সিপিইউ এর তাপমাত্রা ৯০ ডিগ্রির বেশি হয়ে গেলে'
        },
        {
          en: 'Users typing passwords in uppercase instead of lowercase',
          bn: 'ব্যবহারকারী ছোট হাতের অক্ষরের বদলে বড় হাতের অক্ষরে পাসওয়ার্ড লিখলে'
        },
        {
          en: 'Installing two different web browsers on the client machine',
          bn: 'ক্লায়েন্ট মেশিনে দুটি ভিন্ন ওয়েব ব্রাউজার ইনস্টল করলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Imagine two people in different rooms making changes to the same file without knowing the other person is also editing it.',
        bn: 'দুজন মানুষ ভিন্ন ঘরে বসে পরস্পরের সাথে যোগাযোগহীন অবস্থায় একই ফাইলে বিপরীতমুখী পরিবর্তন করার কথা ভাবুন।'
      },
      explanation: {
        en: 'When both partitions believe they are the sole authority, they generate diverged histories that cannot be automatically merged.',
        bn: 'উভয় পক্ষই নিজেদের একমাত্র কর্তৃপক্ষ ভাবলে পরস্পরবিরোধী তথ্য তৈরি হয় যা আর কখনো স্বয়ংক্রিয়ভাবে মেলানো যায় না।'
      }
    },
    {
      id: 'pl-ex3',
      kind: 'mcq',
      topic: 'fencing-token-mechanism',
      question: {
        en: 'How do Fencing Tokens successfully protect shared storage from a zombie former leader that reawakens after a network partition?',
        bn: 'নেটওয়ার্ক বিভাজনের পর পুনরায় জেগে ওঠা সাবেক বিচ্ছিন্ন লিডারের হাত থেকে ফেন্সিং টোকেন কীভাবে শেয়ার্ড স্টোরেজকে সুরক্ষিত রাখে?'
      },
      options: [
        {
          en: 'The storage server rejects any write whose fencing token number is lower than the highest token number it has already processed',
          bn: 'স্টোরেজ সার্ভার এমন যেকোনো রাইট বর্জন করে যার ফেন্সিং টোকেন নম্বর ইতোমধ্যে প্রক্রিয়া করা সর্বোচ্চ নম্বরের চেয়ে কম'
        },
        {
          en: 'They shut down the power to the data center building',
          bn: 'তারা পুরো ডেটা সেন্টার ভবনের বিদ্যুৎ সংযোগ বন্ধ করে দেয়'
        },
        {
          en: 'They format the hard drives of all follower nodes',
          bn: 'তারা সমস্ত ফলোয়ার নোডের হার্ডড্রাইভ ফরম্যাট করে দেয়'
        },
        {
          en: 'They convert all numbers into Roman numerals',
          bn: 'তারা সমস্ত সংখ্যাকে রোমান সংখ্যায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the storage node has already seen token 2 from the new leader, what will it do with a write tagged with old token 1?',
        bn: 'স্টোরেজ নোড যদি নতুন লিডারের টোকেন ২ দেখে ফেলে, তবে পুরনো টোকেন ১ নিয়ে আসা অনুরোধ পেলে সে কী করবে?'
      },
      explanation: {
        en: 'Monotonically increasing tokens allow the storage node to recognize and reject writes from superseded leaders.',
        bn: 'ক্রমাগত বর্ধনশীল টোকেন স্টোরেজকে সাবেক বাতিল লিডারের পুরনো অনুরোধ চিনতে ও বর্জন করতে সাহায্য করে।'
      }
    }
  ],
  quiz: {
    id: 'the-partition-ledger-quiz',
    title: {
      en: 'The CAP Theorem and Network Partitions Quiz',
      bn: 'ক্যাপ উপপাদ্য এবং নেটওয়ার্ক বিভাজন কুইজ'
    },
    questions: [
      {
        id: 'pl-q1',
        kind: 'mcq',
        topic: 'odd-node-cluster-rationale',
        question: {
          en: 'Why do distributed consensus systems (such as etcd, ZooKeeper, and Consul) recommend deploying clusters with an odd number of nodes (3, 5, or 7)?',
          bn: 'বিতরণকৃত কনসেনসাস সিস্টেমে (যেমন etcd, ZooKeeper, বা Consul) কেন বিজোড় সংখ্যক নোডের (৩, ৫, বা ৭) ক্লাস্টার গঠনের সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'An odd number ensures a clear strict majority quorum exists without tie deadlocks, maximizing fault tolerance per server deployed',
            bn: 'বিজোড় সংখ্যা নিশ্চিত করে যে সমান সমান টাই হওয়া ছাড়া একটি সুনির্দিষ্ট সংখ্যাগরিষ্ঠ কোরাম গঠিত হবে এবং সার্ভারপ্রতি সর্বোচ্চ ফল্ট টলারেন্স পাওয়া যাবে'
          },
          {
            en: 'Even numbers are mathematically illegal in computer algorithms',
            bn: 'কম্পিউটার অ্যালগরিদমে জোড় সংখ্যা ব্যবহার গাণিতিকভাবে নিষিদ্ধ'
          },
          {
            en: 'It reduces the physical weight of server racks',
            bn: 'এটি সার্ভার র‍্যাকের শারীরিক ওজন কমিয়ে দেয়'
          },
          {
            en: 'Odd numbers double the speed of network routers',
            bn: 'বিজোড় সংখ্যা নেটওয়ার্ক রাউটারের গতি দ্বিগুণ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In a 4-node cluster, a 2-2 partition prevents both halves from reaching a majority (> 2), surviving only 1 failure—the same as 3 nodes.',
          bn: '৪টি নোডের ক্লাস্টার ২-২ ভাগে বিভক্ত হলে কোনো পাশই সংখ্যাগরিষ্ঠতা (> ২) পায় না, ফলে ৩ নোডের মতোই মাত্র ১টি ক্র্যাশ সহ্য করতে পারে।'
        },
        explanation: {
          en: 'A 4-node cluster still requires 3 nodes for a majority, tolerating only 1 failure (identical to a 3-node cluster) while adding cost.',
          bn: '৪টি নোডের ক্লাস্টারেও সংখ্যাগরিষ্ঠতার জন্য ৩টি নোড লাগে, ফলে ৩ নোডের মতোই মাত্র ১টি ফল্ট সহ্য করতে পারায় বাড়তি খরচ নিরর্থক হয়।'
        }
      },
      {
        id: 'pl-q2',
        kind: 'mcq',
        topic: 'cp-system-minority-behavior',
        question: {
          en: 'In a CP (Consistent and Partition-Tolerant) distributed database, what happens to client write requests arriving at the minority side of a network partition?',
          bn: 'একটি CP বিতরণকৃত ডেটাবেসে নেটওয়ার্ক বিভাজনের সংখ্যালঘু অংশে ক্লায়েন্টের রাইট অনুরোধ পৌঁছালে কী ঘটে?'
        },
        options: [
          {
            en: 'The requests are rejected or blocked until the partition heals, preventing the creation of inconsistent state',
            bn: 'অনুরোধগুলো প্রত্যাখ্যান করা হয় বা বিভাজন ঠিক না হওয়া পর্যন্ত আটকে রাখা হয়, যাতে কোনো অসঙ্গতিপূর্ণ তথ্য তৈরি না হয়'
          },
          {
            en: 'They are silently deleted without telling the user',
            bn: 'ব্যবহারকারীকে না জানিয়ে সেগুলো নীরবে মুছে ফেলা হয়'
          },
          {
            en: 'The servers write the data to a public pastebin website',
            bn: 'সার্ভারগুলো ডাটা একটি পাবলিক পেস্টবিন ওয়েবসাইটে লিখে দেয়'
          },
          {
            en: 'The requests are converted into audio podcasts',
            bn: 'অনুরোধগুলো অডিও পডকাস্টে রূপান্তর করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CP chooses consistency over availability. Can the minority partition safely commit a write without majority consensus?',
          bn: 'CP প্রাপ্যতা অপেক্ষা ধারাবাহিকতাকে গুরুত্ব দেয়। সংখ্যালঘু অংশ কি সংখ্যাগরিষ্ঠের সমর্থন ছাড়া নিরাপদে ডাটা লিখতে পারে?'
        },
        explanation: {
          en: 'To preserve linearizability, CP systems refuse writes in any partition that lacks a strict majority.',
          bn: 'কঠোর ধারাবাহিকতা অক্ষুণ্ণ রাখতে CP সিস্টেম সংখ্যাগরিষ্ঠতাহীন যেকোনো অংশে রাইট অপারেশন বন্ধ করে দেয়।'
        }
      },
      {
        id: 'pl-q3',
        kind: 'mcq',
        topic: 'stonith-concept',
        question: {
          en: 'What is the operational purpose of STONITH ("Shoot The Other Node In The Head") in high-availability cluster architecture?',
          bn: 'উচ্চ-প্রাপ্যতার ক্লাস্টার আর্কিটেকচারে STONITH ("অন্য নোডটিকে মাথায় গুলি করো") কৌশলের ব্যবহারিক উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'Forcibly cutting power to an unresponsive node via networked power switches to guarantee it cannot cause a split-brain condition',
            bn: 'সন্দেহভাজন বা প্রতিক্রিয়াহীন নোডের বিদ্যুৎ সংযোগ জোরপূর্বক বন্ধ করে দেওয়া, যাতে সে কোনোভাবেই স্প্লিট-ব্রেইন তৈরি করতে না পারে'
          },
          {
            en: 'Firing software developers who write bugs',
            bn: 'যে ডেভেলপাররা বাগ তৈরি করে তাদের বরখাস্ত করা'
          },
          {
            en: 'Deleting all database tables every morning at 6 AM',
            bn: 'প্রতিদিন সকাল ৬টায় সমস্ত ডেটাবেস টেবিল মুছে ফেলা'
          },
          {
            en: 'Upgrading the operating system kernel automatically',
            bn: 'অপারেটিং সিস্টেম কার্নেল স্বয়ংক্রিয়ভাবে আপগ্রেড করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you cannot be sure whether a node is dead or merely slow, how can you guarantee it will never access shared disks?',
          bn: 'কোনো নোড সত্যিই মৃত নাকি কেবল ধীরগতির তা নিশ্চিত না হলে সে যাতে শেয়ার্ড ডিস্ক স্পর্শ না করে তা কীভাবে নিশ্চিত করবেন?'
        },
        explanation: {
          en: 'STONITH guarantees that a suspected node is truly powered down before a standby node takes over its resources, preventing split-brain.',
          bn: 'STONITH নিশ্চিত করে যে বিকল্প নোড দায়িত্ব নেওয়ার আগেই সন্দেহভাজন নোডটির বিদ্যুৎ পুরোপুরি বন্ধ করা হয়েছে।'
        }
      },
      {
        id: 'pl-q4',
        kind: 'mcq',
        topic: 'ap-system-use-case',
        question: {
          en: 'For which type of business workload is an AP (Availability and Partition-Tolerant) database architecture most appropriate?',
          bn: 'কোন ধরনের ব্যবসায়িক কাজের ক্ষেত্রে AP (প্রাপ্যতা ও বিভাজন সহনশীল) ডেটাবেস আর্কিটেকচার সবচেয়ে উপযোগী?'
        },
        options: [
          {
            en: 'An e-commerce shopping cart or social media feed where accepting every customer write is more valuable than instantaneous global consistency',
            bn: 'ই-কমার্স শপিং কার্ট বা সোশ্যাল মিডিয়া ফিড যেখানে তাৎক্ষণিক বিশ্বব্যাপী মিলনের চেয়ে গ্রাহকের প্রতিটি রাইট গ্রহণ করা বেশি মূল্যবান'
          },
          {
            en: 'A core banking transaction ledger transferring money between checking accounts',
            bn: 'ব্যাংকের মূল লেনদেন খাতা যেখানে এক অ্যাকাউন্ট থেকে অন্য অ্যাকাউন্টে টাকা পাঠানো হয়'
          },
          {
            en: 'An air traffic collision avoidance sensor grid',
            bn: 'বিমানের সংঘর্ষ এড়ানোর সেন্সর গ্রিড'
          },
          {
            en: 'A medical radiation therapy dosage calculator',
            bn: 'চিকিৎসায় ব্যবহৃত রেডিয়েশন থেরাপির মাত্রা ক্যালকুলেটর'
          }
        ],
        answer: 0,
        hint: {
          en: 'In which scenario is losing a sale due to an error message far worse than resolving a duplicate cart item later?',
          bn: 'কোন ক্ষেত্রে একটি এরর মেসেজ দিয়ে বিক্রি হারানোর চেয়ে পরে কার্টের ডাটা ঠিক করে নেওয়া বেশি লাভজনক?'
        },
        explanation: {
          en: 'AP systems prioritize availability: customers can always add items to carts, and minor discrepancies are reconciled asynchronously.',
          bn: 'AP সিস্টেম প্রাপ্যতাকে অগ্রাধিকার দেয়: গ্রাহকরা সবসময় পণ্য কার্টে যোগ করতে পারেন এবং পরে ব্যাকগ্রাউন্ডে অসঙ্গতি ঠিক করা হয়।'
        }
      }
    ]
  }
};
