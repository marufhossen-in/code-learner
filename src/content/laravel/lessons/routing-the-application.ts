import type { Lesson } from '../../../lib/types';

export const RoutingTheApplicationLesson: Lesson = {
  slug: 'routing-the-application',
  tech: 'laravel',
  title: {
    en: 'Routing, Controllers & Middleware Pipeline',
    bn: 'রাউটিং, কন্ট্রোলার এবং মিডলওয়্যার পাইপলাইন'
  },
  summary: {
    en: 'Beginner introduction to Laravel routing: declare HTTP routes (get, post, put, delete), capture dynamic parameters, utilize named routes, bind Eloquent models automatically, and filter incoming traffic through the middleware pipeline.',
    bn: 'লারাভেল রাউটিংয়ের প্রাথমিক গাইড: HTTP রুট ঘোষণা (get, post, put, delete), ডাইনামিক প্যারামিটার গ্রহণ, নেমড রাউটের ব্যবহার, স্বয়ংক্রিয় রাউট মডেল বাইন্ডিং এবং মিডলওয়্যার পাইপলাইনের মাধ্যমে রিকোয়েস্ট ফিল্টারিং।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'routing-architecture-heading',
      text: {
        en: 'Route Declarations, Dynamic Parameters, and Route Model Binding',
        bn: 'রুট ঘোষণা, ডাইনামিক প্যারামিটার এবং রাউট মডেল বাইন্ডিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel (the web framework for PHP) routes all incoming HTTP requests cleanly. Web routes with session state and CSRF (Cross-Site Request Forgery) protection live in routes/web.php. Stateless API endpoints reside in routes/api.php. In addition to standard verbs (get, post, put, delete), Laravel provides Implicit Route Model Binding. Type-hinting an Eloquent model in a controller action (such as User $user) resolves the matching record automatically, throwing a 404 error if missing.',
        bn: 'লারাভেল (পিএইচপির ওয়েব ফ্রেমওয়ার্ক) সমস্ত আগত HTTP অনুরোধ নির্দিষ্ট রাউটিং ফাইলের মাধ্যমে পরিচালনা করে। সেশন ও CSRF (ক্রস-সাইট রিকোয়েস্ট ফোরজারি) সুরক্ষাযুক্ত রুটগুলো routes/web.php ফাইলে থাকে। স্টেটলেস এপিআই এন্ডপয়েন্টগুলো routes/api.php ফাইলে সংরক্ষিত হয়। স্ট্যান্ডার্ড ভার্বগুলোর (get, post, put, delete) পাশাপাশি এতে ইমপ্লিসিট রাউট মডেল বাইন্ডিং রয়েছে। কন্ট্রোলারের মেথডে মডেলের টাইপ-হিন্ট (User $user) দিলেই লারাভেল ডেটাবেস থেকে রেকর্ড খুঁজে নেয় এবং না পেলে 404 এরর দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 5-stage Laravel request lifecycle passing through the layered onion middleware pipeline to the controller.',
        bn: 'চিত্র ১: স্তরে স্তরে সাজানো ৫ টি ধাপের লারাভেল অনিয়ন মিডলওয়্যার পাইপলাইন পেরিয়ে কন্ট্রোলারে পৌঁছানোর লাইফসাইকেল।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">LARAVEL REQUEST &amp; MIDDLEWARE ONION PIPELINE</text>

  <!-- Step 1: HTTP Ingress -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Request Ingress</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">POST /users/42</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">public/index.php</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" />
    <text x="15" y="112" fill="#cbd5e1" font-size="8" font-family="monospace">URI: /users/42</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Verb: POST</text>
    <text x="15" y="145" fill="#cbd5e1" font-size="8" font-family="monospace">CSRF token</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">HTTP Request</text>
  </g>

  <!-- Step 2: Rate Limiter -->
  <g transform="translate(195, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Throttle Guard</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">throttle:60,1</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Rate Limiter</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="112" fill="#34d399" font-size="8" font-family="monospace">Check Redis IP</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">&lt; 60 req/min</text>
    <text x="15" y="145" fill="#34d399" font-size="8" font-family="monospace">Passes through</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">DDoS Protection</text>
  </g>

  <!-- Step 3: Auth & CSRF -->
  <g transform="translate(360, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Auth &amp; CSRF</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">VerifyCsrfToken</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Authenticate layer</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="112" fill="#fbbf24" font-size="8" font-family="monospace">Validates token</text>
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Resolves user</text>
    <text x="15" y="145" fill="#34d399" font-size="8" font-family="monospace">Calls $next()</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">State Validated</text>
  </g>

  <!-- Step 4: Model Binding -->
  <g transform="translate(525, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7c3aed" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Model Binding</text>
    <text x="12" y="55" fill="#c084fc" font-size="10" font-family="monospace">Implicit Binding</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Eloquent auto-fetch</text>
    <rect x="10" y="90" width="125" height="65" rx="5" fill="#0f172a" stroke="#8b5cf6" />
    <text x="15" y="112" fill="#c084fc" font-size="8" font-family="monospace">SELECT * FROM</text>
    <text x="15" y="128" fill="#c084fc" font-size="8" font-family="monospace">users WHERE</text>
    <text x="15" y="145" fill="#c084fc" font-size="8" font-family="monospace">id = 42 LIMIT 1</text>
    <text x="12" y="195" fill="#c084fc" font-size="9" font-family="sans-serif">Model Hydrated</text>
  </g>

  <!-- Step 5: Controller -->
  <g transform="translate(690, 65)">
    <rect width="125" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="125" height="30" rx="8" fill="#db2777" />
    <text x="62" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Controller</text>
    <text x="10" y="55" fill="#f472b6" font-size="10" font-family="monospace">Action Executed</text>
    <text x="10" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">UserController</text>
    <rect x="10" y="90" width="105" height="65" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="12" y="112" fill="#f472b6" font-size="8" font-family="monospace">return view()</text>
    <text x="12" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">or return json</text>
    <text x="12" y="145" fill="#34d399" font-size="8" font-family="monospace">HTTP 200 OK</text>
    <text x="10" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Response Sent</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'middleware-onion-heading',
      text: {
        en: 'Middleware Onion Architecture and Named Route Reversal',
        bn: 'মিডলওয়্যার অনিয়ন আর্কিটেকচার এবং নেমড রাউটের ব্যবহার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel implements middleware as nested layers wrapped around HTTP controllers, adhering to the Onion Architecture pattern. Incoming requests pass through outer guards like rate limiters (throttle:60,1 allowing 60 requests per 1 minute) before invoking $next($request). Furthermore, assigning names to routes (such as ->name("dashboard")) allows developers to generate URLs dynamically via route("dashboard"), completely decoupling application views from hardcoded URI paths.',
        bn: 'লারাভেল অনিয়ন আর্কিটেকচার প্যাটার্ন অনুসরণ করে এইচটিটিপি কন্ট্রোলারের চারপাশে স্তরে স্তরে মিডলওয়্যার পরিচালনা করে। প্রতিটি অনুরোধ $next($request) কল করার আগে রেট লিমিটারের (যেমন প্রতি ১ মিনিটে ৬০ টি অনুরোধের জন্য throttle:60,1) মতো সুরক্ষাবলয় পার করে। তাছাড়া রাউটে নাম নির্ধারণ করলে (যেমন ->name("dashboard")) ভিউতে সরাসরি route("dashboard") ব্যবহার করে ইউআরএল তৈরি করা যায়, যার ফলে কোডে নির্দিষ্ট পাথ হার্ডকোড করার কোনো প্রয়োজন থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Laravel router with route model binding, named routes, and middleware pipeline.',
        bn: 'রাউট মডেল বাইন্ডিং, নেমড রাউট এবং মিডলওয়্যার পাইপলাইনের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Route Matching and Middleware Pipeline in TypeScript
interface UserRecord {
  id: number;
  name: string;
  email: string;
}

interface RequestContext {
  method: 'GET' | 'POST';
  path: string;
  isAuthenticated: boolean;
}

interface DispatchResult {
  statusCode: number;
  data: unknown;
}

// Simulated User database with record for ID 42
const userDatabase: Record<number, UserRecord> = {
  42: { id: 42, name: 'Zubair', email: 'zubair@example.com' }
};

export class LaravelRouterSimulator {
  // Simulating Route Model Binding: resolves model or throws 404
  public handleShowUser(userId: number, ctx: RequestContext): DispatchResult {
    // Middleware check: auth guard
    if (!ctx.isAuthenticated) {
      return { statusCode: 401, data: { error: 'Unauthorized: Authentication Required' } };
    }

    // Implicit Route Model Binding simulation: User::find($id)
    const user = userDatabase[userId];
    if (!user) {
      return { statusCode: 404, data: { error: 'ModelNotFoundException: User not found' } };
    }

    return { statusCode: 200, data: user };
  }
}

// 3 test requests simulated
const router = new LaravelRouterSimulator();

// Request 1: Authenticated request for existing user ID 42
const res1 = router.handleShowUser(42, { method: 'GET', path: '/users/42', isAuthenticated: true });
console.log('Model Binding Success:', res1.statusCode, res1.data); // 200 { id: 42, name: "Zubair", ... }

// Request 2: Unauthenticated request rejected by middleware
const res2 = router.handleShowUser(42, { method: 'GET', path: '/users/42', isAuthenticated: false });
console.log('Middleware Rejection:', res2.statusCode); // 401

// Request 3: Non-existent user ID triggers 404
const res3 = router.handleShowUser(999, { method: 'GET', path: '/users/999', isAuthenticated: true });
console.log('Missing Record Result:', res3.statusCode); // 404`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Route Model Binding',
          def: {
            en: 'Laravel mechanism automatically querying database models matching route parameter IDs, failing with HTTP 404 if not found.',
            bn: 'লারাভেলের স্বয়ংক্রিয় প্রক্রিয়া যা রাউট প্যারামিটারের আইডির সাথে মিলিয়ে ডেটাবেস থেকে মডেল অবজেক্ট লোড করে এবং না পেলে 404 দেয়।'
          }
        },
        {
          term: 'Middleware Pipeline',
          def: {
            en: 'Chained series of HTTP filters inspecting, modifying, or terminating requests before they reach controller actions.',
            bn: 'এইচটিটিপি ফিল্টারের একটি সুশৃঙ্খল ধারা যা কন্ট্রোলারে পৌঁছানোর আগেই অনুরোধ যাচাই, রূপান্তর বা বাতিল করতে পারে।'
          }
        },
        {
          term: 'Named Routes',
          def: {
            en: 'Aliases assigned to routes enabling dynamic URL generation via the route() helper function independent of path changes.',
            bn: 'রাউটের বিকল্প নাম যা পাথের পরিবর্তন সত্ত্বেও route() হেল্পার ফাংশনের মাধ্যমে গতিশীল ইউআরএল তৈরির সুবিধা দেয়।'
          }
        },
        {
          term: 'Onion Architecture',
          def: {
            en: 'Pattern where requests travel inward through middleware layers to the controller, then unwind outward during response transmission.',
            bn: 'সফটওয়্যার আর্কিটেকচার যেখানে অনুরোধ স্তরে স্তরে ভেতরে প্রবেশ করে এবং রেসপন্স তৈরির পর পুনরায় বিপরীত ক্রমে বাইরে ফিরে আসে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'route-model-binding-missing-record-ex1',
      kind: 'mcq',
      topic: 'route-model-binding-behavior',
      question: {
        en: 'What does Laravel do automatically when Route Model Binding fails to find a record matching the URL parameter in the database?',
        bn: 'রাউট মডেল বাইন্ডিং যখন ইউআরএল প্যারামিটারের সাথে মিলিয়ে ডেটাবেসে কোনো রেকর্ড খুঁজে পায় না, তখন লারাভেল স্বয়ংক্রিয়ভাবে কী করে?'
      },
      options: [
        {
          en: 'It throws a ModelNotFoundException which Laravel automatically converts into an HTTP 404 Not Found response',
          bn: 'এটি একটি ModelNotFoundException ছুড়ে দেয় যা লারাভেল স্বয়ংক্রিয়ভাবে HTTP 404 Not Found রেসপন্সে রূপান্তর করে'
        },
        {
          en: 'It inserts an empty dummy record into the database',
          bn: 'এটি ডেটাবেসে একটি ফাঁকা ভুয়া রেকর্ড তৈরি করে ফেলে'
        },
        {
          en: 'It formats the server hard drive',
          bn: 'এটি সার্ভারের হার্ড ড্রাইভ ফরম্যাট করে দেয়'
        },
        {
          en: 'It switches the web server from PHP to Python',
          bn: 'এটি সার্ভারকে পিএইচপি থেকে পাইথনে পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Model binding treats missing database records as HTTP 404 Not Found resources.',
        bn: 'মডেল বাইন্ডিং ডেটাবেসে তথ্য না পেলে স্বয়ংক্রিয়ভাবে HTTP 404 রেসপন্স প্রদান করে।'
      },
      explanation: {
        en: 'Laravel catches ModelNotFoundException and returns a standard 404 HTTP status code cleanly.',
        bn: 'লারাভেল ডেটা না পেলে নিজে থেকেই সুন্দর একটি 404 পেজ পরিবেশন করে।'
      }
    },
    {
      id: 'named-routes-advantage-ex2',
      kind: 'mcq',
      topic: 'named-routes-benefits',
      question: {
        en: 'Why is referencing route("profile.edit") superior to hardcoding "/user/profile/edit" inside application views?',
        bn: 'ভিউতে সরাসরি "/user/profile/edit" হার্ডকোড করার চেয়ে route("profile.edit") ব্যবহার করা কেন শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'If the URL structure changes in routes/web.php later, all links across the application update automatically without searching and replacing URLs across templates',
          bn: 'ভবিষ্যতে routes/web.php এ ইউআরএল পরিবর্তন করা হলেও অ্যাপ্লিকেশনের সমস্ত লিংক স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায়, প্রতিটি ভিউতে খোঁজার দরকার হয় না'
        },
        {
          en: 'It makes the browser render text 10 times faster',
          bn: 'এটি ব্রাউজারের টেক্সট প্রদর্শনের গতি 10 গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'It forces users to change their account password',
          bn: 'এটি ব্যবহারকারীদের পাসওয়ার্ড বদলাতে বাধ্য করে'
        },
        {
          en: 'Hardcoded URLs are illegal on the internet',
          bn: 'হার্ডকোড করা ইউআরএল ইন্টারনেটে ব্যবহার করা বেআইনি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Named routes decouple URL presentation paths from internal route identification.',
        bn: 'নেমড রাউট ফাইলের আসল পাথের সাথে ভিউয়ের লিংকের অতিনির্ভরশীলতা দূর করে।'
      },
      explanation: {
        en: 'Named routes allow route URIs to be reorganized at will while preserving link integrity throughout the application.',
        bn: 'নেমড রাউট ব্যবহারের ফলে ইউআরএল কাঠামো সহজে পরিবর্তন করা যায় এবং কোডের কোথাও লিংক ভাঙে না।'
      }
    },
    {
      id: 'middleware-next-invocation-ex3',
      kind: 'mcq',
      topic: 'middleware-next-closure',
      question: {
        en: 'In custom Laravel middleware, what is the duty of calling return $next($request)?',
        bn: 'কাস্টম লারাভেল মিডলওয়্যারে return $next($request) কল করার মূল দায়িত্ব কী?'
      },
      options: [
        {
          en: 'It passes the HTTP request deeper into the onion pipeline, transferring execution to the next middleware or controller',
          bn: 'এটি অনুরোধটিকে অনিয়ন পাইপলাইনের পরবর্তী স্তরে পাঠিয়ে দেয়, যার ফলে পরবর্তী মিডলওয়্যার বা কন্ট্রোলার কার্যকর হতে পারে'
        },
        {
          en: 'It shuts down the web server immediately',
          bn: 'এটি সাথে সাথে ওয়েব সার্ভার বন্ধ করে দেয়'
        },
        {
          en: 'It deletes the user session cookie',
          bn: 'এটি ব্যবহারকারীর সেশন কুকি মুছে ফেলে'
        },
        {
          en: 'It sends an SMS message to the server administrator',
          bn: 'এটি সার্ভার অ্যাডমিনিস্ট্রেটরকে একটি এসএমএস বার্তা পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: '$next represents the next closure in the execution pipeline.',
        bn: '$next পাইপলাইনের পরবর্তী ধাপ বা কন্ট্রোলার মেথডকে নির্দেশ করে।'
      },
      explanation: {
        en: '$next($request) delegates control downstream; omitting it halts request processing.',
        bn: '$next($request) কল না করলে অনুরোধটি সেখানেই থেমে যায় এবং পরবর্তী কোড আর চলে না।'
      }
    },
    {
      id: 'throttle-middleware-rate-limiting-ex4',
      kind: 'mcq',
      topic: 'throttle-middleware-protection',
      question: {
        en: 'What does applying the middleware throttle:60,1 to an API route accomplish in Laravel?',
        bn: 'একটি এপিআই রাউটে throttle:60,1 মিডলওয়্যার প্রয়োগ করলে লারাভেলে কী সুবিধা অর্জিত হয়?'
      },
      options: [
        {
          en: 'It limits clients to a maximum of 60 requests per 1 minute, preventing brute-force and denial-of-service abuse',
          bn: 'এটি যেকোনো ক্লায়েন্টকে প্রতি ১ মিনিটে সর্বোচ্চ ৬০ টি অনুরোধে সীমাবদ্ধ করে, ফলে ব্রুট-ফোর্স ও ডিডিওএস আক্রমণ প্রতিহত হয়'
        },
        {
          en: 'It delays every response by exactly 60 seconds',
          bn: 'এটি প্রতিটি রেসপন্স পাঠানো ঠিক ৬০ সেকেন্ড দেরি করিয়ে দেয়'
        },
        {
          en: 'It charges the client 60 dollars per API call',
          bn: 'এটি প্রতি এপিআই কলের জন্য ক্লায়েন্টের কাছ থেকে ৬০ ডলার চার্জ করে'
        },
        {
          en: 'It restricts the route to 60-year-old users only',
          bn: 'এটি কেবল ৬০ বছর বয়সী ব্যবহারকারীদের জন্য রুটটি সীমাবদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The first number is maximum allowed attempts; the second number is window duration in minutes.',
        bn: 'প্রথম সংখ্যাটি অনুমোদিত মোট অনুরোধ এবং দ্বিতীয় সংখ্যাটি মিনিটের সময়সীমা।'
      },
      explanation: {
        en: 'throttle:60,1 enforces a rate limit of 60 requests per 1 minute window based on client IP or user ID.',
        bn: 'throttle:60,1 প্রতি ১ মিনিটে সর্বোচ্চ ৬০ টি অনুরোধের সীমা কার্যকর করে সার্ভারকে সুরক্ষিত রাখে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-routing-the-application',
    title: {
      en: 'Laravel Routing, Controllers & Middleware Quiz',
      bn: 'লারাভেল রাউটিং, কন্ট্রোলার এবং মিডলওয়্যার কুইজ'
    },
    questions: [
      {
        id: 'quiz-route-model-binding-custom-key',
        kind: 'mcq',
        topic: 'route-model-binding-custom-key',
        question: {
          en: 'How do you configure Route Model Binding to query a post by its "slug" column instead of the default "id"?',
          bn: 'ডিফল্ট "id" এর বদলে "slug" কলাম দিয়ে পোস্ট খোঁজার জন্য রাউট মডেল বাইন্ডিং কীভাবে কনফিগার করবেন?'
        },
        options: [
          { en: 'Route::get("/posts/{post:slug}", [PostController::class, "show"]);', bn: 'Route::get("/posts/{post:slug}", [PostController::class, "show"]);' },
          { en: 'Route::get("/posts/{slug_id}", [PostController::class, "show"]);', bn: 'Route::get("/posts/{slug_id}", [PostController::class, "show"]);' },
          { en: 'Route::slug("/posts/{post}", [PostController::class, "show"]);', bn: 'Route::slug("/posts/{post}", [PostController::class, "show"]);' },
          { en: 'Custom columns cannot be bound in Laravel routes', bn: 'লারাভেল রাউটে কাস্টম কলাম দিয়ে মডেল বাইন্ডিং করা অসম্ভব' }
        ],
        answer: 0,
        hint: {
          en: 'Appending :column inside the parameter bracket instructs Laravel to query that specific field.',
          bn: 'প্যারামিটারের ভেতর :column যুক্ত করলে লারাভেল ওই কলাম দিয়ে ডেটাবেস কোয়েরি চালায়।'
        },
        explanation: {
          en: '{post:slug} overrides the default primary key lookup to query by the slug attribute directly.',
          bn: '{post:slug} সিনট্যাক্স সরাসরি স্লাগ ফিল্ড দিয়ে রেকর্ড খুঁজে বের করার নির্দেশ দেয়।'
        }
      },
      {
        id: 'quiz-web-vs-api-routes-difference',
        kind: 'mcq',
        topic: 'web-vs-api-routes-middleware-groups',
        question: {
          en: 'What fundamental architectural distinction separates routes/web.php from routes/api.php in Laravel?',
          bn: 'লারাভেলে routes/web.php এবং routes/api.php এর মধ্যে মূল স্থাপত্যিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'routes/web.php is assigned the "web" middleware group containing sessions, cookies, and CSRF protection, while routes/api.php is stateless and rate-limited',
            bn: 'routes/web.php এ সেশন, কুকি ও CSRF প্রটেকশন সমৃদ্ধ "web" মিডলওয়্যার থাকে, আর routes/api.php হলো স্টেটলেস ও রেট-লিমিটেড'
          },
          {
            en: 'routes/api.php can only be executed by Android mobile phones',
            bn: 'routes/api.php কেবল অ্যান্ড্রয়েড মোবাইল ফোনেই চালানো যায়'
          },
          {
            en: 'routes/web.php deletes all database records on every request',
            bn: 'routes/web.php প্রতি অনুরোধে ডেটাবেসের সমস্ত তথ্য মুছে ফেলে'
          },
          {
            en: 'There is no difference; they are exact duplicate files',
            bn: 'এদের মধ্যে কোনো পার্থক্য নেই; এগুলো অবিকল একই ফাইল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The web group provides stateful browser sessions; the api group provides stateless microservice handling.',
          bn: 'web গ্রুপ ব্রাউজার সেশন ও স্টেট নিয়ন্ত্রণ করে; api গ্রুপ স্টেটলেস সার্ভিসের জন্য তৈরি।'
        },
        explanation: {
          en: 'web.php applies cookies, session state, and CSRF; api.php omits stateful sessions for REST APIs.',
          bn: 'web.php ফাইলে সেশন ও কুকি সক্রিয় থাকে, অপরদিকে api.php সম্পূর্ণ স্টেটলেস এপিআই এর জন্য নির্ধারিত।'
        }
      },
      {
        id: 'quiz-route-prefix-grouping',
        kind: 'mcq',
        topic: 'route-grouping-prefixes',
        question: {
          en: 'What is the most maintainable way to assign a common URI prefix (/admin) and auth middleware to multiple routes?',
          bn: 'একাধিক রাউটে একটি সাধারণ ইউআরএল প্রিফিক্স (/admin) এবং auth মিডলওয়্যার যুক্ত করার সবচেয়ে পরিচ্ছন্ন উপায় কোনটি?'
        },
        options: [
          {
            en: 'Use Route::middleware(["auth"])->prefix("admin")->group(function () { ... }); to encapsulate shared attributes cleanly',
            bn: 'Route::middleware(["auth"])->prefix("admin")->group(function () { ... }); ব্যবহার করে পরিচ্ছন্নভাবে গ্রুপ করা'
          },
          {
            en: 'Manually copy-paste the word "/admin" into 50 different controller file names',
            bn: '৫০ টি ভিন্ন কন্ট্রোলারের ফাইলে ম্যানুয়ালি "/admin" শব্দটি কপি-পেস্ট করা'
          },
          {
            en: 'Create a new database table called "admin_routes"',
            bn: '"admin_routes" নামে একটি নতুন ডেটাবেস টেবিল তৈরি করা'
          },
          {
            en: 'Route grouping is not supported in modern Laravel versions',
            bn: 'আধুনিক লারাভেলে রাউট গ্রুপিং সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Route groups prevent code repetition across common prefixes, names, and middleware.',
          bn: 'রাউট গ্রুপ একই ধরনের মিডলওয়্যার বা পাথ প্রিফিক্স বারবার লেখার ঝামেলা দূর করে।'
        },
        explanation: {
          en: 'Route grouping bundles shared middleware, prefixes, and namespaces into a single DRY definition block.',
          bn: 'রাউট গ্রুপ একাধিক রাউটের সাধারণ বৈশিষ্ট্যগুলোকে একটি পরিচ্ছন্ন ব্লকে সুন্দরভাবে আবদ্ধ করে।'
        }
      },
      {
        id: 'quiz-fallback-route-404-handling',
        kind: 'mcq',
        topic: 'route-fallback-handling',
        question: {
          en: 'What purpose does Route::fallback() serve at the bottom of routes/web.php?',
          bn: 'routes/web.php ফাইলের একেবারে নিচে Route::fallback() কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It executes when no other route matches the incoming request URL, allowing custom 404 views or single-page application (SPA) front-controller rendering',
            bn: 'যখন আগত অনুরোধের সাথে অন্য কোনো রুট মেলে না তখন এটি কার্যকর হয়, ফলে কাস্টম 404 ভিউ বা এসপিএ ফ্রন্ট কন্ট্রোলার রেন্ডার করা যায়'
          },
          {
            en: 'It rolls back all database transactions automatically',
            bn: 'এটি সমস্ত ডেটাবেস ট্রানজ্যাকশন স্বয়ংক্রিয়ভাবে বাতিল করে দেয়'
          },
          {
            en: 'It disconnects the internet router cable',
            bn: 'এটি ইন্টারনেট রাউটারের তার সংযোগ বিচ্ছিন্ন করে'
          },
          {
            en: 'It forces the browser to display a blank white page',
            bn: 'এটি ব্রাউজারে একটি ফাঁকা সাদা পর্দা দেখাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fallback routes act as a catch-all handler for unmatched URIs.',
          bn: 'ফলব্যাক রুট কোনো পাথ না মিললে শেষ ভরসা হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'Route::fallback provides a clean catch-all for custom 404 pages or delegating routing to client-side Vue/React apps.',
          bn: 'Route::fallback কাস্টম 404 এরর পেজ বা ক্লায়েন্ট-সাইড SPA রাউটিং হ্যান্ডেল করার জন্য আদর্শ।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'blade-and-the-view',
    title: {
      en: 'Blade Templating, Layouts & Components',
      bn: 'ব্লেড টেমপ্লেটিং, লেআউট এবং কম্পোনেন্ট'
    }
  }
};
