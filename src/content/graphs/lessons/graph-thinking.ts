import type { Lesson } from '../../../lib/types';

export const graphThinkingLesson: Lesson = {
  slug: 'graph-thinking',
  tech: 'graphs',
  title: {
    en: 'Graph Thinking — Vertices, Edges, and Sparse Adjacency',
    bn: 'গ্রাফ-চিন্তা: শীর্ষবিন্দু, ধার এবং স্পার্স সংলগ্নতা'
  },
  summary: {
    en: 'Every linear and hierarchical data structure is a constrained graph. Arrays constrain vertices to linear successors; trees constrain them to a single root with no cycles. General graphs remove all constraints, allowing arbitrary relationships between entities. We define vertices, directed and undirected edges, in-degree and out-degree, and analyze the space-time trade-off between dense Adjacency Matrices (O(V^2) memory) and sparse Adjacency Lists (O(V + E) memory).',
    bn: 'পূর্ববর্তী সমস্ত রৈখিক ও হায়ারার্কিকাল ডেটা স্ট্রাকচার মূলত বিশেষ শর্তযুক্ত গ্রাফ। অ্যারে প্রতিটি উপাদানকে কেবল একটি উত্তরসূরির সাথে যুক্ত করে; ট্রি উপাদানগুলোকে একটি মূল রুটের অধীনে চক্রহীনভাবে বাঁধে। সাধারণ গ্রাফ সমস্ত বিধিনিষেধ তুলে দিয়ে যেকোনো উপাদানের মধ্যে স্বাধীন সম্পর্ক তৈরি করতে দেয়। আমরা শীর্ষবিন্দু, নির্দেশিত ও অমুখী ধার, ইন-ডিগ্রি ও আউট-ডিগ্রি এবং অ্যাজেসেন্সি ম্যাট্রিক্স (O(V^2) মেমরি) বনাম স্পার্স অ্যাজেসেন্সি লিস্টের (O(V + E) মেমরি) স্থান-সময় বিনিময় বিশ্লেষণ করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'paths-through-worlds',
    tech: 'graphs',
    title: {
      en: 'Paths and Traversal — Connected Components and Island Census',
      bn: 'পথ ও ট্রাভার্সাল: সংযুক্ত উপাদান এবং আইল্যান্ড সেন্সাস'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'graph-foundation',
      text: {
        en: 'The General Topology: Beyond Linear and Tree Constraints',
        bn: 'সাধারণ টপোলজি: রৈখিক এবং ট্রি কাঠামোর সীমানা পেরিয়ে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you study arrays, linked lists, and trees, you are working with specialized subsets of graphs. An array restricts each element to exactly one linear successor. A tree allows multiple children but enforces a strict single-parent hierarchy with zero cycles. Graphs eliminate these limitations, modeling arbitrary many-to-many relationships.',
        bn: 'যখন আপনি অ্যারে, লিংকড লিস্ট বা ট্রি নিয়ে কাজ করেন, তখন আপনি মূলত গ্রাফেরই কিছু বিশেষ রূপ ব্যবহার করেন। একটি অ্যারে প্রতিটি উপাদানকে ঠিক একটি উত্তরসূরির সাথে বাঁধে। একটি ট্রি একাধিক সন্তান অনুমোদন করলেও কোনো চক্র ছাড়া একক প্যারেন্ট কাঠামো চাপিয়ে দেয়। গ্রাফ এই সব সীমাবদ্ধতা দূর করে যেকোনো উপাদানের মাঝে বহু-মাত্রিক সম্পর্ক তৈরি করতে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Formally, a graph G = (V, E) consists of a set of vertices V (the entities) and a set of edges E (the pairwise relationships). In an undirected graph, connections are mutual, like mutual friendships. In a directed graph (digraph), edges point from a source to a target, representing one-way highways, dependencies, or financial transactions.',
        bn: 'গাণিতিকভাবে একটি গ্রাফ G = (V, E) শীর্ষবিন্দু V (সত্তা) এবং ধার E (পারস্পরিক সম্পর্ক) এর সমন্বয়ে গঠিত। একটি অমুখী গ্রাফে সংযোগগুলো উভয়মুখী হয়, যেমন পারস্পরিক বন্ধুত্ব। কিন্তু নির্দেশিত গ্রাফে ধারগুলো একটি নির্দিষ্ট উৎস থেকে গন্তব্যের দিকে নির্দেশ করে, যা একমুখী রাস্তা, প্যাকেজ নির্ভরতা বা আর্থিক লেনদেন প্রকাশ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'vertex',
          def: {
            en: 'A fundamental data node representing an entity (such as a user, server, or city) within a graph.',
            bn: 'গ্রাফের একটি মৌলিক ডেটা উপাদান বা নোড যা কোনো সত্তা যেমন ব্যবহারকারী, সার্ভার বা শহর নির্দেশ করে।'
          }
        },
        {
          term: 'edge',
          def: {
            en: 'A connection linking two vertices, representing a relationship, communication channel, or road.',
            bn: 'দুটি শীর্ষবিন্দুর মধ্যকার সংযোগ যা পারস্পরিক সম্পর্ক, যোগাযোগ মাধ্যম বা পথ নির্দেশ করে।'
          }
        },
        {
          term: 'directed-graph',
          def: {
            en: 'A digraph where edges possess an asymmetric orientation, meaning an edge from u to v does not imply a reverse edge.',
            bn: 'এমন একটি গ্রাফ যেখানে ধারগুলোর নির্দিষ্ট দিক থাকে, অর্থাৎ u থেকে v-তে ধার থাকা মানে v থেকে u-তে ধার থাকা নয়।'
          }
        },
        {
          term: 'adjacency-list',
          def: {
            en: 'A space-efficient graph representation where each vertex stores a dynamic array or linked list of its immediate neighbors.',
            bn: 'গ্রাফ সংরক্ষণের স্থান-সাশ্রয়ী কাঠামো যেখানে প্রতিটি শীর্ষবিন্দু কেবল তার প্রত্যক্ষ প্রতিবেশীদের তালিকা রাখে।'
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
      id: 'matrix-vs-list',
      text: {
        en: 'Architectural Comparison: Adjacency Matrix vs Adjacency List',
        bn: 'কাঠামোগত তুলনা: অ্যাজেসেন্সি ম্যাট্রিক্স বনাম অ্যাজেসেন্সি লিস্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computer science provides two classical representations for graphs in memory. An Adjacency Matrix uses a 2D boolean grid of size V * V. An Adjacency List assigns each vertex an array containing only its active neighbors. Choosing the correct representation dictates whether your algorithms run in milliseconds or run out of memory.',
        bn: 'কম্পিউটার বিজ্ঞানে মেমরিতে গ্রাফ রাখার দুটি প্রধান পদ্ধতি রয়েছে। অ্যাজেসেন্সি ম্যাট্রিক্স V * V আকারের একটি দ্বি-মাত্রিক গ্রিড ব্যবহার করে। অন্যদিকে অ্যাজেসেন্সি লিস্ট প্রতিটি শীর্ষবিন্দুর জন্য কেবল তার সক্রিয় প্রতিবেশীদের একটি তালিকা সংরক্ষণ করে। সঠিক কাঠামো নির্বাচন নির্ধারণ করে আপনার প্রোগ্রাম দ্রুত চলবে নাকি মেমোরি ফুরিয়ে ক্র্যাশ করবে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Operation', bn: 'পরিমাপ / অপারেশন' },
        { en: 'Adjacency Matrix (V x V)', bn: 'অ্যাজেসেন্সি ম্যাট্রিক্স (V x V)' },
        { en: 'Adjacency List', bn: 'অ্যাজেসেন্সি লিস্ট' }
      ],
      rows: [
        [
          { en: 'Memory Space', bn: 'মেমোরি স্থান' },
          { en: 'O(V^2) quadratic space', bn: 'O(V^2) দ্বিঘাত মেমোরি' },
          { en: 'O(V + E) linear space', bn: 'O(V + E) রৈখিক মেমোরি' }
        ],
        [
          { en: 'Edge Check (hasEdge(u, v))', bn: 'ধার পরীক্ষা (hasEdge(u, v))' },
          { en: 'O(1) instant lookup', bn: 'O(1) তাৎক্ষণিক মান' },
          { en: 'O(deg(u)) scan neighbor list', bn: 'O(deg(u)) প্রতিবেশীর তালিকা দেখা' }
        ],
        [
          { en: 'Find All Neighbors of u', bn: 'u এর সমস্ত প্রতিবেশী বের করা' },
          { en: 'O(V) scan entire matrix row', bn: 'O(V) পুরো সারি স্ক্যান' },
          { en: 'O(deg(u)) direct access', bn: 'O(deg(u)) সরাসরি অ্যাক্সেস' }
        ],
        [
          { en: 'Optimal Workload', bn: 'উপযুক্ত ক্ষেত্র' },
          { en: 'Dense graphs where E ~ V^2', bn: 'ঘন গ্রাফ যেখানে E ~ V^2' },
          { en: 'Sparse graphs where E ~ V', bn: 'স্পার্স গ্রাফ যেখানে E ~ V' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-graph-code',
      text: {
        en: 'Executable TypeScript Graph Implementation',
        bn: 'টাইপস্ক্রিপ্টে গ্রাফের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs an undirected graph using an Adjacency List. It connects vertices A, B, C, and D, demonstrating how undirected edges are registered symmetrically across both endpoint rosters.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি অ্যাজেসেন্সি লিস্ট ব্যবহার করে একটি অমুখী গ্রাফ তৈরি করে। এটি A, B, C এবং D শীর্ষবিন্দুগুলোকে যুক্ত করে দেখায় কীভাবে উভয় শীর্ষের তালিকায় দ্বিমুখী ধার সংরক্ষিত হয়।'
      }
    },
    {
      type: 'code',
      code: `class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(u, v) {
    this.addVertex(u);
    this.addVertex(v);
    this.adjList.get(u).push(v);
    if (!this.isDirected) {
      this.adjList.get(v).push(u);
    }
  }

  getDegree(v) {
    return this.adjList.get(v)?.length || 0;
  }
}

const g = new Graph(false);
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');

console.log('Adjacency List for Vertex A:', g.adjList.get('A').join(', '));
// Output: Adjacency List for Vertex A: B, C
console.log('Degree of Vertex A:', g.getDegree('A'));
// Output: Degree of Vertex A: 2
console.log('Adjacency List for Vertex B:', g.adjList.get('B').join(', '));
// Output: Adjacency List for Vertex B: A, D
console.log('Total Vertices:', g.adjList.size);
// Output: Total Vertices: 4`
    },
    {
      type: 'heading',
      id: 'sparsity-law',
      text: {
        en: 'The Sparsity Law in Production Engineering',
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারিংয়ে স্পার্সতা নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production systems, almost every real graph is sparse. Consider a social platform with 1000000 users where each user has 200 friends. An Adjacency Matrix would allocate 1000000 * 1000000 = 1000000000000 cells (1 Terabyte of RAM), with 99.98% of cells holding zeros. An Adjacency List stores only the 200000000 active connections, fitting comfortably in memory.',
        bn: 'প্রোডাকশন সিস্টেমে প্রায় প্রতিটি বাস্তব গ্রাফই স্পার্স বা কম ঘনত্বের হয়। উদাহরণস্বরূপ ১০০০০০০ ব্যবহারকারীর একটি সামাজিক যোগাযোগ মাধ্যমে প্রতি ব্যবহারকারীর ২০০ জন বন্ধু আছে। একটি অ্যাজেসেন্সি ম্যাট্রিক্স ১০০০০০০ * ১০০০০০০ = ১০০০০০০০০০০০০ ঘর (১ টেরাবাইট র‍্যাম) বরাদ্দ করত, যার ৯৯.৯৮% ঘরেই শূন্য থাকত। পক্ষান্তরে অ্যাজেসেন্সি লিস্ট কেবল সক্রিয় ২০০০০০০০০ সংযোগ সংরক্ষণ করে সহজে মেমরিতে জায়গা করে নেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Unconstrained connectivity: Graphs generalize trees and lists by permitting arbitrary connections, cycles, and multi-directional relationships.',
          bn: 'সীমাহীন সংযোগ: গ্রাফ যেকোনো সংযোগ, চক্র এবং বহুমুখী সম্পর্ক সমর্থন করে ট্রি ও লিস্টের সার্বজনীন রূপ প্রদান করে।'
        },
        {
          en: 'Sparsity dominance: Real-world graphs (social webs, road networks, internet routers) are overwhelmingly sparse (|E| << |V|^2).',
          bn: 'স্পার্সতার প্রাধান্য: বাস্তব জীবনের গ্রাফগুলো (সামাজিক জাল, সড়ক নেটওয়ার্ক) অত্যন্ত স্পার্স প্রকৃতির হয় (|E| << |V|^2)।'
        },
        {
          en: 'Adjacency list efficiency: Stores sparse graphs in optimal O(V + E) memory, avoiding the quadratic O(V^2) waste of adjacency matrices.',
          bn: 'অ্যাজেসেন্সি লিস্টের দক্ষতা: স্পার্স গ্রাফকে মাত্র O(V + E) মেমরিতে রাখে এবং ম্যাট্রিক্সের মতো O(V^2) অপচয় রোধ করে।'
        },
        {
          en: 'Neighbor iteration advantage: Traversing the neighbors of vertex u takes O(deg(u)) time in a list versus O(V) in a matrix row scan.',
          bn: 'প্রতিবেশী খোঁজার গতি: লিস্টে শীর্ষবিন্দু u এর প্রতিবেশী বের করতে কেবল O(deg(u)) সময় লাগে, যেখানে ম্যাট্রিক্সে পুরো O(V) সারি স্ক্যান করতে হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gt-ex1',
      kind: 'mcq',
      topic: 'adjacency-matrix-memory-scale',
      question: {
        en: 'How much memory does an Adjacency Matrix allocate for a graph with |V| = 50000 vertices?',
        bn: '|V| = ৫০০০০ শীর্ষবিন্দু বিশিষ্ট একটি গ্রাফের জন্য অ্যাজেসেন্সি ম্যাট্রিক্স কত মেমরি ঘর বরাদ্দ করে?'
      },
      options: [
        {
          en: 'O(V^2) cells, which equals 50000 * 50000 = 2500000000 entries regardless of how few edges exist',
          bn: 'O(V^2) ঘর, যা ধার সংখ্যা যতই কম হোক না কেন ৫০০০০ * ৫০০০০ = ২৫০০০০০০০০ ঘরের সমান'
        },
        {
          en: 'Exactly 50000 cells',
          bn: 'ঠিক ৫০০০০ ঘর'
        },
        {
          en: 'O(V + E) cells',
          bn: 'O(V + E) ঘর'
        },
        {
          en: 'Zero cells if there are no edges',
          bn: 'কোনো ধার না থাকলে শূন্য ঘর'
        }
      ],
      answer: 0,
      hint: {
        en: 'A matrix allocates a row of length V for every vertex V.',
        bn: 'একটি ম্যাট্রিক্স প্রতিটি শীর্ষবিন্দু V এর জন্য V দৈর্ঘ্যের একটি করে সারি তৈরি করে।'
      },
      explanation: {
        en: 'An Adjacency Matrix always allocates a full V x V grid, consuming quadratic space even when the graph contains no edges.',
        bn: 'অ্যাজেসেন্সি ম্যাট্রিক্স সর্বদা সম্পূর্ণ V x V গ্রিড তৈরি করে, ফলে গ্রাফ ফাঁকা হলেও দ্বিঘাত পরিমাণ মেমরি অপচয় হয়।'
      }
    },
    {
      id: 'gt-ex2',
      kind: 'mcq',
      topic: 'undirected-edge-representation',
      question: {
        en: 'When representing an undirected edge between vertices u and v inside an Adjacency List, what operation must be performed?',
        bn: 'একটি অ্যাজেসেন্সি লিস্টে u এবং v শীর্ষবিন্দুর মাঝে একটি অমুখী ধার যোগ করার সময় কোন কাজটি করতে হয়?'
      },
      options: [
        {
          en: 'Push v into u’s neighbor list, AND push u into v’s neighbor list',
          bn: 'u এর প্রতিবেশীর তালিকায় v যোগ করতে হবে এবং v এর তালিকায় u যোগ করতে হবে'
        },
        {
          en: 'Only push v into u’s list',
          bn: 'কেবল u এর তালিকায় v যোগ করতে হবে'
        },
        {
          en: 'Delete both vertices from memory',
          bn: 'উভয় শীর্ষবিন্দু মেমরি থেকে মুছে ফেলতে হবে'
        },
        {
          en: 'Sort the vertices in alphabetical order',
          bn: 'শীর্ষবিন্দুগুলোকে বর্ণানুক্রমিকভাবে সাজাতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In an undirected graph, friendship is mutual: if u can reach v, v can reach u.',
        bn: 'অমুখী গ্রাফে সম্পর্ক উভয়মুখী: u যদি v-তে যেতে পারে, তবে v-ও u-তে আসতে পারে।'
      },
      explanation: {
        en: 'An undirected edge is bidirectional; representing it in an adjacency list requires adding each vertex to the other’s list.',
        bn: 'অমুখী ধার দ্বিমুখী হওয়ায় অ্যাজেসেন্সি লিস্টে উভয়ের তালিকায় একে অপরকে যুক্ত করতে হয়।'
      }
    },
    {
      id: 'gt-ex3',
      kind: 'mcq',
      topic: 'degree-definition',
      question: {
        en: 'What is the definition of the degree of a vertex in an undirected graph?',
        bn: 'একটি অমুখী গ্রাফে কোনো শীর্ষবিন্দুর ডিগ্রি (degree) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'The number of edges incident to that vertex (the number of direct neighbors)',
          bn: 'সেই শীর্ষবিন্দুর সাথে সংযুক্ত মোট ধারের সংখ্যা (তার প্রত্যক্ষ প্রতিবেশীর সংখ্যা)'
        },
        {
          en: 'The total number of vertices in the entire graph',
          bn: 'সম্পূর্ণ গ্রাফে থাকা মোট শীর্ষবিন্দুর সংখ্যা'
        },
        {
          en: 'The memory size of the vertex object in bytes',
          bn: 'বাইট আকারে নোড অবজেক্টের মেমরি সাইজ'
        },
        {
          en: 'The depth of the vertex from the root node',
          bn: 'রুট নোড থেকে শীর্ষবিন্দুর গভীরতা'
        }
      ],
      answer: 0,
      hint: {
        en: 'If vertex A is connected to B and C, how many incident edges does A have?',
        bn: 'শীর্ষবিন্দু A যদি B এবং C এর সাথে যুক্ত থাকে, তবে A এর কয়টি ধার আছে?'
      },
      explanation: {
        en: 'The degree of a vertex in an undirected graph is simply the count of incident edges attached to it.',
        bn: 'অমুখী গ্রাফে একটি শীর্ষবিন্দুর ডিগ্রি হলো তার সাথে সরাসরি যুক্ত ধারের মোট সংখ্যা।'
      }
    }
  ],
  quiz: {
    id: 'graph-thinking-quiz',
    title: {
      en: 'Graph Foundations and Representations Quiz',
      bn: 'গ্রাফের ভিত্তি এবং উপস্থাপনা কুইজ'
    },
    questions: [
      {
        id: 'gt-q1',
        kind: 'mcq',
        topic: 'sparse-graph-definition',
        question: {
          en: 'A graph is formally classified as sparse when…',
          bn: 'একটি গ্রাফকে কখন আনুষ্ঠানিকভাবে স্পার্স (কম ঘনত্বের) হিসেবে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'The number of edges |E| is significantly closer to |V| than to |V|^2 (|E| << |V|^2)',
            bn: 'যখন ধারের সংখ্যা |E| এর মান |V|^2 এর তুলনায় |V| এর অনেক কাছাকাছি থাকে (|E| << |V|^2)'
          },
          {
            en: 'The graph has no edges at all',
            bn: 'যখন গ্রাফে কোনো ধার থাকে না'
          },
          {
            en: 'Every vertex is connected to every other vertex',
            bn: 'যখন প্রতিটি শীর্ষবিন্দু অন্য প্রতিটি শীর্ষবিন্দুর সাথে যুক্ত থাকে'
          },
          {
            en: 'The graph is stored on a flash drive',
            bn: 'যখন গ্রাফটি পেনড্রাইভে সংরক্ষণ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In a sparse graph, the average degree per vertex remains small even as the vertex count grows.',
          bn: 'স্পার্স গ্রাফে শীর্ষবিন্দু বাড়লেও নোডপ্রতি গড় ধারের সংখ্যা খুবই সীমিত থাকে।'
        },
        explanation: {
          en: 'Sparse graphs have |E| = O(|V|), meaning only a minuscule fraction of all possible V^2 edges actually exist.',
          bn: 'স্পার্স গ্রাফে |E| = O(|V|) থাকে, যার অর্থ সম্ভাব্য V^2 ধারের একটি অতি সামান্য অংশই বাস্তবে বিদ্যমান থাকে।'
        }
      },
      {
        id: 'gt-q2',
        kind: 'mcq',
        topic: 'finding-neighbors-time-complexity',
        question: {
          en: 'What is the time complexity to iterate through all neighbors of a vertex u using an Adjacency Matrix of size V x V?',
          bn: 'V x V আকারের একটি অ্যাজেসেন্সি ম্যাট্রিক্সে শীর্ষবিন্দু u এর সমস্ত প্রতিবেশী বের করতে কত সময় লাগে?'
        },
        options: [
          {
            en: 'O(V) time, because the algorithm must scan all V columns in row u',
            bn: 'O(V) সময়, কারণ অ্যালগরিদমকে u নম্বর সারির সমস্ত V কলাম পরীক্ষা করতে হয়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(log V) time',
            bn: 'O(log V) সময়'
          },
          {
            en: 'O(V^2) quadratic time',
            bn: 'O(V^2) দ্বিঘাত সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'To check which cells in row u contain a 1, must you inspect every column in that row?',
          bn: 'সারির কোন কোন ঘরে ১ আছে তা জানতে কি পুরো সারির সব কলাম দেখতে হয়?'
        },
        explanation: {
          en: 'Even if vertex u only has 1 neighbor, inspecting row u requires scanning all V entries, making neighbor discovery O(V).',
          bn: 'শীর্ষবিন্দু u এর মাত্র ১টি প্রতিবেশী থাকলেও পুরো সারির V সংখ্যক ঘর দেখতে হয়, ফলে সময় জটিলতা O(V) হয়।'
        }
      },
      {
        id: 'gt-q3',
        kind: 'mcq',
        topic: 'digraph-in-out-degree',
        question: {
          en: 'In a directed graph, what does the in-degree of a vertex represent?',
          bn: 'একটি নির্দেশিত গ্রাফে কোনো শীর্ষবিন্দুর ইন-ডিগ্রি (in-degree) কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The number of incoming directed edges pointing toward that vertex',
            bn: 'সেই শীর্ষবিন্দুর দিকে নির্দেশকারী আগত ধারের সংখ্যা'
          },
          {
            en: 'The number of outgoing edges leaving that vertex',
            bn: 'সেই শীর্ষবিন্দু থেকে বাইরের দিকে যাওয়া ধারের সংখ্যা'
          },
          {
            en: 'The sum of all edge weights in the graph',
            bn: 'গ্রাফের সমস্ত ধারের ওজনের যোগফল'
          },
          {
            en: 'The number of connected components in the graph',
            bn: 'গ্রাফে থাকা সংযুক্ত উপাদানের সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'In-degree counts incoming arrows; out-degree counts outgoing arrows.',
          bn: 'ইন-ডিগ্রি ভেতরের দিকে আসা তীর গোনে; আউট-ডিগ্রি বাইরের দিকে যাওয়া তীর গোনে।'
        },
        explanation: {
          en: 'In-degree measures how many edges terminate at a vertex, used in dependency analysis and PageRank algorithms.',
          bn: 'ইন-ডিগ্রি নির্দেশ করে কতটি ধার নির্দিষ্ট নোডে শেষ হয়েছে, যা টপোলজিক্যাল সর্ট ও পেজর‍্যাঙ্কে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'gt-q4',
        kind: 'mcq',
        topic: 'complete-graph-edge-count',
        question: {
          en: 'In a simple undirected complete graph with n vertices where an edge exists between every pair of vertices, how many total edges are present?',
          bn: 'n শীর্ষবিন্দু বিশিষ্ট একটি পূর্ণ অমুখী গ্রাফে যেখানে প্রতিটি নোড অন্য প্রতিটি নোডের সাথে যুক্ত, সেখানে মোট ধারের সংখ্যা কত?'
        },
        options: [
          {
            en: 'n * (n - 1) / 2 edges',
            bn: 'n * (n - ১) / ২ ধার'
          },
          {
            en: 'Exactly n edges',
            bn: 'ঠিক n ধার'
          },
          {
            en: 'n^2 edges',
            bn: 'n^২ ধার'
          },
          {
            en: '2 * n edges',
            bn: '২ * n ধার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each of the n vertices can connect to (n - 1) other vertices. Divide by 2 because undirected edges are shared.',
          bn: 'n সংখ্যক শীর্ষবিন্দুর প্রত্যেকে (n - ১) টি অন্য নোডের সাথে যুক্ত হতে পারে। অমুখী হওয়ায় ২ দিয়ে ভাগ করতে হয়।'
        },
        explanation: {
          en: 'Choosing all pairs from n vertices yields n * (n - 1) / 2 combinations, representing the maximum possible density in a simple undirected graph.',
          bn: 'n শীর্ষবিন্দু থেকে জোড়া বাছাই করার সূত্র n * (n - ১) / ২, যা সাধারণ অমুখী গ্রাফের সর্বোচ্চ ঘনত্ব প্রকাশ করে।'
        }
      }
    ]
  }
};
