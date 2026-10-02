import type { Lesson } from '../../../lib/types';

export const BackpropTrainingLesson: Lesson = {
  slug: 'backprop-training',
  tech: 'deep-learning',
  title: {
    en: 'Backprop Training',
    bn: 'দোষ বামে বয়: forward predict করে, loss গ্রেড দেয়, backpropagation'
  },
  summary: {
    en: 'Blame flows left: forward predicts, loss grades, backpropagation assigns every weight its share of the error, SGD steps downhill. You will gradient-check a neuron two ways (analytic +0.27 = numeric +0.27), take one SGD step live, and watch loss fall 0.86 → 0.71 — then break it with LR=5.',
    bn: 'দোষ বামে বয়: forward predict করে, loss গ্রেড দেয়, backpropagation প্রতি ওজনে error-ভাগ বরাদ্দ করে, SGD উতরাই-ধাপ নেয়। Neuron-কে দুইভাবে gradient-check করবেন (analytic +০.২৭ = numeric +০.২৭), এক SGD-ধাপ live নেবেন, loss ০.৮৬ → ০.৭১ পড়তে দেখবেন — তারপর LR=৫-এ ভাঙবেন।',
  },
  minutes: 18,
  nextLesson: {
    slug: 'overfitting-dropout',
    title: {
      en: 'Overfitting and Dropout: Regularization and Generalization',
      bn: 'ওভারফিটিং ও ড্রপআউট: রেগুলারাইজেশন ও জেনারেলাইজেশন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Blame assigned, weights stepped', bn: 'WHAT — দোষ-বরাদ্দ, ওজন-ধাপ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you train a neural network, learning progresses through a repeating loop of four steps. First, the forward pass computes predictions. Next, the loss function evaluates error compared to true labels. Then, the backward pass propagates error gradients through the layers using the chain rule. Finally, stochastic gradient descent (`SGD`) updates the weights downhill.',
        bn: 'যখন আপনি একটি নিউরাল নেটওয়ার্ককে প্রশিক্ষণ দেন, তখন শেখার প্রক্রিয়াটি মূলত চারটি পৌনঃপুনিক ধাপে অগ্রসর হয়। প্রথমে ফরোয়ার্ড পাস প্রেডিকশন গণনা করে। এরপর লস ফাংশন আসল লেবেলের সাথে মিলিয়ে ত্রুটি পরিমাপ করে। তারপর চেইন রুল ব্যবহার করে ব্যাকওয়ার্ড পাস লেয়ারগুলোর মধ্য দিয়ে গ্রেডিয়েন্ট প্রবাহিত করে। পরিশেষে, স্টোকাস্টিক গ্রেডিয়েন্ট ডিসেন্ট (`SGD`) ওয়েটগুলোকে অপ্টিমাইজ করে আপডেট করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Forward predicts right, blame flows left', bn: 'Forward ডানে predict করে, দোষ বামে বয়' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Forward arrows right on top, backward blame arrows left below">
<g font-size="12" font-weight="800" fill="currentColor" text-anchor="middle">
<text x="90" y="40">x</text>
<text x="270" y="40">hidden</text>
<text x="450" y="40">ŷ=0.77</text>
<text x="580" y="40">loss 0.86</text>
</g>
<g stroke="#16a34a" stroke-width="2.5" marker-end="url(#fw)">
<line x1="120" y1="70" x2="210" y2="70"/>
<line x1="330" y1="70" x2="390" y2="70"/>
<line x1="500" y1="70" x2="535" y2="70"/>
</g>
<text x="270" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">forward: predict</text>
<g stroke="#dc2626" stroke-width="2.5" marker-end="url(#bw)">
<line x1="530" y1="150" x2="495" y2="150"/>
<line x1="390" y1="150" x2="330" y2="150"/>
<line x1="210" y1="150" x2="120" y2="150"/>
</g>
<defs>
<marker id="fw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker>
<marker id="bw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
</defs>
<text x="270" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">backward: blame (× local slope each layer)</text>
<g font-size="12" font-weight="700" fill="currentColor" text-anchor="middle">
<rect x="60" y="170" width="150" height="44" rx="10" fill="#4f46e5" opacity="0.12" stroke="#4f46e5" stroke-width="2"/>
<text x="135" y="188">w −= LR × blame</text>
<text x="135" y="205" font-weight="600">0.5 → 0.23</text>
<rect x="245" y="170" width="150" height="44" rx="10" fill="#4f46e5" opacity="0.12" stroke="#4f46e5" stroke-width="2"/>
<text x="320" y="188">loss recomputed</text>
<text x="320" y="205" font-weight="600">0.86 → 0.71 ✓</text>
<rect x="430" y="170" width="150" height="44" rx="10" fill="#4f46e5" opacity="0.12" stroke="#4f46e5" stroke-width="2"/>
<text x="505" y="188">repeat per batch</text>
<text x="505" y="205" font-weight="600">SGD</text>
</g>
</svg>`,
      caption: {
        en: 'Green computes, red blames, blue steps. The whole of deep learning is this loop, repeated billions of times.',
        bn: 'সবুজ গণনা করে, লাল দোষ দেয়, নীল ধাপ নেয়। পুরো deep learning এই loop, কোটি-বার আবার।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'sgd_single_step.py',
      code: `import math

def sigmoid(z):
    return 1.0 / (1.0 + math.exp(-z))

# Inputs, initial weight, bias, and target label
x = 1.0
w = 0.5
b = -0.1
y_true = 0.0

# 1. Forward pass
z = w * x + b
y_hat = sigmoid(z)
loss_before = -math.log(1.0 - y_hat)
print(f"Pre-step prediction y_hat: {y_hat:.4f}") # Output: 0.5987
print(f"Pre-step loss: {loss_before:.4f}")         # Output: 0.9130

# 2. Backward pass: compute gradient dL/dw = (y_hat - y_true) * x
grad_w = (y_hat - y_true) * x
grad_b = (y_hat - y_true)

# 3. Update step with learning rate 0.5
lr = 0.5
w -= lr * grad_w
b -= lr * grad_b

# 4. Re-forward: verify loss reduction
z_new = w * x + b
y_hat_new = sigmoid(z_new)
loss_after = -math.log(1.0 - y_hat_new)
print(f"Post-step prediction y_hat: {y_hat_new:.4f}") # Output: 0.5255
print(f"Post-step loss: {loss_after:.4f}")           # Output: 0.7455`,
      caption: {
        en: 'One manual SGD optimization step in Python showing gradient computation and verified loss reduction from 0.91 to 0.75.',
        bn: 'পাইথনে একটি ম্যানুয়াল SGD অপ্টিমাইজেশন ধাপ যেখানে গ্রেডিয়েন্ট গণনা এবং লস 0.91 থেকে 0.75 এ হ্রাস দেখানো হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Loss', def: { en: '“How wrong” as one number (cross-entropy for classes).', bn: '“কত ভুল” এক সংখ্যায় (শ্রেণিতে cross-entropy)।' } },
        { term: 'Gradient (∂L/∂w)', def: { en: 'One weight’s blame: loss-movement per weight-movement.', bn: 'এক ওজনের-দোষ: ওজন-নড়নে loss-নড়ন।' } },
        { term: 'Chain rule', def: { en: 'Blame multiplies through layers: right’s blame × local slope.', bn: 'দোষ layer-জুড়ে গুণ হয়: ডানের-দোষ × স্থানীয়-ঢাল।' } },
        { term: 'Backprop', def: { en: 'Chain rule + caching, mechanized. Autograd does it for you.', bn: 'Chain rule + caching, যান্ত্রিক। Autograd আপনার-জন্য করে।' } },
        { term: 'Epoch / batch / SGD', def: { en: 'Full data pass / blame-averaging bundle / stepping on bundles.', bn: 'পুরো-ডেটা পার / দোষ-গড় বান্ডিল / বান্ডিলে-ধাপ।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The algorithm behind everything', bn: 'WHY — সবকিছুর-পেছনে অ্যালগরিদম' },
    },
    {
      type: 'list',
      items: [
        { en: '1986’s backprop made depth trainable: without mechanized blame, every weight past layer 2 would guess blindly.', bn: '1986 সালের backprop গভীরতা train-যোগ্য করেছে: যান্ত্রিক দোষ ছাড়া layer 2 এর পরের প্রতি ওজন অন্ধ-আন্দাজ করত।' },
        { en: 'Credit assignment IS intelligence-assembly: which of 9 (then 9 billion) numbers caused the error? Backprop answers exactly.', bn: 'দোষ-বরাদ্দই বুদ্ধি-সংযোজন: ৯ (তারপর ৯০০ কোটি) সংখ্যার কোনটা error ঘটিয়েছে? Backprop ঠিক-উত্তর দেয়।' },
        { en: 'Autograd commoditized it: you write forward, frameworks backward. Understanding the flow beats memorizing the calculus.', bn: 'Autograd এটা পণ্য করেছে: আপনি forward লেখেন, ফ্রেমওয়ার্ক backward। প্রবাহ-বোঝা ক্যালকুলাস-মুখস্থ হারায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Train in 4 steps', bn: 'HOW — Train ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Forward + loss', bn: '১. Forward + loss' }, text: { en: 'z=1.2 → p=0.77; same profile passed once AND failed once → mean loss 0.86.', bn: 'z=১.২ → p=০.৭৭; একই প্রোফাইল একবার পাস ও একবার ফেল → গড়-loss ০.৮৬।' } },
        { title: { en: '2. Backward blame', bn: '২. পেছনে-দোষ' }, text: { en: 'Mean blame at z = ((0.77−1)+(0.77−0))/2 = +0.27; ×inputs → per-weight.', bn: 'z-তে গড়-দোষ = ((০.৭৭−১)+(০.৭৭−০))/২ = +০.২৭; ×ইনপুট → প্রতি-ওজন।' } },
        { title: { en: '3. Step (SGD)', bn: '৩. ধাপ (SGD)' }, text: { en: 'LR=1: w₁ 0.5→0.23, b −0.1→−0.37. Silent x₂’s weight untouched (×0).', bn: 'LR=১: w₁ ০.৫→০.২৩, b −০.১→−০.৩৭। নীরব-x₂ ওজন অস্পৃষ্ট (×০)।' } },
        { title: { en: '4. Verify fall', bn: '৪. পতন-যাচাই' }, text: { en: 'Re-forward: p=0.60, loss 0.71 < 0.86 — stepping toward honest 50/50.', bn: 'আবার-forward: p=০.৬০, loss ০.৭১ < ০.৮৬ — সৎ ৫০/৫০-দিকে ধাপ।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Checked twice, stepped once', bn: 'INSIDE — দুবার-যাচাই, একবার-ধাপ' },
    },
    {
      type: 'para',
      text: {
        en: 'Two rows, one profile, opposite fates: passed once, failed once — so the honest optimum is p=0.5, pure uncertainty. This tryit gradient-checks w₁ two ways — mean-blame +0.2685 and numeric bump-test +0.2685 — agreement to 4 decimals means the calculus is honest. Then one SGD step (LR=1): loss 0.8633 → 0.7125. Raise LR to 5 and overshoot past 50/50 to p=0.06: the ML-L7 lesson, now inside a neuron.',
        bn: 'দুই সারি, এক প্রোফাইল, বিপরীত-ভাগ্য: একবার পাস, একবার ফেল — তাই সৎ-সর্বোত্তম p=০.৫, খাঁটি-অনিশ্চয়তা। এই tryit w₁ দুইভাবে gradient-check করে — গড়-দোষ +০.২৬৮৫ ও numeric bump-test +০.২৬৮৫ — ৪ দশমিকে মিল মানে ক্যালকুলাস সৎ। তারপর এক SGD-ধাপ (LR=১): loss ০.৮৬৩৩ → ০.৭১২৫। LR ৫ করে ৫০/৫০-পার p=০.০৬-এ ডিঙান: ML-পাঠ-৭ শিক্ষা, এখন neuron-ভেতরে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Gradient check + one SGD step (try LR = 5, press Run)', bn: 'Gradient check + এক SGD-ধাপ (LR = ৫ দিয়ে Run)' },
      html: '<h3>Blame → step → fall (or overshoot)</h3>\n<pre id="out"></pre>\n<p>Console shows the numeric bump-test.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 10px; }',
      js: 'const PTS = [{ x: [1,0,1], y: 1 }, { x: [1,0,1], y: 0 }]; // same profile: passed once, failed once\nconst LR = 1; // ← try 5: overshoot past 50/50\nlet W = [0.5, -0.2, 0.8], B = -0.1;\nconst sig = (z) => 1 / (1 + Math.exp(-z));\nconst fwd = (w, b, x) => sig(w[0]*x[0] + w[1]*x[1] + w[2]*x[2] + b);\nconst bce = (p, y) => -(y * Math.log(p) + (1 - y) * Math.log(1 - p));\nconst meanLoss = (w, b) => PTS.reduce((s, pt) => s + bce(fwd(w, b, pt.x), pt.y), 0) / PTS.length;\nconst p0 = PTS.map((pt) => fwd(W, B, pt.x));\nconst l0 = meanLoss(W, B);\nconst blame = PTS.reduce((s, pt, k) => s + (p0[k] - pt.y), 0) / PTS.length;\nconst analytic = blame * PTS[0].x[0];\nconst e = 1e-4;\nconst numeric = (meanLoss([W[0]+e, W[1], W[2]], B) - meanLoss([W[0]-e, W[1], W[2]], B)) / (2 * e);\nconsole.log("analytic dL/dw1 = " + analytic.toFixed(4) + ", numeric = " + numeric.toFixed(4) + " → " + (Math.abs(analytic - numeric) < 1e-6 ? "AGREE ✓" : "DISAGREE ✗"));\nW = W.map((w, i) => w - LR * blame * PTS[0].x[i]);\nB = B - LR * blame;\nconst p1 = fwd(W, B, PTS[0].x), l1 = meanLoss(W, B);\ndocument.getElementById("out").textContent =\n  "loss " + l0.toFixed(4) + " → " + l1.toFixed(4) + (l1 < l0 ? " ✓ fell" : " ✗ ROSE (overshot 50/50?)") +\n  "\\nw1 0.5 → " + W[0].toFixed(4) + ", b → " + B.toFixed(4) + ", p → " + p1.toFixed(4);\nconsole.log("after step: w1=" + W[0].toFixed(4) + " b=" + B.toFixed(4) + " p=" + p1.toFixed(4));',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Training instincts', bn: 'RESULT — Training-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Forward, loss, backward, step: say it until boring. Every framework hides this loop; seniors see through.', bn: 'Forward, loss, backward, ধাপ: বিরক্তিকর না-হওয়া পর্যন্ত বলুন। প্রতি ফ্রেমওয়ার্ক এই loop লুকায়; senior ভেদ করে দেখে।' },
        { en: 'Gradient-check new math numerically once: agreement = trust, disagreement = bug (yours, not calculus’s).', bn: 'নতুন-গণিত একবার numeric gradient-check করুন: মিল = আস্থা, অমিল = বাগ (আপনার, ক্যালকুলাসের নয়)।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Steps that betray', bn: 'DEBUG — বিশ্বাসঘাতক-ধাপ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'LR=5 overshoots: loss ROSE 0.86 → 1.47 (watch the ✗)', bn: 'LR=5 ডিঙায়: loss বাড়ে 0.86 → 1.47 (✗ দেখুন)' },
      text: {
        en: 'The tryit’s verdict flips to ✗ ROSE at LR=5: the step leaps past 50/50 down to p=0.06 — same bowl physics as ML-L7, now inside learning itself. Symptoms in real training: loss spikes, NaNs after hours. Cure: LR schedules, warmup (small LR first), gradient clipping (cap blame-magnitude).',
        bn: 'Tryit-রায় LR=5 এ ✗ বাড়ে হয়: ধাপ 50/50 ছাড়িয়ে p=0.06 এ লাফায়। আসল ট্রেনিংয়ে লক্ষণ: loss হঠাৎ বেড়ে যাওয়া বা NaN দেখা দেওয়া। প্রতিকার: LR schedule, warmup এবং gradient clipping ব্যবহার করা।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Silent weights never learn (×0 blame)', bn: 'নীরব-ওজন কখনো শেখে না (×০ দোষ)' },
      text: {
        en: 'x₂=0 → w₂’s blame = 0.27×0 = 0: the weight froze this step through no fault of its own. Sparse data starves weights row by row. Cure: dense batches, embeddings for sparse IDs, patience — coverage over epochs.',
        bn: 'x₂=০ → w₂-দোষ = ০.২৭×০ = ০: ওজন নিজ-দোষ ছাড়া এই ধাপে জমেছে। Sparse-ডেটা সারি-ধরে ওজন না-খাওয়ায়। ওষুধ: ঘন-batch, sparse-ID-তে embedding, ধৈর্য — epoch-জুড়ে coverage।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Loops everywhere', bn: 'REAL WORLD — সর্বত্র loop' },
    },
    {
      type: 'list',
      items: [
        { en: 'Autograd (PyTorch/JAX): you write fwd, .backward() writes blame — this lesson, automated.', bn: 'Autograd (PyTorch/JAX): আপনি fwd লেখেন, .backward() দোষ লেখে — এই পাঠ, স্বয়ংক্রিয়।' },
        { en: 'Fine-tuning: the same loop with tiny LR on new data — old skills preserved, new ones grafted.', bn: 'Fine-tuning: নতুন-ডেটায় ক্ষুদ্র-LR-এ একই loop — পুরনো-দক্ষতা রক্ষিত, নতুন কলম করা।' },
        { en: 'HPC bills: GPU clusters selling SGD-steps by the billion — blame, at scale, is the product.', bn: 'HPC-বিল: কোটি-SGD-ধাপ বিক্রি GPU-cluster — দোষ, স্কেলে, পণ্য।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Overfitting and Dropout', bn: 'পরবর্তী পাঠ — Overfitting ও Dropout' },
    },
    {
      type: 'para',
      text: {
        en: 'Training works — dangerously well. Lesson 5 faces the shadow: nets memorize (capacity excess), and the cures — dropout, early stopping, more data — that keep learning honest.',
        bn: 'Training চলে — বিপজ্জনক-ভালো। পাঠ 5 ছায়ার মুখোমুখি: net মুখস্থ করে (capacity-বাড়তি), আর ওষুধ — dropout, early stopping, বেশি-ডেটা — যা শেখা সৎ রাখে।',
      },
    },
  ],
  exercises: [
    {
      id: 'bkp-ex-1',
      kind: 'mcq',
      topic: 'blame-formula',
      question: { en: 'p=0.77, same profile labeled 1 AND 0. Mean blame at z?', bn: 'p=০.৭৭, একই প্রোফাইলে ১ ও ০। z-তে গড়-দোষ?' },
      options: [
        { en: 'mean(p − y) = +0.27 (overshot average truth 0.5)', bn: 'mean(p − y) = +০.২৭ (গড়-সত্যি ০.৫ ডিঙিয়েছে)' },
        { en: '−0.23 (used only y=1)', bn: '−০.২৩ (শুধু y=১)' },
        { en: '0 (the two rows cancel)', bn: '০ (দুই সারি বাতিল হয়)' },
        { en: '0.77 (blame equals prediction)', bn: '০.৭৭ (দোষ = prediction)' },
      ],
      answer: 0,
      hint: { en: 'Batches average: ((0.77−1)+(0.77−0))/2.', bn: 'Batch গড় করে: ((০.৭৭−১)+(০.৭৭−০))/২।' },
      explanation: {
        en: '((−0.23)+(0.77))/2 = +0.2685. Positive = “pushed too high for the AVERAGE truth 0.5 — step down.” Using one row (−0.23) ignores the batch.',
        bn: '((−০.২৩)+(০.৭৭))/২ = +০.২৬৮৫। ধনাত্মক = “গড়-সত্যি ০.৫-জন্য বেশি-ওপরে ঠেলেছি — নিচে নামো।” এক সারি (−০.২৩) batch এড়ায়।',
      },
    },
    {
      id: 'bkp-ex-2',
      kind: 'mcq',
      topic: 'silent-weight',
      question: { en: 'x₂=0 on both rows. w₂’s update this step?', bn: 'দুই সারিতে x₂=০। এই ধাপে w₂-আপডেট?' },
      options: [
        { en: 'Zero — blame × 0 input', bn: 'শূন্য — দোষ × ০ ইনপুট' },
        { en: 'Full blame — weights always move', bn: 'পুরো-দোষ — ওজন সবসময় নড়ে' },
        { en: 'Doubled — compensation', bn: 'দ্বিগুণ — ক্ষতিপূরণ' },
        { en: 'Random', bn: 'এলোমেলো' },
      ],
      answer: 0,
      hint: { en: 'Per-weight blame = z-blame × its input.', bn: 'প্রতি-ওজন দোষ = z-দোষ × নিজ-ইনপুট।' },
      explanation: {
        en: 'dw₂ = 0.27 × 0 = 0: silent inputs mute their weights’ learning. The weight is innocent AND frozen — coverage comes from other rows.',
        bn: 'dw₂ = ০.২৭ × ০ = ০: নীরব-ইনপুট ওজনের-শেখা নিঃশব্দ করে। ওজন নিরপরাধ ও জমা — coverage অন্য-সারি থেকে আসে।',
      },
    },
    {
      id: 'bkp-ex-3',
      kind: 'mcq',
      topic: 'check-why',
      question: { en: 'Analytic +0.2685, numeric +0.2685. Meaning?', bn: 'Analytic +০.২৬৮৫, numeric +০.২৬৮৫। অর্থ?' },
      options: [
        { en: 'Calculus honest — trust the backward math', bn: 'ক্যালকুলাস সৎ — backward-গণিতে আস্থা' },
        { en: 'Coincidence — rerun forever', bn: 'কাকতালীয় — চিরকাল আবার চালান' },
        { en: 'Loss is wrong', bn: 'Loss ভুল' },
        { en: 'LR is perfect', bn: 'LR নিখুঁত' },
      ],
      answer: 0,
      hint: { en: 'Two independent paths, same number.', bn: 'দুই স্বাধীন-পথ, এক সংখ্যা।' },
      explanation: {
        en: 'Formula-math and bump-math agree to 1e-6: the derivative is correctly derived AND correctly coded. Disagreement would indict your code, never calculus.',
        bn: 'সূত্র-গণিত ও bump-গণিত ১e-৬-এ মেলে: অন্তরক সঠিক-উদ্ভূত ও সঠিক-কোডড। অমিল আপনার-কোডকে দোষী করত, ক্যালকুলাসকে কখনো নয়।',
      },
    },
    {
      id: 'bkp-ex-4',
      kind: 'predict',
      topic: 'lr5-fate',
      question: { en: 'LR=5: predict the tryit’s verdict line + explain in ML-L7 terms.', bn: 'LR=৫: tryit-রায় লাইন ভবিষ্যদ্বাণী + ML-পাঠ-৭ ভাষায় বোঝান।' },
      answer: '✗ ROSE 0.86 → 1.47: the step overshoots 50/50 down to p=0.06 — same divergence physics as ML-L7’s big LR.',
      accept: ['ROSE', 'overshoot', '50/50', '1.47', 'LR'],
      hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
      explanation: {
        en: 'Mean blame +0.27 × LR 5 = −1.34 jump: past the 50/50 minimum to p=0.06, loss 0.86→1.47. Bowls do not forgive oversized steps — in demos or billion-weight nets.',
        bn: 'গড়-দোষ +০.২৭ × LR ৫ = −১.৩৪ লাফ: ৫০/৫০-তলা পার p=০.০৬-এ, loss ০.৮৬→১.৪৭। বাটি বড়-ধাপ ক্ষমা করে না — demo বা কোটি-ওজন net-এ।',
      },
    },
  ],
  quiz: {
    id: 'backprop-training-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'bkpq1',
        kind: 'mcq',
        topic: 'loop-order',
        question: { en: 'Training loop order?', bn: 'Training loop ক্রম?' },
        options: [
          { en: 'Forward → loss → backward → update', bn: 'Forward → loss → backward → update' },
          { en: 'Backward → forward → loss → update', bn: 'Backward → forward → loss → update' },
          { en: 'Update → loss → forward → backward', bn: 'Update → forward → loss → backward' },
          { en: 'Loss → update → backward → forward', bn: 'Loss → update → backward → forward' },
        ],
        answer: 0,
        hint: { en: 'Predict, grade, blame, step.', bn: 'Predict, গ্রেড, দোষ, ধাপ।' },
        explanation: {
          en: 'You cannot blame before predicting, grade before forwarding, or step before blaming. Order is causality.',
          bn: 'Predict-আগে দোষ, forward-আগে গ্রেড, দোষ-আগে ধাপ অসম্ভব। ক্রমই কার্যকারণ।',
        },
      },
      {
        id: 'bkpq2',
        kind: 'mcq',
        topic: 'chain-meaning',
        question: { en: 'Layer receives blame B from the right, local slope s. Passes left…', bn: 'Layer ডান থেকে দোষ B, স্থানীয়-ঢাল s পায়। বামে পাঠায়…' },
        options: [
          { en: 'B × s', bn: 'B × s' },
          { en: 'B + s', bn: 'B + s' },
          { en: 'B ÷ s', bn: 'B ÷ s' },
          { en: 's only', bn: 'শুধু s' },
        ],
        answer: 0,
        hint: { en: 'Chain rule multiplies.', bn: 'Chain rule গুণ করে।' },
        explanation: {
          en: 'dL/d(left) = dL/d(right) × d(right)/d(left): blame chains by multiplication. This × is why 0.25-slopes vanish and 1-slopes survive.',
          bn: 'dL/d(বাম) = dL/d(ডান) × d(ডান)/d(বাম): দোষ গুণে শৃঙ্খলিত হয়। এই ×-এ ০.২৫-ঢাল অদৃশ্য হয়, ১-ঢাল টিকে।',
        },
      },
      {
        id: 'bkpq3',
        kind: 'mcq',
        topic: 'batch-why',
        question: { en: 'Batches average blame over rows. Why not one row at a time?', bn: 'Batch সারি-জুড়ে দোষ গড় করে। একবারে এক সারি নয় কেন?' },
        options: [
          { en: 'Single-row blame is noisy; averaging steadies steps + parallelizes', bn: 'এক-সারি দোষ noisy; গড় ধাপ স্থির + সমান্তরাল করে' },
          { en: 'Single rows are illegal', bn: 'এক-সারি বেআইনি' },
          { en: 'Batches remove the need for LR', bn: 'Batch LR-প্রয়োজন মুছে' },
          { en: 'No reason', bn: 'কারণ নেই' },
        ],
        answer: 0,
        hint: { en: 'Noise vs signal, times GPU width.', bn: 'Noise বনাম সংকেত, GPU-প্রস্থ গুণে।' },
        explanation: {
          en: 'One row’s blame jerks; 32 rows’ average points downhill truly — and GPUs compute 32 forwards as fast as 1. Stability AND speed, same trick.',
          bn: 'এক সারির-দোষ ঝাঁকায়; ৩২ সারির-গড় সত্যি-উতরাই দেখায় — আর GPU ৩২ forward ১-গতিতে গণনা করে। স্থিতি ও গতি, এক কৌশল।',
        },
      },
      {
        id: 'bkpq4',
        kind: 'predict',
        topic: 'autograd-role',
        question: { en: '“You write forward, frameworks backward.” State what YOU still own in training.', bn: '“আপনি forward লেখেন, ফ্রেমওয়ার্ক backward।” Training-এ আপনার-মালিকানা বলুন।' },
        answer: 'Architecture, loss, data, LR/schedule, batches: the setup — autograd only mechanizes blame.',
        accept: ['architecture', 'loss', 'data', 'LR', 'schedule', 'setup'],
        hint: { en: 'Autograd = blame machinery. Everything else = judgment.', bn: 'Autograd = দোষ-যন্ত্র। বাকি সব = বিচার।' },
        explanation: {
          en: 'Frameworks differentiate; humans decide WHAT to differentiate and HOW to step. The profession moved upstairs — setup judgment, curve reading, LR calls.',
          bn: 'ফ্রেমওয়ার্ক differentiate করে; মানুষ ঠিক করে কী differentiate, কীভাবে ধাপ। পেশা ওপরে উঠেছে — setup-বিচার, curve-পড়া, LR-সিদ্ধান্ত।',
        },
      },
    ],
  },
};