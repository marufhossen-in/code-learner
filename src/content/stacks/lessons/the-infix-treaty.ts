import type { Lesson } from '../../../lib/types';

export const theInfixTreatyLesson: Lesson = {
  slug: 'the-infix-treaty',
  tech: 'stacks',
  title: {
    en: 'Infix to Postfix Conversion — The Shunting-Yard Algorithm',
    bn: 'ইনফিক্স থেকে পোস্টফিক্স রূপান্তর: শান্টিং-ইয়ার্ড অ্যালগরিদম'
  },
  summary: {
    en: 'While humans write arithmetic in infix notation, computers evaluate expressions efficiently in postfix without parentheses. Edsger Dijkstra’s 1961 Shunting-Yard algorithm bridges this gap in linear O(n) time. By using an operator stack and an output stream, the algorithm systematically resolves operator precedence, handles left and right associativity, and unwinds nested parentheses into an unambiguously executable Reverse Polish sequence.',
    bn: 'মানুষ ইনফিক্স নোটেশনে গাণিতিক সমীকরণ লিখলেও কম্পিউটার কোনো বন্ধনী ছাড়া পোস্টফিক্স পদ্ধতিতে সহজে তা সমাধান করতে পারে। ১৯৬১ সালে এডসগার ডিকস্ট্রার আবিষ্কৃত শান্টিং-ইয়ার্ড অ্যালগরিদম রৈখিক O(n) সময়ে এই রূপান্তর সম্পন্ন করে। একটি অপারেটর স্ট্যাক এবং আউটপুট স্ট্রিম ব্যবহার করে এই অ্যালগরিদম অপারেটরের অগ্রাধিকার নির্ধারণ করে, বাম ও ডান সাহচর্য নিয়ন্ত্রণ করে এবং নেস্টেড বন্ধনীগুলোকে সহজে সম্পাদনযোগ্য রিভার্স পোলিশ সিকোয়েন্সে রূপান্তর করে।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-undo-fortress',
    tech: 'stacks',
    title: {
      en: 'Undo and Redo Architecture — Command Pattern and Dual Stacks',
      bn: 'আনডু এবং রিডু আর্কিটেকচার: কমান্ড প্যাটার্ন এবং ডুয়াল স্ট্যাক'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'shunting-yard-paradigm',
      text: {
        en: 'The Expression Translation Challenge: Human Infix to Machine Postfix',
        bn: 'গাণিতিক অনুবাদ চ্যালেঞ্জ: মানুষের ইনফিক্স থেকে মেশিনের পোস্টফিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In standard arithmetic, humans write mathematical expressions in Infix notation: operators sit between operands, such as 3 + 4 * 2. Evaluating infix expressions directly requires parsing nested parentheses and resolving operator precedence rules, which complicates compiler construction.',
        bn: 'সাধারণ পাটিগণিতে মানুষ ইনফিক্স পদ্ধতিতে সমীকরণ লেখে: অপারেটররা অপারেন্ডের মাঝে বসে, যেমন ৩ + ৪ * ২। ইনফিক্স রাশি সরাসরি মূল্যায়ন করতে বন্ধনী পার্স করা এবং অপারেটরের অগ্রাধিকার যাচাই করতে হয়, যা কম্পাইলার তৈরির কাজকে জটিল করে তোলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1961, Edsger Dijkstra invented the Shunting-Yard algorithm, named after railroad shunting yards where train cars are rerouted between tracks. The algorithm parses infix expressions in a single pass of O(n) time, transforming them into Postfix (Reverse Polish Notation) where operators follow their operands with 0 parentheses needed.',
        bn: '১৯৬১ সালে এডসগার ডিকস্ট্রা শান্টিং-ইয়ার্ড অ্যালগরিদম আবিষ্কার করেন, যা রেলওয়ের ট্রানজিট ইয়ার্ডের নামানুসারে রাখা হয়েছে যেখানে ট্রেনের বগিগুলোকে এক লাইন থেকে অন্য লাইনে স্থানান্তর করা হয়। এই অ্যালগরিদমটি মাত্র একবার পড়ে O(n) সময়ে ইনফিক্স সমীকরণকে পোস্টফিক্সে রূপান্তর করে যেখানে ০টি বন্ধনীতেই কাজ সম্পন্ন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'shunting-yard',
          def: {
            en: 'A classic parsing algorithm devised by Edsger Dijkstra that parses mathematical expressions from infix to postfix using an operator stack.',
            bn: 'এডসগার ডিকস্ট্রা কর্তৃক উদ্ভাবিত একটি ক্লাসিক পার্সিং অ্যালগরিদম যা অপারেটর স্ট্যাক ব্যবহার করে ইনফিক্সকে পোস্টফিক্সে রূপান্তর করে।'
          }
        },
        {
          term: 'operator-precedence',
          def: {
            en: 'A rule defining the priority of operators (e.g. multiplication and division bind tighter than addition and subtraction).',
            bn: 'অপারেটরদের অগ্রাধিকার নির্ধারণকারী নিয়ম (যেমন যোগ ও বিয়োগের চেয়ে গুণ ও ভাগের অগ্রাধিকার বেশি)।'
          }
        },
        {
          term: 'operator-associativity',
          def: {
            en: 'The direction (left-to-right or right-to-left) in which operators of equal precedence are evaluated.',
            bn: 'সমান অগ্রাধিকারের একাধিক অপারেটর থাকলে তা কোন দিক থেকে (বাম থেকে ডানে নাকি ডান থেকে বামে) নিষ্পন্ন হবে তার নিয়ম।'
          }
        },
        {
          term: 'rpn-output-queue',
          def: {
            en: 'A linear buffer storing operands and emitted operators in their exact machine evaluation order.',
            bn: 'একটি রৈখিক বাফার যেখানে অপারেন্ড এবং নির্গত অপারেটরগুলো তাদের মেশিন এক্সিকিউশন ক্রমে জমা হয়।'
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
      id: 'precedence-and-associativity-rules',
      text: {
        en: 'Precedence and Associativity Mechanics',
        bn: 'অগ্রাধিকার এবং সাহচর্য পরিচালনার নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a new operator op1 arrives from the input, it cannot be pushed immediately onto the operator stack if the operator at the top of the stack op2 has higher precedence. If op2 binds tighter than op1, op2 must execute first, so it is popped to the output queue. Left-associative operators also pop equal-precedence operators from the stack.',
        bn: 'ইনপুট থেকে যখন একটি নতুন অপারেটর op1 আসে, তখন স্ট্যাকের শীর্ষ অপারেটর op2 এর অগ্রাধিকার বেশি হলে op1 কে সরাসরি পুশ করা যায় না। op2 এর ক্ষমতা op1 এর চেয়ে বেশি হলে op2 কেই আগে সম্পাদন হতে হয়, তাই একে পপ করে আউটপুটে পাঠানো হয়। বাম-সাহচর্যপূর্ণ অপারেটরের ক্ষেত্রে সমান অগ্রাধিকারের অপারেটরকেও স্ট্যাক থেকে পপ করা হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Operator Symbols', bn: 'অপারেটর প্রতীক' },
        { en: 'Precedence Level', bn: 'অগ্রাধিকার স্তর' },
        { en: 'Associativity Rule', bn: 'সাহচর্য নিয়ম' },
        { en: 'Evaluation Example', bn: 'মূল্যায়ন উদাহরণ' }
      ],
      rows: [
        [
          { en: '+ and -', bn: '+ এবং -' },
          { en: 'Level 1', bn: 'স্তর ১' },
          { en: 'Left-to-Right (L)', bn: 'বাম থেকে ডান (L)' },
          { en: '5 - 3 + 2 = (5 - 3) + 2 = 4', bn: '৫ - ৩ + ২ = (৫ - ৩) + ২ = ৪' }
        ],
        [
          { en: '* and /', bn: '* এবং /' },
          { en: 'Level 2', bn: 'স্তর ২' },
          { en: 'Left-to-Right (L)', bn: 'বাম থেকে ডান (L)' },
          { en: '12 / 3 * 2 = (12 / 3) * 2 = 8', bn: '১২ / ৩ * ২ = (১২ / ৩) * ২ = ৮' }
        ],
        [
          { en: '^ (Exponentiation)', bn: '^ (সূচক বা ঘাত)' },
          { en: 'Level 3', bn: 'স্তর ৩' },
          { en: 'Right-to-Left (R)', bn: 'ডান থেকে বাম (R)' },
          { en: '2 ^ 3 ^ 2 = 2 ^ (3 ^ 2) = 512', bn: '২ ^ ৩ ^ ২ = ২ ^ (৩ ^ ২) = ৫১২' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'shunting-yard-impl',
      text: {
        en: 'Executable Shunting-Yard Implementation',
        bn: 'শান্টিং-ইয়ার্ড অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements the Shunting-Yard algorithm. Notice how ( 3 + 4 ) * 2 uses parentheses to override multiplication precedence, outputting 3 4 + 2 * where addition is evaluated before multiplication.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি শান্টিং-ইয়ার্ড অ্যালগরিদম বাস্তবায়ন করে। লক্ষ্য করুন কীভাবে ( ৩ + ৪ ) * ২ রাশিতে বন্ধনী গুণের অগ্রাধিকারকে পরিবর্তন করে ৩ ৪ + ২ * ফলাফল দেয়, যেখানে গুণের আগে যোগ সম্পন্ন হয়।'
      }
    },
    {
      type: 'code',
      code: `function infixToPostfix(infix) {
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3
  };

  const associativity = {
    '+': 'L',
    '-': 'L',
    '*': 'L',
    '/': 'L',
    '^': 'R'
  };

  const output = [];
  const opStack = [];
  const tokens = infix.trim().split(/\\s+/);

  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if (token in precedence) {
      const p1 = precedence[token];
      const a1 = associativity[token];

      while (opStack.length > 0) {
        const top = opStack[opStack.length - 1];
        if (top in precedence) {
          const p2 = precedence[top];
          if ((a1 === 'L' && p1 <= p2) || (a1 === 'R' && p1 < p2)) {
            output.push(opStack.pop());
          } else {
            break;
          }
        } else {
          break;
        }
      }
      opStack.push(token);
    } else if (token === '(') {
      opStack.push(token);
    } else if (token === ')') {
      while (opStack.length > 0 && opStack[opStack.length - 1] !== '(') {
        output.push(opStack.pop());
      }
      if (opStack.length === 0) {
        throw new Error('Mismatched parentheses');
      }
      opStack.pop(); // Discard matching '('
    }
  }

  while (opStack.length > 0) {
    const top = opStack.pop();
    if (top === '(' || top === ')') {
      throw new Error('Mismatched parentheses');
    }
    output.push(top);
  }

  return output.join(' ');
}

const expr1 = '3 + 4 * 2';
console.log('Infix 1:', expr1);
// Output: Infix 1: 3 + 4 * 2
console.log('Postfix 1:', infixToPostfix(expr1));
// Output: Postfix 1: 3 4 2 * +

const expr2 = '( 3 + 4 ) * 2';
console.log('Infix 2:', expr2);
// Output: Infix 2: ( 3 + 4 ) * 2
console.log('Postfix 2:', infixToPostfix(expr2));
// Output: Postfix 2: 3 4 + 2 *

const expr3 = '3 + 4 * 2 / ( 1 - 5 ) ^ 2';
console.log('Infix 3:', expr3);
// Output: Infix 3: 3 + 4 * 2 / ( 1 - 5 ) ^ 2
console.log('Postfix 3:', infixToPostfix(expr3));
// Output: Postfix 3: 3 4 2 * 1 5 - 2 ^ / +`
    },
    {
      type: 'heading',
      id: 'calculator-compilers',
      text: {
        en: 'Production Applications: Spreadsheet Engines and Query Parsers',
        bn: 'বাস্তব প্রয়োগ: স্প্রেডশিট ইঞ্জিন এবং কুয়েরি পার্সার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Shunting-Yard algorithm is widely utilized in software engineering. Spreadsheet applications like Google Sheets and Microsoft Excel parse formula strings using shunting-yard logic. In SQL database query planners, WHERE conditions (such as age > 21 AND status = 1) are transformed into postfix execution trees to evaluate filtering logic at high throughput.',
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারিংয়ে শান্টিং-ইয়ার্ড অ্যালগরিদম ব্যাপকভাবে ব্যবহৃত হয়। গুগল শিটস এবং মাইক্রোসফট এক্সেলের মতো স্প্রেডশিট অ্যাপ্লিকেশনগুলো ফর্মুলা পার্স করতে এই লজিক ব্যবহার করে। এসকিউএল ডাটাবেস কুয়েরি প্ল্যানারে WHERE ক্লজের ফিল্টারিং শর্তগুলো (যেমন age > ২১ AND status = ১) দ্রুত মূল্যায়নের জন্য পোস্টফিক্স এক্সিকিউশন ট্রিতে রূপান্তরিত হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Linear expression parsing: Shunting-yard converts infix expressions to postfix in strictly O(n) runtime in a single linear pass.',
          bn: 'রৈখিক এক্সপ্রেশন পার্সিং: শান্টিং-ইয়ার্ড মাত্র এক ধাপে নিশ্চিতভাবে O(n) সময়ে ইনফিক্স সমীকরণকে পোস্টফিক্সে রূপান্তর করে।'
        },
        {
          en: 'Precedence resolution: Arriving lower-precedence operators force higher-precedence operators off the stack into the output queue.',
          bn: 'অগ্রাধিকার নিষ্পত্তি: কম অগ্রাধিকারের নতুন অপারেটর এলে স্ট্যাকের উচ্চ অগ্রাধিকারের অপারেটরগুলো পপ হয়ে আউটপুটে চলে যায়।'
        },
        {
          en: 'Associativity handling: Left-associative operators pop equal-precedence operators, while right-associative operators stay on stack.',
          bn: 'সাহচর্য নিয়ন্ত্রণ: বাম-সাহচর্যপূর্ণ অপারেটর সমান ক্ষমতার অপারেটরকে পপ করে, কিন্তু ডান-সাহচর্যপূর্ণ অপারেটর স্ট্যাকে অবস্থান করে।'
        },
        {
          en: 'Parentheses as barriers: Left parentheses act as temporary boundaries on the stack until matching right parentheses trigger their eviction.',
          bn: 'বন্ধনী সীমানা: বাম বন্ধনী স্ট্যাকে একটি অস্থায়ী প্রাচীর হিসেবে কাজ করে যতক্ষণ না ডান বন্ধনী এসে তা মুক্ত করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'it-ex1',
      kind: 'mcq',
      topic: 'parenthesis-override',
      question: {
        en: 'What is the correct postfix representation of the infix expression ( 3 + 4 ) * 2?',
        bn: '( ৩ + ৪ ) * ২ ইনফিক্স সমীকরণের সঠিক পোস্টফিক্স রূপ কোনটি?'
      },
      options: [
        {
          en: '3 4 + 2 *',
          bn: '৩ ৪ + ২ *'
        },
        {
          en: '3 4 2 * +',
          bn: '৩ ৪ ২ * +'
        },
        {
          en: '* + 3 4 2',
          bn: '* + ৩ ৪ ২'
        },
        {
          en: '3 + 4 * 2',
          bn: '৩ + ৪ * ২'
        }
      ],
      answer: 0,
      hint: {
        en: 'Parentheses force 3 + 4 to be evaluated before multiplying by 2.',
        bn: 'বন্ধনীর কারণে ২ দিয়ে গুণ করার আগে ৩ + ৪ এর কাজ সম্পন্ন হতে হবে।'
      },
      explanation: {
        en: 'In postfix, operands appear first followed by their operator. (3 + 4) becomes 3 4 +, which is then multiplied by 2, yielding 3 4 + 2 *.',
        bn: 'পোস্টফিক্সে অপারেন্ডের পর অপারেটর বসে। (৩ + ৪) হয় ৩ ৪ +, যা পরে ২ এর সাথে গুণ হয়ে ৩ ৪ + ২ * গঠন করে।'
      }
    },
    {
      id: 'it-ex2',
      kind: 'mcq',
      topic: 'right-associativity-exponentiation',
      question: {
        en: 'Why is the exponentiation operator ^ classified as right-associative in mathematics?',
        bn: 'গণিতে কেন সূচক অপারেটর ^ কে ডান-সাহচর্যপূর্ণ (Right-Associative) হিসেবে শ্রেণীবদ্ধ করা হয়?'
      },
      options: [
        {
          en: 'Because 2 ^ 3 ^ 2 evaluates right-to-left as 2 ^ (3 ^ 2) = 2 ^ 9 = 512, rather than left-to-right as (2 ^ 3) ^ 2 = 64',
          bn: 'কারণ ২ ^ ৩ ^ ২ ডান থেকে বামে মূল্যায়িত হয়ে ২ ^ (৩ ^ ২) = ২ ^ ৯ = ৫১২ হয়, বাম থেকে ডানে (২ ^ ৩) ^ ২ = ৬৪ নয়'
        },
        {
          en: 'Because exponentiation only works on prime numbers',
          bn: 'কারণ সূচক কেবল মৌলিক সংখ্যার ওপর কাজ করে'
        },
        {
          en: 'Because computers read exponentiation backwards from disk storage',
          bn: 'কারণ কম্পিউটার ডিস্ক স্টোরেজ থেকে সূচক উল্টো দিক থেকে পড়ে'
        },
        {
          en: 'Because right-associative operators use 0 bytes of RAM',
          bn: 'কারণ ডান-সাহচর্যপূর্ণ অপারেটর ০ বাইট র্যাম ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In mathematical tower notation, power towers are evaluated from the top downward.',
        bn: 'গাণিতিক পাওয়ার টাওয়ারের ক্ষেত্রে সবার উপরের ঘাতের কাজ আগে করা হয়।'
      },
      explanation: {
        en: 'Unlike addition and multiplication which evaluate left-to-right, power towers evaluate right-to-left. The shunting-yard algorithm respects this via strict inequality checks.',
        bn: 'যোগ বা গুণের মতো নয়, ঘাতের কাজ ডান থেকে বামে হয়। শান্টিং-ইয়ার্ড অ্যালগরিদম শর্তের মাধ্যমে এই নিয়ম নিশ্চিত করে।'
      }
    },
    {
      id: 'it-ex3',
      kind: 'mcq',
      topic: 'time-complexity-shunting-yard',
      question: {
        en: 'What is the time complexity of converting an infix expression of n tokens to postfix using Dijkstra Shunting-Yard algorithm?',
        bn: 'ডিকস্ট্রার শান্টিং-ইয়ার্ড অ্যালগরিদম ব্যবহার করে n টোকেন বিশিষ্ট একটি ইনফিক্স সমীকরণকে পোস্টফিক্সে রূপান্তরের সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(n) linear time, because each token is pushed to the operator stack and emitted to output at most once',
          bn: 'O(n) রৈখিক সময়, কারণ প্রতিটি টোকেন অপারেটর স্ট্যাকে পুশ এবং আউটপুটে সর্বোচ্চ একবার স্থানান্তরিত হয়'
        },
        {
          en: 'O(n^3) cubic time',
          bn: 'O(n^3) ঘনকীয় সময়'
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
        en: 'Every token enters the operator stack at most once and leaves at most once.',
        bn: 'প্রতিটি টোকেন অপারেটর স্ট্যাকে সর্বোচ্চ একবার প্রবেশ করে এবং সর্বোচ্চ একবার বের হয়।'
      },
      explanation: {
        en: 'Because each operator token participates in at most one push and one pop operation, the total amortized cost across n tokens is strictly bounded by 2n, which is O(n).',
        bn: 'যেহেতু প্রতিটি অপারেটর সর্বোচ্চ একবার পুশ এবং একবার পপ হয়, তাই n টোকেনে মোট অপারেশন 2n দ্বারা সীমাবদ্ধ, যা O(n)।'
      }
    }
  ],
  quiz: {
    id: 'infix-treaty-quiz',
    title: {
      en: 'Infix to Postfix and Shunting-Yard Algorithm Quiz',
      bn: 'ইনফিক্স থেকে পোস্টফিক্স এবং শান্টিং-ইয়ার্ড অ্যালগরিদম কুইজ'
    },
    questions: [
      {
        id: 'it-q1',
        kind: 'mcq',
        topic: 'left-parenthesis-behavior',
        question: {
          en: 'During the Shunting-Yard algorithm, what action is taken when an opening parenthesis ( is read from the input?',
          bn: 'শান্টিং-ইয়ার্ড অ্যালগরিদমের সময় যখন একটি শুরুর বন্ধনী ( পড়া হয় তখন কী পদক্ষেপ নেওয়া হয়?'
        },
        options: [
          {
            en: 'It is pushed onto the operator stack as a boundary delimiter and is never added to the output queue',
            bn: 'এটি একটি সীমানা ডিলিমিটার হিসেবে অপারেটর স্ট্যাকে পুশ হয় এবং আউটপুট কিউতে কখনোই যুক্ত হয় না'
          },
          {
            en: 'It is immediately written to the output queue',
            bn: 'এটি সাথে সাথে আউটপুট কিউতে লিখে ফেলা হয়'
          },
          {
            en: 'It pops all existing operators from the stack',
            bn: 'এটি স্ট্যাক থেকে বিদ্যমান সমস্ত অপারেটরকে পপ করে দেয়'
          },
          {
            en: 'It halts the algorithm with a syntax error',
            bn: 'এটি একটি সিনট্যাক্স ইরর দিয়ে অ্যালগরিদমটি থামিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Postfix notation contains 0 parentheses.',
          bn: 'পোস্টফিক্স পদ্ধতিতে ০টি বন্ধনী থাকে।'
        },
        explanation: {
          en: 'The opening parenthesis rests on the operator stack to fence inner operators until the matching closing parenthesis arrives.',
          bn: 'শুরুর বন্ধনীটি অপারেটর স্ট্যাকে অবস্থান করে ভেতরের অপারেটরগুলোকে আলাদা রাখে যতক্ষণ না ডান বন্ধনী আসে।'
        }
      },
      {
        id: 'it-q2',
        kind: 'mcq',
        topic: 'right-parenthesis-behavior',
        question: {
          en: 'When a closing parenthesis ) is encountered in Shunting-Yard, how is it handled?',
          bn: 'শান্টিং-ইয়ার্ডে যখন একটি সমাপ্তি বন্ধনী ) পাওয়া যায়, তখন কীভাবে এটি প্রক্রিয়া করা হয়?'
        },
        options: [
          {
            en: 'Operators are continuously popped to the output until an opening parenthesis ( is reached, which is then popped and discarded',
            bn: 'শুরুর বন্ধনী ( না পাওয়া পর্যন্ত অপারেটরগুলো পপ হয়ে আউটপুটে যায়, তারপর শুরুর বন্ধনীটিকে পপ করে বাদ দেওয়া হয়'
          },
          {
            en: 'The closing parenthesis is appended to the output queue 5 times',
            bn: 'সমাপ্তি বন্ধনীটি আউটপুট কিউতে ৫ বার যোগ করা হয়'
          },
          {
            en: 'The whole program memory is erased',
            bn: 'পুরো প্রোগ্রাম মেমোরি মুছে ফেলা হয়'
          },
          {
            en: 'All numbers on the output queue are multiplied by 0',
            bn: 'আউটপুট কিউয়ের সমস্ত সংখ্যাকে ০ দিয়ে গুণ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'All operators inside the parentheses must be discharged to the output.',
          bn: 'বন্ধনীর ভেতরের সমস্ত অপারেটরকে আউটপুটে পাঠিয়ে দিতে হবে।'
        },
        explanation: {
          en: 'The right parenthesis triggers the discharge of all operators in that scope until the matching left parenthesis is popped and discarded.',
          bn: 'ডান বন্ধনী সেই স্কোপের সমস্ত অপারেটরকে আউটপুটে পাঠাতে নির্দেশ দেয় যতক্ষণ না মিলে যাওয়া বাম বন্ধনীটি বাতিল হয়।'
        }
      },
      {
        id: 'it-q3',
        kind: 'mcq',
        topic: 'mismatched-parentheses-error',
        question: {
          en: 'What condition indicates a mismatched parenthesis syntax error in Shunting-Yard?',
          bn: 'শান্টিং-ইয়ার্ড অ্যালগরিদমে কোন শর্তটি বন্ধনীর অমিল বা সিনট্যাক্স ইরর নির্দেশ করে?'
        },
        options: [
          {
            en: 'When a ) arrives but the stack empties without finding (, or when all tokens finish and a ( remains in the stack',
            bn: 'যখন একটি ) আসে কিন্তু স্ট্যাকে কোনো ( না পাওয়া যায়, অথবা সমস্ত টোকেন শেষেও স্ট্যাকে কোনো ( অবশিষ্ট থাকে'
          },
          {
            en: 'When the output contains more than 3 numbers',
            bn: 'যখন আউটপুটে ৩টির বেশি সংখ্যা থাকে'
          },
          {
            en: 'When the user inputs a prime number',
            bn: 'যখন ব্যবহারকারী একটি মৌলিক সংখ্যা ইনপুট দেয়'
          },
          {
            en: 'When the execution takes longer than 1 millisecond',
            bn: 'যখন সম্পাদন হতে ১ মিলি সেকেন্ডের বেশি সময় লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every opening parenthesis must match exactly one closing parenthesis.',
          bn: 'প্রতিটি শুরুর বন্ধনীর বিপরীতে ঠিক একটি সমাপ্তি বন্ধনী থাকতে হয়।'
        },
        explanation: {
          en: 'An unmatched left parenthesis will be left over on the stack, and an extra right parenthesis will drain the stack without finding a left parenthesis.',
          bn: 'অতিরিক্ত বাম বন্ধনী স্ট্যাকে জমা থেকে যায় এবং অতিরিক্ত ডান বন্ধনী কোনো বাম বন্ধনী না পেয়ে স্ট্যাক খালি করে ফেলে।'
        }
      },
      {
        id: 'it-q4',
        kind: 'mcq',
        topic: 'postfix-operand-order',
        question: {
          en: 'What is the postfix representation of the simple infix expression 3 + 4 * 2?',
          bn: 'সহজ ইনফিক্স সমীকরণ ৩ + ৪ * ২ এর পোস্টফিক্স রূপ কোনটি?'
        },
        options: [
          {
            en: '3 4 2 * +',
            bn: '৩ ৪ ২ * +'
          },
          {
            en: '3 4 + 2 *',
            bn: '৩ ৪ + ২ *'
          },
          {
            en: '+ * 3 4 2',
            bn: '+ * ৩ ৪ ২'
          },
          {
            en: '2 4 * 3 +',
            bn: '২ ৪ * ৩ +'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiplication has higher precedence than addition, so 4 * 2 becomes 4 2 * first.',
          bn: 'গুণের অগ্রাধিকার যোগের চেয়ে বেশি, তাই ৪ * ২ আগে ৪ ২ * হবে।'
        },
        explanation: {
          en: 'Because * has higher precedence than +, 4 and 2 are multiplied first (4 2 *), then added to 3, giving 3 4 2 * +.',
          bn: 'যেহেতু * এর অগ্রাধিকার + এর চেয়ে বেশি, তাই ৪ ও ২ আগে গুণ হয় (৪ ২ *), তারপর ৩ এর সাথে যোগ হয়ে ৩ ৪ ২ * + তৈরি করে।'
        }
      }
    ]
  }
};
