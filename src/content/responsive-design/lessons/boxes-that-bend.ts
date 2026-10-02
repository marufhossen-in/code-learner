import type { Lesson } from '../../../lib/types';

export const BoxesThatBendLesson: Lesson = {
  slug: 'boxes-that-bend',
  tech: 'responsive-design',
  title: {
    en: 'Flexbox Layouts — flex-grow, flex-shrink, and Wrapping Axes',
    bn: 'ফ্লেক্সবক্স লেআউট — flex-grow, flex-shrink এবং র‍্যাপিং অ্যাক্সিস'
  },
  summary: {
    en: 'CSS Flexbox delivers flexible one-dimensional layouts along a main axis and cross axis. In this lesson, we explore how flex-basis establishes honest baseline sizes, how flex-grow and flex-shrink distribute space, how flex-wrap enables wrapping across lines, and how setting min-width: 0 resolves common overflow traps in responsive cards.',
    bn: 'সিএসএস ফ্লেক্সবক্স মেইন অ্যাক্সিস ও ক্রস অ্যাক্সিস বরাবর চমৎকার এক-মাত্রিক লেআউট তৈরি করে। এই পাঠে আমরা flex-basis দিয়ে প্রাথমিক আকার নির্ধারণ, flex-grow ও flex-shrink দিয়ে ফাঁকা জায়গা বণ্টন, flex-wrap দিয়ে স্বতঃস্ফূর্ত লাইন র‍্যাপিং এবং min-width: 0 দিয়ে সাধারণ ওভারফ্লো সমস্যা সমাধান শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'flexbox-overview',
      text: {
        en: 'The One-Dimensional Engine: Flexbox Axes',
        bn: 'এক-মাত্রিক ইঞ্জিন: ফ্লেক্সবক্স অ্যাক্সিস'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build navigation bars, card lists, or toolbars, items need to adapt along a single direction. Flexbox calculates available space along the main axis, expanding items when extra room exists and compressing them when screens narrow.',
        bn: 'ন্যাভিগেশন বার, কার্ড তালিকা বা টুলবার তৈরির সময় উপাদানগুলোকে একটি নির্দিষ্ট দিক বরাবর সাজাতে হয়। ফ্লেক্সবক্স মেইন অ্যাক্সিস বরাবর ফাঁকা জায়গা হিসাব করে, অতিরিক্ত স্থান থাকলে উপাদানগুলোকে প্রসারিত করে এবং স্ক্রিন ছোট হলে সংকুচিত করে মানিয়ে নেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'flex-basis',
          def: {
            en: 'The initial default size of a flex item before remaining free space is distributed among siblings.',
            bn: 'অন্যান্য ভাইবোন উপাদানের মাঝে ফাঁকা স্থান বণ্টনের আগে একটি ফ্লেক্স উপাদানের প্রাথমিক মাপ।'
          }
        },
        {
          term: 'flex-grow',
          def: {
            en: 'A unitless factor specifying how much of positive remaining space an item should absorb.',
            bn: 'একটি এককহীন সংখ্যা যা নির্দেশ করে কনটেইনারের অবশিষ্ট বাড়তি জায়গার কতটুকু অংশ উপাদানটি নেবে।'
          }
        },
        {
          term: 'flex-shrink',
          def: {
            en: 'A factor determining how aggressively an item contracts when total items exceed container dimensions.',
            bn: 'এমন একটি অনুপাত যা নির্ধারণ করে উপাদানগুলোর মোট আকার কন্টেইনার ছাড়িয়ে গেলে এটি কতটা সংকুচিত হবে।'
          }
        },
        {
          term: 'min-width: 0',
          def: {
            en: 'An override for the default min-width: auto on flex items, allowing long text to shrink and truncate properly.',
            bn: 'ফ্লেক্স উপাদানের ডিফল্ট min-width: auto বাতিল করার নিয়ম, যা দীর্ঘ লেখাকে সংকুচিত হতে সাহায্য করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'flex-shorthand-and-wrapping',
      text: {
        en: 'The flex Shorthand and flex-wrap',
        bn: 'flex শর্টহ্যান্ড এবং flex-wrap'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Recommended Shorthand: Always declare flex: 1 1 20rem; instead of individual properties. This sets grow to 1, shrink to 1, and basis to 20rem (320px).',
          bn: '১. প্রস্তাবিত শর্টহ্যান্ড: আলাদা না লিখে সর্বদা flex: 1 1 20rem; লিখুন। এটি গ্রো ১, শ্রিংক ১ এবং বেসিস ২০rem (৩২০px) নির্ধারণ করে।'
        },
        {
          en: '2. Multi-Line Wrapping: Without flex-wrap: wrap;, items squeeze indefinitely on a single line. Adding wrap allows items to roll onto new rows when container width drops.',
          bn: '২. মাল্টি-লাইন র‍্যাপিং: flex-wrap: wrap; না দিলে উপাদানগুলো এক লাইনে চেপে থাকে। র‍্যাপ দিলে স্ক্রিন ছোট হলে উপাদানগুলো সুন্দরভাবে পরের লাইনে নেমে আসে।'
        },
        {
          en: '3. Resolving Content Overflow: Flex items default to min-width: auto, refusing to shrink smaller than their content. Adding min-width: 0; permits proper text truncation with ellipsis.',
          bn: '৩. কন্টেন্ট ওভারফ্লো সমাধান: ফ্লেক্স আইটেমে ডিফল্টভাবে min-width: auto থাকে। min-width: 0; দিলে লেখা উপাদানের বাইরে না উপচে সুন্দরভাবে কাটছাঁট হয়।'
        },
        {
          en: '4. Alignment with Auto Margins: Declaring margin-left: auto; on the last item in a flex row pushes it all the way to the far edge, perfect for navigation action buttons.',
          bn: '৪. অটো মার্জিন দিয়ে সাজানো: ফ্লেক্স সারির শেষ উপাদানে margin-left: auto; দিলে তা ডান কিনারায় চলে যায়, যা লগইন বা অ্যাকশন বাটনের জন্য আদর্শ।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Responsive Flexbox Card Rail',
        bn: 'রেসপনসিভ ফ্লেক্সবক্স কার্ড ট্রেনের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `/* 1. Responsive flex container */
.card-rail {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* 2. Responsive flex child items */
.card-item {
  // Grow equally, shrink when needed, baseline 18rem (288px)
  flex: 1 1 18rem;
  min-width: 0; // Essential guard against long title overflows
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}

// 3. Inspect computed flex wrap behavior in JavaScript
const container = document.createElement('div');
container.className = 'card-rail';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

console.log('Flex container display:', container.style.display);
// -> Flex container display: flex
console.log('Flex wrap enabled:', container.style.flexWrap === 'wrap');
// -> Flex wrap enabled: true`,
      caption: {
        en: 'Configuring flex cards with 18rem basis and 16px gap across wrapping rows',
        bn: '১৮rem বেসিস ও ১৬px গ্যাপ দিয়ে র‍্যাপিং সারিতে ফ্লেক্স কার্ড তৈরি করা'
      }
    },
    {
      type: 'heading',
      id: 'flex-grow-shrink-table',
      text: {
        en: 'Space Distribution Properties Compared',
        bn: 'স্থান বণ্টন প্রোপার্টিসমূহের তুলনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Property', bn: 'প্রোপার্টি' },
        { en: 'Default Value', bn: 'ডিফল্ট মান' },
        { en: 'Behavior Under Screen Resize', bn: 'স্ক্রিন পরিবর্তনে আচরণ' }
      ],
      rows: [
        [
          { en: 'flex-grow', bn: 'flex-grow' },
          { en: '0 (do not grow)', bn: '০ (বড় হবে না)' },
          { en: 'Items stay at basis width when screen expands unless value > 0', bn: 'মান 0 এর বেশি না হলে স্ক্রিন বড় হলেও এটি প্রাথমিক মাপে থাকে' }
        ],
        [
          { en: 'flex-shrink', bn: 'flex-shrink' },
          { en: '1 (shrink proportionally)', bn: '১ (সমানুপাতিক হারে ছোট হবে)' },
          { en: 'Items contract to prevent overflow when container shrinks', bn: 'কন্টেইনার ছোট হলে ওভারফ্লো ঠেকাতে উপাদান সংকুচিত হয়' }
        ],
        [
          { en: 'flex-basis', bn: 'flex-basis' },
          { en: 'auto (use width/content)', bn: 'auto (উইডথ বা কন্টেন্ট অনুযায়ী)' },
          { en: 'Serves as starting reference point for growth and contraction math', bn: 'বৃদ্ধি ও সংকোচনের হিসাবের শুরুর ভিত্তি মাপ হিসেবে কাজ করে' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'rd-bx-ex1',
      kind: 'mcq',
      topic: 'min-width zero pitfall',
      question: {
        en: 'Why do flex items with long unbroken URLs sometimes burst outside their container on narrow screens?',
        bn: 'ছোট স্ক্রিনে দীর্ঘ ইউআরএল (URL) থাকা ফ্লেক্স উপাদানগুলো কখনো কখনো কন্টেইনারের বাইরে কেন উপচে পড়ে?'
      },
      options: [
        {
          en: 'Flex items have a default min-width: auto, which forbids them from shrinking smaller than their child text content',
          bn: 'ফ্লেক্স উপাদানে ডিফল্টভাবে min-width: auto থাকে, যা লেখার আকারের চেয়ে ছোট হতে বাধা দেয়'
        },
        {
          en: 'Browsers disable Flexbox on screens narrower than 400px',
          bn: '৪০০px-এর চেয়ে ছোট স্ক্রিনে ব্রাউজার ফ্লেক্সবক্স বন্ধ করে দেয়'
        },
        {
          en: 'Flexbox requires an active internet connection to calculate widths',
          bn: 'প্রস্থ হিসাব করার জন্য ফ্লেক্সবক্সে সার্বক্ষণিক ইন্টারনেট সংযোগ লাগে'
        },
        {
          en: 'Text URLs can only be rendered inside SVG path elements',
          bn: 'টেক্সট ইউআরএল শুধুমাত্র এসভিজি পাথ উপাদানের ভেতর দেখানো সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Set min-width: 0 on flex children to release this constraint.',
        bn: 'এই বাধা দূর করতে ফ্লেক্স চাইল্ডে min-width: 0 সেট করুন।'
      },
      explanation: {
        en: 'In CSS Flexbox, min-width defaults to auto (content-based). Setting min-width: 0 allows the flex item to contract smaller than its intrinsic content width and wrap or truncate.',
        bn: 'ফ্লেক্সবক্সে min-width-এর ডিফল্ট মান auto। min-width: 0 দিলে উপাদানটি কন্টেন্টের চেয়েও ছোট হতে পারে এবং লেখা কাটছাঁট করতে দেয়।'
      }
    },
    {
      id: 'rd-bx-ex2',
      kind: 'mcq',
      topic: 'flex-wrap functionality',
      question: {
        en: 'What is the effect of setting flex-wrap: wrap on a flex container?',
        bn: 'একটি ফ্লেক্স কন্টেইনারে flex-wrap: wrap সেট করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Items wrap onto multiple lines when the total width of children exceeds the container',
          bn: 'চাইল্ড উপাদানগুলোর মোট প্রস্থ কন্টেইনার ছাড়িয়ে গেলে উপাদানগুলো নতুন লাইনে চলে যায়'
        },
        {
          en: 'Items are deleted when the screen width drops below 500px',
          bn: 'স্ক্রিন ৫০০px-এর নিচে নামলে উপাদানগুলো মুছে যায়'
        },
        {
          en: 'Items are sorted in reverse alphabetical order',
          bn: 'উপাদানগুলো বর্ণানুক্রমের বিপরীত ক্রমে সাজানো হয়'
        },
        {
          en: 'The container changes into a 3D isometric projection',
          bn: 'কন্টেইনারটি একটি ৩ডি আইসোমেট্রিক প্রজেকশনে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Wrap allows items to form new rows along the cross axis.',
        bn: 'র‍্যাপ উপাদানগুলোকে নতুন সারিতে নামার অনুমতি দেয়।'
      },
      explanation: {
        en: 'By default, flex-wrap is nowrap, forcing all items onto 1 row. Declaring wrap allows items to break onto multiple rows as viewport space decreases.',
        bn: 'ডিফল্টভাবে nowrap থাকায় সবকিছু ১ সারিতে আটকে থাকে। wrap ঘোষণা করলে জায়গা কমে গেলে উপাদানগুলো সুন্দরভাবে একাধিক সারিতে ভাগ হয়ে যায়।'
      }
    },
    {
      id: 'rd-bx-ex3',
      kind: 'mcq',
      topic: 'flex shorthand interpretation',
      question: {
        en: 'In the declaration flex: 1 1 250px;, what does each numeric value represent?',
        bn: 'flex: 1 1 250px; ঘোষণায় প্রতিটি সংখ্যার অর্থ কী?'
      },
      options: [
        {
          en: 'flex-grow: 1, flex-shrink: 1, and flex-basis: 250px',
          bn: 'flex-grow: ১, flex-shrink: ১, এবং flex-basis: ২৫০px'
        },
        {
          en: 'flex-direction: 1, flex-wrap: 1, and flex-gap: 250px',
          bn: 'flex-direction: ১, flex-wrap: ১, এবং flex-gap: ২৫০px'
        },
        {
          en: 'order: 1, z-index: 1, and opacity: 250px',
          bn: 'order: ১, z-index: ১, এবং opacity: ২৫০px'
        },
        {
          en: 'padding: 1px, margin: 1px, and border: 250px',
          bn: 'padding: ১px, margin: ১px, এবং border: ২৫০px'
        }
      ],
      answer: 0,
      hint: {
        en: 'The shorthand order is grow, shrink, and basis.',
        bn: 'শর্টহ্যান্ডের ধারাবাহিকতা হলো গ্রো, শ্রিংক এবং বেসিস।'
      },
      explanation: {
        en: 'The flex shorthand accepts three parameters in order: flex-grow, flex-shrink, and flex-basis.',
        bn: 'flex শর্টহ্যান্ড ক্রমানুসারে তিনটি মান গ্রহণ করে: flex-grow, flex-shrink এবং flex-basis।'
      }
    },
    {
      id: 'rd-bx-ex4',
      kind: 'mcq',
      topic: 'auto margins in flexbox',
      question: {
        en: 'How does margin-left: auto behave on an item inside a display: flex container?',
        bn: 'display: flex কন্টেইনারের ভেতরের কোনো উপাদানে margin-left: auto দিলে কী ঘটে?'
      },
      options: [
        {
          en: 'It absorbs all available positive space to its left, pushing the item to the right edge',
          bn: 'এটি বাম পাশের সমস্ত ফাঁকা জায়গা দখল করে নিয়ে উপাদানটিকে ডান কিনারায় ঠেলে দেয়'
        },
        {
          en: 'It centers the item in the middle of the screen vertically',
          bn: 'এটি উপাদানটিকে স্ক্রিনের উলম্বভাবে মাঝখানে রাখে'
        },
        {
          en: 'It resets the item margin to 0px on mobile devices',
          bn: 'এটি মোবাইলে মার্জিনের মান ০px-এ নামিয়ে দেয়'
        },
        {
          en: 'It converts the element into an absolute positioning context',
          bn: 'এটি উপাদানটিকে অ্যাবসোলিউট পজিশনিংয়ে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Auto margins consume remaining free space along the axis.',
        bn: 'অটো মার্জিন অ্যাক্সিসের সমস্ত অতিরিক্ত ফাঁকা স্থান গ্রাস করে।'
      },
      explanation: {
        en: 'In Flexbox, auto margins consume all available extra space in that direction, making margin-left: auto an idiomatic way to separate navigation brand icons from login buttons.',
        bn: 'ফ্লেক্সবক্সে অটো মার্জিন সংশ্লিষ্ট দিকের সমস্ত ফাঁকা জায়গা নিয়ে নেয়, যা ন্যাভিগেশন বারকে দুই পাশে ছড়িয়ে দিতে ব্যবহৃত হয়।'
      }
    }
  ],
  quiz: {
    id: 'boxes-bend-quiz',
    title: {
      en: 'Flexbox Architecture Quiz',
      bn: 'ফ্লেক্সবক্স আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-flex-direction-axes',
        kind: 'mcq',
        topic: 'flex direction axis switch',
        question: {
          en: 'When flex-direction changes from row to column, how does justify-content behave?',
          bn: 'flex-direction যখন row থেকে column-এ পরিবর্তিত হয়, তখন justify-content কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'It now aligns items vertically along the column main axis instead of horizontally',
            bn: 'এটি অনুভূমিকের বদলে কলামের প্রধান উলম্ব অ্যাক্সিস বরাবর উপাদানগুলোকে সাজায়'
          },
          {
            en: 'It becomes completely inactive and has no visual effect',
            bn: 'এটি সম্পূর্ণ নিষ্ক্রিয় হয়ে যায় এবং কোনো প্রভাব ফেলে না'
          },
          {
            en: 'It rotates all text content by 90 degrees',
            bn: 'এটি সমস্ত টেক্সটকে ৯০ ডিগ্রি কোণে ঘুরিয়ে দেয়'
          },
          {
            en: 'It reverses the reading order of assistive screen readers',
            bn: 'এটি স্ক্রিন রিডারের পড়ার ক্রম উল্টো করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'justify-content always governs alignment along the main axis.',
          bn: 'justify-content সর্বদা প্রধান মেইন অ্যাক্সিস বরাবর কাজ করে।'
        },
        explanation: {
          en: 'justify-content always aligns items along the main axis. When flex-direction: column is declared, the main axis becomes vertical, so justify-content controls vertical distribution.',
          bn: 'justify-content সর্বদা মেইন অ্যাক্সিস অনুসরণ করে। flex-direction: column দিলে উলম্ব দিকটি মেইন অ্যাক্সিস হয়ে ওঠে এবং সেখানেই অ্যালাইনমেন্ট হয়।'
        }
      },
      {
        id: 'q-order-accessibility-danger',
        kind: 'mcq',
        topic: 'css order property accessibility',
        question: {
          en: 'Why should developers exercise caution when using the CSS order property on flex items?',
          bn: 'ফ্লেক্স উপাদানে সিএসএস order প্রোপার্টি ব্যবহারের সময় ডেভেলপারদের কেন সতর্ক থাকা উচিত?'
        },
        options: [
          {
            en: 'order rearranges visual display only; it does not change DOM tab order or screen reader reading sequence',
            bn: 'order শুধুমাত্র দেখার চেহারা পরিবর্তন করে; এটি ডমের ট্যাব ক্রম বা স্ক্রিন রিডারের পাঠের ক্রম পরিবর্তন করে না'
          },
          {
            en: 'order property is only supported in legacy Internet Explorer',
            bn: 'order প্রোপার্টি শুধুমাত্র পুরোনো ইন্টারনেট এক্সপ্লোরারেই চলে'
          },
          {
            en: 'order property increases HTTP bundle sizes by 50 KB',
            bn: 'order প্রোপার্টি ব্যবহার করলে সাইটের সাইজ ৫০ KB বেড়ে যায়'
          },
          {
            en: 'order property disables hover interactions on hyperlinks',
            bn: 'order প্রোপার্টি লিঙ্কের ওপর মাউস হোভার করা বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Visual reordering does not alter the underlying source document structure.',
          bn: 'চোখে দেখার ক্রম বদলালেও মূল ডকুমেন্টের ভেতরের গঠন অপরিবর্তিত থাকে।'
        },
        explanation: {
          en: 'WCAG warns that changing visual order without updating DOM order creates severe disorientation for keyboard and screen reader users navigating with Tab keys.',
          bn: 'ডম ক্রম পরিবর্তন না করে শুধু সিএসএস order দিয়ে সাজালে কীবোর্ড ব্যবহারকারী ও দৃষ্টিপ্রতিবন্ধী ব্যক্তিরা বিভ্রান্তিতে পড়েন।'
        }
      },
      {
        id: 'q-flex-basis-zero-vs-auto',
        kind: 'mcq',
        topic: 'flex basis zero vs auto',
        question: {
          en: 'What is the operational difference between flex: 1 1 0px and flex: 1 1 auto?',
          bn: 'flex: 1 1 0px এবং flex: 1 1 auto-এর মধ্যে বাস্তব কাজের পার্থক্য কী?'
        },
        options: [
          {
            en: 'flex: 1 1 0px ignores item content sizes and forces strictly equal columns, while auto distributes space after accounting for content width',
            bn: 'flex: 1 1 0px কন্টেন্টের আকার উপেক্ষা করে সম্পূর্ণ সমান কলাম তৈরি করে, আর auto কন্টেন্টের মাপ বিবেচনা করে বাকি জায়গা বণ্টন করে'
          },
          {
            en: 'flex: 1 1 0px hides elements completely from the screen',
            bn: 'flex: 1 1 0px উপাদানগুলোকে স্ক্রিন থেকে পুরোপুরি লুকিয়ে ফেলে'
          },
          {
            en: 'flex: 1 1 auto only works on mobile devices',
            bn: 'flex: 1 1 auto শুধুমাত্র মোবাইল ডিভাইসে কাজ করে'
          },
          {
            en: 'There is zero difference in modern CSS layout engines',
            bn: 'আধুনিক সিএসএস লেআউট ইঞ্জিনে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'A basis of 0 means all container space is treated as free space to divide equally.',
          bn: 'বেসিস ০ হলে সমস্ত জায়গাকে সমানভাবে ভাগ করার সুযোগ হিসেবে ধরা হয়।'
        },
        explanation: {
          en: 'With basis: 0, the entire container width is positive space divided equally by grow factors. With basis: auto, space is distributed only after content sizes are deducted.',
          bn: 'বেসিস ০ থাকলে পুরো কন্টেইনার সমান মাপে ভাগ হয়। কিন্তু auto দিলে যার লেখা বেশি সে বেশি জায়গা নিয়ে ফেলে।'
        }
      },
      {
        id: 'q-align-items-vs-align-content',
        kind: 'mcq',
        topic: 'align-items vs align-content',
        question: {
          en: 'When does the align-content property have an effect in Flexbox?',
          bn: 'ফ্লেক্সবক্সে align-content প্রোপার্টিটি কখন কার্যকর হয়?'
        },
        options: [
          {
            en: 'Only in multi-line wrapping flex containers (flex-wrap: wrap) where extra space exists along the cross axis',
            bn: 'শুধুমাত্র একাধিক লাইনের র‍্যাপিং কন্টেইনারে (flex-wrap: wrap) যেখানে ক্রস অ্যাক্সিসে বাড়তি ফাঁকা জায়গা থাকে'
          },
          {
            en: 'Exclusively on single-line flex rows with 1 item',
            bn: 'শুধুমাত্র ১টি উপাদান থাকা একক লাইনের ফ্লেক্স সারিতে'
          },
          {
            en: 'Only when displaying monospace programming code blocks',
            bn: 'শুধুমাত্র কোড ব্লকে মোনোস্পেস ফন্ট প্রদর্শনের সময়'
          },
          {
            en: 'align-content is not a valid CSS property',
            bn: 'align-content কোনো বৈধ সিএসএস প্রোপার্টি নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'align-content aligns multiple wrapped rows, not individual items within 1 row.',
          bn: 'align-content একাধিক র‍্যাপড সারির মাঝে ব্যবধান নিয়ন্ত্রণ করে, 1 টি সারির ভেতরের একক উপাদান নয়।'
        },
        explanation: {
          en: 'align-items positions items within their respective flex line. align-content distributes the lines themselves when multiple rows wrap and cross-axis free space exists.',
          bn: 'align-items প্রতিটি সারির ভেতরের উপাদান সাজায়। আর align-content একাধিক সারি তৈরি হলে সারিগুলোর নিজেদের মাঝে জায়গা বণ্টন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pouring-grid',
    title: {
      en: 'CSS Grid Layouts — auto-fit, minmax(), and Subgrid Architecture',
      bn: 'সিএসএস গ্রিড লেআউট — auto-fit, minmax() এবং সাবগ্রিড আর্কিটেকচার'
    }
  }
};
