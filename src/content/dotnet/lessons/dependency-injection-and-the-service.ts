import type { Lesson } from '../../../lib/types';

export const DependencyInjectionAndTheServiceLesson: Lesson = {
  slug: 'dependency-injection-and-the-service',
  tech: 'dotnet',
  title: {
    en: 'Dependency Injection & Service Lifetimes',
    bn: 'ডিপেনডেন্সি ইনজেকশন এবং সার্ভিস লাইফটাইম'
  },
  summary: {
    en: 'Master the built-in dependency injection container in .NET. Compare the 3 fundamental service lifetimes (Transient, Scoped, Singleton), eliminate concurrency bugs by preventing captive dependencies, and register named services using modern Keyed Services.',
    bn: '.NET-এর বিল্ট-ইন ডিপেনডেন্সি ইনজেকশন কনটেইনার আয়ত্ত করুন। ৩ টি মৌলিক সার্ভিস লাইফটাইমের (Transient, Scoped, Singleton) তুলনা জানুন, ক্যাপটিভ ডিপেনডেন্সি প্রতিরোধ করে কনকারেন্সি এরর দূর করুন এবং modern Keyed Services দিয়ে একাধিক সার্ভিসের নিবন্ধন শিখুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'service-lifetimes-and-ioc-container-heading',
      text: {
        en: 'The 3 Service Lifetimes: Transient, Scoped, and Singleton',
        bn: '৩ টি সার্ভিস লাইফটাইম: Transient, Scoped এবং Singleton'
      }
    },
    {
      type: 'para',
      text: {
        en: 'At the heart of the .NET (dotnet framework) web architecture lies a high-performance Inversion of Control (IoC) container. Dependency Injection (DI) removes hardcoded object instantiations, allowing the runtime to supply dependencies dynamically at runtime. When registering dependencies in IServiceCollection, developers select from 3 fundamental lifetimes: Transient, Scoped, or Singleton. Transient services (AddTransient) are instantiated every single time they are requested, ideal for lightweight stateless utilities. Scoped services (AddScoped) are created once per client HTTP request scope, making them essential for database contexts and user credentials. Finally, Singleton services (AddSingleton) are instantiated once and shared across all threads for the lifetime of the application.',
        bn: 'ASP.NET Core (ডটনেট ফ্রেমওয়ার্ক) ওয়েব আর্কিটেকচারের কেন্দ্রস্থলে রয়েছে একটি শক্তিশালী Inversion of Control (IoC) কনটেইনার। ডিপেনডেন্সি ইনজেকশন (DI) কোডের ভেতর সরাসরি অবজেক্ট তৈরির ঝামেলা দূর করে রানটাইমকে নিজে থেকে ডিপেনডেন্সি সরবরাহের ক্ষমতা দেয়। IServiceCollection-এ সার্ভিস নিবন্ধনের সময় ডেভেলপাররা ৩ টি মৌলিক লাইফটাইম থেকে বেছে নেন: Transient, Scoped অথবা Singleton। Transient সার্ভিসগুলো (AddTransient) প্রতিবার চাওয়ার সাথে সাথে নতুন করে তৈরি হয়, যা হালকা স্টেটলেস ক্লাসের জন্য আদর্শ। Scoped সার্ভিসগুলো (AddScoped) প্রতিটি ক্লায়েন্ট এইচটিটিপি রিকোয়েস্টের জন্য একবার তৈরি হয় এবং পুরো রিকোয়েস্টে শেয়ার থাকে, যা ডেটাবেস কনটেক্সটের জন্য অত্যন্ত জরুরি। আর Singleton সার্ভিসগুলো (AddSingleton) পুরো অ্যাপ্লিকেশনের জন্য কেবল একবার তৈরি হয় এবং সমস্ত থ্রেডে আজীবন শেয়ার থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle comparison of .NET service lifetimes: Transient new instantiations, per-request Scoped sharing, and global Singleton longevity.',
        bn: 'চিত্র ১: .NET সার্ভিস লাইফটাইমের আর্কিটেকচারাল তুলনা: Transient এর নতুন অবজেক্ট তৈরি, প্রতি রিকোয়েস্টে Scoped শেয়ারিং এবং গ্লোবাল Singleton স্থায়িত্ব।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">.NET DEPENDENCY INJECTION SERVICE LIFETIMES</text>

  <!-- Step 1: Transient -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Transient</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">AddTransient&lt;T&gt;()</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">New Instance Always</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Zero State Shared</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Stateless Utilities</text>
  </g>

  <!-- Step 2: Scoped -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Scoped</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">AddScoped&lt;T&gt;()</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">1 Instance per Request</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">DbContext &amp; Identity</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Per-Request Boundary</text>
  </g>

  <!-- Step 3: Singleton -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Singleton</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">AddSingleton&lt;T&gt;()</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">1 Instance for App Life</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Thread-Safe Caches</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Global Shared State</text>
  </g>

  <!-- Step 4: Keyed Services -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Keyed DI</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">AddKeyedScoped</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">"stripe" vs "paypal"</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">[FromKeyedServices]</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Named Disambiguation</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'captive-dependencies-and-keyed-services-heading',
      text: {
        en: 'Captive Dependencies and Modern Keyed Services',
        bn: 'ক্যাপটিভ ডিপেনডেন্সি এবং আধুনিক Keyed Services'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A dangerous architectural hazard in dependency injection is a "captive dependency". This happens when a longer-lived service injects a shorter-lived service—most commonly when a Singleton injects a Scoped dependency like DbContext. The scoped instance becomes trapped inside the singleton forever, destroying its per-request isolation and causing race conditions when concurrent threads access the same non-thread-safe DbContext. To catch this early, ASP.NET Core validates scopes during development, throwing an InvalidOperationException. In .NET 8, Microsoft introduced native Keyed Services, allowing developers to register multiple implementations of the same interface using named keys.',
        bn: 'ডিপেনডেন্সি ইনজেকশনের একটি মারাত্মক ঝুঁকি হলো "ক্যাপটিভ ডিপেনডেন্সি"। এটি ঘটে যখন দীর্ঘস্থায়ী কোনো সার্ভিস (যেমন Singleton) স্বল্পস্থায়ী কোনো সার্ভিসকে (যেমন Scoped DbContext) নিজের ভেতরে আটকে রাখে। এর ফলে প্রতি রিকোয়েস্টে নতুন অবজেক্ট তৈরির নিয়ম ভেঙে যায় এবং একাধিক থ্রেড একই সাথে একটি একক DbContext ব্যবহার করতে গিয়ে মারাত্মক ডেটা বিকৃতি ঘটায়। এই ভুলটি রোধ করতে ASP.NET Core ডেভেলপমেন্ট মোডে চালুর সময়ই স্কোপ যাচাই করে InvalidOperationException ছুড়ে দেয়। তাছাড়া .NET ৮ সংস্করণে মাইক্রোসফট Keyed Services সুবিধা যোগ করেছে, যার মাধ্যমে একই ইন্টারফেসের একাধিক ক্লাসকে পৃথক কী-নাম দিয়ে সহজেই নিবন্ধন ও ইনজেক্ট করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of .NET dependency injection service container: Transient minting, Scoped request isolation, and Singleton persistence.',
        bn: '.NET ডিপেনডেন্সি ইনজেকশন কনটেইনার, Transient নতুন তৈরি, Scoped আইসোলেশন এবং Singleton স্থায়িত্বের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of .NET Service Provider and Scoped Lifetimes

export class ServiceProviderSimulator {
  private singletonInstances: Map<string, any> = new Map();

  // Simulating service resolution across different lifetimes
  public resolveTransient(factory: () => any): any {
    return factory(); // Always a brand new instance
  }

  public resolveSingleton(serviceKey: string, factory: () => any): any {
    if (!this.singletonInstances.has(serviceKey)) {
      this.singletonInstances.set(serviceKey, factory());
    }
    return this.singletonInstances.get(serviceKey);
  }

  // Simulating creation of a client HTTP request scope
  public createScope(): RequestScopeSimulator {
    return new RequestScopeSimulator(this);
  }
}

export class RequestScopeSimulator {
  private scopedInstances: Map<string, any> = new Map();

  constructor(private rootProvider: ServiceProviderSimulator) {}

  public resolveScoped(serviceKey: string, factory: () => any): any {
    if (!this.scopedInstances.has(serviceKey)) {
      this.scopedInstances.set(serviceKey, factory());
    }
    return this.scopedInstances.get(serviceKey);
  }
}

// Execution demonstration
const rootContainer = new ServiceProviderSimulator();

// Simulating Request 1
const scope1 = rootContainer.createScope();
const dbContext1A = scope1.resolveScoped('DbContext', () => ({ id: Math.random() }));
const dbContext1B = scope1.resolveScoped('DbContext', () => ({ id: Math.random() }));
console.log('Same Scoped Instance in Request 1:', dbContext1A === dbContext1B); // true

// Simulating Request 2
const scope2 = rootContainer.createScope();
const dbContext2 = scope2.resolveScoped('DbContext', () => ({ id: Math.random() }));
console.log('Isolated Scoped Instance in Request 2:', dbContext1A === dbContext2); // false

// Simulating Global Singleton across requests
const cache1 = rootContainer.resolveSingleton('Cache', () => ({ version: 1 }));
const cache2 = rootContainer.resolveSingleton('Cache', () => ({ version: 1 }));
console.log('Global Singleton Reused Exactly:', cache1 === cache2); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Transient Lifetime',
          def: {
            en: 'Service lifetime creating a new instance every time the service is requested from the container.',
            bn: 'সার্ভিস লাইফটাইম যা কনটেইনার থেকে ডাকার সাথে সাথে প্রতিবার একটি নতুন অবজেক্ট তৈরি করে দেয়।'
          }
        },
        {
          term: 'Scoped Lifetime',
          def: {
            en: 'Service lifetime creating one shared instance per HTTP request scope, isolating concurrent users safely.',
            bn: 'সার্ভিস লাইফটাইম যা প্রতিটি ক্লায়েন্ট রিকোয়েস্টে একটিমাত্র অবজেক্ট তৈরি করে ব্যবহারকারীদের আলাদা রাখে।'
          }
        },
        {
          term: 'Singleton Lifetime',
          def: {
            en: 'Service lifetime instantiating an object once and sharing it globally across all requests and threads.',
            bn: 'সার্ভিস লাইফটাইম যা পুরো অ্যাপের জন্য মাত্র একবার অবজেক্ট বানায় এবং সব থ্রেডে শেয়ার করে।'
          }
        },
        {
          term: 'Captive Dependency',
          def: {
            en: 'Architectural bug where a service with a longer lifetime holds a shorter-lived service, leading to concurrency bugs.',
            bn: 'মারাত্মক ভুল যেখানে দীর্ঘস্থায়ী সার্ভিস কোনো স্বল্পস্থায়ী সার্ভিসকে আটকে রেখে ডেটা বিকৃতি ঘটায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'scoped-service-lifetime-boundary-ex1',
      kind: 'mcq',
      topic: 'scoped-lifetime-per-http-request',
      question: {
        en: 'How many instances of a Scoped service (AddScoped) are created during a single incoming HTTP request in ASP.NET Core?',
        bn: 'ASP.NET Core-এ একটি একক ইনকামিং এইচটিটিপি রিকোয়েস্টের ভেতরে একটি Scoped সার্ভিসের (AddScoped) কয়টি অবজেক্ট তৈরি হয়?'
      },
      options: [
        {
          en: 'Exactly 1 shared instance for that specific HTTP request scope, regardless of how many controllers or dependencies request it',
          bn: 'সেই নির্দিষ্ট এইচটিটিপি রিকোয়েস্টের জন্য ঠিক ১ টি শেয়ার্ড অবজেক্ট, যতগুলো কন্ট্রোলার বা সার্ভিসই এটিকে ব্যবহার করুক না কেন'
        },
        {
          en: 'A new instance every time a method is called',
          bn: 'প্রতিবার মেথড কল করার সাথে সাথে একটি নতুন অবজেক্ট'
        },
        {
          en: '100 instances per second automatically',
          bn: 'স্বয়ংক্রিয়ভাবে প্রতি সেকেন্ডে ১০০ টি অবজেক্ট'
        },
        {
          en: 'Scoped services are never instantiated in .NET',
          bn: '.NET-এ Scoped সার্ভিসের কোনো অবজেক্ট কখনো তৈরি হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Scoped services are created once per request scope.',
        bn: 'প্রতিটি রিকোয়েস্ট স্কোপের ভেতর Scoped সার্ভিসের ঠিক একটি অবজেক্ট শেয়ার করা হয়।'
      },
      explanation: {
        en: 'ASP.NET Core creates a new IServiceScope per HTTP request. All components resolving a scoped service within that request share the same instance.',
        bn: 'একটি রিকোয়েস্টের ভেতরে সব ক্লাস একই অবজেক্ট পায়, যা ডেটাবেস লেনদেনের সামঞ্জস্য নিশ্চিত করে।'
      }
    },
    {
      id: 'captive-dependency-dbcontext-hazard-ex2',
      kind: 'mcq',
      topic: 'captive-dependency-concurrency-hazard',
      question: {
        en: 'Why is injecting a Scoped Entity Framework Core DbContext into a Singleton background worker dangerous in .NET?',
        bn: '.NET-এ একটি Singleton ব্যাকগ্রাউন্ড সার্ভিসের ভেতর Scoped Entity Framework Core DbContext ইনজেক্ট করা কেন বিপজ্জনক?'
      },
      options: [
        {
          en: 'DbContext is NOT thread-safe; capturing it in a singleton shares it across concurrent threads, leading to race conditions, memory leaks, and data corruption',
          bn: 'DbContext থ্রেড-নিরাপদ (thread-safe) নয়; এটিকে সিঙ্গেলটনে আটকে রাখলে একাধিক থ্রেড একসাথে ব্যবহারের চেষ্টা করে রেস কন্ডিশন ও ডেটা নষ্ট করে ফেলে'
        },
        {
          en: 'It causes the physical server fan to stop spinning',
          bn: 'এটি ফিজিক্যাল সার্ভারের কুলিং ফ্যান বন্ধ করে দেয়'
        },
        {
          en: 'Singletons can only hold integer variables',
          bn: 'সিঙ্গেলটন কেবল পূর্ণসংখ্যা ধারণ করতে পারে'
        },
        {
          en: 'DbContext requires an active Bluetooth connection',
          bn: 'DbContext ব্যবহারের জন্য ব্লুটুথ সংযোগ বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'DbContext is not thread-safe and must never be shared across threads in singletons.',
        bn: 'DbContext একাধিক থ্রেডে একসাথে ব্যবহারের উপযোগী নয়; তাই সিঙ্গেলটনে এটি রাখা মারাত্মক ভুল।'
      },
      explanation: {
        en: 'DbContext is designed for single-threaded per-request usage. Capturing it in a singleton creates concurrency conflicts across threads.',
        bn: 'ডেটা বিকৃতি ঠেকাতে ব্যাকগ্রাউন্ড সার্ভিসে IServiceScopeFactory দিয়ে নতুন স্কোপ তৈরি করে কাজ করতে হয়।'
      }
    },
    {
      id: 'keyed-services-dotnet8-ex3',
      kind: 'mcq',
      topic: 'keyed-services-dotnet8-registration',
      question: {
        en: 'Which modern C# attribute is placed on constructor parameters to resolve a named dependency registered with "AddKeyedScoped" in .NET 8?',
        bn: '.NET ৮ সংস্করণে "AddKeyedScoped" দিয়ে নিবন্ধিত কোনো নির্দিষ্ট সার্ভিসকে কনস্ট্রাক্টরে গ্রহণ করতে কোন অ্যানোটেশন ব্যবহার করা হয়?'
      },
      options: [
        { en: '[FromKeyedServices("serviceKey")]', bn: '[FromKeyedServices("serviceKey")] অ্যানোটেশন' },
        { en: '[NamedDependency("serviceKey")]', bn: '[NamedDependency("serviceKey")] অ্যানোটেশন' },
        { en: '[InjectKey("serviceKey")]', bn: '[InjectKey("serviceKey")] অ্যানোটেশন' },
        { en: '[BindKey("serviceKey")]', bn: '[BindKey("serviceKey")] অ্যানোটেশন' }
      ],
      answer: 0,
      hint: {
        en: 'Use [FromKeyedServices] to inject keyed dependencies in .NET 8.',
        bn: '.NET ৮ এ নির্দিষ্ট কী যুক্ত সার্ভিস ইনজেক্ট করতে [FromKeyedServices] ব্যবহার করা হয়।'
      },
      explanation: {
        en: '.NET 8 introduced native keyed services, using [FromKeyedServices(key)] to resolve disambiguated implementations seamlessly.',
        bn: 'একই ইন্টারফেসের একাধিক ক্লাসের মধ্যে কাঙ্ক্ষিত ক্লাসটি বেছে নিতে [FromKeyedServices] সাহায্য করে।'
      }
    },
    {
      id: 'transient-service-use-case-ex4',
      kind: 'mcq',
      topic: 'transient-service-stateless-use-case',
      question: {
        en: 'For which architectural use case is the Transient (AddTransient) service lifetime most appropriate in ASP.NET Core?',
        bn: 'ASP.NET Core-এ কোন ধরনের স্থাপত্যিক কাজের জন্য Transient (AddTransient) লাইফটাইম সবচেয়ে উপযুক্ত?'
      },
      options: [
        {
          en: 'Lightweight, stateless services or algorithmic calculators that hold no mutable state and can be discarded immediately after execution',
          bn: 'হালকা, স্টেটলেস সার্ভিস বা গাণিতিক ক্যালকুলেটর যা কোনো পরিবর্তনশীল তথ্য ধরে রাখে না এবং কাজ শেষে অবিলম্বে মুছে ফেলা যায়'
        },
        {
          en: 'A shared global in-memory cache holding 500 megabytes of data',
          bn: '৫০০ মেগাবাইট ডেটা ধারণকারী একটি গ্লোবাল ইন-মেমোরি ক্যাশ'
        },
        {
          en: 'A database transaction object spanning an entire HTTP request',
          bn: 'পুরো এইচটিটিপি রিকোয়েস্ট জুড়ে চলা একটি ডেটাবেস লেনদেন'
        },
        {
          en: 'Transient services should never be used in any application',
          bn: 'কোনো অ্যাপ্লিকেশনে Transient সার্ভিস কখনোই ব্যবহার করা উচিত নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transient services are cheap, stateless objects created on demand.',
        bn: 'Transient হলো নির্দ্বিধায় তৈরি করা যায় এমন হালকা ও স্টেটলেস অবজেক্ট।'
      },
      explanation: {
        en: 'Transient services are ideal for lightweight stateless components. Since they hold no state, creating fresh instances avoids side-effects.',
        bn: 'কোনো অভ্যন্তরীণ পরিবর্তনশীল অবস্থা না থাকায় প্রতিবার নতুন অবজেক্ট বানালে সাইড-ইফেক্টের ঝুঁকি থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-dependency-injection-and-the-service',
    title: {
      en: '.NET Dependency Injection & Service Lifetimes Quiz',
      bn: '.NET ডিপেনডেন্সি ইনজেকশন এবং সার্ভিস লাইফটাইম কুইজ'
    },
    questions: [
      {
        id: 'quiz-iservicescopefactory-background-service',
        kind: 'mcq',
        topic: 'iservicescopefactory-create-scope-background-workers',
        question: {
          en: 'How should a Singleton BackgroundService correctly consume a Scoped service (such as an EF Core DbContext) without creating a captive dependency?',
          bn: 'একটি Singleton BackgroundService কীভাবে ক্যাপটিভ ডিপেনডেন্সির ঝুঁকি এড়িয়ে সঠিক উপায়ে একটি Scoped সার্ভিস (যেমন DbContext) ব্যবহার করতে পারে?'
        },
        options: [
          {
            en: 'Inject IServiceScopeFactory into the singleton, and call "using var scope = scopeFactory.CreateScope()" to resolve the scoped service within an explicit, disposable scope',
            bn: 'সিঙ্গেলটনে IServiceScopeFactory ইনজেক্ট করতে হয় এবং "using var scope = scopeFactory.CreateScope()" দিয়ে নির্দিষ্ট কাজের জন্য একটি স্বাধীন স্কোপ বানিয়ে সার্ভিসটি গ্রহণ করতে হয়'
          },
          {
            en: 'Convert the DbContext into a static global class',
            bn: 'DbContext কে একটি স্ট্যাটিক গ্লোবাল ক্লাসে রূপান্তর করে'
          },
          {
            en: 'Restart the entire application before every query',
            bn: 'প্রতিটি কুয়েরির আগে পুরো অ্যাপ্লিকেশন রিস্টার্ট করে'
          },
          {
            en: 'Background services cannot access databases in .NET',
            bn: '.NET-এ ব্যাকগ্রাউন্ড সার্ভিস কখনোই ডেটাবেস ব্যবহার করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use IServiceScopeFactory to create explicit child scopes in singletons.',
          bn: 'সিঙ্গেলটনের ভেতরে স্বাধীন স্কোপ তৈরি করতে IServiceScopeFactory ব্যবহার করাই আদর্শ।'
        },
        explanation: {
          en: 'Creating an explicit IServiceScope ensures the scoped service is isolated, used on a single thread, and deterministically disposed when the scope closes.',
          bn: 'কাজ শেষে স্কোপটি বন্ধ হওয়ার সাথে সাথে ডেটাবেস হ্যান্ডেল ও মেমোরি নিরাপদভাবে মুক্ত হয়ে যায়।'
        }
      },
      {
        id: 'quiz-validate-scopes-development-environment',
        kind: 'mcq',
        topic: 'validate-scopes-development-check',
        question: {
          en: 'What does the "ValidateScopes" configuration option do in the default ASP.NET Core WebApplication host builder?',
          bn: 'ডিফল্ট ASP.NET Core হোস্ট বিল্ডারে "ValidateScopes" কনফিগারেশন বিকল্পটি কী কাজ করে?'
        },
        options: [
          {
            en: 'It verifies at startup that scoped services are never resolved directly from the root provider or captured by singletons, throwing an exception early if violated',
            bn: 'এটি অ্যাপ চালুর সময়ই নিশ্চিত করে যে Scoped সার্ভিস কখনো রুট প্রোভাইডার থেকে বা সিঙ্গেলটন দ্বারা ভুলবশত আবদ্ধ হয়নি, এবং ভুল থাকলে সাথে সাথে এক্সেপশন ছুড়ে সতর্ক করে'
          },
          {
            en: 'It measures the internet bandwidth speed of the server',
            bn: 'এটি সার্ভারের ইন্টারনেট ব্যান্ডউইথ গতি পরিমাপ করে'
          },
          {
            en: 'It limits the number of web pages to 10',
            bn: 'এটি ওয়েব পেজের সংখ্যা ১০ টিতে সীমাবদ্ধ করে'
          },
          {
            en: 'ValidateScopes only works on macOS operating systems',
            bn: 'ValidateScopes কেবলমাত্র ম্যাক ওএসে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ValidateScopes prevents captive dependencies during development.',
          bn: 'ValidateScopes ডেভেলপমেন্টের সময়ই ক্যাপটিভ ডিপেনডেন্সির মারাত্মক ভুলগুলো ধরিয়ে দেয়।'
        },
        explanation: {
          en: 'ValidateScopes runs automatically in Development to catch captive dependencies before bad code ships to production.',
          bn: 'প্রোডাকশনে যাওয়ার আগেই ভুল স্কোপিংয়ের বাগগুলো ধরা পড়ার কারণে ডেভেলপাররা বড় বিপর্যয় থেকে রক্ষা পান।'
        }
      },
      {
        id: 'quiz-tryadd-service-registration-protection',
        kind: 'mcq',
        topic: 'tryadd-extension-avoids-duplicate-registration',
        question: {
          en: 'Why do library authors prefer using "services.TryAddScoped<T>()" instead of "services.AddScoped<T>()" in extension methods?',
          bn: 'লাইব্রেরি লেখকরা এক্সটেনশন মেথডে "services.AddScoped<T>()"-এর বদলে "services.TryAddScoped<T>()" ব্যবহার করা কেন বেশি পছন্দ করেন?'
        },
        options: [
          {
            en: 'TryAdd registers the implementation only if no service of that service type has already been registered, allowing application developers to override default services',
            bn: 'TryAdd কেবল তখনই সার্ভিসটি যোগ করে যদি আগে থেকে সেই টাইপের কোনো সার্ভিস যোগ করা না থাকে, ফলে অ্যাপ ডেভেলপাররা নিজস্ব কাস্টম সার্ভিস দিয়ে ডিফল্ট প্রতিস্থাপন করতে পারেন'
          },
          {
            en: 'TryAdd makes the database query run 10 times faster',
            bn: 'TryAdd ডেটাবেস কুয়েরির গতি ১০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: 'TryAdd is written in C++ for maximum CPU utilization',
            bn: 'TryAdd সর্বোচ্চ গতির জন্য C++ এ লেখা হয়েছে'
          },
          {
            en: 'TryAdd was deprecated in .NET 7',
            bn: '.NET ৭ সংস্করণে TryAdd বাতিল করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'TryAdd prevents duplicate registrations and allows user overrides.',
          bn: 'TryAdd ডুপ্লিকেট রেজিস্ট্রেশন ঠেকায় এবং ডেভেলপারকে নিজস্ব সার্ভিস ব্যবহারের সুযোগ দেয়।'
        },
        explanation: {
          en: 'TryAdd gives precedence to user-registered services, ensuring library defaults act as fallbacks that do not overwrite explicit customizations.',
          bn: 'লাইব্রেরির ডিফল্ট বিন যেন ডেভেলপারের কাস্টম বিনকে মুছে না দেয়, সেজন্য TryAdd আদর্শ।'
        }
      },
      {
        id: 'quiz-idisposable-service-container-cleanup',
        kind: 'mcq',
        topic: 'container-disposes-created-idisposable-services',
        question: {
          en: 'What happens to services implementing IDisposable or IAsyncDisposable when their enclosing service scope is disposed by the .NET DI container?',
          bn: 'যখন একটি সার্ভিস স্কোপ বন্ধ (dispose) হয়, তখন তার ভেতরের IDisposable বা IAsyncDisposable সার্ভিসগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'The DI container automatically invokes Dispose() or DisposeAsync() on all instances created within that scope, releasing unmanaged resources cleanly',
            bn: 'ডিপেনডেন্সি ইনজেকশন কনটেইনার নিজে থেকেই সেই স্কোপে তৈরি সমস্ত অবজেক্টের Dispose() বা DisposeAsync() কল করে সমস্ত রিসোর্স পরিষ্কারভাবে মুক্ত করে'
          },
          {
            en: 'The container leaves all resources open, causing memory leaks',
            bn: 'কনটেইনার সমস্ত রিসোর্স খোলা রেখে দেয় যার ফলে মেমোরি লিক হয়'
          },
          {
            en: 'The operating system restarts the entire machine',
            bn: 'অপারেটিং সিস্টেম পুরো কম্পিউটারকে রিস্টার্ট করে'
          },
          {
            en: 'The DI container does not manage IDisposable instances',
            bn: 'DI কনটেইনার IDisposable অবজেক্টের কোনো খোঁজ রাখে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The container tracks and disposes disposable instances created within a scope.',
          bn: 'কনটেইনার নিজে থেকেই স্কোপে তৈরি অবজেক্টগুলো মনে রাখে এবং স্কোপ শেষে সেগুলোকে ডিসপোজ করে।'
        },
        explanation: {
          en: 'The container owns the lifecycle of instances it creates. When a scope ends, it disposes all disposable scoped objects automatically.',
          bn: 'ডেভেলপারকে ম্যানুয়ালি ডিসপোজ লিখতে হয় না; কনটেইনার স্বয়ংক্রিয়ভাবে মেমোরি পরিচ্ছন্ন রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'minimal-apis-and-the-endpoint',
    title: {
      en: 'Minimal APIs & High-Throughput Endpoints',
      bn: 'Minimal APIs এবং হাই-থ্রুপুট এন্ডপয়েন্ট'
    }
  }
};
