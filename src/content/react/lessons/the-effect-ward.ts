import type { Lesson } from '../../../lib/types';

export const effectWardLesson: Lesson = {
  slug: 'the-effect-ward',
  tech: 'react',
  title: {
    en: 'React Effects: useEffect, Lifecycles, Cleanups & Race Conditions',
    bn: 'রিঅ্যাক্ট ইফেক্টস: useEffect, লাইফসাইকেল, ক্লিনআপ ও রেস কন্ডিশন'
  },
  summary: {
    en: 'Master React side effects across 10 structured topics, from external synchronization to dependency rules. Learn cleanup mechanics, race condition mitigation with AbortController, and StrictMode remount resilience.',
    bn: 'বহিরাগত সিস্টেমের সাথে যোগাযোগ থেকে শুরু করে ডিপেন্ডেন্সির নিয়ম পর্যন্ত 10 টি সুসংগঠিত বিষয়ে সাইড ইফেক্টস আয়ত্ত করুন। জানুন ক্লিনআপের কৌশল, AbortController দিয়ে রেস কন্ডিশন রোধ এবং StrictMode রিমাউন্ট প্রস্তুতি।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-state-vault',
    title: {
      en: 'The State Vault: useReducer, Context & Global Dispatch Architecture',
      bn: 'স্টেট ভল্ট: useReducer, Context ও গ্লোবাল ডিসপ্যাচ আর্কিটেকচার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Side Effect Concept: Synchronizing External Systems', bn: '১. সাইড ইফেক্ট কী: বহিরাগত সিস্টেমের সাথে সিঙ্ক করা' } },
    {
      type: 'para',
      text: {
        en: 'A React component’s main body should be a pure calculation of JSX. Any operation that reaches outside the component—fetching data over HTTP, subscribing to browser sockets, setting timers, or manually touching the DOM—is a Side Effect. The `useEffect` hook bridges your component with these external non-React systems.',
        bn: 'রিঅ্যাক্ট কম্পোনেন্টের মূল বডির কাজ শুধুই হিসাব করে JSX ফেরত দেওয়া। কম্পোনেন্টের সীমানার বাইরে যায় এমন যেকোনো কাজ—যেমন এপিআই থেকে ডেটা আনা, ওয়েবসকেটে যুক্ত হওয়া, টাইমার চালানো বা সরাসরি DOM-এ হাত দেওয়া—হলো Side Effect। `useEffect` হুকের মাধ্যমে রিঅ্যাক্ট বাইরের এই অ-রিঅ্যাক্ট সিস্টেমগুলোর সাথে যোগাযোগ বজায় রাখে।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useEffect } from "react";

function DocumentTitleUpdater({ pageTitle }) {
  // Synchronizing with browser document title (an external system):
  useEffect(() => {
    document.title = \`\${pageTitle} | CodeShikhon\`;
  }, [pageTitle]);

  return <h2>Active Page: {pageTitle}</h2>;
}

const title = DocumentTitleUpdater({ pageTitle: "React Fundamentals" });
console.log(title.props.children[1]); // "React Fundamentals"`,
      caption: {
        en: 'useEffect runs after browser paint to synchronize state with external browser APIs.',
        bn: 'ব্রাউজারে রেন্ডার হওয়ার পর useEffect বাইরের ব্রাউজার এপিআই আপডেট করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Lifecycle Timeline: Render, Commit, and Passive Paint', bn: '২. লাইফসাইকেল টাইমলাইন: রেন্ডার, কমিট এবং প্যাসিভ পেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'React breaks execution into three distinct phases: 1) Render: React calls your component to calculate the new virtual DOM; 2) Commit: React writes changes to the actual browser DOM nodes. 3) Passive Effects: After the browser paints pixels on screen, React executes useEffect callbacks asynchronously without blocking UI interactions.',
        bn: 'রিঅ্যাক্টের কাজের ধারা ৩টি নির্দিষ্ট ধাপে বিভক্ত: ১) Render: রিঅ্যাক্ট ফাংশন ডেকে নতুন ভার্চুয়াল ডম তৈরি করে; ২) Commit: রিঅ্যাক্ট আসল ব্রাউজার DOM-এ প্রয়োজনীয় পরিবর্তন লিখে দেয়। ৩) Passive Effects: ব্রাউজার স্ক্রিনে ছবি এঁকে ফেলার পর রিঅ্যাক্ট ব্যবহারকারীর টাচ বা টাইপিং না আটকিয়ে পটভূমিতে useEffect চালায়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Execution Order:
// 1. Component function executes -> JSX returned
// 2. React commits mutations to the DOM
// 3. Browser paints pixels on screen
// 4. useEffect callback executes!

console.log("Phase sequence: Render -> Commit -> Paint -> useEffect");
// Output: Phase sequence: Render -> Commit -> Paint -> useEffect`,
      caption: {
        en: 'useEffect executes asynchronously after the browser paints, ensuring non-blocking UI rendering.',
        bn: 'স্ক্রিনে পেইন্ট হওয়ার পর useEffect চলায় ব্রাউজারের ব্যবহার আটকে যায় না।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Dependency Array: The Exhaustive Deps Rule', bn: '৩. ডিপেন্ডেন্সি অ্যারে: সমস্ত নির্ভরতার সত্য তালিকা' } },
    {
      type: 'para',
      text: {
        en: 'The second argument of useEffect is the Dependency Array. You must honestly declare every reactive value (props, state, or functions derived from them) referenced inside the effect. Omitting dependencies creates stale closure bugs where the effect reads outdated data.',
        bn: 'useEffect-এর দ্বিতীয় আর্গুমেন্টটি হলো Dependency Array বা নির্ভরতার তালিকা। ইফেক্টের ভেতরে ব্যবহৃত সমস্ত পরিবর্তনশীল মান (props, state বা ফাংশন) এই তালিকায় অবশ্যই উল্লেখ করতে হয়। কোনো নির্ভরতা লুকিয়ে রাখলে ইফেক্ট পুরনো ডেটা ধরে বসে থাকে এবং মারাত্মক ভুলের সৃষ্টি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useEffect } from "react";

function UserProfile({ userId, onDataLoaded }) {
  useEffect(() => {
    // Both userId and onDataLoaded are referenced inside the effect:
    console.log("Fetching profile for user ID:", userId);
    onDataLoaded({ id: userId, verified: true });
  }, [userId, onDataLoaded]); // ✅ Exhaustive dependencies declared!

  return <div>Profile Inspector</div>;
}

let loaded = null;
UserProfile({ userId: "usr-42", onDataLoaded: (d) => { loaded = d; } });
console.log("Profile data loaded status:", loaded ? "Success" : "Pending");
// Output: Profile data loaded status: Success`,
      caption: {
        en: 'All variables read inside the effect must be included in the dependency list.',
        bn: 'ইফেক্টের ভেতরে ব্যবহৃত প্রতিটি ভ্যারিয়েবলকে ডিপেন্ডেন্সি তালিকায় থাকতে হবে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Dependency Patterns: Always, Once, or On Change', bn: '৪. ডিপেন্ডেন্সি প্যাটার্ন: প্রতিবার, একবার, নাকি পরিবর্তনে' } },
    {
      type: 'para',
      text: {
        en: 'The dependency array controls effect timing: 1) Omitted array: runs after EVERY single render (rarely desired); 2) Empty array []: runs ONCE after the initial component mount. 3) Populated array [a, b]: runs only when values change across renders according to Object.is equality.',
        bn: 'ডিপেন্ডেন্সি তালিকার ৩টি রূপ রয়েছে: ১) তালিকা একেবারেই না দিলে: প্রতিটি রেন্ডারের পরই ইফেক্ট চলে (যা সাধারণত চাওয়া হয় না); ২) ফাঁকা তালিকা [] দিলে: কম্পোনেন্টটি পর্দায় আসার পর কেবল প্রথমবার রান করে। ৩) নির্দিষ্ট মান [a, b] দিলে: তালিকার কোনো মান বদলালেই কেবল ইফেক্টটি পুনরায় চলে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// 1. Runs after every render (No array):
// useEffect(() => { console.log("Rendered!"); });

// 2. Runs once on mount (Empty array):
// useEffect(() => { setupGlobalListener(); }, []);

// 3. Runs only when productId changes:
function ProductWatcher({ productId }) {
  useEffect(() => {
    console.log("Re-subscribing to live inventory for product:", productId);
  }, [productId]);

  return <span>Product #{productId}</span>;
}

ProductWatcher({ productId: "PROD-99" });
// Output: Re-subscribing to live inventory for product: PROD-99`,
      caption: {
        en: 'Empty arrays run on mount only; populated arrays trigger on shallow dependency change.',
        bn: 'ফাঁকা তালিকা শুধু শুরুতে চলে; মানযুক্ত তালিকা পরিবর্তন শনাক্ত হলে পুনরায় চলে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Cleanup Function: Tearing Down Resources', bn: '৫. ক্লিনআপ ফাংশন: রিসোর্স মুক্ত ও বন্ধ করা' } },
    {
      type: 'para',
      text: {
        en: 'If your effect creates an ongoing subscription, starts a timer, or attaches a DOM event listener, you must return a Cleanup Function. React calls this cleanup function right before the component unmounts AND right before re-executing the effect with new dependencies, preventing memory leaks.',
        bn: 'আপনার ইফেক্ট যদি কোনো টাইমার চালায়, ইভেন্ট লিসেনার লাগায় বা সকেট সংযোগ খোলে, তবে ইফেক্টের ভেতর থেকে একটি Cleanup Function ফেরত দিতে হবে। কম্পোনেন্টটি স্ক্রিন থেকে বিদায় নেওয়ার সময় এবং নতুন মান নিয়ে ইফেক্ট পুনরায় চলার ঠিক আগে রিঅ্যাক্ট এই ক্লিনআপ কল করে মেমরি পরিষ্কার করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useEffect } from "react";

function WindowResizeTracker({ onResize }) {
  useEffect(() => {
    const handleResize = () => onResize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // ✅ Cleanup function returned:
    return () => {
      console.log("Cleaning up window resize listener");
      window.removeEventListener("resize", handleResize);
    };
  }, [onResize]);

  return <span>Resize tracker mounted</span>;
}

console.log(typeof WindowResizeTracker); // "function"`,
      caption: {
        en: 'Returning a cleanup callback ensures event listeners and timers are cleanly unhooked.',
        bn: 'ক্লিনআপ ফাংশন ফেরত দিলে অপ্রয়োজনীয় লিসেনার বা টাইমার মেমরি দখল করে থাকে না।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Network Race Conditions: The Active Flag & AbortController', bn: '৬. নেটওয়ার্ক রেস কন্ডিশন: অ্যাক্টিভ ফ্ল্যাগ ও AbortController' } },
    {
      type: 'para',
      text: {
        en: 'If a user rapidly switches between tabs, request #1 (slow) might resolve AFTER request #2 (fast), overwriting fresh data with stale results! Use a boolean ignore flag in the cleanup function or attach an AbortController to cancel superseded network requests.',
        bn: 'ব্যবহারকারী যদি দ্রুত বিভিন্ন ট্যাবে ক্লিক করেন, তবে রিকোয়েস্ট 1 (ধীর) হয়তো রিকোয়েস্ট 2 (দ্রুত) এর পরে এসে সঠিক ডেটাকে ঢেকে দিতে পারে! এর সমাধান হলো ক্লিনআপ ফাংশনের ভেতর একটি boolean ignore ফ্ল্যাগ রাখা অথবা AbortController দিয়ে বাতিল হওয়া রিকোয়েস্ট বন্ধ করে দেওয়া।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function SearchResult({ query }) {
  useEffect(() => {
    let isCurrent = true;

    async function fetchData() {
      const result = await Promise.resolve(\`Results for \${query}\`);
      // Only commit state if this effect execution is still current:
      if (isCurrent) {
        console.log("Committed search results:", result);
      }
    }
    fetchData();

    // If query changes before response arrives, cleanup sets isCurrent = false:
    return () => {
      isCurrent = false;
    };
  }, [query]);

  return <div>Searching...</div>;
}

SearchResult({ query: "Node.js" });
// Output: Committed search results: Results for Node.js`,
      caption: {
        en: 'The boolean active flag pattern prevents stale out-of-order network responses from corrupting UI state.',
        bn: 'অ্যাক্টিভ ফ্ল্যাগ প্যাটার্ন পুরনো এপিআই রেসপন্স দিয়ে নতুন ডেটা নষ্ট হওয়া ঠেকায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Stale Closure Trap: Functional State Updaters', bn: '৭. স্টেল ক্লোজার ফাঁদ: ফাংশনাল স্টেট আপডেটার' } },
    {
      type: 'para',
      text: {
        en: 'When an effect sets up a timer (setInterval), referencing state directly (setCount(count + 1)) captures the count value from the initial render forever! The counter increments to 1 and halts. The solution is the Functional Updater form: setCount((prev) => prev + 1), which reads the freshest state from React’s internal queue.',
        bn: 'ইফেক্টের ভেতর টাইমার (setInterval) চালালে সরাসরি স্টেট ব্যবহার করলে (setCount(count + 1)) তা প্রথম রেন্ডারের পুরনো মানকে চিরতরে আটকে ফেলে! ফলে কাউন্টার ১ হয়ে থেমে থাকে। এর সমাধান হলো Functional Updater: setCount((prev) => prev + 1), যা রিঅ্যাক্টের কিউ থেকে সরাসরি সর্বশেষ মানটি এনে বৃদ্ধি করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useState, useEffect } from "react";

function HeartbeatCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // ❌ Stale Closure: setCount(seconds + 1) captures seconds = 0 forever!
      // ✅ Functional Updater: Always accesses the freshest queued value
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Safe empty deps because we use the functional updater!

  return <span>Seconds: {seconds}</span>;
}

console.log(typeof HeartbeatCounter); // "function"`,
      caption: {
        en: 'Functional state updaters eliminate stale closures and allow cleaner dependency arrays.',
        bn: 'ফাংশনাল আপডেটার পুরনো মান আটকে থাকার সমস্যা দূর করে ডিপেন্ডেন্সি পরিষ্কার রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Anti-Patterns: When NOT to Use useEffect', bn: '৮. অ্যান্টি-প্যাটার্ন: কখন useEffect ব্যবহার করবেন না' } },
    {
      type: 'para',
      text: {
        en: 'Do not use useEffect to calculate derived data that can be computed during render (e.g. calculating total from cart items). Setting state inside useEffect causes a wasted second render pass and visible screen flickering. If a value can be calculated from existing props and state, calculate it directly in the component body.',
        bn: 'এমন কোনো হিসাব করার জন্য useEffect ব্যবহার করবেন না যা সরাসরি রেন্ডারের সময়ই বের করা সম্ভব (যেমন পণ্যের দাম থেকে মোট বিল বের করা)। ইফেক্টের ভেতর স্টেট বদলালে অনর্থক দ্বিতীয়বার রি-রেন্ডার হয় এবং পর্দা কেঁপে ওঠে। বিদ্যমান ডেটা থেকে হিসাব করা গেলে তা সরাসরি কম্পোনেন্টের বডিতে বের করে নিন।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// ❌ BAD: Redundant state and wasted re-render pass
// const [items, setItems] = useState([10, 20]);
// const [total, setTotal] = useState(0);
// useEffect(() => { setTotal(items.reduce((a, b) => a + b, 0)); }, [items]);

// ✅ GOOD: Derived directly in render body with zero effects!
function ShoppingTotal({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return <strong>Total: \${total}</strong>;
}

const bill = ShoppingTotal({ items: [{ price: 40 }, { price: 60 }] });
console.log(bill.props.children[1]); // "$100"`,
      caption: {
        en: 'Derived values belong in the render calculation, not inside reactive effects.',
        bn: 'উৎপাদিত মান সরাসরি রেন্ডারের হিসাবের অংশ, ইফেক্টের ভেতরের কাজ নয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Synchronous DOM Measurement: useLayoutEffect', bn: '৯. সিঙ্ক্রোনাস ডম পরিমাপ: useLayoutEffect' } },
    {
      type: 'para',
      text: {
        en: 'While useEffect runs asynchronously after the browser paints, useLayoutEffect runs SYNCHRONOUSLY after React mutates the DOM, BEFORE the browser paints. Use it when measuring element dimensions (getBoundingClientRect) or adjusting scroll positions to prevent visual layout shifts.',
        bn: 'useEffect যেখানে ব্রাউজার পেইন্ট করার পর চলে, useLayoutEffect সেখানে ব্রাউজার পেইন্ট করার ঠিক আগেই সম্পূর্ণ সিঙ্ক্রোনাসভাবে চলে। কোনো এলিমেন্টের সঠিক আকার বা পজিশন মেপে স্ক্রিন কেঁপে ওঠা বন্ধ করতে (যেমন পপআপ বা টুলটিপ পজিশনিংয়ে) useLayoutEffect ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useLayoutEffect, useRef } from "react";

function TooltipPopup({ targetX }) {
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    // Executes synchronously before browser paints to prevent visual jump:
    if (tooltipRef.current) {
      console.log("Measuring and positioning tooltip before paint");
    }
  }, [targetX]);

  return <div ref={tooltipRef} className="tooltip">Helper Info</div>;
}

console.log(typeof TooltipPopup); // "function"`,
      caption: {
        en: 'useLayoutEffect fires synchronously before paint, eliminating visual layout jitter.',
        bn: 'useLayoutEffect স্ক্রিনে আঁকার আগেই চলে পজিশন ঠিক করে ঝাঁকুনি বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. StrictMode Resilience: Double-Mounting Stress Tests', bn: '১০. StrictMode সহনশীলতা: ডেভেলপমেন্টে ডাবল-মাউন্টের মহড়া' } },
    {
      type: 'para',
      text: {
        en: 'In React 18+ development mode with StrictMode enabled, React deliberately mounts, unmounts, and immediately remounts every component once. This intentional stress test exposes missing cleanup functions, dangling socket connections, and accidental duplicate event subscriptions before deployment.',
        bn: 'React ১৮+ এর StrictMode-এ ডেভেলপমেন্ট করার সময় রিঅ্যাক্ট ইচ্ছাকৃতভাবে প্রতি কম্পোনেন্টকে একবার মাউন্ট করে, সাথে সাথে আনমাউন্ট করে আবার মাউন্ট করে। এই পরীক্ষার মাধ্যমে কোনো ইফেক্টে ক্লিনআপ বাদ পড়েছে কি না বা ডুপ্লিকেট কানেকশন রয়ে গেছে কি না তা ডেভেলপমেন্টেই সহজে ধরা পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// In Development Mode with <React.StrictMode>:
// 1. Component mounts -> Effect executes
// 2. StrictMode simulates unmount -> Cleanup executes!
// 3. Component remounts -> Effect executes again!

// If your effect properly cleans up its resources, state remains 100% stable:
console.log("StrictMode cleanup verification passed");
// Output: StrictMode cleanup verification passed`,
      caption: {
        en: 'React StrictMode verifies that components survive immediate unmount/remount cycles.',
        bn: 'StrictMode নিশ্চিত করে যে কম্পোনেন্ট তাৎক্ষণিক বন্ধ ও পুনরায় চালু হলে কোনো ক্র্যাশ হবে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-eff-ex1',
      kind: 'predict',
      topic: 'react: useEffect timing phase',
      question: {
        en: 'In the React render lifecycle, does useEffect execute synchronously before the browser paints or asynchronously after paint?',
        bn: 'রিঅ্যাক্ট রেন্ডার সাইকেলে useEffect কি ব্রাউজারের পেইন্ট করার আগে সিঙ্ক্রোনাসভাবে চলে নাকি পেইন্টের পরে অ্যাসিনক্রোনাসভাবে চলে?'
      },
      code: `/* useEffect execution timing relative to paint */
/* useEffect runs ______________ paint */`,
      answer: 'after',
      accept: ['after', 'after paint'],
      hint: {
        en: 'It runs after the screen is painted.',
        bn: 'পর্দায় আঁকা হয়ে যাওয়ার পর এটি চলে।'
      },
      explanation: {
        en: 'useEffect is a passive effect that executes asynchronously after the browser paints, ensuring user interactions are not blocked.',
        bn: 'useEffect ব্রাউজারে পেইন্ট শেষ হওয়ার পর অ্যাসিনক্রোনাসভাবে চলে যাতে ব্যবহারকারীর ইন্টারঅ্যাকশন আটকে না যায়।'
      }
    },
    {
      id: 'rea-eff-ex2',
      kind: 'mcq',
      topic: 'react: state stale closure fix',
      question: {
        en: 'How do you fix a stale closure bug when updating state inside a setInterval callback?',
        bn: 'setInterval-এর ভেতর স্টেট আপডেট করার সময় স্টেল ক্লোজার বাগ কীভাবে সমাধান করা হয়?'
      },
      options: [
        { en: 'Use the functional updater form: setCount(prev => prev + 1)', bn: 'ফাংশনাল আপডেটার রূপ ব্যবহার করে: setCount(prev => prev + 1)' },
        { en: 'Restart the computer', bn: 'কম্পিউটার রিস্টার্ট দিয়ে' },
        { en: 'Convert the component to an arrow function', bn: 'কম্পোনেন্ট অ্যারো ফাংশন বানিয়ে' },
        { en: 'Remove all dependencies from package.json', bn: 'package.json খালি করে' }
      ],
      answer: 0,
      hint: {
        en: 'Use (prev => prev + 1).',
        bn: '(prev => prev + 1) ব্যবহার করুন।'
      },
      explanation: {
        en: 'The functional updater setCount(prev => ...) always receives the latest state value from React, resolving stale closures in asynchronous callbacks.',
        bn: 'ফাংশনাল আপডেটার সবসময় রিঅ্যাক্টের কিউ থেকে সর্বশেষ মান নিয়ে কাজ করায় পুরনো মান আটকে থাকার ভয় থাকে না।'
      }
    },
    {
      id: 'rea-eff-ex3',
      kind: 'mcq',
      topic: 'react: useLayoutEffect use-case',
      question: {
        en: 'When should a developer choose useLayoutEffect over standard useEffect?',
        bn: 'একজন ডেভেলপার কখন সাধারণ useEffect-এর বদলে useLayoutEffect বেছে নেবেন?'
      },
      options: [
        { en: 'When measuring DOM element dimensions or synchronizing scroll position synchronously before paint to prevent visual layout flicker', bn: 'পেইন্টের আগেই সিঙ্ক্রোনাসভাবে DOM-এর মাপ বা স্ক্রল পজিশন পরিমাপ করে স্ক্রিনে ঝাঁকুনি রোধ করতে' },
        { en: 'To download large image files', bn: 'বড় ছবি ডাউনলোড করতে' },
        { en: 'When writing CSS modules', bn: 'সিএসএস মডিউল লিখতে' },
        { en: 'To deploy the app to production', bn: 'প্রোডাকশনে অ্যাপ পাঠাতে' }
      ],
      answer: 0,
      hint: {
        en: 'Runs synchronously before paint for DOM measurement.',
        bn: 'DOM পরিমাপের জন্য পেইন্টের আগে সিঙ্ক্রোনাসভাবে চলে।'
      },
      explanation: {
        en: 'useLayoutEffect executes synchronously between DOM mutation and screen paint, allowing layout measurements without visual flickering.',
        bn: 'useLayoutEffect ডম পরিবর্তনের ঠিক পরপরই এবং স্ক্রিনে দেখানোর আগে রান করে, যার ফলে লেআউট পরিমাপে কোনো ঝাঁকুনি হয় না।'
      }
    }
  ],
  quiz: {
    id: 'rea-effects-quiz',
    title: { en: 'React useEffect & Lifecycles Quiz', bn: 'রিঅ্যাক্ট useEffect ও লাইফসাইকেল কুইজ' },
    questions: [
      {
        id: 'req1',
        kind: 'mcq',
        topic: 'react: effect cleanup timing',
        question: {
          en: 'When does React invoke an effect’s cleanup function?',
          bn: 'রিঅ্যাক্ট কখন একটি ইফেক্টের ক্লিনআপ ফাংশনটি কল করে?'
        },
        options: [
          { en: 'Before unmounting, and immediately before re-executing the effect with changed dependencies', bn: 'কম্পোনেন্ট বিদায় নেওয়ার আগে, এবং নতুন নির্ভরতা নিয়ে ইফেক্ট আবার চলার ঠিক আগে' },
          { en: 'Only when the browser window closes', bn: 'শুধু ব্রাউজার উইন্ডো বন্ধ হলে' },
          { en: 'Every 60 seconds', bn: 'প্রতি ৬০ সেকেন্ড পর' },
          { en: 'Never', bn: 'কখনোই নয়' }
        ],
        answer: 0,
        hint: {
          en: 'Before unmount and before next effect run.',
          bn: 'আনমাউন্টের আগে এবং পরের ইফেক্ট চলার আগে।'
        },
        explanation: {
          en: 'React executes the returned cleanup callback before applying new effects and when the component is removed from the DOM.',
          bn: 'নতুন কোনো ইফেক্ট কার্যকর করার আগে এবং কম্পোনেন্ট মুছে ফেলার মুহূর্তে রিঅ্যাক্ট আগের ক্লিনআপ চালায়।'
        }
      },
      {
        id: 'req2',
        kind: 'mcq',
        topic: 'react: network race condition defense',
        question: {
          en: 'Why is an active/ignore boolean flag used in fetch effects?',
          bn: 'ফেচ ইফেক্টের ভেতর একটি active/ignore ফ্ল্যাগ কেন ব্যবহৃত হয়?'
        },
        options: [
          { en: 'To discard slow, outdated network responses if a newer request was dispatched while the first was in-flight', bn: 'আগের ধীরগতির রেসপন্স যেন পরের নতুন রিকোয়েস্টের ডেটাকে ঢেকে না দেয় তা নিশ্চিত করে পুরনো ডেটা বর্জন করতে' },
          { en: 'To make the network request run twice', bn: 'রিকোয়েস্ট দুইবার চালাতে' },
          { en: 'To compress JSON payloads', bn: 'জেসন কম্প্রেস করতে' },
          { en: 'To bypass HTTPS certificates', bn: 'সার্টিফিকেট এড়িয়ে যেতে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents out-of-order responses.',
          bn: 'ক্রমভঙ্গ হওয়া রেসপন্স প্রতিরোধ করে।'
        },
        explanation: {
          en: 'The ignore flag ensures that if the dependency changes before a fetch finishes, the stale response is ignored and cannot corrupt component state.',
          bn: 'ইগনোর ফ্ল্যাগ নিশ্চিত করে যে নতুন ডেটা চলে আসার পর পুরনো দেরিতে আসা ডেটা যেন স্ক্রিনে ভুল করে রেন্ডার না হয়।'
        }
      },
      {
        id: 'req3',
        kind: 'mcq',
        topic: 'react: missing dependency array',
        question: {
          en: 'What occurs when you omit the dependency array completely from useEffect(fn)?',
          bn: 'useEffect(fn) থেকে ডিপেন্ডেন্সি অ্যারে পুরোপুরি বাদ দিলে কী ঘটে?'
        },
        options: [
          { en: 'The effect callback runs after every single render pass, including the initial mount and every re-render', bn: 'প্রথম মাউন্ট এবং প্রতিটি রি-রেন্ডার সহ প্রতিবার রেন্ডার শেষ হওয়ার পরপরই ইফেক্টটি চলতে থাকে' },
          { en: 'The effect runs only once on initial mount', bn: 'ইফেক্টটি কেবল শুরুতে একবারই চলে' },
          { en: 'The effect never executes', bn: 'ইফেক্টটি কখনো চলে না' },
          { en: 'React throws a fatal runtime exception', bn: 'রিঅ্যাক্ট একটি মারাত্মক এরর দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'No array means no dependency check to gate execution.',
          bn: 'অ্যারে না থাকার অর্থ কোনো শর্ত ছাড়াই প্রতিবার চলা।'
        },
        explanation: {
          en: 'Without a dependency array, React cannot check if variables changed, so it re-runs the effect after every render pass.',
          bn: 'ডিপেন্ডেন্সি অ্যারে না দিলে কোনো কিছু যাচাই করার সুযোগ থাকে না, ফলে প্রতি রেন্ডারের পরই ইফেক্টটি নির্বাহ হয়।'
        }
      },
      {
        id: 'req4',
        kind: 'mcq',
        topic: 'react: StrictMode remount in development',
        question: {
          en: 'Why does React StrictMode remount components and execute effects twice in development mode?',
          bn: 'ডেভেলপমেন্ট মোডে React StrictMode কেন কম্পোনেন্ট রিমাউন্ট করে এবং ইফেক্ট দুইবার চালায়?'
        },
        options: [
          { en: 'To reveal missing cleanup handlers, unclosed subscriptions, and memory leaks before shipping to production', bn: 'প্রোডাকশনে যাওয়ার আগেই ভুলে বাদ পড়া ক্লিনআপ, বন্ধ না হওয়া সাবস্ক্রিপশন এবং মেমোরি লিক শনাক্ত করতে' },
          { en: 'To test internet connection latency', bn: 'ইন্টারনেট গতি পরীক্ষা করতে' },
          { en: 'To warm up CPU caches', bn: 'সিপিইউ ক্যাশ গরম করতে' },
          { en: 'It is a known browser bug', bn: 'এটি একটি ব্রাউজার বাগ' }
        ],
        answer: 0,
        hint: {
          en: 'Mount -> Unmount -> Mount verifies cleanup completeness.',
          bn: 'মাউন্ট -> আনমাউন্ট -> মাউন্ট চক্র ক্লিনআপের পূর্ণতা যাচাই করে।'
        },
        explanation: {
          en: 'StrictMode simulates an immediate remount in development to guarantee that your setup and cleanup functions are symmetrical and resilient.',
          bn: 'StrictMode ডেভেলপমেন্টে সাথে সাথে রিমাউন্ট ঘটিয়ে নিশ্চিত করে যে সেটআপ ও ক্লিনআপ ফাংশন একে অপরের বিপরীত ও নিখুঁতভাবে কাজ করছে।'
        }
      }
    ]
  }
};
