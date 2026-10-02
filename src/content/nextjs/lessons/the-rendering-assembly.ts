import type { Lesson } from '../../../lib/types';

export const renderingAssemblyLesson: Lesson = {
  slug: 'the-rendering-assembly',
  tech: 'nextjs',
  title: {
    en: 'Rendering Strategies — Static, Dynamic, ISR & Streaming Suspense',
    bn: 'রেন্ডারিং কৌশল — স্ট্যাটিক, ডায়নামিক, ISR ও স্ট্রিমিং সাসপেন্স'
  },
  summary: {
    en: 'Next.js provides hybrid rendering capabilities where each route segment selects the optimal rendering strategy. In this lesson, you will master Static Rendering, Dynamic Server Rendering, Incremental Static Regeneration with revalidate, generating static paths with generateStaticParams, and streaming incremental HTML chunks using React Suspense.',
    bn: 'Next.js একটি হাইব্রিড রেন্ডারিং সুবিধা দেয় যেখানে প্রতিটি রুট সেগমেন্ট তার জন্য সেরা রেন্ডারিং কৌশল বেছে নিতে পারে। এই পাঠে আপনি স্ট্যাটিক রেন্ডারিং, ডায়নামিক সার্ভার রেন্ডারিং, revalidate দিয়ে Incremental Static Regeneration, generateStaticParams দিয়ে স্ট্যাটিক পাথ তৈরি এবং রিঅ্যাক্ট সাসপেন্স দিয়ে স্ট্রিমিং এইচটিএমএল পাঠানো গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'rendering-strategies-architecture',
      text: {
        en: 'The Hybrid Rendering Architecture',
        bn: 'হাইব্রিড রেন্ডারিং আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build pages in Next.js, the framework decides how to render your content based on the data operations you perform. Routes that read only static or cached data are pre-rendered into pure HTML at build time. Routes that inspect request cookies, incoming headers, or dynamic search parameters automatically switch to server-side dynamic rendering on every request.',
        bn: 'যখন আপনি Next.js-এ পেজ তৈরি করেন, তখন ফ্রেমওয়ার্ক আপনার ব্যবহৃত ডাটা অপারেশনের ওপর ভিত্তি করে উপযুক্ত রেন্ডারিং পদ্ধতি নির্ধারণ করে। যে রুটগুলো কেবল স্ট্যাটিক বা ক্যাশড ডাটা পড়ে, সেগুলো বিল্ডের সময়ই এইচটিএমএল আকারে তৈরি হয়ে যায়। আর যে পেজগুলো কুকি, হেডার বা সার্চ প্যারামিটার পড়ে, সেগুলো প্রতিটি রিকোয়েস্টে সার্ভার-সাইড ডায়নামিক রেন্ডারিং চালায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Static Rendering (SSG)',
          def: {
            en: 'Pre-rendering HTML and React Server Component payloads once at build time or during revalidation, served via CDN.',
            bn: 'বিল্ডের সময় একবার এইচটিএমএল প্রস্তুত করে রাখা যা সিডিএন থেকে পলকের মধ্যে পরিবেশন করা যায়।'
          }
        },
        {
          term: 'Dynamic Rendering (SSR)',
          def: {
            en: 'Rendering HTML on the server at request time whenever an incoming user request accesses cookies, headers, or no-store data.',
            bn: 'অনুরোধের সময় ব্যবহারকারীর কুকি বা তাজা তথ্যের ওপর ভিত্তি করে সরাসরি সার্ভারে পেজ তৈরি করার পদ্ধতি।'
          }
        },
        {
          term: 'generateStaticParams()',
          def: {
            en: 'An asynchronous function that returns an array of segment parameters to statically pre-render dynamic routes at build time.',
            bn: 'একটি অ্যাসিনক্রোনাস ফাংশন যা ডায়নামিক রুটের জন্য বিল্ড-টাইমে সম্ভাব্য সব প্যারামিটার তৈরি করে স্ট্যাটিক পেজ বানায়।'
          }
        },
        {
          term: 'Streaming SSR with Suspense',
          def: {
            en: 'Progressively transmitting HTML chunks over a single HTTP connection as asynchronous server components resolve.',
            bn: 'একক এইচটিটিপি সংযোগে পেজের প্রস্তুতকৃত অংশগুলো সাথে সাথে ব্রাউজারে পাঠিয়ে বাকি অংশ ধীরে ধীরে স্ট্রিম করার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'rendering-matrix',
      text: {
        en: 'Rendering Strategies and Segment Configuration Matrix',
        bn: 'রেন্ডারিং কৌশল ও সেগমেন্ট কনফিগারেশন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Rendering Strategy', bn: 'রেন্ডারিং পদ্ধতি' },
        { en: 'Trigger / Code Declaration', bn: 'যেভাবে সক্রিয় হয়' },
        { en: 'Performance & Delivery Model', bn: 'পারফরম্যান্স ও ডেলিভারি মডেল' }
      ],
      rows: [
        [
          { en: 'Static Site Generation', bn: 'স্ট্যাটিক সাইট জেনারেশন' },
          { en: 'Default for routes without dynamic data access', bn: 'ডায়নামিক ডাটা ছাড়া সব রুটের জন্য ডিফল্ট' },
          { en: 'Instant global CDN delivery; zero server compute overhead', bn: 'সিডিএন থেকে তাৎক্ষণিক লোড; সার্ভার প্রসেসিং খরচ শূন্য' }
        ],
        [
          { en: 'Dynamic Server Rendering', bn: 'ডায়নামিক সার্ভার রেন্ডারিং' },
          { en: 'export const dynamic = "force-dynamic" or cookies()', bn: 'export const dynamic = "force-dynamic" বা cookies()' },
          { en: 'Server computes page per request; always 100% up to date', bn: 'অনুরোধপ্রতি সার্ভারে রেন্ডার; সর্বদা শতভাগ তাজা ডাটা' }
        ],
        [
          { en: 'Incremental Static Regeneration', bn: 'ইনক্রিমেন্টাল স্ট্যাটিক রিজেনারেশন' },
          { en: 'export const revalidate = 3600 (time in seconds)', bn: 'export const revalidate = 3600 (সেকেন্ডের হিসাবে)' },
          { en: 'Serves cached version; refreshes in background after timeout', bn: 'ক্যাশ থেকে পরিবেশন; সময় শেষ হলে ব্যাকগ্রাউন্ডে তাজা করে' }
        ],
        [
          { en: 'Streaming with Suspense', bn: 'সাসপেন্স সহ স্ট্রিমিং' },
          { en: '<Suspense fallback={<Skeleton />}><SlowData /></Suspense>', bn: '<Suspense fallback={<Skeleton />}><SlowData /></Suspense>' },
          { en: 'Fast initial shell paint; slow widgets stream into place', bn: 'দ্রুত প্রাথমিক ফ্রেম লোড; ধীরগতির উপাদানগুলো পরে স্ট্রিম হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'rendering-simulation-code',
      text: {
        en: 'Working Rendering Decision Engine and Streaming Simulation',
        bn: 'কার্যকরী রেন্ডারিং ডিসিশন ইঞ্জিন ও স্ট্রিমিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js Rendering Decision Engine and Streaming Chunks
class MockRenderingEngine {
  // Evaluates route data hooks to select rendering strategy
  determineStrategy(routeConfig) {
    if (routeConfig.usesCookies || routeConfig.usesHeaders || routeConfig.dynamic === 'force-dynamic') {
      return { strategy: 'DYNAMIC_SSR', timeToFirstByteMs: 120 };
    }
    if (routeConfig.revalidateSeconds && routeConfig.revalidateSeconds > 0) {
      return { strategy: 'ISR', timeToFirstByteMs: 15, revalidate: routeConfig.revalidateSeconds };
    }
    return { strategy: 'STATIC_SSG', timeToFirstByteMs: 8 };
  }

  // Simulates progressive HTML chunk transmission with Suspense
  async streamSuspensePage() {
    const chunks = [];
    // 1. Initial shell sent immediately
    chunks.push('<header>Navbar</header><div class="skeleton">Loading...</div>');
    // 2. Slow database query resolves asynchronously
    const slowData = { price: 99, inventory: 14 };
    // 3. Final streamed chunk replaces skeleton
    chunks.push('<div class="badge">In Stock: ' + slowData.inventory + '</div>');
    return chunks;
  }
}

const engine = new MockRenderingEngine();

// Case A: Marketing page without dynamic functions
const staticPage = engine.determineStrategy({ dynamic: 'auto', usesCookies: false });

// Case B: User cart reading request cookies
const dynamicPage = engine.determineStrategy({ dynamic: 'auto', usesCookies: true });

// Case C: Streaming chunks delivery
const streamedChunks = await engine.streamSuspensePage();

console.log('Marketing page rendering strategy:', staticPage.strategy);
// -> Marketing page rendering strategy: STATIC_SSG
console.log('Cart page rendering strategy:', dynamicPage.strategy);
// -> Cart page rendering strategy: DYNAMIC_SSR
console.log('Total progressive HTML chunks streamed:', streamedChunks.length);
// -> Total progressive HTML chunks streamed: 2`,
      caption: {
        en: 'Engine categorizes static vs dynamic pages and delivers 2 progressive streamed chunks',
        bn: 'ইঞ্জিন স্ট্যাটিক ও ডায়নামিক পেজ বাছাই করছে এবং ২টি ধাপে স্ট্রিম করা এইচটিএমএল খণ্ড পাঠাচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'rendering-discipline-rules',
      text: {
        en: 'Static Generation and Streaming Best Practices',
        bn: 'স্ট্যাটিক জেনারেশন ও স্ট্রিমিং সেরা অনুশীলন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To achieve optimal search engine performance and low latency, pre-render as many pages as possible at build time using generateStaticParams. For pages that require dynamic personalization, avoid blocking the entire page on slow database queries. Wrap slow components in React Suspense boundaries so the navigation responds instantly while dynamic sections stream into view.',
        bn: 'সার্চ ইঞ্জিনের জন্য অপটিমাইজেশন এবং দ্রুতগতির সাইট নিশ্চিত করতে generateStaticParams দিয়ে বিল্ডের সময়ই সম্ভাব্য সব পেজ তৈরি করে রাখুন। ব্যক্তিগতকৃত তথ্যের প্রয়োজনে ধীরগতির কুয়েরির কারণে পুরো পেজ আটকে রাখবেন না। ধীরগতির উপাদানগুলোকে রিঅ্যাক্ট সাসপেন্সে মুড়িয়ে দিন যাতে পেজ সাথে সাথে খুলে যায় এবং ডাটা প্রস্তুত হলে ভেসে ওঠে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use generateStaticParams: Pre-build your top dynamic routes (e.g. top 500 products) at build time for instant CDN delivery.',
          bn: '১. generateStaticParams ব্যবহার: জনপ্রিয় পেজগুলো (যেমন শীর্ষ ৫০০ পণ্য) বিল্ডের সময়ই স্ট্যাটিক করে রাখুন যাতে সিডিএন থেকে দ্রুত লোড হয়।'
        },
        {
          en: '2. Set dynamicParams Explicitly: Set dynamicParams = false if you want unlisted parameter slugs to return an automatic 404 page.',
          bn: '২. dynamicParams নিয়ন্ত্রণ: তালিকায় না থাকা রুট সরাসরি ৪০৪ করতে চাইলে dynamicParams = false লিখে দিন।'
        },
        {
          en: '3. Isolate Dynamic Code with Suspense: Place cookies() or no-store fetches inside Suspense boundaries so they do not de-optimize the surrounding shell.',
          bn: '৩. সাসপেন্সে ডায়নামিক কোড: cookies() বা লাইভ ফেচকে Suspense-এর ভেতর রাখুন যাতে আশেপাশের লেআউট স্ট্যাটিক হিসেবে দ্রুত লোড হতে পারে।'
        },
        {
          en: '4. Declare Intent with export const dynamic: When a page must always be dynamic, explicitly declare export const dynamic = "force-dynamic".',
          bn: '৪. স্পষ্ট ডায়নামিক ঘোষণা: পেজ প্রতিবার সার্ভারেই রেন্ডার হওয়া আবশ্যক হলে export const dynamic = "force-dynamic" লিখে রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-rnd-ex1',
      kind: 'mcq',
      topic: 'static rendering condition in nextjs app router',
      question: {
        en: 'Under what condition does Next.js automatically choose "Static Rendering" for a route in the App Router?',
        bn: 'Next.js অ্যাপ রাউটারে কোন পরিস্থিতিতে একটি রুটের জন্য স্বয়ংক্রিয়ভাবে "স্ট্যাটিক রেন্ডারিং" বেছে নেয়?'
      },
      options: [
        {
          en: 'When the route does not call dynamic functions (such as cookies(), headers(), or searchParams) and only uses cached or static data',
          bn: 'যখন রুটটি কোনো ডায়নামিক ফাংশন (যেমন cookies(), headers() বা searchParams) কল করে না এবং কেবল ক্যাশড বা স্ট্যাটিক ডাটা ব্যবহার করে'
        },
        {
          en: 'When the developer sets the computer screen resolution to 4K',
          bn: 'যখন ডেভেলপার মনিটরের রেজোলিউশন ৪কে নির্ধারণ করেন'
        },
        {
          en: 'Only when the server is completely disconnected from the power grid',
          bn: 'কেবল যখন সার্ভারের বিদ্যুৎ সংযোগ পুরোপুরি বিচ্ছিন্ন থাকে'
        },
        {
          en: 'When the project contains more than 100 CSS files',
          bn: 'যখন প্রজেক্টে ১০০টির বেশি সিএসএস ফাইল থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Static rendering occurs when pages avoid dynamic request-time APIs like cookies and headers.',
        bn: 'পেজে কুকি বা হেডারের মতো ডায়নামিক এপিআই না থাকলে তা বিল্ডের সময়ই স্ট্যাটিক হয়ে যায়।'
      },
      explanation: {
        en: 'Next.js defaults to static pre-rendering. If a route avoids dynamic functions like cookies() or searchParams, it is compiled into HTML once and served globally via CDN.',
        bn: 'Next.js স্বাভাবিকভাবেই স্ট্যাটিক রেন্ডারিং পছন্দ করে। রিকোয়েস্টের ওপর নির্ভরশীল কোড না থাকলে এটি একবার এইচটিএমএল তৈরি করে সিডিএন থেকে দ্রুত পরিবেশন করে।'
      }
    },
    {
      id: 'nx-rnd-ex2',
      kind: 'mcq',
      topic: 'purpose of generateStaticParams function',
      question: {
        en: 'What is the role of the "generateStaticParams()" function inside a dynamic route folder (such as "app/blog/[slug]/page.tsx")?',
        bn: 'ডায়নামিক রুট ফোল্ডারে (যেমন "app/blog/[slug]/page.tsx") "generateStaticParams()" ফাংশনটির ভূমিকা কী?'
      },
      options: [
        {
          en: 'It defines the list of dynamic segment values to statically pre-render into HTML at build time, rather than waiting for user requests on demand',
          bn: 'এটি বিল্ড-টাইমেই এইচটিএমএল প্রস্তুত করার জন্য সম্ভাব্য ডায়নামিক প্যারামিটারগুলোর তালিকা প্রদান করে, যাতে ইউজারের রিকোয়েস্টের জন্য অপেক্ষা করতে না হয়'
        },
        {
          en: 'It generates cryptographic passwords for all blog readers',
          bn: 'এটি সব ব্লগ পাঠকের জন্য ক্রিপ্টোগ্রাফিক পাসওয়ার্ড তৈরি করে'
        },
        {
          en: 'It installs third-party npm packages automatically',
          bn: 'এটি স্বয়ংক্রিয়ভাবে তৃতীয় পক্ষের এনপিএম প্যাকেজ ইনস্টল করে'
        },
        {
          en: 'It converts the application from TypeScript to C#',
          bn: 'এটি অ্যাপ্লিকেশনকে টাইপস্ক্রিপ্ট থেকে সি-শার্পে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'generateStaticParams replaces getStaticPaths from the legacy Pages router.',
        bn: 'generateStaticParams বিল্ডের সময় সব ডায়নামিক পাথ তৈরি করে রাখে।'
      },
      explanation: {
        en: 'generateStaticParams() returns an array of param objects. Next.js statically builds pages for each returned parameter combination during next build.',
        bn: 'generateStaticParams() প্যারামিটারের একটি তালিকা রিটার্ন করে। নেক্সট.জেএস বিল্ডের সময়ই ওই সব প্যারামিটারের জন্য স্ট্যাটিক এইচটিএমএল তৈরি করে নেয়।'
      }
    },
    {
      id: 'nx-rnd-ex3',
      kind: 'mcq',
      topic: 'dynamicParams false behavior on unknown slugs',
      question: {
        en: 'What happens when a visitor navigates to an unlisted slug on a dynamic route that exports "export const dynamicParams = false"?',
        bn: 'যদি কোনো ডায়নামিক রুটে "export const dynamicParams = false" লেখা থাকে, তবে তালিকায় না থাকা কোনো স্লাগে ভিজিটর ঢুকলে কী ঘটবে?'
      },
      options: [
        {
          en: 'Next.js immediately returns an HTTP 404 Not Found response without attempting to render the page on demand',
          bn: 'Next.js নতুন করে পেজ রেন্ডার করার চেষ্টা না করে তাৎক্ষণিকভাবে একটি এইচটিটিপি ৪০৪ Not Found রেসপন্স ফেরত দেবে'
        },
        {
          en: 'The server crashes and reboots the operating system',
          bn: 'সার্ভার ক্র্যাশ করে অপারেটিং সিস্টেম রিবুট করবে'
        },
        {
          en: 'The browser redirects to the Google search engine',
          bn: 'ব্রাউজার ব্যবহারকারীকে গুগল সার্চ পেজে রিডাইরেক্ট করবে'
        },
        {
          en: 'Next.js converts the slug into an audio podcast',
          bn: 'Next.js স্লাগটিকে একটি অডিও পডকাস্টে রূপান্তর করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'dynamicParams = false strictly restricts valid routes to those returned by generateStaticParams.',
        bn: 'dynamicParams = false কেবল নির্ধারিত তালিকার রুটগুলোকেই অনুমতি দেয় এবং বাকি সব ৪০৪ করে।'
      },
      explanation: {
        en: 'Setting dynamicParams = false disables on-demand rendering for unexpected slugs. Any route segment not pre-generated by generateStaticParams triggers a 404.',
        bn: 'dynamicParams = false নির্ধারণ করলে তালিকায় না থাকা যেকোনো অজানা রুটে স্বয়ংক্রিয়ভাবে ৪০৪ পেজ প্রদর্শিত হয়।'
      }
    },
    {
      id: 'nx-rnd-ex4',
      kind: 'mcq',
      topic: 'streaming ssr with react suspense benefits',
      question: {
        en: 'How does Streaming Server-Side Rendering (SSR) with React Suspense improve the user experience on pages with slow backend data?',
        bn: 'ধীরগতির ডাটাবেজ কোয়েরি থাকা পেজে রিঅ্যাক্ট সাসপেন্স সহ স্ট্রিমিং SSR কীভাবে ব্যবহারকারীর অভিজ্ঞতা উন্নত করে?'
      },
      options: [
        {
          en: 'The server sends the initial fast HTML shell (navbars, headers, skeletons) immediately without waiting for slow queries to finish; when data arrives, it streams the resolved HTML into place over the same connection',
          bn: 'সার্ভার ধীরগতির কুয়েরির জন্য অপেক্ষা না করে সাথে সাথে প্রাথমিক এইচটিএমএল ফ্রেম পাঠায়; পরবর্তীতে ডাটা প্রস্তুত হলে একই সংযোগ দিয়ে বাকি অংশ পূরণ করে দেয়'
        },
        {
          en: 'It compresses all images to 1 pixel size',
          bn: 'এটি সব ছবি সংকুচিত করে ১ পিক্সেল সাইজের বানিয়ে ফেলে'
        },
        {
          en: 'It disables all JavaScript execution in the browser',
          bn: 'এটি ব্রাউজারে জাভাস্ক্রিপ্ট চলা পুরোপুরি বন্ধ করে দেয়'
        },
        {
          en: 'Streaming SSR only works on video streaming websites',
          bn: 'স্ট্রিমিং SSR কেবল ভিডিও স্ট্রিমিং ওয়েবসাইটেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Streaming sends the fast page shell immediately, streaming in slow components progressively.',
        bn: 'স্ট্রিমিং দ্রুত পেজের কাঠামো পাঠিয়ে দেয় এবং ভারী উপাদানগুলো প্রস্তুত হলে ধীরে ধীরে পাঠায়।'
      },
      explanation: {
        en: 'Streaming SSR breaks the page down into chunks. The user sees an interactive shell with loading skeletons right away, and slow widgets stream in without blocking Time to First Byte (TTFB).',
        bn: 'স্ট্রিমিং পেজকে খণ্ড খণ্ড করে পাঠায়। ইউজার সাথে সাথে লোডিং কঙ্কাল সহ প্রাথমিক কাঠামো দেখতে পান এবং ব্যাকগ্রাউন্ডে ভারী ডাটা এলে তা স্ক্রিনে ভেসে ওঠে।'
      }
    }
  ],
  quiz: {
    id: 'the-rendering-assembly-quiz',
    title: {
      en: 'Next.js Rendering Strategies & Streaming Quiz',
      bn: 'Next.js রেন্ডারিং কৌশল ও স্ট্রিমিং কুইজ'
    },
    questions: [
      {
        id: 'q-force-dynamic-pin-discipline',
        kind: 'mcq',
        topic: 'explicitly declaring export const dynamic force-dynamic',
        question: {
          en: 'Why do senior engineers explicitly write "export const dynamic = \'force-dynamic\'" in routes that read cookies or authentication sessions?',
          bn: 'যে রুটগুলো কুকি বা অথেনটিকেশন সেশন পড়ে, সেগুলোতে অভিজ্ঞ ইঞ্জিনিয়াররা স্পষ্টভাবে "export const dynamic = \'force-dynamic\'" কেন লিখে রাখেন?'
        },
        options: [
          {
            en: 'It explicitly documents the architectural intent in source control diffs and prevents accidental build warnings or incorrect caching assumptions when colleagues refactor data fetching code',
            bn: 'এটি সোর্স কন্ট্রোলে আর্কিটেকচারাল সিদ্ধান্ত স্পষ্টভাবে তুলে ধরে এবং ভবিষ্যতে কোড পরিবর্তনের সময় ভুল ক্যাশিং বা বিভ্রান্তিকর বিল্ড এরর প্রতিরোধ করে'
          },
          {
            en: 'Next.js refuses to start if this line is missing',
            bn: 'এই লাইনটি না লিখলে Next.js চালু হতেই অস্বীকার করে'
          },
          {
            en: 'It doubles the network bandwidth of the server',
            bn: 'এটি সার্ভারের নেটওয়ার্ক ব্যান্ডউইথ দ্বিগুণ করে দেয়'
          },
          {
            en: 'It turns the page into a desktop application',
            bn: 'এটি ওয়েব পেজটিকে একটি ডেস্কটপ অ্যাপ্লিকেশনে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Explicit route segment configs communicate rendering requirements clearly to team members and compilers.',
          bn: 'সুনির্দিষ্ট কনফিগারেশন ঘোষণা দলের অন্য সদস্যদের এবং কমপাইলারকে পেজের আসল উদ্দেশ্য পরিষ্কারভাবে জানায়।'
        },
        explanation: {
          en: 'Writing export const dynamic = "force-dynamic" is explicit documentation. It guarantees that the route will never accidentally be treated as static during future code refactorings.',
          bn: 'স্পষ্টভাবে force-dynamic লিখে রাখলে নিশ্চিত হওয়া যায় যে পরবর্তীতে কেউ কোড বদলালেও পেজটি ভুলবশত স্ট্যাটিক হয়ে বাসি ডাটা পরিবেশন করবে না।'
        }
      },
      {
        id: 'q-loading-tsx-suspense-boundary-wiring',
        kind: 'mcq',
        topic: 'loading.tsx implicit suspense boundary mechanism',
        question: {
          en: 'How does Next.js handle a "loading.tsx" file placed in the same folder as a "page.tsx" file?',
          bn: 'কোনো ফোল্ডারে "page.tsx"-এর পাশাপাশি একটি "loading.tsx" ফাইল রাখা হলে Next.js কীভাবে তা পরিচালনা করে?'
        },
        options: [
          {
            en: 'Next.js automatically wraps the page.tsx component inside a React <Suspense fallback={<Loading />}> boundary, rendering loading.tsx immediately while page data resolves',
            bn: 'Next.js স্বয়ংক্রিয়ভাবে page.tsx-কে একটি রিঅ্যাক্ট <Suspense fallback={<Loading />}> বাউন্ডারিতে মুড়িয়ে দেয় এবং পেজের ডাটা আসার আগ পর্যন্ত loading.tsx প্রদর্শন করে'
          },
          {
            en: 'It delays the page load by 10 seconds to show the loading screen',
            bn: 'লোডিং স্ক্রিন দেখানোর জন্য এটি পেজ লোড ১০ সেকেন্ড পিছিয়ে দেয়'
          },
          {
            en: 'It cancels all network connections if the loading file exists',
            bn: 'লোডিং ফাইল থাকলে এটি সব নেটওয়ার্ক সংযোগ বাতিল করে দেয়'
          },
          {
            en: 'loading.tsx is only supported in legacy React 16 applications',
            bn: 'loading.tsx কেবল পুরোনো রিঅ্যাক্ট ১৬ অ্যাপ্লিকেশনেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'loading.tsx creates an implicit React Suspense boundary around page.tsx.',
          bn: 'loading.tsx স্বয়ংক্রিয়ভাবে page.tsx-এর চারপাশে একটি রিঅ্যাক্ট সাসপেন্স বাউন্ডারি তৈরি করে।'
        },
        explanation: {
          en: 'Next.js nests page.tsx inside a Suspense boundary whose fallback is loading.tsx. The navigation completes instantly with the loading skeleton displayed while server components resolve.',
          bn: 'Next.js নিজে থেকেই page.tsx-কে Suspense-এ মোড়ে এবং loading.tsx-কে ফলব্যাক হিসেবে রাখে। ফলে নেভিগেশন সাথে সাথে সম্পন্ন হয়ে সুন্দর স্কেলিটন ভেসে ওঠে।'
        }
      },
      {
        id: 'q-partial-prerendering-concept',
        kind: 'mcq',
        topic: 'Partial Prerendering PPR combining static shell and dynamic holes',
        question: {
          en: 'What architectural advantage does Partial Prerendering (PPR) introduce to modern Next.js rendering?',
          bn: 'আধুনিক Next.js রেন্ডারিংয়ে Partial Prerendering (PPR) কোন বিশেষ আর্কিটেকচারাল সুবিধা যোগ করেছে?'
        },
        options: [
          {
            en: 'It combines static generation and dynamic streaming in the exact same route: a static HTML shell is served immediately from the edge CDN, while dynamic Suspense holes stream in concurrently',
            bn: 'এটি একই রুটে স্ট্যাটিক এবং ডায়নামিক স্ট্রিমিংয়ের সমন্বয় ঘটায়: একটি স্ট্যাটিক ফ্রেম সিডিএন থেকে সাথে সাথে আসে আর ডায়নামিক অংশগুলো পরে একই সাথে স্ট্রিম হয়'
          },
          {
            en: 'It deletes half of the HTML tags to save bandwidth',
            bn: 'ব্যান্ডউইথ বাঁচাতে এটি পেজের অর্ধেক এইচটিএমএল ট্যাগ মুছে ফেলে'
          },
          {
            en: 'It allows React to run without HTML or CSS',
            bn: 'এটি রিঅ্যাক্টকে কোনো এইচটিএমএল বা সিএসএস ছাড়াই চলতে সাহায্য করে'
          },
          {
            en: 'PPR converts JavaScript code into SQL queries',
            bn: 'PPR জাভাস্ক্রিপ্ট কোডকে সরাসরি এসকিউএল কোয়েরিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'PPR serves a static shell from CDN while streaming dynamic holes.',
          bn: 'PPR সিডিএন থেকে স্ট্যাটিক ফ্রেম তাৎক্ষণিক পরিবেশন করে আর ডায়নামিক অংশগুলো স্ট্রিম করে।'
        },
        explanation: {
          en: 'Partial Prerendering unifies static and dynamic rendering. The static shell is served with zero latency from the edge, while dynamic components stream into Suspense holes seamlessly.',
          bn: 'PPR-এর মাধ্যমে একটি পেজ সম্পূর্ণ স্ট্যাটিক বা সম্পূর্ণ ডায়নামিক করার সীমাবদ্ধতা দূর হয়। ফ্রেম আসে সিডিএন থেকে পলকে, আর ভেতরের লাইভ ডাটা আসে স্ট্রিমিংয়ের মাধ্যমে।'
        }
      },
      {
        id: 'q-dynamic-io-future-flag',
        kind: 'mcq',
        topic: 'Next.js experimental dynamicIO and cacheLife flags',
        question: {
          en: 'In Next.js 15, what does the experimental "dynamicIO" configuration flag enforce regarding asynchronous data operations in components?',
          bn: 'নেক্সট.জেএস ১৫-এ এক্সপেরিমেন্টাল "dynamicIO" ফ্ল্যাগটি কম্পোনেন্টে অ্যাসিনক্রোনাস ডাটা অপারেশনের ক্ষেত্রে কোন নিয়ম বাধ্যতামূলক করে?'
        },
        options: [
          {
            en: 'It requires every asynchronous I/O operation inside a statically rendered component to be explicitly wrapped in a cache directive (like "use cache"), making caching deliberate rather than accidental',
            bn: 'এটি স্ট্যাটিক কম্পোনেন্টের ভেতরের প্রতিটি অ্যাসিনক্রোনাস ডাটা কলকে স্পষ্টভাবে "use cache" দিয়ে চিহ্নিত করা বাধ্যতামূলক করে যাতে ক্যাশিং দুর্ঘটনাজনক না হয়ে সুপরিকল্পিত হয়'
          },
          {
            en: 'It forces the operating system to run in single-user mode',
            bn: 'এটি অপারেটিং সিস্টেমকে সিঙ্গেল-ইউজার মোডে চলতে বাধ্য করে'
          },
          {
            en: 'It blocks all incoming network traffic on port 443',
            bn: 'এটি ৪৪৩ পোর্টের সমস্ত নেটওয়ার্ক ট্রাফিক আটকে দেয়'
          },
          {
            en: 'dynamicIO turns all text fonts to Comic Sans',
            bn: 'dynamicIO ফন্টের স্টাইল বদলে কমিক স্যানস করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'dynamicIO makes caching explicit with directives like "use cache".',
          bn: 'dynamicIO "use cache"-এর মতো ডিরেক্টিভ ব্যবহারের মাধ্যমে ক্যাশ সুস্পষ্ট ও নিয়ন্ত্রিত করে।'
        },
        explanation: {
          en: 'dynamicIO is the modern caching model for Next.js. Any data access inside a static component must be explicitly marked with "use cache", making performance behavior predictable.',
          bn: 'dynamicIO আধুনিক ক্যাশিং মডেল। এটি নিশ্চিত করে যে প্রতিটি ডাটা ফেচিং স্পষ্টভাবে নির্দেশিত, ফলে কোনো অপ্রত্যাশিত ক্যাশ আচরণ তৈরি হয় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-middleware-gate',
    title: {
      en: 'Edge Middleware — Matchers, Rewrites, Redirects & Header Stamps',
      bn: 'এজ মিডলওয়্যার — ম্যাচার, রিরাইট, রিডাইরেক্ট ও হেডার স্ট্যাম্প'
    }
  }
};
