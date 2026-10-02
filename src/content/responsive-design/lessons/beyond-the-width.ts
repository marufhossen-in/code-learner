import type { Lesson } from '../../../lib/types';

export const BeyondTheWidthLesson: Lesson = {
  slug: 'beyond-the-width',
  tech: 'responsive-design',
  title: {
    en: 'Container Queries & Modern Media — @container and Interaction Queries',
    bn: 'কন্টেইনার কুয়েরি ও আধুনিক মিডিয়া — @container এবং ইন্টারঅ্যাকশন কুয়েরি'
  },
  summary: {
    en: 'Responsive components should adapt based on the space provided by their immediate parent container rather than the global browser viewport. In this lesson, we master CSS Container Queries using container-type: inline-size and container query length units like cqw. We also explore hardware interaction media queries for touch and pointer capabilities, alongside accessible data table reflow patterns.',
    bn: 'রেসপনসিভ কম্পোনেন্টগুলোর পুরো ব্রাউজার স্ক্রিনের বদলে তাদের নিজস্ব প্যারেন্ট কন্টেইনারের জায়গার ওপর ভিত্তি করে মানিয়ে নেওয়া উচিত। এই পাঠে আমরা container-type: inline-size এবং cqw ইউনিট দিয়ে সিএসএস কন্টেইনার কুয়েরি আয়ত্ত করব। এছাড়া আমরা টাচ স্ক্রিনের জন্য ইন্টারঅ্যাকশন মিডিয়া কুয়েরি এবং অ্যাক্সেসিবল টেবিল রিফ্লো কৌশল বিস্তারিত শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'container-queries-overview',
      text: {
        en: 'The Modular Revolution: Container Queries',
        bn: 'মডুলার বিপ্লব: কন্টেইনার কুয়েরিজ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you place a card component inside a narrow sidebar, it needs a stacked single-column layout. When that identical card sits in the main column of a 1440px desktop screen, it needs a horizontal side-by-side layout. Standard media queries cannot distinguish between these placements because the viewport width is identical. Container Queries solve this permanently.',
        bn: 'একটি কার্ড উপাদানকে সরু সাইডবারে রাখলে তার ভেতরের ছবি ও লেখা এক কলামে উপর-নিচ হওয়া প্রয়োজন। আবার একই কার্ড ১৪৪০px ডেস্কটপের চওড়া মূল অংশে থাকলে পাশাপাশি শো করা উচিত। সাধারণ মিডিয়া কুয়েরি দিয়ে এই পার্থক্য করা অসম্ভব কারণ উভয়ের ক্ষেত্রেই স্ক্রিনের মাপ একই থাকে। কন্টেইনার কুয়েরি এই সমস্যার স্থায়ী সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'container-type: inline-size',
          def: {
            en: 'A CSS property declaring that an element establishes a containment context for child width queries.',
            bn: 'একটি সিএসএস প্রপার্টি যা ঘোষণা করে যে উপাদানটি তার চাইল্ড উপাদানগুলোর জন্য প্রস্থ পরিমাপের সীমানা নির্ধারণ করেছে।'
          }
        },
        {
          term: '@container Rule',
          def: {
            en: 'A conditional CSS at-rule applying styles based on the computed dimensions of the nearest ancestor container.',
            bn: 'একটি শর্তযুক্ত সিএসএস নিয়ম যা নিকটতম প্যারেন্ট কন্টেইনারের আকারের ওপর ভিত্তি করে স্টাইল প্রয়োগ করে।'
          }
        },
        {
          term: 'cqw Length Unit',
          def: {
            en: 'A relative length unit representing exactly 1% of the query container width.',
            bn: 'একটি আপেক্ষিক দৈর্ঘ্য ইউনিট যা সংশ্লিষ্ট কন্টেইনারের মোট প্রস্থের ঠিক ১% নির্দেশ করে।'
          }
        },
        {
          term: 'pointer: coarse & hover: none',
          def: {
            en: 'Media queries detecting primary touch input devices without precision mouse hovering capabilities.',
            bn: 'মিডিয়া কুয়েরি যা মাউস ছাড়া আঙুল দিয়ে চালিত টাচ স্ক্রিন ডিভাইস শনাক্ত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'container-vs-media-queries',
      text: {
        en: 'Setting Up Container Queries Step-by-Step',
        bn: 'ধাপে ধাপে কন্টেইনার কুয়েরি তৈরি'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Declare the Container Parent: On the parent wrapper, define container-type: inline-size; (and optionally container-name: card;). Never query an element against itself; queries evaluate the parent.',
          bn: '১. প্যারেন্ট কন্টেইনার ঘোষণা: প্যারেন্ট উপাদানে container-type: inline-size; লিখুন। কোনো উপাদান কখনোই নিজেকে কুয়েরি করতে পারে না; এটি সর্বদা তার প্যারেন্টের মাপ দেখে।'
        },
        {
          en: '2. Style the Modular Child: Write @container (min-width: 25rem) { .card-body { flex-direction: row; } }. The card adapts whether it sits in a 3-column desktop grid or a narrow mobile screen.',
          bn: '২. মডুলার চাইল্ড স্টাইলিং: @container (min-width: 25rem) { .card-body { flex-direction: row; } } লিখুন। কার্ডটি ৩ কলামের গ্রিডে বা সাইডবারে যেখানেই থাকুক নিজস্ব জায়গায় সুন্দরভাবে মানিয়ে নেবে।'
        },
        {
          en: '3. Touch Target Sizing: Mobile users tap with fingers. Use @media (pointer: coarse) to expand button hit targets to at least 48px by 48px for WCAG 2.5.5 compliance.',
          bn: '৩. টাচ টার্গেটের আকার: মোবাইল ব্যবহারকারীরা আঙুল দিয়ে স্পর্শ করে। @media (pointer: coarse) দিয়ে বাটনের আকার অন্তত ৪৮px বাই ৪৮px করুন যাতে সহজে ট্যাপ করা যায়।'
        },
        {
          en: '4. Accessible Responsive Tables: Tables with many columns cannot squeeze onto phones. Wrap the table in a container with overflow-x: auto and tabindex="0" so keyboard users can scroll with arrow keys.',
          bn: '৪. অ্যাক্সেসিবল টেবিল: বেশি কলাম থাকা টেবিল মোবাইলে চাপানো যায় না। টেবিলে overflow-x: auto এবং tabindex="0" দিন যাতে কীবোর্ড ব্যবহারকারীরা অ্যারো কি দিয়ে স্ক্রল করতে পারে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Container Query Implementation',
        bn: 'কন্টেইনার কুয়েরির ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `/* 1. Establish parent container boundary */
.widget-slot {
  container-type: inline-size;
  container-name: widget;
}

/* 2. Base component style (default mobile / narrow) */
.user-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

/* 3. Adapt when container expands past 28rem (448px) */
@container widget (min-width: 28rem) {
  .user-card {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
}

// 4. Test container query support in JavaScript
const supportsCQ = CSS.supports('container-type', 'inline-size');
console.log('Browser supports Container Queries:', supportsCQ);
// -> Browser supports Container Queries: true`,
      caption: {
        en: 'Defining a container context with inline-size adapting layout at 28rem width threshold',
        bn: 'inline-size দিয়ে কন্টেইনার কনটেক্সট তৈরি এবং ২৮rem প্রস্থের সীমানায় লেআউট পরিবর্তন'
      }
    },
    {
      type: 'heading',
      id: 'interaction-queries-table',
      text: {
        en: 'Hardware Interaction Media Queries',
        bn: 'হার্ডওয়্যার ইন্টারঅ্যাকশন মিডিয়া কুয়েরি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature Query', bn: 'ফিচার কুয়েরি' },
        { en: 'Hardware Capability', bn: 'ডিভাইসের সক্ষমতা' },
        { en: 'Recommended Design Adaptation', bn: 'প্রস্তাবিত ডিজাইন পরিবর্তন' }
      ],
      rows: [
        [
          { en: '@media (hover: hover)', bn: '@media (hover: hover)' },
          { en: 'Precision mouse or stylus with hover state', bn: 'মাউস বা স্টাইলাস যা কোনো কিছুতে হোভার করতে পারে' },
          { en: 'Enable interactive hover effects and tooltips', bn: 'হোভার এনিমেশন এবং টুলটিপ সক্রিয় রাখা' }
        ],
        [
          { en: '@media (hover: none)', bn: '@media (hover: none)' },
          { en: 'Touchscreen devices without hover capability', bn: 'টাচস্ক্রিন ফোন বা ট্যাবলেট যেখানে হোভার করার সুযোগ নেই' },
          { en: 'Display action icons permanently without requiring hover', bn: 'হোভারের অপেক্ষায় না রেখে অ্যাকশন আইকনগুলো সরাসরি দৃশ্যমান রাখা' }
        ],
        [
          { en: '@media (pointer: coarse)', bn: '@media (pointer: coarse)' },
          { en: 'Low-accuracy pointing device (human finger)', bn: 'কম সূক্ষ্ম নির্দেশক মাধ্যম (যেমন মানুষের আঙুল)' },
          { en: 'Enlarge hit targets to at least 48px by 48px', bn: 'ক্লিক বা ট্যাপের এলাকা অন্তত ৪৮px বাই ৪৮px আকারে বড় করা' }
        ],
        [
          { en: '@media (pointer: fine)', bn: '@media (pointer: fine)' },
          { en: 'High-precision pointing device (mouse pointer)', bn: 'উচ্চ সূক্ষ্মতাসম্পন্ন নির্দেশক (যেমন মাউস পয়েন্টার)' },
          { en: 'Use compact UI controls with tighter 24px spacing', bn: 'তুলনামূলকভাবে ছোট এবং কম দূরত্বের ২৪px কন্ট্রোল ব্যবহার' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'rd-cq-ex1',
      kind: 'mcq',
      topic: 'container-type requirement',
      question: {
        en: 'What CSS property must be declared on a parent element before @container queries can evaluate its dimensions?',
        bn: 'চাইল্ড উপাদানে @container কার্যকর হওয়ার পূর্বে প্যারেন্ট উপাদানে কোন সিএসএস প্রপার্টি ঘোষণা করা আবশ্যক?'
      },
      options: [
        {
          en: 'container-type: inline-size (or container: name / inline-size)',
          bn: 'container-type: inline-size (অথবা container: name / inline-size)'
        },
        {
          en: 'display: container',
          bn: 'display: container'
        },
        {
          en: 'position: contained',
          bn: 'position: contained'
        },
        {
          en: 'media-container: true',
          bn: 'media-container: true'
        }
      ],
      answer: 0,
      hint: {
        en: 'The container-type property establishes the containment context.',
        bn: 'container-type প্রোপার্টি পরিমাপের বাউন্ডারি তৈরি করে।'
      },
      explanation: {
        en: 'Before descendant elements can evaluate @container rules, an ancestor must declare container-type: inline-size to measure width or container-type: normal to measure style variables.',
        bn: 'কন্টেইনার কুয়েরি চালানোর জন্য যেকোনো প্যারেন্ট উপাদানে container-type: inline-size ঘোষণা করা বাধ্যতামূলক, যা প্রস্থের সীমানা নির্ধারণ করে।'
      }
    },
    {
      id: 'rd-cq-ex2',
      kind: 'mcq',
      topic: 'cqw unit calculation',
      question: {
        en: 'What does 1cqw represent in CSS layout calculations?',
        bn: 'সিএসএস লেআউট গণনায় 1cqw বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'Exactly 1% of the query container width, allowing components to scale fluidly relative to their parent box',
          bn: 'সংশ্লিষ্ট প্যারেন্ট কন্টেইনারের প্রস্থের ঠিক ১%, যা উপাদানকে প্যারেন্টের সাথে মানিয়ে বড় বা ছোট হতে দেয়'
        },
        {
          en: '1% of the global browser viewport width',
          bn: 'পুরো গ্লোবাল ব্রাউজার ভিউপোর্টের প্রস্থের ১%'
        },
        {
          en: '1 physical millimeter on printed paper',
          bn: 'কাগজে প্রিন্ট করার সময় ১ মিলিমিটার দূরত্ব'
        },
        {
          en: 'The total download size of the website in megabytes',
          bn: 'মেগাবাইটে ওয়েবসাইটের মোট ডাউনলোড সাইজ'
        }
      ],
      answer: 0,
      hint: {
        en: 'cqw stands for Container Query Width.',
        bn: 'cqw মানে হলো কন্টেইনার কুয়েরি উইডথ।'
      },
      explanation: {
        en: 'While 1vw is 1% of the entire viewport, 1cqw is 1% of the nearest ancestor container width, enabling truly self-contained fluid typography and padding.',
        bn: '1vw পুরো স্ক্রিনের ১% হলেও, 1cqw হলো নিকটতম প্যারেন্ট কন্টেইনারের ১%। এর ফলে উপাদানগুলো প্যারেন্টের আকার বুঝে স্বতঃস্ফূর্তভাবে বড়-ছোট হয়।'
      }
    },
    {
      id: 'rd-cq-ex3',
      kind: 'mcq',
      topic: 'hover none touch pattern',
      question: {
        en: 'Why is relying on :hover to reveal critical action buttons an anti-pattern on touchscreens?',
        bn: 'টাচস্ক্রিন ডিভাইসে প্রয়োজনীয় অ্যাকশন বাটন প্রদর্শনের জন্য :hover-এর ওপর নির্ভর করা কেন মারাত্মক ভুল?'
      },
      options: [
        {
          en: 'Touchscreens lack a continuous cursor hover state; buttons hidden behind hover are undiscoverable or require accidental double taps',
          bn: 'টাচস্ক্রিনে মাউসের মতো স্থায়ী হোভার অবস্থা থাকে না; ফলে হোভারে লুকানো বাটন ব্যবহারকারী দেখতে পায় না'
        },
        {
          en: 'Touchscreens permanently delete all CSS stylesheets containing hover rules',
          bn: 'হোভার রুল থাকা সমস্ত স্টাইলশিট টাচস্ক্রিন নিজে থেকেই ডিলিট করে দেয়'
        },
        {
          en: 'hover properties increase mobile CPU temperature by 20 degrees',
          bn: 'হোভার প্রোপার্টি ব্যবহারের কারণে মোবাইলের প্রসেসর ২০ ডিগ্রি বেশি গরম হয়'
        },
        {
          en: 'Modern touch devices automatically convert hover links into phone calls',
          bn: 'আধুনিক টাচ ডিভাইস হোভার লিংকে ক্লিক করলে সাথে সাথে ফোন কল শুরু করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fingers tap rather than float across pixels.',
        bn: 'আঙুল দিয়ে সরাসরি ট্যাপ করা হয়, মাউসের মতো ভেসে থাকা যায় না।'
      },
      explanation: {
        en: 'Touchscreen devices do not support hover. UI patterns that hide action buttons until hover frustrate touch users. Use @media (hover: none) to keep critical controls visible.',
        bn: 'টাচ স্ক্রিনে হোভার নেই। হোভারের আড়ালে কোনো জরুরি বাটন লুকিয়ে রাখলে মোবাইল ব্যবহারকারী তা খুঁজে পায় না। এজন্য মোবাইলে বাটন সর্বদা দৃশ্যমান রাখা উচিত।'
      }
    },
    {
      id: 'rd-cq-ex4',
      kind: 'mcq',
      topic: 'accessible table reflow',
      question: {
        en: 'Why must a scrollable table container have tabindex="0" declared in HTML?',
        bn: 'স্ক্রলযোগ্য টেবিল কন্টেইনারে এইচটিএমএলে tabindex="0" দেওয়া কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'It makes the scrollable region keyboard-focusable so users navigating with keyboard arrows can scroll through wide data tables',
          bn: 'এটি স্ক্রল এলাকাটিকে কীবোর্ড ফোকাসযোগ্য করে তোলে যাতে কীবোর্ড ব্যবহারকারীরা অ্যারো কি চেপে পুরো টেবিল পড়তে পারেন'
        },
        {
          en: 'It converts the table into a download link for Microsoft Excel',
          bn: 'এটি টেবিলটিকে সরাসরি মাইক্রোসফট এক্সেল ফাইলের ডাউনলোড লিংকে রূপান্তর করে'
        },
        {
          en: 'It encrypts sensitive table cell numbers with 256-bit AES encryption',
          bn: 'এটি টেবিলের সংবেদনশীল ডেটাকে ২৫৬ বিট এনক্রিপশন দিয়ে সুরক্ষিত করে'
        },
        {
          en: 'tabindex="0" forces the browser to render the table in 3D perspective',
          bn: 'tabindex="0" ব্রাউজারকে টেবিলটি ৩ডি দৃষ্টিকোণে দেখাতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Keyboard users cannot scroll overflow regions without receiving focus.',
        bn: 'ফোকাস ছাড়া শুধু কীবোর্ড দিয়ে কোনো উপচে পড়া অংশ স্ক্রল করা অসম্ভব।'
      },
      explanation: {
        en: 'Under WCAG accessibility criteria, scrollable overflow regions must be accessible to keyboard-only users. Adding tabindex="0" places the scroll container into the sequential focus order.',
        bn: 'অ্যাক্সেসিবিলিটি নিয়ম অনুযায়ী মাউস ছাড়া শুধু কীবোর্ড দিয়েও সমস্ত তথ্য পড়ার সুবিধা থাকতে হয়। tabindex="0" দিলে কীবোর্ড দিয়ে টেবিল স্ক্রল করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'container-queries-quiz',
    title: {
      en: 'Container Queries & Device Capabilities Quiz',
      bn: 'কন্টেইনার কুয়েরি এবং ডিভাইসের সক্ষমতা কুইজ'
    },
    questions: [
      {
        id: 'q-query-self-forbidden',
        kind: 'mcq',
        topic: 'cannot query self in container queries',
        question: {
          en: 'Can an element query its own container size using @container (min-width: 500px) directly on itself?',
          bn: 'কোনো উপাদান কি সরাসরি নিজের ওপর @container (min-width: 500px) প্রয়োগ করে নিজের আকার পরিমাপ করতে পারে?'
        },
        options: [
          {
            en: 'No, an element can only query the dimensions of an ancestor container; an element cannot query itself to prevent infinite layout loops',
            bn: 'না, একটি উপাদান কেবল তার কোনো পূর্বপুরুষ প্যারেন্টের আকার মাপতে পারে; ইনফিনিট লুপ এড়াতে উপাদান নিজেকে নিজে মাপতে পারে না'
          },
          {
            en: 'Yes, elements can query their own sizes without any parent container requirement',
            bn: 'হ্যাঁ, কোনো প্যারেন্ট ছাড়াই উপাদান সরাসরি নিজের আকার পরিমাপ করতে পারে'
          },
          {
            en: 'Only if the element is an HTML5 video tag',
            bn: 'শুধুমাত্র যদি উপাদানটি একটি এইচটিএমএল৫ ভিডিও ট্যাগ হয়'
          },
          {
            en: 'Only when running inside Node.js headless environments',
            bn: 'শুধুমাত্র Node.js হেডলেস ব্রাউজার পরিবেশে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Self-querying would cause cyclical circular dependencies.',
          bn: 'নিজেকে নিজে পরিমাপ করতে গেলে চক্রাকার লুপের সৃষ্টি হবে।'
        },
        explanation: {
          en: 'To prevent infinite loops (e.g. element widens, triggers query, becomes narrow, un-triggers query), the CSS specification mandates that @container queries evaluate ancestor containers only.',
          bn: 'অনন্ত লুপ (আকার বড় হলে ছোট হওয়ার নিয়ম আবার ছোট হলে বড় হওয়ার নিয়ম) প্রতিরোধ করতে সিএসএস স্পেসিফিকেশনে শুধু প্যারেন্ট কন্টেইনার পরিমাপের নিয়ম রাখা হয়েছে।'
        }
      },
      {
        id: 'q-touch-target-size-wcag',
        kind: 'mcq',
        topic: 'wcag touch target standard',
        question: {
          en: 'What is the recommended minimum touch target size according to modern mobile usability and WCAG standards?',
          bn: 'মোবাইল ব্যবহারযোগ্যতা এবং WCAG স্ট্যান্ডার্ড অনুসারে টাচ বাটনের সর্বনিম্ন প্রস্তাবিত আকার কত?'
        },
        options: [
          {
            en: 'At least 44px by 44px (or 48px by 48px) to accommodate human finger pad tap accuracy',
            bn: 'মানুষের আঙুলের ছোঁয়ার নির্ভুলতার জন্য অন্তত ৪৪px বাই ৪৪px (বা ৪৮px বাই ৪৮px)'
          },
          {
            en: 'Exactly 10px by 10px',
            bn: 'ঠিক ১০px বাই ১০px'
          },
          {
            en: 'At least 500px by 500px',
            bn: 'অন্তত ৫০০px বাই ৫০০px'
          },
          {
            en: 'There is no minimum touch target size requirement in web standards',
            bn: 'ওয়েব স্ট্যান্ডার্ডে টাচ বাটনের আকারের কোনো নির্দিষ্ট বাধ্যবাধকতা নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Human finger tips require substantial hit target areas.',
          bn: 'আঙুল দিয়ে ট্যাপ করার জন্য উপযুক্ত ফাঁকা জায়গা প্রয়োজন।'
        },
        explanation: {
          en: 'WCAG 2.1 Success Criterion 2.5.5 and mobile platforms (Apple HIG and Android Material) recommend minimum interactive targets of 44px to 48px to prevent erroneous mis-taps.',
          bn: 'অ্যাক্সেসিবিলিটি নির্দেশিকা এবং অ্যাপল/অ্যান্ড্রয়েড উভয় প্ল্যাটফর্মেই ভুল ট্যাপ রোধ করতে বাটন অন্তত ৪৪px থেকে ৪৮px করার পরামর্শ দেওয়া হয়।'
        }
      },
      {
        id: 'q-container-name-specificity',
        kind: 'mcq',
        topic: 'named container targeting',
        question: {
          en: 'How do you target a specific ancestor container when multiple nested containers exist in the DOM tree?',
          bn: 'ডম ট্রিতে একাধিক নেস্টেড কন্টেইনার থাকলে নির্দিষ্ট একটি প্যারেন্ট কন্টেইনারকে কীভাবে টার্গেট করতে হয়?'
        },
        options: [
          {
            en: 'By naming the container with container-name: sidebar; and querying it via @container sidebar (min-width: 300px)',
            bn: 'container-name: sidebar; দিয়ে নাম নির্ধারণ করে এবং @container sidebar (min-width: 300px) দিয়ে কুয়েরি করে'
          },
          {
            en: 'By using an exclamation point syntax: @container !important (width >= 300px)',
            bn: 'একটি আশ্চর্যবোধক চিহ্ন দিয়ে: @container !important (width >= 300px)'
          },
          {
            en: 'By writing SQL SELECT queries against the DOM tree',
            bn: 'ডম ট্রির ওপর এসকিউএল (SQL) সিলেক্ট কুয়েরি চালিয়ে'
          },
          {
            en: 'Nested containers are unsupported in modern CSS specifications',
            bn: 'আধুনিক সিএসএসে নেস্টেড কন্টেইনার সম্পূর্ণ অসমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use container-name on the parent and reference the name in the @container rule.',
          bn: 'প্যারেন্টে container-name দিন এবং কুয়েরিতে সেই নামটি উল্লেখ করুন।'
        },
        explanation: {
          en: 'By declaring container-name on the ancestor, authors can direct @container rules to filter for that exact named context, bypassing closer intermediate unnamed containers.',
          bn: 'কন্টেইনারের নাম দিয়ে রাখলে মাঝের অন্য কোনো সাধারণ কন্টেইনার এড়িয়ে সরাসরি কাঙ্ক্ষিত প্যারেন্ট কন্টেইনারের আকার পর্যবেক্ষণ করা যায়।'
        }
      },
      {
        id: 'q-reduced-motion-accessibility',
        kind: 'mcq',
        topic: 'prefers-reduced-motion query',
        question: {
          en: 'What accessibility requirement does @media (prefers-reduced-motion: reduce) fulfill?',
          bn: '@media (prefers-reduced-motion: reduce) কোন অ্যাক্সেসিবিলিটি প্রয়োজনীয়তা পূরণ করে?'
        },
        options: [
          {
            en: 'It detects when a user has requested minimal motion in their operating system to prevent vestibular motion sickness and vertigo',
            bn: 'ব্যবহারকারী অপারেটিং সিস্টেমে অ্যানিমেশন কমানোর অনুরোধ জানিয়েছেন কি না তা শনাক্ত করে মাথা ঘোরা বা ভেস্টিবুলার অসুস্থতা প্রতিরোধ করে'
          },
          {
            en: 'It automatically turns off all computer cooling fans to reduce noise',
            bn: 'কম্পিউটারের ফ্যানের শব্দ কমাতে এটি স্বয়ংক্রিয়ভাবে ফ্যান বন্ধ করে দেয়'
          },
          {
            en: 'It slows down website network download speeds by 50%',
            bn: 'এটি ওয়েবসাইটের ডাউনলোড গতি ৫০% কমিয়ে দেয়'
          },
          {
            en: 'It forces mouse pointers to move at half speed',
            bn: 'এটি মাউসের চলাচলের গতি অর্ধেক কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Large flashing animations cause severe physical discomfort for users with vestibular disorders.',
          bn: 'অতিরিক্ত অ্যানিমেশনের কারণে ভেস্টিবুলার সমস্যা থাকা ব্যক্তিরা শারীরিক অসুস্থতা অনুভব করেন।'
        },
        explanation: {
          en: 'prefers-reduced-motion honors user OS accessibility preferences. Stylesheets should disable intense scrolling transforms, parallax effects, and spinning animations when this flag is active.',
          bn: 'এই কুয়েরিটি ব্যবহারকারীর সিস্টেম সেটিংস সম্মান করে। এটি সত্য থাকলে প্যারালাক্স বা বড় অ্যানিমেশন বন্ধ করে মসৃণ সাধারণ রূপান্তর দেখানো আবশ্যক।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-fitting-verdict',
    title: {
      en: 'Responsive Architecture & Strategy — Production Auditing and Trade-offs',
      bn: 'রেসপনসিভ আর্কিটেকচার ও কৌশল — প্রোডাকশন অডিট এবং বিবেচনা'
    }
  }
};
