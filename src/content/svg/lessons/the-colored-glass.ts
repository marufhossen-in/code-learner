import type { Lesson } from '../../../lib/types';

export const coloredGlassLesson: Lesson = {
  slug: 'the-colored-glass',
  tech: 'svg',
  title: {
    en: 'SVG Paint, Gradients, and Masking',
    bn: 'এসভিজি পেইন্ট, গ্রেডিয়েন্ট ও মাস্কিং'
  },
  summary: {
    en: 'Rendering rich visual graphics requires precise control over color fills, line strokes, gradients, and shape clipping. In this lesson, you will master the SVG paint model: the painters rendering algorithm where document order governs z-plane layering, fill and stroke styling properties, and stroke cap and join anatomies (butt, round, square, miter, bevel). Understand reusable resource definitions inside <defs>, configure linear and radial gradients using objectBoundingBox and userSpaceOnUse coordinate spaces, and evaluate the architectural difference between binary vector clip-paths and 8-bit luminance masks. Implement an executable stroke dash and segment metric calculator in TypeScript.',
    bn: 'আকর্ষণীয় ভেক্টর গ্রাফিক্স তৈরিতে রঙের ফিল, লাইনের স্ট্রোক, গ্রেডিয়েন্ট এবং ক্লিপিংয়ের ওপর সূক্ষ্ম নিয়ন্ত্রণ অপরিহার্য। এই পাঠে আপনি এসভিজি পেইন্ট মডেল শিখবেন: পেইন্টার্স অ্যালগরিদম যেখানে ডকুমেন্টের ক্রম লেয়ারিং নির্ধারণ করে, ফিল ও স্ট্রোকের বিভিন্ন প্রপার্টি এবং লাইন ক্যাপ ও জয়েন্ট (butt, round, square, miter, bevel)। <defs>-এর ভেতরে পুনরায় ব্যবহারযোগ্য রিসোর্স সংজ্ঞায়িত করা, objectBoundingBox ও userSpaceOnUse দিয়ে লিনিয়ার ও রেডিয়াল গ্রেডিয়েন্ট তৈরি এবং বাইনারি ক্লিপ-পাথ বনাম ৮-বিট লুমিন্যান্স মাস্কের প্রযুক্তিগত পার্থক্য বিস্তারিত জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর স্ট্রোক ড্যাশ পরিমাপ ক্যালকুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'svg-paint-model-and-order',
      text: {
        en: 'The SVG Paint Model: Document Layering and Stroke Anatomy',
        bn: 'এসভিজি পেইন্ট মডেল: ডকুমেন্ট লেয়ারিং ও স্ট্রোকের গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you render Scalable Vector Graphics (SVG) on the web, the browser follows a strict Painter\'s Algorithm where markup order dictates visual stacking.',
        bn: 'আপনি যখন ওয়েবে স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) প্রদর্শন করেন, তখন ব্রাউজার একটি সুনির্দিষ্ট পেইন্টার্স অ্যালগরিদম মেনে চলে যেখানে কোডের ক্রমই ভিজ্যুয়াল স্তরায়ন নির্ধারণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional HTML, elements can be repositioned across visual layers using the CSS "z-index" property. In standard SVG, visual layering is governed strictly by Document Tree Order: shapes declared later in the XML markup are painted directly on top of earlier sibling elements. Each shape is decorated through two fundamental paint operations: "fill" (the interior color paint) and "stroke" (the outline perimeter border). SVG provides granular control over line anatomy: "stroke-width" sets border thickness, "stroke-linecap" (butt, round, square) shapes the endpoints of open paths, and "stroke-linejoin" (miter, round, bevel) dictates how corners meet. Using "stroke-dasharray", developers define repeating sequences of dashes and gaps for dashed boundary lines and custom progress ring animations.',
        bn: 'সাধারণ এইচটিএমএলে সিএসএস "z-index" ব্যবহার করে যেকোনো উপাদানের স্তর ওপরে বা নিচে পরিবর্তন করা যায়। কিন্তু স্ট্যান্ডার্ড এসভিজিতে লেয়ারিং সম্পূর্ণভাবে ডকুমেন্ট ট্রির ক্রম অনুসারে নিয়ন্ত্রিত হয়: এক্সএমএল ফাইলে যে শেপটি পরে লেখা হয়, তা স্বয়ংক্রিয়ভাবে আগের শেপের ওপর আঁকা হয়। প্রতিটি শেপ মূলত দুটি প্রধান অপারেশনের মাধ্যমে রঙ পায়: "fill" (ভেতরের অংশের রঙ) এবং "stroke" (বাইরের সীমানা রেখা)। এসভিজিতে লাইনের প্রতিটি অংশের নিখুঁত নিয়ন্ত্রণ রয়েছে: "stroke-width" রেখার পুরুত্ব নির্ধারণ করে, "stroke-linecap" (butt, round, square) খোলা লাইনের প্রান্তের আকার ঠিক করে এবং "stroke-linejoin" (miter, round, bevel) কর্নার কীভাবে জোড়া লাগবে তা নিয়ন্ত্রণ করে। এছাড়া "stroke-dasharray" দিয়ে ড্যাশ ও ফাঁকার মাপ ঠিক করে ড্যাশযুক্ত বর্ডার এবং লোডার রিং তৈরি করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'svg-defs-element',
          def: {
            en: 'A container element (<defs>) used to store reusable graphical assets like gradients, patterns, and clip paths without rendering them immediately.',
            bn: 'একটি বিশেষ ধারক ট্যাগ (<defs>) যা গ্রেডিয়েন্ট, প্যাটার্ন ও ক্লিপ-পাথের মতো পুনরায় ব্যবহারযোগ্য উপাদান সরাসরি না এঁকে মেমরিতে জমা রাখে।'
          }
        },
        {
          term: 'linear-and-radial-gradients',
          def: {
            en: 'Smooth color transitions defined by stop elements along a vector axis (linear) or radiating outward from a focal center point (radial).',
            bn: 'এক বা একাধিক রঙের মসৃণ পরিবর্তন যা একটি নির্দিষ্ট রেখা বরাবর (লিনিয়ার) অথবা কেন্দ্র থেকে চারদিকে ছড়িয়ে (রেডিয়াল) দৃশ্যমান হয়।'
          }
        },
        {
          term: 'svg-clip-path',
          def: {
            en: 'A 1-bit boolean cutting mask; content falling inside the vector shape remains fully visible, while exterior content is discarded.',
            bn: 'একটি ১-বিট বাইনারি কাটিং মাস্ক; ভেক্টর শেপের ভেতরের অংশ সম্পূর্ণ দৃশ্যমান থাকে আর বাইরের সমস্ত অংশ বাদ পড়ে।'
          }
        },
        {
          term: 'svg-mask-element',
          def: {
            en: 'An 8-bit transparency mask where pixel luminance and alpha values control soft gradient transparency and partial cutouts.',
            bn: 'একটি ৮-বিট স্বচ্ছতা মাস্ক যেখানে সাদা অংশ দৃশ্যমান, কালো অংশ অদৃশ্য এবং ধূসর অংশ আংশিক স্বচ্ছ বা ফেইড হিসেবে কাজ করে।'
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
      id: 'clipping-vs-masking-table',
      text: {
        en: 'Comparative Architecture: clipPath vs mask Elements',
        bn: 'তুলনামূলক আর্কিটেকচার: clipPath বনাম mask উপাদান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Frontend developers must differentiate between hard vector clipping and smooth alpha luminance masking when crafting complex visual effects.',
        bn: 'জটিল গ্রাফিক্স তৈরির সময় ডেভেলপারদের অবশ্যই হার্ড ভেক্টর ক্লিপিং এবং মসৃণ আলফা লুমিন্যান্স মাস্কিংয়ের মধ্যকার পার্থক্য বিবেচনা করতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Masking Mechanism', bn: 'মাস্কিং মেকানিজম' },
        { en: 'Element Tag', bn: 'এলিমেন্ট ট্যাগ' },
        { en: 'Transparency Model', bn: 'স্বচ্ছতা মডেল' },
        { en: 'Performance & Primary Role', bn: 'পারফরম্যান্স ও প্রধান ভূমিকা' }
      ],
      rows: [
        [
          { en: 'Vector Clipping', bn: 'ভেক্টর ক্লিপিং' },
          { en: '<clipPath id="cp">', bn: '<clipPath id="cp">' },
          { en: '1-bit hard binary cutout (100% visible or 0% discarded)', bn: '১-বিট বাইনারি কাটআউট (১০০% দৃশ্যমান অথবা ০% বাদ)' },
          { en: 'Extremely fast hardware rendering; constraining chart bars inside axis boundaries', bn: 'অত্যন্ত দ্রুতগতির জিপিইউ রেন্ডারিং; চার্টের বারকে নির্দিষ্ট সীমানার ভেতরে আটকে রাখা' }
        ],
        [
          { en: 'Luminance Masking', bn: 'লুমিন্যান্স মাস্কিং' },
          { en: '<mask id="m">', bn: '<mask id="m">' },
          { en: '8-bit alpha/luminance (White = visible, Black = hidden, Grey = semi-transparent)', bn: '৮-বিট আলফা (সাদা = দৃশ্যমান, কালো = অদৃশ্য, ধূসর = আংশিক স্বচ্ছ)' },
          { en: 'Requires pixel raster pass; smooth gradient fades, vignettes, and organic opacity', bn: 'পিক্সেল প্রসেসিং লাগে; মসৃণ গ্রেডিয়েন্ট ফেইড ও নরম স্বচ্ছতার জন্য উপযোগী' }
        ],
        [
          { en: 'Linear Gradient', bn: 'লিনিয়ার গ্রেডিয়েন্ট' },
          { en: '<linearGradient id="g">', bn: '<linearGradient id="g">' },
          { en: 'Interpolates colors along a 2D line (x1, y1) to (x2, y2)', bn: 'দ্বিমাত্রিক রেখা বরাবর দুটি বিন্দুর মধ্যে রঙের রূপান্তর' },
          { en: 'Zero raster memory cost; sleek modern UI backgrounds and metallic highlights', bn: 'কোনো মেমরি অপচয় নেই; আধুনিক ইউআই ব্যাকগ্রাউন্ড ও মেটালিক ফিনিশ' }
        ],
        [
          { en: 'Radial Gradient', bn: 'রেডিয়াল গ্রেডিয়েন্ট' },
          { en: '<radialGradient id="rg">', bn: '<radialGradient id="rg">' },
          { en: 'Radiates outward from focal center (fx, fy) to perimeter (cx, cy, r)', bn: 'ফোকাল কেন্দ্র থেকে বৃত্তের পরিধি বরাবর চারদিকে রঙের বিস্তার' },
          { en: 'Spherical shading, realistic lighting highlights, and sunburst effects', bn: 'গোলাকার ছায়া, বাস্তবসম্মত আলোর প্রতিফলন ও বৃত্তাকার আবহ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-stroke-dash-metrics-code',
      text: {
        en: 'Executable Stroke Dash and Segment Metric Calculator',
        bn: 'স্ট্রোক ড্যাশ ও সেগমেন্ট পরিমাপের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates stroke-dasharray metrics for a 100-unit path with a pattern of 15 units dash and 5 units gap, determining full cycles completed.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১০০ একক দৈর্ঘ্যের পাথে ১৫ একক ড্যাশ ও ৫ একক ফাঁকার প্যাটার্ন অনুসারে মোট সম্পূর্ণ সাইকেল ও অবশিষ্ট অংশ হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG Stroke Dasharray Metrics and Cycles

interface DashMetrics {
  totalStrokeLength: number;
  patternLength: number;
  completedCycles: number;
  remainingSegment: number;
}

function calculateDasharrayMetrics(
  totalLength: number,
  dash: number,
  gap: number
): DashMetrics {
  const patternLength = dash + gap;
  const completedCycles = Math.floor(totalLength / patternLength);
  const remainingSegment = totalLength - (completedCycles * patternLength);

  return {
    totalStrokeLength: totalLength,
    patternLength,
    completedCycles,
    remainingSegment
  };
}

const metrics = calculateDasharrayMetrics(100, 15, 5);

console.log('Total path stroke length:', metrics.totalStrokeLength);
console.log('Single dash pattern length:', metrics.patternLength);
console.log('Full dash cycles completed:', metrics.completedCycles);
console.log('Remaining dash segment length:', metrics.remainingSegment);

// prints: Total path stroke length: 100
// prints: Single dash pattern length: 20
// prints: Full dash cycles completed: 5
// prints: Remaining dash segment length: 0`
    },
    {
      type: 'heading',
      id: 'gradient-units-coordinates-comparison',
      text: {
        en: 'Gradient Coordinate Systems: objectBoundingBox vs userSpaceOnUse',
        bn: 'গ্রেডিয়েন্ট স্থানাঙ্ক ব্যবস্থা: objectBoundingBox বনাম userSpaceOnUse'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common pitfall when authoring SVG gradients is configuring the "gradientUnits" attribute. By default, gradients use "gradientUnits=\'objectBoundingBox\'", where coordinate values represent relative fractions from 0 to 1 (or 0% to 100%) of the target shape\'s individual bounding box. This makes gradients portable: applying the gradient to a small circle or a huge banner automatically stretches the color transition to fit that shape. Conversely, setting "gradientUnits=\'userSpaceOnUse\'" anchors the gradient coordinates directly to the parent SVG user coordinate system. In this mode, multiple disconnected shapes sharing the same gradient seamlessly blend across one continuous canvas-wide gradient field, essential for multi-shape illustrations and consistent chart fills.',
        bn: 'এসভিজি গ্রেডিয়েন্ট তৈরির সময় একটি সাধারণ জটিলতা তৈরি হয় "gradientUnits" অ্যাট্রিবিউটের ক্ষেত্রে। ডিফল্টভাবে গ্রেডিয়েন্ট "gradientUnits=\'objectBoundingBox\'" ব্যবহার করে, যেখানে ০ থেকে ১ (বা ০% থেকে ১০০%) মানগুলো সংশ্লিষ্ট শেপের নিজস্ব সীমানার সাপেক্ষে কাজ করে। এটি গ্রেডিয়েন্টকে পোর্টেবল করে: একই গ্রেডিয়েন্ট ছোট বৃত্তে বা বড় ব্যানারে বসালে তা নিজে থেকেই শেপের মাপ অনুযায়ী মানিয়ে নেয়। অন্যদিকে "gradientUnits=\'userSpaceOnUse\'" নির্ধারণ করলে গ্রেডিয়েন্টের স্থানাঙ্ক পুরো এসভিজি ক্যানভাসের স্থানাঙ্ক ব্যবস্থার সাথে স্থায়ীভাবে যুক্ত হয়। এর ফলে একাধিক আলাদা আলাদা শেপ একই গ্রেডিয়েন্ট ব্যবহার করলে তারা পুরো ক্যানভাস জুড়ে একটি নিরবচ্ছিন্ন অভিন্ন গ্রেডিয়েন্ট রঙের অংশ হয়ে ওঠে, যা আধুনিক চার্ট ও ইলাস্ট্রেশনের জন্য অত্যন্ত কার্যকর।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Document order controls z-layering: Shapes written later in the SVG markup render in front of earlier sibling elements.',
          bn: 'ডকুমেন্টের ক্রম লেয়ারিং নিয়ন্ত্রণ করে: কোডে পরে লেখা শেপগুলো সবসময় আগের শেপের ওপরে প্রদর্শিত হয়।'
        },
        {
          en: 'Use <defs> for reusable assets: Store gradients, patterns, and clipPaths inside <defs> to keep markup clean and performant.',
          bn: '<defs>-এ রিসোর্স সংরক্ষণ করুন: গ্রেডিয়েন্ট, প্যাটার্ন ও ক্লিপ-পাথ <defs>-এর ভেতরে রাখলে কোড পরিচ্ছন্ন ও দ্রুতগতির থাকে।'
        },
        {
          en: 'clipPath is binary, mask is alpha: Use clipPath for sharp geometric bounds and mask for soft gradient transparencies.',
          bn: 'clipPath বাইনারি আর mask হলো আলফা: ধারালো সীমানার জন্য clipPath এবং মসৃণ স্বচ্ছতার জন্য mask ব্যবহার করুন।'
        },
        {
          en: 'Choose gradientUnits with intention: objectBoundingBox scales per shape; userSpaceOnUse locks coordinates to the canvas.',
          bn: 'সঠিক gradientUnits বেছে নিন: objectBoundingBox শেপের মাপে মানিয়ে নেয় আর userSpaceOnUse ক্যানভাসের সাথে যুক্ত থাকে।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-cathedral-style',
    tech: 'svg',
    title: {
      en: 'Styling SVG with CSS and currentColor',
      bn: 'সিএসএস ও currentColor দিয়ে এসভিজি স্টাইলিং'
    }
  },
  exercises: [
    {
      id: 'cg-ex1',
      kind: 'mcq',
      topic: 'svg-layering-order-rule',
      question: {
        en: 'In standard SVG, if two shapes occupy the same coordinates without CSS z-index, which shape renders on top?',
        bn: 'স্ট্যান্ডার্ড এসভিজিতে দুটি শেপ যদি একই স্থানে থাকে এবং কোনো সিএসএস z-index না থাকে, তবে কোন শেপটি ওপরে দৃশ্যমান হবে?'
      },
      options: [
        {
          en: 'The shape declared later in the XML document markup renders on top, following the Painters Algorithm',
          bn: 'এক্সএমএল ডকুমেন্টে যে শেপটি পরে লেখা হয়েছে তা পেইন্টার্স অ্যালগরিদম অনুসারে ওপরে প্রদর্শিত হবে'
        },
        {
          en: 'The shape with the smaller file size renders on top',
          bn: 'যে শেপের ফাইলের আকার ছোট তা ওপরে থাকবে'
        },
        {
          en: 'The browser randomly chooses a shape every second',
          bn: 'ব্রাউজার প্রতি সেকেন্ডে এলোমেলোভাবে একটি শেপ ওপরে আনে'
        },
        {
          en: 'Layering was banned by international copyright treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক কপিরাইট আইনে লেয়ারিং নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Painters algorithm: later in markup = painted on top of earlier siblings.',
        bn: 'পেইন্টার্স অ্যালগরিদম: কোডে নিচে থাকলে তা আগের উপাদানের ওপরে আঁকা হয়।'
      },
      explanation: {
        en: 'SVG 1.1 renders strictly by document tree order, painting subsequent nodes over earlier siblings.',
        bn: 'এসভিজি ডকুমেন্টের ক্রম অনুসারে একের পর এক নোড আগেরটির ওপর এঁকে স্তর তৈরি করে।'
      }
    },
    {
      id: 'cg-ex2',
      kind: 'mcq',
      topic: 'clippath-vs-mask-distinction',
      question: {
        en: 'What is the architectural difference between an SVG <clipPath> and an SVG <mask>?',
        bn: 'এসভিজি <clipPath> এবং <mask>-এর মধ্যে প্রধান প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        {
          en: '<clipPath> is a 1-bit boolean cutting tool (points are either 100% visible or 0% clipped); <mask> is an 8-bit luminance/alpha mask supporting smooth gradient transitions and partial opacities',
          bn: '<clipPath> হলো ১-বিট বাইনারি কাটিং টুল (বিন্দুগুলো হয় ১০০% দৃশ্যমান নয়তো ০% বাদ); আর <mask> হলো ৮-বিট লুমিন্যান্স মাস্ক যা মসৃণ গ্রেডিয়েন্ট ও আংশিক স্বচ্ছতা সমর্থন করে'
        },
        {
          en: '<clipPath> only works in Google Chrome while <mask> is strictly for Safari',
          bn: '<clipPath> কেবল গুগল ক্রোমে চলে আর <mask> কেবল সাফারির জন্য'
        },
        {
          en: '<mask> permanently deletes all color palettes from the computer',
          bn: '<mask> কম্পিউটারের সমস্ত কালার প্যালেট মুছে ফেলে'
        },
        {
          en: '<clipPath> was declared obsolete by the W3C consortium in 2020',
          bn: 'কারণ ২০২০ সালে W3C ক্লিপ-পাথ বাতিল করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'clipPath = hard vector cookie cutter. mask = soft transparency gradient.',
        bn: 'clipPath হলো ধারালো কাটিং টুল; আর mask হলো মসৃণ স্বচ্ছতার গ্রেডিয়েন্ট।'
      },
      explanation: {
        en: 'Clipping performs binary geometric containment tests; masking evaluates pixel luminance for variable transparency.',
        bn: 'ক্লিপিং ধারালো ভেক্টর কাটআউট দেয়, আর মাস্কিং লুমিন্যান্স দিয়ে নরম স্বচ্ছতা তৈরি করে।'
      }
    },
    {
      id: 'cg-ex3',
      kind: 'mcq',
      topic: 'stroke-linejoin-miterlimit-protection',
      question: {
        en: 'What visual issue does the "stroke-miterlimit" attribute prevent when drawing sharp angular corners with stroke-linejoin="miter"?',
        bn: 'stroke-linejoin="miter" দিয়ে ধারালো কোণা আঁকার সময় "stroke-miterlimit" অ্যাট্রিবিউটটি কোন ভিজ্যুয়াল ত্রুটি প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'It prevents acute sharp corners from extending into absurdly long spike needles by automatically beveling the corner when the miter length exceeds the ratio threshold',
          bn: 'কোণের তীক্ষ্ণতা বেশি হলে তা যাতে অস্বাভাবিক লম্বা সূঁচালো শূলে পরিণত না হয় তা রোধ করে, এবং অনুপাত অতিক্রম করলে স্বয়ংক্রিয়ভাবে কোণাটিকে ফ্ল্যাট (bevel) করে দেয়'
        },
        {
          en: 'It forces the stroke color to change to neon pink',
          bn: 'এটি স্ট্রোকের রঙ নিয়ন গোলাপি হতে বাধ্য করে'
        },
        {
          en: 'stroke-miterlimit deletes 40 percent of path vertices',
          bn: 'এটি পাথের ৪০ শতাংশ বিন্দু মুছে ফেলে'
        },
        {
          en: 'Because miterlimit was mandated by international radio laws in 2019',
          bn: 'কারণ ২০১৯ সালে রেডিও আইনে miterlimit বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Miter limit caps sharp corners so they do not shoot out like long spikes.',
        bn: 'miterlimit অতিরিক্ত ধারালো কোণাকে কেটে স্বাভাবিক রাখে যাতে দীর্ঘ শূলের মতো না বের হয়।'
      },
      explanation: {
        en: 'When the ratio of miter length to stroke-width exceeds miterlimit, the join is converted to a bevel join to avoid extreme spikes.',
        bn: 'কোণার দৈর্ঘ্য নির্ধারিত সীমা ছাড়ালে miterlimit তাকে মসৃণভাবে কেটে স্বাভাবিক রাখে।'
      }
    },
    {
      id: 'cg-ex4',
      kind: 'mcq',
      topic: 'gradient-units-objectboundingbox-behavior',
      question: {
        en: 'Why is "gradientUnits=\'objectBoundingBox\'" the default setting for SVG linear and radial gradients?',
        bn: 'এসভিজি লিনিয়ার ও রেডিয়াল গ্রেডিয়েন্টে "gradientUnits=\'objectBoundingBox\'" কেন ডিফল্ট সেটিং হিসেবে থাকে?'
      },
      options: [
        {
          en: 'It makes gradients portable by expressing coordinate bounds as relative fractions (0 to 1) of the target element, ensuring the gradient automatically scales to fit any shape regardless of size',
          bn: 'এটি গ্রেডিয়েন্টের স্থানাঙ্ককে সংশ্লিষ্ট উপাদানের ০ থেকে ১ আপেক্ষিক অনুপাতে প্রকাশ করে পোর্টেবল করে তোলে, যার ফলে যেকোনো আকারের শেপেই গ্রেডিয়েন্ট স্বয়ংক্রিয়ভাবে নিখুঁতভাবে মানিয়ে যায়'
        },
        {
          en: 'Because objectBoundingBox reduces computer RAM usage to zero megabytes',
          bn: 'কারণ objectBoundingBox র‍্যামের ব্যবহার শূন্য মেগাবাইটে নামিয়ে আনে'
        },
        {
          en: 'It was invented by international printing guilds in 1890',
          bn: 'কারণ ১৮৯০ সালে প্রিন্টিং গিল্ড এটি তৈরি করেছিল'
        },
        {
          en: 'objectBoundingBox formats the user device storage on load',
          bn: 'objectBoundingBox পেজ লোডের সময় ডিভাইসের মেমরি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fractional coordinates (0% to 100%) scale with whatever shape applies the gradient.',
        bn: 'আপেক্ষিক স্থানাঙ্ক (০% থেকে ১০০%) যেকোনো শেপের সাথে স্বয়ংক্রিয়ভাবে স্কেল হয়।'
      },
      explanation: {
        en: 'Object bounding box units decouple gradient definitions from global coordinates, making them reusable across multiple shapes.',
        bn: 'এটি গ্রেডিয়েন্টকে যেকোনো শেপের সাথে খাপ খাইয়ে পুনরায় ব্যবহারযোগ্য করে তোলে।'
      }
    }
  ],
  quiz: {
    id: 'colored-glass-quiz',
    title: {
      en: 'SVG Paint, Fills, Strokes, and Gradients Quiz',
      bn: 'এসভিজি পেইন্ট, ফিল, স্ট্রোক ও গ্রেডিয়েন্ট কুইজ'
    },
    questions: [
      {
        id: 'cgq-q1',
        kind: 'mcq',
        topic: 'stroke-dashoffset-animation-technique',
        question: {
          en: 'How do web animators use "stroke-dasharray" and "stroke-dashoffset" together to create the popular SVG "line self-drawing" effect?',
          bn: 'ওয়েব অ্যানিমেটররা জনপ্রিয় এসভিজি "লাইন ড্রয়িং" (line self-drawing) এফেক্ট তৈরি করতে কীভাবে "stroke-dasharray" এবং "stroke-dashoffset" একসাথে ব্যবহার করেন?'
        },
        options: [
          {
            en: 'They set stroke-dasharray equal to the total path length (L) and initial stroke-dashoffset to L (hiding the line), then animate stroke-dashoffset down to 0 using CSS transitions to smoothly reveal the stroke',
            bn: 'তারা stroke-dasharray-এর মান পাথের মোট দৈর্ঘ্য (L)-এর সমান করে এবং stroke-dashoffset-ও L দিয়ে রেখাটি আড়াল করে রাখে, তারপর সিএসএস ট্রানজিশন দিয়ে dashoffset কমিয়ে ০ তে এনে মসৃণভাবে রেখাটি আঁকা দেখায়'
          },
          {
            en: 'By downloading a video of someone drawing with a physical pencil',
            bn: 'পেন্সিল দিয়ে আঁকার একটি ভিডিও ডাউনলোড করে চালিয়ে দিয়ে'
          },
          {
            en: 'Dashoffset permanently increases monitor refresh rates by 200 percent',
            bn: 'dashoffset মনিটরের রিফ্রেশ রেট ২০০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'Because stroke-dashoffset was invented by telegraph operators in 1920',
            bn: 'কারণ ১৯২০ সালে টেলিগ্রাফ অপারেটররা এটি আবিষ্কার করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'dasharray = length; dashoffset: length -> 0 creates the self-drawing animation.',
          bn: 'dasharray = মোট দৈর্ঘ্য; dashoffset দৈর্ঘ্য থেকে ০ তে নামালে লাইন নিজে নিজে আঁকা হয়।'
        },
        explanation: {
          en: 'Sliding the dashoffset from the path length down to zero pulls the drawn dash into view, simulating a live pen drawing.',
          bn: 'dashoffset কমিয়ে শূন্যে আনলে ড্যাশটি চোখের সামনে ভেসে ওঠে যেন রেখাটি সরাসরি আঁকা হচ্ছে।'
        }
      },
      {
        id: 'cgq-q2',
        kind: 'mcq',
        topic: 'userspaceonuse-continuous-gradient',
        question: {
          en: 'When building a complex infographic with multiple separate shapes, why would an architect choose gradientUnits="userSpaceOnUse"?',
          bn: 'একাধিক বিচ্ছিন্ন শেপ দিয়ে তৈরি একটি জটিল ইনফোগ্রাফিক ডিজাইনে একজন ডেভেলপার কেন gradientUnits="userSpaceOnUse" বেছে নেবেন?'
        },
        options: [
          {
            en: 'To make the gradient fixed to the global SVG canvas coordinates, allowing multiple independent shapes to share a single seamless, continuous gradient field across the entire scene',
            bn: 'গ্রেডিয়েন্টটিকে পুরো এসভিজি ক্যানভাসের মূল স্থানাঙ্কের সাথে স্থায়ী রাখতে, যার ফলে একাধিক স্বাধীন শেপ পুরো দৃশ্য জুড়ে একটি অভিন্ন ও নিরবচ্ছিন্ন গ্রেডিয়েন্টের অংশ হিসেবে ফুটে ওঠে'
          },
          {
            en: 'To prevent computer screens from entering sleep mode',
            bn: 'যাতে কম্পিউটার স্ক্রিন স্লিপ মোডে না যায়'
          },
          {
            en: 'Because userSpaceOnUse is required by law for bank websites',
            bn: 'কারণ ব্যাংকের ওয়েবসাইটের জন্য এটি আন্তর্জাতিকভাবে বাধ্যতামূলক'
          },
          {
            en: 'It reduces internet connection bills by 40 percent',
            bn: 'এটি ইন্টারনেটের বিল ৪০ শতাংশ কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'userSpaceOnUse pins gradient coordinates to the canvas, unifying separate shapes under one gradient.',
          bn: 'userSpaceOnUse গ্রেডিয়েন্টকে ক্যানভাসে স্থির রাখে, ফলে সব শেপ মিলে একটি অভিন্ন রঙের প্রবাহ তৈরি করে।'
        },
        explanation: {
          en: 'userSpaceOnUse evaluates coordinates in the current user coordinate system, allowing multiple shapes to share a unified visual gradient field.',
          bn: 'এটি ক্যানভাসের সাথে গ্রেডিয়েন্ট যুক্ত করে একাধিক শেপের মধ্যে নিরবচ্ছিন্ন রঙের মেলবন্ধন ঘটায়।'
        }
      },
      {
        id: 'cgq-q3',
        kind: 'mcq',
        topic: 'stroke-linecap-types',
        question: {
          en: 'What is the visual difference between stroke-linecap="butt" and stroke-linecap="square"?',
          bn: 'stroke-linecap="butt" এবং stroke-linecap="square"-এর মধ্যে দৃশ্যমান পার্থক্য কী?'
        },
        options: [
          {
            en: '"butt" terminates the stroke strictly flush at the exact path endpoint, whereas "square" extends the stroke past the endpoint by half the stroke-width with a square cap',
            bn: '"butt" রেখার শেষ বিন্দুতেই স্ট্রোকটি সমানভাবে শেষ করে দেয়, আর "square" শেষ বিন্দু পার হয়ে স্ট্রোকের পুরুত্বের অর্ধেক পরিমাণ দূর পর্যন্ত একটি চারকোনা ক্যাপ বাড়িয়ে দেয়'
          },
          {
            en: '"butt" only works in dark mode while "square" is for light mode',
            bn: '"butt" শুধু ডার্ক মোডে চলে আর "square" লাইট মোডের জন্য'
          },
          {
            en: '"square" converts the line into a 3D cube',
            bn: '"square" রেখাটিকে একটি থ্রিডি ঘনকে রূপান্তর করে'
          },
          {
            en: 'Line caps were banned by the W3C standards group in 2022',
            bn: 'কারণ ২০২২ সালে W3C লাইন ক্যাপ নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'butt ends right at the point. square extends past the point by half the stroke width.',
          bn: 'butt শেষ বিন্দুতেই থামে; square শেষ বিন্দু ছাড়িয়ে অর্ধেক পুরুত্ব পর্যন্ত বাড়ে।'
        },
        explanation: {
          en: 'Square caps extend beyond the coordinate by half the stroke width, matching the reach of round caps while preserving square geometry.',
          bn: 'square ক্যাপ শেষ বিন্দু পেরিয়ে কিছুটা বাড়ে, যা লাইনের সঠিক সংযোগ ও ফিনিশিং নিশ্চিত করে।'
        }
      },
      {
        id: 'cgq-q4',
        kind: 'mcq',
        topic: 'svg-paint-none-transparency',
        question: {
          en: 'What does setting fill="none" on an SVG shape achieve, and how does it affect pointer hit testing?',
          bn: 'এসভিজি শেপে fill="none" নির্ধারণ করলে কী ঘটে এবং এটি পয়েন্টার হিট-টেস্টিংয়ে কী প্রভাব ফেলে?'
        },
        options: [
          {
            en: 'It leaves the interior of the shape completely transparent, and by default (pointer-events: visiblePainted), mouse clicks in the unpainted interior pass straight through to elements behind it',
            bn: 'এটি শেপের ভেতরের অংশ সম্পূর্ণ স্বচ্ছ রাখে এবং ডিফল্টভাবে (pointer-events: visiblePainted) ভেতরের ফাঁকা অংশে মাউস ক্লিক করলে তা সরাসরি পেছনের উপাদানে চলে যায়'
          },
          {
            en: 'It permanently crashes the user browser tab',
            bn: 'এটি ব্রাউজারের ট্যাবটি ক্র্যাশ করিয়ে দেয়'
          },
          {
            en: 'fill="none" turns all lines into solid white paint',
            bn: 'fill="none" সব লাইনকে সাদা রঙে রূপান্তর করে'
          },
          {
            en: 'Because fill="none" was created by international telecommunications laws',
            bn: 'কারণ আন্তর্জাতিক টেলিযোগাযোগ আইনে fill="none" তৈরি হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'fill="none" = unpainted interior. Clicks pass through unpainted regions.',
          bn: 'fill="none" মানে ভেতরে কোনো রঙ নেই; ফলে মাউস ক্লিক পেছনের উপাদানে চলে যায়।'
        },
        explanation: {
          en: 'An unpainted fill receives no pointer events under visiblePainted rules unless pointer-events is explicitly set to all.',
          bn: 'ভেতরে রঙ না থাকলে ডিফল্ট নিয়মে মাউস ক্লিক পেছনের উপাদানে সরাসরি চলে যায়।'
        }
      }
    ]
  }
};
