import type { Lesson } from '../../../lib/types';

export const amortizedLedgerLesson: Lesson = {
  slug: 'the-amortized-ledger',
  tech: 'sorting',
  title: {
    en: 'The Amortized Ledger: Dynamic Arrays & Growth Accounting',
    bn: 'দি অ্যামর্টাইজড লেজার: ডায়নামিক অ্যারে ও গ্রোথ অ্যাকাউন্টিং'
  },
  summary: {
    en: 'When analyzing data structures, focusing exclusively on single-operation worst-case costs can yield excessively pessimistic conclusions. Amortized analysis proves the guaranteed average performance per operation across a continuous sequence of worst-case interactions. The classic exemplar is the dynamic array doubling policy. When capacity fills, allocating a doubled memory buffer forces copying existing elements, an apparent linear cost. However, because doubling capacity creates equivalent empty slots, expensive resizes occur with decaying frequency. For 16 sequential insertions starting at capacity 1, four resizing events demand 15 copy operations, yielding 31 total operations across the entire sequence. This averages under 2 operations per insertion, mathematically proving an amortized cost of O(1). This lesson examines aggregate analysis, the accounting banker method, potential functions, and multi-pop stack structures.',
    bn: 'ডেটা স্ট্রাকচার বিশ্লেষণের সময় শুধুমাত্র কোনো একটি একক অপারেশনের সবচেয়ে খারাপ সময় বিবেচনা করলে তা বিভ্রান্তিকর হতে পারে। অ্যামর্টাইজড অ্যানালাইসিস প্রমাণ করে যে দীর্ঘ ধারাবাহিক অপারেশনের ক্ষেত্রে প্রতি ধাপে গড়ে নিশ্চিত কত সময় ব্যয় হয়। এর সবচেয়ে উৎকৃষ্ট উদাহরণ হলো ডায়নামিক অ্যারোর দ্বিগুণ বৃদ্ধি নীতি। অ্যারোর ধারণক্ষমতা পূর্ণ হলে দ্বিগুণ নতুন মেমোরি নিয়ে আগের উপাদান কপি করতে আপাতদৃষ্টিতে লিনিয়ার সময় লাগে। কিন্তু প্রতিবার দ্বিগুণ করার কারণে সমান সংখ্যক খালি ঘর তৈরি হয়, ফলে রি-সাইজের মতো ব্যয়বহুল ঘটনা খুব কম ঘটে। ধারণক্ষমতা ১ থেকে শুরু করে ১৬টি উপাদান যুক্ত করার প্রক্রিয়ায় চারটি রি-সাইজে মোট ১৫টি কপি অপারেশন সম্পন্ন হয়, যার ফলে পুরো ধারায় সর্বমোট ৩১টি অপারেশন লাগে। এতে প্রতি পুশের জন্য গড়ে ২টিরও কম অপারেশন লাগে, যা গাণিতিকভাবে প্রমাণ করে যে এর অ্যামর্টাইজড খরচ O(1)। এই পাঠে অ্যাগ্রিগেট বিশ্লেষণ, ব্যাংকার্স মেথড, পটেনশিয়াল ফাংশন ও মাল্টি-পপ স্ট্যাক আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Honest Averaging over Sequences',
        bn: 'মূল ধারণা: ধারাবাহিক অপারেশনের সৎ গড় হিসাব'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you insert an item into a dynamic array, most operations complete immediately in constant time. Occasionally, capacity exhausts and triggers an expensive memory copy. Amortized analysis proves that these rare spikes do not spoil overall efficiency.',
        bn: 'ডায়নামিক অ্যারোতে উপাদান যুক্ত করার সময় প্রায় প্রতিটি পুশ সাথে সাথে কনস্ট্যান্ট টাইমে শেষ হয়। কেবল মাঝে মাঝে জায়গা ফুরিয়ে গেলে মেমোরি কপি করার সাময়িক ধীরগতি দেখা দেয়। অ্যামর্টাইজড অ্যানালাইসিস প্রমাণ করে যে এই বিরল খরচ পুরো সিস্টেমের গড় গতি নষ্ট করে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Amortized Complexity',
          def: {
            en: 'The guaranteed upper-bound average time per operation evaluated over an arbitrary sequence of n operations',
            bn: 'যেকোনো n সংখ্যক ধারাবাহিক অপারেশনের ক্ষেত্রে প্রতি পদক্ষেপে ব্যয়িত সময়ের গ্যারান্টিযুক্ত সর্বোচ্চ গড় মান'
          }
        },
        {
          term: 'Capacity Doubling Policy',
          def: {
            en: 'Allocating a new memory buffer twice the current size when exhausted, ensuring geometric spacing between costly resize events',
            bn: 'মেমোরি পূর্ণ হলে দ্বিগুণ আকারের নতুন বাফার তৈরি করার কৌশল, যা ব্যয়বহুল রি-সাইজের মধ্যকার ব্যবধান ক্রমান্বয়ে বৃদ্ধি করে'
          }
        },
        {
          term: 'The Banker / Accounting Method',
          def: {
            en: 'Assigning a virtual credit fee to cheap operations to save up savings deposits that pay for future expensive operations',
            bn: 'সস্তা কাজের ওপর কাল্পনিক অতিরিক্ত ফি বা ক্রেডিট ধার্য করে জমানো, যা দিয়ে ভবিষ্যতে ঘটা ব্যয়বহুল কাজের খরচ মেটানো হয়'
          }
        },
        {
          term: 'The Potential Method',
          def: {
            en: 'Modeling data structure tension using a physics-inspired potential function Phi that absorbs shocks during expensive restructurings',
            bn: 'পদার্থবিদ্যার স্থিতিশক্তি বা পটেনশিয়াল ফাংশন Phi ব্যবহার করে ডেটা কাঠামোর জমে থাকা চাপ ও রূপান্তরের হিসাব রাখার গাণিতিক পদ্ধতি'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'amortized-methods-table',
      text: {
        en: 'Three Analytical Frameworks for Amortization',
        bn: 'অ্যামর্টাইজড বিশ্লেষণের তিনটি প্রধান পদ্ধতি'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Mathematical Approaches to Proving Amortized Bounds',
        bn: 'অ্যামর্টাইজড সীমা প্রমাণের তিনটি গাণিতিক পদ্ধতির তুলনামূলক বিবরণ'
      },
      head: [
        { en: 'Method Name', bn: 'পদ্ধতির নাম' },
        { en: 'Core Mental Model', bn: 'মূল ধারণা' },
        { en: 'How Bound Is Established', bn: 'যেভাবে সীমা প্রমাণিত হয়' }
      ],
      rows: [
        [
          { en: 'Aggregate Method', bn: 'অ্যাগ্রিগেট পদ্ধতি' },
          { en: 'Total sum divided by n', bn: 'মোট খরচকে n দিয়ে ভাগ' },
          { en: 'Calculate total work T(n) for n operations directly, then divide T(n)/n to find average', bn: 'n অপারেশনের মোট কাজ T(n) বের করে তাকে সরাসরি n দিয়ে ভাগ করে গড় নির্ণয়' }
        ],
        [
          { en: 'Accounting Method', bn: 'অ্যাকাউন্টিং পদ্ধতি' },
          { en: 'Credits and bank accounts', bn: 'ক্রেডিট ও ব্যাংক হিসাব' },
          { en: 'Charge each cheap operation an extra fee; ensure account balance never drops below zero', bn: 'সস্তা কাজে অতিরিক্ত ফি নিয়ে অ্যাকাউন্টে রাখা হয় যাতে ব্যালেন্স কখনো ঋণাত্মক না হয়' }
        ],
        [
          { en: 'Potential Method', bn: 'পটেনশিয়াল পদ্ধতি' },
          { en: 'Energy stored in structure', bn: 'কাঠামোতে সঞ্চিত শক্তি' },
          { en: 'Define potential function Phi(D); amortized cost = actual cost + Delta Phi', bn: 'পটেনশিয়াল ফাংশন Phi ধরে প্রতি ধাপে আসল কাজের সাথে পটেনশিয়ালের পরিবর্তন যোগ করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Dynamic Array Doubling for 16 Elements',
        bn: 'চালনাযোগ্য সিমুলেশন: ১৬টি উপাদানে ডায়নামিক অ্যারো দ্বিগুণ বৃদ্ধি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates inserting 16 elements into a dynamic array starting with capacity 1. It records 15 total element copy operations, totaling 31 overall operations across the sequence:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ধারণক্ষমতা ১ থেকে শুরু করে একটি ডায়নামিক অ্যারোতে ১৬টি উপাদান যুক্ত করার প্রক্রিয়া হিসাব করে। এতে মোট ১৫টি উপাদান কপি অপারেশনসহ পুরো ধারায় সর্বমোট ৩১টি অপারেশন সম্পন্ন হয়:'
      }
    },
    {
      type: 'code',
      id: 'amortized-ledger-sim',
      lang: 'javascript',
      code: `// Dynamic Array Doubling Amortization Simulation for 16 Inserts
const totalPushes = 16; // 16 elements pushed sequentially
let capacity = 1;
let copyOps = 0;
let totalWork = 0;

for (let i = 1; i <= totalPushes; i++) {
  // If array is full, trigger capacity doubling
  if (i > capacity) {
    const previousElements = i - 1;
    copyOps += previousElements;
    totalWork += previousElements; // Work to copy old elements into new buffer
    capacity *= 2;                 // Double buffer capacity
  }
  totalWork += 1; // 1 operation to insert the new element
}

console.log('Total elements appended sequentially:', totalPushes);
// -> Total elements appended sequentially: 16

console.log('Sum of elements copied during resizing events:', copyOps);
// -> Sum of elements copied during resizing events: 15

console.log('Total cumulative operations across sequence:', totalWork);
// -> Total cumulative operations across sequence: 31`,
      caption: {
        en: 'Figure 1: Pushing 16 elements incurs 15 copy operations, yielding 31 total operations for an average cost under 2 per push',
        bn: 'চিত্র ১: ১৬টি উপাদান পুশ করতে ১৫টি কপি অপারেশনসহ মোট ৩১টি কাজ হয়, ফলে উপাদান প্রতি গড় খরচ ২ এর কম থাকে'
      }
    },
    {
      type: 'heading',
      id: 'multipop-and-two-stack-guide',
      text: {
        en: 'Multi-Pop Stacks & Two-Stack Queues',
        bn: 'মাল্টি-পপ স্ট্যাক ও টু-স্ট্যাক কিউ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Amortization applies beyond arrays. Consider a stack with a multipop(k) operation that removes k elements at once. While one call may take linear time, every element popped was pushed once, guaranteeing constant amortized time.',
        bn: 'অ্যামর্টাইজেশন কেবল অ্যারোতেই সীমাবদ্ধ নয়। একটি স্ট্যাকে multipop(k) মেথড এক কলেই k সংখ্যক উপাদান বের করে দিতে পারে। কোনো একক কপে লিনিয়ার সময় লাগলেও প্রতিটি উপাদান জীবনে একবারই পুশ হয়েছিল, ফলে গড়ে এর খরচও কনস্ট্যান্ট থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Multi-Pop Stack Bound',
          def: {
            en: 'Because an element can only be popped if it was previously pushed, n stack operations take at most 2n work (O(1) amortized)',
            bn: 'যেহেতু কোনো উপাদান পুশ না করে পপ করা যায় না, তাই n অপারেশনে মোট কাজ সর্বোচ্চ 2n হতে পারে যা গড়ে O(1)'
          }
        },
        {
          term: 'Two-Stack Queue Pattern',
          def: {
            en: 'Implementing a FIFO queue using an inbox stack and an outbox stack, moving elements at most twice for O(1) amortized dequeue',
            bn: 'ইনবক্স ও আউটবক্স নামের দুটি স্ট্যাক দিয়ে কিউ তৈরি করা, যেখানে প্রতিটি উপাদান সর্বোচ্চ দুবার নড়াচড়া করায় ডিকিউ গড়ে O(1) হয়'
          }
        },
        {
          term: 'Fixed Allocation vs Growth',
          def: {
            en: 'Pre-sizing an array when final length is known avoids all resize copying costs completely',
            bn: 'চূড়ান্ত দৈর্ঘ্য জানা থাকলে শুরুতেই সঠিক আকারের অ্যারে তৈরি করে নিলে কপি করার সমস্ত খরচ পুরোপুরি এড়ানো যায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'amortized-total-ops-ex',
      kind: 'mcq',
      topic: 'Cumulative operations in 16-element dynamic array',
      question: {
        en: 'According to our simulation of 16 sequential insertions starting at capacity 1, what is the total cumulative count of operations performed (insertions plus copies)?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ধারণক্ষমতা ১ থেকে শুরু করে ১৬টি উপাদান যুক্ত করতে সর্বমোট কয়টি অপারেশন (নতুন সংযোজন ও কপি মিলিয়ে) সম্পন্ন হয়?'
      },
      options: [
        {
          en: '31 operations',
          bn: '৩১টি অপারেশন'
        },
        {
          en: '16 operations',
          bn: '১৬টি অপারেশন'
        },
        {
          en: '256 operations',
          bn: '২৫৬টি অপারেশন'
        },
        {
          en: '15 operations',
          bn: '১৫টি অপারেশন'
        }
      ],
      answer: 0,
      hint: {
        en: '16 insertions plus 15 copies equals 31 operations.',
        bn: '১৬টি নতুন সংযোজন এবং ১৫টি কপি অপারেশন যোগ করলে ৩১ হয়।'
      },
      explanation: {
        en: '16 insertions require 16 raw writes plus 1 + 2 + 4 + 8 = 15 element copies during doubling, totaling 31 operations.',
        bn: '১৬টি উপাদানের জন্য ১৬টি প্রাথমিক সংযোজন এবং ১ + ২ + ৪ + ৮ = ১৫টি কপি মিলিয়ে মোট ৩১টি অপারেশন প্রয়োজন হয়।'
      }
    },
    {
      id: 'amortized-doubling-vs-fixed-ex',
      kind: 'mcq',
      topic: 'Why doubling capacity beats adding a fixed constant',
      question: {
        en: 'What happens to the amortized complexity of array insertions if capacity expands by adding a fixed constant of 10 slots instead of doubling?',
        bn: 'ধারণক্ষমতা দ্বিগুণ না করে প্রতিবার নির্দিষ্ট ১০টি করে ঘর বাড়ালে অ্যারোর অ্যামর্টাইজড কমপ্লেক্সিটির কী পরিবর্তন ঘটে?'
      },
      options: [
        {
          en: 'It degrades to catastrophic O(n) amortized time because resizes occur every 10 steps, repeatedly copying elements and summing to O(n^2) total work',
          bn: 'এটি অবনমিত হয়ে ক্ষতিকর O(n) অ্যামর্টাইজড সময়ে পৌঁছায় কারণ প্রতি ১০ ধাপ পর পর উপাদান কপি করতে করতে মোট কাজ O(n^2) হয়ে যায়'
        },
        {
          en: 'It improves performance to O(log n)',
          bn: 'এটি পারফরম্যান্স O(log n)-এ উন্নীত করে'
        },
        {
          en: 'It has no effect on computational complexity',
          bn: 'কমপ্লেক্সিটির ওপর এর কোনো প্রভাব পড়ে না'
        },
        {
          en: 'The array becomes read-only',
          bn: 'অ্যারেটি রিড-অনলি হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Linear increments trigger quadratic total copy work.',
        bn: 'নির্দিষ্ট সংখ্যা বাড়ালে মোট কপির পরিমাণ কোয়াড্রাটিক সমীকরণে রূপ নেয়।'
      },
      explanation: {
        en: 'Adding a fixed constant creates O(n) resize events, summing to an arithmetic series of O(n^2) work, or O(n) per push.',
        bn: 'নির্দিষ্ট ঘর বাড়ালে n/১০ বার রি-সাইজ ঘটে, যার মোট কপি খরচ ১+২+...+k সমান্তর ধারায় O(n^2) হয়, ফলে গড়ে প্রতি পুশে O(n) লাগে।'
      }
    },
    {
      id: 'amortized-banker-analogy-ex',
      kind: 'mcq',
      topic: 'Banker accounting method token allocation',
      question: {
        en: 'In the accounting banker method for dynamic array doubling, why does charging each element an amortized fee of 3 credits cover all future costs?',
        bn: 'ডায়নামিক অ্যারো বৃদ্ধির ক্ষেত্রে অ্যাকাউন্টিং ব্যাংকার পদ্ধতিতে প্রতিটি উপাদানে ৩টি ক্রেডিট ধার্য করলে কীভাবে ভবিষ্যতের সমস্ত খরচ মিটে যায়?'
      },
      options: [
        {
          en: '1 credit pays for the immediate insertion, 1 credit saves to copy this element when resized, and 1 credit saves to copy an older element',
          bn: '১টি ক্রেডিট বর্তমান উপাদান ঢোকানোর খরচ মেটায়, ১টি ক্রেডিট ভবিষ্যতে এই উপাদানটি কপি করার জন্য জমা থাকে, এবং ১টি ক্রেডিট পুরোনো একটি উপাদান কপির জন্য সঞ্চিত হয়'
        },
        {
          en: 'Because computer processors have three arithmetic logic units',
          bn: 'কারণ প্রসেসরে তিনটি এএলইউ থাকে'
        },
        {
          en: 'Credits represent memory bytes in cache storage',
          bn: 'ক্রেডিট মূলত ক্যাশ মেমোরির বাইট নির্দেশ করে'
        },
        {
          en: 'It is a random number chosen without mathematical purpose',
          bn: 'এটি উদ্দেশ্যহীন একটি সংখ্যা'
        }
      ],
      answer: 0,
      hint: {
        en: '1 pays for now, 2 save up for future copies of this and an older element.',
        bn: '১টি বর্তমান কাজের জন্য এবং ২টি ভবিষ্যতের দুটি উপাদান কপির জমার কথা ভাবুন।'
      },
      explanation: {
        en: 'Charging 3 credits ensures that when the table doubles from n to 2n, the newly inserted n elements have saved 2n credits to pay for all copies.',
        bn: 'প্রতিটি উপাদানে ৩ ক্রেডিট নিলে n থেকে ২n হওয়ার সময় নতুন n উপাদান মোট ২n ক্রেডিট জমিয়ে রাখে, যা পুরো ২n কপি খরচ মিটিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-amortized-ledger',
    title: {
      en: 'The Amortized Ledger Quiz',
      bn: 'দি অ্যামর্টাইজড লেজার কুইজ'
    },
    questions: [
      {
        id: 'q-amortized-vs-average-case',
        kind: 'mcq',
        topic: 'Difference between amortized complexity and average-case complexity',
        question: {
          en: 'How does amortized complexity differ fundamentally from average-case probabilistic complexity?',
          bn: 'অ্যামর্টাইজড কমপ্লেক্সিটি এবং গড়-সম্ভাব্যতাভিত্তিক (average-case) কমপ্লেক্সিটির মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'Amortized analysis guarantees an upper bound over worst-case input sequences without probability assumptions; average-case relies on assumptions about random input distributions',
            bn: 'অ্যামর্টাইজড বিশ্লেষণ কোনো সম্ভাব্যতার অনুমান ছাড়াই সবচেয়ে খারাপ ইনপুট ধারায় সর্বোচ্চ গড়ের গ্যারান্টি দেয়; আর এভারেজ-কেস ইনপুট উপাত্ত দৈবভাবে আসার অনুমানের ওপর নির্ভর করে'
          },
          {
            en: 'Amortized analysis only applies to sorting algorithms',
            bn: 'অ্যামর্টাইজড কেবল সর্টিংয়ে প্রযোজ্য'
          },
          {
            en: 'Average-case requires double precision floating-point mathematics',
            bn: 'এভারেজ-কেসে দশমিক গণিত লাগে'
          },
          {
            en: 'They are identical concepts with different academic names',
            bn: 'উভয়ই অবিকল একই জিনিস'
          }
        ],
        answer: 0,
        hint: {
          en: 'Amortization holds for ANY sequence, even adversarial ones, with no probability involved.',
          bn: 'অ্যামর্টাইজেশন যেকোনো প্রতিকূল ইনপুটেও নিশ্চিতভাবে সত্য থাকে, কোনো সম্ভাবনার দরকার পড়ে না।'
        },
        explanation: {
          en: 'Average-case assumes inputs follow a probability distribution. Amortization guarantees the average cost over any valid sequence of operations.',
          bn: 'এভারেজ-কেস ইনপুটের স্বাভাবিক বণ্টনের অনুমান করে। অ্যামর্টাইজেশন ইনপুটের ধরন যাই হোক না কেন যেকোনো অপারেশনের ধারায় গ্যারান্টিযুক্ত গড় দেয়।'
        }
      },
      {
        id: 'q-amortized-potential-function',
        kind: 'mcq',
        topic: 'Role of the potential function in the potential method',
        question: {
          en: 'In the physicist potential method of amortization, what mathematical requirement must the potential function Phi(D) satisfy?',
          bn: 'অ্যামর্টাইজেশনের পটেনশিয়াল পদ্ধতিতে পটেনশিয়াল ফাংশন Phi(D)-কে কোন গাণিতিক শর্তটি অবশ্যই পূরণ করতে হয়?'
        },
        options: [
          {
            en: 'Phi(D) must be non-negative (Phi >= 0) at all times relative to the initial empty state Phi(D0) = 0',
            bn: 'শুরুর খালি অবস্থা Phi(D0) = ০ এর সাপেক্ষে যেকোনো সময় পটেনশিয়াল ফাংশন Phi(D) অবশ্যই অঋণাত্মক (Phi >= ০) হতে হবে'
          },
          {
            en: 'Phi(D) must equal the square root of the memory address',
            bn: 'Phi(D) মেমোরি ঠিকানার বর্গমূল হতে হবে'
          },
          {
            en: 'Phi(D) must decrease by 100 on every single operation',
            bn: 'প্রতি অপারেশনে মান ১০০ কমতে হবে'
          },
          {
            en: 'Phi(D) cannot be represented by real numbers',
            bn: 'এটি বাস্তব সংখ্যা হতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The stored potential energy must never become negative.',
          bn: 'সঞ্চিত শক্তি বা পটেনশিয়াল কখনো শূন্যের নিচে নামতে পারে না।'
        },
        explanation: {
          en: 'Ensuring Phi >= 0 guarantees that accumulated amortized costs always serve as a strict upper bound on the actual total work done.',
          bn: 'Phi >= ০ নিশ্চিত করে যে অ্যামর্টাইজড খরচের সমষ্টি সর্বদা আসল কাজের চেয়ে বেশি বা সমান থাকে, ফলে এটি সঠিক আপার বাউন্ড হিসেবে কাজ করে।'
        }
      },
      {
        id: 'q-amortized-two-stack-queue',
        kind: 'mcq',
        topic: 'Amortized cost of dequeue in a two-stack queue',
        question: {
          en: 'In a queue constructed from two stacks (inbox and outbox), why is the dequeue operation considered O(1) amortized even though transferring elements takes O(n) occasionally?',
          bn: 'ইনবক্স ও আউটবক্স স্ট্যাক দিয়ে তৈরি কিউতে উপাদান স্থানান্তর করতে মাঝে মাঝে O(n) লাগলেও কেন ডিকিউ অপারেশনকে O(1) অ্যামর্টাইজড বলা হয়?'
        },
        options: [
          {
            en: 'Each element is pushed to the inbox once, popped once, pushed to the outbox once, and popped once, meaning an element participates in at most 4 operations over its entire lifetime',
            bn: 'প্রতিটি উপাদান জীবনে মাত্র একবার ইনবক্সে পুশ হয়, একবার ইনবক্স থেকে পপ হয়, একবার আউটবক্সে পুশ হয় এবং একবার আউটবক্স থেকে বের হয়, ফলে মোট কাজ সর্বোচ্চ ৪টি অপারেশনে সীমাবদ্ধ থাকে'
          },
          {
            en: 'The outbox stack runs on a secondary CPU thread',
            bn: 'আউটবক্স আলাদা সিপিইউ থ্রেডে চলে'
          },
          {
            en: 'The operating system ignores the transfer loop',
            bn: 'অপারেটিং সিস্টেম স্থানান্তর লুপ উপেক্ষা করে'
          },
          {
            en: 'Stacks use linked nodes that require zero instructions',
            bn: 'স্ট্যাকে কোনো ইন্সট্রাকশন লাগে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Track the lifetime cost of each element: at most 2 pushes and 2 pops.',
          bn: 'প্রতিটি উপাদানের পুরো জীবনের মোট কাজের কথা ভাবুন: সর্বোচ্চ ২ বার পুশ ও ২ বার পপ।'
        },
        explanation: {
          en: 'Because an element moves from inbox to outbox at most once, n enqueues and dequeues cost at most 4n operations, proving O(1) amortized cost.',
          bn: 'যেহেতু প্রতিটি উপাদান পুরো প্রক্রিয়ায় সর্বোচ্চ একবারই স্ট্যাক বদল করে, তাই n অপারেশনে মোট কাজ ৪n এর বেশি হতে পারে না, যা গড়ে O(1)।'
        }
      },
      {
        id: 'q-amortized-vector-presizing',
        kind: 'mcq',
        topic: 'Performance impact of reserving vector capacity',
        question: {
          en: 'Why do high-performance database engines call reserve(expectedCount) on dynamic arrays when the input volume is known in advance?',
          bn: 'ইনপুট উপাত্তের সংখ্যা আগে থেকে জানা থাকলে হাই-পারফরম্যান্স ডাটাবেজ ইঞ্জিনগুলো কেন ডায়নামিক অ্যারোতে reserve(expectedCount) কল করে?'
        },
        options: [
          {
            en: 'Pre-allocating the required buffer eliminates all geometric resizing events and memory copying overhead, reducing memory fragmentation and allocation latency',
            bn: 'প্রয়োজনীয় মেমোরি শুরুতেই বরাদ্দ করে নিলে কোনো রি-সাইজ বা মেমোরি কপির প্রয়োজন হয় না, যা মেমোরি ফ্র্যাগমেন্টেশন ও বিলম্ব রোধ করে'
          },
          {
            en: 'Reserving capacity turns the array into a hash map',
            bn: 'রিজার্ভ করলে অ্যারেটি হ্যাশ ম্যাপে রূপ নেয়'
          },
          {
            en: 'It encrypts the buffer to prevent hardware exploits',
            bn: 'এটি মেমোরি বাফার এনক্রিপ্ট করে'
          },
          {
            en: 'It allows storing negative numbers in unsigned arrays',
            bn: 'এটি আনসাইনড অ্যারোতে ঋণাত্মক মান রাখতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pre-allocating prevents any resizing and element copying.',
          bn: 'আগে থেকে জায়গা করে রাখলে কোনো রি-সাইজ বা কপির দরকার পড়ে না।'
        },
        explanation: {
          en: 'Calling reserve() allocates sufficient memory immediately, guaranteeing that subsequent push operations execute in pure O(1) worst-case time without reallocation.',
          bn: 'reserve() শুরুতেই পুরো মেমোরি নিশ্চিত করে, যার ফলে পরবর্তী প্রতিটি পুশ কোনো রি-অ্যালোকেশন ছাড়াই শতভাগ বিশুদ্ধ O(1) সময়ে চলে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-recursion-atelier',
    tech: 'sorting',
    title: {
      en: 'The Recursion Atelier: Call Stacks & Invariants',
      bn: 'দি রিকার্শন আটেলিয়ার: কল স্ট্যাক ও ইনভ্যারিয়েন্ট'
    }
  }
};
