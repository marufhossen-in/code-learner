import type { Hub } from '../../lib/types';
import { TheSteamingAppLesson } from './lessons/the-steaming-app';
import { RoutesAndRulesLesson } from './lessons/routes-and-rules';
import { RequestsInFlightLesson } from './lessons/requests-in-flight';
import { TemplatesWithJinjaLesson } from './lessons/templates-with-jinja';
import { BlueprintsAndTheFactoryLesson } from './lessons/blueprints-and-the-factory';
import { ExtensionsOnTheShelfLesson } from './lessons/extensions-on-the-shelf';
import { LoginsAtTheFlapLesson } from './lessons/logins-at-the-flap';
import { TheStallOpensLesson } from './lessons/the-stall-opens';

export const flaskHub: Hub = {
  slug: 'flask',
  name: 'Flask',
  icon: '🧪',
  tagline: {
    en: 'Master Python micro-framework engineering: WSGI pipelines, routing, Jinja2, blueprints, application factories, extensions, authentication, and Gunicorn deployment.',
    bn: 'পাইথন মাইক্রো-ফ্রেমওয়ার্ক ইঞ্জিনিয়ারিং শিখুন: WSGI পাইপলাইন, রাউটিং, জিনজা২, ব্লুপ্রিন্ট, অ্যাপ্লিকেশন ফ্যাক্টরি, এক্সটেনশন, অথেনটিকেশন ও ইউনিকর্ন ডেপ্লয়মেন্ট।'
  },
  intro: {
    en: 'Flask is Python\'s lightweight, highly extensible WSGI micro-framework powered by Werkzeug and Jinja2. Unlike monolithic frameworks with rigid structures, Flask provides the essential HTTP routing and context primitives while leaving database, authentication, and architectural choices in developer hands. This master track guides you from basic route decorators to enterprise-grade application factories, SQLAlchemy ORM integration, session security, and containerized production deployment.',
    bn: 'ফ্লাস্ক হলো পাইথনের একটি হালকা এবং অত্যন্ত নমনীয় WSGI মাইক্রো-ফ্রেমওয়ার্ক যা Werkzeug ও Jinja2-এর ওপর ভিত্তি করে তৈরি। গতানুগতিক ভারী ফ্রেমওয়ার্কের মতো ফ্লাস্ক কোনো নির্দিষ্ট কাঠামো চাপিয়ে দেয় না; বরং এটি ডেভেলপারকে ডাটাবেজ, অথেনটিকেশন ও আর্কিটেকচার নির্বাচনের পূর্ণ স্বাধীনতা দেয়। এই ট্র্যাকটিতে আপনি সাধারণ রাউট ডেকোরেটর থেকে শুরু করে এন্টারপ্রাইজ অ্যাপ্লিকেশন ফ্যাক্টরি, SQLAlchemy ওআরএম, সেশন সুরক্ষা এবং কন্টেইনারাইজড প্রোডাকশন ডেপ্লয়মেন্ট পুঙ্খানুপুঙ্খ শিখবেন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Routing & Request Processing',
        bn: 'ধাপ ১ — মূল রাউটিং ও রিকোয়েস্ট প্রসেসিং'
      },
      items: [
        {
          en: 'Flask Fundamentals: WSGI architecture, minimal app instance, run CLI, and development server (Lesson 1)',
          bn: 'ফ্লাস্কের মূলভিত্তি: WSGI আর্কিটেকচার, মিনিমাল অ্যাপ ইনস্ট্যান্স, রান সিএলআই ও লোকাল সার্ভার (পাঠ ১)'
        },
        {
          en: 'Routes and URL Rules: dynamic path converters, HTTP method dispatching, and url_for reverse resolution (Lesson 2)',
          bn: 'রাউট ও ইউআরএল নিয়ম: ডায়নামিক পাথ কনভার্টার, এইচটিটিপি মেথড ডিসপ্যাচ ও url_for রিভার্স রেজোলিউশন (পাঠ ২)'
        },
        {
          en: 'Requests and Contexts: request object, query args, JSON payloads, file uploads, and LocalProxy mechanisms (Lesson 3)',
          bn: 'রিকোয়েস্ট ও কনটেক্সট: রিকোয়েস্ট অবজেক্ট, কোয়েরি আর্গুমেন্ট, JSON পে-লোড, ফাইল আপলোড ও লোকালপ্রক্সি (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Presentation, Architecture & Extensions',
        bn: 'ধাপ ২ — প্রেজেন্টেশন, আর্কিটেকচার ও এক্সটেনশন'
      },
      items: [
        {
          en: 'Jinja2 Templating: template inheritance with extends and block, piped filters, macros, and XSS auto-escaping (Lesson 4)',
          bn: 'জিনজা২ টেমপ্লেট: extends ও block দিয়ে ইনহেরিটেন্স, পাইপড ফিল্টার, ম্যাক্রো ও এক্সএসএস অটো-এসকেপিং (পাঠ ৪)'
        },
        {
          en: 'Blueprints and the Application Factory: create_app pattern, modular routing, and configuration layering (Lesson 5)',
          bn: 'ব্লুপ্রিন্ট ও অ্যাপ্লিকেশন ফ্যাক্টরি: create_app প্যাটার্ন, মডিউলার রাউটিং ও কনফিগারেশন লেয়ারিং (পাঠ ৫)'
        },
        {
          en: 'Flask Extensions & ORM: Flask-SQLAlchemy models, relationship mapping, and database migrations with Flask-Migrate (Lesson 6)',
          bn: 'ফ্লাস্ক এক্সটেনশন ও ওআরএম: Flask-SQLAlchemy মডেল, রিলেশনাল ম্যাপিং ও Flask-Migrate দিয়ে মাইগ্রেশন (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Security, Authentication & Production Deployment',
        bn: 'ধাপ ৩ — নিরাপত্তা, অথেনটিকেশন ও প্রোডাকশন ডেপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Authentication & Session Security: password hashing with Werkzeug, cryptographically signed cookies, and login decorators (Lesson 7)',
          bn: 'অথেনটিকেশন ও সেশন সুরক্ষা: Werkzeug দিয়ে পাসওয়ার্ড হ্যাশিং, ক্রিপ্টোগ্রাফিক সেশন ও লগইন ডেকোরেটর (পাঠ ৭)'
        },
        {
          en: 'Production Hardening & Deployment: Gunicorn WSGI workers, Nginx reverse proxy, ProxyFix headers, and Docker packaging (Lesson 8)',
          bn: 'প্রোডাকশন হার্ডেনিং ও ডেপ্লয়মেন্ট: Gunicorn ওয়ার্কার, Nginx রিভার্স প্রক্সি, ProxyFix হেডার ও ডকার প্যাকেজিং (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheSteamingAppLesson,
    RoutesAndRulesLesson,
    RequestsInFlightLesson,
    TemplatesWithJinjaLesson,
    BlueprintsAndTheFactoryLesson,
    ExtensionsOnTheShelfLesson,
    LoginsAtTheFlapLesson,
    TheStallOpensLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Modular RESTful API with Flask and SQLAlchemy',
        bn: 'ফ্লাস্ক ও এসকিউএলঅ্যালকেমি দিয়ে মডিউলার RESTful এপিআই'
      },
      brief: {
        en: 'Build an enterprise-grade backend service using the application factory pattern, Blueprints for route separation, Flask-SQLAlchemy for database persistence, and marshmallow for request validation and serialization. Includes token-based authentication and rate limiting.',
        bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্ন, রুটের জন্য ব্লুপ্রিন্ট, ডাটাবেজের জন্য Flask-SQLAlchemy এবং ইনপুট ভ্যালিডেশনের জন্য marshmallow ব্যবহার করে একটি পূর্ণাঙ্গ এন্টারপ্রাইজ ব্যাকএন্ড সার্ভিস তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Secure Content Management System with Jinja2 & User Auth',
        bn: 'জিনজা২ ও ইউজার অথেনটিকেশন সহ নিরাপদ কনটেন্ট ম্যানেজমেন্ট সিস্টেম'
      },
      brief: {
        en: 'Implement a full-stack content publishing platform featuring Jinja2 template inheritance, WTForms validation, CSRF defense, secure session management, and multi-worker deployment behind an Nginx reverse proxy with Docker Compose.',
        bn: 'জিনজা২ টেমপ্লেট ইনহেরিটেন্স, WTForms ভ্যালিডেশন, সিএসআরএফ প্রতিরোধ, নিরাপদ সেশন ম্যানেজমেন্ট এবং ডকার কম্পোজ সহ Nginx-এর পেছনে মাল্টি-ওয়ার্কার ডেপ্লয়মেন্ট সম্পন্ন একটি পূর্ণাঙ্গ প্ল্যাটফর্ম গড়ে তুলুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Adopt the Application Factory Pattern: Encapsulate app initialization inside a create_app() function to enable flexible configuration and isolated testing environments.',
      bn: 'অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্ন গ্রহণ করুন: কনফিগারেশন পরিবর্তন ও কার্যকর টেস্টিং নিশ্চিত করতে create_app() ফাংশনের ভেতর অ্যাপ তৈরি করুন।'
    },
    {
      en: 'Organize Routes with Blueprints: Structure complex applications into domain-driven Blueprints (e.g. auth, api, dashboard) to keep routing decoupled and maintainable.',
      bn: 'ব্লুপ্রিন্ট দিয়ে রুট সংগঠিত করুন: জটিল অ্যাপ্লিকেশনকে ডোমেনভিত্তিক ব্লুপ্রিন্টে (auth, api, dashboard) ভাগ করে কোড পরিচ্ছন্ন ও দীর্ঘস্থায়ী করুন।'
    },
    {
      en: 'Manage Context Lifecycles Explicitly: Register teardown callbacks with @app.teardown_appcontext to reliably close database connections and release resources.',
      bn: 'কনটেক্সট লাইফসাইকেল নিয়ন্ত্রণ করুন: ডাটাবেজ কানেকশন নির্ভরযোগ্যভাবে বন্ধ করতে @app.teardown_appcontext ব্যবহার করুন।'
    },
    {
      en: 'Strict Secret and Credential Management: Never hardcode SECRET_KEY; always load cryptographic secrets and database URIs from environment variables.',
      bn: 'কঠোর গোপনীয়তা বজায় রাখুন: SECRET_KEY কখনো কোডে ফিক্সড রাখবেন না; সর্বদা পরিবেশ চলক (environment variable) থেকে সিক্রেট চাবি ও ডাটাবেজ ইউআরআই লোড করুন।'
    },
    {
      en: 'Harden Session Cookies: Configure SESSION_COOKIE_HTTPONLY=True, SESSION_COOKIE_SECURE=True, and SESSION_COOKIE_SAMESITE="Lax" to prevent XSS and CSRF token theft.',
      bn: 'সেশন কুকি সুরক্ষিত করুন: কুকি চুরি ও এক্সএসএস আক্রমণ রোধে SESSION_COOKIE_HTTPONLY ও SESSION_COOKIE_SECURE সক্রিয় রাখুন।'
    },
    {
      en: 'Deploy Behind a Production Reverse Proxy: Never expose runserver to the public; serve WSGI with Gunicorn or uWSGI behind Nginx using Werkzeug ProxyFix middleware.',
      bn: 'প্রোডাকশন রিভার্স প্রক্সি ব্যবহার করুন: পাবলিক ইন্টারনেটে কখনই runserver চালাবেন না; Nginx ও Werkzeug ProxyFix-এর পেছনে Gunicorn ওয়ার্কার দিয়ে অ্যাপ হোস্ট করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between Flask\'s Application Context and Request Context?',
        bn: 'ফ্লাস্কের অ্যাপ্লিকেশন কনটেক্সট (Application Context) এবং রিকোয়েস্ট কনটেক্সট (Request Context)-এর মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'Flask uses two distinct thread-local contexts managed via Werkzeug LocalProxy. The Application Context (providing current_app and g) tracks application-level state such as database connection handles and configuration, existing during request handling as well as CLI scripts or background tasks. The Request Context (providing request and session) tracks incoming HTTP transaction data (headers, query parameters, cookies) and exists strictly for the lifespan of an active HTTP connection. Attempting to access request outside an active HTTP request raises a RuntimeError.',
        bn: 'ফ্লাস্ক Werkzeug LocalProxy-এর মাধ্যমে দুটি পৃথক থ্রেড-লোকাল কনটেক্সট পরিচালনা করে। অ্যাপ্লিকেশন কনটেক্সট (যা current_app ও g প্রদান করে) ডাটাবেজ কানেকশন ও কনফিগারেশন সংক্রান্ত অ্যাপ-লেভেল স্টেট ধারণ করে, যা এইচটিটিপি রিকোয়েস্টের বাইরে সিএলআই কমান্ড বা ব্যাকগ্রাউন্ড টাস্কেও সচল থাকতে পারে। অন্যদিকে রিকোয়েস্ট কনটেক্সট (যা request ও session প্রদান করে) একটি ইনকামিং এইচটিটিপি কল সংক্রান্ত ডাটা (হেডার, প্যারামিটার, কুকি) ধারণ করে এবং এটি কেবল সক্রিয় রিকোয়েস্ট চলাকালীন মেমরিতে থাকে। এইচটিটিপির বাইরে request অ্যাক্সেস করলে RuntimeError দেখা দেয়।'
      }
    },
    {
      q: {
        en: 'Why is the Application Factory pattern (create_app) standard in production Flask projects, and what problems does it solve?',
        bn: 'প্রোডাকশন ফ্লাস্ক প্রজেক্টে অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্ন (create_app) কেন স্ট্যান্ডার্ড এবং এটি কোন জটিলতাগুলোর সমাধান করে?'
      },
      a: {
        en: 'In small scripts, developers define a global "app = Flask(__name__)" object, which quickly causes circular import dependencies when models and route modules import each other. The Application Factory pattern encapsulates initialization inside a "def create_app(config_name):" function. This pattern solves three major architectural challenges: (1) it eliminates circular imports by allowing extensions (like db = SQLAlchemy()) to be instantiated without an immediate app instance and initialized later via db.init_app(app); (2) it enables seamless multi-environment testing by spinning up fresh app instances configured with distinct test databases; and (3) it supports running multiple instances of the same application concurrently with different settings.',
        bn: 'ছোট স্ক্রিপ্টে ডেভেলপাররা গ্লোবাল "app = Flask(__name__)" ব্যবহার করেন, যার ফলে মডেল ও রুট মডিউলের মাঝে বৃত্তাকার ইম্পোর্ট (circular import) জটিলতা দেখা দেয়। অ্যাপ্লিকেশন ফ্যাক্টরি প্যাটার্নে "def create_app(config_name):" ফাংশনের ভেতর সমস্ত ইনিশিয়ালাইজেশন সম্পন্ন হয়। এটি ৩টি বড় সমস্যার সমাধান করে: (১) এক্সটেনশনগুলোকে আগে ডিক্লেয়ার করে পরে db.init_app(app) দিয়ে যুক্ত করার সুযোগ দিয়ে সার্কুলার ইম্পোর্ট দূর করে; (২) আলাদা টেস্ট ডাটাবেজ দিয়ে প্রতিটি টেস্টের জন্য ফ্রেশ অ্যাপ তৈরি করা যায়; এবং (৩) একই সাথে ভিন্ন কনফিগারেশনের একাধিক অ্যাপ চালানো সম্ভব হয়।'
      }
    },
    {
      q: {
        en: 'How does Flask handle client sessions securely without a server-side database store by default?',
        bn: 'ডিফল্টভাবে কোনো সার্ভার-সাইড ডাটাবেজ ছাড়া ফ্লাস্ক কীভাবে ক্লায়েন্ট সেশন নিরাপদে পরিচালনা করে?'
      },
      a: {
        en: 'By default, Flask uses cryptographically signed client-side cookies via its itsdangerous dependency. When you write to session["user_id"] = 42, Flask serializes the dictionary, signs the payload using HMAC-SHA1 or HMAC-SHA256 with the secret application SECRET_KEY, and sends it as a browser cookie. While the payload is readable by the client (base64-encoded, not encrypted), the cryptographic signature guarantees that any client-side tampering invalidates the session immediately. For confidential data that must never be visible to the browser, teams adopt server-side sessions via Flask-Session backed by Redis.',
        bn: 'ডিফল্টভাবে ফ্লাস্ক itsdangerous লাইব্রেরি ব্যবহার করে ক্রিপ্টোগ্রাফিক্যালি স্বাক্ষরিত ক্লায়েন্ট-সাইড কুকি তৈরি করে। যখন আপনি session["user_id"] = 42 লেখেন, ফ্লাস্ক ডিকশনারিটিকে সিরিয়ালাইজ করে এবং SECRET_KEY দিয়ে HMAC ক্রিপ্টোগ্রাফিক স্বাক্ষর যোগ করে ব্রাউজার কুকিতে পাঠায়। ক্লায়েন্ট ডাটাটি পড়তে পারলেও (বেস৬৪ এনকোডেড) স্বাক্ষর থাকার কারণে কুকি সামান্য বদলালেই সেশনটি সাথে সাথে বাতিল হয়ে যায়। আর সম্পূর্ণ গোপনীয় ডাটা ক্লায়েন্ট থেকে আড়াল রাখতে Redis চালিত Flask-Session ব্যবহার করা হয়।'
      }
    },
    {
      q: {
        en: 'Why is Werkzeug\'s ProxyFix middleware essential when deploying a Flask app behind Nginx and Gunicorn?',
        bn: 'Nginx ও Gunicorn-এর পেছনে ফ্লাস্ক ডেপ্লয় করার সময় Werkzeug-এর ProxyFix মিডলওয়্যার কেন অপরিহার্য?'
      },
      a: {
        en: 'When Nginx acts as a reverse proxy, the TCP connection arriving at Gunicorn originates from Nginx (typically 127.0.0.1) over unencrypted HTTP. Without ProxyFix, Flask inspects the raw socket and incorrectly believes: (1) the remote client IP (request.remote_addr) is 127.0.0.1 rather than the actual visitor IP, breaking rate-limiters and audit logging; and (2) the request scheme (request.scheme) is "http" instead of "https", causing url_for(_external=True) to generate insecure HTTP links and breaking redirect loops. ProxyFix safely rewrites request headers (X-Forwarded-For, X-Forwarded-Proto, X-Forwarded-Host) to reflect the real client environment.',
        bn: 'যখন Nginx রিভার্স প্রক্সি হিসেবে কাজ করে, তখন Gunicorn-এ আসা সরাসরি TCP সংযোগটি Nginx (সাধারণত 127.0.0.1) থেকে আসে। ProxyFix না থাকলে ফ্লাস্ক সকেট মেপে ভুল সিদ্ধান্ত নেয়: (১) আসল ভিজিটরের আইপির বদলে ক্লায়েন্ট আইপি (request.remote_addr) হিসেবে 127.0.0.1 দেখতে পায়, যা রেট-লিমিট ও অডিট লগকে নষ্ট করে; এবং (২) প্রোটোকলকে https-এর বদলে http মনে করে, যার ফলে url_for ভুল http লিংক তৈরি করে এবং রিডাইরেক্ট লুপে ফেলে দেয়। ProxyFix মিডলওয়্যার বিশ্বস্ত প্রক্সি হেডারগুলো পড়ে সঠিক আইপি ও https প্রোটোকল পুনরুদ্ধার করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Throughput Microservices: Fintech and e-commerce architectures leverage Flask micro-framework endpoints to serve millions of lightweight transaction and payment webhook requests with minimal memory footprint.',
      bn: 'উচ্চ গতির মাইক্রোসার্ভিস: ফিনটেক ও ই-কমার্স প্ল্যাটফর্মগুলো সর্বনিম্ন মেমরি খরচে লাখ লাখ পেমেন্ট ওয়েবহুক ও ট্রানজেকশন প্রসেস করতে ফ্লাস্কের হালকা এন্ডপয়েন্ট ব্যবহার করে।'
    },
    {
      en: 'Machine Learning Model Inference APIs: Data science and AI teams wrap PyTorch and scikit-learn predictive models in Flask REST APIs due to Python native interoperability and zero boilerplate.',
      bn: 'মেশিন লার্নিং মডেল ইনফারেন্স এপিআই: ডাটা সায়েন্স ও এআই টিমগুলো তাদের PyTorch ও scikit-learn মডেলগুলোকে সরাসরি পাইথনে সহজে এপিআই হিসেবে পরিবেশন করতে ফ্লাস্ক বেছে নেয়।'
    },
    {
      en: 'Internal Enterprise Operations Dashboards: Engineering teams construct internal admin portals combining Flask-Admin, WTForms, and relational database views to manage operational workflows rapidly.',
      bn: 'অভ্যন্তরীণ এন্টারপ্রাইজ ড্যাশবোর্ড: আইটি ও ইঞ্জিনিয়ারিং দলগুলো দ্রুত প্রশাসনিক কাজের জন্য Flask-Admin ও WTForms ব্যবহার করে অপারেশনাল ব্যাক-অফিস পোর্টাল তৈরি করে।'
    },
    {
      en: 'Modular Domain-Driven Web Applications: Scaled software organizations structure sprawling monolithic web apps into decoupled domain Blueprints (authentication, catalog, billing, analytics) sharing a unified factory.',
      bn: 'মডিউলার ওয়েব অ্যাপ্লিকেশন: বড় প্রতিষ্ঠানগুলো তাদের প্ল্যাটফর্মকে ব্লুপ্রিন্টের মাধ্যমে বিভিন্ন স্বতন্ত্র ডোমেনে (অথেনটিকেশন, ক্যাটালগ, বিলিং) ভাগ করে একটি সেন্ট্রাল অ্যাপ ফ্যাক্টরির অধীনে পরিচালনা করে।'
    }
  ]
};
