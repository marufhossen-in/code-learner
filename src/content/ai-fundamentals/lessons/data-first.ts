import type { Lesson } from '../../../lib/types';

export const DataFirstLesson: Lesson = {
  slug: 'data-first',
  tech: 'ai-fundamentals',
  title: {
    en: 'Data First',
    bn: 'মডেল তার training data-র আয়না: সৎ ডেটা, সৎ মডেল — AI Fundamentals'
  },
  summary: {
    en: 'Models are mirrors of their training data: honest data, honest model. This lesson shows what training data concretely looks like, how to split it into train/test sets without cheating, and why data quality beats model cleverness — then you plot real points and predict a house price yourself.',
    bn: 'মডেল তার training data-র আয়না: সৎ ডেটা, সৎ মডেল। এই পাঠে দেখবেন training data আসলে দেখতে কেমন, প্রতারণা ছাড়া train/test-এ কীভাবে ভাগ করবেন, আর ডেটার মান কেন মডেলের চালাকিকে হারায় — তারপর নিজেই পয়েন্ট প্লট করে বাড়ির দাম predict করবেন।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Training data is a table of past truths', bn: 'WHAT — Training data হলো পুরনো সত্যের টেবিল' },
    },
    {
      type: 'para',
      text: {
        en: 'Every supervised dataset is the same shape: rows are examples, the last column is the label (the truth), the rest are features (the clues). A house-price dataset is just history: size, location, age → the price it actually sold for. The model’s entire job is to continue that table into the future.',
        bn: 'প্রতি supervised dataset একই আকৃতির: সারি হলো উদাহরণ, শেষ কলাম label (সত্যি), বাকিগুলো feature (সূত্র)। বাড়ির-দাম dataset শুধুই ইতিহাস: আকার, অবস্থান, বয়স → আসলে যে দামে বিক্রি হয়েছিল। মডেলের পুরো কাজ এই টেবিল ভবিষ্যতে বাড়িয়ে লেখা।',
      },
    },
    {
      type: 'table',
      head: [{ en: 'Size (sqft) — feature', bn: 'আকার (sqft) — feature' }, { en: 'Age (yrs) — feature', bn: 'বয়স (বছর) — feature' }, { en: 'Sold for — LABEL', bn: 'বিক্রি দাম — LABEL' }],
      rows: [
        [{ en: '800', bn: '৮০০' }, { en: '5', bn: '৫' }, { en: '৳62 lakh', bn: '৳৬২ লাখ' }],
        [{ en: '1,200', bn: '১,২০০' }, { en: '12', bn: '১২' }, { en: '৳85 lakh', bn: '৳৮৫ লাখ' }],
        [{ en: '1,600', bn: '১,৬০০' }, { en: '3', bn: '৩' }, { en: '৳1.2 crore', bn: '৳১.২ কোটি' }],
        [{ en: '1,000', bn: '১,০০০' }, { en: '20', bn: '২০' }, { en: '??? (predict me)', bn: '??? (predict করো)' }],
      ],
      caption: { en: 'Three past truths teach; the fourth row is the exam. Features are known, label is hidden — prediction fills it.', bn: 'তিন পুরনো সত্যি শেখায়; চতুর্থ সারি পরীক্ষা। Feature জানা, label লুকানো — prediction সেটা পূরণ করে।' },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Dataset', def: { en: 'The full collection of examples used to teach and test a model.', bn: 'মডেল শেখানো-পরীক্ষার উদাহরণের পুরো সংগ্রহ।' } },
        { term: 'Training set', def: { en: 'The examples the model learns from (~70–80% of data).', bn: 'যেসব উদাহরণ থেকে মডেল শেখে (ডেটার ~৭০–৮০%)।' } },
        { term: 'Test set', def: { en: 'Hidden examples used ONCE to grade honestly. Peeking = cheating.', bn: 'সৎ মূল্যায়নে একবার ব্যবহার করা লুকানো উদাহরণ। উঁকি = প্রতারণা।' } },
        { term: 'GIGO', def: { en: 'Garbage In, Garbage Out: bad data → bad model, however clever the math.', bn: 'আবর্জনা ঢোকালে আবর্জনা বেরোয়: খারাপ ডেটা → খারাপ মডেল, গণিত যত চালাকই হোক।' } },
        { term: 'Overfitting', def: { en: 'Memorizing training rows instead of learning the pattern (preview of L5).', bn: 'প্যাটার্ন না শিখে training-সারি মুখস্থ (পাঠ ৫-এর পূর্বাভাস)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Data decides before math begins', bn: 'WHY — গণিত শুরুর আগেই ডেটা সিদ্ধান্ত নেয়' },
    },
    {
      type: 'list',
      items: [
        { en: 'A simple model on great data beats a fancy model on sloppy data — every practitioner learns this the expensive way.', bn: 'ভালো ডেটায় সরল মডেল ঢিলে ডেটায় জমকালো মডেলকে হারায় — প্রতি practitioner দাম দিয়ে এটা শেখে।' },
        { en: 'The test set is your only honest mirror: without hidden data, every accuracy number is self-praise.', bn: 'Test set-ই একমাত্র সৎ আয়না: লুকানো ডেটা ছাড়া প্রতি accuracy-সংখ্যা আত্মপ্রশংসা।' },
        { en: 'Most “AI failures” in the news are data failures: biased history, leaked test rows, wrong labels.', bn: 'খবরের বেশিরভাগ “AI-ব্যর্থতা” ডেটা-ব্যর্থতা: পক্ষপাতী ইতিহাস, ফাঁস-হওয়া test-সারি, ভুল লেবেল।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Split honestly, plot, predict', bn: 'HOW — সৎভাবে ভাগ করো, প্লট করো, predict করো' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Collect past truths', bn: '১. পুরনো সত্যি জোগাড় করো' }, text: { en: 'Features you will know at prediction time + the label that happened. No future leaks.', bn: 'Prediction-সময়ে জানা থাকবে এমন feature + যা ঘটেছিল সেই label। ভবিষ্যতের ফাঁস নয়।' } },
        { title: { en: '2. Lock away a test set', bn: '২. test set তালা দাও' }, text: { en: 'Random 20% goes into a vault. You may open it ONCE, at the end, to report the score.', bn: 'এলোমেলো ২০% সিন্দুকে। শেষে মাত্র একবার খুলে স্কোর জানাবেন।' } },
        { title: { en: '3. Plot before modeling', bn: '৩. মডেলের আগে প্লট' }, text: { en: 'Eyes catch what math hides: outliers, gaps, wrong units. Always look at your data.', bn: 'চোখ ধরে যা গণিত লুকায়: outlier, ফাঁক, ভুল একক। ডেটা সবসময় চোখে দেখুন।' } },
        { title: { en: '4. Predict, then verify', bn: '৪. predict, তারপর যাচাই' }, text: { en: 'Fit a simple line, predict the held-out rows, measure the miss. That miss is truth.', bn: 'সরল রেখা বসাও, সরিয়ে-রাখা সারিতে predict করো, ভুল মাপো। সেই ভুলই সত্যি।' } },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'The honest split: train on 80%, grade on hidden 20%', bn: 'সৎ ভাগ: ৮০%-এ শেখো, লুকানো ২০%-এ মূল্যায়ন' },
      svg: `<svg viewBox="0 0 640 210" font-family="system-ui, sans-serif" role="img" aria-label="Dataset split into training and test sets">
<rect x="20" y="60" width="400" height="70" rx="10" fill="#4f46e5" opacity="0.16" stroke="#4f46e5" stroke-width="2"/>
<rect x="430" y="60" width="190" height="70" rx="10" fill="#dc2626" opacity="0.12" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
<text x="220" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">TRAINING SET — 80%</text>
<text x="220" y="112" text-anchor="middle" font-size="13" fill="currentColor">model learns here, freely</text>
<text x="525" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">TEST SET — 20%</text>
<text x="525" y="112" text-anchor="middle" font-size="13" fill="currentColor">locked 🔒 · grade once</text>
<text x="20" y="170" font-size="14" font-weight="600" fill="currentColor">Rule: the model must NEVER see test rows during training.</text>
<text x="20" y="194" font-size="13" fill="currentColor" opacity="0.8">Peeking at the test = grading your own homework. The score will lie.</text>
</svg>`,
      caption: {
        en: 'Lock the test set away BEFORE training. Any tuning guided by test scores is cheating with extra steps.',
        bn: 'Training-এর আগেই test set তালা দিন। Test-score দেখে tuning মানেই ঘুরিয়ে প্রতারণা।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Plot it yourself, right here', bn: 'INSIDE — এখানেই নিজে প্লট করুন' },
    },
    {
      type: 'para',
      text: {
        en: 'Below is a live scatter plot: each dot is a sold house (size → price), the line is the model’s first guess. Press Run, then change NEW_SIZE and Run again — you just did supervised prediction. The console shows the predicted price.',
        bn: 'নিচে live scatter plot: প্রতি বিন্দু এক বিক্রি-হওয়া বাড়ি (আকার → দাম), রেখা মডেলের প্রথম অনুমান। Run চাপুন, তারপর NEW_SIZE বদলে আবার Run — আপনি supervised prediction করে ফেললেন। Console-এ predicted দাম দেখায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Scatter plot + first prediction (edit NEW_SIZE, press Run)', bn: 'Scatter plot + প্রথম prediction (NEW_SIZE বদলে Run চাপুন)' },
      html: '<h3>House size → price</h3>\n<canvas id="c" width="380" height="250"></canvas>\n<p id="out"></p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\ncanvas { border: 1px solid #c7d2fe; border-radius: 8px; background: #eef2ff; }\n#out { font-weight: bold; color: #4338ca; }',
      js: '// Past truths: [size sqft, price lakh Taka]\nconst DATA = [[800,62],[950,70],[1100,78],[1200,85],[1350,95],[1600,120],[1750,128]];\nconst NEW_SIZE = 1400; // ← change me, press Run\n\n// Model: price ≈ 0.075 × size (a fitted line)\nconst predict = (size) => 0.075 * size;\n\nconst c = document.getElementById("c").getContext("2d");\nc.fillStyle = "#4f46e5";\nDATA.forEach(([s, p]) => {\n  const x = 20 + (s - 700) / 1200 * 340;\n  const y = 230 - (p - 50) / 90 * 200;\n  c.beginPath(); c.arc(x, y, 5, 0, 7); c.fill();\n});\n// the model line\nc.strokeStyle = "#dc2626"; c.lineWidth = 2; c.beginPath();\nc.moveTo(20, 230 - (predict(700) - 50) / 90 * 200);\nc.lineTo(360, 230 - (predict(1900) - 50) / 90 * 200);\nc.stroke();\n\nconst price = predict(NEW_SIZE).toFixed(1);\ndocument.getElementById("out").textContent =\n  "Predicted price for " + NEW_SIZE + " sqft: ৳" + price + " lakh";\nconsole.log("prediction:", price, "lakh for", NEW_SIZE, "sqft");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Data instincts that never expire', bn: 'RESULT — ডেটা-বোধ, যা কখনো পুরনো হয় না' },
    },
    {
      type: 'list',
      items: [
        { en: 'Read any dataset as features + label; ask “what truth does each row record?”', bn: 'যেকোনো dataset পড়ুন feature + label হিসেবে; প্রশ্ন “প্রতি সারি কী সত্যি ধারণ করে?”' },
        { en: 'Split before training, lock the test set, plot before modeling.', bn: 'Training-এর আগে ভাগ করুন, test set তালা দিন, মডেলের আগে প্লট করুন।' },
        { en: 'You ran a real prediction in your browser — size in, price out. That is the whole game.', bn: 'ব্রাউজারেই আসল prediction চালালেন — আকার ঢুকল, দাম বেরোল। এটাই পুরো খেলা।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The two classic data crimes', bn: 'DEBUG — দুই চিরায়ত ডেটা-অপরাধ' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Crime 1: testing on training data', bn: 'অপরাধ ১: training data-তে পরীক্ষা' },
      text: {
        en: 'Grading on rows the model already saw gives 99% and teaches nothing — like examining students with the exact homework. The number feels great and means zero.',
        bn: 'মডেল যা সারি দেখেছে তাতেই মূল্যায়ন দিলে ৯৯% আসে, শেখা হয় শূন্য — হুবহু বাড়ির-কাজ দিয়ে পরীক্ষা নেওয়ার মতো। সংখ্যা দারুণ লাগে, মানে শূন্য।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Crime 2: future leaking into features', bn: 'অপরাধ ২: feature-এ ভবিষ্যতের ফাঁস' },
      text: {
        en: '“Predict loan default” using a feature like “days overdue” — but overdue is only known AFTER default. At prediction time that column is empty. Leaks like this fake perfect scores and fail in production.',
        bn: '“ঋণ-খেলাপি predict” করতে “বকেয়া-দিন” feature — কিন্তু বকেয়া জানা যায় খেলাপির পরে। Prediction-সময়ে ওই কলাম খালি। এমন ফাঁসে নিখুঁত স্কোর সাজে, production-এ ভাঙে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Data work is most of ML work', bn: 'REAL WORLD — ডেটার কাজই ML-এর বেশিরভাগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Industry rule of thumb: ~80% of ML effort is collecting, cleaning, and labeling data; ~20% is modeling.', bn: 'ইন্ডাস্ট্রি-নিয়ম: ML-শ্রমের ~৮০% ডেটা-সংগ্রহ, পরিষ্কার, লেবেল; ~২০% মডেলিং।' },
        { en: 'ImageNet (14M labeled photos) is what let 2012’s deep learning moment happen — the dataset was the breakthrough’s fuel.', bn: 'ImageNet (১.৪ কোটি লেবেল-ছবি) ২০১২ সালের deep-learning মুহূর্ত সম্ভব করেছিল — dataset-ই ছিল সাফল্যের জ্বালানি।' },
        { en: 'Hospitals, banks, and farms adopting AI all start the same way: “gather two years of honest records first.”', bn: 'হাসপাতাল, ব্যাংক, খামার — AI নিতে সবাই একভাবে শুরু করে: “আগে দুই বছরের সৎ রেকর্ড জোগাড় করো।”' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The perceptron', bn: 'পরবর্তী — পারসেপ্ট্রন' },
    },
    {
      type: 'para',
      text: {
        en: 'Data understood. Lesson 4 meets the simplest learning machine ever built — the perceptron, 1958: one neuron, a weighted vote, and the seed of every neural network alive today. You will run one by hand, then in code.',
        bn: 'ডেটা বোঝা। পাঠ ৪ এ সবচেয়ে সরল learning machine — perceptron, ১৯৫৮: এক নিউরন, ওজন-ভোট, আর আজকের সব neural network-এর বীজ। হাতে চালাবেন, তারপর কোডে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Split a five-row dataset into training and test sets and verify counts.',
        bn: 'পাঁচ সারির ডেটাসেটকে ট্রেনিং ও টেস্ট সেটে ভাগ করে সংখ্যা মিলিয়ে দেখুন।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'split.js',
      code: `const data = [
  { size: 1200, rooms: 3, price: 240 },
  { size: 850, rooms: 2, price: 180 },
  { size: 1500, rooms: 4, price: 310 },
  { size: 600, rooms: 1, price: 130 },
  { size: 2000, rooms: 4, price: 420 },
];
const train = data.slice(0, 4); // 4 training rows
const test = data.slice(4);     // 1 held-out test row
console.log(\`Train count: \${train.length}, Test count: \${test.length}\`);
// -> Train count: 4, Test count: 1`,
      caption: {
        en: 'Four rows go to training and one held-out row serves as the test set.',
        bn: '৪টি সারি ট্রেনিংয়ে যায় এবং ১টি আলাদা সারি টেস্ট সেট হিসেবে থাকে।',
      },
    },
  ],
  exercises: [
    {
      id: 'daf-ex-1',
      kind: 'mcq',
      topic: 'rows',
      question: { en: 'In the lesson’s house table, what is the label?', bn: 'পাঠের বাড়ি-টেবিলে label কী?' },
      options: [
        { en: 'The sold price', bn: 'বিক্রি-দাম' },
        { en: 'The size', bn: 'আকার' },
        { en: 'The age', bn: 'বয়স' },
        { en: 'The row number', bn: 'সারি-নম্বর' },
      ],
      answer: 0,
      hint: { en: 'Label = the past truth the model must learn to output.', bn: 'Label = পুরনো সত্যি, যা মডেলকে আউটপুট শিখতে হয়।' },
      explanation: {
        en: 'Size and age are features (known clues). The sold price is the truth attached to each row — the label.',
        bn: 'আকার-বয়স feature (জানা সূত্র)। বিক্রি-দাম প্রতি সারির সত্যি — label।',
      },
    },
    {
      id: 'daf-ex-2',
      kind: 'mcq',
      topic: 'split',
      question: { en: 'When must the test set be locked away?', bn: 'Test set কখন তালা দিতে হয়?' },
      options: [
        { en: 'Before training starts', bn: 'Training শুরুর আগে' },
        { en: 'After seeing bad scores', bn: 'খারাপ স্কোর দেখার পর' },
        { en: 'Never — use all data for training', bn: 'কখনো না — সব ডেটায় train করো' },
        { en: 'Only for images', bn: 'শুধু ছবির জন্য' },
      ],
      answer: 0,
      hint: { en: 'The vault opens ONCE, at the end.', bn: 'সিন্দুক শেষে মাত্র একবার খোলে।' },
      explanation: {
        en: 'Lock first, train second, grade last. Any decision influenced by test rows (even “let me tweak and re-check”) leaks the exam into training.',
        bn: 'আগে তালা, পরে train, শেষে মূল্যায়ন। Test-সারি দেখে যেকোনো সিদ্ধান্ত (এমনকি “একটু ঠিক করে আবার দেখি”) পরীক্ষা training-এ ফাঁস করে।',
      },
    },
    {
      id: 'daf-ex-3',
      kind: 'mcq',
      topic: 'leak',
      question: { en: 'Which feature leaks the future in “predict exam failure”?', bn: '“পরীক্ষায় ফেল predict”-এ কোন feature ভবিষ্যৎ ফাঁস করে?' },
      options: [
        { en: '“Retake fee paid” (only known after failing)', bn: '“রিটেক-ফি দেওয়া” (ফেলের পরেই জানা যায়)' },
        { en: '“Attendance %” (known during term)', bn: '“উপস্থিতি %” (টার্ম-চলাকালীন জানা)' },
        { en: '“Quiz average” (known during term)', bn: '“কুইজ-গড়” (টার্ম-চলাকালীন জানা)' },
        { en: '“Study hours” (known during term)', bn: '“পড়ার ঘণ্টা” (টার্ম-চলাকালীন জানা)' },
      ],
      answer: 0,
      hint: { en: 'Ask: is this column filled BEFORE the prediction moment?', bn: 'প্রশ্ন: prediction-মুহূর্তের আগেই কি এই কলাম ভরে?' },
      explanation: {
        en: 'Retake fees exist only for students who already failed — the label wearing a costume. Attendance, quizzes, and hours are legitimately known in advance.',
        bn: 'রিটেক-ফি শুধু ফেল-করা ছাত্রের থাকে — label-ই ছদ্মবেশে। উপস্থিতি, কুইজ, ঘণ্টা আগেই বৈধভাবে জানা।',
      },
    },
    {
      id: 'daf-ex-4',
      kind: 'predict',
      topic: 'tryit-read',
      question: { en: 'In the lesson’s live model (price ≈ 0.075 × size), what price does it predict for 1,000 sqft — and is that number trustworthy? One line of reasoning.', bn: 'পাঠের live মডেলে (দাম ≈ 0.075 × আকার) ১,০০০ sqft-এর predict কত — আর সংখ্যাটা কি বিশ্বাসযোগ্য? এক লাইন যুক্তি।' },
      answer: '75 lakh; roughly — it sits inside the plotted data range (800–1750), so it interpolates instead of guessing blindly.',
      accept: ['75', 'lakh', 'inside', 'range', 'interpolat'],
      hint: { en: 'Compute, then check: inside the dots or outside?', bn: 'হিসাব করো, তারপর দেখো: বিন্দুর ভেতরে না বাইরে?' },
      explanation: {
        en: '0.075 × 1000 = 75 lakh. Trustworthy-ish: 1000 sits between observed dots (interpolation). Predicting for 10,000 sqft would be extrapolation — guessing beyond all evidence.',
        bn: '0.075 × ১০০০ = ৭৫ লাখ। মোটামুটি বিশ্বাসযোগ্য: ১০০০ দেখা-বিন্দুর মাঝে (interpolation)। ১০,০০০ sqft-এ predict হতো extrapolation — সব প্রমাণের বাইরে আন্দাজ।',
      },
    },
  ],
  quiz: {
    id: 'data-first-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'dafq1',
        kind: 'mcq',
        topic: 'gigo',
        question: { en: 'GIGO (“garbage in, garbage out”) means…', bn: 'GIGO (“আবর্জনা ঢোকালে আবর্জনা”) মানে…' },
        options: [
          { en: 'Bad data produces a bad model, no matter the algorithm', bn: 'খারাপ ডেটায় খারাপ মডেল, অ্যালগরিদম যাই হোক' },
          { en: 'Models should eat less memory', bn: 'মডেলের কম মেমরি খাওয়া উচিত' },
          { en: 'Delete data after training', bn: 'Training-এর পর ডেটা মুছে দাও' },
          { en: 'Garbage data trains fastest', bn: 'আবর্জনা-ডেটায় দ্রুত train হয়' },
        ],
        answer: 0,
        hint: { en: 'Mirrors, not magicians.', bn: 'আয়না, জাদুকর নয়।' },
        explanation: {
          en: 'Models mirror training data. Mislabeled, biased, or leaked data teaches mislabeling, bias, and self-deception — confidently.',
          bn: 'মডেল training data-র আয়না। ভুল-লেবেল, পক্ষপাতী বা ফাঁস-ডেটা শেখায় ভুল-লেবেল, পক্ষপাত, আত্মপ্রতারণা — আত্মবিশ্বাসের সাথে।',
        },
      },
      {
        id: 'dafq2',
        kind: 'mcq',
        topic: 'train-test',
        question: { en: 'A model scores 99% on training rows but 61% on locked test rows. Diagnosis?', bn: 'মডেল training-সারিতে ৯৯%, তালা-test-এ ৬১%। রোগ-নির্ণয়?' },
        options: [
          { en: 'Memorized training rows instead of learning (overfitting)', bn: 'শেখার বদলে training-সারি মুখস্থ (overfitting)' },
          { en: 'The test set is too easy', bn: 'Test set খুব সহজ' },
          { en: 'Needs more training rows only', bn: 'শুধু আরো training-সারি লাগবে' },
          { en: 'Perfect — ship it', bn: 'নিখুঁত — চালু করো' },
        ],
        answer: 0,
        hint: { en: 'Huge train/test gap = memorization.', bn: 'বিশাল train/test ফারাক = মুখস্থ।' },
        explanation: {
          en: '99 vs 61 screams overfitting: the model memorized answers instead of patterns. Lesson 5 cures it; lesson 3’s split DETECTED it — that is why we split.',
          bn: '৯৯ বনাম ৬১ overfitting চিৎকার করে: মডেল প্যাটার্ন নয়, উত্তর মুখস্থ করেছে। পাঠ ৫ এর ওষুধ; পাঠ ৩ এর ভাগ এটা ধরেছে — এজন্যই ভাগ করি।',
        },
      },
      {
        id: 'dafq3',
        kind: 'mcq',
        topic: 'plot-first',
        question: { en: 'Why plot data before modeling?', bn: 'মডেলের আগে ডেটা প্লট কেন?' },
        options: [
          { en: 'Eyes catch outliers, gaps, and wrong units that math silently absorbs', bn: 'চোখ outlier, ফাঁক, ভুল একক ধরে, যা গণিত নীরবে গিলে' },
          { en: 'Plots train the model faster', bn: 'প্লট মডেল দ্রুত train করে' },
          { en: 'It replaces the test set', bn: 'এটা test set-এর বদলি' },
          { en: 'Managers like colors', bn: 'ম্যানেজার রং পছন্দ করে' },
        ],
        answer: 0,
        hint: { en: 'HOW step 3.', bn: 'HOW ধাপ ৩।' },
        explanation: {
          en: 'A 30-second plot reveals a negative age, a missing price band, a mis-scaled column — bugs that otherwise become “mysterious” model behavior.',
          bn: '৩০-সেকেন্ড প্লটে ধরা পড়ে ঋণাত্মক বয়স, হারানো দাম-ব্যান্ড, ভুল-স্কেল কলাম — নইলে যা “রহস্যময়” মডেল-আচরণ হতো।',
        },
      },
      {
        id: 'dafq4',
        kind: 'predict',
        topic: 'design-split',
        question: { en: 'You have 1,000 labeled crop photos (healthy/sick). State your split + the one lock rule, in one line.', bn: '১,০০০ লেবেল-শস্য ছবি (সুস্থ/অসুস্থ)। এক লাইনে ভাগ + এক তালা-নিয়ম বলুন।' },
        answer: 'Train on ~800, lock 200 as test before training, open the test set once to report the final score.',
        accept: ['800', '200', 'lock', 'test', 'once'],
        hint: { en: '80/20 + vault.', bn: '৮০/২০ + সিন্দুক।' },
        explanation: {
          en: 'Full credit: ~800 train / ~200 test, locked BEFORE training, opened once. Any peeking (tuning on test, “just checking”) voids the grade.',
          bn: 'পূর্ণ নম্বর: ~৮০০ train / ~২০০ test, training-এর আগে তালা, একবার খোলা। যেকোনো উঁকি (test-দেখে tuning, “শুধু দেখছি”) মূল্যায়ন বাতিল করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-perceptron',
    title: { en: 'The Perceptron', bn: 'Perceptron' },
  },
};