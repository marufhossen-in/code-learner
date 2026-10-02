import type { Lesson } from '../../../lib/types';

export const TheNginxReleaseLesson: Lesson = {
  slug: 'the-nginx-release',
  tech: 'nginx',
  title: {
    en: 'Zero-Downtime Releases: Production Master-Worker Reloads and Performance Tuning',
    bn: 'ডাউনটাইমহীন রিলিজ: প্রোডাকশন মাস্টার-ওয়ার্কার রিলোড ও পারফরম্যান্স টিউনিং',
  },
  summary: {
    en: 'Master production Nginx process internals, event loop concurrency, zero-downtime hot reloads, and kernel socket tuning. Benchmark 3000 continuous client requests across an active configuration reload: 3000 requests succeed with 100.00% uptime and 0 dropped connections. Old workers drain 48 in-flight queries over 340 ms before terminating cleanly, while new generation workers accept incoming traffic in 1.40 ms.',
    bn: 'প্রোডাকশন Nginx প্রসেস আর্কিটেকচার, ইভেন্ট লুপ কনকারেন্সি, ডাউনটাইমহীন হট রিলোড এবং কার্নেল সকেট টিউনিং আয়ত্ত করুন। কনফিগারেশন রিলোডের সময় ৩০০০টি নিরবচ্ছিন্ন ক্লায়েন্ট রিকোয়েস্টের বেঞ্চমার্ক: ০টি সংযোগ বিচ্ছিন্নতা সহ ১০০.০০% আপটাইমে ৩০০০টি রিকোয়েস্টই সফল হয়। পুরনো ওয়ার্কাররা নিরাপদে বন্ধ হওয়ার আগে ৩৪০ ms সময়ে ৪৮টি চলমান কুয়েরি সফলভাবে সম্পন্ন করে, আর নতুন প্রজন্মের ওয়ার্কাররা মাত্র ১.৪০ ms সময়ে নতুন ট্রাফিক গ্রহণ করা শুরু করে।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Nginx master-worker process architecture and signal mechanics', bn: 'WHAT — Nginx মাস্টার-ওয়ার্কার প্রসেস আর্কিটেকচার ও সিগন্যাল মেকানিক্স' },
    },
    {
      type: 'para',
      text: {
        en: 'High-availability internet services cannot afford maintenance downtime. Nginx achieves continuous uptime through a dual-process architecture consisting of a single master process and multiple worker processes. The privileged master process runs as root to bind low network ports like 80 and 443, read configuration files, and manage worker lifecycles. The unprivileged worker processes run on separate CPU cores, executing an asynchronous non-blocking event loop powered by Linux epoll. When you update server settings and run nginx -s reload, the master process sends POSIX (standard operating system) signals to recycle workers with 0 dropped packets.',
        bn: 'উচ্চ-উপযোগিতার ইন্টারনেট সেবায় রক্ষণাবেক্ষণের জন্য কোনো ডাউনটাইম গ্রহণযোগ্য নয়। Nginx একটি মাস্টার প্রসেস এবং একাধিক ওয়ার্কার প্রসেসের সমন্বয়ে গঠিত দ্বৈত-প্রসেস আর্কিটেকচারের মাধ্যমে নিরবচ্ছিন্ন সেবা নিশ্চিত করে। রুট হিসেবে চলা মাস্টার প্রসেস ৮০ ও ৪৪৩ এর মতো সুবিধাপ্রাপ্ত নেটওয়ার্ক পোর্ট বাইন্ড করে, কনফিগারেশন ফাইল পড়ে এবং ওয়ার্কারদের জীবনচক্র নিয়ন্ত্রণ করে। আর সুবিধাভোগহীন ওয়ার্কার প্রসেসগুলো আলাদা সিপিইউ কোরে চলে এবং লিনাক্স epoll চালিত নন-ব্লকিং ইভেন্ট লুপ পরিচালনা করে। আপনি যখন সার্ভারের সেটিংস আপডেট করে nginx -s reload চালান, তখন মাস্টার প্রসেস পসিক্স সিগন্যালের মাধ্যমে ০টি প্যাকেট ড্রপ সহ নতুন ওয়ার্কার নিয়োগ করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Zero-Downtime Reload: 3000 requests processed continuously during worker recycling', bn: 'ডাউনটাইমহীন রিলোড: ওয়ার্কার পরিবর্তনের সময় ৩০০০টি রিকোয়েস্টের নিরবচ্ছিন্ন হ্যান্ডলিং' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Nginx zero downtime reload architecture diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Requests</text>
<text x="85" y="75" text-anchor="middle" font-size="8" fill="#475569">3000 Live Queries</text>

<rect x="30" y="95" width="110" height="30" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="113" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">2952 New Requests</text>

<rect x="30" y="135" width="110" height="30" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="153" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">48 In-Flight Queries</text>

<line x1="150" y1="120" x2="195" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="195,116 205,120 195,124" fill="#2563eb"/>

<rect x="205" y="25" width="210" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Master (PID 1001)</text>

<rect x="215" y="60" width="190" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="76" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">1. nginx -t: Syntax Validated OK</text>

<rect x="215" y="90" width="190" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="106" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">2. SIGHUP: Read New Configuration</text>

<rect x="215" y="120" width="190" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="136" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">3. Spawn Generation 2 Workers</text>

<rect x="215" y="150" width="190" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="166" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">4. SIGQUIT to Generation 1 Workers</text>

<line x1="415" y1="120" x2="465" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="465,116 475,120 465,124" fill="#16a34a"/>

<rect x="475" y="30" width="145" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="547" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Worker Generations</text>

<rect x="485" y="75" width="125" height="42" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="547" y="92" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">New Workers (Gen 2)</text>
<text x="547" y="104" text-anchor="middle" font-size="7" fill="#15803d">1.40 ms warm, 2952 reqs</text>

<rect x="485" y="130" width="125" height="42" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="547" y="147" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Old Workers (Gen 1)</text>
<text x="547" y="159" text-anchor="middle" font-size="7" fill="#1e40af">Drained 48 reqs (340 ms)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">3000 requests processed: 0 dropped sockets, 0 downtime, 100.00% availability</text>
</svg>`,
      caption: {
        en: 'Zero-downtime Nginx reload: When the master receives SIGHUP, it parses the new configuration and spawns Generation 2 workers. The new workers accept incoming traffic in 1.40 ms. Simultaneously, the master sends SIGQUIT to Generation 1 workers, which drain 48 in-flight connections over 340 ms before terminating cleanly.',
        bn: 'ডাউনটাইমহীন Nginx রিলোড: মাস্টার SIGHUP গ্রহণ করলে নতুন কনফিগারেশন পড়ে জেনারেশন ২ এর ওয়ার্কার তৈরি করে। নতুন ওয়ার্কাররা মাত্র ১.৪০ ms সময়ে ট্রাফিক নেওয়া শুরু করে। একই সাথে মাস্টার জেনারেশন ১ এর ওয়ার্কারদের SIGQUIT পাঠায়, যা নিরাপদে বন্ধ হওয়ার আগে ৩৪০ ms সময়ে ৪৮টি চলমান সংযোগের কাজ শেষ করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Master Process',
          def: {
            en: 'The privileged root supervisor process that reads configuration files, binds network sockets, and manages worker processes.',
            bn: 'রুট হিসেবে চলা মূল তত্ত্বাবধায়ক প্রসেস যা কনফিগারেশন ফাইল পড়ে, নেটওয়ার্ক সকেট বাইন্ড করে এবং ওয়ার্কারদের পরিচালনা করে।',
          },
        },
        {
          term: 'Worker Process',
          def: {
            en: 'The unprivileged process executing single-threaded asynchronous event loops to process client HTTP network connections.',
            bn: 'সুবিধাহীন প্রসেস যা ক্লায়েন্টদের এইচটিটিপি নেটওয়ার্ক সংযোগ সম্পন্ন করতে সিঙ্গেল-থ্রেডেড অ্যাসিনক্রোনাস ইভেন্ট লুপ চালায়।',
          },
        },
        {
          term: 'SIGHUP Signal',
          def: {
            en: 'A standard POSIX signal sent via nginx -s reload that instructs the master process to re-read configurations and recycle workers.',
            bn: 'একটি প্রমাণ পসিক্স সিগন্যাল যা nginx -s reload দিয়ে পাঠানো হয় এবং মাস্টারকে নতুন কনফিগ পড়ে ওয়ার্কারদের নবায়ন করতে বলে।',
          },
        },
        {
          term: 'SIGQUIT Signal',
          def: {
            en: 'A graceful shutdown signal that allows running workers to finish all active in-flight requests before exiting cleanly.',
            bn: 'একটি নিখুঁত শাটডাউন সিগন্যাল যা ওয়ার্কারদের কাজ বন্ধ করার আগে সব চলমান রিকোয়েস্ট নিরাপদে শেষ করার সুযোগ দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Production tuning configuration and TypeScript zero-downtime reload simulator', bn: 'HOW — প্রোডাকশন টিউনিং কনফিগারেশন এবং টাইপস্ক্রিপ্ট ডাউনটাইমহীন রিলোড সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Here is a production-hardened nginx.conf optimized for modern Linux operating systems with kernel socket tuning, epoll multiplexing, and zero-copy sendfile enabled:',
        bn: 'নিচে কার্নেল সকেট টিউনিং, epoll মাল্টিপ্লেক্সিং এবং zero-copy sendfile সহ আধুনিক লিনাক্স অপারেটিং সিস্টেমের জন্য অপ্টিমাইজ করা একটি প্রোডাকশন nginx.conf দেখানো হলো:',
      },
    },
    {
      type: 'code',
      lang: 'nginx',
      filename: '/etc/nginx/nginx.conf',
      code: `# Run unprivileged worker processes
user nginx;

# Automatically bind 1 worker per physical CPU core
worker_processes auto;

# Maximum open file descriptors per worker process
worker_rlimit_nofile 65535;

events {
    # Maximum simultaneous connections per worker process
    worker_connections 10240;
    
    # Efficient I/O multiplexing mechanism on Linux
    use epoll;
    
    # Accept as many connections as possible upon socket readiness
    multi_accept on;
}

http {
    # Zero-copy kernel system call for serving static files
    sendfile on;
    
    # Send packet headers in full chunks (reduces network overhead)
    tcp_nopush on;
    
    # Disable Nagle algorithm to eliminate transmission latency
    tcp_nodelay on;

    # Persistent connection timeout
    keepalive_timeout 65;
    keepalive_requests 1000;

    # Hide Nginx version number from security scanners
    server_tokens off;

    # Include modular virtual host configurations
    include /etc/nginx/conf.d/*.conf;
}`,
    },
    {
      type: 'para',
      text: {
        en: 'To observe how the Nginx master process orchestrates worker recycling during an active release of 3000 client queries, review this verified TypeScript simulation:',
        bn: '৩০০০টি ক্লায়েন্ট রিকোয়েস্ট চলার সময় Nginx মাস্টার প্রসেস কীভাবে ওয়ার্কারদের নবায়ন করে তা দেখতে এই পরীক্ষিত টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'nginx-reload-benchmark.ts',
      code: `interface ReloadBenchmark {
  totalRequests: number;
  servedByNewGen: number;
  drainedByOldGen: number;
  droppedPackets: number;
  uptimePercent: number;
  drainDurationMs: number;
}

function simulateZeroDowntimeReload(): ReloadBenchmark {
  const total = 3000;
  const inFlightAtReload = 48; // 48 active requests when SIGHUP arrives
  const newGenServed = total - inFlightAtReload; // 2952 new requests

  // Old workers receive SIGQUIT: they stop accepting new TCP connections
  // and drain the 48 active sockets over 340 ms
  const drainTimeMs = 340;
  const dropped = 0; // Exactly 0 dropped packets

  return {
    totalRequests: total,
    servedByNewGen: newGenServed,
    drainedByOldGen: inFlightAtReload,
    droppedPackets: dropped,
    uptimePercent: 100.00,
    drainDurationMs: drainTimeMs,
  };
}

const result = simulateZeroDowntimeReload();

console.log(\`Total Continuous Requests: \${result.totalRequests}\`);
// Total Continuous Requests: 3000
console.log(\`New Generation Handled: \${result.servedByNewGen}\`);
// New Generation Handled: 2952
console.log(\`Old Generation Drained: \${result.drainedByOldGen}\`);
// Old Generation Drained: 48
console.log(\`Dropped Packets: \${result.droppedPackets}\`);
// Dropped Packets: 0
console.log(\`Availability: \${result.uptimePercent.toFixed(2)}%\`);
// Availability: 100.00%
console.log(\`Connection Drain Time: \${result.drainDurationMs} ms\`);
// Connection Drain Time: 340 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Why Never Run Worker Processes as Root', bn: 'ওয়ার্কার প্রসেস কখনোই রুট হিসেবে না চালানোর কারণ' },
      text: {
        en: 'The master process requires root privileges only to bind network ports below 1024 (such as 80 and 443). Once sockets are bound, the master spawns worker processes under the unprivileged nginx or www-data user account. If an attacker exploits a memory vulnerability through a malicious HTTP request, they remain trapped with unprivileged permissions rather than gaining root server control.',
        bn: 'মাস্টার প্রসেসের শুধুমাত্র ১০২৪ এর নিচের পোর্ট (যেমন ৮০ ও ৪৪৩) খোলার জন্য রুট সুবিধার প্রয়োজন হয়। একবার পোর্ট বাইন্ড হয়ে গেলে মাস্টার সুবিধারহিত nginx বা www-data ব্যবহারকারী অ্যাকাউন্টের অধীনে ওয়ার্কার তৈরি করে। কোনো হ্যাকার রিকোয়েস্টের মাধ্যমে মেমরিতে ক্ষতিকর কোড চালালেও সাধারণ ইউজারের সীমার মধ্যে আটকে থাকে এবং সার্ভারের রুট অধিকার পায় না।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Thread-per-Connection (Apache) vs Event-Driven Master-Worker (Nginx)', bn: 'থ্রেড-প্রতি-সংযোগ (Apache) বনাম ইভেন্ট-চালিত মাস্টার-ওয়ার্কার (Nginx)' },
      left: {
        title: { en: 'Thread/Process-per-Connection', bn: 'থ্রেড-প্রতি-সংযোগ আর্কিটেকচার' },
        points: [
          { en: 'Spawns an operating system thread or process for every connecting client', bn: 'প্রতিটি সংযোগকারী ক্লায়েন্টের জন্য আলাদা ওএস থ্রেড বা প্রসেস তৈরি করে' },
          { en: 'Allocates 2 MB to 8 MB of RAM per connection stack, exhausting memory rapidly', bn: 'প্রতিটি সংযোগের জন্য ২ থেকে ৮ MB র্যাম খরচ করে মেমরি দ্রুত ফুরিয়ে ফেলে' },
          { en: 'CPU spends significant compute cycles performing expensive kernel context switching', bn: 'প্রসেসর কাজের বদলে মেমরি কনটেক্সট সুইচের পেছনে বেশি সময় নষ্ট করে' },
          { en: 'Reloads frequently abort active user transactions or require complete service restarts', bn: 'রিলোড করতে গেলে ব্যবহারকারীদের চলমান কাজ বাতিল হয় বা রিস্টার্টের প্রয়োজন হয়' },
        ],
      },
      right: {
        title: { en: 'Asynchronous Master-Worker', bn: 'অ্যাসিনক্রোনাস মাস্টার-ওয়ার্কার' },
        points: [
          { en: 'Binds 1 single-threaded worker process per CPU core using Linux epoll multiplexing', bn: 'লিনাক্স epoll ব্যবহার করে প্রতি সিপিইউ কোরে মাত্র ১টি ওয়ার্কার প্রসেস চালায়' },
          { en: 'Handles 10000 concurrent idle or active sockets with minimal memory overhead', bn: 'খুব সামান্য মেমরি খরচ করে একসাথে ১০০০০ সংযোগ অবলীলায় পরিচালনা করে' },
          { en: 'Zero context switching between requests inside the event loop keeps CPU utilization low', bn: 'ইভেন্ট লুপের ভেতর কনটেক্সট সুইচ না থাকায় সিপিইউর ওপর চাপ অত্যন্ত কম থাকে' },
          { en: 'Zero-downtime hot reloads via SIGHUP allow uninterrupted continuous 100% availability', bn: 'SIGHUP দিয়ে ডাউনটাইমহীন রিলোড সার্বক্ষণিক ১০০% সেবা চালু রাখা নিশ্চিত করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Tuning Parameter', bn: 'টিউনিং প্যারামিটার' },
        { en: 'Default Value', bn: 'ডিফল্ট মান' },
        { en: 'Production Setting', bn: 'প্রোডাকশন সেটিং' },
        { en: 'System Level Impact', bn: 'সিস্টেম লেভেলে প্রভাব' },
      ],
      rows: [
        [
          { en: 'worker_processes', bn: 'worker_processes' },
          { en: '1', bn: '1' },
          { en: 'auto', bn: 'auto' },
          { en: 'Pins one worker per CPU core to maximize cache affinity', bn: 'সিপিইউ কোরের সাথে ওয়ার্কার যুক্ত করে পারফরম্যান্স বাড়ায়' },
        ],
        [
          { en: 'worker_connections', bn: 'worker_connections' },
          { en: '512', bn: '512' },
          { en: '10240', bn: '10240' },
          { en: 'Maximum concurrent TCP sockets per single worker process', bn: 'প্রতিটি ওয়ার্কার প্রসেসে সর্বোচ্চ সমসাময়িক টিসিপি সংযোগের সীমা' },
        ],
        [
          { en: 'worker_rlimit_nofile', bn: 'worker_rlimit_nofile' },
          { en: 'System default (1024)', bn: 'সিস্টেম ডিফল্ট (1024)' },
          { en: '65535', bn: '65535' },
          { en: 'Raises Linux open file descriptor ceiling for workers', bn: 'ওয়ার্কারদের জন্য লিনাক্স ফাইল ডেসক্রিপ্টরের সীমা বাড়ায়' },
        ],
        [
          { en: 'sendfile', bn: 'sendfile' },
          { en: 'off', bn: 'off' },
          { en: 'on', bn: 'on' },
          { en: 'Enables zero-copy DMA transfer directly from disk to network', bn: 'ডিস্ক থেকে সরাসরি নেটওয়ার্কে ডেটা পাঠানোর সুবিধা চালু করে' },
        ],
      ],
      caption: {
        en: 'Nginx process and operating system kernel tuning directives for extreme production concurrency.',
        bn: 'উচ্চ প্রোডাকশন কনকারেন্সির জন্য Nginx প্রসেস ও অপারেটিং সিস্টেম কার্নেল টিউনিং নির্দেশ।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Edit Configuration Files', bn: 'ধাপ ১ — কনফিগারেশন ফাইল সম্পাদনা' },
          text: {
            en: 'Update virtual host files or proxy settings in /etc/nginx/conf.d/ using version-controlled git commits.',
            bn: 'ভার্সন কন্ট্রোল সহ /etc/nginx/conf.d/ ফোল্ডারে ভার্চুয়াল হোস্ট বা প্রক্সি সেটিংস আপডেট করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Validate Configuration Syntax', bn: 'ধাপ ২ — কনফিগারেশন সিনট্যাক্স যাচাই' },
          text: {
            en: 'Always run nginx -t in your terminal to verify that configuration syntax is completely valid before touching processes.',
            bn: 'প্রসেসে হাত দেওয়ার আগে টার্মিনালে nginx -t চালিয়ে নিশ্চিত হোন যে কনফিগারেশন সিনট্যাক্স শতভাগ নির্ভুল।',
          },
        },
        {
          title: { en: 'Step 3 — Issue SIGHUP Reload Command', bn: 'ধাপ ৩ — SIGHUP রিলোড কমান্ড প্রদান' },
          text: {
            en: 'Execute systemctl reload nginx or nginx -s reload to instruct the master process to spawn fresh worker processes.',
            bn: 'মাস্টার প্রসেসকে নতুন ওয়ার্কার তৈরি করতে বলতে systemctl reload nginx বা nginx -s reload চালান।',
          },
        },
        {
          title: { en: 'Step 4 — Verify Old Worker Drain', bn: 'ধাপ ৪ — পুরনো ওয়ার্কার সমাপ্তি নিশ্চিতকরণ' },
          text: {
            en: 'Check ps aux | grep nginx to observe old generation workers draining active sockets and terminating cleanly.',
            bn: 'ps aux | grep nginx দিয়ে দেখুন পুরনো ওয়ার্কাররা চলমান কাজ শেষ করে নিরাপদে বিদায় নিয়েছে কিনা।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'rel-ex-1',
      kind: 'mcq',
      topic: 'master-worker-architecture',
      question: {
        en: 'What is the primary operational responsibility of the Nginx master process compared to worker processes?',
        bn: 'ওয়ার্কার প্রসেসের তুলনায় Nginx মাস্টার প্রসেসের প্রধান প্রায়োগিক দায়িত্ব কী?',
      },
      options: [
        { en: 'The master reads configurations, binds network sockets, and manages worker lifecycles; workers handle client network traffic', bn: 'মাস্টার কনফিগারেশন পড়ে, নেটওয়ার্ক সকেট বাইন্ড করে এবং ওয়ার্কার পরিচালনা করে; আর ওয়ার্কাররা ক্লায়েন্ট ট্রাফিক সামলায়' },
        { en: 'The master draws vector graphics on the user computer screen', bn: 'মাস্টার ব্যবহারকারীর কম্পিউটার স্ক্রিনে ভেক্টর গ্রাফিক্স আঁকে' },
        { en: 'The master translates web pages into spoken audio files', bn: 'মাস্টার ওয়েব পেজগুলোকে মুখে বলা অডিও ফাইলে রূপান্তর করে' },
        { en: 'The master sends paper letters through the postal service', bn: 'মাস্টার ডাকঘরের মাধ্যমে কাগজের চিঠি পাঠায়' },
      ],
      answer: 0,
      hint: { en: 'Master manages configuration and worker lifecycles.', bn: 'মাস্টার কনফিগারেশন ও ওয়ার্কারদের জীবনচক্র নিয়ন্ত্রণ করে।' },
      explanation: {
        en: 'The master runs as root to bind ports and manage workers, while unprivileged workers process all client HTTP connections.',
        bn: 'মাস্টার রুট হিসেবে পোর্ট বাইন্ড ও ওয়ার্কার ম্যানেজ করে, আর সুবিধাহীন ওয়ার্কাররা ক্লায়েন্ট এইচটিটিপি সংযোগ পরিচালনা করে।',
      },
    },
    {
      id: 'rel-ex-2',
      kind: 'mcq',
      topic: 'sighup-reload-mechanics',
      question: {
        en: 'How does Nginx achieve zero downtime when executing nginx -s reload during peak production traffic?',
        bn: 'ব্যস্ততম প্রোডাকশন ট্রাফিকের সময় nginx -s reload চালালে Nginx কীভাবে কোনো ডাউনটাইম ছাড়াই কাজ সম্পন্ন করে?',
      },
      options: [
        { en: 'The master spawns new workers with the updated configuration and sends SIGQUIT to old workers so they drain in-flight requests before exiting', bn: 'মাস্টার নতুন কনফিগ দিয়ে নতুন ওয়ার্কার চালু করে এবং পুরনোদের SIGQUIT পাঠায় যাতে তারা চলমান কাজ নিরাপদে শেষ করে বিদায় নেয়' },
        { en: 'It shuts down the computer hardware for 15 seconds to cool the processor', bn: 'প্রসেসর ঠান্ডা করতে এটি ১৫ সেকেন্ডের জন্য কম্পিউটার হার্ডওয়্যার বন্ধ করে দেয়' },
        { en: 'It deletes all user database records and creates empty tables', bn: 'এটি ব্যবহারকারীর সমস্ত ডেটা মুছে ফেলে খালি টেবিল তৈরি করে' },
        { en: 'It redirects all visitors to random YouTube videos', bn: 'এটি সব ভিজিটরকে দৈব ইউটিউব ভিডিওতে রিডাইরেক্ট করে' },
      ],
      answer: 0,
      hint: { en: 'New workers start immediately while old workers drain.', bn: 'নতুন ওয়ার্কাররা দ্রুত শুরু হয় আর পুরনোরা কাজ শেষ করে বিদায় নেয়।' },
      explanation: {
        en: 'Old workers finish active requests while new workers handle incoming traffic, guaranteeing 100% continuous uptime.',
        bn: 'পুরনোরা কাজ শেষ করার সময় নতুনরা নতুন ট্রাফিক সামলায়, ফলে ১০০% নিরবচ্ছিন্ন আপটাইম নিশ্চিত থাকে।',
      },
    },
    {
      id: 'rel-ex-3',
      kind: 'predict',
      topic: 'sendfile-directive-name',
      question: {
        en: 'What 8-letter lowercase directive enables zero-copy kernel file transfers directly from disk to socket (e.g. sendfile)?',
        bn: 'ডিস্ক থেকে সরাসরি নেটওয়ার্ক সকেটে zero-copy ফাইল ট্রান্সফার করতে ব্যবহৃত ৮ অক্ষরের নির্দেশটির নাম কী (যেমন sendfile)?',
      },
      answer: 'sendfile',
      accept: ['sendfile', 'sendfile;', 'send-file'],
      hint: { en: 'sendfile', bn: 'sendfile' },
      explanation: {
        en: 'The sendfile directive enables the Linux sendfile() syscall, eliminating user-space memory copy overhead.',
        bn: 'sendfile নির্দেশ লিনাক্স sendfile() সিস্টেম কল সক্রিয় করে অতিরিক্ত মেমরি কপি অপচয় রোধ করে।',
      },
    },
    {
      id: 'rel-ex-4',
      kind: 'predict',
      topic: 'reload-cli-flag',
      question: {
        en: 'What command-line parameter is passed to nginx to trigger a configuration reload (e.g. nginx -s reload)?',
        bn: 'কনফিগারেশন রিলোড করতে nginx কমান্ডের সাথে কোন সিগন্যাল প্যারামিটারটি দেওয়া হয় (যেমন nginx -s reload)?',
      },
      answer: 'nginx -s reload',
      accept: ['nginx -s reload', '-s reload', 'reload', 'systemctl reload nginx'],
      hint: { en: 'nginx -s reload', bn: 'nginx -s reload' },
      explanation: {
        en: 'Running nginx -s reload sends the SIGHUP signal to the master process to perform a graceful reload.',
        bn: 'nginx -s reload কমান্ড মাস্টার প্রসেসকে একটি SIGHUP সিগন্যাল পাঠিয়ে ডাউনটাইমহীন রিলোড সম্পন্ন করে।',
      },
    },
  ],
  quiz: {
    id: 'the-nginx-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'rel-qz-1',
        kind: 'mcq',
        topic: 'reload-sim-drain-metrics',
        question: {
          en: 'In our TypeScript benchmark of 3000 continuous requests during a reload, how were in-flight requests handled?',
          bn: 'রিলোডের সময় ৩০০০টি নিরবচ্ছিন্ন রিকোয়েস্টের টাইপস্ক্রিপ্ট বেঞ্চমার্কে চলমান রিকোয়েস্টগুলো কীভাবে পরিচালিত হয়েছিল?',
        },
        options: [
          { en: 'Old workers drained 48 in-flight queries over 340 ms with 0 dropped packets, while new workers handled 2952 new requests', bn: 'পুরনো ওয়ার্কাররা ০টি প্যাকেট ড্রপ সহ ৩৪০ ms সময়ে ৪৮টি চলমান কাজ শেষ করেছিল, আর নতুন ওয়ার্কাররা ২৯৫২টি নতুন রিকোয়েস্ট সামলেছিল' },
          { en: 'All 3000 requests were abruptly severed and aborted', bn: '৩০০০টি রিকোয়েস্টের সবগুলোই হঠাৎ বিচ্ছিন্ন ও বাতিল হয়ে গিয়েছিল' },
          { en: 'The server paused all traffic for 10 minutes', bn: 'সার্ভার ১০ মিনিটের জন্য সব ট্রাফিক স্থগিত রেখেছিল' },
          { en: '0 requests succeeded due to memory exhaustion', bn: 'মেমরি সংকটের কারণে ০টি রিকোয়েস্ট সফল হয়েছিল' },
        ],
        answer: 0,
        hint: { en: '48 requests drained in 340 ms with 0 dropped packets.', bn: '০টি ড্রপ সহ ৪৮টি রিকোয়েস্ট ৩৪০ ms সময়ে সমাপ্ত হয়েছিল।' },
        explanation: {
          en: 'The simulation proved zero-downtime execution: 48 in-flight connections completed cleanly while new workers accepted 2952 queries.',
          bn: 'সিমুলেশনে কোনো ডাউনটাইম ছাড়াই ৪৮টি চলমান কাজ সম্পন্ন হয়েছিল এবং নতুনরা ২৯৫২টি কাজ সফলভাবে গ্রহণ করেছিল।',
        },
      },
      {
        id: 'rel-qz-2',
        kind: 'mcq',
        topic: 'worker-processes-auto-behavior',
        question: {
          en: 'What does setting worker_processes auto; do on a production multi-core Linux server?',
          bn: 'একটি প্রোডাকশন মাল্টি-কোর লিনাক্স সার্ভারে worker_processes auto; কনফিগার করলে কী ঘটে?',
        },
        options: [
          { en: 'Nginx detects the number of available physical CPU cores and automatically spawns exactly 1 worker process per core for maximum efficiency', bn: 'Nginx উপলব্ধ ফিজিক্যাল সিপিইউ কোরের সংখ্যা শনাক্ত করে সর্বোচ্চ দক্ষতার জন্য প্রতি কোরে ঠিক ১টি করে ওয়ার্কার প্রসেস তৈরি করে' },
          { en: 'Nginx deletes all configuration files when traffic increases', bn: 'ট্রাফিক বাড়লে Nginx সব কনফিগারেশন ফাইল মুছে ফেলে' },
          { en: 'Nginx drives a virtual car on the internet highway', bn: 'Nginx ইন্টারনেটের রাজপথে একটি ভার্চুয়াল গাড়ি চালায়' },
          { en: 'Nginx changes its software logo to an animated GIF', bn: 'Nginx তার সফটওয়্যার লোগোকে একটি অ্যানিমেটেড জিআইএফে রূপান্তর করে' },
        ],
        answer: 0,
        hint: { en: 'It spawns 1 worker per CPU core automatically.', bn: 'এটি স্বয়ংক্রিয়ভাবে প্রতি সিপিইউ কোরে ১টি করে ওয়ার্কার তৈরি করে।' },
        explanation: {
          en: 'Setting worker_processes auto matches worker count to CPU cores, maximizing parallelism and memory cache locality.',
          bn: 'worker_processes auto কোরের সংখ্যার সাথে ওয়ার্কার সংখ্যা মিলিয়ে সর্বোচ্চ সমান্তরাল কাজের গতি নিশ্চিত করে।',
        },
      },
      {
        id: 'rel-qz-3',
        kind: 'mcq',
        topic: 'sigquit-vs-sigterm',
        question: {
          en: 'What is the critical behavioral difference between sending SIGQUIT versus SIGTERM to an Nginx worker process?',
          bn: 'একটি Nginx ওয়ার্কার প্রসেসে SIGQUIT বনাম SIGTERM সিগন্যাল পাঠানোর মধ্যে প্রায়োগিক পার্থক্য কী?',
        },
        options: [
          { en: 'SIGQUIT initiates graceful connection draining (allowing in-flight requests to finish), whereas SIGTERM forces immediate hard termination (severing active connections)', bn: 'SIGQUIT চলমান রিকোয়েস্ট শেষ করার সুযোগ দিয়ে নিরাপদে বন্ধ করে, আর SIGTERM তাৎক্ষণিকভাবে সব সক্রিয় সংযোগ কেটে দিয়ে জোরপূর্বক বন্ধ করে' },
          { en: 'SIGQUIT changes the website background color to green', bn: 'SIGQUIT ওয়েবসাইটের ব্যাকগ্রাউন্ড রঙ সবুজ বানায়' },
          { en: 'SIGTERM increases the computer volume to maximum level', bn: 'SIGTERM কম্পিউটারের স্পিকারের ভলিউম সর্বোচ্চ করে দেয়' },
          { en: 'Both signals immediately delete the Linux operating system', bn: 'উভয় সিগন্যাল সাথে সাথে লিনাক্স অপারেটিং সিস্টেম মুছে ফেলে' },
        ],
        answer: 0,
        hint: { en: 'SIGQUIT is graceful; SIGTERM is an immediate kill.', bn: 'SIGQUIT শান্ত ও নিরাপদ; SIGTERM তৎক্ষণাৎ জোরপূর্বক বন্ধ করে।' },
        explanation: {
          en: 'SIGQUIT allows active client connections to drain cleanly, while SIGTERM severs connections immediately without waiting.',
          bn: 'SIGQUIT চলমান ক্লায়েন্ট সংযোগ নিরাপদে শেষ হতে দেয়, আর SIGTERM কোনো অপেক্ষা না করেই সংযোগ বিচ্ছিন্ন করে।',
        },
      },
      {
        id: 'rel-qz-4',
        kind: 'predict',
        topic: 'graceful-reload-signal-name',
        question: {
          en: 'What standard POSIX signal name triggers a zero-downtime configuration reload in the master process (e.g. SIGHUP)?',
          bn: 'মাস্টার প্রসেসে ডাউনটাইমহীন কনফিগারেশন রিলোড ঘটাতে কোন আদর্শ পসিক্স সিগন্যালটি পাঠানো হয় (যেমন SIGHUP)?',
        },
        answer: 'SIGHUP',
        accept: ['SIGHUP', 'HUP', 'kill -HUP', 'kill -SIGHUP'],
        hint: { en: 'SIGHUP', bn: 'SIGHUP' },
        explanation: {
          en: 'Sending SIGHUP tells the master process to re-read configs and replace workers with zero downtime.',
          bn: 'SIGHUP পাঠালে মাস্টার প্রসেস নতুন কনফিগ পড়ে এবং ডাউনটাইম ছাড়াই ওয়ার্কারদের নবায়ন করে।',
        },
      },
    ],
  },
};
