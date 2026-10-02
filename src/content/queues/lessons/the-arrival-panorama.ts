import type { Lesson } from '../../../lib/types';

export const theArrivalPanoramaLesson: Lesson = {
  slug: 'the-arrival-panorama',
  tech: 'queues',
  title: {
    en: 'Queue Architecture Synthesis — Choosing the Right Queue Pattern',
    bn: 'কিউ আর্কিটেকচার সমন্বয়: সঠিক কিউ প্যাটার্ন নির্বাচন'
  },
  summary: {
    en: 'Every queue pattern balances trade-offs among memory allocation, access latency, concurrency guarantees, and eviction rules. We synthesize the complete Queues curriculum across six core architectures: Linked-List Queues, Circular Ring Buffers, Two-Stack Queues, Binary Heap Priority Queues, Monotonic Deques, and Distributed Message Brokers. We formalize an engineering decision framework to evaluate throughput, latency, failure modes, and hardware constraints, concluding with the algorithmic bridge to dynamic node-based structures in Linked Lists.',
    bn: 'প্রতিটি কিউ প্যাটার্ন মেমোরি বরাদ্দ, অ্যাক্সেস লেটেন্সি, কনকারেন্সি নিশ্চয়তা এবং উপাদান বাতিলের নিয়মের মধ্যে আপস সমন্বয় করে। আমরা সম্পূর্ণ কিউ পাঠ্যক্রমকে ছয়টি মূল স্থাপত্যের মাধ্যমে সারসংক্ষেপ করি: লিংকড-লিস্ট কিউ, সার্কুলার রিং বাফার, টু-স্ট্যাক কিউ, বাইনারি হিপ প্রায়োরিটি কিউ, মনোটোনিক ডিকিউ এবং ডিস্ট্রিবিউটেড মেসেজ ব্রোকার। আমরা থ্রুপুট, লেটেন্সি, ব্যর্থতার ধরন এবং হার্ডওয়্যার সীমাবদ্ধতা মূল্যায়নের একটি প্রকৌশল সিদ্ধান্ত কাঠামো প্রদান করি এবং লিংকড লিস্টের গতিশীল নোড কাঠামোর সাথে সংযোগ স্থাপন করি।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'queue-taxonomy-synthesis',
      text: {
        en: 'The Queue Taxonomy: Six Core Architectures Compared',
        bn: 'কিউ শ্রেণিবিভাগ: ছয়টি মূল স্থাপত্যের তুলনামূলক রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Throughout this curriculum, we progressed from fundamental FIFO (First-In, First-Out) principles to distributed streaming systems. No single queue implementation is universally optimal for every workload. High-frequency audio processing demands zero-allocation fixed ring buffers, while distributed event pipelines demand disk-persisted distributed brokers.',
        bn: 'এই সম্পূর্ণ কোর্সে আমরা মৌলিক ফিফো (FIFO বা ফার্স্ট-ইন ফার্স্ট-আউট) নীতি থেকে শুরু করে ডিস্ট্রিবিউটেড স্ট্রিমিং সিস্টেম পর্যন্ত ধাপে ধাপে এগিয়েছি। কোনো একক কিউ বাস্তবায়ন প্রতিটি কাজের জন্য সমানভাবে সেরা হতে পারে না। উচ্চগতির অডিও প্রসেসিংয়ে মেমোরি বরাদ্দহীন ফিক্সড রিং বাফার প্রয়োজন হয়, অন্যদিকে ডিস্ট্রিবিউটেড ইভেন্ট পাইপলাইনে ডিস্কে স্থায়ীভাবে সংরক্ষিত মেসেজ ব্রোকার প্রয়োজন হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A senior software engineer must evaluate tradeoffs across four key dimensions: allocation overhead, worst-case latency spikes, eviction semantics, and network boundaries. Choosing the wrong queue pattern can lead to memory exhaustion, priority inversion, or deadlocks under production traffic spikes.',
        bn: 'একজন অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ারকে চারটি প্রধান বৈশিষ্ট্যের ওপর ভিত্তি করে সঠিক কিউ নির্বাচন করতে হয়: মেমোরি বরাদ্দের খরচ, সবচেয়ে খারাপ পরিস্থিতির লেটেন্সি স্পাইক, উপাদান বাতিলের নিয়ম এবং নেটওয়ার্ক সীমানা। ভুল কিউ প্যাটার্ন বেছে নিলে উৎপাদনমুখী সিস্টেমে মেমোরি সংকট, অগ্রাধিকার বিপর্যয় বা ডেডলক সৃষ্টি হতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'circular-buffer',
          def: {
            en: 'A contiguous fixed-capacity array with modulo head and tail pointers offering zero allocation overhead and optimal CPU cache locality.',
            bn: 'একটি নির্দিষ্ট ধারণক্ষমতার অ্যারে যা মডুলো হেড ও টেইল পয়েন্টার ব্যবহার করে মেমোরি বরাদ্দ ছাড়াই সেরা সিপিইউ ক্যাশ গতি দেয়।'
          }
        },
        {
          term: 'monotonic-deque',
          def: {
            en: 'A double-ended queue maintaining elements in sorted order to answer sliding window maximum and minimum queries in amortized O(1).',
            bn: 'একটি ডাবল-এন্ডেড কিউ যা উপাদানগুলোকে সুবিন্যস্ত রেখে স্লাইডিং উইন্ডোর সর্বোচ্চ বা সর্বনিম্ন মান অ্যামর্টাইজড O(1) সময়ে নির্ণয় করে।'
          }
        },
        {
          term: 'message-broker',
          def: {
            en: 'A network-distributed persistence layer that coordinates decoupled producers and consumers across network boundaries with delivery guarantees.',
            bn: 'একটি নেটওয়ার্ক ডিস্ট্রিবিউটেড স্টোরেজ ব্যবস্থা যা বিভিন্ন সার্ভারের মধ্যে বিতরণ নিশ্চয়তাসহ উৎপাদক ও ভোক্তাকে সংযুক্ত করে।'
          }
        },
        {
          term: 'head-of-line-blocking',
          def: {
            en: 'A performance bottleneck where slow or failing elements at the front of a queue delay all subsequent elements waiting behind them.',
            bn: 'একটি জটিলতা যেখানে কিউয়ের সামনের ধীরগতির বা ব্যর্থ উপাদান পেছনের অপেক্ষমাণ সমস্ত উপাদানকে আটকে রাখে।'
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
      id: 'architectural-decision-matrix',
      text: {
        en: 'Architectural Decision Matrix: Complexity and Best Use Cases',
        bn: 'স্থাপত্য সিদ্ধান্ত ম্যাট্রিক্স: জটিলতা এবং বাস্তব প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following decision matrix contrasts the six queue architectures covered in our curriculum. Use it as an architectural blueprint when designing software systems that buffer, order, or route asynchronous workloads.',
        bn: 'নিচের সিদ্ধান্ত ম্যাট্রিক্সটি আমাদের কোর্সে আলোচিত ছয়টি কিউ স্থাপত্যের তুলনামূলক চিত্র তুলে ধরে। অ্যাসিনক্রোনাস কাজ বাফারিং, বাছাইকরণ বা রাউটিং করার সময় সঠিক আর্কিটেকচার নির্বাচনে এটি ব্যবহার করুন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Queue Architecture', bn: 'কিউ আর্কিটেকচার' },
        { en: 'Enqueue Operation', bn: 'এনকিউ অপারেশন' },
        { en: 'Dequeue Operation', bn: 'ডিকিউ অপারেশন' },
        { en: 'Memory Footprint', bn: 'মেমোরি খরচ' }
      ],
      rows: [
        [
          { en: 'Singly Linked Queue', bn: 'একমুখী লিংকড কিউ' },
          { en: 'O(1) pointer advance', bn: 'O(1) পয়েন্টার স্থানান্তর' },
          { en: 'O(1) pointer advance', bn: 'O(1) পয়েন্টার স্থানান্তর' },
          { en: 'Dynamic per-node heap allocations', bn: 'ডাইনামিক নোড-ভিত্তিক মেমোরি বরাদ্দ' }
        ],
        [
          { en: 'Circular Ring Buffer', bn: 'সার্কুলার রিং বাফার' },
          { en: 'O(1) modulo index arithmetic', bn: 'O(1) মডুলো ইনডেক্স পাটিগণিত' },
          { en: 'O(1) modulo index arithmetic', bn: 'O(1) মডুলো ইনডেক্স পাটিগণিত' },
          { en: 'Zero extra allocation (fixed array)', bn: 'শূন্য অতিরিক্ত বরাদ্দ (নির্দিষ্ট অ্যারে)' }
        ],
        [
          { en: 'Two-Stack Queue', bn: 'টু-স্ট্যাক কিউ' },
          { en: 'O(1) stack push', bn: 'O(1) স্ট্যাক পুশ' },
          { en: 'O(1) amortized batch transfer', bn: 'O(1) অ্যামর্টাইজড ব্যাচ স্থানান্তর' },
          { en: 'Pure functional stack nodes', bn: 'বিশুদ্ধ ফাংশনাল স্ট্যাক নোড' }
        ],
        [
          { en: 'Binary Heap Priority Queue', bn: 'বাইনারি হিপ প্রায়োরিটি কিউ' },
          { en: 'O(log n) sift up', bn: 'O(log n) শিফট আপ' },
          { en: 'O(log n) sift down', bn: 'O(log n) শিফট ডাউন' },
          { en: 'Contiguous complete tree array', bn: 'অবিচ্ছিন্ন পূর্ণ বাইনারি ট্রি অ্যারে' }
        ],
        [
          { en: 'Monotonic Deque', bn: 'মনোটোনিক ডিকিউ' },
          { en: 'O(1) amortized back pruning', bn: 'O(1) অ্যামর্টাইজড পেছনের ছাঁটাই' },
          { en: 'O(1) amortized front eviction', bn: 'O(1) অ্যামর্টাইজড সামনের ছাঁটাই' },
          { en: 'Bounded sliding window indices', bn: 'সীমাবদ্ধ স্লাইডিং উইন্ডো ইনডেক্স' }
        ],
        [
          { en: 'Distributed Message Broker', bn: 'ডিস্ট্রিবিউটেড মেসেজ ব্রোকার' },
          { en: 'O(1) append to disk log', bn: 'O(1) ডিস্ক লগে যোগ' },
          { en: 'O(1) offset consumer cursor', bn: 'O(1) অফসেট কনজিউমার কার্সর' },
          { en: 'Replicated non-volatile disk clusters', bn: 'প্রতিলিপিকৃত স্থায়ী ডিস্ক ক্লাস্টার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'architecture-selector-code',
      text: {
        en: 'Executable Queue Architecture Selector and Benchmark Trace',
        bn: 'কিউ আর্কিটেকচার নির্বাচক ও বেঞ্চমার্কের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program automates architectural selection based on runtime requirements. Notice how distinct domain constraints—such as network boundaries, urgent score prioritization, or fixed memory budgets—deterministically map to their optimal queue implementation.',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি কাজের প্রয়োজনীয়তার ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সঠিক আর্কিটেকচার নির্বাচন করে। লক্ষ্য করুন কীভাবে নেটওয়ার্কের সীমানা, জরুরি স্কোরের অগ্রাধিকার কিংবা নির্দিষ্ট মেমোরি বরাদ্দের মতো শর্তগুলো নির্ভুলভাবে তাদের অনুকূল কিউ বাস্তবায়নের পথ নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      code: `function selectQueueArchitecture(requirement) {
  const { isDistributed, requiresPriority, isSlidingWindow, isFixedMemory, isPureFunctional } = requirement;

  if (isDistributed) {
    return {
      architecture: 'Distributed Message Broker (Kafka/RabbitMQ)',
      enqueueTime: 'O(1) append log',
      dequeueTime: 'O(1) offset read',
      tradeoff: 'Requires network roundtrips and disk persistence'
    };
  }

  if (isSlidingWindow) {
    return {
      architecture: 'Monotonic Deque',
      enqueueTime: 'O(1) amortized',
      dequeueTime: 'O(1) amortized',
      tradeoff: 'Specialized for rolling min/max aggregates'
    };
  }

  if (requiresPriority) {
    return {
      architecture: 'Binary Heap Priority Queue',
      enqueueTime: 'O(log n)',
      dequeueTime: 'O(log n)',
      tradeoff: 'Replaces chronological FIFO with urgency score'
    };
  }

  if (isPureFunctional) {
    return {
      architecture: 'Two-Stack Queue',
      enqueueTime: 'O(1)',
      dequeueTime: 'O(1) amortized',
      tradeoff: 'Amortized constant time with immutable data structures'
    };
  }

  if (isFixedMemory) {
    return {
      architecture: 'Circular Ring Buffer',
      enqueueTime: 'O(1)',
      dequeueTime: 'O(1)',
      tradeoff: 'Zero allocation overhead with hard capacity boundary'
    };
  }

  return {
    architecture: 'Singly Linked List Queue',
    enqueueTime: 'O(1)',
    dequeueTime: 'O(1)',
    tradeoff: 'Per-node pointer memory overhead'
  };
}

const req1 = { isFixedMemory: true };
const arch1 = selectQueueArchitecture(req1);
console.log('Audio Buffer:', arch1.architecture);
// Output: Audio Buffer: Circular Ring Buffer

const req2 = { requiresPriority: true };
const arch2 = selectQueueArchitecture(req2);
console.log('OS Scheduler:', arch2.architecture);
// Output: OS Scheduler: Binary Heap Priority Queue

const req3 = { isSlidingWindow: true };
const arch3 = selectQueueArchitecture(req3);
console.log('Metrics Max Window:', arch3.architecture);
// Output: Metrics Max Window: Monotonic Deque

const req4 = { isDistributed: true };
const arch4 = selectQueueArchitecture(req4);
console.log('Payment Events:', arch4.architecture);
// Output: Payment Events: Distributed Message Broker (Kafka/RabbitMQ)`
    },
    {
      type: 'heading',
      id: 'bridge-to-linked-lists',
      text: {
        en: 'The Algorithmic Bridge: Why Queues Lead to Linked Lists',
        bn: 'লিংকড লিস্টের সাথে সংযোগ: কিউ থেকে পরবর্তী ধাপে উত্তরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While queues excel at disciplined head-and-tail operations, they cannot insert or delete elements in the middle in O(1) time. Real-world systems that require arbitrary rearrangements, LRU cache node splicing, or dynamic node insertion bridge naturally to Linked Lists. In our Linked Lists hub, we master bidirectional pointer manipulation, cycle detection, and memory-safe node unlinking.',
        bn: 'কিউ শুধুমাত্র শুরু এবং শেষের উপাদানের ওপর চমৎকার দক্ষতা দেখালেও মাঝখানের কোনো উপাদান O(1) সময়ে সন্নিবেশ বা মুছে ফেলতে পারে না। যেসব সিস্টেমে মাঝখান থেকে উপাদান স্থানান্তর, এলআরইউ ক্যাশ নোড স্প্লাইসিং বা স্বাধীন নোড পরিবর্তন প্রয়োজন হয়, সেগুলো স্বাভাবিকভাবেই লিংকড লিস্টের সাথে যুক্ত হয়। আমাদের লিংকড লিস্ট হাবে আমরা দ্বিমুখী পয়েন্টার পরিচালনা, সাইকেল শনাক্তকরণ এবং মেমোরি-নিরাপদ নোড অপসারন শিখব।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Context-driven choice: Match your queue implementation to your memory constraints, latency budgets, and concurrency boundaries.',
          bn: 'প্রাসঙ্গিক নির্বাচন: আপনার মেমোরি সীমাবদ্ধতা, লেটেন্সি বাজেট এবং কনকারেন্সি পরিধির ওপর ভিত্তি করে কিউ বাস্তবায়ন নির্বাচন করুন।'
        },
        {
          en: 'Hardware cache efficiency: Circular ring buffers maximize CPU cache performance by storing elements in contiguous memory without allocations.',
          bn: 'হার্ডওয়্যার ক্যাশ কার্যকারিতা: সার্কুলার রিং বাফার কোনো মেমোরি বরাদ্দ ছাড়া অবিচ্ছিন্ন স্থানে ডেটা রেখে সেরা সিপিইউ গতি দেয়।'
        },
        {
          en: 'Urgency over time: Use binary heaps when tasks must be processed by priority score rather than chronological arrival order.',
          bn: 'জরুরি মানকে অগ্রাধিকার: আগমনের সময়ের বদলে জরুরি স্কোরের ভিত্তিতে কাজ সম্পন্ন করতে বাইনারি হিপ প্রায়োরিটি কিউ ব্যবহার করুন।'
        },
        {
          en: 'Linear rolling analytics: Monotonic deques eliminate quadratic bottlenecks in sliding window minimum and maximum calculations.',
          bn: 'রৈখিক চলমান পরিসংখ্যান: মনোটোনিক ডিকিউ স্লাইডিং উইন্ডোর সর্বোচ্চ ও সর্বনিম্ন মান নির্ণয়ের চতুর্ঘাতী জটিলতা দূর করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ap-ex1',
      kind: 'mcq',
      topic: 'hardware-cache-selection',
      question: {
        en: 'An embedded digital audio system requires buffering 1024 sound samples per audio frame with zero dynamic memory allocation. Which architecture is optimal?',
        bn: 'একটি এমবেডেড ডিজিটাল অডিও সিস্টেমে প্রতি অডিও ফ্রেমে শূন্য ডাইনামিক মেমোরি বরাদ্দে ১০২৪টি সাউন্ড স্যাম্পল বাফার করতে হবে। কোন স্থাপত্যটি সর্বোত্তম?'
      },
      options: [
        {
          en: 'Circular Ring Buffer, because it preallocates a fixed contiguous array and uses modulo pointer indexing with zero garbage collection overhead',
          bn: 'সার্কুলার রিং বাফার, কারণ এটি একটি নির্দিষ্ট অবিচ্ছিন্ন অ্যারে বরাদ্দ করে এবং কোনো গার্বেজ কালেকশন ছাড়া মডুলো পয়েন্টার ব্যবহার করে'
        },
        {
          en: 'Apache Kafka distributed broker cluster across three cloud regions',
          bn: 'তিনটি ক্লাউড অঞ্চলে বিস্তৃত অ্যাপাচি কাফকা ডিস্ট্রিবিউটেড ব্রোকার ক্লাস্টার'
        },
        {
          en: 'A Two-Stack queue constructed using immutable functional persistent lists',
          bn: 'অপরিবর্তনীয় ফাংশনাল লিস্ট দিয়ে তৈরি একটি টু-স্ট্যাক কিউ'
        },
        {
          en: 'An unsorted array that resizes dynamically with quicksort on every sample',
          bn: 'একটি অবিন্যস্ত অ্যারে যা প্রতি স্যাম্পলে কুইকসর্ট দিয়ে ডাইনামিকভাবে আকার পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Audio dropouts occur when dynamic memory allocation pauses the processor.',
        bn: 'ডাইনামিক মেমোরি বরাদ্দ প্রসেসরকে থামিয়ে দিলে অডিও বিকৃত বা বন্ধ হয়ে যায়।'
      },
      explanation: {
        en: 'Circular ring buffers eliminate allocation latency and garbage collection jitter, providing guaranteed deterministic O(1) performance for audio hardware.',
        bn: 'সার্কুলার রিং বাফার মেমোরি বরাদ্দের বিলম্ব দূর করে অডিও হার্ডওয়্যারের জন্য সুনির্দিষ্ট O(1) পারফরম্যান্স নিশ্চিত করে।'
      }
    },
    {
      id: 'ap-ex2',
      kind: 'mcq',
      topic: 'sliding-window-selection',
      question: {
        en: 'A metrics service monitors a stream of 1000000 transactions to compute the maximum value across every rolling 60-second window. Which data structure runs in strictly O(n) total time?',
        bn: 'একটি মেট্রিক্স সার্ভিস ১০00000টি লেনদেনের স্ট্রিম থেকে প্রতি চলমান ৬০ সেকেন্ডের সর্বোচ্চ মান নির্ণয় করতে চায়। কোন ডেটা কাঠামো মোট O(n) সময়ে চলবে?'
      },
      options: [
        {
          en: 'Monotonic Deque, because each element is pushed once and popped at most once for amortized O(1) time per step',
          bn: 'মনোটোনিক ডিকিউ, কারণ প্রতিটি উপাদান একবার ঢোকে এবং সর্বোচ্চ একবার বের হয় ফলে প্রতি ধাপে সময় লাগে অ্যামর্টাইজড O(1)'
        },
        {
          en: 'A naive loop that scans all 60 seconds of elements on every tick',
          bn: 'একটি সাধারণ লুপ যা প্রতি টিকে পুরো ৬০ সেকেন্ডের সমস্ত উপাদান পুনরায় স্ক্যান করে'
        },
        {
          en: 'A singly linked list that re-sorts its nodes using bubble sort',
          bn: 'একটি একমুখী লিংকড লিস্ট যা বাবল সর্ট দিয়ে তার নোডগুলো পুনরায় সাজায়'
        },
        {
          en: 'A recursive Fibonacci generator with exponential call stack',
          bn: 'একটি রিকার্সিভ ফিবোনাচ্চি জেনারেটর যার কল স্ট্যাক সূচকীয়ভাবে বৃদ্ধি পায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Which structure discards elements that can never become the maximum?',
        bn: 'কোন কাঠামোটি এমন উপাদান বাদ দেয় যা ভবিষ্যতে কখনোই সর্বোচ্চ হতে পারবে না?'
      },
      explanation: {
        en: 'The monotonic deque prunes obsolete candidates from the back and out-of-window elements from the front, achieving linear O(n) total time.',
        bn: 'মনোটোনিক ডিকিউ পেছনের অপ্রয়োজনীয় মান এবং সামনের মেয়াদোত্তীর্ণ মান বাদ দিয়ে সমগ্র অ্যারেতে রৈখিক O(n) সময় নিশ্চিত করে।'
      }
    },
    {
      id: 'ap-ex3',
      kind: 'mcq',
      topic: 'distributed-broker-selection',
      question: {
        en: 'When decoupling a high-traffic checkout service from an asynchronous third-party warehouse fulfillment API across the internet, which queue pattern must be selected?',
        bn: 'একটি ব্যস্ত চেকআউট সার্ভিসকে ইন্টারনেটের মাধ্যমে কোনো তৃতীয় পক্ষের গুদামজাতকরণ এপিআই থেকে স্বাধীন করতে কোন কিউ প্যাটার্ন বেছে নিতে হবে?'
      },
      options: [
        {
          en: 'Distributed Message Broker (such as Kafka, RabbitMQ, or AWS SQS) with disk persistence and delivery retry policies',
          bn: 'ডিস্ক স্টোরেজ এবং পুনঃচেষ্টা নীতিসহ ডিস্ট্রিবিউটেড মেসেজ ব্রোকার (যেমন কাফকা, র্যাবিটএমকিউ বা এডাব্লিউএস এসকিউএস)'
        },
        {
          en: 'A raw JavaScript in-memory Array inside the Node.js main thread',
          bn: 'নোড জেএস মেইন থ্রেডের ভেতরের একটি সাধারণ জাভাস্ক্রিপ্ট ইন-মেমোরি অ্যারে'
        },
        {
          en: 'A local C++ circular ring buffer allocated in volatile RAM',
          bn: 'ভোলাটাইল র্যামে তৈরি একটি লোকাল সি++ সার্কুলার রিং বাফার'
        },
        {
          en: 'An HTML canvas graphics element',
          bn: 'একটি এইচটিএমএল ক্যানভাস গ্রাফিক্স এলিমেন্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'What survives if the web server restarts during the transaction?',
        bn: 'লেনদেনের সময় ওয়েব সার্ভার রিস্টার্ট হলেও কোন কাঠামো ডেটা অক্ষত রাখে?'
      },
      explanation: {
        en: 'In-memory queues vanish on crash. Distributed brokers persist messages to disk and retry deliveries independently, isolating services across network boundaries.',
        bn: 'সার্ভার ক্র্যাশে ইন-মেমোরি কিউ মুছে যায়। ডিস্ট্রিবিউটেড ব্রোকার বার্তাগুলো ডিস্কে সংরক্ষণ করে নেটওয়ার্কের ওপারে স্বাধীনভাবে পৌঁছে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'arrival-panorama-quiz',
    title: {
      en: 'Queue Architecture and System Design Quiz',
      bn: 'কিউ আর্কিটেকচার এবং সিস্টেম ডিজাইন কুইজ'
    },
    questions: [
      {
        id: 'ap-q1',
        kind: 'mcq',
        topic: 'head-of-line-blocking-remedy',
        question: {
          en: 'What architectural solution prevents Head-of-Line (HoL) blocking when a slow or corrupted task stalls a strict FIFO queue?',
          bn: 'একটি কঠোর ফিফো কিউতে কোনো ধীরগতির বা ত্রুটিপূর্ণ কাজ আটকে গেলে হেড-অফ-লাইন (HoL) ব্লকিং প্রতিরোধে কোন স্থাপত্য কৌশল প্রয়োগ করা হয়?'
        },
        options: [
          {
            en: 'Implementing Dead-Letter Queues (DLQ) with retry limits, or splitting workloads into multiple parallel worker lanes',
            bn: 'পুনঃচেষ্টা সীমাবদ্ধতাসহ ডেড-লেটার কিউ (DLQ) চালু করা অথবা কাজগুলোকে একাধিক সমান্তরাল লেনে ভাগ করা'
          },
          {
            en: 'Increasing the CPU clock speed to 100 GHz',
            bn: 'সিপিইউ ক্লক স্পিড ১০০ গিগাহার্টজে বৃদ্ধি করা'
          },
          {
            en: 'Disabling all error logging in the application',
            bn: 'অ্যাপ্লিকেশনে সমস্ত ইরর লগিং বন্ধ করে দেওয়া'
          },
          {
            en: 'Replacing TCP networking with UDP broadcasts',
            bn: 'টিসিপি নেটওয়ার্কিং বাদ দিয়ে ইউডিপি ব্রডকাস্ট ব্যবহার করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Move the failing item to a side lane so valid items behind it can make progress.',
          bn: 'ব্যর্থ উপাদানটিকে পাশের লেনে সরিয়ে দিন যাতে পেছনের সঠিক কাজগুলো এগিয়ে যেতে পারে।'
        },
        explanation: {
          en: 'Routing repeatedly failing jobs to a DLQ clears the front of the queue, allowing pending healthy tasks to execute without starvation.',
          bn: 'বারবার ব্যর্থ হওয়া কাজগুলোকে ডিএলকিউতে পাঠালে কিউয়ের সামনের পথ পরিষ্কার হয় এবং পেছনের সুস্থ কাজগুলো চলতে পারে।'
        }
      },
      {
        id: 'ap-q2',
        kind: 'mcq',
        topic: 'functional-queue-amortization',
        question: {
          en: 'In purely functional programming languages where arrays are immutable, how does a Two-Stack queue achieve amortized O(1) performance?',
          bn: 'বিশুদ্ধ ফাংশনাল প্রোগ্রামিং ভাষায় যেখানে অ্যারে অপরিবর্তনীয়, সেখানে একটি টু-স্ট্যাক কিউ কীভাবে অ্যামর্টাইজড O(1) গতি নিশ্চিত করে?'
        },
        options: [
          {
            en: 'Elements are pushed to the inbox stack in O(1) and only transferred to the outbox stack when the outbox is empty, averaging at most 4 operations per element lifetime',
            bn: 'উপাদানগুলো O(1) এ ইনবক্স স্ট্যাকে ঢোকে এবং কেবল আউটবক্স খালি হলেই স্থানান্তরিত হয়, যা উপাদানের জীবদ্দশায় গড়ে সর্বোচ্চ ৪টি অপারেশনে সীমাবদ্ধ থাকে'
          },
          {
            en: 'By invoking the operating system kernel to mutate RAM bytes directly',
            bn: 'অপারেটিং সিস্টেম কার্নেলকে সরাসরি র্যাম মেমোরি পরিবর্তন করার নির্দেশ দিয়ে'
          },
          {
            en: 'By discarding 50 percent of all incoming data elements',
            bn: 'আগত সমস্ত উপাদানের ৫০ শতাংশ সরাসরি মুছে ফেলে'
          },
          {
            en: 'By converting all functions into asynchronous microtasks',
            bn: 'সমস্ত ফাংশনকে অ্যাসিনক্রোনাস মাইক্রোটাস্কে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each element is pushed once to inbox, popped once from inbox, pushed once to outbox, and popped once from outbox.',
          bn: 'প্রতিটি উপাদান ইনবক্সে একবার পুশ, ইনবক্স থেকে একবার পপ, আউটবক্সে একবার পুশ এবং আউটবক্স থেকে একবার পপ হয়।'
        },
        explanation: {
          en: 'Across an element entire lifetime, it participates in at most 4 stack operations, guaranteeing an amortized constant cost of O(1) per operation.',
          bn: 'একটি উপাদানের পুরো জীবনে সর্বোচ্চ ৪টি স্ট্যাক অপারেশন ঘটে, যা প্রতি অপারেশনে নিশ্চিতভাবে অ্যামর্টাইজড O(1) ধ্রুবক খরচ বজায় রাখে।'
        }
      },
      {
        id: 'ap-q3',
        kind: 'mcq',
        topic: 'priority-queue-vs-fifo',
        question: {
          en: 'When should an engineer select a Binary Heap Priority Queue instead of a standard FIFO queue?',
          bn: 'কখন একজন ইঞ্জিনিয়ারের সাধারণ ফিফো কিউয়ের বদলে বাইনারি হিপ প্রায়োরিটি কিউ নির্বাচন করা উচিত?'
        },
        options: [
          {
            en: 'When items must be served according to an explicit urgency score or deadline rather than their chronological arrival order',
            bn: 'যখন কাজগুলো আগমনের সময়ের ভিত্তিতে নয় বরং একটি নির্দিষ্ট জরুরি স্কোর বা সময়সীমার ভিত্তিতে পরিবেশন করতে হয়'
          },
          {
            en: 'When looking to maximize CPU L1 cache locality for sequential byte streams',
            bn: 'ধারাবাহিক বাইট স্ট্রিমের জন্য যখন সিপিইউ এল১ ক্যাশ গতি সর্বাধিক করতে হয়'
          },
          {
            en: 'When storing strings that only contain lowercase Latin letters',
            bn: 'যখন এমন স্ট্রিং সংরক্ষণ করা হয় যাতে কেবল ছোট হাতের ইংরেজি বর্ণ থাকে'
          },
          {
            en: 'When the operating system prohibits using array indices',
            bn: 'যখন অপারেটিং সিস্টেম অ্যারে ইনডেক্স ব্যবহার করতে নিষেধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of hospital emergency rooms: does the patient with the worst injury wait behind someone with a sneeze?',
          bn: 'হাসপাতালের জরুরি বিভাগের কথা ভাবুন: গুরুতর আহত রোগী কি সাধারণ সর্দির রোগীর পেছনে অপেক্ষা করবে?'
        },
        explanation: {
          en: 'Priority queues replace temporal order with urgency scores, ensuring critical tasks execute first at the cost of O(log n) sifting.',
          bn: 'প্রায়োরিটি কিউ আগমনের সময়ের বদলে জরুরি মান দেখে কাজ সম্পন্ন করে, যার জন্য O(log n) সময় খরচ হয়।'
        }
      },
      {
        id: 'ap-q4',
        kind: 'mcq',
        topic: 'linked-list-transition',
        question: {
          en: 'What fundamental limitation of contiguous array-based queues motivates transitioning to node-based Linked Lists?',
          bn: 'অবিচ্ছিন্ন অ্যারে-ভিত্তিক কিউয়ের কোন মৌলিক সীমাবদ্ধতা নোড-ভিত্তিক লিংকড লিস্ট ব্যবহারের প্রেরণা জোগায়?'
        },
        options: [
          {
            en: 'Array-based queues cannot insert, delete, or splice arbitrary elements in the middle of the structure in O(1) time without shifting elements',
            bn: 'অ্যারে-ভিত্তিক কিউ উপাদানগুলো স্থানান্তর করা ছাড়া মাঝখানের কোনো উপাদান O(1) সময়ে সন্নিবেশ, অপসারণ বা স্প্লাইস করতে পারে না'
          },
          {
            en: 'Arrays can only store positive integers under 100',
            bn: 'অ্যারে কেবল ১০০ এর নিচের ধনাত্মক পূর্ণসংখ্যা সংরক্ষণ করতে পারে'
          },
          {
            en: 'Arrays are banned by modern web browser JavaScript engines',
            bn: 'আধুনিক ওয়েব ব্রাউজারের জাভাস্ক্রিপ্ট ইঞ্জিন দ্বারা অ্যারে নিষিদ্ধ করা হয়েছে'
          },
          {
            en: 'Array indexing requires active broadband internet connections',
            bn: 'অ্যারে ইনডেক্সিং চালাতে সক্রিয় ব্রডব্যান্ড ইন্টারনেট সংযোগ লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'What is the time complexity of deleting an element at index 5 in an array of size 1000?',
          bn: '১০০০ আকারের একটি অ্যারেতে ৫ নম্বর ইনডেক্সের উপাদান মুছতে কত সময় জটিলতা লাগে?'
        },
        explanation: {
          en: 'Arrays require O(n) element shifts when mutating elements in the middle. Linked lists splice nodes in O(1) time once a node reference is held.',
          bn: 'অ্যারের মাঝখানে কোনো উপাদান পরিবর্তন করতে O(n) উপাদান সরাতে হয়। কিন্তু লিংকড লিস্টে নোডের রেফারেন্স থাকলে O(1) সময়ে তা স্প্লাইস করা যায়।'
        }
      }
    ]
  }
};
