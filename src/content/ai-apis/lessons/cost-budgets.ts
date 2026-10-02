import type { Lesson } from '../../../lib/types';

export const CostBudgetsLesson: Lesson = {
  slug: 'cost-budgets',
  tech: 'ai-apis',
  title: {
    en: 'Cost Optimization, Prompt Caching & Model Routing',
    bn: 'ব্যয় অপ্টিমাইজেশন, প্রম্পট ক্যাশিং এবং মডেল রাউটিং'
  },
  summary: {
    en: 'Master the economics of enterprise AI APIs and token pricing asymmetry. Leverage Prefix Prompt Caching for up to 90% cost savings, implement multi-tier model routing, and enforce automated budget alarms at 50%, 80%, and 100% thresholds.',
    bn: 'এন্টারপ্রাইজ এআই এপিআই-এর অর্থনীতি এবং টোকেন মূল্যের তারতম্য আয়ত্ত করুন। ৯০% পর্যন্ত সাশ্রয়ী প্রিফিক্স প্রম্পট ক্যাশিং ব্যবহার, মাল্টি-টিয়ার মডেল রাউটিং এবং ৫০%, ৮০% ও ১০০% সীমাতে স্বয়ংক্রিয় বাজেট অ্যালার্ম প্রয়োগ করুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'token-economics-heading',
      text: {
        en: 'The Token Pricing Asymmetry: Why Output Dominates the Ledger',
        bn: 'টোকেন মূল্যের অসামঞ্জস্য: আউটপুট কেন খরচের সবচেয়ে বড় অংশ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'AI API pricing tables reveal a fundamental economic reality: completion output tokens cost approximately 4 times more than prompt input tokens. Because output tokens must be computed sequentially one by one, every generated token monopolizes GPU memory bandwidth. In high-volume enterprise systems processing 1000000 tokens daily, unconstrained responses quickly exhaust monthly budgets. Enforcing strict output token ceilings is the single highest-leverage cost control in production.',
        bn: 'এআই এপিআই মূল্য তালিকা একটি মৌলিক অর্থনৈতিক বাস্তবতা প্রকাশ করে: কমপ্লিশন আউটপুট টোকেনের দাম প্রম্পট ইনপুট টোকেনের চেয়ে প্রায় ৪ গুণ বেশি। যেহেতু আউটপুট টোকেনগুলো একের পর এক ক্রমানুসারে তৈরি করতে হয়, তাই প্রতিটি টোকেন জিপিইউ মেমোরি ব্যান্ডউইথ দখল করে রাখে। দৈনিক ১০০০০০০ টোকেন প্রসেস করা উচ্চ-সক্ষমতার সিস্টেমে অনিয়ন্ত্রিত উত্তর দ্রুত মাসিক বাজেট শেষ করে দেয়। আউটপুট টোকেনের ওপর কঠোর সীমা নির্ধারণই প্রোডাকশনে ব্যয় নিয়ন্ত্রণের সবচেয়ে কার্যকর উপায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: GPU Key-Value (KV) prefix caching reducing input costs by up to 90%.',
        bn: 'চিত্র ১: জিপিইউ কী-ভ্যালু (KV) প্রিফিক্স ক্যাশিং যা ইনপুট খরচ ৯০% পর্যন্ত কমিয়ে দেয়।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PROMPT PREFIX CACHING & MULTI-TIER ROUTING</text>
  
  <!-- Request 1: Cold Cache -->
  <g transform="translate(30, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#d97706" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Request 1: Cold Cache (Full Price)</text>
    
    <rect x="15" y="55" width="330" height="60" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="25" y="78" fill="#cbd5e1" font-size="10" font-family="monospace">System Instructions: 2000 tokens</text>
    <text x="25" y="98" fill="#f59e0b" font-size="10" font-family="monospace">Billed at standard 100% input rate</text>
    
    <rect x="15" y="125" width="330" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="25" y="148" fill="#cbd5e1" font-size="10" font-family="monospace">User Query: 50 tokens (Full price)</text>
    <text x="25" y="165" fill="#94a3b8" font-size="9" font-family="monospace">KV attention state written to GPU RAM</text>
    
    <rect x="15" y="185" width="330" height="40" rx="6" fill="#0f172a" stroke="#eab308" />
    <text x="25" y="210" fill="#facc15" font-size="11" font-family="sans-serif" font-weight="bold">Total Cost: $0.00030 per request</text>
  </g>

  <!-- Request 2: Warm Cache Hit -->
  <g transform="translate(450, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Request 2: Warm Cache (90% Savings)</text>
    
    <rect x="15" y="55" width="330" height="60" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="78" fill="#4ade80" font-size="10" font-family="monospace">System Instructions: 2000 tokens</text>
    <text x="25" y="98" fill="#4ade80" font-size="10" font-family="bold">90% Cached Discount applied!</text>
    
    <rect x="15" y="125" width="330" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="25" y="148" fill="#cbd5e1" font-size="10" font-family="monospace">User Query: 50 tokens (Dynamic)</text>
    <text x="25" y="165" fill="#38bdf8" font-size="9" font-family="monospace">Only dynamic delta billed at full rate</text>
    
    <rect x="15" y="185" width="330" height="40" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="210" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">Total Cost: $0.00008 per request</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'prompt-caching-mechanics-heading',
      text: {
        en: 'Prefix Caching Architecture and Multi-Tier Model Routing',
        bn: 'প্রিফিক্স ক্যাশিং আর্কিটেকচার এবং মাল্টি-টিয়ার মডেল রাউটিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Prompt Caching retains the pre-computed Key-Value (KV) attention matrices in GPU memory across requests sharing an identical prefix of at least 1024 tokens. By maintaining static system guidelines and few-shot examples at the exact start of the message array, subsequent requests read from cache at a 90% discount. Furthermore, multi-tier routing directs 80% of routine categorization to lightweight sub-penny models, reserving premium frontier models only for complex reasoning tasks.',
        bn: 'প্রম্পট ক্যাশিং অন্তত ১০২৪ টোকেনের অভিন্ন প্রিফিক্স বিশিষ্ট অনুরোধগুলোর ক্ষেত্রে পূর্বে গণনাকৃত কী-ভ্যালু (KV) অ্যাটেনশন ম্যাট্রিক্স জিপিইউ মেমোরিতে ধরে রাখে। মেসেজ অ্যারের শুরুতে অপরিবর্তনশীল নিয়ম ও উদাহরণগুলো অপরিবর্তিত রাখলে পরবর্তী অনুরোধগুলো ৯০% সাশ্রয়ী মূল্যে ক্যাশ থেকে পঠিত হয়। তাছাড়া মাল্টি-টিয়ার রাউটিং ৮০% সাধারণ শ্রেণিবিন্যাসের কাজ সাশ্রয়ী ছোট মডেলে পাঠায় এবং কেবল জটিল যুক্তিযুক্ত কাজের জন্য প্রিমিয়াম ফ্ল্যাগশিপ মডেল ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript cost simulation comparing standard billing against 85% prompt cache hit rates.',
        bn: '৮৫% প্রম্পট ক্যাশ হিট রেট সহ খরচের হিসাব পরিমাপের TypeScript কোড।'
      },
      code: `interface PricingTier {
  modelName: string;
  inputPerMillion: number;
  cachedInputPerMillion: number;
  outputPerMillion: number;
}

export function calculateExecutionCost(
  promptTokens: number,
  outputTokens: number,
  isCacheHit: boolean,
  pricing: PricingTier
): number {
  const inputRate = isCacheHit ? pricing.cachedInputPerMillion : pricing.inputPerMillion;
  const inputCost = (promptTokens / 1000000) * inputRate;
  const outputCost = (outputTokens / 1000000) * pricing.outputPerMillion;
  return inputCost + outputCost;
}

// Pricing rates: $0.150 per 1M input, $0.0375 cached (75% to 90% discount), $0.600 output
const gpt4oMiniPricing: PricingTier = {
  modelName: 'gpt-4o-mini',
  inputPerMillion: 0.15,
  cachedInputPerMillion: 0.0375,
  outputPerMillion: 0.60
};

// Simulate 1000 requests with 2000 prompt tokens and 50 output tokens
const requestCount = 1000;
const promptSize = 2000;
const outputSize = 50;

let unoptimizedTotal = 0;
let cachedTotal = 0;

for (let i = 0; i < requestCount; i++) {
  // Unoptimized: 0% cache hits
  unoptimizedTotal += calculateExecutionCost(promptSize, outputSize, false, gpt4oMiniPricing);
  // Optimized: 85% cache hit rate (warm prefix)
  const isHit = i >= 150; // First 150 cold, remaining 850 warm
  cachedTotal += calculateExecutionCost(promptSize, outputSize, isHit, gpt4oMiniPricing);
}

console.log('Unoptimized Cost for 1000 calls: $' + unoptimizedTotal.toFixed(4)); // $0.3300
console.log('Cached Cost for 1000 calls: $' + cachedTotal.toFixed(4));           // $0.1388
console.log('Total Dollars Saved: $' + (unoptimizedTotal - cachedTotal).toFixed(4)); // $0.1913`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Prompt Caching',
          def: {
            en: 'GPU hardware optimization reusing pre-calculated attention Key-Value states for recurring static prompt prefixes.',
            bn: 'জিপিইউ হার্ডওয়্যার অপ্টিমাইজেশন যা প্রম্পটের অপরিবর্তনশীল অংশের পূর্ব-গণনাকৃত অ্যাটেনশন স্টেট পুনরায় ব্যবহার করে।'
          }
        },
        {
          term: 'Model Tier Routing',
          def: {
            en: 'Architectural pattern directing user queries to the lowest-cost model capable of satisfying task constraints.',
            bn: 'আর্কিটেকচারাল প্যাটার্ন যা ব্যবহারকারীর কাজের জটিলতা বুঝে সর্বনিম্ন খরচের উপযুক্ত মডেলে ট্রাফিক পাঠায়।'
          }
        },
        {
          term: 'Hard Budget Ceiling',
          def: {
            en: 'Automated billing guardrail that rejects outbound requests or triggers alerts when expenditures cross monthly limits.',
            bn: 'স্বয়ংক্রিয় আর্থিক সুরক্ষা ব্যবস্থা যা মাসিক ব্যয়ের সীমা অতিক্রম করলে নতুন অনুরোধ আটকে দেয় বা সতর্কবার্তা পাঠায়।'
          }
        },
        {
          term: 'KV Cache',
          def: {
            en: 'Transformer attention memory storing past key and value vectors in VRAM to eliminate redundant prefix token compute.',
            bn: 'ট্রান্সফরমার মেমোরি যা প্রম্পটের আগের টোকেনগুলোর ভেক্টর জিপিইউ মেমোরিতে জমিয়ে রেখে পুনরায় হিসাব করা রোধ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'output-cost-leverage-ex1',
      kind: 'mcq',
      topic: 'output-token-cost-control',
      question: {
        en: 'Why is capping output token length with max_tokens the most effective lever for reducing API expenditures?',
        bn: 'max_tokens দিয়ে আউটপুট দৈর্ঘ্য নিয়ন্ত্রণ করা কেন এপিআই খরচ কমানোর সবচেয়ে কার্যকর উপায়?'
      },
      options: [
        {
          en: 'Output tokens cost roughly 4 times more than input tokens because they cannot be generated in parallel',
          bn: 'আউটপুট টোকেনের খরচ ইনপুটের চেয়ে প্রায় ৪ গুণ বেশি কারণ এগুলো সমান্তরালভাবে তৈরি করা সম্ভব হয় না'
        },
        {
          en: 'Output tokens require separate physical shipping fees',
          bn: 'আউটপুট টোকেনের জন্য আলাদা ডাকমাশুল বা শিপিং চার্জ লাগে'
        },
        {
          en: 'Input tokens are permanently erased from model memory',
          bn: 'ইনপুট টোকেনগুলো মডেলের মেমোরি থেকে স্থায়ীভাবে মুছে যায়'
        },
        {
          en: 'Setting max_tokens turns off internet bandwidth billing',
          bn: 'max_tokens নির্ধারণ করলে ইন্টারনেট ব্যান্ডউইথ বিলিং বন্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequential generation consumes expensive GPU memory bandwidth for every single token emitted.',
        bn: 'একের পর এক টোকেন তৈরির কারণে প্রতিটি পদক্ষেপে ব্যয়বহুল জিপিইউ ব্যান্ডউইথ প্রয়োজন হয়।'
      },
      explanation: {
        en: 'Output generation requires autoregressive decoding loops; suppressing verbose fluff slashes billing directly.',
        bn: 'আউটপুট তৈরিতে ধাপে ধাপে কম্পিউটেশন লাগে; অপ্রয়োজনীয় অতিরিক্ত কথা কমালে সরাসরি বিল অনেকাংশে কমে যায়।'
      }
    },
    {
      id: 'prompt-caching-rules-ex2',
      kind: 'mcq',
      topic: 'prefix-caching-placement-rules',
      question: {
        en: 'Where must static instructions and documentation be placed in the prompt to benefit from Prefix Prompt Caching?',
        bn: 'প্রিফিক্স প্রম্পট ক্যাশিংয়ের সম্পূর্ণ সুবিধা পেতে অপরিবর্তনশীল নির্দেশ ও নথিপত্র প্রম্পটের কোথায় রাখা আবশ্যক?'
      },
      options: [
        {
          en: 'At the exact start of the message array, keeping the prefix identical across requests',
          bn: 'মেসেজ অ্যারের একেবারে শুরুতে, যাতে প্রতিটি অনুরোধে শুরুর অংশটি হুবহু একই থাকে'
        },
        {
          en: 'At the very end of the user message',
          bn: 'ব্যবহারকারীর মেসেজের একেবারে শেষ প্রান্তে'
        },
        {
          en: 'Randomly interspersed between user sentences',
          bn: 'ব্যবহারকারীর বাক্যের মাঝে মাঝে এলোমেলোভাবে'
        },
        {
          en: 'In an external zip archive sent via email',
          bn: 'ইমেইলে পাঠানো একটি বাইরের জিপ ফাইলের ভেতরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prefix caching matches tokens strictly from left to right; any early modification invalidates the entire cache.',
        bn: 'প্রিফিক্স ক্যাশ বাম থেকে ডানে অক্ষর মেলায়; শুরুতে সামান্য পরিবর্তন করলেও পুরো ক্যাশ বাতিল হয়ে যায়।'
      },
      explanation: {
        en: 'Caches match from the first token forward; placing dynamic user inputs at the end preserves the long warm prefix.',
        bn: 'ক্যাশ প্রথম টোকেন থেকে শুরু করে খোঁজে; পরিবর্তনশীল ইনপুট শেষে রাখলে শুরুর দীর্ঘ অংশটি ক্যাশ থেকে দ্রুত লোড হয়।'
      }
    },
    {
      id: 'model-tier-routing-ex3',
      kind: 'mcq',
      topic: 'model-tier-classification-cost',
      question: {
        en: 'What architectural advantage is achieved by routing 80% of application traffic to lightweight compact models?',
        bn: 'অ্যাপ্লিকেশনের ৮০% ট্রাফিক সাশ্রয়ী ছোট মডেলে পাঠানোর মাধ্যমে কোন আর্কিটেকচারাল সুবিধা অর্জিত হয়?'
      },
      options: [
        {
          en: 'Dramatic reduction in monthly bills and faster response times for simple queries, preserving budget for hard tasks',
          bn: 'মাসিক বিলে বিশাল সাশ্রয় এবং সহজ কাজের দ্রুত সমাধান, যা জটিল কাজের জন্য বাজেট সংরক্ষণ করে'
        },
        {
          en: 'It completely eliminates the need for software testing',
          bn: 'এটি সফটওয়্যার টেস্টিংয়ের প্রয়োজনীয়তা পুরোপুরি বিলুপ্ত করে'
        },
        {
          en: 'It forces the client browser to use dark mode',
          bn: 'এটি ব্রাউজারকে ডার্ক মোড ব্যবহারে বাধ্য করে'
        },
        {
          en: 'It automatically translates code into Pascal',
          bn: 'এটি কোডকে স্বয়ংক্রিয়ভাবে প্যাসকেল ভাষায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Simple sentiment classification does not require a costly multi-hundred-billion parameter model.',
        bn: 'সহজ সেন্টিমেন্ট খোঁজার জন্য শত শত বিলিয়ন প্যারামিটারের দামী মডেল ব্যবহারের কোনো যৌক্তিকতা নেই।'
      },
      explanation: {
        en: 'Tiered routing matches task complexity to model capacity, maximizing economic and computational efficiency.',
        bn: 'টিয়ার্ড রাউটিং কাজের জটিলতা অনুযায়ী উপযুক্ত মডেল বাছাই করে আর্থিক ও কারিগরি দক্ষতা সর্বোচ্চ করে।'
      }
    },
    {
      id: 'budget-alarm-thresholds-ex4',
      kind: 'mcq',
      topic: 'budget-alarm-monitoring-thresholds',
      question: {
        en: 'At what standard consumption thresholds should automated cloud billing alarms notify engineering teams?',
        bn: 'স্বাভাবিক খরচের কোন আদর্শ সীমায় স্বয়ংক্রিয় ক্লাউড বিলিং অ্যালার্মের মাধ্যমে ইঞ্জিনিয়ারদের সতর্ক করা উচিত?'
      },
      options: [
        { en: '50%, 80%, and 100% of the allocated monthly budget ceiling', bn: 'বরাদ্দকৃত মাসিক বাজেটের ৫০%, ৮০% এবং ১০০% সীমায়' },
        { en: '1%, 2%, and 3% only', bn: 'কেবল ১%, ২% এবং ৩% সীমায়' },
        { en: 'After the bill has exceeded 1000000 dollars', bn: 'বিল ১০০০০০০ ডলার অতিক্রম করার পর' },
        { en: 'Only when the server hardware catches fire', bn: 'কেবল যখন সার্ভার হার্ডওয়্যারে আগুন ধরে যায়' }
      ],
      answer: 0,
      hint: {
        en: 'Early warnings at halfway and four-fifths allow teams to investigate spikes before services are shut down.',
        bn: 'অর্ধেক ও চার-পঞ্চমাংশ খরচে প্রাথমিক সতর্কবার্তা পেলে সেবা বন্ধ হওয়ার আগেই সমস্যা শনাক্ত করা যায়।'
      },
      explanation: {
        en: 'Staged alerts at 50% and 80% give teams time to address traffic anomalies before hitting the hard 100% cutoff.',
        bn: '৫০% এবং ৮০% স্তরে সতর্কবার্তা পেলে প্রকৌশলীরা মূল ১০০% সীমায় ঠেকে সেবা বন্ধ হওয়ার আগেই ব্যবস্থা নিতে পারেন।'
      }
    }
  ],
  quiz: {
    id: 'quiz-cost-budgets',
    title: {
      en: 'Cost Optimization and Prompt Caching Quiz',
      bn: 'ব্যয় অপ্টিমাইজেশন এবং প্রম্পট ক্যাশিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-cache-eviction-ttl',
        kind: 'mcq',
        topic: 'prompt-cache-time-to-live',
        question: {
          en: 'How long do provider GPU clusters typically preserve a warm prompt prefix in KV cache memory before evicting it?',
          bn: 'প্রোভাইডারের জিপিইউ ক্লাস্টার সাধারণত কতক্ষণ একটি প্রম্পট প্রিফিক্সকে ক্যাশ মেমোরিতে সংরক্ষণ করে রাখে?'
        },
        options: [
          {
            en: 'Usually between 5 to 10 minutes of inactivity, resetting the timer on every subsequent cache hit',
            bn: 'সাধারণত ৫ থেকে ১০ মিনিট নিষ্ক্রিয় থাকার পর এটি মুছে যায়, তবে প্রতিটি নতুন অনুরোধে সময় পুনরায় বৃদ্ধি পায়'
          },
          {
            en: 'Permanently for 100 years without eviction',
            bn: 'কোনো বিরতি ছাড়া টানা ১০০ বছর স্থায়ীভাবে সংরক্ষিত থাকে'
          },
          {
            en: 'Exactly 2 milliseconds before automatic deletion',
            bn: 'ঠিক ২ মিলিসেকেন্ড পর স্বয়ংক্রিয়ভাবে মুছে ফেলা হয়'
          },
          {
            en: 'Only while the user holds down the computer spacebar',
            bn: 'কেবল যতক্ষণ ব্যবহারকারী কীবোর্ডের স্পেসবার চেপে ধরে থাকেন'
          }
        ],
        answer: 0,
        hint: {
          en: 'VRAM is scarce; inactive KV states are evicted after a short time-to-live window.',
          bn: 'জিপিইউ মেমোরি সীমিত; তাই অল্প সময় অব্যবহৃত থাকলে পুরোনো ক্যাশ পরিষ্কার করে নতুনদের জায়গা দেওয়া হয়।'
        },
        explanation: {
          en: 'Providers maintain warm caches for 5 to 10 minutes; recurring traffic keeps the prefix warm continuously.',
          bn: 'নিয়মিত ট্রাফিক থাকলে ৫ থেকে ১০ মিনিটের টাইম-টু-লাইভ প্রতিবার নবায়ন হয়ে ক্যাশ সচল থাকে।'
        }
      },
      {
        id: 'quiz-cost-leak-debugging',
        kind: 'mcq',
        topic: 'cost-spike-root-cause-analysis',
        question: {
          en: 'If an AI application monthly invoice suddenly triples while user request volume remains completely flat, what is the most probable cause?',
          bn: 'ব্যবহারকারীর অনুরোধের সংখ্যা সমান থাকা সত্ত্বেও যদি এআই অ্যাপ্লিকেশনের মাসিক বিল হঠাৎ তিনগুণ হয়ে যায়, তবে সম্ভাব্য কারণ কী?'
        },
        options: [
          {
            en: 'A prompt update removed output length caps, causing the model to generate excessively verbose responses charged at high output rates',
            bn: 'প্রম্পট আপডেটের সময় আউটপুট সীমা তুলে নেওয়ায় মডেল অতিরিক্ত দীর্ঘ উত্তর দেওয়া শুরু করেছে যা বেশি খরচে বিল হয়েছে'
          },
          {
            en: 'The internet provider started charging for computer screen pixels',
            bn: 'ইন্টারনেট প্রোভাইডার কম্পিউটারের স্ক্রিনের পিক্সেলের জন্য টাকা কাটা শুরু করেছে'
          },
          {
            en: 'The database server started deleting random tables',
            bn: 'ডেটাবেস সার্ভার ইচ্ছামতো টেবিল মোছা শুরু করেছে'
          },
          {
            en: 'The API provider doubled the cost of electricity in Europe',
            bn: 'এপিআই প্রোভাইডার ইউরোপের বিদ্যুতের দাম দ্বিগুণ করে দিয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Remember that output tokens cost 4 times more than input tokens.',
          bn: 'মনে রাখবেন আউটপুট টোকেনের খরচ ইনপুটের চেয়ে প্রায় ৪ গুণ বেশি।'
        },
        explanation: {
          en: 'Uncapped output generations dominate costs; longer responses multiply billing rapidly even on flat traffic.',
          bn: 'আউটপুট নিয়ন্ত্রণ না থাকলে মডেলের দীর্ঘ উত্তর অল্প অনুরোধেই বিশাল বিল তৈরি করতে পারে।'
        }
      },
      {
        id: 'quiz-system-prompt-dynamic-danger',
        kind: 'mcq',
        topic: 'dynamic-system-prompt-cache-invalidation',
        question: {
          en: 'Why should developers NEVER inject dynamic timestamps (such as the current millisecond) into the System Prompt?',
          bn: 'ডেভেলপারদের কেন সিস্টেম প্রম্পটের ভেতরে পরিবর্তনশীল টাইমস্ট্যাম্প (যেমন বর্তমান মিলিসেকেন্ড) দেওয়া সম্পূর্ণ পরিহার করা উচিত?'
        },
        options: [
          {
            en: 'It changes the initial prefix tokens on every single request, completely breaking Prefix Prompt Caching and forcing 100% cold cache billing',
            bn: 'এটি প্রতিটি অনুরোধের শুরুর টোকেন বদলে দেয়, ফলে প্রম্পট ক্যাশিং সম্পূর্ণ নষ্ট হয়ে যায় এবং প্রতিবার ১০০% নতুন খরচ হয়'
          },
          {
            en: 'It causes the server clock to physically stop ticking',
            bn: 'এটি সার্ভারের ঘড়ির কাঁটা শারীরিকভাবে বন্ধ করে দেয়'
          },
          {
            en: 'It scrambles the user home Wi-Fi network password',
            bn: 'এটি ব্যবহারকারীর বাড়ির ওয়াই-ফাই পাসওয়ার্ড বদলে দেয়'
          },
          {
            en: 'Timestamps are not supported by the JSON protocol',
            bn: 'JSON প্রোটোকলে টাইমস্ট্যাম্পের কোনো সমর্থন নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prefix caches require exact byte-for-byte token matches from the beginning of the prompt.',
          bn: 'প্রিফিক্স ক্যাশের জন্য শুরুর অক্ষরগুলো হুবহু একই থাকা বাধ্যতামূলক।'
        },
        explanation: {
          en: 'Dynamic timestamps invalidate the prefix cache from token 0, destroying cache hit rates entirely.',
          bn: 'শুরুতে সময় বদলে গেলে ক্যাশ সিস্টেম মনে করে এটি নতুন প্রম্পট, ফলে কোনো সাশ্রয় পাওয়া যায় না।'
        }
      },
      {
        id: 'quiz-rate-limit-vs-budget',
        kind: 'mcq',
        topic: 'rate-limit-vs-financial-cap',
        question: {
          en: 'What is the operational distinction between an upstream Rate Limit (RPM/TPM) and a client Hard Budget Ceiling?',
          bn: 'সার্ভারের রেট লিমিট (RPM/TPM) এবং ক্লায়েন্টের নিজস্ব বাজেট সীমার মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'Rate limits protect upstream provider hardware concurrency, whereas budget ceilings protect the client organization from runaway financial spend',
            bn: 'রেট লিমিট প্রোভাইডারের সার্ভারকে অতিরিক্ত ট্রাফিকের চাপ থেকে বাঁচায়, আর বাজেট সীমা ক্লায়েন্টকে অনাকাঙ্ক্ষিত অতিরিক্ত আর্থিক ব্যয় থেকে রক্ষা করে'
          },
          {
            en: 'Rate limits are measured in gigabytes while budgets are measured in centimeters',
            bn: 'রেট লিমিট গিগাবাইটে মাপা হয় আর বাজেট সেন্টিমিটারে মাপা হয়'
          },
          {
            en: 'They are two completely identical mechanisms with identical HTTP error codes',
            bn: 'তারা দুটি সম্পূর্ণ অভিন্ন ব্যবস্থা যার HTTP এরর কোড এক'
          },
          {
            en: 'Budget ceilings only apply to free trial accounts',
            bn: 'বাজেট সীমা কেবল ফ্রি ট্রায়াল অ্যাকাউন্টের ক্ষেত্রে প্রযোজ্য হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'One controls traffic velocity; the other controls cumulative financial liability.',
          bn: 'একটি অনুরোধের গতি নিয়ন্ত্রণ করে; অন্যটি মোট আর্থিক ব্যয়ের সীমা বেঁধে দেয়।'
        },
        explanation: {
          en: 'Rate limits pace instantaneous throughput; budget ceilings enforce fiscal governance across billing cycles.',
          bn: 'রেট লিমিট মুহূর্তের গতি নিয়ন্ত্রণ করে আর বাজেট সীমা পুরো মাসের আর্থিক ব্যয়কে নিরাপদ সীমার মধ্যে রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'tools-function',
    title: {
      en: 'Function Calling & Tool Use Architecture',
      bn: 'ফাংশন কলিং এবং টুল ব্যবহারের আর্কিটেকচার'
    }
  }
};
