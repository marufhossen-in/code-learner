import type { Lesson } from '../../../lib/types';

export const TheMillAndTheTwoMinuteLawLesson: Lesson = {
  slug: 'the-mill-and-the-two-minute-law',
  tech: 'sass',
  title: {
    en: 'Sass Basics & Compiler Setup — Getting Started with SCSS, Compilation, and Dart Sass',
    bn: 'Sass পরিচিতি ও কম্পাইলার আর্কিটেকচার: SCSS, কম্পাইলেশন পাইপলাইন এবং বিল্ড-টাইম এক্সিকিউশন'
  },
  summary: {
    en: 'Sass is a powerful preprocessor that compiles SCSS code into standard CSS at build time. Browsers understand CSS directly but cannot parse Sass files on their own. The modern Dart Sass compiler parses variables, nesting, and math into an abstract syntax tree and generates static CSS. This fundamental separation means that Sass executes before page render, while CSS custom properties operate dynamically at runtime.',
    bn: 'Sass হলো একটি শক্তিশালী প্রিপ্রসেসর যা বিল্ড-টাইমে SCSS কোডকে সাধারণ CSS-এ রূপান্তরিত করে। ব্রাউজার সরাসরি CSS বোঝে কিন্তু নিজস্বভাবে Sass ফাইল পড়তে পারে না। আধুনিক Dart Sass কম্পাইলার ভেরিয়েবল, নেস্টিং এবং গণিত প্রসেস করে স্ট্যাটিক CSS তৈরি করে। এই বিভাজনের অর্থ হলো Sass রেন্ডার হওয়ার আগেই কার্যকর হয়, আর CSS কাস্টম প্রপার্টি ব্রাউজারে রানটাইমে কাজ করে।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What is Sass and how does it compile to CSS?',
        bn: 'Sass কী এবং এটি কীভাবে CSS-এ কম্পাইল হয়?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Sass extends standard CSS by adding variables, nesting, mixins, functions, and modular architecture. When you write a .scss file, the browser cannot run it directly. Instead, the Dart Sass compiler processes your code and outputs a flat, standard CSS stylesheet. All Sass calculations and variables resolve into static literals during the build step. Once compiled, the browser executes the resulting CSS without any performance penalty.',
        bn: 'Sass সাধারণ CSS-এর সাথে ভেরিয়েবল, নেস্টিং, মিক্সিন, ফাংশন এবং মডুলার আর্কিটেকচার যুক্ত করে। আপনি যখন .scss ফাইল লেখেন, ব্রাউজার তা সরাসরি চালাতে পারে না। Dart Sass কম্পাইলার এই কোড প্রসেস করে একটি সমতল, মানসম্মত CSS ফাইল তৈরি করে। বিল্ডের সময় সব Sass গণনা ও ভেরিয়েবল স্ট্যাটিক মানে রূপ নেয়। একবার কম্পাইল হয়ে গেলে ব্রাউজার কোনো বাড়তি লোড ছাড়াই CSS পরিচালনা করে।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'preprocessor',
          def: {
            en: 'a compiler that takes an extended stylesheet language and produces standard, browser-compatible CSS text',
            bn: 'এমন একটি কম্পাইলার যা বর্ধিত স্টাইলশিট কোড গ্রহণ করে ব্রাউজার-বান্ধব মানসম্মত CSS তৈরি করে'
          }
        },
        {
          term: 'Dart Sass',
          def: {
            en: 'the primary, actively maintained reference implementation of Sass, distributed via npm as the sass package',
            bn: 'Sass-এর মূল সক্রিয় রেফারেন্স সংস্করণ, যা npm-এ sass প্যাকেজ হিসেবে প্রকাশিত'
          }
        },
        {
          term: 'build time vs runtime',
          def: {
            en: 'build time is when Dart Sass compiles source files; runtime is when the browser renders CSS and responds to user interaction',
            bn: 'বিল্ড-টাইম হলো যখন Dart Sass ফাইল কম্পাইল করে; রানটাইম হলো যখন ব্রাউজার CSS রেন্ডার করে এবং ব্যবহারকারীর অনুরোধে সাড়া দেয়'
          }
        },
        {
          term: 'source map',
          def: {
            en: 'a JSON mapping file (.css.map) that lets browser developer tools link compiled CSS declarations back to original SCSS lines',
            bn: 'একটি JSON ম্যাপিং ফাইল (.css.map) যার মাধ্যমে ব্রাউজার ডেভটুলস কম্পাইল করা CSS-কে মূল SCSS লাইনের সাথে মিলিয়ে দেখায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why use Sass over plain CSS?',
        bn: 'সাধারণ CSS-এর বদলে Sass কেন ব্যবহার করবেন?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large web applications require consistent design tokens, modular files, and reusable UI patterns. Plain CSS traditionally forced developers to repeat color codes, spacing units, and complex selector hierarchies across thousands of lines. Sass solves this by introducing structured variables, nested blocks, and shared mixins. You define your design system once, and the compiler safely generates clean, cross-browser CSS.',
        bn: 'বড় ওয়েব অ্যাপ্লিকেশনে সুনির্দিষ্ট ডিজাইন টোকেন, মডুলার ফাইল এবং পুনর্ব্যবহারযোগ্য UI প্যাটার্ন প্রয়োজন হয়। সাধারণ CSS-এ হাজার হাজার লাইনে একই রঙের কোড, স্পেসিং ও জটিল সিলেক্টর বারবার লিখতে হতো। Sass ভেরিয়েবল, নেস্টেড ব্লক এবং শেয়ার্ড মিক্সিনের মাধ্যমে এই সমস্যার সমাধান করে। আপনি একবার ডিজাইন সিস্টেম সাজান, আর কম্পাইলার স্বয়ংক্রিয়ভাবে পরিচ্ছন্ন CSS তৈরি করে দেয়।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to install, compile, and watch Sass files',
        bn: 'কীভাবে Sass ইনস্টল, কম্পাইল এবং ওয়াচ করবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'You can install Dart Sass in any modern Node.js project using npm. Run npm install -D sass to add the compiler to your development dependencies. Then use the command line interface to compile your styles. You can compile a single file or run with the watch flag so the compiler automatically rebuilds your output CSS on every file save.',
        bn: 'যেকোনো আধুনিক Node.js প্রজেক্টে npm দিয়ে Dart Sass ইনস্টল করা যায়। npm install -D sass চালিয়ে আপনার ডেভেলপমেন্ট প্যাকেজে কম্পাইলার যোগ করুন। এরপর কমান্ড লাইন দিয়ে স্টাইল কম্পাইল করুন। আপনি একটি একক ফাইল কম্পাইল করতে পারেন অথবা ওয়াচ ফ্ল্যাগ ব্যবহার করে প্রতিবার সেভ করার সাথে সাথে আউটপুট CSS তৈরি করতে পারেন।',
      }
    },
    {
      type: 'code',
      lang: 'bash',
      filename: 'terminal.sh',
      caption: {
        en: 'Installing Dart Sass and watching SCSS files for changes.',
        bn: 'Dart Sass ইনস্টলেশন এবং ফাইলের পরিবর্তন পর্যবেক্ষণের কমান্ড।'
      },
      code: `# 1. Install Dart Sass as a dev dependency
npm install -D sass

# 2. Compile a single SCSS file to CSS with source map
npx sass src/main.scss dist/main.css

# 3. Watch files for live automatic recompilation
npx sass --watch src/main.scss:dist/main.css

# 4. Generate compressed production output
npx sass --style=compressed src/main.scss dist/main.min.css`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Inside the compilation pipeline: SCSS to CSS',
        bn: 'কম্পাইলেশন পাইপলাইনের ভেতরে: SCSS থেকে CSS'
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'pipeline-example.scss',
      caption: {
        en: 'SCSS input with variables, functions, and nesting alongside compiled CSS output.',
        bn: 'ভেরিয়েবল, ফাংশন ও নেস্টিংযুক্ত SCSS ইনপুট এবং তার সমতুল্য কম্পাইল করা CSS আউটপুট।'
      },
      code: `// --- 1. SCSS SOURCE INPUT ---
$base-spacing: 8px;
$primary-color: #2563eb;

@function multiply-spacing($multiplier) {
  @return $base-spacing * $multiplier;
}

.card {
  padding: multiply-spacing(2); // evaluates to 16px
  border: 1px solid #e5e7eb;

  .card-title {
    color: $primary-color;      // evaluates to #2563eb
    font-size: 1.25rem;
  }
}

/* --- 2. COMPILED CSS OUTPUT ---
.card {
  padding: 16px;
  border: 1px solid #e5e7eb;
}
.card .card-title {
  color: #2563eb;
  font-size: 1.25rem;
}
*/`
    },
    {
      type: 'para',
      text: {
        en: 'The compiler follows four distinct stages during execution. First, the lexer scans the source text into tokens and builds an abstract syntax tree. Second, the evaluator resolves all mathematical expressions, functions, and variable bindings in scope. Third, the selector engine flattens nested rules into valid CSS descendant and combinator selectors. Finally, the emitter formats the rules into CSS text and produces a source map pointing back to original line numbers.',
        bn: 'কম্পাইলার এক্সিকিউশনের সময় চারটি স্বতন্ত্র ধাপ অনুসরণ করে। প্রথমত, লেক্সার সোর্স টেক্সট স্ক্যান করে টোকেন তৈরি করে এবং একটি সিনট্যাক্স ট্রি বানায়। দ্বিতীয়ত, ইভ্যালুয়েটর সব গাণিতিক হিসেব, ফাংশন এবং স্কোপের ভেরিয়েবল সমাধান করে। তৃতীয়ত, সিলেক্টর ইঞ্জিন নেস্টেড ব্লকগুলোকে ভেঙে সাধারণ CSS ডিসেন্ডেন্ট সিলেক্টরে রূপান্তর করে। সর্বশেষে, এমিটার রুলগুলোকে পরিচ্ছন্ন CSS টেক্সটে রূপ দেয় এবং মূল লাইনের সাথে মিলিয়ে সোর্স ম্যাপ তৈরি করে।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices: SCSS syntax vs indented syntax',
        bn: 'সেরা চর্চা: SCSS বনাম ইনডেন্টেড সিনট্যাক্স'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Always use .scss syntax for new projects: SCSS is a strict superset of CSS, meaning every valid CSS file is automatically valid SCSS.',
          bn: 'নতুন প্রজেক্টে সর্বদা .scss সিনট্যাক্স ব্যবহার করুন: SCSS সরাসরি CSS-এর সুপারসেট, অর্থাৎ যেকোনো বৈধ CSS ফাইল এমনিতেই বৈধ SCSS।'
        },
        {
          en: 'Legacy .sass syntax relies on indentation and newlines without curly braces or semicolons, but is rarely chosen for modern teams.',
          bn: 'পুরোনো .sass সিনট্যাক্স কার্লি ব্র্যাকেট বা সেমিকোলন ছাড়া কেবল ইনডেন্টেশনের ওপর নির্ভর করে, যা আধুনিক প্রজেক্টে খুব কম ব্যবহৃত হয়।'
        },
        {
          en: 'Generate source maps during development for easy browser debugging, but omit or restrict them in public production builds.',
          bn: 'ডেভেলপমেন্টের সময় ব্রাউজারে সহজে ডিবাগ করার জন্য সোর্স ম্যাপ তৈরি করুন, তবে পাবলিক প্রোডাকশনে তা বাদ দিন।'
        },
        {
          en: 'Organize stylesheets into partials prefixed with an underscore (like _variables.scss) so the compiler does not emit empty standalone CSS files.',
          bn: 'স্টাইলশিটগুলোকে আন্ডারস্কোর প্রিফিক্সযুক্ত পার্শিয়ালে সাজান (যেমন _variables.scss), যাতে কম্পাইলার অপ্রয়োজনীয় ফাইল তৈরি না করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Common troubleshooting: build-time errors vs runtime bugs',
        bn: 'সাধারণ সমস্যা সমাধান: বিল্ড-টাইম ত্রুটি বনাম রানটাইম বাগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent point of confusion is mistaking Sass variables for CSS custom properties. Because Sass runs at build time, inspecting a page in browser DevTools will show fixed pixel or hex values rather than Sass variable names. If a color needs to change when the user clicks a dark mode button, you must use CSS custom properties (var(--color)) because Sass has already finished executing. When the compiler encounters an undefined variable or syntax error, it halts the build with exact file and line coordinates.',
        bn: 'নতুনদের প্রায়ই Sass ভেরিয়েবল এবং CSS কাস্টম প্রপার্টির মধ্যে বিভ্রান্তি দেখা যায়। যেহেতু Sass বিল্ড-টাইমে চলে, তাই ব্রাউজার ডেভটুলসে কোনো Sass ভেরিয়েবলের নাম দেখা যায় না, কেবল হিসাবকৃত মান দেখা যায়। ব্যবহারকারী ডার্ক মোড বাটনে ক্লিক করলে যদি রঙ বদলাতে হয়, তবে CSS কাস্টম প্রপার্টি (var(--color)) ব্যবহার করতে হবে, কারণ Sass ততক্ষণে কাজ শেষ করে ফেলেছে। কোনো অনির্ধারিত ভেরিয়েবল থাকলে কম্পাইলার ফাইল ও লাইন নম্বরসহ তাৎক্ষণিক এরর দেখিয়ে বিল্ড থামিয়ে দেয়।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: how design systems use Sass',
        bn: 'বাস্তব স্থাপত্য: ডিজাইন সিস্টেমে Sass-এর ব্যবহার'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Frameworks like Bootstrap 5 build their entire core styling on Sass maps and loops, compiling hundreds of responsive utilities into a single minified bundle.',
          bn: 'বুটস্ট্র্যাপ 5 এর মতো জনপ্রিয় ফ্রেমওয়ার্ক তাদের পুরো কোর স্টাইল Sass ম্যাপ ও লুপের ওপর তৈরি করে শত শত রেসপনসিভ ইউটিলিটি ক্লাস তৈরি করে।'
        },
        {
          en: 'Enterprise design systems export centralized design tokens from Figma as JSON or SCSS variables, allowing seamless theme synchronization across web apps.',
          bn: 'বড় প্রতিষ্ঠানের ডিজাইন সিস্টেম ফিগমা থেকে ডিজাইন টোকেন সরাসরি SCSS ভেরিয়েবলে রূপান্তর করে বিভিন্ন অ্যাপ্লিকেশনের মধ্যে ডিজাইনের সামঞ্জস্য বজায় রাখে।'
        },
        {
          en: 'Modern bundlers like Vite, Webpack, and Next.js provide built-in Dart Sass loaders, compiling SCSS modules with zero manual configuration.',
          bn: 'Vite, Webpack এবং Next.js-এর মতো আধুনিক বান্ডলারগুলোতে সরাসরি Dart Sass লোডার থাকে, যা অতিরিক্ত কনফিগারেশন ছাড়াই কাজ করে।'
        },
        {
          en: 'Hybrid architectures use Sass for complex build-time grid generation and CSS custom properties for dynamic runtime theming.',
          bn: 'হাইব্রিড আর্কিটেকচারে জটিল গ্রিড ও ইউটিলিটি তৈরিতে Sass এবং ডায়নামিক থিমিংয়ের জন্য CSS কাস্টম প্রপার্টি একসাথে ব্যবহৃত হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: variables, data types, and scope',
        bn: 'পরবর্তী ধাপ: ভেরিয়েবল, ডেটা টাইপ এবং স্কোপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you understand how Dart Sass compiles SCSS into CSS, you are ready to master data representation. In the next lesson, we explore the eight core data types in Sass, variable scoping rules, the !default flag used in component libraries, and safe division using the sass:math module.',
        bn: 'এখন আপনি জানেন কীভাবে Dart Sass সোর্স কোডকে CSS-এ কম্পাইল করে। পরবর্তী পাঠে আমরা Sass-এর ৮টি মৌলিক ডেটা টাইপ, লোকাল ও গ্লোবাল স্কোপের নিয়ম, কম্পোনেন্ট লাইব্রেরির !default ফ্ল্যাগ এবং sass:math মডিউল দিয়ে নিরাপদ ভাগের নিয়ম শিখব।',
      }
    }
  ],
  exercises: [
    {
      id: 'sa-ex-1',
      kind: 'mcq',
      topic: 'preprocessor contract',
      question: {
        en: 'What is the primary role of a CSS preprocessor like Sass?',
        bn: 'Sass-এর মতো CSS প্রিপ্রসেসরের প্রধান কাজ কী?'
      },
      options: [
        {
          en: 'It compiles an extended stylesheet language containing variables and functions into standard plain CSS at build time.',
          bn: 'এটি বিল্ড-টাইমে ভেরিয়েবল ও ফাংশনযুক্ত বর্ধিত স্টাইলশিট কোডকে সাধারণ মানসম্মত CSS-এ রূপান্তর করে।'
        },
        {
          en: 'It runs as an interpreter inside the browser rendering engine to speed up CSS execution.',
          bn: 'এটি ব্রাউজারের ভেতর ইন্টারপ্রেটার হিসেবে চলে স্টাইল প্রদর্শনের গতি বাড়ায়।'
        },
        {
          en: 'It intercepts network requests to inject stylesheets directly into the DOM.',
          bn: 'এটি নেটওয়ার্ক রিকোয়েস্ট আটকে দিয়ে সরাসরি ডমে স্টাইল যুক্ত করে।'
        },
        {
          en: 'It dynamically monitors user clicks at runtime to recalculate responsive layouts.',
          bn: 'এটি রানটাইমে ব্যবহারকারীর ক্লিকের ওপর নজর রেখে রেসপনসিভ লেআউট নতুন করে হিসাব করে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler outputs standard CSS before the browser ever loads the webpage.',
        bn: 'ওয়েবপেজ লোড হওয়ার আগেই কম্পাইলার সাধারণ CSS তৈরি করে দেয়।'
      },
      explanation: {
        en: 'Sass is executed ahead of time during the build pipeline. It evaluates expressions, expands nesting, and outputs standard CSS text that any browser can interpret without requiring a runtime library.',
        bn: 'Sass বিল্ড পাইপলাইনে আগে থেকেই কার্যকর হয়। এটি গাণিতিক রাশি সমাধান করে, নেস্টিং সম্প্রসারিত করে এবং সাধারণ CSS তৈরি করে যা যেকোনো ব্রাউজার কোনো লাইব্রেরি ছাড়াই চালাতে পারে।'
      }
    },
    {
      id: 'sa-ex-2',
      kind: 'mcq',
      topic: 'dart sass standard',
      question: {
        en: 'Which package is the current official reference implementation of Sass on npm?',
        bn: 'npm-এ Sass-এর বর্তমান অফিশিয়াল রেফারেন্স প্যাকেজ কোনটি?'
      },
      options: [
        {
          en: 'sass (Dart Sass compiled to pure JavaScript)',
          bn: 'sass (জাভাস্ক্রিপ্টে কম্পাইল করা Dart Sass)'
        },
        {
          en: 'node-sass (deprecated C++ LibSass binding)',
          bn: 'node-sass (বাতিল হওয়া C++ LibSass বাইন্ডিং)'
        },
        {
          en: 'ruby-sass (the original 2006 gem)',
          bn: 'ruby-sass (২০০৬ সালের আদিম জেম)'
        },
        {
          en: 'compass (the legacy mixin framework)',
          bn: 'compass (পুরোনো মিক্সিন ফ্রেমওয়ার্ক)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modern projects install the package named simply sass.',
        bn: 'আধুনিক প্রজেক্টগুলোতে সরাসরি sass নামের প্যাকেজটি ইনস্টল করা হয়।'
      },
      explanation: {
        en: 'Dart Sass is the canonical implementation maintained by the Sass core team. It receives all modern language features first and runs anywhere Node.js runs without native binary compilation issues.',
        bn: 'Dart Sass হলো Sass কোর টিমের মূল সক্রিয় সংস্করণ। নতুন সব ফিচার এতে প্রথমে আসে এবং এটি কোনো বাইনারি সমস্যা ছাড়াই যেকোনো Node.js পরিবেশে সহজে চলে।'
      }
    },
    {
      id: 'sa-ex-3',
      kind: 'mcq',
      topic: 'build time vs runtime',
      question: {
        en: 'Why can Sass variables NOT respond dynamically to user interactions like dark mode toggles without CSS custom properties?',
        bn: 'CSS কাস্টম প্রপার্টি ছাড়া Sass ভেরিয়েবল কেন ডার্ক মোডের মতো রানটাইম ব্যবহারকারী ইন্টারঅ্যাকশনে সাড়া দিতে পারে না?'
      },
      options: [
        {
          en: 'Sass variables resolve into static literal values during compilation and do not exist in the browser runtime.',
          bn: 'Sass ভেরিয়েবল কম্পাইলেশনের সময় স্ট্যাটিক মানে পরিণত হয় এবং ব্রাউজারের রানটাইমে এদের অস্তিত্ব থাকে না।'
        },
        {
          en: 'Browsers intentionally block Sass from accessing user device preferences for security reasons.',
          bn: 'নিরাপত্তার স্বার্থে ব্রাউজার Sass-কে ডিভাইসের সেটিংস দেখতে বাধা দেয়।'
        },
        {
          en: 'Sass syntax does not support hexadecimal color codes or opacity units.',
          bn: 'Sass সিনট্যাক্স হেক্সাডেসিমাল রঙের কোড সমর্থন করে না।'
        },
        {
          en: 'Dart Sass only runs when an active internet connection is available.',
          bn: 'Dart Sass কেবল সক্রিয় ইন্টারনেট সংযোগ থাকলেই চলতে পারে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about when the compiler runs versus when the browser runs.',
        bn: 'কম্পাইলার কখন চলে আর ব্রাউজার কখন চলে তা বিবেচনা করুন।'
      },
      explanation: {
        en: 'Sass is purely a build-time preprocessor. Once Sass emits the CSS file, variable names are discarded and replaced by raw values. Dynamic changes in the browser require native CSS custom properties (var(--var-name)).',
        bn: 'Sass পুরোপুরি বিল্ড-টাইমে কাজ করে। একবার CSS তৈরি হয়ে গেলে ভেরিয়েবলের নাম মুছে গিয়ে স্থির মান বসে যায়। ব্রাউজারে ডায়নামিক পরিবর্তনের জন্য CSS কাস্টম প্রপার্টি ব্যবহার করতে হয়।'
      }
    },
    {
      id: 'sa-ex-4',
      kind: 'predict',
      topic: 'predicting compiled output',
      question: {
        en: 'Predict the compiled CSS declaration for: $size: 10px; .box { margin: $size * 2; }',
        bn: '$size: 10px; .box { margin: $size * 2; } — এই কোডের কম্পাইল করা CSS ডিক্লারেশন কী হবে?'
      },
      answer: '.box { margin: 20px; }',
      accept: [
        'margin: 20px',
        '.box { margin: 20px; }',
        'margin: 20px;'
      ],
      hint: {
        en: 'Multiply the numeric value by 2 and preserve the unit.',
        bn: 'সংখ্যাটিকে ২ দিয়ে গুণ করুন এবং একক অপরিবর্তিত রাখুন।'
      },
      explanation: {
        en: 'The Sass compiler evaluates the arithmetic expression 10px * 2 to 20px at build time and emits the clean CSS rule .box { margin: 20px; }.',
        bn: 'Sass কম্পাইলার বিল্ড-টাইমে ১০px * ২ হিসেব করে ২০px পায় এবং .box { margin: 20px; } আউটপুট দেয়।'
      }
    }
  ],
  quiz: {
    id: 'mill-quiz',
    title: {
      en: 'Sass Fundamentals Quiz',
      bn: 'Sass মৌলিক জ্ঞান পরীক্ষা'
    },
    questions: [
      {
        id: 'sq1',
        kind: 'mcq',
        topic: 'source map purpose',
        question: {
          en: 'What is the role of a .css.map source map file in web development?',
          bn: 'ওয়েব ডেভেলপমেন্টে .css.map সোর্স ম্যাপ ফাইলের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It maps lines in the compiled CSS file back to original lines in the source SCSS file for debugging.',
            bn: 'ডিবাগিংয়ের সুবিধার্থে এটি কম্পাইল করা CSS-এর প্রতিটি লাইনকে মূল SCSS ফাইলের লাইনের সাথে সংযুক্ত করে।'
          },
          {
            en: 'It compresses the CSS output to decrease download time over the network.',
            bn: 'এটি নেটওয়ার্কে ডাউনলোডের সময় কমাতে CSS কোডকে সংকুচিত করে।'
          },
          {
            en: 'It converts JavaScript code into CSS variables automatically.',
            bn: 'এটি স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট কোডকে CSS ভেরিয়েবলে রূপান্তর করে।'
          },
          {
            en: 'It serves as an offline cache for browser service workers.',
            bn: 'এটি ব্রাউজার সার্ভিস ওয়ার্কারের অফলাইন ক্যাশ হিসেবে কাজ করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Source maps help developers inspect source files directly in browser DevTools.',
          bn: 'সোর্স ম্যাপের সাহায্যে ডেভেলপাররা সরাসরি ব্রাউজার ডেভটুলসে মূল ফাইল দেখতে পান।'
        },
        explanation: {
          en: 'Source maps contain coordinate mappings between compiled CSS and original SCSS source lines. This lets browser DevTools point you directly to the SCSS line that generated a given CSS rule.',
          bn: 'সোর্স ম্যাপে কম্পাইল করা CSS এবং মূল SCSS ফাইলের লাইনের ম্যাপিং থাকে। ফলে কোনো নিয়মের সমস্যা হলে ব্রাউজার ডেভটুলস সরাসরি সোর্স ফাইলের সংশ্লিষ্ট লাইনটি নির্দেশ করতে পারে।'
        }
      },
      {
        id: 'sq2',
        kind: 'mcq',
        topic: 'scss vs css compatibility',
        question: {
          en: 'Why is SCSS described as a superset of CSS?',
          bn: 'SCSS-কে কেন CSS-এর একটি সুপারসেট বলা হয়?'
        },
        options: [
          {
            en: 'Every valid CSS stylesheet is automatically valid SCSS, allowing gradual migration.',
            bn: 'যেকোনো বৈধ CSS ফাইল নিজে থেকেই বৈধ SCSS, যা ধাপে ধাপে মাইগ্রেশনের সুযোগ দেয়।'
          },
          {
            en: 'SCSS replaces all standard CSS selectors with custom functions.',
            bn: 'SCSS সাধারণ সিলেক্টর বাদ দিয়ে কাস্টম ফাংশন চালু করে।'
          },
          {
            en: 'SCSS compiles directly to machine code instead of web stylesheets.',
            bn: 'SCSS ওয়েব স্টাইলশিটের বদলে সরাসরি মেশিন কোডে কম্পাইল হয়।'
          },
          {
            en: 'SCSS can only be written inside HTML style tags.',
            bn: 'SCSS কেবল HTML স্টাইল ট্যাগের ভেতরেই লেখা যায়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'You can rename any .css file to .scss and it will compile without errors.',
          bn: 'যেকোনো .css ফাইলকে রিনেম করে .scss বানালে তা কোনো এরর ছাড়াই কম্পাইল হবে।'
        },
        explanation: {
          en: 'Because SCSS uses CSS-compatible curly braces and semicolons, any valid CSS stylesheet is valid SCSS. Teams can rename existing stylesheets from .css to .scss and incrementally adopt Sass features.',
          bn: 'যেহেতু SCSS স্বাভাবিক কার্লি ব্র্যাকেট এবং সেমিকোলন ব্যবহার করে, তাই যেকোনো সাধারণ CSS কোড বৈধ SCSS। ফলে পুরোনো .css ফাইলগুলোকে .scss হিসেবে রিনেম করে ধীরে ধীরে নতুন ফিচার যোগ করা যায়।'
        }
      },
      {
        id: 'sq3',
        kind: 'mcq',
        topic: 'watch mode in cli',
        question: {
          en: 'What does the --watch flag do when running the Sass CLI?',
          bn: 'Sass CLI চালানোর সময় --watch ফ্ল্যাগটি কী কাজ করে?'
        },
        options: [
          {
            en: 'It keeps the process running and automatically recompiles the CSS whenever source SCSS files are modified and saved.',
            bn: 'এটি প্রসেস সচল রাখে এবং সোর্স SCSS ফাইলে পরিবর্তন সংরক্ষণ করলেই স্বয়ংক্রিয়ভাবে পুনরায় CSS কম্পাইল করে।'
          },
          {
            en: 'It sends compilation logs to an external cloud server for analytics.',
            bn: 'এটি বিশ্লেষণের জন্য ক্লাউড সার্ভারে কম্পাইলেশন লগ পাঠায়।'
          },
          {
            en: 'It opens an interactive video player inside the terminal.',
            bn: 'এটি টার্মিনালের ভেতরে একটি ভিডিও প্লেয়ার চালু করে।'
          },
          {
            en: 'It prevents developers from saving files that contain syntax warnings.',
            bn: 'এটি ফাইলে সিনট্যাক্স সতর্কতা থাকলে ফাইল সেভ করতে বাধা দেয়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Watch mode eliminates the need to manually run the compiler after every edit.',
          bn: 'ওয়াচ মোড থাকলে প্রতিবার কোড লিখে নিজে নিজে কম্পাইল কমান্ড চালাতে হয় না।'
        },
        explanation: {
          en: 'The --watch flag monitors the target files or directories for filesystem change events. When a file is saved, Dart Sass immediately recompiles the output CSS, accelerating development.',
          bn: '--watch ফ্ল্যাগ ফাইল বা ফোল্ডারের পরিবর্তনের ওপর নজর রাখে। কোনো ফাইল সেভ করলেই Dart Sass সাথে সাথে নতুন CSS তৈরি করে দেয়, যা কাজকে অনেক দ্রুত করে।'
        }
      },
      {
        id: 'sq4',
        kind: 'mcq',
        topic: 'sass partials',
        question: {
          en: 'Why do Sass partial files begin with an underscore, such as _variables.scss?',
          bn: 'Sass পার্শিয়াল ফাইলের নাম কেন আন্ডারস্কোর দিয়ে শুরু হয়, যেমন _variables.scss?'
        },
        options: [
          {
            en: 'The underscore tells the compiler that the file is a partial and should not be compiled into a standalone CSS file.',
            bn: 'আন্ডারস্কোর কম্পাইলারকে জানায় যে এটি একটি পার্শিয়াল এবং এর জন্য আলাদা একক CSS ফাইল তৈরি করার প্রয়োজন নেই।'
          },
          {
            en: 'The underscore marks the file as encrypted and read-only on the filesystem.',
            bn: 'আন্ডারস্কোর ফাইলটিকে এনক্রিপ্ট করা ও কেবল পাঠযোগ্য হিসেবে চিহ্নিত করে।'
          },
          {
            en: 'The underscore indicates that the file contains JavaScript code rather than SCSS.',
            bn: 'আন্ডারস্কোর বোঝায় যে ফাইলটিতে SCSS-এর বদলে জাভাস্ক্রিপ্ট কোড রয়েছে।'
          },
          {
            en: 'The underscore enables dark mode automatically for all styles defined inside.',
            bn: 'আন্ডারস্কোর ফাইলের ভেতরের সব স্টাইলের জন্য স্বয়ংক্রিয়ভাবে ডার্ক মোড চালু করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Partials are imported into main stylesheets rather than generated as independent files.',
          bn: 'পার্শিয়াল ফাইলগুলোকে আলাদা ফাইল না বানিয়ে মূল স্টাইলশিটে যুক্ত করে ব্যবহার করা হয়।'
        },
        explanation: {
          en: 'By convention and compiler rule, filenames starting with an underscore are treated as partials. The compiler skips emitting a standalone CSS file for them; instead, they are consumed via @use or @forward in main stylesheets.',
          bn: 'নিয়ম অনুযায়ী আন্ডারস্কোর দিয়ে শুরু হওয়া ফাইলগুলোকে পার্শিয়াল ধরা হয়। কম্পাইলার এদের জন্য আলাদা কোনো CSS তৈরি করে না, বরং অন্য মূল ফাইলে @use দিয়ে এগুলো ব্যবহার করা হয়।'
        }
      },
      {
        id: 'sq5',
        kind: 'predict',
        topic: 'cli production output flag',
        question: {
          en: 'Which CLI flag produces minified, compressed CSS output in Dart Sass: --style=______?',
          bn: 'Dart Sass-এ মিনিফাইড ও সংকুচিত CSS আউটপুট পাওয়ার জন্য কোন CLI ফ্ল্যাগ ব্যবহৃত হয়: --style=______?'
        },
        answer: 'compressed',
        accept: [
          'compressed',
          '--style=compressed',
          'style=compressed'
        ],
        hint: {
          en: 'The opposite of expanded output is compressed output.',
          bn: 'expanded আউটপুটের বিপরীত হলো compressed আউটপুট।'
        },
        explanation: {
          en: 'Dart Sass supports two output styles: expanded (human-readable default) and compressed (minified for production without comments or unnecessary whitespace).',
          bn: 'Dart Sass-এ দুটি আউটপুট স্টাইল রয়েছে: expanded (পড়ার উপযোগী ডিফল্ট) এবং compressed (অপ্রয়োজনীয় স্পেস ও কমেন্টহীন প্রোডাকশন সংস্করণ)।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-binding-and-its-etiquette',
    title: {
      en: 'The Binding and Its Etiquette: Variables, Types, and Scope',
      bn: 'ভেরিয়েবল, ডেটা টাইপ এবং স্কোপ'
    }
  }
};
