import type { Lesson } from '../../../lib/types';

export const PreprocessorAndTheMacroLesson: Lesson = {
  slug: 'preprocessor-and-the-macro',
  tech: 'c',
  title: {
    en: 'The C Preprocessor, Macros & Conditional Compilation — Directives & Metaprogramming',
    bn: 'সি প্রিপ্রসেসর, ম্যাক্রো ও শর্তাধীন কম্পাইলেশন — নির্দেশিকা ও মেটা-প্রোগ্রামিং'
  },
  summary: {
    en: 'The C preprocessor operates as the first stage of the 4-phase compilation toolchain (preprocessing, compiling, assembling, linking), performing pure lexical text manipulation on source code prior to syntax parsing. Directives beginning with # govern this transformation: #include stitches external header files into single translation units, guarded by #ifndef include guards to prevent duplicate symbol collisions. Macro definitions (#define) execute literal token substitution without type checking or scope boundaries. While powerful for platform constants and hardware abstraction, naive macros expose dangerous operator precedence traps and repeated side-effect evaluations. Mastering defensive parentheses, stringification (#), token pasting (##), and conditional compilation (#ifdef) unlocks safe systems metaprogramming.',
    bn: 'সি প্রিপ্রসেসর ৪-ধাপের কম্পাইলেশন টুলচেনের (প্রিপ্রসেসিং, কম্পাইলিং, অ্যাসেম্বলিং ও লিংকিং) প্রথম ধাপ হিসেবে কাজ করে, যা ব্যাকরণ পার্সিংয়ের আগেই সোর্স কোডে সাধারণ টেক্সট পরিবর্তনের দায়িত্ব পালন করে। হ্যাশ (#) দিয়ে শুরু হওয়া নির্দেশিকাগুলো এই রূপান্তর পরিচালনা করে: #include এক্সটার্নাল হেডার ফাইলগুলোকে একক ট্রান্সলেশন ইউনিটে যুক্ত করে, যা ডুপ্লিকেট ডিফিনিশন এড়াতে #ifndef গার্ড দিয়ে সুরক্ষিত থাকে। ম্যাক্রো ডিফিনিশন (#define) কোনো প্রকার টাইপ চেকিং বা স্কোপ সীমানা ছাড়াই সরাসরি কোড প্রতিস্থাপন করে। হার্ডওয়্যার অ্যাবস্ট্রাকশন ও কনস্ট্যান্ট নির্ধারণে এটি শক্তিশালী হলেও, অসতর্ক ম্যাক্রো বিপজ্জনক অপারেটর প্রেসিডেন্স জটিলতা ও পার্শ্বপ্রতিক্রিয়া তৈরি করে। সতর্ক প্যারেন্থেসিস, স্ট্রিঙ্গিফিকেশন (#), টোকেন পেস্টিং (##) এবং শর্তাধীন কম্পাইলেশনে (#ifdef) দক্ষতা অর্জন নিরাপদ মেটা-প্রোগ্রামিং নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Preprocessor and Lexical Transformation',
        bn: 'মূল ধারণা: প্রিপ্রসেসর ও টেক্সট রূপান্তর'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you compile software in C, your source code undergoes an automated text transformation pass before the compiler ever inspects syntax rules. This initial phase is orchestrated by the C Preprocessor, a dedicated tool that executes directives beginning with a hash symbol. It substitutes macros, copies included header files into translation units, and selectively compiles code based on target hardware environments.',
        bn: 'সি-তে যখন আপনি সফটওয়্যার কম্পাইল করেন, তখন কম্পাইলার ব্যাকরণ বা সিনট্যাক্স নিয়ম পরীক্ষা করার আগেই আপনার সোর্স কোড একটি প্রাথমিক টেক্সট রূপান্তর প্রক্রিয়ার মধ্য দিয়ে যায়। এই প্রথম ধাপটি সি প্রিপ্রসেসর (C Preprocessor) দ্বারা পরিচালিত হয়, যা হ্যাশ (#) চিহ্ন দিয়ে শুরু হওয়া নির্দেশিকাগুলো কার্যকর করে। এটি ম্যাক্রো প্রতিস্থাপন করে, হেডার ফাইলের কনটেন্ট সোর্স ফাইলে যুক্ত করে এবং নির্দিষ্ট হার্ডওয়্যার পরিবেশের ওপর ভিত্তি করে কোডের অংশ নির্বাচন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Preprocessor Directive',
          def: {
            en: 'A line starting with # interpreted as an instruction by the preprocessor before syntax parsing occurs',
            bn: 'হ্যাশ (#) দিয়ে শুরু হওয়া একটি লাইন যা কম্পাইলার কোড পার্স করার আগেই প্রিপ্রসেসরকে নির্দেশ হিসেবে কার্যকর করতে হয়'
          }
        },
        {
          term: 'Translation Unit',
          def: {
            en: 'The complete stream of C tokens produced after expanding all includes and macros for a single source file',
            bn: 'একটি সোর্স ফাইলের সমস্ত হেডার ও ম্যাক্রো সম্প্রসারিত করার পর তৈরি হওয়া সম্পূর্ণ সমন্বিত কোড স্ট্রিম'
          }
        },
        {
          term: 'Include Guard',
          def: {
            en: 'A defensive #ifndef, #define, and #endif wrapper preventing duplicate declarations when a header is imported multiple times',
            bn: '#ifndef, #define এবং #endif-এর একটি সুরক্ষামূলক কাঠামো যা হেডার ফাইল বারবার অন্তর্ভুক্ত হলেও ডুপ্লিকেট ডিফিনিশন রোধ করে'
          }
        },
        {
          term: 'Token Pasting (##)',
          def: {
            en: 'A preprocessor operator that stitches two adjacent identifier tokens together into a single combined token',
            bn: 'প্রিপ্রসেসরের একটি অপারেটর (##) যা পাশাপাশি দুটি টোকেনকে জোড়া লাগিয়ে একটি নতুন নাম তৈরি করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'compilation-pipeline',
      text: {
        en: 'The 4 Stages of the C Compilation Toolchain',
        bn: 'সি কম্পাইলেশন টুলচেনের ৪টি সুনির্দিষ্ট ধাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The journey from C source code to an executable binary progresses through 4 distinct stages. First, the Preprocessor strips comments and expands directives. Second, the Compiler parses C syntax into assembly language. Third, the Assembler converts assembly into machine object code (.o). Fourth, the Linker resolves references and packages the final binary executable.',
        bn: 'সি সোর্স কোড থেকে এক্সিকিউটেবল বাইনারি তৈরি হতে ৪টি ধাপ অতিক্রম করতে হয়। প্রথমত, প্রিপ্রসেসর কমেন্ট মুছে ফেলে এবং নির্দেশিকাগুলো সম্প্রসারিত করে। দ্বিতীয়ত, কম্পাইলার সি ব্যাকরণ পার্স করে অ্যাসেম্বলি কোডে রূপান্তর করে। তৃতীয়ত, অ্যাসেম্বলার সেই অ্যাসেম্বলি কোডকে অবজেক্ট কোডে (.o) রূপান্তর করে। চতুর্থত, লিংকার সমস্ত রেফারেন্স সমাধান করে চূড়ান্ত বাইনারি সফটওয়্যার তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Running gcc -E prints the raw output of stage 1 directly to the terminal, allowing developers to inspect exactly how header inclusions and macros expanded before compiling.',
        bn: 'gcc -E কমান্ডটি চালালে প্রথম ধাপের র\' আউটপুট সরাসরি টার্মিনালে দেখা যায়, যা কম্পাইল করার আগেই হেডার ও ম্যাক্রোর সম্প্রসারিত রূপ পুঙ্খানুপুঙ্খভাবে নিরীক্ষণ করতে সাহায্য করে।'
      }
    },
    {
      type: 'heading',
      id: 'macro-precedence-trap',
      text: {
        en: 'The Macro Precedence Trap: Why Parentheses Save Lives',
        bn: 'ম্যাক্রো প্রেসিডেন্সের ফাঁদ: বন্ধনীর অপরিহার্যতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because macros perform literal text substitution without mathematical evaluation, naive macros generate subtle calculation bugs. Consider #define SQUARE(x) x * x. When invoking SQUARE(2 + 3), the preprocessor replaces it literally as 2 + 3 * 2 + 3. Multiplication takes precedence, yielding 2 + 6 + 3 = 11, instead of 25 (5 * 5).',
        bn: 'ম্যাক্রো যেহেতু কোনো গাণিতিক হিসাব ছাড়াই কেবল টেক্সট প্রতিস্থাপন করে, তাই অসতর্ক ম্যাক্রো বিপজ্জনক বিভ্রান্তিকর ভুল তৈরি করে। যেমন #define SQUARE(x) x * x থাকলে SQUARE(2 + 3) কল করলে তা সরাসরি 2 + 3 * 2 + 3 হয়ে যায়। গুণের অগ্রাধিকারের কারণে এটি 2 + 6 + 3 = ১১ প্রদান করে, যেখানে কাঙ্ক্ষিত মান ছিল ২৫ (৫ * ৫)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To make macros safe against operator precedence bugs, always wrap the macro parameters and the full outer expression in parentheses: #define SQUARE_SAFE(x) ((x) * (x)). Evaluating SQUARE_SAFE(2 + 3) expands to ((2 + 3) * (2 + 3)), safely returning 25.',
        bn: 'অপারেটর অগ্রাধিকারের এই ভুল ঠেকাতে সর্বদা ম্যাক্রোর প্রতিটি প্যারামিটার এবং পুরো এক্সপ্রেশনটিকে বন্ধনী দিয়ে ঘিরে রাখতে হয়: #define SQUARE_SAFE(x) ((x) * (x))। এর ফলে SQUARE_SAFE(2 + 3) সম্প্রসারিত হয়ে ((2 + 3) * (2 + 3)) হয় এবং নিরাপদে সঠিক মান ২৫ প্রদান করে।'
      }
    },
    {
      type: 'heading',
      id: 'advanced-operators',
      text: {
        en: 'Advanced Metaprogramming: Stringification and Token Pasting',
        bn: 'উন্নত মেটা-প্রোগ্রামিং: স্ট্রিঙ্গিফিকেশন ও টোকেন পেস্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The preprocessor includes two specialized metaprogramming operators: the stringification operator (#) and the token pasting operator (##). The # operator converts any macro argument into a quoted string literal at compile time, transforming #MAX_BUFFER into "MAX_BUFFER".',
        bn: 'প্রিপ্রসেসরে দুটি বিশেষায়িত মেটা-প্রোগ্রামিং অপারেটর রয়েছে: স্ট্রিঙ্গিফিকেশন অপারেটর (#) এবং টোকেন পেস্টিং অপারেটর (##)। # অপারেটর যেকোনো ম্যাক্রো আর্গুমেন্টকে কোটেশনযুক্ত স্ট্রিং লিটারেলে রূপান্তরিত করে, যেমন #MAX_BUFFER পরিবর্তিত হয়ে "MAX_BUFFER" হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The ## operator concatenates two independent tokens together to forge new C identifiers. For example, combining prefix handle_ with suffix click generates the valid function identifier handle_click, enabling powerful code-generation tables.',
        bn: '## অপারেটর দুটি স্বাধীন টোকেনকে জোড়া লাগিয়ে একটি নতুন সি আইডেন্টিফায়ার তৈরি করে। উদাহরণস্বরূপ, প্রিফিক্স handle_-এর সাথে ক্লিক সাফিক্স যুক্ত করলে তৈরি হয় বৈধ ফাংশন নাম handle_click, যা স্বয়ংক্রিয় কোড তৈরিতে চমৎকার ভূমিকা রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Macros vs Inline Functions vs Const Variables',
        bn: 'কাঠামোগত তুলনা: ম্যাক্রো বনাম ইনলাইন ফাংশন বনাম কনস্ট্যান্ট ভ্যারিয়েবল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Abstraction Form', bn: 'অ্যাবস্ট্রাকশন রূপ' },
        { en: 'Type Safety Enforcement', bn: 'টাইপ নিরাপত্তার প্রয়োগ' },
        { en: 'Scope and Visibility', bn: 'স্কোপ ও দৃশ্যমানতা' },
        { en: 'Primary Systems Purpose', bn: 'প্রধান সিস্টেম ভূমিকা' }
      ],
      rows: [
        [
          { en: '#define Macro', bn: '#define ম্যাক্রো' },
          { en: 'Zero type checking (literal textual replacement)', bn: 'কোনো টাইপ চেকিং নেই (সরাসরি টেক্সট প্রতিস্থাপন)' },
          { en: 'Global file scope from point of definition onward', bn: 'ঘোষণার পর থেকে পুরো ফাইলে কার্যকর' },
          { en: 'Platform conditional switches, include guards, code generation', bn: 'প্ল্যাটফর্ম সুইচ, ইনক্লুড গার্ড ও কোড জেনারেশন' }
        ],
        [
          { en: 'inline Function', bn: 'inline ফাংশন' },
          { en: 'Full static type safety enforced by compiler', bn: 'কম্পাইলার দ্বারা শতভাগ স্ট্যাটিক টাইপ নিরাপত্তা নিশ্চিত' },
          { en: 'Respects standard C lexical function scoping', bn: 'সি ভাষার স্বাভাবিক লেক্সিক্যাল স্কোপ মেনে চলে' },
          { en: 'Fast small utility logic without call overhead', bn: 'কল ওভারহেড ছাড়া দ্রুতগতির ছোট ইউটিলিটি লজিক' }
        ],
        [
          { en: 'const Variable', bn: 'const ভ্যারিয়েবল' },
          { en: 'Full type checking with memory alignment rules', bn: 'মেমোরি অ্যালাইনমেন্টসহ পূর্ণাঙ্গ টাইপ যাচাই' },
          { en: 'Scoped to containing block or translation unit', bn: 'নির্দিষ্ট ব্লক বা ট্রান্সলেশন ইউনিটে সীমাবদ্ধ' },
          { en: 'Immutable domain configuration, lookup tables, limits', bn: 'অপরিবর্তনীয় কনফিগারেশন, টেবিল ও সীমা নির্ধারণ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Macro Expansions & Precedence Fixes',
        bn: 'বাস্তব কোড সিমুলেশন: ম্যাক্রো সম্প্রসারণ ও প্রেসিডেন্স সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Preprocessor Macros & Precedence Traps in Node.js

class PreprocessorSimulator {
  // Simulates #define SQUARE_NAIVE(x) x * x
  // For input "2 + 3", naive expansion becomes: 2 + 3 * 2 + 3
  static squareNaive(xVal: number, a: number, b: number): number {
    // a + b = 2 + 3
    // evaluation: a + (b * a) + b = 2 + (3 * 2) + 3 = 11
    return a + b * a + b;
  }

  // Simulates #define SQUARE_SAFE(x) ((x) * (x))
  static squareSafe(xVal: number): number {
    return xVal * xVal;
  }

  // Simulates Stringification #x
  static stringify(expr: string): string {
    return \`"\${expr}"\`;
  }

  // Simulates Token Pasting a ## b
  static tokenPaste(prefix: string, suffix: string): string {
    return \`\${prefix}\${suffix}\`;
  }
}

const naiveResult = PreprocessorSimulator.squareNaive(5, 2, 3); // 11
const safeResult = PreprocessorSimulator.squareSafe(2 + 3); // 25
const stringified = PreprocessorSimulator.stringify('MAX_BUFFER'); // "MAX_BUFFER"
const pastedToken = PreprocessorSimulator.tokenPaste('handle_', 'click'); // "handle_click"

console.log('Unparenthesized macro SQUARE(2 + 3) evaluation result:', naiveResult);
// -> Unparenthesized macro SQUARE(2 + 3) evaluation result: 11
console.log('Defensively parenthesized macro ((2 + 3) * (2 + 3)) result:', safeResult);
// -> Defensively parenthesized macro ((2 + 3) * (2 + 3)) result: 25
console.log('Stringification # operator on identifier MAX_BUFFER:', stringified);
// -> Stringification # operator on identifier MAX_BUFFER: "MAX_BUFFER"
console.log('Token pasting ## operator combining handle_ and click:', pastedToken);
// -> Token pasting ## operator combining handle_ and click: handle_click
console.log('Total stages in the standard C build pipeline: 4');
// -> Total stages in the standard C build pipeline: 4`,
      caption: {
        en: 'Simulation: naive macro SQUARE(2 + 3) yields 11; parenthesized macro yields 25; # converts to "MAX_BUFFER"; ## yields handle_click; pipeline has 4 stages',
        bn: 'সিমুলেশন: বন্ধনীহীন ম্যাক্রো SQUARE(2 + 3) দেয় ১১; বন্ধনীযুক্ত ম্যাক্রো দেয় ২৫; # দেয় "MAX_BUFFER"; ## দেয় handle_click; টুলচেনে ৪টি ধাপ'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always protect header files with include guards (#ifndef FOO_H #define FOO_H ... #endif) or #pragma once. Unprotected headers trigger redefinition compilation errors across translation units.',
        bn: 'নিয়ম ১: হেডার ফাইলগুলোতে সর্বদা ইনক্লুড গার্ড (#ifndef FOO_H #define FOO_H ... #endif) অথবা #pragma once ব্যবহার করুন। অন্যথায় হেডার বারবার আমদানি হলে রি-ডিফিনিশন কম্পাইলেশন ত্রুটি ঘটবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Wrap every macro parameter and full macro body in defensive parentheses. Enclosing ((x) * (y)) prevents unexpected operator precedence bugs when expressions containing operators are passed.',
        bn: 'নিয়ম ২: ম্যাক্রোর প্রতিটি প্যারামিটার এবং মূল বডিকে বন্ধনী দিয়ে সুরক্ষিত রাখুন। ((x) * (y)) আকারে লিখলে আর্গুমেন্টে অপারেটর থাকলেও গাণিতিক অগ্রাধিকারের ভুল রোধ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Avoid passing expressions with side effects (such as i++) to macros. If a macro evaluates a parameter twice (like MAX(a, b)), the variable will be unexpectedly incremented multiple times.',
        bn: 'নিয়ম ৩: পার্শ্বপ্রতিক্রিয়া তৈরি করে এমন এক্সপ্রেশন (যেমন i++) কখনো ম্যাক্রোতে পাঠাবেন না। ম্যাক্রো যদি প্যারামিটারটি দুইবার মূল্যায়ন করে (যেমন MAX(a, b)), তবে ভ্যারিয়েবলটি একের অধিকবার বেড়ে মারাত্মক বাগ তৈরি করবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Prefer static inline functions and const variables over function-like macros wherever possible. Inline functions provide static type safety, proper scoping, and clean debugging stack traces.',
        bn: 'নিয়ম ৪: ফাংশন সদৃশ ম্যাক্রোর বদলে যতটা সম্ভব static inline ফাংশন ও const ভ্যারিয়েবল ব্যবহার করুন। ইনলাইন ফাংশন স্ট্যাটিক টাইপ নিরাপত্তা, সঠিক স্কোপ এবং স্বচ্ছ ডিবাগিং সুবিধা প্রদান করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-pre-ex1',
      kind: 'mcq',
      topic: 'The 4 stages of the C compilation toolchain',
      question: {
        en: 'What are the 4 chronological stages of the standard C compilation pipeline from source code to executable binary?',
        bn: 'সোর্স কোড থেকে এক্সিকিউটেবল বাইনারি তৈরিতে স্ট্যান্ডার্ড সি কম্পাইলেশন পাইপলাইনের ৪টি কালানুক্রমিক ধাপ কী কী?'
      },
      options: [
        {
          en: 'Preprocessing (directives and macros), Compiling (parsing C to assembly), Assembling (assembly to machine object code .o), and Linking (combining object files into an executable)',
          bn: 'প্রিপ্রসেসিং (নির্দেশিকা ও ম্যাক্রো), কম্পাইলিং (সি থেকে অ্যাসেম্বলি), অ্যাসেম্বলিং (অ্যাসেম্বলি থেকে মেশিন অবজেক্ট কোড .o) এবং লিংকিং (অবজেক্ট ফাইলগুলো যুক্ত করে এক্সিকিউটেবল তৈরি)'
        },
        {
          en: 'Downloading, Printing, Scanning, and Deleting',
          bn: 'ডাউনলোডিং, প্রিন্টিং, স্ক্যানিং এবং ডিলিটিং'
        },
        {
          en: 'Recording, Editing, Publishing, and Streaming',
          bn: 'রেকর্ডিং, এডিটিং, পাবলিশিং এবং স্ট্রিমিং'
        },
        {
          en: 'Formatting, Installing, Upgrading, and Restarting',
          bn: 'ফরম্যাটিং, ইন্সটলিং, আপগ্রেডিং এবং রিস্টার্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preprocessing, compiling to assembly, assembling to object code, and linking.',
        bn: 'প্রিপ্রসেসিং, অ্যাসেম্বলিতে রূপান্তর, অবজেক্ট কোড তৈরি ও লিংকিংয়ের কথা ভাবুন।'
      },
      explanation: {
        en: 'The standard C pipeline consists of cpp (preprocessor), cc1 (compiler to assembly), as (assembler to .o), and ld (linker to binary).',
        bn: 'স্ট্যান্ডার্ড সি পাইপলাইনে রয়েছে cpp (প্রিপ্রসেসর), cc1 (অ্যাসেম্বলি কম্পাইলার), as (অ্যাসেম্বলার অবজেক্ট ফাইল) এবং ld (বাইনারি লিংকার)।'
      }
    },
    {
      id: 'c-pre-ex2',
      kind: 'mcq',
      topic: 'Operator precedence bugs in unparenthesized macros',
      question: {
        en: 'Given #define SQUARE(x) x * x, what is the output of evaluating SQUARE(2 + 3) and why?',
        bn: 'যদি #define SQUARE(x) x * x ঘোষণা করা থাকে, তবে SQUARE(2 + 3) মূল্যায়ন করলে ফলাফল কী আসবে এবং কেন?'
      },
      options: [
        {
          en: 'It evaluates to 11 because literal textual substitution expands the expression to 2 + 3 * 2 + 3; multiplication takes precedence (3 * 2 = 6), yielding 2 + 6 + 3 = 11',
          bn: 'এটি ১১ হবে কারণ সরাসরি টেক্সট প্রতিস্থাপনের ফলে এক্সপ্রেশনটি 2 + 3 * 2 + 3 হয়; গুণের অগ্রাধিকারের কারণে (৩ * ২ = ৬) ফলাফল দাঁড়ায় ২ + ৬ + ৩ = ১১'
        },
        {
          en: 'It evaluates to 25 because preprocessors always compute parentheses first',
          bn: 'এটি ২৫ হবে কারণ প্রিপ্রসেসর সর্বদা বন্ধনী আগে সমাধান করে'
        },
        {
          en: 'It produces a syntax error because plus signs are illegal in macros',
          bn: 'এটি সিনট্যাক্স এরর দেবে কারণ ম্যাক্রোতে যোগ চিহ্ন ব্যবহার নিষিদ্ধ'
        },
        {
          en: 'It evaluates to 0 because 2 and 3 cancel each other out',
          bn: 'এটি ০ হবে কারণ ২ এবং ৩ পরস্পরকে বাতিল করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Macros perform literal textual substitution without calculation.',
        bn: 'ম্যাক্রো কোনো হিসাব না করে সরাসরি অক্ষরগুলো বসিয়ে দেয়।'
      },
      explanation: {
        en: 'Macros do not evaluate expressions before substitution. 2 + 3 * 2 + 3 groups as 2 + (3 * 2) + 3 = 11. Defensively parenthesizing as ((x) * (x)) fixes this.',
        bn: 'ম্যাক্রো মান হিসাব করে না। 2 + 3 * 2 + 3 গাণিতিকভাবে 2 + (3 * 2) + 3 = ১১ হয়ে যায়। বন্ধনী ((x) * (x)) ব্যবহার করলে এই ভুল এড়ানো যায়।'
      }
    },
    {
      id: 'c-pre-ex3',
      kind: 'mcq',
      topic: 'The purpose of header include guards',
      question: {
        en: 'What critical compilation problem is prevented by header guards (#ifndef HEADER_H #define HEADER_H ... #endif)?',
        bn: 'হেডার গার্ড (#ifndef HEADER_H #define HEADER_H ... #endif) ব্যবহারের মাধ্যমে কম্পাইলেশনের কোন জটিল সমস্যা প্রতিরোধ করা হয়?'
      },
      options: [
        {
          en: 'Duplicate symbol definitions and type redefinition errors when a header is imported multiple times transitively across different source files',
          bn: 'বিভিন্ন সোর্স ফাইলে একটি হেডার বারবার অন্তর্ভুক্ত হলেও ডুপ্লিকেট সিম্বল ও টাইপ রি-ডিফিনিশনের মারাত্মক কম্পাইলেশন ত্রুটি প্রতিরোধ করে'
        },
        {
          en: 'It prevents hackers from reading the header file code',
          bn: 'এটি হ্যাকারদের হেডার ফাইল পড়া থেকে বিরত রাখে'
        },
        {
          en: 'It doubles the storage capacity of the hard disk drive',
          bn: 'এটি হার্ডড্রাইভের মেমোরি ক্ষমতা দ্বিগুণ করে দেয়'
        },
        {
          en: 'It automatically translates header files into Python code',
          bn: 'এটি স্বয়ংক্রিয়ভাবে হেডার ফাইলকে পাইথন কোডে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preventing multiple inclusion of the same header declarations.',
        bn: 'একই হেডারের ঘোষণাগুলো যেন একাধিকবার অন্তর্ভুক্ত না হয় তা নিশ্চিত করা।'
      },
      explanation: {
        en: 'When headers include other headers, declarations can be repeated. Include guards ensure the compiler processes each header file only once per translation unit.',
        bn: 'হেডার ফাইল একে অপরকে অন্তর্ভুক্ত করলে বারবার ঘোষণার ঝুঁকি থাকে। ইনক্লুড গার্ড নিশ্চিত করে কম্পাইলার প্রতিটি হেডার ফাইল কেবল একবারই গ্রহণ করবে।'
      }
    },
    {
      id: 'c-pre-ex4',
      kind: 'mcq',
      topic: 'Stringification and token pasting preprocessor operators',
      question: {
        en: 'What operations do the preprocessor operators # and ## perform respectively?',
        bn: 'সি প্রিপ্রসেসর অপারেটর # এবং ## যথাক্রমে কী কাজ সম্পাদন করে?'
      },
      options: [
        {
          en: '# stringifies an argument into a quoted string literal ("text"), while ## pastes two adjacent tokens together to forge a single combined identifier',
          bn: '# একটি আর্গুমেন্টকে কোটেশনযুক্ত স্ট্রিংয়ে ("text") রূপান্তর করে, আর ## দুটি সংলগ্ন টোকেন জোড়া লাগিয়ে একটি নতুন নাম তৈরি করে'
        },
        {
          en: '# adds two numbers and ## multiplies four numbers',
          bn: '# দুটি সংখ্যা যোগ করে এবং ## চারটি সংখ্যা গুণ করে'
        },
        {
          en: '# creates a social media hashtag and ## sends a tweet',
          bn: '# সোশ্যাল মিডিয়া হ্যাশট্যাগ তৈরি করে আর ## টুইট পাঠায়'
        },
        {
          en: 'Both operators are only used to comment out unwanted code',
          bn: 'দুটি অপারেটরই অপ্রয়োজনীয় কোড কমেন্ট করার জন্য ব্যবহৃত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stringification (#) and token pasting (##).',
        bn: 'স্ট্রিং তৈরি করা (#) এবং টোকেন জোড়া লাগানো (##)।'
      },
      explanation: {
        en: '#x turns token x into string literal "x". a ## b concatenates tokens a and b into ab at preprocessing time.',
        bn: '#x টোকেন x-কে "x" স্ট্রিংয়ে পরিণত করে। a ## b দুটি টোকেন a ও b-কে প্রিপ্রসেসিংয়ের সময় যুক্ত করে ab তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'preprocessor-and-the-macro-quiz',
    title: {
      en: 'C Preprocessor & Metaprogramming Quiz',
      bn: 'সি প্রিপ্রসেসর ও মেটা-প্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'q-macro-side-effects-bug',
        kind: 'mcq',
        topic: 'Repeated evaluation side effects with macros',
        question: {
          en: 'Given #define MAX(a, b) ((a) > (b) ? (a) : (b)), what dangerous bug occurs when executing int m = MAX(x++, y++);?',
          bn: 'যদি #define MAX(a, b) ((a) > (b) ? (a) : (b)) থাকে, তবে int m = MAX(x++, y++); এক্সিকিউট করলে কোন মারাত্মক বাগ তৈরি হয়?'
        },
        options: [
          {
            en: 'The larger variable is evaluated and incremented twice instead of once, corrupting counter variables and producing unexpected side effects',
            bn: 'যে ভ্যারিয়েবলটি বড় সেটি একবারের বদলে দুইবার কার্যকর ও ইনক্রিমেন্ট হয়, যা কাউন্টার ভ্যারিয়েবল নষ্ট করে অনিচ্ছাকৃত ভুল আচরণ ঘটায়'
          },
          {
            en: 'The compiler shuts down and restarts the computer operating system',
            bn: 'কম্পাইলার বন্ধ হয়ে কম্পিউটার অপারেটিং সিস্টেম রিস্টার্ট দেয়'
          },
          {
            en: 'The variable m becomes permanently equal to 0',
            bn: 'ভ্যারিয়েবল m-এর মান চিরতরে ০ হয়ে যায়'
          },
          {
            en: 'No bug occurs because macros handle increments flawlessly',
            bn: 'কোনো বাগ হয় না কারণ ম্যাক্রো নিখুঁতভাবে ইনক্রিমেন্ট পরিচালনা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Macro parameters are substituted literally into the ternary expression twice.',
          bn: 'ম্যাক্রোর প্যারামিটার টার্নারি এক্সপ্রেশনে দুইবার বসে যায়।'
        },
        explanation: {
          en: 'Because MAX substitutes parameters textually, the winning parameter appears twice: once in the condition and once in the chosen branch, executing ++ twice.',
          bn: 'MAX সরাসরি টেক্সট বসায় বলে বড় প্যারামিটারটি দুইবার উপস্থিত হয়: শর্তে একবার এবং নির্বাচিত শাখায় একবার, ফলে ++ দুইবার সম্পন্ন হয়।'
        }
      },
      {
        id: 'q-conditional-compilation-role',
        kind: 'mcq',
        topic: 'Role of conditional compilation for cross-platform portability',
        question: {
          en: 'How does conditional compilation (#if, #ifdef, #elif, #endif) facilitate cross-platform C systems programming?',
          bn: 'শর্তাধীন কম্পাইলেশন (#if, #ifdef, #elif, #endif) কীভাবে ক্রস-প্ল্যাটফর্ম সি সিস্টেম প্রোগ্রামিংয়ে সহায়তা করে?'
        },
        options: [
          {
            en: 'It allows developers to selectively compile platform-specific code paths (such as Linux epoll vs Windows IOCP) from the same unified codebase based on preprocessor flags',
            bn: 'এটি ডেভেলপারদের প্রিপ্রসেসর ফ্ল্যাগের ভিত্তিতে একই কোডবেস থেকে প্ল্যাটফর্ম-নির্দিষ্ট কোড (যেমন লিনাক্স epoll বনাম উইন্ডোজ IOCP) বাছাই করে কম্পাইল করার সুযোগ দেয়'
          },
          {
            en: 'It forces Windows computers to install Linux automatically',
            bn: 'এটি উইন্ডোজ কম্পিউটারকে স্বয়ংক্রিয়ভাবে লিনাক্স ইনস্টল করতে বাধ্য করে'
          },
          {
            en: 'It slows down compilation speed to let the computer cool off',
            bn: 'কম্পিউটারকে ঠান্ডা রাখার জন্য এটি কম্পাইলেশনের গতি কমিয়ে দেয়'
          },
          {
            en: 'It deletes all files that do not have .c file extensions',
            bn: 'এটি .c এক্সটেনশনহীন সমস্ত ফাইল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Targeting different operating systems from a single source file.',
          bn: 'একটিমাত্র সোর্স ফাইল থেকে বিভিন্ন অপারেটিং সিস্টেমকে লক্ষ্য করা।'
        },
        explanation: {
          en: 'Conditional compilation excludes inactive code from the compiler, enabling portable codebases to support diverse operating systems without runtime overhead.',
          bn: 'শর্তাধীন কম্পাইলেশন নিষ্ক্রিয় কোড বাদ দিয়ে দেয়, যার ফলে কোনো রানটাইম ক্ষতি ছাড়াই একটি সোর্স কোড বিভিন্ন অপারেটিং সিস্টেমে চালানো সম্ভব হয়।'
        }
      },
      {
        id: 'q-inline-vs-macro-verdict',
        kind: 'mcq',
        topic: 'Why inline functions are preferred over function-like macros in modern C',
        question: {
          en: 'Why do modern C standards (C99 and onward) encourage static inline functions over function-like macros for small routines?',
          bn: 'আধুনিক সি স্ট্যান্ডার্ডে (C99 পরবর্তী) ছোট লজিকের জন্য কেন ফাংশন সদৃশ ম্যাক্রোর চেয়ে static inline ফাংশন ব্যবহারে উৎসাহিত করা হয়?'
        },
        options: [
          {
            en: 'Inline functions provide full static type safety, evaluate arguments strictly once, respect variable scopes, and produce readable compiler error messages',
            bn: 'ইনলাইন ফাংশন শতভাগ স্ট্যাটিক টাইপ নিরাপত্তা দেয়, আর্গুমেন্টকে কেবল একবারই মূল্যায়ন করে, স্কোপ মেনে চলে এবং বোধগম্য এরর মেসেজ দেয়'
          },
          {
            en: 'Because macros were removed from the C language specification entirely',
            bn: 'কারণ সি স্পেসিফিকেশন থেকে ম্যাক্রো পুরোপুরি মুছে ফেলা হয়েছে'
          },
          {
            en: 'Inline functions make compiled executables 10 times larger',
            bn: 'ইনলাইন ফাংশন তৈরি করলে কম্পাইল করা সফটওয়্যারের সাইজ ১০ গুণ বড় হয়'
          },
          {
            en: 'Because inline functions only work on mobile phones',
            bn: 'কারণ ইনলাইন ফাংশন কেবলমাত্র মোবাইল ফোনেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Type safety, single evaluation, and debuggability.',
          bn: 'টাইপ নিরাপত্তা, আর্গুমেন্ট একবার মূল্যায়ন ও সহজ ডিবাগিং।'
        },
        explanation: {
          en: 'Static inline functions match macro speed by eliminating call overhead while providing strict type safety, scope rules, and single-evaluation guarantees.',
          bn: 'স্ট্যাটিক ইনলাইন ফাংশন কল ওভারহেড কমিয়ে ম্যাক্রোর সমান গতি দেয় এবং সাথে সাথে কঠোর টাইপ নিরাপত্তা ও একবার মূল্যায়নের নিশ্চয়তা প্রদান করে।'
        }
      },
      {
        id: 'q-gcc-e-inspection-flag',
        kind: 'mcq',
        topic: 'Inspecting preprocessor expansion with compiler flags',
        question: {
          en: 'Which compiler flag commands gcc or clang to stop after the preprocessing phase and print the expanded translation unit directly to stdout?',
          bn: 'কোন কম্পাইলার ফ্ল্যাগ gcc বা clang-কে প্রিপ্রসেসিং ধাপের পর থেমে যেতে এবং সম্প্রসারিত কোড সরাসরি টার্মিনালে প্রদর্শন করতে নির্দেশ দেয়?'
        },
        options: [
          {
            en: '-E (e.g. gcc -E main.c)',
            bn: '-E (যেমন gcc -E main.c)'
          },
          {
            en: '-O3 (optimization level 3)',
            bn: '-O3 (অপ্টিমাইজেশন লেভেল ৩)'
          },
          {
            en: '-Wall (show all warnings)',
            bn: '-Wall (সমস্ত ওয়ার্নিং প্রদর্শন)'
          },
          {
            en: '-g (generate debug symbols)',
            bn: '-g (ডিবাগ সিম্বল তৈরি)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stops after the preprocessor stage.',
          bn: 'প্রিপ্রসেসর ধাপের পরপরই থেমে যাওয়ার ফ্ল্যাগ।'
        },
        explanation: {
          en: 'gcc -E halts compilation immediately after the preprocessing stage, dumping the fully expanded source code to stdout for debugging macro expansions.',
          bn: 'gcc -E প্রিপ্রসেসিংয়ের পর সাথে সাথে কম্পাইলেশন বন্ধ করে পুরো সম্প্রসারিত সোর্স কোড টার্মিনালে দেখায়, যা ম্যাক্রো ডিবাগ করতে সাহায্য করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-binary-forge',
    title: {
      en: 'The Binary Forge: Toolchains, Object Files & Linking — Real-World Capstone',
      bn: 'দ্য বাইনারি ফোর্জ: টুলচেন, অবজেক্ট ফাইল ও লিংকিং — বাস্তবমুখী ক্যাপস্টোন'
    }
  }
};
