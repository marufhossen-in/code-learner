import type { Lesson } from '../../../lib/types';

export const fittingRoomsLesson: Lesson = {
  slug: 'the-fitting-rooms',
  tech: 'tailwind',
  title: {
    en: 'Responsive Design & Modern Layouts — Mobile-First Breakpoints, Flexbox & CSS Grid',
    bn: 'রেসপন্সিভ ডিজাইন ও আধুনিক লেআউট — মোবাইল-ফার্স্ট ব্রেকপয়েন্ট, ফ্লেক্সবক্স ও গ্রিড'
  },
  summary: {
    en: 'Responsive web design in Tailwind CSS is governed by a strict mobile-first architecture where unprefixed utility classes define base styles for narrow mobile viewports. Breakpoint prefixes—sm at 640px, md at 768px, lg at 1024px, xl at 1280px, and 2xl at 1536px—translate into min-width CSS media queries that progressively enhance layouts as the display expands. Combined with modern Flexbox and CSS Grid utilities, developers easily construct fluid multi-column dashboards, collapsible navigation drawers, and auto-fitting card arrangements without writing custom media query stylesheets. Modern container queries further decouple components from window dimensions, resizing widgets based on their parent container width.',
    bn: 'Tailwind CSS-এ রেসপন্সিভ ওয়েব ডিজাইন একটি কঠোর মোবাইল-ফার্স্ট কাঠামোর ওপর প্রতিষ্ঠিত যেখানে প্রিফিক্সহীন ক্লাসগুলো ছোট মোবাইল স্ক্রিনের মূল স্টাইল নির্ধারণ করে। এর ব্রেকপয়েন্ট প্রিফিক্সগুলো—sm (৬৪০px), md (৭৬৮px), lg (১০২৪px), xl (১২৮০px) এবং 2xl (১৫৩৬px)—মূলত min-width মিডিয়া কোয়েরিতে রূপান্তরিত হয় যা স্ক্রিনের আকার বাড়ার সাথে সাথে লেআউটকে উন্নত করে। আধুনিক ফ্লেক্সবক্স এবং সিএসএস গ্রিড ইউটিলিটির সমন্বয়ে কোনো কাস্টম মিডিয়া কোয়েরি ছাড়াই বহু-কলামের ড্যাশবোর্ড ও রেসপন্সিভ কার্ড গ্রিড অনায়াসে তৈরি করা যায়। আধুনিক কন্টেইনার কোয়েরি কম্পোনেন্টকে ব্রাউজার উইন্ডোর বদলে প্যারেন্ট কন্টেইনারের প্রস্থ অনুযায়ী পরিবর্তন করার দুর্দান্ত স্বাধীনতা দেয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Mobile-First Responsive Doctrine',
        bn: 'মূল ধারণা: মোবাইল-ফার্স্ট রেসপন্সিভ নীতি'
      }
    },
    {
      type: 'visual',
      id: 'flexbox'
    },
    {
      type: 'para',
      text: {
        en: 'When you build responsive websites across diverse mobile, tablet, and desktop screens, designing for mobile devices first produces cleaner layouts with zero redundant CSS overrides. Desktop-first media queries force developers to build complex desktop interfaces and then clumsily undo them using max-width rules. Tailwind CSS enforces a mobile-first philosophy where unprefixed classes dress the smallest phone screen, and prefixes like sm:, md:, and lg: progressively enhance the interface as viewport width expands.',
        bn: 'যখন আপনি মোবাইল, ট্যাবলেট ও ডেস্কটপ ডিভাইসের উপযোগী রেসপন্সিভ ওয়েবসাইট তৈরি করেন, তখন প্রথমে মোবাইলের জন্য ডিজাইন করলে অপ্রয়োজনীয় কোড এড়ানো সম্ভব হয়। ডেস্কটপ-ফার্স্ট পদ্ধতিতে প্রথমে বড় স্ক্রিনের জন্য জটিল কোড লিখে পরে max-width দিয়ে তা একের পর এক বাতিল করতে হয়। Tailwind CSS একটি সুশৃঙ্খল মোবাইল-ফার্স্ট দর্শন নিশ্চিত করে যেখানে সাধারণ প্রিফিক্সহীন ক্লাসগুলো ছোট ফোনের জন্য প্রযোজ্য হয়, এবং sm:, md: ও lg:-এর মতো প্রিফিক্সগুলো স্ক্রিন বড় হওয়ার সাথে সাথে লেআউটে নতুন বৈশিষ্ট্য যোগ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Mobile-First min-width Queries',
          def: {
            en: 'The architectural pattern where base CSS applies to all viewports, while breakpoint prefixes introduce additions as screen width exceeds specific thresholds',
            bn: 'এমন আর্কিটেকচার যেখানে বেস সিএসএস সবার জন্য কার্যকর থাকে এবং স্ক্রিন বড় হলে প্রিফিক্সগুলো নতুন স্টাইল যুক্ত করে'
          }
        },
        {
          term: 'Breakpoint Chamber',
          def: {
            en: 'Calibrated pixel thresholds: sm (640px), md (768px), lg (1024px), xl (1280px), and 2xl (1536px) triggering layout expansions',
            bn: 'স্ক্রিনের নির্দিষ্ট পিক্সেল মাপ: sm (৬৪০px), md (৭৬৮px), lg (১০২৪px), xl (১২৮০px) ও 2xl (১৫৩৬px) যা লেআউটের রূপান্তর ঘটায়'
          }
        },
        {
          term: 'Flexbox Alignment Utilities',
          def: {
            en: 'One-dimensional layout utilities such as flex, flex-col, items-center, and justify-between orchestrating rows and columns',
            bn: 'একমাত্রিক লেআউট ক্লাস যেমন flex, flex-col, items-center ও justify-between যা উপাদানগুলোকে সুন্দরভাবে সাজায়'
          }
        },
        {
          term: 'CSS Grid Matrix Utilities',
          def: {
            en: 'Two-dimensional grid utilities such as grid, grid-cols-1, md:grid-cols-3, and col-span-2 managing rows and columns simultaneously',
            bn: 'দ্বিমাত্রিক গ্রিড ক্লাস যেমন grid, grid-cols-1, md:grid-cols-3 ও col-span-2 যা রো এবং কলাম একসাথে নিয়ন্ত্রণ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'mobile-first-mechanics',
      text: {
        en: 'Why Mobile-First Beats Desktop-First Overrides',
        bn: 'কেন ডেস্কটপ-ফার্স্টের চেয়ে মোবাইল-ফার্স্ট শ্রেয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In legacy desktop-first styling, developers wrote multi-column layouts and later added media queries with max-width: 768px to dismantle the grid, reset margins, and unfloat elements. This approach wastes bandwidth and mental energy overriding your own previously declared rules.',
        bn: 'পুরোনো ডেস্কটপ-ফার্স্ট পদ্ধতিতে ডেভেলপাররা প্রথমে জটিল গ্রিড বানাতেন এবং পরে max-width: 768px মিডিয়া কোয়েরি দিয়ে সেই গ্রিড ভেঙে সাধারণ কলামে নামিয়ে আনতেন। এতে নিজের লেখা কোড নিজেই কাটতে হতো, যা সময় ও ব্যান্ডউইথ উভয়েরই অপচয় ঘটায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind flips this dynamic using min-width rules. Writing class="w-full md:w-1/2 lg:w-1/3" reads as an additive progression: the element spans full width on mobile, resizes to half width on tablets (768px and up), and narrows to one-third on desktop monitors (1024px and up). Each breakpoint only introduces additions, never undoing prior rules.',
        bn: 'Tailwind এই জটিলতা উল্টে দিয়ে min-width ব্যবহার করে। class="w-full md:w-1/2 lg:w-1/3" লিখলে তা ধাপে ধাপে মানানসই হয়: মোবাইলে পুরো প্রস্থ জুড়ে থাকে, ট্যাবলেটে (৭৬৮px থেকে) অর্ধেক হয় এবং ডেস্কটপে (১০২৪px থেকে) এক-তৃতীয়াংশ হয়। প্রতিটি ধাপ কেবল নতুন সুবিধা যোগ করে, পুরোনো নিয়ম বাতিল করে না।'
      }
    },
    {
      type: 'heading',
      id: 'flexbox-grid',
      text: {
        en: 'Orchestrating Complex Layouts: Flexbox and Grid',
        bn: 'জটিল লেআউট সংগঠন: ফ্লেক্সবক্স ও গ্রিড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For one-dimensional item alignment—like navigation bars or button groups—Flexbox provides unmatched precision. Declaring flex items-center justify-between gap-4 vertically aligns children along the cross-axis while distributing space along the main axis. Switching direction on responsive screens is seamless with flex-col md:flex-row.',
        bn: 'একমাত্রিক বিন্যাসের জন্য—যেমন নেভিগেশন বার বা বাটন গ্রুপ—ফ্লেক্সবক্স অতুলনীয়। flex items-center justify-between gap-4 লিখলে উপাদানগুলো লম্বালম্বিভাবে মাঝখানে বসে এবং সমান দূরত্বে ছড়িয়ে যায়। মোবাইলে নিচে নিচে এবং কম্পিউটারে পাশাপাশি দেখাতে flex-col md:flex-row ব্যবহার করলেই যথেষ্ট।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For two-dimensional dashboard interfaces and product cards, CSS Grid delivers robust multi-column structures. Using grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 automatically generates a single-column layout on phones, a two-column layout on tablets, and a four-column grid on desktops, all without custom media query files.',
        bn: 'দ্বিমাত্রিক ইন্টারফেস ও প্রোডাক্ট কার্ড সাজাতে সিএসএস গ্রিড চমৎকার কাঠামো উপহার দেয়। grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 লিখলে ফোনে ১টি কলাম, ট্যাবলেটে ২টি কলাম এবং ল্যাপটপে ৪টি কলামের স্বয়ংক্রিয় লেআউট তৈরি হয় কোনো বাড়তি ফাইল ছাড়াই।'
      }
    },
    {
      type: 'heading',
      id: 'container-queries',
      text: {
        en: 'Container Queries: Component-Relative Responsiveness',
        bn: 'কন্টেইনার কোয়েরি: কম্পোনেন্ট-আপেক্ষিক রেসপন্সিভ ডিজাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional media queries check the browser viewport width, which causes bugs when a responsive card is dropped into a narrow 300px sidebar on a wide 4K screen. The card mistakenly thinks it has plenty of space and overflows.',
        bn: 'সাধারণ মিডিয়া কোয়েরি পুরো ব্রাউজার উইন্ডোর প্রস্থ পরিমাপ করে। এর ফলে ৪কে মনিটরের ৩০০ পিক্সেল সরু সাইডবারে কোনো কার্ড বসালে কার্ডটি বড় স্ক্রিন ভেবে ভেঙেচুরে উপচে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Container queries solve this by measuring the immediate parent element rather than the window. By marking a container with the @container class, child elements apply responsive variants based on the parent width: @sm:flex-row @lg:grid-cols-3. If the card lives in a narrow sidebar, it stays in mobile form factor regardless of monitor size.',
        bn: 'কন্টেইনার কোয়েরি ব্রাউজারের বদলে সরাসরি প্যারেন্ট এলিমেন্টের প্রস্থ মেপে এই সমাধান দেয়। প্যারেন্টে @container ক্লাস দিলে সন্তান উপাদানগুলো প্যারেন্টের আকার অনুযায়ী নিজেদের মানিয়ে নেয়: @sm:flex-row @lg:grid-cols-3। ফলে সরু সাইডবারে কার্ডটি সবসময় মোবাইল রূপেই সুন্দরভাবে থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Modern Layout Systems',
        bn: 'কাঠামোগত তুলনা: আধুনিক লেআউট ব্যবস্থা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Layout System', bn: 'লেআউট ব্যবস্থা' },
        { en: 'Primary Dimensionality', bn: 'মূল মাত্রা' },
        { en: 'Best Use Case', bn: 'উপযুক্ত ক্ষেত্র' },
        { en: 'Key Tailwind Classes', bn: 'প্রধান টেইলউইন্ড ক্লাস' }
      ],
      rows: [
        [
          { en: 'CSS Flexbox', bn: 'সিএসএস ফ্লেক্সবক্স' },
          { en: 'One-dimensional (either row OR column)', bn: 'একমাত্রিক (হয় রো অথবা কলাম)' },
          { en: 'Navigation headers, button toolbars, centered cards', bn: 'হেডার মেনু, বাটন টুলবার ও কার্ডের উপাদান সাজাতে' },
          { en: 'flex, flex-col, items-center, justify-between, gap-4', bn: 'flex, flex-col, items-center, justify-between, gap-4' }
        ],
        [
          { en: 'CSS Grid', bn: 'সিএসএস গ্রিড' },
          { en: 'Two-dimensional (rows AND columns simultaneously)', bn: 'দ্বিমাত্রিক (একসাথে রো এবং কলাম উভয়ই)' },
          { en: 'E-commerce product grids, dashboard widget panels', bn: 'ই-কমার্স প্রোডাক্ট তালিকা ও ড্যাশবোর্ড প্যানেল' },
          { en: 'grid, grid-cols-1, md:grid-cols-3, col-span-2, gap-6', bn: 'grid, grid-cols-1, md:grid-cols-3, col-span-2, gap-6' }
        ],
        [
          { en: 'Container Queries', bn: 'কন্টেইনার কোয়েরি' },
          { en: 'Parent element width rather than screen viewport', bn: 'ব্রাউজারের বদলে প্যারেন্ট এলিমেন্টের প্রস্থ' },
          { en: 'Portable reusable widgets inside sidebars and modals', bn: 'সাইডবার বা মোডালের ভেতরে পুনর্ব্যবহারযোগ্য উইজেট' },
          { en: '@container, @sm:flex-row, @md:grid-cols-2', bn: '@container, @sm:flex-row, @md:grid-cols-2' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Responsive Breakpoint Resolver',
        bn: 'বাস্তব কোড সিমুলেশন: রেসপন্সিভ ব্রেকপয়েন্ট রেজলভার'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind Mobile-First Breakpoints & Grid in Node.js

class ResponsiveResolver {
  public breakpoints: Record<string, number> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  // Evaluates which grid-cols utility is active for a given screen width
  resolveGridCols(classList: string, viewportWidth: number) {
    const tokens = classList.split(/\\s+/).filter(Boolean);
    let activeCols = 1; // Base default (mobile-first)

    for (const token of tokens) {
      if (token.startsWith('grid-cols-')) {
        activeCols = parseInt(token.replace('grid-cols-', ''), 10);
      } else if (token.includes(':grid-cols-')) {
        const [prefix, colToken] = token.split(':');
        const minWidth = this.breakpoints[prefix];
        if (minWidth && viewportWidth >= minWidth) {
          activeCols = parseInt(colToken.replace('grid-cols-', ''), 10);
        }
      }
    }

    return activeCols;
  }
}

const resolver = new ResponsiveResolver();
const classes = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

const colsAt400 = resolver.resolveGridCols(classes, 400); // Mobile phone
const colsAt700 = resolver.resolveGridCols(classes, 700); // Phablet / sm
const colsAt800 = resolver.resolveGridCols(classes, 800); // Tablet / md
const colsAt1200 = resolver.resolveGridCols(classes, 1200); // Laptop / lg

console.log('Active columns at 400px (mobile base):', colsAt400);
// -> Active columns at 400px (mobile base): 1
console.log('Active columns at 700px (sm breakpoint):', colsAt700);
// -> Active columns at 700px (sm breakpoint): 2
console.log('Active columns at 800px (md breakpoint):', colsAt800);
// -> Active columns at 800px (md breakpoint): 3
console.log('Active columns at 1200px (lg breakpoint):', colsAt1200);
// -> Active columns at 1200px (lg breakpoint): 4
console.log('Scale factor from mobile to desktop:', colsAt1200 / colsAt400);
// -> Scale factor from mobile to desktop: 4`,
      caption: {
        en: 'Simulation: resolves 1 column at 400px, 2 columns at 700px, 3 columns at 800px, and 4 columns at 1200px (scale factor 4)',
        bn: 'সিমুলেশন: ৪০০ পিক্সেল স্ক্রিনে ১ টি কলাম, ৭০০ পিক্সেল স্ক্রিনে ২ টি, ৮০০ পিক্সেলে ৩ টি ও ১২০০ পিক্সেলে ৪ টি কলামে রূপান্তর হয় (স্কেল গুণক ৪)'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always design the mobile base styles first using unprefixed utilities. Add sm:, md:, and lg: prefixes only to progressively enhance the layout as screen width expands.',
        bn: 'নিয়ম ১: সাধারণ প্রিফিক্সহীন ক্লাস দিয়ে আগে মোবাইলের রূপ ঠিক করুন। স্ক্রিনের আকার বাড়ার সাথে সাথে কেবল প্রয়োজনীয় পরিবর্তনের জন্য sm:, md: এবং lg: প্রিফিক্স ব্যবহার করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never use conflicting max-width overrides when min-width utilities suffice. Thinking in mobile-first additive terms eliminates layout bugs and unnecessary CSS specificity clashes.',
        bn: 'নিয়ম ২: অপ্রয়োজনীয় max-width দিয়ে আগের স্টাইল কাটবেন না। মোবাইল-ফার্স্ট ইতিবাচক ধারায় ভাবলে লেআউটের বাগ এবং সিএসএসের সংঘাত দূর হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use CSS Grid for two-dimensional card layouts and Flexbox for one-dimensional alignments. Combining grid-cols with gap utilities produces responsive layouts without negative margin hacks.',
        bn: 'নিয়ম ৩: দ্বিমাত্রিক কার্ডের জন্য গ্রিড এবং একমাত্রিক সাজানোর জন্য ফ্লেক্সবক্স ব্যবহার করুন। গ্রিডের সাথে gap ইউটিলিটি ব্যবহার করলে নেগেটিভ মার্জিনের ঝামেলা থাকে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Leverage container queries (@container) for modular reusable components. Component styling should adapt to the container parent rather than making assumptions about the global window size.',
        bn: 'নিয়ম ৪: পুনর্ব্যবহারযোগ্য উইজেটের জন্য কন্টেইনার কোয়েরি (@container) ব্যবহার করুন। কম্পোনেন্ট যেন পুরো উইন্ডোর ওপর নির্ভর না করে প্যারেন্ট বাক্সের মাপ দেখে রূপ পরিবর্তন করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-fit-ex1',
      kind: 'mcq',
      topic: 'Mobile-first min-width breakpoint mechanics',
      question: {
        en: 'In Tailwind CSS, how does a class declaration like class="w-full md:w-1/2" behave across different screen sizes?',
        bn: 'Tailwind CSS-এ class="w-full md:w-1/2" ঘোষণাটি বিভিন্ন স্ক্রিন সাইজে কীভাবে কাজ করে?'
      },
      options: [
        {
          en: 'It spans 100% width on mobile screens, and switches to 50% width when the viewport reaches 768px (md) and all larger widths',
          bn: 'মোবাইলে এটি ১০০% প্রস্থ পায় এবং স্ক্রিনের মাপ ৭৬৮ পিক্সেল (md) বা তার বেশি হলে ৫০% প্রস্থে রূপান্তরিত হয়'
        },
        {
          en: 'It shows half width on mobile and becomes full width on desktop',
          bn: 'মোবাইলে অর্ধেক প্রস্থ দেখায় এবং ডেস্কটপে গিয়ে সম্পূর্ণ প্রস্থ পায়'
        },
        {
          en: 'It permanently locks the screen resolution to 768 pixels',
          bn: 'এটি স্ক্রিন রেজোলিউশনকে স্থায়ীভাবে ৭৬৮ পিক্সেলে আটকে রাখে'
        },
        {
          en: 'It causes the browser window to shrink by 50 percent',
          bn: 'এর ফলে ব্রাউজার উইন্ডো ৫০ শতাংশ ছোট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unprefixed is base (mobile); md: applies at 768px and up.',
        bn: 'প্রিফিক্সহীন ক্লাস মোবাইলের জন্য; md: প্রযোজ্য হয় ৭৬৮ পিক্সেল বা তার বড় স্ক্রিনে।'
      },
      explanation: {
        en: 'Tailwind uses min-width media queries. The unprefixed w-full applies by default, and md:w-1/2 overrides it starting at the 768px threshold.',
        bn: 'Tailwind min-width মিডিয়া কোয়েরি ব্যবহার করে। ডিফল্টভাবে w-full কাজ করে এবং ৭৬৮ পিক্সেল ছোঁয়ার সাথে সাথে md:w-1/2 কার্যকর হয়।'
      }
    },
    {
      id: 'tw-fit-ex2',
      kind: 'mcq',
      topic: 'Default breakpoint pixel thresholds',
      question: {
        en: 'What are the default min-width pixel thresholds for Tailwind breakpoints sm, md, and lg?',
        bn: 'Tailwind-এর sm, md এবং lg ব্রেকপয়েন্টের ডিফল্ট min-width পিক্সেল মাপ কত?'
      },
      options: [
        {
          en: 'sm: 640px, md: 768px, and lg: 1024px',
          bn: 'sm: ৬৪০px, md: ৭৬৮px এবং lg: ১০২৪px'
        },
        {
          en: 'sm: 100px, md: 200px, and lg: 300px',
          bn: 'sm: ১০০px, md: ২০০px এবং lg: ৩০০px'
        },
        {
          en: 'sm: 1920px, md: 2560px, and lg: 3840px',
          bn: 'sm: ১৯২০px, md: ২৫৬০px এবং lg: ৩৮৪০px'
        },
        {
          en: 'sm: 10px, md: 20px, and lg: 30px',
          bn: 'sm: ১০px, md: ২০px এবং lg: ৩০px'
        }
      ],
      answer: 0,
      hint: {
        en: 'sm is large mobile (640), md is tablet (768), lg is desktop (1024).',
        bn: 'sm হলো বড় ফোন (৬৪০), md হলো ট্যাবলেট (৭৬৮), lg হলো ল্যাপটপ (১০২৪)।'
      },
      explanation: {
        en: 'Tailwind standard breakpoints are: sm (640px), md (768px), lg (1024px), xl (1280px), and 2xl (1536px).',
        bn: 'Tailwind-এর স্ট্যান্ডার্ড ব্রেকপয়েন্ট হলো: sm (৬৪০px), md (৭৬৮px), lg (১০২৪px), xl (১২৮০px) এবং 2xl (১৫৩৬px)।'
      }
    },
    {
      id: 'tw-fit-ex3',
      kind: 'mcq',
      topic: 'Container queries vs viewport media queries',
      question: {
        en: 'What critical problem do CSS Container Queries (@container) solve that traditional window-based media queries cannot?',
        bn: 'চিরাচরিত উইন্ডো-ভিত্তিক মিডিয়া কোয়েরি যা পারে না, সিএসএস কন্টেইনার কোয়েরি (@container) সেই কোন জটিল সমস্যার সমাধান দেয়?'
      },
      options: [
        {
          en: 'They allow a component to adapt its styling based on the width of its immediate parent container rather than the global browser window width',
          bn: 'এটি কোনো উপাদানকে পুরো ব্রাউজার উইন্ডোর প্রস্থের বদলে তার নিকটবর্তী প্যারেন্ট কন্টেইনারের প্রস্থ অনুযায়ী স্টাইল পরিবর্তনের সুযোগ দেয়'
        },
        {
          en: 'They eliminate the need to run Docker containers on production servers',
          bn: 'এগুলো প্রোডাকশন সার্ভারে ডকার কন্টেইনার চালানোর প্রয়োজনীয়তা দূর করে'
        },
        {
          en: 'They compress all HTML code inside a ZIP archive before downloading',
          bn: 'ডাউনলোডের আগে এগুলো সমস্ত এইচটিএমএল কোড জিপ আর্কাইভে কমপ্রেস করে ফেলে'
        },
        {
          en: 'They make websites load without any internet connection',
          bn: 'ইন্টারনেট সংযোগ ছাড়াই এগুলো ওয়েবসাইট লোড করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about placing a card component inside a narrow sidebar on a large monitor.',
        bn: 'বড় মনিটরের সরু সাইডবারে কোনো কার্ড উপাদান রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'Container queries evaluate the dimensions of the parent box. This makes UI components truly modular and embeddable anywhere without breaking.',
        bn: 'কন্টেইনার কোয়েরি প্যারেন্ট বক্সের মাপ বিচার করে। এর ফলে যেকোনো ইউআই উপাদান সাইডবার বা মোডালে বসালেও দেখতে সুন্দর ও মানানসই থাকে।'
      }
    },
    {
      id: 'tw-fit-ex4',
      kind: 'mcq',
      topic: 'Responsive Flexbox direction toggling',
      question: {
        en: 'Which Tailwind utility class string stacks items vertically on mobile and arranges them horizontally on tablet screens (768px and up)?',
        bn: 'কোন Tailwind ক্লাসটি উপাদানগুলোকে মোবাইলে নিচে নিচে এবং ট্যাবলেটে (৭৬৮ পিক্সেল বা বেশি) পাশাপাশি সাজায়?'
      },
      options: [
        {
          en: 'flex flex-col md:flex-row',
          bn: 'flex flex-col md:flex-row'
        },
        {
          en: 'display-block tablet-horizontal',
          bn: 'display-block tablet-horizontal'
        },
        {
          en: 'grid-row-flip-desktop',
          bn: 'grid-row-flip-desktop'
        },
        {
          en: 'margin-auto align-center-always',
          bn: 'margin-auto align-center-always'
        }
      ],
      answer: 0,
      hint: {
        en: 'Base direction is column (flex-col); enhanced direction at md is row (md:flex-row).',
        bn: 'মোবাইলে দিক কলাম (flex-col); ট্যাবলেটে গিয়ে দিক রো (md:flex-row)।'
      },
      explanation: {
        en: 'flex flex-col stacks children in a column by default. The md:flex-row variant switches the flex-direction to row on viewports 768px and wider.',
        bn: 'flex flex-col উপাদানগুলোকে ডিফল্টভাবে কলামে সাজায়। আর md:flex-row ৭৬৮ পিক্সেল বা তার বড় স্ক্রিনে দিক পরিবর্তন করে পাশাপাশি রো করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-fitting-rooms-quiz',
    title: {
      en: 'Responsive Layouts, Flexbox & Grid Quiz',
      bn: 'রেসপন্সিভ লেআউট, ফ্লেক্সবক্স ও গ্রিড কুইজ'
    },
    questions: [
      {
        id: 'q-grid-col-spanning-responsive',
        kind: 'mcq',
        topic: 'Responsive column spanning with col-span utilities',
        question: {
          en: 'How do you configure an item to occupy 1 column on mobile and span 2 columns on medium screens in a 3-column grid?',
          bn: '৩ কলামের একটি গ্রিডে কোনো আইটেমকে মোবাইলে ১ কলাম এবং মাঝারি স্ক্রিনে ২ কলাম জুড়ে রাখতে কীভাবে ক্লাস লিখতে হয়?'
        },
        options: [
          {
            en: 'col-span-1 md:col-span-2',
            bn: 'col-span-1 md:col-span-2'
          },
          {
            en: 'width-50-percent-always',
            bn: 'width-50-percent-always'
          },
          {
            en: 'grid-stretch-screen-double',
            bn: 'grid-stretch-screen-double'
          },
          {
            en: 'table-cell-expand-wide',
            bn: 'table-cell-expand-wide'
          }
        ],
        answer: 0,
        hint: {
          en: 'Combine base column span with md: breakpoint prefix.',
          bn: 'বেস কলাম স্প্যানের সাথে md: ব্রেকপয়েন্ট প্রিফিক্স যুক্ত করুন।'
        },
        explanation: {
          en: 'col-span-1 keeps the item spanning a single column on small screens, while md:col-span-2 expands it across two columns on medium displays.',
          bn: 'col-span-1 ছোট স্ক্রিনে উপাদানকে একটি কলামে রাখে এবং md:col-span-2 মাঝারি স্ক্রিনে একে দুটি কলাম জুড়ে প্রসারিত করে।'
        }
      },
      {
        id: 'q-gap-utilities-vs-margins',
        kind: 'mcq',
        topic: 'Using gap utilities over child margins',
        question: {
          en: 'Why is using gap-4 on a flex or grid container superior to adding margin-right to each individual child element?',
          bn: 'প্রতিটি চাইল্ড উপাদানে আলাদা margin-right দেওয়ার চেয়ে ফ্লেক্স বা গ্রিড কন্টেইনারে gap-4 ব্যবহার করা কেন অনেক ভালো?'
        },
        options: [
          {
            en: 'gap applies spacing exclusively between adjacent children without adding unwanted trailing margins to the last item or causing unwanted line wraps',
            bn: 'gap কেবল পাশাপাশি থাকা উপাদানগুলোর মাঝে ফাঁকা তৈরি করে, শেষ উপাদানে বাড়তি মার্জিন দেয় না এবং অপ্রয়োজনীয় লাইন ব্রেক হওয়া আটকায়'
          },
          {
            en: 'gap utilities reduce the electricity consumption of the user smartphone',
            bn: 'gap ইউটিলিটি ব্যবহারকারীর স্মার্টফোনের বিদ্যুৎ খরচ কমিয়ে দেয়'
          },
          {
            en: 'Because CSS margin properties were removed from all modern web browsers in 2024',
            bn: 'কারণ ২০২৪ সালে সমস্ত আধুনিক ব্রাউজার থেকে সিএসএস মার্জিন প্রপার্টি তুলে নেওয়া হয়েছে'
          },
          {
            en: 'gap forces all child elements to display in black and white colors only',
            bn: 'gap সমস্ত সন্তান উপাদানকে কেবল সাদাকালো রঙে প্রদর্শিত হতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'No trailing margin on the last item means no ugly :last-child overrides needed.',
          bn: 'শেষ উপাদানে কোনো বাড়তি মার্জিন থাকে না, ফলে :last-child দিয়ে স্টাইল কাটার প্রয়োজন হয় না।'
        },
        explanation: {
          en: 'The gap property eliminates the need for annoying :last-child margin resets. It manages gutters cleanly between grid tracks and flex items.',
          bn: 'gap প্রপার্টি :last-child দিয়ে মার্জিন রিসেট করার ঝামেলা দূর করে। এটি গ্রিড ও ফ্লেক্স উপাদানের মাঝে সমান ও নিখুঁত ব্যবধান বজায় রাখে।'
        }
      },
      {
        id: 'q-desktop-first-trap',
        kind: 'mcq',
        topic: 'The pitfalls of desktop-first responsive design',
        question: {
          en: 'What architectural friction occurs when teams build stylesheets using desktop-first max-width thinking instead of mobile-first min-width?',
          bn: 'মোবাইল-ফার্স্ট min-width-এর বদলে ডেস্কটপ-ফার্স্ট max-width চিন্তাধারায় স্টাইলশিট তৈরি করলে কোন কাঠামোগত সমস্যা তৈরি হয়?'
        },
        options: [
          {
            en: 'Styles must constantly be undone and overwritten for smaller viewports, increasing CSS specificity wars and creating fragile maintenance nightmares',
            bn: 'ছোট স্ক্রিনের জন্য পূর্ববর্তী স্টাইলগুলো বারবার বাতিল ও ওভাররাইট করতে হয়, যা স্পেসিফিসিটি বিরোধ বাড়িয়ে রক্ষণাবেক্ষণকে নরক বানিয়ে তোলে'
          },
          {
            en: 'Desktop-first designs can only be viewed in black and white monitors',
            bn: 'ডেস্কটপ-ফার্স্ট ডিজাইন কেবল সাদাকালো মনিটরেই দেখতে পাওয়া যায়'
          },
          {
            en: 'It causes the git repository to delete random source code files',
            bn: 'এর ফলে গিট রিপোজিটরি থেকে দরকারি কোড ফাইলগুলো নিজ থেকেই মুছে যায়'
          },
          {
            en: 'Because desktop computers are legally prohibited from accessing web pages',
            bn: 'কারণ আন্তর্জাতিক আইনে ডেস্কটপ কম্পিউটার দিয়ে ওয়েবপেজে প্রবেশ করা নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Writing styles only to undo them in smaller breakpoints.',
          bn: 'স্টাইল লেখার পর ছোট স্ক্রিনে এসে তা আবার কাটার কথা ভাবুন।'
        },
        explanation: {
          en: 'Desktop-first forces you to write code that you immediately spend time overriding for mobile screens. Mobile-first grows organically through progressive enhancement.',
          bn: 'ডেস্কটপ-ফার্স্ট এমন কোড লেখায় যা মোবাইলে এসে আবার কাটতে হয়। মোবাইল-ফার্স্ট পদ্ধতিতে কোড ধাপে ধাপে ইতিবাচকভাবে বিকশিত হয়।'
        }
      },
      {
        id: 'q-auto-fit-minmax-grid',
        kind: 'mcq',
        topic: 'Fluid card columns with auto-fit and minmax in arbitrary values',
        question: {
          en: 'What does the utility class grid-cols-[repeat(auto-fit,minmax(250px,1fr))] accomplish in Tailwind CSS?',
          bn: 'Tailwind CSS-এ grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ইউটিলিটি ক্লাসটি কী কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It creates a fluid responsive grid that automatically fits as many 250px columns as possible without requiring any explicit media query breakpoint classes',
            bn: 'এটি একটি গতিশীল রেসপন্সিভ গ্রিড তৈরি করে যা কোনো মিডিয়া কোয়েরি ছাড়াই স্ক্রিনে যতগুলো সম্ভব ২৫০ পিক্সেল কলামকে নিজে থেকেই বসিয়ে দেয়'
          },
          {
            en: 'It forces the page to display exactly 250 images simultaneously',
            bn: 'এটি পেজে ঠিক ২৫০টি ছবি একসাথে প্রদর্শন করতে বাধ্য করে'
          },
          {
            en: 'It shuts down the web browser if the window is resized',
            bn: 'উইন্ডোর আকার পরিবর্তন করা হলে এটি ওয়েব ব্রাউজারটি বন্ধ করে দেয়'
          },
          {
            en: 'It translates the website text into 250 different languages',
            bn: 'এটি ওয়েবসাইটের লেখাকে ২৫০টি ভিন্ন ভিন্ন ভাষায় অনুবাদ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automatic wrapping of grid columns based on minimum card width.',
          bn: 'সর্বনিম্ন কার্ডের মাপের ওপর ভিত্তি করে নিজে থেকে কলাম সাজানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Using repeat(auto-fit, minmax(250px, 1fr)) creates an intrinsically responsive grid that automatically wraps cards smoothly without writing sm: or md: prefixes.',
          bn: 'repeat(auto-fit, minmax(250px, 1fr)) একটি স্বয়ংক্রিয় রেসপন্সিভ গ্রিড বানায় যা কোনো sm: বা md: প্রিফিক্স ছাড়াই যেকোনো স্ক্রিনে সুন্দরভাবে মানিয়ে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-variant-bazaar',
    title: {
      en: 'Pseudo-Classes & State Modifiers — Hover, Focus, Active, Group, Peer & Dark Mode',
      bn: 'সিউডো-ক্লাস ও স্টেট মডিফায়ার — হোভার, ফোকাস, গ্রুপ, পিয়ার ও ডার্ক মোড'
    }
  }
};
