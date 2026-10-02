import type { Lesson } from '../../../lib/types';

export const NetworksForwardLesson: Lesson = {
  slug: 'networks-forward',
  tech: 'deep-learning',
  title: {
    en: 'Networks Forward',
    bn: 'Neuron network হয়: ওজন-সরানো-চাপার layer, বাম থেকে ডানে গণনা — Deep'
  },
  summary: {
    en: 'Neurons become a network: layers of weigh-shift-squeeze, computed left to right. You will hand-run a 2→2→1 net — hidden [0.5, 0], output ≈ 0.56 — learn shape discipline (the skill preventing 90% of deep-learning bugs), and see depth as learned features stacking.',
    bn: 'Neuron network হয়: ওজন-সরানো-চাপার layer, বাম থেকে ডানে গণনা। 2→2→1 net হাতে চালাবেন — hidden [0.5, 0], আউটপুট ≈ 0.56 — shape-শৃঙ্খলা শিখবেন (90% deep-learning বাগ-রোধী দক্ষতা), আর গভীরতাকে শেখা feature স্তূপে দেখবেন।',
  },
  minutes: 16,
  nextLesson: {
    slug: 'backprop-training',
    title: {
      en: 'Backprop Training: Gradient Descent, Chain Rule & Blame Flow',
      bn: 'ব্যাকপ্রপ ট্রেনিং: গ্রেডিয়েন্ট ডিসেন্ট, চেইন রুল ও দোষ প্রবাহ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Layers computing left to right', bn: 'WHAT — বাম থেকে ডানে গণনাকারী layer' },
    },
    {
      type: 'para',
      text: {
        en: 'A network is neurons in COLUMNS: input layer (your data, no computation), hidden layer(s) (ReLU neurons learning intermediate features), output layer (the head: sigmoid/softmax). The forward pass feeds data left to right: every layer computes z = x · W + b (one matrix multiply for all neurons at once), then squeezes. Shapes tell the story: 2→2→1 means 2 inputs, 2 hidden, 1 output — and W₁ is 2×2, W₂ is 2×1. Say shapes aloud; shape mismatch is the #1 runtime error in deep learning.',
        bn: 'Network neuron কলামে সজ্জিত থাকে: input layer (আপনার ডেটা, গণনা নেই), hidden layer (মাঝারি feature শেখা ReLU neuron), output layer (head: sigmoid/softmax)। Forward pass ডেটা বাম থেকে ডানে পাঠায়: প্রতি layer z = x · W + b করে (এক matrix গুণ — সব neuron একসাথে), তারপর চাপে। আকৃতি গল্প বলে: 2→2→1 মানে 2 ইনপুট, 2 hidden, 1 আউটপুট — আর W₁ 2×2, W₂ 2×1। আকৃতি স্পষ্টভাবে মনে রাখুন; shape mismatch হলো ডিপ লার্নিংয়ের এক নম্বর রানটাইম এরর।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'A 2→2→1 network mid-thought', bn: 'চিন্তা-মাঝে ২→২→১ network' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Two inputs, two hidden neurons, one output, with values flowing">
<g font-size="12" font-weight="800" fill="currentColor" text-anchor="middle">
<text x="80" y="30">input</text>
<text x="320" y="30">hidden (ReLU)</text>
<text x="550" y="30">output (σ)</text>
</g>
<g stroke="#94a3b8" stroke-width="2">
<line x1="105" y1="85" x2="270" y2="80"/><line x1="105" y1="85" x2="270" y2="160"/>
<line x1="105" y1="165" x2="270" y2="80"/><line x1="105" y1="165" x2="270" y2="160"/>
<line x1="370" y1="80" x2="520" y2="118"/><line x1="370" y1="160" x2="520" y2="122"/>
</g>
<g font-size="13" font-weight="800" text-anchor="middle" fill="currentColor">
<circle cx="80" cy="85" r="24" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2.5"/>
<text x="80" y="90">1</text>
<circle cx="80" cy="165" r="24" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2.5"/>
<text x="80" y="170">0</text>
<circle cx="320" cy="80" r="24" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" stroke-width="2.5"/>
<text x="320" y="85">0.5</text>
<circle cx="320" cy="160" r="24" fill="#64748b" opacity="0.2" stroke="#64748b" stroke-width="2.5"/>
<text x="320" y="165">0 ✕</text>
<circle cx="550" cy="120" r="26" fill="#16a34a" opacity="0.2" stroke="#16a34a" stroke-width="2.5"/>
<text x="550" y="125">0.56</text>
</g>
<g font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">
<text x="320" y="215">h = ReLU([0.5, −0.3]) = [0.5, 0] — the −0.3 dies at the corner</text>
<text x="320" y="233">o = σ(0.5×0.7 + 0×0.4 − 0.1) = σ(0.25) ≈ 0.56</text>
</g>
</svg>`,
      caption: {
        en: 'Watch the dead neuron (✕): its 0 still flows right, contributing nothing. Silence is also a signal.',
        bn: 'মৃত neuron দেখুন (✕): এর 0 তবু ডানে যায়, কোনো মান যোগ না করে। নীরবতাও সংকেত।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'forward_pass_2_2_1.py',
      code: `import math

def relu(z):
    return [max(0.0, val) for val in z]

def sigmoid(z):
    return 1.0 / (1.0 + math.exp(-z))

# Input vector: 2 features
x = [1.0, 0.0]

# Hidden layer: W1 is 2x2, b1 is 2
W1 = [[0.5, -0.4], [0.3, 0.2]]
b1 = [0.0, -0.1]

# Layer 1 forward: z1 = x * W1 + b1, then ReLU activation
z1 = [x[0]*W1[0][0] + x[1]*W1[1][0] + b1[0],
      x[0]*W1[0][1] + x[1]*W1[1][1] + b1[1]]
h = relu(z1)
print(f"Hidden pre-activation z1: {[round(v, 2) for v in z1]}") # Output: [0.5, -0.5]
print(f"Hidden layer output h: {[round(v, 2) for v in h]}")     # Output: [0.5, 0.0]

# Output layer: W2 is 2x1, b2 is 1 scalar
W2 = [0.5, 0.8]
b2 = 0.0
z2 = h[0]*W2[0] + h[1]*W2[1] + b2
y_hat = sigmoid(z2)
print(f"Output pre-activation z2: {z2:.2f}")                     # Output: 0.25
print(f"Network prediction y_hat: {y_hat:.4f}")                 # Output: 0.5622`,
      caption: {
        en: 'A hand-calculated 2->2->1 feedforward neural network in Python computing hidden activations and final sigmoid prediction 0.56.',
        bn: 'পাইথনে 2->2->1 ফিডফরোয়ার্ড নিউরাল নেটওয়ার্কের সরাসরি গণনা যেখানে হিডেন অ্যাক্টিভেশন এবং 0.56 সিগময়েড প্রেডিকশন দেখানো হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Layer', def: { en: 'A column of neurons computing together: one xW+b.', bn: 'একসাথে গণনা করা neuron কলাম: এক xW+b।' } },
        { term: 'Hidden layer', def: { en: 'Middle columns: learned intermediate features.', bn: 'মাঝের কলাম: শেখা মাঝারি feature।' } },
        { term: 'Forward pass', def: { en: 'Left→right computation: data in, prediction out.', bn: 'বাম থেকে ডানে গণনা: ডেটা প্রবেশ করে, prediction বের হয়।' } },
        { term: 'Shape', def: { en: 'Dimensions (2→2→1). Say them; mismatch = crash.', bn: 'মাত্রা (2→2→1)। বলুন; অমিল হলে ক্র্যাশ।' } },
        { term: 'Depth', def: { en: 'Hidden-layer count. Features stack with depth.', bn: 'Hidden layer গণনা। গভীরতায় feature স্তূপ হয়।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Prediction IS the forward pass', bn: 'WHY — Prediction-ই forward pass' },
    },
    {
      type: 'list',
      items: [
        { en: 'Every deployed net does ONLY this: forward passes, millions per second. Training (L4) exists to make this one direction excellent.', bn: 'প্রতি চালু-net শুধু এটাই করে: forward pass, সেকেন্ডে কোটি। Training (পাঠ ৪) এই এক দিক চমৎকার করতে আছে।' },
        { en: 'Depth = feature hierarchy: vision nets learn edges → textures → parts → objects, one layer-group each. Nobody programs the ladder; depth discovers it.', bn: 'গভীরতা = feature-ক্রম: vision net কিনারা → বুনন → অংশ → বস্তু শেখে, প্রতি layer-দলে এক ধাপ। মই কেউ program করে না; গভীরতা আবিষ্কার করে।' },
        { en: 'Shape discipline is the senior skill: “batch×2 times 2×2 plus 2” said aloud catches the bug before the GPU bills you.', bn: 'Shape-শৃঙ্খলা senior-দক্ষতা: “batch×২ গুণ ২×২ যোগ ২” জোরে বলা GPU-বিলের আগে বাগ ধরে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Forward in 4 steps', bn: 'HOW — Forward 4 ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. State the shapes', bn: '১. আকৃতি বলুন' }, text: { en: '2→2→1: W₁ 2×2, b₁ 2, W₂ 2×1, b₂ 1. Nine numbers total.', bn: '2→2→1: W₁ 2×2, b₁ 2, W₂ 2×1, b₂ 1। মোট 9 টি সংখ্যা।' } },
        { title: { en: '2. Hidden: z = xW₁+b₁, ReLU', bn: '২. Hidden: z = xW₁+b₁, ReLU' }, text: { en: '[1,0] through weights → [0.5,−0.3] → ReLU → [0.5,0].', bn: '[1, 0] ওজন জুড়ে → [0.5, -0.3] → ReLU → [0.5, 0]। ' } },
        { title: { en: '3. Output: z = hW₂+b₂, σ', bn: '৩. আউটপুট: z = hW₂+b₂, σ' }, text: { en: '0.5×0.7+0×0.4−0.1 = 0.25 → σ ≈ 0.56.', bn: '0.5×0.7 + 0×0.4 - 0.1 = 0.25 → σ ≈ 0.56।' } },
        { title: { en: '4. Read + count', bn: '৪. পড়ুন + গুনুন' }, text: { en: '“56% yes.” Nine weights; one prediction. Scale is repetition.', bn: '“56% হ্যাঁ।” 9 টি ওজন; 1 টি prediction। স্কেল হলো পুনরাবৃত্তি।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The diagram computes itself', bn: 'INSIDE — Diagram নিজে গণনা করে' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit IS the diagram: x=[1,0], W₁=[[0.5,−0.5],[0.3,0.8]], b₁=[0,0.2], W₂=[0.7,0.4], b₂=−0.1. Console narrates hidden [0.5,−0.3]→[0.5,0], then σ(0.25)≈0.56. Edit x to [1,1]: the dead neuron wakes — hidden becomes [0.8,0.5]→ReLU same, output σ(0.8×0.7+0.5×0.4−0.1)=σ(0.66)≈0.66. Verify by running.',
        bn: 'এই tryit-ই diagram: x=[1, 0], W₁=[[0.5, -0.5], [0.3, 0.8]], b₁=[0, 0.2], W₂=[0.7, 0.4], b₂=-0.1। Console hidden [0.5, -0.3]→[0.5, 0], তারপর σ(0.25)≈0.56 বর্ণনা করে। x [1, 1] করুন: মৃত neuron জাগে — hidden [0.8, 0.5] হয়, আউটপুট σ(0.8×0.7+0.5×0.4-0.1)=σ(0.66)≈0.66। চালিয়ে যাচাই করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: '2→2→1 forward pass (try x = [1,1], press Run)', bn: '2→2→1 forward pass (x = [1, 1] দিয়ে Run)' },
      html: '<h3>h → o, narrated</h3>\n<pre id="out"></pre>\n<p>Console shows every layer.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: 'const X = [1, 0]; // ← try [1,1]: wake the dead neuron\nconst W1 = [[0.5, -0.5], [0.3, 0.8]], B1 = [0, 0.2];\nconst W2 = [0.7, 0.4], B2 = -0.1;\nconst relu = (v) => v.map((z) => Math.max(0, z));\nconst sig = (z) => 1 / (1 + Math.exp(-z));\nconst zh = [X[0]*W1[0][0] + X[1]*W1[1][0] + B1[0], X[0]*W1[0][1] + X[1]*W1[1][1] + B1[1]];\nconst h = relu(zh);\nconst zo = h[0]*W2[0] + h[1]*W2[1] + B2;\nconst o = sig(zo);\nconsole.log("shapes: 2 → 2 → 1 | W1 2x2, W2 2x1");\nconsole.log("hidden z = [" + zh.map((z) => z.toFixed(2)).join(", ") + "] → ReLU → [" + h.map((v) => v.toFixed(2)).join(", ") + "]");\nconsole.log("output z = " + zo.toFixed(2) + " → σ = " + o.toFixed(2));\ndocument.getElementById("out").textContent = "x=[" + X.join(",") + "] → h=[" + h.map((v) => v.toFixed(2)).join(",") + "] → ŷ=" + o.toFixed(2);',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Forward instincts', bn: 'RESULT — Forward-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Hand-run any small net: shapes first, layer by layer, squeeze each. [0.5,0]→0.56 is the template.', bn: 'যেকোনো ছোট net হাতে চালান: আগে আকৃতি, layer ধরে, প্রতিটা চাপুন। [0.5, 0]→0.56 ছাঁচ।' },
        { en: 'Dead neurons still forward zeros: silence flows, contributes nothing, wakes if inputs change.', bn: 'মৃত neuron তবু শূন্য forward করে: নীরবতা বয়ে যায়, কিছু যোগ না করে ইনপুট বদলে জাগে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Shape crimes', bn: 'DEBUG — আকৃতি সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“It runs, so shapes are right” (broadcasting lies silently)', bn: '“চলে, তাই আকৃতি ঠিক” (broadcasting নীরব-মিথ্যা বলে)' },
      text: {
        en: 'A 2-vector plus a mistyped 2×2 can “work” via broadcasting and train garbage for days. Symptoms: loss flat, nothing learned, no crash. Cure: assert shapes after EVERY layer (…×2 in, …×2 out) until saying them aloud is reflex.',
        bn: '2-vector + ভুল-টাইপ 2×2 broadcasting-এ “চলতে” পারে, দিনভর ভুল train করে। লক্ষণ: loss সমতল, শেখা-শূন্য, ক্র্যাশ নেই। ওষুধ: প্রতি layer-পরে আকৃতি assert করুন (…×2 ঢোকে, …×2 বেরোয়), জোরে বলা অভ্যাস না হওয়া পর্যন্ত।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Count parameters: the 30-second audit', bn: 'Parameter গুনুন: 30-সেকেন্ড audit' },
      text: {
        en: 'This net: W₁ 4 + b₁ 2 + W₂ 2 + b₂ 1 = 9 numbers. Any net: sum over layers (in×out + out). Symptoms of skipping: “tiny model” with 2M hidden params eating the phone battery. Cure: print the count before training anything.',
        bn: 'এই net: W₁ 4 + b₁ 2 + W₂ 2 + b₂ 1 = 9 সংখ্যা। যেকোনো net: layer জুড়ে যোগ (in×out + out)। এড়ানোর লক্ষণ: ফোন ব্যাটারি খাওয়া 2M লুকানো প্যারামিটার সহ “ক্ষুদ্র মডেল।” ওষুধ: কিছু train-এর আগে গণনা ছাপুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Forward at scale', bn: 'REAL WORLD — স্কেলে forward' },
    },
    {
      type: 'list',
      items: [
        { en: 'Phone keyboards: tiny nets forward-predicting your next word in 5ms — this lesson, quantized.', bn: 'ফোন কীবোর্ড: 5ms-এ পরের শব্দ forward-predict ক্ষুদ্র net — এই পাঠ, quantized।' },
        { en: 'Vision APIs: 2→2→1 grown to 224×224→…→1000 classes — same pass, bigger shapes.', bn: 'Vision API: 2→2→1 বেড়ে 224×224→…→1000 শ্রেণি — একই pass, বড় আকৃতি।' },
        { en: 'Inference servers bill per forward pass: batching = many x through one xW+b.', bn: 'Inference server forward pass প্রতি বিল করে: batching = এক xW+b-তে অনেক x।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Backprop Training', bn: 'পরবর্তী পাঠ — Backprop Training' },
    },
    {
      type: 'para',
      text: {
        en: 'Prediction flows right. Lesson 4 flows BLAME left: backpropagation — how each weight learns its share of the error — and the training loop that tunes all nine numbers (then billions).',
        bn: 'Prediction ডানে যায়। পাঠ 4 ভুল বা ক্ষয়ক্ষতির হিসাব বামে পাঠায়: backpropagation — প্রতি ওজন error-ভাগ শেখে কীভাবে — আর training loop যা 9 টি সংখ্যা (তারপর কোটি কোটি) ঠিক করে।',
      },
    },
  ],
  exercises: [
    {
      id: 'fwd-ex-1',
      kind: 'mcq',
      topic: 'param-count',
      question: { en: '2→2→1 net: total learnable numbers?', bn: '২→২→১ net: মোট শেখার-সংখ্যা?' },
      options: [
        { en: '9 (4+2+2+1)', bn: '৯ (৪+২+২+১)' },
        { en: '5 (layers × something)', bn: '৫ (layer × কিছু)' },
        { en: '6 (weights only)', bn: '৬ (শুধু ওজন)' },
        { en: '3 (one per layer)', bn: '৩ (layer-প্রতি এক)' },
      ],
      answer: 0,
      hint: { en: 'Per layer: in×out weights + out biases.', bn: 'প্রতি layer: in×out ওজন + out bias।' },
      explanation: {
        en: 'W₁ 2×2=4, b₁ 2, W₂ 2×1=2, b₂ 1 → 9. Forgetting biases (6) is the classic undercount — biases learn too.',
        bn: 'W₁ ২×২=৪, b₁ ২, W₂ ২×১=২, b₂ ১ → ৯। Bias-ভোলা (৬) চিরায়ত-কমগোনা — bias-ও শেখে।',
      },
    },
    {
      id: 'fwd-ex-2',
      kind: 'mcq',
      topic: 'hidden-math',
      question: { en: 'x=[1,0] → hidden z before ReLU?', bn: 'x=[১,০] → ReLU-আগে hidden z?' },
      options: [
        { en: '[0.5, −0.3]', bn: '[০.৫, −০.৩]' },
        { en: '[0.5, 0]', bn: '[০.৫, ০]' },
        { en: '[1, 0]', bn: '[১, ০]' },
        { en: '[0.25]', bn: '[০.২৫]' },
      ],
      answer: 0,
      hint: { en: 'BEFORE ReLU — keep the negative.', bn: 'ReLU-আগে — নেতিবাচক রাখুন।' },
      explanation: {
        en: 'z₁ = 1×0.5+0×0.3+0 = 0.5; z₂ = 1×(−0.5)+0×0.8+0.2 = −0.3. [0.5,0] is AFTER the squeeze — order matters.',
        bn: 'z₁ = ১×০.৫+০×০.৩+০ = ০.৫; z₂ = ১×(−০.৫)+০×০.৮+০.২ = −০.৩। [০.৫,০] চাপার-পরে — ক্রম জরুরি।',
      },
    },
    {
      id: 'fwd-ex-3',
      kind: 'mcq',
      topic: 'wake-dead',
      question: { en: 'x=[1,1]: hidden neuron 2 (was dead) now outputs…', bn: 'x=[১,১]: hidden neuron ২ (মৃত-ছিল) এখন দেয়…' },
      options: [
        { en: '0.5 (z = −0.5+0.8+0.2, alive)', bn: '০.৫ (z = −০.৫+০.৮+০.২, জীবিত)' },
        { en: '0 (dead forever)', bn: '০ (চিরতরে মৃত)' },
        { en: '−0.3 (unchanged)', bn: '−০.৩ (অপরিবর্তিত)' },
        { en: '1.3', bn: '১.৩' },
      ],
      answer: 0,
      hint: { en: 'Dead on some inputs ≠ dead on all. Recompute z₂.', bn: 'কিছু-ইনপুটে মৃত ≠ সব-ইনপুটে মৃত। z₂ আবার হিসাব করুন।' },
      explanation: {
        en: 'z₂ = 1×(−0.5)+1×0.8+0.2 = 0.5 → ReLU keeps it. “Dead neuron” means dead for THIS input — new inputs resurrect. (Permanently-dead = dead on ALL training rows: L2’s disease.)',
        bn: 'z₂ = ১×(−০.৫)+১×০.৮+০.২ = ০.৫ → ReLU রাখে। “মৃত-neuron” মানে এই ইনপুটে মৃত — নতুন-ইনপুট পুনরুত্থান করে। (স্থায়ী-মৃত = সব training-সারিতে মৃত: পাঠ-২-এর রোগ।)',
      },
    },
    {
      id: 'fwd-ex-4',
      kind: 'predict',
      topic: 'sigma-check',
      question: { en: 'Output z = 0.25. Compute σ(0.25) to 2 decimals + state the reading.', bn: 'আউটপুট z = ০.২৫। σ(০.২৫) ২ দশমিকে হিসাব + পাঠ বলুন।' },
      answer: 'σ(0.25) = 1/(1+e^−0.25) ≈ 0.56: “56% yes.”',
      accept: ['0.56', '56', 'sigmoid', 'yes'],
      hint: { en: 'e^−0.25 ≈ 0.78.', bn: 'e^−০.২৫ ≈ ০.৭৮।' },
      explanation: {
        en: '1/(1+0.7788) = 0.5622 → 0.56. Small positive z → just above half: the net leans yes, weakly. Confidence comes from |z|, not hope.',
        bn: '১/(১+০.৭৭৮৮) = ০.৫৬২২ → ০.৫৬। ছোট ধনাত্মক-z → অর্ধেকের-ওপরে: net দুর্বল-হ্যাঁ ঝোঁকে। আস্থা |z| থেকে আসে, আশা থেকে নয়।',
      },
    },
  ],
  quiz: {
    id: 'networks-forward-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'fwdq1',
        kind: 'mcq',
        topic: 'layer-math',
        question: { en: 'One layer computes…', bn: 'এক layer গণনা করে…' },
        options: [
          { en: 'z = xW + b, then activation', bn: 'z = xW + b, তারপর activation' },
          { en: 'z = x + W + b, no activation', bn: 'z = x + W + b, activation নেই' },
          { en: 'One neuron at a time, slowly', bn: 'একবারে এক neuron, ধীরে' },
          { en: 'Only the bias', bn: 'শুধু bias' },
        ],
        answer: 0,
        hint: { en: 'Matrix multiply, shift, squeeze — together.', bn: 'Matrix-গুণ, সরানো, চাপা — একসাথে।' },
        explanation: {
          en: 'The whole layer is one multiply-add-squeeze: all neurons in parallel. Forward pass = this block repeated per layer.',
          bn: 'পুরো-layer এক গুণ-যোগ-চাপা: সব neuron সমান্তরাল। Forward pass = প্রতি layer-এ এই ব্লক আবার।',
        },
      },
      {
        id: 'fwdq2',
        kind: 'mcq',
        topic: 'deploy-only',
        question: { en: 'A deployed (serving) net runs…', bn: 'চালু (serving) net চালায়…' },
        options: [
          { en: 'Forward passes only', bn: 'শুধু forward pass' },
          { en: 'Backward passes only', bn: 'শুধু backward pass' },
          { en: 'Full training loops', bn: 'পুরো training loop' },
          { en: 'Random weights each query', bn: 'প্রতি query-তে এলোমেলো-ওজন' },
        ],
        answer: 0,
        hint: { en: 'WHY #1.', bn: 'WHY #১।' },
        explanation: {
          en: 'Serving = frozen weights + forward: data in, prediction out. Backprop lives in training datacenters, not in your keyboard app.',
          bn: 'Serving = জমা-ওজন + forward: ডেটা ঢোকে, prediction বেরোয়। Backprop training-ডেটাসেন্টারে থাকে, কিবোর্ড-app-এ নয়।',
        },
      },
      {
        id: 'fwdq3',
        kind: 'mcq',
        topic: 'broadcast-trap',
        question: { en: 'Loss flat, no crash, nothing learned. Prime suspect?', bn: 'Loss সমতল, crash নেই, শেখা-শূন্য। প্রধান-সন্দেহ?' },
        options: [
          { en: 'Silent shape bug (broadcasting garbage)', bn: 'নীরব shape-বাগ (broadcasting-আবর্জনা)' },
          { en: 'Too much data', bn: 'বেশি-ডেটা' },
          { en: 'ReLU too fast', bn: 'ReLU বেশি-দ্রুত' },
          { en: 'Softmax sums to 2', bn: 'Softmax যোগ ২' },
        ],
        answer: 0,
        hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
        explanation: {
          en: 'Broadcasting “fixes” mismatches by stretching — legal math, wrong model. Flat-line training with zero errors screams shape bug: assert every layer’s in/out.',
          bn: 'Broadcasting টেনে mismatch “সারায়” — বৈধ-গণিত, ভুল-মডেল। শূন্য-error-সহ সমতল-training shape-বাগ চিৎকার করে: প্রতি layer-ইন/আউট assert করুন।',
        },
      },
      {
        id: 'fwdq4',
        kind: 'predict',
        topic: 'hierarchy-read',
        question: { en: 'Vision net: layer 1 fires on edges, layer 4 on dog faces. Explain the ladder in one line.', bn: 'Vision net: layer ১ কিনারায় জ্বলে, layer ৪ কুকুর-মুখে। মই এক লাইনে বোঝান।' },
        answer: 'Each layer composes the last one’s features: edges → textures → parts → faces.',
        accept: ['compos', 'edges', 'textures', 'parts', 'hierarch', 'layer'],
        hint: { en: 'WHY #2.', bn: 'WHY #২।' },
        explanation: {
          en: 'Depth stacks composable features: no layer sees pixels except the first, none sees dogs except the last. The ladder is learned, never programmed.',
          bn: 'গভীরতা মিলনযোগ্য feature স্তূপ করে: প্রথম ছাড়া কোনো layer পিক্সেল দেখে না, শেষ ছাড়া কুকুর দেখে না। মই শেখা, কখনো program করা নয়।',
        },
      },
    ],
  },
};