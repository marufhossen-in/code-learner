import type { Lesson } from '../../../lib/types';

export const DlCapstoneLesson: Lesson = {
  slug: 'dl-capstone',
  tech: 'deep-learning',
  title: {
    en: 'Dl Capstone — Seven lessons become one training run, the 2→2→1 net',
    bn: 'সাত পাঠ এক training-চালান হয়: পাঠ-৩-এর ২→২→১ net XOR live শেখে'
  },
  summary: {
    en: 'Seven lessons become one training run: the 2→2→1 net from Lesson 3 learns XOR live — loss 0.73 → 0.001, predictions [0.00, 1.00, 1.00, 0.00] — crossing the wall where the 1958 perceptron died. Forward, loss, backward, step, 2000 times: the whole profession in one loop.',
    bn: 'সাত পাঠ এক training-চালান হয়: পাঠ-৩-এর ২→২→১ net XOR live শেখে — loss ০.৭৩ → ০.০০১, prediction [০.০০, ১.০০, ১.০০, ০.০০] — ১৯৫৮-perceptron-মরা দেয়াল পেরিয়ে। Forward, loss, backward, ধাপ, ২০০০ বার: এক loop-এ পুরো-পেশা।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — The loop that learns curves', bn: 'WHAT — বক্র-শেখা loop' },
    },
    {
      type: 'para',
      text: {
        en: 'Everything assembles into one training run. We initialize the nine numbers, run a forward pass on all four XOR rows, and compute cross-entropy loss. Then we backpropagate gradients through both layers and update weights with a learning rate of 5. Repeating this loop across 2000 epochs lowers loss from 0.73 to 0.001. A single straight line cannot separate XOR corners, but a hidden layer bends feature space to make classification easy.',
        bn: 'সবকিছু একত্রিত হয়ে একটি পূর্ণাঙ্গ ট্রেনিং রানে রূপ নেয়। আমরা নয়টি সংখ্যা ইনিশিয়ালাইজ করি, চারটি XOR সারিতে ফরোয়ার্ড পাস চালাই এবং লস গণনা করি। এরপর উভয় স্তরের মধ্য দিয়ে ব্যাকপ্রপাগেশনের মাধ্যমে গ্র্যাডিয়েন্ট বের করে লার্নিং রেট ৫ দিয়ে ওয়েট আপডেট করি। ২০০০ epoch ধরে এই লুপ চালানোর ফলে লস ০.৭৩ থেকে কমে ০.০০১ এ নেমে আসে। একটি সরলরেখা কখনো XOR এর বিপরীত কোণগুলোকে আলাদা করতে পারে না, কিন্তু হিডেন লেয়ার ফিচার স্পেসকে বাঁকিয়ে এই শ্রেণিবিন্যাসকে সহজ করে তোলে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Loss falls, corners surrender', bn: 'Loss পড়ে, কোণ আত্মসমর্পণ করে' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Falling loss curve and learned XOR grid">
<line x1="50" y1="200" x2="360" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<line x1="50" y1="200" x2="50" y2="20" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<text x="350" y="218" font-size="12" fill="currentColor">epochs →</text>
<text x="10" y="35" font-size="12" fill="currentColor">loss</text>
<path d="M55,60 C100,150 140,185 200,193 C260,197 320,198 355,198" fill="none" stroke="#4f46e5" stroke-width="3"/>
<g font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">
<text x="60" y="50">0.73</text>
<text x="160" y="178">0.005</text>
<text x="330" y="190">0.001</text>
</g>
<circle cx="55" cy="60" r="5" fill="#dc2626"/>
<text x="55" y="232" text-anchor="middle" font-size="11" fill="currentColor">0</text>
<text x="355" y="232" text-anchor="middle" font-size="11" fill="currentColor">2000</text>
<g font-size="14" font-weight="800" text-anchor="middle">
<text x="505" y="30" font-size="12" fill="currentColor">learned XOR</text>
<rect x="445" y="45" width="55" height="55" rx="8" fill="#dc2626" opacity="0.2" stroke="#dc2626" stroke-width="2"/>
<text x="472" y="79" fill="currentColor">0.00</text>
<rect x="505" y="45" width="55" height="55" rx="8" fill="#2563eb" opacity="0.2" stroke="#2563eb" stroke-width="2"/>
<text x="532" y="79" fill="currentColor">1.00</text>
<rect x="445" y="105" width="55" height="55" rx="8" fill="#2563eb" opacity="0.2" stroke="#2563eb" stroke-width="2"/>
<text x="472" y="139" fill="currentColor">1.00</text>
<rect x="505" y="105" width="55" height="55" rx="8" fill="#dc2626" opacity="0.2" stroke="#dc2626" stroke-width="2"/>
<text x="532" y="139" fill="currentColor">0.00</text>
</g>
<text x="505" y="190" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">[0,0]→0 [0,1]→1</text>
<text x="505" y="208" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">[1,0]→1 [1,1]→0 ✓</text>
</svg>`,
      caption: {
        en: 'The curve that convinced a generation: from coin-flip (0.73 ≈ −ln 0.5) to certainty (0.001).',
        bn: 'প্রজন্ম-বোঝানো curve: মুদ্রা-টস (০.৭৩ ≈ −ln ০.৫) থেকে নিশ্চয়তা (০.০০১)।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'xor_capstone_training.py',
      code: `import math

# 1. Dataset: XOR truth table
data = [
    ([0.0, 0.0], 0.0),
    ([0.0, 1.0], 1.0),
    ([1.0, 0.0], 1.0),
    ([1.0, 1.0], 0.0)
]

# 2. Initial weights and biases for 2->2->1 network architecture
w1 = [[0.5, -0.5], [0.3, 0.8]]
b1 = [0.0, 0.2]
w2 = [0.7, 0.4]
b2 = -0.1
lr = 5.0

def sig(z):
    return 1.0 / (1.0 + math.exp(-z))

def fwd(x):
    zh0 = w1[0][0]*x[0] + w1[1][0]*x[1] + b1[0]
    zh1 = w1[0][1]*x[0] + w1[1][1]*x[1] + b1[1]
    h = [sig(zh0), sig(zh1)]
    zo = h[0]*w2[0] + h[1]*w2[1] + b2
    p = sig(zo)
    return p, h

def calc_loss():
    total = 0.0
    for x, y in data:
        p, _ = fwd(x)
        p = max(min(p, 0.9999999), 1e-7)
        total += -(y * math.log(p) + (1.0 - y) * math.log(1.0 - p))
    return total / 4.0

print(f"Initial loss: {calc_loss():.4f}") # Output: 0.7312

# 3. Train network for 2000 epochs using full-batch gradient descent
for ep in range(1, 2001):
    gw1 = [[0.0, 0.0], [0.0, 0.0]]
    gb1 = [0.0, 0.0]
    gw2 = [0.0, 0.0]
    gb2 = 0.0
    for x, y in data:
        p, h = fwd(x)
        dz = p - y
        gw2[0] += dz * h[0]
        gw2[1] += dz * h[1]
        gb2 += dz
        for j in range(2):
            dh = dz * w2[j] * h[j] * (1.0 - h[j])
            gw1[0][j] += dh * x[0]
            gw1[1][j] += dh * x[1]
            gb1[j] += dh
    for i in range(2):
        for j in range(2):
            w1[i][j] -= lr * gw1[i][j] / 4.0
    for j in range(2):
        b1[j] -= lr * gb1[j] / 4.0
    w2[0] -= lr * gw2[0] / 4.0
    w2[1] -= lr * gw2[1] / 4.0
    b2 -= lr * gb2 / 4.0

print(f"Final loss at epoch 2000: {calc_loss():.4f}") # Output: 0.0010
preds = [round(fwd(x)[0], 2) for x, y in data]
print(f"Final XOR predictions: {preds}") # Output: [0.0, 1.0, 1.0, 0.0]`,
      caption: {
        en: 'Complete end-to-end training of the 2-2-1 neural network on XOR data over 2000 epochs, lowering binary cross-entropy loss from 0.7312 to 0.0010 and producing final predictions [0.0, 1.0, 1.0, 0.0].',
        bn: '২-২-১ নিউরাল নেটওয়ার্কে ২০০০ epoch ধরে XOR ডেটায় সম্পূর্ণ প্রশিক্ষণ, যা লসকে ০.৭৩১২ থেকে ০.০০১০ এ নামিয়ে আনে এবং চূড়ান্ত পূর্বাভাস [০.০, ১.০, ১.০, ০.০] প্রদান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Training loop', def: { en: 'Forward → loss → backward → step, repeated to convergence.', bn: 'Forward → loss → backward → ধাপ, convergence পর্যন্ত আবার।' } },
        { term: 'Convergence', def: { en: 'Loss settled: learning done (or stuck — read curves).', bn: 'Loss থিতানো: শেখা শেষ (বা আটকে — curve পড়ুন)।' } },
        { term: 'XOR', def: { en: 'Opposite-corner truth: unlinearable, the perceptron’s grave.', bn: 'বিপরীত-কোণ সত্যি: রেখা-অযোগ্য, perceptron-কবর।' } },
        { term: 'Representation', def: { en: 'What hidden layers learn: bent space where truth is easy.', bn: 'Hidden layer যা শেখে: বাঁকা-জায়গা যেখানে সত্যি সহজ।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The wall, crossed live', bn: 'WHY — দেয়াল, live-পার' },
    },
    {
      type: 'list',
      items: [
        { en: '1969: Minsky showed perceptrons cannot learn XOR — AI winter followed. This capstone crosses that grave in 2000 steps.', bn: '১৯৬৯: Minsky দেখিয়েছে perceptron XOR শিখতে পারে না — AI-winter এসেছে। এই capstone ২০০০ ধাপে ওই কবর পারে।' },
        { en: 'The template for ALL training: every LLM run is this loop with bigger shapes, more data, longer curves.', bn: 'সব training-ছাঁচ: প্রতি LLM-চালান এই loop, বড়-আকৃতি, বেশি-ডেটা, লম্বা-curve।' },
        { en: 'Proof over promise: you watched 0.73 become 0.001. Depth is no longer a claim — it is a memory.', bn: 'প্রতিশ্রুতি-ওপর প্রমাণ: ০.৭৩-কে ০.০০১ হতে দেখলেন। গভীরতা দাবি নয় — স্মৃতি।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Train XOR in 4 steps', bn: 'HOW — XOR train ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Init from Lesson 3', bn: '১. পাঠ-৩ থেকে init' }, text: { en: 'Same 9 numbers (W₁, b₁, W₂, b₂) — familiarity, then learning.', bn: 'একই ৯ সংখ্যা (W₁, b₁, W₂, b₂) — পরিচিতি, তারপর শেখা।' } },
        { title: { en: '2. Loop 2000 epochs', bn: '২. ২০০০ epoch loop' }, text: { en: 'Full-batch: all 4 rows per step, LR=5. Log every 500.', bn: 'Full-batch: ধাপ-প্রতি ৪ সারি, LR=৫। ৫০০-পরপর লগ।' } },
        { title: { en: '3. Watch 0.73 → 0.001', bn: '৩. ০.৭৩ → ০.০০১ দেখুন' }, text: { en: 'Snapshots: 0.73, 0.005, 0.002, 0.001, 0.001. Settled = converged.', bn: 'Snapshot: ০.৭৩, ০.০০৫, ০.০০২, ০.০০১, ০.০০১। থিতানো = converged।' } },
        { title: { en: '4. Grade 4/4', bn: '৪. ৪/৪ গ্রেড' }, text: { en: '[0.00,1.00,1.00,0.00] vs truth: perfect. Ship the nine numbers.', bn: '[০.০০,১.০০,১.০০,০.০০] বনাম সত্যি: নিখুঁত। নয় সংখ্যা চালু করুন।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — 2000 steps to certainty', bn: 'INSIDE — নিশ্চয়তায় ২০০০ ধাপ' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit IS the capstone: full-batch backprop on XOR, LR=5, loss logged at 0/500/1000/1500/2000 — 0.73, 0.005, 0.002, 0.001, 0.001 — ending [0.00,1.00,1.00,0.00]. Drop LR to 1 and re-run: still crawling at epoch 2000 — the learning-rate edge from ML-L7, now deciding a graduation.',
        bn: 'এই tryit-ই capstone: XOR-এ full-batch backprop, LR=৫, ০/৫০০/১০০০/১৫০০/২০০০-তে loss-লগ — ০.৭৩, ০.০০৫, ০.০০২, ০.০০১, ০.০০১ — শেষ [০.০০,১.০০,১.০০,০.০০]। LR ১-এ নামিয়ে আবার চালান: epoch-২০০০-এ তবু হামাগুড়ি — ML-পাঠ-৭ learning-rate কিনারা, এখন গ্র্যাজুয়েশন-নির্ধারক।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Train XOR end to end (try LR = 1, press Run)', bn: 'XOR শুরু-শেষ train (LR = ১ দিয়ে Run)' },
      html: '<h3>Curve + final report card</h3>\n<pre id="out"></pre>\n<p>Console logs every 500th epoch.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #ecfdf5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 10px; }',
      js: 'const DATA = [{ x: [0,0], y: 0 }, { x: [0,1], y: 1 }, { x: [1,0], y: 1 }, { x: [1,1], y: 0 }];\nconst LR = 5, EP = 2000; // ← try LR = 1: feel the crawl\nlet W1 = [[0.5,-0.5],[0.3,0.8]], B1 = [0,0.2], W2 = [0.7,0.4], B2 = -0.1; // L3 init\nconst sig = (z) => 1 / (1 + Math.exp(-z));\nconst fwd = (x) => {\n  const zh = [W1[0][0]*x[0]+W1[1][0]*x[1]+B1[0], W1[0][1]*x[0]+W1[1][1]*x[1]+B1[1]];\n  const h = zh.map(sig);\n  return { p: sig(h[0]*W2[0]+h[1]*W2[1]+B2), h };\n};\nconst loss = () => DATA.reduce((s, d) => { const p = fwd(d.x).p; return s - (d.y*Math.log(p)+(1-d.y)*Math.log(1-p)); }, 0) / 4;\nconst curve = [loss().toFixed(3)];\nfor (let ep = 1; ep <= EP; ep++) {\n  let gW1 = [[0,0],[0,0]], gB1 = [0,0], gW2 = [0,0], gB2 = 0;\n  DATA.forEach((d) => {\n    const { p, h } = fwd(d.x), dz = p - d.y;\n    gW2[0] += dz*h[0]; gW2[1] += dz*h[1]; gB2 += dz;\n    for (let j = 0; j < 2; j++) {\n      const dh = dz * W2[j] * h[j] * (1 - h[j]);\n      gW1[0][j] += dh*d.x[0]; gW1[1][j] += dh*d.x[1]; gB1[j] += dh;\n    }\n  });\n  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) W1[i][j] -= LR*gW1[i][j]/4;\n  for (let j = 0; j < 2; j++) B1[j] -= LR*gB1[j]/4;\n  W2[0] -= LR*gW2[0]/4; W2[1] -= LR*gW2[1]/4; B2 -= LR*gB2/4;\n  if (ep % 500 === 0) { curve.push(loss().toFixed(3)); console.log("epoch " + ep + ": loss " + loss().toFixed(4)); }\n}\nconst preds = DATA.map((d) => fwd(d.x).p.toFixed(2));\ndocument.getElementById("out").textContent =\n  "loss: " + curve.join(" → ") + "\\nXOR: [" + preds.join(", ") + "]  (truth [0, 1, 1, 0])";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Graduate instincts', bn: 'RESULT — গ্র্যাজুয়েট-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Map every line of the tryit to its lesson: init→L3, sigmoid→L1/L2, backward→L4, LR→ML-L7.', bn: 'Tryit-প্রতি লাইন পাঠে মেলান: init→পাঠ ৩, sigmoid→পাঠ ১/২, backward→পাঠ ৪, LR→ML-পাঠ ৭।' },
        { en: 'XOR learned = representation learned: the hidden layer bent space until lines sufficed.', bn: 'XOR-শেখা = representation-শেখা: hidden layer জায়গা বাঁকিয়েছে যতক্ষণ রেখা যথেষ্ট হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Graduation traps', bn: 'DEBUG — গ্র্যাজুয়েশন-ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“Loss 0.001 — done!” (on 4 memorized rows?)', bn: '“Loss ০.০০১ — শেষ!” (৪ মুখস্থ-সারিতে?)' },
      text: {
        en: 'XOR has no held-out rows: 0.001 proves optimization, not generalization. Symptoms in real work: toy triumphs, production flops. Cure: the ML-L6 reflex — locked test, always — even when the toy has none to give.',
        bn: 'XOR-এ আলাদা করে রাখা টেস্ট সারি নেই: ০.০০১ কেবল অপ্টিমাইজেশন প্রমাণ করে, সাধারণীকরণ নয়। লক্ষণ: খেলনা ডেটায় জয় কিন্তু প্রোডাকশনে ব্যর্থ। সমাধান: আলাদা টেস্ট সেটের ফলাফল যাচাই করা।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'LR=1 crawls: same loop, different graduation', bn: 'LR=১ হামাগুড়ি দেয়: একই loop, আলাদা-গ্র্যাজুয়েশন' },
      text: {
        en: 'One digit — 5 vs 1 — separates certainty from crawling: hyperparameters ARE the training. Symptoms: “correct code, no learning.” Cure: LR first (ML-L7), init second, architecture last — the eternal order.',
        bn: 'এক অঙ্ক — ৫ বনাম ১ — নিশ্চয়তা ও ধীরগতির ব্যবধান তৈরি করে: হাইপারপ্যারামিটারই প্রশিক্ষণের চালিকাশক্তি। লক্ষণ: সঠিক কোড থাকা সত্ত্বেও কোনো উন্নতি না হওয়া। সমাধান: প্রথমে LR ঠিক করা, এরপর ইনিশিয়ালাইজেশন, এবং সবার শেষে আর্কিটেকচার।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Loops at every scale', bn: 'REAL WORLD — প্রতি স্কেলে loop' },
    },
    {
      type: 'list',
      items: [
        { en: 'This tryit (9 weights, 4 rows) and GPT training (billions, trillions): the SAME loop. Only shapes changed.', bn: 'এই tryit (৯ ওজন, ৪ সারি) আর GPT training (কোটি, লক্ষ-কোটি): একই লুপ। শুধু আকৃতি বদলেছে।' },
        { en: 'Fine-tuning YOUR assistant: this loop, your data, tiny LR — graduation you can sell.', bn: 'আপনার নিজস্ব অ্যাসিস্ট্যান্ট fine-tuning: এই loop, আপনার ডেটা, ক্ষুদ্র LR — বিক্রিযোগ্য গ্র্যাজুয়েশন।' },
        { en: 'The AI→ML→DL arc: rules failed, lines bent, nets curved. Next hub: nets that WRITE.', bn: 'AI→ML→DL ধারা: নিয়ম ব্যর্থ, রেখা বাঁকা, নেটওয়ার্ক বক্র। পরের হাব: টেক্সট তৈরির নেটওয়ার্ক।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Generative AI', bn: 'পরবর্তী পাঠ — Generative AI' },
    },
    {
      type: 'para',
      text: {
        en: 'Deep learning complete: neurons, squeezes, forward passes, blame, discipline, eyes, spotlights — and a crossed wall. Next hub: GENERATIVE AI — the same nets, turned from classifiers into creators: writing, painting, composing. Bring your transformers; they run the show now.',
        bn: 'Deep learning সম্পূর্ণ: neuron, চাপা, forward pass, দোষ, শাসন, চোখ, spotlight — আর পার-হওয়া দেয়াল। পরের hub: GENERATIVE AI — একই net, classifier থেকে স্রষ্টায় ঘুরে: লেখা, আঁকা, সুর। Transformer সাথে আনুন; এখন শো ওরাই চালায়।',
      },
    },
  ],
  exercises: [
    {
      id: 'dlc-ex-1',
      kind: 'mcq',
      topic: 'curve-read',
      question: {
        en: 'The training curve logs the sequence: 0.73 → 0.005 → 0.002 → 0.001 → 0.001. How should you interpret this result?',
        bn: 'ট্রেনিং কার্ভ এই ধারাটি রেকর্ড করে: ০.৭৩ → ০.০০৫ → ০.০০২ → ০.০০১ → ০.০০১। এই ফলাফলকে আপনি কীভাবে ব্যাখ্যা করবেন?'
      },
      options: [
        { en: 'Fast learn, then converged (settled at 0.001)', bn: 'দ্রুত-শেখা, তারপর converged (০.০০১-এ থিতানো)' },
        { en: 'Still learning fast at 2000', bn: '২০০০-এ তবু দ্রুত শিখছে' },
        { en: 'Diverging — stop it', bn: 'Diverging — থামান' },
        { en: 'Stuck from the start', bn: 'শুরু থেকে আটকে' },
      ],
      answer: 0,
      hint: { en: 'Last two snapshots identical.', bn: 'শেষ দুই snapshot অভিন্ন।' },
      explanation: {
        en: '0.73→0.005 did the learning; 0.001→0.001 is settled. More epochs buy nothing — convergence, the happy flatline.',
        bn: '০.৭৩→০.০০৫ শেখা সম্পন্ন করেছে; ০.০০১→০.০০১ স্থির অবস্থান। অতিরিক্ত epoch বাড়ালে আর কোনো পরিবর্তন আসে না — এটিই কনভার্জেন্স।',
      },
    },
    {
      id: 'dlc-ex-2',
      kind: 'mcq',
      topic: 'why-nonlinear',
      question: { en: 'Why did the hidden layer need sigmoid (not linear)?', bn: 'Hidden layer-এ sigmoid লেগেছে কেন (linear নয়)?' },
      options: [
        { en: 'Linear stacking collapses to one line — XOR needs the bend', bn: 'Linear-স্তূপ এক রেখায় ধসে — XOR-এ বাঁক লাগে' },
        { en: 'Sigmoid trains faster always', bn: 'Sigmoid সবসময় দ্রুত train হয়' },
        { en: 'Linear is illegal in capstones', bn: 'Capstone-এ linear বেআইনি' },
        { en: 'No reason — habit', bn: 'কারণ নেই — অভ্যাস' },
      ],
      answer: 0,
      hint: { en: 'L2’s collapse sentence.', bn: 'পাঠ-২ ধস-বাক্য।' },
      explanation: {
        en: 'Without the bend, 2→2→1 = one line = perceptron = XOR-impossible. The sigmoid IS the graduation.',
        bn: 'বাঁক-ছাড়া ২→২→১ = এক রেখা = perceptron = XOR-অসম্ভব। Sigmoid-ই গ্র্যাজুয়েশন।',
      },
    },
    {
      id: 'dlc-ex-3',
      kind: 'mcq',
      topic: 'lr-fate',
      question: { en: 'LR=1 still crawls at epoch 2000. First fix?', bn: 'LR=১ দিয়ে ২০০০ epoch পরও হামাগুড়ি দেয়। প্রথম সমাধান কী?' },
      options: [
        { en: 'Raise LR (5 works) — tune LR before all else', bn: 'LR তুলুন (৫ চলে) — সবার আগে LR ঠিক করুন' },
        { en: 'Add 10 layers', bn: '১০ layer যোগ করুন' },
        { en: 'Delete the data', bn: 'ডেটা মুছুন' },
        { en: 'Switch to linear', bn: 'Linear-এ যান' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip: the eternal order.', bn: 'DEBUG tip: চিরন্তন-ক্রম।' },
      explanation: {
        en: 'Correct code + wrong LR = crawling: LR 5 converges, LR 1 naps. LR first, init second, architecture last — every training run, forever.',
        bn: 'সঠিক-কোড + ভুল-LR = হামাগুড়ি: LR ৫ converge করে, LR ১ ঘুমায়। আগে LR, দ্বিতীয় init, শেষে স্থাপত্য — প্রতি training-চালান, চিরকাল।',
      },
    },
    {
      id: 'dlc-ex-4',
      kind: 'predict',
      topic: 'honest-grad',
      question: { en: '“XOR 4/4 — ship it!” State the honest objection in one line.', bn: '“XOR ৪/৪ নির্ভুল — প্রোডাকশনে পাঠান!” এক লাইনে সৎ আপত্তি কী?' },
      answer: 'No held-out rows: 4/4 proves fitting, not generalizing — grade on unseen data before shipping.',
      accept: ['held-out', 'unseen', 'generaliz', 'fitting', 'test'],
      hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
      explanation: {
        en: 'Four training rows, zero test rows: the grade is a diary entry. Celebration allowed; shipping requires the ML-L6 lock.',
        bn: 'চার training-সারি, শূন্য test-সারি: গ্রেড ডায়েরি-লেখা। উদযাপন allowed; চালুতে ML-পাঠ-৬ তালা লাগে।',
      },
    },
  ],
  quiz: {
    id: 'dl-capstone-quiz',
    title: { en: 'Capstone exam', bn: 'Capstone পরীক্ষা' },
    questions: [
      {
        id: 'dlcq1',
        kind: 'mcq',
        topic: 'lesson-map',
        question: {
          en: 'From which earlier lesson did the tryit’s backward pass chain-rule equations originate?',
          bn: 'Tryit কোডের ব্যাকওয়ার্ড পাস ও চেইন রুল সমীকরণগুলো কোন পাঠ থেকে এসেছে?'
        },
        options: [
          { en: 'Lesson 4 (chain rule, blame × local slope)', bn: 'পাঠ ৪ (chain rule, দোষ × স্থানীয়-ঢাল)' },
          { en: 'Lesson 6 (convolution)', bn: 'পাঠ ৬ (convolution)' },
          { en: 'Lesson 7 (attention)', bn: 'পাঠ ৭ (attention)' },
          { en: 'Nowhere — new magic', bn: 'কোথাও না — নতুন-জাদু' },
        ],
        answer: 0,
        hint: { en: 'RESULT #1’s map.', bn: 'RESULT #১ মানচিত্র।' },
        explanation: {
          en: 'dz×W×h(1−h) is L4’s chain rule wearing XOR clothes. The capstone invents nothing — it assembles.',
          bn: 'dz×W×h(১−h) পাঠ-৪ chain rule, XOR-পোশাকে। Capstone কিছু আবিষ্কার করে না — জোড়া লাগায়।',
        },
      },
      {
        id: 'dlcq2',
        kind: 'mcq',
        topic: 'rep-meaning',
        question: {
          en: 'What does it practically mean when we state that the hidden layer bent the feature space?',
          bn: 'হিডেন লেয়ার ফিচার স্পেসকে বাঁকিয়ে দিয়েছে — এই কথার ব্যবহারিক অর্থ কী?'
        },
        options: [
          { en: 'Learned representation: XOR corners separable in h-space though not in x-space', bn: 'শেখা-representation: x-জায়গায় না-হলেও h-জায়গায় XOR-কোণ আলাদাযোগ্য' },
          { en: 'The code has a bug', bn: 'কোডে বাগ' },
          { en: 'Space is literally curved', bn: 'জায়গা আক্ষরিক-বাঁকা' },
          { en: 'XOR became linear data', bn: 'XOR linear-ডেটা হয়েছে' },
        ],
        answer: 0,
        hint: { en: 'Keyterms: representation.', bn: 'Keyterms: representation।' },
        explanation: {
          en: 'h = bent coordinates: in h-space the output neuron draws ONE line and wins. Representation learning = making truth easy, layer by layer.',
          bn: 'h = বাঁকা-স্থানাঙ্ক: h-জায়গায় output-neuron এক রেখা আঁকে, জেতে। Representation learning = সত্যি-সহজ করা, layer ধরে।',
        },
      },
      {
        id: 'dlcq3',
        kind: 'mcq',
        topic: 'scale-claim',
        question: {
          en: 'When people claim that the same loop trains modern GPT models, what is the honest engineering nuance?',
          bn: 'একই লুপ আধুনিক GPT মডেলগুলোকে প্রশিক্ষণ দেয় — এই দাবির বাস্তব ইঞ্জিনিয়ারিং সত্যতা কী?'
        },
        options: [
          { en: 'Same loop shape; GPT adds scale, data, tricks — the loop is necessary, not sufficient', bn: 'একই loop-আকৃতি; GPT স্কেল, ডেটা, কৌশল যোগায় — loop প্রয়োজনীয়, যথেষ্ট নয়' },
          { en: 'Literally identical runs', bn: 'আক্ষরিক অভিন্ন-চালান' },
          { en: 'Completely different math', bn: 'সম্পূর্ণ আলাদা-গণিত' },
          { en: 'GPT needs no training', bn: 'GPT-এ training লাগে না' },
        ],
        answer: 0,
        hint: { en: 'REAL WORLD #1, read twice.', bn: 'REAL WORLD #১, দুবার পড়ুন।' },
        explanation: {
          en: 'Forward→loss→backward→step scales from 9 weights to billions — but scale demands its own arts (parallelism, stability, data). Honor the loop; respect the gap.',
          bn: 'Forward→loss→backward→ধাপ ৯ ওজন থেকে কোটিতে স্কেল করে — কিন্তু স্কেল নিজ-শিল্প দাবি করে (সমান্তরালতা, স্থিতি, ডেটা)। Loop-সম্মান করুন; ফাঁক-শ্রদ্ধা করুন।',
        },
      },
      {
        id: 'dlcq4',
        kind: 'predict',
        topic: 'track-arc',
        question: { en: 'AI→ML→DL in one breath: what did each era add that the last could not?', bn: 'এক নিঃশ্বাসে AI→ML→DL: প্রতি যুগ কী যোগ করেছে যা আগেরটা পারেনি?' },
        answer: 'ML: learning rules from data (not hand-writing). DL: learning REPRESENTATIONS (bent space) that lines and trees cannot reach.',
        accept: ['learning', 'rules', 'data', 'representation', 'bent', 'layers'],
        hint: { en: 'REAL WORLD #3’s arc.', bn: 'REAL WORLD #৩ চাপ।' },
        explanation: {
          en: 'AI dreamed, ML learned rules, DL learned the spaces rules live in. Generative AI next: learned spaces that CREATE.',
          bn: 'AI স্বপ্ন দেখেছে, ML নিয়ম শিখেছে, DL নিয়ম-থাকা জায়গা শিখেছে। পরে Generative AI: সৃষ্টি-করা শেখা-জায়গা।',
        },
      },
    ],
  },
};