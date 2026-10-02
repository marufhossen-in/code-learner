import type { Lesson } from '../../../lib/types';

export const OptimizeEvalLesson: Lesson = {
  slug: 'optimize-eval',
  tech: 'prompt-engineering',
  title: {
    en: 'Prompt Optimization, Golden Datasets & Quantitative Evals',
    bn: 'প্রম্পট অপ্টিমাইজেশন, গোল্ডেন ডেটাসেট এবং পরিমাণগত মূল্যায়ন'
  },
  summary: {
    en: 'Shift from informal trial-and-error to systematic empirical engineering: assemble frozen golden evaluation datasets, implement LLM-as-a-Judge rubrics, run programmatic assertions, and prevent production regressions with automated CI/CD test harnesses.',
    bn: 'অনুমাননির্ভর পরীক্ষা-নিরীক্ষা থেকে নিয়মতান্ত্রিক বৈজ্ঞানিক ইঞ্জিনিয়ারিংয়ে উত্তরণ: সংরক্ষিত গোল্ডেন টেস্ট ডেটাসেট তৈরি, এলএলএম-অ্যাজ-আ-জাজ রুব্রিক্স বাস্তবায়ন, প্রোগ্রাম্যাটিক শর্ত যাচাই এবং স্বয়ংক্রিয় সিআই/সিডি টেস্টের মাধ্যমে প্রোডাকশন রিগ্রেশন প্রতিরোধ।'
  },
  minutes: 29,
  blocks: [
    {
      type: 'heading',
      id: 'empirical-eval-heading',
      text: {
        en: 'The "Vibe Check" Failure: Why Systematic Benchmarking is Mandatory',
        bn: 'অনুমাননির্ভর পরীক্ষার ব্যর্থতা: নিয়মতান্ত্রিক বেঞ্চমার্কিং কেন অপরিহার্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In amateur prompt design, developers modify instructions and test 2 or 3 subjective queries in an interactive playground. When the output looks pleasing, they deploy. This informal approach fails catastrophically in production because fixing one edge case frequently causes silent regressions across 20% of other queries. Professional prompt engineering treats prompts as software code: versioned, tested against frozen Golden Datasets of 50 or more diverse test cases, and scored with quantitative evaluation rubrics.',
        bn: 'অপেশাদার প্রম্পট ডিজাইনে ডেভেলপাররা নির্দেশনা কিছুটা পরিবর্তন করে প্লে-গ্রাউন্ডে ২ বা ৩টি মনগড়া প্রশ্ন দিয়ে যাচাই করেন। উত্তর দেখতে সুন্দর মনে হলেই তারা তা প্রোডাকশনে পাঠিয়ে দেন। এই অনানুষ্ঠানিক পদ্ধতি প্রোডাকশনে মারাত্মক ব্যর্থতার জন্ম দেয়, কারণ ১টি এজ-কেস ঠিক করতে গিয়ে অন্য প্রায় ২০% ক্ষেত্রে নীরবে ত্রুটি তৈরি হয়। পেশাদার প্রম্পট ইঞ্জিনিয়ারিংয়ে প্রম্পটকে সাধারণ সফটওয়্যার কোডের মতোই দেখা হয়: এটি ভার্সন নিয়ন্ত্রিত থাকে, ৫০ বা ততোধিক বৈচিত্র্যময় নমুনার গোল্ডেন ডেটাসেটে পরীক্ষিত হয় এবং পরিমাণগত রুব্রিক্স দ্বারা মূল্যায়িত হয়।'
      }
    },
    {
      type: 'visual',
      id: 'eval-harness-loop-svg',
      caption: {
        en: 'Figure 1: Automated prompt regression harness and tri-fold evaluation pipeline.',
        bn: 'চিত্র ১: স্বয়ংক্রিয় প্রম্পট রিগ্রেশন এবং ত্রি-মাত্রিক মূল্যায়ন পাইপলাইন।'
      },
      content: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">AUTOMATED PROMPT EVALUATION HARNESS</text>
  
  <!-- Step 1: Candidate Versions -->
  <g transform="translate(30, 60)">
    <rect width="210" height="250" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="210" height="36" rx="8" fill="#0284c7" />
    <text x="105" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Prompt Candidates 📝</text>
    <text x="14" y="65" fill="#38bdf8" font-size="11" font-family="monospace">Version Comparison:</text>
    <text x="14" y="90" fill="#cbd5e1" font-size="10" font-family="monospace">• Prompt v1.1 (Production)</text>
    <text x="14" y="115" fill="#cbd5e1" font-size="10" font-family="monospace">• Prompt v1.2 (Candidate)</text>
    <rect x="12" y="145" width="186" height="70" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="105" y="170" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Frozen Golden Dataset</text>
    <text x="105" y="190" fill="#facc15" font-size="10" font-family="monospace" text-anchor="middle">50 Curated Scenarios</text>
    <text x="105" y="205" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">edge cases + attacks</text>
  </g>

  <!-- Step 2: Tri-Fold Evaluation -->
  <g transform="translate(280, 60)">
    <rect width="250" height="250" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="250" height="36" rx="8" fill="#d97706" />
    <text x="125" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Tri-Fold Grader ⚖️</text>
    
    <rect x="12" y="50" width="226" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="20" y="70" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Gate 1: Programmatic</text>
    <text x="20" y="88" fill="#cbd5e1" font-size="9" font-family="monospace">JSON syntax & schema check</text>
    
    <rect x="12" y="110" width="226" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="20" y="130" fill="#f59e0b" font-size="10" font-family="sans-serif" font-weight="bold">Gate 2: Exact Match</text>
    <text x="20" y="148" fill="#cbd5e1" font-size="9" font-family="monospace">Target classification accuracy</text>
    
    <rect x="12" y="170" width="226" height="65" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="20" y="190" fill="#10b981" font-size="10" font-family="sans-serif" font-weight="bold">Gate 3: LLM-as-a-Judge</text>
    <text x="20" y="208" fill="#cbd5e1" font-size="9" font-family="monospace">Rubric score: 1 to 5 scale</text>
    <text x="20" y="224" fill="#94a3b8" font-size="9" font-family="monospace">tone, safety, completeness</text>
  </g>

  <!-- Step 3: CI/CD Gate -->
  <g transform="translate(570, 60)">
    <rect width="240" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="240" height="36" rx="8" fill="#059669" />
    <text x="120" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. CI/CD Release Decision 🚀</text>
    
    <rect x="15" y="55" width="210" height="60" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="25" y="78" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">v1.1: 84% pass rate</text>
    <text x="25" y="98" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">v1.2: 94% pass rate (+10%)</text>
    
    <rect x="15" y="130" width="210" height="90" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="152" fill="#38bdf8" font-size="10" font-family="monospace">Regression Rule:</text>
    <text x="25" y="170" fill="#e2e8f0" font-size="10" font-family="sans-serif">Zero broken golden cases</text>
    <text x="25" y="188" fill="#e2e8f0" font-size="10" font-family="sans-serif">Latency &lt; 800ms budget</text>
    <text x="25" y="206" fill="#4ade80" font-size="10" font-family="sans-serif">VERDICT: SHIP TO PROD ✅</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'automated-harness-heading',
      text: {
        en: 'Building an Automated Evaluation Harness in TypeScript',
        bn: 'TypeScript-এ স্বয়ংক্রিয় মূল্যায়ন কাঠামো তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A production evaluation harness executes a tri-fold grading process. First, programmatic assertions verify technical invariants: whether the payload parsed without syntax exceptions and returned within the 800ms latency budget. Second, deterministic criteria test exact string or enum tags. Third, an independent LLM-as-a-Judge inspects the nuance of reasoning using a calibrated 1 to 5 rubric score. If the candidate prompt boosts overall accuracy from 84% to 94% with zero regressions on existing goldens, it qualifies for release.',
        bn: 'একটি প্রোডাকশন মূল্যায়ন কাঠামো ত্রি-মাত্রিক প্রক্রিয়ায় পরীক্ষা চালায়। প্রথমত, প্রোগ্রাম্যাটিক শর্তগুলো কারিগরি নিয়ম যাচাই করে: আউটপুট কোনো ত্রুটি ছাড়া পার্স হয়েছে কিনা এবং ৮০০ মিলিসেকেন্ড লেটেন্সি সীমার মধ্যে সম্পন্ন হয়েছে কিনা। দ্বিতীয়ত, সুনির্দিষ্ট মানদণ্ড সঠিক ট্যাগ বা উত্তর মেলায়। তৃতীয়ত, একটি স্বাধীন এলএলএম-অ্যাজ-আ-জাজ ১ থেকে ৫ স্কেলের রুব্রিক্স দিয়ে লেখার গভীরতা ও যুক্তি মূল্যায়ন করে। যদি নতুন প্রার্থী প্রম্পট পূর্বের কোনো টেস্ট নষ্ট না করে সার্বিক সাফল্য ৮৪% থেকে ৯৪%-এ উন্নীত করে, তবেই তা চালুর অনুমোদন পায়।'
      }
    },
    {
      type: 'code',
      id: 'eval-harness-ts',
      lang: 'typescript',
      caption: {
        en: 'TypeScript prompt evaluation harness comparing two prompt versions over 4 golden test cases.',
        bn: '৪টি গোল্ডেন টেস্ট কেসের ওপর ২টি প্রম্পট সংস্করণের তুলনামূলক মূল্যায়নের TypeScript কোড।'
      },
      code: `interface TestCase {
  id: number;
  input: string;
  expectedClass: string;
}

interface EvaluationResult {
  passedCount: number;
  totalCount: number;
  accuracyPercent: number;
  failures: number[];
}

export function evaluatePromptVersion(
  testSuite: TestCase[],
  classifierFn: (text: string) => string
): EvaluationResult {
  let passed = 0;
  const failedIds: number[] = [];

  for (const tc of testSuite) {
    const predicted = classifierFn(tc.input);
    if (predicted === tc.expectedClass) {
      passed++;
    } else {
      failedIds.push(tc.id);
    }
  }

  const accuracy = Math.round((passed / testSuite.length) * 100);
  return {
    passedCount: passed,
    totalCount: testSuite.length,
    accuracyPercent: accuracy,
    failures: failedIds
  };
}

// 4 curated golden test cases with tricky boundary conditions
const goldenSuite: TestCase[] = [
  { id: 1, input: 'The package arrived promptly and intact.', expectedClass: 'POSITIVE' },
  { id: 2, input: 'Battery died after 10 minutes.', expectedClass: 'NEGATIVE' },
  { id: 3, input: 'Box was standard gray color.', expectedClass: 'NEUTRAL' },
  { id: 4, input: 'Not terrible, but could be much better.', expectedClass: 'MIXED' }
];

// Simulated Model Predictions for Version 1.1 (Baseline: misses case 4)
const runV1 = (input: string) => (input.includes('Not terrible') ? 'NEGATIVE' : input.includes('promptly') ? 'POSITIVE' : input.includes('died') ? 'NEGATIVE' : 'NEUTRAL');

// Simulated Model Predictions for Version 1.2 (Optimized: handles case 4 correctly)
const runV12 = (input: string) => (input.includes('Not terrible') ? 'MIXED' : input.includes('promptly') ? 'POSITIVE' : input.includes('died') ? 'NEGATIVE' : 'NEUTRAL');

const reportV1 = evaluatePromptVersion(goldenSuite, runV1);
const reportV2 = evaluatePromptVersion(goldenSuite, runV12);

console.log('Version 1.1 Accuracy:', reportV1.accuracyPercent); // 75
console.log('Version 1.2 Accuracy:', reportV2.accuracyPercent); // 100
console.log('Evaluated Test Cases:', goldenSuite.length);       // 4
// Version 1.2 achieved +25% accuracy lift on golden dataset with 0 regressions!`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Golden Dataset',
          def: {
            en: 'A curated, version-controlled collection of representative and edge-case inputs paired with verified ground-truth targets.',
            bn: 'প্রতিনিধিত্বশীল ও জটিল এজ-কেস ইনপুট সম্বলিত একটি সংরক্ষিত ও ভার্সন নিয়ন্ত্রিত ডেটাসেট যার সঠিক উত্তর পূর্বনির্ধারিত থাকে।'
          }
        },
        {
          term: 'LLM-as-a-Judge',
          def: {
            en: 'Using an independent high-capability model to evaluate the qualitative semantic nuances of another model output against a rubric.',
            bn: 'একটি শক্তিশালী নিরপেক্ষ মডেল ব্যবহার করে সুনির্দিষ্ট রুব্রিক্সের ভিত্তিতে অন্য মডেলের উত্তরের গুণগত মান পরিমাপ করা।'
          }
        },
        {
          term: 'Regression Testing',
          def: {
            en: 'Continuous automated testing that verifies prompt adjustments do not reintroduce previously resolved bugs or break established behaviors.',
            bn: 'ধারাবাহিক স্বয়ংক্রিয় পরীক্ষা যা নিশ্চিত করে যে নতুন প্রম্পট পরিবর্তনের কারণে পুরোনো ঠিক করা বাগ বা কাঙ্ক্ষিত আচরণ নষ্ট হয়নি।'
          }
        },
        {
          term: 'Prompt Drift',
          def: {
            en: 'Degradation in system performance occurring when foundation model provider updates alter underlying model token distributions.',
            bn: 'সিস্টেমের কার্যক্ষমতা হ্রাস যা ঘটে যখন ভিত্তি মডেলের প্রোভাইডার গোপনে মডেল আপডেট করায় আউটপুটের আচরণ বদলে যায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vibe-check-danger-ex1',
      kind: 'mcq',
      topic: 'vibe-check-production-risks',
      question: {
        en: 'Why is testing a prompt on 2 or 3 manual queries in an interactive playground insufficient before releasing to production?',
        bn: 'প্রোডাকশনে ছাড়ার আগে প্লে-গ্রাউন্ডে কেবল ২ বা ৩টি প্রশ্নে প্রম্পট পরীক্ষা করা কেন সম্পূর্ণ অপর্যাপ্ত?'
      },
      options: [
        {
          en: 'Small manual samples fail to catch silent regressions across subtle edge cases and adversarial scenarios covered by automated test suites',
          bn: 'অল্প কয়েকটি সাধারণ প্রশ্ন পরীক্ষা করলে জটিল এজ-কেস এবং ক্ষতিকর পরিস্থিতিতে সৃষ্ট নীরব রিগ্রেশনগুলো ধরা পড়ে না'
        },
        {
          en: 'Interactive playgrounds use 8-bit graphics cards',
          bn: 'ইন্টারঅ্যাক্টিভ প্লে-গ্রাউন্ডগুলো ৮-বিট গ্রাফিক্স কার্ড ব্যবহার করে'
        },
        {
          en: 'Testing more than 3 queries permanently locks the API account',
          bn: '৩টির বেশি প্রশ্ন পরীক্ষা করলে এপিআই অ্যাকাউন্ট স্থায়ীভাবে লক হয়ে যায়'
        },
        {
          en: 'Playgrounds cannot process English words',
          bn: 'প্লে-গ্রাউন্ডগুলো ইংরেজি শব্দ প্রসেস করতে অক্ষম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fixing one prompt weakness often breaks another without comprehensive testing.',
        bn: 'সার্বিক পরীক্ষা না থাকলে একটি সমস্যা ঠিক করতে গিয়ে আরেকটি নতুন সমস্যা তৈরি হয়।'
      },
      explanation: {
        en: 'Without a frozen test suite, developers cannot verify whether prompt changes broke existing capabilities on other inputs.',
        bn: 'সংরক্ষিত টেস্ট ডেটাসেট ছাড়া প্রম্পটের কোনো পরিবর্তন আগের কাজগুলোতে ত্রুটি তৈরি করেছে কিনা তা নিশ্চিত হওয়া অসম্ভব।'
      }
    },
    {
      id: 'llm-as-a-judge-role-ex2',
      kind: 'mcq',
      topic: 'llm-as-a-judge-grading-rubric',
      question: {
        en: 'When is an LLM-as-a-Judge evaluation methodology preferred over programmatic string equality checks?',
        bn: 'কখন সাধারণ স্ট্রিং মেলানোর চেয়ে এলএলএম-অ্যাজ-আ-জাজ মূল্যায়ন পদ্ধতি অধিক গ্রহণযোগ্য?'
      },
      options: [
        {
          en: 'For subjective tasks like helpfulness, empathy, creative fluency, and semantic correctness where phrasing varies legitimately',
          bn: 'সহানুভূতি, সহায়ক মনোভাব এবং অর্থগত সঠিকতার মতো ক্ষেত্রগুলোতে যেখানে বাক্য গঠনের স্বাভাবিক বৈচিত্র্য থাকা বাঞ্ছনীয়'
        },
        {
          en: 'When verifying that an output is strictly an integer between 1 and 10',
          bn: 'আউটপুটটি ১ থেকে ১০ এর মধ্যে একটি পূর্ণসংখ্যা কিনা তা নিশ্চিত করার ক্ষেত্রে'
        },
        {
          en: 'When measuring network round-trip ping latency in milliseconds',
          bn: 'মিলিসেকেন্ডে নেটওয়ার্ক পিং লেটেন্সি পরিমাপের ক্ষেত্রে'
        },
        {
          en: 'When calculating the MD5 hash of an image file',
          bn: 'একটি ছবির MD5 হ্যাশ মান বের করার সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider tasks where multiple different word choices are equally correct.',
        bn: 'এমন কাজের কথা ভাবুন যেখানে ভিন্ন ভিন্ন শব্দ ব্যবহার করেও উত্তর সমানভাবে সঠিক হতে পারে।'
      },
      explanation: {
        en: 'LLM judges comprehend semantic equivalence and stylistic nuances that rigid exact-match assertions mistakenly penalize.',
        bn: 'বিচারক মডেল লেখার অর্থগত সমতা বুঝতে পারে, যেখানে কঠোর স্ট্রিং ম্যাচিং ভিন্ন শব্দের সঠিক উত্তরকেও ভুল ধরে।'
      }
    },
    {
      id: 'regression-veto-rule-ex3',
      kind: 'mcq',
      topic: 'regression-gating-policy',
      question: {
        en: 'What is the "Regression Veto" policy in enterprise prompt release engineering?',
        bn: 'এন্টারপ্রাইজ প্রম্পট রিলিজ ইঞ্জিনিয়ারিংয়ে "রিগ্রেশন ভেটো" নীতি বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'A candidate prompt cannot be deployed if it breaks previously passing golden test cases, even if its aggregate score appears slightly higher',
          bn: 'একটি নতুন প্রম্পট যদি আগের কোনো পাস করা টেস্ট কেস ভেঙে ফেলে, তবে তার গড় নম্বর কিছুটা বেশি হলেও সেটি চালু করা যাবে না'
        },
        {
          en: 'The CEO must manually approve every single API request',
          bn: 'প্রতিটি এপিআই অনুরোধের জন্য সিইও-র অনুমোদন নিতে হবে'
        },
        {
          en: 'All prompts are automatically deleted every 24 hours',
          bn: 'সব প্রম্পট প্রতি ২৪ ঘণ্টায় স্বয়ংক্রিয়ভাবে মুছে ফেলা হবে'
        },
        {
          en: 'Prompts can only be updated on leap years',
          bn: 'প্রম্পট কেবল লিপ ইয়ারের বছরগুলোতে আপডেট করা যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preserving existing contractual guarantees overrides marginal overall score bumps.',
        bn: 'সামান্য গড় স্কোর বৃদ্ধির চেয়ে গ্রাহকের বিদ্যমান প্রতিশ্রুতি রক্ষা করা বেশি গুরুত্বপূর্ণ।'
      },
      explanation: {
        en: 'Regressions disrupt production users who depend on established behaviors; fixes must not break existing golden commitments.',
        bn: 'বিদ্যমান কার্যক্ষমতা নষ্ট হলে ব্যবহারকারীরা ক্ষতির মুখে পড়ে; তাই উন্নতি হতে হবে আগের প্রতিশ্রুতি অক্ষুণ্ণ রেখে।'
      }
    },
    {
      id: 'tri-fold-grader-ex4',
      kind: 'mcq',
      topic: 'tri-fold-grader-layers',
      question: {
        en: 'In our tri-fold grading pipeline, what does Gate 1 verify before semantic checks are executed?',
        bn: 'আমাদের ত্রি-মাত্রিক মূল্যায়ন পাইপলাইনে, অর্থগত পরীক্ষার আগে গেট ১ কোন বিষয়টি যাচাই করে?'
      },
      options: [
        {
          en: 'Hard technical invariants: JSON syntax validity, required schema types, and response latency within the 800ms budget',
          bn: 'কঠোর কারিগরি নিয়মাবলি: JSON সিনট্যাক্সের বৈধতা, আবশ্যক ডেটা টাইপ এবং ৮০০ মিলিসেকেন্ডের মধ্যে উত্তর আসার নিশ্চয়তা'
        },
        {
          en: 'Whether the prompt was written on an Apple Mac computer',
          bn: 'প্রম্পটটি অ্যাপল ম্যাক কম্পিউটারে লেখা হয়েছিল কিনা'
        },
        {
          en: 'The number of followers of the developer on social media',
          bn: 'সামাজিক মাধ্যমে সংশ্লিষ্ট সফটওয়্যার ইঞ্জিনিয়ারের ফলোয়ার সংখ্যা'
        },
        {
          en: 'The temperature of the room where the programmer works',
          bn: 'যে ঘরে প্রোগ্রামার কাজ করছেন সেই ঘরের তাপমাত্রা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Syntactic validity and performance thresholds are prerequisites for deeper evaluation.',
        bn: 'উত্তরের গভীরতা যাচাইয়ের আগে সিনট্যাক্স ঠিক থাকা এবং দ্রুত সাড়া দেওয়া বাধ্যতামূলক।'
      },
      explanation: {
        en: 'Gate 1 guarantees structural and performance baselines before spending compute on qualitative evaluation.',
        bn: 'গেট ১ নিশ্চিত করে যে আউটপুটটি সফটওয়্যারের পড়ার উপযোগী এবং নির্ধারিত সময়ের মধ্যে এসেছে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Prompt Optimization and Quantitative Evaluation Quiz',
      bn: 'প্রম্পট অপ্টিমাইজেশন এবং পরিমাণগত মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'quiz-golden-dataset-curation',
        kind: 'mcq',
        topic: 'golden-dataset-composition',
        question: {
          en: 'What components should a balanced Golden Dataset contain to effectively evaluate an enterprise prompt?',
          bn: 'একটি এন্টারপ্রাইজ প্রম্পট সঠিকভাবে মূল্যায়নের জন্য একটি সুষম গোল্ডেন ডেটাসেটে কোন উপাদানগুলো থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'Common standard inputs, subtle edge cases, historical production failures, and adversarial prompt injection attempts',
            bn: 'সাধারণ প্রচলিত ইনপুট, সূক্ষ্ম এজ-কেস, অতীতের প্রোডাকশন ব্যর্থতার নমুনা এবং ক্ষতিকর প্রম্পট ইনজেকশন আক্রমণ'
          },
          {
            en: '1000 identical copies of the word "hello"',
            bn: '"hello" শব্দের ১০০০টি হুবহু নকল প্রতিলিপি'
          },
          {
            en: 'Encrypted Linux kernel device drivers',
            bn: 'এনক্রিপ্ট করা লিনাক্স কার্নেল ডিভাইস ড্রাইভার'
          },
          {
            en: 'Random characters generated by static noise',
            bn: 'রেডিও নয়েজ দ্বারা তৈরি এলোমেলো অর্থহীন অক্ষর'
          }
        ],
        answer: 0,
        hint: {
          en: 'The dataset must stress-test all operational boundaries, not just happy-path queries.',
          bn: 'ডেটাসেটটিকে কেবল সহজ কাজ নয়, বরং সব ধরনের প্রতিকূল পরিস্থিতি মোকাবিলার উপযোগী হতে হবে।'
        },
        explanation: {
          en: 'Comprehensive test suites balance common traffic with boundary conditions and security exploits.',
          bn: 'একটি পূর্ণাঙ্গ টেস্ট সেট সাধারণ ব্যবহারের পাশাপাশি প্রান্তিক ঝুঁকি ও নিরাপত্তা আক্রমণগুলোও সফলভাবে যাচাই করে।'
        }
      },
      {
        id: 'quiz-prompt-drift-detection',
        kind: 'mcq',
        topic: 'silent-prompt-drift-monitoring',
        question: {
          en: 'Why do production engineering teams run automated nightly evals against their golden dataset?',
          bn: 'প্রোডাকশন ইঞ্জিনিয়ারিং দলগুলো তাদের গোল্ডেন ডেটাসেটের ওপর কেন প্রতি রাতে স্বয়ংক্রিয় মূল্যায়ন চালায়?'
        },
        options: [
          {
            en: 'To catch Silent Prompt Drift caused by upstream foundation model API updates or changes in safety filters',
            bn: 'মূল মডেল প্রোভাইডারের অভ্যন্তরীণ আপডেট বা নিরাপত্তা ফিল্টারের পরিবর্তনের কারণে তৈরি নীরব আচরণগত পরিবর্তন ধরতে'
          },
          {
            en: 'To drain remaining electricity from computer batteries',
            bn: 'কম্পিউটারের ব্যাটারির অবশিষ্ট বিদ্যুৎ খালি করার জন্য'
          },
          {
            en: 'To generate fake website traffic for advertisers',
            bn: 'বিজ্ঞাপনদাতাদের জন্য ভুয়া ওয়েবসাইট ভিজিটর তৈরি করতে'
          },
          {
            en: 'To reset the server root password to default values',
            bn: 'সার্ভারের মূল পাসওয়ার্ড ডিফল্ট মানে পরিবর্তন করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cloud LLM providers periodically update models without changing endpoint names.',
          bn: 'ক্লাউড এআই প্রোভাইডাররা অনেক সময় এপিআই-এর নাম না বদলে পর্দার আড়ালে মডেলের আচরণ আপডেট করে।'
        },
        explanation: {
          en: 'Nightly evals detect unexpected changes in upstream model behavior before customers encounter broken responses.',
          bn: 'নিয়মিত রাতের মূল্যায়ন প্রোভাইডারের অদৃশ্য পরিবর্তনের ফলে সৃষ্ট ত্রুটি গ্রাহকের চোখে পড়ার আগেই তা প্রকাশ করে দেয়।'
        }
      },
      {
        id: 'quiz-pairwise-judge-bias',
        kind: 'mcq',
        topic: 'pairwise-eval-position-bias',
        question: {
          en: 'When using an LLM-as-a-Judge for pairwise comparison (comparing Output A vs Output B), what known bias must be addressed?',
          bn: 'দুটি উত্তরের মধ্যে তুলনা করতে (উত্তর ক বনাম উত্তর খ) যখন এলএলএম বিচারক ব্যবহার করা হয়, তখন কোন পরিচিত বায়াসটি দূর করতে হয়?'
        },
        options: [
          {
            en: 'Position Bias: models frequently favor whichever candidate is presented first in the prompt, requiring swapping candidate order and averaging scores',
            bn: 'পজিশন বায়াস: মডেল প্রায়ই প্রম্পটে প্রথমে উপস্থাপিত উত্তরটিকে বেশি পছন্দ করে, যার জন্য ক্রম অদলবদল করে গড় স্কোর নিতে হয়'
          },
          {
            en: 'Models always vote for the candidate written in all uppercase letters',
            bn: 'মডেল সর্বদা বড় হাতের অক্ষরে লেখা উত্তরের পক্ষে ভোট দেয়'
          },
          {
            en: 'The model rejects outputs containing numbers less than 5',
            bn: 'মডেল ৫ এর চেয়ে ছোট সংখ্যা সম্বলিত যেকোনো উত্তর বাতিল করে দেয়'
          },
          {
            en: 'Judges charge real monetary credit card fees per token',
            bn: 'বিচারক মডেল প্রতি টোকেনের জন্য আলাদা ক্রেডিট কার্ড ফি দাবি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does presenting response A before response B unfairly tilt the judge evaluation?',
          bn: 'উত্তর ক-কে আগে এবং খ-কে পরে উপস্থাপন করলে কি বিচারে কোনো অযাচিত প্রভাব পড়ে?'
        },
        explanation: {
          en: 'LLM judges exhibit position bias; swapping orders (A/B and B/A) neutralizes presentation order skew.',
          bn: 'এলএলএম বিচারক প্রথম উত্তরের প্রতি পক্ষপাত দেখায়; তাই ক্রম পরিবর্তন করে দুবার পরীক্ষা করলে সঠিক ফলাফল পাওয়া যায়।'
        }
      },
      {
        id: 'quiz-ci-cd-prompt-harness',
        kind: 'mcq',
        topic: 'ci-cd-prompt-deployment-gate',
        question: {
          en: 'How do modern continuous integration (CI) pipelines automate prompt quality control?',
          bn: 'আধুনিক কন্টিনিউয়াস ইন্টিগ্রেশন (সিআই) পাইপলাইন কীভাবে স্বয়ংক্রিয়ভাবে প্রম্পটের মান নিয়ন্ত্রণ করে?'
        },
        options: [
          {
            en: 'By executing the evaluation harness on every pull request, blocking deployment merges if accuracy drops below threshold or regressions occur',
            bn: 'প্রতিটি পুল রিকোয়েস্টে মূল্যায়ন কাঠামো চালিয়ে, যদি নির্ভুলতা নির্দিষ্ট সীমার নিচে নামে বা কোনো রিগ্রেশন ঘটে তবে কোড মার্জ বন্ধ করে দিয়ে'
          },
          {
            en: 'By prohibiting programmers from writing comments in code',
            bn: 'প্রোগ্রামারদের কোডে কোনো মন্তব্য (comments) লিখতে নিষেধ করে'
          },
          {
            en: 'By converting all prompt strings into compressed zip archives',
            bn: 'সমস্ত প্রম্পট টেক্সটকে জিপ ফাইলে রূপান্তর করার মাধ্যমে'
          },
          {
            en: 'By limiting code changes to exactly 1 character per day',
            bn: 'প্রতিদিন সর্বোচ্চ ১টি অক্ষর পরিবর্তনের অনুমতি দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automated test runners gate code merges in Git repositories before deployment.',
          bn: 'স্বয়ংক্রিয় টেস্ট ব্যবস্থা কোড রিপোজিটরিতে ত্রুটিযুক্ত কোড যুক্ত হওয়া প্রতিহত করে।'
        },
        explanation: {
          en: 'CI harnesses treat prompts with the same rigor as traditional software code, preventing regression deployment.',
          bn: 'সিআই পাইপলাইন প্রম্পটকে সাধারণ সফটওয়্যার টেস্টের মতোই কড়াকড়িভাবে পরীক্ষা করে ত্রুটিপূর্ণ সংস্করণ চালু হওয়া রোধ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'prompt-capstone',
    title: {
      en: 'Production Prompt Engineering Capstone',
      bn: 'প্রোডাকশন প্রম্পট ইঞ্জিনিয়ারিং ক্যাপস্টোন'
    }
  }
};
