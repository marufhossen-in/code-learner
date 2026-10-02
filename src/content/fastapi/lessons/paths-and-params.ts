import type { Lesson } from '../../../lib/types';

export const PathsAndParamsLesson: Lesson = {
  slug: 'paths-and-params',
  tech: 'fastapi',
  title: {
    en: 'Paths & Query Parameters — Validation, Types & Metadata',
    bn: 'পাথ ও কোয়েরি প্যারামিটার — ভ্যালিডেশন, টাইপ ও মেটাডাটা'
  },
  summary: {
    en: 'FastAPI automatically extracts, validates, and casts path and query parameters from incoming HTTP URLs using Python type hints. In this lesson, you will master dynamic path parameters, query defaults, Path() and Query() validation constraints (ge, le, min_length), Enum dropdown parameters, and static route ordering rules.',
    bn: 'FastAPI পাইথন টাইপ নোটেশন দেখে ইউআরএল থেকে পাথ ও কোয়েরি প্যারামিটার স্বয়ংক্রিয়ভাবে আলাদা, রূপান্তর ও যাচাই করে। এই পাঠে আপনি ডায়নামিক পাথ প্যারামিটার, কোয়েরি ডিফল্ট মান, Path() ও Query() ভ্যালিডেশন সীমাবদ্ধতা (ge, le, min_length), Enum ড্রপডাউন এবং স্ট্যাটিক রুটের ক্রমিক নিয়ম গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'paths-and-params-architecture',
      text: {
        en: 'The Path and Query Parameter Resolution Architecture',
        bn: 'পাথ ও কোয়েরি প্যারামিটার রেজোলিউশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you define route functions in FastAPI, arguments appearing in the path template (such as \'{id}\') are captured as Path Parameters. Any remaining function arguments without path placeholders are automatically extracted from the URL query string as Query Parameters, parsed into native Python types, and documented in the OpenAPI schema.',
        bn: 'যখন আপনি FastAPI-তে রুট ফাংশন তৈরি করেন, তখন পাথের ভেতরে বন্ধনীতে থাকা চলকগুলো (\'{id}\') পাথ প্যারামিটার হিসেবে ধরা হয়। আর যেসব আর্গুমেন্ট পাথে থাকে না সেগুলো নিজে থেকেই ইউআরএল কোয়েরি স্ট্রিং থেকে কোয়েরি প্যারামিটার হিসেবে পড়া হয়, পাইথন টাইপে রূপান্তরিত হয় এবং OpenAPI স্কিমায় নথিভুক্ত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Path Parameter ({param})',
          def: {
            en: 'A variable segment declared directly within the URL route template identifying a specific resource (e.g. /users/{user_id}).',
            bn: 'ইউআরএল রুটের নির্দিষ্ট অংশের চলক যা কোনো সুনির্দিষ্ট রিসোর্স চিহ্নিত করতে ব্যবহৃত হয় (যেমন /users/{user_id})।'
          }
        },
        {
          term: 'Query Parameter (?param=val)',
          def: {
            en: 'Key-value pairs appended after the question mark in the URL used for filtering, pagination, or optional sorting criteria.',
            bn: 'ইউআরএলের প্রশ্নবোধক চিহ্নের পর থাকা কি-ভ্যালু জোড়া যা ডাটা ফিল্টারিং, পেজিনেশন বা বাছাইয়ের কাজে লাগে।'
          }
        },
        {
          term: 'Path() & Query() Modifiers',
          def: {
            en: 'FastAPI utility functions providing granular metadata (title, description) and numeric/string validation constraints (gt, le, regex).',
            bn: 'FastAPI হেল্পার ফাংশন যা প্যারামিটারে অতিরিক্ত মেটাডাটা এবং সংখ্যা বা টেক্সটের বৈধতার সীমা (gt, le, regex) নির্ধারণ করে।'
          }
        },
        {
          term: 'Enum Parameter Types',
          def: {
            en: 'Python Enum subclasses restricting valid inputs to a predefined set of choices, rendered as dropdown menus in Swagger UI.',
            bn: 'পাইথন Enum সাব-ক্লাস যা ইনপুটকে নির্দিষ্ট কিছু অনুমোদিত মানের মধ্যে সীমাবদ্ধ রাখে এবং Swagger UI-তে ড্রপডাউন মেনু তৈরি করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'parameter-validation-matrix',
      text: {
        en: 'Parameter Validation Constraints Matrix',
        bn: 'প্যারামিটার ভ্যালিডেশন সীমাবদ্ধতা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Constraint', bn: 'সীমাবদ্ধতা' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Validation Enforcement', bn: 'ভ্যালিডেশন ভূমিকা' }
      ],
      rows: [
        [
          { en: 'Greater Than (gt)', bn: 'Greater Than (gt)' },
          { en: 'Path(gt=0)', bn: 'Path(gt=0)' },
          { en: 'Rejects 0 or negative numbers; parameter must be strictly positive', bn: '০ বা ঋণাত্মক সংখ্যা আটকে দেয়; মানটি অবশ্যই ধনাত্মক হতে হয়' }
        ],
        [
          { en: 'Less Than or Equal (le)', bn: 'Less Than or Equal (le)' },
          { en: 'Query(le=100)', bn: 'Query(le=100)' },
          { en: 'Caps maximum allowable integer (e.g. pagination limit cannot exceed 100)', bn: 'সর্বোচ্চ সীমা বেঁধে দেয় (যেমন পেজিনেশনে ১০০-এর বেশি আইটেম নেওয়া যাবে না)' }
        ],
        [
          { en: 'String Length Boundaries', bn: 'টেক্সট দৈর্ঘ্যের সীমা' },
          { en: 'Query(min_length=3, max_length=50)', bn: 'Query(min_length=3, max_length=50)' },
          { en: 'Ensures search keywords meet minimum length and do not exceed memory caps', bn: 'সার্চ কিওয়ার্ডের সর্বনিম্ন ও সর্বোচ্চ অক্ষর সীমা নির্ধারণ করে' }
        ],
        [
          { en: 'Regular Expression Match', bn: 'রেগুলার এক্সপ্রেশন মেলা' },
          { en: 'Query(pattern="^[a-z0-9_-]+$")', bn: 'Query(pattern="^[a-z0-9_-]+$")' },
          { en: 'Enforces strict alphanumeric formatting for slugs and machine tokens', bn: 'স্লাগ বা কোডের জন্য নির্দিষ্ট অক্ষর ও সংখ্যার প্যাটার্ন নিশ্চিত করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'param-dispatch-simulation',
      text: {
        en: 'Working Path Extraction and Query Pagination Simulation',
        bn: 'কার্যকরী পাথ নিষ্কাশন ও কোয়েরি পেজিনেশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of FastAPI Parameter Extraction and Numeric Bounds Check
function validateParams(pathVal, queryLimit) {
  // 1. Path param item_id: int = Path(gt=0)
  const itemId = parseInt(pathVal, 10);
  if (Number.isNaN(itemId) || itemId <= 0) {
    return { valid: false, error: 'Path parameter item_id must be an integer greater than 0' };
  }

  // 2. Query param limit: int = Query(default=20, le=100)
  let limit = queryLimit !== undefined ? parseInt(queryLimit, 10) : 20;
  if (Number.isNaN(limit) || limit > 100) {
    return { valid: false, error: 'Query parameter limit cannot exceed 100' };
  }

  return { valid: true, itemId, limit };
}

// Case A: Valid request (/items/42?limit=15)
const successCase = validateParams('42', '15');

// Case B: Violation of le=100 constraint (/items/42?limit=500)
const failureCase = validateParams('42', '500');

console.log('Valid request item ID:', successCase.itemId);
// -> Valid request item ID: 42
console.log('Valid request limit count:', successCase.limit);
// -> Valid request limit count: 15
console.log('Boundary failure valid status:', failureCase.valid);
// -> Boundary failure valid status: false`,
      caption: {
        en: 'Validating item 42 with limit 15 and rejecting limit 500 exceeding le=100',
        bn: 'আইটেম ৪২ ও লিমিট ১৫ গ্রহণ এবং ১০০ ঊর্ধ্ব লিমিট ৫০০ কে বাতিল করা হচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'route-ordering-rules',
      text: {
        en: 'Route Declaration Ordering and Enum Parameters',
        bn: 'রুটের ক্রমিক নিয়ম এবং Enum প্যারামিটার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In FastAPI, path operations are evaluated in exact top-to-bottom declaration order. If you define dynamic route "/users/{user_id}" before static route "/users/me", FastAPI matches "me" as the dynamic {user_id} and attempts to cast it into an integer, immediately returning an HTTP 422 error. Fixed static routes must strictly precede dynamic path patterns.',
        bn: 'FastAPI-তে রুটগুলো কোডে লেখার ক্রম অনুসারে উপর থেকে নিচে ক্রমানুসারে মেলায়। যদি আপনি স্ট্যাটিক রুট "/users/me"-এর আগে ডায়নামিক রুট "/users/{user_id}" লেখেন, তবে FastAPI "me"-কে {user_id} মনে করে সংখ্যায় রূপান্তর করতে গিয়ে ৪২২ এরর দেবে। তাই যেকোনো ডায়নামিক পাথের পূর্বে ফিক্সড স্ট্যাটিক রুট সংজ্ঞায়িত করতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Static Routes First: Always place fixed endpoints like /users/me above dynamic endpoints like /users/{user_id}.',
          bn: '১. স্ট্যাটিক রুট প্রথমে: /users/{user_id}-এর মতো ডায়নামিক পাথের পূর্বে সর্বদা /users/me-এর মতো ফিক্সড রুট রাখুন।'
        },
        {
          en: '2. Enforce Numeric Bounds: Use Path(gt=0) on primary keys to instantly reject zero or negative IDs before database lookups.',
          bn: '২. সংখ্যার সীমা নির্ধারণ: ডাটাবেজে ভুল কুয়েরি ঠেকাতে প্রাইমারি কি-তে Path(gt=0) ব্যবহার করে ০ বা ঋণাত্মক সংখ্যা আটকে দিন।'
        },
        {
          en: '3. Provide Sensible Query Defaults: Always assign defaults to pagination queries, e.g. skip: int = 0, limit: int = 20.',
          bn: '৩. কোয়েরিতে ডিফল্ট মান: পেজিনেশনের ক্ষেত্রে সর্বদা ডিফল্ট মান দিন, যেমন skip: int = 0, limit: int = 20।'
        },
        {
          en: '4. Restrict Choices with Enums: Subclass str and Enum for categorical query arguments to generate clear interactive UI dropdowns.',
          bn: '৪. ড্রপডাউনে Enum ব্যবহার: নির্দিষ্ট কিছু ক্যাটাগরি নির্বাচনের জন্য str ও Enum ব্যবহার করে Swagger UI-তে ড্রপডাউন মেনু তৈরি করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-par-ex1',
      kind: 'mcq',
      topic: 'fastapi route evaluation order bug',
      question: {
        en: 'If "@app.get(\'/users/{user_id}\')" is declared BEFORE "@app.get(\'/users/me\')", what happens when a client sends a GET request to "/users/me"?',
        bn: '"@app.get(\'/users/me\')"-এর পূর্বে "@app.get(\'/users/{user_id}\')" ঘোষিত থাকলে ক্লায়েন্ট "/users/me"-তে রিকোয়েস্ট পাঠালে কী ঘটবে?',
      },
      options: [
        {
          en: 'FastAPI matches the first route, assumes user_id="me", fails integer type casting, and returns an HTTP 422 Unprocessable Entity error',
          bn: 'FastAPI প্রথম রুটটির সাথে মিলিয়ে "me"-কে user_id ধরে নেয় এবং পূর্ণসংখ্যায় রূপান্তর করতে ব্যর্থ হয়ে ৪২২ এরর দেয়'
        },
        {
          en: 'FastAPI automatically reorders the route functions in Python memory',
          bn: 'FastAPI মেমরিতে নিজে থেকেই রুট ফাংশনগুলোর ক্রম ঠিক করে নেয়'
        },
        {
          en: 'The server crashes with a FatalExecutionError',
          bn: 'সার্ভার FatalExecutionError দিয়ে সাথে সাথে ক্র্যাশ করে'
        },
        {
          en: 'The request is forwarded to the Nginx reverse proxy',
          bn: 'রিকোয়েস্টটি Nginx রিভার্স প্রক্সির কাছে পাঠিয়ে দেওয়া হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'FastAPI evaluates routes sequentially from top to bottom.',
        bn: 'FastAPI উপর থেকে নিচে ক্রমানুসারে রুট মেলায়।'
      },
      explanation: {
        en: 'Route evaluation is strictly top-to-bottom. Because /users/{user_id} matches any single path segment, "me" is captured as user_id and fails int validation.',
        bn: 'রুট উপর থেকে নিচে খোঁজা হয়। /users/{user_id} আগে থাকলে "me" সেখানে প্রবেশ করে এবং পূর্ণসংখ্যা না হওয়ায় ৪২২ ভ্যালিডেশন এরর হয়।'
      }
    },
    {
      id: 'fa-par-ex2',
      kind: 'mcq',
      topic: 'boolean query parameter parsing in fastapi',
      question: {
        en: 'In a route defined as "async def get_items(active: bool = False):", which of the following query strings will FastAPI parse as boolean True?',
        bn: '"async def get_items(active: bool = False):" রুটে নিচের কোন কোয়েরি স্ট্রিংটি FastAPI বুলিয়ান True হিসেবে রূপান্তর করবে?',
      },
      options: [
        {
          en: 'Any of: ?active=true, ?active=1, ?active=yes, or ?active=on',
          bn: '?active=true, ?active=1, ?active=yes, অথবা ?active=on-এর যেকোনোটি'
        },
        {
          en: 'Only the exact lowercase string "?active=true"',
          bn: 'কেবল হুবহু ছোট হাতের অক্ষরে লেখা "?active=true"'
        },
        {
          en: 'Boolean query parameters are not supported; clients must pass integers',
          bn: 'বুলিয়ান কোয়েরি প্যারামিটার অসমর্থিত; ক্লায়েন্টকে সংখ্যা পাঠাতে হয়'
        },
        {
          en: 'Only when active is wrapped in double quotes "?active=\\"true\\""',
          bn: 'কেবল ডাবল কোটেশন থাকলে "?active=\\"true\\""'
        }
      ],
      answer: 0,
      hint: {
        en: 'FastAPI and Pydantic recognize truthy strings like 1, true, yes, and on.',
        bn: 'FastAPI ও Pydantic নিজে থেকেই 1, true, yes এবং on-কে True হিসেবে ধরে নেয়।'
      },
      explanation: {
        en: 'FastAPI is forgiving with booleans: values like "1", "true", "True", "on", and "yes" are all cleanly converted to Python True.',
        bn: 'বুলিয়ান পার্সিংয়ে FastAPI অত্যন্ত নমনীয়: "1", "true", "yes" বা "on" পাঠানো হলে তা সরাসরি পাইথনের True মানে রূপান্তরিত হয়।'
      }
    },
    {
      id: 'fa-par-ex3',
      kind: 'mcq',
      topic: 'query parameter metadata and constraints',
      question: {
        en: 'How do you declare an optional query parameter "search" with a minimum length of 3 characters and maximum of 50 characters in FastAPI?',
        bn: 'FastAPI-তে সর্বনিম্ন ৩ এবং সর্বোচ্চ ৫০ অক্ষরের একটি ঐচ্ছিক কোয়েরি প্যারামিটার "search" কীভাবে সংজ্ঞায়িত করবেন?'
      },
      options: [
        {
          en: 'search: str | None = Query(default=None, min_length=3, max_length=50)',
          bn: 'search: str | None = Query(default=None, min_length=3, max_length=50)'
        },
        {
          en: 'search: str = min_max(3, 50)',
          bn: 'search: str = min_max(3, 50)'
        },
        {
          en: 'search = input_bounds(3, 50, optional=True)',
          bn: 'search = input_bounds(3, 50, optional=True)'
        },
        {
          en: 'search: Optional = DatabaseConstraint(3, 50)',
          bn: 'search: Optional = DatabaseConstraint(3, 50)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Query helper specifies default values and length boundaries like min_length and max_length.',
        bn: 'Query হেল্পারে default=None দিয়ে ঐচ্ছিক করা হয় এবং min_length ও max_length দিয়ে অক্ষরের সীমা নির্ধারণ করা হয়।'
      },
      explanation: {
        en: 'Using Query(default=None, min_length=3, max_length=50) defines an optional query parameter while enforcing string boundary rules.',
        bn: 'Query(default=None, min_length=3, max_length=50) ব্যবহার করলে প্যারামিটারটি ঐচ্ছিক থাকে এবং অক্ষরের সর্বনিম্ন ও সর্বোচ্চ সীমা প্রযুক্ত হয়।'
      }
    },
    {
      id: 'fa-par-ex4',
      kind: 'mcq',
      topic: 'enum parameter swagger ui rendering',
      question: {
        en: 'What advantage does using a Python Enum for a path or query parameter provide in the generated Swagger UI documentation?',
        bn: 'পাথ বা কোয়েরি প্যারামিটারে পাইথন Enum ব্যবহার করলে তৈরিকৃত Swagger UI ডকুমেন্টেশনে কোন সুবিধা পাওয়া যায়?'
      },
      options: [
        {
          en: 'Swagger UI automatically renders a dropdown select menu showing only the valid predefined enum options, preventing client typos and improving developer experience',
          bn: 'Swagger UI স্বয়ংক্রিয়ভাবে একটি ড্রপডাউন সিলেক্ট মেনু তৈরি করে যাতে কেবল অনুমোদিত অপশনগুলো দৃশ্যমান থাকে'
        },
        {
          en: 'It encrypts the URL string using quantum cryptography',
          bn: 'এটি কোয়ান্টাম ক্রিপ্টোগ্রাফি দিয়ে ইউআরএল এনক্রিপ্ট করে'
        },
        {
          en: 'It converts the route from HTTP/1.1 to Bluetooth',
          bn: 'এটি রুটকে ব্লুটুথ প্রোটোকলে রূপান্তর করে'
        },
        {
          en: 'Enums reduce the size of the PostgreSQL database',
          bn: 'Enum পোস্টগ্রেস ডাটাবেজের আকার ছোট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'OpenAPI generates an enum schema that Swagger renders as a selectable dropdown.',
        bn: 'OpenAPI নিজে থেকেই Enum স্কিমা তৈরি করে যা Swagger-এ ড্রপডাউন হিসেবে প্রদর্শিত হয়।'
      },
      explanation: {
        en: 'When a parameter type is an Enum, OpenAPI specifies allowed values. Swagger UI renders this as a clean dropdown menu.',
        bn: 'Enum ব্যবহার করলে OpenAPI অনুমোদিত তালিকা তৈরি করে, যা Swagger UI-তে সহজে নির্বাচনের জন্য ড্রপডাউন হিসেবে ফুটে ওঠে।'
      }
    }
  ],
  quiz: {
    id: 'paths-and-params-quiz',
    title: {
      en: 'FastAPI Paths & Query Parameters Quiz',
      bn: 'FastAPI পাথ ও কোয়েরি প্যারামিটার কুইজ'
    },
    questions: [
      {
        id: 'q-ellipsis-required-query-parameter',
        kind: 'mcq',
        topic: 'declaring required query parameters with Query ellipsis',
        question: {
          en: 'In older Python or FastAPI code, how do you mark a query parameter as strictly required when using the Query() modifier?',
          bn: 'Query() হেল্পার ব্যবহারের সময় কীভাবে একটি কোয়েরি প্যারামিটারকে বাধ্যতামূলক (required) হিসেবে চিহ্নিত করা হয়?'
        },
        options: [
          {
            en: 'Pass an ellipsis (...) as the first argument: "q: str = Query(..., min_length=3)"',
            bn: 'প্রথম আর্গুমেন্ট হিসেবে ইলিপসিস (...) পাস করে: "q: str = Query(..., min_length=3)"'
          },
          {
            en: 'Pass required=True to the Query function',
            bn: 'Query ফাংশনে required=True পাস করে'
          },
          {
            en: 'Declare the variable in all uppercase letters',
            bn: 'চলকের নামটি সব বড় হাতের অক্ষরে লিখে'
          },
          {
            en: 'Required query parameters are not permitted in FastAPI',
            bn: 'FastAPI-তে বাধ্যতামূলক কোয়েরি প্যারামিটার রাখা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Python ellipsis (...) denotes a missing default value, signifying the parameter is required.',
          bn: 'পাইথনের ইলিপসিস (...) চিহ্নটি ডিফল্ট মান না থাকার সংকেত দেয়, অর্থাৎ ফিল্ডটি বাধ্যতামূলক।'
        },
        explanation: {
          en: 'In Pydantic and FastAPI, passing Ellipsis (...) as the default argument indicates that the parameter has no default and is strictly required.',
          bn: 'Query(...)-এ ইলিপসিস দিলে বোঝায় যে কোনো ডিফল্ট মান নেই এবং ক্লায়েন্টকে অবশ্যই এই প্যারামিটারটি পাঠাতে হবে।'
        }
      },
      {
        id: 'q-path-converter-slash-support',
        kind: 'mcq',
        topic: 'matching full file paths using path converter',
        question: {
          en: 'How can you capture a path parameter that itself contains directory slashes (such as "/files/documents/2026/report.pdf")?',
          bn: 'স্ল্যাশ / চিহ্নের সমন্বয়ে গঠিত পুরো ফাইল পাথ প্যারামিটার (যেমন "/files/documents/2026/report.pdf") কীভাবে ধরতে হয়?'
        },
        options: [
          {
            en: 'Declare the parameter with the path converter syntax: "@app.get(\'/files/{file_path:path}\')"',
            bn: 'পাথ কনভার্টার সিনট্যাক্স ব্যবহার করে: "@app.get(\'/files/{file_path:path}\')"'
          },
          {
            en: 'File paths containing slashes are rejected by Starlette',
            bn: 'স্ল্যাশযুক্ত পাথ Starlette কখনোই গ্রহণ করতে পারে না'
          },
          {
            en: 'Escape each slash with double backslashes in the route template',
            bn: 'রুটের ভেতর প্রতিটি স্ল্যাশকে ব্যাকস্ল্যাশ দিয়ে এসকেপ করে'
          },
          {
            en: 'Replace slashes with underscore characters before sending to the server',
            bn: 'সার্ভারে পাঠানোর আগে স্ল্যাশ বদলে আন্ডারস্কোর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The :path converter instructs Starlette to match any characters including slashes.',
          bn: ':path কনভার্টার Starlette-কে স্ল্যাশ সহ পুরো টেক্সট মেলাতে নির্দেশ দেয়।'
        },
        explanation: {
          en: 'Using {file_path:path} tells Starlette to match arbitrary text including forward slashes, capturing full paths like "documents/2026/report.pdf".',
          bn: '{file_path:path} ব্যবহার করলে স্ল্যাশ সহ পুরো ডিরেক্টরি পাথ একটিমাত্র ভেরিয়েবলে সংগৃহীত হয়।'
        }
      },
      {
        id: 'q-numeric-validation-ge-le-error',
        kind: 'mcq',
        topic: 'fastapi 422 error details on ge le failure',
        question: {
          en: 'If a route specifies "age: int = Path(ge=18, le=120)", what does FastAPI return if a user requests with age=15?',
          bn: 'যদি রুটে "age: int = Path(ge=18, le=120)" থাকে, তবে ব্যবহারকারী age=15 পাঠালে FastAPI কী ফেরত পাঠাবে?'
        },
        options: [
          {
            en: 'HTTP 422 with a validation error payload stating "Input should be greater than or equal to 18"',
            bn: 'এইচটিটিপি ৪২২ সহ "Input should be greater than or equal to 18" বিশদ ভ্যালিডেশন এরর মেসেজ'
          },
          {
            en: 'HTTP 200 OK after rounding 15 up to 18 automatically',
            bn: 'HTTP 200 OK রেসপন্স, যেখানে 15 কে নিজে থেকেই 18 এ উন্নীত করা হয়'
          },
          {
            en: 'HTTP 301 Permanent Redirect to the home page',
            bn: 'হোমপেজে এইচটিটিপি ৩০১ পার্মানেন্ট রিডাইরেক্ট'
          },
          {
            en: 'HTTP 500 Internal Server Error due to unhandled Python assertion',
            bn: 'পাইথন অ্যাসার্শন ভঙ্গের কারণে এইচটিটিপি ৫০০ এরর'
          }
        ],
        answer: 0,
        hint: {
          en: 'Failing ge constraint results in a 422 response specifying the minimum bound.',
          bn: 'ge ভঙ্গের কারণে ৪২২ এরর কোড আসে এবং নূন্যতম সীমার বার্তা দেওয়া হয়।'
        },
        explanation: {
          en: 'FastAPI enforces numeric constraints automatically via Pydantic. An input violating ge=18 returns HTTP 422 with a structured error detail.',
          bn: 'Pydantic নিজে থেকেই ge=18 সীমানা রক্ষা করে। ১৫ পাঠালে ফ্রেমওয়ার্ক সাথে সাথে ৪২২ এরর পাঠিয়ে ক্লায়েন্টকে ভুল জানায়।'
        }
      },
      {
        id: 'q-header-and-cookie-parameters',
        kind: 'mcq',
        topic: 'extracting headers and cookies via Header and Cookie',
        question: {
          en: 'How does FastAPI allow extracting HTTP headers and cookies as view function parameters?',
          bn: 'FastAPI কীভাবে এইচটিটিপি হেডার ও কুকিকে সরাসরি ভিউ ফাংশনের প্যারামিটার হিসেবে গ্রহণের সুবিধা দেয়?'
        },
        options: [
          {
            en: 'Using the Header() and Cookie() parameter helpers, e.g. "user_agent: str | None = Header(default=None)" and "session_id: str | None = Cookie(default=None)"',
            bn: 'Header() ও Cookie() হেল্পার ব্যবহার করে, যেমন "user_agent: str | None = Header(default=None)" এবং "session_id: str | None = Cookie(default=None)"'
          },
          {
            en: 'Headers and cookies can only be accessed by reading raw socket files on disk',
            bn: 'হেডার ও কুকি কেবল ডিস্ক থেকে কাঁচা সকেট ফাইল পড়ে নেওয়া যায়'
          },
          {
            en: 'FastAPI does not support reading cookies',
            bn: 'FastAPI কুকি রিড করা সমর্থন করে না'
          },
          {
            en: 'By decrypting network packets inside an asyncio background thread',
            bn: 'ব্যাকগ্রাউন্ড থ্রেডে নেটওয়ার্ক প্যাকেট ডিক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'FastAPI provides Header and Cookie decorators mirroring Path and Query.',
          bn: 'FastAPI-তে Path ও Query-এর মতোই Header এবং Cookie হেল্পার রয়েছে।'
        },
        explanation: {
          en: 'FastAPI provides Header() and Cookie() to extract and validate request headers and cookies with automatic underscore-to-hyphen conversion.',
          bn: 'Header() ও Cookie() হেল্পার দিয়ে সহজেই ইনকামিং রিকোয়েস্টের হেডার ও কুকি পাইথন চলকে রূপান্তর করে যাচাই করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'bodies-and-models',
    title: {
      en: 'Pydantic Models & Request Bodies — Validation, Schemas & response_model',
      bn: 'Pydantic মডেল ও রিকোয়েস্ট বডি — ভ্যালিডেশন, স্কিমা ও response_model'
    }
  }
};
