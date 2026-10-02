import type { Lesson } from '../../../lib/types';

export const ThePriceOfCleverSharingLesson: Lesson = {
  slug: 'the-price-of-clever-sharing',
  tech: 'sass',
  title: {
    en: 'Sass Mixins, Placeholders & @extend — Code Reuse, Arguments, @content, and Selector Inheritance',
    bn: 'Sass মিক্সিন, প্লেসহোল্ডার ও @extend: কোড পুনর্ব্যবহার, আর্গুমেন্টস, @content এবং সিলেক্টর উত্তরাধিকার'
  },
  summary: {
    en: 'Sass provides two primary mechanisms for sharing CSS declarations across selectors: mixins and placeholders with @extend. Mixins copy declarations directly into each calling selector, supporting arguments, default values, and custom content blocks. In contrast, placeholders (%name) and @extend group multiple selectors under a single shared rule, reducing compiled stylesheet size. Understanding when to copy declarations versus when to group selectors prevents selector leakage and media query compilation errors.',
    bn: 'Sass-এ সিলেক্টরের মধ্যে কোড পুনর্ব্যবহারের জন্য দুটি প্রধান ব্যবস্থা রয়েছে: মিক্সিন এবং @extend-সহ প্লেসহোল্ডার। মিক্সিন প্রতিটি কল করা সিলেক্টরে সরাসরি ডিক্লারেশন কপি করে দেয় এবং আর্গুমেন্ট, ডিফল্ট মান ও কন্টেন্ট ব্লক সমর্থন করে। অন্যদিকে, প্লেসহোল্ডার (%name) এবং @extend একাধিক সিলেক্টরকে একটি সাধারণ নিয়মের অধীনে কমা দিয়ে যুক্ত করে ফাইলের আকার কমায়। কখন কোড কপি করতে হবে আর কখন সিলেক্টর একত্রিত করতে হবে তা জানা থাকলে জটিল ত্রুটি এড়ানো যায়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Mixins versus placeholders: copying versus grouping',
        bn: 'মিক্সিন বনাম প্লেসহোল্ডার: কোড কপি বনাম সিলেক্টর গ্রুপিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Sass, a mixin acts like a function for CSS declarations. When you define a mixin with @mixin and include it with @include, Sass copies those declarations into your target selector. Placeholders begin with a percent sign (%placeholder) and do not emit any CSS until extended. When you use @extend %placeholder, Sass merges your selector into a comma-separated selector list for that rule instead of duplicating properties.',
        bn: 'Sass-এ মিক্সিন হলো CSS নিয়মের একটি পুনর্ব্যবহারযোগ্য ব্লকের মতো। @mixin দিয়ে মিক্সিন তৈরি করে @include দিয়ে ডাকলে Sass সেই নিয়মগুলোকে সংশ্লিষ্ট সিলেক্টরে সরাসরি কপি করে দেয়। প্লেসহোল্ডার পার্সেন্ট চিহ্ন (%placeholder) দিয়ে শুরু হয় এবং বর্ধিত না করা পর্যন্ত কোনো CSS তৈরি করে না। @extend %placeholder ব্যবহার করলে Sass কোড কপি না করে সংশ্লিষ্ট সিলেক্টরগুলোকে কমা দিয়ে একটি একক নিয়মে যুক্ত করে।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@mixin and @include',
          def: {
            en: 'directives for defining and applying reusable declaration blocks, supporting positional or keyword arguments',
            bn: 'পুনর্ব্যবহারযোগ্য স্টাইল ব্লক তৈরি এবং প্রয়োগের নির্দেশ, যা সাধারণ বা কিওয়ার্ড আর্গুমেন্ট সমর্থন করে'
          }
        },
        {
          term: '@content directive',
          def: {
            en: 'a placeholder block inside a mixin that accepts arbitrary CSS passed from the caller at the include site',
            bn: 'মিক্সিনের ভেতরের একটি স্লট যা কল করার সময় ব্যবহারকারীর পাঠানো যেকোনো অতিরিক্ত CSS কোড গ্রহণ করে'
          }
        },
        {
          term: 'silent placeholder (%)',
          def: {
            en: 'a selector beginning with % that produces zero CSS output unless explicitly targeted by @extend',
            bn: '% দিয়ে শুরু হওয়া সিলেক্টর যা @extend দিয়ে না ডাকা পর্যন্ত আউটপুট CSS-এ সম্পূর্ণ নীরব থাকে'
          }
        },
        {
          term: '@extend directive',
          def: {
            en: 'a directive that attaches the calling selector to an existing rule or placeholder via comma grouping',
            bn: 'একটি নির্দেশ যা কল করা সিলেক্টরকে কমা দিয়ে বিদ্যমান কোনো নিয়ম বা প্লেসহোল্ডারের সাথে সংযুক্ত করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why architectural trade-offs determine mixin vs extend usage',
        bn: 'কেন স্থাপত্যের প্রয়োজনে মিক্সিন বনাম extend নির্বাচন করতে হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing between mixins and @extend is a trade-off between clean output isolation and CSS bundle size. Mixins isolate styles completely: each selector maintains its own independent rule block and specificity. However, repeating large mixins across dozens of classes increases compiled CSS file size. Conversely, @extend produces tiny stylesheets by grouping selectors, but can inadvertently rewrite complex descendant selectors across independent components.',
        bn: 'মিক্সিন এবং @extend-এর মধ্যে নির্বাচন মূলত কোডের বিচ্ছিন্নতা এবং ফাইলের আকারের ওপর নির্ভর করে। মিক্সিন প্রতিটি সিলেক্টরের নিজস্ব নিয়ম ও স্পেসিফিসিটি আলাদা রাখে। তবে বড় মিক্সিন বারবার ব্যবহার করলে তৈরি হওয়া CSS ফাইলের আকার বড় হয়। অন্যদিকে @extend সিলেক্টর গ্রুপ করে ফাইলের আকার খুব ছোট রাখে, তবে অসাবধানতায় এটি ভিন্ন ভিন্ন কম্পোনেন্টের সিলেক্টরকে পরস্পরের সাথে জড়িয়ে ফেলতে পারে।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to write mixins, pass arguments, and use placeholders',
        bn: 'কীভাবে মিক্সিন লিখবেন, আর্গুমেন্ট পাঠাবেন এবং প্লেসহোল্ডার ব্যবহার করবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'To write a mixin, declare @mixin followed by a name and optional parentheses for parameters. Set default values with colons to make parameters optional. Use @content to allow callers to pass nested rules or media query bodies. For static shared styles that never accept parameters, declare a %placeholder and extend it inside multiple component classes.',
        bn: 'মিক্সিন তৈরি করতে @mixin-এর পর নাম ও ঐচ্ছিক প্যারামিটার দিন। কোলন দিয়ে ডিফল্ট মান নির্ধারণ করে প্যারামিটারকে ঐচ্ছিক করা যায়। ব্যবহারকারীর পাঠানো অতিরিক্ত স্টাইল বা মিডিয়া কোয়ারি গ্রহণ করতে @content ব্যবহার করুন। কোনো আর্গুমেন্ট ছাড়া স্থির স্টাইলের ক্ষেত্রে %placeholder তৈরি করে বিভিন্ন ক্লাসের ভেতরে তা extend করুন।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'mixins-and-extend.scss',
      caption: {
        en: 'Demonstrating parameterized mixins, @content slots, silent placeholders, and @extend.',
        bn: 'প্যারামিটারযুক্ত মিক্সিন, @content স্লট, সাইলেন্ট প্লেসহোল্ডার এবং @extend-এর বাস্তব প্রয়োগ।'
      },
      code: `// 1. Parameterized mixin with default arguments
@mixin button-theme($bg: #2563eb, $color: #ffffff, $radius: 4px) {
  background-color: $bg;
  color: $color;
  border-radius: $radius;
  display: inline-block;
  padding: 8px 16px;
}

// 2. Mixin using @content for responsive breakpoints
@mixin respond-above($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// 3. Silent placeholder for static utility styles
%visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

// 4. Applying mixins with custom arguments
.btn-primary {
  @include button-theme; // uses defaults (#2563eb, 4px)
}

.btn-danger {
  @include button-theme($bg: #ef4444, $radius: 8px); // overrides
}

// 5. Extending silent placeholder (grouped in compiled CSS)
.sr-only {
  @extend %visually-hidden;
}

.screen-reader-text {
  @extend %visually-hidden;
}

// 6. Using @content slot
.container {
  width: 100%;
  @include respond-above(768px) {
    max-width: 720px;
  }
}`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Internal mechanism: selector rewriting versus code inlining',
        bn: 'অভ্যন্তরীণ কার্যপ্রণালী: সিলেক্টর রূপান্তর বনাম কোড ইনলাইনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The compiler handles mixins and placeholders during two distinct compilation passes. When expanding an @include, the AST parser clones the declaration nodes and splices them directly into the calling block. In contrast, when resolving an @extend, the compiler performs global selector graph manipulation. It searches all rules matching the target and appends the extending selector, preserving surrounding context.',
        bn: 'কম্পাইলার দুটি আলাদা ধাপে মিক্সিন এবং প্লেসহোল্ডার প্রসেস করে। @include চালানোর সময় AST পার্সার সরাসরি নিয়মগুলোকে ক্লোন করে সংশ্লিষ্ট ব্লকে বসিয়ে দেয়। অপরদিকে @extend সমাধানের সময় কম্পাইলার পুরো সিলেক্টর গ্রাফ পর্যবেক্ষণ করে। এটি মূল টার্গেটের সাথে সংশ্লিষ্ট সিলেক্টরকে খুঁজে কমা দিয়ে নতুন সিলেক্টরটি যুক্ত করে দেয়।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices: when to use mixins and when to use extend',
        bn: 'সেরা চর্চা: কখন মিক্সিন এবং কখন extend ব্যবহার করবেন'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Use mixins whenever styles require parameters, conditional logic, or responsive media queries.',
          bn: 'স্টাইলে প্যারামিটার, শর্তযুক্ত লজিক বা মিডিয়া কোয়ারি প্রয়োজন হলে সর্বদা মিক্সিন ব্যবহার করুন।'
        },
        {
          en: 'Use silent placeholders (%name) with @extend only for genuinely static declarations that never vary between callers.',
          bn: 'কেবলমাত্র সম্পূর্ণ স্থির ও অপরিবর্তনীয় স্টাইলের ক্ষেত্রে %name প্লেসহোল্ডার ও @extend ব্যবহার করুন।'
        },
        {
          en: 'Never extend real class names (e.g., @extend .btn) because doing so rewrites nested selector combinations unpredictably across all files.',
          bn: 'কখনো বাস্তব ক্লাস নেম extend করবেন না (যেমন @extend .btn), কারণ এতে অপ্রত্যাশিতভাবে সব ফাইলের সিলেক্টর পরিবর্তিত হয়ে যেতে পারে।'
        },
        {
          en: 'Remember that @extend cannot reach outside @media blocks: extending an outer selector from inside a media query throws a compiler error.',
          bn: 'মনে রাখবেন @extend মিডিয়া ব্লকের বাইরে পৌঁছাতে পারে না: মিডিয়া কোয়ারির ভেতর থেকে বাইরের কোনো নিয়ম extend করলে কম্পাইলার এরর দেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: the @media boundary error in @extend',
        bn: 'সমস্যা সমাধান: @extend-এ @media বাউন্ডারি সংক্রান্ত ত্রুটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A classic Sass error is: You may not @extend an outer selector from within @media. If you define %card outside a media query and attempt to write @media (min-width: 600px) { .sidebar { @extend %card; } }, Dart Sass halts. The compiler refuses to group selectors because doing so would change when the rules apply across different viewports. To resolve this, convert the placeholder into a mixin and @include it instead.',
        bn: 'Sass-এর একটি বহুল পরিচিত এরর হলো: You may not @extend an outer selector from within @media। আপনি বাইরে %card তৈরি করে যদি কোনো মিডিয়া কোয়ারির ভেতর থেকে @extend %card লেখেন, তবে কম্পাইলার আটকে যাবে। ভিন্ন ভিউপোর্টের নিয়মে অসামঞ্জস্য রোধ করতে কম্পাইলার এই অনুমতি দেয় না। এর সহজ সমাধান হলো প্লেসহোল্ডারের বদলে মিক্সিন তৈরি করে @include করা।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: how major libraries organize utilities',
        bn: 'বাস্তব স্থাপত্য: জনপ্রিয় লাইব্রেরিতে ইউটিলিটি সংগঠন'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bootstrap uses mixins extensively for responsive grid generation, breakpoint loops, and customizable component variants.',
          bn: 'বুটস্ট্র্যাপ তার রেসপনসিভ গ্রিড তৈরি, ব্রেকপয়েন্ট লুপ এবং কাস্টমাইজযোগ্য ভ্যারিয়েন্টে ব্যাপকভাবে মিক্সিন ব্যবহার করে।'
        },
        {
          en: 'CSS utility libraries rely on silent placeholders to generate lightweight helper classes like clearfix and visually-hidden without code duplication.',
          bn: 'CSS ইউটিলিটি লাইব্রেরিগুলো কোড ডুপ্লিকেশন ছাড়া clearfix বা visually-hidden-এর মতো ক্লাস তৈরি করতে সাইলেন্ট প্লেসহোল্ডার ব্যবহার করে।'
        },
        {
          en: 'Design frameworks pass custom color palettes into button mixins, generating complete hover, active, and focus states with zero boilerplate.',
          bn: 'ডিজাইন ফ্রেমওয়ার্কগুলো বাটন মিক্সিনে কালার প্যালেট পাস করে স্বয়ংক্রিয়ভাবে হোভার, অ্যাক্টিভ ও ফোকাস স্টেট তৈরি করে নেয়।'
        },
        {
          en: 'Production build tools verify that extended placeholders group related accessibility and reset styles cleanly into single shared rules.',
          bn: 'প্রোডাকশন বিল্ড টুল নিশ্চিত করে যে প্লেসহোল্ডারগুলো অ্যাক্সেসিবিলিটি ও রিসেট স্টাইলকে একটি একক নিয়মে সুন্দরভাবে একত্রিত করেছে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: functions, control directives, and error handling',
        bn: 'পরবর্তী ধাপ: ফাংশন, কন্ট্রোল ডিরেক্টিভ এবং এরর হ্যান্ডলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you can share and structure CSS declarations with mixins and placeholders, you are ready for dynamic programmatic logic. In Lesson 5, we explore custom functions (@function and @return), conditionals (@if and @else), loops (@for, @each, and @while), and error guards (@error and @warn).',
        bn: 'এখন আপনি মিক্সিন ও প্লেসহোল্ডার দিয়ে স্টাইল পুনর্ব্যবহারে দক্ষ। পরবর্তী ৫ম পাঠে আমরা Sass-এর প্রোগ্রামেটিক লজিক অন্বেষণ করব: কাস্টম ফাংশন (@function ও @return), শর্তযুক্ত লজিক (@if ও @else), লুপ (@for, @each, @while) এবং এরর গার্ড (@error ও @warn)।',
      }
    }
  ],
  exercises: [
    {
      id: 'sha-ex-1',
      kind: 'mcq',
      topic: 'mixin declaration copying',
      question: {
        en: 'What does the @include directive do when calling a mixin inside a selector block?',
        bn: 'সিলেক্টর ব্লকের ভেতর @include দিয়ে কোনো মিক্সিন কল করলে কী ঘটে?'
      },
      options: [
        {
          en: 'It copies the declarations defined inside the mixin directly into the calling selector block.',
          bn: 'এটি মিক্সিনের ভেতরের সব ডিক্লারেশন সংশ্লিষ্ট সিলেক্টর ব্লকে সরাসরি কপি করে বসিয়ে দেয়।'
        },
        {
          en: 'It merges all calling selectors into a single comma-separated rule in the stylesheet.',
          bn: 'এটি সব কল করা সিলেক্টরকে কমা দিয়ে একটি একক নিয়মে একত্রিত করে।'
        },
        {
          en: 'It loads an external CSS file asynchronously from a content delivery network.',
          bn: 'এটি সিডিএন থেকে অ্যাসিনক্রোনাস পদ্ধতিতে এক্সটারনাল CSS ফাইল লোড করে।'
        },
        {
          en: 'It permanently deletes the mixin definition from memory.',
          bn: 'এটি মেমরি থেকে মিক্সিনের সংজ্ঞা চিরতরে মুছে দেয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of a mixin as copying and pasting style declarations at compile time.',
        bn: 'মিক্সিনকে বিল্ড-টাইমে স্টাইল কপি এবং পেস্ট করার একটি সুবিধা হিসেবে ভাবুন।'
      },
      explanation: {
        en: 'A mixin inlines its declarations into each calling selector. This guarantees independent rules and styles, though repeated calls increase output size.',
        bn: 'মিক্সিন তার ভেতরের নিয়মগুলোকে কল করা সিলেক্টরে সরাসরি বসিয়ে দেয়। এতে প্রতিটি সিলেক্টর স্বাধীন থাকে, তবে বারবার ডাকলে ফাইলের আকার কিছুটা বৃদ্ধি পায়।'
      }
    },
    {
      id: 'sha-ex-2',
      kind: 'mcq',
      topic: 'silent placeholder behavior',
      question: {
        en: 'Why is a selector defined with a percent sign (e.g., %card-base) called a "silent" placeholder?',
        bn: 'পার্সেন্ট চিহ্নযুক্ত সিলেক্টরকে (যেমন %card-base) কেন "সাইলেন্ট" প্লেসহোল্ডার বলা হয়?'
      },
      options: [
        {
          en: 'It emits zero CSS output on its own until another selector explicitly extends it using @extend.',
          bn: 'অন্য কোনো সিলেক্টর @extend দিয়ে না ডাকা পর্যন্ত এটি আউটপুট CSS-এ সম্পূর্ণ অনুপস্থিত থাকে।'
        },
        {
          en: 'It silences browser audio and notification popups on the website.',
          bn: 'এটি ওয়েবসাইটের ব্রাউজার অডিও ও নোটিফিকেশন পপআপ বন্ধ করে দেয়।'
        },
        {
          en: 'It prevents search engines from indexing the compiled CSS file.',
          bn: 'এটি সার্চ ইঞ্জিনকে কম্পাইল করা CSS ফাইল ইনডেক্স করতে বাধা দেয়।'
        },
        {
          en: 'It disables all hover and animation effects on mobile screens.',
          bn: 'এটি মোবাইল ডিভাইসে সব হোভার ও অ্যানিমেশন ইফেক্ট নিষ্ক্রিয় করে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a placeholder is never extended, it leaves no trace in the compiled CSS.',
        bn: 'কোনো প্লেসহোল্ডার extend না করা হলে কম্পাইল করা ফাইলে তার কোনো অস্তিত্ব থাকে না।'
      },
      explanation: {
        en: 'Placeholders are silent because they exist solely to be extended. Unlike regular CSS classes, unused placeholders never add dead weight to production bundles.',
        bn: 'প্লেসহোল্ডারগুলো সাইলেন্ট কারণ এরা কেবল extend হওয়ার জন্যই তৈরি হয়। অব্যবহৃত প্লেসহোল্ডার প্রোডাকশন ফাইলে কোনো অপ্রয়োজনীয় কোড যোগ করে না।'
      }
    },
    {
      id: 'sha-ex-3',
      kind: 'mcq',
      topic: 'media query extend limitation',
      question: {
        en: 'Why does Dart Sass reject @extend when used inside an @media query to extend an outer selector?',
        bn: 'মিডিয়া কোয়ারির ভেতর থেকে বাইরের কোনো নিয়ম extend করলে Dart Sass কেন তা প্রত্যাখ্যান করে?'
      },
      options: [
        {
          en: 'Grouping an outer selector with an inner media rule would unpredictably alter rule applicability across different screen sizes.',
          bn: 'বাইরের সিলেক্টরকে ভেতরের মিডিয়া নিয়মের সাথে জোড়া লাগালে ভিন্ন স্ক্রিন সাইজে স্টাইলের কার্যকারিতা অপ্রত্যাশিতভাবে বদলে যাবে।'
        },
        {
          en: 'Dart Sass does not support responsive design breakpoints.',
          bn: 'Dart Sass রেসপনসিভ ডিজাইন ব্রেকপয়েন্ট সমর্থন করে না।'
        },
        {
          en: 'Media queries can only contain JavaScript code, not CSS rules.',
          bn: 'মিডিয়া কোয়ারিতে কেবল জাভাস্ক্রিপ্ট কোড রাখা যায়, CSS নিয়ম নয়।'
        },
        {
          en: 'The @extend directive was completely removed from the language in 2021.',
          bn: '@extend নির্দেশটি ২০২১ সালে ভাষা থেকে সম্পূর্ণ বাতিল করা হয়েছে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'A selector outside a media query applies everywhere, while an inside selector applies only conditionally.',
        bn: 'মিডিয়া কোয়ারির বাইরের নিয়ম সর্বদা কার্যকর থাকে, কিন্তু ভেতরের নিয়ম কেবল নির্দিষ্ট শর্তে চলে।'
      },
      explanation: {
        en: 'Sass cannot cleanly merge selector lists across media query boundaries without duplicating rules or corrupting the cascade. The compiler strictly disallows cross-media extends.',
        bn: 'মিডিয়া সীমানার এপার-ওপারে সিলেক্টর একত্রিত করতে গেলে ক্যাসকেডের ধারাবাহিকতা নষ্ট হয়। তাই Sass কম্পাইলার এই ধরনের extend পুরোপুরি নিষিদ্ধ করেছে।'
      }
    },
    {
      id: 'sha-ex-4',
      kind: 'predict',
      topic: 'predicting placeholder comma grouping',
      question: {
        en: 'Predict the compiled CSS output for: %pill { border-radius: 50px; } .tag { @extend %pill; } .chip { @extend %pill; }',
        bn: '%pill { border-radius: 50px; } .tag { @extend %pill; } .chip { @extend %pill; } — এর কম্পাইল করা CSS আউটপুট কী হবে?'
      },
      answer: '.tag, .chip { border-radius: 50px; }',
      accept: [
        '.tag, .chip { border-radius: 50px; }',
        '.chip, .tag { border-radius: 50px; }',
        '.tag, .chip { border-radius: 50px }'
      ],
      hint: {
        en: 'Both extending classes are merged into a comma-separated list sharing the placeholder declaration.',
        bn: 'উভয় ক্লাস কমা দিয়ে যুক্ত হয়ে প্লেসহোল্ডারের নিয়মটি একসাথে গ্রহণ করে।'
      },
      explanation: {
        en: 'Dart Sass groups the extending selectors .tag and .chip with a comma under the single shared rule .tag, .chip { border-radius: 50px; }.',
        bn: 'Dart Sass এক্সটেন্ড করা সিলেক্টর .tag এবং .chip-কে কমা দিয়ে যুক্ত করে একটি একক নিয়মে .tag, .chip { border-radius: 50px; } তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'sharing-quiz',
    title: {
      en: 'Mixins and Placeholders Quiz',
      bn: 'মিক্সিন এবং প্লেসহোল্ডার কুইজ'
    },
    questions: [
      {
        id: 'mq1',
        kind: 'mcq',
        topic: 'content directive slot',
        question: {
          en: 'What is the role of the @content directive when placed inside a Sass mixin?',
          bn: 'Sass মিক্সিনের ভেতরে @content ডিরেক্টিভের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It acts as an insertion slot where a block of CSS passed at the @include call site is rendered.',
            bn: 'এটি একটি স্লট হিসেবে কাজ করে যেখানে @include দিয়ে পাঠানো যেকোনো CSS কোড ব্লক যুক্ত হয়ে যায়।'
          },
          {
            en: 'It prints the table of contents of the stylesheet in comments.',
            bn: 'এটি কমেন্ট আকারে স্টাইলশিটের বিষয়সূচি লিখে দেয়।'
          },
          {
            en: 'It forces the browser to re-render the page content immediately.',
            bn: 'এটি ব্রাউজারকে পেজের কন্টেন্ট তাৎক্ষণিকভাবে পুনরায় রেন্ডার করতে বাধ্য করে।'
          },
          {
            en: 'It converts the mixin into a JavaScript callback function.',
            bn: 'এটি মিক্সিনকে জাভাস্ক্রিপ্ট কলব্যাক ফাংশনে রূপান্তরিত করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'You can pass a block of code inside curly braces when including a mixin with @content.',
          bn: '@contentযুক্ত মিক্সিন ডাকার সময় কার্লি ব্র্যাকেটে বাড়তি কোড পাঠানো যায়।'
        },
        explanation: {
          en: 'The @content block allows mixins to be parameterized with entire code blocks, essential for responsive media query helpers and layout wrappers.',
          bn: '@content মিক্সিনের ভেতর পুরো কোড ব্লক গ্রহণ করার সুযোগ দেয়, যা রেসপনসিভ ডিজাইন এবং লেআউট মিক্সিনের জন্য অত্যন্ত প্রয়োজনীয়।'
        }
      },
      {
        id: 'mq2',
        kind: 'mcq',
        topic: 'keyword arguments in mixins',
        question: {
          en: 'How can you pass arguments to a mixin out of their declared order in Sass?',
          bn: 'Sass মিক্সিনে ঘোষিত ক্রম পরিবর্তন করে কীভাবে আর্গুমেন্ট পাঠানো যায়?'
        },
        options: [
          {
            en: 'By using named keyword arguments, such as @include my-mixin($radius: 10px, $color: red);',
            bn: 'নামযুক্ত কিওয়ার্ড আর্গুমেন্ট ব্যবহারের মাধ্যমে, যেমন @include my-mixin($radius: 10px, $color: red);'
          },
          {
            en: 'By separating arguments with semicolons instead of commas.',
            bn: 'কমার বদলে সেমিকোলন দিয়ে আর্গুমেন্ট আলাদা করার মাধ্যমে।'
          },
          {
            en: 'Arguments can never be passed out of order in Sass.',
            bn: 'Sass-এ ক্রম পরিবর্তন করে কখনো আর্গুমেন্ট পাঠানো যায় না।'
          },
          {
            en: 'By wrapping the argument list in a JSON string.',
            bn: 'আর্গুমেন্টগুলোকে JSON স্ট্রিংয়ে আবদ্ধ করার মাধ্যমে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Explicitly state the parameter name with a dollar sign and colon when calling the mixin.',
          bn: 'মিক্সিন ডাকার সময় ডলার চিহ্ন ও কোলন দিয়ে সরাসরি প্যারামিটারের নাম উল্লেখ করুন।'
        },
        explanation: {
          en: 'Sass supports keyword arguments. When calling an @include, you can explicitly name arguments ($param: value) in any order, skipping optional parameters that have defaults.',
          bn: 'Sass কিওয়ার্ড আর্গুমেন্ট সমর্থন করে। কল করার সময় যেকোনো ক্রমে নাম দিয়ে ($param: value) আর্গুমেন্ট পাঠানো যায় এবং ডিফল্ট মানযুক্ত প্যারামিটার এড়ানো যায়।'
        }
      },
      {
        id: 'mq3',
        kind: 'mcq',
        topic: 'danger of extending concrete classes',
        question: {
          en: 'Why is using @extend on a real class (e.g., @extend .btn) considered an anti-pattern compared to extending %placeholders?',
          bn: '%placeholders-এর বদলে বাস্তব ক্লাসকে @extend করাকে (যেমন @extend .btn) কেন অনুপযুক্ত মনে করা হয়?'
        },
        options: [
          {
            en: 'It rewrites all descendant rules mentioning .btn throughout the stylesheet, potentially creating unexpected selector collisions.',
            bn: 'এটি পুরো স্টাইলশিটে .btn থাকা সব ডিসেন্ডেন্ট রুল পরিবর্তন করে দেয়, যা অপ্রত্যাশিত সিলেক্টর সংঘর্ষ সৃষ্টি করে।'
          },
          {
            en: 'Real classes run ten times slower in the browser rendering engine.',
            bn: 'বাস্তব ক্লাসগুলো ব্রাউজার রেন্ডারিং ইঞ্জিনে ১০ গুণ ধীরগতিতে চলে।'
          },
          {
            en: 'Dart Sass forbids extending classes and immediately halts compilation.',
            bn: 'Dart Sass ক্লাস extend করা নিষিদ্ধ করেছে এবং তাৎক্ষণিক কম্পাইলেশন থামিয়ে দেয়।'
          },
          {
            en: 'Extending classes disables CSS transitions and hover pseudo-classes.',
            bn: 'ক্লাস extend করলে CSS ট্রানজিশন এবং হোভার সিউডো-ক্লাস নিষ্ক্রিয় হয়ে যায়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Extending a real class touches every selector in the project that mentions that class name.',
          bn: 'বাস্তব ক্লাস extend করলে প্রজেক্টের যেখানে যেখানে সেই ক্লাস আছে সব সিলেক্টর প্রভাবিত হয়।'
        },
        explanation: {
          en: 'Extending a real class modifies every rule in the codebase that uses that class (like .header .btn). This causes selector explosion and unintended style leakage. Silent placeholders avoid this completely.',
          bn: 'বাস্তব ক্লাস extend করলে সেই ক্লাসের সব সংযুক্ত রুল পরিবর্তিত হয়ে যায়। এতে কোডের জটিলতা বাড়ে ও অবাঞ্ছিত স্টাইল ছড়িয়ে পড়ে। সাইলেন্ট প্লেসহোল্ডার এই ঝুঁকি পুরোপুরি দূর করে।'
        }
      },
      {
        id: 'mq4',
        kind: 'mcq',
        topic: 'variable arguments varargs',
        question: {
          en: 'How do you define a mixin that accepts an arbitrary number of arguments (varargs), such as multiple box-shadow layers?',
          bn: 'একাধিক বক্স-শ্যাডোর মতো অনির্দিষ্ট সংখ্যক আর্গুমেন্ট গ্রহণ করতে পারে এমন মিক্সিন কীভাবে সংজ্ঞায়িত করা হয়?'
        },
        options: [
          {
            en: 'By adding an ellipsis (...) after the parameter name, such as @mixin shadow($shadows...) { ... }',
            bn: 'প্যারামিটারের নামের শেষে তিনটি ডট (...) দিয়ে, যেমন @mixin shadow($shadows...) { ... }'
          },
          {
            en: 'By declaring an array literal [$shadows] in the mixin signature.',
            bn: 'মিক্সিনের শুরুতে অ্যারে লিটারেল [$shadows] ঘোষণা করে।'
          },
          {
            en: 'By writing multiple mixins with numeric suffixes like shadow-1 and shadow-2.',
            bn: 'shadow-1 ও shadow-2-এর মতো সংখ্যাযুক্ত একাধিক মিক্সিন লিখে।'
          },
          {
            en: 'Sass does not support variable argument lists.',
            bn: 'Sass পরিবর্তনশীল সংখ্যক আর্গুমেন্ট সমর্থন করে না।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Like the rest parameter syntax in JavaScript, Sass uses three dots.',
          bn: 'জাভাস্ক্রিপ্টের রেস্ট প্যারামিটারের মতো Sass-এও তিনটি ডট ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Adding three dots ($param...) allows a mixin to collect any number of comma-separated arguments into a single list, ideal for multi-layer shadows, transitions, or transforms.',
          bn: 'প্যারামিটারের শেষে তিনটি ডট ($param...) দিলে মিক্সিন যেকোনো সংখ্যক আর্গুমেন্ট গ্রহণ করতে পারে, যা বহু-স্তরের শ্যাডো বা ট্রানজিশনে অত্যন্ত কার্যকর।'
        }
      },
      {
        id: 'mq5',
        kind: 'predict',
        topic: 'symbol for silent placeholders',
        question: {
          en: 'Which single character prefix defines a silent placeholder selector in Sass (e.g., ______button-base)?',
          bn: 'Sass-এ সাইলেন্ট প্লেসহোল্ডার সিলেক্টর সংজ্ঞায়িত করতে কোন একক চিহ্নটি প্রিফিক্স হিসেবে ব্যবহৃত হয় (যেমন ______button-base)?'
        },
        answer: '%',
        accept: [
          '%',
          'percent',
          'percentage'
        ],
        hint: {
          en: 'Enter the percent symbol used before the placeholder name.',
          bn: 'প্লেসহোল্ডারের নামের পূর্বে ব্যবহৃত পার্সেন্ট চিহ্নটি লিখুন।'
        },
        explanation: {
          en: 'The percent sign (%) marks a selector as a silent placeholder. It emits zero CSS until referenced by an @extend directive.',
          bn: 'পার্সেন্ট চিহ্ন (%) কোনো সিলেক্টরকে সাইলেন্ট প্লেসহোল্ডার হিসেবে চিহ্নিত করে। @extend দিয়ে না ডাকা পর্যন্ত এটি কোনো CSS তৈরি করে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-shape-of-a-value',
    title: {
      en: 'The Shape of a Value: Functions, Control Directives, and Error Handling',
      bn: 'ফাংশন, কন্ট্রোল ডিরেক্টিভ এবং এরর হ্যান্ডলিং'
    }
  }
};
