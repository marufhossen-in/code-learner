import type { Hub } from '../../lib/types';
import { TheSimmeringProjectLesson } from './lessons/the-simmering-project';
import { UrlsToViewsLesson } from './lessons/urls-to-views';
import { TemplatesOnTheTableLesson } from './lessons/templates-on-the-table';
import { ModelsInTheLarderLesson } from './lessons/models-in-the-larder';
import { MigrationsOnTheMarchLesson } from './lessons/migrations-on-the-march';
import { TheAdminCounterLesson } from './lessons/the-admin-counter';
import { FormsAndTheDoorLesson } from './lessons/forms-and-the-door';
import { TheKitchenShipsLesson } from './lessons/the-kitchen-ships';

export const djangoHub: Hub = {
  slug: 'django',
  name: 'Django',
  icon: '🎸',
  tagline: {
    en: 'Master Python’s premier batteries-included web framework: MTV architecture, ORM QuerySets, automated migrations, built-in admin, and production hardening.',
    bn: 'পাইথনের সবচেয়ে জনপ্রিয় ব্যাটারিজ-ইনক্লুডেড ওয়েব ফ্রেমওয়ার্ক আয়ত্ত করুন: এমটিভি আর্কিটেকচার, ওআরএম কোয়েরিসেট, অটোমেটেড মাইগ্রেশন, বিল্ট-ইন অ্যাডমিন ও প্রোডাকশন ডেপ্লয়মেন্ট।'
  },
  intro: {
    en: 'Django is the high-level Python web framework that enables rapid development and clean, pragmatic design. By adhering to the Model-Template-View (MTV) architectural pattern and providing an extensive standard library out of the box, Django handles the heavy lifting of backend engineering. This comprehensive track guides you through project bootstrapping, URL dispatching, template inheritance, relational ORM optimization, schema migrations, admin customization, ModelForm validation with CSRF security, and automated testing.',
    bn: 'জ্যাঙ্গো হলো একটি উচ্চমানের পাইথন ওয়েব ফ্রেমওয়ার্ক যা দ্রুত এবং পরিচ্ছন্ন ওয়েব ডেভেলপমেন্টকে উৎসাহিত করে। মডেল-টেমপ্লেট-ভিউ (MTV) আর্কিটেকচারাল প্যাটার্ন এবং সমৃদ্ধ বিল্ট-ইন স্ট্যান্ডার্ড লাইব্রেরির মাধ্যমে জ্যাঙ্গো ব্যাকএন্ডের জটিল কাজগুলো সহজ করে দেয়। এই সম্পূর্ণ ট্র্যাকের মাধ্যমে আপনি প্রজেক্ট কনফিগারেশন, ইউআরএল ডিসপ্যাচিং, টেমপ্লেট ইনহেরিটেন্স, রিলেশনাল ওআরএম অপটিমাইজেশন, স্কিমা মাইগ্রেশন, অ্যাডমিন প্যানেল কাস্টমাইজেশন, সিএসআরএফ সহ মডেলফর্ম ভ্যালিডেশন এবং অটোমেটেড টেস্টিং গভীরভাবে শিখবেন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — MTV Architecture, Routing & Templates',
        bn: 'ধাপ ১ — এমটিভি আর্কিটেকচার, রাউটিং ও টেমপ্লেট'
      },
      items: [
        {
          en: 'Project bootstrapping with django-admin, manage.py commands, settings.py environment separation, and WSGI/ASGI entrypoints (Lesson 1)',
          bn: 'django-admin দিয়ে প্রজেক্ট তৈরি, manage.py কমান্ড, settings.py এনভায়রনমেন্ট কনফিগারেশন এবং WSGI/ASGI প্রবেশদ্বার (পাঠ ১)'
        },
        {
          en: 'URL routing with path converters, named routes, reverse URL resolution, and Function-Based vs Class-Based Views (Lesson 2)',
          bn: 'পাথ কনভার্টার দিয়ে ইউআরএল রাউটিং, নেমড রুট, রিভার্স ইউআরএল রেজোলিউশন এবং ফাংশন-বেসড বনাম ক্লাস-বেসড ভিউ (পাঠ ২)'
        },
        {
          en: 'Django Template Language (DTL), template inheritance with extends and block, context processors, and auto-escaping security (Lesson 3)',
          bn: 'জ্যাঙ্গো টেমপ্লেট ল্যাঙ্গুয়েজ (DTL), extends ও block দিয়ে টেমপ্লেট ইনহেরিটেন্স, কনটেক্সট প্রসেসর ও অটো-এসকেপিং নিরাপত্তা (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — ORM QuerySets, Schema Migrations & Admin Panel',
        bn: 'ধাপ ২ — ওআরএম কোয়েরিসেট, স্কিমা মাইগ্রেশন ও অ্যাডমিন প্যানেল'
      },
      items: [
        {
          en: 'Relational data modeling, ForeignKey, ManyToManyField, lazy QuerySet evaluation, and solving N+1 queries with select_related and prefetch_related (Lesson 4)',
          bn: 'রিলেশনাল ডাটা মডেলিং, ফরেন কি, ম্যানি-টু-ম্যানি, লেজি কোয়েরিসেট এবং select_related ও prefetch_related দিয়ে N+1 কোয়েরি সমাধান (পাঠ ৪)'
        },
        {
          en: 'Schema migrations, makemigrations dependency graph tracking, backwards migration rollbacks, and custom RunPython data migrations (Lesson 5)',
          bn: 'স্কিমা মাইগ্রেশন, makemigrations ডিপেন্ডেন্সি গ্রাফ, রোলব্যাক এবং RunPython দিয়ে কাস্টম ডাটা মাইগ্রেশন (পাঠ ৫)'
        },
        {
          en: 'Django Admin engine customization with ModelAdmin, list_display, list_filter, search_fields, tabular inlines, and custom admin actions (Lesson 6)',
          bn: 'ModelAdmin দিয়ে জ্যাঙ্গো অ্যাডমিন কাস্টমাইজেশন, list_display, ফিল্টারিং, সার্চিং, ইনলাইন ফর্ম ও কাস্টম অ্যাকশন (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Forms Validation, Security & Production Deployment',
        bn: 'ধাপ ৩ — ফর্ম ভ্যালিডেশন, সিকিউরিটি ও প্রোডাকশন ডেপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Form and ModelForm validation cycles, clean() methods, CSRF token security, and built-in user authentication with password hashing (Lesson 7)',
          bn: 'ফর্ম ও মডেলফর্ম ভ্যালিডেশন চক্র, clean() মেথড, সিএসআরএফ টোকেন সুরক্ষা এবং বিল্ট-ইন ইউজার অথেনটিকেশন (পাঠ ৭)'
        },
        {
          en: 'Production hardening (DEBUG=False, ALLOWED_HOSTS, SSL redirects), WhiteNoise static file delivery, and automated testing with TestCase and Client (Lesson 8)',
          bn: 'প্রোডাকশন সিকিউরিটি (DEBUG=False, ALLOWED_HOSTS, এসএসএল রিডাইরেক্ট), হোয়াইটনয়েজ স্ট্যাটিক ফাইল এবং TestCase দিয়ে টেস্ট স্যুট (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheSimmeringProjectLesson,
    UrlsToViewsLesson,
    TemplatesOnTheTableLesson,
    ModelsInTheLarderLesson,
    MigrationsOnTheMarchLesson,
    TheAdminCounterLesson,
    FormsAndTheDoorLesson,
    TheKitchenShipsLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Enterprise Multi-Author Publishing Platform with Django ORM & Admin',
        bn: 'জ্যাঙ্গো ওআরএম ও অ্যাডমিন সহ এন্টারপ্রাইজ পাবলিশিং প্ল্যাটফর্ম'
      },
      brief: {
        en: 'Build a production-grade multi-author publishing system: create Category, Post, and Comment models with relational foreign keys; optimize database access using select_related to eliminate N+1 queries; implement a custom ModelAdmin interface featuring list filters, inline comment moderation, and batch publish actions; and enforce secure ModelForm submissions with CSRF verification and custom slug uniqueness checks.',
        bn: 'একটি প্রোডাকশন-মানের পাবলিশিং সিস্টেম তৈরি করুন: ক্যাটাগরি, পোস্ট এবং কমেন্ট রিলেশনাল মডেল; N+1 সমস্যা দূর করতে select_related দিয়ে ওআরএম অপটিমাইজেশন; ফিল্টারিং ও ব্যাচ পাবলিশ অ্যাকশন সহ কাস্টম ModelAdmin ইন্টারফেস; এবং সিএসআরএফ সুরক্ষা ও স্লাগ ইউনিকনেস যাচাই সহ সুরক্ষিত মডেলফর্ম বাস্তবায়ন।'
      }
    },
    {
      title: {
        en: 'Production-Hardened Django SaaS Engine with Automated Test Suite',
        bn: 'অটোমেটেড টেস্ট স্যুট সহ প্রোডাকশন-রেডি জ্যাঙ্গো সাস ইঞ্জিন'
      },
      brief: {
        en: 'Prepare an enterprise Django service for high-availability cloud deployment: configure environment-based settings for database credentials and secret keys; integrate WhiteNoise with Brotli compression for static file asset caching; enforce HTTPS redirection and secure session cookies; and author a comprehensive automated test suite using Django TestCase and test Client verifying authentication flows, form validation, and database integrity.',
        bn: 'উচ্চ-কার্যক্ষম ক্লাউড ডেপ্লয়মেন্টের জন্য জ্যাঙ্গো সার্ভিস প্রস্তুত করুন: এনভায়রনমেন্ট ভিত্তিক সেটিংস কনফিগারেশন; ব্রোটলি কম্প্রেশন সহ হোয়াইটনয়েজ দিয়ে স্ট্যাটিক ফাইল ক্যাশিং; এইচটিটিপিএস রিডাইরেক্ট ও সিকিউর সেশন কুকি; এবং TestCase ও ক্লায়েন্ট ব্যবহার করে লগইন, ফর্ম ভ্যালিডেশন ও ডাটাবেজের সম্পূর্ণ টেস্ট স্যুট তৈরি।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Never run production deployments with DEBUG = True; disabling debug mode prevents sensitive database queries, settings, and tracebacks from leaking to users.',
      bn: 'প্রোডাকশনে কখনো DEBUG = True রাখবেন না; ডিবাগ বন্ধ রাখলে ডাটাবেজ কুয়েরি ও সেনসিটিভ তথ্য ইন্টারনেটে ফাঁস হওয়া সম্পূর্ণ রোধ হয়।'
    },
    {
      en: 'Always use select_related() for single-valued relationships (ForeignKey, OneToOne) and prefetch_related() for multi-valued relationships (ManyToMany, reverse FK) to prevent N+1 queries.',
      bn: 'N+1 কুয়েরি সমস্যা দূর করতে ফরেন কি-র ক্ষেত্রে select_related() এবং ম্যানি-টু-ম্যানি সম্পর্কের ক্ষেত্রে prefetch_related() ব্যবহার করুন।'
    },
    {
      en: 'Avoid setting null=True on string-based fields (CharField, TextField) because Django conventions prefer a single empty string standard over confusing null/empty dual state.',
      bn: 'CharField বা TextField-এ null=True দেবেন না, কারণ জ্যাঙ্গোর নিয়ম অনুযায়ী খালি টেক্সটের জন্য কেবল ফাঁকা স্ট্রিং ("") মান্য করা হয়।'
    },
    {
      en: 'Never modify or delete previously applied migration files that have already been executed in production; create new forward migrations using makemigrations.',
      bn: 'প্রোডাকশনে কার্যকর হয়ে যাওয়া পুরোনো মাইগ্রেশন ফাইল কখনোই সম্পাদনা বা মুছে ফেলবেন না; সর্বদা নতুন ফরওয়ার্ড মাইগ্রেশন তৈরি করুন।'
    },
    {
      en: 'Always use the {% csrf_token %} template tag inside HTML forms and keep the CsrfViewMiddleware enabled to protect against Cross-Site Request Forgery attacks.',
      bn: 'সিএসআরএফ আক্রমণ প্রতিহত করতে এইচটিএমএল ফর্মের ভেতরে সর্বদা {% csrf_token %} ট্যাগ দিন এবং CsrfViewMiddleware চালু রাখুন।'
    },
    {
      en: 'Use WhiteNoise with Gunicorn or Uvicorn to serve static assets directly from Python processes without needing dedicated Nginx configuration for small-to-medium apps.',
      bn: 'পাইথন প্রসেস থেকে সরাসরি অতি দ্রুত স্ট্যাটিক ফাইল পরিবেশন করতে হোয়াইটনয়েজ লাইব্রেরি ব্যবহার করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Django QuerySet evaluation work under the hood, and what is the difference between select_related() and prefetch_related() in solving the N+1 query problem?',
        bn: 'জ্যাঙ্গো কোয়েরিসেট কীভাবে কাজ করে, এবং N+1 কুয়েরি সমস্যা সমাধানে select_related() ও prefetch_related()-এর মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'Django QuerySets are lazy: constructing a QuerySet does not touch the database until the data is evaluated (e.g. iterating in a for-loop, slicing, calling list(), len(), or exists()). When looping over parent records that reference related records, accessing parent.related fires an additional database query per iteration (the N+1 problem). select_related() solves this for single-valued relationships (ForeignKey, OneToOne) by performing an SQL JOIN in a single query. prefetch_related() solves this for multi-valued relationships (ManyToMany, reverse ForeignKey) by executing two queries in Python: one for the parents and one batched "WHERE id IN (...)" query for children, joining them in Python memory.',
        bn: 'জ্যাঙ্গো কোয়েরিসেট সম্পূর্ণ লেজি বা অলস: কোয়েরিসেট তৈরি করলেই ডাটাবেজে হিট হয় না, যতক্ষণ না তা ইটারেট করা হয় বা list(), len() দিয়ে মূল্যায়ন করা হয়। কোনো লুপে প্যারেন্ট অবজেক্টের চাইল্ড ডাটা পড়তে গেলে প্রতি লুপে একটি করে অতিরিক্ত কুয়েরি চলে, যাকে N+1 সমস্যা বলে। select_related() ফরেন কি বা ওয়ান-টু-ওয়ান সম্পর্কের ক্ষেত্রে এসকিউএল JOIN করে একটিমাত্র কুয়েরিতে সব ডাটা নিয়ে আসে। আর prefetch_related() ম্যানি-টু-ম্যানির ক্ষেত্রে দুটি কুয়েরি চালায়: একটি প্যারেন্টের জন্য এবং চাইল্ডদের জন্য "WHERE id IN (...)" দিয়ে একবারে সব ডাটা এনে পাইথন মেমরিতে মিলিয়ে দেয়।'
      }
    },
    {
      q: {
        en: 'What is the precise architectural difference between null=True and blank=True on Django model fields, and why is null=True discouraged on CharField?',
        bn: 'জ্যাঙ্গো মডেল ফিল্ডে null=True এবং blank=True-এর মধ্যে আসল পার্থক্য কী, এবং CharField-এ null=True দেওয়া কেন নিরুৎসাহিত করা হয়?'
      },
      a: {
        en: 'null=True is purely database-related: it instructs the SQL database engine to define the column as NULL (allowing NULL in the database table). blank=True is purely validation-related: it instructs Django form validation and the admin interface that the field is optional and may be left empty by users. For string-based fields (CharField, TextField), having null=True creates two distinct representations for "no data": NULL and the empty string "". This leads to inconsistent data querying and defensive coding. The Django standard convention is to leave null=False on string fields and use blank=True with the empty string "" as the single standard for missing data.',
        bn: 'null=True সম্পূর্ণ ডাটাবেজ সম্পর্কিত: এটি এসকিউএল ডাটাবেজে কলামটিকে NULL সাপোর্ট করার নির্দেশ দেয়। blank=True সম্পূর্ণ ভ্যালিডেশন সম্পর্কিত: এটি ফর্ম এবং অ্যাডমিন প্যানেলকে জানায় যে ব্যবহারকারী ফিল্ডটি ফাঁকা রাখতে পারবে। CharField বা TextField-এ null=True দিলে ডাটা না থাকার দুটি ভিন্ন রূপ তৈরি হয়: NULL এবং ফাঁকা স্ট্রিং ""। এটি ডাটা কুয়েরিতে বিশৃঙ্খলা ও বিভ্রান্তি সৃষ্টি করে। তাই জ্যাঙ্গোর নিয়ম হলো টেক্সট ফিল্ডে null=False রেখে কেবল blank=True দেওয়া, যাতে ফাঁকা ডাটার একক রূপ হিসেবে ফাঁকা স্ট্রিং ব্যবহৃত হয়।'
      }
    },
    {
      q: {
        en: 'How does Django handle schema migrations, and how do you resolve a migration merge conflict when two developers create migrations from the same base state?',
        bn: 'জ্যাঙ্গো কীভাবে স্কিমা মাইগ্রেশন পরিচালনা করে, এবং দুজন ডেভেলপার একই ভিত্তি থেকে মাইগ্রেশন বানালে মার্জ কনফ্লিক্ট কীভাবে সমাধান করা হয়?'
      },
      a: {
        en: 'Django tracks migrations as a directed acyclic graph (DAG) where each migration file declares a dependencies list pointing to parent migrations. When two developers independently run "makemigrations" on the same base migration, git merges create two leaf nodes in the migration graph (e.g. 0003_add_author and 0003_add_status both depending on 0002_initial). Django refuses to run "migrate" when multiple unmerged leaves exist. The developer resolves this cleanly by running "python manage.py makemigrations --merge", which automatically generates a new merge migration file (e.g. 0004_merge_...) depending on both leaf branches without altering existing files.',
        bn: 'জ্যাঙ্গো একটি ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ (DAG) হিসেবে মাইগ্রেশন পরিচালনা করে যেখানে প্রতিটি ফাইলের dependencies তালিকায় প্যারেন্ট ফাইলের নাম থাকে। দুজন ডেভেলপার একই সাথে মাইগ্রেশন তৈরি করলে গ্রাফে দুটি পৃথক ডাল বা লিফ নোড তৈরি হয় (যেমন 0003_add_author এবং 0003_add_status উভয়ই 0002-এর ওপর নির্ভরশীল)। একাধিক লিফ নোড থাকলে জ্যাঙ্গো migrate চালাতে অস্বীকার করে। ডেভেলপার "python manage.py makemigrations --merge" কমান্ড চালিয়ে খুব সহজেই একটি নতুন মার্জ ফাইল তৈরি করে উভয় ডালকে একত্রিত করে এই সমস্যার সমাধান করেন।'
      }
    },
    {
      q: {
        en: 'What are the critical security and configuration checklist steps required before deploying a Django application to a public production environment?',
        bn: 'একটি জ্যাঙ্গো অ্যাপ্লিকেশন পাবলিক প্রোডাকশনে ডেপ্লয় করার আগে কোন গুরুত্বপূর্ণ সিকিউরিটি ও কনফিগারেশন চেকলিস্ট পূরণ করা আবশ্যক?'
      },
      a: {
        en: '1. Set DEBUG = False to prevent leaking sensitive source code, settings, and database schemas on unhandled errors; 2. Define explicit domain hostnames in ALLOWED_HOSTS to prevent HTTP Host Header poisoning attacks; 3. Store SECRET_KEY and database credentials securely in environment variables; 4. Enable SECURE_SSL_REDIRECT = True to force all traffic onto HTTPS; 5. Set CSRF_COOKIE_SECURE = True and SESSION_COOKIE_SECURE = True to transmit cookies only over encrypted TLS; 6. Configure SECURE_HSTS_SECONDS to enforce Strict-Transport-Security; 7. Serve static assets reliably using WhiteNoise or cloud storage with collectstatic.',
        bn: '১. কোনো ত্রুটিতে কোড ও ডাটাবেজ তথ্য ফাঁস ঠেকাতে DEBUG = False করা; ২. হোস্ট হেডার পয়জনিং রোধে ALLOWED_HOSTS-এ নির্দিষ্ট ডোমেন নাম দেওয়া; ৩. SECRET_KEY এবং ডাটাবেজ তথ্য পরিবেশ চলকে (env) রাখা; ৪. সমস্ত ট্রাফিককে এইচটিটিপিএস-এ পাঠাতে SECURE_SSL_REDIRECT = True করা; ৫. কুকি নিরাপদ রাখতে CSRF_COOKIE_SECURE ও SESSION_COOKIE_SECURE ট্রু করা; ৬. ব্রাউজার সুরক্ষা বলয়ের জন্য SECURE_HSTS_SECONDS কনফিগার করা; ৭. হোয়াইটনয়েজ বা ক্লাউড স্টোরেজে collectstatic চালিয়ে স্ট্যাটিক ফাইল পরিবেশন করা।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Volume Content Publishing: Major media outlets like The Washington Post rely on Django’s MTV architecture, template caching, and relational ORM to deliver breaking news articles to millions of readers globally.',
      bn: 'উচ্চ-ভলিউম কন্টেন্ট পাবলিশিং: দ্য ওয়াশিংটন পোস্টের মতো শীর্ষস্থানীয় মিডিয়া প্রতিষ্ঠানগুলো জ্যাঙ্গোর এমটিভি আর্কিটেকচার ও ওআরএম ব্যবহার করে প্রতিদিন বিশ্বব্যাপী কোটি কোটি পাঠকের কাছে সংবাদ পৌঁছে দেয়।'
    },
    {
      en: 'Enterprise Resource Management: Fintech and logistics corporations customize Django Admin with ModelAdmin inlines, custom permissions, and batch actions to manage complex internal business workflows efficiently.',
      bn: 'এন্টারপ্রাইজ রিসোর্স ম্যানেজমেন্ট: ফিনটেক ও লজিস্টিক প্রতিষ্ঠানগুলো জটিল অভ্যন্তরীণ কাজের সুবিধার্থে জ্যাঙ্গো অ্যাডমিন প্যানেলকে কাস্টম অ্যাকশন ও ইনলাইন ফর্ম দিয়ে সাজিয়ে ব্যাকঅফিস পরিচালনা করে।'
    },
    {
      en: 'Multi-Tenant SaaS Applications: Software platforms use PostgreSQL schemas paired with dynamic Django database routing to isolate customer data securely while maintaining a shared codebase.',
      bn: 'মাল্টি-টেন্যান্ট সাস প্ল্যাটফর্ম: আধুনিক ক্লাউড সফটওয়্যারগুলো জ্যাঙ্গোর ডায়নামিক ডাটাবেজ রাউটার ব্যবহার করে প্রতিটি গ্রাহকের ডাটা সম্পূর্ণ আলাদা ও সুরক্ষিত রাখে।'
    },
    {
      en: 'API-Driven Microservices: Engineering teams combine Django’s robust ORM and authentication core with Django REST Framework (DRF) to power high-throughput mobile application backends.',
      bn: 'এপিআই-চালিত মাইক্রোসার্ভিস: প্রযুক্তি প্রতিষ্ঠানগুলো জ্যাঙ্গো ওআরএম এবং অথেনটিকেশনের শক্ত ভিত্তির ওপর জ্যাঙ্গো রেস্ট ফ্রেমওয়ার্ক (DRF) বসিয়ে মোবাইল অ্যাপের জন্য নির্ভরযোগ্য ব্যাকএন্ড তৈরি করে।'
    }
  ]
};
