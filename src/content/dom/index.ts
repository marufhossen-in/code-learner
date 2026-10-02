import type { Hub } from '../../lib/types';

import { glasshouseMapLesson } from './lessons/the-glasshouse-map';
import { expeditionOrchardLesson } from './lessons/the-expedition-orchard';
import { graftingBenchLesson } from './lessons/the-grafting-bench';
import { pollinatorsFlightLesson } from './lessons/the-pollinators-flight';
import { orchardFormsLesson } from './lessons/the-orchard-forms';
import { measuringGlassLesson } from './lessons/the-measuring-glass';
import { wildlifeStewardsLesson } from './lessons/the-wildlife-stewards';
import { arboretumRehearsalLesson } from './lessons/the-arboretum-rehearsal';

export const domHub: Hub = {
  slug: 'dom',
  name: 'DOM',
  icon: '🏛️',
  tagline: {
    en: 'Master the Document Object Model: tree traversal, efficient mutations, event delegation, and 60 FPS layout performance.',
    bn: 'ডকুমেন্ট অবজেক্ট মডেল আয়ত্ত করুন: নোড ট্রাভার্সাল, কার্যকর রূপান্তর, ইভেন্ট ডেলিগেশন এবং ৬০ এফপিএস লেআউট পারফরম্যান্স।'
  },
  intro: {
    en: 'The Document Object Model (DOM) is the object-oriented representation of the web page constructed by the browser rendering engine. Through the DOM API, JavaScript queries elements, listens to user input events, mutates the visual tree, and measures layout geometry. This track covers the full spectrum of DOM engineering: node types and hierarchy (Lesson 1), fast selector queries and traversal (Lesson 2), batch DOM manipulation with DocumentFragment (Lesson 3), the three phases of event propagation and delegation (Lesson 4), form input handling and FormData (Lesson 5), avoiding layout thrashing and forced reflows (Lesson 6), modern reactive observers (Lesson 7), and building a virtualized high-performance data grid (Lesson 8).',
    bn: 'ডকুমেন্ট অবজেক্ট মডেল (DOM) হলো ব্রাউজার রেন্ডারিং ইঞ্জিন দ্বারা তৈরি ওয়েব পেজের একটি অবজেক্ট-ভিত্তিক গঠন। ডম এপিআই-এর মাধ্যমে জাভাস্ক্রিপ্ট বিভিন্ন উপাদান নির্বাচন করে, ব্যবহারকারীর ইভেন্ট শোনে, দৃশ্যমান ট্রি পরিবর্তন করে এবং লেআউট জ্যামিতি পরিমাপ করে। এই ট্র্যাকে ডম ইঞ্জিনিয়ারিংয়ের সমস্ত গুরুত্বপূর্ণ বিষয় বিস্তারিতভাবে শেখানো হয়েছে: নোড টাইপ ও হায়ারার্কি (লেসন ১), সিলেক্টর কোয়েরি ও ট্রাভার্সাল (লেসন ২), DocumentFragment দিয়ে ব্যাচ মিউটেশন (লেসন ৩), ইভেন্ট প্রোপাগেশন ও ডেলিগেশনের ৩টি ধাপ (লেসন ৪), ফর্ম ইনপুট ও FormData (লেসন ৫), লেআউট থ্র্যাশিং ও রিফ্লো পরিহার (লেসন ৬), আধুনিক রিঅ্যাক্টিভ অবজারভারসমূহ (লেসন ৭) এবং ভার্চুয়ালাইজড ডেটা গ্রিড আর্কিটেকচার (লেসন ৮)।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Tree Architecture & Querying', bn: 'ধাপ ১ — ট্রি আর্কিটেকচার ও কোয়েরি' },
      items: [
        { en: 'DOM Tree, NodeTypes, Elements vs Nodes (Lesson 1)', bn: 'ডম ট্রি, নোড টাইপ, এলিমেন্ট বনাম নোড (লেসন ১)' },
        { en: 'querySelector, closest(), matches(), and Live vs Static Collections (Lesson 2)', bn: 'querySelector, closest, matches এবং লাইভ বনাম স্ট্যাটিক কালেকশন (লেসন ২)' }
      ]
    },
    {
      title: { en: 'Stage 2 — Mutation & Event Architecture', bn: 'ধাপ ২ — মিউটেশন ও ইভেন্ট আর্কিটেকচার' },
      items: [
        { en: 'Element Creation, DocumentFragment, and Safe HTML Injection (Lesson 3)', bn: 'উপাদান তৈরি, DocumentFragment এবং নিরাপদ এইচটিএমএল ইনজেকশন (লেসন ৩)' },
        { en: 'Event Propagation: Capture, Target, Bubble, and Delegation (Lesson 4)', bn: 'ইভেন্ট প্রোপাগেশন: ক্যাপচার, টার্গেট, বাবল ও ডেলিগেশন (লেসন ৪)' }
      ]
    },
    {
      title: { en: 'Stage 3 — Forms & Layout Performance', bn: 'ধাপ ৩ — ফর্ম ও লেআউট পারফরম্যান্স' },
      items: [
        { en: 'Form Controls, Validation Constraints, and the FormData API (Lesson 5)', bn: 'ফর্ম কন্ট্রোল, ভ্যালিডেশন এবং FormData এপিআই (লেসন ৫)' },
        { en: 'Layout Thrashing, getBoundingClientRect, Reflow and Repaint (Lesson 6)', bn: 'লেআউট থ্র্যাশিং, getBoundingClientRect, রিফ্লো ও রিপেইন্ট (লেসন ৬)' }
      ]
    },
    {
      title: { en: 'Stage 4 — Observers & Virtualization Capstone', bn: 'ধাপ ৪ — অবজারভার ও ভার্চুয়ালাইজেশন' },
      items: [
        { en: 'IntersectionObserver, ResizeObserver, and MutationObserver (Lesson 7)', bn: 'IntersectionObserver, ResizeObserver এবং MutationObserver (লেসন ৭)' },
        { en: 'Capstone: Virtualized Scrolling & High-Performance Data Table (Lesson 8)', bn: 'ক্যাপস্টোন: ভার্চুয়ালাইজড স্ক্রোলিং ও উচ্চগতির ডেটা টেবিল (লেসন ৮)' }
      ]
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the critical performance difference between childNodes and children in the DOM API?',
        bn: 'ডম এপিআই-তে childNodes এবং children-এর মধ্যে পারফরম্যান্স ও কাঠামোগত প্রধান পার্থক্য কী?'
      },
      a: {
        en: 'childNodes returns a live NodeList containing all child nodes including text nodes (whitespace, newlines) and comment nodes. In contrast, children returns an HTMLCollection containing strictly Element nodes (nodeType === 1). Iterating over childNodes often causes subtle bugs because developer loops encounter invisible whitespace text nodes instead of target HTML elements.',
        bn: 'childNodes একটি লাইভ NodeList প্রদান করে যার মধ্যে উপাদান ছাড়াও সব টেক্সট নোড (স্পেস, নতুন লাইন) ও কমেন্ট থাকে। অপরদিকে children কেবল এইচটিএমএল এলিমেন্টগুলো (nodeType === ১) নিয়ে একটি HTMLCollection তৈরি করে। childNodes দিয়ে লুপ চালালে স্পেস ও নতুন লাইনের টেক্সট নোড চলে আসার কারণে অনেক সময় অনাকাঙ্ক্ষিত বাগ তৈরি হয়।'
      }
    },
    {
      q: {
        en: 'Why does appending elements inside a DocumentFragment prevent browser layout thrashing?',
        bn: 'DocumentFragment-এর ভেতরে উপাদান যোগ করলে কেন ব্রাউজারে লেআউট থ্র্যাশিং ও অতিরিক্ত রিফ্লো প্রতিরোধ হয়?'
      },
      a: {
        en: 'DocumentFragment is a lightweight, minimal document container that exists entirely in memory detached from the active DOM tree. Appending child elements to a fragment triggers zero reflows. When the fragment is finally appended to the live DOM via appendChild(), all of its child nodes are transferred in a single atomic operation, triggering exactly 1 reflow instead of N individual reflows.',
        bn: 'DocumentFragment হলো একটি অত্যন্ত হালকা মেমোরি বাফার যা মূল ডম ট্রির বাইরে অবস্থান করে। ফ্র্যাগমেন্টের ভেতর উপাদান যোগ করলে ব্রাউজারে কোনো রিফ্লো ঘটে না। এরপর ফ্র্যাগমেন্টটিকে মূল ডমে যুক্ত করলে একবারে সব উপাদান যুক্ত হয়ে মাত্র ১টি একক রিফ্লো ট্রিগার করে, যা সাইটের গতি বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      q: {
        en: 'How does event delegation work and what memory advantage does it provide for large dynamic lists?',
        bn: 'ইভেন্ট ডেলিগেশন কীভাবে কাজ করে এবং বড় ডায়নামিক তালিকার ক্ষেত্রে এটি মেমোরির কী সুবিধা দেয়?'
      },
      a: {
        en: 'Event delegation leverages the event bubbling phase by attaching a single event listener to a common parent ancestor instead of binding separate listeners to hundreds of child elements. When an event fires on a child, it bubbles up to the parent where e.target or e.target.closest() identifies the clicked element. This reduces memory footprint from O(N) to O(1) and automatically handles dynamically inserted children without rebinding.',
        bn: 'ইভেন্ট বাবলিং কৌশলের ওপর ভিত্তি করে প্রতিটি উপাদানে আলাদা ইভেন্ট লিসেনার না বসিয়ে তাদের মূল প্যারেন্টে একটিমাত্র লিসেনার বসানোকে ইভেন্ট ডেলিগেশন বলে। কোনো চাইল্ডে ক্লিক হলে ইভেন্টটি ওপরে প্যারেন্টে ওঠে এবং e.target বা e.target.closest() দিয়ে ক্লিক হওয়া উপাদান চেনা যায়। এতে মেমোরির খরচ O(N) থেকে O(1)-এ নেমে আসে এবং নতুন উপাদান যোগ হলেও আলাদা লিসেনার বসাতে হয় না।'
      }
    },
    {
      q: {
        en: 'What causes layout thrashing (forced synchronous layout) and how do you prevent it in production code?',
        bn: 'কী কারণে লেআউট থ্র্যাশিং (বাধ্যতামূলক সিঙ্ক্রোনাস লেআউট) ঘটে এবং প্রফেশনাল কোডে কীভাবে এটি প্রতিরোধ করা যায়?'
      },
      a: {
        en: 'Layout thrashing occurs when JavaScript rapidly alternates between reading geometric layout properties (e.g. offsetHeight, getBoundingClientRect) and writing style mutations (e.g. element.style.height) in a loop. Because the write invalidates the layout, the subsequent read forces the browser to synchronously recalculate the entire page reflow immediately. It is prevented by batching: perform all DOM reads first, then execute all DOM writes in a second pass.',
        bn: 'যখন কোনো লুপে বারবার ডমের আকার পড়া (যেমন offsetHeight, getBoundingClientRect) এবং স্টাইল লেখার (যেমন element.style.height) কাজ একের পর এক করা হয়, তখন লেআউট থ্র্যাশিং ঘটে। একটি লেখার পর ব্রাউজারকে বাধ্য হয়ে তৎক্ষণাৎ পুরো পেজ নতুন করে রিফ্লো করতে হয়। এটি প্রতিরোধের উপায় হলো ব্যাচিং: প্রথমে সব রিড অপারেশন শেষ করে তারপর সব রাইট অপারেশন একবারে সম্পন্ন করা।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Figma and Miro Canvas Overlay: Managing thousands of dynamic HTML overlay badges, tooltips, and floating menus aligned to vector canvas shapes using getBoundingClientRect.',
      bn: 'ফিগোমা ও মিরো ক্যানভাস ওভারলে: getBoundingClientRect ব্যবহার করে ভেক্টর আকারের সাথে মিল রেখে হাজার হাজার ফ্লোটিং ব্যাজ, টুলটিপ ও মেনু পরিচালনা।'
    },
    {
      en: 'High-Performance Virtualized Data Grid (Ag-Grid, Handsontable): Rendering datasets of 100,000+ rows smoothly by pooling and reusing a tiny window of 20 physical DOM nodes via scroll virtualization.',
      bn: 'উচ্চগতির ভার্চুয়ালাইজড ডেটা গ্রিড: স্ক্রোল ভার্চুয়ালাইজেশনের সাহায্যে মাত্র ২০টি ডম নোড পুনর্ব্যবহার করে ১ লক্ষেরও বেশি সারির বিশালাকার ডেটাসেট ৬০ এফপিএস-এ মসৃণভাবে প্রদর্শন।'
    },
    {
      en: 'Notion & Google Docs Rich Text Editor: Implementing block-based document trees with custom caret navigation, DocumentFragment clipboard pasting, and MutationObserver change tracking.',
      bn: 'নোশন ও গুগল ডকস রিচ টেক্সট এডিটর: কাস্টম ক্যারেট মুভমেন্ট, DocumentFragment দিয়ে ক্লিপবোর্ড পেস্টিং এবং MutationObserver দিয়ে পরিবর্তনের হিস্ট্রি ট্র্যাকিং।'
    },
    {
      en: 'Shopify E-Commerce Product Filter: Using event delegation on facet sidebars to filter thousands of products instantly without memory leaks during live catalog hydration.',
      bn: 'শপিফাই ই-কমার্স প্রোডাক্ট ফিল্টার: ক্যাটালগ রেন্ডার করার সময় মেমোরি লিক এড়াতে সাইডবারের ওপর ইভেন্ট ডেলিগেশন ব্যবহার করে ফিল্টারিং পরিচালনা।'
    }
  ],
  lessons: [
    glasshouseMapLesson,
    expeditionOrchardLesson,
    graftingBenchLesson,
    pollinatorsFlightLesson,
    orchardFormsLesson,
    measuringGlassLesson,
    wildlifeStewardsLesson,
    arboretumRehearsalLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Performance Virtualized Data Grid',
        bn: 'উচ্চগতির ভার্চুয়ালাইজড ডেটা গ্রিড'
      },
      brief: {
        en: 'Architect a 60 FPS virtualized data table rendering 100,000 records using a recycled pool of 20 DOM nodes, absolute transform positioning, and container event delegation.',
        bn: 'মাত্র ২০টি পুনর্ব্যবহারযোগ্য ডম নোড, জিপিইউ ট্রান্সফর্ম এবং ইভেন্ট ডেলিগেশন ব্যবহার করে ১ লক্ষ ডেটার একটি ৬০ এফপিএস ভার্চুয়াল টেবিল তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Dynamic Modal & Form Validation Framework',
        bn: 'ডায়নামিক মোডাল ও ফর্ম ভ্যালিডেশন ফ্রেমওয়ার্ক'
      },
      brief: {
        en: 'Build an accessible modal dialog system with focus trapping, DocumentFragment markup injection, native Constraint Validation tooltips, and async FormData submission.',
        bn: 'ফোকাস ট্র্যাপিং, DocumentFragment ইনজেকশন, ব্রাউজার কনস্ট্রেইন্ট ভ্যালিডেশন এবং অ্যাসিঙ্ক FormData সাবমিশন সহ একটি অ্যাক্সেসিবল মোডাল সিস্টেম তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Batch DOM geometric reads and style writes into separate phases to eliminate layout thrashing and forced synchronous reflows.',
      bn: 'লেআউট থ্র্যাশিং ও রিফ্লো পরিহার করতে ডমের মাপ পড়া এবং স্টাইল লেখার কাজ দুটি আলাদা ধাপে ব্যাচ আকারে সম্পন্ন করুন।'
    },
    {
      en: 'Use event delegation on common parent ancestors rather than binding individual click listeners to hundreds of dynamic child elements.',
      bn: 'শত শত চাইল্ড উপাদানে আলাদা লিসেনার না লাগিয়ে তাদের মূল প্যারেন্টে একটিমাত্র লিসেনার বসিয়ে ইভেন্ট ডেলিগেশন ব্যবহার করুন।'
    },
    {
      en: 'Always prefer textContent over innerHTML when injecting untrusted user-submitted text to prevent Cross-Site Scripting (XSS) vulnerabilities.',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ রোধে ব্যবহারকারীর পাঠানো লেখা পেজে যুক্ত করার সময় innerHTML-এর বদলে সর্বদা textContent ব্যবহার করুন।'
    }
  ]
};
