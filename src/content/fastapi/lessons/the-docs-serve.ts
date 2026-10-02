import type { Lesson } from '../../../lib/types';

export const TheDocsServeLesson: Lesson = {
  slug: 'the-docs-serve',
  tech: 'fastapi',
  title: {
    en: 'OpenAPI Documentation & Production — Uvicorn, Gunicorn & Docker',
    bn: 'OpenAPI ডকুমেন্টেশন ও প্রোডাকশন — Uvicorn, Gunicorn ও ডকার'
  },
  summary: {
    en: 'Taking FastAPI applications to production requires tailored OpenAPI documentation, rigorous integration testing with TestClient, and resilient multi-worker server deployments. In this lesson, you will master OpenAPI customization, Swagger UI tagging, testing with pytest and TestClient, Gunicorn UvicornWorker clustering, and hardened Docker containerization.',
    bn: 'FastAPI অ্যাপ্লিকেশন প্রোডাকশনে সফলভাবে ডেপ্লয় করতে মানসম্মত OpenAPI ডকুমেন্টেশন, TestClient দিয়ে নির্ভুল ইন্টিগ্রেশন টেস্টিং এবং একাধিক ওয়ার্কার চালিত স্থিতিশীল সার্ভার আর্কিটেকচার প্রয়োজন। এই পাঠে আপনি OpenAPI কনফিগারেশন, Swagger UI ট্যাগিং, TestClient দিয়ে টেস্টিং, Gunicorn UvicornWorker ক্লাস্টারিং এবং ডকার কন্টেইনারাইজেশন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'fastapi-production-architecture',
      text: {
        en: 'The Production Architecture: Reverse Proxy, Process Manager & Workers',
        bn: 'প্রোডাকশন আর্কিটেকচার: রিভার্স প্রক্সি, প্রসেস ম্যানেজার ও ওয়ার্কার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'A production FastAPI deployment typically pairs Nginx as a reverse proxy with Gunicorn acting as a process manager orchestrating multiple Uvicorn worker processes. In this three-tier topology, the proxy terminates TLS certificates and caches static assets, while Gunicorn monitors worker health and initiates zero-downtime rolling reloads.',
        bn: 'প্রোডাকশনে FastAPI চালানোর জন্য সাধারণত Nginx-কে রিভার্স প্রক্সি হিসেবে রাখা হয় এবং Gunicorn প্রসেস ম্যানেজার হিসেবে একাধিক Uvicorn ওয়ার্কার পরিচালনা করে। এই ত্রি-স্তরীয় কাঠামোতে প্রক্সি এসএসএল হ্যান্ডল করে ও স্ট্যাটিক ফাইল পাঠায়, আর Gunicorn ওয়ার্কারদের স্বাস্থ্য পর্যবেক্ষণ করে এবং ডাউনটাইম ছাড়া রিলোড দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Gunicorn UvicornWorker',
          def: {
            en: 'A Gunicorn worker class that runs Uvicorn inside each worker process, combining Gunicorn process management with Uvicorn async I/O throughput.',
            bn: 'একটি Gunicorn ওয়ার্কার ক্লাস যা প্রতিটি প্রসেসের ভেতর Uvicorn চালায় এবং প্রসেস ম্যানেজমেন্টের সাথে Uvicorn-এর উচ্চগতির সমন্বয় ঘটায়।'
          }
        },
        {
          term: 'OpenAPI Metadata Customization',
          def: {
            en: 'Configuring API titles, descriptions, semantic versions, route grouping tags, and docs endpoints directly on the FastAPI application object.',
            bn: 'FastAPI অবজেক্টে সরাসরি টাইটেল, বিবরণ, ভার্সন এবং রুট গ্রুপিং ট্যাগ কনফিগার করে ডকুমেন্টেশন সাজানোর ব্যবস্থা।'
          }
        },
        {
          term: 'TestClient (httpx)',
          def: {
            en: 'A Starlette test harness powered by httpx that simulates HTTP requests against the FastAPI ASGI app without launching a live network server.',
            bn: 'httpx চালিত একটি টেস্টিং টুল যা কোনো লাইভ নেটওয়ার্ক সার্ভার না চালিয়েই মেমরির ভেতর দ্রুত এইচটিটিপি রিকোয়েস্ট পাঠিয়ে পরীক্ষা সম্পন্ন করে।'
          }
        },
        {
          term: 'Containerized Deployment',
          def: {
            en: 'Packaging FastAPI apps in lightweight Docker containers, running 1 Uvicorn worker process per container when scaled by Kubernetes or ECS.',
            bn: 'ডকার কন্টেইনারে অ্যাপ প্যাকেজ করার কৌশল, যেখানে কুবারনেটিস বা ক্লাউড অটো-স্কেলিং চালিত হলে কন্টেইনার প্রতি ১টি Uvicorn প্রসেস চালানো হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'production-deployment-matrix',
      text: {
        en: 'Production Server Deployment Strategies Matrix',
        bn: 'প্রোডাকশন সার্ভার ডেপ্লয়মেন্ট কৌশল ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Environment / Platform', bn: 'পরিবেশ / প্ল্যাটফর্ম' },
        { en: 'Process Topology', bn: 'প্রসেস কাঠামো' },
        { en: 'Startup Command Example', bn: 'চালানোর কমান্ড' }
      ],
      rows: [
        [
          { en: 'Bare-Metal VM / Dedicated Server', bn: 'ভার্চুয়াল মেশিন / ডেডিকেটেড সার্ভার' },
          { en: 'Gunicorn managing 2-4 Uvicorn workers per CPU core behind Nginx', bn: 'প্রতি সিপিইউ কোরে ২-৪টি Uvicorn ওয়ার্কার পরিচালনা করে Gunicorn' },
          { en: 'gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000 main:app', bn: 'gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000 main:app' }
        ],
        [
          { en: 'Kubernetes / AWS ECS / Cloud Run', bn: 'কুবারনেটিস / ক্লাউড রান / ইসিএস' },
          { en: '1 single Uvicorn process per container pod, scaled horizontally by orchestrator', bn: 'কন্টেইনার প্রতি ১টি Uvicorn প্রসেস, যা ক্লাউড সিস্টেম নিজে স্কেল করে' },
          { en: 'uvicorn main:app --host 0.0.0.0 --port 8000 --workers 1', bn: 'uvicorn main:app --host 0.0.0.0 --port 8000 --workers 1' }
        ],
        [
          { en: 'Local Development & Debugging', bn: 'লোকাল ডেভেলপমেন্ট' },
          { en: '1 Uvicorn process with automatic file watcher hot-reloading', bn: 'ফাইল পরিবর্তনের সাথে সাথে স্বয়ংক্রিয় রিলোড সহ ১টি প্রসেস' },
          { en: 'uvicorn main:app --reload --port 8000', bn: 'uvicorn main:app --reload --port 8000' }
        ],
        [
          { en: 'Automated CI/CD Testing', bn: 'সিআই/সিডি অটোমেটেড টেস্ট' },
          { en: 'In-memory TestClient executing assertions via pytest', bn: 'pytest দিয়ে মেমরিতে টেস্ট ক্লায়েন্ট চালানো' },
          { en: 'pytest tests/ -v --cov=app', bn: 'pytest tests/ -v --cov=app' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'testclient-and-docs-code',
      text: {
        en: 'Working FastAPI App Config and TestClient Simulation',
        bn: 'কার্যকরী FastAPI অ্যাপ কনফিগ ও TestClient সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of FastAPI OpenAPI Metadata and TestClient Assertions
class MockFastAPIApp {
  constructor(config) {
    this.title = config.title;
    this.version = config.version;
    this.docsUrl = config.docs_url ?? '/docs';
    this.routes = new Map();
  }

  get(path, handler) {
    this.routes.set('GET ' + path, handler);
  }
}

class MockTestClient {
  constructor(app) {
    this.app = app;
  }

  get(path) {
    const handler = this.app.routes.get('GET ' + path);
    if (!handler) {
      return { status_code: 404, json: () => ({ detail: 'Not Found' }) };
    }
    return { status_code: 200, json: () => handler() };
  }
}

// 1. Initialize app with professional OpenAPI metadata
const app = new MockFastAPIApp({
  title: 'Order Processing API',
  version: '2.4.0',
  docs_url: '/docs'
});

// 2. Register health check and item retrieval endpoints
app.get('/health', () => ({ status: 'healthy', worker_id: 1 }));
app.get('/items/42', () => ({ item_id: 42, name: 'Keychron Keyboard', price: 99 }));

// 3. Test endpoints using TestClient assertions
const client = new MockTestClient(app);

const healthRes = client.get('/health');
const itemRes = client.get('/items/42');
const missingRes = client.get('/missing');

console.log('Health check status code:', healthRes.status_code);
// -> Health check status code: 200
console.log('Retrieved item identifier:', itemRes.json().item_id);
// -> Retrieved item identifier: 42
console.log('Missing endpoint status code:', missingRes.status_code);
// -> Missing endpoint status code: 404`,
      caption: {
        en: 'TestClient returning status 200 for health, item ID 42, and status 404 for missing route',
        bn: 'TestClient স্বাস্থ্য পরীক্ষায় ২০০, আইটেম ৪২ এবং অনুপস্থিত রুটে ৪০৪ কোড রিটার্ন করছে'
      }
    },
    {
      type: 'heading',
      id: 'production-hardening-rules',
      text: {
        en: 'Production Hardening and Docker Best Practices',
        bn: 'প্রোডাকশন হার্ডেনিং ও ডকার সেরা অনুশীলন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When packaging your FastAPI application into a Docker container, keep image sizes small with multi-stage builds and avoid running containers as the root user. Disable the interactive Swagger UI and ReDoc in public-facing production environments if your API is private, preventing unauthorized actors from discovering internal endpoint signatures.',
        bn: 'ডকার কন্টেইনারে FastAPI অ্যাপ প্রস্তুত করার সময় মাল্টি-স্টেজ বিল্ড দিয়ে সাইজ ছোট রাখুন এবং কন্টেইনার কখনো রুট ইউজার হিসেবে চালাবেন না। যদি আপনার এপিআই সম্পূর্ণ অভ্যন্তরীণ হয়, তবে প্রোডাকশনে Swagger UI ও ReDoc বন্ধ রাখুন যাতে বাইরের কেউ আপনার ইন্টারনাল রুটের তথ্য জানতে না পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Disable Swagger in Private APIs: Set docs_url=None and redoc_url=None in production environments where documentation should remain private.',
          bn: '১. প্রাইভেট এপিআই-তে সোয়েগার বন্ধ: গোপন রাখতে চাইলে প্রোডাকশনে docs_url=None এবং redoc_url=None করে রাখুন।'
        },
        {
          en: '2. Never Use --reload in Production: The --reload flag wastes memory by running file monitoring watchers and degrades concurrent throughput.',
          bn: '২. প্রোডাকশনে --reload নিষিদ্ধ: প্রোডাকশন সার্ভারে কখনোই --reload চালাবেন না; এটি অতিরিক্ত মেমরি অপচয় করে ও সার্ভারের গতি কমায়।'
        },
        {
          en: '3. Worker Sizing Formula: On dedicated Linux nodes, configure workers = (2 * CPU_CORES) + 1 when using Gunicorn UvicornWorker.',
          bn: '৩. ওয়ার্কার গণনার সূত্র: ডেডিকেটেড সার্ভারে Gunicorn চালালে ওয়ার্কার সংখ্যা (২ * CPU কোর) + ১ ফর্মুলায় নির্ধারণ করুন।'
        },
        {
          en: '4. Non-Root Container User: Always create a dedicated non-root user in your Dockerfile (e.g. USER appuser) for container security compliance.',
          bn: '৪. নন-রুট ডকার ইউজার: নিরাপত্তার স্বার্থে ডকারফাইলে সর্বদা একজন নন-রুট ব্যবহারকারী তৈরি করে অ্যাপ চালান।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-doc-ex1',
      kind: 'mcq',
      topic: 'gunicorn uvicornworker integration benefits',
      question: {
        en: 'Why is Gunicorn paired with UvicornWorker ("gunicorn -k uvicorn.workers.UvicornWorker") when deploying FastAPI on bare-metal servers or standalone virtual machines?',
        bn: 'ভার্চুয়াল মেশিন বা ডেডিকেটেড সার্ভারে FastAPI ডেপ্লয় করার সময় UvicornWorker সহ Gunicorn কেন ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'Gunicorn handles multi-process management, automatically restarts crashed worker processes, and performs zero-downtime rolling code reloads, while Uvicorn handles high-throughput asynchronous HTTP event loops inside each worker',
          bn: 'Gunicorn প্রসেস ম্যানেজমেন্ট সামলায়, ক্র্যাশ করা ওয়ার্কার স্বয়ংক্রিয়ভাবে রিস্টার্ট করে ও ডাউনটাইম ছাড়া রিলোড দেয়, আর প্রতিটি ওয়ার্কারের ভেতর Uvicorn উচ্চগতির অ্যাসিঙ্ক ইভেন্ট লুপ পরিচালনা করে'
        },
        {
          en: 'Uvicorn cannot run on Linux servers without Gunicorn',
          bn: 'Gunicorn ছাড়া Uvicorn লিনাক্স সার্ভারে চালানোই যায় না'
        },
        {
          en: 'Gunicorn converts Python bytecode into C++ machine code at runtime',
          bn: 'Gunicorn রানটাইমে পাইথন কোডকে সি++ মেশিনের কোডে রূপান্তর করে ফেলে'
        },
        {
          en: 'It encrypts all network traffic with Bitcoin blockchain blocks',
          bn: 'এটি সমস্ত নেটওয়ার্ক ট্রাফিককে বিটকয়েন ব্লকচেইনে এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Gunicorn provides process supervision while Uvicorn provides async ASGI performance.',
        bn: 'Gunicorn প্রসেস তত্ত্বাবধান করে আর Uvicorn উচ্চগতির অ্যাসিঙ্ক ASGI সংযোগ পরিচালনা করে।'
      },
      explanation: {
        en: 'Uvicorn is an ASGI server without master process management. Gunicorn acts as the master process supervisor, creating and monitoring multiple Uvicorn worker processes for resilient clustering.',
        bn: 'Uvicorn একা মাস্টার প্রসেস ম্যানেজমেন্ট করতে পারে না। Gunicorn অভিভাবক প্রসেস হিসেবে প্রতিটি Uvicorn ওয়ার্কারকে সচল ও স্থিতিশীল রাখে।'
      }
    },
    {
      id: 'fa-doc-ex2',
      kind: 'mcq',
      topic: 'disabling swagger ui in production',
      question: {
        en: 'How can you completely disable both Swagger UI and ReDoc in production for a private FastAPI microservice?',
        bn: 'একটি প্রাইভেট FastAPI মাইক্রোসার্ভিসে প্রোডাকশনে Swagger UI এবং ReDoc দুটোই পুরোপুরি বন্ধ করবেন কীভাবে?'
      },
      options: [
        {
          en: 'Pass "docs_url=None, redoc_url=None, openapi_url=None" when instantiating the FastAPI() application',
          bn: 'FastAPI() অ্যাপ্লিকেশন তৈরির সময় "docs_url=None, redoc_url=None, openapi_url=None" নির্ধারণ করে'
        },
        {
          en: 'Delete the main.py file from the server',
          bn: 'সার্ভার থেকে main.py ফাইলটি মুছে ফেলে'
        },
        {
          en: 'Set the computer monitor brightness to zero',
          bn: 'কম্পিউটারের মনিটরের ব্রাইটনেস শূন্য করে দিয়ে'
        },
        {
          en: 'Swagger UI cannot be disabled in FastAPI',
          bn: 'FastAPI-তে কোনোভাবেই Swagger UI বন্ধ করা সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Setting docs_url and redoc_url to None disables their respective endpoints.',
        bn: 'docs_url এবং redoc_url-এর মান None দিলে সংশ্লিষ্ট রাউটগুলো বন্ধ হয়ে যায়।'
      },
      explanation: {
        en: 'Setting docs_url=None, redoc_url=None, and openapi_url=None removes the interactive documentation and OpenAPI schema endpoints entirely, securing private APIs.',
        bn: 'এগুলোর মান None নির্ধারণ করলে ইন্টারঅ্যাক্টিভ ডকুমেন্টেশন এবং স্কিমা রুটগুলো সম্পূর্ণরূপে অপসারিত হয়।'
      }
    },
    {
      id: 'fa-doc-ex3',
      kind: 'mcq',
      topic: 'fastapi testclient execution environment',
      question: {
        en: 'How does FastAPI\'s "TestClient" execute HTTP requests during test runs, and why is it so fast?',
        bn: 'টেস্ট চলার সময় FastAPI-এর "TestClient" কীভাবে এইচটিটিপি রিকোয়েস্ট কার্যকর করে এবং এটি এত দ্রুত কেন চলে?'
      },
      options: [
        {
          en: 'It directly calls the ASGI application callable in memory via httpx without binding to real TCP network ports or incurring OS network stack overhead',
          bn: 'এটি কোনো আসল টিসিপি নেটওয়ার্ক পোর্ট বা ওএস নেটওয়ার্ক বিলম্ব ছাড়াই httpx দিয়ে মেমরির ভেতর সরাসরি ASGI অ্যাপে রিকোয়েস্ট পাঠিয়ে সম্পন্ন করে'
        },
        {
          en: 'It runs the tests on an external cloud mainframe',
          bn: 'এটি টেস্টগুলো বাইরের একটি ক্লাউড মেইনফ্রেমে রান করায়'
        },
        {
          en: 'It bypasses all route dependencies and security checks',
          bn: 'এটি সমস্ত রুট ডিপেন্ডেন্সি এবং সিকিউরিটি যাচাই এড়িয়ে চলে'
        },
        {
          en: 'It prints mock results without executing any Python code',
          bn: 'এটি পাইথন কোড না চালিয়েই কাল্পনিক ফলাফল প্রিন্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'TestClient communicates directly with the ASGI application in-process.',
        bn: 'TestClient কোনো সকেট বা পোর্ট না খুলে মেমরির ভেতরেই অ্যাপের সাথে যোগাযোগ করে।'
      },
      explanation: {
        en: 'Starlette/FastAPI TestClient uses httpx to pass ASGI requests directly to the application in memory, avoiding network socket creation and enabling lightning-fast test suites.',
        bn: 'TestClient সকেটের বদলে মেমরিতে সরাসরি ASGI রিকোয়েস্ট পাঠায়। ফলে নেটওয়ার্ক ল্যাটেন্সি ছাড়াই চোখের পলকে শত শত টেস্ট সম্পন্ন করা সম্ভব হয়।'
      }
    },
    {
      id: 'fa-doc-ex4',
      kind: 'mcq',
      topic: 'kubernetes single worker per container topology',
      question: {
        en: 'When deploying FastAPI applications inside Docker containers managed by Kubernetes or AWS ECS, why is running only 1 Uvicorn worker process per container recommended?',
        bn: 'কুবারনেটিস বা AWS ECS চালিত ডকার কন্টেইনারে FastAPI চালানোর সময় কন্টেইনার প্রতি মাত্র ১টি Uvicorn ওয়ার্কার রাখার পরামর্শ কেন দেওয়া হয়?'
      },
      options: [
        {
          en: 'The container orchestrator (Kubernetes/ECS) handles process scaling, health checks, CPU resource limits, and auto-scaling by replicating container pods horizontally; managing multiple workers inside the container conflicts with orchestrator metrics',
          bn: 'কন্টেইনার অর্কেস্ট্রেটর নিজেই কন্টেইনারের সংখ্যা বাড়িয়ে-কমিয়ে স্কেলিং ও হেলথ চেক করে; কন্টেইনারের ভেতর একাধিক ওয়ার্কার রাখলে অর্কেস্ট্রেটরের রিসোর্স গণনায় বিভ্রান্তি ঘটে'
        },
        {
          en: 'Uvicorn crashes if more than 1 process runs on Linux',
          bn: 'লিনাক্সে ১টির বেশি প্রসেস চললে Uvicorn ক্র্যাশ করে'
        },
        {
          en: 'Docker containers can only support 1 single line of Python code',
          bn: 'ডকার কন্টেইনার কেবল ১ লাইনের পাইথন কোড সমর্থন করতে পারে'
        },
        {
          en: 'Running 1 worker disables all HTTP error logging',
          bn: '১টি ওয়ার্কার চালালে সমস্ত এইচটিটিপি এরর লগিং বন্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'In Kubernetes, replication occurs at the pod/container level, not inside the container.',
        bn: 'কুবারনেটিসে স্কেলিং কন্টেইনারের ভেতর নয়, বরং কন্টেইনার পডের সংখ্যার ওপর ভিত্তি করে করা হয়।'
      },
      explanation: {
        en: 'In container orchestrators, pods represent the unit of scaling. Running 1 process per container gives Kubernetes precise control over pod CPU/memory quotas, auto-scaling, and graceful pod restarts.',
        bn: 'ক্লাউড অর্কেস্ট্রেটরে প্রতিটি কন্টেইনার স্কেলিংয়ের একক। তাই কন্টেইনার প্রতি ১টি প্রসেস রাখলে মেমরি পরিমাপ ও স্বয়ংক্রিয়ভাবে কন্টেইনার বাড়ানো বা কমানো সবচেয়ে কার্যকর হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-docs-serve-quiz',
    title: {
      en: 'FastAPI OpenAPI, Testing & Deployment Quiz',
      bn: 'FastAPI OpenAPI, টেস্টিং ও ডেপ্লয়মেন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-openapi-tags-organization',
        kind: 'mcq',
        topic: 'organizing routes in swagger ui using tags',
        question: {
          en: 'What parameter on "@app.get()" or "APIRouter()" groups related endpoints neatly into labeled expandable sections in Swagger UI?',
          bn: 'Swagger UI-তে সম্পর্কিত এন্ডপয়েন্টগুলোকে সুন্দর লেবেলযুক্ত সেকশনে সাজাতে "@app.get()" বা "APIRouter()"-এ কোন প্যারামিটারটি ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'tags=["Category Name"] (e.g. tags=["Authentication"])',
            bn: 'tags=["Category Name"] (যেমন tags=["Authentication"])'
          },
          {
            en: 'group_label="Category Name"',
            bn: 'group_label="Category Name"'
          },
          {
            en: 'swagger_section="Category Name"',
            bn: 'swagger_section="Category Name"'
          },
          {
            en: 'category="Category Name"',
            bn: 'category="Category Name"'
          }
        ],
        answer: 0,
        hint: {
          en: 'FastAPI uses the "tags" list parameter to group routes in OpenAPI documentation.',
          bn: 'OpenAPI ডকুমেন্টেশনে রুট সাজাতে FastAPI-তে "tags" লিস্ট প্যারামিটার ব্যবহার করা হয়।'
        },
        explanation: {
          en: 'Supplying tags=["Authentication"] organizes routes under an "Authentication" header in Swagger UI and ReDoc, making large APIs easy to navigate.',
          bn: 'tags=["Authentication"] দিলে Swagger UI-তে এন্ডপয়েন্টগুলো সুন্দর আলাদা সেকশনে গুছিয়ে প্রদর্শিত হয়।'
        }
      },
      {
        id: 'q-dependency-overrides-in-testclient',
        kind: 'mcq',
        topic: 'mocking dependencies in pytest with dependency_overrides',
        question: {
          en: 'How do you replace a production database dependency with a mock database in pytest when testing a FastAPI application?',
          bn: 'pytest দিয়ে FastAPI অ্যাপ্লিকেশন টেস্ট করার সময় প্রোডাকশন ডাটাবেজ ডিপেন্ডেন্সিকে মক ডাটাবেজ দিয়ে প্রতিস্থাপন করবেন কীভাবে?'
        },
        options: [
          {
            en: 'Assign the mock function to the dictionary: "app.dependency_overrides[get_db] = override_get_db", and clear it after the test',
            bn: '"app.dependency_overrides[get_db] = override_get_db" ডিকশনারিতে মক ফাংশন সেট করে এবং টেস্ট শেষে তা মুছে ফেলে'
          },
          {
            en: 'Manually edit the production database connection string before every test',
            bn: 'প্রতিটি টেস্টের আগে সরাসরি প্রোডাকশন কানেকশন স্ট্রিং এডিট করে'
          },
          {
            en: 'FastAPI does not allow overriding dependencies during tests',
            bn: 'FastAPI টেস্ট চলাকালীন কোনো ডিপেন্ডেন্সি পরিবর্তনের অনুমতি দেয় না'
          },
          {
            en: 'Uninstall SQLAlchemy from Python virtual environment',
            bn: 'পাইথন ভার্চুয়াল এনভায়রনমেন্ট থেকে SQLAlchemy আনইনস্টল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'FastAPI provides the app.dependency_overrides dictionary specifically for tests.',
          bn: 'FastAPI টেস্টিংয়ের জন্য বিশেষভাবে app.dependency_overrides ডিকশনারি প্রদান করে।'
        },
        explanation: {
          en: 'app.dependency_overrides allows substituting any dependency with a mock or sqlite fixture during tests. It should be cleared in fixture teardown (app.dependency_overrides.clear()).',
          bn: 'app.dependency_overrides দিয়ে যেকোনো আসল ডিপেন্ডেন্সিকে টেস্টের জন্য নকল বা মক ফাংশন দিয়ে বদলে ফেলা যায় এবং টেস্ট শেষে clear() করে নেওয়া হয়।'
        }
      },
      {
        id: 'q-response-description-openapi-doc',
        kind: 'mcq',
        topic: 'documenting custom responses in openapi',
        question: {
          en: 'How can you document additional HTTP response codes (such as HTTP 404 or HTTP 409) with descriptions and custom schemas in FastAPI route definitions?',
          bn: 'FastAPI রুট ডেফিনিশনে অতিরিক্ত এইচটিটিপি স্ট্যাটাস কোড (যেমন ৪০৪ বা ৪০৯)-এর জন্য বিবরণ ও কাস্টম স্কিমা কীভাবে ডকুমেন্ট করবেন?'
        },
        options: [
          {
            en: 'Pass a responses dictionary to the route decorator: "@app.get(\'/items/{id}\', responses={404: {\'description\': \'Item not found\'}})"',
            bn: 'রুট ডেকোরেটরে responses ডিকশনারি দিয়ে: "@app.get(\'/items/{id}\', responses={404: {\'description\': \'Item not found\'}})"'
          },
          {
            en: 'Write the error descriptions in a separate word document',
            bn: 'একটি আলাদা ওয়ার্ড ফাইলে এররের বর্ণনা লিখে'
          },
          {
            en: 'Send an email to the OpenAPI committee',
            bn: 'OpenAPI কমিটির কাছে ইমেইল পাঠিয়ে'
          },
          {
            en: 'Additional responses cannot be documented in OpenAPI',
            bn: 'OpenAPI-তে অতিরিক্ত রেসপন্স কোড ডকুমেন্ট করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use the responses={...} dictionary on the path operation decorator.',
          bn: 'পাথ অপারেশন ডেকোরেটরে responses={...} ডিকশনারি ব্যবহার করুন।'
        },
        explanation: {
          en: 'The responses={status_code: {...}} parameter allows adding rich documentation and models for every expected HTTP status code into the OpenAPI schema.',
          bn: 'responses={...} প্যারামিটার দিয়ে রুটের প্রতিটি সম্ভাব্য রেসপন্স কোড এবং তাদের ত্রুটির বিবরণ নিখুঁতভাবে Swagger UI-তে তুলে ধরা যায়।'
        }
      },
      {
        id: 'q-forwarded-headers-proxyfix',
        kind: 'mcq',
        topic: 'trusting proxy headers in uvicorn behind reverse proxy',
        question: {
          en: 'When deploying FastAPI behind an Nginx or AWS Application Load Balancer reverse proxy, what Uvicorn CLI flag ensures client IP addresses and HTTPS schemes are accurately detected?',
          bn: 'Nginx বা ক্লাউড লোড ব্যালেন্সারের পেছনে FastAPI চালানোর সময় ক্লায়েন্টের আসল আইপি ও এইচটিটিপিএস সঠিকভাবে শনাক্ত করতে Uvicorn-এ কোন ফ্ল্যাগ দিতে হয়?'
        },
        options: [
          {
            en: '--proxy-headers and --forwarded-allow-ips (instructing Uvicorn to trust X-Forwarded-For and X-Forwarded-Proto from the upstream proxy)',
            bn: '--proxy-headers এবং --forwarded-allow-ips (যা Uvicorn-কে আপস্ট্রিম প্রক্সি থেকে আসা X-Forwarded হেডার বিশ্বাস করার নির্দেশ দেয়)'
          },
          {
            en: '--disable-all-firewalls',
            bn: '--disable-all-firewalls'
          },
          {
            en: '--raw-sockets-only',
            bn: '--raw-sockets-only'
          },
          {
            en: '--ignore-client-ip',
            bn: '--ignore-client-ip'
          }
        ],
        answer: 0,
        hint: {
          en: '--proxy-headers tells Uvicorn to parse forwarded headers from reverse proxies.',
          bn: '--proxy-headers Uvicorn-কে রিভার্স প্রক্সি থেকে আসা ফরোয়ার্ডেড হেডার গ্রহণ করতে বলে।'
        },
        explanation: {
          en: 'Without --proxy-headers, Uvicorn will perceive all incoming requests as originating from the reverse proxy\'s internal IP over plain HTTP, breaking client IP logging and HTTPS redirects.',
          bn: '--proxy-headers না দিলে Uvicorn সব ক্লায়েন্টকে রিভার্স প্রক্সির ইন্টারনাল আইপি মনে করে এবং আসল ইউজার আইপি ও প্রোটোকল শনাক্ত করতে পারে না।'
        }
      }
    ]
  }
};
