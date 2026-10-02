import type { Lesson } from '../../../lib/types';

export const RerankFilterLesson: Lesson = {
  slug: 'rerank-filter',
  tech: 'vector-databases',
  title: {
    en: 'Rerank Filter',
    bn: 'রি-র‍্যাংকিং ও ফিল্টারিং — বহু-স্তরের রিট্রিভাল ফানেল',
  },
  summary: {
    en: 'Multi-stage retrieval progressively narrows the candidate pool: first-stage vector search returns 1,000 rough candidates, metadata filters prune them to 50 survivors (5%), and an accurate cross-encoder reranks those 50 into the final top-5 answers (0.5%).',
    bn: 'বহু-স্তরের রিট্রিভাল ক্রমান্বয়ে অনুসন্ধান পরিসর সংকুচিত করে: প্রথম ধাপে ভেক্টর সার্চ ১,০০০ প্রাথমিক প্রার্থী খুঁজে নেয়, মেটাডেটা ফিল্টার তা কমিয়ে ৫০টিতে (৫%) নামিয়ে আনে, এবং একটি ক্রস-এনকোডার সেই ৫০টি থেকে চূড়ান্ত সেরা ৫টি উত্তর (০.৫%) নির্বাচন করে।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Narrow, then judge', bn: 'WHAT — ক্রমান্বয়ে সংকোচন এবং চূড়ান্ত মূল্যায়ন' },
    },
    {
      type: 'para',
      text: {
        en: 'When deploying high-accuracy semantic search, multi-stage retrieval pipelines balance throughput and ranking precision through progressive narrowing. First-stage approximate vector search retrieves 1,000 rough candidates using fast dot products. Next, structured metadata filters prune candidates by tenant, date, or category down to 50 survivors (5% of initial results). Finally, a computationally intensive cross-encoder model reranks those 50 pairs to select the top-5 definitive answers. Each pipeline stage invests more compute per document across a progressively smaller candidate pool.',
        bn: 'যখন আপনি উচ্চ নির্ভুলতার সেমান্টিক সার্চ ডেপ্লয় করেন, তখন বহু-স্তরের রিট্রিভাল পাইপলাইন ক্রমান্বয়ে অনুসন্ধানের পরিধি কমিয়ে থ্রুপুট এবং র‍্যাংকিংয়ের মানের মধ্যে ভারসাম্য বজায় রাখে। প্রথম ধাপে দ্রুতগতির ভেক্টর সার্চ প্রায় ১,০০০ প্রাথমিক প্রার্থী ভেক্টর খুঁজে নেয়। দ্বিতীয় ধাপে মেটাডেটা ফিল্টারিং (যেমন টেন্যান্ট আইডি, তারিখ বা বিভাগ) প্রয়োগ করে এই সংখ্যা কমিয়ে মাত্র ৫০টিতে (প্রাথমিক প্রার্থীর ৫%) নামিয়ে আনা হয়। চূড়ান্ত ধাপে একটি উচ্চ ক্ষমতার ক্রস-এনকোডার মডেল এই ৫০টি জোড়াকে গভীরভাবে বিশ্লেষণ করে সেরা ৫টি নিখুঁত উত্তর নির্বাচন করে। প্রতিটি ধাপ ক্রমান্বয়ে কম সংখ্যক প্রার্থীর ওপর বেশি সময় ও কম্পিউটেশন বিনিয়োগ করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The narrowing funnel', bn: 'ক্রমান্বয়ে সংকুচিত রিট্রিভাল ফানেল' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Retrieval funnel from 1000 to 5">
<g font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">
<rect x="70" y="30" width="500" height="44" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="320" y="48" fill="currentColor">VECTOR SEARCH → 1000 rough</text>
<text x="320" y="65" font-weight="600">cheap dots · milliseconds</text>
<polygon points="320,78 420,118 220,118" fill="#f59e0b" opacity="0.5"/>
<text x="320" y="108" font-size="11">metadata filter</text>
<rect x="170" y="122" width="300" height="44" rx="8" fill="#fefce8" stroke="#f59e0b" stroke-width="2"/>
<text x="320" y="140">50 SURVIVORS (5%)</text>
<text x="320" y="157" font-weight="600">tenant · date · type ✓</text>
<polygon points="320,170 370,196 270,196" fill="#16a34a" opacity="0.5"/>
<text x="320" y="191" font-size="11">cross-encoder</text>
<rect x="240" y="200" width="160" height="34" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="222">TOP-5 ★ judged</text>
</g>
</svg>`,
      caption: {
        en: 'Broad scanning runs first, followed by deep cross-encoder evaluation. Inexpensive filter stages prepare clean candidate pools for heavy neural judges.',
        bn: 'প্রথমে দ্রুত প্রাথমিক অনুসন্ধান চালানো হয়, যার পরে নিখুঁত ক্রস-এনকোডার মূল্যায়ন ঘটে। সাশ্রয়ী ফিল্টার ধাপ ভারী মডেলের জন্য পরিচ্ছন্ন প্রার্থী তালিকা প্রস্তুত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Metadata filtering',
          def: {
            en: 'The process of applying boolean relational constraints such as dates, tenants, or tags to narrow vector candidates.',
            bn: 'তারিখ, টেন্যান্ট বা ট্যাগের মতো রিলেশনাল শর্তাবলি প্রয়োগ করে ভেক্টর প্রার্থীদের সংখ্যা দ্রুত কমিয়ে আনার প্রক্রিয়া।',
          },
        },
        {
          term: 'Cross-encoder reranker',
          def: {
            en: 'A deep transformer neural network that scores joint query-document text pairs with full cross-attention.',
            bn: 'একটি ডিপ ট্রান্সফর্মার নিউরাল নেটওয়ার্ক যা কুয়েরি এবং ডকুমেন্টের পূর্ণাঙ্গ ক্রস-অ্যাটেনশনের মাধ্যমে সবচেয়ে নির্ভুল স্কোর নির্ধারণ করে।',
          },
        },
        {
          term: 'Multi-stage retrieval funnel',
          def: {
            en: 'An architectural pattern where fast, broad vector search feeds strict metadata filters, which in turn feed deep cross-encoder rerankers.',
            bn: 'একটি আর্কিটেকচারাল প্যাটার্ন যেখানে দ্রুত প্রাথমিক সার্চ থেকে মেটাডেটা ফিল্টার এবং সবশেষে নিখুঁত ক্রস-এনকোডার বিচারকের মাধ্যমে ফলাফল নির্বাচিত হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Judges are dear', bn: 'কেন — ডিপ নিউরাল মডেলের অতিরিক্ত কম্পিউটেশন খরচ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Cross-encoders cost approximately 100× more than vector dot products: scoring 1,000 candidates with a transformer saturates inference budgets.', bn: 'ক্রস-এনকোডারের খরচ ভেক্টর ডট প্রোডাক্টের চেয়ে প্রায় ১০০ গুণ বেশি: ১,০০০ প্রার্থীর সবকটি ট্রান্সফর্মার দিয়ে স্কোর করলে ইনফারেন্স বাজেট নষ্ট হয়।' },
        { en: 'Metadata filters execute near-instantaneously: relational tags prune irrelevant tenants and dates before expensive scoring.', bn: 'মেটাডেটা ফিল্টারিং চোখের পলকে সম্পন্ন হয়: রিলেশনাল ট্যাগ ব্যবহার করে অপ্রাসঙ্গিক টেন্যান্ট ও পুরনো তারিখ শুরুতেই বাদ দেওয়া যায়।' },
        { en: 'Funnel stages compound efficiency: filtering down to 5% followed by picking the top-5 results means only 0.5% of documents are retained.', bn: 'ফানেলের ধাপগুলো কার্যকারিতা বহুগুণ বাড়ায়: ৫% প্রার্থীরা নামিয়ে সেখান থেকে সেরা ৫টি বাছলে মূল ডেটাসেটের মাত্র ০.৫% নথি রাখা হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Funnel in 4 steps', bn: 'HOW — ৪টি ধাপে ফানেল পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Broad search', bn: '১. প্রাথমিক অনুসন্ধান' }, text: { en: 'Run approximate vector search to extract 1,000 initial candidates.', bn: 'দ্রুতগতির ভেক্টর সার্চ চালিয়ে প্রাথমিক ১,০০০ প্রার্থী ভেক্টর উদ্ধার করুন।' } },
        { title: { en: '2. Filter metadata', bn: '২. মেটাডেটা ছাঁটাই' }, text: { en: 'Apply relational tags (tenant, date, type) to keep 50 survivors (5%).', bn: 'রিলেশনাল শর্ত প্রয়োগ করে প্রার্থী সংখ্যা কমিয়ে ৫০টিতে (৫%) আনুন।' } },
        { title: { en: '3. Deep rerank', bn: '৩. গভীর মূল্যায়ন' }, text: { en: 'Feed the 50 candidate pairs to a cross-encoder model for precision scoring.', bn: 'নিখুঁত স্কোরের জন্য এই ৫০টি জোড়াকে ক্রস-এনকোডার মডেলে সরবরাহ করুন।' } },
        { title: { en: '4. Extract top-5', bn: '৪. শীর্ষ ফলাফল নির্বাচন' }, text: { en: 'Select the top-5 definitive ranked items to feed the application prompt.', bn: 'অ্যাপ্লিকেশনের ব্যবহারের জন্য সেরা ৫টি চূড়ান্ত ফলাফল নির্বাচন করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'reranking_funnel_sim.py',
      code: `def retrieval_funnel(initial_candidates, filter_kept, top_k, rerank_unit_cost):
    filter_pct = (filter_kept / initial_candidates) * 100
    top_k_pct = (top_k / initial_candidates) * 100
    rerank_cost = filter_kept * rerank_unit_cost
    return filter_pct, top_k_pct, rerank_cost

# Standard funnel: 1,000 -> 50 (5%) -> top-5 (0.5%)
f_pct, k_pct, cost50 = retrieval_funnel(1000, 50, 5, 100)
print("Standard funnel (50 kept):")
print("Stage 1: 1,000 vector candidates")
print(f"Stage 2: Filter keeps 50 ({f_pct:.1f}%)")
print(f"Stage 3: Reranker scores 50 @ 100 units = {cost50:,} cost units -> top-5 ({k_pct:.1f}%)")

# Loosened filter: keep 200 candidates
_, _, cost200 = retrieval_funnel(1000, 200, 5, 100)
cost_multiplier = cost200 / cost50
print("\\nLoosened filter (200 kept):")
print(f"Reranker scores 200 @ 100 units = {cost200:,} cost units ({cost_multiplier:.0f}x cost increase)")

# Output:
# Standard funnel (50 kept):
# Stage 1: 1,000 vector candidates
# Stage 2: Filter keeps 50 (5.0%)
# Stage 3: Reranker scores 50 @ 100 units = 5,000 cost units -> top-5 (0.5%)
#
# Loosened filter (200 kept):
# Reranker scores 200 @ 100 units = 20,000 cost units (4x cost increase)`,
      caption: {
        en: 'The Python simulation tracks funnel economics: filtering 1,000 candidates to 50 costs 5,000 rerank units to find top-5 (0.5%); loosening to 200 quadruples rerank compute to 20,000 units.',
        bn: 'পাইথন সিমুলেশন ফানেলের খরচ বিশ্লেষণ করে: ১,০০০ প্রার্থী থেকে ৫০টিতে নামালে সেরা ৫টি (০.৫%) বাছতে ৫,০০০ ইউনিট খরচ হয়; কিন্তু ২০০টি রাখলে খরচ চারগুণ বেড়ে ২০,০০০ ইউনিটে দাঁড়ায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The funnel, live', bn: 'INSIDE — জীবন্ত রিট্রিভাল ফানেল সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulation demonstrates funnel sizing: 1,000 vector candidates filtered to 50 items (5%), then reranked to yield the top-5 results. If the metadata filter is loosened to retain 200 candidates, cross-encoder computational cost quadruples from 5,000 to 20,000 units while yielding virtually identical top-5 winners. Funnels protect expensive neural judges from wasteful over-evaluation.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি ফানেলের আকার নির্ধারণ প্রদর্শন করে: ১,০০০ ভেক্টর প্রার্থী ফিল্টার হয়ে ৫০টিতে (৫%) নামে, তারপর সেরা ৫টি ফলাফল নির্ধারণ করা হয়। যদি ফিল্টার শিথিল করে ২০০টি প্রার্থী রাখা হয়, তবে ক্রস-এনকোডারের কম্পিউটেশন খরচ চারগুণ বেড়ে ৫,০০০ থেকে ২০,০০০ ইউনিটে দাঁড়ায় অথচ একই সেরা ৫টি ফলাফল পাওয়া যায়। ফানেল ভারী নিউরাল মডেলকে অপ্রয়োজনীয় মূল্যায়ন থেকে রক্ষা করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Funnel lab (keep 200, press Run)', bn: 'Funnel lab (২০০ রাখুন, Run)' },
      html: '<h3>Pour the funnel</h3>\n<pre id="out"></pre>\n<p>Console prices the judges.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fff7ed; border: 1px solid #fdba74; border-radius: 8px; padding: 10px; }',
      js: 'const N = 1000, KEPT = 50, TOP = 5; // ← try KEPT = 200!\nconst pct = (KEPT / N * 100).toFixed(1);\nconsole.log("filter: " + N + " → " + KEPT + " (" + pct + "%)");\nconst cost = KEPT * 100;\nconsole.log("rerank: " + KEPT + " × 100 = " + cost.toLocaleString() + " units → top-" + TOP);\ndocument.getElementById("out").textContent = N + " → " + KEPT + " (" + pct + "%) → top-" + TOP + " · cost " + cost.toLocaleString() + " ⚖️";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Funnel instincts', bn: 'ফলাফল — রিট্রিভাল ফানেলের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: '1,000 vectors → 50 filtered survivors (5%) → top-5 definitive items (0.5%): narrow broadly before judging deeply.', bn: '১,০০০ ভেক্টর → ৫০টি ফিল্টারকৃত প্রার্থী (৫%) → সেরা ৫টি নিখুঁত ফলাফল (০.৫%): গভীরভাবে বিচার করার আগে দ্রুত পরিসর ছোট করুন।' },
        { en: 'Candidate width dictates neural cost: admitting 200 candidates quadruples cross-encoder compute compared to 50.', bn: 'প্রার্থীর সংখ্যা সরাসরি মডেলের খরচ নির্ধারণ করে: ৫০টির বদলে ২০০টি প্রার্থী রাখলে ক্রস-এনকোডারের খরচ চারগুণ বৃদ্ধি পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Funnel traps', bn: 'ডিবাগ — ফিল্টারিং ও রি-র‍্যাংকিং ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Filter-first blindness (the pruned winner)', bn: 'অতিরিক্ত কঠোর ফিল্টারে সেরা ডেটা হারানো (Filter-first blindness)' },
      text: {
        en: 'Hard relational filters applied prior to vector search can prematurely discard relevant documents due to stale or incorrect tags. Symptoms: perfect semantic matches vanish completely from query results. Cure: utilize soft filtering scores or post-filtering combinations so high vector similarity can overcome minor tag discrepancies.',
        bn: 'ভেক্টর অনুসন্ধানের আগেই কঠোর রিলেশনাল ফিল্টার প্রয়োগ করলে পুরনো বা ভুল মেটাডেটার কারণে সেরা নথিটি বাদ পড়ে যেতে পারে। লক্ষণ: নিখুঁত সেমান্টিক ফলাফল হঠাৎ ফলাফল থেকে গায়েব হয়ে যাওয়া। সমাধান: সফট ফিল্টারিং বা পোস্ট-ফিল্টারিং ব্যবস্থা রাখা যাতে উচ্চ ভেক্টর সাদৃশ্য সামান্য ট্যাগ ত্রুটিকে পুষিয়ে নিতে পারে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Rerank everything (the dear habit)', bn: 'অপ্রয়োজনীয় পূর্ণাঙ্গ রি-র‍্যাংকিংয়ের অপচয় (The dear habit)' },
      text: {
        en: 'Bypassing the funnel to run deep cross-encoders across all 1,000 raw vector candidates inflates inference bills by 100× while returning essentially the same top-5 documents. Symptoms: reranking latency completely dominates total end-to-end response time. Cure: enforce a strict candidate cap (50 items) before invoking neural rerankers.',
        bn: 'ফানেল বাদ দিয়ে প্রাথমিক ১,০০০ প্রার্থীর সবকটিকে ক্রস-এনকোডারে দিলে ১০০ গুণ বেশি বিল আসে অথচ একই সেরা ৫টি ফলাফল পাওয়া যায়। লক্ষণ: সম্পূর্ণ সিস্টেমের ল্যাটেন্সি কেবল রি-র‍্যাংকিং ধাপে আটকে থাকা। প্রতিকার: নিউরাল মডেলে পাঠানোর আগে সর্বোচ্চ ৫০ জন প্রার্থীর কঠোর সীমা প্রয়োগ করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — আধুনিক সার্চ পাইপলাইন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Cohere Rerank API: production endpoints that take 50 to 100 vector candidates and re-sort them using multilingual cross-encoders.', bn: 'Cohere Rerank API: ক্লাউড সার্ভিস যা ৫০ থেকে ১০০টি ভেক্টর প্রার্থী গ্রহণ করে বহুভাষিক ক্রস-এনকোডারের মাধ্যমে নিখুঁতভাবে সাজায়।' },
        { en: 'E-commerce search: combines broad vector catalog queries with price and inventory filters before deep neural relevance ranking.', bn: 'ই-কমার্স সার্চ: নিখুঁত নিউরাল র‍্যাংকিংয়ের আগে দাম ও মজুদের মেটাডেটা ফিল্টার দিয়ে ব্রড ক্যাটালগ সার্চকে দ্রুত সীমিত করে।' },
        { en: 'Enterprise RAG support bots: enforce multi-tenant isolation through pre-filtering before semantic embeddings feed the language model.', bn: 'এন্টারপ্রাইজ RAG বট: ল্যাঙ্গুয়েজ মডেলে তথ্য পাঠানোর আগে মেটাডেটা ফিল্টারের মাধ্যমে বিভিন্ন ক্লায়েন্টের ডেটা কঠোরভাবে আলাদা রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — VDB Capstone', bn: 'পরবর্তী পাঠ — ভেক্টর ডেটাবেজ ক্যাপস্টোন' },
    },
    {
      type: 'para',
      text: {
        en: 'With filtering and reranking mastered, Lesson 8 unites all seven concepts in an end-to-end production capstone: from query parsing, IVF-HNSW candidate generation, and PQ lookup to metadata pruning and final reranking.',
        bn: 'ফিল্টারিং এবং রি-র‍্যাংকিং আয়ত্ত করার পর, পাঠ ৮ আগের সাতটি ধারণাকে একত্রিত করে একটি পূর্ণাঙ্গ প্রোডাকশন ক্যাপস্টোন তৈরি করবে: যেখানে কুয়েরি পার্সিং, IVF-HNSW ইনডেক্সিং এবং PQ লুকআপ থেকে শুরু করে মেটাডেটা ফিল্টার এবং চূড়ান্ত রি-র‍্যাংকিং একসূত্রে বাঁধা হবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'rnk-ex-1',
      kind: 'mcq',
      topic: 'filter-pct',
      question: {
        en: 'When a metadata filter reduces 1,000 initial candidates down to 50 survivors, what percentage of candidates is retained?',
        bn: 'যখন মেটাডেটা ফিল্টারিং প্রাথমিক ১,০০০ প্রার্থীর সংখ্যা কমিয়ে ৫০টিতে নামিয়ে আনে, তখন কত শতাংশ প্রার্থী অবশিষ্ট থাকে?',
      },
      options: [
        { en: '5% of candidates retained (50 / 1,000)', bn: '৫% প্রার্থী অবশিষ্ট থাকে (৫০ / ১,০০০)' },
        { en: '50% of candidates retained', bn: '৫০% প্রার্থী অবশিষ্ট থাকে' },
        { en: '0.5% of candidates retained', bn: '০.৫% প্রার্থী অবশিষ্ট থাকে' },
        { en: '95% of candidates retained', bn: '৯৫% প্রার্থী অবশিষ্ট থাকে' },
      ],
      answer: 0,
      hint: { en: 'Divide surviving candidates (50) by initial candidates (1,000).', bn: 'অবশিষ্ট প্রার্থী (৫০) কে প্রাথমিক প্রার্থী (১,০০০) দিয়ে ভাগ করুন।' },
      explanation: {
        en: '50 / 1,000 = 0.05 (5%). Nineteen out of every twenty candidates are eliminated, drastically cutting downstream reranker workload.',
        bn: '৫০ / ১,০০০ = ০.০৫ (৫%)। প্রতি ২০টির মধ্যে ১৯টি প্রার্থী ছাঁটাই হয়ে যায়, যা পরবর্তী ধাপের ক্রস-এনকোডারের কাজের চাপ বহু গুণ কমায়।',
      },
    },
    {
      id: 'rnk-ex-2',
      kind: 'mcq',
      topic: 'rerank-pick',
      question: {
        en: 'When a cross-encoder evaluates the 50 surviving candidates to select the final top-5 answers, what fraction of the original 1,000 documents is kept?',
        bn: 'যখন ক্রস-এনকোডার অবশিষ্ট ৫০টি প্রার্থী পরীক্ষা করে চূড়ান্ত সেরা ৫টি উত্তর নির্বাচন করে, তখন মূল ১,০০০ নথির কত শতাংশ বা ভগ্নাংশ চূড়ান্তভাবে সংরক্ষিত হয়?',
      },
      options: [
        { en: '5% evaluated deeply, 0.5% kept in final answer (5 / 1,000)', bn: '৫% গভীরভাবে মূল্যায়িত এবং ০.৫% চূড়ান্ত উত্তরে গৃহীত (৫ / ১,০০০)' },
        { en: '100% evaluated deeply', bn: '১০০% গভীরভাবে মূল্যায়িত' },
        { en: '50% kept in final answer', bn: '৫০% চূড়ান্ত উত্তরে গৃহীত' },
        { en: 'Zero documents evaluated', bn: 'কোনো নথি মূল্যায়িত হয় না' },
      ],
      answer: 0,
      hint: { en: '50 / 1,000 = 5% evaluated; 5 / 1,000 = 0.5% selected.', bn: '৫০ / ১,০০০ = ৫% মূল্যায়িত; ৫ / ১,০০০ = ০.৫% নির্বাচিত।' },
      explanation: {
        en: '50 of 1,000 documents (5%) are evaluated by the cross-encoder, and the top-5 documents (0.5%) form the final prompt context. Funnels allocate compute where it matters.',
        bn: '১,০০০ নথির মধ্যে ৫০টি (৫%) ক্রস-এনকোডারে যাচাই হয় এবং সেরা ৫টি (০.৫%) চূড়ান্ত কনটেক্সটে স্থান পায়। ফানেল গুরুত্বপূর্ণ জায়গায় কম্পিউটেশন নিশ্চিত করে।',
      },
    },
    {
      id: 'rnk-ex-3',
      kind: 'mcq',
      topic: 'wide-cost',
      question: {
        en: 'If the metadata filter is loosened to admit 200 candidates instead of 50, how does the reranking computation cost change?',
        bn: 'যদি মেটাডেটা ফিল্টার শিথিল করে ৫০টির বদলে ২০০টি প্রার্থীকে প্রবেশাধিকার দেওয়া হয়, তবে রি-র‍্যাংকিংয়ের কম্পিউটেশনাল খরচ কীভাবে পরিবর্তিত হয়?',
      },
      options: [
        { en: '4× increase — 20,000 units compared to 5,000 units', bn: '৪ গুণ বৃদ্ধি — ৫,০০০ ইউনিটের বিপরীতে ২০,০০০ ইউনিট' },
        { en: 'No change — neural model costs are flat', bn: 'কোনো পরিবর্তন নেই — নিউরাল মডেলের খরচ অপরিবর্তিত থাকে' },
        { en: 'Halves the total cost', bn: 'মোট খরচ অর্ধেকে নেমে আসে' },
        { en: 'Zero computation required', bn: 'কোনো কম্পিউটেশনের প্রয়োজন হয় না' },
      ],
      answer: 0,
      hint: { en: 'Multiply candidates by unit cost: 200 × 100 vs 50 × 100.', bn: 'প্রার্থী সংখ্যাকে ইউনিট খরচ দিয়ে গুণ করুন: ২০০ × ১০০ বনাম ৫০ × ১০০।' },
      explanation: {
        en: '200 candidates × 100 units = 20,000 units, compared to 50 × 100 = 5,000 units. Loosening the filter quadruples the inference bill for minimal recall gains.',
        bn: '২০০ প্রার্থী × ১০০ ইউনিট = ২০,০০০ ইউনিট, যেখানে ৫০ × ১০০ = ৫,০০০ ইউনিট। ফিল্টার ঢিলা করলে সামান্য রিকল সুবিধার জন্য বিল চারগুণ বেড়ে যায়।',
      },
    },
    {
      id: 'rnk-ex-4',
      kind: 'predict',
      topic: 'pruned-winner',
      question: {
        en: 'When a top document is prematurely discarded by an overly strict metadata filter before vector evaluation, what failure occurred and how is it resolved?',
        bn: 'ভেক্টর মূল্যায়নের আগেই অতিরিক্ত কঠোর মেটাডেটা ফিল্টারে সেরা নথিটি বাদ পড়ে গেলে কোন ব্যর্থতা ঘটে এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Hard pre-filter kills winners: soft filters + joint judging.',
      accept: ['soft', 'hard', 'pre-filter', 'joint', 'weight', 'stale', 'tag', 'prune'],
      hint: { en: 'Name hard pre-filter failure and the soft filter solution.', bn: 'কঠোর প্রি-ফিল্টার ব্যর্থতা এবং সফট ফিল্টার সমাধানের কথা বলুন।' },
      explanation: {
        en: 'Hard pre-filtering discards documents before semantic evaluation. Combining soft filter weights with vector similarity prevents premature pruning.',
        bn: 'কঠোর প্রি-ফিল্টারিং সেমান্টিক মূল্যায়নের আগেই নথি বাদ দিয়ে দেয়। সফট ফিল্টার স্কোর এবং ভেক্টর সাদৃশ্য একত্রিত করলে এই সমস্যা দূর হয়।',
      },
    },
  ],
  quiz: {
    id: 'rerank-filter-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'rnkq1',
        kind: 'mcq',
        topic: 'funnel-order',
        question: {
          en: 'What is the correct sequential order of stages in a production multi-stage retrieval funnel?',
          bn: 'একটি প্রোডাকশন বহু-স্তরের রিট্রিভাল ফানেলের পর্যায়ক্রমিক সঠিক ধাপ কোনটি?',
        },
        options: [
          {
            en: 'Vector Search (1,000) → Metadata Filter (50) → Cross-Encoder Rerank (top-5)',
            bn: 'ভেক্টর সার্চ (১,০০০) → মেটাডেটা ফিল্টার (৫০) → ক্রস-এনকোডার রি-র‍্যাংক (শীর্ষ-৫)',
          },
          {
            en: 'Cross-Encoder Rerank → Metadata Filter → Vector Search',
            bn: 'ক্রস-এনকোডার রি-র‍্যাংক → মেটাডেটা ফিল্টার → ভেক্টর সার্চ',
          },
          {
            en: 'Top-5 selection → Broadcast to 1,000 vectors',
            bn: 'শীর্ষ-৫ নির্বাচন → ১,০০০ ভেক্টরে ব্রডকাস্ট',
          },
          {
            en: 'Metadata Filter only without vector similarity',
            bn: 'ভেক্টর সাদৃশ্য ছাড়া কেবল মেটাডেটা ফিল্টার',
          },
        ],
        answer: 0,
        hint: { en: 'Breadth first (vectors), structure second (filters), precision last (rerankers).', bn: 'প্রথমে বিস্তার (ভেক্টর), দ্বিতীয়তে কাঠামো (ফিল্টার), শেষে নির্ভুলতা (রি-র‍্যাংক)।' },
        explanation: {
          en: 'The funnel progresses from wide, cheap stages to narrow, deep stages: broad vector search feeds metadata filtering, which feeds cross-encoder reranking.',
          bn: 'ফানেল সস্তা ধাপ থেকে শুরু করে ক্রমান্বয়ে গভীর ধাপে এগিয়ে যায়: ব্রড ভেক্টর সার্চ থেকে মেটাডেটা ফিল্টারিং হয়ে ক্রস-এনকোডার মূল্যায়নে পৌঁছায়।',
        },
      },
      {
        id: 'rnkq2',
        kind: 'mcq',
        topic: 'cross-cost',
        question: {
          en: 'Approximately how much more computationally expensive is a cross-encoder model evaluation compared to vector dot product distance calculation?',
          bn: 'ভেক্টর ডট প্রোডাক্টের দূরত্বের হিসাবের তুলনায় একটি ক্রস-এনকোডার মডেলের মূল্যায়ন আনুমানিক কত গুণ বেশি কম্পিউটেশন খরচ দাবি করে?',
        },
        options: [
          {
            en: '~100× more expensive — full bidirectional cross-attention across tokens demands significant compute',
            bn: '~১০০ গুণ বেশি ব্যয়বহুল — টোকেনজুড়ে পূর্ণ দ্বিমুখী ক্রস-অ্যাটেনশনের জন্য প্রচুর কম্পিউটেশন প্রয়োজন হয়',
          },
          {
            en: '~1× — both algorithms possess identical computational cost',
            bn: '~১ গুণ — উভয় অ্যালগরিদমের কম্পিউটেশনাল খরচ পুরোপুরি সমান',
          },
          {
            en: 'Cross-encoders consume zero computational resources',
            bn: 'ক্রস-এনকোডারে কোনো কম্পিউটেশনাল রিসোর্স লাগে না',
          },
          {
            en: 'Cross-encoders execute faster than raw floating-point dot products',
            bn: 'ক্রস-এনকোডার কাঁচা ফ্লোট ডট প্রোডাক্টের চেয়েও দ্রুত সম্পন্ন হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Joint transformer attention is two orders of magnitude heavier than dot products.', bn: 'ট্রান্সফর্মার অ্যাটেনশন ডট প্রোডাক্টের চেয়ে দুই গুণ ভারী।' },
        explanation: {
          en: 'Cross-encoders evaluate tokens jointly through full self-attention layers, making them roughly 100× more computationally demanding than simple dot products.',
          bn: 'ক্রস-এনকোডার সেলফ-অ্যাটেনশন লেয়ারের মাধ্যমে প্রতিটি টোকেন একসাথে বিশ্লেষণ করে, যার ফলে এটি সাধারণ ডট প্রোডাক্টের চেয়ে প্রায় ১০০ গুণ বেশি ভারী।',
        },
      },
      {
        id: 'rnkq3',
        kind: 'mcq',
        topic: 'skip-funnel',
        question: {
          en: 'What consequence occurs if an engineering team eliminates the funnel and feeds all 1,000 initial candidates directly to the cross-encoder?',
          bn: 'যদি কোনো ইঞ্জিনিয়ারিং টিম ফানেল বাদ দিয়ে সরাসরি প্রাথমিক ১,০০০ প্রার্থীর সবকটিকে ক্রস-এনকোডারে পাঠায়, তবে কী পরিণতি ঘটবে?',
        },
        options: [
          {
            en: 'Inference costs multiply 100× while returning essentially the exact same top-5 documents',
            bn: 'ইনফারেন্স খরচ ১০০ গুণ বেড়ে যায় অথচ দিনশেষে হুবহু একই সেরা ৫টি ফলাফল পাওয়া যায়',
          },
          {
            en: 'Query accuracy improves by an order of magnitude',
            bn: 'অনুসন্ধানের নির্ভুলতা বহু গুণ বৃদ্ধি পায়',
          },
          {
            en: 'Overall query latency drops significantly',
            bn: 'সামগ্রিক কুয়েরি ল্যাটেন্সি উল্লেখযোগ্যভাবে কমে যায়',
          },
          {
            en: 'The database server completely eliminates all GPU memory consumption',
            bn: 'ডেটাবেজ সার্ভার সম্পূর্ণভাবে জিপিইউ মেমরির ব্যবহার বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Applying deep models without candidate narrowing creates severe compute waste.', bn: 'প্রার্থী সংখ্যা না কমিয়ে ডিপ মডেল চালালে চরম অপচয় হয়।' },
        explanation: {
          en: 'Evaluating all 1,000 vectors with a cross-encoder pays full transformer inference costs for 950 irrelevant candidates that would have been pruned by metadata filters.',
          bn: 'সব ১,০০০ ভেক্টরে ক্রস-এনকোডার চালালে ৯৫০টি অপ্রাসঙ্গিক নথির জন্যও পুরো বিল দিতে হয়, যা ফিল্টারেই সহজে বাদ দেওয়া যেত।',
        },
      },
      {
        id: 'rnkq4',
        kind: 'predict',
        topic: 'funnel-recite',
        question: {
          en: 'What five benchmark metrics summarize the multi-stage retrieval funnel in this lesson?',
          bn: 'এই পাঠে আলোচিত বহু-স্তরের রিট্রিভাল ফানেল প্রকাশ করে এমন পাঁচটি মূল সংখ্যা কী কী?',
        },
        answer: '1000 vectors, filter 50 (5%), rerank top-5 (0.5%).',
        accept: ['1000', '50', '5%', 'top-5', '0.5', 'filter', 'rerank'],
        hint: { en: 'List initial count, filtered count and percentage, and reranked count and percentage.', bn: 'প্রাথমিক সংখ্যা, ফিল্টারকৃত সংখ্যা ও শতকরা হার এবং রি-র‍্যাংক করা সংখ্যা ও শতকরা হার উল্লেখ করুন।' },
        explanation: {
          en: 'The five core metrics are 1,000 vector candidates, 50 metadata-filtered survivors (5%), and top-5 cross-encoder reranked results (0.5%).',
          bn: 'মূল পাঁচটি পরিমাপ হলো: ১,০০০ ভেক্টর প্রার্থী, ৫০টি ফিল্টারকৃত নথি (৫%) এবং শীর্ষ ৫টি রি-র‍্যাংক করা ফলাফল (০.৫%)।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'vdb-capstone',
    title: { en: 'VDB Capstone', bn: 'VDB Capstone' },
  },
};
