import type { Lesson } from '../../../lib/types';

export const glassCatalogLesson: Lesson = {
  slug: 'the-glass-catalog',
  tech: 'svg',
  title: {
    en: 'SVG Architecture & Embedding — Inline, <img>, CSS, and <object>',
    bn: 'এসভিজি আর্কিটেকচার ও এম্বেডিং: ইনলাইন, <img>, সিএসএস ও <object>'
  },
  summary: {
    en: 'Scalable Vector Graphics (SVG) represents visual content as an XML-based DOM subtree rather than a static raster grid of pixels. In this foundational lesson, you will master SVG architecture and browser embedding methods. Learn Inline SVG for direct CSS cascading and DOM event handling. Explore the sealed <img> tag for isolated security and automatic browser caching. Compare CSS background-image for decorative icons with the <object> tag for sandboxed interactive documents. Understand XML parsing rules, XML namespaces (xmlns), the 300x150 default fallback dimension trap, and security considerations when handling user-uploaded vector graphics. Implement an executable embedding scanner and viewBox aspect ratio evaluator in TypeScript.',
    bn: 'স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) ভিজ্যুয়াল কন্টেন্টকে পিক্সেলের গ্রিডের বদলে একটি এক্সএমএল-ভিত্তিক ডম সাব-ট্রি হিসেবে উপস্থাপন করে। এই পাঠে আপনি এসভিজি আর্কিটেকচার এবং ব্রাউজারে এটি যুক্ত করার প্রধান চারটি পদ্ধতি শিখবেন। সরাসরি সিএসএস ক্যাসকেড ও ডম ইভেন্টের জন্য ইনলাইন SVG শিখুন। নিরাপত্তা ও ব্রাউজার ক্যাশিংয়ের জন্য সুরক্ষিত <img> ট্যাগ অন্বেষণ করুন। ডেকোরেটিভ আইকনের জন্য সিএসএস background-image এবং স্যান্ডবক্সড ফাইলের জন্য <object> ট্যাগের তুলনা জানুন। এক্সএমএল পার্সিংয়ের নিয়মাবলী, xmlns নেমস্পেস, ৩০০×১৫০ ডিফল্ট সাইজ সমস্যা এবং ব্যবহারকারীর আপলোড করা এসভিজির নিরাপত্তা ঝুঁকি বিস্তারিতভাবে জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর এসভিজি এম্বেডিং স্ক্যানার বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'vector-graphics-dom-architecture',
      text: {
        en: 'The Architecture of Vector Graphics: Retained DOM vs Raster Pixels',
        bn: 'ভেক্টর গ্রাফিক্সের আর্কিটেকচার: রিটেইন্ড ডম বনাম রাস্টার পিক্সেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern web interfaces, rendering graphics that remain perfectly sharp at any zoom level or screen density is essential.',
        bn: 'আধুনিক ওয়েব ইন্টারফেস তৈরি করার সময় যেকোনো জুম লেভেল বা স্ক্রিন রেজোলিউশনে ছবিগুলো যাতে নিখুঁত তীক্ষ্ণ থাকে তা নিশ্চিত করা অপরিহার্য।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional raster image formats like PNG and JPEG record visual information as a rigid two-dimensional grid of color pixels. When a user zooms into a high-DPI retina display, the browser must interpolate and stretch those pixels, causing blurriness and visual artifacts. In contrast, Scalable Vector Graphics (SVG) describes visual scenes mathematically using geometric vectors: points, lines, curves, polygons, and text. Because SVG is encoded in XML (Extensible Markup Language), the browser parses an SVG document into a genuine DOM subtree. Every shape (<path>, <circle>, <rect>) is an addressable node that can be inspected with browser developer tools, styled with CSS rules, and attached to standard JavaScript event listeners.',
        bn: 'প্রচলিত রাস্টার ইমেজ ফরম্যাট যেমন PNG এবং JPEG রঙের পিক্সেল দিয়ে তৈরি একটি নির্দিষ্ট গ্রিডে ছবি সংরক্ষণ করে। ব্যবহারকারী যখন উচ্চ রেজোলিউশনের ডিসপ্লেতে জুম করেন, তখন ব্রাউজার সেই পিক্সেলগুলোকে টেনে বড় করতে বাধ্য হয়, যার ফলে ছবি ঝাপসা ও অস্পষ্ট দেখায়। এর বিপরীতে স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) গাণিতিক জ্যামিতির সাহায্যে দৃশ্য তৈরি করে: বিন্দু, রেখা, বক্ররেখা, বহুভুজ এবং টেক্সট। যেহেতু এসভিজি এক্সএমএল (XML) ফরম্যাটে লেখা হয়, তাই ব্রাউজার এটিকে একটি আসল ডম সাব-ট্রি (DOM subtree) হিসেবে পার্স করে। এর প্রতিটি উপাদান (<path>, <circle>, <rect>) ব্রাউজার ডেভেলপার টুলস দিয়ে পরীক্ষা করা যায়, সিএসএস দিয়ে স্টাইল করা যায় এবং জাভাস্ক্রিপ্ট ইভেন্ট হ্যান্ডলার যুক্ত করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'scalable-vector-graphics',
          def: {
            en: 'An XML-based vector graphics format for two-dimensional figures with full support for CSS styling, DOM scripting, and animations.',
            bn: 'দ্বিমাত্রিক ছবির জন্য একটি এক্সএমএল-ভিত্তিক ভেক্টর ফরম্যাট যা সিএসএস স্টাইলিং, ডম স্ক্রিপ্টিং এবং অ্যানিমেশন সমর্থন করে।'
          }
        },
        {
          term: 'inline-svg-embedding',
          def: {
            en: 'Pasting <svg> tags directly into the HTML document, exposing all shapes to the global CSS cascade and JavaScript DOM manipulation.',
            bn: 'এইচটিএমএল ডকুমেন্টে সরাসরি <svg> ট্যাগ বসানো, যার ফলে ভেতরের সব শেপ সিএসএস এবং জাভাস্ক্রিপ্ট দিয়ে সরাসরি নিয়ন্ত্রণ করা যায়।'
          }
        },
        {
          term: 'sealed-img-embedding',
          def: {
            en: 'Loading an SVG file through an <img> tag, creating an isolated security sandbox where scripts are disabled and external CSS cannot penetrate.',
            bn: '<img> ট্যাগের মাধ্যমে এসভিজি লোড করা, যা একটি সুরক্ষিত বিচ্ছিন্ন পরিবেশ তৈরি করে যেখানে স্ক্রিপ্ট নিষিদ্ধ থাকে এবং বাইরের সিএসএস কাজ করে না।'
          }
        },
        {
          term: 'svg-namespace',
          def: {
            en: 'The XML namespace declaration (xmlns="http://www.w3.org/2000/svg") identifying elements as vector graphics rather than standard HTML tags.',
            bn: 'একটি বিশেষ এক্সএমএল নেমস্পেস যা ব্রাউজারকে নির্দেশ দেয় উপাদানগুলোকে সাধারণ এইচটিএমএল ট্যাগের বদলে ভেক্টর গ্রাফিক্স হিসেবে গণ্য করতে।'
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
      id: 'svg-embedding-methods-comparison',
      text: {
        en: 'Comparison of the Four SVG Embedding Methods',
        bn: 'এসভিজি যুক্ত করার চারটি প্রধান পদ্ধতির তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Frontend developers choose between four primary embedding strategies depending on the requirements for interactivity, security, and caching.',
        bn: 'ইন্টারঅ্যাক্টিভিটি, নিরাপত্তা এবং ব্রাউজার ক্যাশিংয়ের প্রয়োজনীয়তার ওপর ভিত্তি করে ডেভেলপাররা চারটি প্রধান এম্বেডিং পদ্ধতির মধ্য থেকে সঠিকটি বেছে নেন।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Embedding Technique', bn: 'এম্বেডিং পদ্ধতি' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'CSS Theming & Styling', bn: 'সিএসএস থিমিং ও স্টাইলিং' },
        { en: 'JavaScript & DOM Access', bn: 'জাভাস্ক্রিপ্ট ও ডম অ্যাক্সেস' }
      ],
      rows: [
        [
          { en: 'Inline SVG', bn: 'ইনলাইন এসভিজি' },
          { en: '<svg viewBox="0 0 24 24"><path .../></svg>', bn: '<svg viewBox="0 0 24 24"><path .../></svg>' },
          { en: 'Full access to stylesheets, hover rules, and currentColor', bn: 'বাইরের স্টাইলশিট, হোভার রুলস এবং currentColor-এর পূর্ণ অ্যাক্সেস' },
          { en: 'Direct access: querySelector, addEventListener, click events', bn: 'সরাসরি অ্যাক্সেস: querySelector ও ইভেন্ট লিসেনার যোগ করা যায়' }
        ],
        [
          { en: 'HTML <img> Tag', bn: 'এইচটিএমএল <img> ট্যাগ' },
          { en: '<img src="icon.svg" alt="App Logo" />', bn: '<img src="icon.svg" alt="App Logo" />' },
          { en: 'Completely isolated; external CSS cannot penetrate the image', bn: 'সম্পূর্ণ বিচ্ছিন্ন; বাইরের সিএসএস ছবির ভেতরে প্রবেশ করতে পারে না' },
          { en: 'No script access; scripts inside the SVG are blocked by security', bn: 'কোনো স্ক্রিপ্ট চলে না; নিরাপত্তার স্বার্থে ভেতরের স্ক্রিপ্ট বন্ধ থাকে' }
        ],
        [
          { en: 'CSS background-image', bn: 'সিএসএস ব্যাকগ্রাউন্ড' },
          { en: "background-image: url('pattern.svg');", bn: "background-image: url('pattern.svg');" },
          { en: 'Isolated; styles cannot be modified dynamically from outside', bn: 'বিচ্ছিন্ন; বাইরে থেকে সহজে রঙ বা স্টাইল পরিবর্তন করা যায় না' },
          { en: 'Zero DOM representation; no event targets or script capability', bn: 'ডমে কোনো উপাদান থাকে না; কোনো ইভেন্ট বা স্ক্রিপ্ট চালানো যায় না' }
        ],
        [
          { en: 'HTML <object> Tag', bn: 'এইচটিএমএল <object> ট্যাগ' },
          { en: '<object data="chart.svg" type="image/svg+xml"></object>', bn: '<object data="chart.svg" type="image/svg+xml"></object>' },
          { en: 'Styles can be injected into the document if on the same origin', bn: 'একই ডোমেইন হলে স্ক্রিপ্টের মাধ্যমে স্টাইলশিট ইনজেক্ট করা সম্ভব' },
          { en: 'Accessible via object.contentDocument when same-origin', bn: 'একই অরিজিন হলে object.contentDocument দিয়ে ডম পড়া যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-svg-embedding-evaluator-code',
      text: {
        en: 'Executable SVG Embedding Evaluator in TypeScript',
        bn: 'টাইপস্ক্রিপ্টে বাস্তব কার্যকর এসভিজি এম্বেডিং মূল্যায়নকারী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program evaluates different SVG embedding configurations, computing the aspect ratio from viewBox parameters and determining whether direct DOM manipulation is supported.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি বিভিন্ন এসভিজি এম্বেডিং কনফিগারেশন বিশ্লেষণ করে, viewBox প্যারামিটার থেকে অ্যাসপেক্ট রেশিও হিসাব করে এবং ডম নিয়ন্ত্রণ সম্ভব কি না তা যাচাই করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG Embedding Strategy Analyzer

interface SvgEmbeddingPlan {
  embeddingType: 'inline' | 'img' | 'background' | 'object';
  viewBoxWidth: number;
  viewBoxHeight: number;
  allowsScripting: boolean;
  allowsExternalCss: boolean;
}

interface AssessmentReport {
  embeddingType: string;
  aspectRatio: number;
  isDirectDomNode: boolean;
  isSecurityIsolated: boolean;
  recommendedForUserUploads: boolean;
}

function evaluateSvgIntegration(plan: SvgEmbeddingPlan): AssessmentReport {
  const calculatedAspectRatio = Math.round(plan.viewBoxWidth / plan.viewBoxHeight);
  const isDirectDomNode = plan.embeddingType === 'inline';

  return {
    embeddingType: plan.embeddingType,
    aspectRatio: calculatedAspectRatio,
    isDirectDomNode,
    isSecurityIsolated: !plan.allowsScripting && !isDirectDomNode,
    recommendedForUserUploads: plan.embeddingType === 'img'
  };
}

const iconAssessment = evaluateSvgIntegration({
  embeddingType: 'inline',
  viewBoxWidth: 24,
  viewBoxHeight: 24,
  allowsScripting: true,
  allowsExternalCss: true
});

const bannerAssessment = evaluateSvgIntegration({
  embeddingType: 'img',
  viewBoxWidth: 600,
  viewBoxHeight: 300,
  allowsScripting: false,
  allowsExternalCss: false
});

console.log('Inline icon aspect ratio:', iconAssessment.aspectRatio);
console.log('Inline icon is direct DOM node:', iconAssessment.isDirectDomNode);
console.log('Banner graphic aspect ratio:', bannerAssessment.aspectRatio);
console.log('Banner graphic recommended via img tag:', bannerAssessment.recommendedForUserUploads);

// prints: Inline icon aspect ratio: 1
// prints: Inline icon is direct DOM node: true
// prints: Banner graphic aspect ratio: 2
// prints: Banner graphic recommended via img tag: true`
    },
    {
      type: 'heading',
      id: 'security-considerations-malicious-svg',
      text: {
        en: 'Security Considerations: Preventing Vector Cross-Site Scripting (XSS)',
        bn: 'নিরাপত্তা বিবেচনা: ভেক্টর ক্রস-সাইট স্ক্রিপ্টিং (XSS) প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A critical security risk arises when web platforms permit end users to upload custom SVG files. Because SVG is an XML document, it can contain executable "<script>" elements, embedded HTML via "<foreignObject>", and malicious event handlers such as "onload=\'stealCookies()\'". If an application displays user-uploaded SVG files using inline "<svg>" tags, any embedded malicious JavaScript executes directly within the victim\'s origin context, granting attackers full access to local authentication tokens and session state. To eliminate this attack surface, production systems load untrusted SVG graphics exclusively through sealed "<img>" tags. Browser security rules inside <img> tags automatically strip all script execution and external network requests. Alternatively, sanitize raw vector markup with tools like DOMPurify prior to inline insertion.',
        bn: 'ওয়েব প্ল্যাটফর্মে যখন সাধারণ ব্যবহারকারীদের নিজস্ব এসভিজি ফাইল আপলোড করতে দেওয়া হয়, তখন একটি মারাত্মক নিরাপত্তা ঝুঁকি দেখা দেয়। যেহেতু এসভিজি একটি এক্সএমএল ফাইল, তাই এর ভেতর ক্ষতিকর "<script>" ট্যাগ, "<foreignObject>" এর মাধ্যমে এইচটিএমএল কোড অথবা "onload" এর মতো স্ক্রিপ্ট ইভেন্ট হ্যান্ডলার লুকানো থাকতে পারে। কোনো ওয়েব অ্যাপ্লিকেশন যদি ব্যবহারকারীর আপলোড করা সেই এসভিজি ফাইল সরাসরি ইনলাইন "<svg>" ট্যাগ হিসেবে এইচটিএমএলে রেন্ডার করে, তবে সেই ক্ষতিকর স্ক্রিপ্ট ব্যবহারকারীর ব্রাউজারে চালু হয়ে যায় এবং কুকিজ বা সেশন ডেটা চুরি করতে পারে। এই আক্রমণ সম্পূর্ণ রুখতে প্রোডাকশন সিস্টেমগুলো ব্যবহারকারীর আপলোড করা এসভিজি সর্বদা সুরক্ষিত "<img>" ট্যাগের মাধ্যমে প্রদর্শন করে। ব্রাউজার এই ট্যাগের ভেতরে সমস্ত স্ক্রিপ্ট ও বহিঃস্থ নেটওয়ার্ক রিকোয়েস্ট বন্ধ করে দেয়। অথবা এইচটিএমএলে ইনলাইন করার আগে DOMPurify লাইব্রেরি দিয়ে কোড সতর্কভাবে ফিল্টার করে নেওয়া হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Use inline SVG for themeable UI icons: Direct DOM membership enables seamless currentColor matching and CSS state styling.',
          bn: 'থিমযুক্ত আইকনে ইনলাইন এসভিজি ব্যবহার করুন: সরাসরি ডমের অংশ হওয়ায় currentColor এবং সিএসএস দিয়ে সহজে রঙ বদলানো যায়।'
        },
        {
          en: 'Use <img> tags for user-uploaded SVG: The browser enforces strict sandboxing, stripping all malicious scripts and external requests.',
          bn: 'ব্যবহারকারীর আপলোড করা ফাইলে <img> ট্যাগ ব্যবহার করুন: ব্রাউজারের কঠোর স্যান্ডবক্স ক্ষতিকর স্ক্রিপ্ট চালানো স্বয়ংক্রিয়ভাবে আটকে দেয়।'
        },
        {
          en: 'Always declare the xmlns namespace: The XML namespace ensures the browser parses shapes correctly across all document contexts.',
          bn: 'সর্বদা xmlns নেমস্পেস উল্লেখ করুন: এই এক্সএমএল ঘোষণা ব্রাউজারকে প্রতিটি শেপ সঠিকভাবে প্রদর্শন করতে সহায়তা করে।'
        },
        {
          en: 'Never omit the viewBox attribute: The viewBox establishes the mathematical coordinate space necessary for responsive vector scaling.',
          bn: 'viewBox অ্যাট্রিবিউট কখনো বাদ দেবেন না: এটি রেসপন্সিভ স্কেলিংয়ের জন্য প্রয়োজনীয় গাণিতিক স্থানাঙ্ক ব্যবস্থা প্রতিষ্ঠা করে।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-lead-lines',
    tech: 'svg',
    title: {
      en: 'SVG Shapes & Path Syntax — Basic Shapes and the Path Command Grammar',
      bn: 'এসভিজি শেপস ও পাথ সিনট্যাক্স: বেসিক শেপ এবং পাথ কমান্ড ব্যাকরণ'
    }
  },
  exercises: [
    {
      id: 'gc-ex1',
      kind: 'mcq',
      topic: 'inline-svg-benefits',
      question: {
        en: 'What is the primary architectural advantage of embedding an SVG directly inline within HTML compared to loading it through an <img> tag?',
        bn: 'একটি এসভিজি ফাইলকে <img> ট্যাগে লোড করার চেয়ে সরাসরি এইচটিএমএলে ইনলাইন হিসেবে বসানোর প্রধান প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        {
          en: 'Inline SVG elements become direct nodes in the Document Object Model (DOM), allowing seamless CSS cascading (such as currentColor), hover styles, and JavaScript event listeners',
          bn: 'ইনলাইন এসভিজির উপাদানগুলো সরাসরি ডমের (DOM) অংশে পরিণত হয়, যার ফলে সাধারণ সিএসএস ক্যাসকেড (যেমন currentColor), হোভার স্টাইল এবং জাভাস্ক্রিপ্ট ইভেন্ট হ্যান্ডলার প্রয়োগ করা যায়'
        },
        {
          en: 'Inline SVG reduces computer network download latency to zero seconds',
          bn: 'ইনলাইন এসভিজি নেটওয়ার্ক ডাউনলোডের সময়কে শূন্য সেকেন্ডে নামিয়ে আনে'
        },
        {
          en: 'Because inline SVG completely formats the client computer hard drive',
          bn: 'কারণ ইনলাইন এসভিজি ক্লায়েন্টের হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'Inline SVG was mandated by international maritime treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক নৌ চুক্তিতে ইনলাইন এসভিজি বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct DOM nodes = CSS cascade + JavaScript querySelector + event listeners.',
        bn: 'সরাসরি ডম নোড = সিএসএস স্টাইলিং ও জাভাস্ক্রিপ্ট ইভেন্টের অবাধ সুযোগ।'
      },
      explanation: {
        en: 'Inline SVG integrates into the parent document DOM tree, unlocking direct CSS selectors, animations, and interactive event handling.',
        bn: 'ইনলাইন এসভিজি মূল ডমের অংশ হওয়ায় সহজে সিএসএস এবং স্ক্রিপ্ট দিয়ে নিয়ন্ত্রণ করা যায়।'
      }
    },
    {
      id: 'gc-ex2',
      kind: 'mcq',
      topic: 'img-tag-security-isolation',
      question: {
        en: 'Why is loading untrusted user-uploaded SVG graphics through an <img> tag much safer than embedding them inline?',
        bn: 'ব্যবহারকারীর আপলোড করা অজানা এসভিজি সরাসরি ইনলাইন না করে <img> ট্যাগে লোড করা কেন অনেক বেশি নিরাপদ?'
      },
      options: [
        {
          en: 'The browser treats an <img> tag as an isolated security sandbox: embedded <script> tags and inline JavaScript handlers are disabled, preventing Cross-Site Scripting (XSS)',
          bn: 'ব্রাউজার <img> ট্যাগকে একটি বিচ্ছিন্ন নিরাপদ স্যান্ডবক্স হিসেবে বিবেচনা করে: এসভিজির ভেতরে থাকা <script> ট্যাগ ও জাভাস্ক্রিপ্ট ইভেন্ট অকেজো থাকে, ফলে এক্সএসএস (XSS) আক্রমণ রোধ হয়'
        },
        {
          en: 'Because <img> tags automatically encrypt text into secret symbols',
          bn: 'কারণ <img> ট্যাগ টেক্সটকে গোপন সাংকেতিক প্রতীকে রূপান্তর করে'
        },
        {
          en: 'The <img> tag reduces internet data consumption by 90 percent',
          bn: 'কারণ <img> ট্যাগ ইন্টারনেটের ডেটা খরচ ৯০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Because <img> tags were invented by international shipping lines',
          bn: 'কারণ আন্তর্জাতিক শিপিং লাইন <img> ট্যাগ আবিষ্কার করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Browser disables script execution inside <img> tags for security.',
        bn: 'নিরাপত্তার স্বার্থে ব্রাউজার <img> ট্যাগের ভেতরে কোনো স্ক্রিপ্ট চালাতে দেয় না।'
      },
      explanation: {
        en: 'Browsers block script execution and external resource fetches inside <img> contexts, eliminating client-side XSS vulnerabilities.',
        bn: 'ব্রাউজার <img>-এর ভেতরে সব ধরণের স্ক্রিপ্ট বাতিল করে দেয়, যা সাইটকে ক্ষতিকর আক্রমণ থেকে বাঁচায়।'
      }
    },
    {
      id: 'gc-ex3',
      kind: 'mcq',
      topic: 'svg-xml-namespace-requirement',
      question: {
        en: 'What is the purpose of the XML namespace attribute xmlns="http://www.w3.org/2000/svg" on standalone SVG documents?',
        bn: 'স্ট্যান্ডঅ্যালোন এসভিজি ফাইলে xmlns="http://www.w3.org/2000/svg" অ্যাট্রিবিউটটি ব্যবহারের উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It informs the XML parser that the element tags belong to the official W3C SVG specification, allowing proper interpretation of graphical tags like <path> and <circle>',
          bn: 'এটি এক্সএমএল পার্সারকে জানায় যে ট্যাগের নামগুলো W3C-এর অফিসিয়াল এসভিজি স্পেসিফিকেশনের অংশ, যার ফলে <path> ও <circle>-এর মতো ভেক্টর শেপগুলো সঠিকভাবে প্রদর্শিত হয়'
        },
        {
          en: 'It forces the client device to download new graphics card drivers',
          bn: 'এটি ডিভাইসের নতুন গ্রাফিক্স কার্ড ড্রাইভার ডাউনলোড করতে বাধ্য করে'
        },
        {
          en: 'Because the namespace URL is where the browser downloads color pixels from',
          bn: 'কারণ এই নেমস্পেসের ঠিকানা থেকে ব্রাউজার রঙের পিক্সেল ডাউনলোড করে'
        },
        {
          en: 'The namespace attribute was created by postal authorities in 1995',
          bn: 'কারণ ১৯৯৫ সালে ডাক কর্তৃপক্ষ এই নেমস্পেস তৈরি করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'XML requires namespace declarations so the parser knows which grammar governs the elements.',
        bn: 'এক্সএমএল পার্সার যাতে বুঝতে পারে এটি ভেক্টর গ্রাফিক্স, সেজন্য নেমস্পেস প্রয়োজন।'
      },
      explanation: {
        en: 'The xmlns declaration identifies the XML dialect, ensuring browsers and external graphics tools parse the file as valid vector elements.',
        bn: 'নেমস্পেস এক্সএমএল পার্সারকে নিশ্চিত করে যে এটি একটি মানসম্মত ভেক্টর গ্রাফিক্স ফাইল।'
      }
    },
    {
      id: 'gc-ex4',
      kind: 'mcq',
      topic: 'retained-mode-svg-vs-canvas',
      question: {
        en: 'Why is SVG described as a "Retained Mode" graphics system whereas HTML5 Canvas is an "Immediate Mode" graphics system?',
        bn: 'এসভিজিকে কেন একটি "রিটেইন্ড মোড" (Retained Mode) এবং ক্যানভাসকে কেন "ইমিডিয়েট মোড" (Immediate Mode) গ্রাফিক্স সিস্টেম বলা হয়?'
      },
      options: [
        {
          en: 'SVG retains an active internal scene graph in the DOM where elements persist and can be individually styled and re-rendered, while Canvas immediately paints pixels to a flat bitmap and retains no memory of drawn objects',
          bn: 'এসভিজি ডমে একটি সক্রিয় উপাদান কাঠামো ধরে রাখে (Retained) যেখানে প্রতিটি শেপ টিকে থাকে এবং আলাদাভাবে স্টাইল বা পরিবর্তন করা যায়; কিন্তু ক্যানভাস সরাসরি পিক্সেলে রূপান্তর করে ফেলে (Immediate) এবং আঁকা বস্তুর কোনো স্মৃতি রাখে না'
        },
        {
          en: 'Because SVG only works on desktop monitors while Canvas is strictly for smartphones',
          bn: 'কারণ এসভিজি শুধু মনিটরে চলে আর ক্যানভাস কেবল স্মার্টফোনের জন্য'
        },
        {
          en: 'Canvas was banned by international web consortiums in 2020',
          bn: 'কারণ ২০২০ সালে আন্তর্জাতিক কনসোর্টিয়াম ক্যানভাস নিষিদ্ধ করেছিল'
        },
        {
          en: 'Retained mode SVG consumes zero bytes of computer memory',
          bn: 'রিটেইন্ড মোড এসভিজি কম্পিউটারের শূন্য বাইট মেমরি খরচ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Retained = browser remembers objects in DOM tree. Immediate = draw pixels and forget objects.',
        bn: 'রিটেইন্ড মানে ডমে শেপ মনে রাখা; ইমিডিয়েট মানে ক্যানভাসে পিক্সেল এঁকে অবজেক্ট ভুলে যাওয়া।'
      },
      explanation: {
        en: 'In retained mode (SVG), the engine maintains the scene hierarchy and handles repainting; in immediate mode (Canvas), you manage the render loop yourself.',
        bn: 'এসভিজিতে ব্রাউজার নিজেই প্রতিটি উপাদানের হিসাব মনে রাখে, অন্যদিকে ক্যানভাসে কোডের মাধ্যমে প্রতি ফ্রেম নতুন করে আঁকতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'glass-catalog-quiz',
    title: {
      en: 'SVG Architecture, Embedding Strategies, and Security Quiz',
      bn: 'এসভিজি আর্কিটেকচার, এম্বেডিং কৌশল ও নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'gcq-q1',
        kind: 'mcq',
        topic: 'css-background-svg-limitations',
        question: {
          en: 'When embedding an SVG via CSS "background-image: url(\'icon.svg\')", what limitation applies to styling and interactivity?',
          bn: 'সিএসএসে "background-image: url(\'icon.svg\')" দিয়ে এসভিজি ব্যবহার করার সময় স্টাইলিং ও ইন্টারঅ্যাক্টিভিটির ক্ষেত্রে কোন সীমাবদ্ধতা কার্যকর হয়?'
        },
        options: [
          {
            en: 'The SVG does not create any DOM elements in the document tree, meaning individual shapes cannot receive hover effects, CSS custom property changes, or JavaScript click events',
            bn: 'এসভিজি ডম গাছে কোনো আলাদা উপাদান তৈরি করে না, যার ফলে ভেতরের শেপগুলোতে হোভার স্টাইল, সিএসএস ভেরিয়েবল পরিবর্তন বা জাভাস্ক্রিপ্ট ক্লিক ইভেন্ট দেওয়া যায় না'
          },
          {
            en: 'CSS background SVGs permanently freeze the browser page scrolling',
            bn: 'সিএসএস ব্যাকগ্রাউন্ড এসভিজি ব্রাউজারের পেজ স্ক্রলিং চিরতরে বন্ধ করে দেয়'
          },
          {
            en: 'Because CSS backgrounds delete all browser cookies on page load',
            bn: 'কারণ সিএসএস ব্যাকগ্রাউন্ড পেজ লোডের সময় সমস্ত কুকিজ মুছে ফেলে'
          },
          {
            en: 'Background images were declared obsolete by the W3C in 2019',
            bn: 'কারণ ২০১৯ সালে W3C ব্যাকগ্রাউন্ড ইমেজ বাতিল করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'CSS background is painted purely as a flat texture. No internal DOM nodes exist.',
          bn: 'সিএসএস ব্যাকগ্রাউন্ড শুধুই একটি টেক্সচার হিসেবে আঁকা হয়; এর ভেতরে কোনো ডম নোড থাকে না।'
        },
        explanation: {
          en: 'Background images are rendered as background textures; they expose no DOM structure to external stylesheets or event listeners.',
          bn: 'সিএসএস ব্যাকগ্রাউন্ড কেবল দৃশ্যমান টেক্সচার হিসেবে কাজ করে, ডমে কোনো আলাদা নোড তৈরি করে না।'
        }
      },
      {
        id: 'gcq-q2',
        kind: 'mcq',
        topic: 'currentcolor-inheritance-iconography',
        question: {
          en: 'How does the CSS keyword "currentColor" empower maintainable UI iconography when using inline SVG?',
          bn: 'ইনলাইন এসভিজি ব্যবহারের সময় সিএসএস কিওয়ার্ড "currentColor" কীভাবে আইকন ডিজাইনকে অনেক বেশি গতিশীল ও সহজ করে তোলে?'
        },
        options: [
          {
            en: 'It instructs SVG path elements (fill="currentColor" or stroke="currentColor") to inherit the active text color of their parent container, allowing buttons and links to recolor icons automatically across hover and active states',
            bn: 'এটি এসভিজি পাথকে (fill="currentColor" বা stroke="currentColor") প্যারেন্ট উপাদানের টেক্সট কালার উত্তরাধিকার সূত্রে গ্রহণ করতে বলে, যার ফলে বাটন বা লিংকের হোভার ও অ্যাক্টিভ অবস্থায় আইকনের রঙ স্বয়ংক্রিয়ভাবে বদলে যায়'
          },
          {
            en: 'currentColor forces all colors to become solid neon green',
            bn: 'currentColor সব রঙকে নিয়ন সবুজ হতে বাধ্য করে'
          },
          {
            en: 'Because currentColor reduces computer battery consumption by 50 percent',
            bn: 'কারণ currentColor ব্যাটারির খরচ ৫০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It was invented by international printer manufacturers in 1998',
            bn: 'কারণ ১৯৯৮ সালে প্রিন্টার প্রস্তুতকারকরা এটি উদ্ভাবন করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'currentColor = SVG inherits the surrounding CSS text color automatically.',
          bn: 'currentColor মানে এসভিজি শেপটি তার চারপাশের লেখার সিএসএস কালার নিজে থেকেই ধারণ করে।'
        },
        explanation: {
          en: 'currentColor links SVG fills or strokes directly to the CSS "color" property, enabling automatic icon theming with zero duplicated styles.',
          bn: 'currentColor সিএসএস টেক্সট কালারের সাথে যুক্ত হয়ে স্বয়ংক্রিয়ভাবে আইকনের রঙ পরিবর্তন করতে সাহায্য করে।'
        }
      },
      {
        id: 'gcq-q3',
        kind: 'mcq',
        topic: 'svg-case-sensitivity-xml',
        question: {
          en: 'Why is attribute casing critical in SVG (e.g. "viewBox" vs "viewbox" or "preserveAspectRatio" vs "preserveaspectratio")?',
          bn: 'এসভিজিতে কেন অ্যাট্রিবিউটের বড়/ছোট হাতের অক্ষর অত্যন্ত সংবেদনশীল (যেমন "viewBox" বনাম "viewbox")?'
        },
        options: [
          {
            en: 'Because SVG follows strict XML syntax rules where attribute names are case-sensitive; writing "viewbox" in lowercase causes the browser to ignore the attribute and fall back to the default unscaled 300x150 box',
            bn: 'কারণ এসভিজি কঠোর এক্সএমএল ব্যাকরণ মেনে চলে যেখানে অ্যাট্রিবিউট কেস-সংবেদনশীল; ভুলবশত ছোট হাতের অক্ষরে "viewbox" লিখলে ব্রাউজার তা বাতিল করে ৩০০×১৫০ ডিফল্ট মাপে আটকে যায়'
          },
          {
            en: 'Because lowercase viewbox causes computer screens to short-circuit',
            bn: 'কারণ ছোট হাতের viewbox লিখলে মনিটরের স্ক্রিন নষ্ট হয়ে যায়'
          },
          {
            en: 'Attribute casing is only checked on Apple Safari browsers',
            bn: 'অ্যাট্রিবিউট কেস কেবল অ্যাপল সাফারিতে চেক করা হয়'
          },
          {
            en: 'Because case sensitivity was mandated by international radio laws',
            bn: 'কারণ আন্তর্জাতিক রেডিও আইনে এটি বাধ্যতামূলক করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'XML is case-sensitive: camelCase attribute names like viewBox are strictly required.',
          bn: 'এক্সএমএল কেস-সংবেদনশীল: viewBox এবং preserveAspectRatio হুবহু বড়-ছোট হাতে লিখতে হয়।'
        },
        explanation: {
          en: 'SVG attributes follow XML camelCase specifications; incorrect casing causes the parser to disregard the instruction.',
          bn: 'এক্সএমএল ব্যাকরণ মেনে চলার কারণে সঠিক কেসিং না লিখলে ব্রাউজার সেই নিয়ম সম্পূর্ণ অগ্রাহ্য করে।'
        }
      },
      {
        id: 'gcq-q4',
        kind: 'mcq',
        topic: 'dompurify-sanitization-prevention',
        question: {
          en: 'When an application must render user-provided SVG markup inline, what step is mandatory to prevent Cross-Site Scripting (XSS)?',
          bn: 'যখন কোনো অ্যাপ্লিকেশনে ব্যবহারকারীর পাঠানো এসভিজি ইনলাইন হিসেবে রেন্ডার করা বাধ্যতামূলক হয়, তখন এক্সএসএস (XSS) আক্রমণ রোধে কোন পদক্ষেপটি নেওয়া অপরিহার্য?'
        },
        options: [
          {
            en: 'Sanitizing the raw SVG string using a security library such as DOMPurify configured with SVG profiles to strip all <script> tags, <foreignObject> elements, and on* event handlers',
            bn: 'DOMPurify-এর মতো বিশ্বস্ত সিকিউরিটি লাইব্রেরি দিয়ে এসভিজি স্ট্রিং ফিল্টার করা, যাতে সমস্ত <script> ট্যাগ, <foreignObject> এবং ক্ষতিকর ইভেন্ট হ্যান্ডলার মুছে যায়'
          },
          {
            en: 'Renaming the file extension from .svg to .txt',
            bn: 'ফাইলের এক্সটেনশন .svg থেকে বদলে .txt করে দেওয়া'
          },
          {
            en: 'Increasing the server memory to 128 gigabytes',
            bn: 'সার্ভারের মেমরি ১২৮ গিগাবাইটে উন্নীত করা'
          },
          {
            en: 'Because sanitization was declared unnecessary by the W3C in 2022',
            bn: 'কারণ ২০২২ সালে W3C স্যানিটাইজেশন অপ্রয়োজনীয় ঘোষণা করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Always run raw user SVG through DOMPurify before dangerously setting innerHTML.',
          bn: 'ডমে ইনলাইন করার আগে সর্বদা DOMPurify দিয়ে কোড স্যানিটাইজ করে নিতে হয়।'
        },
        explanation: {
          en: 'Robust sanitization strips executable attack payloads while preserving safe visual geometry elements.',
          bn: 'স্যানিটাইজেশন ক্ষতিকর স্ক্রিপ্ট উপাদানগুলো মুছে ফেলে কেবল নিরাপদ ভেক্টর শেপগুলোকে রাখে।'
        }
      }
    ]
  }
};
