import type { Lesson } from '../../../lib/types';

export const MeetLlmsLesson: Lesson = {
  slug: 'meet-llms',
  tech: 'llms',
  title: {
    en: 'Meet LLMs',
    bn: 'GenAI-স্নাতক কোর্স: LLM next-token predictor scale-করা যতক্ষণ'
  },
  summary: {
    en: 'The GenAI graduate course: LLMs are next-token predictors scaled until sparks fly — parameters, data, compute, and the abilities that emerge. You will trace the spark ladder, run a scaling law live (loss 2.50 → 1.24 over 10,000× params), and meet base vs chat.',
    bn: 'GenAI-স্নাতক কোর্স: LLM next-token predictor scale-করা যতক্ষণ স্ফুলিঙ্গ-ওড়ে — parameter, ডেটা, compute, উদ্ভূত-সক্ষমতা। স্ফুলিঙ্গ-মই আঁকবেন, scaling law live চালাবেন (১০,০০০× param-এ loss ২.৫০ → ১.২৪), base বনাম chat-চিনবেন।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Next-token, at civilization scale', bn: 'WHAT — Next-token, সভ্যতা-scale' },
    },
    {
      type: 'para',
      text: {
        en: 'A large language model is a transformer scaled up to hundreds of billions of trainable parameters. These systems learn from trillions of words collected across books, documentation, and the web. While the core objective remains predicting the next token, massive scale gives rise to unexpected capabilities. Models begin translating languages, writing code, and reasoning through logical puzzles. Base models complete raw text, whereas instruction-tuned chat models engage in helpful conversations.',
        bn: 'লার্জ ল্যাঙ্গুয়েজ মডেল (LLM) হলো শত শত বিলিয়ন প্যারামিটারে স্কেল করা একটি শক্তিশালী ট্রান্সফরমার আর্কিটেকচার। এই সিস্টেমগুলো বই, কোড এবং ওয়েব থেকে সংগৃহীত ট্রিলিয়ন ট্রিলিয়ন টোকেন বা শব্দাংশ দেখে শেখে। মূল লক্ষ্য কেবল পরবর্তী টোকেন অনুমান করা হলেও, বিশাল স্কেলিংয়ের ফলে অনুবাদ, কোডিং এবং যুক্তিনির্ভর সমাধানের মতো নতুন সক্ষমতার বিকাশ ঘটে। বেস মডেলগুলো সাধারণ টেক্সট সম্পূর্ণ করে, আর ইনস্ট্রাকশন-টিউনড চ্যাট মডেলগুলো নির্দেশ মেনে কথোপকথন চালাতে পারে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The spark ladder — scale up, sparks out', bn: 'স্ফুলিঙ্গ-মই — scale-ওঠান, স্ফুলিঙ্গ-বেরান' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Four rungs from n-gram to frontier LLM with emergent sparks">
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="60" y="180" width="220" height="36" rx="8" fill="#64748b" opacity="0.18" stroke="#64748b" stroke-width="2"/>
<text x="170" y="202">n-gram 📖 counts words</text>
<rect x="60" y="132" width="220" height="36" rx="8" fill="#4f46e5" opacity="0.15" stroke="#4f46e5" stroke-width="2"/>
<text x="170" y="154">small net 🧠 phrases + grammar</text>
<rect x="360" y="132" width="220" height="36" rx="8" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" stroke-width="2"/>
<text x="470" y="154">base LLM 📚 world knowledge</text>
<rect x="360" y="84" width="220" height="36" rx="8" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
<text x="470" y="106">chat LLM 💬 reasons + obeys ✨</text>
</g>
<path d="M170,180 L170,168 M290,150 L350,150 M470,132 L470,120" stroke="currentColor" stroke-width="2"/>
<g font-size="10" font-weight="600" fill="currentColor" text-anchor="middle">
<text x="170" y="120">10× params</text>
<text x="320" y="142">100× data</text>
<text x="470" y="72">SFT + RLHF 🎓</text>
</g>
<g font-size="12" font-weight="800" fill="#f59e0b" text-anchor="middle">
<text x="520" y="60">✨ translation</text>
<text x="520" y="78">✨ code ✨ jokes</text>
</g>
<text x="320" y="232" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Nobody programmed jokes. The sparks come free with scale — then tuning aims them.</text>
</svg>`,
      caption: {
        en: 'Each rung: same objective, bigger budget. Sparks are a phase change, not a feature list.',
        bn: 'প্রতি ধাপ: একই লক্ষ্য, বড় বাজেট। স্ফুলিঙ্গ phase-পরিবর্তন, feature-তালিকা নয়।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'scaling_laws.py',
      code: `# Empirical neural scaling law: Loss = 2.5 * (Parameters in millions)^(-0.076)
exp = 0.076
param_scales_millions = [1, 10, 100, 1000, 10000]

print("Simulating next-token loss across model scales:")
for p in param_scales_millions:
    loss = 2.5 * (p ** -exp)
    print(f"{p:>5}M parameters -> loss: {loss:.2f}")

# Output:
#     1M parameters -> loss: 2.50
#    10M parameters -> loss: 2.10
#   100M parameters -> loss: 1.76
#  1000M parameters -> loss: 1.48
# 10000M parameters -> loss: 1.24`,
      caption: {
        en: 'Power-law scaling projection from 1M parameters (loss 2.50) to 10000M parameters (loss 1.24), cutting loss by approximately 0.3 with each tenfold scale increase.',
        bn: '১M প্যারামিটার (লস ২.৫০) থেকে ১০০০০M প্যারামিটার (লস ১.২৪) পর্যন্ত পাওয়ার-ল স্কেলিং প্রক্ষেপণ, যেখানে প্রতি ১০ গুণ মডেলে লস প্রায় ০.৩ কমে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Parameters', def: { en: 'The adjustable numerical weights in a neural network that determine its learned behaviors and knowledge.', bn: 'নিউরাল নেটওয়ার্কের অভ্যন্তরীণ সংখ্যাসূচক ওজন যা প্রশিক্ষণের মাধ্যমে অর্জিত জ্ঞান ও আচরণ নির্ধারণ করে।' } },
        { term: 'Tokens (training)', def: { en: 'The chunks of words or characters that models process sequentially during training and inference.', bn: 'শব্দ বা অক্ষরের ছোট ছোট খণ্ড যা মডেল প্রশিক্ষণের সময় এবং আউটপুট তৈরির সময় ক্রমানুসারে প্রক্রিয়া করে।' } },
        { term: 'Emergence', def: { en: 'Novel capabilities such as coding and logical reasoning that manifest only when models cross critical scale thresholds.', bn: 'মডেলের আকার ও ডেটা একটি নির্দিষ্ট সীমা অতিক্রম করলে কোডিং বা যুক্তির মতো নতুন সক্ষমতা নিজে থেকেই প্রকাশিত হওয়া।' } },
        { term: 'Base vs chat', def: { en: 'Raw text continuation models compared to instruction-tuned conversational models trained with human feedback.', bn: 'সাধারণ টেক্সট পূর্বাভাসকারী কাঁচা বেস মডেল বনাম মানুষের পছন্দ অনুযায়ী সংলাপে প্রশিক্ষিত চ্যাট মডেলের পার্থক্য।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The platform shift', bn: 'WHY — Platform-বদল' },
    },
    {
      type: 'list',
      items: [
        { en: 'One interface (words) now drives code, images, tools, robots — literacy became leverage.', bn: 'এক interface (শব্দ) এখন কোড, ছবি, tool, রোবট-চালায় — সাক্ষরতা লিভারেজ-হলো।' },
        { en: 'Careers split around LLMs: builders tune/serve them, everyone else directs them.', bn: 'Career LLM-ঘিরে ভাগ: নির্মাতা tune/serve করে, বাকি নির্দেশনা দেয়।' },
        { en: 'Costs fall yearly: frontier-today is commodity-tomorrow — learn the ladder, not the rung.', bn: 'খরচ বার্ষিক-পড়ে: আজ-frontier কাল-পণ্য — মই-শিখুন, ধাপ নয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Read any model card in 4 steps', bn: 'HOW — যেকোনো model card ৪ ধাপে পড়ুন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Find params', bn: '১. Param খুঁজুন' }, text: { en: '7B / 70B / 400B+: capacity class.', bn: '৭B / ৭০B / ৪০০B+: ধারণ-শ্রেণি।' } },
        { title: { en: '2. Check flavor', bn: '২. স্বাদ-যাচাই' }, text: { en: 'Base (complete) or instruct/chat (obey)?', bn: 'Base (সম্পূর্ণ) না instruct/chat (মানা)?' } },
        { title: { en: '3. Note context', bn: '৩. Context-নোট' }, text: { en: '8k / 128k / 1M tokens of working memory.', bn: '৮k / ১২৮k / ১M token কর্ম-স্মৃতি।' } },
        { title: { en: '4. Price it', bn: '৪. দাম-করুন' }, text: { en: '$/million tokens in+out — budget per answer.', bn: '$/million token in+out — প্রতি-উত্তর বাজেট।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The law that funds datacenters', bn: 'INSIDE — Datacenter-অর্থায়ন আইন' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit runs a scaling law (L = 2.5·P^−0.076): 1M → 2.50, 10M → 2.10, 100M → 1.76, 1B → 1.48, 10B → 1.24 — every 10× params shaves ~0.3 loss, smoothly, predictably. That smoothness is why billions get spent BEFORE training: the curve is known, only the bill surprises. Change the exponent and watch fortunes pivot on hundredths.',
        bn: 'এই tryit scaling law চালায় (L = ২.৫·P^−০.০৭৬): ১M → ২.৫০, ১০M → ২.১০, ১০০M → ১.৭৬, ১B → ১.৪৮, ১০B → ১.২৪ — প্রতি ১০× param ~০.৩ loss-ছাঁটে, মসৃণ, অনুমেয়। এই মসৃণতা training-আগে billion-খরচ করায়: curve-জানা, শুধু বিল-চমকায়। Exponent বদলে শতাংশে-ভাগ্য ঘোরা দেখুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Scaling law live (change EXP, press Run)', bn: 'Scaling law live (EXP বদলে Run)' },
      html: '<h3>Loss falls on schedule</h3>\n<pre id="out"></pre>\n<p>Console logs each scale.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #818cf8; border-radius: 8px; padding: 10px; }',
      js: 'const EXP = 0.076; // ← scaling exponent — try 0.05 (stubborn) or 0.10 (generous)\nconst SCALES = [1, 10, 100, 1000, 10000]; // params in millions\nconst L = (P) => 2.5 * Math.pow(P, -EXP);\nSCALES.forEach((P) => console.log(P + "M params → loss " + L(P).toFixed(2)));\ndocument.getElementById("out").textContent = SCALES.map((P) => P + "M → " + L(P).toFixed(2)).join("\\n") + "\\n10,000× params ≈ −1.26 loss 📉";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — LLM instincts', bn: 'RESULT — LLM-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Same objective at every scale: next-token — sparks are bought, not programmed.', bn: 'প্রতি scale-একই লক্ষ্য: next-token — স্ফুলিঙ্গ-কেনা, program নয়।' },
        { en: 'Read model cards like menus: params, flavor, context, price — then order.', bn: 'Model card menu-মতো পড়ুন: param, স্বাদ, context, দাম — তারপর order।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Scale confusions', bn: 'DEBUG — Scale-বিভ্রান্তি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“Bigger always wins” (the benchmark mirage)', bn: '“বড় সবসময়-জেতে” (benchmark মরীচিকা)' },
      text: {
        en: 'Bigger wins AVERAGES; small tuned models win NICHES — a 7B support-tuned beats a 70B generalist on your tickets. Symptoms: giant bills, mediocre domain answers. Cure: benchmark YOUR task, then buy the smallest winner.',
        bn: 'বড় গড়-জেতে; ছোট tuned মডেল NICHE-জেতে — ৭B support-tuned আপনার-টিকিটে ৭০B generalist-হারায়। লক্ষণ: দৈত্য-বিল, মাঝারি-domain উত্তর। ওষুধ: আপনার-কাজ benchmark, ক্ষুদ্রতম-বিজয়ী কিনুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Base ≠ broken (it just isn’t mannered)', bn: 'Base ≠ ভাঙা (শুধু ভদ্র নয়)' },
      text: {
        en: 'Base models ramble because completion ≠ conversation: prompting a base with “Q:…A:” works, chatting fails. Symptoms: “as an AI…” never appears, stories never end. Cure: use instruct/chat flavors for dialogue, base for completion research.',
        bn: 'Base মডেল বকবক করে কারণ সম্পূর্ণ ≠ কথোপকথন: base-“Q:…A:” prompt কাজ করে, chatting ফেল। লক্ষণ: “AI হিসেবে…” আসে না, গল্প শেষ হয় না। ওষুধ: সংলাপে instruct/chat স্বাদ, completion-গবেষণায় base।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Scale at work', bn: 'REAL WORLD — কর্ম-scale' },
    },
    {
      type: 'list',
      items: [
        { en: 'Phone assistants: 3B models answering offline — sparks, pocketized.', bn: 'ফোন সহকারী: ৩B মডেল offline-উত্তর — স্ফুলিঙ্গ, পকেটজাত।' },
        { en: 'Code review: 70B-class models catching bugs across repos.', bn: 'কোড-review: repo-জুড়ে বাগ-ধরা ৭০B-শ্রেণি মডেল।' },
        { en: 'Frontier labs: 100k-GPU runs chasing the next spark rung.', bn: 'Frontier lab: পরের-স্ফুলিঙ্গ ধাপ-তাড়া ১০০k-GPU চালান।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Context Engineering', bn: 'পরবর্তী পাঠ — Context Engineering' },
    },
    {
      type: 'para',
      text: {
        en: 'Sparks mapped. Lesson 2 manages the WORKING MEMORY they think in: windows, budgets, roles, and the lost-in-the-middle trap.',
        bn: 'স্ফুলিঙ্গ-ম্যাপ। পাঠ ২ কর্ম-স্মৃতি সামলায় যাতে ভাবে: window, বাজেট, ভূমিকা, lost-in-the-middle ফাঁদ।',
      },
    },
  ],
  exercises: [
    {
      id: 'mlm-ex-1',
      kind: 'mcq',
      topic: 'objective-constant',
      question: { en: 'From 1M to 10B params, the training objective…', bn: '১M থেকে ১০B param, training-লক্ষ্য…' },
      options: [
        { en: 'Stays next-token prediction — only scale changes', bn: 'Next-token predict-থাকে — শুধু scale বদলায়' },
        { en: 'Becomes translation', bn: 'অনুবাদ-হয়' },
        { en: 'Switches to classification', bn: 'Classification-বদলায়' },
        { en: 'Disappears', bn: 'অদৃশ্য-হয়' },
      ],
      answer: 0,
      hint: { en: 'Sparks are bought.', bn: 'স্ফুলিঙ্গ-কেনা।' },
      explanation: {
        en: 'One loss, all rungs: predict the next token. Everything else — jokes, code, reasoning — is an unprogrammed dividend of doing it at scale.',
        bn: 'এক loss, সব ধাপ: next-token predict। বাকি সব — রসিকতা, কোড, যুক্তি — scale-করার অprogrammed লভ্যাংশ।',
      },
    },
    {
      id: 'mlm-ex-2',
      kind: 'mcq',
      topic: 'law-read',
      question: { en: '10× params ≈ −0.3 loss. 100× params ≈ ?', bn: '১০× param ≈ −০.৩ loss। ১০০× param ≈ ?' },
      options: [
        { en: '−0.6 (log-linear: doublings stack)', bn: '−০.৬ (log-linear: দ্বিগুণ-স্তূপ)' },
        { en: '−3.0', bn: '−৩.০' },
        { en: '−0.03', bn: '−০.০৩' },
        { en: 'Zero — it saturates instantly', bn: 'শূন্য — সাথে সাথে সম্পৃক্ত' },
      ],
      answer: 0,
      hint: { en: '2.50 → 1.76 over 100×.', bn: '১০০×-এ ২.৫০ → ১.৭৬।' },
      explanation: {
        en: 'Log-linear: each 10× buys the same ~0.3. 100× = two stacked discounts (−0.74 measured) — predictable, bankable, expensive.',
        bn: 'Log-linear: প্রতি ১০× একই ~০.৩ কেনে। ১০০× = দুই স্তূপ-ছাড় (−০.৭৪ মাপা) — অনুমেয়, bankable, ব্যয়বহুল।',
      },
    },
    {
      id: 'mlm-ex-3',
      kind: 'mcq',
      topic: 'flavor-pick',
      question: { en: 'Support chatbot that must follow policy. Pick?', bn: 'Policy-মানা support chatbot। বাছুন?' },
      options: [
        { en: 'Chat/instruct flavor (SFT + RLHF manners)', bn: 'Chat/instruct স্বাদ (SFT + RLHF ভদ্রতা)' },
        { en: 'Raw base model', bn: 'কাঁচা-base মডেল' },
        { en: 'n-gram counter', bn: 'n-gram counter' },
        { en: 'Random sampler', bn: 'এলোমেলো-sampler' },
      ],
      answer: 0,
      hint: { en: 'Obedience is tuned in.', bn: 'আনুগত্য tune-ঢোকানো।' },
      explanation: {
        en: 'Dialogue needs instruction-following: chat flavors are base engines + manners + values. Base would complete your policy doc into fanfiction.',
        bn: 'সংলাপ instruction-মানা চায়: chat স্বাদ base engine + ভদ্রতা + মূল্য। Base policy-নথি fanfiction-সম্পূর্ণ করত।',
      },
    },
    {
      id: 'mlm-ex-4',
      kind: 'predict',
      topic: 'buy-decision',
      question: { en: '70B generalist vs 7B ticket-tuned on YOUR support eval: tuned wins. Name the principle + the buy.', bn: 'আপনার support eval-এ ৭০B generalist বনাম ৭B ticket-tuned: tuned জেতে। নীতি + কেনা বলুন।' },
      answer: 'Niches beat averages: buy the smallest eval winner (7B tuned).',
      accept: ['niche', 'smallest', 'eval', 'tuned', '7b', 'average'],
      hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
      explanation: {
        en: 'Benchmarks average the internet; your tickets are a niche. Smallest-eval-winner = maximum margin per answer — scale spend where it wins.',
        bn: 'Benchmark internet-গড় করে; আপনার-টিকিট niche। ক্ষুদ্রতম-eval বিজয়ী = প্রতি-উত্তর সর্বোচ্চ-margin — জেতা-খরচ scale করুন।',
      },
    },
  ],
  quiz: {
    id: 'meet-llms-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'mlmq1',
        kind: 'mcq',
        topic: 'emergence-def',
        question: {
          en: 'In the context of scaling large language models, what does emergence specifically refer to?',
          bn: 'লার্জ ল্যাঙ্গুয়েজ মডেল স্কেলিংয়ের ক্ষেত্রে ইমার্জেন্স (emergence) বলতে সুনির্দিষ্টভাবে কী বোঝায়?'
        },
        options: [
          { en: 'Abilities appearing past scale thresholds, unprogrammed', bn: 'Scale threshold-পার অprogrammed-ওঠা সক্ষমতা' },
          { en: 'Programmers adding features', bn: 'Programmer-feature যোগ' },
          { en: 'Models shrinking', bn: 'মডেল-সঙ্কোচন' },
          { en: 'Training loss rising', bn: 'Training loss-ওঠা' },
        ],
        answer: 0,
        hint: { en: 'Nobody programmed jokes.', bn: 'কেউ রসিকতা program করে নি।' },
        explanation: {
          en: 'Jokes, translation, code: absent small, present large — phase changes in capability space, unlocked by scale alone.',
          bn: 'রসিকতা, অনুবাদ, কোড: ছোট-অনুপস্থিত, বড়-উপস্থিত — সক্ষমতা-space phase-পরিবর্তন, শুধু scale-খোলা।',
        },
      },
      {
        id: 'mlmq2',
        kind: 'mcq',
        topic: 'card-read',
        question: { en: 'Model card: 70B, instruct, 128k, $0.50/M. Context = ?', bn: 'Model card: ৭০B, instruct, ১২৮k, $০.৫০/M। Context = ?' },
        options: [
          { en: '128k tokens of working memory', bn: '১২৮k token কর্ম-স্মৃতি' },
          { en: '70 billion tokens', bn: '৭০ billion token' },
          { en: '$0.50 total', bn: 'মোট $০.৫০' },
          { en: 'Instruct means 128 layers', bn: 'Instruct মানে ১২৮ layer' },
        ],
        answer: 0,
        hint: { en: 'HOW step 3.', bn: 'HOW ধাপ ৩।' },
        explanation: {
          en: '128k = tokens the model can consider at once (prompt + history + answer). Params are capacity; context is desk size.',
          bn: '১২৮k = একবারে বিবেচনা-token (prompt + history + উত্তর)। Param ধারণ; context ডেস্ক-আকার।',
        },
      },
      {
        id: 'mlmq3',
        kind: 'mcq',
        topic: 'exp-meaning',
        question: { en: 'EXP 0.05 vs 0.10. Higher exponent means…', bn: 'EXP ০.০৫ বনাম ০.১০। উঁচু-exponent মানে…' },
        options: [
          { en: 'Scale pays better — steeper loss falls', bn: 'Scale ভালো-দেয় — খাড়া-loss পতন' },
          { en: 'Models get bigger', bn: 'মডেল-বড় হয়' },
          { en: 'Training gets slower', bn: 'Training-ধীর হয়' },
          { en: 'Nothing changes', bn: 'কিছু বদলায় না' },
        ],
        answer: 0,
        hint: { en: 'Fortunes pivot on hundredths.', bn: 'শতাংশে-ভাগ্য ঘোরে।' },
        explanation: {
          en: 'The exponent prices scale: 0.10 doubles the per-10× discount vs 0.05 — architecture/data research IS exponent hunting.',
          bn: 'Exponent scale-দাম করে: ০.১০ ০.০৫-দ্বিগুণ প্রতি-১০× ছাড় দেয় — স্থাপত্য/ডেটা গবেষণা exponent-শিকার।',
        },
      },
      {
        id: 'mlmq4',
        kind: 'predict',
        topic: 'loss-forecast',
        question: { en: 'Law: 1M→2.50, 10×=−0.3. Forecast 1T (=10^6 M) params loss. One number.', bn: 'আইন: ১M→২.৫০, ১০×=−০.৩। ১T (=১০^৬ M) param loss-পূর্বাভাস। এক সংখ্যা।' },
        answer: '0.70 (2.50 − 6×0.30).',
        accept: ['0.7', '0.70', '6', '1.8', '1.80'],
        hint: { en: 'Count the 10× jumps from 1M.', bn: '১M থেকে ১০× লাফ-গুনুন।' },
        explanation: {
          en: '10^6 M = six 10× jumps: 2.50 − 6(0.30) = 0.70. Labs literally budget billions on arithmetic like this — then verify.',
          bn: '১০^৬ M = ছয় ১০× লাফ: ২.৫০ − ৬(০.৩০) = ০.৭০। Lab-এমন গাণিতিকে billion-বাজেট করে — তারপর যাচাই।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'context-engineering',
    title: { en: 'Context Engineering', bn: 'Context Engineering' },
  },
};