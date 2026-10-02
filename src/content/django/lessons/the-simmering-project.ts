import type { Lesson } from '../../../lib/types';

export const TheSimmeringProjectLesson: Lesson = {
  slug: 'the-simmering-project',
  tech: 'django',
  title: {
    en: 'Django Architecture & First Project — MTV Pattern, manage.py & Project Setup',
    bn: 'জ্যাঙ্গো আর্কিটেকচার ও প্রথম প্রজেক্ট — এমটিভি প্যাটার্ন, manage.py ও প্রজেক্ট সেটআপ'
  },
  summary: {
    en: 'Django provides a robust, batteries-included foundation for web development adhering to the Model-Template-View (MTV) architectural pattern. In this foundational lesson, you will master project initialization with django-admin, modular app architecture, manage.py CLI workflows, and secure environment configuration.',
    bn: 'জ্যাঙ্গো মডেল-টেমপ্লেট-ভিউ (MTV) আর্কিটেকচারাল প্যাটার্ন অনুসরণ করে ওয়েব ডেভেলপমেন্টের জন্য একটি শক্তিশালী ভিত্তি প্রদান করে। এই প্রাথমিক পাঠে আপনি django-admin দিয়ে প্রজেক্ট তৈরি, মডিউলার অ্যাপ আর্কিটেকচার, manage.py কমান্ড লাইন ওয়ার্কফ্লো এবং নিরাপদ এনভায়রনমেন্ট কনফিগারেশন গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'django-mtv-architecture',
      text: {
        en: 'The Model-Template-View (MTV) Architecture',
        bn: 'মডেল-টেমপ্লেট-ভিউ (এমটিভি) আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications with Python, Django implements the Model-Template-View (MTV) pattern. The Model defines the data schema and database tables, the Template handles presentation layout and HTML generation, and the View contains the business logic that queries models and renders templates.',
        bn: 'যখন আপনি পাইথন দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন জ্যাঙ্গো মডেল-টেমপ্লেট-ভিউ (MTV) প্যাটার্ন অনুসরণ করে। মডেল ডাটাবেজ টেবিল ও স্কিমা নির্ধারণ করে, টেমপ্লেট এইচটিএমএল প্রেজেন্টেশন পরিচালনা করে এবং ভিউ ব্যবসায়িক লজিক ধারণ করে মডেল থেকে ডাটা এনে টেমপ্লেটে পাঠায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'MTV Pattern',
          def: {
            en: 'Django variant of MVC where Model manages data, Template handles HTML presentation, and View handles business execution logic.',
            bn: 'এমভিসির জ্যাঙ্গো সংস্করণ যেখানে মডেল ডাটা পরিচালনা করে, টেমপ্লেট প্রেজেন্টেশন সাজায় এবং ভিউ ব্যবসায়িক লজিক কার্যকর করে।'
          }
        },
        {
          term: 'manage.py',
          def: {
            en: 'A project-specific command-line utility used to run the development server, create database migrations, and manage administrative tasks.',
            bn: 'একটি প্রজেক্ট কমান্ড-লাইন টুল যা লোকাল সার্ভার চালানো, ডাটাবেজ মাইগ্রেশন তৈরি ও পরিচালনা এবং অন্যান্য প্রশাসনিক কাজে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'settings.py',
          def: {
            en: 'The central configuration file containing installed applications, database credentials, middleware pipelines, and security settings.',
            bn: 'মূল কনফিগারেশন ফাইল যা ইনস্টল করা অ্যাপের তালিকা, ডাটাবেজ তথ্য, মিডেলওয়্যার পাইপলাইন এবং সিকিউরিটি সেটিংস ধারণ করে।'
          }
        },
        {
          term: 'WSGI & ASGI',
          def: {
            en: 'Web Server Gateway Interface specifications enabling synchronous (WSGI) and asynchronous (ASGI) Python servers to communicate with web gateways.',
            bn: 'ওয়েব সার্ভার ইন্টারফেস যা সিঙ্ক্রোনাস (WSGI) এবং অ্যাসিনক্রোনাস (ASGI) পাইথন সার্ভারকে ওয়েব গেটওয়ের সাথে সংযুক্ত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'project-vs-app-table',
      text: {
        en: 'The Architectural Split: Django Project Versus Django App',
        bn: 'আর্কিটেকচারাল বিভাজন: জ্যাঙ্গো প্রজেক্ট বনাম জ্যাঙ্গো অ্যাপ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Django Project (django-admin startproject)', bn: 'জ্যাঙ্গো প্রজেক্ট (startproject)' },
        { en: 'Django App (python manage.py startapp)', bn: 'জ্যাঙ্গো অ্যাপ (startapp)' }
      ],
      rows: [
        [
          { en: 'Scope & Purpose', bn: 'পরিধি ও উদ্দেশ্য' },
          { en: 'The entire website container, configuration, and settings', bn: 'পুরো ওয়েবসাইটের একক ফ্রেমওয়ার্ক, কনফিগারেশন ও সেটিংস' },
          { en: 'A self-contained modular component (e.g. blog, accounts, store)', bn: 'একটি স্বয়ংসম্পূর্ণ মডিউল (যেমন ব্লগ, ইউজার অ্যাকাউন্ট, পেমেন্ট)' }
        ],
        [
          { en: 'Number per Site', bn: 'প্রতি সাইটে সংখ্যা' },
          { en: 'Exactly 1 project root per repository', bn: 'প্রতি রিপোজিটরিতে ঠিক 1 টি প্রজেক্ট রুট থাকে' },
          { en: 'Multiple modular apps (1 to dozens) composed together', bn: 'একাধিক মডিউলার অ্যাপের (1 থেকে বহু সংখ্যক) সমন্বয়ে গঠিত হয়' }
        ],
        [
          { en: 'Key Files', bn: 'প্রধান ফাইলসমূহ' },
          { en: 'manage.py, settings.py, urls.py, wsgi.py', bn: 'manage.py, settings.py, urls.py, wsgi.py' },
          { en: 'models.py, views.py, urls.py, admin.py, apps.py', bn: 'models.py, views.py, urls.py, admin.py, apps.py' }
        ],
        [
          { en: 'Reusability', bn: 'পুনর্ব্যবহারযোগ্যতা' },
          { en: 'Deployment-specific; bound to one web environment', bn: 'ডেপ্লয়মেন্ট নির্দিষ্ট; নির্দিষ্ট পরিবেশের সাথে আবদ্ধ' },
          { en: 'Pluggable; can be extracted and installed in other Django projects', bn: 'প্লাগেবল; অন্য যেকোনো জ্যাঙ্গো প্রজেক্টে সহজে ব্যবহারযোগ্য' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'bootstrapping-simulation-code',
      text: {
        en: 'Working Django Project Configuration and App Discovery Simulation',
        bn: 'কার্যকরী জ্যাঙ্গো প্রজেক্ট কনফিগারেশন ও অ্যাপ ডিসকভারি সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django settings.py and App Registry
class DjangoSettings {
  constructor() {
    this.debug = false;
    this.allowedHosts = ['api.codeshikhon.com', 'localhost'];
    this.installedApps = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'core.apps.CoreConfig',
      'blog.apps.BlogConfig'
    ];
  }

  isAppRegistered(appName) {
    return this.installedApps.some(app => app.includes(appName));
  }
}

// 1. Initializing Django settings environment
const settings = new DjangoSettings();

// 2. Verifying configuration
const totalInstalledApps = settings.installedApps.length;
const isBlogActive = settings.isAppRegistered('blog');

console.log('Django configured installed apps count:', totalInstalledApps);
// -> Django configured installed apps count: 6
console.log('Blog feature app registered status:', isBlogActive);
// -> Blog feature app registered status: true`,
      caption: {
        en: 'Django settings registry verifying 6 installed apps and active blog app',
        bn: 'জ্যাঙ্গো সেটিংস রেজিস্ট্রি ৬টি ইনস্টল করা অ্যাপ এবং ব্লগ অ্যাপ নিশ্চিত করছে'
      }
    },
    {
      type: 'heading',
      id: 'essential-cli-commands',
      text: {
        en: 'Essential manage.py CLI Commands',
        bn: 'প্রয়োজনীয় manage.py কমান্ড লাইন নির্দেশিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The manage.py script wraps django.core.management, injecting your project settings into the Python path. Understanding the core management commands allows you to run development servers, generate database schema changes, and launch administrative tasks efficiently.',
        bn: 'manage.py স্ক্রিপ্টটি জ্যাঙ্গোর ম্যানেজমেন্ট মডিউলকে ঘিরে রাখে এবং পাইথন পাথে প্রজেক্টের সেটিংস যুক্ত করে। মূল ম্যানেজমেন্ট কমান্ডগুলো জানা থাকলে আপনি সহজেই লোকাল সার্ভার চালানো, ডাটাবেজ স্কিমা পরিবর্তন তৈরি এবং প্রশাসনিক কাজ পরিচালনা করতে পারবেন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. python manage.py runserver: Boots the local lightweight development web server on port 8000.',
          bn: '১. python manage.py runserver: লোকাল কম্পিউটারে পোর্ট ৮০০০-এ হালকা ডেভেলপমেন্ট সার্ভার চালু করে।'
        },
        {
          en: '2. python manage.py startapp <name>: Creates the modular directory layout for a new Django app.',
          bn: '২. python manage.py startapp <name>: নতুন জ্যাঙ্গো অ্যাপের জন্য প্রয়োজনীয় ফাইল ও ফোল্ডার তৈরি করে।'
        },
        {
          en: '3. Register in INSTALLED_APPS: Whenever you create an app, add its AppConfig path to INSTALLED_APPS in settings.py.',
          bn: '৩. INSTALLED_APPS-এ নিবন্ধন: নতুন অ্যাপ তৈরির পর সর্বদা settings.py-এর INSTALLED_APPS তালিকায় তার নাম লিখুন।'
        },
        {
          en: '4. Keep Secrets in Environment: Read SECRET_KEY and database passwords from environment variables rather than hardcoding them.',
          bn: '৪. এনভায়রনমেন্টে সিক্রেট রাখা: SECRET_KEY ও ডাটাবেজ পাসওয়ার্ড কোডে না লিখে পরিবেশ চলক (env) থেকে পড়ুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-boot-ex1',
      kind: 'mcq',
      topic: 'django mtv pattern responsibilities',
      question: {
        en: 'In Django Model-Template-View (MTV) architectural pattern, what is the specific role of the View?',
        bn: 'জ্যাঙ্গোর মডেল-টেমপ্লেট-ভিউ (MTV) আর্কিটেকচারাল প্যাটার্নে ভিউয়ের সুনির্দিষ্ট কাজ কী?'
      },
      options: [
        {
          en: 'To accept HTTP requests, execute business logic, query data from Models, and render the resulting Template or JSON response',
          bn: 'এইচটিটিপি রিকোয়েস্ট গ্রহণ করা, ব্যবসায়িক লজিক কার্যকর করা, মডেল থেকে ডাটা আনা এবং টেমপ্লেট বা জেএসন রেসপন্স তৈরি করা'
        },
        {
          en: 'To write CSS styling rules for mobile Safari browsers',
          bn: 'মোবাইল সাফারি ব্রাউজারের জন্য সিএসএস স্টাইল লেখা'
        },
        {
          en: 'To execute low-level SQL schema migrations on disk',
          bn: 'ডিস্কে সরাসরি এসকিউএল স্কিমা মাইগ্রেশন কার্যকর করা'
        },
        {
          en: 'To bind the Python process to physical hardware CPU registers',
          bn: 'পাইথন প্রসেসকে ফিজিক্যাল সিপিইউ রেজিস্টারের সাথে সংযুক্ত করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'In Django, the View functions like the Controller in classic MVC.',
        bn: 'জ্যাঙ্গোর ভিউ মূলত সাধারণ এমভিসি কাঠামোর কন্ট্রোলারের মতো কাজ করে।'
      },
      explanation: {
        en: 'In Django MTV, the View contains the business callback logic connecting incoming HTTP requests with database Models and rendered Templates.',
        bn: 'জ্যাঙ্গো এমটিভি প্যাটার্নে ভিউ হলো ব্যবসায়িক কলব্যাক যা রিকোয়েস্ট গ্রহণ করে মডেলের সাথে যোগাযোগ করে এবং টেমপ্লেট রেন্ডার করে।'
      }
    },
    {
      id: 'dj-boot-ex2',
      kind: 'mcq',
      topic: 'project vs app distinction',
      question: {
        en: 'What is the fundamental architectural difference between a Django Project and a Django App?',
        bn: 'একটি জ্যাঙ্গো প্রজেক্ট এবং একটি জ্যাঙ্গো অ্যাপের মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'A project is a collection of configurations and apps for a particular website; an app is a self-contained, modular web application that performs a specific duty',
          bn: 'প্রজেক্ট হলো একটি নির্দিষ্ট ওয়েবসাইটের কনফিগারেশন ও সেটিংসের সমষ্টি; আর অ্যাপ হলো একটি স্বয়ংসম্পূর্ণ মডিউলার উপাদান যা নির্দিষ্ট কাজ সম্পন্ন করে'
        },
        {
          en: 'A project must be written in Python 2, while an app is written in Python 3',
          bn: 'প্রজেক্ট পাইথন 2 এ লিখতে হয় আর অ্যাপ পাইথন 3 এ'
        },
        {
          en: 'An app runs on Linux, while a project only runs on Windows',
          bn: 'অ্যাপ লিনাক্সে চলে আর প্রজেক্ট কেবল উইন্ডোজে'
        },
        {
          en: 'There is no difference; they are exact aliases for the same directory',
          bn: 'উভয়ের মাঝে কোনো তফাত নেই; এগুলো একই ফোল্ডারের ভিন্ন নাম'
        }
      ],
      answer: 0,
      hint: {
        en: 'A project houses the website configuration; apps are pluggable modules inside it.',
        bn: 'প্রজেক্ট ওয়েবসাইটের মূল ফ্রেমওয়ার্ক ধারণ করে; আর অ্যাপগুলো তার ভেতরের প্লাগেবল মডিউল।'
      },
      explanation: {
        en: 'A project contains the overall site configuration (settings.py, urls.py). An app is a modular, pluggable component (like blogs, polls, or users) that can be reused across projects.',
        bn: 'প্রজেক্ট পুরো ওয়েবসাইটের সেটিংস ধারণ করে। আর অ্যাপ হলো মডিউলার ফিচার (যেমন ব্লগ, পোল, ইউজার) যা অন্য প্রজেক্টেও ব্যবহার করা যায়।'
      }
    },
    {
      id: 'dj-boot-ex3',
      kind: 'mcq',
      topic: 'installed apps registration necessity',
      question: {
        en: 'What occurs if you create a new app using "python manage.py startapp blog" but forget to add it to INSTALLED_APPS in settings.py?',
        bn: 'যদি আপনি "python manage.py startapp blog" দিয়ে অ্যাপ বানান কিন্তু settings.py-এর INSTALLED_APPS-এ যোগ করতে ভুলে যান তবে কী ঘটবে?'
      },
      options: [
        {
          en: 'Django will not recognize the app, meaning its models will be ignored by makemigrations, its templates will not be discovered, and its admin classes will not register',
          bn: 'জ্যাঙ্গো অ্যাপটিকে চিনবে না, ফলে makemigrations মডেলগুলোকে উপেক্ষা করবে, টেমপ্লেট খুঁজে পাবে না এবং অ্যাডমিন প্যানেলে তা নিবন্ধিত হবে না'
        },
        {
          en: 'The operating system deletes the blog folder automatically',
          bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে ব্লগ ফোল্ডারটি মুছে ফেলবে'
        },
        {
          en: 'Django converts the Python code into Ruby on Rails code',
          bn: 'জ্যাঙ্গো পাইথন কোডকে রুবি অন রেইলস কোডে রূপান্তর করবে'
        },
        {
          en: 'The server crashes with an unrecoverable segmentation fault',
          bn: 'সার্ভার সেগমেন্টেশন ফল্ট ঘটিয়ে সাথে সাথে ক্র্যাশ করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django uses INSTALLED_APPS as its central registry of active components.',
        bn: 'জ্যাঙ্গো INSTALLED_APPS তালিকাকে সক্রিয় উপাদানগুলোর মূল রেজিস্ট্রি হিসেবে ব্যবহার করে।'
      },
      explanation: {
        en: 'Django only scans apps listed in INSTALLED_APPS. Unlisted apps are completely ignored by the migration engine, template loader, and admin registry.',
        bn: 'জ্যাঙ্গো কেবল INSTALLED_APPS-এ থাকা অ্যাপগুলোকেই স্ক্যান করে। সেখানে না থাকলে মাইগ্রেশন ইঞ্জিন বা টেমপ্লেট লোডার অ্যাপটিকে সম্পূর্ণ এড়িয়ে যায়।'
      }
    },
    {
      id: 'dj-boot-ex4',
      kind: 'mcq',
      topic: 'default development server port',
      question: {
        en: 'What is the default TCP network port bound by "python manage.py runserver" when no custom port argument is provided?',
        bn: 'কোনো কাস্টম পোর্ট না দিলে "python manage.py runserver" ডিফল্টভাবে কোন টিসিপি পোর্টে সার্ভার চালু করে?'
      },
      options: [
        {
          en: '8000',
          bn: '৮০০০'
        },
        {
          en: '3000',
          bn: '৩০০০'
        },
        {
          en: '5000',
          bn: '৫০০০'
        },
        {
          en: '8080',
          bn: '৮০৮০'
        }
      ],
      answer: 0,
      hint: {
        en: 'Django development server defaults to port 8000 on 127.0.0.1.',
        bn: 'জ্যাঙ্গোর লোকাল ডেভেলপমেন্ট সার্ভার ১২৭.০.০.১-এর ৮০০০ পোর্টে চলে।'
      },
      explanation: {
        en: 'By default, "python manage.py runserver" listens on 127.0.0.1:8000. You can specify a different port via "python manage.py runserver 8080".',
        bn: 'ডিফল্টভাবে "python manage.py runserver" ৮০০০ পোর্টে চলে। আপনি চাইলে "runserver 8080" দিয়ে অন্য পোর্ট দিতে পারেন।'
      }
    }
  ],
  quiz: {
    id: 'simmering-project-quiz',
    title: {
      en: 'Django Architecture & Setup Quiz',
      bn: 'জ্যাঙ্গো আর্কিটেকচার ও সেটআপ কুইজ'
    },
    questions: [
      {
        id: 'q-secret-key-security-risk',
        kind: 'mcq',
        topic: 'django secret key exposure risk',
        question: {
          en: 'Why is committing a hardcoded SECRET_KEY to a public Git repository considered a critical security vulnerability in Django?',
          bn: 'জ্যাঙ্গোর SECRET_KEY পাবলিক গিট রিপোজিটরিতে উন্মুক্ত রাখা কেন একটি মারাত্মক নিরাপত্তা ঝুঁকি?'
        },
        options: [
          {
            en: 'The SECRET_KEY is used cryptographically to sign session cookies, CSRF tokens, and password reset tokens; an attacker with this key can forge user sessions and impersonate administrators',
            bn: 'SECRET_KEY দিয়ে সেশন কুকি, সিএসআরএফ টোকেন ও পাসওয়ার্ড রিসেট টোকেন ক্রিপ্টোগ্রাফিকভাবে সাইন করা হয়; এটি পেলে আক্রমণকারী নকল সেশন তৈরি করে অ্যাডমিন সেজে ঢুকতে পারে'
          },
          {
            en: 'It forces the database to convert all tables to plain text files',
            bn: 'এটি ডাটাবেজের সমস্ত টেবিলকে প্লেইন টেক্সট ফাইলে পরিণত করতে বাধ্য করে'
          },
          {
            en: 'It limits Python execution speed to 10 operations per second',
            bn: 'এটি পাইথনের এক্সিকিউশন গতি প্রতি সেকেন্ডে ১০ অপারেশনে সীমাবদ্ধ করে'
          },
          {
            en: 'Git will reject all subsequent git push commands automatically',
            bn: 'গিট স্বয়ংক্রিয়ভাবে সমস্ত পরবর্তী পুশ কমান্ড প্রত্যাখ্যান করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Django uses SECRET_KEY as the salt and encryption secret for signing session identifiers.',
          bn: 'জ্যাঙ্গো সেশন টোকেন সাইন ও যাচাই করার জন্য SECRET_KEY ব্যবহার করে।'
        },
        explanation: {
          en: 'The SECRET_KEY secures all signed cryptographic payloads. If exposed, attackers can forge admin session cookies and compromise the entire system.',
          bn: 'SECRET_KEY সমস্ত ক্রিপ্টোগ্রাফিক সেশন ডাটা রক্ষা করে। এটি ফাঁস হলে আক্রমণকারী খুব সহজেই ভুয়া অ্যাডমিন সেশন তৈরি করে সিস্টেমের দখল নিতে পারে।'
        }
      },
      {
        id: 'q-wsgi-vs-asgi-difference',
        kind: 'mcq',
        topic: 'wsgi vs asgi execution models',
        question: {
          en: 'What is the architectural difference between wsgi.py and asgi.py generated in the Django project root?',
          bn: 'জ্যাঙ্গো প্রজেক্টে তৈরি হওয়া wsgi.py এবং asgi.py-এর মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
        },
        options: [
          {
            en: 'wsgi.py connects synchronous servers (Gunicorn, uWSGI) to Django; asgi.py enables asynchronous servers (Uvicorn, Daphne) supporting WebSockets and async views',
            bn: 'wsgi.py সিঙ্ক্রোনাস সার্ভারকে (Gunicorn) জ্যাঙ্গোর সাথে জোড়ে; আর asgi.py অ্যাসিনক্রোনাস সার্ভারকে (Uvicorn) সক্ষম করে যা ওয়েবসকেট সাপোর্ট করে'
          },
          {
            en: 'wsgi.py is only for development; asgi.py is only for testing',
            bn: 'wsgi.py কেবল ডেভেলপমেন্টের জন্য; আর asgi.py কেবল টেস্টের জন্য'
          },
          {
            en: 'wsgi.py is written in JavaScript; asgi.py is written in Python',
            bn: 'wsgi.py জাভাস্ক্রিপ্টে লেখা; আর asgi.py পাইথনে লেখা'
          },
          {
            en: 'There is no difference; they are redundant duplicate copies',
            bn: 'উভয়ের মাঝে কোনো তফাত নেই; এগুলো অপ্রয়োজনীয় ডুপ্লিকেট ফাইল'
          }
        ],
        answer: 0,
        hint: {
          en: 'ASGI is the modern asynchronous standard; WSGI is the traditional synchronous standard.',
          bn: 'ASGI হলো আধুনিক অ্যাসিনক্রোনাস মানদণ্ড; আর WSGI হলো চিরাচরিত সিঙ্ক্রোনাস মানদণ্ড।'
        },
        explanation: {
          en: 'WSGI is synchronous and standard for typical HTTP. ASGI provides an asynchronous interface capable of handling WebSockets, long polling, and async Python views.',
          bn: 'WSGI সাধারণ সিঙ্ক্রোনাস এইচটিটিপির জন্য মানসম্মত। আর ASGI হলো অ্যাসিনক্রোনাস ইন্টারফেস যা রিয়েল-টাইম ওয়েবসকেট ও অ্যাসিনক্রোনাস ভিউ চালাতে পারে।'
        }
      },
      {
        id: 'q-settings-base-directory-path',
        kind: 'mcq',
        topic: 'pathlib base dir in settings',
        question: {
          en: 'How does modern Django define BASE_DIR in settings.py using the Python pathlib module?',
          bn: 'আধুনিক জ্যাঙ্গোতে পাইথনের pathlib মডিউল ব্যবহার করে settings.py-এ কীভাবে BASE_DIR নির্ধারণ করা হয়?'
        },
        options: [
          {
            en: 'BASE_DIR = Path(__file__).resolve().parent.parent',
            bn: 'BASE_DIR = Path(__file__).resolve().parent.parent'
          },
          {
            en: 'BASE_DIR = "/var/www/django"',
            bn: 'BASE_DIR = "/var/www/django"'
          },
          {
            en: 'BASE_DIR = os.system("pwd")',
            bn: 'BASE_DIR = os.system("pwd")'
          },
          {
            en: 'BASE_DIR = sys.argv[0]',
            bn: 'BASE_DIR = sys.argv[0]'
          }
        ],
        answer: 0,
        hint: {
          en: 'Path(__file__).resolve() finds the absolute path of settings.py, and parent.parent navigates up to the project root.',
          bn: 'Path(__file__).resolve() সেটিংসের সঠিক অবস্থান বের করে এবং parent.parent প্রজেক্ট রুটে উঠে আসে।'
        },
        explanation: {
          en: 'Using Path(__file__).resolve().parent.parent cleanly resolves the absolute root directory of the project, making static and database paths portable.',
          bn: 'Path(__file__).resolve().parent.parent দিয়ে প্রজেক্টের রুট ডিরেক্টরি বের করা হয়, যার ফলে ডাটাবেজ বা স্ট্যাটিক ফাইলের পাথ যেকোনো মেশিনে সুন্দরভাবে কাজ করে।'
        }
      },
      {
        id: 'q-runserver-production-prohibition',
        kind: 'mcq',
        topic: 'why runserver is not for production',
        question: {
          en: 'Why is running "python manage.py runserver" in a public production environment strictly prohibited?',
          bn: 'পাবলিক প্রোডাকশনে "python manage.py runserver" চালানো কেন কঠোরভাবে নিষিদ্ধ?'
        },
        options: [
          {
            en: 'The built-in development server is single-threaded by default, has not undergone security audits, and cannot handle high concurrency or load safely',
            bn: 'বিল্ট-ইন ডেভেলপমেন্ট সার্ভারটি সিঙ্গেল-থ্রেডেড, এর সিকিউরিটি অডিট করা হয়নি এবং এটি উচ্চ চাপ বা ট্রাফিক নিরাপদে সামাল দিতে পারে না'
          },
          {
            en: 'It converts the PostgreSQL database into SQLite automatically',
            bn: 'এটি পোস্টগ্রেস ডাটাবেজকে স্বয়ংক্রিয়ভাবে এসকিউলাইটে রূপান্তর করে ফেলে'
          },
          {
            en: 'It deletes all user passwords from the database on restart',
            bn: 'রিস্টার্ট নিলে এটি ডাটাবেজ থেকে সমস্ত পাসওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'Python prohibits network connections on ports higher than 1024 in production',
            bn: 'প্রোডাকশনে 1024 এর চেয়ে বড় পোর্টে পাইথন নেটওয়ার্ক সংযোগ নিষিদ্ধ করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'runserver is designed solely for local developer debugging and hot reloading.',
          bn: 'runserver কেবল লোকাল ডেভেলপারের কোড ডিবাগিং ও হট রিলোডের জন্য তৈরি।'
        },
        explanation: {
          en: 'Django documentation explicitly warns that runserver is for development only. Production requires a battle-tested WSGI/ASGI server like Gunicorn or Uvicorn.',
          bn: 'জ্যাঙ্গো স্পষ্ট সতর্ক করে যে runserver কেবল ডেভেলপমেন্টের জন্য। প্রোডাকশনে Gunicorn বা Uvicorn-এর মতো নির্ভরযোগ্য সার্ভার ব্যবহার করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'urls-to-views',
    title: {
      en: 'URL Dispatching & Views — Path Converters, Namespaces & CBVs',
      bn: 'ইউআরএল ডিসপ্যাচিং ও ভিউ — পাথ কনভার্টার, নেমস্পেস ও সিবিভি'
    }
  }
};
