import type { Hub } from '../../lib/types';
import { RoutingTheApplicationLesson } from './lessons/routing-the-application';
import { BladeAndTheViewLesson } from './lessons/blade-and-the-view';
import { MigrationsAndTheSchemaLesson } from './lessons/migrations-and-the-schema';
import { EloquentAndTheModelLesson } from './lessons/eloquent-and-the-model';
import { ValidationAndTheRequestLesson } from './lessons/validation-and-the-request';
import { GuardsAndTheAuthLesson } from './lessons/guards-and-the-auth';
import { QueuesAndTheJobLesson } from './lessons/queues-and-the-job';
import { TheHorizonServeLesson } from './lessons/the-horizon-serve';

export const laravelHub: Hub = {
  slug: 'laravel',
  name: 'Laravel',
  icon: '🧡',
  tagline: {
    en: 'Master modern full-stack PHP with Laravel: from expressive routing and Blade templating to Eloquent ORM, background queues, and high-performance production Octane deployment.',
    bn: 'লারাভেল দিয়ে আধুনিক ফুল-স্ট্যাক পিএইচপি আয়ত্ত করুন: এক্সপ্রেসভ রাউটিং ও ব্লেড টেমপ্লেটিং থেকে শুরু করে এলোকুয়েন্ট ওআরএম, ব্যাকগ্রাউন্ড কিউ এবং উচ্চ-কার্যক্ষমতার অক্টেন ডিপ্লয়মেন্ট।'
  },
  intro: {
    en: 'Laravel is the premier web application framework for PHP, celebrated for its elegant syntax, developer ergonomic focus, and rich first-party ecosystem. Over 60% of modern PHP enterprise projects choose Laravel for its expressive Active Record ORM, declarative routing pipeline, and turnkey authentication primitives. This 8-lesson curriculum guides you from HTTP request routing and Blade template inheritance through database migrations, N+1 query elimination with Eloquent, asynchronous Redis job queues, and enterprise production scaling.',
    bn: 'লারাভেল হলো পিএইচপির সবচেয়ে জনপ্রিয় ও শক্তিশালী ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক, যা এর পরিচ্ছন্ন সিনট্যাক্স, চমৎকার ডেভেলপার অভিজ্ঞতা এবং সমৃদ্ধ ইকোসিস্টেমের জন্য বিশ্বখ্যাত। আধুনিক পিএইচপি এন্টারপ্রাইজ প্রজেক্টের ৬০% এর বেশি লারাভেল বেছে নেয় এর শক্তিশালী অ্যাক্টিভ রেকর্ড ওআরএম, সুশৃঙ্খল রাউটিং পাইপলাইন এবং নির্ভরযোগ্য প্রমাণীকরণ ব্যবস্থার জন্য। এই ৮ পাঠের পূর্ণাঙ্গ ট্র্যাকে এইচটিটিপি রাউটিং ও ব্লেড টেমপ্লেট থেকে শুরু করে ডেটাবেস মাইগ্রেশন, এলোকুয়েন্টে N+1 কোয়েরি দূরীকরণ, অ্যাসিনক্রোনাস রেডিস জব কিউ এবং প্রোডাকশন স্কেলিং ধাপে ধাপে শেখানো হয়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Core Routing, Views & Database Schema',
        bn: 'ধাপ ১: কোর রাউটিং, ভিউ এবং ডেটাবেস স্কিমা'
      },
      items: [
        {
          en: 'Routing the Application: HTTP verbs, named routes, controller actions, route model binding, and middleware pipelines (Lesson 1)',
          bn: 'অ্যাপ্লিকেশন রাউটিং: HTTP ভার্ব, নেমড রাউট, কন্ট্রোলার অ্যাকশন, রাউট মডেল বাইন্ডিং এবং মিডলওয়্যার পাইপলাইন (পাঠ ১)'
        },
        {
          en: 'Blade & The View: Template inheritance (@extends), component architecture, variable escaping, and CSRF protection (Lesson 2)',
          bn: 'ব্লেড ও ভিউ: টেমপ্লেট ইনহেরিটেন্স (@extends), কম্পোনেন্ট আর্কিটেকচার, ভেরিয়েবল এস্কেপিং এবং CSRF সুরক্ষা (পাঠ ২)'
        },
        {
          en: 'Migrations & The Schema: Version-controlled database DDL, foreign key constraints, model factories, and seeders (Lesson 3)',
          bn: 'মাইগ্রেশন ও স্কিমা: ভার্সন-নিয়ন্ত্রিত ডেটাবেস স্কিমা, ফরেন কি শর্ত, মডেল ফ্যাক্টরি এবং সিডার (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Eloquent ORM & Request Validation',
        bn: 'ধাপ ২: এলোকুয়েন্ট ওআরএম এবং রিকোয়েস্ট ভ্যালিডেশন'
      },
      items: [
        {
          en: 'Eloquent & The Model: Active Record CRUD, relationship mapping, eager loading to prevent N+1 queries, and query scopes (Lesson 4)',
          bn: 'এলোকুয়েন্ট ও মডেল: অ্যাক্টিভ রেকর্ড সিআরইউডি, রিলেশনশিপ ম্যাপিং, N+1 সমস্যা রোধে ইগার লোডিং এবং কুয়েরি স্কোপ (পাঠ ৪)'
        },
        {
          en: 'Validation & The Request: Declarative validation rules, dedicated Form Request classes, bail rules, and error flashes (Lesson 5)',
          bn: 'ভ্যালিডেশন ও রিকোয়েস্ট: সুনির্দিষ্ট ভ্যালিডেশন রুল, ডেডিকেটেড ফর্ম রিকোয়েস্ট ক্লাস, বেইল রুল এবং এরর ফ্ল্যাশ (পাঠ ৫)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Authentication, Authorization & Queues',
        bn: 'ধাপ ৩: প্রমাণীকরণ, অনুমতি এবং কিউ প্রসেসিং'
      },
      items: [
        {
          en: 'Guards, Gates & Policies: Multi-guard authentication, Gate definitions, resource Policies, and Laravel Sanctum tokens (Lesson 6)',
          bn: 'গার্ড, গেট এবং পলিসি: মাল্টি-গার্ড প্রমাণীকরণ, গেট ডিফিনিশন, রিসোর্স পলিসি এবং লারাভেল স্যাঙ্কটাম টোকেন (পাঠ ৬)'
        },
        {
          en: 'Queues & Background Jobs: Asynchronous job dispatching, Redis drivers, retry backoffs, failed job tables, and task scheduling (Lesson 7)',
          bn: 'কিউ এবং ব্যাকগ্রাউন্ড জব: অ্যাসিনক্রোনাস জব ডিসপ্যাচ, রেডিস ড্রাইভার, রিট্রাই ব্যাকঅফ, ফেইলড জব টেবিল এবং টাস্ক শিডিউলিং (পাঠ ৭)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: High-Performance Production Architecture',
        bn: 'ধাপ ৪: হাই-পারফরম্যান্স প্রোডাকশন আর্কিটেকচার'
      },
      items: [
        {
          en: 'The Horizon & Octane Capstone: Queue monitoring with Laravel Horizon, memory-resident Laravel Octane, and production caching (Lesson 8)',
          bn: 'হরাইজন ও অক্টেন ক্যাপস্টোন: লারাভেল হরাইজন দিয়ে কিউ মনিটরিং, মেমোরি-ভিত্তিক লারাভেল অক্টেন এবং প্রোডাকশন ক্যাশিং (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    RoutingTheApplicationLesson,
    BladeAndTheViewLesson,
    MigrationsAndTheSchemaLesson,
    EloquentAndTheModelLesson,
    ValidationAndTheRequestLesson,
    GuardsAndTheAuthLesson,
    QueuesAndTheJobLesson,
    TheHorizonServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Project 1: Multi-Tenant SaaS Billing and Subscription Engine',
        bn: 'প্রজেক্ট ১: মাল্টি-টেন্যান্ট সাস বিলিং এবং সাবস্ক্রিপশন ইঞ্জিন'
      },
      brief: {
        en: 'Build an enterprise billing portal using Laravel 11. Implement route model binding across 10 tenant routes, protect credit card updates using custom Form Requests, enforce authorization via subscription Policies, and send receipt PDFs asynchronously through a Redis queue worker.',
        bn: 'লারাভেল ১১ ব্যবহার করে একটি প্রাতিষ্ঠানিক বিলিং পোর্টাল তৈরি করুন। ১০ টি টেন্যান্ট রাউটে রাউট মডেল বাইন্ডিং, কাস্টম ফর্ম রিকোয়েস্ট দিয়ে কার্ড আপডেট সুরক্ষা, সাবস্ক্রিপশন পলিসি দিয়ে পারমিশন যাচাই এবং রেডিস কিউ ওয়ার্কারের মাধ্যমে ব্যাকগ্রাউন্ডে ইনভয়েস পিডিএফ পাঠানো বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Project 2: High-Throughput E-Commerce RESTful API with Sanctum',
        bn: 'প্রজেক্ট ২: স্যাঙ্কটাম সুরক্ষিত উচ্চ-গতির ই-কমার্স RESTful এপিআই'
      },
      brief: {
        en: 'Architect an e-commerce catalog API serving 500 product records. Implement eager loading with Eloquent to prevent N+1 query overhead, authenticate checkout endpoints using Laravel Sanctum personal access tokens, and schedule hourly stock reconciliation tasks.',
        bn: '৫০০ টি পণ্যের ক্যাটালগ পরিবেশনের জন্য একটি দ্রুতগতির ই-কমার্স এপিআই আর্কিটেক্ট করুন। N+1 কোয়েরি সমস্যা দূর করতে এলোকুয়েন্ট ইগার লোডিং, লারাভেল স্যাঙ্কটাম টোকেন দিয়ে চেকআউট সুরক্ষিতকরণ এবং প্রতি ঘণ্টায় স্টক মেলানোর স্বয়ংক্রিয় শিডিউলিং বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always use eager loading (User::with("posts")->get()) instead of lazy loading to completely prevent devastating N+1 query database performance degradation.',
      bn: 'ডেটাবেসে মারাত্মক N+1 কোয়েরি সমস্যা ও ধীরগতি পুরোপুরি প্রতিরোধ করতে লেজি লোডিংয়ের বদলে সর্বদা ইগার লোডিং (User::with("posts")->get()) ব্যবহার করুন।'
    },
    {
      en: 'Encapsulate complex validation logic inside dedicated Form Request classes rather than bloating HTTP controllers with inline validator arrays.',
      bn: 'কন্ট্রোলারকে পরিচ্ছন্ন রাখতে ইনলাইন ভ্যালিডেশন অ্যারের বদলে জটিল যাচাইকরণ লজিক সর্বদা ডেডিকেটেড ফর্ম রিকোয়েস্ট ক্লাসে সংরক্ষণ করুন।'
    },
    {
      en: 'Move slow operational tasks (like sending verification emails or generating PDF invoices) into asynchronous queued jobs to maintain sub-50ms HTTP response times.',
      bn: 'এইচটিটিপি সাড়ার সময় ৫০ মিলিসেকেন্ডের নিচে রাখতে ইমেইল পাঠানো বা পিডিএফ তৈরির মতো ধীরগতির কাজগুলোকে অ্যাসিনক্রোনাস কিউ জবে স্থানান্তর করুন।'
    },
    {
      en: 'Run php artisan config:cache, route:cache, and view:cache during automated CI/CD deployments to compile runtime configurations into static shared memory arrays.',
      bn: 'সিআই/সিডি ডিপ্লয়মেন্টের সময় php artisan config:cache, route:cache এবং view:cache চালিয়ে কনফিগারেশন ও রুটগুলোকে স্ট্যাটিক ক্যাশে কম্পাইল করে নিন।'
    },
    {
      en: 'Enforce mass-assignment protection on every Eloquent model by defining explicit $fillable attribute whitelists, never leaving models unconstrained.',
      bn: 'অনাকাঙ্ক্ষিত কলাম আপডেট ঠেকাতে প্রতিটি এলোকুয়েন্ট মডেলে স্পষ্ট $fillable অ্যাট্রিবিউট হোয়াইটলিস্ট সংজ্ঞায়িত করে ম্যাস-অ্যাসাইনমেন্ট সুরক্ষা নিশ্চিত করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the N+1 query problem in Eloquent ORM, and how does eager loading solve it?',
        bn: 'এলোকুয়েন্ট ওআরএমে N+1 কুয়েরি সমস্যা কী এবং ইগার লোডিং কীভাবে এর সমাধান করে?'
      },
      a: {
        en: 'The N+1 problem occurs when querying a parent collection of N records (1 query) and subsequently accessing a relationship on each model inside a loop, triggering N additional queries for a catastrophic total of N+1 database roundtrips. For 100 users, this executes 101 queries. Eager loading solves this by using the with() method (e.g. User::with("posts")->get()), which queries all parents in 1 query, extracts their primary keys, and executes exactly 1 secondary query with WHERE IN (id_1, id_2, ...), reducing 101 queries down to 2 queries.',
        bn: 'N+1 সমস্যা তখন ঘটে যখন N সংখ্যক মূল রেকর্ড কোয়েরি করার পর (১টি কোয়েরি) লুপের ভেতরে প্রতিটি রেকর্ডের রিলেশনশিপ অ্যাক্সেস করা হয়, যার ফলে অতিরিক্ত N টি কোয়েরি তৈরি হয়ে মোট N+1 সংখ্যক ডেটাবেস কল হয়। ১০০ জন ইউজারের ক্ষেত্রে এটি ১০১ টি কোয়েরি চালায়। ইগার লোডিং with() মেথড ব্যবহারের মাধ্যমে (যেমন User::with("posts")->get()) প্রথমে মূল রেকর্ড আনে এবং এরপর WHERE IN দিয়ে মাত্র ১টি অতিরিক্ত কোয়েরিতে সমস্ত রিলেশনশিপ ডেটা লোড করে, যার ফলে ১০১ টি কোয়েরি কমে মাত্র ২ টি কোয়েরিতে নেমে আসে।'
      }
    },
    {
      q: {
        en: 'How does Laravel Middleware pipeline work internally using the Onion Architecture model?',
        bn: 'অনিয়ন আর্কিটেকচার মডেল অনুসরণে লারাভেল মিডলওয়্যার পাইপলাইন অভ্যন্তরীণভাবে কীভাবে কাজ করে?'
      },
      a: {
        en: 'Laravel implements middleware as a nested closure pipeline based on the Pipeline design pattern. When an HTTP request enters the kernel, it is wrapped in successive middleware layers (such as Authenticate, VerifyCsrfToken, and ThrottleRequests). Each middleware executes its pre-processing logic, then delegates down to the inner layer by invoking $next($request). When the controller returns a response, execution flows back outward through each middleware layer, allowing post-processing modifications (such as attaching security headers) before leaving the server.',
        bn: 'লারাভেল পাইপলাইন ডিজাইন প্যাটার্নের ভিত্তিতে নেস্টেড ক্লোজার হিসেবে মিডলওয়্যার পরিচালনা করে। যখন একটি HTTP অনুরোধ আসে, তখন এটি স্তরে স্তরে সাজানো বিভিন্ন মিডলওয়্যারের (যেমন Authenticate, VerifyCsrfToken, ThrottleRequests) মধ্য দিয়ে যায়। প্রতিটি মিডলওয়্যার নিজের পূর্ববর্তী কাজ শেষ করে $next($request) কল করে পরবর্তী স্তরে অনুরোধটি পাঠিয়ে দেয়। কন্ট্রোলার রেসপন্স তৈরি করলে তা আবার উল্টো পথে প্রতিটি মিডলওয়্যার স্তরের ভেতর দিয়ে ফেরত আসে, যা রেসপন্সে অতিরিক্ত সিকিউরিটি হেডার যুক্ত করতে দেয়।'
      }
    },
    {
      q: {
        en: 'What is the architectural difference between Laravel Gates and Policies for user authorization?',
        bn: 'ব্যবহারকারীর অনুমোদনের ক্ষেত্রে লারাভেল গেট এবং পলিসির মধ্যে স্থাপত্যিক পার্থক্য কী?'
      },
      a: {
        en: 'Gates are Closure-based authorization checks registered centrally in the AppServiceProvider, best suited for non-model actions such as accessing an administrator dashboard or toggling maintenance mode (e.g. Gate::define("access-admin", fn($user) => $user->is_admin)). Policies are dedicated object-oriented classes organized around a specific Eloquent domain model (e.g. PostPolicy), defining granular RESTful actions like view, create, update, and delete for that specific model entity.',
        bn: 'গেট হলো ক্লোজার-ভিত্তিক অথরাইজেশন চেক যা সাধারণত কোনো নির্দিষ্ট মডেলের সাথে সম্পর্কিত নয় এমন সাধারণ কাজের জন্য ব্যবহৃত হয়, যেমন অ্যাডমিন ড্যাশবোর্ড দেখা বা মেইনটেন্যান্স মোড অন করা (যেমন Gate::define("access-admin", ...))। অপরদিকে পলিসি হলো নির্দিষ্ট এলোকুয়েন্ট মডেলকে (যেমন PostPolicy) কেন্দ্র করে গঠিত অবজেক্ট-ওরিয়েন্টেড ক্লাস, যা সংশ্লিষ্ট মডেলের ভিউ, ক্রিয়েট, আপডেট বা ডিলিট সংক্রান্ত প্রতিটি কাজের জন্য পৃথক মেথড প্রদান করে।'
      }
    },
    {
      q: {
        en: 'How does Laravel Octane achieve a 10x throughput increase over standard PHP-FPM execution?',
        bn: 'সাধারণ PHP-FPM এর তুলনায় লারাভেল অক্টেন কীভাবে ১০ গুণ পর্যন্ত বেশি থ্রুপুট প্রদান করে?'
      },
      a: {
        en: 'Standard PHP-FPM operates on a share-nothing lifecycle: on every HTTP request, the entire framework boots, configuration files are parsed, service providers are registered, and memory is destroyed after response transmission. Laravel Octane powers applications using persistent, long-running application servers like Swoole or RoadRunner. The framework boots exactly once into server RAM and remains resident across millions of requests, serving subsequent HTTP hits in sub-5ms with zero framework bootstrap overhead.',
        bn: 'সাধারণ PHP-FPM প্রতিটি অনুরোধে সম্পূর্ণ ফ্রেমওয়ার্ক বুট করে, কনফিগারেশন ফাইল পড়ে, সার্ভিস প্রোভাইডার লোড করে এবং রেসপন্স শেষে সব মেমোরি ধ্বংস করে দেয়। লারাভেল অক্টেন Swoole বা RoadRunner এর মতো সার্বক্ষণিক সচল সার্ভারের সাহায্যে অ্যাপ্লিকেশন পরিচালনা করে। ফ্রেমওয়ার্কটি কেবল একবার মেমোরিতে (RAM) বুট হয়ে সার্বক্ষণিক প্রস্তুত থাকে, ফলে প্রতিটি অনুরোধ মাত্র ৫ মিলিসেকেন্ডের মধ্যে কোনো বুটস্ট্র্যাপ খরচ ছাড়াই দ্রুত সম্পন্ন হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Enterprise SaaS Platforms: Powering complex multi-tenant subscription software with granular Policies and background queue workers.',
      bn: 'এন্টারপ্রাইজ সাস প্ল্যাটফর্ম: শক্তিশালী পলিসি এবং ব্যাকগ্রাউন্ড কিউ ওয়ার্কার দ্বারা পরিচালিত জটিল মাল্টি-টেন্যান্ট সফটওয়্যার।'
    },
    {
      en: 'High-Volume Payment Gateways: Processing mission-critical financial transactions with atomic database locks and idempotent webhook handlers.',
      bn: 'উচ্চ-লেনদেনের পেমেন্ট গেটওয়ে: নির্ভরযোগ্য ডেটাবেস ট্রানজ্যাকশন এবং আইডেমপোটেন্ট ওয়েবহুক প্রসেসিং দ্বারা আর্থিক লেনদেন সুরক্ষা।'
    },
    {
      en: 'Real-Time Collaboration Dashboards: Broadcasting live events over WebSockets with Laravel Echo, Redis, and asynchronous queued jobs.',
      bn: 'রিয়েল-টাইম কোলাবোরেশন ড্যাশবোর্ড: লারাভেল ইকো, রেডিস এবং ব্যাকগ্রাউন্ড জবের মাধ্যমে ওয়েবসকেটে লাইভ ডেটা ব্রডকাস্ট।'
    },
    {
      en: 'Mobile Backend APIs: Delivering scalable JSON microservices authenticated securely via Laravel Sanctum personal access tokens.',
      bn: 'মোবাইল ব্যাকএন্ড এপিআই: লারাভেল স্যাঙ্কটাম টোকেন দ্বারা সুরক্ষিত স্কেলেবল ও দ্রুতগতির JSON মাইক্রোসার্ভিস।'
    }
  ]
};
