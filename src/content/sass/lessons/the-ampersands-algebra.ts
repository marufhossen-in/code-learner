import type { Lesson } from '../../../lib/types';

export const TheAmpersandsAlgebraLesson: Lesson = {
  slug: 'the-ampersands-algebra',
  tech: 'sass',
  title: {
    en: 'Sass Nesting & Parent Selectors — Nesting Architecture, Ampersand (&), BEM Patterns, and Media Bubbling',
    bn: 'Sass নেস্টিং ও প্যারেন্ট সিলেক্টর: নেস্টিং আর্কিটেকচার, অ্যামপারস্যান্ড (&), BEM প্যাটার্ন এবং মিডিয়া বাবলিং'
  },
  summary: {
    en: 'Nesting allows developers to mirror HTML hierarchy by placing CSS rules inside one another. The parent selector ampersand (&) enables pseudo-classes, state modifiers, and BEM component naming without repeating class prefixes. At compile time, Dart Sass flattens nested blocks into standard CSS descendant selectors. While nesting improves readability, limiting nesting depth to three levels prevents excessive CSS specificity and bloated bundle sizes.',
    bn: 'নেস্টিং ডেভেলপারদের HTML কাঠামোর অনুকরণে একটি CSS ব্লকের ভেতর আরেকটি ব্লক লেখার সুযোগ দেয়। প্যারেন্ট সিলেক্টর অ্যামপারস্যান্ড (&) দিয়ে ক্লাস নেম বারবার না লিখে সিউডো-ক্লাস, স্টেট মডিফায়ার এবং BEM প্যাটার্ন সহজে সাজানো যায়। কম্পাইল করার সময় Dart Sass নেস্টেড ব্লকগুলোকে সাধারণ CSS সিলেক্টরে রূপান্তর করে। নেস্টিং কোড পরিচ্ছন্ন রাখলেও অতিরিক্ত স্পেসিফিসিটি এড়াতে ৩ স্তরের বেশি নেস্ট না করাই সর্বোত্তম।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What is Sass nesting and how does it flatten?',
        bn: 'Sass নেস্টিং কী এবং এটি কীভাবে ফ্ল্যাটেন হয়?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In standard CSS, you repeatedly write descendant selectors like .navbar .nav-item .nav-link. Sass nesting lets you nest child selectors directly inside the parent selector block. When Dart Sass compiles your stylesheet, it flattens the nested tree by prepending each ancestor selector to its children. The resulting CSS text is standard descendant syntax that every browser executes identically.',
        bn: 'সাধারণ CSS-এ .navbar .nav-item .nav-link-এর মতো সিলেক্টর বারবার লিখতে হয়। Sass নেস্টিংয়ের মাধ্যমে আপনি প্যারেন্ট ব্লকের ভেতর সরাসরি চাইল্ড সিলেক্টর লিখতে পারেন। Dart Sass কম্পাইল করার সময় চাইল্ড সিলেক্টরের সাথে প্যারেন্ট সিলেক্টর জোড়া লাগিয়ে ফ্ল্যাটেন করে। এর ফলে ব্রাউজারে সাধারণ ডিসেন্ডেন্ট সিলেক্টর হিসেবে স্বাভাবিক নিয়মেই কোড চলে।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'parent selector (&)',
          def: {
            en: 'the ampersand symbol in Sass, replaced during compilation by the full selector string of the enclosing parent block',
            bn: 'Sass-এর অ্যামপারস্যান্ড প্রতীক, যা কম্পাইলেশনের সময় বাইরের প্যারেন্ট সিলেক্টরের সম্পূর্ণ টেক্সট দিয়ে প্রতিস্থাপিত হয়'
          }
        },
        {
          term: 'selector flattening',
          def: {
            en: 'the compiler transformation that expands nested SCSS rules into standard, un-nested CSS descendant and compound selectors',
            bn: 'কম্পাইলারের প্রক্রিয়া যা নেস্টেড SCSS ব্লককে সাধারণ আন-নেস্টেড CSS সিলেক্টরে রূপান্তরিত করে'
          }
        },
        {
          term: 'BEM methodology',
          def: {
            en: 'Block Element Modifier naming convention (e.g., .card__title, .card--active), streamlined using the Sass parent selector',
            bn: 'ব্লক এলিমেন্ট মডিফায়ার নামকরণের নিয়ম (যেমন .card__title, .card--active), যা অ্যামপারস্যান্ড দিয়ে সহজে লেখা যায়'
          }
        },
        {
          term: 'media query bubbling',
          def: {
            en: 'the Sass feature where @media directives written inside a selector automatically bubble outside to wrap that selector in the output CSS',
            bn: 'Sass-এর এমন একটি বৈশিষ্ট্য যেখানে সিলেক্টরের ভেতরের @media স্বয়ংক্রিয়ভাবে বাইরে এসে আউটপুটে সংশ্লিষ্ট সিলেক্টরকে ঘিরে ফেলে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why parent selectors and shallow nesting matter',
        bn: 'প্যারেন্ট সিলেক্টর এবং অগভীর নেস্টিং কেন গুরুত্বপূর্ণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Nesting groups related component styles into a single visual block, making codebases easier to maintain and navigate. The parent selector (&) eliminates repetitive typing when adding hover states, active classes, or BEM element suffixes. However, nesting too deeply introduces a severe specificity penalty. A four-level nested selector creates high-specificity CSS rules that become nearly impossible to override later without using destructive !important declarations.',
        bn: 'নেস্টিং কোনো উপাদানের সংশ্লিষ্ট সব স্টাইলকে একটি সুসংগঠিত ব্লকে রাখে, ফলে কোড পড়া ও পরিবর্তন করা সহজ হয়। প্যারেন্ট সিলেক্টর (&) হোভার স্টেট, অ্যাক্টিভ ক্লাস বা BEM উপাদান যোগ করার সময় বারবার টাইপ করার ঝামেলা দূর করে। তবে অতিরিক্ত নেস্টিং উচ্চ স্পেসিফিসিটি তৈরি করে। চার স্তরের বেশি নেস্ট করলে সেই স্টাইল ওভাররাইড করতে গিয়ে অবাঞ্ছিত !important ব্যবহারের বাধ্যবাধকতা তৈরি হয়।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to write nested rules, BEM selectors, and nested properties',
        bn: 'কীভাবে নেস্টেড রুল, BEM সিলেক্টর এবং নেস্টেড প্রপার্টি লিখবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'You can nest descendant selectors simply by placing them inside a parent rule. Use the ampersand (&) directly against a colon or suffix (like &:hover or &__title) to attach pseudo-classes or BEM elements without spaces. You can also nest related CSS properties that share a common prefix, such as font or margin, using colon-separated sub-property blocks.',
        bn: 'প্যারেন্ট রুলের ভেতরে চাইল্ড রুল রেখে সহজেই নেস্টিং করা যায়। কোনো স্পেস ছাড়া কোলন বা সাফিক্স যোগ করতে অ্যামপারস্যান্ড (&) ব্যবহার করুন (যেমন &:hover বা &__title)। এছাড়া font বা margin-এর মতো একই প্রিফিক্সযুক্ত প্রপার্টিগুলোকে কার্লি ব্র্যাকেটে নেস্টেড সাব-প্রপার্টি আকারে সাজিয়ে লেখা যায়।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'nesting-patterns.scss',
      caption: {
        en: 'Comprehensive nesting showing pseudo-classes, BEM elements, nested properties, and media bubbling.',
        bn: 'সিউডো-ক্লাস, BEM এলিমেন্ট, নেস্টেড প্রপার্টি ও মিডিয়া বাবলিংয়ের সম্পূর্ণ SCSS উদাহরণ।'
      },
      code: `// 1. Basic nesting and pseudo-classes with &
.button {
  background-color: #2563eb;
  color: #ffffff;

  &:hover {
    background-color: #1d4ed8; // emits .button:hover
  }

  &.is-disabled {
    opacity: 0.5;              // emits .button.is-disabled
  }
}

// 2. BEM component architecture
.card {
  padding: 16px;

  &__header {
    border-bottom: 1px solid #e5e7eb; // emits .card__header
  }

  &--featured {
    border: 2px solid #f59e0b;         // emits .card--featured
  }
}

// 3. Nested property groups
.typography {
  font: {
    family: "Inter", sans-serif; // emits font-family
    size: 1rem;                  // emits font-size
    weight: 600;                 // emits font-weight
  }
}

// 4. Media query bubbling
.hero {
  padding: 24px;

  @media (min-width: 768px) {
    padding: 48px;               // emits @media ... { .hero { padding: 48px; } }
  }
}`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Compiler mechanics: selector multiplication and tree expansion',
        bn: 'কম্পাইলার কার্যপ্রণালী: সিলেক্টর মাল্টিপ্লিকেশন ও ট্রি সম্প্রসারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Dart Sass compiler resolves hierarchical styling by expanding outer and inner selectors. For instance, an outer rule with three classes and an inner rule with two tags generates six distinct CSS rules. The compiler multiplies selector combinations together. When an ampersand is present, the compiler places the parent selector into that exact position.',
        bn: 'Dart Sass কম্পাইলার ভেতরের ও বাইরের সিলেক্টর সম্প্রসারিত করে কাঠামোগত স্টাইল তৈরি করে। যেমন বাইরের ৩টি ক্লাস ও ভেতরের ২টি ট্যাগ মিলে মোট ৬টি আলাদা নিয়ম তৈরি করে। কম্পাইলার সিলেক্টরের সংমিশ্রণগুলোকে গুণ করে নেয়। অ্যামপারস্যান্ড উপস্থিত থাকলে কম্পাইলার ঠিক সেই জায়গায় প্যারেন্ট সিলেক্টরকে বসায়।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices: the rule of three for nesting depth',
        bn: 'সেরা চর্চা: নেস্টিং গভীরতায় ৩ স্তরের নিয়ম'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Adhere to the Rule of Three: never nest selectors deeper than 3 levels to maintain low specificity and clean stylesheets.',
          bn: '৩ স্তরের নিয়ম মেনে চলুন: স্পেসিফিসিটি কম রাখতে এবং স্টাইল পরিচ্ছন্ন রাখতে ৩ লেভেলের বেশি নেস্ট করবেন না।'
        },
        {
          en: 'Use the ampersand suffix pattern for BEM elements (&__element) to generate flat, single-class selectors that maximize rendering speed.',
          bn: 'BEM এলিমেন্টে অ্যামপারস্যান্ড সাফিক্স (&__element) ব্যবহার করুন যাতে একক ক্লাসের দ্রুত রেন্ডারযোগ্য সিলেক্টর তৈরি হয়।'
        },
        {
          en: 'Colocate responsive @media rules directly inside the component block instead of scattering media queries across separate files.',
          bn: 'রেসপনসিভ @media নিয়মগুলো আলাদা ফাইলে না ছড়িয়ে সরাসরি সংশ্লিষ্ট কম্পোনেন্ট ব্লকের ভেতরে লিখুন।'
        },
        {
          en: 'Use the @at-root directive when you need to emit global utility classes or keyframe animations from inside a component block.',
          bn: 'কম্পোনেন্ট ব্লকের ভেতর থেকে গ্লোবাল অ্যানিমেশন বা ইউটিলিটি ক্লাস তৈরি করতে @at-root ডিরেক্টিভ ব্যবহার করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: accidental selector explosion and whitespace errors',
        bn: 'সমস্যা সমাধান: অনাকাঙ্ক্ষিত সিলেক্টর বৃদ্ধি ও স্পেস সংক্রান্ত ভুল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent syntax error is omitting the ampersand when targeting pseudo-classes or modifiers. Writing :hover instead of &:hover inside a button rule emits .button :hover with a space, matching hovered children rather than the button itself. Another pitfall is nesting multiple comma-separated selector lists, which causes the output file size to multiply exponentially. Always inspect compiled CSS to verify selector counts.',
        bn: 'একটি প্রচলিত ভুল হলো সিউডো-ক্লাস বা মডিফায়ার লেখার সময় অ্যামপারস্যান্ড বাদ দেওয়া। .button ব্লকে &:hover-এর বদলে :hover লিখলে আউটপুটে .button :hover স্পেসসহ তৈরি হয়, যা বাটনের ভেতরের উপাদানকে টার্গেট করে। কমাযুক্ত একাধিক সিলেক্টরে গভীর নেস্টিং করলে কোডের আকার গুণিতক হারে বাড়ে। সর্বদা কম্পাইল করা CSS ফাইল পরীক্ষা করে সিলেক্টর সংখ্যা দেখে নিন।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: Sass nesting vs native CSS nesting',
        bn: 'বাস্তব স্থাপত্য: Sass নেস্টিং বনাম নেটিভ CSS নেস্টিং'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Modern browsers now support native CSS nesting (shipped in 2023), allowing vanilla CSS to use & and nested blocks without any build step.',
          bn: 'আধুনিক ব্রাউজারগুলো এখন নেটিভ CSS নেস্টিং সমর্থন করে (২০২৩ সালে চালু), ফলে কোনো বিল্ড স্টেপ ছাড়াই সাধারণ CSS-এ & ও নেস্টিং চলে।'
        },
        {
          en: 'Unlike native CSS which desugars nesting via :is(), Sass concatenates selector strings textually, producing cleaner selectors without unexpected specificity jumps.',
          bn: 'নেটিভ CSS যেখানে :is() দিয়ে নেস্টিং চালায়, Sass সেখানে সরাসরি স্ট্রিং জোড়া লাগায়, যা অতিরিক্ত স্পেসিফিসিটি জটিলতা রোধ করে।'
        },
        {
          en: 'Professional design systems use linters like Stylelint with max-nesting-depth set to 3 to automatically reject overly deep nesting in pull requests.',
          bn: 'পেশাদার ডিজাইন সিস্টেম Stylelint-এর max-nesting-depth ৩ নির্ধারণ করে স্বত্বাধিকারী কোডে অতিরিক্ত গভীর নেস্টিং আটকে দেয়।'
        },
        {
          en: 'Frameworks combine BEM nesting with media query bubbling to ship self-contained, highly modular UI components.',
          bn: 'জনপ্রিয় ফ্রেমওয়ার্কগুলো BEM নেস্টিং ও মিডিয়া বাবলিং একসাথে ব্যবহার করে স্বয়ংসম্পূর্ণ মডুলার কম্পোনেন্ট তৈরি করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: mixins, arguments, and placeholders',
        bn: 'পরবর্তী ধাপ: মিক্সিন, আর্গুমেন্টস এবং প্লেসহোল্ডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you have mastered selector nesting, the parent selector, and BEM patterns, you are ready for code reuse. In Lesson 4, we examine Sass mixins (@mixin and @include), passing arguments with defaults, the @content directive for flexible slots, and silent %placeholder selectors.',
        bn: 'এখন আপনি সিলেক্টর নেস্টিং, প্যারেন্ট সিলেক্টর এবং BEM প্যাটার্নে দক্ষ। কোড পুনর্ব্যবহারের জন্য পরবর্তী ৪র্থ পাঠে আমরা Sass মিক্সিন (@mixin ও @include), ডিফল্ট আর্গুমেন্ট, ফ্লেক্সিবল স্লটের জন্য @content এবং সাইলেন্ট %placeholder সিলেক্টর শিখব।',
      }
    }
  ],
  exercises: [
    {
      id: 'amp-ex-1',
      kind: 'mcq',
      topic: 'parent selector ampersand',
      question: {
        en: 'What does the ampersand (&) represent inside a nested Sass rule?',
        bn: 'নেস্টেড Sass রুলের ভেতরে অ্যামপারস্যান্ড (&) কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'It represents the outer parent selector, allowing you to attach pseudo-classes or modifiers without spaces.',
          bn: 'এটি বাইরের প্যারেন্ট সিলেক্টরকে নির্দেশ করে, যার ফলে কোনো স্পেস ছাড়াই সিউডো-ক্লাস বা মডিফায়ার যুক্ত করা যায়।'
        },
        {
          en: 'It generates an asynchronous network request to fetch external stylesheets.',
          bn: 'এটি এক্সটারনাল স্টাইলশিট আনার জন্য একটি অ্যাসিনক্রোনাস নেটওয়ার্ক রিকোয়েস্ট পাঠায়।'
        },
        {
          en: 'It automatically resets all browser default margin and padding values.',
          bn: 'এটি ব্রাউজারের সব ডিফল্ট মার্জিন ও প্যাডিং শূন্য করে দেয়।'
        },
        {
          en: 'It enforces strict TypeScript type checking on CSS declarations.',
          bn: 'এটি CSS ডিক্লারেশনের ওপর কঠোর টাইপস্ক্রিপ্ট টাইপ চেকিং নিশ্চিত করে।'
        }
      ],
      answer: 0,
      hint: {
        en: 'In .card { &:hover { ... } }, the ampersand is replaced by .card.',
        bn: '.card { &:hover { ... } }-এ অ্যামপারস্যান্ডের জায়গায় .card বসে।'
      },
      explanation: {
        en: 'The ampersand inserts the parent selector directly at that position. Using &:hover compiles to .card:hover without adding an unwanted descendant space.',
        bn: 'অ্যামপারস্যান্ড সংশ্লিষ্ট স্থানে সরাসরি প্যারেন্ট সিলেক্টরকে বসায়। &:hover লিখলে আউটপুটে কোনো অপ্রয়োজনীয় স্পেস ছাড়াই .card:hover তৈরি হয়।'
      }
    },
    {
      id: 'amp-ex-2',
      kind: 'mcq',
      topic: 'media query bubbling',
      question: {
        en: 'What happens when you write an @media block inside a nested Sass selector?',
        bn: 'নেস্টেড Sass সিলেক্টরের ভেতরে @media ব্লক লিখলে কী ঘটে?'
      },
      options: [
        {
          en: 'The @media query bubbles up to wrap the enclosing selector in the compiled CSS output.',
          bn: '@media কোয়ারিটি বাবল হয়ে আউটপুট CSS-এ সংশ্লিষ্ট সিলেক্টরটিকে ঘিরে ফেলে।'
        },
        {
          en: 'The compiler throws an illegal nesting syntax error.',
          bn: 'কম্পাইলার অবৈধ নেস্টিং বিবেচনা করে সিনট্যাক্স এরর দেয়।'
        },
        {
          en: 'The styles inside the @media block are permanently deleted.',
          bn: '@media ব্লকের ভেতরের সব স্টাইল চিরতরে মুছে যায়।'
        },
        {
          en: 'The media query converts into an inline JavaScript event listener.',
          bn: 'মিডিয়া কোয়ারিটি ইনলাইন জাভাস্ক্রিপ্ট ইভেন্ট লিসেনারে রূপ নেয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sass lets you colocate responsive breakpoint styles right alongside your desktop styles.',
        bn: 'Sass আপনাকে ডেস্কটপ স্টাইলের পাশাপাশি সরাসরি রেসপনসিভ ব্রেকপয়েন্ট লেখার সুবিধা দেয়।'
      },
      explanation: {
        en: 'Media query bubbling is a signature Sass feature. You can nest @media (min-width: 768px) inside .card, and Sass emits @media (min-width: 768px) { .card { ... } } automatically.',
        bn: 'মিডিয়া বাবলিং Sass-এর অন্যতম শক্তিশালী সুবিধা। আপনি .card-এর ভেতরে @media লিখলে Sass আউটপুটে স্বয়ংক্ৰিয়ভাবে @media (min-width: 768px) { .card { ... } } তৈরি করে দেয়।'
      }
    },
    {
      id: 'amp-ex-3',
      kind: 'mcq',
      topic: 'bem element generation',
      question: {
        en: 'Given .menu { &__item { color: red; } }, what CSS selector does Dart Sass emit?',
        bn: '.menu { &__item { color: red; } } কোডটি Dart Sass কোন CSS সিলেক্টরে কম্পাইল করবে?'
      },
      options: [
        {
          en: '.menu__item { color: red; }',
          bn: '.menu__item { color: red; }'
        },
        {
          en: '.menu .__item { color: red; }',
          bn: '.menu .__item { color: red; }'
        },
        {
          en: '.__item.menu { color: red; }',
          bn: '.__item.menu { color: red; }'
        },
        {
          en: '.menu-item > a { color: red; }',
          bn: '.menu-item > a { color: red; }'
        }
      ],
      answer: 0,
      hint: {
        en: 'The ampersand is textually concatenated directly with the suffix __item without adding any space.',
        bn: 'অ্যামপারস্যান্ড সরাসরি কোনো স্পেস ছাড়াই __item সাফিক্সের সাথে যুক্ত হয়।'
      },
      explanation: {
        en: 'Because there is no whitespace between & and __item, the parent selector .menu concatenates directly to produce the single BEM element class .menu__item.',
        bn: '& এবং __item-এর মাঝে কোনো স্পেস না থাকায় প্যারেন্ট .menu সরাসরি জোড়া লেগে একক BEM ক্লাস .menu__item তৈরি করে।'
      }
    },
    {
      id: 'amp-ex-4',
      kind: 'predict',
      topic: 'predicting nested pseudo class output',
      question: {
        en: 'Predict the compiled CSS for: .nav { a { &:hover { text-decoration: underline; } } }',
        bn: '.nav { a { &:hover { text-decoration: underline; } } } — এই কোডের কম্পাইল করা CSS আউটপুট কী হবে?'
      },
      answer: '.nav a:hover { text-decoration: underline; }',
      accept: [
        '.nav a:hover { text-decoration: underline; }',
        '.nav a:hover { text-decoration: underline }',
        '.nav a:hover'
      ],
      hint: {
        en: 'The ampersand attaches directly to a without a space, preceded by the ancestor .nav.',
        bn: 'অ্যামপারস্যান্ড সরাসরি a-এর সাথে কোনো স্পেস ছাড়া যুক্ত হয় এবং পূর্বে .nav থাকে।'
      },
      explanation: {
        en: 'The child a is nested inside .nav with a descendant space (.nav a). Inside a, &:hover attaches directly to produce .nav a:hover.',
        bn: '.nav-এর ভেতর a নেস্টেড থাকায় .nav a হয়, আর তার ভেতর &:hover সরাসরি যুক্ত হয়ে .nav a:hover তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'nesting-quiz',
    title: {
      en: 'Nesting and Selectors Quiz',
      bn: 'নেস্টিং ও সিলেক্টর কুইজ'
    },
    questions: [
      {
        id: 'nq1',
        kind: 'mcq',
        topic: 'rule of three depth',
        question: {
          en: 'Why do CSS style guides strongly recommend limiting nesting depth to a maximum of 3 levels?',
          bn: 'CSS স্টাইল গাইডে নেস্টিংয়ের গভীরতা সর্বোচ্চ ৩ স্তরে সীমাবদ্ধ রাখার পরামর্শ কেন দেওয়া হয়?'
        },
        options: [
          {
            en: 'Excessive nesting creates overly specific selectors that are difficult to override and heavily couple CSS to HTML structure.',
            bn: 'অতিরিক্ত নেস্টিং উচ্চ স্পেসিফিসিটি তৈরি করে যা ওভাররাইড করা কঠিন এবং HTML কাঠামোর ওপর অতি-নির্ভরশীলতা সৃষ্টি করে।'
          },
          {
            en: 'Dart Sass crashes with a memory stack overflow if nesting exceeds 3 levels.',
            bn: 'নেস্টিং ৩ স্তরের বেশি হলে Dart Sass মেমরি স্ট্যাক ওভারফ্লো হয়ে ক্র্যাশ করে।'
          },
          {
            en: 'Modern browsers refuse to parse selectors containing more than two spaces.',
            bn: 'আধুনিক ব্রাউজার দুইটির বেশি স্পেসযুক্ত সিলেক্টর পড়তে অস্বীকার করে।'
          },
          {
            en: 'Nesting past 3 levels automatically disables CSS transitions.',
            bn: '৩ স্তরের বেশি নেস্ট করলে স্বয়ংক্রিয়ভাবে CSS ট্রানজিশন বন্ধ হয়ে যায়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about specificity wars and how hard it is to override .page .sidebar .widget .title.',
          bn: '.page .sidebar .widget .title-এর মতো জটিল সিলেক্টর ওভাররাইড করা কতটা কঠিন তা বিবেচনা করুন।'
        },
        explanation: {
          en: 'Deep nesting creates fragile, high-specificity rules that break whenever HTML structure is refactored. Keeping nesting shallow (depth <= 3) maintains maintainable stylesheets.',
          bn: 'গভীর নেস্টিং ভঙ্গুর ও উচ্চ স্পেসিফিসিটির কোড তৈরি করে, যা HTML সামান্য বদলালেই ভেঙে যায়। অগভীর নেস্টিং (<= ৩ স্তর) কোড সহজে রক্ষণাবেক্ষণযোগ্য রাখে।'
        }
      },
      {
        id: 'nq2',
        kind: 'mcq',
        topic: 'nested properties syntax',
        question: {
          en: 'How does Dart Sass compile nested properties like font: { size: 14px; weight: bold; }?',
          bn: 'font: { size: 14px; weight: bold; }-এর মতো নেস্টেড প্রপার্টিকে Dart Sass কীভাবে কম্পাইল করে?'
        },
        options: [
          {
            en: 'It combines the prefix and sub-properties with hyphens: font-size: 14px; font-weight: bold;',
            bn: 'এটি প্রিফিক্স ও সাব-প্রপার্টিকে হাইফেন দিয়ে যুক্ত করে: font-size: 14px; font-weight: bold;'
          },
          {
            en: 'It emits an invalid JSON object directly into the stylesheet.',
            bn: 'এটি স্টাইলশিটে একটি অবৈধ JSON অবজেক্ট হিসেবে রেখে দেয়।'
          },
          {
            en: 'It creates a new CSS class named .font.',
            bn: 'এটি .font নামের একটি নতুন CSS ক্লাস তৈরি করে।'
          },
          {
            en: 'It drops the properties and emits an empty rule block.',
            bn: 'এটি প্রপার্টিগুলো বাদ দিয়ে একটি খালি ব্লক তৈরি করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nested properties share a common prefix followed by a hyphen.',
          bn: 'নেস্টেড প্রপার্টিগুলো একটি সাধারণ প্রিফিক্স শেয়ার করে এবং হাইফেন দিয়ে বসে।'
        },
        explanation: {
          en: 'Sass supports nested properties for namespaces like font, margin, and border. The outer name is joined to inner names with hyphens in the emitted CSS.',
          bn: 'Sass font, margin বা border-এর মতো প্রপার্টি গ্রুপের জন্য নেস্টিং সমর্থন করে। আউটপুটে এগুলো হাইফেন দিয়ে স্বাভাবিক নিয়মে যুক্ত হয়।'
        }
      },
      {
        id: 'nq3',
        kind: 'mcq',
        topic: 'at-root directive purpose',
        question: {
          en: 'What is the purpose of the @at-root directive in Sass?',
          bn: 'Sass-এ @at-root ডিরেক্টিভের উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It emits the enclosed rules at the root of the document, escaping outer selector nesting.',
            bn: 'এটি নেস্টেড সিলেক্টরের আওতা থেকে বেরিয়ে স্টাইলশিটের রুটে সরাসরি রুল তৈরি করে।'
          },
          {
            en: 'It reboots the operating system root user permissions.',
            bn: 'এটি অপারেটিং সিস্টেমের রুট ব্যবহারকারীর অনুমতি পরিবর্তন করে।'
          },
          {
            en: 'It restricts style access exclusively to the index.html file.',
            bn: 'এটি কেবল index.html ফাইলে স্টাইলের কার্যকারিতা সীমাবদ্ধ রাখে।'
          },
          {
            en: 'It calculates square roots of numbers in sass:math.',
            bn: 'এটি sass:math-এ সংখ্যার বর্গমূল নির্ণয় করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'It lets you define keyframes or utility classes inside a component without keeping the component ancestor prefix.',
          bn: 'এটি কম্পোনেন্টের ভেতর থেকেও প্যারেন্ট সিলেক্টর বাদ দিয়ে গ্লোবাল অ্যানিমেশন বা ক্লাস লিখতে দেয়।'
        },
        explanation: {
          en: '@at-root tells the compiler to break out of current nesting contexts and emit the selector at the top level of the stylesheet, useful for keyframes and standalone utilities.',
          bn: '@at-root কম্পাইলারকে বর্তমান নেস্টিং থেকে বের হয়ে স্টাইলশিটের মূল স্তরে কোড আউটপুট দিতে নির্দেশ করে, যা কী-ফ্রেম ও ইউটিলিটিতে কার্যকর।'
        }
      },
      {
        id: 'nq4',
        kind: 'mcq',
        topic: 'contextual parent selector',
        question: {
          en: 'What does .dark-theme & { color: white; } do when placed inside .card?',
          bn: '.card-এর ভেতরে .dark-theme & { color: white; } লিখলে কী ঘটে?'
        },
        options: [
          {
            en: 'It places .card after .dark-theme, compiling to .dark-theme .card { color: white; }',
            bn: 'এটি .dark-theme-এর পরে .card বসায়, ফলে আউটপুট হয় .dark-theme .card { color: white; }'
          },
          {
            en: 'It compiles to .card .dark-theme { color: white; }',
            bn: 'এটি আউটপুটে .card .dark-theme { color: white; } তৈরি করে।'
          },
          {
            en: 'It creates a CSS variable named --dark-theme.',
            bn: 'এটি --dark-theme নামের একটি CSS ভেরিয়েবল তৈরি করে।'
          },
          {
            en: 'It halts compilation with a reverse parent error.',
            bn: 'এটি রিভার্স প্যারেন্ট এরর দেখিয়ে কম্পাইলেশন থামিয়ে দেয়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'The ampersand is replaced by the parent selector wherever it appears in the line, even at the end.',
          bn: 'লাইনের যেখানেই অ্যামপারস্যান্ড থাকুক, কম্পাইলার সেখানে প্যারেন্ট সিলেক্টর বসায়।'
        },
        explanation: {
          en: 'By placing the ampersand after an ancestor class like .dark-theme, Sass emits contextual ancestor styles (.dark-theme .card) without requiring separate rule blocks.',
          bn: '.dark-theme-এর পরে অ্যামপারস্যান্ড দেওয়ায় Sass কনটেক্সচুয়াল সিলেক্টর (.dark-theme .card) তৈরি করে, যা থিমিংয়ে অত্যন্ত উপযোগী।'
        }
      },
      {
        id: 'nq5',
        kind: 'predict',
        topic: 'recommended maximum depth',
        question: {
          en: 'According to industry best practices and Stylelint standards, what is the maximum recommended nesting depth (number) in Sass stylesheets?',
          bn: 'শিল্পের সেরা চর্চা ও Stylelint মানদণ্ড অনুযায়ী Sass স্টাইলশিটে সর্বোচ্চ সুপারিশকৃত নেস্টিং গভীরতা (সংখ্যা) কত?'
        },
        answer: '3',
        accept: [
          '3',
          'three',
          '3 levels'
        ],
        hint: {
          en: 'Enter a single digit representing the "Inception Rule" depth limit.',
          bn: 'ইনসেপশন রুলের গভীরতার একক অঙ্কের সংখ্যাটি লিখুন।'
        },
        explanation: {
          en: 'The Rule of Three specifies that nesting should never exceed 3 levels deep. This keeps selector specificity low, minimizes CSS bundle size, and prevents maintainability nightmares.',
          bn: '৩ স্তরের নিয়ম অনুযায়ী নেস্টিং সর্বোচ্চ ৩ লেভেলে সীমাবদ্ধ রাখা উচিত। এটি স্পেসিফিসিটি কম রাখে এবং কোডের রক্ষণাবেক্ষণ সহজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-price-of-clever-sharing',
    title: {
      en: 'The Price of Clever Sharing: Mixins, Arguments, and Placeholders',
      bn: 'মিক্সিন, আর্গুমেন্টস এবং প্লেসহোল্ডার'
    }
  }
};
