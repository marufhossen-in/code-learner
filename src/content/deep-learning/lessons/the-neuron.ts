import type { Lesson } from '../../../lib/types';

export const TheNeuronLesson: Lesson = {
  slug: 'the-neuron',
  tech: 'deep-learning',
  title: {
    en: 'The Neuron: Beginner Overview to Neural Weights, Shifts, and Activations',
    bn: 'নিউরন: নিউরাল ওয়েট, শিফট ও অ্যাক্টিভেশনের সহজ সূচনা'
  },
  summary: {
    en: 'Deep learning’s atom: a weighted vote plus a bias, squeezed through an activation. You will hand-compute z = 1.2 → σ ≈ 0.77, learn why the bias is not optional, and see why smoothness (differentiability) is what makes neurons learnable where the old perceptron could only jump.',
    bn: 'Deep learning-এর পরমাণু: bias-সহ ওজন-ভোট, activation-এ চাপা। হাতে z = ১.২ → σ ≈ ০.৭৭ হিসাব করবেন, bias কেন ঐচ্ছিক-নয় জানবেন, আর দেখবেন মসৃণতা (differentiability) কেন neuron-কে শেখার-যোগ্য করে, যেখানে পুরনো perceptron শুধু লাফাতে পারত।',
  },
  minutes: 14,
  nextLesson: {
    slug: 'activations',
    title: {
      en: 'Activations: Sigmoid, Tanh, ReLU, and Softmax',
      bn: 'অ্যাক্টিভেশন: সিগময়েড, Tanh, ReLU এবং সফটম্যাক্স'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — A weighted vote that learns', bn: 'WHAT — শেখা ওজন-ভোট' },
    },
    {
      type: 'para',
      text: {
        en: 'A neuron performs three essential mathematical actions: it weighs each input by its corresponding parameter, shifts the overall vote with an additive bias, and squeezes the resulting sum through a continuous activation function. Formally, z = w₁x₁ + w₂x₂ + … + b, followed by ŷ = σ(z). While early perceptrons relied on an abrupt step function that jumped discontinuously from 0 to 1, modern deep learning architectures employ smooth, differentiable activation curves like sigmoid and ReLU. Because smooth curves maintain well-defined slopes across their domain, gradient descent algorithms can systematically update weights during training.',
        bn: 'একটি নিউরন মূলত তিনটি প্রধান কাজ সম্পন্ন করে: প্রতিটি ইনপুটকে তার সংশ্লিষ্ট ওয়েট দিয়ে গুণ করে ওজন নির্ধারণ করে, একটি যোগমূলক বায়াস দিয়ে পুরো যোগফলকে স্থানান্তরিত করে এবং প্রাপ্ত ফলাফলকে একটি মসৃণ অ্যাক্টিভেশন ফাংশনের মধ্য দিয়ে চালনা করে। গাণিতিকভাবে, z = w₁x₁ + w₂x₂ + … + b, এবং এরপর ŷ = σ(z)। প্রাথমিক যুগের পারসেপ্ট্রন যেখানে আকস্মিক স্টেপ ফাংশন ব্যবহার করে 0 থেকে 1 এ লাফিয়ে উঠত, আধুনিক ডিপ লার্নিং সেখানে সিগময়েড ও ReLU-এর মতো মসৃণ ও ডিফারেনশিয়েবল বক্ররেখা ব্যবহার করে। মসৃণ বক্ররেখার প্রতিটি বিন্দুতে সুনির্দিষ্ট ঢাল বিদ্যমান থাকায় গ্রেডিয়েন্ট ডিসেন্ট অ্যালগরিদম প্রশিক্ষণের সময় ওয়েটগুলোকে যথাযথভাবে হালনাগাদ করতে পারে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Anatomy of one neuron', bn: 'এক neuron-এর শারীরস্থান' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Three inputs with weights entering a sum circle, bias added, activation box, output">
<g font-size="13" font-weight="700" fill="currentColor" text-anchor="middle">
<text x="60" y="70">x₁=1</text>
<text x="60" y="125">x₂=0</text>
<text x="60" y="180">x₃=1</text>
<text x="175" y="62" fill="#4f46e5">w₁=0.5</text>
<text x="175" y="117" fill="#4f46e5">w₂=−0.2</text>
<text x="175" y="172" fill="#4f46e5">w₃=0.8</text>
</g>
<g stroke="#4f46e5" stroke-width="2">
<line x1="95" y1="65" x2="250" y2="100"/>
<line x1="95" y1="122" x2="250" y2="118"/>
<line x1="95" y1="177" x2="250" y2="136"/>
</g>
<circle cx="290" cy="118" r="38" fill="#4f46e5" opacity="0.14" stroke="#4f46e5" stroke-width="2.5"/>
<text x="290" y="112" text-anchor="middle" font-size="22" font-weight="800" fill="currentColor">Σ</text>
<text x="290" y="134" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">+ b=−0.1</text>
<line x1="328" y1="118" x2="380" y2="118" stroke="currentColor" stroke-width="2.5"/>
<text x="354" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">z=1.2</text>
<rect x="380" y="88" width="110" height="60" rx="10" fill="#16a34a" opacity="0.14" stroke="#16a34a" stroke-width="2.5"/>
<text x="435" y="112" text-anchor="middle" font-size="15" font-weight="800" fill="currentColor">σ squeeze</text>
<text x="435" y="132" text-anchor="middle" font-size="12" fill="currentColor">smooth, not step</text>
<line x1="490" y1="118" x2="545" y2="118" stroke="currentColor" stroke-width="2.5"/>
<text x="595" y="112" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">ŷ≈0.77</text>
<text x="595" y="132" text-anchor="middle" font-size="12" fill="currentColor">77% yes</text>
<text x="320" y="205" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">weigh → shift → squeeze: the only three moves any neuron ever makes</text>
</svg>`,
      caption: {
        en: 'Follow the numbers: 1×0.5 + 0×(−0.2) + 1×0.8 − 0.1 = 1.2, squeezed to 0.77. The tryit below runs this live.',
        bn: 'সংখ্যা অনুসরণ করুন: ১×০.৫ + ০×(−০.২) + ১×০.৮ − ০.১ = ১.২, চেপে ০.৭৭। নিচের tryit এটা live চালায়।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'neuron_forward.py',
      code: `import math

def sigmoid(z):
    return 1.0 / (1.0 + math.exp(-z))

# 3 input features, 3 synaptic weights, and 1 bias term
x = [1.0, 0.0, 1.0]
w = [0.5, -0.2, 0.8]
b = -0.1

# Compute weighted sum z = w1*x1 + w2*x2 + w3*x3 + b
z = sum(xi * wi for xi, wi in zip(x, w)) + b
y_hat = sigmoid(z)

print(f"Pre-activation sum z: {z:.2f}")       # Output: 1.20
print(f"Activation output y_hat: {y_hat:.4f}") # Output: 0.7685`,
      caption: {
        en: 'Feedforward neuron computation in pure Python showing pre-activation z = 1.20 and sigmoid output 0.77.',
        bn: 'পাইথনে নিউরন ফিডফরোয়ার্ড গণনা যেখানে প্রি-অ্যাক্টিভেশন z = 1.20 এবং সিগময়েড আউটপুট 0.77 প্রদর্শিত হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Neuron', def: { en: 'Weigh + shift + squeeze: deep learning’s atom.', bn: 'ওজন + সরানো + চাপা: deep learning-এর পরমাণু।' } },
        { term: 'Weights', def: { en: 'Per-input loudness knobs. Learning = tuning them.', bn: 'প্রতি-ইনপুট জোর-knob। শেখা = এগুলো ঠিক করা।' } },
        { term: 'Bias', def: { en: 'The free shift: votes without needing any input.', bn: 'ফ্রি-সরানো: ইনপুট-ছাড়াই ভোট।' } },
        { term: 'Weighted sum (z)', def: { en: 'w·x + b: the vote before squeezing.', bn: 'w·x + b: চাপার-আগে ভোট।' } },
        { term: 'Activation (σ)', def: { en: 'The squeeze: smooth curve turning votes into outputs.', bn: 'চাপা: ভোট-আউটপুটে বদলানো মসৃণ-বক্র।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Trillions of these run the world', bn: 'WHY — কোটি-এই পৃথিবী চালায়' },
    },
    {
      type: 'list',
      items: [
        { en: 'One neuron is trivial; a billion tuned together translate languages and drive cars. Depth starts here — every big model is neurons all the way down.', bn: 'এক neuron তুচ্ছ; একসাথে-ঠিক কোটি ভাষা অনুবাদ করে, গাড়ি চালায়। গভীরতা এখানে শুরু — প্রতি বড়-মডেল নিচে-শুধু neuron।' },
        { en: 'GPUs are neuron factories: the SAME weigh-shift-squeeze, parallelized millions-wide. Learn one neuron and you understand what the hardware accelerates.', bn: 'GPU neuron-কারখানা: একই ওজন-সরানো-চাপা, কোটি-সমান্তরাল। এক neuron শিখুন, হার্ডওয়্যার কী ত্বরায় বুঝবেন।' },
        { en: 'Smoothness is the unlock: slopes let gradients flow, gradients let weights learn. The step-function past could vote; only the smooth present learns.', bn: 'মসৃণতা চাবি: ঢালে gradient বয়, gradient-এ ওজন শেখে। ধাপ-অতীত ভোট দিতে পারত; শুধু মসৃণ-বর্তমান শেখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Run a neuron in 4 steps', bn: 'HOW — Neuron চালান ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Weigh each input', bn: '১. প্রতি ইনপুট ওজন' }, text: { en: 'Multiply: 1×0.5, 0×(−0.2), 1×0.8. Silent inputs (0) vanish no matter their weight.', bn: 'গুণ করুন: ১×০.৫, ০×(−০.২), ১×০.৮। নীরব-ইনপুট (০) ওজন-যাইহোক উধাও।' } },
        { title: { en: '2. Add the bias', bn: '২. Bias যোগ' }, text: { en: 'Sum + (−0.1) = 1.2. The neuron’s standing vote, input or none.', bn: 'যোগ + (−০.১) = ১.২। ইনপুট-থাক না-থাক, neuron-এর স্থায়ী-ভোট।' } },
        { title: { en: '3. Squeeze smoothly', bn: '৩. মসৃণ-চাপা' }, text: { en: 'σ(1.2) = 1/(1+e^−1.2) ≈ 0.77. No jump — 1.19 and 1.21 give neighbors.', bn: 'σ(১.২) = ১/(১+e^−১.২) ≈ ০.৭৭। লাফ নেই — ১.১৯ ও ১.২১ প্রতিবেশী দেয়।' } },
        { title: { en: '4. Read the output', bn: '৪. আউটপুট পড়ুন' }, text: { en: '0.77 = “77% yes.” Next neuron downstream treats it as one input.', bn: '০.৭৭ = “৭৭% হ্যাঁ।” নিচের পরের-neuron এটা এক ইনপুট ধরে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — z = 1.2 becomes 0.77, live', bn: 'INSIDE — z = ১.২ ০.৭৭ হয়, live' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit runs the diagram’s neuron: x=[1,0,1], w=[0.5,−0.2,0.8], b=−0.1 → z=1.2 → σ≈0.77. Edit any weight and re-run: watch the output glide (never jump) — that glide is the smoothness learning needs. Set x₂=1 to wake the sleeping input and feel w₂’s negative voice.',
        bn: 'এই tryit diagram-neuron চালায়: x=[১,০,১], w=[০.৫,−০.২,০.৮], b=−০.১ → z=১.২ → σ≈০.৭৭। যেকোনো ওজন বদলে আবার চালান: আউটপুট পিছলানো দেখুন (লাফ কখনো নয়) — ওই পিছলানোই শেখার-লাগা মসৃণতা। x₂=১ করে ঘুমন্ত-ইনপুট জাগান, w₂-এর নেতিবাচক-কণ্ঠ টের পান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'One neuron, live (edit weights, press Run)', bn: 'এক neuron, live (ওজন বদলে Run)' },
      html: '<h3>z → σ(z)</h3>\n<pre id="out"></pre>\n<p>Console narrates each move.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 10px; }',
      js: 'const X = [1, 0, 1];          // ← try [1,1,1] to wake x2\nconst W = [0.5, -0.2, 0.8];  // ← edit any weight\nconst B = -0.1;              // ← the standing vote\nconst sig = (z) => 1 / (1 + Math.exp(-z));\nlet z = B;\nX.forEach((x, i) => { z += x * W[i]; });\nconst y = sig(z);\nconsole.log("WEIGH: " + X.map((x, i) => x + "×" + W[i]).join(" + "));\nconsole.log("SHIFT: sum + (" + B + ") = " + z.toFixed(2));\nconsole.log("SQUEEZE: σ(" + z.toFixed(2) + ") = " + y.toFixed(2));\ndocument.getElementById("out").textContent =\n  "z = " + z.toFixed(2) + "  →  ŷ = " + y.toFixed(2) + "  (" + (y * 100).toFixed(0) + "% yes)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Neuron instincts', bn: 'RESULT — Neuron-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Hand-run any neuron: weigh, shift, squeeze. z=1.2 → σ≈0.77 is now muscle memory.', bn: 'যেকোনো neuron হাতে চালান: ওজন, সরানো, চাপা। z=১.২ → σ≈০.৭৭ এখন পেশি-স্মৃতি।' },
        { en: 'Smoothness is learnability: jumps have no slopes, slopes teach weights.', bn: 'মসৃণতা শেখার-যোগ্যতা: লাফে ঢাল নেই, ঢাল ওজন শেখায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Small parts, big myths', bn: 'DEBUG — ছোট-যন্ত্রাংশ, বড়-ভ্রান্তি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“Bias is optional garnish” (it is the standing vote)', bn: '“Bias ঐচ্ছিক-সাজ” (এটা স্থায়ী-ভোট)' },
      text: {
        en: 'Without bias, silent inputs (all zeros) force output σ(0)=0.5 — the neuron can never default to “no.” Symptoms: models stuck near 0.5 on sparse data. Cure: always keep the bias; watch it learn the base rate (mostly-negative data → negative bias).',
        bn: 'Bias-ছাড়া নীরব-ইনপুট (সব শূন্য) আউটপুট σ(০)=০.৫ বাধ্য করে — neuron কখনো “না”-default পারে না। লক্ষণ: sparse-ডেটায় মডেল ০.৫-কাছে আটকে। ওষুধ: bias সবসময় রাখুন; base rate শিখতে দেখুন (বেশিরভাগ-নেতিবাচক ডেটা → নেতিবাচক-bias)।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Zero input ≠ zero influence (check the weight’s voice)', bn: 'শূন্য-ইনপুট ≠ শূন্য-প্রভাব (ওজনের-কণ্ঠ দেখুন)' },
      text: {
        en: 'x₂=0 killed w₂=−0.2 this run — but flip x₂ to 1 and the SAME weight drags z down 0.2. Beginners read weights as importance; professionals read weight×input as voice. The tryit’s [1,1,1] experiment proves it in one click.',
        bn: 'x₂=০ এই চালানে w₂=−০.২ মেরেছে — কিন্তু x₂=১ করুন, একই ওজন z ০.২ নামায়। Beginner ওজন-গুরুত্ব পড়ে; পেশাদার ওজন×ইনপুট-কণ্ঠ পড়ে। Tryit-এর [১,১,১] পরীক্ষা এক ক্লিকে প্রমাণ করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Lone neurons at work', bn: 'REAL WORLD — কর্মরত একা-neuron' },
    },
    {
      type: 'list',
      items: [
        { en: 'Logistic regression IS one sigmoid neuron: Lesson 2 of machine-learning was secretly this lesson.', bn: 'Logistic regression এক sigmoid-neuron-ই: machine-learning পাঠ 2 গোপনে এই পাঠ ছিল।' },
        { en: 'Smart-thermostat triggers (“heat if cold AND evening”) ship as single neurons with hand-set weights.', bn: 'স্মার্ট-থার্মোস্ট্যাট trigger (“ঠান্ডা AND সন্ধ্যা হলে গরম”) হাতে-বসা ওজন-এক neuron-এ চালু।' },
        { en: 'Every output head of every giant net is one neuron per class — the atom never retires.', bn: 'প্রতি দৈত্য-net-এর প্রতি output-head শ্রেণি-প্রতি এক neuron — পরমাণু কখনো অবসর নেয় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Activations', bn: 'পরবর্তী পাঠ — Activations' },
    },
    {
      type: 'para',
      text: {
        en: 'One neuron runs. Lesson 2 opens the squeeze-box: sigmoid, tanh, ReLU, softmax — four curves, four personalities — and the reason stacking linear neurons without them achieves exactly nothing.',
        bn: 'এক neuron চলে। পাঠ 2 চাপা-বাক্স খোলে: sigmoid, tanh, ReLU, softmax — চার বক্র, চার ব্যক্তিত্ব — আর কেন এগুলো-ছাড়া linear-neuron স্তূপে ঠিক শূন্যই হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'nrn-ex-1',
      kind: 'mcq',
      topic: 'hand-run',
      question: {
        en: 'Given input vector x = [1, 0, 1], weight vector w = [0.5, -0.2, 0.8], and bias b = -0.1, what is the resulting pre-activation sum z?',
        bn: 'ইনপুট ভেক্টর x = [1, 0, 1], ওয়েট ভেক্টর w = [0.5, -0.2, 0.8] এবং বায়াস b = -0.1 দেওয়া থাকলে প্রি-অ্যাক্টিভেশন যোগফল z এর মান কত হবে?'
      },
      options: [
        { en: '1.2 (0.5 + 0 + 0.8 − 0.1)', bn: '১.২ (০.৫ + ০ + ০.৮ − ০.১)' },
        { en: '1.3 (forgot the bias)', bn: '১.৩ (bias ভুলে)' },
        { en: '0.5 (first input only)', bn: '০.৫ (শুধু প্রথম-ইনপুট)' },
        { en: '0.77 (that is σ, not z)', bn: '০.৭৭ (ওটা σ, z নয়)' },
      ],
      answer: 0,
      hint: { en: 'Silent x₂ contributes 0×(−0.2)=0 — then add bias.', bn: 'নীরব x₂ দেয় ০×(−০.২)=০ — তারপর bias যোগ।' },
      explanation: {
        en: '0.5 + 0 + 0.8 = 1.3, minus 0.1 = 1.2. Forgetting bias (1.3) and confusing z with σ (0.77) are the two classic slips — now immunized.',
        bn: '০.৫ + ০ + ০.৮ = ১.৩, বিয়োগ ০.১ = ১.২। bias-ভোলা (১.৩) আর z-σ গুলানো (০.৭৭) দুই চিরায়ত-পিছলানো — এখন টিকা-পাওয়া।',
      },
    },
    {
      id: 'nrn-ex-2',
      kind: 'mcq',
      topic: 'bias-role',
      question: { en: 'All inputs are 0 and b=−2. Output?', bn: 'সব ইনপুট ০, b=−২। আউটপুট?' },
      options: [
        { en: 'σ(−2) ≈ 0.12 — the neuron defaults to “no”', bn: 'σ(−২) ≈ ০.১২ — neuron “না”-default করে' },
        { en: '0 exactly — no input, no output', bn: 'ঠিক ০ — ইনপুট নেই, আউটপুট নেই' },
        { en: 'σ(0) = 0.5 — bias ignored', bn: 'σ(০) = ০.৫ — bias উপেক্ষিত' },
        { en: 'Undefined', bn: 'অসংজ্ঞায়িত' },
      ],
      answer: 0,
      hint: { en: 'z = 0 + b. The standing vote stands alone.', bn: 'z = ০ + b। স্থায়ী-ভোট একা দাঁড়ায়।' },
      explanation: {
        en: 'z = −2 → σ ≈ 0.12. This is the bias’s entire job: a learned default. Negative bias = guilty-until-inputs-prove-otherwise.',
        bn: 'z = −২ → σ ≈ ০.১২। এটাই bias-এর পুরো-কাজ: শেখা-default। নেতিবাচক-bias = ইনপুট-প্রমাণ না-করা পর্যন্ত দোষী।',
      },
    },
    {
      id: 'nrn-ex-3',
      kind: 'mcq',
      topic: 'smooth-why',
      question: { en: 'Why must the squeeze be smooth (not a step)?', bn: 'চাপা মসৃণ হতেই হবে কেন (ধাপ নয়)?' },
      options: [
        { en: 'Steps have no slopes; gradient descent needs slopes to learn', bn: 'ধাপে ঢাল নেই; gradient descent-এ শিখতে ঢাল লাগে' },
        { en: 'Steps are too fast', bn: 'ধাপ বেশি দ্রুত' },
        { en: 'Smooth curves look prettier', bn: 'মসৃণ-বক্র সুন্দর দেখায়' },
        { en: 'No reason — fashion', bn: 'কারণ নেই — ফ্যাশন' },
      ],
      answer: 0,
      hint: { en: '“Jumps have no slopes.”', bn: '“লাফে ঢাল নেই।”' },
      explanation: {
        en: 'A step’s slope is 0 everywhere (flat) and infinite at the jump — gradient descent gets “move nowhere” or “move infinitely.” Smooth curves whisper a usable slope at every point.',
        bn: 'ধাপের-ঢাল সর্বত্র ০ (সমতল), লাফে অসীম — gradient descent পায় “কোথাও যেও না” বা “অসীম যাও।” মসৃণ-বক্র প্রতি বিন্দুতে ব্যবহারযোগ্য-ঢাল ফিসফিস করে।',
      },
    },
    {
      id: 'nrn-ex-4',
      kind: 'predict',
      topic: 'voice-read',
      question: { en: 'x₂ flips 0→1 with w₂=−0.2. State z’s change + the lesson in one line.', bn: 'x₂ ০→১ হয়, w₂=−০.২। z-বদল + শিক্ষা এক লাইনে বলুন।' },
      answer: 'z falls 0.2 (1.2 → 1.0): voice = weight×input, never weight alone.',
      accept: ['0.2', 'falls', '1.0', 'weight', 'input', 'voice'],
      hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
      explanation: {
        en: 'New z = 0.5 − 0.2 + 0.8 − 0.1 = 1.0. The weight never changed — its VOICE did. Read weight×input, always.',
        bn: 'নতুন z = ০.৫ − ০.২ + ০.৮ − ০.১ = ১.০। ওজন বদলায়নি — কণ্ঠ বদলেছে। সবসময় ওজন×ইনপুট পড়ুন।',
      },
    },
  ],
  quiz: {
    id: 'the-neuron-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'nrnq1',
        kind: 'mcq',
        topic: 'three-moves',
        question: { en: 'A neuron’s three moves in order?', bn: 'Neuron-এর তিন চাল ক্রমে?' },
        options: [
          { en: 'Weigh → shift (bias) → squeeze (activation)', bn: 'ওজন → সরানো (bias) → চাপা (activation)' },
          { en: 'Squeeze → weigh → shift', bn: 'চাপা → ওজন → সরানো' },
          { en: 'Shift → squeeze → weigh', bn: 'সরানো → চাপা → ওজন' },
          { en: 'Vote → sleep → repeat', bn: 'ভোট → ঘুম → আবার' },
        ],
        answer: 0,
        hint: { en: 'Diagram, left to right.', bn: 'Diagram, বাম থেকে ডান।' },
        explanation: {
          en: 'Inputs get weighed, the sum gets shifted by bias, the result gets squeezed. Every neuron, every net, forever.',
          bn: 'ইনপুট ওজন পায়, যোগ bias-সরানো পায়, ফল চাপা পায়। প্রতি neuron, প্রতি net, চিরকাল।',
        },
      },
      {
        id: 'nrnq2',
        kind: 'mcq',
        topic: 'lr-secret',
        question: { en: 'Logistic regression relates to one neuron how?', bn: 'Logistic regression এক neuron-এর কী?' },
        options: [
          { en: 'It IS one sigmoid neuron (w·x+b, then σ)', bn: 'এটা এক sigmoid-neuron-ই (w·x+b, তারপর σ)' },
          { en: 'It is fifty neurons', bn: 'এটা পঞ্চাশ neuron' },
          { en: 'Unrelated — different math', bn: 'সম্পর্কহীন — আলাদা গণিত' },
          { en: 'It is a decision tree', bn: 'এটা decision tree' },
        ],
        answer: 0,
        hint: { en: 'REAL WORLD #1.', bn: 'REAL WORLD #১।' },
        explanation: {
          en: 'Same formula, same sigmoid: machine-learning L2 was deep-learning L1 wearing a trench coat. You have known neurons for a whole hub.',
          bn: 'একই সূত্র, একই sigmoid: machine-learning পাঠ-২ trench coat-পরা deep-learning পাঠ-১ ছিল। পুরো-hub ধরে neuron চেনেন।',
        },
      },
      {
        id: 'nrnq3',
        kind: 'mcq',
        topic: 'sparse-trap',
        question: { en: 'No-bias neuron, all-zero inputs. Output always?', bn: 'Bias-হীন neuron, সব-শূন্য ইনপুট। আউটপুট সবসময়?' },
        options: [
          { en: 'σ(0) = 0.5 — cannot default either way', bn: 'σ(০) = ০.৫ — কোনোদিকে default পারে না' },
          { en: '0', bn: '০' },
          { en: '1', bn: '১' },
          { en: 'Random', bn: 'এলোমেলো' },
        ],
        answer: 0,
        hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
        explanation: {
          en: 'z = 0 with nothing to shift it: σ(0) = 0.5 forever. Sparse data + no bias = a coin flip that cannot learn better.',
          bn: 'z = ০, সরানোর কিছু নেই: σ(০) = ০.৫ চিরকাল। Sparse-ডেটা + bias-নেই = মুদ্রা-টস যা ভালো শিখতে পারে না।',
        },
      },
      {
        id: 'nrnq4',
        kind: 'predict',
        topic: 'gpu-link',
        question: { en: '“GPUs are neuron factories” — explain the link in one line.', bn: '“GPU neuron-কারখানা” — এক লাইনে যোগ বলুন।' },
        answer: 'One neuron is weigh-shift-squeeze arithmetic; GPUs run millions of such identical arithmetics in parallel.',
        accept: ['parallel', 'millions', 'arithmetic', 'same', 'weigh'],
        hint: { en: 'WHY #2.', bn: 'WHY #২।' },
        explanation: {
          en: 'Neurons are embarrassingly parallel: same tiny math, independent data. That match — not magic — is why deep learning waited for graphics cards.',
          bn: 'Neuron লজ্জাজনক-সমান্তরাল: একই ক্ষুদ্র-গণিত, স্বাধীন-ডেটা। ওই মিল — জাদু নয় — এজন্য deep learning গ্রাফিক্স-কার্ডের অপেক্ষা করেছে।',
        },
      },
    ],
  },
};