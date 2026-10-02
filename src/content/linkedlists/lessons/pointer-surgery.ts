import type { Lesson } from '../../../lib/types';

export const pointerSurgeryLesson: Lesson = {
  slug: 'pointer-surgery',
  tech: 'linked-lists',
  title: {
    en: 'Pointer Surgery: Stitches, Invariants, and Sentinel Nodes',
    bn: 'পয়েন্টার সার্জারি: সেলাই, ইনভেরিয়েন্ট এবং সেন্টিনেল নোড'
  },
  summary: {
    en: 'A rigorous systems guide to pointer mutations, edge-case elimination, and in-place list transformations. We examine the immutable order of insertion stitches (grasping downstream references before overwriting predecessors) and how reversed assignments create catastrophic orphan subchains and self-cycles. We analyze the Sentinel / Dummy Head pattern, which removes conditional branching across empty lists and head deletions by providing a permanent non-null predecessor. We implement the iterative in-place list reversal algorithm, proving its correctness through the three-pointer loop invariant (behind prev reversed, from curr untouched). Real executable simulations trace insertions, deletions, and reversals step by step.',
    bn: 'পয়েন্টার রূপান্তর, প্রান্তিক সমস্যা দূরীকরণ এবং মেমরিতে সরাসরি তালিকা পরিবর্তনের একটি গভীর সিস্টেম গাইড। আমরা সন্নিবেশ সেলাইয়ের অপরিবর্তনীয় ক্রম বিশ্লেষণ করেছি (পূর্বসূরির রেফারেন্স বদলানোর আগে পেছনের চেইন ধরে রাখা) এবং কেন ভুল ক্রমে পয়েন্টার বসালে বিচ্ছিন্ন অনাথ নোড ও আত্ম-চক্র তৈরি হয় তা দেখিয়েছি। আমরা সেন্টিনেল বা ডামি হেড প্যাটার্ন ব্যবচ্ছেদ করেছি, যা একটি স্থায়ী পূর্বসূরি তৈরি করে খালি তালিকা এবং শুরুতে মোছনের জটিল শর্ত দূর করে। সবশেষে তিন-পয়েন্টার লুপ ইনভেরিয়েন্ট দিয়ে মেমরিতে সরাসরি তালিকা উল্টানোর অ্যালগরিদম বাস্তবায়ন ও প্রমাণ করা হয়েছে। বাস্তব এক্সিকিউটেবল কোডের মাধ্যমে সন্নিবেশ, মোছন এবং উল্টানোর প্রতিটি ধাপ ট্রেস করে দেখানো হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Physics of Pointer Mutation: Why Order is Law',
        bn: 'পয়েন্টার পরিবর্তনের নিয়ম: কেন ক্রম বজায় রাখা আবশ্যক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we study pointer surgery: mutating the directed references of a linked list to insert, delete, or reorder nodes in constant time. In contiguous arrays, inserting an item requires copying bytes to open a slot. In linked lists, no nodes are moved in physical memory. Inserting node X after node A requires executing two pointer assignments: first, X.next = A.next to latch onto the downstream subchain; second, A.next = X to route incoming traffic through X. If this order is reversed, executing A.next = X first immediately destroys the only reference to node B, permanently orphaning the rest of the list.',
        bn: 'এই পাঠে আমরা পয়েন্টার সার্জারি পরীক্ষা করব: মেমরির কোনো নোড না নাড়িয়ে কেবল রেফারেন্স পয়েন্টার পরিবর্তনের মাধ্যমে ধ্রুব O(1) সময়ে নোড সন্নিবেশ, মোছন ও পুনর্গঠন। সাধারণ অ্যারেতে উপাদান ঢোকাতে মেমরির ডেটা কপি করে জায়গা খালি করতে হয়। কিন্তু লিঙ্কড লিস্টে কোনো নোডকে শারীরিকভাবে সরাতে হয় না। নোড A এর পরে নোড X ঢোকাতে ঠিক দুটি নির্দেশ লাগে: প্রথমে X.next = A.next দিয়ে পেছনের চেইনটি ধরতে হয়; দ্বিতীয়ত A.next = X দিয়ে সামনের সংযোগটি X এর সাথে যুক্ত করতে হয়। এই ক্রম উল্টে দিলে A এর ভেতরের পুরানো রেফারেন্স মুছে যায় এবং পেছনের পুরো তালিকা চিরতরে বিচ্ছিন্ন অনাথ হয়ে পড়ে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'pointer stitch',
          def: {
            en: 'The atomic rewiring of a next reference to splice a new node into a chain or bypass a deleted node without relocating memory.',
            bn: 'মেমরির স্থান বদল না করে শিকলে নতুন নোড জোড়া লাগানো বা বাদ দেওয়া নোডকে এড়িয়ে যেতে next রেফারেন্স পুনরায় সংযোগ করার কাজ।'
          }
        },
        {
          term: 'dummy head (sentinel)',
          def: {
            en: 'An auxiliary non-data node positioned immediately before the head to provide a permanent predecessor, eliminating edge cases for head mutations.',
            bn: 'প্রকৃত head এর ঠিক আগে বসানো একটি অতিরিক্ত নোড যা সর্বদা একটি স্থায়ী পূর্বসূরি হিসেবে কাজ করে শুরুতে সন্নিবেশ ও মোছনের জটিল শর্ত দূর করে।'
          }
        },
        {
          term: 'orphan chain',
          def: {
            en: 'A downstream sequence of nodes that becomes completely unreachable from the root set because an upstream next pointer was overwritten prematurely.',
            bn: 'তালিকার পেছনের একদল নোড যা রুট সেট থেকে সম্পূর্ণ বিচ্ছিন্ন হয়ে যায় কারণ সামনের পয়েন্টারটি সংরক্ষণ না করেই আগে বদলে ফেলা হয়েছিল।'
          }
        },
        {
          term: 'self-cycle',
          def: {
            en: 'A corrupted linked state where a node points to itself (node.next === node), trapping traversal loops in infinite cycles.',
            bn: 'পয়েন্টারের একটি মারাত্মক ত্রুটিপূর্ণ অবস্থা যেখানে একটি নোড নিজের দিকেই নির্দেশ করে (node.next === node), যার ফলে ট্রাভার্সাল চিরস্থায়ী লুপে আটকে যায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'sentinel',
      text: {
        en: 'The Sentinel / Dummy Head Pattern: Eliminating Edge Cases',
        bn: 'সেন্টিনেল বা ডামি হেড প্যাটার্ন: প্রান্তিক শর্ত দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The greatest source of bugs in linked list operations is conditional branching around the head pointer. Deleting a middle node requires modifying curr.next, whereas deleting the first node requires modifying head. Deleting from an empty list requires null guards. Engineers frequently write dozens of fragile if-statements to handle these edge cases. The Sentinel (Dummy Head) pattern completely eliminates special cases: we allocate a temporary node dummy = new ListNode(0, head) and perform all surgery relative to dummy. Every node in the list—including the original head—now possesses a guaranteed non-null predecessor.',
        bn: 'লিঙ্কড লিস্ট অপারেশনে সবচেয়ে বেশি বাগ তৈরি হয় head পয়েন্টার সংক্রান্ত বিশেষ শর্ত যাচাই করতে গিয়ে। মাঝের কোনো নোড মুছতে curr.next বদলাতে হয়, অথচ প্রথম নোড মুছতে সরাসরি head ভেরিয়েবল বদলাতে হয়। খালি তালিকা থেকে ডেটা মুছতে নাল-চেক লাগে। এর ফলে কোডে বহু ভঙ্গুর if-স্টেটমেন্ট লিখতে হয়। সেন্টিনেল বা ডামি হেড প্যাটার্ন এই সব বিশেষ শর্ত দূর করে দেয়: আমরা তালিকার শুরুতে dummy = new ListNode(0, head) নামের একটি ক্ষণস্থায়ী নোড যুক্ত করি এবং সমস্ত কাজ এই ডামির সাপেক্ষে করি। ফলে মূল head সহ তালিকার প্রতিটি নোডের পূর্বে নিশ্চিতভাবে একটি অ-শূন্য পূর্বসূরি থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'visual-guide',
      text: {
        en: 'Visualizing Pointer Stitches and In-Place Reversal',
        bn: 'পয়েন্টার সেলাই এবং ইন-প্লেস উল্টানোর ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'll'
    },
    {
      type: 'heading',
      id: 'code',
      text: {
        en: 'Empirical Verification: Safe Surgery and 3-Pointer In-Place Reversal',
        bn: 'বাস্তব যাচাই: নিরাপদ সার্জারি এবং ৩-পয়েন্টার ইন-প্লেস রিভার্সাল'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Concrete implementation of safe pointer surgery and in-place reversal
class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

// 1. Delete by value using a Dummy Head (sentinel node)
function deleteValue<T>(head: ListNode<T> | null, target: T): ListNode<T> | null {
  const dummy = new ListNode<T>(null as unknown as T, head);
  let curr: ListNode<T> | null = dummy;

  while (curr !== null && curr.next !== null) {
    if (curr.next.val === target) {
      // One-step vault over victim node
      curr.next = curr.next.next;
      break;
    }
    curr = curr.next;
  }
  return dummy.next;
}

// 2. In-Place List Reversal using the 3-Pointer Dance
// Invariant: all nodes behind prev are reversed; all nodes from curr forward are untouched
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev: ListNode<T> | null = null;
  let curr: ListNode<T> | null = head;

  while (curr !== null) {
    const nextTemp: ListNode<T> | null = curr.next; // Step 1: Rescue downstream chain
    curr.next = prev;                              // Step 2: Reverse the directed arrow
    prev = curr;                                   // Step 3: Advance prev forward
    curr = nextTemp;                               // Step 4: Advance curr forward
  }
  return prev; // prev is the new head of the reversed list
}

function toArray<T>(head: ListNode<T> | null): T[] {
  const result: T[] = [];
  let curr = head;
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

// Execution verification
const n4 = new ListNode(40);
const n3 = new ListNode(30, n4);
const n2 = new ListNode(20, n3);
const n1 = new ListNode(10, n2);

console.log('Original list:', toArray(n1).join(' -> '));
// Original list: 10 -> 20 -> 30 -> 40

// Delete value 10 (head deletion handled uniformly by sentinel)
const afterDelete = deleteValue(n1, 10);
console.log('After deleting 10:', toArray(afterDelete).join(' -> '));
// After deleting 10: 20 -> 30 -> 40

// Reverse remaining 3 nodes in-place
const reversed = reverseList(afterDelete);
console.log('After in-place reversal:', toArray(reversed).join(' -> '));
// After in-place reversal: 40 -> 30 -> 20`,
      caption: {
        en: 'Execution trace demonstrating dummy head deletion of head element 10 followed by in-place 3-pointer list reversal.',
        bn: 'ডামি হেডের মাধ্যমে প্রথম উপাদান ১০ মোছন এবং ৩-পয়েন্টার পদ্ধতিতে মেমরিতে সরাসরি তালিকা উল্টানোর বাস্তব প্রমাণ।'
      }
    },
    {
      type: 'heading',
      id: 'matrix',
      text: {
        en: 'Comparative Architecture Matrix: Pointer Surgery Patterns',
        bn: 'তুলনামূলক আর্কিটেকচার ম্যাট্রিক্স: পয়েন্টার সার্জারি কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Surgery Pattern', bn: 'সার্জারি কৌশল' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'Auxiliary Memory', bn: 'অতিরিক্ত মেমরি' },
        { en: 'Edge Case Safety', bn: 'প্রান্তিক নিরাপত্তা' },
        { en: 'Primary Failure Mode', bn: 'প্রধান বিপর্যয় রূপ' }
      ],
      rows: [
        [
          { en: 'Naive Head Deletion', bn: 'সাধারণ হেড মোছন' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'Fragile (requires special if head checks)', bn: 'ঝুঁকিপূর্ণ (আলাদা if শর্ত আবশ্যক)' },
          { en: 'Null pointer dereference on empty list', bn: 'খালি তালিকায় নাল পয়েন্টার ক্র্যাশ' }
        ],
        [
          { en: 'Sentinel Dummy Head', bn: 'সেন্টিনেল ডামি হেড' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(1) (1 dummy node)', bn: 'O(1) (১টি ডামি নোড)' },
          { en: 'Robust (unifies head and middle operations)', bn: 'নিরাপদ (শুরু ও মাঝের কাজ একীভূত)' },
          { en: 'Forgetting to return dummy.next', bn: 'dummy.next রিটার্ন করতে ভুলে যাওয়া' }
        ],
        [
          { en: '3-Pointer In-Place Reversal', bn: '৩-পয়েন্টার ইন-প্লেস রিভার্সাল' },
          { en: 'O(N)', bn: 'O(N)' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'Guaranteed by loop invariant', bn: 'লুপ ইনভেরিয়েন্ট দ্বারা সুনিশ্চিত' },
          { en: 'Reversing arrow before saving curr.next (orphans chain)', bn: 'curr.next বাঁচানোর আগেই তীর উল্টানো (চেইন হারানো)' }
        ],
        [
          { en: 'Two-Step Node Insertion', bn: 'দুই-ধাপ নোড সন্নিবেশ' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'Safe when ordered (X.next first)', bn: 'নিরাপদ (আগে X.next যুক্ত করলে)' },
          { en: 'Overwriting predecessor first (creates self-cycle)', bn: 'আগে পূর্বসূরি পরিবর্তন (আত্ম-চক্র তৈরি)' }
        ]
      ]
    }
  ],
  nextLesson: {
    slug: 'the-address-machines',
    tech: 'linked-lists',
    title: {
      en: 'The Address Machines: Cache Locality, Prefetching & Hardware Physics',
      bn: 'অ্যাড্রেস মেশিন: ক্যাশ লোকালিটি, প্রিফেচিং ও হার্ডওয়্যার পদার্থবিজ্ঞান'
    }
  },
  exercises: [
    {
      id: 'ps-ex1',
      kind: 'mcq',
      topic: 'insertion order',
      question: {
        en: 'To insert a new node X after node A in a singly linked list, what is the mandatory sequence of pointer assignments?',
        bn: 'একটি সিঙ্গলি লিঙ্কড লিস্টে নোড A এর পরে নতুন নোড X সন্নিবেশ করতে পয়েন্টার বরাদ্দের বাধ্যতামূলক ক্রম কোনটি?'
      },
      options: [
        {
          en: 'First X.next = A.next, then A.next = X to prevent losing the downstream chain',
          bn: 'প্রথমে X.next = A.next, এরপর A.next = X যাতে পেছনের চেইনের সংযোগ বিচ্ছিন্ন না হয়'
        },
        {
          en: 'First A.next = X, then X.next = A.next',
          bn: 'প্রথমে A.next = X, এরপর X.next = A.next'
        },
        {
          en: 'First A.next = null, then X.next = A',
          bn: 'প্রথমে A.next = null, এরপর X.next = A'
        },
        {
          en: 'Order does not matter because pointers are executed simultaneously in hardware',
          bn: 'ক্রমের কোনো গুরুত্ব নেই কারণ হার্ডওয়্যারে পয়েন্টার একযোগে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What happens to the rest of the list if you overwrite A.next before saving its address into X.next?',
        bn: 'X.next এ সংরক্ষণের আগেই A.next পরিবর্তন করে দিলে তালিকার বাকি অংশের কী ঘটবে তা ভাবুন।'
      },
      explanation: {
        en: 'Setting X.next = A.next first latches X onto the downstream sequence. Subsequently setting A.next = X completes the bridge. Reversing this order overwrites A.next prematurely, creating an orphan chain and a 1-node self-cycle.',
        bn: 'প্রথমে X.next = A.next দিলে X পেছনের নোডগুলোকে ধরে ফেলে। এরপর A.next = X দিলে পুরো সেতুটি সম্পূর্ণ হয়। ক্রম উল্টে দিলে A এর পুরানো সংযোগ মুছে গিয়ে পেছনের তালিকা হারিয়ে যায় এবং আত্ম-চক্র তৈরি হয়।'
      }
    },
    {
      id: 'ps-ex2',
      kind: 'mcq',
      topic: 'sentinel nodes',
      question: {
        en: 'Why does the Sentinel (Dummy Head) pattern eliminate edge cases when deleting nodes from a linked list?',
        bn: 'লিঙ্কড লিস্ট থেকে নোড মোছনের সময় সেন্টিনেল বা ডামি হেড প্যাটার্ন কেন সমস্ত প্রান্তিক জটিলতা দূর করে?'
      },
      options: [
        {
          en: 'It guarantees that every target node—including the real head—has a valid, non-null predecessor, allowing uniform deletion logic',
          bn: 'এটি নিশ্চিত করে যে প্রকৃত head সহ প্রতিটি কাঙ্ক্ষিত নোডের পূর্বে একটি বৈধ অ-শূন্য পূর্বসূরি থাকে, ফলে একই নিয়মে সব নোড মোছা যায়'
        },
        {
          en: 'It accelerates memory allocation by converting nodes into integers',
          bn: 'এটি নোডগুলোকে পূর্ণসংখ্যায় রূপান্তর করে মেমরি বরাদ্দের গতি বাড়ায়'
        },
        {
          en: 'It prevents the garbage collector from running during deletions',
          bn: 'মোছনের সময় এটি গার্বেজ কালেক্টরকে চলা থেকে বিরত রাখে'
        },
        {
          en: 'It forces the operating system to double list capacity',
          bn: 'এটি অপারেটিং সিস্টেমকে তালিকার ধারণক্ষমতা দ্বিগুণ করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about why deleting the first node normally requires a special if statement.',
        bn: 'সাধারণত প্রথম নোড মুছতে কেন আলাদা if স্টেটমেন্ট লাগে তা বিবেচনা করুন।'
      },
      explanation: {
        en: 'Deleting a node requires updating its predecessor next pointer. The true head normally has no predecessor. Parking a dummy node before head ensures every node has a predecessor, allowing curr.next = curr.next.next to handle head and middle deletions identically.',
        bn: 'কোনো নোড মুছতে তার পূর্ববর্তী নোডের next পরিবর্তন করতে হয়। আসল head এর আগে কোনো নোড থাকে না। কিন্তু head এর আগে একটি ডামি নোড রাখলে প্রতিটি নোডেরই একটি পূর্বসূরি থাকে, ফলে curr.next = curr.next.next দিয়ে সব মোছন সমানভাবে সামলানো যায়।'
      }
    },
    {
      id: 'ps-ex3',
      kind: 'mcq',
      topic: 'in-place reversal',
      question: {
        en: 'In the 3-pointer in-place list reversal algorithm, what is the crucial first step inside each iteration before rewiring `curr.next = prev`?',
        bn: '৩-পয়েন্টার ইন-প্লেস রিভার্সাল অ্যালগরিদমে `curr.next = prev` সংযোগ উল্টানোর ঠিক আগে প্রতি ধাপে প্রথম কোন কাজটি করা আবশ্যক?'
      },
      options: [
        {
          en: 'Rescue the downstream chain in a temporary pointer: nextTemp = curr.next',
          bn: 'একটি অস্থায়ী পয়েন্টারে পেছনের চেইনটি সংরক্ষণ করে রাখা: nextTemp = curr.next'
        },
        {
          en: 'Allocate 4 new nodes in heap memory',
          bn: 'হিপ মেমরিতে ৪ টি নতুন নোড বরাদ্দ করা'
        },
        {
          en: 'Reboot the CPU execution registers',
          bn: 'সিপিইউ রেজিস্টার রিবুট করা'
        },
        {
          en: 'Set prev = null immediately',
          bn: 'তাৎক্ষণিকভাবে prev = null সেট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Once you execute curr.next = prev, how will you find where the next node was?',
        bn: 'একবার curr.next = prev লিখে ফেললে পরবর্তী নোডটি কোথায় ছিল তা কীভাবে খুঁজে পাবেন?'
      },
      explanation: {
        en: 'Rewiring curr.next = prev breaks the forward arrow connecting curr to the remaining list. If curr.next is not rescued in nextTemp first, the rest of the list becomes unreachable and the loop cannot advance.',
        bn: 'curr.next = prev লিখলে সামনের নোডের সাথে curr এর সম্পর্ক কেটে যায়। তাই আগেই nextTemp = curr.next দিয়ে পেছনের অংশটি না রাখলে বাকি তালিকা হারিয়ে যাবে এবং লুপ সামনে এগোতে পারবে না।'
      }
    },
    {
      id: 'ps-ex4',
      kind: 'mcq',
      topic: 'loop invariant',
      question: {
        en: 'What is the loop invariant maintained throughout the iterative in-place list reversal algorithm?',
        bn: 'মেমরিতে সরাসরি তালিকা উল্টানোর অ্যালগরিদমে লুপ চলাকালীন কোন ইনভেরিয়েন্ট বা অপরিবর্তনীয় শর্তটি সর্বদা বজায় থাকে?'
      },
      options: [
        {
          en: 'All nodes behind prev are fully reversed, while all nodes from curr forward remain in their original order',
          bn: 'prev এর পেছনের সমস্ত নোড পুরোপুরি উল্টানো থাকে, আর curr থেকে সামনের সমস্ত নোড তাদের আসল ক্রমে থাকে'
        },
        {
          en: 'All node values are multiplied by 2 on each iteration',
          bn: 'প্রতিটি ধাপে নোডের মান ২ দিয়ে গুণ হয়'
        },
        {
          en: 'The list capacity doubles every 3 steps',
          bn: 'প্রতি ৩ ধাপে তালিকার ধারণক্ষমতা দ্বিগুণ হয়'
        },
        {
          en: 'The head node switches from 64-bit to 32-bit mode',
          bn: 'head নোডটি ৬৪-বিট থেকে ৩২-বিট মোডে পরিবর্তিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider what is true at start (prev = null, curr = head) and what becomes true at termination (curr = null).',
        bn: 'শুরুতে কী সত্য ছিল (prev = null, curr = head) এবং শেষে কী সত্য হয় (curr = null) তা ভাবুন।'
      },
      explanation: {
        en: 'The invariant states that the sublist behind prev is completely reversed, and the sublist from curr onward is intact. When curr reaches null, the entire list is behind prev, proving that prev is the head of the reversed list.',
        bn: 'এই ইনভেরিয়েন্ট নিশ্চিত করে যে prev এর পেছনের অংশটি উল্টানো এবং curr এর সামনের অংশটি অবিকৃত। curr যখন null এ পৌঁছায়, তখন পুরো তালিকাটিই prev এর পেছনে চলে আসে, যা প্রমাণ করে prev-ই উল্টানো তালিকার নতুন head।'
      }
    }
  ],
  quiz: {
    id: 'pointer-surgery-quiz',
    title: {
      en: 'Pointer Surgery and Invariant Mastery Quiz',
      bn: 'পয়েন্টার সার্জারি এবং ইনভেরিয়েন্ট দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'ps-q1',
        kind: 'mcq',
        topic: 'bug-analysis',
        question: {
          en: 'What specific bug occurs if an engineer writes `curr.next = curr` during pointer manipulation?',
          bn: 'পয়েন্টার পরিচালনার সময় কোনো প্রকৌশলী `curr.next = curr` লিখলে ঠিক কোন মারাত্মক ত্রুটি ঘটে?'
        },
        options: [
          {
            en: 'A 1-node self-cycle where the node points to itself, causing any subsequent traversal to loop infinitely',
            bn: '১-নোডের একটি আত্ম-চক্র তৈরি হয় যেখানে নোড নিজের দিকে নির্দেশ করে এবং পরবর্তী যেকোনো ট্রাভার্সাল অসীম লুপে আটকে যায়'
          },
          {
            en: 'The node value is automatically converted into a floating-point zero',
            bn: 'নোডের মানটি স্বয়ংক্রিয়ভাবে ফ্লোটিং-পয়েন্ট শূন্যে পরিণত হয়'
          },
          {
            en: 'The operating system file system becomes read-only',
            bn: 'অপারেটিং সিস্টেম ফাইল সিস্টেম কেবল পাঠযোগ্য হয়ে যায়'
          },
          {
            en: 'The list length is calculated in O(1) time',
            bn: 'তালিকার দৈর্ঘ্য O(1) সময়ে হিসাব করা সম্ভব হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a node next pointer points to the node itself, when will curr.next ever become null?',
          bn: 'একটি নোডের next পয়েন্টার যদি নোডটিকেই নির্দেশ করে, তবে curr.next কখন null হবে?'
        },
        explanation: {
          en: 'Assigning a node next pointer to itself creates a circular reference of length 1. Any while (curr !== null) traversal will loop on this single node forever, hanging the thread.',
          bn: 'একটি নোডের next পয়েন্টারে নিজেকেই বসিয়ে দিলে ১ দৈর্ঘ্যের একটি বৃত্তাকার রেফারেন্স তৈরি হয়। ফলে যেকোনো ট্রাভার্সাল এই নোডে অনন্তকাল ঘুরতে থাকে এবং থ্রেড হ্যাং করে।'
        }
      },
      {
        id: 'ps-q2',
        kind: 'mcq',
        topic: 'space-complexity',
        question: {
          en: 'What is the auxiliary space complexity of the iterative 3-pointer list reversal algorithm?',
          bn: '৩-পয়েন্টার ইন-প্লেস রিভার্সাল অ্যালগরিদমের অতিরিক্ত মেমরি জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) because it rewires existing pointers in-place using only 3 local reference variables without allocating any new nodes',
            bn: 'O(1) কারণ কোনো নতুন নোড তৈরি না করে কেবল ৩ টি স্থানীয় ভেরিয়েবল দিয়ে সরাসরি মেমরির পয়েন্টার বদলে দেওয়া হয়'
          },
          {
            en: 'O(N) because a mirror copy of the list must be allocated in heap memory',
            bn: 'O(N) কারণ হিপ মেমরিতে তালিকার একটি অবিকল প্রতিরূপ বরাদ্দ করতে হয়'
          },
          {
            en: 'O(log N) due to recursive call stack frames',
            bn: 'O(log N) রিকার্সিভ কল স্ট্যাকের কারণে'
          },
          {
            en: 'O(N^2) due to pointer multiplication',
            bn: 'O(N^২) পয়েন্টার গুণনের কারণে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Count the new memory allocations: does reverseList allocate any new ListNode objects?',
          bn: 'নতুন মেমরি বরাদ্দ গণনা করুন: reverseList কি কোনো নতুন ListNode অবজেক্ট তৈরি করে?'
        },
        explanation: {
          en: 'The iterative reversal algorithm operates strictly in-place. It only allocates three pointer references on the call stack (prev, curr, nextTemp), requiring O(1) auxiliary space regardless of whether the list has 5 nodes or 5000000 nodes.',
          bn: 'এই অ্যালগরিদমটি সম্পূর্ণরূপে সরাসরি মেমরিতে কাজ করে। এটি স্ট্যাকে কেবল তিনটি পয়েন্টার রেফারেন্স (prev, curr, nextTemp) রাখে, ফলে তালিকায় ৫ টি নোড থাকুক বা ৫০০০০০০ টি নোড থাকুক, অতিরিক্ত মেমরি সর্বদা ধ্রুব O(1) থাকে।'
        }
      },
      {
        id: 'ps-q3',
        kind: 'mcq',
        topic: 'deletion-invariants',
        question: {
          en: 'In a singly linked list, why is it impossible to delete a target node in O(1) time if you are given only a pointer to that target node (without predecessor or special copy tricks)?',
          bn: 'সিঙ্গলি লিঙ্কড লিস্টে কেবল টার্গেট নোডের পয়েন্টার দেওয়া থাকলে (পূর্বসূরি ছাড়া) কেন সাধারণ নিয়মে O(1) সময়ে নোডটি মোছা অসম্ভব?'
        },
        options: [
          {
            en: 'Because singly linked nodes only point forward; finding the target predecessor to bypass it requires an O(N) traversal from head',
            bn: 'কারণ সিঙ্গলি লিঙ্কড নোড কেবল সামনের দিকে নির্দেশ করে; টার্গেট নোডকে এড়িয়ে যেতে তার আগের নোড খুঁজে পেতে head থেকে O(N) পথ হাঁটতে হয়'
          },
          {
            en: 'Because memory managers forbid deleting individual heap allocations',
            bn: 'কারণ মেমরি ম্যানেজার একক হিপ বরাদ্দ মোছন নিষিদ্ধ করে'
          },
          {
            en: 'Because target nodes are automatically protected by read-only CPU pages',
            bn: 'কারণ টার্গেট নোডগুলো স্বয়ংক্রিয়ভাবে শুধু-পাঠযোগ্য সিপিইউ পেজ দ্বারা সুরক্ষিত থাকে'
          },
          {
            en: 'Because target nodes must be decrypted with AES before deletion',
            bn: 'কারণ মোছনের আগে টার্গেট নোডকে এইএস দিয়ে ডিক্রিপ্ট করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'To vault over node B, whose next pointer do you need to modify? Can you reach node A from node B?',
          bn: 'নোড B কে এড়িয়ে যেতে কার next পয়েন্টার বদলাতে হয়? B থেকে কি A তে ফিরে যাওয়া সম্ভব?'
        },
        explanation: {
          en: 'To remove node B from a singly linked list, predecessor A must point to C (A.next = B.next). Since single links are unidirectional, there is no way to reach A from B without traversing from head, taking O(N) time.',
          bn: 'সিঙ্গলি লিঙ্কড লিস্ট থেকে B সরাতে হলে আগের নোড A কে C এর সাথে যুক্ত করতে হয় (A.next = B.next)। যেহেতু সংযোগ একমুখী, তাই B থেকে A তে ফেরার কোনো উপায় নেই; head থেকে হেঁটে আসতে O(N) সময় লাগে।'
        }
      },
      {
        id: 'ps-q4',
        kind: 'mcq',
        topic: 'sentinel-return',
        question: {
          en: 'After performing deletions or insertions on a list guarded by a sentinel node `dummy`, what must the function return as the new list head?',
          bn: 'একটি সেন্টিনেল নোড `dummy` দ্বারা সুরক্ষিত তালিকায় সন্নিবেশ বা মোছনের কাজ শেষ করার পর নতুন head হিসেবে ফাংশনের কী রিটার্ন করা উচিত?'
        },
        options: [
          {
            en: 'dummy.next because dummy was an auxiliary prefix and dummy.next points to the true first element of the modified list',
            bn: 'dummy.next কারণ dummy ছিল একটি অতিরিক্ত উপসর্গ এবং dummy.next পরিবর্তিত তালিকার প্রকৃত প্রথম উপাদানকে নির্দেশ করে'
          },
          {
            en: 'dummy itself so the caller is forced to inspect the sentinel value',
            bn: 'সরাসরি dummy যাতে ব্যবহারকারী সেন্টিনেল মান দেখতে বাধ্য হয়'
          },
          {
            en: 'null because sentinels automatically destroy the list upon completion',
            bn: 'null কারণ কাজ শেষে সেন্টিনেল স্বয়ংক্রিয়ভাবে তালিকা ধ্বংস করে দেয়'
          },
          {
            en: 'The total number of CPU clock cycles consumed',
            bn: 'ব্যবহৃত মোট সিপিইউ ক্লক সাইকেলের সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'What did dummy point to when it was created? Where does the real list start now?',
          bn: 'তৈরির সময় dummy কাকে নির্দেশ করেছিল? আর এখন আসল তালিকা কোথা থেকে শুরু হচ্ছে?'
        },
        explanation: {
          en: 'The dummy node is an internal implementation detail that should not be exposed to callers. Returning dummy.next provides the reference to the actual first element of the resulting list (even if the original head was deleted).',
          bn: 'ডামি নোডটি ভেতরের একটি কৌশল যা বাইরে প্রকাশ করা উচিত নয়। dummy.next রিটার্ন করলে ফলাফলের আসল প্রথম নোডের রেফারেন্স পাওয়া যায় (এমনকি মূল head মুছে গেলেও সঠিক নোড পাওয়া যায়)।'
        }
      },
      {
        id: 'ps-q5',
        kind: 'mcq',
        topic: 'reverse-termination',
        question: {
          en: 'When the iterative 3-pointer list reversal algorithm terminates because `curr === null`, which pointer holds the new head of the reversed list?',
          bn: '৩-পয়েন্টার ইন-প্লেস রিভার্সাল অ্যালগরিদমে যখন `curr === null` হয়ে লুপ শেষ হয়, তখন কোন পয়েন্টারটিতে উল্টানো তালিকার নতুন head সংরক্ষিত থাকে?'
        },
        options: [
          {
            en: 'prev because prev points to the last node that was processed, which is now the first node of the reversed list',
            bn: 'prev কারণ prev সর্বশেষ প্রক্রিয়াজাত নোডটিকে নির্দেশ করে, যা এখন উল্টানো তালিকার প্রথম নোড'
          },
          {
            en: 'curr because curr holds null at termination',
            bn: 'curr কারণ সমাপ্তিতে curr এর মান null থাকে'
          },
          {
            en: 'nextTemp because nextTemp stores the initial head permanently',
            bn: 'nextTemp কারণ nextTemp স্থায়ীভাবে প্রাথমিক head ধরে রাখে'
          },
          {
            en: 'A newly allocated sentinel node created by the operating system',
            bn: 'অপারেটিং সিস্টেমের তৈরি করা নতুন একটি সেন্টিনেল নোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about where prev and curr are positioned when curr steps past the final node.',
          bn: 'curr শেষ নোড অতিক্রম করে চলে গেলে prev এবং curr কোথায় থাকে তা চিন্তা করুন।'
        },
        explanation: {
          en: 'On the final iteration, curr is the tail node. After reversing its arrow to point to prev, prev advances to this tail node and curr advances to null. When the loop terminates, prev points to this original tail, which is the new head.',
          bn: 'সর্বশেষ ধাপে curr ছিল শেষ নোডটি। তার তীরটি উল্টে prev এর দিকে নির্দেশ করার পর prev এই শেষ নোডে আসে এবং curr চলে যায় null এ। লুপ শেষ হলে prev মূল শেষ নোডকে ধরে রাখে, যা উল্টানো তালিকার নতুন head।'
        }
      },
      {
        id: 'ps-q6',
        kind: 'mcq',
        topic: 'empty-list-reversal',
        question: {
          en: 'How does the 3-pointer list reversal algorithm behave when given an empty list (`head === null`)?',
          bn: 'খালি তালিকা (`head === null`) দেওয়া হলে ৩-পয়েন্টার রিভার্সাল অ্যালগরিদম কীভাবে আচরণ করে?'
        },
        options: [
          {
            en: 'It immediately skips the while loop because curr is null and safely returns prev (which is null) without error',
            bn: 'curr এর মান null হওয়ায় এটি সাথে সাথে while লুপ এড়িয়ে যায় এবং কোনো ত্রুটি ছাড়াই নিরাপদে prev (যা null) রিটার্ন করে'
          },
          {
            en: 'It crashes with an unhandled NullPointerException',
            bn: 'এটি একটি মারাত্মক নালপয়েন্টার এক্সেপশন ঘটিয়ে ক্র্যাশ করে'
          },
          {
            en: 'It enters an infinite loop trying to allocate an empty node',
            bn: 'খালি নোড তৈরির চেষ্টায় এটি একটি অসীম লুপে আটকে যায়'
          },
          {
            en: 'It prints a kernel warning message to standard error',
            bn: 'এটি স্ট্যান্ডার্ড এররে একটি কার্নেল সতর্কবার্তা পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trace the first line: prev = null; curr = head; while (curr !== null) ...',
          bn: 'প্রথম লাইনগুলো ট্রেস করুন: prev = null; curr = head; while (curr !== null) ...'
        },
        explanation: {
          en: 'Because curr is initialized to head (null), the while (curr !== null) condition evaluates to false on the first check. The loop never executes and the function immediately returns prev (null), handling empty lists gracefully without special branching.',
          bn: 'যেহেতু curr শুরুতে head (null) থাকে, তাই while (curr !== null) শর্তটি শুরুতেই মিথ্যা হয়। লুপের ভেতর একবারও না ঢুকে ফাংশনটি সরাসরি prev (null) রিটার্ন করে, ফলে কোনো বাড়তি if শর্ত ছাড়াই খালি তালিকা সামলানো যায়।'
        }
      }
    ]
  }
};
