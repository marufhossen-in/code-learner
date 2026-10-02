import type { Lesson } from '../../../lib/types';

export const TheBindingAndItsEtiquetteLesson: Lesson = {
  slug: 'the-binding-and-its-etiquette',
  tech: 'sass',
  title: {
    en: 'Sass Variables, Data Types & Scope — Variables, Shadowing, !default Flag, and Math Operations',
    bn: 'Sass ভেরিয়েবল, ডেটা টাইপ ও স্কোপ: ভেরিয়েবল, শ্যাডোয়িং, !default ফ্ল্যাগ এবং গাণিতিক অপারেশন'
  },
  summary: {
    en: 'Variables in Sass store reusable values like colors, font stacks, and spacing units. When you assign a variable in Sass, the value is copied by value rather than by reference. Sass supports eight core data types, including numbers with units, strings, colors, lists, maps, booleans, and null. Block scoping determines where variables can be accessed, while the !default flag allows consumers to override library defaults cleanly without editing vendor code.',
    bn: 'Sass ভেরিয়েবল রং, ফন্ট এবং স্পেসিংয়ের মতো পুনর্ব্যবহারযোগ্য মান সংরক্ষণ করে। Sass-এ ভেরিয়েবলের মান রেফারেন্সের বদলে কপি-বাই-ভ্যালু পদ্ধতিতে নির্ধারিত হয়। Sass আটটি মৌলিক ডেটা টাইপ সমর্থন করে, যার মধ্যে রয়েছে এককযুক্ত সংখ্যা, স্ট্রিং, রং, লিস্ট, ম্যাপ, বুলিয়ান এবং নাল। ব্লক স্কোপিং ভেরিয়েবলের আওতা নির্ধারণ করে এবং !default ফ্ল্যাগ লাইব্রেরি কোড না বদলেই ব্যবহারকারীকে ডিফল্ট মান পরিবর্তন করার সুবিধা দেয়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Declaring and using variables in Sass',
        bn: 'Sass-এ ভেরিয়েবল ঘোষণা ও ব্যবহার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Sass, all variable names begin with a dollar sign like $primary-color or $font-size. When you set $b: $a, Sass copies the current evaluated value of $a into $b. Subsequent changes to $a will not affect $b. Sass treats hyphens and underscores identically in variable names, so `$theme-color` and `$theme_color` refer to the same variable. Variables resolve into static CSS literals at compile time.',
        bn: 'Sass-এ প্রতিটি ভেরিয়েবলের নাম ডলার চিহ্ন দিয়ে শুরু হয়, যেমন $primary-color বা $font-size। আপনি যখন $b: $a লেখেন, Sass $a-এর তৎকালীন মান $b-তে কপি করে দেয়। পরবর্তীতে $a বদলালেও $b অপরিবর্তিত থাকে। Sass ভেরিয়েবলের নামে হাইফেন ও আন্ডারস্কোরকে সমান গণ্য করে, তাই $theme-color এবং $theme_color একই ভেরিয়েবল বোঝায়। কম্পাইল করার সময় ভেরিয়েবলগুলো স্ট্যাটিক CSS মানে রূপ নেয়।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'copy-by-value',
          def: {
            en: 'variable assignments copy the computed value at declaration time; no live reference or pointer is maintained',
            bn: 'ভেরিয়েবল নির্ধারণের সময় তাৎক্ষণিক মান কপি হয়; কোনো লাইভ রেফারেন্স বা পয়েন্টার থাকে না'
          }
        },
        {
          term: 'variable shadowing',
          def: {
            en: 'declaring a local variable with the same name as an outer variable inside a block, hiding the outer value without mutating it',
            bn: 'ব্লকের ভেতরে বাইরের ভেরিয়েবলের সমান নামে লোকাল ভেরিয়েবল তৈরি করা, যা বাইরের মান পরিবর্তন না করেই ভেতরে কার্যকর থাকে'
          }
        },
        {
          term: '!default flag',
          def: {
            en: 'a modifier that assigns a value only if the variable is currently unassigned or holds null',
            bn: 'এমন একটি নির্দেশ যা কেবল ভেরিয়েবলটি আগে নির্ধারিত না থাকলে বা null হলে নতুন মান বসায়'
          }
        },
        {
          term: 'sass:math module',
          def: {
            en: 'the modern Sass module providing safe mathematical functions like math.div, replacing ambiguous slash division',
            bn: 'Sass-এর আধুনিক মডিউল যা math.div-এর মতো নির্ভরযোগ্য গাণিতিক ফাংশন দিয়ে স্লাশ বিভাজন প্রতিস্থাপন করেছে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why variable scope and !default matter in design systems',
        bn: 'ডিজাইন সিস্টেমে ভেরিয়েবল স্কোপ ও !default কেন গুরুত্বপূর্ণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Component libraries like Bootstrap depend heavily on variable customization. If a library hardcoded its colors, users would have to edit vendor files or write duplicate CSS overrides. By tagging declarations with !default, a library lets you define your custom values first. When the library loads, it sees your defined values and yields without overwriting them. Block scoping ensures that temporary calculations inside a selector never pollute your global palette.',
        bn: 'বুটস্ট্র্যাপের মতো কম্পোনেন্ট লাইব্রেরি ভেরিয়েবল কাস্টমাইজেশনের ওপর গভীরভাবে নির্ভরশীল। লাইব্রেরিতে মান ফিক্সড করা থাকলে ব্যবহারকারীকে মূল ফাইল এডিট করতে হতো। ডিক্লারেশনে !default ব্যবহার করায় ব্যবহারকারী শুরুতেই নিজস্ব মান নির্ধারণ করতে পারে। লাইব্রেরি লোড হওয়ার সময় দেখে মান আগে থেকেই সেট করা আছে, ফলে ডিফল্ট মান আর বসে না। ব্লক স্কোপিং নিশ্চিত করে যে নির্দিষ্ট সিলেক্টরের ভেতরের হিসাব গ্লোবাল ভেরিয়েবলে কোনো প্রভাব ফেলে না।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to use variables, scopes, and mathematical operations',
        bn: 'কীভাবে ভেরিয়েবল, স্কোপ এবং গাণিতিক অপারেশন ব্যবহার করবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'You declare variables at the top of a stylesheet for global availability, or inside a selector block for local encapsulation. To perform arithmetic, use standard plus, minus, and multiplication operators with matched units. For division, import the sass:math module and call math.div. Sass automatically preserves and converts compatible units like pixels and rems during calculation.',
        bn: 'সার্বজনীন ব্যবহারের জন্য স্টাইলশিটের শুরুতে গ্লোবাল ভেরিয়েবল ঘোষণা করুন, অথবা নির্দিষ্ট ব্লকে ব্যবহারের জন্য লোকাল ভেরিয়েবল রাখুন। যোগ, বিয়োগ ও গুণের ক্ষেত্রে একই এককের সাধারণ অপারেটর ব্যবহার করুন। ভাগের জন্য sass:math মডিউল লোড করে math.div কল করুন। Sass হিসাবের সময় পিক্সেল ও রেমের মতো সামঞ্জস্যপূর্ণ একক স্বয়ংক্রিয়ভাবে রূপান্তর ও সংরক্ষণ করে।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'variables-scope.scss',
      caption: {
        en: 'Demonstrating global variables, local shadowing, !default flag, and math.div.',
        bn: 'গ্লোবাল ভেরিয়েবল, লোকাল শ্যাডোয়িং, !default ফ্ল্যাগ এবং math.div-এর বাস্তব ব্যবহার।'
      },
      code: `@use "sass:math";

// 1. User overrides default theme before library loads
$theme-primary: #10b981;

// 2. Library defaults: yields because $theme-primary is already set
$theme-primary: #3b82f6 !default;
$base-spacing: 16px !default;

// 3. Global variable usage
body {
  background-color: #f9fafb;
  color: $theme-primary; // emits #10b981
}

// 4. Local scope shadowing & math module
.card {
  $base-spacing: 24px; // shadows global variable inside .card
  padding: $base-spacing; // emits 24px
  margin-bottom: math.div($base-spacing, 2); // emits 12px

  .card-footer {
    padding: math.div($base-spacing, 3); // emits 8px
  }
}

// 5. Outside .card, $base-spacing remains original 16px
.sidebar {
  padding: $base-spacing; // emits 16px
}`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Internal mechanism: environment frames and evaluation order',
        bn: 'অভ্যন্তরীণ কার্যপ্রণালী: এনভায়রনমেন্ট ফ্রেম এবং মান নির্ণয়ের ক্রম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dart Sass manages variables using a stack of lexical environment frames. The root frame holds all global variables. When the compiler enters a selector block, mixin, or directive, it pushes a new local frame onto the stack. Variable lookups check the innermost frame first, moving outward toward the root. Local assignments write into the current frame unless modified with the !global flag. When execution leaves a block, its local frame is popped and discarded.',
        bn: 'Dart Sass লেক্সিক্যাল এনভায়রনমেন্ট ফ্রেমের স্ট্যাকের মাধ্যমে ভেরিয়েবল পরিচালনা করে। রুট ফ্রেমে সব গ্লোবাল ভেরিয়েবল থাকে। কম্পাইলার যখন কোনো সিলেক্টর বা মিক্সিন ব্লকে ঢোকে, তখন স্ট্যাকে নতুন একটি লোকাল ফ্রেম যুক্ত হয়। ভেরিয়েবল খোঁজার সময় প্রথমে ভেতরের ফ্রেম দেখা হয় এবং ক্রমান্বয়ে বাইরে যাওয়া হয়। কোনো লোকাল অ্যাসাইনমেন্ট ঘটলে তা বর্তমান ফ্রেমেই সীমাবদ্ধ থাকে, যদি না !global ব্যবহৃত হয়। ব্লক শেষ হলে লোকাল ফ্রেম স্ট্যাক থেকে বাদ পড়ে যায়।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices for variables and arithmetic',
        bn: 'ভেরিয়েবল এবং গাণিতিক হিসাবের সেরা চর্চা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Use the !default flag on all configurable variables inside design token files and reusable component libraries.',
          bn: 'ডিজাইন টোকেন ফাইল ও পুনর্ব্যবহারযোগ্য লাইব্রেরির সব কনফিগারেবল ভেরিয়েবলে !default ফ্ল্যাগ ব্যবহার করুন।'
        },
        {
          en: 'Avoid using the !global flag inside nested selectors because mutating global state from deep blocks creates unpredictable side effects.',
          bn: 'নেস্টেড সিলেক্টরের ভেতর !global পরিহার করুন, কারণ গভীর ব্লক থেকে গ্লোবাল মান বদলালে অপ্রত্যাশিত সমস্যা তৈরি হয়।'
        },
        {
          en: 'Always use math.div for division: raw slash division ($a / $b) is deprecated because CSS uses slashes for font and grid syntax.',
          bn: 'ভাগের জন্য সর্বদা math.div ব্যবহার করুন: সরাসরি স্লাশ ভাগ বাতিল করা হয়েছে কারণ CSS সিনট্যাক্সে স্লাশ বিভাজক হিসেবে ব্যবহৃত হয়।'
        },
        {
          en: 'Leverage the null data type to omit optional CSS properties cleanly without emitting empty declarations.',
          bn: 'ঐচ্ছিক CSS প্রপার্টি বাদ দিতে null ডেটা টাইপ ব্যবহার করুন, এতে কোনো খালি ডিক্লারেশন তৈরি হয় না।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: common variable and unit pitfalls',
        bn: 'সমস্যা সমাধান: ভেরিয়েবল ও এককের সাধারণ ত্রুটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common mistake is attempting to multiply two values that both carry units, such as 10px * 10px. The compiler treats this as 100px*px, producing a squared unit error. Instead, multiply a unit value by a unitless number (10px * 10). Another frequent issue occurs when variable reassignment is placed after a selector. Because Sass compiles top to bottom, rules emitted before reassignment will retain the older value.',
        bn: 'একটি প্রচলিত ভুল হলো দুটি এককযুক্ত মানকে পরস্পরের সাথে গুণ করা, যেমন ১০px * ১০px। কম্পাইলার এটিকে বর্গ একক হিসেবে গণ্য করে এরর দেয়। এর পরিবর্তে এককযুক্ত মানের সাথে এককহীন সংখ্যা গুণ করুন (১০px * ১০)। আরেকটি ভুল হয় সিলেক্টরের নিচে ভেরিয়েবল পরিবর্তন করা। যেহেতু Sass ওপর থেকে নিচে লাইন বাই লাইন কম্পাইল করে, তাই পরিবর্তনের আগের সিলেক্টর পুরোনো মানই ধরে রাখবে।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architecture: Bootstrap and token theming',
        bn: 'বাস্তব স্থাপত্য: বুটস্ট্র্যাপ এবং টোকেন থিমিং'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bootstrap defines over 500 theme variables in _variables.scss, each ending with !default so downstream projects can customize branding in one import.',
          bn: 'বুটস্ট্র্যাপ _variables.scss ফাইলে ৫০০টিরও বেশি থিম ভেরিয়েবল সংজ্ঞায়িত করে, যার প্রতিটিতে !default থাকে যাতে ব্যবহারকারী সহজেই ব্র্যান্ডিং পরিবর্তন করতে পারে।'
        },
        {
          en: 'Tailwind and modern design tokens convert structured spacing and color scales into Sass maps and variables for legacy codebase integration.',
          bn: 'টেইলউইন্ড ও আধুনিক ডিজাইন টোকেন সুসংগঠিত স্পেসিং ও কালার স্কেলকে Sass ভেরিয়েবলে রূপান্তর করে প্রজেক্টের সাথে যুক্ত করে।'
        },
        {
          en: 'Design systems use modular type checkers to validate that user-provided variables match expected color formats and unit dimensions before building.',
          bn: 'ডিজাইন সিস্টেমে টাইপ চেকার ব্যবহার করে যাচাই করা হয় ব্যবহারকারীর ইনপুট সঠিক রঙের ফরম্যাট ও পরিমাপ এককের সাথে মেলে কি না।'
        },
        {
          en: 'Enterprise platforms bridge compile-time Sass variables to runtime CSS custom properties, providing instant client-side theme switching.',
          bn: 'বড় প্রতিষ্ঠানগুলো বিল্ড-টাইম Sass ভেরিয়েবলকে ব্রাউজারের CSS কাস্টম প্রপার্টির সাথে সংযুক্ত করে তাৎক্ষণিক থিম পরিবর্তনের ব্যবস্থা করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: nesting, parent selectors, and BEM',
        bn: 'পরবর্তী ধাপ: নেস্টিং, প্যারেন্ট সিলেক্টর এবং BEM'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you can manage variables, scope, and mathematical expressions with confidence, you are ready for selector architecture. In Lesson 3, we dive into Sass nesting, the parent selector ampersand (&), BEM naming patterns, and nested CSS property groups.',
        bn: 'এখন আপনি ভেরিয়েবল, স্কোপ এবং গাণিতিক রাশি নিয়ন্ত্রণে পারদর্শী। পরবর্তী ৩য় পাঠে আমরা Sass নেস্টিং, প্যারেন্ট সিলেক্টর অ্যামপারস্যান্ড (&), BEM আর্কিটেকচার এবং নেস্টেড প্রপার্টি গ্রুপ বিশদভাবে শিখব।',
      }
    }
  ],
  exercises: [
    {
      id: 'vb-ex-1',
      kind: 'mcq',
      topic: 'copy by value semantics',
      question: {
        en: 'Given: $a: 10px; $b: $a; $a: 20px; .box { width: $b; } — what width is compiled in the CSS?',
        bn: 'যদি $a: 10px; $b: $a; $a: 20px; .box { width: $b; } দেওয়া থাকে, তবে CSS-এ width কত হবে?'
      },
      options: [
        {
          en: 'width: 10px, because Sass variables are copied by value at the moment of assignment.',
          bn: 'width: 10px, কারণ নির্ধারণের সময় Sass ভেরিয়েবল কপি-বাই-ভ্যালু পদ্ধতিতে মান গ্রহণ করে।'
        },
        {
          en: 'width: 20px, because $b holds a live reference to $a.',
          bn: 'width: 20px, কারণ $b সরাসরি $a-এর লাইভ রেফারেন্স ধরে রাখে।'
        },
        {
          en: 'width: 30px, because both values are summed together.',
          bn: 'width: 30px, কারণ দুটি মান একসাথে যোগ হয়ে যায়।'
        },
        {
          en: 'A compilation error occurs due to conflicting reassignments.',
          bn: 'পুনরায় মান নির্ধারণের কারণে কম্পাইলেশন এরর দেখা দেয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sass does not maintain live pointers between variables.',
        bn: 'Sass ভেরিয়েবলগুলোর মধ্যে কোনো জীবন্ত পয়েন্টার রাখে না।'
      },
      explanation: {
        en: 'When $b: $a is evaluated, $b receives a copy of 10px. Reassigning $a to 20px later has zero effect on $b. The CSS rule compiles to width: 10px.',
        bn: 'যখন $b: $a কার্যকর হয়, $b ১০px মান কপি করে নেয়। পরবর্তীতে $a-এর মান ২০px করা হলেও $b অপরিবর্তিত থাকে। ফলে CSS-এ width: 10px বসে।'
      }
    },
    {
      id: 'vb-ex-2',
      kind: 'mcq',
      topic: 'default flag behavior',
      question: {
        en: 'How does the !default flag modify variable assignment in Sass?',
        bn: 'Sass-এ !default ফ্ল্যাগ ভেরিয়েবল নির্ধারণে কীভাবে পরিবর্তন আনে?'
      },
      options: [
        {
          en: 'It assigns the value only if the variable has not been defined yet or currently holds null.',
          bn: 'এটি কেবল তখনই মান নির্ধারণ করে যদি ভেরিয়েবলটি আগে নির্ধারণ করা না থাকে বা null থাকে।'
        },
        {
          en: 'It forces the variable to be read-only and immutable across all files.',
          bn: 'এটি ভেরিয়েবলকে সব ফাইলে রিড-অনলি এবং পরিবর্তনহীন হিসেবে লক করে দেয়।'
        },
        {
          en: 'It automatically exports the variable to client-side JavaScript.',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ভেরিয়েবলটিকে ব্রাউজারের জাভাস্ক্রিপ্টে এক্সপোর্ট করে।'
        },
        {
          en: 'It generates fallback styles for older Internet Explorer browsers.',
          bn: 'এটি পুরোনো ইন্টারনেট এক্সপ্লোরার ব্রাউজারের জন্য ফলব্যাক স্টাইল তৈরি করে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of !default as providing a fallback value that steps aside if an answer already exists.',
        bn: '!default-কে এমন একটি ফলব্যাক ভাবুন যা মান আগে থেকে থাকলে পথ ছেড়ে দেয়।'
      },
      explanation: {
        en: 'The !default flag instructs the compiler to skip assignment if the variable already contains a value. This allows consumers to set custom theme variables before importing a library.',
        bn: '!default ফ্ল্যাগ কম্পাইলারকে জানায় ভেরিয়েবলে আগে থেকে মান থাকলে এই লাইনটি বাদ দিতে। এর ফলে লাইব্রেরি ইমপোর্টের আগেই ব্যবহারকারী নিজস্ব মান নির্ধারণ করতে পারে।'
      }
    },
    {
      id: 'vb-ex-3',
      kind: 'mcq',
      topic: 'math module division',
      question: {
        en: 'Why is math.div($x, $y) preferred over the slash operator ($x / $y) in modern Sass?',
        bn: 'আধুনিক Sass-এ স্লাশ অপারেটরের ($x / $y) বদলে math.div($x, $y) কেন সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'CSS uses slashes as property value separators (e.g., font: 16px/1.5), causing ambiguous syntax in the parser.',
          bn: 'CSS বিভিন্ন প্রপার্টিতে স্লাশ বিভাজক হিসেবে ব্যবহার করে (যেমন font: 16px/1.5), যা পার্সারে বিভ্রান্তি তৈরি করে।'
        },
        {
          en: 'Dart Sass does not support mathematical division without a third-party plugin.',
          bn: 'থার্ড-পার্টি প্লাগইন ছাড়া Dart Sass গাণিতিক ভাগ সমর্থন করে না।'
        },
        {
          en: 'Slash division is ten times slower to compile than function calls.',
          bn: 'স্লাশ বিভাজন ফাংশন কলের চেয়ে ১০ গুণ ধীরগতিতে কম্পাইল হয়।'
        },
        {
          en: 'Slashes can only divide floating point numbers, not integers.',
          bn: 'স্লাশ দিয়ে কেবল দশমিক সংখ্যা ভাগ করা যায়, পূর্ণসংখ্যা নয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'CSS font shorthand and grid shorthand both use slashes without meaning division.',
        bn: 'CSS ফন্ট এবং গ্রিড সিনট্যাক্সে ভাগের অর্থ ছাড়াই স্লাশ ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Because CSS uses slash separators for properties like font: 12px/1.5 and grid-column: 1 / 3, Sass deprecated slash division. The explicit math.div function eliminates ambiguity.',
        bn: 'যেহেতু CSS font: 12px/1.5 বা grid-column: 1 / 3 এর মতো জায়গায় স্লাশ ব্যবহার করে, তাই Sass স্লাশ ভাগ বাতিল করেছে। স্পষ্ট math.div ফাংশন এই বিভ্রান্তি দূর করে।'
      }
    },
    {
      id: 'vb-ex-4',
      kind: 'predict',
      topic: 'predicting scoped output',
      question: {
        en: 'Predict the compiled padding value for .btn: $pad: 8px; .btn { $pad: 16px; padding: $pad; }',
        bn: '$pad: 8px; .btn { $pad: 16px; padding: $pad; } — .btn-এর কম্পাইল করা padding মান কত হবে?'
      },
      answer: 'padding: 16px;',
      accept: [
        'padding: 16px',
        'padding: 16px;',
        '16px'
      ],
      hint: {
        en: 'The local variable inside the block shadows the outer global variable.',
        bn: 'ব্লকের ভেতরের লোকাল ভেরিয়েবলটি বাইরের গ্লোবাল ভেরিয়েবলকে শ্যাডো করে।'
      },
      explanation: {
        en: 'Inside .btn, the local declaration $pad: 16px shadows the global $pad: 8px. The compiled rule emits padding: 16px.',
        bn: '.btn-এর ভেতরে লোকাল ডিক্লারেশন $pad: 16px গ্লোবাল মানকে আড়াল করে দেয়। ফলে কম্পাইল করা CSS-এ padding: 16px তৈরি হয়।'
      }
    }
  ],
  quiz: {
    id: 'scope-quiz',
    title: {
      en: 'Variables and Scope Quiz',
      bn: 'ভেরিয়েবল এবং স্কোপ কুইজ'
    },
    questions: [
      {
        id: 'vq1',
        kind: 'mcq',
        topic: 'variable shadowing scope',
        question: {
          en: 'What happens when a variable declared inside a CSS rule block shares the same name as a global variable?',
          bn: 'কোনো CSS রুল ব্লকে ঘোষিত ভেরিয়েবলের নাম যদি গ্লোবাল ভেরিয়েবলের সমান হয়, তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The local variable shadows the global variable inside that block without changing the global variable value.',
            bn: 'লোকাল ভেরিয়েবলটি গ্লোবাল মান না বদলে কেবল সেই ব্লকের ভেতরে কার্যকর থাকে (শ্যাডোয়িং)।'
          },
          {
            en: 'The compiler permanently overwrites the global variable across all files.',
            bn: 'কম্পাইলার স্থায়ীভাবে পুরো প্রজেক্টে গ্লোবাল ভেরিয়েবলের মান বদলে দেয়।'
          },
          {
            en: 'Dart Sass throws a duplicate identifier error and halts.',
            bn: 'Dart Sass ডুপ্লিকেট আইডেন্টিফায়ার এরর দেখিয়ে বন্ধ হয়ে যায়।'
          },
          {
            en: 'Both variables combine into a comma-separated list.',
            bn: 'উভয় ভেরিয়েবল একত্রিত হয়ে কমাযুক্ত লিস্টে পরিণত হয়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Local block scope takes precedence inside the curly braces only.',
          bn: 'লোকাল ব্লক স্কোপের ক্ষমতা কেবল সংশ্লিষ্ট কার্লি ব্র্যাকেটের ভেতরেই থাকে।'
        },
        explanation: {
          en: 'This is variable shadowing. The local variable exists only within its declaring block. Once the compiler exits that block, the global variable remains untouched.',
          bn: 'এটিকে ভেরিয়েবল শ্যাডোয়িং বলা হয়। লোকাল ভেরিয়েবলটি কেবল তার নিজস্ব ব্লকে থাকে। ব্লক থেকে বের হওয়ার পর গ্লোবাল ভেরিয়েবলের আগের মানই বজায় থাকে।'
        }
      },
      {
        id: 'vq2',
        kind: 'mcq',
        topic: 'null data type',
        question: {
          en: 'How does Dart Sass treat a property whose value resolves to null?',
          bn: 'কোনো প্রপার্টির মান null হলে Dart Sass সেটিকে কীভাবে প্রসেস করে?'
        },
        options: [
          {
            en: 'It completely omits the property from the compiled CSS output.',
            bn: 'এটি কম্পাইল করা CSS আউটপুট থেকে প্রপার্টিটি পুরোপুরি বাদ দিয়ে দেয়।'
          },
          {
            en: 'It prints the literal word "null" as the CSS property value.',
            bn: 'এটি CSS প্রপার্টির মান হিসেবে সরাসরি "null" শব্দটি লিখে দেয়।'
          },
          {
            en: 'It replaces null with zero pixels (0px) automatically.',
            bn: 'এটি স্বয়ংক্রিয়ভাবে null-কে শূন্য পিক্সেল (0px) দিয়ে প্রতিস্থাপন করে।'
          },
          {
            en: 'It throws an undefined value runtime exception.',
            bn: 'এটি আনডিফাইন্ড ভ্যালু এক্সেপশন দেখিয়ে বন্ধ হয়ে যায়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Null is used to make style declarations optional without emitting unwanted CSS lines.',
          bn: 'অপ্রয়োজনীয় CSS লাইন এড়িয়ে স্টাইলকে ঐচ্ছিক করতে null ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'In Sass, null represents the absence of a value. If a property evaluates to null, Sass skips emitting that property entirely, keeping the generated CSS clean.',
          bn: 'Sass-এ null মানে মানের অনুপস্থিতি। কোনো প্রপার্টির মান null হলে Sass সেই প্রপার্টিটি আউটপুটে বাদ দেয়, ফলে CSS পরিচ্ছন্ন থাকে।'
        }
      },
      {
        id: 'vq3',
        kind: 'mcq',
        topic: 'hyphen and underscore equality',
        question: {
          en: 'In Sass, what is the relationship between $font_size and $font-size?',
          bn: 'Sass-এ $font_size এবং $font-size-এর মধ্যে সম্পর্ক কী?'
        },
        options: [
          {
            en: 'They refer to the exact same variable; Sass treats hyphens and underscores interchangeably.',
            bn: 'তারা হুবহু একই ভেরিয়েবল বোঝায়; Sass হাইফেন ও আন্ডারস্কোরকে সমান গণ্য করে।'
          },
          {
            en: 'They are two independent variables stored in separate memory addresses.',
            bn: 'তারা দুটি সম্পূর্ণ স্বাধীন ভেরিয়েবল যা আলাদা জায়গায় সংরক্ষিত থাকে।'
          },
          {
            en: '$font_size is a private variable while $font-size is public.',
            bn: '$font_size একটি প্রাইভেট ভেরিয়েবল এবং $font-size পাবলিক ভেরিয়েবল।'
          },
          {
            en: 'Underscores are forbidden in Sass variable names and cause syntax errors.',
            bn: 'Sass ভেরিয়েবলের নামে আন্ডারস্কোর ব্যবহার নিষিদ্ধ এবং সিনট্যাক্স এরর ঘটায়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Historical Sass allowed both naming conventions to refer to the same identifier.',
          bn: 'ঐতিহাসিক কারণে Sass উভয় স্টাইলকেই একই নির্দেশক হিসেবে চেনে।'
        },
        explanation: {
          en: 'For historical compatibility dating back to early versions, Sass considers hyphens and underscores identical in all identifier names, including variables and mixins.',
          bn: 'পূর্ববর্তী সংস্করণের সাথে সামঞ্জস্য বজায় রাখতে Sass ভেরিয়েবল ও মিক্সিনের নামে হাইফেন ও আন্ডারস্কোরকে অভিন্ন মনে করে।'
        }
      },
      {
        id: 'vq4',
        kind: 'mcq',
        topic: 'unit arithmetic operations',
        question: {
          en: 'What happens when you add two compatible units in Sass, such as 1in + 72pt or 1000ms + 1s?',
          bn: 'Sass-এ দুটি সামঞ্জস্যপূর্ণ একক যোগ করলে কী ঘটে, যেমন 1in + 72pt অথবা 1000ms + 1s?'
        },
        options: [
          {
            en: 'Sass converts the units to match the first unit and calculates the mathematically correct sum.',
            bn: 'Sass দ্বিতীয় একককে প্রথম এককে রূপান্তর করে সঠিক গাণিতিক যোগফল বের করে।'
          },
          {
            en: 'Sass strips the units and returns a unitless number.',
            bn: 'Sass একক বাদ দিয়ে কেবল এককহীন সংখ্যা ফেরত দেয়।'
          },
          {
            en: 'Sass treats the units as strings and concatenates them together.',
            bn: 'Sass এককগুলোকে টেক্সট হিসেবে গণ্য করে পাশাপাশি জোড়া লাগায়।'
          },
          {
            en: 'Dart Sass halts with an incompatible units error.',
            bn: 'Dart Sass অসামঞ্জস্যপূর্ণ একক বিবেচনা করে কম্পাইলেশন থামিয়ে দেয়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Physical units and time units with known ratios can be converted automatically by the compiler.',
          bn: 'পরিচিত অনুপাতসম্পন্ন এককগুলো কম্পাইলার স্বয়ংক্রিয়ভাবে রূপান্তর করতে পারে।'
        },
        explanation: {
          en: 'Sass understands unit conversion for absolute units like inches and points, or seconds and milliseconds. It converts the second operand into the first operand’s unit and produces a valid computed result.',
          bn: 'Sass ইঞ্চি ও পয়েন্ট অথবা সেকেন্ড ও মিলিসেকেন্ডের মতো এককের রূপান্তর বোঝে। এটি দ্বিতীয় মানকে প্রথম এককে পরিবর্তন করে সঠিক যোগফল তৈরি করে।'
        }
      },
      {
        id: 'vq5',
        kind: 'predict',
        topic: 'overriding default variables',
        question: {
          en: 'To override a library variable $color: blue !default; in your own stylesheet, do you declare $color before or after importing the library?',
          bn: 'লাইব্রেরির $color: blue !default; ওভাররাইড করতে নিজের ফাইলে লাইব্রেরি ইমপোর্টের আগে নাকি পরে $color ঘোষণা করতে হয়?'
        },
        answer: 'before',
        accept: [
          'before',
          'Before'
        ],
        hint: {
          en: 'The !default flag checks if the variable already holds a value when it is evaluated.',
          bn: '!default ফ্ল্যাগ পরীক্ষা করে লাইব্রেরি চলার সময় আগে থেকেই কোনো মান আছে কি না।'
        },
        explanation: {
          en: 'You declare custom variables before importing the library. When the library’s !default assignment is evaluated, it sees the existing value and leaves it untouched.',
          bn: 'লাইব্রেরি ইমপোর্ট করার আগেই নিজস্ব ভেরিয়েবল ঘোষণা করতে হয়। ফলে লাইব্রেরির !default লাইনটি চলার সময় আগের মানটি দেখতে পেয়ে তা বহাল রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-ampersands-algebra',
    title: {
      en: 'The Ampersand’s Algebra: Nesting, Parent Selectors, and BEM',
      bn: 'নেস্টিং, প্যারেন্ট সিলেক্টর ও BEM আর্কিটেকচার'
    }
  }
};
