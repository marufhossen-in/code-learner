import type { Lesson } from '../../../lib/types';

export const BreakpointsAndTheFittingScheduleLesson: Lesson = {
  slug: 'breakpoints-and-the-fitting-schedule',
  tech: 'responsive-design',
  title: {
    en: 'Media Queries & Breakpoints — Mobile-First Architecture and Range Syntax',
    bn: 'মিডিয়া কুয়েরি ও ব্রেকপয়েন্ট — মোবাইল-ফার্স্ট আর্কিটেকচার ও রেঞ্জ সিনট্যাক্স'
  },
  summary: {
    en: 'Media queries allow stylesheets to apply rules conditionally based on device screen dimensions and hardware capabilities. In this lesson, we master mobile-first architecture using min-width rules, modern Media Queries Level 4 range syntax, and why em units outperform fixed pixels during accessibility zooming.',
    bn: 'মিডিয়া কুয়েরি ব্রাউজারের স্ক্রিন সাইজ ও ডিভাইসের ক্ষমতার ওপর ভিত্তি করে নির্দিষ্ট সিএসএস স্টাইল প্রয়োগ করার সুযোগ দেয়। এই পাঠে আমরা min-width দিয়ে মোবাইল-ফার্স্ট আর্কিটেকচার তৈরি, আধুনিক লেভেল ৪ রেঞ্জ সিনট্যাক্স এবং ব্যবহারকারীর জুম সুবিধার জন্য পিক্সেলের বদলে em ব্যবহারের গুরুত্ব শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'media-queries-overview',
      text: {
        en: 'The Core Architecture: Mobile-First Strategy',
        bn: 'মূল আর্কিটেকচার: মোবাইল-ফার্স্ট কৌশল'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build scalable websites, mobile-first design represents the industry standard approach. Base styles are declared outside any media query for small mobile screens. Progressive enhancements are layered on top as screen real estate increases using min-width media queries.',
        bn: 'স্কেলেবল ওয়েবসাইট তৈরির সময় মোবাইল-ফার্স্ট ডিজাইন হলো আধুনিক ইন্ডাস্ট্রির স্ট্যান্ডার্ড। কোনো মিডিয়া কুয়েরি ছাড়া সাধারণ সিএসএস দিয়ে মোবাইলের বেস স্টাইল লেখা হয়। এরপর স্ক্রিনের আকার যত বাড়তে থাকে, min-width মিডিয়া কুয়েরি দিয়ে ধাপে ধাপে অতিরিক্ত লেআউট যোগ করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Mobile-First',
          def: {
            en: 'An architectural design pattern writing base styles for small screens first, then enhancing upward with min-width queries.',
            bn: 'একটি ডিজাইন প্যাটার্ন যেখানে প্রথমে ছোট স্ক্রিনের জন্য বেস স্টাইল লেখা হয় এবং পরে min-width দিয়ে বড় স্ক্রিনে উন্নত করা হয়।'
          }
        },
        {
          term: 'Breakpoint',
          def: {
            en: 'A specific viewport threshold where the design layout adapts to accommodate changing screen widths.',
            bn: 'নির্দিষ্ট একটি ভিউপোর্ট পরিমাপ যেখানে পৌঁছালে ওয়েবসাইটের লেআউট পরিবর্তন হয়ে নতুন আকার ধারণ করে।'
          }
        },
        {
          term: 'Range Syntax (MQ Level 4)',
          def: {
            en: 'Modern mathematical comparison syntax replacing min-width and max-width with intuitive operators like >= and <.',
            bn: 'আধুনিক গাণিতিক সিনট্যাক্স যা পুরোনো min-width ও max-width-এর বদলে >= এবং <-এর মতো স্পষ্ট চিহ্ন ব্যবহার করে।'
          }
        },
        {
          term: 'em Breakpoints',
          def: {
            en: 'Declaring breakpoints using em units so thresholds scale naturally when users increase browser default font size.',
            bn: 'ব্রেকপয়েন্টে em ইউনিট ব্যবহার করা যাতে ব্যবহারকারী ব্রাউজারে ফন্ট সাইজ বড় করলে সাথে সাথে লেআউটও মানিয়ে নেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'range-syntax-rules',
      text: {
        en: 'Modern Range Syntax vs Legacy Syntax',
        bn: 'আধুনিক রেঞ্জ সিনট্যাক্স বনাম পুরোনো সিনট্যাক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Legacy Syntax (Level 3)', bn: 'পুরোনো সিনট্যাক্স (লেভেল ৩)' },
        { en: 'Modern Range Syntax (Level 4)', bn: 'আধুনিক রেঞ্জ সিনট্যাক্স (লেভেল ৪)' },
        { en: 'Target Screen Scope', bn: 'টার্গেট স্ক্রিনের আওতা' }
      ],
      rows: [
        [
          { en: '@media (min-width: 48em)', bn: '@media (min-width: 48em)' },
          { en: '@media (width >= 48em)', bn: '@media (width >= 48em)' },
          { en: 'Tablets and larger screens (768px+)', bn: 'ট্যাবলেট এবং বড় স্ক্রিন (৭৬৮px+)' }
        ],
        [
          { en: '@media (max-width: 47.99em)', bn: '@media (max-width: 47.99em)' },
          { en: '@media (width < 48em)', bn: '@media (width < 48em)' },
          { en: 'Phones exclusively (< 768px)', bn: 'শুধুমাত্র ছোট ফোন (< ৭৬৮px)' }
        ],
        [
          { en: '@media (min-width: 48em) and (max-width: 64em)', bn: '@media (min-width: 48em) and (max-width: 64em)' },
          { en: '@media (48em <= width <= 64em)', bn: '@media (48em <= width <= 64em)' },
          { en: 'Strict tablet window between 768px and 1024px', bn: '৭৬৮px থেকে ১০২৪px-এর মাঝে ট্যাবলেট উইন্ডো' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Mobile-First Breakpoint Implementation',
        bn: 'মোবাইল-ফার্স্ট ব্রেকপয়েন্টের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `/* 1. Base Mobile Styles (no media query) */
.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* 2. Tablet Enhancement (768px / 16px = 48em) */
@media (width >= 48em) {
  .nav-menu {
    flex-direction: row;
    align-items: center;
  }
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 3. Desktop Enhancement (1024px / 16px = 64em) */
@media (width >= 64em) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

// 4. Test breakpoint match programmatically in JavaScript
const isDesktop = window.matchMedia('(width >= 64em)').matches;
console.log('Query match checked successfully:', typeof isDesktop === 'boolean');
// -> Query match checked successfully: true`,
      caption: {
        en: 'Progressively scaling a grid from 1 mobile column to 4 desktop columns at 64em',
        bn: '৬৪em ব্রেকপয়েন্টে মোবাইলের ১ কলাম থেকে ডেস্কটপের ৪ কলাম গ্রিডে রূপান্তর'
      }
    },
    {
      type: 'heading',
      id: 'why-em-units',
      text: {
        en: 'Why em Units Outperform Pixels for Breakpoints',
        bn: 'ব্রেকপয়েন্টে পিক্সেলের চেয়ে em কেন বেশি কার্যকর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a user with visual impairments zooms their browser text to 200%, 1em scales from 16px to 32px. A breakpoint declared as @media (min-width: 48em) triggers at 1536px of actual screen width, seamlessly reflowing zoomed text into a single mobile column to preserve legibility without horizontal scrollbars.',
        bn: 'দৃষ্টিপ্রতিবন্ধী কোনো ব্যবহারকারী যখন ব্রাউজারে টেক্সট জুম ২০০% করেন, তখন ১em-এর মান ১৬px থেকে বেড়ে ৩২px হয়ে যায়। @media (min-width: 48em) ঘোষণা করা থাকলে তা তখন ১৫৩৬px স্ক্রিনেই ট্রিগার হয়, ফলে বড় করা লেখাগুলো সুন্দরভাবে একক কলামে নেমে আসে এবং কোনো অনুভূমিক স্ক্রলবার তৈরি হয় না।'
      }
    },
    {
      type: 'compare',
      left: {
        title: {
          en: 'Mobile-First (min-width)',
          bn: 'মোবাইল-ফার্স্ট (min-width)'
        },
        points: [
          {
            en: 'Base styles target mobile devices by default.',
            bn: 'ডিফল্ট বেস স্টাইল সরাসরি মোবাইল ডিভাইসকে টার্গেট করে।'
          },
          {
            en: 'Styles scale upward progressively with screen width.',
            bn: 'স্ক্রিন বড় হওয়ার সাথে সাথে নতুন স্টাইল যোগ হতে থাকে।'
          },
          {
            en: 'Minimal specificity conflicts; no need to override large desktop grids.',
            bn: 'স্পেসিফিসিটি জটিলতা থাকে না; ডেস্কে করা বড় গ্রিড মুছতে হয় না।'
          },
          {
            en: 'Faster initial render performance on low-power mobile phones.',
            bn: 'কম ক্ষমতার মোবাইল ফোনে প্রাথমিক রেন্ডার অনেক দ্রুত হয়।'
          }
        ]
      },
      right: {
        title: {
          en: 'Desktop-First (max-width)',
          bn: 'ডেস্কটপ-ফার্স্ট (max-width)'
        },
        points: [
          {
            en: 'Base styles assume wide desktop screens first.',
            bn: 'বেস স্টাইলে প্রথমে বড় ডেস্কটপ স্ক্রিন বিবেচনা করা হয়।'
          },
          {
            en: 'Requires overriding complex multidimensional grids with single columns.',
            bn: 'জটিল গ্রিড বাতিল করে মোবাইলের জন্য একক কলাম তৈরি করতে হয়।'
          },
          {
            en: 'Higher CSS specificity and duplicate rule declarations.',
            bn: 'সিএসএসে অতিরিক্ত স্পেসিফিসিটি এবং ডুপ্লিকেট নিয়মের চাপ বাড়ে।'
          },
          {
            en: 'Mobile phones must parse and discard desktop layout rules.',
            bn: 'মোবাইল ব্রাউজারকে ডেস্কটপের ভারী কোড পড়ে বাতিল করতে হয়।'
          }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'rd-bp-ex1',
      kind: 'mcq',
      topic: 'mobile first query type',
      question: {
        en: 'Which media query condition is foundational to mobile-first responsive design?',
        bn: 'মোবাইল-ফার্স্ট রেসপনসিভ ডিজাইনের মূল ভিত্তি কোন ধরনের মিডিয়া কুয়েরি?'
      },
      options: [
        {
          en: 'min-width queries (such as width >= 48em) that enhance layouts on wider viewports',
          bn: 'min-width কুয়েরি (যেমন width >= 48em) যা চওড়া স্ক্রিনে লেআউট উন্নত করে'
        },
        {
          en: 'max-width queries that strip out desktop styling for phones',
          bn: 'max-width কুয়েরি যা ফোনের জন্য ডেস্কটপ স্টাইল মুছে ফেলে'
        },
        {
          en: 'orientation: landscape queries exclusively',
          bn: 'শুধুমাত্র orientation: landscape কুয়েরি'
        },
        {
          en: 'resolution: 300dpi print queries alone',
          bn: 'শুধুমাত্র প্রিন্টারের জন্য resolution: 300dpi কুয়েরি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mobile-first starts at the minimum screen and scales upward.',
        bn: 'মোবাইল-ফার্স্ট ছোট স্ক্রিন থেকে শুরু হয়ে উপরের দিকে ধাপে ধাপে বড় হয়।'
      },
      explanation: {
        en: 'Mobile-first builds default single-column styles first, then uses min-width to add multidimensional grid layouts as screen width expands.',
        bn: 'মোবাইল-ফার্স্টে প্রথমে একক কলাম তৈরি করা হয় এবং স্ক্রিনের আকার বাড়ার সাথে সাথে min-width দিয়ে গ্রিড বা ফ্লেক্সবক্স কলাম যুক্ত করা হয়।'
      }
    },
    {
      id: 'rd-bp-ex2',
      kind: 'mcq',
      topic: 'range syntax translation',
      question: {
        en: 'Which modern range query is equivalent to @media (min-width: 40em) and (max-width: 60em)?',
        bn: '@media (min-width: 40em) and (max-width: 60em)-এর সমতুল্য আধুনিক রেঞ্জ সিনট্যাক্স কোনটি?'
      },
      options: [
        {
          en: '@media (40em <= width <= 60em)',
          bn: '@media (40em <= width <= 60em)'
        },
        {
          en: '@media (width = 40em : 60em)',
          bn: '@media (width = 40em : 60em)'
        },
        {
          en: '@media (range: 40em - 60em)',
          bn: '@media (range: 40em - 60em)'
        },
        {
          en: '@media between (40em, 60em)',
          bn: '@media between (40em, 60em)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modern Media Queries Level 4 syntax supports mathematical comparison operators.',
        bn: 'আধুনিক মিডিয়া কুয়েরি লেভেল ৪ সিনট্যাক্স গাণিতিক তুলনা চিহ্ন সমর্থন করে।'
      },
      explanation: {
        en: 'Media Queries Level 4 introduced standard mathematical inequalities, allowing authors to write concise ranges like (40em <= width <= 60em).',
        bn: 'মিডিয়া কুয়েরি লেভেল 4 এ গাণিতিক চিহ্ন অন্তর্ভুক্ত হয়েছে, যার ফলে (40em <= width <= 60em)-এর মতো সহজ কোড লেখা সম্ভব।'
      }
    },
    {
      id: 'rd-bp-ex3',
      kind: 'mcq',
      topic: 'em breakpoints for zoom',
      question: {
        en: 'Why do accessibility guidelines recommend declaring breakpoints in em rather than px?',
        bn: 'অ্যাক্সেসিবিলিটি নির্দেশিকায় ব্রেকপয়েন্টে পিক্সেলের বদলে em ব্যবহারের পরামর্শ কেন দেওয়া হয়?'
      },
      options: [
        {
          en: 'em breakpoints adjust to user text zoom settings, preventing horizontal scrolling for visually impaired readers',
          bn: 'em ব্রেকপয়েন্ট ব্যবহারকারীর টেক্সট জুম সেটিংসের সাথে মানিয়ে নেয়, ফলে অনুভূমিক স্ক্রলবার তৈরি হয় না'
        },
        {
          en: 'px breakpoints cause mobile browsers to download 5 times more network data',
          bn: 'পিক্সেল ব্রেকপয়েন্ট ব্যবহার করলে মোবাইল ব্রাউজারে ৫ গুণ বেশি ডেটা খরচ হয়'
        },
        {
          en: 'em units prevent web crawlers from indexing website content',
          bn: 'em ইউনিট সার্চ ইঞ্জিন ক্রলারকে পেজের কন্টেন্ট পড়তে বাধা দেয়'
        },
        {
          en: 'Modern browsers will officially deprecate px units by 2028',
          bn: '২০২৮ সালের মধ্যে ব্রাউজারগুলোতে পিক্সেল ইউনিট সম্পূর্ণ নিষিদ্ধ করা হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'em units scale proportionally with user default font preferences.',
        bn: 'ব্যবহারকারী ফন্ট সাইজ বড় করলে em মানও সমানুপাতিক হারে বৃদ্ধি পায়।'
      },
      explanation: {
        en: 'When a user increases browser font size, em-based breakpoints scale proportionally, reflowing wide desktop layouts into readable mobile columns.',
        bn: 'ব্যবহারকারী যখন ব্রাউজারে ফন্ট সাইজ বড় করেন, em ব্রেকপয়েন্টগুলোও বড় হয়ে যায় এবং ডেস্কটপ লেআউটকে মোবাইলের কলামে নামিয়ে এনে পড়ার সুবিধা দেয়।'
      }
    },
    {
      id: 'rd-bp-ex4',
      kind: 'mcq',
      topic: 'content driven breakpoints',
      question: {
        en: 'How should engineering teams determine where to place breakpoint thresholds in stylesheets?',
        bn: 'স্টাইলশিটে কোথায় ব্রেকপয়েন্ট বসাতে হবে তা ইঞ্জিনিয়ারিং টিমগুলোর কীভাবে নির্ধারণ করা উচিত?'
      },
      options: [
        {
          en: 'Based on where the content itself naturally breaks or looks awkward, rather than targeting specific device hardware models',
          bn: 'নির্দিষ্ট কোনো ব্র্যান্ডের ডিভাইস টার্গেট না করে, পেজের কন্টেন্ট যেখানে ভেঙে যায় বা খারাপ দেখায় সেই বিন্দুতে'
        },
        {
          en: 'Strictly at the exact screen widths of the latest Apple iPhone releases',
          bn: 'শুধুমাত্র সর্বশেষ অ্যাপল আইফোনের নির্দিষ্ট স্ক্রিন রেজোলিউশনের ওপর ভিত্তি করে'
        },
        {
          en: 'At every 50px interval across the entire screen spectrum',
          bn: 'পুরো স্ক্রিন জুড়ে প্রতি ৫০px ব্যবধানে একটি করে ব্রেকপয়েন্ট বসিয়ে'
        },
        {
          en: 'Breakpoints should only be decided by backend database administrators',
          bn: 'ব্রেকপয়েন্ট শুধুমাত্র ব্যাকএন্ড ডাটাবেজ অ্যাডমিনিস্ট্রেটরদের দ্বারা নির্ধারিত হওয়া উচিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'Design for the content requirements rather than fleeting device dimensions.',
        bn: 'নির্দিষ্ট গ্যাজেট বাদ দিয়ে কন্টেন্টের নিজস্ব প্রয়োজনে ব্রেকপয়েন্ট নির্ধারণ করুন।'
      },
      explanation: {
        en: 'Device screen sizes change every year. Authoring breakpoints where content naturally wraps or line lengths become uncomfortable ensures permanent layout stability.',
        bn: 'প্রতি বছর নতুন নতুন ফোন বাজারে আসে। ডিভাইসের মাপের পেছনে না ছুটে যেখানে কন্টেন্ট ভেঙে যায় সেখানে ব্রেকপয়েন্ট দিলে সাইট দীর্ঘস্থায়ী হয়।'
      }
    }
  ],
  quiz: {
    id: 'breakpoints-quiz',
    title: {
      en: 'Breakpoints & Media Queries Quiz',
      bn: 'ব্রেকপয়েন্ট এবং মিডিয়া কুয়েরি কুইজ'
    },
    questions: [
      {
        id: 'q-breakpoint-conversion-math',
        kind: 'mcq',
        topic: 'px to em breakpoint conversion',
        question: {
          en: 'At the standard root font size of 16px, what is the em equivalent of a 768px tablet breakpoint?',
          bn: 'আদর্শ ১৬px রুট ফন্টে ৭৬৮px ট্যাবলেট ব্রেকপয়েন্টের সমতুল্য em মান কত?'
        },
        options: [
          {
            en: '48em (768 divided by 16)',
            bn: '৪৮em (৭৬৮ ভাগ ১৬)'
          },
          {
            en: '32em',
            bn: '৩২em'
          },
          {
            en: '64em',
            bn: '৬৪em'
          },
          {
            en: '76.8em',
            bn: '৭৬.৮em'
          }
        ],
        answer: 0,
        hint: {
          en: 'Divide the target pixel width by the 16px base font size.',
          bn: 'টার্গেট পিক্সেল মানকে মূল ১৬px ফন্ট সাইজ দিয়ে ভাগ করুন।'
        },
        explanation: {
          en: '768px divided by 16px gives 48em. Writing @media (width >= 48em) matches screens starting at 768px while supporting text scaling.',
          bn: '৭৬৮px-কে ১৬ দিয়ে ভাগ করলে ৪৮em পাওয়া যায়। @media (width >= 48em) লিখলে তা ৭৬৮px থেকে শুরু হয়ে সব বড় স্ক্রিনে কার্যকর হয়।'
        }
      },
      {
        id: 'q-desktop-first-drawback',
        kind: 'mcq',
        topic: 'desktop first pitfalls',
        question: {
          en: 'What is the main drawback of writing stylesheets using desktop-first max-width queries?',
          bn: 'ডেস্কটপ-ফার্স্ট max-width কুয়েরি দিয়ে স্টাইলশিট লেখার প্রধান অসুবিধা কী?'
        },
        options: [
          {
            en: 'Mobile devices are forced to parse heavy multi-column desktop rules first and then execute overrides to reset them into single columns',
            bn: 'মোবাইল ডিভাইসকে প্রথমে ডেস্কটপের ভারী মাল্টি-কলাম রুল পার্স করতে হয় এবং পরে তা বাতিল করে একক কলামে নামাতে হয়'
          },
          {
            en: 'max-width queries are not recognized by Google Chrome',
            bn: 'গুগল ক্রোম ব্রাউজার max-width কুয়েরি চিনতে পারে না'
          },
          {
            en: 'Desktop-first design completely disables CSS Flexbox layouts',
            bn: 'ডেস্কটপ-ফার্স্ট ডিজাইনে সিএসএস ফ্লেক্সবক্স লেআউট সম্পূর্ণ নিষ্ক্রিয় হয়ে যায়'
          },
          {
            en: 'max-width queries require paid SSL security certificates',
            bn: 'max-width কুয়েরি চালানোর জন্য টাকা দিয়ে এসএসএল সার্টিফিকেট কিনতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Undoing desktop styles creates messy specificity cascades.',
          bn: 'ডেস্কটপ স্টাইল বাতিল করতে গেলে সিএসএস কোড ভারী ও জটিল হয়ে পড়ে।'
        },
        explanation: {
          en: 'Desktop-first approaches require undoing complex desktop grid rules with successive max-width overrides, leading to larger stylesheets and rendering overhead on phones.',
          bn: 'ডেস্কটপ-ফার্স্ট পদ্ধতিতে বারবার নিয়ম বাতিল করার জন্য অতিরিক্ত কোড লিখতে হয়, যা মোবাইল ফোনে পারফরম্যান্সের ক্ষতি করে।'
        }
      },
      {
        id: 'q-exclusive-range-behavior',
        kind: 'mcq',
        topic: 'sub-pixel boundary gaps',
        question: {
          en: 'How does modern range syntax (width < 48em) prevent sub-pixel collision bugs compared to legacy max-width: 767px?',
          bn: 'পুরোনো max-width: 767px-এর তুলনায় আধুনিক রেঞ্জ সিনট্যাক্স (width < 48em) কীভাবে সাব-পিক্সেল সংঘর্ষ রোধ করে?'
        },
        options: [
          {
            en: 'The strictly less-than operator (<) precisely excludes 48em without requiring fractional hacks like 767.98px',
            bn: 'কঠোর ক্ষুদ্রতর (<) চিহ্নটি ৭৬৭.৯৮px-এর মতো কৃত্রিম ভগ্নাংশ ছাড়াই ঠিক ৪৮em-এর নিচে নিখুঁতভাবে কাজ করে'
          },
          {
            en: 'It converts fractional numbers into integers in the browser memory',
            bn: 'এটি ব্রাউজার মেমোরিতে ভগ্নাংশ সংখ্যাগুলোকে পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'It forces screens to run at 60 frames per second',
            bn: 'এটি স্ক্রিনকে প্রতি সেকেন্ডে ৬০ ফ্রেমে চলতে বাধ্য করে'
          },
          {
            en: 'It disables GPU hardware acceleration on tablet displays',
            bn: 'এটি ট্যাবলেট ডিসপ্লেতে জিপিইউ হার্ডওয়্যার অ্যাক্সিলারেশন বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mathematical inequalities eliminate awkward fractional pixel boundaries.',
          bn: 'গাণিতিক অসমতা চিহ্নগুলো ভগ্নাংশ পিক্সেলের বিভ্রান্তি দূর করে দেয়।'
        },
        explanation: {
          en: 'Legacy min/max combinations frequently suffered from 1px gap bugs on high-density screens (e.g. at 767.5px). The exclusive < operator eliminates overlap or gap states.',
          bn: 'পুরোনো নিয়মে হাই-ডিপিআই স্ক্রিনে ৭৬৭.৫px-এর মতো মানে লেআউট ভেঙে যেত। আধুনিক < চিহ্ন কোনো ফাঁকা বা ওভারল্যাপ তৈরি হতে দেয় না।'
        }
      },
      {
        id: 'q-nested-media-queries',
        kind: 'mcq',
        topic: 'css nesting with media queries',
        question: {
          en: 'With modern native CSS nesting, where can media queries be written for component selectors?',
          bn: 'আধুনিক নেটিভ সিএসএস নেস্টিং ব্যবস্থায় কম্পোনেন্ট সিলেক্টরের জন্য মিডিয়া কুয়েরি কোথায় লেখা যায়?'
        },
        options: [
          {
            en: 'Directly nested inside the CSS selector block: .card { width: 100%; @media (width >= 48em) { width: 50%; } }',
            bn: 'সরাসরি সিএসএস সিলেক্টরের ভেতরে: .card { width: 100%; @media (width >= 48em) { width: 50%; } }'
          },
          {
            en: 'Only inside external JSON configuration files',
            bn: 'শুধুমাত্র বাইরের জেএসন (JSON) কনফিগারেশন ফাইলের ভেতর'
          },
          {
            en: 'Only at the very bottom of the HTML <body> tag',
            bn: 'শুধুমাত্র এইচটিএমএল <body> ট্যাগের একেবারে নিচে'
          },
          {
            en: 'Nested media queries are forbidden in native CSS specifications',
            bn: 'নেটিভ সিএসএস স্পেসিফিকেশনে নেস্টেড মিডিয়া কুয়েরি সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native CSS now supports nesting at-rules directly inside selector rules.',
          bn: 'আধুনিক সিএসএসে সিলেক্টরের ভেতরেই সরাসরি @media নেস্ট করা যায়।'
        },
        explanation: {
          en: 'Modern browsers natively support nesting media queries directly inside component selectors, keeping responsive style definitions co-located with base styles.',
          bn: 'আধুনিক ব্রাউজারগুলো নেটিভ সিএসএস নেস্টিং সমর্থন করে, ফলে কোনো প্রিপ্রসেসর ছাড়াই সিলেক্টরের ভেতরে সরাসরি রেসপনসিভ কোড রাখা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'boxes-that-bend',
    title: {
      en: 'Flexbox Layouts — flex-grow, flex-shrink, and Wrapping Axes',
      bn: 'ফ্লেক্সবক্স লেআউট — flex-grow, flex-shrink এবং র‍্যাপিং অ্যাক্সিস'
    }
  }
};
