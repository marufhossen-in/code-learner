import type { Lesson } from '../../../lib/types';

export const TheTypedAppLesson: Lesson = {
  slug: 'the-typed-app',
  tech: 'fastapi',
  title: {
    en: 'FastAPI Overview & First App — ASGI Architecture & Swagger UI',
    bn: 'FastAPI পরিচিতি ও প্রথম অ্যাপ — ASGI আর্কিটেকচার ও সোয়েগার ইউআই'
  },
  summary: {
    en: 'FastAPI is a high-performance Python asynchronous web framework based on standard type hints. In this foundational lesson, you will master the ASGI interface specification, the minimal FastAPI application structure, Uvicorn development server workflows, and automatic interactive OpenAPI documentation via Swagger UI.',
    bn: 'FastAPI হলো স্ট্যান্ডার্ড টাইপ হিন্টের ওপর ভিত্তি করে তৈরি একটি দ্রুতগতির পাইথন অ্যাসিনক্রোনাস ওয়েব ফ্রেমওয়ার্ক। এই প্রাথমিক পাঠে আপনি ASGI ইন্টারফেস স্পেসিফিকেশন, মিনিমাল FastAPI অ্যাপ্লিকেশন কাঠামো, Uvicorn সার্ভার পরিচালনা এবং Swagger UI-এর মাধ্যমে স্বয়ংক্রিয় ইন্টারঅ্যাক্টিভ OpenAPI ডকুমেন্টেশন তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'fastapi-asgi-architecture',
      text: {
        en: 'The FastAPI and ASGI Framework Architecture',
        bn: 'FastAPI ও ASGI ফ্রেমওয়ার্ক আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern backend Application Programming Interfaces (APIs) with FastAPI, your application operates on the Asynchronous Server Gateway Interface (ASGI) standard. Unlike traditional synchronous web frameworks, ASGI supports non-blocking concurrent connections and WebSockets. FastAPI delegates low-level networking to Starlette and data schema modeling to Pydantic, delivering extreme performance with minimal boilerplate.',
        bn: 'যখন আপনি FastAPI দিয়ে আধুনিক অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস (API) ব্যাকএন্ড তৈরি করেন, তখন আপনার অ্যাপ্লিকেশনটি অ্যাসিনক্রোনাস সার্ভার গেটওয়ে ইন্টারফেস (ASGI) স্ট্যান্ডার্ড মেনে চলে। সাধারণ সিনক্রোনাস ওয়েব ফ্রেমওয়ার্কের মতো না হয়ে ASGI একসাথে বহু নন-ব্লকিং সংযোগ ও ওয়েবসকেট সমর্থন করে। FastAPI নেটওয়ার্কিংয়ের জন্য Starlette এবং ডাটা মডেলিংয়ের জন্য Pydantic ব্যবহার করে অবিশ্বাস্য গতি ও পরিচ্ছন্ন কোড নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ASGI (Asynchronous Server Gateway Interface)',
          def: {
            en: 'The asynchronous successor to WSGI, providing a standard interface for Python async frameworks (like FastAPI) to communicate with async servers (like Uvicorn).',
            bn: 'WSGI-এর আধুনিক অ্যাসিনক্রোনাস উত্তরসূরি, যা Uvicorn-এর মতো সার্ভার এবং FastAPI-এর মতো ফ্রেমওয়ার্কের মধ্যে যোগাযোগের সার্বজনীন নিয়ম নির্ধারণ করে।'
          }
        },
        {
          term: 'Uvicorn',
          def: {
            en: 'A lightning-fast ASGI web server implementation for Python powered by uvloop and httptools, capable of serving thousands of concurrent requests.',
            bn: 'একটি অত্যন্ত দ্রুতগতির পাইথন ASGI ওয়েব সার্ভার যা uvloop ও httptools ব্যবহারের মাধ্যমে সেকেন্ডে হাজার হাজার কনকারেন্ট রিকোয়েস্ট সামলাতে পারে।'
          }
        },
        {
          term: 'Automatic Interactive Docs (/docs)',
          def: {
            en: 'The out-of-the-box Swagger UI interactive documentation generated dynamically from Python type hints and route decorators.',
            bn: 'পাইথন টাইপ হিন্ট ও রুট থেকে স্বয়ংক্রিয়ভাবে তৈরি হওয়া Swagger UI ইন্টারঅ্যাক্টিভ ডকুমেন্টেশন, যেখানে ব্রাউজার থেকেই সরাসরি এপিআই টেস্ট করা যায়।'
          }
        },
        {
          term: 'Type Hints (PEP 484)',
          def: {
            en: 'Standard Python type annotations (e.g. name: str, age: int) used by FastAPI to parse, validate, serialize, and document HTTP requests.',
            bn: 'স্ট্যান্ডার্ড পাইথন টাইপ নোটেশন (যেমন name: str, age: int) যা ব্যবহার করে FastAPI নিজে থেকেই ইনপুট ডাটা পরীক্ষা ও রূপান্তর করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'core-components-matrix',
      text: {
        en: 'FastAPI Foundation Stack Responsibilities Matrix',
        bn: 'FastAPI ভিত্তি উপাদান ও দায়িত্ব ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Component', bn: 'উপাদান' },
        { en: 'Underlying Engine', bn: 'অভ্যন্তরীণ ইঞ্জিন' },
        { en: 'System Responsibility', bn: 'সিস্টেমের দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'ASGI Web Engine & Routing', bn: 'ASGI ওয়েব ইঞ্জিন ও রাউটিং' },
          { en: 'Starlette', bn: 'Starlette' },
          { en: 'Manages HTTP requests, WebSockets, background tasks, and event loops', bn: 'এইচটিটিপি রিকোয়েস্ট, ওয়েবসকেট, ব্যাকগ্রাউন্ড কাজ এবং ইভেন্ট লুপ পরিচালনা করে' }
        ],
        [
          { en: 'Data Parsing & Validation', bn: 'ডাটা পার্সিং ও ভ্যালিডেশন' },
          { en: 'Pydantic v2', bn: 'Pydantic v2' },
          { en: 'Parses incoming JSON, validates schemas, casts types, and filters response payloads', bn: 'JSON ডাটা পড়ে, স্কিমা যাচাই করে, টাইপ রূপান্তর করে এবং রেসপন্স ফিল্টার করে' }
        ],
        [
          { en: 'API Specification', bn: 'এপিআই স্পেসিফিকেশন' },
          { en: 'OpenAPI 3.1 & JSON Schema', bn: 'OpenAPI 3.1 ও JSON Schema' },
          { en: 'Compiles route definitions into a machine-readable JSON schema at /openapi.json', bn: 'সমস্ত রুটের বিবরণ /openapi.json পাথে একটি সার্বজনীন স্কিমায় কম্পাইল করে' }
        ],
        [
          { en: 'ASGI Web Server', bn: 'ASGI ওয়েব সার্ভার' },
          { en: 'Uvicorn (uvloop)', bn: 'Uvicorn (uvloop)' },
          { en: 'Listens on TCP sockets, terminates HTTP/1.1 and WebSockets, and invokes the ASGI callable', bn: 'টিসিপি সকেটে রিকোয়েস্ট শোনে এবং FastAPI কলযোগ্য অবজেক্টকে কার্যকর করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'asgi-dispatch-code',
      text: {
        en: 'Working ASGI Dispatch and Type Validation Simulation',
        bn: 'কার্যকরী ASGI ডিসপ্যাচ ও টাইপ ভ্যালিডেশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of FastAPI Route Dispatch and Automatic 422 Type Coercion
class MockFastAPI {
  constructor() {
    this.routes = new Map();
  }

  get(path, paramTypes = {}) {
    return (handler) => {
      this.routes.set(path, { handler, paramTypes });
      return handler;
    };
  }

  async dispatch(path, queryParams = {}) {
    const route = this.routes.get(path);
    if (!route) return { status: 404, body: { detail: 'Not Found' } };

    const validatedArgs = {};
    const validationErrors = [];

    for (const [paramName, expectedType] of Object.entries(route.paramTypes)) {
      const rawValue = queryParams[paramName];
      if (rawValue === undefined) {
        validationErrors.push({ field: paramName, message: 'Field required' });
        continue;
      }
      if (expectedType === 'int') {
        const parsed = parseInt(rawValue, 10);
        if (Number.isNaN(parsed)) {
          validationErrors.push({ field: paramName, message: 'Value is not a valid integer' });
        } else {
          validatedArgs[paramName] = parsed;
        }
      }
    }

    if (validationErrors.length > 0) {
      return { status: 422, body: { detail: validationErrors } };
    }

    const response = await route.handler(validatedArgs);
    return { status: 200, body: response };
  }
}

// 1. Initializing mock FastAPI app
const app = new MockFastAPI();
app.get('/items', { limit: 'int' })(async (args) => ({
  returnedItemsCount: args.limit,
  serverStatus: 'online'
}));

// 2. Simulating successful typed request and failed invalid request
const validRes = await app.dispatch('/items', { limit: '50' });
const invalidRes = await app.dispatch('/items', { limit: 'not-a-number' });

console.log('Valid request status code:', validRes.status);
// -> Valid request status code: 200
console.log('Parsed integer limit value:', validRes.body.returnedItemsCount);
// -> Parsed integer limit value: 50
console.log('Invalid request error status:', invalidRes.status);
// -> Invalid request error status: 422`,
      caption: {
        en: 'FastAPI router returns status 200 for integer 50 and status 422 for invalid input',
        bn: 'FastAPI রাউটার সংখ্যা ৫০ এর জন্য ২০০ স্ট্যাটাস এবং ভুল ইনপুটে ৪২২ এরর প্রদান করছে'
      }
    },
    {
      type: 'heading',
      id: 'swagger-ui-and-cli-workflows',
      text: {
        en: 'Interactive Documentation and Uvicorn Workflows',
        bn: 'ইন্টারঅ্যাক্টিভ ডকুমেন্টেশন ও Uvicorn কমান্ডলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A defining superpower of FastAPI is automatic documentation generation. Navigating to "/docs" renders an interactive Swagger UI, allowing developers to execute live test requests against endpoints directly in the browser. Navigating to "/redoc" provides a polished, two-column API reference ideal for enterprise partner distribution.',
        bn: 'FastAPI-এর অন্যতম সেরা বৈশিষ্ট্য হলো স্বয়ংক্রিয় ডকুমেন্টেশন তৈরি। ব্রাউজারে "/docs" পাথে গেলে একটি ইন্টারঅ্যাক্টিভ Swagger UI দেখা যায়, যেখান থেকে সরাসরি লাইভ রিকোয়েস্ট পাঠিয়ে এপিআই টেস্ট করা যায়। আর "/redoc" পাথে গেলে পার্টনারদের জন্য সহজে পাঠযোগ্য ২ কলামের সুন্দর ডকুমেন্টেশন পাওয়া যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Launch with Reload Flag: In development, run "uvicorn main:app --reload --port 8000" to enable automatic server restarts on code changes.',
          bn: '১. রিলোড ফ্ল্যাগ দিয়ে চালু করুন: লোকাল ডেভেলপমেন্টে কোড পরিবর্তনের সাথে সাথে সার্ভার রিস্টার্ট হতে "uvicorn main:app --reload" চালান।'
        },
        {
          en: '2. Leverage Python Type Hints: Always annotate function parameters with explicit types (e.g. item_id: int) to trigger automatic validation.',
          bn: '২. পাইথন টাইপ হিন্ট ব্যবহার: স্বয়ংক্রিয় ভ্যালিডেশন সক্রিয় করতে প্যারামিটারে স্পষ্ট টাইপ (যেমন item_id: int) উল্লেখ করুন।'
        },
        {
          en: '3. Inspect /docs During Development: Use the interactive Swagger UI at /docs to visually test endpoints without writing curl commands.',
          bn: '৩. /docs দিয়ে লাইভ টেস্টিং: টার্মিনালে curl লেখার ঝামেলা ছাড়া ব্রাউজারেই /docs খুলে ইন্টারঅ্যাক্টিভভাবে এপিআই পরীক্ষা করুন।'
        },
        {
          en: '4. Disable Docs in Restricted Environments: Set docs_url=None and redoc_url=None on the FastAPI constructor to disable documentation in production.',
          bn: '৪. সংবেদনশীল সার্ভারে ডক্স বন্ধ: অভ্যন্তরীণ গোপনীয়তা রক্ষায় প্রোডাকশনে docs_url=None দিয়ে পাবলিক ডকুমেন্টেশন বন্ধ রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-app-ex1',
      kind: 'mcq',
      topic: 'http error status code for validation errors in fastapi',
      question: {
        en: 'When a client submits an invalid request (such as providing a string "abc" for a path parameter annotated as "item_id: int"), what HTTP status code does FastAPI return?',
        bn: 'কোনো ক্লায়েন্ট ভুল ডাটা পাঠালে (যেমন "item_id: int" প্রত্যাশিত ফিল্ডে স্ট্রিং "abc" পাঠানো হলে) FastAPI কোন এইচটিটিপি স্ট্যাটাস কোড ফেরত দেয়?'
      },
      options: [
        {
          en: 'HTTP 422 Unprocessable Entity, accompanied by a JSON payload describing the location and reason for each validation error',
          bn: 'এইচটিটিপি ৪২২ Unprocessable Entity, সাথে ঠিক কোন ফিল্ডে কী ভুল হয়েছে তা বর্ণনাকারী একটি বিশদ JSON মেসেজ'
        },
        {
          en: 'HTTP 500 Internal Server Error',
          bn: 'এইচটিটিপি ৫০০ ইন্টারনাল সার্ভার এরর'
        },
        {
          en: 'HTTP 200 OK with an empty response body',
          bn: 'এইচটিটিপি ২০০ ওকে সহ খালি রেসপন্স বডি'
        },
        {
          en: 'HTTP 404 Not Found',
          bn: 'এইচটিটিপি ৪০৪ নট ফাউন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Validation failures in FastAPI consistently produce status code 422.',
        bn: 'FastAPI-তে ভ্যালিডেশন ব্যর্থ হলে সর্বদা ৪২২ স্ট্যাটাস কোড পাঠানো হয়।'
      },
      explanation: {
        en: 'FastAPI uses HTTP 422 Unprocessable Entity for schema validation failures, returning structured error objects explaining which fields failed validation.',
        bn: 'ভ্যালিডেশন ভুলের জন্য FastAPI এইচটিটিপি ৪২২ স্ট্যাটাস ব্যবহার করে এবং ক্লায়েন্টকে জানায় কোন ইনপুটে কী ধরনের ত্রুটি রয়েছে।'
      }
    },
    {
      id: 'fa-app-ex2',
      kind: 'mcq',
      topic: 'uvicorn reload flag purpose in development',
      question: {
        en: 'What is the purpose of passing the "--reload" flag when executing "uvicorn main:app --reload"?',
        bn: '"uvicorn main:app --reload" চালানোর সময় "--reload" ফ্ল্যাগটি ব্যবহারের উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It watches the file system for source code changes and automatically restarts the worker process, speeding up local development',
          bn: 'এটি ফাইল সিস্টেম পর্যবেক্ষণ করে এবং কোড পরিবর্তন শনাক্ত করা মাত্রই স্বয়ংক্রিয়ভাবে সার্ভার রিস্টার্ট করে লোকাল কাজ দ্রুত করে'
        },
        {
          en: 'It reloads the operating system kernel on every HTTP request',
          bn: 'এটি প্রতিটি রিকোয়েস্টে অপারেটিং সিস্টেমের কার্নেল রিলোড করে'
        },
        {
          en: 'It resets all database tables to empty state',
          bn: 'এটি সমস্ত ডাটাবেজ টেবিল মুছে শূন্য করে দেয়'
        },
        {
          en: 'It forces web browsers to clear their cached cookies',
          bn: 'এটি ওয়েব ব্রাউজারের সমস্ত কুকি মুছে ফেলতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The reload flag enables auto-reloading during code modifications.',
        bn: 'রিলোড ফ্ল্যাগ কোড পরিবর্তনের সাথে সাথে সার্ভারকে নিজে থেকে পুনরায় চালু করে।'
      },
      explanation: {
        en: 'The --reload flag enables file change watching in Uvicorn. When a Python file is saved, the server restarts without requiring manual terminal restarts.',
        bn: '--reload ফ্ল্যাগ ফাইলে পরিবর্তন দেখলেই নিজে থেকে সার্ভার রিস্টার্ট করে, ফলে টার্মিনালে বারবার ম্যানুয়ালি কমান্ড দিতে হয় না।'
      }
    },
    {
      id: 'fa-app-ex3',
      kind: 'mcq',
      topic: 'built in documentation endpoints in fastapi',
      question: {
        en: 'Which two interactive documentation interfaces are automatically generated by default in every FastAPI application?',
        bn: 'প্রতিটি FastAPI অ্যাপ্লিকেশনে ডিফল্টভাবে কোন দুটি ইন্টারঅ্যাক্টিভ ডকুমেন্টেশন ইন্টারফেস স্বয়ংক্রিয়ভাবে তৈরি হয়?'
      },
      options: [
        {
          en: 'Swagger UI at "/docs" and ReDoc at "/redoc"',
          bn: '"/docs" পাথে Swagger UI এবং "/redoc" পাথে ReDoc'
        },
        {
          en: 'Postman at "/postman" and Insomnia at "/insomnia"',
          bn: '"/postman" পাথে Postman এবং "/insomnia" পাথে Insomnia'
        },
        {
          en: 'Wikipedia at "/wiki" and GitHub at "/git"',
          bn: '"/wiki" পাথে Wikipedia এবং "/git" পাথে GitHub'
        },
        {
          en: 'Javadoc at "/javadoc" and Doxygen at "/doxygen"',
          bn: '"/javadoc" পাথে Javadoc এবং "/doxygen" পাথে Doxygen'
        }
      ],
      answer: 0,
      hint: {
        en: 'FastAPI exposes Swagger UI on /docs and ReDoc on /redoc out of the box.',
        bn: 'FastAPI কোনো বাড়তি কনফিগারেশন ছাড়াই /docs ও /redoc পাথে ডকুমেন্টেশন পরিবেশন করে।'
      },
      explanation: {
        en: 'FastAPI generates OpenAPI specifications automatically. It serves Swagger UI at /docs for interactive testing and ReDoc at /redoc for documentation reading.',
        bn: 'FastAPI নিজে থেকেই /docs-এ Swagger UI (ইন্টারঅ্যাক্টিভ টেস্টিংয়ের জন্য) এবং /redoc-এ ReDoc (পরিচ্ছন্ন রেফারেন্সের জন্য) তৈরি করে।'
      }
    },
    {
      id: 'fa-app-ex4',
      kind: 'mcq',
      topic: 'difference between wsgi and asgi in fastapi',
      question: {
        en: 'What fundamental architectural capability does ASGI provide that legacy WSGI lacked?',
        bn: 'পুরোনো WSGI-তে অনুপস্থিত ছিল এমন কোন মৌলিক আর্কিটেকচারাল ক্ষমতা আধুনিক ASGI প্রদান করে?'
      },
      options: [
        {
          en: 'Native support for asynchronous Python execution (async/await), non-blocking event loops, long-lived WebSockets, and HTTP/2 multiplexing',
          bn: 'অ্যাসিনক্রোনাস এক্সিকিউশন (async/await), নন-ব্লকিং ইভেন্ট লুপ, দীর্ঘস্থায়ী ওয়েবসকেট এবং এইচটিটিপি/২ মাল্টিপ্লেক্সিংয়ের পূর্ণ সমর্থন'
        },
        {
          en: 'The ability to run Python on smartphones without a battery',
          bn: 'ব্যাটারি ছাড়া স্মার্টফোনে পাইথন চালানোর ক্ষমতা'
        },
        {
          en: 'Automatic translation of Python code into C# syntax',
          bn: 'পাইথন কোডকে নিজে থেকে সি# সিনট্যাক্সে অনুবাদ করা'
        },
        {
          en: 'Encryption of hardware memory chips',
          bn: 'কম্পিউটারের হার্ডওয়্যার মেমরি চিপ এনক্রিপ্ট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'ASGI was created specifically to enable asynchronous protocols like WebSockets.',
        bn: 'ওয়েবসকেট ও নন-ব্লকিং অ্যাসিনক্রোনাস কমিউনিকেশনের জন্যই বিশেষভাবে ASGI তৈরি হয়েছে।'
      },
      explanation: {
        en: 'WSGI is strictly synchronous and single-transaction per thread. ASGI allows async/await coroutines, enabling high-concurrency WebSockets and async I/O.',
        bn: 'WSGI কেবল সিনক্রোনাস একমুখী রিকোয়েস্ট সামলায়। ASGI-এর মাধ্যমে async/await এবং দ্বি-মুখী ওয়েবসকেট পরিচালনা করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-typed-app-quiz',
    title: {
      en: 'FastAPI Fundamentals & ASGI Architecture Quiz',
      bn: 'FastAPI পরিচিতি ও ASGI আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-openapi-json-schema-endpoint',
        kind: 'mcq',
        topic: 'raw openapi schema json location',
        question: {
          en: 'Where does FastAPI expose the raw machine-readable OpenAPI specification schema in JSON format?',
          bn: 'FastAPI মেশিনে পাঠযোগ্য সম্পূর্ণ OpenAPI স্পেসিফিকেশন স্কিমা কোন পাথে JSON আকারে প্রকাশ করে?'
        },
        options: [
          {
            en: 'At the "/openapi.json" endpoint by default',
            bn: 'ডিফল্টভাবে "/openapi.json" এন্ডপয়েন্টে'
          },
          {
            en: 'Inside a secret file named .openapi in the operating system temp folder',
            bn: 'অপারেটিং সিস্টেমের টেম্প ফোল্ডারে .openapi নামের ফাইলে'
          },
          {
            en: 'In the client browser developer tools cookie storage',
            bn: 'ব্রাউজার ডেভেলপার টুলসের কুকি স্টোরেজের ভেতর'
          },
          {
            en: 'OpenAPI JSON schemas must be purchased from an external registry',
            bn: 'OpenAPI JSON স্কিমা বাহ্যিক কোনো সাইট থেকে কিনে নিতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Both Swagger UI and ReDoc fetch their definitions from /openapi.json.',
          bn: 'Swagger UI এবং ReDoc উভয়ই /openapi.json থেকেই তাদের ডাটা সংগ্রহ করে।'
        },
        explanation: {
          en: 'FastAPI compiles all route metadata, parameter types, and Pydantic schemas into an OpenAPI 3.1 JSON document served at /openapi.json.',
          bn: 'FastAPI সমস্ত রুট ও Pydantic মডেলকে একত্রিত করে একটি সার্বজনীন OpenAPI 3.1 ডকুমেন্ট হিসেবে /openapi.json পাথে পরিবেশন করে।'
        }
      },
      {
        id: 'q-type-hints-dual-purpose',
        kind: 'mcq',
        topic: 'dual purpose of type annotations in fastapi',
        question: {
          en: 'In FastAPI, what two critical operations are powered simultaneously by standard Python type annotations on route function arguments?',
          bn: 'FastAPI-তে রুট ফাংশনের আর্গুমেন্টে দেওয়া পাইথন টাইপ নোটেশনগুলো একই সাথে কোন দুটি গুরুত্বপূর্ণ কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'Data validation and type coercion at runtime (via Pydantic), as well as automatic documentation schema generation (via OpenAPI)',
            bn: 'রানটাইমে ডাটা ভ্যালিডেশন ও সঠিক টাইপে রূপান্তর (Pydantic দিয়ে), এবং স্বয়ংক্রিয় ডকুমেন্টেশন স্কিমা তৈরি (OpenAPI দিয়ে)'
          },
          {
            en: 'Database table creation and server reboot scheduling',
            bn: 'ডাটাবেজ টেবিল তৈরি এবং সার্ভার রিস্টার্টের সময় নির্ধারণ'
          },
          {
            en: 'CSS layout compilation and image compression',
            bn: 'সিএসএস লেআউট কম্পাইল করা এবং ছবির আকার ছোট করা'
          },
          {
            en: 'Type annotations have no runtime effect in FastAPI',
            bn: 'FastAPI-তে টাইপ নোটেশনের কোনো বাস্তব প্রভাব নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'FastAPI reads type hints for both runtime validation and documentation generation.',
          bn: 'FastAPI একই সাথে ডাটা যাচাই এবং ডকুমেন্টেশন তৈরিতে টাইপ হিন্ট ব্যবহার করে।'
        },
        explanation: {
          en: 'Type hints in FastAPI serve as the single source of truth: Pydantic uses them to validate and parse request data, while Starlette/OpenAPI uses them to generate the API schema.',
          bn: 'FastAPI-তে টাইপ হিন্ট দ্বিমুখী কাজ করে: Pydantic এটি দিয়ে ডাটা পার্স করে আর OpenAPI নিখুঁত ডকুমেন্টেশন তৈরি করে।'
        }
      },
      {
        id: 'q-disable-docs-in-production',
        kind: 'mcq',
        topic: 'disabling public documentation in production',
        question: {
          en: 'How can you completely disable the public Swagger UI and ReDoc documentation in a sensitive production deployment?',
          bn: 'একটি সংবেদনশীল প্রোডাকশন সার্ভারে কীভাবে পাবলিক Swagger UI এবং ReDoc ডকুমেন্টেশন পুরোপুরি বন্ধ করা যায়?'
        },
        options: [
        {
          en: 'Instantiate FastAPI with None for doc endpoints: "app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)"',
          bn: 'ডক এন্ডপয়েন্ট বন্ধ রাখতে None পাস করে: "app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)"'
        },
          {
            en: 'Delete the /docs directory from the server hard disk',
            bn: 'সার্ভারের হার্ডডিস্ক থেকে /docs ফোল্ডারটি মুছে ফেলে'
          },
          {
            en: 'Turn off the server monitor screen',
            bn: 'সার্ভারের মনিটর স্ক্রিন বন্ধ করে দিয়ে'
          },
          {
            en: 'Documentation cannot be disabled in FastAPI',
            bn: 'FastAPI-তে ডকুমেন্টেশন বন্ধ করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing None to docs_url and openapi_url removes the documentation route handlers.',
          bn: 'docs_url এবং openapi_url-এ None দিলে ফ্রেমওয়ার্ক ওই রুটগুলো রেজিস্টারই করে না।'
        },
        explanation: {
          en: 'Setting docs_url=None, redoc_url=None, and openapi_url=None prevents FastAPI from mounting the documentation routes in production environments.',
          bn: 'FastAPI কনস্ট্রাক্টরে docs_url=None দিলে প্রোডাকশনে বাইরের কেউ এপিআই স্ট্রাকচার বা ডকুমেন্টেশন দেখতে পারে না।'
        }
      },
      {
        id: 'q-starlette-relationship-fastapi',
        kind: 'mcq',
        topic: 'architectural relationship between fastapi and starlette',
        question: {
          en: 'What is the architectural inheritance relationship between FastAPI and Starlette?',
          bn: 'FastAPI এবং Starlette-এর মধ্যে আর্কিটেকচারাল ইনহেরিটেন্স সম্পর্ক কী?'
        },
        options: [
          {
            en: 'The FastAPI class directly inherits from Starlette: "class FastAPI(Starlette):", meaning all Starlette routing, middleware, and request features are natively available in FastAPI',
            bn: 'FastAPI ক্লাস সরাসরি Starlette থেকে ইনহেরিট করে: "class FastAPI(Starlette):", অর্থাৎ Starlette-এর সমস্ত রাউটিং, মিডলওয়্যার ও রিকোয়েস্ট ফিচার সরাসরি FastAPI-তে উপস্থিত'
          },
          {
            en: 'Starlette is a database engine written in C++',
            bn: 'Starlette হলো সি++ ভাষায় তৈরি একটি ডাটাবেজ ইঞ্জিন'
          },
          {
            en: 'FastAPI and Starlette are competing alternative frameworks that cannot coexist',
            bn: 'FastAPI ও Starlette একে অপরের প্রতিদ্বন্দ্বী ফ্রেমওয়ার্ক এবং একসাথে চলতে পারে না'
          },
          {
            en: 'Starlette is an HTML templating engine like Jinja2',
            bn: 'Starlette হলো জিনজার মতো একটি এইচটিএমএল টেমপ্লেট ইঞ্জিন'
          }
        ],
        answer: 0,
        hint: {
          en: 'FastAPI is a direct subclass of Starlette enriched with Pydantic validation.',
          bn: 'FastAPI হলো মূলত Starlette-এর সাব-ক্লাস যার সাথে Pydantic যুক্ত করা হয়েছে।'
        },
        explanation: {
          en: 'FastAPI inherits directly from Starlette. It adds Pydantic data validation, dependency injection, and OpenAPI schema generation on top of Starlette\'s core ASGI foundation.',
          bn: 'FastAPI সরাসরি Starlette-এর ওপর নির্মিত। Starlette এর ASGI রাউটিং ঠিক রেখে FastAPI তাতে ডাটা ভ্যালিডেশন ও ডকুমেন্টেশন যোগ করেছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'paths-and-params',
    title: {
      en: 'Paths & Query Parameters — Validation, Types & Metadata',
      bn: 'পাথ ও কোয়েরি প্যারামিটার — ভ্যালিডেশন, টাইপ ও মেটাডাটা'
    }
  }
};
