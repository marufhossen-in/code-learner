import type { Lesson } from '../../../lib/types';

export const TheGemServeLesson: Lesson = {
  slug: 'the-gem-serve',
  tech: 'ruby',
  title: {
    en: 'Production Ruby: Puma, YJIT, RSpec Testing & Kamal Deployments',
    bn: 'প্রোডাকশন Ruby: Puma, YJIT, RSpec টেস্টিং এবং Kamal ডিপ্লয়মেন্ট'
  },
  summary: {
    en: 'Master high-throughput production operations for modern Ruby applications. Understand multi-threaded clustered concurrency in the Puma application server, unlock 15% to 30% performance gains via Ruby\'s native YJIT (Yet Another Ruby JIT) compiler, build bulletproof automated test suites with RSpec, and deploy zero-downtime Docker containers using Kamal.',
    bn: 'আধুনিক Ruby অ্যাপ্লিকেশনের হাই-থ্রুপুট প্রোডাকশন ইঞ্জিনিয়ারিং সম্পূর্ণ আয়ত্ত করুন। Puma অ্যাপ্লিকেশন সার্ভারের মাল্টি-থ্রেডেড ক্লাস্টার্ড কনকারেন্সি, Ruby-র নিজস্ব YJIT (Yet Another Ruby JIT) কম্পাইলার দিয়ে ১৫% থেকে ৩০% পারফরম্যান্স বৃদ্ধি, RSpec দিয়ে নির্ভরযোগ্য টেস্ট অটোমেশন এবং Kamal দিয়ে জিরো-ডাউনটাইম ডকার কন্টেইনার ডিপ্লয়মেন্ট শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'puma-clustered-and-yjit-heading',
      text: {
        en: 'The Production Execution Engine: Puma Clustered Mode and YJIT',
        bn: 'প্রোডাকশন এক্সিকিউশন ইঞ্জিন: Puma ক্লাস্টার্ড মোড এবং YJIT'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Operating enterprise Ruby services at scale demands resilient concurrency and low latency. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), web applications run on high-performance servers like Puma. Because CRuby features a Global VM Lock that restricts parallel CPU execution to one thread per process, Puma utilizes clustered mode. Clustered Puma forks multiple worker processes to saturate all CPU cores, running a thread pool inside each worker to handle concurrent network I/O. Furthermore, modern Ruby 3 introduces YJIT, a native Just-in-Time compiler that converts hot bytecode into machine instructions, accelerating throughput by 15% to 30%.',
        bn: 'বৃহৎ প্রতিষ্ঠানে Ruby সার্ভিস পরিচালনার জন্য দরকার নির্ভরযোগ্য কনকারেন্সি এবং তাৎক্ষণিক রেসপন্স টাইম। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে ওয়েব অ্যাপ্লিকেশন পরিচালনার জন্য Puma-র মতো আধুনিক সার্ভার ব্যবহৃত হয়। যেহেতু CRuby-তে একটি গ্লোবাল ভার্চুয়াল মেশিন লক থাকে যা প্রতিটি প্রসেসে এক সাথে কেবল একটি থ্রেডকেই CPU কোড চালাতে দেয়, তাই Puma ক্লাস্টার্ড মোড ব্যবহার করে। ক্লাস্টার্ড Puma সমস্ত CPU কোর ব্যবহার করতে একাধিক ওয়ার্কার প্রসেস তৈরি করে এবং প্রতিটি ওয়ার্কারের ভেতর থ্রেড পুল দিয়ে একসাথে অনেকগুলো নেটওয়ার্ক রিকোয়েস্ট সামলায়। তাছাড়া আধুনিক Ruby ৩ সংস্করণে যুক্ত হয়েছে YJIT কম্পাইলার, যা বারবার চলা কোডকে সরাসরি মেশিন কোডে রূপান্তর করে গতি ১৫% থেকে ৩০% পর্যন্ত বাড়িয়ে দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Production Ruby deployment architecture: Kamal-orchestrated Traefik proxy routing traffic to Puma clustered workers powered by YJIT.',
        bn: 'চিত্র ১: প্রোডাকশন Ruby ডিপ্লয়মেন্ট আর্কিটেকচার: Kamal পরিচালিত Traefik প্রক্সি ট্রাফিককে YJIT যুক্ত Puma ক্লাস্টার্ড ওয়ার্কারে পাঠাচ্ছে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PRODUCTION RUBY CONCURRENCY &amp; DEPLOYMENT ARCHITECTURE</text>

  <!-- Left: Traefik & Kamal -->
  <g transform="translate(30, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Kamal &amp; Traefik Proxy</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">kamal deploy</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">Zero-downtime rolling deploy</text>

    <rect x="15" y="105" width="200" height="70" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Traefik Reverse Proxy</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif">Automated SSL / TLS certs</text>
    <text x="25" y="160" fill="#cbd5e1" font-size="9" font-family="sans-serif">Health check path validation</text>

    <rect x="15" y="185" width="200" height="35" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="205" fill="#38bdf8" font-size="9" font-family="sans-serif">Routes to active containers</text>
  </g>

  <!-- Middle: Puma Clustered Workers -->
  <g transform="translate(290, 65)">
    <rect width="260" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="260" height="30" rx="8" fill="#d97706" />
    <text x="130" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Puma Clustered Model</text>

    <!-- Worker 1 -->
    <rect x="15" y="45" width="230" height="65" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">Worker 1 (PID 1001)</text>
    <text x="25" y="82" fill="#cbd5e1" font-size="9" font-family="sans-serif">5 Concurrent Threads (pool: 5)</text>
    <text x="25" y="98" fill="#34d399" font-size="8" font-family="sans-serif">Handles asynchronous I/O bursts</text>

    <!-- Worker 2 -->
    <rect x="15" y="120" width="230" height="65" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="140" fill="#fbbf24" font-size="10" font-family="monospace">Worker 2 (PID 1002)</text>
    <text x="25" y="157" fill="#cbd5e1" font-size="9" font-family="sans-serif">5 Concurrent Threads (pool: 5)</text>
    <text x="25" y="173" fill="#34d399" font-size="8" font-family="sans-serif">Independent memory space</text>

    <rect x="15" y="195" width="230" height="30" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="215" fill="#fbbf24" font-size="9" font-family="sans-serif">Total Concurrency: 10 active sockets</text>
  </g>

  <!-- Right: YJIT & RSpec Gating -->
  <g transform="translate(580, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#7c3aed" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. YJIT &amp; Quality Gates</text>

    <!-- YJIT Box -->
    <rect x="15" y="45" width="200" height="75" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">YJIT Engine (--yjit)</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Basic Block Versioning</text>
    <text x="25" y="100" fill="#34d399" font-size="9" font-family="sans-serif">• 15% to 30% faster throughput</text>
    <text x="25" y="113" fill="#cbd5e1" font-size="8" font-family="sans-serif">• Native x86-64 / ARM64 code</text>

    <!-- RSpec Suite -->
    <rect x="15" y="130" width="200" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="150" fill="#34d399" font-size="10" font-family="monospace">bundle exec rspec</text>
    <text x="25" y="168" fill="#cbd5e1" font-size="9" font-family="sans-serif">Unit, Model &amp; Request Specs</text>
    <text x="25" y="183" fill="#38bdf8" font-size="8" font-family="sans-serif">100% Pass Required for CI deploy</text>

    <rect x="15" y="200" width="200" height="25" rx="5" fill="#7c3aed" fill-opacity="0.15" stroke="#a855f7" />
    <text x="25" y="217" fill="#c084fc" font-size="8" font-family="sans-serif">Hermetic deployment verification</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'rspec-testing-and-kamal-deployments-heading',
      text: {
        en: 'RSpec Test Automation and Kamal Container Deployment',
        bn: 'RSpec টেস্ট অটোমেশন এবং Kamal কন্টেইনার ডিপ্লয়মেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production confidence relies on comprehensive test suites and deterministic deployments. The Ruby standard for automated testing is RSpec, a behavior-driven framework organizing tests into readable "describe" and "context" blocks with expressive expectations ("expect(order.total).to eq(100)"). To ship applications safely to bare-metal servers or cloud virtual machines without complex Kubernetes overhead, modern teams use Kamal. Kamal packages the application into Docker containers, configures Traefik reverse proxies dynamically over SSH, executes zero-downtime rolling container swaps, and provides instant one-command rollbacks if errors occur.',
        bn: 'প্রোডাকশনের নির্ভরযোগ্যতা নির্ভর করে শক্তিশালী টেস্ট স্যুট এবং সুনির্দিষ্ট ডিপ্লয়মেন্ট প্রক্রিয়ার ওপর। স্বয়ংক্রিয় টেস্টিংয়ের জন্য Ruby-র সবচেয়ে জনপ্রিয় ফ্রেমওয়ার্ক হলো RSpec। এটি বিহেভিয়ার-ড্রিভেন পদ্ধতিতে অত্যন্ত চমৎকারভাবে "describe" এবং "context" ব্লকে টেস্ট সাজায় এবং পরিষ্কার প্রত্যাশা প্রকাশ করে ("expect(order.total).to eq(100)")। কুবারনেটিসের মতো অতিরিক্ত জটিল সিস্টেম বাদ দিয়ে সরাসরি সার্ভারে নিরাপদ ডিপ্লয়মেন্টের জন্য আধুনিক টিমগুলো Kamal ব্যবহার করে। Kamal অ্যাপ্লিকেশনটিকে ডকার কন্টেইনারে প্যাক করে, SSH দিয়ে স্বয়ংক্রিয়ভাবে Traefik প্রক্সি সেটআপ করে, জিরো-ডাউনটাইমে পুরোনো কন্টেইনার সরিয়ে নতুন কন্টেইনার চালু করে এবং সমস্যা হলে এক কমান্ডে আগের ভার্সনে রোলব্যাক করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Puma clustered worker capacity, YJIT throughput acceleration ratio, and RSpec automated test evaluation.',
        bn: 'Puma ক্লাস্টার্ড ওয়ার্কার ধারণক্ষমতা, YJIT পারফরম্যান্স অনুপাত এবং RSpec টেস্ট মূল্যায়নের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Production Ruby: Puma Clustered Concurrency, YJIT, and RSpec

export interface PumaConfig {
  workers: number;        // Number of forked OS processes (bypassing GVL across workers)
  threadsPerWorker: number; // Thread pool per worker handling concurrent I/O
}

export class ProductionRubyEngine {
  // Calculates Puma server socket concurrency capacity
  public static calculatePumaCapacity(cfg: PumaConfig): { totalConcurrency: number; gvlIsolatedProcesses: number } {
    return {
      totalConcurrency: cfg.workers * cfg.threadsPerWorker,
      gvlIsolatedProcesses: cfg.workers
    };
  }

  // Simulates YJIT basic block compiler speedup on production Rails workloads
  public static benchmarkYJIT(requestsPerSecondStandard: number, yjitEnabled: boolean): { rps: number; speedupMultiplier: number } {
    if (yjitEnabled) {
      // YJIT delivers ~25% throughput boost on standard Rails web endpoints
      const boostedRps = Math.round(requestsPerSecondStandard * 1.25);
      return { rps: boostedRps, speedupMultiplier: 1.25 };
    }
    return { rps: requestsPerSecondStandard, speedupMultiplier: 1.0 };
  }

  // Simulates RSpec assertion pipeline: expect(actual).to eq(expected)
  public static runRSpecAssertion(testName: string, actual: any, expected: any): { specName: string; passed: boolean; message: string } {
    const passed = actual === expected;
    return {
      specName: testName,
      passed,
      message: passed ? 'PASSED: ' + testName : 'FAILED: expected ' + expected + ' but received ' + actual
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Puma Clustered Server Configuration ---');
const pumaConfig: PumaConfig = { workers: 2, threadsPerWorker: 5 };
const capacity = ProductionRubyEngine.calculatePumaCapacity(pumaConfig);
console.log('Puma Worker Processes:', pumaConfig.workers); // 2
console.log('Threads Per Worker:', pumaConfig.threadsPerWorker); // 5
console.log('Total Max Concurrent Requests Handled:', capacity.totalConcurrency); // 10

console.log('\n--- 2. Testing Ruby 3 YJIT Compiler Acceleration ---');
const standardRPS = 1000;
const yjitResult = ProductionRubyEngine.benchmarkYJIT(standardRPS, true);
console.log('Baseline CRuby Requests/Sec:', standardRPS); // 1000
console.log('YJIT Accelerated Requests/Sec:', yjitResult.rps); // 1250 (+25% throughput)
console.log('Speedup Multiplier:', yjitResult.speedupMultiplier + 'x');

console.log('\n--- 3. Testing RSpec Automated Test Suite ---');
const specCheck = ProductionRubyEngine.runRSpecAssertion('Order total calculation with tax', 150, 150);
console.log('RSpec Execution Status:', specCheck.message); // PASSED: Order total calculation with tax`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Puma Clustered Mode',
          def: {
            en: 'Deployment architecture forking multiple processes with thread pools to maximize CPU core utilization.',
            bn: 'ডিপ্লয়মেন্ট আর্কিটেকচার যা প্রসেস ও থ্রেড পুল দিয়ে মাল্টি-কোর প্রসেসরের সর্বোচ্চ ব্যবহার নিশ্চিত করে।'
          }
        },
        {
          term: 'YJIT Compiler',
          def: {
            en: 'Native CRuby Just-in-Time compiler converting bytecode to machine code via Basic Block Versioning.',
            bn: 'CRuby-র নিজস্ব JIT কম্পাইলার যা বাইটকোডকে মেশিন কোডে রূপান্তর করে গতি নাটকীয়ভাবে বাড়িয়ে দেয়।'
          }
        },
        {
          term: 'RSpec Test Automation',
          def: {
            en: 'Behavior-Driven Development test framework providing structured describe blocks and expressive assertions.',
            bn: 'টেস্টিং ফ্রেমওয়ার্ক যা বর্ণনামূলক সিনট্যাক্স এবং প্রত্যাশার মাধ্যমে কোডের নির্ভুলতা প্রমাণ করে।'
          }
        },
        {
          term: 'Kamal Containerization',
          def: {
            en: 'Modern tool orchestrating zero-downtime rolling container deployments across servers via SSH and Traefik.',
            bn: 'আধুনিক টুল যা কোনো ডাউনটাইম ছাড়াই SSH ও ডকার দিয়ে স্বয়ংক্রিয়ভাবে সার্ভারে নতুন ভার্সন ডিপ্লয় করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'puma-clustered-mode-gvl-ex1',
      kind: 'mcq',
      topic: 'puma-clustered-mode-process-concurrency',
      question: {
        en: 'Why is running Puma in clustered mode (forking multiple worker processes) essential for multi-core servers running CRuby?',
        bn: 'মাল্টি-কোর সার্ভারে CRuby অ্যাপ চালানোর সময় Puma ক্লাস্টার্ড মোডে (একাধিক ওয়ার্কার প্রসেস) চালানো কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'Because CRuby\'s Global VM Lock (GVL) allows only one thread to execute Ruby instructions at a time per process; forking multiple worker processes allows true parallel execution across all CPU cores',
          bn: 'কারণ CRuby-র গ্লোবাল ভার্চুয়াল মেশিন লক (GVL) প্রতিটি প্রসেসে এক সাথে কেবল একটি থ্রেডকেই কোড চালাতে দেয়; একাধিক প্রসেস তৈরি করলে সমস্ত CPU কোরে সত্যিকারের সমান্তরাল কাজ সম্ভব হয়'
        },
        {
          en: 'It reduces internet bandwidth costs to zero',
          bn: 'এটি ইন্টারনেট ব্যান্ডউইথ খরচ শূন্যে নামিয়ে আনে'
        },
        {
          en: 'It forces client smartphones to execute the database queries',
          bn: 'এটি ক্লায়েন্টের স্মার্টফোনকে ডেটাবেস কুয়েরি চালাতে বাধ্য করে'
        },
        {
          en: 'Puma does not support workers in modern versions',
          bn: 'আধুনিক সংস্করণে Puma কোনো ওয়ার্কার সাপোর্ট করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each forked worker process has its own GVL and runs on an independent CPU core.',
        bn: 'প্রতিটি ওয়ার্কার সম্পূর্ণ আলাদা প্রসেস হিসেবে নিজের মতো আলাদা কোরে পূর্ণ শক্তিতে চলে।'
      },
      explanation: {
        en: 'The GVL prevents two threads in the same process from executing Ruby bytecode simultaneously. Forking worker processes provides genuine multi-core parallel computing.',
        bn: 'ফলে মাল্টিপল ওয়ার্কার ব্যবহার করে সার্ভারের সমস্ত প্রসেসর কোরের পূর্ণ শক্তি কাজে লাগানো যায়।'
      }
    },
    {
      id: 'yjit-basic-block-versioning-ex2',
      kind: 'mcq',
      topic: 'ruby-yjit-basic-block-versioning-performance',
      question: {
        en: 'How does Ruby\'s native YJIT compiler ("--yjit") achieve 15% to 30% higher throughput on real-world Rails applications?',
        bn: 'Ruby-র নিজস্ব YJIT কম্পাইলার ("--yjit") কীভাবে বাস্তব Rails অ্যাপ্লিকেশনে ১৫% থেকে ৩০% বেশি থ্রুপুট অর্জন করে?'
      },
      options: [
        {
          en: 'It compiles hot bytecode basic blocks into optimized native machine code based on observed runtime types, eliminating virtual machine interpretation latency with near-zero warmup time',
          bn: 'এটি রানটাইম টাইপের ওপর ভিত্তি করে বারবার চলা কোডকে সরাসরি নেটিভ মেশিন কোডে রূপান্তর করে, যা কোনো বিলম্ব ছাড়াই ভার্চুয়াল মেশিনের বাড়তি খরচ দূর করে'
        },
        {
          en: 'It disables all security checks and SSL certificates',
          bn: 'এটি সমস্ত নিরাপত্তা পরীক্ষা এবং SSL সার্টিফিকেট বন্ধ করে দেয়'
        },
        {
          en: 'It compresses the database into a ZIP file',
          bn: 'এটি ডেটাবেসকে একটি জিপ ফাইলে সংকুচিত করে'
        },
        {
          en: 'YJIT was deprecated in Ruby 3.2',
          bn: 'Ruby ৩.২ সংস্করণে YJIT বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'YJIT dynamically translates hot Ruby bytecode to native CPU instructions.',
        bn: 'রানটাইমে প্রায় তাৎক্ষণিকভাবে প্রসেসরের নিজস্ব মেশিন কোড বানিয়ে গতি নাটকীয়ভাবে বাড়ায়।'
      },
      explanation: {
        en: 'Developed at Shopify, YJIT uses Basic Block Versioning to specialize machine code on observed types, delivering huge throughput boosts without the long warmup times of older JITs.',
        bn: 'এর মাধ্যমে অ্যাপ চালু হওয়ার সাথে সাথেই বিদ্যুৎ গতিতে রিকোয়েস্ট হ্যান্ডেল করা সম্ভব হয়।'
      }
    },
    {
      id: 'rspec-describe-context-structure-ex3',
      kind: 'mcq',
      topic: 'rspec-behavior-driven-test-structure',
      question: {
        en: 'In RSpec test suites, what is the architectural convention for using "describe" versus "context" blocks?',
        bn: 'RSpec টেস্ট স্যুটে "describe" এবং "context" ব্লক ব্যবহারের ক্ষেত্রে প্রচলিত আর্কিটেকচারাল নিয়ম কী?'
      },
      options: [
        {
          en: '"describe" outlines the class or method being tested (e.g. describe "#calculate_tax"); "context" defines specific conditional circumstances or states (e.g. context "when user is tax exempt")',
          bn: '"describe" যে ক্লাস বা মেথড টেস্ট করা হচ্ছে তা উল্লেখ করে (যেমন describe "#calculate_tax"); আর "context" নির্দিষ্ট কোনো শর্ত বা পরিস্থিতি তুলে ধরে (যেমন context "when user is tax exempt")'
        },
        {
          en: 'describe runs tests on weekdays; context runs tests on weekends',
          bn: 'describe সপ্তাহের কাজের দিনে টেস্ট চালায়; আর context ছুটির দিনে চালায়'
        },
        {
          en: 'describe is deprecated in RSpec 3',
          bn: 'RSpec ৩ সংস্করণে describe বাদ দেওয়া হয়েছিল'
        },
        {
          en: 'There is zero difference; they are identical aliases in Ruby',
          bn: 'তাদের মাঝে কোনো পার্থক্য নেই; তারা Ruby-র সাধারণ এলিয়াস'
        }
      ],
      answer: 0,
      hint: {
        en: 'Describe targets what is being tested; context establishes specific states or conditions.',
        bn: 'কী টেস্ট করছি তা বোঝাতে describe এবং কোন পরিস্থিতিতে টেস্ট করছি তা বোঝাতে context।'
      },
      explanation: {
        en: 'RSpec conventions mandate describe for subjects (classes/methods) and context for conditions (states/inputs), making test reports read like natural English specifications.',
        bn: 'এর ফলে টেস্ট রিপোর্ট পড়লে মনে হয় যেন চমৎকার কোনো কারিগরি স্পেসিফিকেশন পড়া হচ্ছে।'
      }
    },
    {
      id: 'kamal-zero-downtime-deployment-ex4',
      kind: 'mcq',
      topic: 'kamal-zero-downtime-docker-deployment',
      question: {
        en: 'How does Kamal achieve zero-downtime deployments when rolling out a new version of a Rails application?',
        bn: 'একটি Rails অ্যাপ্লিকেশনের নতুন ভার্সন ডিপ্লয় করার সময় Kamal কীভাবে জিরো-ডাউনটাইম নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It launches the new Docker container alongside the old one, waits for health checks to pass, reconfigures Traefik to route traffic to the new container, and only then stops the old container',
          bn: 'এটি পুরোনো কন্টেইনার চালু রেখেই নতুন ডকার কন্টেইনার চালু করে, হেলথ চেক সফল হওয়া পর্যন্ত অপেক্ষা করে, Traefik দিয়ে ট্রাফিক নতুনটিতে পাঠায় এবং তারপর পুরোনোটি বন্ধ করে'
        },
        {
          en: 'It completely shuts down the server for 30 minutes during updates',
          bn: 'আপডেটের সময় এটি ৩০ মিনিটের জন্য সার্ভার সম্পূর্ণ বন্ধ করে রাখে'
        },
        {
          en: 'It deletes all user passwords before starting the deployment',
          bn: 'ডিপ্লয়মেন্ট শুরু করার আগে এটি ব্যবহারকারীর সমস্ত পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'Zero-downtime deployments are impossible with Docker containers',
          bn: 'ডকার কন্টেইনার দিয়ে জিরো-ডাউনটাইম ডিপ্লয়মেন্ট কখনোই সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Kamal performs a rolling switchover via Traefik only after health checks succeed.',
        bn: 'পুরোনোটি বন্ধ করার আগেই নতুনটিকে সম্পূর্ণ সচল করে ট্রাফিক সরিয়ে নেওয়ার নিরাপদ পদ্ধতি।'
      },
      explanation: {
        en: 'Kamal orchestrates seamless rolling upgrades: booting new containers, verifying health endpoints, and swapping Traefik reverse proxy pointers with zero dropped user requests.',
        bn: 'ফলে সাধারণ ব্যবহারকারী কোনো ত্রুটি বা ডাউনটাইম টের না পেয়েই নতুন আপডেট পেয়ে যান।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-gem-serve',
    title: {
      en: 'Production Ruby, Puma & Kamal Quiz',
      bn: 'প্রোডাকশন Ruby, Puma এবং Kamal কুইজ'
    },
    questions: [
      {
        id: 'quiz-rspec-mocks-and-stubs',
        kind: 'mcq',
        topic: 'rspec-test-doubles-mocks-and-stubs',
        question: {
          en: 'What is the architectural distinction between a "stub" and a "mock" expectation in RSpec testing?',
          bn: 'RSpec টেস্টিংয়ে একটি "stub" এবং একটি "mock" এক্সপেকটেশনের মাঝে স্থাপত্যিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'A stub provides canned return values for methods (allow(api).to receive(:call).and_return(200)); a mock expects and verifies that the method is actually called during test execution (expect(api).to receive(:call).once)',
            bn: 'একটি stub মেথডের জন্য কৃত্রিম রেসপন্স মান ফেরত দেয়; আর একটি mock টেস্ট চলার সময় মেথডটি আসলেই কল হয়েছে কি না তা পরীক্ষা ও নিশ্চিত করে'
          },
          {
            en: 'Mocks only work with string values while stubs only work with numbers',
            bn: 'Mocks কেবল স্ট্রিং মান নিয়ে কাজ করে আর stubs কেবল সংখ্যা নিয়ে কাজ করে'
          },
          {
            en: 'Stubs are saved to the database permanently while mocks are discarded',
            bn: 'Stubs স্থায়ীভাবে ডেটাবেসে সংরক্ষিত হয় আর mocks মুছে ফেলা হয়'
          },
          {
            en: 'RSpec removed support for mocks in version 3',
            bn: 'RSpec সংস্করণ ৩-এ মক সাপোর্ট বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stubs supply fake data; mocks verify method call interactions.',
          bn: 'স্টাব শুধু নকল ডেটা জোগায়, কিন্তু মক পাহারা দিয়ে দেখে মেথডটি আসলেই চলেছে কি না।'
        },
        explanation: {
          en: 'Stubs isolate dependencies by providing fake responses. Mocks enforce collaboration contracts by asserting that specific messages were sent to objects.',
          bn: 'এর মাধ্যমে বাইরের সার্ভিস ছাড়াই কোডের ভেতরের মেথড কলিং চুক্তিগুলো নিখুঁতভাবে টেস্ট করা যায়।'
        }
      },
      {
        id: 'quiz-puma-worker-timeout-oom-killer',
        kind: 'mcq',
        topic: 'puma-worker-timeout-and-restart',
        question: {
          en: 'How does Puma\'s master process protect production applications if an individual worker thread becomes deadlocked or unresponsive?',
          bn: 'যদি কোনো ওয়ার্কার থ্রেড ডেডলক বা প্রতিক্রিয়াহীন হয়ে পড়ে, তবে Puma-র মাস্টার প্রসেস কীভাবে প্রোডাকশন অ্যাপকে সুরক্ষা দেয়?'
        },
        options: [
          {
            en: 'The Puma master monitors worker heartbeat pings; if a worker exceeds worker_timeout (default 60 seconds), the master kills it with SIGKILL and automatically boots a fresh replacement',
            bn: 'Puma মাস্টার ওয়ার্কারের হার্টবিট পর্যবেক্ষণ করে; যদি কোনো ওয়ার্কার নির্দিষ্ট সময় (ডিফল্ট ৬০ সেকেন্ড) পেরিয়ে যায়, তবে মাস্টার তাকে বন্ধ করে স্বয়ংক্রিয়ভাবে নতুন ওয়ার্কার চালু করে'
          },
          {
            en: 'It sends a physical SMS text to the datacenter technicians',
            bn: 'এটি ডেটা সেন্টারের টেকনিশিয়ানদের কাছে একটি এসএমএস পাঠায়'
          },
          {
            en: 'It shuts down the entire operating system immediately',
            bn: 'এটি তাৎক্ষণিকভাবে পুরো অপারেটিং সিস্টেম বন্ধ করে দেয়'
          },
          {
            en: 'Worker timeouts were banned in Puma 5',
            bn: 'Puma ৫ সংস্করণে ওয়ার্কার টাইমআউট নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Puma master monitors heartbeats and restarts hung workers automatically.',
          bn: 'অচল ওয়ার্কারকে মেরে ফেলে সাথে সাথে টাটকা ওয়ার্কার তৈরি করে অ্যাপ সচল রাখার মাস্টার ব্যবস্থা।'
        },
        explanation: {
          en: 'Puma master supervises workers. When long queries or deadlocks freeze a worker, the master reclaims resources by spawning a healthy replacement, ensuring continuous uptime.',
          bn: 'ফলে কোনো একটি রিকোয়েস্টে সমস্যা হলেও পুরো সার্ভার অচল না হয়ে স্বাভাবিক সেবা অব্যাহত থাকে।'
        }
      },
      {
        id: 'quiz-rubocop-static-analysis',
        kind: 'mcq',
        topic: 'rubocop-static-analysis-and-linting',
        question: {
          en: 'What role does "RuboCop" play in professional continuous integration (CI) pipelines for enterprise Ruby teams?',
          bn: 'পেশাদার এন্টারপ্রাইজ Ruby টিমগুলোর সিআই (CI) পাইপলাইনে "RuboCop" কোন ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It acts as the static code analyzer and linter, enforcing community style guide conventions, identifying potential security hazards, and blocking non-compliant pull requests',
            bn: 'এটি স্ট্যাটিক কোড অ্যানালাইজার ও লিন্টার হিসেবে কাজ করে, কমিউনিটি স্টাইল গাইড নিশ্চিত করে, সম্ভাব্য নিরাপত্তা দুর্বলতা শনাক্ত করে এবং মানহীন পুল রিকোয়েস্ট আটকে দেয়'
          },
          {
            en: 'It controls the physical air conditioning in server rooms',
            bn: 'এটি সার্ভার রুমের এয়ার কন্ডিশনার নিয়ন্ত্রণ করে'
          },
          {
            en: 'It converts Ruby code into assembly language for robots',
            bn: 'এটি রোবটের জন্য Ruby কোডকে অ্যাসেম্বলি ভাষায় রূপান্তর করে'
          },
          {
            en: 'RuboCop is only allowed on personal hobby projects',
            bn: 'RuboCop কেবল ব্যক্তিগত শখের প্রজেক্টেই ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'RuboCop enforces code style and catches common anti-patterns statically.',
          bn: 'কোডের সৌন্দর্য, শৃঙ্খলা ও নিরাপত্তা স্বয়ংক্রিয়ভাবে যাচাই করার ডিজিটাল ট্রাফিক পুলিশ।'
        },
        explanation: {
          en: 'RuboCop parses Ruby AST to identify syntax violations, performance pitfalls, and security antipatterns, ensuring clean, idiomatic, and uniform code across thousands of commits.',
          bn: 'এর ফলে শত শত ইঞ্জিনিয়ারের লেখা কোড একই রকম পরিচ্ছন্ন, মানসম্মত ও নিরাপদ থাকে।'
        }
      },
      {
        id: 'quiz-kamal-traefik-ssl-automation',
        kind: 'mcq',
        topic: 'kamal-traefik-letsencrypt-tls-automation',
        question: {
          en: 'How does Traefik, managed automatically by Kamal, handle HTTPS encryption for production web applications?',
          bn: 'Kamal দ্বারা স্বয়ংক্রিয়ভাবে পরিচালিত Traefik কীভাবে প্রোডাকশন ওয়েব অ্যাপের HTTPS এনক্রিপশন পরিচালনা করে?'
        },
        options: [
          {
            en: 'It integrates directly with Let\'s Encrypt via ACME protocols to provision, validate, and automatically renew free SSL/TLS certificates with zero manual intervention',
            bn: 'এটি Let\'s Encrypt-এর সাথে ACME প্রোটোকলে সরাসরি যুক্ত হয়ে কোনো মানুষের হস্তক্ষেপ ছাড়াই বিনামূল্যে SSL/TLS সার্টিফিকেট সংগ্রহ, যাচাই ও স্বয়ংক্রিয় নবায়ন সম্পন্ন করে'
          },
          {
            en: 'It requires buying paper certificates from the post office',
            bn: 'এটি পোস্ট অফিস থেকে কাগজের সার্টিফিকেট কেনার নির্দেশ দেয়'
          },
          {
            en: 'It turns off encryption to increase network speeds',
            bn: 'এটি নেটওয়ার্ক স্পিড বাড়াতে এনক্রিপশন বন্ধ করে দেয়'
          },
          {
            en: 'Traefik does not support HTTPS encryption',
            bn: 'Traefik কোনো HTTPS এনক্রিপশন সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Traefik automates SSL certificates with Let\'s Encrypt via ACME.',
          bn: 'নিরাপদ প্যাডলক ও ব্রাউজার সিকিউরিটি সার্টিফিকেট নিজে থেকেই নবায়ন করার চমৎকার প্রযুক্তি।'
        },
        explanation: {
          en: 'Traefik handles TLS termination effortlessly. By configuring your domain in Kamal\'s "deploy.yml", Traefik auto-requests and auto-renews Let\'s Encrypt certificates.',
          bn: 'এর মাধ্যমে কোনো বাড়তি কনফিগারেশন ছাড়াই সম্পূর্ণ নিরাপদ ও এনক্রিপ্টেড ওয়েব সেবা চালু রাখা যায়।'
        }
      }
    ]
  }
};
