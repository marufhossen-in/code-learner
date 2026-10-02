import type { Lesson } from '../../../lib/types';

export const TheGreatMigrationLesson: Lesson = {
  slug: 'the-great-migration',
  tech: 'jquery',
  title: {
    en: 'The Great Migration: jQuery to Vanilla JS & Modern Frameworks',
    bn: 'দ্য গ্রেট মাইগ্রেশন: জেকোয়েরি থেকে ভ্যানিলা জেএস ও আধুনিক ফ্রেমওয়ার্ক'
  },
  summary: {
    en: 'For more than a decade, jQuery stood as the undisputed foundation of client-side web development. Today, modern ECMAScript standards and native browser APIs render external DOM wrappers largely obsolete. Replacing a legacy 85 kilobyte library payload with native querySelector, classList, and fetch reduces external client bundle size down to 0 kilobytes, delivering an 85 kilobyte network saving. Furthermore, component frameworks like React and Vue maintain virtual DOM trees that conflict with direct imperative DOM mutations. Modernizing legacy applications requires a systematic migration roadmap: replacing AJAX calls with fetch, swapping event listeners for addEventListener, and converting manipulation utilities into lightweight vanilla JavaScript helpers. This lesson explores native DOM equivalents, bundle size optimization, reactive framework friction, and phased migration playbooks.',
    bn: 'এক দশকেরও বেশি সময় ধরে ক্লায়েন্ট-সাইড ওয়েব ডেভেলপমেন্টের অবিসংবাদিত ভিত্তি ছিল জেকোয়েরি। তবে আধুনিক ব্রাউজারে ইসিএমএস্ক্রিপ্ট ও নেটিভ এপিআই শক্তিশালী হওয়ায় বাহ্যিক ডম র‍্যাপারের প্রয়োজনীয়তা প্রায় শেষ হয়ে গেছে। পুরোনো ৮৫ কিলোবাইটের লাইব্রেরি ফাইলের পরিবর্তে নেটিভ querySelector, classList ও fetch ব্যবহার করলে বাহ্যিক লাইব্রেরির সাইজ নেমে আসে ০ কিলোবাইটে, ফলে সরাসরি ৮৫ কিলোবাইটের নেটওয়ার্ক সাশ্রয় ঘটে। এছাড়া রিঅ্যাক্ট বা ভিউ-এর মতো আধুনিক কম্পোনেন্ট ফ্রেমওয়ার্ক নিজস্ব ভার্চুয়াল ডম বজায় রাখে, যা জেকোয়েরির সরাসরি ডম রূপান্তরের সাথে সংঘাত তৈরি করে। পুরোনো অ্যাপ্লিকেশন আধুনিকীকরণের জন্য একটি সুশৃঙ্খল রোডম্যাপ অনুসরণ করা হয়: প্রথমে অ্যাজাক্স বাদ দিয়ে ফেচ চালু করা, এরপর addEventListener দিয়ে ইভেন্ট সাজানো এবং অবশেষে ভ্যানিলা কোডে রূপান্তর করা। এই পাঠে নেটিভ ডম মেথড, বান্ডল সাইজ সাশ্রয়, আধুনিক ফ্রেমওয়ার্কের মিথস্ক্রিয়া এবং নিরাপদ মাইগ্রেশন গাইড বিস্তারিত আলোচিত হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Why Migrate from jQuery?',
        bn: 'মূল ধারণা: কেন জেকোয়েরি থেকে মাইগ্রেশন করবেন?'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When modern browsers adopted standardized `DOM` query APIs, the problems that `jQuery` solved vanished. Web browsers now implement native selectors, declarative CSS animations, and built-in network fetching natively.',
        bn: 'আধুনিক ব্রাউজারগুলো যখন আদর্শ `DOM` কুয়েরি মেথড বাস্তবায়ন করল, তখন জেকোয়েরির প্রয়োজনীয়তা কমে গেল। আজকের ব্রাউজারগুলো নেটিভ সিলেক্টর, মসৃণ সিএসএস রূপান্তর এবং বিল্ট-ইন নেটওয়ার্ক সুবিধা নিজস্বভাবেই প্রদান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Vanilla JavaScript',
          def: {
            en: 'Standard native JavaScript executed directly by the browser runtime without third-party utility libraries',
            bn: 'কোনো তৃতীয় পক্ষের লাইব্রেরি ছাড়া সরাসরি ব্রাউজারে চলা আদর্শ নেটিভ জাভাস্ক্রিপ্ট'
          }
        },
        {
          term: 'Zero-Runtime Overhead',
          def: {
            en: 'Relying exclusively on browser-native APIs to eliminate library parsing and memory footprint costs',
            bn: 'ব্রাউজারের বিল্ট-ইন মেথড ব্যবহার করে অতিরিক্ত স্ক্রিপ্ট ডাউনলোডের মেমোরি ও নেটওয়ার্ক খরচ সম্পূর্ণ দূর করা'
          }
        },
        {
          term: 'Declarative State vs Imperative Mutation',
          def: {
            en: 'Modern frameworks render UI as a function of state; jQuery manually traverses and mutates existing nodes imperatively',
            bn: 'আধুনিক ফ্রেমওয়ার্ক স্টেটের ভিত্তিতে পর্দা সাজায়; আর জেকোয়েরি হাত দিয়ে ধরে ধরে নোড পরিবর্তন করে যা বিশৃঙ্খলা তৈরি করে'
          }
        },
        {
          term: 'Phased Migration Strategy',
          def: {
            en: 'Deconstructing legacy dependencies incrementally across network, events, and DOM layers without rewriting the entire codebase at once',
            bn: 'একবারে সব কোড না ভেঙে ধাপে ধাপে নেটওয়ার্ক, ইভেন্ট ও ডম মেথডগুলোকে আলাদা করে নিরাপদে আধুনিক করা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'vanilla-equivalents-table',
      text: {
        en: 'jQuery to Vanilla JavaScript Conversion Matrix',
        bn: 'জেকোয়েরি থেকে ভ্যানিলা জাভাস্ক্রিপ্ট রূপান্তর তালিকা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Direct Native Browser Equivalents for Common jQuery Operations',
        bn: 'সাধারণ জেকোয়েরি মেথডসমূহের আধুনিক নেটিভ বিকল্পসমূহ'
      },
      head: [
        { en: 'jQuery Syntax', bn: 'জেকোয়েরি সিনট্যাক্স' },
        { en: 'Modern Vanilla JS Equivalent', bn: 'আধুনিক ভ্যানিলা জেএস রূপ' },
        { en: 'Operational Notes', bn: 'কাজের বিবরণ' }
      ],
      rows: [
        [
          { en: '$(".card")', bn: '$(".card")' },
          { en: 'document.querySelectorAll(".card")', bn: 'document.querySelectorAll(".card")' },
          { en: 'Returns a native NodeList supporting forEach iteration', bn: 'একটি নেটিভ নোডলিস্ট ফেরত দেয় যা লুপ দিয়ে সহজে চালানো যায়' }
        ],
        [
          { en: '$(elem).addClass("active")', bn: '$(elem).addClass("active")' },
          { en: 'elem.classList.add("active")', bn: 'elem.classList.add("active")' },
          { en: 'Direct classList DOMTokenList API avoids regex string parsing', bn: 'কোনো রেজেক্স ছাড়া সরাসরি ক্লাসের তালিকা আপডেট করে' }
        ],
        [
          { en: '$(elem).on("click", fn)', bn: '$(elem).on("click", fn)' },
          { en: 'elem.addEventListener("click", fn)', bn: 'elem.addEventListener("click", fn)' },
          { en: 'Native event registration supported across all current browsers', bn: 'সব ব্রাউজারে সমর্থিত স্ট্যান্ডার্ড ইভেন্ট লিসেনার মেথড' }
        ],
        [
          { en: '$.getJSON(url, cb)', bn: '$.getJSON(url, cb)' },
          { en: 'fetch(url).then(r => r.json())', bn: 'fetch(url).then(r => r.json())' },
          { en: 'Standard Promise-based fetch API handles asynchronous HTTP', bn: 'আধুনিক প্রমিজ ভিত্তিক ফেচ এপিআই দিয়ে ব্যাকগ্রাউন্ড রিকোয়েস্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Bundle Size Payload Reduction',
        bn: 'চালনাযোগ্য সিমুলেশন: বান্ডল সাইজ পেলোড সাশ্রয় গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates eliminating the 85 kilobyte uncompressed jQuery library footprint, cutting runtime dependency weight to 0 kilobytes and achieving an 85 kilobyte reduction:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৮৫ কিলোবাইটের পুরোনো জেকোয়েরি লাইব্রেরি বাদ দিয়ে সাইজ ০ কিলোবাইটে নামিয়ে আনা এবং পূর্ণ ৮৫ কিলোবাইট সাশ্রয়ের হিসাব দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'jquery-migration-sim',
      lang: 'javascript',
      code: `// jQuery Bundle Elimination Simulation
const legacyBundleKb = 85; // 85KB uncompressed jQuery library
const modernBundleKb = 0;  // 0KB using built-in browser APIs
const savedBytesKb = legacyBundleKb - modernBundleKb; // 85KB reduction

console.log('Legacy library weight included in bundle (KB):', legacyBundleKb);
// -> Legacy library weight included in bundle (KB): 85

console.log('Modern zero-dependency weight in bundle (KB):', modernBundleKb);
// -> Modern zero-dependency weight in bundle (KB): 0

console.log('Total client bundle size eliminated from network (KB):', savedBytesKb);
// -> Total client bundle size eliminated from network (KB): 85`,
      caption: {
        en: 'Figure 1: Transitioning from an 85 KB external library down to 0 KB native APIs yields an 85 KB payload savings',
        bn: 'চিত্র ১: ৮৫ কিলোবাইটের লাইব্রেরি থেকে ০ কিলোবাইট নেটিভ এপিআইতে যাওয়ায় মোট ৮৫ কিলোবাইটের সাইজ সাশ্রয় হয়'
      }
    },
    {
      type: 'heading',
      id: 'migration-strategy-guide',
      text: {
        en: 'Step-by-Step Modernization Playbook',
        bn: 'ধাপে ধাপে আধুনিকীকরণের নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modernizing large legacy codebases requires tactical separation. Rewriting everything at once risks regressions; instead, migrate APIs category by category.',
        bn: 'বিশাল পুরোনো অ্যাপ্লিকেশন আধুনিক করতে সুচিন্তিত কৌশল অবলম্বন করতে হয়। একবারে পুরো সাইট নতুন করে লিখতে গেলে নানা ত্রুটি দেখা দিতে পারে; তাই ধাপে ধাপে একটি করে অংশ বদলানো উচিত।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Step 1: Network & AJAX',
          def: {
            en: 'Replace $.ajax, $.get, and $.post with native fetch() and async/await syntax',
            bn: 'সবার আগে $.ajax বা $.get বাদ দিয়ে আধুনিক fetch() ও async/await ব্যবহার শুরু করা'
          }
        },
        {
          term: 'Step 2: Class & Attribute Manipulation',
          def: {
            en: 'Convert .addClass(), .removeClass(), and .attr() to element.classList and dataset APIs',
            bn: 'ক্লাস পরিবর্তনের কাজে .addClass-এর বদলে element.classList ও dataset মেথড বসানো'
          }
        },
        {
          term: 'Step 3: Event Delegation with closest()',
          def: {
            en: 'Implement event delegation natively by pairing addEventListener with event.target.closest(selector)',
            bn: 'নেটিভ addEventListener-এর ভেতর event.target.closest() ব্যবহার করে ডেলিগেশন কার্যকর করা'
          }
        },
        {
          term: 'Step 4: Remove Script Tag',
          def: {
            en: 'Once all references to the global $ symbol are eradicated, delete the jQuery script tag completely',
            bn: 'কোড থেকে সমস্ত ডলার ($) চিহ্নের ব্যবহার দূর করার পর মূল জেকোয়েরি স্ক্রিপ্ট ট্যাগটি চিরতরে মুছে ফেলা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-bundle-savings-ex',
      kind: 'mcq',
      topic: 'Bundle size savings calculation in simulation',
      question: {
        en: 'According to our migration calculation, how many kilobytes of uncompressed network payload are eliminated by transitioning from an 85 kilobyte jQuery library to 0 kilobyte native browser APIs?',
        bn: 'আমাদের মাইগ্রেশন হিসাব অনুযায়ী ৮৫ কিলোবাইটের জেকোয়েরি লাইব্রেরি থেকে ০ কিলোবাইটের নেটিভ ব্রাউজার এপিআইতে স্থানান্তরিত হলে মোট কত কিলোবাইট সাশ্রয় হয়?'
      },
      options: [
        {
          en: '85 kilobytes eliminated',
          bn: '৮৫ কিলোবাইট সাশ্রয়'
        },
        {
          en: '0 kilobytes',
          bn: '০ কিলোবাইট'
        },
        {
          en: '50 kilobytes',
          bn: '৫০ কিলোবাইট'
        },
        {
          en: '10 kilobytes',
          bn: '১০ কিলোবাইট'
        }
      ],
      answer: 0,
      hint: {
        en: '85 KB minus 0 KB equals an 85 KB net savings.',
        bn: '৮৫ কিলোবাইট থেকে ০ কিলোবাইট বাদ দিলে নিট ৮৫ কিলোবাইট সাশ্রয় হয়।'
      },
      explanation: {
        en: 'Eliminating the entire 85 KB legacy library eliminates 85 KB of downloaded network code for zero runtime overhead.',
        bn: '৮৫ কিলোবাইটের পুরো লাইব্রেরি বাদ দিলে শূন্য খরচে সরাসরি ৮৫ কিলোবাইটের নেটওয়ার্ক ট্রাফিক বেঁচে যায়।'
      }
    },
    {
      id: 'jquery-native-delegation-ex',
      kind: 'mcq',
      topic: 'Vanilla JS pattern for event delegation',
      question: {
        en: 'Which modern native JavaScript method is combined with parent.addEventListener to replicate jQuery delegated event handling?',
        bn: 'জেকোয়েরির মতো ইভেন্ট ডেলিগেশন ভ্যানিলা জাভাস্ক্রিপ্টে তৈরি করতে parent.addEventListener-এর সাথে কোন নেটিভ মেথডটি ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'event.target.closest(selector)',
          bn: 'মেথড event.target.closest(selector)'
        },
        {
          en: 'document.write()',
          bn: 'মেথড document.write()'
        },
        {
          en: 'window.alert()',
          bn: 'মেথড window.alert()'
        },
        {
          en: 'event.target.delete()',
          bn: 'মেথড event.target.delete()'
        }
      ],
      answer: 0,
      hint: {
        en: 'closest() searches up the DOM from the clicked target element.',
        bn: 'ক্লিক করা টার্গেট থেকে ওপরের দিকে প্যারেন্ট খোঁজার জন্য closest()-এর কথা ভাবুন।'
      },
      explanation: {
        en: 'Calling event.target.closest(selector) checks whether the clicked element or any of its ancestors match the target child selector.',
        bn: 'event.target.closest() ক্লিক করা নোড থেকে ওপরের দিকে স্ক্যান করে টার্গেট চাইল্ড সিলেক্টর খুঁজে বের করে।'
      }
    },
    {
      id: 'jquery-framework-conflict-ex',
      kind: 'mcq',
      topic: 'Why jQuery conflicts with React and Vue',
      question: {
        en: 'Why do modern component frameworks like React and Vue strongly discourage using jQuery to modify DOM elements inside components?',
        bn: 'রিঅ্যাক্ট বা ভিউ-এর মতো আধুনিক কম্পোনেন্ট ফ্রেমওয়ার্কের ভেতরে উপাদান পরিবর্তনে কেন জেকোয়েরি ব্যবহার করতে নিরুৎসাহিত করা হয়?'
      },
      options: [
        {
          en: 'Direct imperative DOM mutations circumvent the framework virtual DOM and state management, causing rendering desynchronization bugs and UI overwrites',
          bn: 'জেকোয়েরির সরাসরি পরিবর্তন ভার্চুয়াল ডম ও ইন্টারনাল স্টেটকে পাশ কাটিয়ে চলে, যার ফলে ডম ও অ্যাপ্লিকেশনের স্টেটের মধ্যে মারাত্মক গরমিল দেখা দেয়'
        },
        {
          en: 'React only runs on Linux servers',
          bn: 'রিঅ্যাক্ট কেবল লিনাক্সে চলে'
        },
        {
          en: 'jQuery crashes the computer monitor hardware',
          bn: 'জেকোয়েরি কম্পিউটার মনিটর ক্র্যাশ করায়'
        },
        {
          en: 'Virtual DOM is written in Python',
          bn: 'ভার্চুয়াল ডম পাইথনে লেখা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct DOM manipulation conflicts with virtual DOM state tracking.',
        bn: 'ফ্রেমওয়ার্কের ভার্চুয়াল ডম স্টেট ট্র্যাকিংয়ের সাথে সংঘাতের কথা ভাবুন।'
      },
      explanation: {
        en: 'Declarative frameworks reconcile the DOM based on state. Modifying elements directly via jQuery leaves the framework state out of sync.',
        bn: 'আধুনিক ফ্রেমওয়ার্ক স্টেটের ভিত্তিতে পর্দা আপডেট করে, তাই জেকোয়েরি দিয়ে নোড নাড়ালে ফ্রেমওয়ার্কের স্টেট বিভ্রান্ত হয়ে পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-great-migration',
    title: {
      en: 'The Great Migration Quiz',
      bn: 'দ্য গ্রেট মাইগ্রেশন কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-classlist-add',
        kind: 'mcq',
        topic: 'Vanilla JS equivalent of .addClass()',
        question: {
          en: 'What is the modern standard native JavaScript equivalent of $(elem).addClass("selected")?',
          bn: '$(elem).addClass("selected")-এর আধুনিক নেটিভ জাভাস্ক্রিপ্ট রূপ কোনটি?'
        },
        options: [
          {
            en: 'elem.classList.add("selected")',
            bn: 'elem.classList.add("selected")'
          },
          {
            en: 'elem.className.append("selected")',
            bn: 'elem.className.append("selected")'
          },
          {
            en: 'elem.classes("selected")',
            bn: 'elem.classes("selected")'
          },
          {
            en: 'elem.setStyle("selected")',
            bn: 'elem.setStyle("selected")'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use the classList API on the element.',
          bn: 'উপাদানের নিজস্ব classList এপিআই ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'The classList property exposes add, remove, toggle, and contains methods for class manipulation natively.',
          bn: 'নেটিভ classList প্রপার্টিতে add, remove ও toggle মেথড রয়েছে যা কোনো লাইব্রেরি ছাড়াই ক্লাস পরিচালনা করে।'
        }
      },
      {
        id: 'q-jquery-fetch-vs-ajax',
        kind: 'mcq',
        topic: 'Native fetch API compared to $.ajax()',
        question: {
          en: 'How does the native fetch() API differ fundamentally from legacy $.ajax() regarding HTTP error responses like 404 or 500?',
          bn: '৪০৪ বা ৫০০ এর মতো এইচটিটিপি এরর রেসপন্সের ক্ষেত্রে নেটিভ fetch() এপিআই কীভাবে পুরোনো $.ajax()-এর চেয়ে আলাদা আচরণ করে?'
        },
        options: [
          {
            en: 'fetch() does not reject its promise on 404 or 500 status codes; it resolves normally and requires inspecting response.ok, unlike $.ajax which fires .fail()',
            bn: 'fetch() ৪০৪ বা ৫০০ স্ট্যাটাসে প্রমিজ রিজেক্ট করে না বরং সফলভাবে সমাধান করে এবং response.ok পরীক্ষা করতে হয়, যেখানে $.ajax সরাসরি .fail() চালাত'
          },
          {
            en: 'fetch() only works on localhost',
            bn: 'fetch কেবল লোকালহোস্টে কাজ করে'
          },
          {
            en: '$.ajax() only accepted XML data',
            bn: '$.ajax শুধু এক্সএমএল গ্রহণ করত'
          },
          {
            en: 'fetch() cannot make GET requests',
            bn: 'fetch দিয়ে GET করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'fetch resolves on HTTP errors; check response.ok.',
          bn: 'fetch এররেও প্রমিজ রিজেক্ট করে না, response.ok যাচাই করতে হয়।'
        },
        explanation: {
          en: 'fetch() only rejects on network failures. HTTP 404 or 500 responses resolve normally, requiring manual response.ok checks.',
          bn: 'fetch() শুধুমাত্র নেটওয়ার্ক পুরোপুরি বিচ্ছিন্ন হলে রিজেক্ট করে; সার্ভার ৪০৪ বা ৫০০ দিলেও প্রমিজ সফল থাকে, যা response.ok দিয়ে চেক করতে হয়।'
        }
      },
      {
        id: 'q-jquery-queryselectorall-iteration',
        kind: 'mcq',
        topic: 'Iterating over document.querySelectorAll results',
        question: {
          en: 'Unlike jQuery collections that support implicit iteration, how must a developer update multiple nodes selected by document.querySelectorAll(".items")?',
          bn: 'জেকোয়েরির মতো স্বয়ংক্রিয় ইটারেশন না থাকায় document.querySelectorAll(".items") দিয়ে পাওয়া একাধিক নোড কীভাবে আপডেট করতে হয়?'
        },
        options: [
          {
            en: 'By explicitly iterating using nodes.forEach(elem => ...) or a for...of loop',
            bn: 'স্পষ্টভাবে nodes.forEach(elem => ...) অথবা একটি for...of লুপ চালিয়ে'
          },
          {
            en: 'By calling document.refresh()',
            bn: 'document.refresh() কল করে'
          },
          {
            en: 'By waiting five seconds for the browser to loop',
            bn: 'ব্রাউজারের জন্য পাঁচ সেকেন্ড অপেক্ষা করে'
          },
          {
            en: 'Vanilla JavaScript automatically updates everything without loops',
            bn: 'ভ্যানিলা জাভাস্ক্রিপ্ট কোনো লুপ ছাড়াই নিজে থেকেই আপডেট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'NodeLists require explicit looping via .forEach() or for...of.',
          bn: 'নোডলিস্টের উপাদানগুলোতে পরিবর্তন আনতে আলাদা forEach বা লুপ ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'document.querySelectorAll returns a static NodeList. Updating elements requires explicit iteration via forEach or for...of.',
          bn: 'document.querySelectorAll একটি নোডলিস্ট দেয়, যার প্রতিটি উপাদানে পরিবর্তন ঘটাতে স্পষ্ট লুপ চালাতে হয়।'
        }
      },
      {
        id: 'q-jquery-dataset-api',
        kind: 'mcq',
        topic: 'Accessing data attributes via dataset',
        question: {
          en: 'What native JavaScript property directly mirrors the $(elem).data("userId", 42) caching and reading behavior for HTML5 data attributes?',
          bn: 'এইচটিএমএল৫ ডাটা অ্যাট্রিবিউট পড়ার ক্ষেত্রে $(elem).data("userId")-এর অনুরূপ নেটিভ জাভাস্ক্রিপ্ট প্রপার্টি কোনটি?'
        },
        options: [
          {
            en: 'elem.dataset.userId',
            bn: 'প্রপার্টি elem.dataset.userId'
          },
          {
            en: 'elem.htmlData.userId',
            bn: 'প্রপার্টি elem.htmlData.userId'
          },
          {
            en: 'elem.customAttributes[0]',
            bn: 'প্রপার্টি elem.customAttributes[0]'
          },
          {
            en: 'elem.readTag("userId")',
            bn: 'প্রপার্টি elem.readTag("userId")'
          }
        ],
        answer: 0,
        hint: {
          en: 'HTML5 custom attributes are accessed through the dataset property.',
          bn: 'এইচটিএমএল৫ কাস্টম ডাটা অ্যাট্রিবিউট dataset প্রপার্টির মাধ্যমে পাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'The element.dataset property provides camelCase access to all data-* attributes on the HTML element natively.',
          bn: 'element.dataset প্রপার্টি দিয়ে এইচটিএমএলের সমস্ত data-* অ্যাট্রিবিউটে কোনো লাইব্রেরি ছাড়াই সহজে অ্যাক্সেস পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: undefined
};
