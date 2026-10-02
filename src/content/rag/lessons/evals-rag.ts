import type { Lesson } from '../../../lib/types';

export const EvalsRagLesson: Lesson = {
  slug: 'evals-rag',
  tech: 'rag',
  title: {
    en: 'RAG Evals',
    bn: 'RAG মূল্যায়ন — বিশ্বস্ততা ও কনটেক্সট প্রিসিশন গেটিং',
  },
  summary: {
    en: 'Production deployment requires paired metric dashboards: faithfulness at 5/6 ≈ 0.83 (generated answers reflect truth) combined with context precision at 4/5 = 0.80 (retrieved documents are relevant). Enforcing a minimum gate of min(0.83, 0.80) ≥ 0.80 authorizes production release while preventing single-metric blind spots.',
    bn: 'প্রোডাকশন ডেপ্লয়মেন্টের জন্য দ্বৈত মেট্রিক ড্যাশবোর্ড অপরিহার্য: ৫/৬ ≈ ০.৮৩ বিশ্বস্ততা (তৈরি করা উত্তর সত্যকে প্রতিফলিত করে) এবং ৪/৫ = ০.৮০ কনটেক্সট প্রিসিশন (রিট্রিভ করা নথি প্রাসঙ্গিক)। min(০.৮৩, ০.৮০) ≥ ০.৮০ এর একটি সর্বনিম্ন গেট প্রয়োগ করে সিস্টেমে রিলিজ অনুমোদন দেওয়া হয় যা একক মেট্রিকের অন্ধত্ব রোধ করে।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The launch dashboard', bn: 'WHAT — প্রোডাকশন ড্যাশবোর্ড এবং মানদণ্ড' },
    },
    {
      type: 'para',
      text: {
        en: 'In production generative AI pipelines, automated evaluations score both retrieval and generation stages simultaneously. Faithfulness evaluates generated text against context, confirming 5 of 6 claims (5/6 ≈ 0.83). Context precision evaluates whether retrieved evidence was actually necessary, confirming 4 of 5 chunks (4/5 = 0.80). Applying a minimum threshold rule yields min(0.83, 0.80) = 0.80 ≥ 0.80, granting an approved deployment verdict. Either sub-system holds full veto power.',
        bn: 'প্রোডাকশন জেনারেটিভ এআই পাইপলাইনে, স্বয়ংক্রিয় মূল্যায়ন রিট্রিভাল এবং জেনারেশন উভয় স্তরকে একসাথে বিচার করে। বিশ্বস্ততা মেট্রিক কনটেক্সটের সাপেক্ষে তৈরি টেক্সট যাচাই করে ৬টির মধ্যে ৫টি দাবি প্রমাণ করে (৫/৬ ≈ ০.৮৩)। অন্যদিকে কনটেক্সট প্রিসিশন পরীক্ষা করে রিট্রিভ করা প্রমাণ অপ্রয়োজনীয় ছিল কিনা, যা ৫টির মধ্যে ৪টি চাঙ্ক নিশ্চিত করে (৪/৫ = ০.৮০)। সর্বনিম্ন থ্রেশহোল্ড নীতি প্রয়োগ করলে min(০.৮৩, ০.৮০) = ০.৮০ পাওয়া যায় যা ০.৮০ সীমার সমান হওয়ায় সফল ডেপ্লয়মেন্টের রায় অনুমোদিত হয়। যেকোনো একটি দুর্বল অংশ সিস্টেমকে আটকে দেওয়ার পূর্ণ ক্ষমতা রাখে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Two dials, one gate', bn: 'দুটি মেট্রিক ডায়াল এবং একটি রিলিজ গেট' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Two metric dials and a ship gate">
<g font-size="13" font-weight="800" fill="currentColor">
<circle cx="160" cy="110" r="60" fill="#f0fdf4" stroke="#16a34a" stroke-width="3"/>
<text x="160" y="102" text-anchor="middle">0.83</text>
<text x="160" y="122" text-anchor="middle" font-size="11">faithful 5/6</text>
<circle cx="480" cy="110" r="60" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
<text x="480" y="102" text-anchor="middle">0.80</text>
<text x="480" y="122" text-anchor="middle" font-size="11">precise 4/5</text>
</g>
<text x="320" y="116" text-anchor="middle" font-size="22" font-weight="800" fill="currentColor">×</text>
<rect x="220" y="170" width="200" height="44" rx="10" fill="#16a34a"/>
<text x="320" y="198" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">min 0.80 → SHIP ✓</text>
<text x="320" y="60" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">answers true × retrieval clean</text>
<text x="320" y="236" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">either dial below 0.80 flips the gate to HOLD</text>
</svg>`,
      caption: {
        en: 'True generation combined with clean retrieval: pairing metrics ensures neither lucky hallucinations nor noisy documents reach production users.',
        bn: 'সত্য জেনারেশনের সাথে পরিচ্ছন্ন রিট্রিভাল: দ্বৈত মেট্রিক নিশ্চিত করে যে কোনো অনাকাঙ্ক্ষিত হ্যালুসিনেশন বা অর্থহীন নথি যাতে ব্যবহারকারীর কাছে না পৌঁছায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Context precision',
          def: {
            en: 'The proportion of retrieved document chunks that contain relevant, actionable evidence for answering the user query (such as 4/5 = 0.80).',
            bn: 'রিট্রিভ করা মোট নথির মধ্যে যতগুলো নথি ব্যবহারকারীর প্রশ্নের উত্তর দেওয়ার জন্য প্রাসঙ্গিক ও কার্যকর প্রমাণ ধারণ করে তার অনুপাত (যেমন ৪/৫ = ০.৮০)।',
          },
        },
        {
          term: 'Minimum deployment gate',
          def: {
            en: 'A production release rule that evaluates min(faithfulness, context_precision) against a hard threshold (such as 0.80), ensuring no weak stage slips into production.',
            bn: 'একটি রিলিজ নীতি যা একটি কঠোর সীমার (যেমন ০.৮০) বিপরীতে min(বিশ্বস্ততা, কনটেক্সট_প্রিসিশন) মূল্যায়ন করে, যা নিশ্চিত করে কোনো দুর্বল ধাপ প্রোডাকশনে প্রবেশ করতে পারবে না।',
          },
        },
        {
          term: 'RAGAS evaluation suite',
          def: {
            en: 'An open-source evaluation framework that automates the computation of faithfulness, answer relevance, and context recall using frozen golden datasets.',
            bn: 'একটি ওপেন-সোর্স মূল্যায়ন ফ্রেমওয়ার্ক যা নির্দিষ্ট গোল্ডেন ডেটাসেট ব্যবহার করে বিশ্বস্ততা, উত্তরের প্রাসঙ্গিকতা এবং কনটেক্সট রিকলের হিসাব স্বয়ংক্রিয়ভাবে পরিচালনা করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Halves hide sins', bn: 'কেন — একক মেট্রিক ব্যবস্থার ত্রুটি লুকিয়ে রাখে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Faithfulness 1.00 paired with precision 0.20 indicates accidental success: the model found an answer despite 80% of retrieved context being irrelevant junk.', bn: 'বিশ্বস্ততা ১.০০ কিন্তু প্রিসিশন ০.২০ হওয়া আকস্মিক ভাগ্যের প্রমাণ: ৮০% অপ্রাসঙ্গিক আবর্জনার মধ্যেও মডেল কোনোভাবে সঠিক উত্তরটি খুঁজে পেয়েছে।' },
        { en: 'Faithfulness 0.40 paired with precision 1.00 indicates a generator defect: retrieval provided immaculate evidence, but the writer hallucinated.', bn: 'বিশ্বস্ততা ০.৪০ এবং প্রিসিশন ১.০০ জেনারেটরের ত্রুটি নির্দেশ করে: রিট্রিভাল নিখুঁত তথ্য দিলেও লেখার সময় মডেল কাল্পনিক মিথ্যা বানিয়েছে।' },
        { en: 'Minimum gates eradicate single-sided deception: evaluating min(dials) prevents a strong retrieval system from masking an unreliable generator.', bn: 'সর্বনিম্ন গেট একপেশে ধোঁকা দূর করে: ডায়ালগুলোর সর্বনিম্ন মান পরীক্ষা করলে শক্তিশালী রিট্রিভারের আড়ালে দুর্বল জেনারেটরের ত্রুটি ঢাকা পড়তে পারে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Gate in 4 steps', bn: 'HOW — ৪টি ধাপে ডেপ্লয়মেন্ট গেটিং' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Score faithfulness', bn: '১. বিশ্বস্ততা নির্ণয়' }, text: { en: 'Measure supported claims over generated assertions (5/6 ≈ 0.83).', bn: 'মোট দাবির মধ্যে সমর্থিত দাবির অনুপাত পরিমাপ করুন (৫/৬ ≈ ০.৮৩)।' } },
        { title: { en: '2. Score precision', bn: '২. প্রিসিশন নির্ণয়' }, text: { en: 'Measure actionable chunks over retrieved documents (4/5 = 0.80).', bn: 'রিট্রিভ করা নথির মধ্যে দরকারি তথ্যের অনুপাত পরিমাপ করুন (৪/৫ = ০.৮০)।' } },
        { title: { en: '3. Extract minimum', bn: '৩. সর্বনিম্ন মান গ্রহণ' }, text: { en: 'Calculate min(0.83, 0.80) = 0.80.', bn: 'দুটোর সর্বনিম্ন মান নির্ধারণ করুন: min(০.৮৩, ০.৮০) = ০.৮০।' } },
        { title: { en: '4. Execute gate', bn: '৪. গেট রায় নির্ধারণ' }, text: { en: 'Verify min ≥ 0.80 threshold to grant SHIP verdict.', bn: 'নিশ্চিত করুন মানটি ০.৮০ এর সমান বা বেশি যাতে SHIP রায় দেওয়া যায়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'rag_eval_dashboard.py',
      code: `def evaluate_rag_gate(faith_flags, prec_flags, threshold=0.80):
    faithfulness = sum(faith_flags) / len(faith_flags)
    precision = sum(prec_flags) / len(prec_flags)
    min_score = min(faithfulness, precision)
    verdict = "SHIP" if min_score >= threshold else "HOLD"
    return faithfulness, precision, min_score, verdict

# Standard dashboard: 5/6 faith (0.83) x 4/5 prec (0.80)
faith = [1, 1, 1, 1, 0, 1]
prec = [1, 1, 1, 0, 1]
f_score, p_score, m_score, verdict = evaluate_rag_gate(faith, prec, threshold=0.80)

print("Production RAG Evaluation Dashboard:")
print(f"Faithfulness: {sum(faith)}/{len(faith)} = {f_score:.2f} (~0.83)")
print(f"Context Precision: {sum(prec)}/{len(prec)} = {p_score:.2f} (0.80)")
print(f"Gate evaluation: min({f_score:.2f}, {p_score:.2f}) = {m_score:.2f} (bar: 0.80) -> {verdict}")

# Regressed run: one more faith failure (4/6 = 0.67)
faith_regressed = [1, 1, 1, 0, 0, 1]
f_r, p_r, m_r, verdict_r = evaluate_rag_gate(faith_regressed, prec, threshold=0.80)
print(f"\\nRegressed Run (4/6 faith): min({f_r:.2f}, {p_r:.2f}) = {m_r:.2f} -> {verdict_r} (vetoed by faithfulness)")

# Output:
# Production RAG Evaluation Dashboard:
# Faithfulness: 5/6 = 0.83 (~0.83)
# Context Precision: 4/5 = 0.80 (0.80)
# Gate evaluation: min(0.83, 0.80) = 0.80 (bar: 0.80) -> SHIP
#
# Regressed Run (4/6 faith): min(0.67, 0.80) = 0.67 -> HOLD (vetoed by faithfulness)`,
      caption: {
        en: 'The Python simulation evaluates production gating. Faithfulness 5/6 ≈ 0.83 and context precision 4/5 = 0.80 yield min(0.83, 0.80) = 0.80, passing the gate (SHIP); introducing one more ungrounded claim drops faithfulness to 4/6 ≈ 0.67, immediately triggering a HOLD.',
        bn: 'পাইথন সিমুলেশন প্রোডাকশন গেট মূল্যায়ন করে। ০.৮৩ বিশ্বস্ততা এবং ০.৮০ কনটেক্সট প্রিসিশন থেকে min(০.৮৩, ০.৮০) = ০.৮০ পাওয়া যায় যা গেট পার করে (SHIP); আরেকটি অপ্রমাণিত দাবি যোগ করলে বিশ্বস্ততা কমে ৪/৬ ≈ ০.৬৭ হয় এবং সাথে সাথে HOLD সক্রিয় হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive release gate lab', bn: 'INSIDE — জীবন্ত রিলিজ গেট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator gates pipeline releases by comparing faithfulness [1,1,1,1,0,1] (0.83) with context precision [1,1,1,0,1] (0.80). Because min(0.83, 0.80) = 0.80 meets the 0.80 release threshold, the system displays SHIP. If you flip one more faithfulness entry to 0, score drops to 4/6 ≈ 0.67, triggering an immediate HOLD.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি [১,১,১,১,০,১] (০.৮৩) বিশ্বস্ততার সাথে [১,১,১,০,১] (০.৮০) কনটেক্সট প্রিসিশন তুলনা করে রিলিজ গেট পরিচালনা করে। যেহেতু min(০.৮৩, ০.৮০) = ০.৮০ নির্ধারিত ০.৮০ সীমা পূরণ করে, সিস্টেম SHIP প্রদর্শন করে। বিশ্বস্ততার আরেকটি মান ০ করলে স্কোর কমে ৪/৬ ≈ ০.৬৭ হয় এবং তাৎক্ষণিক HOLD সক্রিয় হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Gate lab (sink a flag, press Run)', bn: 'Gate lab (flag ডোবান, Run)' },
      html: '<h3>Gate the launch</h3>\n<pre id="out"></pre>\n<p>Console scores both dials.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #4f46e5; border-radius: 8px; padding: 10px; }',
      js: 'const faith = [1, 1, 1, 1, 0, 1]; // ← flip another to 0!\nconst prec = [1, 1, 1, 0, 1];\nconst f = faith.reduce((a,b) => a+b, 0) / faith.length;\nconst p = prec.reduce((a,b) => a+b, 0) / prec.length;\nconsole.log("faithfulness " + f.toFixed(2) + " · ctx precision " + p.toFixed(2));\nconst m = Math.min(f, p);\ndocument.getElementById("out").textContent = "min " + m.toFixed(2) + (m >= 0.80 ? " → SHIP ✓" : " → HOLD ✗") + " 🚦";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Gate instincts', bn: 'ফলাফল — মূল্যায়ন গেটিংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Dual qualification: min(0.83, 0.80) = 0.80 authorizes production deployment by verifying both ends of the pipeline.', bn: 'দ্বৈত যোগ্যতা: min(০.৮৩, ০.৮০) = ০.৮০ পাইপলাইনের উভয় প্রান্ত যাচাই করে প্রোডাকশনে ডেপ্লয়মেন্টের অনুমতি দেয়।' },
        { en: 'Decisive veto: introducing a second ungrounded statement drops faithfulness to 0.67, causing the minimum gate to veto release.', bn: 'কঠোর ভেটো ক্ষমতা: দ্বিতীয় একটি অপ্রমাণিত বক্তব্য যুক্ত হলে বিশ্বস্ততা ০.৬৭ এ নেমে আসে এবং রিলিজ আটকে যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Eval traps', bn: 'ডিবাগ — মূল্যায়ন প্রক্রিয়ার ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Single-metric fraud (the lonely dial)', bn: 'একক মেট্রিকের প্রতারণা (Single-metric fraud)' },
      text: {
        en: 'Deploying systems based entirely on high faithfulness scores masks poor retrieval: an answer with 0.95 faithfulness generated from 0.30 context precision succeeds purely on luck. Symptoms: pipelines look green in benchmarks but fail randomly in production. Cure: enforce a minimum gate requiring both faithfulness and precision to clear 0.80.',
        bn: 'কেবল উচ্চ বিশ্বস্ততার ওপর নির্ভর করে সিস্টেম ডেপ্লয় করলে দুর্বল রিট্রিভাল ঢাকা পড়ে যায়: ০.৩০ প্রিসিশন থেকে পাওয়া ০.৯৫ বিশ্বস্ততার উত্তর কেবল ভাগ্যের ওপর টিকে থাকে। লক্ষণ: টেস্টে সিস্টেম ভালো দেখালেও বাস্তবে আকস্মিক ব্যর্থ হওয়া। প্রতিকার: সর্বদা দ্বৈত গেট ব্যবহার করে উভয় মেট্রিক ০.৮০ অতিক্রম করা বাধ্যতামূলক করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Golden sets (the frozen truth)', bn: 'গোল্ডেন টেস্ট সেটের স্থায়িত্ব (Golden sets)' },
      text: {
        en: 'Evaluation suites require immutable benchmark datasets: re-running the exact same 50 golden questions on every build makes performance drift visible. Symptoms: scores wobble between runs without code changes. Cure: freeze a curated golden set of 50 enterprise Q&A pairs in version control.',
        bn: 'মূল্যায়ন ফ্রেমওয়ার্কের জন্য অপরিবর্তনীয় টেস্ট ডেটাসেট প্রয়োজন: প্রতি বিল্ডে হুবহু একই ৫০টি গোল্ডেন প্রশ্ন চালালে পারফরম্যান্সের বিচ্যুতি ধরা পড়ে। লক্ষণ: কোড পরিবর্তন না করলেও স্কোরের তারতম্য হওয়া। প্রতিকার: প্রতিষ্ঠানের ৫০টি আদর্শ প্রশ্ন-উত্তরের সেট ভার্সন কন্ট্রোলে জমাট করে রাখুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production evaluation suites', bn: 'বাস্তব ক্ষেত্র — আধুনিক এআই মূল্যায়ন ফ্রেমওয়ার্ক' },
    },
    {
      type: 'list',
      items: [
        { en: 'Ragas open-source framework: computes automated end-to-end scores for faithfulness, context precision, and harmonic RAG metrics.', bn: 'Ragas ওপেন-সোর্স ফ্রেমওয়ার্ক: বিশ্বস্ততা, কনটেক্সট প্রিসিশন এবং সমন্বিত মেট্রিক্সের স্বয়ংক্রিয় হিসাব করে।' },
        { en: 'TruLens and Arize Phoenix: stream real-time production telemetry and trigger automated alerts when context precision dips.', bn: 'TruLens এবং Arize Phoenix: প্রোডাকশনের রিয়েল-টাইম টেলিমেট্রি পর্যবেক্ষণ করে এবং প্রিসিশন কমে গেলে অ্যালার্ট জারি করে।' },
        { en: 'LangSmith CI/CD pipelines: automatically block pull request merges if synthetic golden-set evaluation scores regress below target bars.', bn: 'LangSmith CI/CD পাইপলাইন: গোল্ডেন সেটের স্কোর লক্ষ্যমাত্রার নিচে নামলে পুল রিকোয়েস্ট মার্জ হওয়া স্বয়ংক্রিয়ভাবে আটকে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — RAG Capstone', bn: 'পরবর্তী পাঠ — RAG ক্যাপস্টোন' },
    },
    {
      type: 'para',
      text: {
        en: 'With evaluation metrics verified, Lesson 8 unites all components in an end-to-end production capstone: from query parsing and hybrid fusion to context budgeting, claim auditing, and final launch signing.',
        bn: 'মূল্যায়ন মেট্রিক্স নিশ্চিত করার পর, পাঠ ৮ আগের সব উপাদানকে একটি পূর্ণাঙ্গ প্রোডাকশন ক্যাপস্টোনে একত্রিত করবে: কুয়েরি পার্সিং ও হাইব্রিড ফিউশন থেকে শুরু করে কনটেক্সট বাজেট, দাবি নিরীক্ষা এবং রিলিজ অনুমোদন পর্যন্ত।',
      },
    },
  ],
  exercises: [
    {
      id: 'eva-ex-1',
      kind: 'mcq',
      topic: 'min-compute',
      question: {
        en: 'When a pipeline scores 0.83 in faithfulness and 0.80 in context precision against an 0.80 threshold, what is the deployment verdict?',
        bn: 'যখন একটি পাইপলাইন ০.৮০ থ্রেশহোল্ডের বিপরীতে ০.৮৩ বিশ্বস্ততা এবং ০.৮০ কনটেক্সট প্রিসিশন অর্জন করে, তখন ডেপ্লয়মেন্টের চূড়ান্ত রায় কী?',
      },
      options: [
        { en: 'min(0.83, 0.80) = 0.80 ≥ 0.80 → SHIP verdict', bn: 'min(০.৮৩, ০.৮০) = ০.৮০ ≥ ০.৮০ → SHIP রায়' },
        { en: '0.83 → SHIP verdict while ignoring precision', bn: 'প্রিসিশন উপেক্ষা করে কেবল ০.৮৩ দেখে SHIP রায়' },
        { en: '0.80 → HOLD verdict because scores must strictly exceed 0.90', bn: '০.৮০ → HOLD রায় কারণ স্কোর অবশ্যই ০.৯০ এর বেশি হতে হবে' },
        { en: '0.415 → average score failure', bn: '০.৪১৫ → গড় স্কোরের ব্যর্থতা' },
      ],
      answer: 0,
      hint: { en: 'The minimum of 0.83 and 0.80 is 0.80, which clears the 0.80 bar.', bn: '০.৮৩ এবং ০.৮০ এর মধ্যে সর্বনিম্ন হলো ০.৮০, যা নির্ধারিত সীমা অতিক্রম করে।' },
      explanation: {
        en: 'The minimum gate takes the lower score (0.80), which exactly matches the 0.80 threshold, authorizing a green SHIP verdict.',
        bn: 'সর্বনিম্ন গেট দুর্বল মানটিকে (০.৮০) গ্রহণ করে, যা ০.৮০ থ্রেশহোল্ডের সমান হওয়ায় ডেপ্লয়মেন্টের সবুজ SHIP রায় অনুমোদিত হয়।',
      },
    },
    {
      id: 'eva-ex-2',
      kind: 'mcq',
      topic: 'veto-math',
      question: {
        en: 'If faithfulness drops from 5/6 (0.83) down to 4/6 (0.67) while context precision remains at 0.80, what is the new gate verdict?',
        bn: 'যদি কনটেক্সট প্রিসিশন ০.৮০ অপরিবর্তিত রেখে বিশ্বস্ততা ৫/৬ (০.৮৩) থেকে কমে ৪/৬ (০.৬৭) এ নেমে আসে, তবে নতুন গেট রায় কী হবে?',
      },
      options: [
        { en: 'min(0.67, 0.80) = 0.67 < 0.80 → HOLD verdict (vetoed)', bn: 'min(০.৬৭, ০.৮০) = ০.৬৭ < ০.৮০ → HOLD রায় (বাতিল)' },
        { en: '0.67 → SHIP verdict because precision is still 0.80', bn: 'প্রিসিশন ০.৮০ থাকায় ০.৬৭ থাকা সত্ত্বেও SHIP রায়' },
        { en: '0.80 → SHIP verdict using maximum instead of minimum', bn: 'সর্বনিম্ন বাদ দিয়ে সর্বোচ্চ মান নিয়ে ০.৮০ এ SHIP রায়' },
        { en: 'Unchanged deployment state', bn: 'অপরিবর্তিত ডেপ্লয়মেন্ট অবস্থা' },
      ],
      answer: 0,
      hint: { en: '4/6 ≈ 0.67, which falls below the 0.80 requirement.', bn: '৪/৬ ≈ ০.৬৭, যা ০.৮০ এর নিচে নেমে যায়।' },
      explanation: {
        en: 'A drop to 4/6 yields 0.67. Since min(0.67, 0.80) = 0.67 is below the 0.80 bar, the release gate immediately triggers a HOLD.',
        bn: '৪/৬ এ নামলে স্কোর ০.৬৭ হয়। যেহেতু ০.৬৭ নির্ধারিত ০.৮০ সীমার নিচে, তাই গেট তাৎক্ষণিকভাবে রিলিজ বাতিল করে HOLD সক্রিয় করে।',
      },
    },
    {
      id: 'eva-ex-3',
      kind: 'mcq',
      topic: 'fraud-pair',
      question: {
        en: 'What dangerous system condition is present when an evaluation shows 0.95 faithfulness but only 0.30 context precision?',
        bn: 'যখন একটি মূল্যায়নে ০.৯৫ বিশ্বস্ততা অথচ মাত্র ০.৩০ কনটেক্সট প্রিসিশন দেখা যায়, তখন সিস্টেমে কোন বিপজ্জনক অবস্থা বিরাজ করে?',
      },
      options: [
        {
          en: 'Accidental success: the generator found an answer despite 70% irrelevant context; min-gate 0.30 correctly vetoes release',
          bn: 'আকস্মিক সাফল্য: ৭০% অপ্রাসঙ্গিক কনটেক্সট থাকা সত্ত্বেও জেনারেটর ভাগ্যক্রমে উত্তর পেয়েছে; ০.৩০ গেট সঠিকভাবে রিলিজ বাতিল করে',
        },
        {
          en: 'A perfect production launch with excellent resilience',
          bn: 'চমৎকার সহনশীলতাসহ একটি নিখুঁত প্রোডাকশন রিলিজ',
        },
        {
          en: 'Context precision is excessively high for standard models',
          bn: 'স্ট্যান্ডার্ড মডেলের তুলনায় কনটেক্সট প্রিসিশন অতিরিক্ত বেশি',
        },
        {
          en: 'A harmless metric artifact with zero practical significance',
          bn: 'একটি নিরীহ মেট্রিক যার কোনো ব্যবহারিক গুরুত্ব নেই',
        },
      ],
      answer: 0,
      hint: { en: 'True answers drawn from noisy retrieval represent luck rather than reliability.', bn: 'আবর্জনাপূর্ণ তথ্যের ভেতর থেকে সঠিক উত্তর পাওয়া স্থিতিশীলতার লক্ষণ নয়, ভাগ্যের ব্যাপার।' },
      explanation: {
        en: 'High faithfulness with abysmal precision indicates luck: min(0.95, 0.30) = 0.30 halts the pipeline before regressions bite.',
        bn: 'দুর্বল প্রিসিশনে উচ্চ বিশ্বস্ততা ভাগ্যের ওপর নির্ভরতা বোঝায়: min(০.৯৫, ০.৩০) = ০.৩০ সিস্টেমকে প্রোডাকশনের ক্ষতি থেকে রক্ষা করে।',
      },
    },
    {
      id: 'eva-ex-4',
      kind: 'predict',
      topic: 'golden-why',
      question: {
        en: 'When evaluation metrics fluctuate wildly from one test execution to the next, what foundational practice was omitted and how is it repaired?',
        bn: 'যখন এক টেস্ট রান থেকে অন্য রানে মূল্যায়ন মেট্রিক্সের ব্যাপক ওঠানামা দেখা যায়, তখন কোন মৌলিক পদ্ধতি বাদ পড়েছিল এবং তা কীভাবে সংশোধন করা যায়?',
      },
      answer: 'No golden set: freeze 50 Q&A pairs, measure against stone.',
      accept: ['golden', 'freeze', 'frozen', 'fixed', 'wobble', 'same', 'stone', 'drift'],
      hint: { en: 'State lack of a golden set and freezing 50 Q&A pairs to measure against stone.', bn: 'গোল্ডেন সেটের অনুপস্থিতি এবং নির্ভরযোগ্য পরিমাপের জন্য ৫০টি প্রশ্ন-উত্তরের সেট জমাট রাখার কথা বলুন।' },
      explanation: {
        en: 'Evaluating against moving targets causes metric wobble. Freezing a fixed golden set of 50 benchmark queries establishes consistent measurements.',
        bn: 'পরিবর্তনশীল প্রশ্নে মূল্যায়ন করলে স্কোরের ওঠানামা হয়। ৫০টি স্থির গোল্ডেন প্রশ্ন ব্যবহার করলে সুনির্দিষ্ট মানদণ্ড বজায় থাকে।',
      },
    },
  ],
  quiz: {
    id: 'evals-rag-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'evaq1',
        kind: 'mcq',
        topic: 'ctxprec-mean',
        question: {
          en: 'What architectural ratio does context precision evaluate in a retrieval-augmented generation pipeline?',
          bn: 'একটি রিট্রিভাল-অগমেন্টেড জেনারেশন পাইপলাইনে কনটেক্সট প্রিসিশন কোন স্থাপত্য অনুপাতটি মূল্যায়ন করে?',
        },
        options: [
          {
            en: 'The ratio of relevant, actionable document chunks to total retrieved chunks (4/5 = 0.80)',
            bn: 'মোট রিট্রিভ করা নথির মধ্যে প্রাসঙ্গিক ও কার্যকর নথির অনুপাত (৪/৫ = ০.৮০)',
          },
          {
            en: 'The ratio of supported claims to total generated sentences',
            bn: 'তৈরি করা মোট বাক্যের মধ্যে সমর্থিত দাবির অনুপাত',
          },
          {
            en: 'The number of rewritten probes per incoming user query',
            bn: 'ব্যবহারকারীর কুয়েরি প্রতি তৈরি বিকল্প প্রশ্নের সংখ্যা',
          },
          {
            en: 'The throughput in tokens per second on inference hardware',
            bn: 'ইনফারেন্স হার্ডওয়্যারে প্রতি সেকেন্ডে টোকেন প্রসেসিং থ্রুপুট',
          },
        ],
        answer: 0,
        hint: { en: 'Context precision measures retrieval signal-to-noise ratio.', bn: 'কনটেক্সট প্রিসিশন রিট্রিভাল তথ্যের কার্যকারিতা পরিমাপ করে।' },
        explanation: {
          en: 'Context precision quantifies how clean retrieval is: 4 useful chunks out of 5 yields 0.80, penalizing irrelevant noise.',
          bn: 'কনটেক্সট প্রিসিশন তথ্যের পরিচ্ছন্নতা যাচাই করে: ৫টির মধ্যে ৪টি দরকারি হলে ০.৮০ হয় এবং অপ্রাসঙ্গিক তথ্যের জন্য পেনাল্টি পায়।',
        },
      },
      {
        id: 'evaq2',
        kind: 'mcq',
        topic: 'pair-rule',
        question: {
          en: 'Why must engineering teams enforce paired metric gates rather than relying exclusively on a single high evaluation score?',
          bn: 'ইঞ্জিনিয়ারিং টিমগুলোর কেন একক উচ্চ স্কোরের ওপর নির্ভর না করে দ্বৈত মেট্রিক গেট প্রয়োগ করা বাধ্যতামূলক?',
        },
        options: [
          {
            en: 'One metric alone hides systemic flaws: pairing faithfulness with context precision exposes both lucky guesses and hallucinating writers',
            bn: 'একক মেট্রিক অভ্যন্তরীণ ত্রুটি লুকিয়ে রাখে: বিশ্বস্ততার সাথে প্রিসিশন সমন্বয় করলে ভাগ্যের ওপর নির্ভরতা এবং কাল্পনিক মিথ্যা দুটোই ধরা পড়ে',
          },
          {
            en: 'Visual dashboards require multiple circles to fill screen space',
            bn: 'ভিজ্যুয়াল ড্যাশবোর্ডের স্ক্রিনের জায়গা ভরাট করতে একাধিক বৃত্তের দরকার হয়',
          },
          {
            en: 'Ragas documentation strictly forbids single-variable algebra',
            bn: 'Ragas এর নিয়মাবলীতে একক চলক ব্যবহার কঠোরভাবে নিষিদ্ধ',
          },
          {
            en: 'Multiplication formulas only function when supplied with two numbers',
            bn: 'গুণের সূত্রগুলো কেবল দুটি সংখ্যা পেলেই কাজ করতে পারে',
          },
        ],
        answer: 0,
        hint: { en: 'Isolated metrics conceal underlying component failures.', bn: 'বিচ্ছিন্ন মেট্রিক অভ্যন্তরীণ অংশের ব্যর্থতা ঢেকে রাখে।' },
        explanation: {
          en: 'Single metrics permit blind spots: high precision with low faithfulness means the model lies; low precision with high faithfulness means pure luck. Pairs police both.',
          bn: 'একক মেট্রিক অন্ধত্ব তৈরি করে: প্রিসিশন ভালো কিন্তু বিশ্বস্ততা কম হলে মডেল মিথ্যা বলে; আর বিপরীত হলে ভাগ্যক্রমে সাফল্য আসে। জোড়া মেট্রিক দুটোই রক্ষা করে।',
        },
      },
      {
        id: 'evaq3',
        kind: 'mcq',
        topic: 'gate-bar',
        question: {
          en: 'What mathematical rule defines the production launch bar in this evaluation framework?',
          bn: 'এই মূল্যায়ন ফ্রেমওয়ার্কে প্রোডাকশন রিলিজের মানদণ্ড কোন গাণিতিক নিয়মের মাধ্যমে নির্ধারিত হয়?',
        },
        options: [
          {
            en: 'min(faithfulness, context_precision) ≥ 0.80',
            bn: 'min(বিশ্বস্ততা, কনটেক্সট_প্রিসিশন) ≥ ০.৮০',
          },
          {
            en: 'average(faithfulness, context_precision) ≥ 0.50',
            bn: 'গড়(বিশ্বস্ততা, কনটেক্সট_প্রিসিশন) ≥ ০.৫০',
          },
          {
            en: 'max(faithfulness, context_precision) = 1.00',
            bn: 'max(বিশ্বস্ততা, কনটেক্সট_প্রিসিশন) = ১.০০',
          },
          {
            en: 'sum(faithfulness, context_precision) ≥ 2.00',
            bn: 'যোগফল(বিশ্বস্ততা, কনটেক্সট_প্রিসিশন) ≥ ২.০০',
          },
        ],
        answer: 0,
        hint: { en: 'The weakest link must clear the 0.80 bar.', bn: 'সবচেয়ে দুর্বল অংশটিকেও অবশ্যই ০.৮০ সীমা পার করতে হবে।' },
        explanation: {
          en: 'Evaluating the minimum ensures that neither retrieval cleanliness nor generation truthfulness falls below the acceptable 0.80 bar.',
          bn: 'সর্বনিম্ন মান যাচাই নিশ্চিত করে যে তথ্যের পরিচ্ছন্নতা বা উত্তরের সত্যতা কোনোটিই গ্রহণযোগ্য ০.৮০ সীমার নিচে নামবে না।',
        },
      },
      {
        id: 'evaq4',
        kind: 'predict',
        topic: 'dash-recite',
        question: {
          en: 'What four benchmark figures summarize the evaluation dashboard examined in this lesson?',
          bn: 'এই পাঠে আলোচিত মূল্যায়ন ড্যাশবোর্ডটিকে সংক্ষেপে প্রকাশ করে এমন চারটি মূল পরিমাপ কী কী?',
        },
        answer: 'Faith 0.83 · precision 0.80 · min 0.80 → SHIP.',
        accept: ['0.83', '0.80', 'min', 'SHIP', 'faith', 'precision'],
        hint: { en: 'Faithfulness score, context precision score, minimum value, and deployment verdict.', bn: 'বিশ্বস্ততা স্কোর, কনটেক্সট প্রিসিশন স্কোর, সর্বনিম্ন মান এবং ডেপ্লয়মেন্টের রায় উল্লেখ করুন।' },
        explanation: {
          en: 'The evaluation dashboard: faithfulness 0.83, context precision 0.80, minimum value 0.80, yielding a green SHIP release verdict.',
          bn: 'মূল্যায়ন ড্যাশবোর্ড: বিশ্বস্ততা ০.৮৩, কনটেক্সট প্রিসিশন ০.৮০, সর্বনিম্ন মান ০.৮০, যা চূড়ান্ত সবুজ SHIP রায় অনুমোদন করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'rag-capstone',
    title: { en: 'RAG Capstone', bn: 'RAG Capstone' },
  },
};
