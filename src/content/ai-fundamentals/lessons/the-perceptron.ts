import type { Lesson } from '../../../lib/types';

export const ThePerceptronLesson: Lesson = {
  slug: 'the-perceptron',
  tech: 'ai-fundamentals',
  title: {
    en: 'Perceptron — One neuron that votes with weights, multiply each input by',
    bn: 'ওজন-ভোটে সিদ্ধান্ত নেওয়া এক নিউরন: প্রতি ইনপুটকে গুরুত্ব দিয়ে গুণ'
  },
  summary: {
    en: 'One neuron that votes with weights: multiply each input by its importance, add them up, fire if the total passes a threshold. You will run a perceptron by hand on paper, then run one in code — and learn its famous limit (XOR), the exact reason deep networks had to be invented.',
    bn: 'ওজন-ভোটে সিদ্ধান্ত নেওয়া এক নিউরন: প্রতি ইনপুটকে গুরুত্ব দিয়ে গুণ করো, যোগ করো, মোট threshold পার হলে fire করো। কাগজে হাতে perceptron চালাবেন, তারপর কোডে — আর জানবেন এর বিখ্যাত সীমা (XOR), ঠিক যে কারণে deep network আবিষ্কার করতে হয়েছিল।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — A weighted vote that learns', bn: 'WHAT — ওজন-ভোট, যা শেখে' },
    },
    {
      type: 'para',
      text: {
        en: 'Frank Rosenblatt’s perceptron (1958) decides like a committee: each input gets a weight (how much it matters), the neuron adds weight × input for all inputs, and outputs 1 if the sum reaches a threshold, else 0. “Should I run?” = 0.6×sunny + 0.7×free-time ≥ 1.0? Sunny (1) but busy (0): 0.6 < 1.0 → stay home. Sunny AND free: 1.3 ≥ 1.0 → run. Learning = finding weights that vote right.',
        bn: 'Rosenblatt-এর perceptron (১৯৫৮) কমিটির মতো সিদ্ধান্ত নেয়: প্রতি ইনপুটে ওজন (কতটা জরুরি), নিউরন সব ইনপুটে ওজন × ইনপুট যোগ করে, যোগফল threshold-এ পৌঁছালে ১, নইলে ০। “দৌড়াব?” = ০.৬×রোদ + ০.৭×অবসর ≥ ১.০? রোদ (১) কিন্তু ব্যস্ত (০): ০.৬ < ১.০ → বাসায় থাকো। রোদ আর অবসর: ১.৩ ≥ ১.০ → দৌড়াও। শেখা = সঠিক-ভোটের ওজন খুঁজে পাওয়া।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'One perceptron, end to end', bn: 'এক perceptron, শুরু থেকে শেষ' },
      svg: `<svg viewBox="0 0 640 300" font-family="system-ui, sans-serif" role="img" aria-label="Perceptron: three inputs with weights feed a sum unit with a threshold, producing output y">
<circle cx="80" cy="60" r="26" fill="#4f46e5" opacity="0.14" stroke="#4f46e5" stroke-width="2"/>
<circle cx="80" cy="150" r="26" fill="#4f46e5" opacity="0.14" stroke="#4f46e5" stroke-width="2"/>
<circle cx="80" cy="240" r="26" fill="#4f46e5" opacity="0.14" stroke="#4f46e5" stroke-width="2"/>
<text x="80" y="55" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">x1</text>
<text x="80" y="72" text-anchor="middle" font-size="12" fill="currentColor">= 1</text>
<text x="80" y="145" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">x2</text>
<text x="80" y="162" text-anchor="middle" font-size="12" fill="currentColor">= 0</text>
<text x="80" y="235" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">x3</text>
<text x="80" y="252" text-anchor="middle" font-size="12" fill="currentColor">= 1</text>
<line x1="104" y1="70" x2="298" y2="132" stroke="#4f46e5" stroke-width="2"/>
<line x1="106" y1="150" x2="298" y2="150" stroke="#4f46e5" stroke-width="2"/>
<line x1="104" y1="230" x2="298" y2="168" stroke="#4f46e5" stroke-width="2"/>
<text x="185" y="92" font-size="13" font-weight="600" fill="currentColor">w1 = 0.6</text>
<text x="185" y="142" font-size="13" font-weight="600" fill="currentColor">w2 = 0.7</text>
<text x="185" y="205" font-size="13" font-weight="600" fill="currentColor">w3 = 0.4</text>
<circle cx="330" cy="150" r="32" fill="#4f46e5" opacity="0.22" stroke="#4f46e5" stroke-width="2"/>
<text x="330" y="145" text-anchor="middle" font-size="18" font-weight="800" fill="currentColor">Σ</text>
<text x="330" y="163" text-anchor="middle" font-size="11" fill="currentColor">sum + threshold</text>
<text x="330" y="205" text-anchor="middle" font-size="13" fill="currentColor">0.6 + 0 + 0.4 = 1.0</text>
<line x1="362" y1="150" x2="466" y2="150" stroke="#16a34a" stroke-width="3"/>
<polygon points="466,150 454,143 454,157" fill="#16a34a"/>
<circle cx="500" cy="150" r="30" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="500" y="146" text-anchor="middle" font-size="15" font-weight="800" fill="currentColor">y = 1</text>
<text x="500" y="163" text-anchor="middle" font-size="11" fill="currentColor">FIRES ✓</text>
<text x="500" y="205" text-anchor="middle" font-size="13" fill="currentColor">1.0 ≥ 1.0 threshold</text>
<text x="80" y="290" font-size="13" fill="currentColor" opacity="0.8">Inputs × weights → sum → threshold → decision. Learning adjusts the weights.</text>
</svg>`,
      caption: {
        en: 'The whole machine: weighted sum, then a threshold. Change the weights and the same neuron votes differently.',
        bn: 'পুরো যন্ত্র: ওজন-যোগফল, তারপর threshold। ওজন বদলালে একই নিউরন আলাদা ভোট দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Perceptron', def: { en: 'The 1958 single neuron: weighted sum + threshold = 0/1 decision.', bn: '১৯৫৮ সালের এক নিউরন: ওজন-যোগ + threshold = ০/১ সিদ্ধান্ত।' } },
        { term: 'Weight', def: { en: 'How much one input matters. Learning = tuning weights.', bn: 'এক ইনপুট কতটা জরুরি। শেখা = ওজন ঠিক করা।' } },
        { term: 'Threshold', def: { en: 'The bar the sum must reach for output 1 (often folded into a “bias”).', bn: 'আউটপুট ১ এর জন্য যোগফলের পার-হওয়া দাগ (“bias”-এ মোড়ানো থাকে)।' } },
        { term: 'Activation', def: { en: 'The fire/don’t-fire rule at the end (step, sigmoid, ReLU…).', bn: 'শেষের fire/না-fire নিয়ম (step, sigmoid, ReLU…)।' } },
        { term: 'XOR limit', def: { en: 'One perceptron cannot learn XOR — proof single neurons have ceilings.', bn: 'এক perceptron XOR শিখতে পারে না — এক নিউরনের ছাদ-প্রমাণ।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The atom of all neural networks', bn: 'WHY — সব neural network-এর পরমাণু' },
    },
    {
      type: 'list',
      items: [
        { en: 'Every giant model today — billions of parameters — is perceptrons stacked in layers with better activations and training. Master one, and deep learning is “more of these, organized.”', bn: 'আজকের সব দৈত্য-মডেল — কোটি প্যারামিটার — perceptron-এর স্তূপ, ভালো activation আর training-সহ। একটা আয়ত্ত করুন, deep learning হবে “এগুলোই বেশি, সাজিয়ে।”' },
        { en: 'Weights + threshold is the vocabulary of L5–L6: loss, gradients, and layers all talk about adjusting these numbers.', bn: 'ওজন + threshold পাঠ ৫–৬-এর ভাষা: loss, gradient, layer — সব এই সংখ্যা ঠিক করা নিয়ে কথা বলে।' },
        { en: 'The XOR limit teaches intellectual honesty: knowing exactly what a tool CANNOT do is senior thinking.', bn: 'XOR-সীমা বৌদ্ধিক সততা শেখায়: যন্ত্র কী পারে না, ঠিক জানাই সিনিয়র-চিন্তা।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Run one by hand in 4 steps', bn: 'HOW — ১টি নিজে হাতে চালান ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. List inputs and weights', bn: '১. ইনপুট-ওজন তালিকা' }, text: { en: 'sunny=1 (w 0.6), free=0 (w 0.7). Weights are the neuron’s opinions.', bn: 'রোদ=১ (w ০.৬), অবসর=০ (w ০.৭)। ওজন নিউরনের মতামত।' } },
        { title: { en: '2. Multiply and add', bn: '২. গুণ-যোগ' }, text: { en: '0.6×1 + 0.7×0 = 0.6. That is the weighted sum Σ.', bn: '০.৬×১ + ০.৭×০ = ০.৬। এটাই ওজন-যোগফল Σ।' } },
        { title: { en: '3. Compare with threshold', bn: '৩. threshold-তুলনা' }, text: { en: 'Threshold 1.0: is 0.6 ≥ 1.0? No → output 0. Stay home.', bn: 'Threshold ১.০: ০.৬ ≥ ১.০? না → আউটপুট ০। বাসায় থাকো।' } },
        { title: { en: '4. Learn from mistakes', bn: '৪. ভুল থেকে শেখো' }, text: { en: 'Wrong call? Nudge weights toward the right answer. Repeat over examples — lesson 5 automates this.', bn: 'ভুল সিদ্ধান্ত? ওজন সঠিক উত্তরের দিকে ঠেলো। উদাহরণে বারবার — পাঠ ৫ এটা স্বয়ংক্রিয় করে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The same neuron, in code', bn: 'INSIDE — একই নিউরন, কোডে' },
    },
    {
      type: 'para',
      text: {
        en: 'Nine lines of JavaScript hold the whole idea. Run it: the perceptron votes on all four AND cases (00, 01, 10, 11). Then break it on purpose — change the weights and watch right answers turn wrong. Weights ARE the knowledge.',
        bn: '৯ লাইন JavaScript-এ পুরো ধারণা। চালান: perceptron AND-এর চার কেসে ভোট দেয় (০০, ০১, ১০, ১১)। তারপর ইচ্ছে করে ভাঙুন — ওজন বদলে দেখুন সঠিক উত্তর ভুল হয়। ওজনই জ্ঞান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'A perceptron voting on AND (change W1/W2/T, press Run)', bn: 'AND-এ ভোট-দেওয়া perceptron (W1/W2/T বদলে Run চাপুন)' },
      html: '<h3>Perceptron: AND gate</h3>\n<pre id="out"></pre>\n<p>Console shows each vote.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: '// The whole neuron: weighted sum + threshold\nconst W1 = 0.6, W2 = 0.6, T = 1.0; // ← break me!\nconst fire = (x1, x2) => (W1 * x1 + W2 * x2 >= T ? 1 : 0);\n\nconst cases = [[0,0],[0,1],[1,0],[1,1]];\nconst truth = [0,0,0,1]; // AND answers\nlet report = "x1 x2 → vote (truth)\\n";\nlet right = 0;\ncases.forEach(([a, b], i) => {\n  const v = fire(a, b);\n  if (v === truth[i]) right++;\n  report += a + "  " + b + "  →  " + v + "     (" + truth[i] + ")" + (v === truth[i] ? " ✓" : " ✗") + "\\n";\n  console.log("vote:", a, b, "→", v, v === truth[i] ? "right" : "WRONG");\n});\nreport += "\\nScore: " + right + "/4";\ndocument.getElementById("out").textContent = report;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — You can run the atom', bn: 'RESULT — পরমাণু চালাতে পারেন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Compute any perceptron by hand: Σ(w×x), compare with threshold, output 0/1.', bn: 'যেকোনো perceptron হাতে হিসাব: Σ(w×x), threshold-তুলনা, আউটপুট ০/১।' },
        { en: 'Explain learning in one line: “adjust weights so votes match labels.”', bn: 'শেখা এক লাইনে: “ভোট label-মতো করতে ওজন ঠিক করো।”' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The XOR wall (read this twice)', bn: 'DEBUG — XOR-দেয়াল (দুবার পড়ুন)' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'One perceptron cannot learn XOR', bn: 'এক perceptron XOR শিখতে পারে না' },
      text: {
        en: 'XOR says “fire when inputs DIFFER” (01→1, 10→1, 00→0, 11→0). No single straight line separates the 1s from the 0s — and a perceptron IS one straight line. Minsky & Papert proved this in 1969 and froze the field for years. The fix — layers of neurons (L6) — is literally why “deep” learning exists.',
        bn: 'XOR বলে “ইনপুট আলাদা হলে fire” (০১→১, ১০→১, ০০→০, ১১→০)। এক সরলরেখায় ১ আর ০ আলাদা করা যায় না — আর perceptron মানেই এক সরলরেখা। Minsky-Papert ১৯৬৯ সালে এটা প্রমাণ করে ফিল্ড বছরখানেক জমিয়ে দেন। ফিক্স — নিউরনের স্তর (পাঠ ৬) — আক্ষরিকভাবে এজন্যই “deep” learning-এর অস্তিত্ব।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Threshold thinking everywhere', bn: 'REAL WORLD — সর্বত্র threshold-চিন্তা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Spam scores: weighted signals → “spam if score > 0.9.” A perceptron wearing a business suit.', bn: 'স্প্যাম-স্কোর: ওজন-সংকেত → “স্কোর > ০.৯ হলে স্প্যাম।” স্যুট-পরা perceptron।' },
        { en: 'Credit cutoffs, medical triage flags, fraud alerts: all are learned weights + a human-set threshold.', bn: 'ঋণ-সীমা, চিকিৎসা-triage পতাকা, জালিয়াতি-সতর্কতা: সবই শেখা-ওজন + মানুষের-বসানো threshold।' },
        { en: 'Modern nets replaced the hard step with smooth activations (sigmoid, ReLU) — same skeleton, trainable with calculus (L5).', bn: 'আধুনিক net কঠিন step-এর বদলে মসৃণ activation (sigmoid, ReLU) — একই কঙ্কাল, ক্যালকুলাসে train-যোগ্য (পাঠ ৫)।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Training and testing', bn: 'পরবর্তী — ট্রেনিং আর টেস্টিং' },
    },
    {
      type: 'para',
      text: {
        en: 'You can run a neuron; now learn how neurons LEARN: the training loop, loss as a compass, gradient descent as walking downhill, and honest testing that catches overfitting. Lesson 5 is the engine room.',
        bn: 'নিউরন চালাতে পারেন; এবার নিউরন শেখে কীভাবে: training loop, কম্পাস-হিসেবে loss, নিচে-নামা হাঁটা হিসেবে gradient descent, আর overfitting-ধরা সৎ testing। পাঠ ৫ ইঞ্জিন-ঘর।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'A complete perceptron in fifteen lines computing the logical AND function.',
        bn: 'যৌক্তিক AND ফাংশন হিসাব করে পনেরো লাইনের একটি পূর্ণাঙ্গ perceptron।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'perceptron.js',
      code: `function perceptron(x1, x2) {
  const w1 = 0.6, w2 = 0.6, bias = -0.9;
  const sum = x1 * w1 + x2 * w2 + bias;
  return sum >= 0 ? 1 : 0;
}
console.log("AND(0,0):", perceptron(0, 0)); // -> AND(0,0): 0
console.log("AND(1,0):", perceptron(1, 0)); // -> AND(1,0): 0
console.log("AND(0,1):", perceptron(0, 1)); // -> AND(0,1): 0
console.log("AND(1,1):", perceptron(1, 1)); // -> AND(1,1): 1`,
      caption: {
        en: 'The perceptron outputs 1 only when both inputs are 1, correctly executing AND.',
        bn: 'উভয় ইনপুট ১ হলেই কেবল perceptron ১ আউটপুট দেয়, সঠিকভাবে AND সম্পন্ন করে।',
      },
    },
  ],
  exercises: [
    {
      id: 'pcp-ex-1',
      kind: 'mcq',
      topic: 'hand-run',
      question: { en: 'w1=0.5, w2=0.5, threshold=0.6. Input (1,1). Output?', bn: 'w1=০.৫, w2=০.৫, threshold=০.৬। ইনপুট (১,১)। আউটপুট?' },
      options: [
        { en: '1 (sum 1.0 ≥ 0.6)', bn: '১ (যোগ ১.০ ≥ ০.৬)' },
        { en: '0 (sum too small)', bn: '০ (যোগ খুব ছোট)' },
        { en: '0.5', bn: '০.৫' },
        { en: 'Cannot decide', bn: 'সিদ্ধান্ত অসম্ভব' },
      ],
      answer: 0,
      hint: { en: 'Σ = 0.5×1 + 0.5×1. Compare with 0.6.', bn: 'Σ = ০.৫×১ + ০.৫×১। ০.৬-এর সাথে তুলনা।' },
      explanation: {
        en: '0.5 + 0.5 = 1.0 ≥ 0.6 → fires → 1. A perceptron always answers 0 or 1, never “0.5”.',
        bn: '০.৫ + ০.৫ = ১.০ ≥ ০.৬ → fire → ১। Perceptron সবসময় ০ বা ১ বলে, “০.৫” কখনো না।',
      },
    },
    {
      id: 'pcp-ex-2',
      kind: 'mcq',
      topic: 'learning-meaning',
      question: { en: '“Training a perceptron” concretely means…', bn: '“Perceptron train করা” আসলে মানে…' },
      options: [
        { en: 'Adjusting weights so votes match labels', bn: 'ভোট label-মতো করতে ওজন ঠিক করা' },
        { en: 'Adding more inputs forever', bn: 'চিরকাল ইনপুট বাড়ানো' },
        { en: 'Deleting the threshold', bn: 'Threshold মুছে ফেলা' },
        { en: 'Running it once slowly', bn: 'একবার ধীরে চালানো' },
      ],
      answer: 0,
      hint: { en: 'Weights ARE the knowledge.', bn: 'ওজনই জ্ঞান।' },
      explanation: {
        en: 'The structure never changes — only the numbers. Training searches weight values that vote right on the examples.',
        bn: 'কাঠামো কখনো বদলায় না — শুধু সংখ্যা। Training এমন ওজন-মান খোঁজে, যা উদাহরণে সঠিক ভোট দেয়।',
      },
    },
    {
      id: 'pcp-ex-3',
      kind: 'mcq',
      topic: 'xor',
      question: { en: 'Why does XOR defeat one perceptron?', bn: 'XOR এক perceptron-কে হারায় কেন?' },
      options: [
        { en: 'No single straight line separates XOR’s 1s from 0s', bn: 'এক সরলরেখায় XOR-এর ১-০ আলাদা হয় না' },
        { en: 'XOR has too many inputs', bn: 'XOR-এ ইনপুট বেশি' },
        { en: 'Perceptrons cannot multiply', bn: 'Perceptron গুণতে পারে না' },
        { en: 'XOR needs three outputs', bn: 'XOR-এ তিন আউটপুট লাগে' },
      ],
      answer: 0,
      hint: { en: 'A perceptron IS one straight line.', bn: 'Perceptron মানেই এক সরলরেখা।' },
      explanation: {
        en: 'Plot XOR’s four points: the 1s sit on opposite corners — diagonally inseparable by one line. Layers of neurons (L6) bend that line.',
        bn: 'XOR-এর চার বিন্দু আঁকুন: ১-গুলো বিপরীত কোণে — এক রেখায় কর্ণ-অবিচ্ছেদ্য। নিউরন-স্তর (পাঠ ৬) সেই রেখা বাঁকায়।',
      },
    },
    {
      id: 'pcp-ex-4',
      kind: 'predict',
      topic: 'design-or',
      question: { en: 'Give weights + threshold so a 2-input perceptron computes OR (00→0, else 1). Any correct set earns full marks.', bn: '২-ইনপুট perceptron OR দেবে (০০→০, বাকি ১) — ওজন + threshold দিন। যেকোনো সঠিক সেটে পূর্ণ নম্বর।' },
      answer: 'e.g. w1=1, w2=1, threshold=0.5: (0,0)→0<0.5→0; any 1 makes sum≥1≥0.5→1.',
      accept: ['threshold', '0.5', 'w1', 'w2', '1,'],
      hint: { en: 'Any single 1 must clear the bar; (0,0) must not.', bn: 'যেকোনো এক ১ দাগ পার হবে; (০,০) পারবে না।' },
      explanation: {
        en: 'w1=w2=1, T=0.5 works: sums are 0,1,1,2 → outputs 0,1,1,1. Many sets work (e.g. 0.6/0.6/T=0.5). OR is linearly separable — unlike XOR.',
        bn: 'w1=w2=১, T=০.৫ চলে: যোগ ০,১,১,২ → আউটপুট ০,১,১,১। অনেক সেট চলে। OR সরলরেখা-বিচ্ছেদ্য — XOR-এর উল্টো।',
      },
    },
  ],
  quiz: {
    id: 'the-perceptron-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'pcpq1',
        kind: 'mcq',
        topic: 'sum',
        question: { en: 'w=(0.4, 0.4, 0.4), x=(1, 0, 1), threshold=0.9. Output?', bn: 'w=(০.৪, ০.৪, ০.৪), x=(১, ০, ১), threshold=০.৯। আউটপুট?' },
        options: [
          { en: '0 (0.8 < 0.9)', bn: '০ (০.৮ < ০.৯)' },
          { en: '1 (0.8 ≥ 0.9)', bn: '১ (০.৮ ≥ ০.৯)' },
          { en: '0.8', bn: '০.৮' },
          { en: '2', bn: '২' },
        ],
        answer: 0,
        hint: { en: '0.4×1 + 0.4×0 + 0.4×1 = ?', bn: '০.৪×১ + ০.৪×০ + ০.৪×১ = ?' },
        explanation: {
          en: 'Σ = 0.8 < 0.9 → silent → 0. Close is still 0: thresholds do not do “almost”.',
          bn: 'Σ = ০.৮ < ০.৯ → নীরব → ০। কাছাকাছিও ০: threshold “প্রায়” মানে না।',
        },
      },
      {
        id: 'pcpq2',
        kind: 'mcq',
        topic: 'history',
        question: { en: 'Who built the perceptron, and when?', bn: 'Perceptron কে বানান, কখন?' },
        options: [
          { en: 'Rosenblatt, 1958', bn: 'Rosenblatt, ১৯৫৮' },
          { en: 'Turing, 1936', bn: 'Turing, ১৯৩৬' },
          { en: 'Minsky, 2012', bn: 'Minsky, ২০১২' },
          { en: 'Nobody — it is theoretical', bn: 'কেউ না — তাত্ত্বিক' },
        ],
        answer: 0,
        hint: { en: 'WHAT section, first line.', bn: 'WHAT অংশ, প্রথম লাইন।' },
        explanation: {
          en: 'Frank Rosenblatt, 1958 — with an actual machine (the Mark I) that learned from a camera. Minsky later proved its XOR limit (1969).',
          bn: 'Frank Rosenblatt, ১৯৫৮ — আসল যন্ত্রসহ (Mark I), যা ক্যামেরা থেকে শিখত। Minsky পরে XOR-সীমা প্রমাণ করেন (১৯৬৯)।',
        },
      },
      {
        id: 'pcpq3',
        kind: 'mcq',
        topic: 'modern-link',
        question: { en: 'How do modern neural networks relate to the perceptron?', bn: 'আধুনিক neural network-এর সাথে perceptron-এর সম্পর্ক?' },
        options: [
          { en: 'Layers of perceptron-like units with smooth activations', bn: 'মসৃণ activation-সহ perceptron-সদৃশ এককের স্তর' },
          { en: 'Unrelated — invented from scratch', bn: 'সম্পর্কহীন — নতুন আবিষ্কার' },
          { en: 'Single perceptrons with bigger thresholds', bn: 'বড় threshold-এর এক perceptron' },
          { en: 'Perceptrons with no weights', bn: 'ওজনহীন perceptron' },
        ],
        answer: 0,
        hint: { en: 'WHY section: “more of these, organized.”', bn: 'WHY অংশ: “এগুলোই বেশি, সাজিয়ে।”' },
        explanation: {
          en: 'Same skeleton (weighted sums), stacked in layers, with smooth activations so calculus can train them. L6 builds exactly this.',
          bn: 'একই কঙ্কাল (ওজন-যোগ), স্তরে স্তরে, মসৃণ activation-সহ যাতে ক্যালকুলাস train করতে পারে। পাঠ ৬ ঠিক এটাই বানায়।',
        },
      },
      {
        id: 'pcpq4',
        kind: 'predict',
        topic: 'fix-vote',
        question: { en: 'AND-perceptron (W1=W2=0.6, T=1.0) wrongly fires on (1,0) after someone raises W1 to 1.2. Give the smallest principled fix.', bn: 'AND-perceptron (W1=W2=০.৬, T=১.০) কেউ W1 ১.২ করায় (১,০)-তে ভুল fire করে। ক্ষুদ্রতম নীতিগত ফিক্স দিন।' },
        answer: 'Restore W1 to 0.6 (or raise T above 1.2) so single-1 sums stay below threshold while (1,1) still clears it.',
        accept: ['0.6', 'restore', 'threshold', 'raise', 'W1'],
        hint: { en: 'One 1 must fail, two 1s must pass.', bn: 'এক ১ ফেল, দুই ১ পাস।' },
        explanation: {
          en: '1.2×1 = 1.2 ≥ 1.0 wrongly fires. Restoring W1=0.6 (or T=1.3) re-separates: single-1 sums miss, 1.2+0.6… wait — with T=1.3, (1,1) gives 1.8 ≥ 1.3 ✓. Either fix restores the AND line.',
          bn: '১.২×১ = ১.২ ≥ ১.০ ভুল fire। W1=০.৬ ফেরানো (বা T=১.৩) আবার আলাদা করে: এক-১ ফেল, (১,১) পাস। যেকোনো ফিক্স AND-রেখা ফেরায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'training-and-testing',
    title: { en: 'Training and Testing', bn: 'Training আর Testing' },
  },
};