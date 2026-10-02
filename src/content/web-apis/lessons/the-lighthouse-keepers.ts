import type { Lesson } from '../../../lib/types';

export const lighthouseKeepersLesson: Lesson = {
  slug: 'the-lighthouse-keepers',
  tech: 'web-apis',
  title: {
    en: 'Observer APIs — IntersectionObserver, ResizeObserver, and MutationObserver',
    bn: 'অবজারভার এপিআই: ইন্টারসেকশনঅবজারভার, রিসাইজঅবজারভার ও মিউটেশনঅবজারভার'
  },
  summary: {
    en: 'Traditional DOM polling and scroll event listeners cause severe layout thrashing by forcing synchronous reflows on the main browser thread. In this lesson, you will master the modern Observer API family: `IntersectionObserver`, `ResizeObserver`, and `MutationObserver`. Learn how `IntersectionObserver` powers high-performance image lazy loading, infinite scrolling sentinels, and viewability tracking using thresholds and `rootMargin`. Explore `ResizeObserver` for responsive component layouts and `MutationObserver` for watching dynamic DOM additions. Implement an executable IntersectionObserver viewport visibility tracker in TypeScript.',
    bn: 'প্রথাগত স্ক্রল ইভেন্ট লিসেনার এবং বারবার getBoundingClientRect() কল করার ফলে ব্রাউজারের মূল থ্রেডে মারাত্মক লেআউট থ্র্যাশিং ঘটে পেজ আটকে যায়। এই পাঠে আপনি ব্রাউজারের আধুনিক অবজারভার এপিআই পরিবার শিখবেন: `IntersectionObserver`, `ResizeObserver` এবং `MutationObserver`। কীভাবে `IntersectionObserver` কোনো লেআউট থ্র্যাশ ছাড়াই উচ্চগতির ইমেজ লেজি লোডিং, অসীম স্ক্রলিং এবং বিজ্ঞাপন ভিউ ট্র্যাকিং সম্পন্ন করে তা জানবেন। রেসপন্সিভ কম্পোনেন্টের জন্য `ResizeObserver` এবং ডম পরিবর্তন পর্যবেক্ষণে `MutationObserver`-এর ব্যবহার শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ইন্টারসেকশন অবজারভার সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'elimination-of-layout-thrashing',
      text: {
        en: 'The Elimination of Layout Thrashing: Why Observers Won',
        bn: 'লেআউট থ্র্যাশিং নির্মূল: কেন অবজারভার এপিআই সেরা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build responsive, interactive web interfaces, knowing when elements become visible or change dimensions is essential.',
        bn: 'রেসপন্সিভ এবং ইন্টারঅ্যাক্টিভ ওয়েব ইন্টারফেস তৈরি করার সময় কোনো উপাদান স্ক্রিনে দৃশ্যমান হয়েছে কি না বা তার আকার বদলেছে কি না তা জানা অত্যন্ত জরুরি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In legacy frontend code, developers implemented scroll-based effects by attaching event listeners to "window.addEventListener(\'scroll\', ...)". Inside that scroll handler, calling methods like "getBoundingClientRect()" or reading "offsetTop" forces the browser to synchronously recalculate the entire page layout at 60 frames per second. This phenomenon, known as Layout Thrashing, consumes the strict 16.6-millisecond frame budget and results in stuttering, dropped frames, and drained mobile batteries. The Observer API family eliminates this overhead by delegating tracking directly to the browser internal compositor. The browser monitors geometric boundaries asynchronously and batches visibility notifications into a single efficient callback during idle render cycles.',
        bn: 'আগে কোনো উপাদান দৃশ্যমান কি না তা দেখতে ডেভেলপাররা "window.addEventListener(\'scroll\', ...)" ব্যবহার করতেন। স্ক্রল হ্যান্ডলারের ভেতরে "getBoundingClientRect()" বা "offsetTop" কল করার ফলে ব্রাউজারকে বাধ্য হয়ে প্রতি সেকেন্ডে ৬০ বার পুরো পেজের লেআউট নতুন করে হিসাব করতে হতো। একে লেআউট থ্র্যাশিং (Layout Thrashing) বলা হয়, যা ব্রাউজারের ১৬.৬ মিলিসেকেন্ডের ফ্রেম বাজেট নষ্ট করে স্ক্রিন কাঁপানো (জ্যাঙ্ক) এবং মোবাইলের ব্যাটারি অপচয় ঘটায়। অবজারভার এপিআই পরিবার এই সমস্যা পুরোপুরি দূর করে পর্যবেক্ষণ করার দায়িত্ব সরাসরি ব্রাউজারের নিজস্ব কম্পোজিটর ইঞ্জিনে সঁপে দেয়। ব্রাউজার নিজে থেকে অ্যাসিঙ্ক্রোনাসভাবে লক্ষ্য রাখে এবং পেজ রেন্ডারের সময় একটি একক দক্ষ কলব্যাকের মাধ্যমে আপডেট জানায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'intersection-observer',
          def: {
            en: 'An asynchronous browser interface monitoring the visibility and intersection ratio of a target element relative to an ancestor container or viewport.',
            bn: 'একটি অ্যাসিঙ্ক্রোনাস ব্রাউজার এপিআই যা স্ক্রিনের ভিউপোর্ট বা কোনো কন্টেইনারে কোনো উপাদানের প্রবেশ বা প্রস্থান পর্যবেক্ষণ করে।'
          }
        },
        {
          term: 'root-margin',
          def: {
            en: 'A virtual bounding box offset around the intersection root allowing code to pre-load images (e.g. 200px before appearing on screen).',
            bn: 'ভিউোর্টের চারপাশে একটি অদৃশ্য ভার্চুয়াল মার্জিন (যেমন ২০০ পিক্সেল) যা কোনো ছবি স্ক্রিনে দৃশ্যমান হওয়ার আগেই তা প্রি-লোড করার সুযোগ দেয়।'
          }
        },
        {
          term: 'resize-observer',
          def: {
            en: 'An interface reporting dimension changes to the content or border-box of specific DOM elements without window resize polling.',
            bn: 'নির্দিষ্ট কোনো এইচটিএমএল উপাদানের দৈর্ঘ্য বা প্রস্থ পরিবর্তনের খবর তাৎক্ষণিকভাবে প্রদানকারী অবজারভার ইন্টারফেস।'
          }
        },
        {
          term: 'mutation-observer',
          def: {
            en: 'A built-in utility watching for DOM tree alterations, including added child nodes, deleted elements, and modified attributes.',
            bn: 'ডম ট্রির পরিবর্তন যেমন নতুন নোড যোগ হওয়া, মুছে যাওয়া বা অ্যাট্রিবিউট পরিবর্তনের ওপর নজর রাখার একটি নেটিভ ব্রাউজার অবজারভার।'
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
      id: 'observer-family-comparison-table',
      text: {
        en: 'Comparative Architecture: The Three Core Browser Observers',
        bn: 'তিনটি প্রধান ব্রাউজার অবজারভারের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Each observer in the family is specialized for a distinct category of visual or structural DOM transitions.',
        bn: 'অবজারভার পরিবারের প্রতিটি সদস্য ডমের নির্দিষ্ট ধরনের দৃশ্যমান বা কাঠামোগত পরিবর্তনের জন্য বিশেষভাবে অপ্টিমাইজ করা।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Observer Interface', bn: 'অবজারভার ইন্টারফেস' },
        { en: 'Triggering DOM Event', bn: 'কার্যকর হওয়ার কারণ' },
        { en: 'Primary Architectural Use Case', bn: 'প্রধান ব্যবহারের ক্ষেত্র' },
        { en: 'Key Configuration Properties', bn: 'মূল কনফিগারেশন প্রপার্টি' }
      ],
      rows: [
        [
          { en: 'IntersectionObserver', bn: 'IntersectionObserver' },
          { en: 'Target element enters or leaves the viewport or scrollable parent', bn: 'কোনো উপাদান স্ক্রিনে প্রবেশ করলে বা স্ক্রিন থেকে বের হয়ে গেলে' },
          { en: 'Lazy loading images, infinite scrolling sentinels, ad impression billing', bn: 'ইমেজ লেজি লোডিং, অসীম স্ক্রলিং সেন্টিনেল ও বিজ্ঞাপন ভিউ ট্র্যাকিং' },
          { en: 'threshold (e.g. [0, 0.5, 1.0]), rootMargin (e.g. "200px")', bn: 'threshold (যেমন [০, ০.৫, ১.০]), rootMargin (যেমন "২০০px")' }
        ],
        [
          { en: 'ResizeObserver', bn: 'ResizeObserver' },
          { en: 'Target element content-box or border-box changes dimensions', bn: 'নির্দিষ্ট কোনো উপাদানের আকার (দৈর্ঘ্য বা প্রস্থ) পরিবর্তিত হলে' },
          { en: 'Responsive charts, container query layouts, virtual list resizing', bn: 'রেসপন্সিভ ডেটা চার্ট, কম্পোনেন্ট কন্টেইনার কোয়েরি ও ভার্চুয়াল তালিকা' },
          { en: 'box: "content-box" | "border-box" | "device-pixel-content-box"', bn: 'box: "content-box" | "border-box"' }
        ],
        [
          { en: 'MutationObserver', bn: 'MutationObserver' },
          { en: 'DOM nodes are inserted, removed, or attributes/text are modified', bn: 'ডম ট্রিতে নতুন নোড যুক্ত হলে, মুছে গেলে বা অ্যাট্রিবিউট বদলালে' },
          { en: 'Third-party chat widgets, rich text editors, dynamic form validation', bn: 'থার্ড-পার্টি উইজেট ট্র্যাকিং, রিচ টেক্সট এডিটর ও ডাইনামিক ফর্ম ভ্যালিডেশন' },
          { en: 'childList: true, attributes: true, subtree: true, characterData: true', bn: 'childList: true, attributes: true, subtree: true' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-intersection-simulation-code',
      text: {
        en: 'Executable Intersection Observer Visibility Simulation',
        bn: 'ইন্টারসেকশন অবজারভার সিমুলেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates viewport visibility and pre-fetching for 4 target images across an 800-pixel viewport with a 200-pixel rootMargin threshold.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৮০০ পিক্সেল উচ্চতার একটি স্ক্রিনে ২০০ পিক্সেল rootMargin মার্জিন ধরে ৪টি ছবির দৃশ্যমানতা ও প্রি-ফেচিং সফলভাবে গণনা করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of High-Performance IntersectionObserver Boundary Calculation

interface ImageTarget {
  id: string;
  topOffsetPixels: number;
  heightPixels: number;
}

interface IntersectionResult {
  id: string;
  isIntersecting: boolean;
  shouldPreload: boolean;
}

interface ObserverReport {
  totalImages: number;
  loadedCount: number;
  deferredCount: number;
  preloadedImageIds: string[];
}

function evaluateViewportIntersections(
  images: ImageTarget[],
  viewportHeight: number = 800,
  rootMarginPixels: number = 200
): ObserverReport {
  // Effective trigger horizon: viewport height plus lookahead rootMargin
  const triggerBoundary = viewportHeight + rootMarginPixels;

  const results: IntersectionResult[] = images.map((img) => {
    const isIntersecting = img.topOffsetPixels <= triggerBoundary;
    return {
      id: img.id,
      isIntersecting,
      shouldPreload: isIntersecting
    };
  });

  const preloaded = results.filter((r) => r.shouldPreload);

  return {
    totalImages: images.length,
    loadedCount: preloaded.length,
    deferredCount: images.length - preloaded.length,
    preloadedImageIds: preloaded.map((r) => r.id)
  };
}

const pageImages: ImageTarget[] = [
  { id: 'hero-banner', topOffsetPixels: 100, heightPixels: 400 },
  { id: 'product-1', topOffsetPixels: 600, heightPixels: 300 },
  { id: 'product-2', topOffsetPixels: 950, heightPixels: 300 }, // Within 800 + 200 = 1000px!
  { id: 'footer-gallery', topOffsetPixels: 2200, heightPixels: 500 } // Deep offscreen
];

const report = evaluateViewportIntersections(pageImages);

console.log('Total images tracked on page:', report.totalImages);
console.log('Images within visible trigger boundary:', report.loadedCount);
console.log('Deferred images waiting offscreen:', report.deferredCount);
console.log('Pre-loaded image IDs:', report.preloadedImageIds.join(', '));

// prints: Total images tracked on page: 4
// prints: Images within visible trigger boundary: 3
// prints: Deferred images waiting offscreen: 1
// prints: Pre-loaded image IDs: hero-banner, product-1, product-2`
    },
    {
      type: 'heading',
      id: 'cleanup-lifecycle-and-unobserve',
      text: {
        en: 'Lifecycle Management: Unobserve and Disconnect Protocols',
        bn: 'জীবনচক্র পরিচালনা: আনঅবজার্ভ ও ডিসকানেক্টের নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A dangerous leak in modern Single Page Applications (React, Vue, Svelte) occurs when components create Observers without cleaning them up when the component unmounts. The browser engine retains references to the observed DOM elements, preventing garbage collection and triggering ghost callback executions. Defensive architecture follows two strict rules: once an image has loaded, call "observer.unobserve(imageElement)" immediately to detach the single element; and when a page or parent container unmounts, call "observer.disconnect()" to terminate the entire observer instance.',
        bn: 'আধুনিক সিঙ্গেল পেজ অ্যাপ্লিকেশনে (React, Vue, Svelte) একটি মারাত্মক মেমরি লিক ঘটে যখন কোনো কম্পোনেন্ট স্ক্রিন থেকে মুছে যাওয়ার সময় তার অবজারভারগুলো বন্ধ করা হয় না। এর ফলে ব্রাউজার মেমরিতে ওই এইচটিএমএল উপাদানগুলোর রেফারেন্স আটকে রাখে, মেমরি খালি হতে দেয় না এবং অদৃশ্য কলব্যাক চালিয়ে সিপিইউ নষ্ট করে। সুরক্ষার দুটি মৌলিক নিয়ম রয়েছে: কোনো ছবি লোড হয়ে গেলে সাথে সাথে "observer.unobserve(imageElement)" কল করে ওই নির্দিষ্ট ছবিটি পর্যবেক্ষণ বন্ধ করুন; এবং কম্পোনেন্ট আনমাউন্ট হলে "observer.disconnect()" কল করে পুরো অবজারভারটি বন্ধ করে দিন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Eliminate scroll polling: Replace window scroll listeners and getBoundingClientRect with asynchronous IntersectionObserver callbacks.',
          bn: 'স্ক্রল পোলিং বাদ দিন: উইন্ডো স্ক্রল হ্যান্ডলার এবং getBoundingClientRect-এর বদলে অ্যাসিঙ্ক্রোনাস IntersectionObserver ব্যবহার করুন।'
        },
        {
          en: 'Preload with rootMargin: Use rootMargin: "200px" to download images before they enter the user visible viewport for seamless scrolling.',
          bn: 'rootMargin দিয়ে আগে লোড করুন: ব্যবহারকারী স্ক্রল করে আসার আগেই মসৃণ অভিজ্ঞতার জন্য rootMargin: "২০০px" দিয়ে ছবি প্রি-লোড করুন।'
        },
        {
          en: 'ResizeObserver for containers: Track individual element width and height changes without brittle window resize listeners.',
          bn: 'কন্টেইনারের জন্য ResizeObserver: উইন্ডো রিসাইজের ওপর নির্ভর না করে সুনির্দিষ্ট উপাদানের আকার পরিবর্তনের ওপর নজর রাখুন।'
        },
        {
          en: 'Always clean up observers: Call unobserve() on single elements and disconnect() upon component unmount to prevent memory leaks.',
          bn: 'সবসময় অবজারভার বন্ধ করুন: মেমরি লিক প্রতিরোধ করতে কাজ শেষে unobserve() এবং কম্পোনেন্ট নষ্ট হলে disconnect() কল করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-tugboat-fleet',
    tech: 'web-apis',
    title: {
      en: 'Web Workers & Concurrency — Multithreading, postMessage, and Service Workers',
      bn: 'ওয়েব ওয়ার্কার্স ও কনকারেন্সি: মাল্টিথ্রেডিং ও সার্ভিস ওয়ার্কার্স'
    }
  },
  exercises: [
    {
      id: 'lk-ex1',
      kind: 'mcq',
      topic: 'layout-thrashing-scroll-listeners',
      question: {
        en: 'Why is attaching scroll event listeners that invoke getBoundingClientRect() considered harmful for web performance?',
        bn: 'getBoundingClientRect() কল করে স্ক্রল ইভেন্ট লিসেনার চালানো কেন ওয়েব পেজের গতির জন্য মারাত্মক ক্ষতিকর?'
      },
      options: [
        {
          en: 'It forces synchronous layout recalculations (Layout Thrashing) at 60Hz on the main UI thread, consuming the 16.6ms frame budget and causing visible stutter',
          bn: 'এটি মূল ইউআই থ্রেডে প্রতি সেকেন্ডে ৬০ বার জোরপূর্বক লেআউট রিফ্লো (Layout Thrashing) করায়, যা ১৬.৬ মিলিসেকেন্ডের ফ্রেম বাজেট নষ্ট করে পেজ কাঁপায়'
        },
        {
          en: 'Scroll listeners delete client browser bookmarks automatically',
          bn: 'স্ক্রল লিসেনার নিজে থেকেই ব্রাউজারের বুকমার্ক মুছে ফেলে'
        },
        {
          en: 'Because scroll events format the client solid-state drive',
          bn: 'কারণ স্ক্রল ইভেন্ট কম্পিউটারের হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'Scroll listeners were declared illegal by international treaties in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে স্ক্রল লিসেনার নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Forcing the browser to measure DOM elements during scrolling blows the 16.6ms per frame budget.',
        bn: 'স্ক্রলের সময় বারবার ডম মাপতে গেলে ব্রাউজার প্রতি ফ্রেমের ১৬.৬ মিলিসেকেন্ড সময় হারিয়ে ফেলে।'
      },
      explanation: {
        en: 'Layout thrashing forces the rendering engine to recalculate geometry synchronously on every scroll event; Observers eliminate this via compositor offloading.',
        bn: 'লেআউট থ্র্যাশিং ব্রাউজারকে বারবার জ্যামিতি হিসাব করতে বাধ্য করে; অবজারভার ব্রাউজারের নিজস্ব ইঞ্জিনের মাধ্যমে এই চাপ দূর করে।'
      }
    },
    {
      id: 'lk-ex2',
      kind: 'mcq',
      topic: 'rootmargin-lookahead-benefit',
      question: {
        en: 'In an image lazy-loading system using IntersectionObserver, what is the architectural advantage of configuring rootMargin: "300px"?',
        bn: 'IntersectionObserver দিয়ে ইমেজ লেজি লোডিং সিস্টেমে rootMargin: "300px" কনফিগার করার প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        {
          en: 'The browser begins fetching the image 300 pixels before it enters the visible screen, ensuring the image is already downloaded when the user scrolls to it',
          bn: 'ছবিটি স্ক্রিনে দৃশ্যমান হওয়ার ঠিক ৩০০ পিক্সেল আগেই ব্রাউজার তা ডাউনলোড করা শুরু করে, ফলে ব্যবহারকারী স্ক্রল করে আসার আগেই ছবি প্রস্তুত থাকে'
        },
        {
          en: 'It increases client monitor screen width by 300 pixels physically',
          bn: 'এটি মনিটরের স্ক্রিনের প্রস্থ ৩০০ পিক্সেল বাড়িয়ে দেয়'
        },
        {
          en: 'Because rootMargin compresses all images into single-pixel squares',
          bn: 'কারণ rootMargin সব ছবিকে এক পিক্সেলের বিন্দুতে রূপান্তর করে'
        },
        {
          en: 'rootMargin eliminates all internet connection fees for the website',
          bn: 'rootMargin ওয়েবসাইটের সমস্ত ইন্টারনেট ফি মওকুফ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lookahead buffer: download ahead of time so users never see blank white placeholders.',
        bn: 'আগেভাগেই ডাউনলোড করে রাখা যাতে ব্যবহারকারী ফাঁকা সাদা ফ্রেম না দেখতে পান।'
      },
      explanation: {
        en: 'rootMargin expands the intersection trigger perimeter, enabling lookahead prefetching for zero-latency user experiences.',
        bn: 'rootMargin ভার্চুয়াল সীমানা বাড়িয়ে দেয় যার ফলে ব্যবহারকারীর দেখার আগেই সম্পদটি সুন্দরভাবে লোড হয়ে যায়।'
      }
    },
    {
      id: 'lk-ex3',
      kind: 'mcq',
      topic: 'resize-observer-container-query-role',
      question: {
        en: 'Why is ResizeObserver preferred over the window "resize" event when building reusable responsive web components (such as a dashboard data chart)?',
        bn: 'রেসপনসিভ ওয়েব কম্পোনেন্ট (যেমন ড্যাশবোর্ডের চার্ট) তৈরির সময় window "resize" ইভেন্টের বদলে ResizeObserver কেন অনেক বেশি কার্যকর?'
      },
      options: [
        {
          en: 'ResizeObserver monitors the specific component container dimensions; the container might resize due to sidebar toggles or grid changes even when the browser window itself did not resize',
          bn: 'ResizeObserver নির্দিষ্ট উপাদানটির নিজস্ব কন্টেইনারের আকার পর্যবেক্ষণ করে; উইন্ডোর আকার না বদলালেও সাইডবার বন্ধ বা গ্রিড পরিবর্তনের কারণে কন্টেইনারের আকার বদলাতে পারে'
        },
        {
          en: 'ResizeObserver reduces computer processor temperatures by 50 percent',
          bn: 'ResizeObserver প্রসেসরের তাপমাত্রা ৫০ শতাংশ কমিয়ে আনে'
        },
        {
          en: 'Because window resize events were banned in CSS3 standards',
          bn: 'কারণ CSS3 স্ট্যান্ডার্ডে উইন্ডো রিসাইজ নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'ResizeObserver permanently formats client device memory on change',
          bn: 'ResizeObserver পরিবর্তনের সময় মেমরি ফরম্যাট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The window might not change size, but a sidebar expanding shrinks the main content container.',
        bn: 'উইন্ডোর আকার এক থাকলেও সাইডবার বন্ধ করলে মূল কন্টেইনার বড় হয়ে যেতে পারে।'
      },
      explanation: {
        en: 'ResizeObserver provides component-level responsiveness (container-aware layout), decoupling component behavior from global window dimensions.',
        bn: 'ResizeObserver কম্পোনেন্টকে গ্লোবাল উইন্ডোর ওপর নির্ভরশীল না করে নিজস্ব কন্টেইনারের পরিবর্তনের সাথে সুন্দরভাবে খাপ খাওয়াতে সাহায্য করে।'
      }
    },
    {
      id: 'lk-ex4',
      kind: 'mcq',
      topic: 'observer-disconnect-memory-leak-prevention',
      question: {
        en: 'In Single Page Applications, what severe bug occurs if a developer fails to call observer.disconnect() when a component unmounts?',
        bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে কোনো কম্পোনেন্ট আনমাউন্ট হওয়ার সময় ডেভেলপার যদি observer.disconnect() কল করতে ভুলে যান, তবে কোন মারাত্মক বাগ দেখা দেয়?'
      },
      options: [
        {
          en: 'Memory Leaks and Ghost Callbacks: the browser retains uncollected references to detached DOM nodes, and the observer continues firing callbacks for nonexistent components',
          bn: 'মেমরি লিক এবং অদৃশ্য কলব্যাক: ব্রাউজার মুছে যাওয়া ডম উপাদানগুলোর রেফারেন্স মেমরিতে ধরে রাখে এবং মুছে যাওয়া কম্পোনেন্টের জন্যও কলব্যাক চালিয়ে সিপিইউ নষ্ট করে'
        },
        {
          en: 'The computer keyboard permanently ceases functioning',
          bn: 'কম্পিউটারের কিবোর্ড চিরতরে কাজ করা বন্ধ করে দেয়'
        },
        {
          en: 'Because uncalled disconnects format the client hard drive immediately',
          bn: 'কারণ ডিসকানেক্ট না করলে হার্ড ড্রাইভ ফরম্যাট হয়ে যায়'
        },
        {
          en: 'The browser changes all website fonts to Comic Sans',
          bn: 'ব্রাউজার সব ফন্ট বদলে কমিক সান্স করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Detached DOM nodes cannot be garbage collected if active observers still reference them.',
        bn: 'মুছে ফেলা ডম উপাদান মেমরি থেকে সরানো যায় না যদি অবজারভারগুলো তাদের ধরে রাখে।'
      },
      explanation: {
        en: 'Failing to disconnect observers creates detached DOM memory leaks and causes stale event handlers to execute against unmounted components.',
        bn: 'অবজারভার বন্ধ না করলে মেমরি লিক হয় এবং অপ্রয়োজনীয় কলব্যাক চলতে থেকে সিস্টেমকে ধীর করে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'lighthouse-keepers-quiz',
    title: {
      en: 'Observer APIs, Viewport Mechanics, and Performance Quiz',
      bn: 'অবজারভার এপিআই, ভিউপোর্ট মেকানিক্স ও পারফরম্যান্স কুইজ'
    },
    questions: [
      {
        id: 'lkq-q1',
        kind: 'mcq',
        topic: 'intersection-threshold-array-usage',
        question: {
          en: 'When configuring an IntersectionObserver with threshold: [0, 0.5, 1.0], what sequence of callbacks will the observer execute as an element scrolls into view?',
          bn: 'threshold: [০, ০.৫, ১.০] কনফিগার করা একটি IntersectionObserver-এ কোনো উপাদান স্ক্রলে দৃশ্যমান হওয়ার সময় কোন ক্রমে কলব্যাক কার্যকর হবে?'
        },
        options: [
          {
            en: 'It fires once when the first pixel appears (0), again when 50% of the element is visible (0.5), and a third time when the element is 100% fully inside the viewport (1.0)',
            bn: 'প্রথম পিক্সেল স্ক্রিনে ঢোকার সাথে সাথে একবার (০), ৫০% অংশ দৃশ্যমান হলে দ্বিতীয়বার (০.৫), এবং উপাদানটির ১০০% পুরোপুরি ভেতরে এলে তৃতীয়বার (১.০) কলব্যাক ট্রিগার হবে'
          },
          {
            en: 'It only fires once at exactly 50 percent visibility',
            bn: 'এটি কেবল ৫০ শতাংশ দৃশ্যমান হলেই একবার ট্রিগার হয়'
          },
          {
            en: 'The observer runs continuously 10,000 times per millisecond',
            bn: 'অবজারভার প্রতি মিলিসেকেন্ডে ১০,০০০ বার চলতে থাকে'
          },
          {
            en: 'Threshold arrays cause computer monitors to change brightness',
            bn: 'থ্রেশহোল্ড অ্যারে মনিটরের উজ্জ্বলতা পরিবর্তন করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each threshold fraction in the array represents a milestone boundary that triggers a notification.',
          bn: 'অ্যারের প্রতিটি মান একটি মাইলফলক যা অতিক্রম করার সাথে সাথেই নতুন বিজ্ঞপ্তি আসে।'
        },
        explanation: {
          en: 'Threshold arrays configure multiple reporting milestones, enabling graduated visual effects (such as opacity transitions or analytics impression tracking).',
          bn: 'থ্রেশহোল্ড অ্যারে একাধিক ধাপে বিজ্ঞপ্তি দিয়ে ধাপে ধাপে ভিজ্যুয়াল অ্যানিমেশন বা ভিউ ট্র্যাকিং করার সুবিধা দেয়।'
        }
      },
      {
        id: 'lkq-q2',
        kind: 'mcq',
        topic: 'mutation-observer-microtask-batching',
        question: {
          en: 'How does MutationObserver deliver notifications when a script makes 100 sequential modifications to the DOM tree in a loop?',
          bn: 'একটি লুপের মধ্যে কোনো স্ক্রিপ্ট যখন ডম ট্রিতে পরপর ১০০টি পরিবর্তন ঘটায়, তখন MutationObserver কীভাবে সেই বিজ্ঞপ্তিগুলো সরবরাহ করে?'
        },
        options: [
          {
            en: 'It batches all 100 mutations together and delivers them as a single list of MutationRecord objects in a microtask callback at the end of the current JavaScript execution turn',
            bn: 'এটি সমস্ত ১০০টি পরিবর্তনকে একত্রিত করে একটি একক তালিকায় ব্যাচ করে এবং বর্তমান স্ক্রিপ্ট চালানো শেষ হলে মাইক্রোটাস্ক কলব্যাকে একসাথে পাঠায়'
          },
          {
            en: 'It halts the browser and executes 100 separate synchronous alerts',
            bn: 'এটি ব্রাউজার থামিয়ে ১০০টি আলাদা সিঙ্ক্রোনাস অ্যালার্ট চালায়'
          },
          {
            en: 'Because batching formats the browser database hard drive',
            bn: 'কারণ ব্যাচিং ব্রাউজার ডেটাবেস হার্ড ড্রাইভ ফরম্যাট করে'
          },
          {
            en: 'MutationObserver ignores all loops containing more than 10 mutations',
            bn: '১০টির বেশি পরিবর্তন থাকলে মিউটেশন অবজারভার সব অগ্রাহ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Microtask batching: wait until the synchronous JavaScript finishes, then deliver all mutations in one unified array.',
          bn: 'জাভাস্ক্রিপ্ট কোড শেষ হওয়া পর্যন্ত অপেক্ষা করে সব পরিবর্তন একবারে একটি অ্যারেতে সরবরাহ করা হয়।'
        },
        explanation: {
          en: 'MutationObserver collects DOM alterations and dispatches them asynchronously at the microtask checkpoint, preventing callback thrashing.',
          bn: 'মিউটেশন অবজারভার পরিবর্তনগুলো ব্যাচ করে একবারে পাঠিয়ে ব্রাউজারের কাজের গতি অক্ষত রাখে।'
        }
      },
      {
        id: 'lkq-q3',
        kind: 'mcq',
        topic: 'intersection-observer-entry-properties',
        question: {
          en: 'Which boolean property on an IntersectionObserverEntry object allows an image lazy-loading callback to determine whether the target element has entered the root boundary?',
          bn: 'IntersectionObserverEntry অবজেক্টের কোন বুলিয়ান প্রপার্টিটি দেখে ইমেজ লেজি-লোডিং কলব্যাক বুঝতে পারে যে উপাদানটি স্ক্রিনের সীমানায় প্রবেশ করেছে?'
        },
        options: [
          {
            en: 'entry.isIntersecting (returns true if the element has crossed into the viewport or rootMargin)',
            bn: 'entry.isIntersecting (উপাদানটি স্ক্রিনে বা rootMargin সীমানায় প্রবেশ করলে true দেয়)'
          },
          {
            en: 'entry.isOnline',
            bn: 'entry.isOnline'
          },
          {
            en: 'entry.hasBatteryPower',
            bn: 'entry.hasBatteryPower'
          },
          {
            en: 'entry.isSavedToDisk',
            bn: 'entry.isSavedToDisk'
          }
        ],
        answer: 0,
        hint: {
          en: 'Check the "isIntersecting" boolean flag.',
          bn: 'বুলিয়ান ফ্ল্যাগটির নাম "isIntersecting"।'
        },
        explanation: {
          en: 'entry.isIntersecting is the canonical boolean indicating whether the target currently intersects the root bounding box.',
          bn: 'entry.isIntersecting হলো স্ট্যান্ডার্ড বুলিয়ান যা নির্দেশ করে উপাদানটি বর্তমানে দৃশ্যমান সীমানায় রয়েছে কি না।'
        }
      },
      {
        id: 'lkq-q4',
        kind: 'mcq',
        topic: 'infinite-scroll-sentinel-pattern',
        question: {
          en: 'In web architecture, what is an "Infinite Scroll Sentinel"?',
          bn: 'ওয়েব আর্কিটেকচারে "ইনফিনিট স্ক্রল সেন্টিনেল" (Infinite Scroll Sentinel) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'An invisible zero-height DOM element placed at the bottom of a list; when IntersectionObserver detects it entering the viewport, the application automatically fetches the next page of items',
            bn: 'তালিকার সবার নিচে রাখা একটি অদৃশ্য শূন্য-উচ্চতার ডম উপাদান; IntersectionObserver যখনই এটিকে স্ক্রিনে ঢুকতে দেখে, অ্যাপ নিজে থেকেই পরবর্তী পেজের ডেটা ফেচ করে আনে'
          },
          {
            en: 'A security robot that guards the server room doors',
            bn: 'একটি নিরাপত্তা রোবট যা সার্ভার রুমের পাহারা দেয়'
          },
          {
            en: 'A software algorithm that prevents users from scrolling up',
            bn: 'একটি অ্যালগরিদম যা ব্যবহারকারীকে ওপরে স্ক্রল করতে বাধা দেয়'
          },
          {
            en: 'A sentinel formats client hard drives when scrolling reaches 100 pages',
            bn: '১০০ পেজ স্ক্রল করলে সেন্টিনেল হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A tiny trigger element at the end of the content. When you reach it, load more items.',
          bn: 'কন্টেন্টের শেষে থাকা একটি ক্ষুদ্র ট্রিগার উপাদান; সেখানে পৌঁছালে নতুন ডেটা লোড হয়।'
        },
        explanation: {
          en: 'Sentinels decouple pagination logic from scroll positions, relying purely on intersection detection to trigger paginated data loading.',
          bn: 'সেন্টিনেল পদ্ধতি স্ক্রল অবস্থানের জটিল হিসাব ছাড়াই নিখুঁতভাবে অসীম স্ক্রলিং বাস্তবায়ন করতে সাহায্য করে।'
        }
      }
    ]
  }
};
