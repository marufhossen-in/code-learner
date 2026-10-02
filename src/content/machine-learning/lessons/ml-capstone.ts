import type { Lesson } from '../../../lib/types';

export const MlCapstoneLesson: Lesson = {
  slug: 'ml-capstone',
  tech: 'machine-learning',
  title: {
    en: 'Ml Capstone — Seven lessons converge into one pipeline, split honestly, fit',
    bn: 'সাত পাঠ এক pipeline-এ মেলে: সৎ-ভাগ, stump ফিট, সংখ্যাগরিষ্ঠ-baseline'
  },
  summary: {
    en: 'Seven lessons converge into one pipeline: split honestly, fit a stump, beat the majority baseline 4/4 vs 2/4, grade with precision AND recall, and touch test exactly once. Run the whole profession — data to deployed decision — in one live tryit.',
    bn: 'সাত পাঠ এক pipeline-এ মেলে: সৎ-ভাগ, stump ফিট, সংখ্যাগরিষ্ঠ-baseline ৪/৪ বনাম ২/৪-এ হারানো, precision ও recall-এ গ্রেড, test ঠিক একবার ছোঁয়া। পুরো পেশা চালান — ডেটা থেকে চালু-সিদ্ধান্ত — এক live tryit-এ।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The whole profession in one pipe', bn: 'WHAT — এক পাইপে পুরো-পেশা' },
    },
    {
      type: 'para',
      text: {
        en: 'A pipeline brings professional discipline to machine learning. First, you take raw data and split it into training and locked test sets. Next, you establish a majority baseline to beat. Then you train your candidate model and grade its precision and recall on test data touched only once. You only ship models that outperform the baseline honestly. Each prior lesson forms a vital step: regression fits curves, trees split branches, ensembles vote, clustering groups patterns, and descent tunes parameters.',
        bn: 'Pipeline মেশিন লার্নিংয়ে পেশাদার শৃঙ্খলা এনে দেয়। প্রথমে, কাঁচা ডেটাকে ট্রেনিং ও তালাবদ্ধ টেস্ট সেটে ভাগ করা হয়। এরপর, হারানোর জন্য একটি বেসলাইন মান নির্ধারণ করা হয়। তারপর মডেলকে প্রশিক্ষণ দিয়ে টেস্ট সেটে precision ও recall যাচাই করা হয়, যা কেবল একবারই ছোঁয়া হয়। শুধুমাত্র বেসলাইন পার করা মডেলই বাস্তবে চালু করা হয়। পূর্ববর্তী পাঠগুলো এই পাইপলাইনের মূল ভিত্তি: regression বক্ররেখা মেলায়, tree শাখা ভাগ করে, ensemble ভোট নেয়, clustering রূপরেখা খোঁজে এবং descent প্যারামিটার সমন্বয় করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Data in, deployed decision out', bn: 'ডেটা ঢোকে, চালু-সিদ্ধান্ত বেরোয়' },
      svg: `<svg viewBox="0 0 640 170" font-family="system-ui, sans-serif" role="img" aria-label="Pipeline: data, split, baseline, model, grade, verdict">
<defs><marker id="pa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>
<g font-size="11" font-weight="800" text-anchor="middle" fill="currentColor">
<rect x="8" y="60" width="86" height="50" rx="10" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="51" y="82">DATA</text><text x="51" y="97" font-weight="600">12 rows</text>
<rect x="114" y="60" width="86" height="50" rx="10" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="157" y="82">SPLIT</text><text x="157" y="97" font-weight="600">8 / 4 🔒</text>
<rect x="220" y="60" width="86" height="50" rx="10" fill="#64748b" opacity="0.15" stroke="#64748b" stroke-width="2"/>
<text x="263" y="82">BASELINE</text><text x="263" y="97" font-weight="600">majority</text>
<rect x="326" y="60" width="86" height="50" rx="10" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="369" y="82">MODEL</text><text x="369" y="97" font-weight="600">stump 4.5</text>
<rect x="432" y="60" width="86" height="50" rx="10" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="475" y="82">GRADE×1</text><text x="475" y="97" font-weight="600">P + R</text>
<rect x="538" y="60" width="86" height="50" rx="10" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="581" y="82">VERDICT</text><text x="581" y="97" font-weight="600">4/4 ✓</text>
</g>
<g stroke="currentColor" stroke-width="2" marker-end="url(#pa)">
<line x1="94" y1="85" x2="112" y2="85"/>
<line x1="200" y1="85" x2="218" y2="85"/>
<line x1="306" y1="85" x2="324" y2="85"/>
<line x1="412" y1="85" x2="430" y2="85"/>
<line x1="518" y1="85" x2="536" y2="85"/>
</g>
<text x="320" y="145" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">test lock 🔒 opens once, at GRADE — never before</text>
</svg>`,
      caption: {
        en: 'Six joints, one rule: nothing downstream of the lock leaks upstream.',
        bn: '৬টি জোড়া, ১টি নিয়ম: তালার-নিচের কিছু ওপরে ফাঁস নয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Pipeline', def: { en: 'Data → decision as one repeatable, auditable pipe.', bn: 'ডেটা → সিদ্ধান্ত এক পুনরাবৃত্ত, অডিট-যোগ্য পাইপে।' } },
        { term: 'Baseline', def: { en: 'The dumb grade to beat (majority/mean). No baseline = no bragging.', bn: 'হারানোর বোকা-গ্রেড (সংখ্যাগরিষ্ঠ/গড়)। Baseline নেই = বড়াই নেই।' } },
        { term: 'Stratified split', def: { en: 'Every pile mirrors the class mix. Luck removed.', bn: 'প্রতি স্তূপ শ্রেণি-মিশ্রণ আয়না করে। ভাগ্য-বিদায়।' } },
        { term: 'Report card', def: { en: 'Accuracy + precision + recall + baseline gap, on locked test.', bn: 'তালাবদ্ধ-test-এ accuracy + precision + recall + baseline-ফাঁক।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Tutorials end; pipelines ship', bn: 'WHY — টিউটোরিয়াল শেষ; pipeline চালু' },
    },
    {
      type: 'list',
      items: [
        { en: 'Nobody deploys a lesson: they deploy pipes. This capstone is the smallest pipe that still counts as professional.', bn: 'কেউ পাঠ চালু করে না: পাইপ চালু করে। এই capstone পেশাদার-গণ্য ক্ষুদ্রতম-পাইপ।' },
        { en: 'Baselines end arguments: “4/4 vs majority’s 2/4” beats any adjective. Always build the dumb version first.', bn: 'Baseline তর্ক শেষ করে: “সংখ্যাগরিষ্ঠের ২/৪ বনাম ৪/৪” প্রতি বিশেষণ হারায়। আগে বোকা-সংস্করণ বানান।' },
        { en: 'One-pipe habit scales: this exact shape — split, baseline, fit, grade-once — grows into every production system you will ever own.', bn: 'এক-পাইপ অভ্যাস স্কেল করে: এই ঠিক-আকৃতি — ভাগ, baseline, ফিট, একবার-গ্রেড — মালিক-হওয়া প্রতি production-ব্যবস্থায় বাড়ে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Run the pipe', bn: 'HOW — পাইপ চালান' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Load + eyeball the data', bn: '১. ডেটা লোড + চোখ-বুলান' }, text: { en: '12 rows, hours→pass, one noisy rebel. Print it; never fit blind.', bn: '১২ সারি, ঘণ্টা→পাস, এক noisy-বিদ্রোহী। ছাপুন; অন্ধ-ফিট কখনো নয়।' } },
        { title: { en: '2. Split 8/4, stratified', bn: '২. ৮/৪ ভাগ, স্তরিত' }, text: { en: 'Both piles keep the pass/fail mix. Lock test with a comment 🔒.', bn: 'দুই স্তূপ পাস/ফেল-মিশ্রণ রাখে। মন্তব্য-🔒-এ test তালাবদ্ধ করুন।' } },
        { title: { en: '3. Baseline first', bn: '৩. আগে baseline' }, text: { en: 'Train majority = pass-everyone (5/8 pass). Grade it: 2/4, P=50%, R=100%.', bn: 'Train সংখ্যাগরিষ্ঠ = সবাই-পাস (৫/৮ পাস)। গ্রেড দিন: ২/৪, P=৫০%, R=১০০%।' } },
        { title: { en: '4. Fit the stump on train only', bn: '৪. শুধু-train-এ stump ফিট' }, text: { en: 'Sweep splits: best = hours ≥ 4.5 at 7/8 train. Test never consulted.', bn: 'Split ঝাড়ুন: সেরা = ৭/৮ train-এ ঘণ্টা ≥ ৪.৫। Test কখনো পরামর্শ নয়।' } },
        { title: { en: '5. Grade once, report, verdict', bn: '৫. একবার গ্রেড, প্রতিবেদন, রায়' }, text: { en: 'Test: 4/4, P=100%, R=100%. Beats baseline by 2 — SHIP the stump.', bn: 'Test: ৪/৪, P=১০০%, R=১০০%। Baseline ২ এ হারে — stump চালু করুন।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The whole pipe, live', bn: 'INSIDE — পুরো-পাইপ, live' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit brings the full capstone to life. First, 12 rows load with a stratified 8/4 split. Next, the majority baseline scores 2/4 (precision 50%, recall 100%). Then the stump model achieves 4/4 on locked test data (precision 100%, recall 100%). The final verdict prints: SHIP. Edit test rows to re-run the entire pipeline.',
        bn: 'এই tryit পুরো ক্যাপস্টোনকে জীবন্ত করে তোলে। প্রথমে, ১২টি সারি একটি স্তরিত ৮/৪ ভাগে লোড হয়। এরপর, সংখ্যাগরিষ্ঠ বেসলাইন ২/৪ স্কোর করে (precision ৫০%, recall ১০০%)। তারপর টেস্ট সেটে stump মডেলটি ৪/৪ ফলাফল অর্জন করে (precision ১০০%, recall ১০০%)। চূড়ান্ত রায় আসে: SHIP। পুরো পাইপলাইন আবার পরীক্ষা করতে টেস্ট সারি পরিবর্তন করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Honest pipe end to end (edit TEST, press Run)', bn: 'সৎ-পাইপ শুরু-শেষ (TEST বদলে Run)' },
      html: '<h3>Report card</h3>\n<pre id="out"></pre>\n<p>Console logs each pipe joint.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #ecfdf5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 10px; }',
      js: 'const TRAIN = [[1,0],[2,1],[3,0],[4,0],[5,1],[6,1],[7,1],[8,1]];\nconst TEST = [[2,0],[4,0],[6,1],[7,1]]; // 🔒 locked until GRADE — edit to re-run\nconsole.log("DATA: " + TRAIN.length + " train + " + TEST.length + " test rows loaded.");\nconsole.log("SPLIT: stratified 8/4, test locked.");\nconst ones = TRAIN.filter(r => r[1] === 1).length;\nconst base = ones * 2 >= TRAIN.length ? 1 : 0;\nconsole.log("BASELINE: majority = predict " + base + " always (" + ones + "/" + TRAIN.length + " pass in train).");\nlet bt = 1.5, ba = -1; // fit stump on TRAIN only\nfor (let t = 1.5; t <= 7.5; t += 1) {\n  let ok = 0;\n  TRAIN.forEach(([h, y]) => { if ((h >= t ? 1 : 0) === y) ok++; });\n  if (ok > ba) { ba = ok; bt = t; }\n}\nconsole.log("MODEL: best stump hours >= " + bt + " (" + ba + "/" + TRAIN.length + " train). Test never consulted.");\nconst grade = (pred) => {\n  let TP = 0, FP = 0, FN = 0, TN = 0;\n  TEST.forEach(([h, y]) => {\n    const p = pred(h);\n    if (p === 1 && y === 1) TP++; else if (p === 1) FP++; else if (y === 1) FN++; else TN++;\n  });\n  const prec = TP + FP ? TP / (TP + FP) : 0;\n  const rec = TP + FN ? TP / (TP + FN) : 0;\n  return { acc: (TP + TN) / TEST.length, prec, rec };\n};\nconsole.log("GRADE: 🔓 lock opens ONCE — grading both on test...");\nconst gB = grade(() => base), gM = grade((h) => (h >= bt ? 1 : 0));\nconst pct = (v) => (v * 100).toFixed(0) + "%";\nlet r = "        acc  prec rec\\n";\nr += "baseline " + gB.acc.toFixed(2) + " " + pct(gB.prec).padStart(4) + " " + pct(gB.rec) + "\\n";\nr += "stump    " + gM.acc.toFixed(2) + " " + pct(gM.prec).padStart(4) + " " + pct(gM.rec) + "\\n\\n";\nr += gM.acc > gB.acc ? "VERDICT: stump beats baseline — SHIP ✓" : "VERDICT: baseline holds — do NOT ship ✗";\ndocument.getElementById("out").textContent = r;\nconsole.log("LOCK: test re-locked. Pipe complete.");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Professional instincts', bn: 'RESULT — পেশাদার-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Baseline first, model second, test once: stump 4/4 (P/R 100%) beats majority 2/4 (P 50%) — a shippable, auditable gap.', bn: 'আগে baseline, পরে মডেল, test একবার: stump ৪/৪ (P/R ১০০%) সংখ্যাগরিষ্ঠ ২/৪ (P ৫০%) হারায় — চালুযোগ্য, অডিটযোগ্য-ফাঁক।' },
        { en: 'The pipe IS the skill: every future system reuses these joints — bigger data, same honesty.', bn: 'পাইপই দক্ষতা: প্রতি ভবিষ্যৎ-ব্যবস্থা এই জোড়া আবার ব্যবহার করে — বড়-ডেটা, একই সততা।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Capstone traps', bn: 'DEBUG — Capstone-ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“My model beats test — ship it!” (which test? how often?)', bn: '“মডেল test হারায় — চালু করুন!” (কোন test? কতবার?)' },
      text: {
        en: 'Beating a test you tuned against is beating yourself at solitaire. Symptoms: production flops, “but test said 99%!” Cure: fresh held-out data for every ship decision — or admit the grade is validation, not test.',
        bn: 'ঠিক-করা test-হারানো সলিটেয়ারে নিজেকে-হারানো। লক্ষণ: production ব্যর্থ, “কিন্তু test ৯৯% বলেছিল!” ওষুধ: প্রতি চালু-সিদ্ধান্তে নতুন held-out ডেটা — বা স্বীকার করুন গ্রেড validation, test নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Small data? Bootstrap the verdict', bn: 'ছোট-ডেটা? রায় bootstrap করুন' },
      text: {
        en: '4/4 on four rows is thin evidence — one hard row flips the story. Resample test with replacement 1000×, re-grade each: the verdict’s spread tells you whether SHIP is brave or lucky. Professionals ship distributions, not point scores.',
        bn: 'চার সারিতে ৪/৪ পাতলা-প্রমাণ — এক কঠিন-সারি গল্প উল্টায়। Test প্রতিস্থাপন-সহ ১০০০× পুনঃনমুনা করুন, প্রতিটা আবার গ্রেড দিন: রায়ের-ছড়ানো বলে SHIP সাহসী না ভাগ্যবান। পেশাদার বিন্যাস চালু করে, বিন্দু-স্কোর নয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Pipes everywhere', bn: 'REAL WORLD — সর্বত্র পাইপ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Hiring screens: resume rows → stratified split → baseline (hire-rate) → model must beat it per cohort.', bn: 'নিয়োগ-বাছাই: জীবনবৃত্তান্ত-সারি → স্তরিত-ভাগ → baseline (নিয়োগ-হার) → প্রতি cohort-এ মডেলকে হারাতেই হবে।' },
        { en: 'Churn saves: activity rows → pipe grades monthly; SHIP only when the gap survives fresh months.', bn: 'Churn-বাঁচানো: কার্যকলাপ-সারি → পাইপ মাসে গ্রেড দেয়; নতুন-মাসে ফাঁক টিকলেই SHIP।' },
        { en: 'Your portfolio: this exact pipe, rerun on YOUR dataset, is the interview artifact that ends debates.', bn: 'আপনার পোর্টফোলিও: আপনার-ডেটাসেটে এই ঠিক-পাইপ আবার চালানো সেই interview-নিদর্শন যা বিতর্ক শেষ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Deep Learning', bn: 'পরবর্তী — ডিপ লার্নিং' },
    },
    {
      type: 'para',
      text: {
        en: 'Machine learning complete: you fit, classify, split, vote, group, grade, descend — and pipe it honestly. Next hub: DEEP LEARNING — stacks of learned features that swallowed vision, speech, and language. Bring your gradients; you will need them.',
        bn: 'Machine learning সম্পূর্ণ: ফিট, শ্রেণিকরণ, ভাগ, ভোট, দল, গ্রেড, descent — আর সৎ-pipe। পরের hub: DEEP LEARNING — শেখা-feature-এর স্তূপ যা দৃষ্টি, বাক, ভাষা গিলেছে। Gradient সাথে আনুন; লাগবে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Compare majority baseline accuracy against the trained model on test data.',
        bn: 'টেস্ট ডেটাতে সংখ্যাগরিষ্ঠ বেসলাইন accuracy-র সাথে ট্রেইন্ড মডেলের তুলনা করো।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'compare_models.js',
      code: `const testLabels = [1, 1, 0, 1];
const baselinePreds = [1, 1, 1, 1]; // always majority class
const modelPreds = [1, 1, 0, 1];    // trained model
const baseAcc = testLabels.filter((y, i) => y === baselinePreds[i]).length / 4;
const modelAcc = testLabels.filter((y, i) => y === modelPreds[i]).length / 4;
console.log(\`Baseline accuracy: \${(baseAcc * 100).toFixed(0)}%\`);
console.log(\`Model accuracy: \${(modelAcc * 100).toFixed(0)}%\`);
// -> Baseline accuracy: 75%
// -> Model accuracy: 100%`,
      caption: {
        en: 'The baseline scores 75% while the candidate model beats it at 100% on locked test data.',
        bn: 'তালাবদ্ধ টেস্ট ডেটাতে বেসলাইন ৭৫% স্কোর করে আর প্রার্থী মডেল ১০০% এ তাকে পরাজিত করে।',
      },
    },
  ],
  exercises: [
    {
      id: 'mcp-ex-1',
      kind: 'mcq',
      topic: 'baseline-first',
      question: { en: 'Why fit the majority baseline BEFORE the stump?', bn: 'Stump-এর আগে সংখ্যাগরিষ্ঠ-baseline কেন?' },
      options: [
        { en: 'It sets the dumb grade every model must honestly beat', bn: 'এটা বোকা-গ্রেড ঠিক করে যা প্রতি মডেলকে সৎভাবে হারাতেই হবে' },
        { en: 'Baselines train faster', bn: 'Baseline দ্রুত train হয়' },
        { en: 'The stump needs baseline weights', bn: 'Stump-এ baseline-ওজন লাগে' },
        { en: 'Tradition only', bn: 'শুধু ঐতিহ্য' },
      ],
      answer: 0,
      hint: { en: '“No baseline = no bragging.”', bn: '“Baseline নেই = বড়াই নেই।”' },
      explanation: {
        en: '4/4 means nothing alone; 4/4 vs majority’s 2/4 means “the stump learned something real.” Baselines turn scores into evidence.',
        bn: 'একা ৪/৪ অর্থহীন; সংখ্যাগরিষ্ঠের ২/৪ বনাম ৪/৪ মানে “stump আসল-কিছু শিখেছে।” Baseline স্কোরকে প্রমাণে বদলায়।',
      },
    },
    {
      id: 'mcp-ex-2',
      kind: 'mcq',
      topic: 'lock-discipline',
      question: { en: 'The tryit’s TEST array carries a 🔒 comment. Rule?', bn: 'Tryit-এর TEST array-তে 🔒 মন্তব্য। নিয়ম?' },
      options: [
        { en: 'Grade on it once, at the end; never fit or tune against it', bn: 'শেষে একবার গ্রেড দিন; ফিট বা টিউন কখনো নয়' },
        { en: 'Never look at it, even for grading', bn: 'গ্রেডেও কখনো দেখবেন না' },
        { en: 'Tune freely, it is small', bn: 'মুক্ত-ঠিক করুন, ছোট' },
        { en: 'Copy it into train', bn: 'Train-এ কপি করুন' },
      ],
      answer: 0,
      hint: { en: 'HOW step 5 + Lesson 6.', bn: 'HOW ধাপ ৫ + পাঠ ৬।' },
      explanation: {
        en: 'Locked-until-grade: the stump never saw TEST during fitting; the lock opens once for the report card, then re-locks. That single-opening discipline is what makes 4/4 believable.',
        bn: 'গ্রেড-পর্যন্ত তালাবদ্ধ: ফিটিং-এ stump TEST কখনো দেখেনি; তালা প্রতিবেদনে একবার খোলে, আবার তালাবদ্ধ। ওই একবার-খোলা শৃঙ্খলাই ৪/৪-কে বিশ্বাসযোগ্য করে।',
      },
    },
    {
      id: 'mcp-ex-3',
      kind: 'mcq',
      topic: 'read-card',
      question: { en: 'Baseline: 2/4, P=50%, R=100%. Stump: 4/4, P=R=100%. Verdict?', bn: 'Baseline: ২/৪, P=৫০%, R=১০০%। Stump: ৪/৪, P=R=১০০%। রায়?' },
      options: [
        { en: 'SHIP the stump: perfect grades + real gap over baseline', bn: 'Stump চালু করুন: নিখুঁত-গ্রেড + baseline-ওপর আসল-ফাঁক' },
        { en: 'Ship the baseline: recall ties', bn: 'Baseline চালু করুন: recall সমান' },
        { en: 'Ship neither: 4 rows prove nothing, ever', bn: 'কিছুই নয়: ৪ সারি কখনো কিছু প্রমাণ করে না' },
        { en: 'Retune on test for 5/4', bn: '৫/৪-তে test-এ আবার ঠিক করুন' },
      ],
      answer: 0,
      hint: { en: 'Gap + perfection = ship (then monitor).', bn: 'ফাঁক + নিখুঁত = চালু (তারপর পর্যবেক্ষণ)।' },
      explanation: {
        en: 'Perfect stump grades with a 2-row gap over a recall-100% baseline: the stump kept every catch AND killed both false alarms. Ship — with monitoring, like everything.',
        bn: 'Recall-১০০% baseline-ওপর ২-সারি ফাঁক-সহ নিখুঁত-stump গ্রেড: stump প্রতি ধরা রাখলো আর দুই মিথ্যা-অ্যালার্ম মারলো। চালু করুন — সবকিছুর মতো পর্যবেক্ষণ-সহ।',
      },
    },
    {
      id: 'mcp-ex-4',
      kind: 'predict',
      topic: 'thin-evidence',
      question: { en: '4/4 on 4 rows: brave or lucky? Name the upgrade that separates them.', bn: '৪ সারিতে ৪/৪: সাহসী না ভাগ্যবান? আলাদা-করা উন্নতি বলুন।' },
      answer: 'Lucky until proven otherwise: bootstrap the test 1000× (or gather fresh rows) and ship only if the gap survives the spread.',
      accept: ['bootstrap', '1000', 'fresh', 'spread', 'resample', 'more rows'],
      hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
      explanation: {
        en: 'Four rows cannot carry a career: resampling turns one 4/4 into a distribution of grades. Tight cluster near perfect = brave; wide smear = lucky. Ship distributions.',
        bn: 'চার সারি ক্যারিয়ার বইতে পারে না: পুনঃনমুনা এক ৪/৪-কে গ্রেড-বিন্যাসে বদলায়। নিখুঁত-কাছে শক্ত-গুচ্ছ = সাহসী; চওড়া-লেপন = ভাগ্যবান। বিন্যাস চালু করুন।',
      },
    },
  ],
  quiz: {
    id: 'ml-capstone-quiz',
    title: { en: 'Capstone exam', bn: 'Capstone পরীক্ষা' },
    questions: [
      {
        id: 'mcpq1',
        kind: 'mcq',
        topic: 'pipe-order',
        question: { en: 'Honest pipe order?', bn: 'সৎ-pipe ক্রম?' },
        options: [
          { en: 'Split → baseline → fit on train → grade once on test → verdict', bn: 'ভাগ → baseline → train-এ ফিট → test-এ একবার গ্রেড → রায়' },
          { en: 'Fit on all → split → grade → tune on test', bn: 'সবে ফিট → ভাগ → গ্রেড → test-এ ঠিক' },
          { en: 'Grade → split → fit → baseline', bn: 'গ্রেড → ভাগ → ফিট → baseline' },
          { en: 'Baseline → ship → measure later', bn: 'Baseline → চালু → পরে মাপুন' },
        ],
        answer: 0,
        hint: { en: 'Diagram, left to right.', bn: 'Diagram, বাম থেকে ডান।' },
        explanation: {
          en: 'Order is honesty: split first (lock test), baseline second (grade to beat), fit third (train only), grade fourth (once), verdict last. Any shuffle leaks.',
          bn: 'ক্রমই সততা: আগে ভাগ (test তালা), দ্বিতীয় baseline (হারানোর-গ্রেড), তৃতীয় ফিট (শুধু-train), চতুর্থ গ্রেড (একবার), শেষে রায়। যেকোনো অদলবদল ফাঁস করে।',
        },
      },
      {
        id: 'mcpq2',
        kind: 'mcq',
        topic: 'stump-recall',
        question: { en: 'Trained stump threshold (train-only)?', bn: 'Train-শুধু stump threshold?' },
        options: [
          { en: 'hours ≥ 4.5 (7/8 train)', bn: 'ঘণ্টা ≥ ৪.৫ (৭/৮ train)' },
          { en: 'hours ≥ 3.5 (6/8 train)', bn: 'ঘণ্টা ≥ ৩.৫ (৬/৮ train)' },
          { en: 'hours ≥ 5.5', bn: 'ঘণ্টা ≥ ৫.৫' },
          { en: 'hours ≥ 1.5', bn: 'ঘণ্টা ≥ ১.৫' },
        ],
        answer: 0,
        hint: { en: 'HOW step 4 / Lesson 3.', bn: 'HOW ধাপ ৪ / পাঠ ৩।' },
        explanation: {
          en: 'Same sweep as Lesson 3: 4.5 takes 7/8 by isolating only the noisy [2,1] rebel. The capstone reuses it — fitting on train, where it belongs.',
          bn: 'পাঠ ৩ এর একই ঝাড়ু: ৪.৫ শুধু noisy [২,১] বিদ্রোহী-আলাদা করে ৭/৮ নেয়। Capstone এটা আবার ব্যবহার করে — train-এ ফিট করে, যেখানে এটা থাকে।',
        },
      },
      {
        id: 'mcpq3',
        kind: 'mcq',
        topic: 'why-stratify',
        question: { en: 'Why stratify the 8/4 split?', bn: '৮/৪ ভাগ স্তরিত কেন?' },
        options: [
          { en: 'So both piles mirror the pass/fail mix; luck cannot rig grades', bn: 'দুই স্তূপ পাস/ফেল-মিশ্রণ আয়না করে; ভাগ্য গ্রেড-কারচুপি পারে না' },
          { en: 'To make train bigger', bn: 'Train বড় করতে' },
          { en: 'Stratifying trains the model', bn: 'স্তরিতকরণ মডেল train করে' },
          { en: 'It is optional decoration', bn: 'এটা ঐচ্ছিক-সাজ' },
        ],
        answer: 0,
        hint: { en: 'Keyterms: stratified split.', bn: 'Keyterms: স্তরিত-ভাগ।' },
        explanation: {
          en: 'Tiny piles + luck = rigged grades (all-pass test flatters “pass-everyone”). Stratifying forces both piles to carry the real mix — the verdict then means something.',
          bn: 'ক্ষুদ্র-স্তূপ + ভাগ্য = কারচুপি-গ্রেড (সব-পাস test “সবাই-পাস”-কে তোষামোদ করে)। স্তরিতকরণ দুই স্তূপকে আসল-মিশ্রণ বহনে বাধ্য করে — রায় তখন কিছু-অর্থ করে।',
        },
      },
      {
        id: 'mcpq4',
        kind: 'predict',
        topic: 'track-map',
        question: { en: 'Map all 7 lessons to pipe joints in one breath: which lesson powers MODEL, which powers GRADE?', bn: 'এক নিঃশ্বাসে ৭ পাঠ পাইপ-জোড়ায় মেলান: MODEL-এ কোন পাঠ, GRADE-এ কোনটা?' },
        answer: 'MODEL = Lessons 1–4 + 7 (fit, threshold, split, vote, descend); GRADE = Lesson 6 (matrices, P/R, test-once); Lesson 5 structures data before pipes.',
        accept: ['MODEL', 'GRADE', 'Lesson 6', 'fit', 'precision', 'recall'],
        hint: { en: 'WHAT paragraph’s last line.', bn: 'WHAT অনুচ্ছেদের শেষ-লাইন।' },
        explanation: {
          en: 'Fitting lessons build the MODEL joint; evaluation builds GRADE; clustering pre-structures data; descent trains underneath. The capstone is not new material — it is all seven lessons holding hands.',
          bn: 'ফিটিং-পাঠ MODEL জোড়া বানায়; evaluation GRADE বানায়; clustering ডেটা আগে-কাঠামো দেয়; descent নিচে train করে। Capstone নতুন-উপাদান নয় — সাত পাঠ হাত-ধরাধরি।',
        },
      },
    ],
  },
};