import type { Lesson } from '../../../lib/types';

export const clanLedgerLesson: Lesson = {
  slug: 'the-clan-ledger',
  tech: 'graph-algorithms',
  title: {
    en: 'The Clan Ledger — Disjoint Set Union and Inverse Ackermann',
    bn: 'গোষ্ঠী-খাতা: ডিসজয়েন্ট সেট ইউনিয়ন এবং ইনভার্স অ্যাকারম্যান'
  },
  summary: {
    en: 'Dynamic connectivity problems require determining whether two elements belong to the same partition while continuously merging sets. Naive trees degenerate into linear chains of height O(N), slowing lookups to linear scans. The Disjoint Set Union (DSU / Union-Find) data structure achieves near-instantaneous amortized performance through two complementary techniques: Path Compression, which flattens trees during find queries, and Union by Rank, which attaches shorter trees beneath taller roots. Together, they bound M operations across N elements to O(M * alpha(N)) time.',
    bn: 'ডায়নামিক কানেক্টিভিটি সমস্যায় একাধিক সেটের মাঝে কোনো দুটি উপাদান একই দলে আছে কি না তা দ্রুত নির্ধারণ করতে হয় এবং সেটগুলোকে জুড়তে হয়। সাধারণ ট্রি O(N) উচ্চতার শিকলে রূপ নিয়ে অপারেশনকে ধীরগতির করে ফেলে। ডিসজয়েন্ট সেট ইউনিয়ন (DSU / ইউনিয়ন-ফাইন্ড) দুটি যুগান্তকারী কৌশলের মাধ্যমে প্রায় তাৎক্ষণিক গতি অর্জন করে: পাথ কম্প্রেশন (যা খোঁজার সময় ট্রি চ্যাপ্টা করে) এবং ইউনিয়ন বাই র‍্যাঙ্ক (যা খাটো ট্রিকে লম্বা ট্রির নিচে জোড়ে)। এই দুটি মিলে N উপাদানে M টি অপারেশনকে O(M * alpha(N)) সময়ে সীমাবদ্ধ করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'bellman-and-the-patient-ledger',
    tech: 'graph-algorithms',
    title: {
      en: 'Bellman-Ford — Negative Weights and Difference Constraints',
      bn: 'বেলম্যান-ফোর্ড: ঋণাত্মক ওজন এবং পার্থক্য সীমাবদ্ধতা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'dynamic-connectivity-need',
      text: {
        en: 'Dynamic Connectivity: Group Membership Under Streams of Merges',
        bn: 'ডায়নামিক কানেক্টিভিটি: সেট সংযোজনের অবিরাম ধারায় সদস্যপদ নির্ণয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you manage connected clusters like social communities, pixel groups in image segmentation, or cycle-free edges in Kruskal’s algorithm, you face an online dynamic connectivity problem. You receive a continuous stream of requests to merge two groups or query whether two elements already share the same community.',
        bn: 'যখন আপনি সামাজিক কমিউনিটি, ছবির পিক্সেল বিভাজন বা ক্রুসকাল অ্যালগরিদমে চক্রহীন ধারের মতো সংযুক্ত ক্লাস্টার পরিচালনা করেন, তখন আপনি একটি অনলাইন ডায়নামিক কানেক্টিভিটি সমস্যার মুখোমুখি হন। আপনার কাছে অবিরাম অনুরোধ আসতে থাকে দুটি দলকে এক করার জন্য অথবা দুটি উপাদান ইতোমধ্যে একই দলে আছে কি না তা জানার জন্য।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A naive tree-based parent pointer structure degenerates rapidly. If sets are merged without height discipline, a tree of N elements can collapse into a single vertical chain of depth N, degrading each find query into an expensive O(N) linear crawl. Disjoint Set Union (DSU) resolves this with two geometric techniques: Path Compression and Union by Rank.',
        bn: 'উচ্চতা নিয়ন্ত্রণ ছাড়া সাধারণ ট্রি কাঠামো দ্রুত নষ্ট হয়ে যায়। এলোমেলোভাবে সেট জুড়তে থাকলে N উপাদানের একটি গাছ N গভীরতার একটি সোজা লম্বা শিকলে পরিণত হতে পারে, যা প্রতিটি খোঁজার কাজকে ধীরগতির O(N) স্ক্যানে পরিণত করে। ডিসজয়েন্ট সেট ইউনিয়ন (DSU) দুটি জ্যামিতিক কৌশলের সাহায্যে এর সমাধান করে: পাথ কম্প্রেশন এবং ইউনিয়ন বাই র‍্যাঙ্ক।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'disjoint-set-union',
          def: {
            en: 'A data structure storing a collection of non-overlapping sets, supporting fast set union and representative find operations.',
            bn: 'পারস্পরিক সম্পর্কহীন সেটের সংগ্রহ সংরক্ষণকারী ডেটা স্ট্রাকচার যা দ্রুত সেট একত্রীকরণ এবং দলপতি খোঁজার কাজ করে।'
          }
        },
        {
          term: 'path-compression',
          def: {
            en: 'An optimization during find(x) that reparents every traversed node directly beneath the set root, permanently flattening the tree.',
            bn: 'find(x) এর সময় প্রতিটি দেখা নোডকে সরাসরি মূল রুটের সন্তান বানিয়ে গাছটিকে স্থায়ীভাবে চ্যাপ্টা করার কৌশল।'
          }
        },
        {
          term: 'union-by-rank',
          def: {
            en: 'An optimization during union(x, y) that attaches the shallower tree under the root of the deeper tree, preventing height growth.',
            bn: 'union(x, y) এর সময় খাটো ট্রিকে গভীরতর ট্রির নিচে যুক্ত করার কৌশল যা ট্রির উচ্চতা বৃদ্ধি রোধ করে।'
          }
        },
        {
          term: 'inverse-ackermann',
          def: {
            en: 'An extremely slow-growing mathematical function alpha(n) that remains strictly less than 5 for any practical n in the universe.',
            bn: 'একটি অতি ধীরগতির গাণিতিক ফাংশন alpha(n) যা মহাবিশ্বের যেকোনো বাস্তব সংখ্যার জন্য সর্বদা ৫ এর নিচে থাকে।'
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
      id: 'dsu-optimizations-table',
      text: {
        en: 'Architectural Comparison: Four Generations of Union-Find',
        bn: 'কাঠামোগত তুলনা: ইউনিয়ন-ফাইন্ডের চার প্রজন্ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The evolution of Disjoint Set Union illustrates how complementary algorithmic optimizations transform a slow data structure into one of the most efficient algorithms in computer science.',
        bn: 'ডিসজয়েন্ট সেট ইউনিয়নের ক্রমবিকাশ দেখায় কীভাবে দুটি পরিপূরক কৌশল একটি ধীরগতির ডেটা স্ট্রাকচারকে কম্পিউটার বিজ্ঞানের অন্যতম দ্রুততম অ্যালগরিদমে রূপান্তর করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Implementation Strategy', bn: 'বাস্তবায়ন কৌশল' },
        { en: 'Worst-Case Tree Height', bn: 'সবচেয়ে খারাপ ট্রির উচ্চতা' },
        { en: 'Amortized Operation Cost', bn: 'অ্যামর্টাইজড অপারেশন খরচ' },
        { en: 'Production Suitability', bn: 'বাস্তব ক্ষেত্রে উপযুক্ততা' }
      ],
      rows: [
        [
          { en: 'Naive Quick-Find (flat array)', bn: 'সাধারণ কুইক-ফাইন্ড (অ্যারে)' },
          { en: 'Height 1 (flat)', bn: 'উচ্চতা ১ (সমতল)' },
          { en: 'Find O(1), Union O(N)', bn: 'ফাইন্ড O(1), ইউনিয়ন O(N)' },
          { en: 'Rejected: O(N) unions stall large datasets', bn: 'বাতিল: O(N) ইউনিয়নে সিস্টেম ধীর হয়' }
        ],
        [
          { en: 'Naive Quick-Union (unbalanced)', bn: 'সাধারণ কুইক-ইউনিয়ন (অসম)' },
          { en: 'Height O(N) linear chain', bn: 'উচ্চতা O(N) রৈখিক শিকল' },
          { en: 'Find O(N), Union O(N)', bn: 'ফাইন্ড O(N), ইউনিয়ন O(N)' },
          { en: 'Rejected: degenerates into linked list', bn: 'বাতিল: লিংকড লিস্টের মতো ধসে পড়ে' }
        ],
        [
          { en: 'Union by Rank alone', bn: 'কেবল ইউনিয়ন বাই র‍্যাঙ্ক' },
          { en: 'Height O(log N)', bn: 'উচ্চতা O(log N)' },
          { en: 'O(log N) per operation', bn: 'অপারেশন প্রতি O(log N)' },
          { en: 'Acceptable but suboptimal', bn: 'চলনসই কিন্তু সর্বোত্তম নয়' }
        ],
        [
          { en: 'Union by Rank + Path Compression', bn: 'ইউনিয়ন বাই র‍্যাঙ্ক + পাথ কম্প্রেশন' },
          { en: 'Nearly flat (height <= 4)', bn: 'প্রায় সমতল (উচ্চতা <= ৪)' },
          { en: 'O(alpha(N)) ~ O(1) amortized', bn: 'অ্যামর্টাইজড O(alpha(N)) ~ O(1)' },
          { en: 'Gold standard: used in Kruskal & compilers', bn: 'সর্বোত্তম: ক্রুসকাল ও কম্পাইলারে ব্যবহৃত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-dsu-code',
      text: {
        en: 'Executable Disjoint Set Union Implementation',
        bn: 'পাথ কম্প্রেশন ও ইউনিয়ন বাই র‍্যাঙ্কের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates a DSU instance over 5 elements (0 through 4). Notice that merging pairs reduces total disjoint components from 5 down to 1, while connected queries execute in near-instantaneous time.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৫টি উপাদানের (০ থেকে ৪) ওপর একটি DSU তৈরি করে। লক্ষ্য করুন কীভাবে জোড়া মেলানোর মাধ্যমে মোট স্বাধীন উপাদানের সংখ্যা ৫ থেকে কমে ১ এ নেমে আসে, যেখানে সংযোগের কোয়েরিগুলো প্রায় তাৎক্ষণিক সময়ে উত্তর দেয়।'
      }
    },
    {
      type: 'code',
      code: `class DisjointSetUnion {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
    this.components = n;
  }

  find(i) {
    if (this.parent[i] === i) return i;
    // Path compression flattens tree on the way out
    this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);
    if (rootI === rootJ) return false;

    // Union by rank attaches shorter tree to taller tree
    if (this.rank[rootI] < this.rank[rootJ]) {
      this.parent[rootI] = rootJ;
    } else if (this.rank[rootI] > this.rank[rootJ]) {
      this.parent[rootJ] = rootI;
    } else {
      this.parent[rootJ] = rootI;
      this.rank[rootI]++;
    }
    this.components--;
    return true;
  }

  connected(i, j) {
    return this.find(i) === this.find(j);
  }
}

const dsu = new DisjointSetUnion(5);
console.log('Initial Disjoint Components:', dsu.components);
// Output: Initial Disjoint Components: 5

dsu.union(0, 1);
dsu.union(1, 2);
console.log('Is 0 connected to 2?', dsu.connected(0, 2));
// Output: Is 0 connected to 2? true
console.log('Is 0 connected to 3?', dsu.connected(0, 3));
// Output: Is 0 connected to 3? false

dsu.union(3, 4);
console.log('Components after union(0,1), union(1,2), union(3,4):', dsu.components);
// Output: Components after union(0,1), union(1,2), union(3,4): 2
dsu.union(2, 3);
console.log('Components after merging the two groups:', dsu.components);
// Output: Components after merging the two groups: 1
console.log('Is 0 now connected to 4?', dsu.connected(0, 4));
// Output: Is 0 now connected to 4? true`
    },
    {
      type: 'heading',
      id: 'inverse-ackermann-proof',
      text: {
        en: 'Why alpha(n) is Practically Constant Time',
        bn: 'alpha(n) কেন বাস্তবে ধ্রুবক সময়ের সমান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1975, Robert Tarjan formally proved that the amortized cost per operation in DSU with both Path Compression and Union by Rank is bounded by O(alpha(n)), where alpha is the inverse Ackermann function. Because the Ackermann function grows faster than any tower of exponents, its inverse grows slower than any logarithmic function. For any input size n up to the estimated number of atoms in the observable universe (10^80), alpha(n) is strictly less than or equal to 4. In production software engineering, alpha(n) is treated as a practical constant O(1).',
        bn: '১৯৭৫ সালে রবার্ট টারজান আনুষ্ঠানিকভাবে প্রমাণ করেন যে পাথ কম্প্রেশন এবং ইউনিয়ন বাই র‍্যাঙ্ক উভয়ের উপস্থিতিতে DSU এর প্রতিটি অপারেশনের অ্যামর্টাইজড খরচ O(alpha(n)) এ সীমাবদ্ধ, যেখানে alpha হলো ইনভার্স অ্যাকারম্যান ফাংশন। যেহেতু সাধারণ অ্যাকারম্যান ফাংশন ঘাতের টাওয়ারের চেয়েও দ্রুত বৃদ্ধি পায়, তাই তার বিপরীত রূপটি যেকোনো লগারিদমের চেয়েও ধীরগতিতে বাড়ে। দৃশ্যমান মহাবিশ্বের মোট পরমাণু সংখ্যা (১০^৮০) পর্যন্ত যেকোনো ইনপুটের জন্য alpha(n) কঠোরভাবে ৪ বা তার কম থাকে। সফটওয়্যার ইঞ্জিনিয়ারিংয়ে তাই alpha(n) কে কার্যকরভাবে ধ্রুবক O(1) হিসেবে গণ্য করা হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Dynamic disjoint clustering: DSU maintains equivalence classes and connectivity under an ongoing stream of merge requests.',
          bn: 'ডায়নামিক ক্লাস্টারিং: DSU একাধিক সেটের একত্রীকরণের ধারায় উপাদানগুলোর সদস্যপদ ও সংযোগ বজায় রাখে।'
        },
        {
          en: 'Tree flattening via path compression: find queries point every traversed ancestor directly to the root, guaranteeing near-constant future queries.',
          bn: 'পাথ কম্প্রেশনের সুবিধা: ফাইন্ড কোয়েরি প্রতিটি পূর্বপুরুষকে সরাসরি রুটের সাথে যুক্ত করে ভবিষ্যৎ অনুসন্ধানকে প্রায় ধ্রুবক করে।'
        },
        {
          en: 'Height bounding via union by rank: Merging sets by rank guarantees tree depth never exceeds logarithmic bounds.',
          bn: 'ইউনিয়ন বাই র‍্যাঙ্কের নিয়ন্ত্রণ: র‍্যাঙ্ক অনুযায়ী সেট জুড়লে গাছের গভীরতা কখনো লগারিদমিক সীমার বেশি হতে পারে না।'
        },
        {
          en: 'Inverse Ackermann guarantee: Combined optimizations bound amortized operations to O(alpha(n)) <= 4, operating in effective constant time.',
          bn: 'ইনভার্স অ্যাকারম্যান নিশ্চয়তা: দুটি কৌশল একসাথে অপারেশনের খরচ O(alpha(n)) <= ৪ এ সীমাবদ্ধ করে কার্যকর ধ্রুবক সময় দেয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cl-ex1',
      kind: 'mcq',
      topic: 'path-compression-mechanism',
      question: {
        en: 'How does Path Compression optimize the `find(x)` operation in a Disjoint Set Union data structure?',
        bn: 'পাথ কম্প্রেশন কীভাবে ডিসজয়েন্ট সেট ইউনিয়ন ডেটা স্ট্রাকচারে `find(x)` অপারেশনকে অপটিমাইজ করে?'
      },
      options: [
        {
          en: 'It updates the parent pointer of every node visited along the path to point directly to the set’s root representative',
          bn: 'এটি পথের মাঝে দেখা হওয়া প্রতিটি নোডের প্যারেন্ট পয়েন্টারকে সরাসরি সেটের মূল দলপতির সাথে যুক্ত করে দেয়'
        },
        {
          en: 'It compresses the parent array using gzip compression',
          bn: 'এটি জিপ কম্প্রেশন ব্যবহার করে প্যারেন্ট অ্যারেকে সংকুচিত করে'
        },
        {
          en: 'It deletes all nodes with odd numbers',
          bn: 'এটি বিজোড় সংখ্যার সমস্ত নোড মুছে ফেলে'
        },
        {
          en: 'It reverses the direction of all pointers in memory',
          bn: 'এটি মেমরিতে সমস্ত পয়েন্টারের দিক উল্টে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'When climbing from leaf to root, why not connect the leaf directly to the root for next time?',
        bn: 'পাতা থেকে রুটে ওঠার সময় পাতাটিকে সরাসরি রুটের সাথে যুক্ত করে দিলে পরের বারে কী সুবিধা হবে?'
      },
      explanation: {
        en: 'By reparenting nodes directly to the root during find traversal, subsequent queries on those nodes execute in O(1) single-step hops.',
        bn: 'রুটের সাথে সরাসরি যুক্ত করার ফলে পরবর্তী অনুসন্ধানে মাত্র ১টি পদক্ষেপে সরাসরি রুট পাওয়া যায়।'
      }
    },
    {
      id: 'cl-ex2',
      kind: 'mcq',
      topic: 'union-by-rank-rule',
      question: {
        en: 'What rule does Union by Rank follow when merging two sets with roots rootA and rootB?',
        bn: 'rootA এবং rootB রুট বিশিষ্ট দুটি সেটকে একত্রিত করার সময় ইউনিয়ন বাই র‍্যাঙ্ক কোন নিয়মটি মেনে চলে?'
      },
      options: [
        {
          en: 'Attach the root with smaller rank as a child of the root with larger rank; increment rank only when merging two trees of equal rank',
          bn: 'ছোট র‍্যাঙ্কের রুটকে বড় র‍্যাঙ্কের রুটের সন্তান হিসেবে যুক্ত করে; কেবল দুটি সমান র‍্যাঙ্কের ট্রি জুড়লে র‍্যাঙ্ক ১ বৃদ্ধি পায়'
        },
        {
          en: 'Always attach rootA under rootB regardless of height',
          bn: 'উচ্চতা যাই হোক না কেন সর্বদা rootA কে rootB এর নিচে যুক্ত করে'
        },
        {
          en: 'Delete both roots and create a new node with value 0',
          bn: 'উভয় রুট মুছে ফেলে ০ মানের একটি নতুন নোড তৈরি করে'
        },
        {
          en: 'Sort all nodes alphabetically',
          bn: 'সমস্ত নোডকে বর্ণানুক্রমিকভাবে সাজায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Attaching a shorter tree under a taller tree preserves the maximum height of the taller tree without increasing it.',
        bn: 'লম্বা ট্রির নিচে খাটো ট্রি বসালে লম্বা ট্রির সর্বোচ্চ উচ্চতা বাড়ে না।'
      },
      explanation: {
        en: 'Union by rank guarantees that tree height can only increase by 1 when two equally deep trees are united, maintaining logarithmic depth.',
        bn: 'ইউনিয়ন বাই র‍্যাঙ্ক নিশ্চিত করে যে কেবল সমান গভীরতার দুটি ট্রি জুড়লেই উচ্চতা ১ বাড়ে, যা লগারিদমিক গভীরতা অক্ষুণ্ণ রাখে।'
      }
    },
    {
      id: 'cl-ex3',
      kind: 'mcq',
      topic: 'inverse-ackermann-value-scale',
      question: {
        en: 'Why do computer scientists state that DSU with both Path Compression and Union by Rank runs in "effective constant time" O(1)?',
        bn: 'কম্পিউটার বিজ্ঞানীরা কেন বলেন যে পাথ কম্প্রেশন ও ইউনিয়ন বাই র‍্যাঙ্ক সহ DSU বাস্তবে "কার্যকর ধ্রুবক সময়" O(1) এ চলে?'
      },
      options: [
        {
          en: 'Because the inverse Ackermann function alpha(n) is <= 4 for any practical input size up to 10^80 (the number of atoms in the universe)',
          bn: 'কারণ ইনভার্স অ্যাকারম্যান ফাংশন alpha(n) মহাবিশ্বের পরমাণু সংখ্যা ১০^৮০ পর্যন্ত যেকোনো বাস্তব ইনপুটের জন্য সর্বদা <= ৪ থাকে'
        },
        {
          en: 'Because modern computers have infinite RAM memory',
          bn: 'কারণ আধুনিক কম্পিউটারে অসীম র‍্যাম মেমরি থাকে'
        },
        {
          en: 'Because the algorithm runs exclusively on quantum processors',
          bn: 'কারণ অ্যালগরিদমটি কেবল কোয়ান্টাম প্রসেসরে চলে'
        },
        {
          en: 'Because Union-Find contains no loops or recursive calls',
          bn: 'কারণ ইউনিয়ন-ফাইন্ডে কোনো লুপ বা রিকার্শন থাকে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The inverse Ackermann function grows so unimaginably slowly that it never exceeds 4 in the physical universe.',
        bn: 'ইনভার্স অ্যাকারম্যান ফাংশন এতটাই ধীরগতিতে বাড়ে যে দৃশ্যমান মহাবিশ্বে এটি কখনই ৪ এর বেশি হয় না।'
      },
      explanation: {
        en: 'Although theoretically super-constant, alpha(n) <= 4 for all practical computation, making the amortized cost indistinguishable from O(1).',
        bn: 'তাত্ত্বিকভাবে ধ্রুবকের চেয়ে সামান্য বেশি হলেও বাস্তবে alpha(n) <= ৪ থাকায় এর অ্যামর্টাইজড খরচ O(1) থেকে পৃথক করা যায় না।'
      }
    }
  ],
  quiz: {
    id: 'the-clan-ledger-quiz',
    title: {
      en: 'Disjoint Set Union and Inverse Ackermann Quiz',
      bn: 'ডিসজয়েন্ট সেট ইউনিয়ন এবং ইনভার্স অ্যাকারম্যান কুইজ'
    },
    questions: [
      {
        id: 'cl-q1',
        kind: 'mcq',
        topic: 'cycle-detection-with-dsu',
        question: {
          en: 'How does Disjoint Set Union detect whether adding an undirected edge between vertices u and v creates a cycle in a graph?',
          bn: 'ডিসজয়েন্ট সেট ইউনিয়ন কীভাবে শনাক্ত করে যে u এবং v শীর্ষবিন্দুর মাঝে একটি অমুখী ধার যোগ করলে চক্র তৈরি হবে কি না?'
        },
        options: [
          {
            en: 'If find(u) === find(v), u and v already belong to the same connected component, meaning adding edge (u, v) would close a cycle',
            bn: 'যদি find(u) === find(v) হয়, তবে u এবং v ইতোমধ্যে একই সেটে যুক্ত আছে, যার অর্থ নতুন ধার যোগ করলে চক্র তৈরি হবে'
          },
          {
            en: 'If the degree of u is greater than 10',
            bn: 'যদি u এর ডিগ্রি ১০ এর বেশি হয়'
          },
          {
            en: 'If edge (u, v) has a negative weight',
            bn: 'যদি ধার (u, v) এর ওজন ঋণাত্মক হয়'
          },
          {
            en: 'If the total number of edges is an odd number',
            bn: 'যদি মোট ধারের সংখ্যা বিজোড় হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If two nodes already share a common root leader, a path already connects them.',
          bn: 'দুটি নোডের দলপতি যদি একই হয়, তবে তাদের মাঝে আগেই কোনো পথ বিদ্যমান আছে।'
        },
        explanation: {
          en: 'When both endpoints share the same set representative, an existing path already links them; adding an edge introduces an alternative loop.',
          bn: 'উভয় প্রান্ত একই দলপতি ভাগ করলে তাদের মাঝে পথ আগে থেকেই থাকে; ফলে নতুন ধার একটি বিকল্প লুপ তৈরি করে।'
        }
      },
      {
        id: 'cl-q2',
        kind: 'mcq',
        topic: 'dsu-deletion-limitation',
        question: {
          en: 'What fundamental limitation does the standard Disjoint Set Union data structure have regarding element modifications?',
          bn: 'উপাদান পরিবর্তনের ক্ষেত্রে প্রমিত ডিসজয়েন্ট সেট ইউনিয়ন ডেটা স্ট্রাকচারের মূল সীমাবদ্ধতা কোনটি?'
        },
        options: [
          {
            en: 'It only supports incremental unions (merges); it cannot efficiently split sets or delete elements once merged',
            bn: 'এটি কেবল ক্রমপুঞ্জিত মিলন (ইউনিয়ন) সমর্থন করে; একবার যুক্ত হলে এটি সেটকে আলাদা করা বা উপাদান মোছা সমর্থন করে না'
          },
          {
            en: 'It cannot store more than 10 elements',
            bn: 'এটি ১০টির বেশি উপাদান রাখতে পারে না'
          },
          {
            en: 'It cannot be implemented in JavaScript or TypeScript',
            bn: 'এটি জাভাস্ক্রিপ্ট বা টাইপস্ক্রিপ্টে বাস্তবায়ন করা যায় না'
          },
          {
            en: 'It only works with floating point numbers',
            bn: 'এটি কেবল দশমিক সংখ্যায় কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Clans can marry and merge together, but can they divorce and split apart in standard DSU?',
          bn: 'গোষ্ঠীগুলো একত্রিত হতে পারে, কিন্তু সাধারণ DSU তে কি তাদের আবার আলাদা করা সম্ভব?'
        },
        explanation: {
          en: 'Standard DSU is strictly an incremental connectivity structure. Dynamic deletion requires complex offline rollback trees or dynamic graph algorithms.',
          bn: 'প্রমিত DSU কেবল সংযোজনমূলক। উপাদান মোছার জন্য জটিল অফলাইন রোলব্যাক বা ডায়নামিক গ্রাফ অ্যালগরিদম লাগে।'
        }
      },
      {
        id: 'cl-q3',
        kind: 'mcq',
        topic: 'path-compression-recursion-depth',
        question: {
          en: 'In languages with small default call stack limits, what is the maximum recursion depth of `find(x)` when Path Compression is combined with Union by Rank?',
          bn: 'সীমিত কল স্ট্যাক বিশিষ্ট ভাষায় ইউনিয়ন বাই র‍্যাঙ্ক ও পাথ কম্প্রেশন একসাথে ব্যবহার করলে `find(x)` এর সর্বোচ্চ রিকার্শন গভীরতা কত?'
        },
        options: [
          {
            en: 'At most O(log N) on the initial search, and strictly O(1) on subsequent searches after compression',
            bn: 'প্রথমবার খোঁজার সময় সর্বোচ্চ O(log N), এবং কম্প্রেশনের পর পরবর্তী অনুসন্ধানে কঠোরভাবে O(1)'
          },
          {
            en: 'O(N^2) depth always',
            bn: 'সর্বদা O(N^2) গভীরতা'
          },
          {
            en: 'Infinite recursion depth',
            bn: 'অনন্ত রিকার্শন গভীরতা'
          },
          {
            en: 'Exactly 0 frames',
            bn: 'ঠিক ০ ফ্রেম'
          }
        ],
        answer: 0,
        hint: {
          en: 'Union by rank bounds the tree height before compression to log2(N).',
          bn: 'ইউনিয়ন বাই র‍্যাঙ্ক কম্প্রেশনের আগে ট্রির উচ্চতাকে log2(N) এ সীমাবদ্ধ রাখে।'
        },
        explanation: {
          en: 'Union by rank prevents the initial tree from exceeding height log2(N), guaranteeing find recursion safely stays under stack limits.',
          bn: 'ইউনিয়ন বাই র‍্যাঙ্ক প্রাথমিক উচ্চতাকে log2(N) এর নিচে রাখায় রিকার্শন নিরাপদে স্ট্যাক সীমার মধ্যে থাকে।'
        }
      },
      {
        id: 'cl-q4',
        kind: 'mcq',
        topic: 'percolation-threshold-application',
        question: {
          en: 'How is Disjoint Set Union used in physics simulations of percolation (e.g. fluid flowing through porous rock or electrical grid connectivity)?',
          bn: 'পদার্থবিজ্ঞানের পারকোলেশন সিমুলেশনে (যেমন শিলার মধ্য দিয়ে তরল প্রবাহ বা বিদ্যুৎ গ্রিড সংযোগ) কীভাবে DSU ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Whenever an open site is added to a grid, union it with adjacent open sites and check whether the virtual top site connects to the virtual bottom site',
            bn: 'গ্রিডে যখনই একটি খোলা ঘর যোগ হয়, তাকে পাশের খোলা ঘরের সাথে ইউনিয়ন করা হয় এবং ভার্চুয়াল শীর্ষ ঘরটি ভার্চুয়াল নিচের ঘরের সাথে যুক্ত হয়েছে কি না তা যাচাই করা হয়'
          },
          {
            en: 'By sorting all rock particles by weight',
            bn: 'সমস্ত শিলাকণাকে ওজনের ক্রমানুসারে সাজিয়ে'
          },
          {
            en: 'By computing the Fourier transform of the fluid',
            bn: 'তরলের ফুরিয়ার ট্রান্সফর্ম হিসাব করে'
          },
          {
            en: 'By converting 2D grids into 3D binary search trees',
            bn: 'দ্বি-মাত্রিক গ্রিডকে ত্রি-মাত্রিক বাইনারি সার্চ ট্রিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does a connected path of open pores bridge the top of the material to the bottom?',
          bn: 'খোলা ঘরের একটি অবিচ্ছিন্ন পথ কি ওপর থেকে নিচে সংযোগ তৈরি করে?'
        },
        explanation: {
          en: 'Connecting adjacent porous sites in DSU allows testing top-to-bottom percolation in near O(1) time per added site.',
          bn: 'DSU তে পাশাপাশি ঘর যুক্ত করে প্রতিটি নতুন ঘরের জন্য প্রায় O(1) সময়ে ওপর থেকে নিচে প্রবাহ যাচাই করা যায়।'
        }
      }
    ]
  }
};
