import type { Lesson } from '../../../lib/types';

export const changeDetectiveLesson: Lesson = {
  slug: 'the-change-detective',
  tech: 'angular',
  title: {
    en: 'Performance Optimization — OnPush, Deferrable Views & NgRx SignalStore',
    bn: 'পারফরম্যান্স অপ্টিমাইজেশন — OnPush, ডেফারেবল ভিউস ও NgRx SignalStore'
  },
  summary: {
    en: 'Enterprise Angular performance relies on disciplined change detection strategies and surgical template rendering. In this lesson, you will master ChangeDetectionStrategy.OnPush to eliminate wasteful tree traversals, leverage Deferrable Views (@defer) with viewport triggers to delay heavy chunk loading, explore zone-less signal rendering, and architect scalable state with NgRx SignalStore.',
    bn: 'এন্টারপ্রাইজ Angular-এর সর্বোচ্চ গতি নিশ্চিত করতে সুশৃঙ্খল চেঞ্জ ডিটেকশন কৌশল ও নিখুঁত টেমপ্লেট রেন্ডারিং আবশ্যক। এই পাঠে আপনি অপ্রয়োজনীয় রেন্ডারিং পরিহারে ChangeDetectionStrategy.OnPush, ভিউপোর্ট ট্রিগার সহ ডেফারেবল ভিউস (@defer), জোন-লেস সিগন্যাল রেন্ডারিং এবং NgRx SignalStore দিয়ে স্কেলেবল স্টেট আর্কিটেকচার তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'performance-engineering-architecture',
      text: {
        en: 'The Change Detection and Deferrable Views Architecture',
        bn: 'চেঞ্জ ডিটেকশন ও ডেফারেবল ভিউস আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When applications scale to hundreds of concurrent components, default change detection inspects the entire component tree whenever any asynchronous browser event occurs. By configuring ChangeDetectionStrategy.OnPush, Angular skips subtrees unless input references shift or internal signals notify the runtime. Pairing OnPush with Deferrable Views (@defer) defers heavy code chunks until needed in the viewport.',
        bn: 'যখন কোনো অ্যাপ্লিকেশনে শত শত কম্পোনেন্ট থাকে, তখন ডিফল্ট চেঞ্জ ডিটেকশন যেকোনো ব্রাউজার ইভেন্টে পুরো অ্যাপ্লিকেশন ট্রি ওপর থেকে নিচ পর্যন্ত চেক করে। কিন্তু ChangeDetectionStrategy.OnPush ব্যবহার করলে ইনপুট বা সিগন্যাল না পাল্টালে Angular পুরো সাবট্রি এড়িয়ে যায়। এর সাথে ডেফারেবল ভিউস (@defer) যুক্ত করলে ভারী কোড স্ক্রিনে আসার আগে লোড না হয়ে মেমোরি ও সময় সাশ্রয় করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'OnPush Change Detection',
          def: {
            en: 'A performance strategy skipping component re-evaluation unless input references change, template events fire, or signals emit.',
            bn: 'একটি পারফরম্যান্স কৌশল যা ইনপুট রেফারেন্স না বদলালে বা সিগন্যাল আপডেট না হলে কম্পোনেন্ট রেন্ডারিং এড়িয়ে চলে।'
          }
        },
        {
          term: '@defer Block',
          def: {
            en: 'A built-in declarative block deferring template compilation and child chunk downloads until a trigger condition is met.',
            bn: 'একটি বিল্ট-ইন ব্লক যা সুনির্দিষ্ট শর্ত না মেলা পর্যন্ত টেমপ্লেট ও কোড চাঙ্ক ডাউনলোড স্থগিত রাখে।'
          }
        },
        {
          term: 'on viewport Trigger',
          def: {
            en: 'A defer trigger utilizing browser IntersectionObserver to download content only when scrolled into the visible screen.',
            bn: 'একটি ডেফার ট্রিগার যা ব্যবহারকারী স্ক্রল করে উপাদানটির কাছে পৌঁছালে তবেই সেটি লোড করে।'
          }
        },
        {
          term: 'NgRx SignalStore',
          def: {
            en: 'A modern, lightweight, type-safe reactive state management library powered entirely by Angular Signals.',
            bn: 'Angular সিগন্যালস-এর ওপর ভিত্তি করে তৈরি আধুনিক, হালকা ও টাইপ-সেফ স্টেট ম্যানেজমেন্ট লাইব্রেরি।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'defer-triggers-matrix',
      text: {
        en: 'Deferrable View Triggers and Companion Blocks Matrix',
        bn: 'ডেফারেবল ভিউ ট্রিগার ও সহযোগী ব্লক ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Trigger / Block', bn: 'ট্রিগার / ব্লক' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Loading Behavior', bn: 'লোডিং আচরণ' }
      ],
      rows: [
        [
          { en: '@defer (on viewport)', bn: '@defer (on viewport)' },
          { en: '@defer (on viewport) { <app-heavy-chart /> }', bn: '@defer (on viewport) { <app-heavy-chart /> }' },
          { en: 'Fetches code chunk only when placeholder enters browser viewport', bn: 'স্ক্রিনে স্ক্রল করে পৌঁছালে তবেই কোড চাঙ্কটি ডাউনলোড করে' }
        ],
        [
          { en: '@defer (on interaction)', bn: '@defer (on interaction)' },
          { en: '@defer (on interaction) { <app-comments /> }', bn: '@defer (on interaction) { <app-comments /> }' },
          { en: 'Fetches code chunk when user clicks or focuses on placeholder', bn: 'ব্যবহারকারী ক্লিক বা ফোকাস করলে তবেই লোড করে' }
        ],
        [
          { en: '@placeholder', bn: '@placeholder' },
          { en: '@placeholder (minimum 500ms) { <div class="skeleton" /> }', bn: '@placeholder (minimum 500ms) { <div class="skeleton" /> }' },
          { en: 'Renders initial skeleton UI before the trigger activates', bn: 'ট্রিগার সক্রিয় হওয়ার আগে প্রাথমিক স্কেলিটন বা ফাঁকা ফ্রেম দেখায়' }
        ],
        [
          { en: '@loading & @error', bn: '@loading & @error' },
          { en: '@loading { <spinner /> } @error { <p>Failed to load</p> }', bn: '@loading { <spinner /> } @error { <p>Failed to load</p> }' },
          { en: 'Coordinates network fetch spinners and handles chunk download errors', bn: 'ডাউনলোডের সময় স্পিনার দেখায় এবং নেটওয়ার্ক এরর হলে বিকল্প বার্তা দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'onpush-simulation-code',
      text: {
        en: 'Working OnPush Change Detection and Defer Simulation',
        bn: 'কার্যকরী OnPush চেঞ্জ ডিটেকশন ও ডেফার সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular OnPush Change Detection and Defer Viewport Resolver
class MockOnPushEngine {
  constructor() {
    this.totalTreeChecks = 0;
    this.deferredLoaded = false;
  }

  // Simulates change detection check on a component subtree
  checkComponent(componentName, isInputChanged, isSignalNotified) {
    this.totalTreeChecks += 1;

    // OnPush rule: Skip check if inputs are identical and no signal fired
    if (!isInputChanged && !isSignalNotified) {
      return { component: componentName, checked: false, action: 'SKIPPED_ONPUSH' };
    }

    return { component: componentName, checked: true, action: 'RE_RENDERED' };
  }

  // Simulates resolving @defer (on viewport)
  triggerViewportIntersection() {
    this.deferredLoaded = true;
    return { status: 200, chunk: 'HeavyAnalyticsBundle.js', loaded: true };
  }
}

const engine = new MockOnPushEngine();

// 1. Event occurs elsewhere: Inputs identical, signal unchanged (SKIPPED)
const check1 = engine.checkComponent('OrderListWidget', false, false);

// 2. State signal updates in the widget (RE-RENDERED)
const check2 = engine.checkComponent('OrderListWidget', false, true);

// 3. User scrolls down, triggering @defer on viewport
const deferResult = engine.triggerViewportIntersection();

console.log('Pass 1 OnPush decision:', check1.action);
// -> Pass 1 OnPush decision: SKIPPED_ONPUSH
console.log('Pass 2 OnPush decision:', check2.action);
// -> Pass 2 OnPush decision: RE-RENDERED
console.log('Total component checks executed:', engine.totalTreeChecks);
// -> Total component checks executed: 2
console.log('Deferred bundle loaded via viewport trigger:', deferResult.loaded);
// -> Deferred bundle loaded via viewport trigger: true`,
      caption: {
        en: 'OnPush skips check 1 and executes check 2 upon signal update, resolving defer bundle',
        bn: 'OnPush চেক ১ বাদ দিয়ে সিগন্যাল আপডেটে চেক ২ চালায় এবং ডেফার বান্ডল লোড করে'
      }
    },
    {
      type: 'heading',
      id: 'performance-discipline-rules',
      text: {
        en: 'Performance Optimization Best Practices and Architecture Rules',
        bn: 'পারফরম্যান্স অপ্টিমাইজেশন সেরা অনুশীলন ও আর্কিটেকচার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Make ChangeDetectionStrategy.OnPush your universal default for all newly created Angular components. Always practice immutable state updates (creating new array or object references with the spread operator) so OnPush components detect changes accurately. Leverage @defer with @placeholder (minimum 500ms) to prevent visual layout shifts.',
        bn: 'সব নতুন Angular কম্পোনেন্টে ChangeDetectionStrategy.OnPush সার্বজনীন ডিফল্ট হিসেবে নির্ধারণ করুন। সর্বদা ইমিউটেবল স্টেট আপডেট করুন (স্প্রেড অপারেটর দিয়ে নতুন অ্যারে বা অবজেক্ট তৈরি করুন) যাতে OnPush পরিবর্তনগুলো নিখুঁতভাবে ধরতে পারে। এবং লেআউট কাঁপুনির হাত থেকে বাঁচতে @placeholder (minimum 500ms) সহ @defer ব্যবহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Default to OnPush Everywhere: Set changeDetection: ChangeDetectionStrategy.OnPush on every standalone component.',
          bn: '১. সর্বত্র OnPush ডিফল্ট: প্রতিটি স্ট্যান্ডঅ্যালোন কম্পোনেন্টে ChangeDetectionStrategy.OnPush ব্যবহার করুন।'
        },
        {
          en: '2. Immutable State Updates: Never push into arrays in-place; write list.update(arr => [...arr, newItem]) for reference safety.',
          bn: '২. ইমিউটেবল আপডেট: সরাসরি পুশ না করে স্প্রেড অপারেটর দিয়ে নতুন অ্যারে তৈরি করে রেফারেন্স পরিবর্তন নিশ্চিত করুন।'
        },
        {
          en: '3. Use @defer for Below-the-Fold UI: Wrap heavy charts, complex modals, and rich text editors in @defer (on viewport).',
          bn: '৩. স্ক্রিনের নিচের অংশে @defer: চার্ট বা রিচ টেক্সট এডিটরের মতো ভারী উপাদানগুলোতে @defer ব্যবহার করুন।'
        },
        {
          en: '4. Prevent Layout Flashes: Configure @placeholder (minimum 500ms) to ensure skeletons remain visible until chunks load.',
          bn: '৪. লেআউট ফ্ল্যাশ প্রতিরোধ: ফাইল লোড হওয়ার সময় স্ক্রিন যাতে হঠাৎ কেঁপে না ওঠে সেজন্য minimum 500ms স্কেলিটন রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-chg-ex1',
      kind: 'mcq',
      topic: 'ChangeDetectionStrategy OnPush operational triggers',
      question: {
        en: 'Under ChangeDetectionStrategy.OnPush, when will Angular evaluate and re-render a component?',
        bn: 'ChangeDetectionStrategy.OnPush ব্যবহার করলে Angular কখন একটি কম্পোনেন্টকে পুনরায় রেন্ডার করে?'
      },
      options: [
        {
          en: 'Only when an input reference changes, an event originates from within the component template, an attached Signal updates, or the async pipe receives a new emission',
          bn: 'কেবলমাত্র যখন ইনপুট অবজেক্ট রেফারেন্স বদলায়, কম্পোনেন্ট টেমপ্লেটের ভেতর থেকে কোনো ইভেন্ট ঘটে, কোনো সিগন্যাল আপডেট হয়, অথবা async পাইপে নতুন মান আসে'
        },
        {
          en: 'On every single mouse movement or keyboard keystroke anywhere in the entire web application',
          bn: 'পুরো ওয়েব অ্যাপ্লিকেশনের যেকোনো স্থানে প্রতিটি একক মাউস নড়াচড়া বা কীবোর্ড টাইপের সময়'
        },
        {
          en: 'Only once per hour based on the system clock',
          bn: 'সিস্টেম ঘড়ির ওপর ভিত্তি করে কেবল ঘণ্টায় মাত্র ১ বার'
        },
        {
          en: 'OnPush components are never re-rendered under any circumstances',
          bn: 'OnPush উপাদান কোনো অবস্থাতেই আর কখনো পুনরায় রেন্ডার হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'OnPush skips components unless explicit input reference changes or local events occur.',
        bn: 'OnPush কম্পোনেন্ট তখনই চলে যখন ইনপুট রেফারেন্স বদলায় বা ভেতরের কোনো ইভেন্ট সক্রিয় হয়।'
      },
      explanation: {
        en: 'By default, Angular checks every component on every tick. OnPush isolates subtrees, skipping change detection unless an @Input reference changes, a local event triggers, or a Signal updates.',
        bn: 'ডিফল্ট সিস্টেমে অপ্রয়োজনীয় সব উপাদান প্রতিবার চেক হতো। OnPush দিলে ইনপুট বা সিগন্যাল না পাল্টালে Angular ওই অংশটি সরাসরি বাদ দিয়ে চলে যায়, ফলে অ্যাপের গতি বহুগুণ বাড়ে।'
      }
    },
    {
      id: 'ng-chg-ex2',
      kind: 'mcq',
      topic: 'immutable array updates requirement for onpush components',
      question: {
        en: 'Why does an OnPush component fail to update if a parent modifies an array via "items.push(newItem)" without creating a new array reference?',
        bn: 'প্যারেন্ট কম্পোনেন্ট যদি নতুন অ্যারে রেফারেন্স না বানিয়ে "items.push(newItem)" করে, তবে OnPush কম্পোনেন্ট কেন আপডেট হয় না?'
      },
      options: [
        {
          en: 'OnPush relies on shallow reference equality checks (===); mutating an existing array preserves the same memory reference, so Angular concludes the input has not changed and skips rendering',
          bn: 'OnPush শ্যালো রেফারেন্স (===) দিয়ে ইনপুট বিচার করে; আগের অ্যারেতেই পুশ করলে মেমোরি রেফারেন্স এক থাকে, ফলে Angular মনে করে কোনো পরিবর্তন হয়নি এবং রেন্ডারিং বাদ দেয়'
        },
        {
          en: 'Because push() is an illegal command in TypeScript',
          bn: 'কারণ push() হলো টাইপস্ক্রিপ্টের একটি অবৈধ কমান্ড'
        },
        {
          en: 'The browser hard drive becomes full immediately',
          bn: 'ব্রাউজার হার্ডড্রাইভ সাথে সাথে ফুল হয়ে যায়'
        },
        {
          en: 'Array elements can only be numbers between 1 and 10',
          bn: 'অ্যারের উপাদান কেবল ১ থেকে ১০ এর মধ্যকার সংখ্যা হতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'OnPush performs reference identity checks (oldRef === newRef) to skip dirty checks.',
        bn: 'OnPush মেমোরি রেফারেন্স পরীক্ষা করে। তাই [...items, newItem] দিয়ে নতুন রেফারেন্স দেওয়া আবশ্যক।'
      },
      explanation: {
        en: 'Array.prototype.push mutates the array in-place. Because the memory reference does not change, OnPush assumes the input is clean and skips re-rendering. Always use immutable spreads ([...items]).',
        bn: 'সরাসরি push() করলে মেমোরির ঠিকানা একই থাকে। OnPush নতুন রেফারেন্স না পেলে পেজ রি-রেন্ডার করে না। তাই [...items, newItem] লিখলে নতুন রেফারেন্স পেয়ে সাথে সাথে স্ক্রিন আপডেট হয়।'
      }
    },
    {
      id: 'ng-chg-ex3',
      kind: 'mcq',
      topic: 'deferrable views with on viewport trigger mechanics',
      question: {
        en: 'How does the "@defer (on viewport)" block optimize initial page loading in Angular 17+?',
        bn: 'Angular ১৭+-এ "@defer (on viewport)" ব্লক কীভাবে প্রাথমিক পেজ লোডের গতি উন্নত করে?'
      },
      options: [
        {
          en: 'It splits the enclosed component into a separate JavaScript bundle that is only fetched across the network when the placeholder is scrolled into the user visible viewport via IntersectionObserver',
          bn: 'এটি ভেতরের উপাদানটিকে আলাদা জাভাস্ক্রিপ্ট বান্ডলে বিভক্ত করে এবং ব্যবহারকারী স্ক্রল করে স্ক্রিনের দৃশ্যমান স্থানে পৌঁছালে তবেই কেবল ফাইলটি নেটওয়ার্ক থেকে ডাউনলোড করে'
        },
        {
          en: 'It reduces the physical screen brightness of the monitor',
          bn: 'এটি মনিটরের ফিজিক্যাল স্ক্রিন ব্রাইটনেস কমিয়ে দেয়'
        },
        {
          en: 'It turns the entire webpage into a static PDF document',
          bn: 'এটি পুরো ওয়েবপেজকে একটি স্ট্যাটিক পিডিএফ ফাইলে রূপান্তর করে'
        },
        {
          en: 'The viewport trigger requires users to have a 4K resolution screen',
          bn: 'ভিউপোর্ট ট্রিগার চালানোর জন্য ব্যবহারকারীর অবশ্যই ৪কে রেজোলিউশন স্ক্রিন থাকতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '@defer on viewport delays downloading chunks until the content enters the visible screen area.',
        bn: '@defer on viewport স্ক্রল করে সামনে না আসা পর্যন্ত কোড ডাউনলোড স্থগিত রাখে।'
      },
      explanation: {
        en: '@defer generates an independent lazy chunk. The "on viewport" trigger listens via IntersectionObserver. Only when the user scrolls the placeholder into view is the chunk fetched and rendered.',
        bn: 'পেজের নিচে থাকা ভারী চার্ট বা কমেন্ট সেকশন প্রথম লোডে দরকার হয় না। @defer (on viewport) দিলে ইউজার স্ক্রল করে নিচে নামলেই শুধু কোড ডাউনলোড হয়, ফলে সাইট মুহূর্তেই খুলে যায়।'
      }
    },
    {
      id: 'ng-chg-ex4',
      kind: 'mcq',
      topic: 'minimum parameter in placeholder and loading blocks',
      question: {
        en: 'Why is adding "(minimum 500ms)" to an "@placeholder (minimum 500ms)" block considered an essential user experience best practice?',
        bn: '"@placeholder (minimum 500ms)" ব্লকে "(minimum 500ms)" যোগ করা কেন একটি অপরিহার্য সেরা ইউজার এক্সপেরিয়েন্স নিয়ম?'
      },
      options: [
        {
          en: 'It prevents visual layout thrashing: if the lazy chunk downloads very quickly (e.g. 50ms), without a minimum duration the placeholder would flash briefly before being replaced, creating an irritating visual flicker',
          bn: 'এটি স্ক্রিনের বিরক্তিকর কাঁপুনির (flicker) হাত থেকে বাঁচায়: নেটওয়ার্ক খুব দ্রুত থাকলে (যেমন ৫০ মিলিসেকেন্ড) স্কেলিটন এক পলকের জন্য কেঁপে উঠত, মিনিমাম সময় দিলে তা মসৃণভাবে দৃশ্যমান থাকে'
        },
        {
          en: 'Because without 500ms, the computer CPU crashes',
          bn: 'কারণ ৫০০ মিলিসেকেন্ড না দিলে কম্পিউটারের প্রসেসর ক্র্যাশ করে'
        },
        {
          en: 'It forces the user to solve a mathematical puzzle',
          bn: 'এটি ব্যবহারকারীকে একটি গণিত ধাঁধা সমাধান করতে বাধ্য করে'
        },
        {
          en: 'Minimum duration is strictly forbidden on mobile smartphones',
          bn: 'মোবাইল ফোনে মিনিমাম সময়সীমা ব্যবহার করা সম্পূর্ণরূপে নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'minimum prevents fast network responses from causing rapid jarring visual flashes.',
        bn: 'minimum দ্রুতগতির নেটওয়ার্কেও ক্ষণস্থায়ী বিরক্তিকর স্কেলিটন ফ্ল্যাশ হওয়া রোধ করে।'
      },
      explanation: {
        en: 'If a chunk loads in 30ms, flashing a placeholder for 30ms looks like a screen glitch. The minimum duration ensures that if the placeholder is shown, it persists long enough to feel natural.',
        bn: 'খুব দ্রুত লোড হলে স্কেলিটন এক পলক দেখা দিয়েই হারিয়ে যায় যা চোখের জন্য বিরক্তিকর। minimum 500ms দিলে স্কেলিটনটি স্বাভাবিক সময় ধরে থেকে তবেই আসল কন্টেন্ট দেখায়।'
      }
    }
  ],
  quiz: {
    id: 'the-change-detective-quiz',
    title: {
      en: 'Angular Performance & Optimization Architecture Quiz',
      bn: 'Angular পারফরম্যান্স ও অপ্টিমাইজেশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-ngrx-signalstore-architecture',
        kind: 'mcq',
        topic: 'NgRx SignalStore modular functional state architecture',
        question: {
          en: 'What architectural advantage does "NgRx SignalStore" offer over legacy NgRx Redux stores with actions, reducers, and effects?',
          bn: 'পুরোনো NgRx রিডাক্স স্টোরের (অ্যাকশন, রিডিউসার, এফেক্ট) তুলনায় "NgRx SignalStore" কোন আর্কিটেকচারাল সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It provides a modular, composition-based state solution (signalStore, withState, withComputed, withMethods) powered natively by Angular Signals with zero boilerplate and full TypeScript type inference',
            bn: 'এটি কোনো জটিল বয়লারপ্লেট ছাড়াই সম্পূর্ণ Angular Signals দ্বারা চালিত একটি মডিউলার সমাধান দেয় (signalStore, withState, withComputed, withMethods) যা চমৎকার টাইপস্ক্রিপ্ট টাইপ সেফটি নিশ্চিত করে'
          },
          {
            en: 'It stores all application data on physical tape drives',
            bn: 'এটি অ্যাপ্লিকেশনের সমস্ত ডাটা ম্যাগনেটিক টেপ ড্রাইভে সংরক্ষণ করে'
          },
          {
            en: 'SignalStore disables all network security firewalls',
            bn: 'SignalStore সমস্ত নেটওয়ার্ক সিকিউরিটি ফায়ারওয়াল বন্ধ করে দেয়'
          },
          {
            en: 'It only supports storing boolean true and false values',
            bn: 'এটি কেবল সত্য ও মিথ্যা মান সংরক্ষণ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'NgRx SignalStore combines signal reactivity with modular composition hooks.',
          bn: 'NgRx SignalStore রিডাক্সের বাড়তি ঝামেলা দূর করে সিগন্যালের সাহায্যে সহজে স্টেট ম্যানেজ করে।'
        },
        explanation: {
          en: 'Legacy NgRx Redux required separate files for actions, reducers, selectors, and effects. SignalStore consolidates state, computed signals, and methods into a clean, composable functional store.',
          bn: 'আগে রিডাক্সে একটি ছোট কাজের জন্য ৪-৫টি ফাইল বানাতে হতো। SignalStore এক ফাইলের ভেতর withState ও withMethods দিয়ে সবকিছু সিগন্যাল আকারে ব্যবহারের অপূর্ব সুযোগ করে দিয়েছে।'
        }
      },
      {
        id: 'q-experimental-zoneless-rendering',
        kind: 'mcq',
        topic: 'experimental zoneless change detection in Angular 18+',
        question: {
          en: 'How does configuring "provideExperimentalZonelessChangeDetection()" fundamentally change Angular runtime execution?',
          bn: 'Angular ১৮+-এ "provideExperimentalZonelessChangeDetection()" চালু করলে রানটাইমে কী মৌলিক পরিবর্তন ঘটে?'
        },
        options: [
          {
            en: 'It completely removes the Zone.js monkey-patching dependency, relying exclusively on Signals and ChangeDetectorRef notifications to trigger surgical, efficient view updates',
            bn: 'এটি ব্রাউজারে Zone.js-এর কাজের বোঝা পুরোপুরি সরিয়ে দেয় এবং কেবলমাত্র Signals ও ChangeDetectorRef-এর সংকেতের ওপর ভিত্তি করে অত্যন্ত দ্রুত ও নিখুঁত ভিউ আপডেট চালায়'
          },
          {
            en: 'It disables all JavaScript execution in the client browser',
            bn: 'এটি ক্লায়েন্ট ব্রাউজারে সমস্ত জাভাস্ক্রিপ্ট বন্ধ করে দেয়'
          },
          {
            en: 'It forces the browser to re-download the application every 5 seconds',
            bn: 'এটি প্রতি ৫ সেকেন্ড পর পর ব্রাউজারকে অ্যাপটি ডাউনলোড করতে বাধ্য করে'
          },
          {
            en: 'Zoneless mode is only compatible with HTML4 browsers',
            bn: 'জোন-লেস মোড কেবল পুরোনো এইচটিএমএল৪ ব্রাউজারেই চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Zoneless Angular drops the Zone.js bundle and relies on signal-based reactive notifications.',
          bn: 'জোন-লেস Angular Zone.js-এর ভারী বান্ডল বাদ দিয়ে শুধু সিগন্যাল নোটিফিকেশনে চলে।'
        },
        explanation: {
          en: 'Zone.js monkey-patches all browser asynchronous APIs (setTimeout, addEventListener, Promise). Zoneless mode eliminates Zone.js, saving bundle size and letting Signals drive updates directly.',
          bn: 'Zone.js সব ব্রাউজার এপিআইকে ওভাররাইড করত যা সাইজ ও স্পিডে প্রভাব ফেলত। জোন-লেস মোডে Zone.js পুরোপুরি বাদ যায় এবং অ্যাপের সাইজ কমে রেন্ডারিং সুপারফাস্ট হয়।'
        }
      },
      {
        id: 'q-defer-prefetch-trigger',
        kind: 'mcq',
        topic: 'prefetching deferred bundles ahead of time',
        question: {
          en: 'What does the "prefetch" option do in "@defer (on interaction; prefetch on idle)"?',
          bn: '"@defer (on interaction; prefetch on idle)"-এ "prefetch" অপশন কী কাজ করে?'
        },
        options: [
          {
            en: 'It downloads the component JavaScript chunk quietly in the background when the browser is idle, so that when the user actually interacts (clicks), the component renders instantly with zero network delay',
            bn: 'ব্রাউজার যখন অবসর থাকে তখন ব্যাকগ্রাউন্ডে কোড চাঙ্কটি আগেই ডাউনলোড করে রাখে, যাতে ব্যবহারকারী ক্লিক করা মাত্র কোনো নেটওয়ার্ক বিলম্ব ছাড়াই উপাদানটি সাথে সাথে স্ক্রিনে ভেসে ওঠে'
          },
          {
            en: 'It uploads the user browser history to an analytics server',
            bn: 'এটি ব্যবহারকারীর ব্রাউজার হিস্টোরি অ্যানালিটিক্স সার্ভারে আপলোড করে'
          },
          {
            en: 'It freezes the user computer during idle periods',
            bn: 'অবসর সময়ে এটি ব্যবহারকারীর কম্পিউটার হ্যাং করিয়ে রাখে'
          },
          {
            en: 'Prefetching is strictly forbidden by modern web security standards',
            bn: 'আধুনিক ওয়েব নিরাপত্তা মানদণ্ডে প্রি-ফেচিং করা সম্পূর্ণরূপে নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'prefetch downloads the code bundle before the main trigger condition occurs.',
          bn: 'prefetch মূল ট্রিগারের পূর্বেই অবসর সময়ে কোড নামিয়ে রেখে তাৎক্ষণিক রেন্ডার নিশ্চিত করে।'
        },
        explanation: {
          en: 'Decoupling rendering from downloading: "prefetch on idle" downloads the code during browser idle time via requestIdleCallback. When the user clicks (on interaction), rendering is instantaneous.',
          bn: 'ইউজার ক্লিক করলে ফাইল ডাউনলোড হতে দেরি হতে পারে। তাই prefetch on idle দিয়ে অলস সময়ে ফাইলটি নামিয়ে রাখলে ক্লিকে কোনো লোডার ছাড়াই সাথে সাথে কম্পোনেন্ট দৃশ্যমান হয়।'
        }
      },
      {
        id: 'q-markforcheck-vs-detectchanges',
        kind: 'mcq',
        topic: 'ChangeDetectorRef markForCheck versus detectChanges',
        question: {
          en: 'What is the architectural difference between "cdr.markForCheck()" and "cdr.detectChanges()"?',
          bn: '"cdr.markForCheck()" এবং "cdr.detectChanges()"-এর মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
        },
        options: [
        {
          en: '"markForCheck()" marks the component and all its ancestors as dirty for the next change detection pass. In contrast, "detectChanges()" immediately triggers synchronous change detection for the current component right now',
          bn: '"markForCheck()" বর্তমান উপাদান ও তার পূর্বপুরুষদের পরবর্তী চেঞ্জ ডিটেকশন চক্রের জন্য মার্ক করে রাখে। অন্যদিকে "detectChanges()" এই মুহূর্তেই বর্তমান উপাদানের জন্য সরাসরি পরিবর্তন পরীক্ষা চালায়'
        },
          {
            en: '"markForCheck" deletes the component while "detectChanges" restores it',
            bn: '"markForCheck" উপাদান মুছে ফেলে আর "detectChanges" তা পুনরুদ্ধার করে'
          },
          {
            en: '"detectChanges" only works on touchscreens',
            bn: '"detectChanges" কেবলমাত্র টাচস্ক্রিন ডিভাইসেই কাজ করে'
          },
          {
            en: 'There is no difference between markForCheck and detectChanges',
            bn: 'markForCheck এবং detectChanges-এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'markForCheck schedules an upcoming check; detectChanges forces immediate synchronous checking.',
          bn: 'markForCheck পরবর্তী রাউন্ডে চেক করার শিডিউল দেয়; detectChanges তাৎক্ষণিক চেক চালায়।'
        },
        explanation: {
          en: 'markForCheck() simply flags ancestors so the next regular change detection run checks them. detectChanges() runs change detection synchronously immediately on the local subtree, which can degrade performance if overused.',
          bn: 'markForCheck() পরবর্তী টিক পর্যন্ত অপেক্ষা করে সবার সাথে চেক চালায় যা নিরাপদ। আর detectChanges() তাৎক্ষণিক পুরো সাবট্রি চেক করে, যা বেশি ব্যবহারে পারফরম্যান্স কমায়।'
        }
      }
    ]
  }
};
