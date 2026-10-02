import type { Lesson } from '../../../lib/types';

export const plungeOrderLesson: Lesson = {
  slug: 'the-plunge-order',
  tech: 'graphs',
  title: {
    en: 'The Plunge Order — Depth-First Search and Stack Traversal',
    bn: 'গভীরতার ক্রম: ডেপথ-ফার্স্ট সার্চ এবং স্ট্যাক ট্রাভার্সাল'
  },
  summary: {
    en: 'While Breadth-First Search radiates outward layer by layer, Depth-First Search (DFS) plunges down a single trajectory until it reaches a dead end before backtracking. By stamping each vertex with entry and exit timestamps, DFS produces nested intervals that obey the Parenthesis Theorem. These timestamps allow classifying graph edges into tree, back, forward, and cross edges, providing the structural backbone for cycle detection and topological sorting in linear O(V + E) time.',
    bn: 'ব্রেডথ-ফার্স্ট সার্চ স্তরে স্তরে বাইরের দিকে ছড়ালেও ডেপথ-ফার্স্ট সার্চ (DFS) কোনো পথ শেষ না হওয়া পর্যন্ত একটি একক শাখা বরাবর গভীরে নেমে যায় এবং পরে ব্যাকট্র্যাক করে। প্রতিটি নোডে প্রবেশ ও প্রস্থানের সময়াঙ্ক যোগ করে DFS এমন সব বিরতি তৈরি করে যা বন্ধনী উপপাদ্য মেনে চলে। এই সময়াঙ্কগুলো গ্রাফের ধারগুলোকে ট্রি, ব্যাক, ফরওয়ার্ড এবং ক্রস ধারে ভাগ করে চক্র শনাক্তকরণ ও টপোলজিক্যাল সর্টের ভিত্তি তৈরি করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-cycle-hunt',
    tech: 'graphs',
    title: {
      en: 'The Cycle Hunt — Three Colors and Back-Edge Detection',
      bn: 'চক্র শিকার: তিন রঙ এবং ব্যাক-এজ শনাক্তকরণ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'plunge-mechanics',
      text: {
        en: 'The LIFO Traversal: Plunging Deep Before Backtracking',
        bn: 'LIFO ট্রাভার্সাল: ব্যাকট্র্যাকের আগে গভীরে পদার্পণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you explore a maze, the most intuitive human strategy is to pick a hallway and walk forward until reaching a dead end, then retrace steps back to the nearest junction. Depth-First Search executes this exact behavior, driving deep into an unvisited branch before retreating.',
        bn: 'যখন আপনি কোনো গোলকধাঁধায় প্রবেশ করেন, তখন সবচেয়ে স্বাভাবিক কৌশল হলো একটি করিডর ধরে সামনে এগিয়ে যাওয়া এবং পথ বন্ধ হলে পেছনের মোড়ে ফিরে এসে অন্য পথ খোঁজা। ডেপথ-ফার্স্ট সার্চ ঠিক এই কাজটিই করে, কোনো শাখায় ঢুকে শেষ পর্যন্ত গভীরে গিয়ে তারপর পেছনে ব্যাকট্র্যাক করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Under the hood, DFS operates on Last-In First-Out (LIFO) stack semantics. In recursive implementations, the program execution stack stores the active path of parent vertices. Alternatively, an explicit array stack manages deep graph walks without risking call stack overflow.',
        bn: 'অভ্যন্তরীণভাবে DFS মূলত লাস্ট-ইন ফার্স্ট-আউট (LIFO) স্ট্যাক নীতিতে চলে। রিকার্সিভ কোডে প্রোগ্রাম এক্সিকিউশন স্ট্যাক সক্রিয় প্যারেন্ট নোডগুলোর পথ মনে রাখে। বিকল্পভাবে একটি সাধারণ অ্যারে স্ট্যাক ব্যবহার করে কল স্ট্যাকের ওভারফ্লো না ঘটিয়ে অতি গভীর গ্রাফও নিরাপদে ঘুরে আসা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'depth-first-search',
          def: {
            en: 'A graph exploration strategy that progresses along a branch as deeply as possible before backtracking to unvisited forks.',
            bn: 'গ্রাফ ট্রাভার্সালের এমন একটি পদ্ধতি যা প্রতিটি শাখা বরাবর যত দূর সম্ভব গভীরে নামে এবং শেষে পেছনের মোড়ে ফিরে আসে।'
          }
        },
        {
          term: 'discovery-time',
          def: {
            en: 'A logical clock counter recorded when a vertex is first visited during downward DFS traversal.',
            bn: 'নিচের দিকে নামার সময় কোনো নোড প্রথম পরিদর্শনের মুহূর্তের লজিক্যাল ক্লক কাউন্টার।'
          }
        },
        {
          term: 'finish-time',
          def: {
            en: 'A logical clock counter recorded after all reachable descendants of a vertex have been completely explored.',
            bn: 'কোনো নোডের অধীনস্থ সমস্ত বংশধর ঘুরে শেষ করে ফিরে আসার মুহূর্তের লজিক্যাল ক্লক কাউন্টার।'
          }
        },
        {
          term: 'parenthesis-theorem',
          def: {
            en: 'The mathematical law stating that DFS discovery and finish intervals are either strictly nested or completely disjoint.',
            bn: 'গাণিতিক নীতি যা নির্দেশ করে যে DFS এর শুরু ও শেষের সময়সীমা হয় একটির ভেতর অন্যটি বাসা বাঁধে নয়তো সম্পূর্ণ আলাদা থাকে।'
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
      id: 'edge-classification-table',
      text: {
        en: 'Edge Classification in Directed DFS Forests',
        bn: 'নির্দেশিত DFS ফরেস্টে ধারের চার প্রকারভেদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard DFS run categorizes every edge in a directed graph into four precise topological classes based on vertex encounter states. These classifications expose fundamental structural properties, such as shortcuts, independent branches, and cyclic loops.',
        bn: 'একটি সাধারণ DFS ট্রাভার্সাল নোডের পরিদর্শনের অবস্থার ওপর ভিত্তি করে নির্দেশিত গ্রাফের প্রতিটি ধারকে চারটি সুনির্দিষ্ট শ্রেণিতে ভাগ করে। এই শ্রেণিবিভাগ শর্টকাট পথ, স্বাধীন শাখা এবং চক্রাকার লুপের মতো মৌলিক কাঠামোগত বৈশিষ্ট্য উন্মোচন করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Edge Category', bn: 'ধারের প্রকারভেদ' },
        { en: 'Target Node State', bn: 'গন্তব্য নোডের অবস্থা' },
        { en: 'Structural Meaning', bn: 'কাঠামোগত অর্থ' },
        { en: 'Algorithmic Significance', bn: 'অ্যালগরিদমিক গুরুত্ব' }
      ],
      rows: [
        [
          { en: 'Tree Edge', bn: 'ট্রি ধার (Tree Edge)' },
          { en: 'Unvisited target (new node)', bn: 'নতুন অপরিদর্শিত নোড' },
          { en: 'First discovery of child node', bn: 'সন্তান নোডের প্রথম আবিষ্কার' },
          { en: 'Forms the DFS spanning forest', bn: 'DFS স্প্যানিং ট্রি গঠন করে' }
        ],
        [
          { en: 'Back Edge', bn: 'ব্যাক ধার (Back Edge)' },
          { en: 'Active ancestor on current stack', bn: 'বর্তমান স্ট্যাকে থাকা পূর্বপুরুষ' },
          { en: 'Loops backward up the descent path', bn: 'পেছনের পূর্বপুরুষের দিকে ফেরা' },
          { en: 'Proves a cycle exists in the graph', bn: 'গ্রাফে চক্রের অস্তিত্ব প্রমাণ করে' }
        ],
        [
          { en: 'Forward Edge', bn: 'ফরওয়ার্ড ধার (Forward Edge)' },
          { en: 'Already completed descendant', bn: 'ইতোমধ্যে সম্পন্ন হওয়া বংশধর' },
          { en: 'Shortcut bypassing intermediate steps', bn: 'মাঝের নোড এড়িয়ে নিচের শর্টকাট' },
          { en: 'Redundant traversal shortcut', bn: 'অতিরিক্ত বিকল্প পথ' }
        ],
        [
          { en: 'Cross Edge', bn: 'ক্রস ধার (Cross Edge)' },
          { en: 'Completed node in sibling branch', bn: 'অন্য শাখার সম্পন্ন হওয়া নোড' },
          { en: 'Horizontal link between subtrees', bn: 'দুটি স্বাধীন শাখার মধ্যকার সংযোগ' },
          { en: 'Connects unrelated components', bn: 'সম্পর্কহীন উপাদানকে যুক্ত করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-dfs-code',
      text: {
        en: 'Executable DFS Timestamps Implementation',
        bn: 'ডিএফএস সময়াঙ্ক ও বন্ধনী উপপাদ্যের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program executes DFS across 4 vertices, recording entry and exit timestamps. Notice how vertex C interval [3, 4] nests inside B interval [2, 5], and both sit nested inside root A interval [1, 8], proving structural descent.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি শীর্ষবিন্দুর ওপর DFS চালায় এবং প্রবেশ ও প্রস্থানের সময় রেকর্ড করে। লক্ষ্য করুন কীভাবে শীর্ষবিন্দু C এর [৩, ৪] ব্যবধানটি B এর [২, ৫] ব্যবধানের ভেতর বাসা বাঁধে, এবং উভয়ই রুট A এর [১, ৮] ব্যবধানের ভেতর অবস্থান করে।'
      }
    },
    {
      type: 'code',
      code: `class DFSTimestamps {
  constructor() {
    this.adj = new Map();
  }

  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    this.adj.get(u).push(v);
  }

  runDFS(vertices) {
    const visited = new Set();
    const disc = new Map();
    const fin = new Map();
    let time = 0;

    const dfsVisit = (u) => {
      visited.add(u);
      disc.set(u, ++time);

      for (const v of this.adj.get(u) || []) {
        if (!visited.has(v)) {
          dfsVisit(v);
        }
      }

      fin.set(u, ++time);
    };

    for (const v of vertices) {
      if (!visited.has(v)) dfsVisit(v);
    }

    return { disc, fin };
  }
}

const g = new DFSTimestamps();
g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('A', 'D');

const vertices = ['A', 'B', 'C', 'D'];
const { disc, fin } = g.runDFS(vertices);

console.log('Vertex A timestamps [disc, fin]: [' + disc.get('A') + ', ' + fin.get('A') + ']');
// Output: Vertex A timestamps [disc, fin]: [1, 8]
console.log('Vertex B timestamps [disc, fin]: [' + disc.get('B') + ', ' + fin.get('B') + ']');
// Output: Vertex B timestamps [disc, fin]: [2, 5]
console.log('Vertex C timestamps [disc, fin]: [' + disc.get('C') + ', ' + fin.get('C') + ']');
// Output: Vertex C timestamps [disc, fin]: [3, 4]
console.log('Vertex D timestamps [disc, fin]: [' + disc.get('D') + ', ' + fin.get('D') + ']');
// Output: Vertex D timestamps [disc, fin]: [6, 7]`
    },
    {
      type: 'heading',
      id: 'recursion-vs-stack',
      text: {
        en: 'Call Stack Safety: Recursion Depth vs Heap-Allocated Stacks',
        bn: 'কল স্ট্যাক সুরক্ষা: রিকার্শন গভীরতা বনাম হিপে বরাদ্দকৃত স্ট্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern runtimes like Node.js and V8, the default call stack limit is approximately 10000 recursive frames. If you run recursive DFS on a linear chain graph with 50000 nodes, the runtime will throw a RangeError: Maximum call stack size exceeded. For deep production workloads, engineers implement DFS using an explicit array stack on the heap.',
        bn: 'আধুনিক Node.js এবং V8 ইঞ্জিনে রিকার্শনের সাধারণ কল স্ট্যাক সীমা প্রায় ১০০০০ ফ্রেম। আপনি যদি ৫০০০০ নোডের একটি দীর্ঘ রৈখিক গ্রাফে রিকার্সিভ DFS চালান, তবে প্রোগ্রামটি Maximum call stack size exceeded এরর দিয়ে ক্র্যাশ করবে। বাস্তব প্রোডাকশন সিস্টেমে গভীর গ্রাফ ভ্রমণের জন্য ইঞ্জিনিয়াররা হিপ মেমরিতে অ্যারে স্ট্যাক ব্যবহার করে থাকেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Depth before breadth: DFS explores each branch to completion before backtracking, utilizing LIFO stack mechanics.',
          bn: 'প্রস্থের আগে গভীরতা: DFS প্রতিটি শাখা সম্পূর্ণ না হওয়া পর্যন্ত সামনে এগোয় এবং তারপর LIFO স্ট্যাক ব্যবহার করে পেছনে ফেরে।'
        },
        {
          en: 'Parenthesis interval law: Active discovery and finish intervals are either nested (descendant) or disjoint (independent).',
          bn: 'বন্ধনী উপপাদ্য: শুরু ও সমাপ্তির সময়সীমা হয় একটির ভেতর অন্যটি বাসা বাঁধে (বংশধর) নয়তো সম্পূর্ণ আলাদা থাকে (স্বাধীন)।'
        },
        {
          en: 'Back edge cycle trigger: Encountering a back edge to an active ancestor proves the existence of a cycle in the graph.',
          bn: 'ব্যাক ধারের সতর্কতা: বর্তমান স্ট্যাকে সক্রিয় কোনো পূর্বপুরুষের দিকে ধার থাকলে তা গ্রাফে চক্রের অস্তিত্ব নিশ্চিত করে।'
        },
        {
          en: 'Call stack resilience: Production systems replace recursive DFS with explicit heap-allocated stacks to handle deep graphs safely.',
          bn: 'কল স্ট্যাকের সুরক্ষা: গভীর গ্রাফে ক্র্যাশ এড়াতে বাস্তব সিস্টেমে রিকার্শনের বদলে হিপ-ভিত্তিক স্পষ্ট অ্যারে স্ট্যাক ব্যবহার করা হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'po-ex1',
      kind: 'mcq',
      topic: 'parenthesis-theorem-nesting',
      question: {
        en: 'Under the DFS Parenthesis Theorem, what does it mean if interval [disc(v), fin(v)] is strictly contained inside [disc(u), fin(u)]?',
        bn: 'DFS বন্ধনী উপপাদ্য অনুসারে, [disc(v), fin(v)] ব্যবধানটি যদি সম্পূর্ণভাবে [disc(u), fin(u)] এর ভেতর অবস্থান করে, তবে এর অর্থ কী?'
      },
      options: [
        {
          en: 'Vertex v is a descendant of vertex u in the DFS tree',
          bn: 'DFS ট্রিতে শীর্ষবিন্দু v হলো শীর্ষবিন্দু u এর একটি অধস্তন বংশধর'
        },
        {
          en: 'Vertex v is disconnected from the graph entirely',
          bn: 'শীর্ষবিন্দু v গ্রাফ থেকে সম্পূর্ণ বিচ্ছিন্ন'
        },
        {
          en: 'Vertex u and vertex v have identical degrees',
          bn: 'শীর্ষবিন্দু u এবং v এর ডিগ্রি সমান'
        },
        {
          en: 'The graph has no edges',
          bn: 'গ্রাফে কোনো ধার নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'If v was entered after u and completed before u finished, who was active during v’s entire lifetime?',
        bn: 'v যদি u এর পরে শুরু হয় এবং u শেষ হওয়ার আগেই শেষ হয়, তবে v এর সম্পূর্ণ যাত্রায় কে সক্রিয় ছিল?'
      },
      explanation: {
        en: 'Nesting proves that v was discovered and explored during the ongoing traversal of u, making v a direct descendant of u.',
        bn: 'একটি ব্যবধানের ভেতর অন্যটি থাকার অর্থ হলো u এর কাজের মাঝেই v আবিষ্কৃত ও শেষ হয়েছে, তাই v হলো u এর বংশধর।'
      }
    },
    {
      id: 'po-ex2',
      kind: 'mcq',
      topic: 'back-edge-implication',
      question: {
        en: 'What structural property does encountering a Back Edge during a DFS traversal prove?',
        bn: 'একটি DFS ট্রাভার্সাল চলাকালে ব্যাক ধার (Back Edge) দেখা পেলে তা কোন কাঠামোগত বৈশিষ্ট্য প্রমাণ করে?'
      },
      options: [
        {
          en: 'The graph contains at least one cycle, connecting a descendant back to an active ancestor on the call stack',
          bn: 'গ্রাফটিতে অন্তত একটি চক্র রয়েছে, যা একজন বংশধরকে কল স্ট্যাকে থাকা পূর্বপুরুষের সাথে পুনরায় যুক্ত করেছে'
        },
        {
          en: 'The graph is a binary search tree',
          bn: 'গ্রাফটি একটি বাইনারি সার্চ ট্রি'
        },
        {
          en: 'All edge weights are negative',
          bn: 'সমস্ত ধারের ওজন ঋণাত্মক'
        },
        {
          en: 'The graph has exactly 0 vertices',
          bn: 'গ্রাফে ঠিক ০টি শীর্ষবিন্দু রয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If node C points back to node A, and A is currently on the active stack above C, can you walk in a loop?',
        bn: 'নোড C যদি নোড A এর দিকে নির্দেশ করে এবং A যদি তখনো C এর ওপরে স্ট্যাকে থাকে, তবে কি একটি বৃত্তাকার পথ তৈরি হয়?'
      },
      explanation: {
        en: 'A back edge connects to an active ancestor whose subtree is not yet sealed, completing a closed directed cycle.',
        bn: 'ব্যাক ধার এমন একজন সক্রিয় পূর্বপুরুষের সাথে যুক্ত হয় যার কাজ এখনো শেষ হয়নি, ফলে একটি বদ্ধ চক্র সম্পন্ন হয়।'
      }
    },
    {
      id: 'po-ex3',
      kind: 'mcq',
      topic: 'recursion-stack-overflow-risk',
      question: {
        en: 'Why do production systems replace recursive DFS with an explicit array stack when exploring very deep graphs (e.g. 50000 sequential nodes)?',
        bn: 'খুব গভীর গ্রাফ (যেমন ৫০০০০ ধারাবাহিক নোড) ঘোরার সময় বাস্তব সিস্টেমগুলো কেন রিকার্সিভ DFS এর বদলে স্পষ্ট অ্যারে স্ট্যাক ব্যবহার করে?'
      },
      options: [
        {
          en: 'To prevent Maximum Call Stack Size Exceeded errors caused by runtime limits on thread call stack memory',
          bn: 'থ্রেড কল স্ট্যাকের সীমিত মেমরির কারণে Maximum Call Stack Size Exceeded এরর ঘটা প্রতিরোধ করতে'
        },
        {
          en: 'Because array stacks run on the graphics card',
          bn: 'কারণ অ্যারে স্ট্যাক গ্রাফিক্স কার্ডে চলে'
        },
        {
          en: 'Because recursive functions cannot accept string parameters',
          bn: 'কারণ রিকার্সিভ ফাংশন টেক্সট প্যারামিটার নিতে পারে না'
        },
        {
          en: 'Because arrays automatically reverse edge directions',
          bn: 'কারণ অ্যারে স্বয়ংক্রিয়ভাবে ধারের দিক উল্টে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Call stacks have tight limits (e.g. 10,000 frames), whereas heap memory holds gigabytes of array data.',
        bn: 'কল স্ট্যাকের সীমা সীমিত (যেমন ১০,০০০ ফ্রেম), কিন্তু হিপ মেমরিতে গিগাবাইট পরিমাণ ডেটা রাখা যায়।'
      },
      explanation: {
        en: 'Managing the stack explicitly in heap memory removes call stack limits, allowing traversals to plunge to millions of levels safely.',
        bn: 'হিপ মেমরিতে স্ট্যাক পরিচালনা করলে কল স্ট্যাকের সীমাবদ্ধতা কেটে যায় এবং লক্ষ লক্ষ গভীরতার গ্রাফও নিরাপদে ঘোরা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-plunge-order-quiz',
    title: {
      en: 'Depth-First Search and Timestamps Quiz',
      bn: 'ডেপথ-ফার্স্ট সার্চ এবং সময়াঙ্ক কুইজ'
    },
    questions: [
      {
        id: 'po-q1',
        kind: 'mcq',
        topic: 'cross-edge-definition',
        question: {
          en: 'What is a Cross Edge in a directed DFS traversal?',
          bn: 'একটি নির্দেশিত DFS ট্রাভার্সালে ক্রস ধার (Cross Edge) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'An edge connecting to a vertex that is already finished (black) but has no ancestor or descendant relationship to the current vertex',
            bn: 'এমন একটি ধার যা ইতোমধ্যে কাজ শেষ হওয়া (কালো) নোডের সাথে যুক্ত, কিন্তু যার সাথে বর্তমান নোডের কোনো পূর্বপুরুষ বা বংশধর সম্পর্ক নেই'
          },
          {
            en: 'An edge with weight 0',
            bn: '০ ওজনের একটি ধার'
          },
          {
            en: 'An edge that connects a vertex to itself',
            bn: 'একটি ধার যা নোডকে নিজের সাথেই যুক্ত করে'
          },
          {
            en: 'An edge stored on a flash drive',
            bn: 'পেনড্রাইভে সংরক্ষিত একটি ধার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cross edges bridge two branches of the DFS forest that have already been explored independently.',
          bn: 'ক্রস ধার এমন দুটি শাখার মাঝে সেতু তৈরি করে যাদের একটির কাজ আগেই স্বাধীনভাবে শেষ হয়ে গেছে।'
        },
        explanation: {
          en: 'A cross edge points from one branch to an already-sealed branch, satisfying fin(v) < disc(u).',
          bn: 'ক্রস ধার এক শাখা থেকে অন্য একটি পূর্ব-সম্পন্ন শাখায় নির্দেশ করে, যা fin(v) < disc(u) শর্ত পূরণ করে।'
        }
      },
      {
        id: 'po-q2',
        kind: 'mcq',
        topic: 'dfs-time-complexity-proof',
        question: {
          en: 'What is the time complexity of a complete DFS traversal over a graph with V vertices and E edges represented as an Adjacency List?',
          bn: 'অ্যাজেসেন্সি লিস্টে রাখা V শীর্ষবিন্দু এবং E ধার বিশিষ্ট গ্রাফে সম্পূর্ণ DFS ট্রাভার্সালের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(V + E) time, as each vertex is visited once and each edge is examined once per endpoint',
            bn: 'O(V + E) সময়, কারণ প্রতিটি নোড একবার পরিদর্শিত হয় এবং প্রতিটি ধার প্রান্তপ্রতি একবার করে দেখা হয়'
          },
          {
            en: 'O(V^2) time always',
            bn: 'সর্বদা O(V^2) সময়'
          },
          {
            en: 'O(V log V) time',
            bn: 'O(V log V) সময়'
          },
          {
            en: 'O(E^2) time',
            bn: 'O(E^2) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The recursive function is entered exactly once per vertex, and the loop touches each neighbor list.',
          bn: 'প্রতিটি নোডের জন্য ফাংশনটি ঠিক একবার কল হয় এবং ভেতরের লুপটি প্রতিবেশীর তালিকা একবার স্ক্যান করে।'
        },
        explanation: {
          en: 'Summing the work over all vertices V and all edges E yields optimal linear O(V + E) runtime.',
          bn: 'সমস্ত নোড V এবং ধার E এর কাজ যোগ করলে সর্বোত্তম রৈখিক O(V + E) রানটাইম পাওয়া যায়।'
        }
      },
      {
        id: 'po-q3',
        kind: 'mcq',
        topic: 'finish-time-sorting-property',
        question: {
          en: 'In a Directed Acyclic Graph (DAG), what do vertices sorted in descending order of their DFS finish times represent?',
          bn: 'একটি নির্দেশিত অচক্রিক গ্রাফে (DAG) নোডগুলোকে তাদের DFS সমাপ্তির সময়ের অধোগামী ক্রমে সাজালে কী পাওয়া যায়?'
        },
        options: [
          {
            en: 'A valid Topological Sort, where every directed edge points from an earlier vertex to a later vertex',
            bn: 'একটি সঠিক টপোলজিক্যাল সর্ট, যেখানে প্রতিটি নির্দেশিত ধার পূর্ববর্তী নোড থেকে পরবর্তী নোডের দিকে যায়'
          },
          {
            en: 'The shortest path from root to leaf',
            bn: 'রুট থেকে পাতার সর্বনিম্ন পথ'
          },
          {
            en: 'A list of all isolated vertices',
            bn: 'সমস্ত বিচ্ছিন্ন নোডের তালিকা'
          },
          {
            en: 'An AVL tree balance factor',
            bn: 'এভিএল ট্রির ব্যালান্স ফ্যাক্টর'
          }
        ],
        answer: 0,
        hint: {
          en: 'If edge u -> v exists in a DAG, which vertex finishes later in DFS?',
          bn: 'একটি DAG-এ যদি u -> v ধার থাকে, তবে DFS-এ কোন নোডটির কাজ পরে শেষ হবে?'
        },
        explanation: {
          en: 'In a DAG, for any edge u -> v, fin(u) > fin(v). Sorting by descending finish time places u before v, creating a topological order.',
          bn: 'একটি DAG-এ যেকোনো ধার u -> v এর জন্য fin(u) > fin(v) হয়। সমাপ্তির বড় থেকে ছোট ক্রমে সাজালে u আগে বসে, যা টপোলজিক্যাল ক্রম তৈরি করে।'
        }
      },
      {
        id: 'po-q4',
        kind: 'mcq',
        topic: 'dfs-vs-bfs-memory-worst-case',
        question: {
          en: 'Compare the worst-case space complexity of DFS versus BFS on a balanced binary tree of n nodes.',
          bn: 'n নোডের একটি সুষম বাইনারি ট্রিতে DFS বনাম BFS এর সবচেয়ে খারাপ ক্ষেত্রে মেমরি খরচের তুলনা করুন।'
        },
        options: [
          {
            en: 'DFS uses O(log n) stack space (tree height), while BFS uses O(n) queue space (bottom leaf layer)',
            bn: 'DFS কেবল O(log n) স্ট্যাক স্পেস ব্যবহার করে (ট্রির উচ্চতা), যেখানে BFS সম্পূর্ণ O(n) কিউ স্পেস ব্যবহার করে (নিচের পাতার স্তর)'
          },
          {
            en: 'DFS uses O(n^2) space while BFS uses O(1) space',
            bn: 'DFS O(n^2) স্পেস নেয় এবং BFS O(1) স্পেস নেয়'
          },
          {
            en: 'Both algorithms use exactly 0 bytes of memory',
            bn: 'উভয় অ্যালগরিদম ঠিক ০ বাইট মেমরি ব্যবহার করে'
          },
          {
            en: 'BFS uses O(1) space on all trees',
            bn: 'সমস্ত ট্রিতে BFS O(1) স্পেস নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'On a balanced tree, how deep does DFS go versus how wide is the last level in BFS?',
          bn: 'একটি সুষম ট্রিতে DFS কত গভীরে যায় বনাম BFS এর শেষ স্তরটি কতটা চওড়া হয়?'
        },
        explanation: {
          en: 'DFS tracks a single root-to-leaf path bounded by height O(log n), whereas BFS buffers the entire widest level containing n / 2 leaves.',
          bn: 'DFS ট্রির উচ্চতা O(log n) বরাবর একটি একক পথ মনে রাখে, পক্ষান্তরে BFS শেষ স্তরের n / ২ সংখ্যক পাতা একসাথেই কিউতে জমা করে।'
        }
      }
    ]
  }
};
