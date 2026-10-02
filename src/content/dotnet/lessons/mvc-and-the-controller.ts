import type { Lesson } from '../../../lib/types';

export const MvcAndTheControllerLesson: Lesson = {
  slug: 'mvc-and-the-controller',
  tech: 'dotnet',
  title: {
    en: 'ASP.NET Core MVC & Controller Architecture',
    bn: 'ASP.NET Core MVC এবং কন্ট্রোলার আর্কিটেকচার'
  },
  summary: {
    en: 'Architect enterprise web applications using ASP.NET Core MVC. Explore ControllerBase and [ApiController], master the 5-stage MVC Action Filter pipeline, validate client payloads with automatic ModelState binding, and return standardized RFC 7807 ProblemDetails.',
    bn: 'ASP.NET Core MVC দিয়ে শক্তিশালী এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন তৈরি করুন। ControllerBase এবং [ApiController] এর ভূমিকা, ৫-ধাপের অ্যাকশন ফিল্টার পাইপলাইন, স্বয়ংক্রিয় ModelState বাইন্ডিং দিয়ে ইনপুট যাচাই এবং আদর্শ RFC 7807 ProblemDetails রেসপন্স।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'controllerbase-and-apicontroller-heading',
      text: {
        en: 'ControllerBase and the [ApiController] Attribute',
        bn: 'ControllerBase এবং [ApiController] অ্যাট্রিবিউট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In large enterprise solutions, the .NET (cross-platform runtime) MVC (Model-View-Controller) architecture provides structured separation of concerns through dedicated controller classes. For REST (representational state transfer) APIs, controllers inherit from ControllerBase rather than the heavier Controller class. ControllerBase provides essential HTTP response helpers without the memory overhead of Razor view engines. Decorating an API controller with the [ApiController] attribute activates crucial enterprise conveniences. It automatically enforces model validation checks (returning HTTP 400 Bad Request on failure), infers parameter binding sources from route or JSON bodies, and transforms validation errors into standardized RFC (Request for Comments) 7807 ProblemDetails responses.',
        bn: 'বৃহৎ এন্টারপ্রাইজ প্রজেক্টে আধুনিক .NET (ক্রস-প্ল্যাটফর্ম ফ্রেমওয়ার্ক) রানটাইমের MVC (Model-View-Controller) আর্কিটেকচার কন্ট্রোলার ক্লাসের মাধ্যমে অ্যাপ্লিকেশনের বিভিন্ন স্তরকে সুন্দরভাবে বিভক্ত করে। ওয়েব রেস্ট (REST - রিপ্রেজেন্টেশনাল স্টেট ট্রান্সফার) এপিআই তৈরির সময় কন্ট্রোলারগুলো ভারী Controller ক্লাসের বদলে সরাসরি ControllerBase থেকে ইনহেরিট করে। ControllerBase কোনো অপ্রয়োজনীয় রেজোর ভিউ ইঞ্জিন লোড না করেই এইচটিটিপি রেসপন্সের যাবতীয় সুবিধা প্রদান করে। কন্ট্রোলারের ওপর [ApiController] অ্যাট্রিবিউট ব্যবহার করলে স্বয়ংক্রিয় ইনপুট যাচাই কার্যকর হয় (ভুল থাকলে সরাসরি HTTP 400 Bad Request দেয়), প্যারামিটার সোর্স নিজে থেকেই শনাক্ত হয় এবং ত্রুটিগুলো বিশ্বমানের RFC (Request for Comments) ৭৮০৭ ProblemDetails আকারে ক্লায়েন্টকে পাঠানো হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 5 distinct stages of the ASP.NET Core MVC filter pipeline wrapping controller action execution.',
        bn: 'চিত্র ১: কন্ট্রোলার অ্যাকশন এক্সিকিউশনকে ঘিরে ASP.NET Core MVC ফিল্টার পাইপলাইনের ৫ টি ভিন্ন পর্যায়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ASP.NET CORE MVC 5-STAGE ACTION FILTER PIPELINE</text>

  <!-- Step 1: Authorization Filter -->
  <g transform="translate(20, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Authorization</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">IAsyncAuthorization</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Runs 1st Always</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Claims &amp; Roles</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Security Gate</text>
  </g>

  <!-- Step 2: Resource Filter -->
  <g transform="translate(180, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Resource</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">IResourceFilter</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Pre-Model Binding</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Short-Circuit Cache</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Output Caching</text>
  </g>

  <!-- Step 3: Action Filter -->
  <g transform="translate(345, 65)">
    <rect width="150" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="150" height="30" rx="8" fill="#d97706" />
    <text x="75" y="20" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Action Filter</text>

    <rect x="10" y="45" width="130" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">IActionFilter</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">OnActionExecuting</text>

    <rect x="10" y="105" width="130" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Param Validation</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Controller Body</text>
  </g>

  <!-- Step 4: Exception Filter -->
  <g transform="translate(510, 65)">
    <rect width="150" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="150" height="30" rx="8" fill="#b91c1c" />
    <text x="75" y="20" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Exception</text>

    <rect x="10" y="45" width="130" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="68" fill="#f87171" font-size="9" font-family="monospace">IExceptionFilter</text>
    <text x="15" y="85" fill="#f87171" font-size="8" font-family="monospace">Catches Unhandled</text>

    <rect x="10" y="105" width="130" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="130" fill="#f87171" font-size="8" font-family="monospace">Custom Error DTO</text>

    <text x="15" y="215" fill="#f87171" font-size="10" font-family="sans-serif">Error Boundary</text>
  </g>

  <!-- Step 5: Result Filter -->
  <g transform="translate(675, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7e22ce" />
    <text x="72" y="20" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Result Filter</text>

    <rect x="10" y="45" width="125" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">IResultFilter</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Wraps Serialization</text>

    <rect x="10" y="105" width="125" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">Modifies Response</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Wire Formatting</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'model-binding-and-problem-details-heading',
      text: {
        en: 'Model Binding, Validation, and RFC 7807 ProblemDetails',
        bn: 'Model Binding, ভ্যালিডেশন এবং RFC 7807 ProblemDetails'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a request enters a controller action, the ASP.NET Core model binding engine automatically extracts values from HTTP headers, route data, query parameters, and JSON payloads. It maps these inputs directly into C# Data Transfer Objects (DTOs). Model validation attributes (such as [Required], [StringLength(100)], and [Range(1, 1000)]) validate the data automatically. If any field fails validation, the [ApiController] attribute immediately intercepts execution. It halts the action method and returns an RFC 7807 compliant ProblemDetails response. RFC 7807 defines a standardized JSON structure with "status", "title", "detail", and "errors", enabling frontend clients to reliably parse validation errors.',
        bn: 'যখন কোনো রিকোয়েস্ট কন্ট্রোলার অ্যাকশনে প্রবেশ করে, তখন ASP.NET Core মডেল বাইন্ডিং ইঞ্জিন নিজে থেকেই এইচটিটিপি হেডার, রুট ডেটা, কোয়েরি স্ট্রিং এবং জেসন বডি থেকে তথ্য সংগ্রহ করে। এটি সরাসরি তথ্যগুলোকে C# ডেটা ট্রান্সফার অবজেক্টে (DTO) রূপান্তর করে। মডেল ভ্যালিডেশন অ্যাট্রিবিউটগুলো (যেমন [Required], [StringLength(100)], এবং [Range(1, 1000)]) ডেটা সঠিকভাবে যাচাই করে। কোনো ফিল্ডে ভুল থাকলে [ApiController] অ্যাট্রিবিউট সাথে সাথে মেথড এক্সিকিউশন থামিয়ে দেয় এবং ক্লায়েন্টকে RFC 7807 নির্দেশিত ProblemDetails পাঠায়। RFC 7807 ফরম্যাটে "status", "title", "detail" এবং "errors" সম্বলিত একটি সুসংহত জেসন তৈরি হয়, যার ফলে ফ্রন্টএন্ড ক্লায়েন্টরা সহজে প্রতিটি ভ্যালিডেশন এরর প্রদর্শন করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of ASP.NET Core MVC controller execution: Model binding, DataAnnotations validation check, and RFC 7807 ProblemDetails response.',
        bn: 'ASP.NET Core MVC কন্ট্রোলার, মডেল বাইন্ডিং, ভ্যালিডেশন চেক এবং RFC 7807 ProblemDetails রেসপন্সের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of ASP.NET Core MVC Controller & RFC 7807 ProblemDetails

export interface CreateProductDto {
  name?: string;
  price?: number;
}

export interface ProblemDetails {
  type: string;
  title: string;
  status: number;
  detail: string;
  errors: Record<string, string[]>;
}

export class ProductsControllerSimulator {
  // Simulating [HttpPost] action method with automatic [ApiController] validation
  public createProduct(dto: CreateProductDto): { status: number; body: any } {
    const errors: Record<string, string[]> = {};

    // 1. Simulating [Required] and [StringLength(100)] validation
    if (!dto.name || dto.name.trim().length === 0) {
      errors['Name'] = ['The Name field is required.'];
    } else if (dto.name.length > 100) {
      errors['Name'] = ['The field Name must be a string with a maximum length of 100.'];
    }

    // 2. Simulating [Range(1, 1000)] validation
    if (dto.price === undefined || dto.price < 1 || dto.price > 1000) {
      errors['Price'] = ['The field Price must be between 1 and 1000.'];
    }

    // If validation fails, return RFC 7807 ProblemDetails
    if (Object.keys(errors).length > 0) {
      const problemDetails: ProblemDetails = {
        type: 'https://tools.ietf.org/html/rfc7807',
        title: 'One or more validation errors occurred.',
        status: 400,
        detail: 'Please refer to the errors property for additional details.',
        errors: errors
      };
      return { status: 400, body: problemDetails };
    }

    // Success response: HTTP 201 Created
    return {
      status: 201,
      body: { id: 101, name: dto.name, price: dto.price, createdAt: '2026-09-30' }
    };
  }
}

// Execution demonstration
const controller = new ProductsControllerSimulator();

// Test 1: Valid product payload
const res1 = controller.createProduct({ name: 'Mechanical Keyboard', price: 120 });
console.log('Valid Payload Status:', res1.status); // 201 Created
console.log('Created Product ID:', res1.body.id);

// Test 2: Invalid product payload (missing name and invalid price)
const res2 = controller.createProduct({ name: '', price: 5000 });
console.log('Invalid Payload Status:', res2.status); // 400 Bad Request
console.log('RFC 7807 Title:', res2.body.title);
console.log('Validation Error Count:', Object.keys(res2.body.errors).length); // 2`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ControllerBase',
          def: {
            en: 'Base class for REST API controllers providing HTTP helper methods without Razor view rendering overhead.',
            bn: 'রেস্ট এপিআই কন্ট্রোলারের মূল ক্লাস যা রেজোর ভিউ লোড না করেই এইচটিটিপি মেথড ব্যবহারের সুবিধা দেয়।'
          }
        },
        {
          term: '[ApiController]',
          def: {
            en: 'Opinionated class attribute that automatically triggers 400 Bad Request on invalid models and standardizes errors.',
            bn: 'কন্ট্রোলার অ্যাট্রিবিউট যা ভুল ইনপুট পেলে নিজে থেকেই ৪০০ এরর পাঠায় এবং এপিআই পরিচালনা সহজ করে।'
          }
        },
        {
          term: 'Action Filter',
          def: {
            en: 'MVC pipeline filter (IActionFilter) executing code immediately before and after a controller action method runs.',
            bn: 'কন্ট্রোলার মেথড চলার ঠিক আগে ও পরে কোড এক্সিকিউট করার ফিল্টার কম্পোনেন্ট।'
          }
        },
        {
          term: 'RFC 7807 ProblemDetails',
          def: {
            en: 'Standardized IETF specification format for returning machine-readable HTTP API error responses.',
            bn: 'আন্তর্জাতিক আইইটিএফ স্ট্যান্ডার্ড যা এইচটিটিপি এপিআই এররগুলোকে সুনির্দিষ্ট কাঠামোর জেসনে রূপান্তর করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'controllerbase-vs-controller-ex1',
      kind: 'mcq',
      topic: 'controllerbase-lightweight-rest-api',
      question: {
        en: 'Why should a high-throughput REST API controller inherit from ControllerBase instead of Controller in ASP.NET Core?',
        bn: 'ASP.NET Core-এ উচ্চগতির রেস্ট এপিআই কন্ট্রোলার কেন Controller-এর বদলে ControllerBase থেকে ইনহেরিট করা উচিত?'
      },
      options: [
        {
          en: 'ControllerBase contains only the essential HTTP API helpers and excludes the heavier Razor HTML view rendering engine and ViewData state',
          bn: 'ControllerBase কেবল প্রয়োজনীয় এইচটিটিপি এপিআই মেথড ধারণ করে এবং ভারী রেজোর এইচটিএমএল ভিউ ইঞ্জিন ও ViewData সংক্রান্ত বাড়তি মেমোরি খরচ বাদ দেয়'
        },
        {
          en: 'ControllerBase automatically installs an antivirus program',
          bn: 'ControllerBase নিজে থেকেই একটি অ্যান্টিভাইরাস ইনস্টল করে নেয়'
        },
        {
          en: 'Controller is completely banned from compiling in modern C#',
          bn: 'আধুনিক C# এ Controller ক্লাস ব্যবহার পুরোপুরি নিষিদ্ধ'
        },
        {
          en: 'ControllerBase only operates when connected to a printer',
          bn: 'ControllerBase কেবল প্রিন্টারের সাথে যুক্ত থাকলে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'ControllerBase omits HTML view rendering for pure API efficiency.',
        bn: 'রেজোর ভিউ ও এইচটিএমএল ইঞ্জিনের বাড়তি মেমোরি খরচ বাঁচাতেই ControllerBase ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Controller inherits from ControllerBase and adds Razor view support. For pure JSON APIs, ControllerBase saves memory and initialization overhead.',
        bn: 'যেহেতু এপিআই কেবল জেসন পাঠায়, এইচটিএমএল ভিউ ইঞ্জিনের কোনো প্রয়োজন নেই।'
      }
    },
    {
      id: 'apicontroller-automatic-400-ex2',
      kind: 'mcq',
      topic: 'apicontroller-automatic-bad-request-modelstate',
      question: {
        en: 'What occurs automatically in an action method decorated with [ApiController] when a client submits data that fails DataAnnotations validation?',
        bn: '[ApiController] যুক্ত কন্ট্রোলারে কোনো ক্লায়েন্ট ভুল ডেটা পাঠালে স্বয়ংক্রিয়ভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'ModelStateInvalidFilter automatically halts execution and returns an HTTP 400 Bad Request with an RFC 7807 ProblemDetails response without running the action body',
          bn: 'ModelStateInvalidFilter অ্যাকশন মেথড রান না করেই স্বয়ংক্রিয়ভাবে এক্সিকিউশন থামিয়ে দেয় এবং RFC 7807 ProblemDetails সহ HTTP 400 Bad Request ফেরত পাঠায়'
        },
        {
          en: 'The server reboots and shuts down the database',
          bn: 'সার্ভার রিবুট হয় এবং ডেটাবেস বন্ধ করে দেয়'
        },
        {
          en: 'The action method runs anyway and ignores all errors',
          bn: 'অ্যাকশন মেথড সমস্ত এরর অগ্রাহ্য করে কোড চালিয়ে যায়'
        },
        {
          en: 'The invalid fields are deleted permanently from the computer hard drive',
          bn: 'কম্পিউটারের হার্ড ড্রাইভ থেকে ভুল ফিল্ডগুলো মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '[ApiController] automates model validation and returns 400 ProblemDetails.',
        bn: '[ApiController] স্বয়ংক্রিয়ভাবে মডেল যাচাই করে ৪০০ ব্যাড রিকোয়েস্ট ফেরত দেয়।'
      },
      explanation: {
        en: '[ApiController] eliminates manual "if (!ModelState.IsValid)" checks by short-circuiting invalid requests with standardized 400 Bad Request payloads.',
        bn: 'ম্যানুয়ালি ভ্যালিডেশন চেক কোড লেখার প্রয়োজন দূর করে সিস্টেমকে সুরক্ষিত রাখে।'
      }
    },
    {
      id: 'mvc-filter-pipeline-execution-order-ex3',
      kind: 'mcq',
      topic: 'mvc-filter-pipeline-5-stages',
      question: {
        en: 'Which filter type executes FIRST in the 5-stage ASP.NET Core MVC filter pipeline?',
        bn: 'ASP.NET Core MVC-এর ৫-ধাপের ফিল্টার পাইপলাইনে সবার প্রথমে কোন ফিল্টারটি এক্সিকিউট হয়?'
      },
      options: [
        {
          en: 'Authorization Filters (IAsyncAuthorizationFilter), verifying user authentication, roles, and claim permissions before any binding occurs',
          bn: 'অথরাইজেশন ফিল্টার (IAsyncAuthorizationFilter), যা কোনো মডেল বাইন্ডিং ঘটার আগেই ব্যবহারকারীর পরিচয়, রোল ও পারমিশন পরীক্ষা করে'
        },
        {
          en: 'Result Filters',
          bn: 'রেজাল্ট ফিল্টার'
        },
        {
          en: 'Action Filters',
          bn: 'অ্যাকশন ফিল্টার'
        },
        {
          en: 'Exception Filters',
          bn: 'এক্সেপশন ফিল্টার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Authorization filters always run first to protect downstream resources.',
        bn: 'নিরাপত্তা নিশ্চিত করতে অথরাইজেশন ফিল্টার সর্বদা সবার আগে চালিত হয়।'
      },
      explanation: {
        en: 'Authorization filters execute before any other filter or model binding, short-circuiting unauthenticated or unauthorized requests immediately.',
        bn: 'অনুমতিহীন রিকোয়েস্টকে শুরুতেই আটকে দিলে অ্যাপ্লিকেশনের রিসোর্স বাঁচে।'
      }
    },
    {
      id: 'rfc-7807-standard-purpose-ex4',
      kind: 'mcq',
      topic: 'rfc-7807-problemdetails-standardization',
      question: {
        en: 'What is the primary benefit of standardizing API error responses using the RFC 7807 ProblemDetails specification in ASP.NET Core?',
        bn: 'ASP.NET Core-এ RFC 7807 ProblemDetails স্পেসিফিকেশন ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        {
          en: 'It establishes a consistent, machine-readable JSON error schema (status, title, detail, errors) across all endpoints, eliminating custom error response parsing for client consumers',
          bn: 'এটি সমস্ত এন্ডপয়েন্টে একটি সুসংহত এবং মেশিন-রিডেবল জেসন এরর স্কিমা (status, title, detail, errors) নিশ্চিত করে, ফলে ক্লায়েন্টদের কাস্টম এরর পার্সিং কোড লিখতে হয় না'
        },
        {
          en: 'It doubles the network speed of the client browser',
          bn: 'এটি ক্লায়েন্টের ব্রাউজারের ইন্টারনেট স্পিড দ্বিগুণ করে দেয়'
        },
        {
          en: 'It replaces SQL database engines with text files',
          bn: 'এটি এসকিউএল ডেটাবেস ইঞ্জিনকে সাধারণ টেক্সট ফাইল দিয়ে প্রতিস্থাপন করে'
        },
        {
          en: 'ProblemDetails is strictly required by the HTTP 1.1 protocol',
          bn: 'HTTP 1.1 প্রোটোকলে ProblemDetails ব্যবহার আইনত বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'RFC 7807 gives clients a standardized schema for HTTP error details.',
        bn: 'RFC 7807 সব এররের জন্য একটি সার্বজনীন কাঠামো প্রদান করে।'
      },
      explanation: {
        en: 'ProblemDetails provides an open standard for HTTP error responses, ensuring frontend and mobile apps handle validation and runtime errors predictably.',
        bn: 'ফ্রন্টএন্ড ও মোবাইল অ্যাপগুলো খুব সহজে যেকোনো এরর মেসেজ ব্যবহারকারীর সামনে প্রদর্শন করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-mvc-and-the-controller',
    title: {
      en: 'ASP.NET Core MVC & Controller Architecture Quiz',
      bn: 'ASP.NET Core MVC এবং কন্ট্রোলার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-action-executing-context-short-circuit',
        kind: 'mcq',
        topic: 'action-filter-context-result-short-circuit',
        question: {
          en: 'How can an Action Filter (IAsyncActionFilter) short-circuit request execution and prevent the target controller action method from executing?',
          bn: 'একটি অ্যাকশন ফিল্টার (IAsyncActionFilter) কীভাবে মূল কন্ট্রোলার অ্যাকশন মেথডকে রান না করে মাঝপথেই রিকোয়েস্ট শর্ট-সার্কিট করতে পারে?'
        },
        options: [
          {
            en: 'By setting context.Result to an IActionResult instance (such as BadRequestObjectResult) and returning without invoking "await next()"',
            bn: 'context.Result প্রপার্টিতে কোনো IActionResult (যেমন BadRequestObjectResult) সেট করে "await next()" কল না করে সরাসরি রিটার্ন করার মাধ্যমে'
          },
          {
            en: 'By turning off the server power switch',
            bn: 'সার্ভারের পাওয়ার সুইচ অফ করে দিয়ে'
          },
          {
            en: 'By throwing a NullReferenceException on line 1',
            bn: 'প্রথম লাইনে একটি নাল রেফারেন্স এরর ছুড়ে দিয়ে'
          },
          {
            en: 'Action filters cannot stop action methods from running',
            bn: 'অ্যাকশন ফিল্টার কখনো অ্যাকশন মেথড রান করা বন্ধ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Assigning context.Result short-circuits the pipeline.',
          bn: 'context.Result-এ কোনো রেজাল্ট সেট করলে এবং next() না ডাকলে পাইপলাইন সেখানেই শেষ হয়ে যায়।'
        },
        explanation: {
          en: 'Setting context.Result immediately stops execution of downstream action filters and the action method, returning the specified result directly.',
          bn: 'শর্ত পূরণ না হলে পরবর্তী অ্যাকশন না চালিয়ে সরাসরি ক্লায়েন্টকে রেসপন্স পাঠানো সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-custom-model-binder-complex-types',
        kind: 'mcq',
        topic: 'custom-model-binder-ibindermodel',
        question: {
          en: 'When should a software architect implement a custom IModelBinder in ASP.NET Core MVC?',
          bn: 'ASP.NET Core MVC-তে কখন একজন সফটওয়্যার আর্কিটেক্টের কাস্টম IModelBinder তৈরি করা উচিত?'
        },
        options: [
          {
            en: 'When incoming HTTP data arrives in a non-standard format (such as a comma-separated string, binary protobuf, or encrypted token) that the default model binder cannot parse into domain models',
            bn: 'যখন ইনকামিং এইচটিটিপি ডেটা এমন কোনো অপ্রচলিত ফরম্যাটে (যেমন কমা-যুক্ত স্ট্রিং, বাইনারি প্রোটোবাফ বা এনক্রিপ্ট করা টোকেন) আসে যা ডিফল্ট বাইন্ডার পার্স করতে পারে না'
          },
          {
            en: 'When upgrading the server operating system',
            bn: 'সার্ভারের অপারেটিং সিস্টেম আপগ্রেড করার সময়'
          },
          {
            en: 'When changing the database password',
            bn: 'ডেটাবেস পাসওয়ার্ড পরিবর্তন করার সময়'
          },
          {
            en: 'Model binders are only used in JavaScript applications',
            bn: 'মডেল বাইন্ডার কেবল জাভাস্ক্রিপ্ট অ্যাপ্লিকেশনে ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Custom model binders parse specialized or encrypted incoming data formats.',
          bn: 'বিশেষ কোনো এনকোডেড বা কাস্টম ফরম্যাটের ডেটা পার্স করতে কাস্টম মডেল বাইন্ডার লাগে।'
        },
        explanation: {
          en: 'IModelBinder allows developers to extract, decrypt, or transform raw request data into strongly typed C# domain entities before the action executes.',
          bn: 'কন্ট্রোলারে ঢোকার আগেই ডেটাকে ডোমেইন মডেলে রূপান্তর করতে এটি ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-formatfilter-content-negotiation',
        kind: 'mcq',
        topic: 'content-negotiation-formatfilter-json-xml',
        question: {
          en: 'What mechanism in ASP.NET Core MVC determines whether an action method returns JSON or XML based on the client\'s "Accept" request header?',
          bn: 'ক্লায়েন্টের "Accept" রিকোয়েস্ট হেডারের ওপর ভিত্তি করে অ্যাকশন মেথড জেসন নাকি এক্সএমএল পাঠাবে, তা ASP.NET Core MVC-র কোন মেকানিজম নির্ধারণ করে?'
        },
        options: [
          {
            en: 'Content Negotiation (ConNeg), which matches the client\'s Accept header against registered OutputFormatters (such as SystemTextJsonOutputFormatter and XmlDataContractSerializerOutputFormatter)',
            bn: 'কনটেন্ট নেগোসিয়েশন (ConNeg), যা ক্লায়েন্টের Accept হেডারকে নিবন্ধিত OutputFormatter-এর সাথে তুলনা করে কাঙ্ক্ষিত ফরম্যাটে আউটপুট দেয়'
          },
          {
            en: 'Direct TCP socket flipping',
            bn: 'সরাসরি টিসিপি সকেট ফ্লিপিং'
          },
          {
            en: 'The user\'s browser screen resolution',
            bn: 'ব্যবহারকারীর মনিটরের স্ক্রিন রেজোলিউশন'
          },
          {
            en: 'XML is no longer supported in any version of .NET',
            bn: '.NET-এর কোনো সংস্করণে XML আর সমর্থিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Content Negotiation selects output formatters based on Accept headers.',
          bn: 'কনটেন্ট নেগোসিয়েশন ক্লায়েন্টের চাহিদা অনুযায়ী জেসন বা এক্সএমএল বেছে নেয়।'
        },
        explanation: {
          en: 'ASP.NET Core uses Content Negotiation to inspect the Accept header and format the response object using the best matching OutputFormatter.',
          bn: 'একই কন্ট্রোলার থেকে ক্লায়েন্টের চাহিদা মাফিক জেসন বা এক্সএমএল দুটিই সরবরাহ করা যায়।'
        }
      },
      {
        id: 'quiz-exception-filter-vs-exception-middleware',
        kind: 'mcq',
        topic: 'exception-filters-vs-developer-exception-page-middleware',
        question: {
          en: 'What is a key difference between an MVC Exception Filter (IExceptionFilter) and Global Exception Handling Middleware (app.UseExceptionHandler)?',
          bn: 'MVC এক্সেপশন ফিল্টার (IExceptionFilter) এবং গ্লোবাল এক্সেপশন হ্যান্ডলিং মিডলওয়্যার (app.UseExceptionHandler)-এর মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'Exception filters only catch exceptions thrown inside MVC controllers and action filters with MVC context, whereas global exception middleware catches exceptions across the entire HTTP pipeline',
            bn: 'এক্সেপশন ফিল্টার কেবল MVC কন্ট্রোলার ও অ্যাকশন ফিল্টারের ভেতরের এরর ধরতে পারে, কিন্তু গ্লোবাল মিডলওয়্যার পুরো এইচটিটিপি পাইপলাইনের যেকোনো অংশের এরর ধরতে সক্ষম'
          },
          {
            en: 'Exception middleware only runs on Linux servers',
            bn: 'এক্সেপশন মিডলওয়্যার কেবল লিনাক্স সার্ভারে চলে'
          },
          {
            en: 'Exception filters delete the database connection string',
            bn: 'এক্সেপশন ফিল্টার ডেটাবেস কানেকশন স্ট্রিং মুছে ফেলে'
          },
          {
            en: 'There is zero difference between filters and middleware',
            bn: 'ফিল্টার এবং মিডলওয়্যারের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Middleware spans the entire pipeline; MVC filters are scoped to MVC actions.',
          bn: 'মিডলওয়্যার পুরো সার্ভার জুড়ে কাজ করে, আর ফিল্টার কেবল MVC কন্ট্রোলারে সীমাবদ্ধ থাকে।'
        },
        explanation: {
          en: 'Global middleware sits outermost in the pipeline, capturing errors in authentication, routing, and static files, while exception filters are MVC-specific.',
          bn: 'সারা অ্যাপ্লিকেশনের সার্বিক সুরক্ষার জন্য গ্লোবাল মিডলওয়্যার ব্যবহার করাই সবচেয়ে নির্ভরযোগ্য।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'configuration-and-the-options',
    title: {
      en: 'Configuration & Options Pattern',
      bn: 'কনফিগারেশন এবং অপশনস প্যাটার্ন'
    }
  }
};
