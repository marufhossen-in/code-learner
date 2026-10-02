import type { Lesson } from '../../../lib/types';

export const TheMeasureOfAllHallsLesson: Lesson = {
  slug: 'the-measure-of-all-halls',
  tech: 'bootstrap',
  title: {
    en: 'The 12-Column Responsive Grid System, Containers & Breakpoints',
    bn: '১২-কলাম রেসপনসিভ গ্রিড সিস্টেম, কন্টেইনার ও ব্রেকপয়েন্ট'
  },
  summary: {
    en: 'At the heart of Bootstrap lies its responsive 12-column grid system, which standardizes layout geometry across diverse device viewports. The number 12 was chosen mathematically because it is evenly divisible by 1, 2, 3, 4, and 6, enabling symmetrical halves, thirds, quarters, and sixths without pixel rounding errors. Bootstrap 5 organizes layouts using three coordinated primitives: Containers to clamp maximum widths, Rows to cancel column padding via negative margins, and Columns to distribute content along 12 horizontal tracks. Across 6 responsive breakpoints ranging from small phones under 576 pixels to extra-extra-large screens above 1400 pixels, developers can craft fluid layouts using breakpoint prefixes like col-md-4.',
    bn: 'বুটস্ট্র্যাপের মূল ভিত্তি হলো এর রেসপনসিভ ১২-কলাম গ্রিড সিস্টেম, যা যেকোনো ডিভাইসে ওয়েবসাইটের লেআউটকে সুবিন্যস্ত রাখে। গাণিতিক কারণেই ১২ সংখ্যাটি বেছে নেওয়া হয়েছে, কারণ ১২ কে ১, ২, ৩, ৪ এবং ৬ দিয়ে নিখুঁতভাবে ভাগ করা যায়; ফলে অর্ধেক, এক-তৃতীয়াংশ বা এক-চতুর্থাংশ কলাম নিখুঁতভাবে বসানো যায়। বুটস্ট্র্যাপ ৫ তিনটি মূল উপাদানের সমন্বয়ে গঠিত: কন্টেইনার (Container) যা সর্বোচ্চ প্রস্থ বেঁধে রাখে, রো (Row) যা কলামের প্যাডিং সমন্বয় করে, এবং কলাম (Column) যা বিষয়বস্তু সাজায়। ৫৭৬ পিক্সেলের মোবাইল থেকে শুরু করে ১৪০০ পিক্সেলের আল্ট্রাওয়াইড স্ক্রিন পর্যন্ত মোট ৬টি রেসপনসিভ ব্রেকপয়েন্টে col-md-4-এর মতো ক্লাসের মাধ্যমে চমৎকার ফ্লুইড লেআউট তৈরি করা যায়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: 12-Column Grid Geometry',
        bn: 'মূল ধারণা: ১২-কলাম গ্রিড কাঠামো'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build responsive layouts, organizing interface cards and form fields requires a predictable horizontal coordinate system. Without a unified grid, disparate engineering teams invent conflicting margins and percentages, resulting in visual misalignment. Bootstrap provides a battle-tested flexbox grid where 12 equal vertical tracks divide the available container width evenly.',
        bn: 'আপনি যখন রেসপনসিভ লেআউট তৈরি করেন, তখন কার্ড বা ফর্মের উপাদানগুলোকে একটি সুনির্দিষ্ট অনুভূমিক নিয়মে সাজাতে হয়। গ্রিড সিস্টেম না থাকলে বিভিন্ন ডেভেলপার ভিন্ন ভিন্ন মার্জিন ও শতকরা হিসাব ব্যবহার করেন, যা ওয়েবসাইটের সৌন্দর্য নষ্ট করে। বুটস্ট্র্যাপ একটি পরীক্ষিত ফ্লেক্সবক্স গ্রিড প্রদান করে যেখানে ১২টি সমান কলাম পুরো কন্টেইনারের প্রস্থকে সুষমভাবে ভাগ করে নেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The 12-Column Grid',
          def: {
            en: 'A responsive layout structure dividing horizontal container space into 12 equal-width tracks',
            bn: 'একটি রেসপনসিভ লেআউট কাঠামো যা অনুভূমিক স্থানকে সমান ১২টি কলামে বিভক্ত করে'
          }
        },
        {
          term: 'Containers (.container, .container-fluid)',
          def: {
            en: 'Top-level layout elements that center and constrain content width across different screen viewports',
            bn: 'শীর্ষস্তরের কন্টেইনার যা বিভিন্ন স্ক্রিন রেজোলিউশনে কন্টেন্টকে মাঝে রাখে এবং সর্বোচ্চ প্রস্থ সীমাবদ্ধ করে'
          }
        },
        {
          term: 'Gutters (g-*, gx-*, gy-*)',
          def: {
            en: 'The horizontal and vertical spacing between grid columns, generated via column padding and negative row margins',
            bn: 'গ্রিড কলামগুলোর মধ্যকার ফাঁকা জায়গা যা কলামের প্যাডিং ও রো-এর নেগেটিভ মার্জিনের মাধ্যমে তৈরি হয়'
          }
        },
        {
          term: 'Breakpoints',
          def: {
            en: 'Predefined CSS media query width thresholds (xs, sm, md, lg, xl, xxl) where layouts adapt responsively',
            bn: 'সিএসএস মিডিয়া কোয়েরির নির্দিষ্ট প্রস্থের সীমা (যেমন sm, md, lg) যার ভিত্তিতে পেজের লেআউট পরিবর্তিত হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'breakpoint-tiers-table',
      text: {
        en: 'The 6 Responsive Breakpoint Tiers in Bootstrap 5',
        bn: 'বুটস্ট্র্যাপ ৫ সংস্করণের ৬টি রেসপনসিভ ব্রেকপয়েন্ট'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Bootstrap 5 Breakpoint Dimensions and Max Container Widths',
        bn: 'বুটস্ট্র্যাপ ৫ ব্রেকপয়েন্টের মাপ ও কন্টেইনারের সর্বোচ্চ প্রস্থ'
      },
      head: [
        { en: 'Breakpoint Tier', bn: 'ব্রেকপয়েন্ট স্তর' },
        { en: 'Class Infix & Media Query', bn: 'ক্লাস প্রিফিক্স ও কোয়েরি' },
        { en: 'Max Container Width', bn: 'সর্বোচ্চ কন্টেইনার প্রস্থ' }
      ],
      rows: [
        [
          { en: 'Extra Small (xs)', bn: 'এক্সট্রা স্মল (xs)' },
          { en: 'None (default), < 576px', bn: 'কোনো প্রিফিক্স নেই, < ৫৭৬px' },
          { en: '100% fluid width', bn: '১০০% সম্পূর্ণ প্রস্থ' }
        ],
        [
          { en: 'Small (sm)', bn: 'স্মল (sm)' },
          { en: 'sm, @media (min-width: 576px)', bn: 'sm, @media (min-width: ৫৭৬px)' },
          { en: '540px max width', bn: '৫৪০px সর্বোচ্চ প্রস্থ' }
        ],
        [
          { en: 'Medium (md)', bn: 'মিডিয়াম (md)' },
          { en: 'md, @media (min-width: 768px)', bn: 'md, @media (min-width: ৭৬৮px)' },
          { en: '720px max width', bn: '৭২০px সর্বোচ্চ প্রস্থ' }
        ],
        [
          { en: 'Large (lg)', bn: 'লার্জ (lg)' },
          { en: 'lg, @media (min-width: 992px)', bn: 'lg, @media (min-width: ৯৯২px)' },
          { en: '960px max width', bn: '৯৬০px সর্বোচ্চ প্রস্থ' }
        ],
        [
          { en: 'Extra Large (xl)', bn: 'এক্সট্রা লার্জ (xl)' },
          { en: 'xl, @media (min-width: 1200px)', bn: 'xl, @media (min-width: ১২০০px)' },
          { en: '1140px max width', bn: '১১৪০px সর্বোচ্চ প্রস্থ' }
        ],
        [
          { en: 'Extra Extra Large (xxl)', bn: 'এক্সট্রা এক্সট্রা লার্জ (xxl)' },
          { en: 'xxl, @media (min-width: 1400px)', bn: 'xxl, @media (min-width: ১৪০০px)' },
          { en: '1320px max width', bn: '১৩২০px সর্বোচ্চ প্রস্থ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Grid Column Width Allocation',
        bn: 'চালনাযোগ্য সিমুলেশন: গ্রিড কলামের প্রস্থ বণ্টন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the mathematical distribution of container width across a 12-column grid using col-md-4 column specifications:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১২-কলামের গ্রিডে col-md-4 ব্যবহার করে কন্টেইনারের প্রস্থ কীভাবে বণ্টিত হয় তা হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-grid-calc-sim',
      lang: 'javascript',
      code: `// Bootstrap 12-Column Responsive Width Allocator
const totalColumns = 12;
const containerWidth = 1200; // 1200 pixels viewport width
const columnSpan = 4;        // col-md-4 (spans 4 tracks)

const allocatedWidth = (columnSpan / totalColumns) * containerWidth;
const columnCount = totalColumns / columnSpan;

console.log('Total grid columns in coordinate system:', totalColumns);
// -> Total grid columns in coordinate system: 12

console.log('Container pixel width under evaluation:', containerWidth);
// -> Container pixel width under evaluation: 1200

console.log('Width allocated to each col-4 element in pixels:', allocatedWidth);
// -> Width allocated to each col-4 element in pixels: 400

console.log('Total count of 4-column cards fitting into one row:', columnCount);
// -> Total count of 4-column cards fitting into one row: 3`,
      caption: {
        en: 'Figure 1: In a 1200-pixel container, each col-4 column receives exactly 400 pixels of width, fitting 3 columns per row across 12 total tracks',
        bn: 'চিত্র ১: ১২০০ পিক্সেল কন্টেইনারে প্রতিটি col-4 কলাম ঠিক ৪০০ পিক্সেল জায়গা পায়, ফলে ১২ কলামের একটি সারিতে ৩টি কার্ড নিখুঁতভাবে বসে'
      }
    },
    {
      type: 'heading',
      id: 'grid-mechanics-rules',
      text: {
        en: 'The Three Rules of Bootstrap Grid Markup',
        bn: 'বুটস্ট্র্যাপ গ্রিড মার্কআপের ৩টি নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 3 layout architecture principles to avoid broken margins and horizontal overflow bugs:',
        bn: 'মার্জিন ভাঙন ও অনুভূমিক স্ক্রলবার সমস্যা এড়াতে এই ৩টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Rows Must Live Inside Containers',
          def: {
            en: 'Rows apply negative horizontal margins (-12px) to cancel column padding, requiring an enclosing container to prevent horizontal scrollbars',
            bn: 'রো-এর দুই পাশে নেগেটিভ মার্জিন থাকে যা কলামের প্যাডিং দূর করে; তাই কন্টেইনার ছাড়া রো রাখলে ডানে স্ক্রলবার তৈরি হয়'
          }
        },
        {
          term: 'Rule 2: Columns Must Be Immediate Children of Rows',
          def: {
            en: 'Only column elements (.col, .col-*) may be immediate children of .row elements; never place cards directly inside a row',
            bn: 'শুধুমাত্র কলাম ক্লাস (.col-*) রো-এর সরাসরি চাইল্ড হতে পারবে; রো-এর ভেতরে সরাসরি কার্ড বা অন্য ট্যাগ রাখবেন না'
          }
        },
        {
          term: 'Rule 3: Automatic Column Stacking on Mobile',
          def: {
            en: 'Columns without an xs infix (like col-md-6) automatically stack to 100% width on viewports below 768 pixels',
            bn: 'ব্রেকপয়েন্ট প্রিফিক্সযুক্ত কলামগুলো (যেমন col-md-6) ৭৬৮ পিক্সেলের নিচে গেলে নিজে থেকেই ১০০% প্রস্থ নিয়ে নিচে নেমে যায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-column-calc-ex',
      kind: 'mcq',
      topic: 'Calculating column width in a 12-column grid',
      question: {
        en: 'In a 1200-pixel container, how many pixels of width are allocated to a column with class col-4 in a 12-column grid?',
        bn: '১২০০ পিক্সেল প্রস্থের কন্টেইনারে ১২-কলাম গ্রিডের একটি col-4 উপাদান কত পিক্সেল জায়গা পাবে?'
      },
      options: [
        {
          en: '400 pixels (4 / 12 * 1200)',
          bn: '৪০০ পিক্সেল (৪ / ১২ * ১২০০)'
        },
        {
          en: '300 pixels',
          bn: '৩০০ পিক্সেল'
        },
        {
          en: '600 pixels',
          bn: '৬০০ পিক্সেল'
        },
        {
          en: '100 pixels',
          bn: '১০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide 4 by 12, then multiply by 1200.',
        bn: '৪ কে ১২ দিয়ে ভাগ করে ১২০০ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'A col-4 class occupies 4 out of 12 columns (one-third). One-third of 1200 pixels is exactly 400 pixels.',
        bn: 'col-4 ক্লাস মোট ১২টি কলামের মধ্যে ৪টি কলাম দখল করে; ১২০০ পিক্সেলের সেই অংশ হলো ৪০০ পিক্সেল।'
      }
    },
    {
      id: 'bs-row-cols-ex',
      kind: 'mcq',
      topic: 'Using row-cols utility classes',
      question: {
        en: 'What layout does the class row row-cols-md-3 produce on screens 768 pixels wide and above?',
        bn: '৭৬৮ পিক্সেল বা তার চেয়ে বড় পর্দায় row row-cols-md-3 ক্লাসটি কী ধরনের লেআউট তৈরি করে?'
      },
      options: [
        {
          en: 'It automatically formats all child columns to render 3 equal cards per row without requiring col-4 on each child',
          bn: 'এটি প্রতিটি চাইল্ডে col-4 লেখা ছাড়াই এক সারিতে সমান ৩টি করে কার্ড সুন্দরভাবে সাজিয়ে দেয়'
        },
        {
          en: 'It creates 30 rows on the screen',
          bn: 'এটি স্ক্রিনে ৩০টি সারি তৈরি করে'
        },
        {
          en: 'It hides all cards on desktop screens',
          bn: 'এটি ডেস্কটপ পর্দায় সব কার্ড লুকিয়ে ফেলে'
        },
        {
          en: 'It changes the font color to green',
          bn: 'এটি লেখার রঙ সবুজ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'row-cols sets column counts on the parent row.',
        bn: 'প্যারেন্ট রো থেকে কলামের সংখ্যা ঠিক করার কথা ভাবুন।'
      },
      explanation: {
        en: 'The row-cols-* utility enables declarative grid child sizing from the parent row, eliminating repetitive column classes.',
        bn: 'row-cols প্যারেন্ট এলিমেন্ট থেকেই প্রতিটি সারিতে কয়টি কার্ড থাকবে তা নিয়ন্ত্রণ করে।'
      }
    },
    {
      id: 'bs-breakpoint-xxl-ex',
      kind: 'mcq',
      topic: 'The new xxl breakpoint introduced in Bootstrap 5',
      question: {
        en: 'What minimum viewport width does the xxl breakpoint tier target in Bootstrap 5?',
        bn: 'বুটস্ট্র্যাপ ৫ সংস্করণে নতুন যুক্ত হওয়া xxl ব্রেকপয়েন্ট কত ন্যূনতম স্ক্রিন প্রস্থকে টার্গেট করে?'
      },
      options: [
        {
          en: '1400 pixels and above',
          bn: '১৪০০ পিক্সেল এবং তদূর্ধ্ব'
        },
        {
          en: '500 pixels',
          bn: '৫০০ পিক্সেল'
        },
        {
          en: '768 pixels',
          bn: '৭৬৮ পিক্সেল'
        },
        {
          en: '3000 pixels',
          bn: '৩০০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bootstrap 5 added xxl at 1400px for large desktop displays.',
        bn: 'বুটস্ট্র্যাপ ৫ সংস্করণে ১৪০০ পিক্সেলের বড় ডিসপ্লের কথা ভাবুন।'
      },
      explanation: {
        en: 'Bootstrap 5 introduced xxl for viewports 1400px and wider, providing a 1320px maximum container width for modern large monitors.',
        bn: 'আধুনিক বড় মনিটরের জন্য বুটস্ট্র্যাপ ৫ সংস্করণে ১৪০০ পিক্সেল ও তদূর্ধ্ব মাপের xxl স্তর এবং ১৩২০ পিক্সেল কন্টেইনার যোগ করা হয়েছে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-measure-of-all-halls',
    title: {
      en: 'Bootstrap Grid System & Breakpoints Quiz',
      bn: 'বুটস্ট্র্যাপ গ্রিড সিস্টেম ও ব্রেকপয়েন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-bs-why-twelve',
        kind: 'mcq',
        topic: 'Why the number 12 is optimal for grid systems',
        question: {
          en: 'Why do modern responsive CSS frameworks universally adopt a 12-column grid rather than a 10-column or 8-column grid?',
          bn: 'আধুনিক সিএসএস ফ্রেমওয়ার্কগুলো ১০ বা ৮ কলামের বদলে কেন সর্বজনীনভাবে ১২-কলামের গ্রিড ব্যবহার করে?'
        },
        options: [
          {
            en: '12 has the most divisors (1, 2, 3, 4, 6, 12), allowing layouts of halves, thirds, quarters, and sixths without fractional pixels',
            bn: '১২ সংখ্যাটিকে ১, ২, ৩, ৪, ৬ দিয়ে ভাগ করা যায়, ফলে অর্ধেক, এক-তৃতীয়াংশ বা এক-চতুর্থাংশ লেআউট ভাঙা ভগ্নাংশ ছাড়াই তৈরি করা যায়'
          },
          {
            en: 'Because computer monitors can only display 12 colors',
            bn: 'কারণ কম্পিউটার মনিটরে কেবল ১২টি রঙ প্রদর্শন করা সম্ভব'
          },
          {
            en: 'Because HTML5 only permits 12 div elements per web page',
            bn: 'কারণ এইচটিএমএল-৫ এ এক পেজে ১২টির বেশি ডিভ রাখা যায় না'
          },
          {
            en: 'To make websites load 12 times faster over internet connections',
            bn: 'ইন্টারনেটে ওয়েবসাইট ১২ গুণ দ্রুত লোড করানোর জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Divisibility by 1, 2, 3, 4, and 6.',
          bn: '১, ২, ৩, ৪ এবং ৬ দিয়ে ভাগ করার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'A 10-column grid cannot divide into thirds (3.33 columns). A 12-column grid accommodates halves (6), thirds (4), and quarters (3) cleanly.',
          bn: '১০ কলামের গ্রিডকে তিন ভাগে ভাগ করা যায় না, কিন্তু ১২ কলামে অর্ধেক (৬), তিন ভাগ (৪) এবং চার ভাগ (৩) নিখুঁতভাবে হয়।'
        }
      },
      {
        id: 'q-bs-gutter-behavior',
        kind: 'mcq',
        topic: 'How row negative margins interact with column gutters',
        question: {
          en: 'Why does placing a .row element outside of a .container cause a horizontal scrollbar on mobile devices?',
          bn: 'মোবাইল ফোনে .row উপাদানটিকে .container-এর বাইরে রাখলে কেন নিচে অনুভূমিক স্ক্রলবার দেখা দেয়?'
        },
        options: [
          {
            en: 'The row applies negative left and right margins to cancel column padding, spilling beyond the viewport edge unless constrained by container padding',
            bn: 'রো-এর দুই পাশে নেগেটিভ মার্জিন থাকে যা কন্টেইনারের প্যাডিং ছাড়া স্ক্রিনের বাইরে উপচে পড়ে স্ক্রলবার তৈরি করে'
          },
          {
            en: 'It triggers a JavaScript runtime error in the browser console',
            bn: 'এটি ব্রাউজারে জাভাস্ক্রিপ্ট ত্রুটি ঘটায়'
          },
          {
            en: 'The browser automatically zooms in by 200 percent',
            bn: 'ব্রাউজার নিজে থেকেই ২০০ শতাংশ জুম করে ফেলে'
          },
          {
            en: 'It converts the web page into a PDF document',
            bn: 'এটি ওয়েব পেজটিকে পিডিএফ ডকুমেন্টে বদলে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Negative margins expand beyond viewport edges.',
          bn: 'নেগেটিভ মার্জিনের কারণে বাইরে উপচে পড়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'A container provides horizontal padding matching the negative margins of the row, keeping the total document width within 100vw.',
          bn: 'কন্টেইনারের দুই পাশের প্যাডিং রো-এর নেগেটিভ মার্জিনকে সুন্দরভাবে আটকে রেখে স্ক্রিন সাইজের ভেতরে রাখে।'
        }
      },
      {
        id: 'q-bs-col-auto-behavior',
        kind: 'mcq',
        topic: 'The behavior of the col-auto layout class',
        question: {
          en: 'How does a column with class col-auto behave compared to a standard col column?',
          bn: 'একটি col-auto ক্লাসের কলাম সাধারণ col ক্লাসের তুলনায় কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'col-auto sizes itself strictly based on the natural width of its inner content, whereas col expands to fill remaining row space equally',
            bn: 'col-auto ভেতরের লেখার আকার অনুযায়ী জায়গা নেয়, আর সাধারণ col সারির বাকি সব খালি জায়গা সমানভাবে ভাগ করে নেয়'
          },
          {
            en: 'col-auto makes the column blink continuously',
            bn: 'col-auto কলামটিকে বারবার অন-অফ করায়'
          },
          {
            en: 'col-auto hides the column on all mobile screens',
            bn: 'col-auto মোবাইলে কলামটিকে লুকিয়ে ফেলে'
          },
          {
            en: 'col-auto forces the column to span 12 rows vertically',
            bn: 'col-auto কলামটিকে লম্বালম্বি ১২ সারিতে প্রসারিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hugging content width versus expanding equally.',
          bn: 'কন্টেন্টের নিজস্ব আকারের সাথে মিল রেখে জায়গা নেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'col-auto uses max-content sizing, making it ideal for buttons, search inputs, and badges placed alongside flexible cards.',
          bn: 'col-auto কন্টেন্টের আকার অনুযায়ী স্থান দখল করে, যা বোতাম বা ইনপুট বক্সের জন্য অত্যন্ত উপযোগী।'
        }
      },
      {
        id: 'q-bs-gutters-customization',
        kind: 'mcq',
        topic: 'Customizing gutter spacing using g-* utility classes',
        question: {
          en: 'Which Bootstrap class removes all horizontal and vertical gutter spacing between columns in a grid row?',
          bn: 'কোন বুটস্ট্র্যাপ ক্লাসটি একটি গ্রিড সারির কলামগুলোর মাঝের সমস্ত অনুভূমিক ও উল্লম্ব ফাঁকা জায়গা (Gutter) মুছে ফেলে?'
        },
        options: [
          {
            en: 'g-0',
            bn: 'g-0'
          },
          {
            en: 'col-none',
            bn: 'col-none'
          },
          {
            en: 'gutter-clear',
            bn: 'gutter-clear'
          },
          {
            en: 'margin-off',
            bn: 'margin-off'
          }
        ],
        answer: 0,
        hint: {
          en: 'g-0 sets horizontal and vertical gutters to zero.',
          bn: 'g-0 দিয়ে গাটার শূন্য করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Applying g-0 sets gx-0 and gy-0, removing all column padding and row margins for a flush, seamless grid.',
          bn: 'g-0 ব্যবহার করলে কলামের সব প্যাডিং ও মার্জিন শূন্য হয়ে কলামগুলো পরস্পরের সাথে লেগে থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'components-on-the-counter',
    tech: 'bootstrap',
    title: {
      en: 'Core UI Components: Buttons, Cards, Badges & Navbars',
      bn: 'মূল ইউআই উপাদান: বোতাম, কার্ড, ব্যাজ ও নেভবার'
    }
  }
};
