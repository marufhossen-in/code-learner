import type { Lesson } from '../../../lib/types';

export const ThePouringGridLesson: Lesson = {
  slug: 'the-pouring-grid',
  tech: 'responsive-design',
  title: {
    en: 'CSS Grid Layouts — auto-fit, minmax(), and Subgrid Architecture',
    bn: 'সিএসএস গ্রিড লেআউট — auto-fit, minmax() এবং সাবগ্রিড আর্কিটেকচার'
  },
  summary: {
    en: 'CSS Grid provides a powerful two-dimensional layout system managing rows and columns simultaneously. In this lesson, we explore how repeat(auto-fit, minmax(18rem, 1fr)) creates self-responsive grids without media queries. We examine the difference between auto-fit and auto-fill, safe fractions with minmax(0, 1fr), and how CSS Subgrid aligns nested card footers perfectly across rows.',
    bn: 'সিএসএস গ্রিড একটি শক্তিশালী দ্বি-মাত্রিক লেআউট ব্যবস্থা যা সারি ও কলাম একসাথে পরিচালনা করে। এই পাঠে আমরা কোনো মিডিয়া কুয়েরি ছাড়াই repeat(auto-fit, minmax(18rem, 1fr)) দিয়ে স্বতঃস্ফূর্ত গ্রিড তৈরি শিখব। আমরা auto-fit ও auto-fill-এর পার্থক্য, minmax(0, 1fr) দিয়ে কলাম ফেটে যাওয়া রোধ এবং সিএসএস সাবগ্রিড দিয়ে কার্ড ফুটার নিখুঁতভাবে সারিবদ্ধ করা বিস্তারিত দেখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'grid-overview',
      text: {
        en: 'Two-Dimensional Power: Grid Layouts',
        bn: 'দ্বি-মাত্রিক ক্ষমতা: গ্রিড লেআউট'
      }
    },
    {
      type: 'visual',
      id: 'grid'
    },
    {
      type: 'para',
      text: {
        en: 'While Flexbox handles items along one direction at a time, CSS Grid positions content across rows and columns simultaneously. By combining repeat(), auto-fit, and minmax(), you can build rich card layouts that reconfigure automatically across screen sizes without writing a single media query.',
        bn: 'ফ্লেক্সবক্স যেখানে একবারে একটি দিক নিয়ন্ত্রণ করে, সিএসএস গ্রিড সেখানে সারি ও কলাম উভয় দিক একসাথে সাজায়। repeat(), auto-fit এবং minmax()-এর সমন্বয়ে কোনো মিডিয়া কুয়েরি ছাড়াই এমন চমৎকার কার্ড লেআউট তৈরি করা যায় যা স্ক্রিনের আকার পরিবর্তনের সাথে সাথে নিজে থেকেই বদলে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'auto-fit',
          def: {
            en: 'A grid repeat keyword that fits as many tracks as possible and collapses empty tracks so items stretch to fill the container.',
            bn: 'গ্রিড রিপিট কিওয়ার্ড যা কন্টেইনারে সর্বোচ্চ সংখ্যক কলাম বসায় এবং ফাঁকা ট্র্যাক ভেঙে উপাদানগুলোকে পুরো জায়গায় প্রসারিত করে।'
          }
        },
        {
          term: 'auto-fill',
          def: {
            en: 'A repeat keyword that reserves ghost empty tracks across the row even when not enough items exist to fill them.',
            bn: 'এমন একটি রিপিট কিওয়ার্ড যা পর্যাপ্ত উপাদান না থাকলেও লাইনের বাকি অংশে খালি ট্র্যাকগুলো সংরক্ষিত রাখে।'
          }
        },
        {
          term: 'minmax(min, max)',
          def: {
            en: 'A CSS grid track sizing function establishing an allowable size range between a strict minimum and flexible maximum.',
            bn: 'একটি সিএসএস গ্রিড ফাংশন যা ট্র্যাকের আকারের জন্য একটি নির্দিষ্ট সর্বনিম্ন এবং স্থিতিস্থাপক সর্বোচ্চ সীমা নির্ধারণ করে।'
          }
        },
        {
          term: 'CSS Subgrid',
          def: {
            en: 'A feature (grid-template-rows: subgrid) allowing nested grid children to adopt the row tracks of their parent grid directly.',
            bn: 'সিএসএস সাবগ্রিড সুবিধা যা ভেতরের চাইল্ড উপাদানকে প্যারেন্ট গ্রিডের সারি ট্র্যাক সরাসরি ধার করে সারিবদ্ধ হতে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'auto-fit-and-fractions',
      text: {
        en: 'The Self-Responsive Formula and Safe Fractions',
        bn: 'স্বতঃস্ফূর্ত রেসপনসিভ ফর্মুলা এবং নিরাপদ ভগ্নাংশ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. The Universal Grid Formula: Write grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); to create a grid that packs 1 column on phones, 2 columns on tablets, and 4 columns on desktops automatically.',
          bn: '১. সার্বজনীন গ্রিড ফর্মুলা: grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); লিখলে মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম এবং ডেস্কটপে নিজে থেকেই ৪ কলাম তৈরি হয়।'
        },
        {
          en: '2. auto-fit vs auto-fill: When only 2 cards exist in a 4-column space, auto-fit expands the 2 cards to fill the entire row, whereas auto-fill leaves the remaining 2 spaces as empty slots.',
          bn: '২. auto-fit বনাম auto-fill: ৪ কলামের খালি জায়গায় মাত্র ২টি কার্ড থাকলে auto-fit কার্ড দুটোকে পুরো লাইনে ছড়িয়ে দেয়, আর auto-fill বাকি ২টি স্থান খালি রেখে দেয়।'
        },
        {
          en: '3. The Bare 1fr Trap: Bare 1fr tracks have a default minimum of minmax(auto, 1fr). A single long word or wide preformatted text element will blow out the track width. Use minmax(0, 1fr) to guarantee safety.',
          bn: '৩. সাধারণ 1fr-এর ঝুঁকি: সাধারণ 1fr ট্র্যাকে ডিফল্টভাবে auto মিনিমাম থাকে। কোনো লম্বা শব্দ থাকলে কলামটি ফেটে বাইরে চলে যায়। এর বদলে minmax(0, 1fr) ব্যবহার নিরাপদ।'
        },
        {
          en: '4. Subgrid for Card Alignment: In a row of cards with differing text lengths, setting grid-template-rows: subgrid; ensures all card buttons line up in a shared horizontal row along the bottom.',
          bn: '৪. কার্ড মেলাতে সাবগ্রিড: বিভিন্ন কার্ডে লেখার পরিমাণ কম-বেশি হলেও grid-template-rows: subgrid; ব্যবহার করলে সব কার্ডের নিচের বাটনগুলো হুবহু একই সমান্তরালে থাকে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Self-Responsive Grid with Subgrid',
        bn: 'সাবগ্রিডসহ স্বতঃস্ফূর্ত গ্রিডের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `/* 1. Self-responsive parent grid without media queries */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 20px;
}

/* 2. Card using subgrid along rows */
.gallery-card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
  background: white;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding: 16px;
}

.gallery-card h3 { margin: 0; }
.gallery-card p { color: #64748b; line-height: 1.5; }
.gallery-card button { align-self: end; padding: 8px 16px; }

// 3. Inspect grid track count calculation in JavaScript
const container = document.createElement('div');
container.className = 'gallery-grid';
container.style.display = 'grid';

console.log('Grid container active:', container.style.display === 'grid');
// -> Grid container active: true`,
      caption: {
        en: 'Configuring a responsive grid with 16rem minimum column width and 3-row subgrid spans',
        bn: '১৬rem সর্বনিম্ন কলাম প্রস্থ ও ৩ সারির সাবগ্রিড স্প্যান সহ রেসপনসিভ গ্রিড তৈরি করা'
      }
    },
    {
      type: 'heading',
      id: 'grid-areas-reconfiguration',
      text: {
        en: 'Responsive Layouts with grid-template-areas',
        bn: 'grid-template-areas দিয়ে রেসপনসিভ লেআউট রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Named grid areas make high-level page restructuring readable and intuitive. Mobile layouts stack all areas into a single column, while tablet and desktop media queries reshape the ascii layout blueprint without altering HTML markup.',
        bn: 'নামযুক্ত গ্রিড এরিয়া পুরো পেজের লেআউট পরিবর্তন করাকে অত্যন্ত সহজ ও পাঠযোগ্য করে তোলে। মোবাইলে সমস্ত এরিয়া একক কলামে পরপর সাজানো থাকে, আর ডেস্কটপ মিডিয়া কুয়েরিতে এইচটিএমএল পরিবর্তন না করেই চমৎকার মাল্টি-কলাম ব্লুপ্রিন্ট তৈরি করা যায়।'
      }
    },
    {
      type: 'compare',
      left: {
        title: {
          en: 'Mobile Stacked Blueprint',
          bn: 'মোবাইল একক কলাম ব্লুপ্রিন্ট'
        },
        points: [
          {
            en: 'grid-template-areas: "head" "nav" "main" "foot";',
            bn: 'সিএসএস কোড: grid-template-areas: "head" "nav" "main" "foot";'
          },
          {
            en: 'All areas stack sequentially down a single vertical column.',
            bn: 'সমস্ত অংশ একটিমাত্র উলম্ব কলামে ক্রমানুসারে সাজানো থাকে।'
          },
          {
            en: 'Guarantees comfortable reading on narrow 360px smartphone viewports.',
            bn: '৩৬০px মোবাইলে সহজে পড়ার উপযুক্ত পরিবেশ নিশ্চিত করে।'
          },
          {
            en: 'No horizontal scrolling or squeezed multi-column navigation bars.',
            bn: 'কোনো অনুভূমিক স্ক্রল বা চ্যাপ্টা ন্যাভিগেশন বার তৈরি হয় না।'
          }
        ]
      },
      right: {
        title: {
          en: 'Desktop Multi-Column Blueprint',
          bn: 'ডেস্কটপ মাল্টি-কলাম ব্লুপ্রিন্ট'
        },
        points: [
          {
            en: 'grid-template-areas: "head head" "nav main" "foot foot";',
            bn: 'সিএসএস কোড: grid-template-areas: "head head" "nav main" "foot foot";'
          },
          {
            en: 'Sidebar and main content sit side by side in parallel columns.',
            bn: 'সাইডবার এবং মূল বিষয়বস্তু পাশাপাশি দুটি কলামে অবস্থান করে।'
          },
          {
            en: 'Header and footer span across all columns using repeated names.',
            bn: 'একই নাম বারবার লিখে হেডার ও ফুটার পুরো চওড়া জুড়ে বিস্তৃত হয়।'
          },
          {
            en: 'Activated cleanly using @media (width >= 48em).',
            bn: '@media (width >= 48em) দিয়ে সহজে সক্রিয় করা যায়।'
          }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'rd-gr-ex1',
      kind: 'mcq',
      topic: 'auto-fit vs auto-fill behavior',
      question: {
        en: 'What is the primary difference between repeat(auto-fit, ...) and repeat(auto-fill, ...)?',
        bn: 'repeat(auto-fit, ...) এবং repeat(auto-fill, ...)-এর মধ্যকার প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'auto-fit collapses empty unused tracks so existing items expand to fill the row, while auto-fill preserves empty tracks',
          bn: 'auto-fit খালি ট্র্যাকগুলো ভেঙে দেয় যাতে বিদ্যমান উপাদানগুলো পুরো লাইনে ছড়িয়ে পড়ে, আর auto-fill খালি ট্র্যাক রেখে দেয়'
        },
        {
          en: 'auto-fit only works with images, while auto-fill only works with text',
          bn: 'auto-fit শুধু ছবিতে কাজ করে, আর auto-fill শুধু টেক্সটে কাজ করে'
        },
        {
          en: 'auto-fill is an obsolete vendor-prefixed feature removed from standards',
          bn: 'auto-fill একটি বাতিল হওয়া পুরোনো ফিচার যা স্ট্যান্ডার্ড থেকে বাদ দেওয়া হয়েছে'
        },
        {
          en: 'auto-fit limits the maximum number of items on a page to 10',
          bn: 'auto-fit পেজে আইটেমের সংখ্যা সর্বোচ্চ ১০টিতে সীমাবদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'auto-fit stretches content to consume empty room across the row.',
        bn: 'auto-fit ফাঁকা জায়গা ভরাট করতে কন্টেন্টকে প্রসারিত করে।'
      },
      explanation: {
        en: 'auto-fit collapses any tracks that contain no grid items to zero size, allowing items with 1fr maximums to stretch across the full width. auto-fill keeps empty ghost tracks open.',
        bn: 'auto-fit খালি কলামগুলোকে ভেঙে শূন্য করে দেয়, যার ফলে বাকি উপাদানগুলো সম্পূর্ণ প্রস্থ দখল করে নেয়। auto-fill খালি কলামের স্থানটি ফাঁকা রেখে দেয়।'
      }
    },
    {
      id: 'rd-gr-ex2',
      kind: 'mcq',
      topic: 'minmax zero fr safety',
      question: {
        en: 'Why is minmax(0, 1fr) safer than bare 1fr for responsive grid columns containing code blocks or preformatted text?',
        bn: 'কোড ব্লক বা টেক্সটযুক্ত রেসপনসিভ কলামের জন্য সাধারণ 1fr-এর চেয়ে minmax(0, 1fr) কেন বেশি নিরাপদ?'
      },
      options: [
        {
          en: 'Bare 1fr defaults to minmax(auto, 1fr), which refuses to shrink below long content, while minmax(0, 1fr) permits shrinking and prevents overflow',
          bn: 'সাধারণ 1fr-এ ডিফল্টভাবে auto মিনিমাম থাকে যা বড় লেখার চেয়ে ছোট হতে পারে না, আর minmax(0, 1fr) সংকোচন হতে দেয়'
        },
        {
          en: 'minmax(0, 1fr) executes directly on the browser C++ hardware rendering thread',
          bn: 'minmax(0, 1fr) সরাসরি ব্রাউজারের হার্ডওয়্যার রেন্ডারিং থ্রেডে চলে'
        },
        {
          en: 'Bare 1fr triggers an automatic HTTP page refresh every 60 seconds',
          bn: 'সাধারণ 1fr প্রতি ৬০ সেকেন্ড পর পর পেজ রিফ্রেশ করে ফেলে'
        },
        {
          en: 'minmax(0, 1fr) converts text characters into hexadecimal UTF-16 strings',
          bn: 'minmax(0, 1fr) টেক্সটকে হেক্সাডেসিমেল স্ট্রিংয়ে রূপান্তরিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The default minimum of a grid track is content-sized (auto).',
        bn: 'গ্রিড ট্র্যাকের ডিফল্ট সর্বনিম্ন আকার লেখার আকারের ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Because grid tracks have an automatic minimum size of auto, a pre tag with a long line causes a bare 1fr column to widen past the screen. Explicitly setting a floor of 0 with minmax(0, 1fr) prevents this blowout.',
        bn: 'ডিফল্ট auto মিনিমামের কারণে কোনো লম্বা কোড লাইন থাকলে সাধারণ 1fr কলাম পুরো স্ক্রিন ফাটিয়ে বাইরে চলে যায়। minmax(0, 1fr) দিলে কলামটি সীমার ভেতর আটকে থাকে।'
      }
    },
    {
      id: 'rd-gr-ex3',
      kind: 'mcq',
      topic: 'subgrid core capability',
      question: {
        en: 'What unique layout problem does CSS Subgrid solve in responsive card grids?',
        bn: 'রেসপনসিভ কার্ড গ্রিডে সিএসএস সাবগ্রিড কোন অনন্য লেআউট সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It enables nested child elements (like headers and buttons) to align across different cards regardless of variations in body text height',
          bn: 'বডি টেক্সটের উচ্চতা কম-বেশি হলেও বিভিন্ন কার্ডের ভেতরের হেডার ও বাটনগুলোকে একে অপরের সাথে নিখুঁতভাবে মেলায়'
        },
        {
          en: 'It downloads video files asynchronously using Web Workers',
          bn: 'এটি ওয়েব ওয়ার্কার ব্যবহার করে ভিডিও ফাইল ডাউনলোড করে'
        },
        {
          en: 'It automatically translates English headings into foreign languages',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ইংরেজি শিরোনামগুলোকে অন্য ভাষায় অনুবাদ করে'
        },
        {
          en: 'It converts grid layouts into PDF printable documents',
          bn: 'এটি গ্রিড লেআউটকে প্রিন্ট উপযোগী পিডিএফ ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Subgrid inherits row tracks from the parent grid container.',
        bn: 'সাবগ্রিড মূল পেরেন্ট গ্রিড থেকে সরাসরি রো ট্র্যাক গ্রহণ করে।'
      },
      explanation: {
        en: 'Without subgrid, each card has an independent internal layout, causing action buttons to misalign when descriptions differ in length. With subgrid, all cards share the parent row tracks.',
        bn: 'সাবগ্রিড ছাড়া কার্ডগুলোতে লেখার পরিমাণ ভিন্ন হলে বাটনগুলো এলোমেলো হয়ে যায়। সাবগ্রিড থাকলে সমস্ত কার্ড প্যারেন্টের সারি ট্র্যাক ভাগ করে নেয়, ফলে সব বাটন সমান লাইনে থাকে।'
      }
    },
    {
      id: 'rd-gr-ex4',
      kind: 'mcq',
      topic: 'grid gap responsiveness',
      question: {
        en: 'How does the CSS gap property simplify responsive grid and flexbox design compared to legacy margins?',
        bn: 'পুরোনো মার্জিনের তুলনায় সিএসএস gap প্রোপার্টি কীভাবে রেসপনসিভ গ্রিড ও ফ্লেক্সবক্স ডিজাইনকে সহজ করে?'
      },
      options: [
        {
          en: 'gap places spacing strictly between grid cells without adding unwanted margins to outer perimeter edges or requiring negative margins on wrappers',
          bn: 'gap শুধুমাত্র ভেতরের সেলগুলোর মাঝে ফাঁকা স্থান তৈরি করে এবং বাইরের কিনারায় কোনো বাড়তি মার্জিন যোগ করে না'
        },
        {
          en: 'gap increases website loading speed by 50% across mobile devices',
          bn: 'gap মোবাইল ডিভাইসে ওয়েবসাইট লোড হওয়ার গতি ৫০% বৃদ্ধি করে'
        },
        {
          en: 'gap automatically formats dates and times to user local timezones',
          bn: 'gap স্বয়ংক্রিয়ভাবে সময় ও তারিখকে ব্যবহারকারীর টাইমজোনে সাজিয়ে নেয়'
        },
        {
          en: 'gap is only available inside SVG canvas drawing elements',
          bn: 'gap শুধুমাত্র এসভিজি ক্যানভাসের ভেতরে ব্যবহারের জন্য প্রযোজ্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Gaps apply only between items, leaving outer borders pristine.',
        bn: 'গ্যাপ কেবল উপাদানগুলোর নিজেদের মাঝে থাকে, বাইরের বর্ডারে কোনো বাড়তি মার্জিন দেয় না।'
      },
      explanation: {
        en: 'Legacy techniques relied on margin with negative margins on parents to counteract outer spacing. gap applies gutter spacing exclusively between adjacent items.',
        bn: 'পুরোনো দিনে মার্জিন ঠিক করতে পেরেন্টে নেগেটিভ মার্জিনের মতো জটিল কৌশল লাগত। gap কোনো পার্শ্বপ্রতিক্রিয়া ছাড়া শুধু ভেতরের উপাদানগুলোর মাঝে পরিষ্কার ফাঁকা জায়গা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'pouring-grid-quiz',
    title: {
      en: 'CSS Grid & Responsive Tracks Quiz',
      bn: 'সিএসএস গ্রিড এবং রেসপনসিভ ট্র্যাক কুইজ'
    },
    questions: [
      {
        id: 'q-grid-fraction-math',
        kind: 'mcq',
        topic: 'fr unit space calculation',
        question: {
          en: 'In a grid with grid-template-columns: 200px 1fr 2fr; in a 800px container with 0 gap, how wide is the 2fr track?',
          bn: '৮০০px কন্টেইনারে (০ গ্যাপ) grid-template-columns: 200px 1fr 2fr; থাকলে 2fr ট্র্যাকটির প্রস্থ কত হবে?'
        },
        options: [
          {
            en: '400px (800px minus 200px leaves 600px; 2fr takes two-thirds of 600px)',
            bn: '৪০০px (৮০০px থেকে ২০০px বাদ দিলে থাকে ৬০০px; 2fr পায় ৬০০px-এর তিন ভাগের দুই ভাগ)'
          },
          {
            en: '200px',
            bn: '২০০px'
          },
          {
            en: '600px',
            bn: '৬০০px'
          },
          {
            en: '300px',
            bn: '৩০০px'
          }
        ],
        answer: 0,
        hint: {
          en: 'Subtract fixed pixel widths first, then divide remaining space by total fractions (1 + 2 = 3).',
          bn: 'আগে ফিক্সড পিক্সেল বাদ দিন, এরপর অবশিষ্ট স্থান মোট ভগ্নাংশ (১ + ২ = ৩) দিয়ে ভাগ করুন।'
        },
        explanation: {
          en: 'The fixed 200px leaves 600px of free space. Dividing 600px by 3 total fractions yields 200px per fr. Therefore, 2fr equals 400px.',
          bn: '৮০০px থেকে ফিক্সড ২০০px বাদ দিলে ৬০০px থাকে। মোট ৩টি ভাগের মাঝে ১ ভাগ হলো ২০০px। ফলে ২ ভাগের মান হয় ৪০০px।'
        }
      },
      {
        id: 'q-grid-area-naming-dots',
        kind: 'mcq',
        topic: 'grid-template-areas empty cell syntax',
        question: {
          en: 'In grid-template-areas, what does a period symbol (.) represent in the row string?',
          bn: 'grid-template-areas-এর রো স্ট্রিংয়ে একটি ডট বা ফুলস্টপ (.) চিহ্ন কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'An empty, unassigned grid cell left blank in the layout',
            bn: 'একটি খালি বা ফাঁকা গ্রিড সেল যেখানে কোনো উপাদান অ্যাসাইন করা হয়নি'
          },
          {
            en: 'A syntax error that halts the CSS parser',
            bn: 'একটি সিনট্যাক্স এরর যা সিএসএস পার্সারকে থামিয়ে দেয়'
          },
          {
            en: 'An automatic full-width header spanning all columns',
            bn: 'সমস্ত কলাম জুড়ে বিস্তৃত একটি স্বয়ংক্রিয় ফুল-উইডথ হেডার'
          },
          {
            en: 'A special dot matrix printer formatting style',
            bn: 'ডট ম্যাট্রিক্স প্রিন্টারের জন্য একটি বিশেষ প্রিন্টিং স্টাইল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A period denotes an intentionally vacant cell.',
          bn: 'ডট চিহ্ন দিয়ে লেআউটে ইচ্ছাকৃতভাবে কোনো সেল ফাঁকা রাখা বোঝায়।'
        },
        explanation: {
          en: 'The CSS Grid specification defines a period (.) or sequence of periods (...) as an empty cell in grid-template-areas, enabling intentional negative space in blueprints.',
          bn: 'সিএসএস গ্রিড স্পেসিফিকেশন অনুযায়ী ডট (.) চিহ্ন দিয়ে কোনো সেলকে ফাঁকা রাখা যায়, যা ডিজাইনে ফাঁকা স্থান তৈরিতে কাজে লাগে।'
        }
      },
      {
        id: 'q-subgrid-browser-support',
        kind: 'mcq',
        topic: 'subgrid support in modern browsers',
        question: {
          en: 'What is the current baseline browser support status of CSS Subgrid across Chrome, Edge, Firefox, and Safari?',
          bn: 'ক্রোম, এজ, ফায়ারফক্স এবং সাফারিতে সিএসএস সাবগ্রিডের বর্তমান সাপোর্ট স্ট্যাটাস কী?'
        },
        options: [
          {
            en: 'Universally supported across all major modern browser engines (part of Baseline Widely Available)',
            bn: 'সকল প্রধান আধুনিক ব্রাউজার ইঞ্জিনে সার্বজনীনভাবে সমর্থিত (বেসলাইন স্ট্যান্ডার্ডের অংশ)'
          },
          {
            en: 'Only supported in Firefox nightly experimental developer builds',
            bn: 'শুধুমাত্র ফায়ারফক্স নাইটলির পরীক্ষামূলক ডেভ বিল্ডে সমর্থিত'
          },
          {
            en: 'Deprecated and replaced by native HTML tables in 2025',
            bn: '২০২৫ সালে বাতিল করে সাধারণ এইচটিএমএল টেবিল দিয়ে প্রতিস্থাপন করা হয়েছে'
          },
          {
            en: 'Supported exclusively on desktop operating systems',
            bn: 'শুধুমাত্র ডেস্কটপ অপারেটিং সিস্টেমে সমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Subgrid achieved full cross-browser interoperability across all modern evergreen engines.',
          bn: 'সাবগ্রিড বর্তমানে সকল আধুনিক ব্রাউজারে পূর্ণ সমর্থন লাভ করেছে।'
        },
        explanation: {
          en: 'CSS Subgrid is part of modern web Baseline, supported in Chromium (Chrome/Edge), Gecko (Firefox), and WebKit (Safari) across both mobile and desktop platforms.',
          bn: 'সিএসএস সাবগ্রিড এখন আধুনিক ওয়েব বেসলাইনের অংশ। ক্রোম, এজ, ফায়ারফক্স ও সাফারি সব ব্রাউজারেই এটি সমান দক্ষতার সাথে কাজ করে।'
        }
      },
      {
        id: 'q-grid-vs-flexbox-choice',
        kind: 'mcq',
        topic: 'when to choose grid over flexbox',
        question: {
          en: 'What architectural requirement makes CSS Grid clearly superior to CSS Flexbox for a layout?',
          bn: 'কোন আর্কিটেকচারাল প্রয়োজনে সিএসএস ফ্লেক্সবক্সের চেয়ে সিএসএস গ্রিড বেছে নেওয়া স্পষ্টতই শ্রেয়?'
        },
        options: [
          {
            en: 'When items must strictly align along both horizontal and vertical axes simultaneously (two-dimensional grid structure)',
            bn: 'যখন উপাদানগুলোকে একসাথে অনুভূমিক ও উলম্ব উভয় দিক থেকেই সারিবদ্ধ রাখতে হয় (দ্বি-মাত্রিক গ্রিড গঠন)'
          },
          {
            en: 'When rendering a simple row of circular social media avatar icons',
            bn: 'সোশ্যাল মিডিয়ার গোল আইকনগুলোকে সাধারণ এক সারিতে সাজানোর সময়'
          },
          {
            en: 'When centering a single paragraph of text inside a banner',
            bn: 'একটি ব্যানারের মাঝখানে একক প্যারাগ্রাফ টেক্সট সেন্টারে রাখার সময়'
          },
          {
            en: 'When creating an inline breadcrumb navigation trail',
            bn: 'ওয়েবসাইটের ইনলাইন ব্রেডক্রাম্ব ন্যাভিগেশন লিংক তৈরির সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Grid manages 2 dimensions (rows and columns); Flexbox manages 1 dimension.',
          bn: 'গ্রিড ২ দিক (সারি ও কলাম) নিয়ন্ত্রণ করে, আর ফ্লেক্সবক্স ১ দিক নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'Flexbox is designed for 1-dimensional item flows where content sizes dictate wrapping. Grid is designed for 2-dimensional coordinate layouts where rows and columns must rigidly correspond.',
          bn: 'ফ্লেক্সবক্স একমুখী প্রবাহের জন্য চমৎকার। কিন্তু যখন পাশাপাশি এবং উপর-নিচ উভয় দিক থেকেই কলাম ও সারির নিখুঁত সামঞ্জস্য দরকার হয়, তখন গ্রিড ব্যবহার করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'pictures-that-fit',
    title: {
      en: 'Responsive Images & Media — <picture>, srcset, and Art Direction',
      bn: 'রেসপনসিভ ইমেজ ও মিডিয়া — <picture>, srcset এবং আর্ট ডিরেকশন'
    }
  }
};
