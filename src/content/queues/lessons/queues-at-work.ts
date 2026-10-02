import type { Lesson } from '../../../lib/types';

export const queuesAtWorkLesson: Lesson = {
  slug: 'queues-at-work',
  tech: 'queues',
  title: {
    en: 'Queues at Work — Bounded Buffers, Backpressure, and Overflow Policies',
    bn: 'কর্মময় কিউ: সীমাবদ্ধ বাফার, ব্যাকপ্রেশার এবং ওভারফ্লো নীতিসমূহ'
  },
  summary: {
    en: 'Unbounded queues are a latent memory hazard in production services: when producers outpace consumers, unbounded buffers expand until the operating system terminates the process via out-of-memory errors. Bounded queues cap capacity at K items and enforce deliberate overflow policies: blocking upstream producers, dropping incoming packets, or overwriting stale data. We analyze backpressure as an active flow-control signal that keeps systems resilient under load.',
    bn: 'সীমাহীন কিউ উৎপাদনমুখী সিস্টেমে বিপজ্জনক মেমোরি সংকট সৃষ্টি করে: উৎপাদকের গতি গ্রাহকের চেয়ে বেশি হলে বাফার অনিয়ন্ত্রিতভাবে বাড়ে এবং একপর্যায়ে মেমোরি শেষ হয়ে সিস্টেম ক্র্যাশ করে। সীমাবদ্ধ কিউ ধারণক্ষমতা K উপাদানে বেঁধে দেয় এবং সুস্পষ্ট ওভারফ্লো নীতি প্রয়োগ করে: উৎপাদককে আটকে দেওয়া (ব্লক), নতুন ডাটা ফেলে দেওয়া (ড্রপ) অথবা পুরনো ডাটা মুছে ফেলা (ওভাররাইট)। আমরা ব্যাকপ্রেশারকে সক্রিয় প্রবাহ-নিয়ন্ত্রণ সংকেত হিসেবে বিশ্লেষণ করেছি যা অতিরিক্ত চাপে সিস্টেমকে স্থিতিশীল রাখে।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-ring-hotel',
    tech: 'queues',
    title: {
      en: 'The Ring Buffer: Modulo Arithmetic and Zero-Allocation Circular Queues',
      bn: 'রিং বাফার: মডুলো পাটিগণিত এবং জিরো-অ্যালোকেশন সার্কুলার কিউ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'unbounded-queue-trap',
      text: {
        en: 'The Danger of Unbounded Queues in Production',
        bn: 'প্রোডাকশনে সীমাহীন কিউয়ের বিপদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you study queues in beginner tutorials, examples frequently depict corridors of infinite capacity. In real systems, memory is strictly bounded by physical hardware. If producers publish 5000 items per second while downstream consumers process only 1000 items per second, an unbounded queue accumulates 4000 unhandled objects every second.',
        bn: 'যখন আপনি প্রাথমিক টিউটোরিয়ালে কিউ শেখেন, তখন উদাহরণগুলোতে প্রায়ই অসীম ধারণক্ষমতার কথা বলা হয়। বাস্তব সিস্টেমে মেমোরি হার্ডওয়্যার দ্বারা কঠোরভাবে সীমাবদ্ধ থাকে। যদি উৎপাদকরা প্রতি সেকেন্ডে ৫০০০ টি আইটেম তৈরি করে যেখানে গ্রাহকরা মাত্র ১০০০ টি আইটেম প্রসেস করতে পারে, তবে সীমাহীন কিউ প্রতি সেকেন্ডে ৪০০০ টি অপ্রসেসকৃত অবজেক্ট জমা করতে থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This runaway growth exhausts available RAM, triggers severe garbage collection pauses, and inevitably leads to an out-of-memory crash. Robust engineering requires bounding queue capacity to a fixed ceiling. When a queue cannot grow, capacity saturation forces the system to handle mismatch through an explicit overflow policy.',
        bn: 'এই অনিয়ন্ত্রিত বৃদ্ধি দ্রুত র‍্যাম নিঃশেষ করে, তীব্র গার্বেজ কালেকশন বিলম্ব সৃষ্টি করে এবং অনিবার্যভাবে আউট-অফ-মেমোরি ক্র্যাশের দিকে নিয়ে যায়। স্থিতিশীল সফটওয়্যার তৈরিতে কিউয়ের সর্বোচ্চ ধারণক্ষমতা নির্দিষ্ট সীমায় বেঁধে রাখা অপরিহার্য। কিউ যখন আর বাড়তে পারে না, তখন উপচে পড়া পরিস্থিতি সামাল দিতে একটি সুনির্দিষ্ট ওভারফ্লো নীতি প্রয়োগ করতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'bounded-buffer',
          def: {
            en: 'A queue constrained to a fixed maximum capacity K to prevent unchecked memory consumption.',
            bn: 'সর্বোচ্চ K ধারণক্ষমতায় সীমাবদ্ধ একটি কিউ যা অনিয়ন্ত্রিত মেমোরি ব্যবহার প্রতিরোধ করে।'
          }
        },
        {
          term: 'backpressure',
          def: {
            en: 'An upstream flow-control signal where a saturated consumer forces producers to pause or slow down.',
            bn: 'উর্ধ্বমুখী প্রবাহ নিয়ন্ত্রণ সংকেত যার মাধ্যমে গ্রাহক অতিরিক্ত চাপে উৎপাদককে সাময়িকভাবে থামিয়ে দেয়।'
          }
        },
        {
          term: 'tail-drop',
          def: {
            en: 'An overflow policy that discards newly arriving elements when the buffer is completely full.',
            bn: 'এমন এক নীতি যেখানে বাফার পূর্ণ থাকা অবস্থায় নতুন আগত উপাদানগুলোকে সাথে সাথে বর্জন করা হয়।'
          }
        },
        {
          term: 'head-overwrite',
          def: {
            en: 'An overflow policy that evicts the oldest element at the front to make room for fresh arrivals.',
            bn: 'এমন এক নীতি যেখানে নতুন উপাদান ঢোকাতে গিয়ে সামনের সবচেয়ে পুরনো উপাদানটিকে মুছে ফেলা হয়।'
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
      id: 'overflow-policies',
      text: {
        en: 'The Three Boundary Policies: Block, Drop, and Overwrite',
        bn: 'তিনটি প্রান্তিক নীতি: ব্লক, ড্রপ এবং ওভাররাইট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a queue reaches capacity, systems implement one of three standard strategies. The first policy is Block: the producer is paused until a consumer dequeues an item. This creates natural backpressure, making it ideal for financial transactions where zero data loss is permissible.',
        bn: 'যখন কোনো কিউ তার সর্বোচ্চ সীমায় পৌঁছায়, তখন সিস্টেম তিনটি কৌশলের যেকোনো একটি প্রয়োগ করে। প্রথম নীতিটি হলো ব্লক (Block): গ্রাহক কোনো উপাদান বের না করা পর্যন্ত উৎপাদককে থামিয়ে রাখা হয়। এটি স্বাভাবিক ব্যাকপ্রেশার তৈরি করে, যা পেমেন্ট বা আর্থিক লেনদেনের ক্ষেত্রে অপরিহার্য যেখানে কোনো ডাটা হারানো নিষিদ্ধ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The second policy is Drop: newly arriving items are immediately discarded and tracked via telemetry counters. The third policy is Overwrite: the oldest item at the front is excised to admit the incoming element. Overwrite is ideal for IoT sensor telemetry where only the latest measurement matters.',
        bn: 'দ্বিতীয় নীতিটি হলো ড্রপ (Drop): নতুন আসা উপাদানগুলোকে সাথে সাথে ফেলে দেওয়া হয় এবং কাউন্টারে তা গণনা করা হয়। তৃতীয় নীতিটি হলো ওভাররাইট (Overwrite): নতুন উপাদান ঢোকাতে সামনের সবচেয়ে পুরনো ডাটাটি ফেলে দেওয়া হয়। এটি আইওটি বা সেন্সর ট্র্যাকিংয়ে সেরা যেখানে কেবল সাম্প্রতিকতম মানটিই গুরুত্বপূর্ণ।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Policy / Dimension', bn: 'নীতি / বৈশিষ্ট্য' },
        { en: 'Block (Backpressure)', bn: 'ব্লক (ব্যাকপ্রেশার)' },
        { en: 'Tail Drop', bn: 'টেইল ড্রপ' },
        { en: 'Head Overwrite', bn: 'হেড ওভাররাইট' }
      ],
      rows: [
        [
          { en: 'Action on Saturation', bn: 'বাফার পূর্ণ অবস্থায় পদক্ষেপ' },
          { en: 'Producer pauses until space opens', bn: 'জায়গা ফাঁকা না হওয়া পর্যন্ত উৎপাদক থামে' },
          { en: 'Discards incoming item immediately', bn: 'নতুন আসা উপাদান সাথে সাথে ফেলে দেয়' },
          { en: 'Evicts oldest element from head', bn: 'সামনের সবচেয়ে পুরনো উপাদানটি মুছে ফেলে' }
        ],
        [
          { en: 'Data Loss Characteristic', bn: 'ডাটা হারানোর ঝুঁকি' },
          { en: 'Zero data loss guaranteed', bn: 'কোনো ডাটা হারানোর ঝুঁকি নেই' },
          { en: 'Loss occurs on bursts', bn: 'চাপের সময় নতুন ডাটা হারিয়ে যায়' },
          { en: 'Historical items sacrificed', bn: 'পুরনো ডাটা মুছে ফেলা হয়' }
        ],
        [
          { en: 'Producer Response Time', bn: 'উৎপাদকের প্রতিক্রিয়া সময়' },
          { en: 'Coupled to consumer speed', bn: 'গ্রাহকের গতির ওপর নির্ভরশীল' },
          { en: 'Instantaneous non-blocking', bn: 'তাত্ক্ষণিক নন-ব্লকিং প্রতিক্রিয়া' },
          { en: 'Instantaneous non-blocking', bn: 'তাত্ক্ষণিক নন-ব্লকিং প্রতিক্রিয়া' }
        ],
        [
          { en: 'Production Workloads', bn: 'আদর্শ প্রয়োগ ক্ষেত্র' },
          { en: 'Financial payments, order events', bn: 'আর্থিক পেমেন্ট, অর্ডার বুকিং' },
          { en: 'Network routing, live video streaming', bn: 'নেটওয়ার্ক রাউটিং, লাইভ ভিডিও স্ট্রিম' },
          { en: 'GPS coordinates, live stock tickers', bn: 'জিপিএস স্থানাঙ্ক, লাইভ স্টক প্রাইস' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'bounded-queue-impl',
      text: {
        en: 'Executable Bounded Queue Implementation',
        bn: 'সীমাবদ্ধ কিউ বাস্তবায়ন ও এক্সিকিউশন ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript implementation demonstrates a bounded queue with configurable drop and overwrite strategies. Testing with a capacity of 3 items clearly exposes the behavioral divergence between discarding new arrivals and evicting stale predecessors.',
        bn: 'নিচের টাইপস্ক্রিপ্ট বাস্তবায়নটি ড্রপ ও ওভাররাইট কৌশলের সাথে একটি সীমাবদ্ধ কিউ প্রদর্শন করে। ৩ টি উপাদানের ধারণক্ষমতায় পরীক্ষা চালালে বোঝা যায় কীভাবে নতুন উপাদান ফেলে দেওয়া এবং পুরনো উপাদান মুছে ফেলার মধ্যে কার্যকারিতার পার্থক্য ঘটে।'
      }
    },
    {
      type: 'code',
      code: `class BoundedQueue {
  constructor(capacity, policy = 'drop') {
    this.capacity = capacity;
    this.policy = policy; // 'drop' or 'overwrite'
    this.items = [];
    this.droppedCount = 0;
  }

  enqueue(val) {
    if (this.items.length < this.capacity) {
      this.items.push(val);
      return { success: true, evicted: null };
    }

    // Queue is full at capacity
    if (this.policy === 'drop') {
      this.droppedCount++;
      return { success: false, evicted: null, reason: 'dropped' };
    }

    if (this.policy === 'overwrite') {
      const evicted = this.items.shift(); // Evict oldest
      this.items.push(val);
      return { success: true, evicted };
    }

    return { success: false, reason: 'blocked' };
  }

  dequeue() {
    if (this.items.length === 0) return null;
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  toArray() {
    return this.items.join(' -> ');
  }
}

// Scenario 1: Drop Policy
const dropQ = new BoundedQueue(3, 'drop');
dropQ.enqueue(10);
dropQ.enqueue(20);
dropQ.enqueue(30);

console.log('Full drop queue:', dropQ.toArray());
// Output: Full drop queue: 10 -> 20 -> 30

const resDrop = dropQ.enqueue(40);
console.log('Enqueue 40 on full queue (drop):', resDrop.success);
// Output: Enqueue 40 on full queue (drop): false

console.log('Dropped count:', dropQ.droppedCount);
// Output: Dropped count: 1

console.log('Queue contents after drop:', dropQ.toArray());
// Output: Queue contents after drop: 10 -> 20 -> 30

// Scenario 2: Overwrite Policy
const owQ = new BoundedQueue(3, 'overwrite');
owQ.enqueue(10);
owQ.enqueue(20);
owQ.enqueue(30);

console.log('Full overwrite queue:', owQ.toArray());
// Output: Full overwrite queue: 10 -> 20 -> 30

const resOw = owQ.enqueue(40);
console.log('Enqueue 40 on full queue (overwrite) evicted:', resOw.evicted);
// Output: Enqueue 40 on full queue (overwrite) evicted: 10

console.log('Queue contents after overwrite:', owQ.toArray());
// Output: Queue contents after overwrite: 20 -> 30 -> 40

console.log('Dequeued item:', owQ.dequeue());
// Output: Dequeued item: 20

console.log('Final queue state:', owQ.toArray());
// Output: Final queue state: 30 -> 40`
    },
    {
      type: 'heading',
      id: 'backpressure-protocols',
      text: {
        en: 'Backpressure as an Architectural Flow Control Mechanism',
        bn: 'স্থাপত্য সংকেত হিসেবে ব্যাকপ্রেশার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Backpressure transforms capacity exhaustion into deliberate protocol negotiation. Modern web servers signal saturation by returning HTTP status code 429 Too Many Requests. Operating system TCP implementations throttle sender windows when socket receive buffers fill up. Rather than crashing, systems degrade gracefully by informing producers to pace their transmissions.',
        bn: 'ব্যাকপ্রেশার ধারণক্ষমতার সংকটকে একটি পূর্বনির্ধারিত প্রোটোকল চুক্তিতে রূপান্তর করে। আধুনিক ওয়েব সার্ভার অতিরিক্ত চাপের মুখে এইচটিটিপি স্ট্যাটাস কোড ৪২৯ (Too Many Requests) ফেরত দেয়। সকেট রিসিভ বাফার পূর্ণ হয়ে গেলে অপারেটিং সিস্টেমের টিসিপি স্ট্যাক প্রেরকের উইন্ডো সাইজ কমিয়ে দেয়। ক্র্যাশ করার বদলে সিস্টেম উৎপাদককে গতি কমাতে বাধ্য করে নিরাপদে কার্যক্রম চালু রাখে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Unbounded risk: Unbounded queues expand indefinitely during speed mismatches, causing Out-Of-Memory crashes.',
          bn: 'সীমাহীনতার ঝুঁকি: গতির তারতম্যে সীমাহীন কিউ অনিয়ন্ত্রিতভাবে বেড়ে গিয়ে আউট-অব-মেমোরি ক্র্যাশ ঘটায়।'
        },
        {
          en: 'Capacity ceiling: Every production queue must establish a maximum capacity ceiling K to guarantee stability.',
          bn: 'ধারণক্ষমতার সীমা: সিস্টেমের স্থায়িত্ব নিশ্চিত করতে প্রোডাকশনের প্রতিটি কিউতে সর্বোচ্চ সীমা K থাকা জরুরি।'
        },
        {
          en: 'Overflow policies: Systems choose between blocking producers, dropping packets, or overwriting stale predecessors.',
          bn: 'ওভারফ্লো নীতি: সিস্টেম প্রয়োজনে উৎপাদককে আটকে রাখে, ডাটা বর্জন করে অথবা পুরনো ডাটা মুছে ফেলে।'
        },
        {
          en: 'Active flow control: Backpressure signals saturation upstream, preventing downstream databases from collapsing under load.',
          bn: 'সক্রিয় প্রবাহ নিয়ন্ত্রণ: ব্যাকপ্রেশার উপরের স্তরে চাপের সংকেত পাঠিয়ে নিচের ডেটাবেজকে অচল হওয়া থেকে রক্ষা করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'qw-ex1',
      kind: 'mcq',
      topic: 'unbounded-memory-exhaustion',
      question: {
        en: 'What primary failure occurs when an unbounded queue receives items at a higher rate than the consumer can process?',
        bn: 'গ্রাহকের প্রসেসিং ক্ষমতার চেয়ে বেশি গতিতে সীমাহীন কিউতে উপাদান জমা হতে থাকলে কোন প্রধান ত্রুটিটি ঘটে?'
      },
      options: [
        {
          en: 'Memory exhaustion leading to garbage collection thrashing and an out-of-memory crash',
          bn: 'মেমোরি সংকট যা অতিরিক্ত গার্বেজ কালেকশন বিলম্ব এবং আউট-অব-মেমোরি ক্র্যাশ ঘটায়'
        },
        {
          en: 'The queue automatically compiles into an immutable binary search tree',
          bn: 'কিউ স্বয়ংক্রিয়ভাবে একটি অপরিবর্তনীয় বাইনারি সার্চ ট্রিতে রূপান্তরিত হয়'
        },
        {
          en: 'The CPU permanently disables hardware floating point registers',
          bn: 'সিপিইউ স্থায়ীভাবে হার্ডওয়্যার ফ্লোটিং পয়েন্ট রেজিস্টার নিষ্ক্রিয় করে দেয়'
        },
        {
          en: 'All network interfaces switch to half-duplex communication mode',
          bn: 'সমস্ত নেটওয়ার্ক ইন্টারফেস হাফ-ডুপ্লেক্স যোগাযোগ ব্যবস্থায় চলে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If memory keeps accumulating without bounds, what hardware resource runs out?',
        bn: 'মেমোরি যদি সীমাহীনভাবে জমতে থাকে, তবে কোন হার্ডওয়্যার সম্পদটি ফুরিয়ে যায়?'
      },
      explanation: {
        en: 'Accumulating unhandled tasks consumes RAM continuously until the operating system terminates the process.',
        bn: 'অপ্রসেসকৃত কাজগুলো ক্রমাগত জমা হয়ে র‍্যাম শেষ করে ফেলে, ফলে অপারেটিং সিস্টেম প্রোগ্রামটি বন্ধ করে দেয়।'
      }
    },
    {
      id: 'qw-ex2',
      kind: 'mcq',
      topic: 'telemetry-overwrite-policy',
      question: {
        en: 'Which overflow policy is mathematically optimal for live IoT sensor telemetry where only the latest reading matters?',
        bn: 'লাইভ আইওটি সেন্সর ডেটার জন্য কোন ওভারফ্লো নীতিটি সবচেয়ে উপযোগী যেখানে কেবল সাম্প্রতিকতম পাঠটি গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'Head Overwrite: evict the oldest reading at the front to admit the newest sample',
          bn: 'হেড ওভাররাইট: নতুন মানটি যুক্ত করতে সামনের সবচেয়ে পুরনো মানটি মুছে ফেলা'
        },
        {
          en: 'Permanent Block: pause the hardware sensor indefinitely until an operator logs in',
          bn: 'স্থায়ী ব্লক: কোনো অপারেটর লগইন না করা পর্যন্ত হার্ডওয়্যার সেন্সরকে থামিয়ে রাখা'
        },
        {
          en: 'Reboot Sensor: power-cycle the device whenever 1 byte arrives',
          bn: 'সেন্সর রিবুট: প্রতি ১ বাইট ডাটা এলেই ডিভাইসটি বন্ধ করে পুনরায় চালু করা'
        },
        {
          en: 'Unbounded Allocation: allocate the entire flash storage to store every historical tick',
          bn: 'সীমাহীন বরাদ্দ: প্রতিটি অতীত মান রাখতে পুরো ফ্ল্যাশ স্টোরেজ বরাদ্দ করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stale temperature or GPS data is useless compared to the real-time current position.',
        bn: 'রিয়েল-টাইম অবস্থানের তুলনায় অতীত বা পুরনো জিপিএস তথ্যের কোনো মূল্য নেই।'
      },
      explanation: {
        en: 'For telemetry, discarding old data ensures consumers always process the freshest current state without memory growth.',
        bn: 'টেলিমেট্রির জন্য পুরনো ডাটা ফেলে দিলে গ্রাহক মেমোরি সংকট ছাড়াই সর্বদা সাম্প্রতিক তথ্য পেতে পারে।'
      }
    },
    {
      id: 'qw-ex3',
      kind: 'mcq',
      topic: 'http-429-backpressure',
      question: {
        en: 'What HTTP status code do modern web APIs return to apply backpressure when their request queues are saturated?',
        bn: 'অনুরোধের কিউ পূর্ণ হয়ে গেলে আধুনিক ওয়েব এপিআই ব্যাকপ্রেশার প্রয়োগ করতে কোন এইচটিটিপি স্ট্যাটাস কোড ফেরত দেয়?'
      },
      options: [
        {
          en: 'HTTP 429 Too Many Requests',
          bn: 'এইচটিটিপি ৪২৯ (Too Many Requests)'
        },
        {
          en: 'HTTP 200 OK',
          bn: 'এইচটিটিপি ২০০ (OK)'
        },
        {
          en: 'HTTP 301 Moved Permanently',
          bn: 'এইচটিটিপি ৩০১ (Moved Permanently)'
        },
        {
          en: 'HTTP 100 Continue',
          bn: 'এইচটিটিপি ১০০ (Continue)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The standard rate-limiting and congestion response code.',
        bn: 'রেট-লিমিটিং এবং ট্রাফিক জট বোঝাতে ব্যবহৃত স্ট্যান্ডার্ড কোড।'
      },
      explanation: {
        en: 'HTTP 429 signals to the client that the server is saturated, instructing upstream callers to back off and retry later.',
        bn: 'এইচটিটিপি ৪২৯ ক্লায়েন্টকে জানায় যে সার্ভার ব্যস্ত, ফলে ক্লায়েন্ট কিছুক্ষণ পর পুনরায় চেষ্টার সংকেত পায়।'
      }
    }
  ],
  quiz: {
    id: 'queues-at-work-quiz',
    title: {
      en: 'Bounded Queues and Flow Control Quiz',
      bn: 'সীমাবদ্ধ কিউ এবং ফ্লো কন্ট্রোল কুইজ'
    },
    questions: [
      {
        id: 'qw-q1',
        kind: 'mcq',
        topic: 'blocking-queue-safety',
        question: {
          en: 'Why is the Block policy strictly required for financial payment processing queues during traffic spikes?',
          bn: 'ট্রাফিকের আকস্মিক চাপে আর্থিক লেনদেন প্রক্রিয়াকরণ কিউতে কেন ব্লক নীতি কঠোরভাবে বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'To guarantee that zero transactions are dropped or silently lost under heavy load',
            bn: 'অতিরিক্ত চাপের মুখেও যাতে কোনো লেনদেন হারিয়ে বা বাদ না যায় তা নিশ্চিত করতে'
          },
          {
            en: 'Because blocking queues double the physical network bandwidth of the datacenter',
            bn: 'কারণ ব্লকিং কিউ ডেটাসেন্টারের নেটওয়ার্ক গতি দ্বিগুণ করে দেয়'
          },
          {
            en: 'To force credit cards to run on 128-bit hardware encryption chips',
            bn: 'ক্রেডিট কার্ডগুলোকে ১২৮-বিট হার্ডওয়্যার এনক্রিপশন চিপে চলতে বাধ্য করতে'
          },
          {
            en: 'Because financial databases cannot store more than 10 records per day',
            bn: 'কারণ আর্থিক ডেটাবেজ দিনে ১০ টির বেশি রেকর্ড সংরক্ষণ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dropping a customer payment request would cause severe balance and accounting discrepancies.',
          bn: 'গ্রাহকের পেমেন্ট অনুরোধ বাতিল হলে হিসাবের বড় ধরনের গরমিল দেখা দেবে।'
        },
        explanation: {
          en: 'Financial workflows cannot tolerate data loss. Blocking pauses incoming requests until processing slots become available.',
          bn: 'আর্থিক লেনদেনে ডাটা হারানো গ্রহণযোগ্য নয়। ব্লক নীতি কাজ শেষ না হওয়া পর্যন্ত নতুন অনুরোধকে নিরাপদে ধরে রাখে।'
        }
      },
      {
        id: 'qw-q2',
        kind: 'mcq',
        topic: 'tail-drop-monitoring',
        question: {
          en: 'When deploying a Tail Drop overflow policy, why is it critical to increment a telemetry counter for every dropped packet?',
          bn: 'টেইল ড্রপ নীতি ব্যবহারের সময় বর্জিত প্রতিটি প্যাকেটের জন্য কেন একটি কাউন্টার বৃদ্ধি করা অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'Without a counter, data is lost silently and engineers cannot diagnose queue saturation or capacity shortfalls',
            bn: 'কাউন্টার না থাকলে ডাটা নিঃশব্দে হারিয়ে যায় এবং প্রকৌশলীরা সিস্টেমের ধারণক্ষমতার সংকট বুঝতে পারেন না'
          },
          {
            en: 'The counter generates electrical power required to operate the CPU cooling fan',
            bn: 'কাউন্টারটি সিপিইউ ফ্যান চালানোর জন্য প্রয়োজনীয় বিদ্যুৎ শক্তি উৎপাদন করে'
          },
          {
            en: 'Because JavaScript compilers automatically crash if telemetry counters are absent',
            bn: 'কারণ টেলিম্যাট্রির কাউন্টার না থাকলে জাভাস্ক্রিপ্ট কম্পাইলার নিজে থেকেই ক্র্যাশ করে'
          },
          {
            en: 'To automatically compress unread emails stored on the mail server',
            bn: 'মেইল সার্ভারে জমে থাকা না-পড়া ইমেইলগুলোকে স্বয়ংক্রিয়ভাবে সংকুচিত করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Silent failures are the most dangerous failure mode in production.',
          bn: 'নীরব ব্যর্থতা হলো প্রোডাকশনের সবচেয়ে বিপজ্জনক ব্যর্থতা।'
        },
        explanation: {
          en: 'Counting dropped elements provides observability, alerting engineering teams that consumer capacity must be scaled up.',
          bn: 'বাদ পড়া উপাদানের সংখ্যা জানা থাকলে প্রকৌশলীরা সতর্কবার্তা পান এবং গ্রাহকের ক্ষমতা বাড়াতে পারেন।'
        }
      },
      {
        id: 'qw-q3',
        kind: 'mcq',
        topic: 'tcp-window-backpressure',
        question: {
          en: 'How does TCP protocol implement backpressure at the transport network layer?',
          bn: 'টিসিপি প্রোটোকল ট্রান্সপোর্ট নেটওয়ার্ক স্তরে কীভাবে ব্যাকপ্রেশার প্রয়োগ করে?'
        },
        options: [
          {
            en: 'By advertising a receive window size: when the local socket buffer fills, the receiver advertises a window of 0 to pause the sender',
            bn: 'রিসিভ উইন্ডোর আকার জানিয়ে: লোকাল বাফার পূর্ণ হলে রিসিভার ০ উইন্ডো পাঠায় যাতে প্রেরক ডাটা পাঠানো থামায়'
          },
          {
            en: 'By deleting the sender operating system from the internet',
            bn: 'ইন্টারনেট থেকে প্রেরকের পুরো অপারেটিং সিস্টেম মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'By switching network cables from copper to optical fiber during transmission',
            bn: 'ডাটা পাঠানোর সময় তারের সংযোগ তামা থেকে অপটিক্যাল ফাইবারে পরিবর্তন করে'
          },
          {
            en: 'By requiring all packets to be encrypted with 1024-bit prime numbers',
            bn: 'সমস্ত প্যাকেটকে ১০২৪-বিট মৌলিক সংখ্যা দিয়ে এনক্রিপ্ট করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'TCP flow control uses the window field in the packet header.',
          bn: 'টিসিপি ফ্লো কন্ট্রোল প্যাকেট হেডারের উইন্ডো ফিল্ড ব্যবহার করে।'
        },
        explanation: {
          en: 'TCP sliding window flow control throttles the transmission rate to prevent fast senders from overflowing slow receivers.',
          bn: 'টিসিপি স্লাইডিং উইন্ডো প্রেরকের গতি নিয়ন্ত্রণ করে যাতে দ্রুত প্রেরক মন্থর গ্রাহককে ভাসিয়ে না দেয়।'
        }
      },
      {
        id: 'qw-q4',
        kind: 'mcq',
        topic: 'buffer-capacity-calculation',
        question: {
          en: 'If a producer generates 3000 items/sec and a consumer processes 2000 items/sec, how long does it take for a bounded queue of capacity 10000 to saturate completely?',
          bn: 'যদি কোনো উৎপাদক প্রতি সেকেন্ডে ৩০০০ উপাদান তৈরি করে এবং গ্রাহক প্রতি সেকেন্ডে ২০০০ উপাদান প্রসেস করে, তবে ১০০০০ ধারণক্ষমতার একটি কিউ পূর্ণ হতে কত সেকেন্ড সময় লাগবে?'
        },
        options: [
          {
            en: '10 seconds (growth rate is 3000 - 2000 = 1000 items/sec; 10000 / 1000 = 10 seconds)',
            bn: '১০ সেকেন্ড (বৃদ্ধির হার ৩০০০ - ২০০০ = ১০০০ উপাদান/সেকেন্ড; ১০০০০ / ১০০০ = ১০ সেকেন্ড)'
          },
          {
            en: '1000 seconds',
            bn: '১০০০ সেকেন্ড'
          },
          {
            en: '1 second',
            bn: '১ সেকেন্ড'
          },
          {
            en: '0 seconds because queues cannot store more than 100 items',
            bn: '০ সেকেন্ড কারণ কিউ ১০০ এর বেশি উপাদান রাখতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compute net growth per second: incoming rate minus outgoing rate, then divide capacity by net rate.',
          bn: 'প্রতি সেকেন্ডে নিট বৃদ্ধির হার হিসাব করুন: আগমন হার বিয়োগ প্রসেসিং হার, তারপর ধারণক্ষমতাকে সেই হার দিয়ে ভাগ করুন।'
        },
        explanation: {
          en: 'The queue accumulates 1000 items per second. A capacity of 10000 will be completely filled in exactly 10 seconds.',
          bn: 'কিউতে প্রতি সেকেন্ডে ১০০০ টি অতিরিক্ত উপাদান জমে। ফলে ১০০০০ ধারণক্ষমতা পূর্ণ হতে ঠিক ১০ সেকেন্ড লাগবে।'
        }
      }
    ]
  }
};
