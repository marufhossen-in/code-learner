import type { Lesson } from '../../../lib/types';

export const ContextEngineeringLesson: Lesson = {
  slug: 'context-engineering',
  tech: 'llms',
  title: {
    en: 'Context Engineering',
    bn: 'কর্ম-স্মৃতি ভবন-দুর্লভ GPU: window, ভূমিকা, বাজেট, lost-in-the-middle'
  },
  summary: {
    en: 'Working memory is the scarcest GPU in the building: windows, roles, budgets, and the lost-in-the-middle trap. You will map the desk, balance an 8k budget live (7,700 spent, 300 left), and learn retrieval over stuffing.',
    bn: 'কর্ম-স্মৃতি ভবন-দুর্লভ GPU: window, ভূমিকা, বাজেট, lost-in-the-middle ফাঁদ। ডেস্ক-ম্যাপ করবেন, ৮k বাজেট live-মেলাবেন (৭,৭০০ খরচ, ৩০০ বাকি), stuffing-ওপর retrieval শিখবেন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — A desk, not a warehouse', bn: 'WHAT — ডেস্ক, গুদাম নয়' },
    },
    {
      type: 'para',
      text: {
        en: 'The context window represents the active working memory available to an LLM. Different roles partition this space into system instructions, user requests, assistant responses, and tool observations. As input length increases, attention dilutes and facts placed in the middle become harder for the model to recall accurately. Serving systems use a key-value cache to store past activations, ensuring previous tokens are computed only once. Effective context engineering is the disciplined art of deciding exactly which tokens deserve space on this desk.',
        bn: 'কনটেক্সট উইন্ডো হলো একটি লার্জ ল্যাঙ্গুয়েজ মডেলের জন্য নির্ধারিত সক্রিয় কার্যকারী মেমোরি। বিভিন্ন রোল বা ভূমিকা এই স্থানটিকে সিস্টেম নির্দেশাবলি, ব্যবহারকারীর অনুরোধ, সহকারীর প্রতিক্রিয়া এবং টুলের তথ্যে বিভক্ত করে। ইনপুটের দৈর্ঘ্য বাড়ার সাথে সাথে অ্যাটেনশন হালকা হয়ে যায় এবং মাঝে থাকা তথ্যগুলোর নির্ভুল স্মৃতি হ্রাস পায়। সার্ভিং প্ল্যাটফর্মগুলো কেভি ক্যাশ ব্যবহার করে পূর্ববর্তী অ্যাক্টিভেশন সংরক্ষণ করে, যাতে পুরোনো টোকেনের হিসাব পুনরায় করতে না হয়। কনটেক্সট ইঞ্জিনিয়ারিং মূলত ডেস্কে কোন কোন টোকেন রাখা প্রয়োজন তা সুশৃঙ্খলভাবে পরিচালনার কৌশল।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The 8k desk — every token rents space', bn: '৮k ডেস্ক — প্রতি token-জায়গা ভাড়া' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Stacked context budget bar and lost in the middle curve">
<text x="320" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">budget: 8,000 tokens</text>
<g font-size="10" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="40" y="35" width="32" height="44" rx="4" fill="#4f46e5" opacity="0.8"/>
<text x="56" y="60" fill="#fff">sys</text>
<rect x="74" y="35" width="175" height="44" rx="4" fill="#8b5cf6" opacity="0.7"/>
<text x="161" y="60" fill="#fff">history 2500</text>
<rect x="251" y="35" width="266" height="44" rx="4" fill="#f59e0b" opacity="0.7"/>
<text x="384" y="60" fill="#451a03">docs 3800</text>
<rect x="519" y="35" width="14" height="44" rx="4" fill="#16a34a" opacity="0.8"/>
<rect x="535" y="35" width="45" height="44" rx="4" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
<text x="557" y="60">300</text>
</g>
<text x="320" y="95" text-anchor="middle" font-size="11" fill="currentColor">system 400 · history 2500 · docs 3800 · query 200 · reserve 800 → used 7,700 · left 300</text>
<text x="320" y="120" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">lost in the middle (recall by position)</text>
<path d="M80,200 Q200,200 240,160 Q320,120 400,160 Q440,200 560,200" fill="none" stroke="#ef4444" stroke-width="3"/>
<g font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">
<text x="80" y="218">start ✓</text>
<text x="320" y="140">middle ✗ buried = forgotten</text>
<text x="560" y="218">end ✓</text>
</g>
</svg>`,
      caption: {
        en: 'Top: the budget bar — stuffing overflows it. Bottom: the U-curve — pin gold at the edges.',
        bn: 'ওপর: বাজেট-বার — stuffing উপচায়। নিচ: U-curve — সোনা-কিনারায় পিন করুন।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'context_budget.py',
      code: `def check_budget(window_size, allocations):
    used = sum(allocations.values())
    remaining = window_size - used
    fits = remaining >= 0
    return used, remaining, fits

budget = 8000
parts = {
    "system": 400,
    "history": 2500,
    "docs": 3800,
    "query": 200,
    "reserve": 800
}

used, left, fits = check_budget(budget, parts)
print(f"Allocations: {parts}")
print(f"Used tokens: {used} / {budget} | Remaining: {left} | Fits: {fits}")
# Output: Used tokens: 7700 / 8000 | Remaining: 300 | Fits: True

# Simulating document stuffing overflow:
parts["docs"] = 5000
used_over, left_over, fits_over = check_budget(budget, parts)
print(f"With docs=5000 -> Used: {used_over} | Deficit: {left_over} | Fits: {fits_over}")
# Output: With docs=5000 -> Used: 8900 | Deficit: -900 | Fits: False`,
      caption: {
        en: 'Context window budgeting in Python demonstrating 7700 used out of 8000 with 300 remaining, and an overflow deficit of 900 when documentation expands to 5000 tokens.',
        bn: 'পাইথনে কনটেক্সট উইন্ডো বাজেটিং যেখানে ৮০০০ এর মধ্যে ৭৭০০ টোকেন ব্যবহৃত হয়ে ৩০০ অবশিষ্ট থাকে, এবং ডকুমেন্টেশন ৫০০০ হলে ৯০০ টোকেনের ঘাটতি ঘটে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Context window', def: { en: 'The maximum total number of tokens an LLM can process simultaneously in a single prompt and response interaction.', bn: 'একটি একক প্রম্পট ও প্রতিক্রিয়ায় লার্জ ল্যাঙ্গুয়েজ মডেল একসঙ্গে সর্বোচ্চ যতগুলো টোকেন বিবেচনা করতে পারে।' } },
        { term: 'Roles', def: { en: 'Structured message channels such as system, user, assistant, and tool that organize conversation state and permissions.', bn: 'সিস্টেম, ইউজার, অ্যাসিস্ট্যান্ট এবং টুল চ্যানেলের মাধ্যমে কথোপকথনের অনুমতি ও তথ্য সুসংগঠিত করার কাঠামো।' } },
        { term: 'Lost in the middle', def: { en: 'The empirical degradation in model retrieval accuracy when crucial information is positioned midway through long prompts.', bn: 'দীর্ঘ প্রম্পটের মাঝামাঝি অংশে গুরুত্বপূর্ণ তথ্য স্থাপন করা হলে মডেলের তা সঠিকভাবে স্মরণে ব্যর্থ হওয়ার প্রবণতা।' } },
        { term: 'KV cache', def: { en: 'An inference memory buffer holding computed attention keys and values from prior tokens to avoid redundant calculations.', bn: 'ইনফারেন্স মেমোরি বাফার যা পূর্ববর্তী টোকেনের কি এবং ভ্যালু সংরক্ষণ করে পুনরাবৃত্তিমূলক গণনা বন্ধ করে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Context is the API', bn: 'কেন — Context হলো API' },
    },
    {
      type: 'list',
      items: [
        { en: 'Every LLM skill (RAG, agents, chat) is context curation wearing a costume.', bn: 'প্রতি LLM-দক্ষতা (RAG, agent, chat) ছদ্মবেশে context-বাছাই।' },
        { en: 'Tokens are money: $/million means every stuffed page bills per answer.', bn: 'Token-টাকা: $/million মানে প্রতি stuff-পাতা উত্তর-বিল করে।' },
        { en: 'Rot is silent: long contexts answer confidently AND wrongly — budgets are safety.', bn: 'Rot নীরব: দীর্ঘ প্রেক্ষাপট বা context আত্মবিশ্বাসের সাথে ভুল উত্তর দেয় — বাজেট হলো নিরাপত্তা।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Pack a window in 4 steps', bn: 'HOW — Window ৪ ধাপে pack' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Fix roles', bn: '১. ভূমিকা-ঠিক' }, text: { en: 'System = policy; user = ask; tools = facts.', bn: 'System = policy; user = চাওয়া; tool = তথ্য।' } },
        { title: { en: '2. Retrieve, don’t stuff', bn: '২. Retrieve, stuff নয়' }, text: { en: 'Top-k chunks only — relevance-ranked.', bn: 'শুধু top-k chunk — প্রাসঙ্গিকতা-ক্রম।' } },
        { title: { en: '3. Pin the edges', bn: '৩. কিনারা-পিন' }, text: { en: 'Key facts first AND last; filler middle.', bn: 'মূল-তথ্য প্রথম ও শেষে; ভরাট-মাঝে।' } },
        { title: { en: '4. Reserve output', bn: '৪. Output-রিজার্ভ' }, text: { en: 'Hold 10% for the answer — never pack 100%.', bn: 'উত্তরে ১০%-ধরুন — ১০০% pack কখনো নয়।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The budget, balanced', bn: 'INSIDE — বাজেট, মেলানো' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit balances an 8k desk: system 400 + history 2,500 + docs 3,800 + query 200 + reserve 800 = 7,700 spent, 300 left — green. Raise DOCS to 5,000 and the bar overflows red: something must compress (summarize history, retrieve fewer chunks). Budgets turn vibes into arithmetic.',
        bn: 'এই tryit ৮k ডেস্ক-মেলায়: system ৪০০ + history ২,৫০০ + নথি ৩,৮০০ + query ২০০ + reserve ৮০০ = ৭,৭০০ খরচ, ৩০০ বাকি — সবুজ। DOCS ৫,০০০-তুলে বার লাল-উপচানো দেখুন: কিছু সংকোচন-হতেই হবে (history-সারসংক্ষেপ, কম-chunk retrieve)। বাজেট ভাব-গাণিতিক করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Budget balancer live (raise DOCS, press Run)', bn: 'Budget balancer live (DOCS বাড়িয়ে Run)' },
      html: '<h3>Pack the 8k desk</h3>\n<pre id="out"></pre>\n<p>Console itemizes the spend.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #818cf8; border-radius: 8px; padding: 10px; }',
      js: 'const W = 8000;\nconst SYSTEM = 400, HISTORY = 2500, DOCS = 3800, QUERY = 200, RESERVE = 800; // ← raise DOCS to 5000!\nconst parts = [["system", SYSTEM], ["history", HISTORY], ["docs", DOCS], ["query", QUERY], ["reserve", RESERVE]];\nparts.forEach(([k, v]) => console.log(k + ": " + v));\nconst used = SYSTEM + HISTORY + DOCS + QUERY + RESERVE;\nconst left = W - used;\nconsole.log("used " + used + " / " + W);\ndocument.getElementById("out").textContent = "used " + used + " · left " + left + " → " + (left >= 0 ? "FITS ✓" : "OVERFLOW ✗ compress!");',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Context instincts', bn: 'RESULT — Context-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Budget every prompt: roles + retrieval + reserve — arithmetic before vibes.', bn: 'প্রতি prompt-বাজেট: ভূমিকা + retrieval + reserve — ভাব-আগে গাণিতিক।' },
        { en: 'Respect the U-curve: gold at edges, filler in the middle.', bn: 'U-curve সম্মান: সোনা-কিনারায়, ভরাট-মাঝে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Desk disasters', bn: 'DEBUG — ডেস্ক-বিপর্যয়' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Stuffing the warehouse (100 pages in, nonsense out)', bn: 'গুদাম-stuff (১০০ পাতা ঢোকে, অর্থহীন বেরোয়)' },
      text: {
        en: 'Huge contexts dilute attention AND multiply cost: the model skims, bills swell. Symptoms: ignored instructions mid-prompt, $20 answers. Cure: retrieve top-k, summarize history, budget-gate every call.',
        bn: 'বিশাল কনটেক্সট attention পাতলা করে ও খরচ বহুগুণ বাড়ায়: মডেল ভাসা-ভাসা পড়ে এবং বিল ফুলে ওঠে। লক্ষণ: প্রম্পটের মাঝে থাকা নির্দেশনা অগ্রাহ্য হওয়া। সমাধান: প্রাসঙ্গিক টপ-কে চাঙ্ক আনা এবং হিস্ট্রি সংক্ষেপ করা।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Role bleed (the model obeys the wrong voice)', bn: 'Role-রক্তপাত (মডেল ভুল-কণ্ঠ মানে)' },
      text: {
        en: 'Pasted content smuggles instructions (“ignore policy…”): flat prompts can’t tell voices apart. Symptoms: web text hijacking behavior. Cure: strict roles — retrieved text as TOOL/data, never USER orders.',
        bn: 'অনুলিপিকৃত তথ্যে অনেক সময় লুকানো নির্দেশ থাকে (“নীতিমালা অগ্রাহ্য করুন…”)। লক্ষণ: বাইরের টেক্সট মডেলের আচরণ পরিবর্তন করে ফেলা। প্রতিকার: উদ্ধারকৃত তথ্যকে টুল বা ডেটা রোলে রাখা, কখনো সরাসরি ব্যবহারকারীর আদেশ হিসেবে না পাঠানো।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Desks managed', bn: 'REAL WORLD — সামলানো-ডেস্ক' },
    },
    {
      type: 'list',
      items: [
        { en: 'Support bots: 3 chunks + policy pinned top — $0.002 answers.', bn: 'Support bot: ৩ chunk + ওপরে নীতিমালা পিন — $০.০০২ উত্তর।' },
        { en: 'Code copilots: open files as context, ranked by relevance.', bn: 'কোড-copilot: খোলা ফাইল কনটেক্সট হিসেবে প্রাসঙ্গিকতার ক্রমানুসারে রাখা।' },
        { en: 'Long-doc QA: map-reduce over chapters — never one giant stuff.', bn: 'দীর্ঘ-নথি QA: অধ্যায়ে map-reduce — এক দৈত্যাকার স্টাফিং কখনো নয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Pretraining and Data', bn: 'পরবর্তী পাঠ — Pretraining এবং Data' },
    },
    {
      type: 'para',
      text: {
        en: 'Desks packed. Lesson 3 goes UPSTREAM: where trillions of tokens come from, how BPE cuts them, and Chinchilla’s 20× law.',
        bn: 'ডেস্ক প্রস্তুত। পাঠ ৩ উজানে যায়: ট্রিলিয়ন টোকেনের উৎস, BPE টোকেনাইজেশন এবং চিনচিলার ২০ গুণ স্কেলিং সূত্র।',
      },
    },
  ],
  exercises: [
    {
      id: 'ceg-ex-1',
      kind: 'mcq',
      topic: 'u-curve',
      question: { en: 'Key policy line buried mid-prompt. Likely recall?', bn: 'মূল নীতিমালা লাইন প্রম্পটের মাঝে লুকানো থাকলে স্মরণের সম্ভাবনা কেমন?' },
      options: [
        { en: 'Worst — lost in the middle; pin it at an edge', bn: 'সবচেয়ে খারাপ — মাঝে হারিয়ে যায়; কিনারায় পিন করুন' },
        { en: 'Best — middles get focus', bn: 'সেরা — মাঝখানে বেশি মনোযোগ পায়' },
        { en: 'Position never matters', bn: 'অবস্থান কখনো কোনো প্রভাব ফেলে না' },
        { en: 'Only length matters', bn: 'শুধু দৈর্ঘ্য প্রভাব ফেলে' },
      ],
      answer: 0,
      hint: { en: 'The U-curve.', bn: 'ইউ-কার্ভ (U-curve)।' },
      explanation: {
        en: 'Recall is U-shaped: beginnings anchor, ends recency-win, middles blur. Duplicate critical lines top AND bottom.',
        bn: 'তথ্য স্মরণের হার U-আকৃতির হয়: শুরু এবং শেষের অংশ সবচেয়ে ভালোভাবে মনে থাকে, কিন্তু মাঝের অংশ ঝাপসা হয়ে যায়।'
      },
    },
    {
      id: 'ceg-ex-2',
      kind: 'mcq',
      topic: 'budget-math',
      question: { en: 'DOCS 3800 → 5000. Desk status?', bn: 'ডকুমেন্টেশন ৩৮০০ থেকে ৫০০০ হলে ডেস্কের অবস্থা কী হবে?' },
      options: [
        { en: 'OVERFLOW by 900 — compress something', bn: '৯০০ টোকেন উপচে পড়বে — কিছু সংক্ষেপ করুন' },
        { en: 'Still fits', bn: 'তবুও ধরে যাবে' },
        { en: 'Exactly full', bn: 'ঠিক পুরো ভর্তি হবে' },
        { en: 'Window auto-grows', bn: 'উইন্ডো নিজে থেকেই বেড়ে যাবে' },
      ],
      answer: 0,
      hint: { en: '7,700 + 1,200 vs 8,000.', bn: '৭,৭০০ + ১,২০০ বনাম ৮,০০০।' },
      explanation: {
        en: '7,700 + 1,200 = 8,900 > 8,000: overflow by 900. Windows never stretch — summarize history or retrieve fewer chunks.',
        bn: '৭,৭০০ + ১,২০০ = ৮,৯০০ যা ৮,০০০ এর চেয়ে বড়: ফলে ৯০০ টোকেন উপচে পড়ে। তাই হিস্ট্রি সংক্ষেপ করতে হবে।'
      },
    },
    {
      id: 'ceg-ex-3',
      kind: 'mcq',
      topic: 'role-fix',
      question: { en: 'Web text hijacks the bot. Fix?', bn: 'বাইরের ওয়েব টেক্সট বটকে বিভ্রান্ত করলে সমাধান কী?' },
      options: [
        { en: 'Retrieved text as TOOL/data, never USER orders', bn: 'উদ্ধারকৃত টেক্সটকে TOOL বা ডেটা হিসেবে রাখা, USER আদেশ হিসেবে নয়' },
        { en: 'More system caps-lock', bn: 'সিস্টেমে বড় হাতের অক্ষরে সতর্কতা লেখা' },
        { en: 'Longer prompts', bn: 'আরও দীর্ঘ প্রম্পট লেখা' },
        { en: 'Trust the web', bn: 'ওয়েবের টেক্সটকে অন্ধভাবে বিশ্বাস করা' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip: voices.', bn: 'টিপস: কণ্ঠ ও ভূমিকা আলাদা রাখুন।' },
      explanation: {
        en: 'Roles are access control for attention: DATA lanes can inform but never command. Structure beats shouting.',
        bn: 'ভূমিকা বা রোল হলো অ্যাটেনশনের জন্য অ্যাক্সেস কন্ট্রোল: ডেটা চ্যানেল তথ্য সরবরাহ করতে পারে কিন্তু সরাসরি আদেশ দিতে পারে না।'
      },
    },
    {
      id: 'ceg-ex-4',
      kind: 'predict',
      topic: 'pack-plan',
      question: { en: 'Answers cost $0.40; docs are 6,000 tokens. Name two packing cuts in one line.', bn: 'প্রতি উত্তরে খরচ $০.৪০ এবং ডকুমেন্ট ৬,০০০ টোকেন। বাজেটে কুলানোর জন্য দুটি কৌশল কী?' },
      answer: 'Retrieve top-3 chunks instead of all docs; summarize history to 500 tokens.',
      accept: ['top', 'chunk', 'retriev', 'summar', 'history', 'fewer'],
      hint: { en: 'DEBUG warn’s cure.', bn: 'DEBUG সতর্কতা দেখুন।' },
      explanation: {
        en: 'Relevance-rank + summarize: 6,000 → ~1,500 tokens keeps recall while cutting bills 4×. Packing is profit.',
        bn: 'প্রাসঙ্গিকতা নির্ধারণ ও সংক্ষেপণ: ৬,০০০ থেকে কমিয়ে ~১,৫০০ টোকেনে আনলে স্মৃতি অক্ষুণ্ণ রেখেই খরচ ৪ গুণ কমানো যায়।'
      },
    },
  ],
  quiz: {
    id: 'context-engineering-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'cegq1',
        kind: 'mcq',
        topic: 'kv-meaning',
        question: {
          en: 'In modern LLM inference systems, what essential benefit does the KV cache provide?',
          bn: 'আধুনিক LLM ইনফারেন্স সিস্টেমে কেভি ক্যাশ (KV cache) কী অপরিহার্য সুবিধা প্রদান করে?'
        },
        options: [
          { en: 'History states computed once, reused per token', bn: 'পূর্ববর্তী অবস্থার কি ও ভ্যালু একবার হিসাব করে প্রতি টোকেনে পুনঃব্যবহার করা' },
          { en: 'Infinite context', bn: 'অসীম মেমোরি তৈরি করা' },
          { en: 'No memory cost', bn: 'র‍্যামের কোনো খরচ না থাকা' },
          { en: 'Faster training', bn: 'প্রশিক্ষণের গতি বৃদ্ধি করা' },
        ],
        answer: 0,
        hint: { en: 'Memory rents by token.', bn: 'টোকেন প্রতি মেমোরি ভাড়া।' },
        explanation: {
          en: 'Serving caches keys/values per history token: generation reuses them (fast) while memory grows with context (rented).',
          bn: 'ইনফারেন্সের সময় প্রতিটি টোকেনের কি এবং ভ্যালু ক্যাশ করে রাখা হয়, যার ফলে জেনারেশন অত্যন্ত দ্রুত হয়।'
        },
      },
      {
        id: 'cegq2',
        kind: 'mcq',
        topic: 'reserve-rule',
        question: {
          en: 'When budgeting tokens for a context window, why must engineers always maintain a reserve buffer?',
          bn: 'কনটেক্সট উইন্ডোর টোকেন বাজেটিংয়ের সময় ইঞ্জিনিয়ারদের কেন সর্বদা একটি রিজার্ভ বাফার রাখা আবশ্যক?'
        },
        options: [
          { en: 'Hold ~10% for the answer — never pack 100%', bn: 'উত্তরের জন্য প্রায় ১০% জায়গা খালি রাখা — কখনো ১০০% পূর্ণ না করা' },
          { en: 'Pack 100% always', bn: 'সবসময় ১০০% প্রম্পট দিয়ে ভরাট করা' },
          { en: 'Answers need no space', bn: 'উত্তরের জন্য কোনো জায়গার প্রয়োজন হয় না' },
          { en: 'Reserve is waste', bn: 'রিজার্ভ রাখা অপচয়' },
        ],
        answer: 0,
        hint: { en: 'HOW step 4.', bn: 'HOW ধাপ ৪।' },
        explanation: {
          en: 'Full desks truncate answers mid-sentence: the reserve guarantees room to finish — 800 of 8,000 here.',
          bn: 'সম্পূর্ণ উইন্ডো প্রম্পট দিয়ে পূর্ণ করলে উত্তর মাঝপথে কাটা পড়ে; রিজার্ভ বাফার উত্তর সম্পূর্ণ করার নিশ্চয়তা দেয়।'
        },
      },
      {
        id: 'cegq3',
        kind: 'mcq',
        topic: 'rot-cost',
        question: {
          en: 'What are the two major engineering penalties imposed when context rot degrades a model interaction?',
          bn: 'কনটেক্সট রটের কারণে যখন মডেলের সক্ষমতা হ্রাস পায়, তখন দুটি প্রধান ইঞ্জিনিয়ারিং ক্ষয়ক্ষতি কী কী?'
        },
        options: [
          { en: 'Accuracy AND money — diluted attention, billed tokens', bn: 'নির্ভুলতা হ্রাস এবং অর্থদণ্ড — দুর্বল অ্যাটেনশন ও অতিরিক্ত বিল' },
          { en: 'Nothing', bn: 'কোনো ক্ষতি হয় না' },
          { en: 'Only speed', bn: 'কেবল গতি সামান্য কমে' },
          { en: 'Only style', bn: 'ভাষার ধাঁচ পরিবর্তিত হয়' },
        ],
        answer: 0,
        hint: { en: 'WHY #2–3.', bn: 'WHY #২–৩।' },
        explanation: {
          en: 'Double tax: every extra token bills AND dilutes. Short relevant contexts are accurate AND cheap — no tradeoff.',
          bn: 'দ্বিমুখী ক্ষতি: প্রতিটি অতিরিক্ত অপ্রয়োজনীয় টোকেন বিল বৃদ্ধি করে এবং অ্যাটেনশন পাতলা করে কার্যকারিতা কমায়।'
        },
      },
      {
        id: 'cegq4',
        kind: 'predict',
        topic: 'edge-pin',
        question: { en: 'Refund policy ignored mid-prompt. One-line structural fix?', bn: 'রিফান্ড নীতিমালা প্রম্পটের মাঝে থাকার কারণে মডেল তা অগ্রাহ্য করলে এক লাইনে সমাধান কী?' },
        answer: 'Duplicate the policy at the top (system) and bottom (just above the query).',
        accept: ['top', 'bottom', 'duplicat', 'edge', 'system', 'pin'],
        hint: { en: 'U-curve edges.', bn: 'ইউ-কার্ভের দুই প্রান্ত।' },
        explanation: {
          en: 'Edges win recall: system-top anchors authority, pre-query bottom catches recency. Middle is where policies go to die.',
          bn: 'প্রান্তিক অবস্থানে তথ্য সবচেয়ে ভালোভাবে কাজ করে: সিস্টেম প্রম্পটে ওপরের অংশে এবং মূল প্রশ্নের ঠিক আগে নিচে নীতিটি যুক্ত করুন।'
        },
      },
    ],
  },
  nextLesson: {
    slug: 'pretraining-data',
    title: { en: 'Pretraining and Data', bn: 'Pretraining এবং Data' },
  },
};