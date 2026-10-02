import type { Lesson } from '../../../lib/types';

export const movingLightLesson: Lesson = {
  slug: 'the-moving-light',
  tech: 'svg',
  title: {
    en: 'SVG Animations — CSS Keyframes, Dashoffset, and SMIL',
    bn: 'এসভিজি অ্যানিমেশন: সিএসএস কিফ্রেম, ড্যাশ-অফসেট ও SMIL'
  },
  summary: {
    en: 'Bringing vector graphics to life requires selecting the right animation engine and respecting browser render budgets. In this lesson, you will master SVG animation technologies. Learn CSS keyframes and transitions for GPU-composited transforms and opacity. Master the self-drawing line technique using path.getTotalLength() and stroke-dashoffset. Explore declarative SMIL elements (<animate>, <animateTransform>, <animateMotion>) for standalone vector motion inside <img> tags. Understand the Web Animations API for dynamic runtime scripting, profile frame-budget performance between repainted paint properties and composited transforms, and honor accessibility via prefers-reduced-motion media queries. Implement an executable stroke-dashoffset animation simulator in TypeScript.',
    bn: 'ভেক্টর গ্রাফিক্সকে জীবন্ত করে তুলতে সঠিক অ্যানিমেশন ইঞ্জিন নির্বাচন এবং ব্রাউজারের রেন্ডারিং ফ্রেম-বাজেট বিবেচনা করা অপরিহার্য। এই পাঠে আপনি এসভিজি অ্যানিমেশনের প্রধান প্রযুক্তিগুলো শিখবেন। জিপিইউ-কম্পোজিটেড রূপান্তরের জন্য সিএসএস কিফ্রেম ও ট্রানজিশন শিখুন। path.getTotalLength() এবং stroke-dashoffset দিয়ে নিজে আঁকা লাইনের অ্যানিমেশন অনুশীলন করুন। <img> ট্যাগে চালানোর জন্য ঘোষণামূলক SMIL (<animate>, <animateTransform>, <animateMotion>) অন্বেষণ করুন। জাভাস্ক্রিপ্ট ওয়েব অ্যানিমেশনস এপিআই (WAAPI), সিপিইউ রিফ্লো বনাম জিপিইউ কম্পোজিটিংয়ের পারফরম্যান্স পার্থক্য এবং অ্যাক্সেসিবিলিটি নিশ্চিত করতে prefers-reduced-motion-এর ব্যবহার বিস্তারিত জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর স্ট্রোক-ড্যাশঅফসেট অ্যানিমেশন সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'svg-animation-engines-overview',
      text: {
        en: 'The Three Animation Engines: CSS, SMIL, and WAAPI',
        bn: 'তিনটি অ্যানিমেশন ইঞ্জিন: সিএসএস, SMIL এবং WAAPI'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you animate Scalable Vector Graphics (SVG), modern web browsers provide three complementary animation systems.',
        bn: 'আপনি যখন স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) অ্যানিমেশন করেন, তখন আধুনিক ওয়েব ব্রাউজার তিনটি পরস্পরের পরিপূরক ইঞ্জিন সরবরাহ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The primary and most performant engine is CSS Animations and Transitions. Animating hardware-accelerated properties like "transform" and "opacity" allows the browser compositor to run smooth 60fps animations entirely on the GPU without triggering CPU layout recalculations. The second engine is SMIL (Synchronized Multimedia Integration Language), represented by native XML elements like "<animate>" and "<animateTransform>" placed directly inside the SVG markup. SMIL works even when an SVG file is embedded inside a sealed "<img>" tag where external CSS and JavaScript are blocked. The third engine is the Web Animations API (WAAPI) using "element.animate()", giving JavaScript programmatic control over playback, pausing, scrubbing, and reverse playback. Together, these engines enable everything from subtle UI button micro-interactions to complex data-driven illustrations.',
        bn: 'প্রথম এবং সবচেয়ে দ্রুতগতির ইঞ্জিন হলো সিএসএস অ্যানিমেশন ও ট্রানজিশন। "transform" এবং "opacity"-র মতো হার্ডওয়্যার-অ্যাক্সিলারেটেড প্রপার্টি অ্যানিমেট করলে ব্রাউজার কম্পোজিটর সিপিইউ-র লেআউট রিফ্লো ছাড়াই সরাসরি জিপিইউতে মসৃণ ৬০ ফ্রেম পার সেকেন্ডে অ্যানিমেশন চালায়। দ্বিতীয় ইঞ্জিনটি হলো SMIL (Synchronized Multimedia Integration Language), যা এসভিজি মার্কআপের ভেতরে সরাসরি "<animate>" ও "<animateTransform>" ট্যাগের মাধ্যমে লেখা হয়। SMIL এমনকি সিল করা "<img>" ট্যাগেও কাজ করে যেখানে বাইরের সিএসএস বা স্ক্রিপ্ট বন্ধ থাকে। তৃতীয় ইঞ্জিনটি হলো ওয়েব অ্যানিমেশনস এপিআই (WAAPI), যা জাভাস্ক্রিপ্টের "element.animate()" দিয়ে অ্যানিমেশন প্লে, পজ, রিভার্স এবং টাইমিং নিখুঁতভাবে নিয়ন্ত্রণ করার সুযোগ দেয়। এই তিনটি ইঞ্জিন মিলেই ওয়েব ইন্টারফেসে আইকন ট্রানজিশন থেকে শুরু করে জটিল অ্যানিমেটেড চিত্র তৈরি করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'stroke-dashoffset-technique',
          def: {
            en: 'An animation method that sets stroke-dasharray to total path length and animates stroke-dashoffset to zero, creating a live pen drawing effect.',
            bn: 'এমন একটি অ্যানিমেশন কৌশল যা লাইনের মোট দৈর্ঘ্য অনুযায়ী dasharray সেট করে এবং dashoffset কমিয়ে ০ করে রেখাটি নিজে থেকে আঁকার অনুভূতি তৈরি করে।'
          }
        },
        {
          term: 'smil-declarative-animation',
          def: {
            en: 'Synchronized Multimedia Integration Language; XML elements (<animate>) embedded inside SVG files that run independently of external scripts.',
            bn: 'এসভিজি ফাইলের ভেতরে সরাসরি লেখা বিশেষ এক্সএমএল ট্যাগ (<animate>) যা বাইরের কোনো স্ক্রিপ্ট ছাড়াই স্বাধীনভাবে অ্যানিমেশন পরিচালনা করে।'
          }
        },
        {
          term: 'web-animations-api',
          def: {
            en: 'A programmatic JavaScript interface (element.animate) combining the performance of CSS with the runtime control of JavaScript.',
            bn: 'একটি জাভাস্ক্রিপ্ট প্রোগ্রামিং ইন্টারফেস (element.animate) যা সিএসএসের গতি এবং স্ক্রিপ্টের গতিশীল নিয়ন্ত্রণের সমন্বয় ঘটায়।'
          }
        },
        {
          term: 'prefers-reduced-motion',
          def: {
            en: 'A CSS media query detecting if the user has requested the operating system to minimize non-essential motion, ensuring accessibility.',
            bn: 'একটি সিএসএস মিডিয়া কুয়েরি যা ব্যবহারকারী অপারেটিং সিস্টেমে অপ্রয়োজনীয় অ্যানিমেশন বন্ধ রাখতে অনুরোধ করেছেন কি না তা শনাক্ত করে।'
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
      id: 'animation-engines-comparison-table',
      text: {
        en: 'Comparative Matrix of SVG Animation Technologies',
        bn: 'এসভিজি অ্যানিমেশন প্রযুক্তিসমূহের তুলনামূলক মেট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the appropriate animation mechanism depends on delivery context, performance budgets, and requirements for runtime script control.',
        bn: 'প্রদর্শন মাধ্যম, ব্রাউজার পারফরম্যান্স বাজেট এবং রানটাইম স্ক্রিপ্ট নিয়ন্ত্রণের ওপর নির্ভর করে সঠিক অ্যানিমেশন প্রযুক্তি বেছে নিতে হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Animation System', bn: 'অ্যানিমেশন সিস্টেম' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Works Inside <img> Tag', bn: '<img> ট্যাগের ভেতর চলে' },
        { en: 'Hardware Acceleration', bn: 'হার্ডওয়্যার অ্যাক্সিলারেশন' }
      ],
      rows: [
        [
          { en: 'CSS Keyframes', bn: 'সিএসএস কিফ্রেম' },
          { en: '@keyframes spin { to { transform: rotate(360deg); } }', bn: '@keyframes spin { to { transform: rotate(360deg); } }' },
          { en: 'Yes (if declared inside an internal <style> block)', bn: 'হ্যাঁ (যদি ফাইলের ভেতরের <style> ব্লকে লেখা থাকে)' },
          { en: 'High on GPU compositor for transform and opacity', bn: 'transform ও opacity-র ক্ষেত্রে জিপিইউ-তে অত্যন্ত দ্রুতগতির' }
        ],
        [
          { en: 'SMIL (<animate>)', bn: 'SMIL (<animate>)' },
          { en: '<animate attributeName="r" values="10;25;10" dur="2s" repeatCount="indefinite" />', bn: '<animate attributeName="r" values="10;25;10" dur="2s" repeatCount="indefinite" />' },
          { en: 'Yes; runs natively without any external dependencies', bn: 'হ্যাঁ; কোনো বাইরের লাইব্রেরি ছাড়াই প্রাকৃতিকভাবে চলে' },
          { en: 'CPU main thread; triggers paint passes per frame', bn: 'সিপিইউ মেইন থ্রেড; প্রতি ফ্রেমে পেইন্ট হিসাব করতে হয়' }
        ],
        [
          { en: 'Web Animations API', bn: 'ওয়েব অ্যানিমেশনস এপিআই' },
          { en: 'path.animate([{ strokeDashoffset: 200 }, { strokeDashoffset: 0 }], 1000);', bn: 'path.animate([{ strokeDashoffset: 200 }, { strokeDashoffset: 0 }], 1000);' },
          { en: 'No; requires active JavaScript execution context', bn: 'না; সক্রিয় জাভাস্ক্রিপ্ট রানটাইম পরিবেশ প্রয়োজন' },
          { en: 'GPU compositor supported for standard transform properties', bn: 'স্ট্যান্ডার্ড ট্রান্সফর্ম প্রপার্টিতে জিপিইউ কম্পোজিটিং সমর্থন করে' }
        ],
        [
          { en: 'CSS Transitions', bn: 'সিএসএস ট্রানজিশন' },
          { en: 'transition: stroke-dashoffset 0.5s ease;', bn: 'transition: stroke-dashoffset 0.5s ease;' },
          { en: 'No; requires active class change or hover state from page', bn: 'না; পেজ থেকে সক্রিয় ক্লাস পরিবর্তন বা হোভার স্টেট লাগে' },
          { en: 'High efficiency for state-driven UI micro-interactions', bn: 'ইউআই ইন্টারঅ্যাকশন ও হোভার স্টেটের জন্য অত্যন্ত কার্যকর' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-dashoffset-animation-simulator-code',
      text: {
        en: 'Executable Stroke-Dashoffset Line Draw Simulator',
        bn: 'স্ট্রোক-ড্যাশঅফসেট লাইন ড্রয়িং সিমুলেটরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the stroke-dashoffset values across 3 stages (0%, 50%, and 100% completion) for a 200-unit path during a line-drawing animation.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ২০০ একক দৈর্ঘ্যের পাথের লাইন ড্রয়িং অ্যানিমেশনের ৩টি পর্যায়ে (০%, ৫০% এবং ১০০% সম্পন্ন) stroke-dashoffset মান হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG Line Self-Drawing Animation

interface AnimationFrameState {
  totalLength: number;
  progressPercent: number;
  currentDashoffset: number;
  isComplete: boolean;
}

function computeLineDrawFrame(
  totalLength: number,
  progressPercent: number
): AnimationFrameState {
  // Clamp progress between 0 and 100
  const progress = Math.max(0, Math.min(100, progressPercent));
  const remainingOffset = totalLength * (1 - progress / 100);

  return {
    totalLength,
    progressPercent: progress,
    currentDashoffset: Math.round(remainingOffset),
    isComplete: progress === 100
  };
}

const startFrame = computeLineDrawFrame(200, 0);
const midFrame = computeLineDrawFrame(200, 50);
const endFrame = computeLineDrawFrame(200, 100);

console.log('Initial start frame dashoffset:', startFrame.currentDashoffset);
console.log('Halfway mid frame dashoffset:', midFrame.currentDashoffset);
console.log('Completed end frame dashoffset:', endFrame.currentDashoffset);
console.log('Animation completed state:', endFrame.isComplete);

// prints: Initial start frame dashoffset: 200
// prints: Halfway mid frame dashoffset: 100
// prints: Completed end frame dashoffset: 0
// prints: Animation completed state: true`
    },
    {
      type: 'heading',
      id: 'performance-and-accessibility-reduced-motion',
      text: {
        en: 'Performance Profiling and Accessible Motion Guidelines',
        bn: 'পারফরম্যান্স প্রোফাইলিং এবং অ্যাক্সেসিবল অ্যানিমেশন নীতিমালা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent engineering failure in SVG animation is animating paint properties (like fill or stroke) or path coordinate data ("d") in a loop. Unlike "transform" and "opacity" which run on the GPU compositor, mutating path geometry or colors forces the browser to run expensive CPU layout and raster repaints on every single frame, draining mobile device battery and causing dropped frames. Furthermore, developers must respect vestibular motion disorders by wrapping looping animations in accessibility media queries. Using "@media (prefers-reduced-motion: reduce)", applications should instantly display final static drawings or replace sweeping motion with gentle opacity fades, ensuring comfortable reading for all users.',
        bn: 'এসভিজি অ্যানিমেশনের একটি সাধারণ ইঞ্জিনিয়ারিং ভুল হলো অবিরাম লুপের মধ্যে ফিল, স্ট্রোক বা পাথের কোঅর্ডিনেট ডেটা ("d") পরিবর্তন করা। "transform" এবং "opacity" সরাসরি জিপিইউ কম্পোজিটরে চলে, কিন্তু পাথের জ্যামিতি বা রঙ পরিবর্তন করলে ব্রাউজারকে প্রতি ফ্রেমে সিপিইউতে সম্পূর্ণ লেআউট পুনরায় হিসাব করতে হয়, যার ফলে মোবাইলের ব্যাটারি দ্রুত শেষ হয় এবং ফ্রেম ড্রপ ঘটে। এর পাশাপাশি ব্যবহারকারীদের চোখের স্বস্তি ও স্বাস্থ্যগত সুবিধার জন্য অ্যাক্সেসিবিলিটি মিডিয়া কুয়েরি ব্যবহার করা অপরিহার্য। "@media (prefers-reduced-motion: reduce)" ব্যবহার করে অ্যাপ্লিকেশনগুলোতে তীব্র গতির বদলে স্থির চিত্র অথবা মৃদু ফেইড এফেক্ট প্রদর্শন করা উচিত।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Animate transform and opacity for 60fps: Composited properties run on the GPU without triggering expensive layout repaints.',
          bn: '৬০ ফ্রেমের জন্য transform ও opacity ব্যবহার করুন: কম্পোজিটেড প্রপার্টি জিপিইউতে চলে এবং কোনো লেআউট রিফ্লো তৈরি করে না।'
        },
        {
          en: 'Use stroke-dashoffset for line self-drawing: Measure length with getTotalLength() and animate dashoffset from total length down to 0.',
          bn: 'লাইন ড্রয়িংয়ে stroke-dashoffset ব্যবহার করুন: getTotalLength() দিয়ে দৈর্ঘ্য মেপে dashoffset মোট মান থেকে ০-তে নামান।'
        },
        {
          en: 'Use SMIL for isolated <img> file animations: SMIL declarative tags (<animate>) run inside sealed image contexts without JavaScript.',
          bn: 'বিচ্ছিন্ন <img> ফাইলে SMIL ব্যবহার করুন: এটি কোনো জাভাস্ক্রিপ্ট ছাড়াই ছবির ভেতরে স্বাধীনভাবে অ্যানিমেশন চালায়।'
        },
        {
          en: 'Always support prefers-reduced-motion: Disable sweeping rotations and fast oscillations for users requesting reduced motion.',
          bn: 'সর্বদা prefers-reduced-motion সমর্থন করুন: সংবেদনশীল ব্যবহারকারীদের জন্য তীব্র গতিশীল অ্যানিমেশন বন্ধ রাখুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-glass-that-rings',
    tech: 'svg',
    title: {
      en: 'Interactive SVG — DOM Scripting, Events, and Matrix Transforms',
      bn: 'ইন্টারেক্টিভ এসভিজি: ডম স্ক্রিপ্টিং, ইভেন্ট ও ম্যাট্রিক্স রূপান্তর'
    }
  },
  exercises: [
    {
      id: 'ml-ex1',
      kind: 'mcq',
      topic: 'stroke-dashoffset-line-drawing-formula',
      question: {
        en: 'To make an SVG line with a length of 200 pixels draw itself smoothly using CSS, what should the initial stroke-dasharray and stroke-dashoffset values be?',
        bn: '২০০ পিক্সেল দৈর্ঘ্যের একটি এসভিজি লাইন সিএসএস দিয়ে নিজে নিজে আঁকা দেখাতে শুরুর stroke-dasharray এবং stroke-dashoffset মান কত হওয়া উচিত?'
      },
      options: [
        {
          en: 'stroke-dasharray: 200; stroke-dashoffset: 200; (then animate stroke-dashoffset to 0)',
          bn: 'stroke-dasharray: ২০০; stroke-dashoffset: ২০০; (তারপর stroke-dashoffset কমিয়ে ০-তে নামাতে হবে)'
        },
        {
          en: 'stroke-dasharray: 0; stroke-dashoffset: 2000;',
          bn: 'stroke-dasharray: ০; stroke-dashoffset: ২০০০;'
        },
        {
          en: 'stroke-dasharray: none; stroke-dashoffset: auto;',
          bn: 'stroke-dasharray: none; stroke-dashoffset: auto;'
        },
        {
          en: 'Because stroke-dasharray was banned in HTML5 standards in 2021',
          bn: 'কারণ ২০২১ সালে HTML5 স্ট্যান্ডার্ডে stroke-dasharray নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'dasharray = length (200), initial dashoffset = length (200). Animate offset to 0.',
        bn: 'dasharray = দৈর্ঘ্য (২০০), শুরুর dashoffset = দৈর্ঘ্য (২০০)। তারপর ০-তে অ্যানিমেট করুন।'
      },
      explanation: {
        en: 'Setting dasharray and initial dashoffset equal to the path length conceals the stroke completely; reducing offset to 0 draws it into view.',
        bn: 'উভয় মান পাথের সমান রাখলে রেখাটি পুরোপুরি আড়ালে থাকে এবং অফসেট ০ করলে তা সুন্দরভাবে ফুটে ওঠে।'
      }
    },
    {
      id: 'ml-ex2',
      kind: 'mcq',
      topic: 'smil-stand-alone-image-advantage',
      question: {
        en: 'Why is SMIL (<animate>) useful for animated SVG logos embedded via <img src="logo.svg">?',
        bn: '<img src="logo.svg">-এর মাধ্যমে যুক্ত করা অ্যানিমেটেড লোগোর জন্য SMIL (<animate>) কেন অত্যন্ত উপযোগী?'
      },
      options: [
        {
          en: 'SMIL runs declaratively inside the SVG XML document itself without requiring external JavaScript, allowing animations to execute even inside the sandboxed <img> environment',
          bn: 'SMIL কোনো বাহ্যিক জাভাস্ক্রিপ্ট ছাড়াই সরাসরি এসভিজি এক্সএমএল ফাইলের ভেতর চলে, ফলে স্যান্ডবক্সড <img> ট্যাগেও এটি নির্বিঘ্নে অ্যানিমেশন চালাতে পারে'
        },
        {
          en: 'SMIL reduces the file size of SVG images to zero bytes',
          bn: 'SMIL এসভিজি ছবির ফাইলের আকার শূন্য বাইটে নামিয়ে আনে'
        },
        {
          en: 'Because SMIL was created by international telecommunications laws in 2020',
          bn: 'কারণ ২০২০ সালে আন্তর্জাতিক টেলিযোগাযোগ আইনে SMIL তৈরি হয়েছিল'
        },
        {
          en: 'SMIL converts SVG vectors into high-definition audio files',
          bn: 'SMIL এসভিজি ভেক্টরকে অডিও ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: '<img> blocks external JS. SMIL is native XML animation that survives inside <img>.',
        bn: '<img> বাইরের স্ক্রিপ্ট ব্লক করে; SMIL নেটিভ এক্সএমএল হওয়ায় ছবির ভেতরেও কাজ করে।'
      },
      explanation: {
        en: 'SMIL animations are embedded directly into the document tree, operating self-sufficiently inside isolated image boundaries.',
        bn: 'SMIL ফাইলের ভেতরের নির্দেশনায় চলে, তাই বাইরের কোড ছাড়াই ছবির ভেতরে একা একা অ্যানিমেশন চালাতে পারে।'
      }
    },
    {
      id: 'ml-ex3',
      kind: 'mcq',
      topic: 'gpu-compositing-performance-svg',
      question: {
        en: 'Why does animating CSS "transform: scale()" perform significantly better than animating the SVG circle radius attribute "r"?',
        bn: 'এসভিজি বৃত্তের ব্যাসার্ধ অ্যাট্রিবিউট "r" অ্যানিমেট করার চেয়ে সিএসএস "transform: scale()" অ্যানিমেট করা কেন অনেক বেশি দ্রুতগতির?'
      },
      options: [
        {
          en: '"transform" runs directly on the GPU compositor thread without forcing CPU layout re-calculations, whereas changing "r" forces the browser to recalculate geometric layout and repaint pixels on every frame',
          bn: '"transform" সরাসরি জিপিইউ কম্পোজিটর থ্রেডে চলে এবং কোনো সিপিইউ লেআউট পরিবর্তন করে না; অন্যদিকে "r" পরিবর্তন করলে প্রতি ফ্রেমে জ্যামিতিক লেআউট পুনরায় হিসাব করে পিক্সেল আঁকতে হয়'
        },
        {
          en: 'Because scale() turns the computer monitor into an AMOLED display',
          bn: 'কারণ scale() মনিটরকে অ্যামোলেড ডিসপ্লেতে রূপান্তর করে'
        },
        {
          en: 'Radius r was declared illegal in the SVG2 specification',
          bn: 'কারণ SVG2 স্পেসিফিকেশনে r নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'To prevent computer memory from being erased',
          bn: 'কম্পিউটারের মেমরি যাতে মুছে না যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transform = GPU compositor. Geometric attributes (r, d, width) = CPU layout reflow.',
        bn: 'Transform সরাসরি জিপিইউতে চলে; আর জ্যামিতিক অ্যাট্রিবিউট সিপিইউতে রিফ্লো ঘটায়।'
      },
      explanation: {
        en: 'Composited properties bypass layout and paint pipelines, maintaining smooth 60fps performance even on low-powered mobile devices.',
        bn: 'কম্পোজিটেড প্রপার্টি লেআউট রিফ্লো এড়িয়ে সরাসরি জিপিইউতে চলে, ফলে ব্যাটারি বাঁচে এবং কোনো ল্যাগ হয় না।'
      }
    },
    {
      id: 'ml-ex4',
      kind: 'mcq',
      topic: 'prefers-reduced-motion-accessibility',
      question: {
        en: 'How should web applications handle SVG animations when the user enables "@media (prefers-reduced-motion: reduce)"?',
        bn: 'ব্যবহারকারী যখন "@media (prefers-reduced-motion: reduce)" সক্রিয় করেন, তখন এসভিজি অ্যানিমেশনের ক্ষেত্রে ওয়েব অ্যাপ্লিকেশনের কী করা উচিত?'
      },
      options: [
        {
          en: 'Disable looping transforms, rapid rotations, and sudden scaling motions, showing the completed static graphic or substituting gentle opacity fades instead',
          bn: 'অবিরাম ঘূর্ণন, তীব্র দোলন এবং দ্রুত স্কেলিং বন্ধ করে সমাপ্ত স্থির দৃশ্য প্রদর্শন করা অথবা হালকা অপাসিটি ফেইড ব্যবহার করা'
        },
        {
          en: 'Delete all graphics and display a black screen',
          bn: 'সমস্ত গ্রাফিক্স মুছে ফেলে একটি কালো পর্দা দেখানো'
        },
        {
          en: 'Increase the animation speed by 500 percent',
          bn: 'অ্যানিমেশনের গতি ৫০০ শতাংশ বাড়িয়ে দেওয়া'
        },
        {
          en: 'Format the client computer hard drive immediately',
          bn: 'ক্লায়েন্টের হার্ড ড্রাইভ সাথে সাথে ফরম্যাট করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Respect vestibular sensitivities by replacing rapid motion with static states or subtle fades.',
        bn: 'স্বাস্থ্যগত সুবিধার স্বার্থে দ্রুতগতির অ্যানিমেশনের বদলে স্থির ছবি বা হালকা ফেইড ব্যবহার করা।'
      },
      explanation: {
        en: 'Respecting reduced motion preferences prevents motion sickness and vestibular discomfort for sensitive users.',
        bn: 'এটি মোশন সিকনেস এবং মাথা ঘোরার মতো সমস্যা প্রতিরোধ করে সবার জন্য নিরাপদ ব্রাউজিং নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'moving-light-quiz',
    title: {
      en: 'SVG Animations, Performance, and Dashoffset Quiz',
      bn: 'এসভিজি অ্যানিমেশন, পারফরম্যান্স ও ড্যাশ-অফসেট কুইজ'
    },
    questions: [
      {
        id: 'mlq-q1',
        kind: 'mcq',
        topic: 'gettotallength-dom-measurement',
        question: {
          en: 'What does the JavaScript method "pathElement.getTotalLength()" return, and how is it used in SVG animations?',
          bn: 'জাভাস্ক্রিপ্ট মেথড "pathElement.getTotalLength()" কী ফেরত দেয় এবং এসভিজি অ্যানিমেশনে এটি কীভাবে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'It returns the exact perimeter length of the path in SVG user units, allowing developers to set precise stroke-dasharray and stroke-dashoffset values without guessing',
            bn: 'এটি এসভিজি ইউজার এককে পাথের মোট দৈর্ঘ্য নির্ভুলভাবে হিসাব করে দেয়, যার ফলে আন্দাজ না করেই নিখুঁত stroke-dasharray এবং dashoffset মান নির্ধারণ করা যায়'
          },
          {
            en: 'It returns the total number of lines in the JavaScript code file',
            bn: 'এটি জাভাস্ক্রিপ্ট ফাইলের মোট লাইনের সংখ্যা ফেরত দেয়'
          },
          {
            en: 'getTotalLength counts the number of visitors on the website',
            bn: 'এটি ওয়েবসাইটে মোট কতজন ভিজিটর এসেছে তা গুণে দেখে'
          },
          {
            en: 'Because getTotalLength was invented by international shipping lines in 2018',
            bn: 'কারণ ২০১৮ সালে শিপিং কোম্পানি এটি তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'getTotalLength computes exact vector contour length for dasharray sizing.',
          bn: 'getTotalLength পাথের আসল দৈর্ঘ্য মেপে দেয় যা ড্যাশ অ্যানিমেশনের জন্য দরকারি।'
        },
        explanation: {
          en: 'getTotalLength calculates the total length of the path geometry, enabling dynamic, resolution-independent line animations.',
          bn: 'এই মেথডটি পাথের সম্পূর্ণ দৈর্ঘ্য নিখুঁতভাবে পরিমাপ করে সঠিক অ্যানিমেশন টাইমলাইন গড়তে সাহায্য করে।'
        }
      },
      {
        id: 'mlq-q2',
        kind: 'mcq',
        topic: 'animatemotion-path-following',
        question: {
          en: 'What unique capability does the SMIL "<animateMotion>" element offer in SVG animation?',
          bn: 'এসভিজি অ্যানিমেশনে SMIL "<animateMotion>" উপাদানটি কোন অনন্য সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It guides a shape (like a paper airplane or rocket icon) along a complex curved <path> trajectory, optionally rotating the shape to automatically match the tangent of the curve',
            bn: 'এটি কোনো শেপকে (যেমন রকেট বা বিমান) একটি জটিল বক্ররেখা (<path>) বরাবর চালিয়ে নিয়ে যায় এবং বক্ররেখার বাঁকের সাথে মিলিয়ে শেপটিকে স্বয়ংক্রিয়ভাবে ঘুরিয়ে দেয়'
          },
          {
            en: 'It permanently records user microphone audio',
            bn: 'এটি মাইক্রোফোনের অডিও রেকর্ড করে রাখে'
          },
          {
            en: 'animateMotion turns computer screens off after 5 seconds',
            bn: 'এটি ৫ সেকেন্ড পর মনিটর বন্ধ করে দেয়'
          },
          {
            en: 'Because animateMotion was banned by the W3C in 2021',
            bn: 'কারণ ২০২১ সালে W3C এটি নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'animateMotion moves elements along any arbitrary curved path.',
          bn: 'animateMotion যেকোনো জটিল বক্ররেখা বরাবর অবজেক্টকে ছুটিয়ে নিয়ে যেতে পারে।'
        },
        explanation: {
          en: 'animateMotion provides parametric path-following animation with automatic tangent alignment (rotate="auto").',
          bn: 'এটি বক্ররেখার বাঁকের সাথে সামঞ্জস্য রেখে যেকোনো বস্তুকে নিখুঁতভাবে পথ দেখিয়ে এগিয়ে নেয়।'
        }
      },
      {
        id: 'mlq-q3',
        kind: 'mcq',
        topic: 'waapi-runtime-control-advantage',
        question: {
          en: 'What advantage does the Web Animations API (element.animate) provide over pure CSS keyframes when coordinating SVG animations?',
          bn: 'এসভিজি অ্যানিমেশন পরিচালনার ক্ষেত্রে সাধারণ সিএসএস কিফ্রেমের চেয়ে ওয়েব অ্যানিমেশনস এপিআই (element.animate) কোন বাড়তি সুবিধা দেয়?'
        },
        options: [
          {
            en: 'WAAPI returns an Animation object allowing script control: pausing, seeking (currentTime), reversing, adjusting playbackRate dynamically, and listening to the .finished Promise',
            bn: 'WAAPI একটি অ্যানিমেশন অবজেক্ট দেয় যা কোডের মাধ্যমে নিয়ন্ত্রণ করা যায়: পজ করা, নির্দিষ্ট সময়ে নেওয়া (currentTime), উল্টো চালানো, গতি বদলানো এবং .finished প্রমিজ শোনা'
          },
          {
            en: 'Because WAAPI reduces computer electricity bills by 80 percent',
            bn: 'কারণ WAAPI বিদ্যুৎ খরচ ৮০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'WAAPI was mandated by international copyright laws in 2020',
            bn: 'কারণ ২০২০ সালে কপিরাইট আইনে WAAPI বাধ্যতামূলক করা হয়েছিল'
          },
          {
            en: 'WAAPI deletes all browser cookies on playback end',
            bn: 'অ্যানিমেশন শেষ হলে WAAPI সমস্ত কুকিজ মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'WAAPI gives JavaScript play/pause/reverse controls over high-performance animations.',
          bn: 'WAAPI কোডের মাধ্যমে অ্যানিমেশন প্লে, পজ ও রিভার্স করার পূর্ণ নিয়ন্ত্রণ দেয়।'
        },
        explanation: {
          en: 'WAAPI bridges CSS performance with JavaScript control, making it ideal for interactive scrubbers and dynamic state-driven animations.',
          bn: 'WAAPI সিএসএসের পারফরম্যান্সের সাথে স্ক্রিপ্টের পূর্ণ নিয়ন্ত্রণ এনে দেয়।'
        }
      },
      {
        id: 'mlq-q4',
        kind: 'mcq',
        topic: 'pathlength-attribute-standardization',
        question: {
          en: 'How does setting pathLength="100" on an SVG <path> simplify line-drawing animations?',
          bn: 'এসভিজি <path>-এ pathLength="100" নির্ধারণ করলে তা লাইন ড্রয়িং অ্যানিমেশনকে কীভাবে অনেক সহজ করে তোলে?'
        },
        options: [
          {
            en: 'It overrides the physical unit length with a standardized virtual scale of 100 units, allowing developers to author stroke-dasharray and dashoffset in percentages without needing JavaScript to call getTotalLength()',
            bn: 'এটি পাথের আসল দৈর্ঘ্য যাই হোক না কেন তাকে ১০০ এককের একটি আদর্শ ভার্চুয়াল স্কেলে পরিণত করে, যার ফলে জাভাস্ক্রিপ্টে getTotalLength() না চালিয়েই সরাসরি শতাংশে ড্যাশঅফসেট অ্যানিমেট করা যায়'
          },
          {
            en: 'It forces the path to become 100 pixels wide',
            bn: 'এটি পথটিকে ১০০ পিক্সেল চওড়া হতে বাধ্য করে'
          },
          {
            en: 'pathLength was banned in the SVG 1.1 standard',
            bn: 'কারণ SVG 1.1 স্ট্যান্ডার্ডে pathLength নিষিদ্ধ ছিল'
          },
          {
            en: 'Because pathLength formats the user solid-state drive',
            bn: 'কারণ pathLength হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'pathLength="100" normalizes the calculation to 0-100%, avoiding runtime JS measurements.',
          bn: 'pathLength="100" দৈর্ঘ্যকে ০ থেকে ১০০ শতাংশে হিসাব করার সুবিধা দেয়, ফলে স্ক্রিপ্ট ছাড়াই কাজ হয়।'
        },
        explanation: {
          en: 'pathLength creates a normalized authoring scale, enabling pure CSS dashoffset animations without JavaScript measurement overhead.',
          bn: 'এটি পাথের দৈর্ঘ্যকে ১০০ এককে নরমালাইজ করে সিএসএস অ্যানিমেশনকে অনেক সহজ করে।'
        }
      }
    ]
  }
};
