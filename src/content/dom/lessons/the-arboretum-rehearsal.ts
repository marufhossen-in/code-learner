import type { Lesson } from '../../../lib/types';

export const arboretumRehearsalLesson: Lesson = {
  slug: 'the-arboretum-rehearsal',
  tech: 'dom',
  title: {
    en: 'High-Performance Data Table & Virtual List',
    bn: 'উচ্চগতির ডেটা টেবিল ও ভার্চুয়াল লিস্ট'
  },
  summary: {
    en: 'This capstone project synthesizes tree traversal, batch mutations, event delegation, and layout optimization into a production virtualized list. Directly mounting 10000 table rows into the DOM creates tens of thousands of nodes, exhausting memory and dropping framerates. Virtualization decouples dataset size from active DOM node counts by rendering only what fits inside the visible window. For example, in a 400 pixel viewport displaying rows of height 40 pixels, exactly 10 visible rows fit on screen. Adding a buffer pool yields 12 active DOM nodes that are recycled continuously during scrolling. An invisible runway spacer of 400000 pixels preserves native scrollbar ergonomics, while transform translations provide fluid 60 FPS compositor positioning. This lesson teaches virtualization math, DOM node pooling, event delegation integration, and scroll synchronization.',
    bn: 'এই ক্যাপস্টোন প্রজেক্টে ডম ট্রাভার্সাল, ব্যাচ মিউটেশন, ইভেন্ট ডেলিগেশন এবং লেআউট অপ্টিমাইজেশনকে একত্রিত করে একটি ভার্চুয়ালাইজড লিস্ট তৈরি করা হয়েছে। সরাসরি ১০০০০ সারি ডমে বসালে লক্ষাধিক নোড তৈরি হয়ে মেমোরি শেষ হয়ে যায় এবং সাইট আটকে যায়। ভার্চুয়ালাইজেশন কৌশল পুরো ডেটাসেট না এঁকে কেবল স্ক্রিনের দৃশ্যমান অংশটুকুই রেন্ডার করে। যেমন ৪০০ পিক্সেল ভিউপোর্টে ৪০ পিক্সেল উচ্চতার সারির জন্য স্ক্রিনে ঠিক ১০টি দৃশ্যমান সারি ধরে। সাথে সেফটি বাফার যোগ করে মাত্র ১২টি নোডের একটি পুল তৈরি করা হয় যা স্ক্রোল করার সময় পুনঃব্যবহৃত হয়। একটি ৪০০০০০ পিক্সেলের কৃত্রিম স্পেসার স্বাভাবিক স্ক্রোলবার তৈরি করে এবং সিএসএস transform দিয়ে ৬০ এফপিএস গতিতে উপাদানগুলো স্থানান্তর করা হয়। এই পাঠে ভার্চুয়ালাইজেশন গণিত, নোড পুলিং এবং স্ক্রোল সমন্বয় বিস্তারিত শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: DOM Virtualization Architecture',
        bn: 'মূল ধারণা: ডম ভার্চুয়ালাইজেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you render an enterprise dataset with tens of thousands of rows, traditional HTML table generation fails completely. The browser memory footprint explodes, layout reflows freeze the main thread, and typing becomes unresponsive. Virtual scrolling solves this by maintaining a tiny pool of recycled document nodes positioned via GPU transforms.',
        bn: 'আপনি যখন হাজার হাজার ডেটার বিশাল তালিকা তৈরি করবেন, তখন সাধারণ এইচটিএমএল টেবিল সম্পূর্ণ অকেজো হয়ে পড়ে। ব্রাউজার মেমোরি অতিরিক্ত বেড়ে যায়, লেআউট রিফ্লো মূল থ্রেড আটকে ফেলে এবং সাইট ব্যবহারের অনুপযোগী হয়ে যায়। ভার্চুয়াল স্ক্রোলিং মাত্র কয়েকটি ডকুমেন্ট নোডের একটি ছোট পুল বানিয়ে এবং জিপিইউ ট্রান্সফর্ম দিয়ে তাদের বারবার পুনর্ব্যবহার করে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Scrolling / Windowing',
          def: {
            en: 'The technique of rendering strictly the visible slice of a massive dataset, pooling and recycling a fixed number of DOM nodes',
            bn: 'একটি বিশাল ডেটাসেটের শুধুমাত্র দৃশ্যমান অংশটুকুই স্ক্রিনে রাখা এবং নির্দিষ্ট সংখ্যক ডম নোডকে বারবার নতুন ডেটা দিয়ে পুনর্ব্যবহার করার কৌশল'
          }
        },
        {
          term: 'The Runway Spacer',
          def: {
            en: 'An invisible wrapper element with total height set to (totalRecords * rowHeight), providing the native browser scrollbar with accurate travel distance',
            bn: 'একটি অদৃশ্য ফাঁকা উপাদান যার উচ্চতা মোট রেকর্ড গুণ সারির উচ্চতার সমান রাখা হয়, যাতে ব্রাউজারের স্বাভাবিক স্ক্রোলবার সঠিক দূরত্ব পায়'
          }
        },
        {
          term: 'Index Math (startIndex & endIndex)',
          def: {
            en: 'Calculating visible data boundaries from scrollTop: startIndex = Math.floor(scrollTop / rowHeight)',
            bn: 'স্ক্রোলের দূরত্বের ওপর ভিত্তি করে বর্তমান দৃশ্যমান প্রথম ও শেষ ডেটার ইনডেক্স গাণিতিকভাবে বের করা'
          }
        },
        {
          term: 'Node Recycling in Place',
          def: {
            en: 'Reusing existing DOM nodes by updating textContent and CSS transform: translateY rather than destroying and recreating elements',
            bn: 'নতুন উপাদান তৈরি না করে আগে থেকে থাকা নোডগুলোর লেখা এবং ট্রান্সফর্ম পজিশন পরিবর্তন করে নতুন ডেটা প্রদর্শন করা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'virtual-list-components-table',
      text: {
        en: 'Virtual List Architectural Components',
        bn: 'ভার্চুয়াল লিস্টের বিভিন্ন কাঠামোগত অংশ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Core Structural Elements Comprising a High-Performance Virtual List',
        bn: 'উচ্চগতির ভার্চুয়াল লিস্ট পরিচালনাকারী প্রধান উপাদানসমূহ'
      },
      head: [
        { en: 'Structural Component', bn: 'উপাদান' },
        { en: 'CSS / DOM Role', bn: 'ভূমিকা' },
        { en: 'Performance Benefit', bn: 'পারফরম্যান্স সুবিধা' }
      ],
      rows: [
        [
          { en: 'Viewport Container', bn: 'ভিউ পোর্ট কন্টেইনার' },
          { en: 'Fixed height with overflow-y: auto', bn: 'overflow-y: auto সহ নির্দিষ্ট উচ্চতা' },
          { en: 'Restricts active rendering boundary and captures user scroll gestures', bn: 'স্ক্রিনের দৃশ্যমান এলাকা নির্ধারণ করে এবং ব্যবহারকারীর স্ক্রোল ধরে' }
        ],
        [
          { en: 'Runway Spacer', bn: 'রানওয়ে স্পেসার' },
          { en: 'Empty div with height: totalRecords * rowHeight', bn: 'উচ্চতা: মোট রেকর্ড * সারির উচ্চতা' },
          { en: 'Generates proportional native browser scrollbar track without mounting rows', bn: 'কোনো উপাদান পেজে না বসিয়েই সঠিক আকারের স্ক্রোলবার তৈরি করে' }
        ],
        [
          { en: 'Recycled Row Pool', bn: 'রিসাইকেল্ড রো পুল' },
          { en: 'Fixed cluster of (visibleCount + buffer) elements', bn: 'নির্দিষ্ট সংখ্যক নোডের একটি ছোট গ্রুপ' },
          { en: 'Keeps DOM node count constant at O(1) regardless of dataset magnitude', bn: 'ডেটাসেট যত বড়ই হোক ডম নোডের সংখ্যা সর্বদা স্থির রাখে' }
        ],
        [
          { en: 'Transform Positioning', bn: 'ট্রান্সফর্ম পজিশন' },
          { en: 'transform: translateY(index * rowHeight)', bn: 'transform: translateY(ইনডেক্স * উচ্চতা)' },
          { en: 'Moves rows purely on GPU compositor thread, eliminating layout reflows', bn: 'কোনো রিফ্লো ছাড়া সরাসরি জিপিইউতে উপাদানগুলোকে সঠিক স্থানে সরিয়ে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Virtual Scrolling Node Pool Calculator',
        bn: 'চালনাযোগ্য সিমুলেশন: ভার্চুয়াল স্ক্রোলিং নোড পুল গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates virtualization math for 10000 records. With a 400 pixel viewport and rows of height 40 pixels, exactly 10 visible rows fit on screen, requiring an active pool of only 12 nodes:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০০০ ডেটার ভার্চুয়ালাইজেশন হিসাব করে দেখায়। ৪০০ পিক্সেল ভিউপোর্ট এবং ৪০ পিক্সেল সারির উচ্চতার ক্ষেত্রে স্ক্রিনে ঠিক ১০টি সারি ধরে, যার জন্য মাত্র ১২টি সক্রিয় নোডের পুল প্রয়োজন হয়:'
      }
    },
    {
      type: 'code',
      id: 'dom-virtual-list-sim',
      lang: 'javascript',
      code: `// DOM Virtualized List Node Pooling Engine
const totalRecords = 10000;   // Dataset length
const viewportHeight = 400;   // Height of scrollable container in px
const rowHeight = 40;         // Fixed height of each row in px
const bufferRows = 2;         // Overscan buffer rows to prevent scroll flicker

// Calculate visible rows fitting inside viewport window
const visibleRows = Math.ceil(viewportHeight / rowHeight);

// Active DOM nodes needed in memory pool
const activeNodes = visibleRows + bufferRows;

console.log('Total records in underlying dataset:', totalRecords);
// -> Total records in underlying dataset: 10000

console.log('Viewport container height in pixels:', viewportHeight);
// -> Viewport container height in pixels: 400

console.log('Fixed row height in pixels:', rowHeight);
// -> Fixed row height in pixels: 40

console.log('Calculated visible row count:', visibleRows);
// -> Calculated visible row count: 10

console.log('Active DOM nodes allocated in recycled pool:', activeNodes);
// -> Active DOM nodes allocated in recycled pool: 12`,
      caption: {
        en: 'Figure 1: Virtualizing 10000 records inside a 400 pixel viewport with 40 pixel rows requires only 12 active DOM nodes for 10 visible rows',
        bn: 'চিত্র ১: ১০০০০ রেকর্ডের জন্য ৪০০ পিক্সেল ভিউপোর্টে ৪০ পিক্সেল সারির ক্ষেত্রে ১২টি সক্রিয় ডম নোড দিয়ে ১০টি দৃশ্যমান সারি পরিচালনা করা হয়'
      }
    },
    {
      type: 'heading',
      id: 'event-delegation-integration',
      text: {
        en: 'Integrating Event Delegation with Virtualization',
        bn: 'ভার্চুয়ালাইজেশনের সাথে ইভেন্ট ডেলিগেশনের সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a virtualized list, never bind click listeners to individual row elements. Because row nodes are recycled dozens of times per second as the user scrolls, individual listeners cause memory churn. Bind a single click listener to the viewport container and resolve the clicked row using e.target.closest("[data-index]").',
        bn: 'ভার্চুয়াল তালিকায় কখনোই কোনো সারির ওপর আলাদা ক্লিক লিসেনার বসাবেন না। ব্যবহারকারী স্ক্রোল করার সময় সারিগুলো সেকেন্ডে বহুবার পুনর্ব্যবহৃত হয়, তাই আলাদা লিসেনার বসালে মেমোরি দ্রুত নষ্ট হয়। সর্বদা মূল ভিউপোর্ট কন্টেইনারে একটিমাত্র ক্লিক লিসেনার বসান এবং e.target.closest("[data-index]") দিয়ে ক্লিক করা ডেটা শনাক্ত করুন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Overscan Buffer Rows',
          def: {
            en: 'Extra rows rendered just above and below the visible window to prevent blank white flashes during rapid touchpad scrolling',
            bn: 'দৃশ্যমান এলাকার ঠিক ওপরে ও নিচে রাখা কয়েকটি অতিরিক্ত সারি যা দ্রুত স্ক্রোল করার সময় কোনো ফাঁকা ভাব আসতে দেয় না'
          }
        },
        {
          term: 'will-change: transform',
          def: {
            en: 'A CSS hint promoting recycled row elements to dedicated GPU compositor layers for lag-free translateY positioning',
            bn: 'সিএসএস ইঙ্গিত যা ব্রাউজারকে নির্দেশ দেয় উপাদানটিকে জিপিইউ লেয়ারে উন্নীত করতে যাতে মসৃণ পজিশনিং নিশ্চিত হয়'
          }
        },
        {
          term: 'DOM Node Count Invariance',
          def: {
            en: 'The architectural guarantee that the active DOM node count remains constant regardless of whether the dataset has 100 or 100000 items',
            bn: 'এমন আর্কিটেকচার যা নিশ্চিত করে ডেটাসেট ১০০ হোক বা ১০০০০০ হোক—ব্রাউজারের ভেতরের নোড সংখ্যা সর্বদা স্থির থাকবে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-virtual-nodes-calc-ex',
      kind: 'mcq',
      topic: 'Count of active nodes for 10000 records in 400px viewport',
      question: {
        en: 'According to our virtualization simulation, how many active DOM nodes are allocated to display 10000 records in a 400 pixel viewport with 40 pixel rows and 2 buffer rows?',
        bn: 'আমাদের ভার্চুয়ালাইজেশন সিমুলেশন অনুযায়ী ১০০০০ ডেটার ক্ষেত্রে ৪০০ পিক্সেল ভিউপোর্ট এবং ৪০ পিক্সেল সারির উচ্চতায় ২টি বাফার সহ কয়টি সক্রিয় ডম নোড প্রয়োজন হয়?'
      },
      options: [
        {
          en: '12 active DOM nodes (10 visible + 2 buffer)',
          bn: '১২টি সক্রিয় ডম নোড (১০টি দৃশ্যমান + ২টি বাফার)'
        },
        {
          en: '10000 active nodes',
          bn: '১০০০০টি সক্রিয় নোড'
        },
        {
          en: '400 active nodes',
          bn: '৪০০টি সক্রিয় নোড'
        },
        {
          en: '40 active nodes',
          bn: '৪০টি সক্রিয় নোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Math.ceil(400 / 40) = 10 rows + 2 buffer rows = 12 nodes.',
        bn: '৪০০ ভাগ ৪০ সমান ১০টি দৃশ্যমান সারি + ২টি বাফার সারি = ১২টি নোড।'
      },
      explanation: {
        en: 'Visible rows = 400 / 40 = 10. Adding 2 buffer rows yields a fixed pool of exactly 12 active DOM elements.',
        bn: 'দৃশ্যমান সারি = ৪০০ / ৪০ = ১০। সাথে ২টি বাফার যোগ করলে মেমোরিতে মাত্র ১২টি ডম এলিমেন্টের পুল তৈরি হয়।'
      }
    },
    {
      id: 'dom-runway-height-calc-ex',
      kind: 'mcq',
      topic: 'Calculating runway spacer height for native scrollbars',
      question: {
        en: 'If a virtualized dataset has 10000 items and each row has a fixed height of 40 pixels, what height must be assigned to the runway spacer element?',
        bn: 'একটি ভার্চুয়াল তালিকায় যদি ১০০০০ ডেটা থাকে এবং প্রতিটি সারির উচ্চতা ৪০ পিক্সেল হয়, তবে রানওয়ে স্পেসার উপাদানের উচ্চতা কত পিক্সেল দিতে হবে?'
      },
      options: [
        {
          en: '400000 pixels (10000 * 40)',
          bn: '৪০০০০০ পিক্সেল (১০০০০ * ৪০)'
        },
        {
          en: '10000 pixels',
          bn: '১০০০০ পিক্সেল'
        },
        {
          en: '400 pixels',
          bn: '৪০০ পিক্সেল'
        },
        {
          en: '40 pixels',
          bn: '৪০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply 10000 records by 40 pixels per row.',
        bn: '১০০০০ রেকর্ডকে ৪০ পিক্সেল দিয়ে গুণ করার কথা ভাবুন।'
      },
      explanation: {
        en: '10000 * 40 = 400000 pixels, providing the native browser scrollbar with authentic proportional scroll travel.',
        bn: '১০০০০ * ৪০ = ৪০০০০০ পিক্সেল, যা ব্রাউজারের আসল স্ক্রোলবারকে নিখুঁত অনুপাত প্রদান করে।'
      }
    },
    {
      id: 'dom-virtual-delegation-ex',
      kind: 'mcq',
      topic: 'Why event delegation is required in virtualized lists',
      question: {
        en: 'Why is attaching individual event listeners to each row prohibited in high-performance virtualized lists?',
        bn: 'উচ্চগতির ভার্চুয়াল তালিকায় প্রতিটি সারির ওপর আলাদা ইভেন্ট লিসেনার বসানো কেন সম্পূর্ণ নিষিদ্ধ?'
      },
      options: [
        {
          en: 'Because row DOM nodes are recycled dozens of times per second during scroll, binding individual listeners causes rapid memory thrashing and detached listener leaks',
          bn: 'স্ক্রোল করার সময় সারিগুলো প্রতি সেকেন্ডে বহুবার ডেটা পরিবর্তন করে পুনর্ব্যবহৃত হয়, তাই আলাদা লিসেনার বসালে মারাত্মক মেমোরি লিক ও ল্যাগ তৈরি হয়'
        },
        {
          en: 'EventListeners cannot be placed on div elements in modern HTML',
          bn: 'ডিভে লিসেনার বসানো যায় না'
        },
        {
          en: 'The browser changes the background color to red',
          bn: 'ব্রাউজার লাল রঙ দেখায়'
        },
        {
          en: 'Scrolling is disabled automatically by the browser',
          bn: 'ব্রাউজার স্ক্রোলিং বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reused nodes churn listeners; use a single parent delegated listener.',
        bn: 'বারবার ব্যবহৃত নোডে লিসেনার নষ্ট হওয়া এড়াতে প্যারেন্ট ডেলিগেশনের কথা ভাবুন।'
      },
      explanation: {
        en: 'Virtual lists recycle nodes constantly. Event delegation on the container handles clicks uniformly without rebinding listeners.',
        bn: 'ভার্চুয়াল নোডগুলো অনবরত পুনর্ব্যবহৃত হয়। মূল কন্টেইনারে ১টি লিসেনার বসালে কোনো রিবাইন্ডিং ছাড়াই সবকিছু সুন্দরভাবে নিয়ন্ত্রিত হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-arboretum-rehearsal',
    title: {
      en: 'DOM Virtualization & Data Table Quiz',
      bn: 'ডম ভার্চুয়ালাইজেশন ও ডেটা টেবিল কুইজ'
    },
    questions: [
      {
        id: 'q-dom-virtual-start-index',
        kind: 'mcq',
        topic: 'Formula for calculating virtual list startIndex from scrollTop',
        question: {
          en: 'Which mathematical formula computes the startIndex of the first visible data item from the container scrollTop offset and rowHeight?',
          bn: 'কন্টেইনারের scrollTop এবং সারির rowHeight থেকে প্রথম দৃশ্যমান ডেটার startIndex বের করার সঠিক গাণিতিক সূত্র কোনটি?'
        },
        options: [
          {
            en: 'Math.floor(scrollTop / rowHeight)',
            bn: 'Math.floor(scrollTop / rowHeight)'
          },
          {
            en: 'scrollTop * rowHeight',
            bn: 'scrollTop * rowHeight'
          },
          {
            en: 'Math.ceil(scrollTop * rowHeight)',
            bn: 'Math.ceil(scrollTop * rowHeight)'
          },
          {
            en: 'scrollTop + rowHeight',
            bn: 'scrollTop + rowHeight'
          }
        ],
        answer: 0,
        hint: {
          en: 'Divide the scroll offset by the row height and floor it.',
          bn: 'স্ক্রোলের মানকে সারির উচ্চতা দিয়ে ভাগ করে ফ্লোর করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Dividing scrollTop by rowHeight determines how many rows have scrolled out of view, identifying the current top visible index.',
          bn: 'scrollTop-কে rowHeight দিয়ে ভাগ করলে জানা যায় কয়টি সারি ওপরের দিকে স্ক্রোল হয়ে বাইরে চলে গেছে।'
        }
      },
      {
        id: 'q-dom-overscan-buffer-flicker',
        kind: 'mcq',
        topic: 'Purpose of overscan buffer rows in virtual scrolling',
        question: {
          en: 'What visual artifact is prevented by adding overscan buffer rows above and below the visible viewport window?',
          bn: 'দৃশ্যমান ভিউপোর্টের ওপরে ও নিচে অতিরিক্ত বাফার সারি রাখার মাধ্যমে কোন ভিজ্যুয়াল সমস্যা প্রতিরোধ করা হয়?'
        },
        options: [
          {
            en: 'Blank white flashing during rapid touchpad or mouse-wheel scrolling before recycled nodes can reposition',
            bn: 'মাউস হুইল বা টাচপ্যাডে খুব দ্রুত স্ক্রোল করার সময় নোডগুলো স্থানান্তরিত হওয়ার আগে ক্ষণিকের জন্য ফাঁকা সাদা ভাব দেখা দেওয়া'
          },
          {
            en: 'The browser window minimizing automatically',
            bn: 'উইন্ডো নিজে থেকেই মিনিমাইজ হয়ে যাওয়া'
          },
          {
            en: 'Font sizes changing automatically',
            bn: 'ফন্ট সাইজ একা একাই বদলে যাওয়া'
          },
          {
            en: 'The computer sound turning off',
            bn: 'সাউন্ড বন্ধ হয়ে যাওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Eliminates blank white flashes during rapid scrolling.',
          bn: 'দ্রুত স্ক্রোল করার সময় ফাঁকা সাদা ভাব আসা রোধ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Buffer rows provide an overscan margin so elements are already positioned when the user rapidly scrolls into new territory.',
          bn: 'বাফার সারি থাকার কারণে ব্যবহারকারী দ্রুত স্ক্রোল করলেও আগে থেকেই তৈরি থাকা সারি সামনে চলে আসে এবং কোনো ফ্লিকারিং হয় না।'
        }
      },
      {
        id: 'q-dom-gpu-translatey-positioning',
        kind: 'mcq',
        topic: 'Why translateY is used to position recycled rows',
        question: {
          en: 'Why do production virtual scrollbars position recycled rows with "transform: translateY(offset px)" rather than "top: offset px"?',
          bn: 'প্রফেশনাল ভার্চুয়াল স্ক্রোলবারে "top: offset px"-এর বদলে কেন "transform: translateY(offset px)" দিয়ে সারি পজিশন করা হয়?'
        },
        options: [
          {
            en: 'translateY runs directly on the GPU compositor thread without triggering layout reflows on surrounding elements, maintaining a rock-solid 60 FPS',
            bn: 'translateY আশেপাশের উপাদানে কোনো রিফ্লো না ঘটিয়ে সরাসরি জিপিইউ কম্পোজিটর থ্রেডে চলে, ফলে নিখুঁত ৬০ এফপিএস মসৃণতা বজায় থাকে'
          },
          {
            en: 'translateY reduces network bandwidth usage',
            bn: 'translateY ইন্টারনেটের ব্যান্ডউইথ খরচ কমায়'
          },
          {
            en: 'top is banned in modern CSS standards',
            bn: 'আধুনিক সিএসএসে top নিষিদ্ধ'
          },
          {
            en: 'translateY automatically translates text into foreign languages',
            bn: 'translateY লেখা অনুবাদ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Runs on the GPU compositor thread without triggering reflow.',
          bn: 'লেআউট রিফ্লো না ঘটিয়ে জিপিইউতে মসৃণভাবে চলার কথা ভাবুন।'
        },
        explanation: {
          en: 'CSS transforms do not cause layout recalculation or reflow, allowing the hardware compositor to reposition elements at 60 FPS.',
          bn: 'transform কোনো রিফ্লো বা লেআউট পরিবর্তন ঘটায় না, ফলে শতভাগ ৬০ এফপিএস ফ্রেমরেটে উপাদানগুলো অবস্থান বদলাতে পারে।'
        }
      },
      {
        id: 'q-dom-virtual-list-memory-scaling',
        kind: 'mcq',
        topic: 'Algorithmic memory complexity of virtualized DOM lists',
        question: {
          en: 'What is the memory complexity of a virtual list with respect to dataset size N?',
          bn: 'ডেটাসেটের আকার N-এর সাপেক্ষে একটি ভার্চুয়াল লিস্টের মেমোরি জটিলতা (Complexity) কত?'
        },
        options: [
          {
            en: 'O(1) constant DOM nodes, because the node count is fixed by viewport height regardless of dataset magnitude',
            bn: 'O(1) ধ্রুবক ডম নোড, কারণ ডেটাসেট যত বড়ই হোক নোডের সংখ্যা কেবল ভিউপোর্টের উচ্চতার ওপর নির্ভর করে স্থির থাকে'
          },
          {
            en: 'O(N) linear DOM nodes',
            bn: 'O(N) রৈখিক ডম নোড'
          },
          {
            en: 'O(N^2) quadratic DOM nodes',
            bn: 'O(N^2) দ্বিঘাত ডম নোড'
          },
          {
            en: 'O(log N) logarithmic DOM nodes',
            bn: 'O(log N) লগারিদমিক ডম নোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'O(1) constant: node count is fixed by viewport dimensions.',
          bn: 'O(1) ধ্রুবক: ভিউপোর্টের আকারের ওপর ভিত্তি করে নোড সংখ্যা স্থির থাকার কথা ভাবুন।'
        },
        explanation: {
          en: 'Virtual lists maintain a constant pool of DOM elements proportional strictly to the viewport height, achieving O(1) DOM memory scaling.',
          bn: 'ভার্চুয়াল লিস্টে ডেটাসেটের আকার যাই হোক না কেন ডম নোডের সংখ্যা সর্বদা ধ্রুবক O(1) থাকে।'
        }
      }
    ]
  }
};
