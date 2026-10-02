import type { Lesson } from '../../../lib/types';

export const theBracketCourtLesson: Lesson = {
  slug: 'the-bracket-court',
  tech: 'stacks',
  title: {
    en: 'Balanced Brackets — Parsing, Syntax Trees, and Nesting Invariants',
    bn: 'সুষম বন্ধনী: পার্সিং, সিনট্যাক্স ট্রি এবং নেস্টিং ইনভেরিয়েন্ট'
  },
  summary: {
    en: 'Checking balanced delimiters is the foundational algorithm behind compilers, HTML/XML parsers, and JSON decoders. We formalize why LIFO stacks are the exact mathematical model required to verify hierarchical nesting in linear O(n) time. We examine the three canonical failure families—stack underflow, delimiter type mismatch, and unclosed residuals—and construct a production-ready bracket validator with complete edge-case coverage.',
    bn: 'সুষম বন্ধনী বা ডিলিমিটার যাচাইকরণ হলো কম্পাইলার, এইচটিএমএল/এক্সএমএল পার্সার এবং জেসন ডিকোডারের মূল অ্যালগরিদম। আমরা প্রমাণ করি কেন রৈখিক O(n) সময়ে হায়ারার্কিকাল নেস্টিং যাচাইয়ের জন্য লিফো স্ট্যাকই একমাত্র সঠিক গাণিতিক মডেল। আমরা তিনটি মৌলিক ব্যর্থতা—স্ট্যাক আন্ডারফ্লো, ডিলিমিটার অমিল এবং অবরুদ্ধ অবশিষ্টাংশ—বিশ্লেষণ করি এবং সমস্ত প্রান্তিক শর্তসহ একটি পূর্ণাঙ্গ বন্ধনী ভ্যালিডেটর তৈরি করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-monotone-pier',
    tech: 'stacks',
    title: {
      en: 'Monotonic Stack — Next Greater Element and Histogram Areas',
      bn: 'মনোটোনিক স্ট্যাক: পরবর্তী বৃহত্তর উপাদান এবং হিস্টোগ্রাম'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'nesting-and-stacks',
      text: {
        en: 'Hierarchical Nesting and the LIFO Matching Invariant',
        bn: 'হায়ারার্কিকাল নেস্টিং এবং লিফো মিলকরণ নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every programming language relies on balanced delimiters to structure code blocks, object literals, and arithmetic groupings. When parsing expressions like {[()]}, the innermost opening bracket must be closed first before any outer bracket can close. This requirement maps directly to the Last-In, First-Out (LIFO) behavior of a stack.',
        bn: 'প্রতিটি প্রোগ্রামিং ভাষা কোড ব্লক, অবজেক্ট এবং গাণিতিক সমীকরণ বিন্যস্ত করতে সুষম বন্ধনীর ওপর নির্ভর করে। যখন {[()]} এর মতো কোনো রাশি পার্স করা হয়, তখন বাইরের কোনো বন্ধনী বন্ধ হওয়ার আগে সবার ভেতরের শুরুর বন্ধনীটি সবার আগে বন্ধ হতে হবে। এই শর্তটি সরাসরি স্ট্যাকের লাস্ট-ইন, ফার্স্ট-আউট (LIFO) আচরণের সাথে মিলে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Whenever an opening bracket appears, it is pushed onto the stack as an unfulfilled obligation. When a closing bracket arrives, the most recently pushed opening bracket is popped from the top of the stack and inspected. If the two delimiters share the same type, the pair is resolved and eliminated from memory.',
        bn: 'যখনই কোনো শুরুর বন্ধনী দেখা যায়, তখন এটিকে একটি অপূর্ণ প্রতিশ্রুতি হিসেবে স্ট্যাকে পুশ করা হয়। একটি সমাপ্তি বন্ধনী আসার সাথে সাথে স্ট্যাকের শীর্ষ থেকে সাম্প্রতিকতম শুরুর বন্ধনীটি পপ করে পরীক্ষা করা হয়। যদি দুটি বন্ধনীর ধরন মিলে যায়, তবে জোড়াটি সফলভাবে মিলে যায় এবং মেমোরি থেকে অপসারিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'balanced-brackets',
          def: {
            en: 'A sequence of grouping symbols where every opening delimiter is closed by a matching delimiter in exact reverse order.',
            bn: 'বন্ধনী বা চিহ্নের একটি বিন্যাস যেখানে প্রতিটি শুরুর প্রতীক ঠিক উল্টো ক্রমানুসারে তার অনুরূপ সমাপ্তি প্রতীক দ্বারা বন্ধ হয়।'
          }
        },
        {
          term: 'underflow-error',
          def: {
            en: 'Encountering a closing delimiter when the stack is completely empty, signaling a close without an opening.',
            bn: 'স্ট্যাক সম্পূর্ণ খালি থাকা অবস্থায় কোনো সমাপ্তি বন্ধনী পাওয়া, যা নির্দেশ করে শুরুর প্রতীক ছাড়াই বন্ধ করা হয়েছে।'
          }
        },
        {
          term: 'mismatch-error',
          def: {
            en: 'Popping an opening delimiter whose type does not correspond to the arriving closing delimiter.',
            bn: 'স্ট্যাক থেকে এমন একটি শুরুর বন্ধনী বের হওয়া যার প্রকার আগত সমাপ্তি বন্ধনীর সাথে মেলে না।'
          }
        },
        {
          term: 'unclosed-residual',
          def: {
            en: 'A condition where the input ends but unmatched opening delimiters still remain inside the stack.',
            bn: 'এমন একটি অবস্থা যেখানে ইনপুট শেষ হলেও স্ট্যাকের ভেতর অসমাপ্ত শুরুর বন্ধনী জমা থেকে যায়।'
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
      id: 'three-failure-modes',
      text: {
        en: 'The Three Delimiter Failure Families',
        bn: 'ডিলিমিটার ত্রুটির তিনটি মূল পরিবার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To build a robust parser, you must systematically guard against three distinct structural failure modes. Testing only whether the string has an even number of characters is completely insufficient.',
        bn: 'একটি নির্ভরযোগ্য পার্সার তৈরি করতে আপনাকে তিনটি পৃথক কাঠামোগত ত্রুটির বিরুদ্ধে প্রতিরোধ গড়ে তুলতে হবে। স্ট্রিংটিতে জোড় সংখ্যক অক্ষর আছে কি না তা কেবল পরীক্ষা করা সম্পূর্ণ অপর্যাপ্ত।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Failure Mode', bn: 'ত্রুটির ধরন' },
        { en: 'Example String', bn: 'উদাহরণ' },
        { en: 'Detection Rule', bn: 'শনাক্তকরণ শর্ত' },
        { en: 'Syntactic Cause', bn: 'সিনট্যাক্স কারণ' }
      ],
      rows: [
        [
          { en: 'Stack Underflow', bn: 'স্ট্যাক আন্ডারফ্লো' },
          { en: '() ] or ]', bn: '() ] অথবা ]' },
          { en: 'Stack empty when closer arrives', bn: 'সমাপ্তি বন্ধনীর সময় স্ট্যাক খালি' },
          { en: 'Closing bracket has no preceding opener', bn: 'শুরুর বন্ধনী ছাড়াই বন্ধ করা হয়েছে' }
        ],
        [
          { en: 'Type Mismatch', bn: 'প্রকার অমিল (Mismatch)' },
          { en: '( ] or { [ } ]', bn: '( ] অথবা { [ } ]' },
          { en: 'Popped opener does not match closer', bn: 'পপ করা বন্ধনীর সাথে ধরন মেলে না' },
          { en: 'Delimiters closed in invalid cross order', bn: 'ভুল ক্রমে বা ভুল প্রতীকে বন্ধ করা হয়েছে' }
        ],
        [
          { en: 'Unclosed Residuals', bn: 'অসমাপ্ত অবশিষ্টাংশ' },
          { en: '((() or { [ }', bn: '((() অথবা { [ }' },
          { en: 'Stack is not empty at end of string', bn: 'স্ট্রিং শেষে স্ট্যাক খালি নয়' },
          { en: 'One or more openers never closed', bn: 'এক বা একাধিক শুরুর বন্ধনী খোলা রয়ে গেছে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'bracket-validator-impl',
      text: {
        en: 'Executable Bracket Validator Implementation',
        bn: 'বন্ধনী ভ্যালিডেটরের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program validates bracket balance across multiple delimiter families. It handles underflow, type mismatch, and trailing unclosed characters in strictly linear O(n) time.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি বিভিন্ন ধরনের বন্ধনীর সুষমতা যাচাই করে। এটি আন্ডারফ্লো, প্রকারের অমিল এবং অবশিষ্ট খোলা বন্ধনী রৈখিক O(n) সময়ে নির্ভুলভাবে পরীক্ষা করে।'
      }
    },
    {
      type: 'code',
      code: `function isValidBracketSequence(s) {
  const stack = [];
  const matching = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char in matching) {
      if (stack.length === 0) {
        return false; // Underflow: close with no open
      }
      const top = stack.pop();
      if (top !== matching[char]) {
        return false; // Type mismatch
      }
    }
  }

  return stack.length === 0; // Check for unclosed leftovers
}

const test1 = '{[()]}';
const test2 = '([)]';
const test3 = '{[}';
const test4 = '((())';
const test5 = '()[]{}';

console.log('{[()]} is valid:', isValidBracketSequence(test1));
// Output: {[()]} is valid: true

console.log('([)] is valid:', isValidBracketSequence(test2));
// Output: ([)] is valid: false

console.log('{[} is valid:', isValidBracketSequence(test3));
// Output: {[} is valid: false

console.log('((()) is valid:', isValidBracketSequence(test4));
// Output: ((()) is valid: false

console.log('()[]{} is valid:', isValidBracketSequence(test5));
// Output: ()[]{} is valid: true`
    },
    {
      type: 'heading',
      id: 'compiler-ast-parsers',
      text: {
        en: 'Production Impact: Compilers, Linters, and JSON Parsers',
        bn: 'বাস্তব প্রয়োগ: কম্পাইলার, লিন্টার এবং জেসন পার্সার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every code editor utilizes this stack algorithm for syntax highlighting and rainbow bracket coloring. In JavaScript engines like Google V8, the lexical scanner verifies bracket balances before constructing the Abstract Syntax Tree (AST). If an underflow or unclosed delimiter is encountered, the engine aborts with a SyntaxError before execution begins.',
        bn: 'প্রতিটি কোড এডিটর সিনট্যাক্স হাইলাইটিং এবং রেইনবো ব্র্যাকেট রঙের জন্য এই স্ট্যাক অ্যালগরিদম ব্যবহার করে। গুগল ভি৮ (V8) এর মতো জাভাস্ক্রিপ্ট ইঞ্জিনে লেক্সিক্যাল স্ক্যানার অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রি (AST) তৈরির আগেই বন্ধনীর ভারসাম্য পরীক্ষা করে। কোনো আন্ডারফ্লো বা অমিল পেলে ইঞ্জিন কোড চলার আগেই SyntaxError প্রদান করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Exact nesting model: Stacks provide the precise LIFO semantics required to verify hierarchical syntax and nested scopes.',
          bn: 'নিখুঁত নেস্টিং মডেল: হায়ারার্কিকাল সিনট্যাক্স এবং নেস্টেড স্কোপ যাচাইয়ের জন্য স্ট্যাকই সঠিক লিফো কাঠামো প্রদান করে।'
        },
        {
          en: 'Linear time complexity: By inspecting each character once and performing O(1) push and pop operations, validation runs in O(n) time.',
          bn: 'রৈখিক সময় জটিলতা: প্রতিটি অক্ষর একবার পরিদর্শন এবং O(1) পুশ-পপ অপারেশনের ফলে যাচাইকরণ O(n) সময়ে শেষ হয়।'
        },
        {
          en: 'Three failure checks: A robust validator must catch underflow (empty pop), type mismatch, and unclosed leftovers at the end.',
          bn: 'তিনটি ব্যর্থতা যাচাই: একটি নির্ভুল ভ্যালিডেটরকে আন্ডারফ্লো, প্রকার অমিল এবং শেষে অবশিষ্ট খোলা বন্ধনী অবশ্যই ধরতে হবে।'
        },
        {
          en: 'Sublinear auxiliary space: The stack memory scales as O(depth) proportional to the maximum nesting level of the expression.',
          bn: 'সাব-লিনিয়ার মেমোরি: স্ট্যাকের মেমোরি খরচ রাশির সর্বোচ্চ নেস্টিং গভীরতার সমানুপাতিক O(depth) আকারে বাড়ে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bc-ex1',
      kind: 'mcq',
      topic: 'stack-underflow-detection',
      question: {
        en: 'When parsing a string of brackets, what condition causes a Stack Underflow error?',
        bn: 'বন্ধনী পার্স করার সময় কোন শর্তটি স্ট্যাক আন্ডারফ্লো ইরর সৃষ্টি করে?'
      },
      options: [
        {
          en: 'A closing bracket is encountered while the stack is completely empty',
          bn: 'স্ট্যাক সম্পূর্ণ খালি থাকা অবস্থায় একটি সমাপ্তি বন্ধনী পাওয়া গেলে'
        },
        {
          en: 'An opening bracket is pushed into an array of length 100',
          bn: '১০০ দৈর্ঘ্যের একটি অ্যারেতে শুরুর বন্ধনী পুশ করা হলে'
        },
        {
          en: 'Two opening brackets of the same type appear consecutively',
          bn: 'একই ধরনের দুটি শুরুর বন্ধনী পরপর এলে'
        },
        {
          en: 'The string contains an even number of characters',
          bn: 'স্ট্রিংটিতে জোড় সংখ্যক অক্ষর থাকলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can you pop from a stack that has zero elements?',
        bn: 'যে স্ট্যাকে শূন্য উপাদান আছে সেখান থেকে কি পপ করা সম্ভব?'
      },
      explanation: {
        en: 'Attempting to match a closing bracket against an empty stack means a close symbol exists without any preceding opening bracket.',
        bn: 'খালি স্ট্যাকের সময় সমাপ্তি বন্ধনী পাওয়ার অর্থ হলো শুরুর বন্ধনী ছাড়াই সমাপ্তি বন্ধনী এসেছে।'
      }
    },
    {
      id: 'bc-ex2',
      kind: 'mcq',
      topic: 'interleaved-mismatch',
      question: {
        en: 'Why is the sequence ([)] considered invalid even though it contains exactly one opening and closing pair of each type?',
        bn: '([)] রাশিটিতে প্রতিটি প্রকারের ঠিক একটি শুরুর ও সমাপ্তি বন্ধনী থাকা সত্ত্বেও এটি কেন অবৈধ?'
      },
      options: [
        {
          en: 'Because the brackets violate LIFO nesting: the square bracket was opened last, but the round parenthesis attempts to close first',
          bn: 'কারণ বন্ধনীগুলো লিফো নেস্টিং নীতি লঙ্ঘন করে: স্কয়ার ব্র্যাকেট সবার শেষে খোলা হয়েছিল কিন্তু গোল বন্ধনী আগে বন্ধ করার চেষ্টা করা হয়েছে'
        },
        {
          en: 'Because square brackets are prohibited from containing round parentheses',
          bn: 'কারণ স্কয়ার ব্র্যাকেটের ভেতর গোল বন্ধনী রাখা নিষিদ্ধ'
        },
        {
          en: 'Because JavaScript string indexes cannot read square brackets',
          bn: 'কারণ জাভাস্ক্রিপ্ট স্ট্রিং ইনডেক্স স্কয়ার ব্র্যাকেট পড়তে পারে না'
        },
        {
          en: 'Because the string length is 4 instead of a prime number',
          bn: 'কারণ স্ট্রিংয়ের দৈর্ঘ্য মৌলিক সংখ্যার বদলে ৪'
        }
      ],
      answer: 0,
      hint: {
        en: 'The most recently opened delimiter must be the first one to close.',
        bn: 'সবার শেষে খোলা প্রতীকটিকেই সবার আগে বন্ধ হতে হবে।'
      },
      explanation: {
        en: 'When ) arrives, the top of the stack is [. The popped delimiter does not match ), triggering a type mismatch error.',
        bn: ') আসার সময় স্ট্যাকের শীর্ষে থাকে [। পপ করা প্রতীকটি ) এর সাথে না মেলায় এটি একটি টাইপ অমিল ইরর তৈরি করে।'
      }
    },
    {
      id: 'bc-ex3',
      kind: 'mcq',
      topic: 'end-of-file-check',
      question: {
        en: 'Why is checking stack.length === 0 necessary at the end of the validation algorithm?',
        bn: 'ভ্যালিডেশন অ্যালগরিদমের শেষে কেন stack.length === 0 পরীক্ষা করা অপরিহার্য?'
      },
      options: [
        {
          en: 'To ensure that no unclosed opening brackets remain lingering on the stack (e.g. ((())',
          bn: 'স্ট্যাকে যাতে কোনো অসমাপ্ত বা বন্ধ না হওয়া শুরুর বন্ধনী জমা না থাকে তা নিশ্চিত করতে (যেমন ((())'
        },
        {
          en: 'To delete all variables from the operating system memory',
          bn: 'অপারেটিং সিস্টেম মেমোরি থেকে সমস্ত চলক মুছে ফেলতে'
        },
        {
          en: 'Because JavaScript requires all arrays to end with length 0',
          bn: 'কারণ জাভাস্ক্রিপ্টের সমস্ত অ্যারেকে ০ দৈর্ঘ্যে শেষ হতে হয়'
        },
        {
          en: 'To restart the CPU cooling fan',
          bn: 'সিপিইউ কুলিং ফ্যান পুনরায় চালু করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What if someone types (((( and never writes any closing brackets?',
        bn: 'যদি কেউ (((( লিখে কিন্তু কোনো সমাপ্তি বন্ধনী না লেখে তবে কী হবে?'
      },
      explanation: {
        en: 'If an opening bracket is never matched with a closer, it remains in the stack. Only an empty stack certifies that all brackets were closed.',
        bn: 'যদি কোনো শুরুর বন্ধনী বন্ধ না হয় তবে তা স্ট্যাকে থেকে যায়। কেবল খালি স্ট্যাকই নিশ্চিত করে যে সব বন্ধনী সফলভাবে বন্ধ হয়েছে।'
      }
    }
  ],
  quiz: {
    id: 'bracket-court-quiz',
    title: {
      en: 'Balanced Brackets and Syntax Parsing Quiz',
      bn: 'সুষম বন্ধনী এবং সিনট্যাক্স পার্সিং কুইজ'
    },
    questions: [
      {
        id: 'bc-q1',
        kind: 'mcq',
        topic: 'space-complexity-depth',
        question: {
          en: 'What is the auxiliary space complexity of validating balanced brackets in a string of length n with maximum nesting depth d?',
          bn: 'সর্বোচ্চ d নেস্টিং গভীরতা বিশিষ্ট n দৈর্ঘ্যের স্ট্রিংয়ে সুষম বন্ধনী যাচাইয়ের সহায়ক মেমোরি (স্পেস জটিলতা) কত?'
        },
        options: [
          {
            en: 'O(d), proportional to the maximum nesting depth of unclosed brackets',
            bn: 'O(d), যা খোলা বন্ধনীর সর্বোচ্চ নেস্টিং গভীরতার সমানুপাতিক'
          },
          {
            en: 'O(n^2) quadratic space',
            bn: 'O(n^2) চতুর্ঘাতী মেমোরি'
          },
          {
            en: 'O(1) strictly zero memory',
            bn: 'O(1) সম্পূর্ণ শূন্য মেমোরি'
          },
          {
            en: 'O(d!) factorial memory',
            bn: 'O(d!) ফ্যাক্টোরিয়াল মেমোরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'The stack only holds currently active unclosed opening brackets.',
          bn: 'স্ট্যাক কেবল বর্তমানে সক্রিয় অসমাপ্ত শুরুর বন্ধনীগুলো ধারণ করে।'
        },
        explanation: {
          en: 'As soon as a pair closes, it is popped. Thus, the stack only expands to the maximum nesting depth d, taking O(d) space.',
          bn: 'একটি জোড়া বন্ধ হওয়ার সাথে সাথে তা পপ হয়ে যায়। ফলে স্ট্যাক কেবল সর্বোচ্চ নেস্টিং গভীরতা d পর্যন্ত বাড়ে, যা O(d) মেমোরি নেয়।'
        }
      },
      {
        id: 'bc-q2',
        kind: 'mcq',
        topic: 'time-complexity-proof',
        question: {
          en: 'Why is the time complexity of the bracket validation algorithm strictly O(n) for a string of length n?',
          bn: 'n দৈর্ঘ্যের একটি স্ট্রিংয়ের জন্য কেন বন্ধনী যাচাই অ্যালগরিদমের সময় জটিলতা নিশ্চিতভাবে O(n)?'
        },
        options: [
          {
            en: 'Each character is visited once, and each delimiter is pushed at most once and popped at most once in O(1) time',
            bn: 'প্রতিটি অক্ষর একবার দেখা হয় এবং প্রতিটি ডিলিমিটার সর্বোচ্চ একবার পুশ ও একবার পপ হয় O(1) সময়ে'
          },
          {
            en: 'The algorithm skips every second character in the string',
            bn: 'অ্যালগরিদমটি স্ট্রিংয়ের প্রতি দ্বিতীয় অক্ষরটি বাদ দিয়ে যায়'
          },
          {
            en: 'All modern CPUs run string comparison in zero clock cycles',
            bn: 'সমস্ত আধুনিক সিপিইউ শূন্য ক্লক সাইকেলে স্ট্রিং তুলনা চালায়'
          },
          {
            en: 'JavaScript regular expressions automatically optimize all loops to O(1)',
            bn: 'জাভাস্ক্রিপ্ট রেগুলার এক্সপ্রেশন সমস্ত লুপকে স্বয়ংক্রিয়ভাবে O(1) করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'How many total push and pop operations can occur for n characters?',
          bn: 'n অক্ষরের জন্য মোট কতটি পুশ এবং পপ অপারেশন ঘটতে পারে?'
        },
        explanation: {
          en: 'Total stack operations cannot exceed 2n across the whole string, guaranteeing deterministic linear O(n) performance.',
          bn: 'সমগ্র স্ট্রিংয়ে মোট স্ট্যাক অপারেশন কোনোভাবেই 2n অতিক্রম করতে পারে না, যা নিশ্চিতভাবে রৈখিক O(n) সময় দেয়।'
        }
      },
      {
        id: 'bc-q3',
        kind: 'mcq',
        topic: 'html-xml-tag-similarity',
        question: {
          en: 'How does validating balanced HTML tags like <div><p></p></div> relate to the balanced brackets algorithm?',
          bn: '<div><p></p></div> এর মতো এইচটিএমএল ট্যাগ যাচাইকরণ কীভাবে সুষম বন্ধনী অ্যালগরিদমের সাথে সম্পর্কিত?'
        },
        options: [
          {
            en: 'It is the exact same algorithm: opening tags push tag names onto the stack, and closing tags pop and verify matching tag names',
            bn: 'এটি অবিকল একই অ্যালগরিদম: শুরুর ট্যাগ ট্যাগের নাম স্ট্যাকে পুশ করে এবং সমাপ্তি ট্যাগ পপ করে নাম মিলিয়ে নেয়'
          },
          {
            en: 'HTML tags cannot be parsed using stacks because tags contain letters',
            bn: 'এইচটিএমএল ট্যাগ স্ট্যাক দিয়ে পার্স করা যায় না কারণ ট্যাগে বর্ণমালা থাকে'
          },
          {
            en: 'HTML requires recursive neural networks to check matching tags',
            bn: 'এইচটিএমএল ট্যাগ মেলাতে রিকার্সিভ নিউরাল নেটওয়ার্কের প্রয়োজন হয়'
          },
          {
            en: 'Web browsers parse HTML strictly using binary search trees',
            bn: 'ওয়েব ব্রাউজার কেবল বাইনারি সার্চ ট্রি দিয়ে এইচটিএমএল পার্স করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Replace <div> with ( and </div> with ).',
          bn: '<div> কে ( এবং </div> কে ) দিয়ে প্রতিস্থাপন করে ভাবুন।'
        },
        explanation: {
          en: 'HTML and XML follow the exact same nesting rules. Opening tags push onto the stack and closing tags pop and assert identity.',
          bn: 'এইচটিএমএল এবং এক্সএমএল একই নেস্টিং নিয়ম মেনে চলে। শুরুর ট্যাগ স্ট্যাকে পুশ হয় এবং সমাপ্তি ট্যাগ পপ হয়ে যাচাই হয়।'
        }
      },
      {
        id: 'bc-q4',
        kind: 'mcq',
        topic: 'early-exit-optimization',
        question: {
          en: 'Which optimization allows a bracket validator to return false immediately without checking the rest of the string?',
          bn: 'কোন অপ্টিমাইজেশনটি বন্ধনী ভ্যালিডেটরকে বাকি স্ট্রিং না দেখেই সাথে সাথে false রিটার্ন করতে সাহায্য করে?'
        },
        options: [
          {
            en: 'If the total string length is an odd number, it is mathematically impossible for all brackets to be paired',
            bn: 'যদি মোট স্ট্রিংয়ের দৈর্ঘ্য একটি বিজোড় সংখ্যা হয়, তবে গাণিতিকভাবে সব বন্ধনীর জোড়া হওয়া অসম্ভব'
          },
          {
            en: 'If the string starts with an opening parenthesis',
            bn: 'যদি স্ট্রিংটি একটি শুরুর বন্ধনী দিয়ে শুরু হয়'
          },
          {
            en: 'If the string contains only square brackets',
            bn: 'যদি স্ট্রিংটিতে কেবল স্কয়ার ব্র্যাকেট থাকে'
          },
          {
            en: 'If the string has more than 10 characters',
            bn: 'যদি স্ট্রিংটিতে ১০টির বেশি অক্ষর থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every pair requires exactly 2 characters.',
          bn: 'প্রতিটি জোড়ার জন্য ঠিক ২ টি অক্ষর প্রয়োজন।'
        },
        explanation: {
          en: 'Since every valid delimiter requires exactly one matching pair, any string composed solely of brackets with odd length must be invalid.',
          bn: 'যেহেতু প্রতিটি বন্ধনীর ঠিক একটি জোড়া থাকতে হয়, তাই কেবল বন্ধনীযুক্ত বিজোড় দৈর্ঘ্যের যেকোনো স্ট্রিং নিশ্চিতভাবে অবৈধ।'
        }
      }
    ]
  }
};
