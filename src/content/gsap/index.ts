import type { Hub } from '../../lib/types';
import { GsapBasicsAndTweensLesson } from './lessons/gsap-basics-and-tweens';
import { TimelinesAndOrchestrationLesson } from './lessons/timelines-and-orchestration';
import { ScrollTriggerAndParallaxLesson } from './lessons/scrolltrigger-and-parallax';
import { SvgAndMorphSvgLesson } from './lessons/svg-and-morphsvg';
import { FlipAndLayoutAnimationsLesson } from './lessons/flip-and-layout-animations';
import { PhysicsAndDraggablesLesson } from './lessons/physics-and-draggables';
import { LenisAndSmoothScrollLesson } from './lessons/lenis-and-smooth-scroll';
import { TheAwwwardsShowcaseCapstoneLesson } from './lessons/the-awwwards-showcase-capstone';

export const gsapHub: Hub = {
  slug: 'gsap',
  name: 'GSAP',
  icon: '⚡',
  tagline: {
    en: 'High-performance web animation, 60FPS/120FPS rendering, GSAP Timelines, ScrollTrigger, FLIP, physics, and Lenis smooth scrolling.',
    bn: 'উচ্চগতির ওয়েব অ্যানিমেশন, ৬০/১২০ এফপিএস রেন্ডারিং, GSAP টাইমলাইন, স্ক্রোল-ট্রিগার, FLIP, ফিজিক্স এবং লেনিস স্মুথ স্ক্রোলিং।'
  },
  intro: {
    en: 'GreenSock Animation Platform (GSAP) is the global gold standard for professional web motion, powering the vast majority of Awwwards and FWA Site of the Year winners. Built on a zero-drift requestAnimationFrame ticker, GSAP animates CSS, SVG, Canvas, and WebGL with sub-millisecond precision and bulletproof cross-browser consistency. This track takes you from fundamental tweens, easing curves, and timeline choreography to advanced ScrollTrigger pinning, FLIP layout morphs, touch and mouse inertia physics, Lenis smooth scrolling integration, and production agency-grade micro-interactions.',
    bn: 'গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম (GSAP) হলো পেশাদার ওয়েব মোশনের জন্য বিশ্বব্যাপী স্বীকৃত গোল্ড স্ট্যান্ডার্ড, যা আন্তর্জাতিক অ্যাওয়ার্ড-বিজয়ী সেরা ওয়েবসাইটগুলোর মূল চালিকাশক্তি। নিজস্ব রেন্ডার টিকারে চলে GSAP যেকোনো সিএসএস, এসভিজি, ক্যানভাস বা ওয়েবজিএল উপাদানকে অবিশ্বাস্য ক্ষিপ্রতায় অ্যানিমেট করে। এই ট্র্যাকে বেসিক টুইন, ইজিং কার্ভ এবং টাইমলাইন কোরিওগ্রাফি থেকে শুরু করে স্ক্রোল-ট্রিগার পিনিং, FLIP লেআউট রূপান্তর, বাস্তব স্পর্শ ও মাউস ফিজিক্স, লেনিস স্মুথ স্ক্রোলিং এবং আন্তর্জাতিক মানের মাইক্রো-ইন্টারঅ্যাকশনে পূর্ণাঙ্গ দক্ষতা নিশ্চিত করা হয়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Tweens, Timelines & Advanced Choreography',
        bn: 'ধাপ ১ — টুইনস, টাইমলাইনস ও আধুনিক কোরিওগ্রাফি'
      },
      items: [
        {
          en: 'GSAP Tweens: gsap.to, gsap.from, gsap.fromTo, hardware-composited transforms (x, y, scale), and mathematical easing curves',
          bn: 'GSAP টুইনস: gsap.to, gsap.from, gsap.fromTo, হার্ডওয়্যার ট্রান্সফর্ম (x, y, scale) এবং গাণিতিক ইজিং কার্ভ'
        },
        {
          en: 'GSAP Timelines: Sequences, unified playback controls (play, pause, reverse, seek, timeScale), and nesting modular child timelines',
          bn: 'GSAP টাইমলাইনস: সিকোয়েন্সিং, একক প্লেব্যাক নিয়ন্ত্রণ (play, pause, reverse, seek, timeScale) এবং নেস্টেড টাইমলাইন'
        },
        {
          en: 'The Position Parameter: Absolute timestamps, relative gaps (+=0.5), and concurrent relative overlaps (< and <0.5)',
          bn: 'পজিশন প্যারামিটার: নির্দিষ্ট সেকেন্ড, আপেক্ষিক বিরতি (+=0.5) এবং একযোগে ওভারল্যাপ (< ও <0.5)'
        },
        {
          en: 'Stagger animations: Cascading ripples across element lists with advanced distribution grids and easing curves',
          bn: 'স্ট্যাগার অ্যানিমেশন: একাধিক উপাদানে গ্রিড ভিত্তিক এবং কার্ভ ভিত্তিক ধারাবাহিক ঢেউয়ের মতো ইফেক্ট'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — ScrollTrigger, SVG Morphing & FLIP Layouts',
        bn: 'ধাপ ২ — স্ক্রোল-ট্রিগার, এসভিজি মর্ফিং ও FLIP লেআউট'
      },
      items: [
        {
          en: 'ScrollTrigger engine: start/end viewport thresholds, toggleActions, scrubbed timelines, and dynamic pinning with pinSpacing',
          bn: 'স্ক্রোল-ট্রিগার ইঞ্জিন: ভিউপোর্ট সীমানা, toggleActions, স্ক্রাব করা টাইমলাইন এবং পিনিং স্পেসিং'
        },
        {
          en: 'Parallax dynamics: Calculating differential scroll speeds using responsive yPercent scaling across multi-layer viewports',
          bn: 'প্যারালাক্স ডাইনামিক্স: রেসপনসিভ yPercent স্কেলিং দিয়ে বিভিন্ন লেয়ারে ভিন্ন গতির প্যারালাক্স তৈরি'
        },
        {
          en: 'SVG Vector Motion: Stroke reveals via DrawSVGPlugin and seamless organic path transitions via MorphSVGPlugin',
          bn: 'এসভিজি ভেক্টর মোশন: DrawSVG দিয়ে রেখা অঙ্কন এবং MorphSVG দিয়ে যেকোনো দুটি ভিন্ন আকৃতির মসৃণ রূপান্তর'
        },
        {
          en: 'FLIP transitions: First, Last, Invert, Play architecture for 60FPS CSS grid filtering, sorting, and shared card modals',
          bn: 'FLIP ট্রানজিশন: First, Last, Invert, Play কৌশল দিয়ে ৬০ এফপিএসে গ্রিড ফিল্টারিং ও কার্ড রূপান্তর'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Physics, Lenis Smooth Scroll & Awwwards Capstone',
        bn: 'ধাপ ৩ — ফিজিক্স, লেনিস স্মুথ স্ক্রোল ও অ্যাওয়ার্ডস ক্যাপস্টোন'
      },
      items: [
        {
          en: 'Tactile interaction: Draggable and InertiaPlugin physics with velocity tracking, friction decay, bounds, and snap arrays',
          bn: 'বাস্তবসম্মত ইন্টারঅ্যাকশন: ড্র্যাগেবল ও ইনার্শিয়া ফিজিক্স, গতিবেগ ট্র্যাকিং, ঘর্ষণ এবং গ্রিড স্ন্যাপ'
        },
        {
          en: 'Lenis integration: Zero-lag smooth scrolling synchronized with the GSAP ticker and ScrollTrigger.update',
          bn: 'লেনিস ইন্টিগ্রেশন: GSAP টিকারে লেনিস যুক্ত করে শূন্য-ল্যাগে স্ক্রোল-ট্রিগার ও পিনিং সমন্বয়'
        },
        {
          en: 'High-frequency performance: Zero-allocation cursor tracking and magnetic button physics via gsap.quickTo',
          bn: 'উচ্চগতির পারফরম্যান্স: মেমোরি ল্যাগ ছাড়া gsap.quickTo দিয়ে মাউস ট্র্যাকিং ও ম্যাগনেটিক বোতাম তৈরি'
        },
        {
          en: 'Production deployment: Clean framework teardown via gsap.context() and accessibility compliance with prefers-reduced-motion',
          bn: 'প্রোডাকশন ডিপ্লয়মেন্ট: gsap.context() দিয়ে এক লাইনে মেমোরি মুক্ত করা এবং অ্যাক্সেসিবিলিটি নিশ্চিতকরণ'
        }
      ]
    }
  ],
  projects: [
    {
      title: {
        en: 'Interactive Agency Portfolio with Pinned Horizontal Gallery',
        bn: 'অনুভূমিক গ্যালারি পিনিং সমৃদ্ধ ডিজিটাল এজেন্সি পোর্টফোলিও'
      },
      desc: {
        en: 'Build an award-worthy showcase featuring split-text entrance reveals, pinned horizontal project carousel, scrubbed parallax imagery, and clip-path curtain transitions.',
        bn: 'স্প্লিট-টেক্সট ইন্ট্রো, স্ক্রিনে আটকে থাকা অনুভূমিক প্রজেক্ট ক্যারোসেল, প্যারালাক্স ছবি এবং ক্লিপ-পাথ কার্টেইন ট্রানজিশন সমৃদ্ধ একটি আন্তর্জাতিক মানের পোর্টফোলিও তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Tactile E-Commerce Product Filter with FLIP & MorphSVG',
        bn: 'FLIP ও MorphSVG সমৃদ্ধ স্পর্শযোগ্য ই-কমার্স প্রোডাক্ট ফিল্টার'
      },
      desc: {
        en: 'Architect an ultra-fast product catalog featuring 60FPS FLIP grid filtering, card-to-modal shared element transitions, and animated SVG cart micro-interactions.',
        bn: '৬০ এফপিএস FLIP গ্রিড ফিল্টারিং, কার্ড থেকে মডালে মসৃণ রূপান্তর এবং অ্যানিমেটেড এসভিজি কার্ট আইকন সমৃদ্ধ একটি দ্রুতগতির প্রোডাক্ট ক্যাটালগ তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Velvet Smooth Scrolling Editorial Site with Lenis & Magnetic Physics',
        bn: 'লেনিস ও ম্যাগনেটিক ফিজিক্স সমৃদ্ধ রাজকীয় স্মুথ স্ক্রোলিং ওয়েবসাইট'
      },
      desc: {
        en: 'Engineer a luxury editorial layout powered by Lenis smooth scrolling, GSAP ticker synchronization, magnetic cursor followers via gsap.quickTo, and scroll-linked typography scales.',
        bn: 'লেনিস স্মুথ স্ক্রোল, GSAP রেন্ডার টিকার সিঙ্ক, gsap.quickTo চালিত ম্যাগনেটিক মাউস ট্র্যাকার এবং স্ক্রোল-চালিত টাইপোগ্রাফি স্কেলিং সমৃদ্ধ একটি বিলাসবহুল ওয়েবসাইট নির্মাণ করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always animate transform properties (x, y, scale, rotation) rather than layout properties (top, left, width) to stay on the GPU compositor.',
      bn: 'সিপিইউ রিফ্লো এড়িয়ে জিপিউ কম্পোজিটরে কাজ রাখতে top বা left এর বদলে সর্বদা ট্রান্সফর্ম প্রপার্টি (x, y, scale, rotation) অ্যানিমেট করুন।'
    },
    {
      en: 'Wrap animation setup code inside gsap.context() in component frameworks (React, Vue, Next.js) for clean one-line teardown via ctx.revert().',
      bn: 'রিয়েক্ট বা নেক্সট.জেএস-এ মেমোরি লিক ও ডবল রেন্ডার সমস্যা এড়াতে gsap.context() ব্যবহার করে আনমাউন্টে ctx.revert() নিশ্চিত করুন।'
    },
    {
      en: 'Use gsap.quickTo instead of creating new gsap.to tweens inside high-frequency pointer and mousemove event handlers to eliminate GC stutter.',
      bn: 'মাউসমুভ ইভেন্টে বারবার gsap.to না বানিয়ে gsap.quickTo ব্যবহার করুন যাতে কোনো মেমোরি ল্যাগ ছাড়া ১২০ এফপিএস গতি পাওয়া যায়।'
    },
    {
      en: 'Drive smooth scroll libraries like Lenis directly within gsap.ticker.add and set lagSmoothing(0) to eliminate ScrollTrigger pinning jitters.',
      bn: 'স্ক্রোল-ট্রিগার পিনিংয়ের কাঁপুনি পুরোপুরি বন্ধ করতে GSAP টিকারে লেনিসকে যুক্ত করে lagSmoothing(0) কনফিগার করুন।'
    },
    {
      en: 'Use yPercent instead of fixed pixel coordinates for parallax scroll effects to ensure depth scales proportionally on mobile and desktop.',
      bn: 'প্যারালাক্স স্ক্রোলে নির্দিষ্ট পিক্সেলের বদলে yPercent ব্যবহার করুন যাতে ছোট মোবাইল থেকে বড় ৪কে স্ক্রিন পর্যন্ত গভীরতা নিখুঁত থাকে।'
    },
    {
      en: 'Respect users accessibility preferences by checking prefers-reduced-motion and gracefully downgrading heavy motion into simple opacity crossfades.',
      bn: 'মোশন সেন্সিটিভিটি থাকা ব্যবহারকারীদের সুবিধার্থে prefers-reduced-motion চেক করে দ্রুতগতির প্যারালাক্সের বদলে সাধারণ ফেড ইফেক্ট দিন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'Why does animating CSS transforms (x, y) drastically outperform animating CSS top and left properties in browser rendering?',
        bn: 'ব্রাউজার রেন্ডারিংয়ে সিএসএস top ও left অ্যানিমেট করার চেয়ে ট্রান্সফর্ম (x, y) কেন বহুগুণ বেশি কার্যকর ও দ্রুতগতি সম্পন্ন?'
      },
      a: {
        en: 'Animating top or left triggers the browsers expensive CPU Layout phase (reflow) on every frame, forcing geometric recalculation of surrounding DOM elements. Transforms bypass both the Layout and Paint phases entirely; the browser uploads the element texture to the GPU and manipulates the 4x4 transform matrix on a dedicated compositor layer at native display refresh rates.',
        bn: 'top বা left পরিবর্তন করলে ব্রাউজারকে প্রতি ফ্রেমে পুরো পেজের মাপ নতুন করে হিসাব করতে হয় (লেআউট রিফ্লো)। অন্যদিকে ট্রান্সফর্ম লেআউট ও পেইন্ট ধাপ সম্পূর্ণ এড়িয়ে চলে; ব্রাউজার উপাদানটিকে জিপিউতে তুলে দেয় এবং হার্ডওয়্যার কম্পোজিটর লেয়ারে ম্যাট্রিক্স পরিবর্তন করে নিখুঁত ৬০ বা ১২০ এফপিএস গতি দেয়।'
      }
    },
    {
      q: {
        en: 'What is the Position Parameter in a GSAP Timeline and how does relative overlap syntax ("<" and "<0.5") work?',
        bn: 'GSAP টাইমলাইনে পজিশন প্যারামিটার কী এবং আপেক্ষিক ওভারল্যাপ সিনট্যাক্স ("<" এবং "<০.৫") কীভাবে কাজ করে?'
      },
      a: {
        en: 'The position parameter dictates exactly where a tween inserts along the timeline chronological track. Omitting it appends to the end. The string "<" anchors the start time to the exact moment the previous tween began, while "<0.5" begins 0.5 seconds after the previous tween started. This eliminates manual delay recalculations when durations change.',
        bn: 'পজিশন প্যারামিটার নির্ধারণ করে কোনো অ্যানিমেশন টাইমলাইনের কোন মুহূর্তে শুরু হবে। কিছু না দিলে আগেরটির শেষে বসে। "<" দিলে আগের অ্যানিমেশন শুরু হওয়ার সাথে সাথে শুরু হয়, আর "<০.৫" দিলে আগেরটি শুরুর ০.৫ সেকেন্ড পর চলতে শুরু করে। ফলে কোনো একটির সময় পাল্টালেও পেছনের পুরো ছন্দ ঠিক থাকে।'
      }
    },
    {
      q: {
        en: 'Explain how the FLIP animation technique functions and why it allows smooth transitions for CSS Grid and Flexbox mutations?',
        bn: 'FLIP অ্যানিমেশন কৌশল কীভাবে কাজ করে এবং কেন এটি সিএসএস গ্রিড ও ফ্লেক্সবক্সের জটিল পরিবর্তনকে মসৃণভাবে রূপান্তর করতে পারে?'
      },
      a: {
        en: 'FLIP stands for First, Last, Invert, Play. It records initial element positions (First), executes the structural layout mutation immediately (Last), calculates the position delta (Invert = First - Last) and applies transform offsets so the element visually sits in its original spot, and finally animates the transform back to zero on the GPU (Play). Because the layout change happens in a single tick and the transition runs on transforms, CSS grid columns and flex structures animate flawlessly.',
        bn: 'FLIP এর অর্থ First, Last, Invert, Play। এটি শুরুর অবস্থান রেকর্ড করে, নিমেষে গ্রিড বা ফ্লেক্সবক্স পরিবর্তন করে, দূরত্বের ব্যবধান মেপে বিপরীত ট্রান্সফর্ম দেয় যাতে উপাদানটি আগের স্থানেই আছে মনে হয় এবং জিপিউ দিয়ে সেই ট্রান্সফর্ম মান শূন্যে নামিয়ে আনে। পুরো রূপান্তরটি ট্রান্সফর্মে চলায় গ্রিডের যেকোনো পরিবর্তন মাখনের মতো মসৃণ দেখায়।'
      }
    },
    {
      q: {
        en: 'Why is gsap.quickTo preferred over standard gsap.to inside high-frequency mousemove event listeners?',
        bn: 'মাউসমুভের মতো ঘন ঘন ঘটা ইভেন্টে সাধারণ gsap.to-এর চেয়ে gsap.quickTo কেন বেশি পছন্দের?'
      },
      a: {
        en: 'Calling gsap.to() inside mousemove instantiates hundreds of new Tween objects per second, parses configuration dictionaries, and tests overwrite rules, causing severe Garbage Collection spikes and dropped frames. gsap.quickTo creates a permanent pre-compiled interpolation pipeline once, allowing coordinate updates to pipe directly into the running ticker with zero memory allocations.',
        bn: 'mousemove-এ বারবার gsap.to চালালে সেকেন্ডে শত শত নতুন অবজেক্ট তৈরি হয়ে মেমোরি ল্যাগ ও ফ্রেম ড্রপ ঘটায়। gsap.quickTo একবারেই একটি স্থায়ী ও দ্রুতগতির পাইপলাইন তৈরি করে, যার ফলে কোনো নতুন মেমোরি খরচ ছাড়াই বিদ্যুৎ গতিতে মাউস অনুসরণ করা সম্ভব হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Apple Product Experiences: Apple extensively leverages GSAP and custom transform pipelines to drive scrubbed scroll storytelling across hardware showcases.',
      bn: 'অ্যাপল প্রোডাক্ট পেজ: অ্যাপল তাদের নতুন আইফোন ও হার্ডওয়্যার পেজে সিনেমাটিক স্ক্রোলিং ও পণ্য প্রদর্শনের জন্য GSAP ব্যবহার করে।'
    },
    {
      en: 'Awwwards Site of the Year Winners: Over 85% of winning creative studios rely on GSAP, ScrollTrigger, and Lenis for silky smooth 120FPS digital experiences.',
      bn: 'আন্তর্জাতিক অ্যাওয়ার্ড-বিজয়ী সেরা সাইট: বিশ্বের শীর্ষস্থানীয় ৮৫%-এর বেশি সৃজনশীল এজেন্সি ১২০ এফপিএসের অসাধারণ অভিজ্ঞতার জন্য GSAP ও লেনিস ব্যবহার করে।'
    },
    {
      en: 'Nike React Running Campaign: Nike deployed GSAP FLIP and MorphSVG transitions to dynamically deform 3D shoe sole vector silhouettes during user customization.',
      bn: 'নাইকি রানিং ক্যাম্পেইন: নাইকি তাদের জুতো কনফিগারেশন ওয়েবসাইটে সোল ও লেসের ভেক্টর রূপান্তরের জন্য GSAP FLIP ও MorphSVG ব্যবহার করেছে।'
    },
    {
      en: 'Gucci Interactive Lookbook: Gucci orchestrates luxurious full-viewport horizontal pinned collections using ScrollTrigger and InertiaPlugin physics.',
      bn: 'গুচির ডিজিটাল লুকবুক: গুচি তাদের ফ্যাশন কালেকশনে স্ক্রোল-ট্রিগার পিনিং ও ইনার্শিয়া ফিজিক্সের মাধ্যমে রাজকীয় অনুভূমিক গ্যালারি পরিচালনা করে।'
    }
  ],
  lessons: [
    GsapBasicsAndTweensLesson,
    TimelinesAndOrchestrationLesson,
    ScrollTriggerAndParallaxLesson,
    SvgAndMorphSvgLesson,
    FlipAndLayoutAnimationsLesson,
    PhysicsAndDraggablesLesson,
    LenisAndSmoothScrollLesson,
    TheAwwwardsShowcaseCapstoneLesson
  ]
};
