import type { Lesson } from '../../../lib/types';

export const routingCourtLesson: Lesson = {
  slug: 'the-routing-court',
  tech: 'nextjs',
  title: {
    en: 'Next.js App Router Overview & Routing — Pages, Layouts & Segments',
    bn: 'Next.js অ্যাপ রাউটার ওভারভিউ ও রাউটিং — পেজ, লেআউট ও সেগমেন্ট'
  },
  summary: {
    en: 'Next.js revolutionized React application architecture with the App Router. In this beginner-friendly overview, you will master file-system routing fundamentals. You will learn how layout.tsx preserves state while template.tsx remounts, how dynamic brackets match nested paths, and how route groups organize code without polluting URLs.',
    bn: 'Next.js অ্যাপ রাউটারের মাধ্যমে রিঅ্যাক্ট অ্যাপ্লিকেশন আর্কিটেকচারে এক বৈপ্লবিক পরিবর্তন এনেছে। এই পরিচিতিমূলক পাঠে আপনি ফাইল-সিস্টেম রাউটিংয়ের মূল ভিত্তি শিখবেন। কীভাবে layout.tsx স্টেট ধরে রাখে ও template.tsx নতুন ইনস্ট্যান্স তৈরি করে, কীভাবে ডায়নামিক ব্র্যাকেট পাথ ক্যাপচার করে এবং কীভাবে রুট গ্রুপ ইউআরএল পরিবর্তন না করেই কোড সাজায় তা গভীরভাবে জানবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'app-router-file-system-architecture',
      text: {
        en: 'The App Router File-System Architecture',
        bn: 'অ্যাপ রাউটার ফাইল-সিস্টেম আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build routes in the Next.js App Router, every folder inside the app directory defines a URL path segment. A segment becomes publicly accessible only when you add a page.tsx file. Shared user interface wrappers are declared in layout.tsx files, which wrap their child pages and persist their state across page transitions.',
        bn: 'যখন আপনি Next.js অ্যাপ রাউটারে রুট তৈরি করেন, তখন app ডিরেক্টরির ভেতরের প্রতিটি ফোল্ডার একটি ইউআরএল পাথ সেগমেন্ট গঠন করে। কোনো ফোল্ডারে একটি page.tsx ফাইল যুক্ত করলেই কেবল তা ব্রাউজারে দেখা যায়। একাধিক পেজের জন্য শেয়ার্ড ইন্টারফেস layout.tsx ফাইলে লেখা হয়, যা নেভিগেশনের সময় স্টেট অক্ষুণ্ণ রেখে চাইল্ড পেজগুলোকে ঘিরে রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'page.tsx',
          def: {
            en: 'The special file that makes a route segment publicly accessible and renders the main page content.',
            bn: 'একটি বিশেষ ফাইল যা সংশ্লিষ্ট রুট সেগমেন্টকে ব্রাউজারে ব্যবহারযোগ্য করে এবং পেজের মূল কন্টেন্ট রেন্ডার করে।'
          }
        },
        {
          term: 'layout.tsx',
          def: {
            en: 'A persistent wrapper component that surrounds child pages and preserves React state during client navigation.',
            bn: 'একটি স্থায়ী মোড়ক কম্পোনেন্ট যা চাইল্ড পেজগুলোকে ঘিরে রাখে এবং নেভিগেশনের সময় রিঅ্যাক্ট স্টেট ধরে রাখে।'
          }
        },
        {
          term: 'template.tsx',
          def: {
            en: 'A wrapper component similar to layout, but re-mounts a brand-new component instance on every route change.',
            bn: 'লেআউটের মতো একটি মোড়ক যা প্রতিবার রুট পরিবর্তনের সাথে সাথে সম্পূর্ণ নতুন ইনস্ট্যান্স তৈরি করে রিমাউন্ট হয়।'
          }
        },
        {
          term: 'Dynamic Segments ([slug])',
          def: {
            en: 'Folder names wrapped in square brackets that capture dynamic URL parameters at runtime.',
            bn: 'তৃতীয় বন্ধনীতে থাকা ফোল্ডারের নাম যা রানটাইমে পরিবর্তনশীল ইউআরএল প্যারামিটার গ্রহণ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'routing-conventions-matrix',
      text: {
        en: 'Folder Naming Conventions and Routing Resolution Matrix',
        bn: 'ফোল্ডার নামকরণের নিয়ম ও রাউটিং সমাধান ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Folder Pattern', bn: 'ফোল্ডার প্যাটার্ন' },
        { en: 'Example URL Resolved', bn: 'উদাহরণ ইউআরএল' },
        { en: 'Parameter Shape Captured', bn: 'প্যারামিটারের রূপ' }
      ],
      rows: [
        [
          { en: 'app/blog/[slug]/page.tsx', bn: 'app/blog/[slug]/page.tsx' },
          { en: '/blog/nextjs-guide', bn: '/blog/nextjs-guide' },
          { en: '{ slug: "nextjs-guide" } (single string)', bn: '{ slug: "nextjs-guide" } (একক স্ট্রিং)' }
        ],
        [
          { en: 'app/shop/[...slug]/page.tsx', bn: 'app/shop/[...slug]/page.tsx' },
          { en: '/shop/shoes/running/nike', bn: '/shop/shoes/running/nike' },
          { en: '{ slug: ["shoes", "running", "nike"] } (array of 3 segments)', bn: '{ slug: ["shoes", "running", "nike"] } (৩ সেগমেন্টের অ্যারে)' }
        ],
        [
          { en: 'app/docs/[[...slug]]/page.tsx', bn: 'app/docs/[[...slug]]/page.tsx' },
          { en: '/docs OR /docs/api/v1', bn: '/docs অথবা /docs/api/v1' },
          { en: '{ slug: undefined } OR { slug: ["api", "v1"] } (optional)', bn: '{ slug: undefined } অথবা { slug: ["api", "v1"] } (ঐচ্ছিক)' }
        ],
        [
          { en: 'app/(marketing)/about/page.tsx', bn: 'app/(marketing)/about/page.tsx' },
          { en: '/about (route group excluded from URL)', bn: '/about (রুট গ্রুপ ইউআরএলে যুক্ত হয় না)' },
          { en: 'No parameter (logical organizational grouping only)', bn: 'কোনো প্যারামিটার নেই (কেবল কোড সাজানোর গ্রুপ)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'routing-simulator-code',
      text: {
        en: 'Working Route Resolution and Precedence Simulation',
        bn: 'কার্যকরী রুট রেজোলিউশন ও অগ্রাধিকার সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js App Router Matching and Async Params
class MockAppRouter {
  constructor() {
    this.routes = [
      { pattern: /^\/blog\/latest$/, type: 'static', priority: 1, handler: () => ({ type: 'static-latest' }) },
      { pattern: /^\/blog\/([^/]+)$/, type: 'dynamic', priority: 2, handler: (m) => ({ slug: m[1] }) },
      { pattern: /^\/shop\/(.+)$/, type: 'catch-all', priority: 3, handler: (m) => ({ segments: m[1].split('/') }) }
    ];
  }

  // Precedence rule: Static matches take priority over Dynamic brackets
  resolve(pathname) {
    for (const route of this.routes) {
      const match = pathname.match(route.pattern);
      if (match) {
        return { matched: true, type: route.type, data: route.handler(match) };
      }
    }
    return { matched: false, type: '404' };
  }
}

const router = new MockAppRouter();

// 1. Static route test
const staticRes = router.resolve('/blog/latest');
// 2. Dynamic route test
const dynamicRes = router.resolve('/blog/react-19');
// 3. Catch-all route test with 3 segments
const catchAllRes = router.resolve('/shop/clothing/jackets/winter');

console.log('Static route match type:', staticRes.type);
// -> Static route match type: static
console.log('Dynamic route slug extracted:', dynamicRes.data.slug);
// -> Dynamic route slug extracted: react-19
console.log('Catch-all segments array length:', catchAllRes.data.segments.length);
// -> Catch-all segments array length: 3`,
      caption: {
        en: 'Router correctly resolves static type and extracts 3 catch-all segments',
        bn: 'রাউটার স্ট্যাটিক রুট সঠিকভাবে শনাক্ত করছে এবং ৩টি ক্যাচ-অল সেগমেন্ট বের করছে'
      }
    },
    {
      type: 'heading',
      id: 'layout-vs-template-rules',
      text: {
        en: 'Layouts, Templates and Navigation Rules',
        bn: 'লেআউট, টেমপ্লেট ও নেভিগেশন নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding when to choose layout.tsx versus template.tsx is a core architectural decision. Layouts maintain scroll positions, form inputs, and audio playback across page navigations. Templates recreate their entire DOM subtree on each navigation, making them the proper choice for CSS entry animations, resetting search forms, or tracking page-view telemetry.',
        bn: 'layout.tsx বনাম template.tsx বেছে নেওয়া নেক্সট.জেএস-এর একটি মৌলিক আর্কিটেকচারাল সিদ্ধান্ত। লেআউট স্ক্রল পজিশন, ফর্ম ইনপুট এবং অডিও প্লেয়ার টিকিয়ে রাখে। অন্যদিকে টেমপ্লেট প্রতিবার নেভিগেশনে নতুন ডম তৈরি করে, যা এন্ট্রি অ্যানিমেশন বা পেজ-ভিউ মেট্রিক্স সংগ্রহের জন্য উপযুক্ত।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Static Outranks Dynamic: A static segment like /blog/popular always takes priority over the dynamic /blog/[slug].',
          bn: '১. স্ট্যাটিকের অগ্রাধিকার: /blog/popular-এর মতো স্ট্যাটিক রুট সর্বদা ডায়নামিক /blog/[slug]-এর চেয়ে আগে অগ্রাধিকার পায়।'
        },
        {
          en: '2. Route Groups for Organization: Use parentheses like app/(dashboard)/settings to organize folders without modifying the public URL path.',
          bn: '২. রুট গ্রুপে বন্ধনী: ইউআরএল পরিবর্তন না করে কোড সাজাতে app/(dashboard)/settings-এর মতো বন্ধনীযুক্ত ফোল্ডার ব্যবহার করুন।'
        },
        {
          en: '3. Private Folders with Underscores: Prefix internal utility folders with an underscore (_components) to exclude them from routing completely.',
          bn: '৩. প্রাইভেট ফোল্ডারে আন্ডারস্কোর: রাউটিং থেকে ফোল্ডার সম্পূর্ণ আড়াল করতে নামের শুরুতে আন্ডারস্কোর (_components) ব্যবহার করুন।'
        },
        {
          en: '4. Await Asynchronous Params: In Next.js 15+, always await the params and searchParams promises in your page components.',
          bn: '৪. অ্যাসিনক্রোনাস params await করুন: নেক্সট.জেএস ১৫+-এ পেজ কম্পোনেন্টে params ও searchParams প্রমিজ সর্বদা await করে ডাটা পড়ুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-rot-ex1',
      kind: 'mcq',
      topic: 'app router file system page requirement',
      question: {
        en: 'Which specific file must exist inside a folder in the "app" directory to make that path segment publicly reachable in the browser?',
        bn: 'ব্রাউজারে কোনো পাথ সেগমেন্টকে দৃশ্যমান করতে "app" ডিরেক্টরির ভেতরের ফোল্ডারে কোন নির্দিষ্ট ফাইলটি থাকা আবশ্যক?'
      },
      options: [
        {
          en: 'page.tsx (or page.js / page.jsx)',
          bn: 'page.tsx (বা page.js / page.jsx)'
        },
        {
          en: 'index.html',
          bn: 'index.html ফাইল'
        },
        {
          en: 'route.config.json',
          bn: 'route.config.json কনফিগ'
        },
        {
          en: 'view.component.ts',
          bn: 'view.component.ts ফাইল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The App Router reserves the special filename "page.tsx" for public route views.',
        bn: 'অ্যাপ রাউটারে পেজ তৈরির জন্য সংরক্ষিত ফাইলের নাম হলো "page.tsx"।'
      },
      explanation: {
        en: 'In the App Router, only folders containing a page.tsx file become publicly accessible routes. Other files (like helper components) in the folder are not routable.',
        bn: 'অ্যাপ রাউটারে কেবল page.tsx থাকলেই ফোল্ডারটি পাবলিক রুট হয়। একই ফোল্ডারে অন্য কোনো হেল্পার ফাইল থাকলে তা সরাসরি রুটে পরিণত হয় না।'
      }
    },
    {
      id: 'nx-rot-ex2',
      kind: 'mcq',
      topic: 'layout versus template state persistence',
      question: {
        en: 'What is the primary difference between "layout.tsx" and "template.tsx" when navigating between sibling routes in Next.js?',
        bn: 'Next.js-এ পাশাপাশি রুটে নেভিগেশনের সময় "layout.tsx" এবং "template.tsx"-এর মধ্যে প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'layout.tsx persists across navigations and preserves React component state, whereas template.tsx creates a new component instance and remounts its DOM tree on every navigation',
          bn: 'layout.tsx নেভিগেশনে টিকে থাকে এবং রিঅ্যাক্ট স্টেট অক্ষুণ্ণ রাখে, আর template.tsx প্রতিবার নেভিগেশনে নতুন কম্পোনেন্ট তৈরি করে রিমাউন্ট হয়'
        },
        {
          en: 'layout.tsx only runs on mobile devices while template.tsx runs on desktop browsers',
          bn: 'layout.tsx কেবল মোবাইলে চলে আর template.tsx চলে কম্পিউটারে'
        },
        {
          en: 'template.tsx converts React components into PHP scripts',
          bn: 'template.tsx রিঅ্যাক্ট কম্পোনেন্টকে পিএইচপি স্ক্রিপ্টে বদলে দেয়'
        },
        {
          en: 'There is no difference; they are exact aliases for each other',
          bn: 'এদের মধ্যে কোনো তফাত নেই; তারা একে অপরের হুবহু প্রতিশব্দ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Layouts preserve state across navigations; templates re-instantiate on every navigation.',
        bn: 'লেআউট নেভিগেশনে স্টেট টিকিয়ে রাখে; টেমপ্লেট প্রতিবার নতুন করে শুরু হয়।'
      },
      explanation: {
        en: 'Layouts preserve DOM elements and React state when navigating between child routes. Templates remount fresh instances, which is useful for page-enter CSS animations and telemetry.',
        bn: 'লেআউট তার ভেতরের স্টেট ও স্ক্রল পজিশন টিকিয়ে রাখে। কিন্তু টেমপ্লেট প্রতিবার নতুন ইনস্ট্যান্স তৈরি করে যা পেজ ট্রানজিশন অ্যানিমেশন তৈরির জন্য আদর্শ।'
      }
    },
    {
      id: 'nx-rot-ex3',
      kind: 'mcq',
      topic: 'route groups naming syntax',
      question: {
        en: 'How do you create a "Route Group" in the Next.js App Router to organize folder structure without adding a segment to the public URL?',
        bn: 'পাবলিক ইউআরএলে বাড়তি সেগমেন্ট যুক্ত না করে কেবল ফোল্ডার সাজাতে Next.js অ্যাপ রাউটারে কীভাবে "রুট গ্রুপ" তৈরি করতে হয়?'
      },
      options: [
        {
          en: 'Wrap the folder name in parentheses, such as "(marketing)" or "(dashboard)"',
          bn: 'ফোল্ডারের নাম প্রথম বন্ধনীতে মুড়ে, যেমন "(marketing)" বা "(dashboard)"'
        },
        {
          en: 'Prefix the folder name with an exclamation mark, like "!marketing"',
          bn: 'ফোল্ডারের নামের শুরুতে একটি বিস্ময়চিহ্ন দিয়ে, যেমন "!marketing"'
        },
        {
          en: 'Add a ".group" extension to the folder name',
          bn: 'ফোল্ডারের নামের শেষে ".group" এক্সটেনশন যোগ করে'
        },
        {
          en: 'Wrap the folder name in curly braces, like "{marketing}"',
          bn: 'ফোল্ডারের নাম দ্বিতীয় বন্ধনীতে মুড়ে, যেমন "{marketing}"'
        }
      ],
      answer: 0,
      hint: {
        en: 'Route groups use standard parentheses () to signal that the segment should be omitted from the URL.',
        bn: 'রুট গ্রুপে প্রথম বন্ধনী () ব্যবহার করে বুঝিয়ে দেওয়া হয় যে এই নাম ইউআরএলে আসবে না।'
      },
      explanation: {
        en: 'Wrapping a folder name in parentheses (e.g. (shop)) creates a route group. The folder name is completely omitted from the resulting URL structure.',
        bn: 'ফোল্ডারের নামে প্রথম বন্ধনী (যেমন (shop)) দিলে তা রুট গ্রুপ হয়। এটি ইউআরএলে যুক্ত হয় না, কিন্তু আলাদা লেআউট ভাগ করতে দারুণ ভূমিকা রাখে।'
      }
    },
    {
      id: 'nx-rot-ex4',
      kind: 'mcq',
      topic: 'catch-all versus optional catch-all syntax',
      question: {
        en: 'What is the syntactic difference between a catch-all route and an optional catch-all route in Next.js?',
        bn: 'Next.js-এ ক্যাচ-অল রুট এবং ঐচ্ছিক ক্যাচ-অল রুটের মধ্যে সিনট্যাক্সগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'Catch-all uses single brackets "[...slug]" and requires at least 1 path segment, while optional catch-all uses double brackets "[[...slug]]" and also matches the base URL without parameters',
          bn: 'ক্যাচ-অলে একক বন্ধনী "[...slug]" থাকে এবং কমপক্ষে ১টি সেগমেন্ট লাগে, আর ঐচ্ছিক ক্যাচ-অলে ডাবল বন্ধনী "[[...slug]]" থাকে যা কোনো প্যারামিটার ছাড়াও বেস ইউআরএল ম্যাচ করে'
        },
        {
          en: 'Catch-all only accepts numbers while optional catch-all only accepts strings',
          bn: 'ক্যাচ-অল শুধু সংখ্যা গ্রহণ করে আর ঐচ্ছিক ক্যাচ-অল শুধু স্ট্রিং গ্রহণ করে'
        },
        {
          en: 'Optional catch-all can only be used inside the public/ folder',
          bn: 'ঐচ্ছিক ক্যাচ-অল কেবল public/ ফোল্ডারের ভেতর ব্যবহার করা যায়'
        },
        {
          en: 'Double brackets are a syntax error in Next.js',
          bn: 'Next.js-এ ডাবল বন্ধনী ব্যবহার একটি সিনট্যাক্স এরর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Single brackets [...slug] require segments; double brackets [[...slug]] make segments optional.',
        bn: 'একক বন্ধনীতে সেগমেন্ট আবশ্যক; ডাবল বন্ধনীতে সেগমেন্ট ঐচ্ছিক।'
      },
      explanation: {
        en: 'app/docs/[...slug] matches /docs/a and /docs/a/b, but not /docs. app/docs/[[...slug]] matches /docs (slug is undefined) as well as /docs/a and /docs/a/b.',
        bn: '[...slug] রুটে বেস ইউআরএল কাজ করে না; কিন্তু [[...slug]] দিলে বাড়তি সেগমেন্ট ছাড়া মূল পাথটিও (যেমন /docs) একই ফাইলে হ্যান্ডল করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-routing-court-quiz',
    title: {
      en: 'Next.js App Router Architecture & Routing Quiz',
      bn: 'Next.js অ্যাপ রাউটার আর্কিটেকচার ও রাউটিং কুইজ'
    },
    questions: [
      {
        id: 'q-route-matching-precedence',
        kind: 'mcq',
        topic: 'matching precedence between static, dynamic and catch-all routes',
        question: {
          en: 'If an application defines "/blog/latest/page.tsx", "/blog/[slug]/page.tsx", and "/blog/[...all]/page.tsx", which page renders when a user visits "/blog/latest"?',
          bn: 'যদি কোনো অ্যাপে "/blog/latest/page.tsx", "/blog/[slug]/page.tsx" এবং "/blog/[...all]/page.tsx" থাকে, তবে ভিজিটর "/blog/latest"-এ গেলে কোনটি রেন্ডার হবে?'
        },
        options: [
          {
            en: 'The static route "/blog/latest/page.tsx", because Next.js route matching prioritizes static matches over dynamic segments and catch-all segments',
            bn: 'স্ট্যাটিক রুট "/blog/latest/page.tsx", কারণ Next.js রাউটিংয়ে স্ট্যাটিক ম্যাচ সর্বদা ডায়নামিক ও ক্যাচ-অলের চেয়ে আগে অগ্রাধিকার পায়'
          },
          {
            en: 'The dynamic route "/blog/[slug]/page.tsx" with slug set to "latest"',
            bn: 'ডায়নামিক রুট "/blog/[slug]/page.tsx" যেখানে slug হবে "latest"'
          },
          {
            en: 'The catch-all route "/blog/[...all]/page.tsx"',
            bn: 'ক্যাচ-অল রুট "/blog/[...all]/page.tsx"'
          },
          {
            en: 'Next.js throws an ambiguous route collision error at runtime',
            bn: 'Next.js রানটাইমে রুট কলিশন এরর ছুড়ে দেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Static routes always have the highest specificity and outrank dynamic routes.',
          bn: 'স্ট্যাটিক রুটের সুনির্দিষ্টতা সবচেয়ে বেশি হওয়ায় তা ডায়নামিক রুটের চেয়ে আগে চলে।'
        },
        explanation: {
          en: 'Next.js resolves routes by specificity: static routes take highest priority, followed by dynamic single-bracket routes ([slug]), followed finally by catch-all routes ([...slug]).',
          bn: 'Next.js সুনির্দিষ্টতার ভিত্তিতে রুট বাছাই করে: স্ট্যাটিক রুট সবার আগে, এরপর সিঙ্গেল ডায়নামিক এবং সবশেষে ক্যাচ-অল রুট কার্যকর হয়।'
        }
      },
      {
        id: 'q-nextjs15-async-params-rule',
        kind: 'mcq',
        topic: 'asynchronous params handling in modern nextjs',
        question: {
          en: 'Why must developers write "const { slug } = await params;" instead of accessing params synchronously in Next.js 15+ page components?',
          bn: 'নেক্সট.জেএস ১৫+ পেজ কম্পোনেন্টে সরাসরি সিনক্রোনাস এক্সেস না করে "const { slug } = await params;" কেন লিখতে হয়?'
        },
        options: [
          {
            en: 'In React 19 and Next.js 15+, params and searchParams are provided as asynchronous Promises, enabling server optimizations like streaming without blocking on full URL parsing',
            bn: 'রিঅ্যাক্ট ১৯ ও নেক্সট.জেএস ১৫+-এ params এবং searchParams প্রমিজ হিসেবে সরবরাহ করা হয়, যাতে সম্পূর্ণ ইউআরএল পার্সিংয়ের জন্য অপেক্ষা না করেই সার্ভার স্ট্রিমিং দ্রুত শুরু হতে পারে'
          },
          {
            en: 'To slow down server execution for security scanning',
            bn: 'নিরাপত্তা স্ক্যানিংয়ের সুবিধার্থে সার্ভারের গতি কমিয়ে রাখার জন্য'
          },
          {
            en: 'Because JavaScript no longer supports object destructuring',
            bn: 'কারণ জাভাস্ক্রিপ্ট অবজেক্ট ডিস্ট্রাকচারিং আর সমর্থন করে না'
          },
          {
            en: 'Params can only be read inside client components with useEffect',
            bn: 'Params কেবল useEffect হুক দিয়ে ক্লায়েন্ট কম্পোনেন্টেই পড়া সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Next.js 15 turned route parameters into Promises to unlock asynchronous streaming benefits.',
          bn: 'নেক্সট.জেএস ১৫ স্ট্রিমিং পারফরম্যান্স বাড়াতে রুট প্যারামিটারকে প্রমিজে রূপান্তরিত করেছে।'
        },
        explanation: {
          en: 'Starting in Next.js 15, params and searchParams are Promises. Awaiting them allows Next.js to stream earlier markup before all request parameters are fully resolved.',
          bn: 'নেক্সট.জেএস ১৫ থেকে params ও searchParams হলো প্রমিজ। এগুলো await করার ফলে রিকোয়েস্টের পূর্ণ ডাটা আসার আগেই সার্ভার থেকে তাৎক্ষণিক স্ট্রিমিং সম্ভব হয়।'
        }
      },
      {
        id: 'q-private-folders-underscore-usecase',
        kind: 'mcq',
        topic: 'purpose of private folders with underscore prefix',
        question: {
          en: 'What is the purpose of prefixing a folder name with an underscore (such as "_components" or "_lib") inside the "app" directory?',
          bn: '"app" ডিরেক্টরির ভেতরে কোনো ফোল্ডারের নামের শুরুতে আন্ডারস্কোর (যেমন "_components" বা "_lib") দেওয়ার উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It marks the folder and all its subfolders as private, opting them out of the routing system completely so colocated helper files never become accessible URLs',
            bn: 'এটি ফোল্ডারটিকে প্রাইভেট চিহ্নিত করে রাউটিং সিস্টেম থেকে সম্পূর্ণ বাদ দেয়, ফলে হেল্পার বা ইউটিলিটি ফাইলগুলো কখনোই অসাবধানতাবশত পাবলিক ইউআরএল হয় না'
          },
          {
            en: 'It encrypts the folder files with AES-128',
            bn: 'এটি ফোল্ডারের ফাইলগুলোকে এইএস-১২৮ দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It converts TypeScript files into Python scripts',
            bn: 'এটি টাইপস্ক্রিপ্ট ফাইলকে পাইথন কোডে বদলে দেয়'
          },
          {
            en: 'It creates a hidden folder only accessible to administrators',
            bn: 'এটি একটি গোপন ফোল্ডার তৈরি করে যা কেবল অ্যাডমিনরা দেখতে পায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Underscore prefixing excludes folders from routing for co-located internal modules.',
          bn: 'আন্ডারস্কোর যুক্ত ফোল্ডার রাউটিংয়ের অংশ হয় না, ফলে সেখানে নিরাপদে নিজস্ব কোড রাখা যায়।'
        },
        explanation: {
          en: 'By convention, a folder starting with an underscore (e.g. app/blog/_components) tells Next.js to ignore it during route mapping, ensuring clean co-location.',
          bn: 'আন্ডারস্কোর দিয়ে নাম শুরু করলে Next.js সেটিকে রুট হিসেবে গণ্য করে না। ফলে একই জায়গায় পেজের প্রয়োজনীয় কম্পোনেন্ট গুছিয়ে রাখা সহজ হয়।'
        }
      },
      {
        id: 'q-parallel-routes-interception-slot',
        kind: 'mcq',
        topic: 'parallel routes named slots syntax',
        question: {
          en: 'How are "Parallel Routes" created in the Next.js App Router, enabling multiple pages to render simultaneously in the same layout?',
          bn: 'একই লেআউটে একাধিক পেজ একসাথে রেন্ডার করার জন্য Next.js অ্যাপ রাউটারে কীভাবে "প্যারালাল রুট" তৈরি করা হয়?'
        },
        options: [
          {
            en: 'By creating named slots with an "@" symbol prefix (e.g. "@analytics" and "@team") and accepting them as props in "layout.tsx"',
            bn: '"@" চিহ্ন দিয়ে শুরু হওয়া ফোল্ডার (যেমন "@analytics" ও "@team") তৈরি করে এবং সেগুলোকে "layout.tsx"-এ প্রপস হিসেবে গ্রহণ করে'
          },
          {
            en: 'By opening multiple browser tabs at the same time',
            bn: 'একসাথে ব্রাউজারে একাধিক ট্যাব খুলে'
          },
          {
            en: 'By writing two return statements inside page.tsx',
            bn: 'page.tsx-এর ভেতর দুটি return স্টেটমেন্ট লিখে'
          },
          {
            en: 'Parallel routes are only possible with Web Workers',
            bn: 'প্যারালাল রুট কেবল ওয়েব ওয়ার্কার দিয়ে চালানো সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Parallel routes use the @slot folder naming convention passed to parent layouts.',
          bn: 'প্যারালাল রুটের ফোল্ডারের শুরুতে @ চিহ্ন (যেমন @slot) থাকে যা লেআউটে প্রপস হিসেবে আসে।'
        },
        explanation: {
          en: 'Parallel Routes use named slots defined with @folder (e.g. @analytics). The parent layout receives them alongside children: export default function Layout({ children, analytics, team }) { ... }.',
          bn: 'প্যারালাল রুটে @analytics বা @team নামের স্লট তৈরি করা হয়। প্যারেন্ট লেআউট children-এর পাশাপাশি এগুলোকেও সরাসরি প্রপস হিসেবে পেয়ে পাশাপাশি রেন্ডার করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-server-client-border',
    title: {
      en: 'Server vs Client Components — The React Server Components Boundary',
      bn: 'সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্টস — রিঅ্যাক্ট সার্ভার কম্পোনেন্টস বাউন্ডারি'
    }
  }
};
