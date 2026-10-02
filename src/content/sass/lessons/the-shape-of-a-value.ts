import type { Lesson } from '../../../lib/types';

export const TheShapeOfAValueLesson: Lesson = {
  slug: 'the-shape-of-a-value',
  tech: 'sass',
  title: {
    en: 'Sass Functions, Control Flow & Error Directives — @function, Conditionals, Loops, and @error Guards',
    bn: 'Sass ফাংশন, কন্ট্রোল ফ্লো ও এরর ডিরেক্টিভ: @function, কন্ডিশনাল, লুপ এবং @error গার্ড'
  },
  summary: {
    en: 'Sass functions and control directives enable programmatic CSS generation at build time. Custom functions defined with @function calculate and return computed values using @return, allowing mathematical transformations anywhere expressions are legal. Control directives like @if, @each, and @for automate the creation of grid systems and utility classes. Diagnostic directives including @error, @warn, and @debug guard against invalid arguments and stop compilation before bugs reach production.',
    bn: 'Sass ফাংশন এবং কন্ট্রোল ডিরেক্টিভ বিল্ড-টাইমে প্রোগ্রামেটিক পদ্ধতিতে CSS তৈরির সুবিধা দেয়। @function দিয়ে তৈরি কাস্টম ফাংশন @return-এর মাধ্যমে মান হিসাব করে ফেরত দেয়, যা যেকোনো প্রপার্টির মান হিসেবে ব্যবহার করা যায়। @if, @each এবং @for-এর মতো কন্ট্রোল ডিরেক্টিভ গ্রিড সিস্টেম ও ইউটিলিটি ক্লাস তৈরিতে কাজ করে। @error, @warn এবং @debug ভুল ইনপুট শনাক্ত করে প্রোডাকশনে বাগ যাওয়া রোধ করে।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Functions versus mixins and compile-time control flow',
        bn: 'ফাংশন বনাম মিক্সিন এবং বিল্ড-টাইম কন্ট্রোল ফ্লো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A function in Sass takes input values, computes an expression, and returns a single value via @return. Unlike a mixin, a function cannot output CSS property declarations directly; it must be called inside an expression, such as font-size: rem(16px). Sass control directives run entirely at compile time. Loops unroll into repeated static rules, while untaken @if branches vanish completely from the compiled CSS output.',
        bn: 'Sass-এ ফাংশন আর্গুমেন্ট গ্রহণ করে, গাণিতিক হিসাব চালায় এবং @return দিয়ে একটি একক মান ফেরত দেয়। মিক্সিনের মতো ফাংশন সরাসরি CSS ডিক্লারেশন তৈরি করতে পারে না; একে প্রপার্টির মানের ভেতর ডাকতে হয়, যেমন font-size: rem(16px)। Sass-এর কন্ট্রোল ডিরেক্টিভগুলো পুরোপুরি বিল্ড-টাইমে চলে। লুপগুলো প্রসারিত হয়ে সাধারণ নিয়মে রূপ নেয় এবং অপ্রয়োজনীয় @if শর্তগুলো আউটপুট CSS থেকে চিরতরে বাদ পড়ে যায়।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@function and @return',
          def: {
            en: 'directives for defining a reusable computation that returns a single value to an expression',
            bn: 'পুনর্ব্যবহারযোগ্য গাণিতিক হিসাব তৈরির নির্দেশ, যা এক্সপ্রেশনে একটি একক মান ফেরত দেয়'
          }
        },
        {
          term: '@if / @else if / @else',
          def: {
            en: 'conditional branching directives evaluated at compile time; untaken branches produce zero CSS output',
            bn: 'বিল্ড-টাইমে মূল্যায়িত শর্তযুক্ত শাখা নির্দেশ; অপ্রয়োজনীয় শাখা কোনো CSS তৈরি করে না'
          }
        },
        {
          term: '@for and @each loops',
          def: {
            en: 'loop directives for generating sequential rules or iterating through lists and maps of design tokens',
            bn: 'ক্রমিক নিয়ম তৈরি করতে বা ডিজাইন টোকেনের লিস্ট ও ম্যাপে পুনরাবৃত্তি চালানোর লুপ নির্দেশ'
          }
        },
        {
          term: '@error and @warn',
          def: {
            en: 'diagnostic directives: @error halts compilation with a custom message; @warn logs a message and continues',
            bn: 'ডায়াগনস্টিক নির্দেশ: @error বার্তা দেখিয়ে কম্পাইলেশন থামিয়ে দেয়; @warn সতর্কবার্তা দেখিয়ে কাজ চালিয়ে যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why functions and loops power modern design systems',
        bn: 'কেন ফাংশন এবং লুপ আধুনিক ডিজাইন সিস্টেমের মূল শক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Hand-coding twelve grid columns or fifty utility classes is error-prone and tedious. Functions and loops automate repetitive CSS generation from a single source of truth. If your design team updates the base font size or grid column count, you modify one variable, and your Sass loops re-mint the entire utility suite in milliseconds. Adding input guards with @error ensures that invalid configurations fail immediately during development.',
        bn: 'বারোটি গ্রিড কলাম বা পঞ্চাশটি ইউটিলিটি ক্লাস হাতে লেখা কষ্টসাধ্য ও ভুলের উৎস। ফাংশন এবং লুপ একক তথ্যভাণ্ডার থেকে স্বয়ংক্রিয়ভাবে CSS তৈরি করে। ডিজাইন টিম বেস ফন্ট সাইজ বা গ্রিড কলামের সংখ্যা পরিবর্তন করলে কেবল একটি ভেরিয়েবল বদলালেই পুরো ইউটিলিটি সেট মিলিগ্রাম সময়ে আপডেট হয়ে যায়। @error গার্ড যুক্ত করলে ভুল কনফিগারেশন থাকলে সাথে সাথে ডেভেলপমেন্টেই তা ধরা পড়ে।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to write custom functions, loops, and error guards',
        bn: 'কীভাবে কাস্টম ফাংশন, লুপ এবং এরর গার্ড লিখবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Declare a function using @function followed by parameter names and a body containing @return. Use @if statements to validate argument types and values before calculating. Use @for $i from 1 through 12 to generate numbered grid columns, or @each to iterate over a color map. Interpolate loop counters into selector names using the #{...} syntax.',
        bn: '@function-এর পর প্যারামিটারের নাম এবং @return যুক্ত বডি দিয়ে ফাংশন তৈরি করুন। হিসাব করার আগে আর্গুমেন্টের মান যাচাই করতে @if শর্ত ব্যবহার করুন। ১ থেকে ১২ পর্যন্ত সংখ্যাযুক্ত গ্রিড কলাম তৈরি করতে @for লুপ বা কালার ম্যাপের জন্য @each ব্যবহার করুন। সিলেক্টর নেমে লুপের মান বসাতে #{...} ইন্টারপোলেশন ব্যবহার করুন।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'functions-and-loops.scss',
      caption: {
        en: 'Custom rem function with @error guard alongside @for and @each generation.',
        bn: '@error গার্ডযুক্ত কাস্টম rem ফাংশন এবং @for ও @each দিয়ে ইউটিলিটি ক্লাস তৈরির উদাহরণ।'
      },
      code: `@use "sass:math";

// 1. Custom function with parameter validation
@function to-rem($pixels, $base: 16px) {
  @if not math.is-unitless($pixels) and math.unit($pixels) != "px" {
    @error "to-rem() requires a pixel value or unitless number, received: #{$pixels}";
  }
  @return math.div($pixels, $base) * 1rem;
}

// 2. Generating a 4-column grid using @for
@for $col from 1 through 4 {
  .col-#{$col} {
    width: math.percentage(math.div($col, 4));
  }
}

// 3. Generating utility classes from a map using @each
$theme-palette: (
  "primary": #2563eb,
  "success": #10b981,
  "danger": #ef4444
);

@each $name, $color in $theme-palette {
  .text-#{$name} {
    color: $color;
  }
  .bg-#{$name} {
    background-color: $color;
  }
}

// 4. Using the custom function inside a selector
.heading-large {
  font-size: to-rem(32px); // compiles to 2rem
}`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Internal compiler mechanics: expression evaluation and unrolling',
        bn: 'কম্পাইলারের অভ্যন্তরীণ কার্যপ্রণালী: এক্সপ্রেশন মূল্যায়ন ও আনরোলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the Dart Sass parser encounters a loop directive, it creates a temporary execution frame for each iteration. The loop body is evaluated sequentially, and each generated AST node is appended to the parent stylesheet tree. Functions execute purely within memory, resolving into literal nodes without modifying the selector tree. If an @error directive is evaluated, the compiler immediately aborts execution and prints the stack trace.',
        bn: 'Dart Sass পার্সার কোনো লুপ নির্দেশ পেলে প্রতিটি চক্রের জন্য একটি সাময়িক এক্সিকিউশন ফ্রেম তৈরি করে। লুপের ভেতরের অংশ ধাপে ধাপে মূল্যায়িত হয়ে মূল স্টাইলশিটে যুক্ত হয়। ফাংশনগুলো পুরোপুরি মেমরির ভেতর চলে এবং সিলেক্টরে কোনো পরিবর্তন না এনে শুধু মানের ফলাফল বসায়। কোনো @error নির্দেশ পেলে কম্পাইলার তাৎক্ষণিক বিল্ড থামিয়ে এরর ট্র্যাকিং প্রদর্শন করে।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices for functions and control directives',
        bn: 'ফাংশন এবং কন্ট্রোল নির্দেশাবলীর সেরা চর্চা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Keep functions pure: functions should calculate and return values without attempting side effects or emitting CSS rules.',
          bn: 'ফাংশনকে পিওর রাখুন: ফাংশনের কাজ কেবল মান গণনা করে ফেরত দেওয়া, কোনো CSS নিয়ম তৈরি করা নয়।'
        },
        {
          en: 'Use @error defensively inside public functions to prevent invalid user inputs from generating silent runtime rendering bugs.',
          bn: 'পাবলিক ফাংশনে @error ব্যবহার করে ভুল ইনপুট আটকে দিন যাতে রানটাইমে অদৃশ্য কোনো সমস্যা না ঘটে।'
        },
        {
          en: 'Prefer @for $i from 1 through N (inclusive) over "to N" (exclusive) when building numbered UI grids for natural column math.',
          bn: '1 থেকে N পর্যন্ত গ্রিড কলাম তৈরির ক্ষেত্রে "to N"-এর বদলে "through N" ব্যবহার করুন, যাতে শেষ সংখ্যাটিও অন্তর্ভুক্ত থাকে।'
        },
        {
          en: 'Use @warn for deprecated function parameters or legacy variables to guide developers toward modern syntax.',
          bn: 'বাতিলযোগ্য প্যারামিটার বা পুরোনো ভেরিয়েবলের ক্ষেত্রে ডেভেলপারদের সতর্ক করতে @warn ব্যবহার করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: distinguishing function position from mixin position',
        bn: 'সমস্যা সমাধান: ফাংশন এবং মিক্সিনের সঠিক অবস্থান নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent compiler error is: Functions may not include declarations, or calling a mixin inside a value like color: my-mixin(). If you want to return a color or dimension, use @function with @return. If you want to output properties like display and padding, use @mixin with @include. Another common pitfall is forgetting string interpolation (#{$i}) when placing loop variables into selector class names.',
        bn: 'একটি প্রচলিত কম্পাইলার এরর হলো: Functions may not include declarations, অথবা মানের ভেতর color: my-mixin() কল করা। কোনো রং বা মাপের হিসাব ফেরত পেতে চাইলে @function ও @return ব্যবহার করুন। আর display বা padding-এর মতো প্রপার্টি তৈরি করতে চাইলে @mixin ও @include ব্যবহার করুন। লুপ ভেরিয়েবলকে ক্লাসের নামে বসানোর সময় ইন্টারপোলেশন (#{$i}) দিতে ভুলবেন না।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: automated utility generators',
        bn: 'বাস্তব স্থাপত্য: স্বয়ংক্রিয় ইউটিলিটি জেনারেটর'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bootstrap 5 uses nested @each loops over map dictionaries to generate responsive margin, padding, and display utility classes.',
          bn: 'বুটস্ট্র্যাপ ৫ ম্যাপ ডিকশনারির ওপর নেস্টেড @each লুপ চালিয়ে মার্জিন, প্যাডিং ও ডিসপ্লের শত শত রেসপনসিভ ক্লাস তৈরি করে।'
        },
        {
          en: 'Design token frameworks validate hex color strings using custom functions, automatically calculating accessible contrast ratios before build completion.',
          bn: 'ডিজাইন টোকেন ফ্রেমওয়ার্ক কাস্টম ফাংশন দিয়ে রঙের কনট্রাস্ট অনুপাত যাচাই করে টেক্সটের পাঠযোগ্যতা নিশ্চিত করে।'
        },
        {
          en: 'Grid libraries generate flexible column flex-basis percentages using simple 3-line @for loops from 1 through 12.',
          bn: 'গ্রিড লাইব্রেরিগুলো ১ থেকে ১২ পর্যন্ত ৩ লাইনের সহজ @for লুপ দিয়ে সব কলামের ফ্লেক্স শতাংশ তৈরি করে নেয়।'
        },
        {
          en: 'Enterprise design systems use @warn during migration periods to notify engineers when a deprecated design token is referenced.',
          bn: 'বড় প্রতিষ্ঠানের ডিজাইন সিস্টেম মাইগ্রেশনের সময় অপ্রচলিত টোকেন ব্যবহৃত হলে ইঞ্জিনিয়ারদের সতর্ক করতে @warn ব্যবহার করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: modern module system with @use and @forward',
        bn: 'পরবর্তী ধাপ: @use ও @forward-সহ আধুনিক মডিউল সিস্টেম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you can write custom functions, loops, and validation guards, you are ready for scalable architecture. In Lesson 6, we examine the modern Sass module system, exploring why @import was deprecated, how @use creates explicit namespaces, and how @forward curates public library APIs.',
        bn: 'এখন আপনি কাস্টম ফাংশন, লুপ এবং ভ্যালিডেশন গার্ড তৈরিতে পারদর্শী। পরবর্তী ৬ষ্ঠ পাঠে আমরা আধুনিক Sass মডিউল সিস্টেম শিখব: কেন @import বাতিল করা হয়েছে, কীভাবে @use স্পষ্ট নেমস্পেস তৈরি করে এবং @forward দিয়ে পরিচ্ছন্ন পাবলিক এপিআই সাজানো যায়।',
      }
    }
  ],
  exercises: [
    {
      id: 'val-ex-1',
      kind: 'mcq',
      topic: 'function return value',
      question: {
        en: 'What is the primary difference between a Sass @function and a @mixin?',
        bn: 'Sass-এ @function এবং @mixin-এর মধ্যে প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'A function calculates and returns a value to an expression via @return, while a mixin emits CSS declarations via @include.',
          bn: 'ফাংশন @return দিয়ে হিসাব করা মান ফেরত দেয়, আর মিক্সিন @include দিয়ে সরাসরি CSS ডিক্লারেশন তৈরি করে।'
        },
        {
          en: 'Functions can only run inside Node.js, while mixins run in the browser.',
          bn: 'ফাংশন কেবল Node.js-এ চলে, আর মিক্সিন ব্রাউজারে রান করে।'
        },
        {
          en: 'Mixins cannot accept parameters, whereas functions can accept arguments.',
          bn: 'মিক্সিন কোনো প্যারামিটার নিতে পারে না, কিন্তু ফাংশন আর্গুমেন্ট গ্রহণ করতে পারে।'
        },
        {
          en: 'Functions were deprecated in Dart Sass in favor of native CSS calc().',
          bn: 'নেটিভ CSS calc()-এর কারণে Dart Sass থেকে ফাংশন বাদ দেওয়া হয়েছে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Functions return values (like colors or numbers); mixins output full CSS property rules.',
        bn: 'ফাংশন মান ফেরত দেয় (যেমন রং বা সংখ্যা); মিক্সিন সরাসরি CSS প্রপার্টি তৈরি করে।'
      },
      explanation: {
        en: 'A @function is used in expression position (e.g., width: double(50px)) and returns a value using @return. A @mixin is used in declaration position to emit rules.',
        bn: '@function প্রপার্টির মানের ভেতর ব্যবহৃত হয় এবং @return দিয়ে মান ফেরত দেয়। অপরদিকে @mixin সম্পূর্ণ CSS রুল আউটপুট হিসেবে তৈরি করে।'
      }
    },
    {
      id: 'val-ex-2',
      kind: 'mcq',
      topic: 'error directive behavior',
      question: {
        en: 'What happens when Dart Sass encounters an @error directive during stylesheet compilation?',
        bn: 'স্টাইলশিট কম্পাইলেশনের সময় Dart Sass একটি @error নির্দেশ পেলে কী ঘটে?'
      },
      options: [
        {
          en: 'It immediately halts the compilation process and prints the custom error message and stack trace.',
          bn: 'এটি তাৎক্ষণিকভাবে কম্পাইলেশন থামিয়ে দেয় এবং কাস্টম এরর বার্তা ও স্ট্যাক ট্রেস প্রদর্শন করে।'
        },
        {
          en: 'It prints a warning to the console but continues compiling the rest of the stylesheet.',
          bn: 'এটি কনসোলে একটি সতর্কবার্তা দেখিয়ে বাকি স্টাইলশিট কম্পাইল করতে থাকে।'
        },
        {
          en: 'It writes the error message as a CSS comment inside the output file.',
          bn: 'এটি আউটপুট ফাইলে CSS কমেন্ট হিসেবে এরর বার্তাটি লিখে দেয়।'
        },
        {
          en: 'It ignores the error and replaces the invalid value with null.',
          bn: 'এটি এরর উপেক্ষা করে ভুল মানের জায়গায় null বসিয়ে দেয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unlike @warn which continues, @error stops the build completely.',
        bn: '@warn কাজ চালিয়ে গেলেও @error পুরো বিল্ড বন্ধ করে দেয়।'
      },
      explanation: {
        en: '@error is a fatal directive. It stops the compiler immediately, preventing broken or malformed CSS from ever reaching production builds.',
        bn: '@error একটি চরম নির্দেশ। এটি তাৎক্ষণিক কম্পাইলার থামিয়ে দেয়, ফলে কোনো ত্রুটিপূর্ণ CSS প্রোডাকশনে পৌঁছাতে পারে না।'
      }
    },
    {
      id: 'val-ex-3',
      kind: 'mcq',
      topic: 'for loop through vs to',
      question: {
        en: 'In Sass, what is the difference between @for $i from 1 through 3 and @for $i from 1 to 3?',
        bn: 'Sass-এ @for $i from 1 through 3 এবং @for $i from 1 to 3-এর মধ্যে পার্থক্য কী?'
      },
      options: [
        {
          en: '"through" includes the final number (1, 2, 3), while "to" excludes the final number (1, 2).',
          bn: '"through" শেষ সংখ্যাটিকে অন্তর্ভুক্ত করে (১, ২, ৩), আর "to" শেষ সংখ্যাটিকে বাদ দেয় (১, ২)।'
        },
        {
          en: '"through" counts backwards, while "to" counts forwards.',
          bn: '"through" উল্টো দিকে গণনা করে, আর "to" সামনের দিকে যায়।'
        },
        {
          en: '"through" can only iterate over floating point decimals.',
          bn: '"through" কেবল দশমিক সংখ্যার ওপর লুপ চালাতে পারে।'
        },
        {
          en: 'There is no difference; they are exact aliases of each other.',
          bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা একে অপরের প্রতিশব্দ।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of "through" as inclusive of the upper limit.',
        bn: '"through"-কে শেষ সীমার অন্তর্ভুক্ত হিসেবে বিবেচনা করুন।'
      },
      explanation: {
        en: '@for ... through is inclusive of the end boundary, executing 3 iterations. @for ... to is exclusive of the end boundary, executing 2 iterations.',
        bn: '@for ... through শেষ সংখ্যাটি সহ ৩ বার লুপ চালায়। আর @for ... to শেষ সংখ্যাটি বাদ দিয়ে কেবল ২ বার লুপ চালায়।'
      }
    },
    {
      id: 'val-ex-4',
      kind: 'predict',
      topic: 'predicting function output',
      question: {
        en: 'Predict the compiled font-size: @function double($val) { @return $val * 2; } h1 { font-size: double(12px); }',
        bn: '@function double($val) { @return $val * 2; } h1 { font-size: double(12px); } — এই কোডের h1-এর font-size কত হবে?'
      },
      answer: 'font-size: 24px;',
      accept: [
        'font-size: 24px;',
        'font-size: 24px',
        '24px'
      ],
      hint: {
        en: 'Multiply 12px by 2.',
        bn: '১২px-কে ২ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'The double() function takes 12px, multiplies it by 2, and returns 24px, compiling to font-size: 24px;.',
        bn: 'double() ফাংশন ১২px গ্রহণ করে ২ দিয়ে গুণ করে ২৪px ফেরত দেয়, ফলে font-size: 24px; তৈরি হয়।'
      }
    }
  ],
  quiz: {
    id: 'values-quiz',
    title: {
      en: 'Functions and Control Directives Quiz',
      bn: 'ফাংশন এবং কন্ট্রোল নির্দেশাবলী কুইজ'
    },
    questions: [
      {
        id: 'fq1',
        kind: 'mcq',
        topic: 'interpolation in selectors',
        question: {
          en: 'Why is interpolation syntax (#{$var}) necessary when using a variable in a CSS selector name inside a loop?',
          bn: 'লুপের ভেতর CSS সিলেক্টরের নামে ভেরিয়েবল ব্যবহার করার সময় ইন্টারপোলেশন সিনট্যাক্স (#{$var}) কেন প্রয়োজন?'
        },
        options: [
          {
            en: 'Selectors exist in syntax position where raw $var expressions are not permitted; interpolation casts the value to literal identifier text.',
            bn: 'সিলেক্টরে সরাসরি $var লেখা যায় না; ইন্টারপোলেশন মানটিকে সরাসরি টেক্সট বা আইডেন্টিফায়ারে রূপান্তর করে।'
          },
          {
            en: 'Interpolation encrypts the class name for enhanced web application security.',
            bn: 'ইন্টারপোলেশন ওয়েবসাইটের নিরাপত্তার জন্য ক্লাসের নাম এনক্রিপ্ট করে দেয়।'
          },
          {
            en: 'The hash symbol tells the compiler to treat the selector as an HTML id instead of a class.',
            bn: 'হ্যাশ চিহ্ন কম্পাইলারকে ক্লাস না বানিয়ে আইডি সিলেক্টর বানাতে নির্দেশ করে।'
          },
          {
            en: 'Interpolation converts numbers into Roman numerals automatically.',
            bn: 'ইন্টারপোলেশন স্বয়ংক্রিয়ভাবে সংখ্যাকে রোমান সংখ্যায় রূপান্তর করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sass requires #{} to evaluate variables in selector or property name positions.',
          bn: 'সিলেক্টর বা প্রপার্টির নামের স্থানে ভেরিয়েবল বসাতে Sass-এ #{} প্রয়োজন হয়।'
        },
        explanation: {
          en: 'In CSS syntax positions like selector names (.col-#{$i}) or property names, Sass requires the #{} interpolation bridge to inject computed values as literal text.',
          bn: 'সিলেক্টর (.col-#{$i}) বা প্রপার্টির নামের জায়গায় সরাসরি ভেরিয়েবল চলে না; #{} ইন্টারপোলেশন মানটিকে টেক্সট আকারে বসিয়ে দেয়।'
        }
      },
      {
        id: 'fq2',
        kind: 'mcq',
        topic: 'warn directive non fatal',
        question: {
          en: 'How does @warn differ from @error in Sass stylesheets?',
          bn: 'Sass স্টাইলশিটে @warn কীভাবে @error থেকে আলাদা?'
        },
        options: [
          {
            en: '@warn logs a warning message to the compiler console without stopping the build, while @error immediately aborts compilation.',
            bn: '@warn বিল্ড বন্ধ না করে কনসোলে সতর্কবার্তা দেখায়, আর @error তাৎক্ষণিকভাবে কম্পাইলেশন থামিয়ে দেয়।'
          },
          {
            en: '@warn writes error logs directly to the user browser console at runtime.',
            bn: '@warn ব্রাউজারের কনসোলে রানটাইমে এরর লগ লিখে দেয়।'
          },
          {
            en: '@warn converts all CSS colors to grayscale automatically.',
            bn: '@warn সব CSS রংকে স্বয়ংক্রিয়ভাবে সাদাকালো করে দেয়।'
          },
          {
            en: 'There is no difference; they are exact aliases.',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা হুবহু একই।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use @warn when informing users about deprecations that should not break the build today.',
          bn: 'এমন কোনো পরিবর্তনের কথা জানাতে @warn ব্যবহার করা হয় যা আজই বিল্ড নষ্ট করবে না।'
        },
        explanation: {
          en: '@warn is non-fatal: it alerts developers to potential issues or upcoming deprecations without disrupting the build pipeline.',
          bn: '@warn ক্ষতিকর নয়: এটি বিল্ড বন্ধ না করেই ডেভেলপারদের সম্ভাব্য সমস্যা বা পুরোনো সিনট্যাক্স সম্পর্কে সতর্ক করে।'
        }
      },
      {
        id: 'fq3',
        kind: 'mcq',
        topic: 'each loop iterating maps',
        question: {
          en: 'When using @each $key, $value in $map, what does each iteration bind?',
          bn: '@each $key, $value in $map ব্যবহারের সময় প্রতি চক্রে কী নির্ধারিত হয়?'
        },
        options: [
          {
            en: 'The key variable binds the entry name (e.g., "primary"), and the value variable binds the associated data (e.g., #2563eb).',
            bn: 'key ভেরিয়েবল এন্ট্রির নাম ধারণ করে (যেমন "primary"), এবং value ভেরিয়েবল সংশ্লিষ্ট ডেটা ধারণ করে (যেমন #2563eb)।'
          },
          {
            en: 'Both variables receive numeric iteration counts starting from zero.',
            bn: 'উভয় ভেরিয়েবল শূন্য থেকে শুরু হওয়া সংখ্যাসূচক মান পায়।'
          },
          {
            en: 'The key variable receives a random UUID generated by Dart Sass.',
            bn: 'key ভেরিয়েবল Dart Sass-এর তৈরি করা একটি র‍্যান্ডম আইডি পায়।'
          },
          {
            en: 'The loop executes only once, assigning the entire map object to $key.',
            bn: 'লুপটি মাত্র একবার চলে পুরো ম্যাপটি $key-তে বসিয়ে দেয়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'An @each loop on a map destructures key-value pairs cleanly.',
          bn: '@each লুপ ম্যাপের কী এবং ভ্যালু জোড়াকে সুন্দরভাবে আলাদা করে নেয়।'
        },
        explanation: {
          en: '@each unpacks map entries into two variables: the first holds the key and the second holds the value, making theme generation straightforward.',
          bn: '@each ম্যাপের প্রতিটি এন্ট্রিকে দুটি ভেরিয়েবলে ভাগ করে নেয়: প্রথমটিতে কী এবং দ্বিতীয়টিতে ভ্যালু থাকে, যা থিম তৈরিতে অত্যন্ত কার্যকর।'
        }
      },
      {
        id: 'fq4',
        kind: 'mcq',
        topic: 'debug directive console output',
        question: {
          en: 'What is the purpose of the @debug directive in Sass?',
          bn: 'Sass-এ @debug নির্দেশটির উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It prints the evaluated result of an expression to the terminal console during compilation for inspection.',
            bn: 'এটি পরীক্ষার সুবিধার্থে কম্পাইলেশনের সময় টার্মিনাল কনসোলে এক্সপ্রেশনের মান প্রিন্ট করে দেখায়।'
          },
          {
            en: 'It opens the Google Chrome DevTools inspector automatically.',
            bn: 'এটি স্বয়ংক্রিয়ভাবে গুগল ক্রোম ডেভটুলস ইনস্পেক্টর চালু করে দেয়।'
          },
          {
            en: 'It removes all comments and whitespace from the stylesheet.',
            bn: 'এটি স্টাইলশিট থেকে সব কমেন্ট ও স্পেস মুছে দেয়।'
          },
          {
            en: 'It converts the SCSS stylesheet into a WebAssembly binary.',
            bn: 'এটি SCSS স্টাইলশিটকে ওয়েবঅ্যাসেম্বলি বাইনারিতে রূপান্তর করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Like console.log() in JavaScript, @debug logs values during compilation.',
          bn: 'জাভাস্ক্রিপ্টের console.log()-এর মতো @debug কম্পাইলের সময় মান দেখায়।'
        },
        explanation: {
          en: '@debug evaluates any expression and prints the result to standard error alongside file and line coordinates, perfect for inspecting complex maps and calculations.',
          bn: '@debug যেকোনো এক্সপ্রেশন মূল্যায়ন করে ফাইল ও লাইন নম্বরসহ টার্মিনালে মান প্রদর্শন করে, যা জটিল গণনায় ডিবাগিংয়ে সাহায্য করে।'
        }
      },
      {
        id: 'fq5',
        kind: 'predict',
        topic: 'directive that halts compilation',
        question: {
          en: 'Which Sass directive immediately halts stylesheet compilation with a custom fatal message: @______?',
          bn: 'কোন Sass নির্দেশ কাস্টম বার্তা দেখিয়ে তাৎক্ষণিকভাবে স্টাইলশিট কম্পাইলেশন বন্ধ করে দেয়: @______?'
        },
        answer: 'error',
        accept: [
          'error',
          '@error'
        ],
        hint: {
          en: 'Enter the directive name that throws a fatal compilation error.',
          bn: 'মারাত্মক কম্পাইলেশন এরর ঘটায় এমন নির্দেশটির নাম লিখুন।'
        },
        explanation: {
          en: 'The @error directive stops the Dart Sass compiler immediately and prints the specified error string, protecting codebases from invalid states.',
          bn: '@error নির্দেশ তাৎক্ষণিকভাবে Dart Sass কম্পাইলারকে থামিয়ে দেয় এবং উল্লেখিত এরর বার্তা প্রদর্শন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'modules-namespaces-and-the-import-funeral',
    title: {
      en: 'Modules, Namespaces, and Modern Architecture: @use and @forward',
      bn: 'মডিউল, নেমস্পেস এবং আধুনিক আর্কিটেকচার: @use ও @forward'
    }
  }
};
