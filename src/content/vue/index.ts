import type { Hub } from '../../lib/types';
import { reactiveLoomLesson } from './lessons/the-reactive-loom';
import { sfcWorkbenchLesson } from './lessons/the-sfc-workbench';
import { directiveGrammarLesson } from './lessons/the-directive-grammar';
import { componentCommonsLesson } from './lessons/the-component-commons';
import { composableShelfLesson } from './lessons/the-composable-shelf';
import { routerPostOfficeLesson } from './lessons/the-router-post-office';
import { piniaTreasuryLesson } from './lessons/the-pinia-treasury';
import { transitionMasqueradeLesson } from './lessons/the-transition-masquerade';

export const vueHub: Hub = {
  slug: 'vue',
  name: 'Vue.js',
  icon: '💚',
  tagline: {
    en: 'Progressive JavaScript framework featuring fine-grained Reactivity, Single-File Components, Composition API, and Pinia state management.',
    bn: 'সূক্ষ্ম রিঅ্যাক্টিভিটি, সিঙ্গল-ফাইল কম্পোনেন্টস, কম্পোজিশন এপিআই ও পিনিয়া স্টেট ম্যানেজমেন্ট সমৃদ্ধ প্রোগ্রেসিভ জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক।'
  },
  about: {
    en: 'Vue.js is the approachable, performant, and versatile progressive framework for building modern web user interfaces. Powered by an ES6 Proxy-based reactivity engine, Vue tracks dependencies during render and triggers surgical DOM updates only when observed values mutate. Master Single-File Components (SFC) with <script setup>, the directive grammar of v-if and v-for, component communication via defineProps and defineEmits, reusable logic with custom Composables, client-side routing with Vue Router, and enterprise state management with Pinia.',
    bn: 'Vue.js হলো আধুনিক ওয়েব ইন্টারফেস তৈরির জন্য অত্যন্ত সহজবোধ্য, উচ্চগতির ও বহুমুখী প্রোগ্রেসিভ ফ্রেমওয়ার্ক। ES6 প্রক্সি-ভিত্তিক রিঅ্যাক্টিভিটি ইঞ্জিন চালিত Vue রেন্ডারের সময় ডিপেন্ডেন্সি ট্র্যাক করে এবং ডাটা বদলালে কেবল পরিবর্তিত স্থানেই নিখুঁত DOM আপডেট চালায়। <script setup> সহ সিঙ্গল-ফাইল কম্পোনেন্ট, v-if ও v-for নির্দেশনার ব্যাকরণ, defineProps ও defineEmits দিয়ে কম্পোনেন্ট যোগাযোগ, কাস্টম কম্পোজেবল দিয়ে লজিক পুনর্ব্যবহার, Vue Router দিয়ে পেজ রাউটিং এবং Pinia দিয়ে এন্টারপ্রাইজ স্টেট ম্যানেজমেন্ট এই ট্র্যাকে গভীরভাবে শিখুন।'
  },
  roadmap: [
    {
      title: { en: 'Phase 1: Reactivity Engine & SFC Workbench', bn: 'প্রথম ধাপ: রিঅ্যাক্টিভিটি ইঞ্জিন ও এসএফসি ওয়ার্কবেঞ্চ' },
      items: [
        { en: 'Proxy-based reactivity: ref, reactive, computed, and watch (Lesson 1)', bn: 'প্রক্সি-ভিত্তিক রিঅ্যাক্টিভিটি: ref, reactive, computed ও watch (পাঠ ১)' },
        { en: 'Single-File Components: <template>, <script setup>, and <style scoped> (Lesson 2)', bn: 'সিঙ্গল-ফাইল কম্পোনেন্ট: <template>, <script setup> ও <style scoped> (পাঠ ২)' },
        { en: 'Template directives: v-bind, v-on, v-if/v-else, v-for, and v-model (Lesson 3)', bn: 'টেমপ্লেট ডিরেক্টিভ: v-bind, v-on, v-if/v-else, v-for ও v-model (পাঠ ৩)' },
        { en: 'Event modifiers: .prevent, .stop, .enter, and two-way form bindings', bn: 'ইভেন্ট মডিফায়ার: .prevent, .stop, .enter ও দ্বি-মুখী ফর্ম বাইন্ডিং' }
      ]
    },
    {
      title: { en: 'Phase 2: Component Architecture & Composables', bn: 'দ্বিতীয় ধাপ: কম্পোনেন্ট আর্কিটেকচার ও কম্পোজেবলস' },
      items: [
        { en: 'Component communication: defineProps, defineEmits, and v-model arguments (Lesson 4)', bn: 'কম্পোনেন্ট যোগাযোগ: defineProps, defineEmits ও v-model আর্গুমেন্টস (পাঠ ৪)' },
        { en: 'Content distribution with default, named, and scoped slots', bn: 'ডিফল্ট, নামযুক্ত ও স্কোপড স্লট দিয়ে কন্টেন্ট ডিস্ট্রিবিউশন' },
        { en: 'Dependency injection across deep component trees with provide/inject', bn: 'provide/inject দিয়ে ডিপ কম্পোনেন্ট ট্রিতে ডিপেন্ডেন্সি ইনজেকশন' },
        { en: 'Building reusable stateful logic with custom Composables (Lesson 5)', bn: 'কাস্টম কম্পোজেবল দিয়ে পুনর্ব্যবহারযোগ্য স্টেট লজিক তৈরি (পাঠ ৫)' }
      ]
    },
    {
      title: { en: 'Phase 3: Single-Page Application Routing & Pinia Store', bn: 'তৃতীয় ধাপ: সিঙ্গেল-পেজ রাউটিং ও পিনিয়া স্টোর' },
      items: [
        { en: 'Vue Router: createRouter, HTML5 history mode, and nested views (Lesson 6)', bn: 'Vue Router: createRouter, HTML5 হিস্টোরি মোড ও নেস্টেড ভিউ (পাঠ ৬)' },
        { en: 'Route parameters, query strings, and programmatic navigation', bn: 'রুট প্যারামিটার, কোয়েরি স্ট্রিং ও প্রোগ্রাম্যাটিক নেভিগেশন' },
        { en: 'Navigation guards: global beforeEach, per-route guards, and auth checks', bn: 'নেভিগেশন গার্ডস: গ্লোবাল beforeEach, রুট গার্ড ও অথেনটিকেশন চেক' },
        { en: 'Pinia state management: defineStore, state, getters, and actions (Lesson 7)', bn: 'Pinia স্টেট ম্যানেজমেন্ট: defineStore, state, getters ও actions (পাঠ ৭)' }
      ]
    },
    {
      title: { en: 'Phase 4: Animations, Teleport & Production Hardening', bn: 'চতুর্থ ধাপ: অ্যানিমেশন, টেলিপোর্ট ও প্রোডাকশন প্রস্তুতি' },
      items: [
        { en: 'UI animations and transitions with <Transition> and <TransitionGroup> (Lesson 8)', bn: '<Transition> ও <TransitionGroup> দিয়ে ইউআই ট্রানজিশন (পাঠ ৮)' },
        { en: 'DOM portal rendering outside component hierarchy using <Teleport>', bn: '<Teleport> দিয়ে কম্পোনেন্ট হায়ারার্কির বাইরে মোডাল রেন্ডারিং' },
        { en: 'Component caching with <KeepAlive> and asynchronous components', bn: '<KeepAlive> দিয়ে কম্পোনেন্ট ক্যাশিং ও অ্যাসিনক্রোনাস কম্পোনেন্ট' },
        { en: 'Production builds, bundle optimization with Vite, and SSR readiness', bn: 'Vite দিয়ে প্রোডাকশন বিল্ড, বান্ডল অপটিমাইজেশন ও SSR প্রস্তুতি' }
      ]
    }
  ],
  lessons: [
    reactiveLoomLesson,
    sfcWorkbenchLesson,
    directiveGrammarLesson,
    componentCommonsLesson,
    composableShelfLesson,
    routerPostOfficeLesson,
    piniaTreasuryLesson,
    transitionMasqueradeLesson
  ],
  reference: [
    {
      group: 'Core Reactivity Functions',
      methods: [
        {
          name: 'ref()',
          signature: 'const count = ref(initialValue)',
          params: { en: 'Wraps primitive or object values in a reactive box accessible via .value in script.', bn: 'স্কেলার বা অবজেক্টকে রিঅ্যাক্টিভ বাক্সে মোড়ে যা স্ক্রিপ্টে .value দিয়ে পড়া যায়।' },
          returns: { en: 'Ref<T> unwrapped automatically in templates.', bn: 'Ref অবজেক্ট যা টেমপ্লেটে নিজে থেকেই আনর‍্যাপ হয়।' },
          example: 'const count = ref(0); count.value++;'
        },
        {
          name: 'reactive()',
          signature: 'const state = reactive(plainObject)',
          params: { en: 'Returns a deep reactive ES6 Proxy for structured objects without requiring .value.', bn: 'স্ট্রাকচার্ড অবজেক্টের জন্য একটি গভীর রিঅ্যাক্টিভ ES6 প্রক্সি ফেরত দেয়।' },
          returns: { en: 'Unwrapped deeply reactive Proxy object.', bn: '.value ছাড়া সরাসরি এক্সেসযোগ্য গভীর রিঅ্যাক্টিভ প্রক্সি।' },
          example: 'const user = reactive({ name: "Alex", age: 28 });'
        },
        {
          name: 'computed()',
          signature: 'const double = computed(() => count.value * 2)',
          params: { en: 'Creates a cached derived ref that recalculates strictly when its tracked dependencies change.', bn: 'ক্যাশড উদ্ভূত মান তৈরি করে যা ডিপেন্ডেন্সি পাল্টালেই কেবল পুনরায় হিসাব হয়।' },
          returns: { en: 'Readonly computed Ref.', bn: 'রিড-অনলি রিঅ্যাক্টিভ computed Ref।' },
          example: 'const subtotal = computed(() => price.value * qty.value);'
        }
      ]
    },
    {
      group: 'Component Directives',
      methods: [
        {
          name: 'v-model',
          signature: '<input v-model="searchText" />',
          params: { en: 'Two-way data binding syncing input values with component reactive state seamlessly.', bn: 'দ্বি-মুখী ডাটা বাইন্ডিং যা ইনপুট মানকে রিঅ্যাক্টিভ স্টেটের সাথে স্বয়ংক্রিয়ভাবে সিঙ্ক রাখে।' },
          returns: { en: 'Event listener and value prop pair.', bn: 'ভ্যালু প্রপ ও ইনপুট ইভেন্টের স্বয়ংক্রিয় জোড়া।' },
          example: '<input v-model.trim="email" />'
        },
        {
          name: 'v-for & :key',
          signature: '<li v-for="item in items" :key="item.id">{{ item.name }}</li>',
          params: { en: 'Renders an array or object iteratively, requiring a unique key for virtual DOM diffing.', bn: 'তালিকার প্রতিটি উপাদান লুপ করে রেন্ডার করে এবং ট্র্যাকিংয়ের জন্য ইউনিক কি দাবি করে।' },
          returns: { en: 'Dynamic list of virtual DOM elements.', bn: 'ভার্চুয়াল ডম উপাদানের ডায়নামিক তালিকা।' },
          example: '<div v-for="p in products" :key="p.id">{{ p.title }}</div>'
        }
      ]
    },
    {
      group: 'State & Store Management',
      methods: [
        {
          name: 'defineStore()',
          signature: 'export const useCartStore = defineStore("cart", () => { ... })',
          params: { en: 'Declares an enterprise Pinia store containing reactive state, getters, and action methods.', bn: 'স্টেট, গেটার্স ও অ্যাকশন পদ্ধতি সহ একটি কেন্দ্রীয় পিনিয়া স্টোর তৈরি করে।' },
          returns: { en: 'Composable hook initializing the shared store.', bn: 'শেয়ার্ড স্টোর ব্যবহারের জন্য কম্পোজেবল হুক।' },
          example: 'const cart = useCartStore();'
        },
        {
          name: 'storeToRefs()',
          signature: 'const { count } = storeToRefs(store)',
          params: { en: 'Destructures state and getters from a Pinia store while preserving full reactivity.', bn: 'পিনিয়া স্টোর থেকে স্টেট আলাদা করার সময় রিঅ্যাক্টিভিটি অক্ষুণ্ণ রাখে।' },
          returns: { en: 'Object of Refs bound to store state.', bn: 'স্টোরের সাথে সংযুক্ত রিঅ্যাক্টিভ রেফ অবজেক্ট।' },
          example: 'const { items, total } = storeToRefs(cartStore);'
        }
      ]
    }
  ],
  projects: [
    {
      title: { en: 'Interactive E-Commerce Product Catalog', bn: 'ইন্টারঅ্যাক্টিভ ই-কমার্স প্রোডাক্ট ক্যাটালগ' },
      diff: 'beginner',
      desc: {
        en: 'Build a responsive shopping catalog with real-time text search filtering, category pill toggles, dynamic price range sliders using computed properties, and local cart counters.',
        bn: 'রিয়েল-টাইম সার্চ ফিল্টারিং, ক্যাটাগরি পিলস, computed প্রোপার্টি দিয়ে প্রাইস রেঞ্জ স্লাইডার এবং লোকাল কার্ট কাউন্টার সহ একটি ই-কমার্স ক্যাটালগ তৈরি করুন।'
      }
    },
    {
      title: { en: 'Multi-Step SaaS Dashboard with Pinia & Router', bn: 'পিনিয়া ও রাউটার সহ মাল্টি-স্টেপ SaaS ড্যাশবোর্ড' },
      diff: 'intermediate',
      desc: {
        en: 'Develop an administrative web app featuring nested route navigation, authentication route guards, centralized session storage with Pinia, and custom composables for API queries.',
        bn: 'নেস্টেড রাউট নেভিগেশন, অথেনটিকেশন রুট গার্ড, পিনিয়া সেন্ট্রাল সেশন স্টোর এবং এপিআই কলের জন্য কাস্টম কম্পোজেবল সহ একটি অ্যাডমিন ড্যাশবোর্ড তৈরি করুন।'
      }
    },
    {
      title: { en: 'Real-Time Kanban Board with Teleport & Transitions', bn: 'টেলিপোর্ট ও ট্রানজিশন সহ রিয়েল-টাইম কানবান বোর্ড' },
      diff: 'advanced',
      desc: {
        en: 'Architect a collaborative task management board with smooth drag-and-drop animations using <TransitionGroup>, modal task inspectors projected to document body via <Teleport>, and optimistic local updates.',
        bn: '<TransitionGroup> দিয়ে মসৃণ অ্যানিমেশন, <Teleport> দিয়ে বডিতে প্রজেক্ট করা মোডাল টাস্ক ইন্সপেক্টর এবং অপটিমিস্টিক আপডেট সহ একটি পূর্ণাঙ্গ কানবান বোর্ড নির্মাণ করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: '1. Standardize on ref() for Primitives: Use ref() for scalar values and consistent .value access; reserve reactive() for tightly coupled state objects.',
      bn: '১. স্কেলারে ref ব্যবহার: একক মান ও ধারাবাহিকতার জন্য ref() ব্যবহার করুন; কেবল ঘনিষ্ঠভাবে সম্পর্কিত অবজেক্টের জন্য reactive() বেছে নিন।'
    },
    {
      en: '2. Stable Keys in v-for: Always bind a unique database ID to :key in v-for loops; never use array indices which cause DOM recycling bugs during deletions.',
      bn: '২. v-for এ স্থায়ী কি: v-for লুপে সর্বদা ডাটাবেজ আইডি দিয়ে :key দিন; অ্যারে ইনডেক্স ব্যবহার করলে ডিলিটের সময় মারাত্মক ডম বাতিলে সমস্যা হয়।'
    },
    {
      en: '3. One-Way Data Flow (Props Down, Emits Up): Never mutate a prop directly inside a child component; emit an event to request the parent update its state.',
      bn: '৩. একমুখী ডাটা প্রবাহ: চাইল্ড কম্পোনেন্টে সরাসরি প্রপস পরিবর্তন করবেন না; প্যারেন্টকে স্টেট আপডেট করার অনুরোধ জানাতে emit ব্যবহার করুন।'
    },
    {
      en: '4. Computed for Derived Logic: Never duplicate state in data properties if it can be computed dynamically from existing reactive values.',
      bn: '৪. উদ্ভূত মানে computed: বিদ্যমান ডাটা থেকে হিসাব করা সম্ভব হলে তা নতুন করে স্টেটে রাখবেন না; সর্বদা computed ব্যবহার করুন।'
    },
    {
      en: '5. Destructure Stores with storeToRefs: When extracting state or getters from a Pinia store, use storeToRefs() to prevent breaking reactivity.',
      bn: '৫. storeToRefs দিয়ে ডিস্ট্রাকচার: পিনিয়া স্টোর থেকে স্টেট আলাদা করার সময় রিঅ্যাক্টিভিটি নষ্ট হওয়া এড়াতে storeToRefs() ব্যবহার করুন।'
    },
    {
      en: '6. Clean Up Side Effects in Composables: Always register onUnmounted() inside custom composables to cancel timers, clear intervals, and detach event listeners.',
      bn: '৬. কম্পোজেবলে মেমরি ক্লিনআপ: মেমরি লিক প্রতিরোধ করতে কাস্টম কম্পোজেবলে onUnmounted() হুকের ভেতর টাইমার ও ইভেন্ট লিসেনার পরিষ্কার করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the operational difference between ref() and reactive() in Vue 3?',
        bn: 'Vue ৩-এ ref() এবং reactive()-এর মধ্যে কার্যপ্রণালীগত পার্থক্য কী?'
      },
      a: {
        en: 'ref() accepts any data type (primitives like numbers or strings, as well as objects) and wraps it in a reactive object requiring .value access in JavaScript, while auto-unwrapping in templates. reactive() only accepts structured objects and returns a deep ES6 Proxy without .value access, but cannot be reassigned or destructured directly without losing reactivity.',
        bn: 'ref() যেকোনো ডাটা টাইপ (সংখ্যা, স্ট্রিং বা অবজেক্ট) গ্রহণ করে এবং স্ক্রিপ্টে .value দিয়ে পড়তে হয়, যা টেমপ্লেটে নিজে থেকে আনর‍্যাপ হয়। আর reactive() কেবল অবজেক্ট গ্রহণ করে সরাসরি প্রক্সি দেয় (.value লাগে না), তবে এটিকে সম্পূর্ণ নতুন অবজেক্ট দিয়ে প্রতিস্থাপন বা সাধারণ ডিস্ট্রাকচার করলে রিঅ্যাক্টিভিটি নষ্ট হয়ে যায়।'
      }
    },
    {
      q: {
        en: 'How does computed() differ fundamentally from watch() and watchEffect()?',
        bn: 'computed() কীভাবে মৌলিকভাবে watch() এবং watchEffect()-এর চেয়ে আলাদা?'
      },
      a: {
        en: 'computed() derives a new reactive value synchronously and caches the result until its dependencies mutate. watch() runs an asynchronous side effect whenever a specific watched source changes, providing access to both old and new values. watchEffect() runs immediately and automatically tracks all reactive dependencies accessed inside its callback.',
        bn: 'computed() বিদ্যমান ডাটা থেকে একটি নতুন মান তৈরি করে এবং ডিপেন্ডেন্সি না বদলানো পর্যন্ত ফলাফল ক্যাশ রাখে। watch() নির্দিষ্ট ভেরিয়েবল পরিবর্তন হলে পার্শ্বপ্রতিক্রিয়া (যেমন এপিআই কল) চালায় এবং আগের ও নতুন মান দেয়। আর watchEffect() তাৎক্ষণিকভাবে চলে এবং ভেতরের ব্যবহৃত সব রিঅ্যাক্টিভ ভেরিয়েবল নিজে থেকেই পর্যবেক্ষণ করে।'
      }
    },
    {
      q: {
        en: 'Why is v-if preferred over v-show for infrequently toggled elements?',
        bn: 'কদাচিৎ পরিবর্তিত উপাদানের ক্ষেত্রে v-show-এর বদলে v-if কেন বেশি পছন্দ করা হয়?'
      },
      a: {
        en: 'v-if is conditional rendering that creates or completely destroys DOM nodes and component instances, incurring zero rendering cost when false. v-show always renders the element into the DOM and merely toggles the CSS display property (display: none), making v-show cheaper for frequent toggling but more expensive during initial page render.',
        bn: 'v-if শর্ত মিথ্যা হলে ডম থেকে উপাদান পুরোপুরি মুছে ফেলে বা তৈরিই করে না, ফলে প্রাথমিক রেন্ডারিং দ্রুত হয়। আর v-show উপাদানটি ডমে রেখে কেবল সিএসএস display: none দিয়ে আড়াল করে, যা ঘন ঘন পরিবর্তনের জন্য ভালো হলেও প্রাথমিক লোডে মেমরি খরচ বেশি করে।'
      }
    },
    {
      q: {
        en: 'How does Vue 3 track reactivity under the hood using JavaScript Proxies?',
        bn: 'জাভাস্ক্রিপ্ট প্রক্সি ব্যবহার করে Vue ৩ কীভাবে ব্যাকগ্রাউন্ডে রিঅ্যাক্টিভিটি ট্র্যাক করে?'
      },
      a: {
        en: 'When a reactive object is accessed during component rendering, the Proxy get() trap triggers track(), registering the currently active effect as a subscriber. When a property is mutated, the Proxy set() trap triggers trigger(), which immediately re-runs only the specific effects and render functions subscribed to that property.',
        bn: 'রেন্ডারের সময় কোনো রিঅ্যাক্টিভ প্রোপার্টি পড়া হলে প্রক্সির get() ট্র্যাপ সচল হয়ে track() ডাকে এবং রেন্ডার ফাংশনকে গ্রাহক হিসেবে যুক্ত করে। পরে প্রোপার্টি পরিবর্তন করা হলে set() ট্র্যাপ trigger() ডেকে কেবল সেই প্রোপার্টির গ্রাহক কম্পোনেন্টটিকেই নিখুঁতভাবে পুনরায় রেন্ডার করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'E-Commerce Storefronts: Instant computed cart calculations, reactive filtering, and smooth transition animations on product sliders.',
      bn: 'ই-কমার্স প্ল্যাটফর্ম: তাৎক্ষণিক কার্ট হিসাব, রিঅ্যাক্টিভ প্রোডাক্ট ফিল্টারিং এবং স্লাইডারে মসৃণ ট্রানজিশন অ্যানিমেশন।'
    },
    {
      en: 'Enterprise Analytics Portals: Vue Router nested views for multi-level metric dashboards paired with centralized Pinia telemetry stores.',
      bn: 'এন্টারপ্রাইজ অ্যানালিটিক্স পোর্টাল: নেস্টেড ড্যাশবোর্ডের জন্য Vue Router এবং সেন্ট্রাল মেট্রিক্সের জন্য পিনিয়া স্টোর আর্কিটেকচার।'
    },
    {
      en: 'Real-Time Collaboration Tools: Custom composables managing WebSocket event channels with surgical component re-renders.',
      bn: 'রিয়েল-টাইম কলাবোরেশন টুলস: রিয়েল-টাইম ওয়েবসকেট সংযোগ পরিচালনার জন্য কাস্টম কম্পোজেবল এবং দ্রুতগতির কম্পোনেন্ট রেন্ডারিং।'
    },
    {
      en: 'Large-Scale Design Systems: Modular Single-File Components with scoped CSS styles and flexible slot-based content distribution.',
      bn: 'লার্জ-স্কেল ডিজাইন সিস্টেম: স্কোপড সিএসএস স্টাইল এবং নমনীয় স্লট আর্কিটেকচার সহ মডিউলার সিঙ্গল-ফাইল কম্পোনেন্টস।'
    }
  ]
};
