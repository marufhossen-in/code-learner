import type { Lesson } from '../../../lib/types';

export const SequencesAttentionLesson: Lesson = {
  slug: 'sequences-attention',
  tech: 'deep-learning',
  title: {
    en: 'Sequences and Attention',
    bn: 'ক্রম জরুরি: recurrence ধাপে-ধাপে স্মৃতি বয়, attention একসাথে সর্বত্র'
  },
  summary: {
    en: 'Order matters: recurrence carries memory step by step, attention peeks everywhere at once. You will hand-run attention — scores [1,0.5,1.5] → weights [0.31,0.19,0.51] → mix ≈ 22.0 — shift it with a new query, and see the transformer as attention stacks that ate language.',
    bn: 'ক্রম জরুরি: recurrence ধাপে-ধাপে স্মৃতি বয়, attention একসাথে সর্বত্র উঁকি দেয়। Attention হাতে চালাবেন — স্কোর [১,০.৫,১.৫] → ওজন [০.৩১,০.১৯,০.৫১] → মিশ্রণ ≈ ২২.০ — নতুন-query-তে সরাবেন, transformer-কে ভাষা-খাওয়া attention-স্তূপে দেখবেন।',
  },
  minutes: 17,
  nextLesson: {
    slug: 'dl-capstone',
    title: {
      en: 'Deep Learning Capstone: Solving XOR with Depth & Backprop',
      bn: 'ডিপ লার্নিং ক্যাপস্টোন: গভীরতা ও ব্যাকপ্রপ দিয়ে XOR সমাধান'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Memory, then spotlight', bn: 'WHAT — স্মৃতি, তারপর spotlight' },
    },
    {
      type: 'para',
      text: {
        en: 'Sequences like text and audio depend strictly on order. Recurrent networks carry a memory vector from left to right, but they leak information after 100 steps. Attention solves this by skipping the step-by-step relay entirely. Each token compares itself directly with every other token using queries and keys. In the sequence [the, cat, mat], the word sat attends most heavily to mat.',
        bn: 'টেক্সট এবং অডিওর মতো সিকোয়েন্সের ক্ষেত্রে ক্রম অত্যন্ত গুরুত্বপূর্ণ। রিকারেন্ট নেটওয়ার্ক বাম থেকে ডানে মেমোরি ভেক্টর বহন করে, কিন্তু 100 ধাপ পর তা তথ্য হারিয়ে ফেলে। অ্যাটেনশন ধাপে ধাপে এগিয়ে চলার রিলে সম্পূর্ণ এড়িয়ে সরাসরি সংযোগ তৈরি করে। প্রতিটি টোকেন কুয়েরি ও কি ব্যবহার করে অন্য সব টোকেনের সাথে সরাসরি তুলনা করে। যেমন [the, cat, mat] সিকোয়েন্সে sat শব্দটি সবচেয়ে বেশি mat শব্দে মনোযোগ দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: '“sat” listens hardest to “mat”', bn: '“sat” “mat”-এ জোরে শোনে' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Three words with attention weight bars from sat">
<g font-size="13" font-weight="800" fill="currentColor" text-anchor="middle">
<rect x="60" y="60" width="110" height="44" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/>
<text x="115" y="87">the</text>
<rect x="265" y="60" width="110" height="44" rx="10" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" stroke-width="2"/>
<text x="320" y="87">cat</text>
<rect x="470" y="60" width="110" height="44" rx="10" fill="#4f46e5" opacity="0.25" stroke="#4f46e5" stroke-width="2.5"/>
<text x="525" y="87">sat? ←query</text>
</g>
<g>
<rect x="90" y="150" width="50" height="30" rx="4" fill="#f59e0b" opacity="0.55"/>
<rect x="295" y="165" width="50" height="15" rx="4" fill="#f59e0b" opacity="0.4"/>
<rect x="500" y="130" width="50" height="50" rx="4" fill="#f59e0b" opacity="0.9"/>
</g>
<g font-size="12" font-weight="800" fill="currentColor" text-anchor="middle">
<text x="115" y="200">0.31</text>
<text x="320" y="200">0.19</text>
<text x="525" y="200">0.51</text>
</g>
<g stroke="#4f46e5" stroke-width="2" stroke-dasharray="5 4">
<line x1="500" y1="105" x2="140" y2="145"/>
<line x1="515" y1="105" x2="315" y2="162"/>
<line x1="525" y1="105" x2="525" y2="128"/>
</g>
<text x="320" y="228" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">query “sat” scores every key → softmax → weights → weighted mix of values</text>
</svg>`,
      caption: {
        en: 'Attention is a spotlight with a dimmer: every word lit, brightest wins the mix.',
        bn: 'Attention dimmer-সহ spotlight: প্রতি শব্দ আলোকিত, উজ্জ্বলতম মিশ্রণ জেতে।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'scaled_dot_product_attention.py',
      code: `import math

def softmax(scores):
    exp_scores = [math.exp(s) for s in scores]
    total = sum(exp_scores)
    return [s / total for s in exp_scores]

# Query for word "sat": 2-dimensional embedding
q = [1.0, 0.5]

# Keys and Values for sequence ["the", "cat", "mat"]
keys = [[1.0, 0.0], [0.0, 1.0], [1.0, 1.0]]
values = [10.0, 20.0, 30.0]

# 1. Compute raw dot-product similarity scores: score_i = q . key_i
scores = [q[0]*k[0] + q[1]*k[1] for k in keys]
print(f"Raw dot-product scores: {scores}") # Output: [1.0, 0.5, 1.5]

# 2. Normalize scores via softmax into attention weights summing to 1.0
weights = softmax(scores)
print(f"Attention weights: {[round(w, 2) for w in weights]}") # Output: [0.31, 0.19, 0.51]

# 3. Compute weighted mixture of values
context = sum(w * v for w, v in zip(weights, values))
print(f"Retrieved context value: {context:.1f}") # Output: 22.0`,
      caption: {
        en: 'Scaled dot-product attention calculation in pure Python illustrating raw scores [1.0, 0.5, 1.5], softmax weights [0.31, 0.19, 0.51], and mixed context output 22.0.',
        bn: 'পাইথনে ডট-প্রোডাক্ট অ্যাটেনশন গণনা যেখানে র স্কোর [1.0, 0.5, 1.5], সফটম্যাক্স ওয়েট [0.31, 0.19, 0.51] এবং সংকলিত কনটেক্সট মান 22.0 প্রদর্শিত হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Sequence', def: { en: 'Ordered data: meaning lives in the order.', bn: 'ক্রমিক-ডেটা: অর্থ ক্রমে থাকে।' } },
        { term: 'Hidden state', def: { en: 'RNN’s carried suitcase: memory, leaking.', bn: 'RNN-বাহিত সুটকেস: স্মৃতি, চোঁয়ানো।' } },
        { term: 'Attention', def: { en: 'Weighted peek at all positions at once.', bn: 'একসাথে সব-অবস্থানে ওজন-উঁকি।' } },
        { term: 'Query/Key/Value', def: { en: 'The three attention vectors: query asks, key matches relevance, and value delivers retrieved content.', bn: 'অ্যাটেনশনের তিনটি ভেক্টর: query প্রশ্ন করে, key প্রাসঙ্গিকতা মেলায়, এবং value বিষয়বস্তু সরবরাহ করে।' } },
        { term: 'Transformer', def: { en: 'Attention + MLP stacks. The 2017 architecture eating AI.', bn: 'Attention + MLP স্তূপ। AI-খাওয়া ২০১৭ স্থাপত্য।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — 2017 changed everything', bn: 'WHY — ২০১৭ সব বদলে দিয়েছে' },
    },
    {
      type: 'list',
      items: [
        { en: '“Attention is All You Need”: translation quality leapt, training parallelized (no suitcase relay) — GPUs finally fed at full speed.', bn: '“Attention is All You Need”: অনুবাদ-মান লাফিয়েছে, training সমান্তরাল হয়েছে (সুটকেস-রিলে নেই) — GPU পূর্ণ-গতিতে খেয়েছে।' },
        { en: 'Long-range solved: word 500 attends word 3 DIRECTLY — no 497-step leak. Books, code, genomes fit in one context.', bn: 'দূর-সম্পর্ক সমাধান: শব্দ 500 শব্দ 3 এ সরাসরি মনোযোগ দেয় — 497 ধাপ চোঁয়ানি নেই। বই, কোড, জিনোম এক প্রসঙ্গে বসে।' },
        { en: 'Transformers run the world now: chat, search, code, protein-folding, vision — one architecture, every domain.', bn: 'Transformer এখন পৃথিবী চালায়: chat, search, কোড, protein-folding, vision — এক স্থাপত্য, প্রতি ক্ষেত্র।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Attend in 4 steps', bn: 'HOW — মনোযোগ ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Score query vs keys', bn: '১. Query বনাম key-স্কোর' }, text: { en: 'q·k₁=1, q·k₂=0.5, q·k₃=1.5: dot = relevance.', bn: 'q·k₁=১, q·k₂=০.৫, q·k₃=১.৫: ডট = প্রাসঙ্গিকতা।' } },
        { title: { en: '2. Softmax to weights', bn: '২. Softmax-ওজন' }, text: { en: '[1,0.5,1.5] → [0.31,0.19,0.51]: shares of attention.', bn: '[১,০.৫,১.৫] → [০.৩১,০.১৯,০.৫১]: মনোযোগ-ভাগ।' } },
        { title: { en: '3. Mix the values', bn: '৩. Value মেশান' }, text: { en: '0.31×10+0.19×20+0.51×30 ≈ 22.0: all voices, weighted.', bn: '০.৩১×১০+০.১৯×২০+০.৫১×৩০ ≈ ২২.০: সব কণ্ঠ, ওজনে।' } },
        { title: { en: '4. Every position, parallel', bn: '৪. প্রতি অবস্থান, সমান্তরাল' }, text: { en: 'All queries attend simultaneously — no relay, full GPU.', bn: 'সব query একসাথে মনোযোগ দেয় — রিলে নেই, পূর্ণ-GPU।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The spotlight moves with the query', bn: 'INSIDE — Query-সাথে spotlight সরে' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit attends over keys [[1,0],[0,1],[1,1]] with values [10,20,30]: q=[1,0.5] scores [1,0.5,1.5] → weights [0.31,0.19,0.51] → mix ≈ 22.0. Edit Q to [0,1]: scores [0,1,1] → weights [0.16,0.42,0.42] → mix ≈ 22.67 — watch attention follow the question, not the position.',
        bn: 'এই tryit value [১০,২০,৩০]-সহ key [[১,০],[০,১],[১,১]]-তে মনোযোগ দেয়: q=[১,০.৫] স্কোর [১,০.৫,১.৫] → ওজন [০.৩১,০.১৯,০.৫১] → মিশ্রণ ≈ ২২.০। Q [০,১] করুন: স্কোর [০,১,১] → ওজন [০.১৬,০.৪২,০.৪২] → মিশ্রণ ≈ ২২.৬৭ — মনোযোগ প্রশ্ন-অনুসরণ করে, অবস্থান নয়, দেখুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Attention by hand (try Q = [0,1], press Run)', bn: 'হাতে-Attention (Q = [০,১] দিয়ে Run)' },
      html: '<h3>Scores → weights → mix</h3>\n<pre id="out"></pre>\n<p>Console shows the softmax math.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 8px; padding: 10px; }',
      js: 'const K = [[1,0],[0,1],[1,1]]; // keys: 3 word labels\nconst V = [10, 20, 30];        // values: 3 word contents\nconst Q = [1, 0.5];            // ← try [0,1]: move the spotlight\nconst scores = K.map((k) => Q[0]*k[0] + Q[1]*k[1]);\nconst mx = Math.max(...scores);\nconst exps = scores.map((s) => Math.exp(s - mx));\nconst sum = exps.reduce((a, b) => a + b, 0);\nconst w = exps.map((e) => e / sum);\nconst mix = w.reduce((s, wi, i) => s + wi * V[i], 0);\nconsole.log("scores [" + scores.join(", ") + "] → softmax → [" + w.map((x) => x.toFixed(2)).join(", ") + "]");\ndocument.getElementById("out").textContent =\n  "weights [" + w.map((x) => x.toFixed(2)).join(", ") + "] → mix = " + mix.toFixed(2);',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Attention instincts', bn: 'RESULT — Attention-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Hand-run attention: score, softmax, mix. [0.31,0.19,0.51]→22.0 is the template.', bn: 'Attention হাতে চালান: স্কোর, softmax, মেশান। [০.৩১,০.১৯,০.৫১]→২২.০ ছাঁচ।' },
        { en: 'Attention follows queries: same keys, new question, new spotlight. Content-addressed, not position-bound.', bn: 'মনোযোগ query-অনুসরণ করে: একই key, নতুন-প্রশ্ন, নতুন-spotlight। বিষয়-ঠিকানায়, অবস্থান-বাঁধা নয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Spotlight limits', bn: 'DEBUG — Spotlight-সীমা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Attention ≠ understanding (it is weighted averaging)', bn: 'Attention ≠ বোঝা (এটা ওজন-গড়)' },
      text: {
        en: 'High weight on “mat” means correlation, not comprehension: attention mixes, it does not reason. Symptoms of over-trust: “the model looked at X, so it decided because of X” — weights are not explanations. Cure: behavioral tests (change X, watch output), never weight-theater.',
        bn: '“mat”-এ উচ্চ-ওজন মানে পারস্পরিকতা, বোধগম্যতা নয়: attention মেশায়, যুক্তি করে না। অতি-আস্থা লক্ষণ: “মডেল X দেখেছে, তাই X-কারণে সিদ্ধান্ত” — ওজন ব্যাখ্যা নয়। ওষুধ: আচরণ-পরীক্ষা (X বদলে আউটপুট দেখুন), কখনো ওজন-নাটক নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Attention costs n² (every pair meets)', bn: 'Attention-খরচ n² (প্রতি জোড়া মেলে)' },
      text: {
        en: '100K tokens = 10 BILLION pairs: full attention drowns long contexts in compute and memory. Symptoms: OOM past a length, quadratic bills. Cure ladder: sliding windows, sparse patterns, linear variants — and longer-context models as hardware grows.',
        bn: '100K token = 10 বিলিয়ন বা 1000 কোটি জোড়া: পূর্ণ attention দীর্ঘ প্রসঙ্গে কম্পিউট ও মেমোরি খরচ বহুগুণ বাড়ায়। লক্ষণ: প্রসঙ্গ দৈর্ঘ্য বাড়ার সাথে সাথে OOM ঘটা। সমাধান: স্লাইডিং উইন্ডো বা স্পার্স অ্যাটেনশন প্যাটার্ন ব্যবহার করা।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Spotlights everywhere', bn: 'REAL WORLD — সর্বত্র spotlight' },
    },
    {
      type: 'list',
      items: [
        { en: 'Translation: “sat” attending its subject across languages — the 2017 demo that started it all.', bn: 'অনুবাদ: ভাষাজুড়ে কর্তায় মনোযোগী “sat” — 2017 demo যা সব শুরু করেছে।' },
        { en: 'Chatbots: every token attending all past tokens — conversation as one long mix.', bn: 'Chatbot: প্রতি token সব অতীতে মনোযোগী — কথোপকথন এক দীর্ঘ মিশ্রণ।' },
        { en: 'Vision transformers: image patches attending each other — CNN’s global-eyed heir.', bn: 'Vision transformer: ছবির patch পরস্পরে মনোযোগী — CNN-এর উত্তরাধিকারী।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — DL Capstone', bn: 'পরবর্তী পাঠ — DL Capstone' },
    },
    {
      type: 'para',
      text: {
        en: 'Eyes, ears, spotlight owned. The capstone trains a REAL network end to end — forward, loss, backward, step, repeat — until it learns a curve no line could: the whole hub, alive in your browser.',
        bn: 'চোখ, কান, spotlight অর্জিত। Capstone আসল network শুরু-শেষ train করে — forward, loss, backward, ধাপ, আবার — রেখার অসাধ্য বক্র না শেখা পর্যন্ত: পুরো hub, ব্রাউজারে জীবন্ত।',
      },
    },
  ],
  exercises: [
    {
      id: 'atn-ex-1',
      kind: 'mcq',
      topic: 'score-math',
      question: {
        en: 'Given query vector q = [1, 0.5] and keys [[1, 0], [0, 1], [1, 1]], what are the three raw dot-product attention scores?',
        bn: 'কুয়েরি ভেক্টর q = [1, 0.5] এবং কি-সমূহ [[1, 0], [0, 1], [1, 1]] দেওয়া থাকলে তিনটি কাঁচা ডট-প্রোডাক্ট অ্যাটেনশন স্কোর কত হবে?'
      },
      options: [
        { en: '[1, 0.5, 1.5] (dots)', bn: '[1, 0.5, 1.5] (ডট গুণফল)' },
        { en: '[1, 0, 1] (first coords)', bn: '[1, 0, 1] (প্রথম স্থানাঙ্ক)' },
        { en: '[0.31, 0.19, 0.51] (those are weights)', bn: '[0.31, 0.19, 0.51] (ওগুলো ওয়েট)' },
        { en: '[10, 20, 30] (those are values)', bn: '[10, 20, 30] (ওগুলো ভ্যালু)' },
      ],
      answer: 0,
      hint: { en: 'Dot each key with q.', bn: 'প্রতি key q-তে ডট করুন।' },
      explanation: {
        en: '1×1+0.5×0=1; 1×0+0.5×1=0.5; 1×1+0.5×1=1.5. Scores are raw relevance; softmax turns them into weights — never confuse the two columns.',
        bn: '1×1+0.5×0=1; 1×0+0.5×1=0.5; 1×1+0.5×1=1.5। স্কোর কাঁচা প্রাসঙ্গিকতা নির্দেশ করে; এরপর সফটম্যাক্স এদের ওয়েটে পরিণত করে।'
      },
    },
    {
      id: 'atn-ex-2',
      kind: 'mcq',
      topic: 'mix-math',
      question: { en: 'Weights [0.31, 0.19, 0.51], values [10, 20, 30]. Mix?', bn: 'ওজন [0.31, 0.19, 0.51], ভ্যালু [10, 20, 30]। সংকলিত মান কত?' },
      options: [
        { en: '≈ 22.0', bn: '≈ 22.0' },
        { en: '60 (plain sum)', bn: '60 (সাধারণ যোগফল)' },
        { en: '20 (middle value)', bn: '20 (মাঝের মান)' },
        { en: '0.51 × 30 = 15.3 (winner only)', bn: '0.51 × 30 = 15.3 (কেবল জয়ী)' },
      ],
      answer: 0,
      hint: { en: 'Weighted sum: all voices.', bn: 'ওজন-যোগ: সব কণ্ঠ।' },
      explanation: {
        en: '3.1+3.8+15.3 = 22.2 ≈ 22.0 (exact 21.99 with unrounded weights). Attention mixes EVERYONE — the winner leads, never solos.',
        bn: '3.1 + 3.8 + 15.3 = 22.2 ≈ 22.0। অ্যাটেনশন সকল উপাদানকে ওয়েটেড অ্যাভারেজ হিসেবে একত্রিত করে।'
      },
    },
    {
      id: 'atn-ex-3',
      kind: 'mcq',
      topic: 'rnn-leak',
      question: { en: 'RNNs struggle past ~100 steps. Why?', bn: 'RNN ~100 ধাপের পরে কঠিন হয়ে পড়ে কেন?' },
      options: [
        { en: 'Hidden-state gradients vanish through the long relay', bn: 'দীর্ঘ রিলেতে হিডেন স্টেট গ্র্যাডিয়েন্ট অদৃশ্য হয়ে যায়' },
        { en: 'RNNs cannot add', bn: 'RNN যোগ করতে পারে না' },
        { en: 'Steps are too fast', bn: 'ধাপ অনেক দ্রুত' },
        { en: 'Softmax forbids it', bn: 'Softmax নিষেধ করে' },
      ],
      answer: 0,
      hint: { en: 'Suitcases leak.', bn: 'সুটকেস তথ্য হারায়।' },
      explanation: {
        en: 'Backprop through 100 relays multiplies 100 slopes: signal decays to noise. Attention’s direct links (word 500 ↔ word 3) bypass the relay entirely.',
        bn: '100 রিলে পেছনে ব্যাকপ্রপ 100 ঢাল গুণ করে: সিগন্যাল ক্ষয় হয়ে নয়েজে পরিণত হয়। অ্যাটেনশনের সরাসরি সংযোগ (শব্দ 500 ↔ শব্দ 3) রিলে পুরো এড়িয়ে যায়।'
      },
    },
    {
      id: 'atn-ex-4',
      kind: 'predict',
      topic: 'query-shift',
      question: { en: 'Q=[0,1] gives weights [0.16, 0.42, 0.42], mix ≈ 22.67. State the one-line moral.', bn: 'Q=[0, 1] এর ফলে ওয়েট [0.16, 0.42, 0.42] এবং মিশ্রণ ≈ 22.67 পাওয়া গেলে এর শিক্ষা কী?' },
      answer: 'Same keys and values, new question, new answer: attention is content-addressed by the query.',
      accept: ['query', 'question', 'content', 'same keys', 'spotlight'],
      hint: { en: 'What changed? Only Q.', bn: 'কী বদলেছে? কেবল Q।' },
      explanation: {
        en: 'Keys/values frozen; Q moved the spotlight 0.51→0.42/0.42 and the mix 22.0→22.67. Attention answers the ASKED question — change the ask, change the blend.',
        bn: 'কি এবং ভ্যালু স্থির রেখে কুয়েরি পরিবর্তন স্পটলাইটকে 0.51 থেকে 0.42/0.42 এ এবং সংকলিত মান 22.0 থেকে 22.67 এ সরিয়ে নিয়েছে। অ্যাটেনশন জিজ্ঞাসিত প্রশ্নের ওপর নির্ভর করে।'
      },
    },
  ],
  quiz: {
    id: 'sequences-attention-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'atnq1',
        kind: 'mcq',
        topic: 'qkv-roles',
        question: {
          en: 'In the attention mechanism, what specific functional role is performed by Query, Key, and Value respectively?',
          bn: 'অ্যাটেনশন মেকানিজমে Query, Key এবং Value যথাক্রমে কোন কোন নির্দিষ্ট ভূমিকা পালন করে?'
        },
        options: [
          { en: 'Ask / relevance-label / answer-content', bn: 'প্রশ্ন / প্রাসঙ্গিকতা-লেবেল / উত্তর-বিষয়' },
          { en: 'Answer / ask / label', bn: 'উত্তর / প্রশ্ন / লেবেল' },
          { en: 'Three names for weights', bn: 'ওজনের তিন নাম' },
          { en: 'Loss / gradient / update', bn: 'Loss / gradient / update' },
        ],
        answer: 0,
        hint: { en: 'Keyterms.', bn: 'Keyterms।' },
        explanation: {
          en: 'Queries ask, keys advertise relevance, values deliver content. Mixing up the trio = mixing up the mechanism.',
          bn: 'Query প্রশ্ন করে, key প্রাসঙ্গিকতা-বিজ্ঞাপন দেয়, value বিষয় দেয়। ত্রয়ী-গুলানো = প্রক্রিয়া-গুলানো।',
        },
      },
      {
        id: 'atnq2',
        kind: 'mcq',
        topic: 'parallel-win',
        question: { en: 'Attention trains faster than RNNs mainly because…', bn: 'Attention RNN-চেয়ে দ্রুত train হয় মূলত…' },
        options: [
          { en: 'All positions compute in parallel — no step-relay', bn: 'সব অবস্থান সমান্তরাল গণনা করে — ধাপ-relay নেই' },
          { en: 'It uses fewer words', bn: 'এটা কম-শব্দ ব্যবহার করে' },
          { en: 'Softmax is magic', bn: 'Softmax জাদু' },
          { en: 'RNNs are banned', bn: 'RNN নিষিদ্ধ' },
        ],
        answer: 0,
        hint: { en: 'No suitcase relay.', bn: 'সুটকেস-relay নেই।' },
        explanation: {
          en: 'RNN step 50 waits for step 49; attention computes all pairs at once — GPUs feast instead of starve. Parallelism, not cleverness, fed the scaling era.',
          bn: 'RNN ধাপ 50 ধাপ 49 এর অপেক্ষা করে; attention সব জোড়া একসাথে গণনা করে — GPU না-খেয়ে ভোজ করে।'
        },
      },
      {
        id: 'atnq3',
        kind: 'mcq',
        topic: 'weight-trust',
        question: { en: '“High weight on X proves the model decided because of X.” Verdict?', bn: '“X-এ উচ্চ-ওজন প্রমাণ করে মডেল X-কারণে সিদ্ধান্ত নিয়েছে।” রায়?' },
        options: [
          { en: 'False — weights correlate; test behaviorally', bn: 'মিথ্যা — ওজন পারস্পরিক; আচরণে পরীক্ষা করুন' },
          { en: 'True — weights explain', bn: 'সত্যি — ওজন ব্যাখ্যা করে' },
          { en: 'True for transformers only', bn: 'শুধু transformer-সত্যি' },
          { en: 'Meaningless question', bn: 'অর্থহীন-প্রশ্ন' },
        ],
        answer: 0,
        hint: { en: 'DEBUG warn: weight-theater.', bn: 'DEBUG warn: ওজন-নাটক।' },
        explanation: {
          en: 'Attention mixes; downstream MLPs decide. Change X, keep weights, watch output — behavior is evidence, heatmaps are decoration.',
          bn: 'Attention মেশায়; নিচের-MLP সিদ্ধান্ত নেয়। X বদলান, ওজন রাখুন, আউটপুট দেখুন — আচরণ প্রমাণ, heatmap সাজ।'
        },
      },
      {
        id: 'atnq4',
        kind: 'predict',
        topic: 'n2-bill',
        question: { en: '100K-token context, full attention. State the pair count + one cure.', bn: '100K token প্রসঙ্গ, পূর্ণ attention। জোড়া-গণনা + এক সমাধান বলুন।' },
        answer: '10 billion pairs (100K²): sliding windows, sparse patterns, or linear attention.',
        accept: ['10 billion', '100K', 'n²', 'window', 'sparse', 'linear'],
        hint: { en: 'DEBUG tip.', bn: 'DEBUG টিপস।' },
        explanation: {
          en: 'Every token meets every token: (10⁵)² = 10¹⁰ pairs. Windows/sparsity cut the guest list — the art of long context.',
          bn: 'প্রতি টোকেন প্রতিটি টোকেনকে স্পর্শ করে: (10⁵)² = 10¹⁰ জোড়া। উইন্ডো বা স্পার্স কৌশল এই সংখ্যা কমিয়ে আনে।'
        },
      },
    ],
  },
};