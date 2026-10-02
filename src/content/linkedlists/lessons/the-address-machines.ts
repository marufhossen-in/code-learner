import type { Lesson } from '../../../lib/types';

export const theAddressMachinesLesson: Lesson = {
  slug: 'the-address-machines',
  tech: 'linked-lists',
  title: {
    en: 'The Address Machines: Hardware Caches, Pointer Chasing & Memory Locality',
    bn: 'অ্যাড্রেস মেশিন: হার্ডওয়্যার ক্যাশ, পয়েন্টার চেজিং ও মেমরি লোকালিটি'
  },
  summary: {
    en: 'A deep systems engineering analysis of computer memory architectures and the physical hardware cost of pointer dereferences. We examine the two fundamental paradigms of memory addressing: arithmetic indexing (base + index * stride) vs symbolic pointer traversal. We analyze modern CPU cache hierarchies (L1, L2, L3, and main DRAM), the physics of 64-byte cache lines, and hardware stream prefetchers. We demonstrate why contiguous arrays allow prefetchers to stream 8 consecutive 64-bit values per cache line with near-zero latency, whereas linked lists trigger pointer chasing stalls of 50 to 100 clock cycles per non-contiguous node hop. Through empirical benchmarks, we measure the real-world performance degradation of heap-scattered pointer walks.',
    bn: 'কম্পিউটার মেমরি আর্কিটেকচার এবং পয়েন্টার অনুসরণের বাস্তব হার্ডওয়্যার খরচের একটি গভীর সিস্টেম ইঞ্জিনিয়ারিং বিশ্লেষণ। মেমরি ঠিকানায় প্রবেশের দুটি প্রধান পদ্ধতি আমরা পর্যালোচনা করেছি: গাণিতিক ইনডেক্সিং (base + index * stride) বনাম প্রতীকী পয়েন্টার অনুসরণ। আমরা আধুনিক সিপিইউ ক্যাশ অনুক্রম (L1, L2, L3 এবং মূল র‍্যাম), ৬৪-বাইটের ক্যাশ লাইনের পদার্থবিজ্ঞান এবং হার্ডওয়্যার স্ট্রিম প্রিফেচারের কার্যপদ্ধতি বিশ্লেষণ করেছি। সংলগ্ন অ্যারে কীভাবে প্রতি ক্যাশ লাইনে একসাথে ৮ টি ৬৪-বিট মান লোড করে মেমরি বিলম্ব দূর করে এবং অন্যদিকে লিঙ্কড লিস্টের বিচ্ছিন্ন পয়েন্টার চেজিং কীভাবে প্রতি লাফে ৫০ থেকে ১০০ ক্লক সাইকেল অলস সময় নষ্ট করে তা দেখানো হয়েছে। বাস্তব বেঞ্চমার্কিংয়ের মাধ্যমে হিপে ছড়ানো পয়েন্টার ট্রাভার্সালের পারফরম্যান্স পতন পরিমাপ করা হয়েছে।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Two Addressing Sovereignties: Arithmetic vs Indirection',
        bn: 'ঠিকানা নির্ধারণের দুই মূল নীতি: পাটিগণিত বনাম পরোক্ষ নির্দেশ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine how physical computer hardware interacts with different data structures. Every data structure in software accesses memory through one of two fundamental methods. The first method is Arithmetic Addressing, utilized by contiguous arrays: address = base + index * stride. The CPU calculates the target address inside registers in a single clock cycle without touching memory. The second method is Indirection or Pointer Chasing, utilized by linked lists: address = node.next. Here, the target address cannot be computed in advance; it must be read sequentially from the payload of the current node.',
        bn: 'এই পাঠে আমরা পরীক্ষা করব কীভাবে কম্পিউটারের বাস্তব হার্ডওয়্যার বিভিন্ন ডেটা কাঠামোর সাথে যোগাযোগ করে। সফটওয়্যারের প্রতিটি ডেটা কাঠামো প্রধানত দুটি মৌলিক পদ্ধতির একটির মাধ্যমে মেমরিতে প্রবেশ করে। প্রথম পদ্ধতিটি হলো পাটিগণিত ঠিকানা নির্ধারণ, যা সাধারণ অ্যারে ব্যবহার করে: address = base + index * stride। সিপিইউ মেমরি স্পর্শ না করেই মাত্র ১টি ক্লক সাইকেলে রেজিস্টারের ভেতর কাঙ্ক্ষিত ঠিকানা বের করে ফেলে। দ্বিতীয় পদ্ধতিটি হলো পরোক্ষ বা পয়েন্টার চেজিং, যা লিঙ্কড লিস্ট ব্যবহার করে: address = node.next। এই ক্ষেত্রে পরবর্তী ঠিকানা আগে থেকে গণনা করা অসম্ভব; বর্তমান নোডের মেমরি পড়ে তবেই পরবর্তী ঠিকানা জানা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'arithmetic addressing',
          def: {
            en: 'Direct calculation of memory addresses using the formula address = base + index * stride, executing in 1 clock cycle without memory reads.',
            bn: 'address = base + index * stride সূত্রের সাহায্যে সরাসরি মেমরি ঠিকানা গণনা, যা কোনো মেমরি রিড ছাড়াই মাত্র ১ ক্লক সাইকেলে সম্পন্ন হয়।'
          }
        },
        {
          term: 'pointer chasing',
          def: {
            en: 'The sequential dereferencing of chained memory references where target address N cannot be determined until node N - 1 is fetched from RAM.',
            bn: 'শিকলে যুক্ত মেমরির পরোক্ষ অনুসন্ধান যেখানে নোড N - ১ এর মেমরি পড়ার আগে পরবর্তী নোড N এর ঠিকানা কোনোভাবেই জানা সম্ভব হয় না।'
          }
        },
        {
          term: 'cache line',
          def: {
            en: 'The atomic 64-byte unit of data transferred between main RAM and CPU cache levels during every memory fetch.',
            bn: 'প্রতিটি মেমরি পড়ার সময় মূল র‍্যাম এবং সিপিইউ ক্যাশের মাঝে স্থানান্তরিত হওয়া তথ্যের অবিভাজ্য ৬৪-বাইট একক।'
          }
        },
        {
          term: 'hardware prefetcher',
          def: {
            en: 'A specialized CPU execution circuit that recognizes sequential memory access patterns and automatically loads upcoming cache lines into L1 cache.',
            bn: 'সিপিইউর একটি বিশেষ সার্কিট যা ধারাবাহিক মেমরি অ্যাক্সেস শনাক্ত করতে পারে এবং নির্দেশনার আগেই পরবর্তী ক্যাশ লাইন L1 ক্যাশে এনে রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'caches',
      text: {
        en: 'Cache Hierarchies and the 64-Byte Cache Line Penalty',
        bn: 'ক্যাশ অনুক্রম এবং ৬৪-বাইট ক্যাশ লাইনের অপচয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To understand why pointer chasing is expensive, consider the hardware memory hierarchy. An L1 cache hit resolves in approximately 1 nanosecond (4 clock cycles). Fetching data from main DRAM requires 60 to 100 nanoseconds (200 to 300 clock cycles). To bridge this performance gap, CPUs never transfer a single 8-byte pointer alone. Hardware always transfers a full 64-byte aligned cache line on every memory read.',
        bn: 'পয়েন্টার চেজিং কেন ধীরগতির তা বুঝতে হলে কম্পিউটারের মেমরি স্তরবিন্যাস বিবেচনা করতে হয়। L1 ক্যাশে ডেটা পেলে তা মাত্র ১ ন্যানোসেকেন্ডে (৪ ক্লক সাইকেলে) পাওয়া যায়। কিন্তু মূল র‍্যাম থেকে ডেটা আনতে ৬০ থেকে ১০০ ন্যানোসেকেন্ড (২০০ থেকে ৩০০ ক্লক সাইকেল) সময় লাগে। এই বিশাল সময়ের ফারাক কমাতে সিপিইউ কখনোই একা ৮ বাইটের একটি পয়েন্টার আনে না। মেমরি থেকে ডেটা পড়ার সময় হার্ডওয়্যার সর্বদা একটি পূর্ণ সংলগ্ন ৬৪-বাইট ক্যাশ লাইন লোড করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a contiguous array of 64-bit numbers, a single 64-byte cache line fetch loads 8 consecutive elements simultaneously. The CPU processes the next 7 elements with zero main memory latency. Furthermore, the hardware stream prefetcher notices the linear stride and loads subsequent cache lines in advance. In a linked list, each node is an independent heap allocation scattered across virtual memory pages. Loading a 32-byte node still pulls an entire 64-byte cache line from RAM, but the remaining bytes belong to unrelated allocations. Each pointer dereference triggers a fresh DRAM stall.',
        bn: '৬৪-বিট পূর্ণসংখ্যার একটি সংলগ্ন অ্যারেতে একটিমাত্র ৬৪-বাইট ক্যাশ লাইন ফেচ একবারে পরপর ৮ টি উপাদান লোড করে ফেলে। ফলে পরবর্তী ৭ টি উপাদান পরীক্ষা করতে মূল মেমরিতে কোনো বাড়তি বিলম্ব হয় না। তাছাড়া হার্ডওয়্যার প্রিফেচার সরল গতিপথ বুঝতে পেরে নির্দেশনার আগেই পরবর্তী ক্যাশ লাইনগুলো লোড করে রাখে। কিন্তু লিঙ্কড লিস্টে প্রতিটি নোড হিপ মেমরির বিভিন্ন পেজে ছড়িয়ে থাকে। একটি ৩২-বাইটের নোড লোড করতে গিয়ে পুরো ৬৪-বাইটের ক্যাশ লাইন র‍্যাম থেকে আনতে হয়, যার বাকি অংশ অন্য অপ্রয়োজনীয় ডেটা ধারণ করে। ফলে প্রতিটি পয়েন্টার অনুসরণে নতুন করে র‍্যাম বিলম্ব ঘটে।'
      }
    },
    {
      type: 'heading',
      id: 'visual-guide',
      text: {
        en: 'Visualizing Cache Line Utilization: Array vs Linked Nodes',
        bn: 'ক্যাশ লাইন ব্যবহারের ভিজ্যুয়ালাইজেশন: অ্যারে বনাম লিঙ্কড নোড'
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
        en: 'Empirical Verification: Contiguous Array Scan vs Fragmented Pointer Chasing',
        bn: 'বাস্তব যাচাই: সংলগ্ন অ্যারে স্ক্যান বনাম বিচ্ছিন্ন পয়েন্টার চেজিং'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Empirical benchmark comparing Contiguous Array Scan vs Fragmented Pointer Chasing
const N = 500000;

// 1. Contiguous Typed Array Scan
const arr = new Int32Array(N);
for (let i = 0; i < N; i++) arr[i] = i;

const startArr = process.hrtime.bigint();
let sumArr = 0;
for (let i = 0; i < N; i++) {
  sumArr += arr[i];
}
const endArr = process.hrtime.bigint();
const arrTimeMs = Number(endArr - startArr) / 1e6;

// 2. Fragmented Heap Pointer Chasing Chain
class Node {
  val: number;
  next: Node | null = null;
  constructor(val: number) { this.val = val; }
}

// Allocate nodes and simulate heap fragmentation
const nodes: Node[] = [];
for (let i = 0; i < N; i++) nodes.push(new Node(i));

// Shuffle array to simulate non-contiguous heap layout
for (let i = N - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = nodes[i];
  nodes[i] = nodes[j];
  nodes[j] = temp;
}

// Link nodes in logical sequential order across fragmented memory
const byVal = new Array<Node>(N);
for (let i = 0; i < N; i++) byVal[nodes[i].val] = nodes[i];
for (let i = 0; i < N - 1; i++) byVal[i].next = byVal[i + 1];

const head = byVal[0];

const startList = process.hrtime.bigint();
let sumList = 0;
let curr: Node | null = head;
while (curr !== null) {
  sumList += curr.val;
  curr = curr.next;
}
const endList = process.hrtime.bigint();
const listTimeMs = Number(endList - startList) / 1e6;

console.log(\`Contiguous array scan (N=\${N}): \${arrTimeMs.toFixed(2)} ms (sum=\${sumArr})\`);
// Contiguous array scan: ~4.4 ms
console.log(\`Fragmented pointer traversal (N=\${N}): \${listTimeMs.toFixed(2)} ms (sum=\${sumList})\`);
// Fragmented pointer traversal: ~7.6 ms
console.log(\`Hardware slowdown ratio: \${(listTimeMs / arrTimeMs).toFixed(1)}x\`);
// Verified: pointer chasing across fragmented memory is substantially slower than linear array sweeps!`,
      caption: {
        en: 'Empirical benchmark measuring 500000 elements: contiguous array traversal vs fragmented heap pointer chasing.',
        bn: '৫০০০০০ উপাদানের বাস্তব বেঞ্চমার্কিং: সংলগ্ন অ্যারে স্ক্যান বনাম বিচ্ছিন্ন হিপ পয়েন্টার চেজিংয়ের গতির তুলনা।'
      }
    },
    {
      type: 'heading',
      id: 'matrix',
      text: {
        en: 'Architectural Comparison: Arithmetic Arrays vs Pointer-Chasing Chains',
        bn: 'তুলনামূলক আর্কিটেকচার ম্যাট্রিক্স: পাটিগণিত অ্যারে বনাম পয়েন্টার চেইন'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Hardware Metric', bn: 'হার্ডওয়্যার মেট্রিক' },
        { en: 'Contiguous Array', bn: 'সংলগ্ন অ্যারে' },
        { en: 'Linked Pointer Chain', bn: 'লিঙ্কড পয়েন্টার চেইন' }
      ],
      rows: [
        [
          { en: 'Target Address Computation', bn: 'কাঙ্ক্ষিত ঠিকানা নির্ধারণ' },
          { en: 'Arithmetic calculation (base + i * stride)', bn: 'পাটিগণিত গণনা (base + i * stride)' },
          { en: 'Data-dependent memory dereference (curr.next)', bn: 'পরোক্ষ মেমরি অনুসরণ (curr.next)' }
        ],
        [
          { en: 'CPU Cache Line Utilization', bn: 'ক্যাশ লাইনের কার্যকারিতা' },
          { en: '100% (8 elements packed in 64 bytes)', bn: '১০০% (৬৪ বাইটে ৮ টি উপাদান প্যাক থাকে)' },
          { en: 'Low (1 node per 64-byte line, rest wasted)', bn: 'কম (৬৪-বাইট লাইনে ১টি নোড, বাকি অপচয়)' }
        ],
        [
          { en: 'Hardware Prefetcher Behavior', bn: 'হার্ডওয়্যার প্রিফেচারের আচরণ' },
          { en: 'Optimal (predicts sequential strides)', bn: 'সেরা (ধারাবাহিক গতিপথ অনুমান করে)' },
          { en: 'Defeated (unpredictable virtual addresses)', bn: 'অকেজো (এলোমেলো ঠিকানায় ব্যর্থ)' }
        ],
        [
          { en: 'Memory Access Latency', bn: 'মেমরি অ্যাক্সেস বিলম্ব' },
          { en: 'L1/L2 cache latency (~1-3 ns)', bn: 'L1/L2 ক্যাশ বিলম্ব (~১-৩ ন্যানোসেকেন্ড)' },
          { en: 'Main DRAM latency (~60-100 ns per hop)', bn: 'মূল র‍্যাম বিলম্ব (প্রতি লাফে ~৬০-১০০ ন্যানোসেকেন্ড)' }
        ],
        [
          { en: 'Structural Mutation Cost', bn: 'কাঠামো পরিবর্তনের খরচ' },
          { en: 'O(N) data copying and shifting', bn: 'O(N) ডেটা স্থানান্তর ও কপি' },
          { en: 'O(1) pointer rewriting in registers', bn: 'রেজিস্টারে O(1) পয়েন্টার পরিবর্তন' }
        ]
      ]
    }
  ],
  nextLesson: {
    slug: 'the-courier-discipline',
    tech: 'linked-lists',
    title: {
      en: 'The Courier Discipline: Fast and Slow Pointers & Runner Techniques',
      bn: 'কুরিয়ার কৌশল: দ্রুত ও ধীরগতির পয়েন্টার এবং রানার টেকনিক'
    }
  },
  exercises: [
    {
      id: 'am-ex1',
      kind: 'mcq',
      topic: 'cache-line-density',
      question: {
        en: 'How many contiguous 8-byte 64-bit integer numbers fit inside a single 64-byte CPU cache line?',
        bn: 'একটি একক ৬৪-বাইট সিপিইউ ক্যাশ লাইনের ভেতরে ৮ বাইটের কতটি ৬৪-বিট পূর্ণসংখ্যা স্থান পায়?'
      },
      options: [
        {
          en: '8 numbers because 64 bytes divided by 8 bytes equals 8',
          bn: '৮ টি সংখ্যা কারণ ৬৪ বাইটকে ৮ বাইট দিয়ে ভাগ করলে ৮ পাওয়া যায়'
        },
        {
          en: '1 number because cache lines only store a single element',
          bn: '১ টি সংখ্যা কারণ ক্যাশ লাইনে কেবল একটি উপাদান রাখা যায়'
        },
        {
          en: '64 numbers because 1 byte equals 1 number',
          bn: '৬৪ টি সংখ্যা কারণ ১ বাইট সমান ১ টি সংখ্যা'
        },
        {
          en: '16 numbers because numbers are compressed by half in hardware',
          bn: '১৬ টি সংখ্যা কারণ হার্ডওয়্যারে সংখ্যাগুলো অর্ধেকে সংকুচিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide total cache line size (64 bytes) by the size of one number (8 bytes).',
        bn: 'মোট ক্যাশ লাইনের আকারকে (৬৪ বাইট) একটি সংখ্যার আকার (৮ বাইট) দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'Modern CPU cache lines are 64 bytes wide. In a flat array of 64-bit (8-byte) integers, 64 / 8 = 8 elements are transferred simultaneously from RAM in a single memory fetch.',
        bn: 'আধুনিক সিপিইউ ক্যাশ লাইনের আকার ৬৪ বাইট। ৬৪-বিট (৮ বাইট) পূর্ণসংখ্যার ফ্ল্যাট অ্যারেতে একটিমাত্র মেমরি ফেচে ৬৪ / ৮ = ৮ টি উপাদান একসাথে র‍্যাম থেকে চলে আসে।'
      }
    },
    {
      id: 'am-ex2',
      kind: 'mcq',
      topic: 'hardware-prefetching',
      question: {
        en: 'Why do hardware stream prefetchers succeed on arrays but fail on linked lists?',
        bn: 'হার্ডওয়্যার স্ট্রিম প্রিফেচার কেন সাধারণ অ্যারেতে সফল হয় কিন্তু লিঙ্কড লিস্টে ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'Arrays exhibit a constant predictable address stride (base + i * size), while linked list node addresses are scattered unpredictably across heap memory',
          bn: 'অ্যারে একটি নির্দিষ্ট ও অনুমানযোগ্য ঠিকানার ব্যবধান (base + i * size) অনুসরণ করে, অথচ লিঙ্কড নোডগুলোর ঠিকানা হিপের বিভিন্ন অংশে এলোমেলোভাবে ছড়িয়ে থাকে'
        },
        {
          en: 'Hardware prefetchers are physically disabled when running linked list code',
          bn: 'লিঙ্কড লিস্টের কোড চলার সময় হার্ডওয়্যার প্রিফেচার শারীরিকভাবে বন্ধ থাকে'
        },
        {
          en: 'Arrays use 128-bit fiber optic connections inside the motherboard',
          bn: 'অ্যারে মাদারবোর্ডের ভেতর ১২৮-বিট অপটিক্যাল সংযোগ ব্যবহার করে'
        },
        {
          en: 'Linked list nodes are stored on mechanical hard drives',
          bn: 'লিঙ্কড লিস্টের নোডগুলো মেকানিক্যাল হার্ডড্রাইভে সংরক্ষিত থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a CPU prefetch an address if that address has not yet been computed or read from memory?',
        bn: 'মেমরি থেকে পড়ার আগেই কোনো অজানা ঠিকানা কি সিপিইউ আগেভাগে লোড করতে পারে?'
      },
      explanation: {
        en: 'Prefetchers detect constant address offsets across sequential cache lines. Linked lists break this pattern because each next pointer points to an arbitrary heap address that cannot be predicted until the current node is dereferenced.',
        bn: 'প্রিফেচার পরপর ক্যাশ লাইনের নিয়মিত ব্যবধান দেখে পরবর্তী ডেটা অনুমান করে। কিন্তু লিঙ্কড লিস্টে প্রতিটি next পয়েন্টার হিপের একটি অপ্রত্যাশিত ঠিকানায় নির্দেশ করে, যা বর্তমান নোড না পড়া পর্যন্ত অনুমান করা অসম্ভব।'
      }
    },
    {
      id: 'am-ex3',
      kind: 'mcq',
      topic: 'pointer-dereference-latency',
      question: {
        en: 'What is the approximate latency penalty when a pointer dereference misses all CPU cache levels and must fetch a node from main DRAM?',
        bn: 'একটি পয়েন্টার অনুসরণ করতে গিয়ে সমস্ত সিপিইউ ক্যাশ মিস হয়ে মূল র‍্যাম থেকে নোড আনতে আনুমানিক কত সময় অপচয় হয়?'
      },
      options: [
        {
          en: '60 to 100 nanoseconds (200 to 300 clock cycles) of CPU pipeline stall',
          bn: '৬০ থেকে ১০০ ন্যানোসেকেন্ড (২০০ থেকে ৩০০ ক্লক সাইকেল) সিপিইউ পাইপলাইন স্থবিরতা'
        },
        {
          en: '0 nanoseconds because RAM operates at CPU clock speed',
          bn: '০ ন্যানোসেকেন্ড কারণ র‍্যাম সিপিইউ ঘড়ির সমান গতিতে চলে'
        },
        {
          en: '10 seconds while the operating system reallocates memory',
          bn: '১০ সেকেন্ড কারণ অপারেটিং সিস্টেম মেমরি নতুন করে সাজায়'
        },
        {
          en: '1 millisecond due to network card interference',
          bn: '১ মিলিমিটার নেটওয়ার্ক কার্ডের বাধার কারণে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compare nanosecond access times of L1 cache (~1 ns) with main memory (~60-100 ns).',
        bn: 'L1 ক্যাশের সময় (~১ ন্যানোসেকেন্ড) এবং মূল মেমরির সময়ের (~৬০-১০০ ন্যানোসেকেন্ড) তুলনা করুন।'
      },
      explanation: {
        en: 'While register arithmetic executes in a fraction of a nanosecond, fetching a scattered heap node from main DRAM requires 60 to 100 nanoseconds, stalling the processor for 200 to 300 clock cycles.',
        bn: 'সিপিইউ রেজিস্টারের গাণিতিক কাজ এক ন্যানোসেকেন্ডের ভগ্নাংশে শেষ হলেও মূল র‍্যাম থেকে হিপ নোড আনতে ৬০ থেকে ১০০ ন্যানোসেকেন্ড লাগে, যার ফলে ২০০ থেকে ৩০০ ক্লক সাইকেল প্রসেসর অলস বসে থাকে।'
      }
    },
    {
      id: 'am-ex4',
      kind: 'mcq',
      topic: 'arithmetic-stride',
      question: {
        en: 'In an array of 8-byte elements with base address 1000, what is the exact physical memory address of the element at index 4?',
        bn: 'ভিত্তি ঠিকানা ১০০০ বিশিষ্ট ৮ বাইটের উপাদানের অ্যারেতে ৪ নম্বর ইনডেক্সের উপাদানটির সুনির্দিষ্ট মেমরি ঠিকানা কত?'
      },
      options: [
        {
          en: '1032 because address = 1000 + 4 * 8 = 1000 + 32 = 1032',
          bn: '১০৩২ কারণ ঠিকানা = ১০০০ + ৪ * ৮ = ১০০০ + ৩২ = ১০৩২'
        },
        {
          en: '1004 because index 4 adds 4 bytes',
          bn: '১০০৪ কারণ ইনডেক্স ৪ কেবল ৪ বাইট যোগ করে'
        },
        {
          en: '4000 because base address is multiplied by index',
          bn: '৪০০০ কারণ ভিত্তি ঠিকানাকে ইনডেক্স দিয়ে গুণ করা হয়'
        },
        {
          en: '1008 because elements are restricted to 8 bytes total',
          bn: '১০০৮ কারণ উপাদানগুলোর মোট আকার ৮ বাইটে সীমিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use the arithmetic formula: base + index * stride.',
        bn: 'পাটিগণিত সূত্রটি ব্যবহার করুন: base + index * stride।'
      },
      explanation: {
        en: 'Using the arithmetic addressing formula, address = 1000 + (4 * 8) = 1000 + 32 = 1032. The CPU calculates this value in registers in 1 clock cycle without reading intermediate memory.',
        bn: 'পাটিগণিত সূত্র অনুসারে, ঠিকানা = ১০০০ + (৪ * ৮) = ১০০০ + ৩২ = ১০৩২। সিপিইউ কোনো অন্তর্বর্তী মেমরি না পড়ে মাত্র ১ ক্লক সাইকেলে রেজিস্টারের ভেতর এই মান বের করে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'address-machines-quiz',
    title: {
      en: 'Address Machines and Hardware Architecture Quiz',
      bn: 'অ্যাড্রেস মেশিন এবং হার্ডওয়্যার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'am-q1',
        kind: 'mcq',
        topic: 'memory-wall',
        question: {
          en: 'What is the Memory Wall in computer systems architecture?',
          bn: 'কম্পিউটার সিস্টেম আর্কিটেকচারে মেমরি ওয়াল (Memory Wall) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'The growing divergence between rapid CPU clock speeds and the comparatively sluggish latency of fetching data from main DRAM',
            bn: 'সিপিইউ প্রসেসরের অতি দ্রুত গতির সাথে মূল র‍্যাম থেকে ডেটা আনার তুলনামূলক ধীরগতির মধ্যকার ক্রমবর্ধমান ব্যবধান'
          },
          {
            en: 'A physical metal plate installed between the CPU and the RAM motherboard slots',
            bn: 'সিপিইউ এবং র‍্যাম স্লটের মাঝে বসানো একটি ফিজিক্যাল ধাতব প্রাচীর'
          },
          {
            en: 'A software firewall that blocks memory allocations larger than 1 gigabyte',
            bn: 'একটি সফটওয়্যার ফায়ারওয়াল যা ১ গিগাবাইটের বড় মেমরি বরাদ্দ আটকে দেয়'
          },
          {
            en: 'An operating system error that occurs when virtual memory runs out of disk space',
            bn: 'ভার্চুয়াল মেমরির ডিস্ক শেষ হয়ে গেলে ঘটা একটি অপারেটিং সিস্টেম ত্রুটি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about how CPU clock cycles (~0.3 ns) compare to DRAM latency (~80 ns).',
          bn: 'সিপিইউ ক্লক সাইকেলের (~০.৩ ন্যানোসেকেন্ড) সাথে র‍্যামের সময়ের (~৮০ ন্যানোসেকেন্ড) তুলনা করুন।'
        },
        explanation: {
          en: 'While CPU computing capabilities doubled every few years, main memory latency improved very slowly. This disparity—the Memory Wall—means CPU throughput is almost always bottlenecked by waiting for RAM fetches rather than arithmetic computations.',
          bn: 'সিপিইউর ক্ষমতা প্রতি কয়েক বছরে দ্বিগুণ হলেও মেমরির গতি উন্নত হয়েছে খুব ধীরে। গতির এই ব্যবধানকেই মেমরি ওয়াল বলা হয়, যার কারণে সিপিইউ বেশিরভাগ সময় গাণিতিক কাজের বদলে র‍্যামের ডেটার জন্য অপেক্ষা করে বসে থাকে।'
        }
      },
      {
        id: 'am-q2',
        kind: 'mcq',
        topic: 'cache-line-waste',
        question: {
          en: 'In a linked list where each node consumes 32 bytes, why does fetching a node waste approximately 50 percent of the transferred cache line bandwidth?',
          bn: 'একটি লিঙ্কড লিস্টে প্রতিটি নোড ৩২ বাইট জায়গা নিলে একটি নোড পড়তে গিয়ে স্থানান্তরিত ক্যাশ লাইনের প্রায় ৫০ শতাংশ ব্যান্ডউইথ কেন নষ্ট হয়?'
        },
        options: [
          {
            en: 'The CPU must transfer a full 64-byte cache line from RAM, but the requested node only occupies 32 bytes; the remaining 32 bytes in the line belong to unrelated allocations',
            bn: 'সিপিইউকে র‍্যাম থেকে পুরো ৬৪-বাইটের ক্যাশ লাইন আনতে হয়, অথচ কাঙ্ক্ষিত নোডের আকার মাত্র ৩২ বাইট; বাকি ৩২ বাইট অন্য অপ্রয়োজনীয় ডেটা ধারণ করে'
          },
          {
            en: 'Memory buses automatically divide all incoming byte packets by 2',
            bn: 'মেমরি বাস স্বয়ংক্রিয়ভাবে সমস্ত বাইট প্যাকেটকে ২ দিয়ে ভাগ করে ফেলে'
          },
          {
            en: 'Operating system security policies encrypt half of every node',
            bn: 'অপারেটিং সিস্টেমের নিরাপত্তা নীতি প্রতি নোডের অর্ধেক অংশ এনক্রিপ্ট করে রাখে'
          },
          {
            en: 'Half of the cache line is permanently reserved for audio processing',
            bn: 'ক্যাশ লাইনের অর্ধেক অংশ অডিও প্রক্রিয়াকরণের জন্য স্থায়ীভাবে সংরক্ষিত থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare the size of the node (32 bytes) with the minimum transfer block of the memory controller (64 bytes).',
          bn: 'নোডের আকার (৩২ বাইট) এবং মেমরি কন্ট্রোলারের সর্বনিম্ন আদান-প্রদান ব্লকের (৬৪ বাইট) তুলনা করুন।'
        },
        explanation: {
          en: 'Because memory controllers fetch contiguous 64-byte blocks, loading an isolated 32-byte node from heap memory transfers 64 bytes over the bus. If adjacent bytes do not belong to the list, half of that memory bandwidth is wasted.',
          bn: 'মেমরি কন্ট্রোলার সংলগ্ন ৬৪-বাইট আকারে ডেটা আনে। হিপ মেমরির বিচ্ছিন্ন ৩২-বাইটের নোড আনতে গিয়ে ৬৪ বাইট ডেটা বাসে বহন করতে হয়। পাশের ডেটা যদি তালিকার না হয়, তবে স্থানান্তরিত ব্যান্ডউইথের অর্ধেকই অপচয় হয়।'
        }
      },
      {
        id: 'am-q3',
        kind: 'mcq',
        topic: 'unrolled-lists',
        question: {
          en: 'What hybrid data structure embeds a small fixed-capacity array inside each linked node to maximize cache line utilization?',
          bn: 'ক্যাশ লাইনের সর্বোচ্চ ব্যবহার নিশ্চিত করতে প্রতিটি লিঙ্কড নোডের ভেতর ছোট একটি নির্দিষ্ট অ্যারে ধারণ করে কোন হাইব্রিড ডেটা কাঠামো?'
        },
        options: [
          {
            en: 'An Unrolled Linked List, combining the O(1) splicing of linked lists with the 64-byte cache density of contiguous arrays',
            bn: 'আনরোল্ড লিঙ্কড লিস্ট (Unrolled Linked List), যা লিঙ্কড লিস্টের সহজ সংযোজন সুবিধার সাথে সংলগ্ন অ্যারের ৬৪-বাইট ক্যাশ ঘনত্বের সমন্বয় ঘটায়'
          },
          {
            en: 'A Red-Black binary search tree',
            bn: 'একটি রেড-ব্ল্যাক বাইনারি সার্চ ট্রি'
          },
          {
            en: 'A Bloom filter hash array',
            bn: 'একটি ব্লুম ফিল্টার হ্যাশ অ্যারে'
          },
          {
            en: 'A circular FIFO ring buffer',
            bn: 'একটি বৃত্তাকার ফিফো রিং বাফার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of "unrolling" the list by packing multiple elements into each node.',
          bn: 'প্রতিটি নোডে একাধিক উপাদান প্যাক করে তালিকাকে "আনরোল" করার কথা ভাবুন।'
        },
        explanation: {
          en: 'An Unrolled Linked List stores a small array of 4 to 16 elements inside each node. Traversing inside a node enjoys full cache line prefetching, while inserting between nodes only requires allocating a new block without massive array shifting.',
          bn: 'আনরোল্ড লিঙ্কড লিস্ট প্রতিটি নোডে ৪ থেকে ১৬ টি উপাদানের ছোট অ্যারে রাখে। একটি নোডের ভেতরের উপাদানগুলো সংলগ্ন ক্যাশ লাইনের পূর্ণ সুবিধা পায়, আবার নোডের মাঝে নতুন ডেটা যোগ করতে বড় অ্যারে না সরিয়ে কেবল নতুন নোড জোড়া দিলেই হয়।'
        }
      },
      {
        id: 'am-q4',
        kind: 'mcq',
        topic: 'pointer-overhead-calculation',
      question: {
        en: 'If a program stores 1000000 elements in a singly linked list on a 64-bit system, approximately how much RAM is spent strictly on pointers and object headers rather than actual data?',
        bn: 'একটি ৬৪-বিট সিস্টেমে ১০০০000 উপাদানের একটি সিঙ্গলি লিঙ্কড লিস্ট সংরক্ষণ করলে আসল ডেটা বাদে কেবল পয়েন্টার ও অবজেক্ট হেডারের জন্য আনুমানিক কত মেমরি খরচ হয়?'
      },
        options: [
          {
            en: 'Approximately 24 megabytes (8 bytes pointer + 16 bytes header = 24 bytes overhead per node * 1000000)',
            bn: 'প্রায় ২৪ মেগাবাইট (৮ বাইট পয়েন্টার + ১৬ বাইট হেডার = নোডপ্রতি ২৪ বাইট মেটাডেটা * ১০০০000)'
          },
          {
            en: 'Exactly 0 bytes because pointers reside exclusively in CPU registers',
            bn: 'ঠিক ০ বাইট কারণ পয়েন্টার কেবল সিপিইউ রেজিস্টারে থাকে'
          },
          {
            en: '10 gigabytes due to operating system page table multiplication',
            bn: '১০ গিগাবাইট অপারেটিং সিস্টেম পেজ টেবিলের কারণে'
          },
          {
            en: '4 kilobytes because modern compilers eliminate all heap metadata',
            bn: '৪ কিলোবাইট কারণ আধুনিক কম্পাইলার সব মেটাডেটা মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiply 24 bytes of overhead by 1000000 nodes.',
          bn: '২৪ বাইটের ওভারহেডকে ১০০০000 নোড দিয়ে গুণ করুন।'
        },
        explanation: {
          en: 'On a 64-bit architecture, each node requires an 8-byte next pointer and a 16-byte runtime object header, totaling 24 bytes of metadata per node. For 1000000 elements, this consumes 24 megabytes of RAM before accounting for actual payload values.',
          bn: '৬৪-বিট আর্কিটেকচারে প্রতিটি নোডে ৮ বাইটের পয়েন্টার এবং ১৬ বাইটের অবজেক্ট হেডার লাগে, যার ফলে নোডপ্রতি ২৪ বাইট মেটাডেটা খরচ হয়। ১০০০000 উপাদানের জন্য মূল উপাত্ত রাখার আগেই কেবল মেটাডেটা বাবদ প্রায় ২৪ মেগাবাইট র‍্যাম ব্যয় হয়।'
        }
      },
      {
        id: 'am-q5',
        kind: 'mcq',
        topic: 'data-oriented-design',
        question: {
          en: 'In Data-Oriented Design (DOD) and game engine architectures, why are linked lists almost universally replaced by contiguous flat arrays?',
          bn: 'ডেটা-ওরিয়েন্টেড ডিজাইন (DOD) এবং গেম ইঞ্জিন আর্কিটেকচারে লিঙ্কড লিস্ট বাদ দিয়ে প্রায় সর্বত্র কেন সংলগ্ন ফ্ল্যাট অ্যারে ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Game engines must update thousands of entities per 16-millisecond frame (60 FPS); contiguous arrays eliminate DRAM latency stalls by maximizing cache hits and SIMD vectorization',
            bn: 'গেম ইঞ্জিনকে প্রতি ১৬-মিলিমিটার ফ্রেমে (৬০ FPS) হাজার হাজার অবজেক্ট আপডেট করতে হয়; সংলগ্ন অ্যারে ক্যাশ হিট এবং SIMD ভেক্টরের সুবিধা নিয়ে র‍্যাম বিলম্ব পুরোপুরি দূর করে'
          },
          {
            en: 'Video graphics cards cannot render triangles if pointers exist in host memory',
            bn: 'হোস্ট মেমরিতে পয়েন্টার থাকলে ভিডিও গ্রাফিক্স কার্ড ট্রায়াঙ্গেল আঁকতে পারে না'
          },
          {
            en: 'DirectX and Vulkan APIs prohibit dynamic heap allocation',
            bn: 'ডাইরেক্টএক্স এবং ভলকান এপিআই ডায়নামিক হিপ মেমরি বরাদ্দ নিষিদ্ধ করে'
          },
          {
            en: 'Linked lists consume too much battery power on mobile phones',
            bn: 'মোবাইল ফোনে লিঙ্কড লিস্ট অতিরিক্ত ব্যাটারি খরচ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about real-time frame budgets: what happens when 10000 entities stall for 100 nanoseconds each?',
          bn: 'রিয়েল-টাইম ফ্রেম বাজেটের কথা ভাবুন: ১০০০০ অবজেক্টের প্রতিটি যদি ১০০ ন্যানোসেকেন্ড করে আটকে থাকে তবে কী ঘটবে?'
        },
        explanation: {
          en: 'At 60 frames per second, a game engine has only 16.6 milliseconds per frame. Traversing 10000 entities via pointer chasing can waste several milliseconds strictly on DRAM stalls. Contiguous arrays stream data into CPU caches continuously at memory bus bandwidth.',
          bn: 'প্রতি সেকেন্ডে ৬০ ফ্রেমে চলার জন্য গেম ইঞ্জিনের হাতে প্রতি ফ্রেমে মাত্র ১৬.৬ মিলিমিটার সময় থাকে। পয়েন্টার চেজিং দিয়ে ১০০০০ অবজেক্ট পরিদর্শন করলে কেবল মেমরি অপেক্ষাতেই কয়েক মিলিমিটার সময় নষ্ট হয়ে ফ্রেম ড্রপ হয়। সংলগ্ন অ্যারে পুরো বাস ব্যান্ডউইথ ব্যবহার করে দ্রুত ডেটা লোড করে।'
        }
      },
      {
        id: 'am-q6',
        kind: 'mcq',
        topic: 'hardware-instruction-shape',
        question: {
          en: 'What is the assembly instruction difference between accessing `array[i]` versus `node = node.next` in an inner loop?',
          bn: 'একটি অভ্যন্তরীণ লুপের ভেতর `array[i]` অ্যাক্সেস করা এবং `node = node.next` চালানোর মাঝে অ্যাসেম্বলি নির্দেশের মূল পার্থক্য কী?'
        },
        options: [
          {
            en: '`array[i]` uses indexed register addressing (`MOV reg, [base + i * 8]`) with no data dependency between iterations, whereas `node.next` requires a dependent load instruction (`MOV reg, [reg + offset]`) that serializes execution',
            bn: '`array[i]` ইনডেক্সড রেজিস্টার নির্দেশনা (`MOV reg, [base + i * ৮]`) ব্যবহার করে যাতে লুপের মাঝে কোনো নির্ভরতা থাকে না, পক্ষান্তরে `node.next` একটি ডিপেন্ডেন্ট লোড নির্দেশনা চালায় যা আগের নোড না পাওয়া পর্যন্ত পরবর্তী কাজ আটকে রাখে'
          },
          {
            en: '`array[i]` compiles into GPU shader code while `node.next` compiles into CPU microcode',
            bn: '`array[i]` জিপিইউ শেডার কোডে রূপান্তরিত হয় এবং `node.next` সিপিইউ মাইক্রোকোডে রূপান্তরিত হয়'
          },
          {
            en: '`node.next` generates an operating system system call on every iteration',
            bn: '`node.next` প্রতিটি ধাপে একটি করে অপারেটিং সিস্টেম সিস্টেম কল তৈরি করে'
          },
          {
            en: 'There is no difference at the assembly level',
            bn: 'অ্যাসেম্বলি স্তরে উভয়ের মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can out-of-order execution speculate on node.next.next before reading node.next?',
          bn: 'node.next পড়ার আগেই সিপিইউ কি node.next.next এর ঠিকানা অনুমান করতে পারে?'
        },
        explanation: {
          en: 'Array indexing allows superscalar CPU cores to execute multiple iterations out-of-order in parallel. In contrast, `node = node.next` forms a serialized dependent-load chain: the CPU cannot even issue the instruction to read the next node until the current node memory arrives from cache or DRAM.',
          bn: 'অ্যারে ইনডেক্সিং সিপিইউ কোরকে সমান্তরালে একাধিক ধাপ একযোগে সম্পন্ন করার সুযোগ দেয়। কিন্তু `node = node.next` একটি ধারাবাহিক নির্ভরশীলতার শিকল তৈরি করে: বর্তমান নোডের ডেটা মেমরি থেকে না পৌঁছানো পর্যন্ত সিপিইউ পরবর্তী নোড পড়ার নির্দেশনা চালু করতেই পারে না।'
        }
      }
    ]
  }
};
