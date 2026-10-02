import type { Lesson } from '../../../lib/types';

export const PretrainingDataLesson: Lesson = {
  slug: 'pretraining-data',
  tech: 'llms',
  title: {
    en: 'Pretraining and Data',
    bn: 'প্রতি স্ফুলিঙ্গ-উজানে: trillion token crawl → clean → dedupe → mix'
  },
  summary: {
    en: 'Upstream of every spark: crawl → clean → dedupe → mix trillions of tokens, cut them with BPE, and budget compute by Chinchilla’s 20× law. You will map the pipeline, price three models live (7B = 140B tokens, 5.88e+21 FLOP), and learn why data beats architecture.',
    bn: 'প্রতি স্ফুলিঙ্গ-উজানে: trillion token crawl → clean → dedupe → mix, BPE-কাটা, Chinchilla-২০× আইনে compute-বাজেট। Pipeline-ম্যাপ করবেন, তিন-মডেল live-দাম করবেন (৭B = ১৪০B token, ৫.৮৮e+২১ FLOP), ডেটা-স্থাপত্য হারায় কেন শিখবেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Trillions, curated', bn: 'WHAT — Trillion, বাছাই-করা' },
    },
    {
      type: 'para',
      text: {
        en: 'When you pretrain a foundation model, you feed neural networks vast amounts of curated text collected from across the internet. Engineers crawl the web, clean boilerplate formatting, remove near-duplicate documents, and mix domain sources in balanced ratios. Tokenizers then compress this raw text by iteratively merging frequent character pairs into subwords. According to Chinchilla scaling laws, compute is optimized when training tokens roughly equal 20 times the parameter count. Neglecting either parameter scale or token volume leads to wasted compute and suboptimal model performance.',
        bn: 'ফাউন্ডেশন মডেল প্রি-ট্রেইনিং করার সময় আপনি ইন্টারনেট থেকে সংগৃহীত সুবিশাল পরিমাণের পরিমার্জিত টেক্সট নিউরাল নেটওয়ার্কে সরবরাহ করেন। প্রকৌশলীরা প্রথমে ওয়েব ক্রল করেন, অপ্রয়োজনীয় টেমপ্লেট মুছে টেক্সট পরিষ্কার করেন, ডুপ্লিকেট অংশ ছাঁটাই করেন এবং বিভিন্ন ডোমেনের ডেটা সুষম অনুপাতে মেশান। এরপর টোকেনাইজার ঘন ঘন আসা অক্ষরের জোড়া একত্রিত করে সাব-ওয়ার্ড টোকেন তৈরি করে। চিনচিলার স্কেলিং সূত্র অনুসারে, মডেল প্যারামিটারের প্রায় ২০ গুণ টোকেন দিয়ে প্রশিক্ষণ দিলেই কম্পিউট সবচেয়ে কার্যকর হয়। প্যারামিটার বা টোকেনের ভারসাম্য নষ্ট হলে অপচয় বাড়ে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The data refinery — web sludge in, tokens out', bn: 'ডেটা-শোধনাগার — web-কাদা ঢোকে, token বেরোয়' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Five stage data pipeline ending in Chinchilla balance">
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="15" y="60" width="105" height="56" rx="8" fill="#64748b" opacity="0.18" stroke="#64748b" stroke-width="2"/>
<text x="67" y="84">crawl 🕸️</text>
<text x="67" y="100" font-size="9">petabytes raw</text>
<text x="130" y="92" font-size="14">→</text>
<rect x="142" y="60" width="105" height="56" rx="8" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="194" y="84">clean 🧹</text>
<text x="194" y="100" font-size="9">−boilerplate</text>
<text x="257" y="92" font-size="14">→</text>
<rect x="269" y="60" width="105" height="56" rx="8" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
<text x="321" y="84">dedupe ♻️</text>
<text x="321" y="100" font-size="9">−copies</text>
<text x="384" y="92" font-size="14">→</text>
<rect x="396" y="60" width="105" height="56" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
<text x="448" y="84">mix 🧪</text>
<text x="448" y="100" font-size="9">code+book+web</text>
<text x="511" y="92" font-size="14">→</text>
<rect x="523" y="60" width="100" height="56" rx="8" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="2"/>
<text x="573" y="84">tokens 🎟️</text>
<text x="573" y="100" font-size="9">BPE-cut</text>
</g>
<rect x="170" y="145" width="300" height="52" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
<text x="320" y="167" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">⚖️ Chinchilla: tokens ≈ 20 × params</text>
<text x="320" y="186" text-anchor="middle" font-size="11" fill="currentColor">7B → 140B tokens · 5.88e+21 FLOP</text>
<text x="320" y="222" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">The mix is the moat: same web, different recipes, different minds.</text>
</svg>`,
      caption: {
        en: 'Four refinery stages, one balance law. Skip dedupe and the model memorizes the sludge.',
        bn: 'চার শোধন-ধাপ, এক ভারসাম্য-আইন। Dedupe-এড়ালে মডেল কাদা-মুখস্থ করে।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'chinchilla_scaling.py',
      code: `def chinchilla_cost(params, tokens_per_param=20):
    tokens = params * tokens_per_param
    flop = 6 * params * tokens
    return tokens, flop

models = {"1B": 1e9, "7B": 7e9, "70B": 70e9}

print("Compute budget under Chinchilla balance (tokens = 20 * params, FLOP = 6 * N * D):")
for name, n in models.items():
    tok, f = chinchilla_cost(n)
    print(f"{name:>3}: {tok/1e9:>4.0f}B tokens | {f:.2e} FLOP")

# Output:
#  1B:   20B tokens | 1.20e+20 FLOP
#  7B:  140B tokens | 5.88e+21 FLOP
# 70B: 1400B tokens | 5.88e+23 FLOP`,
      caption: {
        en: 'Chinchilla compute expenditure scaling from 1B parameters (20B tokens, 1.20e+20 FLOP) to 70B parameters (1400B tokens, 5.88e+23 FLOP).',
        bn: 'চিনচিলা কম্পিউট হিসাব: ১B প্যারামিটার (২০B টোকেন, ১.২০e+২০ FLOP) থেকে ৭০B প্যারামিটার (১৪০০B টোকেন, ৫.৮৮e+২৩ FLOP)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Dedupe', def: { en: 'The algorithmic removal of identical or near-duplicate documents to prevent models from memorizing repeated patterns.', bn: 'অনুরূপ বা প্রায় হুবহু টেক্সট অপসারণ করার অ্যালগরিদম যা মডেলকে অপ্রয়োজনীয় পুনরাবৃত্তি মুখস্থ করা থেকে বিরত রাখে।' } },
        { term: 'Mix', def: { en: 'The deliberate ratio of domains such as programming code, literature, and web text used to shape model competencies.', bn: 'প্রোগ্রামিং কোড, বই এবং ওয়েব টেক্সটের সুষম অনুপাত যা মডেলের নির্দিষ্ট দক্ষতা ও চিন্তাশক্তি গড়ে তোলে।' } },
        { term: 'BPE', def: { en: 'Byte-pair encoding, an algorithm that builds vocabulary by iteratively merging frequent subword character pairs.', bn: 'বাইট-পেয়ার এনকোডিং, একটি টোকেনাইজেশন অ্যালগরিদম যা ঘন ঘন ব্যবহৃত অক্ষরের জোড়া মিলিয়ে শব্দভাণ্ডার তৈরি করে।' } },
        { term: 'Chinchilla', def: { en: 'An empirical compute-optimal training law dictating approximately twenty training tokens per model parameter (compute ≈ 6ND FLOP).', bn: 'একটি গাণিতিক স্কেলিং সূত্র যা নির্দেশ করে প্রতি প্যারামিটারের বিপরীতে প্রায় ২০টি টোকেন থাকা উচিত (FLOP ≈ ৬ND)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Data is the differentiator', bn: 'WHY — ডেটা-পার্থক্যকারী' },
    },
    {
      type: 'list',
      items: [
        { en: 'Architectures converge (all transformers); datasets diverge — the mix IS the moat.', bn: 'স্থাপত্য-মিলে (সব transformer); dataset-আলাদা হয় — mix-পরিখা।' },
        { en: 'Chinchilla killed “bigger is better”: balanced 7B/140B beats starved 70B/100B per dollar.', bn: 'Chinchilla “বড়-ভালো”-মারল: ভারসাম্য ৭B/১৪০B ডলারে না-খাওয়া ৭০B/১০০B-হারায়।' },
        { en: 'Your fine-tunes inherit this: clean small data beats dirty big data, every time.', bn: 'আপনার fine-tune-উত্তরাধিকার: পরিষ্কার-ছোট ডেটা নোংরা-বড় ডেটা-হারায়, প্রতিবার।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Price a pretrain in 4 steps', bn: 'HOW — Pretrain-দাম ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Pick N', bn: '১. N-বাছুন' }, text: { en: 'Params: 1B / 7B / 70B.', bn: 'Param: ১B / ৭B / ৭০B।' } },
        { title: { en: '2. Set D = 20N', bn: '২. D = ২০N বসান' }, text: { en: 'Chinchilla tokens.', bn: 'Chinchilla token।' } },
        { title: { en: '3. FLOP = 6ND', bn: '৩. FLOP = ৬ND' }, text: { en: 'Total compute.', bn: 'মোট-compute।' } },
        { title: { en: '4. GPUs × days', bn: '৪. GPU × দিন' }, text: { en: 'Divide by throughput → the bill.', bn: 'Throughput-ভাগ → বিল।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Three price tags', bn: 'INSIDE — তিন-দাম ট্যাগ' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit prices three Chinchilla-balanced models: 1B → 20B tokens, 1.20e+20 FLOP; 7B → 140B tokens, 5.88e+21 FLOP; 70B → 1400B tokens, 5.88e+23 FLOP. Notice the 100× compute jumps: 10× params needs 10× tokens, so FLOP grows 100× — balance is quadratic. Starve D and the same FLOP buys worse loss.',
        bn: 'এই tryit তিন Chinchilla-ভারসাম্য মডেল-দাম করে: ১B → ২০B token, ১.২০e+২০ FLOP; ৭B → ১৪০B token, ৫.৮৮e+২১ FLOP; ৭০B → ১৪০০B token, ৫.৮৮e+২৩ FLOP। ১০০× compute-লাফ লক্ষ্য করুন: ১০× param-১০× token চায়, FLOP ১০০× বাড়ে — ভারসাম্য quadratic। D-না-খাওয়ালে একই-FLOP খারাপ-loss কেনে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Pretrain pricer live (change RATIO, press Run)', bn: 'Pretrain pricer live (RATIO বদলে Run)' },
      html: '<h3>Balance costs quadratically</h3>\n<pre id="out"></pre>\n<p>Console prices each model.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fefce8; border: 1px solid #facc15; border-radius: 8px; padding: 10px; }',
      js: 'const RATIO = 20; // ← tokens per param — try 5 (starved) or 50 (overtrained)\nconst MODELS = [["1B", 1e9], ["7B", 7e9], ["70B", 70e9]];\nconst rows = MODELS.map(([n, N]) => {\n  const D = RATIO * N, F = 6 * N * D;\n  console.log(n + ": " + (D/1e9) + "B tok, " + F.toExponential(2) + " FLOP");\n  return n + " → " + (D/1e9) + "B tok · " + F.toExponential(2) + " FLOP";\n});\ndocument.getElementById("out").textContent = rows.join("\\n") + "\\nratio " + RATIO + (RATIO === 20 ? " = Chinchilla ⚖️" : " ≠ Chinchilla ⚠️");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Data instincts', bn: 'RESULT — ডেটা-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Balance before bigness: D ≈ 20N or money burns.', bn: 'বড়ত্ব-আগে ভারসাম্য: D ≈ ২০N নয়তো টাকা-পোড়ে।' },
        { en: 'Refine before training: crawl → clean → dedupe → mix.', bn: 'Training-আগে শোধন: crawl → clean → dedupe → mix।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Data disasters', bn: 'DEBUG — ডেটা-বিপর্যয়' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Duplicate sludge (memorized, not learned)', bn: 'Duplicate-কাদা (মুখস্থ, শেখা নয়)' },
      text: {
        en: 'Undeduped boilerplate (“click here”, licenses) teaches recitation: models parrot frequent strings. Symptoms: verbatim license outputs, benchmark contamination. Cure: fuzzy dedupe at scale + contamination audits.',
        bn: 'Undedupe boilerplate (“click here”, license) আবৃত্তি-শেখায়: মডেল ঘন-string তোতা করে। লক্ষণ: হুবহু-license output, benchmark দূষণ। ওষুধ: scale-fuzzy dedupe + দূষণ-নিরীক্ষা।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Starved giants (70B on 100B tokens)', bn: 'না-খাওয়া দৈত্য (১০০B token-এ ৭০B)' },
      text: {
        en: 'Params without tokens = empty capacity: loss stalls while smaller balanced models pass by. Symptoms: giant model, mediocre evals. Cure: Chinchilla-balance or shrink N to fit your D.',
        bn: 'Token-ছাড়া param = খালি-ধারণ: loss-থামে ছোট ভারসাম্য-মডেল পাশ-যায়। লক্ষণ: দৈত্য-মডেল, মাঝারি-eval। ওষুধ: Chinchilla-ভারসাম্য বা D-খাপে N-সঙ্কোচন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Refineries running', bn: 'REAL WORLD — চলমান-শোধনাগার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Open datasets: FineWeb curates 15T tokens — refinery as public good.', bn: 'খোলা-dataset: FineWeb ১৫T token-বাছে — public-শোধনাগার।' },
        { en: 'Code models: StarCoder mixes 80+ languages with license filters.', bn: 'কোড-মডেল: StarCoder license-filter ৮০+ ভাষা-মেশায়।' },
        { en: 'Labs: mix ratios guarded like Coca-Cola’s formula.', bn: 'Lab: mix-অনুপাত Coca-Cola formula-মতো পাহারা।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Reasoning and Chain-of-Thought', bn: 'পরবর্তী পাঠ — Reasoning এবং Chain-of-Thought' },
    },
    {
      type: 'para',
      text: {
        en: 'Data refined. Lesson 4 buys THINKING at inference time: chain-of-thought, self-consistency votes, and test-time compute.',
        bn: 'ডেটা-শোধন। পাঠ ৪ inference-চিন্তা কেনে: chain-of-thought, self-consistency ভোট, test-time compute।',
      },
    },
  ],
  exercises: [
    {
      id: 'ptd-ex-1',
      kind: 'mcq',
      topic: 'chinchilla-apply',
      question: { en: '13B model, Chinchilla-balanced. Tokens?', bn: '১৩B মডেল, Chinchilla-ভারসাম্য। Token?' },
      options: [
        { en: '260B (20 × 13B)', bn: '২৬০B (২০ × ১৩B)' },
        { en: '13B', bn: '১৩B' },
        { en: '1.3T', bn: '১.৩T' },
        { en: '6 × 13B', bn: '৬ × ১৩B' },
      ],
      answer: 0,
      hint: { en: 'D = 20N.', bn: 'D = ২০N।' },
      explanation: {
        en: '20 × 13B = 260B tokens: the balance point where params and data stop wasting each other.',
        bn: '২০ × ১৩B = ২৬০B token: ভারসাম্য-বিন্দু যেখানে param-ডেটা পরস্পর-অপচয় থামায়।',
      },
    },
    {
      id: 'ptd-ex-2',
      kind: 'mcq',
      topic: 'quadratic-why',
      question: {
        en: 'When scaling model parameters tenfold under Chinchilla balance, why does total compute multiply hundredfold?',
        bn: 'চিনচিলার ভারসাম্য মেনে মডেলের প্যারামিটার ১০ গুণ বৃদ্ধি করলে মোট কম্পিউট (FLOP) কেন ১০০ গুণ বেড়ে যায়?'
      },
      options: [
        { en: 'FLOP = 6ND and D grows 10× too: 10 × 10', bn: 'FLOP = ৬ND এবং টোকেন D-ও ১০ গুণ বাড়ে: ১০ × ১০ = ১০০' },
        { en: 'GPUs get slower', bn: 'GPU-ধীর হয়' },
        { en: 'BPE doubles cost', bn: 'BPE-খরচ দ্বিগুণ' },
        { en: 'Tokens are free', bn: 'Token-ফ্রি' },
      ],
      answer: 0,
      hint: { en: 'Balance multiplies.', bn: 'ভারসাম্য-গুণে।' },
      explanation: {
        en: 'Balance demands both N and D scale: 6·(10N)·(10D) = 100·6ND. Scaling laws are quadratic bills for linear gains.',
        bn: 'ভারসাম্য বজায় রাখতে N এবং D উভয়কেই স্কেল করতে হয়: ৬·(১০N)·(১০D) = ১০০·৬ND।'
      },
    },
    {
      id: 'ptd-ex-3',
      kind: 'mcq',
      topic: 'dedupe-why',
      question: { en: 'Skip dedupe. Consequence?', bn: 'Dedupe-এড়ান। পরিণাম?' },
      options: [
        { en: 'Memorized sludge: recitation over reasoning', bn: 'মুখস্থ-কাদা: যুক্তি-ওপর আবৃত্তি' },
        { en: 'Faster training', bn: 'দ্রুত-training' },
        { en: 'Better jokes', bn: 'ভালো-রসিকতা' },
        { en: 'No effect', bn: 'প্রভাব নেই' },
      ],
      answer: 0,
      hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
      explanation: {
        en: 'Repetition teaches verbatim recall: capacity wasted on licenses and boilerplate instead of patterns.',
        bn: 'পুনরাবৃত্তি হুবহু-স্মরণ শেখায়: pattern-বদলে license-boilerplate ধারণ-অপচয়।',
      },
    },
    {
      id: 'ptd-ex-4',
      kind: 'predict',
      topic: 'budget-pick',
      question: { en: 'Fixed FLOP budget, 70B-starved vs 13B-balanced. Pick + one-line law.', bn: 'Fixed FLOP বাজেট, ৭০B-না খাওয়া বনাম ১৩B-ভারসাম্য। বাছুন + এক-লাইন আইন।' },
      answer: '13B-balanced: Chinchilla — balance beats bigness per FLOP.',
      accept: ['13b', 'balanced', 'chinchilla', 'balance', 'bigness'],
      hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
      explanation: {
        en: 'Starved giants waste capacity; balanced minors spend every FLOP twice-effective. Budget the balance, not the bragging.',
        bn: 'না-খাওয়া দৈত্য ধারণ-অপচয় করে; ভারসাম্য-ছোট প্রতি-FLOP দ্বিগুণ-কার্যকর খরচ করে। ভারসাম্য-বাজেট, বড়াই নয়।',
      },
    },
  ],
  quiz: {
    id: 'pretraining-data-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'ptdq1',
        kind: 'mcq',
        topic: 'mix-moat',
        question: { en: '“The mix is the moat” means…', bn: '“Mix-পরিখা” মানে…' },
        options: [
          { en: 'Domain ratios differentiate what architectures cannot', bn: 'Domain-অনুপাত স্থাপত্য-পারে না তা-আলাদা করে' },
          { en: 'Mixing is free', bn: 'মেশানো-ফ্রি' },
          { en: 'All data is equal', bn: 'সব-ডেটা সমান' },
          { en: 'Architecture beats data', bn: 'স্থাপত্য-ডেটা হারায়' },
        ],
        answer: 0,
        hint: { en: 'WHY #1.', bn: 'WHY #১।' },
        explanation: {
          en: 'Everyone runs transformers on the same web: code-heavy vs book-heavy ratios forge coders vs scholars.',
          bn: 'সবাই একই-web transformer চালায়: code-ভারী বনাম book-ভারী অনুপাত coder-পণ্ডিত গড়ে।',
        },
      },
      {
        id: 'ptdq2',
        kind: 'mcq',
        topic: 'bpe-role',
        question: {
          en: 'During the tokenization phase of pretraining, what fundamental pattern does byte-pair encoding learn directly from text?',
          bn: 'প্রিটেইনিংয়ের টোকেনাইজেশন পর্বে বাইট-পেয়ার এনকোডিং টেক্সট ডেটা থেকে সরাসরি কোন মৌলিক প্যাটার্ন শেখে?'
        },
        options: [
          { en: 'Which pairs to fuse, from the training data itself', bn: 'কোন-জোড়া মেশাবে, training-ডেটা থেকে' },
          { en: 'English grammar', bn: 'ইংরেজি ব্যাকরণ' },
          { en: 'Model weights', bn: 'মডেল-ওজন' },
          { en: 'FLOP counts', bn: 'FLOP-গণনা' },
        ],
        answer: 0,
        hint: { en: 'Frequent pairs fuse.', bn: 'ঘন-জোড়া মেশে।' },
        explanation: {
          en: 'Tokenizers train on the corpus: frequent byte-pairs merge iteratively until the vocabulary fills — data-cutting-data.',
          bn: 'Tokenizer corpus-train হয়: ঘন byte-জোড়া শব্দভাণ্ডার-পূর্ণ পুনরাবৃত্তি মেশে — ডেটা-কাটা ডেটা।',
        },
      },
      {
        id: 'ptdq3',
        kind: 'mcq',
        topic: 'flop-read',
        question: { en: '7B balanced = 5.88e+21 FLOP. 70B balanced = ?', bn: '৭B ভারসাম্য = ৫.৮৮e+২১ FLOP। ৭০B ভারসাম্য = ?' },
        options: [
          { en: '5.88e+23 (100× — quadratic)', bn: '৫.৮৮e+২৩ (১০০× — quadratic)' },
          { en: '5.88e+22 (10×)', bn: '৫.৮৮e+২২ (১০×)' },
          { en: '5.88e+21 (same)', bn: '৫.৮৮e+২১ (একই)' },
          { en: '5.88e+42 (squared)', bn: '৫.৮৮e+৪২ (বর্গ)' },
        ],
        answer: 0,
        hint: { en: 'INSIDE’s table.', bn: 'INSIDE-টেবিল।' },
        explanation: {
          en: '10× N × 10× D = 100× FLOP: 5.88e+21 → 5.88e+23. Read the exponent jumps — that’s the datacenter bill.',
          bn: '১০× N × ১০× D = ১০০× FLOP: ৫.৮৮e+২১ → ৫.৮৮e+২৩। Exponent-লাফ পড়ুন — ওটাই datacenter-বিল।',
        },
      },
      {
        id: 'ptdq4',
        kind: 'predict',
        topic: 'contamination-check',
        question: { en: 'Model recites your hidden test set verbatim. Name the disease + the audit.', bn: 'মডেল লুকানো-test set হুবহু-আবৃত্তি করে। রোগ + নিরীক্ষা বলুন।' },
        answer: 'Benchmark contamination: n-gram overlap audit of train vs test.',
        accept: ['contamination', 'overlap', 'audit', 'n-gram', 'ngram', 'leak'],
        hint: { en: 'DEBUG warn’s second cure.', bn: 'DEBUG warn-দ্বিতীয় ওষুধ।' },
        explanation: {
          en: 'Test strings leaked into training: scores measure memory, not mind. Audit overlaps, quarantine benchmarks, report honestly.',
          bn: 'Test-string training-ফাঁস: score স্মৃতি-মাপে, মন নয়। Overlap-নিরীক্ষা, benchmark-quarantine, সৎ-report।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'reasoning-cot',
    title: { en: 'Reasoning and Chain-of-Thought', bn: 'Reasoning আর Chain-of-Thought' },
  },
};