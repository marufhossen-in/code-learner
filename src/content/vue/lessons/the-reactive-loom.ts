import type { Lesson } from '../../../lib/types';

export const reactiveLoomLesson: Lesson = {
  slug: 'the-reactive-loom',
  tech: 'vue',
  title: {
    en: 'Vue.js Overview & Reactivity Engine — ref, reactive, computed & watch',
    bn: 'Vue.js ওভারভিউ ও রিঅ্যাক্টিভিটি ইঞ্জিন — ref, reactive, computed ও watch'
  },
  summary: {
    en: 'Vue.js provides a transparent, dependency-tracking reactivity engine that updates the DOM automatically when data changes. In this beginner-friendly overview, you will master the difference between ref and reactive, build cached derived state with computed, trigger side effects with watch and watchEffect, and understand how ES6 Proxies track dependencies under the hood.',
    bn: 'Vue.js একটি স্বচ্ছ এবং স্বয়ংক্রিয় ডিপেন্ডেন্সি ট্র্যাকিং রিঅ্যাক্টিভিটি ইঞ্জিন অফার করে যা ডাটা পরিবর্তনের সাথে সাথে ডম আপডেট করে দেয়। এই পরিচিতিমূলক পাঠে আপনি ref ও reactive-এর পার্থক্য, computed দিয়ে ক্যাশড উদ্ভূত মান তৈরি, watch ও watchEffect দিয়ে পার্শ্বপ্রতিক্রিয়া পরিচালনা এবং ES6 প্রক্সি কীভাবে ব্যাকগ্রাউন্ডে কাজ করে তা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'vue-reactivity-engine-architecture',
      text: {
        en: 'The Vue 3 Reactivity Engine Architecture',
        bn: 'Vue ৩ রিঅ্যাক্টিভিটি ইঞ্জিন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build user interfaces with Vue 3, you declare plain JavaScript state and let Vue track dependencies automatically. Powered by native JavaScript Proxies, Vue intercepts property reads to register active effects as subscribers. When you mutate a reactive value, Vue triggers only the specific subscriber components that depend on that value.',
        bn: 'যখন আপনি Vue ৩ দিয়ে ইউজার ইন্টারফেস তৈরি করেন, তখন আপনি সাধারণ জাভাস্ক্রিপ্ট ভেরিয়েবল ঘোষণা করেন আর Vue নিজে থেকেই সব ডিপেন্ডেন্সি ট্র্যাক করে নেয়। নেটিভ জাভাস্ক্রিপ্ট প্রক্সি চালিত এই ইঞ্জিন প্রোপার্টি পড়ার সময় সাবস্ক্রাইবার হিসেবে কম্পোনেন্টকে যুক্ত করে। ফলে ডাটা পরিবর্তনের সাথে সাথে কেবল সংশ্লিষ্ট উপাদানগুলোতেই নিখুঁত আপডেট সম্পন্ন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ref(initialValue)',
          def: {
            en: 'Wraps any value (primitives or objects) in a reactive reference object with a .value property, auto-unwrapped in templates.',
            bn: 'যেকোনো মানকে (সংখ্যা, স্ট্রিং বা অবজেক্ট) একটি .value প্রোপার্টিযুক্ত রিঅ্যাক্টিভ অবজেক্টে মোড়ে, যা টেমপ্লেটে নিজে থেকেই আনর‍্যাপ হয়।'
          }
        },
        {
          term: 'reactive(object)',
          def: {
            en: 'Creates a deeply reactive ES6 Proxy for structured objects and arrays, allowing direct property mutation without .value.',
            bn: 'অবজেক্ট ও অ্যারের জন্য একটি গভীর রিঅ্যাক্টিভ ES6 প্রক্সি তৈরি করে, যাতে .value ছাড়াই সরাসরি প্রোপার্টি পরিবর্তন করা যায়।'
          }
        },
        {
          term: 'computed(getterFn)',
          def: {
            en: 'Declares a cached, derived reactive reference that only recalculates when one of its tracked dependencies changes.',
            bn: 'একটি ক্যাশড উদ্ভূত মান তৈরি করে যা তার ওপর নির্ভরশীল কোনো ডাটা পরিবর্তন হলেই কেবল পুনরায় হিসাব সম্পন্ন করে।'
          }
        },
        {
          term: 'watch(source, callback)',
          def: {
            en: 'Lazily listens to specific reactive sources, executing an asynchronous side effect whenever the watched source updates.',
            bn: 'নির্দিষ্ট কোনো রিঅ্যাক্টিভ ভেরিয়েবলের ওপর নজর রাখে এবং সেই মান পরিবর্তিত হলেই কেবল নির্ধারিত পার্শ্বপ্রতিক্রিয়া চালায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'reactivity-primitives-matrix',
      text: {
        en: 'Reactivity Primitives and Use Cases Matrix',
        bn: 'রিঅ্যাক্টিভিটি প্রিমিটিভস ও ব্যবহারের ক্ষেত্র ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Primitive Function', bn: 'ফাংশনের নাম' },
        { en: 'Access Syntax (Script vs Template)', bn: 'সিনট্যাক্স (স্ক্রিপ্ট বনাম টেমপ্লেট)' },
        { en: 'Best Suited For', bn: 'উপযুক্ত ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'ref(0)', bn: 'ref(0)' },
          { en: 'count.value in script; count in template', bn: 'স্ক্রিপ্টে count.value; টেমপ্লেটে কেবল count' },
          { en: 'Numbers, strings, booleans, and replaceable object collections', bn: 'সংখ্যা, স্ট্রিং, বুলিয়ান ও সম্পূর্ণ পরিবর্তনশীল অবজেক্ট' }
        ],
        [
          { en: 'reactive({ count: 0 })', bn: 'reactive({ count: 0 })' },
          { en: 'state.count in script; state.count in template', bn: 'স্ক্রিপ্টে state.count; টেমপ্লেটেও state.count' },
          { en: 'Deeply nested structured data mutated strictly in-place', bn: 'জটিল ও গভীর অবজেক্ট যা কাঠামো অপরিবর্তিত রেখে আপডেট হয়' }
        ],
        [
          { en: 'computed(() => price * qty)', bn: 'computed(() => price * qty)' },
          { en: 'total.value in script; total in template', bn: 'স্ক্রিপ্টে total.value; টেমপ্লেটে কেবল total' },
          { en: 'Filtered lists, calculated totals, derived state logic', bn: 'ফিল্টার করা তালিকা, মোট মূল্য হিসাব ও উদ্ভূত ডাটা' }
        ],
        [
          { en: 'watchEffect(() => ...)', bn: 'watchEffect(() => ...)' },
          { en: 'Executes immediately; tracks dependencies automatically', bn: 'শুরুতেই চলে; স্বয়ংক্রিয়ভাবে ডিপেন্ডেন্সি ট্র্যাক করে' },
          { en: 'Logging, localStorage sync, network calls on mount', bn: 'মেট্রিক্স লগিং, লোকাল স্টোরেজ সিঙ্ক ও নেটওয়ার্ক কল' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'reactivity-simulation-code',
      text: {
        en: 'Working Reactivity Engine and Computed Cache Simulation',
        bn: 'কার্যকরী রিঅ্যাক্টিভিটি ইঞ্জিন ও computed ক্যাশ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue 3 ES6 Proxy Reactivity and Computed Caching
class MockReactivityEngine {
  // 1. ref() implementation
  ref(initialValue) {
    let internalValue = initialValue;
    const subscribers = new Set();
    return {
      get value() {
        return internalValue;
      },
      set value(newValue) {
        if (newValue !== internalValue) {
          internalValue = newValue;
          subscribers.forEach((fn) => fn(newValue));
        }
      },
      subscribe(fn) {
        subscribers.add(fn);
      }
    };
  }

  // 2. computed() implementation with caching
  computed(getterFn, dependencyRef) {
    let cachedValue = getterFn();
    let isDirty = false;

    dependencyRef.subscribe(() => {
      isDirty = true;
    });

    return {
      get value() {
        if (isDirty) {
          cachedValue = getterFn();
          isDirty = false;
        }
        return cachedValue;
      }
    };
  }
}

const engine = new MockReactivityEngine();

// Create reactive unit price and quantity
const price = engine.ref(25);
const quantity = engine.ref(2);

// Create computed total calculation
const total = engine.computed(() => price.value * quantity.value, quantity);

console.log('Initial total price value:', total.value);
// -> Initial total price value: 50

// Update quantity from 2 to 4
quantity.value = 4;

console.log('Updated total price after mutation:', total.value);
// -> Updated total price after mutation: 100
console.log('Final quantity ref value:', quantity.value);
// -> Final quantity ref value: 4`,
      caption: {
        en: 'Reactivity engine computes initial total 50 and updates to 100 when quantity changes to 4',
        bn: 'রিঅ্যাক্টিভিটি ইঞ্জিন শুরুতে মোট ৫০ হিসাব করছে এবং সংখ্যা ৪ এ পৌঁছালে ১০০ তে আপডেট করছে'
      }
    },
    {
      type: 'heading',
      id: 'reactivity-best-practices-rules',
      text: {
        en: 'Reactivity Discipline and Best Practices Rules',
        bn: 'রিঅ্যাক্টিভিটি শৃঙ্খলা ও সেরা অনুশীলন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To maintain predictable state flow in Vue 3 applications, developers must respect reactivity rules. Standardize on ref() for state management to avoid losing reactivity during object destructuring. Always use computed properties for derived values instead of calculating logic inline inside your templates or maintaining duplicate state manually.',
        bn: 'Vue ৩ অ্যাপ্লিকেশনে নির্ভরযোগ্য ডাটা প্রবাহ নিশ্চিত করতে রিঅ্যাক্টিভিটির নিয়মগুলো মেনে চলা জরুরি। অবজেক্ট ডিস্ট্রাকচারিংয়ে রিঅ্যাক্টিভিটি নষ্ট হওয়া এড়াতে ref() ব্যবহারকে অগ্রাধিকার দিন। আর টেমপ্লেটে জটিল হিসাব না লিখে বা একই ডাটা ডুপ্লিকেট না করে সর্বদা computed প্রোপার্টি ব্যবহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Standardize on ref(): ref() works universally for all data types and prevents accidental loss of reactivity upon destructuring.',
          bn: '১. ref() ব্যবহারে ধারাবাহিকতা: ref() সব ডাটা টাইপের জন্য কাজ করে এবং ডিস্ট্রাকচার করার সময় রিঅ্যাক্টিভিটি অক্ষুণ্ণ রাখে।'
        },
        {
          en: '2. Computed Instead of Methods: Use computed() for derived values to leverage automatic dependency caching and reduce render cycles.',
          bn: '২. মেথডের বদলে computed: উদ্ভূত মানের ক্ষেত্রে মেথডের বদলে computed() ব্যবহার করুন যাতে ক্যাশিংয়ের সুবিধা পাওয়া যায়।'
        },
        {
          en: '3. Explicit Watch Sources: Prefer watch() over watchEffect() when you need precise control over which specific variables trigger the effect.',
          bn: '৩. সুনির্দিষ্ট watch নির্বাচন: কোন ভেরিয়েবল পরিবর্তন হলে কোড চলবে তা স্পষ্ট রাখতে watchEffect-এর চেয়ে watch() বেশি কার্যকর।'
        },
        {
          en: '4. Deep Option for Objects: When watching nested properties in a ref object, pass the { deep: true } option to detect inner mutations.',
          bn: '৪. অবজেক্টে deep অপশন: অবজেক্টের ভেতরের প্রোপার্টির পরিবর্তন ধরতে watch-এর সাথে { deep: true } অপশন যুক্ত করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-rec-ex1',
      kind: 'mcq',
      topic: 'reading and updating ref value in script setup',
      question: {
        en: 'How do you read or mutate the value of a reactive reference declared with "const count = ref(0)" inside a JavaScript script setup block?',
        bn: 'জাভাস্ক্রিপ্ট স্ক্রিপ্ট ব্লকের ভেতরে "const count = ref(0)" দিয়ে ঘোষিত ভেরিয়েবলের মান কীভাবে পড়বেন বা আপডেট করবেন?'
      },
      options: [
        {
          en: 'Access or assign to the ".value" property, such as "count.value++" or "console.log(count.value)"',
          bn: '".value" প্রোপার্টির মাধ্যমে এক্সেস বা অ্যাসাইন করে, যেমন "count.value++" বা "console.log(count.value)"'
        },
        {
          en: 'Call "count.get()" and "count.set()"',
          bn: '"count.get()" এবং "count.set()" কল করে'
        },
        {
          en: 'Directly write "count++" without .value in script',
          bn: 'স্ক্রিপ্টে .value ছাড়াই সরাসরি "count++" লিখে'
        },
        {
          en: 'Refs cannot be modified once initialized',
          bn: 'একবার ঘোষণা করার পর Ref আর পরিবর্তন করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'In script, refs wrap values in an object requiring .value access.',
        bn: 'স্ক্রিপ্ট ব্লকে Ref অবজেক্টের মান পেতে .value ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'ref() wraps values inside an object with a .value getter and setter. In templates, Vue auto-unwraps refs so .value is unnecessary there, but it is strictly required in JavaScript script code.',
        bn: 'ref() মানকে একটি অবজেক্টে রাখে যার .value গেটার ও সেটার থাকে। টেমপ্লেটে Vue নিজে থেকেই এটি আনর‍্যাপ করে, কিন্তু স্ক্রিপ্ট কোডে .value লেখা আবশ্যক।'
      }
    },
    {
      id: 'vu-rec-ex2',
      kind: 'mcq',
      topic: 'loss of reactivity when destructuring reactive object',
      question: {
        en: 'What unexpected bug occurs if you destructure a reactive object: "const { name } = reactive({ name: \'Alex\' })"?',
        bn: 'যদি আপনি "const { name } = reactive({ name: \'Alex\' })" এভাবে অবজেক্ট ডিস্ট্রাকচার করেন, তবে কোন সমস্যাটি ঘটে?'
      },
      options: [
        {
          en: 'The destructured "name" variable becomes a plain, non-reactive primitive string; updating the original state will no longer trigger UI re-renders for that variable',
          bn: 'ডিস্ট্রাকচার করা "name" ভেরিয়েবলটি একটি সাধারণ নির্জীব স্ট্রিংয়ে পরিণত হয়; পরবর্তীতে মূল অবজেক্ট পাল্টালেও ইউআই আর নিজে থেকে আপডেট হবে না'
        },
        {
          en: 'JavaScript throws a fatal syntax compile error',
          bn: 'জাভাস্ক্রিপ্ট একটি মারাত্মক কমপাইল সিনট্যাক্স এরর দেবে'
        },
        {
          en: 'The computer sound card will play an alert beep',
          bn: 'কম্পিউটারের সাউন্ড কার্ডে একটি বিপ শব্দ বাজবে'
        },
        {
          en: 'The variable automatically converts into a number',
          bn: 'ভেরিয়েবলটি নিজে থেকেই একটি সংখ্যায় বদলে যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Destructuring pulls out raw primitive values, breaking the ES6 Proxy tracking.',
        bn: 'ডিস্ট্রাকচার করলে প্রক্সি বাউন্ডারি ভেঙে সাধারণ আদি মান বের হয়ে আসে।'
      },
      explanation: {
        en: 'reactive() uses an ES6 Proxy. Destructuring unpacks the primitive string value, severing the connection to the proxy traps. Use toRefs() to safely destructure while preserving reactivity.',
        bn: 'reactive() প্রক্সি দিয়ে চলে। ডিস্ট্রাকচার করলে প্রক্সির সাথে সংযোগ বিচ্ছিন্ন হয়ে সাধারণ স্ট্রিং বা সংখ্যা বের হয়ে আসে। রিঅ্যাক্টিভিটি ধরে রাখতে toRefs() ব্যবহার করা উচিত।'
      }
    },
    {
      id: 'vu-rec-ex3',
      kind: 'mcq',
      topic: 'caching advantage of computed properties over methods',
      question: {
        en: 'Why is using a "computed()" property superior to calling a standard function/method inside a Vue template for expensive calculations?',
        bn: 'ভারী গণনার ক্ষেত্রে টেমপ্লেটে সাধারণ মেথড ডাকার চেয়ে "computed()" প্রোপার্টি ব্যবহার করা কেন অনেক বেশি কার্যক্ষম?'
      },
      options: [
        {
          en: 'computed properties are cached based on their reactive dependencies; they only re-evaluate when a tracked dependency changes, whereas methods execute on every single component re-render',
          bn: 'computed প্রোপার্টি ডিপেন্ডেন্সির ওপর ভিত্তি করে ক্যাশড থাকে; ডিপেন্ডেন্সি না বদলালে এটি পুনরায় চলে না, অথচ সাধারণ মেথড প্রতিবার কম্পোনেন্ট রেন্ডার হলেই অযথা বারবার চলে'
        },
        {
          en: 'Methods are not allowed to be called inside Vue templates',
          bn: 'Vue টেমপ্লেটের ভেতর সাধারণ মেথড ডাকার কোনো সুযোগ নেই'
        },
        {
          en: 'computed properties automatically encrypt the calculation with RSA',
          bn: 'computed প্রোপার্টি হিসাবটিকে আরএসএ দিয়ে এনক্রিপ্ট করে রাখে'
        },
        {
          en: 'Methods can only return boolean true or false',
          bn: 'মেথড কেবল সত্য বা মিথ্যা বুলিয়ান মান ফেরত দিতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'computed caches results until dependencies mutate, avoiding redundant calculations.',
        bn: 'computed ফলাফল ক্যাশ করে রাখে, ফলে একই হিসাব বারবার করার অপচয় বন্ধ হয়।'
      },
      explanation: {
        en: 'A computed property will only re-evaluate when some of its reactive dependencies have changed. If unrelated state triggers a component re-render, the computed property returns its cached value immediately.',
        bn: 'ডিপেন্ডেন্সি পরিবর্তন না হলে computed সরাসরি ক্যাশ থেকে উত্তর দিয়ে দেয়। অন্য কোনো কারণে পেজ রেন্ডার হলেও এটি অহেতুক পুনরায় রান হয় না।'
      }
    },
    {
      id: 'vu-rec-ex4',
      kind: 'mcq',
      topic: 'watch versus watcheffect execution difference',
      question: {
        en: 'What is the primary difference in execution timing between "watch()" and "watchEffect()" in Vue 3?',
        bn: 'Vue ৩-এ "watch()" এবং "watchEffect()"-এর চলার সময়ের প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'watchEffect() runs immediately upon creation while automatically tracking any dependencies accessed inside it; watch() is lazy by default and only runs when its explicitly specified source changes',
          bn: 'watchEffect() তৈরির সাথে সাথেই তাৎক্ষণিকভাবে একবার চলে এবং ভেতরের ব্যবহৃত ডাটা ট্র্যাক করে; আর watch() ডিফল্টভাবে নিষ্ক্রিয় থাকে এবং নির্দিষ্ট উৎস পাল্টালেই কেবল চলে'
        },
        {
          en: 'watch() only runs in Google Chrome while watchEffect() runs in Firefox',
          bn: 'watch() কেবল ক্রোম ব্রাউজারে চলে আর watchEffect() চলে ফায়ারফক্সে'
        },
        {
          en: 'watchEffect() can only be used on strings',
          bn: 'watchEffect() কেবল টেক্সট স্ট্রিংয়ে ব্যবহার করা যায়'
        },
        {
          en: 'There is no difference; they are exact aliases',
          bn: 'কোনো পার্থক্য নেই; তারা একে অপরের সমার্থক'
        }
      ],
      answer: 0,
      hint: {
        en: 'watchEffect runs eagerly; watch runs lazily on explicit sources.',
        bn: 'watchEffect সাথে সাথে চলে; watch নির্দিষ্ট পরিবর্তনের অপেক্ষায় থাকে।'
      },
      explanation: {
        en: 'watchEffect runs immediately to collect dependencies and re-runs whenever any collected dependency changes. watch is lazy by default and requires explicitly specifying the watched source.',
        bn: 'watchEffect শুরুতেই একবার চলে নিজে থেকে ডিপেন্ডেন্সি খুঁজে নেয়। অন্যদিকে watch অলস থাকে এবং নির্দিষ্ট ভেরিয়েবল পরিবর্তন না হওয়া পর্যন্ত চলে না।'
      }
    }
  ],
  quiz: {
    id: 'the-reactive-loom-quiz',
    title: {
      en: 'Vue.js Reactivity Engine Quiz',
      bn: 'Vue.js রিঅ্যাক্টিভিটি ইঞ্জিন কুইজ'
    },
    questions: [
      {
        id: 'q-vue3-proxy-vs-vue2-object-define-property',
        kind: 'mcq',
        topic: 'Vue 3 Proxy reactivity versus Vue 2 Object.defineProperty limitations',
        question: {
          en: 'What fundamental limitation of Vue 2\'s reactivity system was completely eliminated by Vue 3\'s adoption of JavaScript Proxies?',
          bn: 'Vue ২-এর রিঅ্যাক্টিভিটি সিস্টেমের কোন মৌলিক সীমাবদ্ধতা Vue ৩-এর জাভাস্ক্রিপ্ট প্রক্সি গ্রহণের মাধ্যমে পুরোপুরি দূর করা হয়েছে?'
        },
        options: [
          {
            en: 'Vue 2 could not detect newly added or deleted object properties without Vue.set() / Vue.delete(), nor direct array index mutations (arr[0] = val); Vue 3 Proxies track all additions, deletions, and array mutations transparently',
            bn: 'Vue ২-এ Vue.set() ছাড়া নতুন প্রোপার্টি যোগ বা মোছা এবং সরাসরি ইনডেক্সে অ্যারে পরিবর্তন শনাক্ত হতো না; Vue ৩ প্রক্সি কোনো ঝামেলা ছাড়াই সব ধরনের পরিবর্তন নিজে থেকেই ট্র্যাক করে'
          },
          {
            en: 'Vue 2 was unable to display text on mobile phones',
            bn: 'Vue ২ মোবাইল ফোনে টেক্সট দেখাতে অক্ষম ছিল'
          },
          {
            en: 'Vue 3 requires internet connection to execute JavaScript',
            bn: 'Vue ৩-এ জাভাস্ক্রিপ্ট চালাতে ইন্টারনেট সংযোগ বাধ্যতামূলক'
          },
          {
            en: 'Vue 2 did not support HTML buttons',
            bn: 'Vue ২ এইচটিএমএল বাটন সমর্থন করত না'
          }
        ],
        answer: 0,
        hint: {
          en: 'ES6 Proxies intercept operations on the entire object, including dynamic property additions.',
          bn: 'ES6 প্রক্সি পুরো অবজেক্টের ওপর নজর রাখে, ফলে নতুন প্রোপার্টি যোগ হলেও তা সাথে সাথে ধরা পড়ে।'
        },
        explanation: {
          en: 'Vue 2 used Object.defineProperty, which had to walk known properties on initialization and could not detect new properties or direct array indexing. Vue 3 Proxies intercept all operations dynamically.',
          bn: 'Vue ২-এর defineProperty কেবল বিদ্যমান প্রোপার্টিতেই কাজ করত। Vue ৩-এর Proxy পুরো অবজেক্টকে মুড়িয়ে রাখে, ফলে রানটাইমে নতুন কী বা অ্যারে ইনডেক্স বদলালেও তা নির্ভুলভাবে শনাক্ত হয়।'
        }
      },
      {
        id: 'q-torefs-utility-purpose',
        kind: 'mcq',
        topic: 'using toRefs to preserve reactivity during object destructuring',
        question: {
          en: 'Why is the "toRefs()" utility function used when returning state from a custom Vue composable?',
          bn: 'কাস্টম Vue কম্পোজেবল থেকে স্টেট রিটার্ন করার সময় "toRefs()" ইউটিলিটি ফাংশনটি কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It converts each property of a reactive object into an individual ref, allowing consumers to destructure properties without severing reactivity connections to the underlying state',
            bn: 'এটি একটি রিঅ্যাক্টিভ অবজেক্টের প্রতিটি প্রোপার্টিকে আলাদা আলাদা রেফে বদলে দেয়, যার ফলে ব্যবহারকারীরা ডিস্ট্রাকচার করলেও রিঅ্যাক্টিভিটি নষ্ট হয় না'
          },
          {
            en: 'It saves the variables to a PostgreSQL database automatically',
            bn: 'এটি ভেরিয়েবলগুলোকে নিজে থেকেই পোস্টগ্রেস ডাটাবেজে সেভ করে দেয়'
          },
          {
            en: 'It converts TypeScript code into CSS stylesheets',
            bn: 'এটি টাইপস্ক্রিপ্ট কোডকে সিএসএস ফাইলে রূপান্তর করে'
          },
          {
            en: 'toRefs deletes all null and undefined values from memory',
            bn: 'toRefs মেমরি থেকে সমস্ত null ও undefined মান মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'toRefs converts each property into a ref to survive destructuring.',
          bn: 'toRefs প্রতিটি প্রোপার্টিকে রেফে রূপান্তর করে ডিস্ট্রাকচারিংয়ে সাহায্য করে।'
        },
        explanation: {
          en: 'toRefs wraps every property of a reactive object in a ref maintaining a two-way sync with the source. This enables ES6 destructuring (const { x, y } = useCoords()) without breaking reactivity.',
          bn: 'toRefs অবজেক্টের প্রতিটি মানকে রেফ বানিয়ে মূল অবজেক্টের সাথে যুক্ত রাখে। ফলে ডিস্ট্রাকচার করলেও ভেরিয়েবলগুলোর রিঅ্যাক্টিভ ক্ষমতা পুরোপুরি অটুট থাকে।'
        }
      },
      {
        id: 'q-shallow-ref-performance-optimization',
        kind: 'mcq',
        topic: 'shallowRef optimization for massive immutable datasets',
        question: {
          en: 'When should a developer choose "shallowRef()" instead of standard "ref()" in a performance-sensitive Vue application?',
          bn: 'পারফরম্যান্সের দিক থেকে সংবেদনশীল কোনো Vue অ্যাপ্লিকেশনে সাধারণ "ref()"-এর বদলে "shallowRef()" কখন বেছে নেওয়া উচিত?'
        },
        options: [
          {
            en: 'When holding large data structures (such as arrays with 10,000 items from an API or complex third-party library instances) where deep property tracking overhead is unnecessary, as updates only replace the entire root reference',
            bn: 'যখন খুব বড় ডাটা কাঠামো (যেমন ১০,০০০ আইটেমের অ্যারে বা ভারী থার্ড-পার্টি ইনস্ট্যান্স) রাখা হয় এবং ভেতরের গভীর ট্র্যাকিংয়ের প্রয়োজন হয় না, কারণ আপডেট সর্বদা পুরো রুট রেফ প্রতিস্থাপন করেই হয়'
          },
          {
            en: 'Only when running Vue inside a web browser on Linux',
            bn: 'কেবল যখন লিনাক্সের ওয়েব ব্রাউজারে Vue চালানো হয়'
          },
          {
            en: 'shallowRef is strictly used for storing CSS color strings',
            bn: 'shallowRef কেবল সিএসএস কালার স্ট্রিং সংরক্ষণের জন্য ব্যবহৃত হয়'
          },
          {
            en: 'Standard ref cannot hold more than 5 numbers',
            bn: 'সাধারণ ref ৫টির বেশি সংখ্যা ধরে রাখতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'shallowRef only tracks .value access, avoiding the performance cost of deep proxy wrapping.',
          bn: 'shallowRef কেবল মূল .value পরিবর্তন ট্র্যাক করে, ফলে ভেতরের হাজার হাজার ডাটা প্রক্সি করার মেমরি অপচয় বাঁচে।'
        },
        explanation: {
          en: 'Standard ref() makes nested objects deeply reactive. For massive immutable lists or charts, shallowRef() avoids deep proxy conversion overhead, triggering reactivity only when .value is reassigned.',
          bn: 'সাধারণ ref ভেতরের সব অবজেক্টকে রিঅ্যাক্টিভ করে যা বিশাল লিস্টের জন্য ধীরগতির হতে পারে। shallowRef কেবল .value বদলালে আপডেট দেয়, ফলে অপ্রয়োজনীয় প্রক্সি খরচ বাঁচে।'
        }
      },
      {
        id: 'q-trigger-ref-manual-force',
        kind: 'mcq',
        topic: 'manually triggering effects with triggerRef',
        question: {
          en: 'What does the "triggerRef(myShallowRef)" function accomplish in Vue 3?',
          bn: 'Vue ৩-এ "triggerRef(myShallowRef)" ফাংশনটির কাজ কী?'
        },
        options: [
          {
            en: 'It forcefully notifies all subscribers and effects dependent on a shallowRef to re-run, even if the root .value reference itself was not reassigned',
            bn: 'এটি একটি shallowRef-এর ওপর নির্ভরশীল সমস্ত সাবস্ক্রাইবারকে জোরপূর্বক পুনরায় চলার সংকেত দেয়, এমনকি যদি মূল .value রেফারেন্সটি নিজে থেকে পরিবর্তন নাও হয়'
          },
          {
            en: 'It reboots the computer operating system',
            bn: 'এটি কম্পিউটারের অপারেটিং সিস্টেম রিবুট করে দেয়'
          },
          {
            en: 'It clears the browser history and cookies',
            bn: 'এটি ব্রাউজারের হিস্ট্রি ও কুকি মুছে ফেলে'
          },
          {
            en: 'It converts the shallowRef into an image file',
            bn: 'এটি shallowRef-কে একটি ইমেজ ফাইলে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'triggerRef manually triggers side effects for shallow refs.',
          bn: 'triggerRef ম্যানুয়ালি shallow ref-এর সাবস্ক্রাইবারদের আপডেট সক্রিয় করে।'
        },
        explanation: {
          en: 'Because shallowRef does not track deep mutations, mutating an inner property directly does not trigger reactivity. Calling triggerRef(ref) forces Vue to notify dependents and update the DOM.',
          bn: 'shallowRef অবজেক্টের গভীরে নজর রাখে না। তাই ভেতরের কোনো মান বদলানোর পর triggerRef ডাকলে Vue বুঝতে পেরে সাথে সাথে ডম আপডেট করে নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-sfc-workbench',
    title: {
      en: 'Single-File Components — <script setup>, Templates & Scoped Styles',
      bn: 'সিঙ্গল-ফাইল কম্পোনেন্টস — <script setup>, টেমপ্লেট ও স্কোপড স্টাইল'
    }
  }
};
