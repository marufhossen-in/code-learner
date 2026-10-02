import type { Lesson } from '../../../lib/types';

export const TheSteamingAppLesson: Lesson = {
  slug: 'the-steaming-app',
  tech: 'flask',
  title: {
    en: 'Flask Overview & First App — WSGI Architecture, Minimal Setup & CLI Workflows',
    bn: 'ফ্লাস্ক পরিচিতি ও প্রথম অ্যাপ — WSGI আর্কিটেকচার, মিনিমাল সেটআপ ও সিএলআই'
  },
  summary: {
    en: 'Flask is a minimalist Python web micro-framework combining Werkzeug routing and Jinja2 templating. In this foundational lesson, you will master the WSGI interface specification, the role of __name__ in resource discovery, route decorator mechanics, configuration handling, and the Flask CLI development server.',
    bn: 'ফ্লাস্ক হলো পাইথনের একটি মিনিমালিস্ট ওয়েব মাইক্রো-ফ্রেমওয়ার্ক যা Werkzeug রাউটিং ও Jinja2 টেমপ্লেটিংয়ের সমন্বয়ে গঠিত। এই প্রাথমিক পাঠে আপনি WSGI ইন্টারফেস স্পেসিফিকেশন, রিসোর্স লোড করতে __name__ এর ভূমিকা, রাউট ডেকোরেটর কার্যপ্রণালী, কনফিগারেশন ম্যানেজমেন্ট এবং ফ্লাস্ক সিএলআই লোকাল সার্ভার গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'flask-wsgi-architecture',
      text: {
        en: 'The Flask and WSGI Architecture Overview',
        bn: 'ফ্লাস্ক ও WSGI আর্কিটেকচার ওভারভিউ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications with Flask, your code interfaces with web servers using the Web Server Gateway Interface (WSGI) standard (PEP 3333). Flask itself is a WSGI application: an instance of the Flask class is a callable object that receives HTTP requests and returns responses, delegating HTTP routing to Werkzeug.',
        bn: 'যখন আপনি ফ্লাস্ক দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন আপনার কোড ওয়েব সার্ভার গেটওয়ে ইন্টারফেস (WSGI) স্ট্যান্ডার্ড (PEP 3333) মেনে চলে। ফ্লাস্ক নিজেই একটি কার্যকর WSGI অ্যাপ্লিকেশন: Flask ক্লাসের একটি অবজেক্ট কলযোগ্য অবজেক্ট হিসেবে কাজ করে যা রিকোয়েস্ট গ্রহণ করে রেসপন্স দেয় এবং রাউটিং Werkzeug লাইব্রেরির ওপর অর্পণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'WSGI (Web Server Gateway Interface)',
          def: {
            en: 'The Python specification (PEP 3333) defining a standard synchronous interface between web servers (such as Gunicorn) and Python web frameworks.',
            bn: 'পাইথনের একটি স্পেসিফিকেশন (PEP 3333) যা ওয়েব সার্ভার (যেমন Gunicorn) এবং পাইথন ফ্রেমওয়ার্কের মধ্যে যোগাযোগের সার্বজনীন নিয়ম নির্ধারণ করে।'
          }
        },
        {
          term: '__name__ Discovery',
          def: {
            en: 'The Python module identifier passed to Flask(__name__) allowing the framework to determine the root folder for templates and static assets.',
            bn: 'পাইথন মডিউলের নাম যা Flask(__name__)-এ পাঠানো হয়, যাতে ফ্রেমওয়ার্ক টেমপ্লেট ও স্ট্যাটিক ফাইলের সঠিক অবস্থান খুঁজে বের করতে পারে।'
          }
        },
        {
          term: '@app.route Decorator',
          def: {
            en: 'The Python decorator binding a URL rule to a view function inside the internal Werkzeug URL map.',
            bn: 'একটি পাইথন ডেকোরেটর যা একটি ইউআরএল পাথকে নির্দিষ্ট ভিউ ফাংশনের সাথে যুক্ত করে এবং Werkzeug ম্যাপে এন্ট্রি তৈরি করে।'
          }
        },
        {
          term: 'app.config Dictionary',
          def: {
            en: 'A subclass of Python dict storing application-wide configuration keys (such as SECRET_KEY and DEBUG status).',
            bn: 'পাইথন ডিকশনারির একটি সাব-ক্লাস যা অ্যাপ্লিকেশনের কনফিগারেশন কী (যেমন SECRET_KEY এবং DEBUG অবস্থা) ধারণ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'core-components-matrix',
      text: {
        en: 'Flask Core Dependencies and Responsibilities Matrix',
        bn: 'ফ্লাস্ক মূল ডিপেন্ডেন্সি ও দায়িত্ব ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Component', bn: 'উপাদান' },
        { en: 'Underlying Library', bn: 'অভ্যন্তরীণ লাইব্রেরি' },
        { en: 'Architectural Responsibility', bn: 'আর্কিটেকচারাল দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'HTTP Routing & WSGI Handling', bn: 'এইচটিটিপি রাউটিং ও WSGI হ্যান্ডলিং' },
          { en: 'Werkzeug', bn: 'Werkzeug' },
          { en: 'Parses incoming HTTP environ headers, matches URL rules, and provides interactive debuggers', bn: 'ইনকামিং এইচটিটিপি হেডার পড়ে, ইউআরএল রুল মেলায় এবং ইন্টারঅ্যাক্টিভ ডিবাগার প্রদান করে' }
        ],
        [
          { en: 'Template Rendering', bn: 'টেমপ্লেট রেন্ডারিং' },
          { en: 'Jinja2', bn: 'Jinja2' },
          { en: 'Compiles dynamic HTML templates with inheritance, auto-escaping, and custom filters', bn: 'ইনহেরিটেন্স, অটো-এসকেপিং ও কাস্টম ফিল্টার সহ ডায়নামিক এইচটিএমএল পেজ তৈরি করে' }
        ],
        [
          { en: 'Cryptographic Signing', bn: 'ক্রিপ্টোগ্রাফিক সাইনিং' },
          { en: 'itsdangerous', bn: 'itsdangerous' },
          { en: 'Cryptographically signs client-side session cookies to prevent tampering and forged payloads', bn: 'ক্লায়েন্ট সেশন কুকিতে ক্রিপ্টোগ্রাফিক স্বাক্ষর করে যাতে কেউ ব্রাউজারে ডাটা বিকৃত করতে না পারে' }
        ],
        [
          { en: 'CLI Command Line Interface', bn: 'সিএলআই কমান্ড লাইন ইন্টারফেস' },
          { en: 'Click', bn: 'Click' },
          { en: 'Powers terminal commands like "flask run", "flask shell", and custom management subcommands', bn: '"flask run", "flask shell" এবং কাস্টম টার্মিনাল কমান্ড পরিচালনা করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'flask-dispatch-code',
      text: {
        en: 'Working WSGI Dispatch and Route Resolution Simulation',
        bn: 'কার্যকরী WSGI ডিসপ্যাচ ও রাউট রেজোলিউশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Flask WSGI Application and Route Dispatcher
class MockFlask {
  constructor(importName) {
    this.importName = importName;
    this.routes = new Map();
    this.config = { DEBUG: false, PORT: 5000 };
  }

  route(rule, methods = ['GET']) {
    return (handlerFn) => {
      this.routes.set(rule, { handler: handlerFn, methods });
      return handlerFn;
    };
  }

  handleRequest(path, method = 'GET') {
    const route = this.routes.get(path);
    if (!route) {
      return { status: 404, body: 'Not Found' };
    }
    if (!route.methods.includes(method)) {
      return { status: 405, body: 'Method Not Allowed' };
    }
    const result = route.handler();
    return { status: 200, body: result };
  }
}

// 1. Initializing Flask app instance
const app = new MockFlask('main_app');

// 2. Registering route with decorator
app.route('/')(() => 'Welcome to Flask Engineering!');
app.route('/health')(() => ({ status: 'healthy', uptimeSeconds: 120 }));

// 3. Simulating HTTP request dispatch
const homeResponse = app.handleRequest('/', 'GET');
const healthResponse = app.handleRequest('/health', 'GET');

console.log('Home route response status:', homeResponse.status);
// -> Home route response status: 200
console.log('Health check uptime seconds:', healthResponse.body.uptimeSeconds);
// -> Health check uptime seconds: 120`,
      caption: {
        en: 'Simulating Flask WSGI router returning status 200 and 120 uptime seconds',
        bn: 'সিমুলেটেড ফ্লাস্ক রাউটার ২০০ স্ট্যাটাস এবং ১২০ সেকেন্ড আপটাইম প্রদান করছে'
      }
    },
    {
      type: 'heading',
      id: 'development-vs-production-server',
      text: {
        en: 'Development Server (runserver) Versus Production WSGI',
        bn: 'ডেভেলপমেন্ট সার্ভার বনাম প্রোডাকশন WSGI সার্ভার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The built-in development server executed via "flask run" includes an interactive Werkzeug pin-protected debugger and file change auto-reloader. However, it is single-threaded by default and vulnerable to remote code execution through the web terminal, making it strictly forbidden in live production environments where Gunicorn or uWSGI is mandatory.',
        bn: 'টার্মিনালে "flask run" কমান্ড দিলে যে লোকাল সার্ভার চালু হয় তাতে Werkzeug পিন-সুরক্ষিত ওয়েব ডিবাগার এবং কোড পরিবর্তনের সাথে সাথে অটো-রিলোডার থাকে। তবে এটি ডিফল্টভাবে সিঙ্গেল-থ্রেডেড এবং ওয়েব টার্মিনালের কারণে রিমোট কোড এক্সিকিউশনের ঝুঁকি বহন করে, তাই লাইভ প্রোডাকশনে এটি চালানো সম্পূর্ণ নিষিদ্ধ; সেখানে Gunicorn বা uWSGI ব্যবহার বাধ্যতামূলক।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Never Run Debugger in Production: Running with FLASK_DEBUG=1 in production allows anyone with browser access to execute arbitrary Python shell commands.',
          bn: '১. প্রোডাকশনে ডিবাগার নিষিদ্ধ: প্রোডাকশনে FLASK_DEBUG=1 চালালে যে কেউ ব্রাউজার থেকে সরাসরি সার্ভারে ক্ষতিকর পাইথন কোড চালাতে পারে।'
        },
        {
          en: '2. Pass __name__ to Flask: Always pass __name__ to Flask constructor so relative template and static directory lookups resolve properly.',
          bn: '২. কনস্ট্রাক্টরে __name__ দিন: Flask ক্লাসে সর্বদা __name__ আর্গুমেন্ট দিন যাতে ফ্রেমওয়ার্ক টেমপ্লেট ও স্ট্যাটিক ফাইলের ফোল্ডার ঠিকমতো খুঁজে পায়।'
        },
        {
          en: '3. Return Clean Tuples: Flask allows returning (response_body, status_code, headers) tuples directly from view functions.',
          bn: '৩. ক্লিন টাপল রিটার্ন: ফ্লাস্ক ভিউ ফাংশন থেকে সরাসরি (response_body, status_code, headers) টাপল রিটার্ন করা যায়।'
        },
        {
          en: '4. Separate Config Classes: Define DevelopmentConfig and ProductionConfig classes rather than scattering raw settings in Python code.',
          bn: '৪. আলাদা কনফিগ ক্লাস: এলোমেলো সেটিংস না রেখে DevelopmentConfig এবং ProductionConfig ক্লাস তৈরি করে কনফিগারেশন গুছিয়ে রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-app-ex1',
      kind: 'mcq',
      topic: 'purpose of name argument in flask constructor',
      question: {
        en: 'Why is "__name__" universally passed as the first argument when instantiating "app = Flask(__name__)"?',
        bn: '"app = Flask(__name__)" তৈরির সময় প্রথম আর্গুমেন্ট হিসেবে কেন সর্বদা "__name__" পাঠানো হয়?'
      },
      options: [
        {
          en: 'It tells Flask the location of the current module or package, enabling it to accurately resolve relative paths for the "templates" and "static" directories',
          bn: 'এটি ফ্লাস্ককে বর্তমান মডিউলের অবস্থান জানিয়ে দেয়, যাতে ফ্রেমওয়ার্ক "templates" ও "static" ফোল্ডারের ফাইলগুলো নিখুঁতভাবে খুঁজে পেতে পারে'
        },
        {
          en: 'It specifies the administrator username for the MySQL database',
          bn: 'এটি মাইএসকিউএল ডাটাবেজের অ্যাডমিন ইউজারনেম নির্ধারণ করে'
        },
        {
          en: 'It encrypts all network requests with AES-256 bit encryption',
          bn: 'এটি সমস্ত নেটওয়ার্ক রিকোয়েস্টকে এইএস-২৫৬ বিট এনক্রিপ্ট করে'
        },
        {
          en: 'It sets the physical CPU clock frequency on the server',
          bn: 'এটি সার্ভারের প্রসেসরের সিপিইউ ক্লক ফ্রিকোয়েন্সি সেট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flask uses __name__ to locate project files on disk relative to the main module.',
        bn: 'ফ্লাস্ক মেইন মডিউলের সাপেক্ষে ডিস্কে থাকা প্রোজেক্ট ফাইলগুলোর অবস্থান জানতে __name__ ব্যবহার করে।'
      },
      explanation: {
        en: 'Flask requires the import name of the module or package to locate templates, static assets, and blueprints on the filesystem.',
        bn: 'ফাইল সিস্টেমে টেমপ্লেট, স্ট্যাটিক অ্যাসেট ও ব্লুপ্রিন্ট খুঁজে বের করার জন্য ফ্লাস্কের মডিউলের সঠিক নাম জানা প্রয়োজন।'
      }
    },
    {
      id: 'fl-app-ex2',
      kind: 'mcq',
      topic: 'danger of flask debug mode in production',
      question: {
        en: 'Why is leaving FLASK_DEBUG=1 or app.run(debug=True) enabled in a public production environment a critical security catastrophe?',
        bn: 'পাবলিক প্রোডাকশন সার্ভারে FLASK_DEBUG=1 বা debug=True চালু রাখা কেন চরম মারাত্মক নিরাপত্তা বিপর্যয় ডেকে আনে?'
      },
      options: [
        {
          en: 'The interactive Werkzeug debugger exposes an in-browser Python terminal on uncaught exceptions, allowing any attacker to execute arbitrary shell commands directly on your server',
          bn: 'Werkzeug ইন্টারঅ্যাক্টিভ ডিবাগার কোনো এরর হলে ব্রাউজারেই পাইথন টার্মিনাল খুলে দেয়, যার ফলে আক্রমণকারী সার্ভারে সরাসরি যেকোনো কোড চালাতে পারে'
        },
        {
          en: 'It deletes all user passwords from the database every hour',
          bn: 'এটি প্রতি এক ঘণ্টায় ডাটাবেজ থেকে সমস্ত ইউজারের পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'It causes web browsers to display text only in grayscale colors',
          bn: 'এটি ব্রাউজারে সমস্ত লেখা কেবল সাদাকালো রঙে প্রদর্শন করতে বাধ্য করে'
        },
        {
          en: 'It disconnects the server from the internet permanently',
          bn: 'এটি সার্ভারকে ইন্টারনেট সংযোগ থেকে স্থায়ীভাবে বিচ্ছিন্ন করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The interactive debugger is an interactive Python console on error pages.',
        bn: 'ইন্টারঅ্যাক্টিভ ডিবাগার ত্রুটি পেজে সরাসরি একটি কার্যকর পাইথন কনসোল চালু করে দেয়।'
      },
      explanation: {
        en: 'Werkzeug debugger includes an interactive Python shell on exception pages. In production, attackers can intentionally trigger an error and achieve full Remote Code Execution (RCE).',
        bn: 'ডিবাগ মোডে কোনো এরর দেখা দিলে ব্রাউজারে পাইথন কনসোল দেখা যায়। আক্রমণকারী এতে ভুল ডাটা পাঠিয়ে এরর এনে সরাসরি সার্ভার হ্যাক করতে পারে।'
      }
    },
    {
      id: 'fl-app-ex3',
      kind: 'mcq',
      topic: 'valid return types from flask view functions',
      question: {
        en: 'Which of the following represents a valid response return value from a standard Flask view function?',
        bn: 'নিচের কোনটি সাধারণ ফ্লাস্ক ভিউ ফাংশন থেকে রেসপন্স ফেরত দেওয়ার একটি বৈধ নিয়ম?'
      },
      options: [
        {
          en: 'A 3-element tuple: (response_body, status_code, headers_dict) like ("Created", 201, {"X-App": "v1"})',
          bn: 'একটি ৩ উপাদানের টাপল: (response_body, status_code, headers_dict) যেমন ("Created", 201, {"X-App": "v1"})'
        },
        {
          en: 'A compiled C++ binary library object',
          bn: 'একটি কম্পাইল করা সি++ বাইনারি ফাইল'
        },
        {
          en: 'A raw database socket pointer handle',
          bn: 'সরাসরি একটি ডাটাবেজ সকেট পয়েন্টার'
        },
        {
          en: 'Only a boolean True or False is permitted',
          bn: 'কেবল একটি বুলিয়ান True বা False পাঠানো সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flask automatically converts string, dict, or tuple (body, status, headers) into a Response object.',
        bn: 'ফ্লাস্ক স্ট্রিং, ডিকশনারি বা (body, status, headers) টাপলকে নিজে থেকেই রেসপন্স অবজেক্টে বদলে নেয়।'
      },
      explanation: {
        en: 'Flask accepts a string, dict, Response object, or a tuple of (response, status), (response, headers), or (response, status, headers).',
        bn: 'ফ্লাস্ক ভিউ থেকে টেক্সট, ডিকশনারি, রেসপন্স অবজেক্ট অথবা (response, status, headers) টাপল রিটার্ন করা যায়।'
      }
    },
    {
      id: 'fl-app-ex4',
      kind: 'mcq',
      topic: 'wsgi callable specification pep 3333',
      question: {
        en: 'According to PEP 3333, what two arguments must the Flask WSGI callable object accept when invoked by a WSGI server like Gunicorn?',
        bn: 'PEP 3333 অনুযায়ী, Gunicorn-এর মতো কোনো WSGI সার্ভার যখন ফ্লাস্ককে কল করে তখন কোন ২টি আর্গুমেন্ট পাঠাতে হয়?'
      },
      options: [
        {
          en: 'environ (a Python dictionary containing request CGI-style variables) and start_response (a callable for sending HTTP status and headers)',
          bn: 'environ (রিকোয়েস্টের CGI ভেরিয়েবল সম্বলিত পাইথন ডিকশনারি) এবং start_response (এইচটিটিপি স্ট্যাটাস ও হেডার পাঠানোর কলব্যাক ফাংশন)'
        },
        {
          en: 'database_cursor and html_stream',
          bn: 'database_cursor এবং html_stream'
        },
        {
          en: 'ip_address and mac_address',
          bn: 'ip_address এবং mac_address'
        },
        {
          en: 'cpu_threads and ram_megabytes',
          bn: 'cpu_threads এবং ram_megabytes'
        }
      ],
      answer: 0,
      hint: {
        en: 'The WSGI standard specifies application(environ, start_response).',
        bn: 'WSGI স্পেসিফিকেশনে application(environ, start_response) সিনট্যাক্স নির্দিষ্ট করা।'
      },
      explanation: {
        en: 'PEP 3333 defines that any WSGI application must be a callable accepting `environ` and `start_response`, returning an iterable of byte strings.',
        bn: 'PEP 3333 নিয়ম অনুসারে যেকোনো WSGI অ্যাপ্লিকেশনকে একটি কলযোগ্য অবজেক্ট হতে হয় যা environ ও start_response গ্রহণ করে এবং বাইট স্ট্রিং ফেরত দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-steaming-app-quiz',
    title: {
      en: 'Flask Fundamentals & WSGI Architecture Quiz',
      bn: 'ফ্লাস্কের মূলভিত্তি ও WSGI আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-flask-command-discovery',
        kind: 'mcq',
        topic: 'how flask cli discovers the application',
        question: {
          en: 'When executing the terminal command "flask run", how does the CLI discover which application to boot if FLASK_APP is not explicitly exported?',
          bn: '"flask run" চালানোর সময় FLASK_APP পরিবেশ চলক সেট করা না থাকলে সিএলআই কোন ফাইলটি খুঁজে অ্যাপ চালু করে?'
        },
        options: [
          {
            en: 'It searches the current directory for files named "app.py" or "wsgi.py", instantiating the first Flask instance found',
            bn: 'এটি বর্তমান ফোল্ডারে "app.py" বা "wsgi.py" নামের ফাইল খোঁজে এবং তাতে থাকা প্রথম ফ্লাস্ক অবজেক্টটি চালু করে'
          },
          {
            en: 'It prompts the user to download an application from GitHub',
            bn: 'এটি ব্যবহারকারীকে গিটহাব থেকে অ্যাপ নামাতে অনুরোধ জানায়'
          },
          {
            en: 'It automatically opens Microsoft Excel to generate a spreadsheet',
            bn: 'এটি স্প্রেডশীট তৈরির জন্য মাইক্রোসফট এক্সেল ওপেন করে ফেলে'
          },
          {
            en: 'It executes the oldest Python script in the user Downloads folder',
            bn: 'এটি ব্যবহারকারীর ডাউনলোড ফোল্ডারে থাকা সবচেয়ে পুরোনো পাইথন স্ক্রিপ্টটি চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'By default convention, Flask checks for app.py or wsgi.py in the project directory.',
          bn: 'ডিফল্ট নিয়ম অনুযায়ী ফ্লাস্ক প্রজেক্ট ফোল্ডারে app.py অথবা wsgi.py ফাইলটি খোঁজে।'
        },
        explanation: {
          en: 'The Flask CLI automatically inspects "app.py" and "wsgi.py" for an application instance or factory function when FLASK_APP is not set.',
          bn: 'FLASK_APP উল্লেখ না থাকলে ফ্লাস্ক সিএলআই নিজে থেকেই "app.py" বা "wsgi.py" ফাইল স্ক্যান করে অ্যাপ খুঁজে বের করে।'
        }
      },
      {
        id: 'q-json-response-helper',
        kind: 'mcq',
        topic: 'jsonify function vs json dumps',
        question: {
          en: 'Why is using Flask "jsonify({\'key\': \'value\'})" preferred over returning "json.dumps({\'key\': \'value\'})" in API endpoints?',
          bn: 'এপিআই তৈরিতে "json.dumps({\'key\': \'value\'})"-এর চেয়ে ফ্লাস্কের "jsonify({\'key\': \'value\'})" ব্যবহার করা কেন শ্রেষ্ঠ?'
        },
        options: [
          {
            en: 'jsonify() serializes data to JSON and automatically sets the HTTP Content-Type header to "application/json", whereas json.dumps() returns a plain string with Content-Type "text/html"',
            bn: 'jsonify() ডাটা সিরিয়ালাইজ করে স্বয়ংক্রিয়ভাবে Content-Type হেডার "application/json" করে দেয়, আর json.dumps() কেবল একটি সাধারণ টেক্সট স্ট্রিং হিসেবে পাঠায়'
          },
          {
            en: 'json.dumps() consumes 100 percent of CPU memory',
            bn: 'json.dumps() কম্পিউটারের মেমরির ১০০ শতাংশ দখল করে নেয়'
          },
          {
            en: 'jsonify() encrypts data using a private blockchain key',
            bn: 'jsonify() ডাটাকে ব্লকচেইন কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'There is no difference between the two methods',
            bn: 'এই দুটি পদ্ধতির মাঝে কোনো ধরনের পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'jsonify configures the proper MIME Content-Type header for API clients.',
          bn: 'jsonify এপিআই ক্লায়েন্টদের জন্য সঠিক MIME Content-Type হেডার সেট করে দেয়।'
        },
        explanation: {
          en: 'jsonify creates a Response object with the application/json mimetype. In modern Flask (2.2+), returning a Python dict from a view also invokes jsonify automatically.',
          bn: 'jsonify সরাসরি application/json হেডার সহ একটি পূর্ণাঙ্গ Response অবজেক্ট তৈরি করে দেয়।'
        }
      },
      {
        id: 'q-secret-key-purpose-flask',
        kind: 'mcq',
        topic: 'app config secret key role in flask',
        question: {
          en: 'What critical functionality fails or becomes completely insecure if "app.config[\'SECRET_KEY\']" is omitted in a Flask application?',
          bn: 'ফ্লাস্ক অ্যাপ্লিকেশনে "app.config[\'SECRET_KEY\']" বাদ দিলে কোন গুরুত্বপূর্ণ ব্যবস্থাটি ব্যর্থ বা মারাত্মকভাবে অসুরক্ষিত হয়ে পড়ে?'
        },
        options: [
          {
            en: 'Client-side cookies used by Flask session and CSRF tokens cannot be cryptographically signed, raising a RuntimeError whenever session data is stored',
            bn: 'ফ্লাস্ক সেশন এবং সিএসআরএফ টোকেনে ব্যবহৃত কুকি ক্রিপ্টোগ্রাফিক স্বাক্ষর করতে পারে না এবং সেশনে ডাটা সেভ করার সাথে সাথে RuntimeError দেখা দেয়'
          },
          {
            en: 'The Python compiler crashes and deletes the project directory',
            bn: 'পাইথন কম্পাইলার ক্র্যাশ করে প্রোজেক্টের ফোল্ডার মুছে ফেলে'
          },
          {
            en: 'Network packets are blocked by the operating system kernel',
            bn: 'অপারেটিং সিস্টেমের কার্নেল সমস্ত নেটওয়ার্ক প্যাকেট আটকে দেয়'
          },
          {
            en: 'The website becomes permanently read-only for all users',
            bn: 'ওয়েবসাইটটি সমস্ত ব্যবহারকারীর জন্য চিরতরে রিড-অনলি হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'SECRET_KEY is the private symmetric key used to sign sessions and security tokens.',
          bn: 'SECRET_KEY হলো একটি গোপন চাবি যা সেশন এবং সিকিউরিটি টোকেন সুরক্ষিত রাখতে ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Flask uses SECRET_KEY to cryptographically sign session cookies and generate CSRF protection tokens. Without it, attempting to access session will raise a RuntimeError.',
          bn: 'ফ্লাস্ক সেশন কুকি ও সিএসআরএফ টোকেন সুরক্ষার জন্য SECRET_KEY ব্যবহার করে। এটি না দিলে সেশন অ্যাক্সেসের সময় এরর দেখা দেয়।'
        }
      },
      {
        id: 'q-application-context-vs-request-context-trigger',
        kind: 'mcq',
        topic: 'when flask contexts are pushed and popped',
        question: {
          en: 'When an incoming HTTP request arrives at a Flask application, in what order are the contexts activated?',
          bn: 'ফ্লাস্ক অ্যাপ্লিকেশনে একটি ইনকামিং এইচটিটিপি রিকোয়েস্ট আসার পর কনটেক্সটগুলো কোন ক্রমে সক্রিয় হয়?'
        },
        options: [
          {
            en: 'The Application Context is pushed first (making current_app and g available), followed immediately by the Request Context (making request and session available)',
            bn: 'প্রথমে অ্যাপ্লিকেশন কনটেক্সট সক্রিয় হয় (current_app ও g তৈরি করে), এবং তার পরপরই রিকোয়েস্ট কনটেক্সট সক্রিয় হয় (request ও session তৈরি করে)'
          },
          {
            en: 'Only the Request Context is pushed; Application Context is never used during HTTP requests',
            bn: 'কেবল রিকোয়েস্ট কনটেক্সট চালু হয়; এইচটিটিপির সময় অ্যাপ্লিকেশন কনটেক্সট ব্যবহৃত হয় না'
          },
          {
            en: 'Database connections are pushed first, then Jinja templates are pushed',
            bn: 'প্রথমে ডাটাবেজ সংযোগ চালু হয়, তারপর জিনজা টেমপ্লেট লোড হয়'
          },
          {
            en: 'Contexts are pushed in random non-deterministic order depending on CPU load',
            bn: 'সিপিইউ লোডের ওপর ভিত্তি করে এলোমেলো ক্রমে কনটেক্সটগুলো সক্রিয় হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The application context surrounds the request context during HTTP processing.',
          bn: 'রিকোয়েস্ট প্রসেসিং চলাকালে অ্যাপ্লিকেশন কনটেক্সট রিকোয়েস্ট কনটেক্সটের চারপাশে অবস্থান করে।'
        },
        explanation: {
          en: 'When a request begins, Flask pushes an application context if one is not already active, followed by the request context. When the request ends, both contexts are cleanly popped.',
          bn: 'রিকোয়েস্ট আসার পর ফ্লাস্ক প্রথমে অ্যাপ্লিকেশন কনটেক্সট এবং তারপর রিকোয়েস্ট কনটেক্সট পুশ করে। কাজ শেষে উভয় কনটেক্সট নিরাপদে বন্ধ হয়ে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'routes-and-rules',
    title: {
      en: 'Routes & URL Rules — Path Converters, Methods & url_for Resolution',
      bn: 'রাউট ও ইউআরএল নিয়ম — পাথ কনভার্টার, মেথডস ও url_for রেজোলিউশন'
    }
  }
};
