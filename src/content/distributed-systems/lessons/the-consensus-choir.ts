import type { Lesson } from '../../../lib/types';

export const consensusChoirLesson: Lesson = {
  slug: 'the-consensus-choir',
  tech: 'distributed-systems',
  title: {
    en: 'Distributed Consensus — Paxos, Raft, and Quorums',
    bn: 'বিতরণকৃত ঐকমত্য: প্যাক্সোস, রাফট এবং কোরাম'
  },
  summary: {
    en: 'In an asynchronous network where packets are delayed, reordered, or lost, independent nodes must agree on an authoritative sequence of state transitions without a single point of failure. The consensus problem forms the bedrock of distributed databases, cluster coordinators, and replicated state machines. While the FLP impossibility theorem proves that deterministic consensus cannot guarantee liveness during unannounced crashes, practical protocols leverage partial synchrony, majority quorums (W + R > N), and leader leases. Protocols like Paxos and Raft decompose consensus into leader election, log replication, and safety invariants, tolerating F server crashes across 2F + 1 nodes.',
    bn: 'একটি অ্যাসিঙ্ক্রোনাস নেটওয়ার্কে যেখানে প্যাকেট বিলম্বিত, ওলটপালট বা হারিয়ে যেতে পারে, সেখানে কোনো একক ব্যর্থতার বিন্দু ছাড়াই একাধিক স্বাধীন নোডকে স্টেট পরিবর্তনের ধারাবাহিক ক্রমে একমত হতে হয়। ঐকমত্য বা কনসেনসাস সমস্যা বিতরণকৃত ডেটাবেস, ক্লাস্টার সমন্বয়কারী এবং রেপ্লিকেটেড স্টেট মেশিনের মূল ভিত্তি। FLP ইম্পসিবিলিটি উপপাদ্য প্রমাণ করে যে আকস্মিক নোড পতনের সময় বিশুদ্ধ অ্যাসিঙ্ক্রোনাস সিস্টেমে লাইভনেস নিশ্চিত করা অসম্ভব হলেও বাস্তব প্রোটোকলগুলো আংশিক সিঙ্ক্রোনি, সংখ্যাগরিষ্ঠ কোরাম (W + R > N) এবং লিডার লিজ ব্যবহার করে কাজ করে। প্যাক্সোস এবং রাফটের মতো প্রোটোকলগুলো লিডার নির্বাচন, লগ রেপ্লিকেশন এবং সুরক্ষা নিশ্চিত করে ২F + ১ নোডের ক্লাস্টারে F সংখ্যক নোডের পতন সহ্য করতে পারে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-replication-log',
    tech: 'distributed-systems',
    title: {
      en: 'Replication Strategies — Single-Leader, Multi-Leader, and Quorums',
      bn: 'রেপ্লিকেশন কৌশল: একক-নেতা, বহু-নেতা এবং কোরাম'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'consensus-problem-and-flp',
      text: {
        en: 'The Fundamental Consensus Dilemma and FLP Impossibility',
        bn: 'মৌলিক ঐকমত্য সমস্যা এবং FLP অসম্ভবতা উপপাদ্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build distributed databases, Kubernetes cluster managers, or distributed key-value stores, multiple independent servers must agree on an identical transaction log. If node A accepts a write while node B drops offline, how can the remaining nodes commit values without creating conflicting histories?',
        bn: 'যখন আপনি ডিস্ট্রিবিউটেড ডেটাবেস, কুবারনেটিস ক্লাস্টার ম্যানেজার বা কি-ভ্যালু স্টোর তৈরি করেন, তখন একাধিক স্বাধীন সার্ভারকে একটি অভিন্ন ট্রানজ্যাকশন লগে একমত হতে হয়। যদি নোড A একটি ডাটা লেখার অনুরোধ গ্রহণ করে আর নোড B অফলাইনে চলে যায়, তবে বাকি নোডগুলো কীভাবে কোনো বিরোধ ছাড়া মান চূড়ান্ত করবে?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1985, researchers Fischer, Lynch, and Paterson published the FLP Impossibility Theorem. They proved that in a purely asynchronous network, no deterministic consensus protocol can guarantee both safety (nothing bad happens) and liveness (something good eventually happens) if even 1 node can crash silently. Practical engineering solves this by assuming partial synchrony: nodes rely on randomized election timeouts and heartbeat timers.',
        bn: '১৯৮৫ সালে ফিশার, লিঞ্চ এবং পিটারসন তাদের বিখ্যাত FLP ইম্পসিবিলিটি উপপাদ্য প্রকাশ করেন। তারা প্রমাণ করেন যে বিশুদ্ধ অ্যাসিঙ্ক্রোনাস নেটওয়ার্কে মাত্র ১টি নোড আকস্মিক ক্র্যাশ করলেও কোনো অ্যালগরিদম একসাথে নিরাপত্তা ও সচলতার পূর্ণ নিশ্চয়তা দিতে পারে না। বাস্তব সফটওয়্যার ইঞ্জিনিয়ারিং আংশিক সিঙ্ক্রোনির অনুমান ব্যবহার করে এই সীমাবদ্ধতা অতিক্রম করে: নোডগুলো এলোমেলো টাইমার এবং হার্টবিট সংকেতের ওপর নির্ভর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'distributed-consensus',
          def: {
            en: 'The algorithmic process by which a cluster of independent nodes agrees on a shared state or decision despite network failures.',
            bn: 'এমন একটি অ্যালগরিদম প্রক্রিয়া যার মাধ্যমে নেটওয়ার্ক ত্রুটি সত্ত্বেও একাধিক স্বাধীন নোড একটি অভিন্ন স্টেট বা সিদ্ধান্তে পৌঁছায়।'
          }
        },
        {
          term: 'quorum-intersection',
          def: {
            en: 'The mathematical property where write quorum W and read quorum R overlap (W + R > N), ensuring at least 1 witness node.',
            bn: 'গাণিতিক নীতি যেখানে লেখা ও পড়ার কোরামের সমষ্টি নোড সংখ্যার চেয়ে বেশি হলে (W + R > N) অন্তত ১টি সাধারণ সাক্ষী নোড থাকে।'
          }
        },
        {
          term: 'flp-impossibility',
          def: {
            en: 'The 1985 theorem proving that no deterministic asynchronous protocol can guarantee consensus under even 1 node crash.',
            bn: '১৯৮৫ সালের উপপাদ্য যা প্রমাণ করে যে বিশুদ্ধ অ্যাসিঙ্ক্রোনাস সিস্টেমে মাত্র ১টি নোড ক্র্যাশ করলেও শতভাগ ঐকমত্য ও লাইভনেস নিশ্চিত করা অসম্ভব।'
          }
        },
        {
          term: 'raft-consensus',
          def: {
            en: 'A leader-driven consensus algorithm that decomposes state machine replication into leader election, log replication, and commit safety.',
            bn: 'একটি লিডার-ভিত্তিক কনসেনসাস অ্যালগরিদম যা লিডার নির্বাচন, লগ রেপ্লিকেশন এবং নিরাপত্তা নিশ্চিতকরণের মাধ্যমে কাজ করে।'
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
      id: 'paxos-vs-raft-table',
      text: {
        en: 'Architectural Comparison: Multi-Paxos vs Raft',
        bn: 'কাঠামোগত তুলনা: মাল্টি-প্যাক্সোস বনাম রাফট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While Multi-Paxos and Raft provide equivalent formal safety guarantees, Raft was designed specifically to eliminate Paxos’s notorious conceptual complexity.',
        bn: 'মাল্টি-প্যাক্সোস এবং রাফট উভয়ই সমান গাণিতিক সুরক্ষা প্রদান করে, তবে প্যাক্সোসের কুখ্যাত ধারণাগত জটিলতা দূর করার জন্যই রাফট উদ্ভাবিত হয়েছিল।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Dimension', bn: 'পরিমাপ / মাত্রা' },
        { en: 'Multi-Paxos Protocol', bn: 'মাল্টি-প্যাক্সোস প্রোটোকল' },
        { en: 'Raft Consensus Algorithm', bn: 'রাফট কনসেনসাস অ্যালগরিদম' }
      ],
      rows: [
        [
          { en: 'Core Design Philosophy', bn: 'মূল নকশার দর্শন' },
          { en: 'Symmetric consensus instances with leader optimization', bn: 'লিডার অপ্টিমাইজেশন সহ সমান্তরাল কনসেনসাস ইনস্ট্যান্স' },
          { en: 'Strong single leader driving all state replication', bn: 'শক্তিশালী একক লিডার যা সমস্ত লগ রেপ্লিকেশন পরিচালনা করে' }
        ],
        [
          { en: 'Log Ordering Guarantee', bn: 'লগের ধারাবাহিকতার নিশ্চয়তা' },
          { en: 'Allows out-of-order commits and log holes to be filled later', bn: 'পরে পূরণের শর্তে ফাঁকা লগ ও এলোমেলো কমিট সমর্থন করে' },
          { en: 'Strict sequential log matching with zero holes allowed', bn: 'কোনো ফাঁকা স্থান ছাড়া কঠোরভাবে ধারাবাহিক লগ ম্যাচিং' }
        ],
        [
          { en: 'Leader Election Protocol', bn: 'লিডার নির্বাচনের নিয়ম' },
          { en: 'Dual-phase prepare and promise leases', bn: 'দ্বি-ধাপের প্রিপেয়ার ও প্রমিজ লিজ' },
          { en: 'Randomized election timeouts with RequestVote RPC', bn: 'এলোমেলো টাইমার সহ রিকোয়েস্ট-ভোট RPC' }
        ],
        [
          { en: 'Implementation Understandability', bn: 'বাস্তবায়নের সহজবোধ্যতা' },
          { en: 'Notoriously difficult to understand and implement correctly', bn: 'সঠিকভাবে বোঝা এবং ত্রুটিমুক্ত বাস্তবায়ন করা অত্যন্ত কঠিন' },
          { en: 'Specifically engineered for clarity and formal validation', bn: 'সহজে বোঝার ও যাচাইযোগ্যতার জন্য বিশেষভাবে ডিজাইনকৃত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-raft-code',
      text: {
        en: 'Executable Raft Consensus State Simulator',
        bn: 'রাফট কনসেনসাস সিমুলেটর ও লগ রেপ্লিকেশন বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates a 3-node Raft cluster. Node 1 initiates an election for term 1, secures votes from a majority of nodes (3 out of 3), transitions to Leader, and appends a write command to its distributed log.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৩টি নোডের একটি রাফট ক্লাস্টার সিমুলেট করে। নোড ১ টার্ম ১ এর জন্য নির্বাচন শুরু করে, সংখ্যাগরিষ্ঠ নোডের ভোট (৩টির মধ্যে ৩টি) পেয়ে লিডারে রূপান্তরিত হয় এবং ডিস্ট্রিবিউটেড লগে একটি লেখার কমান্ড যুক্ত করে।'
      }
    },
    {
      type: 'code',
      code: `class RaftNode {
  constructor(id, clusterSize) {
    this.id = id;
    this.clusterSize = clusterSize;
    this.currentTerm = 0;
    this.role = 'Follower'; // Follower, Candidate, or Leader
    this.log = [];
    this.commitIndex = 0;
  }

  startElection(term) {
    this.currentTerm = term;
    this.role = 'Candidate';
    let votes = 1; // Votes for itself
    return votes;
  }

  receiveVoteRequest(candidateTerm) {
    if (candidateTerm > this.currentTerm) {
      this.currentTerm = candidateTerm;
      this.role = 'Follower';
      return true; // Vote granted
    }
    return false;
  }

  replicateLog(command) {
    if (this.role !== 'Leader') return null;
    const entry = { term: this.currentTerm, index: this.log.length + 1, command };
    this.log.push(entry);
    return entry;
  }
}

// Instantiate a 3-node cluster
const n1 = new RaftNode('Node1', 3);
const n2 = new RaftNode('Node2', 3);
const n3 = new RaftNode('Node3', 3);

// Election phase: Node 1 initiates election for term 1
let votes = n1.startElection(1);
if (n2.receiveVoteRequest(1)) votes++;
if (n3.receiveVoteRequest(1)) votes++;

const majority = Math.floor(3 / 2) + 1; // 2
if (votes >= majority) {
  n1.role = 'Leader';
}

console.log('Elected Leader:', n1.id, 'with votes:', votes, 'of 3');
// Output: Elected Leader: Node1 with votes: 3 of 3
const entry = n1.replicateLog('SET balance = 500');
console.log('Leader Log Entry:', JSON.stringify(entry));
// Output: Leader Log Entry: {"term":1,"index":1,"command":"SET balance = 500"}`
    },
    {
      type: 'heading',
      id: 'quorum-math-and-leases',
      text: {
        en: 'Quorum Arithmetic and Leader Lease Guarantees',
        bn: 'কোরামের পাটিগণিত এবং লিডার লিজের নিশ্চয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A quorum system guarantees consistency through arithmetic overlap: if Write Quorum W and Read Quorum R satisfy W + R > N, any read must overlap with at least one node containing the latest write. In strict majority configurations (where N = 3 and W = 2, R = 2), the system tolerates 1 node failure without downtime. To prevent a partitioned former leader from serving stale reads, modern engines attach time-bounded Leader Leases that automatically expire if heartbeat acknowledgments cease.',
        bn: 'একটি কোরাম সিস্টেম গাণিতিক মিলনের মাধ্যমে ধারাবাহিকতা নিশ্চিত করে: যদি রাইট কোরাম W এবং রিড কোরাম R মিলে W + R > N শর্ত পূরণ করে, তবে যেকোনো রিড অন্তত একটি এমন নোডকে স্পর্শ করবে যাতে সর্বশেষ রাইট সংরক্ষিত আছে। কঠোর সংখ্যাগরিষ্ঠতায় (যেখানে N = ৩ এবং W = ২, R = ২), সিস্টেমটি ১টি নোড ক্র্যাশ করলেও সম্পূর্ণ সচল থাকে। বিচ্ছিন্ন হয়ে যাওয়া সাবেক লিডার যাতে বাসি ডাটা পরিবেশন না করে, সেজন্য আধুনিক সিস্টেমে নির্দিষ্ট মেয়াদের লিডার লিজ ব্যবহার করা হয় যা হার্টবিট বন্ধ হলে নিজে থেকেই বাতিল হয়ে যায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Consensus invariant: Distributed consensus guarantees that independent nodes agree on an authoritative sequence of state changes.',
          bn: 'ঐকমত্যের নিশ্চয়তা: বিতরণকৃত কনসেনসাস নিশ্চিত করে যে একাধিক নোড স্টেট পরিবর্তনের একটি সুনির্দিষ্ট ধারাবাহিকতায় একমত থাকে।'
        },
        {
          en: 'Quorum overlap law: Setting W + R > N forces the read and write quorums to share at least 1 witness node.',
          bn: 'কোরাম ছেদের নিয়ম: W + R > N নির্ধারণ করলে রাইট এবং রিড কোরামের মধ্যে অন্তত ১টি সাধারণ নোড থাকা নিশ্চিত হয়।'
        },
        {
          en: 'Fault tolerance bound: A consensus cluster of 2F + 1 nodes tolerates up to F arbitrary node failures.',
          bn: 'ত্রুটি সহনশীলতার সীমা: ২F + ১ নোডের একটি কনসেনসাস ক্লাস্টার সর্বোচ্চ F সংখ্যক নোডের পতন নিরাপদে সহ্য করতে পারে।'
        },
        {
          en: 'Raft modularity: Raft breaks consensus into leader election, log replication, and safety guarantees for operational clarity.',
          bn: 'রাফটের মডুলারিটি: রাফট কনসেনসাসকে লিডার নির্বাচন, লগ রেপ্লিকেশন এবং নিরাপত্তায় ভাগ করে স্পষ্ট ও সহজবোধ্য করে তোলে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cc-ex1',
      kind: 'mcq',
      topic: 'quorum-intersection-math',
      question: {
        en: 'In a cluster of N = 5 nodes, if the write quorum is set to W = 3, what is the minimum read quorum R required to guarantee reading the latest write?',
        bn: 'N = ৫ নোডের একটি ক্লাস্টারে যদি রাইট কোরাম W = ৩ হয়, তবে সর্বশেষ তথ্য পাওয়ার নিশ্চয়তা পেতে সর্বনিম্ন রিড কোরাম R কত হতে হবে?'
      },
      options: [
        {
          en: 'R = 3, because W + R (3 + 3 = 6) is strictly greater than N (5), forcing at least 1 overlapping node',
          bn: 'R = ৩, কারণ W + R (৩ + ৩ = ৬) নোড সংখ্যা N (৫) এর চেয়ে বড়, যা অন্তত ১টি নোডের মিলন নিশ্চিত করে'
        },
        {
          en: 'R = 1, because 1 node is always enough',
          bn: 'R = ১, কারণ ১টি নোডই সর্বদা যথেষ্ট'
        },
        {
          en: 'R = 0, no nodes need to be queried',
          bn: 'R = ০, কোনো নোডকে জিজ্ঞাসার প্রয়োজন নেই'
        },
        {
          en: 'R = 10, more than double the cluster size',
          bn: 'R = ১০, ক্লাস্টারের দ্বিগুণেরও বেশি'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Pigeonhole Principle requires W + R > N to ensure the read and write sets intersect.',
        bn: 'রিড ও রাইট সেটের মিলন ঘটাতে W + R > N হতে হবে।'
      },
      explanation: {
        en: 'With W = 3 and R = 3, their sum is 6 > 5. By the Pigeonhole Principle, at least one node must belong to both sets.',
        bn: 'W = ৩ এবং R = ৩ হলে তাদের যোগফল ৬ > ৫। ফলে অন্তত একটি নোড উভয় সেটেই বিদ্যমান থাকবে।'
      }
    },
    {
      id: 'cc-ex2',
      kind: 'mcq',
      topic: 'fault-tolerance-formula',
      question: {
        en: 'How many node failures can a Raft consensus cluster with 2F + 1 nodes safely tolerate while maintaining availability?',
        bn: '২F + ১ নোডের একটি রাফট কনসেনসাস ক্লাস্টার সচল থাকা অবস্থায় সর্বোচ্চ কতটি নোডের ব্যর্থতা নিরাপদে সহ্য করতে পারে?'
      },
      options: [
        {
          en: 'Up to F node failures, because the remaining F + 1 nodes still form a strict majority quorum',
          bn: 'সর্বোচ্চ F সংখ্যক নোডের ব্যর্থতা, কারণ বাকি F + ১টি নোড এখনো একটি সংখ্যাগরিষ্ঠ কোরাম গঠন করতে পারে'
        },
        {
          en: 'All 2F + 1 nodes can fail simultaneously',
          bn: 'একসাথে সমস্ত ২F + ১টি নোডই নষ্ট হতে পারে'
        },
        {
          en: 'Exactly 0 node failures; any crash breaks the cluster',
          bn: 'ঠিক ০টি নোড; যেকোনো ক্র্যাশে ক্লাস্টার ভেঙে পড়ে'
        },
        {
          en: '2F node failures',
          bn: '২F সংখ্যক নোডের ব্যর্থতা'
        }
      ],
      answer: 0,
      hint: {
        en: 'For N = 3 (where F = 1), how many nodes must stay online to form a majority of 2?',
        bn: 'N = ৩ (যেখানে F = ১) এর ক্ষেত্রে সংখ্যাগরিষ্ঠ ২ পেতে কতটি নোড সচল থাকতে হবে?'
      },
      explanation: {
        en: 'A cluster of 2F + 1 nodes requires a majority of F + 1 nodes to progress. Thus, it survives up to F crashes.',
        bn: '২F + ১ নোডের ক্লাস্টারে কাজ চালিয়ে যেতে F + ১টি নোডের সংখ্যাগরিষ্ঠতা প্রয়োজন। তাই এটি F সংখ্যক ক্র্যাশ সহ্য করতে পারে।'
      }
    },
    {
      id: 'cc-ex3',
      kind: 'mcq',
      topic: 'flp-impossibility-implication',
      question: {
        en: 'What does the FLP Impossibility Theorem state regarding deterministic consensus in asynchronous networks?',
        bn: 'অ্যাসিঙ্ক্রোনাস নেটওয়ার্কে ডিটারমিনিস্টিক কনসেনসাসের ক্ষেত্রে FLP ইম্পসিবিলিটি উপপাদ্য কী প্রমাণ করে?'
      },
      options: [
        {
          en: 'No deterministic protocol can guarantee both safety and liveness if even 1 node can experience an unannounced crash',
          bn: 'মাত্র ১টি নোডও যদি হঠাৎ ক্র্যাশ করতে পারে, তবে কোনো ডিটারমিনিস্টিক প্রোটোকল একসাথে নিরাপত্তা ও সচলতার পূর্ণ নিশ্চয়তা দিতে পারে না'
        },
        {
          en: 'Distributed consensus can be solved in 0 milliseconds',
          bn: 'বিতরণকৃত ঐকমত্য ০ মিলিসেকেন্ডে সমাধান করা সম্ভব'
        },
        {
          en: 'All network cables must be made of copper',
          bn: 'সমস্ত নেটওয়ার্ক তার অবশ্যই তামার তৈরি হতে হবে'
        },
        {
          en: 'Consensus is impossible under any conditions, even with synchronized clocks',
          bn: 'সিঙ্ক্রোনাইজড ঘড়ি থাকলেও যেকোনো পরিস্থিতিতে ঐকমত্য অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'In an asynchronous network, can a node distinguish between a very slow network link and a dead server?',
        bn: 'অ্যাসিঙ্ক্রোনাস নেটওয়ার্কে কোনো নোড কি খুব ধীরগতির সংযোগ এবং একটি মৃত সার্ভারের মধ্যে পার্থক্য করতে পারে?'
      },
      explanation: {
        en: 'Because delays cannot be distinguished from crashes in asynchronous networks, deterministic algorithms can be stalled indefinitely.',
        bn: 'অ্যাসিঙ্ক্রোনাস সিস্টেমে বিলম্ব এবং ক্র্যাশের তফাত বোঝা যায় না বলে ডিটারমিনিস্টিক অ্যালগরিদম অনির্দিষ্টকালের জন্য আটকে যেতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'the-consensus-choir-quiz',
    title: {
      en: 'Distributed Consensus and Raft Quiz',
      bn: 'বিতরণকৃত ঐকমত্য এবং রাফট কুইজ'
    },
    questions: [
      {
        id: 'cc-q1',
        kind: 'mcq',
        topic: 'raft-election-restriction',
        question: {
          en: 'In Raft, what safety condition prevents a candidate with an outdated log from winning an election?',
          bn: 'রাফটে কোন নিরাপত্তা শর্তটি পুরনো লগ বিশিষ্ট কোনো প্রার্থীকে নির্বাচনে জয়ী হওয়া থেকে বিরত রাখে?'
        },
        options: [
          {
            en: 'Voters reject any candidate whose log is less up-to-date than their own (lower term or shorter log length)',
            bn: 'ভোটাররা এমন যেকোনো প্রার্থীকে ভোট দিতে অস্বীকার করে যার লগ তাদের নিজেদের লগের চেয়ে পুরনো বা ছোট'
          },
          {
            en: 'Candidates must pay a cash fee to the leader',
            bn: 'প্রার্থীদের লিডারকে নির্দিষ্ট ফি দিতে হয়'
          },
          {
            en: 'Candidates must be running on Linux machines',
            bn: 'প্রার্থীদের অবশ্যই লিনাক্স মেশিনে চলতে হবে'
          },
          {
            en: 'The oldest hardware automatically becomes the leader',
            bn: 'সবচেয়ে পুরনো হার্ডওয়্যার স্বয়ংক্রিয়ভাবে লিডার হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can a leader overwrite committed log entries if it missed previous writes?',
          bn: 'একটি নতুন লিডার কি আগের কমিট হওয়া ডাটা মুছে ফেলতে পারে যদি সে আগের রাইটগুলো না পেয়ে থাকে?'
        },
        explanation: {
          en: 'Raft’s Election Restriction guarantees that the elected leader contains all committed entries from all previous terms.',
          bn: 'রাফটের নির্বাচন নীতি নিশ্চিত করে যে নির্বাচিত লিডারের কাছে পূর্ববর্তী সমস্ত টার্মের কমিট হওয়া ডাটা অক্ষুণ্ণ রয়েছে।'
        }
      },
      {
        id: 'cc-q2',
        kind: 'mcq',
        topic: 'leader-lease-split-brain-prevention',
        question: {
          en: 'What critical problem do Leader Leases solve in a distributed consensus cluster?',
          bn: 'বিতরণকৃত কনসেনসাস ক্লাস্টারে লিডার লিজ কোন মারাত্মক সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'They prevent an isolated, partitioned former leader from serving stale read queries after a new leader has been elected',
            bn: 'নতুন লিডার নির্বাচিত হওয়ার পর বিচ্ছিন্ন হয়ে যাওয়া সাবেক লিডার যাতে বাসি ডাটা রিড করতে না দেয় তা নিশ্চিত করে'
          },
          {
            en: 'They eliminate the need for hard disk storage',
            bn: 'তারা হার্ডডিস্ক স্টোরেজের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'They increase the CPU clock frequency',
            bn: 'তারা সিপিইউ ক্লক ফ্রিকোয়েন্সি বাড়িয়ে দেয়'
          },
          {
            en: 'They compress log files by 90 percent',
            bn: 'তারা লগ ফাইল ৯০ শতাংশ ছোট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If leader A is cut off by a network partition, how does it know whether followers have elected leader B?',
          bn: 'লিডার A নেটওয়ার্ক বিভাজনে বিচ্ছিন্ন হলে সে কীভাবে বুঝবে যে বাকিরা অন্য কাউকে লিডার বানিয়েছে কি না?'
        },
        explanation: {
          en: 'If a leader cannot renew its lease with a majority before the lease timer expires, it voluntarily steps down from serving reads.',
          bn: 'মেয়াদ শেষ হওয়ার আগে সংখ্যাগরিষ্ঠের সমর্থন নিয়ে লিজ নবায়ন করতে না পারলে লিডার নিজে থেকেই রিড সেবা বন্ধ করে দেয়।'
        }
      },
      {
        id: 'cc-q3',
        kind: 'mcq',
        topic: 'randomized-election-timeouts',
        question: {
          en: 'Why does Raft use randomized election timeouts (e.g. 150ms to 300ms) for its candidate nodes?',
          bn: 'রাফট তার প্রার্থী নোডগুলোর জন্য কেন এলোমেলো ইলেকশন টাইমআউট (যেমন ১৫০ms থেকে ৩০০ms) ব্যবহার করে?'
        },
        options: [
          {
            en: 'To prevent split-vote deadlocks where multiple candidates start elections simultaneously and split the votes equally',
            bn: 'স্প্লিট-ভোট ডেডলক রোধ করতে, যাতে একাধিক প্রার্থী একসাথে নির্বাচন শুরু করে সমান সমান ভোটে আটকে না যায়'
          },
          {
            en: 'To save electricity on data center servers',
            bn: 'ডেটা সেন্টারের বিদ্যুৎ সাশ্রয় করতে'
          },
          {
            en: 'To randomize the order of database tables',
            bn: 'ডেটাবেস টেবিলের ক্রম এলোমেলো করতে'
          },
          {
            en: 'Because computers cannot measure exact time',
            bn: 'কারণ কম্পিউটার সঠিক সময় মাপতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'If all nodes start an election at the exact same millisecond, what happens to the vote tally?',
          bn: 'সমস্ত নোড যদি ঠিক একই মিলিসেকেন্ডে নির্বাচন শুরু করে, তবে ভোটের ফলাফলের কী হবে?'
        },
        explanation: {
          en: 'Random timeouts ensure that one follower’s timer expires first, allowing it to collect votes and become leader before others time out.',
          bn: 'এলোমেলো টাইমার নিশ্চিত করে যে কোনো একটি নোডের সময় আগে শেষ হবে এবং সে অন্যদের আগে ভোট সংগ্রহ করে লিডার হতে পারবে।'
        }
      },
      {
        id: 'cc-q4',
        kind: 'mcq',
        topic: 'paxos-vs-raft-log-continuity',
        question: {
          en: 'How does log consistency in Raft differ fundamentally from Multi-Paxos when handling log replication?',
          bn: 'লগ রেপ্লিকেশনের ক্ষেত্রে রাফটের লগের ধারাবাহিকতা কীভাবে মাল্টি-প্যাক্সোস থেকে মৌলিকভাবে আলাদা?'
        },
        options: [
          {
            en: 'Raft enforces strict sequential log continuity with zero holes, while Multi-Paxos allows out-of-order log entries and gaps',
            bn: 'রাফট কোনো ফাঁকা স্থান ছাড়া কঠোর ধারাবাহিক লগ বজায় রাখে, যেখানে মাল্টি-প্যাক্সোস এলোমেলো ভুক্তি ও ফাঁকা স্থান অনুমোদন করে'
          },
          {
            en: 'Raft deletes all log entries every 5 minutes',
            bn: 'রাফট প্রতি ৫ মিনিটে সমস্ত লগ মুছে ফেলে'
          },
          {
            en: 'Multi-Paxos does not write anything to disk',
            bn: 'মাল্টি-প্যাক্সোস ডিস্কে কিছুই লেখে না'
          },
          {
            en: 'Raft only supports 1 single log entry total',
            bn: 'রাফট মোট মাত্র ১টি একক লগ ভুক্তি সমর্থন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If an entry at index 5 is committed in Raft, what is guaranteed about indices 1 through 4?',
          bn: 'রাফটে ইনডেক্স ৫ এর কোনো ডাটা কমিট হলে ইনডেক্স ১ থেকে ৪ সম্পর্কে কী নিশ্চয়তা পাওয়া যায়?'
        },
        explanation: {
          en: 'Raft’s Log Matching Property ensures that if two logs agree on an entry, they are identical in all preceding entries.',
          bn: 'রাফটের লগ ম্যাচিং বৈশিষ্ট্য নিশ্চিত করে যে কোনো একটি ভুক্তি মিলে গেলে তার আগের সমস্ত ভুক্তিও উভয় লগে হুবহু এক থাকবে।'
        }
      }
    ]
  }
};
