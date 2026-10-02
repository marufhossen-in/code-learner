import type { Lesson } from '../../../lib/types';

export const graftingBenchLesson: Lesson = {
  slug: 'the-grafting-bench',
  tech: 'dom',
  title: {
    en: 'Element Creation, Mutation & DocumentFragment',
    bn: 'উপাদান তৈরি, মিউটেশন ও DocumentFragment'
  },
  summary: {
    en: 'Modifying the DOM dynamically is the core of modern single-page applications. Elements are instantiated with document.createElement and populated using attributes and textContent. For insertion, modern DOM APIs provide append, prepend, before, after, and replaceWith, completely superseding legacy methods like appendChild. For security, textContent must always be preferred over innerHTML when handling untrusted user input to prevent Cross-Site Scripting (XSS) attacks. For performance, modifying the live DOM repeatedly inside loops causes severe layout recalculations. For instance, appending 1000 list items directly to a container triggers 1000 reflow operations. By contrast, appending those 1000 items into a detached document.createDocumentFragment() and mounting the fragment once triggers exactly 1 reflow. This lesson teaches creation, mutation, sanitization, and batching.',
    bn: 'ডম ডায়নামিকভাবে পরিবর্তন করা আধুনিক ওয়েব অ্যাপ্লিকেশনের মূল কাজ। document.createElement দিয়ে নতুন উপাদান তৈরি করা হয় এবং অ্যাট্রিবিউট ও textContent দিয়ে সাজানো হয়। উপাদান যোগ করার জন্য আধুনিক ডম এপিআই append, prepend, before, after এবং replaceWith মেথড সরবরাহ করে যা পুরোনো appendChild-এর চেয়ে অনেক বেশি শক্তিশালী। নিরাপত্তার স্বার্থে ব্যবহারকারীর ইনপুট দেখানোর সময় ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ প্রতিরোধে innerHTML-এর বদলে সর্বদা textContent ব্যবহার করা উচিত। পারফরম্যান্সের ক্ষেত্রে লুপের ভেতর বারবার ডমে উপাদান যোগ করলে মারাত্মক রিফ্লো তৈরি হয়। যেমন সরাসরি লুপে ১০০০টি উপাদান যোগ করলে ১০০০ বার রিফ্লো ট্রিগার হয়। কিন্তু মেমোরিতে থাকা একটি document.createDocumentFragment()-এ সেই ১০০০টি উপাদান সাজিয়ে একবার মূল ডমে যুক্ত করলে মাত্র ১টি রিফ্লো ঘটে। এই পাঠে উপাদান তৈরি, রূপান্তর, নিরাপত্তা ও ব্যাচিং শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Dynamic DOM Tree Construction',
        bn: 'মূল ধারণা: ডায়নামিক ডম ট্রি নির্মাণ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'Whenever a user posts a comment, opens a modal, or fetches dynamic search results, your web application creates new elements on the fly. Doing this safely and efficiently requires understanding programmatic element instantiation, modern insertion primitives, and memory batching.',
        bn: 'ব্যবহারকারী যখন কোনো মন্তব্য করেন, পপআপ উইন্ডো খোলেন বা সার্চের ফলাফল দেখেন, তখন ওয়েব অ্যাপ নিজে থেকেই নতুন এইচটিএমএল উপাদান তৈরি করে। এটি নিরাপদ এবং দ্রুততম উপায়ে করতে হলে প্রোগ্রামাটিক এলিমেন্ট তৈরি, আধুনিক ইনসার্শন মেথড এবং মেমোরি ব্যাচিং সম্পর্কে সম্যক জ্ঞান থাকা আবশ্যক।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'DocumentFragment',
          def: {
            en: 'A minimal in-memory document node holding child elements without a parent, which empties its contents when appended to the live DOM',
            bn: 'মেমোরিতে থাকা একটি হালকা নোড কন্টেইনার যাতে চাইল্ড উপাদান রাখা যায় এবং মূল ডমে যুক্ত করলে এক ধাপে খালি হয়ে মিশে যায়'
          }
        },
        {
          term: 'textContent vs innerHTML',
          def: {
            en: 'textContent writes safe literal strings avoiding HTML parsing; innerHTML parses strings as markup and risks Cross-Site Scripting (XSS)',
            bn: 'textContent নিরাপদে সাধারণ লেখা যোগ করে, আর innerHTML স্ট্রিংকে কোড হিসেবে পার্স করে যা এক্সএসএস (XSS) নিরাপত্তা ঝুঁকি তৈরি করে'
          }
        },
        {
          term: 'insertAdjacentHTML(position, markup)',
          def: {
            en: 'An optimized method injecting HTML markup relative to an element (beforebegin, afterbegin, beforeend, afterend) without destroying existing nodes',
            bn: 'আগে থেকে থাকা নোডগুলো নষ্ট না করেই কোনো উপাদানের ঠিক আগে বা পরে এইচটিএমএল কোড বসানোর দ্রুততম মেথড'
          }
        },
        {
          term: 'cloneNode(deep)',
          def: {
            en: 'Duplicating an existing element, copying all nested children and attributes when deep is passed as true',
            bn: 'একটি তৈরি করা উপাদান হুবহু নকল করার মেথড, deep মান true দিলে ভেতরের সমস্ত চাইল্ড উপাদানসহ কপি হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'modern-mutation-table',
      text: {
        en: 'Modern vs Legacy DOM Mutation APIs',
        bn: 'আধুনিক বনাম পুরোনো ডম মিউটেশন পদ্ধতির তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Modern Mutation Methods and Their Legacy Equivalents',
        bn: 'আধুনিক ডম মিউটেশন মেথড এবং পুরোনো পদ্ধতির তুলনা'
      },
      head: [
        { en: 'Modern Method', bn: 'আধুনিক মেথড' },
        { en: 'Legacy Equivalent', bn: 'পুরোনো পদ্ধতি' },
        { en: 'Modern Advantages', bn: 'আধুনিক পদ্ধতির সুবিধা' }
      ],
      rows: [
        [
          { en: 'parent.append(...nodesOrStrings)', bn: 'parent.append(...nodesOrStrings)' },
          { en: 'parent.appendChild(node)', bn: 'parent.appendChild(node)' },
          { en: 'Accepts multiple arguments and raw strings without creating text nodes', bn: 'একসাথে একাধিক উপাদান এবং সরাসরি টেক্সট স্ট্রিং গ্রহণ করতে পারে' }
        ],
        [
          { en: 'parent.prepend(...nodesOrStrings)', bn: 'parent.prepend(...nodesOrStrings)' },
          { en: 'parent.insertBefore(node, parent.firstChild)', bn: 'parent.insertBefore(node, parent.firstChild)' },
          { en: 'Inserts nodes at the beginning of the child list in one concise call', bn: 'কোনো জটিলতা ছাড়া তালিকার একদম শুরুতে উপাদান যোগ করে' }
        ],
        [
          { en: 'element.remove()', bn: 'element.remove()' },
          { en: 'element.parentNode.removeChild(element)', bn: 'element.parentNode.removeChild(element)' },
          { en: 'Direct self-removal without referencing or checking parentNode', bn: 'প্যারেন্ট নোডের রেফারেন্স ছাড়াই সরাসরি নিজেকে মুছে ফেলতে পারে' }
        ],
        [
          { en: 'element.replaceWith(...nodes)', bn: 'element.replaceWith(...nodes)' },
          { en: 'parent.replaceChild(newChild, oldChild)', bn: 'parent.replaceChild(newChild, oldChild)' },
          { en: 'Replaces an element directly in place with one or more replacement nodes', bn: 'সরাসরি একটি উপাদানের জায়গায় নতুন এক বা একাধিক উপাদান বসিয়ে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: DocumentFragment Batch Reflow Calculator',
        bn: 'চালনাযোগ্য সিমুলেশন: DocumentFragment ব্যাচ রিফ্লো গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the reflow penalty when inserting 1000 items. Directly appending elements in a loop incurs 1000 reflow triggers, whereas batching elements into a DocumentFragment triggers exactly 1 reflow upon mounting:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০০টি উপাদান যোগ করার ক্ষেত্রে রিফ্লো হিসেব করে। সরাসরি লুপে উপাদান যোগ করলে ১০০০টি রিফ্লো ঘটে, অথচ DocumentFragment-এ সাজিয়ে যোগ করলে মাউন্ট করার সময় ঠিক ১টি রিফ্লো ঘটে:'
      }
    },
    {
      type: 'code',
      id: 'dom-fragment-sim',
      lang: 'javascript',
      code: `// DOM Batch Mutation & Reflow Optimization Engine
const itemsToAdd = 1000; // Number of items being generated

// Naive direct append inside loop triggers 1 reflow per iteration
const directAppendReflows = itemsToAdd;

// DocumentFragment batches all items offscreen in memory
// Triggering only 1 atomic reflow when attached to live DOM
const fragmentReflows = 1;

console.log('Total list items to create and insert:', itemsToAdd);
// -> Total list items to create and insert: 1000

console.log('Reflow count using naive direct appendChild in loop:', directAppendReflows);
// -> Reflow count using naive direct appendChild in loop: 1000

console.log('Reflow count using DocumentFragment batch insertion:', fragmentReflows);
// -> Reflow count using DocumentFragment batch insertion: 1`,
      caption: {
        en: 'Figure 1: Inserting 1000 items directly triggers 1000 reflows, while a DocumentFragment completes the batch in 1 reflow',
        bn: 'চিত্র ১: সরাসরি ১০০০টি উপাদান যোগ করলে ১০০০টি রিফ্লো ঘটে, যেখানে DocumentFragment ব্যবহারে মাত্র ১টি রিফ্লোতেই কাজ সম্পন্ন হয়'
      }
    },
    {
      type: 'heading',
      id: 'xss-sanitization-guide',
      text: {
        en: 'The innerHTML XSS Vulnerability',
        bn: 'innerHTML এবং বিপজ্জনক এক্সএসএস (XSS) ঝুঁকি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never concatenate untrusted user input directly into element.innerHTML. An attacker who inputs a malicious script tag or image with an onerror attribute can execute arbitrary JavaScript in the victim browser. Use textContent for plain text or sanitize markup thoroughly before injection.',
        bn: 'ব্যবহারকারীর পাঠানো কোনো লেখাকে কখনোই সরাসরি element.innerHTML-এ বসানো উচিত নয়। হ্যাকাররা ক্ষতিকর স্ক্রিপ্ট বা ত্রুটিযুক্ত ছবির ট্যাগ ইনজেক্ট করে ব্যবহারকারীর ব্রাউজারে অনাকাঙ্ক্ষিত জাভাস্ক্রিপ্ট চালাতে পারে। সাধারণ লেখার ক্ষেত্রে সর্বদা textContent ব্যবহার করুন অথবা ইনজেকশনের আগে কোড নিখুঁতভাবে স্যানিটাইজ করে নিন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cross-Site Scripting (XSS)',
          def: {
            en: 'A security vulnerability where attackers inject executable script markup into web pages viewed by other users',
            bn: 'একটি মারাত্মক নিরাপত্তা ত্রুটি যেখানে আক্রমণকারী অন্যের ব্রাউজারে ক্ষতিকর জাভাস্ক্রিপ্ট কোড চালিয়ে তথ্য চুরি করে'
          }
        },
        {
          term: 'HTML Sanitization API',
          def: {
            en: 'A modern browser API that safely strips dangerous tags and script handlers from HTML strings before insertion',
            bn: 'আধুনিক ব্রাউজার এপিআই যা স্ট্রিং থেকে সব ধরনের ক্ষতিকর স্ক্রিপ্ট ও ট্যাগ সাফ করে নিরাপদ কোড প্রদান করে'
          }
        },
        {
          term: 'HTML5 <template> Tag',
          def: {
            en: 'An HTML element whose contents are parsed into a detached DocumentFragment without executing scripts or loading images',
            bn: 'এইচটিএমএল ট্যাগ যার ভেতরের কনটেন্ট মেমোরিতে ফ্র্যাগমেন্ট হিসেবে জমা থাকে কিন্তু পেজে না বসা পর্যন্ত স্ক্রিপ্ট বা ছবি রান করে না'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-reflow-calc-ex',
      kind: 'mcq',
      topic: 'Reflow reduction when using DocumentFragment for 1000 items',
      question: {
        en: 'According to our batch mutation simulation, how many browser reflows occur when 1000 items are mounted using a DocumentFragment compared to direct loop appends?',
        bn: 'আমাদের ব্যাচ মিউটেশন সিমুলেশন অনুযায়ী সরাসরি লুপে যোগ করার বদলে DocumentFragment ব্যবহার করে ১০০০টি উপাদান মাউন্ট করলে কয়টি রিফ্লো ঘটে?'
      },
      options: [
        {
          en: '1 reflow (compared to 1000 direct reflows)',
          bn: '১টি রিফ্লো (সরাসরি ১০০০টি রিফ্লোর তুলনায়)'
        },
        {
          en: '1000 reflows',
          bn: '১০০০টি রিফ্লো'
        },
        {
          en: '500 reflows',
          bn: '৫০০টি রিফ্লো'
        },
        {
          en: '0 reflows',
          bn: '০টি রিফ্লো'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single atomic reflow upon mounting the fragment.',
        bn: 'ফ্র্যাগমেন্টটি যুক্ত করার সময় মাত্র একটি একক রিফ্লো ঘটার কথা ভাবুন।'
      },
      explanation: {
        en: 'All 1000 children are built detached in memory. Appending the fragment to the live DOM executes in a single reflow.',
        bn: '১০০০টি উপাদান মেমোরির বাইরে ফ্র্যাগমেন্টে সাজিয়ে এক ধাপে মূল পেজে যুক্ত করায় মাত্র ১টি রিফ্লোতেই কাজ শেষ হয়।'
      }
    },
    {
      id: 'dom-textcontent-vs-innerhtml-ex',
      kind: 'mcq',
      topic: 'Why textContent prevents XSS compared to innerHTML',
      question: {
        en: 'Why is element.textContent safe against Cross-Site Scripting (XSS) when displaying user-submitted profile names?',
        bn: 'ব্যবহারকারীর পাঠানো প্রোফাইল নাম দেখানোর ক্ষেত্রে element.textContent কেন ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণ থেকে নিরাপদ?'
      },
      options: [
        {
          en: 'textContent treats all characters as literal plain text, automatically escaping angle brackets rather than executing them as HTML markup',
          bn: 'textContent সমস্ত অক্ষরকে সাধারণ লেখা হিসেবে গ্রহণ করে এবং কোনো এইচটিএমএল ট্যাগ বা স্ক্রিপ্ট এক্সিকিউট না করে নিজে থেকেই সুরক্ষিত রাখে'
        },
        {
          en: 'textContent encrypts data using AES-256',
          bn: 'textContent ডেটাকে এনক্রিপ্ট করে'
        },
        {
          en: 'textContent only works when HTTPS is enabled',
          bn: 'textContent কেবল এইচটিটিপিএস থাকলেই কাজ করে'
        },
        {
          en: 'textContent converts all letters to uppercase',
          bn: 'textContent সব অক্ষরকে বড় হাতের বানিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Treats input as raw text without parsing markup.',
        bn: 'কোনো কোড না চালিয়ে সাধারণ লেখা হিসেবে প্রদর্শনের কথা ভাবুন।'
      },
      explanation: {
        en: 'textContent never invokes the HTML parser. Script tags and event handlers are rendered as harmless visible characters.',
        bn: 'textContent কোনো এইচটিএমএল পার্সার চালায় না, ফলে স্ক্রিপ্ট ট্যাগ থাকলেও তা কোড হিসেবে রান না করে সাধারণ অক্ষর হিসেবে দেখায়।'
      }
    },
    {
      id: 'dom-element-remove-ex',
      kind: 'mcq',
      topic: 'Advantage of element.remove over removeChild',
      question: {
        en: 'What advantage does the modern element.remove() method offer over legacy element.parentNode.removeChild(element)?',
        bn: 'পুরোনো element.parentNode.removeChild(element)-এর তুলনায় আধুনিক element.remove() মেথড ব্যবহারের সুবিধা কী?'
      },
      options: [
        {
          en: 'It directly removes the target element from the DOM without requiring a reference to its parentNode',
          bn: 'এটি প্যারেন্ট নোডের কোনো রেফারেন্স বা যাচাই ছাড়াই সরাসরি নির্দিষ্ট উপাদানটিকে ডম থেকে মুছে ফেলতে পারে'
        },
        {
          en: 'It automatically reloads the web page',
          bn: 'এটি পেজকে রিলোড করে দেয়'
        },
        {
          en: 'It frees up hard disk storage',
          bn: 'এটি হার্ড ডিস্কের মেমোরি খালি করে'
        },
        {
          en: 'It prevents other JavaScript scripts from running',
          bn: 'এটি অন্য স্ক্রিপ্ট চলা বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Self-removal without checking or fetching parentNode.',
        bn: 'প্যারেন্ট নোড না ডেকে সরাসরি নিজেকে মুছে ফেলার কথা ভাবুন।'
      },
      explanation: {
        en: 'element.remove() eliminates boilerplate parentNode traversal, providing a clean self-deletion API.',
        bn: 'element.remove() সরাসরি উপাদানটিকে পেজ থেকে সরিয়ে দেয়, ফলে প্যারেন্ট খোঁজার অতিরিক্ত কোড লিখতে হয় না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-grafting-bench',
    title: {
      en: 'DOM Element Creation & Mutation Quiz',
      bn: 'ডম উপাদান তৈরি ও মিউটেশন কুইজ'
    },
    questions: [
      {
        id: 'q-dom-fragment-live-transfer',
        kind: 'mcq',
        topic: 'Behavior of DocumentFragment children when appended',
        question: {
          en: 'What happens to the child elements inside a DocumentFragment after you call container.appendChild(fragment)?',
          bn: 'container.appendChild(fragment) কল করার পর DocumentFragment-এর ভেতরের চাইল্ড উপাদানগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'All child elements are transferred into the container, leaving the fragment completely empty in memory',
            bn: 'সমস্ত চাইল্ড উপাদান নতুন কন্টেইনারে স্থানান্তরিত হয়ে যায় এবং মেমোরিতে ফ্র্যাগমেন্টটি পুরোপুরি খালি হয়ে পড়ে থাকে'
          },
          {
            en: 'The fragment is duplicated 10 times',
            bn: 'ফ্র্যাগমেন্টটি ১০ বার কপি হয়'
          },
          {
            en: 'The child elements are deleted from memory',
            bn: 'চাইল্ড উপাদানগুলো মেমোরি থেকে মুছে যায়'
          },
          {
            en: 'The container itself is deleted',
            bn: 'কন্টেইনারটি ডিলিট হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'All children move to the container; the fragment becomes empty.',
          bn: 'সব চাইল্ড মূল উপাদানে চলে যায় এবং ফ্র্যাগমেন্টটি খালি হয়ে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'DocumentFragment acts as a temporary delivery envelope: mounting it moves all contained nodes into the target element.',
          bn: 'DocumentFragment একটি অস্থায়ী খামের মতো কাজ করে: এটি মূল ডমে যুক্ত করার সাথে সাথে ভেতরের সব উপাদান চলে যায় এবং খামটি খালি হয়ে যায়।'
        }
      },
      {
        id: 'q-dom-insert-adjacent-html-positions',
        kind: 'mcq',
        topic: 'Position strings for insertAdjacentHTML',
        question: {
          en: 'Which position parameter passed to element.insertAdjacentHTML() inserts markup directly inside the element, right before its closing tag?',
          bn: 'element.insertAdjacentHTML()-এ কোন পজিশন স্ট্রিংটি দিলে উপাদানটির একদম ভেতরে এবং শেষ ট্যাগের ঠিক আগে নতুন কোড বসে?'
        },
        options: [
          {
            en: '"beforeend"',
            bn: '"beforeend"'
          },
          {
            en: '"afterbegin"',
            bn: '"afterbegin"'
          },
          {
            en: '"beforebegin"',
            bn: '"beforebegin"'
          },
          {
            en: '"afterend"',
            bn: '"afterend"'
          }
        ],
        answer: 0,
        hint: {
          en: 'beforeend puts content just before the closing tag.',
          bn: 'ট্যাগের সমাপ্তির ঠিক আগে বসানোর জন্য "beforeend" ভাবুন।'
        },
        explanation: {
          en: '"beforeend" inserts HTML inside the element as its very last child, right before the closing tag.',
          bn: '"beforeend" দিলে নতুন এইচটিএমএল উপাদানটির ভেতরে সবার শেষে অর্থাৎ শেষ ট্যাগের ঠিক আগে গিয়ে যুক্ত হয়।'
        }
      },
      {
        id: 'q-dom-clonenode-deep-flag',
        kind: 'mcq',
        topic: 'Effect of the deep parameter in element.cloneNode(deep)',
        question: {
          en: 'What is the effect of passing true to element.cloneNode(true) compared to passing false?',
          bn: 'element.cloneNode(true)-তে true পাস করলে false পাসের তুলনায় কী অতিরিক্ত সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'true recursively clones all nested descendant elements and text nodes, while false clones only the outermost opening/closing tag',
            bn: 'true দিলে ভেতরের সমস্ত চাইল্ড উপাদান ও টেক্সটসহ পুরো ট্রি কপি হয়, আর false দিলে কেবল বাইরের মূল ট্যাগটি কপি হয়'
          },
          {
            en: 'true saves the clone to the cloud',
            bn: 'true দিলে ক্লাউডে সেভ হয়'
          },
          {
            en: 'false causes an infinite loop',
            bn: 'false দিলে লুপ আটকে যায়'
          },
          {
            en: 'There is no difference between true and false',
            bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deep cloning copies all nested children recursively.',
          bn: 'ভেতরের সমস্ত চাইল্ড নোডসহ সম্পূর্ণ ট্রি কপি হওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'cloneNode(true) creates a deep recursive clone including all children. cloneNode(false) creates a shallow clone of the outer shell.',
          bn: 'cloneNode(true) দিলে ভেতরের সব লেখা ও চাইল্ড উপাদান কপি হয়, যেখানে false দিলে শুধু ফাঁকা খোলসটি কপি হয়।'
        }
      },
      {
        id: 'q-dom-template-tag-behavior',
        kind: 'mcq',
        topic: 'How HTML5 template tags hold inert DOM structures',
        question: {
          en: 'Why is the HTML5 <template> tag ideal for declaring reusable component markup?',
          bn: 'পুনর্ব্যবহারযোগ্য কম্পোনেন্ট তৈরির জন্য এইচটিএমএল-৫ <template> ট্যাগ কেন সবচেয়ে উপযুক্ত?'
        },
        options: [
          {
            en: 'Its contents are parsed into an inert DocumentFragment, meaning images inside do not load and scripts do not execute until cloned into the live document',
            bn: 'এর কনটেন্ট মেমোরিতে একটি নিষ্ক্রিয় ফ্র্যাগমেন্ট হিসেবে থাকে, ফলে পেজে না বসানো পর্যন্ত ভেতরের ছবি লোড হয় না বা কোনো স্ক্রিপ্ট রান করে না'
          },
          {
            en: 'It makes text automatically translate into multiple languages',
            bn: 'এটি লেখাকে একাধিক ভাষায় অনুবাদ করে'
          },
          {
            en: 'It increases the internet connection speed',
            bn: 'এটি ইন্টারনেটের গতি বৃদ্ধি করে'
          },
          {
            en: 'It changes the mouse cursor to a magic wand',
            bn: 'এটি মাউসের কার্সার বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Inert parsing prevents premature script execution and image fetching.',
          bn: 'পেজে না আসা পর্যন্ত কোড বা ছবি রান না করার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: '<template> contents remain inert in memory until cloned, preventing wasted network bandwidth and early script execution.',
          bn: '<template> ট্যাগের উপাদানগুলো মেমোরিতে নিষ্ক্রিয় থাকে, ফলে প্রয়োজনের আগে অপ্রয়োজনীয় ব্যান্ডউইথ বা প্রসেসর নষ্ট হয় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pollinators-flight',
    tech: 'dom',
    title: {
      en: 'Event Propagation, Capturing, Bubbling & Delegation',
      bn: 'ইভেন্ট প্রোপাগেশন, ক্যাপচারিং, বাবলিং ও ডেলিগেশন'
    }
  }
};
