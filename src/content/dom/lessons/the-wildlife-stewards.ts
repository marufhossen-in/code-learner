import type { Lesson } from '../../../lib/types';

export const wildlifeStewardsLesson: Lesson = {
  slug: 'the-wildlife-stewards',
  tech: 'dom',
  title: {
    en: 'Modern Observers: Intersection, Resize & Mutation',
    bn: 'আধুনিক অবজারভার: ইন্টারসেকশন, রিসাইজ ও মিউটেশন'
  },
  summary: {
    en: 'Modern web engineering has replaced inefficient polling timers and heavy scroll listeners with asynchronous browser observer APIs. The DOM Observer suite comprises three core instruments. IntersectionObserver monitors when an element enters or exits the viewport, enabling performant lazy loading and infinite scroll without measuring scroll positions. For example, in an 800 pixel viewport, an element with 400 visible pixels reaches a 0.5 intersection ratio, matching a threshold of 0.5. ResizeObserver tracks box dimension changes directly on target elements, enabling true responsive components independent of window resizing. MutationObserver monitors tree modifications, recording node additions, deletions, and attribute changes without blocking the main execution thread. This lesson teaches observer architecture, threshold math, disconnect cleanup, and observer patterns.',
    bn: 'আধুনিক ওয়েব প্রোগ্রামিংয়ে ধীরগতির টাইমার ও ভারী স্ক্রোল লিসেনারের বদলে ব্রাউজারের আধুনিক অ্যাসিঙ্ক্রোনাস অবজারভার এপিআই ব্যবহৃত হয়। ডম অবজারভার গ্রুপের মূল ৩টি অংশ রয়েছে। IntersectionObserver কোনো উপাদান ভিউপোর্টে প্রবেশ বা বের হওয়া পর্যবেক্ষণ করে, যা স্ক্রোল পজিশন না মেপেই অলস ছবি লোড (lazy loading) এবং অসীম স্ক্রোলিং কার্যকর করে। যেমন ৮০০ পিক্সেলের ভিউপোর্টে কোনো উপাদানের ৪০০ পিক্সেল দেখা গেলে তার ইন্টারসেকশন রেশিও হয় ০.৫, যা ০.৫ থ্রেশহোল্ডের সাথে পুরোপুরি মেলে। ResizeObserver কোনো উপাদানের নিজস্ব আকার ও উচ্চতার পরিবর্তন নিখুঁতভাবে পর্যবেক্ষণ করে। আর MutationObserver ডম ট্রিতে নতুন নোড যুক্ত হওয়া, মুছে ফেলা বা অ্যাট্রিবিউট পরিবর্তন ট্র্যাক করে। এই পাঠে অবজারভার আর্কিটেকচার, থ্রেশহোল্ড গণিত এবং মেমোরি ক্লিনআপ বিস্তারিতভাবে শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Asynchronous Browser Observers',
        bn: 'মূল ধারণা: ব্রাউজারের অ্যাসিঙ্ক্রোনাস অবজারভারসমূহ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'In early web development, detecting when an image scrolled into view required attaching a scroll event listener and repeatedly invoking getBoundingClientRect(). This saturated the CPU and caused layout thrashing. Modern browser observers offload geometry tracking to background browser threads, notifying JavaScript asynchronously only when thresholds are crossed.',
        bn: 'ওয়েব ডেভেলপমেন্টের শুরুর দিকে স্ক্রোল করার পর কোনো ছবি পর্দায় এসেছে কি না তা দেখতে স্ক্রোল লিসেনার এবং getBoundingClientRect() বারবার কল করতে হতো। এতে প্রসেসরের ওপর প্রচণ্ড চাপ পড়ত এবং স্ক্রিন আটকে যেত। আধুনিক অবজারভার এপিআই এই মাপজোখের কাজ ব্যাকগ্রাউন্ড ব্রাউজার থ্রেডে স্থানান্তর করেছে, ফলে নির্দিষ্ট সীমানা পার হলেই কেবল জাভাস্ক্রিপ্টকে খবর জানানো হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'IntersectionObserver',
          def: {
            en: 'An API monitoring the visibility of a target element relative to an ancestor element or the top-level viewport',
            bn: 'কোনো উপাদান স্ক্রিনে বা নির্দিষ্ট কন্টেইনারে দৃশ্যমান হয়েছে কি না তা পর্যবেক্ষণকারী আধুনিক এপিআই'
          }
        },
        {
          term: 'ResizeObserver',
          def: {
            en: 'An API delivering notifications whenever an element box dimensions (contentBox or borderBox) change size',
            bn: 'যেকোনো নির্দিষ্ট উপাদানের আকার বা উচ্চতা বদলালে তৎক্ষণাৎ তা শনাক্তকারী অবজারভার'
          }
        },
        {
          term: 'MutationObserver',
          def: {
            en: 'An API tracking mutations made to the DOM tree (child node additions/removals, character data, attributes)',
            bn: 'ডম ট্রিতে উপাদান যোগ হওয়া, মুছে ফেলা বা অ্যাট্রিবিউট পরিবর্তনের তথ্য প্রদানকারী অবজারভার'
          }
        },
        {
          term: 'observer.disconnect()',
          def: {
            en: 'Stopping an observer instance from listening to all observed targets to prevent memory leaks',
            bn: 'মেমোরি লিক রোধ করতে অবজারভারের সমস্ত নজরদারি একবারে পুরোপুরি বন্ধ করে দেওয়ার মেথড'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'observer-comparison-table',
      text: {
        en: 'The Modern DOM Observer Suite Comparison',
        bn: 'ডম অবজারভার এপিআইসমূহের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Key Characteristics and Use Cases of Browser Observer APIs',
        bn: 'ব্রাউজার অবজারভার এপিআইসমূহের বৈশিষ্ট্য ও ব্যবহারের ক্ষেত্র'
      },
      head: [
        { en: 'Observer API', bn: 'অবজারভার' },
        { en: 'Monitored Property', bn: 'নজরদারির বিষয়' },
        { en: 'Primary Engineering Application', bn: 'প্রধান বাস্তব ব্যবহার' }
      ],
      rows: [
        [
          { en: 'IntersectionObserver', bn: 'IntersectionObserver' },
          { en: 'Visibility percentage inside viewport / root container', bn: 'ভিউ পোর্ট বা কন্টেইনারে দৃশ্যমান হওয়ার শতাংশ' },
          { en: 'Image lazy loading, infinite scrolling, ad viewability auditing', bn: 'ছবির অলস লোডিং, অন্তহীন স্ক্রোল এবং বিজ্ঞাপন দেখার হিসাব' }
        ],
        [
          { en: 'ResizeObserver', bn: 'ResizeObserver' },
          { en: 'Element box dimensions (contentRect, borderBoxSize)', bn: 'উপাদানটির নিজস্ব উচ্চতা ও প্রস্থ' },
          { en: 'Responsive data charts, grid container queries, canvas resizing', bn: 'রেসপনসিভ চার্ট, গ্রিড কন্টেইনার কোয়েরি এবং ক্যানভাসের মাপ সমন্বয়' }
        ],
        [
          { en: 'MutationObserver', bn: 'MutationObserver' },
          { en: 'DOM tree structural mutations, text updates, attributes', bn: 'ডম ট্রির গঠন, লেখা বা অ্যাট্রিবিউট পরিবর্তন' },
          { en: 'Rich text undo/redo, dynamic third-party widget monitoring, a11y live alerts', bn: 'এডিটরের হিস্ট্রি ট্র্যাকিং এবং থার্ড-পার্টি উইজেট পর্যবেক্ষণ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: IntersectionObserver Threshold Math',
        bn: 'চালনাযোগ্য সিমুলেশন: IntersectionObserver থ্রেশহোল্ড গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates evaluating the intersection ratio of an element. Inside an 800 pixel viewport, an element with 400 visible pixels achieves an intersection ratio of 0.5, matching a configured threshold of 0.5:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি উপাদানের ইন্টারসেকশন অনুপাত বের করে দেখায়। ৮০০ পিক্সেলের ভিউপোর্টে ৪০০ পিক্সেল দৃশ্যমান হলে ইন্টারসেকশন রেশিও হয় ০.৫, যা কনফিগার করা ০.৫ থ্রেশহোল্ডের সাথে সম্পূর্ণ মিলে যায়:'
      }
    },
    {
      type: 'code',
      id: 'dom-observers-sim',
      lang: 'javascript',
      code: `// DOM IntersectionObserver Visibility & Threshold Engine
const viewportHeight = 800; // Total height of browser viewport in pixels
const visiblePixels = 400;  // Vertical pixels of element currently in view
const threshold = 0.5;      // Configured callback trigger threshold (50%)

// Compute normalized intersection ratio
const ratio = Number((visiblePixels / viewportHeight).toFixed(2));

console.log('Browser viewport height in pixels:', viewportHeight);
// -> Browser viewport height in pixels: 800

console.log('Visible element height in pixels:', visiblePixels);
// -> Visible element height in pixels: 400

console.log('Configured observer threshold:', threshold);
// -> Configured observer threshold: 0.5

console.log('Computed intersection ratio:', ratio);
// -> Computed intersection ratio: 0.5`,
      caption: {
        en: 'Figure 1: Displaying 400 pixels of an element in an 800 pixel viewport yields an intersection ratio of 0.5, matching threshold 0.5',
        bn: 'চিত্র ১: ৮০০ পিক্সেলের ভিউপোর্টে ৪০০ পিক্সেল দেখা গেলে ০.৫ ইন্টারসেকশন অনুপাত পাওয়া যায় যা ০.৫ থ্রেশহোল্ডের সমান'
      }
    },
    {
      type: 'heading',
      id: 'observer-lifecycle-cleanup',
      text: {
        en: 'Memory Lifecycle & Unobserve Patterns',
        bn: 'মেমোরি জীবনচক্র ও আনঅবজার্ভের সঠিক নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Whenever an observed element is removed from the DOM, or when a component unmounts in a single-page application, you must invoke observer.unobserve(element) or observer.disconnect(). Failing to disconnect active observers prevents garbage collection and produces silent background memory leaks.',
        bn: 'যখন কোনো উপাদান ডম থেকে মুছে ফেলা হয় বা কোনো কম্পোনেন্ট আনমাউন্ট হয়, তখন অবশ্যই observer.unobserve(element) বা observer.disconnect() কল করতে হবে। সক্রিয় অবজারভার বন্ধ না করলে ব্রাউজার মেমোরি খালি করতে পারে না, ফলে মেমোরি লিক হয়ে অ্যাপ স্লো হয়ে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'threshold Array ([0.0, 0.5, 1.0])',
          def: {
            en: 'Specifying multiple visibility milestones at which the intersection callback should be invoked',
            bn: 'একাধিক থ্রেশহোল্ড নির্ধারণ করা যাতে নির্দিষ্ট শতাংশ দৃশ্যমান হলেই কলব্যাক কার্যকর হয়'
          }
        },
        {
          term: 'rootMargin Property ("50px")',
          def: {
            en: 'Expanding or contracting the intersection bounding box, allowing images to preload 50px before entering the actual viewport',
            bn: 'স্ক্রিনের সীমানা কৃত্রিমভাবে বাড়িয়ে নেওয়া যাতে স্ক্রিনে আসার ৫০ পিক্সেল আগেই ছবি প্রি-লোড হয়ে যায়'
          }
        },
        {
          term: 'ResizeObserverEntry.contentBoxSize',
          def: {
            en: 'Providing exact pixel dimensions of the target element content box, accounting for device pixel ratios',
            bn: 'উপাদানটির নিজস্ব কন্টেন্ট বক্সের নিখুঁত উচ্চতা ও প্রস্থ প্রদানকারী আধুনিক প্রপার্টি'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-threshold-calc-ex',
      kind: 'mcq',
      topic: 'Intersection ratio for 400px visible in 800px viewport',
      question: {
        en: 'According to our observer simulation, what intersection ratio is computed when 400 pixels of an element are visible within an 800 pixel viewport?',
        bn: 'আমাদের অবজারভার সিমুলেশন অনুযায়ী ৮০০ পিক্সেল ভিউপোর্টে একটি উপাদানের ৪০০ পিক্সেল দৃশ্যমান হলে ইন্টারসেকশন অনুপাত কত হবে?'
      },
      options: [
        {
          en: '0.5 (exactly 50% visibility)',
          bn: '০.৫ (ঠিক ৫০% দৃশ্যমানতা)'
        },
        {
          en: '1.0',
          bn: '১.০'
        },
        {
          en: '400',
          bn: '৪০০'
        },
        {
          en: '0.1',
          bn: '০.১'
        }
      ],
      answer: 0,
      hint: {
        en: '400 divided by 800 equals 0.5.',
        bn: '৪০০ কে ৮০০ দিয়ে ভাগ করলে ০.৫ হয়।'
      },
      explanation: {
        en: 'The ratio is computed as 400 / 800 = 0.5, triggering observers configured with a 0.5 threshold.',
        bn: '৪০০ ভাগ ৮০০ সমান ০.৫, যা ০.৫ থ্রেশহোল্ডে থাকা অবজারভারকে সাথে সাথে সক্রিয় করে।'
      }
    },
    {
      id: 'dom-unobserve-cleanup-ex',
      kind: 'mcq',
      topic: 'Preventing memory leaks by disconnecting observers',
      question: {
        en: 'Why should front-end developers invoke observer.disconnect() when destroying an interactive chart component?',
        bn: 'একটি চার্ট কম্পোনেন্ট ধ্বংস বা আনমাউন্ট করার সময় কেন ডেভেলপারদের observer.disconnect() কল করা উচিত?'
      },
      options: [
        {
          en: 'To sever reference links and stop background observations, allowing the browser garbage collector to reclaim allocated memory',
          bn: 'অপ্রয়োজনীয় পর্যবেক্ষণ বন্ধ করতে এবং ব্রাউজার যাতে মেমোরি খালি করে মেমোরি লিক হওয়া প্রতিরোধ করতে পারে'
        },
        {
          en: 'To clear browser cookies',
          bn: 'কুকি পরিষ্কার করতে'
        },
        {
          en: 'To change screen resolution',
          bn: 'স্ক্রিন রেজোলিউশন বদলাতে'
        },
        {
          en: 'To reload the HTML document',
          bn: 'পেজ রিলোড করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stops background tracking to free up memory.',
        bn: 'মেমোরি মুক্ত করে মেমোরি লিক ঠেকানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'disconnect() halts all target listening, ensuring detached DOM elements can be safely garbage collected.',
        bn: 'disconnect() কল করলে অবজারভারের রেফারেন্স কেটে যায় এবং অপ্রয়োজনীয় উপাদানগুলো মেমোরি থেকে মুছে ফেলা সম্ভব হয়।'
      }
    },
    {
      id: 'dom-rootmargin-preload-ex',
      kind: 'mcq',
      topic: 'Preloading images with rootMargin',
      question: {
        en: 'What advantage does configuring rootMargin: "200px" offer when implementing image lazy loading with IntersectionObserver?',
        bn: 'IntersectionObserver দিয়ে ইমেজ লেজি লোডিং তৈরির সময় rootMargin: "200px" সেট করার সুবিধা কী?'
      },
      options: [
        {
          en: 'It triggers the download 200px BEFORE the image enters the user visible screen, ensuring the graphic is already loaded when the user scrolls to it',
          bn: 'এটি ছবিটি স্ক্রিনে আসার ২০০ পিক্সেল আগেই ডাউনলোড শুরু করে, ফলে ব্যবহারকারী স্ক্রোল করে পৌঁছানোর আগেই ছবিটি তৈরি থাকে'
        },
        {
          en: 'It increases image file size by 200 kilobytes',
          bn: 'এটি ছবির সাইজ ২০০ কিলোবাইট বাড়িয়ে দেয়'
        },
        {
          en: 'It crops 200 pixels from the bottom of the photo',
          bn: 'এটি ছবির নিচ থেকে ২০০ পিক্সেল কেটে দেয়'
        },
        {
          en: 'It forces images to display only in black and white',
          bn: 'এটি ছবিকে সাদাকালো বানায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preloads content ahead of time before it reaches the viewport.',
        bn: 'পর্দায় আসার আগেই আগাম লোড করে প্রস্তুত রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'rootMargin expands the intersection bounding box outward, allowing proactive background asset preloading before visual display.',
        bn: 'rootMargin ভিউপোর্টের সীমানা ২০০ পিক্সেল বাইরে বাড়িয়ে নেয়, ফলে স্ক্রিনে আসার আগেই ছবিটি সুন্দরভাবে লোড হয়ে থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-wildlife-stewards',
    title: {
      en: 'DOM Modern Observers Quiz',
      bn: 'ডম আধুনিক অবজারভার কুইজ'
    },
    questions: [
      {
        id: 'q-dom-resizeobserver-advantage',
        kind: 'mcq',
        topic: 'Advantage of ResizeObserver over window resize events',
        question: {
          en: 'Why is ResizeObserver superior to listening to window "resize" events for building responsive UI components?',
          bn: 'রেসপনসিভ কম্পোনেন্ট তৈরির ক্ষেত্রে উইন্ডোর "resize" ইভেন্টের চেয়ে ResizeObserver কেন অনেক বেশি কার্যকর?'
        },
        options: [
          {
            en: 'ResizeObserver fires when an individual element changes dimensions (such as toggling sidebars or grid splits) even when the browser window has not resized',
            bn: 'ব্রাউজার উইন্ডো না বদলালেও সাইডবার খোলা বা গ্রিড পরিবর্তনের কারণে কোনো নির্দিষ্ট উপাদানের আকার বদলালেই ResizeObserver সাথে সাথে বুঝতে পারে'
          },
          {
            en: 'ResizeObserver works without JavaScript',
            bn: 'ResizeObserver জাভাস্ক্রিপ্ট ছাড়াই চলে'
          },
          {
            en: 'window resize only works in desktop browsers',
            bn: 'উইন্ডো রিসাইজ কেবল ডেস্কটপে চলে'
          },
          {
            en: 'ResizeObserver changes CSS stylesheet colors',
            bn: 'ResizeObserver সিএসএস রঙ বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Detects component-level dimensional changes independently of window size.',
          bn: 'উইন্ডোর ওপর নির্ভর না করে কোনো উপাদানের নিজস্ব আকার পরিবর্তনের কথা ভাবুন।'
        },
        explanation: {
          en: 'ResizeObserver monitors target element bounding boxes directly, enabling true container-query responsive logic.',
          bn: 'ResizeObserver সরাসরি উপাদানের নিজস্ব উচ্চতা ও প্রস্থ পর্যবেক্ষণ করে, ফলে কন্টেইনার পরিবর্তনের সাথে সাথে কম্পোনেন্ট রেসপনসিভ হয়।'
        }
      },
      {
        id: 'q-dom-mutationobserver-config',
        kind: 'mcq',
        topic: 'Configuration options for MutationObserver.observe',
        question: {
          en: 'Which configuration object passed to mutationObserver.observe() watches for added or removed child elements across the entire nested subtree?',
          bn: 'mutationObserver.observe()-এ কোন কনফিগারেশন অবজেক্ট দিলে পুরো নেস্টেড সাব-ট্রির সমস্ত চাইল্ড উপাদান যোগ বা মোছা পর্যবেক্ষণ করা যায়?'
        },
        options: [
          {
            en: '{ childList: true, subtree: true }',
            bn: '{ childList: true, subtree: true }'
          },
          {
            en: '{ all: true }',
            bn: '{ all: true }'
          },
          {
            en: '{ recursive: 1 }',
            bn: '{ recursive: 1 }'
          },
          {
            en: '{ watchDOM: true }',
            bn: '{ watchDOM: true }'
          }
        ],
        answer: 0,
        hint: {
          en: 'childList tracks children; subtree tracks nested descendants.',
          bn: 'চাইল্ড নোডের জন্য childList এবং গভীরে খোঁজার জন্য subtree ভাবুন।'
        },
        explanation: {
          en: 'childList: true enables monitoring of immediate children; subtree: true extends this monitoring recursively to all descendants.',
          bn: 'childList: true চাইল্ড উপাদান দেখে এবং subtree: true ভেতরের সমস্ত বংশধর বা নেস্টেড উপাদানেও নজরদারি বজায় রাখে।'
        }
      },
      {
        id: 'q-dom-isintersecting-boolean',
        kind: 'mcq',
        topic: 'Meaning of entry.isIntersecting in IntersectionObserver',
        question: {
          en: 'What does the boolean property entry.isIntersecting communicate inside an IntersectionObserver callback?',
          bn: 'IntersectionObserver কলব্যাকের ভেতর entry.isIntersecting বুলিয়ান প্রপার্টি কী তথ্য দেয়?'
        },
        options: [
          {
            en: 'true if the target element currently intersects the root viewport by at least the configured threshold, false if it has left',
            bn: 'যদি উপাদানটি নির্ধারিত সীমানার মধ্যে স্ক্রিনে দৃশ্যমান থাকে তবে true, আর বাইরে চলে গেলে false'
          },
          {
            en: 'true only when the user clicks the element',
            bn: 'শুধুমাত্র ক্লিকে true দেয়'
          },
          {
            en: 'true if the element has an image tag',
            bn: 'ছবি থাকলে true দেয়'
          },
          {
            en: 'true if the browser has internet access',
            bn: 'ইন্টারনেট থাকলে true দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Indicates whether the element is currently visible within the root.',
          bn: 'উপাদানটি বর্তমানে পর্দায় দৃশ্যমান কি না তা জানার কথা ভাবুন।'
        },
        explanation: {
          en: 'isIntersecting is a convenient boolean flag confirming whether the element currently intersects the observation boundary.',
          bn: 'isIntersecting খুব সহজেই জানিয়ে দেয় উপাদানটি বর্তমানে ভিউপোর্টের ভেতরে অবস্থান করছে কি না।'
        }
      },
      {
        id: 'q-dom-mutation-record-type',
        kind: 'mcq',
        topic: 'MutationRecord types in MutationObserver',
        question: {
          en: 'Which MutationRecord.type string is generated when an element classList or data attribute is modified?',
          bn: 'কোনো উপাদানের classList বা ডেটা অ্যাট্রিবিউট পরিবর্তন করা হলে MutationRecord.type-এর মান কী হয়?'
        },
        options: [
          {
            en: '"attributes"',
            bn: '"attributes"'
          },
          {
            en: '"childList"',
            bn: '"childList"'
          },
          {
            en: '"characterData"',
            bn: '"characterData"'
          },
          {
            en: '"classMutation"',
            bn: '"classMutation"'
          }
        ],
        answer: 0,
        hint: {
          en: 'Attributes changes produce the "attributes" record type.',
          bn: 'অ্যাট্রিবিউট বদলানোর জন্য "attributes" ধরনের কথা ভাবুন।'
        },
        explanation: {
          en: 'Modifying classes, styles, or custom attributes generates MutationRecords with type "attributes".',
          bn: 'ক্লাস বা যেকোনো অ্যাট্রিবিউট পরিবর্তিত হলে MutationObserver তার ধরন হিসেবে "attributes" পাঠায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-arboretum-rehearsal',
    tech: 'dom',
    title: {
      en: 'High-Performance Data Table & Virtual List',
      bn: 'উচ্চগতির ডেটা টেবিল ও ভার্চুয়াল লিস্ট'
    }
  }
};
