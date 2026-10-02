import type { Lesson } from '../../../lib/types';

export const EvalsBenchmarksLesson: Lesson = {
  slug: 'evals-benchmarks',
  tech: 'llms',
  title: {
    en: 'Evals and Benchmarks',
    bn: 'যা-মাপা হয় তা-চালে: pass@k combinatorics (k=১→৫-এ ০.৪০ → ০.৯৮)'
  },
  summary: {
    en: 'What gets measured gets shipped: pass@k combinatorics (0.40 → 0.98 across k=1→5), benchmark zoos, LLM judges, and the harness habit. You will map the eval stack, run pass@k live, and learn why vibes are not a metric.',
    bn: 'যা-মাপা হয় তা-চালে: pass@k combinatorics (k=১→৫-এ ০.৪০ → ০.৯৮), benchmark-চিড়িয়াখানা, LLM বিচারক, harness-অভ্যাস। Eval stack-ম্যাপ করবেন, pass@k live চালাবেন, ভাব-metric নয় কেন শিখবেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The eval stack', bn: 'WHAT — ইভ্যালুয়েশন স্ট্যাক (Eval stack)' },
    },
    {
      type: 'para',
      text: {
        en: 'When you systematically evaluate models, rigorous benchmarks grade capabilities across reasoning, code, and language tasks. Standardized test suites publish baseline scores, while pass@k calculates the mathematical probability that at least one of k generated samples correctly solves the problem. Automated evaluation with automated judges accelerates feedback on open-ended prose, though it requires careful human calibration. Curated golden test sets serve as the ultimate deployment gate for company-specific workflows. Finally, an automated test harness runs these validation suites on every single prompt or model change.',
        bn: 'পদ্ধতিগত মূল্যায়ন বা ইভ্যালুয়েশন বিভিন্ন বেঞ্চমার্ক টেস্টের মাধ্যমে মডেলের সক্ষমতা যাচাই করে। মানসম্মত টেস্ট স্যুট সাধারণ সক্ষমতা মাপে, আর pass@k হিসাব করে k সংখ্যক চেষ্টার মধ্যে অন্তত একটি সঠিক উত্তর পাওয়ার সম্ভাবনা। উন্মুক্ত উত্তরের মূল্যায়নে স্বয়ংক্রিয় বিচারক ব্যবহার দ্রুত প্রতিক্রিয়া দিলেও এতে মানুষের সিদ্ধান্তের সাথে সামঞ্জস্য রাখা প্রয়োজন। গোল্ডেন টেস্ট সেট হলো হাতে যাচাইকৃত ডেটাসেট যা নতুন সংস্করণ চালুর প্রধান পরীক্ষা হিসেবে কাজ করে। এই সবকটি স্যুটকে টেস্ট হারনেস প্রতিটি পরিবর্তনের সাথে সাথে স্বয়ংক্রিয়ভাবে চালিয়ে ফলাফল নিশ্চিত করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Pass@k climbs — tries forgive flakiness', bn: 'Pass@k ওঠে — চেষ্টা-অস্থিরতা ক্ষমা করে' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Pass at k bar chart rising from 0.40 to 0.98">
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<text x="90" y="200">k=1</text>
<text x="90" y="120">0.40</text>
<rect x="60" y="130" width="60" height="60" rx="4" fill="#ef4444" opacity="0.7"/>
<text x="220" y="200">k=2</text>
<text x="220" y="82">0.67</text>
<rect x="190" y="92" width="60" height="98" rx="4" fill="#f59e0b" opacity="0.7"/>
<text x="350" y="200">k=3</text>
<text x="350" y="58">0.83</text>
<rect x="320" y="68" width="60" height="122" rx="4" fill="#4f46e5" opacity="0.6"/>
<text x="480" y="200">k=5</text>
<text x="480" y="42">0.98</text>
<rect x="450" y="52" width="60" height="138" rx="4" fill="#16a34a" opacity="0.7"/>
</g>
<path d="M40,190 L540,190" stroke="currentColor" stroke-width="1.5"/>
<text x="320" y="30" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">10 samples, 4 correct — more tries, surer wins</text>
<text x="320" y="224" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">pass@k = 1 − C(6,k)/C(10,k): combinatorics, not optimism.</text>
</svg>`,
      caption: {
        en: 'Same model, four verdicts: k decides. Report the k or the number lies.',
        bn: 'একই মডেল, চার-রায়: k-সিদ্ধান্ত নেয়। k-report করুন নয়তো সংখ্যা-মিথ্যা বলে।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'pass_at_k.py',
      code: `import math

def pass_at_k(n, c, k):
    # Calculates pass@k = 1 - comb(n - c, k) / comb(n, k)
    if n - c < k:
        return 1.0
    return 1.0 - (math.comb(n - c, k) / math.comb(n, k))

total_samples = 10
correct_samples = 4
k_values = [1, 2, 3, 5]

print(f"Combinatorial pass@k with {total_samples} samples and {correct_samples} correct:")
for k in k_values:
    score = pass_at_k(total_samples, correct_samples, k)
    print(f"pass@{k}: {score:.2f}")

# Output:
# Combinatorial pass@k with 10 samples and 4 correct:
# pass@1: 0.40
# pass@2: 0.67
# pass@3: 0.83
# pass@5: 0.98`,
      caption: {
        en: 'Combinatorial pass@k calculation for 10 samples with 4 correct, climbing from single-shot pass@1 = 0.40 to sampling ceiling pass@5 = 0.98.',
        bn: '১০টি নমুনার মধ্যে ৪টি সঠিক সমাধানের ক্ষেত্রে pass@k এর গাণিতিক হিসাব, যা pass@১ = ০.৪০ থেকে শুরু করে সর্বোচ্চ pass@৫ = ০.৯৮ এ পৌঁছায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Benchmark', def: { en: 'Standardized evaluation suites such as MMLU or HumanEval used to compare foundational model performance across tasks.', bn: 'এমএমএলইউ বা হিউম্যান-ইভ্যালের মতো সর্বজনীন পরীক্ষার সেট যা বিভিন্ন মডেলের সাধারণ দক্ষতার তুলনামূলক পরিমাপ করে।' } },
        { term: 'pass@k', def: { en: 'A combinatorial metric representing the mathematical probability of achieving at least one correct solution within k generated attempts.', bn: 'একটি কম্বিনেটোরিয়াল মেট্রিক যা k সংখ্যক চেষ্টার মধ্যে অন্তত একটি সঠিক সমাধান অর্জনের সম্ভাবনা প্রকাশ করে।' } },
        { term: 'LLM judge', def: { en: 'A highly capable model employed to evaluate and score open-ended generation against structured rubrics.', bn: 'একটি শক্তিশালী মডেল যা নির্দিষ্ট নীতিমালার ওপর ভিত্তি করে অন্য মডেলের উন্মুক্ত উত্তরগুলোর গুণমান মূল্যায়ন করে।' } },
        { term: 'Goldens', def: { en: 'Manually verified, domain-specific reference question-and-answer pairs used to gate production deployments.', bn: 'হাতে-কলমে যাচাইকৃত নির্দিষ্ট ডোমেনের প্রশ্ন ও উত্তরের সেট যা প্রোডাকশনে মডেল রিলিজের মানদণ্ড হিসেবে কাজ করে।' } },
        { term: 'Harness', def: { en: 'An automated continuous-integration pipeline that executes comprehensive evaluation suites whenever models or prompts change.', bn: 'একটি স্বয়ংক্রিয় সিআই পাইপলাইন যা প্রম্পট বা মডেলের যেকোনো পরিবর্তনের সাথে সাথে মূল্যায়ন স্যুটগুলো চালায়।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Vibes don’t gate launches', bn: 'WHY — ভাব-চালু gate করে না' },
    },
    {
      type: 'list',
      items: [
        { en: '“Seems smarter” ships regressions: harness numbers catch what demos hide.', bn: '“চতুর-লাগে” regression-চালায়: harness-সংখ্যা demo-লুকানো ধরে।' },
        { en: 'Evals price models: 2% better at 3× cost loses — measure $/solved-task.', bn: 'Eval-মডেল দাম করে: ৩× খরচে ২% ভালো-হারে — $/সমাধান-কাজ মাপুন।' },
        { en: 'Goldens compound: every incident becomes a regression test forever.', bn: 'Golden-যৌগিক হয়: প্রতি ঘটনা-চিরতরে regression test।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Harness up in 4 steps', bn: 'HOW — Harness-ওঠান ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Collect goldens', bn: '১. Golden-সংগ্রহ' }, text: { en: '50+ real Q/A, hand-verified.', bn: '৫০+ আসল-Q/A, হাতে-যাচাই।' } },
        { title: { en: '2. Add public suites', bn: '২. Public-suite যোগ' }, text: { en: 'MMLU/HumanEval slices for generality.', bn: 'সাধারণত্বে MMLU/HumanEval টুকরা।' } },
        { title: { en: '3. Fix k + judge', bn: '৩. k + বিচারক-ঠিক' }, text: { en: 'pass@1 for UX, pass@5 for ceiling.', bn: 'UX-pass@১, ceiling-pass@৫।' } },
        { title: { en: '4. Gate launches', bn: '৪. চালু-gate' }, text: { en: 'No green harness, no deploy.', bn: 'সবুজ-harness নেই, deploy নেই।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Combinatorics, not optimism', bn: 'INSIDE — Combinatorics, আশাবাদ নয়' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit scores 10 samples with 4 correct: pass@1 = 0.40 (single-shot UX), pass@2 = 0.67, pass@3 = 0.83, pass@5 = 0.98 (sampling ceiling) — via 1 − C(6,k)/C(10,k). Same brain, four numbers: that’s why honest reports name k. Drop CORRECT to 1 and watch the ceiling collapse to 0.50.',
        bn: 'এই tryit ১০ নমুনা ৪-সঠিক score করে: pass@১ = ০.৪০ (এক-শট UX), pass@২ = ০.৬৭, pass@৩ = ০.৮৩, pass@৫ = ০.৯৮ (sampling ceiling) — ১ − C(৬,k)/C(১০,k) জুড়ে। একই মস্তিষ্ক, চার-সংখ্যা: সৎ-report k-নামে। CORRECT ১-নামিয়ে ceiling-ধস ০.৫০ দেখুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'pass@k live (change CORRECT, press Run)', bn: 'pass@k live (CORRECT বদলে Run)' },
      html: '<h3>Four verdicts, one model</h3>\n<pre id="out"></pre>\n<p>Console shows the combinatorics.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 10px; }',
      js: 'const N = 10, CORRECT = 4; // ← samples and solves — try CORRECT = 1!\nconst KS = [1, 2, 3, 5];\nconst C = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };\nconst rows = KS.map((k) => {\n  const p = 1 - C(N - CORRECT, k) / C(N, k);\n  console.log("pass@" + k + " = 1 − C(" + (N-CORRECT) + "," + k + ")/C(" + N + "," + k + ") = " + p.toFixed(2));\n  return "pass@" + k + " = " + p.toFixed(2);\n});\ndocument.getElementById("out").textContent = rows.join("\\n") + "\\nsingle-shot " + (CORRECT/N).toFixed(2) + " → ceiling " + (1 - C(N-CORRECT, 5)/C(N, 5)).toFixed(2) + " 🪜";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Eval instincts', bn: 'RESULT — Eval-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Name k with every pass@k: numbers without k are marketing.', bn: 'প্রতি pass@k-k নামুন: k-ছাড়া সংখ্যা-marketing।' },
        { en: 'Goldens gate YOUR launches; public suites watch generality.', bn: 'Golden আপনার-চালু gate করে; public-suite সাধারণত্ব-দেখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Metric mirages', bn: 'DEBUG — Metric-মরীচিকা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Judge bias (the grader plays favorites)', bn: 'বিচারক-পক্ষপাত (পরীক্ষক-পক্ষ নেয়)' },
      text: {
        en: 'LLM judges prefer long, first-listed, self-styled answers — verbosity scores over veracity. Symptoms: flowery winners, terse losers. Cure: calibrate vs humans, randomize order, penalize length, audit samples.',
        bn: 'LLM বিচারক দীর্ঘ, প্রথম-তালিকা, স্ব-ধাঁচ উত্তর-পছন্দ করে — সত্যতা-ওপর শব্দাড়ম্বর score করে। লক্ষণ: ফুলানো-বিজয়ী, সংক্ষিপ্ত-পরাজিত। ওষুধ: মানুষ-calibrate, ক্রম-এলোমেলো, দৈর্ঘ্য-দণ্ড, sample-নিরীক্ষা।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Saturated suites (99% and meaningless)', bn: 'সম্পৃক্ত সুইট বা suites (৯৯% অর্থহীন)' },
      text: {
        en: 'Old benchmarks top out: every model scores 95%+, differences are noise. Symptoms: launch decisions on ±0.3 gaps. Cure: retire saturated suites, write harder goldens, eval YOUR distribution.',
        bn: 'পুরনো বেঞ্চমার্ক বা benchmark শীর্ষে: প্রতি মডেল ৯৫%+, পার্থক্য-noise। লক্ষণ: ±০.৩ ফাঁকে চালু-সিদ্ধান্ত। ওষুধ: সম্পৃক্ত সুইট বা suites অবসর, কঠিন গোল্ডেন বা goldens লেখা, আপনার-বণ্টন eval।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Harnesses gating', bn: 'REAL WORLD — Gate-করা harness' },
    },
    {
      type: 'list',
      items: [
        { en: 'Model upgrades: 500 goldens must stay green before swap.', bn: 'মডেল-upgrade: বদলের আগে ৫০০ golden-সবুজ থাকতেই হবে।' },
        { en: 'Prompt deploys: A/B on pass@1 + cost per solve.', bn: 'Prompt deploy: pass@১ + প্রতি-সমাধান খরচে A/B।' },
        { en: 'Leaderboards: public suites rank, private goldens decide.', bn: 'Leaderboard: public-suite ক্রম করে, private-golden সিদ্ধান্ত নেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Serving and Deploy', bn: 'পরবর্তী পাঠ — Serving এবং Deploy' },
    },
    {
      type: 'para',
      text: {
        en: 'Measured. Lesson 7 SERVES: KV cache, batching, quantization math, and the latency/throughput frontier.',
        bn: 'মূল্যায়ন সম্পন্ন। পাঠ ৭ সার্ভিং আলোচনা করে: কেভি ক্যাশ, ব্যাচিং, কোয়ান্টাইজেশনের গণিত এবং ল্যাটেন্সি ও থ্রুপুট ব্যালেন্স।',
      },
    },
  ],
  exercises: [
    {
      id: 'evb-ex-1',
      kind: 'mcq',
      topic: 'k-meaning',
      question: { en: 'pass@1 = 0.40, pass@5 = 0.98. Meaning?', bn: 'pass@১ = ০.৪০ এবং pass@৫ = ০.৯৮ এর অর্থ কী?' },
      options: [
        { en: 'Flaky single-shot, strong ceiling — sample to win', bn: 'একক চেষ্টায় অনিশ্চিত কিন্তু একাধিক চেষ্টায় অত্যন্ত শক্তিশালী ফলাফল' },
        { en: 'Broken model', bn: 'মডেলটি সম্পূর্ণ অকেজো' },
        { en: 'Perfect model', bn: 'মডেলটি নিখুঁত' },
        { en: 'k is irrelevant', bn: 'k এর কোনো প্রাসঙ্গিকতা নেই' },
      ],
      answer: 0,
      hint: { en: 'UX vs ceiling.', bn: 'ইউজার অভিজ্ঞতা বনাম সর্বোচ্চ সম্ভাবনা।' },
      explanation: {
        en: 'Users feel pass@1; sampling unlocks pass@5: the gap measures flakiness — votes and verifies harvest the ceiling.',
        bn: 'ব্যবহারকারী pass@১ অনুভব করেন; একাধিক স্যাম্পলিং pass@৫ আনলক করে। এই ব্যবধান অস্থিরতা নির্দেশ করে।'
      },
    },
    {
      id: 'evb-ex-2',
      kind: 'mcq',
      topic: 'golden-role',
      question: { en: 'Goldens vs public suites?', bn: 'গোল্ডেন টেস্ট সেট বনাম পাবলিক টেস্ট স্যুটের পার্থক্য কী?' },
      options: [
        { en: 'Goldens gate your launch; public suites watch generality', bn: 'গোল্ডেন সেট রিলিজের মানদণ্ড নির্ধারণ করে; পাবলিক স্যুট সাধারণ সক্ষমতা যাচাই করে' },
        { en: 'Public suites suffice alone', bn: 'পাবলিক স্যুট একাই যথেষ্ট' },
        { en: 'Goldens are optional', bn: 'গোল্ডেন সেট সম্পূর্ণ ঐচ্ছিক' },
        { en: 'Neither matters', bn: 'কোনোটিই গুরুত্বপূর্ণ নয়' },
      ],
      answer: 0,
      hint: { en: 'RESULT #2.', bn: 'ফলাফল নীতি ২ দেখুন।' },
      explanation: {
        en: 'MMLU never saw your refund policy: public suites prevent general decay, goldens prove YOUR task still works.',
        bn: 'MMLU আপনার রিফান্ড পলিসি দেখেনি: পাবলিক স্যুট সাধারণ অবনতি রোধ করে, আর গোল্ডেন টেস্ট প্রমাণ করে আপনার কাজ ঠিকমতো চলছে।'
      },
    },
    {
      id: 'evb-ex-3',
      kind: 'mcq',
      topic: 'judge-fix',
      question: { en: 'Judge crowns the longest answer. Fix?', bn: 'বিচারক দীর্ঘতম উত্তরকে অযৌক্তিকভাবে বিজয়ী ঘোষণা করলে সমাধান কী?' },
      options: [
        { en: 'Length penalty + human calibration + order shuffle', bn: 'দৈর্ঘ্য-দণ্ড + মানব-calibration + ক্রম-বদল' },
        { en: 'Longer prompts', bn: 'লম্বা-prompt' },
        { en: 'Bigger judge', bn: 'বড়-বিচারক' },
        { en: 'Trust it', bn: 'বিশ্বাস' },
      ],
      answer: 0,
      hint: { en: 'DEBUG warn’s cure.', bn: 'DEBUG সতর্কতা প্রতিকার।' },
      explanation: {
        en: 'Debias the grader: penalize verbosity, calibrate against human labels, shuffle positions — judges need evals too.',
        bn: 'পরীক্ষকের পক্ষপাত দূর করুন: শব্দাড়ম্বরে পেনাল্টি দিন, মানুষের দেওয়া লেবেলে ক্যালিব্রেট করুন, এবং বিকল্পের অবস্থান অদলবদল করুন।'
      },
    },
    {
      id: 'evb-ex-4',
      kind: 'predict',
      topic: 'launch-gate',
      question: { en: 'New model: MMLU +2, YOUR goldens −5. Ship? One-line ruling.', bn: 'নতুন মডেলে MMLU স্কোর +২ কিন্তু নিজস্ব গোল্ডেন টেস্টে স্কোর −৫ হলে কি রিলিজ দেবেন? এক লাইনে লিখুন।' },
      answer: 'Hold: goldens gate launches — generality gains never override task regressions.',
      accept: ['hold', 'golden', 'gate', 'regression', 'no', 'block'],
      hint: { en: 'YOUR distribution decides.', bn: 'আপনার কাজের ধরনই মূল সিদ্ধান্ত নেবে।' },
      explanation: {
        en: 'HOLD: your users live in your distribution, not MMLU’s. Ship when goldens clear — generality is a tiebreak, not a trump.',
        bn: 'রিলিজ স্থগিত রাখুন: আপনার ব্যবহারকারী আপনার ডোমেনের ওপর নির্ভরশীল, MMLU এর ওপর নয়। গোল্ডেন টেস্ট পাস করলেই কেবল রিলিজ দিন।'
      },
    },
  ],
  quiz: {
    id: 'evals-benchmarks-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'evbq1',
        kind: 'mcq',
        topic: 'formula-read',
        question: { en: 'pass@5 = 1 − C(6,5)/C(10,5). The fraction counts…', bn: 'pass@৫ = ১ − C(৬,৫)/C(১০,৫)। এই ভগ্নাংশটি কী গণনা করে?' },
        options: [
          { en: 'All-5-wrong draws over all draws', bn: 'সবগুলো ড্রয়ের মধ্যে ৫টিই ভুল হওয়ার সম্ভাবনা' },
          { en: 'Correct draws', bn: 'সঠিক উত্তরের সম্ভাবনা' },
          { en: 'Model parameters', bn: 'মডেলের প্যারামিটার সংখ্যা' },
          { en: 'Nothing meaningful', bn: 'অর্থপূর্ণ কোনো হিসাব নয়' },
        ],
        answer: 0,
        hint: { en: 'Complement counting.', bn: 'পূরক সম্ভাবনা গণনা।' },
        explanation: {
          en: 'P(win) = 1 − P(all 5 miss): C(6,5) all-wrong hands of C(10,5) possible — count failure, subtract from certainty.',
          bn: 'P(জয়) = ১ − P(৫টিই ভুল): মোট C(১০,৫) এর মধ্যে C(৬,৫) সব ভুল হওয়ার সম্ভাবনা, যা ১ থেকে বিয়োগ করা হয়।'
        },
      },
      {
        id: 'evbq2',
        kind: 'mcq',
        topic: 'single-collapse',
        question: { en: 'CORRECT 4 → 1. pass@5 becomes…', bn: 'সঠিক সমাধান ৪ থেকে কমে ১ হলে pass@৫ এর মান কত হবে?' },
        options: [
          { en: '0.50 — one solver in ten, five draws', bn: '০.৫০ — ১০টির মধ্যে ১টি সঠিক হলে ৫টি ড্রতে ০.৫০ হয়' },
          { en: '0.98 still', bn: 'তবুও ০.৯৮ থাকবে' },
          { en: '0.10', bn: '০.১০ হবে' },
          { en: '1.00', bn: '১.০০ হবে' },
        ],
        answer: 0,
        hint: { en: 'INSIDE’s last line.', bn: 'অভ্যন্তরীণ বিবরণের শেষ লাইন দেখুন।' },
        explanation: {
          en: '1 − C(9,5)/C(10,5) = 1 − 126/252 = 0.50: five draws catch the lone solver half the time. Verify in the tryit.',
          bn: '১ − C(৯,৫)/C(১০,৫) = ১ − ১২৬/২৫২ = ০.৫০: পাঁচটি চেষ্টার মধ্যে সেই একমাত্র সঠিক উত্তরটি পাওয়ার সম্ভাবনা ঠিক অর্ধেক।'
        },
      },
      {
        id: 'evbq3',
        kind: 'mcq',
        topic: 'harness-def',
        question: {
          en: 'In machine learning evaluation workflows, what is the core responsibility of an automated harness?',
          bn: 'মেশিন লার্নিং মূল্যায়ন প্রক্রিয়ায় একটি স্বয়ংক্রিয় হারনেস (harness) এর মূল দায়িত্ব কী?'
        },
        options: [
          { en: 'CI for intelligence: re-running all evaluation suites automatically on every change', bn: 'বুদ্ধিমত্তার জন্য সিআই: প্রতিটি প্রম্পট বা মডেল পরিবর্তনের সাথে সাথে স্বয়ংক্রিয়ভাবে সব টেস্ট স্যুট চালানো' },
          { en: 'A specialized cluster of larger server GPUs', bn: 'সার্ভারে ব্যবহৃত অতিরিক্ত শক্তিশালী জিপিইউ ক্লাস্টার' },
          { en: 'A static prompt template without testing logic', bn: 'টেস্টিং লজিকবিহীন কেবল একটি স্থির প্রম্পট টেমপ্লেট' },
          { en: 'A public leaderboard website', bn: 'একটি সর্বজনীন লিডারবোর্ড ওয়েবসাইট' },
        ],
        answer: 0,
        hint: { en: 'HOW’s roof.', bn: 'কিভাবে তৈরি করবেন তার শেষ ধাপ দেখুন।' },
        explanation: {
          en: 'Every model/prompt change re-runs goldens + suites: regressions block deploys automatically — tests for smarts.',
          bn: 'প্রতিটি পরিবর্তনের পর স্বয়ংক্রিয়ভাবে সব গোল্ডেন টেস্ট ও স্যুট পুনরায় চালিত হয়, যাতে কোনো অবনতি ঘটলে রিলিজ সাথে সাথে আটকে যায়।'
        },
      },
      {
        id: 'evbq4',
        kind: 'predict',
        topic: 'incident-golden',
        question: { en: 'Bot refunds twice for one order. Convert the incident to process in one line.', bn: 'একটি বট একই অর্ডারে দুবার রিফান্ড পাঠিয়ে ফেললে এই দুর্ঘটনাকে এক লাইনে নীতিমালায় রূপান্তর করুন।' },
        answer: 'Add double-refund cases to goldens; harness blocks until fixed.',
        accept: ['golden', 'harness', 'regression', 'test', 'add', 'block'],
        hint: { en: 'WHY #3: compound.', bn: 'কেন শিখবেন ৩ নম্বর কারণ দেখুন।' },
        explanation: {
          en: 'Incidents are golden seeds: encode the failure as tests, let the harness enforce the lesson forever.',
          bn: 'প্রতিটি দুর্ঘটনা এক একটি নতুন টেস্ট কেস: ভুলটিকে গোল্ডেন সেটে যোগ করে হারনেসের মাধ্যমে স্থায়ী সমাধান নিশ্চিত করুন।'
        },
      },
    ],
  },
  nextLesson: {
    slug: 'serving-deploy',
    title: { en: 'Serving and Deploy', bn: 'Serving এবং Deploy' },
  },
};