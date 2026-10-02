import type { Lesson } from '../../../lib/types';

export const GroundingClaimsLesson: Lesson = {
  slug: 'grounding-claims',
  tech: 'rag',
  title: {
    en: 'Grounding Claims',
    bn: 'গ্রাউন্ডিং ক্লেইমস — তথ্যের বিশ্বস্ততা ও হ্যালুসিনেশন নিরীক্ষা',
  },
  summary: {
    en: 'Every synthesized statement must be grounded in context: when 6 generated claims yield 5 statements backed by retrieved chunks and 1 unsupported floating claim, the pipeline achieves a faithfulness score of 5/6 ≈ 0.83. Grounded claims stand on document evidence, while ungrounded claims represent hallucinations.',
    bn: 'তৈরি করা প্রতিটি বক্তব্যকে কনটেক্সটের ওপর প্রতিষ্ঠিত হতে হবে: যখন ৬টি দাবির মধ্যে ৫টি রিট্রিভ করা তথ্যের খণ্ড দ্বারা সমর্থিত হয় এবং ১টি প্রমাণহীন ভাসমান থাকে, তখন পাইপলাইন ৫/৬ ≈ ০.৮৩ বিশ্বস্ততা স্কোর অর্জন করে। বিশ্বস্ত দাবিগুলো নথির প্রমাণের ওপর দাঁড়ায়, আর ভিত্তিহীন দাবিগুলো হ্যালুসিনেশন প্রকাশ করে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Claims with floors', bn: 'WHAT — প্রমাণভিত্তিক বক্তব্য গঠন' },
    },
    {
      type: 'para',
      text: {
        en: 'When evaluating generative responses, grounding measures whether each synthesized sentence is directly supported by retrieved context documents. Suppose a model generates 6 factual claims: 5 are confirmed by evidence passages, while the fifth claim makes an unsupported assertion not found anywhere in the corpus. This yields a faithfulness score of 5/6 = 0.833... ≈ 0.83. Floated assertions are essentially hallucinations masked by confident phrasing.',
        bn: 'জেনারেটিভ উত্তর মূল্যায়নের সময়, গ্রাউন্ডিং যাচাই করে প্রতিটি বাক্য রিট্রিভ করা কনটেক্সট নথি দ্বারা সরাসরি সমর্থিত কিনা। ধরা যাক একটি মডেল ৬টি তথ্যভিত্তিক দাবি তৈরি করেছে: এর মধ্যে ৫টি উদ্ধৃত অনুচ্ছেদ দ্বারা নিশ্চিত, কিন্তু পঞ্চম দাবিটি এমন একটি বক্তব্য প্রদান করে যা নথির কোথাও নেই। এর ফলে বিশ্বস্ততা স্কোর দাঁড়ায় ৫/৬ = ০.৮৩৩... ≈ ০.৮৩। ভিত্তিহীন বক্তব্যগুলো মূলত আত্মবিশ্বাসের মুখোশ পরা হ্যালুসিনেশন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Six claims, one with no floor', bn: 'ছয়টি দাবি এবং একটি ভিত্তিহীন বক্তব্য' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Six claims with one floated">
<g font-size="12" font-weight="700" fill="currentColor">
<rect x="30" y="120" width="150" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="105" y="138" text-anchor="middle">S1 ✓ floor C1</text>
<rect x="30" y="150" width="150" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="105" y="168" text-anchor="middle">S2 ✓ floor C2</text>
<rect x="30" y="180" width="150" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="105" y="198" text-anchor="middle">S3 ✓ floor C1</text>
<rect x="245" y="120" width="150" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="320" y="138" text-anchor="middle">S4 ✓ floor C3</text>
<rect x="245" y="150" width="150" height="26" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="320" y="168" text-anchor="middle">S5 ✗ AIR</text>
<rect x="245" y="180" width="150" height="26" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="320" y="198" text-anchor="middle">S6 ✓ floor C2</text>
</g>
<rect x="455" y="125" width="155" height="80" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="532" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">5/6 faithful</text>
<text x="532" y="176" text-anchor="middle" font-size="22" font-weight="800" fill="currentColor">0.83</text>
<text x="532" y="196" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">S5 floats</text>
<text x="320" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">GENERATED ANSWER — 6 claims</text>
<line x1="105" y1="120" x2="105" y2="112" stroke="#16a34a" stroke-width="2"/><line x1="320" y1="150" x2="320" y2="112" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
<text x="320" y="232" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">S5’s dashed line finds no chunk: confidence over air</text>
</svg>`,
      caption: {
        en: 'Five claims rest firmly upon verified document chunks while S5 floats without textual grounding. Solid evidentiary backing always trumps rhetorical flair.',
        bn: 'পাঁচটি দাবি পরীক্ষিত নথির ওপর দৃঢ়ভাবে প্রতিষ্ঠিত আর পঞ্চম বক্তব্যটি কোনো প্রমাণ ছাড়া ভেসে আছে। সুন্দর অলংকরণের চেয়ে বাস্তব তথ্যপ্রমাণ অধিক মূল্যবান।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Answer faithfulness',
          def: {
            en: 'The proportion of generated factual claims that can be directly verified from the provided context chunks (such as 5/6 ≈ 0.83).',
            bn: 'তৈরি করা মোট দাবির মধ্যে যতগুলো দাবি প্রদত্ত তথ্যের খণ্ড থেকে সরাসরি যাচাই করা যায় তার অনুপাত (যেমন ৫/৬ ≈ ০.৮৩)।',
          },
        },
        {
          term: 'Supported claim',
          def: {
            en: 'A generated statement whose premises and factual assertions are fully substantiated by textual evidence in the retrieved context.',
            bn: 'এমন একটি উৎপাদিত বক্তব্য যার মূল বক্তব্য এবং তথ্যগত সত্যতা রিট্রিভ করা কনটেক্সটের টেক্সট দ্বারা সম্পূর্ণ সমর্থিত।',
          },
        },
        {
          term: 'Floated assertion',
          def: {
            en: 'An unsupported claim produced by the model that lacks backing evidence in the context chunks, representing an ungrounded hallucination.',
            bn: 'মডেল দ্বারা উৎপাদিত এমন একটি অপ্রমাণিত দাবি যার পেছনে কনটেক্সটে কোনো সহায়ক প্রমাণ নেই, যা মূলত একটি ভিত্তিহীন হ্যালুসিনেশন।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Hallucinations invoice you', bn: 'কেন — হ্যালুসিনেশনের ঝুঁকি ও ক্ষতি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Unchecked model hallucinations create severe financial and operational liabilities: issuing wrong refund promises or faulty medical advice.', bn: 'অনিয়ন্ত্রিত মডেল হ্যালুসিনেশন মারাত্মক আর্থিক ও প্রাতিষ্ঠানিক ঝুঁকি তৈরি করে: যেমন ভুল রিফান্ডের আশ্বাস বা চিকিৎসায় ভুল নির্দেশনা দেওয়া।' },
        { en: 'Faithfulness scores establish objective safety gates: an 0.83 score identifies risky edge cases before untested answers reach end users.', bn: 'বিশ্বস্ততা স্কোর একটি বাস্তবসম্মত সুরক্ষার মানদণ্ড স্থাপন করে: ০.৮৩ স্কোর ব্যবহারকারীর কাছে উত্তর পৌঁছানোর আগেই ঝুঁকিপূর্ণ অসঙ্গতিগুলো চিহ্নিত করে।' },
        { en: 'Floated assertions diagnose pipeline gaps: ungrounded claims reveal whether the retriever missed chunks or the generator over-extrapolated.', bn: 'ভিত্তিহীন দাবিগুলো পাইপলাইনের ঘাটতি নির্দেশ করে: এটি প্রকাশ করে যে রিট্রিভার দরকারি নথি বাদ দিয়েছে নাকি জেনারেটর অতিরিক্ত কল্পনা করেছে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Ground in 4 steps', bn: 'HOW — ৪টি ধাপে গ্রাউন্ডিং মূল্যায়ন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Segment answer', bn: '১. উত্তর বিভাজন' }, text: { en: 'Decompose the generated response into 6 atomic factual claims.', bn: 'উৎপাদিত সম্পূর্ণ উত্তরটিকে ৬টি পারমাণবিক তথ্যভিত্তিক দাবিতে ভাগ করুন।' } },
        { title: { en: '2. Evaluate evidence', bn: '২. প্রমাণ অনুসন্ধান' }, text: { en: 'Check whether a retrieved chunk directly supports each claim.', bn: 'রিট্রিভ করা চাঙ্কগুলোর মধ্যে প্রতিটি দাবির সমর্থন আছে কিনা পরীক্ষা করুন।' } },
        { title: { en: '3. Identify floaters', bn: '৩. প্রমাণহীন দাবি শনাক্তকরণ' }, text: { en: 'Confirm 5 supported claims and isolate S5 as ungrounded.', bn: '৫টি প্রমাণিত দাবি নিশ্চিত করুন এবং পঞ্চম দাবিটিকে ভিত্তিহীন হিসেবে চিহ্নিত করুন।' } },
        { title: { en: '4. Compute score', bn: '৪. স্কোর নির্ধারণ' }, text: { en: 'Calculate faithfulness as supported claims over total (5/6 ≈ 0.83).', bn: 'সমর্থিত দাবিকে মোট দাবি দিয়ে ভাগ করে বিশ্বস্ততা নির্ণয় করুন (৫/৬ ≈ ০.৮৩)।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'grounding_eval_sim.py',
      code: `def evaluate_faithfulness(claims, support_flags, floors):
    supported_count = sum(support_flags)
    total_claims = len(claims)
    faithfulness = supported_count / total_claims
    return supported_count, total_claims, faithfulness

# Initial audit: 6 claims, claim 5 (S5) is unsupported
claims = ["S1", "S2", "S3", "S4", "S5", "S6"]
support = [1, 1, 1, 1, 0, 1]
floors = ["C1", "C2", "C1", "C3", "AIR", "C2"]

ok, total, faith = evaluate_faithfulness(claims, support, floors)
print("Initial Grounding Audit:")
for c, ok_i, f in zip(claims, support, floors):
    status = f"supported (floor {f})" if ok_i else f"floated (no floor - {f})"
    print(f"Claim {c}: {status}")
print(f"Faithfulness score: {ok}/{total} = {faith:.2f} (~0.83)")

# Repaired context: retrieve chunk for S5
support_repaired = [1, 1, 1, 1, 1, 1]
ok_r, total_r, faith_r = evaluate_faithfulness(claims, support_repaired, floors)
print(f"\\nRepaired Faithfulness: {ok_r}/{total_r} = {faith_r:.2f} (1.00)")

# Output:
# Initial Grounding Audit:
# Claim S1: supported (floor C1)
# Claim S2: supported (floor C2)
# Claim S3: supported (floor C1)
# Claim S4: supported (floor C3)
# Claim S5: floated (no floor - AIR)
# Claim S6: supported (floor C2)
# Faithfulness score: 5/6 = 0.83 (~0.83)
#
# Repaired Faithfulness: 6/6 = 1.00 (1.00)`,
      caption: {
        en: 'The Python simulation audits claim grounding: 5 of 6 claims are substantiated by document chunks while S5 lacks evidence, producing a 5/6 ≈ 0.83 faithfulness score; providing verified evidence raises faithfulness to 6/6 = 1.00.',
        bn: 'পাইথন সিমুলেশন গ্রাউন্ডিং নিরীক্ষা করে: ৬টির মধ্যে ৫টি দাবি নথির প্রমাণে সমর্থিত আর পঞ্চম দাবি প্রমাণহীন থাকায় ৫/৬ ≈ ০.৮৩ বিশ্বস্ততা আসে; প্রয়োজনীয় প্রমাণ সংযুক্ত করলে তা ৬/৬ = ১.০০ এ উন্নীত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive grounding lab', bn: 'INSIDE — জীবন্ত গ্রাউন্ডিং নিরীক্ষা ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator audits 6 statements against context chunks C1, C2, and C3. Five claims find matching floors while S5 finds no backing evidence, netting an 0.83 score. If you flip index 4 to 1, faithfulness calculates as 1.00. However, in production engineering, scores must only change when real retrieval evidence is provided.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি C১, C২ এবং C৩ চাঙ্কের বিপরীতে ৬টি বক্তব্য নিরীক্ষা করে। পাঁচটি দাবি তাদের ভিত্তি খুঁজে পেলেও পঞ্চম বক্তব্যটির কোনো প্রমাণ না থাকায় ০.৮৩ স্কোর আসে। সূচক ৪ এর মান ১ করলে স্কোর ১.০০ হয়। তবে বাস্তবিক ক্ষেত্রে, কেবল তখনই স্কোর বাড়ানো উচিত যখন বাস্তবে প্রামাণ্য নথি যুক্ত হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Grounding lab (flip S5, press Run)', bn: 'Grounding lab (S৫ উল্টান, Run)' },
      html: '<h3>Ground the claims</h3>\n<pre id="out"></pre>\n<p>Console names each floor.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #16a34a; border-radius: 8px; padding: 10px; }',
      js: 'const claims = ["S1","S2","S3","S4","S5","S6"];\nconst supported = [1, 1, 1, 1, 0, 1]; // ← flip index 4 to 1!\nconst floors = ["C1","C2","C1","C3","—","C2"];\nlet ok = 0;\nclaims.forEach((s, i) => {\n  ok += supported[i];\n  console.log(s + " → " + (supported[i] ? "floor " + floors[i] + " ✓" : "AIR ✗"));\n});\ndocument.getElementById("out").textContent = ok + "/" + claims.length + " supported · faithfulness " + (ok/claims.length).toFixed(2) + " ⚓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Grounding instincts', bn: 'ফলাফল — গ্রাউন্ডিং মূল্যায়নের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Faithfulness baseline: 5 supported claims out of 6 total assertions yields an 0.83 faithfulness score.', bn: 'বিশ্বস্ততার মূল ভিত্তি: ৬টি বক্তব্যের মধ্যে ৫টি সমর্থিত হলে ০.৮৩ বিশ্বস্ততা স্কোর অর্জিত হয়।' },
        { en: 'Evidence precedes confidence: evaluation scores must reflect authentic document backing rather than optimistic labeling.', bn: 'আত্মবিশ্বাসের পূর্বে প্রমাণ: মূল্যায়নের স্কোর কেবল বাহ্যিক আশাবাদের ওপর নয়, বরং বাস্তব নথির প্রমাণের ওপর ভিত্তি করা উচিত।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Grounding traps', bn: 'ডিবাগ — গ্রাউন্ডিং মূল্যায়নের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Label theater (flip without floor)', bn: 'প্রমাণহীন কৃত্রিম স্কোরিংয়ের ফাঁদ (Label theater)' },
      text: {
        en: 'Marking an assertion as supported without supplying an actual document chunk creates false metrics: the recorded score reaches 1.00 while the user receives hallucinations. Symptoms: high evaluation numbers coupled with persistent user bug reports. Cure: always bind evaluation flags directly to specific chunk IDs.',
        bn: 'প্রকৃত তথ্যের চাঙ্ক যুক্ত না করে কোনো দাবিকে জোরপূর্বক সমর্থিত হিসেবে চিহ্নিত করলে ভুয়া স্কোর তৈরি হয়: মেট্রিক্স ১.০০ দেখায় কিন্তু ব্যবহারকারী ভুল তথ্য পায়। লক্ষণ: উচ্চ স্কোর থাকা সত্ত্বেও ব্যবহারকারীদের অসন্তোষ। প্রতিকার: মূল্যায়ন ফ্ল্যাগগুলোকে সর্বদা সুনির্দিষ্ট চাঙ্ক আইডির সাথে সংযুক্ত রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Partial support (the half-floor)', bn: 'অর্ধেক প্রমাণের বিভ্রান্তি (Partial support)' },
      text: {
        en: 'A retrieved chunk that proves only part of a claim: for example, stating the facility is “open 9 to 5 daily” when context documents state “open 9 to 5 weekdays”. Symptoms: users act on unwarranted weekend assumptions. Cure: isolate temporal and situational qualifiers into distinct atomic assertions.',
        bn: 'যখন কোনো চাঙ্ক একটি বক্তব্যের কেবল আংশিক প্রমাণ দেয়: যেমন বলা হলো প্রতিষ্ঠান “প্রতিদিন সকাল ৯টা থেকে বিকাল ৫টা পর্যন্ত খোলা” অথচ নথিতে লেখা ছিল “কর্মদিবসে ৯টা থেকে ৫টা”। লক্ষণ: ছুটির দিনে ব্যবহারকারী বিভ্রান্ত হওয়া। প্রতিকার: সময় বা শর্তযুক্ত অংশগুলোকে আলাদা একক দাবিতে বিভক্ত করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production frameworks', bn: 'বাস্তব ক্ষেত্র — ফ্রেমওয়ার্কে বিশ্বস্ততা গেটিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'Ragas evaluation framework: calculates harmonic means across context precision, answer relevance, and claim faithfulness.', bn: 'Ragas মূল্যায়ন ফ্রেমওয়ার্ক: কনটেক্সট প্রিসিশন, উত্তরের প্রাসঙ্গিকতা এবং দাবির বিশ্বস্ততার সমন্বিত স্কোর নির্ণয় করে।' },
        { en: 'TruLens feedback functions: monitors groundedness scores in real-time and routes unsupported responses to human operators.', bn: 'TruLens ফিডব্যাক ফাংশন: রিয়েল-টাইমে গ্রাউন্ডিং স্কোর পর্যবেক্ষণ করে এবং অপ্রমাণিত উত্তর সরাসরি মানব অপারেটরের কাছে পাঠিয়ে দেয়।' },
        { en: 'Financial document QA systems: reject generated audit responses whenever faithfulness scores fall below an 0.90 threshold.', bn: 'আর্থিক নথির প্রশ্নোত্তর ব্যবস্থা: বিশ্বস্ততার স্কোর ০.৯০ এর নিচে নামলেই তৈরি করা অডিট উত্তর বাতিল করে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Hybrid Search', bn: 'পরবর্তী পাঠ — হাইব্রিড সার্চ' },
    },
    {
      type: 'para',
      text: {
        en: 'With faithfulness verified, Lesson 5 investigates hybrid retrieval: combining dense vector embeddings with sparse keyword BM25 search through Reciprocal Rank Fusion to rescue buried documents.',
        bn: 'বিশ্বস্ততা নিশ্চিত করার পর, পাঠ ৫ হাইব্রিড রিট্রিভাল আলোচনা করবে: যেখানে ডেনস ভেক্টর এমবেডিংয়ের সাথে স্পার্স কিওয়ার্ড BM25 সার্চ একত্রিত করে লুকায়িত প্রয়োজনীয় নথি উদ্ধার করা হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'gnd-ex-1',
      kind: 'mcq',
      topic: 'faith-compute',
      question: {
        en: 'When 5 out of 6 generated factual claims are supported by retrieved context, what is the resulting faithfulness score?',
        bn: 'যখন তৈরি করা ৬টি তথ্যভিত্তিক দাবির মধ্যে ৫টি রিট্রিভ করা কনটেক্সট দ্বারা সমর্থিত হয়, তখন বিশ্বস্ততা স্কোর কত হবে?',
      },
      options: [
        { en: '≈ 0.83 (5 supported / 6 generated)', bn: '≈ ০.৮৩ (৫টি সমর্থিত / ৬টি উৎপাদিত)' },
        { en: '≈ 0.60 faithfulness', bn: '≈ ০.৬০ বিশ্বস্ততা' },
        { en: '1.00 faithfulness', bn: '১.০০ বিশ্বস্ততা' },
        { en: '5.00 score', bn: '৫.০০ স্কোর' },
      ],
      answer: 0,
      hint: { en: 'Divide supported claims (5) by total claims (6).', bn: 'সমর্থিত দাবি (৫) কে মোট দাবি (৬) দিয়ে ভাগ করুন।' },
      explanation: {
        en: '5 / 6 = 0.833... ≈ 0.83. A single unsupported claim reduces the answer faithfulness by approximately 17%.',
        bn: '৫ / ৬ = ০.৮৩৩... ≈ ০.৮৩। একটিমাত্র ভিত্তিহীন বক্তব্য সম্পূর্ণ উত্তরের বিশ্বস্ততা প্রায় ১৭% কমিয়ে দেয়।',
      },
    },
    {
      id: 'gnd-ex-2',
      kind: 'mcq',
      topic: 'floater-find',
      question: {
        en: 'Among the six evaluated claims (S1 through S6), which specific claim lacked supporting evidence and floated without a document floor?',
        bn: 'মূল্যায়িত ছয়টি দাবির (S১ থেকে S৬) মধ্যে কোন সুনির্দিষ্ট দাবিটিতে কোনো সহায়ক প্রমাণ ছিল না এবং নথির ভিত্তি ছাড়া ভাসমান ছিল?',
      },
      options: [
        { en: 'Claim S5 — lacks textual backing in any retrieved chunk', bn: 'দাবি S৫ — কোনো রিট্রিভ করা চাঙ্কেই এর সপক্ষে প্রমাণ নেই' },
        { en: 'Claim S1 — supported by chunk C1', bn: 'দাবি S১ — চাঙ্ক C১ দ্বারা সমর্থিত' },
        { en: 'Claim S4 — supported by chunk C3', bn: 'দাবি S৪ — চাঙ্ক C৩ দ্বারা সমর্থিত' },
        { en: 'None — every claim had complete backing', bn: 'কোনোটিই নয় — প্রতিটি দাবিরই পূর্ণ প্রমাণ ছিল' },
      ],
      answer: 0,
      hint: { en: 'Notice the fifth statement S5 pointing to air rather than a chunk ID.', bn: 'পঞ্চম বক্তব্য S৫ দেখুন যা কোনো চাঙ্ক আইডির বদলে শূন্যের দিকে নির্দেশ করছে।' },
      explanation: {
        en: 'Claim S5 had no corresponding evidence chunk (pointing to AIR), identifying it as an ungrounded hallucination.',
        bn: 'দাবি S৫ এর পেছনে কোনো সহায়ক চাঙ্ক ছিল না, যা এটিকে একটি ভিত্তিহীন হ্যালুসিনেশন হিসেবে প্রমাণ করে।',
      },
    },
    {
      id: 'gnd-ex-3',
      kind: 'mcq',
      topic: 'label-theater',
      question: {
        en: 'If an engineer simply toggles S5 support flag to positive without retrieving new evidence, what happens to truth and faithfulness?',
        bn: 'যদি কোনো প্রকৌশলী নতুন প্রমাণ রিট্রিভ না করে কেবল S৫ এর ফ্ল্যাগটি ইতিবাচক করে দেন, তবে সত্যতা ও বিশ্বস্ততা স্কোরের কী ঘটবে?',
      },
      options: [
        {
          en: 'Faithfulness metric becomes 1.00 on paper, but the output remains an ungrounded hallucination in reality',
          bn: 'কাগজে-কলমে বিশ্বস্ততা মেট্রিক ১.০০ হয়, কিন্তু বাস্তবে উত্তরটি ভিত্তিহীন হ্যালুসিনেশনই থেকে যায়',
        },
        {
          en: 'The database automatically synthesizes new source documents',
          bn: 'ডেটাবেজ স্বয়ংক্রিয়ভাবে নতুন উৎস নথি তৈরি করে ফেলে',
        },
        {
          en: 'The statement S5 spontaneously becomes objectively true',
          bn: 'বক্তব্য S৫ নিজে থেকেই সত্যে রূপান্তরিত হয়ে যায়',
        },
        {
          en: 'Evaluation benchmarks crash immediately',
          bn: 'মূল্যায়ন বেঞ্চমার্ক সাথে সাথে ক্র্যাশ করে',
        },
      ],
      answer: 0,
      hint: { en: 'Flipping an evaluation flag does not create real textual evidence.', bn: 'মূল্যায়ন ফ্ল্যাগ পরিবর্তন করলেই বাস্তব টেক্সট প্রমাণ তৈরি হয় না।' },
      explanation: {
        en: 'Superficially toggling evaluation flags inflates metrics to 1.00 without fixing the underlying hallucination, creating misleading audit theater.',
        bn: 'বাহ্যিকভাবে ফ্ল্যাগ পরিবর্তন করলে মেট্রিক ১.০০ এ পৌঁছালেও আসল হ্যালুসিনেশন দূর হয় না, যা কেবল বিভ্রান্তিকর অডিট নাটকের জন্ম দেয়।',
      },
    },
    {
      id: 'gnd-ex-4',
      kind: 'predict',
      topic: 'halffloor-fix',
      question: {
        en: 'When a claim asserts the office is “open 9 to 5 daily” but chunks specify weekdays only, what defect exists and how is it resolved?',
        bn: 'যখন কোনো দাবি বলে অফিস “প্রতিদিন সকাল ৯টা থেকে বিকাল ৫টা পর্যন্ত খোলা” কিন্তু নথিতে কেবল কর্মদিবস উল্লেখ থাকে, তখন কোন ত্রুটি ঘটে এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Split the claim: “open 9–5 weekdays” matches chunks, daily floats.',
      accept: ['split', 'weekday', 'qualifier', 'match', 'half', 'partial', 'daily'],
      hint: { en: 'State splitting the claim into weekdays which matches chunks, while daily floats.', bn: 'দাবি বিভক্ত করে কর্মদিবস অংশে মিল এবং প্রতিদিন অংশে অমিল নির্দেশ করার কথা বলুন।' },
      explanation: {
        en: 'Decomposing the sentence separates verified weekday hours from unverified weekend claims, allowing accurate grounding audits.',
        bn: 'বাক্যটি বিভক্ত করলে প্রমাণিত কর্মদিবসের সময়সূচি আলাদা হয়ে যায় এবং অপ্রমাণিত ছুটির দিনের দাবি সঠিকভাবে ধরা পড়ে।',
      },
    },
  ],
  quiz: {
    id: 'grounding-claims-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'gndq1',
        kind: 'mcq',
        topic: 'faith-mean',
        question: {
          en: 'What architectural metric does the faithfulness formula evaluate in a retrieval-augmented generation system?',
          bn: 'একটি রিট্রিভাল-অগমেন্টেড জেনারেশন সিস্টেমে বিশ্বস্ততার সূত্রটি কোন স্থাপত্য মেট্রিক মূল্যায়ন করে?',
        },
        options: [
          {
            en: 'The proportion of generated factual statements that are directly substantiated by retrieved context chunks',
            bn: 'উৎপাদিত তথ্যভিত্তিক বক্তব্যের যে অনুপাত সরাসরি রিট্রিভ করা তথ্যের খণ্ড দ্বারা প্রমাণিত হয়',
          },
          {
            en: 'The total number of vector chunks stored inside the index',
            bn: 'ইনডেক্সের ভেতরে সংরক্ষিত মোট ভেক্টর চাঙ্কের সংখ্যা',
          },
          {
            en: 'The token processing rate per second on generation GPUs',
            bn: 'জেনারেশন জিপিইউতে প্রতি সেকেন্ডে টোকেন প্রক্রিয়াকরণের গতি',
          },
          {
            en: 'The aesthetic font styling used in rendered footnote brackets',
            bn: 'পাদটীকা ব্র্যাকেট প্রদর্শনে ব্যবহৃত ফন্ট ডিজাইনের নান্দনিকতা',
          },
        ],
        answer: 0,
        hint: { en: 'Faithfulness is supported claims divided by total claims.', bn: 'বিশ্বস্ততা হলো সমর্থিত দাবি এবং মোট দাবির অনুপাত।' },
        explanation: {
          en: 'Faithfulness quantifies the factual integrity of the response relative to the provided context, penalizing ungrounded statements.',
          bn: 'বিশ্বস্ততা প্রদত্ত তথ্যের সাপেক্ষে উত্তরের সত্যতা পরিমাপ করে এবং ভিত্তিহীন বক্তব্য থাকলে পেনাল্টি দেয়।',
        },
      },
      {
        id: 'gndq2',
        kind: 'mcq',
        topic: 'flag-rule',
        question: {
          en: 'What operational principle ensures that evaluation flags accurately reflect real document grounding rather than cosmetic theater?',
          bn: 'কোন কার্যপ্রণালী নীতি নিশ্চিত করে যে মূল্যায়ন ফ্ল্যাগগুলো নিছক নাটক না হয়ে প্রকৃত নথির ভিত্তিকে প্রতিফলিত করছে?',
        },
        options: [
          {
            en: 'Every positive support flag must be paired with an explicit, verified context chunk ID containing supporting text',
            bn: 'প্রতিটি ইতিবাচক সমর্থন ফ্ল্যাগের সাথে একটি সুনির্দিষ্ট এবং পরীক্ষিত চাঙ্ক আইডি সংযুক্ত থাকতে হবে যা বক্তব্যকে প্রমাণ করে',
          },
          {
            en: 'Flags should automatically default to positive to optimize latency',
            bn: 'গতি বৃদ্ধির জন্য ফ্ল্যাগগুলো স্বয়ংক্রিয়ভাবে ইতিবাচক ধরে নেওয়া উচিত',
          },
          {
            en: 'Generated answers should be strictly truncated to under ten words',
            bn: 'তৈরি করা উত্তরগুলোকে কঠোরভাবে দশ শব্দের মধ্যে সীমাবদ্ধ রাখা উচিত',
          },
          {
            en: 'Footnote references should be suppressed to avoid confusing users',
            bn: 'ব্যবহারকারীর বিভ্রান্তি এড়াতে পাদটীকা রেফারেন্স বাদ দেওয়া উচিত',
          },
        ],
        answer: 0,
        hint: { en: 'Flags must always follow real evidentiary document floors.', bn: 'ফ্ল্যাগগুলোকে সর্বদা বাস্তব নথির প্রমাণের ওপর ভিত্তি করতে হবে।' },
        explanation: {
          en: 'Tying evaluation flags to verifiable chunk IDs ensures metrics accurately reflect real textual evidence.',
          bn: 'মূল্যায়ন ফ্ল্যাগকে সুনির্দিষ্ট চাঙ্ক আইডির সাথে সংযুক্ত রাখলে মেট্রিক্স সত্যিকার অর্থেই প্রমাণকে প্রতিফলিত করে।',
        },
      },
      {
        id: 'gndq3',
        kind: 'mcq',
        topic: 'half-cure',
        question: {
          en: 'What is the recommended remedy when an evaluator detects a partially supported claim containing both true facts and unwarranted generalizations?',
          bn: 'যখন কোনো নিরীক্ষক আংশিক সমর্থিত দাবি খুঁজে পায় যাতে সত্য তথ্যের সাথে অতিরিক্ত সাধারণীকরণ যুক্ত থাকে, তখন প্রস্তাবিত সমাধান কোনটি?',
        },
        options: [
          {
            en: 'Split the statement into atomic propositions so the substantiated fact is confirmed while the floating claim is isolated',
            bn: 'বক্তব্যটিকে পারমাণবিক অংশে বিভক্ত করা যাতে প্রমাণিত অংশটি সমর্থিত হয় এবং ভিত্তিহীন অংশটি আলাদাভাবে চিহ্নিত করা যায়',
          },
          {
            en: 'Add expressive adjectives to mask the missing evidence',
            bn: 'অনুপস্থিত প্রমাণ ঢাকতে অতিরিক্ত বিশেষণ যোগ করা',
          },
          {
            en: 'Ignore the unsupported half if the overall tone sounds helpful',
            bn: 'সামগ্রিক ভাব ভালো শোনালে অপ্রমাণিত অর্ধেক অংশ উপেক্ষা করা',
          },
          {
            en: 'Duplicate the same citation twice to boost visual credibility',
            bn: 'বিশ্বাসযোগ্যতা বাড়াতে একই উদ্ধৃতি দুবার প্রয়োগ করা',
          },
        ],
        answer: 0,
        hint: { en: 'Atomic proposition decomposition separates truth from extrapolation.', bn: 'পারমাণবিক অংশে ভাঙলে সত্য তথ্য অনুমান থেকে আলাদা হয়ে যায়।' },
        explanation: {
          en: 'Decomposing complex statements into atomic facts prevents unsupported assertions from riding alongside verified truths.',
          bn: 'জটিল বক্তব্যকে ছোট ছোট তথ্যে ভাগ করলে অপ্রমাণিত বক্তব্য সত্য তথ্যের আড়ালে লুকাতে পারে না।',
        },
      },
      {
        id: 'gndq4',
        kind: 'predict',
        topic: 'ground-recite',
        question: {
          en: 'What four benchmark metrics summarize the grounding evaluation examined in this lesson?',
          bn: 'এই পাঠে আলোচিত গ্রাউন্ডিং মূল্যায়নকে সংক্ষেপে প্রকাশ করে এমন চারটি মূল পরিমাপ কী কী?',
        },
        answer: '6 claims · 5 supported · S5 floated · ≈0.83.',
        accept: ['6', '5', 'S5', '0.83', 'float', 'supported'],
        hint: { en: 'State claim count, supported count, floated statement ID, and faithfulness score.', bn: 'দাবির সংখ্যা, সমর্থিত সংখ্যা, ভাসমান বক্তব্যের আইডি এবং বিশ্বস্ততা স্কোর উল্লেখ করুন।' },
        explanation: {
          en: 'The grounding audit: 6 total claims, 5 supported by context, S5 identified as an unsupported floater, and an 0.83 faithfulness score.',
          bn: 'গ্রাউন্ডিং অডিট: মোট ৬টি দাবি, ৫টি কনটেক্সট সমর্থিত, পঞ্চম দাবি S৫ ভিত্তিহীন হিসেবে চিহ্নিত এবং ০.৮৩ বিশ্বস্ততা স্কোর।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'hybrid-search',
    title: { en: 'Hybrid Search', bn: 'Hybrid Search' },
  },
};
