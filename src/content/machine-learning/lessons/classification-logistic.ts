import type { Lesson } from '../../../lib/types';

export const ClassificationLogisticLesson: Lesson = {
  slug: 'classification-logistic',
  tech: 'machine-learning',
  title: {
    en: 'Classification with Logistic Regression',
    bn: 'সংখ্যা থেকে শ্রেণি: শ্রেণি-আলাদা সীমানা আঁকুন, তারপর sigmoid-এ'
  },
  summary: {
    en: 'From numbers to categories: draw the boundary that separates classes, then upgrade yes/no into probabilities with the sigmoid. You will plot a decision boundary, tune a threshold by COST (not 0.5-blindness), and see why most business ML is classification wearing a probability coat.',
    bn: 'সংখ্যা থেকে শ্রেণি: শ্রেণি-আলাদা সীমানা আঁকুন, তারপর sigmoid-এ হ্যাঁ/না probability-তে উন্নীত করুন। Decision boundary প্লট করবেন, খরচ-দেখে threshold ঠিক করবেন (০.৫-অন্ধত্ব নয়), আর দেখবেন ব্যবসায়িক ML বেশিরভাগ probability-কোট পরা classification।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Boundaries, then probabilities', bn: 'WHAT — সীমানা, তারপর probability' },
    },
    {
      type: 'para',
      text: {
        en: 'Classification predicts a CATEGORY: spam or not, sick or healthy. Step one draws a decision boundary — the line (or curve) separating classes in feature space. Step two replaces the hard yes/no with logistic regression: squeeze the line’s score through the sigmoid S-curve into 0–1, and read it as “probability of class 1.” Same linear skeleton as lesson 1, new superpower: calibrated doubt.',
        bn: 'Classification শ্রেণি predict করে: স্প্যাম না, অসুস্থ না সুস্থ। ধাপ একে decision boundary আঁকে — feature-জগতে শ্রেণি-আলাদা রেখা (বা বক্র)। ধাপ দুই কঠিন হ্যাঁ/না logistic regression-এ বদলায়: রেখার স্কোর sigmoid S-বক্রে চেপে ০–১, পড়ুন “শ্রেণি-১-এর probability।” পাঠ ১-এর একই linear কঙ্কাল, নতুন মহাশক্তি: মাপা-সন্দেহ।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Boundary in feature space; sigmoid turns scores into probabilities', bn: 'Feature-জগতে সীমানা; sigmoid স্কোরে probability বানায়' },
      svg: `<svg viewBox="0 0 640 300" font-family="system-ui, sans-serif" role="img" aria-label="Two-class scatter with a decision boundary, and a sigmoid curve">
<line x1="30" y1="250" x2="350" y2="250" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<line x1="30" y1="250" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<text x="340" y="268" font-size="12" fill="currentColor">hours studied →</text>
<text x="5" y="45" font-size="12" fill="currentColor">sleep</text>
<g fill="#dc2626">
<circle cx="70" cy="215" r="6"/><circle cx="100" cy="195" r="6"/><circle cx="130" cy="225" r="6"/><circle cx="160" cy="200" r="6"/>
</g>
<g fill="#2563eb">
<circle cx="230" cy="120" r="6"/><circle cx="260" cy="95" r="6"/><circle cx="290" cy="130" r="6"/><circle cx="320" cy="80" r="6"/>
</g>
<line x1="150" y1="250" x2="260" y2="40" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="7 4"/>
<text x="195" y="268" font-size="12" font-weight="600" fill="#16a34a">boundary</text>
<text x="60" y="160" font-size="13" font-weight="700" fill="#dc2626">FAIL</text>
<text x="275" y="175" font-size="13" font-weight="700" fill="#2563eb">PASS</text>
<line x1="400" y1="250" x2="620" y2="250" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<line x1="400" y1="250" x2="400" y2="30" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<text x="600" y="268" font-size="12" fill="currentColor">score →</text>
<text x="375" y="45" font-size="12" fill="currentColor">P(pass)</text>
<path d="M405,240 C455,240 465,165 510,155 C555,145 565,60 615,60" fill="none" stroke="#4f46e5" stroke-width="3"/>
<line x1="400" y1="155" x2="620" y2="155" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/>
<text x="560" y="148" font-size="12" font-weight="600" fill="currentColor">0.5</text>
<text x="400" y="285" font-size="12" fill="currentColor" opacity="0.8">sigmoid: any score → 0–1 probability</text>
</svg>`,
      caption: {
        en: 'Left: the boundary is where the model switches its vote. Right: the sigmoid converts distance-from-boundary into honest probabilities.',
        bn: 'বামে: সীমানায় মডেল ভোট বদলায়। ডানে: sigmoid সীমানা-দূরত্ব সৎ probability-তে বদলায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Classification', def: { en: 'Predicting a category (spam/ham, pass/fail).', bn: 'শ্রেণি predict (স্প্যাম/হ্যাম, পাস/ফেল)।' } },
        { term: 'Decision boundary', def: { en: 'The surface where the model switches its vote.', bn: 'যে তলে মডেল ভোট বদলায়।' } },
        { term: 'Sigmoid', def: { en: 'The S-curve squeezing any score into 0–1.', bn: 'যেকোনো স্কোর ০–১-এ চাপা S-বক্র।' } },
        { term: 'Threshold', def: { en: 'Probability cutoff for class 1 (NOT always 0.5).', bn: 'শ্রেণি ১ এর probability-সীমা (সবসময় ০.৫ নয়)।' } },
        { term: 'Log-loss', def: { en: 'The loss for probabilities: confident-wrong pays dearly.', bn: 'Probability-এর loss: আত্মবিশ্বাসী-ভুলে চড়া-দাম।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Business runs on “which bucket?”', bn: 'WHY — ব্যবসা চলে “কোন ঝুড়ি?”-তে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Spam, fraud, churn, triage, hiring screens: the highest-value ML is overwhelmingly classification.', bn: 'স্প্যাম, জালিয়াতি, churn, triage, হায়ারিং-ছাঁকনি: সর্বোচ্চ-মূল্য ML অপ্রতিরোধ্যভাবে classification।' },
        { en: 'Probabilities beat labels: “92% fraud” routes to auto-block, “51%” routes to human review — one model, two actions.', bn: 'Probability label-কে হারায়: “৯২% জাল” auto-block-এ, “৫১%” মানুষের দেখায় — এক মডেল, দুই ব্যবস্থা।' },
        { en: 'Logistic regression is the interpretable classifier: each weight says HOW MUCH a feature pushes toward class 1.', bn: 'Logistic regression ব্যাখ্যাযোগ্য classifier: প্রতি ওজন বলে feature শ্রেণি-১-এ কতটা ঠেলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Classify with cost in mind', bn: 'HOW — খরচ-মাথায় শ্রেণিকরণ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Plot classes in feature space', bn: '১. Feature-জগতে শ্রেণি প্লট' }, text: { en: 'Red vs blue dots: can a line separate them? If not, note it — L3 bends.', bn: 'লাল বনাম নীল বিন্দু: রেখা আলাদা করতে পারে? না পারলে লিখে রাখুন — পাঠ ৩ বাঁকায়।' } },
        { title: { en: '2. Fit scores, squeeze with sigmoid', bn: '২. স্কোর fit, sigmoid-চাপ' }, text: { en: 'Learn weights minimizing log-loss (confident-wrong is punished).', bn: 'Log-loss-সর্বনিম্ন ওজন শিখুন (আত্মবিশ্বাসী-ভুল শাস্তি পায়)।' } },
        { title: { en: '3. Set threshold by COST', bn: '৩. খরচে threshold' }, text: { en: 'Missing a tumor costs more than a false alarm → threshold LOW (0.2). Spam is reversed → HIGH (0.9).', bn: 'টিউমার-মিসে খরচ বেশি → threshold নিচু (০.২)। স্প্যামে উল্টো → উঁচু (০.৯)।' } },
        { title: { en: '4. Grade on held-out rows', bn: '৪. সরিয়ে-রাখায় গ্রেড' }, text: { en: 'Accuracy first; precision/recall next lesson when classes imbalance.', bn: 'আগে accuracy; শ্রেণি-অসাম্যে precision/recall পরের পাঠে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Move the threshold, feel the trade', bn: 'INSIDE — Threshold নাড়ান, trade টের পান' },
    },
    {
      type: 'para',
      text: {
        en: 'Same model, three thresholds, three behaviors. Run with T=0.5, then 0.2 (catch every possible pass — tolerate false alarms), then 0.8 (only sure passes). The console reports caught vs false-alarmed: this trade-off IS lesson 6’s precision/recall, previewed early.',
        bn: 'এক মডেল, তিন threshold, তিন আচরণ। T=০.৫-এ চালান, তারপর ০.২ (সম্ভাব্য সব পাস ধরো — ভুল-অ্যালার্ম সহো), তারপর ০.৮ (শুধু নিশ্চিত-পাস)। Console ধরা বনাম ভুল-অ্যালার্ম জানায়: এই trade-off-ই পাঠ ৬ এর precision/recall, আগাম-ঝলক।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Threshold laboratory (try T = 0.5, 0.2, 0.8)', bn: 'Threshold গবেষণাগার (T = ০.৫, ০.২, ০.৮ দিন)' },
      html: '<h3>Study hours → pass? Move T.</h3>\n<canvas id="c" width="380" height="250"></canvas>\n<pre id="out"></pre>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\ncanvas { border: 1px solid #c7d2fe; border-radius: 8px; background: #eef2ff; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 8px; }',
      js: '// [hours, passed?]\nconst DATA = [[1,0],[2,0],[3,0],[4,1],[5,0],[6,1],[7,1],[8,1],[9,1],[10,1]];\nconst T = 0.5; // ← threshold: try 0.2 then 0.8\nconst sig = (h) => 1 / (1 + Math.exp(-(1.1*h - 5.0))); // fitted curve\nlet caught = 0, missed = 0, falseAlarm = 0, ok = 0;\nDATA.forEach(([h, y]) => {\n  const p = sig(h), vote = p >= T ? 1 : 0;\n  if (y === 1 && vote === 1) caught++;\n  if (y === 1 && vote === 0) missed++;\n  if (y === 0 && vote === 1) falseAlarm++;\n  if (y === 0 && vote === 0) ok++;\n  console.log("hours=" + h, "P(pass)=" + p.toFixed(2), "→ vote", vote, "(truth " + y + ")");\n});\nconsole.log("T=" + T, "| caught " + caught + " | MISSED " + missed + " | false alarms " + falseAlarm + " | ok " + ok);\nconst c = document.getElementById("c").getContext("2d");\nc.strokeStyle = "#4f46e5"; c.lineWidth = 3; c.beginPath();\nfor (let px = 0; px <= 340; px += 4) {\n  const h = 0.5 + px/340*10, y = 230 - sig(h)*200;\n  px === 0 ? c.moveTo(20+px, y) : c.lineTo(20+px, y);\n}\nc.stroke();\nc.strokeStyle = "#f59e0b"; c.lineWidth = 2; c.setLineDash([6,4]);\nc.beginPath(); c.moveTo(20, 230-T*200); c.lineTo(360, 230-T*200); c.stroke(); c.setLineDash([]);\nc.font = "13px system-ui"; c.fillStyle = "#4f46e5";\nDATA.forEach(([h, y]) => {\n  const x = 20 + (h-0.5)/10*340;\n  c.fillStyle = y ? "#2563eb" : "#dc2626";\n  c.beginPath(); c.arc(x, 230 - sig(h)*200, 6, 0, 7); c.fill();\n});\ndocument.getElementById("out").textContent =\n  "T=" + T + ": caught=" + caught + " missed=" + missed + " falseAlarms=" + falseAlarm + " ok=" + ok;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Classify like a professional', bn: 'RESULT — পেশাদার-শ্রেণিকরণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Boundary first (where votes switch), probabilities second (how sure), threshold third (by cost).', bn: 'আগে সীমানা (ভোট-বদল), পরে probability (কত নিশ্চিত), তৃতীয় threshold (খরচে)।' },
        { en: 'Never ship 0.5 unexamined: state the cost of each error type, then place T.', bn: 'অপরীক্ষিত ০.৫ কখনো চালু নয়: প্রতি error-খরচ বলুন, তারপর T বসান।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Accuracy lies on imbalance', bn: 'DEBUG — অসাম্যে accuracy মিথ্যা বলে' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: '“99% accurate” on 99-to-1 data = a brick', bn: '৯৯-বনাম-১ ডেটায় “৯৯% নির্ভুল” = ইট' },
      text: {
        en: 'Fraud is ~0.1% of transactions: a model voting “legit” always scores 99.9% — and catches zero fraud. Accuracy on imbalanced data measures majority-size, not skill. Lesson 6 replaces it with precision/recall; until then, always report caught-vs-missed like the tryit does.',
        bn: 'জালিয়াতি লেনদেনের ~০.১%: “আসল”-ভোট মডেল ৯৯.৯% পায় — জাল ধরে শূন্য। অসাম্য-ডেটায় accuracy সংখ্যাগরিষ্ঠ-আকার মাপে, দক্ষতা নয়। পাঠ ৬ precision/recall আনে; ততদিন tryit-এর মতো ধরা-বনাম-মিস জানান।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Thresholds with jobs', bn: 'REAL WORLD — কাজের threshold' },
    },
    {
      type: 'list',
      items: [
        { en: 'Email: P(spam) > 0.9 → junk folder; 0.5–0.9 → “suspicious” banner; else inbox. Three thresholds, one model.', bn: 'ইমেইল: P(spam) > ০.৯ → junk; ০.৫–০.৯ → “সন্দেহজনক” ব্যানার; বাকি inbox। তিন threshold, এক মডেল।' },
        { en: 'Hospitals: low thresholds on screening tests (miss nothing), high thresholds on treatment (harm nothing).', bn: 'হাসপাতাল: screening-এ নিচু threshold (কিছু মিস নয়), চিকিৎসায় উঁচু (ক্ষতি নয়)।' },
        { en: 'Banks: score bands map to auto-approve / manual-review / auto-decline — cost placed the lines.', bn: 'ব্যাংক: স্কোর-ব্যান্ডে auto-approve / manual-review / auto-decline — খরচ রেখা বসিয়েছে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Decision trees', bn: 'পরবর্তী — ডিসিশন ট্রি' },
    },
    {
      type: 'para',
      text: {
        en: 'Lines separate clean clouds; reality is messier. Lesson 3 bends boundaries with decision trees — asking yes/no questions until each leaf is pure — the most human-readable model ever shipped.',
        bn: 'রেখা পরিষ্কার-মেঘ আলাদা করে; বাস্তব অগোছালো। পাঠ ৩ decision tree-তে সীমানা বাঁকায় — প্রতি পাতা বিশুদ্ধ না-হওয়া পর্যন্ত হ্যাঁ/না প্রশ্ন — চালু-হওয়া সবচেয়ে মানব-পাঠযোগ্য মডেল।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Compute sigmoid probabilities and binary classification decisions across four input points.',
        bn: 'চারটি ইনপুট বিন্দুতে sigmoid সম্ভাব্যতা এবং বাইনারি সিদ্ধান্ত হিসাব করো।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'logistic.js',
      code: `function sigmoid(z) { return 1 / (1 + Math.exp(-z)); }
const weights = [0.8, -1.2]; // w, b
const inputs = [0, 1, 2, 3];
inputs.forEach(x => {
  const prob = sigmoid(weights[0] * x + weights[1]);
  const pred = prob >= 0.5 ? 1 : 0;
  console.log(\`x=\${x}: P(y=1)=\${prob.toFixed(2)} -> vote=\${pred}\`);
});
// -> x=0: P(y=1)=0.23 -> vote=0
// -> x=1: P(y=1)=0.40 -> vote=0
// -> x=2: P(y=1)=0.60 -> vote=1
// -> x=3: P(y=1)=0.77 -> vote=1`,
      caption: {
        en: 'Points with probability above 0.5 get classified as 1, while points below 0.5 get classified as 0.',
        bn: '০.৫ এর বেশি সম্ভাব্যতা পেলে ১ শ্রেণিতে এবং ০.৫ এর কম হলে ০ শ্রেণিতে পড়ে।',
      },
    },
  ],
  exercises: [
    {
      id: 'cgl-ex-1',
      kind: 'mcq',
      topic: 'sigmoid',
      question: { en: 'Sigmoid turns a score of +100 into…', bn: 'Sigmoid +১০০ স্কোরে বানায়…' },
      options: [
        { en: '≈ 1.0 (certain class 1)', bn: '≈ ১.০ (নিশ্চিত শ্রেণি-১)' },
        { en: '100', bn: '১০০' },
        { en: '≈ 0.0', bn: '≈ ০.০' },
        { en: 'An error', bn: 'Error' },
      ],
      answer: 0,
      hint: { en: 'Far right of the S-curve.', bn: 'S-বক্রের ডান-প্রান্ত।' },
      explanation: {
        en: 'Huge positive score → sigmoid saturates near 1: total confidence in class 1. Huge negative → near 0.',
        bn: 'বিশাল ধনাত্মক স্কোর → sigmoid ১-এ সম্পৃক্ত: শ্রেণি ১ এ পূর্ণ আস্থা। বিশাল ঋণাত্মক → ০ এর কাছে।',
      },
    },
    {
      id: 'cgl-ex-2',
      kind: 'mcq',
      topic: 'threshold-cost',
      question: { en: 'Cancer screening: missing a case is catastrophic, false alarms are cheap retests. Threshold?', bn: 'ক্যান্সার-screening: মিস বিপর্যয়, ভুল-অ্যালার্ম সস্তা-retest। Threshold?' },
      options: [
        { en: 'Low (e.g. 0.2) — flag generously', bn: 'নিচু (যেমন ০.২) — উদার-পতাকা' },
        { en: 'High (e.g. 0.9) — flag rarely', bn: 'উঁচু (যেমন ০.৯) — কদাচিৎ-পতাকা' },
        { en: 'Always 0.5', bn: 'সবসময় ০.৫' },
        { en: 'Random per patient', bn: 'রোগী-প্রতি এলোমেলো' },
      ],
      answer: 0,
      hint: { en: 'HOW step 3.', bn: 'HOW ধাপ ৩।' },
      explanation: {
        en: 'Cheap false alarms + catastrophic misses = low threshold: catch everything suspicious, let retests clear the innocent.',
        bn: 'সস্তা ভুল-অ্যালার্ম + বিপর্যয়কর মিস = নিচু threshold: সন্দেহজনক সব ধরুন, retest নিরপরাধ ছাড়ুক।',
      },
    },
    {
      id: 'cgl-ex-3',
      kind: 'mcq',
      topic: 'imbalance',
      question: { en: 'Fraud rate 0.1%. “Always legit” scores 99.9%. It catches…', bn: 'জালিয়াতি ০.১%। “সবসময় আসল” ৯৯.৯% পায়। ধরে…' },
      options: [
        { en: '0 fraud — accuracy measured the majority', bn: '০ জাল — accuracy সংখ্যাগরিষ্ঠ মেপেছে' },
        { en: '99.9% of fraud', bn: '৯৯.৯% জাল' },
        { en: 'All fraud — perfect', bn: 'সব জাল — নিখুঁত' },
        { en: 'Half the fraud', bn: 'অর্ধেক জাল' },
      ],
      answer: 0,
      hint: { en: 'DEBUG callout.', bn: 'DEBUG callout।' },
      explanation: {
        en: 'It never votes fraud, so caught = 0. The 99.9% only reports “most transactions are legit” — knowledge you had for free.',
        bn: 'জাল-ভোট দেয় না, ধরা = ০। ৯৯.৯% শুধু জানায় “বেশিরভাগ লেনদেন আসল” — বিনামূল্যের জ্ঞান।',
      },
    },
    {
      id: 'cgl-ex-4',
      kind: 'predict',
      topic: 'tryit-read',
      question: { en: 'At T=0.5 the tryit misses one true pass. Which row, and what happens to it at T=0.2?', bn: 'T=০.৫-এ tryit এক সত্যি-পাস মিস করে। কোন সারি, আর T=০.২-তে তার কী হয়?' },
      options: [
        { en: 'hours=5 (truth 0): false alarm at 0.5, fixed (ok) at 0.2', bn: 'ঘণ্টা=৫ (সত্যি ০): ০.৫-এ ভুল-অ্যালার্ম, ০.২-তে ঠিক (ok)' },
        { en: 'hours=4 (truth 1): missed at 0.5, caught at 0.2', bn: 'ঘণ্টা=৪ (সত্যি ১): ০.৫-এ মিস, ০.২-তে ধরা' },
        { en: 'No errors at 0.5', bn: '০.৫-এ ভুল নেই' },
        { en: 'All rows flip at 0.2', bn: '০.২-তে সব সারি উল্টায়' },
      ],
      answer: 1,
      hint: { en: 'sig(4) = 1/(1+e^0.6) ≈ 0.35.', bn: 'sig(৪) = ১/(১+e^০.৬) ≈ ০.৩৫।' },
      explanation: {
        en: 'sig(4)≈0.35 < 0.5 → votes 0, but truth is 1: the lone miss at T=0.5. At T=0.2, 0.35 clears → caught. sig(5)≈0.62: false alarm at BOTH thresholds — lowering T never fixes false alarms, it buys catches.',
        bn: 'sig(৪)≈০.৩৫ < ০.৫ → ভোট ০, সত্যি ১: T=০.৫-এ একমাত্র মিস। T=০.২-তে ০.৩৫ পার → ধরা। sig(৫)≈০.৬২: দুই threshold-এ ভুল-অ্যালার্ম — T নামানো ভুল-অ্যালার্ম সারায় না, ধরা কেনে।',
      },
    },
  ],
  quiz: {
    id: 'classification-logistic-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'cglq1',
        kind: 'mcq',
        topic: 'boundary',
        question: { en: 'The decision boundary is…', bn: 'Decision boundary (সিদ্ধান্তের সীমানা) হলো…' },
        options: [
          { en: 'Where the model switches its vote', bn: 'যেখানে মডেল ভোট বদলায়' },
          { en: 'The edge of the dataset', bn: 'Dataset-এর কিনারা' },
          { en: 'A type of error', bn: 'এক ধরনের error' },
          { en: 'The 0.5 line on every plot', bn: 'প্রতি প্লটে ০.৫ রেখা' },
        ],
        answer: 0,
        hint: { en: 'Keyterms.', bn: 'Keyterms।' },
        explanation: {
          en: 'Boundary = the vote-switching surface in feature space (w·x+b=0 for linear models).',
          bn: 'সীমানা = feature-জগতে ভোট-বদল তল (linear মডেলে w·x + b = ০ )।',
        },
      },
      {
        id: 'cglq2',
        kind: 'mcq',
        topic: 'logloss',
        question: { en: 'Why log-loss instead of “count wrong answers”?', bn: '“ভুল-গণনা”-র বদলে log-loss কেন?' },
        options: [
          { en: 'It punishes confident-wrong far more than unsure-wrong', bn: 'অনিশ্চিত-ভুলের চেয়ে আত্মবিশ্বাসী-ভুলে বেশি শাস্তি' },
          { en: 'It trains faster on paper', bn: 'কাগজে দ্রুত train হয়' },
          { en: 'Wrong-counts are illegal', bn: 'ভুল-গণনা বেআইনি' },
          { en: 'No reason — fashion', bn: 'কারণ নেই — ফ্যাশন' },
        ],
        answer: 0,
        hint: { en: '“Confident-wrong pays dearly.”', bn: '“আত্মবিশ্বাসী-ভুলে চড়া-দাম।”' },
        explanation: {
          en: 'Saying “99% ham” on spam should hurt ~100× more than “51% ham.” Log-loss prices confidence, teaching calibrated doubt.',
          bn: 'স্প্যামে “৯৯% হ্যাম” বলায় “৫১% হ্যাম”-এর ~১০০× আঘাত উচিত। Log-loss আস্থার দাম ধরে, মাপা-সন্দেহ শেখায়।',
        },
      },
      {
        id: 'cglq3',
        kind: 'mcq',
        topic: 'prob-use',
        question: { en: 'Best use of P(fraud)=0.51 vs 0.99?', bn: 'P(জাল)=০.৫১ বনাম ০.৯৯-এর সেরা ব্যবহার?' },
        options: [
          { en: 'Route 0.51 to human review, 0.99 to auto-block', bn: '০.৫১ মানুষের দেখায়, ০.৯৯ auto-block-এ' },
          { en: 'Treat both as “fraud, block”', bn: 'দুটোই “জাল, block”' },
          { en: 'Treat both as “legit”', bn: 'দুটোই “আসল”' },
          { en: 'Delete both transactions', bn: 'দুটো লেনদেন মুছে দাও' },
        ],
        answer: 0,
        hint: { en: 'WHY bullet 2.', bn: 'WHY বুলেট ২।' },
        explanation: {
          en: 'Probabilities buy ROUTING: unsure cases get humans, sure cases get automation. Labels alone cannot route.',
          bn: 'Probability ROUTING কেনে: অনিশ্চিত-মানুষ, নিশ্চিত-স্বয়ংক্রিয়। Label একা route করতে পারে না।',
        },
      },
      {
        id: 'cglq4',
        kind: 'predict',
        topic: 'spam-threshold',
        question: { en: 'Spam filter: false alarms hide real job offers (expensive); missed spam is one swipe (cheap). Set T (high/low) + one-line justification.', bn: 'স্প্যাম ফিল্টার: ভুল-অ্যালার্মে আসল চাকরি-প্রস্তাব লুকায় (ব্যয়বহুল); মিস-স্প্যাম এক সোয়াইপ (সস্তা)। T (উঁচু/নিচু) + এক-লাইন যুক্তি দিন।' },
        answer: 'High T (≈0.9): only near-certain spam is junked; borderline mail stays visible because hiding real mail costs more.',
        accept: ['high', '0.9', 'junk', 'visible', 'cost'],
        hint: { en: 'Which error costs more?', bn: 'কোন error ব্যয়বহুল?' },
        explanation: {
          en: 'Full credit: HIGH threshold with the cost logic — protect real mail, tolerate a few spam swipes. Opposite of cancer screening, same rule: cost places T.',
          bn: 'পূর্ণ নম্বর: উঁচু threshold + খরচ-যুক্তি — আসল মেইল রক্ষা, কিছু spam সোয়াইপ সহো। ক্যান্সার-screening-এর উল্টো, একই নিয়ম: খরচ T বসায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'decision-trees',
    title: { en: 'Decision Trees', bn: 'Decision Tree' },
  },
};