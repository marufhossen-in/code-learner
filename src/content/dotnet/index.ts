import type { Hub } from '../../lib/types';
import { TheRuntimeAndTheHostLesson } from './lessons/the-runtime-and-the-host';
import { DependencyInjectionAndTheServiceLesson } from './lessons/dependency-injection-and-the-service';
import { MinimalApisAndTheEndpointLesson } from './lessons/minimal-apis-and-the-endpoint';
import { MvcAndTheControllerLesson } from './lessons/mvc-and-the-controller';
import { EntityFrameworkAndTheDbcontextLesson } from './lessons/entity-framework-and-the-dbcontext';
import { ConfigurationAndTheOptionsLesson } from './lessons/configuration-and-the-options';
import { LoggingAndTheTelemetryLesson } from './lessons/logging-and-the-telemetry';
import { ReleaseAndTheRunLesson } from './lessons/release-and-the-run';

export const dotnetHub: Hub = {
  slug: 'dotnet',
  name: '.NET',
  icon: '🟣',
  tagline: {
    en: 'Modern, open-source, high-performance cloud development with ASP.NET Core, Entity Framework Core, and the Generic Host.',
    bn: 'ASP.NET Core, Entity Framework Core এবং Generic Host দিয়ে আধুনিক, ওপেন-সোর্স ও উচ্চগতির ক্লাউড অ্যাপ্লিকেশন নির্মাণ।'
  },
  intro: {
    en: '.NET is a cross-platform, enterprise-grade application framework engineered for maximum cloud throughput, microservice scalability, and cloud-native resilience. Centered on the Generic Host and ASP.NET Core Kestrel web server, modern .NET provides an end-to-end stack: high-speed Minimal APIs and MVC controllers, built-in dependency injection with scoped lifetimes, database persistence via Entity Framework Core, centralized options configuration, structured logging with OpenTelemetry, and containerized cloud deployment. This curriculum covers 8 comprehensive stages from runtime bootstrapping to production monitoring.',
    bn: '.NET হলো একটি ক্রস-প্ল্যাটফর্ম এন্টারপ্রাইজ অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা ক্লাউডে সর্বোচ্চ গতি, মাইক্রোসার্ভিস স্কেলেবিলিটি এবং নির্ভরযোগ্যতার জন্য তৈরি করা হয়েছে। Generic Host এবং ASP.NET Core Kestrel ওয়েব সার্ভারের ওপর প্রতিষ্ঠিত আধুনিক .NET একটি স্বয়ংসম্পূর্ণ স্ট্যাক সরবরাহ করে: উচ্চগতির Minimal APIs ও MVC কন্ট্রোলার, বিল্ট-ইন ডিপেনডেন্সি ইনজেকশন, Entity Framework Core দিয়ে ডেটাবেস পারসিস্টেন্স, সেন্ট্রালাইজড কনফিগারেশন, OpenTelemetry দিয়ে স্ট্রাকচার্ড টেলিমেট্রি এবং কনটেইনারাইজড ক্লাউড ডিপ্লয়মেন্ট। এই পাঠ্যক্রমটি রানটাইম বুটস্ট্র্যাপ থেকে শুরু করে প্রোডাকশন মনিটরিং পর্যন্ত ৮ টি বিস্তারিত ধাপে বিভক্ত।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — The Host, Dependency Injection & Minimal APIs',
        bn: 'ধাপ ১ — হোস্ট, ডিপেনডেন্সি ইনজেকশন এবং Minimal APIs'
      },
      items: [
        {
          en: 'WebApplicationBuilder, Kestrel web server, and middleware pipeline order (lesson 1)',
          bn: 'WebApplicationBuilder, Kestrel ওয়েব সার্ভার এবং মিডলওয়্যার পাইপলাইনের ক্রম (পাঠ ১)'
        },
        {
          en: 'Service lifetimes: Transient, Scoped, Singleton, and captive dependency avoidance (lesson 2)',
          bn: 'সার্ভিস লাইফটাইম: Transient, Scoped, Singleton এবং ক্যাপটিভ ডিপেনডেন্সি প্রতিরোধ (পাঠ ২)'
        },
        {
          en: 'High-speed Minimal API route handlers, TypedResults, and endpoint filters (lesson 3)',
          bn: 'উচ্চগতির Minimal API রুট হ্যান্ডলার, TypedResults এবং এন্ডপয়েন্ট ফিল্টার (পাঠ ৩)'
        },
        {
          en: 'Master non-blocking asynchronous request processing through the ASP.NET Core pipeline',
          bn: 'ASP.NET Core পাইপলাইনে নন-ব্লকিং অ্যাসিনক্রোনাস রিকোয়েস্ট প্রসেসিং আয়ত্ত করুন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — MVC Controllers, Entity Framework Core & Options',
        bn: 'ধাপ ২ — MVC কন্ট্রোলার, Entity Framework Core এবং Options'
      },
      items: [
        {
          en: 'Model binding, action filters, and problem details in ASP.NET Core MVC (lesson 4)',
          bn: 'ASP.NET Core MVC-তে মডেল বাইন্ডিং, অ্যাকশন ফিল্টার এবং প্রবলেম ডিটেইলস (পাঠ ৪)'
        },
        {
          en: 'Database persistence with Entity Framework Core, migrations, and change tracking (lesson 5)',
          bn: 'Entity Framework Core দিয়ে ডেটাবেস পারসিস্টেন্স, মাইগ্রেশন এবং চেঞ্জ ট্র্যাকিং (পাঠ ৫)'
        },
        {
          en: 'Strongly-typed configuration with IOptions, IOptionsSnapshot, and reloadable settings (lesson 6)',
          bn: 'IOptions, IOptionsSnapshot এবং রিলোডেবল সেটিংস দিয়ে টাইপ-সেফ কনফিগারেশন (পাঠ ৬)'
        },
        {
          en: 'Prevent database N+1 query overhead using eager loading with Include and ThenInclude',
          bn: 'Include এবং ThenInclude দিয়ে ইগার লোডিংয়ের মাধ্যমে ডেটাবেসের N+1 কুয়েরি সমস্যা দূর করুন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Observability, Telemetry & Cloud Containerization',
        bn: 'ধাপ ৩ — অবসার্ভেবিলিটি, টেলিমেট্রি এবং ক্লাউড কনটেইনারাইজেশন'
      },
      items: [
        {
          en: 'Structured logging with Serilog, OpenTelemetry tracing, and ActivitySource metrics (lesson 7)',
          bn: 'Serilog দিয়ে স্ট্রাকচার্ড লগিং, OpenTelemetry ট্রেসিং এবং ActivitySource মেট্রিক্স (পাঠ ৭)'
        },
        {
          en: 'Production deployment with multi-stage Dockerfiles, rate limiting, and health checks (lesson 8)',
          bn: 'মাল্টি-স্টেজ ডকারফাইল, রেট লিমিটিং এবং হেলথ চেক দিয়ে প্রোডাকশন ডিপ্লয়মেন্ট (পাঠ ৮)'
        },
        {
          en: 'Integrate Kubernetes liveness and readiness probe endpoints for zero-downtime rollouts',
          bn: 'নিরবচ্ছিন্ন রোলআউটের জন্য কুবারনেটিস লাইভনেস ও রেডিনেস প্রোব সমন্বিত করুন'
        },
        {
          en: 'Harden microservice perimeters using modern TLS termination and authentication handlers',
          bn: 'আধুনিক TLS টার্মিনেশন এবং অথেনটিকেশন হ্যান্ডলার দিয়ে মাইক্রোসার্ভিস সীমানা সুরক্ষিত করুন'
        }
      ]
    }
  ],
  lessons: [
    TheRuntimeAndTheHostLesson,
    DependencyInjectionAndTheServiceLesson,
    MinimalApisAndTheEndpointLesson,
    MvcAndTheControllerLesson,
    ConfigurationAndTheOptionsLesson,
    EntityFrameworkAndTheDbcontextLesson,
    LoggingAndTheTelemetryLesson,
    ReleaseAndTheRunLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Enterprise E-Commerce Gateway with Minimal APIs & EF Core',
        bn: 'Minimal APIs এবং EF Core দিয়ে এন্টারপ্রাইজ ই-কমার্স গেটওয়ে'
      },
      brief: {
        en: 'Architect a high-throughput payment and checkout gateway in ASP.NET Core leveraging Minimal APIs, Entity Framework Core with PostgreSQL, scoped Unit of Work transactions, resilient Polly retry policies, and structured OpenTelemetry tracing.',
        bn: 'ASP.NET Core এ একটি উচ্চগতির পেমেন্ট ও চেকআউট গেটওয়ে তৈরি করুন যেখানে Minimal APIs, PostgreSQL সহ Entity Framework Core, স্কোপড Unit of Work ট্রানজ্যাকশন, পলির রিট্রাই পলিসি এবং স্ট্রাকচার্ড OpenTelemetry ট্রেসিং সমন্বিত থাকবে।'
      }
    },
    {
      title: {
        en: 'Cloud-Native Telemetry Ingestion Hub with Multi-Stage Docker',
        bn: 'মাল্টি-স্টেজ ডকার সহ ক্লাউড-নেটিভ টেলিমেট্রি হাব'
      },
      brief: {
        en: 'Build an ultra-reliable background event processing microservice using the .NET Generic Host, BackgroundService worker loops, reloadable IOptionsMonitor configurations, Serilog structured JSON pipelines, and package as a production-hardened Linux container.',
        bn: '.NET Generic Host, BackgroundService ওয়ার্কার লুপ, রিলোডেবল IOptionsMonitor কনফিগারেশন এবং Serilog স্ট্রাকচার্ড জেসন লগিং ব্যবহার করে একটি নির্ভরযোগ্য ইভেন্ট প্রসেসিং মাইক্রোসার্ভিস তৈরি করুন এবং একটি সুরক্ষিত লিনাক্স কনটেইনার হিসেবে প্যাকেজ করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always resolve scoped services (such as DbContext) from within an explicit IServiceScope; never inject scoped dependencies directly into singletons.',
      bn: 'সর্বদা একটি নির্দিষ্ট IServiceScope এর ভেতর থেকে স্কোপড সার্ভিস (যেমন DbContext) গ্রহণ করুন; সিঙ্গেলটন ক্লাসে কখনোই সরাসরি স্কোপড ডিপেনডেন্সি ইনজেক্ট করবেন না।'
    },
    {
      en: 'Prefer Minimal APIs with TypedResults for high-throughput cloud endpoints to bypass legacy MVC action filter and reflection overhead.',
      bn: 'উচ্চগতির ক্লাউড এন্ডপয়েন্টের জন্য TypedResults সহ Minimal APIs ব্যবহার করুন যাতে সনাতন MVC অ্যাকশন ফিল্টার ও রিফ্লেকশনের বাড়তি খরচ এড়ানো যায়।'
    },
    {
      en: 'Use AsNoTracking() on Entity Framework Core read-only queries to bypass the change tracker and reduce memory consumption significantly.',
      bn: 'শুধুমাত্র ডেটা পড়ার কুয়েরির জন্য Entity Framework Core-এ AsNoTracking() ব্যবহার করুন যাতে চেঞ্জ ট্র্যাকারের মেমোরি খরচ বিপুল পরিমাণে সাশ্রয় হয়।'
    },
    {
      en: 'Structure logs using message templates with named parameters (e.g. "Processed order {OrderId}") rather than string interpolation for searchable JSON telemetry.',
      bn: 'লগ করার সময় স্ট্রিং যোগ করার বদলে প্যারামিটারাইজড টেমপ্লেট (যেমন "Processed order {OrderId}") ব্যবহার করুন যাতে জেসন লগে সহজে ফিল্টার ও সার্চ করা যায়।'
    },
    {
      en: 'Always order ASP.NET Core middleware carefully: UseExceptionHandler -> UseRouting -> UseAuthentication -> UseAuthorization -> MapEndpoints.',
      bn: 'ASP.NET Core মিডলওয়্যার পাইপলাইনের ক্রম সতর্কতার সাথে বজায় রাখুন: UseExceptionHandler -> UseRouting -> UseAuthentication -> UseAuthorization -> MapEndpoints।'
    },
    {
      en: 'Use IOptionsSnapshot<T> for per-request scoped option reloading, and IOptionsMonitor<T> for dynamic notifications of configuration file updates.',
      bn: 'প্রতি রিকোয়েস্টে পরিবর্তিত কনফিগারেশন পেতে IOptionsSnapshot<T> এবং কনফিগারেশন ফাইল বদলের নোটিফিকেশন পেতে IOptionsMonitor<T> ব্যবহার করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is a "captive dependency" in .NET Dependency Injection, and why does the runtime throw an InvalidOperationException in development mode?',
        bn: '.NET ডিপেনডেন্সি ইনজেকশনে "ক্যাপটিভ ডিপেনডেন্সি" কী, এবং ডেভেলপমেন্ট মোডে রানটাইম কেন InvalidOperationException ছুড়ে দেয়?'
      },
      a: {
        en: 'A captive dependency occurs when a service with a longer lifetime holds onto a service with a shorter lifetime—most commonly when a Singleton service injects a Scoped service. The scoped service becomes "captured" for the entire application lifetime, defeating its per-request isolation and leading to memory leaks and multithreaded concurrency corruption (such as sharing a non-thread-safe DbContext across concurrent requests). In Development mode, ASP.NET Core validates scopes at startup and throws an InvalidOperationException to protect developers from shipping captive bugs to production.',
        bn: 'ক্যাপটিভ ডিপেনডেন্সি ঘটে যখন দীর্ঘস্থায়ী কোনো সার্ভিস (যেমন Singleton) স্বল্পস্থায়ী কোনো সার্ভিসকে (যেমন Scoped) নিজের ফিল্ড হিসেবে আটকে রাখে। এর ফলে প্রতি রিকোয়েস্টে নতুন অবজেক্ট তৈরির নিয়ম ভেঙে যায় এবং একাধিক থ্রেডে একটি একক DbContext শেয়ার হওয়ায় মেমোরি লিক ও মারাত্মক ডেটা বিকৃতি ঘটতে পারে। ডেভেলপমেন্ট মোডে ASP.NET Core চালুর সময়ই স্কোপ পরীক্ষা করে InvalidOperationException ছুড়ে ডেভেলপারকে প্রোডাকশনে ভুল পাঠানো থেকে রক্ষা করে।'
      }
    },
    {
      q: {
        en: 'How does ASP.NET Core Minimal APIs achieve higher throughput and lower memory allocation compared to traditional MVC Controllers?',
        bn: 'সনাতন MVC কন্ট্রোলারের তুলনায় ASP.NET Core Minimal APIs কীভাবে উচ্চতর গতি এবং স্বল্প মেমোরি খরচ নিশ্চিত করে?'
      },
      a: {
        en: 'Minimal APIs bypass the heavy MVC controller pipeline, eliminating controller discovery, action descriptor reflection, complex model binding metadata, and filters. Route endpoints compile down to direct RequestDelegate invocations generated at compile time or startup. Using TypedResults returns static struct-based HTTP results that bypass object boxing, delivering sub-microsecond routing latencies and negligible allocation overhead.',
        bn: 'Minimal APIs সনাতন MVC-এর ভারী কন্ট্রোলার পাইপলাইন, অ্যাকশন ফিল্টার এবং জটিল রিফ্লেকশন পুরোপুরি এড়িয়ে সরাসরি RequestDelegate হিসেবে কাজ করে। TypedResults ব্যবহারের মাধ্যমে কোনো অবজেক্ট বক্সিং ছাড়াই সরাসরি এইচটিটিপি রেসপন্স পাঠানো হয়, যা সাব-মাইক্রোসেকেন্ড রাউটিং গতি দেয় এবং মেমোরি খরচ প্রায় শূন্যে নামিয়ে আনে।'
      }
    },
    {
      q: {
        en: 'What is the DbContext Change Tracker in Entity Framework Core, and how does AsNoTracking() optimize read-only queries?',
        bn: 'Entity Framework Core-এ DbContext Change Tracker কী, এবং AsNoTracking() কীভাবে রিড-অনলি কুয়েরিকে অপটিমাইজ করে?'
      },
      a: {
        en: 'The Change Tracker records original snapshots of every entity loaded by a DbContext, comparing current states against snapshots on SaveChanges() to generate targeted SQL UPDATE statements. For read-only queries where data will never be mutated, this snapshotting wastes CPU cycles and RAM. Calling AsNoTracking() tells EF Core to skip snapshot creation and entity tracking entirely, yielding up to 50 percent faster query execution and drastically reduced heap memory consumption.',
        bn: 'চেঞ্জ ট্র্যাকার DbContext দ্বারা লোড হওয়া প্রতিটি এনটিটির একটি স্ন্যাপশট মেমোরিতে সংরক্ষণ করে, যাতে SaveChanges() ডাকার সময় পার্থক্যের ওপর ভিত্তি করে নিখুঁত SQL UPDATE চালানো যায়। কিন্তু শুধুমাত্র ডেটা পড়ার সময় এই স্ন্যাপশট তৈরি করা সিপিইউ ও মেমোরির অপচয়। AsNoTracking() মেথডটি স্ন্যাপশট তৈরি বন্ধ রাখে, যার ফলে কুয়েরি ৫০ শতাংশ পর্যন্ত দ্রুত চলে এবং প্রচুর মেমোরি সাশ্রয় হয়।'
      }
    },
    {
      q: {
        en: 'What is the precise architectural difference between IOptions, IOptionsSnapshot, and IOptionsMonitor in the .NET Options Pattern?',
        bn: '.NET Options Pattern-এ IOptions, IOptionsSnapshot এবং IOptionsMonitor এর মধ্যকার সুনির্দিষ্ট আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'IOptions is registered as a Singleton, reading configuration values once at startup without supporting reloads. IOptionsSnapshot is Scoped, computing options anew for each HTTP request and reflecting configuration changes (like updated appsettings.json) in real time. IOptionsMonitor is a Singleton that provides an OnChange notification event and a CurrentValue property, designed for long-running background worker services to react to live configuration changes without service restarts.',
        bn: 'IOptions হলো একটি সিঙ্গেলটন যা অ্যাপ চালুর সময় একবার মান পড়ে এবং পরবর্তীতে কোনো পরিবর্তন সমর্থন করে না। IOptionsSnapshot হলো স্কোপড যা প্রতিটি নতুন এইচটিটিপি রিকোয়েস্টে নতুন মান গণনা করে এবং ফাইল বদল হলে তাৎক্ষণিক তা গ্রহণ করে। অন্যদিকে IOptionsMonitor হলো ব্যাকগ্রাউন্ড সার্ভিস বা সিঙ্গেলটনের জন্য তৈরি, যা OnChange ইভেন্ট ও CurrentValue এর মাধ্যমে অ্যাপ রিস্টার্ট ছাড়াই তাৎক্ষণিক কনফিগারেশন পরিবর্তনের সংকেত দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-volume payment processing gateways run ASP.NET Core Kestrel with Minimal APIs, processing over 100000 transactions per second with sub-millisecond response latencies.',
      bn: 'বিশাল ভলিউমের পেমেন্ট প্রসেসিং গেটওয়েগুলো Minimal APIs সহ ASP.NET Core Kestrel চালায়, যা সাব-মিলিসেকেন্ড রেসপন্স গতিতে প্রতি সেকেন্ডে ১০০০০০ টির বেশি লেনদেন পরিচালনা করে।'
    },
    {
      en: 'Enterprise cloud services deploy Dockerized .NET microservices into Kubernetes clusters with automated liveness and readiness probes on port 8080.',
      bn: 'এন্টারপ্রাইজ ক্লাউড সিস্টেমে কুবারনেটিস ক্লাস্টারে ডকারাইজড .NET মাইক্রোসার্ভিস ডিপ্লয় করা হয় এবং ৮০৮০ পোর্টে স্বয়ংক্রিয় লাইভনেস ও রেডিনেস প্রোব পর্যবেক্ষণ করা হয়।'
    },
    {
      en: 'Distributed logistics platforms utilize Entity Framework Core with PostgreSQL read-replicas, leveraging AsNoTracking() and compiled queries for sub-second tracking lookups.',
      bn: 'বিতরণকৃত লজিস্টিক প্ল্যাটফর্মগুলো PostgreSQL রিড-রেপ্লিকা সহ Entity Framework Core ব্যবহার করে, যেখানে AsNoTracking() দিয়ে বিদ্যুৎ গতিতে পার্সেল ট্র্যাকিং নিশ্চিত করা হয়।'
    },
    {
      en: 'Financial analytics backends stream real-time telemetry through OpenTelemetry exporters into Grafana and Prometheus for continuous production anomaly detection.',
      bn: 'আর্থিক অ্যানালিটিক্স সিস্টেমগুলো OpenTelemetry এর মাধ্যমে প্রমিথিউস ও গ্রাফানায় রিয়েল-টাইম মেট্রিক্স পাঠিয়ে সার্বক্ষণিক প্রোডাকশন ত্রুটি পর্যবেক্ষণ করে।'
    }
  ]
};
