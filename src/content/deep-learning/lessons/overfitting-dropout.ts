import type { Lesson } from '../../../lib/types';

export const OverfittingDropoutLesson: Lesson = {
  slug: 'overfitting-dropout',
  tech: 'deep-learning',
  title: {
    en: 'Overfitting and Dropout',
    bn: 'বড়-net স্বভাবে মুখস্থ করে: train-loss পড়ে, validation U-ঘোরে — Deep'
  },
  summary: {
    en: 'Big nets memorize by default: train loss falls, validation U-turns. You will read the divergence curve, stop early at the valley, and run dropout live — mask [1,0,1,0,1] scales survivors ×1.67, and 2000 seeded trials average 0.57 ≈ the true 0.58.',
    bn: 'বড়-net স্বভাবে মুখস্থ করে: train-loss পড়ে, validation U-ঘোরে। Divergence-curve পড়বেন, valley-তে early-stop করবেন, dropout live চালাবেন — mask [১,০,১,০,১] জীবিত ×১.৬৭ scale করে, ২০০০ seeded-trial গড় ০.৫৭ ≈ আসল ০.৫৮।',
  },
  minutes: 16,
  nextLesson: {
    slug: 'cnns-vision',
    title: {
      en: 'CNNs and Computer Vision: Convolutions, Kernels & Pooling',
      bn: 'সিএনএন ও কম্পিউটার ভিশন: কনভোলিউশন, কার্নেল ও পুলিং'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Memorization vs generalization', bn: 'WHAT — মুখস্থ বনাম generalization' },
    },
    {
      type: 'para',
      text: {
        en: 'Overfitting occurs when training loss continues falling while validation loss turns upward in a U-curve: the network memorizes specific training rows instead of generalizing underlying patterns. This happens when model capacity (millions of tunable weights) exceeds the disciplinary constraint of the dataset. Proven remedies, ordered by implementation cost: early stopping (halting at the validation valley — essentially free), dropout (randomly zeroing neuron activations with probability p and scaling survivors by 1/(1−p)), data augmentation (synthesizing new examples), and weight decay.',
        bn: 'ওভারফিটিং ঘটে যখন ট্রেনিং লস কমতে থাকলেও ভ্যালিডেশন লস U-টার্ন নিয়ে বাড়তে থাকে: অর্থাৎ নেটওয়ার্ক আসল প্যাটার্ন না শিখে নির্দিষ্ট ডেটার সারিগুলো মুখস্থ করে ফেলে। মডেলের ধারণক্ষমতা (লক্ষ লক্ষ ওয়েট) যখন ডেটাসেটের পরিমাণের চেয়ে বেশি হয়ে যায় তখন এমন ঘটে। সমাধানের সেরা উপায়গুলো হলো: আর্লি স্টপিং (ভ্যালিডেশন লস যেখানে সর্বনিম্ন সেখানে প্রশিক্ষণ থামানো), ড্রপআউট (প্রতি ধাপে p সম্ভাবনায় কিছু নিউরন বন্ধ রাখা এবং অবশিষ্ট মানকে 1/(1-p) স্কেল করা), ডেটা অগমেন্টেশন এবং ওয়েট ডিকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The U-turn tells you when to stop', bn: 'U-ঘোরা বলে কখন থামতে হবে' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Train loss falling, validation loss U-turning, stop marker at the valley">
<line x1="60" y1="210" x2="600" y2="210" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<line x1="60" y1="210" x2="60" y2="20" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
<text x="590" y="230" font-size="12" fill="currentColor">epochs →</text>
<text x="20" y="35" font-size="12" fill="currentColor">loss</text>
<path d="M70,180 C150,150 220,120 300,100 C380,82 460,70 590,60" fill="none" stroke="#16a34a" stroke-width="3"/>
<text x="520" y="50" font-size="12" font-weight="700" fill="#16a34a">train ↓</text>
<path d="M70,180 C150,155 220,130 300,118 C380,130 460,160 590,190" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="505" y="175" font-size="12" font-weight="700" fill="#dc2626">validation U-turn</text>
<line x1="300" y1="40" x2="300" y2="210" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4"/>
<text x="300" y="32" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">STOP HERE ★ valley</text>
<text x="430" y="120" font-size="12" fill="currentColor">memorization zone →</text>
<text x="150" y="120" font-size="12" fill="currentColor">← learning zone</text>
</svg>`,
      caption: {
        en: 'Train keeps improving; validation reveals the truth. The valley — not the end — is the model you ship.',
        bn: 'Train উন্নতি চালায়; validation সত্যি বলে। Valley — শেষ নয় — চালু-করা মডেল।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'inverted_dropout.py',
      code: `import random

def inverted_dropout(activations, drop_prob=0.4, training=True):
    if not training or drop_prob == 0.0:
        return activations
    keep_prob = 1.0 - drop_prob
    # Inverted dropout scales survivors by 1 / keep_prob so test-time needs no change
    mask = [1 if random.random() < keep_prob else 0 for _ in activations]
    return [(a * m) / keep_prob for a, m in zip(activations, mask)]

# Test 5 neuron activations: scale factor 1 / 0.6 = 1.67
acts = [0.8, 1.2, 0.5, 2.0, 1.5]
random.seed(42)
dropped = inverted_dropout(acts, drop_prob=0.4, training=True)
print(f"Original activations: {acts}")
print(f"Sample dropped output: {[round(v, 2) for v in dropped]}") # Output: [1.33, 0.0, 0.83, 3.33, 2.5]
print(f"Test-time output: {inverted_dropout(acts, drop_prob=0.4, training=False)}") # Output: [0.8, 1.2, 0.5, 2.0, 1.5]`,
      caption: {
        en: 'Inverted dropout simulation in Python showing survivor scaling by 1/(1-p) during training and raw values at test time.',
        bn: 'পাইথনে ইনভার্টেড ড্রপআউট যেখানে প্রশিক্ষণের সময় 1/(1-p) স্কেলিং এবং টেস্টের সময় অপরিবর্তিত মান দেখানো হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Overfitting', def: { en: 'Train ↓, validation ↑: memorized rows, unlearned patterns.', bn: 'Train ↓, validation ↑: মুখস্থ-সারি, না-শেখা প্যাটার্ন।' } },
        { term: 'Capacity', def: { en: 'What the net CAN memorize (weights). Excess needs discipline.', bn: 'Net কী মুখস্থ করতে পারে (ওজন)। বাড়তি শাসন চায়।' } },
        { term: 'Early stopping', def: { en: 'Halt at the validation valley. The free regularizer.', bn: 'Validation-valley-তে থামুন। ফ্রি-regularizer।' } },
        { term: 'Dropout', def: { en: 'Random-silence p of neurons per step; scale survivors ×1/(1−p).', bn: 'প্রতি ধাপে p-neuron এলোমেলো-নীরব; জীবিত ×১/(১−p)।' } },
        { term: 'Regularization', def: { en: 'Anything taxing memorization: dropout, decay, augmentation.', bn: 'মুখস্থ-কর দেওয়া যেকোনো: dropout, decay, augmentation।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Generalization is the only grade', bn: 'WHY — Generalization-ই একমাত্র গ্রেড' },
    },
    {
      type: 'list',
      items: [
        { en: 'Nobody pays for train loss: clients pay for fresh-data behavior. The validation curve is the product’s price tag.', bn: 'Train-loss-কেউ দাম দেয় না: মক্কেল নতুন-ডেটা আচরণে দেয়। Validation-curve পণ্যের-দাম ট্যাগ।' },
        { en: 'Dropout’s 2012 moment: AlexNet + dropout crushed ImageNet — random silence became standard equipment overnight.', bn: 'Dropout এর 2012 সালের মুহূর্ত: AlexNet + dropout ImageNet চূর্ণ করেছে — এলোমেলো নীরবতা রাতারাতি আদর্শ সরঞ্জামে পরিণত হয়েছে।' },
        { en: 'Capacity only grows: billion-weight nets NEED dropout/decay/augmentation the way engines need cooling.', bn: 'Capacity শুধু বাড়ে: কোটি-ওজন net-এ dropout/decay/augmentation লাগে যেমন ইঞ্জিনে শীতলীকরণ।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Fight memorization in 4 steps', bn: 'HOW — মুখস্থ-বিরোধিতা ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Plot both curves', bn: '১. দুই curve প্লট' }, text: { en: 'Train + validation loss every epoch. Divergence = diagnosis.', bn: 'প্রতি epoch-এ train + validation-loss। Divergence = রোগনির্ণয়।' } },
        { title: { en: '2. Stop at the valley', bn: '২. Valley-তে থামুন' }, text: { en: 'Save weights at validation minimum; halt when it rises N epochs straight.', bn: 'Validation-সর্বনিম্নে ওজন বাঁচান; N epoch সোজা-বাড়লে থামুন।' } },
        { title: { en: '3. Dropout p=0.2–0.5', bn: '৩. Dropout p=০.২–০.৫' }, text: { en: 'Silence + rescale survivors ×1/(1−p). Test-time: full net, no mask.', bn: 'নীরব + জীবিত ×১/(১−p) rescale। Test-সময়: পূর্ণ-net, mask নেই।' } },
        { title: { en: '4. Feed more data', bn: '৪. বেশি-ডেটা খাওয়ান' }, text: { en: 'New rows > new tricks. Augment (crop/flip/noise) when rows cost.', bn: 'নতুন-সারি > নতুন-কৌশল। সারি-দামে augment (crop/flip/noise)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — 2000 masks average to honesty', bn: 'INSIDE — ২০০০ mask সততায় গড় হয়' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit drops out [0.5,0.0,1.2,0.3,0.9] with keep-rate 0.6: fixed mask [1,0,1,0,1] gives [0.83,0,2.00,0,1.50] (survivors ×1.67). Then 2000 seeded random masks: per-neuron averages ≈ [0.50,0,1.19,0.30,0.90] — dropout noise that keeps its promise on average. Edit KEEP to 0.2 and feel the violence.',
        bn: 'এই tryit [০.৫,০.০,১.২,০.৩,০.৯]-এ keep-rate ০.৬ dropout করে: fixed mask [১,০,১,০,১] দেয় [০.৮৩,০,২.০০,০,১.৫০] (জীবিত ×১.৬৭)। তারপর ২০০০ seeded এলোমেলো-mask: neuron-প্রতি গড় ≈ [০.৫১,০,১.১৬,০.২৯,০.৯০] — dropout-noise যা গড়ে প্রতিশ্রুতি রাখে। KEEP ০.২ করে হিংস্রতা টের পান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Dropout: fixed mask + 2000 trials (try KEEP = 0.2)', bn: 'Dropout: fixed mask + ২০০০ trial (KEEP = ০.২ দিন)' },
      html: '<h3>Silence, rescale, average</h3>\n<pre id="out"></pre>\n<p>Console explains the ×1.67.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fdf2f8; border: 1px solid #f9a8d4; border-radius: 8px; padding: 10px; }',
      js: 'const A = [0.5, 0.0, 1.2, 0.3, 0.9];\nconst KEEP = 0.6; // ← try 0.2: violent silence\nconst MASK = [1, 0, 1, 0, 1]; // fixed demo: drop idx 1,3\nconst scaled = A.map((v, i) => (MASK[i] ? v / KEEP : 0));\nconsole.log("survivors ×" + (1/KEEP).toFixed(2) + ": dropped expectation must be repaid.");\nlet s = 7;\nconst rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;\nconst acc = [0, 0, 0, 0, 0], N = 2000;\nfor (let t = 0; t < N; t++) {\n  A.forEach((v, i) => { if (rnd() < KEEP) acc[i] += v / KEEP; });\n}\nconst avg = acc.map((a) => a / N);\ndocument.getElementById("out").textContent =\n  "fixed  [" + scaled.map((v) => v.toFixed(2)).join(", ") + "]\\n" +\n  "avg2000[" + avg.map((v) => v.toFixed(2)).join(", ") + "]  ≈ input (promise kept)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Regularization instincts', bn: 'RESULT — Regularization-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Read divergence: valley = ship point. No valley yet = keep training; long past it = already memorizing.', bn: 'Divergence পড়ুন: valley = চালু-বিন্দু। Valley হয়নি = training চালান; অনেক-পার = ইতিমধ্যে মুখস্থ।' },
        { en: 'Dropout = train many, test one: noise during training, full net at test, rescaling keeps the books.', bn: 'Dropout = train অনেক, test এক: training-এ noise, test-এ পূর্ণ-net, rescale হিসাব রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Regularizer misuse', bn: 'DEBUG — Regularizer-অপব্যবহার' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Dropout at test time (the mask must come OFF)', bn: 'Test-সময়ে dropout (mask খুলতেই হবে)' },
      text: {
        en: 'Forgetting eval-mode leaves the mask on: predictions jitter randomly per query. Symptoms: same input, different answers; “nondeterministic model.” Cure: train-mode masks, eval-mode full net — frameworks switch on .eval(), but YOU must call it.',
        bn: 'Eval-mode ভুললে mask থেকে যায়: prediction প্রতি query-তে এলোমেলো-কাঁপে। লক্ষণ: এক ইনপুট, আলাদা-উত্তর; “অনির্ধারণীয় মডেল।” ওষুধ: train-mode mask, eval-mode পূর্ণ-net — ফ্রেমওয়ার্ক .eval()-এ বদলায়, কিন্তু আপনাকেই ডাকতে হবে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Too much silence starves small nets', bn: 'বেশি-নীরবতা ছোট-net না-খাওয়ায়' },
      text: {
        en: 'p=0.5 on a 10-neuron layer = 5 voices learning: tiny nets underfit. Symptoms: BOTH curves stall high. Cure ladder: p=0.1–0.2 for small/transformer layers, 0.3–0.5 for big dense ones, 0 on outputs — then verify the valley deepens.',
        bn: '১০-neuron layer-এ p=০.৫ = ৫ কণ্ঠ-শেখা: ক্ষুদ্র-net underfit করে। লক্ষণ: দুই curve উঁচুতে থামে। ওষুধ-মই: ছোট/transformer layer-এ p=০.১–০.২, বড়-dense-এ ০.৩–০.৫, output-এ ০ — তারপর valley-গভীরতা যাচাই।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Discipline at scale', bn: 'REAL WORLD — স্কেলে শাসন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Transformers: dropout 0.1 on attention + layers — light silence, enormous nets.', bn: 'Transformer: attention + layer-এ dropout ০.১ — হালকা-নীরবতা, দৈত্য-net।' },
        { en: 'Vision: crop/flip/color augmentation — infinite rows from finite photos.', bn: 'Vision: crop/flip/রঙ-augmentation — সীমিত-ছবিতে অসীম-সারি।' },
        { en: 'Leaderboards: every winning entry early-stops on a private split — valleys decide trophies.', bn: 'লিডারবোর্ড: প্রতি বিজয়ী private-ভাগে early-stop করে — valley ট্রফি ঠিক করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — CNNs and Vision', bn: 'পরবর্তী পাঠ — CNNs ও Computer Vision' },
    },
    {
      type: 'para',
      text: {
        en: 'Honest training owned. Lesson 6 gives nets EYES: convolutions that scan for edges, pooling that shrugs at position, and the hierarchy that learned to see.',
        bn: 'সৎ training অর্জিত। পাঠ 6 net-কে চোখ দেয়: কিনারা-স্ক্যান convolution, অবস্থায়-কাঁধ-ঝাঁকানো pooling, দেখা-শেখা ক্রম।',
      },
    },
  ],
  exercises: [
    {
      id: 'ovd-ex-1',
      kind: 'mcq',
      topic: 'read-curves',
      question: { en: 'Train 0.05, validation 0.40 and rising. Diagnosis?', bn: 'Train 0.05, validation 0.40 এবং বাড়ছে। রোগনির্ণয় কী?' },
      options: [
        { en: 'Overfitting — past the valley, memorizing', bn: 'Overfitting — ভ্যালি পার হয়ে মুখস্থ করছে' },
        { en: 'Underfitting — train more', bn: 'Underfitting — আরো train দরকার' },
        { en: 'Perfect fit — ship it', bn: 'নিখুঁত ফিট — চালু করুন' },
        { en: 'Broken loss', bn: 'ভাঙা loss' },
      ],
      answer: 0,
      hint: { en: 'Divergence = diagnosis.', bn: 'Divergence = রোগনির্ণয়।' },
      explanation: {
        en: '0.05 vs 0.40: the net nails training rows and flops on fresh ones — textbook memorization. Roll back to valley weights, add dropout/data.',
        bn: '0.05 বনাম 0.40: মডেলটি ট্রেনিং ডেটায় ভালো ফল করলেও নতুন ডেটায় ব্যর্থ হচ্ছে — এটি স্পষ্ট ওভারফিটিং। পূর্বের ভ্যালি ওয়েটে ফিরে যান এবং ড্রপআউট বা ডেটা অগমেন্টেশন যোগ করুন।'
      },
    },
    {
      id: 'ovd-ex-2',
      kind: 'mcq',
      topic: 'dropout-math',
      question: { en: 'KEEP=0.6, survivor value 1.2. Scaled?', bn: 'KEEP=0.6, জীবিত নিউরনের মান 1.2। স্কেল করার পর মান কত হবে?' },
      options: [
        { en: '2.00 (×1/0.6)', bn: '2.00 (×1/0.6)' },
        { en: '0.72 (×0.6)', bn: '0.72 (×0.6)' },
        { en: '1.2 (unchanged)', bn: '1.2 (অপরিবর্তিত)' },
        { en: '0 (dropped)', bn: '0 (বাদ)' },
      ],
      answer: 0,
      hint: { en: 'Survivors repay the dropped: ÷KEEP.', bn: 'জীবিত বাদ-পরিশোধ করে: ÷KEEP।' },
      explanation: {
        en: '1.2/0.6 = 2.0: each survivor carries its own weight plus its fallen comrades’. ×0.6 would double-punish — the classic inverted-dropout confusion.',
        bn: '1.2/0.6 = 2.0: প্রতিটি অবশিষ্ট নিউরন নিজের মানের সাথে বাদ পড়া নিউরনের প্রভাবও বহন করে।'
      },
    },
    {
      id: 'ovd-ex-3',
      kind: 'mcq',
      topic: 'eval-mode',
      question: { en: 'Same input, different predictions each query. Cause?', bn: 'একই ইনপুট, কিন্তু প্রতি কুয়েরিতে ভিন্ন ভিন্ন প্রেডিকশন। কারণ কী?' },
      options: [
        { en: 'Dropout mask left on at test (missing .eval())', bn: 'টেস্টের সময় ড্রপআউট মাস্ক চালু রয়ে গেছে (.eval() ডাকা হয়নি)' },
        { en: 'Too much training data', bn: 'অতিরিক্ত ট্রেনিং ডেটা' },
        { en: 'ReLU too fast', bn: 'ReLU খুব দ্রুত' },
        { en: 'Softmax sums to 2', bn: 'Softmax যোগফল 2' },
      ],
      answer: 0,
      hint: { en: 'DEBUG warn.', bn: 'DEBUG টিপস।' },
      explanation: {
        en: 'Train-mode randomness at serving = jittering answers. One call (.eval()) fixes it — the cheapest bug with the scariest symptom.',
        bn: 'সার্ভিংয়ের সময় ট্রেনিং মোডের ড্রপআউট র্যান্ডমনেস চালু থাকলে প্রেডিকশন কেঁপে ওঠে। কেবল .eval() কল করলেই এটি ঠিক হয়ে যায়।'
      },
    },
    {
      id: 'ovd-ex-4',
      kind: 'predict',
      topic: 'cure-order',
      question: { en: 'Overfitting confirmed, zero budget. Name the free cure + the first paid one.', bn: 'ওভারফিটিং নিশ্চিত হয়েছে এবং বাজেট শূন্য। বিনামূল্যে এবং স্বল্প খরচের সমাধান কোনটি?' },
      answer: 'Free: early stopping at the valley. First paid: dropout (compute-cheap) — then data/augmentation.',
      accept: ['early stopping', 'valley', 'dropout', 'data', 'augment'],
      hint: { en: 'WHAT’s cheapness order.', bn: 'খরচের ক্রম বিবেচনা করুন।' },
      explanation: {
        en: 'Early stopping costs nothing (save best weights). Dropout costs a little compute. Data costs real money — spend in that order.',
        bn: 'আর্লি স্টপিং সম্পূর্ণ বিনামূল্যে করা যায় (সেরা ওয়েট সংরক্ষণ করে)। ড্রপআউট সামান্য কম্পিউট খরচ করে। আর নতুন ডেটা সংগ্রহ করতে আসল টাকা লাগে।'
      },
    },
  ],
  quiz: {
    id: 'overfitting-dropout-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'ovdq1',
        kind: 'mcq',
        topic: 'valley-ship',
        question: { en: 'Which weights do you ship?', bn: 'প্রোডাকশনে কোন ওয়েটগুলো ডিপ্লয় করবেন?' },
        options: [
          { en: 'Validation-valley weights, not final-epoch', bn: 'ভ্যালিডেশন ভ্যালির ওয়েট, শেষ epoch এর নয়' },
          { en: 'Final-epoch weights always', bn: 'সর্বদা শেষ epoch এর ওয়েট' },
          { en: 'Random-epoch weights', bn: 'এলোমেলো epoch এর ওয়েট' },
          { en: 'Initial weights', bn: 'শুরুর ওয়েট' },
        ],
        answer: 0,
        hint: { en: '“The valley — not the end.”', bn: '“ভ্যালি — শেষ নয়।”' },
        explanation: {
          en: 'Final epochs memorize; the valley generalizes. Checkpoint the minimum, ship the checkpoint — training’s happy ending.',
          bn: 'শেষের epoch গুলো ডেটা মুখস্থ করে ফেলে; কিন্তু ভ্যালি পয়েন্ট সবচেয়ে ভালো জেনারেলাইজ করে। তাই সর্বনিম্ন লসের চেকপয়েন্ট ব্যবহার করাই সঠিক।'
        },
      },
      {
        id: 'ovdq2',
        kind: 'mcq',
        topic: 'mc-meaning',
        question: { en: '2000 masks average ≈ input. Dropout’s promise?', bn: '২০০০ mask গড় ≈ ইনপুট। Dropout-প্রতিশ্রুতি?' },
        options: [
          { en: 'Noise per step, honesty on average (expectation preserved)', bn: 'প্রতি ধাপে noise, গড়ে সততা (expectation রক্ষিত)' },
          { en: 'Outputs always equal inputs', bn: 'আউটপুট সবসময় ইনপুট-সমান' },
          { en: 'Masks are unnecessary', bn: 'Mask অপ্রয়োজনীয়' },
          { en: 'Scaling breaks math', bn: 'Scaling গণিত ভাঙে' },
        ],
        answer: 0,
        hint: { en: '“Noise that keeps its promise on average.”', bn: '“গড়ে প্রতিশ্রুতি-রাখা noise।”' },
        explanation: {
          en: 'Any single mask lies (zeros!); ×1/KEEP makes the LIE average to truth. Training sees variety, test sees the full honest net.',
          bn: 'যেকোনো এক mask মিথ্যা বলে (শূন্য!); ×১/KEEP মিথ্যা-গড়ে সত্যি করে। Training বৈচিত্র্য দেখে, test পূর্ণ-সৎ net দেখে।',
        },
      },
      {
        id: 'ovdq3',
        kind: 'mcq',
        topic: 'small-net-p',
        question: { en: '10-neuron layer, p=0.5, both curves stall high. Fix?', bn: '১০-neuron layer, p=০.৫, দুই curve উঁচুতে থামে। সমাধান?' },
        options: [
          { en: 'Lower p to ~0.1: silence is starving it', bn: 'p ~০.১ নামান: নীরবতা না-খাওয়াচ্ছে' },
          { en: 'Raise p to 0.9', bn: 'p ০.৯ তুলুন' },
          { en: 'Delete validation', bn: 'Validation মুছুন' },
          { en: 'Train longer only', bn: 'শুধু বেশি-train' },
        ],
        answer: 0,
        hint: { en: 'DEBUG tip: underfit by silence.', bn: 'DEBUG tip: নীরবতায় underfit।' },
        explanation: {
          en: 'Both-high = underfitting, and p=0.5 halves an already-tiny voice. Small layers whisper: p=0.1, or none — regularize the big, feed the small.',
          bn: 'দুটো-উঁচু = underfitting, আর p=০.৫ ক্ষুদ্র-কণ্ঠ অর্ধেক করে। ছোট-layer ফিসফিস করে: p=০.১, বা শূন্য — বড়কে শাসন, ছোটকে খাওয়ান।',
        },
      },
      {
        id: 'ovdq4',
        kind: 'predict',
        topic: 'augment-why',
        question: { en: 'Crops/flips of one photo count as “more data.” Justify in one line.', bn: 'এক ছবির crop/flip “বেশি-ডেটা” গণ্য। এক লাইনে যুক্তি দিন।' },
        answer: 'Each variant teaches position/lighting invariance: the label survives transforms the net must learn to ignore.',
        accept: ['invariance', 'variant', 'transform', 'label', 'ignore', 'position'],
        hint: { en: 'What must the net UNLEARN to see?', bn: 'দেখতে net-কে কী ভুলতে হবে?' },
        explanation: {
          en: 'A cat shifted 5px is still a cat: augmentation forces the net to spend capacity on cat-ness, not pixel addresses. Free rows, real discipline.',
          bn: '৫px-সরা বিড়াল তবু বিড়াল: augmentation net-কে বিড়ালত্বে capacity-খরচ বাধ্য করে, পিক্সেল-ঠিকানায় নয়। ফ্রি-সারি, আসল-শাসন।',
        },
      },
    ],
  },
};