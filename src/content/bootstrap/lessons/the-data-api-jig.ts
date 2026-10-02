import type { Lesson } from '../../../lib/types';

export const TheDataApiJigLesson: Lesson = {
  slug: 'the-data-api-jig',
  tech: 'bootstrap',
  title: {
    en: 'The Data-Attribute API, JavaScript Plugins & Popper Integration',
    bn: 'ডাটা-অ্যাট্রিবিউট এপিআই, জাভাস্ক্রিপ্ট প্লাগইন ও পপার ইন্টিগ্রেশন'
  },
  summary: {
    en: 'Bootstrap provides an elegant declarative runtime called the Data-Attribute API that powers dynamic dropdowns, collapsible drawers, tabs, and modals without authoring a single line of custom JavaScript. In Bootstrap 5, all attributes are strictly namespaced with data-bs-* to prevent collision with other frontend frameworks. Under the hood, Bootstrap avoids the performance overhead of attaching event listeners to individual interactive elements. Instead, it mounts 1 centralized event listener onto the document, delegating clicks across all matching triggers. This lesson covers declarative attribute markup, imperative JavaScript initialization, lifecycle events including cancellable show events, and Popper.js positioning for tooltips and popovers.',
    bn: 'বুটস্ট্র্যাপে রয়েছে এক চমৎকার ডিক্লারেটিভ রানটাইম যার নাম ডাটা-অ্যাট্রিবিউট এপিআই (Data-Attribute API)। এর মাধ্যমে কোনো জাভাস্ক্রিপ্ট কোড না লিখে কেবল এইচটিএমএল অ্যাট্রিবিউট দিয়েই ড্রপডাউন, ট্যাব ও মোডালের মতো জটিল ইন্টারঅ্যাকশন চালানো যায়। বুটস্ট্র্যাপ ৫ সংস্করণে অন্যান্য লাইব্রেরির সাথে সংঘাত এড়াতে সব অ্যাট্রিবিউটে data-bs-* নেমস্পেস ব্যবহার করা হয়েছে। পর্দার আড়ালে পারফরম্যান্স নিখুঁত রাখতে প্রতিটি উপাদানে আলাদা লিসেনার না বসিয়ে পুরো ডকুমেন্টে মাত্র ১টি কেন্দ্রীভূত লিসেনার বসিয়ে ইভেন্ট ডেলিগেশন করা হয়। এই পাঠে ডাটা অ্যাট্রিবিউট, জাভাস্ক্রিপ্ট দিয়ে নিয়ন্ত্রণ, প্রি-ট্রানজিশন ইভেন্ট এবং পপার (Popper.js) দিয়ে টুলটিপ সাজানোর কৌশল বিস্তারিত আলোচনা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Zero-Script Declarative Behavior',
        bn: 'মূল ধারণা: স্ক্রিপ্টহীন ঘোষণামূলক ইন্টারঅ্যাকশন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you create complex user interfaces, writing repetitive JavaScript click handlers for every dropdown and collapsible panel quickly clutters client codebases. Bootstrap solves this with the Data-Attribute API: simply declaring data-bs-toggle="dropdown" or data-bs-toggle="collapse" instructs Bootstrap to handle state transitions automatically. This declarative syntax decouples template markup from application logic.',
        bn: 'আপনি যখন জটিল ইউজার ইন্টারফেস তৈরি করেন, প্রতিটি ড্রপডাউন বা প্যানেলের জন্য আলাদা জাভাস্ক্রিপ্ট ক্লিক হ্যান্ডলার লিখতে গেলে কোড দ্রুত বিশৃঙ্খল হয়ে পড়ে। বুটস্ট্র্যাপ ডাটা-অ্যাট্রিবিউট এপিআই দিয়ে এর সহজ সমাধান করেছে: এইচটিএমএলে data-bs-toggle="dropdown" বা data-bs-toggle="collapse" লিখে দিলেই বাকি সব ট্রানজিশন বুটস্ট্র্যাপ নিজে থেকেই পরিচালনা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Data-Attribute API (data-bs-*)',
          def: {
            en: 'HTML5 data attributes parsed by Bootstrap to bind UI elements to JavaScript plugin behaviors without custom scripts',
            bn: 'এইচটিএমএল-৫ ডাটা অ্যাট্রিবিউট যা কোনো কাস্টম কোড ছাড়াই উপাদানকে বুটস্ট্র্যাপের প্লাগইন ফিচারের সাথে যুক্ত করে'
          }
        },
        {
          term: 'Event Delegation Architecture',
          def: {
            en: 'A high-performance pattern attaching a single event listener to the root document rather than individual listeners on every DOM node',
            bn: 'একটি উচ্চগতির পদ্ধতি যেখানে প্রতিটি উপাদানে আলাদা লিসেনার না রেখে মূল ডকুমেন্টে একটি একক লিসেনারের মাধ্যমে সব ক্লিক হ্যান্ডেল করা হয়'
          }
        },
        {
          term: 'Lifecycle Events (show, shown, hide, hidden)',
          def: {
            en: 'Custom events dispatched before and after CSS transitions, allowing developers to intercept and customize component states',
            bn: 'সিএসএস ট্রানজিশনের আগে ও পরে চলা বিশেষ ইভেন্ট, যার মাধ্যমে উপাদান খোলার আগে বা পরে কাস্টম কাজ চালানো যায়'
          }
        },
        {
          term: 'Popper.js Positioning Engine',
          def: {
            en: 'The underlying positioning library that calculates dynamic coordinates, flip behavior, and offsets for tooltips and dropdowns',
            bn: 'একটি বিশেষ লাইব্রেরি যা ড্রপডাউন ও টুলটিপকে পর্দার কোণ বা বাউন্ডারি অনুযায়ী সঠিক অবস্থানে বসিয়ে দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'lifecycle-events-table',
      text: {
        en: 'Bootstrap Plugin Lifecycle Events',
        bn: 'বুটস্ট্র্যাপ প্লাগইন লাইফসাইকেল ইভেন্টসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Execution Timing and Capabilities of Component Lifecycle Events',
        bn: 'কম্পোনেন্ট লাইফসাইকেল ইভেন্টের সময় ও কার্যকারিতা'
      },
      head: [
        { en: 'Event Name', bn: 'ইভেন্টের নাম' },
        { en: 'Timing & Lifecycle Stage', bn: 'চলার সময় ও ধাপ' },
        { en: 'Cancellable & Primary Use Case', bn: 'বাতিলযোগ্যতা ও ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'show.bs.modal / show.bs.collapse', bn: 'show.bs.modal / show.bs.collapse' },
          { en: 'Fires immediately when the show instance method is invoked, before animation starts', bn: 'অ্যানিমেশন শুরুর একদম আগে, খোলার নির্দেশ পেলেই সাথে সাথে চলে' },
          { en: 'Yes (via event.preventDefault()); used to intercept and validate conditions before revealing UI', bn: 'হ্যাঁ (event.preventDefault() দিয়ে বাতিল করা যায়); শর্ত পূরণ না হলে খোলা আটকাতে' }
        ],
        [
          { en: 'shown.bs.modal / shown.bs.collapse', bn: 'shown.bs.modal / shown.bs.collapse' },
          { en: 'Fires after the CSS fade or slide transition completes and the element is fully visible', bn: 'সিএসএস ফেড বা স্লাইড অ্যানিমেশন শেষ হয়ে উপাদান পুরোপুরি দৃশ্যমান হলে চলে' },
          { en: 'No; ideal for setting programmatic focus or triggering chart redraws', bn: 'না; কোনো ইনপুটে ফোকাস দেওয়া বা ডেটা লোড করার জন্য উপযুক্ত' }
        ],
        [
          { en: 'hide.bs.modal / hide.bs.collapse', bn: 'hide.bs.modal / hide.bs.collapse' },
          { en: 'Fires immediately when the hide method is called, before exit animations begin', bn: 'বন্ধ করার নির্দেশ আসার সাথে সাথে বন্ধের অ্যানিমেশন শুরুর আগে চলে' },
          { en: 'Yes; used to warn users about unsaved form data before closing', bn: 'হ্যাঁ; সেভ না করা ডেটা থাকলে ব্যবহারকারীকে সতর্ক করতে এবং বন্ধ আটকাতে' }
        ],
        [
          { en: 'hidden.bs.modal / hidden.bs.collapse', bn: 'hidden.bs.modal / hidden.bs.collapse' },
          { en: 'Fires after the element has finished its exit transition and is removed from view', bn: 'উপাদানটি পুরোপুরি বন্ধ হয়ে পর্দা থেকে অদৃশ্য হওয়ার পর চলে' },
          { en: 'No; ideal for resetting form fields and destroying temporary memory buffers', bn: 'না; ফর্মের লেখা মুছে পরিষ্কার করা বা মেমোরি খালি করার জন্য ব্যবহৃত হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Event Delegation Efficiency Benchmark',
        bn: 'চালনাযোগ্য সিমুলেশন: ইভেন্ট ডেলিগেশন গতি ও দক্ষতা বেঞ্চমার্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script benchmarks the architectural memory advantage of Bootstrap single-listener event delegation across 100 interactive UI triggers:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০টি ইন্টারঅ্যাকটিভ উপাদানে বুটস্ট্র্যাপের সিঙ্গেল-লিসেনার ইভেন্ট ডেলিগেশনের মেমোরি ও লিসেনার সাশ্রয়ের হিসেব দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-delegation-sim',
      lang: 'javascript',
      code: `// Bootstrap Event Delegation vs Direct Listener Benchmark
const triggerCount = 100; // 100 interactive dropdown togglers on page

// Direct binding pattern creates 1 listener per element
const directListeners = triggerCount;

// Bootstrap Data-API delegation mounts 1 single document listener
const delegatedListeners = 1;

const savedListeners = directListeners - delegatedListeners;

console.log('Total interactive component triggers on page:', triggerCount);
// -> Total interactive component triggers on page: 100

console.log('Listener count in naive direct-binding architecture:', directListeners);
// -> Listener count in naive direct-binding architecture: 100

console.log('Listener count in Bootstrap Data-API delegated architecture:', delegatedListeners);
// -> Listener count in Bootstrap Data-API delegated architecture: 1

console.log('Total event listener objects saved from browser memory:', savedListeners);
// -> Total event listener objects saved from browser memory: 99`,
      caption: {
        en: 'Figure 1: Event delegation handles 100 component triggers using 1 single document listener, saving 99 event registrations from browser memory',
        bn: 'চিত্র ১: ইভেন্ট ডেলিগেশন ১০০টি টগল বোতামের জন্য ডকুমেন্টে মাত্র ১টি লিসেনার চালায়, যা মেমোরি থেকে ৯৯টি অতিরিক্ত লিসেনার বাঁচিয়ে দেয়'
      }
    },
    {
      type: 'heading',
      id: 'imperative-javascript-guide',
      text: {
        en: 'Imperative JavaScript and Opt-In Plugins',
        bn: 'ইমপারেটিভ জাভাস্ক্রিপ্ট ও অপ্ট-ইন প্লাগইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While dropdowns and modals activate automatically via data attributes, performance-intensive components like Tooltips and Popovers require explicit opt-in initialization. Because measuring element bounds for Popper computations on hundreds of DOM nodes causes layout thrashing, developers must initialize tooltips manually in JavaScript:',
        bn: 'মোডাল বা ড্রপডাউন ডাটা অ্যাট্রিবিউট দিয়ে নিজে চালু হলেও টুলটিপ (Tooltip) এবং পপওভার (Popover) নিজে থেকে চালু হয় না। পেজের শত শত উপাদানে পপারের গাণিতিক হিসেব চালালে ব্রাউজার ধীরগতির হতে পারে, তাই পারফরম্যান্স ভালো রাখতে জাভাস্ক্রিপ্ট দিয়ে টুলটিপ সক্রিয় করতে হয়:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Imperative Instance Construction',
          def: {
            en: 'Creating a plugin controller in script using new bootstrap.Modal(element, { backdrop: "static" })',
            bn: 'কোড লিখে জাভাস্ক্রিপ্টের মাধ্যমে প্লাগইন চালু করা যেমন new bootstrap.Modal(el)'
          }
        },
        {
          term: 'getInstance vs getOrCreateInstance',
          def: {
            en: 'Static methods to retrieve an existing Bootstrap instance on a DOM node without creating duplicate event bindings',
            bn: 'কোনো ডিভে আগে তৈরি হওয়া বুটস্ট্র্যাপ অবজেক্ট খুঁজে বের করার নিরাপদ মেথড যাতে ডুপ্লিকেট না হয়'
          }
        },
        {
          term: 'event.relatedTarget',
          def: {
            en: 'A property on Bootstrap lifecycle events pointing to the exact trigger button that opened the modal or dropdown',
            bn: 'বুটস্ট্র্যাপ ইভেন্টের একটি প্রপার্টি যা ঠিক কোন বোতামটিতে ক্লিক করে মোডাল বা ড্রপডাউন খোলা হয়েছে তা নির্দেশ করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-delegation-calc-ex',
      kind: 'mcq',
      topic: 'Event delegation savings in the Data-Attribute API',
      question: {
        en: 'In an application with 100 interactive buttons, how many event listeners does the Bootstrap Data-Attribute API attach to the document?',
        bn: '১০০টি বোতাম বিশিষ্ট একটি ওয়েব পেজে বুটস্ট্র্যাপ ডাটা-অ্যাট্রিবিউট এপিআই ডকুমেন্টে কয়টি ইভেন্ট লিসেনার যুক্ত করে?'
      },
      options: [
        {
          en: '1 single delegated event listener (saving 99 registrations)',
          bn: '১টি মাত্র কেন্দ্রীভূত লিসেনার (৯৯টি লিসেনার সাশ্রয় করে)'
        },
        {
          en: '100 separate listeners',
          bn: '১০০টি আলাদা আলাদা লিসেনার'
        },
        {
          en: '500 listeners',
          bn: '৫০০টি লিসেনার'
        },
        {
          en: '0 listeners (it uses magic)',
          bn: '০টি লিসেনার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Event delegation handles all triggers via 1 document listener.',
        bn: '১টি একক লিসেনারের মাধ্যমে সব পরিচালনার কথা ভাবুন।'
      },
      explanation: {
        en: 'By listening on the document and delegating through event bubbling, 1 single listener handles all 100 triggers seamlessly.',
        bn: 'ইভেন্ট বাবলিং পদ্ধতির কারণে ডকুমেন্টে মাত্র ১টি লিসেনার রাখলেই ১০০টি বোতাম সুন্দরভাবে কাজ করে।'
      }
    },
    {
      id: 'bs-data-namespace-ex',
      kind: 'mcq',
      topic: 'Why Bootstrap 5 namespaced data attributes to data-bs-*',
      question: {
        en: 'Why did Bootstrap 5 update its data attributes from data-toggle to data-bs-toggle?',
        bn: 'বুটস্ট্র্যাপ ৫ কেন data-toggle বদলে data-bs-toggle নেমস্পেস চালু করেছে?'
      },
      options: [
        {
          en: 'To namespace all attributes under bs to prevent collision with other JavaScript libraries or custom application code',
          bn: 'অন্যান্য জাভাস্ক্রিপ্ট লাইব্রেরি বা নিজস্ব কোডের সাথে নাম যেন গুলিয়ে না যায় সেজন্য bs নেমস্পেস যুক্ত করা হয়েছে'
        },
        {
          en: 'To make the HTML file size twice as large',
          bn: 'এইচটিএমএল ফাইলের সাইজ দ্বিগুণ করার জন্য'
        },
        {
          en: 'Because data-toggle was banned by the W3C',
          bn: 'কারণ data-toggle কে W3C নিষিদ্ধ ঘোষণা করেছে'
        },
        {
          en: 'To prevent users from opening web pages on Apple iPhones',
          bn: 'আইফোনে পেজ খোলা বন্ধ করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Namespacing avoids collisions with third-party libraries.',
        bn: 'অন্যান্য ফ্রেমওয়ার্কের সাথে সংঘাত এড়ানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'Namespacing attributes with data-bs-* ensures that Bootstrap never interferes with other UI frameworks running on the same webpage.',
        bn: 'data-bs-* নেমস্পেস থাকায় একই পেজে অন্য কোনো স্ক্রিপ্ট থাকলেও বুটস্ট্র্যাপের সাথে কোনো দ্বন্দ্ব বাঁধে না।'
      }
    },
    {
      id: 'bs-tooltip-optin-ex',
      kind: 'mcq',
      topic: 'Why Tooltips and Popovers require manual opt-in initialization',
      question: {
        en: 'Why do Bootstrap Tooltips and Popovers require manual JavaScript initialization rather than activating purely via data attributes?',
        bn: 'টুলটিপ ও পপওভার নিজে নিজে চালু না হয়ে কেন জাভাস্ক্রিপ্ট দিয়ে সক্রিয় করতে হয়?'
      },
      options: [
        {
          en: 'For performance reasons: computing Popper.js floating coordinates on every page element during load causes severe rendering lag',
          bn: 'উচ্চগতির পারফরম্যান্স বজায় রাখতে: পেজ লোডের সময় সব উপাদানে পপারের পজিশন মাপতে গেলে ব্রাউজার আটকে যেতে পারে'
        },
        {
          en: 'Because tooltips cannot display text in English',
          bn: 'কারণ টুলটিপ ইংরেজি লেখা দেখাতে পারে না'
        },
        {
          en: 'Tooltips are copyrighted and require a paid license',
          bn: 'টুলটিপ চালানোর জন্য আলাদা লাইসেন্স ফি দিতে হয়'
        },
        {
          en: 'Modern browsers block all tooltip elements by default',
          bn: 'আধুনিক ব্রাউজার সব টুলটিপ নিজে থেকেই ব্লক করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Popper coordinate calculations are performance intensive.',
        bn: 'অপ্রয়োজনীয় জটিল গণনার কারণে সাইট ধীরগতি হওয়া এড়ানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'Scanning and calculating Popper floating boundaries on hundreds of elements degrades performance, so Bootstrap keeps tooltips strictly opt-in.',
        bn: 'পারফরম্যান্স ভালো রাখতেই বুটস্ট্র্যাপ টুলটিপকে স্বয়ংক্রিয় না রেখে ডেভেলপারদের ইচ্ছাধীন করেছে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-data-api-jig',
    title: {
      en: 'Bootstrap JavaScript & Data-Attribute API Quiz',
      bn: 'বুটস্ট্র্যাপ জাভাস্ক্রিপ্ট ও ডাটা-অ্যাট্রিবিউট এপিআই কুইজ'
    },
    questions: [
      {
        id: 'q-bs-prevent-default-modal',
        kind: 'mcq',
        topic: 'Cancelling modal open via lifecycle events',
        question: {
          en: 'How can a developer prevent a Bootstrap modal from opening if an authentication condition is not met?',
          bn: 'ব্যবহারকারী লগইন না থাকলে ডেভেলপার কীভাবে একটি বুটস্ট্র্যাপ মোডাল খোলা আটকে দিতে পারেন?'
        },
        options: [
          {
            en: 'Listen to the show.bs.modal event and call event.preventDefault() inside the listener callback',
            bn: 'show.bs.modal ইভেন্ট শুনে তার ভেতরে event.preventDefault() কল করে দেওয়া'
          },
          {
            en: 'Delete the entire modal HTML from the browser using CSS',
            bn: 'সিএসএস দিয়ে মোডালের এইচটিএমএল কোড মুছে ফেলা'
          },
          {
            en: 'Turn off the computer screen monitor',
            bn: 'কম্পিউটার মনিটর বন্ধ করে দেওয়া'
          },
          {
            en: 'Listen to the hidden.bs.modal event and print the web page',
            bn: 'hidden.bs.modal ইভেন্ট শুনে পেজ প্রিন্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'The pre-transition show event can be cancelled with preventDefault().',
          bn: 'খোলার ঠিক আগের show ইভেন্টে preventDefault() দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Pre-transition lifecycle events (show and hide) are cancellable via preventDefault(), allowing developers to enforce validation gates.',
          bn: 'show বা hide ইভেন্টে preventDefault() কল করলে বুটস্ট্র্যাপ ট্রানজিশন থামিয়ে দেয় এবং মোডাল খোলে না।'
        }
      },
      {
        id: 'q-bs-related-target-property',
        kind: 'mcq',
        topic: 'Identifying the trigger element via event.relatedTarget',
        question: {
          en: 'Inside a shown.bs.modal event listener, what does event.relatedTarget reference?',
          bn: 'shown.bs.modal ইভেন্ট লিসেনারের ভেতরে event.relatedTarget কাকে নির্দেশ করে?'
        },
        options: [
          {
            en: 'The exact button or link element that was clicked to trigger the modal opening',
            bn: 'ঠিক যে বোতাম বা লিঙ্কে ক্লিক করে মোডালটি খোলা হয়েছিল সেই উপাদানটিকে'
          },
          {
            en: 'The user operating system desktop window',
            bn: 'অপারেটিং সিস্টেমের ডেস্কটপ উইন্ডোকে'
          },
          {
            en: 'The website favicon image file',
            bn: 'ওয়েবসাইটের ফেভিকন ছবিকে'
          },
          {
            en: 'The web server IP address',
            bn: 'সার্ভারের আইপি ঠিকানাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The trigger element that launched the modal.',
          bn: 'যে বোতাম চেপে মোডাল খোলা হয়েছিল তার কথা ভাবুন।'
        },
        explanation: {
          en: 'event.relatedTarget gives developers direct access to the opener button, making it easy to read data attributes (like item ID) into the modal.',
          bn: 'এর মাধ্যমে ক্লিক করা বোতামের ডাটা পড়ে সহজেই মোডালের ভেতরে নির্দিষ্ট তথ্য দেখানো যায়।'
        }
      },
      {
        id: 'q-bs-popper-flip-behavior',
        kind: 'mcq',
        topic: 'Popper.js dynamic flipping and overflow prevention',
        question: {
          en: 'What problem does the integrated Popper.js positioning engine solve for Bootstrap dropdowns and tooltips?',
          bn: 'বুটস্ট্র্যাপের সাথে যুক্ত পপার (Popper.js) ইঞ্জিন ড্রপডাউন ও টুলটিপের কোন সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It detects viewport boundaries and dynamically flips menus (e.g. from bottom to top) so tooltips never clip off-screen',
            bn: 'এটি স্ক্রিনের শেষ সীমানা শনাক্ত করে ড্রপডাউনকে নিজে থেকে উল্টে দেয় যাতে মেনু স্ক্রিনের বাইরে কেটে না যায়'
          },
          {
            en: 'It speeds up database SQL queries on the backend server',
            bn: 'এটি সার্ভারের ডাটাবেসের কাজের গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It compresses MP3 audio files during playback',
            bn: 'এটি অডিও ফাইলের আকার ছোট করে'
          },
          {
            en: 'It translates user passwords into ancient hieroglyphics',
            bn: 'এটি পাসওয়ার্ডকে ছবিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Boundary collision detection and dynamic repositioning.',
          bn: 'পর্দার শেষ প্রান্তে আটকে না গিয়ে নিজে নিজে দিক বদলানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Popper calculates real-time geometry to prevent dropdowns from overflowing off the bottom or sides of the visible screen.',
          bn: 'পপার নিচে জায়গা না থাকলে নিজে থেকেই ড্রপডাউনকে উপরে খুলে দেয়, ফলে কোনো লেখা কাটা পড়ে না।'
        }
      },
      {
        id: 'q-bs-dispose-method',
        kind: 'mcq',
        topic: 'Cleaning up component instances using dispose()',
        question: {
          en: 'Why should single-page application developers invoke modalInstance.dispose() when unmounting a view in frameworks like React or Vue?',
          bn: 'রিঅ্যাক্ট বা ভিউ-এর মতো অ্যাপ্লিকেশনে পেজ বদলানোর সময় কেন modalInstance.dispose() কল করা উচিত?'
        },
        options: [
          {
            en: 'To remove internal event listeners and destroy DOM references, preventing memory leaks in single-page applications',
            bn: 'সব লিসেনার সরিয়ে মেমোরি খালি করতে যাতে অ্যাপ্লিকেশনে মেমোরি লিক না ঘটে'
          },
          {
            en: 'To delete the user account permanently',
            bn: 'ব্যবহারকারীর অ্যাকাউন্ট চিরতরে মুছে ফেলার জন্য'
          },
          {
            en: 'To close the web browser application',
            bn: 'ব্রাউজার সফটওয়্যারটি পুরোপুরি বন্ধ করার জন্য'
          },
          {
            en: 'Because JavaScript will crash if dispose is omitted',
            bn: 'কারণ dispose না দিলে জাভাস্ক্রিপ্ট ক্র্যাশ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preventing memory leaks by cleaning up event listeners.',
          bn: 'মেমোরি লিক ঠেকানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Calling dispose() cleans up event listeners and custom properties registered on the DOM, keeping single-page applications leak-free.',
          bn: 'dispose() মেমোরি থেকে সব লিসেনার পরিষ্কার করে দিয়ে অ্যাপ্লিকেশনকে হালকা ও দ্রুত রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-door-that-holds',
    tech: 'bootstrap',
    title: {
      en: 'Modals, Offcanvas Drawers & Backdrop Management',
      bn: 'মোডাল, অফক্যানভাস ড্রয়ার ও ব্যাকড্রপ ম্যানেজমেন্ট'
    }
  }
};
