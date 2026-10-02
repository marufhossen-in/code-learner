import type { Lesson } from '../../../lib/types';

export const grandArchiveLesson: Lesson = {
  slug: 'the-grand-archive',
  tech: 'react',
  title: {
    en: 'React Architecture Masterclass: Profiling, Optimization & Ecosystem',
    bn: 'রিঅ্যাক্ট আর্কিটেকচার মাস্টারক্লাস: প্রোফাইলিং, অপ্টিমাইজেশন ও ইকোসিস্টেম'
  },
  summary: {
    en: 'Master comprehensive React engineering and performance optimization across 10 structured topics, from DevTools Profiler flamecharts to React 18/19 automatic batching. Learn useMemo caching, useCallback stabilization, and production readiness checklists.',
    bn: 'DevTools Profiler ফ্লেমচার্ট থেকে শুরু করে React 18 ও 19 অটোমেটিক ব্যাচিং পর্যন্ত 10 টি বিষয়ে রিঅ্যাক্ট অপ্টিমাইজেশন আয়ত্ত করুন। জানুন useMemo ক্যাশিং, useCallback রেফারেন্স স্থিরীকরণ এবং প্রোডাকশন চেকলিস্ট।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The DevTools Profiler: Measure Before Optimizing', bn: '১. DevTools Profiler: অপ্টিমাইজ করার আগে পরিমাপ করুন' } },
    {
      type: 'para',
      text: {
        en: 'Premature optimization is the root of wasted engineering time. The React DevTools Profiler records render passes, displaying Flamecharts and Ranked Charts. It highlights exactly which components rendered, how many milliseconds each render consumed, and why each component re-rendered (props changed vs parent re-rendered).',
        bn: 'পরিমাপ ছাড়া আন্দাজে অপ্টিমাইজেশন করা সময়ের অপচয়। React DevTools Profiler পুরো রেন্ডার চক্র রেকর্ড করে Flamechart এবং Ranked Chart প্রদর্শন করে। এটি পরিষ্কারভাবে দেখায় কোন কম্পোনেন্ট রেন্ডার হতে ঠিক কত মিলি-সেকেন্ড সময় নিয়েছে এবং কী কারণে রেন্ডার হয়েছে (প্রপস বদলানোর জন্য নাকি প্যারেন্ট রেন্ডার হওয়ার জন্য)।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Profiler Diagnosis Rule:
// 1. Record a user interaction (typing or clicking)
// 2. Look for yellow/red bars exceeding 16ms (60fps budget)
// 3. Inspect "Why did this render?" badge in DevTools!

console.log("Profiler rule: Never optimize code that takes under 1ms to render");
// Output: Profiler rule: Never optimize code that takes under 1ms to render`,
      caption: {
        en: 'The Profiler identifies true performance bottlenecks before reaching for memoization.',
        bn: 'প্রোফাইলার মেমোইজেশন প্রয়োগ করার আগে আসল ধীরগতির কারণ চিহ্নিত করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Component Memoization: The React.memo Shallow Pact', bn: '২. কম্পোনেন্ট মেমোইজেশন: React.memo অগভীর সমতার চুক্তি' } },
    {
      type: 'para',
      text: {
        en: 'Wrapping a component in React.memo skips re-rendering if its new props are shallowly equal (Object.is) to its previous props. However, wrapping a fast component adds comparison overhead without saving work. Use React.memo only on heavy subtrees that receive primitive or stable reference props.',
        bn: 'React.memo দিয়ে কোনো কম্পোনেন্ট মুড়ে দিলে নতুন প্রপস আগের প্রপসের অগভীর সমতুল্য (Object.is) হলে রিঅ্যাক্ট পুনরায় রেন্ডার করা এড়িয়ে যায়। তবে দ্রুত রেন্ডার হওয়া উপাদানে মেমো দিলে তুলনা করার বাড়তি সময় নষ্ট হয়। কেবল ভারী সাবট্রি এবং যেসব উপাদানে স্থির রেফারেন্স আসে, সেখানেই React.memo ব্যবহার করা যুক্তিযুক্ত।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import React, { memo } from "react";

// Heavy component wrapped in React.memo:
const ExpensiveAnalyticsChart = memo(function ExpensiveAnalyticsChart({ dataPoints, theme }) {
  console.log("Rendering expensive SVG chart lines...");
  return <div className="chart">Plotting {dataPoints.length} points in {theme} mode</div>;
});

const chart = ExpensiveAnalyticsChart({ dataPoints: [10, 20, 30], theme: "dark" });
console.log(chart.props.children[1]); // 3`,
      caption: {
        en: 'React.memo skips component execution when incoming props pass shallow equality checks.',
        bn: 'React.memo প্রপসের সমতা ঠিক থাকলে কম্পোনেন্ট পুনরায় চালানো বাদ দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Value Stabilization: The useMemo Contract', bn: '৩. মান স্থিতিশীল করা: useMemo চুক্তি' } },
    {
      type: 'para',
      text: {
        en: 'Every render executes a component function from scratch. If a calculation filters or transforms 5,000 records, repeating that work on every unrelated keystroke causes lag. useMemo(() => calculate(list), [list]) caches the computed result, recalculating only when dependencies change.',
        bn: 'প্রতিটি রেন্ডারে পুরো ফাংশনটি নতুন করে রান করে। যদি কোনো হিসাব ৫,০০০ ডেটা ফিল্টার করে, তবে প্রতিবার কি-বোর্ডে টাইপ করার সময় সেই ভারী হিসাব আবার চালানো অ্যাপকে ধীরগতির করে তোলে। useMemo(() => calculate(list), [list]) হিসাব করা মানটি ক্যাশে ধরে রাখে এবং ডিপেন্ডেন্সি বদলালেই কেবল নতুন করে হিসাব করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useMemo } from "react";

function ProductAnalytics({ rawSales, filterCategory }) {
  // Expensive calculation cached with useMemo:
  const filteredTotal = useMemo(() => {
    console.log("Recalculating sales aggregation...");
    return rawSales
      .filter((s) => s.category === filterCategory)
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [rawSales, filterCategory]);

  return <div>Category Total: \${filteredTotal}</div>;
}

const analytics = ProductAnalytics({
  rawSales: [{ category: "Books", amount: 15 }, { category: "Books", amount: 35 }],
  filterCategory: "Books"
});
console.log(analytics.props.children[1]); // 50`,
      caption: {
        en: 'useMemo caches expensive computational results between renders.',
        bn: 'useMemo বিভিন্ন রেন্ডারের মাঝখানে ভারী গণনার ফলাফল ক্যাশে জমিয়ে রাখে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Callback Stabilization: The useCallback Hook', bn: '৪. কলব্যাক স্থিতিশীল করা: useCallback হুক' } },
    {
      type: 'para',
      text: {
        en: 'In JavaScript, functions declared inside a component receive a brand-new memory reference on every render (() => {} !== () => {}). Passing an unmemoized inline function to a React.memo child breaks shallow equality, forcing it to re-render! useCallback freezes the function reference across renders.',
        bn: 'জাভাস্ক্রিপ্টে প্রতিবার রেন্ডার হওয়ার সময় ভেতরের ফাংশন সম্পূর্ণ নতুন মেমরি রেফারেন্স পায় (() => {} !== () => {})। এই নতুন ফাংশনটি কোনো React.memo চাইল্ডের কাছে পাঠালে সমতা নষ্ট হয় এবং চাইল্ডটি বাধ্য হয়ে রি-রেন্ডার হয়! useCallback ফাংশনের রেফারেন্সকে স্থির রেখে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useCallback } from "react";

function ParentWorkspace({ onSaveDocument }) {
  // Stable function reference preserved across renders:
  const handleSave = useCallback((docId) => {
    console.log("Saving document with ID:", docId);
    onSaveDocument(docId);
  }, [onSaveDocument]);

  return { handleSave };
}

const workspace = ParentWorkspace({ onSaveDocument: (id) => {} });
console.log(typeof workspace.handleSave); // "function"`,
      caption: {
        en: 'useCallback preserves function reference identity, keeping downstream memo components honest.',
        bn: 'useCallback ফাংশনের মেমরি রেফারেন্স স্থির রেখে চাইল্ড মেমোকে অটুট রাখে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Modern ES6 Foundations in React', bn: '৫. রিঅ্যাক্টে আধুনিক ES6 ভিত্তি' } },
    {
      type: 'para',
      text: {
        en: 'Mastery of React requires fluency in modern ES6 features: 1) Arrow functions (lexical this); 2) Destructuring ({ title, id }); 3) Spread and Rest operators (...props); 4) Template Literals (`btn-${variant}`); 5) Ternaries and Short-circuiting (cond && <View />).',
        bn: 'রিঅ্যাক্টে দক্ষ হতে আধুনিক ES6 ফিচারগুলো জানা আবশ্যক: ১) Arrow functions (লেক্সিকাল this); ২) Destructuring ({ title, id }); ৩) Spread ও Rest অপারেটর (...props); ৪) Template Literals (`btn-${variant}`); ৫) Ternaries ও শর্ট-সার্কিটিং (cond && <View />)।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// ES6 Spread + Destructuring in idiomatic React:
const baseProps = { size: "large", disabled: false };
const componentProps = { ...baseProps, label: "Submit Application" };

function ActionButton({ label, size, disabled }) {
  return <button className={\`btn btn-\${size}\`} disabled={disabled}>{label}</button>;
}

const btn = ActionButton(componentProps);
console.log(btn.props.className); // "btn btn-large"`,
      caption: {
        en: 'ES6 spread and template literals form the syntactic backbone of component composition.',
        bn: 'ES6 স্প্রেড এবং টেমপ্লেট লিটারেল রিঅ্যাক্ট কম্পোজিশনের মূল ভাষা হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Fatal Anti-Pattern: Declaring Components Inside Components', bn: '৬. মারাত্মক ভুল: কম্পোনেন্টের ভেতরে কম্পোনেন্ট ঘোষণা করা' } },
    {
      type: 'para',
      text: {
        en: 'NEVER declare a component function inside another component function! On every parent render, the inner component receives a BRAND-NEW function type definition. React’s diffing algorithm treats it as a completely different component, unmounting the entire subtree, destroying state, and resetting input focus.',
        bn: 'কখনোই একটি কম্পোনেন্ট ফাংশনের ভেতরে আরেকটি কম্পোনেন্ট ফাংশন ঘোষণা করবেন না! প্যারেন্ট প্রতিবার রেন্ডার হলে ভেতরের কম্পোনেন্টটি সম্পূর্ণ নতুন ক্লাস বা টাইপ হিসেবে পুনর্জন্ম নেয়। ফলে রিঅ্যাক্ট আগের পুরো সাবট্রিকে ধ্বংস করে দেয়, সমস্ত স্টেট মুছে যায় এবং ইনপুটের ফোকাস হারিয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// ❌ DISASTROUS ANTI-PATTERN:
// function ParentComponent() {
//   function ChildItem() { return <input />; } // Re-created on every render! Focus lost!
//   return <ChildItem />;
// }

// ✅ PROFESSIONAL STANDARD: Move independent components to module scope
function ChildItem({ value }) {
  return <input defaultValue={value} />;
}

function ParentComponent({ data }) {
  return <ChildItem value={data} />;
}

console.log("Module-level component declaration preserves virtual tree identity");
// Output: Module-level component declaration preserves virtual tree identity`,
      caption: {
        en: 'Declaring components at module scope guarantees stable identity during reconciliation.',
        bn: 'মডিউল স্তরে কম্পোনেন্ট ঘোষণা করলে রিকনসিলিয়েশনে উপাদানের পরিচয় অটুট থাকে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Immutability Invariant: Never Mutate State', bn: '৭. অপরিবর্তনীয়তার নিয়ম: স্টেট কখনোই মিউটেট করবেন না' } },
    {
      type: 'para',
      text: {
        en: 'Directly mutating objects or arrays in state (state.items.push(x) or user.name = "Alex") mutates the existing memory location. When React runs its shallow equality check (Object.is(oldState, newState)), it sees the identical memory pointer and skips updating the screen! Always create new references.',
        bn: 'স্টেটের অবজেক্ট বা অ্যারেকে সরাসরি মিউটেট করলে (যেমন state.items.push(x)) মেমরির একই জায়গায় পরিবর্তন ঘটে। ফলে রিঅ্যাক্ট যখন সমতা মেলাতে যায় (Object.is), সে দেখে দুই রেফারেন্স একই এবং স্ক্রিন আপডেট না করে বসে থাকে! তাই সবসময় নতুন রেফারেন্স তৈরি করে দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `const currentTodos = ["Learn JavaScript", "Learn React"];

// ✅ Immutable addition:
const nextTodos = [...currentTodos, "Master TypeScript"];

console.log(currentTodos.length); // 2 (Original state untouched!)
console.log(nextTodos.length);    // 3 (New reference generated!)`,
      caption: {
        en: 'Generating new array and object references ensures React detects state transitions.',
        bn: 'নতুন রেফারেন্স তৈরি করলে রিঅ্যাক্ট নিশ্চিতভাবে স্টেট পরিবর্তন শনাক্ত করতে পারে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. React 18 & 19 Upgrades: Automatic Batching Defaults', bn: '৮. React ১৮ ও ১৯ রূপান্তর: স্বয়ংক্রিয় ব্যাচিং' } },
    {
      type: 'para',
      text: {
        en: 'In legacy React, multiple setState calls inside setTimeout or fetch resulted in multiple separate re-renders. In React 18 and 19, Automatic Batching groups all state updates inside promises, timeouts, and native event handlers into a single consolidated re-render pass, cutting render churn in half.',
        bn: 'পুরনো রিঅ্যাক্টে setTimeout বা fetch-এর ভেতর একাধিকবার setState দিলে ততবার আলাদা আলাদা রি-রেন্ডার হতো। কিন্তু React 18 এবং 19 এ Automatic Batching সমস্ত আপডেটকে একত্র করে একটিমাত্র একক রি-রেন্ডারে সম্পন্ন করে, যার ফলে অহেতুক রেন্ডারিং অর্ধেকে নেমে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function BatchingDemo() {
  let renderPassCount = 0;

  const handleAsyncUpdate = async () => {
    await Promise.resolve();
    // React 18+ automatically batches these two updates together:
    // setCount(c => c + 1);
    // setFlag(f => !f);
    // Result: 1 single consolidated render pass!
    renderPassCount += 1;
  };

  return { handleAsyncUpdate, renderPassCount };
}

const demo = BatchingDemo();
console.log("Automatic batching reduces render passes to:", demo.renderPassCount); // 0`,
      caption: {
        en: 'Automatic batching consolidates multiple asynchronous state updates into a single render.',
        bn: 'অটোমেটিক ব্যাচিং একাধিক অ্যাসিনক্রোনাস আপডেটকে এক রেন্ডারে সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. State Decision Matrix: Local vs Global vs Server Cache', bn: '৯. স্টেট নির্বাচন ম্যাট্রিক্স: লোকাল বনাম গ্লোবাল বনাম সার্ভার ক্যাশ' } },
    {
      type: 'para',
      text: {
        en: 'Senior architects choose state tools based on data origin: 1) Local useState for form inputs and modal visibility; 2) React Context + useReducer for client-only global settings (theme, user auth). 3) TanStack Query (React Query) or SWR for remote server data (caching, deduplication, retries).',
        bn: 'অভিজ্ঞ আর্কিটেক্টরা ডেটার উৎসের ভিত্তিতে স্টেট টুল নির্বাচন করেন: ১) ফর্ম বা মডালের মতো ক্ষণস্থায়ী কাজে Local useState; ২) থিম বা লগইন সেশনের মতো ক্লায়েন্ট সেটিংসে Context + useReducer. ৩) সার্ভার ডেটার জন্য TanStack Query বা SWR (যা ক্যাশিং ও স্বয়ংক্রিয় রিফেচিং সামলায়)।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Decision Matrix Overview:
// Component UI State  -> useState / useReducer
// Subtree Shared State -> React Context
// Server API Cache     -> TanStack Query / SWR / Server Components

console.log("Architectural decision matrix matches state tools to domain lifetimes");
// Output: Architectural decision matrix matches state tools to domain lifetimes`,
      caption: {
        en: 'Choosing the correct state tool eliminates redundant boilerplate and re-render cycles.',
        bn: 'সঠিক স্টেট টুল বাছাই করলে অপ্রয়োজনীয় কোড ও রি-রেন্ডারের অপচয় দূর হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production Checklist: Mission-Critical Architecture Review', bn: '১০. প্রোডাকশন চেকলিস্ট: কোড কোয়ালিটি ও আর্কিটেকচার অডিট' } },
    {
      type: 'para',
      text: {
        en: 'Before shipping React code to production, audit against 5 core invariants. First, every list map must have a stable unique key. Second, never declare components inside another component. Third, effects must clean up subscriptions and timers. Fourth, state must never be mutated directly. Finally, profile heavy subtrees before applying memoization.',
        bn: 'প্রোডাকশনে কোড পাঠানোর আগে 5 টি মৌলিক নীতি যাচাই করুন। প্রথমত, প্রতিটি লিস্টে স্থায়ী অনন্য আইডি কি আছে। দ্বিতীয়ত, কোনো কম্পোনেন্টের ভেতর নতুন কম্পোনেন্ট ঘোষণা করা হয়নি। তৃতীয়ত, প্রতিটি ইফেক্ট টাইমার ও লিসেনার ক্লিনআপ করে। চতুর্থত, স্টেট কখনোই সরাসরি মিউটেট করা হয়নি। সবশেষে, ভারী অংশগুলো আগে প্রোফাইলার দিয়ে মেপে তবেই মেমো দেওয়া হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `const productionChecklist = [
  "Stable data keys on all mapped lists",
  "No nested component declarations",
  "Complete effect cleanup routines",
  "100% immutable state transitions",
  "Profiled memoization boundaries"
];

console.log("Production audit checkpoints verified:", productionChecklist.length); // 5`,
      caption: {
        en: 'Rigorous architectural checklists protect enterprise React applications in production.',
        bn: 'কঠোর আর্কিটেকচারাল চেকলিস্ট প্রোডাকশনে অ্যাপের দীর্ঘস্থায়ী নির্ভরযোগ্যতা নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-arc-ex1',
      kind: 'predict',
      topic: 'react: React.memo prop comparison strategy',
      question: {
        en: 'By default, what type of comparison does React.memo perform on incoming props to decide whether to skip re-rendering?',
        bn: 'রিঅ্যাক্ট রি-রেন্ডার বাদ দেবে কি না তা নির্ধারণ করতে React.memo ডিফল্টভাবে প্রপসের কী ধরনের তুলনা করে?'
      },
      code: `/* React.memo prop comparison algorithm */
/* React.memo uses ____________ equality comparison */`,
      answer: 'shallow',
      accept: ['shallow', 'shallow equality', 'shallow comparison'],
      hint: {
        en: 'It compares top-level references.',
        bn: 'এটি উপরিভাগের রেফারেন্স তুলনা করে।'
      },
      explanation: {
        en: 'React.memo performs a shallow equality check (Object.is) on previous and next props to determine if a re-render can be safely skipped.',
        bn: 'React.memo প্রপসের ওপর অগভীর সমতা (shallow equality) পরীক্ষা চালায় এবং মান অভিন্ন পেলে রেন্ডার বাদ দেয়।'
      }
    },
    {
      id: 'rea-arc-ex2',
      kind: 'mcq',
      topic: 'react: nested component declaration anti-pattern',
      question: {
        en: 'What severe bug occurs if a component function is declared inside the body of another component?',
        bn: 'একটি কম্পোনেন্ট ফাংশনের ভেতরে আরেকটি কম্পোনেন্ট ফাংশন ঘোষণা করলে কোন মারাত্মক সমস্যাটি ঘটে?'
      },
      options: [
        { en: 'The child component gets a new type on every render, causing React to completely unmount and remount it, losing state and input focus', bn: 'প্রতি রেন্ডারে চাইল্ড কম্পোনেন্ট নতুন পরিচয় পায়, ফলে রিঅ্যাক্ট এটিকে ধ্বংস করে আবার নতুন করে বানায় এবং সমস্ত স্টেট ও ইনপুট ফোকাস হারিয়ে যায়' },
        { en: 'It makes the CSS font bold', bn: 'সিএসএস ফন্ট বোল্ড হয়ে যায়' },
        { en: 'It creates a memory leak in the hard drive', bn: 'হার্ডড্রাইভে মেমরি লিক হয়' },
        { en: 'It turns off the internet connection', bn: 'ইন্টারনেট সংযোগ বন্ধ করে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Re-created on every render, losing state and focus.',
        bn: 'প্রতি রেন্ডারে পুনর্জন্ম নেয়, স্টেট ও ফোকাস মুছে যায়।'
      },
      explanation: {
        en: 'Declaring components inside other components creates a new function identity on every render, forcing React to destroy and recreate the entire DOM subtree.',
        bn: 'ভেতরে কম্পোনেন্ট লিখলে প্রতিবার নতুন রেফারেন্স তৈরি হয়, ফলে রিঅ্যাক্ট পুরো ট্রিটি ভেঙে আবার বানায় যা পারফরম্যান্স ধ্বংস করে।'
      }
    },
    {
      id: 'rea-arc-ex3',
      kind: 'mcq',
      topic: 'react: state immutability rule',
      question: {
        en: 'Why does direct state mutation (e.g. array.push() or object.prop = x) fail to trigger a re-render in React?',
        bn: 'সরাসরি স্টেট মিউটেট করলে (যেমন array.push() বা object.prop = x) রিঅ্যাক্ট কেন স্ক্রিন আপডেট বা রি-রেন্ডার করে না?'
      },
      options: [
        { en: 'Because React uses Object.is shallow comparison; mutating in place keeps the same memory reference, so React thinks nothing changed', bn: 'কারণ রিঅ্যাক্ট মেমরি রেফারেন্স (Object.is) পরীক্ষা করে; মেমরির ভেতরে মান পাল্টালেও রেফারেন্স একই থাকায় রিঅ্যাক্ট মনে করে কিছুই বদলায়নি' },
        { en: 'Because JavaScript arrays do not support push', bn: 'কারণ অ্যারেতে পুশ সাপোর্ট করে না' },
        { en: 'Because React requires TypeScript', bn: 'কারণ রিঅ্যাক্টে টাইপস্ক্রিপ্ট বাধ্যতামূলক' },
        { en: 'Because push is only allowed on the server', bn: 'কারণ পুশ শুধু সার্ভারেই চলে' }
      ],
      answer: 0,
      hint: {
        en: 'Memory reference does not change.',
        bn: 'মেমরি রেফারেন্স অপরিবর্তিত থাকে।'
      },
      explanation: {
        en: 'React checks if the new state object reference is different from the old one. In-place mutations do not change the reference, so React skips the render pass.',
        bn: 'রিঅ্যাক্ট মেমরির রেফারেন্সের পার্থক্য দেখে। ভেতরের মান বদলালেও রেফারেন্স একই থাকায় রিঅ্যাক্ট রেন্ডার না করে এড়িয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'rea-archive-quiz',
    title: { en: 'React Master Architecture Quiz', bn: 'রিঅ্যাক্ট মাস্টার আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'raq1',
        kind: 'mcq',
        topic: 'react: automatic batching in react 18',
        question: {
          en: 'How does Automatic Batching in React 18 improve rendering efficiency?',
          bn: 'React 18 এর Automatic Batching কীভাবে রেন্ডারিংয়ের কার্যক্ষমতা বৃদ্ধি করে?'
        },
        options: [
          { en: 'It groups multiple state updates inside promises, timeouts, and event handlers into a single render pass', bn: 'প্রমিজ, টাইমার বা ইভেন্ট হ্যান্ডলারের ভেতরের একাধিক স্টেট আপডেটকে একত্র করে একটিমাত্র রেন্ডারে সম্পন্ন করে' },
          { en: 'It deletes unread emails', bn: 'না পড়া ইমেইল মুছে দেয়' },
          { en: 'It turns HTML into PDF automatically', bn: 'এইচটিএমএলকে পিডিএফ বানায়' },
          { en: 'It removes all CSS stylesheets', bn: 'সিএসএস মুছে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Consolidates multiple state updates into one render.',
          bn: 'একাধিক আপডেটকে একটিমাত্র রেন্ডারে সম্পন্ন করে।'
        },
        explanation: {
          en: 'Automatic batching consolidates state updates across all contexts (including async callbacks), preventing unnecessary intermediate renders.',
          bn: 'অটোমেটিক ব্যাচিং সব ধরনের অ্যাসিনক্রোনাস আপডেটেও একাধিক রেন্ডারের অপচয় রোধ করে অ্যাপকে দ্রুত রাখে।'
        }
      },
      {
        id: 'raq2',
        kind: 'mcq',
        topic: 'react: Profiler first principle',
        question: {
          en: 'What is the primary rule before applying optimization hooks like useMemo or React.memo?',
          bn: 'useMemo বা React.memo-এর মতো অপ্টিমাইজেশন টুল ব্যবহারের আগে প্রথম ও প্রধান নিয়ম কী?'
        },
        options: [
          { en: 'Measure with the DevTools Profiler to identify genuine bottlenecks, rather than applying premature memoization blindly', bn: 'অন্ধের মতো মেমো না লাগিয়ে আগে DevTools Profiler দিয়ে মেপে আসল ধীরগতির জায়গা শনাক্ত করা' },
          { en: 'Always wrap every single function in useCallback', bn: 'প্রতিটি ফাংশন অন্ধভাবে useCallback-এ মুড়ে দেওয়া' },
          { en: 'Never use props', bn: 'কখনোই প্রপস ব্যবহার না করা' },
          { en: 'Write code in binary', bn: 'বাইনারিতে কোড লেখা' }
        ],
        answer: 0,
        hint: {
          en: 'Measure before optimizing.',
          bn: 'অপ্টিমাইজ করার আগে পরিমাপ করুন।'
        },
        explanation: {
          en: 'Unmeasured memoization adds code complexity and comparison overhead without solving real performance issues; always profile first.',
          bn: 'পরিমাপ ছাড়া মেমো দিলে কোড জটিল হয় এবং তুলনা করার বাড়তি সময় অপচয় হয়; তাই সবসময় আগে প্রোফাইলার দিয়ে মাপুন।'
        }
      },
      {
        id: 'raq3',
        kind: 'mcq',
        topic: 'react: nested component declaration anti-pattern',
        question: {
          en: 'Why is defining a component function inside another component body a critical anti-pattern?',
          bn: 'একটি কম্পোনেন্টের ভেতরে আরেকটি কম্পোনেন্ট ফাংশন ঘোষণা করা কেন একটি ক্ষতিকর অ্যান্টি-প্যাটার্ন?'
        },
        options: [
          { en: 'On every parent re-render, a new component reference is created, destroying and remounting the entire child DOM and losing its state', bn: 'প্রতি রেন্ডারে নতুন রেফারেন্স তৈরি হওয়ায় রিঅ্যাক্ট চাইল্ডের পুরো DOM ধ্বংস করে পুনরায় মাউন্ট করে এবং এর ভেতরের সমস্ত স্টেট হারিয়ে যায়' },
          { en: 'It throws a syntax error in ES6', bn: 'ES6-এ সিনট্যাক্স এরর হয়' },
          { en: 'Browsers refuse to render nested HTML', bn: 'ব্রাউজার নেস্টেড এইচটিএমএল দেখায় না' },
          { en: 'It deletes user cookies', bn: 'ব্যবহারকারীর কুকি মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Creates a new component type identity on every single render.',
          bn: 'প্রতি রেন্ডারে নতুন কম্পোনেন্ট টাইপ তৈরি হয়।'
        },
        explanation: {
          en: 'React identifies component types by reference. Declaring components inside render produces a new type on every pass, triggering an unmount/remount cycle that destroys input focus and internal state.',
          bn: 'রিঅ্যাক্ট রেফারেন্স দিয়ে কম্পোনেন্ট চেনে। রেন্ডারের ভেতর কম্পোনেন্ট লিখলে প্রতিবার নতুন টাইপ তৈরি হয়, ফলে রিঅ্যাক্ট চাইল্ডকে ধ্বংস করে নতুন করে বসায় এবং স্টেট হারিয়ে যায়।'
        }
      },
      {
        id: 'raq4',
        kind: 'mcq',
        topic: 'react: React.memo contract',
        question: {
          en: 'How does React.memo determine whether to re-render a wrapped component?',
          bn: 'React.memo কীভাবে নির্ধারণ করে যে মোড়ানো কম্পোনেন্টটি আবার রেন্ডার করা উচিত কি না?'
        },
        options: [
          { en: 'It performs a shallow equality check comparing previous props to next props, skipping re-render if they match identically', bn: 'এটি পূর্ববর্তী ও পরবর্তী প্রপসের মধ্যে অগভীর সমতা তুলনা করে এবং মিল থাকলে রি-রেন্ডার বাদ দেয়' },
          { en: 'It checks if the user is scrolling', bn: 'ব্যবহারকারী স্ক্রোল করছে কি না দেখে' },
          { en: 'It runs the component at 60 frames per second', bn: 'প্রতি সেকেন্ডে ৬০ ফ্রেম গতিতে চালায়' },
          { en: 'It compresses component source code', bn: 'কম্পোনেন্টের কোড ছোট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Shallow equality comparison of props.',
          bn: 'প্রপসের অগভীর সমতা তুলনা।'
        },
        explanation: {
          en: 'React.memo performs Object.is comparisons on each prop. If all prop primitives and references match the prior render, the component execution is safely skipped.',
          bn: 'React.memo প্রতিটি প্রপসের অগভীর তুলনা করে। আগের রেন্ডারের সাথে প্রপসের মান বা রেফারেন্স মিলে গেলে রিঅ্যাক্ট কম্পোনেন্টটি পুনরায় চালানো এড়িয়ে যায়।'
        }
      }
    ]
  }
};
