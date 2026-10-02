import type { Lesson } from '../../../lib/types';

export const heapThinkingLesson: Lesson = {
  slug: 'heap-thinking',
  tech: 'heaps',
  title: {
    en: 'Heap Thinking — Complete Binary Trees and Array Index Arithmetic',
    bn: 'হিপ চিন্তন: সম্পূর্ণ বাইনারি ট্রি এবং অ্যারে ইনডেক্স পাটিগণিত'
  },
  summary: {
    en: 'While binary search trees enforce a strict total order across left and right subtrees, heaps maintain a relaxed partial order called the heap property. In a Max-Heap, every parent node is greater than or equal to its children; in a Min-Heap, every parent is smaller or equal. Because heaps maintain a complete binary tree structure without missing gaps, they map directly into contiguous array indices without node pointers. We formalize parent-child index arithmetic and prove why root inspection operates in deterministic O(1) time.',
    bn: 'বাইনারি সার্চ ট্রি যেখানে বাঁ ও ডান সাব-ট্রিতে কঠোর পূর্ণ ক্রম বজায় রাখে, হিপ সেখানে আংশিক ক্রম বা হিপ প্রোপার্টি বজায় রাখে। ম্যাক্স-হিপে প্রতিটি প্যারেন্ট নোড তার চাইল্ড নোডের চেয়ে বড় বা সমান হয়; মিন-হিপে প্রতিটি প্যারেন্ট তার চাইল্ড নোডের চেয়ে ছোট বা সমান হয়। যেহেতু হিপ কোনো ফাঁক ছাড়াই সম্পূর্ণ বাইনারি ট্রি কাঠামো বজায় রাখে, তাই এটি কোনো নোড পয়েন্টার ছাড়াই সরাসরি অবিচ্ছিন্ন অ্যারে ইনডেক্সে ম্যাপ করা যায়। আমরা প্যারেন্ট-চাইল্ড ইনডেক্স পাটিগণিত সংজ্ঞায়িত করি এবং প্রমাণ করি কেন রুট নোড পরিদর্শন সুনির্দিষ্ট ধ্রুবক O(1) সময়ে কাজ করে।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'priority-machines',
    tech: 'heaps',
    title: {
      en: 'Priority Machines — Sift-Up, Sift-Down, and Priority Queues',
      bn: 'প্রায়োরিটি মেশিন: শিফট-আপ, শিফট-ডাউন এবং প্রায়োরিটি কিউ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'heap-property-paradigm',
      text: {
        en: 'The Partial Order Advantage: Why Heaps Beat BSTs for Priority',
        bn: 'আংশিক ক্রমের সুবিধা: কেন প্রায়োরিটিতে হিপ বিএসটিকে ছাড়িয়ে যায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When developers need to repeatedly retrieve the highest or lowest priority item in an application, using a Binary Search Tree (BST) is excessive. A BST maintains a strict total order: all left descendants must be smaller than the root, and all right descendants must be larger. Maintaining this total order requires complex rebalancing rotations (such as in self-balancing Red-Black trees) when elements are added.',
        bn: 'যখন কোনো অ্যাপ্লিকেশনে বারবার সর্বোচ্চ বা সর্বনিম্ন অগ্রাধিকারের উপাদানটি পেতে হয়, তখন একটি বাইনারি সার্চ ট্রি (BST) ব্যবহার করা অপ্রয়োজনীয় জটিলতা তৈরি করে। একটি বিএসটি কঠোর পূর্ণ ক্রম মেনে চলে: বাম পাশের সমস্ত নোড রুটের চেয়ে ছোট হতে হয় এবং ডান পাশের সমস্ত নোড বড় হতে হয়। উপাদান যোগ করার সময় এই কঠোর ভারসাম্য বজায় রাখতে জটিল রোটেশন করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Binary Heap relaxes this requirement by enforcing only a partial order known as the Heap Property. In a Max-Heap, every parent node is greater than or equal to its children; sibling nodes have no required ordering relative to each other. This minimal invariant guarantees that the global maximum element always resides at the root in O(1) time while eliminating tree rotation overhead.',
        bn: 'বাইনারি হিপ এই বাধ্যবাধকতা শিথিল করে কেবল আংশিক ক্রম বা হিপ প্রোপার্টি প্রয়োগ করে। ম্যাক্স-হিপে প্রতিটি প্যারেন্ট নোড তার চাইল্ড নোডগুলোর চেয়ে বড় বা সমান থাকে; কিন্তু সহোদর চাইল্ড নোডগুলোর পরস্পরের মাঝে কোনো নির্দিষ্ট ক্রমের বাধ্যবাধকতা থাকে না। এই ন্যূনতম নিয়মটি নিশ্চিত করে যে সর্বোচ্চ উপাদানটি সর্বদা ০ নম্বর রুটে O(1) সময়ে পাওয়া যায় এবং কোনো ট্রি রোটেশনের ঝামেলা থাকে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'heap-property',
          def: {
            en: 'The invariant that every parent node satisfies an ordering relation (>= in Max-Heap, <= in Min-Heap) relative to all of its children.',
            bn: 'এমন একটি নিয়ম যেখানে প্রতিটি প্যারেন্ট নোড তার সমস্ত চাইল্ড নোডের সাপেক্ষে একটি নির্দিষ্ট ক্রম (ম্যাক্স-হিপে >=, মিন-হিপে <=) মেনে চলে।'
          }
        },
        {
          term: 'complete-binary-tree',
          def: {
            en: 'A binary tree where every level is completely filled except possibly the last level, which is filled from left to right.',
            bn: 'এমন একটি বাইনারি ট্রি যার প্রতিটি স্তর সম্পূর্ণ পূর্ণ থাকে, কেবল শেষ স্তরটি বাম থেকে ডানে ক্রমানুসারে পূর্ণ হয়।'
          }
        },
        {
          term: 'zero-pointer-array-mapping',
          def: {
            en: 'Representing tree relationships strictly via array arithmetic, eliminating 16-24 bytes of pointer overhead per node.',
            bn: 'নোড পয়েন্টার ছাড়া কেবল গাণিতিক সূত্রের মাধ্যমে ট্রির সম্পর্ক তৈরি করা, যা প্রতি নোডে ১৬-২৪ বাইট মেমোরি বাঁচায়।'
          }
        },
        {
          term: 'root-peek',
          def: {
            en: 'Inspecting the global maximum or minimum stored at array index 0 in deterministic O(1) time.',
            bn: 'অ্যারের ০ নম্বর ইনডেক্সে সংরক্ষিত বৈশ্বিক সর্বোচ্চ বা সর্বনিম্ন মানটি নিশ্চিতভাবে O(1) সময়ে সরাসরি দেখা।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'heap'
    },
    {
      type: 'heading',
      id: 'array-index-arithmetic',
      text: {
        en: 'Array Index Arithmetic: Navigating Trees via Math',
        bn: 'অ্যারে ইনডেক্স পাটিগণিত: গণিতের সাহায্যে ট্রিতে চলাচল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional tree implementations link nodes using explicit left and right child heap pointers. Because heaps enforce the Complete Binary Tree shape (no empty holes), they can be packed into a flat contiguous array. For any node at index i, its parent and children are computed using pure mathematical formulas in single-cycle CPU operations.',
        bn: 'প্রথাগত ট্রিতে নোডগুলোকে বাঁ ও ডান চাইল্ড পয়েন্টার দিয়ে যুক্ত করা হয়। যেহেতু হিপ সর্বদা সম্পূর্ণ বাইনারি ট্রি (মাঝখানে কোনো ফাঁকা স্থান নেই) রূপ বজায় রাখে, তাই একে সরাসরি একটি অবিচ্ছিন্ন ফ্ল্যাট অ্যারেতে সংরক্ষণ করা যায়। যেকোনো ইনডেক্স i এর জন্য তার প্যারেন্ট ও চাইল্ড নোডগুলো সাধারণ গাণিতিক সূত্রের মাধ্যমে একক সিপিইউ সাইকেলে হিসাব করা যায়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Node Index i', bn: 'নোড ইনডেক্স i' },
        { en: 'Stored Value', bn: 'সংরক্ষিত মান' },
        { en: 'Parent Formula Math.floor((i-1)/2)', bn: 'প্যারেন্ট সূত্র Math.floor((i-১)/২)' },
        { en: 'Left Child Formula (2*i + 1)', bn: 'বাম চাইল্ড সূত্র (২*i + ১)' }
      ],
      rows: [
        [
          { en: '0', bn: '০' },
          { en: '90', bn: '৯০' },
          { en: 'None (Root Node)', bn: 'নেই (রুট নোড)' },
          { en: 'Index 1 (Value 80)', bn: 'ইনডেক্স ১ (মান ৮০)' }
        ],
        [
          { en: '1', bn: '১' },
          { en: '80', bn: '৮০' },
          { en: 'Index 0 (Value 90)', bn: 'ইনডেক্স ০ (মান ৯০)' },
          { en: 'Index 3 (Value 50)', bn: 'ইনডেক্স ৩ (মান ৫০)' }
        ],
        [
          { en: '2', bn: '২' },
          { en: '70', bn: '৭০' },
          { en: 'Index 0 (Value 90)', bn: 'ইনডেক্স ০ (মান ৯০)' },
          { en: 'Index 5 (Value 30)', bn: 'ইনডেক্স ৫ (মান ৩০)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'heap-traversal-impl',
      text: {
        en: 'Executable Heap Navigator Implementation',
        bn: 'হিপ ন্যাভিগেটরের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models tree navigation over a flat array. It calculates parent, left child, and right child positions and verifies that the complete array satisfies the Max-Heap property.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি ফ্ল্যাট অ্যারের ওপর ট্রি ন্যাভিগেশন মডেল করে। এটি প্যারেন্ট, বাম সন্তান এবং ডান সন্তানের অবস্থান হিসাব করে এবং যাচাই করে যে সম্পূর্ণ অ্যারেটি ম্যাক্স-হিপের বৈশিষ্ট্য পূরণ করে কি না।'
      }
    },
    {
      type: 'code',
      code: `class HeapNavigator {
  constructor(array) {
    this.tree = array;
  }

  parent(i) {
    if (i === 0) return null;
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    const idx = 2 * i + 1;
    return idx < this.tree.length ? idx : null;
  }

  rightChild(i) {
    const idx = 2 * i + 2;
    return idx < this.tree.length ? idx : null;
  }

  isMaxHeap() {
    for (let i = 0; i < Math.floor(this.tree.length / 2); i++) {
      const left = this.leftChild(i);
      const right = this.rightChild(i);
      if (left !== null && this.tree[i] < this.tree[left]) return false;
      if (right !== null && this.tree[i] < this.tree[right]) return false;
    }
    return true;
  }
}

const arr = [90, 80, 70, 50, 60, 30, 40];
const nav = new HeapNavigator(arr);

console.log('Heap Array:', arr.join(', '));
// Output: Heap Array: 90, 80, 70, 50, 60, 30, 40
console.log('Root element:', arr[0]);
// Output: Root element: 90
console.log('Is valid Max-Heap?:', nav.isMaxHeap());
// Output: Is valid Max-Heap?: true

const nodeIdx = 1;
const pIdx = nav.parent(nodeIdx);
const lIdx = nav.leftChild(nodeIdx);
const rIdx = nav.rightChild(nodeIdx);

console.log(\`Node at index \${nodeIdx} (val \${arr[nodeIdx]}):\`);
// Output: Node at index 1 (val 80):
console.log(\`- Parent index: \${pIdx} (val \${arr[pIdx]})\`);
// Output: - Parent index: 0 (val 90)
console.log(\`- Left child index: \${lIdx} (val \${arr[lIdx]})\`);
// Output: - Left child index: 3 (val 50)
console.log(\`- Right child index: \${rIdx} (val \${arr[rIdx]})\`);
// Output: - Right child index: 4 (val 60)`
    },
    {
      type: 'heading',
      id: 'cache-locality-benefits',
      text: {
        en: 'Hardware Advantage: Cache Line Locality and Density',
        bn: 'হার্ডওয়্যার সুবিধা: ক্যাশ লাইন লোকালিটি এবং ঘনত্ব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'By packing a tree into a contiguous array, heaps maximize modern CPU L1 and L2 cache performance. When a node is read from RAM, the CPU automatically loads the surrounding 64-byte cache line into memory. Because adjacent array cells contain immediate siblings and descendants, subsequent tree traversals hit fast cache memory instead of stalling on pointer dereferences.',
        bn: 'একটি অবিচ্ছিন্ন অ্যারেতে ট্রি সংরক্ষণ করার মাধ্যমে হিপ আধুনিক সিপিইউ এল১ ও এল২ ক্যাশ মেমোরির কার্যকারিতা বহু গুণ বাড়িয়ে দেয়। র্যাম থেকে যখন একটি নোড পড়া হয়, তখন সিপিইউ স্বয়ংক্রিয়ভাবে তার চারপাশের ৬৪-বাইট ক্যাশ লাইন একবারে লোড করে। সংলগ্ন অ্যারে ঘরগুলোতে পরিবারের অন্যান্য নোড উপস্থিত থাকায় পরবর্তী ধাপগুলো দ্রুত ক্যাশ থেকে সম্পন্ন হয় এবং পয়েন্টার খোঁজার বিলম্ব দূর হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Partial order efficiency: Heaps enforce parent-child dominance without ordering siblings, avoiding BST rebalancing rotations.',
          bn: 'আংশিক ক্রমের দক্ষতা: হিপ সহোদরদের সাজানোর ঝামেলা এড়িয়ে কেবল প্যারেন্ট-চাইল্ড সম্পর্ক রক্ষা করে রোটেশন মুক্ত রাখে।'
        },
        {
          en: 'Zero pointer overhead: Complete binary trees map into contiguous arrays where parent and child links are pure arithmetic.',
          bn: 'শূন্য পয়েন্টার খরচ: সম্পূর্ণ বাইনারি ট্রি অবিচ্ছিন্ন অ্যারেতে সংরক্ষিত হয় যেখানে সম্পর্কগুলো সাধারণ পাটিগণিতের সূত্র।'
        },
        {
          en: 'Constant-time peek: The extreme element (maximum in max-heap, minimum in min-heap) always resides at index 0 in O(1) time.',
          bn: 'ধ্রুবক সময়ে পিক: চরম উপাদানটি (ম্যাক্স-হিপে সর্বোচ্চ, মিন-হিপে সর্বনিম্ন) সর্বদা ০ নম্বর ইনডেক্সে O(1) সময়ে পাওয়া যায়।'
        },
        {
          en: 'Optimal cache locality: Contiguous array storage ensures entire tree levels fit tightly into 64-byte CPU hardware cache lines.',
          bn: 'সেরা ক্যাশ লোকালিটি: সংলগ্ন মেমোরিতে থাকার ফলে সম্পূর্ণ ট্রি স্তরগুলো হার্ডওয়্যারের ৬৪-বাইট ক্যাশ লাইনে দ্রুত লোড হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'hf-ex1',
      kind: 'mcq',
      topic: 'parent-index-calculation',
      question: {
        en: 'In a zero-indexed binary heap array, if a node is located at index 5, what is the index of its parent node?',
        bn: 'একটি ০-ইনডেক্সযুক্ত বাইনারি হিপ অ্যারেতে একটি নোড যদি ৫ নম্বর ইনডেক্সে থাকে, তবে তার প্যারেন্ট নোডের ইনডেক্স কত?'
      },
      options: [
        {
          en: 'Index 2, calculated via Math.floor((5 - 1) / 2) = 2',
          bn: '২ নম্বর ইনডেক্স, Math.floor((৫ - ১) / ২) = ২ হিসাব করে'
        },
        {
          en: 'Index 1',
          bn: '১ নম্বর ইনডেক্স'
        },
        {
          en: 'Index 3',
          bn: '৩ নম্বর ইনডেক্স'
        },
        {
          en: 'Index 10',
          bn: '১০ নম্বর ইনডেক্স'
        }
      ],
      answer: 0,
      hint: {
        en: 'The parent index formula for node i is Math.floor((i - 1) / 2).',
        bn: 'নোড i এর জন্য প্যারেন্ট খোঁজার সূত্র হলো Math.floor((i - ১) / ২)।'
      },
      explanation: {
        en: 'Subtracting 1 from 5 gives 4. Dividing 4 by 2 yields index 2.',
        bn: '৫ থেকে ১ বিয়োগ করলে ৪ হয়। ৪ কে ২ দিয়ে ভাগ করলে ইনডেক্স ২ পাওয়া যায়।'
      }
    },
    {
      id: 'hf-ex2',
      kind: 'mcq',
      topic: 'heap-vs-bst-difference',
      question: {
        en: 'What fundamental ordering difference distinguishes a Binary Heap from a Binary Search Tree (BST)?',
        bn: 'কোন মৌলিক ক্রমের পার্থক্য একটি বাইনারি হিপকে একটি বাইনারি সার্চ ট্রি (BST) থেকে আলাদা করে?'
      },
      options: [
        {
          en: 'A BST enforces total order (left < root < right), whereas a Heap enforces only partial parent-child order without ordering siblings',
          bn: 'একটি BST পূর্ণ ক্রম মেনে চলে (বাম < রুট < ডান), যেখানে হিপ সহোদরদের কোনো ক্রম না রেখে কেবল প্যারেন্ট-চাইল্ড আংশিক ক্রম রক্ষা করে'
        },
        {
          en: 'BSTs can only store floating-point numbers',
          bn: 'বিএসটি কেবল দশমিক সংখ্যা সংরক্ষণ করতে পারে'
        },
        {
          en: 'Heaps require 64-bit operating systems while BSTs run on 8-bit computers',
          bn: 'হিপের জন্য ৬৪-বিট অপারেটিং সিস্টেম লাগে এবং বিএসটি ৮-বিট কম্পিউটারে চলে'
        },
        {
          en: 'BSTs use arrays while Heaps cannot use arrays',
          bn: 'বিএসটি অ্যারে ব্যবহার করে এবং হিপ অ্যারে ব্যবহার করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'In a heap, is the left child required to be smaller than the right child?',
        bn: 'হিপের ক্ষেত্রে বাম সন্তান কি ডান সন্তানের চেয়ে ছোট হতে বাধ্য?'
      },
      explanation: {
        en: 'In a heap, siblings have no ordered relationship. The heap property only mandates that parents dominate their children.',
        bn: 'হিপে সহোদরদের মধ্যে কোনো ক্রম নেই। কেবল প্যারেন্ট তার চাইল্ড নোডের চেয়ে বড় বা ছোট হলেই হিপ প্রোপার্টি বজায় থাকে।'
      }
    },
    {
      id: 'hf-ex3',
      kind: 'mcq',
      topic: 'complete-binary-tree-shape',
      question: {
        en: 'Why is it mandatory for a heap to maintain the Complete Binary Tree shape?',
        bn: 'হিপের ক্ষেত্রে কেন সম্পূর্ণ বাইনারি ট্রি রূপ বজায় রাখা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Because completeness guarantees that array storage contains 0 empty gaps, enabling direct mathematical index navigation without pointers',
          bn: 'কারণ সম্পূর্ণতা নিশ্চিত করে যে অ্যারেতে ০টি ফাঁকা স্থান থাকবে, যা পয়েন্টার ছাড়া সরাসরি গাণিতিক ইনডেক্স চলাচল সম্ভব করে'
        },
        {
          en: 'Because incomplete trees cause CPU hardware cooling fans to stop',
          bn: 'কারণ অসম্পূর্ণ ট্রি সিপিইউ কুলিং ফ্যান বন্ধ করে দেয়'
        },
        {
          en: 'Because JavaScript prohibits odd-sized arrays',
          bn: 'কারণ জাভাস্ক্রিপ্ট বিজোড় আকারের অ্যারে নিষিদ্ধ করে'
        },
        {
          en: 'Because incomplete trees can only store negative numbers',
          bn: 'কারণ অসম্পূর্ণ ট্রি কেবল ঋণাত্মক সংখ্যা ধারণ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What happens in an array if tree levels have missing gaps in the middle?',
        bn: 'মাঝখানে ফাঁকা স্থান থাকলে অ্যারের ইনডেক্সিংয়ে কী সমস্যা হবে?'
      },
      explanation: {
        en: 'If gaps existed, the simple 2i + 1 formula would point to wrong or empty array slots. Completeness guarantees dense contiguous mapping.',
        bn: 'ফাঁক থাকলে ২i + ১ সূত্রটি ভুল বা খালি জায়গায় গিয়ে পড়বে। সম্পূর্ণতা নিশ্চিত করে যে সব উপাদান সারিবদ্ধভাবে থাকবে।'
      }
    }
  ],
  quiz: {
    id: 'heap-thinking-quiz',
    title: {
      en: 'Binary Heap Foundations Quiz',
      bn: 'বাইনারি হিপের ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'hf-q1',
        kind: 'mcq',
        topic: 'right-child-formula',
        question: {
          en: 'In an array-backed binary heap, what is the right child index formula for a node at index i?',
          bn: 'একটি অ্যারে-ভিত্তিক বাইনারি হিপে ইনডেক্স i তে থাকা নোডের ডান চাইল্ড খোঁজার সূত্র কোনটি?'
        },
        options: [
          {
            en: '2 * i + 2',
            bn: '২ * i + ২'
          },
          {
            en: '2 * i + 1',
            bn: '২ * i + ১'
          },
          {
            en: 'i + 2',
            bn: 'i + ২'
          },
          {
            en: 'Math.floor(i / 2)',
            bn: 'Math.floor(i / ২)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Left child is 2 * i + 1, so the next adjacent slot is the right child.',
          bn: 'বাম সন্তান হলো ২ * i + ১, সুতরাং তার পরের ঘরটি ডান সন্তান।'
        },
        explanation: {
          en: 'For 0-indexed heaps, left child is 2i + 1 and right child is 2i + 2.',
          bn: '০-ইনডেক্সভিত্তিক হিপে বাম সন্তান হয় ২i + ১ এবং ডান সন্তান হয় ২i + ২।'
        }
      },
      {
        id: 'hf-q2',
        kind: 'mcq',
        topic: 'root-inspection-time',
        question: {
          en: 'What is the time complexity to inspect the minimum element (peek) in a Min-Heap?',
          bn: 'একটি মিন-হিপে সর্বনিম্ন উপাদানটি দেখার (peek) সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) constant time, because the minimum element always resides at index 0',
            bn: 'O(1) ধ্রুবক সময়, কারণ সর্বনিম্ন উপাদানটি সর্বদা ০ নম্বর ইনডেক্সে থাকে'
          },
          {
            en: 'O(n) linear scan time',
            bn: 'O(n) রৈখিক খোঁজার সময়'
          },
          {
            en: 'O(log n) tree traversal time',
            bn: 'O(log n) ট্রি ট্রাভার্সাল সময়'
          },
          {
            en: 'O(n^2) quadratic time',
            bn: 'O(n^2) চতুর্ঘাতী সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where does the heap property guarantee the extreme value sits?',
          bn: 'হিপ প্রোপার্টি অনুযায়ী চরম মানটি সর্বদা কোথায় অবস্থান করে?'
        },
        explanation: {
          en: 'The min-heap property ensures the smallest element is at the root (array index 0), accessible via direct index lookup in O(1) time.',
          bn: 'মিন-হিপে সবচেয়ে ছোট সংখ্যাটি সর্বদা রুটে (০ নম্বর ইনডেক্সে) থাকে, যা সরাসরি O(1) সময়ে দেখা যায়।'
        }
      },
      {
        id: 'hf-q3',
        kind: 'mcq',
        topic: 'pointer-memory-savings',
        question: {
          en: 'How much pointer memory overhead is eliminated by mapping a binary heap into a contiguous array instead of using traditional node objects?',
          bn: 'প্রথাগত নোড অবজেক্টের বদলে বাইনারি হিপকে অবিচ্ছিন্ন অ্যারেতে রাখলে প্রতি নোডে কতটুকু পয়েন্টার মেমোরি সাশ্রয় হয়?'
        },
        options: [
          {
            en: '16 to 24 bytes per node, by eliminating explicit left and right child reference pointers',
            bn: 'নোড প্রতি ১৬ থেকে ২৪ বাইট, বাম ও ডান চাইল্ড পয়েন্টার রেফারেন্স পুরোপুরি বাদ দেওয়ার মাধ্যমে'
          },
          {
            en: 'Zero bytes',
            bn: 'শূন্য বাইট'
          },
          {
            en: 'Exactly 1 gigabyte per node',
            bn: 'নোড প্রতি ঠিক ১ গিগাবাইট'
          },
          {
            en: '100 percent of CPU cache memory',
            bn: 'সিপিইউ ক্যাশ মেমোরির ১০০ শতাংশ'
          }
        ],
        answer: 0,
        hint: {
          en: 'On 64-bit architectures, each object pointer takes 8 bytes in memory.',
          bn: '৬৪-বিট আর্কিটেকচারে প্রতিটি অবজেক্ট পয়েন্টার মেমোরিতে ৮ বাইট জায়গা নেয়।'
        },
        explanation: {
          en: 'Eliminating left and right 64-bit child pointers saves 16 bytes per node, plus object header overhead.',
          bn: 'দুটি ৬৪-বিট পয়েন্টার বাদ দিলে নোড প্রতি ১৬ বাইট এবং অবজেক্ট হেডারের অতিরিক্ত মেমোরি সাশ্রয় হয়।'
        }
      },
      {
        id: 'hf-q4',
        kind: 'mcq',
        topic: 'leaf-node-indices',
        question: {
          en: 'In a complete binary heap of size n, at what index do the leaf nodes (nodes with no children) begin?',
          bn: 'n আকারের একটি সম্পূর্ণ বাইনারি হিপে কোন ইনডেক্স থেকে লিফ নোডগুলো (যাদের কোনো সন্তান নেই) শুরু হয়?'
        },
        options: [
          {
            en: 'Index Math.floor(n / 2)',
            bn: 'Math.floor(n / ২) নম্বর ইনডেক্স'
          },
          {
            en: 'Index 0',
            bn: '০ নম্বর ইনডেক্স'
          },
          {
            en: 'Index n - 1',
            bn: 'n - ১ নম্বর ইনডেক্স'
          },
          {
            en: 'Index 1',
            bn: '১ নম্বর ইনডেক্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'Roughly half of all nodes in a complete binary tree are leaves.',
          bn: 'একটি সম্পূর্ণ বাইনারি ট্রির প্রায় অর্ধেক নোডই হলো পাতা বা লিফ।'
        },
        explanation: {
          en: 'For any index i >= Math.floor(n / 2), its left child index 2i + 1 is >= n, placing it out of bounds. Thus, all nodes from index floor(n / 2) to n - 1 are leaves.',
          bn: 'i >= Math.floor(n / ২) এর জন্য ২i + ১ >= n হয়ে যায় যা সীমার বাইরে। সুতরাং floor(n / ২) থেকে n - ১ পর্যন্ত সব নোডই লিফ।'
        }
      }
    ]
  }
};
