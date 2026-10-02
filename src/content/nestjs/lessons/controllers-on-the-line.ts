import type { Lesson } from '../../../lib/types';

export const ControllersOnTheLineLesson: Lesson = {
  slug: 'controllers-on-the-line',
  tech: 'nestjs',
  title: {
    en: 'Controllers & Routing — Decorators, Parameter Extractors & Versioning',
    bn: 'কন্ট্রোলার ও রাউটিং — ডেকোরেটর, প্যারামিটার এক্সট্রাক্টর ও ভার্সনিং'
  },
  summary: {
    en: 'Controllers serve as the public HTTP interface of a NestJS service, translating network requests into business actions. In this lesson, you will master declarative route grouping with @Controller, parameter extraction using @Param and @Body, response status manipulation, and API route versioning strategies.',
    bn: 'কন্ট্রোলার হলো নেস্ট.জেএস সার্ভিসের পাবলিক এইচটিটিপি ইন্টারফেস, যা ইনকামিং নেটওয়ার্ক রিকোয়েস্টকে ব্যবসায়িক পদক্ষেপে রূপান্তর করে। এই পাঠে আপনি @Controller দিয়ে রুট গ্রুপিং, @Param ও @Body দিয়ে প্যারামিটার সংগ্রহ, রেসপন্স স্ট্যাটাস কোড নিয়ন্ত্রণ এবং এপিআই রুট ভার্সনিং কৌশল গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'controllers-architecture-overview',
      text: {
        en: 'The Declarative Routing Controller Architecture',
        bn: 'ডিক্লারেটিভ রাউটিং কন্ট্রোলার আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design API endpoints in NestJS, controllers handle incoming client requests and return responses without requiring manual regex parsing or procedural routing tables. The @Controller decorator binds an HTTP route prefix to a TypeScript class, while method decorators map individual endpoints cleanly.',
        bn: 'যখন আপনি নেস্ট.জেএস-এ এপিআই এন্ডপয়েন্ট তৈরি করেন, তখন কন্ট্রোলার কোনো জটিল রেজেক্স বা ম্যানুয়াল টেবিল ছাড়াই ইনকামিং রিকোয়েস্ট গ্রহণ ও রেসপন্স প্রদান করে। @Controller ডেকোরেটর একটি টাইপস্ক্রিপ্ট ক্লাসের সাথে মূল রুট প্রিফিক্স যুক্ত করে এবং মেথড ডেকোরেটরগুলো প্রতিটি এন্ডপয়েন্টকে নির্দিষ্ট করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@Controller("prefix")',
          def: {
            en: 'Class decorator that marks a class as a routing controller and establishes an optional base path prefix for all endpoints.',
            bn: 'ক্লাস ডেকোরেটর যা একটি ক্লাসকে রাউটিং কন্ট্রোলার হিসেবে চিহ্নিত করে এবং সমস্ত এন্ডপয়েন্টের জন্য একটি সাধারণ পাথ প্রিফিক্স নির্ধারণ করে।'
          }
        },
        {
          term: 'Parameter Extractors',
          def: {
            en: 'Method parameter decorators (such as @Param, @Body, @Query, @Headers) that extract specific parts of the request object.',
            bn: 'প্যারামিটার ডেকোরেটর (যেমন @Param, @Body, @Query, @Headers) যা রিকোয়েস্টের নির্দিষ্ট অংশ থেকে ডাটা সরাসরি বের করে দেয়।'
          }
        },
        {
          term: '@HttpCode()',
          def: {
            en: 'Method decorator that overrides the default HTTP response status code for an endpoint (such as returning 200 for a POST or 204 for DELETE).',
            bn: 'মেথড ডেকোরেটর যা কোনো এন্ডপয়েন্টের ডিফল্ট রেসপন্স স্ট্যাটাস পরিবর্তন করে (যেমন POST-এ ২০০ অথবা DELETE-এ ২০৪ নির্ধারণ)।'
          }
        },
        {
          term: 'Route Versioning',
          def: {
            en: 'A mechanism allowing APIs to support multiple parallel versions (such as v1 and v2) via URI prefixes, headers, or query parameters.',
            bn: 'একটি কৌশল যার মাধ্যমে ইউআরআই প্রিফিক্স, হেডার বা কোয়েরি দিয়ে একই সাথে এপিআই-এর একাধিক সংস্করণ (v1 ও v2) চালানো যায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'decorators-table',
      text: {
        en: 'NestJS HTTP Parameter Extractors Matrix',
        bn: 'নেস্ট.জেএস এইচটিটিপি প্যারামিটার এক্সট্রাক্টর ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Decorator', bn: 'ডেকোরেটর' },
        { en: 'Express Underlying Target', bn: 'এক্সপ্রেসের যে ডাটা পড়ে' },
        { en: 'Usage Example', bn: 'ব্যবহারের উদাহরণ' }
      ],
      rows: [
        [
          { en: '@Param("id")', bn: '@Param("id")' },
          { en: 'req.params.id', bn: 'req.params.id' },
          { en: 'findOne(@Param("id", ParseIntPipe) id: number)', bn: 'findOne(@Param("id", ParseIntPipe) id: number)' }
        ],
        [
          { en: '@Body()', bn: '@Body()' },
          { en: 'req.body', bn: 'req.body' },
          { en: 'create(@Body() createUserDto: CreateUserDto)', bn: 'create(@Body() createUserDto: CreateUserDto)' }
        ],
        [
          { en: '@Query("search")', bn: '@Query("search")' },
          { en: 'req.query.search', bn: 'req.query.search' },
          { en: 'findAll(@Query("search") search?: string)', bn: 'findAll(@Query("search") search?: string)' }
        ],
        [
          { en: '@Headers("authorization")', bn: '@Headers("authorization")' },
          { en: 'req.headers.authorization', bn: 'req.headers.authorization' },
          { en: 'inspectToken(@Headers("authorization") token: string)', bn: 'inspectToken(@Headers("authorization") token: string)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'controller-routing-code',
      text: {
        en: 'Production Controller Implementation with Versioning',
        bn: 'ভার্সনিং সহ প্রোডাকশন কন্ট্রোলার বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of a NestJS Controller routing layer
class ProductsController {
  constructor() {
    this.prefix = '/api/v1/products';
    this.database = [
      { id: 101, name: 'TypeScript Architecture Book', price: 45 },
      { id: 102, name: 'NestJS Enterprise Blueprint', price: 60 }
    ];
  }

  // @Get(':id')
  findProductById(id) {
    const numericId = Number(id);
    const item = this.database.find(p => p.id === numericId);
    return item ? { statusCode: 200, data: item } : { statusCode: 404, data: null };
  }

  // @Post() with @HttpCode(201)
  createProduct(body) {
    const newProduct = { id: 103, name: body.name, price: body.price };
    this.database.push(newProduct);
    return { statusCode: 201, product: newProduct };
  }
}

// Verification simulation
const controller = new ProductsController();
const fetchResult = controller.findProductById(101);
console.log('Product query status code:', fetchResult.statusCode);
// -> Product query status code: 200
console.log('Fetched product ID:', fetchResult.data.id);
// -> Fetched product ID: 101`,
      caption: {
        en: 'Controller resolving product 101 with HTTP status 200',
        bn: 'কন্ট্রোলার এইচটিটিপি ২০০ স্ট্যাটাসে ১০১ নম্বর প্রোডাক্ট ফেরত দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'standard-vs-passthrough',
      text: {
        en: 'Standard Response Mode Versus @Res Passthrough',
        bn: 'স্ট্যান্ডার্ড রেসপন্স মোড বনাম @Res পাস-থ্রু'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In NestJS, route handlers should return plain JavaScript objects, strings, or Promises. The framework automatically serializes objects into JSON and sets appropriate headers. If you inject the native library response with @Res(), Nest enters passthrough mode, which disables response interceptors and requires manual res.status().json() calls.',
        bn: 'নেস্ট.জেএস-এ রুট হ্যান্ডলার থেকে সরাসরি সাধারণ জাভাস্ক্রিপ্ট অবজেক্ট বা প্রমিজ রিটার্ন করা উচিত। ফ্রেমওয়ার্ক স্বয়ংক্রিয়ভাবে একে জেএসনে রূপান্তর করে হেডার বসিয়ে দেয়। কিন্তু @Res() দিয়ে নেটিভ রেসপন্স অবজেক্ট ইনজেক্ট করলে নেস্ট পাস-থ্রু মোডে চলে যায়, ফলে রেসপন্স ইন্টারসেপ্টরগুলো কাজ করে না এবং ম্যানুয়ালি res.json() কল করতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Return Pure Objects: Prefer returning plain objects or promises rather than writing res.json() manually.',
          bn: '১. অবজেক্ট রিটার্ন: ম্যানুয়ালি res.json() না লিখে সরাসরি সাধারণ অবজেক্ট বা প্রমিজ রিটার্ন করুন।'
        },
        {
          en: '2. Parse Types with Pipes: Wrap @Param("id", ParseIntPipe) to guarantee strings convert to numbers before hitting controller code.',
          bn: '২. পাইপ দিয়ে টাইপ পার্স: @Param("id", ParseIntPipe) ব্যবহার করুন যাতে হ্যান্ডলারে আসার আগেই আইডি সংখ্যায় রূপান্তরিত হয়।'
        },
        {
          en: '3. Override Status Codes: Use @HttpCode(204) on DELETE operations to follow RESTful HTTP specifications.',
          bn: '৩. স্ট্যাটাস পরিবর্তন: রেস্ট মানদণ্ড বজায় রাখতে DELETE অপারেশনে @HttpCode(204) ব্যবহার করুন।'
        },
        {
          en: '4. Keep Controllers Thin: Never execute SQL queries or complex business logic directly inside controller methods.',
          bn: '৪. হালকা কন্ট্রোলার: কন্ট্রোলারের ভেতরে কখনোই সরাসরি এসকিউএল কুয়েরি বা জটিল ব্যবসায়িক হিসাব লিখবেন না।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-ctrl-ex1',
      kind: 'mcq',
      topic: 'controller prefix route matching',
      question: {
        en: 'If a class is decorated with @Controller("users") and a method is decorated with @Get(":id"), what is the full resolved route path?',
        bn: 'যদি একটি ক্লাসে @Controller("users") এবং তার মেথডে @Get(":id") থাকে, তবে পূর্ণ রাউটিং পাথ কোনটি হবে?'
      },
      options: [
        {
          en: '/users/:id',
          bn: '/users/:id'
        },
        {
          en: '/users/id',
          bn: '/users/id'
        },
        {
          en: '/:id/users',
          bn: '/:id/users'
        },
        {
          en: '/api/v1/unknown',
          bn: '/api/v1/unknown'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nest concatenates the class prefix with the method path.',
        bn: 'নেস্ট ক্লাসের প্রিফিক্সের সাথে মেথডের পাথ জোড়া লাগায়।'
      },
      explanation: {
        en: 'Nest concatenates the controller prefix ("/users") with the route path (":id") to produce the final endpoint "/users/:id".',
        bn: 'নেস্ট কন্ট্রোলারের প্রিফিক্স ("/users") এবং মেথডের পাথ (":id") মিলিয়ে চূড়ান্ত পাথ "/users/:id" তৈরি করে।'
      }
    },
    {
      id: 'nest-ctrl-ex2',
      kind: 'mcq',
      topic: 'standard response mode vs res passthrough',
      question: {
        en: 'What architectural limitation occurs when a developer injects @Res() into a NestJS route handler method without { passthrough: true }?',
        bn: '{ passthrough: true } ছাড়া কোনো হ্যান্ডলারে @Res() ইনজেক্ট করলে কোন আর্কিটেকচারাল সীমাবদ্ধতা দেখা দেয়?'
      },
      options: [
        {
          en: 'Nest disables its standard response handling pipeline, meaning response interceptors stop working and the developer must manually call res.json()',
          bn: 'নেস্ট তার স্ট্যান্ডার্ড রেসপন্স পাইপলাইন বন্ধ করে দেয়, ফলে রেসপন্স ইন্টারসেপ্টর কাজ করে না এবং ম্যানুয়ালি res.json() কল করতে হয়'
        },
        {
          en: 'The operating system restarts the Node.js process immediately',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে নোড.জেএস প্রসেস রিস্টার্ট করে দেয়'
        },
        {
          en: 'The database connection pool drops all active network connections',
          bn: 'ডাটাবেজের সমস্ত সক্রিয় নেটওয়ার্ক সংযোগ বিচ্ছিন্ন হয়ে যায়'
        },
        {
          en: 'The server converts all JSON responses into XML files',
          bn: 'সার্ভার সমস্ত জেএসন রেসপন্সকে এক্সএমএল ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Injecting the raw library response places full responsibility on manual response emission.',
        bn: 'নেটিভ রেসপন্স অবজেক্ট ইনজেক্ট করলে রেসপন্স পাঠানোর পুরো দায়িত্ব ম্যানুয়াল হয়ে যায়।'
      },
      explanation: {
        en: 'Injecting @Res() switches Nest into manual mode. If you need native response access while preserving Nest interceptors, use @Res({ passthrough: true }).',
        bn: '@Res() ব্যবহার করলে নেস্ট ম্যানুয়াল মোডে চলে যায়। তবে ইন্টারসেপ্টর চালু রেখেও নেটিভ রেসপন্স পেতে চাইলে @Res({ passthrough: true }) ব্যবহার করা যায়।'
      }
    },
    {
      id: 'nest-ctrl-ex3',
      kind: 'mcq',
      topic: 'httpcode decorator usage',
      question: {
        en: 'By default, what HTTP status code does a NestJS @Post() route return, and how can it be changed to HTTP 200 OK?',
        bn: 'ডিফল্টভাবে নেস্ট.জেএস-এর @Post() রুট কোন স্ট্যাটাস ফেরত দেয়, এবং কীভাবে এটিকে ২০০ ওকে-তে পরিবর্তন করা যায়?'
      },
      options: [
        {
          en: 'POST defaults to 201 Created; it can be changed to 200 using the @HttpCode(200) decorator on the method',
          bn: 'POST ডিফল্টভাবে ২০১ ক্রিয়েটেড দেয়; মেথডের ওপর @HttpCode(200) ডেকোরেটর দিয়ে তা ২০০ করা যায়'
        },
        {
          en: 'POST defaults to 404 Not Found; it cannot be changed',
          bn: 'POST ডিফল্টভাবে ৪০৪ দেয়; এটি পরিবর্তন করা যায় না'
        },
        {
          en: 'POST defaults to 500 Internal Server Error; change it in package.json',
          bn: 'POST ডিফল্টভাবে ৫০০ দেয়; এটি package.json ফাইলে বদলাতে হয়'
        },
        {
          en: 'POST defaults to 204 No Content; change it with an environment variable',
          bn: 'POST ডিফল্টভাবে ২০৪ দেয়; এটি এনভায়রনমেন্ট ভেরিয়েবল দিয়ে বদলাতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'REST semantics state POST creates resources (201) by default.',
        bn: 'রেস্ট মানদণ্ড অনুযায়ী POST সাধারণত নতুন রিসোর্স তৈরি করে (২০১)।'
      },
      explanation: {
        en: 'In NestJS, all endpoints return 200 by default except POST, which returns 201 Created. The @HttpCode() decorator allows overriding this default.',
        bn: 'নেস্ট.জেএস-এ কেবল POST রুট ২০১ ক্রিয়েটেড দেয় আর বাকি সব ডিফল্টভাবে ২০০ দেয়। @HttpCode() ডেকোরেটর দিয়ে এই ডিফল্ট মান বদলানো যায়।'
      }
    },
    {
      id: 'nest-ctrl-ex4',
      kind: 'mcq',
      topic: 'parameter extractors query decorator',
      question: {
        en: 'Which decorator extracts query parameters like "?limit=20&page=1" inside a NestJS controller method?',
        bn: 'নেস্ট.জেএস কন্ট্রোলারে "?limit=20&page=1"-এর মতো কোয়েরি প্যারামিটার গ্রহণ করতে কোন ডেকোরেটর ব্যবহৃত হয়?'
      },
      options: [
        {
          en: '@Query()',
          bn: '@Query()'
        },
        {
          en: '@UrlParam()',
          bn: '@UrlParam()'
        },
        {
          en: '@Search()',
          bn: '@Search()'
        },
        {
          en: '@ExtractString()',
          bn: '@ExtractString()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The name directly mirrors the request query object.',
        bn: 'নামটি সরাসরি রিকোয়েস্টের query অবজেক্টের অনুরূপ।'
      },
      explanation: {
        en: '@Query() extracts the entire query object from req.query, or a specific property when given an argument like @Query("page").',
        bn: '@Query() পুরো কোয়েরি অবজেক্ট বের করে নেয়, অথবা @Query("page") লিখলে নির্দিষ্ট প্যারামিটারটি গ্রহণ করে।'
      }
    }
  ],
  quiz: {
    id: 'controllers-on-the-line-quiz',
    title: {
      en: 'NestJS Controllers & Routing Quiz',
      bn: 'নেস্ট.জেএস কন্ট্রোলার ও রাউটিং কুইজ'
    },
    questions: [
      {
        id: 'q-route-versioning-uri-type',
        kind: 'mcq',
        topic: 'uri route versioning in nestjs',
        question: {
          en: 'How does NestJS implement URI-based API versioning when app.enableVersioning({ type: VersioningType.URI }) is activated?',
          bn: 'app.enableVersioning({ type: VersioningType.URI }) চালু করলে নেস্ট.জেএস কীভাবে ইউআরআই-ভিত্তিক এপিআই সংস্করণ প্রয়োগ করে?'
        },
        options: [
          {
            en: 'It automatically prefixes matched controller routes with version segments (such as /v1/products or /v2/products) based on @Version("1")',
            bn: '@Version("1")-এর ওপর ভিত্তি করে এটি স্বয়ংক্রিয়ভাবে রুটের শুরুতে ভার্সন অংশ (যেমন /v1/products বা /v2/products) যুক্ত করে'
          },
          {
            en: 'It creates a duplicate copy of the PostgreSQL database for each version',
            bn: 'প্রতিটি ভার্সনের জন্য এটি পোস্টগ্রেস ডাটাবেজের সম্পূর্ণ কপি তৈরি করে'
          },
          {
            en: 'It forces client browsers to update their operating system software',
            bn: 'এটি ক্লায়েন্ট ব্রাউজারকে তাদের অপারেটিং সিস্টেম আপডেট করতে বাধ্য করে'
          },
          {
            en: 'It deletes all legacy API code from the git repository',
            bn: 'এটি গিট রিপোজিটরি থেকে পুরোনো এপিআই কোড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The version number is inserted directly into the URL path prefix.',
          bn: 'ভার্সন নম্বরটি সরাসরি ইউআরএল পাথের প্রিফিক্সে যুক্ত হয়।'
        },
        explanation: {
          en: 'When URI versioning is enabled, Nest injects the version string ("v1", "v2") directly into the route hierarchy without manual path concatenation.',
          bn: 'URI ভার্সনিং সক্রিয় থাকলে নেস্ট নিজে থেকেই রুটের শুরুতে "v1" বা "v2" বসিয়ে দেয়, ফলে ম্যানুয়ালি পাথে ভার্সন লিখতে হয় না।'
        }
      },
      {
        id: 'q-parseintpipe-on-param',
        kind: 'mcq',
        topic: 'parseintpipe validation and transformation',
        question: {
          en: 'What occurs if a client sends a request to /users/abc when the route is defined as findOne(@Param("id", ParseIntPipe) id: number)?',
          bn: 'যদি কোনো রুটে findOne(@Param("id", ParseIntPipe) id: number) থাকে এবং ক্লায়েন্ট /users/abc-তে রিকোয়েস্ট পাঠায় তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'ParseIntPipe detects that "abc" is not a numeric string and immediately returns a 400 Bad Request error before the controller method executes',
            bn: 'ParseIntPipe শনাক্ত করে যে "abc" কোনো সংখ্যা নয় এবং কন্ট্রোলার মেথড চলার আগেই সাথে সাথে ৪০০ ব্যাড রিকোয়েস্ট ফেরত দেয়'
          },
          {
            en: 'The controller method executes with id equal to NaN, causing a database crash',
            bn: 'কন্ট্রোলারটি id = NaN নিয়ে চলবে এবং ডাটাবেজে ক্র্যাশ ঘটাবে'
          },
          {
            en: 'NestJS converts the letters "abc" into zero',
            bn: 'নেস্ট.জেএস "abc" অক্ষরগুলোকে শূন্যে (০) রূপান্তর করে'
          },
          {
            en: 'The HTTP server drops the TCP connection without any response',
            bn: 'এইচটিটিপি সার্ভার কোনো রেসপন্স না দিয়েই সংযোগ কেটে দেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'NestJS built-in pipes transform inputs and throw validation exceptions on failure.',
          bn: 'নেস্ট.জেএস বিল্ট-ইন পাইপ ইনপুট রূপান্তর করে এবং ব্যর্থ হলে সাথে সাথে এক্সেপশন ছুড়ে দেয়।'
        },
        explanation: {
          en: 'ParseIntPipe validates whether the string parameter can be coerced to an integer. If parsing fails, it aborts execution and sends a 400 Bad Request.',
          bn: 'ParseIntPipe ইনপুটটি পূর্ণসংখ্যা কিনা তা পরীক্ষা করে। সংখ্যায় রূপান্তর ব্যর্থ হলে এটি কন্ট্রোলারে না গিয়ে সরাসরি ৪০০ এরর রেসপন্স পাঠায়।'
        }
      },
      {
        id: 'q-controller-thin-principle',
        kind: 'mcq',
        topic: 'thin controller separation of concerns',
        question: {
          en: 'Why is delegating business operations to an injected Service considered an essential architectural rule for NestJS controllers?',
          bn: 'নেস্ট.জেএস কন্ট্রোলারে সরাসরি কাজ না করে ইনজেক্টেড সার্ভিসের ওপর ব্যবসায়িক অপারেশন অর্পণ করা কেন একটি মূল স্থাপত্য নিয়ম?'
        },
        options: [
          {
            en: 'It keeps controllers focused strictly on HTTP protocol concerns (headers, routing, status codes) while enabling services to be reused and unit-tested independently',
            bn: 'এটি কন্ট্রোলারকে কেবল এইচটিটিপি দায়িত্বে (হেডার, রাউটিং, স্ট্যাটাস) সীমাবদ্ধ রাখে এবং সার্ভিসগুলোকে স্বাধীনভাবে পুনরায় ব্যবহার ও টেস্ট করার সুযোগ দেয়'
          },
          {
            en: 'TypeScript forbids writing if/else conditional statements inside controllers',
            bn: 'টাইপস্ক্রিপ্ট কন্ট্রোলারের ভেতরে if/else শর্ত লিখতে কঠোরভাবে নিষেধ করে'
          },
          {
            en: 'Controllers run on the browser client, whereas services run on the server',
            bn: 'কন্ট্রোলার ব্রাউজারে চলে আর সার্ভিস সার্ভারে চলে'
          },
          {
            en: 'It reduces the total number of files in the project workspace',
            bn: 'এটি প্রজেক্টে মোট ফাইলের সংখ্যা কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Separation of concerns isolates transport protocols from core domain logic.',
          bn: 'কাজের বিভাজন নেটওয়ার্ক প্রোটোকলকে ব্যবসায়িক লজিক থেকে সম্পূর্ণ পৃথক রাখে।'
        },
        explanation: {
          en: 'Controllers are HTTP transport boundaries. Business rules belong in Services so they can be tested without mock HTTP requests and reused across microservices.',
          bn: 'কন্ট্রোলার হলো এইচটিটিপির সীমানা। ব্যবসায়িক নিয়ম সার্ভিসে রাখা উচিত যাতে কোনো এইচটিটিপি মক ছাড়াই সহজে টেস্ট এবং মাইক্রোসার্ভিসে শেয়ার করা যায়।'
        }
      },
      {
        id: 'q-headers-custom-decorator',
        kind: 'mcq',
        topic: 'header manipulation decorator',
        question: {
          en: 'Which method decorator adds custom static HTTP response headers to a NestJS controller endpoint?',
          bn: 'নেস্ট.জেএস কন্ট্রোলার এন্ডপয়েন্টে কাস্টম স্ট্যাটিক এইচটিটিপি রেসপন্স হেডার যুক্ত করতে কোন মেথড ডেকোরেটর ব্যবহৃত হয়?'
        },
        options: [
          {
            en: '@Header("Cache-Control", "no-store")',
            bn: '@Header("Cache-Control", "no-store")'
          },
          {
            en: '@SetResponseCookie("session")',
            bn: '@SetResponseCookie("session")'
          },
          {
            en: '@SendHeaderTag("header")',
            bn: '@SendHeaderTag("header")'
          },
          {
            en: '@EmitMetadata("cache")',
            bn: '@EmitMetadata("cache")'
          }
        ],
        answer: 0,
        hint: {
          en: 'The decorator is named @Header() taking key and value strings.',
          bn: 'ডেকোরেটরটির নাম @Header() যা কি এবং ভ্যালু স্ট্রিং গ্রহণ করে।'
        },
        explanation: {
          en: 'The @Header() decorator specifies a static HTTP response header key-value pair to be attached to the outgoing response automatically.',
          bn: '@Header() ডেকোরেটর রেসপন্সের সাথে স্বয়ংক্রিয়ভাবে নির্ধারিত এইচটিটিপি হেডারটি যুক্ত করে পাঠায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'providers-in-the-pantry',
    title: {
      en: 'Providers & Dependency Injection — Custom Tokens, Factories & Scopes',
      bn: 'প্রোভাইডার ও ডিপেন্ডেন্সি ইনজেকশন — কাস্টম টোকেন, ফ্যাক্টরি ও স্কোপ'
    }
  }
};
