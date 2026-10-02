import type { Lesson } from '../../../lib/types';

export const CitationsLesson: Lesson = {
  slug: 'citations',
  tech: 'rag',
  title: {
    en: 'Citations',
    bn: 'উদ্ধৃতি ও প্রমাণ যাচাইকরণ — সাইটেশন প্রিসিশন নিরীক্ষা',
  },
  summary: {
    en: 'Citation pointers must prove every factual claim: out of 5 cited claims, 4 are logically entailed by their chunks while 1 is a decorative impostor, achieving a citation precision of 0.80. Automated audits check entailment claim by claim so unverified assertions fail loudly.',
    bn: 'উদ্ধৃতি নির্দেশকগুলোকে প্রতিটি তথ্যভিত্তিক দাবি প্রমাণ করতে হবে: ৫টি উদ্ধৃত দাবির মধ্যে ৪টি সংশ্লিষ্ট খণ্ড দ্বারা যৌক্তিকভাবে সমর্থিত এবং ১টি ভিত্তিহীন সাজসজ্জা, যা ০.৮০ সাইটেশন প্রিসিশন নির্ধারণ করে। স্বয়ংক্রিয় অডিট প্রতিটি দাবির সত্যতা যাচাই করে অপ্রমাণিত দাবিগুলো সরাসরি চিহ্নিত করে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Pointers that prove', bn: 'WHAT — প্রমাণযোগ্য নির্দেশক' },
    },
    {
      type: 'para',
      text: {
        en: 'In reliable retrieval systems, a citation pointer explicitly ties a generated claim to the document chunk that logically proves it. Appending reference [2] to a sentence guarantees that chunk 2 directly substantiates the assertion. When auditing 5 generated claims, suppose 4 are logically entailed while 1 citation points to an unrelated or unretrieved passage. This results in a citation precision of 4/5 = 0.80. True precision measures factual honesty rather than the sheer quantity of footnote brackets.',
        bn: 'একটি নির্ভরযোগ্য রিট্রিভাল সিস্টেমে, একটি উদ্ধৃতি নির্দেশক তৈরি করা বক্তব্যকে সেই তথ্যের খণ্ডের সাথে সংযুক্ত করে যা এটিকে যৌক্তিকভাবে প্রমাণ করে। একটি বাক্যের শেষে [২] যুক্ত থাকার অর্থ হলো দ্বিতীয় চাঙ্কটি সরাসরি বক্তব্যটিকে সমর্থন করে। ৫টি বক্তব্য নিরীক্ষা করার সময় যদি দেখা যায় ৪টি দাবি সঠিকভাবে প্রমাণিত কিন্তু ১টি উদ্ধৃতি অপ্রাসঙ্গিক বা অপ্রাপ্ত নথির দিকে নির্দেশ করছে, তবে সাইটেশন প্রিসিশন হবে ৪/৫ = ০.৮০। প্রকৃত প্রিসিশন কতগুলো ব্র্যাকেট ব্যবহার করা হয়েছে তা দেখে না, বরং তথ্যের সততা পরিমাপ করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Five claims, one impostor', bn: 'পাঁচটি দাবি এবং একটি ভুয়া নির্দেশক' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Citation audit with one failure">
<g font-size="12" font-weight="700" fill="currentColor">
<rect x="40" y="30" width="250" height="30" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="165" y="50" text-anchor="middle">claim 1 → C2 ✓ entailed</text>
<rect x="40" y="68" width="250" height="30" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="165" y="88" text-anchor="middle">claim 2 → C1 ✓ entailed</text>
<rect x="40" y="106" width="250" height="30" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="165" y="126" text-anchor="middle">claim 3 → C3 ✓ entailed</text>
<rect x="40" y="144" width="250" height="30" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="165" y="164" text-anchor="middle">claim 4 → C9 ✗ decoration</text>
<rect x="40" y="182" width="250" height="30" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="165" y="202" text-anchor="middle">claim 5 → C2 ✓ entailed</text>
</g>
<rect x="350" y="80" width="240" height="90" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="470" y="108" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">precision 4/5</text>
<text x="470" y="134" text-anchor="middle" font-size="22" font-weight="800" fill="currentColor">0.80</text>
<text x="470" y="156" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">honest, not perfect</text>
<text x="320" y="232" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">audit every pointer — decorations confess under checks</text>
</svg>`,
      caption: {
        en: 'Four citations prove their statements while one performs theater. Automated audits separate genuine evidence from superficial decorations.',
        bn: 'চারটি উদ্ধৃতি বক্তব্য প্রমাণ করে এবং একটি কেবল সাজসজ্জা হিসেবে থাকে। স্বয়ংক্রিয় নিরীক্ষা সাজানো অভিনয় থেকে প্রকৃত প্রমাণকে আলাদা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Textual entailment',
          def: {
            en: 'A directional relationship between text units where the truth of a generated claim necessarily follows from the evidence in the retrieved chunk.',
            bn: 'দুটি টেক্সটের মধ্যে এমন একটি সম্পর্ক যেখানে রিট্রিভ করা তথ্যের ওপর ভিত্তি করে তৈরি বক্তব্যের সত্যতা সরাসরি এবং যৌক্তিকভাবে প্রমাণিত হয়।',
          },
        },
        {
          term: 'Citation precision',
          def: {
            en: 'The ratio of genuinely entailed citations to total cited references (such as 4/5 = 0.80), measuring the accuracy of source attributions.',
            bn: 'প্রকৃতপক্ষে তথ্য দ্বারা প্রমাণিত উদ্ধৃতির সংখ্যা এবং মোট উদ্ধৃতির অনুপাত (যেমন ৪/৫ = ০.৮০), যা তথ্যসূত্রের নির্ভুলতা পরিমাপ করে।',
          },
        },
        {
          term: 'Decorative citation',
          def: {
            en: 'A superficial reference bracket that points to an irrelevant or unretrieved document without providing actual supporting evidence for the claim.',
            bn: 'একটি অপ্রয়োজনীয় বা ভুয়া রেফারেন্স যা বক্তব্যের সপক্ষে কোনো বাস্তব প্রমাণ না থাকা সত্ত্বেও নথির দিকে বাহ্যিক নির্দেশক হিসেবে যুক্ত করা হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Trust needs receipts', bn: 'কেন — বিশ্বাসের ভিত্তি সুনির্দিষ্ট তথ্যপ্রমাণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Users verify claims interactively: clicking reference badge [2] must immediately reveal the exact sentences confirming the statement.', bn: 'ব্যবহারকারী ইন্টারঅ্যাকটিভভাবে যাচাই করে: রেফারেন্স ব্যাজ [২] এ ক্লিক করলে সরাসরি সহায়ক অনুচ্ছেদটি স্পষ্টভাবে দেখতে পাওয়া উচিত।' },
        { en: 'Regulated domains mandate verifiable paper trails: financial services and medical systems require legal proof behind every answer.', bn: 'নিয়ন্ত্রিত খাতগুলোতে প্রমাণ রাখা বাধ্যতামূলক: আর্থিক ও স্বাস্থ্যসেবা সংক্রান্ত সিস্টেমে প্রতিটি সিদ্ধান্তের পেছনে প্রামাণ্য নথির প্রয়োজন হয়।' },
        { en: 'Precision directly determines deployment quality: systems achieving 0.80 citation precision ship to production while 0.40 systems are held.', bn: 'প্রিসিশন সরাসরি ডেপ্লয়মেন্টের মান নির্ধারণ করে: ০.৮০ সাইটেশন প্রিসিশন সম্পন্ন সিস্টেম বাজারে যায়, কিন্তু ০.৪০ সিস্টেম আটকে দেওয়া হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Audit in 4 steps', bn: 'HOW — ৪টি ধাপে সাইটেশন নিরীক্ষা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Extract claims', bn: '১. বক্তব্য চিহ্নিতকরণ' }, text: { en: 'Isolate 5 generated sentences along with their citations.', bn: 'তৈরি করা ৫টি বাক্য তাদের উদ্ধৃতিসহ আলাদা করে সাজান।' } },
        { title: { en: '2. Check entailment', bn: '২. প্রমাণ যাচাইকরণ' }, text: { en: 'Evaluate whether the referenced chunk logically entails each claim.', bn: 'উদ্ধৃত চাঙ্কটি সংশ্লিষ্ট দাবিকে যৌক্তিকভাবে প্রমাণ করে কিনা যাচাই করুন।' } },
        { title: { en: '3. Tally successes', bn: '৩. সফলতার গণনা' }, text: { en: 'Count confirmed matches: 4 valid entailments and 1 decoration.', bn: 'ফলাফল গুনুন: ৪টি প্রমাণিত দাবি এবং ১টি ভুয়া সাজসজ্জা।' } },
        { title: { en: '4. Compute precision', bn: '৪. প্রিসিশন নির্ণয়' }, text: { en: 'Divide entailed citations by total cited (4/5 = 0.80).', bn: 'মোট উদ্ধৃতি দিয়ে প্রমাণিত উদ্ধৃতি ভাগ করুন (৪/৫ = ০.৮০)।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'citation_audit_sim.py',
      code: `def audit_citations(citations, entailments):
    entailed_count = sum(entailments)
    total_cited = len(citations)
    precision = entailed_count / total_cited
    return entailed_count, total_cited, precision

# Audit with phantom citation at index 3 (claim 4 -> C9)
cites = ["C2", "C1", "C3", "C9", "C2"]
entails = [1, 1, 1, 0, 1]
entailed, total, prec = audit_citations(cites, entails)

print("Original citation audit:")
for i, (c, ok) in enumerate(zip(cites, entails), start=1):
    status = "entailed" if ok else "decoration (phantom C9)"
    print(f"Claim {i} -> {c}: {status}")
print(f"Citation precision: {entailed}/{total} = {prec:.2f}")

# Fixed audit: replace C9 with verified C1
entails_fixed = [1, 1, 1, 1, 1]
entailed_f, total_f, prec_f = audit_citations(cites, entails_fixed)
print(f"\\nRepaired citation precision: {entailed_f}/{total_f} = {prec_f:.2f}")

# Output:
# Original citation audit:
# Claim 1 -> C2: entailed
# Claim 2 -> C1: entailed
# Claim 3 -> C3: entailed
# Claim 4 -> C9: decoration (phantom C9)
# Claim 5 -> C2: entailed
# Citation precision: 4/5 = 0.80
#
# Repaired citation precision: 5/5 = 1.00`,
      caption: {
        en: 'The Python simulation audits citation entailment: out of 5 citations, 4 are logically entailed while claim 4 references an unretrieved phantom (C9), yielding 4/5 = 0.80 precision; repairing the pointer achieves 5/5 = 1.00.',
        bn: 'পাইথন সিমুলেশন সাইটেশন নিরীক্ষা করে: ৫টি উদ্ধৃতির মধ্যে ৪টি প্রমাণিত হয় এবং দাবি ৪ একটি অপ্রাপ্ত চাঙ্ক (C৯) নির্দেশ করে ০.৮০ প্রিসিশন দেয়; নির্দেশক সংশোধন করলে পূর্ণ ১.০০ প্রিসিশন অর্জিত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive citation auditor', bn: 'INSIDE — জীবন্ত সাইটেশন অডিট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator audits 5 cited claims against retrieved evidence. The fourth claim points to C9, a phantom chunk that was never fetched, resulting in a 4/5 = 0.80 precision score. If you correct index 3 from 0 to 1, precision instantly rises to 1.00. Audits identify defective citations so engineering teams can repair prompts and retrieval pipelines.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি রিট্রিভ করা প্রমাণের বিপরীতে ৫টি উদ্ধৃত দাবি পরীক্ষা করে। চতুর্থ দাবিটি C৯ নির্দেশ করে যা কখনো রিট্রিভ করা হয়নি, ফলে ৪/৫ = ০.৮০ প্রিসিশন পাওয়া যায়। সূচক ৩ এর মান ০ থেকে ১ এ পরিবর্তন করলে প্রিসিশন সাথে সাথে ১.০০ এ উন্নীত হয়। নিরীক্ষা ত্রুটিযুক্ত উদ্ধৃতি চিহ্নিত করে প্রম্পট এবং পাইপলাইন সংশোধনে সাহায্য করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Audit lab (fix claim 4, press Run)', bn: 'Audit lab (দাবি ৪ ঠিক, Run)' },
      html: '<h3>Audit the pointers</h3>\n<pre id="out"></pre>\n<p>Console checks each claim.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fefce8; border: 1px solid #facc15; border-radius: 8px; padding: 10px; }',
      js: 'const cites = ["C2", "C1", "C3", "C9", "C2"];\nconst entails = [1, 1, 1, 0, 1]; // ← fix index 3 to 1!\nlet ok = 0;\ncites.forEach((c, i) => {\n  ok += entails[i];\n  console.log("claim " + (i+1) + " → " + c + (entails[i] ? " ✓" : " ✗ decoration"));\n});\nconst prec = ok / cites.length;\ndocument.getElementById("out").textContent = ok + "/" + cites.length + " entailed · precision " + prec.toFixed(2) + " 🔍";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Audit instincts', bn: 'ফলাফল — সাইটেশন নিরীক্ষার মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Precision benchmark: 4 verified claims out of 5 total citations produces an 0.80 citation precision score.', bn: 'প্রিসিশন মানদণ্ড: মোট ৫টি উদ্ধৃতির মধ্যে ৪টি প্রমাণিত দাবি ০.৮০ সাইটেশন প্রিসিশন স্কোর প্রদান করে।' },
        { en: 'Targeted correction: repairing citation mappings converts failing 0.80 pipelines into flawless 1.00 production systems.', bn: 'সুনির্দিষ্ট সংশোধন: নির্দেশকের ম্যাপিং ঠিক করলে ০.৮০ স্কোর সম্পন্ন পাইপলাইন সহজে ১.০০ মানে উন্নীত হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Citation traps', bn: 'ডিবাগ — উদ্ধৃতি সংক্রান্ত ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Phantom chunks (the C9)', bn: 'অপ্রাপ্ত নথির কাল্পনিক সাইটেশন (Phantom chunks)' },
      text: {
        en: 'Generators occasionally invent citations to non-existent document IDs like C9 that were never retrieved. Symptoms: users click broken links and audit precision plummets. Cure: constrain generation prompts to only reference IDs present in the current retrieved context window.',
        bn: 'ল্যাঙ্গুয়েজ মডেল কখনো কখনো C৯ এর মতো কাল্পনিক আইডি তৈরি করে যা কখনো রিট্রিভই করা হয়নি। লক্ষণ: ব্যবহারকারীরা অকার্যকর লিঙ্ক পায় এবং অডিট স্কোর কমে যায়। প্রতিকার: প্রম্পটকে কঠোরভাবে সীমাবদ্ধ রাখুন যাতে কেবল বর্তমান কনটেক্সটের বৈধ আইডি উদ্ধৃত করা হয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Claim splitting (the audit atom)', bn: 'জটিল বাক্য বিভাজন কৌশল (Claim splitting)' },
      text: {
        en: 'Combining multiple assertions into a compound sentence obscures unsupported claims behind a single citation bracket. Symptoms: evaluators find sentences that are half-true. Cure: decompose answers into atomic single-fact claims so each assertion links to its own explicit chunk pointer.',
        bn: 'একাধিক বক্তব্যকে একটি জটিল বাক্যে যুক্ত করলে একটিমাত্র উদ্ধৃতির আড়ালে অসত্য তথ্য লুকিয়ে থাকে। লক্ষণ: বাক্যের অর্ধেক সত্য এবং অর্ধেক মিথ্যা পাওয়া যায়। প্রতিকার: উত্তরগুলোকে ছোট ছোট একক তথ্যে বিভক্ত করুন যাতে প্রতিটি দাবি তার নিজস্ব চাঙ্কের সাথে সরাসরি যুক্ত থাকে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — আধুনিক সিস্টেমে সাইটেশন রেন্ডারিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'Perplexity AI: parses generated answers into sentence-level claims with clickable numbered badge footnotes.', bn: 'Perplexity AI: তৈরি করা উত্তরকে বাক্যভিত্তিক দাবিতে ভাগ করে ক্লিকযোগ্য সাইটেশন ব্যাজের মাধ্যমে উপস্থাপন করে।' },
        { en: 'Microsoft Copilot: highlights matching source text in original documents when users hover over citation brackets.', bn: 'Microsoft Copilot: ব্যবহারকারী সাইটেশন ব্র্যাকেটের ওপর মাউস রাখলে মূল নথির সংশ্লিষ্ট বাক্যটি হাইলাইট করে দেখায়।' },
        { en: 'Regulatory compliance auditors: run automated Natural Language Inference (NLI) models to gate RAG releases against citation drift.', bn: 'নিয়ন্ত্রক নিরীক্ষা ব্যবস্থা: সাইটেশন ত্রুটি রোধ করতে ন্যাচারাল ল্যাঙ্গুয়েজ ইনফারেন্স (NLI) মডেলের মাধ্যমে স্বয়ংক্রিয় অডিট পরিচালনা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Grounding Claims', bn: 'পরবর্তী পাঠ — গ্রাউন্ডিং ক্লেইমস' },
    },
    {
      type: 'para',
      text: {
        en: 'With citation precision verified, Lesson 4 tackles answer-level faithfulness: evaluating 6 total claims to identify floated statements that lack document grounding, maintaining an 0.83 faithfulness score.',
        bn: 'সাইটেশন প্রিসিশন নিশ্চিত করার পর, পাঠ ৪ উত্তরের সামগ্রিক বিশ্বস্ততা নিয়ে কাজ করবে: ৬টি দাবি বিশ্লেষণ করে তথ্যহীন ভাসমান বক্তব্য চিহ্নিত করা এবং ০.৮৩ বিশ্বস্ততার মানদণ্ড বজায় রাখা।',
      },
    },
  ],
  exercises: [
    {
      id: 'cit-ex-1',
      kind: 'mcq',
      topic: 'prec-compute',
      question: {
        en: 'When 4 out of 5 cited claims are logically entailed by their supporting chunks, what is the citation precision score?',
        bn: 'যখন ৫টি উদ্ধৃত দাবির মধ্যে ৪টি সংশ্লিষ্ট তথ্যের খণ্ড দ্বারা যৌক্তিকভাবে প্রমাণিত হয়, তখন সাইটেশন প্রিসিশন স্কোর কত হয়?',
      },
      options: [
        { en: '0.80 (4 entailed / 5 cited)', bn: '০.৮০ (৪টি সমর্থিত / ৫টি উদ্ধৃত)' },
        { en: '0.40 precision', bn: '০.৪০ প্রিসিশন' },
        { en: '1.00 precision', bn: '১.০০ প্রিসিশন' },
        { en: '0.20 precision', bn: '০.২০ প্রিসিশন' },
      ],
      answer: 0,
      hint: { en: 'Divide verified entailments (4) by total citations (5).', bn: 'যাচাইকৃত উদ্ধৃতি (৪) কে মোট উদ্ধৃতি (৫) দিয়ে ভাগ করুন।' },
      explanation: {
        en: '4 / 5 = 0.80 (80%). Citation precision evaluates the proportion of references that successfully substantiate their claims.',
        bn: '৪ / ৫ = ০.৮০ (৮০%)। সাইটেশন প্রিসিশন যাচাই করে কত শতাংশ উদ্ধৃতি সফলভাবে তার দাবি প্রমাণ করতে পেরেছে।',
      },
    },
    {
      id: 'cit-ex-2',
      kind: 'mcq',
      topic: 'impostor-find',
      question: {
        en: 'In the five audited claims, which claim is identified as a decorative citation and for what reason?',
        bn: 'নিরীক্ষা করা পাঁচটি দাবির মধ্যে কোন দাবিটিকে ভিত্তিহীন সাজসজ্জা হিসেবে চিহ্নিত করা হয়েছে এবং কেন?',
      },
      options: [
        {
          en: 'Claim 4 referencing C9 — because chunk C9 was never retrieved by the search system',
          bn: 'দাবি ৪ যা C৯ নির্দেশ করে — কারণ C৯ চাঙ্কটি সার্চ সিস্টেম কখনো রিট্রিভই করেনি',
        },
        {
          en: 'Claim 1 referencing C2 — because C2 is too long',
          bn: 'দাবি ১ যা C২ নির্দেশ করে — কারণ C২ চাঙ্কটি অনেক বড়',
        },
        {
          en: 'Claim 5 referencing C2 — because repeated citations are forbidden',
          bn: 'দাবি ৫ যা C২ নির্দেশ করে — কারণ একই উদ্ধৃতি বারবার ব্যবহার নিষেধ',
        },
        {
          en: 'None — every citation is completely valid',
          bn: 'কোনোটিই নয় — প্রতিটি উদ্ধৃতিই সম্পূর্ণ বৈধ',
        },
      ],
      answer: 0,
      hint: { en: 'Inspect the fourth citation pointing to an unretrieved phantom document.', bn: 'চতুর্থ উদ্ধৃতিটি দেখুন যা অপ্রাপ্ত একটি কাল্পনিক নথি নির্দেশ করে।' },
      explanation: {
        en: 'Claim 4 references C9, a chunk that never existed in the retrieved context. Pointers without targets constitute decorative hallucinations.',
        bn: 'দাবি ৪ এমন একটি চাঙ্ক C৯ নির্দেশ করে যা কনটেক্সটে কখনোই ছিল না। লক্ষ্যহীন রেফারেন্স কেবল সাজসজ্জা এবং বিভ্রান্তি তৈরি করে।',
      },
    },
    {
      id: 'cit-ex-3',
      kind: 'mcq',
      topic: 'fix-prec',
      question: {
        en: 'If claim 4 is repaired to point to an entailed chunk C1, what is the new citation precision score?',
        bn: 'যদি দাবি ৪ সংশোধন করে সমর্থিত চাঙ্ক C১ এর সাথে যুক্ত করা হয়, তবে নতুন সাইটেশন প্রিসিশন স্কোর কত হবে?',
      },
      options: [
        { en: '1.00 — all 5/5 citations are now logically entailed', bn: '১.০০ — এখন ৫/৫টি উদ্ধৃতিই যৌক্তিকভাবে প্রমাণিত' },
        { en: '0.80 — precision scores cannot be changed after generation', bn: '০.৮০ — তৈরির পর প্রিসিশন স্কোর পরিবর্তন করা যায় না' },
        { en: '0.60 precision', bn: '০.৬০ প্রিসিশন' },
        { en: '0.00 precision', bn: '০.০০ প্রিসিশন' },
      ],
      answer: 0,
      hint: { en: '5 entailed divided by 5 total citations.', bn: '৫টি প্রমাণিত দাবিকে ৫টি মোট উদ্ধৃতি দিয়ে ভাগ করুন।' },
      explanation: {
        en: '5 / 5 = 1.00. Correcting the mapping eliminates the single defective citation, raising accuracy to 100%.',
        bn: '৫ / ৫ = ১.০০। ম্যাপিং সংশোধন করলে একমাত্র ত্রুটিযুক্ত উদ্ধৃতিটি দূর হয় এবং নির্ভুলতা ১০০% এ পৌঁছায়।',
      },
    },
    {
      id: 'cit-ex-4',
      kind: 'predict',
      topic: 'split-why',
      question: {
        en: 'When a single citation bracket covers three distinct facts, one of which is completely false, what architectural problem exists and how is it corrected?',
        bn: 'যখন একটিমাত্র উদ্ধৃতি তিনটি আলাদা তথ্যকে নির্দেশ করে যার একটি সম্পূর্ণ মিথ্যা, তখন কোন সমস্যা ঘটে এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Bundled claims hide lies: split atomic, one fact per pointer.',
      accept: ['atomic', 'split', 'one fact', 'bundle', 'half', 'partial', 'single'],
      hint: { en: 'State bundled claims and splitting into atomic claims with one fact per pointer.', bn: 'বান্ডেল করা দাবির সমস্যা এবং এক নির্দেশকে একটি তথ্য রেখে পারমাণবিক ভাগে বিভক্ত করার কথা বলুন।' },
      explanation: {
        en: 'Bundled sentences hide unsupported statements behind valid citations. Decomposing text into atomic claims ensures each fact has its own verified pointer.',
        bn: 'জটিল বাক্য একটি বৈধ উদ্ধৃতির আড়ালে মিথ্যা তথ্য লুকিয়ে রাখে। বাক্যগুলোকে পারমাণবিক তথ্যে ভাগ করলে প্রতিটি বক্তব্যের নিজস্ব প্রমাণ থাকে।',
      },
    },
  ],
  quiz: {
    id: 'citations-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'citq1',
        kind: 'mcq',
        topic: 'entail-mean',
        question: {
          en: 'What does the term textual entailment mean in the context of RAG citation auditing?',
          bn: 'RAG সাইটেশন নিরীক্ষার প্রেক্ষাপটে টেক্সচুয়াল এনটেইলমেন্ট কথাটির অর্থ কী?',
        },
        options: [
          {
            en: 'The referenced document chunk provides direct, factual evidence that proves the generated statement',
            bn: 'উল্লেখিত তথ্যের খণ্ডটি সরাসরি সত্যভিত্তিক প্রমাণ প্রদান করে যা তৈরি বক্তব্যটিকে যৌক্তিকভাবে সমর্থন করে',
          },
          {
            en: 'The statement casually mentions the document title without discussing its contents',
            bn: 'বক্তব্যটিতে বিষয়বস্তু আলোচনা না করে কেবল ডকুমেন্টের নাম উল্লেখ করা হয়েছে',
          },
          {
            en: 'The citation bracket appears visually appealing on the rendered webpage',
            bn: 'উদ্ধৃতি ব্র্যাকেটটি ওয়েবপেজে দেখতে সুন্দর লাগে',
          },
          {
            en: 'The document contains more than 1,000 words regardless of its topic',
            bn: 'বিষয়বস্তু যাই হোক না কেন ডকুমেন্টটিতে ১,০০০ এর বেশি শব্দ রয়েছে',
          },
        ],
        answer: 0,
        hint: { en: 'Entailment requires logical proof rather than mere proximity.', bn: 'এনটেইলমেন্টের জন্য কেবলমাত্র পাশাপাশি থাকা নয়, যৌক্তিক প্রমাণ প্রয়োজন।' },
        explanation: {
          en: 'Entailment exists only when the source text logically necessitates the truth of the generated claim.',
          bn: 'এনটেইলমেন্ট তখনই ঘটে যখন উৎস টেক্সটের তথ্য তৈরি করা বক্তব্যের সত্যতাকে যৌক্তিকভাবে নিশ্চিত করে।',
        },
      },
      {
        id: 'citq2',
        kind: 'mcq',
        topic: 'prec-ship',
        question: {
          en: 'Between a citation precision score of 0.80 and 0.40, which system meets production deployment standards?',
          bn: '০.৮০ এবং ০.৪০ সাইটেশন প্রিসিশন স্কোরের মধ্যে কোন সিস্টেমটি প্রোডাকশনে ডেপ্লয় করার উপযুক্ত?',
        },
        options: [
          {
            en: '0.80 is deployable because 4 of 5 citations are verified; 0.40 is unsafe and must be held',
            bn: '০.৮০ ডেপ্লয় করার উপযোগী কারণ ৫টির মধ্যে ৪টি উদ্ধৃতি পরীক্ষিত; ০.৪০ ঝুঁকিপূর্ণ এবং আটকে রাখা উচিত',
          },
          {
            en: '0.40 is preferred because fewer citations reduce token usage',
            bn: '০.৪০ বেশি পছন্দনীয় কারণ কম উদ্ধৃতিতে টোকেন খরচ কম হয়',
          },
          {
            en: 'Neither system should ever be deployed under any circumstances',
            bn: 'কোনো অবস্থাতেই কোনো সিস্টেম ডেপ্লয় করা উচিত নয়',
          },
          {
            en: 'Both systems are equally suitable since citations do not impact user trust',
            bn: 'উভয় সিস্টেমই সমান উপযোগী কারণ উদ্ধৃতি ব্যবহারকারীর বিশ্বাসের ওপর কোনো প্রভাব ফেলে না',
          },
        ],
        answer: 0,
        hint: { en: 'Higher precision establishes audit reliability.', bn: 'উচ্চ প্রিসিশন অডিটের নির্ভরযোগ্যতা নিশ্চিত করে।' },
        explanation: {
          en: 'An 0.80 precision score reflects strong verifiable alignment, whereas 0.40 indicates that the majority of citations are fraudulent decorations.',
          bn: '০.৮০ প্রিসিশন শক্তিশালী প্রমাণযোগ্যতা প্রদর্শন করে, অন্যদিকে ০.৪০ নির্দেশ করে যে অধিকাংশ উদ্ধৃতিই মিথ্যা সাজসজ্জা।',
        },
      },
      {
        id: 'citq3',
        kind: 'mcq',
        topic: 'phantom-cure',
        question: {
          en: 'What architectural safeguard prevents phantom chunk citations like C9 that were never returned by the retriever?',
          bn: 'রিট্রিভার দ্বারা কখনো উদ্ধার না হওয়া C৯ এর মতো কাল্পনিক চাঙ্কের উদ্ধৃতি রোধ করতে কোন স্থাপত্য সুরক্ষা ব্যবস্থা নেওয়া হয়?',
        },
        options: [
          {
            en: 'Constrain prompt generation schemas so citations can only reference validated IDs present in the retrieved context',
            bn: 'প্রম্পট স্কিমা কঠোরভাবে নিয়ন্ত্রণ করা যাতে উদ্ধৃতিগুলো কেবল রিট্রিভ করা কনটেক্সটের বৈধ আইডির দিকেই নির্দেশ করতে পারে',
          },
          {
            en: 'Automatically fetch C9 from the internet after the model outputs it',
            bn: 'মডেল আউটপুট দেওয়ার পর ইন্টারনেট থেকে স্বয়ংক্রিয়ভাবে C৯ খুঁজে আনা',
          },
          {
            en: 'Strip all numbered citation brackets from the final response text',
            bn: 'চূড়ান্ত উত্তর থেকে সব ধরনের নম্বরযুক্ত সাইটেশন ব্র্যাকেট মুছে ফেলা',
          },
          {
            en: 'Rename phantom chunk IDs to match legitimate chunk numbers without verification',
            bn: 'যাচাই না করেই কাল্পনিক আইডিগুলোকে আসল নম্বরের সাথে মিলিয়ে নাম পরিবর্তন করা',
          },
        ],
        answer: 0,
        hint: { en: 'Restrict the citation vocabulary to retrieved IDs.', bn: 'উদ্ধৃতি লেখার ক্ষেত্রকে কেবল প্রাপ্ত আইডিগুলোর মধ্যে সীমাবদ্ধ করুন।' },
        explanation: {
          en: 'Constraining citation outputs to the active context IDs ensures models cannot hallucinate citations to unretrieved files.',
          bn: 'সক্রিয় কনটেক্সট আইডিতে উদ্ধৃতি সীমাবদ্ধ রাখলে মডেলের পক্ষে অপ্রাপ্ত নথির দিকে ভুয়া রেফারেন্স তৈরি করা অসম্ভব হয়ে পড়ে।',
        },
      },
      {
        id: 'citq4',
        kind: 'predict',
        topic: 'audit-recite',
        question: {
          en: 'What four benchmark metrics summarize the citation audit examined in this lesson?',
          bn: 'এই পাঠে আলোচিত সাইটেশন নিরীক্ষাকে সংক্ষেপে প্রকাশ করে এমন চারটি মূল পরিমাপ কী কী?',
        },
        answer: '5 claims · 4 entailed · claim 4 impostor · 0.80.',
        accept: ['5', '4', 'claim 4', '0.80', 'C9', 'impostor'],
        hint: { en: 'State claim count, entailed count, identified impostor, and precision score.', bn: 'দাবীর সংখ্যা, প্রমাণিত সংখ্যা, চিহ্নিত ভুয়া নির্দেশক এবং প্রিসিশন স্কোর উল্লেখ করুন।' },
        explanation: {
          en: 'The audit benchmark: 5 claims evaluated, 4 entailed by evidence, claim 4 identified as an unretrieved impostor, and an 0.80 precision score.',
          bn: 'অডিট মানদণ্ড: ৫টি বক্তব্য মূল্যায়িত, ৪টি তথ্যে প্রমাণিত, দাবি ৪ অপ্রাপ্ত ভুয়া হিসেবে চিহ্নিত এবং ০.৮০ প্রিসিশন স্কোর।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'grounding-claims',
    title: { en: 'Grounding Claims', bn: 'Grounding দাবি' },
  },
};
