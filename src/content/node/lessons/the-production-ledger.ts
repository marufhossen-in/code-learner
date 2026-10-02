import type { Lesson } from '../../../lib/types';

export const productionLedgerLesson: Lesson = {
  slug: 'the-production-ledger',
  tech: 'node',
  title: {
    en: 'Node.js Production Engineering: Clustering, Graceful Shutdown, Health Checks & PM2',
    bn: 'Node.js প্রোডাকশন ইঞ্জিনিয়ারিং: ক্লাস্টারিং, গ্রেসফুল শাটডাউন, হেলথ চেক ও PM2'
  },
  summary: {
    en: 'Master production-grade Node.js deployment and reliability across 10 structured topics, from 12-Factor config to clustering. Learn zero-downtime graceful shutdown, multi-core cluster scaling, PM2 process management, and Kubernetes health probes.',
    bn: '১২-ফ্যাক্টর কনফিগ থেকে শুরু করে ক্লাস্টারিং পর্যন্ত 10 টি বিষয়ে প্রোডাকশন-গ্রেড Node.js ডেপ্লয়মেন্ট আয়ত্ত করুন। জানুন জিরো-ডাউনটাইম গ্রেসফুল শাটডাউন, মাল্টি-কোর ক্লাস্টার স্কেলিং, PM2 প্রসেস ম্যানেজার এবং কুবারনেটিস হেলথ প্রোব।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. 12-Factor Environment Config: Validating process.env', bn: '১. ১২-ফ্যাক্টর এনভায়রনমেন্ট কনফিগারেশন: process.env যাচাই' } },
    {
      type: 'para',
      text: {
        en: 'Following 12-Factor App methodology, configuration variables (database credentials, API keys, port numbers) must live outside the codebase in environment variables accessed via process.env. In production, validate these variables strictly at application boot; if a required variable is missing, fail fast immediately before opening network sockets.',
        bn: '১২-ফ্যাক্টর অ্যাপ মেথডোলজি অনুযায়ী সব গোপন ডাটাবেস ইউআরএল, সিক্রেট কি এবং পোর্ট নম্বর কোডের ভেতর না রেখে পরিবেশের ভ্যারিয়েবলে (process.env) রাখতে হয়। অ্যাপ্লিকেশন চালু হওয়ার সময়ই এই ভ্যারিয়েবলগুলো কঠোরভাবে যাচাই করে নিতে হয়; কোনো জরুরি তথ্য বাদ থাকলে সার্ভার সকেট চালু করার আগেই তাৎক্ষণিকভাবে ফেইল-ফাস্ট হওয়া উচিত।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function loadAndValidateConfig() {
  const env = process.env;
  
  const config = {
    port: parseInt(env.PORT || "5199", 10),
    nodeEnv: env.NODE_ENV || "development",
    dbUrl: env.DATABASE_URL || "postgres://localhost:5432/main"
  };

  if (!config.dbUrl) {
    throw new Error("FATAL: DATABASE_URL environment variable is required!");
  }

  return config;
}

const appConfig = loadAndValidateConfig();
console.log("Environment loaded successfully, port:", appConfig.port);
// Output: Environment loaded successfully, port: 5199`,
      caption: {
        en: 'Validating environment variables at startup prevents unexpected runtime failures in production.',
        bn: 'অ্যাপ বুটের সময় এনভায়রনমেন্ট ভ্যারিয়েবল যাচাই প্রোডাকশনে অনাকাঙ্ক্ষিত ক্র্যাশ রোধ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. POSIX Signals & Process Exit Codes', bn: '২. POSIX সিগন্যাল ও প্রসেস এক্সিট কোড' } },
    {
      type: 'para',
      text: {
        en: 'Production orchestrators (Docker, Kubernetes) manage processes using standard POSIX signals: SIGTERM requests a polite graceful shutdown, while SIGINT is emitted when pressing Ctrl+C in terminal. A process exits with code 0 on intentional success, or code 1 (or greater) when crashing due to unrecoverable errors.',
        bn: 'ডকার বা কুবারনেটিসের মতো আধুনিক ক্লাউড সিস্টেম প্রমিত POSIX সিগন্যালের মাধ্যমে প্রসেস পরিচালনা করে: SIGTERM পাঠায় শান্তভাবে শাটডাউন করার জন্য, আর টার্মিনালে Ctrl+C চাপলে SIGINT পাঠানো হয়। সফল সমাপ্তির ক্ষেত্রে প্রসেস exit(0) কোডে বন্ধ হয়, আর কোনো ত্রুটিতে ক্র্যাশ করলে exit(1) কোডে প্রস্থান করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Listening for operating system termination signals:
process.on("SIGTERM", () => {
  console.log("SIGTERM received: Starting graceful shutdown sequence...");
  // Initiate resource drain...
});

process.on("SIGINT", () => {
  console.log("SIGINT (Ctrl+C) received: Terminating process safely.");
  process.exit(0); // Clean, normal exit code
});

console.log("Signal handlers attached to process instance");
// Output: Signal handlers attached to process instance`,
      caption: {
        en: 'POSIX signals allow container orchestrators to coordinate graceful rolling deployments.',
        bn: 'POSIX সিগন্যাল কন্টেইনার অর্কেস্ট্রেটরকে জিরো-ডাউনটাইম রোলিং আপডেট পরিচালনায় সহায়তা করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Zero-Downtime Graceful Shutdown Protocol', bn: '৩. জিরো-ডাউনটাইম গ্রেসফুল শাটডাউন প্রোটোকল' } },
    {
      type: 'para',
      text: {
        en: 'When a new deployment occurs, simply killing the process drops active HTTP requests and corrupts in-flight database writes. A production Graceful Shutdown follows four steps: 1) Stop accepting new connections with server.close(); 2) Wait for existing in-flight requests to complete; 3) Close database pools and message queues; 4) Call process.exit(0) within a strict timeout budget (e.g. 10s).',
        bn: 'নতুন আপডেট দেওয়ার সময় হঠাৎ প্রসেস বন্ধ করে দিলে ব্যবহারকারীর চলমান কাজ নষ্ট হয়ে যেতে পারে। গ্রেসফুল শাটডাউন মূলত ৪টি ধাপে হয়: ১) server.close() দিয়ে নতুন রিকোয়েস্ট নেওয়া বন্ধ করা; ২) ইতিমধ্যে ভেতরে থাকা চলমান রিকোয়েস্টগুলো শেষ হতে সময় দেওয়া; ৩) ডাটাবেস ও অন্যান্য কানেকশন বন্ধ করা. ৪) সর্বোচ্চ নির্দিষ্ট সময়সীমার (যেমন ১০ সেকেন্ড) মধ্যে process.exit(0) কল করা।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import http from "http";

const server = http.createServer((req, res) => res.end("OK"));

function initiateGracefulShutdown() {
  console.log("1. Refusing new HTTP connections...");
  server.close(async () => {
    console.log("2. All active HTTP connections drained.");
    
    // 3. Drain database connection pools:
    // await db.pool.end();
    console.log("3. Database connection pool closed.");
    
    // 4. Terminate process cleanly:
    process.exit(0);
  });

  // Fallback watchdog timer: force exit if connections hang past 10s:
  setTimeout(() => {
    console.error("Forced termination: Graceful shutdown timed out!");
    process.exit(1);
  }, 10000).unref();
}

console.log("Graceful shutdown coordinates socket drain and connection closure");
// Output: Graceful shutdown coordinates socket drain and connection closure`,
      caption: {
        en: 'A graceful shutdown protocol drains in-flight requests before terminating the server process.',
        bn: 'গ্রেসফুল শাটডাউন চলমান রিকোয়েস্ট শেষ হওয়া নিশ্চিত করে তবেই সার্ভার বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Multi-Core CPU Scaling: The Native Cluster Module', bn: '৪. মাল্টি-কোর সিপিইউ স্কেলিং: নেটিভ Cluster মডিউল' } },
    {
      type: 'para',
      text: {
        en: 'Because a Node.js process runs on 1 CPU core, an 8 core server would leave 7 cores completely idle by default. The native "cluster" module spawns child worker processes (1 per CPU core) that all bind to the identical network port. The operating system kernel automatically load-balances incoming connections across all worker processes.',
        bn: 'যেহেতু একটি Node.js প্রসেস 1 টি CPU কোরে চলে, তাই 8 কোরের সার্ভারে ডিফল্টভাবে 7 টি কোর অলস বসে থাকে। নেটিভ "cluster" মডিউল প্রতি 1 টি সিপিইউ কোরের জন্য একটি করে চাইল্ড প্রসেস তৈরি করে এবং সবাই একই পোর্টে চলে। অপারেটিং সিস্টেম কার্নেল স্বয়ংক্রিয়ভাবে সব ওয়ার্কারের মাঝে ট্রাফিক ভাগ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import cluster from "cluster";
import http from "http";
import os from "os";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(\`Primary process \${process.pid} is running\`);
  console.log(\`Detected CPU cores: \${numCPUs}\`);

  // Fork workers for each CPU core:
  for (let i = 0; i < Math.min(numCPUs, 4); i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(\`Worker \${worker.process.pid} died. Spawning replacement...\`);
    cluster.fork();
  });
} else {
  // Workers share the same TCP port:
  http.createServer((req, res) => res.end("Handled by cluster worker\\n")).listen(5199);
  console.log(\`Worker \${process.pid} started listening\`);
}`,
      caption: {
        en: 'The cluster module forks identical workers across CPU cores sharing a single server port.',
        bn: 'cluster মডিউল একই পোর্ট ভাগ করে একাধিক সিপিইউ কোরে অ্যাপ্লিকেশন স্কেল করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Production Process Managers: PM2 Daemon & Cluster', bn: '৫. প্রসেস ম্যানেজার: PM2 ডেমন ও ক্লাস্টার মোড' } },
    {
      type: 'para',
      text: {
        en: 'In standalone Virtual Private Servers (VPS), manually managing cluster forks is replaced by PM2, a production process manager. PM2 keeps applications alive 24/7, restarts them automatically upon unexpected crashes or memory leaks (max_memory_restart), manages cluster instances with zero downtime reloads, and aggregates log output.',
        bn: 'ভিপিএস সার্ভারে সরাসরি নোড চালানোর পরিবর্তে PM2 প্রসেস ম্যানেজার ব্যবহার করা হয়। PM2 সাইটকে ২৪ ঘণ্টা সচল রাখে, কোনো কারণে ক্র্যাশ বা অতিরিক্ত মেমরি খরচ হলে নিজে থেকেই রিস্টার্ট দেয়, ক্লাস্টার মোডে জিরো-ডাউনটাইম রিলোড সুবিধা দেয় এবং সব সেন্ট্রাল লগ এক জায়গায় সংরক্ষণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Start Node app in cluster mode across all available CPU cores:
pm2 start server.js -i max --name "codeshikhon-api"

# Monitor real-time CPU and memory usage:
pm2 monit

# Perform zero-downtime rolling restart:
pm2 reload all

# Save PM2 process list to resurrect upon server system reboots:
pm2 save
pm2 startup`,
      caption: {
        en: 'PM2 manages production process lifecycles, rolling restarts, and automatic resurrect daemons.',
        bn: 'PM2 প্রোডাকশনে ব্যাকগ্রাউন্ড প্রসেস পরিচালনা, অটো-রিস্টার্ট ও রোলিং আপডেট নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Docker Containerization: Multi-Stage & Non-Root', bn: '৬. ডকার কন্টেইনারাইজেশন: মাল্টি-স্টেজ ও নন-রুট নিরাপত্তা' } },
    {
      type: 'para',
      text: {
        en: 'Containerizing Node.js applications with Docker requires following production security rules: 1) Use Multi-Stage builds to exclude development compilers and source code from the final image; 2) Set NODE_ENV=production; 3) Never run containers as root. Always switch to the built-in non-root "USER node" to prevent container breakout exploits.',
        bn: 'ডকার দিয়ে Node.js অ্যাপ চালানোর সময় গুরুত্বপূর্ণ নিরাপত্তা নিয়ম মানতে হয়: ১) মাল্টি-স্টেজ বিল্ড ব্যবহার করে ডকার ইমেজ সাইজ ছোট রাখা; ২) NODE_ENV=production সেট করা. ৩) কখনোই রুট ইউজার হিসেবে অ্যাপ না চালিয়ে অফিসিয়াল "USER node" নন-রুট ইউজার হিসেবে চালানো যাতে হ্যাকিং আক্রমণ প্রতিহত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'dockerfile',
      code: `# Multi-stage secure production Dockerfile for Node.js:
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --if-present

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist

# Run as non-root user for security hardening:
USER node
EXPOSE 5199
CMD ["node", "dist/server.js"]`,
      caption: {
        en: 'Multi-stage Docker builds produce lightweight, unprivileged, production-hardened container images.',
        bn: 'মাল্টি-স্টেজ ডকার বিল্ড অপ্রয়োজনীয় ফাইল বাদ দিয়ে হালকা ও নিরাপদ কন্টেইনার ইমেজ তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Health Probes: Kubernetes Liveness & Readiness', bn: '৭. হেলথ চেক প্রোব: কুবারনেটিস Liveness ও Readiness' } },
    {
      type: 'para',
      text: {
        en: 'Production load balancers and Kubernetes clusters monitor containers using two distinct health endpoints: 1) Liveness Probe (/livez): verifies whether the Node.js event loop is breathing (if it fails, the container is restarted). 2) Readiness Probe (/readyz): checks if external dependencies (database, Redis cache) are reachable before routing user traffic.',
        bn: 'কুবারনেটিস এবং ক্লাউড লোড ব্যালান্সার অ্যাপ পর্যবেক্ষণের জন্য ২টি পৃথক হেলথ এন্ডপয়েন্ট ব্যবহার করে: ১) Liveness (/livez): দেখে প্রসেসটি সচল ও রেসপন্সিভ আছে কি না (ফেইল করলে পড রিস্টার্ট হয়). ২) Readiness (/readyz): দেখে ডাটাবেস ও ক্যাশের সাথে কানেকশন প্রস্তুত কি না, এটি রেডি হলেই কেবল ব্যবহারকারীর ট্রাফিক পাঠানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import express from "express";

const app = express();

// 1. Liveness endpoint: Is the event loop responding?
app.get("/livez", (req, res) => {
  res.status(200).json({ status: "alive", uptime: process.uptime() });
});

// 2. Readiness endpoint: Are database connections healthy?
app.get("/readyz", async (req, res) => {
  const isDatabaseConnected = true; // Simulated DB health check
  if (isDatabaseConnected) {
    res.status(200).json({ status: "ready" });
  } else {
    res.status(503).json({ status: "unavailable", error: "DB unreachable" });
  }
});

console.log("Health endpoints provide explicit contracts for orchestrator routing");
// Output: Health endpoints provide explicit contracts for orchestrator routing`,
      caption: {
        en: 'Liveness probes check process vitality while readiness probes gate client traffic.',
        bn: 'Liveness অ্যাপ বেঁচে থাকার নিশ্চয়তা দেয় এবং Readiness ট্রাফিক গ্রহণের প্রস্তুতি যাচাই করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Structured JSON Logging & Request Correlation IDs', bn: '৮. স্ট্রাকচার্ড JSON লগিং ও রিকোয়েস্ট কোরিলেশন আইডি' } },
    {
      type: 'para',
      text: {
        en: 'In distributed microservices, plain console.log text is impossible to parse or aggregate. Modern backends use high-performance structured JSON loggers (such as Pino) and attach an "X-Correlation-ID" or "X-Request-ID" to every request. When an error occurs, searching for that correlation ID aggregates the entire distributed trace across all log streams.',
        bn: 'মাইক্রোসার্ভিসের দুনিয়ায় সাধারণ console.log টেক্সট দিয়ে বাগ খোঁজা অসম্ভব। আধুনিক অ্যাপ্লিকেশনে হাই-পারফরম্যান্স JSON লগার (যেমন Pino) ব্যবহার করা হয় এবং প্রতিটি রিকোয়েস্টে একটি অনন্য "X-Request-ID" যুক্ত করা হয়। কোনো এরর হলে সেই আইডি দিয়ে সার্চ করলেই পুরো ট্রেস একমুহূর্তে খুঁজে পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import crypto from "crypto";

function structuredLog(level, message, meta = {}) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    pid: process.pid,
    ...meta
  };
  // Emits single-line JSON parseable by Datadog, Elasticsearch, or CloudWatch:
  console.log(JSON.stringify(logEntry));
}

const reqId = crypto.randomUUID();
structuredLog("info", "Payment processed successfully", {
  requestId: reqId,
  userId: 8421,
  amount: 250.0
});

// Output:
// {"timestamp":"2026-09-26T...","level":"info","message":"Payment processed successfully","pid":...,"requestId":"...","userId":8421,"amount":250}`,
      caption: {
        en: 'Structured JSON logs with correlation IDs enable instant automated querying in log aggregators.',
        bn: 'কোরিলেশন আইডিসহ JSON লগ ক্লাউড সিস্টেমে মুহূর্তের মধ্যে এরর ট্রেস করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Handling uncaughtException & The Crash-Fast Rule', bn: '৯. uncaughtException ও ক্র্যাশ-ফাস্ট কৌশল' } },
    {
      type: 'para',
      text: {
        en: 'When a synchronous unhandled exception or unhandled promise rejection occurs, the process state becomes corrupted. Attempting to keep running after an uncaughtException can lead to memory leaks and invalid database mutations. The official Node.js best practice is to log the error, release critical resources, and crash immediately (process.exit(1)), letting the process manager restart a clean instance.',
        bn: 'যখন কোনো কোডে অপ্রত্যাশিত এরর ঘটে যা কোথাও ক্যাচ করা হয়নি (uncaughtException), তখন অ্যাপের অভ্যন্তরীণ মেমরি দূষিত হয়ে যায়। এমন অবস্থায় অ্যাপ চালিয়ে রাখলে ডেটাবেস নষ্ট হতে পারে। Node.js-এর স্ট্যান্ডার্ড নিয়ম হলো এররটি লগ করে সাথে সাথে অ্যাপ বন্ধ (process.exit(1)) করে দেওয়া এবং PM2 বা ডকারকে নতুন পরিচ্ছন্ন অ্যাপ চালু করতে দেওয়া।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `process.on("uncaughtException", (err) => {
  console.error("FATAL: Uncaught exception encountered!", err.stack);
  // Perform emergency cleanup:
  // db.disconnect();
  // Crash fast! Let PM2 / Kubernetes boot a fresh instance:
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("CRITICAL: Unhandled promise rejection:", reason);
  process.exit(1);
});

console.log("Crash-fast listeners protect application state from corrupted memory");
// Output: Crash-fast listeners protect application state from corrupted memory`,
      caption: {
        en: 'Crashing fast upon uncaught exceptions allows container orchestrators to recover cleanly.',
        bn: 'আনহ্যান্ডেল্ড এক্সেপশনে ক্র্যাশ-ফাস্ট নীতি দূষিত মেমরি থেকে ডাটাবেস রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Performance Profiling: Heapdumps & Diagnostics', bn: '১০. পারফরম্যান্স প্রোফাইলিং: হিপডাম্প ও মেমরি ডায়াগনস্টিকস' } },
    {
      type: 'para',
      text: {
        en: 'When an application experiences slow memory leaks in production, taking a V8 Heap Snapshot captures all allocated JavaScript objects in memory. You can generate snapshots using the native "v8" module (v8.writeHeapSnapshot()), and inspect the resulting .heapsnapshot file inside Chrome DevTools Memory panel to pinpoint object leaks.',
        bn: 'প্রোডাকশনে মেমরি লিক হলে V8 Heap Snapshot ব্যবহার করে মেমরির সব অবজেক্ট ডিস্কে সেভ করা যায়। নেটিভ "v8" মডিউলের v8.writeHeapSnapshot() ফাংশন দিয়ে এই স্ন্যাপশট ফাইল তৈরি করা হয় এবং ক্রোম ডেভটুলসের Memory ট্যাবে ফাইলটি ওপেন করে কোন অবজেক্টটি মেমরি খালি হতে দিচ্ছে না তা শনাক্ত করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import v8 from "v8";

function inspectProcessMemory() {
  const mem = process.memoryUsage();
  console.log("Heap Used (MB):", (mem.heapUsed / 1024 / 1024).toFixed(2));
  console.log("Heap Total (MB):", (mem.heapTotal / 1024 / 1024).toFixed(2));
  console.log("RSS Resident Memory (MB):", (mem.rss / 1024 / 1024).toFixed(2));
  
  // In production diagnostics:
  // const snapshotPath = v8.writeHeapSnapshot();
  // console.log("Heap snapshot saved for DevTools inspection:", snapshotPath);
}

inspectProcessMemory();
// Output:
// Heap Used (MB): ~45.20
// Heap Total (MB): ~55.00
// RSS Resident Memory (MB): ~85.40`,
      caption: {
        en: 'process.memoryUsage() and v8.writeHeapSnapshot() diagnose slow memory leaks.',
        bn: 'process.memoryUsage() ও হিপডাম্প মেমরি অপচয় ও লিক শনাক্ত করার প্রধান হাতিয়ার।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-prd-ex1',
      kind: 'predict',
      topic: 'node: polite shutdown signal',
      question: {
        en: 'Which standard POSIX termination signal is sent by Docker and Kubernetes to request a polite graceful shutdown from a Node.js process?',
        bn: 'Node.js প্রসেসকে শান্তভাবে গ্রেসফুল শাটডাউন করার সংকেত হিসেবে ডকার ও কুবারনেটিস কোন স্ট্যান্ডার্ড POSIX সিগন্যালটি পাঠায়?'
      },
      code: `/* Capturing orchestrator termination signal */
/* process.on("____________", () => { gracefulShutdown(); }); */`,
      answer: 'SIGTERM',
      accept: ['SIGTERM', 'sigterm'],
      hint: {
        en: 'Standard signal termination.',
        bn: 'স্ট্যান্ডার্ড সিগন্যাল টার্মিনেশন।'
      },
      explanation: {
        en: 'SIGTERM is the standard signal sent by container orchestrators to instruct a process to stop accepting work and terminate cleanly.',
        bn: 'SIGTERM সিগন্যাল পাঠিয়ে ক্লাউড প্ল্যাটফর্মগুলো সার্ভারকে নিরাপদভাবে কাজ গুটিয়ে বন্ধ হওয়ার নির্দেশ দেয়।'
      }
    },
    {
      id: 'nod-prd-ex2',
      kind: 'mcq',
      topic: 'node: multi-core scaling module',
      question: {
        en: 'Which built-in Node.js module enables an application to fork multiple worker processes across CPU cores while sharing a single TCP server port?',
        bn: 'কোন বিল্ট-ইন Node.js মডিউলের মাধ্যমে একটিমাত্র TCP পোর্ট ব্যবহার করে সব CPU কোরে একাধিক ওয়ার্কার প্রসেস চালানো যায়?'
      },
      options: [
        { en: 'cluster', bn: 'cluster' },
        { en: 'child_process', bn: 'child_process' },
        { en: 'worker_threads', bn: 'worker_threads' },
        { en: 'dns', bn: 'dns' }
      ],
      answer: 0,
      hint: {
        en: 'The cluster module.',
        bn: 'ক্লাস্টার মডিউল।'
      },
      explanation: {
        en: 'The cluster module allows easy creation of child processes that all share identical server ports, scaling across multi-core systems.',
        bn: 'cluster মডিউল একটিমাত্র পোর্ট শেয়ার করে একাধিক সিপিইউ কোরে অ্যাপ্লিকেশন স্কেল করার সুবিধা দেয়।'
      }
    },
    {
      id: 'nod-prd-ex3',
      kind: 'mcq',
      topic: 'node: Docker security best practice',
      question: {
        en: 'Why should Node.js Docker containers switch to the unprivileged "USER node" instead of running as the default root user?',
        bn: 'Node.js ডকার কন্টেইনারে ডিফল্ট রুট ইউজারের পরিবর্তে কেন নন-রুট "USER node" চালানো উচিত?'
      },
      options: [
        { en: 'To enforce the principle of least privilege and prevent attackers from compromising the host server during a container breakout', bn: 'ন্যূনতম অধিকারের নিরাপত্তা নীতি বজায় রাখতে এবং কন্টেইনার হ্যাক হলে মূল সার্ভারকে নিরাপদ রাখতে' },
        { en: 'Because root user cannot install npm packages', bn: 'কারণ রুট ইউজার npm প্যাকেজ চালাতে পারে না' },
        { en: 'Because Docker fails to boot with root user', bn: 'কারণ ডকার রুটে চলে না' },
        { en: 'It reduces internet bandwidth costs', bn: 'ইন্টারনেট খরচ কমায়' }
      ],
      answer: 0,
      hint: {
        en: 'Security principle of least privilege.',
        bn: 'ন্যূনতম সুবিধার নিরাপত্তা নীতি।'
      },
      explanation: {
        en: 'Running as non-root mitigates container breakout vulnerabilities by preventing attackers from gaining host root permissions if the app is compromised.',
        bn: 'নন-রুট ইউজার হিসেবে অ্যাপ চালালে অ্যাপ্লিকেশনে কোনো নিরাপত্তা ত্রুটি থাকলেও আক্রমণকারী হোস্ট সার্ভারের রুট অ্যাক্সেস পায় না।'
      }
    }
  ],
  quiz: {
    id: 'nod-prd-quiz',
    title: { en: 'Node.js Production Engineering Quiz', bn: 'Node.js প্রোডাকশন ইঞ্জিনিয়ারিং কুইজ' },
    questions: [
      {
        id: 'npq1',
        kind: 'mcq',
        topic: 'node: liveness vs readiness probes',
        question: {
          en: 'What is the operational difference between a Kubernetes Liveness probe and a Readiness probe?',
          bn: 'কুবারনেটিসে Liveness প্রোব এবং Readiness প্রোবের মধ্যে প্রায়োগিক পার্থক্য কী?'
        },
        options: [
          { en: 'Liveness determines if the container should be killed and restarted; Readiness determines if the container is ready to receive network traffic', bn: 'Liveness ঠিক করে কন্টেইনারকে মেরে রিস্টার্ট দিতে হবে কি না; Readiness ঠিক করে কন্টেইনারটি ব্যবহারকারীর ট্রাফিক নিতে প্রস্তুত কি না' },
          { en: 'They are completely identical synonyms', bn: 'এরা দুটি সম্পূর্ণ একই জিনিস' },
          { en: 'Readiness runs only once on install; Liveness runs only on shutdown', bn: 'Readiness শুধু ইনস্টলের সময় একবার চলে' },
          { en: 'Liveness measures CPU temperature', bn: 'Liveness সিপিইউর তাপমাত্রা মাপে' }
        ],
        answer: 0,
        hint: {
          en: 'Restart vs routing traffic.',
          bn: 'রিস্টার্ট বনাম ট্রাফিক গ্রহণ।'
        },
        explanation: {
          en: 'Liveness checks if the process is stuck (restarting it if failed), while Readiness checks if dependencies are ready before routing user traffic to it.',
          bn: 'Liveness যাচাই করে প্রসেস জীবিত কি না, আর Readiness যাচাই করে ডাটাবেস প্রস্তুত হয়ে ট্রাফিক গ্রহণের উপযোগী হয়েছে কি না।'
        }
      },
      {
        id: 'npq2',
        kind: 'mcq',
        topic: 'node: uncaughtException crash-fast rationale',
        question: {
          en: 'Why is it considered best practice to deliberately crash the process (process.exit(1)) after logging an uncaughtException in Node.js?',
          bn: 'Node.js-এ কোনো uncaughtException লগ করার পর কেন সাথে সাথে অ্যাপ বন্ধ (process.exit(1)) করাকে বেস্ট প্র্যাকটিস বলা হয়?'
        },
        options: [
          { en: 'Because an uncaught exception leaves the application memory and event loop in an unpredictable, corrupted state', bn: 'কারণ কোনো আনহ্যান্ডেল্ড এরর পুরো অ্যাপ্লিকেশনের মেমরি ও স্টেটকে অনিশ্চিত ও দূষিত অবস্থায় রেখে দেয়' },
          { en: 'Because Node.js will automatically delete the database if it stays open', bn: 'কারণ ডাটাবেস মুছে যায়' },
          { en: 'Because JavaScript stops supporting variables after an error', bn: 'কারণ ভ্যারিয়েবল কাজ করে না' },
          { en: 'Because npm licenses require an exit on error', bn: 'লাইসেন্সের কারণে' }
        ],
        answer: 0,
        hint: {
          en: 'Corrupted process state requires clean restart.',
          bn: 'দূষিত মেমরি এড়াতে পরিচ্ছন্ন রিস্টার্ট দরকার।'
        },
        explanation: {
          en: 'By definition, an uncaughtException means the code was in an unexpected state. Continuing execution risks data corruption and silent cascading bugs.',
          bn: 'আনহ্যান্ডেল্ড এরর ঘটা মানে অ্যাপ অনির্ধারিত অবস্থায় চলে গেছে। এটি চলতে দিলে ডাটাবেসের তথ্য নষ্ট হওয়ার মারাত্মক ঝুঁকি তৈরি হয়।'
        }
      },
      {
        id: 'npq3',
        kind: 'mcq',
        topic: 'node: graceful shutdown sigterm sigint',
        question: {
          en: 'What is the primary operational objective of listening for POSIX SIGTERM and SIGINT signals in production Node.js applications?',
          bn: 'প্রোডাকশন Node.js অ্যাপ্লিকেশনে POSIX SIGTERM ও SIGINT সিগন্যাল হ্যান্ডল করার মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To perform graceful shutdown: stop accepting new requests, finish in-flight requests, close database connections, and exit cleanly', bn: 'গ্রেসফুল শাটডাউন সম্পাদন করা: নতুন রিকোয়েস্ট বন্ধ করা, চলমান কাজ শেষ করা, ডাটাবেস সংযোগ বন্ধ করা ও ক্লিন এক্সিট' },
          { en: 'To immediately terminate the process without warning', bn: 'কোনো নোটিশ ছাড়া তাৎক্ষণিক প্রক্রিয়া বন্ধ করা' },
          { en: 'To reboot the host virtual machine', bn: 'হোস্ট ভার্চুয়াল মেশিন রিবুট করা' },
          { en: 'To delete application log files', bn: 'অ্যাপ্লিকেশন লগ ফাইল মুছে দেওয়া' }
        ],
        answer: 0,
        hint: {
          en: 'Clean resource release and zero lost requests.',
          bn: 'রিসোর্স পরিচ্ছন্নভাবে বন্ধ করা ও রিকোয়েস্ট ডাটা রক্ষা।'
        },
        explanation: {
          en: 'Graceful shutdown allows active HTTP connections to complete and safely disposes database pools and redis clients, preventing corrupted states.',
          bn: 'গ্রেসফুল শাটডাউন নিশ্চিত করে যে চলমান রিকোয়েস্টগুলো সম্পন্ন হয়েছে এবং ডাটাবেস সংযোগগুলো নিরাপদে বন্ধ হয়েছে।'
        }
      },
      {
        id: 'npq4',
        kind: 'mcq',
        topic: 'node: cluster module multi-core scaling',
        question: {
          en: 'How does the native Node.js "cluster" module achieve horizontal scaling across multiple CPU cores on a single server?',
          bn: 'একটি সার্ভারে মাল্টি-কোর সিপিইউ ব্যবহারের জন্য নেটিভ Node.js "cluster" মডিউল কীভাবে কাজ করে?'
        },
        options: [
          { en: 'It forks multiple child worker processes that share the same server TCP port using round-robin master load distribution', bn: 'মাস্টার প্রসেসের মাধ্যমে একই পোর্ট শেয়ার করে একাধিক চাইল্ড ওয়ার্কার প্রসেস ফর্ক করে ট্রাফিক ভাগ করে দেয়' },
          { en: 'It runs multithreaded JavaScript on a single shared memory stack', bn: 'একটি শেয়ার্ড মেমরিতে মাল্টিথ্রেডেড জাভাস্ক্রিপ্ট চালায়' },
          { en: 'It re-architects Node.js into a C++ compiler', bn: 'Node.js-কে সি++ কম্পাইলারে রূপান্তর করে' },
          { en: 'It distributes requests to external cloud servers automatically', bn: 'বাইরের সার্ভারে ট্রাফিক পাঠায়' }
        ],
        answer: 0,
        hint: {
          en: 'Master process forks worker processes sharing the port.',
          bn: 'মাস্টার প্রসেস পোর্ট শেয়ার করে একাধিক ওয়ার্কার ফর্ক করে।'
        },
        explanation: {
          en: 'The cluster module creates multiple isolated Node processes (one per CPU core) that multiplex incoming client connections over a single TCP port.',
          bn: 'ক্লাস্টার মডিউল প্রতিটি সিপিইউ কোরের জন্য আলাদা নোড প্রসেস ফর্ক করে এবং মাস্টার প্রসেস এদের মধ্যে ট্রাফিক বণ্টন করে।'
        }
      }
    ]
  }
};
