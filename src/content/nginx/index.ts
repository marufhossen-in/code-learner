import type { Hub } from '../../lib/types';
import { ServersAndTheServerLesson } from './lessons/servers-and-the-server';
import { LocationsAndTheLocationLesson } from './lessons/locations-and-the-location';
import { ProxiesAndTheProxyLesson } from './lessons/proxies-and-the-proxy';
import { UpstreamsAndTheUpstreamLesson } from './lessons/upstreams-and-the-upstream';
import { CachesAndTheCacheLesson } from './lessons/caches-and-the-cache';
import { LimitsAndTheLimitLesson } from './lessons/limits-and-the-limit';
import { LogsAndTheLogLesson } from './lessons/logs-and-the-log';
import { TheNginxReleaseLesson } from './lessons/the-nginx-release';

export const nginxHub: Hub = {
  slug: 'nginx',
  name: 'Nginx',
  icon: '🌐',
  tagline: {
    en: 'Master high-performance web serving: virtual hosts, location matching, reverse proxying, upstream load balancing, microcaching, rate limiting, and zero-downtime reloads.',
    bn: 'উচ্চগতির ওয়েব সার্ভিং শিখুন: ভার্চুয়াল হোস্ট, লোকেশন ম্যাচিং, রিভার্স প্রক্সি, আপস্ট্রিম লোড ব্যালেন্সিং, মাইক্রোক্যাশিং, রেট লিমিটিং এবং ডাউনটাইমহীন রিলোড।',
  },
  intro: {
    en: 'Nginx is an asynchronous, event-driven HTTP web server, reverse proxy, and load balancer designed for high-concurrency workloads. Unlike legacy thread-per-connection web servers that exhaust system RAM under heavy traffic, Nginx utilizes an asynchronous non-blocking event loop with a single master process and multi-threaded worker processes bound to physical CPU cores. A single Nginx instance easily manages tens of thousands of simultaneous client connections with minimal memory footprint, making it the industry standard for SSL termination, reverse proxy routing, microcaching, and traffic mitigation.',
    bn: 'Nginx হলো একটি উচ্চগতির ইভেন্ট-চালিত ওয়েব সার্ভার, রিভার্স প্রক্সি এবং লোড ব্যালেন্সার যা বিশাল ট্রাফিক দক্ষভাবে পরিচালনা করার জন্য নির্মিত। প্রতিটি সংযোগের জন্য আলাদা থ্রেড তৈরি করে মেমরি অপচয় না করে, Nginx একটি মাস্টার প্রসেস ও একাধিক নন-ব্লকিং ওয়ার্কার প্রসেসের সাহায্যে সিঙ্গেল ইভেন্ট লুপে কাজ করে। একটিমাত্র Nginx সার্ভার খুব কম মেমরি খরচ করে একসাথে দশ হাজারেরও বেশি ক্লায়েন্ট সংযোগ স্বচ্ছন্দে পরিচালনা করতে পারে, যা এটিকে আধুনিক ক্লাউড আর্কিটেকচারে এসএসএল টার্মিনেশন, রিভার্স প্রক্সি রাউটিং, মাইক্রোক্যাশিং এবং রেট লিমিটিংয়ের বিশ্বস্ত সমাধান বানিয়েছে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Virtual Hosts, Location Routing, and Reverse Proxying', bn: 'ধাপ ১ — ভার্চুয়াল হোস্ট, লোকেশন রাউটিং ও রিভার্স প্রক্সি' },
      items: [
        {
          en: 'Server Blocks and Virtual Hosts: bind custom domains, listen ports, default servers, and TLS certificates.',
          bn: 'সার্ভার ব্লক ও ভার্চুয়াল হোস্ট: কাস্টম ডোমেইন, লিসেন পোর্ট, ডিফল্ট সার্ভার এবং টিএলএস সার্টিফিকেট কনফিগার করুন।',
        },
        {
          en: 'Location Directives and URI Matching: master prefix matching, exact matching, regular expressions, and try_files fallback chains.',
          bn: 'লোকেশন নির্দেশ ও ইউআরআই ম্যাচিং: প্রিফিক্স ম্যাচ, এক্স্যাক্ট ম্যাচ, রেগুলার এক্সপ্রেশন এবং try_files ফলব্যাক চেইন আয়ত্ত করুন।',
        },
        {
          en: 'Reverse Proxy Routing: forward client requests with proxy_pass, preserve headers with X-Forwarded-For, and tune client buffer windows.',
          bn: 'রিভার্স প্রক্সি রাউটিং: proxy_pass দিয়ে রিকোয়েস্ট ফরওয়ার্ড করা, X-Forwarded-For দিয়ে হেডার রক্ষা এবং বাফার উইন্ডো অপ্টিমাইজ করুন।',
        },
      ],
    },
    {
      title: { en: 'Stage 2 — Upstreams, Microcaching, and Traffic Rate Limiting', bn: 'ধাপ ২ — আপস্ট্রিম, মাইক্রোক্যাশিং ও ট্রাফিক রেট লিমিটিং' },
      items: [
        {
          en: 'Upstream Pools and Load Balancing: distribute traffic using round-robin, least_conn, ip_hash, and persistent keepalive connections.',
          bn: 'আপস্ট্রিম পুল ও লোড ব্যালেন্সিং: রাউন্ড-রবিন, least_conn, ip_hash এবং পারসিসটেন্ট কিপ-অ্যালাইভ সংযোগ দিয়ে ট্রাফিক বণ্টন করুন।',
        },
        {
          en: 'Proxy Caching and Microcaching: store dynamic API responses in fast memory-backed zones to survive viral traffic spikes.',
          bn: 'প্রক্সি ক্যাশিং ও মাইক্রোক্যাশিং: আকস্মিক ট্রাফিকের চাপ সামলাতে ডায়নামিক এপিআই রেসপন্স মেমরি-ব্যাকড ক্যাশ জোনে সংরক্ষণ করুন।',
        },
        {
          en: 'Rate Limiting and DDoS Mitigation: configure leaky bucket algorithms, request burst buffers, and client connection limits.',
          bn: 'রেট লিমিটিং ও ডিডস সুরক্ষা: লিকি বাকেট অ্যালগরিদম, রিকোয়েস্ট বার্স্ট বাফার এবং ক্লায়েন্ট কানেকশন লিমিট কনফিগার করুন।',
        },
      ],
    },
    {
      title: { en: 'Stage 3 — Observability Logging and Zero-Downtime Releases', bn: 'ধাপ ৩ — অবজারভেবিলিটি লগিং ও ডাউনটাইমহীন রিলিজ' },
      items: [
        {
          en: 'Structured JSON Access Logging: record upstream response times, client IP geolocation, and cache hit statuses into structured log sinks.',
          bn: 'স্ট্রাকচার্ড JSON অ্যাক্সেস লগিং: আপস্ট্রিম রেসপন্স টাইম, ক্লায়েন্ট আইপি এবং ক্যাশ হিট স্ট্যাটাস স্ট্রাকচার্ড লগ ফাইলে সংরক্ষণ করুন।',
        },
        {
          en: 'Zero-Downtime Hot Reloads: validate configs with nginx -t, issue SIGHUP reload signals, and drain old worker processes without dropping packets.',
          bn: 'ডাউনটাইমহীন হট রিলোড: nginx -t দিয়ে কনফিগ পরীক্ষা, SIGHUP রিলোড সিগন্যাল পাঠানো এবং রিকোয়েস্ট ড্রপ না করে পুরনো ওয়ার্কার প্রসেস রিলিজ করুন।',
        },
      ],
    },
  ],
  lessons: [
    ServersAndTheServerLesson,
    LocationsAndTheLocationLesson,
    ProxiesAndTheProxyLesson,
    UpstreamsAndTheUpstreamLesson,
    CachesAndTheCacheLesson,
    LimitsAndTheLimitLesson,
    LogsAndTheLogLesson,
    TheNginxReleaseLesson,
  ],
  projects: [
    {
      title: { en: 'Production API Gateway with Microcaching and Rate Limiting', bn: 'মাইক্রোক্যাশিং ও রেট লিমিটিং সহ প্রোডাকশন API গেটওয়ে' },
      brief: {
        en: 'Design and configure a production-grade Nginx API Gateway that routes public HTTPS traffic to microservices, rate-limits abuse to 10 requests per second, and caches idempotent GET responses for 2 seconds.',
        bn: 'একটি প্রোডাকশন মানের Nginx API গেটওয়ে ডিজাইন করুন যা পাবলিক HTTPS ট্রাফিক মাইক্রোসার্ভিসে পাঠায়, অপব্যবহার রোধে প্রতি সেকেন্ডে ১০টি রিকোয়েস্টে রেট লিমিট করে এবং GET রেসপন্স ২ সেকেন্ড ক্যাশ করে।',
      },
    },
    {
      title: { en: 'High-Availability Load Balancer with Zero-Downtime Worker Recycling', bn: 'ডাউনটাইমহীন ওয়ার্কার রিসাইক্লিং সহ হাই-অ্যাভেইলেবিলিটি লোড ব্যালেন্সার' },
      brief: {
        en: 'Configure an upstream cluster of 3 backend application servers utilizing least-connections balancing, active TCP keepalive pooling, and seamless SIGHUP zero-downtime configuration reloads.',
        bn: '৩টি ব্যাকএন্ড অ্যাপ্লিকেশন সার্ভারের একটি ক্লাস্টার কনফিগার করুন যা least-connections ব্যালেন্সিং, TCP কিপ-অ্যালাইভ পুলিং এবং ডাউনটাইমহীন SIGHUP রিলোড সমর্থন করে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always run nginx -t before reloading production servers: syntax errors or missing SSL certificate files will abort the test safely without killing active workers.',
      bn: 'প্রোডাকশন সার্ভারে রিলোড করার আগে সর্বদা nginx -t চালান: সিনট্যাক্স ভুল বা মিসিং SSL ফাইল থাকলে তা নিরাপদেই ধরা পড়ে এবং চলমান ওয়ার্কার বন্ধ হয় না।',
    },
    {
      en: 'Always forward client context using proxy_set_header directives: pass Host, X-Real-IP, and X-Forwarded-For so upstream application backends know the true client IP.',
      bn: 'সর্বদা proxy_set_header নির্দেশ ব্যবহার করে ক্লায়েন্ট তথ্য পাঠান: Host, X-Real-IP এবং X-Forwarded-For হেডার ফরোয়ার্ড করুন যাতে ব্যাকএন্ড আসল আইপি জানতে পারে।',
    },
    {
      en: 'Enable upstream HTTP keepalive connections in upstream blocks: reusing established TCP sockets slashes handshake latency and avoids port exhaustion.',
      bn: 'আপস্ট্রিম ব্লকে HTTP keepalive সংযোগ সক্রিয় করুন: প্রতিষ্ঠিত TCP সকেট পুনর্ব্যবহার করলে হ্যান্ডশেক লেটেন্সি কমে এবং লোকাল পোর্ট সংকট দূর হয়।',
    },
    {
      en: 'Apply rate limiting to authentication and expensive API endpoints: protect login forms and database queries from brute-force scripts and denial of service surges.',
      bn: 'লগইন ও ভারী API এন্ডপয়েন্টে রেট লিমিটিং প্রয়োগ করুন: ব্রুট-ফোর্স স্ক্রিপ্ট এবং হঠাৎ ট্রাফিক স্পাইক থেকে ডেটাবেজ ও সার্ভারকে সুরক্ষিত রাখুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'How does Nginx achieve extreme concurrency compared to traditional process-based web servers like Apache prefork?',
        bn: 'Apache prefork-এর মতো ট্র্যাডিশনাল প্রসেস-ভিত্তিক ওয়েব সার্ভারের তুলনায় Nginx কীভাবে বিপুল পরিমাণ ট্রাফিক পরিচালনা করে?',
      },
      a: {
        en: 'Traditional web servers allocate a dedicated thread or process for every incoming client connection. If thousands of clients connect simultaneously, system RAM is rapidly exhausted and CPU cores spend excessive time performing kernel context switches. Nginx employs an asynchronous, non-blocking, event-driven architecture. A small number of single-threaded worker processes (typically 1 worker per CPU core) listen on multiplexed sockets using Linux epoll. Each worker process can handle tens of thousands of idle or active client connections simultaneously in a single event loop without blocking or thrashing memory.',
        bn: 'ট্র্যাডিশনাল ওয়েব সার্ভার প্রতিটি ক্লায়েন্ট সংযোগের জন্য একটি আলাদা থ্রেড বা প্রসেস তৈরি করে। ফলে একসাথে হাজার হাজার ব্যবহারকারী আসলে সিস্টেম মেমরি দ্রুত ফুরিয়ে যায় এবং সিপিইউ কনটেক্সট সুইচে ব্যস্ত হয়ে পড়ে। অন্যদিকে Nginx একটি অ্যাসিনক্রোনাস, নন-ব্লকিং এবং ইভেন্ট-চালিত আর্কিটেকচার ব্যবহার করে। এতে প্রতিটি সিপিইউ কোরের জন্য মাত্র ১টি করে সিঙ্গেল-থ্রেডেড ওয়ার্কার প্রসেস থাকে যা লিনাক্স epoll মেকানিজম ব্যবহার করে। একটিমাত্র ওয়ার্কার প্রসেস কোনো ব্লকিং ছাড়াই একই ইভেন্ট লুপে একসাথে দশ হাজারেরও বেশি সংযোগ অবলীলায় সামলাতে পারে।',
      },
    },
    {
      q: {
        en: 'What is the exact evaluation order and precedence of Nginx location directives?',
        bn: 'Nginx লোকেশন নির্দেশগুলোর মূল্যায়নের সঠিক ক্রম এবং অগ্রাধিকার কীভাবে কাজ করে?',
      },
      a: {
        en: 'Nginx evaluates incoming request URIs against location directives in a strict priority order: First, exact matches using the = modifier are checked; if matched, search halts immediately. Second, preferential prefix matches using the ^~ modifier are checked; if matched, regex checking is skipped entirely. Third, case-sensitive (~) and case-insensitive (~*) regular expressions are checked in the top-down order they appear in the file; the first matching regex wins. Finally, if no regex matches, the longest standard prefix location matched in the initial search is selected.',
        bn: 'Nginx রিকোয়েস্টের ইউআরআই মেলাতে একটি নির্দিষ্ট অগ্রাধিকার ক্রম মেনে চলে: প্রথমত, = চিহ্নযুক্ত এক্স্যাক্ট ম্যাচ পরীক্ষা করা হয়; মিললে তল্লাশি সাথে সাথে থেমে যায়। দ্বিতীয়ত, ^~ চিহ্নযুক্ত প্রিফিক্স ম্যাচ দেখা হয়; এটি মিললে কোনো রেগুলার এক্সপ্রেশন পরীক্ষা করা হয় না। তৃতীয়ত, ফাইলে লেখা ক্রমানুসারে কেস-সেনসিটিভ (~) এবং কেস-ইনসেনসিটিভ (~*) রেগুলার এক্সপ্রেশনগুলো চেক করা হয় এবং প্রথম মিলটি জয়ী হয়। পরিশেষে, যদি কোনো রেজেক্স না মেলে, তবে শুরুতে খুঁজে পাওয়া সবচেয়ে দীর্ঘতম সাধারণ প্রিফিক্স লোকেশনটি কার্যকর হয়।',
      },
    },
    {
      q: {
        en: 'What is the critical behavioral difference between the root and alias directives in an Nginx location block?',
        bn: 'Nginx লোকেশন ব্লকে root এবং alias নির্দেশের মধ্যে আচরণগত মৌলিক পার্থক্য কী?',
      },
      a: {
        en: 'The root directive appends the full matching request URI to the root filesystem path. For example, if location /images/ has root /var/www;, a request for /images/cat.png maps to /var/www/images/cat.png. In contrast, the alias directive replaces the matched location prefix with the specified filesystem path. If location /images/ has alias /var/www/assets/;, the same request for /images/cat.png drops the /images/ prefix and resolves directly to /var/www/assets/cat.png.',
        bn: 'root নির্দেশ পুরো রিকোয়েস্ট ইউআরআই-কে ফাইলের পাথের পেছনে সরাসরি যুক্ত করে। যেমন location /images/-এ যদি root /var/www; থাকে, তবে /images/cat.png ফাইলটি /var/www/images/cat.png থেকে লোড হবে। পক্ষান্তরে alias নির্দেশ লোকেশন প্রিফিক্সটিকে বাদ দিয়ে নতুন পাথ দিয়ে প্রতিস্থাপন করে। অর্থাৎ location /images/-এ যদি alias /var/www/assets/; থাকে, তবে /images/cat.png রিকোয়েস্টটি /images/ বাদ দিয়ে সরাসরি /var/www/assets/cat.png থেকে ফাইল খুঁজে আনে।',
      },
    },
    {
      q: {
        en: 'How does nginx -s reload achieve zero-downtime configuration updates under the hood?',
        bn: 'nginx -s reload কমান্ড কীভাবে ব্যাকগ্রাউন্ডে কোনো ডাউনটাইম ছাড়াই কনফিগারেশন আপডেট সম্পন্ন করে?',
      },
      a: {
        en: 'When nginx -s reload is executed, the Nginx master process receives a SIGHUP signal. The master process re-reads and validates the configuration file syntax. If invalid, it logs an error and leaves running workers untouched. If valid, the master spawns a new generation of worker processes using the updated configuration. The master then sends a SIGQUIT signal to the old worker processes, instructing them to stop accepting new client connections while allowing in-flight requests to complete cleanly before exiting. This ensures zero dropped packets and 100% uptime.',
        bn: 'যখন nginx -s reload চালানো হয়, তখন Nginx মাস্টার প্রসেস একটি SIGHUP সিগন্যাল গ্রহণ করে। মাস্টার প্রসেস নতুন কনফিগারেশন ফাইল পড়ে তার সিনট্যাক্স যাচাই করে। ভুল থাকলে এটি এরর লগ করে এবং চলমান ওয়ার্কারদের অক্ষত রাখে। আর কনফিগ সঠিক হলে মাস্টার নতুন কনফিগারেশন নিয়ে নতুন প্রজন্মের ওয়ার্কার প্রসেস তৈরি করে। এরপর মাস্টার পুরনো ওয়ার্কারদের SIGQUIT সিগন্যাল পাঠায়, যাতে তারা নতুন কানেকশন নেওয়া বন্ধ করে এবং চলমান রিকোয়েস্টগুলো সফলভাবে শেষ করে বিদায় নেয়। ফলে কোনো রিকোয়েস্ট বাতিল না হয়ে ১০০% আপটাইম বজায় থাকে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Cloudflare: powers its global edge proxy network using deeply customized Nginx instances, terminating SSL connections, inspecting HTTP requests for threats, and routing traffic across millions of internet properties.',
      bn: 'ক্লাউডফ্লেয়ার: তাদের গ্লোবাল এজ প্রক্সি নেটওয়ার্কে গভীরভাবে কাস্টমাইজ করা Nginx সার্ভার পরিচালনা করে, যা এসএসএল টার্মিনেশন, থ্রেট পর্যবেক্ষণ এবং বিশ্বজুড়ে লাখ লাখ ওয়েবসাইটের ট্রাফিক পরিচালনা করে।',
    },
    {
      en: 'Netflix: streams petabytes of video content using optimized Nginx edge caching appliances, leveraging zero-copy sendfile syscalls and asynchronous I/O to deliver video streams with ultra-low latency.',
      bn: 'নেটফ্লিক্স: অপ্টিমাইজড Nginx এজ ক্যাশিং সার্ভার ব্যবহার করে পেট্রাবাইট আকারের ভিডিও কন্টেন্ট স্ট্রিম করে, যা zero-copy sendfile এবং অ্যাসিনক্রোনাস আইও ব্যবহার করে নিখুঁতভাবে ভিডিও পৌঁছে দেয়।',
    },
    {
      en: 'GitHub: routes incoming git and HTTPS traffic through high-availability Nginx reverse proxy tiers, load-balancing requests across backend services and enforcing strict rate limits against automated scraping.',
      bn: 'গিটহাব: উচ্চ-ক্ষমতাসম্পন্ন Nginx রিভার্স প্রক্সি লেয়ারের মাধ্যমে আগত সমস্ত গিট ও HTTPS ট্রাফিক পরিচালনা করে, যা ব্যাকএন্ড সার্ভারগুলোর মধ্যে লোড ব্যালেন্স করে এবং স্ক্র্যাপিং ঠেকাতে কঠোর রেট লিমিট প্রয়োগ করে।',
    },
  ],
  references: [],
};
