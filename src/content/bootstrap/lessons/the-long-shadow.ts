import type { Lesson } from '../../../lib/types';

export const TheLongShadowLesson: Lesson = {
  slug: 'the-long-shadow',
  tech: 'bootstrap',
  title: {
    en: 'Bootstrap in Modern Architecture: Migrations & Design Systems',
    bn: 'আধুনিক আর্কিটেকচারে বুটস্ট্র্যাপ: মাইগ্রেশন ও ডিজাইন সিস্টেম'
  },
  summary: {
    en: 'Since its inception in 2011, Bootstrap has fundamentally shaped how developers construct responsive user interfaces across the global web. The release of Bootstrap 5 marked a major architectural turning point: removing jQuery in favor of pure vanilla JavaScript, dropping legacy Internet Explorer support, embracing CSS custom properties, and providing opt-in CSS Grid layouts. Dropping jQuery alone reduced the production client bundle from 225 kilobytes in version 4 down to 155 kilobytes in version 5, saving 70 kilobytes of network payload. This final capstone lesson analyzes the strategic tradeoffs between Bootstrap, utility-first frameworks like Tailwind CSS, and headless component systems like Radix UI. You will also learn pragmatic migration workflows for upgrading legacy codebases to Bootstrap 5.',
    bn: '২০১১ সালে আত্মপ্রকাশের পর থেকে বুটস্ট্র্যাপ বিশ্বজুড়ে ওয়েব ডেভেলপারদের রেসপনসিভ ইউআই তৈরির ধারণাকে সম্পূর্ণ বদলে দিয়েছে। বুটস্ট্র্যাপ ৫ সংস্করণ ফ্রেমওয়ার্কটির জন্য একটি যুগান্তকারী মাইলফলক: জেকোয়েরি (jQuery) পুরোপুরি বর্জন করে ভ্যানিলা জাভাস্ক্রিপ্ট গ্রহণ, পুরনো ইন্টারনেট এক্সপ্লোরার বাদ দেওয়া, নেটিভ সিএসএস ভ্যারিয়েবল এবং সিএসএস গ্রিডের সংযোজন। শুধুমাত্র জেকোয়েরি বাদ দেওয়ায় ৪ নম্বর সংস্করণের ২২৫ কিলোবাইট ফাইল সাইজ ৫ নম্বর সংস্করণে কমে ১৫৫ কিলোবাইটে নেমে এসেছে, যা ৭০ কিলোবাইট নেটওয়ার্ক ডাটা সাশ্রয় করেছে। এই সমাপনী পাঠে বুটস্ট্র্যাপ, টেলউইন্ড (Tailwind) এবং হেডলেস কম্পোনেন্ট সিস্টেমের সুবিধা-অসুবিধা এবং পুরনো প্রজেক্টকে বুটস্ট্র্যাপ ৫ সংস্করণে আপগ্রেড করার বাস্তবসম্মত কৌশল শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Framework Evolution and Strategic Tradeoffs',
        bn: 'মূল ধারণা: ফ্রেমওয়ার্কের বিবর্তন ও কৌশলগত সিদ্ধান্ত'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you choose a frontend foundation for long-term production systems, architectural longevity matters far more than short-term design hype. Over more than a decade, Bootstrap evolved from a collection of early CSS layout hacks into a modern, standard-compliant toolkit powered by CSS custom properties and standard JavaScript modules. Understanding its modern strengths allows engineering teams to make disciplined architectural choices.',
        bn: 'আপনি যখন দীর্ঘমেয়াদি কোনো বড় সফটওয়্যারের জন্য ফ্রন্ট-এন্ড ফ্রেমওয়ার্ক বেছে নেন, তখন ক্ষণস্থায়ী জনপ্রিয়তার চেয়ে ফ্রেমওয়ার্কের স্থায়িত্ব বেশি গুরুত্বপূর্ণ। এক দশকেরও বেশি সময় ধরে বুটস্ট্র্যাপ পুরনো সিএসএস কৌশল থেকে বিবর্তিত হয়ে আধুনিক সিএসএস ভ্যারিয়েবল ও ভ্যানিলা জাভাস্ক্রিপ্টভিত্তিক নির্ভরযোগ্য টুলে পরিণত হয়েছে। এর প্রকৃত শক্তি অনুধাবন করতে পারলে সফটওয়্যার টিমগুলো সঠিক প্রযুক্তিগত সিদ্ধান্ত নিতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The jQuery Removal (v5)',
          def: {
            en: 'The elimination of the jQuery library dependency in Bootstrap 5 in favor of native vanilla DOM APIs and modern ES modules',
            bn: 'বুটস্ট্র্যাপ ৫ সংস্করণে জেকোয়েরির প্রয়োজনীয়তা পুরোপুরি দূর করে আধুনিক ভ্যানিলা জাভাস্ক্রিপ্ট ব্যবহারের বিপ্লব'
          }
        },
        {
          term: 'Utility-First vs Component-First',
          def: {
            en: 'The architectural contrast between assembling atomic classes (Tailwind) versus deploying pre-composed, accessible components (Bootstrap)',
            bn: 'একক ইউটিলিটি ক্লাস দিয়ে নিজে সবকিছু বানানো বনাম আগে থেকেই তৈরি করা অ্যাক্সেসিবল কম্পোনেন্ট ব্যবহারের কারিগরি তুলনা'
          }
        },
        {
          term: 'CSS Grid Mode ($enable-cssgrid)',
          def: {
            en: 'An opt-in Bootstrap 5 configuration replacing flexbox rows with native two-dimensional CSS Grid layouts',
            bn: 'বুটস্ট্র্যাপ ৫ সংস্করণের একটি ঐচ্ছিক ফিচার যা সাধারণ ফ্লেক্সবক্সের বদলে দ্বিমাত্রিক সিএসএস গ্রিড লেআউট তৈরি করে'
          }
        },
        {
          term: 'Directional Renaming (s/e)',
          def: {
            en: 'The migration from left/right class names (ml-*, pr-*) to logical start/end properties (ms-*, pe-*) to support RTL writing modes natively',
            bn: 'ডান-বামের বদলে start ও end ক্লাসের ব্যবহার যার মাধ্যমে আরবি বা হিব্রুর মতো ডান-থেকে-বামে লেখার ভাষা স্বাচ্ছন্দ্যে চলে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'framework-comparison-table',
      text: {
        en: 'Architectural Comparison: Bootstrap vs Tailwind vs Radix',
        bn: 'কারিগরি তুলনা: বুটস্ট্র্যাপ বনাম টেলউইন্ড বনাম রেডিক্স'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparing Frontend Architectural Philosophies in Modern Web Development',
        bn: 'আধুনিক ওয়েব ডেভেলপমেন্টে প্রধান প্রধান ফ্রন্ট-এন্ড আর্কিটেকচারের তুলনা'
      },
      head: [
        { en: 'Dimension', bn: 'মাত্রা / বৈশিষ্ট্য' },
        { en: 'Bootstrap 5', bn: 'বুটস্ট্র্যাপ ৫' },
        { en: 'Tailwind CSS', bn: 'টেলউইন্ড সিএসএস' },
        { en: 'Radix UI / Shadcn', bn: 'রেডিক্স ইউআই / শ্যাডসিএন' }
      ],
      rows: [
        [
          { en: 'Core Philosophy', bn: 'মূল দর্শন' },
          { en: 'Pre-styled components with utility support; rapid enterprise delivery', bn: 'আগে থেকেই তৈরি কম্পোনেন্ট ও ইউটিলিটি; দ্রুত পণ্য তৈরি' },
          { en: 'Pure atomic utilities; complete bespoke visual freedom', bn: 'বিশুদ্ধ ইউটিলিটি ক্লাস; সম্পূর্ণ নিজস্ব ডিজাইনের স্বাধীনতা' },
          { en: 'Headless, unstyled accessible UI primitives for React/Vue', bn: 'স্টাইলহীন কিন্তু অ্যাক্সেসিবল কম্পোনেন্ট যা নিজস্ব সিএসএসে সাজাতে হয়' }
        ],
        [
          { en: 'JavaScript Layer', bn: 'জাভাস্ক্রিপ্ট স্তর' },
          { en: 'Vanilla JS plugins with Data-Attribute API built-in', bn: 'বিল্ট-ইন ভ্যানিলা জাভাস্ক্রিপ্ট প্লাগইন ও ডাটা অ্যাট্রিবিউট' },
          { en: 'Zero JavaScript included; requires external headless libraries', bn: 'কোনো জাভাস্ক্রিপ্ট নেই; আলাদা স্ক্রিপ্ট বা লাইব্রেরি লাগে' },
          { en: 'Tight framework binding (React, Vue) with state machines', bn: 'রিঅ্যাক্ট বা ভিউ-এর সাথে গভীর ইন্টিগ্রেশন ও স্টেট মেশিন' }
        ],
        [
          { en: 'Styling Mechanism', bn: 'স্টাইলিং পদ্ধতি' },
          { en: 'Sass compilation + CSS custom properties', bn: 'স্যাশ কম্পাইলেশন এবং সিএসএস ভ্যারিয়েবল' },
          { en: 'PostCSS / Tailwind compiler parsing template class strings', bn: 'পোস্টসিএসএস ইঞ্জিন যা টেমপ্লেটের ক্লাস পড়ে সিএসএস বানায়' },
          { en: 'Tailwind or custom CSS Modules applied to headless primitives', bn: 'টেলউইন্ড বা সিএসএস মডিউল দিয়ে তৈরি কাস্টম ক্লাস' }
        ],
        [
          { en: 'Best Use Case', bn: 'সেরা ব্যবহারের ক্ষেত্র' },
          { en: 'Enterprise dashboards, internal tools, multi-team SaaS portals', bn: 'বাণিজ্যিক ড্যাশবোর্ড, অভ্যন্তরীণ সফটওয়্যার, বড় পোর্টাল' },
          { en: 'Consumer marketing landing pages, unique brand experiences', bn: 'অনন্য ডিজাইনের ব্র্যান্ড ওয়েবসাইট ও কনজিউমার ল্যান্ডিং পেজ' },
          { en: 'Component design systems in mature React/Next.js codebases', bn: 'রিঅ্যাক্ট বা নেক্সট.জেএস এন্টারপ্রাইজ অ্যাপ্লিকেশন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Bundle Size Optimization Benchmark',
        bn: 'চালনাযোগ্য সিমুলেশন: বান্ডল সাইজ অপটিমাইজেশন বেঞ্চমার্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script benchmarks the client payload reduction achieved by dropping jQuery in Bootstrap 5 compared to Bootstrap 4:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি বুটস্ট্র্যাপ ৪ থেকে জেকোয়েরি বাদ দিয়ে বুটস্ট্র্যাপ ৫ সংস্করণে কত কিলোবাইট বান্ডল সাইজ কমেছে তা পরিমাপ করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-bundle-sim',
      lang: 'javascript',
      code: `// Bootstrap 4 vs Bootstrap 5 Client Payload Benchmark
const v4BundleKb = 225; // CSS + jQuery + Popper + Bootstrap 4 JS
const v5BundleKb = 155; // CSS + Popper + Bootstrap 5 Vanilla JS (Zero jQuery)

const savedKb = v4BundleKb - v5BundleKb;

console.log('Total production bundle payload for Bootstrap 4 in KB:', v4BundleKb);
// -> Total production bundle payload for Bootstrap 4 in KB: 225

console.log('Total production bundle payload for Bootstrap 5 in KB:', v5BundleKb);
// -> Total production bundle payload for Bootstrap 5 in KB: 155

console.log('Network payload savings achieved by dropping jQuery in KB:', savedKb);
// -> Network payload savings achieved by dropping jQuery in KB: 70`,
      caption: {
        en: 'Figure 1: Eliminating jQuery reduced the standard production bundle from 225 KB down to 155 KB, delivering 70 KB in network payload savings',
        bn: 'চিত্র ১: জেকোয়েরি বর্জন করায় বান্ডল সাইজ ২২৫ KB থেকে কমে ১৫৫ KB হয়েছে, যা নেটওয়ার্কের ৭০ KB মূল্যবান ডেটা সাশ্রয় করেছে'
      }
    },
    {
      type: 'heading',
      id: 'migration-checklist-guide',
      text: {
        en: 'The Bootstrap 4 to Bootstrap 5 Migration Checklist',
        bn: 'বুটস্ট্র্যাপ ৪ থেকে ৫ মাইগ্রেশনের তালিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When modernizing legacy enterprise applications from Bootstrap 4 to version 5, engineering teams should follow these four systematic refactoring steps:',
        bn: 'পুরনো প্রজেক্টকে বুটস্ট্র্যাপ ৪ থেকে ৫ সংস্করণে রূপান্তরের সময় নিচের ৪টি ধাপ ক্রমানুসারে অনুসরণ করা উচিত:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Step 1: Replace data-* with data-bs-*',
          def: {
            en: 'Global find-and-replace updating data-toggle to data-bs-toggle and data-target to data-bs-target across all HTML templates',
            bn: 'সব টেমপ্লেটে data-toggle বদলে data-bs-toggle এবং data-target বদলে data-bs-target নিশ্চিত করা'
          }
        },
        {
          term: 'Step 2: Update Directional Spacing Utilities',
          def: {
            en: 'Rename all left and right margin/padding classes from ml-* and mr-* to ms-* (start) and me-* (end)',
            bn: 'পুরনো ml-* ও mr-* ক্লাসের নাম বদলে আধুনিক ms-* ও me-* ক্লাসে রূপান্তর করা'
          }
        },
        {
          term: 'Step 3: Remove jQuery Script Dependencies',
          def: {
            en: 'Uninstall jQuery from package.json and convert $(el).modal("show") into new bootstrap.Modal(el).show()',
            bn: 'প্রজেক্ট থেকে জেকোয়েরি মুছে ফেলে ভ্যানিলা জাভাস্ক্রিপ্ট প্লাগইন এপিআই ব্যবহার শুরু করা'
          }
        },
        {
          term: 'Step 4: Modernize Form Markup',
          def: {
            en: 'Drop deprecated .custom-select, .custom-control, and .custom-file classes in favor of unified .form-select and .form-check',
            bn: 'পুরনো .custom-select বাদ দিয়ে আধুনিক .form-select ও .form-check ক্লাস চালু করা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-payload-savings-calc-ex',
      kind: 'mcq',
      topic: 'Calculating payload savings between Bootstrap 4 and Bootstrap 5',
      question: {
        en: 'According to our benchmark simulation, how many kilobytes of network payload are saved by upgrading from a 225 KB Bootstrap 4 bundle to a 155 KB Bootstrap 5 bundle?',
        bn: 'বেঞ্চমার্ক সিমুলেশন অনুযায়ী বুটস্ট্র্যাপ ৪ সংস্করণের ২২৫ KB বান্ডল থেকে ৫ সংস্করণের ১৫৫ KB বান্ডলে আপগ্রেড করলে কত কিলোবাইট নেটওয়ার্ক ডাটা বাঁচে?'
      },
      options: [
        {
          en: '70 kilobytes saved (225 - 155)',
          bn: '৭০ কিলোবাইট সাশ্রয় (২২৫ - ১৫৫)'
        },
        {
          en: '10 kilobytes',
          bn: '১০ কিলোবাইট'
        },
        {
          en: '200 kilobytes',
          bn: '২০০ কিলোবাইট'
        },
        {
          en: '0 kilobytes (identical size)',
          bn: '০ কিলোবাইট (একই সাইজ)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Subtract 155 from 225.',
        bn: '২২৫ থেকে ১৫৫ বিয়োগ করুন।'
      },
      explanation: {
        en: 'Removing the jQuery runtime dependency alongside CSS custom property consolidations trims 70 KB of bundle weight.',
        bn: 'জেকোয়েরি বর্জন করায় এবং সিএসএস ভ্যারিয়েবল ব্যবহারের কারণে মোট ৭০ কিলোবাইট ফাইল সাইজ কমেছে।'
      }
    },
    {
      id: 'bs-v5-jquery-drop-ex',
      kind: 'mcq',
      topic: 'Major architectural change in Bootstrap 5',
      question: {
        en: 'What was the single most impactful architectural dependency removed in the release of Bootstrap 5?',
        bn: 'বুটস্ট্র্যাপ ৫ প্রকাশের সময় সবচেয়ে বড় কোন বাহ্যিক লাইব্রেরির ওপর নির্ভরতা পুরোপুরি দূর করা হয়েছে?'
      },
      options: [
        {
          en: 'jQuery was completely removed in favor of native vanilla JavaScript DOM APIs',
          bn: 'জেকোয়েরি (jQuery) পুরোপুরি বর্জন করে নেটিভ ভ্যানিলা জাভাস্ক্রিপ্ট গ্রহণ করা হয়েছে'
        },
        {
          en: 'CSS stylesheets were completely removed',
          bn: 'সিএসএস স্টাইলশিট পুরোপুরি মুছে ফেলা হয়েছে'
        },
        {
          en: 'HTML support was dropped in favor of Adobe Flash',
          bn: 'এইচটিএমএল বাদ দিয়ে এডবি ফ্ল্যাশ আনা হয়েছে'
        },
        {
          en: 'All images were removed from the framework',
          bn: 'ফ্রেমওয়ার্ক থেকে সব ছবি সরিয়ে দেওয়া হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bootstrap 5 runs on pure vanilla JavaScript with zero jQuery.',
        bn: 'বুটস্ট্র্যাপ ৫ সংস্করণে জেকোয়েরি বাদ দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Dropping jQuery reduced bundle size, removed global prototype pollution, and aligned Bootstrap with modern ECMAScript standards.',
        bn: 'জেকোয়েরি বাদ দেওয়ায় সাইটের গতি বেড়েছে এবং আধুনিক জাভাস্ক্রিপ্ট স্ট্যান্ডার্ডের সাথে বুটস্ট্র্যাপ যুক্ত হয়েছে।'
      }
    },
    {
      id: 'bs-migration-directional-ex',
      kind: 'mcq',
      topic: 'Updating margin utilities during Bootstrap 5 migration',
      question: {
        en: 'When migrating an application from Bootstrap 4 to Bootstrap 5, what should the legacy class mr-3 be renamed to?',
        bn: 'বুটস্ট্র্যাপ ৪ থেকে ৫ সংস্করণে মাইগ্রেশনের সময় পুরনো mr-3 ক্লাসের নাম বদলে কী করতে হবে?'
      },
      options: [
        {
          en: 'me-3 (margin-end replaces margin-right for RTL compatibility)',
          bn: 'me-3 (ডান-বাম লেখার সুবিধার্থে margin-right-এর বদলে margin-end)'
        },
        {
          en: 'margin-off',
          bn: 'margin-off'
        },
        {
          en: 'mr-5-new',
          bn: 'mr-5-new'
        },
        {
          en: 'right-3',
          bn: 'right-3'
        }
      ],
      answer: 0,
      hint: {
        en: 'Right becomes end (e), and left becomes start (s).',
        bn: 'ডান দিকের জন্য end (e) ক্লাসের কথা ভাবুন।'
      },
      explanation: {
        en: 'Bootstrap 5 adopted logical properties: margin-left became ms-* (margin-start) and margin-right became me-* (margin-end).',
        bn: 'আন্তর্জাতিক ভাষাগুলোর সুবিধার জন্য বুটস্ট্র্যাপ ৫ সংস্করণে mr-* ক্লাসের নাম বদলে me-* করা হয়েছে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-long-shadow',
    title: {
      en: 'Bootstrap Architecture, Evolution & Migrations Quiz',
      bn: 'বুটস্ট্র্যাপ আর্কিটেকচার, বিবর্তন ও মাইগ্রেশন কুইজ'
    },
    questions: [
      {
        id: 'q-bs-when-to-choose-bootstrap',
        kind: 'mcq',
        topic: 'Selecting Bootstrap versus Tailwind for project roadmaps',
        question: {
          en: 'In which development scenario is Bootstrap 5 typically superior to utility-first alternatives like Tailwind CSS?',
          bn: 'কোন পরিস্থিতিতে টেলউইন্ডের চেয়ে বুটস্ট্র্যাপ ৫ বেছে নেওয়া একটি দলের জন্য অনেক বেশি লাভজনক?'
        },
        options: [
          {
            en: 'Building internal tools, enterprise portals, or rapid MVPs where engineering teams need pre-styled, accessible UI components out of the box without designing from scratch',
            bn: 'এন্টারপ্রাইজ ড্যাশবোর্ড, অভ্যন্তরীণ সফটওয়্যার বা দ্রুত প্রোটোটাইপ তৈরিতে যেখানে শুরু থেকেই তৈরি ও অ্যাক্সেসিবল কম্পোনেন্ট প্রয়োজন'
          },
          {
            en: 'When a project has zero CSS stylesheets',
            bn: 'যখন কোনো প্রজেক্টে কোনো সিএসএস স্টাইলশিট থাকে না'
          },
          {
            en: 'When all developers speak only ancient Greek',
            bn: 'যখন সব ডেভেলপার কেবল প্রাচীন গ্রিক ভাষায় কথা বলেন'
          },
          {
            en: 'To make all web pages load without electricity',
            bn: 'বিদ্যুৎ ছাড়া ওয়েবসাইট চালানোর জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Speed of delivery with complete, accessible, pre-built components.',
          bn: 'ডিজাইন নিয়ে কালক্ষেপণ না করে দ্রুত নির্ভরযোগ্য সফটওয়্যার গড়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Bootstrap provides instant accessible widgets (modals, navbars, forms) out of the box, saving hundreds of hours compared to styling primitives from zero.',
          bn: 'বুটস্ট্র্যাপ তৈরি করা অ্যাক্সেসিবল উপাদান প্রদান করায় এন্টারপ্রাইজ সফটওয়্যার খুব দ্রুত ও নির্ভুলভাবে তৈরি করা যায়।'
        }
      },
      {
        id: 'q-bs-css-grid-optin',
        kind: 'mcq',
        topic: 'Enabling native CSS Grid in Bootstrap 5',
        question: {
          en: 'How can an engineering team enable Bootstrap 5 native CSS Grid layout engine instead of the traditional Flexbox grid?',
          bn: 'প্রথাগত ফ্লেক্সবক্সের বদলে বুটস্ট্র্যাপ ৫ সংস্করণের নেটিভ সিএসএস গ্রিড মোড কীভাবে চালু করতে হয়?'
        },
        options: [
          {
            en: 'By setting $enable-cssgrid: true in Sass before compiling the stylesheet',
            bn: 'স্টাইলশিট কম্পাইল করার আগে স্যাশে $enable-cssgrid: true নির্ধারণ করে দিয়ে'
          },
          {
            en: 'By renaming index.html to index.grid',
            bn: 'index.html এর নাম পরিবর্তন করে index.grid করে'
          },
          {
            en: 'By installing a third-party browser extension',
            bn: 'ব্রাউজারে একটি থার্ড-পার্টি এক্সটেনশন ইনস্টল করে'
          },
          {
            en: 'CSS Grid is illegal in Bootstrap',
            bn: 'বুটস্ট্র্যাপে সিএসএস গ্রিড নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sass boolean flag $enable-cssgrid: true.',
          bn: 'স্যাশের $enable-cssgrid ভ্যারিয়েবলের কথা ভাবুন।'
        },
        explanation: {
          en: 'Toggling $enable-cssgrid: true compiles the .grid container and .g-col-* classes, enabling native CSS Grid layout alongside Bootstrap utilities.',
          bn: 'এই ভ্যারিয়েবল সত্য করে দিলে বুটস্ট্র্যাপ ফ্লেক্সবক্সের পাশাপাশি খাঁটি সিএসএস গ্রিডের সমস্ত ক্লাস কম্পাইল করে।'
        }
      },
      {
        id: 'q-bs-internet-explorer-drop',
        kind: 'mcq',
        topic: 'Dropping Internet Explorer in Bootstrap 5',
        question: {
          en: 'What architectural modernization became possible when Bootstrap 5 officially dropped support for Microsoft Internet Explorer?',
          bn: 'মাইক্রোসফট ইন্টারনেট এক্সপ্লোরারের সাপোর্ট পুরোপুরি বাদ দেওয়ায় বুটস্ট্র্যাপ ৫ সংস্করণে কোন আধুনিক প্রযুক্তি ব্যবহারের পথ উন্মুক্ত হয়?'
        },
        options: [
          {
            en: 'The framework could fully embrace CSS Custom Properties (CSS variables), modern flexbox behaviors, and clean ES6 JavaScript without polyfills',
            bn: 'ফ্রেমওয়ার্কটি কোনো পলিফিল ছাড়াই আধুনিক সিএসএস ভ্যারিয়েবল, আধুনিক ফ্লেক্সবক্স এবং ইএস-৬ জাভাস্ক্রিপ্ট গ্রহণ করতে সক্ষম হয়'
          },
          {
            en: 'The framework was converted into an operating system',
            bn: 'ফ্রেমওয়ার্কটি একটি অপারেটিং সিস্টেমে পরিণত হয়'
          },
          {
            en: 'All internet browsers were forced to shut down',
            bn: 'সব ব্রাউজার বন্ধ হয়ে যায়'
          },
          {
            en: 'Web pages stopped needing web servers',
            bn: 'ওয়েব পেজের জন্য আর সার্ভারের দরকার পড়ে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unlocking CSS custom properties and modern ECMAScript standards.',
          bn: 'সিএসএস ভ্যারিয়েবল ও আধুনিক জাভাস্ক্রিপ্টের স্বাধীন ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Abandoning legacy IE allowed the core architecture to adopt CSS custom properties for theming, cutting polyfill bloat across the codebase.',
          bn: 'পুরনো ব্রাউজারের বাধ্যবাধকতা কেটে যাওয়ায় ফ্রেমওয়ার্কটি অনেক বেশি আধুনিক, হালকা ও গতিশীল রূপ পেয়েছে।'
        }
      },
      {
        id: 'q-bs-v4-v5-modal-api',
        kind: 'mcq',
        topic: 'Updating JavaScript modal invocations in Bootstrap 5',
        question: {
          en: 'How should legacy Bootstrap 4 jQuery modal code like $("#myModal").modal("show"); be refactored into modern Bootstrap 5 JavaScript?',
          bn: 'বুটস্ট্র্যাপ ৪ সংস্করণের পুরনো জেকোয়েরি কোড $("#myModal").modal("show"); কে বুটস্ট্র্যাপ ৫ সংস্করণে কীভাবে রিফ্যাক্টর করতে হবে?'
        },
        options: [
          {
            en: 'bootstrap.Modal.getOrCreateInstance(document.getElementById("myModal")).show();',
            bn: 'bootstrap.Modal.getOrCreateInstance(document.getElementById("myModal")).show();'
          },
          {
            en: 'window.openModal("myModal");',
            bn: 'window.openModal("myModal");'
          },
          {
            en: 'document.modal = "open";',
            bn: 'document.modal = "open";'
          },
          {
            en: 'eval("modal.show()");',
            bn: 'eval("modal.show()");'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use the native Bootstrap 5 Modal class instance methods.',
          bn: 'বুটস্ট্র্যাপ ৫ সংস্করণের নেটিভ Modal ক্লাসের মেথড ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Bootstrap 5 provides static methods on its plugin classes (like bootstrap.Modal.getOrCreateInstance), eliminating the need for jQuery wrappers.',
          bn: 'বুটস্ট্র্যাপ ৫ ক্লাসে সরাসরি getOrCreateInstance মেথড ব্যবহার করে কোনো জেকোয়েরি ছাড়াই সহজে মোডাল নিয়ন্ত্রণ করা যায়।'
        }
      }
    ]
  }
};
