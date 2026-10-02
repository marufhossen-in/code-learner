import type { Lesson } from '../../../lib/types';

export const emergencyCourtLesson: Lesson = {
  slug: 'the-emergency-court',
  tech: 'nextjs',
  title: {
    en: 'Error Handling & Fault Boundaries — error.tsx, notFound & Fallbacks',
    bn: 'এরর হ্যান্ডলিং ও ফল্ট বাউন্ডারিজ — error.tsx, notFound ও ফলব্যাক'
  },
  summary: {
    en: 'Next.js isolates runtime exceptions using granular React Error Boundaries. In this lesson, you will master segment-level error handling with error.tsx, recover from transient failures using the reset function, catch root layout crashes with global-error.tsx, and trigger deliberate 404 pages using not-found.tsx and the notFound function.',
    bn: 'Next.js সূক্ষ্ম রিঅ্যাক্ট এরর বাউন্ডারির সাহায্যে রানটাইম ত্রুটিগুলোকে পুরো সাইট থেকে আলাদা রাখে। এই পাঠে আপনি error.tsx দিয়ে সেগমেন্ট-ভিত্তিক এরর হ্যান্ডলিং, reset ফাংশন দিয়ে পুনরায় রেন্ডার করার কৌশল, global-error.tsx দিয়ে রুট লেআউটের ক্র্যাশ সামলানো এবং notFound ফাংশন দিয়ে ৪০৪ পেজ তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'error-handling-architecture-overview',
      text: {
        en: 'The Segment Error Boundary Architecture',
        bn: 'সেগমেন্ট এরর বাউন্ডারি আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When a runtime exception occurs in your application during server rendering or client hydration, Next.js contains the failure to the nearest segment boundary. Placing an error.tsx file inside a folder automatically wraps the nested page in a React Error Boundary. Surrounding parent layouts, navigation menus, and footers remain completely functional and interactive.',
        bn: 'যখন সার্ভার রেন্ডারিং বা ক্লায়েন্ট হাইড্রেটিংয়ের সময় আপনার অ্যাপ্লিকেশনে কোনো অপ্রত্যাশিত ত্রুটি ঘটে, তখন Next.js সেই ত্রুটিকে নিকটতম সেগমেন্টের ভেতরে সীমাবদ্ধ রাখে। কোনো ফোল্ডারে error.tsx ফাইল রাখলে তা সংশ্লিষ্ট পেজটিকে একটি রিঅ্যাক্ট এরর বাউন্ডারিতে ঘিরে নেয়। এর ফলে চারপাশের প্যারেন্ট লেআউট, মেনুবার এবং ফুটার পুরোপুরি সচল ও ব্যবহারযোগ্য থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'error.tsx',
          def: {
            en: 'A required Client Component ("use client") wrapping a route segment in a React Error Boundary to isolate runtime crashes.',
            bn: 'একটি আবশ্যক ক্লায়েন্ট কম্পোনেন্ট যা কোনো রুট সেগমেন্টকে রিঅ্যাক্ট এরর বাউন্ডারিতে মুড়িয়ে ত্রুটি অন্য পেজে ছড়ানো রোধ করে।'
          }
        },
        {
          term: 'reset() Function',
          def: {
            en: 'A recovery callback passed to error.tsx that re-renders the error boundary contents to attempt recovery without a full page reload.',
            bn: 'error.tsx-এ সরবরাহ করা একটি রিকভারি ফাংশন যা পুরো পেজ রিফ্রেশ না করেই ত্রুটিযুক্ত অংশটি পুনরায় রেন্ডার করার চেষ্টা করে।'
          }
        },
        {
          term: 'global-error.tsx',
          def: {
            en: 'A specialized error boundary placed at app/global-error.tsx to catch failures occurring inside the root layout itself.',
            bn: 'একটি বিশেষ এরর বাউন্ডারি যা মূল রুট লেআউটের (layout.tsx) অভ্যন্তরীণ যেকোনো ব্যর্থতা সামলাতে নিজস্ব html ও body ট্যাগসহ কাজ করে।'
          }
        },
        {
          term: 'notFound() & not-found.tsx',
          def: {
            en: 'A programmatic trigger throwing a NEXT_NOT_FOUND error to render the nearest custom 404 UI component.',
            bn: 'একটি প্রোগ্রাম্যাটিক ফাংশন যা কোনো রিসোর্স না পাওয়া গেলে নিকটস্থ কাস্টম ৪০৪ ইউআই রেন্ডার করে সঠিক এইচটিটিপি স্ট্যাটাস দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'error-boundaries-matrix',
      text: {
        en: 'Error Boundary Files and Exception Scope Matrix',
        bn: 'এরর বাউন্ডারি ফাইল ও এক্সেপশন পরিধি ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Special Error File', bn: 'বিশেষ ফাইলের নাম' },
        { en: 'Execution Environment', bn: 'কোথায় কার্যকর হয়' },
        { en: 'Scope of Fault Isolation', bn: 'ত্রুটি বিচ্ছিন্নতার পরিধি' }
      ],
      rows: [
        [
          { en: 'app/blog/error.tsx', bn: 'app/blog/error.tsx' },
          { en: 'Client Component ("use client")', bn: 'ক্লায়েন্ট কম্পোনেন্ট ("use client")' },
          { en: 'Catches crashes in blog/page.tsx; keeps blog/layout.tsx alive', bn: 'blog/page.tsx ক্র্যাশ সামলায়; লেআউট পুরোপুরি সচল রাখে' }
        ],
        [
          { en: 'app/global-error.tsx', bn: 'app/global-error.tsx' },
          { en: 'Client Component (must render <html>)', bn: 'ক্লায়েন্ট কম্পোনেন্ট (নিজস্ব <html> আবশ্যক)' },
          { en: 'Catches critical failures inside the root app/layout.tsx', bn: 'মূল রুট লেআউটের ভেতরের মারাত্মক ক্র্যাশ সামলায়' }
        ],
        [
          { en: 'app/not-found.tsx', bn: 'app/not-found.tsx' },
          { en: 'Server Component (or Client)', bn: 'সার্ভার কম্পোনেন্ট (বা ক্লায়েন্ট)' },
          { en: 'Triggered when notFound() is invoked or route does not exist', bn: 'notFound() ডাকলে বা অজানা রুটে ঢুকলে ৪০৪ দেখায়' }
        ],
        [
          { en: 'loading.tsx', bn: 'loading.tsx' },
          { en: 'React Suspense fallback', bn: 'রিঅ্যাক্ট সাসপেন্স ফলব্যাক' },
          { en: 'Renders streaming skeleton while page data resolves', bn: 'ডাটা আসার আগ পর্যন্ত লোডিং কঙ্কাল প্রদর্শন করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'error-boundary-simulation-code',
      text: {
        en: 'Working Error Boundary and Recovery Simulation',
        bn: 'কার্যকরী এরর বাউন্ডারি ও রিকভারি সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js Route Error Boundary and Reset Recovery
class MockErrorBoundaryContainer {
  constructor() {
    this.hasError = false;
    this.errorMessage = null;
    this.renderAttempts = 0;
  }

  // Simulates executing the child page component
  renderChild(shouldFail) {
    this.renderAttempts += 1;
    if (shouldFail) {
      this.hasError = true;
      this.errorMessage = 'Failed to fetch inventory from database';
      return { status: 500, ui: 'ErrorBoundaryFallback: ' + this.errorMessage };
    }
    this.hasError = false;
    this.errorMessage = null;
    return { status: 200, ui: '<ProductPage inventory="35" />' };
  }

  // Simulates the reset() function provided by Next.js
  reset(retrySuccess) {
    return this.renderChild(!retrySuccess);
  }
}

const container = new MockErrorBoundaryContainer();

// 1. First render attempt fails: error boundary activates
const failedRun = container.renderChild(true);

// 2. User clicks "Try Again" button: reset executes successfully
const recoveredRun = container.reset(true);

console.log('Initial run error status:', failedRun.status);
// -> Initial run error status: 500
console.log('Initial run fallback UI:', failedRun.ui.slice(0, 20));
// -> Initial run fallback UI: ErrorBoundaryFallbac
console.log('Total render attempts executed:', container.renderAttempts);
// -> Total render attempts executed: 2
console.log('Recovered run status code:', recoveredRun.status);
// -> Recovered run status code: 200`,
      caption: {
        en: 'Error boundary catches status 500 failure and recovers to status 200 on attempt 2',
        bn: 'এরর বাউন্ডারি ৫০০ স্ট্যাটাসের ত্রুটি সামলাচ্ছে এবং ২য় চেষ্টায় ২০০ স্ট্যাটাসে সফল হচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'error-handling-best-practices',
      text: {
        en: 'Error Boundary and Fault Isolation Best Practices',
        bn: 'এরর বাউন্ডারি ও ফল্ট আইসোলেশন সেরা অনুশীলন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To build resilient web applications, place error boundaries at the deepest folder level possible. Deep placement prevents a failure in an optional widget from breaking the surrounding screen. Always log the error digest identifier to telemetry systems like Sentry, as Next.js automatically assigns a hash to help developers correlate client errors with server error logs.',
        bn: 'একটি নির্ভরযোগ্য ওয়েব অ্যাপ্লিকেশন তৈরি করতে এরর বাউন্ডারিগুলোকে যথাসম্ভব ফোল্ডার ট্রির গভীরে রাখুন। এটি নিশ্চিত করে যে একটি ছোট উইজেট নষ্ট হলেও পুরো পেজ ভেঙে পড়বে না। আর ক্লায়েন্টে এররের বিস্তারিত না দেখিয়ে নেক্সট.জেএস-এর দেওয়া digest হ্যাশ লগ করুন, যা দিয়ে সার্ভার লগের সাথে সমস্যা মিলিয়ে দ্রুত সমাধান করা যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. error.tsx Must Be "use client": React Error Boundaries require client lifecycle hooks; always add "use client" at the top of error.tsx.',
          bn: '১. error.tsx-এ "use client" আবশ্যক: রিঅ্যাক্ট এরর বাউন্ডারি ক্লায়েন্ট লাইফসাইকেলে চলে; তাই error.tsx-এর শুরুতে "use client" দিন।'
        },
        {
          en: '2. Deep Placement for Isolation: Place error.tsx inside specific child folders (e.g. app/dashboard/billing) rather than only at the root.',
          bn: '২. গভীরে বাউন্ডারি স্থাপন: ত্রুটি আলাদা রাখতে কেবল রুটে না রেখে নির্দিষ্ট সাব-ফোল্ডারে (যেমন app/dashboard/billing) error.tsx রাখুন।'
        },
        {
          en: '3. Include Own HTML in global-error: app/global-error.tsx replaces the root layout on crash; it must define its own <html> and <body> tags.',
          bn: '৩. global-error-এ নিজস্ব html: global-error.tsx রুট লেআউটের বিকল্প হিসেবে আসে; তাই এতে নিজস্ব <html> ও <body> ট্যাগ থাকা বাধ্যতামূলক।'
        },
        {
          en: '4. Trigger 404 via notFound(): Call notFound() inside server components when an item query returns null to render not-found.tsx cleanly.',
          bn: '৪. notFound() দিয়ে ৪০৪ রেন্ডার: ডাটাবেজে তথ্য না পেলে সার্ভার কম্পোনেন্টে notFound() ডাকুন যাতে সুন্দরভাবে not-found.tsx প্রদর্শিত হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-err-ex1',
      kind: 'mcq',
      topic: 'client component requirement for error.tsx',
      question: {
        en: 'Why must every "error.tsx" file in the Next.js App Router explicitly declare the "use client" directive at the top of the file?',
        bn: 'Next.js অ্যাপ রাউটারে প্রতিটি "error.tsx" ফাইলের শুরুতে কেন "use client" ডিরেক্টিভ ঘোষণা করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'React Error Boundaries require client-side life-cycle mechanisms (componentDidCatch or getDerivedStateFromError) to catch errors and render fallback UI interactively',
          bn: 'রিঅ্যাক্ট এরর বাউন্ডারির ত্রুটি ধরা এবং ফলব্যাক ইন্টারফেস সচল রাখার জন্য ক্লায়েন্ট-সাইড লাইফসাইকেল মেকানিজম প্রয়োজন হয়'
        },
        {
          en: 'Because error files are not allowed to use CSS styling',
          bn: 'কারণ এরর ফাইলে সিএসএস স্টাইলিং ব্যবহারের অনুমতি নেই'
        },
        {
          en: 'To allow the operating system to format the server hard drive',
          bn: 'যাতে অপারেটিং সিস্টেম সার্ভারের হার্ডডিস্ক ফরম্যাট করতে পারে'
        },
        {
          en: 'Server Components cannot display text characters on the screen',
          bn: 'সার্ভার কম্পোনেন্ট স্ক্রিনে কোনো টেক্সট ক্যারেক্টার দেখাতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'React error boundaries are fundamentally client-side components.',
        bn: 'রিঅ্যাক্ট এরর বাউন্ডারি মূলত ক্লায়েন্ট-সাইড কম্পোনেন্ট হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'React Error Boundaries must be Client Components because error catching and state-based fallback rendering require browser runtime mechanisms.',
        bn: 'ত্রুটি ধরা এবং ইন্টারেক্টিভ ফলব্যাক দেখানোর জন্য ক্লায়েন্ট মেকানিজম দরকার। তাই error.tsx-এ "use client" দেওয়া বাধ্যতামূলক।'
      }
    },
    {
      id: 'nx-err-ex2',
      kind: 'mcq',
      topic: 'error digest property for production security',
      question: {
        en: 'In production environments, what does the "error.digest" property passed into "error.tsx" represent?',
        bn: 'প্রোডাকশন পরিবেশে "error.tsx"-এ আসা "error.digest" প্রোপার্টিটি কী প্রকাশ করে?'
      },
      options: [
        {
          en: 'An opaque cryptographic hash generated by Next.js matching the server-side error log, protecting internal stack traces from leaking to end users while allowing engineers to correlate logs',
          bn: 'Next.js দ্বারা তৈরি একটি গোপন ক্রিপ্টোগ্রাফিক হ্যাশ যা সার্ভার লগের সাথে মিলে যায়, ফলে ব্যবহারকারীর চোখে সিস্টেম কোড ফাঁসের ঝুঁকি থাকে না কিন্তু ইঞ্জিনিয়াররা সহজে সমস্যা শনাক্ত করতে পারেন'
        },
        {
          en: 'The number of lines of code in the project',
          bn: 'প্রজেক্টের মোট কোড লাইনের সংখ্যা'
        },
        {
          en: 'The user personal credit card number',
          bn: 'ব্যবহারকারীর ব্যক্তিগত ক্রেডিট কার্ড নম্বর'
        },
        {
          en: 'The download percentage of the web browser update',
          bn: 'ওয়েব ব্রাউজার আপডেটের ডাউনলোডের শতকরা হার'
        }
      ],
      answer: 0,
      hint: {
        en: 'error.digest is a secure hash matching production client errors to backend server logs.',
        bn: 'error.digest হলো একটি নিরাপদ হ্যাশ কোড যা সার্ভার লগের সাথে ত্রুটি মেলাতে সাহায্য করে।'
      },
      explanation: {
        en: 'For security, Next.js masks raw exception details in production. It provides an error.digest hash that developers can look up in backend logs to find the exact stack trace.',
        bn: 'নিরাপত্তার স্বার্থে প্রোডাকশনে সরাসরি কোডের এরর দেখানো হয় না। একটি digest হ্যাশ দেওয়া হয় যা সার্ভার লগে খুঁজে ইঞ্জিনিয়াররা মূল কারণ বের করতে পারেন।'
      }
    },
    {
      id: 'nx-err-ex3',
      kind: 'mcq',
      topic: 'global-error.tsx root html tag requirement',
      question: {
        en: 'Why must "app/global-error.tsx" define its own "<html>" and "<body>" tags, unlike a standard "app/error.tsx"?',
        bn: 'সাধারণ "app/error.tsx"-এর মতো না হয়ে "app/global-error.tsx"-এ কেন নিজস্ব "<html>" এবং "<body>" ট্যাগ থাকা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Because global-error.tsx catches errors occurring inside the root layout itself; when the root layout crashes, its <html> and <body> tags fail to render, so global-error must supply them',
          bn: 'কারণ global-error.tsx মূল রুট লেআউটের ভেতরের ক্র্যাশ সামলায়; রুট লেআউট ক্র্যাশ করলে তার <html> ও <body> ট্যাগ রেন্ডার হতে পারে না, তাই global-error-কেই তা দিতে হয়'
        },
        {
          en: 'To make the webpage load in fullscreen mode automatically',
          bn: 'যাতে ওয়েবপেজটি নিজে থেকেই ফুলস্ক্রিন মোডে খুলে যায়'
        },
        {
          en: 'Because global-error.tsx is compiled by Python instead of Node.js',
          bn: 'কারণ global-error.tsx নোডের বদলে পাইথন দিয়ে কমপাইল হয়'
        },
        {
          en: 'HTML tags are mandatory in all TypeScript files in Next.js',
          bn: 'Next.js-এর সব টাইপস্ক্রিপ্ট ফাইলেই এইচটিএমএল ট্যাগ থাকা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'global-error replaces the crashed root layout and must provide root HTML markup.',
        bn: 'global-error ভেঙে পড়া রুট লেআউটকে প্রতিস্থাপন করে, তাই নিজস্ব এইচটিএমএল ট্যাগ জরুরি।'
      },
      explanation: {
        en: 'A standard error.tsx sits inside layout.tsx and inherits the root HTML. But global-error.tsx wraps the root layout itself; if the root layout crashes, global-error must render root tags.',
        bn: 'সাধারণ error.tsx লেআউটের ভেতরে থাকে। কিন্তু রুট লেআউট নিজে ভেঙে পড়লে পুরো পেজের কাঠামো তৈরি করতেই global-error-এ নিজস্ব html ও body দিতে হয়।'
      }
    },
    {
      id: 'nx-err-ex4',
      kind: 'mcq',
      topic: 'notFound function triggering not-found.tsx',
      question: {
        en: 'What function can be invoked inside a Server Component to programmatically render the custom "not-found.tsx" boundary with an HTTP 404 status code?',
        bn: 'এইচটিটিপি ৪০৪ স্ট্যাটাস সহ কাস্টম "not-found.tsx" পেজ প্রদর্শনের জন্য সার্ভার কম্পোনেন্টে কোন ফাংশনটি কল করা হয়?'
      },
      options: [
        {
          en: 'import { notFound } from "next/navigation"; followed by calling "notFound();"',
          bn: 'import { notFound } from "next/navigation"; এবং এরপর "notFound();" কল করে'
        },
        {
          en: 'window.alert("404 Page Missing");',
          bn: 'window.alert("404 Page Missing");'
        },
        {
          en: 'throw new Error("404");',
          bn: 'throw new Error("404");'
        },
        {
          en: 'process.exit(404);',
          bn: 'process.exit(404);'
        }
      ],
      answer: 0,
      hint: {
        en: 'Next.js provides the notFound() helper in next/navigation.',
        bn: 'Next.js next/navigation মডিউলে notFound() হেল্পার ফাংশন সরবরাহ করে।'
      },
      explanation: {
        en: 'Calling notFound() throws a specific Next.js error that halts rendering and displays the closest not-found.tsx component while setting the HTTP response code to 404.',
        bn: 'notFound() ডাকলে নেক্সট.জেএস রেন্ডারিং থামিয়ে নিকটস্থ not-found.tsx প্রদর্শন করে এবং এইচটিটিপি রেসপন্স কোড হিসেবে ৪০৪ নির্ধারণ করে।'
      }
    }
  ],
  quiz: {
    id: 'the-emergency-court-quiz',
    title: {
      en: 'Next.js Error Boundaries & Fault Tolerance Quiz',
      bn: 'Next.js এরর বাউন্ডারিজ ও ফল্ট টলারেন্স কুইজ'
    },
    questions: [
      {
        id: 'q-reset-function-stale-state-trap',
        kind: 'mcq',
        topic: 'using router.refresh alongside reset to re-execute server data fetching',
        question: {
          en: 'If a Server Component crashed due to a temporary network blip, why is calling "startTransition(() => { router.refresh(); reset(); })" recommended over calling "reset()" alone?',
          bn: 'সার্ভার কম্পোনেন্ট সাময়িক নেটওয়ার্ক সমস্যার কারণে ক্র্যাশ করলে কেবল "reset()" ডাকার বদলে "startTransition(() => { router.refresh(); reset(); })" ডাকার পরামর্শ কেন দেওয়া হয়?'
        },
        options: [
          {
            en: 'reset() only re-renders the client-side error boundary component, which may simply re-encounter cached error state; router.refresh() invalidates the server cache and re-fetches the server component fresh data',
            bn: 'reset() কেবল ক্লায়েন্ট-সাইড এরর কম্পোনেন্ট পুনরায় রেন্ডার করে যা আগের ক্যাশ করা এররেই আবার পড়তে পারে; router.refresh() সার্ভার ক্যাশ রিফ্রেশ করে নতুন করে ডাটা তুলে আনে'
          },
          {
            en: 'router.refresh() buys a new domain name for the application',
            bn: 'router.refresh() অ্যাপ্লিকেশনের জন্য নতুন ডোমেন নাম কিনে নেয়'
          },
          {
            en: 'Calling reset() alone shuts down the user internet router',
            bn: 'শুধু reset() ডাকলে ব্যবহারকারীর বাসার ইন্টারনেট রাউটার বন্ধ হয়ে যায়'
          },
          {
            en: 'There is no difference between the two approaches',
            bn: 'এই দুটি কৌশলের মধ্যে কোনো তফাত নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'router.refresh() re-fetches the server components, while reset() re-mounts the client error boundary.',
          bn: 'router.refresh() সার্ভার ডাটা পুনরায় ফেচ করে, আর reset() ক্লায়েন্ট বাউন্ডারি রিলোড করে।'
        },
        explanation: {
          en: 'In Server Component architectures, reset() only re-mounts the client subtree. Pairing it with router.refresh() triggers a fresh server-side render pass to pull updated data from the backend.',
          bn: 'সার্ভার কম্পোনেন্টে কেবল reset দিলে সার্ভার নতুন করে কল নাও হতে পারে। router.refresh দিলে সার্ভার নতুন করে তাজা ডাটা আনে এবং বাউন্ডারি সুন্দরভাবে পুনরুদ্ধার হয়।'
        }
      },
      {
        id: 'q-nested-error-boundary-containment',
        kind: 'mcq',
        topic: 'fault containment in nested error boundaries',
        question: {
          en: 'In a route with "app/dashboard/layout.tsx" and "app/dashboard/analytics/error.tsx", what happens when a database query inside "analytics/page.tsx" crashes?',
          bn: '"app/dashboard/layout.tsx" এবং "app/dashboard/analytics/error.tsx" থাকা কোনো রুটে "analytics/page.tsx"-এর ডাটাবেজ ক্র্যাশ করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Only the analytics section is replaced by the analytics/error.tsx fallback; the dashboard sidebar, navigation links, and header remain fully interactive and intact',
            bn: 'কেবল অ্যানালিটিক্স সেকশনটি analytics/error.tsx দ্বারা প্রতিস্থাপিত হয়; ড্যাশবোর্ডের সাইডবার, নেভিগেশন লিংক এবং হেডার অক্ষুণ্ণ ও সচল থাকে'
          },
          {
            en: 'The entire application displays a white blank screen',
            bn: 'পুরো অ্যাপ্লিকেশনটি একটি সাদা ফাঁকা স্ক্রিন প্রদর্শন করে'
          },
          {
            en: 'The browser closes immediately and deletes all cookies',
            bn: 'ব্রাউজার সাথে সাথে বন্ধ হয়ে সমস্ত কুকি মুছে ফেলে'
          },
          {
            en: 'Next.js renames the folder to "analytics_broken"',
            bn: 'Next.js ফোল্ডারের নাম বদলে "analytics_broken" করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nested error boundaries isolate crashes to their specific segment.',
          bn: 'নেস্টেড এরর বাউন্ডারি ত্রুটিকে কেবল তার নিজস্ব সেগমেন্টের ভেতরেই সীমাবদ্ধ রাখে।'
        },
        explanation: {
          en: 'Next.js error boundaries provide isolated fault containment. A crash in a sub-segment only unmounts that sub-segment, keeping all surrounding layouts alive and functional.',
          bn: 'এরর বাউন্ডারির প্রধান সুবিধা হলো ত্রুটির বিস্তার রোধ করা। অ্যানালিটিক্স পেজ ভাঙলেও ড্যাশবোর্ডের সাইডবার অক্ষত থাকে এবং ইউজার অন্য ট্যাবে যেতে পারেন।'
        }
      },
      {
        id: 'q-error-boundary-server-action-exceptions',
        kind: 'mcq',
        topic: 'handling exceptions thrown inside server actions',
        question: {
          en: 'What happens when an unhandled exception is thrown inside a Server Action invoked by a form?',
          bn: 'ফর্ম দ্বারা চালিত কোনো সার্ভার অ্যাকশনের ভেতর কোনো আনহ্যান্ডল্ড এক্সেপশন দেখা দিলে কী ঘটে?'
        },
        options: [
          {
            en: 'The nearest error.tsx boundary catches the error and renders its fallback UI, unless the action was invoked within useActionState which captures the error into state',
            bn: 'নিকটতম error.tsx বাউন্ডারি এররটি ধরে তার ফলব্যাক প্রদর্শন করে, যদি না অ্যাকশনটি useActionState দিয়ে পরিচালিত হয়ে স্টেট আকারে এরর গ্রহণ করে'
          },
          {
            en: 'The computer sound card plays an alarm siren',
            bn: 'কম্পিউটারের সাউন্ড কার্ডে সাইরেন অ্যালার্ম বেজে ওঠে'
          },
          {
            en: 'The server restarts the Next.js process in safe mode',
            bn: 'সার্ভার সেফ-মোডে নেক্সট.জেএস প্রসেসটি রিস্টার্ট করে'
          },
          {
            en: 'Exceptions inside Server Actions are completely ignored by Next.js',
            bn: 'সার্ভার অ্যাকশনের ভেতরের এক্সেপশন Next.js পুরোপুরি উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Server Action crashes bubble up to the nearest error boundary unless handled in action state.',
          bn: 'সার্ভার অ্যাকশনের ত্রুটি বাউন্ডারিতে পৌঁছায় যদি না তা অ্যাকশন স্টেটে হ্যান্ডল করা থাকে।'
        },
        explanation: {
          en: 'Unhandled errors in Server Actions bubble up to the nearest error.tsx boundary. Best practice is to catch anticipated validation errors inside the action and return them as state objects.',
          bn: 'সার্ভার অ্যাকশনে অপ্রত্যাশিত ক্র্যাশ ঘটলে error.tsx বাউন্ডারি সক্রিয় হয়। তবে ফর্ম ভ্যালিডেশন এররগুলোকে try-catch দিয়ে হ্যান্ডল করে অবজেক্ট আকারে পাঠানোই উত্তম।'
        }
      },
      {
        id: 'q-root-layout-error-boundary-limitation',
        kind: 'mcq',
        topic: 'why app/error.tsx cannot catch errors in app/layout.tsx',
        question: {
          en: 'Why is "app/error.tsx" unable to catch an error that occurs inside the root "app/layout.tsx" component?',
          bn: '"app/error.tsx" ফাইলটি কেন মূল রুট "app/layout.tsx" কম্পোনেন্টের ভেতরের কোনো ত্রুটি ধরতে পারে না?'
        },
        options: [
          {
            en: 'In the component tree hierarchy, error.tsx is nested inside layout.tsx as a child; an error boundary can only catch errors occurring in its children, not in its parent wrapper',
            bn: 'কম্পোনেন্ট হায়ারার্কিতে error.tsx ফাইলটি layout.tsx-এর ভেতরে চাইল্ড হিসেবে অবস্থান করে; একটি এরর বাউন্ডারি কেবল তার ভেতরের চাইল্ডদের ক্র্যাশ ধরতে পারে, বাইরের প্যারেন্টকে নয়'
          },
          {
            en: 'Because root layouts are written in Python while error.tsx is in TypeScript',
            bn: 'কারণ রুট লেআউট পাইথনে লেখা আর error.tsx টাইপস্ক্রিপ্টে'
          },
          {
            en: 'Root layouts cannot encounter errors under any circumstance',
            bn: 'রুট লেআউটে কখনোই কোনো ত্রুটি ঘটা সম্ভব নয়'
          },
          {
            en: 'Next.js forbids error handling in production applications',
            bn: 'Next.js প্রোডাকশন অ্যাপ্লিকেশনে এরর হ্যান্ডলিং নিষিদ্ধ করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Error boundaries catch errors in children, but app/error.tsx is a child of root layout.tsx.',
          bn: 'বাউন্ডারি কেবল নিজের নিচের চাইল্ডের ভুল ধরে, কিন্তু error.tsx থাকে লেআউটের পেটে।'
        },
        explanation: {
          en: 'Next.js wraps page.tsx inside error.tsx, which is in turn nested inside layout.tsx (<Layout><ErrorBoundary><Page /></ErrorBoundary></Layout>). To catch root layout errors, app/global-error.tsx is required.',
          bn: 'গঠনগতভাবে error.tsx থাকে লেআউটের ভেতরে। তাই প্যারেন্ট লেআউট ভেঙে পড়লে তা ধরার ক্ষমতা তার থাকে না; এজন্যই global-error.tsx ব্যবহার করা হয় যা লেআউটকেও ঘিরে রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-metadata-court',
    title: {
      en: 'Metadata, SEO & Production Deployment — OpenGraph, Standalone Docker & Performance',
      bn: 'মেটাডাটা, এসইও ও প্রোডাকশন ডেপ্লয়মেন্ট — OpenGraph, স্ট্যান্ডঅ্যালোন ডকার ও পারফরম্যান্স'
    }
  }
};
