import type { Lesson } from '../../../lib/types';

export const TheFluidClothLesson: Lesson = {
  slug: 'the-fluid-cloth',
  tech: 'responsive-design',
  title: {
    en: 'Fluid Layouts & Math — clamp(), min(), max(), and Relative Units',
    bn: 'ফ্লুইড লেআউট ও ম্যাথ — clamp(), min(), max() এবং রিলেটিভ ইউনিট'
  },
  summary: {
    en: 'Fixed pixel values create brittle interfaces that break across different screen widths. In this lesson, we explore fluid layout strategies using modern CSS mathematical functions. We master fluid typography with clamp(), safe container bounds with min() and max(), percentage height resolution rules, and the aspect-ratio property to prevent cumulative layout shifts.',
    bn: 'ফিক্সড বা নির্দিষ্ট পিক্সেল মান ব্যবহারের ফলে লেআউট বিভিন্ন স্ক্রিন সাইজে ভেঙে যায়। এই পাঠে আমরা আধুনিক সিএসএস গাণিতিক ফাংশন ব্যবহার করে ফ্লুইড লেআউট তৈরির কৌশল শিখব। আমরা clamp() দিয়ে ফ্লুইড টাইপোগ্রাফি, min() ও max() দিয়ে নিরাপদ কন্টেইনার বাউন্ডারি, শতাংশ উচ্চতা নির্ধারণের নিয়ম এবং লেআউট শিফট রোধে aspect-ratio-এর ব্যবহার আয়ত্ত করব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'fluid-overview',
      text: {
        en: 'The Fluid Philosophy: Adapting Without Rigid Stops',
        bn: 'ফ্লুইড দর্শন: নির্দিষ্ট বাধা ছাড়া স্বতঃস্ফূর্ত রূপান্তর'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design websites, users view your work on screens ranging from 320px to 3840px. Instead of writing dozens of rigid media queries for each device, modern CSS allows layouts and typography to scale smoothly and continuously using mathematical functions like clamp(), min(), and max().',
        bn: 'ওয়েবসাইট ডিজাইনের সময় ব্যবহারকারীরা ৩২০px থেকে ৩৮৪০px পর্যন্ত যেকোনো স্ক্রিনে আপনার সাইট দেখতে পারেন। প্রতিটি ডিভাইসের জন্য ডজন ডজন মিডিয়া কুয়েরি না লিখে, আধুনিক সিএসএসের clamp(), min() এবং max()-এর মতো গাণিতিক ফাংশন ব্যবহার করে লেআউট ও টাইপোগ্রাফিকে মসৃণভাবে প্রসারিত করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'clamp(min, val, max)',
          def: {
            en: 'A CSS math function that clamps an intermediate value between an allowed lower floor and upper ceiling.',
            bn: 'একটি সিএসএস ম্যাথ ফাংশন যা একটি পরিবর্তনশীল মানকে সর্বনিম্ন এবং সর্বোচ্চ সীমার মাঝে সীমাবদ্ধ রাখে।'
          }
        },
        {
          term: 'min(val1, val2)',
          def: {
            en: 'A function that selects the smallest value among comma-separated expressions, effectively acting as a maximum cap.',
            bn: 'এমন একটি ফাংশন যা প্রদত্ত মানগুলোর মধ্যে সবচেয়ে ছোট মানটি বেছে নিয়ে সর্বোচ্চ সীমা নির্ধারণ করে।'
          }
        },
        {
          term: 'max(val1, val2)',
          def: {
            en: 'A function that selects the largest value among arguments, effectively acting as a minimum floor.',
            bn: 'এমন একটি ফাংশন যা প্রদত্ত মানগুলোর মধ্যে সবচেয়ে বড় মানটি বেছে নিয়ে সর্বনিম্ন সীমা নিশ্চিত করে।'
          }
        },
        {
          term: 'aspect-ratio',
          def: {
            en: 'A CSS property defining a preferred width-to-height ratio, reserving layout space before media loads.',
            bn: 'একটি সিএসএস প্রপার্টি যা প্রস্থ ও উচ্চতার নির্দিষ্ট অনুপাত ধরে রেখে মিডিয়া লোড হওয়ার আগেই জায়গা বরাদ্দ রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'fluid-containers-and-gutters',
      text: {
        en: 'Fluid Containers and Centering Patterns',
        bn: 'ফ্লুইড কন্টেইনার এবং সেন্টারিং প্যাটার্ন'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. The Universal Wrapper: Write width: min(100% - 2rem, 72rem); margin-inline: auto; to create a container that maintains 1rem side breathing gutters on mobile while capping cleanly at 72rem on desktop.',
          bn: '১. সার্বজনীন কন্টেইনার: width: min(100% - 2rem, 72rem); margin-inline: auto; লিখলে মোবাইলে ১rem সাইড প্যাডিং থাকে এবং ডেস্কটপে ৭২rem-এ সুন্দরভাবে সেন্টারে আটকে থাকে।'
        },
        {
          en: '2. Fluid Typography Formula: Use font-size: clamp(1.125rem, 0.95rem + 0.8vw, 1.75rem); so heading sizes glide smoothly between 18px on phones and 28px on large monitors without media queries.',
          bn: '২. ফ্লুইড টাইপোগ্রাফি ফর্মুলা: font-size: clamp(1.125rem, 0.95rem + 0.8vw, 1.75rem); ব্যবহার করলে হেডিং ফন্ট কোনো মিডিয়া কুয়েরি ছাড়াই মোবাইলে ১৮px থেকে ল্যাপটপে ২৮px পর্যন্ত মসৃণভাবে পরিবর্তিত হয়।'
        },
        {
          en: '3. Percentage Height Resolution: CSS height: 100% only works if the parent element has an explicit, computed height. If the parent height is auto, the child percentage collapses to auto.',
          bn: '৩. শতাংশ উচ্চতার নিয়ম: প্যারেন্ট এলিমেন্টের নির্দিষ্ট হাইট থাকলে তবেই height: 100% কার্যকর হয়। প্যারেন্টের হাইট auto থাকলে চাইল্ড উপাদানের শতকরা উচ্চতা অকার্যকর হয়ে পড়ে।'
        },
        {
          en: '4. Aspect-Ratio Space Reservation: Set aspect-ratio: 16 / 9; on video and card containers to completely eliminate Cumulative Layout Shift (CLS) as assets load over slow connections.',
          bn: '৪. অনুপাত দিয়ে স্থান সংরক্ষণ: ভিডিও ও কার্ডে aspect-ratio: 16 / 9; নির্ধারণ করলে ধীরগতির ইন্টারনেটে ছবি বা ভিডিও আসার সময় কোনো লেআউট শিফট ঘটে না।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Fluid Typography and Layout Demonstration',
        bn: 'ফ্লুইড টাইপোগ্রাফি ও লেআউটের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `// 1. Calculate fluid font size in JavaScript to verify clamp behavior
function calculateClamp(minRem, preferredVw, maxRem, viewportWidthPx) {
  const rootFontSize = 16;
  const minPx = minRem * rootFontSize;
  const maxPx = maxRem * rootFontSize;
  const preferredPx = (preferredVw / 100) * viewportWidthPx;

  // clamp(min, val, max) math logic
  const clampedPx = Math.min(Math.max(minPx, preferredPx), maxPx);
  return clampedPx;
}

// 2. Test clamp at 360px mobile screen (should hit floor)
const mobileFont = calculateClamp(1.25, 4, 2.5, 360);
console.log('Mobile font clamped to min floor:', mobileFont === 20);
// -> Mobile font clamped to min floor: true

// 3. Test clamp at 1440px desktop screen (should hit ceiling)
const desktopFont = calculateClamp(1.25, 4, 2.5, 1440);
console.log('Desktop font clamped to max ceiling:', desktopFont === 40);
// -> Desktop font clamped to max ceiling: true`,
      caption: {
        en: 'Verifying clamp math with 20px floor on 360px mobile and 40px ceiling on 1440px desktop',
        bn: '৩৬০px মোবাইলে ২০px সর্বনিম্ন ও ১৪৪০px ডেস্কটপে ৪০px সর্বোচ্চ সীমায় clamp যাচাই করা'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'CSS Math Functions Compared',
        bn: 'সিএসএস ম্যাথ ফাংশনসমূহের তুলনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Function', bn: 'ফাংশন' },
        { en: 'Role', bn: 'ভূমিকা' },
        { en: 'Common Responsive Example', bn: 'সাধারণ রেসপনসিভ উদাহরণ' }
      ],
      rows: [
        [
          { en: 'clamp(min, val, max)', bn: 'clamp(min, val, max)' },
          { en: 'Pins a fluid value between a strict minimum and maximum limit', bn: 'একটি পরিবর্তনশীল মানকে সর্বনিম্ন ও সর্বোচ্চ সীমার মাঝে রাখে' },
          { en: 'font-size: clamp(1rem, 2.5vw, 2rem);', bn: 'font-size: clamp(1rem, 2.5vw, 2rem);' }
        ],
        [
          { en: 'min(val1, val2)', bn: 'min(val1, val2)' },
          { en: 'Picks the smaller value, capping elements at a maximum size', bn: 'ছোট মানটি বেছে নিয়ে উপাদানের সর্বোচ্চ আকার বেঁধে দেয়' },
          { en: 'width: min(100%, 800px);', bn: 'width: min(100%, 800px);' }
        ],
        [
          { en: 'max(val1, val2)', bn: 'max(val1, val2)' },
          { en: 'Picks the larger value, establishing a guaranteed floor size', bn: 'বড় মানটি বেছে নিয়ে উপাদানের সর্বনিম্ন আকার নিশ্চিত করে' },
          { en: 'padding-left: max(1rem, env(safe-area-inset-left));', bn: 'padding-left: max(1rem, env(safe-area-inset-left));' }
        ],
        [
          { en: 'calc(expression)', bn: 'calc(expression)' },
          { en: 'Performs arithmetic mixing different CSS units', bn: 'ভিন্ন ভিন্ন সিএসএস ইউনিট মিশিয়ে গাণিতিক সমাধান করে' },
          { en: 'width: calc(100% - 40px);', bn: 'width: calc(100% - 40px);' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'rd-fl-ex1',
      kind: 'mcq',
      topic: 'clamp parameter order',
      question: {
        en: 'What is the correct syntax order of parameters in the CSS clamp() function?',
        bn: 'সিএসএস clamp() ফাংশনে প্যারামিটারগুলোর সঠিক ক্রম কোনটি?'
      },
      options: [
        {
          en: 'clamp(minimum, preferred, maximum)',
          bn: 'clamp(minimum, preferred, maximum)'
        },
        {
          en: 'clamp(preferred, minimum, maximum)',
          bn: 'clamp(preferred, minimum, maximum)'
        },
        {
          en: 'clamp(maximum, minimum, preferred)',
          bn: 'clamp(maximum, minimum, preferred)'
        },
        {
          en: 'clamp(ratio, fallback, step)',
          bn: 'clamp(ratio, fallback, step)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The preferred value is clamped between the lower floor and the upper ceiling.',
        bn: 'পছন্দনীয় মানটি সর্বনিম্ন ও সর্বোচ্চ সীমার মাঝে থাকে।'
      },
      explanation: {
        en: 'clamp() takes three arguments: the minimum allowed value (floor), the preferred fluid value, and the maximum allowed value (ceiling).',
        bn: 'clamp() তিনটি আর্গুমেন্ট গ্রহণ করে: সর্বনিম্ন মান (ফ্লোর), পরিবর্তনশীল মান (প্রেফার্ড), এবং সর্বোচ্চ মান (সিলিং)।'
      }
    },
    {
      id: 'rd-fl-ex2',
      kind: 'mcq',
      topic: 'min function capping effect',
      question: {
        en: 'Why is width: min(100%, 1200px); effective for creating responsive wrappers?',
        bn: 'রেসপনসিভ কন্টেইনার তৈরিতে width: min(100%, 1200px); কেন অত্যন্ত কার্যকর?'
      },
      options: [
        {
          en: 'On screens narrower than 1200px it fills 100% of the screen, and on screens wider than 1200px it stops expanding at 1200px',
          bn: '১২০০px-এর চেয়ে ছোট স্ক্রিনে এটি ১০০% জায়গা নেয়, এবং ১২০০px-এর চেয়ে বড় স্ক্রিনে ১২০০px-এ আটকে থাকে'
        },
        {
          en: 'It forces the browser to compress CSS files over the network',
          bn: 'এটি ব্রাউজারকে নেটওয়ার্কের মাধ্যমে সিএসএস ফাইল কম্প্রেস করতে বাধ্য করে'
        },
        {
          en: 'It hides all child images when viewport width drops below 500px',
          bn: 'স্ক্রিন ৫০০px-এর নিচে নামলে এটি ভেতরের সমস্ত ছবি লুকিয়ে ফেলে'
        },
        {
          en: 'It converts the layout into a canvas drawing context',
          bn: 'এটি লেআউটটিকে ক্যানভাস ড্রয়িং কনটেক্সটে রূপান্তরিত করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'min() selects whichever value is currently smaller.',
        bn: 'min() ফাংশন যে মানটি বর্তমানে ছোট সেটি বেছে নেয়।'
      },
      explanation: {
        en: 'When screen width is 500px, 100% (500px) is smaller than 1200px, so 500px is chosen. When screen width is 1920px, 1200px is smaller than 1920px, capping width at 1200px.',
        bn: 'স্ক্রিন ৫০০px হলে ১০০% মানটি ১২০০px থেকে ছোট হওয়ায় ৫০০px কার্যকর হয়। আর ১৯২০px স্ক্রিনে ১২০০px ছোট হওয়ায় সর্বোচ্চ প্রস্থ ১২০০px-এ সীমাবদ্ধ থাকে।'
      }
    },
    {
      id: 'rd-fl-ex3',
      kind: 'mcq',
      topic: 'aspect-ratio benefit',
      question: {
        en: 'How does setting aspect-ratio: 16 / 9; on an image container improve web performance?',
        bn: 'একটি ইমেজ কন্টেইনারে aspect-ratio: 16 / 9; দিলে ওয়েব পারফরম্যান্সে কী উন্নতি হয়?'
      },
      options: [
        {
          en: 'It reserves the exact geometric space before the image finishes downloading, preventing Cumulative Layout Shift (CLS)',
          bn: 'ছবি ডাউনলোড শেষ হওয়ার আগেই এটি সঠিক স্থান বরাদ্দ রাখে, ফলে কিউমুলেটিভ লেআউট শিফট (CLS) প্রতিরোধ হয়'
        },
        {
          en: 'It increases the download speed of the image asset by 200%',
          bn: 'এটি ছবির ডাউনলোড গতি ২০০% বাড়িয়ে দেয়'
        },
        {
          en: 'It applies a grayscale filter to black and white photography',
          bn: 'এটি সাদাকালো ছবিতে গ্রেস্কেল ফিল্টার প্রয়োগ করে'
        },
        {
          en: 'It converts JPG images into MP4 video formats automatically',
          bn: 'এটি জেপিজি ছবিকে স্বয়ংক্রিয়ভাবে এমপি৪ ভিডিওতে রূপান্তরিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reserving height prevents elements below the image from jumping abruptly.',
        bn: 'উচ্চতা আগে থেকে ধরে রাখলে নিচের উপাদানগুলো হঠাৎ করে লাফিয়ে ওঠে না।'
      },
      explanation: {
        en: 'Before images load, the browser cannot determine height without aspect-ratio or intrinsic dimensions. Reserving space with aspect-ratio eliminates page jank and layout shifts.',
        bn: 'ছবি লোড হওয়ার আগে ব্রাউজার উচ্চতা বুঝতে পারে না। aspect-ratio দিয়ে স্থান ধরে রাখলে ছবি আসার সাথে সাথে পেজ কেঁপে ওঠে না।'
      }
    },
    {
      id: 'rd-fl-ex4',
      kind: 'mcq',
      topic: 'percentage height collapse',
      question: {
        en: 'Under what condition does height: 100% on a child element fail to expand?',
        bn: 'কোন পরিস্থিতিতে চাইল্ড এলিমেন্টে height: 100% দেওয়া সত্ত্বেও তা প্রসারিত হতে ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'When the parent element computed height is auto (indeterminate), causing the percentage to collapse to auto',
          bn: 'যখন প্যারেন্ট এলিমেন্টের উচ্চতা auto বা অনির্ধারিত থাকে, যার ফলে শতকরা উচ্চতা কার্যকর হতে পারে না'
        },
        {
          en: 'When running inside Mozilla Firefox web browsers',
          bn: 'যখন ফায়ারফক্স ওয়েব ব্রাউজারে সাইট চালানো হয়'
        },
        {
          en: 'When the child element contains more than 10 words of text',
          bn: 'যখন চাইল্ড উপাদানে ১০টির বেশি শব্দ থাকে'
        },
        {
          en: 'When the webpage is served over HTTPS encryption',
          bn: 'যখন ওয়েবপেজটি এইচটিটিপিএস সুরক্ষিত সংযোগে লোড হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Percentages require a definite parent measurement to calculate against.',
        bn: 'শতকরা হিসাবের জন্য প্যারেন্টের একটি নির্দিষ্ট মাপ থাকা আবশ্যক।'
      },
      explanation: {
        en: 'CSS requires a definite parent height for height: 100% to resolve. If the parent height is auto, the browser has no baseline number to multiply by 100%, causing the child to fall back to auto.',
        bn: 'সিএসএসে প্যারেন্টের নির্দিষ্ট উচ্চতা ছাড়া height: 100% হিসাব করা অসম্ভব। প্যারেন্টের উচ্চতা auto থাকলে ব্রাউজার কোনো ভিত্তি পায় না এবং চাইল্ডের উচ্চতাও auto হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'fluid-math-quiz',
    title: {
      en: 'Fluid Layouts & Math Functions Quiz',
      bn: 'ফ্লুইড লেআউট এবং ম্যাথ ফাংশন কুইজ'
    },
    questions: [
      {
        id: 'q-clamp-accessibility-limit',
        kind: 'mcq',
        topic: 'clamp accessibility with rem',
        question: {
          en: 'Why should the preferred middle value of clamp() include a rem component rather than raw vw units alone?',
          bn: 'clamp()-এর মাঝের পরিবর্তনশীল মানে শুধু vw না রেখে rem এককও কেন মেশানো উচিত?'
        },
        options: [
          {
            en: 'Using raw vw alone ignores user browser zoom preferences, while mixing with rem respects user text size settings',
            bn: 'শুধু vw ব্যবহার করলে ব্রাউজারের টেক্সট জুম কাজ করে না, আর rem মেশালে ব্যবহারকারীর ফন্ট সাইজ সেটিংস অক্ষুণ্ণ থাকে'
          },
          {
            en: 'Raw vw causes an uncaught SyntaxError in modern CSS engines',
            bn: 'শুধু vw দিলে আধুনিক সিএসএস ইঞ্জিনে একটি মারাত্মক SyntaxError ঘটে'
          },
          {
            en: 'rem units make websites load 10 times faster on 4G networks',
            bn: 'rem ইউনিট ব্যবহার করলে ৪জি নেটওয়ার্কে ওয়েবসাইট ১০ গুণ দ্রুত লোড হয়'
          },
          {
            en: 'Screen readers cannot read words formatted with vw units',
            bn: 'স্ক্রিন রিডার vw ইউনিট দিয়ে ফরম্যাট করা কোনো শব্দ পড়তে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preserve user custom font size choices for accessibility compliance.',
          bn: 'ব্যবহারকারীর কাস্টম ফন্ট সাইজ অগ্রাধিকার ধরে রাখতে rem আবশ্যক।'
        },
        explanation: {
          en: 'If font-size: clamp(1rem, 5vw, 2rem) uses only vw in the middle, changing the browser default font size does not scale the text in the fluid range. Formulae like clamp(1rem, 0.8rem + 1vw, 2rem) ensure zoom accessibility.',
          bn: 'মাঝে শুধু vw রাখলে ব্রাউজারের ফন্ট সাইজ বড় করলেও লেখা বড় হয় না। 0.8rem + 1vw-এর মতো মিশ্রণ রাখলে দৃষ্টিহীন বা কম দৃষ্টিসম্পন্ন ব্যক্তিদের জুম সুবিধা সঠিকভাবে কাজ করে।'
        }
      },
      {
        id: 'q-safe-area-insets',
        kind: 'mcq',
        topic: 'env safe area with max',
        question: {
          en: 'In padding-left: max(1rem, env(safe-area-inset-left));, what purpose does max() serve on mobile devices?',
          bn: 'padding-left: max(1rem, env(safe-area-inset-left)); কোডে max() ফাংশন মোবাইলে কী কাজ করে?'
        },
        options: [
          {
            en: 'It ensures at least 1rem padding on standard screens while expanding further to protect content from phone notches or home indicator bars',
            bn: 'সাধারণ স্ক্রিনে অন্তত ১rem প্যাডিং বজায় রাখে এবং নচযুক্ত ফোনে নচের আকার অনুযায়ী প্যাডিং বাড়িয়ে লেখা রক্ষা করে'
          },
          {
            en: 'It forces the smartphone battery to charge faster during browsing',
            bn: 'ব্রাউজিং চলাকালীন এটি ফোনের ব্যাটারি দ্রুত চার্জ হতে বাধ্য করে'
          },
          {
            en: 'It converts the website into a downloadable Progressive Web App',
            bn: 'এটি ওয়েবসাইটটিকে একটি প্রোগ্রেসিভ ওয়েব অ্যাপে রূপান্তরিত করে'
          },
          {
            en: 'It deletes margins around all paragraph tags',
            bn: 'এটি সমস্ত প্যারাগ্রাফ ট্যাগের চারপাশের মার্জিন মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'max() protects content from being obscured by hardware notches.',
          bn: 'max() মোবাইলের ক্যামেরা নচ দিয়ে লেখা ঢেকে যাওয়া থেকে রক্ষা করে।'
        },
        explanation: {
          en: 'On rectangular screens, safe-area-inset-left is 0px, so max() selects 1rem. On devices with camera notches in landscape orientation, env() is larger than 1rem, so max() expands padding safely.',
          bn: 'সাধারণ স্ক্রিনে সেফ-এরিয়া ০px হওয়ায় max() ১rem বেছে নেয়। আর নচযুক্ত ফোনে ল্যান্ডস্কেপ মোডে নচের আকার ১rem-এর বেশি হওয়ায় max() প্যাডিং বাড়িয়ে কন্টেন্ট অক্ষত রাখে।'
        }
      },
      {
        id: 'q-fluid-vw-limits',
        kind: 'mcq',
        topic: 'vw unit viewport scaling',
        question: {
          en: 'What is the risk of using raw width: 50vw; without a min() or max() boundary?',
          bn: 'কোনো min() বা max() সীমা ছাড়া সরাসরি width: 50vw; ব্যবহারের ঝুঁকি কী?'
        },
        options: [
          {
            en: 'On ultra-wide monitors (e.g. 3440px) the element becomes excessively large (1720px), while on small phones (320px) it shrinks to a tiny 160px',
            bn: 'আল্ট্রা-ওয়াইড মনিটরে এটি অতিরিক্ত বড় (১৭২০px) হয়ে যায় এবং ছোট ফোনে অতি ক্ষুদ্র (১৬০px) হয়ে পড়ে'
          },
          {
            en: 'The element automatically triggers an infinite CSS animation loop',
            bn: 'উপাদানটিতে স্বয়ংক্রিয়ভাবে একটি অনন্ত সিএসএস অ্যানিমেশন লুপ শুরু হয়ে যায়'
          },
          {
            en: 'Browsers reject vw units unless JavaScript is completely disabled',
            bn: 'জাভাস্ক্রিপ্ট বন্ধ না থাকলে ব্রাউজার vw ইউনিট গ্রহণ করে না'
          },
          {
            en: 'The element color flips to black and white on mobile networks',
            bn: 'মোবাইল নেটওয়ার্কে উপাদানের রং সাদাকালোতে পরিবর্তিত হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pure viewport units lack upper ceilings on desktop and lower floors on mobile.',
          bn: 'শুধুমাত্র ভিউপোর্ট ইউনিট ব্যবহার করলে ডেস্কে অতিরিক্ত বড় এবং মোবাইলে অতিরিক্ত ছোট হয়।'
        },
        explanation: {
          en: 'Raw viewport units scale without limits. Unbounded vw values cause extreme distortion on extreme screen sizes unless constrained by min(), max(), or clamp().',
          bn: 'কোনো সীমা ছাড়া vw ব্যবহার করলে আল্ট্রা-ওয়াইড স্ক্রিনে কন্টেন্ট অবাস্তব রকমের চওড়া হয় এবং ফোনে খুব সরু হয়ে যায়।'
        }
      },
      {
        id: 'q-calc-spacing-rules',
        kind: 'mcq',
        topic: 'calc operator spacing requirement',
        question: {
          en: 'Why is width: calc(100% - 20px); valid while width: calc(100%-20px); is invalid in CSS?',
          bn: 'সিএসএসে width: calc(100% - 20px); বৈধ কিন্তু width: calc(100%-20px); কেন অবৈধ?'
        },
        options: [
          {
            en: 'The + and - operators in calc() must be surrounded by whitespace to distinguish minus from negative numbers like -20px',
            bn: 'calc()-এ + এবং - চিহ্নের দুইপাশে স্পেস থাকা বাধ্যতামূলক যাতে মাইনাস চিহ্নকে নেগেটিভ সংখ্যার সাথে গুলিয়ে না ফেলা হয়'
          },
          {
            en: 'CSS parsers cannot read percentage symbols without whitespace',
            bn: 'স্পেস ছাড়া সিএসএস পার্সার শতকরা (%) চিহ্ন পড়তে পারে না'
          },
          {
            en: 'The minus operator is only permitted inside CSS grid properties',
            bn: 'বিয়োগ চিহ্ন শুধুমাত্র সিএসএস গ্রিড প্রপার্টির ভেতরে ব্যবহার করা যায়'
          },
          {
            en: 'There is no difference; modern browsers accept both syntaxes identically',
            bn: 'কোনো পার্থক্য নেই; আধুনিক ব্রাউজার উভয় সিনট্যাক্স সমানভাবে গ্রহণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CSS specifications require spaces around subtraction and addition operators.',
          bn: 'সিএসএস নিয়ম অনুযায়ী যোগ ও বিয়োগের দুইপাশে ফাঁকা জায়গা থাকা আবশ্যক।'
        },
        explanation: {
          en: 'The CSS specification strictly requires whitespace around + and - inside calc(). Without spaces, -20px is parsed as a negative length value rather than a subtraction operator, causing a syntax rejection.',
          bn: 'calc()-এর ভেতরে বিয়োগ বা যোগ চিহ্নের দুইপাশে স্পেস না দিলে ব্রাউজার একে বিয়োগের চিহ্ন না ভেবে নেগেটিভ ভ্যালু মনে করে বাতিল করে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'breakpoints-and-the-fitting-schedule',
    title: {
      en: 'Media Queries & Breakpoints — Mobile-First Architecture and Range Syntax',
      bn: 'মিডিয়া কুয়েরি ও ব্রেকপয়েন্ট — মোবাইল-ফার্স্ট আর্কিটেকচার ও রেঞ্জ সিনট্যাক্স'
    }
  }
};
