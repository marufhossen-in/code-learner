import type { Lesson } from '../../../lib/types';

export const middlewareGateLesson: Lesson = {
  slug: 'the-middleware-gate',
  tech: 'nextjs',
  title: {
    en: 'Edge Middleware — Matchers, Rewrites, Redirects & Header Stamps',
    bn: 'এজ মিডলওয়্যার — ম্যাচার, রিরাইট, রিডাইরেক্ট ও হেডার স্ট্যাম্প'
  },
  summary: {
    en: 'Next.js Middleware intercepts every incoming request before routing or page rendering executes. In this lesson, you will master the Edge runtime architecture, configure route matchers to exclude static assets, execute redirects and internal rewrites, and manage cookies and custom request headers with strict performance discipline.',
    bn: 'Next.js মিডলওয়্যার কোনো রুট বা পেজ রেন্ডার হওয়ার পূর্বেই প্রতিটি আগত রিকোয়েস্ট পরীক্ষা করে। এই পাঠে আপনি এজ রানটাইম আর্কিটেকচার, স্ট্যাটিক ফাইল বাদ দিয়ে রুট ম্যাচার কনফিগারেশন, রিডাইরেক্ট ও অভ্যন্তরীণ রিরাইট কার্যকর করা এবং কঠোর পারফরম্যান্স বজায় রেখে কুকি ও কাস্টম হেডার পরিচালনা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'middleware-architecture-overview',
      text: {
        en: 'The Edge Middleware Request Lifecycle Architecture',
        bn: 'এজ মিডলওয়্যার রিকোয়েস্ট লাইফসাইকেল আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When a visitor requests any page in your application, Next.js executes middleware.ts at the edge before route matching or caching logic begins. Operating in lightweight V8 isolates, middleware inspects request cookies, validates authentication tokens, and rewrites route paths without incurring the overhead of spinning up a full Node.js server container.',
        bn: 'যখন কোনো ব্যবহারকারী আপনার ওয়েবসাইটের কোনো পেজে প্রবেশ করেন, তখন রুট ম্যাচিং বা ক্যাশ খোঁজার আগেই Next.js এজ সার্ভারে middleware.ts চালায়। হালকা V8 আইসোলেটে চলার কারণে মিডলওয়্যার খুব দ্রুত কুকি পরীক্ষা করতে পারে, টোকেন যাচাই করতে পারে এবং পুরো ভারী সার্ভার না চালিয়েই রুট পাথ রিরাইট করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'middleware.ts',
          def: {
            en: 'A root-level file exporting a middleware function that intercepts incoming requests before rendering executes.',
            bn: 'প্রজেক্টের রুটে থাকা একটি ফাইল যা পেজ রেন্ডার হওয়ার পূর্বেই প্রতিটি আগত রিকোয়েস্ট পরীক্ষা করে।'
          }
        },
        {
          term: 'config.matcher',
          def: {
            en: 'A regex or path pattern filtering which route paths wake the middleware, preventing overhead on static assets.',
            bn: 'একটি ফিল্টারিং প্যাটার্ন যা নির্ধারণ করে কোন কোন ইউআরএলে মিডলওয়্যার চলবে এবং স্ট্যাটিক ফাইলে অপ্রয়োজনীয় কল আটকায়।'
          }
        },
        {
          term: 'NextResponse.redirect()',
          def: {
            en: 'Instructs the client browser to navigate to a new URL, updating the address bar with an HTTP 307 or 308 redirect.',
            bn: 'ব্রাউজারকে একটি নতুন ঠিকানায় চলে যাওয়ার নির্দেশ দেয় এবং ব্রাউজারের ইউআরএল বারে নতুন ঠিকানা প্রদর্শিত হয়।'
          }
        },
        {
          term: 'NextResponse.rewrite()',
          def: {
            en: 'Proxies the request to an alternative internal path while keeping the client browser address bar completely unchanged.',
            bn: 'ব্রাউজারের ইউআরএল অপরিবর্তিত রেখেই ব্যাকগ্রাউন্ডে গোপনে অন্য কোনো অভ্যন্তরীণ পাথের কন্টেন্ট প্রদর্শন করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'middleware-verbs-matrix',
      text: {
        en: 'Middleware Response Actions and Protocol Verbs Matrix',
        bn: 'মিডলওয়্যার রেসপন্স অ্যাকশন ও প্রোটোকল ভার্ব ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Action Method', bn: 'মেথড' },
        { en: 'Browser URL Bar Effect', bn: 'ব্রাউজারের ইউআরএলে প্রভাব' },
        { en: 'Primary Use Case', bn: 'প্রধান ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'NextResponse.next()', bn: 'NextResponse.next()' },
          { en: 'Unchanged; request proceeds to page', bn: 'অপরিবর্তিত; রিকোয়েস্ট মূল পেজের দিকে এগোয়' },
          { en: 'Passing forward with custom stamped request headers', bn: 'কাস্টম হেডার সংযুক্ত করে পেজে রিকোয়েস্ট পাঠানো' }
        ],
        [
          { en: 'NextResponse.redirect(to)', bn: 'NextResponse.redirect(to)' },
          { en: 'Changes to target URL (e.g. /login)', bn: 'নতুন ঠিকানায় বদলে যায় (যেমন /login)' },
          { en: 'Unauthenticated users accessing protected admin wings', bn: 'অননুমোদিত ব্যবহারকারীকে লগইন পেজে পাঠিয়ে দেওয়া' }
        ],
        [
          { en: 'NextResponse.rewrite(to)', bn: 'NextResponse.rewrite(to)' },
          { en: 'Remains on original typed URL', bn: 'টাইপ করা আসল ঠিকানাতেই বহাল থাকে' },
          { en: 'Multi-tenant custom subdomains and A/B split tests', bn: 'মাল্টি-টেন্যান্ট সাবডোমেন হ্যান্ডলিং ও স্প্লিট টেস্টিং' }
        ],
        [
          { en: 'new NextResponse(null, { status: 429 })', bn: 'new NextResponse(null, { status: 429 })' },
          { en: 'Displays rate limit error response', bn: 'রেট লিমিট ত্রুটি প্রদর্শন করে' },
          { en: 'Edge bot mitigation and IP rate limiting', bn: 'অতিরিক্ত রিকোয়েস্ট পাঠানো বট ও আক্রমণ প্রতিরোধ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'middleware-simulation-code',
      text: {
        en: 'Working Middleware Pipeline and Matcher Simulation',
        bn: 'কার্যকরী মিডলওয়্যার পাইপলাইন ও ম্যাচার সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js Edge Middleware Execution and Decision Flow
class MockMiddlewarePipeline {
  constructor() {
    // Regex excluding static files, images, and favicon
    this.matcher = /^\\/(?!_next\\/static|_next\\/image|favicon\\.ico).*/;
  }

  processRequest(urlPath, cookies = {}) {
    // 1. Check if route matches middleware config
    if (!this.matcher.test(urlPath)) {
      return { action: 'BYPASS', status: 200, note: 'Static asset skipped middleware' };
    }

    // 2. Auth check for protected admin dashboard
    if (urlPath.startsWith('/admin')) {
      if (!cookies['session_token']) {
        return { action: 'REDIRECT', status: 307, target: '/login' };
      }
    }

    // 3. Subdomain rewrite for multi-tenant routing
    if (urlPath.startsWith('/tenant-a')) {
      return { action: 'REWRITE', status: 200, internalPath: '/tenants/tenant-a/feed' };
    }

    // 4. Standard pass-through with stamped header
    return { action: 'NEXT', status: 200, stampedHeaders: { 'x-middleware-cache': 'hit' } };
  }
}

const pipeline = new MockMiddlewarePipeline();

// Test Case A: Static image bypasses middleware
const staticResult = pipeline.processRequest('/_next/static/chunk-123.js');
// Test Case B: Protected admin page without session
const adminResult = pipeline.processRequest('/admin/billing', {});
// Test Case C: Standard public page with valid session
const publicResult = pipeline.processRequest('/blog', { session_token: 'valid-token' });

console.log('Static asset action:', staticResult.action);
// -> Static asset action: BYPASS
console.log('Unauthenticated admin status:', adminResult.status);
// -> Unauthenticated admin status: 307
console.log('Public page action:', publicResult.action);
// -> Public page action: NEXT`,
      caption: {
        en: 'Middleware skips static files, redirects unauthenticated admin requests with status 307, and allows public routes',
        bn: 'মিডলওয়্যার স্ট্যাটিক ফাইল এড়িয়ে যায়, সেশনহীন অ্যাডমিন রিকোয়েস্টে ৩০৭ রিডাইরেক্ট করে এবং পাবলিক রুটে এক্সেস দেয়'
      }
    },
    {
      type: 'heading',
      id: 'middleware-performance-rules',
      text: {
        en: 'Performance Discipline and Edge Security Rules',
        bn: 'পারফরম্যান্স শৃঙ্খলা ও এজ সিকিউরিটি নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because middleware executes on every incoming matching request, architectural discipline is essential. Never execute slow relational database queries or long network calls inside middleware.ts. Confine middleware logic to lightweight checks such as cookie presence verification, cryptographic JWT signature validation, header mutations, and instant redirects.',
        bn: 'যেহেতু প্রতিটি ম্যাচ করা রিকোয়েস্টেই মিডলওয়্যার কার্যকর হয়, তাই এখানে আর্কিটেকচারাল শৃঙ্খলা মেনে চলা অত্যন্ত জরুরি। middleware.ts-এর ভেতর কখনোই ধীরগতির ডাটাবেজ কোয়েরি বা দীর্ঘ নেটওয়ার্ক কল করবেন না। মিডলওয়্যারে কেবল কুকির উপস্থিতি যাচাই, দ্রুতগতির ক্রিপ্টোগ্রাফিক টোকেন পরীক্ষা, হেডার পরিবর্তন এবং রিডাইরেক্টের মতো হালকা কাজ সীমাবদ্ধ রাখুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Strict Matchers Save Compute: Always specify a restrictive config.matcher array to prevent middleware execution on static assets and images.',
          bn: '১. কঠোর ম্যাচার ব্যবহার: অপ্রয়োজনীয় লোড বাঁচাতে config.matcher ব্যবহার করে স্ট্যাটিক ফাইল ও ছবিতে মিডলওয়্যার চলা বন্ধ রাখুন।'
        },
        {
          en: '2. No Database Queries: Avoid ORM or database drivers in middleware; deep user lookups belong inside server components or route handlers.',
          bn: '২. ডাটাবেজ কোয়েরি নিষিদ্ধ: মিডলওয়্যারে ডাটাবেজ চালাবেন না; বিস্তারিত তথ্য যাচাই পেজ বা রুট হ্যান্ডলারের দায়িত্ব।'
        },
        {
          en: '3. Stamping Request Headers: When passing data from middleware to pages, stamp headers using request.headers.set("x-custom-role", role).',
          bn: '৩. হেডারে তথ্য পাঠানো: মিডলওয়্যার থেকে পেজে কোনো তথ্য পাঠাতে request.headers.set দিয়ে কাস্টম হেডারে তা যুক্ত করে দিন।'
        },
        {
          en: '4. Rewrites for Multi-Tenancy: Use NextResponse.rewrite() to route white-label domains or subdomains cleanly behind the scenes.',
          bn: '৪. সাবডোমেনে রিরাইট: কাস্টম ডোমেন বা মাল্টি-টেন্যান্ট সাইটে ইউআরএল না বদলে ব্যাকগ্রাউন্ডে সঠিক ফোল্ডারের পেজ দেখাতে rewrite ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-mid-ex1',
      kind: 'mcq',
      topic: 'location and filename convention for middleware',
      question: {
        en: 'Where must the "middleware.ts" file be located in a standard Next.js project to function correctly?',
        bn: 'একটি স্ট্যান্ডার্ড Next.js প্রজেক্টে "middleware.ts" ফাইলটি ঠিক কোন ফোল্ডারে রাখা আবশ্যক?'
      },
      options: [
        {
          en: 'At the root of the project (or inside the "src/" directory if src/ is used), sitting as a sibling to the "app/" or "pages/" directory',
          bn: 'প্রজেক্টের একদম রুট ফোল্ডারে (বা "src/" ব্যবহৃত হলে তার ভেতরে), "app/" বা "pages/" ফোল্ডারের সমান্তরালে'
        },
        {
          en: 'Deep inside the "app/api/" directory',
          bn: '"app/api/" ফোল্ডারের একদম ভেতরে'
        },
        {
          en: 'Inside the "public/assets/" directory',
          bn: '"public/assets/" ফোল্ডারের ভেতরে'
        },
        {
          en: 'Inside the node_modules folder',
          bn: 'node_modules ফোল্ডারের ভেতর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Next.js expects a single middleware file at the project root level.',
        bn: 'Next.js প্রজেক্টের রুটে একটিমাত্র middleware.ts ফাইল আশা করে।'
      },
      explanation: {
        en: 'Next.js looks for exactly one middleware.ts file at the root of the project or directly inside src/ (matching the app directory location). It cannot be scattered across route folders.',
        bn: 'Next.js প্রজেক্টের রুটে বা src ফোল্ডারে কেবল একটিমাত্র middleware.ts ফাইল গ্রহণ করে। এটি আলাদা আলাদা পেজ ফোল্ডারে রাখা যায় না।'
      }
    },
    {
      id: 'nx-mid-ex2',
      kind: 'mcq',
      topic: 'difference between redirect and rewrite in middleware',
      question: {
        en: 'What is the user-visible difference between "NextResponse.redirect()" and "NextResponse.rewrite()"?',
        bn: '"NextResponse.redirect()" এবং "NextResponse.rewrite()"-এর মধ্যে ব্যবহারকারীর চোখে পড়ার মতো পার্থক্য কী?'
      },
      options: [
        {
          en: 'redirect updates the browser address bar to the new URL, whereas rewrite displays content from a different internal path while keeping the original URL in the address bar unchanged',
          bn: 'redirect ব্রাউজারের ইউআরএল বারের ঠিকানা বদলে নতুন ইউআরএল দেখায়, আর rewrite ব্রাউজারের আসল ইউআরএল ঠিক রেখেই গোপনে অন্য অভ্যন্তরীণ পাথের কন্টেন্ট পরিবেশন করে'
        },
        {
          en: 'redirect only works on smartphones while rewrite only works on laptops',
          bn: 'redirect কেবল ফোনে চলে আর rewrite কেবল ল্যাপটপে চলে'
        },
        {
          en: 'rewrite deletes the user session cookie permanently',
          bn: 'rewrite ব্যবহারকারীর সেশন কুকি স্থায়ীভাবে মুছে ফেলে'
        },
        {
          en: 'There is no difference; they are exact synonyms',
          bn: 'এদের মধ্যে কোনো তফাত নেই; তারা একে অপরের প্রতিশব্দ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Redirect changes the address bar URL; rewrite proxies content behind the original URL.',
        bn: 'Redirect ইউআরএল বার বদলে দেয়; Rewrite ইউআরএল একই রেখে পেছনের কন্টেন্ট বদলে দেয়।'
      },
      explanation: {
        en: 'Redirect sends an HTTP 307/308 instruction to the browser, updating the address bar. Rewrite proxies the request internally, displaying the target page while preserving the typed URL.',
        bn: 'Redirect ব্রাউজারকে নতুন ঠিকানায় রিডাইরেক্ট করে ইউআরএল বদলে দেয়। আর Rewrite ব্রাউজারের ইউআরএল বারে কোনো পরিবর্তন না এনেই গোপনে অন্য পেজের ডাটা দেখায়।'
      }
    },
    {
      id: 'nx-mid-ex3',
      kind: 'mcq',
      topic: 'purpose of config matcher in nextjs middleware',
      question: {
        en: 'Why is defining a strict "config = { matcher: [...] }" array crucial for middleware performance?',
        bn: 'মিডলওয়্যারের পারফরম্যান্স ভালো রাখতে সুনির্দিষ্ট "config = { matcher: [...] }" ডিফাইন করা কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'Without a matcher, middleware executes on every single request, including static JavaScript chunks, CSS stylesheets, images, and favicons, introducing unnecessary latency overhead',
          bn: 'ম্যাচার না দিলে মিডলওয়্যার প্রতিটি রিকোয়েস্টে কার্যকর হয়, যার মধ্যে স্ট্যাটিক ফাইল, সিএসএস, ছবি ও ফেভিকনও থাকে, ফলে সাইটের গতি অযথা কমে যায়'
        },
        {
          en: 'The Next.js compiler will fail to bundle TypeScript code without a matcher',
          bn: 'ম্যাচার না থাকলে নেক্সট.জেএস কমপাইলার টাইপস্ক্রিপ্ট বিল্ড করতে ব্যর্থ হয়'
        },
        {
          en: 'Matchers encrypt the source code with RSA-2048',
          bn: 'ম্যাচার সোর্স কোডকে আরএসএ-২০৪৮ দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It connects the project to the GitHub code repository',
          bn: 'এটি প্রজেক্টকে গিটহাব রিপোজিটরির সাথে সংযুক্ত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Matchers filter out static assets and images so middleware only runs on relevant routes.',
        bn: 'ম্যাচার অপ্রয়োজনীয় স্ট্যাটিক ফাইল ফিল্টার করে কেবল দরকারি পেজেই মিডলওয়্যার চালায়।'
      },
      explanation: {
        en: 'Matchers restrict middleware invocation to specific path patterns. Excluding _next/static, _next/image, and favicon.ico prevents thousands of unnecessary middleware executions.',
        bn: 'ম্যাচার দিয়ে কোন কোন পাথে মিডলওয়্যার চলবে তা বেঁধে দেওয়া হয়। স্ট্যাটিক ফাইল বাদ দিলে প্রচুর অপ্রয়োজনীয় প্রসেসিং বেঁচে যায় এবং সাইট দ্রুত লোড হয়।'
      }
    },
    {
      id: 'nx-mid-ex4',
      kind: 'mcq',
      topic: 'avoiding heavy database queries in edge middleware',
      question: {
        en: 'Why is connecting directly to traditional relational databases like PostgreSQL from inside "middleware.ts" considered a serious anti-pattern?',
        bn: '"middleware.ts"-এর ভেতর থেকে সরাসরি পোস্টগ্রেসের মতো রিলেশনাল ডাটাবেজে কানেক্ট করাকে কেন একটি মারাত্মক ভুল মনে করা হয়?'
      },
      options: [
        {
          en: 'Middleware executes on every page navigation at the edge; waiting for database TCP connections and queries adds substantial latency to Time to First Byte (TTFB), degrading the entire application speed',
          bn: 'মিডলওয়্যার প্রতিটি পেজ নেভিগেশনের শুরুতে চলে; সেখানে ডাটাবেজ কুয়েরির জন্য অপেক্ষা করলে প্রথম বাইট পেতে অনেক দেরি হয়, যা পুরো সাইটের পারফরম্যান্স নষ্ট করে'
        },
        {
          en: 'Relational databases do not support storing text strings',
          bn: 'রিলেশনাল ডাটাবেজে টেক্সট স্ট্রিং সংরক্ষণ করা যায় না'
        },
        {
          en: 'Next.js deletes the database if queried from middleware',
          bn: 'মিডলওয়্যার থেকে কুয়েরি করলে Next.js ডাটাবেজ মুছে ফেলে'
        },
        {
          en: 'Edge runtimes can only connect to MySQL databases',
          bn: 'এজ রানটাইম কেবল মাইএসকিউএল ডাটাবেজের সাথেই কানেক্ট হতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Heavy database I/O in middleware blocks every incoming navigation request.',
        bn: 'মিডলওয়্যারে ভারী ডাটাবেজ কাজ রাখলে প্রতিটি পেজ লোড অহেতুক থমকে থাকে।'
      },
      explanation: {
        en: 'Middleware acts as a fast gatekeeper. Performing heavy database I/O on every request degrades response times. Deep authorization queries belong inside Server Components instead.',
        bn: 'মিডলওয়্যারের কাজ হলো দ্রুত রুট নির্ধারণ করা। সেখানে ভারী ডাটাবেজ কুয়েরি চালালে সাইট ধীরগতির হয়ে যায়; বিস্তারিত তথ্য পেজ কম্পোনেন্টে যাচাই করাই উত্তম।'
      }
    }
  ],
  quiz: {
    id: 'the-middleware-gate-quiz',
    title: {
      en: 'Next.js Edge Middleware Architecture Quiz',
      bn: 'Next.js এজ মিডলওয়্যার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-stamping-request-headers-mechanism',
        kind: 'mcq',
        topic: 'stamping headers to pass data from middleware to downstream components',
        question: {
          en: 'How can Edge Middleware forward metadata (such as an extracted user role or geo-location region) to downstream Server Components in Next.js?',
          bn: 'Next.js-এ এজ মিডলওয়্যার থেকে পরবর্তী সার্ভার কম্পোনেন্টে মেটাডাটা (যেমন ব্যবহারকারীর রোল বা দেশের তথ্য) পাঠাবেন কীভাবে?'
        },
        options: [
          {
            en: 'Create a new Headers instance, set custom headers (e.g. "x-user-role"), and pass them into "NextResponse.next({ request: { headers: requestHeaders } })"',
            bn: 'কাস্টম হেডার (যেমন "x-user-role") সেট করে "NextResponse.next({ request: { headers: requestHeaders } })"-এর মাধ্যমে ফরোয়ার্ড করে'
          },
          {
            en: 'Write the data to a text file on the local hard disk',
            bn: 'লোকাল হার্ডডিস্কের একটি টেক্সট ফাইলে ডাটা সেভ করে'
          },
          {
            en: 'Send an email notification to the server administrator',
            bn: 'সার্ভার অ্যাডমিনের কাছে একটি ইমেইল নোটিফিকেশন পাঠিয়ে'
          },
          {
            en: 'Middleware cannot share any data with Server Components',
            bn: 'মিডলওয়্যার কোনোভাবেই সার্ভার কম্পোনেন্টের সাথে ডাটা শেয়ার করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use NextResponse.next({ request: { headers } }) to stamp request headers.',
          bn: 'NextResponse.next-এ request.headers পাস করে কাস্টম হেডার পাঠানো হয়।'
        },
        explanation: {
          en: 'You can mutate request headers using NextResponse.next({ request: { headers } }). Downstream Server Components and Route Handlers can read them via import { headers } from "next/headers".',
          bn: 'NextResponse.next দিয়ে হেডারে তথ্য যুক্ত করা যায়। পরবর্তীতে সার্ভার কম্পোনেন্টে next/headers থেকে সেই হেডার সরাসরি পড়ে নেওয়া যায়।'
        }
      },
      {
        id: 'q-modifying-response-cookies-middleware',
        kind: 'mcq',
        topic: 'managing cookies on the response object in middleware',
        question: {
          en: 'What is the correct way to set a new session cookie on the outgoing response inside "middleware.ts"?',
          bn: '"middleware.ts"-এর ভেতর থেকে ক্লায়েন্ট রেসপন্সে নতুন সেশন কুকি যুক্ত করার সঠিক নিয়ম কোনটি?'
        },
        options: [
          {
            en: 'Create the response object via "const response = NextResponse.next();", invoke "response.cookies.set(\'session\', token);", and return the response',
            bn: '"const response = NextResponse.next();" তৈরি করে "response.cookies.set(\'session\', token);" ডেকে রেসপন্সটি রিটার্ন করে'
          },
          {
            en: 'Directly modify document.cookie in the middleware file',
            bn: 'মিডলওয়্যার ফাইলে সরাসরি document.cookie লিখে'
          },
          {
            en: 'Call localStorage.setItem("session", token)',
            bn: 'localStorage.setItem("session", token) কল করে'
          },
          {
            en: 'Cookies cannot be modified in Next.js middleware',
            bn: 'Next.js মিডলওয়্যারে কুকি পরিবর্তন করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modify cookies on the NextResponse object using response.cookies.set().',
          bn: 'NextResponse অবজেক্টের ওপর response.cookies.set() মেথড ব্যবহার করুন।'
        },
        explanation: {
          en: 'Cookies are managed via the Response object. Calling response.cookies.set() attaches the proper Set-Cookie header to the outgoing HTTP response.',
          bn: 'কুকি পরিচালনার জন্য রেসপন্স অবজেক্টে response.cookies.set() ডাকতে হয়, যা ব্রাউজারে সঠিক Set-Cookie হেডার পৌঁছে দেয়।'
        }
      },
      {
        id: 'q-edge-runtime-node-api-limitations',
        kind: 'mcq',
        topic: 'Edge runtime limitations and unsupported Node.js native modules',
        question: {
          en: 'Why do certain native Node.js APIs (such as "fs.readFileSync" or "child_process") fail when invoked inside "middleware.ts"?',
          bn: '"middleware.ts"-এর ভেতর "fs.readFileSync" বা "child_process"-এর মতো কিছু নেটিভ Node.js এপিআই চালালে কেন এরর দেয়?'
        },
        options: [
          {
            en: 'Middleware runs on the lightweight Edge runtime (based on V8 isolates rather than a full Node.js environment), which excludes OS-level filesystem and child process modules for instant cold-starts',
            bn: 'মিডলওয়্যার হালকা এজ রানটাইমে চলে (যা পূর্ণ নোড.জেএস পরিবেশের বদলে V8 আইসোলেটে চলে), যেখানে চোখের পলকে চালুর সুবিধার্থে ওএস-লেভেল ফাইলসিস্টেম বা প্রসেস মডিউল রাখা হয়নি'
          },
          {
            en: 'The developer computer does not have enough RAM memory',
            bn: 'ডেভেলপারের কম্পিউটারে পর্যাপ্ত র্যাম মেমরি নেই'
          },
          {
            en: 'The operating system firewall blocked all file reading',
            bn: 'অপারেটিং সিস্টেম ফায়ারওয়াল ফাইল পড়া বন্ধ করে রেখেছে'
          },
          {
            en: 'JavaScript does not support file reading on any platform',
            bn: 'জাভাস্ক্রিপ্ট কোনো প্ল্যাটফর্মেই ফাইল পড়া সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Edge runtime intentionally omits heavy Node.js native APIs like fs.',
          bn: 'এজ রানটাইম দ্রুতগতির জন্য fs-এর মতো ভারী নোড এপিআই পরিহার করে।'
        },
        explanation: {
          en: 'Next.js Edge runtime runs on V8 isolates with web-standard APIs (fetch, Request, Response). Native Node.js modules like fs or net are unsupported in middleware.',
          bn: 'এজ রানটাইম কেবল স্ট্যান্ডার্ড ওয়েব এপিআই সমর্থন করে। দ্রুত চালুর সুবিধার্থে এতে ভারী নোড.জেএস ফাইলসিস্টেম বা কার্নেল মডিউল রাখা হয় না।'
        }
      },
      {
        id: 'q-multi-tenant-subdomain-rewriting',
        kind: 'mcq',
        topic: 'multi-tenant subdomain extraction in edge middleware',
        question: {
          en: 'In a multi-tenant application where users visit "tenant1.example.com", how does middleware route the request internally without changing the address bar?',
          bn: 'একটি মাল্টি-টেন্যান্ট সাইটে ইউজার "tenant1.example.com"-এ ঢুকলে মিডলওয়্যার কীভাবে ইউআরএল পরিবর্তন না করেই অভ্যন্তরীণ রুটে পাঠায়?'
        },
        options: [
          {
            en: 'It extracts the subdomain from request.headers.get("host") and invokes NextResponse.rewrite(new URL(`/tenants/${subdomain}${pathname}`, request.url))',
            bn: 'হোস্ট হেডার থেকে সাবডোমেন বের করে এবং NextResponse.rewrite দিয়ে অভ্যন্তরীণ পাথ `/tenants/${subdomain}${pathname}`-এ পাঠিয়ে দেয়'
          },
          {
            en: 'It buys a new web domain from GoDaddy automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে গোড্যাডি থেকে নতুন ডোমেন কিনে নেয়'
          },
          {
            en: 'It restarts the DNS name server of the internet provider',
            bn: 'এটি ইন্টারনেট প্রোভাইডারের ডিএনএস সার্ভার রিস্টার্ট করে'
          },
          {
            en: 'Subdomains can only be handled by editing the /etc/hosts file manually',
            bn: 'সাবডোমেন কেবল হাতে /etc/hosts ফাইল এডিট করেই চালানো যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Inspect the Host header and rewrite to an internal tenant path.',
          bn: 'Host হেডার পরীক্ষা করে অভ্যন্তরীণ টেন্যান্ট পাথে rewrite করুন।'
        },
        explanation: {
          en: 'Middleware reads the Host header to extract the subdomain, then rewrites the URL to internal routes (e.g. /tenants/[subdomain]/page.tsx) while preserving the branded host in the user browser.',
          bn: 'মিডলওয়্যার হোস্ট হেডার থেকে সাবডোমেন আলাদা করে এবং rewrite ব্যবহার করে ভেতরের নির্দিষ্ট ফোল্ডারে পাঠিয়ে দেয়, ফলে ব্যবহারকারীর চোখে সাবডোমেন একই থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-route-handlers',
    title: {
      en: 'Route Handlers — REST API Endpoints with NextRequest & NextResponse',
      bn: 'রুট হ্যান্ডলারস — NextRequest ও NextResponse দিয়ে REST API'
    }
  }
};
