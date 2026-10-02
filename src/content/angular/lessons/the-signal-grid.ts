import type { Lesson } from '../../../lib/types';

export const signalGridLesson: Lesson = {
  slug: 'the-signal-grid',
  tech: 'angular',
  title: {
    en: 'Overview of Angular Signals — Reactive Primitives, computed() & effect()',
    bn: 'Angular সিগন্যালস পরিচিতি — রিঅ্যাক্টিভ ভিত্তি, computed() ও effect()'
  },
  summary: {
    en: 'Signals are the foundation of modern Angular reactivity. In this lesson, you will master writable signals with set and update operations, build derived reactive pipelines using memoized computed signals, manage side-effects cleanly with effect, and inspect signal-driven component inputs and models.',
    bn: 'সিগন্যালস হলো আধুনিক Angular রিঅ্যাক্টিভিটির মূল ভিত্তি। এই পাঠে আপনি set ও update অপারেশন সহ রাইটেবল সিগন্যাল, মেমোইজড computed সিগন্যাল দিয়ে হিসাবকৃত পাইপলাইন তৈরি, effect দিয়ে সুরক্ষিত সাইড-এফেক্ট ব্যবস্থাপনা এবং সিগন্যাল-ভিত্তিক কম্পোনেন্ট ইনপুট ও মডেল গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'angular-signals-architecture',
      text: {
        en: 'The Angular Signals Reactive Engine Architecture',
        bn: 'Angular সিগন্যালস রিঅ্যাক্টিভ ইঞ্জিন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern Angular applications, Signals provide a fine-grained reactive foundation that tracks synchronous state changes without relying on heavy Zone.js dirty checking. A signal is a reactive value wrapper that notifies the Angular runtime whenever its contents change, triggering surgical Document Object Model (DOM) updates strictly where consumed.',
        bn: 'যখন আপনি আধুনিক Angular অ্যাপ্লিকেশন তৈরি করেন, তখন সিগন্যালস পুরোনো Zone.js-এর ওপর নির্ভর না করেই নিখুঁত রিঅ্যাক্টিভ ভিত্তি প্রদান করে। সিগন্যাল হলো একটি বিশেষ ভ্যালু র্যাপার যা এর মান পরিবর্তন হওয়া মাত্র Angular রানটাইমকে সংকেত পাঠায়, যার ফলে পুরো পেজ পুনরায় চেক না করে কেবল যেখানে মানটি ব্যবহৃত হয়েছে সেখানে ডম নিখুঁতভাবে আপডেট হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'signal()',
          def: {
            en: 'A writable reactive primitive holding a value, read by invoking it as a function: count().',
            bn: 'একটি পরিবর্তনযোগ্য রিঅ্যাক্টিভ ভিত্তি যা কোনো মান ধারণ করে এবং ফাংশন হিসেবে count() ডেকে পড়া হয়।'
          }
        },
        {
          term: 'computed()',
          def: {
            en: 'A read-only memoized signal deriving its value from other signals, recalculating lazily on access.',
            bn: 'একটি রিড-অনলি মেমোইজড সিগন্যাল যা অন্য সিগন্যাল থেকে মান বের করে এবং কেবল অ্যাক্সেসের সময় হিসাব করে।'
          }
        },
        {
          term: 'effect()',
          def: {
            en: 'An operation running inside an injection context that executes whenever tracked signals change.',
            bn: 'ইনজেকশন কনটেক্সটে চলা একটি অপারেশন যা নজরদারিতে থাকা সিগন্যালের মান বদলালে স্বয়ংক্রিয়ভাবে পুনরায় চলে।'
          }
        },
        {
          term: 'input() & model()',
          def: {
            en: 'Signal-based component inputs and two-way models introduced in modern Angular to replace @Input decorators.',
            bn: 'আধুনিক Angular-এ পুরোনো @Input-এর বদলে যুক্ত হওয়া সিগন্যাল-ভিত্তিক কম্পোনেন্ট ইনপুট ও দ্বি-মুখী মডেল।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'signals-operations-matrix',
      text: {
        en: 'Signals API Operations and Syntax Matrix',
        bn: 'সিগন্যালস এপিআই অপারেশন ও সিনট্যাক্স ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'API Method', bn: 'এপিআই মেথড' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Runtime Behavior', bn: 'রানটাইম আচরণ' }
      ],
      rows: [
        [
          { en: 'signal.set()', bn: 'signal.set()' },
          { en: 'count.set(10);', bn: 'count.set(10);' },
          { en: 'Directly replaces the existing value with a new value', bn: 'বিদ্যমান মানকে সরাসরি একটি নতুন মান দিয়ে প্রতিস্থাপন করে' }
        ],
        [
          { en: 'signal.update()', bn: 'signal.update()' },
          { en: 'count.update(c => c + 1);', bn: 'count.update(c => c + 1);' },
          { en: 'Derives the next value based on the previous value', bn: 'পূর্বের মানের ওপর ভিত্তি করে নতুন মান তৈরি করে' }
        ],
        [
          { en: 'computed()', bn: 'computed()' },
          { en: 'const doubled = computed(() => count() * 2);', bn: 'const doubled = computed(() => count() * 2);' },
          { en: 'Memoizes calculated values and avoids recalculating if inputs are unchanged', bn: 'হিসাব করা মান ক্যাশ করে রাখে এবং ইনপুট না বদলালে পুনরায় হিসাব এড়ায়' }
        ],
        [
          { en: 'effect()', bn: 'effect()' },
          { en: 'effect(() => console.log("Value:", count()));', bn: 'effect(() => console.log("Value:", count()));' },
          { en: 'Executes side effects such as logging or syncing to local storage', bn: 'লগিং বা লোকাল স্টোরেজ সিঙ্কের মতো পার্শ্ব-প্রতিক্রিয়া সম্পন্ন করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'signals-simulation-code',
      text: {
        en: 'Working Angular Signals Engine Simulation',
        bn: 'কার্যকরী Angular সিগন্যালস ইঞ্জিন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular Signals Reactive Dependency Graph and Memoization
class MockSignal {
  constructor(initialValue) {
    this._value = initialValue;
    this.subscribers = new Set();
  }

  get() {
    return this._value;
  }

  set(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.notify();
    }
  }

  update(fn) {
    this.set(fn(this._value));
  }

  notify() {
    for (const sub of this.subscribers) sub();
  }
}

class MockComputed {
  constructor(deriveFn) {
    this.deriveFn = deriveFn;
    this.dirty = true;
    this.cachedValue = undefined;
  }

  get() {
    if (this.dirty) {
      this.cachedValue = this.deriveFn();
      this.dirty = false;
    }
    return this.cachedValue;
  }

  markDirty() {
    this.dirty = true;
  }
}

// 1. Create a writable signal with initial count 10
const counter = new MockSignal(10);

// 2. Create a computed signal deriving double value
const doubled = new MockComputed(() => counter.get() * 2);
counter.subscribers.add(() => doubled.markDirty());

// Read initial values
const initialCount = counter.get();
const initialDoubled = doubled.get();

// 3. Update signal using .update() by adding 5
counter.update(val => val + 5);
const updatedCount = counter.get();
const updatedDoubled = doubled.get();

console.log('Initial counter signal value:', initialCount);
// -> Initial counter signal value: 10
console.log('Initial computed doubled value:', initialDoubled);
// -> Initial computed doubled value: 20
console.log('Counter value after update:', updatedCount);
// -> Counter value after update: 15
console.log('Computed doubled value after update:', updatedDoubled);
// -> Computed doubled value after update: 30`,
      caption: {
        en: 'Signals engine tracks counter from 10 to 15, updating memoized doubled from 20 to 30',
        bn: 'সিগন্যালস ইঞ্জিন কাউন্টার ১০ থেকে ১৫ তে ট্র্যাক করছে এবং মেমোইজড মান ২০ থেকে ৩০ এ আপডেট করছে'
      }
    },
    {
      type: 'heading',
      id: 'signals-discipline-rules',
      text: {
        en: 'Signals Engineering Best Practices and Rules',
        bn: 'সিগন্যালস সেরা অনুশীলন ও সুবর্ণ নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When architecting reactive components with Angular Signals, follow core discipline rules. Never write side effects inside computed() signals; computed signals must remain pure functions without DOM manipulations or asynchronous network calls. Avoid mutating state directly inside an effect() to eliminate infinite dependency loops.',
        bn: 'Angular Signals দিয়ে উপাদান তৈরির সময় কিছু মৌলিক নিয়ম মেনে চলা আবশ্যক। কখনোই computed() সিগন্যালের ভেতর সাইড-এফেক্ট বা ডম পরিবর্তন করবেন না; এটি সর্বদা একটি বিশুদ্ধ ফাংশন হতে হবে। তাছাড়া ইনফিনিট লুপ এড়াতে effect()-এর ভেতরে অন্য কোনো সিগন্যালে নতুন মান লেখা পরিহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Keep computed Pure: Never trigger network requests, timers, or DOM mutations inside a computed signal function.',
          bn: '১. computed সর্বদা বিশুদ্ধ: computed সিগন্যালে কোনো নেটওয়ার্ক রিকোয়েস্ট, টাইমার বা ডম পরিবর্তন করবেন না।'
        },
        {
          en: '2. Avoid Signal Writes in effect: Modifying signals inside an effect risks triggering recursive loops; use untracked() if necessary.',
          bn: '২. effect-এ মান লেখা পরিহার: effect-এর ভেতর সিগন্যাল আপডেট করলে ইনফিনিট লুপ হতে পারে; প্রয়োজনে untracked() ব্যবহার করুন।'
        },
        {
          en: '3. Read Signals by Invocation: Always call the signal with parentheses count() to retrieve its current value in templates and code.',
          bn: '৩. ব্র্যাকেট দিয়ে পাঠ: টেমপ্লেট বা কোডে সিগন্যালের বর্তমান মান পেতে সর্বদা বন্ধনী count() দিয়ে ফাংশনটি কল করুন।'
        },
        {
          en: '4. Prefer input() over @Input: Use the modern signal-based readonly id = input<string>() for type-safe component parameters.',
          bn: '৪. modern input() ব্যবহার: পুরোনো ডেকোরেটরের বদলে টাইপ-সেফ readonly id = input<string>() ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-sig-ex1',
      kind: 'mcq',
      topic: 'reading angular signals function invocation syntax',
      question: {
        en: 'How do you read the current value of a signal named "userCount" in Angular TypeScript code or templates?',
        bn: 'Angular টাইপস্ক্রিপ্ট কোড বা টেমপ্লেটে "userCount" নামের একটি সিগন্যালের বর্তমান মান কীভাবে পড়তে হয়?'
      },
      options: [
        {
          en: 'Invoke the signal as a function with parentheses: "userCount()"',
          bn: 'বন্ধনী সহ ফাংশন হিসেবে সিগন্যালটিকে ডেকে: "userCount()"'
        },
        {
          en: 'Read the hidden property "userCount.value"',
          bn: 'গোপন প্রোপার্টি "userCount.value" পড়ার মাধ্যমে'
        },
        {
          en: 'Convert the signal into a string using JSON.stringify(userCount)',
          bn: 'JSON.stringify(userCount) দিয়ে সিগন্যালটিকে স্ট্রিংয়ে বদলে'
        },
        {
          en: 'Pass userCount into an eval() statement',
          bn: 'userCount-কে একটি eval() স্টেটমেন্টে পাস করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Angular Signals are getter functions that record dependency subscriptions when invoked.',
        bn: 'Angular Signals মূলত একটি গেটার ফাংশন যা কল করলেই কেবল ডিপেন্ডেন্সি ট্র্যাক করে।'
      },
      explanation: {
        en: 'Unlike Vue refs which use .value, Angular Signals are getter functions. Invoking userCount() retrieves the value and registers the caller in the reactive dependency graph.',
        bn: 'Vue-এর মতো .value না লিখে Angular-এ বন্ধনী দিয়ে userCount() কল করতে হয়। এতে করে ফাংশনটি বর্তমান মান দেয় এবং স্বয়ংক্রিয়ভাবে ট্র্যাকিং শুরু করে।'
      }
    },
    {
      id: 'ng-sig-ex2',
      kind: 'mcq',
      topic: 'set versus update methods in writable signals',
      question: {
        en: 'What is the architectural difference between "signal.set(newValue)" and "signal.update(updateFn)"?',
        bn: 'রাইটেবল সিগন্যালে "signal.set(newValue)" এবং "signal.update(updateFn)"-এর মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: '"set" directly overwrites the current value with an entirely new value, whereas "update" computes the next value based on the previous current value',
          bn: '"set" সরাসরি পূর্বের মান মুছে দিয়ে একটি নতুন মান বসায়, আর "update" পূর্বের মানের ওপর ভিত্তি করে ফাংশন চালিয়ে নতুন মান নির্ধারণ করে'
        },
        {
          en: '"set" only accepts numbers while "update" only accepts strings',
          bn: '"set" কেবল সংখ্যা গ্রহণ করে আর "update" কেবল স্ট্রিং গ্রহণ করে'
        },
        {
          en: '"update" deletes the signal from browser memory permanently',
          bn: '"update" ব্রাউজার মেমোরি থেকে সিগন্যালটি চিরতরে মুছে ফেলে'
        },
        {
          en: 'There is no difference; they are identical aliases',
          bn: 'এদের মধ্যে কোনো পার্থক্য নেই; দুটি একই কাজের ভিন্ন নাম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use set when you know the new value; use update when the new value depends on the previous state.',
        bn: 'সরাসরি মান জানলে set ব্যবহার করুন; পূর্বের মানের ওপর হিসাব নির্ভর করলে update ব্যবহার করুন।'
      },
      explanation: {
        en: 'signal.set(10) replaces the state directly. signal.update(c => c + 1) provides the previous state as an argument, ensuring atomic derivations without race conditions.',
        bn: 'set(10) দিলে সরাসরি নতুন মান বসে যায়। আর update(c => c + 1) দিলে বর্তমান মানকে প্যারামিটার হিসেবে নিয়ে নতুন মান রিটার্ন করা যায়।'
      }
    },
    {
      id: 'ng-sig-ex3',
      kind: 'mcq',
      topic: 'pure function requirement for computed signals',
      question: {
        en: 'Why is it considered a dangerous anti-pattern to perform HTTP requests or DOM mutations inside a "computed()" signal?',
        bn: '"computed()" সিগন্যালের ভেতর এইচটিটিপি রিকোয়েস্ট পাঠানো বা ডম পরিবর্তন করা কেন মারাত্মক ভুল বলে গণ্য হয়?'
      },
      options: [
        {
          en: 'computed signals are intended to be pure mathematical derivations that are evaluated lazily and may be executed multiple times; side effects introduce unpredictable runtime bugs and cache corruption',
          bn: 'computed সিগন্যাল হলো বিশুদ্ধ গাণিতিক হিসাব যা অলসভাবে চলে এবং প্রয়োজনে একাধিকবার রান হতে পারে; এতে পার্শ্ব-প্রতিক্রিয়া রাখলে মারাত্মক বাগ এবং ক্যাশ ভুলের সৃষ্টি হয়'
        },
        {
          en: 'Because computed signals automatically encrypt all outgoing network traffic',
          bn: 'কারণ computed সিগন্যাল সব নেটওয়ার্ক ট্রাফিক নিজে থেকে এনক্রিপ্ট করে ফেলে'
        },
        {
          en: 'The TypeScript compiler crashes if an async keyword is used anywhere in the file',
          bn: 'ফাইলের কোথাও async কিওয়ার্ড ব্যবহার করলে টাইপস্ক্রিপ্ট কমপাইলার ক্র্যাশ করে'
        },
        {
          en: 'computed signals are only permitted to contain mathematical addition (+)',
          bn: 'computed সিগন্যালে কেবল যোগ অঙ্ক ছাড়া অন্য কিছু লেখা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'computed signals must be pure, idempotent, and side-effect free.',
        bn: 'computed সিগন্যাল সর্বদা বিশুদ্ধ হতে হবে এবং কোনো পার্শ্ব-প্রতিক্রিয়া ছাড়া কাজ করতে হবে।'
      },
      explanation: {
        en: 'computed() functions must be side-effect free and idempotent. They re-evaluate when read if dependencies have changed. Side effects belong exclusively inside effect() or lifecycle methods.',
        bn: 'computed-এর কাজ শুধু ডাটা হিসাব করা। এতে কোনো নেটওয়ার্ক কল বা সাইড-এফেক্ট রাখা যাবে না; এমন কাজের জন্য effect() ব্যবহার করাই সঠিক।'
      }
    },
    {
      id: 'ng-sig-ex4',
      kind: 'mcq',
      topic: 'effect injection context requirement and untracked',
      question: {
        en: 'Where can the "effect()" function be instantiated in an Angular component by default?',
        bn: 'Angular কম্পোনেন্টে "effect()" ফাংশনটি ডিফল্টভাবে কোথায় তৈরি করা যায়?'
      },
      options: [
        {
          en: 'Inside an injection context, such as the component "constructor()" or field initializer declarations',
          bn: 'ইনজেকশন কনটেক্সটের ভেতর, যেমন কম্পোনেন্টের "constructor()" অথবা ফিল্ড ডিক্লারেশনের শুরুতে'
        },
        {
          en: 'Inside any standard JavaScript for loop',
          bn: 'যেকোনো সাধারণ জাভাস্ক্রিপ্ট for লুপের ভেতর'
        },
        {
          en: 'Only inside the browser developer tools console',
          bn: 'কেবলমাত্র ব্রাউজার ডেভেলপার টুলস কনসোলে'
        },
        {
          en: 'effect() can only be called from an external CSS file',
          bn: 'effect() কেবল বাইরের কোনো সিএসএস ফাইল থেকে কল করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'effect() requires an active InjectionContext unless an explicit Injector is provided.',
        bn: 'সরাসরি ইনজেক্টর পাস না করলে effect() চলার জন্য ইনজেকশন কনটেক্সট থাকা আবশ্যক।'
      },
      explanation: {
        en: 'effect() registers with the component cleanup lifecycle, requiring an active injection context. You must call it in the constructor or field initializers, or pass { injector } manually.',
        bn: 'effect() কম্পোনেন্টের লাইফসাইকেলের সাথে মেমোরি পরিষ্কারের কাজ সংযুক্ত করে। তাই এটি ফিল্ড ভেরিয়েবল বা কনস্ট্রাক্টরে ঘোষণা করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-signal-grid-quiz',
    title: {
      en: 'Angular Signals Reactivity Quiz',
      bn: 'Angular সিগন্যালস রিঅ্যাক্টিভিটি কুইজ'
    },
    questions: [
      {
        id: 'q-signals-vs-zonejs-dirty-checking',
        kind: 'mcq',
        topic: 'signals fine-grained updates versus legacy zonejs dirty checking',
        question: {
          en: 'How do Angular Signals improve rendering performance compared to legacy Zone.js dirty checking?',
          bn: 'পুরোনো Zone.js ডার্টি-চেকিংয়ের তুলনায় Angular Signals কীভাবে রেন্ডারিং গতি বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'Signals track exact dependencies at the consumer level, enabling fine-grained targeted DOM updates without traversing and dirty-checking the entire application component tree on every event',
            bn: 'সিগন্যালস নিখুঁতভাবে ডিপেন্ডেন্সি মনে রাখে, যার ফলে প্রতি ইভেন্টে পুরো অ্যাপের সব উপাদান না ঘেঁটে কেবল নির্দিষ্ট ডম নোডটি সাথে সাথে আপডেট করা সম্ভব হয়'
          },
          {
            en: 'Signals disable all CSS styles in the application',
            bn: 'সিগন্যালস অ্যাপ্লিকেশনের সব সিএসএস স্টাইল বন্ধ করে দেয়'
          },
          {
            en: 'Signals force the browser to run on multiple computer monitors',
            bn: 'সিগন্যালস ব্রাউজারকে একাধিক মনিটরে চলতে বাধ্য করে'
          },
          {
            en: 'Signals replace TypeScript with Python in the browser',
            bn: 'সিগন্যালস ব্রাউজারে টাইপস্ক্রিপ্ট সরিয়ে পাইথন চালু করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Signals know exactly which template nodes depend on each state change.',
          bn: 'সিগন্যাল জানে ঠিক কোন টেমপ্লেট নোডটি ডাটার ওপর নির্ভরশীল।'
        },
        explanation: {
          en: 'Zone.js monkey-patches browser APIs and notifies Angular to inspect the entire component tree from top to bottom. Signals create a dependency graph, updating only affected views directly.',
          bn: 'Zone.js পুরো অ্যাপ্লিকেশন ওপর থেকে নিচ পর্যন্ত চেক করত যা ধীরগতির ছিল। সিগন্যালস সরাসরি নির্দিষ্ট উপাদান চিনে আপডেট করে সময় ও মেমোরি বাঁচায়।'
        }
      },
      {
        id: 'q-signal-inputs-readonly-contract',
        kind: 'mcq',
        topic: 'modern signal inputs immutability contract',
        question: {
          en: 'Can a child component directly write to a signal input: "this.title.set(\'New Title\')"?',
          bn: 'কোনো চাইল্ড কম্পোনেন্ট কি সরাসরি সিগন্যাল ইনপুটে লিখতে পারে: "this.title.set(\'New Title\')"?',
        },
        options: [
          {
            en: 'No; signal inputs created with "input()" are strictly read-only signals (InputSignal<T>) and do not provide .set() or .update() methods; use model() for two-way bindings',
            bn: 'না; "input()" দিয়ে তৈরি সিগন্যাল সম্পূর্ণ রিড-অনলি (InputSignal<T>) এবং এতে .set() বা .update() মেথড থাকে না; দ্বি-মুখী বাইন্ডিংয়ে model() ব্যবহার করতে হয়'
          },
          {
            en: 'Yes; any component can overwrite any signal at any time',
            bn: 'হ্যাঁ; যেকোনো উপাদান যেকোনো সময় যেকোনো সিগন্যালে মান লিখতে পারে'
          },
          {
            en: 'Yes, but only if the component is written in JavaScript rather than TypeScript',
            bn: 'হ্যাঁ, তবে উপাদানটি টাইপস্ক্রিপ্টের বদলে জাভাস্ক্রিপ্টে লেখা হলেই কেবল সম্ভব'
          },
          {
            en: 'No, because input() only accepts boolean true or false',
            bn: 'না, কারণ input() কেবল সত্য বা মিথ্যা মান গ্রহণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'input() returns an InputSignal which enforces read-only one-way data flow.',
          bn: 'input() একমুখী ডাটা প্রবাহ নিশ্চিত করতে রিড-অনলি সিগন্যাল তৈরি করে।'
        },
        explanation: {
          en: 'Angular signal inputs enforce one-way data flow. input() returns an InputSignal<T>, which lacks write methods. To allow two-way parent-child synchronization, use model().',
          bn: 'একমুখী ডাটা প্রবাহের নিয়ম রক্ষার জন্য input() দিয়ে বানানো সিগন্যালে মান পরিবর্তন করার মেথড থাকে না। উভয়মুখী পরিবর্তনের প্রয়োজন হলে model() ব্যবহার করতে হয়।'
        }
      },
      {
        id: 'q-effect-cleanup-callback',
        kind: 'mcq',
        topic: 'handling resource cleanup in effects with onCleanup',
        question: {
          en: 'How can an Angular "effect()" clean up timers or WebSockets before re-running when a dependency changes?',
          bn: 'সিগন্যাল পাল্টালে effect() পুনরায় চলার পূর্বে কীভাবে টাইমার বা ওয়েবসকেট বন্ধ করতে পারে?'
        },
        options: [
          {
            en: 'Accept the "onCleanup" parameter in the effect callback: "effect((onCleanup) => { const timer = setInterval(...); onCleanup(() => clearInterval(timer)); })"',
            bn: 'effect কলব্যাকে "onCleanup" প্যারামিটার ব্যবহার করে: "effect((onCleanup) => { const timer = setInterval(...); onCleanup(() => clearInterval(timer)); })"'
          },
          {
            en: 'Throw a runtime JavaScript exception to force garbage collection',
            bn: 'রানটাইমে জাভাস্ক্রিপ্ট এক্সেপশন ছুড়ে মেমোরি পরিষ্কার করতে বাধ্য করে'
          },
          {
            en: 'Effects cannot clean up resources and always leak memory',
            bn: 'effect কোনো রিসোর্স পরিষ্কার করতে পারে না এবং সর্বদা মেমোরি লিক করে'
          },
          {
            en: 'Delete the component template HTML from the browser',
            bn: 'ব্রাউজার থেকে কম্পোনেন্টের এইচটিএমএল টেমপ্লেট মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'onCleanup is passed to the effect function to register teardown logic.',
          bn: 'onCleanup মেথড দিয়ে effect-এর ভেতরে রিসোর্স বন্ধ করার কাজ রেজিস্টার করা হয়।'
        },
        explanation: {
          en: 'Angular passes an onCleanup callback into the effect function. This allows registering teardown logic that runs before the next effect execution or when the effect is destroyed.',
          bn: 'effect-এর ভেতরে onCleanup কলব্যাক থাকে। পরবর্তীবার effect চলার ঠিক আগে বা কম্পোনেন্ট ধ্বংসের সময় এই ক্লিনআপ কোড চলে মেমোরি লিক হওয়া বাঁচায়।'
        }
      },
      {
        id: 'q-untracked-utility-usage',
        kind: 'mcq',
        topic: 'reading signals without creating dependency tracking via untracked()',
        question: {
          en: 'What does the "untracked()" utility accomplish when reading a signal inside a computed or effect?',
          bn: 'কোনো computed বা effect-এর ভেতরে "untracked()" দিয়ে সিগন্যাল পড়লে কী ঘটে?'
        },
        options: [
          {
            en: 'It reads the signal value without registering it as a reactive dependency, preventing the effect or computed from re-running when that specific signal changes',
            bn: 'এটি সিগন্যালের মান পড়ে কিন্তু ডিপেন্ডেন্সি হিসেবে তালিকাভুক্ত করে না, ফলে ওই নির্দিষ্ট সিগন্যাল পাল্টালেও effect বা computed পুনরায় রান হয় না'
          },
          {
            en: 'It hides the signal value from the user browser window',
            bn: 'এটি ব্যবহারকারীর ব্রাউজার উইন্ডো থেকে সিগন্যালের মান লুকিয়ে ফেলে'
          },
          {
            en: 'It permanently disables the internet connection',
            bn: 'এটি কম্পিউটারের ইন্টারনেট সংযোগ স্থায়ীভাবে বিচ্ছিন্ন করে দেয়'
          },
          {
            en: 'untracked() resets the signal value back to 0',
            bn: 'untracked() সিগন্যালের মান রিসেট করে ০ তে ফিরিয়ে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'untracked() bypasses dependency tracking for the enclosed signal reads.',
          bn: 'untracked() কোনো সিগন্যালকে ডিপেন্ডেন্সি ট্র্যাকিং থেকে অব্যাহতি দেয়।'
        },
        explanation: {
          en: 'Sometimes an effect needs to log or inspect a signal without re-executing whenever that signal changes. untracked(() => signal()) reads the value without establishing a reactive dependency.',
          bn: 'কখনো কখনো কোনো সিগন্যালের মান প্রয়োজন হয় কিন্তু তার পরিবর্তনের জন্য পুরো effect আবার চালানোর দরকার থাকে না। untracked() দিয়ে পড়লে সেই অপ্রয়োজনীয় রেন্ডার এড়ানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-blueprint-rooms',
    title: {
      en: 'Standalone Components & Modern Control Flow — @if, @for & @switch',
      bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্টস ও আধুনিক কন্ট্রোল ফ্লো — @if, @for ও @switch'
    }
  }
};
