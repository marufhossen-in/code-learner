import type { Lesson } from '../../../lib/types';

export const TheKitchenShipsLesson: Lesson = {
  slug: 'the-kitchen-ships',
  tech: 'django',
  title: {
    en: 'Production & Testing — TestCase, Security Hardening, WhiteNoise & Gunicorn',
    bn: 'প্রোডাকশন ও টেস্টিং — টেস্টকেস, সিকিউরিটি হার্ডেনিং, হোয়াইট-নয়েজ ও ইউনিকর্ন'
  },
  summary: {
    en: 'Shipping a production-grade Django web application demands automated test suites, hardened security settings, static asset pipelining, and reliable WSGI worker processes. In this capstone lesson, you will master TestCase, the Django test Client, collectstatic with WhiteNoise, Gunicorn server topologies, and the check --deploy security audit.',
    bn: 'একটি প্রোডাকশন-গ্রেড জ্যাঙ্গো অ্যাপ্লিকেশন ডেপ্লয় করার জন্য স্বয়ংক্রিয় টেস্ট স্যুট, কঠোর নিরাপত্তা সেটিংস, স্ট্যাটিক অ্যাসেট পাইপলাইন এবং নির্ভরযোগ্য WSGI প্রসেস অপরিহার্য। এই সমাপনী পাঠে আপনি TestCase, জ্যাঙ্গো টেস্ট Client, WhiteNoise সহ collectstatic, Gunicorn আর্কিটেকচার এবং check --deploy সিকিউরিটি অডিট গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'django-production-architecture',
      text: {
        en: 'The Production Deployment Topology and Testing Pipeline',
        bn: 'প্রোডাকশন ডেপ্লয়মেন্ট টপোলজি ও টেস্টিং পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy a Django project, the development server is not used in production. Instead, an Nginx reverse proxy receives web traffic and passes requests to Gunicorn workers running your Django application.',
        bn: 'যখন আপনি জ্যাঙ্গো অ্যাপ্লিকেশন ডেপ্লয় করেন, তখন ডেভেলপমেন্ট সার্ভার প্রোডাকশনে চালানো যায় না। এর পরিবর্তে একটি Nginx রিভার্স প্রক্সি ট্রাফিক গ্রহণ করে এবং Gunicorn ওয়ার্কার প্রসেসে পাঠিয়ে জ্যাঙ্গো কার্যকর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'django.test.TestCase',
          def: {
            en: 'A test harness subclassing Python unittest, wrapping each test method in an isolated database transaction that rolls back automatically.',
            bn: 'পাইথন টেস্ট ক্লাস যা প্রতিটি টেস্ট মেথডকে একটি সংরক্ষিত ট্রানজেকশনে চালায় এবং কাজ শেষে স্বয়ংক্রিয়ভাবে ডাটা রোলব্যাক করে ডাটাবেজ পরিষ্কার রাখে।'
          }
        },
        {
          term: 'WhiteNoise',
          def: {
            en: 'A battle-tested Python middleware enabling Django web applications to serve their own compressed, fingerprinted static files directly.',
            bn: 'একটি নির্ভরযোগ্য পাইথন মিডলওয়্যার যা জ্যাঙ্গোকে সরাসরি নিজস্ব সংকুচিত ও ক্যাশযোগ্য স্ট্যাটিক ফাইল পরিবেশন করার সক্ষমতা দেয়।'
          }
        },
        {
          term: 'Gunicorn (Green Unicorn)',
          def: {
            en: 'A production-grade Python WSGI HTTP server using a pre-fork worker model to handle concurrent client requests efficiently.',
            bn: 'একটি প্রোডাকশন পাইথন WSGI সার্ভার যা প্রি-ফর্ক ওয়ার্কার মডেলের মাধ্যমে একই সাথে বহু রিকোয়েস্ট সফলভাবে হ্যান্ডল করে।'
          }
        },
        {
          term: 'check --deploy',
          def: {
            en: 'A built-in management command that audits security flags (DEBUG, cookies, HSTS, SSL redirects) before shipping to production.',
            bn: 'জ্যাঙ্গোর একটি বিল্ট-ইন কমান্ড যা প্রোডাকশনে যাওয়ার আগে সমস্ত সিকিউরিটি সেটিংস (DEBUG, HSTS, কুকি সুরক্ষা) পুঙ্খানুপুঙ্খ পরীক্ষা করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'production-settings-checklist',
      text: {
        en: 'Essential Production Security Settings Matrix',
        bn: 'অপরিহার্য প্রোডাকশন সিকিউরিটি সেটিংস ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Setting Name', bn: 'সেটিংসের নাম' },
        { en: 'Production Value', bn: 'প্রোডাকশন মান' },
        { en: 'Critical Security Protection', bn: 'গুরুত্বপূর্ণ নিরাপত্তা ভূমিকা' }
      ],
      rows: [
        [
          { en: 'DEBUG', bn: 'DEBUG' },
          { en: 'False', bn: 'False' },
          { en: 'Prevents stack traces and sensitive database credentials from leaking to visitors', bn: 'ভিজিটরদের কাছে সংবেদনশীল কোড ও ডাটাবেজ পাসওয়ার্ড ফাঁস হওয়া পুরোপুরি বন্ধ করে' }
        ],
        [
          { en: 'ALLOWED_HOSTS', bn: 'ALLOWED_HOSTS' },
          { en: '["yourdomain.com", "api.yourdomain.com"]', bn: '["yourdomain.com", "api.yourdomain.com"]' },
          { en: 'Defends against HTTP Host header poisoning and DNS spoofing attacks', bn: 'এইচটিটিপি হোস্ট হেডার পয়জনিং ও স্পুফিং আক্রমণ কঠোরভাবে প্রতিহত করে' }
        ],
        [
          { en: 'SECURE_SSL_REDIRECT', bn: 'SECURE_SSL_REDIRECT' },
          { en: 'True', bn: 'True' },
          { en: 'Forces all unencrypted plain HTTP requests to redirect to HTTPS', bn: 'সমস্ত আনএনক্রিপ্টেড সাধারণ এইচটিটিপি রিকোয়েস্টকে এইচটিটিপিএসে রিডাইরেক্ট করে' }
        ],
        [
          { en: 'SESSION_COOKIE_SECURE', bn: 'SESSION_COOKIE_SECURE' },
          { en: 'True', bn: 'True' },
          { en: 'Instructs browsers to transmit session cookies exclusively over encrypted HTTPS', bn: 'ব্রাউজারকে নির্দেশ দেয় যাতে সেশন কুকি কেবল নিরাপদ এইচটিটিপিএস মাধ্যমেই পাঠানো হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'testing-pipeline-code',
      text: {
        en: 'Working Django Test Harness and Status Code Verification Simulation',
        bn: 'কার্যকরী জ্যাঙ্গো টেস্ট ফ্রেমওয়ার্ক ও স্ট্যাটাস কোড যাচাই সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Django TestCase and Test Client Execution
class MockClient {
  get(path) {
    if (path === '/posts/') {
      return { statusCode: 200, context: { postCount: 5 } };
    }
    if (path === '/secret-admin/') {
      return { statusCode: 403, error: 'Forbidden' };
    }
    return { statusCode: 404, error: 'Not Found' };
  }
}

class PostEndpointTestCase {
  constructor() {
    this.client = new MockClient();
    this.testsRun = 0;
    this.testsPassed = 0;
  }

  testPostListReturns200() {
    this.testsRun += 1;
    const res = this.client.get('/posts/');
    if (res.statusCode === 200 && res.context.postCount === 5) {
      this.testsPassed += 1;
    }
  }

  testAdminProtected403() {
    this.testsRun += 1;
    const res = this.client.get('/secret-admin/');
    if (res.statusCode === 403) {
      this.testsPassed += 1;
    }
  }

  runSuite() {
    this.testPostListReturns200();
    this.testAdminProtected403();
    return { run: this.testsRun, passed: this.testsPassed };
  }
}

const testSuite = new PostEndpointTestCase();
const results = testSuite.runSuite();

console.log('Total unit test cases executed:', results.run);
// -> Total unit test cases executed: 2
console.log('Total unit test cases passed:', results.passed);
// -> Total unit test cases passed: 2`,
      caption: {
        en: 'Simulating Django TestCase executing 2 tests with 2 passes in isolated test environment',
        bn: 'বিচ্ছিন্ন পরিবেশে জ্যাঙ্গো টেস্টকেস ২টি টেস্ট চালিয়ে ২টি পাস করার সিমুলেশন'
      }
    },
    {
      type: 'heading',
      id: 'whitenoise-and-gunicorn-deployment',
      text: {
        en: 'Static Files with WhiteNoise and Gunicorn Workers',
        bn: 'হোয়াইট-নয়েজ দিয়ে স্ট্যাটিক ফাইল ও ইউনিকর্ন ওয়ার্কার কনফিগারেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In containerized Docker and Kubernetes workflows, configuring external web servers to serve static files adds unnecessary architectural friction. WhiteNoise integrates directly into Django middleware stack, compressing files with Brotli and Gzip and applying aggressive immutable HTTP caching headers, allowing Django to ship as a single self-contained unit.',
        bn: 'কন্টেইনারভিত্তিক ডকার বা কুবারনেটিস ডেপ্লয়মেন্টে স্ট্যাটিক ফাইলের জন্য আলাদা ওয়েব সার্ভার চালানো অপ্রয়োজনীয় জটিলতা বাড়ায়। WhiteNoise সরাসরি জ্যাঙ্গোর মিডলওয়্যার স্ট্যাকে বসে ব্রোটলি ও জিজিপ দিয়ে ফাইল কম্প্রেস করে এবং ক্যাশিং হেডার যোগ করে, যার ফলে জ্যাঙ্গো একটি স্বয়ংসম্পূর্ণ কন্টেইনার হিসেবে সরাসরি লাইভ চলতে পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Golden Formula for Gunicorn Workers: Calculate worker processes as (2 x CPU cores) + 1 to balance concurrency with memory limits.',
          bn: '১. ইউনিকর্ন ওয়ার্কার সূত্র: মেমরি ও কনকারেন্সির সমতা রাখতে ওয়ার্কার সংখ্যা নির্ধারণ করুন (২ x সিপিইউ কোর) + ১ হিসেবে।'
        },
        {
          en: '2. Run collectstatic in CI/CD: Execute "python manage.py collectstatic --noinput" during Docker build or deploy pipeline.',
          bn: '২. সিআই/সিডিতে collectstatic: ডকার ইমেজ বিল্ডের সময় স্বয়ংক্রিয়ভাবে collectstatic --noinput কমান্ড চালান।'
        },
        {
          en: '3. Enforce check --deploy: Integrate "python manage.py check --deploy" into your CI workflow to block insecure merges.',
          bn: '৩. check --deploy দিয়ে গেটওয়ে অডিট: সিকিউরিটি সেটিংস ভুল থাকলে বিল্ড থামাতে সিআই পাইপলাইনে check --deploy যুক্ত রাখুন।'
        },
        {
          en: '4. Environment Variables Everywhere: Inject DATABASE_URL, SECRET_KEY, and ALLOWED_HOSTS through system environment variables.',
          bn: '৪. এনভায়রনমেন্ট ভেরিয়েবল বাধ্যতামূলক: গোপন চাবি, ডাটাবেজ ইউআরএল এবং হোস্ট তালিকা সর্বদা পরিবেশ চলক থেকে লোড করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dj-ship-ex1',
      kind: 'mcq',
      topic: 'testcase database isolation mechanism',
      question: {
        en: 'How does django.test.TestCase ensure that database writes in one unit test do not contaminate subsequent tests?',
        bn: 'django.test.TestCase কীভাবে নিশ্চিত করে যে একটি টেস্টের ডাটাবেজ রাইট যেন পরবর্তী টেস্টের ডাটাকে প্রভাবিত বা দূষিত না করে?'
      },
      options: [
        {
          en: 'It wraps every individual test method inside an atomic database transaction and executes a database rollback when the test completes',
          bn: 'এটি প্রতিটি টেস্ট মেথডকে একটি এটমিক ডাটাবেজ ট্রানজেকশনে মুড়ে দেয় এবং টেস্ট শেষ হওয়া মাত্রই ট্রানজেকশন রোলব্যাক করে ফেলে'
        },
        {
          en: 'It drops and recreates the entire production database after each line of code',
          bn: 'প্রতিটি কোড লাইনের পর এটি পুরো প্রোডাকশন ডাটাবেজ মুছে ফেলে আবার বানায়'
        },
        {
          en: 'It saves all records into the local browser localStorage',
          bn: 'এটি সমস্ত ডাটা ব্রাউজারের লোকাল স্টোরেজে সংরক্ষণ করে'
        },
        {
          en: 'Unit tests run in read-only mode where SQL INSERT is strictly disallowed',
          bn: 'ইউনিট টেস্ট শুধু রিড-অনলি মোডে চলে যেখানে ইনসার্ট করা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transaction rollbacks provide lightning-fast cleanup between tests.',
        bn: 'ট্রানজেকশন রোলব্যাকের মাধ্যমে টেস্টের পর নিমিষেই ডাটা পরিষ্কার করা হয়।'
      },
      explanation: {
        en: 'TestCase wraps each test in a transaction. When the test finishes (whether pass or fail), Django rolls back the transaction, leaving the database perfectly clean for the next test.',
        bn: 'TestCase প্রতিটি টেস্ট মেথডকে ট্রানজেকশনে রাখে। টেস্ট শেষ হলে তা রোলব্যাক হয়, ফলে কোনো টেস্টের ডাটা পরবর্তী টেস্টে হস্তক্ষেপ করতে পারে না।'
      }
    },
    {
      id: 'dj-ship-ex2',
      kind: 'mcq',
      topic: 'gunicorn recommended worker formula',
      question: {
        en: 'According to Gunicorn official documentation, what is the recommended baseline formula for worker processes on a server with N CPU cores?',
        bn: 'ইউনিকর্নের অফিসিয়াল ডকুমেন্টেশন অনুযায়ী N সংখ্যক সিপিইউ কোরের একটি সার্ভারের জন্য ওয়ার্কার প্রসেসের প্রস্তাবিত সূত্র কোনটি?'
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
          en: 'Exactly 1 worker regardless of CPU count',
          bn: 'সিপিইউ যাই হোক সর্বদা ঠিক ১ জন ওয়ার্কার'
        },
        {
          en: 'N squared workers',
          bn: 'N এর বর্গ সংখ্যক ওয়ার্কার'
        }
      ],
      answer: 0,
      hint: {
        en: 'For a 2-core machine, (2 * 2) + 1 = 5 workers.',
        bn: '২ কোরের মেশিনের জন্য (২ * ২) + ১ = ৫ জন ওয়ার্কার।'
      },
      explanation: {
        en: 'Gunicorn recommends (2 x $num_cores) + 1 as the default number of workers. While one worker is waiting on database I/O, other workers can actively process requests.',
        bn: 'ইউনিকর্ন (২ x কোর) + ১ ওয়ার্কার প্রস্তাব করে। একজন ওয়ার্কার ডাটাবেজ আই/ও-র জন্য অপেক্ষা করলে অন্যরা সক্রিয়ভাবে রিকোয়েস্ট প্রসেস করতে পারে।'
      }
    },
    {
      id: 'dj-ship-ex3',
      kind: 'mcq',
      topic: 'whitenoise static serving advantage',
      question: {
        en: 'What architectural problem does WhiteNoise solve when deploying containerized Django applications on cloud platforms like Render or AWS ECS?',
        bn: 'ক্লাউড প্ল্যাটফর্মে কনটেইনারাইজড জ্যাঙ্গো অ্যাপ্লিকেশন ডেপ্লয় করার সময় WhiteNoise কোন আর্কিটেকচারাল সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It enables Python WSGI servers to serve static assets directly with high efficiency, compression, and far-future caching headers without needing a separate Nginx container or S3 bucket',
          bn: 'এটি পাইথন WSGI সার্ভারকে কোনো আলাদা Nginx কন্টেইনার বা S3 বাকেট ছাড়াই সরাসরি উচ্চ দক্ষতা, কম্প্রেশন ও ক্যাশ হেডার সহ স্ট্যাটিক ফাইল সরবরাহ করতে দেয়'
        },
        {
          en: 'It converts HTML templates into React JavaScript bundles',
          bn: 'এটি এইচটিএমএল টেমপ্লেটকে রিঅ্যাক্ট বান্ডলে রূপান্তর করে'
        },
        {
          en: 'It automatically optimizes PostgreSQL relational indexes',
          bn: 'এটি স্বয়ংক্রিয়ভাবে পোস্টগ্রেস ডাটাবেজের ইনডেক্স ঠিক করে'
        },
        {
          en: 'It generates free SSL certificates from Let\'s Encrypt',
          bn: 'এটি বিনামূল্যে লেটস এনক্রিপ্ট এসএসএল সার্টিফিকেট বানায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'WhiteNoise makes the application self-contained for static asset hosting.',
        bn: 'WhiteNoise অ্যাপকে স্ট্যাটিক ফাইল হোস্ট করার জন্য একটি স্বয়ংসম্পূর্ণ প্যাকেজে রূপান্তর করে।'
      },
      explanation: {
        en: 'WhiteNoise wraps WSGI to serve static assets efficiently with gzip/brotli compression and long-lived cache headers, eliminating the complexity of running a dedicated static web server.',
        bn: 'WhiteNoise মিডলওয়্যার হিসেবে কাজ করে উচ্চ গতির কম্প্রেশন সহ স্ট্যাটিক ফাইল পরিবেশন করে, ফলে আলাদা ওয়েব সার্ভারের ঝামেলা দূর হয়।'
      }
    },
    {
      id: 'dj-ship-ex4',
      kind: 'mcq',
      topic: 'django deployment security check tool',
      question: {
        en: 'Which Django management command verifies your settings against common security misconfigurations before production release?',
        bn: 'প্রোডাকশন রিলিজের আগে জ্যাঙ্গোর সাধারণ সিকিউরিটি ভুলগুলো যাচাই করার জন্য কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'python manage.py check --deploy',
          bn: 'python manage.py check --deploy'
        },
        {
          en: 'python manage.py scan_virus',
          bn: 'python manage.py scan_virus'
        },
        {
          en: 'python manage.py fix_production_bugs',
          bn: 'python manage.py fix_production_bugs'
        },
        {
          en: 'python manage.py compile_firewall',
          bn: 'python manage.py compile_firewall'
        }
      ],
      answer: 0,
      hint: {
        en: 'The check command includes a dedicated --deploy auditing switch.',
        bn: 'check কমান্ডের সাথে একটি বিশেষ --deploy অডিটিং ফ্ল্যাগ থাকে।'
      },
      explanation: {
        en: 'The "check --deploy" flag runs a battery of security checks, alerting you if DEBUG is True, SECRET_KEY is weak, or HTTPS cookies and HSTS are misconfigured.',
        bn: '"check --deploy" কমান্ডটি সিকিউরিটি সেটিংস পুঙ্খানুপুঙ্খ স্ক্যান করে যদি DEBUG = True থাকে বা কুকি ও এইচএসটিএস ভুল থাকে তবে সাথে সাথে সতর্ক করে।'
      }
    }
  ],
  quiz: {
    id: 'the-kitchen-ships-quiz',
    title: {
      en: 'Django Production, Testing & Deployment Quiz',
      bn: 'জ্যাঙ্গো প্রোডাকশন, টেস্টিং ও ডেপ্লয়মেন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-django-test-client-advantage',
        kind: 'mcq',
        topic: 'django test client benefits over selenium',
        question: {
          en: 'Why is the built-in Django test Client (self.client) significantly faster than browser automation tools like Selenium for integration testing?',
          bn: 'ইন্টিগ্রেশন টেস্টিংয়ে সেলেনিয়ামের মতো ব্রাউজার অটোমেশন টুলের চেয়ে জ্যাঙ্গো টেস্ট Client (self.client) কেন বহুগুণ দ্রুত চলে?'
        },
        options: [
          {
            en: 'It simulates HTTP requests entirely in-memory at the Python WSGI layer without opening a live TCP socket or spinning up an actual headless browser process',
            bn: 'এটি কোনো রিয়েল ব্রাউজার না চালিয়ে এবং কোনো নেটওয়ার্ক পোর্ট ছাড়াই সরাসরি পাইথন WSGI মেমরির ভেতর রিকোয়েস্ট সিমুলেট করে'
          },
          {
            en: 'It bypasses the entire Django view and middleware pipeline',
            bn: 'এটি সমস্ত ভিউ এবং মিডলওয়্যার পাইপলাইন এড়িয়ে চলে যায়'
          },
          {
            en: 'It runs exclusively on supercomputers with thousands of GPUs',
            bn: 'এটি হাজার হাজার জিপিইউ সহ কেবল সুপারকম্পিউটারে চলে'
          },
          {
            en: 'It only tests HTML strings without evaluating Python code',
            bn: 'এটি পাইথন কোড না চালিয়ে শুধু এইচটিএমএল টেক্সট পরীক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The test client interacts directly with WSGI without network or browser overhead.',
          bn: 'টেস্ট ক্লায়েন্ট কোনো নেটওয়ার্ক পোর্ট ছাড়া সরাসরি মেমরিতে WSGI স্তরে কথা বলে।'
        },
        explanation: {
          en: 'The Django test Client operates portlessly in Python memory, passing dummy requests through the exact URL resolver, middlewares, and views for lightning-fast feedback.',
          bn: 'টেস্ট Client সরাসরি মেমরিতে দ্রুত রিকোয়েস্ট পাস করে, ফলে ব্রাউজার ওপেন করার বাড়তি সময় না লাগায় সেকেন্ডে শত শত টেস্ট চালানো যায়।'
        }
      },
      {
        id: 'q-hsts-header-security-purpose',
        kind: 'mcq',
        topic: 'strict transport security header role',
        question: {
          en: 'What protection does configuring SECURE_HSTS_SECONDS = 31536000 provide to visitors of your web application?',
          bn: 'আপনার অ্যাপ্লিকেশনে SECURE_HSTS_SECONDS = 31536000 সেট করলে ব্যবহারকারীরা কোন নিরাপত্তা সুরক্ষা লাভ করে?'
        },
        options: [
          {
            en: 'It sends the Strict-Transport-Security header instructing browsers to refuse all unencrypted HTTP connections and strictly demand HTTPS for the next 1 full year, preventing man-in-the-middle SSL-stripping attacks',
            bn: 'এটি Strict-Transport-Security হেডার পাঠায় যা ব্রাউজারকে পরবর্তী ১ বছর কেবল এইচটিটিপিএস দিয়ে সংযুক্ত হতে বাধ্য করে এবং ম্যান-ইন-দ্য-মিডল আক্রমণ রোধ করে'
          },
          {
            en: 'It deletes all user cookies every 31536000 milliseconds',
            bn: 'এটি প্রতি ৩১৫৩৬০০০ মিলিসেকেন্ড পর পর সমস্ত কুকি মুছে ফেলে'
          },
          {
            en: 'It restricts website visits exclusively to users residing in the same country',
            bn: 'এটি ওয়েবসাইটে ভিজিট কেবল একই দেশের মধ্যে সীমাবদ্ধ রাখে'
          },
          {
            en: 'It compresses user images into WebP format',
            bn: 'এটি ব্যবহারকারীর ছবিগুলোকে ওয়েবপিতে সংকুচিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'HSTS guarantees browsers enforce HTTPS communication for the specified duration.',
          bn: 'এইচএসটিএস ব্রাউজারকে নির্দিষ্ট সময়ের জন্য বাধ্যতামূলকভাবে কেবল এইচটিটিপিএস ব্যবহারে বাধ্য করে।'
        },
        explanation: {
          en: 'HTTP Strict Transport Security (HSTS) informs the browser that the domain must only be reached via HTTPS, neutralizing SSL-stripping attacks completely.',
          bn: 'HSTS হেডার ব্রাউজারকে নির্দেশ দেয় যেন কোনো অবস্থাতেই আনএনক্রিপ্টেড HTTP সংযোগ তৈরি না হয়, ফলে ব্যবহারকারীর ডাটা সর্বদা সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'q-setuptestdata-vs-setup',
        kind: 'mcq',
        topic: 'setUpTestData performance optimization in tests',
        question: {
          en: 'When should a test suite use @classmethod setUpTestData(cls) instead of standard setUp(self)?',
          bn: 'টেস্ট স্যুটে কখন সাধারণ setUp(self)-এর বদলে @classmethod setUpTestData(cls) ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'When creating heavy read-only test fixture objects shared across multiple tests in the class, so database objects are created once per class rather than recreated before every single test method',
            bn: 'যখন একাধিক টেস্টের জন্য ভারী রিড-অনলি ডাটা অবজেক্ট তৈরি করতে হয়, যাতে প্রতি টেস্টের আগে বারবার তৈরি না করে ক্লাসের শুরুতে একবার তৈরি করা যায়'
          },
          {
            en: 'When connecting the test suite to a remote third-party API',
            bn: 'যখন টেস্ট স্যুটকে কোনো রিমোট এপিআই-এর সাথে যুক্ত করতে হয়'
          },
          {
            en: 'Only when running tests on Windows operating systems',
            bn: 'কেবল উইন্ডোজ অপারেটিং সিস্টেমে টেস্ট চালানোর সময়'
          },
          {
            en: 'setUpTestData is deprecated and should never be used',
            bn: 'setUpTestData বাতিল করা হয়েছে এবং এটি ব্যবহার করা যাবে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'setUpTestData creates data once for the whole class, accelerating large test suites.',
          bn: 'setUpTestData পুরো ক্লাসের জন্য মাত্র একবার ডাটা তৈরি করে টেস্টের সময় বহুগুণ বাঁচায়।'
        },
        explanation: {
          en: 'setUpTestData() runs once per TestCase class. By creating immutable model records once instead of rebuilding them in every setUp() method, test execution time drops substantially.',
          bn: 'setUpTestData() ক্লাসের শুরুতে একবার ডাটা বানায়। প্রতিটি টেস্টের আগে বারবার অবজেক্ট তৈরির চাপ কমায় টেস্ট রান অনেক দ্রুত সম্পন্ন হয়।'
        }
      },
      {
        id: 'q-django-asgi-websockets-channels',
        kind: 'mcq',
        topic: 'asgi transition for websockets and async tasks',
        question: {
          en: 'If your application requires real-time bi-directional WebSockets (e.g. for a live chat room) alongside Django, how should the server topology change?',
          bn: 'যদি আপনার অ্যাপ্লিকেশনে জ্যাঙ্গোর পাশাপাশি রিয়েল-টাইম দ্বি-মুখী WebSockets (যেমন লাইভ চ্যাট) প্রয়োজন হয়, তবে সার্ভার টপোলজিতে কী পরিবর্তন আনতে হবে?'
        },
        options: [
          {
            en: 'Switch or augment the WSGI server with an ASGI server (such as Daphne or Uvicorn) using Django Channels to manage long-lived asynchronous socket connections',
            bn: 'WSGI সার্ভারের বদলে বা সাথে Daphne বা Uvicorn-এর মতো ASGI সার্ভার এবং দীর্ঘমেয়াদী সংযোগ সামলাতে Django Channels ব্যবহার করতে হবে'
          },
          {
            en: 'WebSockets cannot run with Django; the whole application must be rewritten in PHP',
            bn: 'জ্যাঙ্গোতে ওয়েবসকেট চলে না; পুরো প্রজেক্ট পিএইচপিতে পুনরায় লিখতে হবে'
          },
          {
            en: 'Increase the SQLite database connection timeout to 24 hours',
            bn: 'SQLite ডাটাবেজের টাইমআউট বাড়িয়ে ২৪ ঘণ্টা করতে হবে'
          },
          {
            en: 'Disable the Django CSRF middleware permanently',
            bn: 'জ্যাঙ্গো সিএসআরএফ মিডলওয়্যার চিরতরে বন্ধ করে দিতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'WSGI is strictly synchronous request/response; ASGI supports asynchronous WebSockets.',
          bn: 'WSGI কেবল সিঙ্ক্রোনাস রিকোয়েস্ট সামলায়; অ্যাসিনক্রোনাস ওয়েবসকেটের জন্য ASGI প্রয়োজন।'
        },
        explanation: {
          en: 'Standard WSGI cannot maintain persistent WebSocket connections. Django Channels with an ASGI server (Daphne/Uvicorn) enables asynchronous event-driven socket architectures.',
          bn: 'WSGI স্থায়ী সকেট সংযোগ ধরে রাখতে পারে না। অ্যাসিনক্রোনাস ইভেন্ট ও ওয়েবসকেটের জন্য ASGI সার্ভার ও Django Channels ব্যবহার করতে হয়।'
        }
      }
    ]
  }
};
