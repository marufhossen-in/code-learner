import type { Lesson } from '../../../lib/types';

export const suspenseGalleryLesson: Lesson = {
  slug: 'the-suspense-gallery',
  tech: 'react',
  title: {
    en: 'React Suspense & Transitions: Concurrent Rendering, Lazy & startTransition',
    bn: 'রিঅ্যাক্ট সাসপেন্স ও ট্রানজিশন: কনকারেন্ট রেন্ডারিং, Lazy ও startTransition'
  },
  summary: {
    en: 'Master concurrent React and async UI orchestration across 10 structured topics, from concurrent rendering to Suspense boundaries. Learn React.lazy code-splitting, useTransition state priorities, useDeferredValue, and Error Boundaries.',
    bn: 'কনকারেন্ট রেন্ডারিং থেকে শুরু করে Suspense বাউন্ডারি পর্যন্ত 10 টি বিষয়ে রিঅ্যাক্ট অ্যাসিনক্রোনাস UI আয়ত্ত করুন। জানুন React.lazy কোড স্প্লিটিং, useTransition প্রায়োরিটি, useDeferredValue এবং Error Boundary সুরক্ষা।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-form-press',
    title: {
      en: 'React Forms & Actions: Controlled Inputs, useActionState & Optimistic UI',
      bn: 'রিঅ্যাক্ট ফর্ম ও অ্যাকশনস: নিয়ন্ত্রিত ইনপুট, useActionState ও অপটিমিস্টিক UI'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Concurrent Architecture: Urgent vs Non-Urgent Work', bn: '১. কনকারেন্ট আর্কিটেকচার: জরুরি বনাম অ-জরুরি কাজ' } },
    {
      type: 'para',
      text: {
        en: 'In legacy React, once rendering started, it could not be paused. If rendering a 10,000-item table took 150ms, typing in an input froze completely! Concurrent React introduces interruptible rendering: urgent user interactions (typing, clicking) interrupt background rendering of non-urgent heavy views, keeping the page buttery-smooth.',
        bn: 'পুরনো রিঅ্যাক্টে একবার রেন্ডার শুরু হলে তা মাঝপথে থামানো যেত না। ফলে 10,000 লাইনের টেবিল রেন্ডার হতে 150ms লাগলে ইনপুট বক্সে টাইপ করা সম্পূর্ণ আটকে যেত! আধুনিক Concurrent React নিয়ে এসেছে খণ্ডনযোগ্য রেন্ডারিং: জরুরি কাজ (যেমন টাইপ বা ক্লিক) চলাকালীন পেছনের ভারী রেন্ডার সাময়িক থেমে থাকে, ফলে টাইপিং থাকে মসৃণ।'
      }
    },
    {
      type: 'visual',
      id: 'react-render'
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Urgent Work: Typing in input field (must update in 16ms / 60fps)
// Non-urgent Work: Filtering 10,000 search results (can yield without lag)

console.log("Concurrent scheduler partitions updates by human priority");
// Output: Concurrent scheduler partitions updates by human priority`,
      caption: {
        en: 'Concurrent React prioritizes human responsiveness over background computation.',
        bn: 'কনকারেন্ট রিঅ্যাক্ট ব্যাকগ্রাউন্ড গণনার চেয়ে মানুষের টাইপিং প্রতিক্রিয়াকে অগ্রাধিকার দেয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Dynamic Code-Splitting: React.lazy()', bn: '২. ডায়নামিক কোড-স্প্লিটিং: React.lazy() হুক' } },
    {
      type: 'para',
      text: {
        en: 'Shipping a massive single JavaScript bundle forces users on slow networks to wait seconds before the first pixel renders. React.lazy() enables Dynamic Code-Splitting: it delays loading heavy components (like rich text editors or analytics charts) until the exact moment they are needed.',
        bn: 'পুরো ওয়েবসাইটের সব কোড একটিমাত্র বিশাল ফাইলে পাঠালে ধীরগতির ইন্টারনেটে পেজ খুলতে অনেক সময় লাগে। React.lazy() ডায়নামিক কোড স্প্লিটিং সুবিধা দেয়: এটি ভারী উপাদানগুলোকে (যেমন রিচ টেক্সট এডিটর বা চার্ট) আলাদা ছোট ফাইলে রাখে এবং স্ক্রিনে প্রয়োজন না হওয়া পর্যন্ত ডাউনলোড করে না।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import React, { lazy } from "react";

// Dynamic asynchronous import of heavy chart library:
const HeavyChart = lazy(() => Promise.resolve({
  default: function MockChart({ dataPoints }) {
    return <div className="chart">Rendered {dataPoints} points</div>;
  }
}));

console.log(typeof HeavyChart); // "object" (Special LazyExoticComponent)`,
      caption: {
        en: 'React.lazy delays script execution until the component is actively rendered.',
        bn: 'React.lazy কম্পোনেন্ট পর্দায় না আসা পর্যন্ত স্ক্রিপ্ট ডাউনলোড ও রান করা পিছিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Suspense Boundary: Orchestrating Pending States', bn: '৩. সাসপেন্স বাউন্ডারি: অপেক্ষার দৃশ্য সমন্বয় করা' } },
    {
      type: 'para',
      text: {
        en: 'When a lazy component is requested, it throws an internal promise into the React tree. The nearest parent <Suspense fallback={<Spinner />}> catches that promise, displaying the fallback skeleton until the bundle chunk downloads, after which React swaps in the real component automatically.',
        bn: 'যখন কোনো অলস (lazy) কম্পোনেন্ট চাওয়া হয়, তখন সেটি রিঅ্যাক্ট ট্রিতে একটি প্রমিজ ছুড়ে দেয়। সবচেয়ে কাছের অভিভাবক <Suspense fallback={<Spinner />}> সেই প্রমিজটি লুফে নিয়ে ডাউনলোডের সময়টুকু পর্যন্ত ফলব্যাক স্পিনার দেখায়; ডাউনলোড শেষ হলে নিজে থেকেই আসল কম্পোনেন্ট বসিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import React, { Suspense } from "react";

function DashboardView() {
  return (
    <div className="dashboard">
      <h2>Executive Analytics</h2>
      {/* Suspense boundary traps lazy component download: */}
      <Suspense fallback={<div className="skeleton-loader">Loading Chart...</div>}>
        <HeavyChart dataPoints={500} />
      </Suspense>
    </div>
  );
}

const view = DashboardView();
console.log(view.props.children[1].props.fallback.props.children); // "Loading Chart..."`,
      caption: {
        en: 'Suspense boundaries declarative catch asynchronous dependencies without manual flags.',
        bn: 'সাসপেন্স বাউন্ডারি কোনো ম্যানুয়াল ফ্ল্যাগ ছাড়াই অ্যাসিনক্রোনাস কাজগুলোকে ডিক্লারেটিভভাবে সামলায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Granular Fallbacks vs Giant Spinners', bn: '৪. সূক্ষ্ম ফলব্যাক বনাম পুরো পেজের স্পিনার' } },
    {
      type: 'para',
      text: {
        en: 'Wrapping the entire application in a single root Suspense boundary causes the whole screen to go blank whenever any sub-component loads. Best practice is Granular Boundaries: place individual Suspense wrappers around independent widgets (Sidebar, Feed, Profile), letting ready widgets render immediately.',
        bn: 'পুরো অ্যাপকে একটিমাত্র সাসপেন্স বাউন্ডারির ভেতর রাখলে যেকোনো ছোট অংশ লোড হতে গিয়ে পুরো পর্দা ফাঁকা হয়ে স্পিনার ঘুরতে থাকে। এর সেরা সমাধান হলো Granular Boundaries: প্রতিটি স্বাধীন উইজেটের (যেমন সাইডবার, ফিড, প্রোফাইল) চারপাশে আলাদা সাসপেন্স রাখা, যাতে যেটি আগে রেডি হবে সেটি সাথে সাথে স্ক্রিনে ফুটে ওঠে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function PortalLayout() {
  return (
    <div className="portal-grid">
      {/* Independent boundary 1 */}
      <Suspense fallback={<span>Loading Navigation...</span>}>
        <nav>Navigation Ready</nav>
      </Suspense>

      {/* Independent boundary 2 */}
      <Suspense fallback={<span>Loading Main Feed...</span>}>
        <main>Feed Content Ready</main>
      </Suspense>
    </div>
  );
}

console.log("Granular Suspense layout initialized with parallel loading streams");
// Output: Granular Suspense layout initialized with parallel loading streams`,
      caption: {
        en: 'Granular boundaries allow parts of the UI to pop in progressively without locking the page.',
        bn: 'আলাদা আলাদা বাউন্ডারি ব্যবহারের ফলে পুরো পেজ না আটকে রেখে দ্রুত ডেটা দেখানো যায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Smooth State Transitions: useTransition and startTransition', bn: '৫. মসৃণ স্টেট ট্রানজিশন: useTransition ও startTransition' } },
    {
      type: 'para',
      text: {
        en: 'When a state update triggers heavy filtering or tab switching, wrapping it in startTransition(() => setTab(newTab)) marks the update as Non-Urgent. If the user clicks another tab while the previous transition is rendering, React discards the outdated work and jumps immediately to the newest click.',
        bn: 'ভারী ফিল্টারিং বা ট্যাব বদলানোর সময় কোডটিকে startTransition(() => setTab(newTab))-এর ভেতর রাখলে রিঅ্যাক্ট সেটিকে নন-জরুরি কাজ হিসেবে চিহ্নিত করে। ব্যবহারকারী যদি রেন্ডার শেষ হওয়ার আগেই অন্য ট্যাবে ক্লিক করেন, তবে রিঅ্যাক্ট আগের অর্ধেক হওয়া কাজ ফেলে দিয়ে সাথে সাথে নতুন ক্লিকের কাজে নেমে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useState, useTransition } from "react";

function TabContainer() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabSwitch = (nextTab) => {
    // Non-urgent interruptible update:
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return { tab, isPending, handleTabSwitch };
}

const tabs = TabContainer();
console.log("Initial transition state:", tabs.isPending); // false`,
      caption: {
        en: 'startTransition flags state transitions as interruptible by newer user inputs.',
        bn: 'startTransition স্টেট পরিবর্তনকে খণ্ডনযোগ্য করে নতুন ইনপুটকে অগ্রাধিকার দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The isPending Indicator: Feedback During Background Work', bn: '৬. isPending নির্দেশক: পেছনের কাজের সময় ব্যবহারকারীকে জানানো' } },
    {
      type: 'para',
      text: {
        en: 'The useTransition hook returns a boolean flag: isPending. While the background transition is rendering, isPending is true. You can use it to dim the existing UI or show an inline spinner without destroying the current view with a jarring full-screen fallback.',
        bn: 'useTransition হুক একটি বুলিয়ান মান ফেরত দেয়: isPending। ব্যাকগ্রাউন্ডে যখন ট্রানজিশন চলতে থাকে, তখন isPending সত্য (true) থাকে। পুরো স্ক্রিন ফাঁকা না করে বর্তমান লেখার রং হালকা করে বা পাশে একটি ছোট স্পিনার দেখিয়ে ব্যবহারকারীকে জানানো যায় যে কাজ চলছে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `function TabButton({ isActive, isPending, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ opacity: isPending ? 0.6 : 1 }}
      className={isActive ? "active" : ""}
    >
      {label} {isPending && "(Updating...)"}
    </button>
  );
}

const btn = TabButton({ isActive: true, isPending: true, label: "Analytics" });
console.log(btn.props.children[0]); // "Analytics"
console.log(btn.props.style.opacity); // 0.6 (Dimmed while pending!)`,
      caption: {
        en: 'isPending provides immediate visual feedback while the current view remains interactive.',
        bn: 'isPending ব্যবহারকারীকে অবিলম্বে জানান দেয় কিন্তু চলমান পৃষ্ঠাটি ব্যবহারের উপযোগী রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Deferring Heavy Subtrees: useDeferredValue', bn: '৭. ভারী সাবট্রি পিছিয়ে দেওয়া: useDeferredValue' } },
    {
      type: 'para',
      text: {
        en: 'When a component receives a rapid stream of props from a parent, driving an expensive list can stutter the UI. Wrapping the parameter in `useDeferredValue(query)` creates a lag-friendly clone that lets urgent typing stay buttery-smooth while the list catches up in background passes.',
        bn: 'যখন কোনো কম্পোনেন্ট প্যারেন্ট থেকে দ্রুত পরিবর্তনশীল মান পায়, তখন বিশাল তালিকা ফিল্টার করার কারণে UI আটকে যেতে পারে। `useDeferredValue(query)` ব্যবহার করলে একটি নিয়ন্ত্রিত বিলম্বিত মান পাওয়া যায়, যা ইনপুটকে মসৃণ রেখে নিচের তালিকাকে সুবিধাজনক সময়ে আপডেট হতে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { useDeferredValue } from "react";

function HeavySearchResults({ rawQuery }) {
  // rawQuery updates immediately on every keystroke;
  // deferredQuery updates in background when main thread is idle:
  const deferredQuery = useDeferredValue(rawQuery);

  return (
    <div className="search-results">
      Filtering records matching: "{deferredQuery}"
    </div>
  );
}

console.log(typeof HeavySearchResults); // "function"`,
      caption: {
        en: 'useDeferredValue de-prioritizes re-rendering downstream components until typing pauses.',
        bn: 'useDeferredValue টাইপ থামার আগ পর্যন্ত নিচের উপাদানের ভারী রেন্ডার পিছিয়ে রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Uncaught Crash Protection: Error Boundaries', bn: '৮. ক্র্যাশ প্রতিরোধ প্রাচীর: Error Boundaries' } },
    {
      type: 'para',
      text: {
        en: 'A JavaScript error in one component should not crash the entire web application. An Error Boundary is a class component implementing componentDidCatch (or using react-error-boundary) that traps errors in its child tree, logs the crash, and displays a graceful fallback UI.',
        bn: 'অ্যাপের কোনো একটি ছোট অংশে জাভাস্ক্রিপ্ট এরর হলে পুরো ওয়েবসাইট ক্র্যাশ করে সাদা হয়ে যাওয়া উচিত নয়। Error Boundary হলো একটি বিশেষ কম্পোনেন্ট যা তার ভেতরের চাইল্ডদের সমস্ত ক্র্যাশ লুফে নেয়, এরর লগ করে এবং পুরো স্ক্রিন নষ্ট না করে সেখানে একটি সুন্দর বিকল্প বার্তা প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `class ErrorBoundaryMock {
  constructor() {
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  renderFallback(fallbackUI, children) {
    if (this.state.hasError) {
      return fallbackUI;
    }
    return children;
  }
}

const boundary = new ErrorBoundaryMock();
boundary.state = ErrorBoundaryMock.getDerivedStateFromError(new Error("Database disconnected"));
console.log("Boundary intercepted error:", boundary.state.error.message);
// Output: Boundary intercepted error: Database disconnected`,
      caption: {
        en: 'Error boundaries isolate component crashes, protecting the rest of the application.',
        bn: 'এরর বাউন্ডারি নির্দিষ্ট অংশের ক্র্যাশ আটকে বাকি অ্যাপ্লিকেশনকে সচল রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Escaping the DOM Hierarchy: Portals with createPortal', bn: '৯. ডম কাঠামোর বাইরে রেন্ডার: createPortal দিয়ে পোর্টাল' } },
    {
      type: 'para',
      text: {
        en: 'Modals, tooltips, and floating menus often suffer from CSS overflow: hidden or z-index clipping if rendered inside deeply nested parent divs. createPortal(jsx, document.body) renders the child DOM node directly under document.body while preserving React event bubbling through the virtual tree.',
        bn: 'মডাল, ড্রপডাউন বা টুলটিপ গভীর কোনো ডিভের ভেতর থাকলে প্রায়ই প্যারেন্টের overflow: hidden বা z-index-এর কারণে কেটে যায়। createPortal(jsx, document.body) উপাদানটিকে সরাসরি বডির নিচে রেন্ডার করে দেয়, তবে রিঅ্যাক্টের ভার্চুয়াল ট্রি দিয়ে ইভেন্ট বাবলিং আগের মতোই স্বাভাবিকভাবে চলতে থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `import { createPortal } from "react-dom";

function ModalDialog({ isOpen, title, children }) {
  if (!isOpen) return null;

  // Teleports DOM output to document.body, escaping CSS clipping:
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>,
    document.body
  );
}

console.log(typeof createPortal); // "function"`,
      caption: {
        en: 'createPortal teleports DOM rendering to arbitrary target containers outside parent styling.',
        bn: 'createPortal প্যারেন্টের সিএসএস সীমানা এড়িয়ে উপাদানকে বাইরে রেন্ডার করতে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Streaming Server Architecture: Progressive HTML Delivery', bn: '১০. স্ট্রিমিং সার্ভার আর্কিটেকচার: ধাপে ধাপে এইচটিএমএল প্রেরণ' } },
    {
      type: 'para',
      text: {
        en: 'In React 18+ Streaming SSR, the server does not wait for all database queries to complete before sending the page. Fast components stream initial HTML to the browser immediately; slow components wrapped in <Suspense> stream their fallback skeletons first, and then stream the finished HTML chunks and hydrate inline.',
        bn: 'React ১৮+ এর Streaming SSR-এ সমস্ত ডেটাবেস কোয়েরি শেষ হওয়া পর্যন্ত সার্ভার বসে থাকে না। দ্রুত প্রস্তুত হওয়া অংশগুলো সাথে সাথে ব্রাউজারে পাঠিয়ে দেওয়া হয়; আর <Suspense>-এ মোড়ানো ধীরগতির অংশগুলোর জন্য প্রথমে স্কেলেটন যায় এবং ডেটা রেডি হলে সার্ভার তা পুশ করে ইনলাইনে রূপান্তর করে।'
      }
    },
    {
      type: 'code',
      lang: 'jsx',
      code: `// Modern React 18 Server Pipeline:
// 1. Initial shell HTML streams instantly (Header, Navigation, Skeletons)
// 2. Slow database widgets stream in real-time as chunks resolve
// 3. Selective Hydration activates buttons even before the entire page finishes!

console.log("Streaming SSR pipeline delivers progressive time-to-first-byte");
// Output: Streaming SSR pipeline delivers progressive time-to-first-byte`,
      caption: {
        en: 'Streaming SSR delivers fast initial page loads while deferring heavy data dependencies.',
        bn: 'স্ট্রিমিং SSR দ্রুত পৃষ্ঠা লোড নিশ্চিত করে ভারী ডেটাকে ধাপে ধাপে স্ক্রিনে পৌঁছে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'rea-sus-ex1',
      kind: 'predict',
      topic: 'react: startTransition priority',
      question: {
        en: 'Does startTransition mark a state update as urgent and blocking, or non-urgent and interruptible?',
        bn: 'startTransition কি স্টেট আপডেটকে জরুরি ও ব্লকিং হিসেবে চিহ্নিত করে, নাকি অ-জরুরি ও খণ্ডনযোগ্য হিসেবে চিহ্নিত করে?'
      },
      code: `/* startTransition update priority classification */
/* Updates wrapped in startTransition are: ____________ */`,
      answer: 'interruptible',
      accept: ['interruptible', 'non-urgent', 'non-urgent and interruptible'],
      hint: {
        en: 'It can be interrupted by newer input.',
        bn: 'নতুন ইনপুট এলে এটি থামানো যায়।'
      },
      explanation: {
        en: 'startTransition marks updates as non-urgent and interruptible, allowing urgent interactions like typing or clicking to preempt background rendering.',
        bn: 'startTransition কাজকে অ-জরুরি চিহ্নিত করায় ব্যবহারকারী টাইপ বা ক্লিক করলে ব্যাকগ্রাউন্ড রেন্ডার সাময়িক স্থগিত হতে পারে।'
      }
    },
    {
      id: 'rea-sus-ex2',
      kind: 'mcq',
      topic: 'react: React.lazy requirement',
      question: {
        en: 'What wrapper element is required above a React.lazy component to prevent runtime unhandled promise errors?',
        bn: 'একটি React.lazy কম্পোনেন্টের উপরে কোনো বাউন্ডারি না থাকলে ক্র্যাশ হওয়া এড়াতে কোন র্যাপারটি থাকা বাধ্যতামূলক?'
      },
      options: [
        { en: '<Suspense fallback={...}>', bn: '<Suspense fallback={...}>' },
        { en: '<div style={{ overflow: "hidden" }}>', bn: '<div style={{ overflow: "hidden" }}>' },
        { en: '<Fragment>', bn: '<Fragment>' },
        { en: '<ErrorBoundary>', bn: '<ErrorBoundary>' }
      ],
      answer: 0,
      hint: {
        en: 'Suspense catches lazy promises.',
        bn: 'সাসপেন্স অলস প্রমিজগুলোকে ধরে।'
      },
      explanation: {
        en: 'A React.lazy component throws a promise while loading; a Suspense boundary catches this promise and displays the fallback UI until downloading finishes.',
        bn: 'React.lazy উপাদান লোড হওয়ার সময় প্রমিজ ছুড়ে দেয়, যা কেবল Suspense বাউন্ডারি দিয়েই হ্যান্ডল করে ফলব্যাক দেখানো সম্ভব।'
      }
    },
    {
      id: 'rea-sus-ex3',
      kind: 'mcq',
      topic: 'react: createPortal advantage',
      question: {
        en: 'Why is createPortal used when rendering modal dialogs and tooltips?',
        bn: 'মডাল ডায়ালগ বা টুলটিপ প্রদর্শনের সময় createPortal কেন ব্যবহার করা হয়?'
      },
      options: [
        { en: 'It mounts the DOM nodes directly under document.body to escape parent CSS overflow and z-index clipping, while keeping React event bubbling intact', bn: 'প্যারেন্টের সিএসএস overflow ও z-index-এর কাটাকুটি এড়াতে উপাদানটি সরাসরি document.body-তে বসায় কিন্তু রিঅ্যাক্ট ইভেন্ট প্রবাহ ঠিক রাখে' },
        { en: 'It makes network requests run through a VPN', bn: 'ভিপিএন দিয়ে রিকোয়েস্ট পাঠায়' },
        { en: 'It prevents using CSS completely', bn: 'সিএসএস ব্যবহার বন্ধ করে' },
        { en: 'It runs Node.js scripts in the client', bn: 'ক্লায়েন্টে Node.js চালায়' }
      ],
      answer: 0,
      hint: {
        en: 'Escapes CSS clipping while preserving React events.',
        bn: 'সিএসএস ক্লিপিং এড়ায় কিন্তু রিঅ্যাক্ট ইভেন্ট অক্ষত রাখে।'
      },
      explanation: {
        en: 'createPortal teleports DOM nodes outside the host div to avoid clipping while preserving React’s synthetic event tree bubbling.',
        bn: 'createPortal উপাদানের আসল DOM-কে বাইরে পাঠিয়ে সিএসএস জটিলতা দূর করে এবং রিঅ্যাক্ট ইভেন্টের যোগাযোগ বহাল রাখে।'
      }
    }
  ],
  quiz: {
    id: 'rea-suspense-quiz',
    title: { en: 'React Suspense & Transitions Quiz', bn: 'রিঅ্যাক্ট সাসপেন্স ও ট্রানজিশন কুইজ' },
    questions: [
      {
        id: 'ruq1',
        kind: 'mcq',
        topic: 'react: useDeferredValue utility',
        question: {
          en: 'What is the primary benefit of useDeferredValue in input-driven list filtering?',
          bn: 'ইনপুট ভিত্তিক তালিকা ফিল্টারিংয়ে useDeferredValue ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          { en: 'It keeps the text input immediately responsive to typing while deferring the expensive list calculation to idle moments', bn: 'ইনপুট বক্সে টাইপিং সম্পূর্ণ মসৃণ ও দ্রুত রাখে এবং নিচের ভারী তালিকার হিসাবকে সুবিধাজনক অবসরে পিছিয়ে দেয়' },
          { en: 'It encrypts input keystrokes', bn: 'কী-স্ট্রোক এনক্রিপ্ট করে' },
          { en: 'It restarts the database server', bn: 'ডেটাবেস রিস্টার্ট দেয়' },
          { en: 'It converts arrays to strings', bn: 'অ্যারেকে স্ট্রিংয়ে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Keeps typing smooth by deferring expensive renders.',
          bn: 'ভারী রেন্ডার পিছিয়ে দিয়ে টাইপিং গতিশীল রাখে।'
        },
        explanation: {
          en: 'useDeferredValue allows React to delay re-rendering non-critical subtrees until the main thread finishes handling urgent typing events.',
          bn: 'useDeferredValue মূল থ্রেডে জরুরি টাইপিং শেষ না হওয়া পর্যন্ত কম গুরুত্বপূর্ণ সাবট্রির রেন্ডার পিছিয়ে রাখে।'
        }
      },
      {
        id: 'ruq2',
        kind: 'mcq',
        topic: 'react: granular suspense benefit',
        question: {
          en: 'Why are multiple granular Suspense boundaries preferred over a single top-level boundary?',
          bn: 'পুরো অ্যাপে একটিমাত্র টপ-লেভেল বাউন্ডারির বদলে একাধিক সূক্ষ্ম (granular) Suspense বাউন্ডারি কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          { en: 'It allows independent sections of the screen to pop in as soon as they are ready, instead of hiding the whole page behind one giant spinner', bn: 'পুরো পেজকে একটিমাত্র বিশালাকার স্পিনারের আড়ালে না রেখে বিভিন্ন অংশ রেডি হওয়ার সাথে সাথে একের পর এক স্বাধীনভাবে ফুটে উঠতে দেয়' },
          { en: 'It makes CSS load twice as fast', bn: 'সিএসএস দ্বিগুণ দ্রুত লোড করে' },
          { en: 'It disables JavaScript in production', bn: 'জাভাস্ক্রিপ্ট বন্ধ করে' },
          { en: 'It eliminates all React hooks', bn: 'সব হুক মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Independent widgets pop in progressively.',
          bn: 'স্বাধীন উইজেটগুলো ধাপে ধাপে ফুটে ওঠে।'
        },
        explanation: {
          en: 'Granular boundaries isolate loading fallbacks, ensuring fast-loading components appear immediately without waiting for slower peers.',
          bn: 'আলাদা বাউন্ডারি ব্যবহারের ফলে দ্রুত ডেটা পাওয়া উপাদানগুলো অন্যদের জন্য অপেক্ষা না করে অবিলম্বে প্রদর্শিত হতে পারে।'
        }
      },
      {
        id: 'ruq3',
        kind: 'mcq',
        topic: 'react: urgent vs transition updates',
        question: {
          en: 'What distinguishes urgent state updates from non-urgent transitions wrapped in startTransition?',
          bn: 'startTransition-এ মোড়ানো সাধারণ ট্রানজিশনের সাথে জরুরি স্টেট আপডেটের মূল পার্থক্য কী?'
        },
        options: [
          { en: 'Urgent updates (typing, clicking) process with immediate priority, whereas transitions can be interrupted by newer user inputs', bn: 'জরুরি আপডেট (টাইপ, ক্লিক) সর্বোচ্চ অগ্রাধিকার নিয়ে অবিলম্বে চলে, আর ট্রানজিশনগুলো পরবর্তী ইনপুট দ্বারা খণ্ডিত হতে পারে' },
          { en: 'Transitions run in Node.js server workers', bn: 'ট্রানজিশন সার্ভার ওয়ার্কারে চলে' },
          { en: 'Urgent updates cannot update component state', bn: 'জরুরি আপডেট স্টেট বদলাতে পারে না' },
          { en: 'Transitions pause execution for exactly 5 seconds', bn: 'ট্রানজিশন ঠিক 5 সেকেন্ড থেমে থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Urgent interactions interrupt non-urgent transitions.',
          bn: 'জরুরি মিথস্ক্রিয়া কম জরুরি ট্রানজিশনকে থামিয়ে দিতে পারে।'
        },
        explanation: {
          en: 'Concurrent React prioritizes user feedback like typing. If the user presses another key while a transition is rendering in background, React abandons the stale work and begins rendering the new state.',
          bn: 'কনকারেন্ট রিঅ্যাক্ট টাইপিংয়ের মতো ব্যবহারকারীর কাজকে সর্বোচ্চ প্রাধান্য দেয়। ব্যাকগ্রাউন্ডে ট্রানজিশন চলার সময় নতুন কি-স্ট্রোক এলে রিঅ্যাক্ট পুরনো রেন্ডার ফেলে দিয়ে নতুন রেন্ডার শুরু করে।'
        }
      },
      {
        id: 'ruq4',
        kind: 'mcq',
        topic: 'react: React.lazy code splitting',
        question: {
          en: 'How does React.lazy() optimize web application performance?',
          bn: 'React.lazy() কীভাবে ওয়েব অ্যাপ্লিকেশনের পারফরম্যান্স অপ্টিমাইজ করে?'
        },
        options: [
          { en: 'It defers loading a component’s JavaScript bundle until the moment it is first rendered on screen', bn: 'স্ক্রিনে প্রথম রেন্ডার হওয়ার আগ পর্যন্ত কোনো কম্পোনেন্টের জাভাস্ক্রিপ্ট বান্ডেল ডাউনলোড করা পিছিয়ে রাখে' },
          { en: 'It converts React JSX to WebAssembly', bn: 'JSX কে ওয়েবঅ্যাসেম্বলিতে রূপান্তর করে' },
          { en: 'It removes unused CSS classes from disk', bn: 'ডিস্ক থেকে অব্যবহৃত সিএসএস মুছে দেয়' },
          { en: 'It eliminates the need for build tools', bn: 'বিল্ড টুলের প্রয়োজনীয়তা বাদ দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Dynamic import on demand.',
          bn: 'প্রয়োজনের মুহূর্তে ডায়নামিক ইমপোর্ট।'
        },
        explanation: {
          en: 'React.lazy leverages dynamic import() expressions to split huge monolithic bundles into bite-sized chunks, dramatically reducing initial page load time.',
          bn: 'React.lazy ডায়নামিক ইমপোর্টের সুবিধা নিয়ে বিশাল কোডবেসকে ছোট ছোট ভাগে ভাগ করে, যা প্রাথমিক পেজ লোডের সময় অনেক কমিয়ে দেয়।'
        }
      }
    ]
  }
};
