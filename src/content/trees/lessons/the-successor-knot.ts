import type { Lesson } from '../../../lib/types';

export const theSuccessorKnotLesson: Lesson = {
  slug: 'the-successor-knot',
  tech: 'trees',
  title: {
    en: 'BST Deletion and Inorder Successors — The Hibbard Deletion Protocol',
    bn: 'বিএসটি উপাদান মোচন এবং ইনঅর্ডার সাকসেসর: হিবার্ড ডিলিশন প্রক্রিয়া'
  },
  summary: {
    en: 'Deleting a node from a Binary Search Tree requires careful restructuring to avoid severing descendant subtrees. While removing a leaf or bypassing a single-child node operates via simple pointer retargeting in O(h) time, deleting a node with two children demands borrowing an in-order successor or predecessor. We analyze the three deletion cases, explain why an in-order successor always has at most one child, and examine Hibbard deletion asymmetry where persistent right-subtree borrowing causes long-term tree height skew.',
    bn: 'একটি বাইনারি সার্চ ট্রি থেকে কোনো নোড মুছে ফেলার সময় তার নিচের সাব-ট্রি যেন বিচ্ছিন্ন না হয় সেজন্য সতর্ক পুনর্বিন্যাসের প্রয়োজন হয়। পাতার নোড মোছা বা একটি সন্তান থাকা নোডকে বাইপাস করা O(h) সময়ে সরাসরি সম্পন্ন হলেও দুটি সন্তান থাকা নোড মুছতে ইনঅর্ডার সাকসেসর বা প্রিডিসেসর ধার করতে হয়। আমরা মোচনের তিনটি ক্ষেত্র বিশ্লেষণ করি, ব্যাখ্যা করি কেন ইনঅর্ডার সাকসেসরের সর্বোচ্চ ১টি সন্তান থাকে এবং হিবার্ড ডিলিশন অসাম্যের প্রভাব পরীক্ষা করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-page-festival',
    tech: 'trees',
    title: {
      en: 'B-Trees and B+ Trees — Multi-Way Disk Paging and Leaf Chains',
      bn: 'বি-ট্রি এবং বি+ ট্রি: মাল্টি-ওয়ে ডিস্ক পেজিং এবং লিফ চেইন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'deletion-trilemma',
      text: {
        en: 'The Three Deletion Cases: Leaves, Single Children, and Two Children',
        bn: 'মোচনের তিনটি ক্ষেত্র: পাতা, একক সন্তান এবং দুটি সন্তান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you manage dynamic database indexes or memory-resident symbol tables, removing keys from a Binary Search Tree (BST) is significantly more intricate than inserting them. New items always attach at empty leaf positions, but deletion must restructure internal links so that descendant subtrees remain connected without violating the BST search invariant.',
        bn: 'যখন আপনি ডাইনামিক ডেটাবেস ইনডেক্স বা মেমোরি টেবিল পরিচালনা করেন, তখন একটি বাইনারি সার্চ ট্রি (BST) থেকে উপাদান মুছে ফেলা সন্নিবেশের চেয়ে অনেক বেশি জটিল হয়। নতুন নোডগুলো সহজেই ফাঁকা পাতার স্থানে বসে যায়, কিন্তু মোচনের সময় নিচের সাব-ট্রিগুলো যাতে বিচ্ছিন্ন না হয় এবং বিএসটি অনুসন্ধানের নিয়ম যেন অক্ষুণ্ন থাকে তা সতর্কতার সাথে নিশ্চিত করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The algorithm resolves deletions by categorizing the target node into three mutually exclusive structural scenarios: a leaf node with 0 children, an internal node with 1 child, or a node with 2 children. The two-child case requires identifying the in-order successor to fill the vacancy without invalidating sibling boundaries.',
        bn: 'অ্যালগরিদমটি মোচনের কাজটিকে তিনটি আলাদা কাঠামোগত ক্ষেত্রে বিভক্ত করে: ০ সন্তান বিশিষ্ট পাতার নোড, ১ সন্তান বিশিষ্ট নোড, অথবা ২ সন্তান বিশিষ্ট নোড। দুটি সন্তান থাকা অবস্থায় শূন্যস্থান পূরণ করতে ইনঅর্ডার সাকসেসর খুঁজে বের করতে হয় যাতে অন্যান্য শাখার সীমা বিঘ্নিত না হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'inorder-successor',
          def: {
            en: "The smallest node in a target's right subtree, representing the immediate next value in ascending sorted order.",
            bn: 'কোনো নোডের ডান সাব-ট্রির সর্বনিম্ন মান যা সাজানো ক্রমে তার ঠিক পরবর্তী উপাদানকে নির্দেশ করে।'
          }
        },
        {
          term: 'hibbard-asymmetry',
          def: {
            en: 'The statistical phenomenon where repeatedly deleting nodes using only inorder successors causes the tree to tilt toward O(sqrt(n)) height.',
            bn: 'বারবার কেবল ইনঅর্ডার সাকসেসর দিয়ে মোছার ফলে সময়ের সাথে সাথে ট্রির উচ্চতা O(sqrt(n)) এ হেলে পড়ার ঘটনা।'
          }
        },
        {
          term: 'single-child-bypass',
          def: {
            en: 'Deleting a node with one child by linking the parent directly to the grandchild, operating in O(1) pointer updates.',
            bn: 'একটি সন্তান থাকা নোডকে তার প্যারেন্টের সাথে নাতিকে সরাসরি যুক্ত করে O(1) সময়ে বাইপাস করা।'
          }
        },
        {
          term: 'tombstone-deletion',
          def: {
            en: 'A lazy alternative that marks deleted nodes with a flag rather than physically unlinking them from memory.',
            bn: 'মেমোরি থেকে তাৎক্ষণিক মুছে ফেলার বদলে নোডকে মৃত হিসেবে চিহ্নিত করার অলস পদ্ধতি।'
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
      id: 'deletion-cases-table',
      text: {
        en: 'Detailed Comparison: The Three Deletion Protocols',
        bn: 'বিস্তারিত তুলনা: তিনটি ডিলিশন প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The operational mechanics differ depending on the number of children. Leaves are unlinked directly by setting the parent pointer to null. Nodes with one child are bypassed by promoting that child. Nodes with two children swap their value with the in-order successor before deleting the successor from the right branch.',
        bn: 'সন্তানের সংখ্যার ওপর ভিত্তি করে কাজের পদ্ধতি আলাদা হয়। পাতার ক্ষেত্রে প্যারেন্ট পয়েন্টার নাল করে দিলেই কাজ শেষ হয়। একটি সন্তান থাকলে সন্তানটিকে সরাসরি ওপরে তুলে নোডটিকে বাইপাস করা হয়। দুটি সন্তান থাকলে ডান সাব-ট্রি থেকে ইনঅর্ডার সাকসেসরের মান কপি করে এনে সাকসেসরটিকে ডান শাখা থেকে মুছে ফেলা হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Deletion Scenario', bn: 'মোচনের ধরন' },
        { en: 'Child Count', bn: 'সন্তানের সংখ্যা' },
        { en: 'Pointer Rewiring Logic', bn: 'পয়েন্টার পরিবর্তনের নিয়ম' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' }
      ],
      rows: [
        [
          { en: 'Case 1: Leaf Node', bn: 'ক্ষেত্র ১: পাতার নোড' },
          { en: '0 children (left & right null)', bn: '০ সন্তান (উভয় পয়েন্টার নাল)' },
          { en: 'Set parent pointer to null', bn: 'প্যারেন্ট পয়েন্টার নাল করে দেওয়া' },
          { en: 'O(h) search, O(1) unlink', bn: 'O(h) খোঁজা, O(1) মোছা' }
        ],
        [
          { en: 'Case 2: Single Child', bn: 'ক্ষেত্র ২: একক সন্তান' },
          { en: '1 child (left XOR right)', bn: '১ সন্তান (বাম অথবা ডান)' },
          { en: 'Link parent directly to the single child', bn: 'প্যারেন্টকে সরাসরি নাতির সাথে যুক্ত করা' },
          { en: 'O(h) search, O(1) bypass', bn: 'O(h) খোঁজা, O(1) বাইপাস' }
        ],
        [
          { en: 'Case 3: Two Children', bn: 'ক্ষেত্র ৩: দুটি সন্তান' },
          { en: '2 children (both non-null)', bn: '২ সন্তান (উভয় চাইল্ড বিদ্যমান)' },
          { en: 'Copy successor value, delete successor in right subtree', bn: 'সাকসেসরের মান কপি করে ডান থেকে সাকসেসর মোছা' },
          { en: 'O(h) search and splice', bn: 'O(h) খোঁজা ও সমন্বয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-delete-code',
      text: {
        en: 'Executable BST Deletion Implementation',
        bn: 'বিএসটি ডিলিশন অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs a BST containing 7 nodes and executes all three deletion cases sequentially. Notice how deleting leaf 20 uses Case 1, deleting 30 uses Case 2, and deleting root 50 uses Case 3 by promoting successor 60 to the root.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৭টি নোড বিশিষ্ট একটি বিএসটি তৈরি করে ক্রমান্বয়ে তিনটি ক্ষেত্রই বাস্তবায়ন করে। লক্ষ্য করুন কীভাবে পাতা ২০ মোছায় ক্ষেত্র ১, ৩০ মোছায় ক্ষেত্র ২ এবং রুট ৫০ মোছায় ক্ষেত্র ৩ এর মাধ্যমে সাকসেসর ৬০ নতুন রুট হিসেবে প্রতিষ্ঠিত হয়।'
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

class BSTWithDelete {
  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this._insert(this.root, val);
  }

  _insert(n, val) {
    if (!n) return new Node(val);
    if (val < n.val) n.left = this._insert(n.left, val);
    else if (val > n.val) n.right = this._insert(n.right, val);
    return n;
  }

  findMin(n) {
    while (n.left) n = n.left;
    return n;
  }

  delete(val) {
    this.root = this._delete(this.root, val);
  }

  _delete(n, val) {
    if (!n) return null;

    if (val < n.val) {
      n.left = this._delete(n.left, val);
    } else if (val > n.val) {
      n.right = this._delete(n.right, val);
    } else {
      // Case 1: Leaf node (0 children)
      if (!n.left && !n.right) return null;

      // Case 2: 1 child
      if (!n.left) return n.right;
      if (!n.right) return n.left;

      // Case 3: 2 children -> replace with inorder successor
      const successor = this.findMin(n.right);
      n.val = successor.val;
      n.right = this._delete(n.right, successor.val);
    }
    return n;
  }

  inorder(n = this.root, out = []) {
    if (!n) return out;
    this.inorder(n.left, out);
    out.push(n.val);
    this.inorder(n.right, out);
    return out;
  }
}

const tree = new BSTWithDelete();
const initialKeys = [50, 30, 70, 20, 40, 60, 80];
initialKeys.forEach(v => tree.insert(v));

console.log('Initial tree (inorder):', tree.inorder().join(', '));
// Output: Initial tree (inorder): 20, 30, 40, 50, 60, 70, 80

tree.delete(20);
console.log('After deleting leaf 20:', tree.inorder().join(', '));
// Output: After deleting leaf 20: 30, 40, 50, 60, 70, 80

tree.delete(30);
console.log('After deleting node 30 (1 child):', tree.inorder().join(', '));
// Output: After deleting node 30 (1 child): 40, 50, 60, 70, 80

tree.delete(50);
console.log('After deleting root 50 (2 children, successor 60):', tree.inorder().join(', '));
// Output: After deleting root 50 (2 children, successor 60): 40, 60, 70, 80
console.log('New root:', tree.root.val);
// Output: New root: 60`
    },
    {
      type: 'heading',
      id: 'hibbard-asymmetry-impact',
      text: {
        en: "Hibbard's 1962 Discovery: Long-Term Skew and Cures",
        bn: '১৯৬২ সালে হিবার্ডের আবিষ্কার: দীর্ঘমেয়াদী হেলে পড়া এবং সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1962, Thomas N. Hibbard published the standard two-child deletion algorithm. Later empirical analysis revealed that in servers processing millions of random insert and delete cycles, always deleting through the in-order successor introduces an asymmetric tilt. The left subtrees accumulate more nodes, causing average tree height to degrade toward O(sqrt(n)). Production systems solve this by alternating between successor and predecessor, or by using AVL and Red-Black trees.',
        bn: '১৯৬২ সালে টমাস এন হিবার্ড দুই-সন্তান বিশিষ্ট নোড মোচনের এই অ্যালগরিদম প্রকাশ করেন। পরবর্তীকালে বিশ্লেষণে দেখা যায় যে লক্ষ লক্ষ সন্নিবেশ ও মোচনের পর সবসময় ডান সাব-ট্রি থেকে সাকসেসর ধার করার ফলে ট্রিটি একদিকে হেলে পড়ে। বাম সাব-ট্রিতে বেশি নোড জমা হয়ে গড় উচ্চতা O(sqrt(n)) এর দিকে চলে যায়। আধুনিক উৎপাদনমুখী ব্যবস্থাগুলো সাকসেসর ও প্রিডিসেসরের মধ্যে পর্যায়ক্রমিক পরিবর্তন এনে অথবা এভিএল ও রেড-ব্ল্যাক ট্রি ব্যবহার করে এই অসাম্য পুরোপুরি দূর করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Three clean cases: Deletion handles leaves directly, single-child nodes via bypass, and two-child nodes via in-order replacement.',
          bn: 'তিনটি পরিষ্কার ক্ষেত্র: পাতা সরাসরি মোছা হয়, একটি সন্তান থাকলে বাইপাস করা হয় এবং দুটি সন্তান থাকলে সাকসেসরে প্রতিস্থাপন হয়।'
        },
        {
          en: 'Successor guarantees single child: The minimum node of the right subtree has null left child by definition, making its deletion trivial.',
          bn: 'সাকসেসরের ১টি সন্তানের নিশ্চয়তা: ডান সাব-ট্রির সর্বনিম্ন নোডের বাম সন্তান নাল থাকে, ফলে একে সহজেই সরিয়ে নেওয়া যায়।'
        },
        {
          en: 'Hibbard asymmetry awareness: Consistently choosing the right-side successor over millions of operations degrades tree balance.',
          bn: 'হিবার্ড অসাম্য সম্পর্কে সচেতনতা: লক্ষ লক্ষ অপারেশনে সর্বদা ডান দিক থেকে সাকসেসর নিলে ট্রি অসমভাবে হেলে পড়ে।'
        },
        {
          en: 'Balanced trees neutralize tilt: Self-balancing AVL and Red-Black trees run rotation checks after deletion, guaranteeing O(log n) height.',
          bn: 'ব্যালান্সড ট্রি ভারসাম্যহীনতা দূর করে: এভিএল এবং রেড-ব্ল্যাক ট্রি মোচনের পর রোটেশন চালিয়ে সর্বদা O(log n) উচ্চতা নিশ্চিত করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sk-ex1',
      kind: 'mcq',
      topic: 'why-successor-has-at-most-one-child',
      question: {
        en: 'Why is the in-order successor of a node guaranteed to have at most one child?',
        bn: 'কেন কোনো নোডের ইনঅর্ডার সাকসেসরের সর্বোচ্চ একটিমাত্র সন্তান থাকার নিশ্চয়তা থাকে?'
      },
      options: [
        {
          en: 'Because the in-order successor is the minimum node in the right subtree, its left child pointer must be null',
          bn: 'কারণ ইনঅর্ডার সাকসেসর হলো ডান সাব-ট্রির সর্বনিম্ন নোড, তাই তার নিজস্ব বাম চাইল্ড পয়েন্টার অবশ্যই নাল থাকে'
        },
        {
          en: 'Because binary trees forbid right children on leaf nodes',
          bn: 'কারণ বাইনারি ট্রি পাতার নোডে ডান সন্তান থাকা নিষিদ্ধ করে'
        },
        {
          en: 'Because JavaScript arrays truncate right pointers automatically',
          bn: 'কারণ জাভাস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে ডান পয়েন্টার মুছে ফেলে'
        },
        {
          en: 'Because successor nodes operate with 0 memory pointers',
          bn: 'কারণ সাকসেসর নোড ০ মেমোরি পয়েন্টারে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the successor had a left child, could it still be the minimum node in that subtree?',
        bn: 'সাকসেসরের যদি একটি বাম সন্তান থাকত, তবে সে কি সেই সাব-ট্রির সর্বনিম্ন নোড হতে পারত?'
      },
      explanation: {
        en: 'If the successor had a left child, that left child would be strictly smaller, contradicting the fact that the successor is the minimum in the right subtree.',
        bn: 'বাম সন্তান থাকলে সেই সন্তানটি আরো ছোট হতো, যা সাকসেসরকে সর্বনিম্ন মান হওয়ার শর্তের সাথে বিরোধিতা করে।'
      }
    },
    {
      id: 'sk-ex2',
      kind: 'mcq',
      topic: 'two-child-deletion-substitute',
      question: {
        en: 'When deleting a node with 2 children, which other node besides the in-order successor could legally take its place?',
        bn: '২টি সন্তান থাকা নোড মোছার সময় ইনঅর্ডার সাকসেসর ছাড়া আর কোন নোডটি তার স্থান পূরণ করতে পারে?'
      },
      options: [
        {
          en: 'The in-order predecessor (the maximum node in the left subtree)',
          bn: 'ইনঅর্ডার প্রিডিসেসর (বাম সাব-ট্রির সর্বোচ্চ নোড)'
        },
        {
          en: 'Any random leaf node from the tree',
          bn: 'ট্রির যেকোনো একটি এলোমেলো পাতার নোড'
        },
        {
          en: 'The root node of the entire tree',
          bn: 'সম্পূর্ণ ট্রির রুট নোড'
        },
        {
          en: 'A newly allocated empty node with value 0',
          bn: '০ মান বিশিষ্ট একটি নতুন ফাঁকা নোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'We need a value that is larger than all elements in the left subtree and smaller than all elements in the right subtree.',
        bn: 'আমাদের এমন একটি মান দরকার যা বামের সমস্ত মানের চেয়ে বড় এবং ডানের সমস্ত মানের চেয়ে ছোট।'
      },
      explanation: {
        en: 'Both the in-order successor (min of right) and in-order predecessor (max of left) legally satisfy the BST invariant when promoted.',
        bn: 'ইনঅর্ডার সাকসেসর (ডানের সর্বনিম্ন) এবং ইনঅর্ডার প্রিডিসেসর (বামের সর্বোচ্চ) উভয়ই উন্নীত হলে বিএসটি নিয়ম বজায় থাকে।'
      }
    },
    {
      id: 'sk-ex3',
      kind: 'mcq',
      topic: 'hibbard-asymmetry-tilt',
      question: {
        en: 'What mathematical height degradation occurs in an unmanaged BST subjected to millions of random insertions and successor-only Hibbard deletions?',
        bn: 'লক্ষ লক্ষ এলোমেলো সন্নিবেশ এবং কেবল সাকসেসর দিয়ে হিবার্ড মোচনের পর একটি সাধারণ বিএসটির উচ্চতায় কী গাণিতিক পতন ঘটে?'
      },
      options: [
        {
          en: 'The tree tilts asymmetrically, causing average height to degrade from O(log n) toward O(sqrt(n))',
          bn: 'ট্রিটি একপাশে হেলে পড়ে যার ফলে গড় উচ্চতা O(log n) থেকে খারাপ হয়ে O(sqrt(n)) এর দিকে চলে যায়'
        },
        {
          en: 'The tree height improves to O(1) constant time',
          bn: 'ট্রির উচ্চতা উন্নত হয়ে O(1) ধ্রুবক সময়ে আসে'
        },
        {
          en: 'The tree inverts into a Max-Heap',
          bn: 'ট্রিটি একটি ম্যাক্স-হিপে রূপান্তরিত হয়'
        },
        {
          en: 'All leaf nodes are deleted',
          bn: 'সমস্ত পাতার নোড মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Repeatedly depleting the right subtrees while preserving the left creates an imbalance proportional to the square root of n.',
        bn: 'ডান সাব-ট্রি থেকে বারবার উপাদান ধার করায় বাম দিকের সাথে একটি ভারসাম্যহীনতা তৈরি হয় যা n এর বর্গমূলের সমানুপাতিক।'
      },
      explanation: {
        en: 'Successor-only deletion systematically shrinks right subtrees, causing the tree to drift from logarithmic O(log n) to square-root O(sqrt(n)) height.',
        bn: 'শুধুমাত্র সাকসেসর দিয়ে মোছার ফলে ডান শাখাগুলো ক্রমাগত সংকুচিত হয় এবং ট্রির উচ্চতা লগারিদমিক O(log n) থেকে বর্গমূল O(sqrt(n)) এ নেমে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-successor-knot-quiz',
    title: {
      en: 'BST Deletion and Node Succession Quiz',
      bn: 'বিএসটি মোচন এবং নোড উত্তরাধিকার কুইজ'
    },
    questions: [
      {
        id: 'sk-q1',
        kind: 'mcq',
        topic: 'deleting-node-with-one-child',
        question: {
          en: 'When deleting node 30 which has null left child and right child 40, what pointer update occurs?',
          bn: 'নোড ৩০ যার বাম সন্তান নাল এবং ডান সন্তান ৪০, তাকে মোছার সময় কোন পয়েন্টারটি পরিবর্তিত হয়?'
        },
        options: [
          {
            en: 'The parent of 30 updates its child pointer to point directly to 40, bypassing 30 in O(1) time',
            bn: '৩০ এর প্যারেন্ট তার চাইল্ড পয়েন্টারকে সরাসরি ৪০ এর সাথে যুক্ত করে, যা O(1) সময়ে ৩০ কে বাইপাস করে'
          },
          {
            en: 'Node 40 is deleted along with node 30',
            bn: '৩০ এর সাথে নোড ৪০ ও মুছে যায়'
          },
          {
            en: 'The entire tree is re-initialized',
            bn: 'পুরো ট্রি নতুন করে শুরু হয়'
          },
          {
            en: 'Node 30 value becomes 0',
            bn: 'নোড ৩০ এর মান ০ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In Case 2 (single child), the parent inherits the grandchild directly.',
          bn: 'ক্ষেত্র ২ এ (একক সন্তান) প্যারেন্ট সরাসরি নাতিকে নিজের সন্তান হিসেবে গ্রহণ করে।'
        },
        explanation: {
          en: 'Bypassing node 30 splices right child 40 directly into the parent pointer slot, preserving BST order in constant time.',
          bn: 'নোড ৩০ কে বাইপাস করে ডান সন্তান ৪০ কে প্যারেন্টের সাথে যুক্ত করলে ধ্রুবক সময়ে বিএসটি বৈশিষ্ট্য অটুট থাকে।'
        }
      },
      {
        id: 'sk-q2',
        kind: 'mcq',
        topic: 'bst-deletion-time-complexity',
        question: {
          en: 'What is the overall time complexity of deleting a node from a balanced Binary Search Tree containing n elements?',
          bn: 'n উপাদান বিশিষ্ট একটি ব্যালান্সড বাইনারি সার্চ ট্রি থেকে একটি নোড মোছার সামগ্রিক সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(log n) time, proportional to the tree height',
            bn: 'O(log n) সময়, যা ট্রির উচ্চতার সমানুপাতিক'
          },
          {
            en: 'O(n^2) quadratic time',
            bn: 'O(n^2) চতুর্ঘাতী সময়'
          },
          {
            en: 'O(1) constant time without searching',
            bn: 'অনুসন্ধান ছাড়া O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(n log n) sorting time',
            bn: 'O(n log n) সাজানোর সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Finding the node and finding its successor both descend single paths bounded by tree height.',
          bn: 'নোডটি খুঁজে পাওয়া এবং তার সাকসেসর বের করা উভয়ই ট্রির উচ্চতার সমান একক পথ ধরে নামে।'
        },
        explanation: {
          en: 'Both searching for the key and finding the in-order successor take at most O(h) operations. In a balanced tree, h = O(log n).',
          bn: 'উপাদান খোঁজা এবং ইনঅর্ডার সাকসেসর বের করা উভয় ক্ষেত্রেই সর্বোচ্চ O(h) কাজ হয়, যা ব্যালান্সড ট্রিতে O(log n)।'
        }
      },
      {
        id: 'sk-q3',
        kind: 'mcq',
        topic: 'lazy-tombstone-tradeoff',
        question: {
          en: 'What is the primary trade-off of using lazy tombstone deletion in a binary tree instead of eager node unlinking?',
          bn: 'তাৎক্ষণিক মোছার বদলে একটি বাইনারি ট্রিতে অলস টম্বস্টোন বা ফ্ল্যাগ ব্যবহারের প্রধান সুবিধা ও অসুবিধা কী?'
        },
        options: [
          {
            en: 'Deletions are fast O(1) writes, but read searches pay extra latency scanning past tombstoned dead nodes until a sweep occurs',
            bn: 'মোছার কাজ দ্রুত O(1) সময়ে হয়, কিন্তু পরিষ্কার করার আগ পর্যন্ত পাঠ অনুসন্ধানে মৃত নোড অতিক্রম করতে অতিরিক্ত বিলম্ব ঘটে'
          },
          {
            en: 'Tombstones permanently corrupt the BST invariant',
            bn: 'টম্বস্টোন বিএসটি বৈশিষ্ট্যকে স্থায়ীভাবে নষ্ট করে ফেলে'
          },
          {
            en: 'Tombstones require 64 gigabytes of RAM cache',
            bn: 'টম্বস্টোনের জন্য ৬৪ গিগাবাইট র্যাম ক্যাশ লাগে'
          },
          {
            en: 'Tombstones convert binary trees into hash maps',
            bn: 'টম্বস্টোন বাইনারি ট্রিকে হ্যাশ ম্যাপে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Marking a node dead avoids restructuring now, but leaves garbage for later searches.',
          bn: 'নোডকে মৃত চিহ্নিত করলে এখন পুনর্বিন্যাস এড়ানো যায়, কিন্তু পরবর্তী অনুসন্ধানে আবর্জনা জমে থাকে।'
        },
        explanation: {
          en: 'Lazy deletion turns removals into instant flag updates, but subsequent lookups must traverse through inactive nodes, increasing read amplification.',
          bn: 'অলস মোচনে তাৎক্ষণিক ফ্ল্যাগ বদলানো যায়, কিন্তু পরবর্তী অনুসন্ধানে নিষ্ক্রিয় নোডের মধ্য দিয়ে যেতে হওয়ায় পড়ার বিলম্ব বাড়ে।'
        }
      },
      {
        id: 'sk-q4',
        kind: 'mcq',
        topic: 'inorder-successor-location',
        question: {
          en: 'Where is the in-order successor of a node always located in a Binary Search Tree?',
          bn: 'একটি বাইনারি সার্চ ট্রিতে কোনো নোডের ইনঅর্ডার সাকসেসর সর্বদা কোথায় অবস্থান করে?'
        },
        options: [
          {
            en: 'The leftmost node in the target node’s right subtree',
            bn: 'লক্ষ্য নোডের ডান সাব-ট্রির সবচেয়ে বামে থাকা নোডটি'
          },
          {
            en: 'The rightmost node in the target node’s left subtree',
            bn: 'লক্ষ্য নোডের বাম সাব-ট্রির সবচেয়ে ডানে থাকা নোডটি'
          },
          {
            en: 'The root of the entire tree',
            bn: 'সম্পূর্ণ ট্রির রুট নোডটি'
          },
          {
            en: 'The parent of the target node',
            bn: 'লক্ষ্য নোডের প্যারেন্ট নোডটি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Step once to the right, then follow left child links as far down as possible.',
          bn: 'একবার ডানে যান, তারপর যতদূর সম্ভব বাম চাইল্ড ধরে নিচে নামুন।'
        },
        explanation: {
          en: 'The in-order successor is the smallest value that is greater than the node, found by moving to node.right and descending left to the end.',
          bn: 'ইনঅর্ডার সাকসেসর হলো নোডের চেয়ে বড় সমস্ত মানের মধ্যে সবচেয়ে ছোটটি, যা node.right এ গিয়ে বামে শেষ পর্যন্ত নামলে পাওয়া যায়।'
        }
      }
    ]
  }
};
