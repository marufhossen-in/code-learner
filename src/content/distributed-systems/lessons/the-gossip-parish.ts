import type { Lesson } from '../../../lib/types';

export const gossipParishLesson: Lesson = {
  slug: 'the-gossip-parish',
  tech: 'distributed-systems',
  title: {
    en: 'Gossip Protocols and Failure Detection — SWIM and Anti-Entropy',
    bn: 'গসিপ প্রোটোকল ও ব্যর্থতা শনাক্তকরণ: সুইম ও অ্যান্টি-এনট্রপি'
  },
  summary: {
    en: 'In massive clusters containing thousands of nodes, broadcast heartbeats require O(N^2) messages, saturating network switches and causing false-positive alarms. Gossip protocols solve this scalability bottleneck through randomized epidemic dissemination, transmitting updates across all N nodes in O(log N) time with bounded O(1) message load per node. The SWIM protocol enhances failure detection using indirect pings and incarnation-based suspicion mechanisms, preventing premature node evictions during transient packet drops. In addition, background anti-entropy protocols leverage Merkle trees to reconcile long-term state divergence in leaderless distributed storage.',
    bn: 'হাজার হাজার নোডের বিশাল ক্লাস্টারে প্রতিটি সার্ভার অন্য প্রতিটি সার্ভারকে হার্টবিট পাঠালে O(N^২) সংখ্যক বার্তার সৃষ্টি হয়, যা নেটওয়ার্ক সুইচকে জ্যাম করে এবং মিথ্যা অ্যালার্ম তৈরি করে। গসিপ প্রোটোকল এলোমেলো এপিডেমিক বা মহামারীর মতো তথ্য ছড়িয়ে দিয়ে এই স্কেলেবিলিটির সমস্যার সমাধান করে, যা নোডপ্রতি মাত্র O(1) খরচে O(log N) সময়ে সমস্ত N সংখ্যক নোডে তথ্য পৌঁছে দেয়। সুইম (SWIM) প্রোটোকল পরোক্ষ পিং এবং ইনকার্নেশন-ভিত্তিক সন্দেহ ব্যবস্থার মাধ্যমে নেটওয়ার্কের সাময়িক ত্রুটিতে অহেতুক নোড বাতিল হওয়া প্রতিহত করে। এছাড়া ব্যাকগ্রাউন্ড অ্যান্টি-এনট্রপি মারকেল ট্রির সাহায্যে দীর্ঘমেয়াদী তথ্যের অমিল দূর করে।'
  },
  minutes: 27,
  nextLesson: {
    slug: 'the-two-phase-duel',
    tech: 'distributed-systems',
    title: {
      en: 'Distributed Transactions — 2PC, 3PC, and the Saga Pattern',
      bn: 'বিতরণকৃত ট্রানজ্যাকশন: ২PC, ৩PC এবং সাগা প্যাটার্ন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'gossip-epidemic-scaling',
      text: {
        en: 'The Epidemic Mathematics of Gossip Protocols',
        bn: 'গসিপ প্রোটোকলের এপিডেমিক গাণিতিক ভিত্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you manage large-scale cloud infrastructure with thousands of server nodes, having every machine ping every other machine is computationally unsustainable. A full-mesh heartbeat architecture generates quadratic network traffic, swamping datacenter switches with millions of redundant pings.',
        bn: 'যখন আপনি হাজার হাজার সার্ভার নোড বিশিষ্ট বড় ক্লাউড অবকাঠামো পরিচালনা করেন, তখন প্রতিটি মেশিন অন্য প্রতিটি মেশিনকে পিং করতে গেলে নেটওয়ার্কের ওপর মারাত্মক চাপ পড়ে। ফুল-মেশ হার্টবিট সিস্টেমে নোডের সংখ্যা বৃদ্ধির সাথে সাথে বার্তার সংখ্যা বর্গাকারে বৃদ্ধি পেয়ে সুইচগুলোকে অকেজো করে তোলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Gossip protocols, inspired by epidemic disease spread, solve this problem with randomized peer-to-peer communication. Instead of broadcasting to all nodes, each server periodically selects a small constant number of random peers to share state updates. Mathematically, a state update spreads across all N nodes in O(log N) time while keeping per-node network overhead strictly constant.',
        bn: 'এপিডেমিক বা মহামারী সংক্রমণের মতো ছড়িয়ে পড়ার নীতি থেকে অনুপ্রাণিত হয়ে গসিপ প্রোটোকল এই সমস্যার সমাধান করে। সমস্ত নোডে একসাথে বার্তা না পাঠিয়ে প্রতিটি সার্ভার নির্দিষ্ট সময় পরপর সামান্য কয়েকটি এলোমেলো সমকক্ষ নোডের সাথে তথ্য বিনিময় করে। গাণিতিকভাবে মাত্র O(log N) সময়ে সমস্ত N নোডে তথ্য পৌঁছে যায়, অথচ নোডপ্রতি নেটওয়ার্ক খরচ সম্পূর্ণ ধ্রুবক থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'gossip-protocol',
          def: {
            en: 'A decentralized peer-to-peer communication protocol where nodes periodically exchange state with randomly selected peers.',
            bn: 'একটি বিকেন্দ্রীভূত যোগাযোগ প্রোটোকল যেখানে নোডগুলো নির্দিষ্ট সময় পরপর এলোমেলোভাবে নির্বাচিত সমকক্ষ নোডের সাথে তথ্য আদান-প্রদান করে।'
          }
        },
        {
          term: 'epidemic-dissemination',
          def: {
            en: 'The exponential spread of cluster metadata across N nodes in O(log N) time, mirroring biological viral spread.',
            bn: 'জৈবিক ভাইরাসের মতো O(log N) সময়ে দ্রুত গতিতে সমস্ত N সংখ্যক নোডে ক্লাস্টারের তথ্য ছড়িয়ে পড়ার প্রক্রিয়া।'
          }
        },
        {
          term: 'swim-protocol',
          def: {
            en: 'A failure detector protocol using direct pings, indirect k-peer pings, and suspicion timers to eliminate false alarms.',
            bn: 'একটি ত্রুটি শনাক্তকরণ প্রোটোকল যা প্রত্যক্ষ পিং, পরোক্ষ পিং এবং সন্দেহ টাইমার ব্যবহারের মাধ্যমে ভুল অ্যালার্ম প্রতিহত করে।'
          }
        },
        {
          term: 'anti-entropy',
          def: {
            en: 'A background synchronization mechanism using Merkle trees to detect and resolve subtle state discrepancies between replicas.',
            bn: 'মারকেল ট্রি ব্যবহারের মাধ্যমে নোডগুলোর মধ্যকার সূক্ষ্ম তথ্যের অমিল শনাক্ত ও সমাধান করার একটি ব্যাকগ্রাউন্ড প্রক্রিয়া।'
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
      id: 'heartbeat-vs-gossip-table',
      text: {
        en: 'Scalability Comparison: All-to-All Heartbeats vs Gossip SWIM',
        bn: 'স্কেলেবিলিটি তুলনা: অল-টু-অল হার্টবিট বনাম গসিপ সুইম (SWIM)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Comparing full-mesh heartbeats against the SWIM gossip failure detector illustrates why modern distributed databases choose epidemic protocols at scale.',
        bn: 'ফুল-মেশ হার্টবিট এবং সুইম (SWIM) গসিপ প্রোটোকলের তুলনা দেখলে বোঝা যায় কেন আধুনিক বিতরণকৃত সিস্টেমগুলো বড় পরিসরে এপিডেমিক মডেল ব্যবহার করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Feature', bn: 'পরিমাপ / বৈশিষ্ট্য' },
        { en: 'Full-Mesh Heartbeats', bn: 'ফুল-মেশ হার্টবিট' },
        { en: 'Gossip SWIM Protocol', bn: 'গসিপ সুইম (SWIM) প্রোটোকল' }
      ],
      rows: [
        [
          { en: 'Per-Node Message Load', bn: 'নোডপ্রতি বার্তার চাপ' },
          { en: 'O(N) linear message load per node', bn: 'নোডপ্রতি O(N) রৈখিক বার্তার চাপ' },
          { en: 'O(1) constant message load per period', bn: 'সময়প্রতি O(1) ধ্রুবক বার্তার চাপ' }
        ],
        [
          { en: 'Cluster Network Overhead', bn: 'ক্লাস্টারের মোট নেটওয়ার্ক চাপ' },
          { en: 'O(N^2) quadratic network explosion', bn: 'O(N^২) বর্গাকার নেটওয়ার্ক বিস্ফোরণ' },
          { en: 'O(N log N) bounded linear scalability', bn: 'O(N log N) নিয়ন্ত্রিত রৈখিক স্কেলেবিলিটি' }
        ],
        [
          { en: 'Network Flap Resilience', bn: 'নেটওয়ার্ক ড্রপ প্রতিরোধ' },
          { en: 'Prone to false alarms on temporary packet loss', bn: 'সাময়িক প্যাকেট ড্রপে মিথ্যা অ্যালার্ম তৈরি হয়' },
          { en: 'Robust against packet drops via indirect pings', bn: 'পরোক্ষ পিং ব্যবহারের মাধ্যমে অত্যন্ত টেকসই' }
        ],
        [
          { en: 'Convergence Speed', bn: 'তথ্য ছড়ানোর গতি' },
          { en: 'Fast on tiny clusters, collapses on scale', bn: 'ছোট ক্লাস্টারে দ্রুত হলেও বড় ক্লাস্টারে ভেঙে পড়ে' },
          { en: 'Predictable O(log N) logarithmic scaling', bn: 'অনুমানযোগ্য O(log N) লগারিদমিক বিস্তার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-gossip-code',
      text: {
        en: 'Executable Gossip Dissemination Implementation',
        bn: 'গসিপ প্রোটোকল ও এপিডেমিক তথ্য বিস্তারের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates epidemic dissemination across 4 nodes. Node A discovers configuration version v2.0. In Round 1, A gossips with B. In Round 2, A gossips with C while B gossips with D. Within just 2 rounds, all 4 nodes have converged to the new configuration.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি নোডের ক্লাস্টারে এপিডেমিক তথ্য বিস্তার সিমুলেট করে। নোড A নতুন কনফিগারেশন v2.0 গ্রহণ করে। রাউন্ড ১ এ A, B এর সাথে তথ্য বিনিময় করে। রাউন্ড ২ এ A, C এর সাথে এবং B, D এর সাথে গসিপ করে। মাত্র ২টি রাউন্ডের মধ্যে ৪টি নোডই নতুন কনফিগারেশনে আপডেট হয়ে যায়।'
      }
    },
    {
      type: 'code',
      code: `class GossipNode {
  constructor(id) {
    this.id = id;
    this.state = new Map();
  }

  update(key, val, version) {
    this.state.set(key, { val, version });
  }

  gossipWith(peer) {
    // Exchange states and keep entries with newer version numbers
    for (const [key, value] of this.state) {
      const peerEntry = peer.state.get(key);
      if (!peerEntry || peerEntry.version < value.version) {
        peer.state.set(key, value);
      }
    }
  }
}

// Instantiate 4 nodes in cluster: A, B, C, D
const nodes = ['A', 'B', 'C', 'D'].map(id => new GossipNode(id));
// Node A receives new configuration update
nodes[0].update('config_version', 'v2.0', 1);

// Round 1: Node A gossips with Node B
nodes[0].gossipWith(nodes[1]);

// Round 2: Node A gossips with Node C, and Node B gossips with Node D
nodes[0].gossipWith(nodes[2]);
nodes[1].gossipWith(nodes[3]);

const informed = nodes.filter(n => n.state.get('config_version')?.val === 'v2.0').length;
console.log('Total nodes updated after 2 rounds:', informed, 'of 4');
// Output: Total nodes updated after 2 rounds: 4 of 4`
    },
    {
      type: 'heading',
      id: 'swim-suspicion-mechanism',
      text: {
        en: 'The SWIM Suspicion Mechanism and Anti-Entropy Merkle Trees',
        bn: 'সুইম (SWIM) সন্দেহ প্রক্রিয়া এবং অ্যান্টি-এনট্রপি মারকেল ট্রি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The SWIM protocol improves failure detection through two innovations: Indirect Probing and the Suspicion Mechanism. If node A sends a direct ping to node B and receives no reply, A does not mark B as dead. Instead, A asks k random peer nodes to ping B on its behalf. If those indirect pings fail, B is placed in the SUSPECT state. If node B is still alive, it refutes the suspicion by incrementing its Incarnation Number and broadcasting an ALIVE message. In addition, databases like Apache Cassandra periodically run Anti-Entropy using Merkle trees to compare hash ranges and repair long-term divergences with minimal bandwidth.',
        bn: 'সুইম (SWIM) প্রোটোকল দুটি নতুন কৌশলের মাধ্যমে ত্রুটি শনাক্তকরণকে নিখুঁত করে: পরোক্ষ পিং (Indirect Probing) এবং সন্দেহ ব্যবস্থা (Suspicion Mechanism)। নোড A যদি নোড B কে সরাসরি পিং করে সাড়া না পায়, তবে সে সাথে সাথে B কে মৃত ঘোষণা করে না। বরং A আরও k সংখ্যক এলোমেলো নোডকে অনুরোধ করে B কে পিং করতে। যদি সেগুলোও ব্যর্থ হয়, তবে B কে সাসপেক্ট (SUSPECT) অবস্থায় রাখা হয়। নোড B জীবিত থাকলে সে নিজের ইনকার্নেশন নম্বর এক বাড়িয়ে একটি এলাইভ (ALIVE) বার্তা পাঠিয়ে সন্দেহ খণ্ডন করে। তাছাড়া অ্যাপাচি ক্যাসান্ড্রার মতো সিস্টেমগুলো মারকেল ট্রি ব্যবহার করে ব্যাকগ্রাউন্ডে অ্যান্টি-এনট্রপি চালায়, যা ন্যূনতম ব্যান্ডউইথ খরচ করে তথ্যের অমিল দূর করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Constant overhead per node: Gossip protocols limit network traffic to O(1) messages per node per period.',
          bn: 'নোডপ্রতি ধ্রুবক চাপ: গসিপ প্রোটোকল প্রতি নোডের ট্রাফিক O(1) ধ্রুবক সংখ্যায় সীমাবদ্ধ রাখে।'
        },
        {
          en: 'Logarithmic dissemination: Cluster updates reach all N nodes in O(log N) time through epidemic spreading.',
          bn: 'লগারিদমিক বিস্তার: এপিডেমিক বিস্তারের মাধ্যমে O(log N) সময়ে সমস্ত নোডে তথ্য পৌঁছে যায়।'
        },
        {
          en: 'SWIM indirect pings: Routing pings through k peers avoids false alarms caused by localized network dropouts.',
          bn: 'সুইম পরোক্ষ পিং: k সংখ্যক নোডের মাধ্যমে পরোক্ষ পিং চালিয়ে সাময়িক ড্রপের কারণে ভুল অ্যালার্ম প্রতিহত করা হয়।'
        },
        {
          en: 'Anti-entropy with Merkle trees: Hierarchical cryptographic hashes quickly pinpoint missing data ranges across replicas.',
          bn: 'মারকেল ট্রির অ্যান্টি-এনট্রপি: হায়ারার্কিক্যাল হ্যাশের সাহায্যে নোডগুলোর মাঝে হারানো ডাটা দ্রুত শনাক্ত ও সংশোধন করা হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gp-ex1',
      kind: 'mcq',
      topic: 'gossip-scaling-math',
      question: {
        en: 'In a cluster of N nodes using a gossip protocol, how many rounds does it take for a state update to reach all nodes with high probability?',
        bn: 'গসিপ প্রোটোকল ব্যবহার করা N নোডের ক্লাস্টারে একটি তথ্য উচ্চ সম্ভাবনায় সমস্ত নোডে পৌঁছাতে কতটি রাউন্ড সময় লাগে?'
      },
      options: [
        {
          en: 'O(log N) rounds, spreading exponentially like an epidemic',
          bn: 'O(log N) রাউন্ড, মহামারীর মতো সূচকীয় হারে ছড়িয়ে পড়ার মাধ্যমে'
        },
        {
          en: 'O(N^3) rounds',
          bn: 'O(N^৩) রাউন্ড'
        },
        {
          en: 'Exactly 1 round for any cluster size',
          bn: 'ক্লাস্টারের যেকোনো আকারের জন্য ঠিক ১টি রাউন্ড'
        },
        {
          en: 'O(N!) factorial rounds',
          bn: 'O(N!) ফ্যাক্টোরিয়াল রাউন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: 'If each node tells 2 new nodes in each round, the number of informed nodes doubles every step (2, 4, 8, 16...).',
        bn: 'প্রতি রাউন্ডে প্রত্যেকে ২টি নতুন নোডকে জানালে প্রতি ধাপে জানা নোডের সংখ্যা দ্বিগুণ হতে থাকে (২, ৪, ৮, ১৬...)।'
      },
      explanation: {
        en: 'Epidemic rumor-spreading exhibits exponential growth, requiring only logarithmic O(log N) rounds to infect the entire network.',
        bn: 'এপিডেমিক বিস্তারের প্রকৃতি সূচকীয় হওয়ায় পুরো নেটওয়ার্কে তথ্য পৌঁছাতে মাত্র O(log N) রাউন্ড সময় লাগে।'
      }
    },
    {
      id: 'gp-ex2',
      kind: 'mcq',
      topic: 'swim-indirect-ping-purpose',
      question: {
        en: 'Why does the SWIM protocol perform "indirect pings" through k peer nodes before declaring a node faulty?',
        bn: 'কোনো নোডকে ত্রুটিপূর্ণ ঘোষণার আগে সুইম (SWIM) প্রোটোকল কেন k সংখ্যক নোডের মাধ্যমে "পরোক্ষ পিং" পাঠায়?'
      },
      options: [
        {
          en: 'To avoid false-positive alarms caused by a single congested network link between the prober and the target node',
          bn: 'পরীক্ষক এবং লক্ষ্য নোডের মধ্যকার কোনো একক নেটওয়ার্ক লিঙ্কের সাময়িক জ্যামের কারণে ভুল অ্যালার্ম প্রতিহত করতে'
        },
        {
          en: 'To reboot the remote server’s operating system',
          bn: 'রিমোট সার্ভারের অপারেটিং সিস্টেম রিবুট করার জন্য'
        },
        {
          en: 'To calculate the geographic distance in kilometers',
          bn: 'কিলোমিটারে ভৌগোলিক দূরত্ব গণনা করার জন্য'
        },
        {
          en: 'Because indirect pings consume zero electricity',
          bn: 'কারণ পরোক্ষ পিং শূন্য বিদ্যুৎ খরচ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If node A cannot reach node B, could node C still have a clear network path to node B?',
        bn: 'নোড A যদি B এর কাছে পৌঁছাতে না পারে, তবে নোড C এর সাথে কি B এর সংযোগ ঠিক থাকতে পারে?'
      },
      explanation: {
        en: 'Indirect pings route around localized packet drops, preventing healthy nodes from being mistakenly marked dead.',
        bn: 'পরোক্ষ পিং সাময়িক লোকাল ড্রপ এড়িয়ে অন্য পথ দিয়ে যোগাযোগ করে সুস্থ নোডকে অহেতুক মৃত ঘোষণা থেকে রক্ষা করে।'
      }
    },
    {
      id: 'gp-ex3',
      kind: 'mcq',
      topic: 'merkle-tree-anti-entropy',
      question: {
        en: 'How do Merkle Trees minimize network bandwidth consumption during background Anti-Entropy synchronization?',
        bn: 'ব্যাকগ্রাউন্ড অ্যান্টি-এনট্রপি সিঙ্ক্রোনাইজেশনের সময় মারকেল ট্রি কীভাবে নেটওয়ার্ক ব্যান্ডউইথ খরচ কমিয়ে আনে?'
      },
      options: [
        {
          en: 'Replicas compare root hashes first; if root hashes match, all data is identical and zero records need to be transmitted',
          bn: 'নোডগুলো প্রথমে রুট হ্যাশ তুলনা করে; রুট হ্যাশ মিলে গেলে সমস্ত ডাটা হুবহু এক বলে নিশ্চিত হয় এবং কোনো রেকর্ড পাঠানোর প্রয়োজন হয় না'
        },
        {
          en: 'By compressing all data using ZIP format',
          bn: 'সমস্ত ডাটাকে জিপ ফরম্যাটে কম্প্রেস করার মাধ্যমে'
        },
        {
          en: 'By deleting half of the database rows',
          bn: 'ডেটাবেসের অর্ধেক সারি মুছে ফেলে'
        },
        {
          en: 'By turning off the network card during nights',
          bn: 'রাতের বেলা নেটওয়ার্ক কার্ড বন্ধ রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In a tree of cryptographic hashes, what does it mean if the top root hash is identical between two servers?',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ ট্রিতে শীর্ষ রুট হ্যাশ মিলে যাওয়ার অর্থ ভেতরের ডাটা সম্পর্কে কী নির্দেশ করে?'
      },
      explanation: {
        en: 'Comparing cryptographic hash trees allows nodes to instantly verify equality and only stream specific branches that differ.',
        bn: 'হ্যাশ ট্রি তুলনার মাধ্যমে নোডগুলো তাৎক্ষণিকভাবে তথ্যের মিল নিশ্চিত করতে পারে এবং কেবল অমিল থাকা শাখাগুলো আদান-প্রদান করে।'
      }
    }
  ],
  quiz: {
    id: 'the-gossip-parish-quiz',
    title: {
      en: 'Gossip Protocols and SWIM Quiz',
      bn: 'গসিপ প্রোটোকল এবং সুইম কুইজ'
    },
    questions: [
      {
        id: 'gp-q1',
        kind: 'mcq',
        topic: 'swim-incarnation-number-refutation',
        question: {
          en: 'In the SWIM failure detector, what action does a healthy node take when it receives a rumor that it has been marked as SUSPECT?',
          bn: 'সুইম (SWIM) ফেইলিউর ডিটেক্টরে কোনো সুস্থ নোড যদি শুনতে পায় যে তাকে সাসপেক্ট (SUSPECT) হিসেবে চিহ্নিত করা হয়েছে, তবে সে কী পদক্ষেপ নেয়?'
        },
        options: [
          {
            en: 'It increments its local Incarnation Number and broadcasts an ALIVE message to refute the false suspicion across the cluster',
            bn: 'সে নিজের ইনকার্নেশন নম্বর এক বাড়িয়ে ক্লাস্টারে একটি এলাইভ (ALIVE) বার্তা পাঠিয়ে মিথ্যা সন্দেহ বাতিল করে দেয়'
          },
          {
            en: 'It immediately powers off its motherboard',
            bn: 'সে সাথে সাথে মাদারবোর্ডের বিদ্যুৎ বন্ধ করে দেয়'
          },
          {
            en: 'It deletes all user accounts from the database',
            bn: 'সে ডেটাবেস থেকে সমস্ত ব্যবহারকারীর অ্যাকাউন্ট মুছে ফেলে'
          },
          {
            en: 'It resigns from the internet permanently',
            bn: 'সে চিরতরে ইন্টারনেট সংযোগ পরিত্যাগ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Higher incarnation numbers override lower incarnation suspicions. How does the node prove it is alive?',
          bn: 'উচ্চ ইনকার্নেশন নম্বর পুরনো সন্দেহকে বাতিল করে দেয়। নোডটি কীভাবে প্রমাণ করে যে সে জীবিত?'
        },
        explanation: {
          en: 'A node refutes false suspicions by broadcasting an ALIVE message with a higher incarnation number, which overrides the suspect rumor.',
          bn: 'একটি নোড উচ্চতর ইনকার্নেশন নম্বর সহ এলাইভ বার্তা পাঠিয়ে মিথ্যা সন্দেহ দূর করে এবং ক্লাস্টারে নিজের অবস্থান পুনর্বহাল করে।'
        }
      },
      {
        id: 'gp-q2',
        kind: 'mcq',
        topic: 'all-to-all-heartbeat-bottleneck',
        question: {
          en: 'Why does a full-mesh (all-to-all) heartbeat strategy fail as a cluster scales to 10000 servers?',
          bn: 'একটি ক্লাস্টার যখন ১০০০০ সার্ভারে পৌঁছায়, তখন অল-টু-অল হার্টবিট কৌশলটি কেন অচল হয়ে পড়ে?'
        },
        options: [
          {
            en: 'Generating O(N^2) messages creates 100 million pings per second, overwhelming network switch buffers and server CPU interrupts',
            bn: 'O(N^২) বার্তার কারণে প্রতি সেকেন্ডে ১০০ মিলিয়ন পিং তৈরি হয়, যা নেটওয়ার্ক সুইচের বাফার এবং সার্ভারের সিপিইউকে অচল করে তোলে'
          },
          {
            en: 'Because computer hardware cannot count above 1000',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার ১০০০ এর বেশি গণনা করতে পারে না'
          },
          {
            en: 'Because data centers run out of IP addresses',
            bn: 'কারণ ডেটা সেন্টারের আইপি অ্যাড্রেস ফুরিয়ে যায়'
          },
          {
            en: 'Because all Ethernet cables melt under heat',
            bn: 'কারণ সমস্ত ইথারনেট তার তাপে গলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: '10000 nodes pinging 10000 nodes produces 10000 * 10000 = 100000000 packets per ping interval.',
          bn: '১০০০০ নোড প্রত্যেকে ১০০০০ জনকে পিং করলে প্রতি বিরতিতে ১০০০০ * ১০০০০ = ১০০০০০০০০ প্যাকেট তৈরি হয়।'
        },
        explanation: {
          en: 'The quadratic explosion of full-mesh traffic saturates switches, causing packet drops that trigger cascade false failure alarms.',
          bn: 'বর্গাকার হারে বৃদ্ধি পাওয়া ট্রাফিক নেটওয়ার্ক সুইচকে জ্যাম করে এবং প্যাকেট ড্রপ ঘটিয়ে একের পর এক মিথ্যা অ্যালার্ম তৈরি করে।'
        }
      },
      {
        id: 'gp-q3',
        kind: 'mcq',
        topic: 'push-vs-pull-gossip',
        question: {
          en: 'In gossip dissemination, how does Push-Pull gossip compare to pure Push gossip during the final convergence phase?',
          bn: 'গসিপ বিস্তারে শেষ ধাপে সমস্ত নোডের কাছে তথ্য পৌঁছাতে পিউর পুশ পদ্ধতির তুলনায় পুশ-পুল পদ্ধতি কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'Push-Pull converges significantly faster at the end because uninformed nodes actively pull updates from randomly queried informed peers',
            bn: 'পুশ-পুল শেষ ধাপে অনেক দ্রুত কাজ শেষ করে কারণ অজানা নোডগুলো সক্রিয়ভাবে জানা নোড থেকে তথ্য টেনে নেয়'
          },
          {
            en: 'Push-Pull deletes all data on the target node',
            bn: 'পুশ-পুল লক্ষ্য নোডের সমস্ত ডাটা মুছে দেয়'
          },
          {
            en: 'Pure Push uses 0 bits of network traffic',
            bn: 'পিউর পুশ ০ বিট নেটওয়ার্ক ট্রাফিক ব্যবহার করে'
          },
          {
            en: 'There is no difference between them',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'When 90% of nodes already have the update, finding the remaining 10% by random push is slow, but random pull finds updates quickly.',
          bn: '৯০% নোড আপডেট পেয়ে গেলে বাকি ১০% কে খুঁজে পুশ করা কঠিন, কিন্তু অজানা নোডগুলো টানলে খুব দ্রুত পেয়ে যায়।'
        },
        explanation: {
          en: 'In the tail phase of dissemination, pull gossip avoids the coupon collector’s problem, accelerating total cluster convergence.',
          bn: 'বিস্তারের শেষ ধাপে পুল পদ্ধতি কুপন কালেক্টরের সমস্যা দূর করে এবং পুরো ক্লাস্টারে দ্রুত তথ্য সমতা আনে।'
        }
      },
      {
        id: 'gp-q4',
        kind: 'mcq',
        topic: 'cassandra-gossip-metadata',
        question: {
          en: 'What type of cluster metadata is typically exchanged via Gossip protocols in systems like Apache Cassandra or HashiCorp Consul?',
          bn: 'অ্যাপাচি ক্যাসান্ড্রা বা কনসুলের মতো সিস্টেমে সাধারণত কোন ধরনের ক্লাস্টার মেটাডাটা গসিপ প্রোটোকলের মাধ্যমে আদান-প্রদান করা হয়?'
        },
        options: [
          {
            en: 'Node liveness status, cluster membership, ring token ownership ranges, and service discovery health checks',
            bn: 'নোডের সচলতার অবস্থা, ক্লাস্টার সদস্যপদ, রিং টোকেন মালিকানার রেঞ্জ এবং সার্ভিস ডিসকভারি হেলথ চেক'
          },
          {
            en: 'High-definition video movie streams',
            bn: 'উচ্চ রেজোলিউশনের ভিডিও মুভি স্ট্রিম'
          },
          {
            en: 'User credit card security PIN codes',
            bn: 'ব্যবহারকারীর ক্রেডিট কার্ডের গোপন পিন কোড'
          },
          {
            en: 'Operating system kernel source code',
            bn: 'অপারেটিং সিস্টেমের কার্নেল সোর্স কোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Gossip is designed for small, high-value cluster state and membership coordination, not bulk data transfer.',
          bn: 'গসিপ ক্লাস্টারের ছোট কিন্তু গুরুত্বপূর্ণ মেম্বারশিপ ও নোডের অবস্থা জানানোর জন্য তৈরি, ভারী ফাইল পাঠানোর জন্য নয়।'
        },
        explanation: {
          en: 'Gossip efficiently synchronizes topology, schema versions, node states, and failure statuses without central coordinators.',
          bn: 'গসিপ কোনো কেন্দ্রীয় সমন্বয়কারী ছাড়াই ক্লাস্টারের কাঠামো, স্কিমা ভার্সন এবং নোডের অবস্থা কার্যকরভাবে সমন্বয় করে।'
        }
      }
    ]
  }
};
