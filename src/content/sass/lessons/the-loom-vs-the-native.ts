import type { Lesson } from '../../../lib/types';

export const TheLoomVsTheNativeLesson: Lesson = {
  slug: 'the-loom-vs-the-native',
  tech: 'sass',
  title: {
    en: 'Modern Sass vs Native CSS — Custom Properties, Native Nesting, Cascade Layers, and Hybrid Architecture',
    bn: 'আধুনিক Sass বনাম নেটিভ CSS: কাস্টম প্রপার্টি, নেটিভ নেস্টিং, ক্যাসকেড লেয়ার এবং হাইব্রিড আর্কিটেকচার'
  },
  summary: {
    en: 'Modern CSS has absorbed several features once unique to Sass, including CSS custom properties, native nesting, cascade layers (@layer), and color-mix functions. However, Sass remains indispensable for build-time generation: iterating through design token maps, calculating utility grids, validating configurations with @error, and compiling modular architectures. Modern web teams embrace a hybrid strategy, combining compile-time Sass logic with runtime CSS custom properties.',
    bn: 'আধুনিক CSS আগে কেবল Sass-এ থাকা অনেক সুবিধা নিজের ভেতর অন্তর্ভুক্ত করেছে, যেমন CSS কাস্টম প্রপার্টি, নেটিভ নেস্টিং, ক্যাসকেড লেয়ার (@layer) এবং color-mix ফাংশন। তা সত্ত্বেও বিল্ড-টাইম কাজের জন্য Sass আজও অপরিহার্য: ডিজাইন টোকেন ম্যাপ থেকে ইউটিলিটি গ্রিড তৈরি, @error দিয়ে ভ্যালিডেশন এবং মডুলার আর্কিটেকচার তৈরি। আধুনিক ওয়েব টিমগুলো একটি হাইব্রিড কৌশল গ্রহণ করে, যেখানে বিল্ড-টাইমে Sass এবং রানটাইমে CSS কাস্টম প্রপার্টি একসাথে কাজ করে।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'How native CSS evolved and what remains unique to Sass',
        bn: 'নেটিভ CSS-এর বিবর্তন এবং Sass-এর নিজস্ব স্বকীয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Over the last decade, web standards added features inspired by preprocessors. CSS custom properties (`var(--name)`) arrived in 2016, offering runtime reactivity that preprocessors cannot match. In 2023, browsers standardized native CSS nesting, allowing nested syntax without any compiler. Yet Sass retains unique capabilities that standard CSS cannot perform: looping over structured data, conditional code execution, compile-time unit arithmetic, and strict modular encapsulation.',
        bn: 'বিগত এক দশকে ওয়েব স্ট্যান্ডার্ডে প্রিপ্রসেসর দ্বারা অনুপ্রাণিত বহু আধুনিক ফিচার যুক্ত হয়েছে। ২০১৬ সালে CSS কাস্টম প্রপার্টি (`var(--name)`) চালু হয় যা রানটাইমে গতিশীলভাবে মান পরিবর্তন করতে পারে। ২০২৩ সালে ব্রাউজারগুলোতে নেটিভ CSS নেস্টিং মানসম্মত হয়, ফলে কম্পাইলার ছাড়াই নেস্টিং লেখা সম্ভব হয়। তবুও Sass-এর নিজস্ব কিছু ক্ষমতা রয়েছে যা সাধারণ CSS পারে না: ডেটা দিয়ে লুপ চালানো, শর্তাধীন কোড তৈরি, বিল্ড-টাইম গাণিতিক হিসাব এবং মডুলার এনক্যাপসুলেশন।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'CSS custom properties (variables)',
          def: {
            en: 'runtime variables defined with --name and queried via var(--name); they cascade through the DOM and respond dynamically to JavaScript',
            bn: '--name দিয়ে সংজ্ঞায়িত এবং var(--name) দিয়ে ব্যবহৃত রানটাইম ভেরিয়েবল; এরা ডমে ক্যাসকেড করে এবং জাভাস্ক্রিপ্টে পরিবর্তনশীল'
          }
        },
        {
          term: 'native CSS nesting',
          def: {
            en: 'browser-native nesting introduced in 2023, allowing selectors to be nested inside parent rules directly in vanilla CSS',
            bn: '২০২৩ সালে ব্রাউজারে চালু হওয়া নেটিভ নেস্টিং, যা সাধারণ CSS-এই সরাসরি সিলেক্টরের ভেতর সিলেক্টর লেখার সুযোগ দেয়'
          }
        },
        {
          term: 'cascade layers (@layer)',
          def: {
            en: 'CSS at-rule that defines explicit precedence orders for styles regardless of selector specificity',
            bn: 'সিলেক্টর স্পেসিফিসিটি নির্বিশেষে স্টাইলের অগ্রাধিকারের ক্রম নির্ধারণ করার CSS নির্দেশ'
          }
        },
        {
          term: 'hybrid architecture',
          def: {
            en: 'the modern practice of using Sass for build-time token generation and CSS custom properties for dynamic runtime theming',
            bn: 'বিল্ড-টাইমে টোকেন তৈরিতে Sass এবং ডায়নামিক থিমিংয়ে CSS কাস্টম প্রপার্টি একসাথে ব্যবহারের আধুনিক কৌশল'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why the division of labor between build time and runtime matters',
        bn: 'কেন বিল্ড-টাইম এবং রানটাইমের মধ্যে শ্রম-বিভাজন গুরুত্বপূর্ণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A key architectural skill is knowing which problems belong at build time and which belong at runtime. Values that depend on user actions, screen sizes, or device preferences (like dark mode toggles) belong in runtime CSS custom properties. Conversely, values that govern repetitive utility generation (like 12 grid columns or 50 margin classes) belong in compile-time Sass loops. Generating static CSS in advance saves browser CPU cycles and keeps client execution fast.',
        bn: 'কোন সমস্যা বিল্ড-টাইমে সমাধান করতে হবে আর কোনটি রানটাইমে, তা জানা একটি গুরুত্বপূর্ণ স্থাপত্য দক্ষতা। ব্যবহারকারীর ক্লিক বা ডার্ক মোডের মতো ডিভাইসের সেটিংসের ওপর নির্ভরশীল মানগুলো রানটাইম CSS কাস্টম প্রপার্টিতে থাকা উচিত। অপরদিকে ১২টি গ্রিড কলাম বা ৫০টি মার্জিন ক্লাসের মতো পুনরাবৃত্তিমূলক কোড বিল্ড-টাইমে Sass লুপ দিয়ে তৈরি করা উচিত। আগে থেকে CSS তৈরি করে রাখলে ব্রাউজারের সিপিইউ বাঁচে এবং সাইট দ্রুত লোড হয়।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to build a modern hybrid stylesheet architecture',
        bn: 'কীভাবে একটি আধুনিক হাইব্রিড স্টাইলশিট আর্কিটেকচার তৈরি করবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'In a modern hybrid architecture, store your core design tokens inside Sass maps. Use an @each loop to export these tokens as native CSS custom properties inside a :root rule block. Then write your component styles referencing those CSS custom properties. If dark mode is activated, a simple data-theme="dark" attribute changes the custom property values at runtime with zero recompilation needed.',
        bn: 'একটি আধুনিক হাইব্রিড আর্কিটেকচারে মূল ডিজাইন টোকেনগুলো Sass ম্যাপে সংরক্ষণ করুন। একটি @each লুপের সাহায্যে :root ব্লকে এই টোকেনগুলোকে নেটিভ CSS কাস্টম প্রপার্টি হিসেবে এক্সপোর্ট করুন। এরপর কম্পোনেন্ট স্টাইলে সরাসরি সেই কাস্টম প্রপার্টিগুলো ব্যবহার করুন। ডার্ক মোড চালু হলে শুধুমাত্র data-theme="dark" অ্যাট্রিবিউট পরিবর্তনের মাধ্যমেই রানটাইমে সম্পূর্ণ থিম বদলে যাবে, নতুন করে কম্পাইল করতে হবে না।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'hybrid-architecture.scss',
      caption: {
        en: 'Hybrid design system combining Sass map generation with native CSS custom properties.',
        bn: 'Sass ম্যাপ জেনারেশন ও নেটিভ CSS কাস্টম প্রপার্টির সমন্বয়ে তৈরি হাইব্রিড ডিজাইন সিস্টেম।'
      },
      code: `@use "sass:map";

// 1. Sass design token map
$theme-tokens: (
  "bg": #ffffff,
  "text": #1f2937,
  "primary": #2563eb
);

$dark-tokens: (
  "bg": #111827,
  "text": #f9fafb,
  "primary": #3b82f6
);

// 2. Export tokens to native CSS custom properties (:root)
:root {
  @each $name, $val in $theme-tokens {
    --color-#{$name}: #{$val};
  }
}

// 3. Dark mode runtime override without recompilation
[data-theme="dark"] {
  @each $name, $val in $dark-tokens {
    --color-#{$name}: #{$val};
  }
}

// 4. Components use native custom properties
.card {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  padding: 16px;
}`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Internal compiler mechanics: static literals versus live variables',
        bn: 'কম্পাইলারের অভ্যন্তরীণ কার্যপ্রণালী: স্ট্যাটিক লিটারেল বনাম জীবন্ত ভেরিয়েবল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The fundamental difference between Sass variables and CSS custom properties lies in the lifecycle of their values. When Dart Sass processes $color: blue, it resolves the expression into the literal text "blue" and discards the variable name entirely. In contrast, when the browser parses var(--color), it establishes a dynamic dependency graph in DOM memory. If --color changes on a parent element, the browser automatically recalculates computed styles for all descendant nodes.',
        bn: 'Sass ভেরিয়েবল এবং CSS কাস্টম প্রপার্টির প্রধান পার্থক্য হলো তাদের জীবনচক্রে। Dart Sass যখন $color: blue প্রসেস করে, তখন এটি মানটিকে সরাসরি "blue" হিসেবে বসিয়ে ভেরিয়েবলের নাম মুছে ফেলে। এর বিপরীতে ব্রাউজার যখন var(--color) পড়ে, তখন ডম মেমরিতে একটি সক্রিয় সংযোগ তৈরি হয়। প্যারেন্ট উপাদানে --color-এর মান বদলালে ব্রাউজার স্বয়ংক্রিয়ভাবে তার ভেতরের সব উপাদানের স্টাইল নতুন করে হিসেব করে নেয়।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Decision framework: when to choose Sass vs Vanilla CSS',
        bn: 'সিদ্ধান্তের কাঠামো: কখন Sass এবং কখন ভ্যানিলা CSS বেছে নেবেন'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Choose Vanilla CSS for landing pages, simple blogs, and projects where avoiding build steps and bundler dependencies is a priority.',
          bn: 'ল্যান্ডিং পেজ, সাধারণ ব্লগ এবং যেখানে কোনো বিল্ড স্টেপ বা জটিল বান্ডলার না রাখাই লক্ষ্য, সেখানে ভ্যানিলা CSS ব্যবহার করুন।'
        },
        {
          en: 'Choose Sass for complex enterprise applications, design systems with hundreds of tokens, and frameworks requiring automated utility class loops.',
          bn: 'বড় প্রতিষ্ঠানের অ্যাপ্লিকেশন, শত শত টোকেনযুক্ত ডিজাইন সিস্টেম এবং স্বয়ংক্রিয় ইউটিলিটি ক্লাস তৈরিতে Sass ব্যবহার করুন।'
        },
        {
          en: 'Use native cascade layers (@layer) in your compiled output to establish strict precedence rules between resets, components, and overrides.',
          bn: 'রিসেট, কম্পোনেন্ট ও ওভাররাইডের মধ্যে সুনির্দিষ্ট অগ্রাধিকার বজায় রাখতে আউটপুটে নেটিভ ক্যাসকেড লেয়ার (@layer) ব্যবহার করুন।'
        },
        {
          en: 'Adopt the hybrid architecture on design system teams to achieve maximum compile-time generation alongside dynamic runtime theming.',
          bn: 'ডিজাইন সিস্টেমে হাইব্রিড কৌশল প্রয়োগ করে বিল্ড-টাইম অটোমেশন এবং রানটাইম ডায়নামিক থিমিংয়ের সেরা সমন্বয় অর্জন করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: nesting specificity conflicts in native vs Sass CSS',
        bn: 'সমস্যা সমাধান: নেটিভ ও Sass CSS-এ নেস্টিং স্পেসিফিসিটি জটিলতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Be aware of selector weight differences between Sass nesting and native CSS nesting. Sass simply concatenates strings (.card .title has standard specificity [0, 2, 0]). Native CSS nesting evaluates nested rules through the :is() pseudo-class. Because :is() takes the priority of its most specific selector inside a list, native nesting can unexpectedly raise selector weight higher than anticipated. Always verify cascade precedence when migrating between Sass and native CSS.',
        bn: 'Sass নেস্টিং এবং নেটিভ CSS নেস্টিংয়ের অগ্রাধিকারের পার্থক্যের ব্যাপারে সতর্ক থাকুন। Sass সরাসরি স্ট্রিং জোড়া লাগায় (.card .title-এর স্পেসিফিসিটি সাধারণ [0, 2, 0])। কিন্তু নেটিভ CSS নেস্টিং ভেতরের নিয়মগুলোকে :is() সিউডো-ক্লাসের মাধ্যমে সমাধান করে। যেহেতু :is() তার ভেতরের সর্বোচ্চ সিলেক্টরের অগ্রাধিকার গ্রহণ করে, তাই নেটিভ নেস্টিংয়ে কখনো কখনো স্টাইলের ওজন অপ্রত্যাশিতভাবে বৃদ্ধি পেতে পারে।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: modern enterprise case studies',
        bn: 'বাস্তব স্থাপত্য: আধুনিক এন্টারপ্রাইজ কেস স্টাডি'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'GitHub’s Primer design system uses Sass to maintain structured color scales and spacing grids while exposing theme custom properties for dark mode.',
          bn: 'গিটহাবের প্রাইমার ডিজাইন সিস্টেম কালার ও স্পেসিং গ্রিড পরিচালনায় Sass এবং ডার্ক মোডের জন্য CSS কাস্টম প্রপার্টি ব্যবহার করে।'
        },
        {
          en: 'Government web standards adopt Sass modules to compile bulletproof accessible stylesheets that strictly adhere to contrast requirements.',
          bn: 'সরকারি ওয়েব প্ল্যাটফর্মগুলো অ্যাক্সেসিবিলিটি এবং কালার কনট্রাস্ট নীতিমালা নির্ভুলভাবে প্রয়োগ করতে Sass মডিউল ব্যবহার করে।'
        },
        {
          en: 'Enterprise micro-frontends compile shared SCSS partials into scoped CSS packages, ensuring consistent visual identity across distributed engineering teams.',
          bn: 'এন্টারপ্রাইজ মাইক্রো-ফ্রন্টএন্ডে শেয়ার্ড SCSS মডিউল ব্যবহার করে বিভিন্ন দলের তৈরি অ্যাপ্লিকেশনে একই ধরনের ব্র্যান্ডিং বজায় রাখা হয়।'
        },
        {
          en: 'Modern full-stack web frameworks like Next.js and SvelteKit provide first-class support for Sass alongside native CSS modules.',
          bn: 'Next.js এবং SvelteKit-এর মতো আধুনিক ফুলস্ট্যাক ফ্রেমওয়ার্ক নেটিভ CSS মডিউলের পাশাপাশি সরাসরি Sass সমর্থন করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Track summary: you are a Sass master',
        bn: 'ট্র্যাক সমাপনী: আপনি এখন Sass-এ দক্ষ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Congratulations on completing the Sass track! Across these eight comprehensive lessons, you have mastered Dart Sass compilation, variables, scoping, nesting, and BEM architecture. You also conquered mixins, programmatic loops, modules, design token maps, and hybrid design systems. You now possess the architectural foundation to build enterprise-grade design systems.',
        bn: 'Sass ট্র্যাক সফলভাবে সম্পন্ন করার জন্য অভিনন্দন! এই আটটি পূর্ণাঙ্গ পাঠের মাধ্যমে আপনি Dart Sass কম্পাইলেশন, ভেরিয়েবল, স্কোপিং, নেস্টিং এবং BEM আর্কিটেকচার আয়ত্ত করেছেন। পাশাপাশি মিক্সিন, প্রোগ্রামেটিক লুপ, মডিউল, ডিজাইন টোকেন ম্যাপ এবং আধুনিক হাইব্রিড কৌশল শিখেছেন। আপনি এখন যেকোনো এন্টারপ্রাইজ মানের প্রজেক্টে প্রফেশনাল ডিজাইন সিস্টেম পরিচালনা করতে সক্ষম।',
      }
    }
  ],
  exercises: [
    {
      id: 'loom-ex-1',
      kind: 'mcq',
      topic: 'runtime vs build time capability',
      question: {
        en: 'Which capability can CSS custom properties (var(--x)) achieve that compile-time Sass variables cannot?',
        bn: 'CSS কাস্টম প্রপার্টি (var(--x)) এমন কোন সুবিধা দিতে পারে যা বিল্ড-টাইম Sass ভেরিয়েবল পারে না?'
      },
      options: [
        {
          en: 'Dynamic runtime theme changes inside the browser without recompiling the stylesheet.',
          bn: 'স্টাইলশিট পুনরায় কম্পাইল না করেই ব্রাউজারে রানটাইমে ডায়নামিক থিম পরিবর্তন করা।'
        },
        {
          en: 'Generating hundreds of utility classes with programmatic loops.',
          bn: 'প্রোগ্রামেটিক লুপের সাহায্যে শত শত ইউটিলিটি ক্লাস তৈরি করা।'
        },
        {
          en: 'Importing external files using modular namespaces.',
          bn: 'মডিউলার নেমস্পেসের মাধ্যমে এক্সটারনাল ফাইল লোড করা।'
        },
        {
          en: 'Halting the build process with custom @error messages.',
          bn: 'কাস্টম @error বার্তার সাহায্যে বিল্ড প্রসেস বন্ধ করে দেওয়া।'
        }
      ],
      answer: 0,
      hint: {
        en: 'CSS custom properties live in the browser DOM and update instantaneously when classes or attributes change.',
        bn: 'CSS কাস্টম প্রপার্টি ব্রাউজারের ডমে সচল থাকে এবং ক্লাস বা অ্যাট্রিবিউট বদলালে সাথে সাথে মান বদলে যায়।'
      },
      explanation: {
        en: 'Because CSS custom properties exist in browser memory, their values can update dynamically based on user interaction or media queries without needing a compiler rebuild.',
        bn: 'যেহেতু CSS কাস্টম প্রপার্টি ব্রাউজারের মেমরিতে থাকে, তাই কোনো কম্পাইলার ছাড়াই ব্যবহারকারীর ক্লিকের সাথে সাথে এদের মান পরিবর্তন করা যায়।'
      }
    },
    {
      id: 'loom-ex-2',
      kind: 'mcq',
      topic: 'cascade layers purpose',
      question: {
        en: 'What problem do native CSS cascade layers (@layer) solve in modern styling?',
        bn: 'আধুনিক ওয়েব ডিজাইনে নেটিভ CSS ক্যাসকেড লেয়ার (@layer) কোন সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'They allow authors to explicitly define style precedence orders regardless of selector specificity.',
          bn: 'সিলেক্টর স্পেসিফিসিটি যা-ই হোক না কেন, এরা স্টাইলের অগ্রাধিকারের নির্দিষ্ট ক্রম নির্ধারণ করতে সাহায্য করে।'
        },
        {
          en: 'They automatically convert raster images into vector SVG graphics.',
          bn: 'এরা স্বয়ংক্রিয়ভাবে সাধারণ ছবিকে ভেক্টর এসভিজিতে রূপান্তর করে।'
        },
        {
          en: 'They replace the HTML head tag with a virtual DOM tree.',
          bn: 'এরা HTML হেড ট্যাগের বদলে ভার্চুয়াল ডম ট্রি তৈরি করে।'
        },
        {
          en: 'They enforce single-threaded execution on all animations.',
          bn: 'এরা সব অ্যানিমেশনে একক থ্রেড কার্যকর করে।'
        }
      ],
      answer: 0,
      hint: {
        en: '@layer establishes layers like base, components, and utilities that cascade in declared order.',
        bn: '@layer বেস, কম্পোনেন্ট ও ইউটিলিটির মতো লেয়ার তৈরি করে নির্দিষ্ট ক্রমে স্টাইল প্রয়োগ করে।'
      },
      explanation: {
        en: 'Cascade layers (@layer) let developers organize styles into ordered layers. Rules in higher layers always beat rules in lower layers, ending selector specificity wars.',
        bn: 'ক্যাসকেড লেয়ার (@layer) ডেভেলপারদের লেয়ারের ক্রম নির্ধারণ করতে দেয়। উপরের লেয়ারের নিয়ম সর্বদা নিচের লেয়ারের চেয়ে প্রাধান্য পায়, যা স্পেসিফিসিটি যুদ্ধ থামায়।'
      }
    },
    {
      id: 'loom-ex-3',
      kind: 'mcq',
      topic: 'hybrid architecture rationale',
      question: {
        en: 'Why do modern design systems combine Sass with CSS custom properties in a hybrid architecture?',
        bn: 'আধুনিক ডিজাইন সিস্টেমে Sass এবং CSS কাস্টম প্রপার্টি একসাথে হাইব্রিড আর্কিটেকচারে কেন ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'To leverage Sass loops for programmatic utility generation and CSS custom properties for dynamic runtime theming.',
          bn: 'ইউটিলিটি ক্লাস তৈরিতে Sass লুপের শক্তি এবং রানটাইমে ডায়নামিক থিমিংয়ের জন্য CSS কাস্টম প্রপার্টি পেতে।'
        },
        {
          en: 'Because modern browsers require all Sass code to be written inside CSS custom properties.',
          bn: 'কারণ আধুনিক ব্রাউজার সব Sass কোডকে CSS কাস্টম প্রপার্টির ভেতর লিখতে বাধ্য করে।'
        },
        {
          en: 'To double the size of the production stylesheet bundle.',
          bn: 'প্রোডাকশন ফাইলের আকার দ্বিগুণ করার জন্য।'
        },
        {
          en: 'Because Dart Sass cannot compile stylesheets without native custom properties present.',
          bn: 'কারণ নেটিভ কাস্টম প্রপার্টি ছাড়া Dart Sass স্টাইলশিট কম্পাইল করতে পারে না।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about build-time automation versus runtime flexibility.',
        bn: 'বিল্ড-টাইমের অটোমেশন এবং রানটাইমের নমনীয়তা একসাথে বিবেচনা করুন।'
      },
      explanation: {
        en: 'A hybrid setup uses each technology where it excels: Sass handles data structures, calculations, and loops at build time, while CSS custom properties provide live theme responsiveness at runtime.',
        bn: 'হাইব্রিড সেটআপ প্রতিটি প্রযুক্তির সেরা সুবিধা কাজে লাগায়: Sass বিল্ড-টাইমে হিসাব ও লুপের কাজ করে, আর CSS কাস্টম প্রপার্টি রানটাইমে তাৎক্ষণিক থিম পরিবর্তন দেয়।'
      }
    },
    {
      id: 'loom-ex-4',
      kind: 'predict',
      topic: 'predicting custom property emission',
      question: {
        en: 'Predict the compiled CSS for: $accent: #f59e0b; :root { --brand: #{$accent}; }',
        bn: '$accent: #f59e0b; :root { --brand: #{$accent}; } — এই কোডের কম্পাইল করা CSS আউটপুট কী হবে?'
      },
      answer: ':root { --brand: #f59e0b; }',
      accept: [
        ':root { --brand: #f59e0b; }',
        ':root { --brand: #f59e0b }',
        '--brand: #f59e0b;'
      ],
      hint: {
        en: 'The Sass variable is interpolated directly into the native CSS custom property.',
        bn: 'Sass ভেরিয়েবলটি সরাসরি নেটিভ CSS কাস্টম প্রপার্টির মান হিসেবে বসে যায়।'
      },
      explanation: {
        en: 'Dart Sass evaluates the interpolated variable #{$accent} to #f59e0b and prints the native CSS custom property declaration :root { --brand: #f59e0b; }.',
        bn: 'Dart Sass ভেরিয়েবল #{$accent}-এর মান #f59e0b বসিয়ে সাধারণ CSS কাস্টম প্রপার্টি :root { --brand: #f59e0b; } তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'loom-quiz',
    title: {
      en: 'Modern Sass and Native CSS Architecture Quiz',
      bn: 'আধুনিক Sass এবং নেটিভ CSS আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'loomq1',
        kind: 'mcq',
        topic: 'when vanilla css suffices',
        question: {
          en: 'For which type of project is plain Vanilla CSS most appropriate today?',
          bn: 'কোন ধরনের প্রজেক্টের জন্য বর্তমানে সাধারণ ভ্যানিলা CSS সবচেয়ে উপযুক্ত?'
        },
        options: [
          {
            en: 'Small to medium websites, marketing pages, or projects seeking zero build tools and simple styling needs.',
            bn: 'ছোট থেকে মাঝারি ওয়েবসাইট, সাধারণ ল্যান্ডিং পেজ বা যেখানে কোনো বিল্ড টুল ছাড়া কাজ করাই প্রধান লক্ষ্য।'
          },
          {
            en: 'Large enterprise design systems requiring hundreds of programmatic color and spacing utility classes.',
            bn: 'শত শত প্রোগ্রামেটিক কালার ও স্পেসিং ইউটিলিটি ক্লাস প্রয়োজন এমন বড় এন্টারপ্রাইজ প্রজেক্টে।'
          },
          {
            en: 'Cross-platform design token pipelines shared across web, iOS, and Android applications.',
            bn: 'ওয়েব, আইওএস এবং অ্যান্ড্রয়েডে শেয়ার করা ডিজাইন টোকেন পাইপলাইনে।'
          },
          {
            en: 'Vanilla CSS can no longer be used for any project in modern web development.',
            bn: 'আধুনিক ওয়েব ডেভেলপমেন্টে ভ্যানিলা CSS আর কোনো প্রজেক্টেই ব্যবহার করা যায় না।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Vanilla CSS with native nesting and custom properties is often ideal when you want zero build dependencies.',
          bn: 'বিল্ড ডিপেন্ডেন্সি ছাড়া কাজ করতে চাইলে নেটিভ নেস্টিং ও ভেরিয়েবলসহ ভ্যানিলা CSS চমৎকার।'
        },
        explanation: {
          en: 'With modern browsers supporting native nesting and custom properties, many simple websites no longer require a preprocessor build step.',
          bn: 'আধুনিক ব্রাউজারগুলো নেটিভ নেস্টিং ও কাস্টম প্রপার্টি সমর্থন করায় সাধারণ ওয়েবসাইটে এখন আর কোনো প্রিপ্রসেসরের প্রয়োজন হয় না।'
        }
      },
      {
        id: 'loomq2',
        kind: 'mcq',
        topic: 'native color mix function',
        question: {
          en: 'What modern native CSS function allows color mixing directly in the browser without Sass?',
          bn: 'কোন আধুনিক নেটিভ CSS ফাংশন Sass ছাড়াই সরাসরি ব্রাউজারে দুটি রং মেশানোর সুবিধা দেয়?'
        },
        options: [
          {
            en: 'color-mix(in srgb, color1 percentage, color2)',
            bn: 'color-mix(in srgb, color1 percentage, color2)'
          },
          {
            en: 'css.blend(color1, color2)',
            bn: 'css.blend(color1, color2)'
          },
          {
            en: 'filter: mix-colors(color1, color2)',
            bn: 'filter: mix-colors(color1, color2)'
          },
          {
            en: 'palette.combine(color1, color2)',
            bn: 'palette.combine(color1, color2)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard function name is color-mix().',
          bn: 'স্ট্যান্ডার্ড ফাংশনটির নাম color-mix()।'
        },
        explanation: {
          en: 'CSS Color Module 4 introduced color-mix(), enabling browsers to blend colors across color spaces at runtime without build tools.',
          bn: 'CSS কালার মডিউল 4 এ color-mix() যুক্ত হয়েছে, যা ব্রাউজারকে রানটাইমেই দুটি রং মিশিয়ে নতুন শেড তৈরির ক্ষমতা দেয়।'
        }
      },
      {
        id: 'loomq3',
        kind: 'mcq',
        topic: 'sass unique residue',
        question: {
          en: 'Which capability remains a key reason large design systems still choose Sass in 2026?',
          bn: '২০২৬ সালেও বড় ডিজাইন সিস্টেমগুলোর Sass বেছে নেওয়ার প্রধান কারণ কোনটি?'
        },
        options: [
          {
            en: 'Automated code generation: iterating over token maps with loops to emit hundreds of consistent utility classes.',
            bn: 'স্বয়ংক্রিয় কোড জেনারেশন: টোকেন ম্যাপে লুপ চালিয়ে শত শত ইউটিলিটি ক্লাস তৈরি করা।'
          },
          {
            en: 'Sass makes webpages load faster over slow 3G cellular networks.',
            bn: 'Sass ধীরগতির ইন্টারনেটে পেজ দ্রুত লোড করায়।'
          },
          {
            en: 'Sass allows direct read and write access to server-side SQL databases.',
            bn: 'Sass সার্ভারের এসকিউএল ডেটাবেসে সরাসরি প্রবেশের সুযোগ দেয়।'
          },
          {
            en: 'Native CSS has been deprecated by the W3C consortium.',
            bn: 'W3C কর্তৃক নেটিভ CSS বাতিল করা হয়েছে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about loops and map data structures that native CSS lacks.',
          bn: 'নেটিভ CSS-এ অনুপস্থিত এমন লুপ এবং ম্যাপ ডেটা স্ট্রাকচারের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'Vanilla CSS has no programming constructs like loops, maps, or functions to generate repetitive rules. Sass remains the industry standard for programmatic stylesheet generation.',
          bn: 'সাধারণ CSS-এ কোনো লুপ বা ম্যাপের ব্যবস্থা নেই। তাই প্রোগ্রামেটিক পদ্ধতিতে শত শত ক্লাস তৈরি করতে Sass আজও অপ্রতিদ্বন্দ্বী।'
        }
      },
      {
        id: 'loomq4',
        kind: 'mcq',
        topic: 'browser runtime awareness of sass',
        question: {
          en: 'Does the web browser have any awareness or knowledge that a stylesheet was originally written in Sass?',
          bn: 'কোনো স্টাইলশিট যে পূর্বে Sass দিয়ে লেখা হয়েছিল, ব্রাউজারের কি সে সম্পর্কে কোনো ধারণা বা জ্ঞান থাকে?'
        },
        options: [
          {
            en: 'No; Sass compiles entirely to standard CSS text at build time, and the browser executes ordinary CSS without any Sass runtime.',
            bn: 'না; Sass বিল্ড-টাইমে পুরোপুরি সাধারণ CSS-এ রূপান্তরিত হয় এবং ব্রাউজার কোনো Sass লাইব্রেরি ছাড়াই সাধারণ CSS চালায়।'
          },
          {
            en: 'Yes; browsers maintain an internal Dart virtual machine to execute Sass directives.',
            bn: 'হ্যাঁ; ব্রাউজার Sass কোড চালানোর জন্য অভ্যন্তরীণ ডার্ট ভার্চুয়াল মেশিন সচল রাখে।'
          },
          {
            en: 'Yes; all HTML documents must include a sass-runtime.js script tag.',
            bn: 'হ্যাঁ; সব HTML ফাইলে sass-runtime.js স্ক্রিপ্ট ট্যাগ থাকা বাধ্যতামূলক।'
          },
          {
            en: 'Only Chrome and Edge know Sass; Safari and Firefox reject it.',
            bn: 'কেবল ক্রোম ও এজ Sass বোঝে; সাফারি ও ফায়ারফক্স তা চালাতে পারে না।'
          }
        ],
        answer: 0,
        hint: {
          en: 'A preprocessor produces deniable CSS: the browser only sees the plain CSS text.',
          bn: 'প্রিপ্রসেসর সাধারণ CSS তৈরি করে: ব্রাউজার কেবল সাধারণ CSS টেক্সট দেখতে পায়।'
        },
        explanation: {
          en: 'Sass executes exclusively during build time. The shipped artifact is standard plain CSS. Except for optional debug source maps, the browser has zero awareness of Sass.',
          bn: 'Sass কেবল বিল্ড-টাইমে কাজ করে। ব্রাউজারে পাঠানো ফাইলটি সাধারণ মানসম্মত CSS, তাই ঐচ্ছিক সোর্স ম্যাপ ছাড়া ব্রাউজারের Sass সম্পর্কে কোনো ধারণা থাকে না।'
        }
      },
      {
        id: 'loomq5',
        kind: 'predict',
        topic: 'prefix for native css custom properties',
        question: {
          en: 'What two-character prefix defines a native CSS custom property (e.g., ______primary-color: #2563eb;)?',
          bn: 'নেটিভ CSS কাস্টম প্রপার্টি সংজ্ঞায়িত করতে কোন দুই অক্ষরের প্রিফিক্স ব্যবহৃত হয় (যেমন ______primary-color: #2563eb;)?'
        },
        answer: '--',
        accept: [
          '--',
          'double dash',
          'double hyphen'
        ],
        hint: {
          en: 'Enter the two dashes used before CSS variable names.',
          bn: 'CSS ভেরিয়েবলের নামের আগে ব্যবহৃত দুটি ড্যাশ চিহ্ন লিখুন।'
        },
        explanation: {
          en: 'Native CSS custom properties are declared with a double hyphen prefix (--variable-name) and retrieved with var(--variable-name).',
          bn: 'নেটিভ CSS কাস্টম প্রপার্টি দুটি হাইফেন প্রিফিক্স (--variable-name) দিয়ে তৈরি হয় এবং var(--variable-name) দিয়ে কল করা হয়।'
        }
      }
    ]
  }
};
