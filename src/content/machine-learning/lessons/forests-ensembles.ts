import type { Lesson } from '../../../lib/types';

export const ForestsEnsemblesLesson: Lesson = {
  slug: 'forests-ensembles',
  tech: 'machine-learning',
  title: {
    en: 'Forests and Ensembles',
    bn: 'ভোট-দেওয়া শত tree generalize করে — Machine Learning'
  },
  summary: {
    en: 'One tree memorizes; a hundred voting trees generalize. You will learn bagging (bootstrap crowds), random forests (crowds of deliberately-different trees), and boosting (teammates fixing each other’s errors) — then run a five-stump forest live and watch the majority outvote every noisy member.',
    bn: 'এক tree মুখস্থ করে; ভোট-দেওয়া শত tree generalize করে। Bagging (bootstrap-ভিড়), random forest (ইচ্ছে-আলাদা tree-ভিড়), boosting (একে-অপরের ভুল-সারানো সতীর্থ) শিখবেন — তারপর পাঁচ-stump forest live চালিয়ে সংখ্যাগরিষ্ঠকে প্রতি noisy সদস্য-হারাতে দেখবেন।',
  },
  minutes: 17,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Crowds that outvote noise', bn: 'WHAT — noise-হারানো ভিড়' },
    },
    {
      type: 'para',
      text: {
        en: 'An ensemble trains many models and merges their votes. Bagging grows each tree on a bootstrap sample drawn with replacement. Some rows repeat while roughly 37 percent sit out. Each tree sees a different sample and memorizes different noise, so averaging cancels the noise. Random forests add one twist: each split considers a random subset of features, forcing trees to disagree usefully. Boosting trains trees sequentially, each fixing the errors of its predecessor.',
        bn: 'Ensemble পদ্ধতিতে অনেকগুলো মডেল train করে তাদের ভোটকে মেলানো হয়। Bagging প্রতিটি tree-কে প্রতিস্থাপন সহ bootstrap নমুনায় বড় করে। কিছু সারি একাধিকবার আসে এবং প্রায় ৩৭ শতাংশ বাদ থাকে। প্রতিটি tree আলাদা নমুনা দেখে আলাদা noise শেখে, তাই গড় করলে noise কেটে যায়। Random forest ১টি নতুন কৌশল যোগ করে: প্রতিটি split শুধুমাত্র এলোমেলো কিছু feature দেখে, যা tree গুলোকে কার্যকর ভিন্নমতে বাধ্য করে। Boosting গাছগুলোকে ক্রমান্বয়ে train করে, যেখানে প্রতিটি গাছ পূর্বসূরির ভুল সারায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Five stumps vote; the majority rules', bn: 'পাঁচ stump ভোট দেয়; সংখ্যাগরিষ্ঠ শাসন করে' },
      svg: `<svg viewBox="0 0 640 260" font-family="system-ui, sans-serif" role="img" aria-label="Five trees voting, majority wins">
<g font-size="12" font-weight="700" fill="currentColor">
<polygon points="70,60 40,110 100,110" fill="#4f46e5" opacity="0.25" stroke="#4f46e5" stroke-width="2"/>
<text x="70" y="135" text-anchor="middle">T1</text>
<polygon points="190,60 160,110 220,110" fill="#4f46e5" opacity="0.25" stroke="#4f46e5" stroke-width="2"/>
<text x="190" y="135" text-anchor="middle">T2</text>
<polygon points="310,60 280,110 340,110" fill="#4f46e5" opacity="0.25" stroke="#4f46e5" stroke-width="2"/>
<text x="310" y="135" text-anchor="middle">T3</text>
<polygon points="430,60 400,110 460,110" fill="#4f46e5" opacity="0.25" stroke="#4f46e5" stroke-width="2"/>
<text x="430" y="135" text-anchor="middle">T4</text>
<polygon points="550,60 520,110 580,110" fill="#4f46e5" opacity="0.25" stroke="#4f46e5" stroke-width="2"/>
<text x="550" y="135" text-anchor="middle">T5</text>
</g>
<g font-size="15" font-weight="800" text-anchor="middle">
<rect x="48" y="150" width="44" height="34" rx="8" fill="#2563eb" opacity="0.2" stroke="#2563eb" stroke-width="2"/>
<text x="70" y="173" fill="currentColor">1</text>
<rect x="168" y="150" width="44" height="34" rx="8" fill="#2563eb" opacity="0.2" stroke="#2563eb" stroke-width="2"/>
<text x="190" y="173" fill="currentColor">1</text>
<rect x="288" y="150" width="44" height="34" rx="8" fill="#dc2626" opacity="0.2" stroke="#dc2626" stroke-width="2"/>
<text x="310" y="173" fill="currentColor">0</text>
<rect x="408" y="150" width="44" height="34" rx="8" fill="#2563eb" opacity="0.2" stroke="#2563eb" stroke-width="2"/>
<text x="430" y="173" fill="currentColor">1</text>
<rect x="528" y="150" width="44" height="34" rx="8" fill="#dc2626" opacity="0.2" stroke="#dc2626" stroke-width="2"/>
<text x="550" y="173" fill="currentColor">0</text>
</g>
<line x1="320" y1="184" x2="320" y2="200" stroke="currentColor" stroke-width="2"/>
<rect x="220" y="200" width="200" height="40" rx="10" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="225" text-anchor="middle" font-size="15" font-weight="800" fill="currentColor">majority: 1 (3 of 5) ✓</text>
</svg>`,
      caption: {
        en: 'Two members err — the crowd still rules correctly. Independent errors cancel; shared signal survives.',
        bn: 'দুই সদস্য ভুল করে — ভিড় তবু সঠিক শাসন করে। স্বাধীন ভুলগুলো বাতিল হয়; ভাগ-সংকেত টিকে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Ensemble', def: { en: 'Many models merged: vote (classes) or average (numbers).', bn: 'মেলানো অনেক মডেল: ভোট (শ্রেণি) বা গড় (সংখ্যা)।' } },
        { term: 'Bootstrap', def: { en: 'Resample with replacement: same size, ~63% unique rows.', bn: 'প্রতিস্থাপন-সহ পুনঃনমুনা: একই আকার, ~৬৩% অনন্য সারি।' } },
        { term: 'Bagging', def: { en: 'Bootstrap crowds + average: the variance killer.', bn: 'Bootstrap-ভিড় + গড়: variance-ঘাতক।' } },
        { term: 'Random forest', def: { en: 'Bagged trees with random feature subsets per split.', bn: 'প্রতি split-এ এলোমেলো-feature উপসেট-সহ bagged tree।' } },
        { term: 'Boosting', def: { en: 'Sequential trees, each repairing predecessors’ errors (AdaBoost, XGBoost).', bn: 'ক্রমিক tree, প্রতিটা পূর্বসূরির ভুল সারায় (AdaBoost, XGBoost)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The tabular champion, twice over', bn: 'WHY — Tabular চ্যাম্পিয়ন, দুবার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Random forests won the 2000s; gradient boosting (XGBoost/LightGBM) won the 2010s. Most “which model for my spreadsheet?” answers are still: boosted trees.', bn: '২০০০-এ random forest জিতেছিল; ২০১০-এ gradient boosting (XGBoost/LightGBM)। “স্প্রেডশিটে কোন মডেল?”-এর উত্তর এখনো: boosted tree।' },
        { en: 'Variance dies by averaging: if members err independently, 100 voters cut noise ~10×. Forests manufacture that independence.', bn: 'গড়ে variance মরে: সদস্য স্বাধীন-ভুল করলে ১০০ ভোটার noise ~১০× কমায়। Forest সেই স্বাধীনতা বানায়।' },
        { en: 'Robust defaults: forests forgive messy data, mixed types, and missing values better than almost anything.', bn: 'মজবুত default: forest অগোছালো-ডেটা, মিশ্র-ধরন, missing মান প্রায় সবচেয়ে ভালো ক্ষমা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Grow a forest in 4 steps', bn: 'HOW — Forest গজান ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Bootstrap N samples', bn: '১. N নমুনা bootstrap' }, text: { en: 'N = trees wanted (100+). Each sample: draw rows with replacement.', bn: 'N = চাওয়া গাছের সংখ্যা (১০০+)। প্রতি নমুনা: প্রতিস্থাপন-সহ সারি তুলুন।' } },
        { title: { en: '2. Grow one tree each — differently', bn: '২. প্রতিটায় এক tree — আলাদাভাবে' }, text: { en: 'Random forest twist: each split sees only a random feature subset.', bn: 'Random forest মোচড়: প্রতি split শুধু এলোমেলো-feature উপসেট দেখে।' } },
        { title: { en: '3. Let them vote', bn: '৩. ভোট দিতে দিন' }, text: { en: 'Classify by majority; regress by mean. No weights, no debate.', bn: 'সংখ্যাগরিষ্ঠে শ্রেণিকরণ; গড়ে regression। ওজন নেই, বিতর্ক নেই।' } },
        { title: { en: '4. Grade on out-of-bag rows', bn: '৪. Out-of-bag সারিতে গ্রেড' }, text: { en: 'Each tree skipped ~37%: those rows are a FREE test set. Use it.', bn: 'প্রতি tree ~৩৭% এড়িয়েছে: ওই সারি ফ্রি test set। ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Five stumps, one verdict', bn: 'INSIDE — পাঁচ stump, এক রায়' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit grows 5 stumps on 5 bootstrap samples (seeded, so your run matches the lesson), then lets them vote on fresh test hours. Watch members disagree — and the majority beat most individuals. Edit the seed to grow a different forest.',
        bn: 'এই tryit ৫ bootstrap নমুনায় ৫ stump গজায় (seeded, তাই আপনার চালান পাঠের সাথে মেলে), তারপর নতুন test-ঘণ্টায় ভোট দেয়। সদস্য-মতভেদ দেখুন — আর সংখ্যাগরিষ্ঠকে বেশিরভাগ-ব্যক্তি হারাতে দেখুন। Seed বদলে আলাদা forest গজান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Bootstrap forest of stumps (change SEED, press Run)', bn: 'Stump-এর bootstrap forest (SEED বদলে Run)' },
      html: '<h3>5 stumps vote on fresh hours</h3>\n<pre id="out"></pre>\n<p>Console shows each stump’s sample + split.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: '// Truth: pass iff hours >= 5, EXCEPT noisy row [3,1]\nconst ROWS = [[1,0],[2,0],[3,1],[4,0],[5,1],[6,1],[7,1],[8,1]];\nconst TEST = [[2,0],[4,0],[6,1],[7,1]]; // fresh rows\nconst SEED = 42; // ← change me for a new forest\nlet s = SEED;\nconst rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;\nconst bestSplit = (rows) => {\n  let best = { t: 1.5, a: -1 };\n  for (let t = 1.5; t <= 7.5; t += 1) {\n    let ok = 0;\n    rows.forEach(([h, y]) => { if ((h >= t ? 1 : 0) === y) ok++; });\n    if (ok > best.a) best = { t, a: ok };\n  }\n  return best.t;\n};\nconst stumps = [];\nfor (let i = 0; i < 5; i++) {\n  const sample = [];\n  for (let k = 0; k < ROWS.length; k++) sample.push(ROWS[Math.floor(rnd() * ROWS.length)]);\n  const t = bestSplit(sample);\n  stumps.push(t);\n  console.log("stump " + (i+1) + ": sample hours [" + sample.map(r => r[0]).join(",") + "] → split >=" + t);\n}\nlet report = "testh truth | votes      → forest\\n";\nlet forestOk = 0;\nTEST.forEach(([h, y]) => {\n  const votes = stumps.map(t => (h >= t ? 1 : 0));\n  const ones = votes.reduce((a, b) => a + b, 0);\n  const verdict = ones * 2 >= 5 ? 1 : 0;\n  if (verdict === y) forestOk++;\n  report += "  " + h + "     " + y + "   | " + votes.join(" ") + "  →   " + verdict + (verdict === y ? " ✓" : " ✗") + "\\n";\n});\nreport += "\\nForest: " + forestOk + "/4. Members disagree — the majority still rules.";\ndocument.getElementById("out").textContent = report;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Ensemble instincts', bn: 'RESULT — Ensemble-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Bagging = bootstrap + average: kills variance, keeps signal. OOB rows grade free.', bn: 'Bagging = bootstrap + গড়: variance মারে, সংকেত রাখে। OOB সারি ফ্রি-গ্রেড দেয়।' },
        { en: 'Random forests force diversity via random feature subsets; boosting forces repair via sequence.', bn: 'Random forest এলোমেলো-feature উপসেটে বৈচিত্র্য বাধ্য করে; boosting ক্রমে মেরামত বাধ্য করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Forests are strong, not magic', bn: 'DEBUG — Forest শক্তিশালী, জাদু নয়' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“Forests never overfit” (they can, mildly)', bn: '“Forest কখনো overfit নয়” (মৃদু পারে)' },
      text: {
        en: 'Very noisy labels + fully-grown members = a forest memorizing together. Symptoms: OOB score stalls while members deepen. Cure: cap depth, raise min-leaf rows, or switch to boosting with early stopping.',
        bn: 'খুব-noisy label + পূর্ণ-বড় সদস্য = একসাথে-মুখস্থ forest। লক্ষণ: সদস্য-গভীরতায় OOB স্কোর আটকে। ওষুধ: গভীরতা বাঁধুন, পাতায় সর্বনিম্ন-সারি বাড়ান, বা early stopping-সহ boosting-এ যান।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'More trees: diminishing returns, rising bills', bn: 'বেশি tree: কমতে-থাকা লাভ, বাড়তে-থাকা বিল' },
      text: {
        en: '10 → 100 trees transforms results; 100 → 1000 barely moves them but 10× prediction cost. Standard practice: 100–500 for forests, early-stopped rounds for boosting. Plot OOB vs tree-count once — then stop paying.',
        bn: '১০ → ১০০ tree ফল বদলে দেয়; ১০০ → ১০০০ নড়ে না, prediction-খরচ ১০×। মান-অভ্যাস: forest-এ ১০০–৫০০, boosting-এ early-stopped রাউন্ড। OOB বনাম tree-সংখ্যা একবার প্লট করুন — তারপর দাম বন্ধ।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Trophies', bn: 'REAL WORLD — ট্রফি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Kaggle tabular competitions: XGBoost/LightGBM top most leaderboards — boosted trees, tuned thresholds.', bn: 'Kaggle tabular প্রতিযোগিতা: XGBoost/LightGBM বেশিরভাগ লিডারবোর্ডে শীর্ষ — boosted tree, উপযুক্ত threshold।' },
        { en: 'Credit and insurance: forests score risk on messy mixed data where nets starve for scale.', bn: 'ঋণ-বীমা: অগোছালো-মিশ্র ডেটায় forest ঝুঁকি-স্কোর করে, যেখানে net স্কেলে না-খেয়ে থাকে।' },
        { en: 'Medicine: random forests flag high-risk patients from EHR rows — interpretable enough to audit.', bn: 'চিকিৎসা: EHR-সারিতে random forest বেশি-ঝুঁকি রোগী পতাকা দেয় — অডিট-যোগ্য ব্যাখ্যাসহ।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Clustering', bn: 'পরবর্তী — ক্লাস্টারিং' },
    },
    {
      type: 'para',
      text: {
        en: 'Supervised toolbox complete: lines, boundaries, trees, forests. Lesson 5 crosses to unsupervised land: k-means clustering — finding groups nobody labeled — running live on your screen.',
        bn: 'Supervised টুলবক্স সম্পূর্ণ: রেখা, সীমানা, tree, forest। পাঠ ৫ unsupervised ভূমিতে: k-means clustering — লেবেলহীন-দল খোঁজা — স্ক্রিনে live চলে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Three decision stumps vote on an input value to produce a robust majority prediction.',
        bn: 'একটি ইনপুট মানের উপর ৩টি ডিসিশন স্টাম্প ভোট দিয়ে দৃঢ় সংখ্যাগরিষ্ঠ সিদ্ধান্ত দেয়।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'ensemble_vote.js',
      code: `const trees = [
  x => (x > 3 ? 1 : 0),
  x => (x > 2 ? 1 : 0),
  x => (x > 5 ? 1 : 0),
];
const testX = 4;
const votes = trees.map(t => t(testX));
const sum = votes.reduce((a, b) => a + b, 0);
const majority = sum >= 2 ? 1 : 0;
console.log(\`Votes for x=\${testX}: [\${votes.join(", ")}] -> Majority: \${majority}\`);
// -> Votes for x=4: [1, 1, 0] -> Majority: 1`,
      caption: {
        en: 'Two of three trees vote 1, so the majority ensemble prediction for 4 is 1.',
        bn: '৩টি গাছের মধ্যে ২টি ১ ভোট দেয়, তাই ৪ এর জন্য সামগ্রিক ফলাফল ১ হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'frs-ex-1',
      kind: 'mcq',
      topic: 'bootstrap',
      question: { en: 'Bootstrap sample of 100 rows holds about…', bn: '১০০ সারির bootstrap নমুনায় প্রায়…' },
      options: [
        { en: '63 unique rows (rest repeats/omitted)', bn: '৬৩ অনন্য সারি (বাকি পুনরাবৃত্তি/বাদ)' },
        { en: 'All 100, shuffled', bn: 'সব ১০০, মিশিয়ে' },
        { en: '50 rows exactly', bn: 'ঠিক ৫০ সারি' },
        { en: '100 brand-new rows', bn: '১০০ নতুন সারি' },
      ],
      answer: 0,
      hint: { en: '~37% sit out every draw.', bn: 'প্রতি তোলায় ~৩৭% বাইরে থাকে।' },
      explanation: {
        en: 'With replacement, each row has (1−1/100)^100 ≈ 37% chance of never being picked. ~63 unique in, ~37 out-of-bag.',
        bn: 'প্রতিস্থাপন-সহ প্রতি সারির কখনো-না-ওঠা সম্ভাবনা (১−১/১০০)^১০০ ≈ ৩৭%। ~৬৩ অনন্য ঢোকে, ~৩৭ bag-বাইরে।',
      },
    },
    {
      id: 'frs-ex-2',
      kind: 'mcq',
      topic: 'rf-twist',
      question: { en: 'Random forest’s twist over plain bagging?', bn: 'সাদা bagging-ওপর random forest-এর মোচড়?' },
      options: [
        { en: 'Each split sees a random feature subset', bn: 'প্রতি split এলোমেলো-feature উপসেট দেখে' },
        { en: 'Trees vote in random order', bn: 'Tree এলোমেলো-ক্রমে ভোট দেয়' },
        { en: 'Labels are shuffled', bn: 'Label মেশানো হয়' },
        { en: 'No difference', bn: 'পার্থক্য নেই' },
      ],
      answer: 0,
      hint: { en: 'WHAT, “forcing trees to disagree usefully.”', bn: 'WHAT, “tree-কে উপকারী-মতভেদে বাধ্য।”' },
      explanation: {
        en: 'Without it, every tree asks the same strong feature first and members echo each other. Random subsets decorrelate the crowd — the actual source of forest power.',
        bn: 'এছাড়া প্রতি tree একই শক্ত-feature আগে প্রশ্ন করে, সদস্য প্রতিধ্বনি করে। এলোমেলো-উপসেট ভিড়-সম্পর্কহীন করে — forest-শক্তির আসল উৎস।',
      },
    },
    {
      id: 'frs-ex-3',
      kind: 'mcq',
      topic: 'boosting',
      question: { en: 'Boosting differs from bagging by…', bn: 'Boosting bagging থেকে আলাদা…' },
      options: [
        { en: 'Training trees sequentially to fix prior errors', bn: 'আগের ভুল সারাতে ক্রমান্বয়ে tree train করে' },
        { en: 'Using only one tree', bn: 'শুধু এক tree ব্যবহার করে' },
        { en: 'Skipping labels entirely', bn: 'Label পুরো এড়িয়ে' },
        { en: 'Voting with dice', bn: 'পাশায় ভোট দিয়ে' },
      ],
      answer: 0,
      hint: { en: '“Teammates fixing each other’s errors.”', bn: '“একে-অপরের ভুল-সারানো সতীর্থ।”' },
      explanation: {
        en: 'Bagging votes independent trees in parallel; boosting builds a repair chain. Both ensemble — opposite teamwork.',
        bn: 'Bagging সমান্তরালে স্বাধীন গাছগুলোর ভোট নেয়; boosting মেরামত-শৃঙ্খল বানায়। দুটোই ensemble — বিপরীত দলবদ্ধতা।',
      },
    },
    {
      id: 'frs-ex-4',
      kind: 'predict',
      topic: 'oob-use',
      question: { en: 'Your forest’s OOB accuracy is 91%, train accuracy 99%. State the honest report + whether to add trees.', bn: 'Forest-এর OOB accuracy ৯১%, train ৯৯%। সৎ প্রতিবেদন + tree বাড়াবেন কিনা বলুন।' },
      answer: 'Report 91% (OOB is the honest grade); check the OOB-vs-trees curve — add trees only if it still climbs.',
      accept: ['91', 'OOB', 'honest', 'curve', 'climb'],
      hint: { en: 'OOB rows are a free test set.', bn: 'OOB সারি ফ্রি test set।' },
      explanation: {
        en: '99% train flatters (members saw those rows); 91% OOB grades. More trees help only while the OOB curve climbs — flat curve means stop paying.',
        bn: '৯৯% train তোষামোদ করে (সদস্য ওই সারি দেখেছে); ৯১% OOB গ্রেড দেয়। OOB curve উঠতে থাকলেই বেশি tree সাহায্য করে — সমতল মানে দাম বন্ধ।',
      },
    },
  ],
  quiz: {
    id: 'forests-ensembles-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'frsq1',
        kind: 'mcq',
        topic: 'variance',
        question: { en: 'Bagging mainly kills…', bn: 'Bagging মূলত মারে…' },
        options: [
          { en: 'Variance (noise-memorization)', bn: 'Variance (noise-মুখস্থ)' },
          { en: 'Bias (wrong-shape models)', bn: 'Bias (ভুল-আকৃতি মডেল)' },
          { en: 'Data collection costs', bn: 'ডেটা-সংগ্রহ খরচ' },
          { en: 'Electricity bills', bn: 'বিদ্যুৎ-বিল' },
        ],
        answer: 0,
        hint: { en: '“The variance killer.”', bn: '“Variance-ঘাতক।”' },
        explanation: {
          en: 'Averaging independent noisy guesses cancels noise (variance) while shared signal survives. Wrong-shape bias needs better models, not more votes.',
          bn: 'স্বাধীন-noisy অনুমান গড়ে noise (variance) বাতিল হয়, ভাগ-সংকেত টিকে। ভুল-আকৃতি bias-এ ভালো-মডেল লাগে, বেশি-ভোট নয়।',
        },
      },
      {
        id: 'frsq2',
        kind: 'mcq',
        topic: 'seed-run',
        question: { en: 'Why does the lesson’s tryit use a fixed seed?', bn: 'পাঠের tryit নির্দিষ্ট seed ব্যবহার করে কেন?' },
        options: [
          { en: 'So every reader grows the same forest and can follow along', bn: 'প্রতি পাঠক একই forest গজায়, সাথে চলতে পারে' },
          { en: 'Seeds make forests accurate', bn: 'Seed forest নির্ভুল করে' },
          { en: 'Random is forbidden in ML', bn: 'ML-এ এলোমেলো নিষিদ্ধ' },
          { en: 'No reason', bn: 'কারণ নেই' },
        ],
        answer: 0,
        hint: { en: 'Reproducibility.', bn: 'পুনরুৎপাদনযোগ্যতা।' },
        explanation: {
          en: 'Fixed seed = reproducible demo: your console matches the lesson. Real training varies seeds to measure stability — same tool, both jobs.',
          bn: 'নির্দিষ্ট seed = পুনরুৎপাদনযোগ্য demo: আপনার console পাঠের সাথে মেলে। আসল training স্থিতি-মাপে seed বদলায় — একই টুল, দুই কাজ।',
        },
      },
      {
        id: 'frsq3',
        kind: 'mcq',
        topic: 'more-trees',
        question: { en: 'OOB curve flat from 200→1000 trees. Move?', bn: 'OOB curve ২০০→১০০০ tree-তে সমতল। চাল?' },
        options: [
          { en: 'Ship ~200 trees; extra trees only bill compute', bn: '~২০০ tree চালু করুন; বাড়তি শুধু compute-বিল' },
          { en: 'Use 1000 — bigger always wins', bn: '১০০০ নিন — বড় সবসময় জেতে' },
          { en: 'Use 10 trees', bn: '১০ tree নিন' },
          { en: 'Delete the forest', bn: 'Forest মুছে দিন' },
        ],
        answer: 0,
        hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
        explanation: {
          en: 'Flat OOB = no more signal to average out. Ship the knee of the curve; spend the saved budget on features or data.',
          bn: 'সমতল OOB = গড়-করার সংকেত শেষ। Curve-হাঁটু চালু করুন; বাঁচা-বাজেট feature বা ডেটায় খরচ করুন।',
        },
      },
      {
        id: 'frsq4',
        kind: 'predict',
        topic: 'member-noise',
        question: { en: 'One stump memorizes the noisy [3,1] row; the forest still votes right. Explain why in one line.', bn: 'এক stump noisy [৩,১] সারি মুখস্থ করে; forest তবু সঠিক ভোট দেয়। এক লাইনে কেন।' },
        answer: 'Only stumps whose bootstrap sample over-weights row 3 err — the unaffected majority outvotes them.',
        accept: ['majority', 'outvote', 'bootstrap', 'sample', 'unaffected'],
        hint: { en: 'Who saw the noisy row often? Who barely saw it?', bn: 'noisy সারি কে ঘন দেখেছে? কে কদাচিৎ?' },
        explanation: {
          en: 'Bootstrap differs per member: some samples repeat row 3 (fooled), most barely include it (clean). Independent errors lose the vote — the entire theory in one demo.',
          bn: 'প্রতি সদস্যে bootstrap আলাদা: কিছু নমুনা সারি ৩ আবার ধরে (বোকা), বেশিরভাগ কদাচিৎ (পরিष्कार)। স্বাধীন ভুলগুলো ভোট হারে — এক demo-তে পুরো তত্ত্ব।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'clustering',
    title: { en: 'Clustering with k-Means', bn: 'k-Means-এ Clustering' },
  },
};