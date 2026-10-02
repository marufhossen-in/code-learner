import type { Lesson } from '../../../lib/types';

export const theTwoTrayChanceryLesson: Lesson = {
  slug: 'the-two-tray-chancery',
  tech: 'queues',
  title: {
    en: 'Queue Using Stacks — The In/Out Transfer Invariant and Amortized Analysis',
    bn: 'স্ট্যাকের মাধ্যমে কিউ: ইন/আউট স্থানান্তর ইনভেরিয়েন্ট এবং অ্যামর্টাইজড বিশ্লেষণ'
  },
  summary: {
    en: 'A single stack reverses sequence order (LIFO). Reversing a sequence twice restores original temporal order (FIFO). By coupling two stacks—an inbox stack for ingestion and an outbox stack for dispensing—we construct a fully functional FIFO queue. While individual transfer operations cost O(k) steps, banker accounting proves that every element experiences at most 4 stack operations over its lifetime, establishing an amortized O(1) time complexity per operation.',
    bn: 'একটি একক স্ট্যাক ক্রমকে উল্টে দেয় (LIFO)। একটি ক্রমকে দুইবার উল্টালে তা পুনরায় তার আদি সময়ক্রমে (FIFO) ফিরে আসে। দুটি স্ট্যাকের সমন্বয়ে—উপাদান গ্রহণের জন্য ইনবক্স স্ট্যাক এবং উপাদান ছাড়ার জন্য আউটবক্স স্ট্যাক—আমরা একটি পূর্ণাঙ্গ ফিফো কিউ তৈরি করি। যদিও স্থানান্তরের সময় O(k) কাজ করতে হয়, ব্যাংকার্স মেথড প্রমাণ করে প্রতিটি উপাদান তার পুরো জীবনে সর্বোচ্চ ৪ টি স্ট্যাক অপারেশনের মুখোমুখি হয়, যা অপারেশনপ্রতি নিশ্চিত অ্যামর্টাইজড O(1) সময় দেয়।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-priority-throne',
    tech: 'queues',
    title: {
      en: 'Priority Queues: Binary Heaps, Tie-Breaking, and Event Simulators',
      bn: 'প্রায়োরিটি কিউ: বাইনারি হিপ, টাই-ব্রেকিং এবং ইভেন্ট সিমুলেশন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'double-reversal-algebra',
      text: {
        en: 'The Double-Reversal Principle: LIFO + LIFO = FIFO',
        bn: 'ডাবল রিভার্সাল নীতি: LIFO + LIFO = FIFO'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you push elements into a stack, the structure reverses arrival order by enforcing Last-In First-Out semantics. Popping those elements reverses the sequence a second time. In mathematics and computer science, applying a reversal permutation twice restores the original identity order. By configuring two stacks back to back, two LIFO (Last-In First-Out) components assemble a perfect FIFO (First-In First-Out) queue.',
        bn: 'যখন আপনি স্ট্যাকে উপাদান রাখেন, তখন এটি লাস্ট-ইন ফার্স্ট-আউট নিয়মের মাধ্যমে আগমনের ক্রমটি উল্টে ফেলে। সেই উপাদানগুলোকে পপ করে বের করলে ক্রমটি দ্বিতীয়বার উল্টে যায়। গণিত ও কম্পিউটার বিজ্ঞানে যেকোনো ক্রমকে দুইবার উল্টালে তা আদি অবস্থানে ফিরে আসে। পাশাপাশি দুটি স্ট্যাক যুক্ত করে দুটি লিফো বা LIFO (Last-In First-Out) কাঠামো দিয়ে একটি নিখুঁত ফিফো বা FIFO (First-In First-Out) কিউ গড়ে তোলা সম্ভব হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The architecture divides duties between two distinct stacks: an inbox stack and an outbox stack. New arrivals are pushed directly onto the inbox stack in O(1) time. Dequeue and peek requests are served from the outbox stack in O(1) time. The stacks only interact during a lazy transfer ceremony when the outbox is exhausted.',
        bn: 'এই স্থাপত্য দুটি পৃথক স্ট্যাকের মাঝে দায়িত্ব ভাগ করে দেয়: একটি ইনবক্স স্ট্যাক এবং একটি আউটবক্স স্ট্যাক। নতুন উপাদানগুলো সরাসরি ইনবক্স স্ট্যাকে O(1) সময়ে পুশ করা হয়। আর dequeue এবং peek এর অনুরোধগুলো আউটবক্স স্ট্যাক থেকে O(1) সময়ে পরিবেশিত হয়। কেবল আউটবক্সের ডাটা শেষ হলেই কেবল দুটি স্ট্যাকের মাঝে স্থানান্তর ঘটে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'inbox-outbox',
          def: {
            en: 'The two stack partitions: inbox receives new elements via push, while outbox dispenses elements via pop.',
            bn: 'দুটি স্ট্যাক অংশ: ইনবক্স নতুন উপাদান গ্রহণ করে এবং আউটবক্স উপাদান বের করে দেয়।'
          }
        },
        {
          term: 'lazy-transfer',
          def: {
            en: 'Moving elements from inbox to outbox only when outbox is completely empty upon a dequeue or peek request.',
            bn: 'আউটবক্স সম্পূর্ণ খালি থাকা অবস্থায় কেবল dequeue বা peek এর প্রয়োজনেই ইনবক্স থেকে ডাটা স্থানান্তর করা।'
          }
        },
        {
          term: 'amortized-constant',
          def: {
            en: 'A formal proof guaranteeing that the average cost of an operation over any sequence of length n is bounded by O(1).',
            bn: 'একটি গাণিতিক প্রমাণ যা নিশ্চিত করে যে n দৈর্ঘ্যের যেকোনো অপারেশনের ধারায় গড় খরচ O(1) এ সীমাবদ্ধ থাকে।'
          }
        },
        {
          term: 'okasaki-queue',
          def: {
            en: 'A purely functional queue design built from two immutable lists, widely used in Clojure, Erlang, and Haskell.',
            bn: 'দুটি অপরিবর্তনীয় তালিকা দিয়ে তৈরি ফাংশনাল কিউ ডিজাইন যা ক্লোজার, এরলাং এবং হাসকেলে ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'queue'
    },
    {
      type: 'heading',
      id: 'transfer-invariant',
      text: {
        en: 'The Transfer Invariant: Why Pouring Early Corrupts Order',
        bn: 'স্থানান্তর ইনভেরিয়েন্ট: কেন আগে ঢাললে ক্রম নষ্ট হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The correctness of a two-stack queue hinges on a single non-negotiable invariant: elements must transfer from inbox to outbox only when the outbox is completely empty. If an engineer transfers elements while the outbox still holds items, newly enqueued elements are dumped on top of older elements, permanently corrupting the FIFO arrival order.',
        bn: 'দুই স্ট্যাকের কিউয়ের নির্ভুলতা একটি অবিচ্ছেদ্য নিয়মের ওপর প্রতিষ্ঠিত: আউটবক্স সম্পূর্ণ খালি হলেই কেবল ইনবক্স থেকে আউটবক্সে উপাদান স্থানান্তর করা যাবে। আউটবক্সে উপাদান থাকা অবস্থায় যদি নতুন উপাদান স্থানান্তর করা হয়, তবে নতুন ডাটা পুরনো ডাটার উপরে চেপে বসবে, যা ফিফো ক্রমকে চিরতরে নষ্ট করে দেবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the outbox is empty and a dequeue is requested, every element in the inbox is popped and pushed into the outbox in a single while loop. This operation inverts the stack. The oldest element in the system—which entered the inbox first and sat at the bottom—now rests at the very top of the outbox, ready for instant removal.',
        bn: 'আউটবক্স খালি থাকা অবস্থায় dequeue কল করা হলে ইনবক্সের প্রতিটি উপাদান পপ করে আউটবক্সে পুশ করা হয়। এই প্রক্রিয়া স্ট্যাকটিকে উল্টে দেয়। সিস্টেমের সবচেয়ে পুরনো উপাদানটি—যা প্রথমে ইনবক্সে ঢুকে সবার নিচে পড়েছিল—এখন আউটবক্সের সবার উপরে উঠে আসে এবং তাৎক্ষণিকভাবে বের হওয়ার জন্য প্রস্তুত হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Trait', bn: 'স্থাপত্য বৈশিষ্ট্য' },
        { en: 'Naive Array (shift)', bn: 'সনাতন অ্যারে (shift)' },
        { en: 'Two-Stack Queue', bn: 'দুই-স্ট্যাক কিউ' }
      ],
      rows: [
        [
          { en: 'Enqueue Time Complexity', bn: 'এনকিউ সময় জটিলতা' },
          { en: 'O(1) amortized append', bn: 'O(1) পরিমার্জিত পুশ' },
          { en: 'O(1) worst-case push', bn: 'O(1) ওর্স্ট-কেস পুশ' }
        ],
        [
          { en: 'Dequeue Time Complexity', bn: 'ডিকিউ সময় জটিলতা' },
          { en: 'O(n) memory copy shift', bn: 'O(n) মেমোরি কপি শিফট' },
          { en: 'O(1) amortized time', bn: 'O(1) অ্যামর্টাইজড সময়' }
        ],
        [
          { en: 'Functional Language Support', bn: 'ফাংশনাল ভাষায় ব্যবহার' },
          { en: 'Requires mutable arrays', bn: 'পরিবর্তনশীল অ্যারে আবশ্যক' },
          { en: 'Native to immutable lists', bn: 'অপরিবর্তনীয় তালিকায় সহজাত' }
        ],
        [
          { en: 'Single Operation Worst Case', bn: 'একক অপারেশনে সর্বোচ্চ সময়' },
          { en: 'O(n) on every single dequeue', bn: 'প্রতিটি ডিকিউতে O(n)' },
          { en: 'O(k) on rare transfer batches', bn: 'বিরল স্থানান্তরে O(k)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'amortization-proof',
      text: {
        en: 'The Banker Accounting Proof: 4 Operations Per Lifetime',
        bn: 'ব্যাংকার্স মেথড প্রমাণ: জীবনে সর্বোচ্চ ৪ টি অপারেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Critics often ask why dequeue is considered O(1) if transferring k elements requires O(k) steps. Amortized analysis through the Banker method answers this rigorously. Every element admitted to the queue participates in exactly 4 stack operations during its entire lifecycle: 1 push into inbox, 1 pop from inbox, 1 push into outbox, and 1 final pop from outbox.',
        bn: 'অনেকে প্রশ্ন তোলেন k সংখ্যক উপাদান স্থানান্তরে O(k) সময় লাগলে কীভাবে dequeue কে O(1) বলা যায়। ব্যাংকার্স মেথডের মাধ্যমে অ্যামর্টাইজড বিশ্লেষণ এর সঠিক উত্তর দেয়। কিউতে আসা প্রতিটি উপাদান তার পুরো জীবনচক্রে ঠিক ৪ টি স্ট্যাক অপারেশনে অংশ নেয়: ইনবক্সে ১ বার পুশ, ইনবক্স থেকে ১ বার পপ, আউটবক্সে ১ বার পুশ এবং আউটবক্স থেকে ১ বার পপ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because an element is transferred across the boundary at most once, a batch of n queue operations costs at most 4 * n primitive stack actions. Averaging this cost over time yields strictly O(1) amortized cost per operation. No sequence of operations, however adversarial, can force the system to perform more than 4 steps per element.',
        bn: 'যেহেতু প্রতিটি উপাদান জীবনে কেবল একবারই স্থানান্তরিত হয়, তাই n সংখ্যক কিউ অপারেশনে মোট খরচ হয় সর্বোচ্চ ৪ * n টি স্ট্যাক কাজ। সময়ের সাথে এই খরচ ভাগ করলে প্রতিটি অপারেশনে গড়ে নিশ্চিত O(1) সময় লাগে। কোনো প্রতিকূল ক্রমেই উপাদানপ্রতি ৪ টির বেশি কাজ করানো সম্ভব নয়।'
      }
    },
    {
      type: 'heading',
      id: 'two-stack-impl',
      text: {
        en: 'Executable Two-Stack Queue Implementation',
        bn: 'দুই স্ট্যাকে কিউয়ের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript implementation demonstrates the two-stack queue. Notice how interleaving an enqueue during active dequeue operations safely deposits the new item into the inbox without disturbing the reversed outbox stream.',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি দুই স্ট্যাকের কিউ বাস্তবায়ন করে। খেয়াল করুন কীভাবে সক্রিয় ডিকিউ অপারেশনের মাঝে নতুন উপাদান এনকিউ করা হলেও তা নিরাপদে ইনবক্সে জমা হয় এবং আউটবক্সের ক্রমকে বিঘ্নিত করে না।'
      }
    },
    {
      type: 'code',
      code: `class TwoStackQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  // Enqueue always pushes to inbox in O(1)
  enqueue(val) {
    this.inbox.push(val);
  }

  // Dequeue pops from outbox in amortized O(1)
  dequeue() {
    this._transferIfEmpty();
    if (this.outbox.length === 0) return null;
    return this.outbox.pop();
  }

  // Inspect front element in amortized O(1)
  peek() {
    this._transferIfEmpty();
    if (this.outbox.length === 0) return null;
    return this.outbox[this.outbox.length - 1];
  }

  // Critical invariant: transfer ONLY when outbox is completely empty
  _transferIfEmpty() {
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  isEmpty() {
    return this.inbox.length === 0 && this.outbox.length === 0;
  }

  size() {
    return this.inbox.length + this.outbox.length;
  }
}

const q = new TwoStackQueue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log('Peek front element:', q.peek());
// Output: Peek front element: 10

console.log('Dequeued element 1:', q.dequeue());
// Output: Dequeued element 1: 10

// Interleaved enqueue: 40 enters inbox while outbox holds 20 and 30
q.enqueue(40);

console.log('Dequeued element 2:', q.dequeue());
// Output: Dequeued element 2: 20

console.log('Dequeued element 3:', q.dequeue());
// Output: Dequeued element 3: 30

console.log('Dequeued element 4 (transferred 40):', q.dequeue());
// Output: Dequeued element 4 (transferred 40): 40

console.log('Is queue empty?:', q.isEmpty());
// Output: Is queue empty?: true`
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Double reversal: Reversing arrival order across two LIFO stacks produces strict First-In First-Out temporal order.',
          bn: 'ডাবল রিভার্সাল: দুটি লিফো স্ট্যাকের মাধ্যমে ক্রমকে দুইবার উল্টালে নিখুঁত ফার্স্ট-ইন ফার্স্ট-আউট ক্রম পাওয়া যায়।'
        },
        {
          en: 'Empty-only trigger: Transfers from inbox to outbox must occur only when outbox is empty to preserve ordering.',
          bn: 'খালি অবস্থায় স্থানান্তর: ক্রম ঠিক রাখতে আউটবক্স সম্পূর্ণ খালি হলেই কেবল ইনবক্স থেকে ডাটা স্থানান্তর করতে হয়।'
        },
        {
          en: 'Amortized bound: Every element participates in exactly 4 stack operations, establishing guaranteed O(1) amortized time.',
          bn: 'অ্যামর্টাইজড সীমা: প্রতিটি উপাদান জীবনে সর্বোচ্চ ৪ টি স্ট্যাক অপারেশনে অংশ নেয়, যা নিশ্চিত O(1) গড় সময় দেয়।'
        },
        {
          en: 'Functional standard: Two-stack queues form the canonical immutable queue architecture in Erlang, Elixir, and Clojure.',
          bn: 'ফাংশনাল স্ট্যান্ডার্ড: এরলাং, এলিক্সির এবং ক্লোজারের মতো অপরিবর্তনীয় ভাষায় দুই-স্ট্যাক কিউ হলো আদর্শ কাঠামো।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tc-ex1',
      kind: 'mcq',
      topic: 'amortized-cost-bounds',
      question: {
        en: 'According to the Banker method, what is the maximum number of stack operations any individual element experiences in its lifetime in a two-stack queue?',
        bn: 'ব্যাংকার্স মেথড অনুসারে দুই-স্ট্যাকের কিউতে যেকোনো একটি উপাদান তার পুরো জীবনে সর্বোচ্চ কতটি স্ট্যাক অপারেশনের সম্মুখীন হয়?'
      },
      options: [
        {
          en: 'Exactly 4 operations: 1 push to inbox, 1 pop from inbox, 1 push to outbox, and 1 pop from outbox',
          bn: 'ঠিক ৪ টি অপারেশন: ইনবক্সে ১ বার পুশ, ইনবক্স থেকে ১ বার পপ, আউটবক্সে ১ বার পুশ এবং আউটবক্স থেকে ১ বার পপ'
        },
        {
          en: '100 operations',
          bn: '১০০ টি অপারেশন'
        },
        {
          en: '0 operations',
          bn: '০ টি অপারেশন'
        },
        {
          en: 'Infinitely many operations because items loop between stacks',
          bn: 'অসীম সংখ্যক অপারেশন কারণ উপাদানগুলো বারবার স্ট্যাকের মধ্যে ঘুরতে থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Count every time an item is pushed or popped: once into inbox, twice during transfer, once out of outbox.',
        bn: 'উপাদানটি কখন কখন পুশ বা পপ হয় তা গুনুন: ইনবক্সে একবার, স্থানান্তরে দুইবার এবং আউটবক্স থেকে একবার।'
      },
      explanation: {
        en: 'Every element is pushed to inbox, popped to transfer, pushed to outbox, and popped upon dequeue, totaling exactly 4 primitive operations.',
        bn: 'প্রতিটি উপাদান ইনবক্সে পুশ, স্থানান্তরে পপ, আউটবক্সে পুশ এবং ডিকিউতে পপ হয়, যার মোট সংখ্যা ঠিক ৪ টি।'
      }
    },
    {
      id: 'tc-ex2',
      kind: 'mcq',
      topic: 'transfer-invariant-condition',
      question: {
        en: 'What serious bug occurs if elements are transferred from inbox to outbox while the outbox still contains older elements?',
        bn: 'আউটবক্সে পুরনো উপাদান থাকা অবস্থাতেই ইনবক্স থেকে উপাদান স্থানান্তর করলে কোন মারাত্মক ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'The FIFO invariant breaks because newer elements are pushed on top of older elements in the outbox',
          bn: 'ফিফো ক্রম নষ্ট হয়ে যায় কারণ আউটবক্সের পুরনো উপাদানের উপরে নতুন উপাদানগুলো বসে যায়'
        },
        {
          en: 'The operating system automatically shuts down all network routers',
          bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে সমস্ত নেটওয়ার্ক রাউটার বন্ধ করে দেয়'
        },
        {
          en: 'The JavaScript array changes its internal character encoding to UTF-16',
          bn: 'জাভাস্ক্রিপ্ট অ্যারে তার অভ্যন্তরীণ এনকোডিং UTF-16 এ পরিবর্তন করে ফেলে'
        },
        {
          en: 'The CPU permanently deletes its L1 hardware cache registers',
          bn: 'সিপিইউ স্থায়ীভাবে তার এল১ হার্ডওয়্যার ক্যাশ রেজিস্টার মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Which element is popped first from a stack: the one at the top or the one at the bottom?',
        bn: 'স্ট্যাক থেকে কোন উপাদান আগে পপ হয়: উপরেরটি নাকি নিচেরটি?'
      },
      explanation: {
        en: 'Pouring onto a non-empty outbox buries older items under newer ones, violating the core First-In First-Out promise.',
        bn: 'আউটবক্সে ডাটা থাকা অবস্থায় স্থানান্তর করলে পুরনো ডাটা নিচে চাপা পড়ে, ফলে ফিফো নীতি ভঙ্গ হয়।'
      }
    },
    {
      id: 'tc-ex3',
      kind: 'mcq',
      topic: 'interleaved-enqueue-safety',
      question: {
        en: 'If items 10, 20, 30 are enqueued, one dequeue occurs (returning 10), and item 40 is enqueued, what does the next dequeue return?',
        bn: 'যদি ১০, ২০, ৩০ এনকিউ করা হয়, একবার ডিকিউ করা হয় (১০ ফেরত পায়), এবং এরপর ৪০ এনকিউ করা হয়, তবে পরবর্তী ডিকিউতে কী ফেরত আসবে?'
      },
      options: [
        {
          en: '20, because outbox still holds 20 and 30, and 40 waits safely in the inbox',
          bn: '২০, কারণ আউটবক্সে এখনও ২০ ও ৩০ আছে, এবং ৪০ নিরাপদে ইনবক্সে অপেক্ষা করছে'
        },
        {
          en: '40, because 40 was the most recently enqueued item',
          bn: '৪০, কারণ ৪০ হলো সবচেয়ে সম্প্রতি যুক্ত হওয়া উপাদান'
        },
        {
          en: '10, because elements are never removed from stacks',
          bn: '১০, কারণ উপাদান কখনো স্ট্যাক থেকে মোছা যায় না'
        },
        {
          en: 'null, because interleaving operations clears the queue',
          bn: 'null, কারণ মাঝে অপারেশন চালালে কিউ খালি হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'During the first dequeue, [20, 30] were transferred to outbox. 40 went to inbox. Where does dequeue pull from?',
        bn: 'প্রথম ডিকিউর সময় [২০, ৩০] আউটবক্সে গেছে। ৪০ গেছে ইনবক্সে। ডিকিউ কোথা থেকে ডাটা টানে?'
      },
      explanation: {
        en: 'The outbox top is 20. It is served immediately in O(1) time. Item 40 will not be transferred until 20 and 30 are both served.',
        bn: 'আউটবক্সের শীর্ষে ২০ আছে। এটি সাথে সাথে O(1) সময়ে বের হয়ে আসে। ২০ ও ৩০ শেষ না হওয়া পর্যন্ত ৪০ স্থানান্তরিত হবে না।'
      }
    }
  ],
  quiz: {
    id: 'two-tray-quiz',
    title: {
      en: 'Two-Stack Queues and Amortized Analysis Quiz',
      bn: 'দুই-স্ট্যাক কিউ এবং অ্যামর্টাইজড বিশ্লেষণ কুইজ'
    },
    questions: [
      {
        id: 'tc-q1',
        kind: 'mcq',
        topic: 'real-time-suitability',
        question: {
          en: 'Why is a two-stack queue generally avoided in hard real-time systems like audio DSP callbacks or flight control loops?',
          bn: 'অডিও ডিএসপি বা ফ্লাইট কন্ট্রোলের মতো রিয়েল-টাইম সিস্টেমে কেন সাধারণত দুই-স্ট্যাক কিউ এড়িয়ে চলা হয়?'
        },
        options: [
          {
            en: 'The rare O(k) transfer operation introduces an unpredictable latency spike that can breach strict microsecond deadlines',
            bn: 'কদাচিৎ ঘটা O(k) স্থানান্তর অপারেশন অপ্রত্যাশিত সময়ক্ষেপণ ঘটায় যা মাইক্রোসেকেন্ডের সময়সীমা ভঙ্গ করতে পারে'
          },
          {
            en: 'Two-stack queues require 64 CPU cores to execute',
            bn: 'দুই-স্ট্যাকের কিউ চালাতে ৬৪ টি সিপিইউ কোরের প্রয়োজন হয়'
          },
          {
            en: 'Stacks cannot store numbers smaller than 0',
            bn: 'স্ট্যাক ০ এর চেয়ে ছোট কোনো ঋণাত্মক সংখ্যা রাখতে পারে না'
          },
          {
            en: 'The compiler deletes both stacks whenever an audio packet arrives',
            bn: 'অডিও প্যাকেট আসা মাত্র কম্পাইলার উভয় স্ট্যাক মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about the worst-case time of a single dequeue that triggers a transfer.',
          bn: 'স্থানান্তর পরিচালনাকারী একটি একক ডিকিউর ওর্স্ট-কেস সময়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'While average cost is O(1), an individual transfer takes O(k) time, causing latency jitter unacceptable in real-time callbacks.',
          bn: 'গড় সময় O(1) হলেও একক স্থানান্তরে O(k) সময় লাগে, যা রিয়েল-টাইম অডিও সিস্টেমে ফ্রেম ড্রপের কারণ হতে পারে।'
        }
      },
      {
        id: 'tc-q2',
        kind: 'mcq',
        topic: 'okasaki-functional-queues',
        question: {
          en: 'Why is the two-stack queue pattern (Okasaki batched queue) the standard queue implementation in functional languages like Clojure and Erlang?',
          bn: 'ক্লোজার এবং এরলাংয়ের মতো ফাংশনাল ভাষায় কেন দুই-স্ট্যাক কিউ প্যাটার্নটি স্ট্যান্ডার্ড কিউ হিসেবে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Immutable singly linked lists support O(1) prepending (cons) with structural sharing, making two lists the optimal immutable FIFO structure',
            bn: 'অপরিবর্তনীয় একমুখী লিঙ্কড লিস্ট মেমোরি ভাগাভাগির মাধ্যমে O(1) পুশ সমর্থন করে, যা দুটি তালিকার সমন্বয়কে সেরা বানায়'
          },
          {
            en: 'Functional languages cannot perform arithmetic additions',
            bn: 'ফাংশনাল ভাষাগুলো কোনো গাণিতিক যোগ বা বিয়োগ করতে পারে না'
          },
          {
            en: 'Erlang programs are forbidden from running on 64-bit operating systems',
            bn: 'এরলাং প্রোগ্রামগুলোকে ৬৪-বিট অপারেটিং সিস্টেমে চলতে দেওয়া হয় না'
          },
          {
            en: 'Because immutable lists use 0 bytes of memory in physical RAM',
            bn: 'কারণ অপরিবর্তনীয় তালিকা ফিজিক্যাল র‍্যামে ০ বাইট মেমোরি খরচ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In functional programming, in-place memory mutation is disallowed, but list prepending is cheap.',
          bn: 'ফাংশনাল প্রোগ্রামিংয়ে মেমোরি সরাসরি পরিবর্তন করা যায় না, তবে শুরুতে উপাদান যোগ করা খুবই দ্রুত হয়।'
        },
        explanation: {
          en: 'Functional lists act like stacks. Combining two immutable lists allows building a FIFO queue without in-place array mutation.',
          bn: 'ফাংশনাল তালিকা স্ট্যাকের মতো আচরণ করে। দুটি তালিকা মিলিয়ে মেমোরি পরিবর্তন ছাড়াই চমৎকার ফিফো কিউ তৈরি হয়।'
        }
      },
      {
        id: 'tc-q3',
        kind: 'mcq',
        topic: 'empty-check-logic',
        question: {
          en: 'What condition accurately verifies that a TwoStackQueue is completely empty?',
          bn: 'কোন শর্তটি নিশ্চিত করে যে একটি TwoStackQueue সম্পূর্ণ খালি?'
        },
        options: [
          {
            en: 'inbox.length === 0 && outbox.length === 0',
            bn: 'inbox.length === 0 && outbox.length === 0'
          },
          {
            en: 'inbox.length === 0 only',
            bn: 'কেবল inbox.length === 0'
          },
          {
            en: 'outbox.length === 0 only',
            bn: 'কেবল outbox.length === 0'
          },
          {
            en: 'inbox.length === outbox.length',
            bn: 'inbox.length === outbox.length'
          }
        ],
        answer: 0,
        hint: {
          en: 'If inbox is empty but outbox has 5 elements, is the queue empty?',
          bn: 'ইনবক্স খালি হলেও আউটবক্সে যদি ৫ টি উপাদান থাকে, তবে কি কিউটি খালি?'
        },
        explanation: {
          en: 'Elements can reside in either the inbox or the outbox. Both must be checked to confirm the queue is empty.',
          bn: 'উপাদান ইনবক্স বা আউটবক্স যেকোনোটিতেই থাকতে পারে। তাই উভয় স্ট্যাক খালি হলেই কেবল কিউ খালি হয়।'
        }
      },
      {
        id: 'tc-q4',
        kind: 'mcq',
        topic: 'stack-from-queues-inefficiency',
        question: {
          en: 'Why is the reverse construction—building a Stack from two Queues—substantially less efficient in production?',
          bn: 'বিপরীত নির্মাণ—অর্থাৎ দুটি কিউ দিয়ে একটি স্ট্যাক তৈরি করা—কেন প্রোডাকশনে অনেক কম কার্যকর?'
        },
        options: [
          {
            en: 'Pushing requires rotating the entire queue in O(n) time on every single operation, destroying amortized efficiency',
            bn: 'প্রতিটি পুশে পুরো কিউকে O(n) সময়ে ঘোরাতে হয়, যা অ্যামর্টাইজড দক্ষতাকে পুরোপুরি নষ্ট করে'
          },
          {
            en: 'Queues cannot store text characters or object references',
            bn: 'কিউ কোনো টেক্সট বা অবজেক্ট রেফারেন্স সংরক্ষণ করতে পারে না'
          },
          {
            en: 'Operating system threads reject stacks that have more than 2 elements',
            bn: 'অপারেটিং সিস্টেম থ্রেড ২ টির বেশি উপাদান থাকা স্ট্যাক প্রত্যাখ্যান করে'
          },
          {
            en: 'Hardware CPUs cannot run queues backwards under any condition',
            bn: 'হার্ডওয়্যার সিপিইউ কোনো অবস্থাতেই কিউকে উল্টো দিকে চালাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'To make a queue act like a stack, the newest element must be moved to the front on every push.',
          bn: 'কিউকে স্ট্যাকের মতো আচরণ করাতে প্রতি পুশেই নতুন উপাদানকে ঘুরিয়ে সবার সামনে আনতে হয়।'
        },
        explanation: {
          en: 'In a two-queue stack, every push incurs an O(n) rotation cost, unlike the two-stack queue where transfer occurs once per element lifetime.',
          bn: 'দুই-কিউর স্ট্যাকে প্রতি পুশে O(n) রোটেশন খরচ হয়, যেখানে দুই-স্ট্যাক কিউতে স্থানান্তর জীবনে কেবল একবারই ঘটে।'
        }
      }
    ]
  }
};
