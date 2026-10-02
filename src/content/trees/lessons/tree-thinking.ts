import type { Lesson } from '../../../lib/types';

export const treeThinkingLesson: Lesson = {
  slug: 'tree-thinking',
  tech: 'trees',
  title: {
    en: 'Tree Thinking — Binary Search Trees, Hierarchical Invariants, and Recursive Search',
    bn: 'ট্রি চিন্তন: বাইনারি সার্চ ট্রি, হায়ারার্কিকাল ইনভেরিয়েন্ট এবং রিকার্সিভ অনুসন্ধান'
  },
  summary: {
    en: 'Linear data structures like arrays and linked lists must inspect elements sequentially unless sorted. Trees introduce non-linear hierarchy, organizing elements into parent-child relationships that discard half the remaining search space with each comparison. We formalize the Binary Search Tree (BST) invariant where left descendants are strictly smaller and right descendants are strictly larger than the parent. We analyze search and insertion mechanics in O(h) time and expose why sorted inputs risk degenerating trees into slow linear chains.',
    bn: 'অ্যারে এবং লিংকড লিস্টের মতো রৈখিক ডেটা স্ট্রাকচারে নির্দিষ্ট উপাদান খুঁজতে ক্রমান্বয়ে দেখতে হয়। ট্রি সেখানে নন-লিনিয়ার হায়ারার্কি তৈরি করে প্যারেন্ট-চাইল্ড সম্পর্কের মাধ্যমে প্রতিটি তুলনামূলক ধাপে অবশিষ্ট অনুসন্ধানের অর্ধেক বাদ দেয়। আমরা বাইনারি সার্চ ট্রি (BST) এর ইনভেরিয়েন্ট সংজ্ঞায়িত করি যেখানে বাম দিকের সমস্ত নোড প্যারেন্টের চেয়ে ছোট এবং ডান দিকের সমস্ত নোড বড় হয়। আমরা O(h) সময়ে অনুসন্ধান ও সন্নিবেশের কার্যপদ্ধতি বিশ্লেষণ করি এবং ব্যাখ্যা করি কেন আগে থেকে সাজানো ইনপুট ট্রিকে ধীরগতির লিনিয়ার চেইনে নামিয়ে আনতে পারে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'balanced-trees',
    tech: 'trees',
    title: {
      en: 'Balanced Trees — Tree Rotations, Degeneracy, and Logarithmic Bounds',
      bn: 'ব্যালান্সড ট্রি: ট্রি রোটেশন, ডিজেনারেসি এবং লগারিদমিক সীমাবদ্ধতা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'hierarchical-paradigm',
      text: {
        en: 'The Power of Hierarchy: Beyond Flat Linear Sequences',
        bn: 'হায়ারার্কির শক্তি: সমতল রৈখিক সিকোয়েন্সের বাইরে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When developers store collections in arrays or linked lists, operations are constrained by linear geometry. Searching an unsorted list of 1000 items requires inspecting elements one by one, scaling linearly in O(n) time. Even in a sorted array where binary search takes O(log n), inserting a new element requires shifting existing elements in O(n) time.',
        bn: 'যখন ডেভেলপাররা অ্যারে বা লিংকড লিস্টে ডেটা সংরক্ষণ করেন, তখন সমস্ত অপারেশন রৈখিক জ্যামিতির সীমাবদ্ধতায় আটকে থাকে। ১০০০টি উপাদানের একটি অগোছালো তালিকায় অনুসন্ধান করতে একে একে উপাদান দেখতে হয় যা O(n) সময় নেয়। সাজানো অ্যারেতে বাইনারি সার্চ O(log n) সময় নিলেও নতুন উপাদান ঢোকাতে O(n) সময়ে বিদ্যমান উপাদান সরাতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Trees solve this dual bottleneck by introducing non-linear hierarchy. Instead of a single sequence, a tree connects a root node to subtrees through directed links without cycles. In a Binary Search Tree (BST), this structural relationship enforces an ordering invariant: all keys in a node’s left subtree are strictly smaller than the node, while all keys in its right subtree are strictly larger.',
        bn: 'ট্রি একটি নন-লিনিয়ার হায়ারার্কি বা স্তরবিন্যাস তৈরি করে এই উভয় সীমাবদ্ধতা দূর করে। একটি একক সারির বদলে ট্রি কোনো চক্র ছাড়া নির্দেশিত লিংকের মাধ্যমে একটি মূল নোড বা রুটকে বিভিন্ন সাব-ট্রির সাথে যুক্ত করে। একটি বাইনারি সার্চ ট্রিতে (BST) এই সম্পর্ক একটি নির্দিষ্ট নিয়ম মেনে চলে: যেকোনো নোডের বাম সাব-ট্রির সমস্ত মান নোডটির চেয়ে ছোট হয় এবং ডান সাব-ট্রির সমস্ত মান বড় হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'binary-search-tree-invariant',
          def: {
            en: "The fundamental rule where every node's left subtree contains only smaller keys, and its right subtree contains only larger keys.",
            bn: 'এমন একটি মৌলিক নিয়ম যেখানে প্রতিটি নোডের বাম সাব-ট্রিতে কেবল ছোট মান এবং ডান সাব-ট্রিতে কেবল বড় মান থাকে।'
          }
        },
        {
          term: 'tree-height',
          def: {
            en: 'The maximum number of edges on a path from the root to any leaf node, setting the asymptotic cost bound for tree operations.',
            bn: 'রুট থেকে যেকোনো পাতা পর্যন্ত দীর্ঘতম পথের মোট এজের সংখ্যা, যা সমস্ত অপারেশনের সর্বোচ্চ সময় সীমা নির্ধারণ করে।'
          }
        },
        {
          term: 'leaf-node',
          def: {
            en: 'A terminal node in a tree with zero children (both left and right child pointers are null).',
            bn: 'ট্রির শেষ প্রান্তে থাকা একটি নোড যার কোনো সন্তান নেই (উভয় চাইল্ড পয়েন্টার নাল থাকে)।'
          }
        },
        {
          term: 'inorder-sorted-property',
          def: {
            en: 'Traversing a binary search tree in left-node-right order visits all stored keys in strictly ascending sorted order.',
            bn: 'একটি বিএসটিকে বাম-নোড-ডান ক্রমে পরিভ্রমণ করলে সমস্ত উপাদান স্বাভাবিক ছোট থেকে বড় ক্রমে পাওয়া যায়।'
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
      id: 'bst-mechanics-table',
      text: {
        en: 'Operation Mechanics: Search and Insertion Complexity',
        bn: 'অপারেশন কৌশল: অনুসন্ধান এবং সন্নিবেশের সময় জটিলতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because every node partitions data into smaller and larger subsets, searching for a key mirrors binary search. At each node, a single scalar comparison determines whether to terminate, branch left, or branch right. The time taken by search, insertion, and deletion is proportional to the tree height h.',
        bn: 'যেহেতু প্রতিটি নোড ডেটাকে ছোট এবং বড় দুটি ভাগে বিভক্ত করে, তাই ট্রিতে অনুসন্ধান করা সরাসরি বাইনারি সার্চের মতো কাজ করে। প্রতিটি নোডে মাত্র একটি তুলনা দেখে সিদ্ধান্ত নেওয়া হয় অনুসন্ধান শেষ হবে, বামে যাবে নাকি ডানে যাবে। অনুসন্ধান, সন্নিবেশ এবং মুছে ফেলার সময় সরাসরি ট্রির উচ্চতা h এর সমানুপাতিক হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'BST Operation', bn: 'বিএসটি অপারেশন' },
        { en: 'Balanced Height Bound (h = log2 n)', bn: 'ভারসাম্যপূর্ণ সীমা (h = log2 n)' },
        { en: 'Degenerate Height Bound (h = n)', bn: 'টেরছা সীমা (h = n)' },
        { en: 'Navigation Rule', bn: 'চলাচলের নিয়ম' }
      ],
      rows: [
        [
          { en: 'Search (contains)', bn: 'অনুসন্ধান' },
          { en: 'O(log n) comparisons', bn: 'O(log n) তুলনা' },
          { en: 'O(n) comparisons', bn: 'O(n) তুলনা' },
          { en: 'Branch left if key < node, right if key > node', bn: 'key < node হলে বামে, key > node হলে ডানে' }
        ],
        [
          { en: 'Insert (add)', bn: 'নতুন যোগ' },
          { en: 'O(log n) time', bn: 'O(log n) সময়' },
          { en: 'O(n) time', bn: 'O(n) সময়' },
          { en: 'Descend to first empty null slot and link', bn: 'প্রথম ফাঁকা নাল স্থানে নেমে নতুন নোড যুক্ত করা' }
        ],
        [
          { en: 'Find Minimum', bn: 'সর্বনিম্ন মান খোঁজা' },
          { en: 'O(log n) time', bn: 'O(log n) সময়' },
          { en: 'O(n) time', bn: 'O(n) সময়' },
          { en: 'Follow left child pointers until left is null', bn: 'বাম সন্তান নাল না হওয়া পর্যন্ত বামে যাওয়া' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-bst-code',
      text: {
        en: 'Executable Binary Search Tree Implementation',
        bn: 'বাইনারি সার্চ ট্রির সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates a Binary Search Tree with 7 elements. Notice how searching for 40 requires only 3 comparisons, and inorder traversal automatically prints keys in ascending sorted order.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৭টি উপাদান দিয়ে একটি বাইনারি সার্চ ট্রি তৈরি করে। লক্ষ্য করুন কীভাবে ৪০ খুঁজতে মাত্র ৩টি তুলনা লাগে এবং ইনঅর্ডার ট্রাভার্সাল স্বয়ংক্রিয়ভাবে সাজানো ক্রম প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      code: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          break;
        }
        curr = curr.left;
      } else if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          break;
        }
        curr = curr.right;
      } else {
        break; // duplicate
      }
    }
  }

  search(val) {
    let curr = this.root;
    let comparisons = 0;
    while (curr) {
      comparisons++;
      if (val === curr.val) return { found: true, comparisons };
      if (val < curr.val) curr = curr.left;
      else curr = curr.right;
    }
    return { found: false, comparisons };
  }

  inorder(node = this.root, res = []) {
    if (!node) return res;
    this.inorder(node.left, res);
    res.push(node.val);
    this.inorder(node.right, res);
    return res;
  }

  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
}

const bst = new BinarySearchTree();
const values = [50, 30, 70, 20, 40, 60, 80];
for (const v of values) bst.insert(v);

console.log('Root element:', bst.root.val);
// Output: Root element: 50
console.log('Tree height:', bst.height());
// Output: Tree height: 2
console.log('Inorder traversal (sorted):', bst.inorder().join(', '));
// Output: Inorder traversal (sorted): 20, 30, 40, 50, 60, 70, 80

const s1 = bst.search(40);
console.log(\`Search 40 -> Found: \${s1.found}, Comparisons: \${s1.comparisons}\`);
// Output: Search 40 -> Found: true, Comparisons: 3

const s2 = bst.search(95);
console.log(\`Search 95 -> Found: \${s2.found}, Comparisons: \${s2.comparisons}\`);
// Output: Search 95 -> Found: false, Comparisons: 3`
    },
    {
      type: 'heading',
      id: 'degenerate-staircase-problem',
      text: {
        en: 'The Degenerate Skew Danger: When Trees Become Linked Lists',
        bn: 'টেরছা ট্রির ঝুঁকি: ট্রি যখন লিংকড লিস্টে রূপ নেয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard Binary Search Tree makes no guarantees about balance. If values arrive in sorted order, such as 10, 20, 30, 40, every new node is placed exclusively as a right child. The tree degrades into a single linked list of height n, where search time explodes to O(n). This vulnerability establishes the fundamental motivation for self-balancing AVL and Red-Black trees.',
        bn: 'একটি সাধারণ বাইনারি সার্চ ট্রি ভারসাম্যের কোনো গ্যারান্টি দেয় না। মানগুলো যদি আগে থেকে সাজানো ক্রমে আসে, যেমন ১০, ২০, ৩০, ৪০, তবে প্রতিটি নতুন নোড কেবল ডান সন্তান হিসেবে যুক্ত হয়। ট্রিটি সম্পূর্ণভাবে n উচ্চতার একটি লিংকড লিস্টে রূপ নেয়, যেখানে অনুসন্ধানের সময় O(n) এ পৌঁছে যায়। এই সমস্যাটিই স্বয়ংক্রিয় ভারসাম্য রক্ষাকারী AVL এবং রেড-ব্ল্যাক ট্রির প্রয়োজনীয়তা তৈরি করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Binary search tree invariant: Every node enforces left < parent < right, enabling binary decision pruning at each step.',
          bn: 'বিএসটি ইনভেরিয়েন্ট: প্রতিটি নোডে বাম < প্যারেন্ট < ডান নিয়ম মেনে চলায় প্রতি ধাপে অর্ধেক ডোমেন বাদ দেওয়া যায়।'
        },
        {
          en: 'Height dictates cost: Search, insertion, and minimum lookups all run in O(h) time, requiring balanced height for O(log n) speed.',
          bn: 'উচ্চতাই খরচ নির্ধারণ করে: অনুসন্ধান ও সন্নিবেশ O(h) সময়ে চলে, তাই O(log n) গতির জন্য ভারসাম্যপূর্ণ উচ্চতা বজায় রাখা জরুরি।'
        },
        {
          en: 'Inorder yields sorted output: Traversing left-node-right extracts all tree elements in naturally ascending sorted order.',
          bn: 'ইনঅর্ডার সাজানো মান দেয়: বাম-নোড-ডান ক্রমে ট্রাভার্স করলে ট্রির সমস্ত উপাদান ছোট থেকে বড় ক্রমে পাওয়া যায়।'
        },
        {
          en: 'Sorted insertion vulnerability: Unbalanced BSTs degenerate into O(n) linked lists when fed pre-sorted data sequences.',
          bn: 'সাজানো ইনপুটের দুর্বলতা: সাজানো ডেটা প্রবেশ করালে ভারসাম্যহীন বিএসটি O(n) লিংকড লিস্টে পরিণত হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tt-ex1',
      kind: 'mcq',
      topic: 'bst-search-step-cost',
      question: {
        en: 'In a perfectly balanced Binary Search Tree containing n elements, what is the maximum number of comparisons needed to search for a value?',
        bn: 'n উপাদান বিশিষ্ট একটি নিখুঁত ভারসাম্যপূর্ণ বাইনারি সার্চ ট্রিতে কোনো মান খুঁজতে সর্বোচ্চ কতটি তুলনার প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'At most Math.floor(log2(n)) + 1 comparisons, matching the height of the tree',
          bn: 'সর্বোচ্চ Math.floor(log2(n)) + ১ টি তুলনা, যা ট্রির উচ্চতার সমান'
        },
        {
          en: 'Exactly n comparisons in every case',
          bn: 'প্রতিটি ক্ষেত্রে ঠিক n টি তুলনা'
        },
        {
          en: 'O(n^2) comparisons',
          bn: 'O(n^2) টি তুলনা'
        },
        {
          en: 'Strictly 0 comparisons always',
          bn: 'সর্বদা কঠোরভাবে ০টি তুলনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each step down the tree eliminates half of the remaining subtrees.',
        bn: 'নিচের দিকে প্রতি ধাপে নামলে অবশিষ্ট সাব-ট্রির অর্ধেক বাদ হয়ে যায়।'
      },
      explanation: {
        en: 'A balanced binary tree has height floor(log2 n). Searching follows a single root-to-leaf path, taking logarithmic comparisons.',
        bn: 'ভারসাম্যপূর্ণ ট্রির উচ্চতা floor(log2 n) হওয়ায় রুট থেকে পাতা পর্যন্ত কেবল একটি পথ ধরে নেমে লগারিদমিক তুলনা লাগে।'
      }
    },
    {
      id: 'tt-ex2',
      kind: 'mcq',
      topic: 'inorder-traversal-behavior',
      question: {
        en: 'What sequence order is produced when performing an Inorder traversal (Left, Node, Right) on a valid Binary Search Tree?',
        bn: 'একটি বৈধ বাইনারি সার্চ ট্রিতে ইনঅর্ডার ট্রাভার্সাল (বাম, নোড, ডান) চালালে কোন ধরনের ফলাফল পাওয়া যায়?'
      },
      options: [
        {
          en: 'All keys printed in strictly ascending sorted order',
          bn: 'সমস্ত উপাদান কঠোরভাবে ছোট থেকে বড় সাজানো ক্রমে পাওয়া যায়'
        },
        {
          en: 'All keys printed in reverse descending order',
          bn: 'সমস্ত উপাদান উল্টো বড় থেকে ছোট ক্রমে পাওয়া যায়'
        },
        {
          en: 'A random permutation of elements',
          bn: 'উপাদানগুলোর একটি এলোমেলো রূপ'
        },
        {
          en: 'Only the root and leaf nodes',
          bn: 'কেবল রুট এবং পাতার নোডগুলো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Inorder visits all smaller elements in the left subtree before visiting the parent and then the larger right subtree.',
        bn: 'ইনঅর্ডারে প্যারেন্টের আগে বামের ছোট উপাদান এবং পরে ডানের বড় উপাদান দেখা হয়।'
      },
      explanation: {
        en: 'Because left < node < right holds throughout a BST, recursive left-node-right visitation guarantees ascending sorted output.',
        bn: 'বিএসটিতে বাম < নোড < ডান শর্ত সর্বদা সত্য হওয়ায় বাম-নোড-ডান ট্রাভার্সাল নিশ্চিতভাবেই ছোট থেকে বড় সাজানো ক্রম তৈরি করে।'
      }
    },
    {
      id: 'tt-ex3',
      kind: 'mcq',
      topic: 'degenerate-bst-worst-case',
      question: {
        en: 'What happens to the shape and search complexity of a standard Binary Search Tree when elements are inserted in strictly ascending order (e.g. 10, 20, 30, 40)?',
        bn: 'উপাদানগুলো যখন কঠোরভাবে ঊর্ধ্বক্রমে ঢোকানো হয় (যেমন ১০, ২০, ৩০, ৪০), তখন সাধারণ বিএসটির আকার এবং অনুসন্ধানের জটিলতার কী ঘটে?'
      },
      options: [
        {
          en: 'The tree degenerates into a one-sided linked list with height n, degrading search time to linear O(n)',
          bn: 'ট্রিটি n উচ্চতার একমুখী লিংকড লিস্টে পরিণত হয়, যার ফলে অনুসন্ধানের সময় রৈখিক O(n) এ নেমে যায়'
        },
        {
          en: 'The tree automatically balances itself in 0 seconds',
          bn: 'ট্রিটি স্বয়ংক্রিয়ভাবে ০ সেকেন্ডে ভারসাম্যপূর্ণ হয়'
        },
        {
          en: 'Search complexity improves to O(1) constant time',
          bn: 'অনুসন্ধান জটিলতা উন্নত হয়ে O(1) ধ্রুবক সময়ে চলে আসে'
        },
        {
          en: 'The root node deletes all child pointers',
          bn: 'রুট নোড তার সমস্ত চাইল্ড পয়েন্টার মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If every new element is larger than the previous one, which child pointer will it always attach to?',
        bn: 'প্রতিটি নতুন উপাদান যদি আগের উপাদানের চেয়ে বড় হয়, তবে এটি সর্বদা কোন চাইল্ড পয়েন্টারে যুক্ত হবে?'
      },
      explanation: {
        en: 'Each newcomer attaches as a right child of the previous leaf, creating a skewed chain of length n with linear lookup time.',
        bn: 'প্রতিটি নতুন উপাদান আগের পাতার ডান সন্তান হিসেবে যুক্ত হওয়ায় n দৈর্ঘ্যের একটি টেরছা চেইন তৈরি হয় যা রৈখিক সময় নেয়।'
      }
    }
  ],
  quiz: {
    id: 'tree-thinking-quiz',
    title: {
      en: 'Binary Search Tree Foundations Quiz',
      bn: 'বাইনারি সার্চ ট্রির ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'tt-q1',
        kind: 'mcq',
        topic: 'bst-search-invariant-rule',
        question: {
          en: 'If a node contains key 50, where in its subtrees can key 40 and key 60 legally reside?',
          bn: 'একটি নোডে যদি ৫০ মান থাকে, তবে তার সাব-ট্রির কোথায় ৪০ এবং ৬০ মান দুটি বৈধভাবে থাকতে পারে?'
        },
        options: [
          {
            en: '40 must reside in the left subtree, and 60 must reside in the right subtree',
            bn: '৪০ অবশ্যই বাম সাব-ট্রিতে এবং ৬০ অবশ্যই ডান সাব-ট্রিতে থাকতে হবে'
          },
          {
            en: 'Both 40 and 60 must reside in the left subtree',
            bn: '৪০ এবং ৬০ উভয়কেই বাম সাব-ট্রিতে থাকতে হবে'
          },
          {
            en: 'Both 40 and 60 must reside in the right subtree',
            bn: '৪০ এবং ৬০ উভয়কেই ডান সাব-ট্রিতে থাকতে হবে'
          },
          {
            en: 'They can reside in either subtree interchangeably',
            bn: 'তারা যেকোনো সাব-ট্রিতে অদলবদল করে থাকতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recall the BST ordering property: left keys < parent key < right keys.',
          bn: 'বিএসটি ক্রমের নিয়মটি মনে করুন: বামের মান < প্যারেন্টের মান < ডানের মান।'
        },
        explanation: {
          en: 'By definition of a BST, any key smaller than the node (40 < 50) belongs in the left subtree, and larger keys (60 > 50) belong in the right subtree.',
          bn: 'বিএসটির সংজ্ঞানুযায়ী নোডের চেয়ে ছোট মান (৪০ < ৫০) বাম সাব-ট্রিতে এবং বড় মান (৬০ > ৫০) ডান সাব-ট্রিতে থাকে।'
        }
      },
      {
        id: 'tt-q2',
        kind: 'mcq',
        topic: 'find-minimum-in-bst',
        question: {
          en: 'How do you find the minimum key stored in a Binary Search Tree starting from the root?',
          bn: 'রুট নোড থেকে শুরু করে একটি বাইনারি সার্চ ট্রিতে সংরক্ষিত সর্বনিম্ন মানটি আপনি কীভাবে খুঁজে পাবেন?'
        },
        options: [
          {
            en: 'Traverse left child pointers continuously until reaching a node whose left pointer is null',
            bn: 'বাম চাইল্ড পয়েন্টার ধরে অনবরত নিচে নামতে হবে যতক্ষণ না এমন নোড পাওয়া যায় যার বাম পয়েন্টার নাল'
          },
          {
            en: 'Traverse right child pointers continuously',
            bn: 'অনবরত ডান চাইল্ড পয়েন্টার ধরে যাওয়া'
          },
          {
            en: 'Inspect all leaf nodes with a breadth-first search',
            bn: 'ব্রেথ-ফার্স্ট সার্চ দিয়ে সমস্ত পাতার নোড পরীক্ষা করা'
          },
          {
            en: 'Check index 0 of the internal hash table',
            bn: 'অভ্যন্তরীণ হ্যাশ টেবিলের ০ নম্বর ইনডেক্স দেখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where do the smallest elements always branch in a BST?',
          bn: 'বিএসটিতে সবচেয়ে ছোট উপাদানগুলো সর্বদা কোন দিকে শাখা বিস্তার করে?'
        },
        explanation: {
          en: 'Since every left step leads to smaller values, the leftmost node in the tree contains the global minimum key.',
          bn: 'যেহেতু প্রতিটি বাম পদক্ষেপ ছোট মানের দিকে নিয়ে যায়, তাই ট্রির সবচেয়ে বামের নোডটিতেই সর্বনিম্ন মান থাকে।'
        }
      },
      {
        id: 'tt-q3',
        kind: 'mcq',
        topic: 'tree-height-definition',
        question: {
          en: 'What is the definition of the height of a tree node?',
          bn: 'একটি ট্রি নোডের উচ্চতার সঠিক সংজ্ঞা কোনটি?'
        },
        options: [
          {
            en: 'The number of edges on the longest downward path from that node to a leaf',
            bn: 'সেই নোড থেকে একটি পাতা পর্যন্ত দীর্ঘতম নিম্নগামী পথের এজের সংখ্যা'
          },
          {
            en: 'The total number of nodes in the entire tree',
            bn: 'সম্পূর্ণ ট্রিতে মোট নোডের সংখ্যা'
          },
          {
            en: 'The memory size of the node in kilobytes',
            bn: 'কিলোবাইটে নোডের মেমোরি আকার'
          },
          {
            en: 'The number of parents the node possesses',
            bn: 'নোডটির অভিভাবকের সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Height measures downward distance to the furthest leaf.',
          bn: 'উচ্চতা হলো দূরবর্তী পাতা পর্যন্ত নিচের দিকে পরিমাপকৃত দূরত্ব।'
        },
        explanation: {
          en: 'A leaf node has height 0. The height of any node is 1 + max(height(left), height(right)).',
          bn: 'পাতার উচ্চতা ০ হয়। যেকোনো নোডের উচ্চতা হলো ১ + max(বাম_উচ্চতা, ডান_উচ্চতা)।'
        }
      },
      {
        id: 'tt-q4',
        kind: 'mcq',
        topic: 'unbalanced-tree-solution',
        question: {
          en: 'How do self-balancing trees (like AVL and Red-Black trees) prevent BSTs from degrading into linear linked lists?',
          bn: 'স্বয়ংক্রিয় ভারসাম্য রক্ষাকারী ট্রি (যেমন AVL এবং রেড-ব্ল্যাক ট্রি) কীভাবে বিএসটিকে রৈখিক লিংকড লিস্টে রূপ নেওয়া থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'They perform local O(1) tree rotations during insertions and deletions to guarantee logarithmic height O(log n)',
            bn: 'তারা সন্নিবেশ ও অপসারণের সময় স্থানীয় O(1) ট্রি রোটেশন চালিয়ে ট্রির উচ্চতা সর্বদা O(log n) এ বজায় রাখে'
          },
          {
            en: 'They convert all numbers to 32-bit floating-point integers',
            bn: 'তারা সমস্ত সংখ্যাকে ৩২-বিট দশমিক পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'They delete half of the tree whenever height exceeds 5',
            bn: 'উচ্চতা ৫ এর বেশি হলে তারা ট্রির অর্ধেক মুছে ফেলে'
          },
          {
            en: 'They restart the application when sorted data arrives',
            bn: 'সাজানো ডেটা এলে তারা অ্যাপ্লিকেশন পুনরায় চালু করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'How can you restructure tree nodes without violating the BST search property?',
          bn: 'বিএসটি অনুসন্ধানের নিয়ম না ভেঙে কীভাবে নোডগুলোর পুনর্বিন্যাস করা যায়?'
        },
        explanation: {
          en: 'Tree rotations swap parent-child roles locally in O(1) time while preserving the BST invariant, strictly bounding height to O(log n).',
          bn: 'ট্রি রোটেশন বিএসটি বৈশিষ্ট্য অক্ষুণ্ন রেখে O(1) সময়ে প্যারেন্ট-চাইল্ড অদলবদল করে ট্রির উচ্চতা কঠোরভাবে O(log n) এ রাখে।'
        }
      }
    ]
  }
};
