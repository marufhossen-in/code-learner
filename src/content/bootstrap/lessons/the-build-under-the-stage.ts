import type { Lesson } from '../../../lib/types';

export const TheBuildUnderTheStageLesson: Lesson = {
  slug: 'the-build-under-the-stage',
  tech: 'bootstrap',
  title: {
    en: 'Compiling with Sass, Custom Themes & Optimization',
    bn: 'স্যাশ দিয়ে কম্পাইল, কাস্টম থিম ও অপটিমাইজেশন'
  },
  summary: {
    en: 'While loading precompiled Bootstrap CSS through a CDN is convenient for rapid prototyping, production enterprise applications build Bootstrap directly from its Sass source code. Compiling from Sass provides complete architectural control over design tokens, theme color palettes, and bundle size. Central to Sass customization is the !default flag: a variable defined with !default is only assigned if it has not already been set. Consequently, declaring custom brand colors prior to importing Bootstrap variables smoothly overrides framework defaults. By merging new tokens into the $theme-colors map, adding 1 custom brand color to the 8 framework defaults produces 9 compiled theme variants. In this lesson, you will master Sass file ordering, selective module importing, and PurgeCSS safelisting for runtime state classes.',
    bn: 'সিডিএন (CDN) থেকে তৈরি সিএসএস লোড করে দ্রুত প্রোটোটাইপ বানানো সহজ হলেও বড় প্রোডাকশন অ্যাপ্লিকেশনে বুটস্ট্র্যাপের মূল স্যাশ (Sass) সোর্স কোড থেকে বিল্ড করা হয়। স্যাশ দিয়ে কম্পাইল করলে ডিজাইনের রঙ, ফন্ট এবং ফাইলের আকারের ওপর পূর্ণ নিয়ন্ত্রণ থাকে। এই প্রক্রিয়ার মূল চাবিকাঠি হলো স্যাশের !default ফ্ল্যাগ: এই ফ্ল্যাগযুক্ত ভ্যারিয়েবলে কেবল তখনই মান বসে যদি আগে থেকে মান নির্ধারণ করা না থাকে। তাই বুটস্ট্র্যাপ ফাইল লোডের আগেই নিজস্ব রঙের মান ঘোষণা করলে ফ্রেমওয়ার্কের ডিফল্ট রঙ সুন্দরভাবে বদলে যায়। ডিফল্ট ৮টি রঙের সাথে ১টি নতুন ব্র্যান্ডের রঙ মার্জ করলে মোট ৯টি থিম ভ্যারিয়েন্ট তৈরি হয়। এই পাঠে স্যাশ ইমপোর্ট ক্রম, প্রয়োজনীয় মডিউল বাছাই এবং ডায়নামিক ক্লাসের জন্য পার্জসিএস (PurgeCSS) কনফিগারেশন শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Source Compilation and Design Tokens',
        bn: 'মূল ধারণা: সোর্স কম্পাইলেশন ও ডিজাইন টোকেন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you develop professional applications, relying on default purple and blue styles makes your product look identical to thousands of other websites. Overriding compiled CSS classes using !important creates specificity wars that degrade maintainability. The proper engineering approach compiles Bootstrap from its Sass source, injecting your custom brand variables directly into the token pipeline.',
        bn: 'আপনি যখন পেশাদার অ্যাপ্লিকেশন তৈরি করেন, তখন বুটস্ট্র্যাপের ডিফল্ট বেগুনি বা নীল রঙ রাখলে আপনার সাইটটিকে হাজারটা সাধারণ সাইটের মতোই দেখায়। পরে জোর করে সিএসএস ফাইলে !important দিয়ে রঙ বদলাতে গেলে কোডের জটিলতা বহুগুণ বেড়ে যায়। আসল ইঞ্জিনিয়ারিং পদ্ধতি হলো বুটস্ট্র্যাপের মূল স্যাশ (Sass) সোর্স থেকে কোড কম্পাইল করা, যাতে নিজস্ব ব্র্যান্ডের রঙ সরাসরি মূল স্টাইলে যুক্ত হয়ে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The !default Sass Flag',
          def: {
            en: 'A Sass directive instructing the compiler to assign a value only if that variable has not already been declared in an earlier file',
            bn: 'স্যাশের একটি নির্দেশ যা বলে ভ্যারিয়েবলে যদি আগে থেকে মান না থাকে, তবেই কেবল এই ডিফল্ট মানটি বসাও'
          }
        },
        {
          term: 'The $theme-colors Map',
          def: {
            en: 'A foundational Sass key-value dictionary containing semantic color tokens (primary, success, danger) used to generate all component variants',
            bn: 'স্যাশের একটি প্রধান কালার ডিকশনারি যার রঙের ওপর ভিত্তি করে বোতাম, অ্যালার্ট ও ব্যাকগ্রাউন্ডের সমস্ত ক্লাস তৈরি হয়'
          }
        },
        {
          term: 'Selective Module Cherry-Picking',
          def: {
            en: 'Importing only needed Bootstrap SCSS components (like grid and buttons) while omitting unused features (like carousels or accordions)',
            bn: 'অপ্রয়োজনীয় অংশ বাদ দিয়ে কেবল প্রয়োজনীয় এসসিএসএস ফাইলগুলো ইমপোর্ট করে সিএসএস ফাইল ছোট রাখার পদ্ধতি'
          }
        },
        {
          term: 'PurgeCSS Safelisting',
          def: {
            en: 'Configuring CSS tree-shakers to preserve runtime state classes (.show, .collapsing, .fade) that JavaScript toggles dynamically',
            bn: 'জাভাস্ক্রিপ্ট দিয়ে যুক্ত হওয়া ডায়নামিক ক্লাসগুলোকে পার্জসিএস যাতে ভুলবশত মুছে না ফেলে তা নিশ্চিত করার তালিকা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'import-order-table',
      text: {
        en: 'The Mandatory Sass Import Sequence',
        bn: 'স্যাশ ইমপোর্টের আবশ্যকীয় ক্রমধারা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Step-by-Step Architecture for Customizing Bootstrap via Sass',
        bn: 'স্যাশ দিয়ে বুটস্ট্র্যাপ কাস্টমাইজ করার প্রতিটি ধাপের ক্রম'
      },
      head: [
        { en: 'Step', bn: 'ধাপ' },
        { en: 'File or Import Target', bn: 'ফাইল বা ইমপোর্ট টার্গেট' },
        { en: 'Architectural Reason', bn: 'কারিগরি কারণ' }
      ],
      rows: [
        [
          { en: 'Step 1', bn: '১ম ধাপ' },
          { en: '@import "bootstrap/scss/functions";', bn: '@import "bootstrap/scss/functions";' },
          { en: 'Loads color contrast and mathematical helper functions needed by subsequent files', bn: 'পরবর্তী ফাইলের জন্য প্রয়োজনীয় কালার কনট্রাস্ট ও গাণিতিক ফাংশন লোড করে' }
        ],
        [
          { en: 'Step 2', bn: '২য় ধাপ' },
          { en: '$primary: #ff6600; $font-family-base: "Inter";', bn: '$primary: #ff6600; $font-family-base: "Inter";' },
          { en: 'Declares custom variables BEFORE Bootstrap defaults are loaded', bn: 'বুটস্ট্র্যাপের নিজস্ব ফাইল লোডের আগেই আপনার কাস্টম ভ্যারিয়েবল ঘোষণা করুন' }
        ],
        [
          { en: 'Step 3', bn: '৩য় ধাপ' },
          { en: '@import "bootstrap/scss/variables";', bn: '@import "bootstrap/scss/variables";' },
          { en: 'Loads framework default tokens; skipped for any variables defined in Step 2 via !default', bn: 'ডিফল্ট মান লোড করে; কিন্তু ২য় ধাপে ঘোষিত ভ্যারিয়েবলগুলোকে অক্ষুণ্ণ রাখে' }
        ],
        [
          { en: 'Step 4', bn: '৪র্থ ধাপ' },
          { en: '$theme-colors: map-merge($theme-colors, ("brand": #ff6600));', bn: '$theme-colors: map-merge($theme-colors, ("brand": #ff6600));' },
          { en: 'Merges custom palette tokens into framework maps after $theme-colors is defined', bn: 'ম্যাপ লোড হওয়ার পর নতুন ব্র্যান্ডের রঙ মূল কালার ম্যাপের সাথে যুক্ত করে' }
        ],
        [
          { en: 'Step 5', bn: '৫ম ধাপ' },
          { en: '@import "bootstrap/scss/bootstrap"; (or cherry-pick modules)', bn: '@import "bootstrap/scss/bootstrap"; (বা বাছাইকৃত ফাইল)' },
          { en: 'Compiles layout grids, utilities, and chosen component CSS rules', bn: 'গ্রিড, ইউটিলিটি এবং উপাদানগুলোর ফাইনাল সিএসএস কোড কম্পাইল করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Sass Theme-Colors Map Merging',
        bn: 'চালনাযোগ্য সিমুলেশন: স্যাশ থিম কালার ম্যাপ মার্জিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates merging a custom brand color token into the standard Bootstrap 8-color theme map:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি বুটস্ট্র্যাপের মূল ৮টি রঙের সাথে নতুন ১টি কাস্টম ব্র্যান্ডের রঙ মার্জ করে মোট ৯টি রঙের হিসাব দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-sass-map-sim',
      lang: 'javascript',
      code: `// Bootstrap Sass Theme-Colors Map Merge Simulator
const defaultThemeColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark'
];

const customThemeColors = ['brand'];

const totalMergedVariants = defaultThemeColors.length + customThemeColors.length;

console.log('Default semantic colors in Bootstrap $theme-colors map:', defaultThemeColors.length);
// -> Default semantic colors in Bootstrap $theme-colors map: 8

console.log('Custom brand palette tokens to merge into theme map:', customThemeColors.length);
// -> Custom brand palette tokens to merge into theme map: 1

console.log('Total compiled theme color variants generated in CSS:', totalMergedVariants);
// -> Total compiled theme color variants generated in CSS: 9`,
      caption: {
        en: 'Figure 1: Merging 1 custom brand color into the 8 default theme colors compiles 9 total semantic color variants across buttons, alerts, and badges',
        bn: 'চিত্র ১: ডিফল্ট ৮টি রঙের সাথে ১টি নতুন ব্র্যান্ডের রঙ মার্জ করলে মোট ৯টি রঙের বোতাম, ব্যাজ ও অ্যালার্ট ক্লাস তৈরি হয়'
      }
    },
    {
      type: 'heading',
      id: 'purgecss-safelisting-rules',
      text: {
        en: 'Optimizing and Safelisting with PurgeCSS',
        bn: 'পার্জসিএস দিয়ে অপটিমাইজেশন ও সেফলিস্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Full compiled Bootstrap CSS weighs roughly 220 kilobytes uncompressed. When running PurgeCSS or UnCSS in build pipelines to strip unused rules, static scanners parse your HTML templates for class names. However, classes toggled dynamically by Bootstrap JavaScript runtime are absent from static templates. If PurgeCSS deletes these classes, your components break in production:',
        bn: 'বুটস্ট্র্যাপের পুরো সিএসএস ফাইল প্রায় ২২০ কিলোবাইট। পার্জসিএস দিয়ে অব্যবহৃত কোড কাটার সময় এটি কেবল এইচটিএমএল ফাইলে থাকা ক্লাসগুলো খোঁজে। কিন্তু জাভাস্ক্রিপ্ট দিয়ে পরবর্তীতে যোগ হওয়া ক্লাসগুলো তখন এইচটিএমএলে থাকে না। ফলে পার্জসিএস সেগুলো মুছে ফেললে প্রোডাকশনে ড্রপডাউন বা মোডাল কাজ করা বন্ধ করে দেয়:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Critical Modal & Dropdown Classes',
          def: {
            en: 'Classes .show, .fade, .modal-backdrop, and .collapsing must be safelisted so animated transitions render correctly',
            bn: '.show, .fade, ও .collapsing ক্লাসগুলো সেফলিস্টে রাখা আবশ্যক যাতে অ্যানিমেশন সঠিকভাবে দৃশ্যমান হয়'
          }
        },
        {
          term: 'Validation State Classes',
          def: {
            en: 'Classes .was-validated, .is-invalid, and .is-valid added during submission must be protected from build purging',
            bn: 'ফর্ম সাবমিটে যোগ হওয়া .was-validated ও .is-invalid ক্লাসগুলোকে মুছে যাওয়া থেকে বাঁচাতে হয়'
          }
        },
        {
          term: 'Regular Expression Safelist Patterns',
          def: {
            en: 'Using regex patterns like /^modal-/ or /^dropdown-/ in PurgeCSS configuration to preserve all plugin subcomponents effortlessly',
            bn: '/^modal-/ এর মতো রেজেক্স ব্যবহার করে নির্দিষ্ট প্লাগইনের সমস্ত ক্লাস স্বয়ংক্রিয়ভাবে সুরক্ষিত রাখা যায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-theme-map-calc-ex',
      kind: 'mcq',
      topic: 'Count of compiled variants after map merging',
      question: {
        en: 'If a project merges 1 custom brand color token into the 8 default Bootstrap theme colors, how many total theme variants are generated in the compiled stylesheet?',
        bn: 'ডিফল্ট ৮টি বুটস্ট্র্যাপ রঙের সাথে ১টি নিজস্ব ব্র্যান্ডের রঙ মার্জ করলে কম্পাইল করা স্টাইলশিটে মোট কয়টি রঙের ভ্যারিয়েন্ট তৈরি হয়?'
      },
      options: [
        {
          en: '9 total theme color variants',
          bn: 'মোট ৯টি কালার ভ্যারিয়েন্ট'
        },
        {
          en: '8 variants (custom colors are ignored)',
          bn: '৮টি ভ্যারিয়েন্ট (কাস্টম রঙ বাদ যায়)'
        },
        {
          en: '100 variants',
          bn: '১০০টি ভ্যারিয়েন্ট'
        },
        {
          en: '1 variant only',
          bn: 'কেবল ১টি ভ্যারিয়েন্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Add 1 custom color to the 8 default colors (8 + 1 = 9).',
        bn: '৮ এর সাথে ১ যোগ করলে ৯ হয়।'
      },
      explanation: {
        en: 'The Sass map-merge function appends your 1 new color key to the 8 existing framework keys, compiling 9 complete variant suites.',
        bn: 'স্যাশ map-merge ফাংশন ৮টি ডিফল্ট চাবির সাথে ১টি নতুন চাবি যোগ করে মোট ৯টি ক্লাসের সেট তৈরি করে।'
      }
    },
    {
      id: 'bs-default-flag-mechanics-ex',
      kind: 'mcq',
      topic: 'How the Sass !default flag works during variable assignment',
      question: {
        en: 'What does the !default flag signify on a variable declaration like $primary: #0d6efd !default; inside Bootstrap source files?',
        bn: 'বুটস্ট্র্যাপ সোর্স ফাইলে $primary: #0d6efd !default; লেখার ভেতরে !default ফ্ল্যাগটির কাজ কী?'
      },
      options: [
        {
          en: 'It assigns the value only if the variable has not already been assigned a value earlier in the compilation cascade',
          bn: 'এটি ভ্যারিয়েবলে কেবল তখনই মান বসায় যদি আগে কোথাও এর মান নির্ধারণ করা না হয়ে থাকে'
        },
        {
          en: 'It makes the variable unchangeable under all circumstances',
          bn: 'এটি ভ্যারিয়েবলকে কোনোভাবেই পরিবর্তন করতে দেয় না'
        },
        {
          en: 'It deletes the variable from the computer memory',
          bn: 'এটি কম্পিউটার মেমোরি থেকে ভ্যারিয়েবল মুছে ফেলে'
        },
        {
          en: 'It converts the color into a black-and-white grayscale value',
          bn: 'এটি রঙকে সাদা-কালো গ্রে-স্কেলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Assign only if not already set.',
        bn: 'আগে মান না থাকলেই কেবল মান বসানোর কথা ভাবুন।'
      },
      explanation: {
        en: '!default enables user overrides: if you define $primary: #ff6600 before Bootstrap loads, the !default rule is skipped and your color wins.',
        bn: '!default থাকার কারণেই আগে থেকে নিজস্ব রঙ নির্ধারণ করে রাখলে বুটস্ট্র্যাপ নিজের ডিফল্ট রঙ না চাপিয়ে আপনার রঙটিকেই গ্রহণ করে।'
      }
    },
    {
      id: 'bs-purgecss-danger-ex',
      kind: 'mcq',
      topic: 'Preventing broken components during CSS tree-shaking',
      question: {
        en: 'Why must runtime state classes like .show, .fade, and .collapsing be safelisted in PurgeCSS build pipelines?',
        bn: 'পার্জসিএস বিল্ডের সময় .show, .fade ও .collapsing ক্লাসগুলো কেন সেফলিস্টে রাখা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Because these classes are added dynamically by JavaScript at runtime; static HTML scanners will mistake them as unused and delete them',
          bn: 'কারণ এগুলো জাভাস্ক্রিপ্ট দিয়ে পরে যুক্ত হয়; এইচটিএমএলে না দেখে পার্জসিএস এগুলোকে অপ্রয়োজনীয় ভেবে মুছে ফেলে'
        },
        {
          en: 'Because these classes contain computer viruses',
          bn: 'কারণ এই ক্লাসগুলোতে ভাইরাস থাকে'
        },
        {
          en: 'PurgeCSS cannot read CSS files written in English',
          bn: 'পার্জসিএস ইংরেজি সিএসএস পড়তে পারে না'
        },
        {
          en: 'To make the CSS file download 10 times slower',
          bn: 'সিএসএস ফাইল ডাউনলোড ১০ গুণ ধীরগতির করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dynamic runtime classes are invisible to static template scanners.',
        bn: 'জাভাস্ক্রিপ্ট দিয়ে পরে যোগ হওয়া ক্লাস মুছে যাওয়া ঠেকানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'If PurgeCSS strips .show or .fade, modals and dropdowns fail to display when users click triggers. Safelisting preserves them in the compiled CSS.',
        bn: 'পার্জসিএস যদি .show ক্লাস কেটে ফেলে, তবে ক্লিক করলেও ড্রপডাউন বা মোডাল আর পর্দায় দৃশ্যমান হতে পারবে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-build-under-the-stage',
    title: {
      en: 'Sass Compilation, Theming & Optimization Quiz',
      bn: 'স্যাশ কম্পাইলেশন, থিমিং ও অপটিমাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'q-bs-functions-first',
        kind: 'mcq',
        topic: 'Why Bootstrap functions must be imported first',
        question: {
          en: 'Why must @import "bootstrap/scss/functions"; be imported before custom variable overrides that calculate contrast?',
          bn: 'কাস্টম ভ্যারিয়েবল লেখার আগে কেন সবার প্রথমে @import "bootstrap/scss/functions"; ইমপোর্ট করা আবশ্যক?'
        },
        options: [
          {
            en: 'Subsequent variable definitions and maps call color-contrast() and tint-color() helper functions defined inside functions.scss',
            bn: 'পরবর্তী ভ্যারিয়েবল ও ম্যাপগুলোতে color-contrast() এবং tint-color()-এর মতো গাণিতিক ফাংশনগুলোর প্রয়োজন হয়'
          },
          {
            en: 'Because Sass cannot run without functions',
            bn: 'কারণ ফাংশন ছাড়া স্যাশ চলতেই পারে না'
          },
          {
            en: 'To speed up web server database transactions',
            bn: 'ওয়েব সার্ভারের ডাটাবেসের গতি বাড়ানোর জন্য'
          },
          {
            en: 'It converts the Sass code into Python script',
            bn: 'এটি স্যাশ কোডকে পাইথন স্ক্রিপ্টে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Helper functions for color math and contrast checks.',
          bn: 'রঙের কনট্রাস্ট ও গাণিতিক হিসাবের ফাংশন লোড করার কথা ভাবুন।'
        },
        explanation: {
          en: 'functions.scss defines essential mathematical routines that calculate automatic high-contrast text colors for buttons and badges.',
          bn: 'functions.scss-এ থাকা ফাংশনগুলো যেকোনো রঙের ওপর স্বয়ংক্রিয়ভাবে সাদা বা কালো লেখার স্পষ্ট রঙ নির্ধারণ করে।'
        }
      },
      {
        id: 'q-bs-cherry-pick-benefit',
        kind: 'mcq',
        topic: 'Performance benefit of cherry-picking SCSS modules',
        question: {
          en: 'What is the primary production benefit of selectively cherry-picking only required SCSS files instead of importing all of Bootstrap?',
          bn: 'পুরো বুটস্ট্র্যাপ ইমপোর্ট না করে কেবল প্রয়োজনীয় এসসিএসএস ফাইল বাছাই করে ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'It dramatically reduces final CSS bundle size by omitting unused features like carousels, accordions, and tables',
            bn: 'ক্যারোসেল বা টেবিলের মতো অপ্রয়োজনীয় কোড বাদ দিয়ে এটি ফাইনাল সিএসএস ফাইলের আকার বহুলাংশে কমিয়ে আনে'
          },
          {
            en: 'It eliminates the need for an internet connection',
            bn: 'এটি ইন্টারনেট সংযোগের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'It makes all web pages load in black and white only',
            bn: 'এটি সব পেজকে কেবল সাদা-কালো করে লোড করায়'
          },
          {
            en: 'It prevents competitors from viewing your website',
            bn: 'এটি প্রতিদ্বন্দ্বীদের সাইট দেখতে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Smaller CSS payloads improve load times and Core Web Vitals.',
          bn: 'ছোট সাইজের সিএসএস ফাইল দ্রুত লোড হওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Selective imports keep CSS payloads lean, improving mobile load speeds and Google Core Web Vitals metrics.',
          bn: 'প্রয়োজনীয় কোডটুকু রাখলে ফাইল সাইজ অনেক হালকা হয় এবং মোবাইল ফোনে ওয়েবসাইট চোখের পলকে লোড হয়।'
        }
      },
      {
        id: 'q-bs-map-merge-function',
        kind: 'mcq',
        topic: 'How Sass map-merge integrates new colors safely',
        question: {
          en: 'Why should you use Sass map-merge() rather than reassigning $theme-colors from scratch when adding brand colors?',
          bn: 'নতুন রঙ যোগ করতে পুরো $theme-colors নতুন করে না লিখে কেন স্যাশের map-merge() ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'Reassigning from scratch accidentally wipes out essential framework defaults like primary, danger, and success',
            bn: 'পুরো ম্যাপ নতুন করে লিখলে primary বা danger-এর মতো প্রয়োজনীয় ডিফল্ট রঙগুলো ভুলবশত মুছে যায়'
          },
          {
            en: 'map-merge is required by JavaScript browsers',
            bn: 'ব্রাউজারে জাভাস্ক্রিপ্ট চালাতে map-merge বাধ্যতামূলক'
          },
          {
            en: 'Because Sass crashes if a map has more than 3 keys',
            bn: 'কারণ ম্যাপে ৩টির বেশি চাবি থাকলে স্যাশ ক্র্যাশ করে'
          },
          {
            en: 'It forces all buttons to become 500 pixels wide',
            bn: 'এটি সব বোতামের প্রস্থ ৫০০ পিক্সেল করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Merging preserves default colors while appending custom ones.',
          bn: 'আগের রঙগুলো অক্ষুণ্ণ রেখে নতুন রঙ জোড়া লাগানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'map-merge safely non-destructively joins your custom color keys with the existing 8 framework colors without destroying defaults.',
          bn: 'map-merge ব্যবহারের ফলে বুটস্ট্র্যাপের নিজস্ব ৮টি রঙের কোনো ক্ষতি না করে সহজেই নতুন রঙ যুক্ত করা সম্ভব হয়।'
        }
      },
      {
        id: 'q-bs-variables-order-pitfall',
        kind: 'mcq',
        topic: 'Common failure when ordering custom Sass variable files',
        question: {
          en: 'What happens if a developer places their custom $primary: #ff6600 declaration AFTER @import "bootstrap/scss/variables";?',
          bn: 'যদি কোনো ডেভেলপার @import "bootstrap/scss/variables"; এর পরে নিজের কাস্টম $primary রঙ ঘোষণা করেন, তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'The custom override will silently do nothing because Bootstrap !default variables were already resolved using the default blue color',
            bn: 'কাস্টম রঙটি কোনো কাজই করবে না, কারণ বুটস্ট্র্যাপের !default নিয়ম ততক্ষণে ডিফল্ট নীল রঙ গ্রহণ করে ফেলেছে'
          },
          {
            en: 'The Sass compiler crashes with a fatal syntax error',
            bn: 'স্যাশ কম্পাইলার মারাত্মক ত্রুটি দিয়ে বন্ধ হয়ে যাবে'
          },
          {
            en: 'The website displays only raw CSS code on the screen',
            bn: 'পর্দায় ওয়েবসাইটের বদলে কেবল সিএসএস কোড দেখা যাবে'
          },
          {
            en: 'It changes all images on the page into orange squares',
            bn: 'এটি পেজের সব ছবিকে কমলা রঙের চারকোনা বানিয়ে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: '!default variables must be overridden BEFORE they are evaluated.',
          bn: 'বুটস্ট্র্যাপের ফাইল লোডের আগেই কাস্টম মান ঘোষণার কথা ভাবুন।'
        },
        explanation: {
          en: 'Because Bootstrap variables use !default, declaring overrides after variables.scss means the default value was already bound.',
          bn: '!default এর নিয়মই হলো এটি পরে লেখা কোডকে তোয়াক্কা করে না, তাই কাস্টম ভ্যারিয়েবল সবসময় আগে ঘোষণা করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-long-shadow',
    tech: 'bootstrap',
    title: {
      en: 'Bootstrap in Modern Architecture: Migrations & Design Systems',
      bn: 'আধুনিক আর্কিটেকচারে বুটস্ট্র্যাপ: মাইগ্রেশন ও ডিজাইন সিস্টেম'
    }
  }
};
