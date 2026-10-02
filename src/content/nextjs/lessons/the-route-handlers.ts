import type { Lesson } from '../../../lib/types';

export const routeHandlersLesson: Lesson = {
  slug: 'the-route-handlers',
  tech: 'nextjs',
  title: {
    en: 'Route Handlers — REST API Endpoints with NextRequest & NextResponse',
    bn: 'রুট হ্যান্ডলারস — NextRequest ও NextResponse দিয়ে REST API'
  },
  summary: {
    en: 'Next.js Route Handlers allow developers to build custom backend REST APIs and secure webhook processors within the App Router. In this lesson, you will master exporting HTTP method functions (GET, POST, PUT, DELETE), inspecting request bodies and URL queries with NextRequest, returning JSON responses via NextResponse, and handling third-party webhooks with signature validation.',
    bn: 'Next.js রুট হ্যান্ডলারের মাধ্যমে ডেভেলপাররা অ্যাপ রাউটারের ভেতরেই নিজস্ব ব্যাকএন্ড REST API এবং নিরাপদ ওয়েবহুক প্রসেসর তৈরি করতে পারেন। এই পাঠে আপনি HTTP মেথড ফাংশন (GET, POST, PUT, DELETE) এক্সপোর্ট করা, NextRequest দিয়ে বডি ও কোয়েরি পরীক্ষা, NextResponse দিয়ে JSON রেসপন্স পাঠানো এবং সিগনেচার যাচাই সহ তৃতীয় পক্ষের ওয়েবহুক পরিচালনা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'route-handlers-architecture-overview',
      text: {
        en: 'The Route Handlers API Architecture',
        bn: 'রুট হ্যান্ডলারস এপিআই আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you create an Application Programming Interface (API) endpoint in Next.js, you add a route.ts file inside any subfolder of the app directory. Route Handlers replace legacy API pages by supporting standard Web Request and Response standards. You declare endpoints by exporting named asynchronous functions corresponding to HTTP methods.',
        bn: 'যখন আপনি Next.js-এ অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস (API) তৈরি করেন, তখন app ডিরেক্টরির যেকোনো ফোল্ডারে একটি route.ts ফাইল যুক্ত করেন। রুট হ্যান্ডলার আধুনিক ওয়েব রিকোয়েস্ট ও রেসপন্স স্ট্যান্ডার্ড ব্যবহার করে পুরোনো এপিআই পেজের স্থান নিয়েছে। আপনি সংশ্লিষ্ট এইচটিটিপি মেথডের নামে অ্যাসিনক্রোনাস ফাংশন এক্সপোর্ট করে এন্ডপয়েন্ট তৈরি করেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'route.ts',
          def: {
            en: 'The special file defining backend HTTP endpoint logic for a route segment, mutually exclusive with page.tsx.',
            bn: 'একটি বিশেষ ফাইল যা রুট সেগমেন্টের জন্য ব্যাকএন্ড এইচটিটিপি লজিক নির্ধারণ করে এবং একই ফোল্ডারে page.tsx-এর সাথে রাখা যায় না।'
          }
        },
        {
          term: 'NextRequest',
          def: {
            en: 'An extension of the standard Web Request API providing helper access to searchParams, cookies, and IP metadata.',
            bn: 'ওয়েব রিকোয়েস্টের একটি আধুনিক রূপ যা সহজে কোয়েরি প্যারামিটার, কুকি এবং ক্লায়েন্ট আইপি মেটাডাটা পড়ার সুবিধা দেয়।'
          }
        },
        {
          term: 'NextResponse.json()',
          def: {
            en: 'A helper method constructing an HTTP Response with Content-Type application/json and custom status codes.',
            bn: 'সঠিক হেডার এবং স্ট্যাটাস কোড সহ JSON ফরম্যাটে ডাটা ফেরত পাঠানোর একটি বিশেষ নেক্সট.জেএস মেথড।'
          }
        },
        {
          term: 'Webhook Verification',
          def: {
            en: 'Validating cryptographic HMAC signatures on incoming raw request bodies to authenticate external service payloads.',
            bn: 'বাহ্যিক সার্ভার থেকে আসা আসল ডাটা নিশ্চিত করতে ক্রিপ্টোগ্রাফিক ডিজিটাল স্বাক্ষর পরীক্ষা করার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'http-methods-matrix',
      text: {
        en: 'HTTP Method Function Exports Matrix',
        bn: 'এইচটিটিপি মেথড ফাংশন এক্সপোর্ট ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Exported Function Name', bn: 'ফাংশনের নাম' },
        { en: 'HTTP Protocol Method', bn: 'এইচটিটিপি মেথড' },
        { en: 'Common API Operation', bn: 'সাধারণ অপারেশন' }
      ],
      rows: [
        [
          { en: 'export async function GET(request)', bn: 'export async function GET(request)' },
          { en: 'HTTP GET', bn: 'HTTP GET' },
          { en: 'Fetching records, reading catalog data, search queries', bn: 'ডাটা রিড করা, তালিকা প্রদর্শন ও সার্চ কোয়েরি' }
        ],
        [
          { en: 'export async function POST(request)', bn: 'export async function POST(request)' },
          { en: 'HTTP POST', bn: 'HTTP POST' },
          { en: 'Creating records, payment webhooks, login credentials', bn: 'নতুন রেকর্ড তৈরি, পেমেন্ট ওয়েবহুক ও লগইন ডাটা' }
        ],
        [
          { en: 'export async function PUT / PATCH', bn: 'export async function PUT / PATCH' },
          { en: 'HTTP PUT / PATCH', bn: 'HTTP PUT / PATCH' },
          { en: 'Full or partial updates to existing database records', bn: 'বিদ্যমান ডাটার সম্পূর্ণ বা আংশিক আপডেট' }
        ],
        [
          { en: 'export async function DELETE(request)', bn: 'export async function DELETE(request)' },
          { en: 'HTTP DELETE', bn: 'HTTP DELETE' },
          { en: 'Deleting records or invalidating active session tokens', bn: 'রেকর্ড মুছে ফেলা বা সেশন টোকেন বাতিল করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'route-handler-simulation-code',
      text: {
        en: 'Working Route Handler Dispatch and Response Simulation',
        bn: 'কার্যকরী রুট হ্যান্ডলার ডিসপ্যাচ ও রেসপন্স সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js Route Handler HTTP Dispatcher
class MockRouteHandlerModule {
  // 1. GET endpoint: reads query parameters
  static async GET(mockRequest) {
    const limit = parseInt(mockRequest.searchParams.get('limit') || '10', 10);
    const items = [{ id: 1, name: 'Mechanical Keyboard' }];
    return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: { count: items.length, limit: limit, items: items }
    };
  }

  // 2. POST endpoint: parses JSON body and creates record
  static async POST(mockRequest) {
    const body = mockRequest.body;
    if (!body || !body.title) {
      return { status: 400, body: { error: 'Field title is required' } };
    }
    return {
      status: 201,
      body: { id: 105, title: body.title, created: true }
    };
  }
}

// Execute GET request simulation
const getReq = { searchParams: new URLSearchParams('limit=20') };
const getResponse = await MockRouteHandlerModule.GET(getReq);

// Execute POST request simulation
const postReq = { body: { title: 'Ergonomic Desk Chair' } };
const postResponse = await MockRouteHandlerModule.POST(postReq);

console.log('GET response HTTP status:', getResponse.status);
// -> GET response HTTP status: 200
console.log('GET parsed query limit:', getResponse.body.limit);
// -> GET parsed query limit: 20
console.log('POST creation HTTP status:', postResponse.status);
// -> POST creation HTTP status: 201
console.log('POST created item identifier:', postResponse.body.id);
// -> POST created item identifier: 105`,
      caption: {
        en: 'Route handler returns status 200 with limit 20 for GET and status 201 with ID 105 for POST',
        bn: 'রুট হ্যান্ডলার GET-এ লিমিট ২০ সহ ২০০ স্ট্যাটাস এবং POST-এ আইডি ১০৫ সহ ২০১ স্ট্যাটাস ফেরত দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'webhook-and-caching-rules',
      text: {
        en: 'Webhook Idempotency and Route Caching Rules',
        bn: 'ওয়েবহুক আইডেমপোটেন্সি ও রুট ক্যাশিং নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When processing webhooks from services like Stripe or GitHub, third-party platforms retry deliveries upon network timeouts or non-success responses. Your POST handlers must be idempotent: store incoming event IDs in your database and reject duplicates with HTTP 200. Always verify cryptographic request signatures against the raw body text before parsing payload JSON.',
        bn: 'স্ট্রাইপ বা গিটহাবের মতো প্ল্যাটফর্ম থেকে ওয়েবহুক গ্রহণের সময় নেটওয়ার্ক বিলম্ব হলে তারা বারবার রিকোয়েস্ট পাঠায়। তাই আপনার POST হ্যান্ডলারকে অবশ্যই আইডেমপোটেন্ট হতে হবে: ডাটাবেজে ইভেন্ট আইডি সংরক্ষণ করে ডুপ্লিকেট রিকোয়েস্ট শনাক্ত করুন এবং ২০০ স্ট্যাটাস ফেরত দিন। আর JSON পার্স করার পূর্বে ক্রিপ্টোগ্রাফিক সিগনেচার যাচাই করা বাধ্যতামূলক।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. No Co-location with page.tsx: A folder cannot contain both a page.tsx and a route.ts file; place API handlers in an app/api/ directory.',
          bn: '১. পেজের সাথে রুট নিষিদ্ধ: একই ফোল্ডারে কখনো page.tsx এবং route.ts রাখবেন না; এপিআই ফাইল সর্বদা app/api ফোল্ডারে রাখুন।'
        },
        {
          en: '2. Raw Body for Signatures: When verifying webhook HMAC signatures, read request.text() rather than request.json() to preserve byte fidelity.',
          bn: '২. সিগনেচারে র-বডি: ওয়েবহুক সিগনেচার মেলানোর সময় request.text() দিয়ে আসল টেক্সট পড়ুন যাতে কোনো বাইট পরিবর্তন না হয়।'
        },
        {
          en: '3. Opt into Static Caching: GET handlers can be cached statically by declaring export const dynamic = "force-static".',
          bn: '৩. স্ট্যাটিক ক্যাশিং সুবিধা: অপরিবর্তনশীল ডাটার GET হ্যান্ডলারে export const dynamic = "force-static" দিয়ে দ্রুত ক্যাশ সক্রিয় করুন।'
        },
        {
          en: '4. Dynamic by Default on Mutations: POST, PUT, and DELETE methods are always dynamic and never cached by the Next.js runtime.',
          bn: '৪. মিউটেশনে অটো ডায়নামিক: POST বা DELETE হ্যান্ডলার সর্বদা ডায়নামিক থাকে এবং রানটাইমে কখনো ক্যাশ হয় না।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-rth-ex1',
      kind: 'mcq',
      topic: 'page and route conflict rule in same segment',
      question: {
        en: 'What happens if a developer places both a "page.tsx" file and a "route.ts" file inside the exact same folder in the Next.js App Router?',
        bn: 'Next.js অ্যাপ রাউটারে একই ফোল্ডারের ভেতর "page.tsx" এবং "route.ts" উভয় ফাইল একসাথে রাখলে কী ঘটবে?'
      },
      options: [
        {
          en: 'Next.js will throw a build error, because a route segment cannot simultaneously serve an HTML page and a raw API Route Handler',
          bn: 'Next.js বিল্ড এরর দেবে, কারণ একটিমাত্র রুট সেগমেন্ট একসাথে এইচটিএমএল পেজ এবং ব্যাকএন্ড এপিআই হ্যান্ডলার উভয় হতে পারে না'
        },
        {
          en: 'Next.js merges them into a single PDF document',
          bn: 'Next.js উভয় ফাইলকে একত্রিত করে একটি পিডিএফ বানাবে'
        },
        {
          en: 'The page file will only be visible on weekends',
          bn: 'পেজ ফাইলটি কেবল ছুটির দিনেই দেখা যাবে'
        },
        {
          en: 'Both files work seamlessly together without any conflicts',
          bn: 'কোনো সমস্যা ছাড়াই দুটি ফাইল চমৎকারভাবে একসাথে কাজ করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A folder can be either a UI page or an API route handler, never both.',
        bn: 'একটি ফোল্ডার ইউআই পেজ হতে পারে অথবা এপিআই হ্যান্ডলার হতে পারে, একসাথে দুটো নয়।'
      },
      explanation: {
        en: 'Route Handlers and Pages cannot co-exist at the exact same route level. To avoid routing conflicts, keep API Route Handlers isolated inside subfolders like app/api/users/route.ts.',
        bn: 'একই পাথে পেজ এবং রুট হ্যান্ডলার রাখা নিষিদ্ধ। তাই এপিআই এন্ডপয়েন্টগুলোকে সর্বদা app/api/-এর মতো আলাদা সাবফোল্ডারে রাখা হয়।'
      }
    },
    {
      id: 'nx-rth-ex2',
      kind: 'mcq',
      topic: 'http method exports syntax in route handlers',
      question: {
        en: 'How do you define a route handler that responds specifically to HTTP "POST" requests in Next.js?',
        bn: 'Next.js-এ নির্দিষ্টভাবে HTTP "POST" রিকোয়েস্টে সাড়া দিতে কীভাবে রুট হ্যান্ডলার তৈরি করতে হয়?'
      },
      options: [
        {
          en: 'Export an asynchronous function explicitly named "POST": "export async function POST(request: NextRequest) { ... }"',
          bn: '"POST" নামে একটি অ্যাসিনক্রোনাস ফাংশন এক্সপোর্ট করে: "export async function POST(request: NextRequest) { ... }"'
        },
        {
          en: 'Write "function handlePost() { ... }" inside a HTML form tag',
          bn: 'এইচটিএমএল ফর্ম ট্যাগের ভেতর "function handlePost() { ... }" লিখে'
        },
        {
          en: 'Create a file named "post.js" in the root directory',
          bn: 'রুট ডিরেক্টরিতে "post.js" নামের একটি ফাইল তৈরি করে'
        },
        {
          en: 'Declare an interface named "PostRequest" in TypeScript',
          bn: 'টাইপস্ক্রিপ্টে "PostRequest" নামের একটি ইন্টারফেস ঘোষণা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Route Handlers export functions named after standard HTTP verbs in uppercase.',
        bn: 'রুট হ্যান্ডলারে বড় হাতের অক্ষরে প্রমিত এইচটিটিপি মেথডের নামে ফাংশন এক্সপোর্ট করতে হয়।'
      },
      explanation: {
        en: 'Next.js inspects exported functions. Exporting GET, POST, PUT, PATCH, DELETE, or HEAD binds that function to the corresponding HTTP method on that route.',
        bn: 'Next.js ফাংশনের নাম দেখে কাজ ঠিক করে। বড় হাতের GET, POST বা DELETE নামে ফাংশন এক্সপোর্ট করলে সংশ্লিষ্ট মেথডের রিকোয়েস্ট সেখানে পৌঁছায়।'
      }
    },
    {
      id: 'nx-rth-ex3',
      kind: 'mcq',
      topic: 'reading url search params in nextrequest',
      question: {
        en: 'How can you read a query parameter (such as "?category=books") from an incoming request inside a GET Route Handler?',
        bn: 'একটি GET রুট হ্যান্ডলারে আগত রিকোয়েস্ট থেকে ইউআরএল কোয়েরি প্যারামিটার (যেমন "?category=books") কীভাবে পড়বেন?'
      },
      options: [
        {
          en: 'Use "request.nextUrl.searchParams.get(\'category\')"',
          bn: '"request.nextUrl.searchParams.get(\'category\')" ব্যবহার করে'
        },
        {
          en: 'Read document.location.search directly',
          bn: 'সরাসরি document.location.search পড়ে'
        },
        {
          en: 'Inspect window.queryParameters in the browser',
          bn: 'ব্রাউজারে window.queryParameters পরীক্ষা করে'
        },
        {
          en: 'Query parameters are not accessible on backend servers',
          bn: 'ব্যাকএন্ড সার্ভারে কোয়েরি প্যারামিটার পড়া অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'NextRequest provides the nextUrl.searchParams helper object.',
        bn: 'NextRequest অবজেক্টে nextUrl.searchParams হেল্পার পাওয়া যায়।'
      },
      explanation: {
        en: 'NextRequest extends the Web Request API with the nextUrl property, allowing direct access to URLSearchParams without manual string splitting.',
        bn: 'NextRequest-এর নিজস্ব nextUrl প্রোপার্টি রয়েছে, যা দিয়ে খুব সহজেই nextUrl.searchParams.get(\'key\') লিখে যেকোনো কোয়েরি পড়া যায়।'
      }
    },
    {
      id: 'nx-rth-ex4',
      kind: 'mcq',
      topic: 'webhook raw body requirement for hmac signature verification',
      question: {
        en: 'Why must developers read "await request.text()" rather than "await request.json()" when verifying cryptographic webhook signatures (like Stripe or Shopify)?',
        bn: 'স্ট্রাইপ বা শপিফাইয়ের মতো সার্ভারের ওয়েবহুক সিগনেচার যাচাই করার সময় "await request.json()"-এর বদলে "await request.text()" কেন পড়তে হয়?'
      },
      options: [
        {
          en: 'JSON parsing normalizes whitespace, indentation, and key order, which changes the byte representation and causes cryptographic HMAC hash verification to fail',
          bn: 'JSON পার্স করলে স্পেস ও ইন্ডেন্টেশন বদলে যায়, যার ফলে বাইট পরিবর্তিত হয়ে ক্রিপ্টোগ্রাফিক HMAC হ্যাশ যাচাই ব্যর্থ হয়'
        },
        {
          en: 'request.json() is only available on Fridays',
          bn: 'request.json() কেবল শুক্রবারেই ব্যবহার করা যায়'
        },
        {
          en: 'Webhook signatures can only be calculated on binary numbers',
          bn: 'ওয়েবহুক সিগনেচার কেবল বাইনারি সংখ্যার ওপর হিসাব করা সম্ভব'
        },
        {
          en: 'request.text() speeds up server memory by 500 percent',
          bn: 'request.text() সার্ভারের মেমরি ৫০০ শতাংশ দ্রুত করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'HMAC verification requires the exact unmodified raw bytes sent across the wire.',
        bn: 'ডিজিটাল স্বাক্ষর মেলানোর জন্য তারের মধ্য দিয়ে আসা হুবহু মূল টেক্সটের প্রয়োজন হয়।'
      },
      explanation: {
        en: 'Cryptographic signatures are computed over the exact raw byte sequence. Parsing into JSON mutates character formatting and invalidates the HMAC signature comparison.',
        bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ হুবহু আসল ক্যারেক্টারের ওপর নির্ভর করে। JSON-এ রূপান্তর করলে ফরম্যাট সামান্য বদলে যায়, ফলে সিগনেচার আর মেলে না।'
      }
    }
  ],
  quiz: {
    id: 'the-route-handlers-quiz',
    title: {
      en: 'Next.js Route Handlers & REST APIs Quiz',
      bn: 'Next.js রুট হ্যান্ডলারস ও REST API কুইজ'
    },
    questions: [
      {
        id: 'q-route-handler-static-caching-conditions',
        kind: 'mcq',
        topic: 'static caching behavior of GET route handlers',
        question: {
          en: 'Under what circumstances can a GET Route Handler in Next.js be statically cached at build time?',
          bn: 'Next.js-এ কোন পরিস্থিতিতে একটি GET রুট হ্যান্ডলার বিল্ডের সময়ই স্ট্যাটিক্যালি ক্যাশ হতে পারে?'
        },
        options: [
          {
            en: 'When the GET function does not use the "request" object, avoids dynamic functions (like cookies() or headers()), and either uses cached fetches or exports "export const dynamic = \'force-static\'"',
            bn: 'যখন GET ফাংশনটি "request" অবজেক্ট ব্যবহার করে না, কুকি বা হেডার এড়িয়ে চলে এবং স্ট্যাটিক ডাটা ব্যবহার করে বা "force-static" ঘোষণা করে'
          },
          {
            en: 'Only if the response contains fewer than 10 characters',
            bn: 'কেবল যদি রেসপন্সে ১০টির কম ক্যারেক্টার থাকে'
          },
          {
            en: 'When running on the Linux operating system only',
            bn: 'কেবল যখন লিনাক্স অপারেটিং সিস্টেমে চালানো হয়'
          },
          {
            en: 'Route Handlers can never be cached under any circumstances',
            bn: 'কোনো অবস্থাতেই রুট হ্যান্ডলার ক্যাশ করা সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'GET handlers without request arguments can be statically pre-rendered.',
          bn: 'অনুরোধের ওপর নির্ভরশীল না থাকা GET হ্যান্ডলার স্ট্যাটিক করা সম্ভব।'
        },
        explanation: {
          en: 'A GET Route Handler that does not access dynamic request parameters can be pre-rendered into a static response file at build time, yielding extreme CDN throughput.',
          bn: 'রিকোয়েস্ট অবজেক্টে হাত না দিয়ে কেবল স্থায়ী ডাটা রিটার্ন করলে Next.js বিল্ডের সময়ই সেটিকে স্ট্যাটিক ফাইল বানিয়ে সিডিএন থেকে দ্রুত পরিবেশন করতে পারে।'
        }
      },
      {
        id: 'q-cors-headers-options-handler',
        kind: 'mcq',
        topic: 'handling CORS preflight requests in route handlers',
        question: {
          en: 'How do you handle Cross-Origin Resource Sharing (CORS) preflight requests for a Route Handler in Next.js?',
          bn: 'Next.js রুট হ্যান্ডলারে ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS) প্রি-ফ্লাইট রিকোয়েস্ট কীভাবে হ্যান্ডল করবেন?'
        },
        options: [
          {
            en: 'Export an "OPTIONS" function that returns a response with the required "Access-Control-Allow-Origin" and "Access-Control-Allow-Methods" headers',
            bn: 'একটি "OPTIONS" ফাংশন এক্সপোর্ট করে যা দরকারি "Access-Control-Allow-Origin" এবং মেথড হেডার সহ রেসপন্স পাঠায়'
          },
          {
            en: 'Delete the CORS security policy from the internet browser',
            bn: 'ইন্টারনেট ব্রাউজার থেকে কর্স সিকিউরিটি পলিসি মুছে ফেলে'
          },
          {
            en: 'Rename the API route to start with "cors_"',
            bn: 'এপিআই রুটের নাম বদলে শুরুতে "cors_" যোগ করে'
          },
          {
            en: 'CORS cannot be configured in Next.js App Router',
            bn: 'Next.js অ্যাপ রাউটারে কর্স কনফিগার করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Export an OPTIONS handler with Access-Control headers for CORS preflight.',
          bn: 'প্রি-ফ্লাইটের জন্য Access-Control হেডার সহ একটি OPTIONS হ্যান্ডলার লিখুন।'
        },
        explanation: {
          en: 'Browsers send an HTTP OPTIONS preflight request before making cross-origin requests. Exporting an OPTIONS handler allows you to respond with appropriate Access-Control headers.',
          bn: 'ব্রাউজার অন্য ডোমেনে কল করার আগে একটি OPTIONS রিকোয়েস্ট পাঠায়। OPTIONS ফাংশন এক্সপোর্ট করে তাতে অনুমোদিত ডোমেনের হেডার যুক্ত করে দিলেই কর্স সফল হয়।'
        }
      },
      {
        id: 'q-streaming-responses-route-handler',
        kind: 'mcq',
        topic: 'streaming responses using ReadableStream in route handlers',
        question: {
          en: 'How can a Next.js Route Handler stream large binary datasets or AI chat tokens progressively to the client?',
          bn: 'একটি Next.js রুট হ্যান্ডলার কীভাবে বড় ডাটা বা এআই চ্যাট টোকেন ধাপে ধাপে ক্লায়েন্টে স্ট্রিম করতে পারে?'
        },
        options: [
          {
            en: 'Return a standard web "Response" object initialized with a "ReadableStream", setting the Content-Type header to "text/event-stream" or application stream formats',
            bn: 'একটি "ReadableStream" সহ ওয়েব "Response" অবজেক্ট রিটার্ন করে এবং Content-Type হিসেবে "text/event-stream" নির্ধারণ করে'
          },
          {
            en: 'By emailing individual words one by one to the user',
            bn: 'ব্যবহারকারীকে একটি একটি করে শব্দ ইমেইল করে পাঠিয়ে'
          },
          {
            en: 'By writing each letter to a USB flash drive',
            bn: 'প্রতিটি অক্ষর একটি ইউএসবি ড্রাইভে সংরক্ষণ করে'
          },
          {
            en: 'Streaming responses are only possible in Python Django',
            bn: 'স্ট্রিমিং রেসপন্স কেবল পাইথন জ্যাঙ্গোতে সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use a Web ReadableStream inside the Response constructor.',
          bn: 'Response তৈরিতে একটি Web ReadableStream ব্যবহার করুন।'
        },
        explanation: {
          en: 'Route Handlers support Web standard streams. Passing a ReadableStream to new Response(stream) allows streaming real-time tokens (like OpenAI outputs) or large binary data chunks.',
          bn: 'রুট হ্যান্ডলার ওয়েব স্ট্যান্ডার্ড স্ট্রিম পুরোপুরি সমর্থন করে। ReadableStream ব্যবহার করে এআই চ্যাটবটের মতো রিয়েল-টাইমে একটি একটি করে শব্দ ব্রাউজারে পাঠানো যায়।'
        }
      },
      {
        id: 'q-nextjs-cookie-reading-route-handlers',
        kind: 'mcq',
        topic: 'reading and writing cookies in route handlers',
        question: {
          en: 'How do you inspect incoming cookies on the request inside a Route Handler?',
          bn: 'একটি রুট হ্যান্ডলারের ভেতর আগত রিকোয়েস্টের কুকি কীভাবে পরীক্ষা করবেন?'
        },
        options: [
          {
            en: 'Inspect "request.cookies.get(\'token\')" on the NextRequest parameter, or call "cookies()" from "next/headers"',
            bn: 'NextRequest প্যারামিটারে "request.cookies.get(\'token\')" পরীক্ষা করে, অথবা "next/headers" থেকে "cookies()" কল করে'
          },
          {
            en: 'Read the browser document.cookie object in the terminal',
            bn: 'টার্মিনালে ব্রাউজারের document.cookie অবজেক্ট পড়ে'
          },
          {
            en: 'Search for cookies inside the package.json file',
            bn: 'package.json ফাইলের ভেতর কুকি খুঁজে'
          },
          {
            en: 'Cookies cannot be accessed inside API route handlers',
            bn: 'এপিআই রুট হ্যান্ডলারে কুকি এক্সেস করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'NextRequest exposes the .cookies map directly.',
          bn: 'NextRequest অবজেক্টে সরাসরি .cookies ম্যাপ পাওয়া যায়।'
        },
        explanation: {
          en: 'NextRequest provides request.cookies.get(name) for simple cookie inspection. You can also import and await cookies() from next/headers.',
          bn: 'NextRequest-এর নিজস্ব request.cookies.get(নাম) রয়েছে, যার মাধ্যমে যেকোনো সেশন কুকি সহজে পড়ে যাচাই করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-server-actions',
    title: {
      en: 'Server Actions — Forms, Mutations & useOptimistic Updates',
      bn: 'সার্ভার অ্যাকশনস — ফর্ম, মিউটেশন ও useOptimistic আপডেট'
    }
  }
};
