import type { Lesson } from '../../../lib/types';

export const TheRReleaseLesson: Lesson = {
  slug: 'the-r-release',
  tech: 'r',
  title: {
    en: 'Production R & Capstone: Shiny Apps, Packages & REST APIs with Plumber',
    bn: 'প্রোডাকশন R এবং ক্যাপস্টোন: Shiny অ্যাপস, প্যাকেজেস ও Plumber দিয়ে REST API'
  },
  summary: {
    en: 'Deploy production R workloads: interactive web applications with Shiny (UI, server, reactivity graph), building CRAN-compliant packages (DESCRIPTION, NAMESPACE, devtools), and deploying REST API microservices with Plumber.',
    bn: 'প্রোডাকশনে R ওয়ার্কলোড ডেপ্লয়: Shiny দিয়ে ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশন (UI, সার্ভার, রিঅ্যাক্টিভিটি গ্রাফ), CRAN-সম্মত প্যাকেজ তৈরি (DESCRIPTION, NAMESPACE, devtools) এবং Plumber দিয়ে REST API মাইক্রোসার্ভিস ডেপ্লয়।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'shiny-architecture',
      text: {
        en: '1. Interactive Web Applications with Shiny',
        bn: '১. Shiny দিয়ে ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Shiny transforms R from a desktop statistical tool into an interactive full-stack web platform. A Shiny application consists of 2 foundational components communicating over high-speed bidirectional WebSockets:',
        bn: 'Shiny ডেস্কটপ স্ট্যাটিস্টিক্যাল সফটওয়্যার হিসেবে থাকা R কে একটি ইন্টারঅ্যাক্টিভ ফুল-স্ট্যাক ওয়েব প্ল্যাটফর্মে রূপান্তরিত করে। দ্রুতগতির দ্বি-মুখী ওয়েবসকেট সংযোগের মাধ্যমে Shiny অ্যাপ মূলত ২টি প্রধান উপাদানের সমন্বয়ে চলে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. UI (User Interface): Defines HTML layout, inputs (sliderInput, selectInput, textInput), and output placeholders (plotOutput, tableOutput).',
          bn: '১. UI (ইউজার ইন্টারফেস): ওয়েব পেজের HTML লেআউট, ইনপুট উইজেট (sliderInput, selectInput) এবং আউটপুটের স্থান (plotOutput, tableOutput) নির্ধারণ করে।'
        },
        {
          en: '2. Server: Runs the backend R session, orchestrating the reactive execution graph to recompute outputs only when corresponding inputs change.',
          bn: '২. Server: ব্যাকএন্ডে R সেশন পরিচালনা করে এবং রিঅ্যাক্টিভ গ্রাফ বজায় রেখে কেবল সংশ্লিষ্ট ইনপুট পরিবর্তন হলেই আউটপুট পুনরায় তৈরি করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'production-r-diagram',
      title: {
        en: 'Production R Architecture: Shiny Reactive Graph & Plumber REST API',
        bn: 'প্রোডাকশন R আর্কিটেকচার: Shiny রিঅ্যাক্টিভ গ্রাফ ও Plumber REST API'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Production R: Shiny Apps &amp; Plumber REST Microservices</text>' +
          '<!-- Column 1: Shiny Reactive Graph -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. SHINY REACTIVE GRAPH</text>' +
            '<!-- Input Node -->' +
            '<rect x="20" y="50" width="140" height="50" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="90" y="72" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">input$bins</text>' +
            '<text x="90" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">Reactive Source</text>' +
            '<!-- Conductor Node -->' +
            '<rect x="200" y="50" width="140" height="50" rx="6" fill="#0f172a" stroke="#a855f7"/>' +
            '<text x="270" y="72" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">filtered_df()</text>' +
            '<text x="270" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">reactive({ ... })</text>' +
            '<!-- Connector Arrow -->' +
            '<path d="M 160 75 L 200 75" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Output Node -->' +
            '<rect x="80" y="130" width="200" height="55" rx="6" fill="#0f172a" stroke="#10b981"/>' +
            '<text x="180" y="152" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">output$distPlot</text>' +
            '<text x="180" y="170" fill="#cbd5e1" font-size="9" text-anchor="middle">renderPlot({ ggplot(...) })</text>' +
            '<path d="M 270 100 L 220 130" stroke="#10b981" stroke-width="2"/>' +
            '<rect x="20" y="205" width="320" height="105" rx="6" fill="#0f172a"/>' +
            '<text x="30" y="228" fill="#cbd5e1" font-size="10">&#x2022; Browser UI &lt;&#x2194;&gt; WebSocket &lt;&#x2194;&gt; Server</text>' +
            '<text x="30" y="250" fill="#cbd5e1" font-size="10">&#x2022; Only invalidates connected consumers</text>' +
            '<text x="30" y="272" fill="#cbd5e1" font-size="10">&#x2022; bindCache() speeds heavy queries</text>' +
            '<text x="30" y="294" fill="#38bdf8" font-size="10">&#x2022; isolate() breaks reactive triggers</text>' +
          '</g>' +
          '<!-- Column 2: Plumber REST API -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. PLUMBER REST API ENGINE</text>' +
            '<rect x="15" y="45" width="330" height="145" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#facc15" font-size="10" font-family="monospace">#* @apiTitle Credit Scoring API</text>' +
            '<text x="25" y="86" fill="#60a5fa" font-size="10" font-family="monospace">#* @post /predict</text>' +
            '<text x="25" y="104" fill="#cbd5e1" font-size="10" font-family="monospace">#* @param income:numeric</text>' +
            '<text x="25" y="122" fill="#34d399" font-size="10" font-family="monospace">function(income, debt) {</text>' +
            '<text x="45" y="140" fill="#cbd5e1" font-size="10" font-family="monospace">prob &lt;- predict(model, ...)</text>' +
            '<text x="45" y="158" fill="#cbd5e1" font-size="10" font-family="monospace">list(status = "OK", score = prob)</text>' +
            '<text x="25" y="176" fill="#34d399" font-size="10" font-family="monospace">}</text>' +
            '<rect x="15" y="205" width="330" height="105" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="228" fill="#cbd5e1" font-size="10">&#x2022; Turns R functions into JSON endpoints</text>' +
            '<text x="25" y="250" fill="#cbd5e1" font-size="10">&#x2022; Auto-generates Swagger / OpenAPI docs</text>' +
            '<text x="25" y="272" fill="#cbd5e1" font-size="10">&#x2022; Docker container ready for Kubernetes</text>' +
            '<text x="25" y="294" fill="#34d399" font-size="10" font-weight="bold">&#x2022; Sub-20ms prediction response latency</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'cran-packages',
      text: {
        en: '2. Building CRAN-Grade R Packages',
        bn: '২. CRAN মানের R প্যাকেজ তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The pinnacle of reproducible R software engineering is packaging your code according to CRAN standards. A proper package contains 4 primary architectural pillars:',
        bn: 'পুনর্ব্যবহারযোগ্য R সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সর্বোচ্চ স্তর হলো CRAN মান অনুযায়ী প্যাকেজ তৈরি করা। একটি পূর্ণাঙ্গ প্যাকেজে ৪ টি মূল কাঠামো থাকে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. DESCRIPTION: Declares metadata, author license, and package dependencies (Imports vs Suggests).',
          bn: '১. DESCRIPTION: প্যাকেজের মেটাডাটা, লাইসেন্স এবং ডিপেন্ডেন্সি তালিকা (Imports বনাম Suggests) প্রকাশ করে।'
        },
        {
          en: '2. NAMESPACE: Specifies exposed public functions via export() and external dependencies via importFrom().',
          bn: '২. NAMESPACE: export() দিয়ে পাবলিক ফাংশন এবং importFrom() দিয়ে বহিরাগত প্যাকেজের ফাংশন নির্ধারণ করে।'
        },
        {
          en: '3. roxygen2 Documentation: Generates standardized LaTeX/HTML manual pages in man/ directly from inline code comments.',
          bn: '৩. roxygen2 ডকুমেন্টেশন: কোডের ভেতরের কমেন্ট থেকে স্বয়ংক্রিয়ভাবে man/ ফোল্ডারে মানসম্মত ম্যানুয়াল তৈরি করে।'
        },
        {
          en: '4. testthat Suite: Unit tests validating numeric stability, edge cases, and regression tests.',
          bn: '৪. testthat স্যুট: ইউনিটের গাণিতিক নির্ভুলতা ও প্রান্তিক ক্ষেত্র যাচাই করার টেস্ট স্যুট।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'plumber-apis',
      text: {
        en: '3. Serving Machine Learning REST APIs with Plumber',
        bn: '৩. Plumber দিয়ে মেশিন লার্নিং REST API সার্ভিস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Data scientists often need to deploy trained R models into enterprise production architectures. The plumber package inspects special roxygen-style comments (#* @get, #* @post) and exposes R functions as standard RESTful HTTP microservices returning JSON payloads, complete with automatic Swagger UI documentation.',
        bn: 'ডাটা সায়েন্টিস্টদের প্রায়ই তাদের প্রশিক্ষিত R মডেল এন্টারপ্রাইজ প্রোডাকশন আর্কিটেকচারে যুক্ত করতে হয়। plumber প্যাকেজ বিশেষ roxygen কমেন্ট (#* @get, #* @post) পড়ে যেকোনো R ফাংশনকে স্বয়ংক্রিয় Swagger UI সহ JSON ফরম্যাটে চলা মানসম্মত RESTful HTTP মাইক্রোসার্ভিসে রূপান্তর করে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Production Shiny & Plumber Engine in TypeScript',
        bn: '৪. TypeScript এ প্রোডাকশন Shiny ও Plumber ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Shiny\'s reactive dependency graph tracks changes and invalidates outputs, and how Plumber routes incoming HTTP requests to R scoring functions:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে Shiny এর রিঅ্যাক্টিভ গ্রাফ ইনপুট ট্র্যাক করে আউটপুট আপডেট করে এবং কীভাবে Plumber HTTP রিকোয়েস্ট রাউট করে মডেল স্কোরিং চালায়:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Shiny reactive input/output graph and Plumber REST API endpoint routing.',
        bn: 'Shiny রিঅ্যাক্টিভ ইনপুট/আউটপুট গ্রাফ এবং Plumber REST API এন্ডপয়েন্ট রাউটিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Production R: Shiny Reactive Graph & Plumber REST API

// 1. Shiny Reactivity Simulation
class ReactiveInput<T> {
  private value: T;
  private subscribers: (() => void)[] = [];

  constructor(initial: T) {
    this.value = initial;
  }

  get(): T {
    return this.value;
  }

  set(newVal: T): void {
    if (this.value !== newVal) {
      this.value = newVal;
      // Invalidate subscribers (downstream reactive conductors/outputs)
      this.notify();
    }
  }

  subscribe(callback: () => void): void {
    this.subscribers.push(callback);
  }

  private notify(): void {
    for (const sub of this.subscribers) {
      sub();
    }
  }
}

class ShinyPlotOutput {
  private renderFn: () => string;
  public renderedContent: string = '';

  constructor(renderFn: () => string) {
    this.renderFn = renderFn;
    this.update();
  }

  update(): void {
    this.renderedContent = this.renderFn();
  }
}

// 2. Plumber REST API Simulation
interface PlumberRequest {
  path: string;
  method: 'GET' | 'POST';
  body: Record<string, number>;
}

class PlumberRouter {
  private endpoints = new Map<string, (body: Record<string, number>) => object>();

  post(route: string, handler: (body: Record<string, number>) => object): void {
    this.endpoints.set('POST:' + route, handler);
  }

  handle(req: PlumberRequest): { status: number; payload: object } {
    const key = req.method + ':' + req.path;
    const handler = this.endpoints.get(key);
    if (!handler) {
      return { status: 404, payload: { error: 'Route not found' } };
    }
    const responsePayload = handler(req.body);
    return { status: 200, payload: responsePayload };
  }
}

// Demonstration
// 1. Shiny Reactivity
const inputBins = new ReactiveInput<number>(10);
let executionCount = 0;

const outputPlot = new ShinyPlotOutput(() => {
  executionCount++;
  return '<svg>Rendered histogram with ' + inputBins.get() + ' bins</svg>';
});

inputBins.subscribe(() => {
  outputPlot.update();
});

console.log('Initial plot: ' + outputPlot.renderedContent); // -> 10 bins
console.log('Render execution count: ' + executionCount); // -> 1

// Update slider input: reactive graph triggers update automatically
inputBins.set(25);
console.log('Updated plot: ' + outputPlot.renderedContent); // -> 25 bins
console.log('New render execution count: ' + executionCount); // -> 2

// 2. Plumber ML Scoring Endpoint
const api = new PlumberRouter();

// Mock trained logistic regression credit scoring model
api.post('/predict', (params) => {
  const income = params.income || 50000;
  const debt = params.debt || 10000;
  const zScore = (income - debt * 2) / 25000;
  const approvalProb = Number((1 / (1 + Math.exp(-zScore))).toFixed(3));

  return {
    approved: approvalProb >= 0.5,
    probability: approvalProb,
    modelVersion: '1.4.0'
  };
});

const clientRequest: PlumberRequest = {
  path: '/predict',
  method: 'POST',
  body: { income: 80000, debt: 15000 }
};

const httpResponse = api.handle(clientRequest);
console.log('HTTP Status: ' + httpResponse.status); // -> 200
console.log('Plumber response JSON: ' + JSON.stringify(httpResponse.payload));`
    }
  ],
  exercises: [
    {
      id: 'rel-ex-1',
      kind: 'mcq',
      question: {
        en: 'In Shiny web applications, what mechanism prevents expensive calculations from re-running when their inputs have not changed?',
        bn: 'Shiny ওয়েব অ্যাপ্লিকেশনে কোন মেকানিজম ইনপুটের পরিবর্তন না হলে অপ্রয়োজনীয় ভারী গণনা পুনরায় চলা থেকে বিরত রাখে?'
      },
      options: [
        {
          en: 'The reactive dependency graph and reactive({ ... }) caching',
          bn: 'রিঅ্যাক্টিভ ডিপেন্ডেন্সি গ্রাফ এবং reactive({ ... }) ক্যাশিং'
        },
        {
          en: 'A hardcoded sleep timer of 5 seconds',
          bn: '৫ সেকেন্ডের ফিক্সড স্লিপ টাইমার'
        },
        {
          en: 'Restarting the operating system kernel on every click',
          bn: 'প্রতি ক্লিকে অপারেটিং সিস্টেম কার্নেল রিস্টার্ট করা'
        },
        {
          en: 'Storing all calculations in browser cookies only',
          bn: 'সমস্ত গণনা কেবল ব্রাউজার কুকিতে সংরক্ষণ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reactivity only executes downstream nodes when inputs change.',
        bn: 'রিঅ্যাক্টিভিটি কেবল ইনপুট পাল্টালেই সংশ্লিষ্ট আউটপুট চালায়।'
      },
      explanation: {
        en: 'Shiny\'s reactive engine tracks dependencies; reactive expressions cache their results and only invalidate when their upstream inputs mutate.',
        bn: 'Shiny এর রিঅ্যাক্টিভ ইঞ্জিন ইনপুট পরিবর্তন না হওয়া পর্যন্ত ক্যাশ করা ফলাফল ব্যবহার করে কার্যক্ষমতা অক্ষুণ্ণ রাখে।'
      }
    },
    {
      id: 'rel-ex-2',
      kind: 'mcq',
      question: {
        en: 'How does the Plumber package expose R functions as HTTP REST API endpoints?',
        bn: 'Plumber প্যাকেজ কীভাবে R ফাংশনগুলোকে HTTP REST API এন্ডপয়েন্ট হিসেবে উন্মুক্ত করে?'
      },
      options: [
        {
          en: 'By decorating functions with special roxygen comments such as #* @get or #* @post',
          bn: 'ফাংশনের ওপরে #* @get বা #* @post এর মতো বিশেষ roxygen কমেন্ট ডেকোরেটর ব্যবহার করে'
        },
        {
          en: 'By rewriting the R code into C++ and compiling a standalone binary',
          bn: 'R কোডটিকে C++ এ পুনরায় লিখে স্ট্যান্ডঅ্যালোন বাইনারি কম্পাইল করে'
        },
        {
          en: 'By generating static HTML pages that download automatically',
          bn: 'স্ট্যাটিক HTML পেজ তৈরি করে যা স্বয়ংক্রিয়ভাবে ডাউনলোড হয়'
        },
        {
          en: 'By connecting via FTP to upload scripts directly to GitHub',
          bn: 'সরাসরি গিটহাবে স্ক্রিপ্ট আপলোড করতে FTP দিয়ে যুক্ত হয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Plumber uses #* comment tags above functions.',
        bn: 'Plumber ফাংশনের ওপরে #* কমেন্ট ট্যাগ ব্যবহার করে।'
      },
      explanation: {
        en: 'Plumber processes roxygen-like comment decorators (e.g. #* @get /predict) above R functions to route incoming HTTP requests and serialize responses.',
        bn: 'Plumber ফাংশনের আগের কমেন্ট ডেকোরেটর (#* @get, #* @post) দেখে রিকোয়েস্ট রাউট করে এবং ফলাফল JSON হিসেবে পাঠায়।'
      }
    },
    {
      id: 'rel-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which devtools command is standardly executed to verify that an R package meets all rigorous CRAN requirements with 0 errors and 0 warnings?',
        bn: 'কোন devtools কমান্ডটি চালিয়ে যাচাই করা হয় যে একটি R প্যাকেজ কোনো এরর বা ওয়ার্নিং ছাড়াই CRAN এর সমস্ত শর্ত পূরণ করেছে?'
      },
      options: [
        {
          en: 'devtools::check()',
          bn: 'devtools::check()'
        },
        {
          en: 'devtools::upload_now()',
          bn: 'devtools::upload_now()'
        },
        {
          en: 'devtools::publish()',
          bn: 'devtools::publish()'
        },
        {
          en: 'devtools::format_code()',
          bn: 'devtools::format_code()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The command runs R CMD check.',
        bn: 'কমান্ডটি ব্যাকগ্রাউন্ডে R CMD check পরিচালনা করে।'
      },
      explanation: {
        en: 'devtools::check() executes the comprehensive R CMD check suite, validating documentation, dependencies, testthat suites, and CRAN standards.',
        bn: 'devtools::check() সম্পূর্ণ R CMD check স্যুট চালিয়ে ডকুমেন্টেশন, ডিপেন্ডেন্সি এবং টেস্ট কেস পুঙ্খানুপুঙ্খভাবে পরীক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-r-release',
    title: {
      en: 'Production R and Capstone Quiz',
      bn: 'প্রোডাকশন R এবং ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'rel-q1',
        kind: 'mcq',
        question: {
          en: 'In Shiny, which function is used inside an observer or reactive expression to read an input value without creating a reactive dependency on it?',
          bn: 'Shiny তে কোনো ইনপুটের মান পড়ার সময় তার সাথে রিঅ্যাক্টিভ ডিপেন্ডেন্সি তৈরি না করার জন্য কোন ফাংশন ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'isolate(input$value)',
            bn: 'isolate(input$value)'
          },
          {
            en: 'freeze(input$value)',
            bn: 'freeze(input$value)'
          },
          {
            en: 'detach(input$value)',
            bn: 'detach(input$value)'
          },
          {
            en: 'lock(input$value)',
            bn: 'lock(input$value)'
          }
        ],
        answer: 0,
        hint: {
          en: 'It isolates the expression from reactive triggers.',
          bn: 'এটি এক্সপ্রেশনটিকে রিঅ্যাক্টিভ ট্রিগার থেকে বিচ্ছিন্ন করে রাখে।'
        },
        explanation: {
          en: 'isolate() reads reactive values or expressions without taking a reactive dependency, preventing the caller from re-executing when that value updates.',
          bn: 'isolate() ইনপুটের মান গ্রহণ করে কিন্তু তা পরিবর্তনের কারণে আউটপুট আবার নতুন করে রেন্ডার হওয়া ঠেকায়।'
        }
      },
      {
        id: 'rel-q2',
        kind: 'mcq',
        question: {
          en: 'What is the role of the NAMESPACE file in a standard R package?',
          bn: 'একটি মানসম্মত R প্যাকেজে NAMESPACE ফাইলের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It controls which functions are publicly exported and which external package functions are imported',
            bn: 'কোন ফাংশনগুলো বাইরে ব্যবহারযোগ্য (export) এবং বাইরের কোন প্যাকেজ থেকে কোন ফাংশন আনা হবে (import) তা নিয়ন্ত্রণ করে'
          },
          {
            en: 'It stores the user passwords and database credentials',
            bn: 'এটি ব্যবহারকারীর পাসওয়ার্ড এবং ডাটাবেজ তথ্য সংরক্ষণ করে'
          },
          {
            en: 'It dictates the font size of the RStudio editor',
            bn: 'এটি RStudio এডিটরের ফন্ট সাইজ নিয়ন্ত্রণ করে'
          },
          {
            en: 'It holds raw binary data sets exclusively',
            bn: 'এটি কেবল কাঁচা বাইনারি ডাটা সেট সংরক্ষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Namespace manages exports and imports for package encapsulation.',
          bn: 'নেমস্পেস প্যাকেজের ইনপুট এবং এক্সপোর্ট নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'The NAMESPACE file defines the package interface: functions exposed to users via export() and external dependencies imported via importFrom().',
          bn: 'NAMESPACE ফাইল প্যাকেজের পাবলিক ফাংশন (export) এবং বাহ্যিক ডিপেন্ডেন্সি (import) নির্ধারণ করে।'
        }
      },
      {
        id: 'rel-q3',
        kind: 'mcq',
        question: {
          en: 'Which package is the industry standard for writing automated unit tests in modern R packages?',
          bn: 'আধুনিক R প্যাকেজে স্বয়ংক্রিয় ইউনিট টেস্ট লেখার জন্য কোন প্যাকেজটি শিল্পের মানসম্মত প্যাকেজ?'
        },
        options: [
          {
            en: 'testthat',
            bn: 'testthat'
          },
          {
            en: 'checkunit',
            bn: 'checkunit'
          },
          {
            en: 'rverify',
            bn: 'rverify'
          },
          {
            en: 'pyunittest',
            bn: 'pyunittest'
          }
        ],
        answer: 0,
        hint: {
          en: 'The package uses expect_equal() and test_that() blocks.',
          bn: 'প্যাকেজটি expect_equal() এবং test_that() ব্লক ব্যবহার করে।'
        },
        explanation: {
          en: 'testthat provides a structured testing framework (test_that(), expect_equal(), expect_error()) integrated directly with devtools::test().',
          bn: 'testthat হলো R প্যাকেজের টেস্ট স্যুট লেখার সবচেয়ে জনপ্রিয় ও নির্ভরযোগ্য ফ্রেমওয়ার্ক।'
        }
      },
      {
        id: 'rel-q4',
        kind: 'mcq',
        question: {
          en: 'What protocol does Shiny use for fast, two-way communication between the client browser and the server R process?',
          bn: 'ক্লায়েন্ট ব্রাউজার এবং সার্ভার R প্রসেসের মধ্যে দ্রুত ও দ্বি-মুখী যোগাযোগের জন্য Shiny কোন প্রোটোকল ব্যবহার করে?'
        },
        options: [
          {
            en: 'WebSockets',
            bn: 'WebSockets'
          },
          {
            en: 'FTP',
            bn: 'FTP'
          },
          {
            en: 'SMTP',
            bn: 'SMTP'
          },
          {
            en: 'Telnet',
            bn: 'Telnet'
          }
        ],
        answer: 0,
        hint: {
          en: 'The modern web standard for persistent full-duplex socket communication.',
          bn: 'রিয়েলটাইম ফুল-ডুপ্লেক্স যোগাযোগের আধুনিক ওয়েব স্ট্যান্ডার্ড।'
        },
        explanation: {
          en: 'Shiny establishes a persistent WebSocket connection between browser JavaScript and the R session, allowing real-time reactive updates with low latency.',
          bn: 'Shiny ব্রাউজার ও R সার্ভারের মাঝে একটি স্থায়ী WebSocket তৈরি করে তাৎক্ষণিক রিয়েলটাইম তথ্য আদান-প্রদান করে।'
        }
      },
      {
        id: 'rel-q5',
        kind: 'mcq',
        question: {
          en: 'Why is renv used in production enterprise R projects?',
          bn: 'উদ্যোগী পর্যায়ের প্রোডাকশন R প্রকল্পে renv প্যাকেজ কেন ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'It creates isolated, project-local package environments with a lockfile to guarantee 100% reproducible dependencies',
            bn: 'এটি লকফাইলের মাধ্যমে প্রজেক্ট-ভিত্তিক আলাদা প্যাকেজ এনভায়রনমেন্ট তৈরি করে ১০০% পুনরুৎপাদনযোগ্য নির্ভরতা নিশ্চিত করে'
          },
          {
            en: 'It automatically translates R code into Swift for iOS devices',
            bn: 'এটি R কোডকে স্বয়ংক্রিয়ভাবে অ্যাপল আইওএসের জন্য সুইফটে রূপান্তর করে'
          },
          {
            en: 'It serves as a Bitcoin cryptocurrency miner',
            bn: 'এটি একটি বিটকয়েন মাইনার হিসেবে কাজ করে'
          },
          {
            en: 'It speeds up your internet connection bandwidth',
            bn: 'এটি আপনার ইন্টারনেট ব্যান্ডউইথের গতি বৃদ্ধি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'renv manages reproducible project environments.',
          bn: 'renv নির্ভরতা নিশ্চিত করতে এনভায়রনমেন্ট ও প্যাকেজ লক পরিচালনা করে।'
        },
        explanation: {
          en: 'renv (R environment) isolates dependencies per project, recording exact package versions in a renv.lock file so code behaves identically on any server.',
          bn: 'renv প্রজেক্টের প্যাকেজ সংস্করণকে renv.lock ফাইলে লক করে রাখে যাতে যেকোনো সার্ভারে হুবহু একই ফল পাওয়া যায়।'
        }
      }
    ]
  }
};
