import type { Lesson } from '../../../lib/types';

export const RequestsInFlightLesson: Lesson = {
  slug: 'requests-in-flight',
  tech: 'flask',
  title: {
    en: 'Requests & In-Flight Contexts — Objects, Payloads & LocalProxy',
    bn: 'রিকোয়েস্ট ও ইন-ফ্লাইট কনটেক্সট — অবজেক্ট, পে-লোড ও লোকালপ্রক্সি'
  },
  summary: {
    en: 'The Flask request object provides unified access to query parameters, form data, JSON payloads, and uploaded files. In this lesson, you will master thread-safe LocalProxy mechanics, MultiDict extraction with type defaults, secure file handling with secure_filename, request lifespan storage via the g object, and lifecycle hooks.',
    bn: 'ফ্লাস্ক রিকোয়েস্ট অবজেক্ট কোয়েরি প্যারামিটার, ফর্ম ডাটা, JSON পে-লোড এবং আপলোড করা ফাইল অ্যাক্সেস করার একক মাধ্যম। এই পাঠে আপনি থ্রেড-সেফ LocalProxy মেকানিজম, টাইপ ডিফল্ট সহ MultiDict রিডিং, secure_filename দিয়ে নিরাপদ ফাইল প্রসেসিং, g অবজেক্ট এবং লাইফসাইকেল হুক গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'flask-request-architecture',
      text: {
        en: 'The Flask Request Lifecycle and LocalProxy Architecture',
        bn: 'ফ্লাস্ক রিকোয়েস্ট লাইফসাইকেল ও লোকালপ্রক্সি আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When a web request arrives at a Flask server, the framework pushes an active RequestContext. Instead of requiring you to manually pass a request variable through every internal helper function, Flask exposes a global proxy named request. Internally, Werkzeug LocalProxy inspects thread-local storage, ensuring concurrent worker threads never cross-contaminate request data.',
        bn: 'যখন কোনো ওয়েব রিকোয়েস্ট ফ্লাস্ক সার্ভারে আসে, তখন ফ্রেমওয়ার্ক একটি সক্রিয় RequestContext পুশ করে। প্রতিটি অভ্যন্তরীণ ফাংশনে আলাদা করে request ভেরিয়েবল পাঠানোর ঝামেলা দূর করতে ফ্লাস্ক একটি গ্লোবাল প্রক্সি অবজেক্ট সরবরাহ করে। পর্দার আড়ালে Werkzeug LocalProxy থ্রেড-লোকাল মেমরি পরীক্ষা করে, যার ফলে একসাথে একাধিক রিকোয়েস্ট চললেও কারও ডাটা অন্যের সাথে মিশে যায় না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'LocalProxy',
          def: {
            en: 'A Werkzeug proxy forwarding operations dynamically to the object bound to the current thread or coroutine context.',
            bn: 'একটি Werkzeug প্রক্সি যা প্রতিটি মেথড কলকে বর্তমান থ্রেড বা কো-রুটিনের সাথে যুক্ত আসল অবজেক্টে ডায়নামিকালি পাঠিয়ে দেয়।'
          }
        },
        {
          term: 'MultiDict (request.args & form)',
          def: {
            en: 'A dictionary subclass capable of storing multiple values for the same key, such as repeated query parameters (?tag=python&tag=flask).',
            bn: 'ডিকশনারির একটি বিশেষ রূপ যা একই নামের একাধিক মান (যেমন ?tag=python&tag=flask) সংরক্ষণ করতে পারে।'
          }
        },
        {
          term: 'secure_filename()',
          def: {
            en: 'A Werkzeug utility sanitizing user-supplied file names by stripping dangerous directory traversal sequences (like ../../).',
            bn: 'একটি Werkzeug সিকিউরিটি ফাংশন যা আপলোড করা ফাইলের নাম থেকে বিপজ্জনক ডিরেক্টরি ট্রাভার্সাল (যেমন ../../) মুছে ফেলে নিরাপদ নাম দেয়।'
          }
        },
        {
          term: 'The g Object',
          def: {
            en: 'An application context namespace for stashing arbitrary data (such as authenticated user or database handles) during a single request.',
            bn: 'অ্যাপ্লিকেশন কনটেক্সটের একটি বিশেষ অবজেক্ট যা একক রিকোয়েস্ট চলাকালীন যেকোনো প্রয়োজনীয় ডাটা (যেমন বর্তমান ইউজার বা ডাটাবেজ সেশন) ধরে রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'payload-extraction-matrix',
      text: {
        en: 'Request Data Extraction and Source Matrix',
        bn: 'রিকোয়েস্ট ডাটা নিষ্কাশন ও উৎস ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Request Attribute', bn: 'রিকোয়েস্ট এট্রিবিউট' },
        { en: 'Payload Format', bn: 'পে-লোড ফরম্যাট' },
        { en: 'Recommended Access Pattern', bn: 'প্রস্তাবিত কোড প্যাটার্ন' }
      ],
      rows: [
        [
          { en: 'request.args', bn: 'request.args' },
          { en: 'URL query string parameters', bn: 'ইউআরএল কোয়েরি স্ট্রিং প্যারামিটার' },
          { en: 'request.args.get("page", default=1, type=int)', bn: 'request.args.get("page", default=1, type=int)' }
        ],
        [
          { en: 'request.form', bn: 'request.form' },
          { en: 'HTML form submissions (POST/PUT)', bn: 'এইচটিএমএল ফর্ম সাবমিশন (POST/PUT)' },
          { en: 'request.form.get("email", "").strip()', bn: 'request.form.get("email", "").strip()' }
        ],
        [
          { en: 'request.get_json()', bn: 'request.get_json()' },
          { en: 'JSON request payload (application/json)', bn: 'JSON রিকোয়েস্ট পে-লোড (application/json)' },
          { en: 'data = request.get_json(silent=True) or {}', bn: 'data = request.get_json(silent=True) or {}' }
        ],
        [
          { en: 'request.files', bn: 'request.files' },
          { en: 'Multipart file uploads (enctype)', bn: 'মাল্টিপার্ট ফাইল আপলোড (enctype)' },
          { en: 'file = request.files.get("avatar")', bn: 'file = request.files.get("avatar")' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'payload-simulation-code',
      text: {
        en: 'Working Query Parameter Parsing and secure_filename Simulation',
        bn: 'কার্যকরী কোয়েরি প্যারামিটার পার্সিং ও secure_filename সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of MultiDict Query Parsing and secure_filename Sanitization
function parseQueryString(queryString) {
  const params = new Map();
  const pairs = queryString.replace(/^\\?/, '').split('&');
  for (const pair of pairs) {
    if (!pair) continue;
    const [rawKey, rawVal] = pair.split('=');
    const key = decodeURIComponent(rawKey);
    const val = decodeURIComponent(rawVal || '');
    if (!params.has(key)) params.set(key, []);
    params.get(key).push(val);
  }
  return {
    get: (key, defaultValue = null, typeFn = String) => {
      const list = params.get(key);
      if (!list || list.length === 0) return defaultValue;
      return typeFn(list[0]);
    }
  };
}

function secureFilename(untrustedName) {
  // Strips path separators and directory traversal sequences (../../)
  return untrustedName
    .replace(/[\\\\/]/g, '')
    .replace(/\\.+/g, '.')
    .replace(/[^A-Za-z0-9_.-]/g, '_');
}

// 1. Simulating query params (?page=2&limit=25)
const query = parseQueryString('?page=2&limit=25');
const pageNumber = query.get('page', 1, (v) => parseInt(v, 10));

// 2. Simulating malicious path traversal upload
const maliciousInput = '../../../etc/passwd.png';
const sanitizedName = secureFilename(maliciousInput);

console.log('Extracted typed page number:', pageNumber);
// -> Extracted typed page number: 2
console.log('Sanitized safe file name:', sanitizedName);
// -> Sanitized safe file name: etcpasswd.png`,
      caption: {
        en: 'Parsing page 2 integer query param and stripping path traversal from upload file name',
        bn: '২ নম্বর পেজ কুয়েরি প্যারামিটার পার্সিং এবং ফাইলের নাম থেকে পাথ ট্রাভার্সাল দূরীকরণ'
      }
    },
    {
      type: 'heading',
      id: 'lifecycle-hooks-and-g',
      text: {
        en: 'Request Lifecycle Hooks and Context Teardown',
        bn: 'রিকোয়েস্ট লাইফসাইকেল হুক ও কনটেক্সট টিয়ারডাউন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Flask offers middleware-style lifecycle hooks decorated with @app.before_request and @app.after_request. The before_request callbacks execute prior to view routing (ideal for authentication checks), while after_request callbacks receive the generated Response object, allowing modification of HTTP security headers before sending bytes to the client.',
        bn: 'ফ্লাস্কে মিডলওয়্যারের মতো কাজ করার জন্য @app.before_request এবং @app.after_request ডেকোরেটর রয়েছে। before_request কলব্যাক ভিউ ফাংশন চলার আগে কার্যকর হয় (যা অথেনটিকেশন যাচাইয়ের জন্য আদর্শ), আর after_request কলব্যাক তৈরি হওয়া Response অবজেক্ট গ্রহণ করে, ফলে ক্লায়েন্টকে পাঠানোর আগে যেকোনো এইচটিটিপি সিকিউরিটি হেডার যুক্ত করা সম্ভব হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Never Save Raw Upload Names: Always pass user filenames through secure_filename() before writing to the server filesystem.',
          bn: '১. কাঁচা ফাইলের নাম সেভ করবেন না: সার্ভারের ফাইল সিস্টেমে সেভ করার আগে সর্বদা secure_filename() দিয়ে নাম পরিশোধন করুন।'
        },
        {
          en: '2. Use silent=True for JSON: Call request.get_json(silent=True) to prevent unhandled 400 Bad Request crashes on malformed bodies.',
          bn: '২. JSON-এ silent=True ব্যবহার: ভুল ফরম্যাটের ডাটাতে ৪০০ এরর ক্র্যাশ এড়াতে request.get_json(silent=True) ব্যবহার করুন।'
        },
        {
          en: '3. Store Per-Request State in g: Use the g object for database connections or authenticated user handles, never global module variables.',
          bn: '৩. g অবজেক্টে রিকোয়েস্ট ডাটা রাখুন: ডাটাবেজ সেশন বা ইউজারের তথ্য সংরক্ষণে g ব্যবহার করুন, মডিউল ভেরিয়েবলে রাখবেন না।'
        },
        {
          en: '4. Teardown Database Sessions: Register @app.teardown_appcontext callbacks to ensure database connections close reliably on every request exit.',
          bn: '৪. ডাটাবেজ কানেকশন বন্ধ: রিকোয়েস্ট শেষ হওয়ার সাথে সাথে ডাটাবেজ সেশন মুক্ত করতে @app.teardown_appcontext ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-req-ex1',
      kind: 'mcq',
      topic: 'how localproxy achieves thread safety',
      question: {
        en: 'How does Flask global "request" object achieve thread safety when multiple clients submit requests concurrently to a multi-threaded server?',
        bn: 'মাল্টি-থ্রেডেড সার্ভারে একাধিক ক্লায়েন্ট একসাথে রিকোয়েস্ট পাঠালে ফ্লাস্কের গ্লোবাল "request" অবজেক্ট কীভাবে থ্রেড-সেফটি বজায় রাখে?',
      },
      options: [
        {
          en: 'It is a Werkzeug LocalProxy that dynamically looks up the active RequestContext tied specifically to the current thread ID or greenlet at runtime',
          bn: 'এটি একটি Werkzeug LocalProxy যা রানটাইমে বর্তমান থ্রেড আইডি বা গ্রিনলেটের সাথে যুক্ত নির্দিষ্ট RequestContext খুঁজে বের করে'
        },
        {
          en: 'It locks the entire operating system so only one user can make an HTTP request at a time',
          bn: 'এটি অপারেটিং সিস্টেম লক করে দেয় যাতে একবারে একজন ব্যবহারকারীই রিকোয়েস্ট পাঠাতে পারে'
        },
        {
          en: 'It writes request data to a physical text file on the hard disk',
          bn: 'এটি রিকোয়েস্টের ডাটা হার্ডডিস্কে একটি টেক্সট ফাইলে লিখে রাখে'
        },
        {
          en: 'Thread safety is not supported; Flask can only run in single-process mode',
          bn: 'থ্রেড সেফটি সমর্থিত নয়; ফ্লাস্ক কেবল সিঙ্গেল-প্রসেসে চলতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'LocalProxy delegates all method lookups to the thread-local context.',
        bn: 'LocalProxy সমস্ত অপারেশনকে থ্রেড-লোকাল কনটেক্সটে পাঠিয়ে দেয়।'
      },
      explanation: {
        en: 'The request object is not a direct dictionary; it is a LocalProxy. Whenever code reads request.args, it looks up the context for the current executing thread.',
        bn: 'request কোনো সাধারণ ডিকশনারি নয়; এটি একটি LocalProxy যা কল করার সময় বর্তমান থ্রেডের কনটেক্সট থেকে সঠিক ডাটা তুলে আনে।'
      }
    },
    {
      id: 'fl-req-ex2',
      kind: 'mcq',
      topic: 'secure_filename path traversal protection',
      question: {
        en: 'What severe security vulnerability occurs if an application saves uploaded files using the raw "file.filename" provided directly by the user?',
        bn: 'ইউজারের দেওয়া সরাসরি কাঁচা "file.filename" ব্যবহার করে ফাইল সেভ করলে কোন মারাত্মক নিরাপত্তা ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'Directory Traversal: an attacker can supply a filename like "../../etc/cron.d/hack" to overwrite critical operating system files outside the uploads directory',
          bn: 'ডিরেক্টরি ট্রাভার্সাল: আক্রমণকারী "../../etc/cron.d/hack"-এর মতো নাম পাঠিয়ে আপলোড ফোল্ডারের বাইরের জরুরি সিস্টেম ফাইল ওভাররাইট করতে পারে'
        },
        {
          en: 'The database server immediately changes its root password',
          bn: 'ডাটাবেজ সার্ভার তৎক্ষণাৎ তার রুট পাসওয়ার্ড বদলে ফেলে'
        },
        {
          en: 'The user screen turns upside down in the browser',
          bn: 'ব্রাউজারে ব্যবহারকারীর স্ক্রিন উল্টো হয়ে যায়'
        },
        {
          en: 'All Python packages are uninstalled from pip cache',
          bn: 'পিপ ক্যাশ থেকে সমস্ত পাইথন প্যাকেজ আনইনস্টল হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Path traversal allows writing files to arbitrary filesystem paths using ../ sequences.',
        bn: 'পাথ ট্রাভার্সাল হ্যাকারদের ../ চিহ্নের সাহায্যে যেকোনো সিস্টেমে ক্ষতিকর ফাইল লেখার সুযোগ দেয়।'
      },
      explanation: {
        en: 'Without secure_filename, malicious path traversal sequences in filenames escape the target upload directory, enabling remote code execution via arbitrary file writes.',
        bn: 'secure_filename না ব্যবহার করলে আক্রমণকারী ফোল্ডার পেরিয়ে সিস্টেমের মূল ডিরেক্টরিতে ফাইল লিখে সার্ভারের নিয়ন্ত্রণ নিতে পারে।'
      }
    },
    {
      id: 'fl-req-ex3',
      kind: 'mcq',
      topic: 'request args type casting and default value',
      question: {
        en: 'What is the advantage of using "request.args.get(\'limit\', default=10, type=int)" over "int(request.args.get(\'limit\'))"?',
        bn: '"int(request.args.get(\'limit\'))"-এর বদলে "request.args.get(\'limit\', default=10, type=int)" ব্যবহার করার সুবিধা কী?'
      },
      options: [
        {
          en: 'If "limit" is missing or cannot be cast into an integer (e.g. ?limit=abc), it safely falls back to default 10 without raising a ValueError or crashing the view',
          bn: 'যদি "limit" অনুপস্থিত থাকে বা সংখ্যায় রূপান্তর না করা যায় (যেমন ?limit=abc), তবে ক্র্যাশ না করে এটি নিরাপদে ডিফল্ট মান ১০ ব্যবহার করে'
        },
        {
          en: 'It encrypts the limit parameter in RAM memory',
          bn: 'এটি মেমরিতে limit প্যারামিটার এনক্রিপ্ট করে'
        },
        {
          en: 'It prevents the SQL database from creating tables',
          bn: 'এটি ডাটাবেজে টেবিল তৈরিতে বাধা দেয়'
        },
        {
          en: 'It converts the variable into a JavaScript Promise',
          bn: 'এটি ভেরিয়েবলকে জাভাস্ক্রিপ্ট প্রমিজে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The type argument handles conversion errors safely without raising exceptions.',
        bn: 'type আর্গুমেন্টটি কোনো এক্সেপশন না ছুড়ে নিরাপদে টাইপ রূপান্তরের ত্রুটি সামলায়।'
      },
      explanation: {
        en: 'MultiDict.get() with type=int catches ValueError internally and returns the fallback default, preventing client input from crashing the server with 500 errors.',
        bn: 'type=int দিলে ফ্লাস্ক নিজে থেকেই ValueError ধরে ডিফল্ট মান ফেরত দেয়, ফলে ভুল ইনপুট আসলেও ৫০০ ইন্টারনাল এরর হয় না।'
      }
    },
    {
      id: 'fl-req-ex4',
      kind: 'mcq',
      topic: 'role of the g object in flask',
      question: {
        en: 'What is the architectural purpose of the Flask "g" object?',
        bn: 'ফ্লাস্ক "g" অবজেক্টের আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It serves as a thread-safe stash for data that is global to a single request lifespan (such as current authenticated user or open database connection), automatically reset when the context ends',
          bn: 'এটি একক রিকোয়েস্টের জীবনকালে ব্যবহারের জন্য ডাটা (যেমন বর্তমান ইউজার বা ডাটাবেজ কানেকশন) সংরক্ষণের থ্রেড-সেফ জায়গা, যা রিকোয়েস্ট শেষে নিজে থেকেই রিসেট হয়'
        },
        {
          en: 'It is a permanent cache that persists data across all users forever',
          bn: 'এটি একটি স্থায়ী ক্যাশ যা সমস্ত ইউজারের ডাটা চিরতরে জমা রাখে'
        },
        {
          en: 'It manages physical GPU memory allocation for web shaders',
          bn: 'এটি ওয়েব শেডারের জন্য জিপিইউ মেমরি পরিচালনা করে'
        },
        {
          en: 'It controls CSS animations in the user browser window',
          bn: 'এটি ব্রাউজারে সিএসএস অ্যানিমেশন নিয়ন্ত্রণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The g object is an application context global unique to the current request.',
        bn: 'g অবজেক্ট হলো বর্তমান রিকোয়েস্টের জন্য নির্দিষ্ট একটি অ্যাপ্লিকেশন কনটেক্সট ভেরিয়েবল।'
      },
      explanation: {
        en: 'The "g" object (short for general) holds data for the duration of a single request context. Unlike module globals, it is completely isolated per request and destroyed on teardown.',
        bn: 'g অবজেক্ট একটি রিকোয়েস্টের মেয়াদের জন্য ডাটা ধরে রাখে। এটি থ্রেড-সেফ এবং রিকোয়েস্ট শেষ হওয়ার সাথে সাথে ধ্বংস হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'requests-in-flight-quiz',
    title: {
      en: 'Flask Request Handling & LocalProxy Quiz',
      bn: 'ফ্লাস্ক রিকোয়েস্ট হ্যান্ডলিং ও লোকালপ্রক্সি কুইজ'
    },
    questions: [
      {
        id: 'q-after-request-response-modification',
        kind: 'mcq',
        topic: 'after_request hook signature and duties',
        question: {
          en: 'What must an @app.after_request callback function accept and return?',
          bn: 'একটি @app.after_request কলব্যাক ফাংশন আর্গুমেন্ট হিসেবে কী গ্রহণ করে এবং কী রিটার্ন করতে হয়?'
        },
        options: [
          {
            en: 'It must accept the Response object as an argument and must return a Response object (either modified or original)',
            bn: 'এটি আর্গুমেন্ট হিসেবে Response অবজেক্ট গ্রহণ করে এবং অবশ্যই একটি Response অবজেক্ট (পরিবর্তিত বা অপরিবর্তিত) ফেরত দিতে হয়'
          },
          {
            en: 'It accepts only an SQL query string and returns void',
            bn: 'এটি কেবল এসকিউএল কুয়েরি নেয় এবং কিছুই ফেরত দেয় না'
          },
          {
            en: 'It accepts a password string and returns a cryptographic hash',
            bn: 'এটি পাসওয়ার্ড গ্রহণ করে হ্যাশ ফেরত পাঠায়'
          },
          {
            en: 'after_request functions cannot return values',
            bn: 'after_request ফাংশন কোনো মান রিটার্ন করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The after_request hook sits between the view return and the WSGI response transmission.',
          bn: 'after_request হুক ভিউয়ের রিটার্ন এবং ব্রাউজারে রেসপন্স পাঠানোর মাঝখানে কাজ করে।'
        },
        explanation: {
          en: 'after_request receives the response generated by the view. It allows inspecting or altering headers (e.g. adding CORS or CSP headers) and must return a valid Response object.',
          bn: 'after_request ভিউয়ের তৈরি রেসপন্স গ্রহণ করে। এতে সিকিউরিটি বা ক্যাশ হেডার যোগ করে পুনরায় রেসপন্স অবজেক্টটি রিটার্ন করতে হয়।'
        }
      },
      {
        id: 'q-json-silent-parsing-flag',
        kind: 'mcq',
        topic: 'handling invalid json with silent flag',
        question: {
          en: 'Why do production API endpoints often call "request.get_json(silent=True)" instead of "request.get_json()"?',
          bn: 'প্রোডাকশন এপিআইতে "request.get_json()"-এর বদলে প্রায়শই "request.get_json(silent=True)" কেন কল করা হয়?'
        },
        options: [
          {
            en: 'If the incoming request body has invalid JSON or an incorrect Content-Type header, silent=True returns None instead of raising an unhandled 400 Bad Request exception, allowing custom error handling',
            bn: 'যদি ইনকামিং ডাটা ভুল JSON হয় বা হেডার অমিল থাকে, তবে silent=True 400 Bad Request এরর দিয়ে ক্র্যাশ না করে None ফেরত দেয়, যা কাস্টম এরর হ্যান্ডলিং সহজ করে'
          },
          {
            en: 'silent=True encrypts the JSON payload with a secret password',
            bn: 'silent=True পে-লোডকে পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It makes network data transmission silent without sound effects',
            bn: 'এটি কোনো শব্দ সংকেত ছাড়া ডাটা আদান-প্রদান সম্পন্ন করে'
          },
          {
            en: 'It suppresses all database query logging in the operating system',
            bn: 'এটি অপারেটিং সিস্টেমে সমস্ত ডাটাবেজ লগিং বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'silent=True suppresses the default 400 Bad Request exception on parsing failures.',
          bn: 'silent=True পার্সিং ব্যর্থ হলে স্বয়ংক্রিয় ৪০০ এরর না ছুড়ে দিয়ে কোড সচল রাখে।'
        },
        explanation: {
          en: 'By default, request.get_json() raises BadRequest (HTTP 400) when parsing fails. Passing silent=True suppresses the exception and returns None.',
          bn: 'ডিফল্টভাবে ভুল JSON আসলে ফ্লাস্ক ৪০০ এরর দেয়। silent=True দিলে এরর না এসে None রিটার্ন হয়, ফলে নিজের মতো পরিচ্ছন্ন বার্তা দেওয়া যায়।'
        }
      },
      {
        id: 'q-request-outside-context-error',
        kind: 'mcq',
        topic: 'runtime error accessing request outside context',
        question: {
          en: 'What occurs if you attempt to inspect "request.method" inside a standalone Python background thread or utility function without an active request context?',
          bn: 'কোনো সক্রিয় রিকোয়েস্ট কনটেক্সট ছাড়া ব্যাকগ্রাউন্ড থ্রেড বা ইউটিলিটি ফাংশনে "request.method" দেখার চেষ্টা করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Flask raises a "RuntimeError: Working outside of request context", because the LocalProxy cannot find an active context bound to that thread',
            bn: 'ফ্লাস্ক "RuntimeError: Working outside of request context" ছুড়ে দেয়, কারণ LocalProxy ওই থ্রেডের সাথে যুক্ত কোনো সক্রিয় কনটেক্সট খুঁজে পায় না'
          },
          {
            en: 'It returns None and silently continues execution',
            bn: 'এটি কোনো শব্দ না করে None ফেরত দিয়ে কোড চালিয়ে যায়'
          },
          {
            en: 'It downloads the newest version of Python automatically',
            bn: 'এটি নিজে থেকেই পাইথনের নতুন সংস্করণ ডাউনলোড করে নেয়'
          },
          {
            en: 'It creates a fake dummy HTTP request with method GET',
            bn: 'এটি GET মেথড সহ একটি কাল্পনিক নকল রিকোয়েস্ট তৈরি করে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Accessing request outside an HTTP request raises a RuntimeError.',
          bn: 'এইচটিটিপি রিকোয়েস্ট ছাড়া request অ্যাক্সেস করলে RuntimeError দেখা দেয়।'
        },
        explanation: {
          en: 'Werkzeug LocalProxy requires an active context on the executing thread. Attempting to access request outside an HTTP request context triggers a RuntimeError.',
          bn: 'LocalProxy কেবল সক্রিয় রিকোয়েস্টের ভেতর কাজ করে। এর বাইরে request কল করলে ফ্লাস্ক সরাসরি RuntimeError ছুড়ে দেয়।'
        }
      },
      {
        id: 'q-before-request-abort-response',
        kind: 'mcq',
        topic: 'short circuiting views with before_request',
        question: {
          en: 'What happens if a function decorated with @app.before_request returns a Response object (or redirect) instead of returning None?',
          bn: 'যদি @app.before_request ডেকোরেট করা ফাংশন None ফেরত না দিয়ে একটি Response অবজেক্ট (বা রিডাইরেক্ট) ফেরত দেয় তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'It short-circuits request handling: Flask immediately returns that response to the client, completely skipping view function execution',
            bn: 'এটি রিকোয়েস্টের গতিপথ থামিয়ে দেয়: ফ্লাস্ক সাথে সাথে ওই রেসপন্সটি ক্লায়েন্টকে পাঠিয়ে দেয় এবং মূল ভিউ ফাংশন চালানো পুরোপুরি বাদ দেয়'
          },
          {
            en: 'Flask crashes with a RecursionError in the WSGI layer',
            bn: 'ফ্লাস্ক WSGI স্তরে RecursionError দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'The response is held in queue until the server is rebooted',
            bn: 'সার্ভার রিবুট না হওয়া পর্যন্ত রেসপন্সটি আটকে থাকে'
          },
          {
            en: 'It executes the view function twice in parallel',
            bn: 'এটি একই সাথে দুইবার মূল ভিউ ফাংশনটি কার্যকর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Returning any non-None value from before_request bypasses the view entirely.',
          bn: 'before_request থেকে যেকোনো ভ্যালু রিটার্ন করলে মূল ভিউ আর চলে না।'
        },
        explanation: {
          en: 'If a before_request handler returns a value, Flask treats it as the final response, bypassing the view function. This is standard for auth gates and IP blockers.',
          bn: 'before_request কোনো রেসপন্স ফেরত দিলে ফ্লাস্ক ভিউ ফাংশন না চালিয়েই সরাসরি সেটি ক্লায়েন্টকে পাঠায়, যা অথেনটিকেশন বা ব্লকিংয়ের জন্য ব্যবহৃত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'templates-with-jinja',
    title: {
      en: 'Jinja2 Templating — Inheritance, Filters, Macros & Escaping',
      bn: 'জিনজা২ টেমপ্লেট — ইনহেরিটেন্স, ফিল্টার, ম্যাক্রো ও এসকেপিং'
    }
  }
};
