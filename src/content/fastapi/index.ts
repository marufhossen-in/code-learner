import type { Hub } from '../../lib/types';
import { TheTypedAppLesson } from './lessons/the-typed-app';
import { PathsAndParamsLesson } from './lessons/paths-and-params';
import { BodiesAndModelsLesson } from './lessons/bodies-and-models';
import { DependenciesOnTheLineLesson } from './lessons/dependencies-on-the-line';
import { AsyncInTheKitchenLesson } from './lessons/async-in-the-kitchen';
import { SecurityAtThePassLesson } from './lessons/security-at-the-pass';
import { DatabasesOnTheSideLesson } from './lessons/databases-on-the-side';
import { TheDocsServeLesson } from './lessons/the-docs-serve';

export const fastapiHub: Hub = {
  slug: 'fastapi',
  name: 'FastAPI',
  icon: '⚡',
  tagline: {
    en: 'Master modern asynchronous Python API engineering: Pydantic v2 schemas, Dependency Injection, async/await concurrency, OAuth2/JWT security, and automatic OpenAPI documentation.',
    bn: 'আধুনিক অ্যাসিনক্রোনাস পাইথন এপিআই ইঞ্জিনিয়ারিং শিখুন: Pydantic v2 স্কিমা, ডিপেন্ডেন্সি ইনজেকশন, async/await কনকারেন্সি, OAuth2/JWT সিকিউরিটি ও স্বয়ংক্রিয় OpenAPI ডকুমেন্টেশন।'
  },
  intro: {
    en: 'FastAPI is a modern, high-performance web framework for building APIs with Python 3.8+ based on standard Python type hints. Built on Starlette for asynchronous routing and Pydantic for data validation, FastAPI delivers speeds on par with NodeJS and Go. This comprehensive curriculum takes you from initial route operations to complex dependency graphs, async database transactions, OAuth2 token authentication, and production Docker containerization.',
    bn: 'FastAPI হলো পাইথন ৩.৮+ এর স্ট্যান্ডার্ড টাইপ হিন্টের ওপর ভিত্তি করে তৈরি একটি অত্যন্ত দ্রুতগতির আধুনিক ওয়েব ফ্রেমওয়ার্ক। অ্যাসিনক্রোনাস রাউটিংয়ের জন্য Starlette এবং ডাটা ভ্যালিডেশনের জন্য Pydantic ব্যবহারের ফলে এটি Node.js ও Go-এর সমকক্ষ পারফরম্যান্স দেয়। এই সম্পূর্ণ ট্র্যাকে আপনি সাধারণ রুট অপারেশন থেকে শুরু করে জটিল ডিপেন্ডেন্সি গ্রাফ, অ্যাসিনক্রোনাস ডাটাবেজ ট্রানজেকশন, OAuth2 অথেনটিকেশন এবং প্রোডাকশন ডকার ডেপ্লয়মেন্ট পুঙ্খানুপুঙ্খ শিখবেন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Routing & Pydantic Validation',
        bn: 'ধাপ ১ — মূল রাউটিং ও Pydantic ভ্যালিডেশন'
      },
      items: [
        {
          en: 'FastAPI Overview: ASGI architecture, minimal FastAPI instance, Uvicorn server, and automatic interactive Swagger UI (Lesson 1)',
          bn: 'FastAPI পরিচিতি: ASGI আর্কিটেকচার, মিনিমাল অ্যাপ, Uvicorn সার্ভার ও স্বয়ংক্রিয় সোয়েগার ইউআই (পাঠ ১)'
        },
        {
          en: 'Paths and Parameters: path parameters, query parameters, Path/Query metadata, and type coercion (Lesson 2)',
          bn: 'পাথ ও প্যারামিটার: পাথ প্যারামিটার, কোয়েরি প্যারামিটার, Path/Query মেটাডাটা ও টাইপ রূপান্তর (পাঠ ২)'
        },
        {
          en: 'Bodies and Pydantic Models: BaseModel schemas, Field constraints, nested models, and response_model filtering (Lesson 3)',
          bn: 'বডি ও Pydantic মডেল: BaseModel স্কিমা, Field সীমাবদ্ধতা, নেস্টেড মডেল ও response_model ফিল্টারিং (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Dependencies & Asynchronous Execution',
        bn: 'ধাপ ২ — ডিপেন্ডেন্সি ও অ্যাসিনক্রোনাস এক্সিকিউশন'
      },
      items: [
        {
          en: 'Dependency Injection: Depends(), sub-dependency trees, yield dependencies for cleanup, and testing overrides (Lesson 4)',
          bn: 'ডিপেন্ডেন্সি ইনজেকশন: Depends(), সাব-ডিপেন্ডেন্সি ট্রি, yield দিয়ে রিসোর্স পরিষ্কার ও টেস্টিং ওভাররাইড (পাঠ ৪)'
        },
        {
          en: 'Async and Concurrency: async def versus def, thread pool offloading, BackgroundTasks, and WebSocket streaming (Lesson 5)',
          bn: 'অ্যাসিঙ্ক ও কনকারেন্সি: async def বনাম def, থ্রেড পুল হ্যান্ডলিং, BackgroundTasks ও ওয়েবসকেট স্ট্রিমিং (পাঠ ৫)'
        },
        {
          en: 'Database Integration: Async SQLAlchemy ORM, asyncpg drivers, session lifecycle, and transaction management (Lesson 6)',
          bn: 'ডাটাবেজ ইন্টিগ্রেশন: Async SQLAlchemy ওআরএম, asyncpg ড্রাইভার, সেশন লাইফসাইকেল ও ট্রানজেকশন (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Security, OpenAPI & Production Deployment',
        bn: 'ধাপ ৩ — সিকিউরিটি, OpenAPI ও প্রোডাকশন ডেপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Security & Authentication: OAuth2 password flow, JWT bearer token signing, password hashing, and role scopes (Lesson 7)',
          bn: 'সিকিউরিটি ও অথেনটিকেশন: OAuth2 পাসওয়ার্ড ফ্লো, JWT টোকেন সাইনিং, পাসওয়ার্ড হ্যাশিং ও রোল স্কোপ (পাঠ ৭)'
        },
        {
          en: 'OpenAPI Documentation & Deployment: custom tags, Uvicorn ASGI workers, Gunicorn process management, and Dockerizing (Lesson 8)',
          bn: 'OpenAPI ডকুমেন্টেশন ও ডেপ্লয়মেন্ট: কাস্টম ট্যাগ, Uvicorn ASGI ওয়ার্কার, Gunicorn প্রসেস ও ডকার ডেপ্লয় (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheTypedAppLesson,
    PathsAndParamsLesson,
    BodiesAndModelsLesson,
    DependenciesOnTheLineLesson,
    AsyncInTheKitchenLesson,
    SecurityAtThePassLesson,
    DatabasesOnTheSideLesson,
    TheDocsServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Enterprise E-Commerce REST API with Async SQLAlchemy',
        bn: 'Async SQLAlchemy সহ এন্টারপ্রাইজ ই-কমার্স REST API'
      },
      brief: {
        en: 'Architect a production-ready asynchronous API featuring Pydantic v2 request/response models, JWT authentication, role-based access control, async PostgreSQL transactions, and automated background email tasks.',
        bn: 'Pydantic v2 রিকোয়েস্ট/রেসপন্স মডেল, JWT অথেনটিকেশন, রোল-ভিত্তিক এক্সেস কন্ট্রোল, অ্যাসিনক্রোনাস পোস্টগ্রেস ট্রানজেকশন এবং ব্যাকগ্রাউন্ড ইমেইল টাস্ক সহ একটি পূর্ণাঙ্গ এপিআই তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Real-Time Telemetry and Chat Service via WebSockets',
        bn: 'ওয়েবসকেট দিয়ে রিয়েল-টাইম টেলিমেট্রি ও চ্যাট সার্ভিস'
      },
      brief: {
        en: 'Build a high-throughput bi-directional communication service utilizing Starlette WebSockets, Redis pub/sub broadcast channels, dependency-based connection authentication, and live dashboard monitoring.',
        bn: 'Starlette WebSockets, Redis পাব/সাব চ্যানেল, ডিপেন্ডেন্সি ভিত্তিক সকেট অথেনটিকেশন এবং লাইভ ড্যাশবোর্ড ট্র্যাকিং সম্পন্ন একটি উচ্চ গতির দ্বি-মুখী সার্ভিস বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always Declare response_model: Set response_model on route decorators to ensure automatic data serialization and prevent sensitive fields (like password hashes) from leaking.',
      bn: 'সর্বদা response_model ব্যবহার করুন: রুট ডেকোরেটরে response_model উল্লেখ করে অটোমেটিক সিরিয়ালাইজেশন নিশ্চিত করুন যাতে সংবেদনশীল ডাটা (যেমন পাসওয়ার্ড হ্যাশ) ফাঁস না হয়।'
    },
    {
      en: 'Understand async def vs def: Use async def for non-blocking I/O operations (httpx, asyncpg); use regular def for synchronous CPU-heavy or blocking libraries (pandas, requests).',
      bn: 'async def বনাম def-এর পার্থক্য বুঝুন: নন-ব্লকিং I/O-তে async def ব্যবহার করুন; কিন্তু ব্লকিং বা ভারী সিপিইউ কাজে সাধারণ def ব্যবহার করুন যাতে থ্রেড পুলে চলে।'
    },
    {
      en: 'Use Yield Dependencies for Cleanup: Implement database session and client lifecycles using dependencies with yield to guarantee graceful resource teardown.',
      bn: 'রিসোর্স মুক্ত করতে Yield ডিপেন্ডেন্সি ব্যবহার করুন: ডাটাবেজ সেশন বা কানেকশন হ্যান্ডলিংয়ে yield ব্যবহার করুন যাতে রিকোয়েস্ট শেষে অবজেক্ট নিরাপদে বন্ধ হয়।'
    },
    {
      en: 'Organize Routes with APIRouter: Break monolithic route files into domain-driven APIRouter instances (e.g. auth, users, orders) mounted with clean tags and prefixes.',
      bn: 'APIRouter দিয়ে কোড মডিউলার করুন: বড় প্রজেক্টে APIRouter ব্যবহার করে ফিচারভিত্তিক ফাইলে (auth, users, orders) কোড সাজিয়ে প্রজেক্ট পরিচ্ছন্ন রাখুন।'
    },
    {
      en: 'Strict Pydantic Field Validation: Apply Field(gt=0, max_length=100) constraints directly inside schemas to enforce domain invariants before route logic executes.',
      bn: 'কঠোর Pydantic ভ্যালিডেশন: স্কিমার ভেতরে Field(gt=0, max_length=100) সীমাবদ্ধতা যুক্ত করে ভিউ চলার আগেই ভুল ডাটা সরাসরি আটকে দিন।'
    },
    {
      en: 'Deploy with Uvicorn Workers Behind Reverse Proxy: Run Gunicorn with uvicorn.workers.UvicornWorker behind an Nginx reverse proxy to handle SSL termination and static caching.',
      bn: 'রিভার্স প্রক্সির পেছনে Uvicorn ওয়ার্কার চালান: Nginx-এর পেছনে Gunicorn ও UvicornWorker দিয়ে সার্ভার চালিয়ে সর্বোচ্চ কনকারেন্সি ও নিরাপত্তা নিশ্চিত করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does FastAPI achieve automatic request validation and what occurs when a client transmits invalid data?',
        bn: 'FastAPI কীভাবে স্বয়ংক্রিয় রিকোয়েস্ট ভ্যালিডেশন সম্পন্ন করে এবং ভুল ডাটা পাঠালে ক্লায়েন্ট কী ফলাফল পায়?'
      },
      a: {
        en: 'FastAPI relies on Pydantic to inspect function signatures and model schemas. When a request arrives, FastAPI extracts parameters from the path, query, headers, and JSON body, casting incoming strings into native Python types according to type annotations. If validation fails (e.g., a required integer field receives a string), FastAPI intercepts the error before invoking the route handler and immediately returns an HTTP 422 Unprocessable Entity response containing a structured JSON array detailing the exact location, invalid value, and human-readable explanation for each validation failure.',
        bn: 'FastAPI টাইপ অ্যানোটেশন ও Pydantic মডেল দেখে ফাংশন সিগনেচার বিশ্লেষণ করে। রিকোয়েস্ট আসার পর এটি পাথ, কোয়েরি এবং JSON বডি থেকে ডাটা বের করে নির্ধারিত পাইথন টাইপে রূপান্তর করে। যদি কোনো ডাটা টাইপ বা সীমাবদ্ধতা ভঙ্গ করে (যেমন সংখ্যার বদলে টেক্সট পাঠানো), তবে FastAPI ভিউ ফাংশন না চালিয়েই সাথে সাথে একটি এইচটিটিপি ৪২২ Unprocessable Entity রেসপন্স ফেরত দেয়, যাতে ঠিক কোন ফিল্ডে কী ভুল হয়েছে তার বিশদ JSON তালিকা থাকে।'
      }
    },
    {
      q: {
        en: 'What is the architectural role of FastAPI\'s Dependency Injection system (Depends()), and how does it handle resource cleanup?',
        bn: 'FastAPI-এর ডিপেন্ডেন্সি ইনজেকশন সিস্টেমের (Depends()) আর্কিটেকচারাল ভূমিকা কী এবং এটি কীভাবে রিসোর্স পরিষ্কার বা টিয়ারডাউন সম্পন্ন করে?'
      },
      a: {
        en: 'FastAPI\'s dependency injection system (built around Depends()) allows view functions to declare shared logic—such as database sessions, authentication guards, pagination limits, and permissions—directly in their parameter list. FastAPI resolves the entire dependency graph hierarchically before invoking the endpoint, caching shared dependencies within the request by default. Furthermore, dependencies that use the Python "yield" statement act as contextual lifecycles: code before yield executes during request setup, while code after yield executes during response teardown (even if an unhandled exception occurred), guaranteeing reliable closing of database connections and file handles.',
        bn: 'FastAPI-এর ডিপেন্ডেন্সি ইনজেকশন সিস্টেম (Depends()) ভিউ ফাংশনের প্যারামিটারে ডাটাবেজ সেশন, অথেনটিকেশন বা পারমিশনের মতো শেয়ার্ড লজিক ঘোষণা করতে সাহায্য করে। রিকোয়েস্ট আসার পর ফ্রেমওয়ার্ক ডিপেন্ডেন্সি ট্রি সমাধান করে এবং ডিফল্টভাবে একই রিকোয়েস্টে ফলাফল ক্যাশ করে রাখে। অধিকন্তু যেসব ডিপেন্ডেন্সিতে "yield" ব্যবহৃত হয় সেগুলো কনটেক্সট ম্যানেজার হিসেবে কাজ করে: yield-এর আগের কোড রিকোয়েস্টের শুরুতে রান হয় এবং yield-এর পরের কোড কাজ শেষে বা এক্সেপশন হলেও নিশ্চিতভাবে কার্যকর হয়ে ডাটাবেজ কানেকশন নিরাপদে বন্ধ করে দেয়।'
      }
    },
    {
      q: {
        en: 'Why is defining a route as "async def" when calling a synchronous blocking function (like time.sleep or requests.get) dangerous in FastAPI?',
        bn: 'ফ্লাস্ক বা FastAPI-তে কোনো সিনক্রোনাস ব্লকিং ফাংশন (যেমন time.sleep বা requests.get) কল করার সময় রুটকে "async def" ঘোষণা করা কেন মারাত্মক বিপজ্জনক?'
      },
      a: {
        en: 'When a route is declared with "async def", FastAPI runs it directly inside the main asyncio event loop thread. If that route executes a blocking synchronous call, it halts the single thread of the event loop completely: no other concurrent requests, WebSockets, or background tasks can make progress until the blocking call finishes. In contrast, if you declare the route using standard "def", FastAPI automatically offloads execution to an external worker thread pool (via AnyIO), keeping the main event loop thread free to handle thousands of concurrent requests. For blocking operations, either use standard "def" or wrap them in asyncio.to_thread().',
        bn: 'যখন কোনো রুট "async def" হিসেবে ঘোষিত হয়, তখন FastAPI সেটিকে সরাসরি মেইন ইভেন্ট লুপ থ্রেডে চালায়। সেখানে ব্লকিং কোড কল করলে পুরো ইভেন্ট লুপ আটকে যায়, ফলে চলমান অন্য কোনো রিকোয়েস্ট বা ওয়েবসকেট প্রসেস হতে পারে না। অন্যদিকে রুটটি সাধারণ "def" দিয়ে লিখলে FastAPI নিজে থেকেই এটিকে একটি আলাদা থ্রেড পুলে (AnyIO) পাঠিয়ে দেয়, যার ফলে মেইন ইভেন্ট লুপ মুক্ত থাকে এবং অন্য হাজার হাজার রিকোয়েস্ট সহজে হ্যান্ডল করতে পারে। তাই ব্লকিং কাজ থাকলে হয় সাধারণ "def" ব্যবহার করতে হবে অথবা asyncio.to_thread() দিয়ে মুড়ে দিতে হবে।'
      }
    },
    {
      q: {
        en: 'How does FastAPI integrate OAuth2 with Password Flow and JSON Web Tokens (JWT) for stateless authentication?',
        bn: 'FastAPI কীভাবে স্টেটলেস অথেনটিকেশনের জন্য OAuth2 পাসওয়ার্ড ফ্লো এবং JSON Web Tokens (JWT) সমন্বয় করে?'
      },
      a: {
        en: 'FastAPI provides the OAuth2PasswordBearer utility class, which declares a dependency requiring an HTTP Authorization header formatted as "Bearer <token>". Clients authenticate by POSTing form credentials to a token endpoint (using OAuth2PasswordRequestForm), where the backend verifies the salted password hash and issues a cryptographically signed JWT containing claims (such as sub: user_id and exp: expiration timestamp). Protected endpoints declare a dependency that extracts the bearer token, verifies its cryptographic signature using a secret key, decodes the claims, and fetches the User object from the database, achieving completely stateless, horizontally scalable authentication.',
        bn: 'FastAPI-তে OAuth2PasswordBearer ক্লাস রয়েছে, যা হেডার থেকে "Bearer <token>" ফরম্যাটে টোকেন গ্রহণ করার ডিপেন্ডেন্সি তৈরি করে। ক্লায়েন্ট লগইন রুটে ইউজারনেম ও পাসওয়ার্ড পাঠালে ব্যাকএন্ড হ্যাশ মিলিয়ে একটি ক্রিপ্টোগ্রাফিক্যালি সাইন করা JWT টোকেন ইস্যু করে যাতে ইউজারের আইডি ও মেয়াদের তারিখ থাকে। সুরক্ষিত এন্ডপয়েন্টগুলো এই টোকেন ডিকোড করে স্বাক্ষর যাচাইয়ের মাধ্যমে ইউজার শনাক্ত করে, ফলে কোনো সার্ভার-সাইড সেশন স্টোরেজ ছাড়াই সম্পূর্ণ স্টেটলেস ও স্কেলেবল অথেনটিকেশন কার্যকর হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Throughput Machine Learning Model Serving: Production AI platforms serve PyTorch and ONNX models via asynchronous FastAPI endpoints, benefiting from Python native arrays and non-blocking streaming responses.',
      bn: 'মেশিন লার্নিং মডেল সার্ভিং: শীর্ষস্থানীয় এআই প্ল্যাটফর্মগুলো PyTorch ও ONNX মডেলগুলোকে FastAPI-এর মাধ্যমে পরিবেশন করে, কারণ এটি পাইথনের নেটিভ ডাটা ও নন-ব্লকিং স্ট্রিমিং দ্রুত হ্যান্ডল করতে পারে।'
    },
    {
      en: 'Fintech Microservice Ecosystems: Banking and payment networks use FastAPI to build modular microservices that automatically generate accurate OpenAPI specifications for client SDK generation.',
      bn: 'ফিনটেক মাইক্রোসার্ভিস আর্কিটেকচার: ব্যাংক ও পেমেন্ট সার্ভিসগুলো FastAPI ব্যবহার করে মডিউলার সার্ভিস তৈরি করে, যা স্বয়ংক্রিয়ভাবে নিখুঁত OpenAPI স্পেক তৈরি করে ক্লায়েন্ট এসডিকে বানাতে সাহায্য করে।'
    },
    {
      en: 'Real-Time WebSocket IoT Dashboards: Industrial monitoring systems leverage FastAPI and Starlette WebSockets to stream thousands of telemetry data points per second to web frontends.',
      bn: 'রিয়েল-টাইম আইওটি ড্যাশবোর্ড: শিল্প কারখানার মনিটরিং ব্যবস্থা FastAPI ওয়েবসকেটের সাহায্যে প্রতি সেকেন্ডে হাজার হাজার টেলিমেট্রি ডাটা লাইভ ব্রাউজার ড্যাশবোর্ডে পাঠায়।'
    },
    {
      en: 'High-Concurrency Public REST APIs: Scaled SaaS backends adopt FastAPI with asyncpg drivers to handle thousands of concurrent read/write queries on PostgreSQL with minimum latency.',
      bn: 'উচ্চ কনকারেন্সির পাবলিক REST API: আধুনিক ক্লাউড সফটওয়্যারগুলো asyncpg ড্রাইভার সহ FastAPI ব্যবহার করে পোস্টগ্রেস ডাটাবেজে নূন্যতম ল্যাটেন্সিতে একসাথে হাজার হাজার কোয়েরি প্রসেস করে।'
    }
  ]
};
