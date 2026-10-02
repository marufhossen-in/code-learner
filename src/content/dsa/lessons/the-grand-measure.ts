import type { Lesson } from '../../../lib/types';

export const grandMeasureLesson: Lesson = {
  slug: 'the-grand-measure',
  tech: 'sorting',
  title: {
    en: 'The Grand Measure: Benchmarking, Cache Locality & Hardware Reality',
    bn: 'দি গ্র্যান্ড মেজার: বেঞ্চমার্কিং, ক্যাশ লোকালিটি ও হার্ডওয়্যার বাস্তবতা'
  },
  summary: {
    en: 'Asymptotic complexity provides an indispensable mathematical foundation, but physical computer hardware introduces nuanced runtime realities. Theoretical models assume uniform constant-time memory access across all addresses. In contrast, modern physical processors organize memory into a hierarchical pyramid: registers, cache levels, and main memory. Accessing an L1 cache slot takes roughly 1 nanosecond, while a main memory read requires 60 nanoseconds, a 60-fold latency penalty. For 100 elements, traversing a contiguous array with prefetching requires 100 nanoseconds, while traversing scattered linked list nodes demands 6000 nanoseconds. This memory locality difference yields a 5900 nanosecond advantage for contiguous storage. Beyond memory hierarchy, processor branch prediction pipelines penalize unsorted conditional evaluations. This lesson teaches cache line architecture, memory hierarchy latencies, branch prediction dynamics, and rigorous benchmarking discipline.',
    bn: 'অ্যাসিম্পটোটিক কমপ্লেক্সিটি তাত্ত্বিক বিশ্লেষণের অপরিহার্য ভিত্তি হলেও বাস্তব কম্পিউটার হার্ডওয়্যার জটিল পারফরম্যান্স পার্থক্য তৈরি করে। তাত্ত্বিক মডেলে ধরে নেওয়া হয় যে যেকোনো মেমোরি ঠিকানায় পৌঁছাতে সমান সময় লাগে। কিন্তু বাস্তব প্রসেসর মেমোরিকে পিরামিড আকারে সাজায়: রেজিস্টার, ক্যাশ স্তর এবং মূল মেমোরি। L1 ক্যাশে সময় লাগে প্রায় ১ ন্যানোসেকেন্ড, যেখানে মূল র্যামে লাগে ৬০ ন্যানোসেকেন্ড, যা ৬০ গুণ বেশি ধীরগতির। ১০০টি উপাদানের ক্ষেত্রে পর্যায়ক্রমিক অ্যারে ট্রাভার্সালে ১০০ ন্যানোসেকেন্ড সময় লাগে, অথচ মেমোরিতে ছড়ানো লিংকড লিস্টের নোডগুলোতে লাগে ৬০০০ ন্যানোসেকেন্ড। মেমোরি লোকালিটির এই পার্থক্যে অ্যারে প্রায় ৫৯০০ ন্যানোসেকেন্ড এগিয়ে থাকে। এছাড়া প্রসেসরের ব্রাঞ্চ প্রেডিকশন অগোছালো শর্তযুক্ত কোডে সময় অপচয় ঘটায়। এই পাঠে ক্যাশ লাইন আর্কিটেকচার, মেমোরি বিলম্ব, ব্রাঞ্চ প্রেডিকশন এবং বৈজ্ঞানিক বেঞ্চমার্কিং আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Hardware Realities Behind Big-O',
        bn: 'মূল ধারণা: বিগ-ও তত্ত্বের পেছনে হার্ডওয়্যার বাস্তবতা'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you study algorithms, theoretical models assume memory is flat and every address costs the same. Real microprocessors rely on memory hierarchies. Cache locality often trumps asymptotic constant factors.',
        bn: 'অ্যালগরিদম শেখার সময় তাত্ত্বিক মডেলে মেমোরিকে সমতল মনে করা হয় যেখানে যেকোনো ঠিকানায় যেতে সমান সময় লাগে। কিন্তু আসল প্রসেসর মেমোরির একাধিক স্তরের ওপর নির্ভর করে। ক্যাশ মেমোরির নৈকট্য অনেক সময় তাত্ত্বিক হিসাবের চেয়ে বেশি প্রভাব ফেলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Flat Memory Fallacy',
          def: {
            en: 'The erroneous assumption that fetching data from any memory address takes uniform constant time across physical hardware',
            bn: 'ভুল ধারণা যেখানে মনে করা হয় বাস্তব যন্ত্রে যেকোনো মেমোরি ঠিকানা থেকে ডাটা পড়তে সর্বদা অবিকল একই সময় লাগে'
          }
        },
        {
          term: 'CPU Cache Lines (64 Bytes)',
          def: {
            en: 'The standard atomic chunk of memory fetched by processors during read operations, populating high-speed cache lines automatically',
            bn: 'মেমোরি থেকে প্রসেসরে ডাটা আনার ক্ষুদ্রতম ৬৪ বাইটের ব্লক, যা সংলগ্ন উপাত্তকে দ্রুতগতির ক্যাশে নিজে থেকেই জমা রাখে'
          }
        },
        {
          term: 'Spatial and Temporal Locality',
          def: {
            en: 'Spatial locality accesses adjacent memory locations; temporal locality reuses the same memory addresses repeatedly within brief intervals',
            bn: 'স্পেশিয়াল লোকালিটি পাশাপাশি মেমোরিতে কাজ করে এবং টেম্পোরাল লোকালিটি একই মেমোরি মানকে অল্প সময়ের ব্যবধানে বারবার ব্যবহার করে'
          }
        },
        {
          term: 'Branch Prediction Pipeline',
          def: {
            en: 'Processor hardware that guesses which pathway a conditional branch (if/else) will take before condition evaluation finishes',
            bn: 'প্রসেসরের অভ্যন্তরীণ হার্ডওয়্যার যা শর্ত যাচাই শেষ হওয়ার আগেই অনুমান করে পরবর্তী কোন নির্দেশ কার্যকর করতে হবে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'memory-hierarchy-table',
      text: {
        en: 'The Physical Memory Hierarchy Pyramid',
        bn: 'কম্পিউটার মেমোরির বাস্তব স্তরবিন্যাস'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Typical Access Latencies Across CPU Memory Levels',
        bn: 'প্রসেসরের বিভিন্ন মেমোরি স্তরে ডাটা পড়ার গড় সময়'
      },
      head: [
        { en: 'Memory Level', bn: 'মেমোরি স্তর' },
        { en: 'Typical Latency', bn: 'গড় সময়' },
        { en: 'Relative Speed', bn: 'আপেক্ষিক গতি' }
      ],
      rows: [
        [
          { en: 'CPU Registers', bn: 'সিপিইউ রেজিস্টার' },
          { en: '0.5 nanoseconds', bn: '০.৫ ন্যানোসেকেন্ড' },
          { en: 'Immediate single cycle access', bn: 'তৎক্ষণাৎ ১ সাইকেলে ব্যবহারযোগ্য' }
        ],
        [
          { en: 'L1 Cache', bn: 'L1 ক্যাশ' },
          { en: '1 nanosecond', bn: '১ ন্যানোসেকেন্ড' },
          { en: '4 clock cycles, integrated on-core', bn: '৪ ক্লক সাইকেল, কোর সংলগ্ন' }
        ],
        [
          { en: 'L2 Cache', bn: 'L2 ক্যাশ' },
          { en: '4 nanoseconds', bn: '৪ ন্যানোসেকেন্ড' },
          { en: '14 clock cycles, intermediate buffer', bn: '১৪ ক্লক সাইকেল, মধ্যবর্তী বাফার' }
        ],
        [
          { en: 'L3 Cache', bn: 'L3 ক্যাশ' },
          { en: '20 nanoseconds', bn: '২০ ন্যানোসেকেন্ড' },
          { en: 'Shared across all processor cores', bn: 'সব সিপিইউ কোরের মধ্যে ভাগ করা' }
        ],
        [
          { en: 'Main Memory (RAM)', bn: 'মূল র্যাম মেমোরি' },
          { en: '60 nanoseconds', bn: '৬০ ন্যানোসেকেন্ড' },
          { en: 'Off-chip DRAM access (60x slower than L1)', bn: 'বোর্ডের বাইরে DRAM (L1 এর চেয়ে ৬০ গুণ ধীর)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Sequential Cache Locality vs Dispersed Memory Latency',
        bn: 'চালনাযোগ্য সিমুলেশন: পর্যায়ক্রমিক ক্যাশ বনাম বিক্ষিপ্ত মেমোরি বিলম্ব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates traversing 100 elements. Sequential memory access with L1 cache takes 100 nanoseconds, while scattered memory with RAM latency takes 6000 nanoseconds, saving 5900 nanoseconds:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০টি উপাদানের ওপর হিসাব চালায়। L1 ক্যাশ সংলগ্ন মেমোরিতে ১০০ ন্যানোসেকেন্ড সময় লাগলেও মূল র্যামের বিক্ষিপ্ত মেমোরিতে ৬০০০ ন্যানোসেকেন্ড লাগে, যার ফলে ক্যাশ ব্যবহারে ৫৯০০ ন্যানোসেকেন্ড সাশ্রয় হয়:'
      }
    },
    {
      type: 'code',
      id: 'cache-locality-sim',
      lang: 'javascript',
      code: `// Hardware Cache Locality vs Scattered Pointer Simulation
const elements = 100; // 100 items traversed

const l1LatencyNs = 1;   // 1 nanosecond per L1 cache hit
const ramLatencyNs = 60; // 60 nanoseconds per main memory RAM read

// Sequential array traversal benefiting from prefetching & L1 hits
const sequentialCostNs = elements * l1LatencyNs;

// Scattered pointer-chasing traversing linked nodes in disjoint RAM
const scatteredCostNs = elements * ramLatencyNs;

// Latency saved by spatial cache locality
const savedNs = scatteredCostNs - sequentialCostNs;

console.log('Total elements traversed in data structure:', elements);
// -> Total elements traversed in data structure: 100

console.log('L1 cache read latency per hit in nanoseconds:', l1LatencyNs);
// -> L1 cache read latency per hit in nanoseconds: 1

console.log('Main memory RAM read latency in nanoseconds:', ramLatencyNs);
// -> Main memory RAM read latency in nanoseconds: 60

console.log('Total duration for sequential array traversal (ns):', sequentialCostNs);
// -> Total duration for sequential array traversal (ns): 100

console.log('Total duration for scattered pointer traversal (ns):', scatteredCostNs);
// -> Total duration for scattered pointer traversal (ns): 6000

console.log('Hardware execution time saved via cache locality (ns):', savedNs);
// -> Hardware execution time saved via cache locality (ns): 5900`,
      caption: {
        en: 'Figure 1: Traversing 100 sequential elements takes 100 ns versus 6000 ns for scattered nodes, proving a 5900 ns hardware locality advantage',
        bn: 'চিত্র ১: ১০০টি পর্যায়ক্রমিক উপাদানে ১০০ ন্যানোসেকেন্ড সময় লাগে যেখানে বিক্ষিপ্ত নোডে ৬০০০ ন্যানোসেকেন্ড লাগে, যা ৫৯০০ ন্যানোসেকেন্ডের সুবিধা দেয়'
      }
    },
    {
      type: 'heading',
      id: 'branch-prediction-guide',
      text: {
        en: 'Branch Prediction & Benchmarking Pitfalls',
        bn: 'ব্রাঞ্চ প্রেডিকশন ও বেঞ্চমার্কিংয়ের ভুলসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern processor pipelines execute instructions ahead of time. When the CPU encounters a conditional jump, it speculates which path will be taken. If the data is sorted, predictions succeed near 100% of the time.',
        bn: 'আধুনিক প্রসেসর পাইপলাইন আগে থেকেই নির্দেশগুলো প্রস্তুত রাখে। শর্তযুক্ত শাখা এলে সিপিইউ অনুমান করে কোন পথটি কার্যকর হবে। উপাত্ত যদি সাজানো থাকে, তবে এই অনুমান প্রায় ১০০ ভাগ নির্ভুল হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Branch Misprediction Penalty',
          def: {
            en: 'The cost of flushing the instruction pipeline when the CPU speculates incorrectly, wasting roughly 15 to 20 clock cycles',
            bn: 'সিপিইউর ভুল অনুমানের কারণে পাইপলাইনের সমস্ত পূর্বপ্রস্তুতি বাতিল করে পুনরায় শুরু করার ১৫ থেকে ২০ সাইকেলের অপচয়'
          }
        },
        {
          term: 'JIT Warmup Effect',
          def: {
            en: 'Just-In-Time compilers require multiple iterations to optimize bytecode into machine code; premature measurements measure interpreter speed',
            bn: 'জেআইটি কম্পাইলারের কোড অপ্টিমাইজ করতে কিছু সময় লাগে; শুরুতেই সময় মাপলে কম্পাইল করা কোডের বদলে ইন্টারপ্রেটারের ধীরগতি মাপা হয়'
          }
        },
        {
          term: 'Garbage Collection Interference',
          def: {
            en: 'Background memory cleanup sweeps occurring during benchmarking runs that artificially skew latency recordings',
            bn: 'বেঞ্চমার্কিং চলার সময় মেমোরি খালি করার স্বয়ংক্রিয় প্রক্রিয়া চালু হয়ে পাঠে কৃত্রিম ধীরগতি তৈরি করার সমস্যা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'measure-cache-savings-ex',
      kind: 'mcq',
      topic: 'Latency savings in 100-element cache simulation',
      question: {
        en: 'According to our hardware simulation for 100 elements, how many nanoseconds of execution time are saved by sequential array traversal (100 ns) compared to scattered RAM reads (6000 ns)?',
        bn: 'আমাদের ১০০ উপাদানের হার্ডওয়্যার সিমুলেশন অনুযায়ী বিক্ষিপ্ত র্যাম রিডের (৬০০০ ন্যানোসেকেন্ড) তুলনায় পর্যায়ক্রমিক অ্যারো ট্রাভার্সাল (১০০ ন্যানোসেকেন্ড) ব্যবহারে মোট কয় ন্যানোসেকেন্ড সময় সাশ্রয় হয়?'
      },
      options: [
        {
          en: '5900 nanoseconds saved',
          bn: '৫৯০০ ন্যানোসেকেন্ড সাশ্রয়'
        },
        {
          en: '100 nanoseconds',
          bn: '১০০ ন্যানোসেকেন্ড'
        },
        {
          en: '6000 nanoseconds',
          bn: '৬০০০ ন্যানোসেকেন্ড'
        },
        {
          en: '0 nanoseconds',
          bn: '০ ন্যানোসেকেন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: '6000 ns minus 100 ns equals 5900 ns.',
        bn: '৬০০০ থেকে ১০০ বিয়োগ করলে ৫৯০০ হয়।'
      },
      explanation: {
        en: 'Contiguous memory benefits from L1 cache hits (100 ns) while scattered nodes incur RAM misses (6000 ns), saving 5900 ns.',
        bn: 'পর্যায়ক্রমিক মেমোরি L1 ক্যাশের পূর্ণ সুবিধা পায় (১০০ ন্যানোসেকেন্ড) যেখানে ছড়ানো মেমোরিতে বারবার র্যামে যেতে হয় (৬০০০ ন্যানোসেকেন্ড), ফলে ৫৯০০ ন্যানোসেকেন্ড বাঁচে।'
      }
    },
    {
      id: 'measure-array-vs-linkedlist-ex',
      kind: 'mcq',
      topic: 'Why ArrayList frequently outperforms LinkedList in practice',
      question: {
        en: 'Why does an array-backed list typically iterate substantially faster than a node-based linked list despite both having O(n) traversal complexity?',
        bn: 'উভয়ের ট্রাভার্সাল কমপ্লেক্সিটি O(n) হওয়া সত্ত্বেও বাস্তব ক্ষেত্রে নোড-ভিত্তিক লিংকড লিস্টের চেয়ে অ্যারো-ভিত্তিক তালিকা কেন অনেক দ্রুত কাজ করে?'
      },
      options: [
        {
          en: 'Array elements occupy contiguous memory, triggering automatic hardware cache line prefetching; linked list nodes are scattered arbitrarily across memory, causing cache misses on every node',
          bn: 'অ্যারোর উপাদানগুলো মেমোরিতে পাশাপাশি থাকায় প্রসেসর একসাথে পুরো ক্যাশ লাইন টেনে আনে; কিন্তু লিংকড লিস্টের নোডগুলো মেমোরিতে ছড়ানো থাকায় প্রতি নোডে ক্যাশ মিস ঘটে'
        },
        {
          en: 'Linked lists are written in slower programming languages',
          bn: 'লিংকড লিস্ট ধীর ভাষার কোড'
        },
        {
          en: 'Arrays use 64-bit encryption algorithms',
          bn: 'অ্যারে ৬৪-বিট এনক্রিপশন ব্যবহার করে'
        },
        {
          en: 'Linked list nodes are deleted by garbage collection during reads',
          bn: 'পড়ার সময় নোড মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Contiguous memory layout enables hardware prefetching.',
        bn: 'মেমোরিতে উপাদান পাশাপাশি থাকার কারণে ক্যাশ লাইনে দ্রুত লোড হওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Hardware prefetchers automatically load contiguous array chunks into L1 cache ahead of time, avoiding CPU memory stall cycles.',
        bn: 'হার্ডওয়্যার নিজে থেকেই পরবর্তী উপাদানগুলোকে ক্যাশে এনে প্রস্তুত রাখে, কিন্তু লিংকড লিস্টের ক্ষেত্রে প্রতিটি নোডের জন্য নতুন ঠিকানায় খুঁজতে গিয়ে প্রসেসর আটকে থাকে।'
      }
    },
    {
      id: 'measure-branch-prediction-sorted-ex',
      kind: 'mcq',
      topic: 'Effect of sorted data on branch prediction',
      question: {
        en: 'Why does running a condition like if (data[i] >= 128) over a sorted array execute significantly faster than over an unsorted array of identical numbers?',
        bn: 'একই সংখ্যার একটি অবিন্যস্ত অ্যারোর তুলনায় সাজানো অ্যারোতে if (data[i] >= ১২৮) শর্ত চালালে প্রসেসর কেন অনেক দ্রুত কাজ শেষ করতে পারে?'
      },
      options: [
        {
          en: 'On sorted data, the processor branch predictor predicts accurately because all false values come first followed by all true values, eliminating pipeline stalls',
          bn: 'সাজানো উপাত্তে প্রথমে সবগুলো ফলস এবং পরে সবগুলো ট্রু মান ক্রমানুসারে আসায় প্রসেসরের ব্রাঞ্চ প্রেডিকশন শতভাগ সফল হয় এবং পাইপলাইন বাতিল করতে হয় না'
        },
        {
          en: 'Sorted numbers generate less physical heat in CPUs',
          bn: 'সাজানো উপাত্তে প্রসেসরে কম তাপ তৈরি হয়'
        },
        {
          en: 'The compiler deletes the if statement when data is sorted',
          bn: 'সাজানো থাকলে কম্পাইলার শর্ত মুছে ফেলে'
        },
        {
          en: 'Unsorted data uses double memory precision',
          bn: 'অবিন্যস্ত ডেটায় দ্বিগুণ মেমোরি লাগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Branch predictors learn continuous streaks of identical outcomes easily.',
        bn: 'একটানা একই রকম ফলাফল আসলে প্রসেসরের অনুমানের নির্ভুলতার কথা ভাবুন।'
      },
      explanation: {
        en: 'Sorted data changes branch outcome only once, allowing the CPU pipeline to predict correctly and run without pipeline flush penalties.',
        bn: 'সাজানো ডেটায় শর্তের ফল কেবল একবারই পরিবর্তিত হয়, যার ফলে প্রসেসর সবসময় সঠিক পূর্বানুমান করে কোনো পাইপলাইন ড্রপ ছাড়াই সর্বোচ্চ গতিতে চলে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-grand-measure',
    title: {
      en: 'The Grand Measure Quiz',
      bn: 'দি গ্র্যান্ড মেজার কুইজ'
    },
    questions: [
      {
        id: 'q-measure-ram-latency-ratio',
        kind: 'mcq',
        topic: 'Latency disparity between L1 cache and main memory',
        question: {
          en: 'Approximately how many times slower is reading an address from main memory (RAM) compared to reading from the on-core L1 CPU cache?',
          bn: 'সিপিইউর L1 ক্যাশ থেকে মান পড়ার তুলনায় মূল র্যাম মেমোরি থেকে ডাটা পড়া প্রায় কত গুণ বেশি ধীরগতির?'
        },
        options: [
          {
            en: 'Roughly 60 times slower (60 nanoseconds versus 1 nanosecond)',
            bn: 'প্রায় ৬০ গুণ বেশি ধীরগতির (৬০ ন্যানোসেকেন্ড বনাম ১ ন্যানোসেকেন্ড)'
          },
          {
            en: 'Exactly 2 times slower',
            bn: 'ঠিক ২ গুণ বেশি ধীরগতির'
          },
          {
            en: 'They have identical latencies',
            bn: 'উভয়ের গতি অবিকল সমান'
          },
          {
            en: 'RAM is faster than L1 cache',
            bn: 'র্যাম L1 ক্যাশের চেয়ে দ্রুত'
          }
        ],
        answer: 0,
        hint: {
          en: 'L1 is around 1 ns; RAM read is around 60 ns (a 60-fold disparity).',
          bn: 'L1-এ ১ ন্যানোসেকেন্ড এবং র্যামে ৬০ ন্যানোসেকেন্ডের অনুপাতের কথা ভাবুন।'
        },
        explanation: {
          en: 'DRAM access requires crossing the memory bus, taking around 60 ns compared to the on-chip 1 ns L1 cache lookup.',
          bn: 'র্যাম মেমোরি প্রসেসরের বাইরে থাকায় সেখানে পৌঁছাতে ৬০ ন্যানোসেকেন্ড লাগে, যেখানে অন-চিপ L1 ক্যাশে মাত্র ১ ন্যানোসেকেন্ডেই ডাটা পাওয়া যায়।'
        }
      },
      {
        id: 'q-measure-jit-warmup-pitfall',
        kind: 'mcq',
        topic: 'The JIT warmup pitfall in JavaScript microbenchmarking',
        question: {
          en: 'Why is it a mistake to benchmark a JavaScript algorithm on its very first execution loop without a warmup phase?',
          bn: 'ওয়ার্ম-আপ ধাপ ছাড়া কোনো জাভাস্ক্রিপ্ট অ্যালগরিদমের একদম প্রথম এক্সিকিউশনে সময় মাপা কেন একটি মারাত্মক ভুল?'
        },
        options: [
          {
            en: 'The initial execution runs inside the unoptimized bytecode interpreter; the JIT compiler only optimizes functions after they become hot through repeated iterations',
            bn: 'প্রথমবার কোডটি অপ্টিমাইজ না করা বাইটকোড ইন্টারপ্রেটারে চলে; বারবার চলার পর যখন ফাংশনটি উত্তপ্ত বা "হট" হয় কেবল তখনই জেআইটি কম্পাইলার তাকে অপ্টিমাইজড মেশিন কোডে রূপ দেয়'
          },
          {
            en: 'The operating system restarts during the first run',
            bn: 'প্রথম রান চলাকালীন অপারেটিং সিস্টেম রিস্টার্ট করে'
          },
          {
            en: 'First runs only calculate negative numbers',
            bn: 'প্রথম রানে শুধু ঋণাত্মক মান হিসাব হয়'
          },
          {
            en: 'Microbenchmarks require internet access to start',
            bn: 'বেঞ্চমার্কিং করতে ইন্টারনেট সংযোগ লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'JIT compilers optimize code after hot loop detection.',
          bn: 'বারবার লুপ চলার পরেই কেবল জেআইটি কম্পাইলার দ্রুতগতির মেশিন কোড তৈরি করে।'
        },
        explanation: {
          en: 'Modern engines profile code during early runs. High-tier optimizations only kick in once execution counts cross threshold limits.',
          bn: 'জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমে কোড পর্যবেক্ষণ করে। কয়েকবার চলার পর নিশ্চিত হলেই কেবল এটি সবচেয়ে উন্নত অপ্টিমাইজেশন প্রয়োগ করে।'
        }
      },
      {
        id: 'q-measure-cache-line-size',
        kind: 'mcq',
        topic: 'Standard CPU cache line chunk size',
        question: {
          en: 'What is the standard memory chunk size (cache line) fetched by modern x86 and ARM processors whenever memory is accessed?',
          bn: 'আধুনিক x86 এবং এআরএম (ARM) প্রসেসর মেমোরি পড়ার সময় প্রতিবারে আদর্শ কত আকারের মেমোরি ব্লক (ক্যাশ লাইন) একসাথে নিয়ে আসে?'
        },
        options: [
          {
            en: '64 bytes of contiguous memory',
            bn: '৬৪ বাইট পর্যায়ক্রমিক মেমোরি'
          },
          {
            en: '1 bit',
            bn: '১ বিট'
          },
          {
            en: '10 megabytes',
            bn: '১০ মেগাবাইট'
          },
          {
            en: '4096 bytes',
            bn: '৪০৯৬ বাইট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard cache line size across modern CPUs is 64 bytes.',
          bn: 'প্রসেসরের স্ট্যান্ডার্ড ক্যাশ লাইন ব্লকের মাপ ৬৪ বাইট।'
        },
        explanation: {
          en: 'CPUs fetch memory in 64-byte chunks. Accessing one memory location pulls the surrounding block into cache automatically.',
          bn: 'সিপিইউ একবারে ৬৪ বাইট করে মেমোরি টেনে আনে। ফলে একটি মাত্র মেমোরি ঠিকানা পড়তে গেলে পুরো ব্লকটিই একসাথে ক্যাশে চলে আসে।'
        }
      },
      {
        id: 'q-measure-scientific-benchmarking',
        kind: 'mcq',
        topic: 'Best practice for scientific algorithmic benchmarking',
        question: {
          en: 'Which practice is essential for producing reliable, publishable algorithmic performance benchmarks?',
          bn: 'অ্যালগরিদমের নির্ভরযোগ্য ও বৈজ্ঞানিক কর্মক্ষমতা পরিমাপের জন্য কোন অনুশীলনটি সবচেয়ে অপরিহার্য?'
        },
        options: [
          {
            en: 'Execute multiple iterations with warmup, shuffle test datasets across different sizes n, report median and distribution statistics, and prevent dead code elimination',
            bn: 'ওয়ার্ম-আপ সহ একাধিকবার চালানো, বিভিন্ন আকারের (n) ডেটাসেটে পরীক্ষা করা, মিডিয়ান ও ভ্যারিয়েন্স রিপোর্ট করা এবং কম্পাইলার যাতে কোড ফেলে না দেয় তা নিশ্চিত করা'
          },
          {
            en: 'Run the code once using console.time on a battery-powered laptop',
            bn: 'ব্যাটারিতে চলা ল্যাপটপে console.time দিয়ে একবার চালানো'
          },
          {
            en: 'Benchmark only with arrays containing 5 numbers',
            bn: 'কেবল ৫টি সংখ্যার অ্যারোতে পরীক্ষা করা'
          },
          {
            en: 'Always run benchmarks while gaming software is active',
            bn: 'গেম খেলার সময় বেঞ্চমার্ক চালানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Warmup, statistical distributions, diverse scales, and preventing compiler dead-code elimination.',
          bn: 'একাধিক ট্রায়াল, মিডিয়ান হিসাব এবং বিভিন্ন স্কেলে পরীক্ষার কথা ভাবুন।'
        },
        explanation: {
          en: 'Scientific benchmarking requires rigorous controls: warmup loops, realistic data variances, statistical sampling, and verifying compiler consumption.',
          bn: 'সঠিক বেঞ্চমার্কের জন্য ওয়ার্ম-আপ, বিভিন্ন আকারের ডেটাসেট এবং একাধিক পরীক্ষার মিডিয়ান মান প্রকাশ করা বাধ্যতামূলক।'
        }
      }
    ]
  },
  nextLesson: undefined
};
