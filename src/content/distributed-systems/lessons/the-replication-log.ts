import type { Lesson } from '../../../lib/types';

export const replicationLogLesson: Lesson = {
  slug: 'the-replication-log',
  tech: 'distributed-systems',
  title: {
    en: 'Replication Strategies — Single-Leader, Multi-Leader, and Quorums',
    bn: 'রেপ্লিকেশন কৌশল: একক-নেতা, বহু-নেতা এবং কোরাম'
  },
  summary: {
    en: 'Replication copies data across multiple physical machines to deliver fault tolerance, reduced geographic latency, and horizontal read scaling. Architects choose between three topologies: Single-Leader, Multi-Leader, and Leaderless. Single-Leader routes writes to one primary. Multi-Leader accepts local writes in active-active regions. Leaderless reads and writes directly across quorum sets. While synchronous replication guarantees zero data loss, it compromises write availability; asynchronous replication maximizes throughput but introduces replication lag and consistency anomalies like lost updates and stale reads.',
    bn: 'একাধিক ফিজিক্যাল মেশিনে তথ্যের অনুলিপি তৈরি করাকে রেপ্লিকেশন বলা হয়, যা সিস্টেমকে ক্র্যাশ থেকে রক্ষা করে, ভৌগোলিক দূরত্ব কমায় এবং রিড সক্ষমতা বাড়ায়। আর্কিটেক্টরা ৩টি প্রধান কাঠামো ব্যবহার করেন: একক-লিডার, বহু-লিডার এবং লিডারবিহীন। একক-লিডারে একটি প্রাইমারি সব রাইট গ্রহণ করে। বহু-লিডারে আঞ্চলিক মাস্টাররা সমান্তরাল রাইট নেয়। আর লিডারবিহীনে ক্লায়েন্টরা সরাসরি কোরাম সেটে কাজ করে। সিঙ্ক্রোনাস রেপ্লিকেশন ডাটা হারানোর ঝুঁকি শূন্য করলেও রাইট প্রাপ্যতা কমিয়ে দেয়; অন্যদিকে অ্যাসিঙ্ক্রোনাস রেপ্লিকেশন সর্বোচ্চ থ্রুপুট দেয় কিন্তু রেপ্লিকেশন ল্যাগ এবং বাসি ডাটার সমস্যা তৈরি করে।'
  },
  minutes: 27,
  nextLesson: {
    slug: 'the-consistency-menu',
    tech: 'distributed-systems',
    title: {
      en: 'The Consistency Menu — Linearizability to Eventual Consistency',
      bn: 'ধারাবাহিকতার তালিকা: লিনিয়ারাইজ্যাবিলিটি থেকে ইভেনচুয়াল ধারাবাহিকতা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'replication-topologies-overview',
      text: {
        en: 'The Three Topologies of Distributed Replication',
        bn: 'বিতরণকৃত রেপ্লিকেশনের তিনটি মৌলিক কাঠামো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you store mission-critical user profiles, financial balances, or inventory counts, saving data on a single machine is a single point of failure. Replication spreads copies of that data across multiple independent nodes so that if one server fails, the application continues operating smoothly without interruption.',
        bn: 'যখন আপনি ব্যবহারকারীর প্রোফাইল, আর্থিক ব্যালেন্স বা পণ্যের হিসাব সংরক্ষণ করেন, তখন একটিমাত্র মেশিনে ডাটা রাখা একটি বিপজ্জনক দুর্বলতা। রেপ্লিকেশন একাধিক স্বাধীন সার্ভারে তথ্যের অনুলিপি ছড়িয়ে দেয়, যাতে একটি সার্ভার নষ্ট হলেও অ্যাপ্লিকেশনটি কোনো বিঘ্ন ছাড়াই স্বাভাবিকভাবে চলতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'System architects implement replication using three distinct topologies. Single-Leader routes all writes through 1 primary node. Multi-Leader permits multiple regional masters to accept concurrent writes. Finally, Leaderless enables clients to write directly to peer replicas using quorum consensus.',
        bn: 'সফটওয়্যার আর্কিটেক্টরা ৩টি ভিন্ন কাঠামোর মাধ্যমে রেপ্লিকেশন তৈরি করেন। একক-লিডারে সমস্ত রাইট ১টি প্রাথমিক নোডে পাঠানো হয়। বহু-লিডারে একাধিক আঞ্চলিক মাস্টার নোড একসাথে রাইট গ্রহণ করতে পারে। আর লিডারবিহীনে ক্লায়েন্টরা সরাসরি একাধিক পিয়ার নোডে কোরামের ভিত্তিতে রাইট পরিচালনা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'single-leader-replication',
          def: {
            en: 'An architecture where one designated primary node processes all writes and streams log changes to read-only followers.',
            bn: 'এমন একটি কাঠামো যেখানে একটি নির্দিষ্ট প্রাথমিক নোড সমস্ত রাইট গ্রহণ করে এবং ফলোয়ারদের কাছে লগের পরিবর্তন পাঠায়।'
          }
        },
        {
          term: 'multi-leader-replication',
          def: {
            en: 'An active-active setup where multiple nodes accept writes independently and synchronize changes across regions.',
            bn: 'এমন একটি সক্রিয় কাঠামো যেখানে একাধিক নোড স্বাধীনভাবে রাইট গ্রহণ করে এবং অঞ্চলভেদে পরিবর্তনগুলো সমন্বয় করে।'
          }
        },
        {
          term: 'leaderless-replication',
          def: {
            en: 'A decentralized model where clients write to and read from multiple peer replicas using quorum arithmetic.',
            bn: 'একটি বিকেন্দ্রীভূত মডেল যেখানে ক্লায়েন্টরা কোনো লিডার ছাড়াই সরাসরি একাধিক সমকক্ষ নোডে কোরামের ভিত্তিতে রাইট ও রিড করে।'
          }
        },
        {
          term: 'replication-lag',
          def: {
            en: 'The propagation delay between a write committing on a leader and that write appearing on asynchronous followers.',
            bn: 'একটি রাইট লিডারে কমিট হওয়া এবং অ্যাসিঙ্ক্রোনাস ফলোয়ারদের কাছে পৌঁছানোর মধ্যকার সময়ের ব্যবধান।'
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
        en: 'Topology Trade-Off Matrix: Single-Leader vs Multi-Leader vs Leaderless',
        bn: 'কাঠামোগত তুলনা ম্যাট্রিক্স: একক-লিডার বনাম বহু-লিডার বনাম লিডারবিহীন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the correct replication architecture involves balancing write latency, conflict resolution complexity, and network partition resilience.',
        bn: 'সঠিক রেপ্লিকেশন কাঠামো নির্বাচনের জন্য রাইটের গতি, দ্বন্দ্ব নিষ্পত্তির জটিলতা এবং নেটওয়ার্ক বিভাজন প্রতিরোধের ভারসাম্য বজায় রাখতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Dimension', bn: 'পরিমাপ / মাত্রা' },
        { en: 'Single-Leader Replication', bn: 'একক-লিডার রেপ্লিকেশন' },
        { en: 'Multi-Leader Replication', bn: 'বহু-লিডার রেপ্লিকেশন' },
        { en: 'Leaderless Replication', bn: 'লিডারবিহীন রেপ্লিকেশন' }
      ],
      rows: [
        [
          { en: 'Write Routing', bn: 'রাইট রাউটিং' },
          { en: 'All writes routed to 1 primary node', bn: 'সমস্ত রাইট ১টি প্রাথমিক নোডে যায়' },
          { en: 'Writes routed to closest regional master', bn: 'রাইট নিকটবর্তী আঞ্চলিক মাস্টারে যায়' },
          { en: 'Broadcast to W peer replica nodes', bn: 'একসাথে W সংখ্যক পিয়ার নোডে যায়' }
        ],
        [
          { en: 'Conflict Handling', bn: 'দ্বন্দ্ব নিরসন' },
          { en: 'Trivial: leader establishes total write order', bn: 'সহজ: লিডার একক ধারাবাহিক ক্রম ঠিক করে' },
          { en: 'Complex: requires conflict resolution logic', bn: 'জটিল: দ্বন্দ্ব নিরসনের নিয়মের প্রয়োজন' },
          { en: 'Resolved by read repair and version vectors', bn: 'রিড রিপেয়ার ও ভার্সন ভেক্টরে সমাধান' }
        ],
        [
          { en: 'Read Scaling', bn: 'পড়ার সক্ষমতা বৃদ্ধি' },
          { en: 'High: query any asynchronous follower', bn: 'উচ্চ: যেকোনো ফলোয়ার নোড থেকে পড়া যায়' },
          { en: 'High: local reading in each datacenter', bn: 'উচ্চ: প্রতিটি ডেটা সেন্টারে স্থানীয়ভাবে পড়া' },
          { en: 'Configurable via read quorum parameter R', bn: 'রিড কোরাম R প্যারামিটার দিয়ে নিয়ন্ত্রিত' }
        ],
        [
          { en: 'Common Databases', bn: 'প্রচলিত ডেটাবেস' },
          { en: 'PostgreSQL, MySQL, Redis, MongoDB', bn: 'পোস্টগ্রেসকিউএল, মাইএসকিউএল, রেডিস, মঙ্গোডিবি' },
          { en: 'Multi-datacenter MySQL, CouchDB', bn: 'মাল্টি-রিজিয়ন মাইএসকিউএল, কাউচডিবি' },
          { en: 'Apache Cassandra, Amazon Dynamo, ScyllaDB', bn: 'অ্যাপাচি ক্যাসান্ড্রা, অ্যামাজন ডায়নামো' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-replication-code',
      text: {
        en: 'Executable Replication Simulator and Lag Demonstration',
        bn: 'রেপ্লিকেশন সিমুলেটর ও রেপ্লিকেশন ল্যাগের পূর্ণাঙ্গ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates a single-leader replication cluster with 1 synchronous follower and 1 asynchronous follower. Notice that the synchronous follower receives the committed data immediately, while the asynchronous follower experiences replication lag.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১টি সিঙ্ক্রোনাস এবং ১টি অ্যাসিঙ্ক্রোনাস ফলোয়ার বিশিষ্ট একক-লিডার ক্লাস্টার সিমুলেট করে। লক্ষ্য করুন সিঙ্ক্রোনাস ফলোয়ার তাৎক্ষণিকভাবে ডাটা পেলেও অ্যাসিঙ্ক্রোনাস ফলোয়ারে সাময়িক রেপ্লিকেশন ল্যাগ তৈরি হয়।'
      }
    },
    {
      type: 'code',
      code: `class ReplicationCluster {
  constructor() {
    this.leaderStore = new Map();
    this.followerStores = [new Map(), new Map()];
    this.wal = [];
  }

  write(key, value, syncFollowers = 1) {
    const version = this.wal.length + 1;
    const entry = { key, value, version };
    this.leaderStore.set(key, { value, version });
    this.wal.push(entry);

    // Synchronously replicate to specified number of followers
    let replicated = 0;
    for (let i = 0; i < syncFollowers; i++) {
      this.followerStores[i].set(key, { value, version });
      replicated++;
    }

    return { success: true, version, syncAcks: replicated };
  }

  readFromFollower(followerIdx, key) {
    return this.followerStores[followerIdx].get(key) || null;
  }
}

const cluster = new ReplicationCluster();
const result = cluster.write('user:101', 'Dhaka', 1);
console.log('Write committed with version:', result.version);
// Output: Write committed with version: 1
console.log('Sync follower 0 data:', cluster.readFromFollower(0, 'user:101')?.value);
// Output: Sync follower 0 data: Dhaka
console.log('Async follower 1 data (lagging):', cluster.readFromFollower(1, 'user:101')?.value || 'null');
// Output: Async follower 1 data (lagging): null`
    },
    {
      type: 'heading',
      id: 'lag-anomalies-and-guarantees',
      text: {
        en: 'Mitigating Replication Lag: Read-After-Write Consistency',
        bn: 'রেপ্লিকেশন ল্যাগের প্রভাব এবং রিড-আফটার-রাইট নিশ্চয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Asynchronous replication introduces anomalies if a user writes an update to the leader and immediately reloads their profile from a lagging follower, causing their edit to disappear temporarily. To prevent this, systems enforce Read-After-Write Consistency: users always read their own editable profile directly from the primary leader or from followers guaranteed to have caught up to the client’s write timestamp.',
        bn: 'অ্যাসিঙ্ক্রোনাস রেপ্লিকেশনে ব্যবহারকারী কোনো তথ্য আপডেট করে সাথে সাথে প্রোফাইল রিলোড করলে পেছনের ফলোয়ার থেকে বাসি ডাটা আসার কারণে নতুন আপডেট সাময়িক গায়েব হতে পারে। এটি রোধ করতে রিড-আফটার-রাইট ধারাবাহিকতা নিশ্চিত করা হয়: ব্যবহারকারীর নিজস্ব প্রোফাইল সরাসরি প্রাইমারি লিডার থেকে বা আপডেট গ্রহণ করা নিশ্চিত ফলোয়ার থেকে রিড করানো হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Topology trade-offs: Single-leader simplifies ordering, multi-leader reduces regional latency, and leaderless maximizes write resilience.',
          bn: 'কাঠামোর সুবিধা: একক-লিডার ক্রম সহজ করে, বহু-লিডার আঞ্চলিক বিলম্ব কমায় এবং লিডারবিহীন রাইটের টিকে থাকার ক্ষমতা বাড়ায়।'
        },
        {
          en: 'Sync vs async replication: Synchronous writes guarantee zero loss at the expense of latency; asynchronous writes optimize throughput.',
          bn: 'সিঙ্ক বনাম অ্যাসিঙ্ক: সিঙ্ক্রোনাস রাইট কোনো ডাটা না হারানোর নিশ্চয়তা দেয়, আর অ্যাসিঙ্ক্রোনাস রাইট সর্বোচ্চ গতি প্রদান করে।'
        },
        {
          en: 'Replication lag anomalies: Reading from lagging replicas causes stale reads, requiring read-after-write consistency safeguards.',
          bn: 'রেপ্লিকেশন ল্যাগের ঝুঁকি: পেছনের রেপ্লিকা থেকে পড়লে বাসি ডাটা আসার ঝুঁকি থাকে, যার জন্য রিড-আফটার-রাইট সুরক্ষা প্রয়োজন।'
        },
        {
          en: 'Quorum configuration: In leaderless systems, tuning W and R balances write throughput against read consistency.',
          bn: 'কোরাম টিউনিং: লিডারবিহীন সিস্টেমে W এবং R সমন্বয় করে রাইটের গতি ও পড়ার ধারাবাহিকতার ভারসাম্য ঠিক করা হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rl-ex1',
      kind: 'mcq',
      topic: 'single-leader-write-path',
      question: {
        en: 'In a single-leader replication system, how are write operations handled across the cluster?',
        bn: 'একক-লিডার রেপ্লিকেশন সিস্টেমে ক্লাস্টার জুড়ে রাইট অপারেশন কীভাবে পরিচালিত হয়?'
      },
      options: [
        {
          en: 'All client writes are routed strictly to the single designated leader, which streams log updates to followers',
          bn: 'সমস্ত রাইট শুধুমাত্র একটি নির্দিষ্ট লিডার নোডে পাঠানো হয়, যা ফলোয়ারদের কাছে লগের আপডেট পাঠায়'
        },
        {
          en: 'Clients write to any random follower node directly',
          bn: 'ক্লায়েন্টরা যেকোনো এলোমেলো ফলোয়ার নোডে সরাসরি লেখে'
        },
        {
          en: 'Writes are rejected if more than 2 followers are connected',
          bn: '২টির বেশি ফলোয়ার যুক্ত থাকলে সমস্ত রাইট প্রত্যাখ্যান করা হয়'
        },
        {
          en: 'Followers write to the leader and delete their own disks',
          bn: 'ফলোয়াররা লিডারে লেখে এবং নিজেদের ডিস্ক মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Why is it called "Single-Leader"? Where do writes go?',
        bn: 'এটিকে "একক-লিডার" বলা হয় কেন? রাইটগুলো কোথায় যায়?'
      },
      explanation: {
        en: 'The primary leader is the authoritative source for writes, ensuring an unambiguous total ordering of all state updates.',
        bn: 'প্রাইমারি লিডার সমস্ত রাইটের মূল কেন্দ্র হিসেবে কাজ করে, যা সমস্ত আপডেটের একটি সুনির্দিষ্ট ক্রম নিশ্চিত করে।'
      }
    },
    {
      id: 'rl-ex2',
      kind: 'mcq',
      topic: 'read-after-write-consistency',
      question: {
        en: 'What user experience anomaly does "Read-After-Write Consistency" protect against?',
        bn: '"রিড-আফটার-রাইট ধারাবাহিকতা" ব্যবহারকারীর কোন বাজে অভিজ্ঞতা বা ত্রুটি থেকে সুরক্ষা দেয়?'
      },
      options: [
        {
          en: 'A user updates their profile on the leader but immediately reads from a lagging follower, making their changes seem to vanish',
          bn: 'ব্যবহারকারী লিডারে প্রোফাইল আপডেট করার পর পিছিয়ে থাকা ফলোয়ার থেকে রিড করলে তার পরিবর্তন সাময়িক গায়েব মনে হওয়া'
        },
        {
          en: 'The web browser running out of RAM',
          bn: 'ওয়েব ব্রাউজারের র‍্যাম ফুরিয়ে যাওয়া'
        },
        {
          en: 'The database server shutting down permanently',
          bn: 'ডেটাবেস সার্ভার স্থায়ীভাবে বন্ধ হয়ে যাওয়া'
        },
        {
          en: 'Network cables being disconnected',
          bn: 'নেটওয়ার্কের তার বিচ্ছিন্ন হয়ে যাওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you post a status and refresh the page, you expect to see your own status immediately.',
        bn: 'কোনো স্ট্যাটাস পোস্ট করে পেজ রিফ্রেশ করলে আপনি নিজের পোস্টটি সাথে সাথে দেখতে প্রত্যাশা করেন।'
      },
      explanation: {
        en: 'Read-after-write ensures that users always see their own committed updates, even if asynchronous followers are lagging behind.',
        bn: 'রিড-আফটার-রাইট নিশ্চিত করে যে ফলোয়ার নোড কিছুটা পিছিয়ে থাকলেও ব্যবহারকারী তার নিজের করা আপডেট দেখতে পাবে।'
      }
    },
    {
      id: 'rl-ex3',
      kind: 'mcq',
      topic: 'sync-vs-async-tradeoff',
      question: {
        en: 'What is the primary operational trade-off of using fully synchronous replication to all followers?',
        bn: 'সমস্ত ফলোয়ারের কাছে শতভাগ সিঙ্ক্রোনাস রেপ্লিকেশন ব্যবহারের প্রধান ব্যবহারিক ঝুঁকি বা অপূর্ণতা কী?'
      },
      options: [
        {
          en: 'If even a single follower slows down or crashes, all client write operations across the entire cluster are blocked',
          bn: 'একটিমাত্র ফলোয়ারও যদি ধীরগতির হয় বা ক্র্যাশ করে, তবে পুরো ক্লাস্টারের সমস্ত ক্লায়েন্ট রাইট অপারেশন আটকে যায়'
        },
        {
          en: 'Data is permanently erased from the leader',
          bn: 'লিডার থেকে ডাটা স্থায়ীভাবে মুছে যায়'
        },
        {
          en: 'The database cannot support numbers greater than 100',
          bn: 'ডেটাবেস ১০০ এর বেশি সংখ্যা সমর্থন করতে পারে না'
        },
        {
          en: 'It doubles the cost of hard drive hardware',
          bn: 'এটি হার্ডড্রাইভের খরচ দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'In fully synchronous replication, the leader must wait for every follower to acknowledge before returning success.',
        bn: 'সিঙ্ক্রোনাস রেপ্লিকেশনে লিডারকে প্রতিটি ফলোয়ারের স্বীকৃতি না পাওয়া পর্যন্ত অপেক্ষা করতে হয়।'
      },
      explanation: {
        en: 'Synchronous replication sacrifices write availability for zero data loss, because one unresponsive node stalls all writes.',
        bn: 'সিঙ্ক্রোনাস রেপ্লিকেশন ডাটা হারানোর ঝুঁকি কমালেও প্রাপ্যতা নষ্ট করে, কারণ একটি নোড আটকে গেলে সব রাইট থেমে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-replication-log-quiz',
    title: {
      en: 'Replication Strategies Quiz',
      bn: 'রেপ্লিকেশন কৌশল কুইজ'
    },
    questions: [
      {
        id: 'rl-q1',
        kind: 'mcq',
        topic: 'multi-leader-conflict-challenge',
        question: {
          en: 'What unique architectural complexity arises in Multi-Leader replication that does not exist in Single-Leader systems?',
          bn: 'বহু-লিডার রেপ্লিকেশনে কোন অনন্য স্থাপত্যিক জটিলতা তৈরি হয় যা একক-লিডার সিস্টেমে থাকে না?'
        },
        options: [
          {
            en: 'Concurrent writes to the same record in different regional datacenters create conflicting versions that must be reconciled',
            bn: 'ভিন্ন ভিন্ন আঞ্চলিক ডেটা সেন্টারে একই রেকর্ডে একসাথে রাইট হলে বিরোধী ভার্সন তৈরি হয় যা সমন্বয় করতে হয়'
          },
          {
            en: 'Multi-leader setups can only run on Windows servers',
            bn: 'বহু-লিডার সেটআপ কেবল উইন্ডোজ সার্ভারে চলতে পারে'
          },
          {
            en: 'The network speed is reduced by 50 percent',
            bn: 'নেটওয়ার্কের গতি ৫০ শতাংশ কমে যায়'
          },
          {
            en: 'Users are limited to 1 query per hour',
            bn: 'ব্যবহারকারীরা ঘণ্টায় মাত্র ১টি কুয়েরি করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a user in Tokyo updates their title to "Engineer" while another in London updates it to "Manager", which write wins?',
          bn: 'টোকিওর ব্যবহারকারী পদবি "ইঞ্জিনিয়ার" আর লন্ডনের জন "ম্যানেজার" লিখলে কোন লেখাটি টিকবে?'
        },
        explanation: {
          en: 'Because multiple nodes accept writes independently without coordination, multi-leader architectures require conflict resolution.',
          bn: 'যেহেতু একাধিক নোড সমন্বয় ছাড়া স্বাধীনভাবে রাইট গ্রহণ করে, তাই বহু-লিডার সিস্টেমে দ্বন্দ্ব নিষ্পত্তির কৌশল অপরিহার্য।'
        }
      },
      {
        id: 'rl-q2',
        kind: 'mcq',
        topic: 'leaderless-quorum-repair',
        question: {
          en: 'In leaderless systems (such as Cassandra or Dynamo), what mechanism updates an out-of-date replica when a client reads data?',
          bn: 'লিডারবিহীন সিস্টেমে (যেমন ক্যাসান্ড্রা বা ডায়নামো) ক্লায়েন্ট ডাটা পড়ার সময় পেছনের নোডকে আপডেট করতে কোন ব্যবস্থা কাজ করে?'
        },
        options: [
          {
            en: 'Read Repair, where the client detects a version mismatch among the queried replicas and writes the latest value back to stale nodes',
            bn: 'রিড রিপেয়ার, যেখানে ক্লায়েন্ট নোডগুলোর মধ্যে ভার্সন পার্থক্য দেখে সর্বশেষ সঠিক মানটি পেছনের নোডে লিখে দেয়'
          },
          {
            en: 'The server automatically reboots its operating system',
            bn: 'সার্ভারটি স্বয়ংক্রিয়ভাবে তার অপারেটিং সিস্টেম রিবুট করে'
          },
          {
            en: 'The database deletes the lagging node from the cluster',
            bn: 'ডেটাবেস পিছিয়ে থাকা নোডটিকে ক্লাস্টার থেকে মুছে ফেলে'
          },
          {
            en: 'All network traffic is encrypted with RSA-4096',
            bn: 'সমস্ত নেটওয়ার্ক ট্রাফিক RSA-4096 দিয়ে এনক্রিপ্ট হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'When reading from R replicas, if 2 return version 5 and 1 returns version 4, how can the outdated replica be fixed?',
          bn: 'R সংখ্যক নোড থেকে পড়ার সময় ২টিতে ভার্সন ৫ এবং ১টিতে ভার্সন ৪ পাওয়া গেলে পুরনো নোডটি কীভাবে ঠিক করা হয়?'
        },
        explanation: {
          en: 'Read repair opportunisticly heals stale replicas whenever client reads discover version discrepancies across the quorum.',
          bn: 'রিড রিপেয়ার কৌশলে কোরাম রিডের সময় তথ্যের অমিল ধরা পড়লেই সাথে সাথে পুরনো নোডটিকে আপডেট করে দেওয়া হয়।'
        }
      },
      {
        id: 'rl-q3',
        kind: 'mcq',
        topic: 'semi-sync-replication-balance',
        question: {
          en: 'Why do production databases frequently utilize "Semi-Synchronous" replication (1 synchronous follower, remainder asynchronous)?',
          bn: 'প্রোডাকশন ডেটাবেসে কেন প্রায়শই "সেমি-সিঙ্ক্রোনাস" রেপ্লিকেশন (১টি সিঙ্ক্রোনাস ফলোয়ার, বাকিগুলো অ্যাসিঙ্ক্রোনাস) ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It guarantees that at least two nodes have committed the data (zero data loss on leader crash) without stalling on slower third nodes',
            bn: 'এটি নিশ্চিত করে যে অন্তত দুটি নোডে ডাটা সংরক্ষিত হয়েছে (লিডার নষ্ট হলেও ডাটা হারাবে না) এবং অন্য নোডগুলোর জন্য আটকে থাকে না'
          },
          {
            en: 'It reduces the database memory footprint to 0 bytes',
            bn: 'এটি ডেটাবেস মেমরির ব্যবহার ০ বাইটে নামিয়ে আনে'
          },
          {
            en: 'It eliminates the need for database backups',
            bn: 'এটি ডেটাবেস ব্যাকআপের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'It doubles the size of every database row',
            bn: 'এটি প্রতিটি ডেটাবেস সারির আকার দ্বিগুণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of combining the zero-loss safety of synchronous replication with the throughput of asynchronous replication.',
          bn: 'সিঙ্ক্রোনাসের ডাটা না হারানোর নিরাপত্তা এবং অ্যাসিঙ্ক্রোনাসের গতির চমৎকার সমন্বয়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'Semi-synchronous replication ensures that if the primary crashes, one follower is certified up-to-date, balancing safety and speed.',
          bn: 'সেমি-সিঙ্ক্রোনাস নিশ্চিত করে যে লিডার নষ্ট হলেও একটি ফলোয়ারে সর্বশেষ ডাটা থাকবে, যা নিরাপত্তা ও গতির সুষম সমন্বয়।'
        }
      },
      {
        id: 'rl-q4',
        kind: 'mcq',
        topic: 'monotonic-reads-guarantee',
        question: {
          en: 'What does the "Monotonic Reads" consistency guarantee provide to users?',
          bn: '"মোনোটোনিক রিডস" ধারাবাহিকতার নিশ্চয়তা ব্যবহারকারীকে কী সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'Once a user reads a newer version of data, subsequent reads will never return an older, stale version of that data',
            bn: 'ব্যবহারকারী একবার কোনো তথ্যের নতুন ভার্সন দেখলে পরবর্তী রিডগুলোতে কখনোই তার চেয়ে পুরনো বা বাসি তথ্য ফিরে আসবে না'
          },
          {
            en: 'All reads take exactly 1 millisecond',
            bn: 'সমস্ত রিড অপারেশন ঠিক ১ মিলিসেকেন্ড সময় নেবে'
          },
          {
            en: 'Users can only read data once per day',
            bn: 'ব্যবহারকারীরা দিনে মাত্র একবার ডাটা পড়তে পারবে'
          },
          {
            en: 'The database returns only uppercase letters',
            bn: 'ডেটাবেস কেবল বড় হাতের অক্ষর রিটার্ন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Imagine moving forward in time: you should never observe state moving backward in time on page refresh.',
          bn: 'সময়ে সামনের দিকে এগোনোর কথা ভাবুন: পেজ রিফ্রেশ করলে সময় কখনোই পেছনের দিকে যেতে পারে না।'
        },
        explanation: {
          en: 'Monotonic reads prevent time-travel anomalies where repeated queries hit different asynchronous replicas with unequal lag.',
          bn: 'মোনোটোনিক রিডস টাইম-ট্রাভেল অসঙ্গতি দূর করে, যাতে ভিন্ন ভিন্ন পিছিয়ে থাকা রেপ্লিকা থেকে পুরনো ডাটা ভেসে না ওঠে।'
        }
      }
    ]
  }
};
