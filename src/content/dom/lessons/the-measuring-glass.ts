import type { Lesson } from '../../../lib/types';

export const measuringGlassLesson: Lesson = {
  slug: 'the-measuring-glass',
  tech: 'dom',
  title: {
    en: 'Layout Thrashing, Reflow & Repaint Optimization',
    bn: 'লেআউট থ্র্যাশিং, রিফ্লো ও রিপেইন্ট অপ্টিমাইজেশন'
  },
  summary: {
    en: 'Achieving consistent 60 FPS performance on interactive web pages requires understanding the browser rendering pipeline: Parse, Style, Layout, Paint, and Composite. Layout (also known as Reflow) computes geometric dimensions and coordinates for all nodes in the Render Tree. Layout thrashing (forced synchronous layout) occurs when JavaScript rapidly alternates between reading geometric layout properties (like offsetHeight or getBoundingClientRect) and writing style mutations inside loops. For instance, in a loop over 10 elements, interleaving reads and writes forces 10 synchronous layout recalculations. By batching all geometric reads in an initial pass before applying style writes in a second pass, the browser resolves the updates in 1 single reflow. This lesson teaches the rendering pipeline, geometric inspection, layout batching, and page lifecycle events.',
    bn: 'ইন্টার‍্যাক্টিভ ওয়েব পেজে ৬০ এফপিএস মসৃণ পারফরম্যান্স নিশ্চিত করতে ব্রাউজার রেন্ডারিং পাইপলাইনের ধাপগুলো (পার্স, স্টাইল, লেআউট, পেইন্ট ও কম্পোজিট) বোঝা অত্যন্ত জরুরি। লেআউট (বা রিফ্লো) রেন্ডার ট্রির প্রতিটি উপাদানের আকার ও অবস্থান হিসাব করে। যখন কোনো লুপে ডমের আকার পড়া (যেমন offsetHeight বা getBoundingClientRect) এবং স্টাইল লেখার কাজ বারবার একের পর এক করা হয়, তখন লেআউট থ্র্যাশিং ঘটে। যেমন ১০টি উপাদানের লুপে রিড ও রাইট মিশিয়ে ফেললে ব্রাউজারকে ১০ বার রিফ্লো করতে হয়। কিন্তু প্রথমে সব রিড অপারেশন শেষ করে পরে সব রাইট একবারে সম্পন্ন করলে ব্রাউজার মাত্র ১টি রিফ্লোতেই সমস্ত আপডেট সম্পন্ন করে। এই পাঠে রেন্ডারিং পাইপলাইন, জ্যামিতিক পরিমাপ, লেআউট ব্যাচিং এবং পেজ লাইফসাইকেল ইভেন্টসমূহ শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: The Critical Rendering Pipeline',
        bn: 'মূল ধারণা: ক্রিটিক্যাল রেন্ডারিং পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your JavaScript code changes an element width or text content, the browser cannot magically repaint pixels in isolation. Instead, it must execute the critical rendering pipeline: recalculate CSS styles, compute physical box dimensions (Layout / Reflow), fill pixel colors (Paint), and composite GPU layers.',
        bn: 'জাভাস্ক্রিপ্ট কোড যখন কোনো উপাদানের প্রস্থ বা লেখা পরিবর্তন করে, তখন ব্রাউজার সাথে সাথে পিক্সেল আঁকতে পারে না। বরং তাকে ক্রিটিক্যাল রেন্ডারিং পাইপলাইন সম্পন্ন করতে হয়: সিএসএস স্টাইল হিসাব করা, উপাদানগুলোর বাস্তব আকার ও অবস্থান নির্ধারণ করা (লেআউট বা রিফ্লো), পিক্সেলের রঙ দেওয়া (পেইন্ট) এবং সবশেষে জিপিইউ লেয়ারগুলো একত্রিত করা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Layout / Reflow',
          def: {
            en: 'The browser calculation determining the physical geometry, position, and dimensions of every node in the Render Tree',
            bn: 'ব্রাউজারের সবচেয়ে ভারী হিসাব যার মাধ্যমে রেন্ডার ট্রির প্রতিটি উপাদানের সঠিক মাপ, উচ্চতা, প্রস্থ ও অবস্থান নির্ণয় করা হয়'
          }
        },
        {
          term: 'Layout Thrashing',
          def: {
            en: 'Forced Synchronous Layout caused by interleaving DOM geometry reads and writes in tight loops, destroying framerates',
            bn: 'লুপের ভেতর বারবার ডমের আকার পড়া ও লেখার কারণে ব্রাউজারকে জোরপূর্বক প্রতি ধাপে রিফ্লো করতে বাধ্য করার পারফরম্যান্স ত্রুটি'
          }
        },
        {
          term: 'getBoundingClientRect()',
          def: {
            en: 'A method returning a DOMRect providing the exact viewport-relative floating-point dimensions (x, y, width, height) of an element',
            bn: 'ভিউোর্টের সাপেক্ষে একটি উপাদানের অত্যন্ত নির্ভুল চারকোনা মাপ (x, y, width, height) প্রদানকারী মেথড'
          }
        },
        {
          term: 'DOMContentLoaded vs load',
          def: {
            en: 'DOMContentLoaded fires when the HTML tree is parsed; load fires after all external assets (images, stylesheets) finish downloading',
            bn: 'DOMContentLoaded ফায়ার হয় যখন এইচটিএমএল ট্রি তৈরি শেষ হয়; আর load অপেক্ষা করে সমস্ত ছবি ও সিএসএস ডাউনলোড শেষ হওয়া পর্যন্ত'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'reflow-triggers-table',
      text: {
        en: 'Common Layout-Forcing Properties and Methods',
        bn: 'রিফ্লো বাধ্যকারী প্রধান প্রধান প্রপার্টি ও মেথডসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'DOM Properties That Force Synchronous Layout Recalculation When Read After Writes',
        bn: 'ডম লেখার পর যে প্রপার্টিগুলো পড়লে ব্রাউজার অবিলম্বে রিফ্লো করতে বাধ্য হয়'
      },
      head: [
        { en: 'Layout Read Property', bn: 'প্রপার্টি' },
        { en: 'Measurement Category', bn: 'পরিমাপের ধরন' },
        { en: 'Safe Usage Guideline', bn: 'নিরাপদ ব্যবহারের নিয়ম' }
      ],
      rows: [
        [
          { en: 'element.offsetWidth / offsetHeight', bn: 'element.offsetWidth / offsetHeight' },
          { en: 'Outer box size including borders and padding', bn: 'বর্ডার ও প্যাডিংসহ বাইরের মোট আকার' },
          { en: 'Cache value in variables before executing style mutations', bn: 'স্টাইল পরিবর্তনের আগে ভ্যারিয়েবলে মান সংরক্ষণ করে রাখুন' }
        ],
        [
          { en: 'element.clientWidth / clientHeight', bn: 'element.clientWidth / clientHeight' },
          { en: 'Inner viewport content size excluding borders', bn: 'বর্ডার বাদে ভেতরের কনটেন্টের আকার' },
          { en: 'Perform all reads in an initial pass before styling passes', bn: 'স্টাইল লেখার আগে সমস্ত রিড একসাথে সম্পন্ন করুন' }
        ],
        [
          { en: 'element.getBoundingClientRect()', bn: 'element.getBoundingClientRect()' },
          { en: 'Sub-pixel viewport-relative bounding box rectangle', bn: 'পিক্সেল-ভগ্নাংশসহ ভিউপোর্ট সাপেক্ষ অবস্থান' },
          { en: 'Batch across collections using fast array mapping loops', bn: 'অ্যারে ম্যাপ লুপ দিয়ে সমস্ত উপাদান একসাথে পরিমাপ করুন' }
        ],
        [
          { en: 'window.getComputedStyle(element)', bn: 'window.getComputedStyle(element)' },
          { en: 'Fully resolved live CSS styles applied by the browser', bn: 'ব্রাউজার দ্বারা প্রযুক্ত চূড়ান্ত সিএসএস স্টাইল' },
          { en: 'Never read computed styles inside animation loops', bn: 'অ্যানিমেশন লুপের ভেতর কখনোই এটি বারবার পড়বেন না' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Layout Thrashing vs Batched Reflow Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: লেআউট থ্র্যাশিং বনাম ব্যাচড রিফ্লো গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates updating 10 cards. Interleaving geometry reads with style writes triggers 10 forced reflows, while separating reads into pass 1 and writes into pass 2 reduces the penalty to 1 reflow:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০টি কার্ডের আপডেট সিমুলেট করে। রিড ও রাইট মিশিয়ে ফেললে ১০টি রিফ্লো ঘটে, কিন্তু ধাপ ১ তে সব রিড এবং ধাপ ২ তে সব রাইট আলাদা করলে মাত্র ১টি রিফ্লোতে কাজ শেষ হয়:'
      }
    },
    {
      type: 'code',
      id: 'dom-reflow-sim',
      lang: 'javascript',
      code: `// DOM Layout Thrashing & Read-Write Batching Engine
const loopElements = 10; // Number of cards being resized

// Naive: reading offsetHeight and immediately writing style.height
// Forces the browser to recalculate layout on every iteration
const thrashedReflows = loopElements;

// Optimized: Pass 1 reads all heights; Pass 2 applies all style mutations
// Consolidates layout invalidation into a single atomic reflow
const batchedReflows = 1;

console.log('Total card elements being processed:', loopElements);
// -> Total card elements being processed: 10

console.log('Forced synchronous reflows in interleaved loop:', thrashedReflows);
// -> Forced synchronous reflows in interleaved loop: 10

console.log('Consolidated reflows using read-then-write batching:', batchedReflows);
// -> Consolidated reflows using read-then-write batching: 1`,
      caption: {
        en: 'Figure 1: Processing 10 elements in an interleaved loop causes 10 reflows, whereas batching reduces layout cost to 1 reflow',
        bn: 'চিত্র ১: ১০টি উপাদান রিড-রাইট মিশিয়ে প্রসেস করলে ১০টি রিফ্লো হয়, যেখানে ব্যাচিং ব্যবহারে খরচ কমে মাত্র ১টি রিফ্লোতে নেমে আসে'
      }
    },
    {
      type: 'heading',
      id: 'fastdom-batch-pattern',
      text: {
        en: 'The Read-Then-Write Architecture Pattern',
        bn: 'প্রথমে রিড পরে রাইট আর্কিটেকচার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To eliminate layout thrashing across complex web applications, always enforce a strict two-pass architecture. In phase 1, read all required dimensions (such as element.offsetHeight) into JavaScript variables. In phase 2, apply all style mutations (such as element.style.height) simultaneously.',
        bn: 'জটিল ওয়েব অ্যাপ্লিকেশনে লেআউট থ্র্যাশিং পুরোপুরি নির্মূল করতে সর্বদা দুই ধাপের নিয়ম মেনে চলুন। ধাপ ১ তে প্রয়োজনীয় সমস্ত আকার (যেমন element.offsetHeight) জাভাস্ক্রিপ্ট ভ্যারিয়েবলে পড়ে নিন। এরপর ধাপ ২ তে সমস্ত স্টাইল পরিবর্তন (যেমন element.style.height) একসাথে প্রয়োগ করুন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'document.readyState Stages',
          def: {
            en: 'The loading lifecycle string indicating whether the document is "loading", "interactive", or "complete"',
            bn: 'পেজ লোডিংয়ের অবস্থা প্রকাশক স্ট্রিং যা নির্দেশ করে ডকুমেন্টটি "loading", "interactive" নাকি "complete"'
          }
        },
        {
          term: 'FastDOM & requestAnimationFrame Batching',
          def: {
            en: 'Coalescing DOM writes into window.requestAnimationFrame callbacks so style updates execute immediately before the next repaint',
            bn: 'সমস্ত ডম রাইট অপারেশনকে requestAnimationFrame-এ জমিয়ে রাখা যাতে পরবর্তী স্ক্রিন পেইন্টের ঠিক আগে একবারে রান হয়'
          }
        },
        {
          term: 'CSS transform vs top/left',
          def: {
            en: 'Animating transforms (translate, scale) bypasses Layout and Paint entirely, executing purely on the GPU Compositor thread',
            bn: 'টপ বা লেফটের বদলে সিএসএস transform দিয়ে অ্যানিমেশন করলে লেআউট ও পেইন্ট এড়িয়ে সরাসরি জিপিইউতে মসৃণভাবে চলে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-thrashing-calc-ex',
      kind: 'mcq',
      topic: 'Reflow comparison for 10 elements',
      question: {
        en: 'According to our simulation, how many forced reflows occur when 10 elements are processed in an interleaved loop compared to a batched loop?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী ১০টি উপাদান রিড-রাইট মিশিয়ে প্রসেস করলে এবং ব্যাচ করে প্রসেস করলে কয়টি করে রিফ্লো ঘটে?'
      },
      options: [
        {
          en: '10 reflows interleaved vs 1 reflow batched',
          bn: 'মিশ্রিত লুপে ১০টি রিফ্লো বনাম ব্যাচড লুপে ১টি রিফ্লো'
        },
        {
          en: '1 reflow interleaved vs 10 reflows batched',
          bn: 'মিশ্রিত লুপে ১টি রিফ্লো বনাম ব্যাচড লুপে ১০টি রিফ্লো'
        },
        {
          en: '5 reflows in both cases',
          bn: 'উভয় ক্ষেত্রেই ৫টি রিফ্লো'
        },
        {
          en: '0 reflows in both cases',
          bn: 'উভয় ক্ষেত্রেই ০টি রিফ্লো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Interleaving forces 10 reflows; batching needs only 1.',
        bn: 'মিশ্রিত কোডে ১০ বার রিফ্লো এবং ব্যাচিংয়ে মাত্র ১ বার রিফ্লোর কথা ভাবুন।'
      },
      explanation: {
        en: 'Interleaving reads and writes forces 10 synchronous recalculations. Batching combines writes into 1 single layout pass.',
        bn: 'মিশ্রিত লুপে ব্রাউজার বাধ্য হয়ে প্রতি ধাপে রিফ্লো করে ১০টি রিফ্লো ট্রিগার করে, আর ব্যাচিংয়ে মাত্র ১টিতেই সব শেষ হয়।'
      }
    },
    {
      id: 'dom-domcontentloaded-vs-load-ex',
      kind: 'mcq',
      topic: 'Difference between DOMContentLoaded and load events',
      question: {
        en: 'How does the "DOMContentLoaded" event differ from the window "load" event?',
        bn: '"DOMContentLoaded" ইভেন্ট উইন্ডোর "load" ইভেন্টের চেয়ে কীভাবে আলাদা?'
      },
      options: [
        {
          en: 'DOMContentLoaded fires as soon as the HTML document is completely parsed into the DOM tree without waiting for external images and stylesheets to finish downloading',
          bn: 'DOMContentLoaded এইচটিএমএল কোড ডম ট্রিতে পার্স হওয়া মাত্রই কার্যকর হয় এবং বাইরের ছবি বা সিএসএস ফাইল ডাউনলোড শেষ হওয়ার জন্য অপেক্ষা করে না'
        },
        {
          en: 'DOMContentLoaded only fires on mobile phones',
          bn: 'DOMContentLoaded কেবল মোবাইলে চলে'
        },
        {
          en: 'load fires before the HTML file is downloaded',
          bn: 'এইচটিএমএল ডাউনলোড হওয়ার আগেই load ফায়ার হয়'
        },
        {
          en: 'There is no difference between them',
          bn: 'এদের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'DOMContentLoaded triggers once the DOM is ready; load waits for all subresources.',
        bn: 'ডম ট্রি তৈরি হলেই DOMContentLoaded চলে, আর সব ছবি-সিএসএস আসার পর load চলে।'
      },
      explanation: {
        en: 'DOMContentLoaded fires when the DOM is ready for scripting. The load event waits until all external assets (images, frames, styles) are loaded.',
        bn: 'জাভাস্ক্রিপ্ট চালানোর মতো ডম তৈরি হলেই DOMContentLoaded ফায়ার হয়, আর ছবিসহ সব রিসোর্স ডাউনলোড হলে load ফায়ার হয়।'
      }
    },
    {
      id: 'dom-gpu-transform-ex',
      kind: 'mcq',
      topic: 'Why CSS transform outperforms top and left for animations',
      question: {
        en: 'Why do front-end engineers animate elements using CSS "transform: translate()" instead of "top" and "left"?',
        bn: 'অ্যানিমেশন তৈরির সময় ফ্রন্ট-এন্ড ইঞ্জিনিয়াররা "top" ও "left"-এর বদলে কেন সিএসএস "transform: translate()" ব্যবহার করেন?'
      },
      options: [
        {
          en: 'transform mutations bypass the Layout and Paint phases entirely, executing directly on the GPU Compositor thread at 60 FPS without triggering reflows',
          bn: 'transform পরিবর্তন ব্রাউজারের লেআউট ও পেইন্ট পর্যায় সম্পূর্ণ এড়িয়ে সরাসরি জিপিইউ কম্পোজিটর থ্রেডে চলে, ফলে কোনো রিফ্লো ছাড়াই ৬০ এফপিএস গতি পাওয়া যায়'
        },
        {
          en: 'transform is the only property supported in HTML5',
          bn: 'transform একমাত্র প্রপার্টি যা এইচটিএমএল-৫ এ চলে'
        },
        {
          en: 'top and left require paying an internet license fee',
          bn: 'top এবং left ব্যবহার করতে টাকা লাগে'
        },
        {
          en: 'transform changes the text font size',
          bn: 'transform ফন্ট সাইজ বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Runs on the GPU compositor thread without triggering layout reflows.',
        bn: 'লেআউট রিফ্লো না ঘটিয়ে সরাসরি জিপিইউ থ্রেডে চলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Transforms do not affect geometric layout of surrounding elements, allowing the GPU to composite the layer smoothly without main-thread reflow.',
        bn: 'transform আশেপাশের উপাদানের আকারে প্রভাব ফেলে না, তাই জিপিইউ কোনো রিফ্লো না ঘটিয়ে অতি দ্রুত উপাদানকে সরিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-measuring-glass',
    title: {
      en: 'DOM Layout Performance & Geometry Quiz',
      bn: 'ডম লেআউট পারফরম্যান্স ও জ্যামিতি কুইজ'
    },
    questions: [
      {
        id: 'q-dom-getboundingclientrect-properties',
        kind: 'mcq',
        topic: 'Properties returned by element.getBoundingClientRect()',
        question: {
          en: 'Which measurements does element.getBoundingClientRect() return in its DOMRect object?',
          bn: 'element.getBoundingClientRect() মেথডটি তার DOMRect অবজেক্টে কোন পরিমাপগুলো প্রদান করে?'
        },
        options: [
          {
            en: 'top, right, bottom, left, width, height, x, and y coordinates relative to the current browser viewport',
            bn: 'বর্তমান ব্রাউজার ভিউপোর্টের সাপেক্ষে top, right, bottom, left, width, height, x এবং y স্থানাঙ্ক'
          },
          {
            en: 'Only the file size of the HTML document',
            bn: 'শুধুমাত্র এইচটিএমএল ফাইলের সাইজ'
          },
          {
            en: 'Only the RGB color values of the background',
            bn: 'কেবল ব্যাকগ্রাউন্ডের রঙের মান'
          },
          {
            en: 'The number of characters inside the element',
            bn: 'উপাদানটির ভেতরের অক্ষরের সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Precise viewport-relative bounding box dimensions.',
          bn: 'ভিউোর্টের সাপেক্ষে চারকোনা বক্সের অবস্থানের কথা ভাবুন।'
        },
        explanation: {
          en: 'getBoundingClientRect() supplies exact sub-pixel viewport coordinates: top, right, bottom, left, width, height, x, and y.',
          bn: 'getBoundingClientRect() স্ক্রিনের সাপেক্ষে একটি উপাদানের অত্যন্ত নির্ভুল চারকোনা পরিমাপ ও স্থানাঙ্ক প্রদান করে।'
        }
      },
      {
        id: 'q-dom-ready-state-complete',
        kind: 'mcq',
        topic: 'Value of document.readyState after all assets load',
        question: {
          en: 'What is the value of document.readyState after the page and all sub-resources (images, stylesheets) have finished loading?',
          bn: 'পেজ এবং সমস্ত রিসোর্স (ছবি, সিএসএস) পুরোপুরি লোড হওয়ার পর document.readyState-এর মান কী হয়?'
        },
        options: [
          {
            en: '"complete"',
            bn: '"complete"'
          },
          {
            en: '"interactive"',
            bn: '"interactive"'
          },
          {
            en: '"loading"',
            bn: '"loading"'
          },
          {
            en: '"finished"',
            bn: '"finished"'
          }
        ],
        answer: 0,
        hint: {
          en: 'Transitions from "loading" to "interactive" to "complete".',
          bn: '"loading" থেকে "interactive" এবং সবশেষে "complete" হওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'document.readyState progresses through "loading" (parsing), "interactive" (DOM ready), and "complete" (all assets downloaded).',
          bn: 'সমস্ত রিসোর্স লোড শেষ হলে document.readyState-এর মান "complete" হয়ে যায়।'
        }
      },
      {
        id: 'q-dom-forced-synchronous-layout',
        kind: 'mcq',
        topic: 'Definition of Forced Synchronous Layout',
        question: {
          en: 'What causes Forced Synchronous Layout (FSL) during JavaScript execution?',
          bn: 'জাভাস্ক্রিপ্ট চলার সময় কোন কাজের কারণে বাধ্যতামূলক সিঙ্ক্রোনাস লেআউট (FSL) তৈরি হয়?'
        },
        options: [
          {
            en: 'Reading layout geometry properties (like offsetHeight) after mutating styles (like element.style.width), forcing the browser to calculate layout immediately rather than waiting for next frame',
            bn: 'স্টাইল পরিবর্তনের (যেমন element.style.width) পর জ্যামিতিক মাপ (যেমন offsetHeight) পড়ার কারণে ব্রাউজারকে পরবর্তী ফ্রেমের অপেক্ষা না করে তৎক্ষণাৎ লেআউট হিসাব করতে বাধ্য করা'
          },
          {
            en: 'Downloading images that are larger than 1 MB',
            bn: '১ মেগাবাইটের চেয়ে বড় ছবি ডাউনলোড করা'
          },
          {
            en: 'Connecting to a slow Wi-Fi network',
            bn: 'ধীরগতির ওয়াইফাই ব্যবহার করা'
          },
          {
            en: 'Opening the browser developer tools',
            bn: 'ডেভেলপার টুলস চালু রাখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reading layout metrics after mutating styles forces immediate synchronous reflow.',
          bn: 'স্টাইল লিখে তৎক্ষণাৎ আকার মাপার কারণে ব্রাউজারের আটকে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'FSL occurs when JavaScript asks for geometry after invalidating layout, forcing an immediate synchronous reflow before the JS turn ends.',
          bn: 'ডমে কোনো স্টাইল লিখে তৎক্ষণাৎ তার সাইজ মাপতে গেলে ব্রাউজার বাধ্য হয়ে তৎক্ষণাৎ রিফ্লো চালায়, যা সাইটকে স্লো করে।'
        }
      },
      {
        id: 'q-dom-scroll-passive-opt',
        kind: 'mcq',
        topic: 'Optimizing window scroll listeners',
        question: {
          en: 'Why should window scroll handlers be debounced or throttled with requestAnimationFrame?',
          bn: 'উইন্ডোর স্ক্রোল হ্যান্ডলারকে কেন requestAnimationFrame বা থ্রটলিং দিয়ে অপ্টিমাইজ করা উচিত?'
        },
        options: [
          {
            en: 'Scroll events fire dozens of times per second; performing heavy DOM reads in unthrottled handlers creates severe frame jank and lag',
            bn: 'স্ক্রোল ইভেন্ট প্রতি সেকেন্ডে বহুবার চলতে থাকে; থ্রটলিং ছাড়া ভারী কাজ করলে স্ক্রিনের অ্যানিমেশন আটকে গিয়ে মারাত্মক ল্যাগ তৈরি হয়'
          },
          {
            en: 'Unthrottled scroll handlers automatically delete the document',
            bn: 'স্ক্রোল হ্যান্ডলার পেজ মুছে দেয়'
          },
          {
            en: 'Mobile phones restart automatically if scroll is not throttled',
            bn: 'মোবাইল ফোন রিস্টার্ট হয়ে যায়'
          },
          {
            en: 'The W3C specification strictly bans the scroll event',
            bn: 'ডব্লিউথ্রিসিতে স্ক্রোল ইভেন্ট নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prevents CPU saturation from rapid per-pixel scroll event firing.',
          bn: 'প্রতিটি স্ক্রোল পিক্সেলে বারবার কোড রান হওয়া ঠেকানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Scroll events fire at high frequency. Throttling calculations with rAF limits work to once per hardware frame (60 FPS).',
          bn: 'স্ক্রোল ইভেন্ট অনবরত চলতে থাকে। requestAnimationFrame দিয়ে একে প্রতি ফ্রেমে মাত্র একবার চালানোর ব্যবস্থা করলে ৬০ এফপিএসে পারফরম্যান্স মসৃণ থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-wildlife-stewards',
    tech: 'dom',
    title: {
      en: 'Modern Observers: Intersection, Resize & Mutation',
      bn: 'আধুনিক অবজারভার: ইন্টারসেকশন, রিসাইজ ও মিউটেশন'
    }
  }
};
