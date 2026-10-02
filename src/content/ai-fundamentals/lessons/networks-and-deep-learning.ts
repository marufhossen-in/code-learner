import type { Lesson } from '../../../lib/types';

export const NetworksAndDeepLearningLesson: Lesson = {
  slug: 'networks-and-deep-learning',
  tech: 'ai-fundamentals',
  title: {
    en: 'Networks and Deep Learning',
    bn: 'নিউরন-স্তর রেখা বাঁকিয়ে যেকোনো আকৃতি বানায় — AI Fundamentals'
  },
  summary: {
    en: 'One neuron draws one line; layers of neurons bend lines into any shape. This lesson stacks perceptrons into a network, defeats lesson 4’s XOR wall with one hidden layer, and shows why depth learns hierarchies — edges to shapes to faces — before mapping the modern zoo: CNNs, RNNs, Transformers.',
    bn: 'এক নিউরন এক রেখা টানে; নিউরন-স্তর রেখা বাঁকিয়ে যেকোনো আকৃতি বানায়। এই পাঠে perceptron স্তরে সাজাব, এক hidden layer-এ পাঠ ৪ এর XOR-দেয়াল ভাঙব, আর দেখব গভীরতা কেন hierarchy শেখে — কিনারা থেকে আকৃতি থেকে মুখ — তারপর আধুনিক চিড়িয়াখানা: CNN, RNN, Transformer।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Neurons in layers', bn: 'WHAT — স্তরে স্তরে নিউরন' },
    },
    {
      type: 'para',
      text: {
        en: 'A neural network is perceptrons organized: an input layer (the features), one or more hidden layers (learned intermediate ideas), and an output layer (the decision). Each neuron does the lesson-4 job — weighted sum, then activation — and passes its answer forward as the next layer’s input. “Deep” only means many hidden layers. Two layers already cross the `XOR` wall.',
        bn: 'Neural network হলো সাজানো perceptron: input layer (feature), এক বা বেশি hidden layer (শেখা-মাঝারি ধারণা), আর output layer (সিদ্ধান্ত)। প্রতি নিউরন পাঠ-৪-এর কাজ করে — ওজন-যোগ, তারপর activation — আর উত্তর সামনে পাঠায় পরের স্তরের ইনপুট হিসেবে। “Deep” মানেই অনেক hidden layer। দুই স্তরই XOR-দেয়াল পেরোয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'A 3-4-3-2 network: forward pass left to right', bn: '৩-৪-৩-২ network: বাম থেকে ডানে forward pass' },
      svg: `<svg viewBox="0 0 640 310" font-family="system-ui, sans-serif" role="img" aria-label="Neural network with input, two hidden layers, and output">
<g stroke="#4f46e5" stroke-width="1.5" opacity="0.55">
<line x1="90" y1="85" x2="250" y2="50"/><line x1="90" y1="85" x2="250" y2="120"/><line x1="90" y1="85" x2="250" y2="190"/><line x1="90" y1="85" x2="250" y2="260"/>
<line x1="90" y1="155" x2="250" y2="50"/><line x1="90" y1="155" x2="250" y2="120"/><line x1="90" y1="155" x2="250" y2="190"/><line x1="90" y1="155" x2="250" y2="260"/>
<line x1="90" y1="225" x2="250" y2="50"/><line x1="90" y1="225" x2="250" y2="120"/><line x1="90" y1="225" x2="250" y2="190"/><line x1="90" y1="225" x2="250" y2="260"/>
<line x1="250" y1="50" x2="410" y2="85"/><line x1="250" y1="50" x2="410" y2="155"/><line x1="250" y1="50" x2="410" y2="225"/>
<line x1="250" y1="120" x2="410" y2="85"/><line x1="250" y1="120" x2="410" y2="155"/><line x1="250" y1="120" x2="410" y2="225"/>
<line x1="250" y1="190" x2="410" y2="85"/><line x1="250" y1="190" x2="410" y2="155"/><line x1="250" y1="190" x2="410" y2="225"/>
<line x1="250" y1="260" x2="410" y2="85"/><line x1="250" y1="260" x2="410" y2="155"/><line x1="250" y1="260" x2="410" y2="225"/>
<line x1="410" y1="85" x2="550" y2="115"/><line x1="410" y1="85" x2="550" y2="195"/>
<line x1="410" y1="155" x2="550" y2="115"/><line x1="410" y1="155" x2="550" y2="195"/>
<line x1="410" y1="225" x2="550" y2="115"/><line x1="410" y1="225" x2="550" y2="195"/>
</g>
<g fill="#4f46e5" opacity="0.16" stroke="#4f46e5" stroke-width="2">
<circle cx="90" cy="85" r="17"/><circle cx="90" cy="155" r="17"/><circle cx="90" cy="225" r="17"/>
<circle cx="250" cy="50" r="17"/><circle cx="250" cy="120" r="17"/><circle cx="250" cy="190" r="17"/><circle cx="250" cy="260" r="17"/>
<circle cx="410" cy="85" r="17"/><circle cx="410" cy="155" r="17"/><circle cx="410" cy="225" r="17"/>
</g>
<g fill="#16a34a" opacity="0.9" stroke="#16a34a" stroke-width="2">
<circle cx="550" cy="115" r="17" fill-opacity="0.15"/><circle cx="550" cy="195" r="17" fill-opacity="0.15"/>
</g>
<text x="90" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">inputs</text>
<text x="250" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">hidden 1</text>
<text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">hidden 2</text>
<text x="550" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">outputs</text>
<text x="90" y="300" text-anchor="middle" font-size="12" fill="currentColor">features</text>
<text x="250" y="300" text-anchor="middle" font-size="12" fill="currentColor">edges…</text>
<text x="410" y="300" text-anchor="middle" font-size="12" fill="currentColor">…shapes…</text>
<text x="550" y="300" text-anchor="middle" font-size="12" fill="currentColor">…faces ✓</text>
</svg>`,
      caption: {
        en: 'Every line is a weight the training loop (L5) tunes. Depth builds a hierarchy: early layers see edges, late layers see faces.',
        bn: 'প্রতি রেখা এক ওজন, যা training loop (পাঠ ৫) ঠিক করে। গভীরতা hierarchy বানায়: শুরুর স্তর কিনারা, শেষ স্তর মুখ দেখে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Layer', def: { en: 'A row of neurons computing together; the network’s unit of organization.', bn: 'একসাথে হিসাব করা নিউরন-সারি; network-এর সংগঠন-একক।' } },
        { term: 'Hidden layer', def: { en: 'Any layer between input and output — where intermediate ideas form.', bn: 'ইনপুট-আউটপুটের মাঝের স্তর — যেখানে মাঝারি ধারণা গড়ে।' } },
        { term: 'Forward pass', def: { en: 'Inputs flowing left→right through layers to produce one prediction.', bn: 'এক prediction-এ স্তর ভেদে বাম→ডান ইনপুট-প্রবাহ।' } },
        { term: 'Hierarchy', def: { en: 'Depth’s gift: simple features compose into complex concepts layer by layer.', bn: 'গভীরতার উপহার: স্তরে স্তরে সরল feature জটিল ধারণায় গাঁথে।' } },
        { term: 'CNN', def: { en: 'Convolutional Net: the vision specialist (images, video). Learns local patterns.', bn: 'Vision-বিশেষজ্ঞ (ছবি, ভিডিও)। স্থানীয় প্যাটার্ন শেখে।' } },
        { term: 'Transformer', def: { en: 'The 2017 architecture behind modern language models. Attention over sequences.', bn: 'আধুনিক ভাষা-মডেলের ২০১৭ সালের স্থাপত্য। Sequence-এ attention।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Depth is what unlocked the world', bn: 'WHY — গভীরতাই পৃথিবী খুলেছে' },
    },
    {
      type: 'list',
      items: [
        { en: 'One layer = one straight cut (L4). Real problems need curved boundaries: hidden layers bend the line, each layer bending further.', bn: 'এক স্তর = এক সরল কাটা (পাঠ ৪)। আসল সমস্যায় বাঁকা সীমানা লাগে: hidden layer রেখা বাঁকায়, প্রতি স্তরে আরো।' },
        { en: 'Hierarchy matches reality: faces ARE edges+shapes composed; sentences ARE words+grammar composed. Depth mirrors the world.', bn: 'Hierarchy বাস্তব-মতো: মুখ আসলে কিনারা+আকৃতির গাঁথুনি; বাক্য শব্দ+ব্যাকরণের গাঁথুনি। গভীরতা পৃথিবীর আয়না।' },
        { en: '2012’s proof: deep nets halved image-recognition error overnight. Every “AI can now…” headline since is depth + data + GPUs.', bn: '২০১২ সালের প্রমাণ: deep net রাতারাতি ছবি-চেনার error অর্ধেক করে। তারপরের প্রতি “AI এখন পারে…” শিরোনাম গভীরতা + ডেটা + GPU।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — The forward pass in 4 steps', bn: 'HOW — Forward pass ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Feed features in', bn: '১. feature ঢোকাও' }, text: { en: 'Input layer holds raw numbers (pixel brightnesses, word ids). No computation yet.', bn: 'Input layer কাঁচা সংখ্যা ধরে (পিক্সেল-উজ্জ্বলতা, শব্দ-id)। এখনো হিসাব নয়।' } },
        { title: { en: '2. Each hidden neuron votes', bn: '২. প্রতি hidden নিউরন ভোট দেয়' }, text: { en: 'Weighted sum of its inputs + smooth activation (ReLU/sigmoid). Thousands vote at once.', bn: 'ইনপুটের ওজন-যোগ + মসৃণ activation (ReLU/sigmoid)। হাজারো একসাথে ভোট দেয়।' } },
        { title: { en: '3. Cascade forward', bn: '৩. সামনে প্রবাহ' }, text: { en: 'Hidden 1’s votes become hidden 2’s inputs — ideas composing into bigger ideas.', bn: 'Hidden ১-এর ভোট hidden ২-এর ইনপুট — ধারণা বড় ধারণায় গাঁথে।' } },
        { title: { en: '4. Read the output', bn: '৪. আউটপুট পড়ো' }, text: { en: 'Output layer scores each answer (“cat 93%, dog 6%…”). Highest wins.', bn: 'Output layer প্রতি উত্তর স্কোর করে (“বিড়াল ৯৩%, কুকুর ৬%…”)। সর্বোচ্চ জেতে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — XOR falls to two layers', bn: 'INSIDE — দুই স্তরে XOR পড়ে' },
    },
    {
      type: 'para',
      text: {
        en: 'Lesson 4 proved one neuron cannot do XOR. Watch two layers do it: hidden neuron H1 computes OR, hidden neuron H2 computes AND, and the output fires when H1 is 1 but H2 is 0 — i.e., “exactly one input is 1.” That is XOR. Run it below: 4/4, the wall lesson 4 said was impossible for one neuron.',
        bn: 'পাঠ ৪ প্রমাণ করেছিল এক নিউরন XOR পারে না। দেখুন দুই স্তর পারে: hidden নিউরন H1 OR হিসাব করে, H2 AND, আর আউটপুট fire করে যখন H1 ১ কিন্তু H2 ০ — অর্থাৎ “ঠিক এক ইনপুট ১।” এটাই XOR। নিচে চালান: ৪/৪ — পাঠ ৪ যাকে এক নিউরনে অসম্ভব বলেছিল।',
      },
    },
    {
      type: 'tryit',
      title: { en: '2-layer XOR network (the wall, crossed)', bn: '২-স্তর XOR network (দেয়াল পেরিয়ে)' },
      html: '<h3>XOR: impossible for 1 neuron, easy for 2 layers</h3>\n<pre id="out"></pre>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: '// Hidden layer: two one-neuron experts\nconst OR  = (a, b) => (a + b >= 0.5 ? 1 : 0);\nconst AND = (a, b) => (a + b >= 1.5 ? 1 : 0);\n// Output layer: fire when OR says yes but AND says no\nconst OUT = (h1, h2) => (h1 - h2 >= 0.5 ? 1 : 0);\nconst xor = (a, b) => OUT(OR(a, b), AND(a, b));\n\nconst truth = { "0,0": 0, "0,1": 1, "1,0": 1, "1,1": 1 };\nlet report = "a b → H1(OR) H2(AND) → XOR (truth)\\n";\nlet right = 0;\n[[0,0],[0,1],[1,0],[1,1]].forEach(([a, b]) => {\n  const h1 = OR(a, b), h2 = AND(a, b), y = OUT(h1, h2);\n  const t = truth[a + "," + b];\n  if (y === t) right++;\n  report += a + " " + b + " →   " + h1 + "      " + h2 + "     →  " + y + "     (" + t + ")" + (y === t ? " ✓" : " ✗") + "\\n";\n  console.log("xor(" + a + "," + b + ") =", y, y === t ? "✓" : "✗");\n});\nreport += "\\nScore: " + right + "/4 — one hidden layer beat the XOR wall";\ndocument.getElementById("out").textContent = report;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Depth, demystified', bn: 'RESULT — গভীরতা, রহস্য-ভাঙা' },
    },
    {
      type: 'list',
      items: [
        { en: '“Deep” = stacked perceptron-layers; each layer bends the decision boundary further.', bn: '“Deep” = স্তূপীকৃত perceptron-স্তর; প্রতি স্তর সিদ্ধান্ত-সীমানা আরো বাঁকায়।' },
        { en: 'You hand-verified a network beating XOR — the exact moment neural nets became worth stacking.', bn: 'XOR-জয়ী network হাতে-যাচাই করলেন — ঠিক সেই মুহূর্ত, যখন neural net স্তূপ-যোগ্য হলো।' },
        { en: 'Modern map: CNNs for images, Transformers for language, both trained by lesson 5’s loop.', bn: 'আধুনিক মানচিত্র: ছবিতে CNN, ভাষায় Transformer, দুটোই পাঠ ৫ এর loop-এ train।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — “Deeper is always better” (no)', bn: 'DEBUG — “গভীর মানেই ভালো” (না)' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Depth has bills to pay', bn: 'গভীরতার খরচ আছে' },
      text: {
        en: 'More layers = more weights = more data hunger, more compute, easier overfitting, harder training (gradients fade across 100 layers without tricks like residuals). Practitioners use the SHALLOWEST net that solves the job — depth is spent, not splurged.',
        bn: 'বেশি স্তর = বেশি ওজন = বেশি ডেটা-ক্ষুধা, বেশি compute, সহজ overfitting, কঠিন training (residual-কৌশল ছাড়া ১০০ স্তরে gradient মিলিয়ে যায়)। Practitioner কাজ-মেটানো অগভীরতম net নেয় — গভীরতা খরচ করে, অপচয় নয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — The zoo, one line each', bn: 'REAL WORLD — চিড়িয়াখানা, প্রতি লাইনে একটা' },
    },
    {
      type: 'list',
      items: [
        { en: 'CNN (vision): face unlock, medical scans, self-driving cameras — learns local patterns anywhere in the image.', bn: 'CNN (vision): ফেস আনলক, মেডিকেল স্ক্যান, self-driving ক্যামেরা — ছবির যেকোনোখানে স্থানীয় প্যাটার্ন শেখে।' },
        { en: 'Transformer (language + beyond): translation, chatbots, code assistants — attention weighs which words matter to which.', bn: 'Transformer (ভাষা + আরো): অনুবাদ, চ্যাটবট, কোড-সহকারী — attention মাপে কোন শব্দ কোনটার জন্য জরুরি।' },
        { en: 'Same loop underneath: every one of these trains by guess → loss → downhill nudge (L5).', bn: 'নিচে একই loop: প্রতিটা train হয় অনুমান → loss → নিচের-ঠেলায় (পাঠ ৫)।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Limits, bias, safety', bn: 'পরবর্তী — সীমা, bias, নিরাপত্তা' },
    },
    {
      type: 'para',
      text: {
        en: 'You can build the engine; now learn its honest limits. Lesson 7 is the senior-developer lesson: bias in data, confident mistakes, evaluation lies, and the safety habits that keep AI deployments trustworthy.',
        bn: 'ইঞ্জিন বানাতে পারেন; এবার এর সৎ সীমা শিখুন। পাঠ ৭ সিনিয়র-developer পাঠ: ডেটায় bias, আত্মবিশ্বাসী ভুল, মূল্যায়ন-মিথ্যা, আর নিরাপত্তা-অভ্যাস, যা AI-চালু বিশ্বাসযোগ্য রাখে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'A two-layer network solving the XOR problem that a single perceptron could not learn.',
        bn: 'একটি দুই-স্তরের নেটওয়ার্ক যা এক perceptron দিয়ে না-শেখা XOR সমস্যা সমাধান করে।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'xor_net.js',
      code: `function sigmoid(z) { return 1 / (1 + Math.exp(-z)); }
function forward(x1, x2) {
  const h1 = sigmoid(x1 * -5 + x2 * -5 + 7);
  const h2 = sigmoid(x1 * 5 + x2 * 5 - 2);
  const out = sigmoid(h1 * 5 + h2 * 5 - 7);
  return out >= 0.5 ? 1 : 0;
}
console.log("XOR(0,0):", forward(0, 0)); // -> XOR(0,0): 0
console.log("XOR(1,0):", forward(1, 0)); // -> XOR(1,0): 1
console.log("XOR(0,1):", forward(0, 1)); // -> XOR(0,1): 1
console.log("XOR(1,1):", forward(1, 1)); // -> XOR(1,1): 0`,
      caption: {
        en: 'With 2 hidden neurons, the network outputs 1 for differing inputs and 0 for identical inputs.',
        bn: '২টি লুকানো নিউরন দিয়ে নেটওয়ার্কটি ভিন্ন ইনপুটে ১ আর অভিন্ন ইনপুটে ০ আউটপুট দেয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'ndl-ex-1',
      kind: 'mcq',
      topic: 'hidden-role',
      question: { en: 'What do hidden layers add that one layer cannot?', bn: 'Hidden layer কী দেয়, যা এক স্তর পারে না?' },
      options: [
        { en: 'Bent decision boundaries via composed intermediate ideas', bn: 'মাঝারি-ধারণার গাঁথুনিতে বাঁকা সিদ্ধান্ত-সীমানা' },
        { en: 'Faster typing', bn: 'দ্রুত টাইপিং' },
        { en: 'Fewer weights', bn: 'কম ওজন' },
        { en: 'No need for data', bn: 'ডেটার দরকার নেই' },
      ],
      answer: 0,
      hint: { en: 'XOR needed one bend. Deeper problems need more.', bn: 'XOR-এ এক বাঁক লেগেছিল। গভীর সমস্যায় বেশি।' },
      explanation: {
        en: 'Each hidden layer re-represents the data, letting the next layer cut curves instead of lines. That composition IS depth’s power.',
        bn: 'প্রতি hidden layer ডেটা নতুনভাবে সাজায়, পরের স্তর রেখার বদলে বক্র কাটে। এই গাঁথুনিই গভীরতার শক্তি।',
      },
    },
    {
      id: 'ndl-ex-2',
      kind: 'mcq',
      topic: 'xor-roles',
      question: { en: 'In the lesson’s XOR net, what does the output neuron compute?', bn: 'পাঠের XOR net-এ output নিউরন কী হিসাব করে?' },
      options: [
        { en: 'OR minus AND: fires only when exactly one input is 1', bn: 'OR বিয়োগ AND: ঠিক এক ইনপুট ১ হলেই fire' },
        { en: 'AND plus OR', bn: 'AND যোগ OR' },
        { en: 'The average of inputs', bn: 'ইনপুটের গড়' },
        { en: 'Nothing — outputs are decorative', bn: 'কিছু না — আউটপুট শোভা' },
      ],
      answer: 0,
      hint: { en: 'INSIDE: “H1 is 1 but H2 is 0.”', bn: 'INSIDE: “H1 ১ কিন্তু H2 ০।”' },
      explanation: {
        en: 'OUT = H1 − H2 ≥ 0.5. (1,1) gives 1−1=0 (silent ✓); single-1 cases give 1−0=1 (fire ✓). Subtraction implements “OR but not AND”.',
        bn: 'OUT = H1 − H2 ≥ ০.৫। (১,১)-এ ১−১=০ (নীরব ✓); এক-১ কেসে ১−০=১ (fire ✓)। বিয়োগ “OR কিন্তু AND নয়” বাস্তবায়ন করে।',
      },
    },
    {
      id: 'ndl-ex-3',
      kind: 'mcq',
      topic: 'hierarchy',
      question: { en: 'An image net’s layer 1 sees edges, layer 4 sees faces. This is…', bn: 'ছবি-net-এর স্তর ১ কিনারা, স্তর ৪ মুখ দেখে। এটা…' },
      options: [
        { en: 'Learned hierarchy: simple features composing upward', bn: 'শেখা hierarchy: সরল feature উপরে গাঁথে' },
        { en: 'A bug — layers should see the same thing', bn: 'বাগ — স্তরের একই জিনিস দেখা উচিত' },
        { en: 'Overfitting', bn: 'Overfitting' },
        { en: 'Coincidence', bn: 'কাকতালীয়' },
      ],
      answer: 0,
      hint: { en: 'The diagram’s bottom row.', bn: 'চিত্রের নিচের সারি।' },
      explanation: {
        en: 'Depth composes: edges → textures → parts → faces. Researchers verified this by visualizing what each layer responds to — hierarchy is measured, not hoped.',
        bn: 'গভীরতা গাঁথে: কিনারা → texture → অংশ → মুখ। গবেষকরা প্রতি স্তরের সাড়া visualize করে যাচাই করেছেন — hierarchy মাপা, আশা নয়।',
      },
    },
    {
      id: 'ndl-ex-4',
      kind: 'predict',
      topic: 'pick-arch',
      question: { en: 'Two jobs: (a) read handwritten digits, (b) summarize news articles. Name the architecture family for each + one-line why.', bn: 'দুই কাজ: (a) হাতে-লেখা সংখ্যা পড়া, (b) খবরের সারাংশ। প্রতিটার স্থাপত্য-পরিবার + এক-লাইন কেন।' },
      answer: '(a) CNN — local visual patterns anywhere on the page; (b) Transformer — long-range word relations in sequences.',
      accept: ['CNN', 'Transformer', 'image', 'language', 'vision'],
      hint: { en: 'REAL WORLD zoo, one line each.', bn: 'REAL WORLD চিড়িয়াখানা, লাইনে একটা।' },
      explanation: {
        en: 'Digits are spatial-local (CNN’s home turf); summaries need whole-document word relations (attention’s home turf). Matching architecture to data shape is half of applied deep learning.',
        bn: 'সংখ্যা স্থানিক-স্থানীয় (CNN-এর ঘর); সারাংশে পুরো-নথির শব্দ-সম্পর্ক লাগে (attention-এর ঘর)। ডেটা-আকৃতিতে স্থাপত্য মেলানো applied deep learning-এর অর্ধেক।',
      },
    },
  ],
  quiz: {
    id: 'networks-and-deep-learning-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'ndlq1',
        kind: 'mcq',
        topic: 'forward-pass',
        question: { en: 'During a forward pass, information flows…', bn: 'Forward pass-এ তথ্য প্রবাহ…' },
        options: [
          { en: 'Inputs → hidden layers → outputs, once', bn: 'ইনপুট → hidden স্তর → আউটপুট, একবার' },
          { en: 'Outputs → inputs, backward only', bn: 'আউটপুট → ইনপুট, শুধু পেছনে' },
          { en: 'Randomly between neurons', bn: 'নিউরনে এলোমেলো' },
          { en: 'Nowhere — networks are static', bn: 'কোথাও না — network স্থির' },
        ],
        answer: 0,
        hint: { en: 'HOW: “cascade forward.”', bn: 'HOW: “সামনে প্রবাহ।”' },
        explanation: {
          en: 'One left-to-right sweep = one prediction. (Backward flow exists too — backpropagation during TRAINING — the machine-learning hub’s topic.)',
          bn: 'এক বাম-থেকে-ডান ঝাঁট = এক prediction। (পেছন-প্রবাহও আছে — TRAINING-এ backpropagation — machine-learning হাবের বিষয়।)',
        },
      },
      {
        id: 'ndlq2',
        kind: 'mcq',
        topic: 'depth-cost',
        question: { en: 'Why not always use 500 layers?', bn: 'সবসময় ৫০০ স্তর নয় কেন?' },
        options: [
          { en: 'More data hunger, compute, overfitting risk, harder training', bn: 'বেশি ডেটা-ক্ষুধা, compute, overfitting-ঝুঁকি, কঠিন training' },
          { en: 'Layers beyond 10 are illegal', bn: '১০ এর বেশি স্তর বেআইনি' },
          { en: 'Deep nets cannot use GPUs', bn: 'Deep net GPU ব্যবহার করতে পারে না' },
          { en: 'Accuracy always drops with depth', bn: 'গভীরতায় accuracy সবসময় কমে' },
        ],
        answer: 0,
        hint: { en: 'DEBUG: “bills to pay.”', bn: 'DEBUG: “খরচ আছে।”' },
        explanation: {
          en: 'Depth is a budget: spend it where curves are needed, not everywhere. The shallowest sufficient net wins on cost, speed, and reliability.',
          bn: 'গভীরতা বাজেট: যেখানে বক্র লাগে সেখানে খরচ, সর্বত্র নয়। যথেষ্ট-অগভীরতম net খরচ, গতি, নির্ভরতায় জেতে।',
        },
      },
      {
        id: 'ndlq3',
        kind: 'mcq',
        topic: 'same-loop',
        question: { en: 'How is a 100-layer net trained?', bn: '১০০-স্তর net train হয় কীভাবে?' },
        options: [
          { en: 'The same guess → loss → downhill loop as one neuron', bn: 'এক নিউরনের মতোই অনুমান → loss → নিচের loop' },
          { en: 'By hand-tuning every weight', bn: 'প্রতি ওজন হাতে-ঠিক করে' },
          { en: 'It arrives pre-trained from nature', bn: 'প্রকৃতি থেকে pre-train হয়ে আসে' },
          { en: 'Training is impossible past 3 layers', bn: '৩ স্তরের পর training অসম্ভব' },
        ],
        answer: 0,
        hint: { en: 'L5’s loop trains everything.', bn: 'পাঠ ৫-এর loop সব train করে।' },
        explanation: {
          en: 'Scale changes; the loop does not. Gradients flow to all 100 layers at once (backprop does the bookkeeping) — same compass, bigger terrain.',
          bn: 'স্কেল বদলায়; loop নয়। Gradient একসাথে ১০০ স্তরে পৌঁছায় (backprop হিসাব রাখে) — একই কম্পাস, বড় ভূখণ্ড।',
        },
      },
      {
        id: 'ndlq4',
        kind: 'predict',
        topic: 'trace-net',
        question: { en: 'Trace the lesson’s XOR net on (1,0): give H1, H2, and final y with the arithmetic.', bn: 'পাঠের XOR net (১,০)-তে চালান: গাণিতিকসহ H1, H2, চূড়ান্ত y দিন।' },
        answer: 'H1=OR=1 (1+0≥0.5), H2=AND=0 (1+0<1.5), y=OUT=1 (1−0≥0.5).',
        accept: ['H1', '1', 'H2', '0', 'y'],
        hint: { en: 'OR first, AND second, subtract last.', bn: 'আগে OR, পরে AND, শেষে বিয়োগ।' },
        explanation: {
          en: 'Full trace: H1 = 1+0 = 1 ≥ 0.5 → 1; H2 = 1+0 = 1 < 1.5 → 0; y = 1−0 = 1 ≥ 0.5 → 1. XOR(1,0)=1 ✓.',
          bn: 'পূর্ণ trace: H1 = ১+০ = ১ ≥ ০.৫ → ১; H2 = ১+০ = ১ < ১.৫ → ০; y = ১−০ = ১ ≥ ০.৫ → ১। XOR(১,০)=১ ✓।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'limits-bias-safety',
    title: { en: 'Limits, Bias, Safety', bn: 'সীমা, Bias, নিরাপত্তা' },
  },
};