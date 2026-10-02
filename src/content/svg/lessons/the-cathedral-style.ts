import type { Lesson } from '../../../lib/types';

export const cathedralStyleLesson: Lesson = {
  slug: 'the-cathedral-style',
  tech: 'svg',
  title: {
    en: 'Styling SVG with CSS and currentColor',
    bn: 'সিএসএস ও currentColor দিয়ে এসভিজি স্টাইলিং'
  },
  summary: {
    en: 'SVG integrates directly with modern CSS stylesheets, creating clean theming architectures for design systems and dark mode. In this lesson, you will master SVG styling: understanding the specificity cascade where presentation attributes act as zero-specificity fallbacks easily overridden by CSS classes and inline styles. Explore graphical property inheritance across <g> group hierarchies, use currentColor to bind icon fills and strokes directly to surrounding text colors, and configure vector-effect="non-scaling-stroke" to maintain hairline borders during zoom transforms. Understand the critical distinction between SVG transform attributes and CSS transforms (transform-box and transform-origin). Implement an executable SVG cascading specificity resolver in TypeScript.',
    bn: 'এসভিজি আধুনিক সিএসএস স্টাইলশিটের সাথে সরাসরি যুক্ত হয়ে ডিজাইন সিস্টেম ও ডার্ক মোডের জন্য অত্যন্ত পরিচ্ছন্ন থিমিং ব্যবস্থা গড়ে তোলে। এই পাঠে আপনি এসভিজি স্টাইলিং শিখবেন: স্পেসিফিসিটি ক্যাসকেড যেখানে প্রেজেন্টেশন অ্যাট্রিবিউটগুলো শূন্য স্পেসিফিসিটি হিসেবে কাজ করে এবং সিএসএস ক্লাস দিয়ে সহজেই ওভাররাইড করা যায়। <g> গ্রুপ হায়ারার্কির মাধ্যমে স্টাইল উত্তরাধিকার (inheritance), currentColor ব্যবহার করে আইকনের রঙকে লেখার রঙের সাথে মেলানো এবং জুমের সময় বর্ডার ঠিক রাখতে vector-effect="non-scaling-stroke"-এর ব্যবহার জানবেন। এসভিজি transform অ্যাট্রিবিউট এবং সিএসএস transform-এর (transform-box ও transform-origin) মধ্যকার পার্থক্য বিশদভাবে আলোচনা করা হয়েছে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ক্যাসকেডিং স্পেসিফিসিটি সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'svg-css-cascade-specificity-hierarchy',
      text: {
        en: 'The SVG Cascade: Presentation Attributes vs CSS Properties',
        bn: 'এসভিজি ক্যাসকেড: প্রেজেন্টেশন অ্যাট্রিবিউট বনাম সিএসএস প্রপার্টি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you style vector graphics, Scalable Vector Graphics (SVG) bridges HTML markup and CSS rules through a specialized specificity hierarchy.',
        bn: 'আপনি যখন ভেক্টর গ্রাফিক্স স্টাইল করেন, তখন স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) একটি বিশেষ স্পেসিফিসিটি কাঠামোর মাধ্যমে এইচটিএমএল এবং সিএসএসকে একত্রিত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In SVG, graphical properties can be written directly on elements as XML Presentation Attributes (such as fill="red" or stroke="blue"). The W3C specification assigns presentation attributes a specificity of zero. This architectural decision means any CSS rule in an external stylesheet or <style> block (even a single class like .icon { fill: green; }) outranks and overrides the presentation attribute instantly. At the top of the hierarchy, inline style declarations (style="fill: purple;") override external class rules. This design enables a powerful production pattern. Ship presentation attributes directly in vector markup so graphics render safely inside isolated <img> tags or without CSS. Meanwhile, use external stylesheets to effortlessly apply theme colors, hover transitions, and dark-mode adaptations.',
        bn: 'এসভিজিতে বিভিন্ন গ্রাফিক্যাল প্রপার্টি সরাসরি এক্সএমএল প্রেজেন্টেশন অ্যাট্রিবিউট হিসেবে লেখা যায় (যেমন fill="red" বা stroke="blue")। W3C স্পেসিফিকেশন অনুসারে প্রেজেন্টেশন অ্যাট্রিবিউটের স্পেসিফিসিটি হলো ঠিক শূন্য। এই আর্কিটেকচারাল নিয়মের কারণে বাইরের স্টাইলশিটে লেখা যেকোনো সিএসএস ক্লাস (যেমন .icon { fill: green; }) প্রেজেন্টেশন অ্যাট্রিবিউটকে চোখের পলকে ওভাররাইড করে ফেলে। আর সবার ওপরে ইনলাইন স্টাইল (style="fill: purple;") ক্লাসের নিয়মকেও ছাপিয়ে যায়। এটি একটি চমৎকার প্রোডাকশন প্যাটার্ন তৈরি করে। এসভিজি ফাইলে সরাসরি প্রেজেন্টেশন অ্যাট্রিবিউট দিয়ে রাখা হয় যাতে সিএসএস ছাড়াও বা <img> ট্যাগে তা সঠিকভাবে দেখা যায়। অন্যদিকে মূল পেজে সিএসএস দিয়ে এক নিমেষেই ডার্ক মোড বা হোভার স্টাইল প্রয়োগ করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'presentation-attributes',
          def: {
            en: 'XML markup attributes (fill, stroke, opacity) that serve as zero-specificity fallbacks overridden by any active CSS rule.',
            bn: 'এক্সএমএল মার্কআপ অ্যাট্রিবিউট (fill, stroke, opacity) যা শূন্য স্পেসিফিসিটি বিশিষ্ট এবং যেকোনো সিএসএস রুল দিয়ে পরিবর্তন করা যায়।'
          }
        },
        {
          term: 'currentcolor-keyword',
          def: {
            en: 'A CSS color keyword that inherits the computed text "color" value of the parent container, enabling effortless icon theming.',
            bn: 'একটি সিএসএস কালার কিওয়ার্ড যা প্যারেন্ট উপাদানের টেক্সট রঙের মান গ্রহণ করে এক ক্লিকে আইকনের রঙ পরিবর্তনের সুযোগ দেয়।'
          }
        },
        {
          term: 'vector-effect-non-scaling-stroke',
          def: {
            en: 'An SVG attribute ensuring stroke lines maintain an identical physical pixel width regardless of zoom levels or coordinate transforms.',
            bn: 'একটি এসভিজি অ্যাট্রিবিউট যা ক্যানভাস যত বড়ই স্কেল বা জুম করা হোক না কেন স্ট্রোক লাইনের পুরুত্ব সর্বদা সমান রাখে।'
          }
        },
        {
          term: 'svg-transform-box',
          def: {
            en: 'A CSS property (fill-box vs view-box) determining whether transform-origin is calculated relative to the shape or the whole SVG viewport.',
            bn: 'একটি সিএসএস প্রপার্টি যা ঠিক করে transform-origin কি নির্দিষ্ট শেপের সাপেক্ষে হিসাব হবে নাকি পুরো ক্যানভাসের সাপেক্ষে।'
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
      id: 'specificity-and-styling-hierarchy-table',
      text: {
        en: 'Styling Hierarchy and Transform Properties in SVG',
        bn: 'এসভিজি স্টাইলিং ক্রম এবং ট্রান্সফর্ম প্রপার্টিসমূহের তুলনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding where styling rules originate is essential for eliminating CSS override bugs and managing responsive icon states.',
        bn: 'সিএসএস ওভাররাইড সংক্রান্ত ত্রুটি দূর করতে এবং রেসপন্সিভ আইকন পরিচালনা করতে স্টাইলের অগ্রাধিকারের নিয়ম জানা অত্যন্ত জরুরি।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Styling Layer', bn: 'স্টাইলিং স্তর' },
        { en: 'Specificity Level', bn: 'স্পেসিফিসিটি স্তর' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Operational Role', bn: 'প্রযুক্তিগত ভূমিকা' }
      ],
      rows: [
        [
          { en: 'Inline style attribute', bn: 'ইনলাইন style অ্যাট্রিবিউট' },
          { en: 'High (1,0,0,0)', bn: 'সর্বোচ্চ (১,০,০,০)' },
          { en: 'style="fill: #ef4444;"', bn: 'style="fill: #ef4444;"' },
          { en: 'Forces final color overrides; wins over external classes and IDs', bn: 'চূড়ান্ত রঙ প্রয়োগ করে; বাইরের ক্লাস ও আইডির ওপর বিজয়ী হয়' }
        ],
        [
          { en: 'CSS Class / ID selector', bn: 'সিএসএস ক্লাস বা আইডি' },
          { en: 'Standard CSS (0,1,0)', bn: 'মানসম্মত সিএসএস (০,১,০)' },
          { en: '.icon-active { fill: #3b82f6; }', bn: '.icon-active { fill: #3b82f6; }' },
          { en: 'Primary theming channel for UI states, hover effects, and dark mode', bn: 'ইউআই অবস্থা, হোভার ইফেক্ট ও ডার্ক মোড নিয়ন্ত্রণের মূল মাধ্যম' }
        ],
        [
          { en: 'Presentation attribute', bn: 'প্রেজেন্টেশন অ্যাট্রিবিউট' },
          { en: 'Zero specificity (0,0,0,0)', bn: 'শূন্য স্পেসিফিসিটি (০,০,০,০)' },
          { en: 'fill="#94a3b8"', bn: 'fill="#94a3b8"' },
          { en: 'Safe standalone fallback when viewed outside CSS or inside <img> tags', bn: 'সিএসএস ছাড়া বা <img> ট্যাগে দেখার সময় নিরাপদ ব্যাকআপ মান' }
        ],
        [
          { en: 'Parent group inheritance', bn: 'প্যারেন্ট গ্রুপ উত্তরাধিকার' },
          { en: 'Inherited from <g>', bn: '<g> থেকে প্রাপ্ত' },
          { en: '<g fill="currentColor">', bn: '<g fill="currentColor">' },
          { en: 'Cascades properties down to all descendant paths without repeating styles', bn: 'পুনরাবৃত্তি ছাড়াই সব চাইল্ড পাথে স্বয়ংক্রিয়ভাবে স্টাইল পৌঁছে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-svg-specificity-resolver-code',
      text: {
        en: 'Executable SVG Cascading Specificity Resolver in TypeScript',
        bn: 'টাইপস্ক্রিপ্টে এসভিজি ক্যাসকেডিং স্পেসিফিসিটি সমাধানকারী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how the browser resolves the final fill color across 3 distinct styling scenarios: default presentation attribute, CSS class override, and inline style declaration.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৩টি ভিন্ন পরিস্থিতিতে ব্রাউজার কীভাবে চূড়ান্ত ফিল কালার নির্ধারণ করে তা বাস্তবায়ন করে: ডিফল্ট প্রেজেন্টেশন অ্যাট্রিবিউট, সিএসএস ক্লাস ওভাররাইড এবং ইনলাইন স্টাইল।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG Cascading Style Specificity Resolution

interface ColorResolution {
  finalColor: string;
  source: 'presentation_attribute' | 'css_rule' | 'inline_style';
}

function resolveSvgFillColor(
  presentationAttr: string,
  cssRuleColor: string | null,
  inlineStyleColor: string | null
): ColorResolution {
  // 1. Inline style wins over all rules
  if (inlineStyleColor) {
    return { finalColor: inlineStyleColor, source: 'inline_style' };
  }
  // 2. CSS selectors override zero-specificity presentation attributes
  if (cssRuleColor) {
    return { finalColor: cssRuleColor, source: 'css_rule' };
  }
  // 3. Presentation attribute serves as base fallback
  return { finalColor: presentationAttr, source: 'presentation_attribute' };
}

const defaultShape = resolveSvgFillColor('#94a3b8', null, null);
const themedShape = resolveSvgFillColor('#94a3b8', '#3b82f6', null);
const forcedShape = resolveSvgFillColor('#94a3b8', '#3b82f6', '#ef4444');

console.log('Default unstyled fill color:', defaultShape.finalColor);
console.log('CSS themed active fill color:', themedShape.finalColor);
console.log('Inline forced style fill color:', forcedShape.finalColor);
console.log('Total resolved shape scenarios:', 3);

// prints: Default unstyled fill color: #94a3b8
// prints: CSS themed active fill color: #3b82f6
// prints: Inline forced style fill color: #ef4444
// prints: Total resolved shape scenarios: 3`
    },
    {
      type: 'heading',
      id: 'transform-box-and-transform-origin-schism',
      text: {
        en: 'Transform Mechanics: Attribute vs CSS and transform-box',
        bn: 'ট্রান্সফর্ম মেকানিক্স: অ্যাট্রিবিউট বনাম সিএসএস ও transform-box'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A notorious trap in SVG animation occurs when applying rotation transforms via CSS. In standard HTML, "transform-origin: center" rotates an element around its own physical center box. In SVG, however, CSS transforms historically rotated shapes around the top-left (0, 0) origin of the entire SVG canvas. This caused spinning icons or gears to orbit erratically around the screen. Modern CSS standardizes the "transform-box" property to fix this. Setting "transform-box: fill-box; transform-origin: center;" instructs the browser to calculate the center pivot strictly relative to the bounding box of that individual shape, enabling precise in-place spinning animations without erratic offsets.',
        bn: 'এসভিজিতে ঘূর্ণন অ্যানিমেশন তৈরির সময় একটি বহুল পরিচিত জটিলতা দেখা দেয়। সাধারণ এইচটিএমএলে "transform-origin: center" দিলে উপাদানটি তার নিজস্ব শারীরিক কেন্দ্রের চারদিকে ঘোরে। কিন্তু এসভিজিতে সিএসএস ঘূর্ণন দিলে উপাদানগুলো অনেক সময় পুরো ক্যানভাসের ওপরের বাম কোণার (০, ০) সাপেক্ষে ঘুরতে শুরু করে, যার ফলে ঘূর্ণায়মান আইকন বা গিয়ারগুলো অদ্ভুতভাবে পুরো স্ক্রিন জুড়ে বৃত্তাকারে প্রদক্ষিণ করে। আধুনিক সিএসএসে এই সমস্যা সমাধানের জন্য "transform-box" প্রপার্টি আনা হয়েছে। "transform-box: fill-box; transform-origin: center;" লিখে দিলে ব্রাউজার সংশ্লিষ্ট শেপের নিজস্ব সীমানাকে কেন্দ্র হিসেবে গণ্য করে, যার ফলে উপাদানটি তার নিজের জায়গাতেই নিখুঁতভাবে সুন্দরভাবে ঘুরতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Presentation attributes have zero specificity: External CSS classes effortlessly override fill and stroke attributes.',
          bn: 'প্রেজেন্টেশন অ্যাট্রিবিউটের স্পেসিফিসিটি শূন্য: বাইরের সিএসএস ক্লাস সহজেই ফিল ও স্ট্রোক পরিবর্তন করে ফেলে।'
        },
        {
          en: 'Use currentColor for unified icon theming: Bind icon colors to button text so hover states update automatically.',
          bn: 'আইকন থিমিংয়ে currentColor ব্যবহার করুন: আইকনের রঙ লেখার সাথে যুক্ত রাখলে বাটন হোভারে একসাথেই রঙ বদলে যায়।'
        },
        {
          en: 'Use non-scaling-stroke on zoomable maps: vector-effect ensures borders stay crisp and thin regardless of scale.',
          bn: 'জুম করা চিত্রে non-scaling-stroke ব্যবহার করুন: এটি স্কেল যাই হোক না কেন লাইনের পুরুত্ব সর্বদা সমান রাখে।'
        },
        {
          en: 'Set transform-box fill-box for in-place rotations: Ensures transform-origin center rotates the shape, not the whole canvas.',
          bn: 'ঘূর্ণনে transform-box fill-box সেট করুন: এটি পুরো ক্যানভাস নয়, শেপকে তার নিজস্ব কেন্দ্রের চারদিকে ঘোরায়।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-moving-light',
    tech: 'svg',
    title: {
      en: 'SVG Animations — CSS Keyframes, Dashoffset, and SMIL',
      bn: 'এসভিজি অ্যানিমেশন: সিএসএস কিফ্রেম, ড্যাশ-অফসেট ও SMIL'
    }
  },
  exercises: [
    {
      id: 'cs-ex1',
      kind: 'mcq',
      topic: 'presentation-attribute-specificity',
      question: {
        en: 'In SVG styling, what is the exact CSS specificity level assigned to XML presentation attributes like fill="red"?',
        bn: 'এসভিজি স্টাইলিংয়ে fill="red"-এর মতো এক্সএমএল প্রেজেন্টেশন অ্যাট্রিবিউটের সিএসএস স্পেসিফিসিটি মান কত?'
      },
      options: [
        {
          en: 'Zero specificity (0, 0, 0, 0); any author CSS selector (even a universal * or simple class selector) will override it',
          bn: 'শূন্য স্পেসিফিসিটি (০, ০, ০, ০); যেকোনো সিএসএস সিলেক্টর (এমনকি সাধারণ * বা ক্লাস সিলেক্টরও) এটিকে সহজে ওভাররাইড করতে পারে'
        },
        {
          en: 'Equal to an ID selector (0, 1, 0, 0)',
          bn: 'একটি আইডি সিলেক্টরের সমান (০, ১, ০, ০)'
        },
        {
          en: 'Higher than !important declarations',
          bn: '!important ঘোষণার চেয়েও বেশি'
        },
        {
          en: 'Because specificity was eliminated by the W3C in 2021',
          bn: 'কারণ ২০২১ সালে W3C স্পেসিফিসিটি বাতিল করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Presentation attributes are designed as base defaults: specificity zero.',
        bn: 'প্রেজেন্টেশন অ্যাট্রিবিউটগুলো ডিফল্ট ব্যাকআপ হিসেবে থাকে: এদের স্পেসিফিসিটি শূন্য।'
      },
      explanation: {
        en: 'The SVG standard assigns presentation attributes zero specificity so stylesheets can theme markup without high-specificity battles.',
        bn: 'বাইরের স্টাইলশিট যাতে সহজে রঙ বদলাতে পারে সেজন্য প্রেজেন্টেশন অ্যাট্রিবিউটকে শূন্য স্পেসিফিসিটি দেওয়া হয়েছে।'
      }
    },
    {
      id: 'cs-ex2',
      kind: 'mcq',
      topic: 'currentcolor-design-system-advantage',
      question: {
        en: 'How does setting stroke="currentColor" and fill="none" on an icon sprite simplify multi-theme design systems?',
        bn: 'আইকন স্প্রাইটে stroke="currentColor" এবং fill="none" ব্যবহার করা মাল্টি-থিম ডিজাইন সিস্টেমে কীভাবে সাহায্য করে?'
      },
      options: [
        {
          en: 'The icon strokes automatically inherit the active CSS "color" property of their parent component, meaning a single CSS color change (like button hover or dark mode) instantly updates all icon strokes without writing custom SVG selectors',
          bn: 'আইকন স্ট্রোকগুলো প্যারেন্ট উপাদানের সিএসএস "color" প্রপার্টির মান স্বয়ংক্রিয়ভাবে গ্রহণ করে, ফলে প্যারেন্টের লেখার রঙ বদলালেই কোনো আলাদা কোড না লিখে সব আইকন নিজে থেকেই নতুন রঙ ধারণ করে'
        },
        {
          en: 'Because currentColor reduces battery usage by 90 percent',
          bn: 'কারণ currentColor ব্যাটারির খরচ ৯০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'currentColor converts all vector paths into raw text paragraphs',
          bn: 'currentColor সব ভেক্টর পাথকে সাধারণ টেক্সট প্যারাগ্রাফে রূপান্তর করে'
        },
        {
          en: 'It was mandated by international trademark conventions in 2018',
          bn: 'কারণ ২০১৮ সালে ট্রেডমার্ক আইনে এটি বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'currentColor ties stroke/fill directly to the CSS text color.',
        bn: 'currentColor আইকনের রঙকে সরাসরি লেখার সিএসএস রঙের সাথে বেঁধে দেয়।'
      },
      explanation: {
        en: 'currentColor enables centralized icon theming driven entirely by ambient typographical color declarations.',
        bn: 'currentColor লেখার রঙের পরিবর্তনের সাথে সাথে আইকনের রঙও গতিশীলভাবে পরিবর্তন করে।'
      }
    },
    {
      id: 'cs-ex3',
      kind: 'mcq',
      topic: 'vector-effect-non-scaling-stroke',
      question: {
        en: 'What problem does the attribute vector-effect="non-scaling-stroke" solve when zooming or scaling an SVG diagram?',
        bn: 'এসভিজি চিত্র জুম বা স্কেল করার সময় vector-effect="non-scaling-stroke" অ্যাট্রিবিউটটি কোন সমস্যা সমাধান করে?'
      },
      options: [
        {
          en: 'It prevents the stroke line thickness from multiplying during scale transforms, ensuring borders remain a consistent 1-pixel or hairline width regardless of canvas magnification',
          bn: 'এটি স্কেল করার সময় লাইনের পুরুত্ব অস্বাভাবিকভাবে ফুলে যাওয়া রোধ করে, ফলে ক্যানভাস যত বড়ই জুম করা হোক না কেন রেখাটি সর্বদা নির্ধারিত ১ পিক্সেল বা নির্দিষ্ট মাপে তীক্ষ্ণ থাকে'
        },
        {
          en: 'It turns all lines into dashed Morse code patterns',
          bn: 'এটি সব লাইনকে মোর্স কোডের প্যাটার্নে রূপান্তর করে'
        },
        {
          en: 'Because non-scaling-stroke formats the user hard drive on zoom',
          bn: 'কারণ জুম করলে এটি হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'Non-scaling-stroke was invented by maritime telegraph engineers in 1915',
          bn: 'কারণ ১৯১৫ সালে নৌ প্রকৌশলীরা এটি তৈরি করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Non-scaling stroke keeps border width fixed during zoom/scale.',
        bn: 'non-scaling-stroke জুমের সময়ও লাইনের পুরুত্ব সমান ও পরিচ্ছন্ন রাখে।'
      },
      explanation: {
        en: 'vector-effect="non-scaling-stroke" decouples border stroke width from geometric coordinate scaling transformations.',
        bn: 'এটি জ্যামিতিক স্কেলিংয়ের প্রভাব থেকে লাইনের পুরুত্বকে মুক্ত রেখে সর্বদা সমান রাখে।'
      }
    },
    {
      id: 'cs-ex4',
      kind: 'mcq',
      topic: 'transform-box-fill-box-rotation',
      question: {
        en: 'Why is setting "transform-box: fill-box" critical when applying CSS keyframe rotation to an SVG shape with transform-origin: center?',
        bn: 'transform-origin: center দিয়ে এসভিজি শেপে সিএসএস ঘূর্ণন অ্যানিমেশন চালানোর সময় "transform-box: fill-box" নির্ধারণ করা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Without it, browsers default to "view-box", calculating the center relative to the entire SVG canvas (0, 0 origin) which causes the shape to orbit in a giant circle rather than rotating on its own center axis',
          bn: 'এটি না দিলে ব্রাউজার ডিফল্ট "view-box" ধরে পুরো ক্যানভাসের (০, ০ কেন্দ্র) সাপেক্ষে কেন্দ্র হিসাব করে, যার ফলে শেপটি নিজের জায়গায় না ঘুরে পুরো ক্যানভাস জুড়ে একটি বিশাল বৃত্তাকারে ঘুরতে থাকে'
        },
        {
          en: 'Because fill-box reduces server internet bandwidth costs by 50 percent',
          bn: 'কারণ fill-box সার্ভারের ইন্টারনেটের খরচ ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'To prevent computer screens from overheating',
          bn: 'কম্পিউটারের মনিটর যাতে অতিরিক্ত গরম না হয়'
        },
        {
          en: 'transform-box was banned in the CSS3 specification in 2020',
          bn: 'কারণ ২০২০ সালে সিএসএস৩-তে এটি নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'fill-box = rotate around the shape center. view-box = rotate around the whole SVG canvas center.',
        bn: 'fill-box শেপের নিজের কেন্দ্রে ঘোরায়; view-box পুরো ক্যানভাসের কেন্দ্রে ঘোরায়।'
      },
      explanation: {
        en: 'fill-box anchors the reference bounding box to the element itself, enabling predictable local center-point rotations.',
        bn: 'fill-box শেপের নিজস্ব সীমানাকে কেন্দ্রবিন্দু ধরে স্থানীয়ভাবে মসৃণ ঘূর্ণন নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'cathedral-style-quiz',
    title: {
      en: 'SVG Styling, CSS Cascading, and currentColor Quiz',
      bn: 'এসভিজি স্টাইলিং, সিএসএস ক্যাসকেড ও currentColor কুইজ'
    },
    questions: [
      {
        id: 'csq-q1',
        kind: 'mcq',
        topic: 'parent-group-styling-inheritance',
        question: {
          en: 'If a parent <g> element declares fill="#3b82f6", how does this affect child <path> elements that do not declare their own fill?',
          bn: 'যদি একটি প্যারেন্ট <g> উপাদানে fill="#3b82f6" ঘোষণা করা থাকে, তবে নিজস্ব ফিল না থাকা চাইল্ড <path> উপাদানগুলোর ওপর এর প্রভাব কী হবে?'
        },
        options: [
          {
            en: 'The child path elements inherit the fill color from the parent group down the tree, rendering blue unless explicitly overridden',
            bn: 'চাইল্ড পাথগুলো উত্তরাধিকার সূত্রে প্যারেন্ট গ্রুপের ফিল কালার গ্রহণ করে এবং অন্য কোনো রঙ না থাকলে নীল রঙে প্রদর্শিত হয়'
          },
          {
            en: 'The child paths become completely invisible and delete their coordinates',
            bn: 'চাইল্ড পাথগুলো অদৃশ্য হয়ে যায় এবং তাদের স্থানাঙ্ক মুছে ফেলে'
          },
          {
            en: 'The browser throws a fatal XML parsing error and halts execution',
            bn: 'ব্রাউজার একটি মারাত্মক পার্সিং এরর দেখিয়ে কাজ বন্ধ করে দেয়'
          },
          {
            en: 'Inheritance was banned by the International Standards Organization in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক সংস্থা উত্তরাধিকার নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'SVG graphical properties like fill and stroke inherit down through <g> containers.',
          bn: 'fill এবং stroke-এর মতো এসভিজি প্রপার্টিগুলো <g> ধারক থেকে চাইল্ড নোডে প্রবাহিত হয়।'
        },
        explanation: {
          en: 'SVG supports CSS-like property inheritance, enabling developers to theme entire composite groups at once.',
          bn: 'এসভিজি প্রপার্টি ইনহেরিটেন্স সমর্থন করে, ফলে একটি গ্রুপে স্টাইল দিলে ভেতরের সব শেপ তা পেয়ে যায়।'
        }
      },
      {
        id: 'csq-q2',
        kind: 'mcq',
        topic: 'external-css-img-boundary-block',
        question: {
          en: 'Why does an external CSS rule like ".icon:hover { fill: red; }" fail to affect an SVG loaded through an <img src="icon.svg"> tag?',
          bn: '<img src="icon.svg"> ট্যাগে লোড করা কোনো এসভিজিতে বাইরের সিএসএস রুল ".icon:hover { fill: red; }" কেন কাজ করে না?'
        },
        options: [
          {
            en: 'The <img> tag creates a sealed security barrier; the external HTML page stylesheet cannot penetrate into the isolated document context of the image',
            bn: '<img> ট্যাগ একটি বিচ্ছিন্ন নিরাপত্তা প্রাচীর তৈরি করে; মূল এইচটিএমএল পেজের স্টাইলশিট ছবির ভেতরের ডকুমেন্টে প্রবেশ করতে পারে না'
          },
          {
            en: 'Because <img> tags only support monochrome black-and-white graphics',
            bn: 'কারণ <img> ট্যাগ কেবল সাদাকালো ছবি সমর্থন করে'
          },
          {
            en: 'The hover event permanently deletes the image file from the server',
            bn: 'হোভার করলে সার্ভার থেকে ছবিটি চিরতরে মুছে যায়'
          },
          {
            en: 'Because hover was declared illegal in HTML5 standards in 2019',
            bn: 'কারণ ২০১৯ সালে HTML5 স্ট্যান্ডার্ডে হোভার নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '<img> creates an isolated browsing boundary. Stylesheets cannot cross into <img>.',
          bn: '<img> একটি বিচ্ছিন্ন প্রাচীর তৈরি করে, বাইরের স্টাইল কখনোই এর ভেতরে ঢুকতে পারে না।'
        },
        explanation: {
          en: 'Images are self-contained resources; they only consume styles declared internally inside their own <style> tags.',
          bn: 'ছবিগুলো সম্পূর্ণ স্বয়ংসম্পূর্ণ; বাইরের স্টাইলশিট কখনোই ছবির ভেতরের উপাদানকে পরিবর্তন করতে পারে না।'
        }
      },
      {
        id: 'csq-q3',
        kind: 'mcq',
        topic: 'css-vs-attribute-transform-units',
        question: {
          en: 'What is a key syntactic difference between the SVG transform attribute (transform="...") and CSS transform property (transform: ...)?',
          bn: 'এসভিজি transform অ্যাট্রিবিউট (transform="...") এবং সিএসএস transform প্রপার্টির (transform: ...) মধ্যে প্রধান সিনট্যাক্স পার্থক্য কী?'
        },
        options: [
          {
            en: 'The SVG transform attribute takes unitless coordinate numbers (e.g. rotate(45) or translate(10, 20)), whereas CSS transforms require explicit CSS units (e.g. rotate(45deg) or translate(10px, 20px))',
            bn: 'এসভিজি transform অ্যাট্রিবিউট এককবিহীন সংখ্যা গ্রহণ করে (যেমন rotate(45) বা translate(10, 20)), কিন্তু সিএসএস transform-এ নির্দিষ্ট একক বাধ্যতামূলক (যেমন rotate(45deg) বা translate(10px, 20px))'
          },
          {
            en: 'The SVG attribute only works on Linux while CSS is for Windows',
            bn: 'এসভিজি অ্যাট্রিবিউট কেবল লিনাক্সে চলে আর সিএসএস উইন্ডোজের জন্য'
          },
          {
            en: 'CSS transforms format the client solid-state drive on rotation',
            bn: 'সিএসএস ট্রান্সফর্ম ঘোরার সময় হার্ড ড্রাইভ মুছে ফেলে'
          },
          {
            en: 'Because unit strings were banned by international maritime treaties',
            bn: 'কারণ আন্তর্জাতিক নৌ চুক্তিতে ইউনিট স্ট্রিং নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Attribute: rotate(45). CSS property: rotate(45deg). CSS requires explicit units.',
          bn: 'অ্যাট্রিবিউটে একক ছাড়া rotate(45), আর সিএসএসে এককের সাথে rotate(45deg) লিখতে হয়।'
        },
        explanation: {
          en: 'SVG attributes operate in user units (unitless numbers); standard CSS transforms demand CSS angle and length units.',
          bn: 'এসভিজি অ্যাট্রিবিউট এককহীন সংখ্যায় কাজ করে, তবে সিএসএসে deg বা px একক স্পষ্টভাবে দিতে হয়।'
        }
      },
      {
        id: 'csq-q4',
        kind: 'mcq',
        topic: 'dark-mode-theming-custom-properties',
        question: {
          en: 'How do modern design systems combine inline SVG with CSS Custom Properties (CSS variables) to support seamless dark-mode theming?',
          bn: 'আধুনিক ডিজাইন সিস্টেমগুলো ডার্ক মোড সমর্থন করতে কীভাবে ইনলাইন এসভিজির সাথে সিএসএস কাস্টম প্রপার্টি (সিএসএস ভেরিয়েবল) একত্রিত করে?'
        },
        options: [
          {
            en: 'They set SVG fills and strokes to custom variables (e.g. fill="var(--icon-color)"), allowing a single CSS theme token switch on the <html> or <body> element to instantly recolor all icons across the entire application',
            bn: 'তারা এসভিজি ফিল ও স্ট্রোকে কাস্টম ভেরিয়েবল ব্যবহার করে (যেমন fill="var(--icon-color)"), যার ফলে <html> বা <body> ট্যাগে থিম ভেরিয়েবল বদলালেই এক নিমেষে পুরো অ্যাপ্লিকেশনের সব আইকন নতুন থিমের রঙ পেয়ে যায়'
          },
          {
            en: 'By converting the entire website into a black-and-white PDF document',
            bn: 'পুরো ওয়েবসাইটকে একটি সাদাকালো পিডিএফ ফাইলে রূপান্তর করে'
          },
          {
            en: 'Dark mode requires downloading a new web browser from the internet',
            bn: 'ডার্ক মোডের জন্য ইন্টারনেট থেকে নতুন ব্রাউজার ডাউনলোড করতে হয়'
          },
          {
            en: 'CSS variables format the client device memory on theme toggle',
            bn: 'থিম বদলালে সিএসএস ভেরিয়েবল ডিভাইসের মেমরি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'fill="var(--color-token)" enables instant site-wide theme switching.',
          bn: 'fill="var(--color-token)" ব্যবহার করলে এক ক্লিকে পুরো সাইটের আইকন থিম বদলে যায়।'
        },
        explanation: {
          en: 'Using CSS variables inside inline SVGs integrates vector graphics seamlessly into enterprise token-driven design systems.',
          bn: 'সিএসএস ভেরিয়েবল এসভিজিকে আধুনিক ডিজাইন টোকেন ও থিমিং সিস্টেমের সাথে সরাসরি যুক্ত করে।'
        }
      }
    ]
  }
};
