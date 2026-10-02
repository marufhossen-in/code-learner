import type { Lesson } from '../../../lib/types';

export const EvaluationSelectionLesson: Lesson = {
  slug: 'evaluation-selection',
  tech: 'machine-learning',
  title: { en: 'Evaluation and Selection', bn: 'মূল্যায়ন ও নির্বাচন' },
  summary: {
    en: 'Fitting is easy; grading honestly is the profession. You will learn the sacred split (train tunes, validation compares, test reports ONCE), read confusion matrices like a radiologist, and watch a 95%-accurate spam filter get exposed as useless — precision 0%, recall 0% — live.',
    bn: 'ফিট করা সহজ; সৎ-গ্রেড দেওয়াই পেশা। পবিত্র-ভাগ শিখবেন (train ঠিক করে, validation তুলনা করে, test একবার প্রতিবেদন), রেডিওলজিস্ট-মতো confusion matrix পড়বেন, আর ৯৫%-নির্ভুল spam ফিল্টারকে অকেজো-প্রমাণ হতে দেখবেন — precision ০%, recall ০% — live।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Grades you can trust', bn: 'WHAT — বিশ্বাসযোগ্য-গ্রেড' },
    },
    {
      type: 'para',
      text: {
        en: 'Evaluation answers “how wrong on fresh data?” — never on training rows the model memorized. The sacred split: TRAIN (fit weights), VALIDATION (compare models, tune knobs), TEST (report once, then lock it). The confusion matrix sorts every prediction into TP (caught spam), FP (ham jailed — false alarm), FN (spam escaped — miss), TN (ham freed). From it: precision = TP/(TP+FP) “of my alarms, how many real?”, recall = TP/(TP+FN) “of the real ones, how many caught?”, F1 = their harmonic deal.',
        bn: 'মূল্যায়ন “নতুন-ডেটায় কত ভুল?”-এর উত্তর দেয় — মুখস্থ-করা training-সারিতে কখনো নয়। পবিত্র-ভাগ: TRAIN (ওজন ফিট), VALIDATION (মডেল তুলনা, knob ঠিক), TEST (একবার প্রতিবেদন, তারপর তালা)। Confusion matrix প্রতি prediction সাজায় TP (spam ধরা), FP (ham জেলে — মিথ্যা-অ্যালার্ম), FN (spam পালানো — miss), TN (ham মুক্ত)। এখান থেকে: precision = TP/(TP+FP) “অ্যালার্মের কতটা আসল?”, recall = TP/(TP+FN) “আসলগুলোর কতটা ধরা?”, F1 = দুটোর সুরেলা-চুক্তি।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The confusion matrix reads your model’s soul', bn: 'Confusion matrix মডেলের-আত্মা পড়ে' },
      svg: `<svg viewBox="0 0 640 270" font-family="system-ui, sans-serif" role="img" aria-label="Confusion matrix with formulas">
<text x="320" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">PREDICTED →</text>
<text x="20" y="150" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor" transform="rotate(-90 20 150)">TRUTH ↓</text>
<g font-size="14" font-weight="800" text-anchor="middle">
<rect x="120" y="40" width="200" height="90" rx="10" fill="#16a34a" opacity="0.18" stroke="#16a34a" stroke-width="2"/>
<text x="220" y="72" fill="currentColor">TN: ham freed ✓</text>
<text x="220" y="96" font-size="12" font-weight="600">predict ham, is ham</text>
<rect x="330" y="40" width="200" height="90" rx="10" fill="#dc2626" opacity="0.18" stroke="#dc2626" stroke-width="2"/>
<text x="430" y="72" fill="currentColor">FP: ham jailed ✗</text>
<text x="430" y="96" font-size="12" font-weight="600">predict spam, is ham</text>
<rect x="120" y="140" width="200" height="90" rx="10" fill="#dc2626" opacity="0.18" stroke="#dc2626" stroke-width="2"/>
<text x="220" y="172" fill="currentColor">FN: spam escaped ✗</text>
<text x="220" y="196" font-size="12" font-weight="600">predict ham, is spam</text>
<rect x="330" y="140" width="200" height="90" rx="10" fill="#16a34a" opacity="0.18" stroke="#16a34a" stroke-width="2"/>
<text x="430" y="172" fill="currentColor">TP: spam caught ✓</text>
<text x="430" y="196" font-size="12" font-weight="600">predict spam, is spam</text>
</g>
<g font-size="12" font-weight="700" fill="currentColor" text-anchor="middle">
<text x="220" y="258">recall = TP/(TP+FN)</text>
<text x="430" y="258">precision = TP/(TP+FP)</text>
</g>
</svg>`,
      caption: {
        en: 'Rows = truth, columns = prediction. Green diagonal = correct; red off-diagonal = the two sins.',
        bn: 'সারি = সত্য, কলাম = prediction। সবুজ-কর্ণ = সঠিক; লাল কর্ণ-বাইরে = দুই পাপ।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Train/val/test split', def: { en: 'Fit / compare / report — three jobs, three disjoint piles.', bn: 'ফিট / তুলনা / প্রতিবেদন — তিন কাজ, তিন আলাদা-স্তূপ।' } },
        { term: 'Leakage', def: { en: 'Test information sneaking into training: grades become fiction.', bn: 'Test-তথ্য training-এ ঢুকে পড়া: গ্রেড কল্পকাহিনী হয়।' } },
        { term: 'Cross-validation', def: { en: 'Rotate the val pile k times; average. Small data’s fair arena.', bn: 'Val-স্তূপ k বার ঘোরান; গড় নিন। ছোট-ডেটার ন্যায্য-মাঠ।' } },
        { term: 'Precision', def: { en: 'Alarm quality: TP/(TP+FP). High = few false alarms.', bn: 'অ্যালার্ম-মান: TP/(TP+FP)। বেশি = কম মিথ্যা-অ্যালার্ম।' } },
        { term: 'Recall', def: { en: 'Catch rate: TP/(TP+FN). High = few escapes.', bn: 'ধরা-হার: TP/(TP+FN)। বেশি = কম পলায়ন।' } },
        { term: 'Overfitting', def: { en: 'Train shines, fresh data flops: memorized noise.', bn: 'Train ঝকঝকে, নতুন-ডেটা ব্যর্থ: মুখস্থ-noise।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Accuracy is a con artist', bn: 'WHY — Accuracy ঠগ-শিল্পী' },
    },
    {
      type: 'list',
      items: [
        { en: '95% ham, 5% spam: a filter predicting “ham” always scores 95% accuracy — and catches ZERO spam. Accuracy applauds laziness on imbalanced data.', bn: '৯৫% ham, ৫% spam: সবসময় “ham” বলা-ফিল্টার ৯৫% accuracy পায় — শূন্য spam ধরে। ভারসাম্যহীন-ডেটায় accuracy অলসতা-প্রশংসা করে।' },
        { en: 'Every knob (threshold, depth, k) needs a fair judge: tune on validation, compare by CV, report on locked test.', bn: 'প্রতি knob (threshold, গভীরতা, k)-এ ন্যায্য-বিচারক লাগে: validation-এ ঠিক করুন, CV-তে তুলনা, তালাবদ্ধ-test-এ প্রতিবেদন।' },
        { en: 'Selection IS the product: clients pay for the model you ship, chosen by grades they can audit.', bn: 'নির্বাচনই পণ্য: চালু-মডেলের দাম দেয় মক্কেল, অডিট-যোগ্য গ্রেডে বাছা।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — The honest pipeline', bn: 'HOW — সৎ-পাইপলাইন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Split once, stratify', bn: '১. একবার ভাগ, স্তরিত' }, text: { en: 'Lock 15–20% as TEST (same class mix — stratified). Never peek during tuning.', bn: '১৫–২০% TEST তালাবদ্ধ করুন (একই শ্রেণি-মিশ্রণ — স্তরিত)। টিউনিং-এ কখনো উঁকি নয়।' } },
        { title: { en: '2. Tune on validation', bn: '২. Validation-এ ঠিক করুন' }, text: { en: 'Thresholds, depths, k: every knob turns against val scores, never test.', bn: 'Threshold, গভীরতা, k: প্রতি knob val-স্কোরে ঘোরে, test-এ কখনো নয়।' } },
        { title: { en: '3. Compare by cross-validation', bn: '৩. Cross-validation-এ তুলনা' }, text: { en: 'Small data? 5-fold CV averages 5 fair grades. Pick the stable winner.', bn: 'ছোট-ডেটা? ৫-fold CV ৫ ন্যায্য-গ্রেড গড়ে। স্থিত-বিজয়ী বাছুন।' } },
        { title: { en: '4. Report on test ONCE', bn: '৪. Test-এ একবার প্রতিবেদন' }, text: { en: 'Unlock, grade, publish, re-lock. Second peek = tuning on test = leakage.', bn: 'খুলুন, গ্রেড দিন, প্রকাশ করুন, আবার তালা। দ্বিতীয়-উঁকি = test-এ টিউনিং = leakage।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Exposing the 95% fraud live', bn: 'INSIDE — ৯৫%-জালিয়াতি live-ফাঁস' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit grades two filters on 100 mails (95 ham, 5 spam). Model A: TP=4 FP=2 FN=1 TN=93 → accuracy 97%, precision 67%, recall 80%, F1 73%. Lazy “always ham”: accuracy 95% — precision 0%, recall 0%, F1 0%. Same accuracy ballpark, opposite usefulness. Edit the counts and re-grade.',
        bn: 'এই tryit ১০০ মেইলে (৯৫ ham, ৫ spam) দুই ফিল্টার গ্রেড দেয়। মডেল A: TP=৪ FP=২ FN=১ TN=৯৩ → accuracy ৯৭%, precision ৬৭%, recall ৮০%, F1 ৭৩%। অলস “সবসময় ham”: accuracy ৯৫% — precision ০%, recall ০%, F1 ০%। একই accuracy-পাড়া, বিপরীত-উপযোগ। সংখ্যা বদলে আবার গ্রেড দিন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Confusion grader (edit the counts, press Run)', bn: 'Confusion গ্রেডার (সংখ্যা বদলে Run)' },
      html: '<h3>Model A vs always-ham</h3>\n<pre id="out"></pre>\n<p>Console prints the verdict in one line.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 10px; }',
      js: 'const A = { TP: 4, FP: 2, FN: 1, TN: 93 }; // ← edit me\nconst LAZY = { TP: 0, FP: 0, FN: 5, TN: 95 }; // always-ham\nconst grade = (m) => {\n  const n = m.TP + m.FP + m.FN + m.TN;\n  const acc = (m.TP + m.TN) / n;\n  const prec = m.TP + m.FP ? m.TP / (m.TP + m.FP) : 0;\n  const rec = m.TP + m.FN ? m.TP / (m.TP + m.FN) : 0;\n  const f1 = prec + rec ? (2 * prec * rec) / (prec + rec) : 0;\n  return { acc, prec, rec, f1 };\n};\nconst pct = (v) => (v * 100).toFixed(0) + "%";\nconst gA = grade(A), gL = grade(LAZY);\nlet r = "        acc  prec rec  F1\\n";\nr += "A:      " + pct(gA.acc) + "  " + pct(gA.prec) + "  " + pct(gA.rec) + "  " + pct(gA.f1) + "\\n";\nr += "lazy:   " + pct(gL.acc) + "   " + pct(gL.prec) + "   " + pct(gL.rec) + "   " + pct(gL.f1);\ndocument.getElementById("out").textContent = r;\nconsole.log("Same accuracy ballpark (" + pct(gA.acc) + " vs " + pct(gL.acc) + "), opposite recall (" + pct(gA.rec) + " vs " + pct(gL.rec) + "). Accuracy lied; recall told truth.");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Grading instincts', bn: 'RESULT — গ্রেডিং-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Train fits, validation compares, test reports once. Touch test twice and your grades are fiction.', bn: 'Train ফিট করে, validation তুলনা করে, test একবার প্রতিবেদন দেয়। Test দুবার ছুঁলে গ্রেড কল্পকাহিনী।' },
        { en: 'Imbalanced data? Quote precision/recall/F1 — never accuracy alone. The matrix always tells.', bn: 'ভারসাম্যহীন-ডেটা? precision/recall/F1 বলুন — একা-accuracy কখনো নয়। Matrix সবসময় বলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The two grading sins', bn: 'DEBUG — গ্রেডিং-এর দুই পাপ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Tuning on test (leakage in a lab coat)', bn: 'Test-এ টিউনিং (ল্যাবকোটে leakage)' },
      text: {
        en: '“Test says 88%, tweak, now 91%!” — you just FIT the test set. Every peek spends honesty; spent test = second validation. Symptoms: production flops despite glowing reports. Cure: lock test until the final run; do all tuning on validation/CV.',
        bn: '“Test বলে ৮৮%, ঠিক করি, এখন ৯১%!” — test set-ই ফিট করলেন। প্রতি উঁকি সততা-খরচ করে; খরচ-test = দ্বিতীয়-validation। লক্ষণ: ঝলমলে-প্রতিবেদনেও production ব্যর্থ। ওষুধ: চূড়ান্ত-চালান পর্যন্ত test তালাবদ্ধ; সব টিউনিং validation/CV-তে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Stratify small splits', bn: 'ছোট-ভাগ স্তরিত করুন' },
      text: {
        en: '20 spam in 400 mails, random 80/20 split: test might hold 0–8 spam by luck — grades swing wildly. Stratified splits preserve class mix in every pile. One flag (stratify=y) stabilizes every small-data grade you will ever report.',
        bn: '৪০০ মেইলে ২০ spam, এলোমেলো ৮০/২০ ভাগ: test-এ ভাগ্যে ০–৮ spam — গ্রেড বুনো-দোলে। স্তরিত-ভাগ প্রতি স্তূপে শ্রেণি-মিশ্রণ রাখে। এক flag (stratify=y) প্রতিবেদন-করা প্রতি ছোট-ডেটা গ্রেড স্থির করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Metrics with teeth', bn: 'REAL WORLD — দাঁতালো মেট্রিক' },
    },
    {
      type: 'list',
      items: [
        { en: 'Fraud teams optimize RECALL: missing one fraud costs more than ten false alarms. Thresholds slide low.', bn: 'জালিয়াতি-দল RECALL optimize করে: এক জালিয়াতি মিস দশ মিথ্যা-অ্যালার্মের চেয়ে দামি। Threshold নিচে সরে।' },
        { en: 'Search optimizes PRECISION: one bad top result erodes trust; missing page-9 links costs nothing.', bn: 'সার্চ PRECISION optimize করে: এক খারাপ-শীর্ষফল আস্থা-ক্ষয় করে; ৯ পৃষ্ঠার লিংক মিস কম ক্ষতি।' },
        { en: 'Screening (cancer, spam) reports BOTH: recall-first triage, precision-first alarms — the matrix decides staffing.', bn: 'স্ক্রিনিং (ক্যান্সার, spam) দুটোই প্রতিবেদন করে: recall-প্রথম বাছাই, precision-প্রথম অ্যালার্ম — matrix কর্মী-ঠিক করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Math of Learning', bn: 'পরবর্তী — মেশিন লার্নিংয়ের গণিত' },
    },
    {
      type: 'para',
      text: {
        en: 'You grade like a professional. Lesson 7 opens the engine room: loss surfaces, gradients, and gradient descent — the one algorithm quietly training everything from Lesson 1’s line to tomorrow’s neural nets.',
        bn: 'পেশাদার-মতো গ্রেড দেন। পাঠ ৭ ইঞ্জিনরুম খোলে: loss পৃষ্ঠ, gradient, gradient descent — পাঠ ১ এর রেখা থেকে আগামীকালের neural net পর্যন্ত সব নিখুঁতভাবে প্রশিক্ষণ দেওয়া এক অ্যালগরিদম।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Compute precision, recall, and harmonic F1 score from confusion matrix counts.',
        bn: 'Confusion matrix এর গণনা থেকে precision, recall এবং F1 স্কোর হিসাব করো।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'metrics.js',
      code: `const tp = 8, fp = 2, fn = 2, tn = 18;
const precision = tp / (tp + fp);
const recall = tp / (tp + fn);
const f1 = (2 * precision * recall) / (precision + recall);
console.log(\`Precision: \${(precision * 100).toFixed(0)}%\`);
console.log(\`Recall: \${(recall * 100).toFixed(0)}%\`);
console.log(\`F1 Score: \${(f1 * 100).toFixed(0)}%\`);
// -> Precision: 80%
// -> Recall: 80%
// -> F1 Score: 80%`,
      caption: {
        en: 'With 8 true positives and 2 false alarms, both precision and recall reach 80%.',
        bn: '৮টি সঠিক পজিটিভ আর ২টি ভুল অ্যালার্মের সাথে precision এবং recall উভয়ই ৮০% এ পৌঁছায়।',
      },
    },
  ],
  exercises: [
    {
      id: 'evs-ex-1',
      kind: 'mcq',
      topic: 'sacred-split',
      question: { en: 'Validation set’s job?', bn: 'Validation set-এর কাজ?' },
      options: [
        { en: 'Compare models + tune knobs', bn: 'মডেল তুলনা + knob ঠিক' },
        { en: 'Fit weights', bn: 'ওজন ফিট' },
        { en: 'Final honest report', bn: 'চূড়ান্ত সৎ-প্রতিবেদন' },
        { en: 'Train the intern', bn: 'ইন্টার্ন train' },
      ],
      answer: 0,
      hint: { en: 'Train fits, validation compares, test reports.', bn: 'Train ফিট, validation তুলনা, test প্রতিবেদন।' },
      explanation: {
        en: 'Three piles, three jobs: train fits weights, validation judges every choice, test reports once. Mixing jobs mixes lies into grades.',
        bn: 'তিন স্তূপ, তিন কাজ: train ওজন ফিট করে, validation প্রতি পছন্দ বিচার করে, test একবার প্রতিবেদন দেয়। কাজ-মেশানো গ্রেডে মিথ্যা-মেশায়।',
      },
    },
    {
      id: 'evs-ex-2',
      kind: 'mcq',
      topic: 'pr-defs',
      question: { en: 'TP=4, FP=2, FN=1. Precision and recall?', bn: 'TP=৪, FP=২, FN=১। Precision ও recall?' },
      options: [
        { en: 'P=4/6≈67%, R=4/5=80%', bn: 'P=৪/৬≈৬৭%, R=৪/৫=৮০%' },
        { en: 'P=80%, R=67%', bn: 'P=৮০%, R=৬৭%' },
        { en: 'P=4/5, R=4/6', bn: 'P=৪/৫, R=৪/৬' },
        { en: 'P=97%, R=95%', bn: 'P=৯৭%, R=৯৫%' },
      ],
      answer: 0,
      hint: { en: 'Precision divides by alarms (TP+FP); recall by real ones (TP+FN).', bn: 'Precision অ্যালার্মে ভাগ করে (TP+FP); recall আসলে (TP+FN)।' },
      explanation: {
        en: '6 alarms, 4 real → 67% precision. 5 real spam, 4 caught → 80% recall. Denominators differ — that difference IS the lesson.',
        bn: '৬ অ্যালার্ম, ৪ আসল → ৬৭% precision। ৫ আসল-spam, ৪ ধরা → ৮০% recall। হর আলাদা — ওই পার্থক্যই পাঠ।',
      },
    },
    {
      id: 'evs-ex-3',
      kind: 'mcq',
      topic: 'lazy-exposed',
      question: { en: '“Always ham” scores 95% accuracy, 0% recall. Correct reading?', bn: '“সবসময় ham” ৯৫% accuracy, ০% recall। সঠিক-পাঠ?' },
      options: [
        { en: 'Useless filter: accuracy applauds class imbalance', bn: 'অকেজো-ফিল্টার: accuracy শ্রেণি-ভারসাম্যহীনতা প্রশংসা করে' },
        { en: 'Excellent filter, ship it', bn: 'চমৎকার-ফিল্টার, চালু করুন' },
        { en: 'Needs more ham', bn: 'আরো ham লাগবে' },
        { en: 'Recall is broken', bn: 'Recall ভাঙা' },
      ],
      answer: 0,
      hint: { en: 'INSIDE verdict.', bn: 'INSIDE রায়।' },
      explanation: {
        en: '95% of mail is ham, so “always ham” is 95% right and 100% pointless. Recall 0% exposes it: zero spam caught. Accuracy alone would have shipped a fraud.',
        bn: '৯৫% মেইল ham, তাই “সবসময় ham” ৯৫% সঠিক ও ১০০% অর্থহীন। Recall ০% ফাঁস করে: শূন্য-spam ধরা। একা-accuracy জালিয়াতি চালু করত।',
      },
    },
    {
      id: 'evs-ex-4',
      kind: 'predict',
      topic: 'test-peek',
      question: { en: 'A teammate tunes thresholds against TEST scores “just to squeeze 2% more.” Name the sin + the honest workflow.', bn: 'সতীর্থ TEST-স্কোরে “আরো ২% চিপতে” threshold ঠিক করে। পাপ + সৎ-কর্মপ্রবাহ বলুন।' },
      answer: 'Leakage: test becomes second validation. Tune on validation/CV; touch locked test once for the final report.',
      accept: ['leakage', 'validation', 'once', 'lock', 'tune'],
      hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
      explanation: {
        en: 'Every test-guided tweak fits the test set — the “honest” grade inflates. Lock test, tune on validation, report once. No exceptions, no peeks.',
        bn: 'প্রতি test-নির্দেশিত ঠিক test set-ই ফিট করে — “সৎ”-গ্রেড ফুলে। Test তালাবদ্ধ করুন, validation-এ ঠিক করুন, একবার প্রতিবেদন দিন। ব্যতিক্রম নেই, উঁকি নেই।',
      },
    },
  ],
  quiz: {
    id: 'evaluation-selection-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'evsq1',
        kind: 'mcq',
        topic: 'fn-vs-fp',
        question: { en: 'Fraud team fears which cell most?', bn: 'জালিয়াতি-দল কোন ঘর সবচেয়ে ভয় পায়?' },
        options: [
          { en: 'FN — fraud escaped', bn: 'FN — জালিয়াতি পালানো' },
          { en: 'FP — false alarm', bn: 'FP — মিথ্যা-অ্যালার্ম' },
          { en: 'TN — honest cleared', bn: 'TN — সৎ মুক্ত' },
          { en: 'TP — fraud caught', bn: 'TP — জালিয়াতি ধরা' },
        ],
        answer: 0,
        hint: { en: 'REAL WORLD #1.', bn: 'REAL WORLD #১।' },
        explanation: {
          en: 'One escaped fraud costs real money; one false alarm costs a phone call. Costs differ → cells differ → recall-first tuning.',
          bn: 'এক পালানো-জালিয়াতি আসল-টাকা খায়; এক মিথ্যা-অ্যালার্ম এক ফোনকল। খরচ আলাদা → ঘর আলাদা → recall-প্রথম টিউনিং।',
        },
      },
      {
        id: 'evsq2',
        kind: 'mcq',
        topic: 'cv-why',
        question: { en: 'Cross-validation’s gift to small data?', bn: 'ছোট-ডেটায় cross-validation-এর উপহার?' },
        options: [
          { en: 'Every row validates once; grades average out split-luck', bn: 'প্রতি সারি একবার validate করে; গ্রেড ভাগ-ভাগ্য গড়ে' },
          { en: 'It creates new rows', bn: 'এটা নতুন-সারি বানায়' },
          { en: 'It deletes outliers', bn: 'এটা outlier মুছে' },
          { en: 'It picks k in k-means', bn: 'এটা k-means-এ k বাছে' },
        ],
        answer: 0,
        hint: { en: 'Keyterms: cross-validation.', bn: 'Keyterms: cross-validation।' },
        explanation: {
          en: 'k folds rotate the val role, so one lucky/unlucky split cannot crown a loser. Average = stable grade; spread = confidence gauge.',
          bn: 'k fold val-ভূমিকা ঘোরায়, তাই এক ভাগ্যবান/হতভাগ্য-ভাগ পরাজিতকে মুকুট দিতে পারে না। গড় = স্থিত-গ্রেড; ছড়ানো = আস্থা-মাপ।',
        },
      },
      {
        id: 'evsq3',
        kind: 'mcq',
        topic: 'stratify',
        question: { en: '20 frauds in 400 rows, random split. Danger?', bn: '৪০০ সারিতে ২০ জালিয়াতি, এলোমেলো-ভাগ। বিপদ?' },
        options: [
          { en: 'Test may hold ~0 frauds by luck; grades swing', bn: 'Test-এ ভাগ্যে ~০ জালিয়াতি; গ্রেড দোলে' },
          { en: 'Too much data', bn: 'বেশি-ডেটা' },
          { en: 'CV becomes illegal', bn: 'CV বেআইনি হয়' },
          { en: 'No danger', bn: 'বিপদ নেই' },
        ],
        answer: 0,
        hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
        explanation: {
          en: 'Random splits gamble class mix; tiny minorities vanish from piles. Stratify: every pile mirrors the 5% fraud rate — luck removed, grades comparable.',
          bn: 'এলোমেলো-ভাগ শ্রেণি-মিশ্রণে জুয়া খেলে; ক্ষুদ্র-সংখ্যালঘু স্তূপ থেকে উধাও। স্তরিত করুন: প্রতি স্তূপ ৫% জালিয়াতি-হার আয়না করে — ভাগ্য-বিদায়, গ্রেড-তুলনীয়।',
        },
      },
      {
        id: 'evsq4',
        kind: 'predict',
        topic: 'f1-when',
        question: { en: 'Precision 67%, recall 80%. A single headline number is demanded for the slide. Give it + one caveat.', bn: 'Precision ৬৭%, recall ৮০%। স্লাইডে এক শিরোনাম-সংখ্যা দাবি। দিন + এক সতর্কতা।' },
        answer: 'F1 ≈ 73% (harmonic mean) — but the slide must still footnote P and R, since one number hides which sin dominates.',
        accept: ['F1', '73', 'harmonic', 'footnote', 'precision', 'recall'],
        hint: { en: 'F1 = 2PR/(P+R).', bn: 'F1 = ২PR/(P+R)।' },
        explanation: {
          en: 'F1 = 2·0.67·0.80/1.47 ≈ 73%. Honest headline — but precision and recall still belong in the footnote: 73% never reveals whether alarms or escapes dominate.',
          bn: 'F1 = ২·০.৬৭·০.৮০/১.৪৭ ≈ ৭৩%। সৎ-শিরোনাম — তবু precision-recall পাদটীকায় থাকবেই: ৭৩% কখনো বলে না অ্যালার্ম না পলায়ন আধিপত্য করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'math-of-learning',
    title: { en: 'Math of Learning', bn: 'শেখার গণিত' },
  },
};