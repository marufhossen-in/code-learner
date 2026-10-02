import type { Lesson } from '../../../lib/types';

export const UtilitiesAndTheVariableWardrobeLesson: Lesson = {
  slug: 'utilities-and-the-variable-wardrobe',
  tech: 'bootstrap',
  title: {
    en: 'Utilities, The Spacing Ladder & Dark Mode Theming',
    bn: 'ইউটিলিটি, স্পেসিং ল্যাডার ও ডার্ক মোড থিমিং'
  },
  summary: {
    en: 'Modern frontend development balances reusable component structures with single-purpose utility classes. Bootstrap 5 ships an extensive Utility API covering flexbox alignment, sizing, borders, shadows, and spacing. Its 6-step spacing ladder derives all margin, padding, and gap dimensions from a standardized base spacer of 16 pixels (1rem). Step 1 equals 4 pixels, step 3 provides the base 16 pixels, and step 5 scales up to 48 pixels, ensuring proportional spatial rhythm across views. Furthermore, Bootstrap 5 introduces native color opacity modifiers and deep dark mode theming via the data-bs-theme attribute, allowing instant color scheme switching without rewriting component stylesheets.',
    bn: 'আধুনিক ফ্রন্ট-এন্ড ডিজাইনে কম্পোনেন্টের পাশাপাশি একক কাজের ইউটিলিটি ক্লাস অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে। বুটস্ট্র্যাপ ৫-এ রয়েছে শক্তিশালী ইউটিলিটি এপিআই যা ফ্লেক্সবক্স, সাইজিং, বর্ডার, শ্যাডো এবং স্পেসিং নিয়ন্ত্রণ করে। এর ৬ ধাপের স্পেসিং স্কেলটি ১৬ পিক্সেল (1rem) বেস স্পেসারের ওপর ভিত্তি করে তৈরি। ধাপ ১ সমান ৪ পিক্সেল, ধাপ ৩ হলো মূল ১৬ পিক্সেল এবং ধাপ ৫ প্রসারিত হয়ে ৪৮ পিক্সেল পর্যন্ত হয়, যা ওয়েবসাইটে চমৎকার দূরত্বের সামঞ্জস্য রক্ষা করে। এ ছাড়া কালার অপাসিটি এবং data-bs-theme অ্যাট্রিবিউট দিয়ে নিমেষেই পুরো ওয়েবসাইটকে ডার্ক মোডে রূপান্তর করা যায়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Composable Atomic Utilities',
        bn: 'মূল ধারণা: কম্পোজেবল অ্যাটমিক ইউটিলিটি'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build custom layouts, authoring bespoke CSS classes for minor margin adjustments or flexbox alignments leads to stylesheet bloat. Bootstrap utilities are atomic classes that perform exactly one stylistic job. Each utility rule incorporates the !important flag intentionally, guaranteeing that your explicit inline layout choices always win over default component styles.',
        bn: 'আপনি যখন কাস্টম লেআউট বানান, সামান্য মার্জিন বা ফ্লেক্সবক্স বিন্যাসের জন্য নতুন সিএসএস ক্লাস লিখতে গেলে ফাইলের আকার অযথা বড় হয়ে যায়। বুটস্ট্র্যাপের ইউটিলিটি ক্লাসগুলো কেবল একটি সুনির্দিষ্ট কাজ সম্পাদন করে। ইউটিলিটি ক্লাসে ইচ্ছাকৃতভাবেই !important ব্যবহার করা হয়, যাতে সাধারণ কম্পোনেন্ট স্টাইলের চেয়ে আপনার দেওয়া মার্জিন বা প্যাডিং অগ্রাধিকার পায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Utility API',
          def: {
            en: 'A Sass-driven map engine in Bootstrap generating responsive utility classes with configurable property names, values, and breakpoint infixes',
            bn: 'বুটস্ট্র্যাপের একটি স্যাশ-ভিত্তিক ইঞ্জিন যা রেসপনসিভ ইউটিলিটি ক্লাস ও ব্রেকপয়েন্ট প্রিফিক্স তৈরি করে'
          }
        },
        {
          term: 'The Spacing Scale (0–5)',
          def: {
            en: 'A harmonic progression of margin and padding across 6 scale steps calculated against a 16 pixel base spacer',
            bn: 'মার্জিন ও প্যাডিংয়ের ৬টি সুষম ধাপ যা ১৬ পিক্সেল বেস মাপের সাথে গুণ হয়ে সুনির্দিষ্ট দূরত্ব তৈরি করে'
          }
        },
        {
          term: 'Dark Mode (data-bs-theme="dark")',
          def: {
            en: 'An HTML attribute switching all component and body color variables into high-contrast dark themes dynamically',
            bn: 'একটি এইচটিএমএল অ্যাট্রিবিউট যা নিমেষেই সব কম্পোনেন্টের রঙকে ডার্ক থিমের রঙে পরিবর্তন করে দেয়'
          }
        },
        {
          term: 'Color Opacity Modifiers',
          def: {
            en: 'Utilities like bg-opacity-50 adjusting background opacity using CSS custom properties holding RGB channel values',
            bn: 'ইউটিলিটি ক্লাস যা আরজিবি (RGB) চ্যানেলের সিএসএস ভ্যারিয়েবল দিয়ে ব্যাকগ্রাউন্ডের অপাসিটি বা স্বচ্ছতা নিয়ন্ত্রণ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'spacing-ladder-table',
      text: {
        en: 'The 6-Step Spacing Ladder',
        bn: '৬ ধাপের স্পেসিং স্কেল'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Mathematical Spacing Multipliers and Pixel Values (Base Spacer: 16px / 1rem)',
        bn: 'স্পেসিং গুণক ও পিক্সেলের মাপসমূহ (বেস স্পেসার: ১৬ পিক্সেল)'
      },
      head: [
        { en: 'Scale Step', bn: 'স্কেল ধাপ' },
        { en: 'Sass Multiplier & CSS Value', bn: 'স্যাশ গুণক ও সিএসএস মান' },
        { en: 'Calculated Pixels (at 16px base)', bn: 'কার্যকর পিক্সেল (১৬px বেস)' }
      ],
      rows: [
        [
          { en: '0 (e.g. m-0, p-0)', bn: '০ (যেমন m-0, p-0)' },
          { en: '0 rem', bn: '০ rem' },
          { en: '0 pixels (removes all spacing)', bn: '০ পিক্সেল (সব মার্জিন বা প্যাডিং মুছে দেয়)' }
        ],
        [
          { en: '1 (e.g. mb-1, px-1)', bn: '১ (যেমন mb-1, px-1)' },
          { en: '$spacer * 0.25 (0.25 rem)', bn: '$spacer * ০.২৫ (০.২৫ rem)' },
          { en: '4 pixels', bn: '৪ পিক্সেল' }
        ],
        [
          { en: '2 (e.g. my-2, gap-2)', bn: '২ (যেমন my-2, gap-2)' },
          { en: '$spacer * 0.5 (0.5 rem)', bn: '$spacer * ০.৫ (০.৫ rem)' },
          { en: '8 pixels', bn: '৮ পিক্সেল' }
        ],
        [
          { en: '3 (e.g. m-3, p-3)', bn: '৩ (যেমন m-3, p-3)' },
          { en: '$spacer * 1 (1.0 rem)', bn: '$spacer * ১ (১.০ rem)' },
          { en: '16 pixels (base spacer)', bn: '১৬ পিক্সেল (মূল বেস স্পেসার)' }
        ],
        [
          { en: '4 (e.g. mt-4, pb-4)', bn: '৪ (যেমন mt-4, pb-4)' },
          { en: '$spacer * 1.5 (1.5 rem)', bn: '$spacer * ১.৫ (১.৫ rem)' },
          { en: '24 pixels', bn: '২৪ পিক্সেল' }
        ],
        [
          { en: '5 (e.g. mb-5, py-5)', bn: '৫ (যেমন mb-5, py-5)' },
          { en: '$spacer * 3 (3.0 rem)', bn: '$spacer * ৩ (৩.০ rem)' },
          { en: '48 pixels (maximum spacing tier)', bn: '৪৮ পিক্সেল (সর্বোচ্চ স্পেসিং ধাপ)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: The Spacing Scale Multiplier Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: স্পেসিং স্কেল মাল্টিপ্লায়ার ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the pixel outputs of the Bootstrap 5 spacing scale based on a 16 pixel base spacer:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১৬ পিক্সেল বেস ধরে বুটস্ট্র্যাপ ৫ স্পেসিং ধাপের পিক্সেল মান হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-spacing-calc-sim',
      lang: 'javascript',
      code: `// Bootstrap 5 Spacing Scale Harmonic Engine
const baseSpacer = 16; // 1rem default root font size in pixels

const scale = {
  0: 0,
  1: baseSpacer * 0.25, // Step 1: 4 pixels
  2: baseSpacer * 0.5,  // Step 2: 8 pixels
  3: baseSpacer * 1.0,  // Step 3: 16 pixels
  4: baseSpacer * 1.5,  // Step 4: 24 pixels
  5: baseSpacer * 3.0   // Step 5: 48 pixels
};

console.log('Root base spacer in pixels:', baseSpacer);
// -> Root base spacer in pixels: 16

console.log('Step 1 margin or padding in pixels:', scale[1]);
// -> Step 1 margin or padding in pixels: 4

console.log('Step 3 (1rem) base margin or padding in pixels:', scale[3]);
// -> Step 3 (1rem) base margin or padding in pixels: 16

console.log('Step 5 maximum margin or padding in pixels:', scale[5]);
// -> Step 5 maximum margin or padding in pixels: 48`,
      caption: {
        en: 'Figure 1: Based on a 16-pixel base spacer, step 1 generates 4 pixels, step 3 delivers 16 pixels, and step 5 scales up to 48 pixels of spacing',
        bn: 'চিত্র ১: ১৬ পিক্সেল বেস স্পেসারে ধাপ ১ তৈরি করে ৪ পিক্সেল, ধাপ ৩ দেয় ১৬ পিক্সেল এবং ধাপ ৫ তৈরি করে সর্বোচ্চ ৪৮ পিক্সেল দূরত্ব'
      }
    },
    {
      type: 'heading',
      id: 'dark-mode-theming-guide',
      text: {
        en: 'Dark Mode Theming via data-bs-theme',
        bn: 'data-bs-theme দিয়ে ডার্ক মোড থিমিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Bootstrap 5.3+, dark mode is supported natively via the data-bs-theme attribute. Instead of duplicating CSS classes or maintaining two distinct stylesheets, Bootstrap redeclares all foundational CSS variables under the [data-bs-theme="dark"] selector:',
        bn: 'বুটস্ট্র্যাপ ৫.৩ সংস্করণে data-bs-theme অ্যাট্রিবিউটের মাধ্যমে সরাসরি ডার্ক মোড নিয়ন্ত্রণ করা যায়। আলাদা ফাইল না রেখে বুটস্ট্র্যাপ [data-bs-theme="dark"] সিলেক্টরের অধীনে সমস্ত সিএসএস ভ্যারিয়েবল পুনর্ঘোষণা করে:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Global Dark Mode Activation',
          def: {
            en: 'Placing data-bs-theme="dark" on the <html> root element flips the entire website color scheme instantly',
            bn: 'এইচটিএমএল (<html>) রুটে data-bs-theme="dark" দিলে পুরো ওয়েবসাইট মুহূর্তের মধ্যে ডার্ক মোডে বদলে যায়'
          }
        },
        {
          term: 'Scoped Subtree Theming',
          def: {
            en: 'Placing data-bs-theme="dark" on a specific card, navbar, or dropdown themes only that section, keeping the rest light',
            bn: 'নির্দিষ্ট কোনো কার্ড বা নেভবারে data-bs-theme="dark" বসালে কেবল সেই অংশটুকু ডার্ক হয় এবং বাকি পেজ লাইট থাকে'
          }
        },
        {
          term: 'Dynamic Variable Inheritance',
          def: {
            en: 'Properties like --bs-body-bg, --bs-body-color, and --bs-border-color update in real time without reloading the page',
            bn: '--bs-body-bg ও --bs-border-color এর মতো ভ্যারিয়েবলগুলো পেজ রিলোড ছাড়াই তৎক্ষণাৎ নতুন মান ধারণ করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-spacing-step5-calc-ex',
      kind: 'mcq',
      topic: 'Calculating pixel values from the spacing scale',
      question: {
        en: 'Based on a standard 16-pixel base spacer, how many pixels of margin does the utility class mb-5 apply to the bottom of an element?',
        bn: '১৬ পিক্সেল বেস স্পেসার অনুযায়ী mb-5 ক্লাসটি কোনো উপাদানের নিচে কত পিক্সেল মার্জিন প্রয়োগ করে?'
      },
      options: [
        {
          en: '48 pixels (16 * 3)',
          bn: '৪৮ পিক্সেল (১৬ * ৩)'
        },
        {
          en: '5 pixels',
          bn: '৫ পিক্সেল'
        },
        {
          en: '20 pixels',
          bn: '২০ পিক্সেল'
        },
        {
          en: '100 pixels',
          bn: '১০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply 16 by 3.',
        bn: '১৬ কে ৩ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Step 5 applies a 3 multiplier against the 16 pixel base spacer yielding 48 pixels.',
        bn: '৫ নম্বর ধাপে ৩ গুণক ব্যবহৃত হয় ১৬ পিক্সেল বেস স্পেসারে, যার ফলে ৪৮ পিক্সেল দূরত্ব হয়।'
      }
    },
    {
      id: 'bs-dark-mode-attr-ex',
      kind: 'mcq',
      topic: 'Applying dark mode in Bootstrap 5.3+',
      question: {
        en: 'Which HTML attribute and value correctly activates dark mode across an entire Bootstrap 5.3+ web application?',
        bn: 'বুটস্ট্র্যাপ ৫.৩ সংস্করণে পুরো ওয়েবসাইটে ডার্ক মোড চালু করতে কোন এইচটিএমএল অ্যাট্রিবিউটটি ব্যবহার করতে হয়?'
      },
      options: [
        {
          en: '<html data-bs-theme="dark">',
          bn: '<html data-bs-theme="dark">'
        },
        {
          en: '<body class="night-mode">',
          bn: '<body class="night-mode">'
        },
        {
          en: '<style>dark { on: true; }</style>',
          bn: '<style>dark { on: true; }</style>'
        },
        {
          en: '<meta theme="black">',
          bn: '<meta theme="black">'
        }
      ],
      answer: 0,
      hint: {
        en: 'data-bs-theme="dark" on the root html element.',
        bn: 'html ট্যাগে data-bs-theme="dark" দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'In Bootstrap 5.3+, placing data-bs-theme="dark" on <html> or <body> redefines all core CSS color variables into dark theme equivalents.',
        bn: 'html ট্যাগে data-bs-theme="dark" দিলে সিএসএস ভ্যারিয়েবলগুলো নিজে থেকেই ডার্ক মোডের রঙে সেজে ওঠে।'
      }
    },
    {
      id: 'bs-flex-center-ex',
      kind: 'mcq',
      topic: 'Centering content with flexbox utilities',
      question: {
        en: 'Which combination of Bootstrap utility classes centers an item both horizontally and vertically inside a full-height container?',
        bn: 'কোন বুটস্ট্র্যাপ ইউটিলিটি ক্লাসের সমন্বয় কোনো উপাদানকে অনুভূমিক ও উল্লম্ব উভয় দিক থেকেই ঠিক কেন্দ্রে রাখে?'
      },
      options: [
        {
          en: 'd-flex justify-content-center align-items-center',
          bn: 'd-flex justify-content-center align-items-center (সঠিক ফ্লেক্সবক্স বিন্যাস)'
        },
        {
          en: 'float-center text-center',
          bn: 'float-center text-center (ভুল ক্লাস)'
        },
        {
          en: 'display-middle box-center',
          bn: 'display-middle box-center (ভুল ক্লাস)'
        },
        {
          en: 'position-absolute text-middle',
          bn: 'position-absolute text-middle (ভুল ক্লাস)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flex display with centered justify-content and align-items.',
        bn: 'ফ্লেক্সবক্সের justify-content ও align-items সেন্টারের কথা ভাবুন।'
      },
      explanation: {
        en: 'Combining d-flex with justify-content-center (horizontal alignment) and align-items-center (vertical alignment) perfectly centers items.',
        bn: 'd-flex ক্লাসের সাথে justify-content-center এবং align-items-center দিলে যেকোনো উপাদান নিখুঁতভাবে কেন্দ্রে বসে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-utilities-variable-wardrobe',
    title: {
      en: 'Bootstrap Utilities, Spacing & Theming Quiz',
      bn: 'বুটস্ট্র্যাপ ইউটিলিটি, স্পেসিং ও থিমিং কুইজ'
    },
    questions: [
      {
        id: 'q-bs-utility-important-flag',
        kind: 'mcq',
        topic: 'Why Bootstrap utilities utilize the !important rule',
        question: {
          en: 'Why do Bootstrap utility classes intentionally include the !important rule in their generated CSS declarations?',
          bn: 'বুটস্ট্র্যাপের ইউটিলিটি ক্লাসগুলোতে কেন ইচ্ছাকৃতভাবে !important নিয়ম যুক্ত করা থাকে?'
        },
        options: [
          {
            en: 'To guarantee that atomic utility overrides (like mt-0 or d-none) always take precedence over component internal default styles without specificity conflicts',
            bn: 'যাতে ইউটিলিটি ক্লাসগুলো (যেমন mt-0 বা d-none) উপাদানগুলোর নিজস্ব ডিফল্ট নিয়মের চেয়ে সবসময় বেশি প্রাধান্য পায়'
          },
          {
            en: 'Because CSS rules fail to compile without !important',
            bn: 'কারণ !important ছাড়া সিএসএস কোড কম্পাইল হতে পারে না'
          },
          {
            en: 'To prevent web browsers from caching the stylesheet',
            bn: 'ব্রাউজার যাতে স্টাইলশিট ক্যাশ করতে না পারে সেজন্য'
          },
          {
            en: 'To reduce mobile internet data consumption',
            bn: 'মোবাইলের ইন্টারনেট ডেটা খরচ কমাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Utilities represent explicit developer intent overriding component defaults.',
          bn: 'ডিফল্ট নিয়মের ওপর জোর দিয়ে প্রাধান্য দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Utilities are purposeful overrides. Including !important ensures that declaring m-0 removes margins even if a component defines its own margins.',
          bn: 'ইউটিলিটি ক্লাস হলো কোনো উপাদানের রূপ বদলানোর চূড়ান্ত নির্দেশ, তাই !important দিয়ে এর অগ্রাধিকার নিশ্চিত করা হয়।'
        }
      },
      {
        id: 'q-bs-scoped-theme-subtree',
        kind: 'mcq',
        topic: 'Applying localized themes to subtrees',
        question: {
          en: 'Can data-bs-theme="dark" be applied to a single component (such as a navbar or card) while the rest of the page remains in light mode?',
          bn: 'পুরো পেজ লাইট মোডে রেখে কেবল একটি নেভবার বা কার্ডে data-bs-theme="dark" ব্যবহার করা সম্ভব কি?'
        },
        options: [
          {
            en: 'Yes, data-bs-theme can be placed on any DOM container, scoping dark mode CSS variables strictly to that subtree',
            bn: 'হ্যাঁ, যেকোনো ডিভ বা কন্টেইনারে এটি বসানো যায় এবং কেবল সেই অংশের সিএসএস ভ্যারিয়েবল ডার্ক মোডে বদলে যায়'
          },
          {
            en: 'No, data-bs-theme is only valid on the root <html> tag',
            bn: 'না, এটি কেবল html ট্যাগে দেওয়া বৈধ'
          },
          {
            en: 'No, applying dark mode to cards crashes the web browser',
            bn: 'না, কার্ডে ডার্ক মোড দিলে ব্রাউজার ক্র্যাশ করে'
          },
          {
            en: 'Yes, but it requires restarting the computer operating system',
            bn: 'হ্যাঁ, তবে এর জন্য কম্পিউটার রিস্টার্ট করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Scoped theming works on any HTML container element.',
          bn: 'যেকোনো নির্দিষ্ট অংশে লোকাল থিম ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Because Bootstrap dark mode relies on CSS variables scoped by attribute, placing data-bs-theme="dark" on a <nav> themes only that navbar.',
          bn: 'সিএসএস ভ্যারিয়েবলের মাধ্যমে কাজ করায় যেকোনো নির্দিষ্ট অংশে খুব সহজেই ডার্ক থিম প্রয়োগ করা যায়।'
        }
      },
      {
        id: 'q-bs-bg-opacity-mechanics',
        kind: 'mcq',
        topic: 'How bg-opacity utilities manipulate transparency',
        question: {
          en: 'How do utilities like bg-opacity-50 create transparent backgrounds without making the child text transparent as well?',
          bn: 'bg-opacity-50 কীভাবে ভেতরের লেখাকে স্বচ্ছ না করে কেবল পেছনের ব্যাকগ্রাউন্ডকে স্বচ্ছ করে তোলে?'
        },
        options: [
          {
            en: 'It modulates the alpha channel on a background RGBA color variable (--bs-bg-opacity), leaving child text opacity unaffected',
            bn: 'এটি সিএসএস ভ্যারিয়েবলের মাধ্যমে শুধুমাত্র ব্যাকগ্রাউন্ডের আরজিবিএ (RGBA) আলফা কমায়, লেখার স্বচ্ছতায় হাত দেয় না'
          },
          {
            en: 'It uses CSS opacity: 0.5 on the entire container',
            bn: 'এটি পুরো কন্টেইনারে opacity: 0.5 বসায়'
          },
          {
            en: 'It deletes half of the pixels from the background image',
            bn: 'এটি ব্যাকগ্রাউন্ড থেকে অর্ধেক পিক্সেল মুছে ফেলে'
          },
          {
            en: 'It dims the brightness of the physical computer monitor',
            bn: 'এটি মনিটরের আলো কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Alpha channel modulation via --bs-bg-opacity custom property.',
          bn: 'সিএসএস ভ্যারিয়েবল দিয়ে শুধু ব্যাকগ্রাউন্ডের আলফা বদলানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Unlike CSS opacity (which fades children too), Bootstrap bg-opacity controls only the alpha channel of the background color via custom properties.',
          bn: 'ডিফল্ট সিএসএস অপাসিটি লেখাকেও হালকা করে ফেলে; কিন্তু বুটস্ট্র্যাপের এই ক্লাস কেবল পেছনের ব্যাকগ্রাউন্ডকে স্বচ্ছ করে।'
        }
      },
      {
        id: 'q-bs-spacing-side-letters',
        kind: 'mcq',
        topic: 'Directional letters in the spacing utility syntax',
        question: {
          en: 'In Bootstrap spacing utilities, what directions do the letters s and e represent in classes like ms-3 and pe-2?',
          bn: 'বুটস্ট্র্যাপের ms-3 বা pe-2 ক্লাসে s এবং e অক্ষর দুটি কোন দিককে নির্দেশ করে?'
        },
        options: [
          {
            en: 's represents start (left in LTR, right in RTL), and e represents end (right in LTR, left in RTL)',
            bn: 's দিয়ে শুরু বা start (বামে) এবং e দিয়ে শেষ বা end (ডানে) নির্দেশ করা হয়'
          },
          {
            en: 's stands for South and e stands for East',
            bn: 's দিয়ে দক্ষিণ এবং e দিয়ে পূর্ব বোঝায়'
          },
          {
            en: 's stands for small and e stands for extra',
            bn: 's দিয়ে ছোট এবং e দিয়ে অতিরিক্ত বোঝায়'
          },
          {
            en: 's stands for static and e stands for dynamic',
            bn: 's দিয়ে স্থির এবং e দিয়ে গতিশীল বোঝায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Logical properties: start and end support both LTR and RTL.',
          bn: 'ডান-বাম উভয় লেখার নিয়মকে সমর্থন করার জন্য start ও end ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Bootstrap 5 adopted logical properties (start and end) to provide seamless support for right-to-left (RTL) international languages like Arabic.',
          bn: 'ডান থেকে বামে লেখা ভাষার (যেমন আরবি) সুবিধার জন্য বুটস্ট্র্যাপ ৫ সংস্করণে মার্জিন ও প্যাডিংয়ে start ও end চালু করা হয়েছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-build-under-the-stage',
    tech: 'bootstrap',
    title: {
      en: 'Compiling with Sass, Custom Themes & Optimization',
      bn: 'স্যাশ দিয়ে কম্পাইল, কাস্টম থিম ও অপটিমাইজেশন'
    }
  }
};
