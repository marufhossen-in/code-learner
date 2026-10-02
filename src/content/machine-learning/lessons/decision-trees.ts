import type { Lesson } from '../../../lib/types';

export const DecisionTreesLesson: Lesson = {
  slug: 'decision-trees',
  tech: 'machine-learning',
  title: {
    en: 'Decision Trees',
    bn: 'কুড়ি-প্রশ্নে শেখা: সবচেয়ে-প্রকাশক হ্যাঁ/না প্রশ্নে সারি ভাগ করো'
  },
  summary: {
    en: 'Learning as twenty questions: split rows by the most revealing yes/no question, recurse until leaves are pure, then prune back the greed. You will read a tree aloud like a doctor’s flowchart, grow a one-level stump by brute force, and learn why trees bend where lines cannot.',
    bn: 'কুড়ি-প্রশ্নে শেখা: সবচেয়ে-প্রকাশক হ্যাঁ/না প্রশ্নে সারি ভাগ করো, পাতা বিশুদ্ধ না-হওয়া পর্যন্ত চালাও, তারপর লোভ ছাঁটো। ডাক্তারের flowchart-এর মতো tree জোরে পড়বেন, brute force-এ এক-স্তর stump গজাবেন, আর জানবেন রেখা যেখানে পারে না tree সেখানে বাঁকে কেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Questions until pure', bn: 'WHAT — বিশুদ্ধ না-হওয়া পর্যন্ত প্রশ্ন' },
    },
    {
      type: 'para',
      text: {
        en: 'A decision tree sorts each row by asking questions: “hours ≥ 5?” No → “sleep ≥ 7?” No → FAIL. Each question (split) divides rows; each endpoint (leaf) votes its majority label. Training = choosing, at every node, the question that best separates classes (biggest purity gain). The result partitions feature space into rectangles — bending boundaries lines cannot draw.',
        bn: 'Decision tree প্রতি সারি প্রশ্নে বাছে: “ঘণ্টা ≥ ৫?” না → “ঘুম ≥ ৭?” না → ফেল। প্রতি প্রশ্ন (split) সারি ভাগ করে; প্রতি প্রান্ত (leaf) সংখ্যাগরিষ্ঠ-label ভোট দেয়। Training = প্রতি node-এ শ্রেণি-সেরা-আলাদা প্রশ্ন বাছা (সর্বোচ্চ বিশুদ্ধতা-লাভ)। ফল feature-জগৎ আয়তক্ষেত্রে ভাগ করে — রেখার-অসাধ্য বাঁকা-সীমানা আঁকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'A tree you can read aloud', bn: 'জোরে-পড়া যায় এমন tree' },
      svg: `<svg viewBox="0 0 640 300" font-family="system-ui, sans-serif" role="img" aria-label="Decision tree: hours split, then sleep split, then pass or fail leaves">
<rect x="230" y="20" width="180" height="52" rx="10" fill="#4f46e5" opacity="0.14" stroke="#4f46e5" stroke-width="2"/>
<text x="320" y="42" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">hours ≥ 5 ?</text>
<text x="320" y="60" text-anchor="middle" font-size="12" fill="currentColor">10 rows: 6 pass / 4 fail</text>
<line x1="260" y1="72" x2="150" y2="120" stroke="#4f46e5" stroke-width="2"/>
<line x1="380" y1="72" x2="490" y2="120" stroke="#4f46e5" stroke-width="2"/>
<text x="195" y="105" font-size="13" font-weight="700" fill="currentColor">no ↓</text>
<text x="435" y="105" font-size="13" font-weight="700" fill="currentColor">yes ↓</text>
<rect x="60" y="120" width="180" height="52" rx="10" fill="#4f46e5" opacity="0.14" stroke="#4f46e5" stroke-width="2"/>
<text x="150" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">sleep ≥ 7 ?</text>
<text x="150" y="160" text-anchor="middle" font-size="12" fill="currentColor">4 rows: 1 / 3</text>
<rect x="400" y="120" width="180" height="52" rx="10" fill="#2563eb" opacity="0.14" stroke="#2563eb" stroke-width="2"/>
<text x="490" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">→ PASS</text>
<text x="490" y="160" text-anchor="middle" font-size="12" fill="currentColor">6 rows: 5 / 1 ✓</text>
<line x1="110" y1="172" x2="70" y2="220" stroke="#4f46e5" stroke-width="2"/>
<line x1="190" y1="172" x2="230" y2="220" stroke="#4f46e5" stroke-width="2"/>
<text x="60" y="208" font-size="12" font-weight="700" fill="currentColor">no</text>
<text x="225" y="208" font-size="12" font-weight="700" fill="currentColor">yes</text>
<rect x="10" y="220" width="120" height="46" rx="10" fill="#dc2626" opacity="0.14" stroke="#dc2626" stroke-width="2"/>
<text x="70" y="240" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">→ FAIL</text>
<text x="70" y="257" text-anchor="middle" font-size="12" fill="currentColor">3 rows: 0 / 3 ✓</text>
<rect x="180" y="220" width="120" height="46" rx="10" fill="#2563eb" opacity="0.14" stroke="#2563eb" stroke-width="2"/>
<text x="240" y="240" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">→ PASS</text>
<text x="240" y="257" text-anchor="middle" font-size="12" fill="currentColor">1 row: 1 / 0</text>
<text x="330" y="245" font-size="13" fill="currentColor">Read it: “studied 5+ → pass;</text>
<text x="330" y="265" font-size="13" fill="currentColor">else need 7+ sleep.” A flowchart that learned itself.</text>
</svg>`,
      caption: {
        en: 'Every path is a plain-English rule. That readability is why trees survive in regulated industries.',
        bn: 'প্রতি পথ সরল-ভাষা নিয়ম। এই পাঠযোগ্যতায় নিয়ন্ত্রিত-শিল্পে tree টিকে আছে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Node / split', def: { en: 'A question (“hours ≥ 5?”) dividing rows in two.', bn: 'সারি দুই-ভাগ করা প্রশ্ন (“ঘণ্টা ≥ ৫?”)।' } },
        { term: 'Leaf', def: { en: 'An endpoint voting its rows’ majority label.', bn: 'সারির সংখ্যাগরিষ্ঠ-label-ভোট প্রান্ত।' } },
        { term: 'Purity', def: { en: 'How one-sided a node is (all-pass = pure). Splits chase purity gain.', bn: 'Node কত একপেশে (সব-পাস = বিশুদ্ধ)। Split বিশুদ্ধতা-লাভ তাড়া করে।' } },
        { term: 'Depth', def: { en: 'Longest question-chain. Depth 1 = stump; depth 20 = memorization risk.', bn: 'দীর্ঘতম প্রশ্ন-শৃঙ্খল। গভীরতা ১ = stump; ২০ = মুখস্থ-ঝুঁকি।' } },
        { term: 'Pruning', def: { en: 'Cutting back greedy branches that only memorized noise.', bn: 'শুধু-noise-মুখস্থ লোভী-শাখা ছাঁটা।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The model you can defend in court', bn: 'WHY — আদালতে-সমর্থনযোগ্য মডেল' },
    },
    {
      type: 'list',
      items: [
        { en: 'Explainable to anyone: print the tree, hand it to a doctor, auditor, or judge — no math degree needed.', bn: 'সবার কাছে ব্যাখ্যাযোগ্য: tree ছাপুন, ডাক্তার, অডিটর, বিচারকের হাতে দিন — গণিত-ডিগ্রি লাগে না।' },
        { en: 'Handles curves and categories natively: no scaling, no sigmoid — questions work on anything.', bn: 'বক্র-শ্রেণি স্বভাবত সামলায়: scaling নেই, sigmoid নেই — প্রশ্ন সবকিছুতে চলে।' },
        { en: 'Base of the winners: random forests and gradient boosting (L4) are trees, ensembled.', bn: 'জয়ীদের ভিত্তি: random forest আর gradient boosting (পাঠ ৪) tree-ই, দলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Grow, then prune', bn: 'HOW — গজান, তারপর ছাঁটুন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Score every possible question', bn: '১. সম্ভাব্য প্রতি প্রশ্ন স্কোর' }, text: { en: 'Each feature × each midpoint: how pure would the two halves be?', bn: 'প্রতি feature × প্রতি মধ্যবিন্দু: দুই অর্ধ কত বিশুদ্ধ হতো?' } },
        { title: { en: '2. Take the best, recurse', bn: '২. সেরাটা নিন, পুনরাবৃত্তি' }, text: { en: 'Split on the winner; repeat inside each child with remaining rows.', bn: 'জয়ীতে ভাগ; বাকি-সারিতে প্রতি শিশুতে আবার।' } },
        { title: { en: '3. Stop early', bn: '৩. আগেই থামুন' }, text: { en: 'Max depth, min rows per leaf: guardrails against memorizing single rows.', bn: 'সর্বোচ্চ গভীরতা, পাতায় সর্বনিম্ন সারি: এক-সারি মুখস্থ-বিরোধী রেলিং।' } },
        { title: { en: '4. Prune on validation rows', bn: '৪. Validation-সারিতে ছাঁটুন' }, text: { en: 'Cut branches that do not pay on unseen rows. Simpler tree, truer tree.', bn: 'অদেখা-সারিতে দাম না-দেওয়া শাখা কাটুন। সরল tree, সত্যি tree।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Grow a stump by brute force', bn: 'INSIDE — Brute force-এ stump গজান' },
    },
    {
      type: 'para',
      text: {
        en: 'A stump = depth-1 tree: ONE question. This tryit tests every midpoint split on study hours and prints each candidate’s accuracy — watch 4.5 win at 9/10 (the noisy 7-hour failer defeats perfection). Change that row’s label and re-run: purity is fragile, which is exactly why forests (L4) vote.',
        bn: 'Stump = গভীরতা-১ tree: এক প্রশ্ন। এই tryit পড়ার-ঘণ্টায় প্রতি মধ্যবিন্দু-ভাগ পরীক্ষা করে প্রতি প্রার্থীর accuracy ছাপে — ৪.৫-কে ৯/১০-এ জিততে দেখুন (noisy ৭-ঘণ্টা ফেলার নিখুঁততা হারায়)। ওই সারির label বদলে আবার চালান: বিশুদ্ধতা ভঙ্গুর, ঠিক এজন্য forest (পাঠ ৪) ভোট দেয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Decision stump: every split scored (edit the noisy row, re-run)', bn: 'Decision stump: প্রতি ভাগ-স্কোর (noisy সারি বদলে আবার চালান)' },
      html: '<h3>One question, best split wins</h3>\n<pre id="out"></pre>\n<p>Console shows every candidate.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: '// [hours, passed?] — note the noisy 7-hour failer\nconst ROWS = [[1,0],[2,0],[3,0],[4,0],[5,1],[6,1],[7,0],[8,1],[9,1],[10,1]];\nconst acc = (t) => {\n  let ok = 0;\n  ROWS.forEach(([h, y]) => { if ((h >= t ? 1 : 0) === y) ok++; });\n  return ok;\n};\nlet best = null;\nfor (let t = 1.5; t <= 9.5; t += 1) {\n  const a = acc(t);\n  console.log("split hours >= " + t + "  →  " + a + "/10 right");\n  if (!best || a > best.a) best = { t, a };\n}\nconst verdict = "Best stump: hours >= " + best.t + "  →  " + best.a + "/10 right.\\n" +\n  "The 7-hour failer blocks 10/10: one noisy row, and purity breaks.\\n" +\n  "Fix it in ROWS (change [7,0] to [7,1]) and re-run: 10/10.";\ndocument.getElementById("out").textContent = verdict;\nconsole.log(verdict);',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Think in questions', bn: 'RESULT — প্রশ্নে চিন্তা করুন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Read any tree as nested if-rules; trace any row root→leaf by hand.', bn: 'যেকোনো tree nested if-নিয়মে পড়ুন; যেকোনো সারি মূল→পাতা হাতে চালান।' },
        { en: 'One noisy row breaks purity: robustness must come from ensembles (L4) or pruning.', bn: 'এক noisy সারি বিশুদ্ধতা ভাঙে: মজবুতি ensemble (পাঠ ৪) বা ছাঁটাই থেকে আসতে হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Greed memorizes', bn: 'DEBUG — লোভ মুখস্থ করে' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Unlimited depth = a lookup table wearing leaves', bn: 'অসীম গভীরতা = পাতা-পরা lookup টেবিল' },
      text: {
        en: 'Let it split until every leaf holds one row: 100% train, garbage test. Each deep branch memorizes noise. Guard the same trio as always: max depth, min leaf rows, prune on validation — depth 3–8 wins most real tabular jobs.',
        bn: 'প্রতি পাতায় এক সারি না-হওয়া পর্যন্ত ভাগ হতে দিন: train ১০০%, test আবর্জনা। প্রতি গভীর-শাখা noise মুখস্থ করে। সেই ত্রয়ী পাহারা: সর্বোচ্চ গভীরতা, পাতায় সর্বনিম্ন সারি, validation-ছাঁটাই — গভীরতা ৩–৮ বেশিরভাগ আসল tabular কাজ জেতে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Trees do not need scaling — a rare free lunch', bn: 'Tree-তে scaling লাগে না — বিরল ফ্রি-লাঞ্চ' },
      text: {
        en: '“hours ≥ 5?” works identically whether hours are 0–10 or 0–10,000: only ORDER matters. Skip normalization for trees (unlike neural nets and k-NN). Save the preprocessing budget for missing values and categories.',
        bn: '“ঘণ্টা ≥ ৫?” ০–১০ বা ০–১০,০০০ এ একই চলে: শুধু ক্রম জরুরি। Tree-তে normalization এড়ান (neural net আর k-NN-এর উল্টো)। Preprocessing-বাজেট missing মান আর শ্রেণিতে বাঁচান।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Flowcharts that learned', bn: 'REAL WORLD — শেখা-flowchart' },
    },
    {
      type: 'list',
      items: [
        { en: 'Medical triage protocols and loan policy sheets are human-written decision trees — ML trees speak the same language, fitted to data.', bn: 'মেডিকেল-triage প্রোটোকল আর ঋণ-নীতি মানুষের-লেখা decision tree — ML tree একই ভাষা বলে, ডেটায় বসিয়ে।' },
        { en: 'Churn playbooks: “contract < 3 months AND complaints ≥ 2 → call today” ships as a poster, learned as a tree.', bn: 'Churn playbook: “চুক্তি < ৩ মাস AND অভিযোগ ≥ ২ → আজই কল” পোস্টারে চালু, tree-তে শেখা।' },
        { en: 'Every “model explanation” tool for black boxes (SHAP, LIME) exists because trees set the readability bar.', bn: 'Black box-এর প্রতি “মডেল-ব্যাখ্যা” টুল (SHAP, LIME) আছে কারণ tree পাঠযোগ্যতা-মান বসিয়েছে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Forests and ensembles', bn: 'পরবর্তী — ফরেস্ট ও এনসেম্বল' },
    },
    {
      type: 'para',
      text: {
        en: 'One tree overfits; a hundred voting trees do not. Lesson 4 grows the forest: bagging, random forests, and the boosting idea — the algorithms behind most tabular victories of the last twenty years.',
        bn: 'এক tree overfit করে; ভোট-দেওয়া শত tree করে না। পাঠ ৪ forest গজায়: bagging, random forest, boosting-ধারণা — গত বিশ বছরের বেশিরভাগ tabular জয়ের অ্যালগরিদম।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Compute Gini impurity for pure and mixed partitions to evaluate a decision tree split.',
        bn: 'ডিসিশন ট্রির বিভাজন মূল্যায়নে খাঁটি ও মিশ্র অংশের Gini impurity হিসাব করো।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'tree_split.js',
      code: `function gini(labels) {
  const p1 = labels.filter(y => y === 1).length / labels.length;
  const p0 = 1 - p1;
  return 1 - (p1 * p1 + p0 * p0);
}
const left = [0, 0, 0];    // pure 0s
const right = [1, 1, 1, 0]; // 3 ones, 1 zero
console.log("Left Gini:", gini(left).toFixed(2));
console.log("Right Gini:", gini(right).toFixed(2));
// -> Left Gini: 0.00
// -> Right Gini: 0.38`,
      caption: {
        en: 'The pure left partition scores 0.00 Gini while the mixed right partition scores 0.38.',
        bn: 'খাঁটি বাম অংশটি ০.০০ Gini স্কোর করে এবং মিশ্র ডান অংশটি ০.৩৮ স্কোর করে।',
      },
    },
  ],
  exercises: [
    {
      id: 'dtr-ex-1',
      kind: 'mcq',
      topic: 'trace',
      question: { en: 'Trace the lesson tree: hours=3, sleep=8. Verdict?', bn: 'পাঠের tree চালান: ঘণ্টা=৩, ঘুম=৮। রায়?' },
      options: [
        { en: 'PASS (hours<5 → sleep≥7 → pass leaf)', bn: 'পাস (ঘণ্টা<৫ → ঘুম≥৭ → পাস-পাতা)' },
        { en: 'FAIL', bn: 'ফেল' },
        { en: 'Cannot decide — missing branch', bn: 'সিদ্ধান্ত অসম্ভব — শাখা নেই' },
        { en: 'PASS with 50% doubt', bn: '৫০% সন্দেহে পাস' },
      ],
      answer: 0,
      hint: { en: 'Root first: 3 ≥ 5?', bn: 'আগে মূল: ৩ ≥ ৫?' },
      explanation: {
        en: '3 < 5 → left; 8 ≥ 7 → right leaf: PASS (1/0 rows). Tracing root→leaf is using a tree.',
        bn: '৩ < ৫ → বামে; ৮ ≥ ৭ → ডান-পাতা: পাস (১/০ সারি)। মূল→পাতা চালানোই tree-ব্যবহার।',
      },
    },
    {
      id: 'dtr-ex-2',
      kind: 'mcq',
      topic: 'purity',
      question: { en: 'Which node is purest?', bn: 'কোন node বিশুদ্ধতম?' },
      options: [
        { en: '8 pass / 0 fail', bn: '৮ পাস / ০ ফেল' },
        { en: '5 pass / 5 fail', bn: '৫ পাস / ৫ ফেল' },
        { en: '6 pass / 4 fail', bn: '৬ পাস / ৪ ফেল' },
        { en: '1 pass / 7 fail', bn: '১ পাস / ৭ ফেল' },
      ],
      answer: 0,
      hint: { en: 'Pure = one-sided.', bn: 'বিশুদ্ধ = একপেশে।' },
      explanation: {
        en: '8/0 is perfectly one-sided — a finished leaf. 5/5 is maximally impure (a coin flip). Splits chase the 8/0 direction.',
        bn: '৮/০ নিখুঁত একপেশে — সমাপ্ত-পাতা। ৫/৫ সর্বোচ্চ অবিশুদ্ধ (মুদ্রা-টস)। Split ৮/০-দিকে তাড়া করে।',
      },
    },
    {
      id: 'dtr-ex-3',
      kind: 'mcq',
      topic: 'scaling',
      question: { en: 'Do decision trees need feature scaling?', bn: 'Decision tree-তে feature scaling লাগে?' },
      options: [
        { en: 'No — splits only compare order', bn: 'না — split শুধু ক্রম তুলনা করে' },
        { en: 'Yes — always normalize first', bn: 'হ্যাঁ — আগে normalize' },
        { en: 'Only for numbers above 100', bn: 'শুধু ১০০ এর ওপর সংখ্যায়' },
        { en: 'Only on Tuesdays', bn: 'শুধু মঙ্গলবার' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip: the free lunch.', bn: 'DEBUG tip: ফ্রি-লাঞ্চ।' },
      explanation: {
        en: '“x ≥ t?” is scale-invariant: multiplying x by 1000 just multiplies t. Order is all trees see.',
        bn: '“x ≥ t?” স্কেল-অপরিবর্তনীয়: x-কে ১০০০ গুণে t-ও গুণ হয়। Tree শুধু ক্রম দেখে।',
      },
    },
    {
      id: 'dtr-ex-4',
      kind: 'predict',
      topic: 'stump-best',
      question: { en: 'From the tryit: why does split 4.5 beat split 6.5? Count the errors of each.', bn: 'Tryit থেকে: ৪.৫-ভাগ ৬.৫-কে হারায় কেন? প্রতিটার error গুনুন।' },
      answer: '4.5 errs once (the 7-hour failer votes pass): 9/10. 6.5 errs twice (5 and 6 vote fail): 8/10.',
      accept: ['9/10', '8/10', '7-hour', 'failer', '4.5', '6.5'],
      hint: { en: 'Run it — the console lists every candidate.', bn: 'চালান — console প্রতি প্রার্থী তালিকা করে।' },
      explanation: {
        en: 'At 6.5, rows 5,6 (truth 1) fall left → vote 0: two errors. At 4.5 only the noisy 7 pollutes the right side: one error. Majority math, nothing else.',
        bn: '৬.৫-তে সারি ৫,৬ (সত্যি ১) বামে পড়ে → ভোট ০: দুই error। ৪.৫-তে শুধু noisy ৭ ডান দূষিত করে: এক error। সংখ্যাগরিষ্ঠ-গণিত, আর কিছু নয়।',
      },
    },
  ],
  quiz: {
    id: 'decision-trees-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'dtrq1',
        kind: 'mcq',
        topic: 'leaf-vote',
        question: { en: 'A leaf holds 2 pass / 9 fail. It predicts…', bn: 'পাতায় ২ পাস / ৯ ফেল। Predict…' },
        options: [
          { en: 'FAIL (majority)', bn: 'ফেল (সংখ্যাগরিষ্ঠ)' },
          { en: 'PASS (minority courage)', bn: 'পাস (সংখ্যালঘু-সাহস)' },
          { en: 'Nothing — leaves cannot vote', bn: 'কিছু না — পাতা ভোট দিতে পারে না' },
          { en: '50/50 coin flip', bn: '৫০/৫০ মুদ্রা-টস' },
        ],
        answer: 0,
        hint: { en: 'Leaves vote majority.', bn: 'পাতা সংখ্যাগরিষ্ঠ-ভোট দেয়।' },
        explanation: {
          en: '9 > 2 → FAIL. (The 2/11 pass-rate can ALSO be reported as a probability — trees calibrate too.)',
          bn: '৯ > ২ → ফেল। (২/১১ পাস-হার probability-ও জানানো যায় — tree calibrate-ও করে।)',
        },
      },
      {
        id: 'dtrq2',
        kind: 'mcq',
        topic: 'depth-risk',
        question: { en: 'Depth-30 tree, 100 rows, 100% train accuracy. Diagnosis?', bn: 'গভীরতা-৩০ tree, ১০০ সারি, train ১০০%। রোগ?' },
        options: [
          { en: 'Memorization — prune and cap depth', bn: 'মুখস্থ — ছাঁটুন, গভীরতা বাঁধুন' },
          { en: 'Perfect learning — ship it', bn: 'নিখুঁত শেখা — চালু করুন' },
          { en: 'Underfitting — grow deeper', bn: 'Underfitting — আরো গভীর করুন' },
          { en: 'Needs more features only', bn: 'শুধু আরো feature লাগবে' },
        ],
        answer: 0,
        hint: { en: '“A lookup table wearing leaves.”', bn: '“পাতা-পরা lookup টেবিল।”' },
        explanation: {
          en: '30 levels for 100 rows ≈ one row per leaf: the tree memorized IDs, not patterns. Cap depth 3–8, require min leaf rows, prune.',
          bn: '১০০ সারিতে ৩০ স্তর ≈ পাতায় এক সারি: tree ID মুখস্থ করেছে, প্যাটার্ন নয়। গভীরতা ৩–৮ বাঁধুন, পাতায় সর্বনিম্ন সারি, ছাঁটুন।',
        },
      },
      {
        id: 'dtrq3',
        kind: 'mcq',
        topic: 'rectangles',
        question: { en: 'Axis-aligned splits partition feature space into…', bn: 'অক্ষ-সারিবদ্ধ split feature-জগৎ ভাগ করে…' },
        options: [
          { en: 'Rectangles', bn: 'আয়তক্ষেত্রে' },
          { en: 'Circles', bn: 'বৃত্তে' },
          { en: 'Triangles', bn: 'ত্রিভুজে' },
          { en: 'Nothing — trees do not partition', bn: 'কিছুতে না — tree ভাগ করে না' },
        ],
        answer: 0,
        hint: { en: 'WHAT, last line.', bn: 'WHAT, শেষ লাইন।' },
        explanation: {
          en: 'Each “x ≥ t?” cuts perpendicular to one axis: stacked cuts make rectangles. (Diagonal truth needs many small rectangles — trees approximate curves stepwise.)',
          bn: 'প্রতি “x ≥ t?” এক অক্ষে লম্ব-কাটা: স্তূপ-কাটায় আয়তক্ষেত্র। (কর্ণ-সত্যিতে অনেক ছোট আয়তক্ষেত্র লাগে — tree বক্র ধাপে ধাপে আনে।)',
        },
      },
      {
        id: 'dtrq4',
        kind: 'predict',
        topic: 'prune-call',
        question: { en: 'A branch splits 50/50 rows into 25/25 + 25/25 children. Prune or keep? One-line reason.', bn: 'শাখা ৫০/৫০ সারি ২৫/২৫ + ২৫/২৫ শিশুতে ভাগ করে। ছাঁটবেন না রাখবেন? এক-লাইন কারণ।' },
        answer: 'Prune: zero purity gain — the question taught nothing, it only deepens memorization risk.',
        accept: ['prune', 'purity', 'gain', 'zero', 'nothing'],
        hint: { en: 'Did any child get purer?', bn: 'কোনো শিশু বিশুদ্ধতর হয়েছে?' },
        explanation: {
          en: 'Both children mirror the parent (50/50): purity gain = 0. The split adds complexity with zero information — prune it.',
          bn: 'দুই শিশু মাতার আয়না (৫০/৫০): বিশুদ্ধতা-লাভ = ০। Split শূন্য-তথ্যে জটিলতা যোগ করে — ছাঁটুন।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'forests-ensembles',
    title: { en: 'Forests and Ensembles', bn: 'Forest আর Ensemble' },
  },
};