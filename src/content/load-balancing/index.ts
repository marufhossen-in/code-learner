import type { Hub } from '../../lib/types';
import { WeightsAndTheWeightLesson } from './lessons/weights-and-the-weight';
import { AlgosAndTheAlgoLesson } from './lessons/algos-and-the-algo';
import { RobinsAndTheRobinLesson } from './lessons/robins-and-the-robin';
import { ConnsAndTheConnLesson } from './lessons/conns-and-the-conn';
import { LeastsAndTheLeastLesson } from './lessons/leasts-and-the-least';
import { StickiesAndTheStickyLesson } from './lessons/stickies-and-the-sticky';
import { FailoversAndTheFailoverLesson } from './lessons/failovers-and-the-failover';
import { TheBalanceReleaseLesson } from './lessons/the-balance-release';

export const loadBalancingHub: Hub = {
  slug: 'load-balancing',
  name: 'Load Balancing',
  icon: '⚖️',
  tagline: {
    en: 'Master high-availability traffic distribution: Layer 4 vs Layer 7 routing, round-robin, least connections, session affinity, health checks, and global failover.',
    bn: 'হাই-অ্যাভেইলেবিলিটি ট্রাফিক বণ্টন শিখুন: লেয়ার ৪ বনাম লেয়ার ৭ রাউটিং, রাউন্ড রবিন, লিস্ট কানেকশন, সেশন অ্যাফিনিটি, হেলথ চেক এবং গ্লোবাল ফেইলওভার।',
  },
  intro: {
    en: 'Load balancing is the core architectural discipline of distributing incoming network and application traffic across a pool of backend compute resources. Rather than relying on a fragile monolithic server that succumbs to traffic surges and single-point-of-failure outages, load balancers act as intelligent traffic dispatchers. Operating across Layer 4 transport protocols (TCP and UDP) and Layer 7 application protocols (HTTP, HTTPS, gRPC, and WebSockets), modern load balancers maximize resource utilization, eliminate server hot-spots, execute continuous health probes, and ensure sub-second automatic failover during hardware failures.',
    bn: 'লোড ব্যালেন্সিং হলো একাধিক ব্যাকএন্ড কম্পিউটারের মধ্যে নেটওয়ার্ক ও অ্যাপ্লিকেশন ট্রাফিক সুষ্ঠুভাবে বণ্টন করার প্রধান আর্কিটেকচারাল কৌশল। হঠাৎ ট্রাফিকের চাপে একটিমাত্র সার্ভার ক্র্যাশ করার ঝুঁকি না নিয়ে, লোড ব্যালেন্সার একটি বুদ্ধিমান ট্রাফিক নিয়ন্ত্রক হিসেবে কাজ করে। এটি লেয়ার ৪ ট্রান্সপোর্ট প্রোটোকল (TCP এবং UDP) এবং লেয়ার ৭ অ্যাপ্লিকেশন প্রোটোকল (HTTP, HTTPS, gRPC এবং WebSockets)-এ কাজ করে সার্ভারের কাজের সমতা রক্ষা করে, নিয়মিত সার্ভারের স্বাস্থ্য পরীক্ষা করে এবং কোনো কম্পিউটার নষ্ট হলে এক সেকেন্ডেরও কম সময়ে স্বয়ংক্রিয়ভাবে অন্য সার্ভারে ট্রাফিক পাঠিয়ে নিরবচ্ছিন্ন সেবা নিশ্চিত করে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Foundations, OSI Layers, and Round-Robin Scheduling', bn: 'ধাপ ১ — মৌলিক ধারণা, ওএসআই লেয়ার্স ও রাউন্ড-রবিন শিডিউলিং' },
      items: [
        {
          en: 'Load Balancing Fundamentals: understand horizontal scaling, capacity limits, and eliminate single points of failure.',
          bn: 'লোড ব্যালেন্সিং ভিত্তি: অনুভূমিক স্কেলিং, সার্ভারের ধারণক্ষমতা এবং একক ব্যর্থতার ঝুঁকি দূর করার কৌশল বুঝুন।',
        },
        {
          en: 'Layer 4 vs Layer 7 Routing: compare high-throughput TCP/UDP packet forwarding against header-aware HTTP reverse proxies.',
          bn: 'লেয়ার ৪ বনাম লেয়ার ৭ রাউটিং: উচ্চগতির টিসিপি/ইউডিপি প্যাকেট ফরওয়ার্ডিং বনাম হেডার-সচেতন এইচটিটিপি রিভার্স প্রক্সির তুলনা করুন।',
        },
        {
          en: 'Round-Robin and Weighted Balancers: master sequential request dispatching and proportional hardware weighting algorithms.',
          bn: 'রাউন্ড-রবিন ও ওজনযুক্ত ব্যালেন্সার: ক্রমানুসারে রিকোয়েস্ট পাঠানো এবং সার্ভার সক্ষমতা অনুযায়ী ওজন বণ্টনের নিয়ম আয়ত্ত করুন।',
        },
      ],
    },
    {
      title: { en: 'Stage 2 — Adaptive Algorithms, Latency Tracking, and Sticky Sessions', bn: 'ধাপ ২ — অ্যাডাপ্টিভ অ্যালগরিদম, লেটেন্সি ট্র্যাকিং ও স্টিকি সেশন' },
      items: [
        {
          en: 'Least Connections Dispatching: absorb heterogeneous long-running requests by directing traffic to lightly loaded nodes.',
          bn: 'লিস্ট কানেকশন পদ্ধতি: অসমান সময়ের জটিল রিকোয়েস্টগুলো সবচেয়ে কম ব্যস্ত সার্ভারগুলোতে পাঠিয়ে লোড সামলান।',
        },
        {
          en: 'Least Response Time and EWMA: calculate dynamic latency moving averages to route traffic away from degraded servers.',
          bn: 'লিস্ট রেসপন্স টাইম ও EWMA: গতিশীল লেটেন্সি ট্র্যাকিংয়ের মাধ্যমে ধীরগতির সার্ভার এড়িয়ে দ্রুততম নোডে কাজ পাঠান।',
        },
        {
          en: 'Session Affinity and Sticky Cookies: pin client sessions to specific backends using IP hashes and application cookies.',
          bn: 'সেশন অ্যাফিনিটি ও স্টিকি কুকি: আইপি হ্যাশ এবং কুকি ব্যবহার করে ক্লায়েন্ট সেশন নির্দিষ্ট ব্যাকএন্ডে ধরে রাখুন।',
        },
      ],
    },
    {
      title: { en: 'Stage 3 — Health Probes, Circuit Breakers, and Global Failover', bn: 'ধাপ ৩ — হেলথ প্রোব, সার্কিট ব্রেকার ও গ্লোবাল ফেইলওভার' },
      items: [
        {
          en: 'Active Health Probes and Circuit Breakers: configure synthetic checks, failure thresholds, and automatic quarantine loops.',
          bn: 'অ্যাক্টিভ হেলথ প্রোব ও সার্কিট ব্রেকার: কৃত্রিম পরীক্ষা, ব্যর্থতার সীমা এবং স্বয়ংক্রিয় সার্ভার কোয়ারেন্টাইন সেটআপ করুন।',
        },
        {
          en: 'Global Server Load Balancing and Anycast BGP: route international traffic across worldwide regions with multi-tier failovers.',
          bn: 'গ্লোবাল সার্ভার লোড ব্যালেন্সিং ও Anycast BGP: বিশ্বব্যাপী মাল্টি-রিজিয়ন আর্কিটেকচারে ফেইলওভার সহ ট্রাফিক বণ্টন করুন।',
        },
      ],
    },
  ],
  lessons: [
    WeightsAndTheWeightLesson,
    AlgosAndTheAlgoLesson,
    RobinsAndTheRobinLesson,
    ConnsAndTheConnLesson,
    LeastsAndTheLeastLesson,
    StickiesAndTheStickyLesson,
    FailoversAndTheFailoverLesson,
    TheBalanceReleaseLesson,
  ],
  projects: [
    {
      title: { en: 'Dynamic Multi-Tier Microservice Load Balancer', bn: 'ডায়নামিক মাল্টি-টিয়ার মাইক্রোসার্ভিস লোড ব্যালেন্সার' },
      brief: {
        en: 'Architect a Layer 7 load balancer that routes public HTTPS traffic to an upstream pool of 4 backend instances using least-connections balancing, active health checks, and automatic circuit breaker tripping on HTTP 500 errors.',
        bn: 'একটি লেয়ার ৭ লোড ব্যালেন্সার আর্কিটেক্ট করুন যা least-connections পদ্ধতি, অ্যাক্টিভ হেলথ চেক এবং HTTP 500 এররে সার্কিট ব্রেকার ট্রিগার করে ৪টি ব্যাকএন্ড ইনস্ট্যান্সে ট্রাফিক পরিচালনা করে।',
      },
    },
    {
      title: { en: 'Consistent Hash Ring Cache Router with Sticky Sessions', bn: 'স্টিকি সেশন সহ কনসিস্টেন্ট হ্যাশ রিং ক্যাশ রাউটার' },
      brief: {
        en: 'Implement a distributed consistent hash ring routing client sessions across 8 cache nodes with virtual vnodes, minimizing cache key redistribution to under 12.50% during node scale events.',
        bn: 'ভার্চুয়াল vnodes সহ ৮টি ক্যাশ নোডের মধ্যে একটি কনসিস্টেন্ট হ্যাশ রিং রাউটার তৈরি করুন, যা কোনো নোড যোগ বা বাদ দেওয়ার সময় ক্যাশ রিডিস্ট্রিবিউশন ১২.৫০%-এর নিচে রাখে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always pair active synthetic health probes with passive connection monitoring: active probes detect deep logic failures while passive counters catch immediate socket crashes.',
      bn: 'অ্যাক্টিভ হেলথ প্রোবের সাথে সর্বদা প্যাসিভ কানেকশন পর্যবেক্ষণ যুক্ত রাখুন: অ্যাক্টিভ প্রোব অভ্যন্তরীণ জটিল ত্রুটি ধরে আর প্যাসিভ কাউন্টার তাৎক্ষণিক সকেট ক্র্যাশ শনাক্ত করে।',
    },
    {
      en: 'Prefer Least Connections over Round Robin when request durations are unpredictable: fast database pings and heavy report generations will saturate simple round-robin clusters.',
      bn: 'কাজের সময়সীমা অনিশ্চিত হলে রাউন্ড রবিনের চেয়ে Least Connections পদ্ধতি বেছে নিন: দ্রুত ডেটা কুয়েরি এবং ভারী ফাইল তৈরির ক্ষেত্রে রাউন্ড রবিন সার্ভার জ্যাম করে ফেলে।',
    },
    {
      en: 'Use consistent hashing with virtual nodes for stateful caches: standard modulo hashing shuffles 100% of keys on server failure, whereas consistent rings remap only 1/N keys.',
      bn: 'ক্যাশ সংরক্ষণে ভার্চুয়াল নোড সহ কনসিস্টেন্ট হ্যাশিং ব্যবহার করুন: সাধারণ মডিউলো হ্যাশিং সব ক্যাশ মুছে ফেলে, যেখানে কনসিস্টেন্ট রিং মাত্র ১/N অংশ ডেটা স্থানান্তর করে।',
    },
    {
      en: 'Never deploy a single load balancer as a lone entry point: run paired load balancers in an Active-Passive VRRP cluster with a shared virtual floating IP address to eliminate SPOF.',
      bn: 'কখনোই একটিমাত্র লোড ব্যালেন্সার একা চালাবেন না: একক ব্যর্থতার ঝুঁকি এড়াতে ভার্চুয়াল ফ্লোটিং আইপি সহ Active-Passive VRRP ক্লাস্টারে জোড়া লোড ব্যালেন্সার পরিচালনা করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between Layer 4 and Layer 7 load balancing?',
        bn: 'লেয়ার ৪ এবং লেয়ার ৭ লোড ব্যালেন্সিংয়ের মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?',
      },
      a: {
        en: 'Layer 4 load balancing operates at the transport layer of the OSI model, inspecting only IP addresses and TCP/UDP port numbers without examining payload content. It routes packets via Network Address Translation (NAT) with minimal CPU latency, capable of processing millions of packets per second. In contrast, Layer 7 load balancing operates at the application layer. It terminates the TCP connection, decrypts TLS, and inspects HTTP headers, cookies, URL paths, and query parameters. While Layer 7 requires more CPU compute, it enables intelligent content-based routing, header manipulation, WebSocket tunneling, and microcaching.',
        bn: 'লেয়ার ৪ লোড ব্যালেন্সিং ওএসআই মডেলের ট্রান্সপোর্ট লেয়ারে কাজ করে, যা ভেতরের ডেটা না দেখে শুধুমাত্র আইপি অ্যাড্রেস এবং টিসিপি/ইউডিপি পোর্ট পর্যবেক্ষণ করে। এটি নেটওয়ার্ক অ্যাড্রেস ট্রান্সলেশন (NAT) ব্যবহার করে অতি দ্রুত প্রতি সেকেন্ডে লাখ লাখ প্যাকেট ফরওয়ার্ড করতে পারে। পক্ষান্তরে লেয়ার ৭ অ্যাপ্লিকেশন লেয়ারে কাজ করে। এটি টিসিপি সংযোগ গ্রহণ করে, টিএলএস ডিক্রিপ্ট করে এবং এইচটিটিপি হেডার, কুকি ও ইউআরএল পাথ পরীক্ষা করে। এতে কিছুটা অতিরিক্ত প্রসেসর খরচ হলেও কনটেন্ট-ভিত্তিক বুদ্ধিমান রাউটিং, হেডার পরিবর্তন এবং মাইক্রোক্যাশিংয়ের মতো মূল্যবান সুবিধা পাওয়া যায়।',
      },
    },
    {
      q: {
        en: 'How does consistent hashing prevent massive cache invalidation storms when scaling server pools?',
        bn: 'সার্ভার সংখ্যা পরিবর্তনের সময় কনসিস্টেন্ট হ্যাশিং কীভাবে ডেটাবেজ ও ক্যাশের আকস্মিক বিপর্যয় রোধ করে?',
      },
      a: {
        en: 'In traditional modulo hashing (hash(key) % N), changing the server count N from 4 to 5 causes almost 100% of keys to remap to entirely new server locations, wiping out cache hit rates and crushing backend databases. Consistent hashing maps both server nodes and cache keys onto a continuous 360-degree mathematical ring (e.g. 0 to 2^32 - 1). A key is assigned to the nearest server clockwise on the ring. When a server is added or removed, only keys residing between that node and its adjacent predecessor are moved (approximately 1/N of keys), leaving the remaining (N-1)/N cached keys completely untouched.',
        bn: 'সাধারণ মডিউলো হ্যাশিংয়ে (hash(key) % N) সার্ভারের সংখ্যা N যদি ৪ থেকে ৫ করা হয়, তবে প্রায় ১০০% ক্যাশ কি অন্য সার্ভারে চলে যায়, ফলে সব ক্যাশ নষ্ট হয়ে ডেটাবেজের ওপর মারাত্মক চাপ পড়ে। কনসিস্টেন্ট হ্যাশিং সার্ভার এবং ডেটা কি উভয়কেই একটি ৩৬০ ডিগ্রির বৃত্তাকার গাণিতিক রিংয়ে সাজায়। ঘড়ির কাঁটার দিকে সবচেয়ে কাছের সার্ভারটিকে ডেটা রাখার দায়িত্ব দেওয়া হয়। ফলে কোনো সার্ভার যুক্ত বা বাদ পড়লে কেবল ওই নির্দিষ্ট অংশের ডেটা (প্রায় ১/N অংশ) স্থানান্তরিত হয় এবং বাকি (N-১)/N ডেটা পুরোপুরি অক্ষত থাকে।',
      },
    },
    {
      q: {
        en: 'What is the operational purpose of a Circuit Breaker pattern in modern load-balanced clusters?',
        bn: 'আধুনিক লোড-ব্যালেন্সড ক্লাস্টারে সার্কিট ব্রেকার প্যাটার্নের প্রায়োগিক উদ্দেশ্য কী?',
      },
      a: {
        en: 'When a backend service begins failing or running out of memory, repeated incoming requests exacerbate the overload and trigger cascading failures across dependent microservices. A circuit breaker monitors error rates against a failure threshold (e.g. 50% 5xx errors over 10 seconds). In the Closed state, traffic flows normally. When the threshold trips, the breaker opens, immediately failing fast or returning fallback data without contacting the degraded backend. After a cooldown timeout, it enters a Half-Open state, sending a canary percentage of requests to test recovery before safely closing.',
        bn: 'যখন কোনো ব্যাকএন্ড সার্ভার মেমরি সংকটে পড়ে বা এরর দেওয়া শুরু করে, তখন আরও রিকোয়েস্ট পাঠালে সমস্যাটি পুরো ক্লাস্টারে ছড়িয়ে পড়ে। সার্কিট ব্রেকার সার্ভারের ব্যর্থতার হার পর্যবেক্ষণ করে। স্বাভাবিক অবস্থায় (Closed স্টেট) সব ট্রাফিক স্বাভাবিকভাবে চলে। কিন্তু ব্যর্থতার সীমা ছাড়ালে সার্কিট Open হয়ে যায় এবং অসুস্থ সার্ভারে কোনো রিকোয়েস্ট না পাঠিয়ে সাথে সাথে ফলব্যাক ডেটা দেয়। নির্দিষ্ট সময় পর এটি Half-Open অবস্থায় কিছু পরীক্ষামূলক রিকোয়েস্ট পাঠিয়ে সার্ভার সুস্থ হয়েছে কিনা যাচাই করে আবার স্বাভাবিক অবস্থায় ফিরে আসে।',
      },
    },
    {
      q: {
        en: 'Why is session affinity (sticky sessions) generally considered an anti-pattern for modern stateless cloud architectures?',
        bn: 'আধুনিক স্টেটলেস ক্লাউড আর্কিটেকচারে সেশন অ্যাফিনিটি বা স্টিকি সেশনকে কেন একটি ক্ষতিকর পদ্ধতি হিসেবে বিবেচনা করা হয়?',
      },
      a: {
        en: 'Sticky sessions bind a client to one specific backend server based on IP hash or cookie tracking. If that backend server crashes or is autoscaled down, all active sessions tied to that instance lose their state and get logged out abruptly. Furthermore, sticky sessions create severe load imbalances: if high-volume power users happen to be pinned to the same backend node, that server suffers CPU exhaustion while neighboring instances sit underutilized. Modern best practice externalizes session state into a shared in-memory database like Redis, allowing any stateless backend node to process any request interchangeably.',
        bn: 'স্টিকি সেশন আইপি হ্যাশ বা কুকির সাহায্যে কোনো ব্যবহারকারীকে একটি নির্দিষ্ট সার্ভারে আটকে রাখে। যদি ওই নির্দিষ্ট সার্ভারটি ক্র্যাশ করে বা বন্ধ হয়ে যায়, তবে ওই সার্ভারে থাকা সব ব্যবহারকারী সাথে সাথে লগআউট হয়ে যান এবং তাদের ডেটা হারিয়ে যায়। এছাড়া এটি কাজের ভারসাম্য নষ্ট করে: কয়েকজন ভারী ব্যবহারকারী একই সার্ভারে আটকে গেলে সেটি অতিরিক্ত চাপে পড়ে যায় অথচ পাশের সার্ভার অলস বসে থাকে। আধুনিক সেরা অভ্যাস হলো সেশন ডেটা রেডিসের মতো কেন্দ্রীয় দ্রুতগতির ডেটাবেজে রাখা, যাতে যেকোনো স্টেটলেস সার্ভার যেকোনো রিকোয়েস্ট সমানভাবে পরিচালনা করতে পারে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'AWS Elastic Load Balancing (ALB / NLB): processes millions of incoming client requests per second across Amazon cloud regions, automatically scaling compute capacity and performing TLS termination at global scale.',
      bn: 'এডব্লিউএস ইলাস্টিক লোড ব্যালেন্সিং: বিশ্বব্যাপী আমাজন ক্লাউডে প্রতি সেকেন্ডে লাখ লাখ ক্লায়েন্ট রিকোয়েস্ট পরিচালনা করে এবং স্বয়ংক্রিয়ভাবে সার্ভার ক্ষমতা বৃদ্ধি ও এসএসএল টার্মিনেশন নিশ্চিত করে।',
    },
    {
      en: 'Netflix Ribbon and Zuul: orchestrates dynamic client-side and edge load balancing across tens of thousands of microservices, dynamically tuning retry backoffs and isolating degraded backend nodes.',
      bn: 'নেটফ্লিক্স রিবন ও জুল: তাদের হাজার হাজার মাইক্রোসার্ভিসের মধ্যে ক্লায়েন্ট-সাইড ও এজ লোড ব্যালেন্সিং সমন্বয় করে, যা ধীরগতির ব্যাকএন্ড নোডগুলোকে আলাদা করে ভিডিও স্ট্রিমিং সচল রাখে।',
    },
    {
      en: 'GitHub Anycast and HAProxy: terminates git pushes and web traffic through globally distributed Anycast BGP IP ranges, directing international traffic to local POPs before routing across private backbones.',
      bn: 'গিটহাব এনিকাস্ট ও এইচএপ্রক্সি: বিশ্বব্যাপী এনিকাস্ট বিজিপি নেটওয়ার্কের মাধ্যমে সমস্ত গিট পুশ ও ওয়েব ট্রাফিক গ্রহণ করে এবং উচ্চগতির অভ্যন্তরীণ নেটওয়ার্কের মাধ্যমে দ্রুততম ক্লাস্টারে পৌঁছে দেয়।',
    },
  ],
  references: [],
};
