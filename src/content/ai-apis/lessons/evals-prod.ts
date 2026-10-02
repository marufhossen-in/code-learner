import type { Lesson } from '../../../lib/types';

export const EvalsProdLesson: Lesson = {
  slug: 'evals-prod',
  tech: 'ai-apis',
  title: {
    en: 'Production LLM Evaluation, Guardrails & Quality Metrics',
    bn: 'প্রোডাকশন এলএলএম মূল্যায়ন, গার্ডরেল এবং গুণমান মেট্রিক্স'
  },
  summary: {
    en: 'Establish rigorous AI quality engineering with a golden dataset of 100 test cases. Apply 3-layer evaluation pipelines covering schemas and semantic similarity, run LLM-as-a-Judge scoring on a 1 to 5 scale, and deploy safety guardrails.',
    bn: '১০০টি টেস্ট কেসের গোল্ডেন ডেটাসেট তৈরি করে কঠোর এআই মাননিয়ন্ত্রণ ব্যবস্থা গড়ে তুলুন। স্কিমা ও শব্দার্থিক মিল নিয়ে গঠিত ৩-স্তরের মূল্যায়ন পাইপলাইন প্রয়োগ, ১ থেকে ৫ স্কেলে বিচারক মডেলের স্কোরিং এবং নিরাপত্তা গার্ডরেল স্থাপন করুন।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'beyond-vibe-checks-heading',
      text: {
        en: 'The Fallacy of Vibe Checks: Why Production Demands Golden Datasets',
        bn: 'অনুভূতিভিত্তিক পরীক্ষার সীমাবদ্ধতা: গোল্ডেন ডেটাসেটের প্রয়োজনীয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In prototype stages, engineers often rely on "vibe checks" — manually typing 5 test queries into an API playground and approving changes based on visual impression. In mission-critical production systems handling 1000 customer transactions, this casual testing leads to silent regressions. Altering a system prompt to fix 1 edge case frequently breaks 12 previously working flows. Production AI engineering mandates a version-controlled golden benchmark suite of at least 100 curated input-output pairs evaluated before every git deployment.',
        bn: 'প্রোটোটাইপ তৈরির সময় ডেভেলপাররা সাধারণত "অনুভূতিভিত্তিক পরীক্ষায়" ভরসা করেন — অর্থাৎ প্লেগ্রাউন্ডে ৫টি প্রশ্ন টাইপ করে চোখের দেখায় ভালো লাগলে কোড অনুমোদন করে দেন। ১০০০ গ্রাহকের লেনদেন সম্পন্ন করা জটিল সিস্টেমে এমন অনানুষ্ঠানিক পরীক্ষা বড় ধরনের বিপর্যয় ডেকে আনে। একটি সিস্টেম প্রম্পট সামান্য পরিবর্তন করে ১টি বিশেষ সমস্যা ঠিক করতে গিয়ে দেখা যায় আগের ১২টি কাজ নষ্ট হয়ে গেছে। তাই প্রোডাকশন এআই ব্যবস্থায় প্রতিটি ডিপ্লয়মেন্টের পূর্বে অন্তত ১০০টি নির্ধারিত ইনপুট-আউটপুট জোড়া সংবলিত গোল্ডেন ডেটাসেটে স্বয়ংক্রিয় পরীক্ষা চালানো বাধ্যতামূলক।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 3-layer hierarchical evaluation pipeline from deterministic checks to LLM judges.',
        bn: 'চিত্র ১: সুনির্দিষ্ট নিয়ম থেকে শুরু করে বিচারক মডেল পর্যন্ত ৩-স্তরের ধারাবাহিক মূল্যায়ন পাইপলাইন।'
      },
      svg: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">THE 3-LAYER PRODUCTION EVALUATION PIPELINE</text>
  
  <!-- Layer 1 -->
  <g transform="translate(30, 60)">
    <rect width="240" height="250" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="36" rx="8" fill="#0284c7" />
    <text x="120" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Layer 1: Heuristic &amp; Deterministic</text>
    
    <text x="15" y="65" fill="#38bdf8" font-size="10" font-family="monospace">Speed: Instant (&lt; 1ms)</text>
    <rect x="10" y="75" width="220" height="155" rx="5" fill="#0f172a" />
    <text x="18" y="98" fill="#4ade80" font-size="10" font-family="monospace">✓ Valid JSON Syntax</text>
    <text x="18" y="123" fill="#4ade80" font-size="10" font-family="monospace">✓ Required Schema Keys</text>
    <text x="18" y="148" fill="#4ade80" font-size="10" font-family="monospace">✓ Regex Safety Guardrail</text>
    <text x="18" y="173" fill="#4ade80" font-size="10" font-family="monospace">✓ Latency &lt; 1500ms</text>
    <text x="18" y="198" fill="#4ade80" font-size="10" font-family="monospace">✓ Zero PII leaks</text>
    <text x="15" y="248" fill="#94a3b8" font-size="9" font-family="sans-serif">Filters 90% of basic flaws</text>
  </g>

  <!-- Layer 2 -->
  <g transform="translate(300, 60)">
    <rect width="240" height="250" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="240" height="36" rx="8" fill="#7e22ce" />
    <text x="120" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Layer 2: Semantic Similarity</text>
    
    <text x="15" y="65" fill="#c084fc" font-size="10" font-family="monospace">Speed: Fast (~50ms)</text>
    <rect x="10" y="75" width="220" height="155" rx="5" fill="#0f172a" />
    <text x="18" y="98" fill="#cbd5e1" font-size="10" font-family="sans-serif">Vector Embeddings:</text>
    <text x="18" y="123" fill="#38bdf8" font-size="10" font-family="monospace">CosineSim(pred, truth)</text>
    <text x="18" y="153" fill="#facc15" font-size="10" font-family="monospace">Target Score: &gt;= 0.85</text>
    <text x="18" y="183" fill="#94a3b8" font-size="9" font-family="sans-serif">Allows varied phrasing</text>
    <text x="18" y="203" fill="#94a3b8" font-size="9" font-family="sans-serif">without false failures</text>
    <text x="15" y="248" fill="#94a3b8" font-size="9" font-family="sans-serif">Catches topical drift</text>
  </g>

  <!-- Layer 3 -->
  <g transform="translate(570, 60)">
    <rect width="240" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="240" height="36" rx="8" fill="#059669" />
    <text x="120" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Layer 3: LLM-as-a-Judge</text>
    
    <text x="15" y="65" fill="#34d399" font-size="10" font-family="monospace">Speed: Moderate (~800ms)</text>
    <rect x="10" y="75" width="220" height="155" rx="5" fill="#0f172a" />
    <text x="18" y="98" fill="#cbd5e1" font-size="10" font-family="sans-serif">Rubric-Guided Scoring:</text>
    <text x="18" y="123" fill="#4ade80" font-size="10" font-family="monospace">1. Factuality (1 to 5)</text>
    <text x="18" y="148" fill="#4ade80" font-size="10" font-family="monospace">2. Tone Alignment</text>
    <text x="18" y="173" fill="#4ade80" font-size="10" font-family="monospace">3. Context Faithfulness</text>
    <text x="18" y="203" fill="#facc15" font-size="9" font-family="monospace">Requires JSON reasoning</text>
    <text x="15" y="248" fill="#94a3b8" font-size="9" font-family="sans-serif">Gold standard alignment</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'llm-judge-rubric-heading',
      text: {
        en: 'Automated Scoring with LLM-as-a-Judge and Real-Time Guardrails',
        bn: 'বিচারক মডেলের স্বয়ংক্রিয় স্কোরিং এবং রিয়েল-টাইম গার্ডরেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'LLM-as-a-Judge employs a frontier reasoning model to evaluate candidate outputs against a strict scoring rubric, assigning numeric marks on a 1 to 5 scale accompanied by explicit explanatory rationale. Alongside offline evaluations, production guardrails inspect live streaming tokens in real time, immediately suppressing hallucinated sensitive records, toxic content, or unauthorized PII leaks before text reaches client viewports.',
        bn: 'বিচারক হিসেবে শক্তিশালী মডেল ব্যবহার করে প্রতিটি আউটপুটকে সুনির্দিষ্ট নিয়মের ভিত্তিতে ১ থেকে ৫ স্কেলে মূল্যায়ন করা হয় এবং সাথে যৌক্তিক ব্যাখ্যা যুক্ত করা হয়। অফলাইন টেস্টের পাশাপাশি লাইভ সিস্টেমে রিয়েল-টাইম গার্ডরেল বসানো হয়, যা ক্ষতিকর মন্তব্য, ব্যক্তিগত গোপন তথ্য বা ভুল ডেটা ব্যবহারকারীর স্ক্রিনে প্রদর্শিত হওয়ার আগেই আটকে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript automated evaluation engine verifying deterministic schema constraints across 3 test cases.',
        bn: '৩টি টেস্ট কেসে সুনির্দিষ্ট স্কিমা শর্তাবলি যাচাই করার স্বয়ংক্রিয় মূল্যায়ন TypeScript কোড।'
      },
      code: `interface TestCase {
  id: string;
  inputPrompt: string;
  expectedKeys: string[];
  bannedWords: string[];
}

interface TestResult {
  testId: string;
  passed: boolean;
  score: number; // 1 to 5 scale
  violations: string[];
}

export function evaluateCompletion(
  outputStr: string,
  testCase: TestCase
): TestResult {
  const violations: string[] = [];

  // Check 1: Valid JSON parsing
  let parsed: any;
  try {
    parsed = JSON.parse(outputStr);
  } catch {
    violations.push('Output is not valid JSON format');
    return { testId: testCase.id, passed: false, score: 1, violations };
  }

  // Check 2: Schema key completeness
  for (const key of testCase.expectedKeys) {
    if (!(key in parsed)) {
      violations.push('Missing required key: ' + key);
    }
  }

  // Check 3: Guardrail check for banned tokens
  for (const word of testCase.bannedWords) {
    if (outputStr.toLowerCase().includes(word.toLowerCase())) {
      violations.push('Violates guardrail: contains banned term "' + word + '"');
    }
  }

  const passed = violations.length === 0;
  return {
    testId: testCase.id,
    passed,
    score: passed ? 5 : 2,
    violations
  };
}

// Running evaluation suite across 3 representative cases
const testSuite: TestCase[] = [
  { id: 'eval-01', inputPrompt: 'Generate user profile', expectedKeys: ['userId', 'role'], bannedWords: ['password'] },
  { id: 'eval-02', inputPrompt: 'Generate order invoice', expectedKeys: ['orderId', 'amount'], bannedWords: ['cvv'] },
  { id: 'eval-03', inputPrompt: 'Generate health report', expectedKeys: ['patientId', 'status'], bannedWords: ['ssn'] }
];

const mockOutputs = [
  '{"userId":"u100","role":"admin"}',
  '{"orderId":"ord-500","amount":49.99}',
  '{"patientId":"pat-99","status":"stable"}'
];

let totalScore = 0;
let passedCount = 0;

for (let i = 0; i < testSuite.length; i++) {
  const result = evaluateCompletion(mockOutputs[i], testSuite[i]);
  totalScore += result.score;
  if (result.passed) passedCount++;
}

console.log('Total Cases Evaluated:', testSuite.length);             // 3
console.log('Passed Cases Count:', passedCount);                     // 3
console.log('Success Rate Percentage:', (passedCount / testSuite.length) * 100); // 100
console.log('Average Rubric Score (1 to 5):', (totalScore / testSuite.length).toFixed(1)); // 5.0`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Golden Dataset',
          def: {
            en: 'Curated, version-controlled repository of representative test prompts and reference truth answers used to measure regressions.',
            bn: 'প্রতিনিধিত্বমূলক প্রম্পট এবং আদর্শ উত্তরের সংরক্ষিত সংগ্রহ যা কোড পরিবর্তনের ফলে সৃষ্টি হওয়া ভুল শনাক্ত করতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'LLM-as-a-Judge',
          def: {
            en: 'Evaluation methodology where a high-capability frontier model scores candidate responses against structured rubrics.',
            bn: 'মূল্যায়ন পদ্ধতি যেখানে একটি শক্তিশালী এআই মডেল নির্দিষ্ট নিয়মের ভিত্তিতে অন্যান্য মডেলের উত্তরের মান নির্ধারণ করে।'
          }
        },
        {
          term: 'Exact Match Score',
          def: {
            en: 'Binary evaluation metric that scores 1 only if generated output matches the expected canonical string identically.',
            bn: 'বাইনারি মূল্যায়ন মেট্রিক যা তৈরি করা উত্তর আদর্শ লেখার সাথে অক্ষরে অক্ষরে হুবহু মিললেই কেবল ১ স্কোর দেয়।'
          }
        },
        {
          term: 'Guardrails',
          def: {
            en: 'Synchronous validation filters that intercept and sanitize user prompts and model completions to enforce safety and privacy.',
            bn: 'নিরাপত্তা ফিল্টার যা ইনপুট ও আউটপুট পরীক্ষা করে গোপন তথ্য ফাঁস বা অনাকাঙ্ক্ষিত লেখা তাৎক্ষণিকভাবে প্রতিরোধ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vibe-checks-regression-risk-ex1',
      kind: 'mcq',
      topic: 'regression-testing-necessity',
      question: {
        en: 'Why do subjective "vibe checks" fail to protect production applications from catastrophic regressions?',
        bn: 'ব্যক্তিনির্ভর "অনুভূতিভিত্তিক পরীক্ষা" কেন প্রোডাকশন অ্যাপ্লিকেশনকে অনাকাঙ্ক্ষিত অবনতি থেকে রক্ষা করতে পারে না?'
      },
      options: [
        {
          en: 'Fixing 1 prompt edge case often silently breaks 12 previously working scenarios, which manual spot-testing cannot detect',
          bn: 'একটি বিশেষ সমস্যা সমাধান করতে গিয়ে পূর্বে ঠিক থাকা ১২টি কাজ নষ্ট হয়ে যেতে পারে, যা খালি চোখে ধরা পড়ে না'
        },
        {
          en: 'Because computer monitors cannot display green checkmarks',
          bn: 'কারণ কম্পিউটারের মনিটর সবুজ টিকচিহ্ন দেখাতে পারে না'
        },
        {
          en: 'Vibe checks consume 50 times more electricity than automated tests',
          bn: 'অনুভূতিভিত্তিক পরীক্ষায় স্বয়ংক্রিয় পরীক্ষার চেয়ে ৫০ গুণ বেশি বিদ্যুৎ খরচ হয়'
        },
        {
          en: 'Because models only respond in binary machine code on weekends',
          bn: 'কারণ ছুটির দিনে মডেল কেবল বাইনারি মেশিন কোডে উত্তর দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'System prompts have non-linear side effects across diverse user queries.',
        bn: 'প্রম্পটের সামান্য পরিবর্তন অন্যান্য বহু প্রশ্নের উত্তরে অনাকাঙ্ক্ষিত প্রভাব ফেলতে পারে।'
      },
      explanation: {
        en: 'Automated test suites catch unintended side-effects across dozens of scenarios simultaneously before deployment.',
        bn: 'স্বয়ংক্রিয় টেস্ট স্যুট ডিপ্লয় করার আগেই একসাথে ডজন ডজন দৃশ্যপটে পরিবর্তন পরীক্ষা করে ভুল শনাক্ত করে।'
      }
    },
    {
      id: 'cosine-semantic-eval-ex2',
      kind: 'mcq',
      topic: 'semantic-similarity-evaluation',
      question: {
        en: 'Why is Semantic Similarity (Embedding Cosine Similarity) superior to Exact Match (EM) for evaluating freeform answers?',
        bn: 'মুক্ত উত্তরের ক্ষেত্রে কেন এক্স্যাক্ট ম্যাচ (EM)-এর চেয়ে শব্দার্থিক মিল (Semantic Similarity) পরিমাপ করা বেশি কার্যকর?'
      },
      options: [
        {
          en: 'It recognizes that two sentences with different word phrasing can carry the exact same factual meaning without failing the test',
          bn: 'এটি বুঝতে পারে যে ভিন্ন শব্দ দিয়ে গঠিত হলেও দুটি বাক্যের মূল অর্থ এক হতে পারে, ফলে সঠিক উত্তর অযথা বাতিল হয় না'
        },
        {
          en: 'It forces the model to respond in Spanish',
          bn: 'এটি মডেলকে স্প্যানিশ ভাষায় উত্তর দিতে বাধ্য করে'
        },
        {
          en: 'It deletes all punctuation marks automatically from the internet',
          bn: 'এটি ইন্টারনেট থেকে সমস্ত বিরামচিহ্ন স্বয়ংক্রিয়ভাবে মুছে দেয়'
        },
        {
          en: 'It accelerates browser rendering engines by 200 percent',
          bn: 'এটি ব্রাউজারের গতি ২০০ শতাংশ বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Language models rarely generate identical byte-for-byte strings twice.',
        bn: 'এআই মডেল খুব কম সময়ই অক্ষরে অক্ষরে একই রকম দীর্ঘ বাক্য দুবার তৈরি করে।'
      },
      explanation: {
        en: 'Cosine similarity measures conceptual distance in vector space, tolerating benign syntactic variations.',
        bn: 'ভেক্টর স্পেসে অর্থ পরিমাপ করার কারণে শব্দের সামান্য তারতম্য থাকলেও সঠিক অর্থ চিহ্নিত করা যায়।'
      }
    },
    {
      id: 'llm-judge-rubric-necessity-ex3',
      kind: 'mcq',
      topic: 'structured-rubric-judging',
      question: {
        en: 'What is required to make an LLM-as-a-Judge evaluation reliable, objective, and reproducible?',
        bn: 'বিচারক মডেলের (LLM-as-a-Judge) মূল্যায়নকে নির্ভরযোগ্য, নিরপেক্ষ ও পুনরুৎপাদনযোগ্য করতে কী প্রয়োজন?'
      },
      options: [
        {
          en: 'A highly specific multi-criteria scoring rubric on a 1 to 5 scale requiring chain-of-thought rationale before the final mark',
          bn: '১ থেকে ৫ স্কেলে সুনির্দিষ্ট বহু-মানদণ্ডীয় রুব্রিক এবং চূড়ান্ত নম্বরের আগে স্পষ্ট যৌক্তিক ব্যাখ্যা প্রদানের নিয়ম'
        },
        {
          en: 'Running the judge model at maximum temperature 2.0',
          bn: 'বিচারক মডেলটিকে সর্বোচ্চ টেম্পারেচার ২.০ তে চালানো'
        },
        {
          en: 'Letting the model randomly select numbers from a hat',
          bn: 'মডেলকে এলোমেলোভাবে যেকোনো নম্বর পছন্দ করতে দেওয়া'
        },
        {
          en: 'Restarting the database server before every grade',
          bn: 'প্রতিটি গ্রেড দেওয়ার আগে ডেটাবেস সার্ভার রিস্টার্ট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clear rubrics reduce evaluator variance and enforce consistent grading criteria.',
        bn: 'সুনির্দিষ্ট নিয়ম বিচারকের ব্যক্তিগত পছন্দের বিভ্রান্তি কমিয়ে সমজাতীয় ফলাফল নিশ্চিত করে।'
      },
      explanation: {
        en: 'Explicit rubrics combined with low temperature and step-by-step reasoning provide stable and defensible evaluation scores.',
        bn: 'স্পষ্ট রুব্রিক এবং কম টেম্পারেচার ব্যবহার করলে বিচারক মডেল সবসময় যৌক্তিক ও সুষম মূল্যায়ন উপহার দেয়।'
      }
    },
    {
      id: 'realtime-guardrails-action-ex4',
      kind: 'mcq',
      topic: 'realtime-guardrail-remediation',
      question: {
        en: 'What should a production guardrail do if an outgoing model completion contains an exposed Credit Card number or Social Security number?',
        bn: 'তৈরি করা উত্তরের ভেতরে ক্রেডিট কার্ড বা জাতীয় পরিচয়পত্রের নম্বর ফাঁস হতে দেখলে প্রোডাকশন গার্ডরেলের কী পদক্ষেপ নেওয়া উচিত?'
      },
      options: [
        {
          en: 'Immediately mask or redact the sensitive tokens and replace the output with a secure fallback notification',
          bn: 'তাৎক্ষণিকভাবে সংবেদনশীল অংশটি ঢেকে বা মুছে ফেলে একটি নিরাপদ সতর্কবার্তা দিয়ে টেক্সট প্রতিস্থাপন করা'
        },
        {
          en: 'Email the unredacted credit card number to all registered users',
          bn: 'সমস্ত নিবন্ধিত ব্যবহারকারীকে আনরেডাক্টেড কার্ড নম্বর ইমেইল করে দেওয়া'
        },
        {
          en: 'Log the credit card into public Twitter feeds',
          bn: 'টুইটারে কার্ড নম্বরটি সবার দেখার জন্য পোস্ট করা'
        },
        {
          en: 'Increase the font size of the sensitive numbers to 48px',
          bn: 'সংবেদনশীল নম্বরের ফন্ট সাইজ ৪৮ পিক্সেলে বাড়িয়ে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Data leakage must be stopped before network packets leave your infrastructure.',
        bn: 'সার্ভার থেকে ব্যবহারকারীর স্ক্রিনে যাওয়ার আগেই তথ্য ফাঁসের ঝুঁকি বন্ধ করতে হবে।'
      },
      explanation: {
        en: 'Guardrails act as a real-time firewall, sanitizing PII leaks and safeguarding enterprise compliance.',
        bn: 'গার্ডরেল একটি রিয়েল-টাইম ফায়ারওয়াল হিসেবে কাজ করে গোপন তথ্য মুছে ফেলে প্রাতিষ্ঠানিক নীতি অক্ষুণ্ণ রাখে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-evals-prod',
    title: {
      en: 'Production LLM Evaluation and Guardrails Quiz',
      bn: 'প্রোডাকশন এলএলএম মূল্যায়ন এবং গার্ডরেল কুইজ'
    },
    questions: [
      {
        id: 'quiz-positional-bias-judge',
        kind: 'mcq',
        topic: 'evaluator-positional-bias',
        question: {
          en: 'What cognitive bias frequently affects LLM judges during pairwise comparisons, and how is it mitigated?',
          bn: 'দুটি উত্তরের মধ্যে তুলনার সময় বিচারক মডেলগুলোতে প্রায়ই কোন মানসিক পক্ষপাত দেখা যায় এবং কীভাবে তা রোধ করা হয়?'
        },
        options: [
          {
            en: 'Position bias (favoring whichever answer is presented first); mitigated by running comparisons twice with swapped positions',
            bn: 'পজিশন বায়াস (যে উত্তরটি শুরুতে থাকে সেটিকে বেশি নম্বর দেওয়া); উত্তরের অবস্থান অদলবদল করে দুবার পরীক্ষা চালিয়ে এটি দূর করা হয়'
          },
          {
            en: 'Color bias (favoring blue text over red text)',
            bn: 'রঙের পক্ষপাত (লাল লেখার চেয়ে নীল লেখাকে বেশি পছন্দ করা)'
          },
          {
            en: 'Alphabet bias (favoring words that start with letter Z)',
            bn: 'বর্ণমালার পক্ষপাত (Z দিয়ে শুরু হওয়া শব্দকে পছন্দ করা)'
          },
          {
            en: 'Hardware bias (favoring Nvidia graphics cards over AMD)',
            bn: 'হার্ডওয়্যার পক্ষপাত (এএমডির চেয়ে এনভিডিয়ার কার্ড পছন্দ করা)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swap answer A and B order to eliminate order-dependent preferences.',
          bn: 'উত্তরের ক্রম পরিবর্তন করে দুবার মূল্যায়ন করলে শুরুর দিকের পক্ষপাতিত্ব কেটে যায়।'
        },
        explanation: {
          en: 'Swapping positions and averaging marks eliminates order bias in pairwise LLM evaluations.',
          bn: 'অবস্থান বদলে দুবার গড় মান বের করলে কোনো নির্দিষ্ট অবস্থানের প্রতি অন্ধ পক্ষপাত থাকে না।'
        }
      },
      {
        id: 'quiz-synthetic-data-bootstrapping',
        kind: 'mcq',
        topic: 'synthetic-eval-bootstrapping',
        question: {
          en: 'How can an engineering team bootstrap a 100-case golden benchmark dataset when zero user traffic currently exists?',
          bn: 'যখন কোনো লাইভ ব্যবহারকারী নেই, তখন কীভাবে প্রকৌশলী দল ১০০টি টেস্ট কেসের একটি গোল্ডেন ডেটাসেট তৈরি করতে পারে?'
        },
        options: [
          {
            en: 'Synthetically generate diverse edge-case scenarios using a frontier model and curate them with domain expert human review',
            bn: 'শক্তিশালী মডেল দিয়ে কৃত্রিমভাবে বিভিন্ন জটিল দৃশ্যপট তৈরি করা এবং অভিজ্ঞ মানুষের মাধ্যমে তা যাচাই ও নির্বাচন করা'
          },
          {
            en: 'Copy 100 random lines from a cooking recipe book',
            bn: 'রান্নার রেসিপি বই থেকে ১০০টি লাইন হুবহু কপি করে নেওয়া'
          },
          {
            en: 'Generate 100 empty blank text files',
            bn: '১০০টি সম্পূর্ণ খালি টেক্সট ফাইল তৈরি করা'
          },
          {
            en: 'Steal passwords from neighboring office Wi-Fi routers',
            bn: 'পাশের অফিসের ওয়াই-ফাই পাসওয়ার্ড চুরি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Combine synthetic data generation with human expert validation.',
          bn: 'কৃত্রিমভাবে তথ্য তৈরির পাশাপাশি অভিজ্ঞ বিশেষজ্ঞের তত্ত্বাবধান যুক্ত করুন।'
        },
        explanation: {
          en: 'Synthetic bootstrapping seed-funded by human subject matter experts establishes reliable initial test baselines.',
          bn: 'কৃত্রিম তথ্যের ওপর ভিত্তি করে মানুষের যাচাইকরণ প্রাথমিক টেস্ট বেঞ্চমার্ক দ্রুত প্রস্তুত করে তোলে।'
        }
      },
      {
        id: 'quiz-semantic-drift-monitoring',
        kind: 'mcq',
        topic: 'production-drift-monitoring',
        question: {
          en: 'Why must LLM evaluations continue running continuously in production post-deployment rather than only during CI/CD?',
          bn: 'ডিপ্লয়মেন্টের পর প্রোডাকশনে কেন সার্বক্ষণিকভাবে এআই মূল্যায়ন চালিয়ে যেতে হয়, কেবল CI/CD তেই সীমাবদ্ধ না রেখে?'
        },
        options: [
          {
            en: 'Real-world customer behavior drifts over time, and upstream model providers update weights without changing version tags',
            bn: 'বাস্তব ব্যবহারকারীর ভাষা ও চাহিদা সময়ের সাথে পরিবর্তিত হয় এবং প্রোভাইডাররা না জানিয়েও মডেলের ওজন আপডেট করতে পারে'
          },
          {
            en: 'Because internet cables stretch and change latency every month',
            bn: 'কারণ প্রতি মাসে ইন্টারনেটের তার প্রসারিত হয়ে গতি বদলে ফেলে'
          },
          {
            en: 'To prevent computer screens from turning yellow',
            bn: 'কম্পিউটার স্ক্রিন হলুদ হয়ে যাওয়া রোধ করার উদ্দেশ্যে'
          },
          {
            en: 'Continuous evaluation is required by United Nations treaties',
            bn: 'জাতিসংঘের আন্তর্জাতিক চুক্তি অনুযায়ী এটি বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'External models and user inputs are living dynamic targets.',
          bn: 'বাইরের প্রোভাইডারের মডেল এবং মানুষের প্রশ্নের ধরন সবসময় পরিবর্তনশীল।'
        },
        explanation: {
          en: 'Continuous monitoring detects silent upstream model behavioral shifts and shifting consumer query distributions.',
          bn: 'নিয়মিত নজরদারি থাকলে গোপনে মডেল পরিবর্তন হওয়া বা মানুষের ভিন্ন ধারার প্রশ্ন দ্রুত চিহ্নিত করা যায়।'
        }
      },
      {
        id: 'quiz-hallucination-detection-technique',
        kind: 'mcq',
        topic: 'hallucination-detection-rag',
        question: {
          en: 'In RAG architectures, how does "Context Faithfulness" evaluation detect hallucinations?',
          bn: 'RAG আর্কিটেকচারে "কনটেক্সট ফেইথফুলনেস" মূল্যায়ন কীভাবে হ্যালুসিনেশন বা মনগড়া উত্তর শনাক্ত করে?'
        },
        options: [
          {
            en: 'It verifies that every factual statement made in the response is directly supported by the retrieved context chunks',
            bn: 'এটি যাচাই করে যে উত্তরের প্রতিটি তথ্যবহুল দাবি সরবরাহকৃত নথিপত্রের অংশের সাথে সরাসরি সমর্থিত কিনা'
          },
          {
            en: 'It checks whether the output contains at least 500 words',
            bn: 'উত্তরে অন্তত ৫০০টি শব্দ আছে কিনা তা গুণে দেখা'
          },
          {
            en: 'It measures the physical speed of the hard drive rotation',
            bn: 'হার্ডড্রাইভের ঘোরার গতি মেপে দেখে'
          },
          {
            en: 'It converts the answer into Morse code',
            bn: 'উত্তরটিকে মোর্স কোডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Faithfulness verifies ground-truth alignment with the provided knowledge snippets.',
          bn: 'ফেইথফুলনেস নিশ্চিত করে যে উত্তরটি বাইরের কোনো কল্পনা নয় বরং দেওয়া তথ্যের ভিত্তিতেই হয়েছে।'
        },
        explanation: {
          en: 'Context faithfulness scores whether the model made unsupported claims beyond its retrieved reference text.',
          bn: 'এটি নিশ্চিত করে যে মডেল দেওয়া ডকুমেন্টের বাইরে গিয়ে কোনো মনগড়া তথ্য প্রচার করছে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'rate-limits',
    title: {
      en: 'Rate Limiting, Concurrency & Token Bucket Algorithms',
      bn: 'রেট লিমিটিং, কনকারেন্সি এবং টোকেন বাকেট অ্যালগরিদম'
    }
  }
};
