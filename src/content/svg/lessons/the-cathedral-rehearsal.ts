import type { Lesson } from '../../../lib/types';

export const cathedralRehearsalLesson: Lesson = {
  slug: 'the-cathedral-rehearsal',
  tech: 'svg',
  title: {
    en: 'SVG Production Capstone — Icon Systems, Sprites, and Optimization',
    bn: 'এসভিজি প্রোডাকশন ক্যাপস্টোন: আইকন সিস্টেম, স্প্রাইট ও অপ্টিমাইজেশন'
  },
  summary: {
    en: 'Shipping professional scalable vector graphics requires synthesising architecture, component design, sprite compilation, and compression into an enterprise production pipeline. In this capstone lesson, you will assemble the entire SVG curriculum into a production-grade iconography and graphics system. Master the construction of SVG symbol sprites using <defs>, <symbol>, and <use href="#id">, enforce 1em font-relative sizing and currentColor monochromatic theming, and build accessible, framework-ready UI wrappers with ARIA attributes. Learn SVGO build-time optimization to eliminate editor bloat while protecting IDs and accessibility semantics. Implement an executable sprite manifest registry and icon analyzer in TypeScript.',
    bn: 'পেশাদার স্কেলেবল ভেক্টর গ্রাফিক্স ব্যবহারের জন্য আর্কিটেকচার, কম্পোনেন্ট ডিজাইন, স্প্রাইট সংকলন এবং কম্প্রেশনকে একটি সামগ্রিক প্রোডাকশন পাইপলাইনে যুক্ত করতে হয়। এই ক্যাপস্টোন পাঠে আপনি পুরো এসভিজি কারিকুলাম একত্রিত করে একটি এন্টারপ্রাইজ মানের আইকন ও গ্রাফিক্স সিস্টেম তৈরি করবেন। <defs>, <symbol> এবং <use href="#id"> ব্যবহার করে এসভিজি সিম্বল স্প্রাইট তৈরি, 1em ফন্ট-সাইজ অনুযায়ী স্কেলিং এবং currentColor একরঙা থিমিং আয়ত্ত করবেন। এডিটরদের অতিরিক্ত কোড মুছে ফেলতে SVGO অপ্টিমাইজেশন এবং স্ক্রিন রিডারের জন্য ARIA অ্যাক্সেসিবিলিটি নিশ্চিত করার নিয়ম বিশদভাবে জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর স্প্রাইট রেজিস্ট্রি ও আইকন বিশ্লেষক বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'svg-production-icon-system-architecture',
      text: {
        en: 'The Enterprise Icon System: Symbols, Sprites, and Reusability',
        bn: 'এন্টারপ্রাইজ আইকন সিস্টেম: সিম্বল, স্প্রাইট ও পুনর্ব্যবহারযোগ্যতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you architect a design system for modern web applications, vector iconography must scale cleanly without duplicating markup.',
        bn: 'আপনি যখন আধুনিক ওয়েব অ্যাপ্লিকেশনের জন্য একটি ডিজাইন সিস্টেম তৈরি করেন, তখন কোডের কোনো অপ্রয়োজনীয় পুনরাবৃত্তি ছাড়াই ভেক্টর আইকনগুলো নিখুঁতভাবে পরিচালনা করা প্রয়োজন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Pasting the same raw SVG markup dozens of times across an HTML page wastes network bandwidth and pollutes the DOM tree with duplicated path nodes. Enterprise production architectures solve this through SVG Symbol Sprites. Each unique graphic is authored once inside a "<symbol id=\'icon-name\' viewBox=\'0 0 24 24\'>" container placed inside a top-level "<defs>" block or external sprite file. Application components then instantiate any icon anywhere using the lightweight reference element: "<svg class=\'icon\'><use href=\'#icon-name\' /></svg>". By setting "fill=\'currentColor\'" and sizing with CSS "width: 1em; height: 1em;", every icon automatically inherits font size and text colors from its parent button or link. The browser clones the symbol internally into a memory-efficient shadow tree, delivering maximum performance and consistent visuals across the entire application.',
        bn: 'এইচটিএমএল পেজ জুড়ে বারবার একই এসভিজি কোড কপি-পেস্ট করলে ইন্টারনেটের ব্যান্ডউইথ নষ্ট হয় এবং ডম ট্রিতে অযথা নোডের সংখ্যা বেড়ে যায়। এন্টারপ্রাইজ আর্কিটেকচার এই সমস্যার সমাধান করে এসভিজি সিম্বল স্প্রাইট (Symbol Sprites) ব্যবহারের মাধ্যমে। প্রতিটি আইকন কেবল একবার একটি "<symbol id=\'icon-name\' viewBox=\'0 0 24 24\'>" কন্টেইনারের ভেতর লেখা হয় যা <defs> ব্লক বা বাহ্যিক স্প্রাইট ফাইলে থাকে। এরপর যেকোনো পেজে আইকনটি ব্যবহার করতে হালকা রেফারেন্স ট্যাগ ব্যবহার করা হয়: "<svg class=\'icon\'><use href=\'#icon-name\' /></svg>"। সিএসএসে "fill=\'currentColor\'" এবং "width: 1em; height: 1em;" দিয়ে রাখলে প্রতিটি আইকন স্বয়ংক্রিয়ভাবে তার প্যারেন্ট বাটন বা লিংকের টেক্সট কালার ও ফন্ট সাইজ গ্রহণ করে। ব্রাউজার মেমরি-সাশ্রয়ী শ্যাডো ট্রির মাধ্যমে প্রতীকটিকে দ্রুত রেন্ডার করে এবং পুরো অ্যাপ্লিকেশনে সর্বোচ্চ গতি নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'svg-symbol-element',
          def: {
            en: 'A graphical template (<symbol id="...">) defining an independent viewBox that remains unrendered until instantiated by a <use> tag.',
            bn: 'একটি গ্রাফিক্যাল টেমপ্লেট (<symbol>) যা নিজস্ব viewBox ধারণ করে এবং <use> ট্যাগ দিয়ে না ডাকা পর্যন্ত মেমরিতে সুপ্ত থাকে।'
          }
        },
        {
          term: 'svg-use-element',
          def: {
            en: 'A reference element (<use href="#id">) that clones and displays a graphical node from an internal or external SVG sprite sheet.',
            bn: 'একটি রেফারেন্স উপাদান (<use>) যা কোনো এসভিজি স্প্রাইট শিট থেকে নির্দিষ্ট আইডি যুক্ত সিম্বলকে ক্লোন করে তাৎক্ষণিকভাবে পর্দায় প্রদর্শন করে।'
          }
        },
        {
          term: 'svgo-optimizer',
          def: {
            en: 'A Node.js-based tool that minifies SVG files by removing editor metadata, collapsing redundant groups, and rounding coordinates.',
            bn: 'একটি নোড.জেএস ভিত্তিক অপ্টিমাইজেশন টুল যা ডিজাইনারদের সফটওয়্যারের বাড়তি কোড ও মেটাডেটা মুছে এসভিজি ফাইলের সাইজ ছোট করে।'
          }
        },
        {
          term: 'svg-sprite-sheet',
          def: {
            en: 'A single consolidated SVG file housing dozens or hundreds of symbols, loaded once by the browser and cached indefinitely.',
            bn: 'একটি একত্রিত এসভিজি ফাইল যাতে শত শত আইকন সংরক্ষিত থাকে, যা ব্রাউজার একবার ডাউনলোড করে মেমরিতে ক্যাশ করে রাখে।'
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
      id: 'svg-delivery-decision-matrix-table',
      text: {
        en: 'The SVG Delivery Matrix: Choosing the Right Integration Pattern',
        bn: 'এসভিজি ডেলিভারি মেট্রিক্স: সঠিক ইন্টিগ্রেশন প্যাটার্ন নির্বাচন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production frontend engineering requires matching each graphic type to the optimal delivery channel.',
        bn: 'প্রোডাকশন ফ্রন্টএন্ড ইঞ্জিনিয়ারিংয়ে প্রতিটি ছবির বৈশিষ্ট্যের ওপর ভিত্তি করে সবচেয়ে উপযুক্ত ডেলিভারি মাধ্যম বেছে নিতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Graphic Use Case', bn: 'গ্রাফিক্স ব্যবহারের ক্ষেত্র' },
        { en: 'Recommended Pattern', bn: 'প্রস্তাবিত প্যাটার্ন' },
        { en: 'Key Architectural Benefit', bn: 'প্রধান প্রযুক্তিগত সুবিধা' },
        { en: 'Primary Caveat', bn: 'সতর্কতামূলক দিক' }
      ],
      rows: [
        [
          { en: 'Design system UI icons', bn: 'ডিজাইন সিস্টেমের ইউআই আইকন' },
          { en: 'Inline SVG or <use> sprite', bn: 'ইনলাইন এসভিজি বা <use> স্প্রাইট' },
          { en: 'Dynamic CSS currentColor theming, 1em typography scaling, and instant render', bn: 'সিএসএস currentColor থিমিং, 1em ফন্ট স্কেলিং ও চোখের পলকে রেন্ডার' },
          { en: 'Increases initial HTML bundle size if not separated into an external sprite', bn: 'আলাদা ফাইলে না রাখলে এইচটিএমএলের সাইজ সামান্য বৃদ্ধি পায়' }
        ],
        [
          { en: 'User-uploaded avatars / logos', bn: 'ব্যবহারকারীর আপলোড করা লোগো' },
          { en: 'HTML <img> tag', bn: 'এইচটিএমএল <img> ট্যাগ' },
          { en: 'Browser sandbox prevents XSS attacks; strips embedded scripts automatically', bn: 'ব্রাউজার স্যান্ডবক্স ক্ষতিকর স্ক্রিপ্ট বন্ধ করে এক্সএসএস আক্রমণ রোধ করে' },
          { en: 'External CSS stylesheets cannot penetrate to change colors or hover states', bn: 'বাইরের সিএসএস দিয়ে রঙ বা হোভার স্টাইল পরিবর্তন করা যায় না' }
        ],
        [
          { en: 'Decorative section dividers', bn: 'ডেকোরেটিভ সেকশন ডিভাইডার' },
          { en: 'CSS background-image', bn: 'সিএসএস ব্যাকগ্রাউন্ড ইমেজ' },
          { en: 'Keeps HTML semantic tree clean; cached aggressively by browser HTTP layer', bn: 'এইচটিএমএল কোড পরিচ্ছন্ন রাখে; ব্রাউজারের নেটওয়ার্ক ক্যাশে চমৎকার থাকে' },
          { en: 'No DOM elements created; cannot receive keyboard focus or screen-reader tags', bn: 'ডমে উপাদান থাকে না; কীবোর্ড ফোকাস বা স্ক্রিন রিডার ট্যাগ দেওয়া যায় না' }
        ],
        [
          { en: 'Complex interactive infographics', bn: 'জটিল ইন্টারেক্টিভ ইনফোগ্রাফিক' },
          { en: 'Inline SVG with ARIA roles', bn: 'ARIA রোলসহ ইনলাইন এসভিজি' },
          { en: 'Direct DOM scripting, element tooltips, keyboard navigation, and hit-testing', bn: 'সরাসরি ডম স্ক্রিপ্টিং, টুলটিপ, কীবোর্ড নেভিগেশন ও নিখুঁত ক্লিক সুবিধা' },
          { en: 'High element counts (>1000 nodes) can increase DOM layout calculation costs', bn: '১০০০ এর বেশি নোড থাকলে পেজের লেআউট পারফরম্যান্সে প্রভাব পড়তে পারে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-sprite-registry-code',
      text: {
        en: 'Executable SVG Sprite Sheet Registry and Manifest Analyzer',
        bn: 'এসভিজি স্প্রাইট শিট রেজিস্ট্রি ও ম্যানিফেস্ট বিশ্লেষকের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program compiles an SVG sprite manifest from a collection of 4 production icons, calculating total vector path segments and average paths per icon.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৪টি প্রোডাকশন আইকনের একটি সংগ্রহ থেকে এসভিজি স্প্রাইট ম্যানিফেস্ট তৈরি করে, মোট ভেক্টর পাথ এবং আইকনপ্রতি গড় পাথ সংখ্যা হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG Sprite Sheet Manifest and Icon Registry

interface IconSymbolDescriptor {
  id: string;
  viewBox: string;
  pathCount: number;
}

interface SpriteManifestReport {
  totalIcons: number;
  totalPaths: number;
  averagePathsPerIcon: number;
  isOptimized: boolean;
}

function compileSpriteManifest(icons: IconSymbolDescriptor[]): SpriteManifestReport {
  const totalIcons = icons.length;
  const totalPaths = icons.reduce((accumulator, icon) => accumulator + icon.pathCount, 0);

  return {
    totalIcons,
    totalPaths,
    averagePathsPerIcon: Math.round(totalPaths / totalIcons),
    isOptimized: totalIcons > 0
  };
}

const productionIcons: IconSymbolDescriptor[] = [
  { id: 'icon-home', viewBox: '0 0 24 24', pathCount: 2 },
  { id: 'icon-search', viewBox: '0 0 24 24', pathCount: 2 },
  { id: 'icon-settings', viewBox: '0 0 24 24', pathCount: 4 },
  { id: 'icon-user', viewBox: '0 0 24 24', pathCount: 2 }
];

const report = compileSpriteManifest(productionIcons);

console.log('Total sprite icons registered:', report.totalIcons);
console.log('Total vector path segments:', report.totalPaths);
console.log('Average path count per icon:', report.averagePathsPerIcon);
console.log('Sprite sheet optimization status:', report.isOptimized);

// prints: Total sprite icons registered: 4
// prints: Total vector path segments: 10
// prints: Average path count per icon: 3
// prints: Sprite sheet optimization status: true`
    },
    {
      type: 'heading',
      id: 'svgo-minification-best-practices',
      text: {
        en: 'Build-Time Optimization: SVGO Rules and Precision Tuning',
        bn: 'বিল্ড-টাইম অপ্টিমাইজেশন: SVGO নিয়মাবলী ও প্রিসিশন টিউনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Design tools such as Figma, Adobe Illustrator, and Inkscape export heavy XML metadata, unneeded namespaces, and excessive decimal precision (e.g. coordinates with 8 decimal places like "12.34567891"). Production build pipelines run SVGO (SVG Optimizer) to strip this overhead, reducing vector asset file sizes by up to 60 percent. However, engineers must configure SVGO defensively: never strip the "viewBox" attribute (which breaks responsive scaling), preserve unique "id" attributes required for gradients and <use> references, and maintain "<title>" tags for accessibility. Setting float precision to 2 or 3 decimal places preserves visual fidelity while cutting kilobytes of unnecessary text payload.',
        bn: 'ফিগমা, ইলাস্ট্রেটর বা ইনকস্কেপের মতো ডিজাইন সফটওয়্যারগুলো প্রচুর অতিরিক্ত এক্সএমএল মেটাডেটা, অপ্রয়োজনীয় নেমস্পেস এবং দশমিকের পর ৮ ঘর পর্যন্ত অযথা সংখ্যা রপ্তানি করে (যেমন "12.34567891")। প্রোডাকশন বিল্ড পাইপলাইনে SVGO (SVG Optimizer) চালিয়ে এই বাড়তি কোড ছেঁটে ফেলা হয়, যার ফলে ভেক্টর ফাইলের আকার ৬০ শতাংশ পর্যন্ত কমে যায়। তবে ডেভেলপারদের সতর্কতার সাথে SVGO কনফিগার করতে হয়: কোনো অবস্থাতেই "viewBox" মুছে ফেলা যাবে না (যা রেসপন্সিভ স্কেলিং নষ্ট করে), গ্রেডিয়েন্ট ও <use>-এর জন্য প্রয়োজনীয় "id" অক্ষুণ্ণ রাখতে হবে এবং অ্যাক্সেসিবিলিটির জন্য "<title>" সংরক্ষণ করতে হবে। দশমিকের মান ২ বা ৩ ঘরে সীমিত রাখলে চোখের দেখায় কোনো পরিবর্তন না করেই ফাইলের সাইজ বহুলাংশে ছোট করা যায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Consolidate icons with <symbol> sprites: Define icons once in a sprite sheet to save bandwidth and prevent DOM clutter.',
          bn: 'আইকন স্প্রাইটে <symbol> ব্যবহার করুন: ব্যান্ডউইথ বাঁচাতে এবং ডম পরিচ্ছন্ন রাখতে স্প্রাইট শিটে একবার আইকন সংজ্ঞায়িত করুন।'
        },
        {
          en: 'Size icons with 1em and currentColor: Enable automatic typographic scaling and seamless dark-mode theming with zero duplicate code.',
          bn: '1em এবং currentColor দিয়ে আইকন সাজান: লেখার সাইজ ও রঙের সাথে স্বয়ংক্রিয়ভাবে মেলানোর মাধ্যমে কোডের পুনরাবৃত্তি কমান।'
        },
        {
          en: 'Run SVGO with defensive rules: Strip editor metadata and tune decimal precision to 2 while strictly keeping the viewBox.',
          bn: 'নিয়ম মেনে SVGO চালান: মেটাডেটা ছেঁটে দশমিকের ঘর ২ এ নামিয়ে আনুন, তবে viewBox কখনোই মুছবেন না।'
        },
        {
          en: 'Deliver safe raster fallbacks: Pre-render PNG or WebP images via Canvas for Open Graph social cards and legacy platforms.',
          bn: 'নিরাপদ রাস্টার ব্যাকআপ রাখুন: সোশ্যাল মিডিয়া প্রিভিউ কার্ডের জন্য ক্যানভাস দিয়ে পিএনজি বা ওয়েবপি ব্যাকআপ প্রস্তুত রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cr-ex1',
      kind: 'mcq',
      topic: 'symbol-vs-g-container-distinction',
      question: {
        en: 'What is the key architectural difference between defining an icon template inside a <symbol> versus inside a standard <g> group?',
        bn: 'একটি আইকন টেমপ্লেটকে সাধারণ <g> গ্রুপের বদলে <symbol>-এর ভেতর তৈরি করার প্রধান প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        {
          en: '<symbol> provides its own independent viewBox and preserveAspectRatio attributes, and it remains completely invisible in the document until referenced by a <use> element',
          bn: '<symbol> তার নিজস্ব স্বাধীন viewBox এবং preserveAspectRatio ধারণ করে, এবং <use> ট্যাগ দিয়ে না ডাকা পর্যন্ত এটি ডকুমেন্টে সম্পূর্ণ অদৃশ্য থাকে'
        },
        {
          en: '<symbol> converts vector graphics into encrypted binary executables',
          bn: '<symbol> ভেক্টর গ্রাফিক্সকে এনক্রিপ্ট করা ফাইলে রূপান্তর করে'
        },
        {
          en: '<g> was banned in the SVG2 specification',
          bn: 'কারণ SVG2 স্পেসিফিকেশনে <g> নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: '<symbol> reduces computer monitor electricity usage by 90 percent',
          bn: '<symbol> মনিটরের বিদ্যুৎ খরচ ৯০ শতাংশ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '<symbol> has its own viewBox and does not render until used.',
        bn: '<symbol>-এর নিজস্ব viewBox থাকে এবং ব্যবহার না করা পর্যন্ত প্রদর্শিত হয় না।'
      },
      explanation: {
        en: '<symbol> combines the grouping power of <g> with independent viewBox scaling and deferred rendering semantics.',
        bn: '<symbol> নিজস্ব viewBox স্কেলিং সুবিধা দেয় এবং কল না করা পর্যন্ত পর্দায় ভেসে ওঠে না।'
      }
    },
    {
      id: 'cr-ex2',
      kind: 'mcq',
      topic: 'svgo-safe-configuration-rules',
      question: {
        en: 'When configuring SVGO for a modern responsive design system, why is the plugin "removeViewBox: false" mandatory?',
        bn: 'আধুনিক রেসপন্সিভ ডিজাইন সিস্টেমে SVGO কনফিগার করার সময় "removeViewBox: false" রাখা কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Removing the viewBox destroys the mathematical coordinate aspect ratio, causing responsive SVGs with CSS width: 100% to fail scaling and fall back to the unscaled 300x150 default box',
          bn: 'viewBox মুছে দিলে গাণিতিক অ্যাসপেক্ট রেশিও নষ্ট হয়ে যায়, যার ফলে সিএসএসে width: 100% দিলে এসভিজি আর রেসপন্সিভভাবে স্কেল হয় না এবং ৩০০×১৫০ ডিফল্ট মাপে আটকে যায়'
        },
        {
          en: 'Because removing viewBox turns all colors into bright orange',
          bn: 'কারণ viewBox মুছে দিলে সব রঙ কমলা হয়ে যায়'
        },
        {
          en: 'To prevent computer processors from running too cold',
          bn: 'যাতে কম্পিউটার প্রসেসর অতিরিক্ত ঠান্ডা না হয়ে যায়'
        },
        {
          en: 'removeViewBox was mandated by the United Nations in 2021',
          bn: 'কারণ ২০২১ সালে জাতিসংঘ এটি বাধ্যতামূলক করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Never strip the viewBox: it is the law of responsive vector scaling.',
        bn: 'viewBox কখনো মুছবেন না: এটি রেসপন্সিভ ভেক্টর স্কেলিংয়ের মূল চালিকাশক্তি।'
      },
      explanation: {
        en: 'Retaining the viewBox ensures icons scale proportionally inside dynamic fluid CSS layout boxes.',
        bn: 'viewBox বহাল রাখলে যেকোনো আধুনিক সিএসএস কনটেইনারে আইকন সুন্দরভাবে অনুপাত বজায় রেখে স্কেল হয়।'
      }
    },
    {
      id: 'cr-ex3',
      kind: 'mcq',
      topic: 'open-graph-raster-fallback-necessity',
      question: {
        en: 'Why must enterprise web platforms generate PNG or WebP raster fallbacks for SVG brand marks when sharing links on social media platforms (Open Graph meta tags)?',
        bn: 'সোশ্যাল মিডিয়ায় লিংক শেয়ারের সময় (Open Graph মেটা ট্যাগ) এন্টারপ্রাইজ ওয়েবসাইটে এসভিজি ব্র্যান্ড মার্কের পাশাপাশি কেন পিএনজি বা ওয়েবপি রাস্টার ব্যাকআপ তৈরি করতে হয়?'
      },
      options: [
        {
          en: 'Virtually all major social media crawlers, messaging apps, and Open Graph card generators (e.g. Twitter/X, Facebook, LinkedIn, Slack) strictly prohibit SVG images due to XSS security risks and crawler parsing limitations',
          bn: 'প্রায় সমস্ত সোশ্যাল মিডিয়া ক্রলার, মেসেজিং অ্যাপ এবং ওপেন গ্রাফ প্রিভিউ জেনারেটর (যেমন টুইটার/এক্স, ফেসবুক, লিংকডইন, স্ল্যাক) এক্সএসএস নিরাপত্তা ঝুঁকি ও পার্সিং জটিলতার কারণে এসভিজি সম্পূর্ণ নিষিদ্ধ করে কেবল পিএনজি বা জেপিইজি গ্রহণ করে'
        },
        {
          en: 'Because raster images consume zero bytes of internet bandwidth',
          bn: 'কারণ রাস্টার ছবি ইন্টারনেটের কোনো ব্যান্ডউইথ খরচ করে না'
        },
        {
          en: 'Open Graph was declared obsolete by international law in 2019',
          bn: 'কারণ ২০১৯ সালে ওপেন গ্রাফ বাতিল করা হয়েছিল'
        },
        {
          en: 'To turn off the user smartphone screen during link sharing',
          bn: 'লিংক শেয়ারের সময় ব্যবহারকারীর ফোনের স্ক্রিন বন্ধ করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Social media scrapers reject SVG for security and compatibility. Always provide a PNG fallback.',
        bn: 'সোশ্যাল মিডিয়া ক্রলাররা নিরাপত্তার কারণে এসভিজি বাতিল করে; সর্বদা পিএনজি ব্যাকআপ দিতে হয়।'
      },
      explanation: {
        en: 'Social platforms disallow SVG in og:image metadata to prevent vector XSS exploits against their unfurl preview pipelines.',
        bn: 'সোশ্যাল প্ল্যাটফর্মগুলো নিরাপত্তার স্বার্থে মেটা ট্যাগে এসভিজি অনুমোদন করে না, তাই রাস্টার ব্যাকআপ জরুরি।'
      }
    },
    {
      id: 'cr-ex4',
      kind: 'mcq',
      topic: 'use-sprite-external-file-caching',
      question: {
        en: 'What caching advantage does referencing an external SVG sprite file (<use href="/sprites.svg#icon-home" />) provide over inline SVG embedding?',
        bn: 'ইনলাইন এসভিজির তুলনায় বাহ্যিক এসভিজি স্প্রাইট ফাইল (<use href="/sprites.svg#icon-home" />) ব্যবহার করার প্রধান ক্যাশিং সুবিধা কী?'
      },
      options: [
        {
          en: 'The browser fetches the sprite file once and caches it in the HTTP disk cache; subsequent page visits across the entire website reuse the cached sprite without bloating individual HTML document payloads',
          bn: 'ব্রাউজার স্প্রাইট ফাইলটি কেবল একবার ডাউনলোড করে তার এইচটিটিপি ডিস্ক ক্যাশে রেখে দেয়; ফলে ওয়েবসাইটের অন্যান্য পেজে যাওয়ার সময় ক্যাশ থেকেই আইকন দেখানো হয় এবং এইচটিএমএল ফাইলের আকার ছোট থাকে'
        },
        {
          en: 'External sprites permanently disable user internet bills',
          bn: 'বাহ্যিক স্প্রাইট ব্যবহারকারীর ইন্টারনেটের খরচ বন্ধ করে দেয়'
        },
        {
          en: 'Because external sprites was invented by international shipping guilds',
          bn: 'কারণ আন্তর্জাতিক শিপিং গিল্ড এটি আবিষ্কার করেছিল'
        },
        {
          en: 'It forces the client device to restart every hour',
          bn: 'এটি প্রতি ঘণ্টায় ডিভাইস রিস্টার্ট করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'External file = 1 network download + cached across all pages on the domain.',
        bn: 'বাহ্যিক ফাইল = ১ বার ডাউনলোড + পুরো ডোমেইনের সব পেজে দ্রুত ক্যাশ সুবিধা।'
      },
      explanation: {
        en: 'External sprite files maximize HTTP caching efficiency, decoupling icon assets from HTML page transfer payloads.',
        bn: 'বাহ্যিক স্প্রাইট ফাইল ব্রাউজার ক্যাশিংয়ের পূর্ণ সুবিধা নিয়ে পেজ লোডিং গতি বহুগুণ বাড়িয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'cathedral-rehearsal-quiz',
    title: {
      en: 'SVG Production, Icon Systems, and Optimization Capstone Quiz',
      bn: 'এসভিজি প্রোডাকশন, আইকন সিস্টেম ও অপ্টিমাইজেশন ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'crq-q1',
        kind: 'mcq',
        topic: 'pixel-grid-alignment-crispness',
        question: {
          en: 'Why do production design systems strictly align icon vector paths to an integer coordinate grid (such as a 24x24 unit grid)?',
          bn: 'প্রোডাকশন ডিজাইন সিস্টেমে আইকন ভেক্টর পাথগুলোকে কেন কঠোরভাবে পূর্ণসংখ্যার গ্রিডে (যেমন ২৪×২৪ গ্রিড) সারিবদ্ধ করা হয়?'
        },
        options: [
          {
            en: 'To prevent "sub-pixel anti-aliasing blur", ensuring straight lines align cleanly with physical screen pixel boundaries rather than splitting across adjacent pixels and appearing fuzzy',
            bn: '"সাব-পিক্সেল অ্যান্টি-অ্যালিয়াসিং ঝাপসাভাব" প্রতিরোধ করতে, যার ফলে সোজা রেখাগুলো স্ক্রিনের আসল পিক্সেল সীমানার সাথে নিখুঁতভাবে মেলে এবং কোনো অস্পষ্ট দাগ তৈরি করে না'
          },
          {
            en: 'Because integer coordinates are required for printing on color paper',
            bn: 'কারণ রঙিন কাগজে প্রিন্ট করতে পূর্ণসংখ্যার স্থানাঙ্ক লাগে'
          },
          {
            en: 'Decimal coordinates format the client device storage on render',
            bn: 'দশমিক স্থানাঙ্ক ডিভাইসের মেমরি মুছে ফেলে'
          },
          {
            en: 'To prevent computer screens from consuming electricity',
            bn: 'যাতে মনিটরের বিদ্যুৎ খরচ বন্ধ থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Integer coordinates snap to screen pixels, eliminating fuzzy anti-aliased borders.',
          bn: 'পূর্ণসংখ্যার স্থানাঙ্ক পিক্সেলের সাথে মিলে যায়, ফলে বর্ডার সম্পূর্ণ তীক্ষ্ণ ও স্পষ্ট থাকে।'
        },
        explanation: {
          en: 'Grid-snapped vector geometry aligns path strokes with pixel grids, eliminating sub-pixel interpolation blur.',
          bn: 'গ্রিডে মেলানো ভেক্টর শেপ স্ক্রিনের পিক্সেল বাউন্ডারির সাথে নিখুঁতভাবে বসে অত্যন্ত তীক্ষ্ণ দেখায়।'
        }
      },
      {
        id: 'crq-q2',
        kind: 'mcq',
        topic: 'react-svg-component-prop-forwarding',
        question: {
          en: 'In modern component libraries (React, Vue, Svelte), how are SVG icon components designed for maximum accessibility and flexibility?',
          bn: 'আধুনিক কম্পোনেন্ট লাইব্রেরিতে (React, Vue, Svelte) সর্বোচ্চ অ্যাক্সেসিবিলিটি ও নমনীয়তা নিশ্চিত করতে এসভিজি আইকন কম্পোনেন্ট কীভাবে ডিজাইন করা হয়?'
        },
        options: [
          {
            en: 'They expose size and title props with defaults (width="1em" height="1em"), apply aria-hidden="true" by default for decorative use, accept an optional title/aria-label for semantic use, and forward all other SVG attributes via rest props',
            bn: 'তারা ডিফল্ট হিসেবে 1em মাপ নির্ধারণ করে, সাধারণ ক্ষেত্রে aria-hidden="true" প্রয়োগ করে, অর্থপূর্ণ ব্যবহারের জন্য title বা aria-label গ্রহণ করে এবং বাকি সমস্ত প্রপার্টি সরাসরি এসভিজি ট্যাগে পৌঁছে দেয়'
          },
          {
            en: 'They convert all vector paths into raw video streams',
            bn: 'তারা সব ভেক্টর পাথকে সরাসরি ভিডিও ফাইলে রূপান্তর করে'
          },
          {
            en: 'They permanently delete all CSS files from the project',
            bn: 'তারা প্রজেক্ট থেকে সমস্ত সিএসএস ফাইল মুছে ফেলে'
          },
          {
            en: 'Component wrappers were declared obsolete by the W3C in 2021',
            bn: 'কারণ ২০২১ সালে W3C কম্পোনেন্ট র্যাপার নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '1em sizing + default aria-hidden + semantic title override + prop forwarding.',
          bn: '1em মাপ + ডিফল্ট aria-hidden + প্রয়োজনবোধে title প্রপস + সম্পূর্ণ প্রপস ফরওয়ার্ডিং।'
        },
        explanation: {
          en: 'Properly architected icon components guarantee accessible screen-reader defaults, flexible styling, and seamless API ergonomics.',
          bn: 'সঠিকভাবে তৈরি আইকন কম্পোনেন্ট স্বয়ংক্রিয়ভাবে অ্যাক্সেসিবিলিটি বজায় রাখে এবং ব্যবহারের ক্ষেত্রে পূর্ণ স্বাধীনতা দেয়।'
        }
      },
      {
        id: 'crq-q3',
        kind: 'mcq',
        topic: 'svgo-precision-tuning-impact',
        question: {
          en: 'What balance is achieved when configuring SVGO float precision to 2 decimal places instead of leaving default unconstrained floats?',
          bn: 'SVGO-তে ফ্লোট প্রিসিশন ডিফল্ট রাখার বদলে দশমিকের পর ২ ঘরে সীমিত রাখলে কোন ভারসাম্যটি অর্জিত হয়?'
        },
        options: [
          {
            en: 'It dramatically shrinks path string byte size by discarding invisible micro-fractions of a pixel while preserving visual fidelity to within one-hundredth of a pixel',
            bn: 'পিক্সেলের অদৃশ্য ক্ষুদ্র ভগ্নাংশ ছেঁটে ফেলে এটি ফাইলের সাইজ বহুলাংশে ছোট করে, অথচ পিক্সেলের এক-শতাংশ সূক্ষ্মতায় সম্পূর্ণ ভিজ্যুয়াল সৌন্দর্য নিখুঁত রাখে'
          },
          {
            en: 'It reduces internet connection bills by 90 percent',
            bn: 'এটি ইন্টারনেটের বিল ৯০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'Precision tuning turns all straight lines into curved circles',
            bn: 'প্রিসিশন পরিবর্তন করলে সব সরলরেখা বৃত্তে পরিণত হয়'
          },
          {
            en: 'Because precision 2 was mandated by international radio treaties in 2020',
            bn: 'কারণ ২০২০ সালে আন্তর্জাতিক রেডিও চুক্তিতে প্রিসিশন ২ বাধ্যতামূলক করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Two decimals preserve high visual precision while eliminating massive file bloat.',
          bn: 'দশমিকের পর ২ ঘর রাখলে চোখের দেখার কোনো ক্ষতি না করেই ফাইলের সাইজ অনেক কমে যায়।'
        },
        explanation: {
          en: 'Sub-pixel coordinates beyond 2 decimal places are imperceptible on screens but waste thousands of characters in transfer payloads.',
          bn: 'দশমিকের পর ২ ঘরের অতিরিক্ত সংখ্যা স্ক্রিনে কোনো দৃশ্যমান পার্থক্য আনে না, কেবল অকারণে ফাইলের সাইজ বাড়ায়।'
        }
      },
      {
        id: 'crq-q4',
        kind: 'mcq',
        topic: 'monochrome-single-ink-currentColor-contract',
        question: {
          en: 'Why do production design systems mandate that all monochromatic UI icons must be authored as "single-ink" graphics (fill="none" and stroke="currentColor")?',
          bn: 'প্রোডাকশন ডিজাইন সিস্টেমে কেন সমস্ত একরঙা ইউআই আইকনকে "সিঙ্গেল-ইঙ্ক" (fill="none" এবং stroke="currentColor") হিসেবে তৈরির নির্দেশ দেওয়া হয়?'
        },
        options: [
          {
            en: 'It strips all hardcoded color literals (#000, #333) from the markup, empowering parent CSS stylesheets to re-theme the entire icon set across primary, success, warning, danger, and dark-mode states through CSS text color alone',
            bn: 'এটি এসভিজি থেকে সমস্ত স্থায়ী রঙের কোড (#000, #333) মুছে দেয়, যার ফলে মূল সিএসএস স্টাইলশিট কেবল লেখার রঙের মাধ্যমে প্রাইমারি, সাকসেস, ওয়ার্নিং এবং ডার্ক মোডের সব আইকনকে অনায়াসে নতুন রঙ দিতে পারে'
          },
          {
            en: 'Single-ink icons format the client device hard drive on load',
            bn: 'সিঙ্গেল-ইঙ্ক আইকন পেজ লোডের সময় হার্ড ড্রাইভ মুছে ফেলে'
          },
          {
            en: 'Because single-ink icons were invented by maritime telegraph operators in 1912',
            bn: 'কারণ ১৯১২ সালে টেলিগ্রাফ অপারেটররা এটি তৈরি করেছিল'
          },
          {
            en: 'To prevent computer screens from overheating in the summer',
            bn: 'গ্রীষ্মকালে যাতে কম্পিউটার মনিটর অতিরিক্ত গরম না হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'No hardcoded colors: pure currentColor enables seamless CSS token recoloring.',
          bn: 'স্থায়ী রঙের বদলে currentColor ব্যবহার করলে সিএসএস দিয়ে খুব সহজে আইকনের রঙ বদলানো যায়।'
        },
        explanation: {
          en: 'Decoupling geometry from color literals makes vector assets fully themeable via surrounding typography and CSS utility classes.',
          bn: 'স্থায়ী রঙ পরিহার করলে আইকনগুলো আধুনিক সিএসএস ক্লাসের মাধ্যমে যেকোনো থিমে চমৎকারভাবে মানিয়ে যায়।'
        }
      }
    ]
  }
};
