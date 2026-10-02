import type { Lesson } from '../../../lib/types';

export const LoggingAndTheTelemetryLesson: Lesson = {
  slug: 'logging-and-the-telemetry',
  tech: 'dotnet',
  title: {
    en: 'Structured Logging, Metrics & OpenTelemetry',
    bn: 'স্ট্রাকচার্ড লগিং, মেট্রিক্স এবং ওপেন-টেলিমেট্রি'
  },
  summary: {
    en: 'Master cloud observability in .NET distributed architectures. Implement semantic structured logging with message templates, eliminate string allocation overhead using LoggerMessage source generators, collect runtime metrics with System.Diagnostics.Metrics, and export distributed traces via OpenTelemetry.',
    bn: '.NET ডিস্ট্রিবিউটেড আর্কিটেকচারে ক্লাউড অবজার্ভেবিলিটি আয়ত্ত করুন। মেসেজ টেমপ্লেট দিয়ে সিমান্টিক স্ট্রাকচার্ড লগিং, LoggerMessage সোর্স জেনারেটর দিয়ে শূন্য-মেমোরি খরচ, System.Diagnostics.Metrics দিয়ে মেট্রিক্স সংগ্রহ এবং OpenTelemetry দিয়ে ডিস্ট্রিবিউটেড ট্রেসিং।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'structured-logging-and-loggermessage-heading',
      text: {
        en: 'Structured Logging and Compile-Time LoggerMessage Generators',
        bn: 'স্ট্রাকচার্ড লগিং এবং কম্পাইল-টাইম LoggerMessage জেনারেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production cloud microservices, traditional unformatted text logs are nearly impossible to query across millions of concurrent requests. Modern .NET (the managed execution platform) provides structured logging via the ILogger interface. Instead of string interpolation, developers supply message templates with named parameter tokens (such as "Order {OrderId} created for {UserId}"). Structured log sinks (like Seq, Elasticsearch, or Datadog) extract these properties as queryable JSON fields. To achieve peak efficiency, .NET introduced the [LoggerMessage] source generator attribute. It generates high-throughput C# logging delegates at compile time, eliminating object boxing and reducing string allocations to zero.',
        bn: 'প্রোডাকশন ক্লাউড মাইক্রোসার্ভিসে লক্ষ লক্ষ রিকোয়েস্টের মধ্যে সাধারণ টেক্সট লগ খুঁজে বের করা প্রায় অসম্ভব। আধুনিক .NET (ম্যানেজড এক্সিকিউশন ফ্রেমওয়ার্ক) রানটাইম ILogger ইন্টারফেসের মাধ্যমে স্ট্রাকচার্ড লগিং সুবিধা প্রদান করে। সাধারণ স্ট্রিং যোগের বদলে ডেভেলপাররা নামযুক্ত প্যারামিটার টোকেন দিয়ে মেসেজ টেমপ্লেট তৈরি করেন (যেমন "Order {OrderId} created for {UserId}")। এর ফলে আধুনিক লগিং টুলগুলো (যেমন Seq, Elasticsearch বা Datadog) প্রতিটি মানকে জেসন ফিল্ড হিসেবে আলাদা করে জমা রাখে। সর্বোচ্চ গতির জন্য .NET [LoggerMessage] সোর্স জেনারেটর প্রবর্তন করেছে। এটি কম্পাইল করার সময়ই অত্যন্ত দ্রুতগতির লগিং কোড তৈরি করে, যা মেমোরি বক্সিং বন্ধ করে মেমোরি খরচ শূন্যে নামিয়ে আনে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 3 core pillars of modern .NET cloud observability: Structured Logging, Distributed Tracing (Activities), and Real-Time Metrics.',
        bn: 'চিত্র ১: আধুনিক .NET ক্লাউড অবজার্ভেবিলিটির ৩ টি মূল স্তম্ভ: স্ট্রাকচার্ড লগিং, ডিস্ট্রিবিউটেড ট্রেসিং (Activities) এবং রিয়েল-টাইম মেট্রিক্স।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">THE 3 PILLARS OF .NET DISTRIBUTED OBSERVABILITY</text>

  <!-- Pillar 1: Structured Logs -->
  <g transform="translate(35, 65)">
    <rect width="235" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="235" height="30" rx="8" fill="#0284c7" />
    <text x="117" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Structured Logs (ILogger)</text>

    <rect x="15" y="45" width="205" height="50" rx="5" fill="#0f172a" />
    <text x="20" y="68" fill="#38bdf8" font-size="9" font-family="monospace">LogInformation("Order {Id}")</text>
    <text x="20" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Semantic Named Key-Values</text>

    <rect x="15" y="105" width="205" height="40" rx="5" fill="#0f172a" />
    <text x="20" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">[LoggerMessage] Zero Alloc</text>

    <text x="20" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Auditable Discrete Events</text>
  </g>

  <!-- Pillar 2: Distributed Traces -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#059669" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Traces (ActivitySource)</text>

    <rect x="15" y="45" width="210" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="20" y="68" fill="#34d399" font-size="9" font-family="monospace">W3C traceparent Propagation</text>
    <text x="20" y="85" fill="#34d399" font-size="8" font-family="monospace">Span Duration &amp; Latency</text>

    <rect x="15" y="105" width="210" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="20" y="130" fill="#34d399" font-size="8" font-family="monospace">Correlation Across Services</text>

    <text x="20" y="215" fill="#34d399" font-size="10" font-family="sans-serif">End-to-End Microservice Flow</text>
  </g>

  <!-- Pillar 3: Real-Time Metrics -->
  <g transform="translate(570, 65)">
    <rect width="235" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="235" height="30" rx="8" fill="#d97706" />
    <text x="117" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Metrics (Meter &amp; Counters)</text>

    <rect x="15" y="45" width="205" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="20" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Counter&lt;long&gt; &amp; Histogram</text>
    <text x="20" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Throughput &amp; Error Rate</text>

    <rect x="15" y="105" width="205" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="20" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Prometheus &amp; Grafana</text>

    <text x="20" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">System Health Dashboard</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'opentelemetry-and-metrics-heading',
      text: {
        en: 'Distributed Tracing and OpenTelemetry Integration',
        bn: 'ডিস্ট্রিবিউটেড ট্রেসিং এবং ওপেন-টেলিমেট্রি ইন্টিগ্রেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a user request traverses multiple independent microservices, debugging performance delays requires distributed tracing. In .NET, distributed tracing is powered natively by the System.Diagnostics.Activity and ActivitySource APIs. The runtime propagates W3C TraceContext headers ("traceparent") transparently across outgoing HttpClient calls. By attaching OpenTelemetry .NET SDK packages, engineers can wire ILogger events, Activity traces, and System.Diagnostics.Metrics into a unified pipeline. With a single method call (".UseOtlpExporter()"), the application exports telemetry data using standard OTLP protocols to observability backends such as Jaeger, Prometheus, or Grafana Tempo.',
        bn: 'যখন কোনো ব্যবহারকারীর রিকোয়েস্ট একাধিক স্বাধীন মাইক্রোসার্ভিসের মধ্য দিয়ে অতিক্রম করে, তখন কাজের গতি বিশ্লেষণ করতে ডিস্ট্রিবিউটেড ট্রেসিং অপরিহার্য। .NET-এ System.Diagnostics.Activity এবং ActivitySource এপিআই দিয়ে ট্রেসিং ব্যবস্থা তৈরি করা হয়েছে। রানটাইম নিজে থেকেই আউটগোয়িং HttpClient কলের সাথে W3C TraceContext ("traceparent") হেডার যুক্ত করে দেয়। OpenTelemetry .NET SDK যুক্ত করে ইঞ্জিনিয়াররা ILogger ইভেন্ট, Activity ট্রেস এবং System.Diagnostics.Metrics কে একটি সুসংহত পাইপলাইনে সংযুক্ত করতে পারেন। মাত্র একটি মেথড (".UseOtlpExporter()") কলের মাধ্যমে পুরো সিস্টেম স্ট্যান্ডার্ড OTLP প্রোটোকলে Jaeger, Prometheus বা Grafana Tempo-এর মতো প্ল্যাটফর্মে সমস্ত তথ্য স্বয়ংক্রিয়ভাবে পাঠাতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of modern .NET observability: Structured message template parsing, Activity distributed trace context, and metric counter aggregation.',
        bn: '.NET ক্লাউড অবজার্ভেবিলিটি, স্ট্রাকচার্ড টেমপ্লেট পার্সিং, Activity ট্রেস কনটেক্সট এবং মেট্রিক কাউন্টারের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of .NET Structured Logging, Activity Tracing, and Metrics

export interface StructuredLogEvent {
  timestamp: string;
  level: 'Information' | 'Warning' | 'Error';
  messageTemplate: string;
  properties: Record<string, any>;
}

export class ObservabilityPipelineSimulator {
  private logs: StructuredLogEvent[] = [];
  private requestCounter: number = 0;

  // 1. Structured Logging: Preserving properties rather than flattening to string
  public logInformation(template: string, args: Record<string, any>): void {
    const event: StructuredLogEvent = {
      timestamp: '2026-09-30T10:00:00Z',
      level: 'Information',
      messageTemplate: template,
      properties: args
    };
    this.logs.push(event);
    console.log('[StructuredLog]', event.messageTemplate, JSON.stringify(event.properties));
  }

  // 2. Metrics: Incrementing Counter
  public incrementRequestCounter(): void {
    this.requestCounter += 1;
  }

  // 3. Distributed Tracing: Simulating Activity and W3C Traceparent Header
  public startTraceActivity(activityName: string, traceId: string, spanId: string) {
    const traceparent = \`00-\${traceId}-\${spanId}-01\`;
    return {
      name: activityName,
      traceparent: traceparent,
      recordMetric: (durationMs: number) => {
        console.log(\`[Activity: \${activityName}] Completed in \${durationMs}ms with \${traceparent}\`);
      }
    };
  }

  public getSummary() {
    return { totalLogs: this.logs.length, totalRequests: this.requestCounter };
  }
}

// Execution demonstration
const obs = new ObservabilityPipelineSimulator();

// Simulating Incoming Request with Trace Activity
const activity = obs.startTraceActivity('ProcessOrder', '4bf92f3577b34da6a3ce929d0e0e4736', '00f067aa0ba902b7');
obs.incrementRequestCounter();

// Simulating Structured Logging using Message Template
obs.logInformation('Order {OrderId} processed successfully for customer {CustomerId}', {
  OrderId: 42,
  CustomerId: 'CUST-900',
  TotalAmount: 650
});

// Concluding Activity Span
activity.recordMetric(100);

const summary = obs.getSummary();
console.log('Total Log Events Collected:', summary.totalLogs); // 1
console.log('Total HTTP Requests Counted:', summary.totalRequests); // 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Structured Logging',
          def: {
            en: 'Logging technique preserving individual parameter key-value pairs inside JSON records rather than flattening to text.',
            bn: 'লগিং পদ্ধতি যা টেক্সটে রূপান্তর না করে প্রতিটি প্যারামিটারকে জেসন ডেটা হিসেবে সংরক্ষণ করে।'
          }
        },
        {
          term: 'LoggerMessage',
          def: {
            en: 'C# source generator attribute producing zero-allocation, strongly typed compiled logging methods.',
            bn: 'C# সোর্স জেনারেটর যা কোনো মেমোরি খরচ ছাড়া উচ্চগতির কম্পাইল্ড লগিং কোড তৈরি করে।'
          }
        },
        {
          term: 'ActivitySource',
          def: {
            en: '.NET standard API for creating and managing distributed tracing spans compliant with OpenTelemetry standards.',
            bn: '.NET-এর মানসম্মত এপিআই যা OpenTelemetry নির্দেশিত ডিস্ট্রিবিউটেড ট্রেসিং স্প্যান তৈরি ও পরিচালনা করে।'
          }
        },
        {
          term: 'OpenTelemetry',
          def: {
            en: 'Vendor-neutral cloud observability framework collecting metrics, logs, and distributed traces via standard OTLP.',
            bn: 'সার্বজনীন ক্লাউড অবজার্ভেবিলিটি ফ্রেমওয়ার্ক যা মেট্রিক্স, লগ ও ট্রেসকে সার্বজনীন OTLP প্রোটোকলে পাঠায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'structured-logging-vs-interpolation-ex1',
      kind: 'mcq',
      topic: 'structured-logging-message-templates',
      question: {
        en: 'Why should .NET developers use semantic message templates ("Order {OrderId} processed", id) instead of string interpolation ($"Order {id} processed")?',
        bn: '.NET ডেভেলপারদের স্ট্রিং যোগ করার বদলে ("$"Order {id}"") কেন সিমান্টিক মেসেজ টেমপ্লেট ("Order {OrderId} processed", id) ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'Message templates preserve the individual property names and types in structured JSON sinks (enabling filtering and indexing), while string interpolation flattens them into a plain string and forces heap allocations',
          bn: 'মেসেজ টেমপ্লেট প্রতিটি প্রপার্টির নাম ও মানকে জেসনে আলাদা ফিল্ড হিসেবে সংরক্ষণ করে (যা সহজে ফিল্টার করা যায়), আর স্ট্রিং ইন্টারপোলেশন সব মানকে সাধারণ লেখায় মিশিয়ে অনর্থক মেমোরি নষ্ট করে'
        },
        {
          en: 'String interpolation deletes the source code from Git',
          bn: 'স্ট্রিং ইন্টারপোলেশন গিট থেকে সোর্স কোড মুছে ফেলে'
        },
        {
          en: 'Message templates cause the computer to speak the text aloud',
          bn: 'মেসেজ টেমপ্লেট কম্পিউটারকে দিয়ে লেখাটি জোরে বলিয়ে নেয়'
        },
        {
          en: 'String interpolation is forbidden by the C# compiler',
          bn: 'C# কম্পাইলার স্ট্রিং ইন্টারপোলেশন পুরোপুরি নিষিদ্ধ করেছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Semantic logging preserves key-value pairs for Elasticsearch and Datadog indexing.',
        bn: 'সিমান্টিক টেমপ্লেট ডেটাকে স্ট্রাকচার্ড রাখে যেন পরবর্তীতে কোয়েরি করে নির্দিষ্ট অর্ডার আইডি খোঁজা যায়।'
      },
      explanation: {
        en: 'Structured logging preserves the identity of tokens like {OrderId}, allowing log engines to index properties as discrete queryable database columns.',
        bn: 'সার্ভারে হাজার হাজার লগের মধ্যে নির্দিষ্ট কোনো আইডি বা এরর সহজে খুঁজতে এটি অপরিহার্য।'
      }
    },
    {
      id: 'loggermessage-attribute-zero-alloc-ex2',
      kind: 'mcq',
      topic: 'loggermessage-source-generator-performance',
      question: {
        en: 'What major performance benefit does the modern [LoggerMessage] source generator provide in high-throughput C# applications?',
        bn: 'উচ্চগতির C# অ্যাপ্লিকেশনে আধুনিক [LoggerMessage] সোর্স জেনারেটর কোন প্রধান পারফরম্যান্স সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It generates compile-time strongly typed logging code that avoids object boxing, avoids allocating parameter arrays, and skips evaluation entirely if the log level is disabled',
          bn: 'এটি কম্পাইল করার সময়ই টাইপ-সেফ কোড তৈরি করে যা অবজেক্ট বক্সিং ও প্যারামিটার অ্যারে তৈরি বন্ধ করে, এবং লগ লেভেল নিষ্ক্রিয় থাকলে কোনো প্রসেসিং না করে সময় বাঁচায়'
        },
        {
          en: 'It doubles the physical CPU clock frequency of the processor',
          bn: 'এটি প্রসেসরের ফিজিক্যাল সিপিইউ ক্লক স্পিড দ্বিগুণ করে দেয়'
        },
        {
          en: 'It compresses hard drive files using 7-Zip',
          bn: 'এটি হার্ড ড্রাইভের ফাইলগুলোকে ৭-জিপ দিয়ে সংকুচিত করে'
        },
        {
          en: '[LoggerMessage] only operates on Windows 98',
          bn: '[LoggerMessage] কেবল উইন্ডোজ ৯৮-এ চলে'
        }
      ],
      answer: 0,
      hint: {
        en: '[LoggerMessage] source generator avoids boxing and array allocations.',
        bn: '[LoggerMessage] কোনো বাড়তি অবজেক্ট তৈরি না করে অত্যন্ত দ্রুতগতিতে লগ সম্পন্ন করে।'
      },
      explanation: {
        en: 'By generating specialized structs and extension methods at compile time, [LoggerMessage] completely eliminates runtime allocations and reflection overhead.',
        bn: 'বিল্ডের সময়ই কোড অপটিমাইজ হয়ে যাওয়ায় গার্বেজ কালেক্টরের ওপর কোনো চাপ পড়ে না।'
      }
    },
    {
      id: 'activitysource-distributed-tracing-w3c-ex3',
      kind: 'mcq',
      topic: 'activitysource-w3c-traceparent-context',
      question: {
        en: 'What is the role of the "System.Diagnostics.ActivitySource" class in .NET distributed tracing?',
        bn: '.NET ডিস্ট্রিবিউটেড ট্রেসিংয়ে "System.Diagnostics.ActivitySource" ক্লাসের ভূমিকা কী?'
      },
      options: [
        {
          en: 'It is the primary factory for creating Activity instances (OpenTelemetry spans) that record start times, durations, tags, and propagate W3C TraceContext headers across microservice calls',
          bn: 'এটি Activity অবজেক্ট (OpenTelemetry স্প্যান) তৈরির প্রধান ফ্যাক্টরি, যা কাজের শুরু, ব্যাপ্তিকাল ও ট্যাগ রেকর্ড করে এবং মাইক্রোসার্ভিস জুড়ে W3C TraceContext হেডার পাঠায়'
        },
        {
          en: 'It encrypts local hard disk files with BitLocker',
          bn: 'এটি বিটলকার দিয়ে লোকাল হার্ড ডিস্কের ফাইল এনক্রিপ্ট করে'
        },
        {
          en: 'It renders HTML web pages on the client screen',
          bn: 'এটি ক্লায়েন্টের স্ক্রিনে এইচটিএমএল পেজ প্রদর্শন করে'
        },
        {
          en: 'ActivitySource was deprecated in .NET 6',
          bn: '.NET ৬ সংস্করণে ActivitySource বাতিল করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ActivitySource creates tracing spans adhering to OpenTelemetry standards.',
        bn: 'ActivitySource প্রতিটি কাজের শুরু ও শেষের সময় মেপে ডিস্ট্রিবিউটেড স্প্যান তৈরি করে।'
      },
      explanation: {
        en: 'ActivitySource is .NET\'s native implementation of the OpenTelemetry Tracer interface, providing vendor-neutral distributed tracing directly in the BCL.',
        bn: 'কোনো তৃতীয় পক্ষের প্যাকেজ ছাড়াই .NET কোরের ভেতর সরাসরি ডিস্ট্রিবিউটেড ট্রেসিং সমর্থন নিশ্চিত করে।'
      }
    },
    {
      id: 'system-diagnostics-metrics-meters-ex4',
      kind: 'mcq',
      topic: 'system-diagnostics-metrics-counters-histograms',
      question: {
        en: 'Which API in .NET 8 is recommended for emitting numeric operational metrics (such as request throughput counters and latency histograms)?',
        bn: 'সংখ্যাসূচক অপারেশনাল মেট্রিক্স (যেমন থ্রুপুট কাউন্টার এবং ল্যাটেন্সি হিস্টোগ্রাম) তৈরির জন্য .NET ৮-এ কোন এপিআই ব্যবহার করার পরামর্শ দেওয়া হয়?'
      },
      options: [
        {
          en: 'System.Diagnostics.Metrics (using Meter, Counter<T>, and Histogram<T>), which natively integrates with OpenTelemetry and Prometheus exporters',
          bn: 'System.Diagnostics.Metrics (যেমন Meter, Counter<T> এবং Histogram<T>), যা সরাসরি OpenTelemetry এবং Prometheus-এর সাথে সংযুক্ত হয়'
        },
        {
          en: 'Printing numbers to the Console screen with System.Console.WriteLine',
          bn: 'System.Console.WriteLine দিয়ে স্ক্রিনে সংখ্যা প্রিন্ট করা'
        },
        {
          en: 'Writing text files inside the Windows System32 folder',
          bn: 'উইন্ডোজের System32 ফোল্ডারে টেক্সট ফাইল লিখে রাখা'
        },
        {
          en: 'Metrics cannot be collected in compiled C# applications',
          bn: 'কম্পাইল করা C# অ্যাপ্লিকেশনে মেট্রিক্স সংগ্রহ করা সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'System.Diagnostics.Metrics is the modern high-performance metrics API in .NET.',
        bn: 'System.Diagnostics.Metrics হলো .NET-এর আধুনিক ও স্ট্যান্ডার্ড মেট্রিক্স এপিআই।'
      },
      explanation: {
        en: 'System.Diagnostics.Metrics provides thread-safe counters, gauges, and histograms that seamlessly export to Prometheus and Grafana dashboards.',
        bn: 'সার্ভারের গতি, মেমোরি ব্যবহার ও রিকোয়েস্ট সংখ্যা মনিটর করার জন্য এটি আদর্শ।'
      }
    }
  ],
  quiz: {
    id: 'quiz-logging-and-the-telemetry',
    title: {
      en: 'Structured Logging & OpenTelemetry Mastery Quiz',
      bn: 'স্ট্রাকচার্ড লগিং এবং ওপেন-টেলিমেট্রি কুইজ'
    },
    questions: [
      {
        id: 'quiz-ilogger-beginscope-correlation-id',
        kind: 'mcq',
        topic: 'ilogger-beginscope-ambient-properties',
        question: {
          en: 'How does calling "using (_logger.BeginScope(...))" enhance structured logging across nested method calls during an HTTP request?',
          bn: 'একটি এইচটিটিপি রিকোয়েস্ট চলাকালে "using (_logger.BeginScope(...))" কীভাবে নেস্টেড মেথডগুলোর সমস্ত লগে স্বয়ংক্রিয়ভাবে তথ্য যোগ করে?'
        },
        options: [
          {
            en: 'It establishes an ambient logical context that automatically attaches specified properties (such as CorrelationId or TenantId) to all log messages emitted within that scope',
            bn: 'এটি একটি অ্যাম্বিয়েন্ট লজিক্যাল কনটেক্সট তৈরি করে যা সেই স্কোপের ভেতর চলা সমস্ত লগের সাথে স্বয়ংক্রিয়ভাবে নির্ধারিত প্রপার্টি (যেমন CorrelationId বা TenantId) যুক্ত করে দেয়'
          },
          {
            en: 'It deletes all previous logs from disk to save storage space',
            bn: 'এটি স্টোরেজ বাঁচাতে আগের সমস্ত লগ ডিস্ক থেকে মুছে ফেলে'
          },
          {
            en: 'It restricts logging to only occur at 12:00 midnight',
            bn: 'এটি কেবল রাত ১২:০০ টার সময় লগিংয়ের অনুমতি দেয়'
          },
          {
            en: 'BeginScope is exclusively designed for unit test assertions',
            bn: 'BeginScope কেবল ইউনিট টেস্টের জন্য ডিজাইন করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'BeginScope enriches every downstream log event with ambient context properties.',
          bn: 'BeginScope একবার ডিক্লেয়ার করলে তার ভেতরের শত শত লগে বারবার আইডি পাস করতে হয় না।'
        },
        explanation: {
          en: 'Log scopes eliminate repetitive code by attaching ambient metadata like TenantId or RequestId to every log statement within the execution block.',
          bn: 'একটি রিকোয়েস্টের সমস্ত লগ মেসেজকে একটি একক আইডির মাধ্যমে খুঁজে পেতে এটি সাহায্য করে।'
        }
      },
      {
        id: 'quiz-opentelemetry-protocol-otlp-collector',
        kind: 'mcq',
        topic: 'otlp-protocol-opentelemetry-collector',
        question: {
          en: 'Why is the OpenTelemetry Protocol (OTLP) over gRPC or HTTP the industry standard for telemetry egress from .NET microservices?',
          bn: '.NET মাইক্রোসার্ভিস থেকে টেলিমেট্রি তথ্য পাঠানোর জন্য gRPC বা HTTP ভিত্তিক OpenTelemetry Protocol (OTLP) কেন বিশ্বব্যাপী মানসম্মত আদর্শ?'
        },
        options: [
          {
            en: 'It decouples the application from proprietary observability vendors by standardizing data transmission to OpenTelemetry Collectors, allowing backend switches without code changes',
            bn: 'এটি নির্দিষ্ট কোনো ভেন্ডরের ওপর নির্ভরতা দূর করে OpenTelemetry Collector-এ সার্বজনীন প্রোটোকলে ডেটা পাঠায়, ফলে কোড না বদলেই পেছনের পর্যবেক্ষণ প্ল্যাটফর্ম পরিবর্তন করা যায়'
          },
          {
            en: 'OTLP only works with Microsoft Excel spreadsheets',
            bn: 'OTLP কেবল মাইক্রোসফট এক্সেল স্প্রেডশিটের সাথে চলে'
          },
          {
            en: 'It turns off network encryption to maximize speed',
            bn: 'এটি গতি বাড়াতে নেটওয়ার্ক এনক্রিপশন বন্ধ করে দেয়'
          },
          {
            en: 'OTLP increases telemetry file sizes by 500 percent',
            bn: 'OTLP ফাইলের আকার ৫০০ শতাংশ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'OTLP provides a vendor-neutral protocol to send telemetry to any backend.',
          bn: 'OTLP সার্বজনীন হওয়ায় যেকোনো ক্লাউড প্রোভাইডার বা ওপেন-সোর্স টুলে ডেটা পাঠানো যায়।'
        },
        explanation: {
          en: 'OTLP provides an open standard for traces, metrics, and logs, allowing systems to route telemetry to Jaeger, Datadog, Splunk, or New Relic transparently.',
          bn: 'কোড পরিবর্তনের কোনো ঝামেলা ছাড়াই ক্লাউড মনিটরিং টুল অদলবদল করা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-filtering-log-levels-minimumlevel',
        kind: 'mcq',
        topic: 'log-filtering-rules-appsettings-json',
        question: {
          en: 'How does ASP.NET Core evaluate log filtering rules configured under the "Logging:LogLevel" section of "appsettings.json"?',
          bn: 'ASP.NET Core কীভাবে "appsettings.json"-এর "Logging:LogLevel" সেকশনে কনফিগার করা লগ ফিল্টারিং নিয়মগুলো মূল্যায়ন করে?'
        },
        options: [
          {
            en: 'It matches the logger category name using hierarchical prefix rules, applying the most specific matching category rule (e.g., "Microsoft.EntityFrameworkCore: Warning")',
            bn: 'এটি হায়ারার্কিকাল প্রিফিক্স নিয়মে লগার ক্যাটাগরির নামের সাথে তুলনা করে সবচেয়ে নির্দিষ্ট ক্যাটাগরি নিয়মটি (যেমন "Microsoft.EntityFrameworkCore: Warning") প্রয়োগ করে'
          },
          {
            en: 'It selects random log levels based on the current weather',
            bn: 'এটি আবহাওয়ার ওপর ভিত্তি করে লগের লেভেল নির্বাচন করে'
          },
          {
            en: 'It logs every single internal CLR memory instruction regardless of settings',
            bn: 'এটি সেটিংস অগ্রাহ্য করে মেমোরির প্রতিটি নির্দেশ লগ করে'
          },
          {
            en: 'All log levels are converted into fatal errors automatically',
            bn: 'সমস্ত লগকে নিজে থেকেই মারাত্মক এররে রূপান্তর করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The logging subsystem picks the most specific category match to filter output.',
          bn: 'ক্যাটাগরি নামের সাথে সবচেয়ে কাছাকাছি মেলা সুনির্দিষ্ট নিয়মটি কার্যকর হয়।'
        },
        explanation: {
          en: 'Specific category rules override general "Default" levels, allowing noisy frameworks like EF Core to be muted while preserving verbose logs for business code.',
          bn: 'ফ্রেমওয়ার্কের অপ্রয়োজনীয় ইনফো লগ বন্ধ রেখে শুধু নিজস্ব বিজনেসের গুরুত্বপূর্ণ লগ দেখতে এটি ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-activity-source-w3c-trace-propagation',
        kind: 'mcq',
        topic: 'w3c-traceparent-distributed-correlation',
        question: {
          en: 'How does an outgoing HttpClient call in modern .NET ensure that downstream microservices continue the exact same distributed trace?',
          bn: 'আধুনিক .NET-এ একটি আউটগোয়িং HttpClient কল কীভাবে নিশ্চিত করে যে পরবর্তী মাইক্রোসার্ভিস ঠিক একই ডিস্ট্রিবিউটেড ট্রেসের ধারাবাহিকতা রক্ষা করবে?'
        },
        options: [
          {
            en: 'HttpClient automatically injects the active Activity\'s W3C "traceparent" header (containing version, TraceId, ParentSpanId, and flags) into outgoing HTTP headers',
            bn: 'HttpClient সক্রিয় Activity থেকে W3C "traceparent" হেডারটি (যা TraceId, ParentSpanId এবং ফ্ল্যাগ ধারণ করে) নিজে থেকেই আউটগোয়িং এইচটিটিপি হেডারে ইনজেক্ট করে দেয়'
          },
          {
            en: 'By emailing the server password to the client API',
            bn: 'ক্লায়েন্ট এপিআই-তে সার্ভারের পাসওয়ার্ড ইমেইল করে'
          },
          {
            en: 'By restarting both servers before the HTTP call',
            bn: 'এইচটিটিপি কলের আগে দুটি সার্ভারকেই রিস্টার্ট করে'
          },
          {
            en: 'HttpClient does not support distributed tracing headers',
            bn: 'HttpClient কোনো ডিস্ট্রিবিউটেড ট্রেসিং হেডার সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'HttpClient automatically propagates the W3C traceparent header.',
          bn: 'HttpClient নিজে থেকেই ট্রেসিং হেডার পরবর্তী সার্ভিসে ফরোয়ার্ড করে দেয়।'
        },
        explanation: {
          en: 'ASP.NET Core and HttpClient natively implement the W3C Trace Context standard, passing the traceparent header across network hops automatically.',
          bn: 'এর ফলে একটি রিকোয়েস্ট যতগুলো মাইক্রোসার্ভিস পার হোক না কেন, শুরু থেকে শেষ পর্যন্ত পুরো যাত্রাপথ ট্রেস করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'release-and-the-run',
    title: {
      en: 'Production Release, Docker & Native AOT',
      bn: 'প্রোডাকশন রিলিজ, ডকার এবং Native AOT'
    }
  }
};
