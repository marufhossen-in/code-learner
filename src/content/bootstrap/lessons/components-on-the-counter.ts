import type { Lesson } from '../../../lib/types';

export const ComponentsOnTheCounterLesson: Lesson = {
  slug: 'components-on-the-counter',
  tech: 'bootstrap',
  title: {
    en: 'Core UI Components: Buttons, Cards, Badges & Navbars',
    bn: 'মূল ইউআই উপাদান: বোতাম, কার্ড, ব্যাজ ও নেভবার'
  },
  summary: {
    en: 'Bootstrap ships a comprehensive library of pre-styled, accessible user interface components engineered using the base-class plus modifier-class pattern. Instead of hardcoding visual styles into single compound classes, elements pair structural foundations like btn or card with semantic modifiers like btn-primary or card-header. In Bootstrap 5, components no longer rely on brittle deep CSS selectors; instead, each component encapsulates its own set of scoped CSS custom properties such as --bs-btn-bg and --bs-btn-color. This lesson guides you through constructing responsive navigation bars with mobile hamburger togglers, assembling structured card containers, creating dismissible alerts with accessible close buttons, and locally theming components using 4 scoped CSS variables.',
    bn: 'বুটস্ট্র্যাপে তৈরি করা আছে প্রাক-ডিজাইন করা ও অ্যাক্সেসিবল ইউআই উপাদানের এক সমৃদ্ধ লাইব্রেরি, যা বেস-ক্লাস এবং মডিফায়ার-ক্লাস পদ্ধতিতে তৈরি। একটি মাত্র দীর্ঘ ক্লাসে সব লেখার বদলে btn বা card-এর মতো মৌলিক কাঠামোর সাথে btn-primary বা card-header-এর মতো অর্থপূর্ণ ক্লাস জোড়া লাগানো হয়। বুটস্ট্র্যাপ ৫ সংস্করণে প্রতিটি উপাদানের নিজস্ব সিএসএস ভ্যারিয়েবল (যেমন --bs-btn-bg ও --bs-btn-color) অন্তর্ভুক্ত করা হয়েছে, ফলে সিএসএস ক্লাস না ভেঙে সহজেই রঙ বদলানো যায়। এই পাঠে মোবাইলের হ্যামবার্গার মেনুযুক্ত রেসপনসিভ নেভবার, সুগঠিত কার্ড, নিজে বন্ধ হওয়া অ্যালার্ট বক্স এবং ৪টি কাস্টম সিএসএস ভ্যারিয়েবল দিয়ে লোকাল থিমিং করার কৌশল শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Base Classes and Semantic Modifiers',
        bn: 'মূল ধারণা: বেস ক্লাস ও অর্থপূর্ণ মডিফায়ার'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you engineer design systems, components must decouple geometry from color aesthetics. In Bootstrap, an interactive control separates its structural foundation from its visual role. Applying .btn grants physical padding, font weights, and border resets, while .btn-primary injects semantic brand colors and focus ring states. This separation enables rapid theme variations while maintaining uniform button shapes.',
        bn: 'আপনি যখন ডিজাইন সিস্টেম তৈরি করেন, তখন উপাদানের আকার ও রঙের বৈশিষ্ট্য আলাদা রাখা জরুরি। বুটস্ট্র্যাপে কোনো উপাদানের গঠন এবং রঙের ভূমিকা আলাদা ক্লাসে পরিচালিত হয়। যেমন .btn ক্লাস প্যাডিং, ফন্ট সাইজ এবং বর্ডার ঠিক করে, আর .btn-primary ক্লাস ব্র্যান্ডের রঙ ও ফোকাস আউটলাইন যোগ করে। এই নীতি মেনে চলার ফলে ওয়েবসাইটের সমস্ত বোতামের আকার একরকম রেখে সহজেই রঙ পরিবর্তন করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Base + Modifier Architecture',
          def: {
            en: 'A CSS authoring convention where a base class establishes layout geometry while modifier classes configure theme colors and sizes',
            bn: 'একটি সিএসএস কাঠামো যেখানে বেস ক্লাস লেআউট ও আকার নির্ধারণ করে এবং মডিফায়ার ক্লাস রঙ ও ভ্যারিয়েন্ট ঠিক করে'
          }
        },
        {
          term: 'Component CSS Custom Properties',
          def: {
            en: 'Scoped CSS variables declared directly on component base selectors (e.g. --bs-btn-bg), enabling component-level theming without selector battles',
            bn: 'উপাদানগুলোতে সরাসরি ঘোষিত সিএসএস ভ্যারিয়েবল (যেমন --bs-btn-bg) যার মাধ্যমে ক্লাস না ভেঙেই রঙ বা বর্ডার বদলানো যায়'
          }
        },
        {
          term: 'Card Container Pattern',
          def: {
            en: 'A flexible content box featuring optional headers, footers, images, and contextual bodies with built-in border and radius styling',
            bn: 'বর্ডার ও প্যাডিংসহ একটি নমনীয় বাক্স যাতে হেডার, ফুটার, ছবি এবং টেক্সট সুবিন্যস্তভাবে সাজানো যায়'
          }
        },
        {
          term: 'Responsive Navbar Collapse',
          def: {
            en: 'A top navigation bar that collapses behind a hamburger button on mobile screens and expands into a horizontal list on desktop viewports',
            bn: 'একটি নেভবার যা মোবাইলে হ্যামবার্গার মেনুর পেছনে লুকায় এবং ডেস্কটপে পাশাপাশি সারিবদ্ধ হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'component-anatomy-table',
      text: {
        en: 'Core Bootstrap Component Hierarchy',
        bn: 'বুটস্ট্র্যাপ মূল কম্পোনেন্টের কাঠামো'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Structural Anatomy and Classes of Essential Bootstrap Components',
        bn: 'বুটস্ট্র্যাপের প্রধান প্রধান ইউআই উপাদানের গঠন ও ক্লাসসমূহ'
      },
      head: [
        { en: 'Component', bn: 'উপাদান' },
        { en: 'Base & Subcomponent Classes', bn: 'মূল ও উপ-ক্লাসসমূহ' },
        { en: 'Accessibility & Behavioral Contract', bn: 'অ্যাক্সেসিবিলিটি ও কাজের ধরন' }
      ],
      rows: [
        [
          { en: 'Button (.btn)', bn: 'বোতাম (.btn)' },
          { en: '.btn, .btn-primary, .btn-outline-danger, .btn-sm', bn: '.btn, .btn-primary, .btn-outline-danger' },
          { en: 'Native button element preferred; anchor tags require role="button" and aria-disabled', bn: 'নেটিভ বোতাম ব্যবহার আদর্শ; এঙ্কর ট্যাগে role="button" দিতে হয়' }
        ],
        [
          { en: 'Card (.card)', bn: 'কার্ড (.card)' },
          { en: '.card, .card-header, .card-body, .card-footer', bn: '.card, .card-header, .card-body, .card-footer' },
          { en: 'Provides semantic grouping for images, titles, and text without hardcoded widths', bn: 'নির্দিষ্ট প্রস্থ না চাপিয়ে ছবি ও লেখাকে সুন্দর বাক্সে আটকে রাখে' }
        ],
        [
          { en: 'Alert (.alert)', bn: 'অ্যালার্ট (.alert)' },
          { en: '.alert, .alert-success, .alert-dismissible, .btn-close', bn: '.alert, .alert-success, .alert-dismissible' },
          { en: 'Requires role="alert" and an accessible close button with aria-label="Close"', bn: 'স্ক্রিন রিডারের জন্য role="alert" এবং বন্ধের জন্য aria-label থাকা দরকার' }
        ],
        [
          { en: 'Navbar (.navbar)', bn: 'নেভবার (.navbar)' },
          { en: '.navbar, .navbar-expand-lg, .navbar-toggler, .collapse', bn: '.navbar, .navbar-expand-lg, .navbar-toggler' },
          { en: 'Uses aria-expanded and aria-controls on the mobile toggler button to announce menu state', bn: 'মোবাইল মেনু খোলা বা বন্ধ বোঝাতে aria-expanded টগল করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Component CSS Custom Property Enumerator',
        bn: 'চালনাযোগ্য সিমুলেশন: কম্পোনেন্ট সিএসএস ভ্যারিয়েবল গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script inspects the scoped CSS custom properties that power a Bootstrap 5 button component:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি বুটস্ট্র্যাপ ৫ বোতামের পেছনের ৪টি নির্দিষ্ট সিএসএস ভ্যারিয়েবল শনাক্ত ও প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'bs-component-vars-sim',
      lang: 'javascript',
      code: `// Bootstrap 5 Button Scoped CSS Custom Properties Validator
const buttonVars = [
  '--bs-btn-bg',
  '--bs-btn-border-color',
  '--bs-btn-color',
  '--bs-btn-hover-bg'
];

const varCount = buttonVars.length;

console.log('Total scoped CSS variables controlling the button component:', varCount);
// -> Total scoped CSS variables controlling the button component: 4

console.log('Primary background custom property token:', buttonVars[0]);
// -> Primary background custom property token: --bs-btn-bg

console.log('Border color custom property token:', buttonVars[1]);
// -> Border color custom property token: --bs-btn-border-color

console.log('Foreground text color custom property token:', buttonVars[2]);
// -> Foreground text color custom property token: --bs-btn-color

console.log('Hover state background custom property token:', buttonVars[3]);
// -> Hover state background custom property token: --bs-btn-hover-bg`,
      caption: {
        en: 'Figure 1: Exactly 4 scoped CSS variables govern button styling in Bootstrap 5, allowing developers to re-theme buttons inline without writing new CSS rules',
        bn: 'চিত্র ১: বুটস্ট্র্যাপ ৫ সংস্করণে ঠিক ৪টি সিএসএস ভ্যারিয়েবল বোতামের রূপ নিয়ন্ত্রণ করে, ফলে নতুন সিএসএস না লিখেও বোতামের রঙ সহজে বদলানো যায়'
      }
    },
    {
      type: 'heading',
      id: 'accessible-components-guide',
      text: {
        en: 'Engineering Accessible UI Components',
        bn: 'অ্যাক্সেসিবল ইউআই উপাদান তৈরির নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Visual aesthetics must never compromise assistive technology access. When implementing Bootstrap components, developers must ensure proper semantic attributes are wired into the HTML markup:',
        bn: 'ডিজাইনের সৌন্দর্যের খাতিরে অ্যাক্সেসিবিলিটি বিসর্জন দেওয়া যাবে না। বুটস্ট্র্যাপের উপাদানগুলো ব্যবহারের সময় এইচটিএমএল কোডে সঠিক অ্যাট্রিবিউট বজায় রাখতে হবে:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Visually Hidden Spans (.visually-hidden)',
          def: {
            en: 'Hides supplementary context from sighted screens while preserving text announcements for screen readers (crucial for badge counters)',
            bn: 'স্ক্রিনে লেখা লুকিয়ে কেবল দৃষ্টিহীনদের স্ক্রিন রিডারকে বিস্তারিত অর্থ পড়ে শোনানোর ক্লাস (যেমন নোটিফিকেশনের সংখ্যায়)'
          }
        },
        {
          term: 'Dismiss Button Semantics',
          def: {
            en: 'The .btn-close element must include an explicit aria-label="Close" attribute because it contains no inner text content',
            bn: '.btn-close এলিমেন্টে কোনো লেখা না থাকায় এতে স্পষ্ট aria-label="Close" থাকা বাধ্যতামূলক'
          }
        },
        {
          term: 'Navbar Toggler State Sync',
          def: {
            en: 'The hamburger button must synchronize aria-expanded="false" to "true" when the navigation menu expands on mobile devices',
            bn: 'মোবাইলে মেনু খুললে বা বন্ধ হলে হ্যামবার্গার বোতামের aria-expanded মান স্বয়ংক্রিয়ভাবে বদলাতে হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-button-vars-ex',
      kind: 'mcq',
      topic: 'Count of scoped CSS variables governing a Bootstrap button',
      question: {
        en: 'According to the component simulation, how many core scoped CSS variables govern the base styling and hover states of a Bootstrap 5 button?',
        bn: 'কম্পোনেন্ট সিমুলেশন অনুযায়ী বুটস্ট্র্যাপ ৫ বোতামের রূপ ও হোভার অবস্থা নিয়ন্ত্রণে কয়টি প্রধান সিএসএস ভ্যারিয়েবল ব্যবহৃত হয়?'
      },
      options: [
        {
          en: '4 scoped variables (--bs-btn-bg, border, color, hover-bg)',
          bn: '৪টি ভ্যারিয়েবল (--bs-btn-bg, border, color, hover-bg)'
        },
        {
          en: '20 scoped variables',
          bn: '২০টি ভ্যারিয়েবল'
        },
        {
          en: '1 variable only',
          bn: 'কেবল ১টি ভ্যারিয়েবল'
        },
        {
          en: '100 variables',
          bn: '১০০টি ভ্যারিয়েবল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Count the variables in the simulation: bg, border-color, color, and hover-bg.',
        bn: 'সিমুলেশনের ৪টি ভ্যারিয়েবলের কথা ভাবুন।'
      },
      explanation: {
        en: 'Bootstrap 5 encapsulates button colors into 4 primary custom properties, allowing localized overrides via the style attribute or parent classes.',
        bn: 'বুটস্ট্র্যাপ ৫ বোতামের রঙকে ৪টি মূল সিএসএস ভ্যারিয়েবলে আবদ্ধ করেছে, যা সহজে পরিবর্তনযোগ্য।'
      }
    },
    {
      id: 'bs-badge-accessibility-ex',
      kind: 'mcq',
      topic: 'Making notification badges accessible to screen readers',
      question: {
        en: 'When displaying a notification counter badge like Inbox <span class="badge bg-danger">4</span>, what element should be included for blind users?',
        bn: 'ইনবক্সের পাশে <span class="badge bg-danger">4</span> ব্যাজ দেখানোর সময় দৃষ্টিহীনদের জন্য কোন উপাদানটি যুক্ত করা উচিত?'
      },
      options: [
        {
          en: '<span class="visually-hidden">unread messages</span>',
          bn: '<span class="visually-hidden">unread messages</span>'
        },
        {
          en: '<style>badge { display: none; }</style>',
          bn: '<style>badge { display: none; }</style>'
        },
        {
          en: '<script>alert("4")</script>',
          bn: '<script>alert("4")</script>'
        },
        {
          en: '<marquee>4 new emails</marquee>',
          bn: '<marquee>4 new emails</marquee>'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use the .visually-hidden utility to provide hidden explanatory text.',
        bn: '.visually-hidden ক্লাস ব্যবহার করে অতিরিক্ত ব্যাখ্যা যোগ করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Without visually hidden text, a screen reader hears only Inbox 4, leaving the user unsure if 4 represents unread emails, drafts, or trash.',
        bn: 'লুকানো লেখা না থাকলে স্ক্রিন রিডার কেবল ইনবক্স ৪ উচ্চারণ করে, ফলে ৪ সংখ্যাটি অপঠিত বার্তা না অন্য কিছু তা বোঝা যায় না।'
      }
    },
    {
      id: 'bs-btn-close-label-ex',
      kind: 'mcq',
      topic: 'Accessible close buttons on dismissible alerts',
      question: {
        en: 'Why is an aria-label="Close" attribute required on the <button class="btn-close"> element in a dismissible alert?',
        bn: 'অ্যালার্ট বক্স বন্ধের <button class="btn-close"> বোতামটিতে কেন aria-label="Close" থাকা আবশ্যক?'
      },
      options: [
        {
          en: 'The button renders an SVG background image with zero inner text, so screen readers rely entirely on aria-label for its accessible name',
          bn: 'বোতামটিতে কোনো লেখা থাকে না বরং ব্যাকগ্রাউন্ড ছবি থাকে, তাই স্ক্রিন রিডার নাম জানতে সম্পূর্ণভাবে aria-label-এর ওপর নির্ভর করে'
        },
        {
          en: 'Because HTML buttons will not close without aria-label',
          bn: 'কারণ aria-label ছাড়া এইচটিএমএল বোতাম বন্ধ হতে পারে না'
        },
        {
          en: 'To make the close button change color to bright purple',
          bn: 'বন্ধের বোতামটিকে উজ্জ্বল বেগুনি রঙ করার জন্য'
        },
        {
          en: 'It sends an email notification to the website administrator',
          bn: 'এটি ওয়েবসাইট এডমিনকে একটি ইমেইল নোটিফিকেশন পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Empty icon buttons require explicit accessible names.',
        bn: 'লেখাহীন আইকন বোতামের পরিচিতি নামের কথা ভাবুন।'
      },
      explanation: {
        en: 'The .btn-close class draws an X using a CSS data URI background image. Assistive technology requires an aria-label to vocalize its function.',
        bn: 'সিএসএস ছবি দিয়ে ক্রস আঁকা হওয়ায় স্ক্রিন রিডারকে বোঝাতে aria-label ব্যবহার করা বাধ্যতামূলক।'
      }
    }
  ],
  quiz: {
    id: 'quiz-components-on-the-counter',
    title: {
      en: 'Bootstrap UI Components & Architecture Quiz',
      bn: 'বুটস্ট্র্যাপ ইউআই কম্পোনেন্ট ও আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-bs-outline-buttons',
        kind: 'mcq',
        topic: 'Visual hierarchy using outline button variants',
        question: {
          en: 'What is the design and functional role of outline buttons like .btn-outline-primary in web application interfaces?',
          bn: 'ওয়েবসাইটে .btn-outline-primary-এর মতো আউটলাইন বোতামগুলোর ডিজাইন ও ব্যবহারের উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'They provide secondary visual emphasis with transparent backgrounds and solid borders, establishing clear visual hierarchy next to filled primary actions',
            bn: 'স্বচ্ছ ব্যাকগ্রাউন্ড ও রঙিন বর্ডারের মাধ্যমে প্রধান বোতামের পাশে দ্বিতীয় গুরুত্বপূর্ণ কাজ হিসেবে ভিজ্যুয়াল অগ্রাধিকার তৈরি করা'
          },
          {
            en: 'They prevent users from clicking the button more than once',
            bn: 'ব্যবহারকারী যাতে একাধিকবার ক্লিক করতে না পারেন তা নিশ্চিত করা'
          },
          {
            en: 'They make button clicks silent without audio feedback',
            bn: 'ক্লিক করলে কোনো শব্দ তৈরি হতে না দেওয়া'
          },
          {
            en: 'They only work on touchscreen tablets',
            bn: 'কেবলমাত্র টাচস্ক্রিন ট্যাবলেটে কাজ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Secondary visual hierarchy with borders and transparent backgrounds.',
          bn: 'দ্বিতীয় অগ্রাধিকার এবং স্বচ্ছ ব্যাকগ্রাউন্ডের কথা ভাবুন।'
        },
        explanation: {
          en: 'Outline buttons de-emphasize secondary actions (like "Cancel") next to high-priority solid call-to-action buttons (like "Save Changes").',
          bn: 'মূল সেভ বোতামের পাশে বাতিল করার মতো গৌণ কাজের ক্ষেত্রে আউটলাইন বোতাম চমৎকার ভারসাম্য আনে।'
        }
      },
      {
        id: 'q-bs-card-flexibility',
        kind: 'mcq',
        topic: 'Why Bootstrap cards replaced older panel and well components',
        question: {
          en: 'Why did Bootstrap 4 and 5 replace legacy panels, thumbnails, and wells with the unified .card component?',
          bn: 'বুটস্ট্র্যাপ ৪ ও ৫ সংস্করণে পুরনো প্যানেল এবং ওয়েল বাদ দিয়ে একক .card কম্পোনেন্ট কেন আনা হয়েছে?'
        },
        options: [
          {
            en: 'Cards provide a unified flexbox container that easily accommodates headers, footers, responsive images, and tabbed navigation in one versatile structure',
            bn: 'কার্ড একটি সমন্বিত ফ্লেক্সবক্স কাঠামো দেয় যাতে হেডার, ফুটার, ছবি এবং ট্যাব সহজেই এক বাক্সের ভেতর সাজানো যায়'
          },
          {
            en: 'Because credit card companies demanded the change',
            bn: 'কারণ ক্রেডিট কার্ড কোম্পানিগুলো এই নাম দাবি করেছিল'
          },
          {
            en: 'To make all cards flip over in 3D animation automatically',
            bn: 'সব কার্ডকে নিজে থেকেই থ্রিডি অ্যানিমেশনে উল্টাতে'
          },
          {
            en: 'Cards require zero lines of HTML code to display',
            bn: 'কার্ড প্রদর্শনে কোনো এইচটিএমএল কোডের প্রয়োজন হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unified flexbox-based container replacing fragmented legacy widgets.',
          bn: 'একটি বহুমুখী ফ্লেক্সবক্স কন্টেইনারে সবকিছু একীভূত করার কথা ভাবুন।'
        },
        explanation: {
          en: 'The card component unified multiple disjointed legacy widgets into a flexible, extensible flexbox container for all layout needs.',
          bn: 'আগের বিভিন্ন বিশৃঙ্খল উপাদান একীভূত করে আধুনিক কার্ড কম্পোনেন্ট তৈরি করা হয়েছে।'
        }
      },
      {
        id: 'q-bs-navbar-expand-logic',
        kind: 'mcq',
        topic: 'Understanding navbar-expand-* responsive behavior',
        question: {
          en: 'What occurs when a developer specifies class navbar navbar-expand-lg on a site header?',
          bn: 'কোনো ওয়েবসাইটের হেডারে navbar navbar-expand-lg ক্লাসটি দিলে কী ঘটে?'
        },
        options: [
          {
            en: 'The navbar displays the collapsed hamburger toggler below 992 pixels and expands into full horizontal navigation at 992 pixels and above',
            bn: '৯৯২ পিক্সেলের নিচে নেভবারটি হ্যামবার্গার বোতামের আড়ালে লুকায় এবং ৯৯২ পিক্সেল বা তার উপরে অনুভূমিকভাবে খুলে যায়'
          },
          {
            en: 'The navbar expands to fill the entire computer screen permanently',
            bn: 'নেভবার পুরো কম্পিউটার স্ক্রিন দখল করে স্থায়ীভাবে থেকে যায়'
          },
          {
            en: 'The navigation links are translated into Latin',
            bn: 'মেনুর লিঙ্কগুলো ল্যাটিন ভাষায় অনূদিত হয়'
          },
          {
            en: 'The navbar locks user scrolling on all devices',
            bn: 'নেভবার সব ডিভাইসে স্ক্রলিং পুরোপুরি বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Collapsed on mobile, expanded horizontally at lg (992px).',
          bn: '৯৯২ পিক্সেলে হ্যামবার্গার থেকে পূর্ণাঙ্গ মেনুতে রূপান্তরের কথা ভাবুন।'
        },
        explanation: {
          en: 'The navbar-expand-lg class sets the responsive threshold: collapsed mobile drawer below 992px, horizontal list at and above 992px.',
          bn: 'lg ব্রেকপয়েন্ট (৯৯২ পিক্সেল) এর নিচে মোবাইল ড্রয়ার এবং উপরে সম্পূর্ণ মেনু প্রদর্শিত হয়।'
        }
      },
      {
        id: 'q-bs-custom-props-advantage',
        kind: 'mcq',
        topic: 'Engineering benefit of component CSS custom properties',
        question: {
          en: 'What major architectural advantage do scoped CSS variables offer when theming Bootstrap 5 components?',
          bn: 'বুটস্ট্র্যাপ ৫ উপাদানগুলো থিম করার ক্ষেত্রে নির্দিষ্ট সিএসএস ভ্যারিয়েবল কোন বড় স্থাপত্যগত সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'Developers can change colors on individual components by reassigning CSS variables without needing to write complex high-specificity CSS selectors',
            bn: 'জটিল সিএসএস সিলেক্টর না লিখে কেবল ভ্যারিয়েবলের মান বদলে দিয়ে নির্দিষ্ট উপাদানের রঙ পরিবর্তন করা যায়'
          },
          {
            en: 'They eliminate the need for a web browser',
            bn: 'এগুলো ব্রাউজারের প্রয়োজনীয়তা পুরোপুরি দূর করে'
          },
          {
            en: 'They force all text on the webpage to be uppercase',
            bn: 'এগুলো পেজের সব লেখাকে বড় হাতের অক্ষরে রূপান্তর করে'
          },
          {
            en: 'They automatically convert images into vector SVGs',
            bn: 'এগুলো ছবিকে স্বয়ংক্রিয়ভাবে ভেক্টর এসভিজিতে বদলে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Overriding variables locally without selector specificity wars.',
          bn: 'সিলেক্টরের যুদ্ধ এড়িয়ে লোকাল ভ্যারিয়েবল পরিবর্তনের কথা ভাবুন।'
        },
        explanation: {
          en: 'Scoped variables like --bs-btn-bg make components modular and easily customizable locally without fighting the CSS cascade.',
          bn: 'সিএসএস ভ্যারিয়েবল থাকার ফলে অন্য নিয়মে আঘাত না করে খুব সহজেই একটি নির্দিষ্ট বোতাম বা কার্ড কাস্টমাইজ করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-data-api-jig',
    tech: 'bootstrap',
    title: {
      en: 'The Data-Attribute API, JavaScript Plugins & Popper Integration',
      bn: 'ডাটা-অ্যাট্রিবিউট এপিআই, জাভাস্ক্রিপ্ট প্লাগইন ও পপার ইন্টিগ্রেশন'
    }
  }
};
