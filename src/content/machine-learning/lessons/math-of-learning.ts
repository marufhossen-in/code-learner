import type { Lesson } from '../../../lib/types';

export const MathOfLearningLesson: Lesson = {
  slug: 'math-of-learning',
  tech: 'machine-learning',
  title: { en: 'Math of Learning', bn: 'শেখার গণিত' },
  summary: {
    en: 'Every model you met minimizes something. You will SEE the loss bowl, feel gradients as slope-arrows, and run gradient descent live twice — learning-rate 0.1 gliding to the bottom, 1.1 exploding uphill — the most expensive lesson in ML, learned here for free.',
    bn: 'চেনা প্রতি মডেল কিছু minimize করে। Loss-বাটি দেখবেন, gradient-কে ঢাল-তীরে অনুভব করবেন, gradient descent live দুবার চালাবেন — learning-rate ০.১ তলায় পিছলে, ১.১ পাহাড়ে ফেটে — ML-এর সবচেয়ে দামি-পাঠ, এখানে ফ্রি।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Downhill all the way', bn: 'WHAT — পুরোটা উতরাই' },
    },
    {
      type: 'para',
      text: {
        en: 'Training = minimizing LOSS, the single number grading “how wrong.” Picture loss as a landscape over the weights: gradient descent stands anywhere, feels the SLOPE (gradient = steepness + direction, one arrow per weight), and steps DOWNHILL. Step size = learning rate (LR): too small crawls, too big leaps over the valley and explodes. Bowls (convex) guarantee the bottom; real landscapes hide local dips — good news: in big models most dips work fine.',
        bn: 'Training = LOSS minimize করা, “কত ভুল”-এর এক সংখ্যা-গ্রেড। Loss-কে ওজন-ওপর ভূদৃশ্য ভাবুন: gradient descent যেকোনোখানে দাঁড়ায়, ঢাল অনুভব করে (gradient = খাড়াতা + দিক, প্রতি ওজনে এক তীর), উতরাই-ধাপে নামে। ধাপ-আকার = learning rate (LR): ছোট হামাগুড়ি দেয়, বড় উপত্যকা-ডিঙিয়ে ফেটে পড়ে। বাটি (convex) তলার নিশ্চয়তা দেয়; আসল-ভূদৃশ্য স্থানীয়-খাদ লুকায় — সুখবর: বড়-মডেলে বেশিরভাগ খাদই চলে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The ball rolls where gradients point: down', bn: 'বল gradient-দিকে গড়ায়: নিচে' },
      svg: `<svg viewBox="0 0 640 260" font-family="system-ui, sans-serif" role="img" aria-label="Loss bowl with descending steps to the minimum">
<path d="M 60 60 Q 320 60 320 200 Q 320 60 580 60" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M 60 60 Q 320 60 320 200 Q 320 60 580 60 L 580 240 L 60 240 Z" fill="#4f46e5" opacity="0.08"/>
<g font-size="12" font-weight="700" fill="currentColor">
<text x="70" y="250">w small</text>
<text x="510" y="250">w big</text>
<text x="60" y="40">loss high</text>
</g>
<g fill="#dc2626">
<circle cx="140" cy="118" r="8"/>
<circle cx="200" cy="152" r="8"/>
<circle cx="255" cy="180" r="8"/>
</g>
<g stroke="#dc2626" stroke-width="2" marker-end="url(#ah)">
<line x1="148" y1="124" x2="192" y2="148"/>
<line x1="208" y1="158" x2="247" y2="176"/>
<line x1="263" y1="186" x2="310" y2="197"/>
</g>
<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
<text x="320" y="215" text-anchor="middle" font-size="26" font-weight="800" fill="#16a34a">★</text>
<text x="320" y="248" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">minimum: gradient = 0</text>
<text x="140" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">start: steep → big steps</text>
<text x="270" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">flat → baby steps</text>
</svg>`,
      caption: {
        en: 'Slope shrinks near the bottom, so fixed-LR steps auto-shorten — the bowl teaches patience.',
        bn: 'তলার-কাছে ঢাল সংকোচে, তাই fixed-LR ধাপ স্বয়ং-ছোট হয় — বাটি ধৈর্য শেখায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Loss', def: { en: '“How wrong” as one number (MSE, cross-entropy). Training minimizes it.', bn: '“কত ভুল” এক সংখ্যায় (MSE, cross-entropy)। Training এটা minimize করে।' } },
        { term: 'Gradient', def: { en: 'Slope arrow: which way is up, how steep. Descend its opposite.', bn: 'ঢাল-তীর: ওপর কোনদিকে, কত খাড়া। এর বিপরীতে নামুন।' } },
        { term: 'Learning rate', def: { en: 'Step size. The single most-tuned knob in ML.', bn: 'ধাপ-আকার। ML-এ সবচেয়ে বেশি-ঠিক-করা knob।' } },
        { term: 'Convex', def: { en: 'Bowl-shaped: one bottom, descent always finds it.', bn: 'বাটি-আকৃতি: এক তলা, descent সবসময় পায়।' } },
        { term: 'Local minimum', def: { en: 'A dip that is not the deepest. Big models mostly survive them.', bn: 'গভীরতম-নয় খাদ। বড়-মডেল বেশিরভাগ টিকে যায়।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — One algorithm trains everything', bn: 'WHY — এক অ্যালগরিদম সব train করে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Logistic regression, SVMs, neural nets, transformers: different models, SAME downhill loop. Learn it once, read every training curve forever.', bn: 'Logistic regression, SVM, neural net, transformer: আলাদা-মডেল, একই উতরাই-loop। একবার শিখুন, চিরকাল প্রতি training-curve পড়ুন।' },
        { en: 'The loss curve is your dashboard: falling = learning, flat-early = LR too small or stuck, spiking = LR too big.', bn: 'Loss-curve ড্যাশবোর্ড: পড়া = শেখা, আগাম-সমতল = LR ছোট বা আটকে, লাফ = LR বড়।' },
        { en: 'LR is the highest-leverage knob: one digit separates “converged overnight” from “exploded by lunch.”', bn: 'LR সর্বোচ্চ-লিভারেজ knob: এক অঙ্ক “রাতে-converged” থেকে “দুপুরে-ফাটা” আলাদা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Descend in 4 steps', bn: 'HOW — ৪ ধাপে নামুন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Stand anywhere', bn: '১. যেকোনোখানে দাঁড়ান' }, text: { en: 'Random small weights. Bowls forgive starts; wild landscapes want a few tries.', bn: 'এলোমেলো-ছোট ওজন। বাটি শুরু ক্ষমা করে; বুনো-ভূদৃশ্য কয়েক চেষ্টা চায়।' } },
        { title: { en: '2. Feel the slope', bn: '২. ঢাল অনুভব করুন' }, text: { en: 'Compute the gradient (calculus does it; frameworks automate it).', bn: 'Gradient গণনা করুন (ক্যালকুলাস করে; ফ্রেমওয়ার্ক স্বয়ং করে)।' } },
        { title: { en: '3. Step downhill', bn: '৩. উতরাই-ধাপ নিন' }, text: { en: 'w −= LR × gradient. Repeat hundreds–millions of times.', bn: 'w −= LR × gradient। শত–কোটি বার আবার।' } },
        { title: { en: '4. Watch the curve', bn: '৪. Curve দেখুন' }, text: { en: 'Loss falling smoothly? Keep going. Flat or spiking? Fix the LR first.', bn: 'Loss মসৃণ-পড়ছে? চালিয়ে যান। সমতল বা লাফ? আগে LR ঠিক করুন।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — LR 0.1 glides, LR 1.1 explodes', bn: 'INSIDE — LR ০.১ পিছলায়, ১.১ ফাটে' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit descends loss = (w−3)² from w=0 for 12 rounds, twice. LR 0.1: w glides 0 → 2.79, loss 9 → 0.04. LR 1.1: steps overshoot wider every round — w swings 0 → 6.6 → −1.32 → …, loss explodes. Same bowl, same code, one digit apart. Edit the LRs and feel the edge of stability.',
        bn: 'এই tryit loss = (w−৩)²-এ w=০ থেকে ১২ রাউন্ড নামে, দুবার। LR ০.১: w ০ → ২.৭৯ পিছলায়, loss ৯ → ০.০৫। LR ১.১: ধাপ প্রতি রাউন্ডে চওড়া-ডিঙায় — w ০ → ৬.৬ → −১.৩২ → … দোলে, loss ফাটে। একই বাটি, একই কোড, এক অঙ্ক-তফাত। LR বদলে স্থিতি-কিনারা অনুভব করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Two descents, one bowl (edit the LRs, press Run)', bn: 'দুই অবতরণ, এক বাটি (LR বদলে Run)' },
      html: '<h3>loss = (w − 3)² from w = 0</h3>\n<pre id="out"></pre>\n<p>Console narrates round 0, 5, and 11.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: 'const LR_GOOD = 0.1;  // ← try 0.01 (crawl) or 0.9 (brisk)\nconst LR_WILD = 1.1;  // ← try 1.0 (edge) or 0.5 (safe)\nconst loss = (w) => (w - 3) ** 2;\nconst grad = (w) => 2 * (w - 3);\nconst descend = (lr) => {\n  let w = 0;\n  const rows = [];\n  for (let i = 0; i <= 12; i++) {\n    rows.push({ i, w, l: loss(w) });\n    w = w - lr * grad(w);\n  }\n  return rows;\n};\nconst g = descend(LR_GOOD), d = descend(LR_WILD);\nlet r = "round | good w     loss   | wild w      loss\\n";\ng.forEach((row, k) => {\n  const f = (v) => (Math.abs(v) > 999 ? v.toExponential(1) : v.toFixed(2)).padStart(9);\n  r += String(row.i).padStart(5) + " |" + f(row.w) + f(row.l) + " |" + f(d[k].w) + f(d[k].l) + "\\n";\n});\ndocument.getElementById("out").textContent = r;\nconsole.log("good ends w=" + g[12].w.toFixed(2) + " loss=" + g[12].l.toFixed(3) + "; wild ends w=" + d[12].w.toFixed(1) + " loss=" + d[12].l.toFixed(0) + ". One digit apart.");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Downhill instincts', bn: 'RESULT — উতরাই-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Gradient = slope arrow; descent steps opposite it. Loss curves narrate every training run.', bn: 'Gradient = ঢাল-তীর; descent এর বিপরীতে ধাপ নেয়। Loss-curve প্রতি training-চালান বর্ণনা করে।' },
        { en: 'LR too small = crawl; too big = explode past the valley. Tune LR before anything else.', bn: 'LR ছোট = হামাগুড়ি; বড় = উপত্যকা-ডিঙিয়ে ফাটা। সবার আগে LR ঠিক করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Calculus is optional; slope is not', bn: 'DEBUG — ক্যালকুলাস ঐচ্ছিক; ঢাল নয়' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“I must master calculus first” (slope-intuition suffices)', bn: '“আগে ক্যালকুলাসে দক্ষ হতেই হবে” (ঢাল-বোধ যথেষ্ট)' },
      text: {
        en: 'Frameworks differentiate FOR you; your job is reading curves and tuning LR. Symptoms of calculus-gatekeeping: months of math, zero models trained. Cure: this lesson’s intuition + one real training run beats a semester of symbols.',
        bn: 'ফ্রেমওয়ার্ক আপনার-জন্য differentiate করে; আপনার কাজ curve-পড়া ও LR-ঠিক। ক্যালকুলাস-প্রহরার লক্ষণ: মাসের-গণিত, শূন্য train-মডেল। ওষুধ: এই পাঠের-বোধ + এক আসল training-চালান এক সেমিস্টার-চিহ্ন হারায়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'When stuck in a dip: momentum, restarts, schedules', bn: 'খাদে আটকে: momentum, restart, schedule' },
      text: {
        en: 'Shallow local dip? Momentum rolls through; restarts try new slopes; LR schedules (big early, small late) explore-then-settle. Symptoms: loss plateaus high while gradients stay large. Cure order: schedule → momentum/Adam → restart — architecture last.',
        bn: 'অগভীর স্থানীয়-খাদ? Momentum গড়িয়ে পার হয়; restart নতুন-ঢাল চেষ্টা করে; LR schedule (আগে বড়, পরে ছোট) অন্বেষণ-তারপর-থিতায়। লক্ষণ: gradient বড়-থাকতেও loss উঁচুতে থামে। ওষুধ-ক্রম: schedule → momentum/Adam → restart — স্থাপত্য শেষে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Descent at scale', bn: 'REAL WORLD — স্কেলে descent' },
    },
    {
      type: 'list',
      items: [
        { en: 'Neural nets train by mini-batch descent: noisy small-sample slopes, millions of steps, LR schedules.', bn: 'Neural net mini-batch descent-এ train হয়: noisy ছোট-নমুনা ঢাল, কোটি-ধাপ, LR schedule।' },
        { en: 'Adam adds per-weight adaptive LRs + momentum: the default that “just works” across most nets.', bn: 'Adam প্রতি-ওজন adaptive-LR + momentum যোগায়: বেশিরভাগ net-এ “চলেই”-যাওয়া default।' },
        { en: 'Fine-tuning LLMs = gentle descent with tiny LRs: new skills without erasing the old landscape.', bn: 'LLM fine-tuning = ক্ষুদ্র-LR-এ কোমল-descent: পুরনো-ভূদৃশ্য না-মুছে নতুন-দক্ষতা।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — ML Capstone', bn: 'পরবর্তী — এমএল ক্যাপস্টোন' },
    },
    {
      type: 'para',
      text: {
        en: 'Theory complete: fit, classify, split, vote, group, grade, descend. The capstone wires EVERYTHING into one honest pipeline — data to deployed decision — running end to end on your screen.',
        bn: 'তত্ত্ব সম্পূর্ণ: ফিট, শ্রেণিকরণ, ভাগ, ভোট, দল, গ্রেড, descent। Capstone সবকিছু এক সৎ-pipeline-এ তার করে — ডেটা থেকে চালু-সিদ্ধান্ত — স্ক্রিনে শুরু-শেষ চলে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Three gradient descent steps minimizing loss on the quadratic function f(w) = w².',
        bn: 'দ্বিঘাত ফাংশন f(w) = w² তে loss কমাতে gradient descent-এর ৩টি ধাপ।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'gradient_step.js',
      code: `let w = 4.0;
const lr = 0.1;
for (let step = 1; step <= 3; step++) {
  const grad = 2 * w;
  w -= lr * grad;
  console.log(\`Step \${step}: w = \${w.toFixed(2)}, loss = \${(w * w).toFixed(2)}\`);
}
// -> Step 1: w = 3.20, loss = 10.24
// -> Step 2: w = 2.56, loss = 6.55
// -> Step 3: w = 2.05, loss = 4.19`,
      caption: {
        en: 'After 3 steps with learning rate 0.1, the weight drops from 4.00 down to 2.05.',
        bn: '০.১ learning rate দিয়ে ৩ ধাপের পর ওজন ৪.০০ থেকে ২.০৫ এ নেমে আসে।',
      },
    },
  ],
  exercises: [
    {
      id: 'mtl-ex-1',
      kind: 'mcq',
      topic: 'gd-step',
      question: { en: 'w=0, loss=(w−3)², LR=0.1. First step lands…', bn: 'w=০, loss=(w−৩)², LR=০.১। প্রথম-ধাপ নামে…' },
      options: [
        { en: 'w=0.6 (downhill toward 3)', bn: 'w=০.৬ (৩-দিকে উতরাই)' },
        { en: 'w=−0.6 (away from 3)', bn: 'w=−০.৬ (৩ থেকে দূরে)' },
        { en: 'w=3.0 (direct jump)', bn: 'w=৩.০ (সরাসরি-লাফ)' },
        { en: 'w=0 (no move)', bn: 'w=০ (নড়ে না)' },
      ],
      answer: 0,
      hint: { en: 'grad = 2(w−3) = −6; w −= 0.1 × −6.', bn: 'grad = ২(w−৩) = −৬; w −= ০.১ × −৬।' },
      explanation: {
        en: 'Negative slope means “up is leftward” — descend rightward: 0 − 0.1×(−6) = 0.6. Every GD step is this one subtraction.',
        bn: 'ঋণাত্মক-ঢাল মানে “ওপর বামদিকে” — ডানদিকে নামুন: ০ − ০.১×(−৬) = ০.৬। প্রতি GD-ধাপ এই এক বিয়োগ।',
      },
    },
    {
      id: 'mtl-ex-2',
      kind: 'mcq',
      topic: 'lr-edge',
      question: { en: 'LR 1.1 explodes on this bowl. Core reason?', bn: 'এই বাটিতে LR ১.১ ফাটে। মূল-কারণ?' },
      options: [
        { en: 'Each step overshoots the bottom wider than it started', bn: 'প্রতি ধাপ শুরু-চেয়ে চওড়া-ডিঙিয়ে তলা পার হয়' },
        { en: 'The bowl has no bottom', bn: 'বাটির তলা নেই' },
        { en: 'Gradients point uphill', bn: 'Gradient উঁচু-দিকে দেখায়' },
        { en: 'Loss is negative', bn: 'Loss ঋণাত্মক' },
      ],
      answer: 0,
      hint: { en: '0 → 6.6 → −1.32 → … swings widen.', bn: '০ → ৬.৬ → −১.৩২ → … দোল চওড়ায়।' },
      explanation: {
        en: 'Step = 1.1 × slope overshoots to the far side, where the slope is STEEPER — next overshoot grows. |overshoot ratio| > 1 = geometric explosion. That is the whole stability theory.',
        bn: 'ধাপ = ১.১ × ঢাল দূর-পাশে ডিঙায়, যেখানে ঢাল আরো খাড়া — পরের ডিঙানো বাড়ে। |ডিঙানো-অনুপাত| > ১ = জ্যামিতিক-বিস্ফোরণ। এটাই পুরো স্থিতি-তত্ত্ব।',
      },
    },
    {
      id: 'mtl-ex-3',
      kind: 'mcq',
      topic: 'read-curve',
      question: { en: 'Loss flat-high from epoch 2, gradients large. First fix?', bn: 'Epoch ২ থেকে loss সমতল-উঁচু, gradient বড়। প্রথম-সমাধান?' },
      options: [
        { en: 'LR schedule / momentum — escape or roll through', bn: 'LR schedule / momentum — পালান বা গড়িয়ে পার' },
        { en: 'Delete the data', bn: 'ডেটা মুছুন' },
        { en: 'Shrink LR to ~0', bn: 'LR প্রায় ০ এর কাছে সংকোচুন' },
        { en: 'Train longer unchanged', bn: 'অপরিবর্তিত বেশি train' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip: schedule → momentum → restart.', bn: 'DEBUG tip: schedule → momentum → restart।' },
      explanation: {
        en: 'Large gradients + stuck loss = trapped in a dip or bouncing across a ravine: schedules and momentum are built for exactly this. More identical epochs just pay rent on the trap.',
        bn: 'বড়-gradient + আটকে-loss = খাদে-আটকা বা খাদ-পার লাফ: schedule-momentum ঠিক এজন্য বানানো। আরো অভিন্ন-epoch শুধু ফাঁদে ভাড়া দেয়।',
      },
    },
    {
      id: 'mtl-ex-4',
      kind: 'predict',
      topic: 'convex-why',
      question: { en: 'Linear regression’s MSE bowl is convex. State the practical payoff in one line.', bn: 'Linear regression-এর MSE-বাটি convex। ব্যবহারিক-লাভ এক লাইনে বলুন।' },
      answer: 'Any start + sane LR reaches THE global bottom — no restarts, no traps, initialization barely matters.',
      accept: ['global', 'bottom', 'any start', 'convex', 'one bottom', 'no trap'],
      hint: { en: 'Keyterms: convex.', bn: 'Keyterms: convex।' },
      explanation: {
        en: 'One bottom means descent cannot fail: wherever you stand, downhill leads home. That guarantee is why Lesson 1’s line “just fits” while deep nets need schedules, momentum, and luck.',
        bn: 'এক তলা মানে descent ব্যর্থ হতে পারে না: যেখানেই দাঁড়ান, উতরাই ঘরে নেয়। ওই নিশ্চয়তায় পাঠ ১ এর রেখা “চলেই”-ফিট হয়, আর deep net-এ schedule, momentum, ভাগ্য লাগে।',
      },
    },
  ],
  quiz: {
    id: 'math-of-learning-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'mtlq1',
        kind: 'mcq',
        topic: 'gradient-mean',
        question: { en: 'Gradient at your position reads −6. Meaning?', bn: 'আপনার অবস্থানে gradient −৬। অর্থ?' },
        options: [
          { en: 'Loss falls rightward; step right (w −= LR×−6)', bn: 'Loss ডানদিকে পড়ে; ডানে ধাপ (w −= LR×−৬)' },
          { en: 'Loss falls leftward; step left', bn: 'Loss বামদিকে পড়ে; বামে ধাপ' },
          { en: 'You are at the bottom', bn: 'আপনি তলায়' },
          { en: 'LR must be −6', bn: 'LR −৬ হতেই হবে' },
        ],
        answer: 0,
        hint: { en: 'Descend the OPPOSITE of the gradient.', bn: 'Gradient-এর বিপরীতে নামুন।' },
        explanation: {
          en: 'Negative slope = uphill lies left, downhill right. w −= LR×(−6) steps right — the minus every beginner must feel in their bones.',
          bn: 'ঋণাত্মক-ঢাল = উঁচু বামে, উতরাই ডানে। w −= LR×(−৬) ডানে-ধাপ — প্রতি beginner-এর হাড়ে-অনুভব-করা মাইনাস-মাইনাস।',
        },
      },
      {
        id: 'mtlq2',
        kind: 'mcq',
        topic: 'spike-dx',
        question: { en: 'Loss suddenly spikes 10× mid-training. Diagnosis?', bn: 'Training-মাঝে loss হঠাৎ ১০× লাফায়। রোগনির্ণয়?' },
        options: [
          { en: 'LR too big (or bad batch) — overshooting', bn: 'LR বড় (বা খারাপ-batch) — ডিঙানো' },
          { en: 'Model finished learning', bn: 'মডেল শেখা শেষ' },
          { en: 'Test set leaked', bn: 'Test set ফাঁস' },
          { en: 'Gradients reached zero', bn: 'Gradient শূন্যে' },
        ],
        answer: 0,
        hint: { en: 'WHY dashboard.', bn: 'WHY ড্যাশবোর্ড।' },
        explanation: {
          en: 'Smooth-fall-then-spike is the overshoot signature: steps too large for local curvature (or one poisoned batch). Cut LR, clip gradients, resume from checkpoint.',
          bn: 'মসৃণ-পতন-তারপর-লাফ ডিঙানোর-স্বাক্ষর: স্থানীয়-বক্রতায় ধাপ বড় (বা এক বিষ-batch)। LR কাটুন, gradient clip করুন, checkpoint থেকে আবার।',
        },
      },
      {
        id: 'mtlq3',
        kind: 'mcq',
        topic: 'calculus-role',
        question: { en: 'Frameworks auto-differentiate. Your remaining job?', bn: 'ফ্রেমওয়ার্ক স্বয়ং-differentiate করে। আপনার বাকি-কাজ?' },
        options: [
          { en: 'Read curves, tune LR, design the setup', bn: 'Curve পড়ুন, LR ঠিক করুন, setup সাজান' },
          { en: 'Differentiate by hand anyway', bn: 'তবু হাতে differentiate' },
          { en: 'Avoid all math forever', bn: 'চিরকাল সব-গণিত এড়ান' },
          { en: 'Only use convex models', bn: 'শুধু convex মডেল' },
        ],
        answer: 0,
        hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
        explanation: {
          en: 'Automation moved the skill upstairs: slope-intuition, curve-reading, LR/schedule judgment. Hand-derivatives are homework; these are the profession.',
          bn: 'স্বয়ংক্রিয়তা দক্ষতা ওপরে তুলেছে: ঢাল-বোধ, curve-পড়া, LR/schedule-বিচার। হাতে-অন্তরক হোমওয়ার্ক; এগুলো পেশা।',
        },
      },
      {
        id: 'mtlq4',
        kind: 'predict',
        topic: 'schedule-why',
        question: { en: '“Big LR early, small LR late” — justify the schedule in one line.', bn: '“আগে বড়-LR, পরে ছোট-LR” — এক লাইনে schedule-যুক্তি দিন।' },
        answer: 'Big steps explore past dips early; small steps settle into the bottom without overshooting late.',
        accept: ['explore', 'settle', 'early', 'late', 'overshoot', 'dip'],
        hint: { en: 'Explore-then-settle.', bn: 'অন্বেষণ-তারপর-থিতানো।' },
        explanation: {
          en: 'Early: energy to cross dips and ravines. Late: precision to land softly. Fixed LR forces one compromise; schedules get both seasons.',
          bn: 'আগে: খাদ-খাত পার হওয়ার শক্তি। পরে: ডিঙানো-ছাড়া কোমল-অবতরণ। Fixed-LR এক আপস বাধ্য করে; schedule দুই ঋতুই পায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'ml-capstone',
    title: { en: 'ML Capstone: Honest Pipeline', bn: 'ML Capstone: সৎ পাইপলাইন' },
  },
};