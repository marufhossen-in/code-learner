import type { Lesson } from '../../../lib/types';

export const LinearRegressionLesson: Lesson = {
  slug: 'linear-regression',
  tech: 'machine-learning',
  title: { en: 'Linear Regression', bn: 'লিনিয়ার Regression' },
  summary: {
    en: 'The first real algorithm: fit the line that misses least. You will learn least squares honestly (minimize the total squared miss), compute a fit in closed form with real arithmetic, run it live on noisy data — and learn exactly when lines stop being enough.',
    bn: 'প্রথম আসল অ্যালগরিদম: সবচেয়ে কম-ভুলের রেখা বসানো। Least squares সৎভাবে শিখবেন (মোট বর্গ-ভুল সর্বনিম্ন), আসল গাণিতিকে closed-form fit হিসাব করবেন, noisy data-তে live চালাবেন — আর জানবেন রেখা কখন যথেষ্ট থাকে না।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The line that misses least', bn: 'WHAT — সবচেয়ে কম-ভুলের রেখা' },
    },
    {
      type: 'para',
      text: {
        en: 'Linear regression predicts a NUMBER from features with a straight line: price ≈ w × size + b. The “best” line is defined, not guessed: the one minimizing total squared miss (MSE — mean squared error). Squaring punishes big misses hard, so the line cannot ignore outliers for free. Two numbers — slope w, intercept b — hold the whole model.',
        bn: 'Linear regression feature থেকে সংখ্যা predict করে সরলরেখায়: দাম ≈ w × আকার + b। “সেরা” রেখা সংজ্ঞায়িত, আন্দাজ নয়: মোট বর্গ-ভুল (MSE — mean squared error) ১টি নির্দিষ্ট রেখায় সর্বনিম্ন। বর্গ বড়-ভুলে কঠিন শাস্তি দেয়, তাই রেখা outlier বিনামূল্যে এড়াতে পারে না। দুই সংখ্যা — ঢাল w, intercept b — পুরো মডেল ধরে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Least squares: shrink every residual', bn: 'Least squares: প্রতি residual সংকোচো' },
      svg: `<svg viewBox="0 0 640 300" font-family="system-ui, sans-serif" role="img" aria-label="Data points with a fitted line and residual dashes">
<line x1="60" y1="250" x2="600" y2="250" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<line x1="60" y1="250" x2="60" y2="20" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<text x="590" y="270" font-size="13" fill="currentColor">size →</text>
<text x="15" y="40" font-size="13" fill="currentColor">price</text>
<line x1="80" y1="235" x2="560" y2="45" stroke="#dc2626" stroke-width="2.5"/>
<text x="500" y="40" font-size="13" font-weight="600" fill="#dc2626">fitted line</text>
<g fill="#4f46e5">
<circle cx="120" cy="212" r="6"/><circle cx="200" cy="188" r="6"/><circle cx="280" cy="150" r="6"/>
<circle cx="360" cy="122" r="6"/><circle cx="440" cy="90" r="6"/><circle cx="520" cy="62" r="6"/>
</g>
<line x1="200" y1="188" x2="200" y2="176" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="360" y1="122" x2="360" y2="134" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="520" y1="62" x2="520" y2="52" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 3"/>
<text x="385" y="120" font-size="13" font-weight="600" fill="currentColor">residual = miss</text>
<text x="385" y="140" font-size="13" fill="currentColor">MSE = average of miss²</text>
<text x="60" y="285" font-size="13" fill="currentColor" opacity="0.8">Best line = smallest MSE. Squaring makes big misses expensive.</text>
</svg>`,
      caption: {
        en: 'Residuals are the vertical gaps. Least squares picks the line whose squared gaps sum smallest.',
        bn: 'Residual খাড়া ফাঁক। Least squares সেই রেখা নেয়, যার বর্গ-ফাঁকের যোগ সর্বনিম্ন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Regression', def: { en: 'Predicting a number (price, temperature, demand).', bn: 'সংখ্যা predict (দাম, তাপমাত্রা, চাহিদা)।' } },
        { term: 'Residual', def: { en: 'One miss: truth − prediction on one row.', bn: 'এক ভুল: এক সারিতে সত্যি − prediction।' } },
        { term: 'MSE', def: { en: 'Mean squared error: average of miss². The loss for regression.', bn: 'বর্গ-ভুলের গড়। Regression-এর loss।' } },
        { term: 'Slope / intercept', def: { en: 'w (rise per unit) and b (value at zero): the model’s two numbers.', bn: 'w (এককে ওঠা) আর b (শূন্যে মান): মডেলের দুই সংখ্যা।' } },
        { term: 'Least squares', def: { en: 'The rule “minimize total miss²” — plus the formula that solves it directly.', bn: '“মোট miss² সর্বনিম্ন” নিয়ম — আর সরাসরি-সমাধান সূত্র।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The baseline everything must beat', bn: 'WHY — Baseline, যাকে সবাইকে হারাতে হয়' },
    },
    {
      type: 'list',
      items: [
        { en: 'Five-minute sanity check: if a neural net cannot beat a line on your data, fix the data — not the net.', bn: 'পাঁচ-মিনিট সুস্থতা-যাচাই: ডেটায় রেখাকে neural net হারাতে না পারলে ডেটা ঠিক করুন — net নয়।' },
        { en: 'Interpretable by default: “each extra sqft adds ৳0.075 lakh” is a sentence managers, judges, and doctors accept.', bn: 'স্বভাবত ব্যাখ্যাযোগ্য: “প্রতি বাড়তি sqft ৳০.০৭৫ লাখ যোগ করে” — ম্যানেজার, বিচারক, ডাক্তার মানে।' },
        { en: 'Closed-form solvable: no training loop needed for the basics — arithmetic gives the answer (run below).', bn: 'Closed-form সমাধানযোগ্য: মূলে training loop লাগে না — গাণিতিক উত্তর দেয় (নিচে চালান)।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Fit a line in 4 steps', bn: 'HOW — রেখা বসান ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Plot the dots', bn: '১. বিন্দু প্লট করুন' }, text: { en: 'If the cloud is not roughly straight, stop — a line is the wrong tool (see DEBUG).', bn: 'মেঘ মোটামুটি সোজা না হলে থামুন — রেখা ভুল যন্ত্র (DEBUG দেখুন)।' } },
        { title: { en: '2. Compute w and b', bn: '২. w আর b হিসাব' }, text: { en: 'Least-squares formula (or gradient descent): slope = spread-together / spread-x.', bn: 'Least-squares সূত্র (বা gradient descent): ঢাল = একসাথে-ছড়ানো / x-ছড়ানো।' } },
        { title: { en: '3. Measure MSE on held-out rows', bn: '৩. সরিয়ে-রাখা সারিতে MSE' }, text: { en: 'Train error flatters; locked-test MSE is the grade.', bn: 'Train error তোষামোদ করে; তালা-test MSE গ্রেড।' } },
        { title: { en: '4. Predict inside the range', bn: '৪. সীমার ভেতরে predict' }, text: { en: 'Interpolation = informed; extrapolation = hope with algebra.', bn: 'Interpolation = জ্ঞাত; extrapolation = বীজগণিত-সহ আশা।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The formula, live', bn: 'INSIDE — সূত্র, live' },
    },
    {
      type: 'para',
      text: {
        en: 'No training loop: slope = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)², intercept = ȳ − w·x̄. This tryit fits noisy apartment data, draws the found line, prints MSE, and predicts a new size. Change NEW_X and the noise to feel fit vs over-trust.',
        bn: 'Training loop নেই: ঢাল = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)², intercept = ȳ − w·x̄। এই tryit noisy ফ্ল্যাট-ডেটায় fit করে, পাওয়া-রেখা আঁকে, MSE ছাপে, নতুন আকার predict করে। NEW_X আর noise বদলে fit বনাম অতি-আস্থা টের পান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Least squares, closed form (edit NEW_X, press Run)', bn: 'Least squares, closed form (NEW_X বদলে Run)' },
      html: '<h3>Fit + predict, no training loop</h3>\n<canvas id="c" width="380" height="250"></canvas>\n<p id="out"></p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\ncanvas { border: 1px solid #c7d2fe; border-radius: 8px; background: #eef2ff; }\n#out { font-weight: bold; color: #4338ca; }',
      js: '// Noisy flats: [size sqft, price lakh]\nconst DATA = [[700,55],[850,63],[900,70],[1050,74],[1150,86],[1300,92],[1450,105],[1500,108]];\nconst NEW_X = 1200; // ← change me\nconst n = DATA.length;\nconst mx = DATA.reduce((s,p) => s + p[0], 0) / n;\nconst my = DATA.reduce((s,p) => s + p[1], 0) / n;\nlet num = 0, den = 0;\nDATA.forEach(([x,y]) => { num += (x-mx)*(y-my); den += (x-mx)*(x-mx); });\nconst w = num / den, b = my - w * mx; // THE formula\nconst mse = DATA.reduce((s,[x,y]) => s + (w*x+b - y)**2, 0) / n;\nconsole.log("slope w =", w.toFixed(4), " intercept b =", b.toFixed(2));\nconsole.log("train MSE =", mse.toFixed(2), "(lakh^2 — grade on HELD-OUT rows in real work)");\nconst c = document.getElementById("c").getContext("2d");\nc.fillStyle = "#4f46e5";\nDATA.forEach(([x,y]) => {\n  c.beginPath(); c.arc(20+(x-650)/900*340, 230-(y-45)/75*200, 5, 0, 7); c.fill();\n});\nc.strokeStyle = "#dc2626"; c.lineWidth = 2; c.beginPath();\nc.moveTo(20, 230-(w*650+b-45)/75*200);\nc.lineTo(360, 230-(w*1550+b-45)/75*200); c.stroke();\nconst pred = (w*NEW_X+b).toFixed(1);\ndocument.getElementById("out").textContent = "Predicted price for " + NEW_X + " sqft: ৳" + pred + " lakh";\nconsole.log("prediction for", NEW_X, "sqft:", pred, "lakh");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Regression instincts', bn: 'RESULT — Regression-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'State the model: y ≈ w·x + b; w and b chosen to minimize MSE.', bn: 'মডেল বলুন: y ≈ w·x + b; MSE-সর্বনিম্নে w, b বাছা।' },
        { en: 'Read MSE honestly: average miss² on HELD-OUT rows, in squared units.', bn: 'MSE সৎভাবে পড়ুন: সরিয়ে-রাখা সারিতে গড় miss², বর্গ-এককে।' },
        { en: 'You fitted a line from the formula and predicted — the whole algorithm, no magic.', bn: 'সূত্রে রেখা বসিয়ে predict করলেন — পুরো অ্যালগরিদম, জাদু নেই।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — When lines lie', bn: 'DEBUG — রেখা কখন মিথ্যা বলে' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Curved truth + straight model = confident nonsense', bn: 'বাঁকা-সত্যি + সোজা-মডেল = আত্মবিশ্বাসী অর্থহীনতা' },
      text: {
        en: 'House prices flatten for huge flats; crop yield rises then falls with fertilizer. A line through curved truth misses everywhere with a great R² disguise. Guard: plot FIRST (HOW step 1) — if it bends, reach for trees (L3) or polynomials, not hope.',
        bn: 'বিশাল ফ্ল্যাটে দাম সমতল হয়; সারে ফলন বাড়ে তারপর কমে। বাঁকা-সত্যিতে রেখা সর্বত্র ভুল করে দারুণ R²-ছদ্মবেশে। পাহারা: আগে প্লট (HOW ধাপ ১) — বাঁকলে tree (পাঠ ৩) বা polynomial নিন, আশা নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'One outlier can drag the whole line', bn: 'এক outlier পুরো রেখা টানতে পারে' },
      text: {
        en: 'Squaring gives a single 10× miss 100× voice. A mistyped “85000 sqft” flat will tilt everything. Guard: plot, cap/clamp absurd values, and report MSE with and without suspects.',
        bn: 'বর্গ এক ১০× ভুলে ১০০× কণ্ঠ দেয়। ভুল-টাইপ “৮৫০০০ sqft” ফ্ল্যাট সব কাত করে। পাহারা: প্লট, অযৌক্তিক মান cap/clamp, সন্দেহভাজন-সহ/ছাড়া MSE জানান।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Lines at work', bn: 'REAL WORLD — কর্মরত রেখা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Demand forecasting: shops predict tomorrow’s sales from day-of-week + weather with regression.', bn: 'চাহিদা-পূর্বাভাস: দোকান বার + আবহাওয়ায় আগামীর বিক্রি regression-এ predict করে।' },
        { en: 'Sensor calibration: raw voltage → true temperature is a fitted line, rechecked yearly.', bn: 'সেন্সর-ক্যালিব্রেশন: কাঁচা voltage → আসল তাপমাত্রা বসানো-রেখা, বছরে পুনঃযাচাই।' },
        { en: 'Baselines in every Kaggle winner’s write-up: “linear model scored X; our net added Y.”', bn: 'প্রতি Kaggle-জয়ীর লেখায় baseline: “linear মডেল X; আমাদের net Y যোগ করেছে।”' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Classification', bn: 'পরবর্তী — ক্লাসিফিকেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'Numbers predicted. Lesson 2 predicts CATEGORIES: spam or not, sick or healthy. Same features-in spirit, new machinery — decision boundaries and probabilities — starting with logistic regression.',
        bn: 'সংখ্যা predict হলো। পাঠ ২ শ্রেণি predict করে: স্প্যাম না, অসুস্থ না সুস্থ। একই feature-ঢোকা চেতনা, নতুন যন্ত্রপাতি — decision boundary আর probability — logistic regression দিয়ে শুরু।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Fit a line through four points using Ordinary Least Squares and predict the next value.',
        bn: 'Ordinary Least Squares ব্যবহার করে চার বিন্দুর মধ্য দিয়ে রেখা মেলাও এবং পরবর্তী মান predict করো।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'ols.js',
      code: `const pts = [{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 7 }, { x: 4, y: 9 }];
const n = pts.length;
const sumX = pts.reduce((s, p) => s + p.x, 0);
const sumY = pts.reduce((s, p) => s + p.y, 0);
const sumXY = pts.reduce((s, p) => s + p.x * p.y, 0);
const sumX2 = pts.reduce((s, p) => s + p.x * p.x, 0);
const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
const b = (sumY - m * sumX) / n;
console.log(\`Fitted line: y = \${m.toFixed(1)}x + \${b.toFixed(1)}\`);
console.log(\`Predict for x=5: \${(m * 5 + b).toFixed(1)}\`);
// -> Fitted line: y = 2.0x + 1.0
// -> Predict for x=5: 11.0`,
      caption: {
        en: 'The fitted line slope is 2.0 and intercept is 1.0, predicting 11.0 for x=5.',
        bn: 'বসানো রেখার ঢাল ২.০ এবং ইন্টারসেপ্ট ১.০, যা x=৫ এর জন্য ১১.০ ফলাফল দেয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'lir-ex-1',
      kind: 'mcq',
      topic: 'mse',
      question: { en: 'Misses are +2, −2, +1 (lakh). MSE?', bn: 'ভুল +২, −২, +১ (লাখ)। MSE?' },
      options: [
        { en: '3 (=(4+4+1)/3)', bn: '৩ (=(৪+৪+১)/৩)' },
        { en: '1 (=average of misses)', bn: '১ (=ভুলের গড়)' },
        { en: '5 (=sum of misses)', bn: '৫ (=ভুলের যোগ)' },
        { en: '0 (signs cancel)', bn: '০ (চিহ্ন বাতিল)' },
      ],
      answer: 0,
      hint: { en: 'Square first — signs must not cancel.', bn: 'আগে বর্গ — চিহ্ন বাতিল হবে না।' },
      explanation: {
        en: '(4+4+1)/3 = 3 lakh². Averaging raw misses (+2−2+1)/3 would fake “0.33” — exactly why we square.',
        bn: '(৪+৪+১)/৩ = ৩ লাখ²। কাঁচা-ভুলের গড় (+২−২+১)/৩ করলে ভুয়া “০.৩৩” দিত — এজন্যই বর্গ করি।',
      },
    },
    {
      id: 'lir-ex-2',
      kind: 'mcq',
      topic: 'intercept',
      question: { en: 'price ≈ 0.075×size + 4 (lakh). A 0-sqft flat “costs” 4 lakh. Meaning?', bn: 'দাম ≈ ০.০৭৫×আকার + ৪ (লাখ)। ০-sqft ফ্ল্যাট “দাম” ৪ লাখ। মানে?' },
      options: [
        { en: 'The line’s anchor — meaningless beyond the data range, needed inside it', bn: 'রেখার নোঙর — ডেটা-সীমার বাইরে অর্থহীন, ভেতরে দরকারি' },
        { en: 'Every flat has a 4-lakh hidden fee', bn: 'প্রতি ফ্ল্যাটে ৪-লাখ লুকানো ফি' },
        { en: 'The model is broken', bn: 'মডেল ভাঙা' },
        { en: 'Size does not matter', bn: 'আকার জরুরি নয়' },
      ],
      answer: 0,
      hint: { en: 'Intercepts anchor lines; only trust them inside observed x.', bn: 'Intercept রেখা নোঙর করে; শুধু দেখা-x-এ বিশ্বাস।' },
      explanation: {
        en: 'b positions the line where data lives (700–1500 sqft). At x=0 it extrapolates nonsense — which is FINE, because we never predict there. Interpreting b as a “fee” is the classic rookie slide.',
        bn: 'b রেখা বসায় যেখানে ডেটা (৭০০–১৫০০ sqft)। x = ০ এর জন্য extrapolation অর্থহীন — ঠিক আছে, ওখানে predict করি না। b-কে “ফি” পড়া চিরায়ত নবিশ-ভুল।',
      },
    },
    {
      id: 'lir-ex-3',
      kind: 'mcq',
      topic: 'outlier',
      question: { en: 'One 10× miss among small misses. Effect on MSE?', bn: 'ছোট-ভুলে এক ১০× ভুল। MSE-তে প্রভাব?' },
      options: [
        { en: 'Dominates it (100× voice from squaring)', bn: 'দখল করে (বর্গে ১০০× কণ্ঠ)' },
        { en: 'Ignored automatically', bn: 'স্বয়ংক্রিয় এড়ানো' },
        { en: 'Shrinks MSE', bn: 'MSE সংকোচে' },
        { en: 'No effect', bn: 'প্রভাব নেই' },
      ],
      answer: 0,
      hint: { en: 'DEBUG callout 2.', bn: 'DEBUG callout ২।' },
      explanation: {
        en: 'Squaring is the price of sensitivity: one bad row can outvote hundreds. Plot, investigate, cap — then fit.',
        bn: 'বর্গ সংবেদনশীলতার দাম: এক খারাপ সারি শতকে হারাতে পারে। প্লট, তদন্ত, cap — তারপর fit।',
      },
    },
    {
      id: 'lir-ex-4',
      kind: 'predict',
      topic: 'range-rule',
      question: { en: 'Trained on 700–1500 sqft. A client asks for 5,000 sqft. Give the one-line professional refusal + alternative.', bn: '৭০০–১৫০০ sqft-এ train। গ্রাহক ৫,০০০ sqft চায়। এক-লাইন পেশাদার-প্রত্যাখ্যান + বিকল্প দিন।' },
      answer: 'Outside my data range — I can predict 700–1500 honestly; for 5000 I need big-flat examples first (or say the uncertainty aloud).',
      accept: ['range', 'outside', 'extrapolat', '700', '1500', 'uncertain'],
      hint: { en: 'HOW step 4: interpolation vs extrapolation.', bn: 'HOW ধাপ ৪: interpolation বনাম extrapolation।' },
      explanation: {
        en: 'Full credit refuses the number AND offers the path: collect in-range evidence or report wide uncertainty. Silent extrapolation is malpractice.',
        bn: 'পূর্ণ নম্বরে সংখ্যা-প্রত্যাখ্যান আর পথ: সীমার প্রমাণ জোগাড় বা চওড়া-অনিশ্চয়তা জানানো। নীরব extrapolation অপচিকিৎসা।',
      },
    },
  ],
  quiz: {
    id: 'linear-regression-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'lirq1',
        kind: 'mcq',
        topic: 'least-squares',
        question: { en: '“Least squares” means…', bn: '“Least squares” মানে…' },
        options: [
          { en: 'Choose the line minimizing total miss²', bn: 'মোট miss²-সর্বনিম্ন রেখা নাও' },
          { en: 'Use the fewest data points', bn: 'কম ডেটা-পয়েন্ট ব্যবহার করো' },
          { en: 'Draw squares on the plot', bn: 'প্লটে বর্গ আঁকো' },
          { en: 'Square the features', bn: 'Feature বর্গ করো' },
        ],
        answer: 0,
        hint: { en: 'WHAT, second sentence.', bn: 'WHAT, দ্বিতীয় বাক্য।' },
        explanation: {
          en: '“Least” (minimize) “squares” (of misses). The name IS the algorithm’s objective.',
          bn: '“Least” (সর্বনিম্ন) “squares” (ভুলের)। নামই অ্যালগরিদমের লক্ষ্য।',
        },
      },
      {
        id: 'lirq2',
        kind: 'mcq',
        topic: 'grade-split',
        question: { en: 'Where is MSE honestly graded?', bn: 'MSE সৎভাবে কোথায় গ্রেড হয়?' },
        options: [
          { en: 'Held-out rows the fit never saw', bn: 'সরিয়ে-রাখা সারি, fit দেখেনি' },
          { en: 'The same rows used for fitting', bn: 'fit-এ ব্যবহার সারিতেই' },
          { en: 'Imaginary rows', bn: 'কাল্পনিক সারিতে' },
          { en: 'Nowhere — MSE is decorative', bn: 'কোথাও না — MSE শোভা' },
        ],
        answer: 0,
        hint: { en: 'L3 of AI-Fundamentals: the lock.', bn: 'AI-Fundamentals পাঠ ৩: তালা।' },
        explanation: {
          en: 'Train MSE flatters (the line was chosen FOR those rows). Held-out MSE grades. Same lock, new hub.',
          bn: 'Train MSE তোষামোদ করে (রেখা ওই সারির জন্য বাছা)। সরিয়ে-রাখা MSE গ্রেড দেয়। একই তালা, নতুন হাব।',
        },
      },
      {
        id: 'lirq3',
        kind: 'mcq',
        topic: 'slope-read',
        question: { en: 'w = 0.075 lakh/sqft. Plain-English reading?', bn: 'w = ০.০৭৫ লাখ/sqft। সরল-ভাষা পাঠ?' },
        options: [
          { en: 'Each extra sqft adds ~৳7,500', bn: 'প্রতি বাড়তি sqft ~৳৭,৫০০ যোগ করে' },
          { en: 'Flats cost 0.075 lakh total', bn: 'ফ্ল্যাট মোট ০.০৭৫ লাখ' },
          { en: 'Size is irrelevant', bn: 'আকার অপ্রাসঙ্গিক' },
          { en: 'The model is 7.5% accurate', bn: 'মডেল ৭.৫% নির্ভুল' },
        ],
        answer: 0,
        hint: { en: 'Slope = rise per unit.', bn: 'ঢাল = এককে ওঠা।' },
        explanation: {
          en: '0.075 lakh = ৳7,500 per sqft — the sentence that makes regression interpretable. (Inside the data range!)',
          bn: '০.০৭৫ লাখ = প্রতি sqft ৳৭,৫০০ — যে বাক্যে regression ব্যাখ্যাযোগ্য। (ডেটা-সীমার ভেতর!)',
        },
      },
      {
        id: 'lirq4',
        kind: 'predict',
        topic: 'curved-truth',
        question: { en: 'Fertilizer→yield rises then falls. A teammate fits one line anyway. State the failure + the right tool family in one line.', bn: 'সার→ফলন বাড়ে তারপর কমে। সতীর্থ তবু এক রেখা বসায়। এক লাইনে ব্যর্থতা + সঠিক যন্ত্র-পরিবার বলুন।' },
        answer: 'A line cannot bend: it misses both ends; use trees (L3) or curves/polynomials that can turn.',
        accept: ['bend', 'curve', 'tree', 'polynomial', 'line'],
        hint: { en: 'DEBUG callout 1.', bn: 'DEBUG callout ১।' },
        explanation: {
          en: 'Straight model, curved truth = systematic miss. Reach for bendy tools (trees next lesson) instead of defending the line.',
          bn: 'সোজা-মডেল, বাঁকা-সত্যি = নিয়মিত-ভুল। রেখা-সমর্থনের বদলে বাঁকানো-যন্ত্র (পরের পাঠে tree) নিন।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'classification-logistic',
    title: { en: 'Classification with Logistic Regression', bn: 'Logistic Regression-এ Classification' },
  },
};