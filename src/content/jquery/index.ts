import type { Hub } from '../../lib/types';

import { TheDollarAndTheChainLesson } from './lessons/the-dollar-and-the-chain';
import { TheSelectorLedgerLesson } from './lessons/the-selector-ledger';
import { TheDomWorkshopLesson } from './lessons/the-dom-workshop';
import { EventsAndDelegationLesson } from './lessons/events-and-delegation';
import { EffectsAndTheFrameBudgetLesson } from './lessons/effects-and-the-frame-budget';
import { AjaxAndTheJsonpTollLesson } from './lessons/ajax-and-the-jsonp-toll';
import { DeferredAndPromisesLesson } from './lessons/deferred-and-promises';
import { TheGreatMigrationLesson } from './lessons/the-great-migration';

export const jqueryHub: Hub = {
  slug: 'jquery',
  name: 'jQuery',
  icon: '🪄',
  tagline: {
    en: 'Master jQuery architecture: DOM wrapping, method chaining, event delegation, and modern vanilla JavaScript migration.',
    bn: 'জেকোয়েরি আর্কিটেকচার আয়ত্ত করুন: ডম র‍্যাপিং, মেথড চেইনিং, ইভেন্ট ডেলিগেশন এবং আধুনিক ভ্যানিলা জাভাস্ক্রিপ্ট মাইগ্রেশন।'
  },
  intro: {
    en: 'jQuery transformed web development by unifying cross-browser DOM differences, pioneering CSS selector querying, and introducing fluent method chaining. While modern browsers have adopted these patterns natively, hundreds of thousands of enterprise applications and content management systems rely on jQuery. This track teaches core jQuery architecture alongside modern migration patterns: the $() wrapper and method chaining (Lesson 1), selectors and traversal filters (Lesson 2), DOM manipulation and attribute handling (Lesson 3), event delegation and namespaces (Lesson 4), the animation queue and frame budgeting (Lesson 5), asynchronous requests with $.ajax (Lesson 6), Deferred objects and Promises (Lesson 7), and migrating to native vanilla JavaScript APIs (Lesson 8).',
    bn: 'জেকোয়েরি ব্রাউজারের বিভিন্ন অসঙ্গতি দূর করে, সিএসএস সিলেক্টর কোয়েরি সহজ করে এবং মেথড চেইনিং জনপ্রিয় করে ওয়েব ডেভেলপমেন্টে বিপ্লব এনেছিল। আধুনিক ব্রাউজারগুলো এই সুবিধাগুলো সরাসরি সমর্থন করলেও বিশ্বজুড়ে লাখ লাখ এন্টারপ্রাইজ সিস্টেম ও ওয়ার্ডপ্রেস ওয়েবসাইটে এখনো জেকোয়েরি ব্যবহৃত হয়। এই ট্র্যাকে জেকোয়েরির মূল আর্কিটেকচার এবং আধুনিক ভ্যানিলা জাভাস্ক্রিপ্টে রূপান্তরের কৌশল বিস্তারিত শেখানো হয়েছে: $() র‍্যাপার ও মেথড চেইনিং (লেসন ১), সিলেক্টর ও ট্রাভার্সাল ফিল্টার (লেসন ২), ডম পরিবর্তন ও অ্যাট্রিবিউট হ্যান্ডলিং (লেসন ৩), ইভেন্ট ডেলিগেশন ও নেমস্পেস (লেসন ৪), অ্যানিমেশন কিউ ও ফ্রেম বাজেট (লেসন ৫), $.ajax দিয়ে অ্যাসিঙ্ক রিকোয়েস্ট (লেসন ৬), Deferred অবজেক্ট ও প্রমিজ (লেসন ৭) এবং আধুনিক ভ্যানিলা কোডে সম্পূর্ণ মাইগ্রেশন (লেসন ৮)।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Core Factory & Selection', bn: 'ধাপ ১ — কোর ফ্যাক্টরি ও নির্বাচন' },
      items: [
        { en: 'The $() Factory, Wrapped Collections & Method Chaining (Lesson 1)', bn: '$() ফ্যাক্টরি, র‍্যাপড কালেকশন ও মেথড চেইনিং (লেসন ১)' },
        { en: 'jQuery Selectors, Hierarchy & Traversal Pseudo-Filters (Lesson 2)', bn: 'জেকোয়েরি সিলেক্টর, হায়ারার্কি ও ট্রাভার্সাল ফিল্টার (লেসন ২)' }
      ]
    },
    {
      title: { en: 'Stage 2 — Mutation & Event Architecture', bn: 'ধাপ ২ — মিউটেশন ও ইভেন্ট আর্কিটেকচার' },
      items: [
        { en: 'DOM Manipulation: html(), text(), val(), attr() vs prop() (Lesson 3)', bn: 'ডম ম্যানিপুলেশন: html, text, val, attr বনাম prop (লেসন ৩)' },
        { en: 'The Event Dispatcher: on(), off(), Delegation & Namespacing (Lesson 4)', bn: 'ইভেন্ট ডিসপ্যাচার: on, off, ডেলিগেশন ও নেমস্পেস (লেসন ৪)' }
      ]
    },
    {
      title: { en: 'Stage 3 — Animations & Asynchronous Requests', bn: 'ধাপ ৩ — অ্যানিমেশন ও অ্যাসিঙ্ক রিকোয়েস্ট' },
      items: [
        { en: 'Effects Engine: fadeIn(), slideDown(), animate() & stop() (Lesson 5)', bn: 'ইফেক্টস ইঞ্জিন: fadeIn, slideDown, animate ও stop (লেসন ৫)' },
        { en: 'Asynchronous Networking: $.ajax(), $.get(), $.post() & CORS (Lesson 6)', bn: 'অ্যাসিঙ্ক্রোনাস নেটওয়ার্কিং: $.ajax, $.get, $.post ও CORS (লেসন ৬)' }
      ]
    },
    {
      title: { en: 'Stage 4 — Async Control & Native Migration', bn: 'ধাপ ৪ — অ্যাসিঙ্ক কন্ট্রোল ও নেটিভ মাইগ্রেশন' },
      items: [
        { en: '$.Deferred(), Callbacks, .then() & Promise Interoperability (Lesson 7)', bn: '$.Deferred, কলব্যাকস, .then ও প্রমিজ ইন্টারঅপারেবিলিটি (লেসন ৭)' },
        { en: 'The Modern Migration: Replacing jQuery with Native Browser APIs (Lesson 8)', bn: 'আধুনিক মাইগ্রেশন: জেকোয়েরি সরিয়ে ব্রাউজারের নিজস্ব এপিআই ব্যবহার (লেসন ৮)' }
      ]
    }
  ],
  projects: [
    {
      title: {
        en: 'Interactive Task Dashboard with Event Delegation',
        bn: 'ইভেন্ট ডেলিগেশন সহ ইন্টার‍্যাক্টিভ টাস্ক ড্যাশবোর্ড'
      },
      brief: {
        en: 'Build a dynamic task board supporting drag reordering, inline editing with .val(), batch status updates via .css(), and namespaced event delegation using $(container).on("click.task", ".action-btn").',
        bn: 'ইনলাইন এডিটিং, .css() দিয়ে ব্যাচ আপডেট এবং $(container).on() দিয়ে নেমস্পেসযুক্ত ইভেন্ট ডেলিগেশন ব্যবহার করে একটি ডায়নামিক টাস্ক ম্যানেজমেন্ট বোর্ড তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Legacy jQuery Codebase Migration Suite',
        bn: 'পুরোনো জেকোয়েরি কোডবেস মাইগ্রেশন স্যুট'
      },
      brief: {
        en: 'Refactor a legacy 10,000-line jQuery application into modern vanilla ES6 JavaScript, replacing $.ajax with fetch(), .animate() with CSS transitions, and $() with querySelectorAll.',
        bn: '১০,০০০ লাইনের একটি পুরোনো জেকোয়েরি কোডবেস রিফ্যাক্টর করে $.ajax-এর বদলে fetch(), .animate()-এর বদলে CSS transition এবং $()-এর বদলে querySelectorAll ব্যবহার করে আধুনিক জাভাস্ক্রিপ্টে রূপান্তর করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always use .prop() for boolean DOM properties like checked, disabled, and selected, reserving .attr() strictly for HTML markup attributes.',
      bn: 'checked বা disabled-এর মতো বুলিয়ান ডম স্টেট নিয়ন্ত্রণের জন্য সর্বদা .prop() ব্যবহার করুন এবং শুধুমাত্র এইচটিএমএল মার্কআপ অ্যাট্রিবিউটের জন্য .attr() রাখুন।'
    },
    {
      en: 'Apply event namespaces (e.g. "click.modal") when attaching event listeners with .on() so you can cleanly unbind specific handlers without affecting other modules.',
      bn: 'ইভেন্ট যোগ করার সময় নেমস্পেস (যেমন "click.modal") ব্যবহার করুন যাতে অন্য মডিউলের ক্ষতি না করে নির্দিষ্ট হ্যান্ডলারটি .off() দিয়ে নিরাপদে মুছে ফেলা যায়।'
    },
    {
      en: 'Prevent animation queue buildup by calling .stop(true, true) before triggering hover transitions like fadeIn() or slideDown().',
      bn: 'মাউস হভার করার সময় অ্যানিমেশন জমা হয়ে বিলম্ব হওয়া ঠেকাতে fadeIn() বা slideDown() ডাকার ঠিক আগে .stop(true, true) কল করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the critical technical distinction between .attr() and .prop() introduced in jQuery 1.6?',
        bn: 'জেকোয়েরি ১.৬ সংস্করণে যুক্ত হওয়া .attr() এবং .prop()-এর মধ্যে মূল কারিগরি পার্থক্য কী?'
      },
      a: {
        en: '.attr() interacts with the initial HTML attributes serialized in the markup string, whereas .prop() interacts with the live JavaScript properties of the underlying DOM node. For boolean elements like checkboxes, reading attr("checked") reflects whether the checked attribute was present in the source HTML, while prop("checked") evaluates the true current dynamic state (true if ticked, false if unticked). Always use prop() for form state and interactive properties.',
        bn: '.attr() এইচটিএমএল মার্কআপের প্রাথমিক স্ট্রিং অ্যাট্রিবিউটের সাথে কাজ করে, আর .prop() মেমোরিতে থাকা জীবন্ত ডম নোডের বর্তমান জাভাস্ক্রিপ্ট প্রপার্টি নিয়ন্ত্রণ করে। যেমন চেকবক্সের ক্ষেত্রে attr("checked") নির্দেশ করে এইচটিএমএলে লেখা ছিল কি না, কিন্তু prop("checked") জানায় ব্যবহারকারী বর্তমানে টিক দিয়েছেন কি না (true বা false)। তাই ফর্মের অবস্থার জন্য সর্বদা prop() ব্যবহার করতে হয়।'
      }
    },
    {
      q: {
        en: 'How does jQuery implement method chaining under the hood?',
        bn: 'জেকোয়েরি কীভাবে তার মেথড চেইনিং আর্কিটেকচার কার্যকর করে?'
      },
      a: {
        en: 'Every jQuery mutator method (such as .addClass(), .css(), .attr(), or .slideDown()) performs its operation across all elements in the internal matched collection and finishes by executing "return this;". Because the returned object is the identical jQuery wrapper instance, developers can immediately invoke subsequent methods sequentially in a single fluent expression.',
        bn: 'জেকোয়েরির প্রতিটি মেথড (যেমন .addClass(), .css(), .attr()) তার ভেতরের সমস্ত উপাদানে কাজ সম্পন্ন করার পর সবার শেষে "return this;" রিটার্ন করে। যেহেতু ফেরত আসা অবজেক্টটি সেই একই জেকোয়েরি ইনস্ট্যান্স, তাই ডেভেলপাররা ডট (.) দিয়ে একের পর এক মেথড চেইন করে চমৎকারভাবে কোড লিখতে পারেন।'
      }
    },
    {
      q: {
        en: 'Why is event delegation using $(parent).on("click", "childSelector", handler) superior to $(childSelector).on("click", handler)?',
        bn: '$(childSelector).on()-এর চেয়ে $(parent).on("click", "childSelector", handler) দিয়ে ইভেন্ট ডেলিগেশন করা কেন বেশি কার্যকর?'
      },
      a: {
        en: 'Binding directly to child selectors attaches individual event listeners to every matched element, consuming O(N) memory and failing to recognize elements inserted dynamically after page initialization. Delegating to a parent attaches exactly 1 listener to the container. When child clicks bubble up, jQuery evaluates the event against the selector filter, providing O(1) memory consumption and automatically managing dynamic children.',
        bn: 'সরাসরি চাইল্ড সিলেক্টরে লিসেনার বসালে প্রতি উপাদানে আলাদা লিসেনার তৈরি হয়ে O(N) মেমোরি খরচ হয় এবং পরে যোগ হওয়া নতুন উপাদানে ক্লিক কাজ করে না। প্যারেন্টে ডেলিগেশন করলে মাত্র ১টি লিসেনার লাগে, ইভেন্ট বাবল হয়ে ওপরে উঠলে জেকোয়েরি ফিল্টার মেলায়, ফলে মেমোরি বাঁচে এবং ভবিষ্যতে আসা যেকোনো নতুন উপাদানেও স্বয়ংক্রিয়ভাবে ক্লিক কাজ করে।'
      }
    },
    {
      q: {
        en: 'What problem does .stop(true, true) solve in jQuery animations?',
        bn: 'জেকোয়েরি অ্যানিমেশনে .stop(true, true) মেথডটি কোন সমস্যা সমাধান করে?'
      },
      a: {
        en: 'By default, jQuery enqueues animations into an internal fx queue. If a user rapidly hovers their mouse over a button ten times, ten fadeIn and fadeOut animations are queued and will execute sequentially long after the cursor leaves, creating a jarring "yo-yo" stutter. Calling .stop(true, true) clears the pending animation queue (first parameter) and immediately jumps the active transition to its final state (second parameter).',
        bn: 'ডিফল্টভাবে জেকোয়েরি সমস্ত অ্যানিমেশন মেমোরির একটি কিউ বা লাইনে জমা রাখে। ব্যবহারকারী মাউস দ্রুত কয়েকবার নাড়াচাড়া করলে সবগুলো অ্যানিমেশন লাইনে জমে যায় এবং মাউস সরিয়ে নেওয়ার পরও উপাদানটি অনবরত কাঁপতে থাকে। .stop(true, true) কল করলে জমে থাকা সমস্ত অ্যানিমেশন লাইন সাথে সাথে খালি হয়ে যায় এবং বর্তমান অ্যানিমেশনটি তৎক্ষণাৎ তার শেষ অবস্থায় পৌঁছে স্থির হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'WordPress CMS Ecosystem: Supporting millions of legacy plugins, themes, and admin dashboards that continue using jQuery for modal dialogs and AJAX settings.',
      bn: 'ওয়ার্ডপ্রেস ইকোসিস্টেম: বিশ্বজুড়ে লক্ষ লক্ষ থিম ও প্লাগইনে মোডাল ডায়ালগ, সেটিংস প্যানেল এবং অ্যাজাক্স ফর্ম সাবমিশনে নির্ভরযোগ্য ভিত্তি হিসেবে জেকোয়েরির ব্যবহার।'
    },
    {
      en: 'Bootstrap 3 and 4 Enterprise Migration: Engineering modern headless design systems by auditing and converting legacy jQuery data-API plugins to vanilla ES6 Web Components.',
      bn: 'বুটস্ট্র্যাপ ৩ ও ৪ এন্টারপ্রাইজ মাইগ্রেশন: পুরোনো জেকোয়েরি প্লাগইনগুলোকে আধুনিক ভ্যানিলা জাভাস্ক্রিপ্ট ও ওয়েব কম্পোনেন্টে রূপান্তর করে আধুনিকীকরণ।'
    },
    {
      en: 'Banking & Financial Portals: Maintaining mission-critical corporate banking portals built during the 2010s with hardened, security-patched jQuery LTS builds.',
      bn: 'ব্যাংকিং ও ফাইন্যান্সিয়াল পোর্টাল: ২০১০ দশকে তৈরি হওয়া ব্যাংকিং পোর্টালগুলোতে সিকিউরিটি প্যাচযুক্ত জেকোয়েরি সংস্করণের মাধ্যমে নিরাপদ ট্রানজ্যাকশন পরিচালনা।'
    },
    {
      en: 'E-Commerce Checkout Funnels: Optimizing legacy checkout forms with lightweight jQuery validation scripts before upgrading to modern React or Vue front-ends.',
      bn: 'ই-কমার্স চেকআউট ফানেল: নতুন আধুনিক ফ্রেমওয়ার্কে রূপান্তরের পূর্বে পুরোনো চেকআউট ফর্মগুলোকে হালকা স্ক্রিপ্ট দিয়ে কার্যকর রাখা।'
    }
  ],
  lessons: [
    TheDollarAndTheChainLesson,
    TheSelectorLedgerLesson,
    TheDomWorkshopLesson,
    EventsAndDelegationLesson,
    EffectsAndTheFrameBudgetLesson,
    AjaxAndTheJsonpTollLesson,
    DeferredAndPromisesLesson,
    TheGreatMigrationLesson
  ],
  references: []
};
