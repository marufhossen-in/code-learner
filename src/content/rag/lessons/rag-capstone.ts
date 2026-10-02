import type { Lesson } from '../../../lib/types';

export const RagCapstoneLesson: Lesson = {
  slug: 'rag-capstone',
  tech: 'rag',
  title: {
    en: 'RAG Capstone',
    bn: 'RAG ক্যাপস্টোন — এন্ড-টু-এন্ড প্রোডাকশন পাইপলাইন ডেপ্লয়মেন্ট',
  },
  summary: {
    en: 'Deploy an end-to-end production RAG pipeline: rewrite 1 query into 3 probes, retrieve a deduplicated union of 5 chunks, generate 6 claims, and verify that 5 are supported. With faithfulness at 0.83 and context precision at 0.80, the pipeline clears the 0.80 minimum gate for production deployment.',
    bn: 'একটি পূর্ণাঙ্গ প্রোডাকশন RAG পাইপলাইন ডেপ্লয় করুন: ১টি কুয়েরি থেকে ৩টি প্রব তৈরি, ৫টি চাঙ্কের ডুপ্লিকেটহীন ইউনিয়ন রিট্রিভ, ৬টি বক্তব্য তৈরি এবং এর মধ্যে ৫টি সমর্থিত প্রমাণ করা। ০.৮৩ বিশ্বস্ততা এবং ০.৮০ কনটেক্সট প্রিসিশন অর্জন করে পাইপলাইনটি ০.৮০ সর্বনিম্ন গেট অতিক্রম করে প্রোডাকশন ডেপ্লয়মেন্টের অনুমোদন লাভ করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The whole pipeline, one verdict', bn: 'WHAT — পূর্ণাঙ্গ পাইপলাইন এবং সমন্বিত সিদ্ধান্ত' },
    },
    {
      type: 'para',
      text: {
        en: 'A production retrieval-augmented generation system connects every architectural component into a unified operational pipeline. When a user asks about refund policies, the pipeline first generates 3 diverse query rewrites. Next, it retrieves 5 deduplicated candidate chunks across parallel searches, verifying that 4 of 5 are relevant (0.80 context precision). The model then synthesizes 6 factual claims, with 5 supported by context evidence (0.83 faithfulness). Finally, an automated gate checks min(0.83, 0.80) = 0.80 ≥ 0.80 to authorize production release.',
        bn: 'একটি প্রোডাকশন রিট্রিভাল-অগমেন্টেড জেনারেশন সিস্টেম প্রতিটি স্থাপত্য উপাদানকে একটি সমন্বিত পাইপলাইনে সংযুক্ত করে। যখন একজন ব্যবহারকারী রিফান্ড পলিসি নিয়ে প্রশ্ন করেন, পাইপলাইনটি প্রথমে ৩টি ভিন্ন কুয়েরি রূপ তৈরি করে। এরপর সমান্তরাল অনুসন্ধানের মাধ্যমে ৫টি অনন্য নথির ইউনিয়ন উদ্ধার করে যার মধ্যে ৪টি প্রাসঙ্গিক বলে প্রমাণিত হয় (০.৮০ কনটেক্সট প্রিসিশন)। এরপর মডেলটি ৬টি তথ্যভিত্তিক বক্তব্য খসড়া করে যার মধ্যে ৫টি নথির প্রমাণে সমর্থিত (০.৮৩ বিশ্বস্ততা)। সবশেষে স্বয়ংক্রিয় গেট min(০.৮৩, ০.৮০) = ০.৮০ যাচাই করে প্রোডাকশনে ডেপ্লয়মেন্টের সবুজ সংকেত দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Five stages, one verdict', bn: 'পাঁচটি সুবিন্যস্ত পর্যায় এবং একটি অনুমোদন রায়' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="End to end RAG pipeline">
<g font-size="11" font-weight="700" fill="currentColor">
<rect x="10" y="80" width="105" height="60" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="62" y="102" text-anchor="middle">REWRITE</text>
<text x="62" y="120" text-anchor="middle">1 → 3</text>
<rect x="135" y="80" width="105" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="187" y="102" text-anchor="middle">RETRIEVE</text>
<text x="187" y="120" text-anchor="middle">union 5</text>
<rect x="260" y="80" width="105" height="60" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="312" y="102" text-anchor="middle">GENERATE</text>
<text x="312" y="120" text-anchor="middle">6 claims</text>
<rect x="385" y="80" width="105" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="437" y="102" text-anchor="middle">GROUND</text>
<text x="437" y="120" text-anchor="middle">5 ✓ 1 ✗</text>
<rect x="510" y="80" width="120" height="60" rx="8" fill="#16a34a"/>
<text x="570" y="102" text-anchor="middle" fill="#fff">GATE 0.80</text>
<text x="570" y="120" text-anchor="middle" fill="#fff">SHIP ✓</text>
</g>
<g font-size="16" font-weight="800" fill="currentColor">
<text x="125" y="116" text-anchor="middle">→</text>
<text x="250" y="116" text-anchor="middle">→</text>
<text x="375" y="116" text-anchor="middle">→</text>
<text x="500" y="116" text-anchor="middle">→</text>
</g>
<text x="320" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">“refund policy?” → LAUNCH DECISION</text>
<text x="187" y="170" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">ctx precision 4/5 = 0.80</text>
<text x="437" y="170" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">faith 5/6 ≈ 0.83</text>
<text x="320" y="205" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">sink one floor: 4/6 ≈ 0.67 → the same gate HOLDS</text>
</svg>`,
      caption: {
        en: 'The complete serving chain connects query expansion, deduplicated retrieval, prompt budgeting, claim generation, and dual-metric gating.',
        bn: 'সম্পূর্ণ পাইপলাইন কুয়েরি সম্প্রসারণ, ডুপ্লিকেটহীন অনুসন্ধান, প্রম্পট বাজেট, বক্তব্য তৈরি এবং দ্বৈত মেট্রিক গেটকে একসূত্রে বাঁধে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'End-to-end RAG pipeline',
          def: {
            en: 'The complete software architecture connecting query expansion, hybrid retrieval, context budgeting, grounded generation, and automated metric gating.',
            bn: 'সম্পূর্ণ সফটওয়্যার আর্কিটেকচার যা কুয়েরি সম্প্রসারণ, হাইব্রিড রিট্রিভাল, কনটেক্সট বাজেট, তথ্যভিত্তিক জেনারেশন এবং স্বয়ংক্রিয় মেট্রিক গেটকে একসূত্রে বাঁধে।',
          },
        },
        {
          term: 'Production release decision',
          def: {
            en: 'An audited binary determination (SHIP or HOLD) based on whether all retrieval and generation evaluation dials clear hard performance thresholds.',
            bn: 'একটি পরীক্ষিত সিদ্ধান্ত (SHIP বা HOLD) যা রিট্রিভাল এবং জেনারেশনের সমস্ত মেট্রিক লক্ষ্যমাত্রা অর্জন করেছে কিনা তার ওপর ভিত্তি করে গৃহীত হয়।',
          },
        },
        {
          term: 'Performance regression',
          def: {
            en: 'A degradation in pipeline evaluation scores caused by corpus updates, prompt edits, or model shifts that drops metrics below the release bar.',
            bn: 'নথিপত্রের পরিবর্তন, প্রম্পট এডিট বা মডেলের তারতম্যের কারণে পাইপলাইনের স্কোর কমে যাওয়া যা মেট্রিক্সকে গ্রহণযোগ্য সীমার নিচে নামিয়ে দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Demos don’t invoice', bn: 'কেন — নিছক ডেমো নয়, দরকার টেকসই সমাধান' },
    },
    {
      type: 'list',
      items: [
        { en: 'Subsystems compose multiplicatively: a 0.67 score in either retrieval or generation compromises the entire user experience.', bn: 'সাব-সিস্টেমগুলো পারস্পরিক নির্ভরশীল: রিট্রিভাল বা জেনারেশনের যেকোনো একটিতে ০.৬৭ স্কোর সম্পূর্ণ সিস্টেমের মান নষ্ট করে।' },
        { en: 'Deployment demands verifiable evidence trails: maintaining frozen golden benchmarks and recorded metric dials prevents untested releases.', bn: 'ডেপ্লয়মেন্টের জন্য নির্ভরযোগ্য রেকর্ড থাকা জরুরি: গোল্ডেন বেঞ্চমার্ক এবং পরিমাপকৃত মেট্রিক্সের লিখিত প্রমাণ অপ্রত্যাশিত ত্রুটি রোধ করে।' },
        { en: 'Silent regressions threaten live traffic: corpus edits and document shifts require continuous gating on every release.', bn: 'নীরব বিচ্যুতি সক্রিয় সেবায় বিঘ্ন ঘটায়: নথিপত্র পরিবর্তন হলে প্রতিটি রিলিজের পূর্বে স্বয়ংক্রিয়ভাবে পুনরায় গেট পরীক্ষা করা অপরিহার্য।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Launch in 5 stages', bn: 'HOW — ৫টি ধাপে পাইপলাইন পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Multi-probe rewrite', bn: '১. কুয়েরি পুনর্লিখন' }, text: { en: 'Expand 1 user query into 3 complementary search probes.', bn: 'ব্যবহারকারীর ১টি প্রশ্নকে ৩টি সমান্তরাল প্রব-এ রূপান্তর করুন।' } },
        { title: { en: '2. Union retrieval', bn: '২. সমন্বিত অনুসন্ধান' }, text: { en: 'Retrieve 5 deduplicated chunks, verifying 4 are relevant (0.80).', bn: '৫টি অনন্য নথি উদ্ধার করে নিশ্চিত করুন ৪টি প্রাসঙ্গিক (০.৮০)।' } },
        { title: { en: '3. Grounded generation', bn: '৩. তথ্যভিত্তিক জেনারেশন' }, text: { en: 'Draft 6 atomic factual assertions referencing retrieved evidence.', bn: 'রিট্রিভ করা তথ্যের ওপর ভিত্তি করে ৬টি পারমাণবিক বক্তব্য তৈরি করুন।' } },
        { title: { en: '4. Claim audit', bn: '৪. সত্যতা নিরীক্ষা' }, text: { en: 'Confirm 5 supported statements and isolate 1 unsupported floater.', bn: '৫টি প্রমাণিত বক্তব্য নিশ্চিত করুন এবং ১টি অপ্রমাণিত বক্তব্য চিহ্নিত করুন।' } },
        { title: { en: '5. Release gating', bn: '৫. রিলিজ গেটিং' }, text: { en: 'Confirm min(0.83, 0.80) = 0.80 ≥ 0.80 to authorize green SHIP.', bn: 'min(০.৮৩, ০.৮০) = ০.৮০ যাচাই করে চূড়ান্ত SHIP অনুমোদন দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'rag_capstone_pipeline.py',
      code: `def run_capstone_pipeline(probes_list, retrieved_docs, relevant_count, claims_count, supported_count, threshold=0.80):
    # Stage 1 & 2: Multi-query Rewrite & Deduplicated Retrieval
    probes_count = len(probes_list)
    union_docs = set()
    for p in probes_list:
        union_docs.update(p)
    union_count = len(union_docs)
    
    # Stage 3: Context Precision Dial
    ctx_precision = relevant_count / union_count
    
    # Stage 4: Generation & Faithfulness Dial
    faithfulness = supported_count / claims_count
    
    # Stage 5: Dual-metric Release Gate
    min_score = min(faithfulness, ctx_precision)
    verdict = "SHIP" if min_score >= threshold else "HOLD"
    
    return probes_count, union_count, ctx_precision, claims_count, faithfulness, min_score, verdict

# Production query run: 1 query -> 3 probes -> union 5 -> 6 claims (5 supported)
probes = [["A", "B", "C"], ["B", "D"], ["C", "E"]]
p_cnt, u_cnt, prec, c_cnt, faith, min_s, verdict = run_capstone_pipeline(
    probes_list=probes, retrieved_docs=5, relevant_count=4, claims_count=6, supported_count=5, threshold=0.80
)

print("End-to-End RAG Capstone Pipeline:")
print(f"Stage 1 & 2: 1 query -> {p_cnt} probes -> union {u_cnt} chunks")
print(f"Stage 3 (Retrieval): Precision = 4/5 = {prec:.2f}")
print(f"Stage 4 (Generation): Faithfulness = 5/6 = {faith:.2f} (~0.83)")
print(f"Stage 5 (Release Gate): min({faith:.2f}, {prec:.2f}) = {min_s:.2f} >= 0.80 -> {verdict}")

# Regressed run: 1 floater sinks faithfulness to 4/6 = 0.67
_, _, _, _, faith_reg, min_reg, verdict_reg = run_capstone_pipeline(
    probes_list=probes, retrieved_docs=5, relevant_count=4, claims_count=6, supported_count=4, threshold=0.80
)
print(f"\\nRegressed Pipeline: Faithfulness = 4/6 = {faith_reg:.2f} -> Gate min({faith_reg:.2f}, {prec:.2f}) = {min_reg:.2f} -> {verdict_reg}")

# Output:
# End-to-End RAG Capstone Pipeline:
# Stage 1 & 2: 1 query -> 3 probes -> union 5 chunks
# Stage 3 (Retrieval): Precision = 4/5 = 0.80
# Stage 4 (Generation): Faithfulness = 5/6 = 0.83 (~0.83)
# Stage 5 (Release Gate): min(0.83, 0.80) = 0.80 >= 0.80 -> SHIP
#
# Regressed Pipeline: Faithfulness = 4/6 = 0.67 -> Gate min(0.67, 0.80) = 0.67 -> HOLD`,
      caption: {
        en: 'The Python simulation traces the end-to-end flow. 3 probes gather 5 union chunks, context precision reaches 4/5 = 0.80, and 5 of 6 claims are supported (0.83), clearing the 0.80 gate (SHIP); sinking one claim drops faithfulness to 4/6 ≈ 0.67 (HOLD).',
        bn: 'পাইথন সিমুলেশন সম্পূর্ণ পাইপলাইন পরিচালনা করে। ৩টি প্রব ৫টি ইউনিয়ন চাঙ্ক উদ্ধার করে, কনটেক্সট প্রিসিশন ৪/৫ = ০.৮০ হয় এবং ৬টির মধ্যে ৫টি দাবি সমর্থিত (০.৮৩) হয়ে ০.৮০ গেট পার করে (SHIP); একটি দাবি বাদ পড়লে বিশ্বস্ততা কমে ৪/৬ ≈ ০.৬৭ হয় (HOLD)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive release console', bn: 'INSIDE — জীবন্ত রিলিজ কনসোল ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator executes all five stages of the pipeline: rewriting expands to 3 probes, retrieval deduplicates to 5 chunks with precision 0.80, generation yields 6 claims with faithfulness 0.83, and min(0.83, 0.80) = 0.80 triggers SHIP. If you sink another support flag, the verdict flips immediately to HOLD, proving how the release gate guards users.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি পাইপলাইনের পাঁচটি পর্যায় পরিচালনা করে: ৩টি প্রব তৈরি, ০.৮০ প্রিসিশনে ৫টি চাঙ্ক উদ্ধার, ০.৮৩ বিশ্বস্ততায় ৬টি দাবি তৈরি এবং min(০.৮৩, ০.৮০) = ০.৮০ তে SHIP সক্রিয় হয়। সমর্থনের আরেকটি ফ্ল্যাগ বাদ দিলে রায় তাৎক্ষণিকভাবে HOLD এ রূপ নেয়, যা প্রদর্শন করে কীভাবে রিলিজ গেট মান বজায় রাখে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Launch console (sink a floor, press Run)', bn: 'Launch console (মেঝে ডোবান, Run)' },
      html: '<h3>Ship or hold?</h3>\n<pre id="out"></pre>\n<p>Console runs all five stages.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #16a34a; border-radius: 8px; padding: 10px; }',
      js: 'const probes = [["A","B","C"], ["B","D"], ["C","E"]];\nconst u = new Set(probes.flat());\nconsole.log("rewrite 1→" + probes.length + " · retrieve union " + u.size);\nconst prec = [1, 1, 1, 0, 1];\nconst support = [1, 1, 1, 1, 0, 1]; // ← sink another!\nconst p = prec.reduce((a,b) => a+b, 0) / prec.length;\nconst f = support.reduce((a,b) => a+b, 0) / support.length;\nconsole.log("generate 6 · ground " + support.reduce((a,b) => a+b,0) + "/6");\nconst m = Math.min(f, p);\ndocument.getElementById("out").textContent = "union " + u.size + " · faith " + f.toFixed(2) + " · prec " + p.toFixed(2) + " → " + (m >= 0.80 ? "SHIP ✓" : "HOLD ✗") + " 🚀";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Launch instincts', bn: 'ফলাফল — পাইপলাইন ডেপ্লয়মেন্টের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Pipeline progression: 3 probes gather 5 union chunks to generate 6 claims, clearing the 0.80 gate for verified release.', bn: 'পাইপলাইনের ধারাবাহিকতা: ৩টি প্রব ৫টি সমন্বিত নথি উদ্ধার করে ৬টি বক্তব্য তৈরি করে, যা ০.৮০ গেট পার করে চূড়ান্ত রিলিজ নিশ্চিত করে।' },
        { en: 'Rigid gatekeeping: a single additional unsupported claim lowers faithfulness to 0.67, halting release until evidence is restored.', bn: 'কঠোর গেটরক্ষা: একটিমাত্র বাড়তি অপ্রমাণিত বক্তব্য বিশ্বস্ততা ০.৬৭ এ নামিয়ে দেয় এবং প্রমাণ পুনরুদ্ধার না হওয়া পর্যন্ত ডেপ্লয়মেন্ট আটকে রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Launch traps', bn: 'ডিবাগ — ডেপ্লয়মেন্টের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Silent regression (green rot)', bn: 'নীরব বিচ্যুতি ও পারফরম্যান্স হ্রাস (Silent regression)' },
      text: {
        en: 'Unnoticed corpus modifications and document additions can subtly degrade retrieval: yesterday’s 0.80 precision slips to 0.71 unnoticed if evaluations are not rerun. Symptoms: sudden user complaints despite no code commits. Cure: mandate automated golden evaluation runs as blocking CI/CD deployment gates.',
        bn: 'নথিপত্রের পরিবর্তন বা সংযোজন নীরবে অনুসন্ধানের মান কমিয়ে দিতে পারে: যদি টেস্ট পুনরায় না চালানো হয় তবে গতকালের ০.৮০ প্রিসিশন আজ ০.৭১ এ নেমে যেতে পারে। লক্ষণ: নতুন কোড পরিবর্তন না থাকা সত্ত্বেও ব্যবহারকারীদের হঠাৎ অসন্তোষ। প্রতিকার: প্রতিটি ডেপ্লয়মেন্টে গোল্ডেন সেটের স্বয়ংক্রিয় পরীক্ষা বাধ্যতামূলক করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Shadow mode (launch without launching)', bn: 'শ্যাডো মোডে রিয়েল ট্রাফিক যাচাই (Shadow mode)' },
      text: {
        en: 'Before replacing an active production pipeline, run the updated architecture in shadow mode alongside live traffic: compare dual-metric evaluation verdicts in real-time, promoting to primary only when shadow metrics demonstrate stability. Symptoms of omitting: launch-day regressions. Cure: shadow test before switching production traffic.',
        bn: 'সক্রিয় সিস্টেম প্রতিস্থাপন করার আগে নতুন পাইপলাইনকে শ্যাডো মোডে লাইভ ট্রাফিকের পাশাপাশি পরিচালনা করুন: রিয়েল-টাইমে উভয় মেট্রিক তুলনা করুন এবং স্থায়িত্ব প্রমাণিত হলেই মূল সিস্টেমে যুক্ত করুন। লক্ষণ: রিলিজের দিন অনাকাঙ্ক্ষিত ত্রুটি। প্রতিকার: ট্রাফিক সরানোর আগে সর্বদা শ্যাডো টেস্ট সম্পন্ন করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production deployments', bn: 'বাস্তব ক্ষেত্র — আধুনিক সিস্টেমে পাইপলাইন ডেপ্লয়মেন্ট' },
    },
    {
      type: 'list',
      items: [
        { en: 'Perplexity AI and You.com: execute continuous multi-query rewrite, hybrid vector-lexical fusion, and real-time citation auditing on every query.', bn: 'Perplexity AI এবং You.com: প্রতিটি অনুসন্ধানে মাল্টি-কুয়েরি রিরাইট, হাইব্রিড ভেক্টর ফিউশন এবং রিয়েল-টাইম সাইটেশন অডিট একসাথে পরিচালনা করে।' },
        { en: 'Enterprise AI knowledge assistants: automatically route queries to human agents whenever post-generation faithfulness drops below 0.85.', bn: 'এন্টারপ্রাইজ এআই নলেজ অ্যাসিস্ট্যান্ট: জেনারেশনের পর বিশ্বস্ততা ০.৮৫ এর নিচে নামলে কুয়েরি স্বয়ংক্রিয়ভাবে মানব অপারেটরের কাছে পাঠিয়ে দেয়।' },
        { en: 'Legal discovery platforms: generate cryptographic audit trails pairing every legal assertion with immutable document chunk IDs.', bn: 'আইনি তথ্য অনুসন্ধান প্ল্যাটফর্ম: প্রতিটি আইনি বক্তব্যের সাথে অপরিবর্তনীয় চাঙ্ক আইডি যুক্ত করে ক্রিপ্টোগ্রাফিক অডিট রেকর্ড বজায় রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Beyond RAG', bn: 'পরবর্তী ধাপ — RAG পরবর্তী এজেনটিক সিস্টেম' },
    },
    {
      type: 'para',
      text: {
        en: 'You have mastered Retrieval-Augmented Generation end to end: from query expansion and hybrid search to context budgets, citation audits, and metric gating. You are now prepared to build autonomous agents that utilize these grounded retrieval capabilities to solve complex software problems.',
        bn: 'আপনি শুরু থেকে শেষ পর্যন্ত রিট্রিভাল-অগমেন্টেড জেনারেশন সম্পূর্ণ আয়ত্ত করেছেন: কুয়েরি সম্প্রসারণ ও হাইব্রিড সার্চ থেকে শুরু করে কনটেক্সট বাজেট, সাইটেশন অডিট এবং মেট্রিক গেটিং। এখন আপনি এমন স্বায়ত্তশাসিত এজেন্ট তৈরি করতে প্রস্তুত যা জটিল সমস্যার সমাধানে এই বিশ্বস্ত তথ্যভাণ্ডার সফলভাবে ব্যবহার করতে পারে।',
      },
    },
  ],
  exercises: [
    {
      id: 'rcap-ex-1',
      kind: 'mcq',
      topic: 'pipe-numbers',
      question: {
        en: 'What sequence of counts correctly traces the core stages of the capstone pipeline: probes → union chunks → claims?',
        bn: 'ক্যাপস্টোন পাইপলাইনের মূল পর্যায়গুলোকে কোন সংখ্যা ক্রমটি সঠিকভাবে প্রকাশ করে: প্রব → ইউনিয়ন চাঙ্ক → বক্তব্য?',
      },
      options: [
        { en: '3 probes → 5 union chunks → 6 generated claims', bn: '৩টি প্রব → ৫টি ইউনিয়ন চাঙ্ক → ৬টি তৈরি বক্তব্য' },
        { en: '1 probe → 5 chunks → 5 claims', bn: '১টি প্রব → ৫টি চাঙ্ক → ৫টি বক্তব্য' },
        { en: '3 probes → 4 chunks → 5 claims', bn: '৩টি প্রব → ৪টি চাঙ্ক → ৫টি বক্তব্য' },
        { en: '5 probes → 6 chunks → 3 claims', bn: '৫টি প্রব → ৬টি চাঙ্ক → ৩টি বক্তব্য' },
      ],
      answer: 0,
      hint: { en: 'Recall the counts: 3 probes, 5 deduplicated chunks, and 6 drafted claims.', bn: 'সংখ্যাগুলো মনে করুন: ৩টি প্রব, ৫টি ডুপ্লিকেটহীন চাঙ্ক এবং ৬টি তৈরি বক্তব্য।' },
      explanation: {
        en: 'The capstone pipeline expands 1 query into 3 probes, merges results into 5 deduplicated chunks, and prompts the generator to draft 6 factual claims.',
        bn: 'ক্যাপস্টোন পাইপলাইন ১টি প্রশ্ন থেকে ৩টি প্রব তৈরি করে, ৫টি অনন্য নথিতে একত্র করে এবং মডেলকে ৬টি তথ্যভিত্তিক বক্তব্য খসড়া করতে দেয়।',
      },
    },
    {
      id: 'rcap-ex-2',
      kind: 'mcq',
      topic: 'verdict-why',
      question: {
        en: 'Why does the capstone pipeline receive a green SHIP deployment verdict when evaluated at the 0.80 bar?',
        bn: '০.৮০ মানদণ্ডে মূল্যায়নের সময় ক্যাপস্টোন পাইপলাইন কেন সফল ডেপ্লয়মেন্টের SHIP রায় লাভ করে?',
      },
      options: [
        {
          en: 'min(0.83 faithfulness, 0.80 context precision) = 0.80, satisfying the minimum threshold requirement',
          bn: 'min(০.৮৩ বিশ্বস্ততা, ০.৮০ কনটেক্সট প্রিসিশন) = ০.৮০, যা সর্বনিম্ন থ্রেশহোল্ডের শর্ত পূরণ করে',
        },
        {
          en: 'Because generating 6 claims automatically bypasses evaluation gates',
          bn: 'কারণ ৬টি বক্তব্য তৈরি করলে স্বয়ংক্রিয়ভাবে মূল্যায়ন গেট এড়ানো যায়',
        },
        {
          en: 'Because candidate union reached exactly 5 documents',
          bn: 'কারণ প্রার্থী নথির সংখ্যা ঠিক ৫টিতে পৌঁছেছিল',
        },
        {
          en: 'Capstone lessons are unconditionally approved regardless of scores',
          bn: 'ক্যাপস্টোন পাঠের ফলাফল বিবেচনা না করেই নিঃশর্তভাবে অনুমোদন দেওয়া হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Both dials meet or exceed the 0.80 minimum gate.', bn: 'উভয় মেট্রিকই ০.৮০ এর সমান বা বেশি।' },
      explanation: {
        en: 'The weakest link is context precision at 0.80, which clears the 0.80 bar. Because both dials satisfy requirements, the pipeline authorizes SHIP.',
        bn: 'সবচেয়ে কম মান হলো ০.৮০ যা নির্ধারিত ০.৮০ সীমার সমান। উভয় মেট্রিকই শর্ত পূরণ করায় পাইপলাইন ডেপ্লয়মেন্টের SHIP অনুমোদন দেয়।',
      },
    },
    {
      id: 'rcap-ex-3',
      kind: 'mcq',
      topic: 'flip-math',
      question: {
        en: 'If one additional factual assertion loses document support dropping faithfulness to 4/6, what is the new release verdict?',
        bn: 'যদি অতিরিক্ত আরেকটি দাবি নথির প্রমাণ হারিয়ে বিশ্বস্ততা ৪/৬ এ নামিয়ে দেয়, তবে নতুন রিলিজ রায় কী হবে?',
      },
      options: [
        { en: 'min(0.67, 0.80) = 0.67 < 0.80 → HOLD verdict', bn: 'min(০.৬৭, ০.৮০) = ০.৬৭ < ০.৮০ → HOLD রায়' },
        { en: 'Still SHIP verdict because 0.67 is close enough to 0.80', bn: '০.৬৭ প্রায় ০.৮০ এর কাছাকাছি হওয়ায় এখনো SHIP রায়' },
        { en: '0.80 → SHIP verdict by discarding the lower score', bn: 'নিচের স্কোর বাদ দিয়ে কেবল ০.৮০ বিবেচনায় SHIP রায়' },
        { en: 'The pipeline encounters a fatal runtime system crash', bn: 'পাইপলাইন তাৎক্ষণিকভাবে মারাত্মক সিস্টেম ক্র্যাশে পতিত হয়' },
      ],
      answer: 0,
      hint: { en: '4/6 ≈ 0.67, which fails the 0.80 minimum threshold.', bn: '৪/৬ ≈ ০.৬৭, যা ০.৮০ সর্বনিম্ন সীমার নিচে।' },
      explanation: {
        en: '4/6 ≈ 0.67 drops below 0.80. Since the minimum rule enforces min(0.67, 0.80) = 0.67, the gate immediately vetoes release with a HOLD.',
        bn: '৪/৬ ≈ ০.৬৭ যা ০.৮০ এর নিচে। যেহেতু সর্বনিম্ন নীতি প্রয়োগ করা হয়, তাই min(০.৬৭, ০.৮০) = ০.৬৭ এর কারণে গেট সাথে সাথে রিলিজ আটকে দেয়।',
      },
    },
    {
      id: 'rcap-ex-4',
      kind: 'predict',
      topic: 'regress-cure',
      question: {
        en: 'When a pipeline scores 0.80 last week but silently regresses to 0.71 today without code changes, what operational control prevents outages?',
        bn: 'যখন কোনো পাইপলাইন গত সপ্তাহে ০.৮০ স্কোর পেয়েছিল কিন্তু কোড পরিবর্তন ছাড়াই আজ নীরবে ০.৭১ এ নেমে আসে, তখন কোন পরিচালন ব্যবস্থা ত্রুটি রোধ করে?',
      },
      answer: 'Gate every deploy on golden evals: launches expire, rerun always.',
      accept: ['golden', 'rerun', 'deploy', 'gate', 'regression', 'expire', 'monitor', 'every'],
      hint: { en: 'State gating every deploy on golden evaluations because launches expire and reruns are mandatory.', bn: 'গোল্ডেন মূল্যায়নের মাধ্যমে প্রতিটি ডেপ্লয় পরীক্ষা করা এবং নিয়মিত রি-রান করার কথা বলুন।' },
      explanation: {
        en: 'Corpus drifts rot pipelines over time. Mandating automated re-evaluation against immutable golden sets on every release catches silent regressions.',
        bn: 'নথিপত্রের পরিবর্তনে পাইপলাইনের মান ধীরে ধীরে নষ্ট হয়। প্রতি রিলিজের পূর্বে অপরিবর্তনীয় গোল্ডেন সেটে স্বয়ংক্রিয় টেস্ট চালালে গোপন সমস্যাগুলো ধরা পড়ে।',
      },
    },
  ],
  quiz: {
    id: 'rag-capstone-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'rcapq1',
        kind: 'mcq',
        topic: 'stage-order',
        question: {
          en: 'What is the correct sequential order of stages in an end-to-end production RAG pipeline?',
          bn: 'একটি পূর্ণাঙ্গ প্রোডাকশন RAG পাইপলাইনের ধাপগুলোর সঠিক পর্যায়ক্রমিক ক্রম কোনটি?',
        },
        options: [
          {
            en: 'Query rewrite → Deduplicated retrieval → Grounded generation → Claim audit → Dual-metric gating',
            bn: 'কুয়েরি পুনর্লিখন → ডুপ্লিকেটহীন অনুসন্ধান → তথ্যভিত্তিক জেনারেশন → সত্যতা নিরীক্ষা → দ্বৈত-মেট্রিক গেটিং',
          },
          {
            en: 'Gating → Claim audit → Generation → Retrieval → Rewrite',
            bn: 'গেটিং → সত্যতা নিরীক্ষা → জেনারেশন → অনুসন্ধান → পুনর্লিখন',
          },
          {
            en: 'Generation → Rewrite → Gating → Retrieval → Audit',
            bn: 'জেনারেশন → পুনর্লিখন → গেটিং → অনুসন্ধান → নিরীক্ষা',
          },
          {
            en: 'Retrieval → Gating → Rewrite → Audit → Generation',
            bn: 'অনুসন্ধান → গেটিং → পুনর্লিখন → নিরীক্ষা → জেনারেশন',
          },
        ],
        answer: 0,
        hint: { en: 'Expand query first, retrieve clean context, generate, audit claims, and evaluate the gate.', bn: 'প্রথমে কুয়েরি বাড়ান, তথ্য আনুন, উত্তর তৈরি করুন, সত্যতা যাচাই করুন এবং শেষে গেট পরীক্ষা করুন।' },
        explanation: {
          en: 'The pipeline moves systematically: expand the question into probes, retrieve candidate context, draft grounded text, verify claims, and gate release.',
          bn: 'পাইপলাইনটি ধারাবাহিকভাবে কাজ করে: প্রশ্ন সম্প্রসারণ, কনটেক্সট উদ্ধার, প্রমাণভিত্তিক উত্তর তৈরি, বক্তব্য যাচাই এবং শেষে রিলিজ অনুমোদন।',
        },
      },
      {
        id: 'rcapq2',
        kind: 'mcq',
        topic: 'shadow-why',
        question: {
          en: 'What primary architectural advantage does deploying a shadow mode pipeline provide prior to full production release?',
          bn: 'পূর্ণাঙ্গ প্রোডাকশন রিলিজের পূর্বে শ্যাডো মোড পাইপলাইন পরিচালনা করার প্রধান স্থাপত্য সুবিধা কোনটি?',
        },
        options: [
          {
            en: 'It evaluates live production traffic verdicts in parallel without exposing real users to untested regression risks',
            bn: 'এটি ব্যবহারকারীর কোনো ক্ষতি না করে সমান্তরালভাবে বাস্তব প্রোডাকশন ট্রাফিকের ওপর পাইপলাইনের মান নিরীক্ষা করে',
          },
          {
            en: 'It accelerates hardware GPU clock frequencies',
            bn: 'এটি হার্ডওয়্যার জিপিইউর ক্লক স্পিড বৃদ্ধি করে',
          },
          {
            en: 'It eliminates all API inference subscription costs',
            bn: 'এটি সমস্ত এপিআই সাবস্ক্রিপশন খরচ মুছে দেয়',
          },
          {
            en: 'It permanently disables monitoring telemetry dashboards',
            bn: 'এটি মনিটরিং ড্যাশবোর্ডকে স্থায়ীভাবে নিষ্ক্রিয় করে',
          },
        ],
        answer: 0,
        hint: { en: 'Shadow mode tests real user queries safely behind the scenes.', bn: 'শ্যাডো মোড নিরাপদে পর্দার আড়ালে আসল ব্যবহারকারীর প্রশ্ন পরীক্ষা করে।' },
        explanation: {
          en: 'Shadow mode evaluates live requests concurrently with the incumbent system, proving candidate stability before full traffic cutover.',
          bn: 'শ্যাডো মোড বর্তমান সিস্টেমের পাশাপাশি নতুন পাইপলাইন চালায়, যা সম্পূর্ণ ট্রাফিক চালু করার পূর্বেই নতুন সিস্টেমের স্থায়িত্ব প্রমাণ করে।',
        },
      },
      {
        id: 'rcapq3',
        kind: 'mcq',
        topic: 'trail-why',
        question: {
          en: 'Why must production AI teams maintain permanent paper trails containing evaluation dials, golden sets, and signed verdicts?',
          bn: 'প্রোডাকশন এআই দলগুলোর কেন মূল্যায়ন ডায়াল, গোল্ডেন সেট এবং স্বাক্ষরিত রায় সংবলিত সুনির্দিষ্ট রেকর্ড রাখা বাধ্যতামূলক?',
        },
        options: [
          {
            en: 'Verifiable audit records provide compliance accountability, identify root causes during incidents, and defend release decisions with concrete data',
            bn: 'যাচাইযোগ্য অডিট রেকর্ড আইনি জবাবদিহিতা নিশ্চিত করে, সিস্টেম বিভ্রাটে সঠিক কারণ উদঘাটন করে এবং সুনির্দিষ্ট তথ্যের ভিত্তিতে সিদ্ধান্ত রক্ষা করে',
          },
          {
            en: 'Physical paper documents improve vector index lookup speeds',
            bn: 'কাগজের নথি ভেক্টর ইনডেক্সের অনুসন্ধানের গতি বৃদ্ধি করে',
          },
          {
            en: 'Audit logging is mandatory only for visual styling adjustments',
            bn: 'কেবলমাত্র ভিজ্যুয়াল ডিজাইনের পরিবর্তনের জন্যই অডিট লগ রাখা প্রয়োজন',
          },
          {
            en: 'Documenting test outcomes deliberately slows down deployment cycles',
            bn: 'পরীক্ষার ফলাফল লিপিবদ্ধ করার উদ্দেশ্য হলো রিলিজের গতি কমিয়ে দেওয়া',
          },
        ],
        answer: 0,
        hint: { en: 'Audit trails establish objective engineering accountability.', bn: 'অডিট ট্রেইল সুস্পষ্ট ইঞ্জিনিয়ারিং জবাবদিহিতা প্রতিষ্ঠা করে।' },
        explanation: {
          en: 'Maintaining immutable evaluation logs ensures that teams understand system performance shifts, proving release safety with empirical data.',
          bn: 'স্থায়ী মূল্যায়ন লগ নিশ্চিত করে যে টিমগুলো সিস্টেমের পরিবর্তন বুঝতে পারছে এবং বাস্তব তথ্যের ভিত্তিতে রিলিজের নিরাপত্তা প্রমাণ করতে সক্ষম।',
        },
      },
      {
        id: 'rcapq4',
        kind: 'predict',
        topic: 'pipe-recite',
        question: {
          en: 'What sequence of operational metrics summarizes the end-to-end capstone pipeline examined in this lesson?',
          bn: 'এই পাঠে আলোচিত পূর্ণাঙ্গ ক্যাপস্টোন পাইপলাইনকে সংক্ষেপে প্রকাশ করে এমন কার্যপ্রণালী মেট্রিক্স কোনটি?',
        },
        answer: 'Rewrite→gate 5 stages · 0.83/0.80 · SHIP · floater flips HOLD.',
        accept: ['5', '0.83', '0.80', 'SHIP', 'HOLD', 'stage', 'gate', 'flip'],
        hint: { en: 'Mention 5 stages, dials 0.83/0.80, verdict SHIP, and floater flipping to HOLD.', bn: '৫টি পর্যায়, ০.৮৩/০.৮০ ডায়াল, SHIP রায় এবং ভিত্তিহীন বক্তব্য HOLD এ রূপ নেওয়ার কথা বলুন।' },
        explanation: {
          en: 'The capstone benchmark: 5 pipeline stages, 0.83 faithfulness and 0.80 context precision, a SHIP verdict, with one floater flipping the gate to HOLD.',
          bn: 'ক্যাপস্টোন মানদণ্ড: ৫টি পাইপলাইন ধাপ, ০.৮৩ বিশ্বস্ততা ও ০.৮০ কনটেক্সট প্রিসিশন, SHIP রায় এবং একটি দুর্বল বক্তব্য গেটকে HOLD এ পরিবর্তন করে।',
        },
      },
    ],
  },
};
