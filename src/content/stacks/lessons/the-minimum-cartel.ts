import type { Lesson } from '../../../lib/types';

export const theMinimumCartelLesson: Lesson = {
  slug: 'the-minimum-cartel',
  tech: 'stacks',
  title: {
    en: 'Min-Stack — Constant-Time Extremal Queries and Auxiliary Tracking',
    bn: 'মিন-স্ট্যাক: ধ্রুবক সময়ে সর্বনিম্ন মান নির্ণয় এবং সহায়ক ট্র্যাকিং'
  },
  summary: {
    en: 'While standard stacks return elements in LIFO order, finding the minimum element typically requires an O(n) linear search. The Min-Stack architecture achieves constant O(1) time for push, pop, top, and getMin simultaneously. We analyze why a single scalar variable fails upon popping, prove the prefix-minimum invariant using parallel auxiliary stacks and value-min tuples, and examine memory-efficient variants such as sharing a single contiguous array between two opposing stacks.',
    bn: 'সাধারণ স্ট্যাক লিফো ক্রমানুসারে ডেটা দিলেও সর্বনিম্ন মান খুঁজতে সাধারণত O(n) রৈখিক খোঁজাখুঁজি করতে হয়। মিন-স্ট্যাক স্থাপত্য পুশ, পপ, টপ এবং getMin প্রতিটি অপারেশনেই ধ্রুবক O(1) গতি নিশ্চিত করে। আমরা বিশ্লেষণ করি কেন একটিমাত্র চলক পপ অপারেশনের সময় ব্যর্থ হয়, সমান্তরাল সহায়ক স্ট্যাক ব্যবহার করে প্রিফিক্স-মিনিমাম ইনভেরিয়েন্ট প্রমাণ করি এবং একই ফিক্সড অ্যারেতে দুই প্রান্ত থেকে দুটি স্ট্যাক চালনার মতো মেমোরি-দক্ষ কৌশল পর্যালোচনা করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-infix-treaty',
    tech: 'stacks',
    title: {
      en: 'Infix to Postfix Conversion — The Shunting-Yard Algorithm',
      bn: 'ইনফিক্স থেকে পোস্টফিক্স রূপান্তর: শান্টিং-ইয়ার্ড অ্যালগরিদম'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'min-stack-paradigm',
      text: {
        en: 'The Constant-Time Minimum Challenge: Why a Single Variable Fails',
        bn: 'ধ্রুবক সময়ে সর্বনিম্ন মান নির্ণয়: কেন একটিমাত্র চলক ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard stack permits pushing, popping, and inspecting the topmost element in O(1) time. However, if an application frequently asks for the minimum element currently stored in the stack, a linear scan requires O(n) time. On high-frequency pipelines with 1,000,000 queries, this naive scan wastes billions of CPU cycles.',
        bn: 'একটি সাধারণ স্ট্যাক O(1) সময়ে শীর্ষ উপাদান পুশ, পপ এবং পরিদর্শন করতে দেয়। কিন্তু যদি কোনো অ্যাপ্লিকেশনে স্ট্যাকের বর্তমান সর্বনিম্ন মানটি বারবার জানতে চাওয়া হয়, তবে সাধারণ খোঁজাখুঁজিতে O(n) সময় নষ্ট হয়। ১,000,000 কুয়েরিযুক্ত উচ্চগতির পাইপলাইনে এই সাধারণ স্ক্যান কোটি কোটি সিপিইউ সাইকেল অপচয় করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A beginner might attempt to maintain a single scalar variable, currentMin. When 5, 3, and 2 are pushed, currentMin correctly becomes 2. But when 2 is popped, the single variable cannot remember that the previous minimum was 3. To maintain O(1) time without rescanning, we must preserve the prefix-minimum for every height of the stack.',
        bn: 'একজন শিক্ষানবিস হয়তো একটিমাত্র চলক currentMin দিয়ে এটি সমাধানের চেষ্টা করতে পারেন। যখন ৫, ৩ এবং ২ পুশ করা হয় তখন currentMin সঠিকভাবে ২ হয়। কিন্তু যখন ২ পপ করে ফেলে দেওয়া হয়, তখন সেই একক চলকটি আর মনে রাখতে পারে না যে আগের সর্বনিম্ন মানটি ৩ ছিল। পুনরায় না খুঁজে O(1) সময় নিশ্চিত করতে আমাদের স্ট্যাকের প্রতিটি উচ্চতার জন্য প্রিফিক্স-মিনিমাম ধরে রাখতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'min-stack',
          def: {
            en: 'A specialized stack supporting push, pop, top, and getMin operations in deterministic O(1) constant time.',
            bn: 'একটি বিশেষায়িত স্ট্যাক যা পুশ, পপ, টপ এবং getMin প্রতিটি অপারেশন সুনির্দিষ্ট ধ্রুবক O(1) সময়ে সম্পন্ন করে।'
          }
        },
        {
          term: 'prefix-minimum',
          def: {
            en: 'The invariant that each position in the auxiliary stack records the minimum value among all elements beneath it.',
            bn: 'একটি সহায়ক স্ট্যাকের প্রতিটি অবস্থানে তার নিচের সমস্ত উপাদানের মধ্যে সর্বনিম্ন মানটি সংরক্ষিত রাখার নিয়ম।'
          }
        },
        {
          term: 'auxiliary-tracking',
          def: {
            en: 'Using a synchronized shadow stack or paired tuples to preserve historical state across pop operations.',
            bn: 'পপ অপারেশনের পরও আগের অবস্থা ঠিক রাখতে সমান্তরাল শ্যাডো স্ট্যাক বা জোড় মান ব্যবহার করা।'
          }
        },
        {
          term: 'two-stacks-one-array',
          def: {
            en: 'An optimization where two stacks grow towards each other from opposite ends of a single contiguous array to prevent memory waste.',
            bn: 'একটি কৌশল যেখানে মেমোরি অপচয় রোধে একটিমাত্র অবিচ্ছিন্ন অ্যারের দুই প্রান্ত থেকে দুটি স্ট্যাক পরস্পরের দিকে বৃদ্ধি পায়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'stack'
    },
    {
      type: 'heading',
      id: 'architectural-approaches',
      text: {
        en: 'Architectural Comparison: Auxiliary Stacks vs Paired Tuples',
        bn: 'স্থাপত্য তুলনা: সহায়ক শ্যাডো স্ট্যাক বনাম জোড় টিউপল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'There are two common architectures to implement a Min-Stack. The first approach runs two parallel stacks: a primary stack for values and an auxiliary stack that records the minimum value seen so far. The second approach stores a single stack containing paired objects { val, min }. Both approaches guarantee that getMin() is a single O(1) array inspection.',
        bn: 'মিন-স্ট্যাক বাস্তবায়নের দুটি সাধারণ পদ্ধতি রয়েছে। প্রথম পদ্ধতিটি দুটি সমান্তরাল স্ট্যাক চালায়: একটি সাধারণ স্ট্যাক মানের জন্য এবং একটি সহায়ক স্ট্যাক যা প্রতিটি স্তরের সর্বনিম্ন মান ধরে রাখে। দ্বিতীয় পদ্ধতিটি একটিমাত্র স্ট্যাকে জোড় অবজেক্ট { val, min } সংরক্ষণ করে। উভয় পদ্ধতিই নিশ্চিত করে যে getMin() মাত্র একটি O(1) অ্যারে ইনডেক্স পরিদর্শনে পাওয়া যায়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Approach Strategy', bn: 'বাস্তবায়ন কৌশল' },
        { en: 'push() Complexity', bn: 'পুশ জটিলতা' },
        { en: 'pop() Complexity', bn: 'পপ জটিলতা' },
        { en: 'getMin() Complexity', bn: 'getMin জটিলতা' }
      ],
      rows: [
        [
          { en: 'Naive Array Rescan', bn: 'সাধারণ অ্যারে পুনরায় খোঁজা' },
          { en: 'O(1) append', bn: 'O(1) শেষে যোগ' },
          { en: 'O(1) pop', bn: 'O(1) পপ' },
          { en: 'O(n) linear scan', bn: 'O(n) রৈখিক খোঁজা' }
        ],
        [
          { en: 'Parallel Shadow Stack', bn: 'সমান্তরাল শ্যাডো স্ট্যাক' },
          { en: 'O(1) dual push', bn: 'O(1) দ্বৈত পুশ' },
          { en: 'O(1) dual pop', bn: 'O(1) দ্বৈত পপ' },
          { en: 'O(1) top read', bn: 'O(1) শীর্ষ পাঠ' }
        ],
        [
          { en: 'Paired Tuples {val, min}', bn: 'জোড় টিউপল {val, min}' },
          { en: 'O(1) object push', bn: 'O(1) অবজেক্ট পুশ' },
          { en: 'O(1) object pop', bn: 'O(1) অবজেক্ট পপ' },
          { en: 'O(1) property read', bn: 'O(1) প্রপার্টি পাঠ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'min-stack-impl',
      text: {
        en: 'Executable MinStack Implementation',
        bn: 'মিন-স্ট্যাকের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements MinStack using dual synchronized arrays. Notice how popping element 2 automatically restores the minimum back to 3 in O(1) time without inspecting the rest of the array.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি দুটি সিঙ্ক্রোনাইজড অ্যারে ব্যবহার করে মিন-স্ট্যাক বাস্তবায়ন করে। লক্ষ্য করুন কীভাবে উপাদান ২ পপ করার পর বাকি অ্যারে স্ক্যান না করেই O(1) সময়ে স্বয়ংক্রিয়ভাবে সর্বনিম্ন মান ৩ এ ফিরে আসে।'
      }
    },
    {
      type: 'code',
      code: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop() {
    if (this.stack.length === 0) return null;
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
  }

  getMin() {
    return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null;
  }
}

const ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log('Pushed: 5, 3, 7, 2');
// Output: Pushed: 5, 3, 7, 2

console.log('Current Top:', ms.top());
// Output: Current Top: 2

console.log('Current Min:', ms.getMin());
// Output: Current Min: 2

const popped1 = ms.pop();
console.log('Popped:', popped1);
// Output: Popped: 2

console.log('New Top:', ms.top());
// Output: New Top: 7

console.log('New Min (restored):', ms.getMin());
// Output: New Min (restored): 3

const popped2 = ms.pop();
console.log('Popped:', popped2);
// Output: Popped: 7

console.log('New Min:', ms.getMin());
// Output: New Min: 3`
    },
    {
      type: 'heading',
      id: 'two-stacks-one-array-mechanics',
      text: {
        en: 'Space Optimization: Two Stacks in a Single Array',
        bn: 'মেমোরি অপ্টিমাইজেশন: একটি অ্যারেতে দুটি স্ট্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A classic memory-optimization interview pattern asks: how can you implement two stacks using only a single fixed-size array? Storing both stacks side-by-side with fixed halves wastes space if one stack grows much larger than the other. The optimal solution lets Stack 1 grow from index 0 upward, while Stack 2 grows from index capacity - 1 downward.',
        bn: 'ইন্টারভিউয়ের একটি ক্লাসিক মেমোরি অপ্টিমাইজেশন প্রশ্ন হলো: একটিমাত্র নির্দিষ্ট আকারের অ্যারে ব্যবহার করে কীভাবে দুটি স্ট্যাক তৈরি করবেন? দুটি স্ট্যাককে সমান দুই ভাগে ভাগ করে রাখলে মেমোরি অপচয় হয় যদি একটি স্ট্যাক অন্যটির চেয়ে বেশি বাড়ে। সর্বোত্তম সমাধান হলো স্ট্যাক ১ কে ইনডেক্স ০ থেকে ডানদিকে বাড়ানো এবং স্ট্যাক ২ কে ইনডেক্স capacity - ১ থেকে বামদিকে বাড়ানো।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Both stacks dynamically share the available buffer. A stack overflow only occurs when top1 + 1 === top2, meaning the entire array is 100 percent utilized regardless of the individual growth rate of either stack.',
        bn: 'উভয় স্ট্যাক একই বাফার ভাগাভাগি করে ব্যবহার করে। স্ট্যাক ওভারফ্লো কেবল তখনই ঘটবে যখন top1 + ১ === top2 হবে, যার অর্থ হলো কোনো স্ট্যাক এককভাবে কতটুকু বেড়েছে তা নির্বিশেষে পুরো অ্যারেটি ১00 শতাংশ পূর্ণ হয়েছে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Deterministic O(1) getMin: Synchronizing a parallel minimum stack ensures retrieving the minimum element never requires an O(n) search.',
          bn: 'ধ্রুবক O(1) getMin: একটি সমান্তরাল মিনিমাম স্ট্যাক রাখলে সর্বনিম্ন মান দেখতে কখনোই O(n) খোঁজাখুঁজি লাগে না।'
        },
        {
          en: 'Prefix-minimum invariant: Each level in the auxiliary stack records the minimum among all elements at or below that position.',
          bn: 'প্রিফিক্স-মিনিমাম নীতি: সহায়ক স্ট্যাকের প্রতিটি স্তর তার নিচের সমস্ত উপাদানের মধ্যে সর্বনিম্ন মানটি ধরে রাখে।'
        },
        {
          en: 'Dual pop restoration: Popping from the main stack simultaneously pops the auxiliary stack, instantaneously restoring the previous minimum.',
          bn: 'স্বয়ংক্রিয় পুনরুদ্ধার: মূল স্ট্যাক থেকে পপ করার সাথে সাথে সহায়ক স্ট্যাক থেকেও পপ হয়, যা তাৎক্ষণিকভাবে আগের সর্বনিম্ন মান ফিরিয়ে আনে।'
        },
        {
          en: 'Opposing stack optimization: Growing two stacks toward each other from opposite ends of an array guarantees complete memory utilization.',
          bn: 'বিপরীতমুখী স্ট্যাক কৌশল: একটি অ্যারের দুই প্রান্ত থেকে দুটি স্ট্যাক মুখোমুখি বাড়ালে মেমোরির শতভাগ সদ্ব্যবহার নিশ্চিত হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'min-ex1',
      kind: 'mcq',
      topic: 'single-variable-limitation',
      question: {
        en: 'Why is storing a single scalar variable currentMin insufficient to support O(1) getMin in a stack?',
        bn: 'একটি স্ট্যাকে O(1) সময়ে getMin পাওয়ার জন্য কেন একটিমাত্র সাধারণ চলক currentMin রাখা অপর্যাপ্ত?'
      },
      options: [
        {
          en: 'When the minimum element is popped, a single variable cannot restore the previous minimum without performing an O(n) rescan',
          bn: 'যখন সর্বনিম্ন উপাদানটি পপ করা হয়, তখন একটিমাত্র চলক O(n) পুনরায় খোঁজা ছাড়া আগের সর্বনিম্ন মানটি পুনরুদ্ধার করতে পারে না'
        },
        {
          en: 'JavaScript variables cannot hold numbers smaller than 0',
          bn: 'জাভাস্ক্রিপ্ট চলক ০ এর চেয়ে ছোট সংখ্যা ধরে রাখতে পারে না'
        },
        {
          en: 'CPUs can only compare two numbers once per hour',
          bn: 'সিপিইউ প্রতি ঘণ্টায় কেবল একবার দুটি সংখ্যা তুলনা করতে পারে'
        },
        {
          en: 'Single variables cause memory buffer leaks in operating system kernels',
          bn: 'একক চলক অপারেটিং সিস্টেম কার্নেলে মেমোরি বাফার লিক তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you push 5, then 2, then pop 2: what should the minimum become?',
        bn: 'আপনি যদি ৫ পুশ করেন, তারপর ২ পুশ করেন, তারপর ২ পপ করেন: তখন সর্বনিম্ন মান কত হবে?'
      },
      explanation: {
        en: 'A single variable only stores the current state. It possesses no historical memory of what the minimum was before the current element arrived.',
        bn: 'একটিমাত্র চলক কেবল বর্তমান অবস্থা ধরে রাখে। বর্তমান উপাদানটি আসার আগে সর্বনিম্ন মান কী ছিল তার কোনো অতীত ইতিহাস এটি মনে রাখতে পারে না।'
      }
    },
    {
      id: 'min-ex2',
      kind: 'mcq',
      topic: 'auxiliary-stack-invariant',
      question: {
        en: 'In the parallel Min-Stack architecture, what value is pushed onto minStack when push(x) is called?',
        bn: 'সমান্তরাল মিন-স্ট্যাক স্থাপত্যে যখন push(x) কল করা হয়, তখন minStack-এ কোন মানটি পুশ করা হয়?'
      },
      options: [
        {
          en: 'Math.min(x, minStack.at(-1)), preserving the minimum value seen from the bottom of the stack up to current height',
          bn: 'Math.min(x, minStack.at(-1)), যা স্ট্যাকের নিচ থেকে বর্তমান উচ্চতা পর্যন্ত দেখা সর্বনিম্ন মানটি বজায় রাখে'
        },
        {
          en: 'Always 0',
          bn: 'সর্বদা ০'
        },
        {
          en: 'The square root of x',
          bn: 'x এর বর্গমূল'
        },
        {
          en: 'The total length of the array multiplied by 2',
          bn: 'অ্যারের মোট দৈর্ঘ্যকে ২ দিয়ে গুণ করা মান'
        }
      ],
      answer: 0,
      hint: {
        en: 'The new minimum is the smaller of the arriving value and the current minimum.',
        bn: 'নতুন সর্বনিম্ন মানটি হবে আগত মান এবং বর্তমান সর্বনিম্ন মানের মধ্যে যেটি ছোট।'
      },
      explanation: {
        en: 'Pushing the minimum of x and the current top of minStack guarantees that minStack.top() is always the minimum of the stack at that height.',
        bn: 'x এবং minStack এর শীর্ষের মধ্যে ছোটটি পুশ করলে নিশ্চিত হয় যে minStack এর শীর্ষে সর্বদা সেই উচ্চতা পর্যন্ত সর্বনিম্ন মানটি থাকবে।'
      }
    },
    {
      id: 'min-ex3',
      kind: 'mcq',
      topic: 'two-stacks-one-array-overflow',
      question: {
        en: 'When implementing two stacks in a single array of size N where Stack 1 starts at index 0 and Stack 2 starts at index N - 1, when does stack overflow occur?',
        bn: 'N আকারের একটি অ্যারেতে দুটি স্ট্যাক তৈরি করলে যেখানে স্ট্যাক ১ ইনডেক্স ০ থেকে এবং স্ট্যাক ২ ইনডেক্স N - ১ থেকে শুরু হয়, কখন স্ট্যাক ওভারফ্লো ঘটবে?'
      },
      options: [
        {
          en: 'When top1 + 1 === top2, meaning the two pointer boundaries collide and all array slots are full',
          bn: 'যখন top1 + ১ === top2 হবে, যার অর্থ হলো দুটি পয়েন্টারের সীমানা ধাক্কা খেয়েছে এবং অ্যারের সমস্ত স্থান পূর্ণ হয়েছে'
        },
        {
          en: 'When Stack 1 reaches index N / 2, even if Stack 2 is completely empty',
          bn: 'যখন স্ট্যাক ১ ইনডেক্স N / ২ এ পৌঁছাবে, এমনকি স্ট্যাক ২ সম্পূর্ণ খালি থাকলেও'
        },
        {
          en: 'Whenever a negative number is pushed to Stack 2',
          bn: 'যখনই স্ট্যাক ২ তে কোনো ঋণাত্মক সংখ্যা পুশ করা হবে'
        },
        {
          en: 'When the CPU temperature exceeds 50 degrees Celsius',
          bn: 'সিপিইউ তাপমাত্রা ৫০ ডিগ্রি সেলসিয়াস অতিক্রম করলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Both stacks grow towards each other. When do their pointers meet?',
        bn: 'দুটি স্ট্যাক একে অপরের দিকে বাড়ে। তাদের পয়েন্টার দুটি কখন মিলিত হবে?'
      },
      explanation: {
        en: 'Growing the stacks toward each other allows either stack to use any available space. Overflow happens only when the two pointers meet, utilizing 100 percent of memory.',
        bn: 'স্ট্যাক দুটি পরস্পরের দিকে বাড়লে যেকোনো স্ট্যাক খালি জায়গা ব্যবহার করতে পারে। কেবল পয়েন্টার দুটি মিলিত হলেই ওভারফ্লো হয়, যা ১০০ শতাংশ মেমোরি ব্যবহার নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'minimum-cartel-quiz',
    title: {
      en: 'Min-Stack and Dual Stack Optimization Quiz',
      bn: 'মিন-স্ট্যাক এবং ডুয়াল স্ট্যাক অপ্টিমাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'min-q1',
        kind: 'mcq',
        topic: 'get-min-complexity',
        question: {
          en: 'What is the time complexity of the getMin() operation in a properly implemented Min-Stack?',
          bn: 'যথাযথভাবে বাস্তবায়িত মিন-স্ট্যাকে getMin() অপারেশনের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) constant time',
            bn: 'O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(n) linear search time',
            bn: 'O(n) রৈখিক খোঁজার সময়'
          },
          {
            en: 'O(log n) tree search time',
            bn: 'O(log n) ট্রি খোঁজার সময়'
          },
          {
            en: 'O(n^2) quadratic time',
            bn: 'O(n^2) চতুর্ঘাতী সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The minimum element is stored directly at the top of the auxiliary stack.',
          bn: 'সর্বনিম্ন উপাদানটি সরাসরি সহায়ক স্ট্যাকের শীর্ষে সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'Because minStack holds the prefix minimums, reading minStack[minStack.length - 1] takes O(1) constant time.',
          bn: 'যেহেতু minStack প্রিফিক্স মিনিমাম ধরে রাখে, তাই minStack[minStack.length - ১] দিয়ে শেষ উপাদানটি পড়তে ধ্রুবক O(1) সময় লাগে।'
        }
      },
      {
        id: 'min-q2',
        kind: 'mcq',
        topic: 'space-overhead',
        question: {
          en: 'What is the auxiliary space complexity of using a parallel shadow stack to support O(1) getMin for n elements?',
          bn: 'n উপাদানের জন্য O(1) getMin পেতে সমান্তরাল শ্যাডো স্ট্যাক ব্যবহারের মেমোরি খরচ (স্পেস জটিলতা) কত?'
        },
        options: [
          {
            en: 'O(n) auxiliary space, because the shadow stack grows synchronously with the main stack',
            bn: 'O(n) অতিরিক্ত মেমোরি, কারণ শ্যাডো স্ট্যাক মূল স্ট্যাকের সাথে সমানভাবে বৃদ্ধি পায়'
          },
          {
            en: 'O(1) strictly zero additional memory',
            bn: 'O(1) সম্পূর্ণ শূন্য অতিরিক্ত মেমোরি'
          },
          {
            en: 'O(n^2) quadratic space',
            bn: 'O(n^2) চতুর্ঘাতী মেমোরি'
          },
          {
            en: 'O(2^n) exponential space',
            bn: 'O(2^n) সূচকীয় মেমোরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'For each element pushed onto mainStack, an element is pushed onto minStack.',
          bn: 'mainStack এ প্রতিটি উপাদানের জন্য minStack এ একটি উপাদান পুশ করা হয়।'
        },
        explanation: {
          en: 'The shadow stack holds exactly one prefix minimum entry per element in the primary stack, requiring O(n) space.',
          bn: 'শ্যাডো স্ট্যাক মূল স্ট্যাকের প্রতি উপাদানের বিপরীতে ঠিক একটি প্রিফিক্স মিনিমাম রাখে, যার জন্য O(n) মেমোরি লাগে।'
        }
      },
      {
        id: 'min-q3',
        kind: 'mcq',
        topic: 'paired-tuples-alternative',
        question: {
          en: 'Instead of two separate arrays, how can Min-Stack be implemented inside a single array?',
          bn: 'দুটি পৃথক অ্যারের পরিবর্তে কীভাবে একটিমাত্র অ্যারের ভেতরে মিন-স্ট্যাক বাস্তবায়ন করা যায়?'
        },
        options: [
          {
            en: 'By pushing paired objects or two-element tuples [value, currentMin] onto the single stack',
            bn: 'একটিমাত্র স্ট্যাকে জোড় অবজেক্ট বা দুই উপাদানের টিউপল [value, currentMin] পুশ করার মাধ্যমে'
          },
          {
            en: 'By multiplying each number by -1 before pushing',
            bn: 'পুশ করার আগে প্রতিটি সংখ্যাকে -১ দিয়ে গুণ করে'
          },
          {
            en: 'By sorting the array using quicksort on every push',
            bn: 'প্রতিটি পুশের পর কুইকসর্ট দিয়ে অ্যারেকে সাজিয়ে'
          },
          {
            en: 'By discarding the oldest element whenever a smaller number arrives',
            bn: 'ছোট সংখ্যা আসার সাথে সাথে সবচেয়ে পুরনো উপাদানটি ফেলে দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Store both the value and the minimum-so-far together in one container.',
          bn: 'মান এবং তৎকালীন সর্বনিম্ন মান দুটিকে একসাথে একটি পাত্রে রাখুন।'
        },
        explanation: {
          en: 'Storing { val, min } in each stack entry bundles the value and its historical prefix minimum together in a single array.',
          bn: 'প্রতিটি স্ট্যাক এন্ট্রিতে { val, min } রাখলে মান এবং তার প্রিফিক্স মিনিমাম একটিমাত্র অ্যারেতেই আবদ্ধ থাকে।'
        }
      },
      {
        id: 'min-q4',
        kind: 'mcq',
        topic: 'restoration-trace',
        question: {
          en: 'Given a MinStack with elements pushed in order [10, 4, 8, 2], what is the result of getMin() after calling pop() once?',
          bn: 'একটি মিন-স্ট্যাকে ক্রমানুসারে [১০, ৪, ৮, ২] পুশ করা হলে একবার pop() ডাকার পর getMin() এর ফলাফল কত হবে?'
        },
        options: [
          {
            en: '4, because 2 is popped, and 4 was the minimum among the remaining elements [10, 4, 8]',
            bn: '৪, কারণ ২ পপ হয়ে গেছে এবং অবশিষ্ট উপাদান [১০, ৪, ৮] এর মধ্যে সর্বনিম্ন মান ছিল ৪'
          },
          {
            en: '2',
            bn: '২'
          },
          {
            en: '8',
            bn: '৮'
          },
          {
            en: '10',
            bn: '১০'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trace the minStack entries: [10, 4, 4, 2]. When 2 is popped, what is at the top of minStack?',
          bn: 'minStack এর মানগুলো লক্ষ করুন: [১০, ৪, ৪, ২]। যখন ২ পপ হয়, তখন minStack এর শীর্ষে কী থাকে?'
        },
        explanation: {
          en: 'The minStack mirrored values were [10, 4, 4, 2]. Popping removes 2, leaving 4 at the top of minStack.',
          bn: 'minStack এ মান ছিল [১০, ৪, ৪, ২]। পপ করার ফলে ২ অপসারিত হয় এবং minStack এর শীর্ষে ৪ অবশিষ্ট থাকে।'
        }
      }
    ]
  }
};
