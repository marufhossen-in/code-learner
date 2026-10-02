import type { Lesson } from '../../../lib/types';

export const pathsThroughWorldsLesson: Lesson = {
  slug: 'paths-through-worlds',
  tech: 'graphs',
  title: {
    en: 'Paths and Traversal — Connected Components and Island Census',
    bn: 'পথ ও ট্রাভার্সাল: সংযুক্ত উপাদান এবং আইল্যান্ড সেন্সাস'
  },
  summary: {
    en: 'Traversing graphs introduces a fundamental risk absent in trees: infinite loops caused by cyclic paths. To navigate arbitrary networks safely, graph algorithms rely on visited sets that mark vertices upon discovery. An undirected graph may partition into multiple isolated subgraphs known as connected components. We analyze path existence, examine how marking nodes at discovery prevents redundant queue allocations, and build an island census algorithm that partitions disconnected graphs in O(V + E) time.',
    bn: 'গ্রাফে ট্রাভার্সাল করার সময় একটি গুরুতর ঝুঁকি তৈরি হয় যা ট্রিতে ছিল না: চক্রাকার পথে আটকে অনন্ত লুপে ঘোরা। যেকোনো নেটওয়ার্কে নিরাপদে ঘুরতে অ্যালগরিদমগুলো নোড দেখামাত্র ভিজিটেড সেটে দাগ কাটে। একটি অমুখী গ্রাফ একাধিক বিচ্ছিন্ন উপ-গ্রাফ বা সংযুক্ত উপাদানে ভাগ হয়ে যেতে পারে। আমরা পথের অস্তিত্ব বিশ্লেষণ করি, দেখাই কীভাবে আবিষ্কারের সাথে সাথে দাগ কাটলে বাড়তি মেমরি খরচ বাঁচে এবং O(V + E) সময়ে বিচ্ছিন্ন আইল্যান্ড সেন্সাস অ্যালগরিদম তৈরি করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-wavefront-law',
    tech: 'graphs',
    title: {
      en: 'The Wavefront Law — Breadth-First Search and Shortest Hops',
      bn: 'তরঙ্গমুখের বিধান: ব্রেডথ-ফার্স্ট সার্চ এবং স্বল্পতম পথ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'reachability-and-paths',
      text: {
        en: 'From Point A to Point B: Paths, Walks, and Cycles',
        bn: 'বিন্দু A থেকে B: পথ, পদচারণা এবং চক্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you navigate a tree from the root, you are guaranteed that exactly one unique path leads to any given destination. In general graphs, multiple alternate routes can connect two vertices, and corridors can loop back onto themselves. Without protective tracking, any naive traversal algorithm will circulate indefinitely within cycles.',
        bn: 'যখন আপনি ট্রির রুট থেকে যাত্রা শুরু করেন, তখন যেকোনো নোডে পৌঁছানোর ঠিক একটিমাত্র পথ থাকে। কিন্তু সাধারণ গ্রাফে দুটি বিন্দুর মাঝে একাধিক বিকল্প পথ থাকতে পারে এবং করিডরগুলো নিজের দিকে ফিরে আসতে পারে। সতর্কতামূলক ট্র্যাকিং ছাড়া যেকোনো সাধারণ ট্রাভার্সাল অ্যালগরিদম চক্রের ভেতর অনন্তকাল ঘুরতে থাকবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To make traversal deterministic and safe, graph algorithms maintain a visited registry. A simple hash set or boolean array records every vertex discovered. By refusing to re-enter previously visited vertices, graph exploration terminates cleanly in O(V + E) operations.',
        bn: 'ট্রাভার্সালকে নিরাপদ ও সুনির্দিষ্ট করতে গ্রাফ অ্যালগরিদমগুলো একটি ভিজিটেড রেজিস্ট্রি ব্যবহার করে। একটি সাধারণ হ্যাশ সেট বা বুলিয়ান অ্যারে দেখা হওয়া প্রতিটি শীর্ষবিন্দুকে লিখে রাখে। পূর্বে পরিদর্শিত নোডে পুনরায় প্রবেশ না করার মাধ্যমে সম্পূর্ণ গ্রাফ ভ্রমণ নির্ভুলভাবে O(V + E) ধাপে শেষ হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'path',
          def: {
            en: 'An alternating sequence of vertices and edges connecting a starting vertex to a destination without repeating vertices.',
            bn: 'একই শীর্ষবিন্দু পুনরাবৃত্তি না করে কোনো শুরুর নোড থেকে গন্তব্যে পৌঁছানোর ধার ও নোডের অবিচ্ছিন্ন ক্রম।'
          }
        },
        {
          term: 'connected-component',
          def: {
            en: 'A maximal connected subgraph in an undirected graph where every vertex can reach every other vertex via some path.',
            bn: 'একটি অমুখী গ্রাফের এমন একটি বৃহত্তম উপ-গ্রাফ যার প্রতিটি শীর্ষবিন্দু অন্য যেকোনো শীর্ষবিন্দুতে পৌঁছাতে পারে।'
          }
        },
        {
          term: 'visited-set',
          def: {
            en: 'A data structure (Set or boolean array) tracking discovered vertices to prevent infinite cycles during traversal.',
            bn: 'ট্রাভার্সালের সময় চক্রাকার পথে অনন্ত লুপ এড়াতে দেখা হয়ে যাওয়া নোডগুলোকে সংরক্ষণকারী সেট বা বুলিয়ান অ্যারে।'
          }
        },
        {
          term: 'mark-on-discovery',
          def: {
            en: 'The invariant of marking a vertex as visited immediately when discovered (pushed), preventing duplicate queue entries.',
            bn: 'নোড খুঁজে পাওয়া মাত্রই তাকে ভিজিটেড হিসেবে চিহ্নিত করার নিয়ম যা কিউতে একই নোডের একাধিকবার ঢোকা ঠেকায়।'
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
      id: 'connected-components-table',
      text: {
        en: 'Connectivity Classes: Connected vs Disconnected Networks',
        bn: 'সংযুক্ততার শ্রেণিবিভাগ: সংযুক্ত বনাম বিচ্ছিন্ন নেটওয়ার্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An undirected graph is not required to be a single unified network. Real-world platforms frequently contain isolated subgraphs: isolated communities in a social web, or network partitions in a distributed cloud datacenter. Exploring the whole graph requires an outer loop over all vertices.',
        bn: 'একটি অমুখী গ্রাফ যে সর্বদা একটিমাত্র অখণ্ড নেটওয়ার্ক হবে এমন কোনো বাধ্যবাধকতা নেই। বাস্তব জগতে প্রায়ই বিচ্ছিন্ন উপ-গ্রাফ দেখা যায়: যেমন সামাজিক মাধ্যমের বিচ্ছিন্ন দল বা ক্লাউড ডেটাসেন্টারের আলাদা সাবনেট। পুরো গ্রাফকে জানতে সমস্ত শীর্ষবিন্দুর ওপর একটি বাহ্যিক লুপ চালাতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Network State', bn: 'নেটওয়ার্কের অবস্থা' },
        { en: 'Component Count', bn: 'উপাদান সংখ্যা' },
        { en: 'Reachability Property', bn: 'পৌঁছানোর বৈশিষ্ট্য' },
        { en: 'Production Example', bn: 'বাস্তব উদাহরণ' }
      ],
      rows: [
        [
          { en: 'Connected Graph', bn: 'সম্পূর্ণ সংযুক্ত গ্রাফ' },
          { en: 'Exactly 1 component', bn: 'ঠিক ১টি উপাদান' },
          { en: 'Every node reaches every other node', bn: 'প্রতিটি নোড অন্য সব নোডে পৌঁছায়' },
          { en: 'Healthy global internet routing mesh', bn: 'সচল বৈশ্বিক ইন্টারনেট রাউটিং' }
        ],
        [
          { en: 'Disconnected Graph', bn: 'বিচ্ছিন্ন গ্রাফ' },
          { en: '2 or more components', bn: '২ বা ততোধিক উপাদান' },
          { en: 'Subgraphs are mutually unreachable', bn: 'উপ-গ্রাফগুলো পরস্পরের কাছে পৌঁছায় না' },
          { en: 'Network partition during cloud split-brain', bn: 'ক্লাউডে নেটওয়ার্ক বিভাজন' }
        ],
        [
          { en: 'Empty / Null Graph', bn: 'সম্পূর্ণ সংযোগহীন গ্রাফ' },
          { en: 'Exactly V isolated components', bn: 'ঠিক V সংখ্যক বিচ্ছিন্ন উপাদান' },
          { en: 'Zero edges; nodes reach only themselves', bn: 'কোনো ধার নেই; নোড কেবল নিজের সাথে যুক্ত' },
          { en: 'Newly registered users with zero contacts', bn: 'বন্ধুহীন নতুন ব্যবহারকারী' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-island-code',
      text: {
        en: 'Executable Connected Components Implementation',
        bn: 'সংযুক্ত উপাদান ও আইল্যান্ড সেন্সাসের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program identifies all connected components across 6 vertices. Notice how the outer loop discovers 3 distinct island groups: Island 1 with 3 vertices, Island 2 with 2 vertices, and Island 3 containing a solitary isolated vertex.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৬টি শীর্ষবিন্দুর মধ্যে সমস্ত সংযুক্ত উপাদান বা দ্বীপ চিহ্নিত করে। লক্ষ্য করুন কীভাবে বাইরের লুপটি ৩টি আলাদা দল খুঁজে পায়: ৩টি শীর্ষের ১ম দ্বীপ, ২টি শীর্ষের ২য় দ্বীপ এবং ১টি বিচ্ছিন্ন শীর্ষবিন্দুর ৩য় দ্বীপ।'
      }
    },
    {
      type: 'code',
      code: `class IslandCensus {
  constructor() {
    this.adj = new Map();
  }

  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u).push(v);
    this.adj.get(v).push(u);
  }

  countComponents(vertices) {
    const visited = new Set();
    const components = [];

    for (const v of vertices) {
      if (!visited.has(v)) {
        const currentIsland = [];
        const queue = [v];
        visited.add(v);

        while (queue.length > 0) {
          const curr = queue.shift();
          currentIsland.push(curr);

          for (const neighbor of this.adj.get(curr) || []) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          }
        }
        components.push(currentIsland);
      }
    }
    return components;
  }
}

const world = new IslandCensus();
world.addEdge('A', 'B');
world.addEdge('B', 'C');
world.addEdge('D', 'E');

const allVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
const islands = world.countComponents(allVertices);

console.log('Total Discovered Components:', islands.length);
// Output: Total Discovered Components: 3
islands.forEach((island, idx) => {
  console.log(\`Component \${idx + 1} (\${island.length} vertices): \${island.join(', ')}\`);
});
// Output: Component 1 (3 vertices): A, B, C
// Output: Component 2 (2 vertices): D, E
// Output: Component 3 (1 vertices): F`
    },
    {
      type: 'heading',
      id: 'delayed-marking-trap',
      text: {
        en: 'The Danger of Delayed Marking: Discovery vs Processing Time',
        bn: 'দেরিতে দাগ কাটার বিপদ: আবিষ্কার বনাম প্রসেসিং সময়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent bug among beginners is marking vertices when popping from the queue instead of when pushing. In a dense graph, multiple active neighbors can see the same unvisited node and enqueue it repeatedly. Marking immediately upon discovery prevents exponential queue explosion and preserves O(V + E) efficiency.',
        bn: 'নতুনদের একটি সাধারণ ভুল হলো কিউ থেকে বের করার পর নোডকে ভিজিটেড দাগ দেওয়া, ভেতরে ঢোকানোর সময় নয়। ঘন গ্রাফে একাধিক প্রতিবেশী একই নোডকে দেখে বারবার কিউতে পুশ করে ফেলতে পারে। দেখার সাথে সাথে আবিষ্কারের মুহূর্তেই দাগ কাটলে কিউ ফুলে ফেঁপে ওঠা বন্ধ হয় এবং O(V + E) গতি অক্ষুণ্ণ থাকে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Cycle immunity: Visited tracking is required in graphs to prevent traversal from falling into infinite loops.',
          bn: 'চক্র থেকে সুরক্ষা: গ্রাফের ট্রাভার্সাল যেন অনন্ত লুপে না পড়ে সেজন্য ভিজিটেড ট্র্যাকিং রাখা আবশ্যকীয়।'
        },
        {
          en: 'Mark at discovery: Always mark vertices when pushing into queues or stacks, never upon popping.',
          bn: 'আবিষ্কারেই দাগ: কিউ বা স্ট্যাকে পুশ করার মুহূর্তেই নোডকে ভিজিটেড দাগ দিন, পপ করার সময় নয়।'
        },
        {
          en: 'Island decomposition: Disconnected graphs partition into independent connected components discovered via an outer vertex loop.',
          bn: 'দ্বীপের বিভাজন: বিচ্ছিন্ন গ্রাফ স্বাধীন সংযুক্ত উপাদানে ভাগ হয়ে যায় যা শীর্ষবিন্দুর বাইরের লুপ দিয়ে আবিষ্কার করা হয়।'
        },
        {
          en: 'Linear work bound: Connected components exploration takes optimal O(V + E) time, inspecting each vertex and edge once.',
          bn: 'রৈখিক কাজের সীমা: সংযুক্ত উপাদানের অনুসন্ধান প্রতিটি নোড ও ধার একবার দেখার মাধ্যমে সর্বোচ্চ O(V + E) সময়ে সম্পন্ন হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pt-ex1',
      kind: 'mcq',
      topic: 'delayed-marking-queue-bloat',
      question: {
        en: 'What dangerous performance defect occurs if an engineer marks vertices as visited upon popping from the queue rather than upon pushing?',
        bn: 'কিউতে পুশ করার বদলে পপ করার সময় নোডকে ভিজিটেড দাগ দিলে কোন মারাত্মক পারফরম্যান্স ত্রুটি দেখা দেয়?'
      },
      options: [
        {
          en: 'The queue experiences massive bloat because multiple adjacent nodes push the same unvisited neighbor repeatedly before it is popped',
          bn: 'কিউ অস্বাভাবিক ফুলে যায় কারণ একই প্রতিবেশীকে পপ করার আগেই তার একাধিক প্রতিবেশী বারবার কিউতে পুশ করে ফেলে'
        },
        {
          en: 'The program immediately crashes with a syntax error',
          bn: 'প্রোগ্রাম সাথে সাথে সিনট্যাক্স এররে ক্র্যাশ করে'
        },
        {
          en: 'The graph edges are permanently deleted from memory',
          bn: 'গ্রাফের ধারগুলো মেমরি থেকে চিরতরে মুছে যায়'
        },
        {
          en: 'The degree of every vertex drops to 0',
          bn: 'প্রতিটি শীর্ষবিন্দুর ডিগ্রি ০ এ নেমে আসে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If nodes A, B, and C all connect to node D, and none marks D when enqueueing, how many times is D pushed?',
        bn: 'A, B এবং C প্রত্যেকে D এর সাথে যুক্ত থাকলে এবং পুশের সময় দাগ না দিলে D কয়বার কিউতে ঢুকবে?'
      },
      explanation: {
        en: 'Mark-on-discovery ensures each vertex enters the queue exactly once. Delaying the stamp allows exponential duplicates to enter the queue.',
        bn: 'আবিষ্কারের সাথে দাগ দিলে প্রতিটি নোড কিউতে ঠিক একবারই ঢোকে। দেরি করলে একই নোড অগণিতবার কিউতে ঢুকে মেমরি ভরিয়ে ফেলে।'
      }
    },
    {
      id: 'pt-ex2',
      kind: 'mcq',
      topic: 'connected-component-algorithm',
      question: {
        en: 'How does an algorithm discover ALL connected components in an undirected graph that may be disconnected?',
        bn: 'একটি বিচ্ছিন্ন অমুখী গ্রাফের সমস্ত সংযুক্ত উপাদান কীভাবে খুঁজে বের করা যায়?'
      },
      options: [
        {
          en: 'Iterate through all vertices 1 to V; whenever a vertex is not yet visited, increment the island count and traverse its entire component',
          bn: '১ থেকে V পর্যন্ত সমস্ত নোডের ওপর লুপ চালান; কোনো নোড ভিজিটেড না থাকলে দ্বীপের সংখ্যা ১ বাড়িয়ে তার পুরো উপ-গ্রাফ ঘুরে আসুন'
        },
        {
          en: 'Sort all vertices by name and select the first vertex',
          bn: 'শীর্ষবিন্দুগুলোকে নামের ক্রমানুসারে সাজিয়ে প্রথমটি বেছে নিন'
        },
        {
          en: 'Compute the inverse of the adjacency matrix',
          bn: 'অ্যাজেসেন্সি ম্যাট্রিক্সের বিপরীত ম্যাট্রিক্স বের করুন'
        },
        {
          en: 'Delete all edges that have even weights',
          bn: 'জোড় ওজনের সমস্ত ধার মুছে ফেলুন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does a single traversal from vertex A guarantee reaching vertices on a disconnected island?',
        bn: 'শীর্ষবিন্দু A থেকে শুরু করা একটিমাত্র ট্রাভার্সাল কি অন্য কোনো বিচ্ছিন্ন দ্বীপে পৌঁছাতে পারে?'
      },
      explanation: {
        en: 'An outer loop across all vertices ensures that every disconnected component is visited, discovering each island sequentially in O(V + E) time.',
        bn: 'বাইরের লুপটি নিশ্চিত করে যে প্রতিটি বিচ্ছিন্ন দ্বীপেই একবার ট্রাভার্সাল শুরু হবে, যা পুরো গ্রাফকে O(V + E) সময়ে স্ক্যান করে।'
      }
    },
    {
      id: 'pt-ex3',
      kind: 'mcq',
      topic: 'connected-components-time-complexity',
      question: {
        en: 'What is the total time complexity to count all connected components using an Adjacency List for graph G = (V, E)?',
        bn: 'G = (V, E) গ্রাফের জন্য অ্যাজেসেন্সি লিস্ট ব্যবহার করে সমস্ত সংযুক্ত উপাদান বের করার মোট সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(V + E) linear time, because every vertex and edge is examined at most twice',
          bn: 'O(V + E) রৈখিক সময়, কারণ প্রতিটি শীর্ষবিন্দু ও ধার সর্বোচ্চ দুইবার পরীক্ষা করা হয়'
        },
        {
          en: 'O(V^3) cubic time',
          bn: 'O(V^3) ত্রিঘাত সময়'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(1) ধ্রুবক সময়'
        },
        {
          en: 'O(E log V) logarithmic time',
          bn: 'O(E log V) লগারিদমিক সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each vertex is visited once, and each edge is traversed once from each endpoint in an undirected graph.',
        bn: 'প্রতিটি নোড একবার দেখা হয় এবং প্রতিটি ধার উভয় প্রান্ত থেকে একবার করে মোট দুইবার দেখা হয়।'
      },
      explanation: {
        en: 'The outer loop touches V nodes, and the traversal inspects all E edges across all components, summing strictly to O(V + E).',
        bn: 'বাইরের লুপটি V নোড পরীক্ষা করে এবং ভেতরের ট্রাভার্সাল সব মিলিয়ে E সংখ্যক ধার স্ক্যান করে, ফলে মোট সময় O(V + E) হয়।'
      }
    }
  ],
  quiz: {
    id: 'paths-through-worlds-quiz',
    title: {
      en: 'Paths, Reachability, and Island Census Quiz',
      bn: 'পথ, প্রাপ্যতা এবং আইল্যান্ড সেন্সাস কুইজ'
    },
    questions: [
      {
        id: 'pt-q1',
        kind: 'mcq',
        topic: 'unvisited-shortfall-meaning',
        question: {
          en: 'If a graph traversal starting from vertex A discovers 847 vertices out of 1204 total vertices in the graph, what does this indicate?',
          bn: 'গ্রাফের ১২০৪টি নোডের মধ্যে শীর্ষবিন্দু A থেকে শুরু করা একটি ট্রাভার্সাল যদি ৮৪৭টি নোড খুঁজে পায়, তবে এটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The graph is disconnected; exactly 1204 - 847 = 357 vertices reside in isolated components unreachable from A',
            bn: 'গ্রাফটি বিচ্ছিন্ন; ঠিক ১২০৪ - ৮৪৭ = ৩৫৭টি নোড অন্যান্য বিচ্ছিন্ন উপাদানে রয়েছে যা A থেকে পৌঁছানো সম্ভব নয়'
          },
          {
            en: 'The computer processor has run out of registers',
            bn: 'কম্পিউটার প্রসেসরের রেজিস্টার শেষ হয়ে গেছে'
          },
          {
            en: 'A traversal algorithm failed and must be deleted',
            bn: 'ট্রাভার্সাল অ্যালগরিদম ব্যর্থ হয়েছে এবং এটি মুছে ফেলতে হবে'
          },
          {
            en: 'The graph has negative weight cycles',
            bn: 'গ্রাফে ঋণাত্মক ওজনের চক্র রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can a walk cross empty space where no connecting edges exist?',
          bn: 'যেখানে কোনো ধার বা সংযোগ নেই সেখানে কি হেঁটে যাওয়া সম্ভব?'
        },
        explanation: {
          en: 'A single traversal discovers only the component containing the start node. The remaining 357 vertices belong to other isolated islands.',
          bn: 'একটিমাত্র ট্রাভার্সাল কেবল শুরুর নোডের দ্বীপটিকেই আবিষ্কার করে। বাকি ৩৫৭টি নোড অন্য বিচ্ছিন্ন দ্বীপে অবস্থান করে।'
        }
      },
      {
        id: 'pt-q2',
        kind: 'mcq',
        topic: 'bipartite-graph-definition',
        question: {
          en: 'What is a bipartite graph?',
          bn: 'একটি বাইপার্টাইট (দ্বি-বিভক্ত) গ্রাফ বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'A graph whose vertices can be partitioned into two disjoint sets such that every edge connects a vertex in the first set to one in the second set',
            bn: 'এমন একটি গ্রাফ যার নোডগুলোকে এমন দুটি আলাদা দলে ভাগ করা যায় যেন প্রতিটি ধার প্রথম দলের সাথে দ্বিতীয় দলের নোডকে যুক্ত করে'
          },
          {
            en: 'A graph that contains exactly 2 vertices and 1 edge',
            bn: 'এমন একটি গ্রাফ যাতে ঠিক ২টি নোড এবং ১টি ধার থাকে'
          },
          {
            en: 'A tree where every internal node has 4 children',
            bn: 'এমন একটি ট্রি যার প্রতিটি ভেতরের নোডের ৪টি সন্তান থাকে'
          },
          {
            en: 'A graph with zero edges',
            bn: 'কোনো ধার না থাকা একটি গ্রাফ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can two vertices in the same set have an edge connecting them in a bipartite graph?',
          bn: 'বাইপার্টাইট গ্রাফে একই দলের দুটি নোডের মাঝে কি কোনো ধার থাকতে পারে?'
        },
        explanation: {
          en: 'A bipartite graph can be 2-colored such that no two adjacent vertices share the same color, meaning it contains no odd-length cycles.',
          bn: 'বাইপার্টাইট গ্রাফকে ২টি রঙে এমনভাবে রাঙানো যায় যেন পাশাপাশি থাকা নোডের রঙ একই না হয়, যার অর্থ এতে কোনো বিজোড় দৈর্ঘ্যের চক্র থাকে না।'
        }
      },
      {
        id: 'pt-q3',
        kind: 'mcq',
        topic: 'visited-set-lookup-complexity',
        question: {
          en: 'Why is a Hash Set or boolean array preferred over an unsorted JavaScript array for the `visited` collection in graph algorithms?',
          bn: 'গ্রাফ অ্যালগরিদমে `visited` সংগ্রহের জন্য সাধারণ অ-সাজানো অ্যারের চেয়ে হ্যাশ সেট বা বুলিয়ান অ্যারে কেন শ্রেয়?'
        },
        options: [
          {
            en: 'Set.has(v) performs in O(1) average time, whereas array.includes(v) takes slow O(V) linear time per inspection',
            bn: 'Set.has(v) গড়ে O(1) সময়ে কাজ করে, যেখানে array.includes(v) প্রতিবার খুঁজতে গিয়ে O(V) রৈখিক সময় অপচয় করে'
          },
          {
            en: 'JavaScript arrays cannot store numbers greater than 100',
            bn: 'জাভাস্ক্রিপ্ট অ্যারে ১০০ এর বেশি সংখ্যা রাখতে পারে না'
          },
          {
            en: 'Arrays are automatically cleared after 5 iterations',
            bn: '৫টি পুনরাবৃত্তির পর অ্যারে স্বয়ংক্রিয়ভাবে মুছে যায়'
          },
          {
            en: 'Sets convert directed edges into undirected edges',
            bn: 'সেট নির্দেশিত ধারগুলোকে অমুখী ধারে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you check membership for every edge in a graph with E edges, how much time does O(1) vs O(V) take?',
          bn: 'E সংখ্যক ধারের জন্য প্রতিবার চেক করলে O(1) বনাম O(V) এর মধ্যে কোনটি দ্রুততর?'
        },
        explanation: {
          en: 'Using an array for visited lookups degrades the total traversal algorithm from optimal O(V + E) down to catastrophic O(V * E).',
          bn: 'ভিজিটেড খোঁজার জন্য সাধারণ অ্যারে ব্যবহার করলে অ্যালগরিদমটি O(V + E) থেকে ধসে গিয়ে মারাত্মক O(V * E) ধীরগতির হয়ে পড়ে।'
        }
      },
      {
        id: 'pt-q4',
        kind: 'mcq',
        topic: 'isolated-vertex-properties',
        question: {
          en: 'In an undirected graph, what are the properties of an isolated vertex (a vertex with degree 0)?',
          bn: 'একটি অমুখী গ্রাফে ডিগ্রি ০ বিশিষ্ট একটি বিচ্ছিন্ন শীর্ষবিন্দুর বৈশিষ্ট্য কী?'
        },
        options: [
          {
            en: 'It forms a standalone connected component of size 1 and cannot reach any other vertex in the graph',
            bn: 'এটি নিজে ১ আকারের একটি স্বতন্ত্র সংযুক্ত উপাদান গঠন করে এবং গ্রাফের অন্য কোনো নোডে পৌঁছাতে পারে না'
          },
          {
            en: 'It causes the entire graph to be deleted from disk',
            bn: 'এটি সম্পূর্ণ গ্রাফকে ডিস্ক থেকে মুছে ফেলে'
          },
          {
            en: 'It has 10 incident edges automatically',
            bn: 'এটির স্বয়ংক্রিয়ভাবে ১০টি ধার তৈরি হয়'
          },
          {
            en: 'It cannot be stored in an Adjacency List',
            bn: 'এটিকে কোনোভাবেই অ্যাজেসেন্সি লিস্টে সংরক্ষণ করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a vertex has degree 0, does it connect to any neighbor?',
          bn: 'ডিগ্রি ০ হলে কি নোডটির কোনো প্রতিবেশী থাকে?'
        },
        explanation: {
          en: 'An isolated vertex has no edges and forms an independent component of size 1 during the connected components census.',
          bn: 'বিচ্ছিন্ন নোডের কোনো ধার থাকে না এবং সেন্সাস চলাকালে এটি ১ সদস্যের একটি স্বয়ংসম্পূর্ণ দ্বীপ গঠন করে।'
        }
      }
    ]
  }
};
