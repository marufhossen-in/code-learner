import type { Lesson } from '../../../lib/types';

export const TheClassicServeLesson: Lesson = {
  slug: 'the-classic-serve',
  tech: 'php',
  title: {
    en: 'Production Architecture: OPcache, FastCGI & Architecture Capstone',
    bn: 'প্রোডাকশন আর্কিটেকচার: OPcache, FastCGI এবং আর্কিটেকচার ক্যাপস্টোন'
  },
  summary: {
    en: 'Culminate your PHP mastery by designing production server architectures: configure PHP-FPM process pools, optimize OPcache bytecode compilation in shared memory, harden php.ini (display_errors=Off, error_log), and architect an end-to-end RESTful JSON API microservice.',
    bn: 'প্রোডাকশন সার্ভার আর্কিটেকচার তৈরির মাধ্যমে আপনার পিএইচপি শিক্ষা পূর্ণাঙ্গ করুন: PHP-FPM প্রসেস পুল কনফিগারেশন, শেয়ার্ড মেমোরিতে OPcache বাইটকোড অপ্টিমাইজেশন, php.ini শক্তিশালীকরণ (display_errors=Off, error_log) এবং একটি পূর্ণাঙ্গ RESTful JSON এপিআই মাইক্রোসার্ভিস নির্মাণ।'
  },
  minutes: 36,
  blocks: [
    {
      type: 'heading',
      id: 'production-infrastructure-heading',
      text: {
        en: 'Production Infrastructure: PHP-FPM Process Pools and OPcache Acceleration',
        bn: 'প্রোডাকশন পরিকাঠামো: PHP-FPM প্রসেস পুল এবং OPcache গতিবর্ধন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying high-concurrency PHP applications demands decoupling HTTP ingress from script execution. In enterprise architecture, Nginx handles TLS termination and static file delivery, reverse-proxying dynamic requests to PHP-FPM (FastCGI Process Manager) worker pools over local Unix domain sockets. To avoid reading and compiling source scripts from disk on every HTTP hit, OPcache compiles PHP files into bytecode once and retains them in shared memory (SHM). Setting opcache.validate_timestamps=0 in production eliminates disk checks, boosting application throughput by up to 70 percent.',
        bn: 'উচ্চ ট্রাফিকের পিএইচপি অ্যাপ্লিকেশন চালানোর জন্য ওয়েব সার্ভার এবং স্ক্রিপ্ট এক্সিকিউশনকে আলাদা করা অত্যন্ত জরুরি। আধুনিক এন্টারপ্রাইজ সিস্টেমে Nginx টিএলএস এনক্রিপশন এবং স্ট্যাটিক ফাইল হ্যান্ডেল করে ডাইনামিক রিকোয়েস্টগুলোকে ফাস্ট-সিজিআই ইউনিক্স ডোমেন সকেটের মাধ্যমে PHP-FPM (ফাস্ট-সিজিআই প্রসেস ম্যানেজার) কর্মী পুলে পাঠায়। প্রতিবার ডিস্ক থেকে ফাইল পড়ে কম্পাইল করার ঝামেলা দূর করতে OPcache স্ক্রিপ্টকে একবার কম্পাইল করে সেই বাইটকোড শেয়ার্ড মেমোরিতে (SHM) সংরক্ষণ করে রাখে। প্রোডাকশনে opcache.validate_timestamps=0 কনফিগার করলে ডিস্ক চেকিং বন্ধ হয়ে অ্যাপ্লিকেশনের গতি ৭০ শতাংশ পর্যন্ত বৃদ্ধি পায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: High-throughput production PHP architecture with Nginx reverse proxy, PHP-FPM worker pools, and shared-memory OPcache.',
        bn: 'চিত্র ১: Nginx রিভার্স প্রক্সি, PHP-FPM ওয়ার্কার পুল এবং শেয়ার্ড মেমোরি OPcache সম্বলিত উচ্চ-ক্ষমতাসম্পন্ন প্রোডাকশন পিএইচপি আর্কিটেকচার।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">HIGH-THROUGHPUT PRODUCTION PHP ARCHITECTURE</text>

  <!-- Step 1: Internet Traffic -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Web Traffic</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">Port 80 / 443</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">HTTPS Requests</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" />
    <text x="15" y="112" fill="#cbd5e1" font-size="8" font-family="monospace">REST JSON calls</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Static assets</text>
    <text x="15" y="148" fill="#cbd5e1" font-size="8" font-family="monospace">Web forms</text>
    <text x="12" y="195" fill="#38bdf8" font-size="9" font-family="sans-serif">User Clients</text>
  </g>

  <!-- Step 2: Nginx Web Server -->
  <g transform="translate(195, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Nginx Ingress</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">Reverse Proxy</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">SSL Termination</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="112" fill="#34d399" font-size="8" font-family="monospace">fastcgi_pass</text>
    <text x="15" y="130" fill="#94a3b8" font-size="8" font-family="monospace">unix:/run/php/</text>
    <text x="15" y="148" fill="#94a3b8" font-size="8" font-family="monospace">php8.2-fpm.sock</text>
    <text x="12" y="195" fill="#34d399" font-size="9" font-family="sans-serif">Direct socket call</text>
  </g>

  <!-- Step 3: PHP-FPM Workers -->
  <g transform="translate(360, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. FPM Pool</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">50 Workers</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">max_children: 50</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="112" fill="#fbbf24" font-size="8" font-family="monospace">Processes reqs</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Max 500 reqs</text>
    <text x="15" y="148" fill="#cbd5e1" font-size="8" font-family="monospace">Recycles worker</text>
    <text x="12" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif">Zero memory leak</text>
  </g>

  <!-- Step 4: OPcache SHM -->
  <g transform="translate(525, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7c3aed" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. OPcache SHM</text>
    <text x="12" y="55" fill="#c084fc" font-size="10" font-family="monospace">128 MB RAM</text>
    <text x="12" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">Bytecode Cache</text>
    <rect x="10" y="90" width="125" height="70" rx="5" fill="#0f172a" stroke="#8b5cf6" />
    <text x="15" y="112" fill="#c084fc" font-size="8" font-family="monospace">10000 files</text>
    <text x="15" y="130" fill="#a78bfa" font-size="8" font-family="monospace">Zero disk reads</text>
    <text x="15" y="148" fill="#34d399" font-size="8" font-family="monospace">70% CPU boost</text>
    <text x="12" y="195" fill="#c084fc" font-size="9" font-family="sans-serif">RAM speed code</text>
  </g>

  <!-- Step 5: Database Egress -->
  <g transform="translate(690, 65)">
    <rect width="125" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="125" height="30" rx="8" fill="#db2777" />
    <text x="62" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. PDO Layer</text>
    <text x="10" y="55" fill="#f472b6" font-size="10" font-family="monospace">Persistent DB</text>
    <text x="10" y="75" fill="#94a3b8" font-size="9" font-family="sans-serif">MySQL / SQLite</text>
    <rect x="10" y="90" width="105" height="70" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="12" y="112" fill="#f472b6" font-size="8" font-family="monospace">PDO prepare</text>
    <text x="12" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">ACID locked</text>
    <text x="12" y="148" fill="#34d399" font-size="8" font-family="monospace">Fast output</text>
    <text x="10" y="195" fill="#f472b6" font-size="9" font-family="sans-serif">Sub-10ms ping</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'production-hardening-heading',
      text: {
        en: 'Production Hardening, Error Logging, and RESTful API Architecture',
        bn: 'প্রোডাকশন শক্তিশালীকরণ, এরর লগিং এবং RESTful এপিআই আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never reveal internal error traces to end users in production. Configure php.ini with display_errors = Off and enable log_errors = On to divert stack traces into dedicated filesystem logs. Additionally, disable expose_php to prevent leaking server runtime version numbers. When building microservices, implement clean RESTful routing that inspects request methods, parses input JSON payloads via file_get_contents("php://input"), emits proper HTTP status codes (200, 201, 404), and delivers structured JSON headers.',
        bn: 'প্রোডাকশন সার্ভারে ব্যবহারকারীদের কখনো অভ্যন্তরীণ এরর ট্রেস বা ডেটাবেস পাসওয়ার্ড দেখতে দেবেন না। php.ini ফাইলে display_errors = Off এবং log_errors = On কনফিগার করে সমস্ত এরর আলাদা লগ ফাইলে সংরক্ষণ করতে হয়। তাছাড়া expose_php বন্ধ রাখলে আক্রমণকারীরা সার্ভারের পিএইচপি ভার্সন সহজে জানতে পারে না। মাইক্রোসার্ভিস তৈরির ক্ষেত্রে পরিচ্ছন্ন RESTful রাউটিং তৈরি করে রিকোয়েস্ট মেথড যাচাই, file_get_contents("php://input") দিয়ে JSON ডেটা পার্স, সঠিক HTTP স্ট্যাটাস কোড (200, 201, 404) প্রদান এবং সুশৃঙ্খল JSON হেডার রিটার্ন করা আধুনিক পিএইচপির অন্যতম শ্রেষ্ঠ মানদণ্ড।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of modern PHP RESTful API router and JSON response dispatcher.',
        bn: 'আধুনিক পিএইচপি RESTful এপিআই রাউটার এবং রেসপন্স ডিসপ্যাচারের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP RESTful API Router and Production Response Dispatcher
interface ApiRequest {
  method: 'GET' | 'POST' | 'DELETE';
  path: string;
  body?: Record<string, unknown>;
}

interface ApiResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

export class RestApiRouter {
  public handle(req: ApiRequest): ApiResponse {
    const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

    // Simulating 3 production endpoints: /api/v1/health, GET /products, POST /products
    if (req.method === 'GET' && req.path === '/api/v1/health') {
      return {
        statusCode: 200,
        headers: jsonHeader,
        body: JSON.stringify({ status: 'healthy', opcache: 'active', workers: 50 })
      };
    }

    if (req.method === 'GET' && req.path === '/api/v1/products') {
      return {
        statusCode: 200,
        headers: jsonHeader,
        body: JSON.stringify({ count: 2, items: [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Mouse' }] })
      };
    }

    if (req.method === 'POST' && req.path === '/api/v1/products') {
      return {
        statusCode: 201,
        headers: jsonHeader,
        body: JSON.stringify({ created: true, id: 3, payload: req.body })
      };
    }

    // Unmatched route fallback
    return {
      statusCode: 404,
      headers: jsonHeader,
      body: JSON.stringify({ error: 'Endpoint Not Found', path: req.path })
    };
  }
}

// Instantiate and test the RESTful API router across endpoints
const router = new RestApiRouter();

const healthResponse = router.handle({ method: 'GET', path: '/api/v1/health' });
console.log('Health Check Status:', healthResponse.statusCode); // 200
console.log('Health Payload:', healthResponse.body);

const createResponse = router.handle({
  method: 'POST',
  path: '/api/v1/products',
  body: { name: 'Monitor', price: 250 }
});
console.log('Product Creation Status:', createResponse.statusCode); // 201`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'PHP-FPM',
          def: {
            en: 'High-performance FastCGI Process Manager running persistent pools of worker processes to serve web requests.',
            bn: 'উচ্চ-ক্ষমতাসম্পন্ন ফাস্ট-সিজিআই প্রসেস ম্যানেজার যা ওয়েব অনুরোধ দ্রুত পরিচালনার জন্য সার্বক্ষণিক সচল কর্মী পুল পরিচালনা করে।'
          }
        },
        {
          term: 'OPcache',
          def: {
            en: 'Built-in bytecode cache storing pre-compiled Zend opcodes directly in shared server memory.',
            bn: 'বিল্ট-ইন মেমোরি ক্যাশ যা পূর্ব-কম্পাইলকৃত জেন্ড অপকোড সরাসরি শেয়ার্ড মেমোরিতে সংরক্ষণ করে পুনরাবৃত্ত ডিস্ক অ্যাক্সেস দূর করে।'
          }
        },
        {
          term: 'Shared Memory',
          def: {
            en: 'RAM segment accessible concurrently by multiple operating system worker processes for sub-millisecond retrieval.',
            bn: 'কম্পিউটারের শেয়ার্ড র‍্যাম অংশ যা একাধিক কর্মী প্রসেস অতি দ্রুত ডেটা ও অপকোড পড়ার জন্য একসাথে ব্যবহার করে।'
          }
        },
        {
          term: 'Reverse Proxy',
          def: {
            en: 'Front-facing server (such as Nginx) intercepting client requests, handling TLS, and forwarding traffic to application backends.',
            bn: 'সম্মুখবর্তী সার্ভার (যেমন Nginx) যা ক্লায়েন্টের অনুরোধ গ্রহণ, এসএসএল এনক্রিপশন পরিচালনা এবং ব্যাকএন্ডে ট্রাফিকের ভারসাম্য রক্ষা করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opcache-validate-timestamps-production-ex1',
      kind: 'mcq',
      topic: 'opcache-validate-timestamps-production',
      question: {
        en: 'Why is setting opcache.validate_timestamps=0 recommended for maximum performance in production environments?',
        bn: 'সর্বোচ্চ পারফরম্যান্স নিশ্চিত করতে প্রোডাকশন সার্ভারে opcache.validate_timestamps=0 কনফিগার করা কেন সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'It stops PHP from checking the filesystem timestamp on every request to see if scripts changed, eliminating disk I/O and boosting throughput by up to 70 percent',
          bn: 'ফাইল পরিবর্তিত হয়েছে কি না তা যাচাই করতে এটি প্রতিবার ডিস্কের টাইমস্ট্যাম্প চেক করা বন্ধ রাখে, ফলে অপ্রয়োজনীয় ডিস্ক অ্যাক্সেস দূর হয়ে গতি ৭০ শতাংশ পর্যন্ত বাড়ে'
        },
        {
          en: 'It stops the system clock from ticking',
          bn: 'এটি সিস্টেমের ঘড়ি চলা বন্ধ করে দেয়'
        },
        {
          en: 'It formats the hard drive before every request',
          bn: 'এটি প্রতিটি অনুরোধের আগে হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'It deletes all CSS styles from rendered pages',
          bn: 'এটি রেন্ডার করা পৃষ্ঠা থেকে সমস্ত সিএসএস স্টাইল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Disabling timestamp validation eliminates costly disk stat syscalls; code updates require an explicit reload.',
        bn: 'টাইমস্ট্যাম্প যাচাই বন্ধ রাখলে ডিস্কে অতিরিক্ত অনুসন্ধান করতে হয় না; কোড আপডেট করতে সার্ভার রিলোড দিতে হয়।'
      },
      explanation: {
        en: 'When validate_timestamps is 0, PHP assumes files are static in memory, delivering maximum execution velocity.',
        bn: 'validate_timestamps এর মান ০ হলে পিএইচপি ডিস্কের খোঁজ বন্ধ রেখে সরাসরি মেমোরি থেকে সর্বোচ্চ গতিতে কাজ করে।'
      }
    },
    {
      id: 'display-errors-off-security-ex2',
      kind: 'mcq',
      topic: 'php-ini-display-errors-security',
      question: {
        en: 'Why must display_errors = Off always be configured in production php.ini files?',
        bn: 'প্রোডাকশনের php.ini ফাইলে সর্বদা display_errors = Off কনফিগার করা বাধ্যতামূলক কেন?'
      },
      options: [
        {
          en: 'Displaying raw errors on screen leaks sensitive database credentials, filesystem paths, and internal queries directly to malicious attackers',
          bn: 'পর্দায় সরাসরি এরর দেখালে ডেটাবেস পাসওয়ার্ড, সার্ভারের ইন্টারনাল ফাইল পাথ এবং কোয়েরি হ্যাকারদের কাছে ফাঁস হয়ে যাওয়ার মারাত্মক ঝুঁকি তৈরি হয়'
        },
        {
          en: 'Displaying errors causes the physical monitor screen to crack',
          bn: 'এরর দেখালে কম্পিউটারের মনিটরের কাঁচ ফেটে যায়'
        },
        {
          en: 'It is a requirement for downloading MP3 files',
          bn: 'এমপি৩ গান ডাউনলোড করার জন্য এটি একটি আবশ্যিক শর্ত'
        },
        {
          en: 'Turning errors off makes software impossible to test',
          bn: 'এরর প্রদর্শন বন্ধ করলে সফটওয়্যার আর টেস্ট করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Production errors belong in private log files, never displayed in public user interfaces.',
        bn: 'প্রোডাকশনের ত্রুটিগুলো সর্বদা গোপন লগ ফাইলে সংরক্ষিত হওয়া উচিত, সাধারণ ব্যবহারকারীর স্ক্রিনে নয়।'
      },
      explanation: {
        en: 'display_errors exposes stack traces containing sensitive secrets; always log errors to secure disk logs instead.',
        bn: 'পর্দায় এরর দেখালে পাসওয়ার্ড ও ইন্টারনাল তথ্যের অপব্যবহার হতে পারে; সর্বদা ডিস্ক লগে এরর রেকর্ড করাই উত্তম।'
      }
    },
    {
      id: 'php-fpm-max-requests-recycling-ex3',
      kind: 'mcq',
      topic: 'php-fpm-max-requests-recycling',
      question: {
        en: 'Why do system administrators configure pm.max_requests = 500 in PHP-FPM process pool configurations?',
        bn: 'PHP-FPM প্রসেস পুল কনফিগারেশনে সিস্টেম অ্যাডমিনিস্ট্রেটররা pm.max_requests = 500 কেন নির্ধারণ করেন?'
      },
      options: [
        {
          en: 'It recycles and gracefully respawns worker processes after processing 500 requests, preventing slow memory leaks and third-party library memory fragmentation',
          bn: '৫০০ টি অনুরোধ প্রসেস করার পর এটি কর্মী প্রসেসটিকে পুনরায় চালু করে, যার ফলে ধীরগতির মেমোরি লিক এবং ফ্র্যাগমেন্টেশন সম্পূর্ণ নির্মূল হয়'
        },
        {
          en: 'It limits the website to only 500 total registered users',
          bn: 'এটি ওয়েবসাইটে মোট ব্যবহারকারীর সংখ্যা ৫০০ তে সীমাবদ্ধ করে দেয়'
        },
        {
          en: 'It shuts down the web server after 500 seconds',
          bn: 'এটি ৫০০ সেকেন্ড পর ওয়েব সার্ভার চিরতরে বন্ধ করে দেয়'
        },
        {
          en: 'It deletes 500 old emails from the server mailbox',
          bn: 'এটি সার্ভারের মেইলবক্স থেকে ৫০০ টি পুরোনো ইমেইল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Periodic worker process recycling cleanses accumulated memory residue from long-running pools.',
        bn: 'নিয়মিত কর্মী প্রসেস পুনরায় চালু করলে দীর্ঘক্ষণ চলার ফলে জমে থাকা অবাঞ্ছিত মেমোরি পরিষ্কার হয়ে যায়।'
      },
      explanation: {
        en: 'Periodically recycling worker processes mitigates microscopic memory leaks in compiled C extensions.',
        bn: 'কর্মী প্রসেস পুনর্ব্যবহার মেমোরি লিকের যেকোনো সূক্ষ্ম ঝুঁকি দূর করে সার্ভারকে সর্বদা সতেজ রাখে।'
      }
    },
    {
      id: 'expose-php-off-hardening-ex4',
      kind: 'mcq',
      topic: 'expose-php-header-hardening',
      question: {
        en: 'What security advantage is gained by setting expose_php = Off in production php.ini?',
        bn: 'প্রোডাকশনের php.ini ফাইলে expose_php = Off সেট করলে কোন নিরাপত্তা সুবিধা অর্জিত হয়?'
      },
      options: [
        {
          en: 'It suppresses the "X-Powered-By: PHP/8.2" HTTP response header, preventing automated vulnerability scanners from fingerprinting the exact backend language version',
          bn: 'এটি রেসপন্স থেকে "X-Powered-By: PHP/8.2" হেডার সরিয়ে ফেলে, ফলে স্বয়ংক্রিয় হ্যাকিং স্ক্যানাররা ব্যাকএন্ডের সঠিক ভার্সন সহজে জানতে পারে না'
        },
        {
          en: 'It speeds up fiber optic internet connections',
          bn: 'এটি ফাইবার অপটিক ইন্টারনেটের গতি দ্রুত করে দেয়'
        },
        {
          en: 'It allows PHP to run on mobile smartphones without batteries',
          bn: 'এটি ব্যাটারি ছাড়াই স্মার্টফোনে পিএইচপি চালানোর সুযোগ দেয়'
        },
        {
          en: 'It converts the application from PHP to Python instantly',
          bn: 'এটি সাথে সাথে অ্যাপ্লিকেশনটিকে পিএইচপি থেকে পাইথনে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Concealing version headers adheres to defense-in-depth security principles.',
        bn: 'ভার্সন সংক্রান্ত তথ্য গোপন রাখা সাইবার নিরাপত্তার একটি প্রাথমিক এবং শক্তিশালী নীতি।'
      },
      explanation: {
        en: 'Disabling expose_php prevents opportunistic bots from targeting known vulnerabilities of specific PHP version numbers.',
        bn: 'expose_php বন্ধ রাখলে স্বয়ংক্রিয় বটগুলো নির্দিষ্ট ভার্সনের দুর্বলতা টার্গেট করে আক্রমণ চালানো থেকে বিরত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-classic-serve',
    title: {
      en: 'PHP Production Architecture and PHP-FPM Quiz',
      bn: 'পিএইচপি প্রোডাকশন আর্কিটেকচার এবং PHP-FPM কুইজ'
    },
    questions: [
      {
        id: 'quiz-opcache-reset-deployment',
        kind: 'mcq',
        topic: 'opcache-reset-zero-downtime',
        question: {
          en: 'When deploying fresh code to a server with opcache.validate_timestamps=0, what command must be issued to load the new bytecode?',
          bn: 'opcache.validate_timestamps=0 কনফিগার করা সার্ভারে নতুন কোড ডিপ্লয় করার পর নতুন বাইটকোড কার্যকর করতে কী করতে হয়?'
        },
        options: [
          {
            en: 'Invoke opcache_reset() or perform a graceful reload of the PHP-FPM service (e.g. systemctl reload php8.2-fpm) to flush shared memory cache',
            bn: 'শেয়ার্ড মেমোরি খালি করতে opcache_reset() কল করতে হয় অথবা PHP-FPM সার্ভিসটি নিরাপদে রিলোড (যেমন systemctl reload php8.2-fpm) দিতে হয়'
          },
          {
            en: 'Reboot the entire data center electrical generator',
            bn: 'ডেটা সেন্টারের পুরো বিদ্যুৎ জেনারেটর রিবুট করতে হয়'
          },
          {
            en: 'Delete all user database tables',
            bn: 'ব্যবহারকারীদের সমস্ত ডেটাবেস টেবিল মুছে ফেলতে হয়'
          },
          {
            en: 'Send an email to the PHP core development team',
            bn: 'পিএইচপি কোর ডেভেলপার দলকে একটি ইমেইল পাঠাতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A graceful service reload flushes OPcache shared memory without dropping active TCP connections.',
          bn: 'সার্ভিস নিরাপদে রিলোড দিলে কোনো চলমান সংযোগ না কেটেই মেমোরির পুরোনো ক্যাশ পরিষ্কার হয়ে যায়।'
        },
        explanation: {
          en: 'Because timestamp validation is disabled, triggering opcache_reset() or reloading PHP-FPM is mandatory to compile new code.',
          bn: 'টাইমস্ট্যাম্প পরীক্ষা বন্ধ থাকায় মেমোরি ক্যাশ খালি করে নতুন কোড সক্রিয় করতে PHP-FPM রিলোড আবশ্যক।'
        }
      },
      {
        id: 'quiz-fastcgi-buffering-nginx',
        kind: 'mcq',
        topic: 'fastcgi-buffering-advantages',
        question: {
          en: 'How does Nginx fastcgi_buffering protect PHP-FPM workers from slow client connections (e.g. 3G mobile users)?',
          bn: 'Nginx এর fastcgi_buffering কীভাবে ধীরগতির ক্লায়েন্ট (যেমন 3G মোবাইল ব্যবহারকারী) থেকে PHP-FPM কর্মীদের রক্ষা করে?'
        },
        options: [
          {
            en: 'Nginx buffers the full PHP response rapidly in memory, freeing the PHP worker immediately to process subsequent requests while Nginx slowly streams bytes to the mobile client',
            bn: 'Nginx সম্পূর্ণ রেসপন্সটি দ্রুত নিজের মেমোরিতে নিয়ে পিএইচপি কর্মীকে পরবর্তী কাজের জন্য মুক্ত করে দেয় এবং নিজে ধীরে ধীরে মোবাইলে ডেটা পাঠাতে থাকে'
          },
          {
            en: 'It disconnects any client that takes more than 1 second to download a page',
            bn: '১ সেকেন্ডের বেশি সময় লাগলে এটি ক্লায়েন্টের সংযোগ সাথে সাথে বিচ্ছিন্ন করে দেয়'
          },
          {
            en: 'It upgrades the client phone to a 5G connection',
            bn: 'এটি ব্যবহারকারীর ফোনকে স্বয়ংক্রিয়ভাবে একটি ৫জি সংযোগে উন্নীত করে'
          },
          {
            en: 'FastCGI buffering only functions on Saturday evenings',
            bn: 'ফাস্ট-সিজিআই বাফারিং কেবল শনিবার সন্ধ্যায় কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Buffering decouples high-speed backend execution from slow downstream consumer bandwidth.',
          bn: 'বাফারিং দ্রুতগতির ব্যাকএন্ড সার্ভারকে ব্যবহারকারীর ধীরগতির ইন্টারনেটের প্রভাব থেকে সুরক্ষিত রাখে।'
        },
        explanation: {
          en: 'FastCGI buffering prevents slow client networks from locking up expensive PHP worker processes.',
          bn: 'বাফারিং নিশ্চিত করে যে ক্লায়েন্টের ইন্টারনেট ধীরগতির হলেও পিএইচপি প্রসেস অযথা আটকে থাকবে না।'
        }
      },
      {
        id: 'quiz-php-input-stream-reading',
        kind: 'mcq',
        topic: 'php-input-stream-json-apis',
        question: {
          en: 'Why is file_get_contents("php://input") preferred over $_POST when handling JSON payload requests in REST APIs?',
          bn: 'REST এপিআইতে JSON পেলোড রিকোয়েস্ট হ্যান্ডেল করার সময় $_POST এর বদলে file_get_contents("php://input") কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: '$_POST only populates on urlencoded or multipart form submissions, whereas php://input provides raw direct access to raw JSON body streams',
            bn: '$_POST কেবল সাধারণ ফর্ম ডেটার ক্ষেত্রেই তৈরি হয়, আর php://input সরাসরি আগত কাঁচা (raw) JSON বডি স্ট্রিম পড়ার সুযোগ দেয়'
          },
          {
            en: 'php://input encrypts the data using AES-256',
            bn: 'php://input ডেটাকে AES-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: '$_POST is completely deleted from PHP 8',
            bn: 'পিএইচপি ৮ থেকে $_POST সম্পূর্ণ মুছে ফেলা হয়েছে'
          },
          {
            en: 'php://input only runs on Windows 98',
            bn: 'php://input কেবল উইন্ডোজ ৯৮ এ চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Non-form payloads like application/json are not parsed into $_POST and must be read from the raw input stream.',
          bn: 'application/json ডেটা সরাসরি $_POST এ জমা হয় না; কাঁচা স্ট্রিম থেকে তা পড়ে ডিকোড করতে হয়।'
        },
        explanation: {
          en: 'php://input streams raw request body bytes directly, allowing json_decode() to parse complex JSON payloads cleanly.',
          bn: 'php://input এর মাধ্যমে সরাসরি রিকোয়েস্ট বডি পড়ে json_decode() দিয়ে নিখুঁতভাবে অবজেক্ট বা অ্যারেতে রূপান্তর করা যায়।'
        }
      },
      {
        id: 'quiz-http-response-code-signaling',
        kind: 'mcq',
        topic: 'http-response-code-function',
        question: {
          en: 'What PHP function correctly sets the outgoing HTTP status header to 201 Created for a newly persisted resource?',
          bn: 'নতুন তৈরি হওয়া তথ্যের ক্ষেত্রে বহির্গামী HTTP স্ট্যাটাস হেডার 201 Created সেট করার সঠিক পিএইচপি ফাংশন কোনটি?'
        },
        options: [
          { en: 'http_response_code(201);', bn: 'http_response_code(201);' },
          { en: 'set_status("201");', bn: 'set_status("201");' },
          { en: 'echo 201;', bn: 'echo 201;' },
          { en: '$_SERVER["STATUS"] = 201;', bn: '$_SERVER["STATUS"] = 201;' }
        ],
        answer: 0,
        hint: {
          en: 'http_response_code() sets or retrieves the HTTP response status code.',
          bn: 'http_response_code() ফাংশন দিয়ে HTTP রেসপন্স স্ট্যাটাস কোড সেট বা জানা যায়।'
        },
        explanation: {
          en: 'http_response_code(201) sets the HTTP status header cleanly before response payload streaming begins.',
          bn: 'http_response_code(201) রেসপন্স শুরু হওয়ার আগেই নির্ভুলভাবে স্ট্যাটাস কোডারটি স্থাপন করে।'
        }
      }
    ]
  }
};
