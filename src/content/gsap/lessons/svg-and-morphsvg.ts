import type { Lesson } from '../../../lib/types';

export const SvgAndMorphSvgLesson: Lesson = {
  slug: 'svg-and-morphsvg',
  tech: 'gsap',
  title: {
    en: 'SVG Animation, DrawSVG & MorphSVG — Fluid Organic Vector Motion',
    bn: 'এসভিজি অ্যানিমেশন, ড্র-এসভিজি ও মর্ফ-এসভিজি — ফ্লুইড অর্গানিক ভেক্টর মোশন'
  },
  summary: {
    en: 'Scalable Vector Graphics (SVG) provide crisp, resolution-independent shapes ideal for interactive web storytelling. However, animating complex SVG paths via standard CSS or native SMIL triggers rendering bugs across browsers. GSAP normalizes SVG animation bugs and unlocks specialized plugins: DrawSVGPlugin and MorphSVGPlugin. DrawSVG animates vector strokes progressively by manipulating stroke-dasharray and stroke-dashoffset math. MorphSVG accomplishes what raw CSS cannot: transforming one path into an entirely different shape (such as a hamburger icon morphing into a close cross). MorphSVG automatically handles mismatched point counts and aligns bezier tangent handles for organic, fluid morphing.',
    bn: 'স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) যেকোনো স্ক্রিনে নিখুঁত ও পরিষ্কার চিত্র উপস্থাপন করে। কিন্তু সাধারণ সিএসএস দিয়ে জটিল এসভিজি পাথ অ্যানিমেট করতে গেলে বিভিন্ন ব্রাউজারে ত্রুটি দেখা দেয়। GSAP এসভিজির ব্রাউজার ত্রুটিগুলো দূর করে দুটি বিশেষ প্লাগইন উন্মোচন করে: DrawSVGPlugin এবং MorphSVGPlugin। DrawSVG ভেক্টর রেখাকে ধীরে ধীরে আঁকার চমৎকার প্রভাব তৈরি করে। অন্যদিকে MorphSVG সম্পূর্ণ ভিন্ন দুটি আকারের মধ্যে মসৃণ রূপান্তর ঘটায় (যেমন হ্যামবার্গার মেনু আইকন একটি ক্রস চিহ্নে বদলে যাওয়া)। এটি অসম পয়েন্ট সংখ্যা সমন্বয় করে ফ্লুইড ভেক্টর মোশন নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Why SVG Vector Motion Dominates Web Design',
        bn: 'মূল ধারণা: ওয়েব ডিজাইনে এসভিজি ভেক্টর মোশনের প্রাধান্য'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'Scalable Vector Graphics (SVG) represent shapes mathematically using lines, curves, and fills. Unlike raster image files that pixelate when zoomed, vector graphics scale infinitely without quality loss and weigh mere kilobytes. However, vector elements possess their own internal coordinate space governed by viewport boundaries. The GreenSock Animation Platform abstracts transform-origin quirks and guarantees smooth vector motion across all modern browsers.',
        bn: 'স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) রেখা, বক্ররেখা এবং রঙের সাহায্যে গাণিতিকভাবে আকৃতি তৈরি করে। সাধারণ ছবির মতো জুম করলে এগুলো ফেটে যায় না, বরং অসীম পর্যন্ত নিখুঁত থাকে এবং ফাইলের আকারও থাকে সামান্য। তবে ভেক্টর উপাদানের নিজস্ব অভ্যন্তরীণ স্থানাঙ্ক ব্যবস্থা থাকে। গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম ব্রাউজারের সমস্ত অরিজিন জটিলতা দূর করে মসৃণ ভেক্টর মোশন নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'DrawSVGPlugin',
          def: {
            en: 'A GSAP plugin that animates the progressive drawing of SVG strokes using stroke-dasharray and dashoffset mathematics',
            bn: 'একটি GSAP প্লাগইন যা স্ট্রোক-ড্যাশঅফসেট গণিত ব্যবহার করে এসভিজি রেখা আঁকার চমৎকার রূপ দেয়'
          }
        },
        {
          term: 'MorphSVGPlugin',
          def: {
            en: 'An advanced plugin that smoothly morphs one SVG path into another, reconciling unequal anchor point counts automatically',
            bn: 'একটি উন্নত প্লাগইন যা স্বয়ংক্রিয়ভাবে পয়েন্ট সমন্বয় করে একটি এসভিজি আকৃতিকে সম্পূর্ণ ভিন্ন আকৃতিতে রূপান্তর করে'
          }
        },
        {
          term: 'strokeDashoffset',
          def: {
            en: 'A CSS / SVG property dictating where along a vector path a dashed stroke pattern begins, used to reveal or hide strokes',
            bn: 'একটি এসভিজি প্রপার্টি যা নির্ধারণ করে রেখার কোন অংশ থেকে স্ট্রোক দৃশ্যমান হবে'
          }
        },
        {
          term: 'SVG viewBox Coordinates',
          def: {
            en: 'The internal virtual canvas coordinate space of an SVG element, independent of rendered CSS display dimensions',
            bn: 'এসভিজির অভ্যন্তরীণ ভার্চুয়াল ক্যানভাস স্থানাঙ্ক যা স্ক্রিন সাইজের ওপর নির্ভর করে না'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'stroke-and-morph-mechanics',
      text: {
        en: 'Stroke Drawing Mechanics & Bezier Point Morphing',
        bn: 'স্ট্রোক ড্রয়িং মেকানিক্স ও বেজিয়ার পয়েন্ট মর্ফিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To create a line-drawing reveal manually, developers calculate the total path length (path.getTotalLength()) and set strokeDasharray and strokeDashoffset to that exact value. Animating strokeDashoffset to 0 progressively reveals the stroke. DrawSVGPlugin simplifies this to a single readable parameter: drawSVG: "100%". For shape morphing, MorphSVGPlugin samples both start and target paths, inserts intermediate anchor points on the simpler path, and interpolates bezier coordinates effortlessly.',
        bn: 'ম্যানুয়ালি রেখা আঁকার অ্যানিমেশন করতে গেলে পাথের মোট দৈর্ঘ্য (getTotalLength) মেপে ড্যাশঅফসেট সমান মান দিতে হয়। এরপর ড্যাশঅফসেট ০ এ নামালে পুরো রেখাটি ফুটে ওঠে। DrawSVGPlugin এই জটিলতাকে একটি সহজ প্যারামিটারে রূপান্তর করেছে: drawSVG: "100%"। আর মর্ফিংয়ের ক্ষেত্রে MorphSVGPlugin দুটি আকৃতির পয়েন্ট সংখ্যা সমান করে বেজিয়ার কার্ভের মাধ্যমে মসৃণ রূপান্তর ঘটায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'SVG Animation Capabilities Comparison',
        bn: 'এসভিজি অ্যানিমেশন সক্ষমতার তুলনা'
      },
      head: [
        { en: 'Animation Challenge', bn: 'চ্যালেঞ্জ' },
        { en: 'Pure CSS / Native SMIL', bn: 'সাধারণ সিএসএস / এসআইএমএল' },
        { en: 'GSAP DrawSVG & MorphSVG', bn: 'GSAP ড্র-এসভিজি ও মর্ফ-এসভিজি' }
      ],
      rows: [
        [
          { en: 'Stroke Path Drawing', bn: 'ভেক্টর রেখা অঙ্কন' },
          { en: 'Requires manual JS getTotalLength and brittle CSS keyframes', bn: 'ম্যানুয়ালি দৈর্ঘ্য মেপে জটিল সিএসএস লিখতে হয়' },
          { en: 'Single parameter: drawSVG: "0% 100%" with full timeline controls', bn: 'সহজ প্যারামিটার: drawSVG: "0% 100%" যা নিখুঁতভাবে চলে' }
        ],
        [
          { en: 'Shape Morphing', bn: 'আকৃতি রূপান্তর' },
          { en: 'Fails unless both paths have the exact identical number of points', bn: 'উভয় পাথে হুবহু একই সংখ্যক পয়েন্ট না থাকলে ব্যর্থ হয়' },
          { en: 'Seamless morphing between shapes with differing point counts', bn: 'ভিন্ন পয়েন্ট সংখ্যা হলেও নিখুঁত ও মসৃণ রূপান্তর ঘটায়' }
        ],
        [
          { en: 'Cross-Browser Origin Math', bn: 'ট্রান্সফর্ম অরিজিন হিসাব' },
          { en: 'Buggy Safari transform-origin offsets requiring hacks', bn: 'সাফারি ব্রাউজারে অদ্ভুত অফসেট বাগ তৈরি করে' },
          { en: 'Flawless transformOrigin: "50% 50%" normalization across all engines', bn: 'সব ব্রাউজারে ৫০% ৫০% কেন্দ্রবিন্দু নিখুঁত রাখে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: SVG Path Length & Stroke Dashoffset Calculation',
        bn: 'চালনাযোগ্য সিমুলেশন: এসভিজি পাথ দৈর্ঘ্য ও স্ট্রোক ড্যাশঅফসেট গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script simulates the mathematical relationship between total vector path circumference, stroke reveal percentage, and remaining stroke dashoffset:',
        bn: 'নিচের স্ক্রিপ্টটি ভেক্টর পাথের মোট পরিধি, রেখা দৃশ্যমান হওয়ার শতাংশ এবং ড্যাশঅফসেটের গাণিতিক রূপ প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'gsap-svg-sim',
      lang: 'javascript',
      code: `// GSAP SVG Path Length & Stroke Dashoffset Simulator

// Simulating a circular vector path with radius = 100px
// Circumference = 2 * Math.PI * r = 2 * 3.14159 * 100 ≈ 628px
const totalPathLength = 628;

// Desired stroke reveal progress: 75% drawn
const drawPercent = 0.75;

// Formula: remaining offset = totalLength * (1 - progress)
const strokeDashoffset = totalPathLength * (1 - drawPercent);

console.log('Total SVG vector path circumference length in pixels:', totalPathLength);
// -> Total SVG vector path circumference length in pixels: 628

console.log('Remaining stroke dashoffset at 75 percent reveal:', Number(strokeDashoffset.toFixed(1)));
// -> Remaining stroke dashoffset at 75 percent reveal: 157

console.log('Drawn stroke percentage revealed to user:', drawPercent * 100);
// -> Drawn stroke percentage revealed to user: 75`,
      caption: {
        en: 'Figure 4: For a 628px circle path, revealing 75% reduces dashoffset from 628 to 157',
        bn: 'চিত্র ৪: ৬২৮ পিক্সেল বৃত্তাকার পাথে ৭৫% দৃশ্যমান করতে ড্যাশঅফসেট ৬২৮ থেকে কমে ১৫৭ হয়'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for SVG Vector Animations',
        bn: 'এসভিজি ভেক্টর অ্যানিমেশনের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules to avoid rendering bugs and ensure razor-sharp vector performance:',
        bn: 'ব্রাউজার ত্রুটি এড়াতে এবং নিখুঁত ভেক্টর মোশনের জন্য এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Set transformOrigin: "50% 50%" on SVG Nodes',
          def: {
            en: 'Browsers disagree on whether SVG transform origins anchor to the SVG viewport or element box; GSAP normalizes this',
            bn: 'সাফারি ও ক্রোম ব্রাউজারের অরিজিন অমিল দূর করতে সর্বদা transformOrigin: "50% 50%" দিন'
          }
        },
        {
          term: 'Rule 2: Inline SVGs Directly into the DOM',
          def: {
            en: 'Never embed SVGs via <img> tags if you plan to animate internal paths; GSAP requires direct inline SVG DOM access',
            bn: 'অ্যানিমেট করতে চাইলে <img> ট্যাগে না রেখে সরাসরি ইনলাইন এসভিজি হিসেবে এইচটিএমএলে রাখুন'
          }
        },
        {
          term: 'Rule 3: Clean Vector Anchor Points in Illustrator or Figma',
          def: {
            en: 'Export simplified paths with minimal redundant bezier points to prevent unnecessary morphing CPU calculations',
            bn: 'অপ্রয়োজনীয় পয়েন্ট ডিলিট করে হালকা পাথ এক্সপোর্ট করুন যাতে মর্ফিংয়ে সিপিইউ চাপ কম পড়ে'
          }
        },
        {
          term: 'Rule 4: Use shapeIndex to Eliminate Shape Twisting',
          def: {
            en: 'If a morphing shape appears to twist awkwardly on itself, adjust morphSVG: { shapeIndex: n } to rotate the anchor matching order',
            bn: 'মর্ফিংয়ের সময় আকৃতি দুমড়ে গেলে shapeIndex টিউন করে পয়েন্ট মেলানোর কোণ ঠিক করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-dashoffset-calc-ex',
      kind: 'mcq',
      topic: 'Stroke dashoffset calculation for 75 percent reveal',
      question: {
        en: 'For an SVG vector line with total length 628 pixels, what should the strokeDashoffset be to reveal exactly 75 percent of the stroke?',
        bn: '৬২৮ পিক্সেল দৈর্ঘ্যের একটি এসভিজি রেখার ঠিক ৭৫ শতাংশ দৃশ্যমান করতে strokeDashoffset কত হতে হবে?'
      },
      options: [
        {
          en: '157 pixels (628 * (1 - 0.75))',
          bn: '১৫৭ পিক্সেল (৬২৮ * (১ - ০.৭৫))'
        },
        {
          en: '628 pixels (0% revealed)',
          bn: '৬২৮ পিক্সেল (০% দৃশ্যমান)'
        },
        {
          en: '0 pixels (100% revealed)',
          bn: '০ পিক্সেল (১০০% দৃশ্যমান)'
        },
        {
          en: '500 pixels',
          bn: '৫০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply 628 by 0.25 remaining hidden length.',
        bn: '৬২৮ কে বাকি থাকা ০.২৫ অংশ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'To reveal 75%, 25% remains hidden: 628 * 0.25 = 157 pixels offset.',
        bn: '৭৫% দৃশ্যমান করার অর্থ ২৫% লুকানো থাকবে: ৬২৮ * ০.২৫ = ১৫৭ পিক্সেল।'
      }
    },
    {
      id: 'gsap-morphsvg-advantage-ex',
      kind: 'mcq',
      topic: 'MorphSVGPlugin point reconciliation capability',
      question: {
        en: 'Why does GSAP MorphSVGPlugin succeed where pure CSS path morphing fails?',
        bn: 'সাধারণ সিএসএস যেখানে ব্যর্থ হয় সেখানে GSAP MorphSVGPlugin কেন সফলভাবে রূপান্তর ঘটায়?'
      },
      options: [
        {
          en: 'It dynamically subdivides paths and reconciles mismatched anchor point counts between different shapes',
          bn: 'এটি দুটি ভিন্ন আকৃতির মধ্যকার অসম পয়েন্ট সংখ্যা স্বয়ংক্রিয়ভাবে হিসাব করে সমান করে নেয়'
        },
        {
          en: 'It converts the vector paths into 3D polygon meshes',
          bn: 'এটি ভেক্টরকে 3D পলিগনে বদলে দেয়'
        },
        {
          en: 'It removes all color from the graphic',
          bn: 'এটি গ্রাফিক্স থেকে সমস্ত রঙ মুছে ফেলে'
        },
        {
          en: 'It requires the user to install a browser extension',
          bn: 'এটি ব্রাউজারে এক্সটেনশন ইনস্টল করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Automatic anchor point reconciliation.',
        bn: 'স্বয়ংক্রিয় পয়েন্ট সমন্বয়ের কথা ভাবুন।'
      },
      explanation: {
        en: 'CSS requires identical segment counts; MorphSVG automatically injects points on the simpler path to morph smoothly.',
        bn: 'সিএসএসে সমান সংখ্যক পয়েন্ট থাকতে হয়; MorphSVG নিজে থেকেই প্রয়োজনীয় পয়েন্ট বসিয়ে চমৎকার মর্ফিং নিশ্চিত করে।'
      }
    },
    {
      id: 'gsap-svg-inline-rule-ex',
      kind: 'mcq',
      topic: 'Why inline SVG is mandatory for DOM animation',
      question: {
        en: 'Why can you NOT animate internal SVG paths with GSAP if the SVG is loaded via a standard <img src="icon.svg"> tag?',
        bn: 'একটি এসভিজি সাধারণ <img src="icon.svg"> ট্যাগে লোড করা থাকলে GSAP দিয়ে কেন এর ভেতরের পাথ অ্যানিমেট করা যায় না?'
      },
      options: [
        {
          en: 'Images are isolated in a separate security document context; JavaScript cannot access their internal DOM elements',
          bn: 'ছবিগুলো আলাদা সিকিউরিটি কনটেক্সটে থাকে, ফলে জাভাস্ক্রিপ্ট ভেতরের ডম উপাদান অ্যাক্সেস করতে পারে না'
        },
        {
          en: 'Because HTML img tags do not support SVG format',
          bn: 'কারণ img ট্যাগ এসভিজি ফরম্যাট সাপোর্ট করে না'
        },
        {
          en: 'Because GSAP only works on Canvas elements',
          bn: 'কারণ GSAP শুধুমাত্র ক্যানভাসে কাজ করে'
        },
        {
          en: 'Because the image file size is too small',
          bn: 'কারণ ছবির ফাইল সাইজ খুব ছোট থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Document boundary isolation in img tags.',
        bn: 'img ট্যাগের অভ্যন্তরীণ সিকিউরিটি বাউন্ডারির কথা ভাবুন।'
      },
      explanation: {
        en: 'Browser security prevents scripts from reaching inside <img> sandboxes; the SVG must be inline in the HTML document.',
        bn: 'ব্রাউজার সিকিউরিটি img ট্যাগের ভেতরে স্ক্রিপ্ট চালাতে দেয় না; তাই এসভিজি সরাসরি ইনলাইন কোড হিসেবে রাখতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-svg-morphing',
    title: {
      en: 'SVG Animation & Morphing Architecture Quiz',
      bn: 'এসভিজি অ্যানিমেশন ও মর্ফিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-drawsvg-param',
        kind: 'mcq',
        topic: 'DrawSVG parameter shorthand',
        question: {
          en: 'What does drawSVG: "0% 100%" instruct GSAP to do with an SVG stroke?',
          bn: 'drawSVG: "0% 100%" নির্দেশনাটি এসভিজি রেখার সাথে কী করতে নির্দেশ দেয়?'
        },
        options: [
          {
            en: 'Fully reveals the complete vector stroke from its starting point to its ending terminal',
            bn: 'ভেক্টর রেখাটিকে তার শুরু থেকে শেষ প্রান্ত পর্যন্ত সম্পূর্ণ দৃশ্যমান করে তোলে'
          },
          {
            en: 'Hides the stroke completely',
            bn: 'রেখাটিকে সম্পূর্ণ লুকিয়ে ফেলে'
          },
          {
            en: 'Draws only the middle 50% of the line',
            bn: 'রেখার কেবল মাঝের ৫০% অংশ আঁকে'
          },
          {
            en: 'Scales the SVG by 100 times',
            bn: 'এসভিজিকে ১০০ গুণ বড় করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Complete reveal from 0% to 100%.',
          bn: '০% থেকে ১০০% পূর্ণ প্রকাশের কথা ভাবুন।'
        },
        explanation: {
          en: 'The first percentage marks the stroke start offset, and the second marks the stroke end point; "0% 100%" renders the full path.',
          bn: 'প্রথম শতাংশ শুরুর স্থান এবং দ্বিতীয়টি শেষের স্থান নির্দেশ করে; "0% 100%" পুরো রেখাটি প্রদর্শন করে।'
        }
      },
      {
        id: 'q-gsap-shapeindex',
        kind: 'mcq',
        topic: 'Resolving shape twisting with shapeIndex',
        question: {
          en: 'When morphing one SVG shape into another, if the shape twists in an unnatural pretzel-like motion, what setting fixes it?',
          bn: 'একটি এসভিজি অন্যটিতে মর্ফ হওয়ার সময় যদি বিকৃতভাবে দুমড়ে-মুচড়ে যায়, তবে কোন সেটিংটি তা ঠিক করে?'
        },
        options: [
          {
            en: 'Adjusting morphSVG: { shapeIndex: n } to rotate the anchor point mapping alignment',
            bn: 'পয়েন্ট মেলানোর ক্রম ঠিক করতে morphSVG: { shapeIndex: n } এর মান পরিবর্তন করা'
          },
          {
            en: 'Increasing screen brightness',
            bn: 'স্ক্রিনের উজ্জ্বলতা বাড়ানো'
          },
          {
            en: 'Converting the SVG into a JPEG image',
            bn: 'এসভিজিকে জেপিইজি ছবিতে রূপান্তর করা'
          },
          {
            en: 'Restarting the computer motherboard',
            bn: 'কম্পিউটার রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rotating anchor point correspondence.',
          bn: 'অ্যাঙ্কর পয়েন্টের অবস্থান সমন্বয়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'shapeIndex rotates which starting anchor maps to which target anchor, straightening out twists during the morph.',
          bn: 'shapeIndex শুরুর পয়েন্ট এবং গন্তব্য পয়েন্টের সংযোগ সমন্বয় করে মোচড় দূর করে।'
        }
      },
      {
        id: 'q-gsap-svg-transform-origin',
        kind: 'mcq',
        topic: 'Safari transform-origin quirk resolution',
        question: {
          en: 'Why is transformOrigin: "50% 50%" considered a golden rule when rotating SVG elements in GSAP?',
          bn: 'GSAP-এ এসভিজি উপাদান ঘোরানোর সময় transformOrigin: "50% 50%" দেওয়াকে কেন সুবর্ণ নিয়ম বলা হয়?'
        },
        options: [
          {
            en: 'It normalizes cross-browser bugs where browsers like Safari calculate SVG origins relative to the parent SVG canvas rather than the element bounding box',
            bn: 'এটি সাফারি ব্রাউজারের কেন্দ্রবিন্দু বাগ দূর করে উপাদানটিকে তার নিজস্ব কেন্দ্রের চারপাশে নিখুঁতভাবে ঘোরায়'
          },
          {
            en: 'It reduces SVG file download size by 50 percent',
            bn: 'এটি এসভিজির ডাউনলোড সাইজ ৫০ শতাংশ কমায়'
          },
          {
            en: 'It disables all vector anti-aliasing',
            bn: 'এটি অ্যান্টি-অ্যালাইজিং বন্ধ করে'
          },
          {
            en: 'It forces the line to be drawn in black and white',
            bn: 'এটি রেখাকে সাদাকালো আঁকতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cross-browser origin normalization.',
          bn: 'ব্রাউজার ভেদে কেন্দ্রবিন্দু ঠিক রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'GSAP explicitly recalculates the element getBBox() to ensure smooth center rotation regardless of erratic browser CSS implementations.',
          bn: 'GSAP উপাদানের নিজস্ব মাপ বের করে কেন্দ্র নির্ধারণ করে, ফলে কোনো ব্রাউজারেই ঘূর্ণন বিগড়ে যায় না।'
        }
      },
      {
        id: 'q-gsap-vector-resolution',
        kind: 'mcq',
        topic: 'Infinite resolution scalability of SVG',
        question: {
          en: 'What optical advantage does animating SVG paths offer compared to animated PNG or GIF sprites on modern 4K and 8K displays?',
          bn: 'আধুনিক ৪কে ও ৮কে ডিসপ্লেতে পিএনজি বা গিফের তুলনায় এসভিজি ভেক্টর অ্যানিমেশন কী অপটিক্যাল সুবিধা দেয়?'
        },
        options: [
          {
            en: 'SVG lines scale infinitely via mathematical vectors without pixelation or blurriness at any display scale',
            bn: 'এসভিজি গাণিতিক ভেক্টর দিয়ে তৈরি হওয়ায় যেকোনো স্কেলেই কোনো পিক্সেলেশন বা ঝাপসা ভাব ছাড়াই নিখুঁত থাকে'
          },
          {
            en: 'SVG plays audio sound effects automatically',
            bn: 'এসভিজি স্বয়ংক্রিয়ভাবে অডিও সাউন্ড বাজায়'
          },
          {
            en: 'SVG requires zero CPU processor cycles',
            bn: 'এসভিজিতে কোনো সিপিইউ খরচ হয় না'
          },
          {
            en: 'SVG operates without an internet connection',
            bn: 'এসভিজি ইন্টারনেট ছাড়া চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mathematical resolution independence.',
          bn: 'গাণিতিক রেজোলিউশন নির্ভরতাহীনতার কথা ভাবুন।'
        },
        explanation: {
          en: 'Because SVG is geometric math rather than a raster grid of pixels, it renders razor-sharp curves on any DPI screen.',
          bn: 'এসভিজি কোনো নির্দিষ্ট পিক্সেল গ্রিড নয় বরং জ্যামিতিক সমীকরণ, তাই যেকোনো উচ্চ ঘনত্বের স্ক্রিনেই এটি অবিশ্বাস্য ধারালো দেখায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'flip-and-layout-animations',
    title: {
      en: 'FLIP Plugin & Seamless Layout Transitions — Smooth State Changes at 60FPS',
      bn: 'FLIP প্লাগইন ও সিমলেস লেআউট ট্রানজিশন — ৬০ এফপিএসে স্মুথ স্টেট রূপান্তর'
    }
  }
};
