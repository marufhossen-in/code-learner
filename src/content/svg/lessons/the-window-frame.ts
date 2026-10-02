import type { Lesson } from '../../../lib/types';

export const windowFrameLesson: Lesson = {
  slug: 'the-window-frame',
  tech: 'svg',
  title: {
    en: 'SVG Coordinates, viewBox, and Aspect Ratios',
    bn: 'এসভিজি স্থানাঙ্ক ব্যবস্থা, viewBox ও অ্যাসপেক্ট রেশিও'
  },
  summary: {
    en: 'Vector graphics scale cleanly across any display resolution because SVG decouples internal drawing coordinates from external display box sizes. In this lesson, you will master the dual-coordinate architecture of SVG: internal user space units versus external CSS viewport pixels. Understand how the viewBox attribute establishes an internal mathematical framing window, how the default 300x150 fallback dimension trap occurs when viewBox is missing, and how preserveAspectRatio controls alignment and scaling via meet, slice, and none behaviors. Learn production rules for responsive vector containers without clipping or letterboxing. Implement an executable aspect-ratio scaling simulator in TypeScript.',
    bn: 'এসভিজি তার ভেতরের ড্রয়িং স্থানাঙ্ক ব্যবস্থাকে বাইরের ডিসপ্লে সাইজ থেকে সম্পূর্ণ আলাদা রাখে বলেই যেকোনো রেজোলিউশনে ছবি নিখুঁতভাবে স্কেল হয়। এই পাঠে আপনি এসভিজির দ্বিমুখী স্থানাঙ্ক আর্কিটেকচার শিখবেন: অভ্যন্তরীণ ইউজার স্পেস একক বনাম বাহ্যিক সিএসএস ভিউপোর্ট পিক্সেল। viewBox কীভাবে একটি অভ্যন্তরীণ গাণিতিক ফ্রেম তৈরি করে, viewBox না থাকলে কীভাবে ব্রাউজার ৩০০×১৫০ ডিফল্ট সাইজের ফাঁদে পড়ে এবং preserveAspectRatio-এর meet, slice ও none কীভাবে স্কেলিং নিয়ন্ত্রণ করে তা বিস্তারিত জানবেন। কোনো অংশ না কেটে রেসপন্সিভ এসভিজি কনটেইনার তৈরির শিল্পমান নিয়ম শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর অ্যাসপেক্ট রেশিও ফিটিং সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'dual-coordinate-architecture-viewbox',
      text: {
        en: 'The Dual Coordinate System: User Space vs CSS Viewport',
        bn: 'দ্বিমুখী স্থানাঙ্ক ব্যবস্থা: ইউজার স্পেস বনাম সিএসএস ভিউপোর্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you render a Scalable Vector Graphics (SVG) element on the web, two distinct coordinate systems work together simultaneously.',
        bn: 'ওয়েব পেজে যখন কোনো স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) উপাদান প্রদর্শন করা হয়, তখন দুটি ভিন্ন স্থানাঙ্ক ব্যবস্থা একই সাথে কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The first coordinate space is the external Viewport: the physical CSS box on the web page determined by HTML attributes or CSS properties (such as "width: 100%" or "width: 400px; height: 300px"). The second coordinate space is User Space: the abstract, resolution-independent internal grid where vector shapes (<path>, <circle>, <rect>) are defined. The "viewBox" attribute bridges these two spaces. Writing "viewBox=\'min-x min-y width height\'" defines an internal mathematical lens or camera: "min-x" and "min-y" position the origin, while "width" and "height" define the dimensions of the observable internal canvas. The browser calculates an automatic zoom transform mapping user units directly into physical screen pixels, guaranteeing zero pixelation across mobile phones, desktop monitors, and 4K televisions.',
        bn: 'প্রথম স্থানাঙ্ক ব্যবস্থাটি হলো বাহ্যিক ভিউপোর্ট (Viewport): এটি ওয়েব পেজে উপাদানটির শারীরিক সিএসএস বাক্স যা উইডথ ও হাইট দিয়ে নির্ধারিত হয় (যেমন "width: 100%" বা "width: 400px; height: 300px")। দ্বিতীয় স্থানাঙ্ক ব্যবস্থাটি হলো অভ্যন্তরীণ ইউজার স্পেস (User Space): এটি একটি বিমূর্ত, রেজোলিউশন-নিরপেক্ষ গ্রিড যেখানে সব ভেক্টর শেপ (<path>, <circle>, <rect>) আঁকা হয়। এই দুই ব্যবস্থার মধ্যকার সেতু হলো "viewBox" অ্যাট্রিবিউট। "viewBox=\'min-x min-y width height\'" লেখার মাধ্যমে একটি অভ্যন্তরীণ গাণিতিক ফ্রেম বা ক্যামেরা নির্দিষ্ট করা হয়: "min-x" ও "min-y" ফ্রেমের শুরুর বিন্দু এবং "width" ও "height" ফ্রেমের পরিমাপ নির্ধারণ করে। ব্রাউজার স্বয়ংক্রিয়ভাবে অভ্যন্তরীণ এককগুলোকে স্ক্রিনের পিক্সেলের সাথে মিলিয়ে জুম করে নেয়, যার ফলে মোবাইল ফোন থেকে শুরু করে ৪কে টেলিভিশনেও ছবি সামান্যতম ঝাপসা হয় না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'svg-viewbox',
          def: {
            en: 'An attribute (viewBox="min-x min-y width height") defining the internal coordinate boundaries and aspect ratio of an SVG graphic.',
            bn: 'একটি গুরুত্বপূর্ণ অ্যাট্রিবিউট যা এসভিজি ফাইলের অভ্যন্তরীণ স্থানাঙ্ক সীমা এবং অ্যাসপেক্ট রেশিও নির্ধারণ করে।'
          }
        },
        {
          term: 'preserve-aspect-ratio',
          def: {
            en: 'An attribute instructing how an SVG scales when its viewBox aspect ratio differs from its parent CSS viewport container.',
            bn: 'একটি অ্যাট্রিবিউট যা নির্দেশ করে যখন viewBox এবং বাইরের সিএসএস কনটেইনারের অনুপাত মেলে না তখন কীভাবে স্কেলিং ও অ্যালাইনমেন্ট হবে।'
          }
        },
        {
          term: 'meet-scaling-mode',
          def: {
            en: 'The default scaling behavior fitting the entire viewBox within the viewport while preserving proportions, equivalent to CSS contain.',
            bn: 'ডিফল্ট স্কেলিং পদ্ধতি যা অনুপাত ঠিক রেখে পুরো এসভিজিকে ভিউপোর্টের ভেতরে ফিট করে, যা সিএসএস contain-এর অনুরূপ।'
          }
        },
        {
          term: 'slice-scaling-mode',
          def: {
            en: 'A scaling behavior expanding the viewBox to cover the entire viewport while preserving proportions, cropping any overflowing content.',
            bn: 'এমন একটি স্কেলিং পদ্ধতি যা অনুপাত ঠিক রেখে পুরো ভিউপোর্ট ঢেকে ফেলে এবং অতিরিক্ত অংশ কেটে (crop) বাদ দেয়, যা সিএসএস cover-এর মতো।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'preserveaspectratio-behaviors-table',
      text: {
        en: 'Comparative Behaviors of preserveAspectRatio Modes',
        bn: 'preserveAspectRatio মোডসমূহের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The preserveAspectRatio attribute accepts an alignment descriptor alongside a fitting mode to govern non-uniform dimension fitting.',
        bn: 'preserveAspectRatio অ্যাট্রিবিউট একটি অ্যালাইনমেন্ট নির্দেশক এবং একটি ফিটিং মোড গ্রহণ করে অসম আকারের স্কেলিং নিয়ন্ত্রণ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Attribute Setting', bn: 'অ্যাট্রিবিউট সেটিং' },
        { en: 'CSS Analogy', bn: 'সিএসএস সমতুল্য' },
        { en: 'Visual Transformation Behavior', bn: 'ভিজ্যুয়াল রূপান্তর আচরণ' },
        { en: 'Recommended Use Case', bn: 'প্রস্তাবিত ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'xMidYMid meet (default)', bn: 'xMidYMid meet (ডিফল্ট)' },
          { en: 'object-fit: contain', bn: 'object-fit: contain' },
          { en: 'Scales uniformly until the larger axis hits the container edge; creates letterboxing', bn: 'অনুপাত ঠিক রেখে স্কেল করে যতক্ষণ না বড় অক্ষটি কিনারায় ঠেকে; ফাঁকা মার্জিন তৈরি হতে পারে' },
          { en: 'Standard UI icons, logos, and technical blueprints that must never be cropped', bn: 'স্ট্যান্ডার্ড আইকন, লোগো এবং প্রযুক্তিগত নকশা যা কখনো কাটা যাবে না' }
        ],
        [
          { en: 'xMidYMid slice', bn: 'xMidYMid slice' },
          { en: 'object-fit: cover', bn: 'object-fit: cover' },
          { en: 'Scales uniformly until the entire viewport is filled; overflows and crops excess', bn: 'অনুপাত ঠিক রেখে পুরো ফ্রেম পূর্ণ করে; অতিরিক্ত অংশ বাইরে কেটে ফেলে' },
          { en: 'Background hero art, decorative abstract patterns, and full-bleed wallpapers', bn: 'ওয়েবসাইটের হিরো ব্যাকগ্রাউন্ড, নকশাদার প্যাটার্ন এবং ফুল-স্ক্রিন ওয়ালপেপার' }
        ],
        [
          { en: 'none', bn: 'none' },
          { en: 'object-fit: fill', bn: 'object-fit: fill' },
          { en: 'Disables uniform scaling; stretches X and Y axes independently to match container', bn: 'অনুপাত সংরক্ষণ বন্ধ করে; এক্স এবং ওয়াই অক্ষকে টেনে জোরপূর্বক বাক্সে ফিট করে' },
          { en: 'Dynamic wave dividers, bar charts, and liquid responsive progress meters', bn: 'ওয়েভ ডিভাইডার, অনুভূমিক বার চার্ট এবং লিকুইড প্রগ্রেস বার' }
        ],
        [
          { en: 'xMinYMin meet', bn: 'xMinYMin meet' },
          { en: 'contain with top-left pin', bn: 'টপ-লেফট কোণায় contain' },
          { en: 'Scales uniformly and anchors graphic flush to the top-left corner of viewport', bn: 'অনুপাত ঠিক রেখে ওপরের বাম কোণায় আঁকড়ে ধরে স্কেল করে' },
          { en: 'Left-aligned brand navigation bars and document header typography', bn: 'বাম দিকে সারিবদ্ধ লোগো ও হেডার টেক্সট কম্পোনেন্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-viewbox-fit-simulator-code',
      text: {
        en: 'Executable Aspect Ratio Scaling and Fitting Simulator',
        bn: 'অ্যাসপেক্ট রেশিও স্কেলিং ও ফিটিং সিমুলেটরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates uniform scale factors and rendered pixel dimensions for both meet and slice modes when placing a 100x50 viewBox into a square 400x400 viewport.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১০০×৫০ viewBox-কে একটি ৪০০×৪০০ বর্গাকার ভিউপোর্টে বসানোর সময় meet এবং slice মোডের স্কেল ফ্যাক্টর ও চূড়ান্ত রেন্ডার সাইজ হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG ViewBox Uniform Scaling and Aspect Ratio Fitting

interface ViewBoxBounds {
  minX: number;
  minY: number;
  width: number;
  height: number;
}

interface ViewportContainer {
  width: number;
  height: number;
}

interface ScalingResult {
  scaleFactor: number;
  renderedWidth: number;
  renderedHeight: number;
}

function calculateAspectRatioFit(
  vb: ViewBoxBounds,
  vp: ViewportContainer,
  mode: 'meet' | 'slice'
): ScalingResult {
  const scaleX = vp.width / vb.width;
  const scaleY = vp.height / vb.height;

  // meet uses minimum scale factor; slice uses maximum scale factor
  const uniformScale = mode === 'meet' ? Math.min(scaleX, scaleY) : Math.max(scaleX, scaleY);

  const renderedWidth = Math.round(vb.width * uniformScale);
  const renderedHeight = Math.round(vb.height * uniformScale);

  return {
    scaleFactor: Math.round(uniformScale),
    renderedWidth,
    renderedHeight
  };
}

const viewBox: ViewBoxBounds = { minX: 0, minY: 0, width: 100, height: 50 };
const viewport: ViewportContainer = { width: 400, height: 400 };

const meetFit = calculateAspectRatioFit(viewBox, viewport, 'meet');
const sliceFit = calculateAspectRatioFit(viewBox, viewport, 'slice');

console.log('Meet uniform scale factor:', meetFit.scaleFactor);
console.log('Meet rendered dimensions:', meetFit.renderedWidth, 'by', meetFit.renderedHeight);
console.log('Slice uniform scale factor:', sliceFit.scaleFactor);
console.log('Slice rendered dimensions:', sliceFit.renderedWidth, 'by', sliceFit.renderedHeight);

// prints: Meet uniform scale factor: 4
// prints: Meet rendered dimensions: 400 by 200
// prints: Slice uniform scale factor: 8
// prints: Slice rendered dimensions: 800 by 400`
    },
    {
      type: 'heading',
      id: 'missing-viewbox-fallback-dimension-trap',
      text: {
        en: 'The Missing viewBox Trap: Avoiding the 300x150 Default',
        bn: 'viewBox না থাকার ফাঁদ: ৩০০×১৫০ ডিফল্ট সাইজের সমস্যা প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A classic frontend bug occurs when an SVG is exported from design tools with explicit width and height attributes (e.g. width="24" height="24") but without a "viewBox" attribute. If an engineer applies CSS "width: 100%" to make the icon responsive, the browser expands the container box. However, the internal shapes remain stuck at their original 24-pixel coordinate dimensions, rendering as a tiny spec in the top corner. Worse, if both width/height and viewBox are omitted, the W3C specification dictates a default fallback dimension of 300x150 pixels. Production icon systems eliminate this failure by stripping hardcoded width and height attributes, specifying "viewBox=\'0 0 24 24\'", and controlling size through CSS "width: 1em; height: 1em;".',
        bn: 'ফ্রন্টএন্ড ডেভেলপমেন্টের একটি সাধারণ ত্রুটি ঘটে যখন ডিজাইন টুল থেকে এক্সপোর্ট করা এসভিজিতে নির্দিষ্ট উইডথ ও হাইট থাকে (যেমন width="24" height="24") কিন্তু কোনো "viewBox" অ্যাট্রিবিউট থাকে না। ডেভেলপার যখন আইকনটিকে রেসপন্সিভ করতে সিএসএসে "width: 100%" দেন, তখন ব্রাউজার বাইরের বাক্সটিকে বড় করে ঠিকই। কিন্তু ভেতরের শেপগুলো তাদের মূল ২৪ পিক্সেল সাইজেই আটকে থেকে কোণায় ছোট হয়ে থাকে। আরও মারাত্মক হয় যখন উইডথ/হাইট এবং viewBox দুটোই বাদ দেওয়া হয়; তখন W3C নিয়ম অনুসারে ব্রাউজার স্বয়ংক্রিয়ভাবে ৩০০×১৫০ পিক্সেলের একটি ডিফল্ট আকার ধরে নেয়। প্রোডাকশন আইকন সিস্টেম এই সমস্যা দূর করতে ফিক্সড উইডথ ও হাইট মুছে দিয়ে কেবল "viewBox=\'0 0 24 24\'" রাখে এবং সিএসএসে "width: 1em; height: 1em;" দিয়ে সাইজ নিয়ন্ত্রণ করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Always include the viewBox attribute: viewBox defines the internal aspect ratio that enables resolution-free scaling.',
          bn: 'সর্বদা viewBox অ্যাট্রিবিউট ব্যবহার করুন: এটি অভ্যন্তরীণ অনুপাত প্রতিষ্ঠা করে যা নিখুঁত স্কেলিং সম্ভব করে তোলে।'
        },
        {
          en: 'Use meet mode for complete visibility: preserveAspectRatio="xMidYMid meet" ensures shapes fit inside without cropping.',
          bn: 'সম্পূর্ণ দৃশ্যমানতায় meet ব্যবহার করুন: এটি অনুপাত বজায় রেখে কোনো অংশ না কেটে পুরো অবজেক্ট প্রদর্শন নিশ্চিত করে।'
        },
        {
          en: 'Use slice mode for full-bleed backgrounds: preserveAspectRatio="xMidYMid slice" covers the container like background-size cover.',
          bn: 'ফুল-স্ক্রিন ব্যাকগ্রাউন্ডে slice ব্যবহার করুন: এটি পুরো কনটেইনার পূর্ণ করে ব্যাকগ্রাউন্ড কাভারের মতো কাজ করে।'
        },
        {
          en: 'Omit hardcoded width and height on icons: Let viewBox define proportions and let CSS 1em scale icons with font sizes.',
          bn: 'আইকনে ফিক্সড উইডথ-হাইট পরিহার করুন: viewBox অনুপাত ঠিক রাখবে আর সিএসএস 1em লেখার সাইজ অনুযায়ী আইকন স্কেল করবে।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-colored-glass',
    tech: 'svg',
    title: {
      en: 'SVG Paint, Gradients, and Masking',
      bn: 'এসভিজি পেইন্ট, গ্রেডিয়েন্ট ও মাস্কিং'
    }
  },
  exercises: [
    {
      id: 'wf-ex1',
      kind: 'mcq',
      topic: 'viewbox-parameters-syntax',
      question: {
        en: 'What do the four numeric values in the attribute viewBox="0 0 100 50" represent?',
        bn: 'viewBox="0 0 100 50" অ্যাট্রিবিউটে থাকা ৪টি সংখ্যার সঠিক অর্থ কী?'
      },
      options: [
        {
          en: 'min-x (0), min-y (0), width (100), and height (50) defining the internal coordinate origin and bounds of the drawing canvas',
          bn: 'min-x (০), min-y (০), width (১০০) এবং height (৫০) যা ক্যানভাসের অভ্যন্তরীণ স্থানাঙ্কের শুরুর বিন্দু এবং মোট সীমানা নির্ধারণ করে'
        },
        {
          en: 'Top, Right, Bottom, Left margin values in millimeters',
          bn: 'মিলিমিটারে ওপর, ডান, নিচ ও বাম মার্জিনের মান'
        },
        {
          en: 'The red, green, blue, and alpha color channels of the background',
          bn: 'ব্যাকগ্রাউন্ডের লাল, সবুজ, নীল এবং আলফা কালার চ্যানেল'
        },
        {
          en: 'Because viewBox was invented by maritime cartographers in 1910',
          bn: 'কারণ ১৯১০ সালে নৌ মানচিত্রকাররা viewBox তৈরি করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'min-x min-y width height: origin followed by dimensions.',
        bn: 'min-x min-y width height: শুরুর বিন্দু এবং তারপর প্রস্থ ও উচ্চতা।'
      },
      explanation: {
        en: 'The four parameters establish the internal virtual rectangular boundary that is mapped to the viewport.',
        bn: 'এই চারটি প্যারামিটার অভ্যন্তরীণ ভার্চুয়াল ড্রয়িং সীমানা নির্দিষ্ট করে যা ভিউপোর্টে প্রদর্শিত হয়।'
      }
    },
    {
      id: 'wf-ex2',
      kind: 'mcq',
      topic: 'preserveaspectratio-meet-vs-slice',
      question: {
        en: 'What is the key visual difference between preserveAspectRatio="xMidYMid meet" and preserveAspectRatio="xMidYMid slice"?',
        bn: 'preserveAspectRatio="xMidYMid meet" এবং "xMidYMid slice"-এর মধ্যে প্রধান ভিজ্যুয়াল পার্থক্য কী?'
      },
      options: [
        {
          en: '"meet" scales the graphic so the entire viewBox fits inside the viewport without cropping (like CSS contain), whereas "slice" scales the graphic so it completely fills the viewport, cropping any overflowing content (like CSS cover)',
          bn: '"meet" এমনভাবে স্কেল করে যাতে পুরো viewBox ভিউপোর্টের ভেতরে সম্পূর্ণ দেখা যায় কোনো অংশ না কেটে (সিএসএস contain-এর মতো); আর "slice" পুরো ভিউপোর্ট ঢেকে ফেলে এবং অতিরিক্ত অংশ কেটে বাদ দেয় (সিএসএস cover-এর মতো)'
        },
        {
          en: '"meet" turns all colors into solid blue while "slice" turns all colors green',
          bn: '"meet" সব রঙ নীল করে ফেলে আর "slice" সব রঙ সবুজ করে'
        },
        {
          en: '"slice" deletes 50 percent of the hard drive space',
          bn: '"slice" হার্ড ড্রাইভের ৫০ শতাংশ খালি জায়গা মুছে দেয়'
        },
        {
          en: '"meet" only works on Android devices while "slice" is strictly for iPhones',
          bn: '"meet" কেবল অ্যান্ড্রয়েডে চলে আর "slice" কেবল আইফোনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'meet = contain (entire picture visible). slice = cover (entire box covered, edges cropped).',
        bn: 'meet মানে পুরো ছবি দেখা যাবে (contain); slice মানে পুরো বাক্স ঢাকবে এবং বাড়তি অংশ কাটবে (cover)।'
      },
      explanation: {
        en: 'Meet ensures full visibility with potential letterboxing; slice guarantees full coverage with potential edge clipping.',
        bn: 'meet পুরো ছবি নিরাপদে দেখায় এবং slice বাড়তি অংশ কেটে পুরো স্ক্রিন ঢেকে ফেলে।'
      }
    },
    {
      id: 'wf-ex3',
      kind: 'mcq',
      topic: 'missing-viewbox-default-dimension',
      question: {
        en: 'According to the W3C specification, what default dimensions does the browser assume if an embedded SVG lacks width, height, and viewBox attributes?',
        bn: 'W3C স্পেসিফিকেশন অনুযায়ী যদি কোনো এসভিজিতে width, height এবং viewBox কোনোটিই না থাকে, তবে ব্রাউজার কোন ডিফল্ট আকার ধরে নেয়?'
      },
      options: [
        {
          en: 'A default fallback viewport of 300 pixels wide by 150 pixels high (300x150)',
          bn: '৩০০ পিক্সেল চওড়া এবং ১৫০ পিক্সেল উঁচু (৩০০×১৫০) একটি ডিফল্ট ভিউপোর্ট'
        },
        {
          en: '1000 pixels wide by 1000 pixels high',
          bn: '১০০০ পিক্সেল চওড়া এবং ১০০০ পিক্সেল উঁচু'
        },
        {
          en: 'Zero pixels wide and zero pixels high, rendering invisible',
          bn: 'শূন্য পিক্সেল চওড়া ও শূন্য পিক্সেল উঁচু, ফলে কিছুই দেখা যায় না'
        },
        {
          en: 'Because default dimensions were banned by international law in 2020',
          bn: 'কারণ ২০২০ সালে আন্তর্জাতিক আইনে ডিফল্ট সাইজ নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The classic HTML replaced element default: 300x150 pixels.',
        bn: 'এইচটিএমএলের চিরাচরিত ডিফল্ট মাপ: ৩০০×১৫০ পিক্সেল।'
      },
      explanation: {
        en: 'Unsized replaced elements in the HTML/SVG specifications fall back to an intrinsic 300x150 pixel box.',
        bn: 'কোনো মাপ নির্দিষ্ট না থাকলে ব্রাউজার স্পেসিফিকেশন অনুযায়ী ৩০০×১৫০ পিক্সেল ডিফল্ট ফ্রেম প্রয়োগ করে।'
      }
    },
    {
      id: 'wf-ex4',
      kind: 'mcq',
      topic: 'responsive-icon-1em-rule',
      question: {
        en: 'Why is sizing inline SVG icons using CSS "width: 1em; height: 1em" an industry best practice for design systems?',
        bn: 'ডিজাইন সিস্টেমে ইনলাইন এসভিজি আইকনকে সিএসএস "width: 1em; height: 1em" দিয়ে সাইজ করা কেন একটি বিশ্বমানের সেরা অনুশীলন?'
      },
      options: [
        {
          en: 'Because "1em" ties the icon dimensions directly to the surrounding text font-size, ensuring the icon scales automatically whether placed in small caption text or huge hero headers',
          bn: 'কারণ "1em" আইকনের মাপকে তার চারপাশের টেক্সটের ফন্ট-সাইজের সাথে যুক্ত করে দেয়, ফলে ছোট ক্যাপশনে বা বড় হেডারে যেখানেই আইকনটি রাখা হোক না কেন, তা লেখার সাইজ অনুযায়ী নিজে থেকেই নিখুঁতভাবে স্কেল হয়'
        },
        {
          en: 'Because 1em reduces network file sizes by 80 percent',
          bn: 'কারণ 1em নেটওয়ার্কের ফাইলের সাইজ ৮০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: '1em was mandated by the United Nations in 2021',
          bn: 'কারণ ২০২১ সালে জাতিসংঘ 1em বাধ্যতামূলক করেছিল'
        },
        {
          en: '1em converts SVG vector code into a video stream',
          bn: '1em এসভিজি ভেক্টর কোডকে ভিডিওতে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: '1em = same size as current text font. Change font-size and the icon scales automatically.',
        bn: '1em মানে লেখার ফন্ট সাইজের সমান মাপ। ফন্ট সাইজ বদলালে আইকনও নিজে থেকেই বদলে যাবে।'
      },
      explanation: {
        en: 'Using 1em creates typographic harmony between icons and adjacent text without requiring dedicated sizing classes.',
        bn: '1em ব্যবহারের ফলে লেখার আকারের সাথে সামঞ্জস্য রেখে আইকন স্বয়ংক্রিয়ভাবে বড় বা ছোট হয়।'
      }
    }
  ],
  quiz: {
    id: 'window-frame-quiz',
    title: {
      en: 'SVG Coordinates, ViewBox, and Aspect Ratio Quiz',
      bn: 'এসভিজি স্থানাঙ্ক, ভিউবক্স ও অ্যাসপেক্ট রেশিও কুইজ'
    },
    questions: [
      {
        id: 'wfq-q1',
        kind: 'mcq',
        topic: 'preserveaspectratio-none-stretching',
        question: {
          en: 'When is setting preserveAspectRatio="none" intentionally appropriate in frontend engineering?',
          bn: 'ফ্রন্টএন্ড ইঞ্জিনিয়ারিংয়ে কখন ইচ্ছাকৃতভাবে preserveAspectRatio="none" ব্যবহার করা যুক্তিযুক্ত?'
        },
        options: [
          {
            en: 'For decorative background graphic waves, dividers, or dynamic horizontal bar charts that must stretch non-uniformly to fill the exact full width and height of a container without letterboxing',
            bn: 'ডেকোরেটিভ ব্যাকগ্রাউন্ড ওয়েভ, সেকশন ডিভাইডার বা ডাইনামিক বার চার্টের ক্ষেত্রে যা কোনো ফাঁকা মার্জিন না রেখে কনটেইনারের সম্পূর্ণ প্রস্থ ও উচ্চতা জুড়ে অসমভাবে প্রসারিত হওয়া প্রয়োজন'
          },
          {
            en: 'When rendering high-resolution product photography',
            bn: 'উচ্চ রেজোলিউশনের পণ্যের ছবি দেখানোর সময়'
          },
          {
            en: 'To prevent computer screens from consuming electricity',
            bn: 'যাতে মনিটরের বিদ্যুৎ খরচ সম্পূর্ণ বন্ধ থাকে'
          },
          {
            en: 'Because none was created by international maritime conventions in 2022',
            bn: 'কারণ ২০২২ সালে নৌ কনভেনশনে none তৈরি হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'none = stretch to fit box completely, ignoring original proportions.',
          bn: 'none মানে অনুপাত অগ্রাহ্য করে পুরো বাক্স জুড়ে জোরপূর্বক টেনে লম্বা করা।'
        },
        explanation: {
          en: 'Setting preserveAspectRatio to none allows non-uniform scaling, ideal for decorative graphic dividers and liquid progress fills.',
          bn: 'none মোড অনুপাত অগ্রাহ্য করে পুরো স্থান পূর্ণ করতে সাহায্য করে, যা ব্যাকগ্রাউন্ড ওয়েভের জন্য চমৎকার।'
        }
      },
      {
        id: 'wfq-q2',
        kind: 'mcq',
        topic: 'viewbox-negative-min-coordinates',
        question: {
          en: 'What architectural purpose is served by setting negative origin coordinates, such as viewBox="-50 -50 100 100"?',
          bn: 'viewBox="-50 -50 100 100"-এর মতো ঋণাত্মক শুরুর বিন্দু নির্ধারণের প্রধান প্রযুক্তিগত উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It positions coordinate (0, 0) directly in the dead center of the drawing area, vastly simplifying symmetrical graphics, clock faces, and rotating circular charts',
            bn: 'এটি (0, 0) স্থানাঙ্ক বিন্দুটিকে ক্যানভাসের ঠিক কেন্দ্রে স্থাপন করে, যার ফলে প্রতিসম নকশা, ঘড়ির কাঁটা এবং ঘূর্ণায়মান বৃত্তাকার চার্ট তৈরি করা অত্যন্ত সহজ হয়'
          },
          {
            en: 'It inverts all colors into photographic negatives',
            bn: 'এটি সব রঙকে উল্টে দিয়ে নেগেটিভ ছবিতে পরিণত করে'
          },
          {
            en: 'Because negative coordinates are required for printing on paper',
            bn: 'কারণ কাগজে প্রিন্ট করতে ঋণাত্মক স্থানাঙ্ক প্রয়োজন হয়'
          },
          {
            en: 'Negative viewBox coordinates format the client device storage',
            bn: 'ঋণাত্মক viewBox স্থানাঙ্ক ডিভাইসের মেমরি মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: '-50 to +50 on X and Y puts (0, 0) at the geometric center.',
          bn: '-৫০ থেকে +৫০ রেঞ্জ (০, ০) বিন্দুকে ঠিক কেন্দ্রস্থলে বসায়।'
        },
        explanation: {
          en: 'A centered origin allows radial mathematics (like Math.cos and Math.sin) to map directly without manual offset additions.',
          bn: 'কেন্দ্রবিন্দু (০, ০)-তে রাখলে ঘূর্ণন এবং বৃত্তাকার গণিত অনেক সহজ হয়ে যায়।'
        }
      },
      {
        id: 'wfq-q3',
        kind: 'mcq',
        topic: 'css-container-aspect-ratio-prevention',
        question: {
          en: 'Why do modern responsive layouts combine CSS "aspect-ratio" with SVG viewBox?',
          bn: 'আধুনিক রেসপন্সিভ লেআউটে সিএসএস "aspect-ratio"-র সাথে এসভিজি viewBox কেন একসাথে ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It reserves the exact layout dimensions in the CSS layout tree before the SVG network payload loads, preventing Cumulative Layout Shift (CLS) and letterbox gaps',
            bn: 'এটি এসভিজি ফাইলটি নেটওয়ার্ক থেকে ডাউনলোড হওয়ার আগেই সিএসএস লেআউটে সঠিক স্থানটি সংরক্ষণ করে রাখে, ফলে কিউমুলেটিভ লেআউট শিফট (CLS) এবং অনাকাঙ্ক্ষিত ফাঁকা মার্জিন রোধ হয়'
          },
          {
            en: 'Because CSS aspect-ratio increases internet bandwidth speed by 50 percent',
            bn: 'কারণ সিএসএস aspect-ratio ইন্টারনেটের স্পিড ৫০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'To turn on the computer cooling fan automatically',
            bn: 'কম্পিউটারের কুলিং ফ্যান স্বয়ংক্রিয়ভাবে চালু করার জন্য'
          },
          {
            en: 'Aspect ratio was invented by international radio standards in 1999',
            bn: 'কারণ ১৯৯৯ সালে আন্তর্জাতিক রেডিও সংস্থা এটি তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'CSS aspect-ratio reserves box space early, eliminating Cumulative Layout Shift (CLS).',
          bn: 'সিএসএস aspect-ratio আগে থেকেই স্থান বরাদ্দ রেখে পেজ লাফানো (CLS) প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Declaring aspect-ratio in CSS synchronizes the layout box with the vector viewBox before rendering begins.',
          bn: 'সিএসএসে aspect-ratio দিয়ে রাখলে ব্রাউজার লেআউট শিফট ছাড়াই নিখুঁতভাবে স্থান বরাদ্দ করে।'
        }
      },
      {
        id: 'wfq-q4',
        kind: 'mcq',
        topic: 'xminymin-alignment-descriptor',
        question: {
          en: 'In preserveAspectRatio="xMinYMin meet", what do "xMin" and "YMin" dictate regarding alignment?',
          bn: 'preserveAspectRatio="xMinYMin meet"-এ "xMin" এবং "YMin" অ্যালাইনমেন্টের ক্ষেত্রে কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'They anchor the scaled graphic flush against the smallest X coordinate (left edge) and smallest Y coordinate (top edge) of the viewport container',
            bn: 'তারা স্কেল করা ছবিটিকে ভিউপোর্ট কনটেইনারের সবচেয়ে ছোট এক্স স্থানাঙ্ক (বাম কিনারা) এবং সবচেয়ে ছোট ওয়াই স্থানাঙ্কের (ওপরের কিনারা) সাথে সংযুক্ত রাখে'
          },
          {
            en: 'They restrict the minimum font size to 10 pixels',
            bn: 'তারা সর্বনিম্ন ফন্ট সাইজ ১০ পিক্সেল নির্ধারণ করে'
          },
          {
            en: 'They delete 50 percent of the vector graphic coordinates',
            bn: 'তারা ভেক্টর গ্রাফিক্সের ৫০ শতাংশ স্থানাঙ্ক মুছে দেয়'
          },
          {
            en: 'Because xMin and YMin were banned by the W3C in 2021',
            bn: 'কারণ ২০২১ সালে W3C এগুলো নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'xMin = left, YMin = top. The graphic aligns to the top-left corner.',
          bn: 'xMin মানে বামে, YMin মানে ওপরে। ছবিটি ওপরের বাম কোণায় যুক্ত থাকে।'
        },
        explanation: {
          en: 'Min alignment descriptors pin the graphic against the left and top edges rather than centering it.',
          bn: 'xMin ও YMin ছবিটিকে কেন্দ্রে না রেখে ওপরের বাম কোণায় আটকে রাখে।'
        }
      }
    ]
  }
};
