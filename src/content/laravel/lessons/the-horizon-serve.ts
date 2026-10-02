import type { Lesson } from '../../../lib/types';

export const TheHorizonServeLesson: Lesson = {
  slug: 'the-horizon-serve',
  tech: 'laravel',
  title: {
    en: 'Production Optimization: Laravel Horizon, Octane & Deployment Capstone',
    bn: 'প্রোডাকশন অপ্টিমাইজেশন: লারাভেল হরাইজন, অক্টেন এবং ডিপ্লয়মেন্ট ক্যাপস্টোন'
  },
  summary: {
    en: 'Culminate your Laravel mastery by architecting enterprise production environments. Monitor Redis queues with Laravel Horizon, achieve high-concurrency 10x throughput using Laravel Octane, optimize deployments with Artisan caching commands, and build an end-to-end full-stack capstone.',
    bn: 'এন্টারপ্রাইজ প্রোডাকশন আর্কিটেকচারের মাধ্যমে আপনার লারাভেল শিক্ষা পূর্ণাঙ্গ করুন। লারাভেল হরাইজন দিয়ে রেডিস কিউ মনিটরিং, লারাভেল অক্টেন দিয়ে ১০ গুণ দ্রুত থ্রুপুট অর্জন, আর্টিস্যান ক্যাশিং কমান্ড এবং একটি পূর্ণাঙ্গ ফুল-স্ট্যাক ক্যাপস্টোন।'
  },
  minutes: 36,
  blocks: [
    {
      type: 'heading',
      id: 'production-scale-heading',
      text: {
        en: 'Enterprise Queue Observability with Horizon and In-Memory Octane',
        bn: 'হরাইজন দিয়ে কিউ মনিটরিং এবং মেমোরি-ভিত্তিক অক্টেন আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying Laravel (the modern web framework for PHP) at enterprise scale requires real-time observability and minimal CPU latency. Laravel Horizon provides a dashboard and auto-balancing supervisor for Redis queues, dynamically scaling worker threads based on queue wait times and displaying throughput metrics in real time. For hyper-scale API performance, Laravel Octane boots the framework once into server RAM using Swoole or RoadRunner, maintaining application state across requests and slashing latency from 40ms down to sub-5ms for a 10x throughput surge.',
        bn: 'এন্টারপ্রাইজ পর্যায়ে লারাভেল (পিএইচপির আধুনিক ওয়েব ফ্রেমওয়ার্ক) পরিচালনা করতে রিয়েল-টাইম মনিটরিং এবং সর্বনিম্ন প্রসেসর লেটেন্সি নিশ্চিত করতে হয়। লারাভেল হরাইজন রেডিস কিউয়ের জন্য একটি চমৎকার ভিজ্যুয়াল ড্যাশবোর্ড এবং অটো-ব্যালান্সিং সুপারভাইজার প্রদান করে, যা কিউয়ের কাজের চাপ বুঝে স্বয়ংক্রিয়ভাবে ওয়ার্কারের সংখ্যা বাড়ায় বা কমায়। অপরদিকে বিশাল ট্রাফিকের এপিআই এর জন্য লারাভেল অক্টেন Swoole বা RoadRunner এর সাহায্যে ফ্রেমওয়ার্ককে সার্বক্ষণিক মেমোরিতে (RAM) প্রস্তুত রাখে, যার ফলে সাধারণ ৪০ মিলিসেকেন্ডের লেটেন্সি কমে ৫ মিলিসেকেন্ডের নিচে নেমে আসে এবং অ্যাপ্লিকেশন ১০ গুণ বেশি গতিশীল হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: High-concurrency Laravel enterprise production architecture with Octane server pools, Horizon Redis queues, and read-replica database splitting.',
        bn: 'চিত্র ১: অক্টেন সার্ভার পুল, হরাইজন রেডিস কিউ এবং ডেটাবেস রেপ্লিকা সম্বলিত উচ্চ-ক্ষমতাসম্পন্ন লারাভেল এন্টারপ্রাইজ প্রোডাকশন আর্কিটেকচার।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">LARAVEL HIGH-CONCURRENCY PRODUCTION ARCHITECTURE</text>

  <!-- Step 1: Internet Traffic -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Web Ingress</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">HTTPS / Port 443</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Global Traffic</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" />
    <text x="15" y="112" fill="#cbd5e1" font-size="8" font-family="monospace">Cloudflare CDN</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Load Balancer</text>
    <text x="15" y="148" fill="#cbd5e1" font-size="8" font-family="monospace">Nginx Reverse</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">SSL Terminated</text>
  </g>

  <!-- Step 2: Laravel Octane -->
  <g transform="translate(195, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Laravel Octane</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">Swoole Engine</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Persistent RAM</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="112" fill="#34d399" font-size="8" font-family="monospace">Sub-5ms speed</text>
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero bootstrap</text>
    <text x="15" y="148" fill="#34d399" font-size="8" font-family="monospace">10x Throughput</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">Memory-Resident</text>
  </g>

  <!-- Step 3: Redis Cluster -->
  <g transform="translate(360, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Redis Cluster</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">Cache &amp; Broker</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Sub-millisecond</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="112" fill="#fbbf24" font-size="8" font-family="monospace">Session Store</text>
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Job FIFO queues</text>
    <text x="15" y="148" fill="#cbd5e1" font-size="8" font-family="monospace">Route cache</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">High-Speed Broker</text>
  </g>

  <!-- Step 4: Laravel Horizon -->
  <g transform="translate(525, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7c3aed" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Horizon</text>
    <text x="12" y="55" fill="#c084fc" font-size="10" font-family="monospace">Queue Monitor</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Auto-Balancing</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" stroke="#8b5cf6" />
    <text x="15" y="112" fill="#c084fc" font-size="8" font-family="monospace">Auto-scaling</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Worker pools</text>
    <text x="15" y="148" fill="#34d399" font-size="8" font-family="monospace">Failed job UI</text>
    <text x="12" y="195" fill="#c084fc" font-size="9" font-family="sans-serif">Real-Time Metrics</text>
  </g>

  <!-- Step 5: Database Split -->
  <g transform="translate(690, 65)">
    <rect width="125" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="125" height="30" rx="8" fill="#db2777" />
    <text x="62" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Relational DB</text>
    <text x="10" y="55" fill="#f472b6" font-size="10" font-family="monospace">MySQL / Postgres</text>
    <text x="10" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Read / Write Split</text>
    <rect x="10" y="90" width="105" height="70" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="12" y="112" fill="#f472b6" font-size="8" font-family="monospace">Primary: Writes</text>
    <text x="12" y="130" fill="#38bdf8" font-size="8" font-family="monospace">Replica: Reads</text>
    <text x="12" y="148" fill="#34d399" font-size="8" font-family="monospace">ACID locked</text>
    <text x="10" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Scale Storage</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'deployment-optimization-heading',
      text: {
        en: 'Zero-Downtime Deployment and the Artisan Optimization Pipeline',
        bn: 'জিরো-ডাউনটাইম ডিপ্লয়মেন্ট এবং আর্টিস্যান অপ্টিমাইজেশন পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production deployments, parsing dozens of configuration files and matching regular expressions on routes degrades performance. Laravel solves this via automated optimization commands executed during automated CI/CD builds. Running config:cache combines all configuration files into 1 flat array, route:cache generates an optimized lookup map, and view:cache compiles all Blade templates ahead of time. Finally, running migrate --force applies new migrations safely, followed by queue:restart to reload updated codebase binaries.',
        bn: 'প্রোডাকশন সার্ভারে প্রতিবার অনুরোধ এলে ডজন ডজন কনফিগারেশন ফাইল পড়া এবং রাউট পার্স করা সার্ভারকে ধীর করে ফেলে। লারাভেল সিআই/সিডি বিল্ডের সময় বিশেষ ক্যাশ অপ্টিমাইজেশন কমান্ডের মাধ্যমে এর চমৎকার সমাধান দেয়। config:cache কমান্ড সমস্ত কনফিগারেশনকে মাত্র ১ টি একক ফ্ল্যাট অ্যারেতে একত্রিত করে, route:cache দ্রুতগতির রাউট ম্যাপ তৈরি করে এবং view:cache আগেই সমস্ত ব্লেড ফাইল কম্পাইল করে রাখে। সবশেষে migrate --force দিয়ে নির্ভুলভাবে ডেটাবেস স্কিমা আপডেট করে queue:restart চালিয়ে ব্যাকগ্রাউন্ড ওয়ার্কারদের নতুন কোড লোড করতে নির্দেশ দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Laravel deployment cache compilation and Horizon queue metric monitoring across 3 worker pools.',
        bn: '৩ টি ওয়ার্কার পুলের ক্ষেত্রে লারাভেল ডিপ্লয়মেন্ট ক্যাশিং এবং হরাইজন কিউ মেট্রিক মনিটরিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Production Optimization and Horizon Metrics in TypeScript
interface DeploymentCacheReport {
  configCached: boolean;
  routesCached: boolean;
  viewsCompiled: number;
  totalTimeMs: number;
}

interface HorizonWorkerPool {
  poolName: string;
  activeWorkers: number;
  jobsProcessed: number;
  waitDurationMs: number;
}

export class ProductionOptimizerSimulator {
  // Simulating: php artisan config:cache, route:cache, view:cache
  public runOptimizationPipeline(viewCount: number): DeploymentCacheReport {
    console.log('Compiling 1 flat configuration array...');
    console.log('Generating optimized route dispatcher map...');
    console.log('Pre-compiling ' + viewCount + ' Blade templates to storage/views...');

    return {
      configCached: true,
      routesCached: true,
      viewsCompiled: viewCount,
      totalTimeMs: 42
    };
  }

  // Simulating Horizon queue metric aggregator across 3 worker pools
  public getHorizonStatus(): HorizonWorkerPool[] {
    return [
      { poolName: 'supervisor-high', activeWorkers: 10, jobsProcessed: 1420, waitDurationMs: 4 },
      { poolName: 'supervisor-default', activeWorkers: 20, jobsProcessed: 8900, waitDurationMs: 12 },
      { poolName: 'supervisor-reports', activeWorkers: 5, jobsProcessed: 120, waitDurationMs: 45 }
    ];
  }
}

// Execute deployment and monitoring simulation
const optimizer = new ProductionOptimizerSimulator();

// Step 1: Run production cache compilation for 50 application views
const cacheReport = optimizer.runOptimizationPipeline(50);
console.log('Cache Pipeline Complete:', cacheReport.configCached && cacheReport.routesCached); // true

// Step 2: Query Horizon metrics across 3 worker pools
const pools = optimizer.getHorizonStatus();
console.log('Active Horizon Pools Monitored:', pools.length); // 3
console.log('Default Pool Workers:', pools[1].activeWorkers); // 20
console.log('High Priority Wait Time (ms):', pools[0].waitDurationMs); // 4`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Laravel Horizon',
          def: {
            en: 'Dashboard and code-driven configuration supervisor for Redis-powered Laravel queues with auto-balancing worker pools.',
            bn: 'লারাভেলের অফিশিয়াল ড্যাশবোর্ড ও কিউ সুপারভাইজার যা কাজের চাপ বুঝে ওয়ার্কারদের সংখ্যা বুদ্ধিমত্তার সাথে নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'Laravel Octane',
          def: {
            en: 'High-performance application server keeping Laravel resident in server RAM across requests via Swoole or RoadRunner.',
            bn: 'উচ্চ-ক্ষমতাসম্পন্ন সার্ভার যা ফ্রেমওয়ার্ককে বারবার বুট না করে সরাসরি র‍্যামে সচল রেখে আলোর গতিতে রেসপন্স প্রদান করে।'
          }
        },
        {
          term: 'Zero-Downtime Deployment',
          def: {
            en: 'Deployment technique using symlink directory swapping to activate new application releases with zero user service interruptions.',
            bn: 'ডিপ্লয়মেন্ট পদ্ধতি যা সিম্বলিক লিংক অদলবদল করে ব্যবহারকারীদের সেবা বিঘ্নিত না করেই নতুন কোড কার্যকর করে।'
          }
        },
        {
          term: 'Route Caching',
          def: {
            en: 'Artisan optimization compiling all application route registrations into a single optimized PHP array mapping.',
            bn: 'লারাভেলের পারফরম্যান্স অপ্টিমাইজেশন যা সমস্ত রাউটকে একটিমাত্র দ্রুতগতির পিএইচপি অ্যারেতে রূপান্তর করে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'route-cache-closure-prohibition-ex1',
      kind: 'mcq',
      topic: 'route-cache-controller-requirement',
      question: {
        en: 'Why did older Laravel versions require all routes to reference Controller actions rather than inline Closures when running php artisan route:cache?',
        bn: 'php artisan route:cache চালানোর সময় পুরানো লারাভেলে ইনলাইন ক্লোজারের বদলে কন্ট্রোলার মেথড ব্যবহার করা কেন বাধ্যতামূলক ছিল?'
      },
      options: [
        {
          en: 'PHP cannot serialize anonymous Closures into plain text files; compiling routes to a static array required string controller references',
          bn: 'পিএইচপি অ্যানোনিমাস ক্লোজারকে সরাসরি টেক্সট ফাইলে সিরিয়ালাইজ করতে পারে না; স্ট্যাটিক অ্যারে বানাতে কন্ট্রোলারের রেফারেন্স প্রয়োজন হতো'
        },
        {
          en: 'Closures consume 10 gigabytes of network bandwidth',
          bn: 'ক্লোজার ১০ গিগাবাইট নেটওয়ার্ক ব্যান্ডউইথ খরচ করে ফেলে'
        },
        {
          en: 'Controllers are legally required by international web standards',
          bn: 'আন্তর্জাতিক ওয়েব স্ট্যান্ডার্ড অনুযায়ী কন্ট্রোলার ব্যবহার বাধ্যতামূলক'
        },
        {
          en: 'Route caching only works on mobile phones',
          bn: 'রাউট ক্যাশিং কেবল মোবাইল ফোনেই কাজ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Serializing routes requires stringifiable representations rather than anonymous PHP function closures.',
        bn: 'রাউট ফাইলে ক্যাশ করার জন্য অ্যানোনিমাস ফাংশনের বদলে কন্ট্রোলারের স্ট্রিং নাম দরকার হতো।'
      },
      explanation: {
        en: 'Closures could not be serialized into cached PHP arrays natively; modern Laravel solves this via opcode analyzers.',
        bn: 'ক্লোজারকে পিএইচপি ফাইলে সেভ করা যেত না বলে কন্ট্রোলার ক্লাস ব্যবহার করে দ্রুতগতির ক্যাশ ফাইল বানানো হতো।'
      }
    },
    {
      id: 'laravel-octane-memory-leak-caveat-ex2',
      kind: 'mcq',
      topic: 'laravel-octane-state-leak-pitfall',
      question: {
        en: 'What unique architectural hazard must developers guard against when writing code for Laravel Octane?',
        bn: 'লারাভেল অক্টেনে কোড লেখার সময় ডেভেলপারদের কোন অনন্য স্থাপত্যিক ঝুঁকি সম্পর্কে সর্বদা সতর্ক থাকতে হয়?'
      },
      options: [
        {
          en: 'Because the application remains resident in RAM across requests, storing state in static properties or global singletons can leak sensitive user data between requests',
          bn: 'অ্যাপ্লিকেশনটি সার্বক্ষণিক মেমোরিতে (RAM) থাকায় স্ট্যাটিক প্রপার্টি বা গ্লোবাল সিঙ্গেলটনে তথ্য জমা রাখলে এক ব্যবহারকারীর ডেটা অন্য ব্যবহারকারীর কাছে ফাঁস হয়ে যেতে পারে'
        },
        {
          en: 'Octane causes the physical server to overheat and melt',
          bn: 'অক্টেন সার্ভার কম্পিউটার অতিরিক্ত গরম করে গলিয়ে ফেলে'
        },
        {
          en: 'Octane prevents the database from storing numbers',
          bn: 'অক্টেন ডেটাবেসে সংখ্যা সংরক্ষণ করতে বাধা দেয়'
        },
        {
          en: 'Octane only runs on Saturday evenings',
          bn: 'অক্টেন কেবল শনিবার সন্ধ্যায় কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In long-running processes, static variables persist across different HTTP requests.',
        bn: 'সার্বক্ষণিক সচল মেমোরি সিস্টেমে স্ট্যাটিক ভেরিয়েবল বিভিন্ন অনুরোধের মাঝেও মেমোরিতে থেকে যায়।'
      },
      explanation: {
        en: 'Because Octane does not destroy memory after each request, static properties must be reset between hits to prevent state bleeding.',
        bn: 'অক্টেন প্রতিবার মেমোরি ধ্বংস করে না, তাই স্ট্যাটিক ডেটা পরিষ্কার না করলে এক ইউজারের তথ্য অন্যের কাছে চলে যাওয়ার ঝুঁকি থাকে।'
      }
    },
    {
      id: 'horizon-auto-balancing-feature-ex3',
      kind: 'mcq',
      topic: 'horizon-auto-balancing-workload',
      question: {
        en: 'What operational duty does the "auto-balancing" feature in Laravel Horizon perform?',
        bn: 'লারাভেল হরাইজনে "অটো-ব্যালান্সিং" ফিচারটির মূল দায়িত্ব কী?'
      },
      options: [
        {
          en: 'It dynamically re-allocates worker processes to different queues based on wait duration, spinning up more workers for backlogged queues automatically',
          bn: 'এটি কিউয়ের অপেক্ষার সময় মেপে স্বয়ংক্রিয়ভাবে ওয়ার্কারদের কাজ পুনর্বণ্টন করে এবং যে কিউতে বেশি কাজ জমেছে সেখানে বেশি ওয়ার্কার নিযুক্ত করে'
        },
        {
          en: 'It divides server electricity equally between all CPU cores',
          bn: 'এটি প্রসেসরের কোরগুলোর মধ্যে সমানভাবে বিদ্যুৎ ভাগ করে দেয়'
        },
        {
          en: 'It deletes half of the jobs whenever the server gets busy',
          bn: 'সার্ভার ব্যস্ত হয়ে পড়লে এটি অর্ধেক কাজ মুছে ফেলে'
        },
        {
          en: 'It balances the weight of the server rack on the floor',
          bn: 'এটি মেঝের ওপর সার্ভার র্যাকের শারীরিক ওজন ঠিক রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Auto-balancing shifts worker processes where workload pressure is greatest.',
        bn: 'অটো-ব্যালান্সিং যেখানে কাজের চাপ বেশি সেখানে তাৎক্ষণিকভাবে বাড়তি ওয়ার্কার পাঠিয়ে চাপ কমায়।'
      },
      explanation: {
        en: 'Horizon continuously monitors queue latency, dynamically assigning idle worker processes to alleviate congested queues.',
        bn: 'হরাইজন সার্বক্ষণিক কিউয়ের গতিবিধি পর্যবেক্ষণ করে প্রয়োজন অনুসারে কাজের ভারসাম্য রক্ষা করে।'
      }
    },
    {
      id: 'config-cache-env-pitfall-ex4',
      kind: 'mcq',
      topic: 'config-cache-env-null-pitfall',
      question: {
        en: 'Why does calling env("API_KEY") directly inside application controllers return null once php artisan config:cache has been run?',
        bn: 'php artisan config:cache চালানোর পর কন্ট্রোলারের ভেতর সরাসরি env("API_KEY") কল করলে তা কেন null ফেরত দেয়?'
      },
      options: [
        {
          en: 'config:cache ignores the .env file after compiling and suppresses loading it into PHP environment; always access variables through config("services.api.key")',
          bn: 'ক্যাশিংয়ের পর লারাভেল আর .env ফাইল লোড করে না; তাই সর্বদা config("services.api.key") এর মাধ্যমে কনফিগারেশন থেকে মান পড়তে হয়'
        },
        {
          en: 'The operating system deletes all environment variables on Fridays',
          bn: 'অপারেটিং সিস্টেম শুক্রবার সব এনভায়রনমেন্ট ভেরিয়েবল মুছে ফেলে'
        },
        {
          en: 'config:cache encrypts the API key with a secret password',
          bn: 'config:cache গোপন পাসওয়ার্ড দিয়ে এপিআই কি এনক্রিপ্ট করে'
        },
        {
          en: 'Calling env() is forbidden by international copyright laws',
          bn: 'env() ব্যবহার আন্তর্জাতিক কপিরাইট আইনে নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Once config is cached, the .env file is no longer read; only config() lookups function correctly.',
        bn: 'কনফিগারেশন ক্যাশ হয়ে গেলে .env ফাইল আর পড়া হয় না; সর্বদা config() ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'To maximize speed, config:cache halts .env parsing at runtime; always access environment variables via config() repository files.',
        bn: 'দ্রুতগতির জন্য লারাভেল .env পড়া বন্ধ রাখে, তাই সর্বদা config ফোল্ডারের ফাইলের মাধ্যমে তথ্য অ্যাক্সেস করা উচিত।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-horizon-serve',
    title: {
      en: 'Laravel Production Optimization & Horizon Quiz',
      bn: 'লারাভেল প্রোডাকশন অপ্টিমাইজেশন এবং হরাইজন কুইজ'
    },
    questions: [
      {
        id: 'quiz-horizon-auth-gate-security',
        kind: 'mcq',
        topic: 'horizon-auth-gate-protection',
        question: {
          en: 'How do developers restrict access to the /horizon dashboard so public visitors cannot view internal queue metrics in production?',
          bn: 'প্রোডাকশনে সাধারণ ভিজিটররা যেন /horizon ড্যাশবোর্ড দেখতে না পারে, সেজন্য ডেভেলপাররা কীভাবে প্রবেশাধিকার সুরক্ষিত করেন?'
        },
        options: [
          {
            en: 'Define the "viewHorizon" Gate in App\\Providers\\HorizonServiceProvider checking if the authenticated user has administrative credentials',
            bn: 'App\\Providers\\HorizonServiceProvider এ "viewHorizon" গেট সংজ্ঞায়িত করে কেবল অ্যাডমিন ব্যবহারকারীদের প্রবেশাধিকার নিশ্চিত করে'
          },
          {
            en: 'Delete the horizon package before running git push',
            bn: 'গিট পুশ করার আগেই হরাইজন প্যাকেজটি মুছে ফেলে'
          },
          {
            en: 'Change the server IP address every 10 minutes',
            bn: 'প্রতি ১০ মিনিট পর পর সার্ভারের আইপি অ্যাড্রেস পরিবর্তন করে'
          },
          {
            en: 'Horizon cannot be secured and must only run on test machines',
            bn: 'হরাইজন সুরক্ষিত করা যায় না এবং এটি কেবল টেস্ট মেশিনে চলতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The viewHorizon Gate controls dashboard viewing access in non-local environments.',
          bn: 'viewHorizon গেট প্রোডাকশনে ড্যাশবোর্ড দেখার অনুমতি যাচাই করে।'
        },
        explanation: {
          en: 'Horizon checks the viewHorizon authorization Gate before rendering the telemetry dashboard, keeping internal queue states private.',
          bn: 'viewHorizon গেট নিশ্চিত করে যে কেবলমাত্র অনুমোদিত অ্যাডমিনেরাই কিউ ড্যাশবোর্ড দেখার সুযোগ পাবে।'
        }
      },
      {
        id: 'quiz-migrate-force-production-flag',
        kind: 'mcq',
        topic: 'migrate-force-ci-cd-pipelines',
        question: {
          en: 'Why is passing the --force flag mandatory when executing php artisan migrate during automated production deployments?',
          bn: 'স্বয়ংক্রিয় প্রোডাকশন ডিপ্লয়মেন্টের সময় php artisan migrate কমান্ডে --force ফ্ল্যাগ দেওয়া কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'In production environments, Laravel pauses and asks for interactive confirmation ("Are you sure you want to run this command?"); --force suppresses the prompt so headless automated scripts succeed',
            bn: 'প্রোডাকশনে লারাভেল নিশ্চিতকরণ বার্তা ("Are you sure...") দেখিয়ে আটকে থাকে; --force দিলে কোনো প্রম্পট ছাড়াই স্বয়ংক্রিয় স্ক্রিপ্ট সফলভাবে শেষ হয়'
          },
          {
            en: 'It forces MySQL to double its hard drive storage size',
            bn: 'এটি MySQL এর হার্ড ড্রাইভের আকার দ্বিগুণ করতে বাধ্য করে'
          },
          {
            en: 'It overrides the server operating system kernel',
            bn: 'এটি সার্ভারের অপারেটিং সিস্টেমের কার্নেল প্রতিস্থাপন করে'
          },
          {
            en: 'The --force flag disables all database foreign keys forever',
            bn: '--force ফ্ল্যাগ সমস্ত ফরেন কি চিরতরে নিষ্ক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Production safeguards prevent accidental schema changes unless forced non-interactively.',
          bn: 'প্রোডাকশনের নিরাপত্তা নিশ্চিত করতে লারাভেল প্রশ্ন করে; স্বয়ংক্রিয় পাইপলাইনে এই প্রশ্ন এড়াতে --force আবশ্যক।'
        },
        explanation: {
          en: 'Without --force, artisan migrate hangs awaiting terminal keyboard input, which causes automated CI/CD pipelines to timeout and fail.',
          bn: '--force না দিলে কীবোর্ড ইনপুটের অপেক্ষায় স্ক্রিপ্ট আটকে থেকে সিআই/সিডি বিল্ড ফেইল করত।'
        }
      },
      {
        id: 'quiz-read-write-database-connection-split',
        kind: 'mcq',
        topic: 'database-read-write-splitting-laravel',
        question: {
          en: 'How does Laravel configuration natively handle Read / Write database splitting across primary and read-replica database servers?',
          bn: 'মূল সার্ভার এবং রিড-রেপ্লিকা ডেটাবেসের মধ্যে লারাভেল কীভাবে স্বয়ংক্রিয়ভাবে রিড ও রাইট কুয়েরি ভাগ করে পরিচালনা করে?'
        },
        options: [
          {
            en: 'In config/database.php, specify separate "read" and "write" IP host arrays under the mysql connection; Laravel routes SELECT queries to replicas and INSERT/UPDATE/DELETE to primary automatically',
            bn: 'config/database.php ফাইলে আলাদা "read" এবং "write" হোস্ট কনফিগার করলেই লারাভেল স্বয়ংক্রিয়ভাবে SELECT কুয়েরি রেপলিকায় এবং অন্যান্য পরিবর্তন মূল প্রাইমারি সার্ভারে পাঠায়'
          },
          {
            en: 'Developers must write two identical copies of every single SQL query',
            bn: 'ডেভেলপারদের প্রতি কোয়েরির দুটি অবিকল অনুলিপি লিখতে হয়'
          },
          {
            en: 'Install two different network cards in the computer',
            bn: 'কম্পিউটারে দুটি আলাদা নেটওয়ার্ক কার্ড ইনস্টল করে'
          },
          {
            en: 'Read/write splitting is not supported in PHP',
            bn: 'পিএইচপিতে রিড/রাইট আলাদা করা সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Laravel connection config natively supports read and write host arrays for transparent query routing.',
          bn: 'লারাভেলের ডেটাবেস কনফিগারেশনে সরাসরি read এবং write অ্যারে সমর্থন করে।'
        },
        explanation: {
          en: 'Declaring read and write host pools lets Eloquent direct SELECT queries to read replicas while routing mutations to the primary database.',
          bn: 'কনফিগারেশনে রিড ও রাইট আলাদা করে দিলে কোডে কোনো পরিবর্তন ছাড়াই লারাভেল বুদ্ধিমত্তার সাথে কোয়েরি ভাগ করে নেয়।'
        }
      },
      {
        id: 'quiz-opcache-and-artisan-cache-synergy',
        kind: 'mcq',
        topic: 'opcache-and-artisan-cache-synergy',
        question: {
          en: 'How do Artisan cache commands (config:cache, route:cache) synergize with PHP OPcache on production web servers?',
          bn: 'প্রোডাকশন সার্ভারে আর্টিস্যান ক্যাশ কমান্ডসমূহ (config:cache, route:cache) পিএইচপি OPcache এর সাথে মিলে কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'Artisan compiles all dynamic definitions into static PHP files, and OPcache stores those compiled files as bytecode in shared RAM, eliminating disk reads and runtime parsing completely',
            bn: 'আর্টিস্যান সমস্ত নিয়মকে স্ট্যাটিক পিএইচপি ফাইলে জমা করে, আর OPcache সেই ফাইলগুলোকে বাইটকোড হিসেবে শেয়ার্ড র‍্যামে রাখে, ফলে ডিস্ক রিড ও পার্সিং সম্পূর্ণ দূর হয়'
          },
          {
            en: 'They cancel each other out and slow the server down by 90 percent',
            bn: 'তারা একে অপরকে বাতিল করে সার্ভারের গতি ৯০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'They delete all CSS and JavaScript files from public storage',
            bn: 'তারা সমস্ত সিএসএস ও জাভাস্ক্রিপ্ট ফাইল মুছে ফেলে'
          },
          {
            en: 'They only work if the server has 4 computer screens attached',
            bn: 'সার্ভারে ৪ টি মনিটর লাগানো থাকলেই কেবল তারা কাজ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Artisan creates static PHP files, and OPcache executes them directly from shared memory.',
          bn: 'আর্টিস্যান ফাইল প্রস্তুত করে আর OPcache সরাসরি মেমোরি থেকে তা চালায়।'
        },
        explanation: {
          en: 'Combining Artisan caching with OPcache shared memory compilation provides maximum execution velocity for high-traffic Laravel platforms.',
          bn: 'আর্টিস্যান ও OPcache এর সমন্বয় উচ্চ-ট্রাফিকের লারাভেল সাইটে অবিশ্বাস্য গতি ও নির্ভরযোগ্যতা নিশ্চিত করে।'
        }
      }
    ]
  }
};
