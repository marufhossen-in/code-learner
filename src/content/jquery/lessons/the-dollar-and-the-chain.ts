import type { Lesson } from '../../../lib/types';

export const TheDollarAndTheChainLesson: Lesson = {
  slug: 'the-dollar-and-the-chain',
  tech: 'jquery',
  title: {
    en: 'The $() Factory, Wrapped Collections & Method Chaining',
    bn: '$() ফ্যাক্টরি, র‍্যাপড কালেকশন ও মেথড চেইনিং'
  },
  summary: {
    en: 'At the heart of jQuery lies the polymorphic $() factory function. Passing a CSS selector queries matching elements and packages them into an array-like wrapped collection. Calling mutator methods executes implicit iteration across all matched nodes without requiring manual loops. For instance, wrapping 3 card elements allows applying styles, classes, and attributes across all 3 nodes simultaneously. Because mutator methods return the identical jQuery wrapper object (return this), developers construct fluent method chains. Executing addClass, css, and attr sequentially produces a chain depth of 3 operations in a single statement. Furthermore, jQuery adheres to a silent-empty policy: queries matching zero elements gracefully no-op rather than crashing with null pointer exceptions. This lesson teaches the factory function, collection architecture, method chaining, and noConflict resolution.',
    bn: 'জেকোয়েরির মূল ভিত্তি হলো বহুরূপী $() ফ্যাক্টরি ফাংশন। এটি সিএসএস সিলেক্টর দিয়ে ডম থেকে উপাদান খুঁজে একটি অ্যারে-সদৃশ র‍্যাপড কালেকশনে সাজিয়ে দেয়। কোনো মেথড কল করলে তা নিজে থেকেই ভেতরের সমস্ত উপাদানে ইম্প্লিসিট ইটারেশন চালিয়ে দেয়, ফলে আলাদা করে for লুপ লেখার প্রয়োজন হয় না। যেমন ৩টি কার্ড উপাদান সিলেক্ট করে একটিমাত্র কমান্ডেই সবগুলোতে স্টাইল বা ক্লাস যোগ করা যায়। প্রতিটি মেথড কাজ শেষে সেই একই অবজেক্ট (return this) ফেরত দেয় বলে মেথড চেইনিং সম্ভব হয়। যেমন addClass, css এবং attr পর্যায়ক্রমে কল করলে একটি বাক্যে ৩টি অপারেশন সম্পন্ন হয়। এছাড়া কোনো সিলেক্টর খালি থাকলেও এটি নাল এরর না দিয়ে নিরাপদে কোনো কাজ না করে থেমে যায়। এই পাঠে ফ্যাক্টরি ফাংশন, কালেকশন আর্কিটেকচার, মেথড চেইনিং এবং noConflict সমাধান বিস্তারিত শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: The Polymorphic $() Wrapper',
        bn: 'মূল ধারণা: বহুরূপী $() র‍্যাপার'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you invoke `$(selector)` in the `jQuery` library, you do not receive a bare `DOM` node or a standard array. Instead, the function instantiates an enriched wrapper object that encapsulates the matched elements and provides hundreds of utility methods.',
        bn: 'আপনি যখন জেকোয়েরিতে `$(selector)` কল করেন, তখন এটি কোনো সাধারণ `DOM` নোড বা জাভাস্ক্রিপ্ট অ্যারে ফেরত দেয় না। বরং এটি একটি সমৃদ্ধ র‍্যাপার অবজেক্ট তৈরি করে যা সমস্ত উপাদানকে নিজের ভেতরে আবৃত রাখে এবং শত শত কার্যকর মেথড সরবরাহ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The $() Factory Function',
          def: {
            en: 'The primary entry point of jQuery, accepting selectors, HTML markup, DOM elements, or ready callbacks to produce wrapped collections',
            bn: 'জেকোয়েরির প্রধান ফাংশন যা সিলেক্টর, এইচটিএমএল কোড বা উপাদান গ্রহণ করে একটি র‍্যাপার কালেকশন তৈরি করে'
          }
        },
        {
          term: 'Implicit Iteration',
          def: {
            en: 'The architectural feature where jQuery automatically loops over and updates every element in the collection without manual iteration code',
            bn: 'এমন আর্কিটেকচার যার মাধ্যমে জেকোয়েরি কোনো লুপ ছাড়াই কালেকশনের ভেতরের প্রতিটি উপাদানে নিজে নিজেই পরিবর্তন ঘটায়'
          }
        },
        {
          term: 'Method Chaining (return this)',
          def: {
            en: 'Executing multiple methods consecutively on the same collection by having each mutator method return the jQuery wrapper instance',
            bn: 'প্রতিটি মেথডের শেষে "return this" থাকার কারণে ডট (.) দিয়ে একের পর এক একাধিক মেথড ধারাবাহিকভাবে চালানোর কৌশল'
          }
        },
        {
          term: 'jQuery.noConflict()',
          def: {
            en: 'Releasing control of the global $ variable back to other libraries while preserving jQuery functionality under an alternative identifier',
            bn: 'গ্লোবাল $ চিহ্নটিকে অন্য লাইব্রেরির জন্য মুক্ত করে দিয়ে অন্য নামে জেকোয়েরি ব্যবহারের বিশেষ মেথড'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'factory-signatures-table',
      text: {
        en: 'The Four Polymorphic $() Input Signatures',
        bn: '$() ফাংশনের চারটি ভিন্ন ইনপুট রূপ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Input Types Accepted by the jQuery Factory and Their Internal Behaviors',
        bn: 'জেকোয়েরি ফ্যাক্টরি ফাংশনের বিভিন্ন ইনপুট এবং তাদের অভ্যন্তরীণ আচরণ'
      },
      head: [
        { en: 'Input Type', bn: 'ইনপুট ধরন' },
        { en: 'Code Example', bn: 'উদাহরণ' },
        { en: 'Factory Action', bn: 'ফ্যাক্টরির কাজ' }
      ],
      rows: [
        [
          { en: 'CSS Selector String', bn: 'সিএসএস সিলেক্টর স্ট্রিং' },
          { en: '$(".card")', bn: '$(".card")' },
          { en: 'Queries DOM elements and packages matches into a wrapped collection', bn: 'ডম থেকে উপাদান খুঁজে এনে কালেকশনে সাজিয়ে দেয়' }
        ],
        [
          { en: 'Raw HTML Markup', bn: 'এইচটিএমএল মার্কআপ' },
          { en: '$("<div class=\'alert\'></div>")', bn: '$("<div class=\'alert\'></div>")' },
          { en: 'Parses markup and creates fresh in-memory DOM nodes on the fly', bn: 'স্ট্রিং পার্স করে তাৎক্ষণিকভাবে মেমোরিতে নতুন উপাদান তৈরি করে' }
        ],
        [
          { en: 'Bare DOM Element', bn: 'সাধারণ ডম উপাদান' },
          { en: '$(this) or $(document)', bn: '$(this) বা $(document)' },
          { en: 'Envelopes existing DOM node with jQuery methods and utility APIs', bn: 'আগে থেকে থাকা ডম নোডকে জেকোয়েরির শক্তিশালী মেথড দিয়ে মুড়িয়ে দেয়' }
        ],
        [
          { en: 'Ready Callback Function', bn: 'রেডি কলব্যাক ফাংশন' },
          { en: '$(function() { ... })', bn: '$(function() { ... })' },
          { en: 'Schedules execution once DOMContentLoaded has fired', bn: 'ডম ট্রি তৈরি শেষ হওয়া পর্যন্ত অপেক্ষা করে কোড রান করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: jQuery Collection Wrapping & Chaining Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: জেকোয়েরি কালেকশন র‍্যাপিং ও চেইনিং গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates wrapping 3 matched elements and executing a chained expression across 3 sequential operations (.addClass, .css, .attr):',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৩টি উপাদানকে র‍্যাপ করে ৩টি ক্রমিক অপারেশনের (.addClass, .css, .attr) মাধ্যমে মেথড চেইনিং হিসেব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'jquery-chaining-sim',
      lang: 'javascript',
      code: `// jQuery Wrapper & Fluent Method Chaining Simulation
const matchedElements = 3; // 3 '.card' elements matched in DOM
let chainDepth = 0;

// Simulating chain: $('.card').addClass('box').css('color', 'red').attr('data-id', '1')
chainDepth += 1; // Step 1: .addClass() applies across all 3 items and returns this
chainDepth += 1; // Step 2: .css() updates styles on all 3 items and returns this
chainDepth += 1; // Step 3: .attr() updates attributes on all 3 items and returns this

console.log('Count of matched elements encapsulated in collection:', matchedElements);
// -> Count of matched elements encapsulated in collection: 3

console.log('Total depth of chained method invocations executed:', chainDepth);
// -> Total depth of chained method invocations executed: 3`,
      caption: {
        en: 'Figure 1: Packaging 3 matched DOM elements allows executing a chain depth of 3 sequential operations fluently in a single statement',
        bn: 'চিত্র ১: ৩টি উপাদানকে কালেকশনে মুড়িয়ে এক বাক্যে ধারাবাহিকভাবে ৩টি অপারেশনের চেইনিং সম্পন্ন করা যায়'
      }
    },
    {
      type: 'heading',
      id: 'silent-empty-guide',
      text: {
        en: 'The Silent-Empty Safety Policy',
        bn: 'নীরব-ফাঁকা বা সাইলেন্ট-এম্পটি সুরক্ষা নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In native JavaScript, executing document.querySelector(".missing").classList.add("active") throws an uncaught TypeError because the query returns null. In contrast, jQuery collections with length zero gracefully no-op. Calling $(".missing").addClass("active") silently continues execution without breaking the user application.',
        bn: 'ভ্যানিলা জাভাস্ক্রিপ্টে কোনো উপাদান খুঁজে না পেলে document.querySelector নাল ফেরত দেয় এবং তার ওপর ক্লাস যোগ করতে গেলে সাইট ক্র্যাশ করে। কিন্তু জেকোয়েরিতে কোনো উপাদান না মিললে কালেকশনের দৈর্ঘ্য শূন্য হয়। এর ওপর $(".missing").addClass("active") কল করলে কোনো এরর না দিয়ে কোড নির্বিঘ্নে চলতে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The pushStack Architecture',
          def: {
            en: 'Internal stack tracking historical collections during traversal, allowing developers to unwind filters via .end()',
            bn: 'ট্রাভার্সালের সময় আগের কালেকশনগুলো মেমোরি স্ট্যাকে মনে রাখা, যাতে .end() কল করে আগের অবস্থায় ফেরা যায়'
          }
        },
        {
          term: 'Getter vs Setter Law',
          def: {
            en: 'Setter calls modify all elements and return the collection; getter calls inspect only the first element and return a primitive value',
            bn: 'সেটার মেথড সব উপাদানে পরিবর্তন ঘটিয়ে কালেকশন ফেরত দেয়; আর গেটার মেথড কেবল প্রথম উপাদানটি পড়ে সরাসরি মান ফেরত দেয়'
          }
        },
        {
          term: 'collection.get(index) vs collection.eq(index)',
          def: {
            en: '.get(index) returns the raw unwrapped DOM node; .eq(index) returns a new single-element jQuery wrapper',
            bn: '.get() সাধারণ কাঁচা ডম নোড বের করে দেয়; আর .eq() তাকে জেকোয়েরি মেথডসহ নতুন র‍্যাপার আকারে ফেরত দেয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-chain-depth-calc-ex',
      kind: 'mcq',
      topic: 'Chained method execution count',
      question: {
        en: 'According to our simulation, what is the chain depth when .addClass(), .css(), and .attr() are executed consecutively on a collection of 3 elements?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ৩টি উপাদানের একটি কালেকশনে .addClass(), .css() এবং .attr() পর্যায়ক্রমে চালালে চেইন ডেপথ কত হয়?'
      },
      options: [
        {
          en: '3 chained operations',
          bn: '৩টি চেইন্ড অপারেশন'
        },
        {
          en: '1 operation',
          bn: '১টি অপারেশন'
        },
        {
          en: '9 operations',
          bn: '৯টি অপারেশন'
        },
        {
          en: '0 operations',
          bn: '০টি অপারেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each method call returns this, chaining 3 operations together.',
        bn: 'প্রতিটি মেথড this ফেরত দেওয়ায় ৩টি অপারেশন একসাথে চলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Each mutator returns the jQuery collection, producing a chain depth of 3 sequential operations.',
        bn: 'প্রতিটি মেথড নিজের অবজেক্ট ফেরত দেয় বলে মোট ৩টি অপারেশন একটি একক চেইনে সফলভাবে সম্পন্ন হয়।'
      }
    },
    {
      id: 'jquery-empty-selector-ex',
      kind: 'mcq',
      topic: 'Behavior of jQuery when selecting non-existent elements',
      question: {
        en: 'What happens when you execute $(".non-existent-button").hide() on a web page where no matching elements exist?',
        bn: 'পেজে কোনো উপাদান না থাকা সত্ত্বেও $(".non-existent-button").hide() চালালে কী ঘটবে?'
      },
      options: [
        {
          en: 'jQuery creates an empty collection (length: 0) and silently does nothing, allowing code execution to proceed without throwing a null error',
          bn: 'জেকোয়েরি একটি শূন্য দৈর্ঘ্যের কালেকশন তৈরি করে এবং কোনো নাল এরর না দিয়ে সম্পূর্ণ নিরাপদে কোড চালিয়ে যায়'
        },
        {
          en: 'The browser runtime throws an Uncaught TypeError: Cannot read property hide of null',
          bn: 'ব্রাউজার নাল পয়েন্টার এরর দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The entire web page becomes blank',
          bn: 'পুরো ওয়েব পেজ সাদা হয়ে যায়'
        },
        {
          en: 'A red warning modal appears on screen',
          bn: 'স্ক্রিনে লাল ওয়ার্নিং দেখা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'jQuery uses a silent-empty policy for zero-length collections.',
        bn: 'উপাদান না পেলেও কোনো এরর না দিয়ে শান্ত থাকার সুরক্ষা নীতির কথা ভাবুন।'
      },
      explanation: {
        en: 'jQuery returns a collection with length 0. Methods iterate over zero elements without throwing errors.',
        bn: 'জেকোয়েরি শূন্য দৈর্ঘ্যের কালেকশন দেয়, ফলে কোনো উপাদান না থাকলেও কোড কোনো এরর না দিয়েই চলতে থাকে।'
      }
    },
    {
      id: 'jquery-noconflict-ex',
      kind: 'mcq',
      topic: 'Purpose of jQuery.noConflict()',
      question: {
        en: 'Why do developers invoke jQuery.noConflict() when integrating jQuery into legacy systems that use other JavaScript frameworks?',
        bn: 'অন্যান্য ফ্রেমওয়ার্ক থাকা পুরোনো সিস্টেমে জেকোয়েরি যোগ করার সময় কেন ডেভেলপাররা jQuery.noConflict() কল করেন?'
      },
      options: [
        {
          en: 'It releases control of the global "$" variable back to other libraries (like Prototype.js), preventing naming collisions while keeping jQuery accessible via "jQuery"',
          bn: 'এটি গ্লোবাল "$" চিহ্নটিকে অন্য লাইব্রেরির জন্য মুক্ত করে দেয়, ফলে কোনো সংঘাত তৈরি হয় না এবং "jQuery" নামে লাইব্রেরিটি ব্যবহার করা যায়'
        },
        {
          en: 'It speeds up network download speeds',
          bn: 'এটি ইন্টারনেটের গতি বাড়ায়'
        },
        {
          en: 'It disables CSS styling on the web page',
          bn: 'এটি সিএসএস স্টাইল বন্ধ করে'
        },
        {
          en: 'It clears the browser history',
          bn: 'এটি ব্রাউজারের হিস্ট্রি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prevents symbol collisions by giving back the "$" global variable.',
        bn: 'ডলার ($) চিহ্নের সংঘাত এড়ানোর সুবিধার কথা ভাবুন।'
      },
      explanation: {
        en: 'noConflict() relinquishes the $ symbol to avoid overriding other libraries that claim the same identifier.',
        bn: 'noConflict() ডলার চিহ্নটি অন্য লাইব্রেরির জন্য ছেড়ে দেয় যাতে একই নামের কারণে কোডে কোনো সংঘর্ষ না হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-dollar-and-chain',
    title: {
      en: 'The $() Factory & Chaining Quiz',
      bn: '$() ফ্যাক্টরি ও চেইনিং কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-chaining-mechanism',
        kind: 'mcq',
        topic: 'How mutator methods enable method chaining',
        question: {
          en: 'What return value inside jQuery mutator methods enables fluent chaining syntax like $(elem).addClass().css().show()?',
          bn: 'জেকোয়েরি মেথডের ভেতরে কী রিটার্ন করার কারণে $(elem).addClass().css().show()-এর মতো চেইনিং সম্ভব হয়?'
        },
        options: [
          {
            en: 'return this (the current jQuery wrapper object instance)',
            bn: 'return this (বর্তমান জেকোয়েরি র‍্যাপার অবজেক্ট ইনস্ট্যান্স)'
          },
          {
            en: 'return true (boolean confirmation flag)',
            bn: 'বুলিয়ান মান return true'
          },
          {
            en: 'return null (empty pointer)',
            bn: 'ফাঁকা পয়েন্টার return null'
          },
          {
            en: 'return document.body (DOM root element)',
            bn: 'মূল ডম নোড return document.body'
          }
        ],
        answer: 0,
        hint: {
          en: 'Returns "this" so subsequent methods invoke against the same collection.',
          bn: '"this" ফেরত দেওয়ার কথা ভাবুন যাতে একই অবজেক্টের ওপর পরের মেথড রান হয়।'
        },
        explanation: {
          en: 'Every mutator returns "this" (the jQuery collection itself), allowing callers to append another method call immediately.',
          bn: 'প্রতিটি মেথড নিজের কালেকশন অবজেক্টকে (this) ফেরত দেয়, যার ফলে ডট দিয়ে পরের মেথড যুক্ত করা যায়।'
        }
      },
      {
        id: 'q-jquery-get-vs-eq',
        kind: 'mcq',
        topic: 'Difference between .get(0) and .eq(0)',
        question: {
          en: 'How does $(".card").get(0) differ from $(".card").eq(0)?',
          bn: '$(".card").get(0) এবং $(".card").eq(0)-এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: '.get(0) returns the raw HTML DOM node (unwrapped); .eq(0) returns a new jQuery wrapper containing that element',
            bn: '.get(0) সরাসরি আসল এইচটিএমএল ডম নোডটি ফেরত দেয়; আর .eq(0) সেই উপাদানটিকে একটি নতুন জেকোয়েরি র‍্যাপার আকারে ফেরত দেয়'
          },
          {
            en: '.get(0) deletes the element; .eq(0) clones it',
            bn: '.get(0) মুছে ফেলে আর .eq(0) কপি করে'
          },
          {
            en: '.eq(0) only works on tables',
            bn: '.eq(0) কেবল টেবিলে চলে'
          },
          {
            en: 'They are exact duplicates with identical return types',
            bn: 'এরা একদম একই জিনিস'
          }
        ],
        answer: 0,
        hint: {
          en: 'get() returns the raw DOM element; eq() wraps it in jQuery.',
          bn: 'get কাঁচা নোড দেয় আর eq জেকোয়েরি মেথডসহ র‍্যাপ করে দেয়।'
        },
        explanation: {
          en: '.get(0) extracts the underlying HTMLElement. .eq(0) returns a single-item jQuery collection supporting chainable methods.',
          bn: '.get(0) সাধারণ ডম উপাদান দেয়, আর .eq(0) তাকে জেকোয়েরি কালেকশনে রাখে যাতে মেথড চেইনিং চালু রাখা যায়।'
        }
      },
      {
        id: 'q-jquery-ready-shorthand',
        kind: 'mcq',
        topic: 'Modern shorthand for document.ready',
        question: {
          en: 'Which modern syntax is the recommended shorthand for $(document).ready(function() { ... })?',
          bn: '$(document).ready(function() { ... })-এর সবচেয়ে আধুনিক ও সংক্ষিপ্ত রূপ কোনটি?'
        },
        options: [
          {
            en: '$(function() { ... });',
            bn: '$(function() { ... });'
          },
          {
            en: '$.ready(function() { ... });',
            bn: '$.ready(function() { ... });'
          },
          {
            en: '$("ready", function() { ... });',
            bn: '$("ready", function() { ... });'
          },
          {
            en: 'window.onload = function() { ... };',
            bn: 'window.onload = function() { ... };'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing a function directly into $() creates a DOM ready listener.',
          bn: 'সরাসরি $()-এর ভেতর ফাংশন পাস করার কথা ভাবুন।'
        },
        explanation: {
          en: '$(function() { ... }) is the official standard shorthand that executes as soon as DOMContentLoaded has fired.',
          bn: '$(function() { ... }) হলো জেকোয়েরির অফিশিয়াল সংক্ষিপ্ত রূপ যা ডম প্রস্তুত হওয়ার সাথে সাথে কার্যকর হয়।'
        }
      },
      {
        id: 'q-jquery-end-method',
        kind: 'mcq',
        topic: 'Function of the .end() method',
        question: {
          en: 'What does calling .end() achieve inside a chained jQuery traversal expression?',
          bn: 'একটি চেইন্ড জেকোয়েরি ট্রাভার্সাল এক্সপ্রেশনে .end() কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It pops the current filter and reverts the collection back to its previous state on the internal pushStack history',
            bn: 'এটি বর্তমান ফিল্টার বাদ দিয়ে মেমোরি স্ট্যাকের আগের কালেকশনে ফিরে যায়'
          },
          {
            en: 'It closes the active browser window',
            bn: 'এটি ব্রাউজার উইন্ডো বন্ধ করে'
          },
          {
            en: 'It deletes all elements matching the selector',
            bn: 'এটি উপাদানগুলো মুছে ফেলে'
          },
          {
            en: 'It halts all background JavaScript timers',
            bn: 'এটি সমস্ত টাইমার থামিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unwinds the stack to restore the previous selection.',
          bn: 'স্ট্যাক থেকে আগের সিলেকশনে ফিরে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: '.end() unwinds destructive traversal filters (like .find() or .filter()), restoring the collection before the filter was applied.',
          bn: '.end() কল করলে ফিল্টারের আগের মূল কালেকশনটি পুনরায় সক্রিয় হয়ে ওঠে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-selector-ledger',
    tech: 'jquery',
    title: {
      en: 'jQuery Selectors, Pseudo-Filters & Traversal',
      bn: 'জেকোয়েরি সিলেক্টর, সিউডো-ফিল্টার ও ট্রাভার্সাল'
    }
  }
};
