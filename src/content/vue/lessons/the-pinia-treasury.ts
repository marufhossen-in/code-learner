import type { Lesson } from '../../../lib/types';

export const piniaTreasuryLesson: Lesson = {
  slug: 'the-pinia-treasury',
  tech: 'vue',
  title: {
    en: 'Pinia State Management — Stores, Getters, Actions & Plugins',
    bn: 'Pinia স্টেট ম্যানেজমেন্ট — স্টোরস, গেটার্স, অ্যাকশনস ও প্লাগইনস'
  },
  summary: {
    en: 'Pinia is the official, type-safe state management store for Vue applications. In this lesson, you will master Pinia store architecture comparing Options and Setup stores, destructure reactive properties safely using storeToRefs, handle asynchronous actions, mutate state in batches with $patch, and implement automated persistence plugins.',
    bn: 'Pinia হলো Vue অ্যাপ্লিকেশনের আনুষ্ঠানিক ও টাইপ-সেফ কেন্দ্রীয় স্টেট ম্যানেজমেন্ট লাইব্রেরি। এই পাঠে আপনি অপশন ও সেটআপ স্টোরের গঠন, storeToRefs দিয়ে রিঅ্যাক্টিভ মান ডিস্ট্রাকচার করার কৌশল, অ্যাসিনক্রোনাস অ্যাকশন, $patch দিয়ে একযোগে একাধিক স্টেট পরিবর্তন এবং স্বয়ংক্রিয় পারসিস্টেন্স প্লাগইন তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'pinia-architecture',
      text: {
        en: 'The Pinia Centralized State Management Architecture',
        bn: 'Pinia সেন্ট্রালাইজড স্টেট ম্যানেজমেন্ট আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your Vue application grows beyond isolated components, managing shared state across distant views requires a dedicated store. Pinia serves as the official state management solution for Vue 3, replacing the legacy Vuex library. Pinia eliminates cumbersome mutations, offers complete TypeScript type safety without boilerplate, and supports modular architecture out of the box.',
        bn: 'অ্যাপ্লিকেশন বড় হওয়ার সাথে সাথে বিভিন্ন দূরবর্তী কম্পোনেন্টের মাঝে ডাটা শেয়ার করতে একটি কেন্দ্রীয় স্টোর প্রয়োজন হয়। Pinia হলো Vue ৩-এর অফিশিয়াল স্টেট ম্যানেজমেন্ট সমাধান, যা পুরোনো Vuex লাইব্রেরির স্থলাভিষিক্ত হয়েছে। Pinia অপ্রয়োজনীয় মিউটেশনের ঝামেলা দূর করেছে, বাড়তি কোড ছাড়াই চমৎকার টাইপ সেফটি দেয় এবং মডিউলার আর্কিটেকচার সমর্থন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'defineStore()',
          def: {
            en: 'The core Pinia function used to declare and configure a modular state store with state, getters, and actions.',
            bn: 'Pinia-র প্রধান ফাংশন যা দিয়ে স্টেট, গেটার এবং অ্যাকশন সহ একটি মডিউলার ডাটা স্টোর তৈরি করা হয়।'
          }
        },
        {
          term: 'storeToRefs()',
          def: {
            en: 'A helper utility that converts store state and getters into individual refs while preserving full reactivity during destructuring.',
            bn: 'একটি সহায়ক ইউটিলিটি যা ডিস্ট্রাকচারের সময় স্টোরের স্টেট ও গেটারগুলোকে রিঅ্যাক্টিভ রেফ হিসেবে বজায় রাখে।'
          }
        },
        {
          term: '$patch()',
          def: {
            en: 'A store method applying multiple simultaneous state changes in a single batched operation.',
            bn: 'স্টোরের একটি পদ্ধতি যা একাধিক স্টেট পরিবর্তনকে একক ব্যাচ অপারেশনে দ্রুত কার্যকর করে।'
          }
        },
        {
          term: 'Setup Store',
          def: {
            en: 'A store authoring style using Composition API syntax with ref(), computed(), and plain functions inside defineStore.',
            bn: 'একটি স্টোর লেখার স্টাইল যেখানে defineStore-এর ভেতর কম্পোজিশন এপিআই সিনট্যাক্স (ref, computed ও ফাংশন) ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'options-vs-setup-matrix',
      text: {
        en: 'Options Store versus Setup Store Comparison Matrix',
        bn: 'অপশন স্টোর বনাম সেটআপ স্টোর তুলনা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Concept', bn: 'আর্কিটেকচারাল ধারণা' },
        { en: 'Options Store Syntax', bn: 'Options স্টোর সিনট্যাক্স' },
        { en: 'Setup Store Syntax (Recommended)', bn: 'Setup স্টোর সিনট্যাক্স (পছন্দনীয়)' }
      ],
      rows: [
        [
          { en: 'State declaration', bn: 'স্টেট ঘোষণা' },
          { en: 'state: () => ({ items: [], count: 0 })', bn: 'state: () => ({ items: [], count: 0 })' },
          { en: 'const items = ref([]); const count = ref(0);', bn: 'const items = ref([]); const count = ref(0);' }
        ],
        [
          { en: 'Getters (derived state)', bn: 'গেটার্স (হিসাবকৃত স্টেট)' },
          { en: 'getters: { doubleCount: (state) => state.count * 2 }', bn: 'getters: { doubleCount: (state) => state.count * 2 }' },
          { en: 'const doubleCount = computed(() => count.value * 2);', bn: 'const doubleCount = computed(() => count.value * 2);' }
        ],
        [
          { en: 'Actions (methods)', bn: 'অ্যাকশনস (মেথড)' },
          { en: 'actions: { increment() { this.count++; } }', bn: 'actions: { increment() { this.count++; } }' },
          { en: 'function increment() { count.value++; }', bn: 'function increment() { count.value++; }' }
        ],
        [
          { en: 'TypeScript Type Inference', bn: 'টাইপস্ক্রিপ্ট টাইপ অনুমান' },
          { en: 'Good, but requires typing this context explicitly', bn: 'ভালো, তবে this কনটেক্সটের টাইপ নির্ধারণ প্রয়োজন হয়' },
          { en: 'Flawless native inference without special boilerplate', bn: 'কোনো বাড়তি কোড ছাড়াই চমৎকার স্বাভাবিক টাইপ সেফটি' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'pinia-simulation-code',
      text: {
        en: 'Working Pinia Store Simulation with Batch Patching',
        bn: 'ব্যাচ প্যাচিং সহ কার্যকরী Pinia স্টোর সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Pinia Store Engine, Actions and $patch batching
class MockPiniaStore {
  constructor(id, setupFn) {
    this.$id = id;
    this.state = {};
    this.subscribers = [];
    
    // Execute setup function to build reactive store state
    const exposed = setupFn();
    Object.assign(this, exposed);
  }

  // Simulates Pinia $patch: batch updates multiple state properties
  $patch(partialStateOrFn) {
    if (typeof partialStateOrFn === 'function') {
      partialStateOrFn(this.state);
    } else {
      Object.assign(this.state, partialStateOrFn);
    }
    this.notifySubscribers();
  }

  // Simulates Pinia $subscribe: listens for state mutations
  $subscribe(callback) {
    this.subscribers.push(callback);
  }

  notifySubscribers() {
    for (const sub of this.subscribers) {
      sub({ storeId: this.$id }, this.state);
    }
  }
}

// Instantiate Shopping Cart Store
const cartStore = new MockPiniaStore('cart', () => {
  const storeState = { itemCount: 0, totalPrice: 0 };
  
  return {
    state: storeState,
    addItem(price) {
      storeState.itemCount += 1;
      storeState.totalPrice += price;
    }
  };
});

let mutationEventCount = 0;
cartStore.$subscribe(() => {
  mutationEventCount += 1;
});

// 1. Add item with price 45
cartStore.addItem(45);

// 2. Batch patch both discount and itemCount in a single notification
cartStore.$patch({
  itemCount: 5,
  totalPrice: 180
});

console.log('Final item count in cart store:', cartStore.state.itemCount);
// -> Final item count in cart store: 5
console.log('Final total price in cart store:', cartStore.state.totalPrice);
// -> Final total price in cart store: 180
console.log('Total batched subscriber notifications:', mutationEventCount);
// -> Total batched subscriber notifications: 1`,
      caption: {
        en: 'Cart store adds item then batch patches count to 5 and price to 180 in 1 notification',
        bn: 'কার্ট স্টোর আইটেম যোগ করে ১ টি নোটিফিকেশনে কাউন্ট ৫ এবং দাম ১৮০ এর ব্যাচ প্যাচ করছে'
      }
    },
    {
      type: 'heading',
      id: 'pinia-discipline-rules',
      text: {
        en: 'Store Architecture Best Practices and Destructuring Rules',
        bn: 'স্টোর আর্কিটেকচার সেরা অনুশীলন ও ডিস্ট্রাকচারিং নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When consuming Pinia stores inside Vue components, you must never destructure state or getters directly from the store instance. Direct destructuring strips away the underlying Proxy reactivity, turning variables into non-reactive values. Always wrap the store in storeToRefs() when destructuring state and getters.',
        bn: 'Vue কম্পোনেন্টে Pinia স্টোর ব্যবহারের সময় কখনোই স্টোর থেকে সরাসরি স্টেট বা গেটার ডিস্ট্রাকচার করবেন না। সরাসরি ডিস্ট্রাকচার করলে প্রক্সি বিচ্ছিন্ন হয়ে রিঅ্যাক্টিভিটি নষ্ট হয়ে যায়। স্টেট ও গেটার ডিস্ট্রাকচার করতে সর্বদা storeToRefs() ব্যবহার করুন, তবে অ্যাকশনগুলো সাধারণ ফাংশন হওয়ায় সরাসরি বের করা যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Destructure with storeToRefs(): Use const { count } = storeToRefs(useCounterStore()) to keep reactivity alive.',
          bn: '১. storeToRefs() ব্যবহার: রিঅ্যাক্টিভিটি বাঁচাতে const { count } = storeToRefs(store) এভাবে ডিস্ট্রাকচার করুন।'
        },
        {
          en: '2. Direct Action Destructuring: Actions are standard functions and can be destructured directly: const { increment } = store.',
          bn: '২. অ্যাকশন সরাসরি ডিস্ট্রাকচার: অ্যাকশন সাধারণ ফাংশন হওয়ায় কোনো হেল্পার ছাড়াই সরাসরি ডিস্ট্রাকচার করা যায়।'
        },
        {
          en: '3. Prefer Setup Stores: Setup stores match standard <script setup> syntax and provide superior TypeScript inference.',
          bn: '৩. সেটআপ স্টোর প্রাধান্য দিন: সেটআপ স্টোর কম্পোজিশন এপিআইয়ের মতো এবং নিখুঁত টাইপস্ক্রিপ্ট সুবিধা দেয়।'
        },
        {
          en: '4. Batch with $patch: When modifying several state fields simultaneously, use $patch to trigger a single reactive update.',
          bn: '৪. $patch দিয়ে ব্যাচিং: একসাথে একাধিক স্টেট পরিবর্তন করতে $patch ব্যবহার করুন যাতে অহেতুক বাড়তি রেন্ডার না হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-pin-ex1',
      kind: 'mcq',
      topic: 'storeToRefs reactivity preservation when destructuring',
      question: {
        en: 'Why does writing "const { count } = useCounterStore();" break Vue reactivity in the consuming component template?',
        bn: 'কম্পোনেন্টে "const { count } = useCounterStore();" এভাবে লিখলে কেন টেমপ্লেটে Vue রিঅ্যাক্টিভিটি নষ্ট হয়ে যায়?'
      },
      options: [
        {
          en: 'Direct ES6 destructuring extracts the raw primitive value from the reactive Proxy object; to maintain reactive tracking, you must use the "storeToRefs(store)" utility',
          bn: 'সরাসরি ডিস্ট্রাকচার করার ফলে রিঅ্যাক্টিভ প্রক্সি অবজেক্ট থেকে মানটি বিচ্ছিন্ন হয়ে সাধারণ মানে পরিণত হয়; রিঅ্যাক্টিভিটি বজায় রাখতে "storeToRefs(store)" ব্যবহার আবশ্যক'
        },
        {
          en: 'Because Pinia only allows numbers between 0 and 10',
          bn: 'কারণ Pinia কেবল ০ থেকে ১০ পর্যন্ত সংখ্যা ব্যবহারের অনুমতি দেয়'
        },
        {
          en: 'Destructuring triggers an immediate database wipe',
          bn: 'ডিস্ট্রাকচার করলে ডাটাবেজ সম্পূর্ণ মুছে যায়'
        },
        {
          en: 'The compiler translates count into a CSS color string',
          bn: 'কমপাইলার count-কে একটি সিএসএস রঙের নামে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'storeToRefs converts store state properties into individual reactive refs.',
        bn: 'storeToRefs স্টোরের স্টেটগুলোকে আলাদা আলাদা রিঅ্যাক্টিভ রেফে রূপান্তর করে।'
      },
      explanation: {
        en: 'A Pinia store is a reactive object. Destructuring it extracts primitives by value, breaking the getter/setter proxy chain. storeToRefs() creates refs for every state property to preserve reactivity.',
        bn: 'Pinia স্টোর একটি রিঅ্যাক্টিভ অবজেক্ট। ডিস্ট্রাকচার করলে সরাসরি স্ট্যাটিক ভ্যালু কপি হয়, ফলে পরবর্তীতে স্টোর আপডেট হলেও টেমপ্লেট তা ধরতে পারে না। storeToRefs() এটি সমাধান করে।'
      }
    },
    {
      id: 'vu-pin-ex2',
      kind: 'mcq',
      topic: 'differences between pinia and legacy vuex',
      question: {
        en: 'What architectural complexity was completely eliminated in Pinia compared to legacy Vuex 3 and 4?',
        bn: 'পুরোনো Vuex ৩ ও ৪ এর তুলনায় Pinia-তে কোন জটিল আর্কিটেকচারাল অংশটি পুরোপুরি দূর করে দেওয়া হয়েছে?'
      },
      options: [
        {
          en: 'Mutations were eliminated: state can now be modified directly or within actions (which support both synchronous and asynchronous logic)',
          bn: 'মিউটেশন বাদ দেওয়া হয়েছে: এখন সরাসরি বা অ্যাকশনের ভেতর স্টেট পরিবর্তন করা যায় (যা সিনক্রোনাস ও অ্যাসিনক্রোনাস উভয়ই সমর্থন করে)'
        },
        {
          en: 'HTML support was removed from the framework',
          bn: 'ফ্রেমওয়ার্ক থেকে এইচটিএমএল সমর্থন বাদ দেওয়া হয়েছে'
        },
        {
          en: 'Pinia requires all data to be stored on physical floppy disks',
          bn: 'Pinia-তে সব তথ্য ফ্লপি ডিস্কে সংরক্ষণ করতে হয়'
        },
        {
          en: 'Pinia can only be run inside terminal command prompts',
          bn: 'Pinia কেবল টার্মিনাল কমান্ড প্রম্পটেই চালানো যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pinia removed mutations, unifying state updates into direct mutations or actions.',
        bn: 'Pinia বাড়তি মিউটেশন স্তর বাদ দিয়ে কোড অনেক সহজ ও পরিষ্কার করেছে।'
      },
      explanation: {
        en: 'In Vuex, state could only be altered via synchronous mutations, requiring separate actions for async code. Pinia removed mutations entirely; actions handle both sync and async state changes.',
        bn: 'Vuex-এ মিউটেশন ও অ্যাকশন আলাদা করতে হতো যা কোড জটিল করত। Pinia-তে মিউটেশন উঠিয়ে দেওয়ায় অ্যাকশনের ভেতরেই সিনক্রোনাস ও অ্যাসিনক্রোনাস কাজ সরাসরি করা সম্ভব।'
      }
    },
    {
      id: 'vu-pin-ex3',
      kind: 'mcq',
      topic: 'batching state updates with dollar patch',
      question: {
        en: 'What performance advantage does "$patch()" provide when updating multiple state properties simultaneously in Pinia?',
        bn: 'Pinia-তে একসাথে একাধিক স্টেট পরিবর্তন করার সময় "$patch()" কোন পারফরম্যান্স সুবিধা দেয়?'
      },
      options: [
        {
          en: 'It groups all state changes into a single batched patch, triggering store subscriptions and reactive component watchers only 1 time instead of once per property modification',
          bn: 'এটি সব স্টেট পরিবর্তনকে একটি একক ব্যাচে রূপান্তর করে, ফলে প্রতি ফিল্ডের বদলে মাত্র ১ বার সাবস্ক্রিপশন ও ওয়াচার সক্রিয় হয়'
        },
        {
          en: 'It doubles the computer graphics card clock frequency',
          bn: 'এটি কম্পিউটারের গ্রাফিক্স কার্ডের স্পিড দ্বিগুণ করে দেয়'
        },
        {
          en: 'It automatically minifies all CSS files in the project',
          bn: 'এটি প্রজেক্টের সব সিএসএস ফাইল নিজে থেকে সংকুচিত করে'
        },
        {
          en: 'The $patch method converts state objects into XML documents',
          bn: '$patch মেথড স্টেট অবজেক্টকে এক্সএমএল ফাইলে পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: '$patch batches updates so subscribers fire once rather than repeatedly.',
        bn: '$patch একাধিক পরিবর্তনকে একসাথে গুটিয়ে মাত্র একবার নোটিফিকেশন পাঠায়।'
      },
      explanation: {
        en: 'Mutating several state properties individually triggers subscriptions on each change. $patch() bundles changes together, dispatching a single notification for improved efficiency.',
        bn: 'আলাদা আলাদা স্টেট পরিবর্তন করলে প্রতিবার সাবস্ক্রাইবাররা কল পায়। $patch ব্যবহার করলে সব ডাটা একসাথে আপডেট হয়ে মাত্র একবার ইভেন্ট ট্রিগার করে।'
      }
    },
    {
      id: 'vu-pin-ex4',
      kind: 'mcq',
      topic: 'ssr safe state scoping in pinia',
      question: {
        en: 'Why is Pinia considered architecturally safe for Server-Side Rendering (SSR) compared to creating a global reactive ref at the file module scope?',
        bn: 'ফাইল মডিউলে গ্লোবাল রিঅ্যাক্টিভ রেফ রাখার তুলনায় Server-Side Rendering (SSR)-এর ক্ষেত্রে Pinia কেন আর্কিটেকচারালি সম্পূর্ণ নিরাপদ?'
      },
      options: [
        {
          en: 'A global module-scoped ref is shared across all incoming server requests on Node.js, causing critical cross-request data leaks; Pinia scopes stores to each individual application instance created per request',
          bn: 'মডিউলে গ্লোবাল রেফ রাখলে Node.js-এ সব ব্যবহারকারীর রিকোয়েস্ট একই স্টেট শেয়ার করে মারাত্মক ডাটা লিক ঘটায়; কিন্তু Pinia প্রতিটি রিকোয়েস্টের অ্যাপ্লিকেশনের জন্য আলাদা স্টোর তৈরি করে'
        },
        {
          en: 'Global refs cause Node.js servers to catch fire physically',
          bn: 'গ্লোবাল রেফ ব্যবহারের ফলে Node.js সার্ভারে সত্যি সত্যি আগুন লেগে যায়'
        },
        {
          en: 'Pinia disables server rendering and forces client-only mode',
          bn: 'Pinia সার্ভার রেন্ডারিং বন্ধ করে কেবল ক্লায়েন্ট মোডে চলতে বাধ্য করে'
        },
        {
          en: 'Module scope is illegal syntax in ECMAScript standards',
          bn: 'মডিউল স্কোপ আধুনিক জাভাস্ক্রিপ্ট মানদণ্ডে সম্পূর্ণ অবৈধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pinia scopes state per application instance, avoiding cross-request state pollution in SSR.',
        bn: 'Pinia প্রতিটি সার্ভার রিকোয়েস্টের জন্য পৃথক স্টোর তৈরি করে অন্য ইউজারের ডাটা ফাঁস হওয়া রোধ করে।'
      },
      explanation: {
        en: 'In SSR, module-level singletons leak sensitive state between users because the server process persists. Pinia stores are registered on the Vue app instance, ensuring complete isolation per request.',
        bn: 'সার্ভার-সাইড রেন্ডারিংয়ে গ্লোবাল ভেরিয়েবল থাকলে এক ইউজারের গোপন তথ্য অন্য ইউজারের রিকোয়েস্টে চলে যেতে পারে। Pinia প্রতি রিকোয়েস্টে আলাদা অ্যাপ ইনস্ট্যান্স ব্যবহার করে ডাটা সুরক্ষিত রাখে।'
      }
    }
  ],
  quiz: {
    id: 'the-pinia-treasury-quiz',
    title: {
      en: 'Pinia State Architecture & Plugins Quiz',
      bn: 'Pinia স্টেট আর্কিটেকচার ও প্লাগইনস কুইজ'
    },
    questions: [
      {
        id: 'q-pinia-plugin-persistence-localstorage',
        kind: 'mcq',
        topic: 'pinia plugins for state persistence',
        question: {
          en: 'How do Pinia plugins extend store functionality across an entire Vue application?',
          bn: 'Pinia প্লাগইন কীভাবে পুরো Vue অ্যাপ্লিকেশনের প্রতিটি স্টোরের কার্যক্ষমতা বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'Plugins receive context ({ store }) for every store created via "pinia.use(plugin)", allowing developers to inject custom properties, log mutations, or automatically synchronize state to localStorage',
            bn: 'প্লাগইন "pinia.use(plugin)"-এর মাধ্যমে প্রতিটি নতুন স্টোরের অ্যাক্সেস ({ store }) পায়, ফলে ডেভেলপাররা বাড়তি প্রোপার্টি যোগ করতে, মিউটেশন ট্র্যাক করতে বা লোকাল স্টোরেজে তথ্য সেভ করতে পারে'
          },
          {
            en: 'Pinia plugins rewrite the operating system kernel',
            bn: 'Pinia প্লাগইন অপারেটিং সিস্টেমের কার্নেল বদলে দেয়'
          },
          {
            en: 'Plugins prevent Vue from updating the virtual DOM',
            bn: 'প্লাগইন Vue-কে ভার্চুয়াল ডম আপডেট করা থেকে আটকে দেয়'
          },
          {
            en: 'Pinia does not support any plugin architecture',
            bn: 'Pinia কোনো ধরনের প্লাগইন আর্কিটেকচার সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pinia plugins hook into store creation to add cross-cutting features like persistence.',
          bn: 'Pinia প্লাগইন সব স্টোরে একযোগে লোকালস্টোরেজ সেভ বা লগার যোগ করার সুবিধা দেয়।'
        },
        explanation: {
          en: 'Pinia plugins hook into pinia.use(). They can add custom state, methods, subscribe to actions ($onAction), or persist state using packages like pinia-plugin-persistedstate.',
          bn: 'pinia.use() দিয়ে প্লাগইন যুক্ত করা হয়। এটি সব স্টোরের তথ্য স্বয়ংক্রিয়ভাবে ব্রাউজারের লোকাল স্টোরেজে সংরক্ষণ ও পুনরায় লোড করতে বহুল ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-onaction-interceptor-telemetry',
        kind: 'mcq',
        topic: 'action lifecycle monitoring with store.$onAction()',
        question: {
          en: 'What architectural telemetry feature does the "store.$onAction()" method provide?',
          bn: 'Pinia-তে "store.$onAction()" মেথড কোন ধরনের আর্কিটেকচারাল টেলিমেট্রি সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It provides hooks to observe action invocations, inspect arguments, track execution duration with after(), and capture uncaught asynchronous errors with onError()',
            bn: 'এটি অ্যাকশন চালনার খবর রাখা, আর্গুমেন্ট দেখা, after() দিয়ে কার্যকাল পরিমাপ করা এবং onError() দিয়ে অ্যাসিনক্রোনাস এরর শনাক্ত করার হুক প্রদান করে'
          },
          {
            en: 'It blocks actions from executing if the internet speed drops below 5 Mbps',
            bn: 'ইন্টারনেট স্পিড কম হলে এটি অ্যাকশন চলতে বাধা দেয়'
          },
          {
            en: 'It prints all store actions onto physical paper via a network printer',
            bn: 'এটি নেটওয়ার্ক প্রিন্টারের মাধ্যমে সব অ্যাকশন কাগজে প্রিন্ট করে ফেলে'
          },
          {
            en: '$onAction only works with synchronous actions, failing on async tasks',
            bn: '$onAction কেবল সিনক্রোনাস অ্যাকশনে কাজ করে এবং অ্যাসিনক্রোনাসে ব্যর্থ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: '$onAction monitors action lifecycles including before, after, and onError states.',
          bn: '$onAction অ্যাকশন শুরুর আগে, শেষ হলে এবং এরর হলে নিখুঁতভাবে নজরদারি করে।'
        },
        explanation: {
          en: 'store.$onAction() allows developers to build telemetry and error-tracking systems. Callbacks receive after() to measure completion time and onError() to capture failed API calls.',
          bn: '$onAction দিয়ে এন্টারপ্রাইজ সিস্টেমে মনিটরিং তৈরি করা হয়। এরর ধরা পড়লে বা কাজ সফল হলে ডেভেলপাররা সহজেই লগ সংরক্ষণ করতে পারেন।'
        }
      },
      {
        id: 'q-store-composition-calling-other-stores',
        kind: 'mcq',
        topic: 'composing multiple stores within actions or getters',
        question: {
          en: 'How can one Pinia store cleanly utilize state or actions from another Pinia store (e.g., useCartStore needing user data from useUserStore)?',
          bn: 'একটি Pinia স্টোর কীভাবে অন্য একটি স্টোরের ডাটা বা অ্যাকশন ব্যবহার করতে পারে (যেমন কার্ট স্টোরের ভেতর ইউজার স্টোরের ডাটা প্রয়োজন হলে)?'
        },
        options: [
          {
            en: 'Simply invoke the other store directly inside the getter or action function: "const userStore = useUserStore(); if (userStore.isLoggedIn) { ... }"',
            bn: 'গেটার বা অ্যাকশন ফাংশনের ভেতর সরাসরি অন্য স্টোরকে কল করে: "const userStore = useUserStore(); if (userStore.isLoggedIn) { ... }"'
          },
          {
            en: 'Merge all JavaScript files into a single 50,000 line script',
            bn: 'সব জাভাস্ক্রিপ্ট ফাইল একটিমাত্র ৫০,০০০ লাইনের ফাইলে রূপান্তর করে'
          },
          {
            en: 'Cross-store communication is prohibited by the Pinia runtime',
            bn: 'Pinia রানটাইমে দুটি ভিন্ন স্টোরের মাঝে যোগাযোগ পুরোপুরি নিষিদ্ধ'
          },
          {
            en: 'Pass store data using window.postMessage() WebSocket frames',
            bn: 'window.postMessage() ওয়েবসকেট ফ্রেমের মাধ্যমে ডাটা পাঠিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stores can be imported and instantiated inside other stores without circular deadlock.',
          bn: 'একটি স্টোরের ভেতর সরাসরি অন্য স্টোরকে ইমপোর্ট করে কল করা যায়।'
        },
        explanation: {
          en: 'Unlike Vuex modules which required verbose cross-namespace dispatching, Pinia allows stores to naturally call each other directly inside actions or getters without circular dependency deadlocks.',
          bn: 'Vuex-এর মতো জটিল নেমস্পেসের ঝামেলা Pinia-তে নেই। অ্যাকশনের ভেতরেই অন্য স্টোরকে ডেকে অনায়াসে ব্যবহারকারীর তথ্য বা সেটিংস অ্যাক্সেস করা যায়।'
        }
      },
      {
        id: 'q-state-resetting-mechanics',
        kind: 'mcq',
        topic: 'resetting store state in options vs setup stores',
        question: {
          en: 'How does store state resetting differ between Options Stores and Setup Stores in Pinia?',
          bn: 'Pinia-তে অপশন স্টোর এবং সেটআপ স্টোরের মাঝে স্টেট রিসেট করার নিয়মে কী পার্থক্য রয়েছে?'
        },
        options: [
          {
            en: 'Options Stores provide a built-in "store.$reset()" method that restores the initial state; Setup Stores do not have an automatic $reset() and require authoring an explicit reset function',
            bn: 'Options স্টোরে একটি বিল্ট-ইন "store.$reset()" মেথড থাকে যা প্রাথমিক স্টেটে ফিরিয়ে নেয়; কিন্তু Setup স্টোরে কোনো স্বয়ংক্রিয় $reset() থাকে না এবং ডেভেলপারকে নিজে রিসেট ফাংশন লিখতে হয়'
          },
          {
            en: 'Setup stores reset automatically every 60 seconds',
            bn: 'সেটআপ স্টোর প্রতি ৬০ সেকেন্ড পর পর নিজে নিজেই রিসেট হয়ে যায়'
          },
          {
            en: 'Options stores cannot be modified once created',
            bn: 'অপশন স্টোর তৈরি করার পর আর কখনোই কোনো মান বদলানো যায় না'
          },
          {
            en: 'Store resetting requires deleting the web browser cache',
            bn: 'স্টোর রিসেট করতে ব্রাউজারের ক্যাশ মুছে ফেলতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Options stores have built-in $reset(); Setup stores need custom reset logic or a plugin.',
          bn: 'অপশন স্টোরে $reset() থাকে, কিন্তু সেটআপ স্টোরে কাস্টম রিসেট ফাংশন বানাতে হয়।'
        },
        explanation: {
          en: 'In Options stores, $reset() re-evaluates the state function. In Setup stores, because state is defined with refs in a closure, $reset() is not generated automatically unless a custom plugin is used.',
          bn: 'অপশন স্টোরে state ফাংশন পুনরায় চালিয়ে $reset() কাজ করে। কিন্তু সেটআপ স্টোরে ক্লোজারের ভেতর ref থাকায় নিজে ফাংশন লিখে সব রেফকে আগের মানে ফেরত নিতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-transition-masquerade',
    title: {
      en: 'Transitions, Teleport & Suspense — Built-in Dynamic Components',
      bn: 'Transitions, Teleport ও Suspense — বিল্ট-ইন ডায়নামিক কম্পোনেন্টস'
    }
  }
};
