import type { Lesson } from '../../../lib/types';

export const TheFittingVerdictLesson: Lesson = {
  slug: 'the-fitting-verdict',
  tech: 'responsive-design',
  title: {
    en: 'Responsive Architecture & Strategy — Production Auditing and Trade-offs',
    bn: 'রেসপনসিভ আর্কিটেকচার ও কৌশল — প্রোডাকশন অডিট এবং বিবেচনা'
  },
  summary: {
    en: 'Production-grade responsive web design requires a cohesive strategy uniting fluid math, layout engines, container queries, and accessibility criteria. In this advanced capstone lesson, we establish an architectural decision tree for choosing between Flexbox, Grid, and Container Queries. We also formalize cross-device testing matrices and verify WCAG 1.4.10 Reflow compliance.',
    bn: 'প্রোডাকশন-মানের রেসপনসিভ ওয়েব ডিজাইনের জন্য ফ্লুইড ম্যাথ, লেআউট ইঞ্জিন, কন্টেইনার কুয়েরি এবং অ্যাক্সেসিবিলিটি নীতির সমন্বিত কৌশল প্রয়োজন। এই উন্নত পাঠে আমরা ফ্লেক্সবক্স, গ্রিড এবং কন্টেইনার কুয়েরির মধ্যে সঠিক প্রযুক্তি নির্বাচনের আর্কিটেকচারাল ডিসিশন ট্রি তৈরি করব। এছাড়া আমরা ক্রস-ডিভাইস টেস্টিং ম্যাট্রিক্স এবং WCAG 1.4.10 রিফ্লো নিয়ম বাস্তবায়ন শিখব।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'architectural-strategy-overview',
      text: {
        en: 'The Unified Responsive Strategy',
        bn: 'সমন্বিত রেসপনসিভ আর্কিটেকচার কৌশল'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you architect responsive applications, no single CSS feature solves every layout challenge. Professional frontend engineers combine fluid math functions, component-level container queries, flexbox alignments, and viewport grids into an organized hierarchy that eliminates fragile pixel breakpoints.',
        bn: 'রেসপনসিভ অ্যাপ্লিকেশন তৈরির সময় কোনো একক সিএসএস ফিচার দিয়ে সমস্ত লেআউট সমস্যা সমাধান করা যায় না। অভিজ্ঞ ফ্রন্টএন্ড ইঞ্জিনিয়াররা ফ্লুইড ম্যাথ ফাংশন, কম্পোনেন্ট লেভেলের কন্টেইনার কুয়েরি, ফ্লেক্সবক্স এবং গ্রিড লেআউটের সমন্বয়ে এমন এক সুশৃঙ্খল কাঠামো গড়ে তোলেন যা ভঙ্গুর পিক্সেল ব্রেকপয়েন্টের ওপর নির্ভরতা দূর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'WCAG 1.4.10 Reflow',
          def: {
            en: 'An accessibility standard requiring content to reflow vertically at 320 CSS pixels without requiring horizontal scrolling.',
            bn: 'একটি অ্যাক্সেসিবিলিটি স্ট্যান্ডার্ড যার শর্ত হলো ৩২০ সিএসএস পিক্সেল চওড়া স্ক্রিনে তথ্য না হারিয়ে উল্লম্বভাবে সাজতে হবে এবং কোনো অনুভূমিক স্ক্রলবার থাকবে না।'
          }
        },
        {
          term: 'Cross-Device Matrix',
          def: {
            en: 'A systematic QA testing checklist testing layouts across phone (360px), tablet (768px), desktop (1440px), and 200% text zoom.',
            bn: 'একটি সুশৃঙ্খল কিউএ টেস্টিং চেকলিস্ট যা ফোন (৩৬০px), ট্যাবলেট (৭৬৮px), ডেস্কটপ (১৪৪০px) এবং ২০০% টেক্সট জুমে লেআউট যাচাই করে।'
          }
        },
        {
          term: 'Layout Decision Tree',
          def: {
            en: 'An architectural guideline selecting between Flexbox (1D), Grid (2D), and Container Queries based on component requirements.',
            bn: 'একটি স্থাপত্য নির্দেশিকা যা উপাদানের প্রয়োজনীয়তার ওপর ভিত্তি করে ফ্লেক্সবক্স (১ডি), গ্রিড (২ডি) বা কন্টেইনার কুয়েরি নির্বাচন করে।'
          }
        },
        {
          term: 'CLS Budget (< 0.1)',
          def: {
            en: 'Cumulative Layout Shift threshold under Google Core Web Vitals measuring visual stability as assets load.',
            bn: 'গুগল কোর ওয়েব ভাইটালসের ভিজ্যুয়াল স্থিতিশীলতা পরিমাপের সূচক, যার মান ০.১-এর নিচে থাকা আবশ্যক।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'layout-decision-tree',
      text: {
        en: 'The Responsive Layout Decision Tree',
        bn: 'রেসপনসিভ লেআউট ডিসিশন ট্রি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Layout Requirement', bn: 'লেআউটের ধরন ও চাহিদা' },
        { en: 'Recommended CSS Engine', bn: 'প্রস্তাবিত সিএসএস ইঞ্জিন' },
        { en: 'Core Mechanism', bn: 'মূল কার্যপ্রণালী' }
      ],
      rows: [
        [
          { en: 'Fluid typography and spacing scales', bn: 'ফ্লুইড টাইপোগ্রাফি এবং স্পেসিং স্কেল' },
          { en: 'CSS Math: clamp()', bn: 'সিএসএস ম্যাথ: clamp()' },
          { en: 'clamp(min, preferred, max) glides smoothly without media queries', bn: 'কোনো মিডিয়া কুয়েরি ছাড়াই মসৃণভাবে আকার পরিবর্তন করে' }
        ],
        [
          { en: 'One-dimensional distribution (toolbars, rows)', bn: 'এক-মাত্রিক বিন্যাস (টুলবার, ন্যাভিগেশন সারি)' },
          { en: 'CSS Flexbox', bn: 'সিএসএস ফ্লেক্সবক্স' },
          { en: 'flex: 1 1 20rem; with flex-wrap: wrap; and min-width: 0;', bn: 'flex: 1 1 20rem; সাথে wrap এবং min-width: 0;' }
        ],
        [
          { en: 'Two-dimensional page shells and card galleries', bn: 'দ্বি-মাত্রিক পেজ ফ্রেমওয়ার্ক এবং কার্ড গ্যালারি' },
          { en: 'CSS Grid', bn: 'সিএসএস গ্রিড' },
          { en: 'repeat(auto-fit, minmax(18rem, 1fr)) with Subgrid alignment', bn: 'সাবগ্রিড সারিবদ্ধকরণ সহ auto-fit এবং minmax()' }
        ],
        [
          { en: 'Self-adapting modular design system widgets', bn: 'স্বতঃস্ফূর্ত অভিযোজনক্ষম মডুলার ডিজাইন সিস্টেম উইজেট' },
          { en: 'Container Queries', bn: 'কন্টেইনার কুয়েরিজ' },
          { en: 'container-type: inline-size with @container (width >= ...)', bn: 'container-type: inline-size সহ @container' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Production Layout Audit Verification Script',
        bn: 'প্রোডাকশন লেআউট অডিট যাচাইকরণ স্ক্রিপ্ট'
      }
    },
    {
      type: 'code',
      code: `// 1. Audit viewport responsiveness and overflow in JavaScript
function auditResponsiveHygiene() {
  const root = document.documentElement;
  const body = document.body;

  // Check for horizontal overflow causing awkward side scrolling
  const hasHorizontalScroll = root.scrollWidth > root.clientWidth;
  console.log('No horizontal overflow detected:', !hasHorizontalScroll);
  // -> No horizontal overflow detected: true

  // Check viewport meta tag presence
  const metaViewport = document.querySelector('meta[name="viewport"]');
  const hasHonestViewport = metaViewport && metaViewport.content.includes('width=device-width');
  console.log('Honest viewport meta tag active:', Boolean(hasHonestViewport));
  // -> Honest viewport meta tag active: true

  // Check touch target accessibility on mobile
  const smallButtons = Array.from(document.querySelectorAll('button')).filter(btn => {
    const rect = btn.getBoundingClientRect();
    return rect.width > 0 && (rect.width < 44 || rect.height < 44);
  });
  console.log('Sub-44px touch button count:', smallButtons.length);
  // -> Sub-44px touch button count: 0
}

auditResponsiveHygiene();`,
      caption: {
        en: 'Auditing page for zero horizontal overflow and 44px minimum touch targets',
        bn: 'শূন্য অনুভূমিক ওভারফ্লো ও ৪৪px সর্বনিম্ন টাচ বাটন নিশ্চিত করতে পেজ অডিট করা'
      }
    },
    {
      type: 'heading',
      id: 'cross-device-testing-matrix',
      text: {
        en: 'The Cross-Device Testing Matrix',
        bn: 'ক্রস-ডিভাইস টেস্টিং ম্যাট্রিক্স'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Test at 320px Width: The WCAG Reflow benchmark. Verify that headers wrap, tables offer horizontal scroll containers, and zero body horizontal scrollbars appear.',
          bn: '১. ৩২০px প্রস্থে পরীক্ষা: WCAG রিফ্লো মানদণ্ড। নিশ্চিত করুন যে হেডার ভাঙে না, টেবিলে আলাদা স্ক্রল কন্টেইনার আছে এবং মূল বডিতে কোনো অনুভূমিক স্ক্রলবার নেই।'
        },
        {
          en: '2. Test at 200% Text Zoom: Zoom font size alone without zooming the page viewport. Validate that em breakpoints expand layouts into single columns cleanly.',
          bn: '২. ২০০% টেক্সট জুমে পরীক্ষা: পেজ ভিউপোর্ট বড় না করে শুধু ফন্ট সাইজ বড় করুন। যাচাই করুন যে em ব্রেকপয়েন্টগুলো লেখাগুলোকে সুন্দরভাবে একক কলামে নামিয়ে আনে।'
        },
        {
          en: '3. Test Touch Target Bounds: Verify that all links, form toggles, and buttons provide at least 44px by 44px of tappable hit area on coarse pointer devices.',
          bn: '৩. টাচ বাটন পরীক্ষা: নিশ্চিত করুন যে সমস্ত লিংক, ফর্ম সুইচ ও বাটন টাচস্ক্রিনে অন্তত ৪৪px বাই ৪৪px ট্যাপের জায়গা প্রদান করে।'
        },
        {
          en: '4. Test High-Contrast and Dark Mode: Verify forced-colors: active and prefers-color-scheme: dark styles preserve visible borders and semantic contrast ratios.',
          bn: '৪. হাই-কন্ট্রাস্ট ও ডার্ক মোড পরীক্ষা: নিশ্চিত করুন forced-colors এবং ডার্ক মোডে উপাদানগুলোর বর্ডার স্পষ্টভাবে দৃশ্যমান থাকে এবং কন্ট্রাস্ট অনুপাত বজায় থাকে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rd-vd-ex1',
      kind: 'mcq',
      topic: 'wcag reflow standard threshold',
      question: {
        en: 'According to WCAG 2.1 Success Criterion 1.4.10 (Reflow), at what CSS width must web content adapt without requiring two-dimensional scrolling?',
        bn: 'WCAG 2.1 মানদণ্ড ১.৪.১০ (রিফ্লো) অনুসারে ওয়েব কন্টেন্টকে কোন সিএসএস প্রস্থে অনুভূমিক স্ক্রলবার ছাড়া সাজতে হবে?'
      },
      options: [
        {
          en: '320 CSS pixels (equivalent to a 1280px screen zoomed to 400%)',
          bn: '৩২০ সিএসএস পিক্সেল (যা ১২৮০px স্ক্রিনে ৪০০% জুমের সমতুল্য)'
        },
        {
          en: '768 CSS pixels',
          bn: '৭৬৮ সিএসএস পিক্সেল'
        },
        {
          en: '1024 CSS pixels',
          bn: '১০২৪ সিএসএস পিক্সেল'
        },
        {
          en: '1920 CSS pixels',
          bn: '১৯২০ সিএসএস পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The standard reflow threshold corresponds to narrow smartphones and 400% zoom.',
        bn: 'স্ট্যান্ডার্ড রিফ্লো সীমা সবচেয়ে ছোট স্মার্টফোন এবং ৪০০% জুমের সমান।'
      },
      explanation: {
        en: 'WCAG 1.4.10 states that content must reflow without loss of information and without requiring scrolling in two dimensions down to a width of 320 CSS pixels.',
        bn: 'WCAG 1.4.10 বলে যে কোনো তথ্য না হারিয়ে ৩২০ সিএসএস পিক্সেল প্রস্থ পর্যন্ত দুই দিকে (অনুভূমিক ও উলম্ব) স্ক্রল না করেই তথ্য পড়ার সুবিধা থাকতে হবে।'
      }
    },
    {
      id: 'rd-vd-ex2',
      kind: 'mcq',
      topic: 'horizontal overflow root cause',
      question: {
        en: 'What is the most frequent cause of unintended horizontal scrollbars on mobile web pages?',
        bn: 'মোবাইল ওয়েবপেজে অনাকাঙ্ক্ষিত অনুভূমিক স্ক্রলবার তৈরি হওয়ার সবচেয়ে সাধারণ কারণ কোনটি?'
      },
      options: [
        {
          en: 'Hardcoded pixel widths (e.g. width: 450px) or flex items with default min-width: auto holding long words',
          bn: 'ফিক্সড পিক্সেল প্রস্থ (যেমন width: 450px) অথবা ফ্লেক্স উপাদানে ডিফল্ট min-width: auto থাকা অবস্থায় লম্বা শব্দ'
        },
        {
          en: 'Using too many background color gradients in CSS',
          bn: 'সিএসএসে অতিরিক্ত ব্যাকগ্রাউন্ড কালার গ্রেডিয়েন্ট ব্যবহার করা'
        },
        {
          en: 'Serving the website over secure HTTPS connections',
          bn: 'এইচটিটিপিএস সুরক্ষিত সংযোগের মাধ্যমে ওয়েবসাইট পরিবেশন করা'
        },
        {
          en: 'Adding alt attributes to informative images',
          bn: 'প্রয়োজনীয় ছবিতে অল্টারনেটিভ (alt) টেক্সট অ্যাট্রিবিউট যোগ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rigid fixed widths exceed small mobile screen dimensions.',
        bn: 'নির্দিষ্ট পিক্সেল মাপ ছোট মোবাইল স্ক্রিনের ধারণক্ষমতা ছাড়িয়ে যায়।'
      },
      explanation: {
        en: 'Elements with fixed pixel widths larger than mobile screens (like 400px on a 360px viewport) force the document to expand horizontally, creating awkward side scrolling.',
        bn: '৩৬০px চওড়া ফোনের স্ক্রিনে ৪০০px ফিক্সড মাপের কোনো উপাদান থাকলে পুরো পেজটি ডানে প্রসারিত হয়ে বিরক্তিকর সাইড স্ক্রলবার তৈরি করে।'
      }
    },
    {
      id: 'rd-vd-ex3',
      kind: 'mcq',
      topic: 'container query vs viewport query rule',
      question: {
        en: 'When should a frontend architecture choose Container Queries over traditional Viewport Media Queries?',
        bn: 'কোন পরিস্থিতিতে ফ্রন্টএন্ড আর্কিটেকচারে সাধারণ ভিউপোর্ট মিডিয়া কুয়েরির বদলে কন্টেইনার কুয়েরি বেছে নেওয়া উচিত?'
      },
      options: [
        {
          en: 'When building independent, reusable design system components that must adapt to different parent container widths across various pages and sidebars',
          bn: 'স্বাধীন পুনর্ব্যবহারযোগ্য ডিজাইন সিস্টেম কম্পোনেন্ট তৈরির সময় যা সাইডবার বা মেইন কন্টেন্ট যেকোনো আকারের প্যারেন্টে সুন্দরভাবে মানিয়ে নিতে চায়'
        },
        {
          en: 'When styling the top-level <body> background wallpaper',
          bn: 'একদম শীর্ষ লেভেলের <body> ট্যাগের ব্যাকগ্রাউন্ড ওয়ালপেপার স্টাইল করার সময়'
        },
        {
          en: 'When defining print stylesheet page margin sizes',
          bn: 'প্রিন্ট স্টাইলশিটে কাগজের মার্জিন নির্ধারণ করার সময়'
        },
        {
          en: 'Container queries should never be used in production applications',
          bn: 'প্রোডাকশন অ্যাপ্লিকেশনে কন্টেইনার কুয়েরি কখনোই ব্যবহার করা উচিত নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Components that render in both narrow rails and wide grids require local context.',
        bn: 'যে উপাদানগুলো সাইডবার এবং চওড়া গ্রিড উভয় স্থানেই ব্যবহৃত হয় তাদের স্থানীয় পরিমাপ প্রয়োজন।'
      },
      explanation: {
        en: 'Container Queries allow reusable widgets to respond to their local environment rather than global screen width, creating truly modular and decoupled design systems.',
        bn: 'কন্টেইনার কুয়েরি উপাদানগুলোকে গ্লোবাল স্ক্রিনের বদলে তাদের নিজস্ব স্থানীয় জায়গার ওপর ভিত্তি করে রেসপনসিভ করে, যা সত্যিকারের মডুলার সিস্টেম গড়ে তোলে।'
      }
    },
    {
      id: 'rd-vd-ex4',
      kind: 'mcq',
      topic: 'cls budget optimization',
      question: {
        en: 'Which trio of responsive techniques most effectively keeps Cumulative Layout Shift (CLS) under the 0.1 threshold?',
        bn: 'কোন তিনটি রেসপনসিভ কৌশলের সমন্বয় কিউমুলেটিভ লেআউট শিফট (CLS) স্কোর ০.১-এর নিচে রাখতে সবচেয়ে কার্যকর?'
      },
      options: [
        {
          en: 'Setting aspect-ratio on media containers, including width and height on images, and using font-display: optional or swap with matched fallback metrics',
          bn: 'মিডিয়া কন্টেইনারে aspect-ratio দেওয়া, ছবিতে width ও height রাখা এবং ফন্ট লোডিংয়ে সঠিক ফলব্যাক মেট্রিক ব্যবহার'
        },
        {
          en: 'Disabling all CSS animations and deleting all JavaScript files',
          bn: 'সমস্ত সিএসএস অ্যানিমেশন বন্ধ করা এবং সব জাভাস্ক্রিপ্ট ফাইল মুছে ফেলা'
        },
        {
          en: 'Setting all element positions to position: fixed',
          bn: 'সমস্ত উপাদানের পজিশন position: fixed করে রাখা'
        },
        {
          en: 'Hiding all images until the user clicks a reveal button',
          bn: 'ব্যবহারকারী ক্লিক না করা পর্যন্ত সব ছবি লুকিয়ে রাখা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reserve layout space before asynchronous fonts and images arrive.',
        bn: 'অ্যাসিনক্রোনাস ফন্ট এবং ছবি আসার আগেই ডমে সঠিক স্থান বরাদ্দ রাখুন।'
      },
      explanation: {
        en: 'CLS happens when asynchronous assets pop in and push text downward. Reserving image space with aspect-ratio and matching fallback font metrics prevents layout jumps.',
        bn: 'ছবি বা ফন্ট দেরিতে এসে লেখাকে নিচের দিকে ঠেলে দিলে সিএলএস ত্রুটি হয়। আগে থেকে অনুপাত ধরে রাখলে এবং ফন্ট মেট্রিক মেলালে কোনো ঝাঁকুনি হয় না।'
      }
    }
  ],
  quiz: {
    id: 'fitting-verdict-quiz',
    title: {
      en: 'Responsive Architecture & Strategy Quiz',
      bn: 'রেসপনসিভ আর্কিটেকচার ও কৌশল কুইজ'
    },
    questions: [
      {
        id: 'q-fluid-math-vs-breakpoints',
        kind: 'mcq',
        topic: 'fluid math advantages',
        question: {
          en: 'Why is combining fluid math (clamp, min) with strategic breakpoints superior to relying on dozens of breakpoint steps alone?',
          bn: 'ডজন ডজন ব্রেকপয়েন্টের ওপর নির্ভর করার চেয়ে ফ্লুইড ম্যাথ (clamp, min) এবং কৌশলগত ব্রেকপয়েন্টের সমন্বয় কেন বেশি কার্যকর?'
        },
        options: [
          {
            en: 'Fluid math glides continuously across infinite viewport widths, allowing breakpoints to be reserved only for genuine structural layout shifts',
            bn: 'ফ্লুইড ম্যাথ যেকোনো স্ক্রিন আকারে মসৃণভাবে পরিবর্তিত হয়, ফলে ব্রেকপয়েন্টগুলো শুধুমাত্র বড় কাঠামোগত পরিবর্তনের জন্য সংরক্ষিত থাকে'
          },
          {
            en: 'Fluid math eliminates the need for HTML markup entirely',
            bn: 'ফ্লুইড ম্যাথ ব্যবহার করলে কোনো এইচটিএমএল মার্কআপ লেখার প্রয়োজন হয় না'
          },
          {
            en: 'Breakpoints decrease server database query response times',
            bn: 'ব্রেকপয়েন্ট সার্ভারের ডাটাবেজ কুয়েরি রেসপন্স টাইম কমিয়ে দেয়'
          },
          {
            en: 'Fluid math requires custom C++ browser compiler extensions',
            bn: 'ফ্লুইড ম্যাথ চালানোর জন্য কাস্টম C++ ব্রাউজার কম্পাইলার এক্সটেনশন লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fluid math handles sizing continuity; breakpoints handle major layout structural reorganizations.',
          bn: 'ফ্লুইড ম্যাথ আকারের ধারাবাহিকতা রক্ষা করে; ব্রেকপয়েন্ট কাঠামোগত রূপান্তর ঘটায়।'
        },
        explanation: {
          en: 'Using clamp() for typography and spacing eliminates the need for small micro-breakpoints. Breakpoints are then reserved for structural changes (e.g. 1 column to 2 columns).',
          bn: 'clamp() দিয়ে ফন্ট ও ফাঁকা জায়গা নিয়ন্ত্রণ করলে ছোট ছোট ব্রেকপয়েন্ট লাগে না। তখন ব্রেকপয়েন্ট কেবল বড় পরিবর্তনের (যেমন ১ কলাম থেকে ২ কলাম) জন্য ব্যবহার করলেই চলে।'
        }
      },
      {
        id: 'q-forced-colors-accessibility',
        kind: 'mcq',
        topic: 'forced-colors high contrast mode',
        question: {
          en: 'What occurs when a user enables Windows High Contrast mode, and how should responsive CSS adapt?',
          bn: 'ব্যবহারকারী যখন উইন্ডোজ হাই-কন্ট্রাস্ট মোড চালু করেন তখন কী ঘটে, এবং রেসপনসিভ সিএসএসের কীভাবে মানিয়ে নেওয়া উচিত?'
        },
        options: [
          {
            en: 'The operating system forces a restricted color palette; stylesheets should use forced-colors: active to ensure visible borders (e.g. 1px solid transparent)',
            bn: 'সিস্টেম একটি সীমিত কালার প্যালেট প্রয়োগ করে; উপাদানগুলোর সীমানা স্পষ্ট রাখতে forced-colors: active দিয়ে স্বচ্ছ বর্ডার রাখা উচিত'
          },
          {
            en: 'The browser converts all vector icons into animated 3D models',
            bn: 'ব্রাউজার সমস্ত ভেক্টর আইকনকে ৩ডি মডেলে রূপান্তর করে ফেলে'
          },
          {
            en: 'The operating system closes all active network sockets immediately',
            bn: 'অপারেটিং সিস্টেম সাথে সাথে সমস্ত নেটওয়ার্ক সংযোগ বিচ্ছিন্ন করে দেয়'
          },
          {
            en: 'High contrast mode is unsupported in modern CSS specifications',
            bn: 'আধুনিক সিএসএস স্পেসিফিকেশনে হাই কন্ট্রাস্ট মোড সম্পূর্ণ অসমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Transparent borders become visible high-contrast outlines in high contrast mode.',
          bn: 'হাই-কন্ট্রাস্ট মোডে স্বচ্ছ বর্ডারগুলো স্পষ্ট সীমানা প্রাচীর হিসেবে ফুটে ওঠে।'
        },
        explanation: {
          en: 'In forced-colors mode, CSS box-shadow and background colors are overridden. Giving buttons 1px solid transparent ensures the OS can render a visible high-contrast border outline.',
          bn: 'হাই-কন্ট্রাস্ট মোডে ব্যাকগ্রাউন্ড বা শ্যাডো মুছে যায়। বাটনে ১px ট্রান্সপারেন্ট বর্ডার থাকলে সিস্টেম সেখানে স্বয়ংক্রিয়ভাবে দৃশ্যমান বর্ডার এঁকে দেয়।'
        }
      },
      {
        id: 'q-viewport-units-overflow-bug',
        kind: 'mcq',
        topic: '100vw horizontal scrollbar bug',
        question: {
          en: 'Why does setting width: 100vw; on the <body> or a container often produce an accidental horizontal scrollbar on desktop?',
          bn: 'ডেস্কটপে <body> বা কোনো কন্টেইনারে width: 100vw; দিলে কেন প্রায়ই অনাকাঙ্ক্ষিত অনুভূমিক স্ক্রলবার দেখা দেয়?'
        },
        options: [
          {
            en: '100vw includes the width of the vertical desktop scrollbar, making the element wider than the actual available layout canvas',
            bn: '100vw উলম্ব স্ক্রলবারের প্রস্থকেও অন্তর্ভুক্ত করে ফেলে, ফলে উপাদানটি পেজের আসল চওড়ার চেয়ে বেশি চওড়া হয়ে যায়'
          },
          {
            en: 'Desktop browsers do not understand the vw unit',
            bn: 'ডেস্কটপ ব্রাউজার vw ইউনিট চিনতে পারে না'
          },
          {
            en: '100vw forces fonts to render with double letter spacing',
            bn: '100vw ফন্টগুলোকে দ্বিগুণ ফাঁকা জায়গায় প্রদর্শন করতে বাধ্য করে'
          },
          {
            en: 'Desktop monitors only support percentages and pixels',
            bn: 'ডেস্কটপ মনিটর শুধুমাত্র শতকরা এবং পিক্সেল সাপোর্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The classic desktop vertical scrollbar takes up 15px to 17px of window width.',
          bn: 'ডেস্কটপের সাধারণ উলম্ব স্ক্রলবার প্রায় ১৫ থেকে ১৭ পিক্সেল জায়গা দখল করে।'
        },
        explanation: {
          en: '100vw measures the window width including classic desktop scrollbars. Since the document canvas excludes the scrollbar, width: 100vw causes a 15px overflow. Use width: 100% instead.',
          bn: '100vw স্ক্রলবারের ভেতরের জায়গাসহ পুরো উইন্ডো মেপে ফেলে। কিন্তু পেজের আসল জায়গা স্ক্রলবারের কারণে কিছুটা কম থাকে, ফলে ১৫px অতিরিক্ত উপচে পড়ে। এর বদলে width: 100% ব্যবহার করা নিরাপদ।'
        }
      },
      {
        id: 'q-wcag-text-spacing',
        kind: 'mcq',
        topic: 'wcag 1.4.12 text spacing',
        question: {
          en: 'What does WCAG 2.1 Success Criterion 1.4.12 (Text Spacing) mandate for responsive components?',
          bn: 'WCAG 2.1 মানদণ্ড ১.৪.১২ (টেক্সট স্পেসিং) রেসপনসিভ উপাদানের ক্ষেত্রে কী নির্দেশ দেয়?'
        },
        options: [
          {
            en: 'No loss of content or functionality may occur when users override line-height to 1.5, letter-spacing to 0.12em, or word-spacing to 0.16em',
            bn: 'ব্যবহারকারী লাইন হাইট ১.৫, লেটার স্পেসিং ০.১২em বা ওয়ার্ড স্পেসিং ০.১৬em পর্যন্ত বাড়ালেও কোনো লেখা বা বাটন ভেঙে যাওয়া চলবে না'
          },
          {
            en: 'All text on the page must be displayed in pure uppercase letters',
            bn: 'পেজের সমস্ত লেখা শুধুমাত্র বড় হাতের অক্ষরে প্রদর্শন করতে হবে'
          },
          {
            en: 'Headings must always be exactly three times larger than body copy',
            bn: 'হেডিং সর্বদা সাধারণ লেখার চেয়ে ঠিক তিন গুণ বড় হতে হবে'
          },
          {
            en: 'Text spacing rules only apply to printed paper books',
            bn: 'টেক্সট স্পেসিং নিয়ম শুধুমাত্র ছাপানো বইয়ের ক্ষেত্রে প্রযোজ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Components must not cut off text when users expand line spacing and word gaps.',
          bn: 'ব্যবহারকারী লাইনের ফাঁক বাড়ালে কোনো লেখা কেটে যাওয়া বা বাটন ভেঙে যাওয়া যাবে না।'
        },
        explanation: {
          en: 'WCAG 1.4.12 ensures readers with dyslexia can expand spacing between lines, letters, and words without text overflowing fixed-height boxes or breaking buttons.',
          bn: 'ডিসলেক্সিয়ায় আক্রান্ত ব্যক্তিরা যেন আরাম করে পড়ার জন্য লাইনের ফাঁক বাড়াতে পারেন, সেজন্য ফিক্সড হাইটের বক্সে লেখা আটকে না রেখে সম্প্রসারণযোগ্য রাখা বাধ্যতামূলক।'
        }
      }
    ]
  }
};
