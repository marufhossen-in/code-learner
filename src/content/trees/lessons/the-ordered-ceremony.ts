import type { Lesson } from '../../../lib/types';

export const theOrderedCeremonyLesson: Lesson = {
  slug: 'the-ordered-ceremony',
  tech: 'trees',
  title: {
    en: 'Tree Traversal Ceremonies — Inorder, Preorder, Postorder, and BFS',
    bn: 'ট্রি ট্রাভার্সাল পদ্ধতি: ইনঅর্ডার, প্রিঅর্ডার, পোস্টঅর্ডার এবং বিএফএস'
  },
  summary: {
    en: 'While linear arrays have only forward and backward iteration, hierarchical trees support multiple traversal sequences, each serving a distinct systems purpose. Inorder traversal (Left, Node, Right) emits BST keys in strictly sorted order. Preorder traversal (Node, Left, Right) preserves tree topology for cloning and serialization. Postorder traversal (Left, Right, Node) processes children before their parent, enabling safe bottom-up memory deallocation. Level-order traversal utilizes a FIFO queue to inspect trees row by row.',
    bn: 'রৈখিক অ্যারেতে কেবল সামনে ও পেছনে যাওয়ার সুযোগ থাকলেও হায়ারার্কিকাল ট্রি একাধিক ট্রাভার্সাল পদ্ধতি সমর্থন করে, যার প্রতিটি সফটওয়্যার সিস্টেমে আলাদা উদ্দেশ্য পূরণ করে। ইনঅর্ডার ট্রাভার্সাল (বাম, নোড, ডান) বিএসটির উপাদানগুলোকে সুবিন্যস্ত সাজানো ক্রমে প্রকাশ করে। প্রিঅর্ডার ট্রাভার্সাল (নোড, বাম, ডান) ক্লোনিং ও সিরিয়ালাইজেশনের জন্য ট্রির টপোলজি সংরক্ষণ করে। পোস্টঅর্ডার ট্রাভার্সাল (বাম, ডান, নোড) প্যারেন্টের আগে সন্তানদের প্রসেস করে নিরাপদ মেমোরি মুক্তির সুযোগ দেয়। লেভেল-অর্ডার ট্রাভার্সাল একটি ফিফো কিউ ব্যবহার করে সারি ধরে ট্রি পরিদর্শন করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-rotation-court',
    tech: 'trees',
    title: {
      en: 'Tree Rotations — Rebalancing AVL Trees via LL, RR, LR, and RL Cases',
      bn: 'ট্রি রোটেশন: LL, RR, LR এবং RL কেসে এভিএল ট্রি পুনর্ভারসাম্য'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'traversal-orders-overview',
      text: {
        en: 'The Four Perspectives: Navigating 2D Hierarchy',
        bn: 'চারটি দৃষ্টিভঙ্গি: দ্বি-মাত্রিক হায়ারার্কিতে চলাচল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In linear collections, element ordering is one-dimensional: you iterate forward or backward. In a two-dimensional tree, deciding whether to process a parent before or after its child subtrees completely changes the algorithmic meaning of the resulting sequence.',
        bn: 'রৈখিক ডেটা তালিকায় উপাদানগুলো এক-মাত্রিক হয়: আপনি কেবল সামনে অথবা পেছনে যেতে পারেন। কিন্তু দ্বি-মাত্রিক ট্রিতে কোনো নোডকে তার সন্তানদের আগে দেখবেন না পরে দেখবেন, সেই সিদ্ধান্তের ওপর পুরো ফলাফলের অ্যালগরিদমিক অর্থ বদলে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computer science formalizes four canonical traversal strategies: three Depth-First Search (DFS) variants implemented via recursion or call stacks (Inorder, Preorder, and Postorder), alongside one Breadth-First Search (BFS) variant driven by an iterative FIFO queue.',
        bn: 'কম্পিউটার বিজ্ঞান চারটি প্রমিত ট্রাভার্সাল পদ্ধতিকে সংজ্ঞায়িত করে: তিনটি ডেপথ-ফার্স্ট সার্চ (DFS) কৌশল যা রিকার্শন বা স্ট্যাক দিয়ে সম্পন্ন হয় (ইনঅর্ডার, প্রিঅর্ডার এবং পোস্টঅর্ডার), এবং একটি ব্রেথ-ফার্স্ট সার্চ (BFS) কৌশল যা ফিফো কিউয়ের মাধ্যমে স্তরে স্তরে পরিচালিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'inorder-traversal',
          def: {
            en: 'Visiting the left subtree, then the current node, then the right subtree, producing sorted output on a BST.',
            bn: 'প্রথমে বাম সাব-ট্রি, তারপর বর্তমান নোড এবং শেষে ডান সাব-ট্রি পরিদর্শন যা বিএসটিতে সাজানো মান দেয়।'
          }
        },
        {
          term: 'preorder-traversal',
          def: {
            en: 'Visiting the root before any of its descendants, preserving parent-child relationships for serialization and cloning.',
            bn: 'সন্তানদের আগেই রুট নোড পরিদর্শন যা ট্রি ক্লোনিং এবং ফাইল সংরক্ষণে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'postorder-traversal',
          def: {
            en: 'Visiting all descendants before their parent node, essential for bottom-up computation and safe memory deallocation.',
            bn: 'প্যারেন্টের আগেই সমস্ত সন্তান পরিদর্শন যা নিচের দিক থেকে হিসাব এবং মেমোরি মুক্ত করতে অপরিহার্য।'
          }
        },
        {
          term: 'level-order-bfs',
          def: {
            en: 'Iteratively exploring tree nodes tier by tier from top to bottom using an explicit FIFO queue.',
            bn: 'একটি ফিফো কিউ ব্যবহার করে উপর থেকে নিচে স্তর ধরে ধরে ক্রমান্বয়ে নোড পরিদর্শন।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'tree'
    },
    {
      type: 'heading',
      id: 'traversal-contracts-table',
      text: {
        en: 'Algorithmic Comparison: The Four Traversal Contracts',
        bn: 'অ্যালগরিদমিক তুলনা: চারটি ট্রাভার্সাল চুক্তির পার্থক্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Engineers select traversal orders based on dependency requirements. When extracting keys in sorted order, Inorder is mandatory. When cloning a tree without restructuring, Preorder reproduces the original topology. When deleting nodes or rolling up subtree sizes, Postorder ensures children are settled before the parent is touched.',
        bn: 'প্রকৌশলীরা কাজের নির্ভরতার ওপর ভিত্তি করে ট্রাভার্সাল পদ্ধতি বেছে নেন। সাজানো ক্রমে মান বের করতে ইনঅর্ডার বাধ্যতামূলক। হুবহু কাঠামো বজায় রেখে ট্রি ক্লোন করতে প্রিঅর্ডার ব্যবহার করা হয়। আর নোড মুছতে বা সাব-ট্রির আকার যোগ করতে পোস্টঅর্ডার নিশ্চিত করে যে প্যারেন্টকে ধরার আগেই সন্তানদের কাজ শেষ হয়েছে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Traversal Order', bn: 'ট্রাভার্সাল পদ্ধতি' },
        { en: 'Visitation Sequence', bn: 'পরিদর্শনের ক্রম' },
        { en: 'Auxiliary Memory', bn: 'অতিরিক্ত মেমোরি' },
        { en: 'Production System Use Case', bn: 'বাস্তব ক্ষেত্রে প্রধান ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Inorder (DFS)', bn: 'ইনঅর্ডার (DFS)' },
          { en: 'Left -> Node -> Right', bn: 'বাম -> নোড -> ডান' },
          { en: 'O(h) call stack', bn: 'O(h) কল স্ট্যাক' },
          { en: 'Sorted BST iteration & range scans', bn: 'সাজানো বিএসটি মান ও রেঞ্জ সার্চ' }
        ],
        [
          { en: 'Preorder (DFS)', bn: 'প্রিঅর্ডার (DFS)' },
          { en: 'Node -> Left -> Right', bn: 'নোড -> বাম -> ডান' },
          { en: 'O(h) call stack', bn: 'O(h) কল স্ট্যাক' },
          { en: 'Tree serialization, cloning, AST compilers', bn: 'সিরিয়ালাইজেশন, ক্লোনিং, কম্পাইলার AST' }
        ],
        [
          { en: 'Postorder (DFS)', bn: 'পোস্টঅর্ডার (DFS)' },
          { en: 'Left -> Right -> Node', bn: 'বাম -> ডান -> নোড' },
          { en: 'O(h) call stack', bn: 'O(h) কল স্ট্যাক' },
          { en: 'Bottom-up cleanup (destructors, du directory sizes)', bn: 'মেমোরি মোছা, ডিরেক্টরি আকার হিসাব (du)' }
        ],
        [
          { en: 'Level-Order (BFS)', bn: 'লেভেল-অর্ডার (BFS)' },
          { en: 'Tier by tier via queue', bn: 'কিউয়ের মাধ্যমে স্তরভিত্তিক' },
          { en: 'O(w) maximum tier width', bn: 'O(w) সর্বোচ্চ স্তরের প্রস্থ' },
          { en: 'Row-wise serialization, shortest path trees', bn: 'সারিভিত্তিক ভিউ, সংক্ষিপ্ততম পথ অনুসন্ধান' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-traversal-code',
      text: {
        en: 'Executable All-Traversals Implementation',
        bn: 'সমস্ত ট্রাভার্সাল কৌশলের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates a balanced tree of 7 nodes and executes all 4 traversals. Notice how Inorder produces strictly sorted output [10, 20, 30, 40, 50, 60, 70], while Preorder starts with root 40 and Level-order visits tier by tier.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৭টি নোড বিশিষ্ট একটি ব্যালান্সড ট্রি তৈরি করে এবং ৪টি ট্রাভার্সালই পরিচালনা করে। লক্ষ্য করুন কীভাবে ইনঅর্ডারে সাজানো আউটপুট [১০, ২০, ৩০, ৪০, ৫০, ৬০, ৭০] আসে, প্রিঅর্ডারে রুট ৪০ দিয়ে শুরু হয় এবং লেভেল-অর্ডারে স্তর ধরে ধরে পরিদর্শন ঘটে।'
      }
    },
    {
      type: 'code',
      code: `class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Build sample tree:
//        40
//       /  \\
//     20    60
//    /  \\   /  \\
//   10  30 50  70
const root = new Node(40);
root.left = new Node(20);
root.right = new Node(60);
root.left.left = new Node(10);
root.left.right = new Node(30);
root.right.left = new Node(50);
root.right.right = new Node(70);

function inorder(n, out = []) {
  if (!n) return out;
  inorder(n.left, out);
  out.push(n.val);
  inorder(n.right, out);
  return out;
}

function preorder(n, out = []) {
  if (!n) return out;
  out.push(n.val);
  preorder(n.left, out);
  preorder(n.right, out);
  return out;
}

function postorder(n, out = []) {
  if (!n) return out;
  postorder(n.left, out);
  postorder(n.right, out);
  out.push(n.val);
  return out;
}

function levelOrder(root) {
  if (!root) return [];
  const q = [root];
  const out = [];
  while (q.length > 0) {
    const curr = q.shift();
    out.push(curr.val);
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
  return out;
}

console.log('Inorder (L-N-R):', inorder(root).join(', '));
// Output: Inorder (L-N-R): 10, 20, 30, 40, 50, 60, 70
console.log('Preorder (N-L-R):', preorder(root).join(', '));
// Output: Preorder (N-L-R): 40, 20, 10, 30, 60, 50, 70
console.log('Postorder (L-R-N):', postorder(root).join(', '));
// Output: Postorder (L-R-N): 10, 30, 20, 50, 70, 60, 40
console.log('Level-order (BFS):', levelOrder(root).join(', '));
// Output: Level-order (BFS): 40, 20, 60, 10, 30, 50, 70`
    },
    {
      type: 'heading',
      id: 'memory-and-morris-traversal',
      text: {
        en: 'Stack Memory Scaling: Avoiding Recursion Overflows',
        bn: 'স্ট্যাক মেমোরির সীমাবদ্ধতা: রিকার্শন ওভারফ্লো এড়ানো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard recursive traversals occupy O(h) stack frames. On skewed trees of 1000000 elements, recursion triggers runtime stack overflow exceptions. To eliminate call stack overhead, systems use iterative explicit stacks or Morris Traversal, which temporarily threads predecessor leaf pointers back to the current node, achieving O(1) auxiliary space without altering final tree structure.',
        bn: 'প্রমিত রিকার্সিভ ট্রাভার্সালে O(h) স্ট্যাক ফ্রেম মেমোরি লাগে। ১০০০০০০ উপাদানের একটি বাঁকা ট্রিতে সাধারণ রিকার্শন স্ট্যাক ওভারফ্লো ত্রুটি ঘটাতে পারে। স্ট্যাকের এই খরচ পুরোপুরি দূর করতে সিস্টেমগুলো নিজস্ব লুপ বা মরিস ট্রাভার্সাল ব্যবহার করে, যা সাময়িকভাবে ফাঁকা পয়েন্টার যুক্ত করে কোনো অতিরিক্ত মেমোরি ছাড়া O(1) স্পেসে ট্রাভার্সাল সম্পন্ন করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Inorder yields sorted sequence: L-N-R traversal over a BST visits keys in strictly ascending numerical order.',
          bn: 'ইনঅর্ডার সাজানো মান দেয়: বিএসটিতে L-N-R ক্রমে ট্রাভার্স করলে উপাদানগুলো ছোট থেকে বড় ক্রমে পাওয়া যায়।'
        },
        {
          en: 'Preorder preserves topology: N-L-R processes parents before children, allowing full tree reconstruction from serialized logs.',
          bn: 'প্রিঅর্ডার কাঠামো ধরে রাখে: N-L-R প্যারেন্টকে আগে দেখে, ফলে সংরক্ষিত লগ থেকে সম্পূর্ণ ট্রি পুনর্গঠন সম্ভব হয়।'
        },
        {
          en: 'Postorder for safe cleanup: L-R-N processes all children before the parent, guaranteeing safe deallocation in destructors.',
          bn: 'পোস্টঅর্ডার নিরাপদ মুক্তিতে লাগে: L-R-N সন্তানদের আগে প্রসেস করায় মেমোরি মুক্ত করা অত্যন্ত নিরাপদ হয়।'
        },
        {
          en: 'Level-order queue requirement: BFS uses an explicit FIFO queue, consuming memory proportional to the maximum tree width.',
          bn: 'লেভেল-অর্ডারে কিউ প্রয়োজন: বিএফএস একটি ফিফো কিউ ব্যবহার করে যা ট্রির সর্বোচ্চ প্রস্থের সমান মেমোরি নেয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'oc-ex1',
      kind: 'mcq',
      topic: 'postorder-destructor-rule',
      question: {
        en: 'Why is Postorder traversal (Left, Right, Node) the mandatory order for implementing memory destructors and tree deallocation?',
        bn: 'মেমোরি ডিলিট বা অবজেক্ট ডেস্ট্রাক্টর বাস্তবায়নের জন্য কেন পোস্টঅর্ডার ট্রাভার্সাল (বাম, ডান, নোড) ব্যবহার করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Both child subtrees must be completely freed before the parent node is deleted, preventing dangling pointer reference errors',
          bn: 'প্যারেন্ট নোড ডিলিট করার আগেই তার উভয় চাইল্ড সাব-ট্রি সম্পূর্ণ মেমোরিমুক্ত করতে হয় যাতে ড্যাংলিং পয়েন্টার ত্রুটি না ঘটে'
        },
        {
          en: 'Because Postorder automatically sorts elements in descending order',
          bn: 'কারণ পোস্টঅর্ডার স্বয়ংক্রিয়ভাবে উপাদানগুলোকে অধঃক্রমে সাজায়'
        },
        {
          en: 'Because JavaScript prohibits freeing root nodes first',
          bn: 'কারণ জাভাস্ক্রিপ্ট রুট নোড আগে ডিলিট করা নিষিদ্ধ করে'
        },
        {
          en: 'Postorder runs on the GPU with 0 memory overhead',
          bn: 'পোস্টঅর্ডার গ্রাফিক্স কার্ডে ০ মেমোরি খরচে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you delete the parent node first, how do you find the addresses of its left and right children?',
        bn: 'প্যারেন্ট নোড আগে মুছে ফেললে তার বাম ও ডান সন্তানের মেমোরি ঠিকানা আপনি কীভাবে পাবেন?'
      },
      explanation: {
        en: 'Deleting a parent destroys child pointers. Postorder ensures children are deallocated first, then the parent safely dissolves.',
        bn: 'প্যারেন্ট মুছলে চাইল্ড পয়েন্টার হারিয়ে যায়। পোস্টঅর্ডারে আগে সন্তানদের কাজ শেষ করে নিরাপদে প্যারেন্টকে মুক্ত করা যায়।'
      }
    },
    {
      id: 'oc-ex2',
      kind: 'mcq',
      topic: 'level-order-auxiliary-structure',
      question: {
        en: 'Which auxiliary data structure is required to implement Level-Order (Breadth-First Search) tree traversal iteratively?',
        bn: 'লেভেল-অর্ডার (ব্রেথ-ফার্স্ট সার্চ) ট্রি ট্রাভার্সাল লুপের মাধ্যমে বাস্তবায়ন করতে কোন ডেটা স্ট্রাকচারটি প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'A First-In-First-Out (FIFO) Queue',
          bn: 'একটি ফার্স্ট-ইন-ফার্স্ট-আউট (FIFO) কিউ'
        },
        {
          en: 'A Last-In-First-Out (LIFO) Stack',
          bn: 'একটি লাস্ট-ইন-ফার্স্ট-আউট (LIFO) স্ট্যাক'
        },
        {
          en: 'A Fibonacci Heap',
          bn: 'একটি ফিবোনাচ্চি হিপ'
        },
        {
          en: 'A Bloom Filter',
          bn: 'একটি ব্লুম ফিল্টার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nodes discovered on tier k must be processed before the newly discovered nodes on tier k + 1.',
        bn: 'স্তর k এর নোডগুলোকে তাদের সন্তানদের (স্তর k + ১) আগেই প্রসেস করতে হবে।'
      },
      explanation: {
        en: 'A FIFO queue ensures that nodes are popped and visited in the exact order they were discovered level by level.',
        bn: 'ফিফো কিউ নিশ্চিত করে যে নোডগুলো যেভাবে স্তরে স্তরে পাওয়া গেছে হুবহু সেই ক্রমেই একে একে প্রসেস হবে।'
      }
    },
    {
      id: 'oc-ex3',
      kind: 'mcq',
      topic: 'preorder-serialization-property',
      question: {
        en: 'Why is Preorder traversal (Node, Left, Right) ideal for serializing a binary tree to a file or network stream?',
        bn: 'ফাইল বা নেটওয়ার্ক স্ট্রিমে একটি বাইনারি ট্রি রূপান্তর বা সিরিয়ালাইজ করতে কেন প্রিঅর্ডার ট্রাভার্সাল (নোড, বাম, ডান) সবচেয়ে আদর্শ?'
      },
      options: [
        {
          en: 'Because the root of every subtree is written before its children, allowing the exact hierarchical topology to be reconstructed upon reading',
          bn: 'কারণ প্রতিটি সাব-ট্রির রুট তার সন্তানদের আগেই লেখা হয়, ফলে পড়ার সময় হুবহু আগের কাঠামোটি পুনর্নির্মাণ করা যায়'
        },
        {
          en: 'Because Preorder compresses text files with GZIP automatically',
          bn: 'কারণ প্রিঅর্ডার স্বয়ংক্রিয়ভাবে জিজিপ দিয়ে ফাইল সংকুচিত করে'
        },
        {
          en: 'Because Preorder only writes leaf nodes to disk',
          bn: 'কারণ প্রিঅর্ডার কেবল পাতার নোডগুলো ডিস্কে লেখে'
        },
        {
          en: 'Because Preorder eliminates negative integers',
          bn: 'কারণ প্রিঅর্ডার ঋণাত্মক সংখ্যাগুলো বাদ দিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'To rebuild a tree, you must know what the root is before you can attach left and right children.',
        bn: 'ট্রি পুনর্গঠন করতে হলে বাম ও ডান সন্তান যুক্ত করার আগেই রুট কে তা জানতে হবে।'
      },
      explanation: {
        en: 'Preorder emits the root first, followed by left and right subtrees. Deserialization can immediately instantiate parents and link descendants.',
        bn: 'প্রিঅর্ডার প্রথমে রুট এবং পরে সাব-ট্রি লেখে। ফলে পড়ার সময় সহজেই প্যারেন্ট তৈরি করে সন্তানদের যুক্ত করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-ordered-ceremony-quiz',
    title: {
      en: 'Tree Traversals and Memory Systems Quiz',
      bn: 'ট্রি ট্রাভার্সাল এবং মেমোরি সিস্টেম কুইজ'
    },
    questions: [
      {
        id: 'oc-q1',
        kind: 'mcq',
        topic: 'inorder-bst-sorted-proof',
        question: {
          en: 'Given a BST with root 40, left child 20, and right child 60, what is the output of an Inorder traversal?',
          bn: 'রুট ৪০, বাম সন্তান ২০ এবং ডান সন্তান ৬০ বিশিষ্ট একটি বিএসটির ইনঅর্ডার ট্রাভার্সালের ফলাফল কী হবে?'
        },
        options: [
          {
            en: '20, 40, 60',
            bn: '২০, ৪০, ৬০'
          },
          {
            en: '40, 20, 60',
            bn: '৪০, ২০, ৬০'
          },
          {
            en: '60, 40, 20',
            bn: '৬০, ৪০, ২০'
          },
          {
            en: '20, 60, 40',
            bn: '২০, ৬০, ৪০'
          }
        ],
        answer: 0,
        hint: {
          en: 'Inorder sequence: Left subtree (20), Node (40), Right subtree (60).',
          bn: 'ইনঅর্ডার ক্রম: বাম সাব-ট্রি (২০), নোড (৪০), ডান সাব-ট্রি (৬০)।'
        },
        explanation: {
          en: 'Following Left -> Node -> Right visits 20, then 40, then 60, yielding ascending sorted order.',
          bn: 'বাম -> নোড -> ডান অনুসরণ করলে প্রথমে ২০, তারপর ৪০ এবং শেষে ৬০ পাওয়া যায়।'
        }
      },
      {
        id: 'oc-q2',
        kind: 'mcq',
        topic: 'level-order-space-complexity',
        question: {
          en: 'What governs the maximum space complexity of a Level-Order traversal using a queue?',
          bn: 'একটি কিউ ব্যবহার করে লেভেল-অর্ডার ট্রাভার্সাল চালালে তার সর্বোচ্চ মেমোরি খরচ কিসের ওপর নির্ভর করে?'
        },
        options: [
          {
            en: 'The maximum width (w) of the tree, representing the maximum number of nodes on any single level',
            bn: 'ট্রির সর্বোচ্চ প্রস্থ (w), যা যেকোনো একক স্তরে উপস্থিত সর্বোচ্চ নোডের সংখ্যা নির্দেশ করে'
          },
          {
            en: 'Strictly O(1) memory space',
            bn: 'কঠোরভাবে O(1) মেমোরি স্থান'
          },
          {
            en: 'The size of the hard drive buffer',
            bn: 'হার্ড ড্রাইভ বাফারের আকার'
          },
          {
            en: 'The height of the tree multiplied by n^2',
            bn: 'ট্রির উচ্চতা গুণিতক n^২'
          }
        ],
        answer: 0,
        hint: {
          en: 'The queue holds all nodes belonging to the current level while processing.',
          bn: 'প্রসেসিংয়ের সময় কিউটি বর্তমান স্তরের সমস্ত নোডকে ধারণ করে।'
        },
        explanation: {
          en: 'At the bottom level of a complete binary tree, roughly n/2 nodes sit simultaneously in the queue, giving O(w) memory complexity.',
          bn: 'একটি সম্পূর্ণ ট্রির শেষ স্তরে প্রায় n/২ টি নোড একসাথে কিউতে জমা হতে পারে, ফলে মেমোরি খরচ O(w) হয়।'
        }
      },
      {
        id: 'oc-q3',
        kind: 'mcq',
        topic: 'morris-traversal-space-tradeoff',
        question: {
          en: 'How does Morris Traversal achieve O(1) auxiliary space without using a stack or recursion?',
          bn: 'স্ট্যাক বা রিকার্শন ছাড়া কীভাবে মরিস ট্রাভার্সাল মাত্র O(1) অতিরিক্ত মেমোরিতে ট্রাভার্সাল সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It temporarily modifies null right child pointers of inorder predecessors to point back to the current node (threaded links)',
            bn: 'এটি সাময়িকভাবে পূর্বসূরি নোডের খালি ডান পয়েন্টারকে বর্তমান নোডের সাথে যুক্ত করে (থ্রেডেড লিংক)'
          },
          {
            en: 'It allocates an auxiliary array of 1000000 integers',
            bn: 'এটি ১০০০০০০ পূর্ণসংখ্যার একটি অতিরিক্ত অ্যারে বরাদ্দ করে'
          },
          {
            en: 'It converts the tree into a circular linked list permanently',
            bn: 'এটি ট্রিকে স্থায়ীভাবে বৃত্তাকার লিংকড লিস্টে রূপান্তর করে'
          },
          {
            en: 'It uses GPU hardware threads exclusively',
            bn: 'এটি সম্পূর্ণভাবে গ্রাফিক্স কার্ডের থ্রেড ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It creates temporary back-links from leaves to return to ancestor nodes without a stack.',
          bn: 'স্ট্যাক ছাড়াই পূর্বপুরুষ নোডে ফিরে যেতে এটি পাতার খালি ঘর থেকে সাময়িক সংযোগ তৈরি করে।'
        },
        explanation: {
          en: 'Morris traversal creates threaded pointers on the fly to navigate up the tree and restores them to null before moving on, taking O(1) space.',
          bn: 'মরিস ট্রাভার্সাল সাময়িক পয়েন্টার দিয়ে ওপরে ওঠে এবং কাজ শেষে পুনরায় নাল করে দেয়, ফলে কোনো বাড়তি মেমোরি লাগে না।'
        }
      },
      {
        id: 'oc-q4',
        kind: 'mcq',
        topic: 'directory-size-computation',
        question: {
          en: 'Which traversal order is used by operating system commands like `du` to calculate total disk space consumed by a directory and its nested subfolders?',
          bn: 'একটি ফোল্ডার ও তার ভেতরের সমস্ত সাব-ফোল্ডারের মোট ডিস্ক সাইজ বের করতে অপারেটিং সিস্টেমের `du` কমান্ড কোন ট্রাভার্সাল ব্যবহার করে?'
        },
        options: [
          {
            en: 'Postorder traversal, because the disk usage of all child subdirectories must be summed before the parent folder’s total can be computed',
            bn: 'পোস্টঅর্ডার ট্রাভার্সাল, কারণ মূল ফোল্ডারের মোট আকার বের করার আগেই সমস্ত চাইল্ড ফোল্ডারের সাইজ যোগ করতে হয়'
          },
          {
            en: 'Preorder traversal',
            bn: 'প্রিঅর্ডার ট্রাভার্সাল'
          },
          {
            en: 'Breadth-First Search only',
            bn: 'কেবল ব্রেথ-ফার্স্ট সার্চ'
          },
          {
            en: 'Random shuffle scan',
            bn: 'এলোমেলো স্ক্যান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can a directory know its true total size before the sizes of its files and child folders are determined?',
          bn: 'ভেতরের ফাইল ও ফোল্ডারের আকার না জেনে একটি মূল ফোল্ডার কি তার মোট আকার জানতে পারে?'
        },
        explanation: {
          en: 'Postorder evaluates bottom-up. Computing parent directory sizes requires the sum of all nested subdirectories first.',
          bn: 'পোস্টঅর্ডার নিচ থেকে উপরে হিসাব করে। মূল ফোল্ডারের সাইজ পেতে ভেতরের সমস্ত সাব-ফোল্ডারের যোগফল আগে প্রয়োজন।'
        }
      }
    ]
  }
};
