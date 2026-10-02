import type { Lesson } from '../../../lib/types';

export const kahnBuildOrderLesson: Lesson = {
  slug: 'kahn-and-the-build-order',
  tech: 'graphs',
  title: {
    en: 'Kahn’s Algorithm — Topological Sort and In-Degree Scheduling',
    bn: 'কানের অ্যালগরিদম: টপোলজিক্যাল সর্ট এবং ইন-ডিগ্রি শিডিউলিং'
  },
  summary: {
    en: 'Dependency management is the structural foundation of compilers, build pipelines, package managers, and task schedulers. A Directed Acyclic Graph (DAG) defines which tasks must finish before downstream dependents can begin. Arthur Kahn introduced a deterministic queue-based algorithm in 1962 that iteratively serves vertices with zero in-degree dependencies. If the queue starves before all vertices are scheduled, the algorithm mathematically proves the existence of a circular dependency cycle in linear O(V + E) time.',
    bn: 'নির্ভরতা ব্যবস্থাপনা কম্পাইলার, বিল্ড পাইপলাইন, প্যাকেজ ম্যানেজার এবং টাস্ক শিডিউলারের মৌলিক ভিত্তি। একটি নির্দেশিত অচক্রিক গ্রাফ (DAG) নির্ধারণ করে কোন কাজটি শুরুর আগে কোন পূর্বশর্তগুলো পূরণ করতে হবে। ১৯৬২ সালে আর্থার কান একটি কিউ-ভিত্তিক অ্যালগরিদম উপস্থাপন করেন যা শূন্য ইন-ডিগ্রি সম্পন্ন নোডগুলোকে ক্রমান্বয়ে শিডিউল করে। সমস্ত নোড শেষ হওয়ার আগেই কিউ খালি হয়ে গেলে এটি স্বয়ংক্রিয়ভাবে প্রমাণ করে যে গ্রাফে চক্রাকার নির্ভরতা রয়েছে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'dijkstra-and-the-throne',
    tech: 'graphs',
    title: {
      en: 'Dijkstra’s Algorithm — Weighted Shortest Paths and Min-Heaps',
      bn: 'ডাইকস্ট্রার অ্যালগরিদম: ওজনযুক্ত সর্বনিম্ন পথ এবং মিন-হিপ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'topological-sorting-role',
      text: {
        en: 'The Prerequisite Problem: Scheduling Directed Acyclic Graphs',
        bn: 'পূর্বশর্ত সমস্যা: নির্দেশিত অচক্রিক গ্রাফের কাজ নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you compile a software project with multiple packages, build tools must determine the exact sequence of compilation. A shared utility library must compile before the database layer, which in turn must compile before the web server starts. This scheduling challenge models naturally as a Directed Acyclic Graph (DAG).',
        bn: 'যখন আপনি একাধিক প্যাকেজ বিশিষ্ট একটি সফটওয়্যার প্রজেক্ট কম্পাইল করেন, তখন বিল্ড টুলকে কম্পাইলেশনের সঠিক ক্রম নির্ধারণ করতে হয়। একটি শেয়ার্ড লাইব্রেরিকে অবশ্যই ডেটাবেস স্তরের আগে কম্পাইল করতে হবে, এবং ডেটাবেস স্তরকে ওয়েব সার্ভার শুরুর আগেই প্রস্তুত হতে হবে। এই শিডিউলিং সমস্যা মূলত একটি নির্দেশিত অচক্রিক গ্রাফের (DAG) বাস্তব রূপ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Topological Sort produces a valid linear ordering where every directed edge u -> v points strictly forward: task u always completes before task v starts. If a graph contains even a single cycle, a valid topological order is mathematically impossible, because circular dependencies mean every task in the loop waits on another.',
        bn: 'টপোলজিক্যাল সর্ট এমন একটি রৈখিক ক্রম তৈরি করে যেখানে প্রতিটি নির্দেশিত ধার u -> v কঠোরভাবে সামনের দিকে থাকে: কাজ u সর্বদা কাজ v শুরুর আগেই সম্পন্ন হয়। গ্রাফে যদি একটিমাত্র চক্রও থাকে, তবে সঠিক টপোলজিক্যাল ক্রম তৈরি করা গাণিতিকভাবে অসম্ভব, কারণ প্রতিটি কাজ অন্যের জন্য আটকে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'topological-sort',
          def: {
            en: 'A linear ordering of vertices in a DAG such that for every directed edge u -> v, vertex u appears before vertex v.',
            bn: 'একটি DAG-এর নোডগুলোর এমন একটি রৈখিক ক্রম যাতে প্রতিটি নির্দেশিত ধার u -> v এর জন্য u সর্বদা v এর পূর্বে অবস্থান করে।'
          }
        },
        {
          term: 'in-degree',
          def: {
            en: 'The count of incoming edges entering a vertex, representing the number of unresolved prerequisites.',
            bn: 'একটি নোডে প্রবেশকারী আগত ধারের সংখ্যা যা তার বাকি থাকা পূর্বশর্তের পরিমাণ নির্দেশ করে।'
          }
        },
        {
          term: 'kahns-algorithm',
          def: {
            en: 'A BFS-style topological sorting algorithm that repeatedly removes vertices with in-degree 0 and decrements neighbor in-degrees.',
            bn: 'একটি BFS ধাঁচের অ্যালগরিদম যা ০ ইন-ডিগ্রির নোডগুলোকে বারবার প্রসেস করে প্রতিবেশীর ইন-ডিগ্রি কমিয়ে আনে।'
          }
        },
        {
          term: 'cycle-starvation',
          def: {
            en: 'The condition where the Kahn queue empties while unscheduled vertices remain, proving a circular dependency loop exists.',
            bn: 'যেখানে অ-প্রসেসকৃত নোড থাকা সত্ত্বেও কানের কিউ খালি হয়ে যায়, যা চক্রাকার নির্ভরতার অস্তিত্ব প্রমাণ করে।'
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
      id: 'topo-approaches-table',
      text: {
        en: 'Architectural Comparison: Kahn’s Algorithm vs DFS Finish Time',
        bn: 'কাঠামোগত তুলনা: কানের অ্যালগরিদম বনাম DFS ফিনিশ টাইম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Engineers can compute topological orderings using two standard techniques: Kahn’s in-degree queue approach or DFS finish-time reversal. Kahn’s algorithm is generally preferred in production schedulers because it processes tasks in natural forward execution order and exposes deadlocks through queue starvation.',
        bn: 'ইঞ্জিনিয়াররা দুটি প্রধান কৌশলে টপোলজিক্যাল ক্রম বের করতে পারেন: কানের ইন-ডিগ্রি কিউ পদ্ধতি অথবা DFS ফিনিশ টাইম উল্টানোর পদ্ধতি। বাস্তব শিডিউলারগুলোতে কানের অ্যালগরিদম বেশি পছন্দ করা হয় কারণ এটি কাজের স্বাভাবিক প্রবাহ অনুসারে সামনে এগোয় এবং কিউ খালি হয়ে গেলে সাথে সাথে ডেডলক প্রকাশ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Characteristic', bn: 'বৈশিষ্ট্য' },
        { en: 'Kahn’s Algorithm (In-Degree BFS)', bn: 'কানের অ্যালগরিদম (ইন-ডিগ্রি BFS)' },
        { en: 'DFS Finish Time (Post-Order)', bn: 'DFS ফিনিশ টাইম (পোস্ট-অর্ডার)' }
      ],
      rows: [
        [
          { en: 'Execution Order', bn: 'কাজের ক্রম' },
          { en: 'Forward: starts from in-degree 0 sources', bn: 'সম্মুখমুখী: ০ ইন-ডিগ্রির উৎস থেকে শুরু' },
          { en: 'Reverse: pushes nodes after exploring subtrees', bn: 'বিপরীতমুখী: সাব-ট্রি ঘোরা শেষে নোড পুশ' }
        ],
        [
          { en: 'Data Structure', bn: 'ডেটা স্ট্রাকচার' },
          { en: 'FIFO Queue + in-degree counter map', bn: 'FIFO কিউ + ইন-ডিগ্রি কাউন্টার ম্যাপ' },
          { en: 'Call stack / explicit stack + color map', bn: 'কল স্ট্যাক / অ্যারে স্ট্যাক + কালার ম্যাপ' }
        ],
        [
          { en: 'Cycle Detection', bn: 'চক্র শনাক্তকরণ' },
          { en: 'Automatic: queue starves before all nodes finish', bn: 'স্বয়ংক্রিয়: সব নোড শেষ হওয়ার আগেই কিউ খালি হয়' },
          { en: 'Requires three-color back-edge check', bn: 'আলাদা তিন রঙের ব্যাক ধার চেক করতে হয়' }
        ],
        [
          { en: 'Production Role', bn: 'বাস্তব ব্যবহার' },
          { en: 'Task executors (Airflow, Turbo, Make)', bn: 'টাস্ক এক্সিকিউটর (Airflow, Turbo, Make)' },
          { en: 'Compiler optimization and dead code analysis', bn: 'কম্পাইলার অপটিমাইজেশন ও ডেড কোড বিশ্লেষণ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-kahn-code',
      text: {
        en: 'Executable Kahn’s Algorithm Implementation',
        bn: 'কানের অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও কোর্স শিডিউলিং ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs a course prerequisite graph with 4 courses. Both CS101 and MATH101 have an initial in-degree of 0, allowing them to enter the queue immediately. Notice how completing prerequisites unlocks CS201 and subsequently CS301.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি কোর্স নিয়ে একটি পূর্বশর্ত গ্রাফ তৈরি করে। CS101 এবং MATH101 উভয়েরই প্রাথমিক ইন-ডিগ্রি ০ হওয়ায় তারা শুরুতেই কিউতে প্রবেশ করে। লক্ষ্য করুন কীভাবে এই কোর্স দুটি শেষ করার পর CS201 এবং পরবর্তীতে CS301 এর দ্বার উন্মোচিত হয়।'
      }
    },
    {
      type: 'code',
      code: `class KahnScheduler {
  constructor() {
    this.adj = new Map();
    this.inDegree = new Map();
  }

  addVertex(v) {
    if (!this.adj.has(v)) {
      this.adj.set(v, []);
      this.inDegree.set(v, 0);
    }
  }

  addEdge(u, v) {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u).push(v);
    this.inDegree.set(v, this.inDegree.get(v) + 1);
  }

  topologicalSort() {
    const queue = [];
    const order = [];

    // Push all vertices with inDegree 0
    for (const [v, deg] of this.inDegree.entries()) {
      if (deg === 0) queue.push(v);
    }

    while (queue.length > 0) {
      const u = queue.shift();
      order.push(u);

      for (const v of this.adj.get(u) || []) {
        this.inDegree.set(v, this.inDegree.get(v) - 1);
        if (this.inDegree.get(v) === 0) {
          queue.push(v);
        }
      }
    }

    if (order.length !== this.inDegree.size) {
      return { success: false, order: [], cycleDetected: true };
    }

    return { success: true, order, cycleDetected: false };
  }
}

const scheduler = new KahnScheduler();
scheduler.addEdge('CS101', 'CS201');
scheduler.addEdge('MATH101', 'CS201');
scheduler.addEdge('CS201', 'CS301');

const result = scheduler.topologicalSort();
console.log('Valid Topological Order Found:', result.success);
// Output: Valid Topological Order Found: true
console.log('Course Schedule Order:', result.order.join(' -> '));
// Output: Course Schedule Order: CS101 -> MATH101 -> CS201 -> CS301`
    },
    {
      type: 'heading',
      id: 'monorepo-build-pipelines',
      text: {
        en: 'Monorepos and Task Pipelines in Modern Software',
        bn: 'আধুনিক সফটওয়্যারে মনোরেপো ও টাস্ক পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern monorepo build tools such as Turborepo, Nx, and Bazel represent project dependencies as DAGs. When you trigger a build command across 200 microservices, the build runner uses Kahn’s algorithm to partition independent packages into parallel execution waves. If 5 packages have in-degree 0, all 5 build concurrently across available CPU cores.',
        bn: 'টার্বোরিপো, এনএক্স এবং বাজেলের মতো আধুনিক মনোরেপো বিল্ড টুলগুলো প্রজেক্টের নির্ভরতাকে DAG হিসেবে সাজায়। যখন আপনি ২০০টি মাইক্রোসার্ভিসে বিল্ড কমান্ড দেন, তখন রানার কানের অ্যালগরিদম ব্যবহার করে স্বাধীন প্যাকেজগুলোকে সমান্তরাল তরঙ্গে ভাগ করে নেয়। যদি ৫টি প্যাকেজের ইন-ডিগ্রি ০ থাকে, তবে উপলব্ধ সিপিইউ কোরের সাহায্যে সেই ৫টি প্যাকেজ একই সাথে সমান্তরালে বিল্ড হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'DAG prerequisite guarantee: Topological sorting is possible if and only if the directed graph contains zero cycles.',
          bn: 'DAG পূর্বশর্তের নিশ্চয়তা: নির্দেশিত গ্রাফে শূন্য চক্র থাকলেই কেবল টপোলজিক্যাল সর্ট করা সম্ভব।'
        },
        {
          en: 'In-degree queue discipline: Kahn’s algorithm repeatedly processes zero-dependency vertices, decrementing downstream neighbor requirements.',
          bn: 'ইন-ডিগ্রি কিউ নিয়ম: কানের অ্যালগরিদম বারবার শূন্য-নির্ভরশীলতার নোডগুলোকে প্রসেস করে নিচের প্রতিবেশীদের পূর্বশর্ত কমাতে থাকে।'
        },
        {
          en: 'Free cycle detection: An output array shorter than the total vertex count proves that an unresolvable cycle stalled the queue.',
          bn: 'স্বয়ংক্রিয় চক্র শনাক্তকরণ: ফলাফল অ্যারে মোট নোড সংখ্যার চেয়ে ছোট হলে তা নিশ্চিত করে যে চক্রের কারণে কিউ আটকে গেছে।'
        },
        {
          en: 'Optimal linear complexity: Both in-degree calculation and queue processing complete in optimal O(V + E) runtime.',
          bn: 'রৈখিক সময় জটিলতা: ইন-ডিগ্রি গণনা এবং কিউ প্রসেসিং উভয়ই সর্বোত্তম O(V + E) সময়ে সম্পন্ন হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'kb-ex1',
      kind: 'mcq',
      topic: 'kahn-initialization-criteria',
      question: {
        en: 'Which vertices are initially placed into the FIFO queue at the start of Kahn’s algorithm?',
        bn: 'কানের অ্যালগরিদমের শুরুতে কোন শীর্ষবিন্দুগুলোকে সর্বপ্রথম FIFO কিউতে রাখা হয়?'
      },
      options: [
        {
          en: 'All vertices with in-degree 0 (nodes that have zero incoming prerequisites)',
          bn: '০ ইন-ডিগ্রি বিশিষ্ট সমস্ত নোড (যেসব নোডের কোনো পূর্বশর্ত নেই)'
        },
        {
          en: 'All vertices with the maximum out-degree',
          bn: 'সর্বোচ্চ আউট-ডিগ্রি বিশিষ্ট সমস্ত নোড'
        },
        {
          en: 'Only the vertex with the smallest alphabetic name',
          bn: 'কেবল বর্ণানুক্রমিকভাবে সবচেয়ে ছোট নামের নোডটি'
        },
        {
          en: 'All vertices that contain negative numbers',
          bn: 'ঋণাত্মক সংখ্যা থাকা সমস্ত নোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a task begin if it still owes unresolved prerequisites?',
        bn: 'কোনো কাজের যদি পূর্বশর্ত বাকি থাকে, তবে কি সে কাজ শুরু করা সম্ভব?'
      },
      explanation: {
        en: 'Vertices with in-degree 0 are ready to execute immediately because nothing precedes them, forming the base of the topological order.',
        bn: '০ ইন-ডিগ্রির নোডগুলোর কোনো পূর্বশর্ত না থাকায় তারা শুরুতেই কার্যকর হতে প্রস্তুত থাকে এবং টপোলজিক্যাল ক্রমের ভিত্তি গড়ে।'
      }
    },
    {
      id: 'kb-ex2',
      kind: 'mcq',
      topic: 'kahn-cycle-detection-proof',
      question: {
        en: 'How does Kahn’s algorithm detect that a directed graph contains a cycle without running a separate cycle-checking algorithm?',
        bn: 'কানের অ্যালগরিদম আলাদা কোনো অ্যালগরিদম না চালিয়েই কীভাবে বুঝতে পারে যে গ্রাফে চক্র রয়েছে?'
      },
      options: [
        {
          en: 'The queue becomes empty while the output order contains fewer than V vertices, because nodes trapped in cycles never reach in-degree 0',
          bn: 'ফলাফল অ্যারেতে V এর চেয়ে কম নোড থাকতেই কিউ খালি হয়ে যায়, কারণ চক্রে আটকে থাকা নোডগুলোর ইন-ডিগ্রি কখনই ০ হয় না'
        },
        {
          en: 'The computer CPU sends a network alert',
          bn: 'কম্পিউটার সিপিইউ একটি নেটওয়ার্ক সতর্কবার্তা পাঠায়'
        },
        {
          en: 'All edge weights become negative',
          bn: 'সমস্ত ধারের ওজন ঋণাত্মক হয়ে যায়'
        },
        {
          en: 'The graph vertices convert into a linked list',
          bn: 'গ্রাফের নোডগুলো লিংকড লিস্টে পরিণত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If nodes in a loop always have at least 1 incoming edge from another node in the loop, can their in-degree ever reach 0?',
        bn: 'লুপের ভেতরের নোডগুলোতে যদি সর্বদা অন্তত ১টি ধার আসতে থাকে, তবে তাদের ইন-ডিগ্রি কি কখনো ০ হতে পারে?'
      },
      explanation: {
        en: 'Nodes trapped in directed cycles mutually depend on each other; their in-degrees never drop to 0, leaving them stranded when the queue empties.',
        bn: 'চক্রে থাকা নোডগুলো একে অপরের ওপর নির্ভর করায় তাদের ইন-ডিগ্রি কখনই ০ তে নামে না, ফলে কিউ খালি হয়ে গেলে তারা প্রসেস ছাড়াই আটকে থাকে।'
      }
    },
    {
      id: 'kb-ex3',
      kind: 'mcq',
      topic: 'kahn-runtime-complexity',
      question: {
        en: 'What is the total time complexity of Kahn’s algorithm on a graph with V vertices and E edges represented as an Adjacency List?',
        bn: 'অ্যাজেসেন্সি লিস্টে সংরক্ষিত V শীর্ষবিন্দু এবং E ধার বিশিষ্ট গ্রাফে কানের অ্যালগরিদমের মোট সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(V + E) time, calculating in-degrees in O(V + E) and processing each vertex and edge once through the queue',
          bn: 'O(V + E) সময়, ইন-ডিগ্রি বের করতে O(V + E) এবং কিউ দিয়ে প্রতিটি নোড ও ধার একবার প্রসেস করার মাধ্যমে'
        },
        {
          en: 'O(V^3) cubic time',
          bn: 'O(V^3) ত্রিঘাত সময়'
        },
        {
          en: 'O(log V) time',
          bn: 'O(log V) সময়'
        },
        {
          en: 'O(V * E^2) time',
          bn: 'O(V * E^2) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Counting initial in-degrees takes O(V + E). In the queue loop, each vertex is popped once, and its outgoing edges are scanned once.',
        bn: 'প্রাথমিক ইন-ডিগ্রি বের করতে O(V + E) লাগে। কিউ লুপে প্রতিটি নোড একবার পপ হয় এবং তার বহির্গামী ধার একবার দেখা হয়।'
      },
      explanation: {
        en: 'Both initial in-degree computation and queue reductions touch each vertex and edge in linear time, guaranteeing O(V + E) overall.',
        bn: 'প্রাথমিক গণনা এবং কিউ প্রসেসিং উভয়ই রৈখিক সময়ে নোড ও ধারগুলো স্পর্শ করে, ফলে মোট সময় O(V + E) এ সীমাবদ্ধ থাকে।'
      }
    }
  ],
  quiz: {
    id: 'kahn-and-the-build-order-quiz',
    title: {
      en: 'Kahn’s Algorithm and Topological Scheduling Quiz',
      bn: 'কানের অ্যালগরিদম এবং টপোলজিক্যাল শিডিউলিং কুইজ'
    },
    questions: [
      {
        id: 'kb-q1',
        kind: 'mcq',
        topic: 'topological-sort-uniqueness',
        question: {
          en: 'Is the topological order of a Directed Acyclic Graph always uniquely determined?',
          bn: 'একটি নির্দেশিত অচক্রিক গ্রাফের (DAG) টপোলজিক্যাল ক্রম কি সর্বদা অনন্য (একটিমাত্র) হয়?'
        },
        options: [
          {
            en: 'No, a DAG can have multiple valid topological orders whenever multiple independent vertices simultaneously have in-degree 0',
            bn: 'না, একটি DAG-এ একাধিক সঠিক টপোলজিক্যাল ক্রম থাকতে পারে যখন একাধিক স্বাধীন নোডের একসাথে ইন-ডিগ্রি ০ থাকে'
          },
          {
            en: 'Yes, every DAG has exactly one mathematical topological order',
            bn: 'হ্যাঁ, প্রতিটি DAG-এর ঠিক একটিমাত্র গাণিতিক টপোলজিক্যাল ক্রম থাকে'
          },
          {
            en: 'Only if all edge weights are even numbers',
            bn: 'কেবল যদি সমস্ত ধারের ওজন জোড় সংখ্যা হয়'
          },
          {
            en: 'No, topological sorts only exist for undirected graphs',
            bn: 'না, টপোলজিক্যাল সর্ট কেবল অমুখী গ্রাফের জন্য কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If CS101 and MATH101 both have in-degree 0, does it matter which course you take first?',
          bn: 'CS101 এবং MATH101 উভয়েরই ইন-ডিগ্রি ০ হলে কোনটি আগে নিচ্ছেন তাতে কি কোনো পার্থক্য হয়?'
        },
        explanation: {
          en: 'Whenever the queue holds multiple zero in-degree vertices, any permutation of those independent tasks forms a valid topological ordering.',
          bn: 'যখনই কিউতে একাধিক শূন্য ইন-ডিগ্রির নোড থাকে, তাদের যেকোনো বিন্যাসই একটি বৈধ টপোলজিক্যাল ক্রম তৈরি করে।'
        }
      },
      {
        id: 'kb-q2',
        kind: 'mcq',
        topic: 'dag-sink-vertex-definition',
        question: {
          en: 'In a DAG, what is a sink vertex?',
          bn: 'একটি নির্দেশিত অচক্রিক গ্রাফে সিংক (sink) শীর্ষবিন্দু বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'A vertex with out-degree 0, meaning it has no outgoing directed edges and nothing depends on it',
            bn: 'আউট-ডিগ্রি ০ বিশিষ্ট একটি নোড, যার কোনো বহির্গামী ধার নেই এবং তার ওপর অন্য কোনো নোড নির্ভর করে না'
          },
          {
            en: 'A vertex that is completely disconnected from the power supply',
            bn: 'বিদ্যুৎ সংযোগ থেকে বিচ্ছিন্ন একটি নোড'
          },
          {
            en: 'A vertex that stores negative numbers',
            bn: 'ঋণাত্মক সংখ্যা সংরক্ষণকারী নোড'
          },
          {
            en: 'A vertex with in-degree 100',
            bn: '১০০ ইন-ডিগ্রি বিশিষ্ট একটি নোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Source vertices have in-degree 0 (nothing precedes them). Sink vertices have out-degree 0 (nothing follows them).',
          bn: 'উৎস নোডের ইন-ডিগ্রি ০ (আগে কেউ নেই)। সিংক নোডের আউট-ডিগ্রি ০ (পরে কেউ নেই)।'
        },
        explanation: {
          en: 'A sink vertex represents a terminal task or final deliverable in a pipeline that has no downstream dependencies.',
          bn: 'সিংক নোড পাইপলাইনের একটি চূড়ান্ত কাজ নির্দেশ করে যার ওপর অন্য কোনো ডাউনস্ট্রিম কাজ নির্ভর করে না।'
        }
      },
      {
        id: 'kb-q3',
        kind: 'mcq',
        topic: 'parallel-build-wave-scheduling',
        question: {
          en: 'How do build tools like Turborepo utilize in-degree tracking to parallelize builds across multiple CPU cores?',
          bn: 'টার্বোরিপোর মতো বিল্ড টুলগুলো একাধিক সিপিইউ কোরে বিল্ড সমান্তরাল করতে কীভাবে ইন-ডিগ্রি ট্র্যাকিং ব্যবহার করে?'
        },
        options: [
          {
            en: 'All tasks currently sharing in-degree 0 are independent and can be executed concurrently in parallel worker threads',
            bn: 'যেসব কাজের ইন-ডিগ্রি একসাথে ০ থাকে তারা সম্পূর্ণ স্বাধীন এবং তাদের সমান্তরাল থ্রেডে একই সাথে চালানো যায়'
          },
          {
            en: 'They compile packages in random order',
            bn: 'তারা এলোমেলো ক্রমে প্যাকেজ কম্পাইল করে'
          },
          {
            en: 'They convert JavaScript files into CSS stylesheets',
            bn: 'তারা জাভাস্ক্রিপ্ট ফাইলকে সিএসএস ফাইলে রূপান্তর করে'
          },
          {
            en: 'They delete all unit tests to save memory',
            bn: 'মেমরি বাঁচাতে তারা সমস্ত ইউনিট টেস্ট মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If task A and task B both have zero unresolved prerequisites, can they run at the same time on different cores?',
          bn: 'কাজ A এবং B উভয়েরই কোনো পূর্বশর্ত বাকি না থাকলে তারা কি আলাদা কোরে একসাথে চলতে পারে?'
        },
        explanation: {
          en: 'Vertices with in-degree 0 have all prerequisites met, allowing multi-core task schedulers to dispatch them simultaneously in parallel waves.',
          bn: 'ইন-ডিগ্রি ০ এর সমস্ত কাজ প্রস্তুত থাকায় মাল্টি-কোর শিডিউলার তাদের সমান্তরাল তরঙ্গে একসাথে বিল্ডের জন্য পাঠিয়ে দিতে পারে।'
        }
      },
      {
        id: 'kb-q4',
        kind: 'mcq',
        topic: 'topological-sort-on-cyclic-graph-result',
        question: {
          en: 'What happens if you attempt to run Kahn’s algorithm on a directed graph that contains only a single circular dependency: A -> B -> C -> A?',
          bn: 'A -> B -> C -> A এর মতো একটি একক চক্রাকার নির্ভরতা বিশিষ্ট গ্রাফে কানের অ্যালগরিদম চালালে কী ঘটবে?'
        },
        options: [
          {
            en: 'Every vertex has an initial in-degree of 1, so the queue is empty from the start and the output order contains 0 vertices, immediately flagging a cycle',
            bn: 'প্রতিটি নোডের প্রাথমিক ইন-ডিগ্রি ১ হওয়ায় শুরুতেই কিউ ফাঁকা থাকে এবং আউটপুটে ০ নোড আসে, যা সাথে সাথে চক্রের প্রমাণ দেয়'
          },
          {
            en: 'The algorithm loops infinitely until memory runs out',
            bn: 'মেমরি ফুরিয়ে না যাওয়া পর্যন্ত অ্যালগরিদমটি অনন্তকাল ঘুরতে থাকে'
          },
          {
            en: 'The algorithm returns the order A -> B -> C',
            bn: 'অ্যালগরিদমটি A -> B -> C ক্রমটি রিটার্ন করে'
          },
          {
            en: 'The operating system reboots the machine',
            bn: 'অপারেটিং সিস্টেম কম্পিউটারকে রিবুট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does any vertex in A -> B -> C -> A have in-degree 0 at the beginning?',
          bn: 'A -> B -> C -> A চক্রে শুরুর মুহূর্তে কারো কি ইন-ডিগ্রি ০ আছে?'
        },
        explanation: {
          en: 'Because every vertex in a pure cycle has in-degree >= 1, zero vertices enter the queue, instantly certifying a complete circular deadlock.',
          bn: 'বিশুদ্ধ চক্রে প্রতিটি নোডের ইন-ডিগ্রি অন্তত ১ থাকায় শুরুতেই কিউতে কেউ ঢুকতে পারে না, যা সাথে সাথে ডেডলক প্রমাণ করে।'
        }
      }
    ]
  }
};
