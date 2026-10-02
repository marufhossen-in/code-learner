import type { Lesson } from '../../../lib/types';

export const expeditionOrchardLesson: Lesson = {
  slug: 'the-expedition-orchard',
  tech: 'dom',
  title: {
    en: 'Query Selectors, Traversal & Live Collections',
    bn: 'কোয়েরি সিলেক্টর, ট্রাভার্সাল ও লাইভ কালেকশন'
  },
  summary: {
    en: 'Querying and navigating elements across the DOM tree is foundational to client-side scripting. Modern browsers provide querySelector to retrieve the first matching element and querySelectorAll to collect all matches. Crucially, querySelectorAll returns a static snapshot NodeList that never updates when the DOM changes. In contrast, legacy methods like getElementsByTagName and the children property return live HTMLCollections that re-evaluate automatically. For example, if a list starts with 3 elements and a new item is appended, the static NodeList remains fixed at count 3 while the live collection automatically expands to 4. For directional traversal, element.closest climbs upwards to the nearest matching ancestor, while element.matches tests whether an element satisfies a given CSS selector. This lesson teaches selectors, live collections, and hierarchical traversal.',
    bn: 'ডম ট্রি থেকে উপাদান খুঁজে বের করা এবং তাদের মধ্যে নেভিগেট করা ক্লায়েন্ট-সাইড প্রোগ্রামিংয়ের মূল ভিত্তি। আধুনিক ব্রাউজারে প্রথম উপাদানটি খুঁজতে querySelector এবং সব উপাদান একসাথে পেতে querySelectorAll ব্যবহৃত হয়। মনে রাখা জরুরি, querySelectorAll একটি অপরিবর্তনশীল স্ট্যাটিক NodeList প্রদান করে যা ডমে নতুন উপাদান যোগ হলেও নিজে থেকে আপডেট হয় না। অন্যদিকে getElementsByTagName বা children প্রপার্টি একটি লাইভ HTMLCollection প্রদান করে যা স্বয়ংক্রিয়ভাবে আপডেট হয়। উদাহরণস্বরূপ, শুরুতে ৩টি উপাদান থাকা একটি তালিকায় নতুন উপাদান যোগ করলে স্ট্যাটিক NodeList আগের ৩ সংখ্যাতেই স্থির থাকে, অথচ লাইভ কালেকশনটি স্বয়ংক্রিয়ভাবে ৪ এ বৃদ্ধি পায়। এছাড়া ওপরের দিকে প্যারেন্ট খুঁজতে element.closest এবং উপাদানটি নির্দিষ্ট সিলেক্টরের সাথে মেলে কি না তা যাচাই করতে element.matches ব্যবহৃত হয়। এই পাঠে সিলেক্টর কোয়েরি, লাইভ কালেকশন এবং ট্রাভার্সাল বিস্তারিতভাবে শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Selecting and Traversing the DOM',
        bn: 'মূল ধারণা: ডম উপাদান নির্বাচন ও ট্রাভার্সাল'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'To make a web page interactive, your JavaScript code must locate target elements and navigate relationships between parents, children, and siblings. The W3C Selectors API connects familiar CSS selector syntax directly to JavaScript tree search algorithms.',
        bn: 'একটি ওয়েব পেজকে ইন্টার‍্যাক্টিভ করতে হলে জাভাস্ক্রিপ্টকে নির্দিষ্ট উপাদানগুলো খুঁজে বের করতে হয় এবং তাদের প্যারেন্ট ও চাইল্ডের মধ্যকার সম্পর্ক বুঝতে হয়। ডব্লিউথ্রিসি সিলেক্টর্স এপিআই সিএসএস সিলেক্টরের পরিচিত সিনট্যাক্স ব্যবহার করে জাভাস্ক্রিপ্টে দ্রুত উপাদান অনুসন্ধানের সুবিধা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Static NodeList Snapshot',
          def: {
            en: 'The frozen list of elements returned by querySelectorAll that preserves the exact state captured at query time',
            bn: 'querySelectorAll দ্বারা তৈরি হওয়া তালিকার স্ন্যাপশট যা পরবর্তীকালে ডম পরিবর্তিত হলেও নিজে থেকে আর বদলায় না'
          }
        },
        {
          term: 'Live HTMLCollection',
          def: {
            en: 'A dynamic DOM collection (e.g. from getElementsByTagName or children) that automatically reflects subsequent additions and deletions',
            bn: 'ডমের ডায়নামিক কালেকশন যা পেজে নতুন উপাদান যোগ বা মুছে ফেলার সাথে সাথে স্বয়ংক্রিয়ভাবে নিজেকে আপডেট করে'
          }
        },
        {
          term: 'element.closest(selector)',
          def: {
            en: 'A traversal method that inspects the current element and climbs upward through ancestor parents until finding a match or null',
            bn: 'বর্তমান উপাদান থেকে শুরু করে ওপরের দিকে উঠে সবচেয়ে কাছের প্যারেন্ট উপাদানটিকে খুঁজে বের করার মেথড'
          }
        },
        {
          term: 'element.matches(selector)',
          def: {
            en: 'A predicate method returning true if the element matches the specified CSS selector string, and false otherwise',
            bn: 'যাচাইকারী মেথড যা উপাদানটি নির্দিষ্ট সিএসএস সিলেক্টরের শর্ত পূরণ করে কি না তার ভিত্তিতে true বা false দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'selection-methods-table',
      text: {
        en: 'DOM Selection Methods Comparison',
        bn: 'ডম উপাদান খোঁজার বিভিন্ন মেথডের তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Operational Characteristics of Common DOM Querying APIs',
        bn: 'বিভিন্ন ডম কোয়েরি মেথডের বৈশিষ্ট্য ও আচরণের তুলনা'
      },
      head: [
        { en: 'API Method', bn: 'মেথড' },
        { en: 'Return Value', bn: 'রিটার্ন টাইপ' },
        { en: 'Collection Nature', bn: 'কালেকশনের প্রকৃতি' }
      ],
      rows: [
        [
          { en: 'document.querySelector(selector)', bn: 'document.querySelector(selector)' },
          { en: 'First matching Element or null', bn: 'প্রথম মেলানো এলিমেন্ট অথবা null' },
          { en: 'Single element reference', bn: 'একক উপাদানের রেফারেন্স' }
        ],
        [
          { en: 'document.querySelectorAll(selector)', bn: 'document.querySelectorAll(selector)' },
          { en: 'NodeList of matching elements', bn: 'উপাদানগুলোর NodeList' },
          { en: 'Static snapshot (immutable to DOM updates)', bn: 'স্ট্যাটিক স্ন্যাপশট (পরবর্তী পরিবর্তনে বদলায় না)' }
        ],
        [
          { en: 'document.getElementById(id)', bn: 'document.getElementById(id)' },
          { en: 'Element with matching ID or null', bn: 'আইডি মেলানো এলিমেন্ট বা null' },
          { en: 'Fast hash-map lookup', bn: 'দ্রুততম হ্যাশম্যাপ অনুসন্ধান' }
        ],
        [
          { en: 'document.getElementsByTagName(tag)', bn: 'document.getElementsByTagName(tag)' },
          { en: 'HTMLCollection of matching elements', bn: 'উপাদানগুলোর HTMLCollection' },
          { en: 'Live collection (updates dynamically)', bn: 'লাইভ কালেকশন (স্বয়ংক্রিয়ভাবে আপডেট হয়)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Static NodeList vs Live Collection Mutability',
        bn: 'চালনাযোগ্য সিমুলেশন: স্ট্যাটিক NodeList বনাম লাইভ কালেকশন পরিবর্তন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates mutating a DOM container that initially contains 3 list items. Appending a new 4th element leaves the static NodeList snapshot unchanged at count 3, while the live collection updates to 4:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি শুরুতে ৩টি আইটেম থাকা একটি ডম কন্টেইনারে মিউটেশন সিমুলেট করে। নতুন ৪ নম্বর উপাদান যোগ করার পরও স্ট্যাটিক NodeList ৩ এ অপরিবর্তিত থাকে, অথচ লাইভ কালেকশনটি স্বয়ংক্রিয়ভাবে ৪ এ বৃদ্ধি পায়:'
      }
    },
    {
      type: 'code',
      id: 'dom-live-vs-static-sim',
      lang: 'javascript',
      code: `// DOM Live Collection vs Static NodeList Simulation
const initialElements = 3; // Initial <li> count

// querySelectorAll creates a frozen static snapshot
const staticNodeListCount = initialElements;

// getElementsByTagName creates a live dynamic reference
let liveCollectionCount = initialElements;

// A new 4th <li> element is appended to the DOM container
liveCollectionCount += 1;

console.log('Initial element count in container:', initialElements);
// -> Initial element count in container: 3

console.log('Static NodeList count after DOM insertion:', staticNodeListCount);
// -> Static NodeList count after DOM insertion: 3

console.log('Live HTMLCollection count after DOM insertion:', liveCollectionCount);
// -> Live HTMLCollection count after DOM insertion: 4`,
      caption: {
        en: 'Figure 1: Inserting a new element leaves the static NodeList snapshot at 3 while the live collection automatically updates to 4',
        bn: 'চিত্র ১: নতুন উপাদান যোগ করার পর স্ট্যাটিক NodeList ৩ এ অপরিবর্তিত থাকে এবং লাইভ কালেকশন স্বয়ংক্রিয়ভাবে ৪ এ উন্নীত হয়'
      }
    },
    {
      type: 'heading',
      id: 'live-collection-loop-pitfall',
      text: {
        en: 'The Live Collection Infinite Loop Trap',
        bn: 'লাইভ কালেকশনের বিপজ্জনক লুপ ফাঁদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A classic beginner defect is mutating a live collection inside a forward-counting for loop starting at 0. If you append a new element, collection.length increases by 1 on every iteration, creating an infinite loop that crashes the browser tab. Use Array.from(collection) or querySelectorAll to freeze length.',
        bn: 'নতুনদের করা সবচেয়ে সাধারণ ভুল হলো ০ থেকে শুরু হওয়া কোনো লাইভ কালেকশনের ওপর লুপ চালানো। লুপে উপাদান যোগ করলে collection.length প্রতি ধাপে ১ করে বাড়তে থাকে, যার ফলে লুপ কখনো শেষ না হয়ে ব্রাউজার ট্যাব পুরোপুরি ক্র্যাশ করে। এমন ক্ষেত্রে Array.from(collection) বা querySelectorAll দিয়ে দৈর্ঘ্য স্থির করে নেওয়া উচিত।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Scoped Queries (element.querySelector)',
          def: {
            en: 'Calling querySelector directly on an element rather than document, restricting the search exclusively to its descendant subtree',
            bn: 'পুরো পেজের বদলে একটি নির্দিষ্ট উপাদানের ওপর কোয়েরি চালানো, যাতে সার্চ কেবল তার নিচের চাইল্ডগুলোর মধ্যে সীমাবদ্ধ থাকে'
          }
        },
        {
          term: 'Right-to-Left CSS Selector Parsing',
          def: {
            en: 'The browser query engine matches selectors from right to left (evaluating key selector first, then verifying ancestors)',
            bn: 'ব্রাউজার ইঞ্জিন সিএসএস সিলেক্টর ডান থেকে বাম দিকে পার্স করে (প্রথমে শেষ উপাদান খোঁজে, তারপর তার প্যারেন্ট মেলায়)'
          }
        },
        {
          term: 'Array.from(collection)',
          def: {
            en: 'Converting array-like DOM collections into authentic JavaScript arrays to safely iterate without live collection mutations',
            bn: 'ডম কালেকশনকে খাঁটি জাভাস্ক্রিপ্ট অ্যারেতে রূপান্তর করার পদ্ধতি যাতে লুপ চালানোর সময় কোনো সমস্যা না হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-live-count-calc-ex',
      kind: 'mcq',
      topic: 'Live collection count after appending a new element',
      question: {
        en: 'According to our simulation, if a list begins with 3 elements and 1 new element is appended, what is the count in the live collection compared to the static NodeList?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী শুরুতে ৩টি উপাদান থাকা তালিকায় ১টি নতুন উপাদান যোগ করা হলে লাইভ কালেকশন এবং স্ট্যাটিক NodeList-এ উপাদান সংখ্যা কত হবে?'
      },
      options: [
        {
          en: 'Live collection: 4, Static NodeList: 3',
          bn: 'লাইভ কালেকশন: ৪, স্ট্যাটিক NodeList: ৩'
        },
        {
          en: 'Live collection: 3, Static NodeList: 4',
          bn: 'লাইভ কালেকশন: ৩, স্ট্যাটিক NodeList: ৪'
        },
        {
          en: 'Both collections become 4',
          bn: 'উভয় কালেকশনেই ৪ হবে'
        },
        {
          en: 'Both collections remain 3',
          bn: 'উভয় কালেকশনেই ৩ থাকবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Live collections update dynamically to 4; static snapshots stay at 3.',
        bn: 'লাইভ কালেকশন নিজে আপডেট হয়ে ৪ হয়, আর স্ট্যাটিক স্ন্যাপশট ৩ এ আটকে থাকে।'
      },
      explanation: {
        en: 'Live collections immediately reflect the new DOM count of 4. Static NodeList snapshots capture state at query time and remain at 3.',
        bn: 'লাইভ কালেকশন সাথে সাথে আপডেট হয়ে ৪টি উপাদান দেখায়, কিন্তু স্ট্যাটিক NodeList আগের ৩ সংখ্যাতেই স্থির থাকে।'
      }
    },
    {
      id: 'dom-closest-direction-ex',
      kind: 'mcq',
      topic: 'Direction of tree traversal for element.closest',
      question: {
        en: 'In which direction does element.closest(selector) traverse the DOM tree when invoked on a deeply nested button?',
        bn: 'একটি গভীরভাবে নেস্টেড বাটনে element.closest(selector) কল করলে এটি ডম ট্রির কোন দিকে অনুসন্ধান চালায়?'
      },
      options: [
        {
          en: 'It inspects the current element and traverses upward through ancestor parent nodes toward the document root until finding a match',
          bn: 'এটি বর্তমান উপাদান থেকে শুরু করে ওপরের দিকে প্যারেন্ট ও পূর্বপুরুষ নোডগুলোর মধ্য দিয়ে রুট পর্যন্ত অনুসন্ধান চালায়'
        },
        {
          en: 'It searches downward through descendant child elements',
          bn: 'এটি নিচের দিকে চাইল্ড উপাদানগুলোর মধ্যে খোঁজে'
        },
        {
          en: 'It only inspects immediately adjacent sibling elements',
          bn: 'এটি কেবল ডানে-বামে থাকা ভাইবোন উপাদানগুলোকে দেখে'
        },
        {
          en: 'It searches external websites on the internet',
          bn: 'এটি ইন্টারনেটের অন্যান্য ওয়েবসাইটে সার্চ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Climbs upward towards parent ancestors.',
        bn: 'ওপরের দিকে প্যারেন্ট বা পূর্বপুরুষদের দিকে ওঠার কথা ভাবুন।'
      },
      explanation: {
        en: 'closest() starts at the current element and tests parent ancestors upward, making it the primary tool for event delegation.',
        bn: 'closest() বর্তমান উপাদান থেকে শুরু করে ওপরের দিকে উঠে সবচেয়ে কাছের উপযুক্ত প্যারেন্ট উপাদানটি খুঁজে দেয়।'
      }
    },
    {
      id: 'dom-matches-return-ex',
      kind: 'mcq',
      topic: 'Return value and purpose of element.matches',
      question: {
        en: 'What does element.matches(".active-btn") return when executed against a button?',
        bn: 'একটি বাটনের ওপর element.matches(".active-btn") চালালে এটি কী রিটার্ন করে?'
      },
      options: [
        {
          en: 'A boolean value (true if the element satisfies the CSS selector, false otherwise)',
          bn: 'একটি বুলিয়ান মান (উপাদানটি সিএসএস সিলেক্টরের সাথে মিললে true, না মিললে false)'
        },
        {
          en: 'An array of all elements with that class',
          bn: 'সেই ক্লাসের সমস্ত উপাদানের একটি অ্যারে'
        },
        {
          en: 'The text content of the button',
          bn: 'বাটনের ভেতরের টেক্সট কনটেন্ট'
        },
        {
          en: 'A new CSS stylesheet object',
          bn: 'একটি নতুন সিএসএস স্টাইলশিট অবজেক্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returns a boolean true or false.',
        bn: 'একটি বুলিয়ান true বা false মানের কথা ভাবুন।'
      },
      explanation: {
        en: 'matches() is a boolean test checking if the target element matches the provided CSS selector string.',
        bn: 'matches() একটি শর্ত পরীক্ষা করে উপাদানটি নির্দিষ্ট সিএসএস সিলেক্টর মেনে চললে true দেয়, অন্যথায় false দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-expedition-orchard',
    title: {
      en: 'DOM Query Selectors & Traversal Quiz',
      bn: 'ডম কোয়েরি সিলেক্টর ও ট্রাভার্সাল কুইজ'
    },
    questions: [
      {
        id: 'q-dom-queryselectorall-type',
        kind: 'mcq',
        topic: 'Collection type returned by querySelectorAll',
        question: {
          en: 'Which collection type does document.querySelectorAll() return?',
          bn: 'document.querySelectorAll() মেথডটি কোন ধরনের কালেকশন রিটার্ন করে?'
        },
        options: [
          {
            en: 'A static NodeList',
            bn: 'একটি স্ট্যাটিক NodeList'
          },
          {
            en: 'A live HTMLCollection',
            bn: 'একটি লাইভ HTMLCollection'
          },
          {
            en: 'A pure JavaScript Array',
            bn: 'একটি সাধারণ জাভাস্ক্রিপ্ট অ্যারে'
          },
          {
            en: 'A JSON string',
            bn: 'একটি জেএসন স্ট্রিং'
          }
        ],
        answer: 0,
        hint: {
          en: 'Returns a static NodeList snapshot.',
          bn: 'একটি স্ট্যাটিক NodeList স্ন্যাপশটের কথা ভাবুন।'
        },
        explanation: {
          en: 'querySelectorAll returns a static NodeList representing a fixed snapshot of matching elements at invocation time.',
          bn: 'querySelectorAll একটি অপরিবর্তনশীল স্ট্যাটিক NodeList দেয় যা তৈরির সময়ের অবস্থার ছবি ধরে রাখে।'
        }
      },
      {
        id: 'q-dom-getelementbyid-speed',
        kind: 'mcq',
        topic: 'Why getElementById is the fastest DOM selection method',
        question: {
          en: 'Why is document.getElementById("nav") computationally faster than document.querySelector("#nav")?',
          bn: 'document.querySelector("#nav")-এর চেয়ে document.getElementById("nav") কেন কম্পিউটারে দ্রুত রান করে?'
        },
        options: [
          {
            en: 'getElementById performs an instantaneous hash-map ID lookup without invoking the CSS selector parsing engine',
            bn: 'getElementById কোনো সিএসএস পার্সার না চালিয়ে সরাসরি ব্রাউজারের অভ্যন্তরীণ হ্যাশম্যাপ থেকে উপাদানটি এক নিমিষে বের করে'
          },
          {
            en: 'getElementById runs on the GPU graphics card',
            bn: 'getElementById সরাসরি জিপিইউতে চলে'
          },
          {
            en: 'querySelector only searches visible elements',
            bn: 'querySelector কেবল দৃশ্যমান উপাদান খোঁজে'
          },
          {
            en: 'getElementById is compiled into C++ machine code at download time',
            bn: 'getElementById ডাউনলোডের সময় মেশিন কোডে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Direct ID hash lookup bypasses CSS parser overhead.',
          bn: 'সরাসরি হ্যাশম্যাপ লুকআপের কারণে সিএসএস পার্স করার অতিরিক্ত সময় বাঁচার কথা ভাবুন।'
        },
        explanation: {
          en: 'getElementById resolves IDs directly through an internal lookup table, avoiding selector tokenization and traversal algorithms.',
          bn: 'getElementById সরাসরি অভ্যন্তরীণ আইডি তালিকা থেকে এক ধাপে উপাদান আনে, ফলে কোনো সিএসএস নিয়ম বিশ্লেষণ করতে হয় না।'
        }
      },
      {
        id: 'q-dom-live-removal-trap',
        kind: 'mcq',
        topic: 'Skipping elements when removing from live collections',
        question: {
          en: 'What bug occurs if you remove elements in a live HTMLCollection using a standard forward loop: for (let i = 0; i < items.length; i++) { items[i].remove(); }?',
          bn: 'একটি লাইভ HTMLCollection থেকে যদি সাধারণ for লুপ দিয়ে উপাদান মোছা হয়: for (let i = 0; i < items.length; i++) { items[i].remove(); } তবে কী বাগ তৈরি হবে?'
        },
        options: [
          {
            en: 'Half of the elements are skipped because removing item 0 immediately shifts item 1 into index 0, but i increments to 1 on the next iteration',
            bn: 'অর্ধেক উপাদান বাদ পড়ে যাবে কারণ ০ নম্বর আইটেম মুছলে পরের ১ নম্বর আইটেমটি ০ নম্বর অবস্থানে চলে আসে, কিন্তু লুপের i বেড়ে ১ হয়ে যায়'
          },
          {
            en: 'The computer hard disk becomes full',
            bn: 'কম্পিউটারের হার্ড ড্রাইভ পূর্ণ হয়ে যাবে'
          },
          {
            en: 'All elements on the entire web page are deleted',
            bn: 'ওয়েব পেজের সমস্ত উপাদান একসাথে মুছে যাবে'
          },
          {
            en: 'The browser changes the background to yellow',
            bn: 'ব্রাউজার ব্যাকগ্রাউন্ডের রঙ হলুদ বানিয়ে দেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Index shifting causes every alternate element to be skipped.',
          bn: 'ইনডেক্স পিছিয়ে আসার কারণে প্রতিটি বিকল্প উপাদান বাদ পড়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Because live collections shrink instantly, the first item is removed and the next item slides into the initial index. Incrementing the loop variable skips that displaced item.',
          bn: 'লাইভ কালেকশন সাথে সাথে সংকুচিত হয়, তাই প্রথমটি মুছলে পরেরটি শুরুর অবস্থানে চলে আসে কিন্তু লুপের চলক এগিয়ে যাওয়ায় সেই আইটেমটি বাদ পড়ে যায়।'
        }
      },
      {
        id: 'q-dom-scoped-query-boundary',
        kind: 'mcq',
        topic: 'Boundary of element.querySelectorAll',
        question: {
          en: 'If you execute cardElement.querySelectorAll("button"), which buttons are included in the resulting NodeList?',
          bn: 'যদি আপনি cardElement.querySelectorAll("button") চালান, তবে ফলাফলের NodeList-এ কোন বাটনগুলো অন্তর্ভুক্ত হবে?'
        },
        options: [
          {
            en: 'Only buttons that are nested descendants inside that specific cardElement',
            bn: 'শুধুমাত্র সেই নির্দিষ্ট cardElement-এর ভেতরে থাকা চাইল্ড বাটনগুলো'
          },
          {
            en: 'All buttons on the entire web page',
            bn: 'পুরো ওয়েব পেজের সমস্ত বাটন'
          },
          {
            en: 'Only buttons that have the disabled attribute',
            bn: 'শুধুমাত্র ডিজেবল্ড করা বাটনগুলো'
          },
          {
            en: 'Buttons located inside the parent element',
            bn: 'প্যারেন্ট এলিমেন্টের বাইরের বাটনগুলো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Restricted strictly to the calling element descendants.',
          bn: 'যে উপাদানের ওপর কোয়েরি চালানো হয়েছে কেবল তার ভেতরের অংশে সীমাবদ্ধ থাকার কথা ভাবুন।'
        },
        explanation: {
          en: 'Scoped queries evaluate selectors exclusively against descendants of the context element rather than the whole document.',
          bn: 'নির্দিষ্ট উপাদানের ওপর কোয়েরি চালালে সার্চ কেবল তার ভেতরের বংশধর বা চাইল্ডগুলোর মধ্যে সীমাবদ্ধ থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-grafting-bench',
    tech: 'dom',
    title: {
      en: 'Element Creation, Mutation & DocumentFragment',
      bn: 'উপাদান তৈরি, মিউটেশন ও DocumentFragment'
    }
  }
};
