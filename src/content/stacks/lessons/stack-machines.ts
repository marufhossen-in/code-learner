import type { Lesson } from '../../../lib/types';

export const stackMachinesLesson: Lesson = {
  slug: 'stack-machines',
  tech: 'stacks',
  title: {
    en: 'Stack Machines — Postfix Evaluation, Bytecode VMs, and Call Stacks',
    bn: 'স্ট্যাক মেশিন: পোস্টফিক্স মূল্যায়ন, বাইটকোড ভার্চুয়াল মেশিন এবং কল স্ট্যাক'
  },
  summary: {
    en: 'While basic stacks store raw data, stack machines execute entire computer programs. In Reverse Polish Notation (RPN), an evaluation stack eliminates grammatical parentheses, allowing expressions to execute in linear O(n) time. We examine how virtual machine runtimes like JVM and WebAssembly execute bytecode instructions on operand stacks, analyze call stack frame allocation during function execution, and trace why infinite recursion triggers stack overflow budget exhaustion.',
    bn: 'সাধারণ স্ট্যাক কাঁচা তথ্য সংরক্ষণ করলেও স্ট্যাক মেশিন সম্পূর্ণ কম্পিউটার প্রোগ্রাম সম্পাদন করে। রিভার্স পোলিশ নোটেশনে (RPN) একটি মূল্যায়ন স্ট্যাক ব্যাকরণগত বন্ধনীর প্রয়োজনীয়তা দূর করে রৈখিক O(n) সময়ে গাণিতিক রাশি সম্পাদন করে। আমরা পরীক্ষা করি কীভাবে জেভিএম এবং ওয়েবঅ্যাসেম্বলির মতো ভার্চুয়াল মেশিন অপারেন্ড স্ট্যাকে বাইটকোড নির্দেশ চালায়, ফাংশন সম্পাদনের সময় কল স্ট্যাক ফ্রেম বরাদ্দ বিশ্লেষণ করি এবং অনুসন্ধান করি কেন অসীম রিকার্শন স্ট্যাক ওভারফ্লো বাজেট সমাপ্তি ঘটায়।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-bracket-court',
    tech: 'stacks',
    title: {
      en: 'Balanced Brackets — Parsing, Syntax Trees, and Nesting Invariants',
      bn: 'সুষম বন্ধনী: পার্সিং, সিনট্যাক্স ট্রি এবং নেস্টিং ইনভেরিয়েন্ট'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'stack-machines-paradigm',
      text: {
        en: 'The Execution Engine: Beyond Storage to Computation',
        bn: 'সম্পাদন ইঞ্জিন: সংরক্ষণের বাইরে গণনামুখী স্ট্যাক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A stack is far more than a passive collection for holding plates or browser history. The stack is the computational engine powering programming language runtimes. When you call a function in JavaScript, Python, or Go, your operating system allocates a stack frame to track execution context, local variables, and return addresses.',
        bn: 'স্ট্যাক শুধুমাত্র থালা বা ব্রাউজার হিস্ট্রি রাখার জন্য একটি নিষ্ক্রিয় ডেটা কাঠামো নয়। স্ট্যাক হলো প্রোগ্রামিং ভাষার রানটাইম চালানোর মূল গণনা ইঞ্জিন। যখন আপনি জাভাস্ক্রিপ্ট, পাইথন বা গো ভাষায় একটি ফাংশন কল করেন, তখন আপনার অপারেটিং সিস্টেম এক্সিকিউশন কনটেক্সট, স্থানীয় চলক এবং রিটার্ন ঠিকানা ট্র্যাক করতে একটি স্ট্যাক ফ্রেম বরাদ্দ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Furthermore, virtual machines such as the Java Virtual Machine (JVM) and WebAssembly (Wasm) run on stack architectures. Instead of requiring complex hardware register allocation algorithms, virtual stack machines execute instructions by pushing operands onto an evaluation stack and popping them when operators are encountered.',
        bn: 'তাছাড়া জাভা ভার্চুয়াল মেশিন (JVM) এবং ওয়েবঅ্যাসেম্বলির (Wasm) মতো আধুনিক রানটাইমগুলো স্ট্যাক আর্কিটেকচারের ওপর চলে। জটিল হার্ডওয়্যার রেজিস্টার ম্যানেজমেন্ট অ্যালগরিদমের পরিবর্তে এই ভার্চুয়াল স্ট্যাক মেশিনগুলো অপারেন্ড স্ট্যাকে মান পুশ করে এবং অপারেটর পেলে পপ করে নির্দেশ সম্পাদন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'stack-machine',
          def: {
            en: 'A computational model that uses a pushdown operand stack for arithmetic and instruction execution instead of hardware registers.',
            bn: 'এমন একটি গণনা মডেল যা নির্দেশ সম্পাদন এবং পাটিগণিতের জন্য হার্ডওয়্যার রেজিস্টারের বদলে পুশডাউন অপারেন্ড স্ট্যাক ব্যবহার করে।'
          }
        },
        {
          term: 'reverse-polish-notation',
          def: {
            en: 'A postfix mathematical notation where operators follow operands, removing the need for precedence rules or grouping parentheses.',
            bn: 'একটি পোস্টফিক্স গাণিতিক নোটেশন যেখানে অপারেটররা অপারেন্ডের পরে বসে, ফলে বন্ধনী বা অগ্রাধিকারের নিয়মের প্রয়োজন হয় না।'
          }
        },
        {
          term: 'call-stack-frame',
          def: {
            en: 'A memory block pushed onto the execution stack containing function parameters, local variables, and the return instruction address.',
            bn: 'ফাংশন প্যারামিটার, স্থানীয় চলক এবং রিটার্ন ঠিকানাসহ কল স্ট্যাকে সংরক্ষিত একটি মেমোরি ব্লক।'
          }
        },
        {
          term: 'stack-overflow',
          def: {
            en: 'A fatal runtime error occurring when continuous nested function calls exceed the fixed memory space allocated for the thread call stack.',
            bn: 'একটি মারাত্মক রানটাইম ইরর যা ঘটে যখন একটানা নেস্টেড ফাংশন কল থ্রেড স্ট্যাকের জন্য বরাদ্দকৃত নির্দিষ্ট মেমোরি সীমা ছাড়িয়ে যায়।'
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
      id: 'postfix-evaluation-mechanics',
      text: {
        en: 'Evaluating Postfix Expressions via an Operand Stack',
        bn: 'অপারেন্ড স্ট্যাকের মাধ্যমে পোস্টফিক্স রাশির মূল্যায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard mathematical equations use Infix notation, such as (3 + 4) * 2, where operators sit between operands. Infix requires parsing trees, precedence tables, and parentheses. In Reverse Polish Notation (RPN) or Postfix notation, the operator appears immediately after its operands: 3 4 + 2 *. Postfix expressions require 0 parentheses and can be evaluated in a single pass using an operand stack.',
        bn: 'সাধারণ গাণিতিক সমীকরণগুলো ইনফিক্স (Infix) পদ্ধতি ব্যবহার করে, যেমন (৩ + ৪) * ২, যেখানে অপারেটর অপারেন্ডগুলোর মাঝে বসে। ইনফিক্সে বন্ধনী এবং অগ্রাধিকারের জটিলতা থাকে। রিভার্স পোলিশ নোটেশন (RPN) বা পোস্টফিক্স পদ্ধতিতে অপারেটর তার অপারেন্ডগুলোর ঠিক পেছনে বসে: ৩ ৪ + ২ *। পোস্টফিক্স রাশিতে ০ টি বন্ধনী লাগে এবং একটি সাধারণ স্ট্যাক দিয়ে এক ধাপে এর মান বের করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The algorithm scans tokens from left to right. When a number is read, it is pushed onto the stack. When an operator is read, the top two numbers are popped (the first popped is the right-hand operand, the second is the left-hand operand), the operator is applied, and the result is pushed back onto the stack. When all tokens are processed, the single remaining element on the stack is the final answer.',
        bn: 'অ্যালগরিদমটি বাম থেকে ডানে টোকেনগুলো পড়ে। একটি সংখ্যা পেলে তা স্ট্যাকে পুশ করা হয়। একটি অপারেটর পেলে স্ট্যাকের শীর্ষ দুটি সংখ্যা পপ করা হয় (প্রথম পপ করা সংখ্যাটি ডান পাশের অপারেন্ড এবং দ্বিতীয়টি বাম পাশের অপারেন্ড), অপারেশনটি সম্পন্ন করে ফলাফল পুনরায় স্ট্যাকে পুশ করা হয়। সমস্ত টোকেন শেষ হলে স্ট্যাকে অবশিষ্ট একক সংখ্যাটিই চূড়ান্ত উত্তর।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Step Number', bn: 'ধাপ নম্বর' },
        { en: 'Token Processed', bn: 'টোকেন' },
        { en: 'Stack Action Taken', bn: 'স্ট্যাকের কাজ' },
        { en: 'Stack Contents', bn: 'স্ট্যাকের অবস্থা' }
      ],
      rows: [
        [
          { en: 'Step 1', bn: 'ধাপ ১' },
          { en: '3', bn: '৩' },
          { en: 'Push number 3', bn: 'সংখ্যা ৩ পুশ' },
          { en: '[3]', bn: '[৩]' }
        ],
        [
          { en: 'Step 2', bn: 'ধাপ ২' },
          { en: '4', bn: '৪' },
          { en: 'Push number 4', bn: 'সংখ্যা ৪ পুশ' },
          { en: '[3, 4]', bn: '[৩, ৪]' }
        ],
        [
          { en: 'Step 3', bn: 'ধাপ ৩' },
          { en: '+', bn: '+' },
          { en: 'Pop 4 and 3, push (3 + 4) = 7', bn: '৪ ও ৩ পপ, পুশ (৩ + ৪) = ৭' },
          { en: '[7]', bn: '[৭]' }
        ],
        [
          { en: 'Step 4', bn: 'ধাপ ৪' },
          { en: '2', bn: '২' },
          { en: 'Push number 2', bn: 'সংখ্যা ২ পুশ' },
          { en: '[7, 2]', bn: '[৭, ২]' }
        ],
        [
          { en: 'Step 5', bn: 'ধাপ ৫' },
          { en: '*', bn: '*' },
          { en: 'Pop 2 and 7, push (7 * 2) = 14', bn: '২ ও ৭ পপ, পুশ (৭ * ২) = ১৪' },
          { en: '[14]', bn: '[১৪]' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'postfix-eval-impl',
      text: {
        en: 'Executable Postfix Evaluator Implementation',
        bn: 'পোস্টফিক্স ইভ্যালুয়েটরের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program evaluates Reverse Polish Notation expressions. It safely checks for stack underflow and verifies that exactly 1 answer remains after processing all tokens.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি রিভার্স পোলিশ নোটেশন রাশি মূল্যায়ন করে। এটি নিরাপদে স্ট্যাক আন্ডারফ্লো পরীক্ষা করে এবং নিশ্চিত করে যে সমস্ত টোকেন প্রক্রিয়াকরণের পর স্ট্যাকে ঠিক ১টি উত্তর অবশিষ্ট থাকে।'
      }
    },
    {
      type: 'code',
      code: `function evaluateRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      if (stack.length < 2) {
        throw new Error('Malformed expression: insufficient operands');
      }
      const b = stack.pop();
      const a = stack.pop();
      let res;
      if (token === '+') res = a + b;
      else if (token === '-') res = a - b;
      else if (token === '*') res = a * b;
      else if (token === '/') res = Math.trunc(a / b);
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }

  if (stack.length !== 1) {
    throw new Error('Malformed expression: leftover operands');
  }

  return stack[0];
}

const expr1 = ['3', '4', '+', '2', '*'];
const res1 = evaluateRPN(expr1);
console.log('Tokens 1:', expr1.join(' '));
// Output: Tokens 1: 3 4 + 2 *
console.log('Evaluated 1:', res1);
// Output: Evaluated 1: 14

const expr2 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
const res2 = evaluateRPN(expr2);
console.log('Tokens 2:', expr2.join(' '));
// Output: Tokens 2: 10 6 9 3 + -11 * / * 17 + 5 +
console.log('Evaluated 2:', res2);
// Output: Evaluated 2: 22`
    },
    {
      type: 'heading',
      id: 'call-stack-frames',
      text: {
        en: 'The Anatomy of Call Stack Frames and Stack Overflow',
        bn: 'কল স্ট্যাক ফ্রেমের ব্যবচ্ছেদ এবং স্ট্যাক ওভারফ্লো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Operating system threads are allocated a fixed memory space (typically 1 MB to 8 MB) dedicated to execution context. Function invocations push activation records containing parameters, local variables, and return pointers. Once a function completes, its frame is removed, allowing the program counter to resume earlier work.',
        bn: 'অপারেটিং সিস্টেম থ্রেডগুলোকে এক্সিকিউশন কনটেক্সটের জন্য একটি নির্দিষ্ট মেমোরি অঞ্চল দেওয়া হয় (সাধারণত ১ এমবি থেকে ৮ এমবি)। কোনো ফাংশন কল হলে প্যারামিটার, লোকাল ভেরিয়েবল এবং রিটার্ন পয়েন্টার ধারণকারী একটি অ্যাক্টিভেশন রেকর্ড পুশ হয়। ফাংশনের কাজ শেষ হলে সেই ফ্রেমটি সরে যায় এবং প্রোগ্রাম কাউন্টার আগের নির্দেশনায় ফিরে আসে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Stack overflow occurs when recursive functions fail to hit a base case. Because each call rents a new stack frame without releasing the previous one, the thread exhausts its fixed memory budget. The runtime halts execution with a fatal RangeError: Maximum call stack size exceeded.',
        bn: 'যখন কোনো রিকার্সিভ ফাংশন বেস কেস স্পর্শ করতে ব্যর্থ হয় তখন স্ট্যাক ওভারফ্লো ঘটে। প্রতিটি কল আগের ফ্রেমটি না মুছে একটি নতুন ফ্রেম তৈরি করতে থাকে, ফলে থ্রেডের নির্দিষ্ট মেমোরি ফুরিয়ে যায়। রানটাইম একটি মারাত্মক RangeError: Maximum call stack size exceeded ইরর দিয়ে প্রোগ্রামটি থামিয়ে দেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Execution over storage: Stacks power expression evaluators, bytecode virtual machines, and call stacks in modern runtimes.',
          bn: 'গণনা ও সম্পাদন: স্ট্যাক শুধুমাত্র ডেটা রাখে না, আধুনিক রানটাইমে গাণিতিক মূল্যায়ন এবং কল স্ট্যাকের ভিত্তি হিসেবে কাজ করে।'
        },
        {
          en: 'Zero parentheses in RPN: Reverse Polish Notation evaluates nested expressions in linear O(n) time using an operand stack.',
          bn: 'শূন্য বন্ধনীতে মূল্যায়ন: রিভার্স পোলিশ নোটেশন অপারেন্ড স্ট্যাক ব্যবহার করে কোনো বন্ধনী ছাড়াই রৈখিক O(n) সময়ে ফলাফল দেয়।'
        },
        {
          en: 'Operand order sensitivity: The first popped element is the right-hand operand (rhs), and the second popped is the left-hand operand (lhs).',
          bn: 'অপারেন্ডের ক্রম সচেতনতা: স্ট্যাক থেকে প্রথম পপ করা সংখ্যাটি ডান পাশের অপারেন্ড এবং দ্বিতীয়টি বাম পাশের অপারেন্ড।'
        },
        {
          en: 'Fixed call stack budget: Infinite recursion exhausts the thread fixed stack memory, triggering a stack overflow RangeError.',
          bn: 'নির্দিষ্ট স্ট্যাক বাজেট: অসীম রিকার্শন থ্রেডের সংরক্ষিত মেমোরি শেষ করে ফেলে মারাত্মক স্ট্যাক ওভারফ্লো তৈরি করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sm-ex1',
      kind: 'mcq',
      topic: 'rpn-operand-order',
      question: {
        en: 'When evaluating the postfix expression 15 3 - with an operand stack, how are the operands assigned to the subtraction operator?',
        bn: 'একটি অপারেন্ড স্ট্যাক দিয়ে ১৫ ৩ - পোস্টফিক্স রাশিটি মূল্যায়নের সময় বিয়োগ অপারেটরে অপারেন্ডগুলো কীভাবে বরাদ্দ হবে?'
      },
      options: [
        {
          en: '3 is popped first as the right-hand operand, 15 is popped second as the left-hand operand, computing 15 - 3 = 12',
          bn: '৩ প্রথমে পপ হয়ে ডান পাশের অপারেন্ড হয়, ১৫ দ্বিতীয়বারে পপ হয়ে বাম পাশের অপারেন্ড হয়, ফলে ১৫ - ৩ = ১২ নির্ণয় হয়'
        },
        {
          en: '15 is popped first as the right-hand operand, 3 is popped second as the left-hand operand, computing 3 - 15 = -12',
          bn: '১৫ প্রথমে পপ হয়ে ডান পাশের অপারেন্ড হয়, ৩ দ্বিতীয়বারে পপ হয়ে বাম পাশের অপারেন্ড হয়, ফলে ৩ - ১৫ = -১২ নির্ণয় হয়'
        },
        {
          en: 'Both numbers are multiplied together to produce 45',
          bn: 'উভয় সংখ্যাকে একসাথে গুণ করে ৪৫ তৈরি করা হয়'
        },
        {
          en: 'The expression crashes because postfix cannot handle subtraction',
          bn: 'রাশিটি ক্র্যাশ করে কারণ পোস্টফিক্সে বিয়োগ করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The most recently pushed number (top of stack) was on the right side of the equation.',
        bn: 'সবার শেষে পুশ করা সংখ্যাটি (স্ট্যাকের শীর্ষে থাকা সংখ্যা) সমীকরণের ডান পাশে ছিল।'
      },
      explanation: {
        en: 'Because stacks are LIFO, the top item is the right-hand side (rhs). The next item down is the left-hand side (lhs). So lhs - rhs = 15 - 3 = 12.',
        bn: 'যেহেতু স্ট্যাক লিফো নিয়মে চলে, তাই উপরের মানটি ডান পাশের (rhs)। নিচের মানটি বাম পাশের (lhs)। সুতরাং lhs - rhs = ১৫ - ৩ = ১২।'
      }
    },
    {
      id: 'sm-ex2',
      kind: 'mcq',
      topic: 'stack-overflow-root-cause',
      question: {
        en: 'What is the precise root cause of a Stack Overflow error in modern programming runtimes?',
        bn: 'আধুনিক প্রোগ্রামিং রানটাইমে স্ট্যাক ওভারফ্লো ইররের মূল কারণ কী?'
      },
      options: [
        {
          en: 'Consecutive nested function calls allocate stack frames until the thread fixed reserved memory budget is completely exhausted',
          bn: 'ধারাবাহিক নেস্টেড ফাংশন কল স্ট্যাক ফ্রেম বরাদ্দ করতে করতে থ্রেডের সংরক্ষিত নির্দিষ্ট মেমোরি বাজেট সম্পূর্ণরূপে শেষ করে ফেলে'
        },
        {
          en: 'The CPU motherboard runs out of electrical voltage',
          bn: 'সিপিইউ মাদারবোর্ডে বৈদ্যুতিক ভোল্টেজ শেষ হয়ে যায়'
        },
        {
          en: 'The hard disk drive fills up with temporary image files',
          bn: 'হার্ড ডিস্ক অস্থায়ী ইমেজ ফাইলে সম্পূর্ণ পূর্ণ হয়ে যায়'
        },
        {
          en: 'The browser JavaScript engine disables garbage collection',
          bn: 'ব্রাউজার জাভাস্ক্রিপ্ট ইঞ্জিন গার্বেজ কালেকশন বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each unreturned function call holds an allocated stack frame in RAM.',
        bn: 'প্রতিটি অসমাপ্ত ফাংশন কল র্যামে একটি বরাদ্দকৃত স্ট্যাক ফ্রেম ধরে রাখে।'
      },
      explanation: {
        en: 'Call stacks have a fixed memory limit (e.g. 1 MB). Unbounded recursion keeps pushing frames without popping, exceeding the memory boundary.',
        bn: 'কল স্ট্যাকের একটি নির্দিষ্ট মেমোরি সীমা থাকে (যেমন ১ এমবি)। সীমাহীন রিকার্শন ফ্রেম পুশ করতেই থাকে কিন্তু পপ করে না, ফলে মেমোরি সীমা অতিক্রম করে।'
      }
    },
    {
      id: 'sm-ex3',
      kind: 'mcq',
      topic: 'rpn-parentheses',
      question: {
        en: 'Why do compiler virtual machines like JVM and WebAssembly compile high-level code into stack-based postfix bytecode instructions?',
        bn: 'জেভিএম এবং ওয়েবঅ্যাসেম্বলির মতো কম্পাইলার ভার্চুয়াল মেশিনগুলো কেন উচ্চস্তরের কোডকে স্ট্যাক-ভিত্তিক পোস্টফিক্স বাইটকোডে রূপান্তর করে?'
      },
      options: [
        {
          en: 'Postfix instructions eliminate grouping parentheses and complex operator precedence rules, executing in linear O(n) time via a simple push/pop stack',
          bn: 'পোস্টফিক্স নির্দেশাবলীতে কোনো বন্ধনী বা জটিল অগ্রাধিকারের নিয়ম থাকে না, যা সাধারণ পুশ/পপ স্ট্যাকের মাধ্যমে রৈখিক O(n) সময়ে কার্যকর হয়'
        },
        {
          en: 'Postfix code reduces file download sizes by exactly 99 percent',
          bn: 'পোস্টফিক্স কোড ফাইল ডাউনলোডের আকার ঠিক ৯৯ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Hardware keyboards can only type numbers in reverse order',
          bn: 'হার্ডওয়্যার কিবোর্ড কেবল উল্টো ক্রমে সংখ্যা টাইপ করতে পারে'
        },
        {
          en: 'Virtual machines are legally prohibited from evaluating infix expressions',
          bn: 'ভার্চুয়াল মেশিনগুলোর জন্য ইনফিক্স রাশি মূল্যায়ন করা আইনত নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about parsing speed: how fast can an interpreter execute linear instructions without checking precedence trees?',
        bn: 'পার্সিং গতির কথা ভাবুন: অগ্রাধিকার যাচাই ছাড়া একটি ইন্টারপ্রেটার কত দ্রুত কাজ করতে পারে?'
      },
      explanation: {
        en: 'A stack machine requires only a pointer and an array of values, allowing lean, fast, and cross-platform bytecode execution without register mapping.',
        bn: 'স্ট্যাক মেশিনের জন্য কেবল একটি পয়েন্টার ও মানগুলোর অ্যারে প্রয়োজন, যা রেজিস্টার ম্যাপিং ছাড়াই দ্রুত ও প্ল্যাটফর্ম-স্বাধীন বাইটকোড চালানো নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'stack-machines-quiz',
    title: {
      en: 'Stack Machines and Execution Engines Quiz',
      bn: 'স্ট্যাক মেশিন এবং এক্সিকিউশন ইঞ্জিন কুইজ'
    },
    questions: [
      {
        id: 'sm-q1',
        kind: 'mcq',
        topic: 'eval-rpn-edge-case',
        question: {
          en: 'After evaluating all tokens in an RPN expression, what condition indicates that the input expression was malformed?',
          bn: 'একটি RPN রাশির সমস্ত টোকেন মূল্যায়নের পর কোন শর্তটি নির্দেশ করে যে ইনপুট রাশিটি ত্রুটিপূর্ণ ছিল?'
        },
        options: [
          {
            en: 'The stack length is not equal to 1 (either empty or contains leftover unconsumed numbers)',
            bn: 'স্ট্যাকের দৈর্ঘ্য ১ এর সমান নয় (হয় স্ট্যাক খালি অথবা বাড়তি অপ্রক্রিয়াকৃত সংখ্যা রয়ে গেছে)'
          },
          {
            en: 'The final result is an odd integer number',
            bn: 'চূড়ান্ত ফলাফলটি একটি বিজোড় পূর্ণসংখ্যা'
          },
          {
            en: 'The evaluation completed in under 5 milliseconds',
            bn: 'মূল্যায়ন ৫ মিলি সেকেন্ডের কম সময়ে সম্পন্ন হয়েছে'
          },
          {
            en: 'The tokens were stored inside a JavaScript array',
            bn: 'টোকেনগুলো জাভাস্ক্রিপ্ট অ্যারের ভেতরে রাখা ছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A valid mathematical expression evaluates to exactly one single number.',
          bn: 'একটি সঠিক গাণিতিক রাশির মান সর্বদা ঠিক একটি একক সংখ্যা হয়।'
        },
        explanation: {
          en: 'If extra operands remain on the stack or underflow occurs during an operator step, the input was mathematically malformed.',
          bn: 'স্ট্যাকে বাড়তি সংখ্যা থেকে গেলে বা কোনো অপারেটরের সময় পর্যাপ্ত সংখ্যা না থাকলে ইনপুট রাশিটি ত্রুটিপূর্ণ ছিল।'
        }
      },
      {
        id: 'sm-q2',
        kind: 'mcq',
        topic: 'call-stack-return-address',
        question: {
          en: 'What vital piece of metadata is stored inside a call stack frame to ensure the CPU knows where to continue executing after a function finishes?',
          bn: 'ফাংশনের কাজ শেষ হওয়ার পর সিপিইউ যাতে পরবর্তী নির্দেশ বুঝতে পারে সেজন্য কল স্ট্যাক ফ্রেমের ভেতরে কোন গুরুত্বপূর্ণ তথ্য সংরক্ষিত থাকে?'
        },
        options: [
          {
            en: 'The return instruction pointer address pointing to the caller next instruction',
            bn: 'কলারের পরবর্তী নির্দেশ নির্দেশকারী রিটার্ন ইন্সট্রাকশন পয়েন্টার ঠিকানা'
          },
          {
            en: 'The user Wi-Fi network password',
            bn: 'ব্যবহারকারীর ওয়াই-ফাই নেটওয়ার্কের পাসওয়ার্ড'
          },
          {
            en: 'The database server administrative root login credentials',
            bn: 'ডাটাবেস সার্ভারের রুট লগইন ক্রেডেনশিয়াল'
          },
          {
            en: 'A full copy of the operating system kernel source code',
            bn: 'অপারেটিং সিস্টেম কার্নেল সোর্স কোডের সম্পূর্ণ কপি'
          }
        ],
        answer: 0,
        hint: {
          en: 'When a function returns, where does the computer jump back to?',
          bn: 'একটি ফাংশন রিটার্ন করলে কম্পিউটার কোথায় ফিরে যায়?'
        },
        explanation: {
          en: 'The return address directs the instruction pointer back to the exact code location that initiated the function call.',
          bn: 'রিটার্ন ঠিকানা নির্দেশ করে যে ফাংশনটি যেখান থেকে কল করা হয়েছিল সেখানে ফিরে গিয়ে পরবর্তী কোড কার্যকর করতে হবে।'
        }
      },
      {
        id: 'sm-q3',
        kind: 'mcq',
        topic: 'stack-overflow-fix',
        question: {
          en: 'What is the most robust engineering fix when an algorithm crashes from stack overflow due to deep inputs?',
          bn: 'গভীর ইনপুটের কারণে কোনো অ্যালগরিদম স্ট্যাক ওভারফ্লোতে ক্র্যাশ করলে সবচেয়ে কার্যকর প্রকৌশল সমাধান কোনটি?'
        },
        options: [
          {
            en: 'Convert the recursive algorithm into an iterative loop using an explicit heap-allocated stack',
            bn: 'রিকার্সিভ অ্যালগরিদমটিকে হিপ মেমোরিতে বরাদ্দকৃত সুস্পষ্ট স্ট্যাক ব্যবহার করে একটি ইটারেটিভ লুপে রূপান্তর করা'
          },
          {
            en: 'Increase the CPU hardware voltage in the BIOS settings',
            bn: 'বায়োস (BIOS) সেটিংসে সিপিইউ হার্ডওয়্যার ভোল্টেজ বাড়িয়ে দেওয়া'
          },
          {
            en: 'Delete all comments and empty whitespace from the source code file',
            bn: 'সোর্স কোড ফাইল থেকে সমস্ত মন্তব্য এবং ফাঁকা স্থান মুছে ফেলা'
          },
          {
            en: 'Restart the computer every time the function is called',
            bn: 'প্রতিবার ফাংশন কল হওয়ার সময় কম্পিউটার রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Thread call stacks are limited to a few megabytes, but the heap has gigabytes of RAM available.',
          bn: 'থ্রেড কল স্ট্যাকের সীমা কয়েক মেগাবাইট, কিন্তু হিপ মেমোরিতে গিগাবাইট র্যাম উন্মুক্ত থাকে।'
        },
        explanation: {
          en: 'Moving state management from the fixed-size call stack to an explicit array on the heap eliminates call frame memory constraints.',
          bn: 'নির্দিষ্ট আকারের কল স্ট্যাকের পরিবর্তে হিপে সাধারণ অ্যারে দিয়ে নিজের স্ট্যাক বানালে মেমোরি সংকটের ভয় থাকে না।'
        }
      },
      {
        id: 'sm-q4',
        kind: 'mcq',
        topic: 'time-complexity-rpn',
        question: {
          en: 'What is the time complexity of evaluating a postfix expression with n tokens using an operand stack?',
          bn: 'অপারেন্ড স্ট্যাক ব্যবহার করে n টোকেন বিশিষ্ট একটি পোস্টফিক্স রাশি মূল্যায়নের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(n) linear time, because each token is processed in O(1) time',
            bn: 'O(n) রৈখিক সময়, কারণ প্রতিটি টোকেন O(1) সময়ে প্রক্রিয়াকৃত হয়'
          },
          {
            en: 'O(n^2) quadratic time',
            bn: 'O(n^2) চতুর্ঘাতী সময়'
          },
          {
            en: 'O(2^n) exponential time',
            bn: 'O(2^n) সূচকীয় সময়'
          },
          {
            en: 'O(n!) factorial time',
            bn: 'O(n!) ফ্যাক্টোরিয়াল সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The algorithm scans the list of tokens once from left to right.',
          bn: 'অ্যালগরিদমটি বাম থেকে ডানে একবার টোকেন তালিকা অতিক্রম করে।'
        },
        explanation: {
          en: 'Each token triggers either a push or a constant number of pop operations, each taking O(1) time, totaling O(n) for n tokens.',
          bn: 'প্রতিটি টোকেন একটি পুশ অথবা সীমিত সংখ্যক পপ অপারেশন চালায় যার প্রতিটির খরচ O(1), ফলে n টোকেনে মোট সময় O(n)।'
        }
      }
    ]
  }
};
