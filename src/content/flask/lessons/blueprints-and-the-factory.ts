import type { Lesson } from '../../../lib/types';

export const BlueprintsAndTheFactoryLesson: Lesson = {
  slug: 'blueprints-and-the-factory',
  tech: 'flask',
  title: {
    en: 'Blueprints & Application Factory — Modular Routes & create_app',
    bn: 'ব্লুপ্রিন্ট ও অ্যাপ্লিকেশন ফ্যাক্টরি — মডিউলার রুট ও create_app'
  },
  summary: {
    en: 'Scaling Flask applications beyond single scripts requires the Application Factory pattern and modular Blueprints. In this architectural lesson, you will master eliminating circular imports with create_app(), domain-driven routing with Blueprints, deferred extension initialization via init_app(), and multi-environment configuration layering.',
    bn: 'ফ্লাস্ক অ্যাপ্লিকেশনকে একক স্ক্রিপ্ট থেকে বৃহৎ আর্কিটেকচারে রূপান্তর করতে অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্ন ও ব্লুপ্রিন্ট অপরিহার্য। এই পাঠে আপনি create_app() দিয়ে সার্কুলার ইম্পোর্ট দূর করা, ব্লুপ্রিন্ট দিয়ে ডোমেনভিত্তিক মডিউলার রাউটিং, init_app() দিয়ে এক্সটেনশন বাইন্ডিং এবং ভিন্ন পরিবেশের জন্য কনফিগারেশন লেয়ারিং গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'factory-and-blueprints-architecture',
      text: {
        en: 'The Application Factory and Blueprint Architecture',
        bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি ও ব্লুপ্রিন্ট আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When applications grow into dozens of routes, defining a single global app instance causes circular import deadlocks. The Application Factory pattern encapsulates initialization inside a factory function named create_app. Modular feature slices are encapsulated as Blueprints (such as auth and api) and registered onto the application instance during factory startup.',
        bn: 'যখন একটি অ্যাপ্লিকেশনে বহু রুট যুক্ত হয়, তখন একটিমাত্র গ্লোবাল অ্যাপ ভেরিয়েবল রাখলে মডিউলগুলোর মাঝে বৃত্তাকার ইম্পোর্ট জটিলতা তৈরি হয়। অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্নে create_app ফাংশনের ভেতর সমস্ত ইনিশিয়ালাইজেশন আবদ্ধ রাখা হয়। বিভিন্ন ফিচার (যেমন auth এবং api) আলাদা ব্লুপ্রিন্ট হিসেবে তৈরি হয় এবং ফ্যাক্টরি চলার সময় মূল অ্যাপ্লিকেশনে নিবন্ধিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Application Factory (create_app())',
          def: {
            en: 'A top-level function that creates, configures, and returns a new Flask instance, enabling isolated testing and multiple runtime configurations.',
            bn: 'একটি মূল ফাংশন যা নতুন ফ্লাস্ক অ্যাপ তৈরি, কনফিগার এবং রিটার্ন করে, যা সহজে টেস্টিং এবং বিভিন্ন কনফিগারেশনে অ্যাপ চালানোর সুবিধা দেয়।'
          }
        },
        {
          term: 'Flask Blueprint',
          def: {
            en: 'A logical component recording route handlers, template filters, and static folders to be registered later onto an application instance.',
            bn: 'একটি যৌক্তিক মডিউল যা রুট, ফিল্টার ও স্ট্যাটিক ফোল্ডার সংরক্ষণ করে এবং পরবর্তীতে কোনো নির্দিষ্ট অ্যাপ্লিকেশনে যুক্ত হতে পারে।'
          }
        },
        {
          term: 'Deferred Initialization (init_app())',
          def: {
            en: 'The extension pattern where an extension object is instantiated without an app (e.g. db = SQLAlchemy()) and initialized later inside create_app(app).',
            bn: 'এক্সটেনশন তৈরির একটি পদ্ধতি যেখানে শুরুতে অ্যাপ ছাড়াই অবজেক্ট বানানো হয় (db = SQLAlchemy()) এবং পরে create_app-এ init_app দিয়ে সংযুক্ত করা হয়।'
          }
        },
        {
          term: 'Blueprint URL Prefix',
          def: {
            en: 'A path prefix (such as /auth or /api/v1) prepended automatically to all routes declared within that specific Blueprint.',
            bn: 'একটি পাথ প্রিফিক্স (যেমন /auth বা /api/v1) যা সংশ্লিষ্ট ব্লুপ্রিন্টের সমস্ত রুটের পূর্বে নিজে থেকেই যুক্ত হয়ে যায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'blueprint-structure-matrix',
      text: {
        en: 'Application Factory Versus Global App Matrix',
        bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি বনাম গ্লোবাল অ্যাপ ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'আর্কিটেকচারাল মাত্রা' },
        { en: 'Global Single Instance', bn: 'গ্লোবাল একক ইনস্ট্যান্স' },
        { en: 'Application Factory Pattern', bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্ন' }
      ],
      rows: [
        [
          { en: 'Circular Imports', bn: 'সার্কুলার ইম্পোর্ট' },
          { en: 'Frequent collisions when views/models import global app', bn: 'ভিউ এবং মডেল গ্লোবাল অ্যাপ ইম্পোর্ট করলে ঘন ঘন সংঘাত ঘটে' },
          { en: 'Completely eliminated; extensions initialized via init_app()', bn: 'সম্পূর্ণ নির্মূল; init_app() দিয়ে এক্সটেনশন যুক্ত হয়' }
        ],
        [
          { en: 'Automated Testing', bn: 'স্বয়ংক্রিয় টেস্টিং' },
          { en: 'Tests share mutable state, leading to cross-test contamination', bn: 'টেস্টগুলো একই স্টেট শেয়ার করে ডাটা দূষিত করে ফেলে' },
          { en: 'Each test runner spins up a fresh, isolated app instance', bn: 'প্রতিটি টেস্টের জন্য সম্পূর্ণ আলাদা তাজা অ্যাপ তৈরি করা যায়' }
        ],
        [
          { en: 'Multi-Environment Configurations', bn: 'ভিন্ন পরিবেশের কনফিগারেশন' },
          { en: 'Rigid; hardcoded settings or fragile environment switches', bn: 'অনমনীয়; কোডে সেটিংস ফিক্সড থাকে বা পরিবর্তন কঠিন' },
          { en: 'Dynamic: create_app(DevelopmentConfig) or create_app(TestingConfig)', bn: 'ডায়নামিক: প্যারামিটার দিয়ে যেকোনো কনফিগারেশন পাঠানো যায়' }
        ],
        [
          { en: 'Route Modularity', bn: 'রাউট মডিউলারিটি' },
          { en: 'All routes hardcoded to single app decorator', bn: 'সব রুট একক অ্যাপ ডেকোরেটরের সাথে শক্তভাবে বাঁধা' },
          { en: 'Decoupled domain Blueprints registered with custom url_prefix', bn: 'স্বতন্ত্র ব্লুপ্রিন্ট যা কাস্টম প্রিফিক্স সহ যুক্ত হতে পারে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'factory-simulation-code',
      text: {
        en: 'Working Application Factory and Blueprint Registration Simulation',
        bn: 'কার্যকরী অ্যাপ্লিকেশন ফ্যাক্টরি ও ব্লুপ্রিন্ট রেজিস্ট্রেশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Flask Application Factory and Blueprint Registration
class MockBlueprint {
  constructor(name, urlPrefix) {
    this.name = name;
    this.urlPrefix = urlPrefix;
    this.routes = new Map();
  }

  route(path) {
    return (handler) => {
      this.routes.set(path, handler);
      return handler;
    };
  }
}

class MockApp {
  constructor(configName, port = 5000) {
    this.config = configName;
    this.port = port;
    this.endpoints = new Map();
  }

  registerBlueprint(blueprint) {
    for (const [path, handler] of blueprint.routes.entries()) {
      const fullUrl = \`\${blueprint.urlPrefix}\${path}\`;
      const endpointName = \`\${blueprint.name}.\${handler.name}\`;
      this.endpoints.set(endpointName, fullUrl);
    }
  }
}

// 1. Defining auth blueprint
const authBp = new MockBlueprint('auth', '/auth');
authBp.route('/login')(function login() { return 'Login Page'; });
authBp.route('/register')(function register() { return 'Register Page'; });

// 2. Application factory implementation
function createApp(configName = 'DevelopmentConfig', port = 5000) {
  const app = new MockApp(configName, port);
  app.registerBlueprint(authBp);
  return app;
}

const testApp = createApp('TestingConfig', 8080);
const prodApp = createApp('ProductionConfig', 443);

console.log('Registered routes count in blueprint:', authBp.routes.size);
// -> Registered routes count in blueprint: 2
console.log('Test application server port:', testApp.port);
// -> Test application server port: 8080
console.log('Production application server port:', prodApp.port);
// -> Production application server port: 443`,
      caption: {
        en: 'Application factory creating isolated test app on port 8080 and prod on port 443',
        bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি ৮০৮০ ও ৪৪৩ পোর্টে আলাদা টেস্ট ও প্রোডাকশন অ্যাপ তৈরি করছে'
      }
    },
    {
      type: 'heading',
      id: 'blueprint-scoping-rules',
      text: {
        en: 'Blueprint Scoping and Reverse Resolution Conventions',
        bn: 'ব্লুপ্রিন্ট স্কোপিং ও রিভার্স রেজোলিউশন নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When routing inside Blueprints, endpoint names are automatically namespaced by the blueprint name. To generate a URL for the login route of the auth blueprint, url_for strictly requires "url_for(\'auth.login\')". If calling from within the same blueprint, developers can use relative resolution with a leading dot: "url_for(\'.login\')".',
        bn: 'ব্লুপ্রিন্টের ভেতর রাউটিং করার সময় এন্ডপয়েন্টের নামের শুরুতে ব্লুপ্রিন্টের নাম যুক্ত হয়। auth ব্লুপ্রিন্টের লগইন পাথের লিংক তৈরি করতে url_for-এ কঠোরভাবে "url_for(\'auth.login\')" লিখতে হয়। একই ব্লুপ্রিন্টের ভেতর থেকে লিংক দিলে শুরুতে ডট দিয়ে সংক্ষেপে "url_for(\'.login\')" ব্যবহার করা যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Namespace Endpoints with Blueprints: Always reference blueprint endpoints with "blueprint_name.view_name" in url_for calls.',
          bn: '১. নেমস্পেস এন্ডপয়েন্ট: url_for ডাকার সময় সর্বদা "blueprint_name.view_name" ফরম্যাটে ব্লুপ্রিন্টের নাম সহ লিখুন।'
        },
        {
          en: '2. Defer Extension Binding: Create extension objects without arguments globally, and call extension.init_app(app) inside create_app.',
          bn: '২. এক্সটেনশন দেরিতে বাইন্ডিং: এক্সটেনশন অবজেক্ট বাইরে তৈরি করে create_app ফাংশনের ভেতর extension.init_app(app) দিয়ে যুক্ত করুন।'
        },
        {
          en: '3. Blueprint-Specific Errors: Attach custom error handlers to specific blueprints using @blueprint.errorhandler(404) for domain errors.',
          bn: '৩. ব্লুপ্রিন্ট ভিত্তিক এরর: ডোমেন ভিত্তিক ত্রুটি হ্যান্ডল করতে @blueprint.errorhandler(404) ব্যবহার করুন।'
        },
        {
          en: '4. Pass Config Objects: Keep configuration modular by creating BaseConfig, DevelopmentConfig, and ProductionConfig classes.',
          bn: '৪. কনফিগ ক্লাস পাস করুন: BaseConfig, DevelopmentConfig ও ProductionConfig ক্লাসের মাধ্যমে সেটিংস সুবিন্যস্ত রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-fac-ex1',
      kind: 'mcq',
      topic: 'purpose of init_app extension pattern',
      question: {
        en: 'Why do Flask extensions (like SQLAlchemy or LoginManager) provide an "init_app(app)" method rather than requiring the app object upon instantiation?',
        bn: 'ফ্লাস্ক এক্সটেনশনগুলোতে (যেমন SQLAlchemy বা LoginManager) অবজেক্ট তৈরির সময়ই অ্যাপ না চেয়ে কেন "init_app(app)" মেথড দেওয়া হয়?'
      },
      options: [
        {
          en: 'It supports the Application Factory pattern and prevents circular imports: the extension instance can be declared in a shared extensions.py file and bound to concrete app instances later inside create_app()',
          bn: 'এটি অ্যাপ্লিকেশন ফ্যাক্টরি সমর্থন করে এবং সার্কুলার ইম্পোর্ট রোধ করে: এক্সটেনশনটি শেয়ার্ড ফাইলে তৈরি রেখে পরে create_app()-এ অ্যাপের সাথে যুক্ত করা যায়'
        },
        {
          en: 'It accelerates Python compilation speed by 500 percent',
          bn: 'এটি পাইথন কোডের কম্পাইলেশন স্পিড ৫০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It encrypts the database password with RSA keys',
          bn: 'এটি আরএসএ কি দিয়ে ডাটাবেজ পাসওয়ার্ড এনক্রিপ্ট করে'
        },
        {
          en: 'It converts SQL database tables into MongoDB collections',
          bn: 'এটি এসকিউএল ডাটাবেজের টেবিলকে মঙ্গোডিবি কালেকশনে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Separating instantiation from initialization allows shared extension modules without circular app imports.',
        bn: 'তৈরি করা ও চালু করার প্রক্রিয়া আলাদা রাখায় সার্কুলার ইম্পোর্ট ছাড়াই শেয়ার্ড এক্সটেনশন ব্যবহার সম্ভব হয়।'
      },
      explanation: {
        en: 'The init_app pattern decouples extension creation from app creation. This allows multiple applications to reuse the extension and avoids circular imports.',
        bn: 'init_app প্যাটার্ন এক্সটেনশন তৈরিকে অ্যাপ তৈরির সাথে আলাদা রাখে, যার ফলে একই এক্সটেনশন বহু অ্যাপে ব্যবহার করা যায় এবং ইম্পোর্ট সংঘাত দূর হয়।'
      }
    },
    {
      id: 'fl-fac-ex2',
      kind: 'mcq',
      topic: 'referencing blueprint endpoints with url_for',
      question: {
        en: 'If a Blueprint named "blog" defines a view function "def show_post(slug): ...", how must url_for be invoked from another module?',
        bn: 'যদি "blog" নামের ব্লুপ্রিন্টে "def show_post(slug): ..." ভিউ ফাংশন থাকে, তবে অন্য মডিউল থেকে url_for কীভাবে কল করতে হয়?'
      },
      options: [
        {
          en: 'url_for("blog.show_post", slug="flask-factory")',
          bn: 'url_for("blog.show_post", slug="flask-factory")'
        },
        {
          en: 'url_for("show_post", slug="flask-factory")',
          bn: 'url_for("show_post", slug="flask-factory")'
        },
        {
          en: 'url_for("/blog/show_post", slug="flask-factory")',
          bn: 'url_for("/blog/show_post", slug="flask-factory")'
        },
        {
          en: 'blog.url("show_post", slug="flask-factory")',
          bn: 'blog.url("show_post", slug="flask-factory")'
        }
      ],
      answer: 0,
      hint: {
        en: 'Blueprint routes are namespaced as "blueprint_name.function_name".',
        bn: 'ব্লুপ্রিন্টের রুটগুলো "blueprint_name.function_name" ফরম্যাটে নামভুক্ত থাকে।'
      },
      explanation: {
        en: 'Registering a view under a blueprint prefixes its endpoint name with the blueprint name, requiring "blog.show_post" in reverse resolution.',
        bn: 'ব্লুপ্রিন্টের অধীনস্থ ভিউগুলোর নামের শুরুতে ব্লুপ্রিন্টের নাম যুক্ত হয়, তাই রিভার্স রেজোলিউশনে "blog.show_post" লিখতে হয়।'
      }
    },
    {
      id: 'fl-fac-ex3',
      kind: 'mcq',
      topic: 'testing benefit of application factory pattern',
      question: {
        en: 'What major testing advantage does the Application Factory pattern provide over a global app instance?',
        bn: 'গ্লোবাল অ্যাপের তুলনায় অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্ন টেস্টিংয়ের ক্ষেত্রে কোন বড় সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'Each test function or test suite can invoke create_app(TestingConfig) to spin up an isolated app instance wired to a clean in-memory test database, preventing cross-test data pollution',
          bn: 'প্রতিটি টেস্ট create_app(TestingConfig) কল করে একদম নতুন ইন-মেমরি টেস্ট ডাটাবেজ সহ সম্পূর্ণ আলাদা ফ্রেশ অ্যাপ তৈরি করতে পারে'
        },
        {
          en: 'It eliminates the need to write unit tests altogether',
          bn: 'এটি ইউনিট টেস্ট লেখার প্রয়োজনীয়তা পুরোপুরি দূর করে দেয়'
        },
        {
          en: 'It runs test suites directly on the client web browser',
          bn: 'এটি ক্লায়েন্টের ওয়েব ব্রাউজারে সরাসরি টেস্ট স্যুট পরিচালনা করে'
        },
        {
          en: 'It reduces the total number of lines in Python files',
          bn: 'এটি পাইথন ফাইলের মোট কোড লাইনের সংখ্যা কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A factory produces fresh app instances for each test environment on demand.',
        bn: 'ফ্যাক্টরি প্রতিটি টেস্টের জন্য চাহিদা অনুযায়ী সম্পূর্ণ নতুন অ্যাপ অবজেক্ট সরবরাহ করে।'
      },
      explanation: {
        en: 'With an application factory, test harnesses create isolated app instances per test suite with distinct configuration overrides (like testing databases).',
        bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি দিয়ে টেস্টের সময় আলাদা ডাটাবেজ ও কনফিগারেশন সহ একদম ফ্রেশ অ্যাপ চালানো যায়, ফলে আগের টেস্টের ডাটা পরের টেস্ট নষ্ট করে না।'
      }
    },
    {
      id: 'fl-fac-ex4',
      kind: 'mcq',
      topic: 'blueprint url prefix functionality',
      question: {
        en: 'When registering "app.register_blueprint(api_bp, url_prefix=\'/api/v1\')", what happens to a route declared inside api_bp as "@api_bp.route(\'/users\')"?',
        bn: '"app.register_blueprint(api_bp, url_prefix=\'/api/v1\')" দিয়ে রেজিস্টার করলে api_bp-এর ভেতরের "@api_bp.route(\'/users\')" রুটের কী হবে?',
      },
      options: [
        {
          en: 'The route becomes accessible publicly at "/api/v1/users", prepending the prefix to all routes in the blueprint',
          bn: 'রুটটি পাবলিকলি "/api/v1/users" পাথে পাওয়া যাবে, কারণ প্রিফিক্সটি ব্লুপ্রিন্টের সব রুটের শুরুতে বসে'
        },
        {
          en: 'The route is ignored and discarded by Flask',
          bn: 'ফ্লাস্ক রুটটি পুরোপুরি বাতিল করে দেয়'
        },
        {
          en: 'The prefix replaces the view function name in Python memory',
          bn: 'প্রিফিক্সটি ভিউ ফাংশনের নাম বদলে ফেলে'
        },
        {
          en: 'The route can only be accessed using an FTP client',
          bn: 'রুটটি কেবল এফটিপি ক্লায়েন্ট দিয়ে এক্সেস করা যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The url_prefix argument mounts all blueprint paths under that common URL subtree.',
        bn: 'url_prefix আর্গুমেন্ট ব্লুপ্রিন্টের সমস্ত রুটকে ওই সাব-পাথের অধীনে মাউন্ট করে।'
      },
      explanation: {
        en: 'Flask prepends the url_prefix specified during registration to all URL rules defined on that blueprint, keeping API versioning clean.',
        bn: 'রেজিস্ট্রেশনের সময় url_prefix দিলে ফ্লাস্ক ব্লুপ্রিন্টের প্রতিটি রুটের শুরুতে সেই পাথ যোগ করে দেয়, ফলে এপিআই ভার্সনিং করা সহজ হয়।'
      }
    }
  ],
  quiz: {
    id: 'blueprints-and-the-factory-quiz',
    title: {
      en: 'Flask Application Factory & Blueprints Quiz',
      bn: 'ফ্লাস্ক অ্যাপ্লিকেশন ফ্যাক্টরি ও ব্লুপ্রিন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-relative-url-for-inside-blueprint',
        kind: 'mcq',
        topic: 'relative endpoint resolution using dot notation in url_for',
        question: {
          en: 'Inside a template or view rendered within the "admin" blueprint, what does calling "url_for(\'.dashboard\')" accomplish?',
          bn: '"admin" ব্লুপ্রিন্টের ভেতরের কোনো টেমপ্লেট বা ভিউ থেকে "url_for(\'.dashboard\')" কল করলে কী অর্জিত হয়?'
        },
        options: [
          {
            en: 'It resolves to the "dashboard" endpoint of the currently active blueprint ("admin.dashboard") using relative dot-notation',
            bn: 'এটি ডট-নোটেশনের মাধ্যমে বর্তমানে সক্রিয় ব্লুপ্রিন্টের "dashboard" এন্ডপয়েন্টে ("admin.dashboard") লিংক তৈরি করে'
          },
          {
            en: 'It generates a link to the root index of the website',
            bn: 'এটি ওয়েবসাইটের মূল হোমপেজের লিংক তৈরি করে'
          },
          {
            en: 'It triggers a syntax error because endpoints must never start with a dot',
            bn: 'এটি সিনট্যাক্স এরর দেয় কারণ এন্ডপয়েন্ট কখনো ডট দিয়ে শুরু হতে পারে না'
          },
          {
            en: 'It opens the browser developer tools console',
            bn: 'এটি ব্রাউজারের ডেভেলপার টুলস কনসোল খুলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A leading dot in url_for indicates relative endpoint resolution within the current blueprint.',
          bn: 'url_for-এর শুরুতে ডট থাকা মানে বর্তমান ব্লুপ্রিন্টের ভেতরেই রিলেটিভ এন্ডপয়েন্ট খোঁজা।'
        },
        explanation: {
          en: 'When inside a blueprint, url_for(".view_name") automatically prepends the current blueprint name, enabling portable blueprints that can be renamed without breaking internal links.',
          bn: 'ব্লুপ্রিন্টের ভেতর ".view_name" লিখলে ফ্লাস্ক নিজে থেকেই ব্লুপ্রিন্টের নাম বসিয়ে নেয়, ফলে ব্লুপ্রিন্টের নাম বদলালেও ভেতরের লিংক ভাঙে না।'
        }
      },
      {
        id: 'q-config-from-object-pattern',
        kind: 'mcq',
        topic: 'loading configuration via config.from_object',
        question: {
          en: 'Why is using "app.config.from_object(\'config.ProductionConfig\')" preferred over hardcoding settings in create_app()?',
          bn: 'create_app()-এ সেটিংস ফিক্সড লেখার বদলে "app.config.from_object(\'config.ProductionConfig\')" ব্যবহার করা কেন শ্রেয়?'
        },
        options: [
          {
            en: 'It enables configuration inheritance (e.g. ProductionConfig inherits from BaseConfig), cleanly segregating environment variables, secrets, and database URIs without code duplication',
            bn: 'এটি কনফিগারেশন ইনহেরিটেন্সের সুযোগ দেয় (BaseConfig থেকে ProductionConfig), যার ফলে কোড ডুপ্লিকেশন ছাড়াই পরিবেশভেদে ডাটাবেজ ও সিক্রেট আলাদা রাখা যায়'
          },
          {
            en: 'It compresses the Python files into a single binary zip',
            bn: 'এটি পাইথন ফাইলগুলোকে একটি জিপ ফাইলে সংকুচিত করে'
          },
          {
            en: 'It bypasses operating system file read permissions',
            bn: 'এটি অপারেটিং সিস্টেমের ফাইল পারমিশন বাইপাস করে'
          },
          {
            en: 'It allows storing passwords in plain text without security risks',
            bn: 'এটি কোনো নিরাপত্তা ঝুঁকি ছাড়াই পাসওয়ার্ড প্লেইন টেক্সটে রাখতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Class-based configs allow clean inheritance hierarchies across environments.',
          bn: 'ক্লাস-ভিত্তিক কনফিগ বিভিন্ন পরিবেশের জন্য সহজে ইনহেরিটেন্স ব্যবহারের সুযোগ দেয়।'
        },
        explanation: {
          en: 'Class-based configurations allow ProductionConfig to inherit common settings from BaseConfig and override only production-specific values (like database URIs and secret keys).',
          bn: 'ক্লাস ভিত্তিক কনফিগারেশনে ProductionConfig সাধারণ সেটিংস BaseConfig থেকে পায় এবং শুধু প্রোডাকশনের নির্দিষ্ট মানগুলো ওভাররাইড করতে পারে।'
        }
      },
      {
        id: 'q-blueprint-template-folder-isolation',
        kind: 'mcq',
        topic: 'blueprint template folder search order',
        question: {
          en: 'If a Blueprint declares "template_folder=\'templates\'", how does Flask resolve template names if both the app root and the blueprint define a file named "index.html"?',
          bn: 'ব্লুপ্রিন্টে "template_folder=\'templates\'" থাকলে, অ্যাপের মূল ফোল্ডার এবং ব্লুপ্রিন্ট উভয় জায়গায় "index.html" থাকলে ফ্লাস্ক কোনটি আগে বেছে নেয়?'
        },
        options: [
          {
            en: 'The app root "templates" directory takes precedence over the blueprint templates directory, which is why blueprint templates should be placed inside a subfolder matching the blueprint name (e.g. templates/auth/index.html)',
            bn: 'অ্যাপের মূল "templates" ফোল্ডার ব্লুপ্রিন্টের চেয়ে অগ্রাধিকার পায়, এই কারণেই ব্লুপ্রিন্টের টেমপ্লেটগুলোকে ব্লুপ্রিন্টের নামের সাব-ফোল্ডারে (templates/auth/index.html) রাখা উচিত'
          },
          {
            en: 'The blueprint template always takes precedence, overwriting the app template',
            bn: 'ব্লুপ্রিন্টের টেমপ্লেট সর্বদা অগ্রাধিকার পেয়ে মূল টেমপ্লেটকে ওভাররাইট করে'
          },
          {
            en: 'Flask raises a TemplateCollisionError and refuses to start',
            bn: 'ফ্লাস্ক TemplateCollisionError দিয়ে সার্ভার চালু করতে অস্বীকার করে'
          },
          {
            en: 'Flask merges both HTML files together using string concatenation',
            bn: 'ফ্লাস্ক দুটি এইচটিএমএল ফাইলকে জোড়া লাগিয়ে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'App-level templates override blueprint templates by design.',
          bn: 'অ্যাপ-লেভেলের টেমপ্লেট ইচ্ছাকৃতভাবেই ব্লুপ্রিন্ট টেমপ্লেটের ওপর অগ্রাধিকার পায়।'
        },
        explanation: {
          en: 'Flask searches the application template folder first before blueprint template folders. Best practice is to namespace blueprint templates inside subdirectories (templates/auth/).',
          bn: 'ফ্লাস্ক প্রথমে মূল অ্যাপের ফোল্ডার দেখে, তারপর ব্লুপ্রিন্ট খোঁজে। তাই নাম সংঘাত এড়াতে templates/auth/-এর মতো সাব-ফোল্ডার ব্যবহার করাই উত্তম।'
        }
      },
      {
        id: 'q-circular-import-resolution-mechanism',
        kind: 'mcq',
        topic: 'how the factory pattern mechanically breaks import loops',
        question: {
          en: 'Mechanically, why does moving "app = Flask(__name__)" into "def create_app():" break circular imports between views and models?',
          bn: 'প্রযুক্তিগতভাবে, "app = Flask(__name__)"-কে "def create_app():" ফাংশনের ভেতর নিলে কেন ভিউ ও মডেলের মধ্যবর্তী সার্কুলার ইম্পোর্ট ভেঙে যায়?'
        },
        options: [
          {
            en: 'Because view and model modules no longer need to import "app" at the top of their files; instead, blueprints register views independently and extensions are imported from a decoupled extensions module',
            bn: 'কারণ ভিউ এবং মডেল মডিউলগুলোকে আর ফাইলের শুরুতে "app" ইম্পোর্ট করতে হয় না; ব্লুপ্রিন্ট আলাদাভাবে রুট রাখে এবং এক্সটেনশনগুলো স্বাধীন মডিউল থেকে আসে'
          },
          {
            en: 'Because Python disables imports when functions are defined',
            bn: 'কারণ ফাংশন তৈরি করলে পাইথন ইম্পোর্ট করা বন্ধ করে দেয়'
          },
          {
            en: 'Because create_app() compiles Python code into C before execution',
            bn: 'কারণ create_app() কোড রান করার আগেই পাইথনকে সি ভাষায় কম্পাইল করে'
          },
          {
            en: 'The operating system kernel resolves circular dependencies automatically',
            bn: 'অপারেটিং সিস্টেমের কার্নেল সার্কুলার ডিপেন্ডেন্সি নিজে থেকেই মিটিয়ে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Neither models nor blueprints depend on the app object at import time.',
          bn: 'ইম্পোর্টের সময় মডেল বা ব্লুপ্রিন্ট কারও জন্যই app অবজেক্টের প্রয়োজন হয় না।'
        },
        explanation: {
          en: 'With a factory and blueprints, route files import only their Blueprint object, and models import only "db" from extensions.py. The "app" object is constructed later, eliminating import cycles.',
          bn: 'ফ্যাক্টরি ও ব্লুপ্রিন্ট ব্যবহার করলে রুটগুলো কেবল ব্লুপ্রিন্ট অবজেক্ট নেয় এবং মডেল কেবল db ইম্পোর্ট করে। তখন কোনো মডিউলকেই app ইম্পোর্ট করতে হয় না, ফলে চক্রাকার সমস্যা কাটে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'extensions-on-the-shelf',
    title: {
      en: 'Extensions & ORM — Flask-SQLAlchemy, Migrations & Sessions',
      bn: 'এক্সটেনশন ও ওআরএম — ফ্লাস্ক-এসকিউএলঅ্যালকেমি, মাইগ্রেশন ও সেশন'
    }
  }
};
