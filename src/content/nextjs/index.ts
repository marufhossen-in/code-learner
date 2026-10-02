import type { Hub } from '../../lib/types';
import { routingCourtLesson } from './lessons/the-routing-court';
import { serverClientBorderLesson } from './lessons/the-server-client-border';
import { dataLedgerLesson } from './lessons/the-data-ledger';
import { renderingAssemblyLesson } from './lessons/the-rendering-assembly';
import { middlewareGateLesson } from './lessons/the-middleware-gate';
import { routeHandlersLesson } from './lessons/the-route-handlers';
import { serverActionsLesson } from './lessons/the-server-actions';
import { emergencyCourtLesson } from './lessons/the-emergency-court';
import { metadataCourtLesson } from './lessons/the-metadata-court';

export const nextjsHub: Hub = {
  slug: 'nextjs',
  name: 'Next.js',
  icon: '▲',
  tagline: {
    en: 'Production React framework with App Router, Server Components, Streaming SSR, and granular Cache architectures.',
    bn: 'অ্যাপ রাউটার, সার্ভার কম্পোনেন্টস, স্ট্রিমিং SSR এবং নিখুঁত ক্যাশ আর্কিটেকচার সমৃদ্ধ প্রোডাকশন রিঅ্যাক্ট ফ্রেমওয়ার্ক।'
  },
  about: {
    en: 'Next.js is the premier React full-stack framework powering enterprise web applications. With the modern App Router architecture, the file system directly defines your application routes, layouts preserve state across transitions, and React Server Components (RSC) fetch data on the server with zero client JavaScript bundle overhead. Learn how to manage the boundary between Server and Client Components, control caching policies with tags and path revalidation, streamline form mutations with Server Actions, protect routes via Edge Middleware, and build production-ready applications with streaming Suspense fallbacks.',
    bn: 'Next.js হলো এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশনের জন্য বিশ্বের অন্যতম শীর্ষস্থানীয় রিঅ্যাক্ট ফুল-স্ট্যাক ফ্রেমওয়ার্ক। এর আধুনিক অ্যাপ রাউটার আর্কিটেকচারে ফাইল সিস্টেম সরাসরি রুট নির্ধারণ করে, লেআউট স্টেট ধরে রাখে এবং রিঅ্যাক্ট সার্ভার কম্পোনেন্টস (RSC) কোনো ক্লায়েন্ট বান্ডল ছাড়াই সার্ভার থেকে সরাসরি ডাটা ফেচ করে। সার্ভার ও ক্লায়েন্ট কম্পোনেন্টের সীমারেখা, ট্যাগ ও পাথ রিভ্যালিডেশন ক্যাশ নীতি, সার্ভার অ্যাকশন দিয়ে ফর্ম মিউটেশন, এজ মিডলওয়্যার দিয়ে রুট প্রটেকশন এবং স্ট্রিমিং সাসপেন্স আর্কিটেকচার এই ট্র্যাকে গভীরভাবে শিখুন।'
  },
  roadmap: [
    {
      title: { en: 'Phase 1: App Router & File-System Routing', bn: 'প্রথম ধাপ: অ্যাপ রাউটার ও ফাইল-সিস্টেম রাউটিং' },
      items: [
        { en: 'Folder-based routing: page.tsx, layout.tsx, and template.tsx (Lesson 1)', bn: 'ফোল্ডার-ভিত্তিক রাউটিং: page.tsx, layout.tsx ও template.tsx (পাঠ ১)' },
        { en: 'Dynamic segments: [slug], catch-all [...slug], and optional catch-all [[...slug]]', bn: 'ডায়নামিক সেগমেন্ট: [slug], ক্যাচ-অল [...slug] ও ঐচ্ছিক ক্যাচ-অল [[...slug]]' },
        { en: 'Route groups (group) and private folders _private', bn: 'রুট গ্রুপ (group) ও প্রাইভেট ফোল্ডার _private' },
        { en: 'Awaiting params and searchParams in React 19 / Next.js 15', bn: 'রিঅ্যাক্ট ১৯ / নেক্সট.জেএস ১৫-এ params ও searchParams await করা' }
      ]
    },
    {
      title: { en: 'Phase 2: Server vs Client Components & Data Fetching', bn: 'দ্বিতীয় ধাপ: সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্ট ও ডাটা ফেচিং' },
      items: [
        { en: 'React Server Components (RSC) by default with zero browser bundle (Lesson 2)', bn: 'ডিফল্ট রিঅ্যাক্ট সার্ভার কম্পোনেন্টস ও জিরো ব্রাউজার বান্ডল (পাঠ ২)' },
        { en: '"use client" boundary directive and serializable props rules', bn: '"use client" বাউন্ডারি ডিরেক্টিভ ও সিরিয়ালাইজযোগ্য প্রপস নিয়মাবলী' },
        { en: 'Composition patterns: passing Server Components as children to Client Components', bn: 'কম্পোজিশন প্যাটার্ন: ক্লায়েন্ট কম্পোনেন্টে চিলড্রেন হিসেবে সার্ভার কম্পোনেন্ট পাস করা' },
        { en: 'Data fetching cache options: force-cache, no-store, and revalidate (Lesson 3)', bn: 'ডাটা ফেচিং ক্যাশ বিকল্প: force-cache, no-store ও revalidate (পাঠ ৩)' }
      ]
    },
    {
      title: { en: 'Phase 3: Rendering, Middleware & Server Actions', bn: 'তৃতীয় ধাপ: রেন্ডারিং, মিডলওয়্যার ও সার্ভার অ্যাকশনস' },
      items: [
        { en: 'Static vs Dynamic Rendering, ISR, and Streaming SSR (Lesson 4)', bn: 'স্ট্যাটিক বনাম ডায়নামিক রেন্ডারিং, ISR ও স্ট্রিমিং SSR (পাঠ ৪)' },
        { en: 'Edge Middleware: matchers, redirects, rewrites, and headers (Lesson 5)', bn: 'এজ মিডলওয়্যার: ম্যাচার, রিডাইরেক্ট, রিরাইট ও হেডার (পাঠ ৫)' },
        { en: 'Route Handlers: building REST API endpoints with NextRequest/NextResponse (Lesson 6)', bn: 'রুট হ্যান্ডলারস: NextRequest/NextResponse দিয়ে REST API তৈরি (পাঠ ৬)' },
        { en: 'Server Actions with "use server" and progressive form enhancement (Lesson 7)', bn: '"use server" দিয়ে সার্ভার অ্যাকশন ও প্রগ্রেসিভ ফর্ম এনহ্যান্সমেন্ট (পাঠ ৭)' }
      ]
    },
    {
      title: { en: 'Phase 4: Fault Tolerance, SEO & Production Deployment', bn: 'চতুর্থ ধাপ: ফল্ট টলারেন্স, এসইও ও প্রোডাকশন ডেপ্লয়মেন্ট' },
      items: [
        { en: 'Error boundaries with error.tsx, global-error.tsx, and not-found.tsx (Lesson 8)', bn: 'error.tsx, global-error.tsx ও not-found.tsx দিয়ে এরর বাউন্ডারি (পাঠ ৮)' },
        { en: 'Static and dynamic metadata generation with generateMetadata (Lesson 9)', bn: 'generateMetadata দিয়ে স্ট্যাটিক ও ডায়নামিক এসইও মেটাডাটা তৈরি (পাঠ ৯)' },
        { en: 'Dynamic sitemap.xml and robots.txt generation', bn: 'ডায়নামিক sitemap.xml ও robots.txt তৈরি' },
        { en: 'Production optimization: next/image, standalone output, and Docker', bn: 'প্রোডাকশন অপটিমাইজেশন: next/image, স্ট্যান্ডঅ্যালোন আউটপুট ও ডকার' }
      ]
    }
  ],
  lessons: [
    routingCourtLesson,
    serverClientBorderLesson,
    dataLedgerLesson,
    renderingAssemblyLesson,
    middlewareGateLesson,
    routeHandlersLesson,
    serverActionsLesson,
    emergencyCourtLesson,
    metadataCourtLesson
  ],
  reference: [
    {
      group: 'Core Special Files',
      methods: [
        {
          name: 'page.tsx',
          signature: 'export default async function Page({ params, searchParams })',
          params: { en: 'Defines the unique UI content for a route segment. Rendered on the server by default.', bn: 'রুট সেগমেন্টের নির্দিষ্ট ইউআই কন্টেন্ট নির্ধারণ করে। ডিফল্টভাবে সার্ভারে রেন্ডার হয়।' },
          returns: { en: 'Server or client React component tree.', bn: 'সার্ভার বা ক্লায়েন্ট রিঅ্যাক্ট কম্পোনেন্ট ট্রি।' },
          example: 'app/products/[id]/page.tsx'
        },
        {
          name: 'layout.tsx',
          signature: 'export default function Layout({ children }: { children: ReactNode })',
          params: { en: 'Shared UI wrapper wrapping descendant segments. Preserves component state across navigation.', bn: 'শেয়ার্ড ইউআই মোড়ক যা সাব-রুটে স্টেট অক্ষুণ্ণ রাখে।' },
          returns: { en: 'Persistent layout wrapper around children.', bn: 'চিলড্রেন প্রপসকে ঘিরে থাকা স্থায়ী লেআউট।' },
          example: 'app/dashboard/layout.tsx'
        },
        {
          name: 'loading.tsx / error.tsx',
          signature: 'loading.tsx (Suspense fallback) | error.tsx (Error Boundary)',
          params: { en: 'Co-located streaming loading skeletons and client-side error boundaries for isolated segments.', bn: 'আলাদা সেগমেন্টের জন্য তাৎক্ষণিক স্ট্রিমিং লোডিং কঙ্কাল ও ক্লায়েন্ট এরর বাউন্ডারি।' },
          returns: { en: 'Isolated loading UI or fallback error UI with reset().', bn: 'আইসোলেটেড লোডিং ইউআই বা reset() সুবিধাসহ এরর ফলব্যাক।' },
          example: 'app/feed/loading.tsx'
        }
      ]
    },
    {
      group: 'Boundary Directives',
      methods: [
        {
          name: '"use client"',
          signature: 'Directive placed at the top of a file',
          params: { en: 'Marks the boundary where React hydration begins, enabling useState, useEffect, and browser event listeners.', bn: 'রিঅ্যাক্ট হাইড্রেশন শুরু করার ডিরেক্টিভ, যা হুক ও ব্রাউজার ইভেন্ট সক্ষম করে।' },
          returns: { en: 'Client component module boundary.', bn: 'ক্লায়েন্ট কম্পোনেন্ট মডিউল বাউন্ডারি।' },
          example: '"use client"; export default function Counter() { ... }'
        },
        {
          name: '"use server"',
          signature: 'Directive placed at the top of a file or async function',
          params: { en: 'Declares an asynchronous function as a callable Server Action executed exclusively on the server.', bn: 'কোনো ফাংশনকে সার্ভার অ্যাকশন হিসেবে ঘোষণা করে যা কেবল সার্ভারেই চলে।' },
          returns: { en: 'Asynchronous server-side RPC action.', bn: 'অ্যাসিনক্রোনাস সার্ভার-সাইড আরপিসি অ্যাকশন।' },
          example: '"use server"; export async function createItem(formData) { ... }'
        }
      ]
    },
    {
      group: 'Caching & Revalidation',
      methods: [
        {
          name: 'fetch() Caching Options',
          signature: 'fetch(url, { next: { revalidate: 60, tags: ["posts"] } })',
          params: { en: 'Configures time-based revalidation (ISR) or invalidation tags for fine-grained cache lifecycles.', bn: 'সময়ভিত্তিক রিভ্যালিডেশন বা নির্দিষ্ট ট্যাগ দিয়ে ক্যাশ লাইফসাইকেল নিয়ন্ত্রণ।' },
          returns: { en: 'Cached or fresh Promise<Response>.', bn: 'ক্যাশড বা তাজা রেসপন্স প্রমিজ।' },
          example: 'fetch("/api/catalog", { next: { revalidate: 300 } })'
        },
        {
          name: 'revalidateTag() / revalidatePath()',
          signature: 'revalidateTag(tag: string) | revalidatePath(path: string)',
          params: { en: 'Purges cached data on-demand after mutations so subsequent visitors receive fresh content immediately.', bn: 'মিউটেশনের পর তৎক্ষণাৎ ক্যাশ বাতিল করে যাতে পরবর্তী ভিজিটর তাজা ডাটা পায়।' },
          returns: { en: 'Void. Triggers on-demand cache purge.', bn: 'তাত্ক্ষণিকভাবে নির্দিষ্ট ক্যাশ মুছে ফেলে।' },
          example: 'revalidateTag("cart-items")'
        }
      ]
    }
  ],
  projects: [
    {
      title: { en: 'E-Commerce Marketplace with App Router', bn: 'অ্যাপ রাউটার দিয়ে ই-কমার্স মার্কেটপ্লেস' },
      diff: 'beginner',
      desc: {
        en: 'Build a high-performance e-commerce storefront featuring dynamic [category]/[slug] product pages, nested category layouts, search filter parameters, and instant navigation.',
        bn: 'ডায়নামিক [category]/[slug] প্রোডাক্ট পেজ, নেস্টেড ক্যাটাগরি লেআউট, সার্চ ফিল্টারিং এবং দ্রুত নেভিগেশন সহ একটি উচ্চগতির ই-কমার্স স্টোরফ্রন্ট তৈরি করুন।'
      }
    },
    {
      title: { en: 'Streaming Dashboard with Server Actions & Suspense', bn: 'সার্ভার অ্যাকশন ও সাসপেন্স চালিত স্ট্রিমিং ড্যাশবোর্ড' },
      diff: 'intermediate',
      desc: {
        en: 'Develop an analytics dashboard featuring parallel route metrics, Suspense-streamed charts, optimistic UI updates with useOptimistic, and Zod-validated Server Actions.',
        bn: 'প্যারালাল রুট মেট্রিক্স, সাসপেন্স স্ট্রিমিং চার্ট, useOptimistic দিয়ে অপটিমিস্টিক আপডেট এবং Zod ভ্যালিডেটেড সার্ভার অ্যাকশন সমৃদ্ধ অ্যানালিটিক্স ড্যাশবোর্ড তৈরি করুন।'
      }
    },
    {
      title: { en: 'Multi-Tenant SaaS Platform with Edge Middleware', bn: 'এজ মিডলওয়্যার সহ মাল্টি-টেন্যান্ট SaaS প্ল্যাটফর্ম' },
      diff: 'advanced',
      desc: {
        en: 'Architect an enterprise SaaS platform utilizing Edge Middleware for custom subdomain rewrites, JWT authentication gating, dynamic sitemaps, and standalone Docker deployments.',
        bn: 'কাস্টম সাবডোমেন রিরাইট, JWT অথেনটিকেশন গেট, ডায়নামিক সাইটম্যাপ এবং স্ট্যান্ডঅ্যালোন ডকার ডেপ্লয়মেন্ট সহ একটি মাল্টি-টেন্যান্ট SaaS প্ল্যাটফর্ম নির্মাণ করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: '1. Server Components First: Default to Server Components for data fetching and heavy logic; introduce "use client" only at leaf nodes requiring browser interactivity.',
      bn: '১. সার্ভার কম্পোনেন্ট প্রথমে: ডাটা ফেচিং ও ভারী কাজের জন্য সার্ভার কম্পোনেন্ট ব্যবহার করুন; কেবল ব্রাউজার ইন্টারঅ্যাকশনের প্রয়োজন হলেই পাতার নোডে "use client" যোগ করুন।'
    },
    {
      en: '2. Pass Server Components as Children: Solve RSC-client nesting by passing Server Components as children props into Client Component wrappers.',
      bn: '২. চিলড্রেন প্রপস দিয়ে কম্পোজিশন: ক্লায়েন্ট কম্পোনেন্টের ভেতরে সার্ভার কম্পোনেন্ট রেন্ডার করতে সেগুলোকে চিলড্রেন হিসেবে পাস করুন যাতে বান্ডল সাইজ হালকা থাকে।'
    },
    {
      en: '3. Await Params and SearchParams: In Next.js 15+, always await params and searchParams promises in pages and layouts for future-proof asynchronous resolution.',
      bn: '৩. params ও searchParams await করুন: নেক্সট.জেএস ১৫+-এ পেজ ও লেআউটে params ও searchParams প্রমিজ সর্বদা await করে ডাটা এক্সেস করুন।'
    },
    {
      en: '4. Pair Server Actions with Revalidation: Always call revalidatePath or revalidateTag inside Server Actions after database writes to purge stale UI caches.',
      bn: '৪. অ্যাকশনের সাথে রিভ্যালিডেশন: ডাটাবেজে পরিবর্তনের পর UI-তে তাজা ডাটা দেখাতে সার্ভার অ্যাকশনের ভেতরে revalidatePath বা revalidateTag ডাকুন।'
    },
    {
      en: '5. Fast Middleware Execution: Keep Edge Middleware lightweight with fast cookie checks and URL rewrites; avoid long-running database queries that block page navigation.',
      bn: '৫. দ্রুতগতির মিডলওয়্যার: মিডলওয়্যারে কেবল কুকি চেক ও ইউআরএল রিরাইট করুন; পেজ লোড ধীরগতির হওয়া ঠেকাতে এতে ভারী ডাটাবেজ কোয়েরি এড়িয়ে চলুন।'
    },
    {
      en: '6. Suspense Boundaries for Slow I/O: Wrap slow third-party API calls in React Suspense boundaries with skeleton fallbacks to stream HTML immediately.',
      bn: '৬. ধীর I/O-তে সাসপেন্স বাউন্ডারি: ধীরগতির এপিআই কলগুলোকে Suspense বাউন্ডারিতে মুড়িয়ে তাৎক্ষণিক স্ট্রিমিং লোডিং কঙ্কাল পরিবেশন করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does the App Router architecture differ fundamentally from the legacy Pages Router?',
        bn: 'অ্যাপ রাউটার আর্কিটেকচার ঐতিহ্যবাহী পেজেস রাউটার থেকে কীভাবে মৌলিকভাবে আলাদা?'
      },
      a: {
        en: 'The App Router is built on React Server Components (RSC) by default, eliminating client JavaScript for server-rendered code. It replaces monolithic getServerSideProps/getStaticProps with co-located async components, introduces nested layouts that preserve client state during navigation, and supports fine-grained streaming with React Suspense.',
        bn: 'অ্যাপ রাউটার ডিফল্টভাবে রিঅ্যাক্ট সার্ভার কম্পোনেন্টস (RSC)-এর ওপর তৈরি, যা সার্ভারে চলা কোডের জন্য ক্লায়েন্ট বান্ডল পুরোপুরি শূন্য করে দেয়। এটি getServerSideProps-এর বদলে কম্পোনেন্টেই সরাসরি async ফেচিং, স্টেট অক্ষুণ্ণ রাখা নেস্টেড লেআউট এবং রিঅ্যাক্ট সাসপেন্সের মাধ্যমে দ্রুতগতির স্ট্রিমিং সমর্থন করে।'
      }
    },
    {
      q: {
        en: 'What data types can cross the boundary from Server Components to Client Components?',
        bn: 'সার্ভার কম্পোনেন্ট থেকে ক্লায়েন্ট কম্পোনেন্টে কোন কোন ডাটা টাইপ পাঠানো সম্ভব?'
      },
      a: {
        en: 'Only serializable values can cross the boundary: strings, numbers, booleans, null, undefined, plain arrays, and plain objects. Functions, class instances, Map/Set objects, and Date instances cannot be serialized across the wire. However, React elements passed via the children prop can cross because they are rendered on the server into virtual DOM descriptions.',
        bn: 'কেবল সিরিয়ালাইজযোগ্য মান পাঠানো যায়: স্ট্রিং, সংখ্যা, বুলিয়ান, null, প্লেইন অ্যারে এবং সাধারণ অবজেক্ট। ফাংশন, ক্লাস ইনস্ট্যান্স বা Date অবজেক্ট পাঠানো যায় না। তবে children প্রপস হিসেবে রিঅ্যাক্ট এলিমেন্ট পাঠানো সম্ভব কারণ সার্ভারেই সেগুলোর ভার্চুয়াল ডম তৈরি হয়ে যায়।'
      }
    },
    {
      q: {
        en: 'What is the operational difference between force-cache, no-store, and revalidate in Next.js fetch?',
        bn: 'Next.js fetch-এ force-cache, no-store এবং revalidate-এর মধ্যে কার্যপ্রণালীগত পার্থক্য কী?'
      },
      a: {
        en: 'force-cache stores the HTTP response permanently in the Data Cache for static generation. no-store disables caching entirely, forcing a fresh network roundtrip on every incoming request for dynamic data. revalidate: N implements Incremental Static Regeneration (ISR), serving cached data while lazily refreshing the cache in the background after N seconds.',
        bn: 'force-cache রেসপন্সটিকে ডাটা ক্যাশে স্থায়ীভাবে জমা রেখে স্ট্যাটিক পেজ বানায়। no-store ক্যাশিং বন্ধ রেখে প্রতিটি রিকোয়েস্টে তাজা ডাটা আনে। আর revalidate: N হলো ISR পদ্ধতি, যা N সেকেন্ড পর ব্যাকগ্রাউন্ডে ক্যাশ রিফ্রেশ করে সতেজ ডাটা পরিবেশন করে।'
      }
    },
    {
      q: {
        en: 'How do Server Actions achieve progressive enhancement in form handling?',
        bn: 'ফর্ম হ্যান্ডলিংয়ে সার্ভার অ্যাকশন কীভাবে প্রগ্রেসিভ এনহ্যান্সমেন্ট নিশ্চিত করে?'
      },
      a: {
        en: 'Server Actions integrate natively with HTML <form action={myAction}> elements. Even if client-side JavaScript has not yet downloaded or has failed to load, submitting the form triggers a standard HTTP POST request that the Next.js server executes seamlessly. When JavaScript hydrates, it enhances the form with asynchronous dispatch and optimistic UI.',
        bn: 'সার্ভার অ্যাকশন সরাসরি এইচটিটিপি <form action={myAction}> এর সাথে কাজ করে। ব্রাউজারে জাভাস্ক্রিপ্ট লোড না হলেও বা ধীরগতির নেটওয়ার্কেও ফর্ম সাবমিট করলে সাধারণ HTTP POST হিসেবে সার্ভার অ্যাকশন নিখুঁতভাবে চলে। আর জাভাস্ক্রিপ্ট সক্রিয় হলে তা রিফ্রেশহীন অপটিমিস্টিক ইন্টারঅ্যাকশনে উন্নীত হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Volume E-Commerce: Static category pages revalidated on-demand via webhooks paired with streamed product stock badges.',
      bn: 'উচ্চ ট্রাফিকের ই-কমার্স: ওয়েবহুক দিয়ে ক্যাশ রিভ্যালিডেট হওয়া স্ট্যাটিক ক্যাটালগ পেজ এবং লাইভ স্টকের জন্য স্ট্রিমিং ব্যাজ।'
    },
    {
      en: 'Enterprise Analytics Dashboards: Dynamic SSR with cookie-authenticated Edge Middleware and granular React Suspense metric cards.',
      bn: 'এন্টারপ্রাইজ অ্যানালিটিক্স ড্যাশবোর্ড: কুকি-অথেনটিকেটেড এজ মিডলওয়্যার সহ ডায়নামিক SSR এবং সাসপেন্স চালিত চার্ট।'
    },
    {
      en: 'Global Publishing & CMS Portals: Next-gen SEO with dynamic generateMetadata, automated OpenGraph card rendering, and dynamic sitemaps.',
      bn: 'গ্লোবাল মিডিয়া ও নিউজ পোর্টাল: ডায়নামিক generateMetadata, স্বয়ংক্রিয় ওপেন-গ্রাফ সোশ্যাল কার্ড এবং ডায়নামিক সাইটম্যাপ সহ এসইও আর্কিটেকচার।'
    },
    {
      en: 'Multi-Tenant SaaS Applications: Path and subdomain rewrites in Edge Middleware delivering branded tenant dashboards on a single codebase.',
      bn: 'মাল্টি-টেন্যান্ট SaaS অ্যাপ্লিকেশন: এজ মিডলওয়্যারে সাবডোমেন রিরাইট করে একক কোডবেস থেকেই প্রতিটি প্রতিষ্ঠানের কাস্টম ড্যাশবোর্ড পরিচালনা।'
    }
  ]
};
