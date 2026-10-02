import type { Lesson } from '../../../lib/types';

export const pollinatorsFlightLesson: Lesson = {
  slug: 'the-pollinators-flight',
  tech: 'dom',
  title: {
    en: 'Event Propagation, Capturing, Bubbling & Delegation',
    bn: 'ইভেন্ট প্রোপাগেশন, ক্যাপচারিং, বাবলিং ও ডেলিগেশন'
  },
  summary: {
    en: 'Managing user interactions across complex web applications requires mastering the event lifecycle. According to the W3C specification, every browser event travels through 3 distinct phases. It starts with the Capturing phase (phase 1) traveling down from window to target, reaches the Target phase (phase 2) at the source element, and concludes with the Bubbling phase (phase 3) propagating upwards through parent ancestors. Controlling this flow relies on stopPropagation to halt traversal and preventDefault to cancel native browser actions like link navigation. Rather than attaching individual listeners to 100 list items (creating 100 listener objects in memory), production applications use event delegation by binding exactly 1 listener to the parent element and identifying targets via e.target.closest. This lesson teaches event flow phases, propagation cancellation, and event delegation.',
    bn: 'ওয়েব অ্যাপ্লিকেশনে ব্যবহারকারীর ইন্টার‍্যাকশন কার্যকরভাবে পরিচালনা করতে ইভেন্টের জীবনচক্র বোঝা অপরিহার্য। ডব্লিউথ্রিসি স্ট্যান্ডার্ড অনুযায়ী প্রতিটি ব্রাউজার ইভেন্ট ৩টি নির্দিষ্ট ধাপে চলাচল করে। এটি শুরু হয় ক্যাপচারিং ধাপ (ধাপ ১) দিয়ে যা window থেকে টার্গেটের দিকে নামে, এরপর মূল উপাদানে পৌঁছায় টার্গেট ধাপ (ধাপ ২), এবং সবশেষে প্যারেন্টদের মধ্য দিয়ে ওপরে ওঠার বাবলিং ধাপ (ধাপ ৩) সম্পন্ন হয়। এই প্রবাহ নিয়ন্ত্রণে ইভেন্ট থামিয়ে দিতে stopPropagation এবং লিংকে প্রবেশ বা ফর্ম জমা হওয়ার মতো ডিফল্ট আচরণ ঠেকাতে preventDefault ব্যবহৃত হয়। ১০০টি আইটেমের প্রতিটিতে আলাদা করে ১০০টি লিসেনার না বসিয়ে প্যারেন্টে মাত্র ১টি লিসেনার বসিয়ে e.target.closest দিয়ে উপাদান শনাক্ত করার কৌশলকে ইভেন্ট ডেলিগেশন বলে। এই পাঠে ইভেন্টের ৩টি ধাপ, বিস্তার প্রতিরোধ এবং ডেলিগেশন শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: The Three Phases of Event Flow',
        bn: 'মূল ধারণা: ইভেন্ট প্রবাহের তিনটি ধাপ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you click a button nested inside multiple layers of HTML elements, the event does not fire only on that button. Instead, the browser initiates a bidirectional journey through the document tree: down from the window, through the target, and back up to the top.',
        bn: 'আপনি যখন একাধিক এইচটিএমএল উপাদানের গভীরে থাকা একটি বাটনে ক্লিক করেন, তখন ইভেন্টটি কেবল সেই বাটনেই সীমাবদ্ধ থাকে না। বরং ব্রাউজার পুরো ডকুমেন্ট ট্রি জুড়ে একটি দ্বিমুখী যাত্রা শুরু করে: প্রথমে উইন্ডো থেকে নিচের দিকে নামে, তারপর বাটনে পৌঁছায় এবং সেখান থেকে পুনরায় ওপরের দিকে উঠে আসে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Capturing Phase (Phase 1)',
          def: {
            en: 'The descent of the event from window through ancestor elements down to the target (activated via { capture: true })',
            bn: 'ইভেন্টের ওপর থেকে নিচে নামার ধাপ যা window থেকে শুরু করে প্যারেন্টগুলোর মধ্য দিয়ে টার্গেটের দিকে নামে'
          }
        },
        {
          term: 'Target Phase (Phase 2)',
          def: {
            en: 'The instant the event reaches the actual originating element referenced by event.target',
            bn: 'যে মুহূর্তে ইভেন্টটি আসল ক্লিকে তৈরি হওয়া উপাদানটিতে পৌঁছায়'
          }
        },
        {
          term: 'Bubbling Phase (Phase 3)',
          def: {
            en: 'The ascent of the event from the target upward through ancestor elements back to the window (the default listener behavior)',
            bn: 'ইভেন্টের নিচ থেকে ওপরে ওঠার ধাপ যা টার্গেট থেকে শুরু করে প্যারেন্টগুলোর মধ্য দিয়ে উইন্ডো পর্যন্ত পৌঁছায়'
          }
        },
        {
          term: 'Event Delegation',
          def: {
            en: 'Attaching a single event handler to a common ancestor to manage events across all present and future children via bubbling',
            bn: 'বাবলিং সুবিধার সাহায্যে প্রতিটি চাইল্ডে আলাদা লিসেনার না লাগিয়ে তাদের মূল প্যারেন্টে একটিমাত্র লিসেনার বসিয়ে সব নিয়ন্ত্রণ করা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'event-control-table',
      text: {
        en: 'Event Interruption and Cancellation Methods',
        bn: 'ইভেন্ট নিয়ন্ত্রণ ও থামানোর প্রধান পদ্ধতিসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Event Control Methods on the Event Object',
        bn: 'ইভেন্ট অবজেক্টের বিভিন্ন নিয়ন্ত্রণ মেথডের তুলনা'
      },
      head: [
        { en: 'Event Method', bn: 'মেথড' },
        { en: 'Propagation Effect', bn: 'বিস্তারে প্রভাব' },
        { en: 'Browser Default Action', bn: 'ব্রাউজারের ডিফল্ট আচরণ' }
      ],
      rows: [
        [
          { en: 'e.stopPropagation()', bn: 'e.stopPropagation()' },
          { en: 'Stops the event from bubbling up or capturing further', bn: 'ইভেন্টটিকে আর ওপরে বা নিচে ছড়াতে দেয় না' },
          { en: 'Default action continues normally (e.g. checkbox still checks)', bn: 'ডিফল্ট কাজ স্বাভাবিকভাবে চলে (যেমন চেকবক্স টিক হয়)' }
        ],
        [
          { en: 'e.stopImmediatePropagation()', bn: 'e.stopImmediatePropagation()' },
          { en: 'Halts bubbling AND prevents other listeners on the SAME element from executing', bn: 'ওপরে ছড়ানো বন্ধ করে এবং একই উপাদানের অন্য লিসেনারগুলোকেও আটকে দেয়' },
          { en: 'Default action continues normally', bn: 'ডিফল্ট কাজ স্বাভাবিকভাবে চলে' }
        ],
        [
          { en: 'e.preventDefault()', bn: 'e.preventDefault()' },
          { en: 'Does NOT stop propagation (event continues bubbling up)', bn: 'বিস্তার থামায় না (ইভেন্ট যথারীতি ওপরে ওঠে)' },
          { en: 'Cancels browser native behavior (e.g. cancels link navigation or form submit)', bn: 'ব্রাউজারের আসল আচরণ বাতিল করে (যেমন লিংক খোলা বা ফর্ম সাবমিট বন্ধ করে)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Propagation Phases and Delegation Memory Savings',
        bn: 'চালনাযোগ্য সিমুলেশন: প্রোপাগেশন ধাপ ও ডেলিগেশনের মেমোরি সাশ্রয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the 3 standard W3C event phases (capture 1, target 2, bubble 3) and compares listener allocations for 100 list items, reducing 100 individual listeners down to 1 delegated listener:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ডব্লিউথ্রিসি ইভেন্টের ৩টি ধাপ (ক্যাপচার ১, টার্গেট ২, বাবল ৩) এবং ১০০টি তালিকা উপাদানের জন্য মেমোরি খরচ সিমুলেট করে ১০০টি লিসেনারের বদলে মাত্র ১টি ডেলিগেটেড লিসেনারে কমিয়ে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'dom-events-sim',
      lang: 'javascript',
      code: `// DOM Event Propagation Phases & Delegation Engine
const phaseCapture = 1; // Event.CAPTURING_PHASE
const phaseTarget = 2;  // Event.AT_TARGET
const phaseBubble = 3;  // Event.BUBBLING_PHASE

const listItems = 100; // Number of list items rendered

// Without delegation: bind 1 listener per list item
const individualListeners = listItems;

// With event delegation: bind 1 single listener to parent <ul>
const delegatedListeners = 1;

console.log('W3C Capturing Phase constant identifier:', phaseCapture);
// -> W3C Capturing Phase constant identifier: 1

console.log('W3C At-Target Phase constant identifier:', phaseTarget);
// -> W3C At-Target Phase constant identifier: 2

console.log('W3C Bubbling Phase constant identifier:', phaseBubble);
// -> W3C Bubbling Phase constant identifier: 3

console.log('Total list item count:', listItems);
// -> Total list item count: 100

console.log('Listener count using naive individual binding:', individualListeners);
// -> Listener count using naive individual binding: 100

console.log('Listener count using parent event delegation:', delegatedListeners);
// -> Listener count using parent event delegation: 1`,
      caption: {
        en: 'Figure 1: W3C phases 1, 2, and 3 govern event flow; event delegation reduces 100 listeners to 1 single parent listener',
        bn: 'চিত্র ১: ডব্লিউথ্রিসি ধাপ ১, ২ এবং ৩ অনুসারে ইভেন্ট প্রবাহিত হয়; ইভেন্ট ডেলিগেশন ১০০টি লিসেনারের খরচ কমিয়ে মাত্র ১টি লিসেনারে নামিয়ে আনে'
      }
    },
    {
      type: 'heading',
      id: 'delegation-closest-pattern',
      text: {
        en: 'The Delegation closest() Architecture',
        bn: 'ডেলিগেশনে closest() ব্যবহারের সঠিক নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When clicking a button that contains nested child elements (like an svg icon and a span), e.target might reference the inner span rather than the button. Always use const btn = e.target.closest("button") inside your delegated handler to ensure your click logic captures the button regardless of which internal element was tapped.',
        bn: 'কোনো বাটনের ভেতরে যখন আইকন বা স্প্যান ট্যাগ থাকে, তখন ক্লিক করলে e.target বাটনের ভেতরের সেই স্প্যানকে নির্দেশ করতে পারে। এই বিভ্রান্তি এড়াতে ডেলিগেশন লিসেনারের ভেতর সর্বদা const btn = e.target.closest("button") ব্যবহার করুন, যাতে ব্যবহারকারী ভেতরের যেখানেই ক্লিক করুক না কেন সঠিক বাটনটি নির্ভুলভাবে ধরা পড়ে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'e.target vs e.currentTarget',
          def: {
            en: 'target is the innermost element that actually initiated the click; currentTarget is the element where the active listener is attached',
            bn: 'target হলো সেই ভেতরের উপাদান যাতে আসলে ক্লিক লেগেছে; currentTarget হলো সেই প্যারেন্ট উপাদান যেখানে লিসেনারটি বসানো আছে'
          }
        },
        {
          term: 'Passive Event Listeners ({ passive: true })',
          def: {
            en: 'Informing the browser that the handler will never invoke preventDefault(), allowing instant 60 FPS scrolling without waiting for JS execution',
            bn: 'ব্রাউজারকে জানিয়ে দেওয়া যে এই লিসেনারে preventDefault কল হবে না, ফলে স্ক্রোলিং কোনো আটকে যাওয়া ছাড়াই ৬০ এফপিএসে অত্যন্ত মসৃণ থাকে'
          }
        },
        {
          term: 'AbortController Signal Teardown',
          def: {
            en: 'Passing { signal: controller.signal } to addEventListener to clean up and remove multiple event listeners simultaneously in one call',
            bn: 'এক কমান্ডে একাধিক ইভেন্ট লিসেনার মেমোরি থেকে একসাথে অপসারণ করার জন্য আধুনিক AbortController সিগন্যাল'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dom-delegation-savings-ex',
      kind: 'mcq',
      topic: 'Listener reduction when using event delegation for 100 items',
      question: {
        en: 'According to our simulation, how many event listeners are required to handle clicks on 100 list items when using event delegation on the parent container?',
        bn: 'আমাদের সিমুলেশন অনুযায়ী প্যারেন্ট কন্টেইনারে ইভেন্ট ডেলিগেশন ব্যবহার করলে ১০০টি আইটেমে ক্লিক হ্যান্ডেল করতে কয়টি লিসেনার প্রয়োজন?'
      },
      options: [
        {
          en: '1 listener (attached to the parent <ul>)',
          bn: '১টি লিসেনার (মূল প্যারেন্ট <ul>-এ সংযুক্ত)'
        },
        {
          en: '100 listeners',
          bn: '১০০টি লিসেনার'
        },
        {
          en: '50 listeners',
          bn: '৫০টি লিসেনার'
        },
        {
          en: '3 listeners',
          bn: '৩টি লিসেনার'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single parent listener catches all bubbling events.',
        bn: 'প্যারেন্টে মাত্র একটি লিসেনার বসিয়ে বাবলিং ইভেন্ট ধরার কথা ভাবুন।'
      },
      explanation: {
        en: 'Event delegation requires exactly 1 event listener on the common parent ancestor, catching all child clicks via event bubbling.',
        bn: 'ইভেন্ট বাবলিংয়ের কারণে প্যারেন্টে মাত্র ১টি লিসেনার বসালেই তার ভেতরের সমস্ত চাইল্ডের ক্লিক নিখুঁতভাবে ধরা যায়।'
      }
    },
    {
      id: 'dom-preventdefault-behavior-ex',
      kind: 'mcq',
      topic: 'How preventDefault differs from stopPropagation',
      question: {
        en: 'What occurs when e.preventDefault() is invoked inside a form submit event handler?',
        bn: 'একটি ফর্ম সাবমিট ইভেন্টে e.preventDefault() কল করলে কী ঘটে?'
      },
      options: [
        {
          en: 'It stops the browser from reloading the page or sending a native HTTP GET/POST request, allowing JavaScript to handle submission via fetch()',
          bn: 'এটি ব্রাউজারের স্বাভাবিক পেজ রিলোড হওয়া বা ডিফল্ট ফর্ম জমা হওয়া আটকে দেয়, ফলে জাভাস্ক্রিপ্ট fetch() দিয়ে ডেটা পাঠাতে পারে'
        },
        {
          en: 'It stops the event from bubbling up to parent elements',
          bn: 'এটি ইভেন্টটিকে ওপরে বাবল হতে বাধা দেয়'
        },
        {
          en: 'It resets all form input fields to blank',
          bn: 'এটি ফর্মের সমস্ত ইনপুট খালি করে দেয়'
        },
        {
          en: 'It deletes the form from the HTML document',
          bn: 'এটি এইচটিএমএল থেকে ফর্ম মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prevents the default page navigation or reload.',
        bn: 'ব্রাউজারের স্বাভাবিক রিলোড বা সাবমিশন কাজ আটকে দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'preventDefault() cancels the browser native default behavior without interrupting event propagation or bubbling.',
        bn: 'preventDefault ব্রাউজারের ডিফল্ট রিলোড আচরণ বাতিল করে কিন্তু ইভেন্ট বাবলিং বন্ধ করে না।'
      }
    },
    {
      id: 'dom-capture-option-ex',
      kind: 'mcq',
      topic: 'Configuring listeners to fire during the capturing phase',
      question: {
        en: 'How do you configure an event listener to fire during Phase 1 (the Capturing phase) instead of the default Phase 3 (Bubbling phase)?',
        bn: 'ডিফল্ট ধাপ ৩ (বাবলিং)-এর বদলে ধাপ ১ (ক্যাপচারিং)-এ ইভেন্ট ধরার জন্য কীভাবে লিসেনার কনফিগার করতে হয়?'
      },
      options: [
        {
          en: 'element.addEventListener("click", handler, { capture: true });',
          bn: 'element.addEventListener("click", handler, { capture: true });'
        },
        {
          en: 'element.addEventListener("click", handler, { bubble: false });',
          bn: 'element.addEventListener("click", handler, { bubble: false });'
        },
        {
          en: 'element.addCaptureListener("click", handler);',
          bn: 'element.addCaptureListener("click", handler);'
        },
        {
          en: 'element.listen("click", 1);',
          bn: 'element.listen("click", 1);'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pass { capture: true } or true as the third argument.',
        bn: 'তৃতীয় প্যারামিটার হিসেবে { capture: true } দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Passing { capture: true } instructs the browser to invoke the handler during the downward capturing descent.',
        bn: '{ capture: true } অপশনটি দিলে ইভেন্টটি নিচের দিকে নামার সময় (ক্যাপচারিং ধাপে) হ্যান্ডলারটি কার্যকর হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-pollinators-flight',
    title: {
      en: 'DOM Event Propagation & Delegation Quiz',
      bn: 'ডম ইভেন্ট প্রোপাগেশন ও ডেলিগেশন কুইজ'
    },
    questions: [
      {
        id: 'q-dom-phase-sequence-order',
        kind: 'mcq',
        topic: 'Chronological order of the three W3C event phases',
        question: {
          en: 'What is the correct chronological sequence of the 3 event propagation phases in the DOM?',
          bn: 'ডম ইভেন্ট প্রোপাগেশনের ৩টি ধাপের সঠিক কালানুক্রমিক ধারাবাহিকতা কোনটি?'
        },
        options: [
          {
            en: '1: Capturing, 2: At Target, 3: Bubbling',
            bn: '১: ক্যাপচারিং, ২: অ্যাট টার্গেট, ৩: বাবলিং'
          },
          {
            en: '1: Bubbling, 2: At Target, 3: Capturing',
            bn: '১: বাবলিং, ২: অ্যাট টার্গেট, ৩: ক্যাপচারিং'
          },
          {
            en: '1: At Target, 2: Capturing, 3: Bubbling',
            bn: '১: অ্যাট টার্গেট, ২: ক্যাপচারিং, ৩: বাবলিং'
          },
          {
            en: '1: Capturing, 2: Bubbling, 3: At Target',
            bn: '১: ক্যাপচারিং, ২: বাবলিং, ৩: অ্যাট টার্গেট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Descends down (Capture), hits target, then bubbles back up.',
          bn: 'প্রথমে নিচে নামে (ক্যাপচার), টার্গেটে লাগে, তারপর ওপরে ওঠে (বাবল)।'
        },
        explanation: {
          en: 'W3C event flow starts with descent (Capture 1), strikes the target (Target 2), and finishes with ascent (Bubbling 3).',
          bn: 'ইভেন্ট প্রবাহ প্রথমে উপর থেকে নামে (১: ক্যাপচারিং), টার্গেটে পৌঁছায় (২: টার্গেট) এবং সবশেষে ওপরে ওঠে (৩: বাবলিং)।'
        }
      },
      {
        id: 'q-dom-stopimmediatepropagation-difference',
        kind: 'mcq',
        topic: 'Difference between stopPropagation and stopImmediatePropagation',
        question: {
          en: 'How does e.stopImmediatePropagation() differ from e.stopPropagation()?',
          bn: 'e.stopPropagation()-এর তুলনায় e.stopImmediatePropagation() কীভাবে ভিন্ন?'
        },
        options: [
          {
            en: 'stopImmediatePropagation halts tree bubbling AND prevents any other listeners registered on that exact same element from executing',
            bn: 'stopImmediatePropagation ওপরে ছড়ানো বন্ধ করার পাশাপাশি একই উপাদানের সাথে যুক্ত অন্যান্য লিসেনারগুলোকেও চলতে বাধা দেয়'
          },
          {
            en: 'stopImmediatePropagation reloads the browser tab',
            bn: 'stopImmediatePropagation ব্রাউজার ট্যাব রিলোড করে'
          },
          {
            en: 'stopPropagation is only supported on mobile devices',
            bn: 'stopPropagation কেবল মোবাইলে চলে'
          },
          {
            en: 'There is no difference between the two methods',
            bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prevents sibling listeners on the same element from running.',
          bn: 'একই উপাদানের অন্য লিসেনারগুলোও যেন রান না করে তা ভাবুন।'
        },
        explanation: {
          en: 'stopImmediatePropagation halts both propagation across the DOM tree and subsequent listener callbacks on the current element.',
          bn: 'stopImmediatePropagation ট্রির বাইরে ছড়ানো বন্ধ করার সাথে সাথে একই উপাদানের বাকি লিসেনারগুলোকেও আটকে দেয়।'
        }
      },
      {
        id: 'q-dom-passive-listener-performance',
        kind: 'mcq',
        topic: 'Why passive listeners improve mobile touch scrolling performance',
        question: {
          en: 'Why do developers add { passive: true } to touchmove and wheel event listeners on mobile devices?',
          bn: 'মোবাইল ডিভাইসে touchmove বা wheel ইভেন্ট লিসেনারে কেন ডেভেলপাররা { passive: true } অপশন যুক্ত করেন?'
        },
        options: [
          {
            en: 'It tells the browser the handler will never call preventDefault(), allowing the compositor thread to scroll immediately without waiting for JavaScript execution',
            bn: 'এটি ব্রাউজারকে নিশ্চিত করে যে লিসেনারে preventDefault কল হবে না, ফলে জাভাস্ক্রিপ্ট কোড শেষ হওয়ার অপেক্ষা না করেই স্ক্রিন ৬০ এফপিএস-এ মসৃণভাবে স্ক্রোল হতে পারে'
          },
          {
            en: 'It saves mobile battery by dimming the screen backlight',
            bn: 'এটি স্ক্রিনের আলো কমিয়ে ব্যাটারি বাঁচায়'
          },
          {
            en: 'It blocks ads automatically',
            bn: 'এটি বিজ্ঞাপন বন্ধ করে'
          },
          {
            en: 'It increases the font size on touch',
            bn: 'এটি ফন্ট সাইজ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Enables asynchronous composited scrolling without blocking UI threads.',
          bn: 'জাভাস্ক্রিপ্টের অপেক্ষায় স্ক্রোল আটকে না রাখার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'Passive listeners guarantee preventDefault will not be called, freeing the browser to scroll smoothly at 60 FPS on the compositor thread.',
          bn: 'passive: true দিলে ব্রাউজার নিশ্চিন্তে ব্যাকগ্রাউন্ড থ্রেডে ৬০ এফপিএসে মসৃণ স্ক্রোলিং চালিয়ে যেতে পারে।'
        }
      },
      {
        id: 'q-dom-abortcontroller-teardown',
        kind: 'mcq',
        topic: 'Using AbortController for clean listener removal',
        question: {
          en: 'How can you cleanly remove multiple event listeners attached across different elements in a single function call?',
          bn: 'একটিমাত্র ফাংশন কল দিয়ে বিভিন্ন উপাদানে ছড়ানো একাধিক ইভেন্ট লিসেনার কীভাবে মেমোরি থেকে সম্পূর্ণ অপসারণ করা যায়?'
        },
        options: [
          {
            en: 'Pass { signal: controller.signal } to each addEventListener and invoke controller.abort() during cleanup',
            bn: 'প্রতিটি addEventListener-এ { signal: controller.signal } পাস করুন এবং পরিষ্কার করার সময় controller.abort() কল করুন'
          },
          {
            en: 'Call window.removeAllListeners()',
            bn: 'window.removeAllListeners() কল করে'
          },
          {
            en: 'Delete the entire body tag from HTML',
            bn: 'এইচটিএমএল থেকে পুরো বডি ট্যাগ মুছে দিয়ে'
          },
          {
            en: 'Reload the web page after every user click',
            bn: 'প্রতি ক্লিকে পেজ রিলোড করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use an AbortController signal for bulk event cleanup.',
          bn: 'AbortController সিগন্যাল ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'AbortSignal allows developers to bind an arbitrary number of listeners to a single controller and detach them all via controller.abort().',
          bn: 'AbortSignal দিয়ে যতখুশি লিসেনার যুক্ত করে controller.abort() কল করলেই সবগুলো লিসেনার একসাথে মেমোরি থেকে মুছে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-orchard-forms',
    tech: 'dom',
    title: {
      en: 'Forms, Inputs, Validation & FormData API',
      bn: 'ফর্ম, ইনপুট, ভ্যালিডেশন ও FormData এপিআই'
    }
  }
};
