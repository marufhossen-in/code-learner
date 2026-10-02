import type { Lesson } from '../../../lib/types';

export const cycleHuntLesson: Lesson = {
  slug: 'the-cycle-hunt',
  tech: 'graphs',
  title: {
    en: 'The Cycle Hunt — Three Colors and Back-Edge Detection',
    bn: 'চক্র শিকার: তিন রঙ এবং ব্যাক-এজ শনাক্তকরণ'
  },
  summary: {
    en: 'In production software systems, circular dependencies trigger catastrophic failures, including distributed deadlocks, build pipeline freezes, and recursive stack exhaustion. Simple boolean visited checks fail on directed graphs because completed branches can be mistakenly accused of forming cycles. We formalize the Three-Color DFS algorithm (White, Gray, Black) for directed graphs, analyze the parent exemption rule for undirected graphs, and reconstruct the exact sequence of vertices participating in circular dependency loops in O(V + E) time.',
    bn: 'প্রোডাকশন সফটওয়্যার সিস্টেমে চক্রাকার নির্ভরতা মারাত্মক বিপর্যয় ডেকে আনে, যেমন ডেডলক, বিল্ড পাইপলাইন আটকে যাওয়া এবং রিকার্সিভ মেমরি ধস। নির্দেশিত গ্রাফে সাধারণ বুলিয়ান ভিজিটেড চেক ব্যর্থ হয় কারণ সম্পন্ন হওয়া শাখাকেও তা ভুলবশত চক্র মনে করতে পারে। আমরা নির্দেশিত গ্রাফের জন্য তিন-রঙের DFS অ্যালগরিদম (সাদা, ধূসর, কালো) এবং অমুখী গ্রাফের প্যারেন্ট নিয়ম বিশ্লেষণ করি এবং O(V + E) সময়ে চক্রাকার লুপের সঠিক নোড ক্রমটি বের করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'kahn-and-the-build-order',
    tech: 'graphs',
    title: {
      en: 'Kahn’s Algorithm — Topological Sort and In-Degree Scheduling',
      bn: 'কানের অ্যালগরিদম: টপোলজিক্যাল সর্ট এবং ইন-ডিগ্রি শিডিউলিং'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'circular-dependency-crisis',
      text: {
        en: 'The Danger of Loops: Deadlocks and Circular Imports',
        bn: 'চক্রের বিপদ: ডেডলক এবং সার্কুলার ইমপোর্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your microservices or modules wait on each other indefinitely, systems lock up. In build tools like Vite and webpack, a circular import where module A imports B and module B imports A causes bundlers to emit runtime undefined values. In operating systems, circular resource dependencies form classical deadlocks.',
        bn: 'যখন আপনার মাইক্রোসার্ভিস বা মডিউল পরস্পরের উত্তরের জন্য অনির্দিষ্টকাল অপেক্ষা করে, তখন সম্পূর্ণ সিস্টেম অচল হয়ে পড়ে। আধুনিক বিল্ড টুলগুলোতে যখন মডিউল A মডিউল B কে ইমপোর্ট করে এবং B পুনরায় A কে চায়, তখন রানটাইমে আনডিফাইন্ড ভ্যালু বা ক্র্যাশ ঘটে। অপারেটিং সিস্টেমে এমন বৃত্তাকার নির্ভরতাই ডেডলক তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Detecting cycles requires structural rigor. In an undirected graph, checking if an adjacent node is already visited suffices, provided you exempt your immediate parent node. In a directed graph, a simple boolean visited flag fails because reaching a node in an already completed branch is completely safe. Directed graphs require a three-state coloring model.',
        bn: 'চক্র শনাক্ত করতে সুনির্দিষ্ট কাঠামোগত নিয়মের প্রয়োজন হয়। একটি অমুখী গ্রাফে কোনো প্রতিবেশী পূর্বে পরিদর্শিত কি না তা দেখাই যথেষ্ট, যদি আপনি সরাসরি অভিভাবক নোডটিকে ছাড় দেন। কিন্তু নির্দেশিত গ্রাফে সাধারণ বুলিয়ান ফ্ল্যাগ ব্যর্থ হয় কারণ পূর্বে সম্পন্ন হওয়া কোনো নোডে ধার থাকা সম্পূর্ণ নিরাপদ। নির্দেশিত গ্রাফে তাই তিন স্তরের রঙের মডেল আবশ্যক।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'three-color-dfs',
          def: {
            en: 'A cycle detection algorithm tracking nodes across three states: 0 unvisited (White), 1 active in call stack (Gray), and 2 fully completed (Black).',
            bn: 'তিনটি অবস্থায় নোড ট্র্যাক করার অ্যালগরিদম: ০ অপরিদর্শিত (সাদা), ১ স্ট্যাকে সক্রিয় (ধূসর) এবং ২ সম্পন্ন (কালো)।'
          }
        },
        {
          term: 'back-edge',
          def: {
            en: 'An edge pointing from a descendant to an active ancestor currently marked as Gray in the DFS call stack, confirming a directed cycle.',
            bn: 'কোনো অধস্তন নোড থেকে কল স্ট্যাকে থাকা সক্রিয় ধূসর পূর্বপুরুষের দিকে নির্দেশিত ধার যা সরাসরি চক্র প্রমাণ করে।'
          }
        },
        {
          term: 'parent-exemption',
          def: {
            en: 'The rule in undirected cycle detection ignoring the edge leading back to the immediate parent who initiated the current DFS call.',
            bn: 'অমুখী গ্রাফে চক্র খোঁজার সময় যে অভিভাবক নোড থেকে বর্তমান নোডে আসা হয়েছে তাকে বাদ দেওয়ার নিয়ম।'
          }
        },
        {
          term: 'directed-acyclic-graph',
          def: {
            en: 'A directed graph containing zero directed cycles (a DAG), enabling valid linear topological orderings.',
            bn: 'এমন একটি নির্দেশিত গ্রাফ যাতে কোনো চক্র থাকে না (DAG), যা টপোলজিক্যাল ক্রম তৈরি করতে পারে।'
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
      id: 'directed-vs-undirected-table',
      text: {
        en: 'Architectural Comparison: Cycle Detection Mechanics',
        bn: 'কাঠামোগত তুলনা: চক্র শনাক্তকরণের কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Directed and undirected graphs obey different topological laws. An undirected edge is inherently bidirectional, requiring a parent check to avoid trivial backtracking. Directed graphs require distinguishing active stack ancestors from completed siblings using three-state coloring.',
        bn: 'নির্দেশিত এবং অমুখী গ্রাফ ভিন্ন ভিন্ন টপোলজিক্যাল নিয়ম মেনে চলে। অমুখী ধার স্বভাবতই উভয়মুখী হওয়ায় আগের অভিভাবককে বাদ দেওয়ার নিয়ম লাগে। নির্দেশিত গ্রাফে সক্রিয় পূর্বপুরুষদের সাথে সম্পন্ন হওয়া নোডগুলোকে আলাদা করতে তিন রঙের কৌশল ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Graph Category', bn: 'গ্রাফের ধরন' },
        { en: 'State Tracking Model', bn: 'অবস্থা ট্র্যাকিং মডেল' },
        { en: 'Cycle Trigger Condition', bn: 'চক্র শনাক্তের শর্ত' },
        { en: 'Special Exemption Rule', bn: 'বিশেষ ছাড়ের নিয়ম' }
      ],
      rows: [
        [
          { en: 'Undirected Graph', bn: 'অমুখী গ্রাফ' },
          { en: 'Boolean visited array / set', bn: 'বুলিয়ান ভিজিটেড অ্যারে বা সেট' },
          { en: 'Visited neighbor != parent', bn: 'পরিদর্শিত প্রতিবেশী != প্যারেন্ট' },
          { en: 'Exempt the arrival parent edge', bn: 'যে ধার দিয়ে এসেছি তাকে বাদ দিতে হয়' }
        ],
        [
          { en: 'Directed Graph', bn: 'নির্দেশিত গ্রাফ' },
          { en: 'Three colors: 0 White, 1 Gray, 2 Black', bn: 'তিন রঙ: ০ সাদা, ১ ধূসর, ২ কালো' },
          { en: 'Target neighbor is state 1 (Gray)', bn: 'গন্তব্য নোডটি অবস্থা ১ (ধূসর)' },
          { en: 'Cross edges (state 2 Black) are safe', bn: 'ক্রস ধারগুলো (অবস্থা ২ কালো) সম্পূর্ণ নিরাপদ' }
        ],
        [
          { en: 'Tree Structure', bn: 'ট্রি কাঠামো' },
          { en: 'Single parent hierarchy', bn: 'একক অভিভাবক হায়ারার্কি' },
          { en: 'Never triggers (acyclic by law)', bn: 'কখনোই চক্র ঘটে না' },
          { en: 'No exemptions required', bn: 'কোনো ছাড়ের প্রয়োজন নেই' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-cycle-code',
      text: {
        en: 'Executable Three-Color Cycle Detection Implementation',
        bn: 'তিন-রঙের সাহায্যে চক্র শনাক্ত ও পথ পুনর্গঠনের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs a directed graph with 4 vertices containing a cycle B -> C -> D -> B. Notice how encountering active Gray node B triggers cycle detection, and parent backtracking prints the complete circular path.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি শীর্ষবিন্দু নিয়ে একটি নির্দেশিত গ্রাফ তৈরি করে যাতে B -> C -> D -> B চক্রটি রয়েছে। লক্ষ্য করুন কীভাবে সক্রিয় ধূসর নোড B কে দেখার সাথে সাথে চক্র ধরা পড়ে এবং প্যারেন্ট ব্যাকট্র্যাকিং পূর্ণ বৃত্তাকার পথটি প্রকাশ করে।'
      }
    },
    {
      type: 'code',
      code: `class CycleDetector {
  constructor() {
    this.adj = new Map();
  }

  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    this.adj.get(u).push(v);
  }

  findCycle(vertices) {
    // 0: White (unvisited), 1: Gray (in call stack), 2: Black (finished)
    const color = new Map();
    const parent = new Map();
    let cycle = null;

    for (const v of vertices) color.set(v, 0);

    const dfs = (u) => {
      color.set(u, 1);

      for (const v of this.adj.get(u) || []) {
        if (cycle) return;

        if (color.get(v) === 1) {
          const path = [v];
          let curr = u;
          while (curr !== v) {
            path.push(curr);
            curr = parent.get(curr);
          }
          path.push(v);
          cycle = path.reverse();
          return;
        }

        if (color.get(v) === 0) {
          parent.set(v, u);
          dfs(v);
        }
      }

      color.set(u, 2);
    };

    for (const v of vertices) {
      if (color.get(v) === 0 && !cycle) dfs(v);
    }

    return cycle;
  }
}

const g = new CycleDetector();
g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'D');
g.addEdge('D', 'B');

const vertices = ['A', 'B', 'C', 'D'];
const detectedCycle = g.findCycle(vertices);

console.log('Cycle Found:', detectedCycle !== null);
// Output: Cycle Found: true
console.log('Reconstructed Cycle Path:', detectedCycle.join(' -> '));
// Output: Reconstructed Cycle Path: B -> C -> D -> B`
    },
    {
      type: 'heading',
      id: 'cycle-reconstruction-importance',
      text: {
        en: 'Why Reconstruction Matters: The On-Call Reality',
        bn: 'চক্র পুনর্গঠনের গুরুত্ব: প্রোডাকশন ডিবাগিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production systems, simply returning a boolean true stating that a cycle exists is insufficient for debugging. When an on-call engineer investigates an incident, knowing that an infinite loop exists somewhere in a codebase of 50000 files does not solve the outage. Printing the exact sequence of dependent modules allows the team to break the cycle immediately.',
        bn: 'বাস্তব প্রোডাকশন সিস্টেমে কেবল ট্রু বা ফলস বলা যথেষ্ট নয়। যখন কোনো অন-কল ইঞ্জিনিয়ার কোনো বিভ্রাটের সমাধান করতে বসেন, তখন ৫০০০০টি ফাইলের মাঝে কোথাও একটি চক্র আছে এ কথা জেনে সমস্যার সমাধান হয় না। চক্রের সাথে যুক্ত মডিউলগুলোর সঠিক ক্রম ছাপিয়ে দিলে টিম সাথে সাথে বিপজ্জনক নির্ভরতাটি ভেঙে দিতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Three-color discipline: Distinguishes between unvisited nodes (White), active call stack ancestors (Gray), and sealed subtrees (Black).',
          bn: 'তিন রঙের নিয়ম: অপরিদর্শিত নোড (সাদা), স্ট্যাকে থাকা পূর্বপুরুষ (ধূসর) এবং সম্পন্ন হওয়া সাব-ট্রিকে (কালো) সঠিকভাবে পৃথক করে।'
        },
        {
          en: 'Back edge identification: A directed edge targeting a Gray vertex confirms the existence of a directed cycle.',
          bn: 'ব্যাক ধারের প্রমাণ: কোনো ধূসর নোডের দিকে নির্দেশিত ধার দেখা পেলেই নির্দেশিত চক্রের উপস্থিতি নিশ্চিত হয়।'
        },
        {
          en: 'Parent exemption necessity: Undirected cycle algorithms must ignore the immediate arrival edge to prevent false alarms on trees.',
          bn: 'অভিভাবক ছাড়ের আবশ্যকতা: অমুখী গ্রাফে সরাসরি যে নোড থেকে এসেছি তাকে বাদ দিতে হয় যেন সাধারণ গাছেও ভুল চক্র না ধরে।'
        },
        {
          en: 'Cycle path reconstruction: Following parent pointers from the meeting node retraces and outputs the exact loop sequence in O(cycle) time.',
          bn: 'চক্রের পথ পুনর্গঠন: প্যারেন্ট পয়েন্টার ধরে পেছনের দিকে গিয়ে O(cycle) সময়ে চক্রের সমস্ত নোডের ক্রম ছাপিয়ে দেওয়া যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ch-ex1',
      kind: 'mcq',
      topic: 'three-color-gray-meaning',
      question: {
        en: 'In the Three-Color DFS cycle detection algorithm, what does marking a vertex as Gray (state 1) signify?',
        bn: 'তিন-রঙের DFS চক্র শনাক্তকরণ অ্যালগরিদমে কোনো নোডকে ধূসর (অবস্থা ১) দাগ দেওয়ার অর্থ কী?'
      },
      options: [
        {
          en: 'The vertex is currently on the active recursion call stack, meaning its exploration has started but its descendants are not yet sealed',
          bn: 'নোডটি বর্তমানে সক্রিয় রিকার্শন কল স্ট্যাকে অবস্থান করছে, অর্থাৎ তার কাজ শুরু হয়েছে কিন্তু তার বংশধরদের কাজ এখনো শেষ হয়নি'
        },
        {
          en: 'The vertex has been permanently deleted from the graph',
          bn: 'নোডটি গ্রাফ থেকে চিরতরে মুছে ফেলা হয়েছে'
        },
        {
          en: 'The vertex has degree 0 and no neighbors',
          bn: 'নোডটির ডিগ্রি ০ এবং কোনো প্রতিবেশী নেই'
        },
        {
          en: 'The vertex is an unvisited node that has never been touched',
          bn: 'নোডটি একটি অপরিদর্শিত নোড যাকে এখনো ছোঁয়া হয়নি'
        }
      ],
      answer: 0,
      hint: {
        en: 'White is unvisited, Black is completely finished. What is Gray?',
        bn: 'সাদা হলো অপরিদর্শিত, কালো হলো সম্পন্ন। তবে ধূসর কী?'
      },
      explanation: {
        en: 'Gray marks active ancestors in flight on the call stack. Hitting a Gray vertex means returning to an ancestor, closing a cycle.',
        bn: 'ধূসর হলো কল স্ট্যাকে থাকা সক্রিয় পূর্বপুরুষ। কোনো ধূসর নোডে পুনরায় পৌঁছানোর অর্থ হলো নিজের পূর্বপুরুষে ফেরা, যা চক্র সম্পন্ন করে।'
      }
    },
    {
      id: 'ch-ex2',
      kind: 'mcq',
      topic: 'undirected-parent-exemption',
      question: {
        en: 'Why is the parent exemption rule necessary when detecting cycles in an undirected graph?',
        bn: 'একটি অমুখী গ্রাফে চক্র খোঁজার সময় প্যারেন্ট এক্সেমপশন (অভিভাবক ছাড়ের নিয়ম) কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Because an undirected edge between u and v allows v to immediately see u as visited, which would falsely accuse every single edge of being a 2-node cycle',
          bn: 'কারণ u এবং v এর মধ্যকার অমুখী ধার v কে সাথে সাথে u কে পরিদর্শিত হিসেবে দেখায়, যা সাধারণ গাছেও প্রতিটি ধারকে মিথ্যা চক্র হিসেবে গণ্য করত'
        },
        {
          en: 'Because undirected graphs cannot be stored in RAM memory',
          bn: 'কারণ অমুখী গ্রাফ র‍্যাম মেমরিতে রাখা যায় না'
        },
        {
          en: 'Because trees have negative edge weights',
          bn: 'কারণ ট্রিতে ঋণাত্মক ওজনের ধার থাকে'
        },
        {
          en: 'To make the algorithm run on the GPU',
          bn: 'অ্যালগরিদমটিকে গ্রাফিক্স কার্ডে চালানোর জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you walk from A to B along a two-way street, B can immediately look back at A.',
        bn: 'দ্বিমুখী রাস্তায় A থেকে B-তে হেঁটে গেলে B সাথে সাথে পেছনে ফিরে A কে দেখতে পায়।'
      },
      explanation: {
        en: 'Without the parent exemption, every mutual edge looks like a loop back to where you just came from, incorrectly condemning acyclic trees.',
        bn: 'অভিভাবক ছাড় না দিলে প্রতিটি দ্বিমুখী ধারকেই পেছনের লুপ মনে হতো, যা চক্রহীন সাধারণ গাছকেও ভুলবশত চক্রযুক্ত বলত।'
      }
    },
    {
      id: 'ch-ex3',
      kind: 'mcq',
      topic: 'black-node-cross-edge-safety',
      question: {
        en: 'In directed three-color DFS, what does encountering a Black (state 2) vertex indicate?',
        bn: 'নির্দেশিত তিন রঙের DFS এ কোনো কালো (অবস্থা ২) নোড দেখা পেলে তা কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'It indicates a cross or forward edge to an already-sealed branch, which is completely safe and does NOT create a cycle',
          bn: 'এটি ইতোমধ্যে সম্পন্ন হওয়া কোনো শাখার দিকে ক্রস বা ফরওয়ার্ড ধার নির্দেশ করে, যা সম্পূর্ণ নিরাপদ এবং কোনো চক্র তৈরি করে না'
        },
        {
          en: 'It indicates an immediate crash and fatal error',
          bn: 'এটি একটি মারাত্মক এরর নির্দেশ করে'
        },
        {
          en: 'It proves that the graph has no vertices left',
          bn: 'এটি প্রমাণ করে যে গ্রাফে আর কোনো নোড অবশিষ্ট নেই'
        },
        {
          en: 'It converts the directed graph into an undirected graph',
          bn: 'এটি নির্দেশিত গ্রাফকে অমুখী গ্রাফে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The black vertex has already finished its traversal and exited the recursion stack.',
        bn: 'কালো নোডের ট্রাভার্সাল আগেই শেষ হয়ে গেছে এবং সে রিকার্শন স্ট্যাক থেকে বের হয়ে গেছে।'
      },
      explanation: {
        en: 'Black nodes have completed their full exploration. Because they are not on the active stack, reaching them cannot form a cycle.',
        bn: 'কালো নোডের সম্পূর্ণ অন্বেষণ শেষ হয়ে গেছে। তারা যেহেতু সক্রিয় স্ট্যাকে নেই, তাই তাদের দিকে যাওয়া কোনোভাবেই চক্র তৈরি করতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'the-cycle-hunt-quiz',
    title: {
      en: 'Cycle Detection and Three Colors Quiz',
      bn: 'চক্র শনাক্তকরণ এবং তিন রঙ কুইজ'
    },
    questions: [
      {
        id: 'ch-q1',
        kind: 'mcq',
        topic: 'cycle-path-backtracking',
        question: {
          en: 'When a back edge from node u to node v is found in a directed graph, how is the cycle path reconstructed?',
          bn: 'একটি নির্দেশিত গ্রাফে নোড u থেকে নোড v এর দিকে ব্যাক ধার পাওয়া গেলে চক্রের পথটি কীভাবে পুনর্গঠন করা হয়?'
        },
        options: [
          {
            en: 'Follow `parent` pointers starting from u backwards until reaching v, then append v at the end and reverse the list',
            bn: 'u থেকে শুরু করে `parent` পয়েন্টার ধরে পেছনের দিকে v পর্যন্ত যান, তারপর শেষে v যোগ করে তালিকাকে উল্টে দিন'
          },
          {
            en: 'Sort all graph vertices in alphabetical order',
            bn: 'গ্রাফের সমস্ত নোডকে বর্ণানুক্রমিকভাবে সাজিয়ে নিন'
          },
          {
            en: 'Run BFS from every single vertex in the graph',
            bn: 'গ্রাফের প্রতিটি নোড থেকে আলাদা আলাদা BFS চালান'
          },
          {
            en: 'Delete all edges in the graph',
            bn: 'গ্রাফের সমস্ত ধার মুছে ফেলুন'
          }
        ],
        answer: 0,
        hint: {
          en: 'The descent path from v down to u is recorded in the parent pointers.',
          bn: 'v থেকে u পর্যন্ত নামার পথটি প্যারেন্ট পয়েন্টারের মাঝে সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'Because u is a descendant of v, backtracking parent pointers traces the path v -> ... -> u, which with u -> v completes the loop.',
          bn: 'যেহেতু u হলো v এর অধস্তন, তাই প্যারেন্ট ধরে পেছালে v -> ... -> u পথটি পাওয়া যায়, যা u -> v ধারের সাথে মিলে পুরো চক্র প্রকাশ করে।'
        }
      },
      {
        id: 'ch-q2',
        kind: 'mcq',
        topic: 'cycle-time-complexity',
        question: {
          en: 'What is the time complexity to detect whether a directed graph G = (V, E) contains a cycle using Three-Color DFS?',
          bn: 'তিন রঙের DFS ব্যবহার করে একটি নির্দেশিত গ্রাফ G = (V, E) তে চক্র আছে কি না তা শনাক্ত করার সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(V + E) linear time, inspecting each vertex and edge at most once',
            bn: 'O(V + E) রৈখিক সময়, প্রতিটি নোড ও ধার সর্বোচ্চ একবার পরীক্ষা করার মাধ্যমে'
          },
          {
            en: 'O(V^2) quadratic time always',
            bn: 'সর্বদা O(V^2) দ্বিঘাত সময়'
          },
          {
            en: 'O(V!) factorial time',
            bn: 'O(V!) ফ্যাক্টোরিয়াল সময়'
          },
          {
            en: 'O(1) constant time without traversal',
            bn: 'কোনো ট্রাভার্সাল ছাড়া O(1) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Three-color DFS is a standard DFS traversal augmented with state updates.',
          bn: 'তিন রঙের DFS মূলত একটি প্রমিত DFS ট্রাভার্সাল যাতে কেবল অতিরিক্ত রঙের আপডেট থাকে।'
        },
        explanation: {
          en: 'Each vertex transitions White -> Gray -> Black once, and each edge is inspected once, ensuring optimal O(V + E) runtime.',
          bn: 'প্রতিটি নোড সাদা -> ধূসর -> কালো হয়ে ঠিক একবার যায় এবং প্রতিটি ধার একবার দেখা হয়, ফলে সর্বোত্তম O(V + E) সময় লাগে।'
        }
      },
      {
        id: 'ch-q3',
        kind: 'mcq',
        topic: 'os-deadlock-wait-for-graph',
        question: {
          en: 'How do database transaction engines and operating systems use cycle detection in Wait-For graphs?',
          bn: 'ডেটাবেস ট্রানজ্যাকশন ইঞ্জিন এবং অপারেটিং সিস্টেম কীভাবে ওয়েট-ফর (Wait-For) গ্রাফে চক্র শনাক্তকরণ ব্যবহার করে?'
        },
        options: [
          {
            en: 'To identify deadlocks: if transaction T1 waits for a lock held by T2, and T2 waits for a lock held by T1, the resulting cycle triggers an automatic transaction abort',
            bn: 'ডেডলক শনাক্ত করতে: T1 ট্রানজ্যাকশন যদি T2 এর লকের জন্য অপেক্ষা করে এবং T2 T1 এর জন্য অপেক্ষা করে, তবে উৎপন্ন চক্রটি দেখে একটি ট্রানজ্যাকশন বাতিল করা হয়'
          },
          {
            en: 'To encrypt database passwords',
            bn: 'ডেটাবেসের পাসওয়ার্ড এনক্রিপ্ট করতে'
          },
          {
            en: 'To speed up network download speeds',
            bn: 'নেটওয়ার্ক ডাউনলোডের গতি বাড়াতে'
          },
          {
            en: 'To compress audio files',
            bn: 'অডিও ফাইল সংকুচিত করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A deadlock occurs when transactions form a circular dependency chain waiting on resources.',
          bn: 'রিসোর্সের অপেক্ষায় থাকা ট্রানজ্যাকশনগুলোর মাঝে বৃত্তাকার নির্ভরতা তৈরি হলে ডেডলক ঘটে।'
        },
        explanation: {
          en: 'A directed cycle in a Wait-For graph represents an unresolvable deadlock, requiring the engine to kill one transaction to break the cycle.',
          bn: 'ওয়েট-ফর গ্রাফে একটি চক্র থাকা মানে চিরস্থায়ী ডেডলক, যা ভাঙতে ইঞ্জিনকে যেকোনো একটি ট্রানজ্যাকশন বাতিল করতে হয়।'
        }
      },
      {
        id: 'ch-q4',
        kind: 'mcq',
        topic: 'dag-topological-order-guarantee',
        question: {
          en: 'What fundamental mathematical property is guaranteed if Three-Color DFS runs across a graph and finds zero cycles?',
          bn: 'তিন রঙের DFS কোনো গ্রাফের ওপর চলে যদি শূন্য চক্র পায়, তবে কোন মৌলিক গাণিতিক বৈশিষ্ট্য নিশ্চিত হয়?'
        },
        options: [
          {
            en: 'The graph is a Directed Acyclic Graph (DAG), guaranteeing that at least one valid Topological Sort order exists',
            bn: 'গ্রাফটি একটি নির্দেশিত অচক্রিক গ্রাফ (DAG), যা নিশ্চিত করে যে এতে অন্তত একটি সঠিক টপোলজিক্যাল ক্রম বিদ্যমান'
          },
          {
            en: 'The graph contains exactly 1 vertex',
            bn: 'গ্রাফে ঠিক ১টি শীর্ষবিন্দু রয়েছে'
          },
          {
            en: 'The graph is disconnected into 100 components',
            bn: 'গ্রাফটি ১০০টি উপাদানে বিচ্ছিন্ন'
          },
          {
            en: 'All edge weights are prime numbers',
            bn: 'সমস্ত ধারের ওজন মৌলিক সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Directed + Acyclic = DAG. What ordering can a DAG always produce?',
          bn: 'নির্দেশিত + অচক্রিক = DAG। একটি DAG সর্বদা কোন ক্রম তৈরি করতে পারে?'
        },
        explanation: {
          en: 'By definition, an acyclic directed graph is a DAG, which is mathematically proven to support linear topological ordering.',
          bn: 'সংজ্ঞানুযায়ী একটি চক্রহীন নির্দেশিত গ্রাফই হলো DAG, যাতে অন্তত একটি রৈখিক টপোলজিক্যাল ক্রম থাকা গাণিতিকভাবে নিশ্চিত।'
        }
      }
    ]
  }
};
