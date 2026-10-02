import type { Lesson } from '../../../lib/types';

export const TheRuntimeAndTheHostLesson: Lesson = {
  slug: 'the-runtime-and-the-host',
  tech: 'dotnet',
  title: {
    en: 'The Generic Host, WebApplication & Kestrel Server',
    bn: 'Generic Host, WebApplication এবং Kestrel সার্ভার'
  },
  summary: {
    en: 'Beginner overview of the .NET application bootstrap architecture: how WebApplicationBuilder unites dependency injection, configuration, and logging, how the Kestrel web server processes HTTP requests, and how the middleware pipeline directs request and response flow.',
    bn: '.NET অ্যাপ্লিকেশন বুটস্ট্র্যাপ আর্কিটেকচারের প্রারম্ভিক পরিচিতি: কীভাবে WebApplicationBuilder ডিপেনডেন্সি ইনজেকশন, কনফিগারেশন ও লগিং একীভূত করে, Kestrel ওয়েব সার্ভার কীভাবে এইচটিটিপি রিকোয়েস্ট পরিচালনা করে এবং কীভাবে মিডলওয়্যার পাইপলাইন রিকোয়েস্ট ও রেসপন্স প্রবাহ নিয়ন্ত্রণ করে।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'generic-host-and-kestrel-bootstrap-heading',
      text: {
        en: 'The Generic Host and Kestrel Web Server Architecture',
        bn: 'Generic Host এবং Kestrel ওয়েব সার্ভার আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern .NET (the cross-platform framework) applications launch through a unified hosting model known as the Generic Host. In ASP.NET Core, bootstrapping begins with WebApplication.CreateBuilder(args). This builder unifies 3 core runtime pillars: dependency injection services, layered configuration sources, and structured logging. Calling "builder.Build()" finalizes configuration and instantiates the Kestrel web server. Kestrel is a lightweight, cross-platform HTTP server listening on local ports (such as port 5000 and 5001). Engineered with socket pipelines, Kestrel processes incoming network requests at exceptional speeds, feeding them directly into the application middleware pipeline.',
        bn: 'আধুনিক .NET (ক্রস-প্ল্যাটফর্ম ফ্রেমওয়ার্ক) অ্যাপ্লিকেশনগুলো Generic Host নামের একটি সুসংহত হোস্টিং মডেলের মাধ্যমে শুরু হয়। ASP.NET Core-এ অ্যাপ্লিকেশন বুটস্ট্র্যাপ শুরু হয় WebApplication.CreateBuilder(args) দিয়ে। এই বিল্ডার ৩ টি মূল স্তম্ভকে একীভূত করে: ডিপেনডেন্সি ইনজেকশন সার্ভিস, কনফিগারেশন এবং স্ট্রাকচার্ড লগিং। "builder.Build()" কল করলে সমস্ত কনফিগারেশন সমন্বিত হয়ে Kestrel ওয়েব সার্ভার চালু হয়। Kestrel হলো একটি উচ্চগতির ক্রস-প্ল্যাটফর্ম এইচটিটিপি সার্ভার যা নির্ধারিত পোর্টে (যেমন পোর্ট ৫০০০ এবং ৫০০১) কাজ করে। আধুনিক সকেট পাইপলাইনের শক্তিতে পরিচালিত Kestrel অত্যন্ত দ্রুতগতিতে ইনকামিং নেটওয়ার্ক রিকোয়েস্ট গ্রহণ করে অ্যাপ্লিকেশনের মিডলওয়্যার পাইপলাইনে পাঠায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of the ASP.NET Core runtime: From WebApplicationBuilder initialization to Kestrel socket binding, middleware pipeline, and endpoint execution.',
        bn: 'চিত্র ১: ASP.NET Core রানটাইমের আর্কিটেকচারাল কার্যপ্রবাহ: WebApplicationBuilder শুরু থেকে Kestrel সকেট বাইন্ডিং, মিডলওয়্যার পাইপলাইন এবং এন্ডপয়েন্ট এক্সিকিউশন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ASP.NET CORE HOST &amp; MIDDLEWARE PIPELINE ARCHITECTURE</text>

  <!-- Step 1: WebApplicationBuilder -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. App Builder</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">builder.Services</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">builder.Configuration</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">builder.Build()</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Bootstrap Stage</text>
  </g>

  <!-- Step 2: Kestrel Server -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Kestrel Server</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">TCP / HTTP/2 Sockets</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Ports 5000 &amp; 5001</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Libuv / Socket Transport</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Edge Web Server</text>
  </g>

  <!-- Step 3: Middleware Pipeline -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Middleware</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">UseExceptionHandler</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">UseAuthentication</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">UseAuthorization</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Bidirectional Pipeline</text>
  </g>

  <!-- Step 4: Endpoint Execution -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Endpoint</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">MapGet("/api/order")</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">TypedResults.Ok()</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Returns JSON Payload</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">HTTP 200 Success</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'middleware-pipeline-and-request-flow-heading',
      text: {
        en: 'The Bidirectional Middleware Pipeline and Request Delegation',
        bn: 'দ্বিমুখী মিডলওয়্যার পাইপলাইন এবং রিকোয়েস্ট ডেলিগেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In ASP.NET Core, incoming HTTP requests travel through a series of chained delegates called the Middleware Pipeline. Each middleware component inspects or modifies the HttpContext, optionally invokes the next delegate via "next()", and executes post-processing logic as the response travels back up the stack. Middleware order is critical to system correctness. For example, UseExceptionHandler must sit at the very front of the pipeline to catch uncaught downstream exceptions. Conversely, routing and authorization middleware must run before endpoint handlers to enforce security perimeters before business code executes.',
        bn: 'ASP.NET Core-এ ইনকামিং এইচটিটিপি রিকোয়েস্টগুলো ক্রমান্বয়ে সাজানো ডেলিগেটের মধ্য দিয়ে প্রবাহিত হয় যাকে মিডলওয়্যার পাইপলাইন বলা হয়। প্রতিটি মিডলওয়্যার উপাদান HttpContext পরীক্ষা বা রূপান্তর করতে পারে, "next()" দিয়ে পরবর্তী মিডলওয়্যারকে ডাকতে পারে এবং রেসপন্স ফেরত যাওয়ার সময় পোস্ট-প্রসেসিং কোড চালাতে পারে। মিডলওয়্যারের সঠিক ক্রম বজায় রাখা অত্যন্ত জরুরি। উদাহরণস্বরূপ, পেছনের সমস্ত এক্সেপশন নিরাপদে ধরতে UseExceptionHandler কে পাইপলাইনের একদম শুরুতে রাখতে হয়। একইভাবে ব্যবসায়িক কোড চলার আগেই নিরাপত্তা নিশ্চিত করতে রাউটিং ও অথরাইজেশন মিডলওয়্যারকে এন্ডপয়েন্টের পূর্বে রান করাতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of ASP.NET Core WebApplicationBuilder, Kestrel port configuration, and bidirectional middleware pipeline execution.',
        bn: 'ASP.NET Core WebApplicationBuilder, Kestrel পোর্ট কনফিগারেশন এবং দ্বিমুখী মিডলওয়্যার পাইপলাইনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of ASP.NET Core WebApplication & Middleware Pipeline

export interface HttpContext {
  request: { method: string; path: string };
  response: { statusCode: number; headers: Record<string, string>; body?: string };
}

export type RequestDelegate = (context: HttpContext) => Promise<void>;
export type Middleware = (context: HttpContext, next: RequestDelegate) => Promise<void>;

export class WebApplicationSimulator {
  private middlewares: Middleware[] = [];

  public use(middleware: Middleware): this {
    this.middlewares.push(middleware);
    return this;
  }

  // Simulating pipeline compilation and dispatch
  public async handleRequest(context: HttpContext): Promise<void> {
    let index = 0;

    const next: RequestDelegate = async (ctx) => {
      if (index < this.middlewares.length) {
        const currentMiddleware = this.middlewares[index++];
        await currentMiddleware(ctx, next);
      }
    };

    await next(context);
  }
}

// Execution demonstration
const app = new WebApplicationSimulator();

// 1. Exception Handler Middleware (Outer layer)
app.use(async (ctx, next) => {
  try {
    await next(ctx);
  } catch (err: any) {
    ctx.response.statusCode = 500;
    ctx.response.body = JSON.stringify({ error: 'Internal Server Error' });
  }
});

// 2. Logging & Diagnostic Timing Middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('[Kestrel Pipeline] Started processing:', ctx.request.method, ctx.request.path);
  await next(ctx);
  const duration = Date.now() - start;
  ctx.response.headers['X-Response-Time-Ms'] = String(duration);
  console.log('[Kestrel Pipeline] Completed with HTTP Status:', ctx.response.statusCode);
});

// 3. Endpoint Handler Middleware (Inner terminal)
app.use(async (ctx) => {
  if (ctx.request.path === '/api/health') {
    ctx.response.statusCode = 200;
    ctx.response.body = JSON.stringify({ status: 'UP', port: 5000 });
  } else {
    ctx.response.statusCode = 404;
    ctx.response.body = 'Not Found';
  }
});

// Dispatching simulated HTTP request
const mockContext: HttpContext = {
  request: { method: 'GET', path: '/api/health' },
  response: { statusCode: 200, headers: {} }
};

app.handleRequest(mockContext).then(() => {
  console.log('Final Response Body:', mockContext.response.body);
  console.log('Final Status Code:', mockContext.response.statusCode);
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Generic Host',
          def: {
            en: 'The core runtime encapsulating application lifetime, dependency injection, logging, and configuration across all .NET app types.',
            bn: '.NET-এর মূল হোস্ট ইঞ্জিন যা অ্যাপ্লিকেশন লাইফটাইম, কনফিগারেশন, লগিং ও ডিপেনডেন্সি ইনজেকশন পরিচালনা করে।'
          }
        },
        {
          term: 'WebApplicationBuilder',
          def: {
            en: 'Streamlined builder pattern in modern ASP.NET Core used to register services, configure settings, and build the application.',
            bn: 'আধুনিক ASP.NET Core বিল্ডার যা সার্ভিস রেজিস্ট্রেশন, কনফিগারেশন এবং হোস্ট প্রস্তুত করতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Kestrel',
          def: {
            en: 'High-performance, cross-platform HTTP web server built directly into ASP.NET Core for hosting modern microservices.',
            bn: 'উচ্চগতির ক্রস-প্ল্যাটফর্ম এইচটিটিপি সার্ভার যা মাইক্রোসার্ভিস চালানোর জন্য ASP.NET Core-এ বিল্ট-ইন থাকে।'
          }
        },
        {
          term: 'Middleware',
          def: {
            en: 'Software component assembled into an application pipeline to handle requests and responses bidirectionally.',
            bn: 'পাইপলাইনে যুক্ত সফটওয়্যার উপাদান যা ইনকামিং রিকোয়েস্ট ও আউটগোয়িং রেসপন্স দ্বিমুখীভাবে প্রসেস করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'webapplicationbuilder-three-pillars-ex1',
      kind: 'mcq',
      topic: 'webapplicationbuilder-core-pillars',
      question: {
        en: 'Which 3 core application capabilities are unified within WebApplication.CreateBuilder(args) in modern .NET?',
        bn: 'আধুনিক .NET-এ WebApplication.CreateBuilder(args) কোন ৩ টি প্রধান অ্যাপ্লিকেশন সক্ষমতাকে একীভূত করে?'
      },
      options: [
        {
          en: 'Dependency injection services (builder.Services), configuration providers (builder.Configuration), and structured logging (builder.Logging)',
          bn: 'ডিপেনডেন্সি ইনজেকশন সার্ভিস (builder.Services), কনফিগারেশন প্রোভাইডার (builder.Configuration) এবং স্ট্রাকচার্ড লগিং (builder.Logging)'
        },
        {
          en: 'HTML design, CSS styling, and JavaScript frontend frameworks',
          bn: 'এইচটিএমএল ডিজাইন, সিএসএস স্টাইল এবং জাভাস্ক্রিপ্ট ফ্রন্টএন্ড'
        },
        {
          en: 'Physical hardware memory sticks and CPU motherboard sockets',
          bn: 'ফিজিক্যাল হার্ডওয়্যার মেমোরি স্টিক এবং প্রসেসর সকেট'
        },
        {
          en: 'Database table backups and operating system kernel reboots',
          bn: 'ডেটাবেস টেবিল ব্যাকআপ এবং অপারেটিং সিস্টেম রিবুট'
        }
      ],
      answer: 0,
      hint: {
        en: 'The builder unifies Services, Configuration, and Logging.',
        bn: 'বিল্ডার মূলত সার্ভিস, কনফিগারেশন এবং লগিংকে এক জায়গায় পরিচালনা করে।'
      },
      explanation: {
        en: 'WebApplicationBuilder consolidates services, configuration, and logging into a cohesive, simplified bootstrap API.',
        bn: 'পুরনো জটিল কোড বাদ দিয়ে আধুনিক .NET এই ৩ টি স্তম্ভকে একীভূত করেছে।'
      }
    },
    {
      id: 'kestrel-server-role-architecture-ex2',
      kind: 'mcq',
      topic: 'kestrel-web-server-role',
      question: {
        en: 'What architectural role does the Kestrel web server perform within an ASP.NET Core application?',
        bn: 'একটি ASP.NET Core অ্যাপ্লিকেশনের ভেতরে Kestrel ওয়েব সার্ভার কোন স্থাপত্যিক ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It is the default high-performance cross-platform HTTP server listening on network ports, converting raw TCP sockets into HttpContext objects for the middleware pipeline',
          bn: 'এটি হলো ডিফল্ট উচ্চগতির ক্রস-প্ল্যাটফর্ম এইচটিটিপি সার্ভার যা নেটওয়ার্ক পোর্টে লিসেন করে এবং কাঁচা টিসিপি সকেটকে মিডলওয়্যার পাইপলাইনের জন্য HttpContext অবজেক্টে রূপান্তর করে'
        },
        {
          en: 'It is an in-memory SQL database engine',
          bn: 'এটি একটি ইন-মেমোরি এসকিউএল ডেটাবেস ইঞ্জিন'
        },
        {
          en: 'It compiles C# source code into Python bytecode',
          bn: 'এটি C# সোর্স কোডকে পাইথন বাইটকোডে রূপান্তর করে'
        },
        {
          en: 'Kestrel can only run on Windows IIS servers',
          bn: 'Kestrel কেবল উইন্ডোজ IIS সার্ভারে চলতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Kestrel is the internal cross-platform HTTP socket engine.',
        bn: 'Kestrel হলো ভেতরের উচ্চগতির ইঞ্জিন যা নেটওয়ার্ক ট্রাফিক গ্রহণ করে অ্যাপে পাঠায়।'
      },
      explanation: {
        en: 'Kestrel handles network connections and protocols (HTTP/1.1, HTTP/2, HTTP/3) across Windows, Linux, and macOS.',
        bn: 'উইন্ডোজ, লিনাক্স বা ম্যাকে সরাসরি নেটওয়ার্ক ট্রাফিক পরিচালনা করার জন্য Kestrel অত্যন্ত নির্ভরযোগ্য।'
      }
    },
    {
      id: 'middleware-order-exception-handler-ex3',
      kind: 'mcq',
      topic: 'middleware-pipeline-ordering-rules',
      question: {
        en: 'Why is it critical to place exception handling middleware (UseExceptionHandler) at the very beginning of the ASP.NET Core pipeline?',
        bn: 'ASP.NET Core পাইপলাইনের একদম শুরুতে এক্সেপশন হ্যান্ডলিং মিডলওয়্যার (UseExceptionHandler) রাখা কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'Because middleware executes as a bidirectional Russian-doll stack; placing exception handling first allows it to catch and handle unhandled exceptions thrown by all downstream components',
          bn: 'কারণ মিডলওয়্যার একটি দ্বিমুখী নেস্টেড স্ট্যাকের মতো চলে; শুরুতে এক্সেপশন হ্যান্ডলার রাখলে তা পেছনের সমস্ত উপাদানের যেকোনো অপ্রত্যাশিত এরর নিরাপদভাবে ধরতে পারে'
        },
        {
          en: 'Because exception handling is deleted if placed at the end',
          bn: 'কারণ শেষে রাখলে এক্সেপশন হ্যান্ডলার মুছে যায়'
        },
        {
          en: 'Because C# requires all methods to start with the letter U',
          bn: 'কারণ C#-এর সমস্ত মেথড U অক্ষর দিয়ে শুরু হতে হয়'
        },
        {
          en: 'Middleware order has zero effect on application behavior',
          bn: 'মিডলওয়্যারের ক্রম অ্যাপ্লিকেশনের আচরণে কোনো প্রভাব ফেলে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Outer middleware catches exceptions bubbling up from inner middleware.',
        bn: 'বাইরের মিডলওয়্যার ভেতরের সমস্ত মিডলওয়্যার থেকে আসা এরর ধরতে সক্ষম হয়।'
      },
      explanation: {
        en: 'Downstream middleware executes inside the scope of upstream middleware. Outer exception handlers catch all inner errors gracefully.',
        bn: 'পাইপলাইনের শুরুতে না রাখলে ভেতরের মিডলওয়্যার বা কন্ট্রোলারের এরর ধরা সম্ভব হয় না।'
      }
    },
    {
      id: 'short-circuiting-middleware-pipeline-ex4',
      kind: 'mcq',
      topic: 'middleware-short-circuiting-concept',
      question: {
        en: 'What does it mean for a middleware component to "short-circuit" the ASP.NET Core request pipeline?',
        bn: 'একটি মিডলওয়্যার উপাদান ASP.NET Core রিকোয়েস্ট পাইপলাইনকে "short-circuit" বা মাঝপথে থামিয়ে দেয় বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'It generates an immediate HTTP response (e.g. 401 Unauthorized or cached data) and returns without calling "next()", halting downstream pipeline execution',
          bn: 'এটি পরবর্তী "next()" ডেলিগেট না ডেকে সাথে সাথে একটি এইচটিটিপি রেসপন্স (যেমন ৪০১ Unauthorized বা ক্যাশ ডেটা) প্রদান করে পেছনের সমস্ত মিডলওয়্যারের কাজ বন্ধ করে দেয়'
        },
        {
          en: 'It causes an electrical power failure in the server room',
          bn: 'এটি সার্ভার রুমে বৈদ্যুতিক শর্ট-সার্কিট সৃষ্টি করে'
        },
        {
          en: 'It uninstalls the operating system network drivers',
          bn: 'এটি অপারেটিং সিস্টেমের নেটওয়ার্ক ড্রাইভার মুছে ফেলে'
        },
        {
          en: 'Short-circuiting is an error that crashes the CLR runtime',
          bn: 'শর্ট-সার্কিট হলো একটি মারাত্মক এরর যা রানটাইমকে ক্র্যাশ করায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Not calling next() short-circuits the pipeline and returns the response early.',
        bn: 'next() না ডেকে সরাসরি রেসপন্স ফেরত দেওয়াই হলো পাইপলাইন শর্ট-সার্কিট করা।'
      },
      explanation: {
        en: 'Authentication failures or cache hits intentionally short-circuit the pipeline, bypassing unnecessary controller execution.',
        bn: 'অনুমতি না থাকলে বা ক্যাশে ডেটা থাকলে পেছনের কোড না চালিয়ে দ্রুত রেসপন্স পাঠানোই এর উদ্দেশ্য।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-runtime-and-the-host',
    title: {
      en: '.NET Generic Host & Kestrel Architecture Quiz',
      bn: '.NET Generic Host এবং Kestrel আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-ihostedservice-background-workers',
        kind: 'mcq',
        topic: 'ihostedservice-backgroundservice-lifecycle',
        question: {
          en: 'What is the role of IHostedService (and the BackgroundService base class) within the .NET Generic Host?',
          bn: '.NET Generic Host-এর ভেতর IHostedService (এবং BackgroundService বেস ক্লাস) এর ভূমিকা কী?'
        },
        options: [
          {
            en: 'It enables long-running background tasks (such as queue consumers, scheduled workers, or telemetry pollers) managed alongside application startup and shutdown lifecycles',
            bn: 'এটি দীর্ঘমেয়াদী ব্যাকগ্রাউন্ড টাস্ক (যেমন কিউ প্রসেসর, শিডিউলড কাজ বা মেট্রিক্স পলার) চালানোর সুবিধা দেয় যা অ্যাপ চালু ও বন্ধের লাইফসাইকেলের সাথে সমন্বিত থাকে'
          },
          {
            en: 'It displays graphical user interface buttons on Windows desktops',
            bn: 'এটি উইন্ডোজ ডেস্কটপে গ্রাফিক্যাল বাটন প্রদর্শন করে'
          },
          {
            en: 'It compresses SQLite database files into zip archives',
            bn: 'এটি SQLite ডেটাবেস ফাইলকে জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'IHostedService was removed from .NET in version 6',
            bn: '.NET ৬ সংস্করণে IHostedService মুছে ফেলা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'IHostedService manages background worker threads.',
          bn: 'IHostedService অ্যাপের ভেতরে স্বাধীন ব্যাকগ্রাউন্ড কাজ পরিচালনার মূল মাধ্যম।'
        },
        explanation: {
          en: 'The Generic Host starts all registered IHostedService instances on application boot and calls StopAsync during graceful shutdown.',
          bn: 'অ্যাপ শুরু ও বন্ধের সংকেতের সাথে তাল মিলিয়ে ব্যাকগ্রাউন্ড প্রসেস নিরাপদে চালাতে এটি ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-graceful-shutdown-sigterm-kestrel',
        kind: 'mcq',
        topic: 'kestrel-graceful-shutdown-cancellationToken',
        question: {
          en: 'What occurs when the ASP.NET Core host receives a SIGTERM signal during container shutdown in Kubernetes?',
          bn: 'কুবারনেটিসে কনটেইনার বন্ধের সময় ASP.NET Core হোস্ট যখন SIGTERM সংকেত পায়, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'The host initiates graceful shutdown: Kestrel stops accepting new connections, active in-flight requests are allowed to complete within a timeout, and IHostApplicationLifetime signals completion',
            bn: 'হোস্ট গ্রেসফুল শাটডাউন শুরু করে: Kestrel নতুন সংযোগ নেওয়া বন্ধ করে, চলমান রিকোয়েস্টগুলোকে নির্দিষ্ট সময়ের মধ্যে শেষ হওয়ার সুযোগ দেয় এবং হোস্ট সম্পূর্ণ বন্ধ হয়'
          },
          {
            en: 'The operating system kernel crashes immediately',
            bn: 'অপারেটিং সিস্টেম কার্নেল অবিলম্বে ক্র্যাশ করে'
          },
          {
            en: 'All active HTTP connections are terminated in 1 nanosecond with exit code 99',
            bn: '১ ন্যানো-সেকেন্ডে সমস্ত এইচটিটিপি সংযোগ বিচ্ছিন্ন করে দেওয়া হয়'
          },
          {
            en: 'SIGTERM signals are ignored by .NET runtimes',
            bn: '.NET রানটাইম SIGTERM সিগন্যাল সম্পূর্ণ উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Graceful shutdown allows ongoing requests to complete safely before process exit.',
          bn: 'গ্রেসফুল শাটডাউন চলমান রিকোয়েস্টগুলোকে সফলভাবে সম্পন্ন করার সময় দেয়।'
        },
        explanation: {
          en: 'Graceful shutdown stops new incoming traffic while draining existing requests, avoiding dropped client connections during deployments.',
          bn: 'ডিপ্লয়মেন্ট চলাকালীন ক্লায়েন্টের রিকোয়েস্ট হঠাৎ কেটে যাওয়া রোধ করতে এটি অত্যন্ত গুরুত্বপূর্ণ।'
        }
      },
      {
        id: 'quiz-forwarded-headers-reverse-proxy',
        kind: 'mcq',
        topic: 'useforwardedheaders-reverse-proxy-ssl',
        question: {
          en: 'Why is "app.UseForwardedHeaders()" required when hosting an ASP.NET Core microservice behind a reverse proxy (such as NGINX or AWS ALB)?',
          bn: 'কোনো রিভার্স প্রক্সি (যেমন NGINX বা AWS ALB) এর পেছনে ASP.NET Core মাইক্রোসার্ভিস চালানোর সময় "app.UseForwardedHeaders()" কেন আবশ্যক?'
        },
        options: [
          {
            en: 'It inspects X-Forwarded-For and X-Forwarded-Proto headers, updating HttpContext with the genuine client IP address and original HTTPS request scheme',
            bn: 'এটি X-Forwarded-For এবং X-Forwarded-Proto হেডার পড়ে HttpContext-কে ক্লায়েন্টের আসল আইপি এবং মূল HTTPS স্কিমের তথ্যে আপডেট করে'
          },
          {
            en: 'It encrypts the operating system memory with a 256-bit key',
            bn: 'এটি অপারেটিং সিস্টেমের মেমোরিকে ২৫৬-বিট কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It forwards incoming HTTP requests to Microsoft Bing search engine',
            bn: 'এটি সমস্ত রিকোয়েস্ট বিং সার্চ ইঞ্জিনে পাঠিয়ে দেয়'
          },
          {
            en: 'UseForwardedHeaders only works on mobile phones',
            bn: 'UseForwardedHeaders কেবল মোবাইল ফোনে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'UseForwardedHeaders restores the real client IP and HTTPS protocol behind proxies.',
          bn: 'প্রক্সির পেছনে অ্যাপ চললে ক্লায়েন্টের আসল আইপি ও HTTPS তথ্য পুনরুদ্ধারে এটি ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Reverse proxies terminate TLS and rewrite host headers. Forwarded headers middleware restores the original client security context.',
          bn: 'নিরাপদ রিডাইরেক্ট এবং আসল ব্যবহারকারী শনাক্ত করতে রিভার্স প্রক্সির ক্ষেত্রে এই মিডলওয়্যার অপরিহার্য।'
        }
      },
      {
        id: 'quiz-http3-quic-kestrel-support',
        kind: 'mcq',
        topic: 'http3-quic-kestrel-transport',
        question: {
          en: 'What underlying transport protocol does Kestrel utilize when configured for modern HTTP/3 communication in .NET 7 and later?',
          bn: '.NET ৭ এবং পরবর্তী সংস্করণে আধুনিক HTTP/3 যোগাযোগের জন্য Kestrel কোন ট্রান্সপোর্ট প্রোটোকল ব্যবহার করে?'
        },
        options: [
          {
            en: 'QUIC over UDP, eliminating head-of-line blocking and providing faster connection establishment with integrated TLS 1.3 encryption',
            bn: 'UDP-এর ওপর চালিত QUIC, যা হেড-অব-লাইন ব্লকিং দূর করে এবং বিল্ট-ইন TLS ১.৩ এর মাধ্যমে অতি দ্রুত নিরাপদ সংযোগ স্থাপন করে'
          },
          {
            en: 'Legacy HTTP 0.9 over dial-up telephone modems',
            bn: 'পুরনো টেলিফোন মডেমের ওপর চলা এইচটিটিপি ০.৯'
          },
          {
            en: 'Raw FTP file transfer protocol only',
            bn: 'শুধুমাত্র কাঁচা FTP ফাইল ট্রান্সফার প্রোটোকল'
          },
          {
            en: 'Kestrel cannot support HTTP/3 under any circumstances',
            bn: 'Kestrel কোনো অবস্থাতেই HTTP/3 সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'HTTP/3 runs over QUIC on top of UDP.',
          bn: 'HTTP/3 মূলত ইউডিপির ওপর আধুনিক QUIC প্রোটোকলের মাধ্যমে কাজ করে।'
        },
        explanation: {
          en: 'HTTP/3 uses QUIC over UDP, avoiding TCP packet-loss blocking and accelerating mobile and high-latency cloud traffic.',
          bn: 'প্যাকেট হারানোর কারণে পুরো সংযোগ আটকে থাকা রোধ করতে HTTP/3 এর QUIC প্রযুক্তি বৈপ্লবিক পরিবর্তন এনেছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'dependency-injection-and-the-service',
    title: {
      en: 'Dependency Injection & Service Lifetimes',
      bn: 'ডিপেনডেন্সি ইনজেকশন এবং সার্ভিস লাইফটাইম'
    }
  }
};
