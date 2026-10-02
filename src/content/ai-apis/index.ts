import type { Hub } from '../../lib/types';
import { MeetAiApisLesson } from './lessons/meet-ai-apis';
import { StreamingRealtimeLesson } from './lessons/streaming-realtime';
import { RetriesResilienceLesson } from './lessons/retries-resilience';
import { CostBudgetsLesson } from './lessons/cost-budgets';
import { ToolsFunctionLesson } from './lessons/tools-function';
import { EvalsProdLesson } from './lessons/evals-prod';
import { RateLimitsLesson } from './lessons/rate-limits';
import { ApiCapstoneLesson } from './lessons/api-capstone';

export const aiApisHub: Hub = {
  slug: 'ai-apis',
  name: 'AI APIs',
  icon: '🔌',
  tagline: {
    en: 'Architect resilient production AI integrations: Chat Completions REST payloads, Server-Sent Events (SSE) streaming, exponential backoff with jitter, Token Bucket rate limiting, function calling tool schemas, and cost telemetry.',
    bn: 'শক্তিশালী প্রোডাকশন এআই ইন্টিগ্রেশন তৈরি করুন: চ্যাট কমপ্লিশন REST পেলোড, সার্ভার-সেন্ট ইভেন্টস (SSE) স্ট্রিমিং, জিটার সহ এক্সপোনেনশিয়াল ব্যাকঅফ, টোকেন বাকেট রেট লিমিটিং, ফাংশন কলিং এবং ব্যয় পর্যবেক্ষণ।'
  },
  intro: {
    en: 'Integrating foundation models into enterprise software requires far more than basic curl requests. Across this 8-lesson track, you will engineer a robust production client: estimating token budgets, consuming real-time Server-Sent Events (SSE) to reduce perceived latency by 5 times, implementing exponential backoff with full jitter to survive HTTP 429 rate limits, structuring JSON tool schemas for automated function execution, and logging OpenTelemetry traces for production observability.',
    bn: 'এন্টারপ্রাইজ সফটওয়্যারে লার্জ ল্যাঙ্গুয়েজ মডেল যুক্ত করতে কেবল সাধারণ curl রিকোয়েস্ট যথেষ্ট নয়। এই ৮ পাঠের ট্র্যাকে আপনি একটি শক্তিশালী প্রোডাকশন ক্লায়েন্ট তৈরি করবেন: টোকেন বাজেট অনুমান, ব্যবহারকারীর অপেক্ষা ৫ গুণ কমাতে রিয়েল-টাইম সার্ভার-সেন্ট ইভেন্টস (SSE) স্ট্রিমিং, HTTP ৪২৯ রেট লিমিট মোকাবিলায় জিটার সহ এক্সপোনেনশিয়াল ব্যাকঅফ, স্বয়ংক্রিয় কোড এক্সিকিউশনের জন্য JSON টুল স্কিমা এবং প্রোডাকশন পর্যবেক্ষণের জন্য ওপেন-টেলিমেট্রি ট্রেস সংরক্ষণ।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Request Lifecycle and Streaming (Lessons 1–2)',
        bn: 'ধাপ ১ — রিকোয়েস্ট লাইফসাইকেল এবং স্ট্রিমিং (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Lesson 1 (Meet AI APIs): The Chat Completions REST protocol, message array structures, authentication headers, and token estimation heuristics.',
          bn: 'পাঠ ১ (মিট এআই এপিআই): চ্যাট কমপ্লিশন REST প্রোটোকল, মেসেজ অ্যারে কাঠামো, প্রমাণীকরণ হেডার এবং টোকেন অনুমানের নিয়মাবলি।'
        },
        {
          en: 'Lesson 2 (Streaming & Real-Time SSE): Consuming Server-Sent Events line by line, slashing Time to First Token (TTFT), and stream abort controllers.',
          bn: 'পাঠ ২ (স্ট্রিমিং ও রিয়েল-টাইম SSE): লাইন ধরে সার্ভার-সেন্ট ইভেন্টস গ্রহণ, টাইম টু ফার্স্ট টোকেন (TTFT) হ্রাস এবং স্ট্রিম বাতিল প্রক্রিয়া।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Fault Tolerance and Cost Economics (Lessons 3–4)',
        bn: 'ধাপ ২ — ত্রুটি সহনশীলতা এবং ব্যয় অর্থনীতি (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Lesson 3 (Retries, Jitter & Circuit Breakers): Exponential backoff algorithms, decorrelated jitter, 429 and 503 recovery, and circuit breaker patterns.',
          bn: 'পাঠ ৩ (রিট্রাই, জিটার ও সার্কিট ব্রেকার): এক্সপোনেনশিয়াল ব্যাকঅফ অ্যালগরিদম, জিটার সমন্বয়, ৪২৯ ও ৫০৩ ত্রুটি মোকাবিলা এবং সার্কিট ব্রেকার ডিজাইন।'
        },
        {
          en: 'Lesson 4 (Cost Optimization & Prompt Caching): Input vs output token economics, prefix prompt caching (up to 90% savings), and tiered model routing.',
          bn: 'পাঠ ৪ (ব্যয় অপ্টিমাইজেশন ও প্রম্পট ক্যাশিং): ইনপুট বনাম আউটপুট টোকেন অর্থনীতি, প্রিফিক্স প্রম্পট ক্যাশিং (৯০% পর্যন্ত সাশ্রয়) এবং টিয়ার্ড মডেল রাউটিং।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Extensibility and Observability (Lessons 5–6)',
        bn: 'ধাপ ৩ — এক্সটেনসিবিলিটি এবং পর্যবেক্ষণ (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Lesson 5 (Function Calling & Tools): Declarative JSON tool schemas, multi-tool selection, parameter validation, and tool message injection.',
          bn: 'পাঠ ৫ (ফাংশন কলিং ও টুলস): ঘোষণামূলক JSON টুল স্কিমা, মাল্টি-টুল নির্বাচন, প্যারামিটার যাচাই এবং টুল রেসপন্স মেসেজ ইনজেকশন।'
        },
        {
          en: 'Lesson 6 (Production Telemetry & Evals): OpenTelemetry distributed tracing, token utilization dashboards, and logging production failure cases.',
          bn: 'পাঠ ৬ (প্রোডাকশন টেলিমেট্রি ও মূল্যায়ন): ওপেন-টেলিমেট্রি ডিস্ট্রিবিউটেড ট্রেসিং, টোকেন ব্যবহারের ড্যাশবোর্ড এবং ব্যর্থতার লগ পর্যবেক্ষণ।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4 — Traffic Pacing and Enterprise Capstone (Lessons 7–8)',
        bn: 'ধাপ ৪ — ট্রাফিক নিয়ন্ত্রণ এবং এন্টারপ্রাইজ ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Lesson 7 (Rate Limits & Token Buckets): Requests Per Minute (RPM) and Tokens Per Minute (TPM), Token Bucket algorithms, and Retry-After backpressure.',
          bn: 'পাঠ ৭ (রেট লিমিট ও টোকেন বাকেট): প্রতি মিনিটে রিকোয়েস্ট (RPM) ও টোকেন (TPM) সীমা, টোকেন বাকেট অ্যালগরিদম এবং ব্যাকপ্রেশার ব্যবস্থাপনা।'
        },
        {
          en: 'Lesson 8 (Production AI Client Capstone): Constructing a multi-provider resilient AI gateway with streaming, fallback failover, and telemetry.',
          bn: 'পাঠ ৮ (প্রোডাকশন এআই ক্লায়েন্ট ক্যাপস্টোন): স্ট্রিমিং, ফলব্যাক ফেইলওভার ও টেলিমেট্রি সহ মাল্টি-প্রোভাইডার এআই গেটওয়ে তৈরি।'
        }
      ]
    }
  ],
  lessons: [
    MeetAiApisLesson,
    StreamingRealtimeLesson,
    RetriesResilienceLesson,
    CostBudgetsLesson,
    ToolsFunctionLesson,
    EvalsProdLesson,
    RateLimitsLesson,
    ApiCapstoneLesson
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Resilient Multi-Provider AI Gateway',
        bn: 'প্রজেক্ট ১ — স্থিতিস্থাপক মাল্টি-প্রোভাইডার এআই গেটওয়ে'
      },
      brief: {
        en: 'Build a production-grade TypeScript AI gateway that streams responses via Server-Sent Events, implements client-side token bucket rate limiting (capped at 5 requests burst), and cascades to a fallback provider when primary endpoints return HTTP 429 or 503 errors.',
        bn: 'একটি প্রোডাকশন-গ্রেড TypeScript এআই গেটওয়ে তৈরি করুন যা সার্ভার-সেন্ট ইভেন্টসের মাধ্যমে ডেটা স্ট্রিম করে, ক্লায়েন্ট-সাইড টোকেন বাকেট রেট লিমিটিং পরিচালনা করে (সর্বোচ্চ ৫ রিকোয়েস্টের বার্স্ট) এবং প্রাথমিক সার্ভারে ৪২৯ বা ৫০৩ ত্রুটি দেখা দিলে বিকল্প প্রোভাইডারে ট্রাফিক পাঠায়।'
      }
    },
    {
      title: {
        en: 'Project 2 — Enterprise Function Calling Database Agent',
        bn: 'প্রজেক্ট ২ — এন্টারপ্রাইজ ফাংশন কলিং ডেটাবেস এজেন্ট'
      },
      brief: {
        en: 'Construct an autonomous agent that exposes 3 distinct analytical tools (SQL query executor, currency converter, inventory lookup) via JSON schemas, handles parallel tool execution, and injects validated tool responses back into the multi-turn chat stream.',
        bn: 'একটি স্বয়ংক্রিয় এজেন্ট তৈরি করুন যা JSON স্কিমার সাহায্যে ৩টি স্বতন্ত্র টুল (এসকিউএল কুয়েরি এক্সিকিউটর, মুদ্রা রূপান্তরকারী এবং ইনভেন্টরি অনুসন্ধান) পরিচালনা করে, সমান্তরাল টুল কল কার্যকর করে এবং চ্যাট স্ট্রিমে যাচাইকৃত উত্তর পাঠায়।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always enable Server-Sent Events (SSE) streaming for user-facing applications to reduce perceived latency from seconds down to sub-500ms.',
      bn: 'ব্যবহারকারীমুখী অ্যাপ্লিকেশনে সর্বদা সার্ভার-সেন্ট ইভেন্টস (SSE) স্ট্রিমিং সক্রিয় রাখুন যাতে উত্তরের অপেক্ষা কয়েক সেকেন্ড থেকে ৫০০ মিলিসেকেন্ডের নিচে নেমে আসে।'
    },
    {
      en: 'Implement exponential backoff combined with full jitter rather than fixed retry intervals to prevent synchronized thundering herd spikes.',
      bn: 'সার্ভারে অতিরিক্ত চাপ এড়াতে নির্দিষ্ট সময়ের রিট্রাইয়ের বদলে ফুল জিটার সহ এক্সপোনেনশিয়াল ব্যাকঅফ ব্যবহার করুন।'
    },
    {
      en: 'Enforce strict max_tokens output caps on all completions; output tokens cost substantially more and dominate API expenditures.',
      bn: 'সমস্ত কমপ্লিশনে কঠোর max_tokens আউটপুট সীমা আরোপ করুন; কারণ আউটপুট টোকেনের খরচ ইনপুটের চেয়ে অনেক বেশি হয়।'
    },
    {
      en: 'Leverage prompt prefix caching by keeping static system instructions and few-shot exemplars identical at the start of your message arrays.',
      bn: 'মেসেজ অ্যারের শুরুতে অপরিবর্তনশীল সিস্টেম নির্দেশ ও উদাহরণগুলো হুবহু একই রেখে প্রম্পট প্রিফিক্স ক্যাশিংয়ের সুবিধা গ্রহণ করুন।'
    },
    {
      en: 'Wrap all external tool execution functions in try-catch boundaries and return structured error messages directly to the model for self-healing.',
      bn: 'সমস্ত বহিরাগত টুল ফাংশনকে ট্রাই-ক্যাচ ব্লকে আবদ্ধ রাখুন এবং স্বয়ংক্রিয় সংশোধনের জন্য ত্রুটির বিবরণ সরাসরি মডেলে ফেরত পাঠান।'
    }
  ],
  interview: [
    {
      q: {
        en: 'Why is Time to First Token (TTFT) a critical latency metric in AI API engineering, and how does streaming solve it?',
        bn: 'এআই এপিআই ইঞ্জিনিয়ারিংয়ে টাইম টু ফার্স্ট টোকেন (TTFT) কেন একটি অত্যন্ত গুরুত্বপূর্ণ মেট্রিক এবং স্ট্রিমিং কীভাবে এটি সমাধান করে?'
      },
      a: {
        en: 'Without streaming, the client must wait for the entire completion to finish generating (often 3 to 10 seconds), leading to poor perceived responsiveness. Server-Sent Events (SSE) stream tokens as soon as they are generated by the model, slashing TTFT down to 300 to 500 milliseconds and providing immediate interactive feedback to human users.',
        bn: 'স্ট্রিমিং ছাড়া ক্লায়েন্টকে পুরো উত্তর লেখা শেষ হওয়া পর্যন্ত (সাধারণত ৩ থেকে ১০ সেকেন্ড) সম্পূর্ণ অপেক্ষা করতে হয়, যা ব্যবহারকারীর অভিজ্ঞতা নষ্ট করে। সার্ভার-সেন্ট ইভেন্টস (SSE) প্রতিটি টোকেন তৈরির সাথে সাথে পাঠিয়ে দেয়, ফলে TTFT কমে ৩০০ থেকে ৫০০ মিলিসেকেন্ডে নেমে আসে এবং ব্যবহারকারী তাৎক্ষণিক সাড়া দেখতে পান।'
      }
    },
    {
      q: {
        en: 'How does Exponential Backoff with Full Jitter prevent the "Thundering Herd" problem when an LLM provider returns HTTP 429?',
        bn: 'এলএলএম প্রোভাইডার HTTP ৪২৯ রিটার্ন করলে ফুল জিটার সহ এক্সপোনেনশিয়াল ব্যাকঅফ কীভাবে "থান্ডারিং হার্ড" সমস্যা প্রতিরোধ করে?'
      },
      a: {
        en: 'When hundreds of concurrent requests fail simultaneously due to a rate limit spike, fixed exponential backoff causes all clients to retry at the exact same synchronized intervals, repeatedly crashing the overloaded server. Adding random jitter decorrelates retry schedules, spreading requests smoothly across the time domain and allowing the provider to recover gracefully.',
        bn: 'রেট লিমিটের কারণে শত শত রিকোয়েস্ট একসাথে আটকে গেলে সাধারণ ব্যাকঅফে সব ক্লায়েন্ট ঠিক একই সময়ে পুনরায় অনুরোধ পাঠায়, যা সার্ভারকে বারবার ডাউন করে। র্যান্ডম জিটার যোগ করলে সবার রিট্রাই সময় আলাদা হয়ে যায় এবং ট্রাফিক সুষমভাবে ছড়িয়ে পড়ে সার্ভারকে স্বাভাবিক হতে সাহায্য করে।'
      }
    },
    {
      q: {
        en: 'What is Prompt Caching (Prefix Caching), and what architectural rule must developers follow to maximize cache hit rates?',
        bn: 'প্রম্পট ক্যাশিং (প্রিফিক্স ক্যাশিং) কী এবং ক্যাশ হিট রেট সর্বোচ্চ রাখতে ডেভেলপারদের কোন আর্কিটেকচারাল নিয়ম মেনে চলতে হবে?'
      },
      a: {
        en: 'Prompt caching stores the Key-Value (KV) attention states of previously processed prompt prefixes in GPU memory, discounting input token pricing by up to 90% and accelerating inference. To maintain cache hits, developers must place static content (system instructions, documentation, few-shot examples) at the exact beginning of the prompt and append dynamic user queries strictly at the end.',
        bn: 'প্রম্পট ক্যাশিং পূর্বে প্রসেস করা প্রম্পট প্রিফিক্সের কী-ভ্যালু (KV) অ্যাটেনশন স্টেট জিপিইউ মেমোরিতে সংরক্ষণ করে, যা ইনপুট টোকেন খরচ ৯০% পর্যন্ত কমায় এবং গতি বাড়ায়। ক্যাশ সচল রাখতে ডেভেলপারদের অপরিবর্তনশীল কনটেন্ট (সিস্টেম নির্দেশ, ডকুমেন্টেশন, উদাহরণ) প্রম্পটের একেবারে শুরুতে রাখতে হয় এবং পরিবর্তনশীল ব্যবহারকারী ইনপুট সর্বশেষে যোগ করতে হয়।'
      }
    },
    {
      q: {
        en: 'How does Function Calling work under the hood in modern LLM APIs?',
        bn: 'আধুনিক এলএলএম এপিআই-তে পর্দার আড়ালে ফাংশন কলিং মূলত কীভাবে কাজ করে?'
      },
      a: {
        en: 'The developer passes tool definitions (names, descriptions, and JSON Schemas) in the API request. When the model determines an external action is needed, it pauses text generation and returns a structured tool_calls object containing function arguments. The client executes the function locally, formats the output into a tool role message, and sends the conversation back to the model to synthesize the final response.',
        bn: 'ডেভেলপার এপিআই রিকোয়েস্টে টুলের নাম, বিবরণ এবং JSON স্কিমা পাঠান। মডেল যখন বোঝে যে কোনো বহিরাগত তথ্যের প্রয়োজন, তখন এটি সাধারণ লেখা বন্ধ করে ফাংশনের আর্গুমেন্ট সহ একটি tool_calls অবজেক্ট পাঠায়। ক্লায়েন্ট স্থানীয়ভাবে সেই ফাংশন চালিয়ে ফলাফলটি একটি tool রোলের মেসেজে রূপান্তর করে পুনরায় মডেলে পাঠায় যাতে মডেল চূড়ান্ত উত্তর তৈরি করতে পারে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Real-Time Voice & Chat Streaming: Powering customer service interfaces with Server-Sent Events to maintain sub-400ms time-to-first-token latency.',
      bn: 'রিয়েল-টাইম ভয়েস ও চ্যাট স্ট্রিমিং: ৪০০ মিলিসেকেন্ডের কম সময়ে প্রথম টোকেন পাঠিয়ে গ্রাহক সেবা চ্যাটবটের দ্রুত সাড়া নিশ্চিত করা।'
    },
    {
      en: 'Financial Trade Execution Gateway: Automated tool-calling pipeline that validates stock quotes and executes trades via audited JSON schema functions.',
      bn: 'আর্থিক লেনদেন এক্সিকিউশন গেটওয়ে: স্বয়ংক্রিয় টুল কলিং পাইপলাইন যা শেয়ার বাজারের দর যাচাই করে এবং নিয়ন্ত্রিত JSON স্কিমার মাধ্যমে লেনদেন সম্পন্ন করে।'
    },
    {
      en: 'Enterprise Multi-Tier Routing: Directing simple queries to compact sub-penny models while dynamically routing complex reasoning tasks to frontier flagship models.',
      bn: 'এন্টারপ্রাইজ মাল্টি-টিয়ার রাউটিং: সহজ কাজগুলো সাশ্রয়ী ছোট মডেলে পাঠানো এবং কেবল জটিল যুক্তিযুক্ত কাজগুলো শক্তিশালী ফ্ল্যাগশিপ মডেলে রাউট করা।'
    },
    {
      en: 'Resilient Microservice Gateway: Implementing Token Bucket rate limiters and automatic provider failover to maintain 99.99% uptime across upstream LLM outages.',
      bn: 'স্থিতিস্থাপক মাইক্রোসার্ভিস গেটওয়ে: টোকেন বাকেট রেট লিমিটিং এবং স্বয়ংক্রিয় বিকল্প প্রোভাইডারে স্যুইচ করার মাধ্যমে ৯৯.৯৯% আপটাইম বজায় রাখা।'
    }
  ]
};
