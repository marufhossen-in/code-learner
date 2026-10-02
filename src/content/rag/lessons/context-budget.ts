import type { Lesson } from '../../../lib/types';

export const ContextBudgetLesson: Lesson = {
  slug: 'context-budget',
  tech: 'rag',
  title: {
    en: 'Context Budget',
    bn: 'কনটেক্সট বাজেট — টোকেন বরাদ্দ এবং ওভারফ্লো প্রতিরোধ',
  },
  summary: {
    en: 'Treat model context windows as strict token budgets: split an 8,000-token window into 200 system tokens, 100 query tokens, 6,000 context tokens (75%), and 1,700 reserve tokens. Allocating context top-down protects the reserve room needed for comprehensive answers and prevents truncation.',
    bn: 'মডেলের কনটেক্সট উইন্ডোকে একটি কঠোর টোকেন বাজেট হিসেবে পরিচালনা করুন: একটি ৮,০০০ টোকেন উইন্ডোকে ২০০ সিস্টেম টোকেন, ১০০ কুয়েরি টোকেন, ৬,০০০ কনটেক্সট টোকেন (৭৫%) এবং ১,৭০০ রিজার্ভ টোকেনে ভাগ করুন। ওপর থেকে নিচে কনটেক্সট বরাদ্দ করলে উত্তরের জন্য প্রয়োজনীয় রিজার্ভ সুরক্ষিত থাকে এবং লেখা কাটা পড়া রোধ হয়।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Wallets, not windows', bn: 'WHAT — উইন্ডোকে বাজেট হিসেবে বিবেচনা করা' },
    },
    {
      type: 'para',
      text: {
        en: 'When feeding retrieved documents into large language models, a disciplined context budget pre-allocates token limits across the entire window. In an 8,000-token model window, 200 tokens go to system instructions, 100 tokens hold the user query, and 6,000 tokens (75% of the total window) are allocated to retrieved document chunks. The remaining 1,700 tokens are strictly reserved for the generated response. Filling chunks top-down by relevance guarantees that lower-ranking documents never starve the completion reserve.',
        bn: 'ল্যাঙ্গুয়েজ মডেলে রিট্রিভ করা নথি পাঠানোর সময়, একটি সুশৃঙ্খল কনটেক্সট বাজেট সম্পূর্ণ উইন্ডোজুড়ে টোকেনের সীমা আগে থেকেই ভাগ করে দেয়। একটি ৮,০০০ টোকেনের উইন্ডোতে ২০০ টোকেন সিস্টেম প্রম্পটের জন্য, ১০০ টোকেন ব্যবহারকারীর কুয়েরির জন্য এবং ৬,০০০ টোকেন (মোট উইন্ডোর ৭৫%) রিট্রিভ করা তথ্যের খণ্ডের জন্য বরাদ্দ করা হয়। অবশিষ্ট ১,৭০০ টোকেন মডেলের উত্তরের জন্য সুরক্ষিত রাখা হয়। প্রাসঙ্গিকতার ক্রমানুসারে ওপর থেকে চাঙ্ক পূরণ করলে কম গুরুত্বপূর্ণ তথ্য কখনোই উত্তরের প্রয়োজনীয় স্থান কেড়ে নিতে পারে না।',
      },
    },
    {
      type: 'diagram',
      title: { en: '8,000 tokens, four tenants', bn: '৮,০০০ টোকেন এবং চারটি উপাদান' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Context budget split">
<g font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="40" y="80" width="20" height="70" rx="4" fill="#4f46e5"/><text x="50" y="165" font-size="10">sys 200</text>
<rect x="62" y="80" width="12" height="70" rx="4" fill="#8b5cf6"/><text x="68" y="165" font-size="10">q</text>
<rect x="76" y="80" width="390" height="70" rx="4" fill="#16a34a"/>
<text x="271" y="110" fill="#fff" font-size="14">CONTEXT 6000 (75%)</text>
<text x="271" y="130" fill="#fff" font-size="11">top chunks fill here</text>
<rect x="468" y="80" width="132" height="70" rx="4" fill="#f59e0b"/>
<text x="534" y="110" font-size="13">RESERVE</text>
<text x="534" y="130" font-size="13">1700</text>
</g>
<text x="320" y="40" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">8000 = 200 + 100 + 6000 + 1700 ✓</text>
<rect x="170" y="185" width="300" height="32" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="206" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor">chunks stop at 6000 — reserve never spends</text>
</svg>`,
      caption: {
        en: 'An 8,000-token window balances four tenants: 200 system tokens, 100 query tokens, 6,000 context tokens (75%), and 1,700 reserve tokens.',
        bn: 'একটি ৮,০০০ টোকেন উইন্ডো চারটি উপাদান ধারণ করে: ২০০ সিস্টেম টোকেন, ১০০ কুয়েরি টোকেন, ৬,০০০ কনটেক্সট টোকেন (৭৫%) এবং ১,৭০০ রিজার্ভ টোকেন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Token window budget',
          def: {
            en: 'A predetermined token allocation strategy that divides the context window into explicit slices for system instructions, user queries, retrieved evidence, and generation.',
            bn: 'একটি পূর্বনির্ধারিত টোকেন বণ্টন কৌশল যা কনটেক্সট উইন্ডোকে সিস্টেম নির্দেশাবলী, কুয়েরি, তথ্যসূত্র এবং উত্তরের জন্য নির্দিষ্ট অংশে ভাগ করে।',
          },
        },
        {
          term: 'Generation reserve',
          def: {
            en: 'A protected slice of the context window (such as 1,700 tokens) that cannot be consumed by retrieved context, guaranteeing sufficient room for output generation.',
            bn: 'কনটেক্সট উইন্ডোর একটি সুরক্ষিত অংশ (যেমন ১,৭০০ টোকেন) যা রিট্রিভ করা ডেটা দ্বারা খরচ করা যায় না, ফলে মডেলের পূর্ণাঙ্গ উত্তর লেখার জন্য পর্যাপ্ত জায়গা নিশ্চিত থাকে।',
          },
        },
        {
          term: 'Top-down context fill',
          def: {
            en: 'The ranking policy of inserting highest-scoring retrieved chunks first until the context token budget is exhausted, gracefully discarding lower-ranked chunks.',
            bn: 'কনটেক্সট বাজেট শেষ না হওয়া পর্যন্ত সর্বোচ্চ স্কোরের চাঙ্কগুলো পর্যায়ক্রমে যুক্ত করার নীতি, যার ফলে কম গুরুত্বপূর্ণ তথ্যগুলো নিয়মতান্ত্রিকভাবে বাদ পড়ে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Overflow orphans', bn: 'কেন — অপরিকল্পিত বরাদ্দ উত্তরের সমাপ্তি নষ্ট করে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Unbudgeted stuffing truncates answers mid-sentence: when context overfills the window, output generation gets abruptly cut off.', bn: 'পরিকল্পনাহীনভাবে কনটেক্সট অতিরিক্ত ভরলে উত্তরের মাঝপথে লেখা কাটা পড়ে এবং বাক্য অসম্পূর্ণ থেকে যায়।' },
        { en: 'Dedicated reserves guarantee closure: reserving 1,700 tokens ensures the model has ample room to draft complete arguments.', bn: 'সুনির্দিষ্ট রিজার্ভ পূর্ণাঙ্গ সমাপ্তি নিশ্চিত করে: ১,৭০০ টোকেন সংরক্ষিত রাখলে মডেলের সব যুক্তি সুন্দরভাবে গুছিয়ে লেখার সুযোগ থাকে।' },
        { en: 'Budgets enforce ranking discipline: highest-quality chunks win space in the 6,000-token allowance while marginal chunks are dropped.', bn: 'বাজেট র‍্যাংকিংয়ের শৃঙ্খলা রক্ষা করে: সর্বোচ্চ মানের চাঙ্কগুলো ৬,০০০ টোকেন সীমার মধ্যে স্থান পায় এবং কম প্রয়োজনীয় চাঙ্ক বাদ পড়ে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Budget in 4 steps', bn: 'HOW — ৪টি ধাপে বাজেট নির্ধারণ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Establish window', bn: '১. মোট উইন্ডো নির্ধারণ' }, text: { en: 'Define total model capacity (8,000 tokens).', bn: 'মডেলের মোট ধারণক্ষমতা নির্ধারণ করুন (৮,০০০ টোকেন)।' } },
        { title: { en: '2. Reserve fixed costs', bn: '২. স্থির খরচ সংরক্ষণ' }, text: { en: 'Deduct system instructions (200) and query (100).', bn: 'সিস্টেম নির্দেশাবলী (২০০) এবং কুয়েরি (১০০) বিয়োগ করুন।' } },
        { title: { en: '3. Allocate context', bn: '৩. কনটেক্সট বরাদ্দ' }, text: { en: 'Cap retrieved document chunks at 6,000 tokens (75%).', bn: 'রিট্রিভ করা তথ্যের খণ্ডের জন্য ৬,০০০ টোকেন (৭৫%) নির্দিষ্ট করুন।' } },
        { title: { en: '4. Protect reserve', bn: '৪. রিজার্ভ সুরক্ষা' }, text: { en: 'Retain 1,700 tokens exclusively for answer generation.', bn: 'উত্তর লেখার জন্য ১,৭০০ টোকেন কঠোরভাবে আলাদা রাখুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'context_budget_sim.py',
      code: `def calculate_context_budget(total_window, sys_tokens, query_tokens, context_ratio):
    context_tokens = int(total_window * context_ratio)
    fixed_tokens = sys_tokens + query_tokens
    reserve_tokens = total_window - fixed_tokens - context_tokens
    context_pct = (context_tokens / total_window) * 100
    return context_tokens, reserve_tokens, context_pct

# Standard 8,000 token window
ctx8k, res8k, pct8k = calculate_context_budget(8000, 200, 100, 0.75)
print("Standard 8,000 window budget:")
print(f"Total: 8,000 = System 200 + Query 100 + Context {ctx8k:,} ({pct8k:.0f}%) + Reserve {res8k:,}")

# Halved 4,000 token window (same 75% ratio)
ctx4k, res4k, pct4k = calculate_context_budget(4000, 200, 100, 0.75)
print("\\nHalved 4,000 window budget:")
print(f"Total: 4,000 = System 200 + Query 100 + Context {ctx4k:,} ({pct4k:.0f}%) + Reserve {res4k:,}")

# Output:
# Standard 8,000 window budget:
# Total: 8,000 = System 200 + Query 100 + Context 6,000 (75%) + Reserve 1,700
#
# Halved 4,000 window budget:
# Total: 4,000 = System 200 + Query 100 + Context 3,000 (75%) + Reserve 700`,
      caption: {
        en: 'The Python simulation balances the token wallet: in an 8,000 window, allocating 6,000 to context (75%) and 300 to fixed costs leaves a 1,700 reserve; halving to 4,000 yields 3,000 context (75%) with a 700 reserve.',
        bn: 'পাইথন সিমুলেশন টোকেন ব্যালেন্স হিসাব করে: ৮,০০০ উইন্ডোতে ৬,০০০ কনটেক্সট (৭৫%) এবং ৩০০ ফিক্সড খরচ বাদ দিলে ১,৭০০ রিজার্ভ থাকে; উইন্ডো অর্ধেকে ৪,০০০ এ নামালে ৩,০০০ কনটেক্সট (৭৫%) এবং ৭০০ রিজার্ভ থাকে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive budget calculator', bn: 'INSIDE — জীবন্ত টোকেন বাজেট ক্যালকুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator calculates capacity allocations across the prompt. In an 8,000-unit window, subtracting 200 system instructions, 100 query characters, and 6,000 context tokens leaves 1,700 reserved for the answer. If you halve the window to 4,000, context drops to 3,000 while reserve contracts to 700 units. Maintaining ratios prevents unexpected overflow.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি প্রম্পটের সামগ্রিক বণ্টন হিসাব করে। ৮,০০০ পরিমাপের উইন্ডোর জন্য ২০০ সিস্টেম, ১০০ কুয়েরি এবং ৬,০০০ কনটেক্সট টোকেন বাদ দিলে উত্তরের জন্য ১,৭০০ সংরক্ষিত থাকে। উইন্ডো কমিয়ে ৪,০০০ করলে কনটেক্সট ৩,০০০ এবং রিজার্ভ ৭০০ তে নেমে আসে। অনুপাত বজায় রাখলে অপ্রত্যাশিত ওভারফ্লো বন্ধ হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Budget lab (halve window, press Run)', bn: 'Budget lab (জানালা অর্ধেক, Run)' },
      html: '<h3>Spend the wallet</h3>\n<pre id="out"></pre>\n<p>Console itemizes tenants.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 10px; }',
      js: 'const W = 8000, SYS = 200, Q = 100; // ← try W = 4000!\nconst CTX = Math.floor(W * 0.75 / 100) * 100;\nconst reserve = W - SYS - Q - CTX;\nconsole.log("window " + W + " · sys " + SYS + " · query " + Q);\nconsole.log("context " + CTX + " · reserve " + reserve);\ndocument.getElementById("out").textContent = "ctx " + CTX + " · reserve " + reserve + " 💰";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Wallet instincts', bn: 'ফলাফল — টোকেন বাজেটের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Total window balance: 8,000 tokens = 200 system + 100 query + 6,000 context + 1,700 reserve.', bn: 'মোট উইন্ডো ভারসাম্য: ৮,০০০ টোকেন = ২০০ সিস্টেম + ১০০ কুয়েরি + ৬,০০০ কনটেক্সট + ১,৭০০ রিজার্ভ।' },
        { en: 'Stable scaling: dedicating 75% to context preserves proportionate space for generation across different model windows.', bn: 'স্থিতিশীল স্কেলিং: কনটেক্সটের জন্য ৭৫% বরাদ্দ রাখলে যেকোনো আকারের উইন্ডোতেই উত্তরের জন্য আনুপাতিক জায়গা নিশ্চিত থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Wallet traps', bn: 'ডিবাগ — বাজেট বরাদ্দের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Reserve raids (the eaten ending)', bn: 'রিজার্ভ আত্মসাৎ এবং অসম্পূর্ণ উত্তর (Reserve raids)' },
      text: {
        en: 'Allowing retrieved context chunks to expand into the generation reserve causes responses to truncate mid-sentence. Symptoms: outputs end abruptly without closing thoughts or citations. Cure: enforce a strict hard-cap at 6,000 tokens for context so the 1,700 reserve is never compromised.',
        bn: 'রিট্রিভ করা কনটেক্সট যদি রিজার্ভ অংশের ভেতর ঢুকে পড়ে তবে মডেলের উত্তর মাঝপথে কেটে যায়। লক্ষণ: কোনো ইতি টানা বা সাইটেশন ছাড়াই বাক্য অসমাপ্ত থাকা। প্রতিকার: কনটেক্সটের জন্য ৬,০০০ টোকেনের কঠোর সীমা প্রয়োগ করুন যাতে ১,৭০০ রিজার্ভ অক্ষত থাকে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Fixed over context (the tenants first)', bn: 'স্থির খরচের অবহেলা (Fixed over context)' },
      text: {
        en: 'Calculating context allocations before accounting for fixed prompts can evict system instructions and user queries when text runs long. Symptoms: the model forgets safety rules or persona constraints. Cure: always deduct fixed system and query tokens before calculating available context space.',
        bn: 'স্থির প্রম্পটের হিসাব না করে আগেই কনটেক্সটের জায়গা বসালে সিস্টেম রুলস বা কুয়েরি বাদ পড়ে যেতে পারে। লক্ষণ: মডেল সুরক্ষার নিয়ম বা ব্যক্তিত্ব ভুলে যাওয়া। প্রতিকার: কনটেক্সট গণনার আগে সবসময় সিস্টেম ও কুয়েরি টোকেন বাদ দিন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production frameworks', bn: 'বাস্তব ক্ষেত্র — ফ্রেমওয়ার্কে কনটেক্সট ব্যবস্থাপনা' },
    },
    {
      type: 'list',
      items: [
        { en: 'LangChain and LlamaIndex context compressors: automatically prune document chunks to conform to predefined token limits.', bn: 'LangChain এবং LlamaIndex কনটেক্সট কম্প্রেসর: নির্দিষ্ট টোকেন সীমার সাথে মানিয়ে নিতে অতিরিক্ত নথি স্বয়ংক্রিয়ভাবে ছাঁটাই করে।' },
        { en: 'Code completion assistants: allocate large context budgets to open project tabs while reserving 500 to 1,000 tokens for generated code snippets.', bn: 'কোড কমপ্লিশন টুল: ওপেন প্রজেক্ট ট্যাবের জন্য বড় কনটেক্সট রাখে এবং তৈরি কোডের জন্য ৫০০ থেকে ১,০০০ টোকেন রিজার্ভ করে।' },
        { en: 'Multi-turn autonomous agents: divide the window between conversation history, retrieved tools, and a protected step-execution reserve.', bn: 'মাল্টি-টার্ন অটোনোমাস এজেন্ট: কথোপকথনের ইতিহাস, টুল ডেটা এবং পরবর্তী এক্সিকিউশনের জন্য উইন্ডোকে সুনির্দিষ্টভাবে ভাগ করে রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Citations', bn: 'পরবর্তী পাঠ — উদ্ধৃতি ও প্রমাণ যাচাইকরণ' },
    },
    {
      type: 'para',
      text: {
        en: 'With context budgeting secure, Lesson 3 examines citations: auditing reference pointers to verify whether claims are logically entailed or merely decorative.',
        bn: 'কনটেক্সট বাজেট নিশ্চিত করার পর, পাঠ ৩ উদ্ধৃতি যাচাইকরণ শেখাবে: রেফারেন্স নির্দেশকগুলো পরীক্ষা করে দেখা হবে বক্তব্যগুলো তথ্যে প্রমাণিত নাকি কেবল সাজসজ্জা।',
      },
    },
  ],
  exercises: [
    {
      id: 'ctx-ex-1',
      kind: 'mcq',
      topic: 'budget-sum',
      question: {
        en: 'When a context budget allocates 200 system tokens, 100 query tokens, 6,000 context tokens, and 1,700 reserve tokens, what is the total window size?',
        bn: 'যখন একটি কনটেক্সট বাজেট ২০০ সিস্টেম টোকেন, ১০০ কুয়েরি টোকেন, ৬,০০০ কনটেক্সট টোকেন এবং ১,৭০০ রিজার্ভ টোকেন বরাদ্দ করে, তখন মোট উইন্ডোর আকার কত হয়?',
      },
      options: [
        { en: '8,000 tokens — balanced full allocation', bn: '৮,০০০ টোকেন — সুষম পূর্ণ বরাদ্দ' },
        { en: '7,000 tokens total', bn: 'সর্বমোট ৭,০০০ টোকেন' },
        { en: '9,000 tokens total', bn: 'সর্বমোট ৯,০০০ টোকেন' },
        { en: '6,000 tokens total', bn: 'সর্বমোট ৬,০০০ টোকেন' },
      ],
      answer: 0,
      hint: { en: 'Add all four components: 200 + 100 + 6,000 + 1,700.', bn: 'চারটি উপাদান যোগ করুন: ২০০ + ১০০ + ৬,০০০ + ১,৭০০।' },
      explanation: {
        en: '200 + 100 + 6,000 + 1,700 = 8,000 tokens. The budget perfectly matches the maximum token capacity of the model.',
        bn: '২০০ + ১০০ + ৬,০০০ + ১,৭০০ = ৮,০০০ টোকেন। বাজেটটি মডেলের সর্বোচ্চ টোকেন ধারণক্ষমতার সাথে পুরোপুরি মিলে যায়।',
      },
    },
    {
      id: 'ctx-ex-2',
      kind: 'mcq',
      topic: 'ctx-share',
      question: {
        en: 'What percentage of the total 8,000-token window does the 6,000-token retrieved context consume?',
        bn: 'মোট ৮,০০০ টোকেনের উইন্ডোর মধ্যে ৬,০০০ টোকেনের রিট্রিভ করা কনটেক্সট কত শতাংশ স্থান দখল করে?',
      },
      options: [
        { en: '75% of total window (6,000 / 8,000)', bn: 'মোট উইন্ডোর ৭৫% (৬,০০০ / ৮,০০০)' },
        { en: '60% of total window', bn: 'মোট উইন্ডোর ৬০%' },
        { en: '80% of total window', bn: 'মোট উইন্ডোর ৮০%' },
        { en: '50% of total window', bn: 'মোট উইন্ডোর ৫০%' },
      ],
      answer: 0,
      hint: { en: 'Divide context tokens (6,000) by total window (8,000).', bn: 'কনটেক্সট টোকেন (৬,০০০) কে মোট উইন্ডো (৮,০০০) দিয়ে ভাগ করুন।' },
      explanation: {
        en: '6,000 / 8,000 = 0.75 (75%). Allocating three-quarters of the window to evidence provides deep grounding while protecting the completion reserve.',
        bn: '৬,০০০ / ৮,০০০ = ০.৭৫ (৭৫%)। উইন্ডোর তিন-চতুর্থাংশ তথ্যের জন্য রাখলে পর্যাপ্ত প্রমাণ নিশ্চিত হয় এবং উত্তরের স্থান সুরক্ষিত থাকে।',
      },
    },
    {
      id: 'ctx-ex-3',
      kind: 'mcq',
      topic: 'halve-window',
      question: {
        en: 'If the total window is halved to 4,000 tokens while keeping the 75% context ratio and 300 fixed tokens, what are the context and reserve budgets?',
        bn: 'যদি ৭৫% কনটেক্সট অনুপাত এবং ৩০০ ফিক্সড টোকেন অপরিবর্তিত রেখে মোট উইন্ডো অর্ধেকে কমিয়ে ৪,০০০ টোকেন করা হয়, তবে কনটেক্সট এবং রিজার্ভ বাজেট কত হবে?',
      },
      options: [
        { en: '3,000 context tokens and 700 reserve tokens', bn: '৩,০০০ কনটেক্সট টোকেন এবং ৭০০ রিজার্ভ টোকেন' },
        { en: '6,000 context tokens and 1,700 reserve tokens unchanged', bn: '৬,০০০ কনটেক্সট এবং ১,৭০০ রিজার্ভ অপরিবর্তিত' },
        { en: '4,000 context tokens and 0 reserve tokens', bn: '৪,০০০ কনটেক্সট এবং ০ রিজার্ভ' },
        { en: '2,000 context tokens and 2,000 reserve tokens', bn: '২,০০০ কনটেক্সট এবং ২,০০০ রিজার্ভ' },
      ],
      answer: 0,
      hint: { en: '4,000 × 75% = 3,000 context; reserve = 4,000 − 300 − 3,000 = 700.', bn: '৪,০০০ × ৭৫% = ৩,০০০ কনটেক্সট; রিজার্ভ = ৪,০০০ − ৩০০ − ৩,০০০ = ৭০০।' },
      explanation: {
        en: '75% of 4,000 = 3,000 tokens for context. 4,000 − 300 fixed − 3,000 context leaves 700 tokens for the generation reserve.',
        bn: '৪,০০০ এর ৭৫% = ৩,০০০ টোকেন কনটেক্সটের জন্য। ৪,০০০ − ৩০০ ফিক্সড − ৩,০০০ কনটেক্সট বাদ দিলে উত্তরের রিজার্ভ থাকে ৭০০ টোকেন।',
      },
    },
    {
      id: 'ctx-ex-4',
      kind: 'predict',
      topic: 'raid-fix',
      question: {
        en: 'When an AI model truncates answers halfway through a sentence, which budget tenant was compromised and how is it fixed?',
        bn: 'যখন একটি এআই মডেল বাক্যের মাঝপথে উত্তর কাটা শেষ করে, তখন কোন বাজেট অংশটি ক্ষতিগ্রস্ত হয়েছিল এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Reserve raided by context: hard-cap chunks, guard 1700.',
      accept: ['reserve', 'raid', 'cap', '1700', 'truncate', 'guard', 'overflow'],
      hint: { en: 'State reserve raided by context and hard-capping chunks to guard 1700.', bn: 'রিজার্ভের ক্ষতি এবং ১৭০০ রক্ষা করতে চাঙ্কে কঠোর সীমা দেওয়ার কথা বলুন।' },
      explanation: {
        en: 'Excessive context tokens consumed the generation reserve. Imposing a strict hard-cap on context chunks protects the 1,700-token completion reserve.',
        bn: 'অতিরিক্ত কনটেক্সট টোকেন উত্তরের রিজার্ভ অংশ দখল করে ফেলেছিল। চাঙ্কের ওপর কঠোর সীমা দিলে ১,৭০০ টোকেনের রিজার্ভ সুরক্ষিত থাকে।',
      },
    },
  ],
  quiz: {
    id: 'context-budget-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'ctxq1',
        kind: 'mcq',
        topic: 'tenant-list',
        question: {
          en: 'What are the four explicit tenant allocations in the standard 8,000-token RAG context budget?',
          bn: 'স্ট্যান্ডার্ড ৮,০০০ টোকেন RAG কনটেক্সট বাজেটের চারটি সুনির্দিষ্ট উপাদানের বরাদ্দ কী কী?',
        },
        options: [
          {
            en: '200 system tokens + 100 query tokens + 6,000 context tokens + 1,700 reserve tokens',
            bn: '২০০ সিস্টেম টোকেন + ১০০ কুয়েরি টোকেন + ৬,০০০ কনটেক্সট টোকেন + ১,৭০০ রিজার্ভ টোকেন',
          },
          {
            en: '2,000 tokens split equally four ways',
            bn: '২,০০০ টোকেন চার ভাগে সমানভাবে বিভক্ত',
          },
          {
            en: '8,000 context tokens with 0 tokens for system or reserve',
            bn: 'সিস্টেম বা রিজার্ভে ০ টোকেন রেখে ৮,০০০ কনটেক্সট টোকেন',
          },
          {
            en: '4,000 system tokens and 4,000 query tokens',
            bn: '৪,০০০ সিস্টেম টোকেন এবং ৪,০০০ কুয়েরি টোকেন',
          },
        ],
        answer: 0,
        hint: { en: 'Recall the four numbers summing to 8,000: 200, 100, 6,000, 1,700.', bn: '৮,০০০ এর চারটি উপাদানের যোগফল মনে করুন: ২০০, ১০০, ৬,০০০, ১,৭০০।' },
        explanation: {
          en: 'The standard budget balances four distinct roles: 200 system instructions, 100 user query, 6,000 retrieved context, and 1,700 output generation reserve.',
          bn: 'স্ট্যান্ডার্ড বাজেট ৪টি নির্দিষ্ট ভূমিকা রাখে: ২০০ সিস্টেম রুলস, ১০০ কুয়েরি, ৬,০০০ তথ্যসূত্র এবং ১,৭০০ উত্তরের রিজার্ভ।',
        },
      },
      {
        id: 'ctxq2',
        kind: 'mcq',
        topic: 'fill-order',
        question: {
          en: 'In what order should retrieved document chunks fill the allocated 6,000 context tokens?',
          bn: 'বরাদ্দকৃত ৬,০০০ কনটেক্সট টোকেনে রিট্রিভ করা তথ্যের খণ্ডগুলো কোন ক্রমানুসারে প্রবেশ করানো উচিত?',
        },
        options: [
          {
            en: 'Top-down by similarity rank: highest-scoring chunks fill first until 6,000 tokens are reached',
            bn: 'সাদৃশ্য র‍্যাংকিং অনুযায়ী ওপর থেকে নিচে: ৬,০০০ টোকেন পূর্ণ না হওয়া পর্যন্ত সেরা স্কোরের চাঙ্ক আগে প্রবেশ করবে',
          },
          {
            en: 'Random shuffle to ensure uniform variety',
            bn: 'বৈচিত্র্য নিশ্চিত করতে এলোমেলোভাবে বিন্যাস করা',
          },
          {
            en: 'Lowest-scoring chunks first to help the model learn edge cases',
            bn: 'মডেলের সুবিধার জন্য সর্বনিম্ন স্কোরের চাঙ্ক আগে প্রবেশ করানো',
          },
          {
            en: 'Alphabetical sorting by file directory name',
            bn: 'ফাইলের ডিরেক্টরি নামের বর্ণানুক্রমে সাজানো',
          },
        ],
        answer: 0,
        hint: { en: 'Rank-ordered insertion prioritizes the most relevant evidence.', bn: 'র‍্যাংক অনুযায়ী প্রবেশ করালে সবচেয়ে প্রাসঙ্গিক তথ্য অগ্রাধিকার পায়।' },
        explanation: {
          en: 'Filling top-down ensures the most relevant evidence occupies available context space, gracefully dropping lower-ranking passages when budget limits are met.',
          bn: 'ওপর থেকে চাঙ্ক পূরণ করলে সবচেয়ে প্রাসঙ্গিক তথ্য আগে স্থান পায় এবং বাজেট শেষ হলে কম দরকারি তথ্য নিয়মতান্ত্রিকভাবে বাদ পড়ে।',
        },
      },
      {
        id: 'ctxq3',
        kind: 'mcq',
        topic: 'fixed-first',
        question: {
          en: 'Why must system instructions and user query tokens be subtracted before allocating context chunks?',
          bn: 'কনটেক্সট চাঙ্ক বরাদ্দ করার আগেই কেন সিস্টেম নির্দেশাবলী এবং কুয়েরি টোকেন বিয়োগ করে নিতে হয়?',
        },
        options: [
          {
            en: 'Subtracting fixed overhead first prevents retrieved text from unexpectedly evicting vital instructions or user queries',
            bn: 'আগে ফিক্সড খরচ বিয়োগ করলে রিট্রিভ করা তথ্যের ভিড়ে প্রয়োজনীয় সিস্টেম নিয়ম বা কুয়েরি বাদ পড়ার ঝুঁকি থাকে না',
          },
          {
            en: 'System instructions require zero token overhead',
            bn: 'সিস্টেম নির্দেশাবলীতে কোনো টোকেন খরচ হয় না',
          },
          {
            en: 'Context chunks always have higher execution priority than system prompts',
            bn: 'সিস্টেম প্রম্পটের চেয়ে কনটেক্সট চাঙ্কের অগ্রাধিকার সবসময় বেশি থাকে',
          },
          {
            en: 'Mathematical conventions mandate subtracting larger numbers last',
            bn: 'গাণিতিক নিয়ম অনুযায়ী বড় সংখ্যা সবার শেষে বিয়োগ করতে হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Fixed costs must be guaranteed before variable context can feast.', bn: 'পরিবর্তনশীল কনটেক্সট ব্যবহারের আগে স্থির খরচ নিশ্চিত করতে হবে।' },
        explanation: {
          en: 'Fixed overhead (instructions and query) is essential for correct behavior. Dedicating their budget first ensures context size adjusts to fit the remaining window.',
          bn: 'স্থির খরচ (নিয়মাবলী ও কুয়েরি) সঠিক উত্তরের জন্য অপরিহার্য। এদের আগে স্থান দিলে অবশিষ্ট উইন্ডোর সাথে কনটেক্সটের আকার সহজে সমন্বয় করা যায়।',
        },
      },
      {
        id: 'ctxq4',
        kind: 'predict',
        topic: 'wallet-recite',
        question: {
          en: 'What mathematical breakdown summarizes the standard context budget examined in this lesson?',
          bn: 'এই পাঠে আলোচিত স্ট্যান্ডার্ড কনটেক্সট বাজেটটিকে সংক্ষেপে প্রকাশ করে এমন গাণিতিক সম্পর্ক কোনটি?',
        },
        answer: '8000 · 200+100+6000+1700 · context 75%.',
        accept: ['8000', '200', '100', '6000', '1700', '75'],
        hint: { en: 'State total window, sum of four tenants, and context percentage.', bn: 'মোট উইন্ডো, চারটি উপাদানের যোগফল এবং কনটেক্সট শতকরা হার উল্লেখ করুন।' },
        explanation: {
          en: 'The standard budget: 8,000 tokens total, partitioned into 200 + 100 + 6,000 + 1,700 tokens, with context occupying 75%.',
          bn: 'স্ট্যান্ডার্ড বাজেট: সর্বমোট ৮,০০০ টোকেন, যা ২০০ + ১০০ + ৬,০০০ + ১,৭০০ টোকেনে বিভক্ত এবং কনটেক্সট ৭৫% স্থান দখল করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'citations',
    title: { en: 'Citations', bn: 'উদ্ধৃতি' },
  },
};
