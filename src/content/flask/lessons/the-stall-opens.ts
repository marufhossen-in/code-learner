import type { Lesson } from '../../../lib/types';

export const TheStallOpensLesson: Lesson = {
  slug: 'the-stall-opens',
  tech: 'flask',
  title: {
    en: 'Production & Deployment — Gunicorn WSGI, Nginx & ProxyFix',
    bn: 'প্রোডাকশন ও ডেপ্লয়মেন্ট — ইউনিকর্ন WSGI, Nginx ও ProxyFix'
  },
  summary: {
    en: 'Shipping a production-ready Flask application requires automated test suites, pre-fork WSGI workers, reverse proxy architecture, and proxy header sanitization. In this capstone lesson, you will master Gunicorn process management, Nginx integration, Werkzeug ProxyFix middleware, and automated pytest fixtures.',
    bn: 'একটি প্রোডাকশন-রেডি ফ্লাস্ক অ্যাপ্লিকেশন ডেপ্লয় করার জন্য স্বয়ংক্রিয় টেস্ট স্যুট, প্রি-ফর্ক WSGI ওয়ার্কার, রিভার্স প্রক্সি আর্কিটেকচার এবং প্রক্সি হেডার ম্যানেজমেন্ট অপরিহার্য। এই সমাপনী পাঠে আপনি Gunicorn প্রসেস ম্যানেজমেন্ট, Nginx ইন্টিগ্রেশন, Werkzeug ProxyFix মিডলওয়্যার এবং স্বয়ংক্রিয় pytest ফিক্সচার গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'production-deployment-topology',
      text: {
        en: 'The Production Multi-Tier Deployment Topology',
        bn: 'প্রোডাকশন বহু-স্তর বিশিষ্ট ডেপ্লয়মেন্ট টপোলজি'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you take a Flask web application live to millions of users, the development server is strictly prohibited. Production architectures deploy Nginx as a reverse proxy facing the public internet to handle SSL encryption and static caching, forwarding requests to a pool of Gunicorn Web Server Gateway Interface (WSGI) worker processes executing your Python application.',
        bn: 'যখন আপনি ফ্লাস্ক অ্যাপ্লিকেশনকে লাখ লাখ ব্যবহারকারীর জন্য লাইভ করেন, তখন লোকাল ডেভেলপমেন্ট সার্ভার ব্যবহার করা সম্পূর্ণ নিষিদ্ধ। প্রোডাকশন আর্কিটেকচারে পাবলিক ইন্টারনেটের সামনে Nginx রিভার্স প্রক্সি হিসেবে বসে SSL এনক্রিপশন ও ক্যাশিং সামলায় এবং পেছনের Gunicorn Web Server Gateway Interface (WSGI) ওয়ার্কার পুলে রিকোয়েস্ট পাঠিয়ে পাইথন কোড চালায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Gunicorn (Green Unicorn)',
          def: {
            en: 'A battle-tested Python WSGI HTTP server using a master-worker process model to run multiple concurrent application instances.',
            bn: 'একটি নির্ভরযোগ্য পাইথন WSGI সার্ভার যা মাস্টার-ওয়ার্কার প্রসেস মডেল ব্যবহারের মাধ্যমে একই সাথে একাধিক অ্যাপ ইনস্ট্যান্স পরিচালনা করে।'
          }
        },
        {
          term: 'ProxyFix Middleware',
          def: {
            en: 'A Werkzeug WSGI middleware inspecting X-Forwarded-For and X-Forwarded-Proto headers to restore the true client IP and HTTPS scheme.',
            bn: 'একটি Werkzeug মিডলওয়্যার যা X-Forwarded-For ও Proto হেডার পড়ে আসল ক্লায়েন্ট আইপি ও এইচটিটিপিএস প্রোটোকল পুনরুদ্ধার করে।'
          }
        },
        {
          term: 'Flask test_client()',
          def: {
            en: 'A built-in test harness simulating HTTP requests portlessly in Python memory for fast integration and end-to-end testing.',
            bn: 'ফ্লাস্কের একটি বিল্ট-ইন টেস্ট টুল যা কোনো নেটওয়ার্ক পোর্ট ছাড়াই সরাসরি মেমরির ভেতর দ্রুত এইচটিটিপি রিকোয়েস্ট সিমুলেট করে।'
          }
        },
        {
          term: 'Worker Formula ((2 x CPU) + 1)',
          def: {
            en: 'The standard Gunicorn sizing heuristic balancing concurrent execution with memory usage across available CPU cores.',
            bn: 'ইউনিকর্নের আদর্শ ওয়ার্কার গণনার সূত্র যা সিপিইউ কোরের সাথে মেমরি খরচের চমৎকার সমতা বজায় রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'production-checklist-matrix',
      text: {
        en: 'Production Hardening Checklist Matrix',
        bn: 'প্রোডাকশন হার্ডেনিং চেকলিস্ট ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Configuration Area', bn: 'কনফিগারেশন ক্ষেত্র' },
        { en: 'Hardened Production Value', bn: 'প্রোডাকশন নিরাপদ মান' },
        { en: 'Security Impact', bn: 'নিরাপত্তা প্রভাব' }
      ],
      rows: [
        [
          { en: 'DEBUG Mode', bn: 'DEBUG মোড' },
          { en: 'False (FLASK_DEBUG=0)', bn: 'False (FLASK_DEBUG=0)' },
          { en: 'Disables the interactive in-browser debugger, preventing arbitrary code execution', bn: 'ব্রাউজারে ডিবাগার টার্মিনাল বন্ধ করে সার্ভারে অননুমোদিত কোড চালানো রোধ করে' }
        ],
        [
          { en: 'SECRET_KEY', bn: 'SECRET_KEY' },
          { en: 'os.environ["SECRET_KEY"] (64-byte random string)', bn: 'os.environ["SECRET_KEY"] (৬৪-বাইটের গোপন স্ট্রিং)' },
          { en: 'Guarantees unguessable cryptographic signing for session cookies and CSRF tokens', bn: 'সেশন কুকি ও সিএসআরএফ টোকেনে অনুমানের অতীত ক্রিপ্টোগ্রাফিক সুরক্ষা দেয়' }
        ],
        [
          { en: 'WSGI Middleware', bn: 'WSGI মিডলওয়্যার' },
          { en: 'app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1)', bn: 'app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1)' },
          { en: 'Accurately restores request.remote_addr and request.scheme behind Nginx', bn: 'Nginx-এর পেছনে সঠিক ক্লায়েন্ট আইপি ও https প্রোটোকল পুনরুদ্ধার করে' }
        ],
        [
          { en: 'Worker Concurrency', bn: 'ওয়ার্কার কনকারেন্সি' },
          { en: 'gunicorn -w 4 -b 0.0.0.0:8000 "wsgi:app"', bn: 'gunicorn -w 4 -b 0.0.0.0:8000 "wsgi:app"' },
          { en: 'Ensures requests are distributed across multiple worker processes', bn: 'রিকোয়েস্টগুলোকে একাধিক স্বাধীন ওয়ার্কার প্রসেসে সমানভাবে ভাগ করে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'test-client-code',
      text: {
        en: 'Working Flask Test Client and ProxyFix Simulation',
        bn: 'কার্যকরী ফ্লাস্ক টেস্ট ক্লায়েন্ট ও ProxyFix সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Flask test_client and Werkzeug ProxyFix Middleware
class MockProxyFix {
  constructor(app, xFor = 1, xProto = 1) {
    this.app = app;
    this.xFor = xFor;
    this.xProto = xProto;
  }

  handle(environ) {
    // When behind reverse proxy, rewrite remote_addr from X-Forwarded-For
    if (this.xFor && environ.headers['X-Forwarded-For']) {
      const parts = environ.headers['X-Forwarded-For'].split(',');
      environ.remoteAddr = parts[parts.length - this.xFor].trim();
    }
    if (this.xProto && environ.headers['X-Forwarded-Proto']) {
      environ.scheme = environ.headers['X-Forwarded-Proto'];
    }
    return this.app.dispatch(environ);
  }
}

class MockProductionApp {
  dispatch(environ) {
    return {
      status: 200,
      clientIp: environ.remoteAddr,
      isSecure: environ.scheme === 'https'
    };
  }
}

// 1. Initializing app and wrapping in ProxyFix
const baseApp = new MockProductionApp();
const proxiedApp = new MockProxyFix(baseApp, 1, 1);

// 2. Simulating incoming request forwarded from Nginx
const incomingRequest = {
  remoteAddr: '127.0.0.1', // Raw socket from local Nginx
  scheme: 'http',
  headers: {
    'X-Forwarded-For': '203.0.113.195',
    'X-Forwarded-Proto': 'https'
  }
};

const result = proxiedApp.handle(incomingRequest);

console.log('Restored real visitor IP:', result.clientIp);
// -> Restored real visitor IP: 203.0.113.195
console.log('Restored HTTPS secure flag:', result.isSecure);
// -> Restored HTTPS secure flag: true
console.log('Production response status code:', result.status);
// -> Production response status code: 200`,
      caption: {
        en: 'ProxyFix rewriting remote address to real visitor IP 203.0.113.195 with status 200',
        bn: 'ProxyFix রিমোট আইপিকে আসল ভিজিটরের আইপি ২০৩.০.১১৩.১৯৫ এবং ২০০ স্ট্যাটাসে রূপান্তর করছে'
      }
    },
    {
      type: 'heading',
      id: 'gunicorn-and-nginx-setup',
      text: {
        en: 'Gunicorn Worker Configuration and Logging Practices',
        bn: 'ইউনিকর্ন ওয়ার্কার কনফিগারেশন ও লগিং কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying Gunicorn requires sizing worker pools appropriately. On a server with 2 CPU cores, standard heuristic dictates (2 x 2) + 1 = 5 workers. Workers should communicate with Nginx over an isolated Unix domain socket, and application logs should be directed to stdout and stderr so container engines can aggregate diagnostics cleanly.',
        bn: 'Gunicorn ডেপ্লয় করার সময় ওয়ার্কার পুল সঠিকভাবে নির্ধারণ করা জরুরি। ২ কোরের সার্ভারের জন্য আদর্শ নিয়ম অনুযায়ী (২ x ২) + ১ = ৫ জন ওয়ার্কার প্রয়োজন। ওয়ার্কারদের ইউনিক্স ডোমেন সকেটের মাধ্যমে Nginx-এর সাথে যুক্ত রাখা উচিত এবং লগগুলো কনসোলে পাঠানো উচিত যাতে কন্টেইনার ইঞ্জিন সহজেই তা সংগ্রহ করতে পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Golden Worker Sizing: Set Gunicorn workers to (2 x CPU cores) + 1 to keep CPU saturated while workers wait on I/O.',
          bn: '১. ওয়ার্কার গণনার মূলসূত্র: মেমরি ও সিপিইউ ব্যবহারের ভারসাম্য বজায় রাখতে (২ x কোর) + ১ সংখ্যক ওয়ার্কার রাখুন।'
        },
        {
          en: '2. Always Bind ProxyFix: Wrap app.wsgi_app with ProxyFix whenever running behind Nginx, Traefik, or cloud load balancers.',
          bn: '২. ProxyFix যুক্ত করা আবশ্যক: Nginx বা ক্লাউড লোড ব্যালেন্সারের পেছনে থাকলে সর্বদা ProxyFix মিডলওয়্যার ব্যবহার করুন।'
        },
        {
          en: '3. Test Client for CI: Use app.test_client() in pytest test suites to achieve portless, high-speed end-to-end verification.',
          bn: '৩. সিআইতে টেস্ট ক্লায়েন্ট: দ্রুত স্বয়ংক্রিয় পরীক্ষার জন্য pytest টেস্ট স্যুটে app.test_client() ব্যবহার করুন।'
        },
        {
          en: '4. Stream Logs to Standard Output: In Docker environments, log application events to stdout rather than writing to local files.',
          bn: '৪. কনসোলে লগ পাঠানো: ডকার কন্টেইনারে লোকাল ফাইলে না লিখে সরাসরি stdout ও stderr-এ লগ পাঠানোর ব্যবস্থা রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-stp-ex1',
      kind: 'mcq',
      topic: 'gunicorn recommended worker formula',
      question: {
        en: 'What is the official Gunicorn recommended formula for calculating the baseline number of worker processes on a server with N CPU cores?',
        bn: 'N সংখ্যক সিপিইউ কোরের সার্ভারের জন্য ওয়ার্কার প্রসেস নির্ধারণে ইউনিকর্নের অফিসিয়াল প্রস্তাবিত সূত্র কোনটি?'
      },
      options: [
        {
          en: '(2 x N) + 1 workers',
          bn: '(২ x N) + ১ জন ওয়ার্কার'
        },
        {
          en: '100 x N workers',
          bn: '১০০ x N জন ওয়ার্কার'
        },
        {
          en: 'Exactly 1 worker regardless of CPU core count',
          bn: 'সিপিইউ কোর যাই হোক না কেন সর্বদা ঠিক ১ জন ওয়ার্কার'
        },
        {
          en: 'N squared workers',
          bn: 'N এর বর্গ সংখ্যক ওয়ার্কার'
        }
      ],
      answer: 0,
      hint: {
        en: 'For a 4-core machine, (2 * 4) + 1 = 9 workers.',
        bn: '৪ কোরের মেশিনের জন্য (২ * ৪) + ১ = ৯ জন ওয়ার্কার।'
      },
      explanation: {
        en: 'Gunicorn documentation recommends (2 x cores) + 1 workers. This guarantees that when workers pause for disk or database I/O, other workers are ready to handle requests.',
        bn: 'ইউনিকর্ন (২ x কোর) + ১ ওয়ার্কারের সুপারিশ করে। একজন ওয়ার্কার ডাটাবেজ আই/ও-র জন্য অপেক্ষা করলে অন্যরা বাকি রিকোয়েস্ট নির্বিঘ্নে প্রসেস করতে পারে।'
      }
    },
    {
      id: 'fl-stp-ex2',
      kind: 'mcq',
      topic: 'purpose of werkzeug proxyfix middleware',
      question: {
        en: 'Why is wrapping "app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1)" mandatory when deploying Flask behind an Nginx reverse proxy?',
        bn: 'Nginx রিভার্স প্রক্সির পেছনে ফ্লাস্ক ডেপ্লয় করার সময় "app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1)" কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Because Gunicorn only sees the local proxy IP (127.0.0.1) and HTTP scheme; ProxyFix rewrites the WSGI environment from X-Forwarded-For and X-Forwarded-Proto headers to restore the true client IP and HTTPS protocol',
          bn: 'কারণ Gunicorn কেবল লোকাল প্রক্সি আইপি (127.0.0.1) দেখতে পায়; ProxyFix হেডার পড়ে আসল ক্লায়েন্ট আইপি ও HTTPS প্রোটোকল সঠিকভাবে পুনরুদ্ধার করে'
        },
        {
          en: 'It accelerates image downloading speeds by 400 percent',
          bn: 'এটি ছবি ডাউনলোডের গতি ৪০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It automatically repairs syntax errors in Python code',
          bn: 'এটি পাইথন কোডের সিনট্যাক্স এরর নিজে থেকেই ঠিক করে দেয়'
        },
        {
          en: 'ProxyFix is only needed for WebSocket connections',
          bn: 'ProxyFix কেবল ওয়েবসকেট কানেকশনের জন্যই প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ProxyFix reads proxy headers to discover the real client address and HTTPS state.',
        bn: 'ProxyFix প্রক্সি হেডার পড়ে আসল ক্লায়েন্টের আইপি এবং এইচটিটিপিএস অবস্থা শনাক্ত করে।'
      },
      explanation: {
        en: 'Without ProxyFix, Flask assumes all incoming traffic originates from 127.0.0.1 over plain HTTP, corrupting audit logs, rate-limiters, and url_for redirection schemes.',
        bn: 'ProxyFix না থাকলে ফ্লাস্ক সব ট্রাফিককে 127.0.0.1 এবং প্লেইন HTTP মনে করে, যা অডিট লগ ও রেট-লিমিটকে নষ্ট করে দেয়।'
      }
    },
    {
      id: 'fl-stp-ex3',
      kind: 'mcq',
      topic: 'flask test client advantage in pytest',
      question: {
        en: 'Why is using Flask built-in "test_client()" in automated test suites superior to making live HTTP requests with the requests library?',
        bn: 'স্বয়ংক্রিয় টেস্ট স্যুটে requests লাইব্রেরি দিয়ে লাইভ কলের বদলে ফ্লাস্কের বিল্ট-ইন "test_client()" ব্যবহার করা কেন শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'It operates portlessly in-memory at the WSGI layer, running tests hundreds of times faster without spinning up network sockets or conflicting with occupied TCP ports',
          bn: 'এটি কোনো নেটওয়ার্ক পোর্ট ছাড়াই সরাসরি WSGI মেমরির ভেতর কাজ করে, ফলে পোর্ট সংঘাত ছাড়াই শত শত টেস্ট পলকে সম্পন্ন হয়'
        },
        {
          en: 'test_client() automatically writes all test assertions for you',
          bn: 'test_client() আপনার হয়ে সমস্ত টেস্ট নিজে থেকেই লিখে দেয়'
        },
        {
          en: 'Live HTTP requests cannot be executed on Linux machines',
          bn: 'লিনাক্স কম্পিউটারে লাইভ এইচটিটিপি রিকোয়েস্ট চালানো অসম্ভব'
        },
        {
          en: 'test_client() converts test results into video files',
          bn: 'test_client() পরীক্ষার ফলাফলকে ভিডিও ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The test client passes simulated WSGI environ dictionaries directly in memory.',
        bn: 'টেস্ট ক্লায়েন্ট কোনো নেটওয়ার্ক পোর্ট ছাড়াই সরাসরি মেমরিতে WSGI রিকোয়েস্ট চালায়।'
      },
      explanation: {
        en: 'test_client runs in the same Python process without TCP overhead, testing URL routing, session handling, and views with maximum speed and reliability.',
        bn: 'test_client কোনো টিসিপি পোর্ট ছাড়াই মেমরিতে দ্রুত রিকোয়েস্ট পাস করে, যার ফলে সেকেন্ডের মধ্যে শত শত টেস্ট চালানো সম্ভব হয়।'
      }
    },
    {
      id: 'fl-stp-ex4',
      kind: 'mcq',
      topic: 'environment variables in docker containers',
      question: {
        en: 'How should sensitive configuration values (like SECRET_KEY and DATABASE_URL) be passed into a production containerized Flask application?',
        bn: 'প্রোডাকশন কন্টেইনারে চলা ফ্লাস্ক অ্যাপ্লিকেশনে সংবেদনশীল মানগুলো (যেমন SECRET_KEY ও DATABASE_URL) কীভাবে পাস করা উচিত?'
      },
      options: [
        {
          en: 'Injected dynamically as operating system environment variables (via Docker -e, docker-compose.yml, or Kubernetes Secrets) and read using os.environ in Python',
          bn: 'অপারেটিং সিস্টেমের পরিবেশ চলক (Docker -e বা Kubernetes Secrets) হিসেবে পাস করে এবং পাইথনে os.environ দিয়ে লোড করে'
        },
        {
          en: 'Hardcoded in plain text inside the public GitHub repository',
          bn: 'পাবলিক গিটহাব রিপোজিটরির ভেতর প্লেইন টেক্সট হিসেবে লিখে রেখে'
        },
        {
          en: 'Stored in a public HTML template comment {# SECRET_KEY #}',
          bn: 'পাবলিক এইচটিএমএল টেমপ্লেট কমেন্টে লিখে রেখে'
        },
        {
          en: 'Sent to the server in URL query parameters on every page visit',
          bn: 'প্রতিটি পেজ ভিজিটের সময় ইউআরএল কোয়েরি প্যারামিটারে পাঠিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Twelve-Factor App methodology mandates storing configuration in the environment.',
        bn: 'টুয়েলভ-ফ্যাক্টর অ্যাপ নীতিমালা অনুযায়ী সমস্ত কনফিগারেশন পরিবেশ চলকে রাখা বাধ্যতামূলক।'
      },
      explanation: {
        en: 'Twelve-Factor App principles mandate keeping configuration strictly separated from code. Secrets must be injected via environment variables, never hardcoded.',
        bn: 'সিকিউরিটি স্ট্যান্ডার্ড অনুযায়ী গোপনীয় চাবি কখনো কোডের ভেতর রাখা যাবে না; এগুলো পরিবেশ চলকের মাধ্যমে বাইরে থেকে ইনজেক্ট করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-stall-opens-quiz',
    title: {
      en: 'Flask Production, WSGI & Deployment Quiz',
      bn: 'ফ্লাস্ক প্রোডাকশন, WSGI ও ডেপ্লয়মেন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-asynchronous-workers-gevent',
        kind: 'mcq',
        topic: 'gevent async workers for io bound flask apps',
        question: {
          en: 'When should a production Flask deployment switch Gunicorn worker class from the default synchronous worker (sync) to an asynchronous worker like "gevent"?',
          bn: 'প্রোডাকশনে কখন Gunicorn-এর ডিফল্ট সিনক্রোনাস (sync) ওয়ার্কারের বদলে "gevent"-এর মতো অ্যাসিনক্রোনাস ওয়ার্কার বেছে নেওয়া উচিত?'
        },
        options: [
          {
            en: 'When the application handles thousands of concurrent long-lived connections (such as streaming APIs, long-polling, or slow external HTTP webhooks) where sync workers would quickly run out of threads',
            bn: 'যখন অ্যাপ্লিকেশনকে একই সাথে হাজার হাজার দীর্ঘস্থায়ী সংযোগ (যেমন স্ট্রিমিং এপিআই বা ধীরগতির ওয়েবহুক) সামলাতে হয় যেখানে সিঙ্ক ওয়ার্কার দ্রুত শেষ হয়ে যেত'
          },
          {
            en: 'Only when running on Windows 95 operating systems',
            bn: 'কেবল উইন্ডোজ ৯৫ অপারেটিং সিস্টেমে সার্ভার চললে'
          },
          {
            en: 'When you want to convert the website from Python to Java',
            bn: 'যখন আপনি ওয়েবসাইটটিকে পাইথন থেকে জাভাতে বদলে নিতে চান'
          },
          {
            en: 'gevent is deprecated and should never be chosen',
            bn: 'gevent বাতিল করা হয়েছে এবং এটি ব্যবহার করা যাবে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Async greenlet workers handle high-concurrency I/O-bound connections with low memory.',
          bn: 'অ্যাসিনক্রোনাস গ্রিনলেট ওয়ার্কার খুব কম মেমরি খরচে বিপুল সংখ্যক আই/ও সংযোগ সামলায়।'
        },
        explanation: {
          en: 'Sync workers can only handle one request per worker at a time. For I/O bound streaming or slow connections, gevent uses lightweight coroutines (greenlets) to handle thousands of sockets.',
          bn: 'ডিফল্ট সিঙ্ক ওয়ার্কার একবারে একটি রিকোয়েস্টই ধরে। দীর্ঘমেয়াদী স্ট্রিমিং বা হাজার হাজার সংযোগ সামলাতে gevent করুটিনের মাধ্যমে উচ্চ কনকারেন্সি দেয়।'
        }
      },
      {
        id: 'q-nginx-static-serving-bypass',
        kind: 'mcq',
        topic: 'why nginx serves static files directly in production',
        question: {
          en: 'Why is Nginx configured to serve static assets (images, CSS, JS) directly from the filesystem rather than proxying them to Gunicorn and Flask?',
          bn: 'প্রোডাকশনে স্ট্যাটিক ফাইলগুলো Gunicorn বা ফ্লাস্কে না পাঠিয়ে সরাসরি Nginx দিয়ে পরিবেশন করার ব্যবস্থা কেন করা হয়?'
        },
        options: [
          {
            en: 'Nginx is written in optimized C and uses kernel sendfile() to stream static files directly from disk to network sockets without executing heavy Python interpreter code, freeing Gunicorn workers for dynamic requests',
            bn: 'Nginx অপটিমাইজড সি ভাষায় তৈরি এবং কার্নেল sendfile() ব্যবহার করে কোনো পাইথন কোড না চালিয়েই সরাসরি ডিস্ক থেকে ফাইল পাঠায়, ফলে ওয়ার্কাররা মুক্ত থাকে'
          },
          {
            en: 'Flask cannot read binary images or font files',
            bn: 'ফ্লাস্ক কোনো বাইনারি ছবি বা ফন্ট ফাইল পড়তে পারে না'
          },
          {
            en: 'Python requires 10 seconds to read each CSS file',
            bn: 'প্রতিটি সিএসএস ফাইল পড়তে পাইথনের ১০ সেকেন্ড সময় লাগে'
          },
          {
            en: 'Nginx automatically deletes old images to save disk space',
            bn: 'Nginx ডিস্ক খালি করতে পুরোনো ছবিগুলো নিজে থেকে মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nginx serves static files at bare-metal kernel speed without Python overhead.',
          bn: 'Nginx কোনো পাইথন ইন্টারপ্রেটার ছাড়াই সরাসরি কার্নেল গতিতে স্ট্যাটিক ফাইল পাঠায়।'
        },
        explanation: {
          en: 'Serving static files through Python ties up expensive WSGI workers. Nginx serves static assets directly with near-zero CPU and memory overhead, freeing Python for business logic.',
          bn: 'পাইথনের মাধ্যমে স্ট্যাটিক ফাইল পাঠালে ওয়ার্কারের ওপর চাপ পড়ে। Nginx অতি দ্রুত সরাসরি ফাইল সরবরাহ করে ফ্লাস্ক ওয়ার্কারদের ভারী কাজের জন্য খালি রাখে।'
        }
      },
      {
        id: 'q-proxyfix-trust-hops-configuration',
        kind: 'mcq',
        topic: 'configuring proxyfix hops accurately to prevent spoofing',
        question: {
          en: 'Why is it critical to set the exact number of trusted proxy hops (e.g. x_for=1) in ProxyFix rather than blindly trusting all incoming headers?',
          bn: 'ProxyFix-এ সব হেডার অন্ধভাবে বিশ্বাস না করে বিশ্বস্ত প্রক্সি হপের সঠিক সংখ্যা (যেমন x_for=1) নির্ধারণ করা কেন অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'If you set x_for=2 when only 1 reverse proxy exists, an attacker can inject a fake X-Forwarded-For header to spoof their IP address and bypass IP rate limits or security bans',
            bn: 'যদি ১টি প্রক্সি থাকা সত্ত্বেও x_for=2 দেওয়া হয়, তবে আক্রমণকারী একটি নকল X-Forwarded-For হেডার পাঠিয়ে নিজের আইপি গোপন করতে এবং ব্যান বাইপাস করতে পারবে'
          },
          {
            en: 'It crashes the Linux kernel with a segmentation fault',
            bn: 'এটি সেগমেন্টেশন ফল্ট দিয়ে লিনাক্স কার্নেল ক্র্যাশ করায়'
          },
          {
            en: 'The PostgreSQL database disconnects immediately',
            bn: 'পোস্টগ্রেস ডাটাবেজ অবিলম্বে সংযোগ বিচ্ছিন্ন করে'
          },
          {
            en: 'Browsers refuse to render CSS styles when hops are specified',
            bn: 'হপের সংখ্যা উল্লেখ থাকলে ব্রাউজার সিএসএস রেন্ডার করতে অস্বীকার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Untrusted hops allow malicious clients to forge IP headers.',
          bn: 'অতিরিক্ত হপ দিলে আক্রমণকারী নিজেই নকল আইপি হেডার বানিয়ে সার্ভারকে বিভ্রান্ত করতে পারে।'
        },
        explanation: {
          en: 'ProxyFix counts headers backwards from the right (most recent trusted proxy). If the hop count is misconfigured, client-forged headers are accepted as the legitimate IP.',
          bn: 'ProxyFix পেছন থেকে বিশ্বস্ত প্রক্সির হেডার গুনে বের করে। হপের সংখ্যা ভুল দিলে আক্রমণকারীর পাঠানো জাল হেডার আসল আইপি হিসেবে গণ্য হতে পারে।'
        }
      },
      {
        id: 'q-pytest-isolated-client-fixture',
        kind: 'mcq',
        topic: 'creating isolated pytest fixtures with application factory',
        question: {
          en: 'In modern pytest suites, what is the best practice pattern for creating a test client fixture?',
          bn: 'আধুনিক pytest স্যুটে একটি টেস্ট ক্লায়েন্ট ফিক্সচার তৈরির শ্রেষ্ঠ প্র্যাকটিস প্যাটার্ন কোনটি?'
        },
        options: [
          {
            en: 'Define a @pytest.fixture that calls create_app(TestingConfig), pushes an app context, creates in-memory database tables (db.create_all()), yields app.test_client(), and drops all tables on teardown',
            bn: 'একটি @pytest.fixture তৈরি করা যা create_app(TestingConfig) চালায়, ইন-মেমরি টেবিল বানায়, app.test_client() সরবরাহ করে এবং টেস্ট শেষে সব টেবিল পরিষ্কার করে'
          },
          {
            en: 'Hardcode the production database credentials directly inside the test file',
            bn: 'টেস্ট ফাইলের ভেতর সরাসরি প্রোডাকশন ডাটাবেজের ইউজার ও পাসওয়ার্ড লিখে রাখা'
          },
          {
            en: 'Run the tests manually by clicking in the browser window',
            bn: 'ব্রাউজারে নিজে হাতে ক্লিক করে প্রতিটি পরীক্ষা সম্পন্ন করা'
          },
          {
            en: 'Disable all assertions so the test suite never fails',
            bn: 'সমস্ত assert বন্ধ রাখা যাতে পরীক্ষা কখনো ফেল না করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A pytest fixture manages the lifecycle: setup test app/db, yield client, teardown db.',
          bn: 'pytest ফিক্সচার পুরো জীবনচক্র নিয়ন্ত্রণ করে: টেস্ট সেটআপ, ক্লায়েন্ট প্রদান এবং শেষে পরিষ্কার করা।'
        },
        explanation: {
          en: 'Using a pytest fixture with yield allows clean setup (creating test database schema) and teardown (dropping tables and removing session), guaranteeing clean test isolation.',
          bn: 'pytest ফিক্সচারে yield ব্যবহার করলে টেস্টের আগে ডাটাবেজ তৈরি এবং টেস্ট শেষে ডাটাবেজ টেবিল ড্রপ করে মেমরি সম্পূর্ণ পরিষ্কার রাখা যায়।'
        }
      }
    ]
  }
};
