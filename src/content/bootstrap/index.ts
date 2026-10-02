import type { Hub } from '../../lib/types';
import { TheMeasureOfAllHallsLesson } from './lessons/the-measure-of-all-halls';
import { ComponentsOnTheCounterLesson } from './lessons/components-on-the-counter';
import { TheDataApiJigLesson } from './lessons/the-data-api-jig';
import { TheDoorThatHoldsLesson } from './lessons/the-door-that-holds';
import { TheFormAndTheValidationLedgerLesson } from './lessons/the-form-and-the-validation-ledger';
import { UtilitiesAndTheVariableWardrobeLesson } from './lessons/utilities-and-the-variable-wardrobe';
import { TheBuildUnderTheStageLesson } from './lessons/the-build-under-the-stage';
import { TheLongShadowLesson } from './lessons/the-long-shadow';

export const bootstrapHub: Hub = {
  slug: 'bootstrap',
  name: 'Bootstrap',
  icon: '🅱️',
  tagline: {
    en: 'Master modern responsive layout, UI components, JavaScript plugins, utilities, and Sass theming with Bootstrap 5.',
    bn: 'বুটস্ট্র্যাপ ৫ দিয়ে আধুনিক রেসপনসিভ লেআউট, ইউআই কম্পোনেন্ট, জাভাস্ক্রিপ্ট প্লাগইন এবং স্যাশ থিমিং আয়ত্ত করুন।'
  },
  intro: {
    en: 'Bootstrap is the world’s most popular front-end open-source toolkit for building responsive, mobile-first web experiences. Version 5 eliminated jQuery in favor of pure vanilla JavaScript, integrated CSS custom properties across all components, expanded the utility API, and introduced a 6-tier responsive breakpoint scale. This track takes you from 12-column grid geometry to custom Sass pipeline compilation.',
    bn: 'বুটস্ট্র্যাপ হলো রেসপনসিভ ও মোবাইল-ফার্স্ট ওয়েবসাইট তৈরির জন্য বিশ্বের সবচেয়ে জনপ্রিয় ফ্রন্ট-এন্ড টুলকিট। বুটস্ট্র্যাপ ৫ সংস্করণে জেকোয়েরির (jQuery) ওপর নির্ভরতা পুরোপুরি দূর করে আধুনিক ভ্যানিলা জাভাস্ক্রিপ্ট যুক্ত করা হয়েছে। প্রতিটি কম্পোনেন্টে সিএসএস ভ্যারিয়েবল, শক্তিশালী ইউটিলিটি এপিআই এবং ৬ স্তরের রেসপনসিভ ব্রেকপয়েন্ট অন্তর্ভুক্ত রয়েছে। এই ট্র্যাকে ১২-কলাম গ্রিড থেকে শুরু করে স্যাশ পাইপলাইনে কাস্টম থিম তৈরির সম্পূর্ণ প্রক্রিয়া শিখবেন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Grid Systems & Core Components',
        bn: 'ধাপ ১ — গ্রিড সিস্টেম ও মূল কম্পোনেন্ট'
      },
      items: [
        {
          en: '12-column grid geometry, containers, breakpoints, and gutters (lesson 1)',
          bn: '১২-কলাম গ্রিড কাঠামো, কন্টেইনার, ব্রেকপয়েন্ট ও গাটার মার্জিন (পাঠ ১)'
        },
        {
          en: 'Core UI components: buttons, cards, badges, alerts, and responsive navbars (lesson 2)',
          bn: 'মূল ইউআই উপাদান: বোতাম, কার্ড, ব্যাজ, অ্যালার্ট ও রেসপনসিভ নেভবার (পাঠ ২)'
        },
        {
          en: 'Data-attribute API, vanilla JavaScript event delegation, and Popper tooltips (lesson 3)',
          bn: 'ডাটা-অ্যাট্রিবিউট এপিআই, জাভাস্ক্রিপ্ট ইভেন্ট ডেলিগেশন ও পপার টুলটিপ (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Overlays, Forms & Utilities',
        bn: 'ধাপ ২ — ওভারলে, ফর্ম ও ইউটিলিটি'
      },
      items: [
        {
          en: 'Modals, offcanvas drawers, focus management, and scrollbar compensation (lesson 4)',
          bn: 'মোডাল, অফক্যানভাস ড্রয়ার, কিবোর্ড ফোকাস নিয়ন্ত্রণ ও স্ক্রলবার সমন্বয় (পাঠ ৪)'
        },
        {
          en: 'Accessible form controls, floating labels, input groups, and HTML5 validation (lesson 5)',
          bn: 'অ্যাক্সেসিবল ফর্ম কন্ট্রোল, ফ্লোটিং লেবেল, ইনপুট গ্রুপ ও এইচটিএমএল-৫ ভ্যালিডেশন (পাঠ ৫)'
        },
        {
          en: 'Spacing scales, flexbox helpers, color utilities, and CSS variables with dark mode (lesson 6)',
          bn: 'স্পেসিং স্কেল, ফ্লেক্সবক্স হেল্পার, কালার ইউটিলিটি এবং ডার্ক মোড সিএসএস ভ্যারিয়েবল (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Sass Theming & Modern Architecture',
        bn: 'ধাপ ৩ — স্যাশ থিমিং ও আধুনিক আর্কিটেকচার'
      },
      items: [
        {
          en: 'Sass compilation pipelines, $theme-colors map merging, and PurgeCSS optimization (lesson 7)',
          bn: 'স্যাশ কম্পাইলেশন পাইপলাইন, $theme-colors ম্যাপ মার্জিং ও পার্জসিএস অপটিমাইজেশন (পাঠ ৭)'
        },
        {
          en: 'Bootstrap in modern frontend stacks: migrations, design systems, and component libraries (lesson 8)',
          bn: 'আধুনিক ফ্রন্ট-এন্ড স্ট্যাকে বুটস্ট্র্যাপ: মাইগ্রেশন, ডিজাইন সিস্টেম ও কম্পোনেন্ট লাইব্রেরি (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheMeasureOfAllHallsLesson,
    ComponentsOnTheCounterLesson,
    TheDataApiJigLesson,
    TheDoorThatHoldsLesson,
    TheFormAndTheValidationLedgerLesson,
    UtilitiesAndTheVariableWardrobeLesson,
    TheBuildUnderTheStageLesson,
    TheLongShadowLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Responsive SaaS Landing Page',
        bn: 'রেসপনসিভ সাস ল্যান্ডিং পেজ'
      },
      brief: {
        en: 'Construct a complete responsive web application screen featuring a collapsing navigation bar, hero banner with call-to-action buttons, 3-column product card grid, modal checkout drawer, and client-side validated contact form using Bootstrap 5 utility classes and components.',
        bn: 'বুটস্ট্র্যাপ ৫ ইউটিলিটি ক্লাস ও কম্পোনেন্ট ব্যবহার করে একটি পূর্ণাঙ্গ রেসপনসিভ ল্যান্ডিং পেজ তৈরি করুন যাতে কলাপ্সিবল নেভবার, ৩-কলামের কার্ড গ্রিড, মোডাল চেকআউট এবং ভ্যালিডেশনসহ কন্টাক্ট ফর্ম থাকবে।'
      }
    },
    {
      title: {
        en: 'Custom Themed Enterprise Dashboard',
        bn: 'কাস্টম থিমযুক্ত এন্টারপ্রাইজ ড্যাশবোর্ড'
      },
      brief: {
        en: 'Configure a custom Sass build pipeline merging bespoke brand palette tokens into the $theme-colors map, tailoring the spacer ladder, and bundling dark-mode compatible CSS variables for high-density enterprise data tables.',
        bn: 'একটি কাস্টম স্যাশ (Sass) পাইপলাইন সেটআপ করুন যা $theme-colors ম্যাপে নিজস্ব ব্র্যান্ডের রঙ যুক্ত করবে এবং ডার্ক-মোড সাপোর্টেড সিএসএস ভ্যারিয়েবল দিয়ে একটি সুন্দর ড্যাশবোর্ড তৈরি করবে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Rely on the 12-column grid and standard container classes rather than writing arbitrary custom CSS widths in production styles.',
      bn: 'প্রোডাকশন কোডে এলোমেলো সিএসএস প্রস্থ না লিখে সবসময় বুটস্ট্র্যাপের ১২-কলাম গ্রিড ও স্ট্যান্ডার্ড কন্টেইনার ক্লাস ব্যবহার করুন।'
    },
    {
      en: 'Leverage the declarative data-bs-* attribute API for standard modal and dropdown interactions before writing custom JavaScript listeners.',
      bn: 'কাস্টম জাভাস্ক্রিপ্ট কোড লেখার আগে মোডাল ও ড্রপডাউনের জন্য বুটস্ট্র্যাপের বিল্ট-ইন data-bs-* অ্যাট্রিবিউট ব্যবহার করুন।'
    },
    {
      en: 'Customize theme colors and typography via Sass maps and variables instead of fighting CSS rules with !important overrides.',
      bn: 'সিএসএসে বারবার !important না লিখে স্যাশ (Sass) ম্যাপ ও ভ্যারিয়েবলের মাধ্যমে ব্র্যান্ডের রঙ ও ফন্ট কাস্টমাইজ করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does the Bootstrap 12-column responsive grid manage gutters and column alignment under the hood?',
        bn: 'বুটস্ট্র্যাপের ১২-কলাম রেসপনসিভ গ্রিড কীভাবে গাটার মার্জিন ও কলামের স্থান বণ্টন সমন্বয় করে?'
      },
      a: {
        en: 'Bootstrap organizes its grid using containers, rows, and columns. Containers provide horizontal padding and clamp viewport maximum widths across 6 responsive breakpoints (sm to xxl). Rows apply negative horizontal margins to cancel out column padding, preventing horizontal scrollbars. Columns utilize flexbox percentage widths based on 12 proportional tracks, distributing elements seamlessly across responsive viewports.',
        bn: 'বুটস্ট্র্যাপ কন্টেইনার, রো এবং কলামের সমন্বয়ে গ্রিড পরিচালনা করে। কন্টেইনার দুই পাশে প্যাডিং দিয়ে সর্বোচ্চ প্রস্থ বেঁধে রাখে। রো তার নেগেটিভ মার্জিনের মাধ্যমে কলামের বাড়তি প্যাডিং সমন্বয় করে অনুভূমিক স্ক্রলবার ঠেকায়। কলামগুলো ১২টি সমান ভাগের ওপর ভিত্তি করে ফ্লেক্সবক্সের মাধ্যমে যেকোনো পর্দায় সুন্দরভাবে মানিয়ে নেয়।'
      }
    },
    {
      q: {
        en: 'What architectural and performance advantages were achieved by dropping jQuery in Bootstrap 5?',
        bn: 'বুটস্ট্র্যাপ ৫ সংস্করণে জেকোয়েরি বর্জন করায় কোন কোন কারিগরি ও পারফরম্যান্স সুবিধা অর্জিত হয়েছে?'
      },
      a: {
        en: 'Eliminating the jQuery dependency reduced the client production bundle by 70 kilobytes (from 225 KB down to 155 KB). It removed global prototype pollution, improved execution performance using native browser querySelector and CustomEvent APIs, and allowed modern frontend developers to import Bootstrap as pure ES modules.',
        bn: 'জেকোয়েরি বাদ দেওয়ায় ক্লায়েন্ট বান্ডল সাইজ ৭০ কিলোবাইট কমে গেছে (২২৫ KB থেকে ১৫৫ KB)। এটি ব্রাউজারের নেটিভ querySelector ও CustomEvent এপিআই ব্যবহারের পথ তৈরি করেছে এবং বুটস্ট্র্যাপকে আধুনিক ইএস (ES) মডিউল হিসেবে ব্যবহারের সুযোগ দিয়েছে।'
      }
    },
    {
      q: {
        en: 'How should frontend engineering teams customize Bootstrap theme colors via Sass without causing specificity wars?',
        bn: 'সিএসএস সিলেক্টরের যুদ্ধ না বাঁধিয়ে স্যাশ (Sass) দিয়ে কীভাবে বুটস্ট্র্যাপের থিম রঙ কাস্টমাইজ করা উচিত?'
      },
      a: {
        en: 'Developers should define custom variables before importing Bootstrap variable files, taking advantage of the Sass !default flag which skips framework defaults if already declared. To add brand palettes, use the map-merge function to join custom color keys with the $theme-colors map, letting the compiler generate matching button, badge, and utility classes automatically.',
        bn: 'বুটস্ট্র্যাপ ফাইল লোডের আগেই নিজস্ব রঙের মান নির্ধারণ করা উচিত, কারণ স্যাশের !default ফ্ল্যাগ আগে থেকে মান থাকলে ডিফল্ট মানকে উপেক্ষা করে। নতুন ব্র্যান্ডের রঙের জন্য map-merge ফাংশন দিয়ে $theme-colors ম্যাপের সাথে যুক্ত করলে কম্পাইলার নিজে থেকেই সংশ্লিষ্ট বোতাম ও ইউটিলিটি ক্লাস তৈরি করে।'
      }
    },
    {
      q: {
        en: 'How does Bootstrap execute accessible client-side form validation using .was-validated?',
        bn: 'বুটস্ট্র্যাপ কীভাবে .was-validated ক্লাস ব্যবহার করে অ্যাক্সেসিবল ক্লায়েন্ট-সাইড ফর্ম ভ্যালিডেশন পরিচালনা করে?'
      },
      a: {
        en: 'Forms define the novalidate attribute to silence browser default tooltip bubbles. On submit, JavaScript invokes form.checkValidity(); if invalid, it calls event.preventDefault() and appends .was-validated to the form element. This CSS state class unlocks :valid and :invalid pseudo-classes, rendering green checkmarks and red error feedback text responsively.',
        bn: 'ফর্মে novalidate অ্যাট্রিবিউট দিয়ে ব্রাউজারের নিজস্ব পপআপ বন্ধ রাখা হয়। সাবমিটের সময় জাভাস্ক্রিপ্ট দিয়ে checkValidity() যাচাই করে ফর্মে .was-validated ক্লাস যুক্ত করা হয়। এই ক্লাসটি সিএসএসের :valid ও :invalid নিয়মকে সক্রিয় করে সঠিক তথ্যে সবুজ টিক এবং ভুলের ক্ষেত্রে লাল সতর্কবার্তা ফুটিয়ে তোলে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Enterprise SaaS Admin Portals: High-density data dashboards utilizing the 12-column grid, offcanvas navigation drawers, and dark mode theming.',
      bn: 'এন্টারপ্রাইজ ড্যাশবোর্ড: ১২-কলাম গ্রিড, অফক্যানভাস ড্রয়ার এবং ডার্ক মোড সিএসএস ভ্যারিয়েবল দিয়ে তৈরি বাণিজ্যিক ডাটা পোর্টাল।'
    },
    {
      en: 'Rapid MVP Prototyping: Launching production-ready web applications in days leveraging pre-composed accessible modals, navbars, and cards.',
      bn: 'দ্রুত পণ্য উন্নয়ন (MVP): আগে থেকেই তৈরি অ্যাক্সেসিবল মোডাল, নেভবার ও কার্ড ব্যবহার করে কয়েক দিনের মধ্যে পূর্ণাঙ্গ ওয়েব অ্যাপ তৈরি।'
    },
    {
      en: 'Multi-Framework Design Standardization: Enforcing consistent visual token semantics and responsive utilities across heterogeneous React, Vue, and Django services.',
      bn: 'বহু-ফ্রেমওয়ার্ক ডিজাইন মানদণ্ড: রিঅ্যাক্ট, ভিউ ও জ্যাঙ্গো অ্যাপ্লিকেশনের মধ্যে অভিন্ন ডিজাইন টোকেন ও রেসপনসিভ ইউটিলিটি নিশ্চিত করা।'
    },
    {
      en: 'Accessible E-Commerce Funnels: Constructing WCAG-compliant checkout wizards with static backdrops, floating labels, and accessible error recovery.',
      bn: 'অ্যাক্সেসিবল ই-কমার্স চেকআউট: স্ট্যাটিক ব্যাকড্রপ মোডাল, ফ্লোটিং লেবেল ও ভ্যালিডেশন মেসেজ দিয়ে ডব্লিউসিএজি মানসম্মত কেনাকাটার ফানেল তৈরি।'
    }
  ]
};
