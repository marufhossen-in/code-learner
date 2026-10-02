import type { Lesson } from '../../../lib/types';

export const balancedTreesLesson: Lesson = {
  slug: 'balanced-trees',
  tech: 'trees',
  title: {
    en: 'Balanced Trees — Tree Rotations, Degeneracy, and Logarithmic Bounds',
    bn: 'ব্যালান্সড ট্রি: ট্রি রোটেশন, ডিজেনারেসি এবং লগারিদমিক সীমাবদ্ধতা'
  },
  summary: {
    en: 'A plain Binary Search Tree only delivers logarithmic performance when its height remains balanced. When sequential or sorted data arrives, an unprotected tree degrades into a linear chain of height n. Balanced trees restore strict O(log n) guarantees by performing constant-time O(1) tree rotations during insertions and deletions. We explore the balance factor invariant, contrast AVL and Red-Black tree architectures, and analyze why B-Trees generalize this balancing principle for disk page storage.',
    bn: 'একটি সাধারণ বাইনারি সার্চ ট্রি কেবল তখনই লগারিদমিক কর্মক্ষমতা দিতে পারে যখন তার উচ্চতা ভারসাম্যপূর্ণ থাকে। ক্রমান্বয়ে সাজানো ডেটা প্রবেশ করালে সুরক্ষাহীন ট্রি n উচ্চতার একটি রৈখিক চেইনে পরিণত হয়। ব্যালান্সড ট্রি সন্নিবেশ ও অপসারণের সময় ধ্রুবক O(1) ট্রি রোটেশন চালিয়ে নিশ্চিতভাবে O(log n) গতি বজায় রাখে। আমরা ব্যালান্স ফ্যাক্টর বিশ্লেষণ করি, এভিএল এবং রেড-ব্ল্যাক ট্রির কাঠামোগত তুলনা করি এবং ব্যাখ্যা করি কেন বি-ট্রি ডিস্ক স্টোরেজের জন্য এই ভারসাম্য নীতি সম্প্রসারিত করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-ordered-ceremony',
    tech: 'trees',
    title: {
      en: 'Tree Traversal Ceremonies — Inorder, Preorder, Postorder, and BFS',
      bn: 'ট্রি ট্রাভার্সাল পদ্ধতি: ইনঅর্ডার, প্রিঅর্ডার, পোস্টঅর্ডার এবং বিএফএস'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'balancing-imperative',
      text: {
        en: 'The Degeneracy Crisis: Why Trees Need Self-Balancing',
        bn: 'ভারসাম্যহীনতার সংকট: কেন ট্রিতে স্বয়ংক্রিয় ভারসাম্য প্রয়োজন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When developers rely on an ordinary Binary Search Tree, they implicitly assume that tree height remains logarithmic. However, if data is inserted in sorted order, each node attaches strictly as a right child. The resulting structure behaves identically to a singly linked list, slowing searches down to O(n) linear scans.',
        bn: 'যখন ডেভেলপাররা একটি সাধারণ বাইনারি সার্চ ট্রির ওপর নির্ভর করেন, তখন তারা ধরে নেন যে ট্রির উচ্চতা সর্বদা লগারিদমিক থাকবে। তবে ডেটা যদি সাজানো ক্রমে প্রবেশ করে, তবে প্রতিটি নোড কেবল ডান সন্তান হিসেবে যুক্ত হয়। ফলে ট্রিটি একটি সাধারণ লিংকড লিস্টের মতো আচরণ করে এবং অনুসন্ধানের গতি O(n) রৈখিক সময়ে নেমে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Self-balancing trees prevent this structural collapse by monitoring node balance factors. Whenever an insertion or deletion causes one subtree to become excessively deep, the tree performs local pointer reassignments called tree rotations. These rotations redistribute node heights in O(1) time without altering in-order search relationships.',
        bn: 'স্বয়ংক্রিয় ভারসাম্য রক্ষাকারী ট্রি নোডগুলোর ব্যালান্স ফ্যাক্টর পর্যবেক্ষণ করে এই বিপর্যয় রোধ করে। যখনই কোনো সন্নিবেশ বা অপসারণের ফলে একটি সাব-ট্রি অতিরিক্ত গভীর হয়ে পড়ে, তখনই ট্রিটি স্থানীয়ভাবে পয়েন্টার অদলবদল করে যাকে ট্রি রোটেশন বলা হয়। এই রোটেশনগুলো মূল অনুসন্ধানের নিয়ম না ভেঙে মাত্র O(1) সময়ে নোডের উচ্চতা পুনর্বিন্যাস করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'tree-rotation',
          def: {
            en: 'A constant-time O(1) pointer restructuring that changes subtree heights while preserving the BST search invariant.',
            bn: 'এমন একটি O(1) পয়েন্টার পরিবর্তন যা বিএসটি অনুসন্ধানের নিয়ম অক্ষুণ্ন রেখে সাব-ট্রির উচ্চতা পুনর্বিন্যাস করে।'
          }
        },
        {
          term: 'balance-factor',
          def: {
            en: "The difference between the height of a node's left subtree and its right subtree (height(left) - height(right)).",
            bn: 'কোনো নোডের বাম সাব-ট্রির উচ্চতা এবং ডান সাব-ট্রির উচ্চতার মধ্যকার গাণিতিক ব্যবধান।'
          }
        },
        {
          term: 'avl-invariant',
          def: {
            en: 'The structural rule mandating that the balance factor of every node must strictly remain within the set {-1, 0, +1}.',
            bn: 'একটি কাঠামোগত নিয়ম যা প্রতিটি নোডের ব্যালান্স ফ্যাক্টরকে কঠোরভাবে {-১, ০, +১} এর মধ্যে রাখতে বাধ্য করে।'
          }
        },
        {
          term: 'red-black-color-rules',
          def: {
            en: 'A set of color constraints (equal black height, no consecutive red nodes) ensuring maximum tree height never exceeds 2 log2 n.',
            bn: 'রঙভিত্তিক কিছু নিয়ম যা নিশ্চিত করে যে ট্রির সর্বোচ্চ উচ্চতা কখনোই ২ log2 n এর বেশি হবে না।'
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
      id: 'tree-family-table',
      text: {
        en: 'Architectural Comparison: AVL vs Red-Black vs B-Trees',
        bn: 'কাঠামোগত তুলনা: এভিএল বনাম রেড-ব্ল্যাক বনাম বি-ট্রি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Different balanced tree families make distinct trade-offs between lookup speed, write overhead, and storage medium. AVL trees enforce the strictest height bounds for the fastest in-memory reads. Red-Black trees relax height tolerances slightly to reduce rebalancing rotations during frequent writes. B-Trees expand branching factors to hundreds of keys per node to minimize disk block reads.',
        bn: 'বিভিন্ন ধরনের ব্যালান্সড ট্রি অনুসন্ধানের গতি, লেখার খরচ এবং স্টোরেজ মাধ্যমের ওপর ভিত্তি করে আলাদা আলাদা সুবিধা দেয়। দ্রুততম ইন-মেমোরি অনুসন্ধানের জন্য এভিএল ট্রি সবচেয়ে কঠোর উচ্চতার নিয়ম মেনে চলে। রেড-ব্ল্যাক ট্রি বারবার লেখার সময় রোটেশন কমাতে উচ্চতার নিয়ম কিছুটা শিথিল রাখে। বি-ট্রি ডিস্ক থেকে ব্লক পড়ার সংখ্যা কমাতে নোড প্রতি শত শত চাইল্ডের ব্রাঞ্চিং ফ্যাক্টর ব্যবহার করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Tree Family', bn: 'ট্রির ধরন' },
        { en: 'Maximum Height Bound', bn: 'সর্বোচ্চ উচ্চতার সীমা' },
        { en: 'Rebalancing Workload', bn: 'পুনর্ভারসাম্যের খরচ' },
        { en: 'Primary Real-World Usage', bn: 'বাস্তব ক্ষেত্রে প্রধান ব্যবহার' }
      ],
      rows: [
        [
          { en: 'AVL Tree', bn: 'এভিএল ট্রি' },
          { en: '~1.44 * log2(n)', bn: '~১.৪৪ * log2(n)' },
          { en: 'Strict balance, up to O(log n) checks', bn: 'কঠোর ভারসাম্য, O(log n) পর্যন্ত পরীক্ষা' },
          { en: 'Read-heavy in-memory lookups', bn: 'পঠন-প্রধান ইন-মেমোরি অনুসন্ধান' }
        ],
        [
          { en: 'Red-Black Tree', bn: 'রেড-ব্ল্যাক ট্রি' },
          { en: '<= 2 * log2(n)', bn: '<= ২ * log2(n)' },
          { en: 'Relaxed balance, at most 2 rotations on insert', bn: 'শিথিল ভারসাম্য, সন্নিবেশে সর্বোচ্চ ২ রোটেশন' },
          { en: 'General-purpose OS kernels (Linux CFS, TreeMap)', bn: 'অপারেটিং সিস্টেম ও ম্যাপ (লিনাক্স CFS, TreeMap)' }
        ],
        [
          { en: 'B-Tree / B+ Tree', bn: 'বি-ট্রি / বি+ ট্রি' },
          { en: '3 to 4 levels across billions', bn: 'কোটি উপাদানেও মাত্র ৩ থেকে ৪ স্তর' },
          { en: 'Page splits and merges', bn: 'পৃষ্ঠা বিভাজন এবং একত্রীকরণ' },
          { en: 'Disk databases (SQLite, MySQL InnoDB, Postgres)', bn: 'ডিস্ক ডেটাবেস (SQLite, MySQL InnoDB, Postgres)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-avl-code',
      text: {
        en: 'Executable AVL Rotation Implementation',
        bn: 'এভিএল রোটেশনের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program inserts sorted values 10, 20, 30 into an AVL Tree. In an ordinary BST, these values would create a degenerate chain of height 2. Here, the AVL balance factor triggers an automatic left rotation, keeping the height at 1 and balance factor at 0.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি এভিএল ট্রিতে ক্রমানুসারে ১০, ২০, ৩০ মানগুলো যুক্ত করে। সাধারণ বিএসটিতে এগুলো ২ উচ্চতার একটি টেরছা চেইন তৈরি করত। কিন্তু এখানে এভিএল ব্যালান্স ফ্যাক্টর স্বয়ংক্রিয়ভাবে একটি লেফট রোটেশন ঘটিয়ে উচ্চতা ১ এ এবং ব্যালান্স ফ্যাক্টর ০ তে স্থিতিশীল রাখে।'
      }
    },
    {
      type: 'code',
      code: `class AVLNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    return node ? node.height : -1;
  }

  updateHeight(node) {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  balanceFactor(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  insert(val) {
    this.root = this._insert(this.root, val);
  }

  _insert(node, val) {
    if (!node) return new AVLNode(val);

    if (val < node.val) node.left = this._insert(node.left, val);
    else if (val > node.val) node.right = this._insert(node.right, val);
    else return node;

    this.updateHeight(node);
    const bf = this.balanceFactor(node);

    // Right-Right Case (triggers left rotation)
    if (bf < -1 && val > node.right.val) {
      return this.rotateLeft(node);
    }
    // Left-Left Case (triggers right rotation)
    if (bf > 1 && val < node.left.val) {
      return this.rotateRight(node);
    }

    return node;
  }
}

const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);

console.log('Root element after RR rotation:', avl.root.val);
// Output: Root element after RR rotation: 20
console.log('Left child:', avl.root.left.val);
// Output: Left child: 10
console.log('Right child:', avl.root.right.val);
// Output: Right child: 30
console.log('Tree height:', avl.height(avl.root));
// Output: Tree height: 1
console.log('Balance factor of root:', avl.balanceFactor(avl.root));
// Output: Balance factor of root: 0`
    },
    {
      type: 'heading',
      id: 'production-systems-usage',
      text: {
        en: 'Production Systems: Linux CFS and Database Storage Engines',
        bn: 'বাস্তব সিস্টেম: লিনাক্স সিএফএস এবং ডাটাবেস স্টোরেজ ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Linux Completely Fair Scheduler (CFS) relies on a Red-Black tree keyed by virtual runtime (vruntime) to schedule tasks. Because threads frequently yield and wake, Red-Black trees minimize write-side rebalancing rotations. In contrast, relational database engines like SQLite and MySQL InnoDB store tables inside B+ trees, packing hundreds of keys per 4-kilobyte page to minimize expensive disk I/O operations.',
        bn: 'লিনাক্স কমপ্লিটলি ফেয়ার শিডিউলার (CFS) ভার্চুয়াল রানটাইমের ভিত্তিতে কাজ বণ্টন করতে একটি রেড-ব্ল্যাক ট্রি ব্যবহার করে। যেহেতু থ্রেডগুলো ঘন ঘন চালু ও বন্ধ হয়, তাই রেড-ব্ল্যাক ট্রি লেখার সময় রোটেশন কমিয়ে কার্যক্ষমতা বাড়ায়। অন্যদিকে রিলেশনাল ডাটাবেস যেমন SQLite এবং MySQL InnoDB ডিস্কের ইনপুট-আউটপুট খরচ কমাতে ৪-কিলোবাইট পৃষ্ঠায় শত শত কি রেখে বি+ ট্রি ব্যবহার করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Tree rotations operate in O(1): Rotations swap parent-child relationships locally with 3 pointer reassignments.',
          bn: 'ট্রি রোটেশন O(1) সময়ে চলে: রোটেশন মাত্র ৩টি পয়েন্টার পরিবর্তনের মাধ্যমে স্থানীয়ভাবে প্যারেন্ট-চাইল্ড সম্পর্ক অদলবদল করে।'
        },
        {
          en: 'Strict vs relaxed bounds: AVL trees guarantee the tightest height for read performance; Red-Black trees optimize for frequent writes.',
          bn: 'কঠোর বনাম শিথিল সীমা: দ্রুত পড়ার জন্য এভিএল সেরা উচ্চতা দেয়; বেশি লেখার জন্য রেড-ব্ল্যাক ট্রি বেশি উপযুক্ত।'
        },
        {
          en: 'Balance factor threshold: AVL trees trigger rebalancing whenever the height difference between subtrees reaches 2 or -2.',
          bn: 'ব্যালান্স ফ্যাক্টর সীমা: দুটি সাব-ট্রির উচ্চতার ব্যবধান ২ বা -২ হলেই এভিএল ট্রি সাথে সাথে রোটেশন চালায়।'
        },
        {
          en: 'Disk page adaptation: B-Trees widen branching factor to hundreds of keys per node, keeping tree height under 4 across billions of rows.',
          bn: 'ডিস্ক পেজ সমন্বয়: বি-ট্রি নোড প্রতি শত শত কি রেখে কোটি কোটি সারির মধ্যেও ট্রির উচ্চতা ৪ এর নিচে রাখে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bt-ex1',
      kind: 'mcq',
      topic: 'tree-rotation-time-complexity',
      question: {
        en: 'What is the time complexity of a single tree rotation (such as rotateLeft or rotateRight) in an AVL tree?',
        bn: 'একটি এভিএল ট্রিতে একটি একক ট্রি রোটেশনের (যেমন rotateLeft বা rotateRight) সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(1) constant time, requiring only a few local pointer reassignments',
          bn: 'O(1) ধ্রুবক সময়, মাত্র কয়েকটি স্থানীয় পয়েন্টার পরিবর্তনের মাধ্যমে'
        },
        {
          en: 'O(n) linear time',
          bn: 'O(n) রৈখিক সময়'
        },
        {
          en: 'O(log n) time',
          bn: 'O(log n) সময়'
        },
        {
          en: 'O(n^2) time',
          bn: 'O(n^2) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does a rotation rebuild the entire tree or only adjust pointers between a parent and child node?',
        bn: 'একটি রোটেশন কি পুরো ট্রি নতুন করে তৈরি করে নাকি কেবল প্যারেন্ট ও চাইল্ডের মধ্যের পয়েন্টার বদলায়?'
      },
      explanation: {
        en: 'A rotation adjusts 3 pointers between adjacent nodes, taking deterministic O(1) constant time independent of tree size n.',
        bn: 'রোটেশনে পাশাপাশি থাকা নোডগুলোর মধ্যে ৩টি পয়েন্টার পরিবর্তন করতে হয়, যা ট্রির আকারের ওপর নির্ভর না করে ধ্রুবক O(1) সময়ে ঘটে।'
      }
    },
    {
      id: 'bt-ex2',
      kind: 'mcq',
      topic: 'avl-balance-factor-range',
      question: {
        en: 'In a strictly valid AVL Tree, what are the only permissible values for the balance factor (height(left) - height(right)) at every node?',
        bn: 'একটি সঠিকভাবে পরিচালিত এভিএল ট্রিতে প্রতিটি নোডের ব্যালান্স ফ্যাক্টরের (উচ্চতা(বাম) - উচ্চতা(ডান)) একমাত্র বৈধ মান কোনগুলো?'
      },
      options: [
        {
          en: '-1, 0, and +1 only',
          bn: 'কেবল -১, ০, এবং +১'
        },
        {
          en: 'Any positive integer up to 100',
          bn: '১০০ পর্যন্ত যেকোনো ধনাত্মক পূর্ণসংখ্যা'
        },
        {
          en: 'Strictly 0 at all times',
          bn: 'সর্বদা কঠোরভাবে ০'
        },
        {
          en: '-2, 0, and +2',
          bn: '-২, ০, এবং +২'
        }
      ],
      answer: 0,
      hint: {
        en: 'AVL allows subtrees to differ in height by at most 1 level.',
        bn: 'এভিএল ট্রিতে সাব-ট্রিগুলোর উচ্চতার পার্থক্য সর্বোচ্চ ১ স্তর হতে পারে।'
      },
      explanation: {
        en: 'The core AVL invariant mandates |h(left) - h(right)| <= 1. Any balance factor of 2 or -2 triggers an immediate rotation.',
        bn: 'এভিএলের প্রধান নিয়ম হলো |উচ্চতা(বাম) - উচ্চতা(ডান)| <= ১। ব্যবধান ২ বা -২ হলেই তাৎক্ষণিক রোটেশন ঘটে।'
      }
    },
    {
      id: 'bt-ex3',
      kind: 'mcq',
      topic: 'avl-vs-red-black-tradeoff',
      question: {
        en: 'Why do write-heavy production systems like the Linux kernel CFS scheduler choose Red-Black trees over AVL trees?',
        bn: 'লিনাক্স কার্নেলের মতো লেখা-প্রধান সিস্টেমে কেন এভিএল ট্রির চেয়ে রেড-ব্ল্যাক ট্রি বেশি পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'Red-Black trees have slightly more relaxed height tolerances, requiring fewer rebalancing rotations during insertions and deletions',
          bn: 'রেড-ব্ল্যাক ট্রির উচ্চতার নিয়ম কিছুটা শিথিল হওয়ায় ঘন ঘন ডেটা যোগ বা মোছার সময় কম রোটেশনের প্রয়োজন হয়'
        },
        {
          en: 'Red-Black trees consume zero bytes of memory',
          bn: 'রেড-ব্ল্যাক ট্রি শূন্য বাইট মেমোরি খরচ করে'
        },
        {
          en: 'AVL trees cannot store 64-bit integers',
          bn: 'এভিএল ট্রি ৬৪-বিট পূর্ণসংখ্যা সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Red-Black trees run on the graphics GPU rather than CPU',
          bn: 'রেড-ব্ল্যাক ট্রি সিপিইউর বদলে গ্রাফিক্স কার্ডে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Which tree does less rebalancing work when nodes are frequently added and removed?',
        bn: 'ঘন ঘন নোড যোগ বা বাদ দেওয়ার সময় কোন ট্রিতে কম পুনর্বিন্যাসের কাজ করতে হয়?'
      },
      explanation: {
        en: 'While AVL trees give faster reads due to tighter height (~1.44 log n), Red-Black trees require at most 2 rotations on insert, minimizing write overhead.',
        bn: 'এভিএল ট্রিতে পড়া দ্রুত হলেও রেড-ব্ল্যাক ট্রিতে সন্নিবেশের সময় সর্বোচ্চ ২টি রোটেশন লাগে, যা লেখার খরচ অনেক কমিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'balanced-trees-quiz',
    title: {
      en: 'Balanced Trees and Rotations Quiz',
      bn: 'ব্যালান্সড ট্রি এবং রোটেশন কুইজ'
    },
    questions: [
      {
        id: 'bt-q1',
        kind: 'mcq',
        topic: 'single-vs-double-rotation',
        question: {
          en: 'When a new node is inserted into the right subtree of a left child (Left-Right imbalance, BF = +2), which rotations restore balance?',
          bn: 'বাম সন্তানের ডান সাব-ট্রিতে নতুন নোড ঢুকলে (লেফট-রাইট অসাম্য, BF = +২), কোন রোটেশনের মাধ্যমে ভারসাম্য পুনরুদ্ধার করা হয়?'
        },
        options: [
          {
            en: 'A Left rotation on the left child, followed by a Right rotation on the unbalanced parent (LR double rotation)',
            bn: 'বাম সন্তানের ওপর লেফট রোটেশন এবং এরপর ভারসাম্যহীন প্যারেন্টের ওপর রাইট রোটেশন (LR ডাবল রোটেশন)'
          },
          {
            en: 'A single Right rotation on the parent',
            bn: 'প্যারেন্টের ওপর একটি একক রাইট রোটেশন'
          },
          {
            en: 'Two consecutive Left rotations on the root',
            bn: 'রুটের ওপর পরপর দুটি লেফট রোটেশন'
          },
          {
            en: 'No rotation is needed',
            bn: 'কোনো রোটেশনের প্রয়োজন নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'The knee shape (Left-Right) must first be straightened into a linear Left-Left chain.',
          bn: 'হাঁটুর মতো বাঁকা অংশকে (লেফট-রাইট) প্রথমে সোজা করে লেফট-লেফট চেইনে রূপান্তর করতে হয়।'
        },
        explanation: {
          en: 'Left-Right imbalance requires a double rotation: first rotateLeft on child to create a straight chain, then rotateRight on parent.',
          bn: 'লেফট-রাইট অসাম্যে ডাবল রোটেশন লাগে: প্রথমে চাইল্ডের ওপর লেফট রোটেশন চালিয়ে সোজা করা হয়, তারপর প্যারেন্টে রাইট রোটেশন দেওয়া হয়।'
        }
      },
      {
        id: 'bt-q2',
        kind: 'mcq',
        topic: 'btree-disk-optimization',
        question: {
          en: 'Why do database storage engines like SQLite and MySQL InnoDB use B+ Trees instead of AVL or Red-Black trees on disk?',
          bn: 'ডিস্ক স্টোরেজের ক্ষেত্রে SQLite এবং MySQL InnoDB কেন এভিএল বা রেড-ব্ল্যাকের বদলে বি+ ট্রি ব্যবহার করে?'
        },
        options: [
          {
            en: 'B+ Trees have massive branching factors (hundreds of keys per node), keeping height shallow (3 to 4) to minimize slow disk page reads',
            bn: 'বি+ ট্রির ব্রাঞ্চিং ফ্যাক্টর অনেক বড় হওয়ায় উচ্চতা অগভীর (৩ থেকে ৪) থাকে, যা ধীরগতির ডিস্ক পড়ার সংখ্যা কমিয়ে দেয়'
          },
          {
            en: 'B+ Trees convert database queries into Python code',
            bn: 'বি+ ট্রি ডেটাবেস কোয়েরিকে পাইথন কোডে রূপান্তর করে'
          },
          {
            en: 'AVL trees do not support alphabetical string keys',
            bn: 'এভিএল ট্রি বর্ণমালার স্ট্রিং কি সমর্থন করে না'
          },
          {
            en: 'B+ Trees do not require disk memory storage',
            bn: 'বি+ ট্রির জন্য ডিস্ক মেমোরি স্টোরেজের প্রয়োজন হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fetching a 4KB block from a disk takes thousands of CPU clock cycles.',
          bn: 'ডিস্ক থেকে একটি ৪কেবি ব্লক পড়তে হাজার হাজার সিপিইউ সাইকেল নষ্ট হয়।'
        },
        explanation: {
          en: 'A binary tree with 1000000 nodes has height ~20, requiring 20 disk fetches. A B+ tree with fanout 100 has height ~3, requiring only 3 fetches.',
          bn: '১০০০০০০ নোডের বাইনারি ট্রিতে ২০টি ডিস্ক ফেচ লাগে। কিন্তু ১০০ ফ্যান-আউটের বি+ ট্রিতে মাত্র ৩টি ফেচেই তথ্য পাওয়া যায়।'
        }
      },
      {
        id: 'bt-q3',
        kind: 'mcq',
        topic: 'avl-tree-maximum-height',
        question: {
          en: 'What is the upper bound on the height of an AVL tree with n elements?',
          bn: 'n উপাদান বিশিষ্ট একটি এভিএল ট্রির সর্বোচ্চ উচ্চতার গাণিতিক ঊর্ধ্বসীমা কত?'
        },
        options: [
          {
            en: 'Approximately 1.44 * log2(n)',
            bn: 'প্রায় ১.৪৪ * log2(n)'
          },
          {
            en: 'Strictly n / 2',
            bn: 'কঠোরভাবে n / ২'
          },
          {
            en: 'Exactly n^2',
            bn: 'ঠিক n^২'
          },
          {
            en: '100 levels always',
            bn: 'সর্বদা ১০০ স্তর'
          }
        ],
        answer: 0,
        hint: {
          en: 'Even in the worst-case Fibonacci tree shape, AVL height is bounded by 1.44 log2 n.',
          bn: 'সবচেয়ে খারাপ ক্ষেত্রেও এভিএলের উচ্চতা ১.৪৪ log2 n দ্বারা সীমাবদ্ধ থাকে।'
        },
        explanation: {
          en: 'Mathematical analysis of minimal AVL trees (Fibonacci trees) proves height h < 1.4404 log2(n + 2) - 0.328, strictly guaranteeing logarithmic performance.',
          bn: 'ন্যূনতম এভিএল ট্রির গাণিতিক বিশ্লেষণে দেখা যায় উচ্চতা h < ১.৪৪ log2(n) এর মধ্যে থাকে, যা নিশ্চিতভাবে লগারিদমিক গতি দেয়।'
        }
      },
      {
        id: 'bt-q4',
        kind: 'mcq',
        topic: 'bst-property-during-rotation',
        question: {
          en: 'What happens to the relative sorted order of keys when a tree rotation is performed?',
          bn: 'একটি ট্রি রোটেশন সম্পন্ন করার সময় উপাদানের পারস্পরিক সাজানো ক্রমের কী ঘটে?'
        },
        options: [
          {
            en: 'The sorted order is strictly preserved; in-order traversal before and after rotation produces the exact same sequence',
            bn: 'সাজানো ক্রম কঠোরভাবে অক্ষুণ্ন থাকে; রোটেশনের আগে এবং পরে ইনঅর্ডার ট্রাভার্সালে হুবহু একই ক্রম পাওয়া যায়'
          },
          {
            en: 'The keys are reversed into descending order',
            bn: 'উপাদানগুলো উল্টো অধঃক্রমে চলে যায়'
          },
          {
            en: 'All odd numbers are deleted',
            bn: 'সমস্ত বিজোড় সংখ্যা মুছে যায়'
          },
          {
            en: 'The tree is converted into a hash table',
            bn: 'ট্রিটি একটি হ্যাশ টেবিলে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does a rotation change the underlying values or only the parent-child pointer links?',
          bn: 'রোটেশন কি ভেতরের মান পরিবর্তন করে নাকি কেবল নোডের মধ্যের পয়েন্টার লিংক বদলায়?'
        },
        explanation: {
          en: 'Rotations are designed specifically to rebalance height without violating the BST invariant (T1 < x < T2 < y < T3). Inorder output is unchanged.',
          bn: 'রোটেশন এমনভাবে নকশা করা যাতে বিএসটি বৈশিষ্ট্য ক্ষুণ্ন না করে ভারসাম্য আনা যায়। ইনঅর্ডার আউটপুট পুরোপুরি অপরিবর্তিত থাকে।'
        }
      }
    ]
  }
};
