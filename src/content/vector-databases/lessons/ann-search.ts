import type { Lesson } from '../../../lib/types';

export const AnnSearchLesson: Lesson = {
  slug: 'ann-search',
  tech: 'vector-databases',
  title: {
    en: 'ANN Search',
    bn: 'অ্যাপ্রক্সিমেট নিকটতম প্রতিবেশী — নির্ভুলতা ও গতির ভারসাম্য',
  },
  summary: {
    en: 'Approximate Nearest Neighbor (ANN) search trades a small fraction of exactness for dramatic speedups: evaluating 100 candidates instead of 1,000 documents yields a 10× speedup while still capturing 98 of the true 100 nearest neighbors (0.98 recall).',
    bn: 'অ্যাপ্রক্সিমেট নিকটতম প্রতিবেশী (ANN) সার্চ সামান্য নির্ভুলতা স্যাক্রিফাইস করে বহুগুণ গতি এনে দেয়: ১,০০০ নথি স্ক্যান করার বদলে ১০০টি প্রার্থী যাচাই করে ১০ গুণ গতি পাওয়া যায় এবং ১০০টি আসল প্রতিবেশীর মধ্যে ৯৮টি (০.৯৮ রিকল) উদ্ধার করা সম্ভব হয়।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Neighbors, approximately', bn: 'WHAT — আনুমানিক নিকটতম প্রতিবেশী' },
    },
    {
      type: 'para',
      text: {
        en: 'When you search high-dimensional spaces, Approximate Nearest Neighbor (ANN) algorithms trade a fraction of mathematical exactness for orders-of-magnitude faster queries. Rather than computing distances against every vector, ANN algorithms prune distant regions, score a few hundred promising candidates, and return top neighbors. For example, where an exact linear scan evaluates 1,000 vectors for 1.00 recall, an approximate search inspects only 100 vectors to capture 98 true neighbors (0.98 recall). That 2% miss rate buys a 10× speedup, transforming multi-second batch scans into sub-10ms interactive lookups.',
        bn: 'যখন আপনি উচ্চ মাত্রার ভেক্টর স্পেসে অনুসন্ধান করেন, তখন অ্যাপ্রক্সিমেট নিকটতম প্রতিবেশী (ANN) অ্যালগরিদম সামান্য নির্ভুলতা স্যাক্রিফাইস করে বহু গুণ দ্রুত গতিতে ফলাফল দেয়। প্রতিটি ভেক্টরের দূরত্ব হিসাব করার বদলে ANN অ্যালগরিদম অপ্রয়োজনীয় অংশ ছাঁটাই করে মাত্র কয়েকশত প্রতিশ্রুতিশীল প্রার্থী যাচাই করে সেরা প্রতিবেশী চিহ্নিত করে। যেমন, যেখানে একটি পূর্ণাঙ্গ রৈখিক স্ক্যান ১,০০০ ভেক্টরের সবকটি পরীক্ষা করে ১.০০ রিকল দেয়, সেখানে একটি অ্যাপ্রক্সিমেট সার্চ মাত্র ১০০টি ভেক্টর পরীক্ষা করেই ৯৮টি আসল প্রতিবেশী (০.৯৮ রিকল) উদ্ধার করে। এই ২% সামান্য ভুলের বিনিময়ে পাওয়া যায় ১০ গুণ গতি বৃদ্ধি, যা কয়েক সেকেন্ডের অনুসন্ধানকে মাত্র কয়েক মিলিমিটারের রেসপন্সে রূপান্তর করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Two misses buy 10×', bn: '২টি মিসের বিনিময়ে ১০ গুণ গতি' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Exact versus approximate search tradeoff">
<text x="160" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">EXACT 🎯</text>
<text x="480" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">APPROXIMATE ⚡</text>
<rect x="40" y="50" width="240" height="130" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="160" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">visits 1000/1000</text>
<text x="160" y="104" text-anchor="middle" font-size="16" font-weight="800" fill="currentColor">recall 1.00</text>
<text x="160" y="130" text-anchor="middle" font-size="12" fill="currentColor">100/100 caught</text>
<text x="160" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">speed 1× 🐌</text>
<rect x="360" y="50" width="240" height="130" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">visits 100/1000</text>
<text x="480" y="104" text-anchor="middle" font-size="16" font-weight="800" fill="currentColor">recall 0.98</text>
<text x="480" y="130" text-anchor="middle" font-size="12" fill="currentColor">98/100 caught</text>
<text x="480" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">speed 10× 🚀</text>
<text x="320" y="210" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">2 misses per 100 → one order of magnitude</text>
<text x="320" y="232" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">IVF · HNSW · PQ — three pruners, one trade</text>
</svg>`,
      caption: {
        en: 'Perfection evaluates all 1,000 vectors; approximation evaluates a tenth. Missing two distant neighbors funds a 10× speedup.',
        bn: 'শতভাগ নির্ভুলতা ১,০০০টি ভেক্টরের সবকটি পরীক্ষা করে; আর অ্যাপ্রক্সিমেশন মাত্র দশমাংশ যাচাই করে। দুটি সামান্য মিসের বিনিময়ে ১০ গুণ গতি অর্জন হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Approximate Nearest Neighbor',
          def: {
            en: 'A family of search algorithms that quickly return near-optimal nearest vectors by skipping distant regions of the index.',
            bn: 'একগুচ্ছ অনুসন্ধান অ্যালগরিদম যা সূচির অপ্রয়োজনীয় দূরবর্তী অংশ বাদ দিয়ে দ্রুততম সময়ে প্রায়-নিখুঁত নিকটতম ভেক্টর খুঁজে বের করে।',
          },
        },
        {
          term: 'Recall@K',
          def: {
            en: 'The ratio of true ground-truth nearest neighbors present in the top-K retrieved candidates to the target total K.',
            bn: 'আসল গ্রাউন্ড-ট্রুথ নিকটতম প্রতিবেশীদের কত অংশ শীর্ষ K সংখ্যক উদ্ধারকৃত ফলাফলের মধ্যে উপস্থিত রয়েছে তার অনুপাত।',
          },
        },
        {
          term: 'Search space pruning',
          def: {
            en: 'The algorithmic strategy of bypassing unpromising clusters or branches in a vector index during query execution.',
            bn: 'অনুসন্ধানের সময় ভেক্টর ইনডেক্সের অপ্রাসঙ্গিক ক্লাস্টার বা নোডগুলোকে পরীক্ষা না করেই এড়িয়ে যাওয়ার অ্যালগরিদমিক কৌশল।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Exactness bankrupts', bn: 'কেন — শতভাগ নির্ভুলতার অতিরিক্ত খরচ' },
    },
    {
      type: 'list',
      items: [
        { en: 'End users cannot distinguish between rank 97 and rank 99: minor ranking variations have zero perceptible impact on application quality.', bn: 'ব্যবহারকারীরা ৯৭তম এবং ৯৯তম র‍্যাংকের পার্থক্য ধরতে পারেন না: সামান্য তারতম্য অ্যাপ্লিকেশনের গুণমানে কোনো নেতিবাচক প্রভাব ফেলে না।' },
        { en: 'Latency budgets require approximation: a 10× speedup comfortably fits within 20ms p99 SLAs, whereas exact scans exceed deadlines.', bn: 'ল্যাটেন্সি সীমা রক্ষা করতে অ্যাপ্রক্সিমেশন জরুরি: ১০ গুণ গতি ২০ মিলিসেকেন্ডের SLA পূরণ করে, যেখানে ব্রুট-ফোর্স সময়সীমা পার করে দেয়।' },
        { en: 'Candidate count acts as an explicit tuning dial: visiting more candidates increases recall linearly while trading predictable latency.', bn: 'প্রার্থী সংখ্যা একটি সুনির্দিষ্ট টিউনিং ডায়াল হিসেবে কাজ করে: বেশি প্রার্থী পরীক্ষা করলে রিকল বাড়ে এবং ল্যাটেন্সি বৃদ্ধি পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Trade in 4 steps', bn: 'HOW — ৪টি ধাপে গতি ও নির্ভুলতার ভারসাম্য' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Exact baseline', bn: '১. নির্ভুল বেসলাইন' }, text: { en: 'Visit all 1,000 vectors to capture 100/100 true nearest neighbors (recall 1.00).', bn: '১০০/১০০ আসল প্রতিবেশী উদ্ধার করতে ১,০০০টি ভেক্টরের সবকটি পরীক্ষা করুন (রিকল ১.০০)।' } },
        { title: { en: '2. Prune index', bn: '২. ইনডেক্স ছাঁটাই' }, text: { en: 'Evaluate 100 promising candidates and skip 900 distant vectors.', bn: '১০০টি প্রতিশ্রুতিশীল প্রার্থী যাচাই করুন এবং ৯০০টি দূরবর্তী ভেক্টর বাদ দিন।' } },
        { title: { en: '3. Measure recall', bn: '৩. রিকল নির্ণয়' }, text: { en: 'Capture 98 of 100 true neighbors to achieve 0.98 recall@100.', bn: '১০০টি আসল প্রতিবেশীর মধ্যে ৯৮টি উদ্ধার করে ০.৯৮ recall@100 অর্জন করুন।' } },
        { title: { en: '4. Calculate speedup', bn: '৪. গতির হিসাব' }, text: { en: 'Compute 1,000 / 100 = 10× faster execution with minimal error.', bn: '১,০০০ / ১০০ = ১০ গুণ দ্রুত অনুসন্ধান সম্পন্ন করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'evaluate_ann_recall.py',
      code: `def evaluate_ann_tradeoff(total_docs, candidates_visited, true_neighbors, caught_neighbors):
    recall = caught_neighbors / true_neighbors
    speedup = total_docs / candidates_visited
    misses = true_neighbors - caught_neighbors
    return recall, speedup, misses

# Benchmark: 1,000 total vectors, evaluate 100 candidates for top-100 neighbors
recall, speedup, misses = evaluate_ann_tradeoff(1000, 100, 100, 98)
print(f"Total corpus: 1,000 documents")
print(f"Candidates visited: 100/1,000 (speedup={speedup:.0f}x)")
print(f"True neighbors caught: 98/100 (misses={misses})")
print(f"Recall@100: {recall:.2f} (98.0%)")

# Extreme dial test: 50 visits (starved) vs 500 visits (conservative)
r_starved, s_starved, _ = evaluate_ann_tradeoff(1000, 50, 100, 91)
print(f"Starved dial (50 visits): recall={r_starved:.2f}, speedup={s_starved:.0f}x")

r_conservative, s_conservative, _ = evaluate_ann_tradeoff(1000, 500, 100, 100)
print(f"Conservative dial (500 visits): recall={r_conservative:.2f}, speedup={s_conservative:.0f}x")

# Output:
# Total corpus: 1,000 documents
# Candidates visited: 100/1,000 (speedup=10x)
# True neighbors caught: 98/100 (misses=2)
# Recall@100: 0.98 (98.0%)
# Starved dial (50 visits): recall=0.91, speedup=20x
# Conservative dial (500 visits): recall=1.00, speedup=2x`,
      caption: {
        en: 'The Python evaluation proves the trade-off: 100 candidates deliver 0.98 recall at 10× speedup; starving to 50 drops recall to 0.91, while 500 achieves 1.00 at 2× speedup.',
        bn: 'পাইথন মূল্যায়ন আপসের বাস্তবতা প্রমাণ করে: ১০০ প্রার্থী যাচাই করে ১০ গুণ গতিতে ০.৯৮ রিকল মেলে; ৫০ প্রার্থীরা নামালে রিকল ০.৯১ তে নেমে যায়, আর ৫০০ প্রার্থী যাচাইয়ে ২ গুণ গতিতে ১.০০ রিকল পাওয়া যায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The dial, live', bn: 'INSIDE — জীবন্ত টিউনিং সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulation demonstrates the candidate dial in action. Inspecting 100 candidates recovers 98 of the true 100 neighbors (0.98 recall at 10× speedup), whereas 500 visits captures 100% of targets (1.00 score at 2× speedup). Reducing visits down to 50 drops recovery steeply to 91/100. Evaluating more candidates steadily improves neighbor coverage, while over-aggressive pruning risks omitting relevant items.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনে প্রার্থী সংখ্যা পরিবর্তন করে পরীক্ষা করা যায়: ১০০ প্রার্থী যাচাই করলে ৯৮/১০০ প্রতিবেশী মেলে (০.৯৮ রিকল, ১০ গুণ গতি), আর ৫০০ প্রার্থী যাচাইয়ে ১০০/১০০ প্রতিবেশী (১.০০ স্কোর, ২ গুণ গতি) মেলে। প্রার্থী সংখ্যা ৫০ এ নামালে উদ্ধার হার দ্রুত কমে ৯১/১০০ তে নেমে আসে। অতিরিক্ত প্রার্থী যাচাই প্রতিবেশীদের কভারেজ বাড়ায়, আর অতিরিক্ত ছাঁটাই গুরুত্বপূর্ণ তথ্য হারানোর ঝুঁকি তৈরি করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'ANN dial (drop VISITS, press Run)', bn: 'ANN dial (VISITS নামিয়ে Run)' },
      html: '<h3>Turn the dial</h3>\n<pre id="out"></pre>\n<p>Console prices every setting.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 10px; }',
      js: 'const VISITS = 100, TOTAL = 1000; // ← try 50, then 500!\nconst caught = VISITS >= 500 ? 100 : VISITS >= 100 ? 98 : 91;\nconst recall = caught / 100;\nconst speed = TOTAL / VISITS;\nconsole.log(VISITS + " visits → " + caught + "/100 caught");\nconsole.log("recall " + recall.toFixed(2) + " · speed " + speed + "×");\ndocument.getElementById("out").textContent = "recall " + recall.toFixed(2) + " · " + speed + "× faster 🎚️";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Trade instincts', bn: 'ফলাফল — আপস সম্পর্কিত মূল উপলব্ধি' },
    },
    {
      type: 'list',
      items: [
        { en: '100 visits yield 0.98 recall at 10× speed: a balanced standard for production search engines.', bn: '১০০ প্রার্থী পরীক্ষায় ১০ গুণ গতিতে ০.৯৮ রিকল পাওয়া যায়: যা আধুনিক প্রোডাকশন সার্চ ইঞ্জিনের সুষম মানদণ্ড।' },
        { en: 'Recall scales predictably with candidate visits until reaching diminishing returns near the knee of the curve.', bn: 'প্রার্থী সংখ্যা বাড়ালে কার্ভের সর্বোচ্চ সীমার কাছাকাছি পৌঁছানো পর্যন্ত রিকল সুষমভাবে বৃদ্ধি পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — ANN traps', bn: 'ডিবাগ — এএনএন সার্চের সাধারণ ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Recall blindness (the unmeasured miss)', bn: 'রিকল অন্ধত্ব বা অনিরীক্ষিত ত্রুটি (Recall blindness)' },
      text: {
        en: 'Deploying approximate vector search without systematically tracking recall allows silent quality degradations to go unnoticed. Symptoms: vague user complaints stating search relevance degraded. Cure: curate a golden query set with exact nearest neighbors and evaluate recall@K on every deployment.',
        bn: 'নিয়মিত রিকল ট্র্যাক না করে অ্যাপ্রক্সিমেট সার্চ ডিপ্লয় করলে গুণগত মান নীরবে কমে যাওয়ার ঝুঁকি থাকে। লক্ষণ: ব্যবহারকারীরা অভিযোগ করেন যে আগের মতো প্রাসঙ্গিক তথ্য পাওয়া যাচ্ছে না। সমাধান: নিখুঁত প্রতিবেশীদের নিয়ে একটি গোল্ডেন কুয়েরি সেট তৈরি রাখুন এবং প্রতিটি ডিপ্লয়মেন্টে recall@K পরীক্ষা করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Dial extremes (the 50-visit cliff)', bn: 'মাত্রাতিরিক্ত ছাঁটাইয়ের ঝুঁকি (The 50-visit cliff)' },
      text: {
        en: 'Excessively restricting candidate evaluations causes recall to fall off an algorithmic cliff: dropping visits to 50 plummets recall to 0.91. Symptoms: abrupt drop in answer relevance. Cure: benchmark recall across a sweep of candidate counts to find the performance knee (here, 100 visits).',
        bn: 'প্রার্থী যাচাইয়ের সংখ্যা মাত্রাতিরিক্ত কমালে রিকল আকস্মিকভাবে ভেঙে পড়ে: ৫০ প্রার্থীরা নামালে রিকল কমে ০.৯১ তে দাঁড়ায়। লক্ষণ: প্রাসঙ্গিক ফলাফলে হঠাৎ ধস নামা। সমাধান: বিভিন্ন প্রার্থী সংখ্যার ওপর বেঞ্চমার্ক চালিয়ে সুষম সীমা বা knee চিহ্নিত করুন (এখানে ১০০ প্রার্থী)।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production applications', bn: 'বাস্তব ক্ষেত্র — ব্যবহারিক প্রয়োগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Visual similarity search: online catalogs maintain 0.95 recall while achieving a 50× query acceleration.', bn: 'ছবি ভিত্তিক সাদৃশ্য অনুসন্ধান: অনলাইন ক্যাটালগে ৫০ গুণ দ্রুত গতিতে ০.৯৫ রিকল বজায় রেখে পণ্য খোঁজা যায়।' },
        { en: 'Recommendation systems: minor neighbor ranking variations fall safely below user perception thresholds.', bn: 'সুপারিশ ব্যবস্থা: সামান্য র‍্যাংকিং পরিবর্তন ব্যবহারকারীর দৃশ্যমান পরিসীমার নিচে নিখুঁত অভিজ্ঞতা দেয়।' },
        { en: 'Enterprise RAG pipelines: targeted 0.98 recall retrieves faithful context for generative models in under 15ms.', bn: 'এন্টারপ্রাইজ RAG পাইপলাইন: ১৫ মিলিসেকেন্ডের মধ্যে ০.৯৮ রিকলে নির্ভরযোগ্য তথ্য উদ্ধার করে প্রম্পটে সরবরাহ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — IVF Index', bn: 'পরবর্তী পাঠ — আইভিএফ (IVF) ইনডেক্স' },
    },
    {
      type: 'para',
      text: {
        en: 'With the ANN trade-off established, Lesson 3 introduces clustering: partitioning 1,000 vectors into 10 inverted list buckets and probing 2 centroids to scan 200 items while skipping 800.',
        bn: 'অ্যাপ্রক্সিমেট অনুসন্ধানের মূল আপস বোঝার পর, পাঠ ৩ ক্লাস্টারিং পদ্ধতি উপস্থাপন করবে: যেখানে ১,০০০টি ভেক্টরকে ১০টি ইনভার্টেড লিস্ট বালতিতে ভাগ করে মাত্র ২টি সেন্ট্রয়েড স্ক্যান করা হয় (২০০টি যাচাই, ৮০০টি বাদ)।',
      },
    },
  ],
  exercises: [
    {
      id: 'ann-ex-1',
      kind: 'mcq',
      topic: 'recall-compute',
      question: {
        en: 'When an ANN search inspects a subset of vectors and recovers 98 of the true top-100 nearest neighbors, what is the resulting recall@100?',
        bn: 'যখন একটি এএনএন সার্চ ভেক্টরের একটি সাবসেট পরীক্ষা করে শীর্ষ ১০০টি আসল প্রতিবেশীর মধ্যে ৯৮টি পুনরুদ্ধার করে, তখন recall@100 এর মান কত হয়?',
      },
      options: [
        { en: '0.98 (98% of true neighbors retrieved)', bn: '০.৯৮ (৯৮% আসল প্রতিবেশী উদ্ধার)' },
        { en: '0.90 (90% of true neighbors retrieved)', bn: '০.৯০ (৯০% আসল প্রতিবেশী উদ্ধার)' },
        { en: '1.00 (perfect complete recall)', bn: '১.০০ (নিখুঁত সম্পূর্ণ রিকল)' },
        { en: '0.50 (half of neighbors retrieved)', bn: '০.৫০ (অর্ধেক প্রতিবেশী উদ্ধার)' },
      ],
      answer: 0,
      hint: { en: 'Divide the number of retrieved true neighbors by the target total 100.', bn: 'উদ্ধারকৃত আসল প্রতিবেশীর সংখ্যাকে মোট লক্ষ্য ১০০ দিয়ে ভাগ করুন।' },
      explanation: {
        en: 'Recall@100 is calculated as 98 recovered neighbors / 100 true neighbors = 0.98 (98%). Recall measures recovery of true neighbors, not the number of candidates evaluated.',
        bn: 'Recall@100 হিসাব করা হয়: ৯৮ উদ্ধারকৃত প্রতিবেশী / ১০০ আসল প্রতিবেশী = ০.৯৮ (৯৮%)। রিকল উদ্ধারকৃত প্রতিবেশীর অনুপাত নির্দেশ করে।',
      },
    },
    {
      id: 'ann-ex-2',
      kind: 'mcq',
      topic: 'speed-compute',
      question: {
        en: 'If an approximate query evaluates only 100 candidate vectors instead of scanning all 1,000 documents in the corpus, what is the speedup factor?',
        bn: 'যদি একটি অ্যাপ্রক্সিমেট কুয়েরি ডেটাসেটের সমস্ত ১,০০০ নথি স্ক্যান করার বদলে মাত্র ১০০টি প্রার্থী ভেক্টর পরীক্ষা করে, তবে গতির অনুপাত বা স্পিডআপ কত গুণ হয়?',
      },
      options: [
        { en: '10× faster execution', bn: '১০ গুণ দ্রুত কার্যকারিতা' },
        { en: '2× faster execution', bn: '২ গুণ দ্রুত কার্যকারিতা' },
        { en: '100× faster execution', bn: '১০০ গুণ দ্রুত কার্যকারিতা' },
        { en: '1× (no speedup)', bn: '১ গুণ (গতির কোনো পরিবর্তন নেই)' },
      ],
      answer: 0,
      hint: { en: 'Divide total documents (1,000) by evaluated candidates (100).', bn: 'মোট নথি (১,০০০) কে পরীক্ষিত প্রার্থী (১০০) দিয়ে ভাগ করুন।' },
      explanation: {
        en: 'The computational reduction is 1,000 / 100 = 10×. Skipping 900 distant vectors reduces required dot-product calculations tenfold.',
        bn: 'কম্পিউটেশন কমে দাঁড়ায় ১,০০০ / ১০০ = ১০ গুণ। ৯০০টি দূরবর্তী ভেক্টর বাদ দেওয়ার ফলে ডট প্রোডাক্টের হিসাব ১০ গুণ হ্রাস পায়।',
      },
    },
    {
      id: 'ann-ex-3',
      kind: 'mcq',
      topic: 'dial-50',
      question: {
        en: 'When candidate evaluations are reduced past the performance knee down to 50 visits, what does recall fall to in our benchmark?',
        bn: 'যখন প্রার্থী পরীক্ষার সংখ্যা পারফরম্যান্সের সুষম সীমা বা knee অতিক্রম করে ৫০ এ নামিয়ে আনা হয়, তখন বেঞ্চমার্কে রিকল কমে কততে দাঁড়ায়?',
      },
      options: [
        { en: '0.91 — falling off the performance knee', bn: '০.৯১ — পারফরম্যান্স সীমা অতিক্রম করে নিচে ধস' },
        { en: '0.98 — remaining unchanged', bn: '০.৯৮ — সম্পূর্ণ অপরিবর্তিত থাকে' },
        { en: '1.00 — improving accuracy', bn: '১.০০ — নির্ভুলতা বৃদ্ধি পায়' },
        { en: '0.00 — complete failure', bn: '০.০০ — সম্পূর্ণ ব্যর্থ' },
      ],
      answer: 0,
      hint: { en: 'Refer to the starved dial test in the interactive simulation.', bn: 'ইন্টারেক্টিভ সিমুলেশনের ৫০ প্রার্থীর ফলাফল দেখুন।' },
      explanation: {
        en: 'At 50 candidate visits, 91 of 100 true neighbors are captured: 91 / 100 = 0.91. Restricting candidate visits too aggressively degrades recall nonlinearly.',
        bn: '৫০ প্রার্থী যাচাইয়ে ১০০টির মধ্যে ৯১টি প্রতিবেশী মেলে: ৯১ / ১০০ = ০.৯১। মাত্রাতিরিক্ত ছাঁটাই রিকলকে দ্রুত কমিয়ে দেয়।',
      },
    },
    {
      id: 'ann-ex-4',
      kind: 'predict',
      topic: 'golden-why',
      question: {
        en: 'What silent failure occurs when shipping an ANN vector index without measuring recall on golden queries, and how is it prevented?',
        bn: 'গোল্ডেন কুয়েরিতে রিকল না মেপে প্রোডাকশনে এএনএন ভেক্টর ইনডেক্স চালু করলে কোন লুকায়িত সমস্যা দেখা দেয় এবং তা কীভাবে সমাধান করা হয়?',
      },
      answer: 'Blind misses rot search quality: evaluate recall@K on curated golden query sets per deploy.',
      accept: ['golden', 'recall@K', 'measure', 'miss', 'blind', 'deploy', 'regression'],
      hint: { en: 'Review the recall blindness debug callout.', bn: 'রিকল অন্ধত্ব ডিবাগ সতর্কতার সমাধান অংশটি দেখুন।' },
      explanation: {
        en: 'Without systematic recall measurement, algorithmic drift silently causes search relevance regressions. Running recall@K on golden query sets catches regressions before launch.',
        bn: 'পদ্ধতিগতভাবে রিকল পরিমাপ না করলে অনুসন্ধানের মান নীরবে খারাপ হতে থাকে। প্রতিটি ডিপ্লয়ে গোল্ডেন কুয়েরি সেটে recall@K যাচাই করা এটি প্রতিরোধ করে।',
      },
    },
  ],
  quiz: {
    id: 'ann-search-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'annq1',
        kind: 'mcq',
        topic: 'ann-mean',
        question: {
          en: 'What core engineering concept defines Approximate Nearest Neighbor (ANN) search?',
          bn: 'অ্যাপ্রক্সিমেট নিকটতম প্রতিবেশী (ANN) সার্চের মূল ইঞ্জিনিয়ারিং ভিত্তি কোনটি?',
        },
        options: [
          {
            en: 'Evaluating a small candidate subset to capture near-optimal neighbors orders-of-magnitude faster than exhaustive scans',
            bn: 'পূর্ণাঙ্গ স্ক্যানের চেয়ে শতগুণ দ্রুত নিকটতম প্রতিবেশী চিহ্নিত করতে ভেক্টরের একটি ক্ষুদ্র প্রার্থী সাবসেট পরীক্ষা করা',
          },
          {
            en: 'Exhaustively calculating dot products against every stored record to prove exact distance rankings',
            bn: 'শতভাগ নির্ভুল দূরত্বের ক্রম প্রমাণের জন্য সংরক্ষিত প্রতিটি রেকর্ডের ডট প্রোডাক্ট গণনা করা',
          },
          {
            en: 'Filtering database rows exclusively through SQL string pattern matching',
            bn: 'কেবল এসকিউএল স্ট্রিং প্যাটার্ন ম্যাচিংয়ের মাধ্যমে ডেটাবেজের সারি ফিল্টার করা',
          },
          {
            en: 'Converting vector coordinates to integers to prevent any search approximation',
            bn: 'যেকোনো অ্যাপ্রক্সিমেশন ঠেকাতে ভেক্টর মানগুলোকে পূর্ণসংখ্যায় রূপান্তর করা',
          },
        ],
        answer: 0,
        hint: { en: 'Approximation bypasses the full scan to gain speed.', bn: 'গতি অর্জনের জন্য অ্যাপ্রক্সিমেশন পূর্ণাঙ্গ স্ক্যান বাদ দেয়।' },
        explanation: {
          en: 'ANN algorithms skip the majority of distant vectors and score only hundreds of promising candidates, delivering sublinear query latency.',
          bn: 'ANN অ্যালগরিদম বেশিরভাগ দূরবর্তী ভেক্টর বাদ দিয়ে মাত্র কয়েকশত প্রার্থী যাচাই করে সাব-লিনিয়ার সময়ে উত্তর দেয়।',
        },
      },
      {
        id: 'annq2',
        kind: 'mcq',
        topic: 'recallatk-def',
        question: {
          en: 'How is the benchmark metric Recall@K formally calculated?',
          bn: 'বেঞ্চমার্ক পরিমাপক Recall@K কীভাবে আনুষ্ঠানিকভাবে হিসাব করা হয়?',
        },
        options: [
          {
            en: 'True ground-truth top-K neighbors captured in candidate results divided by K',
            bn: 'উদ্ধারকৃত ফলাফলে উপস্থিত আসল গ্রাউন্ড-ট্রুথ প্রতিবেশীদের সংখ্যাকে K দিয়ে ভাগ করে',
          },
          {
            en: 'Candidate evaluations divided by the total document corpus',
            bn: 'পরীক্ষিত প্রার্থীর সংখ্যাকে মোট ডেটাসেটের নথি সংখ্যা দিয়ে ভাগ করে',
          },
          {
            en: 'Query execution latency divided by total floating-point operations',
            bn: 'কুয়েরি ল্যাটেন্সিকে মোট ফ্লোটিং-পয়েন্ট অপারেশন দিয়ে ভাগ করে',
          },
          {
            en: 'The target neighbor count K divided by the number of index clusters',
            bn: 'লক্ষ্য প্রতিবেশী সংখ্যা K কে ইনডেক্স ক্লাস্টারের সংখ্যা দিয়ে ভাগ করে',
          },
        ],
        answer: 0,
        hint: { en: 'Count true neighbors caught over the target total K.', bn: 'মোট লক্ষ্য K এর মধ্যে কয়টি আসল প্রতিবেশী পাওয়া গেল তা হিসাব করুন।' },
        explanation: {
          en: 'Recall@K measures the proportion of true top-K neighbors present in the candidate retrieval: 98 captured out of 100 target neighbors yields 0.98 recall.',
          bn: 'Recall@K উদ্ধারকৃত ফলাফলে আসল প্রতিবেশীদের অনুপাত নির্দেশ করে: ১০০টির মধ্যে ৯৮টি মিললে ০.৯৮ রিকল হয়।',
        },
      },
      {
        id: 'annq3',
        kind: 'mcq',
        topic: 'dial-500',
        question: {
          en: 'When candidate visits are increased from 100 to 500 in a 1,000-document corpus, what are the resulting recall and speedup values?',
          bn: '১,০০০ নথির ডেটাসেটে প্রার্থী যাচাইয়ের সংখ্যা ১০০ থেকে বাড়িয়ে ৫০০ করা হলে রিকল এবং স্পিডআপের মান কত দাঁড়ায়?',
        },
        options: [
          {
            en: '1.00 recall (all 100/100 caught) at a reduced 2× speedup (1,000 / 500)',
            bn: '১.০০ রিকল (১০০/১০০ ধরা পড়ে) এবং ২ গুণ স্পিডআপ (১,০০০ / ৫০০)',
          },
          {
            en: '0.98 recall at a 10× speedup',
            bn: '০.৯৮ রিকল এবং ১০ গুণ স্পিডআপ',
          },
          {
            en: '0.91 recall at a 20× speedup',
            bn: '০.৯১ রিকল এবং ২০ গুণ স্পিডআপ',
          },
          {
            en: '0.50 recall with zero speed improvement',
            bn: '০.৫০ রিকল এবং কোনো গতি বৃদ্ধি নেই',
          },
        ],
        answer: 0,
        hint: { en: '500 candidate visits checks half the dataset.', bn: '৫০০ প্রার্থী যাচাই ডেটাসেটের অর্ধেক স্ক্যান করে।' },
        explanation: {
          en: 'Visiting 500 candidates captures 100/100 neighbors (1.00 recall) but lowers speedup to 1,000 / 500 = 2×. Perfection costs 5× more compute than 0.98 recall.',
          bn: '৫০০ প্রার্থী যাচাই করলে ১০০/১০০ প্রতিবেশী (১.০০ রিকল) মেলে কিন্তু স্পিডআপ কমে ১,০০০ / ৫০০ = ২ গুণ হয়।',
        },
      },
      {
        id: 'annq4',
        kind: 'predict',
        topic: 'trade-recite',
        question: {
          en: 'What three core numbers quantify the classic ANN speed-versus-accuracy trade-off in our benchmark?',
          bn: 'আমাদের বেঞ্চমার্কে ক্লাসিক এএনএন গতি বনাম নির্ভুলতার আপস প্রকাশ করে এমন তিনটি মূল সংখ্যা কী কী?',
        },
        answer: '100/1000 visits, 98/100 neighbors caught (recall 0.98), and 10x speedup.',
        accept: ['100', '98', '0.98', '10x', '1000', 'visits', 'speedup'],
        hint: { en: 'Cite candidate visits, true neighbor recall, and speedup multiplier.', bn: 'প্রার্থী যাচাই, আসল প্রতিবেশীর রিকল এবং স্পিডআপের সংখ্যা তিনটি বলুন।' },
        explanation: {
          en: 'The classic ANN trade-off in our benchmark is 100/1,000 candidates visited, 98/100 true neighbors caught (0.98 recall), delivering a 10× speedup.',
          bn: 'আমাদের বেঞ্চমার্কে ক্লাসিক আপস হলো: ১০০/১,০০০ প্রার্থী যাচাই, ৯৮/১০০ প্রতিবেশী উদ্ধার (০.৯৮ রিকল), যা ১০ গুণ গতি প্রদান করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'ivf-index',
    title: { en: 'IVF Index', bn: 'IVF সূচি' },
  },
};
