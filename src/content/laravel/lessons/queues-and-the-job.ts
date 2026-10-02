import type { Lesson } from '../../../lib/types';

export const QueuesAndTheJobLesson: Lesson = {
  slug: 'queues-and-the-job',
  tech: 'laravel',
  title: {
    en: 'Asynchronous Queues, Background Jobs & Task Scheduling',
    bn: 'অ্যাসিনক্রোনাস কিউ, ব্যাকগ্রাউন্ড জব এবং টাস্ক শিডিউলিং'
  },
  summary: {
    en: 'Master asynchronous processing in Laravel by offloading slow tasks (emails, PDFs) to Redis queues. Configure worker processes, handle retry backoffs with failed job tables, and automate cron schedules via Laravel Task Scheduler.',
    bn: 'লারাভেলে অ্যাসিনক্রোনাস প্রসেসিং আয়ত্ত করুন: ধীরগতির কাজগুলো (ইমেইল, পিডিএফ) রেডিস কিউতে স্থানান্তর। ওয়ার্কার প্রসেস পরিচালনা, রিট্রাই ও ফেইলড জব টেবিল এবং টাস্ক শিডিউলার।'
  },
  minutes: 34,
  blocks: [
    {
      type: 'heading',
      id: 'queue-architecture-heading',
      text: {
        en: 'The Asynchronous Queue Architecture and Background Worker Lifecycles',
        bn: 'অ্যাসিনক্রোনাস কিউ আর্কিটেকচার এবং ব্যাকগ্রাউন্ড ওয়ার্কার লাইফসাইকেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Laravel (the web framework for PHP) provides an asynchronous queue engine that liberates web requests from blocking operations. Executing slow external actions (such as sending confirmation emails taking 3000ms) synchronously freezes client browsers and exhausts web server worker pools. Offloading these tasks to a Redis queue via ProcessOrder::dispatch($order) takes only 2ms, returning an instantaneous HTTP response to the user while background workers (php artisan queue:work) consume and execute jobs concurrently in server memory.',
        bn: 'লারাভেল (পিএইচপির ওয়েব ফ্রেমওয়ার্ক) একটি শক্তিশালী অ্যাসিনক্রোনাস কিউ ইঞ্জিন সরবরাহ করে যা ওয়েব রিকোয়েস্টকে ধীরগতির কাজের অপেক্ষা থেকে মুক্ত রাখে। ইমেইল পাঠানো বা পিডিএফ তৈরির মতো কাজগুলো সরাসরি সম্পন্ন করতে গেলে প্রায় ৩০০০ মিলিসেকেন্ড সময় লাগে যা ব্যবহারকারীর ব্রাউজারকে আটকে রাখে এবং সার্ভারকে ধীর করে ফেলে। ProcessOrder::dispatch($order) এর মাধ্যমে কাজটি একটি রেডিস কিউতে স্থানান্তর করতে মাত্র ২ মিলিসেকেন্ড সময় লাগে, যার ফলে ব্যবহারকারী সাথে সাথে রেসপন্স পান এবং ব্যাকগ্রাউন্ড ওয়ার্কাররা (php artisan queue:work) মেমোরিতে কাজটি নিজস্ব গতিতে সম্পন্ন করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Comparison between slow synchronous request blocking (3000ms) and high-speed asynchronous queued job execution (25ms).',
        bn: 'চিত্র ১: ধীরগতির সিনক্রোনাস রিকোয়েস্ট ব্লকিং (৩০০০ মিলিসেকেন্ড) এবং দ্রুতগতির অ্যাসিনক্রোনাস কিউ প্রসেসিংয়ের (২৫ মিলিসেকেন্ড) মধ্যে সময়ের পার্থক্য।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SYNCHRONOUS REQUEST vs ASYNCHRONOUS QUEUED PROCESSING</text>

  <!-- Top: Synchronous Blocking -->
  <g transform="translate(30, 60)">
    <rect width="780" height="110" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="180" height="26" rx="6" fill="#b91c1c" />
    <text x="90" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Synchronous Execution</text>
    
    <text x="20" y="45" fill="#38bdf8" font-size="10" font-family="monospace">1. HTTP POST /checkout</text>
    <line x1="20" y1="52" x2="160" y2="52" stroke="#38bdf8" stroke-width="2" />
    
    <rect x="170" y="40" width="220" height="45" rx="5" fill="#450a0a" stroke="#ef4444" />
    <text x="180" y="60" fill="#fca5a5" font-size="9" font-family="monospace">2. SMTP Email: 3000ms delay</text>
    <text x="180" y="75" fill="#f87171" font-size="9" font-family="sans-serif">Browser spinner locked</text>

    <text x="410" y="65" fill="#fca5a5" font-size="11" font-family="sans-serif">&#10140; 3. Response Returned after 3000ms delay!</text>
    <text x="20" y="100" fill="#f87171" font-size="10" font-family="sans-serif" font-weight="bold">&#10007; User experiences severe latency; PHP worker blocked for 3 full seconds</text>
  </g>

  <!-- Bottom: Asynchronous Queued -->
  <g transform="translate(30, 190)">
    <rect width="780" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="180" height="26" rx="6" fill="#047857" />
    <text x="90" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Asynchronous Queued</text>
    
    <text x="20" y="45" fill="#38bdf8" font-size="10" font-family="monospace">1. HTTP POST /checkout</text>
    
    <rect x="170" y="38" width="160" height="30" rx="5" fill="#064e3b" stroke="#10b981" />
    <text x="180" y="57" fill="#a7f3d0" font-size="9" font-family="monospace">Push Job to Redis: 2ms</text>

    <rect x="350" y="38" width="160" height="30" rx="5" fill="#0284c7" />
    <text x="360" y="57" fill="#ffffff" font-size="9" font-family="monospace">HTTP 200 OK: 25ms</text>

    <g transform="translate(530, 38)">
      <rect width="230" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
      <text x="10" y="20" fill="#fbbf24" font-size="9" font-family="monospace">Background Worker Pool:</text>
      <text x="10" y="38" fill="#cbd5e1" font-size="8" font-family="monospace">Pulls from Redis, sends SMTP</text>
      <text x="10" y="55" fill="#34d399" font-size="8" font-family="monospace">Zero delay to browser user!</text>
    </g>

    <text x="20" y="105" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">&#10003; Blazing fast 25ms response time; heavy I/O offloaded to background workers</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'resilience-retries-scheduling-heading',
      text: {
        en: 'Job Resiliency, Failed Tables, and Automated Cron Scheduling',
        bn: 'জব নির্ভরযোগ্যতা, ফেইলড টেবিল এবং স্বয়ংক্রিয় ক্রন শিডিউলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'External services like payment gateways and SMTP servers experience intermittent network hiccups. Laravel jobs guarantee resilience through configurable retry properties ($tries = 3) and exponential backoff pauses (such as $backoff = [10, 30, 60] seconds). If all 3 attempts fail, the job is securely logged into the failed_jobs database table for administrator inspection and manual replay via php artisan queue:retry all. In addition to ad-hoc jobs, the Laravel Task Scheduler eliminates multiple cron configuration entries: a single server cron triggers schedule:run every minute to run hourly and daily jobs.',
        bn: 'পেমেন্ট গেটওয়ে বা এসএমটিপি সার্ভারের মতো বাহ্যিক পরিষেবাগুলোতে মাঝে মাঝে নেটওয়ার্ক ত্রুটি দেখা দিতে পারে। লারাভেলের জবগুলো একাধিকবার চেষ্টার নিয়ম ($tries = 3) এবং নির্দিষ্ট সময় অপেক্ষা করার ব্যাকঅফ ($backoff = [10, 30, 60] সেকেন্ড) কনফিগার করে নির্ভরযোগ্যতা নিশ্চিত করে। সমস্ত ৩ টি চেষ্টাই ব্যর্থ হলে কাজটি failed_jobs টেবিলে সংরক্ষিত হয় যা পরবর্তীতে php artisan queue:retry all দিয়ে পুনরায় চালানো যায়। তাছাড়া লারাভেল টাস্ক শিডিউলারের মাধ্যমে সার্ভারে কেবল ১ টি ক্রন যুক্ত করলেই প্রতিদিন বা প্রতি ঘণ্টার যাবতীয় রুটিন কাজ স্বয়ংক্রিয়ভাবে পরিচালিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Laravel Redis FIFO queue, retry backoff tracking, and failed job recording across 3 jobs.',
        bn: '৩ টি জবের ক্ষেত্রে রেডিস কিউ, রিট্রাই ব্যাকঅফ এবং ফেইলড জব রেকর্ডিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Laravel Queue Dispatcher and Worker Lifecycle in TypeScript
interface QueueJob {
  id: string;
  name: string;
  payload: Record<string, unknown>;
  attempts: number;
  maxTries: number;
  backoffSeconds: number[];
}

export class QueueWorkerSimulator {
  private redisQueue: QueueJob[] = [];
  private failedJobsTable: QueueJob[] = [];
  private processedJobs: string[] = [];

  // Simulating: SendReceiptJob::dispatch($order)->onQueue('emails')
  public dispatch(name: string, payload: Record<string, unknown>): void {
    const job: QueueJob = {
      id: 'job_' + Math.random().toString(36).slice(2, 8),
      name,
      payload,
      attempts: 0,
      maxTries: 3,
      backoffSeconds: [10, 30, 60]
    };
    this.redisQueue.push(job); // 2ms in-memory push
  }

  // Simulating: php artisan queue:work
  public processNextJob(simulateNetworkFailure: boolean): boolean {
    const job = this.redisQueue.shift();
    if (!job) return false;

    job.attempts++;

    if (simulateNetworkFailure) {
      if (job.attempts < job.maxTries) {
        // Re-queue with exponential backoff delay
        this.redisQueue.push(job);
        console.log('Job ' + job.name + ' failed attempt ' + job.attempts + '; retrying...');
      } else {
        // Exceeded 3 tries: write to failed_jobs table
        this.failedJobsTable.push(job);
        console.log('Job ' + job.name + ' failed permanently; moved to failed_jobs');
      }
      return false;
    }

    this.processedJobs.push(job.id);
    return true;
  }

  public getQueueLength(): number {
    return this.redisQueue.length;
  }

  public getFailedCount(): number {
    return this.failedJobsTable.length;
  }
}

// 3 jobs dispatched
const worker = new QueueWorkerSimulator();

worker.dispatch('SendOrderReceipt', { orderId: 101, total: 250 });
worker.dispatch('GenerateInvoicePdf', { invoiceId: 501 });
worker.dispatch('SyncInventoryToCrm', { sku: 'PROD-99' });

console.log('Enqueued Jobs in Redis:', worker.getQueueLength()); // 3

// Process job 1 successfully
worker.processNextJob(false);

// Process job 2 with simulated temporary network failure
worker.processNextJob(true); // Attempt 1 fails, re-queued

console.log('Remaining in Queue:', worker.getQueueLength()); // 2`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Asynchronous Queues',
          def: {
            en: 'Messaging infrastructure buffering time-consuming work units away from user-facing HTTP request cycles.',
            bn: 'বার্তা আদান-প্রদান ব্যবস্থা যা সময়সাপেক্ষ কাজগুলোকে ব্যবহারকারীর এইচটিটিপি অনুরোধের বাইরে এনে মেমোরিতে জমা রাখে।'
          }
        },
        {
          term: 'Dispatchable Jobs',
          def: {
            en: 'Encapsulated unit of work implementable via Artisan that can be pushed to queues using the dispatch() method.',
            bn: 'সুনির্দিষ্ট কাজের একক যা dispatch() মেথড ব্যবহার করে চোখের পলকে যেকোনো ব্যাকগ্রাউন্ড কিউতে পাঠিয়ে দেওয়া যায়।'
          }
        },
        {
          term: 'Failed Jobs Table',
          def: {
            en: 'Database table recording metadata, payloads, and exceptions for queued jobs that exhausted all retry attempts.',
            bn: 'ডেটাবেস টেবিল যা অনুমোদিত সকল রিট্রাই চেষ্টা শেষ হওয়ার পর ব্যর্থ হওয়া জবের বিস্তারিত তথ্য সংরক্ষণ করে রাখে।'
          }
        },
        {
          term: 'Task Scheduler',
          def: {
            en: 'Laravel tool managing scheduled console commands programmatically through a single system cron entry.',
            bn: 'লারাভেলের টুল যা সার্ভারে মাত্র একটি ক্রন রেখে কোডের মাধ্যমে যেকোনো রুটিন কাজের সময়সূচি পরিচালনা করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'queue-dispatch-latency-benefit-ex1',
      kind: 'mcq',
      topic: 'queue-dispatch-response-latency',
      question: {
        en: 'Why does dispatching an email job to a Redis queue take only 2 milliseconds compared to sending it synchronously?',
        bn: 'রেডিস কিউতে একটি ইমেইল জব পাঠাতে সরাসরি পাঠানোর তুলনায় কেন মাত্র ২ মিলিসেকেন্ড সময় লাগে?'
      },
      options: [
        {
          en: 'Dispatching simply serializes and pushes the job payload into high-speed in-memory Redis storage, allowing the HTTP response to return immediately while workers execute the SMTP call later',
          bn: 'ডিসপ্যাচিং কেবল জবের তথ্যগুলোকে অতি দ্রুতগতির মেমোরি রেডিসে জমা করে সাথে সাথে এইচটিটিপি রেসপন্স ফেরত দেয় এবং ওয়ার্কাররা পরে তা চালায়'
        },
        {
          en: 'Redis deletes the email so it never has to be sent',
          bn: 'রেডিস ইমেইলটি মুছে ফেলে যাতে আর কখনোই পাঠাতে না হয়'
        },
        {
          en: 'It forces the client browser to send the email directly from JavaScript',
          bn: 'এটি ক্লায়েন্টের ব্রাউজারকে জাভাস্ক্রিপ্ট দিয়ে ইমেইল পাঠাতে বাধ্য করে'
        },
        {
          en: 'Synchronous sending is illegal on modern web servers',
          bn: 'আধুনিক ওয়েব সার্ভারে সরাসরি ইমেইল পাঠানো আইনত নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Queueing decouples job submission from actual execution.',
        bn: 'কিউতে জমা রাখা এবং বাস্তবে কাজটি কার্যকর করা দুটি সম্পূর্ণ স্বাধীন ধাপ।'
      },
      explanation: {
        en: 'Queues push jobs to RAM in milliseconds, preventing slow external network connections from degrading user responsiveness.',
        bn: 'রেডিসে তথ্য জমা করতে চোখের পলক ফেলার চেয়েও কম সময় লাগে, যার ফলে ব্যবহারকারীর ব্রাউজার আটকে থাকে না।'
      }
    },
    {
      id: 'failed-jobs-table-resiliency-ex2',
      kind: 'mcq',
      topic: 'failed-jobs-table-inspection',
      question: {
        en: 'What happens to a queued job when all configured retries ($tries = 3) are completely exhausted due to a third-party API outage?',
        bn: 'থার্ড-পার্টি এপিআই বন্ধ থাকার কারণে একটি জবের নির্ধারিত ৩ টি রিট্রাই চেষ্টাই শেষ হয়ে গেলে কী ঘটে?'
      },
      options: [
        {
          en: 'Laravel moves the job payload, stack trace, and timestamp into the failed_jobs database table, allowing administrators to inspect and retry it later via php artisan queue:retry',
          bn: 'লারাভেল জবের তথ্য ও এরর মেসেজ failed_jobs টেবিলে জমা রাখে, যাতে সমস্যা সমাধানের পর php artisan queue:retry দিয়ে পুনরায় চালানো যায়'
        },
        {
          en: 'The entire web application shuts down permanently',
          bn: 'সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন চিরতরে বন্ধ হয়ে যায়'
        },
        {
          en: 'Laravel sends an email to every registered user on the site',
          bn: 'লারাভেল ওয়েবসাইটের সকল নিবন্ধিত ব্যবহারকারীর কাছে একটি ইমেইল পাঠায়'
        },
        {
          en: 'The database server drops the users table',
          bn: 'ডেটাবেস সার্ভার মূল users টেবিলটি ড্রপ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Failed jobs are preserved in database storage for manual or automated recovery.',
        bn: 'ব্যর্থ হওয়া জবগুলো ডেটাবেসে সুরক্ষিত থাকে যাতে তথ্য নষ্ট না হয়ে পরবর্তীতে পুনরায় চেষ্টা করা যায়।'
      },
      explanation: {
        en: 'The failed_jobs table guarantees that transient outages never result in silent, irrecoverable data loss.',
        bn: 'failed_jobs টেবিল নিশ্চিত করে যে সাময়িক নেটওয়ার্ক সমস্যার কারণেও কোনো জরুরি কাজ চিরতরে হারিয়ে যাবে না।'
      }
    },
    {
      id: 'queue-work-daemon-deployment-ex3',
      kind: 'mcq',
      topic: 'queue-work-daemon-restart-deploy',
      question: {
        en: 'Why is running php artisan queue:restart mandatory during a production deployment pipeline?',
        bn: 'প্রোডাকশন ডিপ্লয়মেন্টের সময় php artisan queue:restart কমান্ডটি চালানো কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'Queue workers are long-running persistent processes holding application code in memory; queue:restart instructs them to gracefully terminate and reload the updated codebase',
          bn: 'কিউ ওয়ার্কাররা দীর্ঘস্থায়ী প্রসেস হিসেবে মেমোরিতে পুরানো কোড ধরে রাখে; queue:restart তাদের কাজ শেষ করে নতুন কোড লোড করার নির্দেশ দেয়'
        },
        {
          en: 'It deletes all pending jobs from the queue',
          bn: 'এটি কিউতে জমে থাকা সমস্ত কাজ মুছে ফেলে'
        },
        {
          en: 'It reboots the physical data center hardware',
          bn: 'এটি ডেটা সেন্টারের হার্ডওয়্যার রিবুট করে'
        },
        {
          en: 'It resets all user account passwords to blank',
          bn: 'এটি সমস্ত ব্যবহারকারীর পাসওয়ার্ড খালি করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Worker daemons do not detect file changes on disk unless explicitly restarted.',
        bn: 'পুনরায় চালু না করলে ওয়ার্কার প্রসেসগুলো নতুন ফাইলের পরিবর্তন শনাক্ত করতে পারে না।'
      },
      explanation: {
        en: 'queue:restart signals background workers to terminate gracefully upon completing their active job, letting process managers restart them with fresh code.',
        bn: 'queue:restart চলমান কাজ শেষ করে ওয়ার্কারদের বন্ধ করে দেয় এবং সুপারভাইজার সাথে সাথে নতুন কোড সহ তাদের চালু করে।'
      }
    },
    {
      id: 'task-scheduler-single-cron-benefit-ex4',
      kind: 'mcq',
      topic: 'task-scheduler-cron-entry',
      question: {
        en: 'What architectural benefit does the Laravel Task Scheduler provide over managing 20 individual crontab entries on the server?',
        bn: 'সার্ভারে ২০ টি আলাদা ক্রন জব কনফিগার করার চেয়ে লারাভেল টাস্ক শিডিউলার ব্যবহারের মূল স্থাপত্যিক সুবিধা কী?'
      },
      options: [
        {
          en: 'All job schedules are version-controlled in readable PHP code within the project repository, requiring only a single * * * * * schedule:run entry in server crontab',
          bn: 'সকল কাজের সময়সূচি প্রজেক্টের ভেতরেই ভার্সন-নিয়ন্ত্রিত পিএইচপি কোড হিসেবে থাকে এবং সার্ভারে কেবল একটিমাত্র * * * * * schedule:run ক্রন লাগে'
        },
        {
          en: 'It speeds up server CPU clock frequencies by 20 percent',
          bn: 'এটি সার্ভারের প্রসেসরের কাজের গতি ২০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It eliminates the need for having a database',
          bn: 'এটির কারণে ডেটাবেস রাখার কোনো প্রয়োজন থাকে না'
        },
        {
          en: 'Crontabs are forbidden on Linux production servers',
          bn: 'লিনাক্স সার্ভারে ক্রনট্যাব ব্যবহার করা আইনত নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single cron hook delegates all scheduling logic to version-controlled application code.',
        bn: 'একটিমাত্র সিস্টেম ক্রন দিয়ে পুরো অ্যাপ্লিকেশনের যাবতীয় জটিল সময়সূচি কোড থেকেই নিয়ন্ত্রণ করা যায়।'
      },
      explanation: {
        en: 'The Task Scheduler centralizes job orchestration in Git-tracked code, freeing sysadmins from maintaining fragile crontab configurations.',
        bn: 'টাস্ক শিডিউলার সব কাজের হিসাব কোডে রাখে, ফলে সার্ভার কনফিগারেশনে বারবার হাত দেওয়ার ঝুঁকি থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-queues-and-the-job',
    title: {
      en: 'Laravel Asynchronous Queues and Scheduling Quiz',
      bn: 'লারাভেল অ্যাসিনক্রোনাস কিউ এবং শিডিউলিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-exponential-backoff-queue',
        kind: 'mcq',
        topic: 'queue-exponential-backoff',
        question: {
          en: 'What behavior does public $backoff = [10, 30, 60]; configure on a Laravel queued job class?',
          bn: 'একটি লারাভেল জব ক্লাসে public $backoff = [10, 30, 60]; কনফিগার করলে কী ধরনের আচরণ কার্যকর হয়?'
        },
        options: [
          {
            en: 'The worker pauses for 10 seconds before the 2nd attempt, 30 seconds before the 3rd attempt, and 60 seconds before subsequent attempts, preventing API spamming during outages',
            bn: 'ওয়ার্কার দ্বিতীয় চেষ্টার পূর্বে ১০ সেকেন্ড, তৃতীয় চেষ্টার পূর্বে ৩০ সেকেন্ড এবং পরবর্তী চেষ্টার পূর্বে ৬০ সেকেন্ড অপেক্ষা করে বাহ্যিক এপিআইকে চাপমুক্ত রাখে'
          },
          {
            en: 'It limits the job to executing in under 10 seconds',
            bn: 'এটি জবটিকে ১০ সেকেন্ডের মধ্যে শেষ হতে বাধ্য করে'
          },
          {
            en: 'It retries the job 100 times continuously with zero delay',
            bn: 'এটি কোনো বিরতি ছাড়াই জবটিকে ১০০ বার দ্রুত চালাতে থাকে'
          },
          {
            en: 'It deletes 10 records from the database table',
            bn: 'এটি ডেটাবেস থেকে ১০ টি রেকর্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Exponential backoff spaces out successive retries to give ailing services time to recover.',
          bn: 'ব্যাকঅফ ব্যর্থতার পর কিছুটা সময় বিরতি দিয়ে পুনরায় চেষ্টা করে যাতে সাময়িক সমস্যা কেটে যেতে পারে।'
        },
        explanation: {
          en: '$backoff arrays specify progressive delay intervals in seconds between sequential retry attempts.',
          bn: '$backoff ক্রমান্বয়ে সেকেন্ডের ব্যবধান বাড়িয়ে বুদ্ধিমানভাবে পুনরায় অনুরোধ পাঠানোর সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-without-overlapping-scheduler',
        kind: 'mcq',
        topic: 'scheduler-without-overlapping',
        question: {
          en: 'Why is appending ->withoutOverlapping() vital for scheduled tasks running every minute ($schedule->command("reports:generate")->everyMinute())?',
          bn: 'প্রতি মিনিটে চলা শিডিউল্ড কাজে ->withoutOverlapping() যুক্ত করা কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'If a previous execution takes longer than 60 seconds to finish, it prevents subsequent scheduled runs from starting concurrently and overwhelming server CPU',
            bn: 'আগের কাজটি শেষ হতে যদি ৬০ সেকেন্ডের বেশি সময় লাগে, তবে এটি একই সাথে নতুন কাজ চালু হওয়া বন্ধ রেখে সার্ভারের প্রসেসরকে রক্ষা করে'
          },
          {
            en: 'It forces the task to complete in exactly 1 millisecond',
            bn: 'এটি কাজটিকে ঠিক ১ মিলিসেকেন্ডের মধ্যে শেষ করতে বাধ্য করে'
          },
          {
            en: 'It deletes all generated reports automatically',
            bn: 'এটি তৈরি হওয়া সমস্ত রিপোর্ট স্বয়ংক্রিয়ভাবে মুছে ফেলে'
          },
          {
            en: 'Tasks cannot execute without overlapping enabled',
            bn: 'withoutOverlapping ছাড়া কোনো কাজ চালানোই অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'withoutOverlapping uses mutex locks to prevent identical task instances from running simultaneously.',
          bn: 'withoutOverlapping লক ব্যবহারের মাধ্যমে একই কাজের একাধিক অনুলিপি একসাথে চলা বন্ধ রাখে।'
        },
        explanation: {
          en: 'withoutOverlapping prevents overlapping execution stampedes when heavy scheduled background jobs run longer than expected.',
          bn: 'কোনো কাজ প্রত্যাশার চেয়ে বেশি সময় নিলেও withoutOverlapping নিশ্চিত করে সার্ভারে কাজের ওভারলোড হবে না।'
        }
      },
      {
        id: 'quiz-queue-should-queue-interface',
        kind: 'mcq',
        topic: 'should-queue-interface-contract',
        question: {
          en: 'What contract interface must an event listener or mailable class implement to instruct Laravel to push it to background queues?',
          bn: 'কোন ইন্টারফেসটি ইমপ্লিমেন্ট করলে লারাভেল কোনো ইভেন্ট লিসেনার বা মেইলকে ব্যাকগ্রাউন্ড কিউতে পাঠানোর নির্দেশ পায়?'
        },
        options: [
          { en: 'implements ShouldQueue', bn: 'implements ShouldQueue' },
          { en: 'implements AutoBackground', bn: 'implements AutoBackground' },
          { en: 'implements RedisAsync', bn: 'implements RedisAsync' },
          { en: 'implements FastExecute', bn: 'implements FastExecute' }
        ],
        answer: 0,
        hint: {
          en: 'The ShouldQueue marker interface signals Laravel queue manager to defer execution.',
          bn: 'ShouldQueue ইন্টারফেসটি দেখলেই লারাভেল কাজটি সরাসরি না চালিয়ে ব্যাকগ্রাউন্ড কিউতে ফেলে দেয়।'
        },
        explanation: {
          en: 'Implementing ShouldQueue instructs Laravel event dispatchers and mailers to queue execution automatically.',
          bn: 'ShouldQueue ইন্টারফেস লারাভেলের মেইল বা ইভেন্টগুলোকে স্বয়ংক্রিয়ভাবে ব্যাকগ্রাউন্ড জবে রূপান্তরিত করে।'
        }
      },
      {
        id: 'quiz-queue-prioritization-workers',
        kind: 'mcq',
        topic: 'queue-prioritization-ordering',
        question: {
          en: 'How does running php artisan queue:work --queue=high,default,low handle jobs waiting in different queues?',
          bn: 'php artisan queue:work --queue=high,default,low কমান্ডটি ভিন্ন ভিন্ন কিউতে থাকা কাজগুলো কীভাবে পরিচালনা করে?'
        },
        options: [
          {
            en: 'It prioritizes jobs in the "high" queue first, only processing "default" and "low" queue items when the "high" queue is completely empty',
            bn: 'এটি সবার আগে "high" কিউয়ের কাজ সম্পন্ন করে এবং কেবল "high" কিউ সম্পূর্ণ ফাঁকা থাকলেই "default" ও "low" কিউয়ের কাজে হাত দেয়'
          },
          {
            en: 'It picks 1 random job from each queue alternately',
            bn: 'এটি পর্যায়ক্রমে প্রতিটি কিউ থেকে ১ টি করে দৈব কাজ বেছে নেয়'
          },
          {
            en: 'It deletes all jobs inside the "low" queue immediately',
            bn: 'এটি "low" কিউয়ের সমস্ত কাজ সাথে সাথে মুছে ফেলে'
          },
          {
            en: 'It only processes jobs on Tuesdays',
            bn: 'এটি কেবল মঙ্গলবারেই কাজ প্রক্রিয়া করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Queue arguments specify strict left-to-right evaluation priority.',
          bn: 'কমান্ডে কিউগুলোর নাম বাম থেকে ডানে কঠোর অগ্রাধিকারের ক্রম নির্দেশ করে।'
        },
        explanation: {
          en: 'Workers consume jobs strictly according to the order specified in the --queue flag, prioritizing mission-critical queues.',
          bn: 'কমান্ডে উল্লিখিত ক্রম অনুসারে ওয়ার্কার সবসময় গুরুত্বপূর্ণ কিউয়ের কাজকে আগে অগ্রাধিকার দিয়ে সম্পন্ন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-horizon-serve',
    title: {
      en: 'Production Optimization: Laravel Horizon, Octane & Deployment Capstone',
      bn: 'প্রোডাকশন অপ্টিমাইজেশন: লারাভেল হরাইজন, অক্টেন এবং ডিপ্লয়মেন্ট ক্যাপস্টোন'
    }
  }
};
