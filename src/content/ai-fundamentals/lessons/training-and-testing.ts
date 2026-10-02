import type { Lesson } from '../../../lib/types';

export const TrainingAndTestingLesson: Lesson = {
  slug: 'training-and-testing',
  tech: 'ai-fundamentals',
  title: {
    en: 'Training and Testing',
    bn: 'Training এক loop-এর লাখো পুনরাবৃত্তি: অনুমান, ভুল-মাপা (loss), সংখ্যা'
  },
  summary: {
    en: 'Training is one loop repeated millions of times: guess, measure the miss (loss), nudge the numbers downhill (gradient descent). Testing is the honest exam on locked data that catches cheating and overfitting. You will watch a model’s loss fall live — then learn to read the curves professionals stare at daily.',
    bn: 'Training এক loop-এর লাখো পুনরাবৃত্তি: অনুমান, ভুল-মাপা (loss), সংখ্যা নিচের দিকে ঠেলা (gradient descent)। Testing তালা-ডেটায় সৎ পরীক্ষা, যা প্রতারণা আর overfitting ধরে। মডেলের loss live কমতে দেখবেন — তারপর professional-রা রোজ যে curve দেখে, সেটা পড়তে শিখবেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Guess, measure, nudge, repeat', bn: 'WHAT — অনুমান, মাপো, ঠেলো, আবার' },
    },
    {
      type: 'para',
      text: {
        en: 'Training runs four steps on a loop. First, the model guesses on training rows. Second, loss measures the average error. Third, gradient descent nudges every weight down the slope by a small learning rate. Fourth, you repeat across epochs until loss stops falling. Picture descending a foggy hill: you cannot see the bottom, but you feel the slope under your feet and follow it down.',
        bn: 'Training চারটি ধাপে লুপে চলে। প্রথমে, মডেল training সারিতে অনুমান করে। দ্বিতীয়ত, loss গড় ভুলের পরিমাণ মাপে। তৃতীয়ত, gradient descent একটি ছোট learning rate ধরে প্রতিটি ওজনকে ঢাল বরাবর ঠেলে দেয়। চতুর্থত, loss কমা থামা পর্যন্ত epoch ধরে এই প্রক্রিয়া চলে। কুয়াশাচ্ছন্ন পাহাড় থেকে নামার কথা ভাবুন: নিচের অংশ দেখা না গেলেও পায়ের নিচে ঢাল বোঝা যায়, আর সেই ঢাল ধরে নামতে হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Gradient descent: follow the slope to low loss', bn: 'Gradient descent: ঢাল ধরে কম-loss-এ' },
      svg: `<svg viewBox="0 0 640 260" font-family="system-ui, sans-serif" role="img" aria-label="Loss valley with descending steps from high loss to the minimum">
<path d="M20,45 C140,45 175,195 320,195 C465,195 500,45 620,45" fill="none" stroke="#4f46e5" stroke-width="3"/>
<text x="30" y="35" font-size="13" fill="currentColor" opacity="0.8">high loss ↑</text>
<text x="270" y="235" font-size="13" fill="currentColor" opacity="0.8">low loss — the bottom ✓</text>
<circle cx="120" cy="105" r="11" fill="#dc2626" opacity="0.85"/>
<text x="120" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">start</text>
<circle cx="205" cy="165" r="11" fill="#f59e0b" opacity="0.9"/>
<text x="205" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">step 5</text>
<circle cx="280" cy="192" r="11" fill="#f59e0b" opacity="0.9"/>
<text x="280" y="219" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">step 20</text>
<circle cx="320" cy="195" r="11" fill="#16a34a"/>
<text x="365" y="215" font-size="12" font-weight="700" fill="currentColor">converged ✓</text>
<text x="420" y="120" font-size="13" fill="currentColor">each step = one nudge</text>
<text x="420" y="140" font-size="13" fill="currentColor">sized by the learning rate</text>
<text x="420" y="165" font-size="13" font-weight="600" fill="currentColor">too big → jumps over;</text>
<text x="420" y="185" font-size="13" font-weight="600" fill="currentColor">too small → crawls forever</text>
</svg>`,
      caption: {
        en: 'Loss is terrain; training walks downhill. The learning rate is step size — the most-tuned knob in ML.',
        bn: 'Loss ভূখণ্ড; training নিচে হাঁটে। Learning rate ধাপের মাপ — ML-এ সবচেয়ে ঠিক-করা নব।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Loss', def: { en: 'One number: how wrong the model is on average. Training minimizes it.', bn: 'এক সংখ্যা: মডেল গড়ে কত ভুল। Training এটা কমায়।' } },
        { term: 'Gradient descent', def: { en: 'Repeated downhill steps on the loss terrain by following the slope.', bn: 'ঢাল ধরে loss-ভূখণ্ডে বারবার নিচের ধাপ।' } },
        { term: 'Learning rate', def: { en: 'Step size per nudge. Too big overshoots; too small crawls.', bn: 'প্রতি ঠেলার মাপ। বড় হলে পার হয়ে যায়; ছোট হলে হামাগুড়ি।' } },
        { term: 'Epoch', def: { en: 'One full pass over all training rows. Training runs many epochs.', bn: 'সব training-সারিতে এক পূর্ণ চক্কর। Training অনেক epoch চলে।' } },
        { term: 'Overfitting', def: { en: 'Loss falls on training rows but rises on test rows: memorization, not learning.', bn: 'Training-সারিতে loss কমে, test-এ বাড়ে: মুখস্থ, শেখা নয়।' } },
        { term: 'Accuracy', def: { en: 'Share of test rows guessed right. Report it ONLY from the locked test set.', bn: 'Test-সারির সঠিক-অনুমান ভাগ। শুধু তালা-test থেকেই জানাবেন।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — This loop trains everything', bn: 'WHY — এই loop সব train করে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Spam filters, translators, chatbots, self-driving nets: different models, THE SAME loop. Learn it once, recognize it forever.', bn: 'স্প্যাম ফিল্টার, অনুবাদক, চ্যাটবট, self-driving net: আলাদা মডেল, একই loop। একবার শিখুন, চিরকাল চিনবেন।' },
        { en: 'The learning rate is where beginners bleed: too big diverges (loss explodes), too small wastes days. Start 0.01–0.1 for toy problems, watch the curve.', bn: 'Learning rate-এ beginner রক্ত ঝরায়: বড় হলে diverge (loss বিস্ফোরণ), ছোট হলে দিন নষ্ট। খেলনা-সমস্যায় ০.০১–০.১ থেকে শুরু, curve দেখুন।' },
        { en: 'Testing discipline is what separates demos from products: the locked test set (L3) is the ONLY score that counts.', bn: 'Testing-শৃঙ্খলাই demo আর product আলাদা করে: তালা-test set-ই (পাঠ ৩) একমাত্র গণ্য স্কোর।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — One training step, concretely', bn: 'HOW — এক training-ধাপ, concretely' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Guess', bn: '১. অনুমান' }, text: { en: 'Current weights predict every training row. First guesses are garbage — expected.', bn: 'বর্তমান ওজন প্রতি training-সারিতে predict করে। প্রথম অনুমান আবর্জনা — স্বাভাবিক।' } },
        { title: { en: '2. Measure loss', bn: '২. loss মাপো' }, text: { en: 'Average the misses into one number. This number is the only compass.', bn: 'ভুল গড়ে এক সংখ্যা। এই সংখ্যাই একমাত্র কম্পাস।' } },
        { title: { en: '3. Nudge downhill', bn: '৩. নিচে ঠেলো' }, text: { en: 'Compute the slope per weight; step each weight against its slope × learning rate.', bn: 'প্রতি ওজনে ঢাল হিসাব; ওজনকে ঢালের বিপরীতে × learning rate ধাপ।' } },
        { title: { en: '4. Epoch and check', bn: '৪. Epoch আর যাচাই' }, text: { en: 'After each full pass, record train loss AND locked-test loss. Stop when test loss rises.', bn: 'প্রতি পূর্ণ চক্করে train loss আর তালা-test loss লেখো। Test loss বাড়লে থামো।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Watch loss fall, live', bn: 'INSIDE — loss কমতে দেখুন, live' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit trains the lesson-3 house line from scratch: slope starts at 0 (clueless), then 500 downhill nudges fit it to the dots. Run it — the console prints loss collapsing, and the canvas draws the line the machine FOUND. Change LR to 1.5 and watch it explode: the too-big lesson, free.',
        bn: 'এই tryit পাঠ-৩-এর বাড়ি-রেখা শূন্য থেকে train করে: ঢাল ০ থেকে (অজ্ঞ), তারপর ৫০০ নিচের-ঠেলায় বিন্দুতে বসে। চালান — console-এ loss ধসে পড়া ছাপে, canvas-এ মেশিনের পাওয়া রেখা আঁকে। LR ১.৫ করে বিস্ফোরণ দেখুন: বেশি-বড় শিক্ষা, ফ্রি।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Gradient descent fitting a line (try LR 0.1, then 1.5)', bn: 'Gradient descent-এ রেখা-বসানো (LR ০.১, তারপর ১.৫ দিন)' },
      html: '<h3>Training a line, live</h3>\n<canvas id="c" width="380" height="250"></canvas>\n<p id="out"></p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\ncanvas { border: 1px solid #c7d2fe; border-radius: 8px; background: #eef2ff; }\n#out { font-weight: bold; color: #4338ca; }',
      js: '// Normalized house dots: [size0-1, price0-1]\nconst D = [[.08,.13],[.21,.22],[.33,.31],[.42,.39],[.54,.50],[.75,.78],[.88,.87]];\nconst LR = 0.1; // ← learning rate: try 1.5!\nlet m = 0; // slope starts clueless\nconst loss = () => D.reduce((s,[x,y]) => s + (m*x - y)**2, 0) / D.length;\n\nconsole.log("start: slope =", m.toFixed(3), "loss =", loss().toFixed(4));\nfor (let i = 1; i <= 500; i++) {\n  const grad = D.reduce((s,[x,y]) => s + 2*x*(m*x - y), 0) / D.length;\n  m = m - LR * grad; // the downhill nudge\n  if (i % 100 === 0) console.log("step " + i + ": slope =", m.toFixed(3), "loss =", loss().toFixed(4));\n}\nconst c = document.getElementById("c").getContext("2d");\nc.fillStyle = "#4f46e5";\nD.forEach(([x,y]) => { c.beginPath(); c.arc(20+x*340, 230-y*200, 5, 0, 7); c.fill(); });\nc.strokeStyle = "#16a34a"; c.lineWidth = 3; c.beginPath();\nc.moveTo(20, 230); c.lineTo(360, 230 - m*200); c.stroke();\ndocument.getElementById("out").textContent =\n  "Learned slope: " + m.toFixed(3) + " · final loss: " + loss().toFixed(4);\nconsole.log("done: the machine FOUND this line by walking downhill");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Read curves like a practitioner', bn: 'RESULT — practitioner-এর মতো curve পড়ুন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Both curves falling → learning. Train falling + test rising → overfitting: stop, simplify, or get data.', bn: 'দুটো curve কমছে → শেখা। Train কমে + test বাড়ে → overfitting: থামো, সরল করো, বা ডেটা আনো।' },
        { en: 'Loss exploding to NaN → learning rate too big. Loss frozen → rate too small or bug.', bn: 'Loss ফেটে NaN → learning rate বড়। Loss জমাট → rate ছোট বা বাগ।' },
        { en: 'Report exactly one number: locked-test accuracy. Everything else is a diary, not a grade.', bn: 'ঠিক এক সংখ্যা জানান: তালা-test accuracy। বাকি সব ডায়েরি, গ্রেড নয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Underfit vs overfit, and the LR trap', bn: 'DEBUG — Underfit বনাম overfit, আর LR-ফাঁদ' },
    },
    {
      type: 'compare',
      title: { en: 'Two failures, opposite cures', bn: 'দুই ব্যর্থতা, বিপরীত ওষুধ' },
      left: {
        title: { en: 'Underfitting (too simple)', bn: 'Underfitting (খুব সরল)' },
        points: [
          { en: 'Train AND test loss both high: the model cannot even memorize.', bn: 'Train আর test loss দুটোই বেশি: মডেল মুখস্থও পারে না।' },
          { en: 'Cure: bigger model, better features, train longer.', bn: 'ওষুধ: বড় মডেল, ভালো feature, বেশি train।' },
        ],
      },
      right: {
        title: { en: 'Overfitting (too bendy)', bn: 'Overfitting (খুব নমনীয়)' },
        points: [
          { en: 'Train loss tiny, test loss high: memorized rows, learned noise.', bn: 'Train loss ক্ষুদ্র, test loss বেশি: সারি মুখস্থ, noise শেখা।' },
          { en: 'Cure: stop early, simplify, regularize, or add data.', bn: 'ওষুধ: আগেই থামো, সরল করো, regularize করো, বা ডেটা যোগ করো।' },
        ],
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Scale of the same loop', bn: 'REAL WORLD — একই loop-এর স্কেল' },
    },
    {
      type: 'list',
      items: [
        { en: 'Your tryit: 1 weight, 500 steps, milliseconds. A production chatbot: billions of weights, months on thousands of GPUs — same loop.', bn: 'আপনার tryit: ১ ওজন, ৫০০ ধাপ, মিলিসেকেন্ড। Production চ্যাটবট: কোটি ওজন, হাজার GPU-তে মাস — একই loop।' },
        { en: '“Validation curve” meetings are daily life in ML teams: practitioners argue over exactly the shapes you just learned.', bn: '“Validation curve” মিটিং ML-দলে নিত্যদিন: practitioner-রা ঠিক এই আকৃতি নিয়ে তর্ক করে, যা শিখলেন।' },
        { en: 'Early stopping (halt when test loss rises) is the cheapest overfitting cure ever found — no math required.', bn: 'Early stopping (test loss বাড়লে থামো) সবচেয়ে সস্তা overfitting-ওষুধ — গণিত লাগে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Networks and deep learning', bn: 'পরবর্তী — নেটওয়ার্ক ও ডিপ লার্নিং' },
    },
    {
      type: 'para',
      text: {
        en: 'You can train one neuron’s weights. Lesson 6 stacks neurons into layers — crossing the XOR wall from lesson 4 — and shows why depth learns hierarchies: edges → shapes → faces. Then a real neural net runs in your browser.',
        bn: 'এক নিউরনের ওজন train করতে পারেন। পাঠ ৬ নিউরন স্তরে সাজায় — পাঠ ৪ এর XOR-দেয়াল পেরিয়ে — আর দেখায় গভীরতা কেন hierarchy শেখে: কিনারা → আকৃতি → মুখ। তারপর আসল neural net ব্রাউজারে চলে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Five epochs of gradient descent optimizing a single weight to fit a line.',
        bn: 'একটি রেখা মেলাতে একক ওজনকে অপটিমাইজ করে gradient descent-এর ৫টি ধাপ।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'descent.js',
      code: `let w = 0.0;
const lr = 0.05;
const xs = [1, 2, 3, 4], ys = [2, 4, 6, 8]; // true w = 2
for (let epoch = 1; epoch <= 5; epoch++) {
  let grad = 0, loss = 0;
  for (let i = 0; i < xs.length; i++) {
    const pred = w * xs[i];
    const err = pred - ys[i];
    loss += err * err;
    grad += 2 * err * xs[i];
  }
  w -= lr * (grad / xs.length);
  if (epoch === 1 || epoch === 5) {
    console.log(\`Epoch \${epoch}: w = \${w.toFixed(2)}, loss = \${(loss / 4).toFixed(2)}\`);
  }
}
// -> Epoch 1: w = 1.50, loss = 30.00
// -> Epoch 5: w = 2.00, loss = 0.00`,
      caption: {
        en: 'By epoch 5 the weight converges to 2.00 and loss reaches 0.00.',
        bn: '৫ম ধাপে এসে ওজন ২.০০ এ পৌঁছায় এবং loss ০.০০ হয়ে যায়।',
      },
    },
  ],
  exercises: [
    {
      id: 'tnt-ex-1',
      kind: 'mcq',
      topic: 'loop-order',
      question: { en: 'Correct training-loop order?', bn: 'সঠিক training-loop ক্রম?' },
      options: [
        { en: 'Guess → loss → downhill nudge → repeat', bn: 'অনুমান → loss → নিচের-ঠেলা → আবার' },
        { en: 'Nudge → guess → loss → stop forever', bn: 'ঠেলা → অনুমান → loss → চিরতরে থামো' },
        { en: 'Loss → test → guess → publish', bn: 'Loss → test → অনুমান → প্রকাশ' },
        { en: 'Repeat → repeat → hope', bn: 'আবার → আবার → আশা' },
      ],
      answer: 0,
      hint: { en: 'WHAT section, four numbered steps.', bn: 'WHAT অংশ, চার সংখ্যা-ধাপ।' },
      explanation: {
        en: 'Guess on training rows, measure loss, nudge weights downhill, repeat for epochs. Testing happens separately, on locked data.',
        bn: 'Training-সারিতে অনুমান, loss মাপো, ওজন নিচে ঠেলো, epoch ধরে চালাও। Testing আলাদা, তালা-ডেটায়।',
      },
    },
    {
      id: 'tnt-ex-2',
      kind: 'mcq',
      topic: 'lr-big',
      question: { en: 'Loss explodes to Infinity within 10 steps. Most likely cause?', bn: '১০ ধাপে loss ফেটে Infinity। সম্ভাব্য কারণ?' },
      options: [
        { en: 'Learning rate far too big — jumps over the valley', bn: 'Learning rate অনেক বড় — উপত্যকা পার হয়ে লাফ' },
        { en: 'Too much training data', bn: 'বেশি training data' },
        { en: 'Test set too small', bn: 'Test set খুব ছোট' },
        { en: 'Model too accurate', bn: 'মডেল খুব নির্ভুল' },
      ],
      answer: 0,
      hint: { en: 'The tryit invites you to cause this with LR 1.5.', bn: 'Tryit LR ১.৫ দিয়ে এটা ঘটাতে ডাকে।' },
      explanation: {
        en: 'Oversized steps bounce across the valley with growing energy and diverge. Fix: shrink LR 10× and retry — the oldest debugging move in ML.',
        bn: 'বড় ধাপ বাড়তে-থাকা শক্তিতে উপত্যকা পেরিয়ে লাফায়, diverge করে। ফিক্স: LR ১০× ছোট করে আবার — ML-এর প্রাচীনতম debugging-চাল।',
      },
    },
    {
      id: 'tnt-ex-3',
      kind: 'mcq',
      topic: 'overfit-read',
      question: { en: 'Epoch 10: train 92%, test 90%. Epoch 100: train 99.9%, test 81%. Verdict?', bn: 'Epoch ১০: train ৯২%, test ৯০%। Epoch ১০০: train ৯৯.৯%, test ৮১%। রায়?' },
      options: [
        { en: 'Overfitting after ~10 — should have stopped early', bn: '~১০ এর পর overfitting — আগেই থামা উচিত ছিল' },
        { en: 'Underfitting — train 10× longer', bn: 'Underfitting — ১০× বেশি train করো' },
        { en: 'Perfect training — deploy epoch 100', bn: 'নিখুঁত training — epoch ১০০ চালু করো' },
        { en: 'Test set is broken', bn: 'Test set ভাঙা' },
      ],
      answer: 0,
      hint: { en: 'Train rises, test falls = memorization.', bn: 'Train বাড়ে, test কমে = মুখস্থ।' },
      explanation: {
        en: 'The gap opened after epoch ~10: the model traded patterns for memorized rows. Early stopping at the test peak (≈90%) was the free cure.',
        bn: '~১০ epoch-এর পর ফাঁক খুলেছে: মডেল প্যাটার্নের বদলে সারি মুখস্থ করেছে। Test-শিখরে (≈৯০%) early stopping-ই ফ্রি ওষুধ ছিল।',
      },
    },
    {
      id: 'tnt-ex-4',
      kind: 'predict',
      topic: 'report-score',
      question: { en: 'Your model: train 97%, validation 94%, locked test 93%. A teammate says “report 97%, our best number.” Write your one-line refusal with the rule.', bn: 'আপনার মডেল: train ৯৭%, validation ৯৪%, তালা-test ৯৩%। সতীর্থ বলে “৯৭% জানাও, সেরা সংখ্যা।” নিয়মসহ এক-লাইন প্রত্যাখ্যান লিখুন।' },
      answer: 'Report 93%: only the locked test score counts; train/validation numbers are diaries tuned during development.',
      accept: ['93', 'locked', 'test', 'only'],
      hint: { en: 'RESULT’s last bullet.', bn: 'RESULT-এর শেষ বুলেট।' },
      explanation: {
        en: 'Train and validation scores were watched during tuning (you chose settings that please them). Only the untouched test set grades honestly: 93%.',
        bn: 'Tuning-এ train/validation স্কোর দেখা হয়েছে (যা খুশি করে সেটাই বাছা)। শুধু অস্পর্শ test set সৎ মূল্যায়ন দেয়: ৯৩%।',
      },
    },
  ],
  quiz: {
    id: 'training-and-testing-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'tntq1',
        kind: 'mcq',
        topic: 'epoch',
        question: { en: 'What is one epoch?', bn: 'এক epoch কী?' },
        options: [
          { en: 'One full pass over all training rows', bn: 'সব training-সারিতে এক পূর্ণ চক্কর' },
          { en: 'One weight update', bn: 'এক ওজন-হালনাগাদ' },
          { en: 'Testing once', bn: 'একবার testing' },
          { en: 'One year of research', bn: 'এক বছর গবেষণা' },
        ],
        answer: 0,
        hint: { en: 'Keyterms.', bn: 'Keyterms।' },
        explanation: {
          en: 'Epoch = the whole dataset seen once. Big models train for tens to hundreds of epochs.',
          bn: 'Epoch = পুরো dataset একবার দেখা। বড় মডেল দশ থেকে শত epoch train করে।',
        },
      },
      {
        id: 'tntq2',
        kind: 'mcq',
        topic: 'loss-meaning',
        question: { en: 'Training loss falls from 2.1 to 0.02. Certain conclusion?', bn: 'Training loss ২.১ থেকে ০.০২-এ নামে। নিশ্চিত সিদ্ধান্ত?' },
        options: [
          { en: 'The model fits training rows very well (test score still unknown)', bn: 'মডেল training-সারিতে দারুণ বসে (test স্কোর এখনো অজানা)' },
          { en: 'The model will ace unseen data', bn: 'মডেল অদেখা ডেটায় ছক্কা মারবে' },
          { en: 'No overfitting is possible now', bn: 'এখন overfitting অসম্ভব' },
          { en: 'Learning rate was perfect', bn: 'Learning rate নিখুঁত ছিল' },
        ],
        answer: 0,
        hint: { en: 'Train loss talks about train rows only.', bn: 'Train loss শুধু train-সারির কথা বলে।' },
        explanation: {
          en: '0.02 may be brilliant learning or brilliant memorization — only the locked test set distinguishes them. Never conclude from train loss alone.',
          bn: '০.০২ দারুণ শেখা বা দারুণ মুখস্থ — শুধু তালা-test set আলাদা করে। Train loss দেখে একা কখনো সিদ্ধান্ত নয়।',
        },
      },
      {
        id: 'tntq3',
        kind: 'mcq',
        topic: 'underfit-cure',
        question: { en: 'Train 60%, test 59%, both stuck. Best next move?', bn: 'Train ৬০%, test ৫৯%, দুটোই আটকে। সেরা পরের চাল?' },
        options: [
          { en: 'Bigger model / better features / train longer (underfitting)', bn: 'বড় মডেল / ভালো feature / বেশি train (underfitting)' },
          { en: 'Stop early', bn: 'আগেই থামো' },
          { en: 'Shrink the model', bn: 'মডেল ছোট করো' },
          { en: 'Delete the test set', bn: 'Test set মুছে দাও' },
        ],
        answer: 0,
        hint: { en: 'Both low = cannot even memorize.', bn: 'দুটোই কম = মুখস্থও পারে না।' },
        explanation: {
          en: 'Both-stuck-low is underfitting: capacity or features are lacking. Early stopping cures the OPPOSITE disease.',
          bn: 'দুটো-আটকে-কম underfitting: capacity বা feature কম। Early stopping বিপরীত রোগের ওষুধ।',
        },
      },
      {
        id: 'tntq4',
        kind: 'predict',
        topic: 'curve-plan',
        question: { en: 'Plan a 50-epoch run in one line: what do you record each epoch, and what stop rule?', bn: '৫০-epoch চালানোর পরিকল্পনা এক লাইনে: প্রতি epoch-এ কী লিখবেন, থামার নিয়ম কী?' },
        answer: 'Record train loss and locked-test/validation loss each epoch; stop (keep best) when test loss starts rising.',
        accept: ['train', 'test', 'loss', 'epoch', 'stop', 'rising'],
        hint: { en: 'HOW step 4.', bn: 'HOW ধাপ ৪।' },
        explanation: {
          en: 'Two curves every epoch, stop at the test-loss minimum (early stopping). The “keep best” part matters: restore the weights from the best epoch.',
          bn: 'প্রতি epoch-এ দুই curve, test-loss-সর্বনিম্নে থামো (early stopping)। “সেরাটা রাখো” জরুরি: সেরা epoch-এর ওজন ফিরিয়ে আনো।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'networks-and-deep-learning',
    title: { en: 'Networks and Deep Learning', bn: 'Network আর Deep Learning' },
  },
};