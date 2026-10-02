import type { Lesson } from '../../../lib/types';

export const directiveGrammarLesson: Lesson = {
  slug: 'the-directive-grammar',
  tech: 'vue',
  title: {
    en: 'Template Directives — v-bind, v-on, v-if, v-for & v-model',
    bn: 'টেমপ্লেট ডিরেক্টিভস — v-bind, v-on, v-if, v-for ও v-model'
  },
  summary: {
    en: 'Vue template directives are specialized HTML attributes prefixed with v- that apply reactive behavior to the Document Object Model (DOM). In this lesson, you will master conditional rendering with v-if and v-show, list rendering with v-for and unique keys, event handling with modifiers, and two-way form data binding using v-model.',
    bn: 'Vue টেমপ্লেট ডিরেক্টিভ হলো v- উপসর্গযুক্ত বিশেষ এইচটিএমএল অ্যাট্রিবিউট যা ডমে রিঅ্যাক্টিভ আচরণ প্রয়োগ করে। এই পাঠে আপনি v-if ও v-show দিয়ে শর্তাধীন রেন্ডারিং, ইউনিক কি সহ v-for দিয়ে তালিকা প্রদর্শন, মডিফায়ার সহ ইভেন্ট হ্যান্ডলিং এবং v-model দিয়ে দ্বি-মুখী ফর্ম ডাটা বাইন্ডিং গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'template-directives-architecture',
      text: {
        en: 'The Template Directive System Architecture',
        bn: 'টেমপ্লেট ডিরেক্টিভ সিস্টেম আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you author templates in Vue 3, directives instruct the compiler how to connect Document Object Model (DOM) nodes to reactive state. Unlike plain HTML attributes that represent static strings, directives evaluate JavaScript expressions. Vue tracks dependencies referenced inside directives, automatically updating attributes, toggling branches, and synchronizing form inputs.',
        bn: 'যখন আপনি Vue ৩-এ টেমপ্লেট লেখেন, তখন ডিরেক্টিভগুলো কমপাইলারকে নির্দেশ দেয় কীভাবে ডম নোডের সাথে রিঅ্যাক্টিভ স্টেট সংযুক্ত করতে হবে। সাধারণ এইচটিএমএল অ্যাট্রিবিউটের মতো স্ট্যাটিক না হয়ে ডিরেক্টিভগুলো সরাসরি জাভাস্ক্রিপ্ট এক্সপ্রেশন মূল্যায়ন করে। Vue ডিরেক্টিভের ভেতরের ভেরিয়েবল পর্যবেক্ষণ করে স্বয়ংক্রিয়ভাবে অ্যাট্রিবিউট আপডেট করে এবং ফর্ম ইনপুট সিঙ্ক রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'v-bind (:shorthand)',
          def: {
            en: 'Dynamically binds an HTML attribute or component prop to a reactive JavaScript expression.',
            bn: 'যেকোনো এইচটিএমএল অ্যাট্রিবিউট বা কম্পোনেন্ট প্রপকে একটি রিঅ্যাক্টিভ জাভাস্ক্রিপ্ট মানের সাথে সংযুক্ত করে।'
          }
        },
        {
          term: 'v-on (@shorthand)',
          def: {
            en: 'Attaches native DOM event listeners or custom component event handlers with optional modifiers.',
            bn: 'ইভেন্ট মডিফায়ার সহ ডম ইভেন্ট লিসেনার বা কম্পোনেন্ট ইভেন্ট হ্যান্ডলার যুক্ত করে।'
          }
        },
        {
          term: 'v-if vs v-show',
          def: {
            en: 'v-if physically creates or destroys elements in the DOM tree; v-show merely toggles CSS display: none.',
            bn: 'v-if শর্তানুযায়ী ডমে উপাদান তৈরি করে বা সম্পূর্ণ মুছে ফেলে; v-show কেবল সিএসএস display: none দিয়ে আড়াল করে।'
          }
        },
        {
          term: 'v-model',
          def: {
            en: 'Two-way data binding on form inputs, automatically coordinating value properties and input event listeners.',
            bn: 'ফর্ম ইনপুটে দ্বি-মুখী ডাটা বাইন্ডিং যা ভ্যালু ও ইনপুট ইভেন্টকে স্বয়ংক্রিয়ভাবে সমন্বয় করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'directives-matrix',
      text: {
        en: 'Core Directives and Modifiers Syntax Matrix',
        bn: 'মূল ডিরেক্টিভস ও মডিফায়ার সিনট্যাক্স ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Directive & Shorthand', bn: 'ডিরেক্টিভ ও সংক্ষেপ' },
        { en: 'Code Example', bn: 'কোড উদাহরণ' },
        { en: 'DOM Behavior Produced', bn: 'ডম আচরণ' }
      ],
      rows: [
        [
          { en: 'v-bind (:attr)', bn: 'v-bind (:attr)' },
          { en: ':disabled="isSubmitting" :class="{ active: isActive }"', bn: ':disabled="isSubmitting" :class="{ active: isActive }"' },
          { en: 'Dynamically updates element attribute or CSS class map', bn: 'অ্যাট্রিবিউট বা সিএসএস ক্লাস ম্যাপ ডায়নামিকভাবে আপডেট করে' }
        ],
        [
          { en: 'v-on (@event)', bn: 'v-on (@event)' },
          { en: '@submit.prevent="handleSubmit" @keyup.enter="addItem"', bn: '@submit.prevent="handleSubmit" @keyup.enter="addItem"' },
          { en: 'Listens to events, prevents page reload or filters keys', bn: 'ইভেন্ট শোনে এবং পেজ রিলোড বন্ধ বা কী ফিল্টার করে' }
        ],
        [
          { en: 'v-for with :key', bn: 'v-for সাথে :key' },
          { en: '<li v-for="user in users" :key="user.id">{{ user.name }}</li>', bn: '<li v-for="user in users" :key="user.id">{{ user.name }}</li>' },
          { en: 'Iterates list elements with stable virtual DOM tracking', bn: 'ভার্চুয়াল ডম ট্র্যাকিং সহ তালিকার উপাদান রেন্ডার করে' }
        ],
        [
          { en: 'v-model with modifier', bn: 'v-model সাথে মডিফায়ার' },
          { en: '<input v-model.trim.number="quantity" />', bn: '<input v-model.trim.number="quantity" />' },
          { en: 'Trims whitespace and parses input string into a number', bn: 'স্পেস মুছে ইনপুট স্ট্রিংকে সংখ্যায় রূপান্তর করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'directives-simulation-code',
      text: {
        en: 'Working Directive Evaluation and v-model Simulation',
        bn: 'কার্যকরী ডিরেক্টিভ মূল্যায়ন ও v-model সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue Directive Parser and Two-Way v-model Binding
class MockDirectiveProcessor {
  // Evaluates conditional rendering: v-if vs v-show
  renderConditional(elementHtml, condition, isShowDirective = false) {
    if (isShowDirective) {
      const displayStyle = condition ? 'display: block' : 'display: none';
      return { inDom: true, html: elementHtml.replace('>', ' style="' + displayStyle + '">') };
    }
    if (!condition) {
      return { inDom: false, html: '<!--v-if-->' };
    }
    return { inDom: true, html: elementHtml };
  }

  // Simulates v-model.trim.number modifier pipeline
  applyModelModifiers(rawInput) {
    const trimmed = rawInput.trim();
    const parsedNumber = parseFloat(trimmed);
    return Number.isNaN(parsedNumber) ? trimmed : parsedNumber;
  }
}

const processor = new MockDirectiveProcessor();

// 1. Evaluate v-if with condition false: unmounts element from DOM
const ifResult = processor.renderConditional('<div>Alert Box</div>', false, false);

// 2. Evaluate v-show with condition false: keeps in DOM with display: none
const showResult = processor.renderConditional('<div>Tooltip</div>', false, true);

// 3. Process v-model.trim.number on user text "  42  "
const processedValue = processor.applyModelModifiers('  42  ');

console.log('v-if element presence in DOM:', ifResult.inDom);
// -> v-if element presence in DOM: false
console.log('v-show element presence in DOM:', showResult.inDom);
// -> v-show element presence in DOM: true
console.log('v-model parsed numeric value:', processedValue);
// -> v-model parsed numeric value: 42`,
      caption: {
        en: 'Processor demonstrates v-if removing node while v-show hides node, parsing number 42',
        bn: 'প্রসেসর দেখাচ্ছে v-if উপাদান সরিয়ে দেয় আর v-show তা আড়াল করে, এবং ৪২ সংখ্যা পার্স করছে'
      }
    },
    {
      type: 'heading',
      id: 'directive-discipline-rules',
      text: {
        en: 'Directive Best Practices and Anti-Patterns',
        bn: 'ডিরেক্টিভ সেরা অনুশীলন ও ভুল এড়ানোর নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'One of the most critical anti-patterns in Vue development is placing v-if and v-for on the exact same element. When combined, v-if evaluates first in Vue 3, meaning the condition cannot access the iteration variable. To filter items cleanly, filter your list inside a computed property or wrap the loop in a container <template> tag.',
        bn: 'Vue ডেভেলপমেন্টের একটি মারাত্মক ভুল হলো একই উপাদানে একসাথে v-if এবং v-for ব্যবহার করা। Vue ৩-এ v-if আগে কার্যকর হয়, ফলে শর্তের ভেতর লুপের ভেরিয়েবল খুঁজে পাওয়া যায় না। তালিকা ফিল্টার করতে সর্বদা একটি computed প্রোপার্টি ব্যবহার করুন অথবা একটি <template> ট্যাগে লুপটি ঘিরে নিন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Never Combine v-if with v-for: Use a computed property to pre-filter items before passing the list to v-for.',
          bn: '১. v-if ও v-for একসাথে নয়: v-for-এ পাঠানোর আগেই computed প্রোপার্টি দিয়ে তালিকা ফিল্টার করে নিন।'
        },
        {
          en: '2. Always Bind Unique Keys: Always supply a unique string or number ID to :key in v-for; avoid using array indices.',
          bn: '২. ইউনিক কি বাধ্যতামূলক: v-for লুপে :key হিসেবে সর্বদা ডাটাবেজ আইডি দিন; অ্যারে ইনডেক্স ব্যবহার পরিহার করুন।'
        },
        {
          en: '3. Use Event Modifiers: Simplify event handling by using @submit.prevent instead of writing event.preventDefault() manually.',
          bn: '৩. ইভেন্ট মডিফায়ার ব্যবহার: হাতে event.preventDefault না লিখে সংক্ষেপে @submit.prevent ব্যবহার করুন।'
        },
        {
          en: '4. Choose v-show for High Frequency: When an element toggles visibility repeatedly (e.g. dropdown menus), use v-show to avoid unmounting costs.',
          bn: '৪. ঘন ঘন বদলে v-show: ড্রপডাউনের মতো ঘন ঘন টগল হওয়া উপাদানে আনমাউন্টের খরচ বাঁচাতে v-show ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-dir-ex1',
      kind: 'mcq',
      topic: 'v-if versus v-show rendering mechanics',
      question: {
        en: 'What is the architectural difference between "v-if" and "v-show" when the binding expression evaluates to false?',
        bn: 'বাইন্ডিং এক্সপ্রেশনের মান false হলে "v-if" এবং "v-show"-এর মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'v-if unmounts and removes the element completely from the DOM tree, whereas v-show keeps the element in the DOM and simply applies the inline CSS style "display: none;"',
          bn: 'v-if উপাদানটিকে ডম ট্রি থেকে সম্পূর্ণ সরিয়ে ফেলে, আর v-show উপাদানটি ডমে রেখেই কেবল ইনলাইন সিএসএস "display: none;" প্রয়োগ করে'
        },
        {
          en: 'v-show deletes all user cookies while v-if preserves them',
          bn: 'v-show সব ইউজার কুকি মুছে ফেলে আর v-if তা সংরক্ষণ করে'
        },
        {
          en: 'v-if only works on desktop computers while v-show only works on mobile phones',
          bn: 'v-if কেবল কম্পিউটারে চলে আর v-show কেবল মোবাইলে চলে'
        },
        {
          en: 'v-if converts the element into an audio podcast file',
          bn: 'v-if উপাদানটিকে একটি অডিও ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'v-if alters DOM structure; v-show alters CSS display visibility.',
        bn: 'v-if ডমের কাঠামো বদলায়; v-show কেবল সিএসএস দিয়ে দৃশ্যমানতা নিয়ন্ত্রণ করে।'
      },
      explanation: {
        en: 'v-if is "real" conditional rendering, destroying and re-creating components and event listeners. v-show is much simpler; the element remains in the DOM with its CSS display toggled.',
        bn: 'v-if শর্ত না মিললে পুরো কম্পোনেন্ট ধ্বংস করে ফেলে। আর v-show উপাদান ডমেই রেখে কেবল display: none করে রাখে, ফলে পরবর্তীতে দ্রুত দেখানো যায়।'
      }
    },
    {
      id: 'vu-dir-ex2',
      kind: 'mcq',
      topic: 'danger of using array index as v-for key',
      question: {
        en: 'Why is using array index as the ":key" in "v-for=\"(item, index) in items\" :key=\"index\"" considered dangerous for dynamic lists?',
        bn: 'ডায়নামিক তালিকায় "v-for=\"(item, index) in items\" :key=\"index\"" এভাবে অ্যারে ইনডেক্সকে কি হিসেবে ব্যবহার করা কেন ক্ষতিকর?'
      },
      options: [
        {
          en: 'If items are reordered, inserted, or deleted, their indices change; Vue\'s virtual DOM diffing algorithm will reuse incorrect DOM elements and preserve stale internal component state (such as checkbox checks or input values)',
          bn: 'উপাদান মুছে ফেললে বা নতুন আইটেম ঢোকালে ইনডেক্স বদলে যায়; ফলে Vue-এর ভার্চুয়াল ডম ভুল উপাদান পুনর্ব্যবহার করে এবং ইনপুট বা চেকবক্সের স্টেট এলোমেলো হয়ে যায়'
        },
        {
          en: 'It crashes the client computer hardware completely',
          bn: 'এটি ক্লায়েন্টের কম্পিউটার হার্ডওয়্যার সম্পূর্ণ ক্র্যাশ করায়'
        },
        {
          en: 'The compiler will refuse to build the application',
          bn: 'কমপাইলার অ্যাপ্লিকেশনটি বিল্ড করতেই অস্বীকার করবে'
        },
        {
          en: 'Array indices are converted into random passwords',
          bn: 'অ্যারে ইনডেক্সগুলো এলোমেলো পাসওয়ার্ডে বদলে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Index keys shift when items are added or removed, confusing DOM recycling.',
        bn: 'আইটেম কম-বেশি হলে ইনডেক্স নম্বর বদলে যায়, যার ফলে ভুল ডম উপাদান আপডেট হয়।'
      },
      explanation: {
        en: 'Vue uses the key to identify virtual DOM nodes. When items shift positions, index keys cause Vue to patch existing nodes rather than reordering them, causing subtle input state bugs.',
        bn: 'Vue প্রতিটি উপাদান শনাক্ত করতে কি ব্যবহার করে। ইনডেক্স দিলে উপাদান সরলেও নম্বর এক থাকে, ফলে ইনপুটে লেখা বা ড্রপডাউনের মান ভুল আইটেমে আটকে থাকে।'
      }
    },
    {
      id: 'vu-dir-ex3',
      kind: 'mcq',
      topic: 'precedence between v-if and v-for on the same element in vue 3',
      question: {
        en: 'In Vue 3, what happens if both "v-if" and "v-for" are placed on the exact same HTML element?',
        bn: 'Vue ৩-এ একই এইচটিএমএল উপাদানের ওপর "v-if" এবং "v-for" উভয় ডিরেক্টিভ একসাথে দিলে কী ঘটে?'
      },
      options: [
        {
          en: 'v-if takes precedence over v-for and evaluates first, meaning the v-if condition does not have access to the iteration variables defined by v-for and throws an error if it references them',
          bn: 'v-if-এর অগ্রাধিকার বেশি হওয়ায় তা v-for-এর আগে চলে, যার ফলে v-if শর্তের ভেতর v-for-এর ভেরিয়েবল পাওয়া যায় না এবং এরর দেখা দেয়'
        },
        {
          en: 'v-for executes first and filters the list automatically',
          bn: 'v-for আগে চলে এবং তালিকা নিজে থেকেই ফিল্টার করে'
        },
        {
          en: 'The browser displays a blue screen of death',
          bn: 'ব্রাউজার একটি ব্লু-স্ক্রিন ক্র্যাশ প্রদর্শন করে'
        },
        {
          en: 'Vue merges them into a SQL database query',
          bn: 'Vue উভয়কে একত্রিত করে একটি এসকিউএল কোয়েরি বানায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'In Vue 3, v-if has higher priority than v-for on the same node.',
        bn: 'Vue ৩-এ একই উপাদানে v-if আগে চলে, তাই v-for-এর ভেরিয়েবল খুঁজে পায় না।'
      },
      explanation: {
        en: 'In Vue 3, v-if has a higher priority than v-for. Placing both on one element fails because the v-if condition executes before the v-for iteration scope exists. Use computed properties instead.',
        bn: 'Vue ৩-এ v-if আগে রান হয়। লুপ তৈরি হওয়ার আগেই শর্ত বিচার করতে গিয়ে ভেরিয়েবল না পেয়ে এরর দেয়। তাই computed দিয়ে তালিকা ফিল্টার করাই সঠিক নিয়ম।'
      }
    },
    {
      id: 'vu-dir-ex4',
      kind: 'mcq',
      topic: 'event modifiers stop and prevent in v-on',
      question: {
        en: 'What does the "@submit.prevent" event modifier do when attached to an HTML form in Vue?',
        bn: 'Vue-তে কোনো এইচটিএমএল ফর্ম ট্যাগে "@submit.prevent" ইভেন্ট মডিফায়ার লাগালে কী ঘটে?'
      },
      options: [
        {
          en: 'It automatically invokes "event.preventDefault()", preventing the browser from performing a full-page reload on form submission and allowing custom JavaScript handling',
          bn: 'এটি স্বয়ংক্রিয়ভাবে "event.preventDefault()" কল করে, যার ফলে ফর্ম সাবমিট করলেও পুরো পেজ নতুন করে রিলোড হয় না এবং জাভাস্ক্রিপ্ট দিয়ে হ্যান্ডল করা যায়'
        },
        {
          en: 'It blocks the user from typing in any text input',
          bn: 'এটি ব্যবহারকারীকে কোনো ইনপুট বক্সে টাইপ করতে বাধা দেয়'
        },
        {
          en: 'It encrypts the form data with a secret PIN number',
          bn: 'এটি ফর্মের তথ্যকে গোপন পিন নম্বর দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It submits the form data via SMS text message',
          bn: 'এটি এসএমএসের মাধ্যমে ফর্ম ডাটা পাঠিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '.prevent calls event.preventDefault() to suppress native browser page refresh.',
        bn: '.prevent ইভেন্টের স্বাভাবিক রিলোড আচরণ আটকে দিয়ে সিঙ্গেল পেজ অ্যাপ্লিকেশন সচল রাখে।'
      },
      explanation: {
        en: 'Event modifiers like .prevent are shorthand helpers. @submit.prevent automatically calls event.preventDefault() before invoking the bound handler function.',
        bn: '@submit.prevent স্বয়ংক্রিয়ভাবে ব্রাউজারের স্বাভাবিক পেজ রিলোড বন্ধ করে দেয়, ফলে সিঙ্গেল-পেজ অ্যাপের মতো রিফ্রেশ ছাড়াই ডাটা প্রসেস করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-directive-grammar-quiz',
    title: {
      en: 'Vue.js Template Directives Quiz',
      bn: 'Vue.js টেমপ্লেট ডিরেক্টিভস কুইজ'
    },
    questions: [
      {
        id: 'q-v-model-modifiers-lazy-trim-number',
        kind: 'mcq',
        topic: 'v-model modifiers behavior (.lazy, .number, .trim)',
        question: {
          en: 'How does the ".lazy" modifier change the behavior of "v-model" on a text input element (<input v-model.lazy="search" />)?',
          bn: 'টেক্সট ইনপুটে ".lazy" মডিফায়ার (<input v-model.lazy="search" />) ব্যবহার করলে "v-model"-এর আচরণে কী পরিবর্তন ঘটে?'
        },
        options: [
          {
            en: 'It syncs the input value with the reactive state on native "change" events (when the user presses Enter or blurs out of the input) instead of on every keystroke "input" event',
            bn: 'এটি প্রতিটি কীবোর্ড চাপে ডাটা সিঙ্ক না করে ইউজার যখন এন্টার চাপেন বা ইনপুট থেকে ফোকাস সরিয়ে নেন ("change" ইভেন্ট), তখন মান আপডেট করে'
          },
          {
            en: 'It delays updating the variable by 10 minutes',
            bn: 'এটি ভেরিয়েবল আপডেট ১০ মিনিট পিছিয়ে দেয়'
          },
          {
            en: 'It converts the text input into a password masked input',
            bn: 'এটি সাধারণ টেক্সটকে পাসওয়ার্ডের মতো ঢেকে ফেলে'
          },
          {
            en: 'The .lazy modifier causes the input to stop accepting text',
            bn: '.lazy মডিফায়ার দিলে ইনপুটে আর কোনো লেখা গ্রহণ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: '.lazy listens to change events instead of input events.',
          bn: '.lazy ইনপুট ইভেন্টের বদলে change ইভেন্টের ওপর ভিত্তি করে ডাটা সিঙ্ক করে।'
        },
        explanation: {
          en: 'By default, v-model syncs on every "input" event (each keystroke). Adding .lazy syncs only after "change" events (when the input loses focus or Enter is pressed), saving compute.',
          bn: 'ডিফল্টভাবে প্রতিটি অক্ষরে ভেরিয়েবল আপডেট হয়। .lazy দিলে ব্যবহারকারী লেখা শেষ করে বাইরে ক্লিক করলে বা এন্টার চাপলেই কেবল ডাটা আপডেট হয়।'
        }
      },
      {
        id: 'q-template-tag-with-v-for-clean-grouping',
        kind: 'mcq',
        topic: 'using <template> tag as invisible wrapper for v-if and v-for',
        question: {
          en: 'How can developers render a list conditionally without injecting an extra wrapper <div> into the DOM?',
          bn: 'ডমে কোনো অতিরিক্ত <div> ট্যাগ না ফেলে ডেভেলপাররা কীভাবে শর্তাধীনভাবে একটি তালিকা রেন্ডার করতে পারেন?'
        },
        options: [
          {
            en: 'Use the invisible "<template>" tag: "<template v-for=\"item in items\" :key=\"item.id\"><div v-if=\"item.active\">{{ item.name }}</div></template>"',
            bn: 'অদৃশ্য "<template>" ট্যাগ ব্যবহার করে: "<template v-for=\"item in items\" :key=\"item.id\"><div v-if=\"item.active\">{{ item.name }}</div></template>"'
          },
          {
            en: 'Wrap the list in a <canvas> element',
            bn: 'তালিকাটিকে একটি <canvas> উপাদানে মুড়িয়ে'
          },
          {
            en: 'Set the CSS display property to invisible on body',
            bn: 'বডিতে সিএসএস display ইনভিজিবল করে দিয়ে'
          },
          {
            en: 'It is impossible to loop without adding a wrapper <div> tag',
            bn: 'বাড়তি <div> ট্যাগ ছাড়া লুপ চালানো একেবারেই অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'The <template> tag acts as an invisible compiler wrapper that is omitted from the final DOM.',
          bn: '<template> ট্যাগ একটি অদৃশ্য মোড়ক যা ফাইনাল ডমে কোনো চিহ্ন রাখে না।'
        },
        explanation: {
          en: 'The <template> tag serves as an invisible wrapper for directives like v-for or v-if. The compiler processes the directive without creating a real DOM element for the template itself.',
          bn: '<template> একটি অলীক মোড়ক। এটি ডিরেক্টিভ কার্যকর করে কিন্তু ব্রাউজারের আসল ডম ট্রিতে কোনো বাড়তি ট্যাগ তৈরি করে না, ফলে এইচটিএমএল পরিষ্কার থাকে।'
        }
      },
      {
        id: 'q-v-once-and-v-memo-performance',
        kind: 'mcq',
        topic: 'performance optimization with v-once and v-memo',
        question: {
          en: 'What performance advantage does the "v-once" directive offer for static content blocks in Vue?',
          bn: 'Vue-তে অপরিবর্তনশীল কন্টেন্টের ক্ষেত্রে "v-once" ডিরেক্টিভ কোন পারফরম্যান্স সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It renders the element and all its children exactly 1 time; on subsequent re-renders, the element and its virtual DOM subtree are completely skipped, treating it as static content',
            bn: 'এটি উপাদানটিকে কেবল ১ বারই রেন্ডার করে; পরবর্তীতে পেজের ডাটা বদলালেও এই অংশের ভার্চুয়াল ডম পুরোপুরি এড়িয়ে যায় এবং স্ট্যাটিক হিসেবে ধরে রাখে'
          },
          {
            en: 'It deletes the element after 1 millisecond',
            bn: 'এটি ১ মিলি-সেকেন্ড পর উপাদানটি মুছে ফেলে'
          },
          {
            en: 'It forces the browser to download the file 1 time per second',
            bn: 'এটি প্রতি সেকেন্ডে ১ বার ফাইল ডাউনলোড করতে বাধ্য করে'
          },
          {
            en: 'v-once can only be used on heading tags (h1-h6)',
            bn: 'v-once কেবল হেডিং ট্যাগে (h1-h6) ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'v-once treats the node as static after the initial render pass.',
          bn: 'v-once প্রথমবার রেন্ডারের পর উপাদানটিকে চিরতরে অপরিবর্তনীয় হিসেবে ক্যাশ করে।'
        },
        explanation: {
          en: 'v-once tells the Vue compiler that the element and its children will never change. During updates, the entire subtree is skipped, yielding performance improvements for heavy static UI.',
          bn: 'v-once নিশ্চিত করে যে এই কন্টেন্ট আর কখনো বদলাবে না। ফলে প্রতিবার পেজ আপডেটের সময় কমপাইলার এই অংশটিকে পুরোপুরি বাদ দিয়ে অন্য কাজ দ্রুত সম্পন্ন করে।'
        }
      },
      {
        id: 'q-v-html-xss-security-warning',
        kind: 'mcq',
        topic: 'security risks associated with v-html and XSS vulnerabilities',
        question: {
          en: 'Why is using "v-html" to render untrusted user-submitted content extremely dangerous in Vue web applications?',
          bn: 'Vue অ্যাপ্লিকেশনে ব্যবহারকারীর পাঠানো তথ্যে "v-html" ব্যবহার করা কেন মারাত্মক বিপজ্জনক?'
        },
        options: [
          {
            en: 'It renders raw HTML directly into the document, exposing the application to Cross-Site Scripting (XSS) attacks where malicious actors can execute arbitrary JavaScript to steal user sessions or tokens',
            bn: 'এটি সরাসরি র-এইচটিএমএল রেন্ডার করে, যা সাইটটিকে ক্রস-সাইট স্ক্রিপ্টিং (XSS) আক্রমণের ঝুঁকিতে ফেলে এবং হ্যাকাররা ব্যবহারকারীর সেশন বা টোকেন চুরি করতে পারে'
          },
          {
            en: 'It converts the website into a static PDF file',
            bn: 'এটি ওয়েবসাইটকে একটি পিডিএফ ফাইলে বদলে দেয়'
          },
          {
            en: 'v-html slows down the server CPU cooling fan',
            bn: 'v-html সার্ভারের ফ্যানের গতি কমিয়ে দেয়'
          },
          {
            en: 'v-html is not supported in modern web browsers',
            bn: 'আধুনিক ওয়েব ব্রাউজারে v-html সমর্থিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'v-html injects unescaped HTML, opening severe Cross-Site Scripting (XSS) vulnerabilities.',
          bn: 'v-html কোনো সুরক্ষা ছাড়াই সরাসরি এইচটিএমএল বসিয়ে দেয় যা মারাত্মক XSS নিরাপত্তা ঝুঁকি তৈরি করে।'
        },
        explanation: {
          en: 'Dynamically rendering arbitrary HTML from user input allows attackers to inject malicious <script> tags or onerror handlers (XSS). Only use v-html on trusted content, or sanitize it thoroughly using DOMPurify.',
          bn: 'ব্যবহারকারীর তথ্যে v-html দিলে স্ক্রিপ্ট চালিয়ে ইউজারদের সেশন চুরি হতে পারে। তাই এটি ব্যবহার করার পূর্বে DOMPurify-এর মতো টুল দিয়ে কোড নিরাপদ করে নেওয়া আবশ্যক।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-component-commons',
    title: {
      en: 'Component Communication — Props, Emits, Slots & provide/inject',
      bn: 'কম্পোনেন্ট যোগাযোগ — Props, Emits, Slots ও provide/inject'
    }
  }
};
