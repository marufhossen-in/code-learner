import type { Lesson } from '../../../lib/types';

export const theSlidingObservatoryLesson: Lesson = {
  slug: 'the-sliding-observatory',
  tech: 'queues',
  title: {
    en: 'Monotonic Deque — The Sliding Window Maximum Optimization',
    bn: 'মনোটোনিক ডিকিউ: স্লাইডিং উইন্ডো ম্যাক্সিমাম অপ্টিমাইজেশন'
  },
  summary: {
    en: 'Standard queues admit elements at the back and evict from the front. But calculating rolling window aggregates—especially non-invertible ones like maximum or minimum—requires specialized structures. We contrast invertible sums with non-invertible maxima, analyze why naive re-scanning costs O(k) per step, and implement the Monotonic Deque. By storing candidate indices in strictly decreasing order, the Monotonic Deque achieves amortized O(1) time per window slide, completing an array scan of size n in total O(n) time.',
    bn: 'সাধারণ কিউ পেছনের দিক থেকে উপাদান নেয় এবং সামনের দিক থেকে বের করে। তবে স্লাইডিং উইন্ডোর চলমান হিসাব—বিশেষ করে ম্যাক্সিমাম বা মিনিমামের মতো অ-বিপরীতযোগ্য পরিসংখ্যান—নির্ণয়ে বিশেষ কাঠামোর প্রয়োজন হয়। আমরা বিপরীতযোগ্য যোগফল এবং অ-বিপরীতযোগ্য সর্বোচ্চ মানের মধ্যে তুলনা করি, বিশ্লেষণ করি কেন প্রতি ধাপে পুনরায় খোঁজাখুঁজি O(k) খরচ তৈরি করে, এবং মনোটোনিক ডিকিউ বাস্তবায়ন করি। উপাদানগুলোর সূচক কঠোরভাবে হ্রাসমান ক্রমে রেখে মনোটোনিক ডিকিউ প্রতি উইন্ডো স্লাইডে অ্যামর্টাইজড O(1) সময় নিশ্চিত করে, যা মোট n দৈর্ঘ্যের অ্যারেতে O(n) সময়ে সম্পন্ন হয়।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-message-consulate',
    tech: 'queues',
    title: {
      en: 'Distributed Message Queues — Brokers, Delivery Semantics, and DLQs',
      bn: 'ডিস্ট্রিবিউটেড মেসেজ কিউ: ব্রোকার, ডেলিভারি সিম্যান্টিক্স এবং ডিএলকিউ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'sliding-window-paradigm',
      text: {
        en: 'The Sliding Window Problem: Invertible vs Non-Invertible Aggregates',
        bn: 'স্লাইডিং উইন্ডো সমস্যা: বিপরীতযোগ্য বনাম অ-বিপরীতযোগ্য হিসাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput systems, real-time metrics are tracked over a moving time window. For instance, you might measure the maximum transactions per second across the past 60 seconds. As time moves forward by one tick, one new sample enters the window while the oldest sample drops out.',
        bn: 'উচ্চগতির সিস্টেমে রিয়েল-টাইম মেট্রিক্স একটি চলমান সময়ের উইন্ডোতে পর্যবেক্ষণ করা হয়। উদাহরণস্বরূপ, আপনি হয়তো গত ৬০ সেকেন্ডে প্রতি সেকেন্ডে সর্বোচ্চ লেনদেনের পরিমাণ পরিমাপ করতে চান। সময় এক ধাপ এগিয়ে যাওয়ার সাথে সাথে একটি নতুন ডেটা উইন্ডোতে ঢোকে এবং সবচেয়ে পুরনো ডেটাটি বাদ পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For invertible aggregates like sum, count, or average, updating the window takes O(1) time: simply add the incoming element and subtract the outgoing element. However, maximum and minimum are non-invertible. If the departing item was the maximum of the window, you cannot deduce the new maximum without inspecting the remaining elements.',
        bn: 'যোগফল, গণনা বা গড়ের মতো বিপরীতযোগ্য অপারেশনের ক্ষেত্রে উইন্ডো হালনাগাদ করতে O(1) সময় লাগে: কেবল নতুন উপাদানটি যোগ করুন এবং বিদায়ী উপাদানটি বিয়োগ করুন। কিন্তু সর্বোচ্চ বা সর্বনিম্ন মান বিপরীতযোগ্য নয়। বিদায়ী উপাদানটি যদি উইন্ডোর সর্বোচ্চ মান হয়ে থাকে, তবে বাকি উপাদানগুলো না দেখে নতুন সর্বোচ্চ মান নির্ধারণ করা অসম্ভব।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'sliding-window',
          def: {
            en: 'A contiguous subsegment of fixed size k that moves through an array or event stream one step at a time.',
            bn: 'একটি নির্দিষ্ট আকার k এর অবিচ্ছিন্ন অংশ যা অ্যারে বা ইভেন্ট স্ট্রিমের মধ্য দিয়ে এক ধাপ করে এগিয়ে যায়।'
          }
        },
        {
          term: 'monotonic-deque',
          def: {
            en: 'A double-ended queue whose stored elements or referenced values remain strictly ordered (either monotonic increasing or decreasing).',
            bn: 'একটি দ্বি-মুখী কিউ যার ভেতরের উপাদান বা মানগুলো কঠোরভাবে একমুখী ক্রমে সাজানো থাকে।'
          }
        },
        {
          term: 'invertible-aggregate',
          def: {
            en: 'An operation (like sum or count) whose window state can be updated in O(1) by subtracting the departing item and adding the arriving item.',
            bn: 'এমন অপারেশন যার উইন্ডো মান বিদায়ী উপাদান বিয়োগ এবং নতুন উপাদান যোগ করে O(1) সময়ে হালনাগাদ করা যায়।'
          }
        },
        {
          term: 'amortized-complexity',
          def: {
            en: 'The average cost per operation over a sequence of steps, bounded by the fact that each element is pushed and popped at most once.',
            bn: 'ধারাবাহিক অপারেশনের গড় খরচ, যা প্রতিটি উপাদান সর্বোচ্চ একবার প্রবেশ ও বের হওয়ার নিয়মে সীমাবদ্ধ থাকে।'
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
      id: 'naive-vs-monotonic',
      text: {
        en: 'Architectural Comparison: Why Rescanning and Heaps Fall Behind',
        bn: 'স্থাপত্য তুলনা: কেন পুনরায় খোঁজা বা হিপ পিছিয়ে পড়ে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A naive solution re-scans all k elements of the window whenever the window slides forward. This requires O(k) work per slide, totaling O(n * k) operations over an array of size n. When n is 100,000 and k is 1,000, this naive loop wastes 100,000,000 operations.',
        bn: 'একটি সাধারণ সমাধান উইন্ডোটি প্রতিবার সামনে এগোনোর সময় উইন্ডোর সমস্ত k উপাদান পুনরায় স্ক্যান করে। এর ফলে প্রতি স্লাইডে O(k) কাজ করতে হয়, যা n আকারের অ্যারেতে মোট O(n * k) অপারেশন চালায়। যদি n এর মান ১00,000 হয় এবং k এর মান ১,000 হয়, তবে এই লুপে ১00,000,000 অপারেশন অপচয় হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A max-heap tracks elements in O(log k) per step, but removing elements that fall outside the window requires lazy deletion or index tracking. The Monotonic Deque completely outperforms both approaches. By maintaining element indices in decreasing order of value, it provides the window maximum at index 0 in O(1) amortized time.',
        bn: 'একটি ম্যাক্স-হিপ প্রতি ধাপে O(log k) সময়ে উপাদান ট্র্যাক করতে পারে, তবে উইন্ডোর বাইরে চলে যাওয়া উপাদান মুছতে অলস ডিলিশন বা জটিলতা বাড়ে। মনোটোনিক ডিকিউ এই দুটি পদ্ধতির চেয়ে অনেক দ্রুত কাজ করে। মানের অধঃক্রম অনুসারে উপাদানের সূচকগুলো সংরক্ষণ করে এটি সর্বদা ০ নম্বর ইনডেক্সে উইন্ডোর সর্বোচ্চ মান অ্যামর্টাইজড O(1) সময়ে প্রদান করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Method / Approach', bn: 'পদ্ধতি / কৌশল' },
        { en: 'Per-Step Time Complexity', bn: 'প্রতি ধাপে সময় জটিলতা' },
        { en: 'Total Processing Time', bn: 'মোট প্রক্রিয়াকরণ সময়' },
        { en: 'Auxiliary Space Overhead', bn: 'অতিরিক্ত মেমোরি খরচ' }
      ],
      rows: [
        [
          { en: 'Brute Force Rescan', bn: 'ব্রুট ফোর্স পুনরায় খোঁজা' },
          { en: 'O(k) linear scan', bn: 'O(k) রৈখিক স্ক্যান' },
          { en: 'O(n * k) quadratic scale', bn: 'O(n * k) চতুর্ঘাতী বৃদ্ধি' },
          { en: 'O(1) extra space', bn: 'O(1) অতিরিক্ত মেমোরি' }
        ],
        [
          { en: 'Max-Heap Priority Queue', bn: 'ম্যাক্স-হিপ প্রায়োরিটি কিউ' },
          { en: 'O(log k) sift operations', bn: 'O(log k) শিফট অপারেশন' },
          { en: 'O(n * log k) total time', bn: 'O(n * log k) মোট সময়' },
          { en: 'O(k) tree nodes', bn: 'O(k) ট্রি নোড' }
        ],
        [
          { en: 'Monotonic Deque (Optimal)', bn: 'মনোটোনিক ডিকিউ (সর্বোত্তম)' },
          { en: 'O(1) amortized time', bn: 'O(1) অ্যামর্টাইজড সময়' },
          { en: 'O(n) linear total time', bn: 'O(n) রৈখিক মোট সময়' },
          { en: 'O(k) bounded deque', bn: 'O(k) সীমাবদ্ধ ডিকিউ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'monotonic-deque-impl',
      text: {
        en: 'Executable Sliding Window Maximum Implementation',
        bn: 'স্লাইডিং উইন্ডো ম্যাক্সিমামের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript implementation solves the Sliding Window Maximum problem. Notice how smaller elements at the back of the deque are popped before adding a larger newcomer. Because the newcomer is both larger and younger, those older smaller items can never become the maximum of any future window.',
        bn: 'নিচের টাইপস্ক্রিপ্ট বাস্তবায়নটি স্লাইডিং উইন্ডো ম্যাক্সিমাম সমস্যা সমাধান করে। লক্ষ্য করুন কীভাবে একটি বড় নতুন উপাদান যোগ করার আগে ডিকিউয়ের পেছনের ছোট উপাদানগুলো পপ করে ফেলে দেওয়া হয়। যেহেতু নতুন উপাদানটি একই সাথে বড় এবং নবীন, তাই পেছনের পুরনো ছোট উপাদানগুলো কখনোই ভবিষ্যতের কোনো উইন্ডোর সর্বোচ্চ হতে পারবে না।'
      }
    },
    {
      type: 'code',
      code: `function maxSlidingWindow(nums, k) {
  const deque = []; // Stores indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indices that have slid outside the window
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Remove indices with smaller or equal values from the back
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // 3. Add current element index to the back of the deque
    deque.push(i);

    // 4. Once the first window of size k is formed, record the front element
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const res = maxSlidingWindow(arr, k);

console.log('Input array:', arr.join(', '));
// Output: Input array: 1, 3, -1, -3, 5, 3, 6, 7

console.log('Window size k:', k);
// Output: Window size k: 3

console.log('Sliding window maximums:', res.join(', '));
// Output: Sliding window maximums: 3, 3, 5, 5, 6, 7

console.log('Total output windows:', res.length);
// Output: Total output windows: 6`
    },
    {
      type: 'heading',
      id: 'production-applications',
      text: {
        en: 'Production Use Cases: Rate Limiters, Monitoring, and Audio Streams',
        bn: 'বাস্তব ক্ষেত্রে প্রয়োগ: রেট লিমিটার, মনিটরিং এবং অডিও স্ট্রিম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Monotonic deques are extensively used in real-time systems. In financial trading platforms, algorithms calculate the rolling peak price over 10-second intervals to detect sudden volatility. In API gateways, sliding window rate limiters track request counts across rolling minutes without sudden boundary bursts.',
        bn: 'রিয়েল-টাইম সিস্টেমে মনোটোনিক ডিকিউ ব্যাপকভাবে ব্যবহৃত হয়। আর্থিক ট্রেডিং প্ল্যাটফর্মে আকস্মিক অস্থিরতা শনাক্ত করতে অ্যালগরিদমগুলো ১০-সেকেন্ডের ব্যবধানে রোলিং সর্বোচ্চ মূল্য গণনা করে। এপিআই গেটওয়েতে স্লাইডিং উইন্ডো রেট লিমিটারগুলো আকস্মিক ট্র্যাফিক স্পাইক ছাড়াই চলমান মিনিটের অনুরোধ সংখ্যা নিখুঁতভাবে গণনা করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Non-invertible aggregates: While rolling sums can be updated in O(1) via subtraction, rolling maximums require structural state tracking.',
          bn: 'অ-বিপরীতযোগ্য হিসাব: রোলিং যোগফল বিয়োগের মাধ্যমে O(1) সময়ে হালনাগাদ করা গেলেও রোলিং ম্যাক্সিমাম নির্ণয়ে কাঠামোগত ট্র্যাকিং প্রয়োজন।'
        },
        {
          en: 'Monotonic decreasing order: Storing indices such that values decrease guarantees the window maximum always rests at deque front.',
          bn: 'হ্রাসমান ক্রম: মানগুলো যাতে হ্রাসমান থাকে সেভাবে সূচক রাখলে ডিকিউয়ের সামনে সর্বদা উইন্ডোর সর্বোচ্চ মান পাওয়া যায়।'
        },
        {
          en: 'Amortized linear time: Because every array index is pushed once and popped at most once, the total time across n elements is strictly O(n).',
          bn: 'অ্যামর্টাইজড রৈখিক সময়: প্রতিটি অ্যারে সূচক একবার ঢোকে এবং সর্বোচ্চ একবার বের হয় বলে n উপাদানে মোট সময় নিশ্চিতভাবে O(n)।'
        },
        {
          en: 'Obsolete candidate pruning: Any older element smaller than the arriving element can never become a future window maximum and is pruned.',
          bn: 'অপ্রয়োজনীয় প্রার্থী ছাঁটাই: আগত উপাদানের চেয়ে পুরনো এবং ছোট যেকোনো উপাদান ভবিষ্যতে কখনোই সর্বোচ্চ হতে পারবে না বলে তা ছাঁটাই করা হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'so-ex1',
      kind: 'mcq',
      topic: 'deque-amortized-proof',
      question: {
        en: 'Why does the Monotonic Deque achieve O(n) total time for an array of n elements, despite containing a while loop?',
        bn: 'একটি হোয়াইল (while) লুপ থাকা সত্ত্বেও কেন মনোটোনিক ডিকিউ n আকারের অ্যারেতে মোট O(n) সময় নেয়?'
      },
      options: [
        {
          en: 'Each element index is pushed into the deque exactly once and popped at most once across the entire algorithm',
          bn: 'সমগ্র অ্যালগরিদমে প্রতিটি উপাদান সূচক ডিকিউতে ঠিক একবার ঢোকে এবং সর্বোচ্চ একবার বের হয়'
        },
        {
          en: 'The compiler translates all loops into single-cycle hardware instructions',
          bn: 'কম্পাইলার সমস্ত লুপকে একক-সাইকেলের হার্ডওয়্যার নির্দেশে রূপান্তর করে'
        },
        {
          en: 'The operating system runs the while loop in parallel across 1000 background worker threads',
          bn: 'অপারেটিং সিস্টেম ১০০০ ব্যাকগ্রাউন্ড থ্রেডে সমান্তরালভাবে লুপটি চালায়'
        },
        {
          en: 'The deque dynamically deletes negative numbers from the input array',
          bn: 'ডিকিউ ইনপুট অ্যারে থেকে ঋণাত্মক সংখ্যাগুলো স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about the lifetime of an index: how many times can it enter and leave the deque?',
        bn: 'একটি সূচকের জীবনচক্র ভাবুন: এটি ডিকিউতে কতবার ঢুকতে এবং বের হতে পারে?'
      },
      explanation: {
        en: 'Total deque push operations equal n, and total pop operations cannot exceed n. Thus, the total amortized cost across all steps is bounded by 2n, which is O(n).',
        bn: 'মোট পুশ অপারেশনের সংখ্যা n এবং মোট পপ অপারেশন কোনোভাবেই n অতিক্রম করতে পারে না। ফলে মোট অ্যামর্টাইজড খরচ 2n দ্বারা সীমাবদ্ধ, যা O(n)।'
      }
    },
    {
      id: 'so-ex2',
      kind: 'mcq',
      topic: 'pruning-rationale',
      question: {
        en: 'When a new element arrives at index i, why can earlier elements smaller than nums[i] be safely removed from the back of the deque?',
        bn: 'যখন সূচক i তে একটি নতুন উপাদান আসে, তখন ডিকিউয়ের পেছনের nums[i] এর চেয়ে ছোট উপাদানগুলো কেন নিরাপদে মুছে ফেলা যায়?'
      },
      options: [
        {
          en: 'Because the new element is both larger and will stay inside future sliding windows longer, making the smaller older elements permanently obsolete',
          bn: 'কারণ নতুন উপাদানটি একই সাথে বড় এবং ভবিষ্যতের উইন্ডোতে বেশি সময় থাকবে, যা ছোট পুরনো উপাদানগুলোকে চিরতরে অপ্রয়োজনীয় করে দেয়'
        },
        {
          en: 'Because smaller numbers cause memory buffer leaks in JavaScript runtimes',
          bn: 'কারণ ছোট সংখ্যা জাভাস্ক্রিপ্ট রানটাইমে মেমোরি বাফার লিক তৈরি করে'
        },
        {
          en: 'Because the CPU cache can only store prime numbers',
          bn: 'কারণ সিপিইউ ক্যাশ কেবল মৌলিক সংখ্যা সংরক্ষণ করতে পারে'
        },
        {
          en: 'Because sliding windows only permit even-numbered values',
          bn: 'কারণ স্লাইডিং উইন্ডো কেবল জোড় সংখ্যা গ্রহণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a smaller, older item ever beat a larger, newer item to become the maximum?',
        bn: 'একটি ছোট এবং পুরনো উপাদান কি কখনো একটি বড় এবং নতুন উপাদানকে হারিয়ে সর্বোচ্চ হতে পারবে?'
      },
      explanation: {
        en: 'Any element smaller than nums[i] that arrived earlier will expire before nums[i] and can never be greater than nums[i]. It can never serve as the window maximum.',
        bn: 'nums[i] এর চেয়ে ছোট ও আগে আসা উপাদানটি nums[i] এর আগেই মেয়াদোত্তীর্ণ হবে এবং কখনোই তার চেয়ে বড় হবে না। তাই এটি কখনোই সর্বোচ্চ হতে পারবে না।'
      }
    },
    {
      id: 'so-ex3',
      kind: 'mcq',
      topic: 'invertible-vs-non-invertible',
      question: {
        en: 'Which of the following window aggregates is non-invertible, necessitating a specialized structure like a monotonic deque?',
        bn: 'নিচের কোন উইন্ডো হিসাবটি অ-বিপরীতযোগ্য, যার জন্য মনোটোনিক ডিকিউয়ের মতো বিশেষ কাঠামোর প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Window Maximum or Minimum',
          bn: 'উইন্ডোর সর্বোচ্চ বা সর্বনিম্ন মান'
        },
        {
          en: 'Window Sum',
          bn: 'উইন্ডোর যোগফল'
        },
        {
          en: 'Window Count of active elements',
          bn: 'সক্রিয় উপাদানের মোট সংখ্যা'
        },
        {
          en: 'Window Bitwise XOR',
          bn: 'উইন্ডোর বিটওয়াইজ এক্স-অর (XOR)'
        }
      ],
      answer: 0,
      hint: {
        en: 'For which operation can you not un-add an element when it leaves the window?',
        bn: 'কোন অপারেশনের ক্ষেত্রে উইন্ডো থেকে উপাদান বের হয়ে গেলে তাকে সরাসরি বাদ দেওয়া বা রিভার্স করা যায় না?'
      },
      explanation: {
        en: 'Sum, count, and XOR can be updated in O(1) by reversing the operation for the outgoing item. Maximum has no inverse operation, requiring candidate tracking.',
        bn: 'যোগফল, গণনা এবং এক্স-অর বিদায়ী উপাদানের বিপরীত অপারেশন করে O(1) এ আপডেট করা যায়। কিন্তু ম্যাক্সিমামের কোনো বিপরীত অপারেশন নেই।'
      }
    }
  ],
  quiz: {
    id: 'sliding-observatory-quiz',
    title: {
      en: 'Sliding Window Maximum and Monotonic Deque Quiz',
      bn: 'স্লাইডিং উইন্ডো ম্যাক্সিমাম এবং মনোটোনিক ডিকিউ কুইজ'
    },
    questions: [
      {
        id: 'so-q1',
        kind: 'mcq',
        topic: 'front-eviction-condition',
        question: {
          en: 'When sliding a window of size k at current index i, what condition detects that the front index of the deque has expired?',
          bn: 'বর্তমান সূচক i তে k আকারের একটি উইন্ডো স্লাইড করার সময় কোন শর্তটি নির্দেশ করে যে ডিকিউয়ের সামনের সূচকটির মেয়াদ শেষ হয়েছে?'
        },
        options: [
          {
            en: 'deque[0] <= i - k',
            bn: 'deque[0] <= i - k'
          },
          {
            en: 'deque[0] === i',
            bn: 'deque[0] === i'
          },
          {
            en: 'deque.length > k',
            bn: 'deque.length > k'
          },
          {
            en: 'nums[deque[0]] === 0',
            bn: 'nums[deque[0]] === 0'
          }
        ],
        answer: 0,
        hint: {
          en: 'A window ending at index i contains elements from index i - k + 1 to i.',
          bn: 'সূচক i তে শেষ হওয়া একটি উইন্ডোতে i - k + ১ থেকে i পর্যন্ত উপাদান থাকে।'
        },
        explanation: {
          en: 'Any index less than or equal to i - k lies completely outside the current window spanning from i - k + 1 to i.',
          bn: 'i - k এর চেয়ে ছোট বা সমান যেকোনো সূচক i - k + ১ থেকে i পর্যন্ত বিস্তৃত বর্তমান উইন্ডোর বাইরে পড়ে যায়।'
        }
      },
      {
        id: 'so-q2',
        kind: 'mcq',
        topic: 'total-windows-count',
        question: {
          en: 'Given an array of length n = 8 and a window size k = 3, how many sliding windows are evaluated?',
          bn: 'n = ৮ দৈর্ঘ্যের একটি অ্যারে এবং k = ৩ আকারের উইন্ডো দেওয়া থাকলে মোট কতটি স্লাইডিং উইন্ডো মূল্যায়ন করা হবে?'
        },
        options: [
          {
            en: '6 windows, calculated as n - k + 1 = 8 - 3 + 1 = 6',
            bn: '৬টি উইন্ডো, n - k + ১ = ৮ - ৩ + ১ = ৬ হিসাব করে'
          },
          {
            en: '8 windows',
            bn: '৮টি উইন্ডো'
          },
          {
            en: '24 windows',
            bn: '২৪টি উইন্ডো'
          },
          {
            en: '3 windows',
            bn: '৩টি উইন্ডো'
          }
        ],
        answer: 0,
        hint: {
          en: 'The first window ends at index k - 1 and the last window ends at index n - 1.',
          bn: 'প্রথম উইন্ডোটি k - ১ সূচকে শেষ হয় এবং শেষ উইন্ডোটি n - ১ সূচকে শেষ হয়।'
        },
        explanation: {
          en: 'The number of contiguous subsegments of length k in an array of size n is exactly n - k + 1.',
          bn: 'n আকারের একটি অ্যারেতে k দৈর্ঘ্যের অবিচ্ছিন্ন অংশের সংখ্যা ঠিক n - k + ১ টি হয়।'
        }
      },
      {
        id: 'so-q3',
        kind: 'mcq',
        topic: 'deque-contents',
        question: {
          en: 'Why is it standard practice to store array indices inside the deque instead of raw element values?',
          bn: 'ডিকিউতে সরাসরি উপাদানের মানের বদলে অ্যারের সূচক (index) সংরক্ষণ করা কেন স্ট্যান্ডার্ড নিয়ম?'
        },
        options: [
          {
            en: 'Indices allow instant checking of window expiry (deque[0] <= i - k) while still providing access to values via nums[deque[i]]',
            bn: 'সূচক রাখার ফলে উইন্ডোর মেয়াদ উত্তীর্ণ (deque[0] <= i - k) তৎক্ষণাৎ পরীক্ষা করা যায় এবং nums[deque[i]] দিয়ে মানও পাওয়া যায়'
          },
          {
            en: 'Indices use 0 bytes of RAM in Node.js',
            bn: 'নোড জেএসে সূচক ০ বাইট র্যাম খরচ করে'
          },
          {
            en: 'JavaScript arrays cannot hold negative numbers',
            bn: 'জাভাস্ক্রিপ্ট অ্যারে ঋণাত্মক সংখ্যা ধারণ করতে পারে না'
          },
          {
            en: 'Values would trigger network DNS lookup requests',
            bn: 'মান রাখলে নেটওয়ার্ক ডিএনএস লুকআপ রিকোয়েস্ট পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'How does the algorithm know if the maximum has slid out of view?',
          bn: 'অ্যালগরিদম কীভাবে জানবে যে সর্বোচ্চ মানটি উইন্ডোর বাইরে চলে গেছে কি না?'
        },
        explanation: {
          en: 'Storing indices solves both problems simultaneously: array lookup gives the value, and the index number directly tests for window boundaries.',
          bn: 'সূচক সংরক্ষণ করলে উভয় সুবিধা পাওয়া যায়: মান সরাসরি অ্যাক্সেস করা যায় এবং উইন্ডোর সীমানা সহজে পরীক্ষা করা যায়।'
        }
      },
      {
        id: 'so-q4',
        kind: 'mcq',
        topic: 'space-complexity',
        question: {
          en: 'What is the maximum space complexity consumed by the monotonic deque for an array of size n with window size k?',
          bn: 'n আকারের একটি অ্যারে এবং k আকারের উইন্ডোর জন্য মনোটোনিক ডিকিউ সর্বোচ্চ কী পরিমাণ মেমোরি (স্পেস জটিলতা) ব্যবহার করে?'
        },
        options: [
          {
            en: 'O(k) auxiliary space, because the deque never holds more than k indices at any moment',
            bn: 'O(k) অতিরিক্ত মেমোরি, কারণ কোনো মুহূর্তেই ডিকিউ k এর বেশি সূচক ধারণ করে না'
          },
          {
            en: 'O(n^2) quadratic space',
            bn: 'O(n^2) চতুর্ঘাতী মেমোরি'
          },
          {
            en: 'O(n * k) product space',
            bn: 'O(n * k) গুণফল মেমোরি'
          },
          {
            en: 'O(1) strictly zero allocation',
            bn: 'O(1) সম্পূর্ণ শূন্য মেমোরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'All elements in the deque must belong to the current window of size k.',
          bn: 'ডিকিউয়ের সমস্ত উপাদানকে k আকারের বর্তমান উইন্ডোর অন্তর্গত হতে হয়।'
        },
        explanation: {
          en: 'At any given time, the indices in the deque are a subset of the current window, so its size is bounded by k.',
          bn: 'যেকোনো মুহূর্তে ডিকিউতে থাকা সূচকগুলো বর্তমান উইন্ডোর উপসেট, তাই এর আকার k দ্বারা সীমাবদ্ধ।'
        }
      }
    ]
  }
};
