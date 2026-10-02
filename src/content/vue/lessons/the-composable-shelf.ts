import type { Lesson } from '../../../lib/types';

export const composableShelfLesson: Lesson = {
  slug: 'the-composable-shelf',
  tech: 'vue',
  title: {
    en: 'Custom Composables — Composition API, Lifecycle Hooks & Reusability',
    bn: 'কাস্টম কম্পোজেবলস — কম্পোজিশন এপিআই, লাইফসাইকেল হুক ও পুনর্ব্যবহারযোগ্যতা'
  },
  summary: {
    en: 'Vue 3 Composables leverage the Composition API to encapsulate and share stateful business logic across components cleanly. In this lesson, you will master the use... naming pattern, manage lifecycle hooks like onMounted and onUnmounted with automatic teardown cleanup, prevent mixin collisions, and build production-ready reactive composables.',
    bn: 'Vue ৩ কম্পোজেবলস কম্পোজিশন এপিআই ব্যবহার করে কম্পোনেন্টগুলোর মাঝে স্টেটফুল বিজনেস লজিক সুন্দরভাবে শেয়ার করতে সাহায্য করে। এই পাঠে আপনি use... নামকরণ রীতি, onMounted ও onUnmounted দিয়ে লাইফসাইকেল এবং রিসোর্স ক্লিনআপ পরিচালনা, মিক্সিনের ত্রুটি পরিহার এবং প্রোডাকশন মানের রিঅ্যাক্টিভ কম্পোজেবল তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'composable-architecture',
      text: {
        en: 'The Custom Composable Architecture and Mental Model',
        bn: 'কাস্টম কম্পোজেবল আর্কিটেকচার ও মূল ধারণা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'In complex applications, multiple components frequently need to share stateful business logic, such as data fetching, mouse tracking, or window resizing. In Vue 2, developers relied on Mixins, which caused namespace conflicts and obscure state origins. In Vue 3, Composables solve this by encapsulating reactive refs and lifecycle hooks inside clean functions.',
        bn: 'জটিল অ্যাপ্লিকেশনে বিভিন্ন কম্পোনেন্টে ডাটা ফেচিং, মাউস ট্র্যাকিং বা উইন্ডো রিসাইজ করার মতো একই লজিক বারবার প্রয়োজন হয়। Vue ২-এ মিক্সিন ব্যবহার করা হতো, যা নামের সংঘাত ও উৎস খুঁজে না পাওয়ার সমস্যা তৈরি করত। Vue ৩-এ কম্পোজেবলস সাধারণ ফাংশনের ভেতর রিঅ্যাক্টিভ রেফ ও লাইফসাইকেল হুক আটকে দিয়ে এই সমস্যার নিখুঁত সমাধান দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Composable Function',
          def: {
            en: 'A function that leverages Vue Composition API to encapsulate and reuse stateful logic, named with the "use" prefix.',
            bn: 'একটি ফাংশন যা Vue কম্পোজিশন এপিআই ব্যবহার করে স্টেটফুল লজিক পুনর্ব্যবহার করে এবং যার নাম "use" দিয়ে শুরু হয়।'
          }
        },
        {
          term: 'onMounted()',
          def: {
            en: 'Lifecycle hook invoked after the component has finished its initial rendering and created DOM nodes.',
            bn: 'লাইফসাইকেল হুক যা কম্পোনেন্টের প্রাথমিক রেন্ডারিং শেষ হওয়ার পর এবং ডম নোড তৈরি হলে সক্রিয় হয়।'
          }
        },
        {
          term: 'onUnmounted()',
          def: {
            en: 'Lifecycle hook invoked when a component is destroyed, used to clear intervals and remove listeners.',
            bn: 'লাইফসাইকেল হুক যা কম্পোনেন্ট ধ্বংসের সময় সক্রিয় হয় এবং মেমোরি পরিষ্কার করতে লিসেনার ও টাইমার বন্ধ করে।'
          }
        },
        {
          term: 'Namespace Collision',
          def: {
            en: 'A defect common in legacy Mixins where two mixins overwrite the same property name without warning.',
            bn: 'পুরোনো মিক্সিনের একটি মারাত্মক ত্রুটি যেখানে দুটি মিক্সিন একই নামের প্রোপার্টি একে অপরের ওপর ওভাররাইট করে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'lifecycle-hooks-matrix',
      text: {
        en: 'Composition API Lifecycle Hooks Reference Matrix',
        bn: 'কম্পোজিশন এপিআই লাইফসাইকেল হুক রেফারেন্স ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Lifecycle Hook', bn: 'লাইফসাইকেল হুক' },
        { en: 'Execution Timing', bn: 'কখন কার্যকর হয়' },
        { en: 'Typical Engineering Task', bn: 'সাধারণ ব্যবহার' }
      ],
      rows: [
        [
          { en: 'onMounted()', bn: 'onMounted()' },
          { en: 'DOM elements are attached to document', bn: 'ডম উপাদান ডকুমেন্টে যুক্ত হওয়ার ঠিক পর' },
          { en: 'Fetch initial API data, attach window resize listeners', bn: 'প্রাথমিক এপিআই ডাটা ফেচ করা, উইন্ডো রিসাইজ লিসেনার বসানো' }
        ],
        [
          { en: 'onUpdated()', bn: 'onUpdated()' },
          { en: 'DOM tree re-rendered after reactive change', bn: 'স্টেট পরিবর্তনের পর ডম পুনরায় রেন্ডার হলে' },
          { en: 'Inspect updated DOM dimensions, synchronize animations', bn: 'আপডেট হওয়া ডম পরিমাপ দেখা, অ্যানিমেশন সিঙ্ক করা' }
        ],
        [
          { en: 'onUnmounted()', bn: 'onUnmounted()' },
          { en: 'Component removed and destroyed completely', bn: 'কম্পোনেন্টটি মুছে ফেলে পুরোপুরি ধ্বংস করার পর' },
          { en: 'clearInterval(), removeEventListener(), abort network fetch', bn: 'clearInterval(), ইভেন্ট লিসেনার সরানো, নেটওয়ার্ক ফেচ বাতিল' }
        ],
        [
          { en: 'onErrorCaptured()', bn: 'onErrorCaptured()' },
          { en: 'An unhandled error occurs in any child subtree', bn: 'যেকোনো চাইল্ড কম্পোনেন্টে কোনো আনহ্যান্ডেলড এরর হলে' },
          { en: 'Log error to monitoring service and display error boundary UI', bn: 'মনিটরিং সেবায় এরর পাঠানো এবং ফলব্যাক ইন্টারফেস দেখানো' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'composable-simulation-code',
      text: {
        en: 'Working Composable Simulation with Lifecycle Cleanup',
        bn: 'লাইফসাইকেল ক্লিনআপ সহ কার্যকরী কম্পোজেবল সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue Composable pattern and Lifecycle Management
class MockLifecycleRegistry {
  constructor() {
    this.mountHooks = [];
    this.unmountHooks = [];
  }

  onMounted(fn) {
    this.mountHooks.push(fn);
  }

  onUnmounted(fn) {
    this.unmountHooks.push(fn);
  }

  triggerMount() {
    for (const hook of this.mountHooks) hook();
  }

  triggerUnmount() {
    for (const hook of this.unmountHooks) hook();
  }
}

const registry = new MockLifecycleRegistry();

// Custom Composable: useCounterWithTimer
function useCounterWithTimer(initialCount = 0) {
  let count = initialCount;
  let timerId = null;

  registry.onMounted(() => {
    // Simulates starting an automated interval timer on mount
    timerId = 1001; // Mock interval handle
    count += 10;
  });

  registry.onUnmounted(() => {
    // Teardown: clear interval timer to prevent memory leaks
    if (timerId !== null) {
      timerId = null;
    }
  });

  return {
    getCount: () => count,
    getTimerState: () => timerId !== null
  };
}

// 1. Component invokes composable during setup
const counter = useCounterWithTimer(5);

// 2. Component mounts to DOM
registry.triggerMount();
const mountedCount = counter.getCount();
const timerActive = counter.getTimerState();

// 3. Component unmounts from DOM
registry.triggerUnmount();
const timerDestroyed = !counter.getTimerState();

console.log('Count after onMounted increment:', mountedCount);
// -> Count after onMounted increment: 15
console.log('Timer active after mount:', timerActive);
// -> Timer active after mount: true
console.log('Timer successfully cleaned up on unmount:', timerDestroyed);
// -> Timer successfully cleaned up on unmount: true`,
      caption: {
        en: 'Composable runs mount hook incrementing count to 15, then cleans up timer handle',
        bn: 'কম্পোজেবল মাউন্ট হুকে কাউন্ট ১৫ এ বাড়ায় এবং পরে টাইমার হ্যান্ডল পরিষ্কার করে'
      }
    },
    {
      type: 'heading',
      id: 'composable-design-rules',
      text: {
        en: 'Composable Design Rules and Conventions',
        bn: 'কম্পোজেবল ডিজাইনের সুবর্ণ নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When authoring custom composables, adhere to proven architectural conventions. Always return a plain object containing refs rather than a reactive proxy; this allows consuming components to destructure properties without losing reactivity. Always clean up window event listeners or pending asynchronous tasks inside onUnmounted.',
        bn: 'কাস্টম কম্পোজেবল তৈরির সময় নির্দিষ্ট নিয়ম মেনে চলা জরুরি। সর্বদা রিঅ্যাক্টিভ অবজেক্টের বদলে সাধারণ অবজেক্টের ভেতর ref রিটার্ন করুন; এতে ব্যবহারকারী কম্পোনেন্ট ডিস্ট্রাকচার করলেও রিঅ্যাক্টিভিটি নষ্ট হয় না। এবং ব্রাউজার মেমোরি সুরক্ষিত রাখতে onUnmounted হুকে সব ইভেন্ট লিসেনার ও টাইমার মুছে ফেলা আবশ্যক।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Name with "use" Prefix: Name composable files and functions starting with "use" (e.g., useFetch, useStorage, useWindowScroll).',
          bn: '১. "use" দিয়ে নামকরণ: প্রতিটি কম্পোজেবল ফাইল ও ফাংশনের নাম "use" দিয়ে শুরু করুন (যেমন useFetch, useStorage)।'
        },
        {
          en: '2. Return Plain Object of Refs: Return { count, increment } so callers can destructure properties without severing reactivity.',
          bn: '২. অবজেক্টে ref রিটার্ন: { count, increment } এভাবে সাধারণ অবজেক্ট দিন যাতে ডিস্ট্রাকচার করলেও রিঅ্যাক্টিভিটি অক্ষুণ্ণ থাকে।'
        },
        {
          en: '3. Clean Up Side Effects: Always remove event listeners, abort network requests, and clear intervals inside onUnmounted.',
          bn: '৩. সাইড এফেক্ট পরিষ্কার: onUnmounted হুকে ইভেন্ট লিসেনার সরানো ও টাইমার ক্লিয়ার করার ব্যবস্থা নিশ্চিত করুন।'
        },
        {
          en: '4. Accept Ref or Raw Value: Use toValue() or unref() so your composable can accept either static values or reactive refs as arguments.',
          bn: '৪. নমনীয় প্যারামিটার: toValue() বা unref() ব্যবহার করুন যাতে কম্পোজেবল সাধারণ মান এবং রিঅ্যাক্টিভ রেফ উভয়ই ইনপুট নিতে পারে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-cmp-ex1',
      kind: 'mcq',
      topic: 'composable return value destructuring reactivity preservation',
      question: {
        en: 'Why should a custom composable return a plain JavaScript object containing individual "ref" instances rather than returning a "reactive()" object?',
        bn: 'কাস্টম কম্পোজেবল থেকে "reactive()" অবজেক্টের বদলে আলাদা আলাদা "ref" সহ সাধারণ অবজেক্ট রিটার্ন করা কেন শ্রেয়?'
      },
      options: [
        {
          en: 'Because ES6 object destructuring on a reactive() object severs reactivity, whereas destructuring a plain object of refs preserves the reactive references intact',
          bn: 'কারণ reactive() অবজেক্ট ডিস্ট্রাকচার করলে রিঅ্যাক্টিভিটি নষ্ট হয়ে যায়, কিন্তু আলাদা আলাদা ref সহ অবজেক্ট ডিস্ট্রাকচার করলে প্রতিটি রেফ রিঅ্যাক্টিভ থাকে'
        },
        {
          en: 'Plain objects use 10 times less battery on smartphones',
          bn: 'সাধারণ অবজেক্ট স্মার্টফোনে ১০ গুণ কম ব্যাটারি খরচ করে'
        },
        {
          en: 'The Vue compiler blocks reactive() from being written inside functions',
          bn: 'Vue কমপাইলার ফাংশনের ভেতরে reactive() লিখতে দেয় না'
        },
        {
          en: 'Ref instances cannot be stored inside JavaScript objects',
          bn: 'রেফ ইনস্ট্যান্সগুলোকে জাভাস্ক্রিপ্ট অবজেক্টে সংরক্ষণ করা অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Destructuring a reactive object un-boxes values into plain variables, losing tracking.',
        bn: 'reactive অবজেক্ট ডিস্ট্রাকচার করলে মানগুলো সাধারণ ভেরিয়েবল হয়ে যায় এবং ট্র্যাকিং হারায়।'
      },
      explanation: {
        en: 'When users destructure a reactive() object (const { x, y } = useMouse()), the references are decoupled and reactivity is lost. Returning a plain object of refs preserves reactive tracking.',
        bn: 'reactive() অবজেক্ট ডিস্ট্রাকচার করলে রিঅ্যাক্টিভ সংযোগ ছিঁড়ে যায়। কিন্তু { x: ref(), y: ref() } রিটার্ন করলে ডিস্ট্রাকচার করার পরও x.value এবং y.value ঠিকমতো কাজ করে।'
      }
    },
    {
      id: 'vu-cmp-ex2',
      kind: 'mcq',
      topic: 'preventing memory leaks with onUnmounted teardown',
      question: {
        en: 'What dangerous bug occurs if a composable adds a "window.addEventListener(\'resize\', fn)" inside onMounted but fails to remove it in onUnmounted?',
        bn: 'যদি কোনো কম্পোজেবল onMounted-এ "window.addEventListener(\'resize\', fn)" যোগ করে কিন্তু onUnmounted-এ তা না সরায়, তবে কোন বিপদ ঘটবে?'
      },
      options: [
        {
          en: 'A severe memory leak occurs because the global window object maintains references to the callback and unmounted component scope, preventing garbage collection',
          bn: 'মারাত্মক মেমোরি লিক ঘটে কারণ গ্লোবাল উইন্ডো অবজেক্ট মৃত কম্পোনেন্টের ফাংশনকে ধরে রাখে, যার ফলে গারবেজ কালেক্টর মেমোরি খালি করতে পারে না'
        },
        {
          en: 'The user monitor screen will freeze permanently',
          bn: 'ব্যবহারকারীর মনিটর স্ক্রিন চিরতরে জমে যাবে'
        },
        {
          en: 'The browser automatically deletes the web application cookies',
          bn: 'ব্রাউজার নিজে থেকেই ওয়েব অ্যাপ্লিকেশনের সব কুকি মুছে ফেলবে'
        },
        {
          en: 'The resize event will automatically invert the screen colors',
          bn: 'রিসাইজ ইভেন্ট নিজে থেকেই স্ক্রিনের রঙ উল্টে দেবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Global listeners hold references to dead components, leaking memory over time.',
        bn: 'গ্লোবাল লিসেনার ধ্বংস হওয়া কম্পোনেন্টকে আটকে রেখে মেমোরি লিক তৈরি করে।'
      },
      explanation: {
        en: 'Global event listeners on window or document keep closures alive in memory even after the component is destroyed. Always remove listeners in onUnmounted to allow garbage collection.',
        bn: 'উইন্ডোতে যুক্ত করা লিসেনার কম্পোনেন্ট মুছে গেলেও রমে থেকে যায়। তাই onUnmounted-এ removeEventListener না চালালে বারবার পেজ পরিবর্তনে মেমোরি ফুল হয়ে অ্যাপ ক্র্যাশ করবে।'
      }
    },
    {
      id: 'vu-cmp-ex3',
      kind: 'mcq',
      topic: 'vue composables versus react hooks execution timing',
      question: {
        en: 'How does the execution mental model of Vue 3 Composables differ from React Hooks?',
        bn: 'React Hooks-এর তুলনায় Vue ৩ কম্পোজেবলসের কার্যকর হওয়ার প্রক্রিয়া কীভাবে আলাদা?'
      },
      options: [
        {
          en: 'Vue composables run exactly 1 time during component setup, meaning there are no "rules of hooks" regarding conditional calling, no stale closure pitfalls, and no dependency array management',
          bn: 'Vue কম্পোজেবলস কম্পোনেন্ট সেটআপের সময় কেবল ১ বার চলে, যার ফলে শর্তের ভেতর কল করার কোনো নিষেধাজ্ঞা নেই, স্টেল ক্লোজারের ঝামেলা নেই এবং ডিপেন্ডেন্সি অ্যারে সাজাতে হয় না'
        },
        {
          en: 'Vue composables re-run every millisecond in an infinite background thread',
          bn: 'Vue কম্পোজেবলস প্রতি মিলি-সেকেন্ডে একটি ইনফিনিট ব্যাকগ্রাউন্ড থ্রেডে চলে'
        },
        {
          en: 'React hooks are written in C++ while Vue composables are written in CSS',
          bn: 'React হুক সি++ এ লেখা হয় আর Vue কম্পোজেবলস সিএসএস এ লেখা হয়'
        },
        {
          en: 'Vue composables can only be executed on Linux servers',
          bn: 'Vue কম্পোজেবলস কেবল লিনাক্স সার্ভারেই চালানো সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Vue setup runs once per component instance; React re-runs the entire function on every render.',
        bn: 'Vue সেটআপ প্রতি উপাদানে মাত্র একবার চলে, যেখানে রিঅ্যাক্ট প্রতি রেন্ডারে পুরো ফাংশন পুনরায় চালায়।'
      },
      explanation: {
        en: 'React Hooks re-run on every render, requiring strict rules of hooks and dependency arrays. Vue setup() executes once during initialization; reactivity handles updates fine-grained under the hood.',
        bn: 'রিঅ্যাক্ট হুক প্রতি রেন্ডারে পুনরায় চলায় ডিপেন্ডেন্সি অ্যারের জটিলতা থাকে। Vue-তে সেটআপ কোড কেবল প্রথমবার একবার চলে এবং পরবর্তীতে প্রক্সি নিজে থেকেই সব আপডেট নিয়ন্ত্রণ করে।'
      }
    },
    {
      id: 'vu-cmp-ex4',
      kind: 'mcq',
      topic: 'handling reactive or static arguments with toValue',
      question: {
        en: 'Why is the "toValue()" helper utility recommended when building composables that accept parameters (e.g. useFetch(url))?',
        bn: 'প্যারামিটার গ্রহণকারী কম্পোজেবল তৈরির সময় "toValue()" ইউটিলিটি ব্যবহার করার পরামর্শ কেন দেওয়া হয়?'
      },
      options: [
        {
          en: 'It normalizes values by unwrapping both reactive refs, getters, and plain static primitive values into raw values, making the composable flexible for consumers',
          bn: 'এটি সাধারণ মান, রিঅ্যাক্টিভ রেফ কিংবা গেটার ফাংশন যাই দেওয়া হোক না কেন, তা থেকে মূল মানটি সঠিকভাবে বের করে এনে কম্পোজেবলকে অত্যন্ত নমনীয় করে তোলে'
        },
        {
          en: 'It encrypts URL parameters using AES-256 encryption',
          bn: 'এটি ইউআরএল প্যারামিটারগুলোকে এইএস-২৫৬ দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It forces the browser to make 10 parallel HTTP requests',
          bn: 'এটি ব্রাউজারকে একসাথে ১০টি এইচটিটিপি রিকোয়েস্ট পাঠাতে বাধ্য করে'
        },
        {
          en: 'toValue() deletes all null values from JavaScript memory',
          bn: 'toValue() জাভাস্ক্রিপ্ট মেমোরি থেকে সব নাল মান মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'toValue() extracts the raw value from a static value, a ref, or a getter function.',
        bn: 'toValue() যেকোনো স্ট্যাটিক মান, রেফ বা গেটার থেকে মূল ডাটা বের করে আনে।'
      },
      explanation: {
        en: 'Introduced in Vue 3.3, toValue(source) normalizes ref, getter function, or raw value into its current evaluated value. This allows composables to accept reactive sources or static constants.',
        bn: 'Vue ৩.৩-এ যুক্ত toValue() সাধারণ মান, রেফ বা গেটার যেকোনো ইনপুটকে সাধারণ মানে পরিণত করে। ফলে ডেভেলপাররা যেকোনো ধরনের ডাটা পাঠিয়ে সহজেই কম্পোজেবল ব্যবহার করতে পারেন।'
      }
    }
  ],
  quiz: {
    id: 'the-composable-shelf-quiz',
    title: {
      en: 'Vue.js Composables & Lifecycle Hooks Quiz',
      bn: 'Vue.js কম্পোজেবলস ও লাইফসাইকেল হুকস কুইজ'
    },
    questions: [
      {
        id: 'q-vueuse-library-ecosystem',
        kind: 'mcq',
        topic: 'the VueUse composable collection ecosystem',
        question: {
          en: 'What is "VueUse" in the modern Vue development ecosystem?',
          bn: 'আধুনিক Vue ডেভেলপমেন্ট ইকোসিস্টেমে "VueUse" বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'An essential collection of over 200 battle-tested Composition API utility composables covering browser APIs, sensors, state management, animations, and network protocols',
            bn: '২০০টিরও বেশি পরীক্ষিত কম্পোজিশন এপিআই ইউটিলিটি কম্পোজেবলের এক বিশাল সংগ্রহ যা ব্রাউজার এপিআই, সেন্সর, স্টেট ম্যানেজমেন্ট ও নেটওয়ার্ক নিয়ন্ত্রণ সহজ করে'
          },
          {
            en: 'A proprietary web browser built by the Vue team',
            bn: 'Vue টিমের তৈরি একটি নিজস্ব ওয়েব ব্রাউজার'
          },
          {
            en: 'A tool for writing SQL queries inside Vue templates',
            bn: 'Vue টেমপ্লেটের ভেতর এসকিউএল কোয়েরি লেখার একটি টুল'
          },
          {
            en: 'A computer virus scanner for JavaScript files',
            bn: 'জাভাস্ক্রিপ্ট ফাইলের জন্য একটি কম্পিউটার ভাইরাস স্ক্যানার'
          }
        ],
        answer: 0,
        hint: {
          en: 'VueUse is the community standard collection of Vue composable utilities.',
          bn: 'VueUse হলো Vue কম্পোজেবল ইউটিলিটির সবচেয়ে জনপ্রিয় ওপেন সোর্স লাইব্রেরি।'
        },
        explanation: {
          en: 'VueUse is a wildly popular open-source library maintained by Anthony Fu and community members, providing essential composables like useLocalStorage, useDark, useFetch, and useDebounceFn.',
          bn: 'VueUse একটি অত্যন্ত জনপ্রিয় লাইব্রেরি যাতে দৈনন্দিন কাজের জন্য শত শত তৈরি কম্পোজেবল (যেমন useLocalStorage, useDark) দেওয়া থাকে, ফলে নতুন করে কোড লিখতে হয় না।'
        }
      },
      {
        id: 'q-mixins-vs-composables-drawbacks',
        kind: 'mcq',
        topic: 'architectural drawbacks of legacy Vue 2 Mixins',
        question: {
          en: 'Why did the Vue core team discourage Mixins in Vue 3 in favor of Composables?',
          bn: 'Vue ৩-এ মিক্সিন পরিহার করে কম্পোজেবলস ব্যবহারের পরামর্শ Vue কোর টিম কেন দিয়েছে?'
        },
        options: [
          {
            en: 'Mixins suffered from property namespace collisions, implicit cross-mixin dependencies, obscure source origins of injected properties, and poor TypeScript autocompletion and type safety',
            bn: 'মিক্সিনে প্রোপার্টির নামের সংঘর্ষ হতো, কোনো ভেরিয়েবল কোথা থেকে এসেছে তা বোঝা যেত না এবং টাইপস্ক্রিপ্টে সঠিক অটোকমপ্লিট ও টাইপ সেফটি পাওয়া যেত না'
          },
          {
            en: 'Mixins increased internet bandwidth costs by 500%',
            bn: 'মিক্সিন ব্যবহারের ফলে ইন্টারনেটের ব্যান্ডউইথ খরচ ৫০০% বেড়ে যেত'
          },
          {
            en: 'Mixins could only be written in Python code',
            bn: 'মিক্সিন কেবল পাইথন কোডেই লেখা সম্ভব ছিল'
          },
          {
            en: 'Mixins prevented the browser from loading images',
            bn: 'মিক্সিন ব্যবহারের ফলে ব্রাউজার ছবি লোড করতে বাধা পেত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mixins caused property collisions and had unclear data sources; Composables are explicit.',
          bn: 'মিক্সিনে নামের সংঘাত ও অস্পষ্ট উৎস ছিল; কম্পোজেবল প্রতিটি ডাটার উৎস পরিষ্কার রাখে।'
        },
        explanation: {
          en: 'Mixins merge properties directly onto the component instance, causing name collisions and making it impossible to determine which mixin supplied a given variable. Composables use explicit returns.',
          bn: 'মিক্সিন সব প্রোপার্টি একসাথে মিশিয়ে দিত, ফলে কোন ভেরিয়েবল কোন মিক্সিন থেকে এসেছে তা বোঝা অসম্ভব হতো। কম্পোজেবলে সবকিছু স্পষ্ট ফাংশন ও রিটার্ন অবজেক্টের মাধ্যমে নিয়ন্ত্রিত হয়।'
        }
      },
      {
        id: 'q-async-setup-with-suspense',
        kind: 'mcq',
        topic: 'asynchronous setup top-level await and <Suspense>',
        question: {
          en: 'When top-level "await" is used inside a component\'s "<script setup>", what parent container is required to handle the pending async state?',
          bn: 'কোনো কম্পোনেন্টের "<script setup>"-এ টপ-লেভেল "await" ব্যবহার করা হলে পেন্ডিং স্টেট নিয়ন্ত্রণের জন্য প্যারেন্টে কোন কন্টেইনার আবশ্যক?'
        },
        options: [
          {
            en: 'The component must be wrapped inside a "<Suspense>" boundary in an ancestor template to provide fallback loading UI while asynchronous resolution completes',
            bn: 'অ্যাসিনক্রোনাস কাজ শেষ হওয়ার সময় লোডিং ইন্টারফেস প্রদর্শনের জন্য প্যারেন্ট টেমপ্লেটে একটি "<Suspense>" বাউন্ডারি থাকা আবশ্যক'
          },
          {
            en: 'The website must be hosted on an Apache HTTP server',
            bn: 'ওয়েবসাইটটি অবশ্যই একটি অ্যাপাচি এইচটিটিপি সার্ভারে হোস্ট করতে হবে'
          },
          {
            en: 'The browser must have Java Virtual Machine installed',
            bn: 'ব্রাউজারে জাভা ভার্চুয়াল মেশিন ইনস্টল থাকা আবশ্যক'
          },
          {
            en: 'Top-level await is completely forbidden in Vue 3',
            bn: 'Vue ৩-এ টপ-লেভেল await ব্যবহার করা সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: '<Suspense> coordinates asynchronous component dependency trees and fallback states.',
          bn: '<Suspense> অ্যাসিনক্রোনাস কম্পোনেন্টের লোডিং ও রেডি স্টেট সমন্বয় করে।'
        },
        explanation: {
          en: '<script setup> allows top-level await. An async component must be nested under a <Suspense> component which manages the #default resolved content and #fallback loading state.',
          bn: '<script setup>-এ সরাসরি await লেখা যায়। এমন উপাদান লোড হওয়ার সময় স্ক্রিন খালি না রেখে ইউজারকে লোডার দেখানোর জন্য প্যারেন্টে <Suspense> ব্যবহার করা হয়।'
        }
      },
      {
        id: 'q-onerrorcaptured-boundary-pattern',
        kind: 'mcq',
        topic: 'error handling across component trees with onErrorCaptured',
        question: {
          en: 'What is the role of the "onErrorCaptured()" lifecycle hook in enterprise Vue application architecture?',
          bn: 'এন্টারপ্রাইজ Vue অ্যাপ্লিকেশনে "onErrorCaptured()" লাইফসাইকেল হুকের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It intercepts unhandled errors propagated from any descendant component, allowing the parent to log telemetry, display a graceful error fallback UI, and optionally prevent further error propagation',
            bn: 'এটি নিচের যেকোনো চাইল্ড উপাদানের অনাকাঙ্ক্ষিত ত্রুটি ধরে ফেলে, ফলে প্যারেন্ট সেই ত্রুটি লগ করতে পারে, ক্র্যাশ এড়িয়ে সুন্দর ফলব্যাক ইউআই দেখাতে পারে এবং অ্যাপ সচল রাখতে পারে'
          },
          {
            en: 'It deletes the bad component file from the hard disk',
            bn: 'এটি হার্ডডিস্ক থেকে ত্রুটিযুক্ত কম্পোনেন্ট ফাইলটি মুছে ফেলে'
          },
          {
            en: 'It triggers an automatic refund to the user bank account',
            bn: 'এটি ব্যবহারকারীর ব্যাংক অ্যাকাউন্টে স্বয়ংক্রিয় রিফান্ড পাঠায়'
          },
          {
            en: 'onErrorCaptured only catches network timeout errors',
            bn: 'onErrorCaptured কেবল নেটওয়ার্ক টাইমআউট এরর ধরতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'onErrorCaptured acts as an error boundary for child components in the tree.',
          bn: 'onErrorCaptured পুরো কম্পোনেন্ট ট্রির জন্য এরর বাউন্ডারি হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'onErrorCaptured catches errors from descendant components during render, watchers, or lifecycle hooks. Returning false prevents the error from bubbling up to app.config.errorHandler.',
          bn: 'onErrorCaptured নিচের কম্পোনেন্টের যেকোনো ক্র্যাশ বা এরর শনাক্ত করে। এতে করে পুরো সাইট সাদা হয়ে যাওয়া রোধ করা যায় এবং ব্যবহারকারীকে মার্জিত ত্রুটি বার্তা দেখানো সম্ভব হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-router-post-office',
    title: {
      en: 'Vue Router 4 — SPA Routing, Dynamic Segments & Navigation Guards',
      bn: 'Vue Router ৪ — এসপিএ রাউটিং, ডায়নামিক সেগমেন্টস ও নেভিগেশন গার্ডস'
    }
  }
};
