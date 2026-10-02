import type { Lesson } from '../../../lib/types';

export const IndentationAndTheBlockLesson: Lesson = {
  slug: 'indentation-and-the-block',
  tech: 'lang-python',
  title: {
    en: 'Python Syntax, Significant Indentation & Object Binding',
    bn: 'পাইথন সিনট্যাক্স, ইনডেন্টেশন এবং অবজেক্ট বাইন্ডিং'
  },
  summary: {
    en: 'Master the foundational syntax mechanics of Python: understand PEP 8 significant indentation rules (4 spaces), contrast suite headers with block scopes, explore variable name bindings to heap objects, and differentiate mutable versus immutable memory structures.',
    bn: 'পাইথনের মৌলিক সিনট্যাক্স কাঠামো আয়ত্ত করুন: PEP 8 ইনডেন্টেশন নিয়মাবলী (৪ টি স্পেস), স্যুট হেডার ও ব্লক স্কোপের পার্থক্য, হিপ অবজেক্টের সাথে ভেরিয়েবল নেম বাইন্ডিং এবং মিউটেবল বনাম ইমিউটেবল মেমোরি কাঠামোর আচরণ।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'significant-indentation-heading',
      text: {
        en: 'Significant Indentation, Colon Suite Headers, and PEP 8 Standards',
        bn: 'ইনডেন্টেশন নিয়মাবলী, কোলন স্যুট হেডার এবং PEP 8 স্ট্যান্ডার্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Python is a high-level programming language that enforces significant indentation instead of curly braces to define structural code blocks. Every compound statement begins with a header line terminated by a colon symbol (:), immediately followed by an indented suite of instructions. The official Python Enhancement Proposal (PEP 8) style guide mandates exactly 4 spaces per indentation level. The CPython lexical scanner tracks column depth using an internal indentation stack, emitting "INDENT" tokens when indentation increases and "DEDENT" tokens when indentation contracts.',
        bn: 'পাইথন একটি উচ্চ-স্তরের প্রোগ্রামিং ভাষা যা কোড ব্লক নির্দেশ করার জন্য কোনো কার্লি ব্র্যাকেট ব্যবহার না করে সরাসরি ইনডেন্টেশন বা ফাঁকা জায়গার ওপর নির্ভর করে। প্রতিটি যৌগিক স্টেটমেন্ট একটি কোলন চিহ্ন (:) যুক্ত হেডার লাইন দিয়ে শুরু হয় এবং এর ঠিক পরেই ৪ টি স্পেস দিয়ে ইনডেন্ট করা একটি স্টেটমেন্ট স্যুট থাকে। অফিসিয়াল Python Enhancement Proposal (PEP 8) স্টাইল গাইড অনুসারে প্রতিটি ইনডেন্টেশন স্তরে ঠিক ৪ টি স্পেস রাখা বাধ্যতামূলক। CPython লেক্সিক্যাল স্ক্যানার কলামের গভীরতা মেপে ইনডেন্টেশন বাড়লে "INDENT" টোকেন এবং কমলে "DEDENT" টোকেন তৈরি করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 5-stage CPython indentation parsing stack emitting INDENT and DEDENT tokens from source whitespace.',
        bn: 'চিত্র ১: সোর্স স্পেস থেকে INDENT এবং DEDENT টোকেন তৈরির ক্ষেত্রে CPython ইনডেন্টেশন স্ট্যাকের ৫ টি ধাপের রূপরেখা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">CPYTHON INDENTATION SCANNER &amp; TOKENIZER STACK</text>

  <!-- Step 1: Source Text -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source Lines</text>
    <rect x="10" y="50" width="125" height="130" rx="5" fill="#0f172a" />
    <text x="15" y="75" fill="#f43f5e" font-size="9" font-family="monospace">if active:</text>
    <text x="15" y="95" fill="#38bdf8" font-size="9" font-family="monospace">    run()</text>
    <text x="15" y="115" fill="#34d399" font-size="9" font-family="monospace">    step()</text>
    <text x="15" y="135" fill="#fbbf24" font-size="9" font-family="monospace">done()</text>
    <text x="12" y="210" fill="#38bdf8" font-size="9" font-family="sans-serif">Leading Whitespace</text>
  </g>

  <!-- Step 2: Indent Stack -->
  <g transform="translate(195, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Depth Stack</text>
    <rect x="10" y="50" width="125" height="130" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="75" fill="#34d399" font-size="9" font-family="monospace">Col 0: [0]</text>
    <text x="15" y="105" fill="#38bdf8" font-size="9" font-family="monospace">Col 4: [0, 4]</text>
    <text x="15" y="135" fill="#fbbf24" font-size="9" font-family="monospace">Pop 4: [0]</text>
    <text x="12" y="210" fill="#34d399" font-size="9" font-family="sans-serif">Stack: [0, 4] -&gt; [0]</text>
  </g>

  <!-- Step 3: Token Stream -->
  <g transform="translate(360, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Token Stream</text>
    <rect x="10" y="50" width="125" height="130" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="75" fill="#fbbf24" font-size="8" font-family="monospace">NAME 'if'</text>
    <text x="15" y="95" fill="#38bdf8" font-size="8" font-family="monospace">INDENT (4 spaces)</text>
    <text x="15" y="115" fill="#34d399" font-size="8" font-family="monospace">NAME 'run'</text>
    <text x="15" y="135" fill="#f43f5e" font-size="8" font-family="monospace">DEDENT (back to 0)</text>
    <text x="12" y="210" fill="#fbbf24" font-size="9" font-family="sans-serif">Grammar Tokens</text>
  </g>

  <!-- Step 4: AST Block -->
  <g transform="translate(525, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7c3aed" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. AST Tree</text>
    <rect x="10" y="50" width="125" height="130" rx="5" fill="#0f172a" stroke="#8b5cf6" />
    <text x="15" y="75" fill="#c084fc" font-size="8" font-family="monospace">IfNode</text>
    <text x="25" y="95" fill="#34d399" font-size="8" font-family="monospace">test: active</text>
    <text x="25" y="115" fill="#38bdf8" font-size="8" font-family="monospace">body: [run, step]</text>
    <text x="15" y="145" fill="#cbd5e1" font-size="8" font-family="monospace">Expr: done()</text>
    <text x="12" y="210" fill="#c084fc" font-size="9" font-family="sans-serif">Nested Suite</text>
  </g>

  <!-- Step 5: Bytecode Execution -->
  <g transform="translate(690, 65)">
    <rect width="125" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="125" height="30" rx="8" fill="#db2777" />
    <text x="62" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Bytecode</text>
    <rect x="10" y="50" width="105" height="130" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="12" y="75" fill="#f472b6" font-size="8" font-family="monospace">LOAD_NAME 0</text>
    <text x="12" y="95" fill="#cbd5e1" font-size="8" font-family="monospace">POP_JUMP_IF_F</text>
    <text x="12" y="115" fill="#34d399" font-size="8" font-family="monospace">CALL_FUNCTION</text>
    <text x="12" y="145" fill="#f472b6" font-size="8" font-family="monospace">RETURN_VALUE</text>
    <text x="10" y="210" fill="#f472b6" font-size="9" font-family="sans-serif">VM Dispatch</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'names-and-binding-heading',
      text: {
        en: 'Variable Names as Heap Pointers, Aliasing, and Mutability',
        bn: 'হিপ পয়েন্টার হিসেবে ভেরিয়েবল নাম, অ্যালিয়াসিং এবং মিউটেবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Python, variables are not fixed memory buckets storing bytes directly; instead, variables are name tags bound to distinct objects residing in heap memory. When executing a = [1, 2] followed by b = a, variable b does not create a new list: it binds an identical reference tag to the existing list object. Mutating b via b.append(3) alters the shared underlying object, causing a to immediately reflect the change. In contrast, immutable objects (like integers and strings) cannot be modified in-place; reassignment constructs an entirely new object with a distinct memory address.',
        bn: 'পাইথনে ভেরিয়েবলগুলো সরাসরি মেমোরি বক্সে ডেটা জমা রাখে না; বরং ভেরিয়েবলগুলো হিপ মেমোরিতে থাকা নির্দিষ্ট অবজেক্টের দিকে নির্দেশ করা লেবেল বা ট্যাগ হিসেবে কাজ করে। যখন a = [1, 2] লেখার পর b = a লেখা হয়, তখন b কোনো নতুন লিস্ট তৈরি করে না: এটি হুবহু সেই একই লিস্ট অবজেক্টকে নির্দেশ করে। ফলে b.append(3) এর মাধ্যমে পরিবর্তন করলে মূল অবজেক্টটি পরিবর্তিত হয় এবং a তেও সেই পরিবর্তন দেখা যায়। অপরদিকে ইমিউটেবল অবজেক্টের ক্ষেত্রে (যেমন সংখ্যা ও স্ট্রিং) ভেতরে পরিবর্তন করা যায় না; মান বদলাতে গেলে মেমোরিতে সম্পূর্ণ নতুন একটি অবজেক্ট তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python indentation token scanning and heap reference binding.',
        bn: 'পাইথন ইনডেন্টেশন স্ক্যানার এবং হিপ রেফারেন্স বাইন্ডিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python Indentation Lexer and Object Name Binding

// 1. Simulating CPython Indentation Stack Scanner
export class PythonIndentScanner {
  private stack: number[] = [0];

  public processLine(indentSpaces: number): string[] {
    const tokens: string[] = [];
    const currentDepth = this.stack[this.stack.length - 1];

    if (indentSpaces > currentDepth) {
      this.stack.push(indentSpaces);
      tokens.push(\`INDENT (depth=\${indentSpaces})\`);
    } else if (indentSpaces < currentDepth) {
      while (this.stack.length > 1 && this.stack[this.stack.length - 1] > indentSpaces) {
        this.stack.pop();
        tokens.push('DEDENT');
      }
      if (this.stack[this.stack.length - 1] !== indentSpaces) {
        throw new Error('IndentationError: unindent does not match any outer indentation level');
      }
    }

    return tokens;
  }
}

// 2. Simulating Python Name Binding and Mutability
export class HeapList {
  constructor(public items: number[]) {}
}

const scanner = new PythonIndentScanner();
console.log('Indent to 4 spaces:', scanner.processLine(4)); // ["INDENT (depth=4)"]
console.log('Dedent to 0 spaces:', scanner.processLine(0)); // ["DEDENT"]

// Simulating: a = [1, 2]; b = a; b.append(3);
const sharedList = new HeapList([1, 2]);
const a = sharedList;
const b = a; // Both names point to identical heap object
b.items.push(3);

console.log('a.items after b mutation:', a.items); // [1, 2, 3]
console.log('Are references identical:', a === b); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Significant Indentation',
          def: {
            en: 'Syntax design using leading whitespace (4 spaces) to define execution blocks instead of braces or keywords.',
            bn: 'সিনট্যাক্স কাঠামো যেখানে ব্র্যাকেট ব্যবহারের বদলে লাইনের শুরুতে নির্দিষ্ট ফাঁকা জায়গা (৪ টি স্পেস) দিয়ে কোড ব্লক নির্ধারণ করা হয়।'
          }
        },
        {
          term: 'Suite Header',
          def: {
            en: 'Statement introducing a compound block (such as if, for, while, def, class) terminated by a colon symbol (:).',
            bn: 'যৌগিক কোড ব্লকের শুরুর স্টেটমেন্ট যা একটি কোলন চিহ্ন (:) দিয়ে সমাপ্ত হয়।'
          }
        },
        {
          term: 'INDENT and DEDENT',
          def: {
            en: 'Lexical tokens emitted by the Python tokenizer marking the entry into and exit from indented code blocks.',
            bn: 'পাইথন টোকেনাইজারের তৈরি বিশেষ টোকেন যা ইনডেন্টেড ব্লকে প্রবেশ এবং ব্লক থেকে বের হওয়া নির্দেশ করে।'
          }
        },
        {
          term: 'Name Binding',
          def: {
            en: 'Assignment model where variable identifiers act as reference tags pointing to heap objects rather than fixed storage bins.',
            bn: 'অ্যাসাইনমেন্ট প্রক্রিয়া যেখানে ভেরিয়েবলের নামগুলো মেমোরির নির্দিষ্ট অবজেক্টের দিকে নির্দেশ করা লেবেল হিসেবে কাজ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pep8-indentation-standard-ex1',
      kind: 'mcq',
      topic: 'pep8-indentation-standard-spaces',
      question: {
        en: 'According to the PEP 8 official style guide, how many spaces should be used for each indentation level in Python?',
        bn: 'অফিসিয়াল PEP 8 স্টাইল গাইড অনুসারে পাইথনে প্রতিটি ইনডেন্টেশন স্তরের জন্য ঠিক কতটি স্পেস ব্যবহার করা উচিত?'
      },
      options: [
        { en: 'Exactly 4 spaces per indentation level, avoiding tab characters', bn: 'প্রতিটি ইনডেন্টেশন স্তরে ঠিক ৪ টি স্পেস, কোনো ট্যাব ব্যবহার না করে' },
        { en: '2 spaces or 1 tab mixed freely', bn: '২ টি স্পেস অথবা ১ টি ট্যাব ইচ্ছামতো মিশিয়ে' },
        { en: '8 spaces per level', bn: 'প্রতিটি স্তরে ৮ টি স্পেস' },
        { en: 'Indentation is optional in Python', bn: 'পাইথনে ইনডেন্টেশন ঐচ্ছিক' }
      ],
      answer: 0,
      hint: {
        en: 'PEP 8 strictly standardizes on 4 spaces per nesting level.',
        bn: 'PEP 8 প্রতিটি ইনডেন্টেশনের জন্য ৪ টি স্পেসের নিয়ম কঠোরভাবে বজায় রাখে।'
      },
      explanation: {
        en: 'PEP 8 mandates 4 spaces per indentation level to maintain visual consistency across all development environments.',
        bn: 'সকল কোড এডিটরে সামঞ্জস্য বজায় রাখতে PEP 8 সর্বদা ৪ টি স্পেস ব্যবহারের নির্দেশ দেয়।'
      }
    },
    {
      id: 'suite-header-terminator-symbol-ex2',
      kind: 'mcq',
      topic: 'suite-header-colon-syntax',
      question: {
        en: 'Which punctuation mark must terminate every compound statement header (like if, for, while, def) before an indented suite?',
        bn: 'ইনডেন্টেড কোড ব্লকের পূর্বে প্রতিটি যৌগিক স্টেটমেন্ট হেডারের (যেমন if, for, while, def) শেষে কোন চিহ্নটি থাকা আবশ্যক?'
      },
      options: [
        { en: 'A colon symbol (:)', bn: 'একটি কোলন চিহ্ন (:)' },
        { en: 'A semicolon (;)', bn: 'একটি সেমিকোলন (;)' },
        { en: 'An opening curly bracket ({)', bn: 'একটি কার্লি ব্র্যাকেট ({)' },
        { en: 'An arrow symbol (->)', bn: 'একটি তীর চিহ্ন (->)' }
      ],
      answer: 0,
      hint: {
        en: 'The colon introduces the suite of statements following the compound header.',
        bn: 'কোলন চিহ্নটি হেডারের পরবর্তী স্টেটমেন্ট স্যুট শুরু হওয়ার নির্দেশ দেয়।'
      },
      explanation: {
        en: 'Colons terminate compound statement clauses, informing the parser that an indented suite begins on the next line.',
        bn: 'কোলন চিহ্নটি কম্পাইলারকে জানায় যে পরবর্তী লাইনে একটি নতুন ইনডেন্টেড স্যুট শুরু হচ্ছে।'
      }
    },
    {
      id: 'mutable-object-alias-mutation-ex3',
      kind: 'mcq',
      topic: 'mutable-object-alias-mutation',
      question: {
        en: 'Given list_a = [10, 20]; list_b = list_a; list_b.append(30), what does list_a evaluate to?',
        bn: 'list_a = [10, 20]; list_b = list_a; list_b.append(30) কোডটি চালানোর পর list_a এর মান কী হবে?'
      },
      options: [
        {
          en: '[10, 20, 30], because both list_a and list_b point to the identical mutable list object in heap memory',
          bn: '[10, 20, 30], কারণ list_a এবং list_b উভয়ই হিপ মেমোরিতে থাকা হুবহু একই মিউটেবল লিস্ট অবজেক্টকে নির্দেশ করে'
        },
        {
          en: '[10, 20], because list_b receives a completely independent clone of list_a',
          bn: '[10, 20], কারণ list_b মূল লিস্টের একটি সম্পূর্ণ স্বাধীন কপি পায়'
        },
        {
          en: 'A fatal NameError exception',
          bn: 'একটি মারাত্মক NameError এক্সেপশন'
        },
        {
          en: 'None',
          bn: 'None'
        }
      ],
      answer: 0,
      hint: {
        en: 'Assignment binds an existing object reference rather than cloning the container.',
        bn: 'অ্যাসাইনমেন্ট নতুন কপি না তৈরি করে একই অবজেক্টের দিকে নতুন নাম যুক্ত করে।'
      },
      explanation: {
        en: 'Lists are mutable objects; assigning list_b = list_a creates an alias to the same memory instance.',
        bn: 'লিস্ট একটি মিউটেবল অবজেক্ট হওয়ায় উভয় ভেরিয়েবল একই মেমোরি লোকেশন নির্দেশ করে।'
      }
    },
    {
      id: 'tab-space-mixing-error-ex4',
      kind: 'mcq',
      topic: 'tab-space-mixing-taberror',
      question: {
        en: 'What error does Python 3 raise when source code inconsistently mixes tabs and spaces within the same block?',
        bn: 'একই কোড ব্লকের ভেতরে অসাবধানতাবশত ট্যাব এবং স্পেস একসাথে মেশালে পাইথন ৩ কোন এররটি ছুড়ে দেয়?'
      },
      options: [
        {
          en: 'TabError: inconsistent use of tabs and spaces in indentation',
          bn: 'TabError: ইনডেন্টেশনে ট্যাব এবং স্পেসের অসামঞ্জস্যপূর্ণ ব্যবহারের ত্রুটি'
        },
        {
          en: 'MemoryError: stack overflow',
          bn: 'MemoryError: stack overflow'
        },
        {
          en: 'Python converts all tabs into 10 spaces without warning',
          bn: 'পাইথন কোনো সতর্কতা ছাড়াই সমস্ত ট্যাবকে ১০ টি স্পেসে বদলে দেয়'
        },
        {
          en: 'ZeroDivisionError',
          bn: 'ZeroDivisionError'
        }
      ],
      answer: 0,
      hint: {
        en: 'Python 3 strictly disallows mixing tabs and spaces for indentation.',
        bn: 'পাইথন ৩ ইনডেন্টেশনে ট্যাব এবং স্পেসের মিশ্রণ কঠোরভাবে নিষিদ্ধ করেছে।'
      },
      explanation: {
        en: 'Mixing tabs and spaces triggers a TabError during lexical scanning, preventing indentation ambiguity.',
        bn: 'ট্যাব ও স্পেস একসাথে মেশালে অস্পষ্টতা রোধ করতে পাইথন সরাসরি TabError ছুড়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-indentation-and-the-block',
    title: {
      en: 'Python Indentation and Name Binding Quiz',
      bn: 'পাইথন ইনডেন্টেশন এবং নেম বাইন্ডিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-is-versus-double-equals',
        kind: 'mcq',
        topic: 'identity-vs-equality-operators',
        question: {
          en: 'What is the operational difference between the "==" operator and the "is" operator in Python?',
          bn: 'পাইথনে "==" অপারেটর এবং "is" অপারেটরের মধ্যে কার্যকরী পার্থক্য কী?'
        },
        options: [
          {
            en: '"==" checks value equality (whether values are equivalent), while "is" checks object identity (whether both operands reference the identical memory address)',
            bn: '"==" দুটি মানের সমতা পরীক্ষা করে, আর "is" অবজেক্ট আইডেন্টিটি বা মেমোরি ঠিকানা হুবহু এক কি না তা পরীক্ষা করে'
          },
          {
            en: 'They are identical aliases that can be used interchangeably',
            bn: 'তারা একে অপরের বিকল্প এবং সম্পূর্ণ একই কাজ করে'
          },
          {
            en: '"is" only works on integer numbers',
            bn: '"is" কেবল পূর্ণসংখ্যার ক্ষেত্রে কাজ করে'
          },
          {
            en: '"==" is unsupported in modern Python',
            bn: '"==" আধুনিক পাইথনে কাজ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Equality evaluates object values; identity evaluates memory addresses via id().',
          bn: 'সমতা মানের ভিত্তিতে বিচার করে আর আইডেন্টিটি মেমোরির ঠিকানার ভিত্তিতে বিচার করে।'
        },
        explanation: {
          en: 'a == b checks if values match; a is b checks if id(a) == id(b), confirming the exact same heap instance.',
          bn: 'a == b মান মেলায়, আর a is b যাচাই করে উভয় ভেরিয়েবল একই মেমোরি অবজেক্টকে নির্দেশ করছে কি না।'
        }
      },
      {
        id: 'quiz-pass-statement-purpose',
        kind: 'mcq',
        topic: 'pass-statement-syntactic-placeholder',
        question: {
          en: 'Why is the "pass" statement used inside an empty Python function or class definition?',
          bn: 'খালি পাইথন ফাংশন বা ক্লাস সংজ্ঞায়িত করার সময় "pass" স্টেটমেন্টটি কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It acts as a syntactic placeholder because Python grammar requires at least 1 indented statement inside every suite',
            bn: 'এটি একটি সিনট্যাক্স প্লেসহোল্ডার হিসেবে কাজ করে কারণ পাইথনের ব্যাকরণ অনুসারে প্রতিটি স্যুটে অন্তত ১ টি ইনডেন্টেড স্টেটমেন্ট থাকা আবশ্যক'
          },
          {
            en: 'It skips to the next iteration of an outer loop',
            bn: 'এটি বাইরের লুপের পরবর্তী ধাপে চলে যায়'
          },
          {
            en: 'It deletes the function from the module namespace',
            bn: 'এটি মডিউল নেমস্পেস থেকে ফাংশনটি মুছে ফেলে'
          },
          {
            en: 'It causes the function to return integer 0',
            bn: 'এটি ফাংশন থেকে সর্বদা ০ মান রিটার্ন করায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'An empty suite triggers an IndentationError unless filled with a no-op statement like pass or an ellipsis (...).',
          bn: 'ইনডেন্টেড ব্লকে কিছু না লিখলে এরর হয়, pass লিখলে কোনো কাজ না করে ব্লকটি বৈধ থাকে।'
        },
        explanation: {
          en: 'pass is a null operation satisfying Python parser grammar when code bodies are pending implementation.',
          bn: 'pass কোনো অপারেশন চালায় না, কেবল সিনট্যাক্স ঠিক রাখতে একটি প্লেসহোল্ডার হিসেবে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-small-integer-caching-optimization',
        kind: 'mcq',
        topic: 'small-integer-caching-range',
        question: {
          en: 'Why does x = 256; y = 256; x is y evaluate to True in CPython, while x = 1000; y = 1000; x is y may evaluate to False?',
          bn: 'CPython-এ x = 256; y = 256; x is y এর মান True হলেও x = 1000; y = 1000; x is y এর মান কেন False হতে পারে?'
        },
        options: [
          {
            en: 'CPython pre-allocates and caches an array of small integer singletons ranging from -5 to 256 at interpreter startup',
            bn: 'CPython ইন্টারপ্রেটার চালুর সময়ই -5 থেকে 256 পর্যন্ত ছোট পূর্ণসংখ্যাগুলোর অবজেক্ট আগে থেকেই তৈরি করে মেমোরিতে সংরক্ষণ করে রাখে'
          },
          {
            en: 'Because 1000 is an invalid integer in Python',
            bn: 'কারণ 1000 পাইথনে কোনো বৈধ সংখ্যা নয়'
          },
          {
            en: '256 is a power of 2, which activates CPU hardware caching',
            bn: '256 সংখ্যাটি ২ এর গুণিতক হওয়ায় এটি সরাসরি হার্ডওয়্যারে ক্যাশ হয়'
          },
          {
            en: 'The "is" operator is non-deterministic for numbers',
            bn: 'সংখ্যার ক্ষেত্রে "is" অপারেটর অনির্ধারিত আচরণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CPython keeps pre-allocated singleton objects for numbers between -5 and 256.',
          bn: 'CPython -5 থেকে 256 পর্যন্ত সংখ্যাগুলোকে মেমোরিতে সিঙ্গেলটন হিসেবে স্থায়ীভাবে সংরক্ষণ করে।'
        },
        explanation: {
          en: 'Integers between -5 and 256 share singleton PyObject instances, so "is" evaluates to True for identical values in that range.',
          bn: '-5 থেকে 256 এর ভেতরের প্রতিটি সংখ্যার জন্য একই অবজেক্ট ব্যবহৃত হয়, তাই এদের ক্ষেত্রে "is" সর্বদা True দেয়।'
        }
      },
      {
        id: 'quiz-block-scoping-vs-function-scoping',
        kind: 'mcq',
        topic: 'python-variable-scope-rules',
        question: {
          en: 'If a variable "count = 5" is declared inside an "if True:" block in Python, is it accessible outside the if block?',
          bn: 'পাইথনে "if True:" ব্লকের ভেতরে "count = 5" ভেরিয়েবল তৈরি করা হলে ব্লকের বাইরে কি এটি ব্যবহার করা যাবে?'
        },
        options: [
          {
            en: 'Yes, Python has function and module scope, but does NOT create local scopes for if, for, or while blocks',
            bn: 'হ্যাঁ, পাইথনে ফাংশন ও মডিউল স্কোপ থাকে, কিন্তু if, for বা while ব্লকের জন্য আলাদা কোনো লোকাল স্কোপ তৈরি হয় না'
          },
          {
            en: 'No, variables declared inside any indented block are strictly deleted when the block concludes',
            bn: 'না, ইনডেন্টেড ব্লকে তৈরি ভেরিয়েবল ব্লক শেষ হওয়ার সাথে সাথে মুছে যায়'
          },
          {
            en: 'Only if the variable is declared as global count',
            bn: 'কেবল যদি ভেরিয়েবলটিকে global count হিসেবে ঘোষণা করা হয়'
          },
          {
            en: 'Only inside Python classes',
            bn: 'কেবল পাইথন ক্লাসের ভেতরে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Blocks created by if, for, or while statements do not introduce new lexical scopes in Python.',
          bn: 'পাইথনে if, for বা while কোনো নতুন স্কোপ তৈরি করে না, ফলে ভেতরের ভেরিয়েবল বাইরেও পাওয়া যায়।'
        },
        explanation: {
          en: 'Unlike languages with block scoping (like C or Java), Python variables defined in if/loop suites leak into the enclosing function or module.',
          bn: 'সি বা জাভার মতো ব্লক স্কোপ পাইথনে নেই; ফাংশন ছাড়া সাধারণ ব্লকের ভেরিয়েবল বাইরের স্কোপেই বিদ্যমান থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'comprehensions-and-the-comp',
    title: {
      en: 'List, Set & Dict Comprehensions & Lazy Generators',
      bn: 'লিস্ট, সেট ও ডিকশনারি কম্প্রিহেনশন এবং লেজি জেনারেটর'
    }
  }
};
