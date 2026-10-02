import type { Lesson } from '../../../lib/types';

export const ActivationsLesson: Lesson = {
  slug: 'activations',
  tech: 'deep-learning',
  title: {
    en: 'Activations',
    bn: 'চাপা-বাক্স খোলা: sigmoid, tanh, ReLU, softmax — Deep Learning'
  },
  summary: {
    en: 'The squeeze-box opened: sigmoid, tanh, ReLU, softmax — four curves, four personalities. You will run all four live on z = −3..3, watch sigmoid saturate and ReLU kill negatives, and learn the sentence that justifies all of deep learning: stacked linear layers collapse to one line; activations stop the collapse.',
    bn: 'চাপা-বাক্স খোলা: sigmoid, tanh, ReLU, softmax — চার বক্র, চার ব্যক্তিত্ব। z = −৩..৩-তে চারটাই live চালাবেন, sigmoid-সম্পৃক্তি ও ReLU-নেতিবাচক হত্যা দেখবেন, আর সেই বাক্য শিখবেন যা সব deep learning-কে ন্যায্য করে: স্তূপ-linear layer এক রেখায় ধসে; activation ধস থামায়।',
  },
  minutes: 15,
  nextLesson: {
    slug: 'networks-forward',
    title: {
      en: 'Networks Forward: Multi-Layer Perceptrons and Forward Passes',
      bn: 'নেটওয়ার্ক ফরোয়ার্ড: মাল্টি-লেয়ার পারসেপ্ট্রন ও ফরোয়ার্ড পাস'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Four squeezes, one job', bn: 'WHAT — চার চাপা, এক কাজ' },
    },
    {
      type: 'para',
      text: {
        en: 'Every activation bends the neuron’s vote — that bend is the only thing stopping a 100-layer net from collapsing into one line (line-after-line is still a line). Sigmoid squeezes to 0–1 (probabilities, but saturates: past ±3 it barely moves, gradients starve). Tanh squeezes to −1..1 (zero-centered, same saturation disease). ReLU keeps positives and murders negatives — max(0,z) (cheap, gradient 1 when alive; dead forever if pushed negative with no rescue). Softmax turns a raw scoreboard into probabilities that sum to 1 (the multi-class head).',
        bn: 'প্রতি activation neuron-ভোট বাঁকায় — ওই বাঁকই একমাত্র জিনিস যা 100-layer net-কে এক রেখায় ধসা থামায় (রেখার-পর-রেখা তবু রেখা)। Sigmoid 0–1-এ চাপে (probability, কিন্তু সম্পৃক্ত হয়: ±3 এর বাইরে নড়ে না, gradient না-খেয়ে থাকে)। Tanh -1..1-এ চাপে (শূন্য-কেন্দ্রিক, একই সম্পৃক্তি-রোগ)। ReLU ধনাত্মক রাখে, নেতিবাচক হত্যা করে — max(0,z) (সস্তা, বাঁচলে gradient 1; উদ্ধার-ছাড়া নেতিবাচকে ঠেললে চিরতরে মৃত)। Softmax স্কোরবোর্ড-কে যোগফল 1 probability-তে বদলায় (multi-class head)।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The four personalities side by side', bn: 'পাশাপাশি চার ব্যক্তিত্ব' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Sigmoid, tanh, ReLU curves and softmax bars">
<g font-size="12" font-weight="800" fill="currentColor" text-anchor="middle">
<text x="80" y="20">sigmoid: 0–1</text>
<text x="240" y="20">tanh: −1..1</text>
<text x="400" y="20">ReLU: max(0,z)</text>
<text x="555" y="20">softmax: sums to 1</text>
</g>
<g stroke="currentColor" stroke-width="1" opacity="0.4">
<line x1="20" y1="130" x2="140" y2="130"/><line x1="80" y1="180" x2="80" y2="40"/>
<line x1="180" y1="130" x2="300" y2="130"/><line x1="240" y1="180" x2="240" y2="40"/>
<line x1="340" y1="170" x2="460" y2="170"/><line x1="400" y1="180" x2="400" y2="40"/>
</g>
<path d="M25,170 C55,170 65,95 80,95 C95,95 105,60 135,60" fill="none" stroke="#4f46e5" stroke-width="3"/>
<path d="M185,168 C215,168 225,92 240,92 C255,92 265,56 295,56" fill="none" stroke="#0ea5e9" stroke-width="3"/>
<line x1="345" y1="170" x2="400" y2="170" stroke="#16a34a" stroke-width="3"/>
<line x1="400" y1="170" x2="455" y2="55" stroke="#16a34a" stroke-width="3"/>
<circle cx="400" cy="170" r="4" fill="#16a34a"/>
<g>
<rect x="505" y="120" width="26" height="50" rx="3" fill="#f59e0b" opacity="0.8"/>
<rect x="535" y="70" width="26" height="100" rx="3" fill="#f59e0b" opacity="0.8"/>
<rect x="565" y="140" width="26" height="30" rx="3" fill="#f59e0b" opacity="0.8"/>
</g>
<g font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">
<text x="80" y="200">saturates ±3</text>
<text x="240" y="200">centered 0</text>
<text x="400" y="200">kills z&lt;0</text>
<text x="555" y="200">0.2 + 0.7 + 0.1</text>
</g>
</svg>`,
      caption: {
        en: 'Curves bend votes; ReLU bends with a corner; softmax bends a whole scoreboard at once.',
        bn: 'বক্র ভোট বাঁকায়; ReLU কোণায় বাঁকায়; softmax পুরো-স্কোরবোর্ড একসাথে বাঁকায়।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'activation_functions.py',
      code: `import math

def sigmoid(z):
    return 1.0 / (1.0 + math.exp(-z))

def relu(z):
    return max(0.0, z)

def softmax(scores):
    exp_scores = [math.exp(s) for s in scores]
    total = sum(exp_scores)
    return [s / total for s in exp_scores]

# Test activations on representative inputs
print(f"Sigmoid(0.0): {sigmoid(0.0):.4f}") # Output: 0.5000
print(f"ReLU(-2.5): {relu(-2.5):.1f}")     # Output: 0.0
print(f"ReLU(3.2): {relu(3.2):.1f}")       # Output: 3.2

# Multi-class output layer with softmax
probs = softmax([2.0, 1.0, 0.1])
print(f"Softmax probs: {[round(p, 2) for p in probs]}") # Output: [0.66, 0.24, 0.1]
print(f"Sum of probabilities: {sum(probs):.1f}")        # Output: 1.0`,
      caption: {
        en: 'Implementation of standard activation functions in Python showing non-linear mappings and sum-to-one softmax probabilities.',
        bn: 'পাইথনে আদর্শ অ্যাক্টিভেশন ফাংশনসমূহের বাস্তবায়ন যেখানে নন-লিনিয়ার ম্যাপিং এবং মোট 1 যোগফলের সফটম্যাক্স সম্ভাব্যতা দেখানো হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Sigmoid', def: { en: 'S-curve to 0–1. Binary probabilities; saturates.', bn: '০–১-এ S-বক্র। বাইনারি-probability; সম্পৃক্ত হয়।' } },
        { term: 'Tanh', def: { en: 'S-curve to −1..1. Zero-centered sigmoid’s sibling.', bn: '−১..১-এ S-বক্র। শূন্য-কেন্দ্রিক sigmoid-ভাই।' } },
        { term: 'ReLU', def: { en: 'max(0,z). Cheap, deep-era default; can die.', bn: 'max(০,z)। সস্তা, deep-যুগ default; মরতে পারে।' } },
        { term: 'Softmax', def: { en: 'Scores → probabilities summing to 1. Multi-class head.', bn: 'স্কোর → যোগ-১ probability। Multi-class head।' } },
        { term: 'Saturation', def: { en: 'Flat curve ends: big z, ~zero slope, starved gradients.', bn: 'সমতল বক্র-প্রান্ত: বড়-z, ~শূন্য-ঢাল, না-খাওয়া gradient।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The bend is the power', bn: 'WHY — বাঁকই শক্তি' },
    },
    {
      type: 'list',
      items: [
        { en: 'No bend, no depth: ten linear layers multiply into ONE matrix — the net learns lines, expensively. Every curve in this lesson buys genuine depth.', bn: 'বাঁক নেই, গভীরতা নেই: দশ linear layer এক matrix-এ গুণ হয় — net দামে-রেখা শেখে। এই পাঠের প্রতি বক্র আসল-গভীরতা কেনে।' },
        { en: 'ReLU unlocked the 2010s: one comparison (z>0?) replaced expensive exponentials, training deep vision nets 6× faster overnight.', bn: 'ReLU ২০১০-খুলেছে: এক তুলনা (z>০?) দামি-exponential সরিয়েছে, deep vision net ৬× দ্রুত train।' },
        { en: 'Softmax runs every classifier head: cats-vs-dogs, next-word, fraud-or-not — probabilities that compete fairly.', bn: 'Softmax প্রতি classifier-head চালায়: বিড়াল-বনাম-কুকুর, পরের-শব্দ, জাল-না — ন্যায্য-প্রতিদ্বন্দ্বী probability।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Pick in 4 steps', bn: 'HOW — ৪ ধাপে বাছুন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Hidden layers → ReLU', bn: '১. Hidden layer → ReLU' }, text: { en: 'Default everywhere since 2012. Cheap, deep-safe, rarely wrong.', bn: '২০১২ থেকে সর্বত্র default। সস্তা, deep-নিরাপদ, কদাচিৎ ভুল।' } },
        { title: { en: '2. Yes/no output → sigmoid', bn: '২. হ্যাঁ/না আউটপুট → sigmoid' }, text: { en: 'One probability out. Pair with log-loss (machine-learning L2).', bn: 'এক probability বেরোয়। Log-loss-সহ জোড়া (machine-learning পাঠ ২)।' } },
        { title: { en: '3. K classes → softmax', bn: '৩. K শ্রেণি → softmax' }, text: { en: 'K scores in, K shares of 1.0 out. Highest share wins.', bn: 'K স্কোর ঢোকে, ১.০-এর K ভাগ বেরোয়। সর্বোচ্চ-ভাগ জেতে।' } },
        { title: { en: '4. Small/old nets → tanh', bn: '৪. ছোট/পুরনো net → tanh' }, text: { en: 'Zero-centered helps shallow nets and RNNs. Deep stacks prefer ReLU.', bn: 'শূন্য-কেন্দ্র অগভীর-net ও RNN-সাহায্য করে। গভীর-স্তূপ ReLU পছন্দ করে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — All four, z = −3 to 3', bn: 'INSIDE — চারটাই, z = −৩ থেকে ৩' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit tables sigmoid, tanh, and ReLU across [−3,−1,0,1,3], plus softmax over [2.0,1.0,0.1]. Read the personalities: sigmoid creeps 0.05→0.95 (saturated ends), tanh spans −1.00→1.00 (centered), ReLU prints 0,0,0,1,3 (merciless), softmax splits 0.66/0.24/0.10 (sums to 1). Change the scoreboard and watch shares shift.',
        bn: 'এই tryit [−৩,−১,০,১,৩]-জুড়ে sigmoid, tanh, ReLU টেবিল করে, সাথে [২.০,১.০,০.১]-এ softmax। ব্যক্তিত্ব পড়ুন: sigmoid ০.০৫→০.৯৫ হাঁটে (সম্পৃক্ত-প্রান্ত), tanh −১.০০→১.০০ জোড়ে (কেন্দ্রিক), ReLU ০,০,০,১,৩ ছাপে (নির্দয়), softmax ০.৬৬/০.২৪/০.১০ ভাগ করে (যোগ ১)। স্কোরবোর্ড বদলে ভাগ-সরা দেখুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Activation playground (edit SCORES, press Run)', bn: 'Activation খেলাঘর (SCORES বদলে Run)' },
      html: '<h3>Three curves + one scoreboard</h3>\n<pre id="out"></pre>\n<p>Console confirms the softmax sum.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdfa; border: 1px solid #5eead4; border-radius: 8px; padding: 10px; }',
      js: 'const ZS = [-3, -1, 0, 1, 3];\nconst SCORES = [2.0, 1.0, 0.1]; // ← try [5,1,1]: winner takes more\nconst sig = (z) => 1 / (1 + Math.exp(-z));\nconst tanh = (z) => Math.tanh(z);\nconst relu = (z) => Math.max(0, z);\nlet t = "z     sigmoid tanh  ReLU\\n";\nZS.forEach((z) => {\n  t += String(z).padStart(3) + "   " + sig(z).toFixed(2).padStart(5) + " " + tanh(z).toFixed(2).padStart(5) + "  " + relu(z).toFixed(1).padStart(4) + "\\n";\n});\nconst mx = Math.max(...SCORES); // subtract max: stability trick\nconst exps = SCORES.map((s) => Math.exp(s - mx));\nconst sum = exps.reduce((a, b) => a + b, 0);\nconst shares = exps.map((e) => e / sum);\nt += "\\nsoftmax[" + SCORES.join(", ") + "] = [" + shares.map((s) => s.toFixed(2)).join(", ") + "]";\ndocument.getElementById("out").textContent = t;\nconsole.log("shares sum to " + shares.reduce((a, b) => a + b, 0).toFixed(6) + " — always exactly 1.");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Activation instincts', bn: 'RESULT — Activation-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'ReLU hides, sigmoid ends binary, softmax ends multi-class, tanh centers the shallow. Pick by position, not fashion.', bn: 'ReLU লুকায়, sigmoid বাইনারি-শেষ, softmax multi-class-শেষ, tanh অগভীর-কেন্দ্র করে। অবস্থানে বাছুন, ফ্যাশনে নয়।' },
        { en: 'Saturation starves gradients; dead ReLUs learn nothing. Both visible in the table above.', bn: 'সম্পৃক্তি gradient-না-খাওয়ায়; মৃত-ReLU কিছু শেখে না। দুটোই ওপরের টেবিলে দৃশ্যমান।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Two activation diseases', bn: 'DEBUG — দুই activation-রোগ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Sigmoid stacks: the vanishing gradient (why deep sigmoid nets stall)', bn: 'Sigmoid-স্তূপ: অদৃশ্য-gradient (গভীর-sigmoid net থামে কেন)' },
      text: {
        en: 'Sigmoid’s max slope is 0.25 — ten layers multiply 0.25^10 ≈ 0: early layers get no signal and freeze. Symptoms: deep net trains like a shallow one, first-layer weights never move. Cure: ReLU inside (slope 1 when alive), sigmoid only at the single binary exit.',
        bn: 'Sigmoid-এর সর্বোচ্চ ঢাল 0.25 — 10 টি লেয়ার 0.25^10 ≈ 0 গুণ করে: আগের লেয়ার সংকেত পায় না, জমে যায়। লক্ষণ: deep net অগভীর মতো train হয়, প্রথম লেয়ারের ওজন নড়ে না। ওষুধ: ভেতরে ReLU (বাঁচলে ঢাল 1), sigmoid শুধু এক বাইনারি প্রস্থানে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Dead ReLU: big LR murders neurons permanently', bn: 'মৃত-ReLU: বড়-LR neuron স্থায়ী হত্যা করে' },
      text: {
        en: 'One violent update pushes z negative for ALL data → ReLU outputs 0 → gradient 0 → weights freeze dead. Symptoms: growing fraction of never-firing neurons, plateaued loss. Cure: sane LRs, He-init, or LeakyReLU (tiny slope 0.01 for negatives — the undead option).',
        bn: 'এক হিংস্র আপডেটে সব ডেটায় z নেতিবাচক ঠেলে দেয়, ফলে ReLU 0 দেয় এবং gradient 0 হয়ে ওজন মৃত জমে যায়। লক্ষণ: কখনো না জ্বলা নিউরনের সংখ্যা বাড়ে এবং loss আটকে থাকে। ওষুধ: পরিমিত LR, He-init, বা LeakyReLU ব্যবহার করা।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Curves in production', bn: 'REAL WORLD — Production-এ বক্র' },
    },
    {
      type: 'list',
      items: [
        { en: 'Vision nets (ResNet): ReLU after every convolution — billions of max(0,z) per photo.', bn: 'Vision net (ResNet): প্রতি convolution-পরে ReLU — ছবি-প্রতি কোটি max(0,z)।' },
        { en: 'LLM heads: softmax over 50,000+ words — the biggest scoreboard in production AI.', bn: 'LLM head: 50,000+ শব্দে softmax — production-AI-এর বৃহত্তম-স্কোরবোর্ড।' },
        { en: 'Old RNNs (LSTM gates): sigmoid/tanh inside — the curves this lesson retires, respectfully.', bn: 'পুরনো-RNN (LSTM gate): ভেতরে sigmoid/tanh — এই পাঠ সম্মানে-বিদায় দেওয়া বক্র।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Networks Forward', bn: 'পরবর্তী পাঠ — Networks Forward' },
    },
    {
      type: 'para',
      text: {
        en: 'Squeezes owned. Lesson 3 stacks neurons into LAYERS and runs the forward pass by hand — the moment “a pile of neurons” becomes “a network that computes.”',
        bn: 'চাপা অর্জিত। পাঠ 3 neuron লেয়ার-স্তূপ করে forward pass হাতে চালায় — যে মুহূর্তে “neuron-স্তূপ” “গণনা-করা network” হয়।',
      },
    },
  ],
  exercises: [
    {
      id: 'atv-ex-1',
      kind: 'mcq',
      topic: 'relu-table',
      question: { en: 'ReLU over [−3,−1,0,1,3] prints…', bn: '[-3,-1,0,1,3]-তে ReLU ছাপে…' },
      options: [
        { en: '0, 0, 0, 1, 3', bn: '0, 0, 0, 1, 3' },
        { en: '−3, −1, 0, 1, 3 (unchanged)', bn: '-3, -1, 0, 1, 3 (অপরিবর্তিত)' },
        { en: '3, 1, 0, 1, 3 (absolute)', bn: '3, 1, 0, 1, 3 (পরম)' },
        { en: '0.05, 0.27, 0.5, 0.73, 0.95', bn: '0.05, 0.27, 0.5, 0.73, 0.95' },
      ],
      answer: 0,
      hint: { en: 'max(0,z): negatives die, positives pass.', bn: 'max(0,z): নেতিবাচক মরে, ধনাত্মক পার হয়।' },
      explanation: {
        en: 'Negatives → 0 (three corpses), positives pass through (1, 3). Option D is sigmoid’s column — know each personality on sight.',
        bn: 'নেতিবাচক মান 0 হয়ে যায়, আর ধনাত্মক মান (1, 3) অপরিবর্তিত থাকে। অপশন D হলো সিগময়েডের রূপ।'
      },
    },
    {
      id: 'atv-ex-2',
      kind: 'mcq',
      topic: 'softmax-sum',
      question: { en: 'softmax([2.0,1.0,0.1]) ≈ [0.66,0.24,0.10]. They sum to…', bn: 'softmax([2.0, 1.0, 0.1]) ≈ [0.66, 0.24, 0.10]। যোগফল…' },
      options: [
        { en: 'Exactly 1.0 — shares of one pie', bn: 'ঠিক 1.0 — এক পাইয়ের ভাগ' },
        { en: '3.1 — the input sum', bn: '3.1 — ইনপুট যোগফল' },
        { en: '0.66 — the max', bn: '0.66 — সর্বোচ্চ মান' },
        { en: 'Varies randomly', bn: 'এলোমেলোভাবে পরিবর্তিত হয়' },
      ],
      answer: 0,
      hint: { en: 'Denominator = sum of exponentials.', bn: 'হর = exponential-যোগ।' },
      explanation: {
        en: 'Each share = its exp ÷ total exp: numerators sum to the denominator by construction. Softmax never breaks the pie — that guarantee is why heads trust it.',
        bn: 'প্রতি ভাগ = নিজ-exp ÷ মোট-exp: লব হরে যোগ হয় গঠনে। Softmax পাই কখনো ভাঙে না — ওই নিশ্চয়তায় head বিশ্বাস করে।',
      },
    },
    {
      id: 'atv-ex-3',
      kind: 'mcq',
      topic: 'collapse-why',
      question: { en: 'Ten linear layers, no activations. The net equals…', bn: 'দশটি linear layer, কিন্তু কোনো activation নেই। পুরো Net সমান…' },
      options: [
        { en: 'One linear layer — depth achieved nothing', bn: 'একটি একক linear layer — গভীরতা কোনো নতুন সুবিধা দেয়নি' },
        { en: 'A ten-times-smarter net', bn: 'দশ-গুণ চালাক net' },
        { en: 'A decision tree', bn: 'একটি ডিসিশন ট্রি' },
        { en: 'Nothing — it cannot run', bn: 'কিছুই না — চলতে পারে না' },
      ],
      answer: 0,
      hint: { en: 'Matrices multiply into one matrix.', bn: 'Matrix গুণে এক matrix হয়।' },
      explanation: {
        en: 'W₃(W₂(W₁x)) = (W₃W₂W₁)x: ten matrices fuse into one. All that depth, all those parameters — one line. Activations are load-bearing.',
        bn: 'W₃(W₂(W₁x)) = (W₃W₂W₁)x: দশ matrix একটায় মেশে। সব গভীরতা, সব parameter — এক রেখা। Activation ভার-বহনকারী।',
      },
    },
    {
      id: 'atv-ex-4',
      kind: 'predict',
      topic: 'dead-detect',
      question: { en: 'A ReLU neuron outputs 0 on every training row. Diagnose + state whether its weights can still change.', bn: 'ReLU-neuron প্রতি training-সারিতে ০ দেয়। রোগ + ওজন বদলাতে পারে কিনা বলুন।' },
      answer: 'Dead ReLU: gradient 0 everywhere, so weights freeze — it can never recover without intervention.',
      accept: ['dead', 'ReLU', 'gradient', '0', 'freeze'],
      hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
      explanation: {
        en: 'Zero output → zero slope → zero gradient → frozen weights: a corpse that cannot resurrect. Lower LR, re-init, or LeakyReLU — but first, notice the morgue growing.',
        bn: 'শূন্য-আউটপুট → শূন্য-ঢাল → শূন্য-gradient → জমা-ওজন: লাশ যা পুনরুত্থান পারে না। LR নামান, আবার-init, বা LeakyReLU — কিন্তু আগে মর্গ-বাড়া লক্ষ্য করুন।',
      },
    },
  ],
  quiz: {
    id: 'activations-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'atvq1',
        kind: 'mcq',
        topic: 'sigmoid-range',
        question: { en: 'Sigmoid’s range and home turf?', bn: 'Sigmoid-সীমা ও ঘর-মাঠ?' },
        options: [
          { en: '0–1, binary output heads', bn: '০–১, বাইনারি output-head' },
          { en: '−1..1, hidden layers', bn: '−১..১, hidden layer' },
          { en: '0–∞, everywhere', bn: '০–∞, সর্বত্র' },
          { en: 'Exactly {0,1}, nowhere', bn: 'ঠিক {০,১}, কোথাও না' },
        ],
        answer: 0,
        hint: { en: 'HOW step 2.', bn: 'HOW ধাপ ২।' },
        explanation: {
          en: 'Sigmoid speaks probability (0–1) but saturates — so it guards the single binary exit and stays out of deep stacks.',
          bn: 'Sigmoid probability বলে (০–১) কিন্তু সম্পৃক্ত হয় — তাই এক বাইনারি-প্রস্থান পাহারা দেয়, গভীর-স্তূপে ঢোকে না।',
        },
      },
      {
        id: 'atvq2',
        kind: 'mcq',
        topic: 'vanish-math',
        question: { en: 'Ten sigmoid layers: early-layer gradient ≈ ?', bn: 'দশ sigmoid layer: আগের-layer gradient ≈ ?' },
        options: [
          { en: '~0 (0.25 multiplied ten times)', bn: '~০ (০.২৫ দশবার গুণ)' },
          { en: '~2.5 (slopes add)', bn: '~২.৫ (ঢাল যোগ হয়)' },
          { en: 'Exactly 1', bn: 'ঠিক ১' },
          { en: 'Infinite', bn: 'অসীম' },
        ],
        answer: 0,
        hint: { en: 'Gradients multiply through layers (×0.25 max each).', bn: 'Gradient layer-জুড়ে গুণ হয় (সর্বোচ্চ ×০.২৫ প্রতি)।' },
        explanation: {
          en: 'Chain rule multiplies per-layer slopes: 0.25^10 ≈ 0.000001. Front layers starve — the vanishing gradient that retired deep sigmoid.',
          bn: 'Chain rule প্রতি-layer ঢাল গুণ করে: ০.২৫^১০ ≈ ০.০০০০০১। সামনের-layer না-খেয়ে থাকে — deep sigmoid-বিদায়ী অদৃশ্য-gradient।',
        },
      },
      {
        id: 'atvq3',
        kind: 'mcq',
        topic: 'tanh-vs-sig',
        question: { en: 'Tanh’s edge over sigmoid for shallow nets?', bn: 'অগভীর-net-এ sigmoid-ওপর tanh-সুবিধা?' },
        options: [
          { en: 'Zero-centered (−1..1): negatives speak, averages behave', bn: 'শূন্য-কেন্দ্রিক (−১..১): নেতিবাচক বলে, গড় শোনে' },
          { en: 'Never saturates', bn: 'কখনো সম্পৃক্ত হয় না' },
          { en: 'Outputs integers', bn: 'পূর্ণসংখ্যা দেয়' },
          { en: 'No edge — identical', bn: 'সুবিধা নেই — অভিন্ন' },
        ],
        answer: 0,
        hint: { en: 'Centered data trains friendlier.', bn: 'কেন্দ্রিক-ডেটা বন্ধুভাবে train হয়।' },
        explanation: {
          en: 'Sigmoid outputs average ~0.5 (always positive drift); tanh averages ~0, so next layers get balanced inputs. Same family, better manners — same saturation disease.',
          bn: 'Sigmoid-আউটপুট গড় ~০.৫ (সবসময় ধনাত্মক-টান); tanh গড় ~০, তাই পরের-layer সুষম-ইনপুট পায়। একই পরিবার, ভালো-আচরণ — একই সম্পৃক্তি-রোগ।',
        },
      },
      {
        id: 'atvq4',
        kind: 'predict',
        topic: 'head-pick',
        question: { en: 'Cat/dog/bird classifier, one head. Name the activation + why the other three fail the job.', bn: 'বিড়াল/কুকুর/পাখি classifier, এক head। Activation + বাকি তিন কেন ব্যর্থ বলুন।' },
        answer: 'Softmax: three competing shares of 1. Sigmoid gives independent (non-competing) scores, tanh/ReLU give non-probabilities.',
        accept: ['softmax', 'competing', 'sum', '1', 'probability'],
        hint: { en: 'Three classes must COMPETE for one pie.', bn: 'তিন শ্রেণিকে এক পাইয়ে প্রতিদ্বন্দ্বিতা করতে হবে।' },
        explanation: {
          en: 'One image = one animal: shares must compete and sum to 1. Three sigmoids could all shout 99% — nonsense for single-label. Softmax enforces the rivalry.',
          bn: 'এক ছবি = এক প্রাণী: ভাগে প্রতিদ্বন্দ্বিতা করে ১-যোগ হতেই হবে। তিন sigmoid সব ৯৯% চেঁচাতে পারে — single-label-এ অর্থহীন। Softmax প্রতিদ্বন্দ্বিতা বাধ্য করে।',
        },
      },
    ],
  },
};