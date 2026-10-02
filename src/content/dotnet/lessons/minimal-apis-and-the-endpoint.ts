import type { Lesson } from '../../../lib/types';

export const MinimalApisAndTheEndpointLesson: Lesson = {
  slug: 'minimal-apis-and-the-endpoint',
  tech: 'dotnet',
  title: {
    en: 'Minimal APIs & High-Throughput Endpoints',
    bn: 'Minimal APIs এবং হাই-থ্রুপুট এন্ডপয়েন্ট'
  },
  summary: {
    en: 'Build high-speed cloud microservices using ASP.NET Core Minimal APIs. Map HTTP routes directly with MapGet and MapPost, eliminate allocation overhead using TypedResults, organize modular routes with RouteGroups, and apply cross-cutting validation via Endpoint Filters.',
    bn: 'ASP.NET Core Minimal APIs দিয়ে উচ্চগতির ক্লাউড মাইক্রোসার্ভিস তৈরি করুন। MapGet এবং MapPost দিয়ে সরাসরি রুট ম্যাপিং, TypedResults দিয়ে মেমোরি খরচ শূন্যে নামানো, RouteGroups দিয়ে মডুলার রুট বিন্যাস এবং Endpoint Filters দিয়ে ভ্যালিডেশন প্রয়োগ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'minimal-apis-architecture-heading',
      text: {
        en: 'Minimal APIs: Direct Route Mapping and TypedResults',
        bn: 'Minimal APIs: সরাসরি রুট ম্যাপিং এবং TypedResults'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Minimal APIs (application programming interfaces) in the .NET (cross-platform framework) runtime provide a streamlined approach for building fast HTTP microservices without the ceremony of traditional MVC (Model-View-Controller) controllers. Instead of declaring classes decorated with controller attributes, developers map routes directly on the WebApplication instance using MapGet and MapPost. Route parameters, dependency injection services, and JSON request bodies are injected automatically into handler delegates. In .NET 7 and 8, Microsoft introduced TypedResults. Unlike the legacy untyped Results class, TypedResults returns strongly-typed structs (such as Ok<T> and NotFound). This eliminates boxing, dramatically reduces memory allocations, and enables automatic OpenAPI schema generation.',
        bn: 'আধুনিক .NET (ক্রস-প্ল্যাটফর্ম ফ্রেমওয়ার্ক) রানটাইমে Minimal APIs (অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস) ঐতিহ্যবাহী MVC (Model-View-Controller) কন্ট্রোলারের জটিল নিয়মাবলী ছাড়াই উচ্চগতির এইচটিটিপি মাইক্রোসার্ভিস তৈরির আধুনিক উপায় সরবরাহ করে। কন্ট্রোলার ক্লাসের বদলে ডেভেলপাররা সরাসরি WebApplication ইনস্ট্যান্সে MapGet এবং MapPost দিয়ে রুট ম্যাপ করেন। রুট প্যারামিটার, ডিপেনডেন্সি ইনজেকশন সার্ভিস এবং জেসন বডি স্বয়ংক্রিয়ভাবে হ্যান্ডলার ফাংশনে যুক্ত হয়। .NET ৭ এবং ৮ সংস্করণে মাইক্রোসফট TypedResults প্রবর্তন করেছে। পুরনো Results ক্লাসের বিপরীতে TypedResults সরাসরি টাইপ-সেফ স্ট্রাক্ট (যেমন Ok<T> এবং NotFound) ফেরত দেয়। এটি অবজেক্ট বক্সিং বন্ধ করে মেমোরি খরচ বিপুল পরিমাণে কমায় এবং স্বয়ংক্রিয় OpenAPI স্কিমা তৈরি করতে সহায়তা করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural execution flow of an ASP.NET Core Minimal API: From incoming HTTP request through route matcher, endpoint filters, and zero-allocation TypedResults.',
        bn: 'চিত্র ১: ASP.NET Core Minimal API এর কার্যপ্রবাহ: ইনকামিং এইচটিটিপি রিকোয়েস্ট থেকে রুট ম্যাচিং, এন্ডপয়েন্ট ফিল্টার এবং শূন্য-অ্যালোকেশনের TypedResults রেসপন্স।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ASP.NET CORE MINIMAL APIS EXECUTION PIPELINE</text>

  <!-- Step 1: Client HTTP Request -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Incoming Request</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">GET /api/orders/42</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Authorization: Bearer</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Raw HTTP Packet</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Direct Socket Read</text>
  </g>

  <!-- Step 2: Route Matching -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Route Matching</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">MapGet("{id:int}")</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Direct Delegate Dispatch</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero Reflection Crawl</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Radix Tree Routing</text>
  </g>

  <!-- Step 3: Endpoint Filters -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Endpoint Filters</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">AddEndpointFilter</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Validation &amp; Logging</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Short-Circuit Guard</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Cross-Cutting Security</text>
  </g>

  <!-- Step 4: TypedResults -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. TypedResults</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">TypedResults.Ok(ord)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Status 200 JSON</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Zero Boxing Struct</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Microsecond Response</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'route-groups-and-endpoint-filters-heading',
      text: {
        en: 'Modular Architecture with Route Groups and Endpoint Filters',
        bn: 'Route Groups এবং Endpoint Filters দিয়ে মডুলার আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'As applications expand, placing hundreds of routes into a single file becomes unmanageable. Modern .NET solves this with Route Groups (MapGroup). Developers group related endpoints under a shared prefix (such as "/api/v1/orders"), attaching authentication policies, rate limits, and CORS rules to the entire group at once. Furthermore, Minimal APIs provide Endpoint Filters via the IEndpointFilter interface. Positioned around individual route handlers, endpoint filters intercept incoming arguments to execute validation rules, measure execution latency, and short-circuit invalid payloads with HTTP 400 Bad Request before hitting business logic.',
        bn: 'অ্যাপ্লিকেশনের আকার বাড়ার সাথে সাথে শত শত রুট একটি ফাইলে রাখলে কোড বিশৃঙ্খল হয়ে পড়ে। আধুনিক .NET এই সমস্যা নিরসনে Route Groups (MapGroup) প্রবর্তন করেছে। এর মাধ্যমে ডেভেলপাররা একটি নির্দিষ্ট প্রিফিক্সের অধীনে (যেমন "/api/v1/orders") সমস্ত রুটকে একত্রিত করে একসাথে অথেনটিকেশন, রেট লিমিটিং এবং কর্স (CORS) নীতি প্রয়োগ করতে পারেন। তাছাড়া Minimal APIs-এ IEndpointFilter ইন্টারফেসের মাধ্যমে এন্ডপয়েন্ট ফিল্টার ব্যবহার করা যায়। এটি রুট হ্যান্ডলারের আগে ইনপুট ডেটা যাচাই করে, এক্সিকিউশন সময় পরিমাপ করে এবং ত্রুটিযুক্ত ডেটা পেলে ব্যবসায়িক কোডে পৌঁছানোর আগেই HTTP 400 Bad Request দিয়ে শর্ট-সার্কিট করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of ASP.NET Core Minimal API route registration, route group prefixing, endpoint filter validation, and TypedResults responses.',
        bn: 'ASP.NET Core Minimal API রুট রেজিস্ট্রেশন, রুট গ্রুপ, ফিল্টার ভ্যালিডেশন এবং TypedResults রেসপন্সের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of ASP.NET Core Minimal APIs & Endpoint Filters

export interface OrderDto {
  id: number;
  item: string;
  total: number;
}

export class MinimalApiRouterSimulator {
  private routes: Map<string, (args: any) => { status: number; body: any }> = new Map();
  private filters: ((args: any, next: (args: any) => any) => any)[] = [];

  public addEndpointFilter(filter: (args: any, next: (args: any) => any) => any): this {
    this.filters.push(filter);
    return this;
  }

  // Simulating app.MapGet("/api/orders/{id:int}", ...)
  public mapGet(path: string, handler: (args: any) => { status: number; body: any }): void {
    this.routes.set('GET:' + path, handler);
  }

  // Simulating route dispatching through endpoint filter chain
  public dispatch(method: string, path: string, args: any): { status: number; body: any } {
    const key = method + ':' + path;
    const handler = this.routes.get(key);
    if (!handler) return { status: 404, body: 'Not Found' };

    let filterIndex = 0;
    const next = (currentArgs: any): any => {
      if (filterIndex < this.filters.length) {
        const filter = this.filters[filterIndex++];
        return filter(currentArgs, next);
      }
      return handler(currentArgs);
    };

    return next(args);
  }
}

// Execution demonstration
const router = new MinimalApiRouterSimulator();

// Adding an Endpoint Validation Filter (Validating id must be positive)
router.addEndpointFilter((args, next) => {
  console.log('[EndpointFilter] Validating request arguments:', args);
  if (args.id <= 0) {
    return { status: 400, body: { error: 'ValidationException: ID must be positive' } };
  }
  return next(args);
});

// Registering route: GET /api/orders/{id} returning TypedResults.Ok(order)
router.mapGet('/api/orders/{id}', (args) => {
  if (args.id === 42) {
    return { status: 200, body: { id: 42, item: 'Ultrasharp Monitor', total: 650 } };
  }
  return { status: 404, body: { error: 'Order not found' } };
});

// Test 1: Valid request for order 42
const res1 = router.dispatch('GET', '/api/orders/{id}', { id: 42 });
console.log('Valid Request Status:', res1.status); // 200 (TypedResults.Ok)
console.log('Order Item Name:', res1.body.item);

// Test 2: Invalid negative ID caught by Endpoint Filter
const res2 = router.dispatch('GET', '/api/orders/{id}', { id: -1 });
console.log('Invalid Request Status:', res2.status); // 400 (Short-circuited by filter)`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Minimal APIs',
          def: {
            en: 'Lightweight routing model in ASP.NET Core that maps HTTP endpoints directly using lambda delegates without controller classes.',
            bn: 'ASP.NET Core-এর হালকা রাউটিং মডেল যা কন্ট্রোলার ছাড়া সরাসরি ল্যাম্বডা ফাংশন দিয়ে এন্ডপয়েন্ট তৈরি করে।'
          }
        },
        {
          term: 'TypedResults',
          def: {
            en: 'Static factory producing strongly-typed struct HTTP results, enabling zero boxing, AOT compatibility, and OpenAPI metadata.',
            bn: 'টাইপ-সেফ ফ্যাক্টরি যা কোনো মেমোরি বক্সিং ছাড়া সরাসরি স্ট্রাক্ট রেসপন্স দেয় এবং OpenAPI তৈরি সহজ করে।'
          }
        },
        {
          term: 'Route Group',
          def: {
            en: 'API feature (MapGroup) grouping endpoints under a shared URI prefix and applying common authorization and filters.',
            bn: 'একই ইউআরআই প্রিফিক্সের অধীনে একাধিক এন্ডপয়েন্টকে একীভূত করে সাধারণ নীতিমালা প্রয়োগের সুবিধা।'
          }
        },
        {
          term: 'Endpoint Filter',
          def: {
            en: 'Cross-cutting component (IEndpointFilter) intercepting route handler invocations to enforce validation, timing, or caching.',
            bn: 'ফিল্টার যা রুট হ্যান্ডলার চলার আগে ইনপুট ডেটা যাচাই, সময় পরিমাপ এবং নিরাপত্তা পরীক্ষা সম্পন্ন করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'minimal-api-performance-advantage-ex1',
      kind: 'mcq',
      topic: 'minimal-api-performance-over-mvc',
      question: {
        en: 'Why do ASP.NET Core Minimal APIs achieve higher throughput and lower memory allocations than traditional MVC controllers?',
        bn: 'সনাতন MVC কন্ট্রোলারের তুলনায় ASP.NET Core Minimal APIs কেন উচ্চতর গতি ও স্বল্প মেমোরি খরচ নিশ্চিত করে?'
      },
      options: [
        {
          en: 'They eliminate the controller action descriptor pipeline, model metadata scanning, and reflection overhead, dispatching directly to compiled request delegates',
          bn: 'তারা কন্ট্রোলার অ্যাকশন ডেসক্রিপ্টর পাইপলাইন, মেটাডেটা স্ক্যানিং এবং রিফ্লেকশনের বাড়তি খরচ দূর করে সরাসরি কম্পাইল করা রিকোয়েস্ট ডেলিগেটে কাজ চালায়'
        },
        {
          en: 'Minimal APIs do not support JSON serialization',
          bn: 'Minimal APIs কোনো জেসন সিরিয়ালাইজেশন সমর্থন করে না'
        },
        {
          en: 'Minimal APIs run exclusively inside the computer CPU cache',
          bn: 'Minimal APIs কেবল কম্পিউটারের সিপিইউ ক্যাশের ভেতর চলে'
        },
        {
          en: 'They require zero lines of C# code to compile',
          bn: 'কম্পাইল করতে কোনো C# কোডের প্রয়োজন হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Minimal APIs remove reflection and controller infrastructure overhead.',
        bn: 'কন্ট্রোলারের বাড়তি স্তরগুলো বাদ দিয়ে সরাসরি রুট ম্যাপিং করার কারণেই এই গতি অর্জিত হয়।'
      },
      explanation: {
        en: 'Bypassing controller discovery and complex action filters allows Minimal APIs to process HTTP requests with minimal CPU cycles and negligible allocations.',
        bn: 'অপ্রয়োজনীয় চেকিং ও রিফ্লেকশন বাদ যাওয়ায় মাইক্রোসার্ভিসে এটি অভাবনীয় পারফরম্যান্স দেয়।'
      }
    },
    {
      id: 'typedresults-vs-results-boxing-ex2',
      kind: 'mcq',
      topic: 'typedresults-strong-typing-no-boxing',
      question: {
        en: 'What fundamental advantage does "TypedResults.Ok(data)" provide over the legacy "Results.Ok(data)" helper?',
        bn: 'পুরনো "Results.Ok(data)" এর তুলনায় "TypedResults.Ok(data)" কোন মৌলিক সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It returns a strongly-typed struct implementing IResult, eliminating object boxing, supporting Native AOT, and providing explicit return types for OpenAPI',
          bn: 'এটি IResult ইমপ্লিমেন্ট করা একটি টাইপ-সেফ স্ট্রাক্ট ফেরত দেয়, যা অবজেক্ট বক্সিং দূর করে, Native AOT সমর্থন করে এবং OpenAPI-এর জন্য স্পষ্ট টাইপ দেয়'
        },
        {
          en: 'It encrypts the returned data with an SSL certificate',
          bn: 'এটি প্রেরিত ডেটাকে এসএসএল সার্টিফিকেট দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'TypedResults only works with string text',
          bn: 'TypedResults কেবল সাধারণ টেক্সট স্ট্রিং নিয়ে কাজ করে'
        },
        {
          en: 'There is zero difference between TypedResults and Results',
          bn: 'TypedResults এবং Results এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'TypedResults is strongly typed, avoiding boxing and enabling OpenAPI schema extraction.',
        bn: 'TypedResults টাইপ-নিরাপদ হওয়ায় বক্সিংয়ের খরচ বাঁচে এবং এপিআই ডকুমেন্টেশন স্বয়ংক্রিয়ভাবে তৈরি হয়।'
      },
      explanation: {
        en: 'TypedResults returns concrete types like Ok<T> rather than object interfaces, allowing compile-time analysis, unit test inspection, and Native AOT support.',
        bn: 'সুনির্দিষ্ট টাইপ ফেরত দেওয়ার কারণে ইউনিট টেস্ট করা সহজ হয় এবং ক্লাউড বাইনারিতে কোনো সমস্যা হয় না।'
      }
    },
    {
      id: 'route-groups-mapgroup-purpose-ex3',
      kind: 'mcq',
      topic: 'route-groups-mapgroup-organization',
      question: {
        en: 'What is the primary architectural purpose of "app.MapGroup(\'/api/v1/orders\')" in ASP.NET Core Minimal APIs?',
        bn: 'ASP.NET Core Minimal APIs-এ "app.MapGroup(\'/api/v1/orders\')" এর মূল স্থাপত্যিক উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To group related endpoints under a common route prefix and uniformly apply cross-cutting authorization, CORS, and endpoint filters across all group routes',
          bn: 'একটি সাধারণ রুট প্রিফিক্সের অধীনে সম্পর্কিত এন্ডপয়েন্টগুলোকে একত্রিত করা এবং পুরো গ্রুপের ওপর একসাথে অথরাইজেশন, CORS ও ফিল্টার প্রয়োগ করা'
        },
        {
          en: 'To delete all endpoints when the server shuts down',
          bn: 'সার্ভার বন্ধ হলে সমস্ত এন্ডপয়েন্ট মুছে ফেলা'
        },
        {
          en: 'To double the amount of RAM available to the operating system',
          bn: 'অপারেটিং সিস্টেমের জন্য র্যামের পরিমাণ দ্বিগুণ করা'
        },
        {
          en: 'Route groups are only supported in mobile Android apps',
          bn: 'রুট গ্রুপ কেবল মোবাইল অ্যান্ড্রয়েড অ্যাপে সমর্থিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'MapGroup organizes modular routes with shared prefixes and policies.',
        bn: 'MapGroup একই ধরনের রুটগুলোকে সুন্দরভাবে সাজিয়ে সাধারণ নিরাপত্তা নীতি প্রয়োগের সুযোগ দেয়।'
      },
      explanation: {
        en: 'Route groups allow modular endpoint registration, avoiding repetitive prefix strings and centralizing security and filter configuration.',
        bn: 'বারবার একই পাথ না লিখে এক জায়গা থেকে পুরো এপিআই মডিউল নিয়ন্ত্রণ করতে এটি ব্যবহৃত হয়।'
      }
    },
    {
      id: 'endpoint-filters-validation-short-circuit-ex4',
      kind: 'mcq',
      topic: 'endpoint-filters-validation-timing',
      question: {
        en: 'How can an Endpoint Filter (AddEndpointFilter) prevent invalid request DTOs from ever executing the main route handler?',
        bn: 'একটি এন্ডপয়েন্ট ফিল্টার (AddEndpointFilter) কীভাবে ত্রুটিযুক্ত DTO ডেটাকে মূল রুট হ্যান্ডলারে পৌঁছানো থেকে বিরত রাখতে পারে?'
      },
      options: [
        {
          en: 'By validating the arguments and returning a TypedResults.ValidationProblem() directly instead of invoking the "next(context)" delegate',
          bn: 'ইনপুট আর্গুমেন্ট যাচাই করে পরবর্তী "next(context)" ডেলিগেট না ডেকে সরাসরি TypedResults.ValidationProblem() ফেরত দেওয়ার মাধ্যমে'
        },
        {
          en: 'By rebooting the server machine immediately',
          bn: 'সার্ভার মেশিন সাথে সাথে রিবুট করার মাধ্যমে'
        },
        {
          en: 'By converting the HTTP request into a Windows batch file',
          bn: 'এইচটিটিপি রিকোয়েস্টকে উইন্ডোজ ব্যাচ ফাইলে রূপান্তর করে'
        },
        {
          en: 'Endpoint filters cannot inspect method arguments',
          bn: 'এন্ডপয়েন্ট ফিল্টার কখনো মেথডের আর্গুমেন্ট দেখতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Filters short-circuit execution by returning early without calling next().',
        bn: 'next() না ডেকে সরাসরি এরর রেসপন্স ফেরত দিলে পেছনের আসল কোড আর রান করে না।'
      },
      explanation: {
        en: 'Endpoint filters wrap route handler execution. Returning an error result before calling next() safely short-circuits the pipeline.',
        bn: 'ভুল ইনপুট থাকলে পেছনের মূল্যবান ডেটাবেস লজিক না চালিয়ে শুরুতেই বাতিল করাই নিরাপদ অভ্যাস।'
      }
    }
  ],
  quiz: {
    id: 'quiz-minimal-apis-and-the-endpoint',
    title: {
      en: 'ASP.NET Core Minimal APIs & Routing Mastery Quiz',
      bn: 'ASP.NET Core Minimal APIs এবং রাউটিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-openapi-swagger-minimal-apis',
        kind: 'mcq',
        topic: 'openapi-metadata-minimal-apis',
        question: {
          en: 'Which extension method on RouteHandlerBuilder adds descriptive OpenAPI documentation (such as summary and description) to a Minimal API endpoint?',
          bn: 'Minimal API এন্ডপয়েন্টে OpenAPI বা Swagger ডকুমেন্টেশন যুক্ত করতে RouteHandlerBuilder-এর কোন এক্সটেনশন মেথডটি ব্যবহার করা হয়?'
        },
        options: [
          {
            en: '.WithSummary("...") and .WithDescription("...") (along with .Produces<T>(statusCode))',
            bn: '.WithSummary("...") এবং .WithDescription("...") (সাথে .Produces<T>(statusCode))'
          },
          {
            en: '.WriteHtmlManual()',
            bn: '.WriteHtmlManual()'
          },
          {
            en: '.SaveTextFileOnDisk()',
            bn: '.SaveTextFileOnDisk()'
          },
          {
            en: 'Minimal APIs do not support OpenAPI or Swagger metadata',
            bn: 'Minimal APIs কোনো OpenAPI বা Swagger সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use .WithSummary() and .WithDescription() to document Minimal APIs.',
          bn: 'সহজ মেথড চেইনিংয়ের মাধ্যমে এন্ডপয়েন্টের বিবরণ ও সামারি যোগ করা যায়।'
        },
        explanation: {
          en: 'Modern ASP.NET Core provides fluent endpoint metadata methods like WithSummary, WithDescription, and Produces to populate OpenAPI specs.',
          bn: 'এই মেথডগুলোর মাধ্যমে কোনো অ্যাট্রিবিউট ছাড়াই চমৎকার সোয়াগার এপিআই ডকুমেন্টেশন প্রস্তুত হয়।'
        }
      },
      {
        id: 'quiz-asparameters-dto-binding',
        kind: 'mcq',
        topic: 'asparameters-composite-binding-attribute',
        question: {
          en: 'What does the "[AsParameters]" attribute do when placed on a complex record or struct parameter in a Minimal API route handler?',
          bn: 'Minimal API রুট হ্যান্ডলারে একটি রেকর্ড বা স্ট্রাক্ট প্যারামিটারের ওপর "[AsParameters]" অ্যানোটেশন দিলে কী ঘটে?'
        },
        options: [
          {
            en: 'It unpacks the properties of the record and binds them individually from route values, query strings, headers, and dependency injection services',
            bn: 'এটি রেকর্ডের প্রপার্টিগুলোকে আলাদা করে রুট, কোয়েরি স্ট্রিং, হেডার এবং ডিপেনডেন্সি ইনজেকশন সার্ভিস থেকে স্বয়ংক্রিয়ভাবে বাইন্ড করে নেয়'
          },
          {
            en: 'It deletes the parameters from the HTTP request',
            bn: 'এটি এইচটিটিপি রিকোয়েস্ট থেকে প্যারামিটারগুলো মুছে ফেলে'
          },
          {
            en: 'It encrypts the parameters with a 256-bit hash key',
            bn: 'এটি প্যারামিটারগুলোকে ২৫৬-বিট কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: '[AsParameters] is only used for unit testing',
            bn: '[AsParameters] কেবল ইউনিট টেস্টিংয়ের জন্য ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: '[AsParameters] maps multiple query, route, and DI dependencies into a single clean DTO.',
          bn: '[AsParameters] একাধিক প্যারামিটারকে একটি পরিচ্ছন্ন একক অবজেক্টে রূপান্তর করে।'
        },
        explanation: {
          en: '[AsParameters] prevents route handler signatures from becoming bloated by bundling query parameters, headers, and services into a structured type.',
          bn: 'মেথডে ১০ টি আলাদা প্যারামিটার লেখার বদলে একটিমাত্র পরিচ্ছন্ন অবজেক্টে সবকিছু পাওয়ার জন্য এটি আদর্শ।'
        }
      },
      {
        id: 'quiz-native-aot-minimal-apis-rdg',
        kind: 'mcq',
        topic: 'request-delegate-generator-rdg-native-aot',
        question: {
          en: 'How does the Request Delegate Generator (RDG) source generator in .NET 8 enable Minimal APIs to run in Native AOT without reflection?',
          bn: '.NET ৮-এর Request Delegate Generator (RDG) সোর্স জেনারেটর কীভাবে Minimal APIs-কে কোনো রিফ্লেকশন ছাড়া Native AOT-তে চলার উপযুক্ত করে তোলে?'
        },
        options: [
          {
            en: 'It emits C# code at compile time that handles route parsing, parameter binding, and response serialization, bypassing runtime reflection and Expression.Compile() entirely',
            bn: 'এটি কম্পাইল করার সময়ই রুট পার্সিং, প্যারামিটার বাইন্ডিং এবং সিরিয়ালাইজেশনের C# কোড তৈরি করে ফেলে, ফলে কোনো রানটাইম রিফ্লেকশনের প্রয়োজন থাকে না'
          },
          {
            en: 'It converts the C# application into a Linux kernel driver',
            bn: 'এটি পুরো C# অ্যাপকে একটি লিনাক্স কার্নেল ড্রাইভার বানিয়ে ফেলে'
          },
          {
            en: 'RDG limits the web server to 1 concurrent request',
            bn: 'RDG ওয়েব সার্ভারকে একসাথে কেবল ১ টি রিকোয়েস্টে সীমাবদ্ধ করে'
          },
          {
            en: 'RDG was deprecated and removed in .NET 8',
            bn: '.NET ৮ সংস্করণে RDG বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'RDG generates request delegates at compile time for AOT compliance.',
          bn: 'RDG কম্পাইলের সময়ই সব রিকোয়েস্ট হ্যান্ডলিং কোড বানিয়ে রানটাইমকে পুরোপুরি রিফ্লেকশন-মুক্ত রাখে।'
        },
        explanation: {
          en: 'The Request Delegate Generator pre-compiles route handlers into static C# code during build, enabling sub-millisecond cold starts and full Native AOT readiness.',
          bn: 'বিল্ডের সময়ই সব কোড প্রস্তুত হয়ে যাওয়ায় অ্যাপ্লিকেশন চোখের পলকে চালু হয়।'
        }
      },
      {
        id: 'quiz-endpoint-route-pattern-constraints',
        kind: 'mcq',
        topic: 'route-parameter-constraints-regex-int',
        question: {
          en: 'What occurs if a client sends an HTTP GET request to "/api/orders/abc" when the route pattern is defined as "/api/orders/{id:int}"?',
          bn: 'যখন কোনো রুট প্যাটার্ন "/api/orders/{id:int}" হিসেবে নির্ধারিত থাকে, তখন ক্লায়েন্ট "/api/orders/abc" পাথে রিকোয়েস্ট পাঠালে কী ঘটে?'
        },
        options: [
          {
            en: 'The route constraint fails to match "abc" as an integer, causing the router to skip this endpoint and return an HTTP 404 Not Found response',
            bn: 'রুট শর্ত "abc" কে পূর্ণসংখ্যা হিসেবে মেলাতে ব্যর্থ হয়, ফলে রাউটার এই এন্ডপয়েন্টটি এড়িয়ে গিয়ে HTTP 404 Not Found রেসপন্স পাঠায়'
          },
          {
            en: 'The server crashes with an unhandled exception',
            bn: 'সার্ভার একটি অনাকাঙ্ক্ষিত এক্সেপশনে ক্র্যাশ করে'
          },
          {
            en: 'The string "abc" is automatically converted to the number 0',
            bn: '"abc" স্ট্রিংটি স্বয়ংক্রিয়ভাবে ০ সংখ্যায় রূপান্তরিত হয়'
          },
          {
            en: 'The database deletes all order records',
            bn: 'ডেটাবেস সমস্ত অর্ডার মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Route constraints prevent non-matching paths from invoking the handler, yielding a 404.',
          bn: 'শর্ত না মিললে রাউটার সেই মেথডটি রান না করে সরাসরি ৪০৪ Not Found দেয়।'
        },
        explanation: {
          en: 'Route constraints like ":int" prevent invalid path matching. If no alternative route matches, ASP.NET Core returns HTTP 404 Not Found cleanly.',
          bn: 'ভুল টাইপের রিকোয়েস্ট কন্ট্রোলারে ঢোকার আগেই রাউটিং স্তরে আটকে দিয়ে সিস্টেম পরিচ্ছন্ন রাখা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'mvc-and-the-controller',
    title: {
      en: 'ASP.NET Core MVC & Controllers',
      bn: 'ASP.NET Core MVC এবং কন্ট্রোলার'
    }
  }
};
