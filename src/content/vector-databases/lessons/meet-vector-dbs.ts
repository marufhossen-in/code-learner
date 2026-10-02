import type { Lesson } from '../../../lib/types';

export const MeetVectorDbsLesson: Lesson = {
  slug: 'meet-vector-dbs',
  tech: 'vector-databases',
  title: {
    en: 'Meet Vector DBs',
    bn: 'ভেক্টর ডেটাবেজের পরিচিতি — স্কেলিং ও ব্রুট ফোর্সের সীমাবদ্ধতা',
  },
  summary: {
    en: 'Brute force dies at scale: 1,000 documents of 128 dimensions require 128,000 operations per query, and production corpora hold millions. Vector databases index high-dimensional arrows so queries evaluate hundreds of candidates instead of scanning millions.',
    bn: 'স্কেলিংয়ের সময় ব্রুট-ফোর্স অচল হয়ে পড়ে: ১২৮ ডাইমেনশনের ১,০০০ নথির জন্য কুয়েরি প্রতি ১২৮,০০০ অপারেশন লাগে, আর বাস্তব ডেটাসেটে থাকে লাখ লাখ নথি। ভেক্টর ডেটাবেজ উচ্চ-মাত্রার ভেক্টরগুলোকে এমনভাবে সূচিবদ্ধ করে যাতে কুয়েরি লাখ লাখ ডেটা স্ক্যান না করে মাত্র কয়েকশত প্রার্থী ভেক্টর যাচাই করে।',
  },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Indexes for arrows', bn: 'WHAT — ভেক্টরের জন্য বিশেষায়িত ইনডেক্স' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build applications with embeddings, a vector database stores high-dimensional vectors and retrieves nearest neighbors without scanning every document. Dedicated vector indexes such as IVF, HNSW, and PQ prune the search space from millions down to a few hundred candidates. Brute force computes dot products across every document: evaluating 1,000 documents of 128 dimensions requires 128,000 multiply-accumulate operations per query. Scaling to 1,000,000 documents explodes to 128,000,000 operations per query. By trading a tiny fraction of recall (for instance, maintaining 0.98 recall), vector indexes achieve up to a 100× speedup.',
        bn: 'যখন আপনি এম্বেডিং দিয়ে অ্যাপ্লিকেশন তৈরি করেন, তখন একটি ভেক্টর ডেটাবেজ উচ্চ মাত্রার ভেক্টর সংরক্ষণ করে এবং প্রতিটি নথি স্ক্যান না করেই নিকটতম প্রতিবেশী খুঁজে বের করে। আইভিএফ (IVF), এইচএনএসডব্লিউ (HNSW) এবং পিকিউ (PQ) এর মতো বিশেষায়িত ইনডেক্স কোটি কোটি ডেটা থেকে অনুসন্ধান কমিয়ে মাত্র কয়েকশত প্রার্থী ভেক্টরে নামিয়ে আনে। ব্রুট-ফোর্স পদ্ধতিতে প্রতিটি ডকুমেন্টের সাথে ডট প্রোডাক্ট হিসাব করা হয়: ১২৮ ডাইমেনশনের ১,০০০ ডকুমেন্টের জন্য কুয়েরি প্রতি ১২৮,০০০টি অপারেশন প্রয়োজন হয়। ডেটাসেট বেড়ে ১,০০০,০০০ ডকুমেন্টে পৌঁছালে অপারেশন সংখ্যা বেড়ে কুয়েরি প্রতি ১২৮,০০০,০০০টিতে রূপ নেয়। সামান্য রিকল স্যাক্রিফাইস করে (যেমন ০.৯৮ রিকল বজায় রেখে) ভেক্টর ইনডেক্স ১০০ গুণ পর্যন্ত গতি বৃদ্ধি করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Scan everything vs visit hundreds', bn: 'সব স্ক্যান বনাম শত প্রার্থী যাচাই' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Brute force versus indexed search">
<text x="160" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">BRUTE FORCE 🐌</text>
<text x="480" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">INDEXED ⚡</text>
<g>
<rect x="40" y="50" width="240" height="120" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="160" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">dots ALL 1,000 docs</text>
<text x="160" y="102" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">128,000 ops</text>
<text x="160" y="124" text-anchor="middle" font-size="11" fill="currentColor">exact · linear · doomed</text>
<text x="160" y="146" text-anchor="middle" font-size="11" fill="currentColor">1M docs → 128M ops 💀</text>
<rect x="360" y="50" width="240" height="120" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">visits ~200 candidates</text>
<text x="480" y="102" text-anchor="middle" font-size="14" font-weight="800" fill="currentColor">~25,600 ops</text>
<text x="480" y="124" text-anchor="middle" font-size="11" fill="currentColor">≈exact · sublinear · ships</text>
<text x="480" y="146" text-anchor="middle" font-size="11" fill="currentColor">1M docs → still ~25K ✓</text>
</g>
<text x="320" y="205" text-anchor="middle" font-size="13" font-weight="800" fill="currentColor">indexes prune millions → hundreds</text>
<text x="320" y="226" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">recall 0.98 buys speed 100×</text>
</svg>`,
      caption: {
        en: 'Brute force reads the entire library; indexes consult the catalogue. Both answer the query — one ships to production.',
        bn: 'ব্রুট-ফোর্স পুরো লাইব্রেরির প্রতিটি বই পড়ে; আর ইনডেক্স ক্যাটালগ দেখে সরাসরি সঠিক বই খুঁজে নেয়। উভয় পদ্ধতিই উত্তর দেয় — কিন্তু ইনডেক্স প্রোডাকশনে চালু করা সম্ভব।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Vector database',
          def: {
            en: 'A database optimized for storing high-dimensional embeddings and executing fast approximate nearest neighbor similarity searches.',
            bn: 'উচ্চ মাত্রার এম্বেডিং সংরক্ষণ এবং দ্রুততম সময়ে সাদৃশ্যভিত্তিক নিকটতম প্রতিবেশী অনুসন্ধানের জন্য অপটিমাইজ করা ডেটাবেজ।',
          },
        },
        {
          term: 'Brute force search',
          def: {
            en: 'An exhaustive search that calculates distances to every stored vector, guaranteeing perfect accuracy at severe computational cost.',
            bn: 'একটি পূর্ণাঙ্গ অনুসন্ধান পদ্ধতি যা সংরক্ষিত প্রতিটি ভেক্টরের দূরত্ব হিসাব করে শতভাগ নির্ভুল ফলাফল দেয় কিন্তু কম্পিউটেশনাল খরচ অনেক বেশি।',
          },
        },
        {
          term: 'Vector index',
          def: {
            en: 'A data structure that organizes vectors to prune the search space, evaluating hundreds of candidates instead of millions.',
            bn: 'একটি ডেটা স্ট্রাকচার যা ভেক্টরগুলোকে সুবিন্যস্ত করে অনুসন্ধানের পরিসর কমায় এবং লাখ লাখ ভেক্টরের বদলে মাত্র কয়েকশত প্রার্থী যাচাই করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Millions murder scans', bn: 'কেন — লক্ষ লক্ষ স্ক্যানের সীমাবদ্ধতা' },
    },
    {
      type: 'list',
      items: [
        { en: '1M docs × 128 dims = 128M operations per query: linear execution turns latency into seconds rather than milliseconds.', bn: '১M নথি × ১২৮ ডাইমেনশন = কুয়েরি প্রতি ১২৮M অপারেশন: রৈখিক প্রবৃদ্ধির ফলে ল্যাটেন্সি মিলিসেকেন্ড থেকে সেকেন্ডে রূপ নেয়।' },
        { en: 'Indexes preserve responsiveness: candidate evaluations remain in the hundreds even as corpora scale to millions.', bn: 'ইনডেক্স অনুসন্ধান দ্রুত রাখে: ডেটাসেটে কোটি নথি থাকলেও পরীক্ষিত প্রার্থীর সংখ্যা মাত্র কয়েকশতেই সীমাবদ্ধ থাকে।' },
        { en: 'A 0.98 recall target is practical: tolerating a 2% variance eliminates 99% of compute overhead.', bn: '০.৯৮ রিকল প্রোডাকশনের জন্য যথেষ্ট: ২% সামান্য পার্থক্য মেনে নিয়ে ৯৯% অতিরিক্ত কম্পিউটেশন বাদ দেওয়া যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Count the crisis', bn: 'HOW — স্কেলিং সঙ্কট গণনা করুন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Corpus size', bn: '১. ডেটাসেটের পরিমাপ' }, text: { en: 'Start with 1,000 documents across 128 dimensions.', bn: '১২৮ ডাইমেনশনের ১,০০০ নথির প্রাথমিক ডেটাসেট বিবেচনা করুন।' } },
        { title: { en: '2. Multiply operations', bn: '২. মোট অপারেশনের হিসাব' }, text: { en: 'Compute 1,000 × 128 = 128,000 operations per query.', bn: '১,০০০ × ১২৮ = ১২৮,০০০ অপারেশন কুয়েরি প্রতি হিসাব করুন।' } },
        { title: { en: '3. Scale to millions', bn: '৩. লাখে সম্প্রসারণ' }, text: { en: 'At 1,000,000 documents, operations explode to 128,000,000 per query.', bn: '১,০০০,০০০ নথিতে পৌঁছালে কুয়েরি প্রতি অপারেশন বেড়ে ১২৮,০০০,০০০ হয়।' } },
        { title: { en: '4. Apply indexing', bn: '৪. ইনডেক্সিং প্রয়োগ' }, text: { en: 'Pruning reduces the search to ~200 candidates (25,600 operations).', bn: 'ইনডেক্সিংয়ের মাধ্যমে অনুসন্ধান মাত্র ~২০০ জন প্রার্থী বা ২৫,৬০০ অপারেশনে সীমাবদ্ধ হয়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'brute_vs_index_sim.py',
      code: `def search_cost(docs, dims, candidates):
    brute_ops = docs * dims
    indexed_ops = candidates * dims
    speedup = brute_ops / indexed_ops
    return brute_ops, indexed_ops, speedup

# Toy scale: 1,000 docs, 128 dims
b1, i1, s1 = search_cost(1000, 128, 200)
print(f"Toy scale: brute={b1:,} ops, indexed={i1:,} ops, speedup={s1:.1f}x")

# Production scale: 1,000,000 docs, 128 dims
b2, i2, s2 = search_cost(1000000, 128, 200)
print(f"Production scale: brute={b2:,} ops ({b2/1e6:.1f}M), indexed={i2:,} ops ({i2/1e3:.1f}K), speedup={s2:.0f}x")

# OpenAI Ada scale: 1,000,000 docs, 1536 dims
b3, i3, s3 = search_cost(1000000, 1536, 200)
print(f"Ada scale (1536 dims): brute={b3:,} ops ({b3/1e9:.2f}B), indexed={i3:,} ops ({i3/1e3:.1f}K), speedup={s3:.0f}x")

# Output:
# Toy scale: brute=128,000 ops, indexed=25,600 ops, speedup=5.0x
# Production scale: brute=128,000,000 ops (128.0M), indexed=25,600 ops (25.6K), speedup=5000x
# Ada scale (1536 dims): brute=1,536,000,000 ops (1.54B), indexed=307,200 ops (307.2K), speedup=5000x`,
      caption: {
        en: 'The Python simulation confirms operations: toy brute costs 128,000 ops, production brute explodes to 128,000,000 ops, while indexing holds candidates to ~25,600 ops (a 5000× speedup).',
        bn: 'পাইথন সিমুলেশন অপারেশনের সত্যতা প্রমাণ করে: ছোট ডেটাসেটে ব্রুট-ফোর্স ১২৮,০০০ অপারেশন নেয়, উৎপাদনে তা ১২৮,০০০,০০০ অপারেশনে রূপ নেয়, আর ইনডেক্সিং প্রার্থীদের ~২৫,৬০০ অপারেশনে আটকে রাখে (৫০০০ গুণ গতি বৃদ্ধি)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The crisis, live', bn: 'INSIDE — জীবন্ত স্কেলিং সিমুলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulation demonstrates brute-force arithmetic: 1,000 documents across 128 dimensions requires 128,000 operations per query, while scaling to 1,000,000 documents reaches 128,000,000 operations. If you increase dimensions to 1,536 for production embeddings, a single query demands 1,536,000,000 operations (1.54B ops). Without vector indexing, real-world semantic search becomes computationally prohibitive.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেশনটি ব্রুট-ফোর্স হিসাবের সীমাবদ্ধতা প্রদর্শন করে: ১২৮ ডাইমেনশনে ১,০০০ নথির জন্য কুয়েরি প্রতি ১২৮,০০০ অপারেশন প্রয়োজন হয়, যা ১,০০০,০০০ নথিতে বেড়ে ১২৮,০০০,০০০ অপারেশনে পৌঁছায়। আপনি যদি প্রোডাকশন এম্বেডিংয়ের জন্য ডাইমেনশন বাড়িয়ে ১,৫৩৬ করেন, তবে একটি মাত্র কুয়েরিতে ১,৫৩৬,০০০,০০০ অপারেশন (১.৫৪ বিলিয়ন অপ্স) প্রয়োজন হবে। ভেক্টর ইনডেক্স ছাড়া বাস্তব জগতের সেমান্টিক সার্চ চালানো অসম্ভব।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Crisis counter (raise DIMS, press Run)', bn: 'Crisis counter (DIMS তুলে Run)' },
      html: '<h3>Count the bonfire</h3>\n<pre id="out"></pre>\n<p>Console scales the crisis.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 10px; }',
      js: 'const DOCS = 1000, DIMS = 128; // ← try DIMS = 1536!\nconst ops = DOCS * DIMS;\nconsole.log(DOCS + " docs × " + DIMS + " dims = " + ops.toLocaleString() + " ops/query");\nconst prod = 1000000 * DIMS;\nconsole.log("1M docs × " + DIMS + " = " + (prod/1e9).toFixed(2) + "B ops/query 💀");\nconst indexed = 200 * DIMS;\nconsole.log("indexed: 200 candidates = " + indexed.toLocaleString() + " ops ✓");\ndocument.getElementById("out").textContent = "brute " + ops.toLocaleString() + " · 1M-docs " + (prod/1e6).toFixed(0) + "M · indexed " + indexed.toLocaleString() + " 🔥";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Scale instincts', bn: 'ফলাফল — স্কেল সম্পর্কিত উপলব্ধি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Brute force cost equals documents × dimensions: 128,000 operations at small prototype scale.', bn: 'ব্রুট-ফোর্সের খরচ সর্বদা নথি × ডাইমেনশন: ছোট প্রোটোটাইপে যা ১২৮,০০০ অপারেশন।' },
        { en: 'Indexes isolate candidates: approximately 25,600 operations remaining flat even as documents multiply.', bn: 'ইনডেক্সিং অনুসন্ধান সীমিত রাখে: নথি সংখ্যা বহুগুণ বাড়লেও অপারেশন প্রায় ২৫,৬০০-তে স্থিতিশীল থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Scale traps', bn: 'ডিবাগ — স্কেলিং ফাঁদ ও সতর্কতা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Toy-scale comfort (the demo lie)', bn: 'ছোট ডেটাসেটের বিভ্রান্তি (The demo lie)' },
      text: {
        en: 'A dataset of 1,000 documents feels instantaneous, but 1,000,000 documents causes severe latency spikes because early prototypes conceal linear scaling curves. Symptoms: production latency cliff on launch day. Cure: multiply documents by dimensions prior to deployment to calculate actual hardware demands.',
        bn: '১,০০০ নথির ডেটাসেট তাৎক্ষণিক কাজ করে কিন্তু ১,০০০,০০০ নথিতে পৌঁছালে ল্যাটেন্সির বিশাল ধাক্কা লাগে কারণ প্রোটোটাইপ রৈখিক বৃদ্ধি গোপন রাখে। লক্ষণ: লঞ্চের দিন হঠাৎ সার্ভার ডাউন হয়ে যাওয়া। প্রতিকার: ডেপ্লয় করার আগেই নথি সংখ্যা এবং ডাইমেনশন গুণ করে আসল হার্ডওয়্যারের চাহিদা হিসাব করে নেওয়া।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Exactness worship (the 1.00 tax)', bn: 'শতভাগ নির্ভুলতার অতিরিক্ত মূল্য (The 1.00 tax)' },
      text: {
        en: 'Insisting on 1.00 recall incurs a 100× latency penalty to capture the final 2% of neighbors. Symptoms: tail p99 latency measured in seconds. Cure: budget for 0.95 to 0.98 recall to deliver millisecond response times.',
        bn: 'শতভাগ (১.০০) রিকল নিশ্চিত করতে গেলে শেষ ২% ডেটার জন্য ১০০ গুণ বেশি ল্যাটেন্সি দিতে হয়। লক্ষণ: p৯৯ ল্যাটেন্সি কয়েক সেকেন্ডে পৌঁছানো। সমাধান: ০.৯৫ থেকে ০.৯৮ রিকল টার্গেট করে মিলিসেকেন্ডে দ্রুততম রেসপন্স প্রদান করা।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Modern indexing engines', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইনডেক্সিং প্রযুক্তি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Specialized vector engines like Pinecone, Weaviate, Milvus, and Qdrant serve billions of vectors in milliseconds.', bn: 'Pinecone, Weaviate, Milvus এবং Qdrant এর মতো বিশেষায়িত ইঞ্জিন কোটি কোটি ভেক্টরে মিলিসেকেন্ডে উত্তর দেয়।' },
        { en: 'Relational extensions like pgvector equip Postgres with high-dimensional similarity indexing.', bn: 'pgvector এর মতো এক্সটেনশন পোস্টগ্রেস ডেটাবেজে উচ্চ মাত্রার ভেক্টর সূচিবদ্ধ করার সুবিধা এনে দেয়।' },
        { en: 'Production RAG pipelines rely on indexed vector search to ground every generative prompt.', bn: 'বাস্তব RAG পাইপলাইনগুলো প্রতিটি জেনারেটিভ প্রম্পটে নির্ভরযোগ্য তথ্য যোগাতে ভেক্টর ইনডেক্সের ওপর নির্ভর করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — ANN Search', bn: 'পরবর্তী পাঠ — এএনএন (ANN) সার্চ' },
    },
    {
      type: 'para',
      text: {
        en: 'Now that the computational crisis is quantified, Lesson 2 examines the core trade-off: capturing 98 out of 100 true nearest neighbors in exchange for a 10× speedup through approximate nearest neighbor algorithms.',
        bn: 'কম্পিউটেশনাল সঙ্কট পরিমাপ করার পর, পাঠ ২ মূল আপস বা ট্রেড-অফ বিশ্লেষণ করবে: অ্যাপ্রক্সিমেট নিকটতম প্রতিবেশী অ্যালগরিদমের মাধ্যমে ১০ গুণ গতির বিনিময়ে ১০০টির মধ্যে ৯৮টি সঠিক প্রতিবেশী পুনরুদ্ধার করা।',
      },
    },
  ],
  exercises: [
    {
      id: 'vdb-ex-1',
      kind: 'mcq',
      topic: 'ops-count',
      question: {
        en: 'When searching a database of 1,000 documents with 128 dimensions using brute force, how many multiply-accumulate operations occur per query?',
        bn: '১২৮ ডাইমেনশনের ১,০০০ ডকুমেন্টের ডেটাবেজে ব্রুট-ফোর্স পদ্ধতিতে অনুসন্ধান করলে কুয়েরি প্রতি কতটি মাল্টিপ্লাই-অ্যাকুমুলেট অপারেশন সম্পন্ন হয়?',
      },
      options: [
        { en: '128,000 operations', bn: '১২৮,০০০ অপারেশন' },
        { en: '1,128 operations', bn: '১,১২৮ অপারেশন' },
        { en: '12,800 operations', bn: '১২,৮০০ অপারেশন' },
        { en: '1,000 operations', bn: '১,০০০ অপারেশন' },
      ],
      answer: 0,
      hint: { en: 'Multiply the document count by the number of dimensions.', bn: 'ডকুমেন্ট সংখ্যাকে ডাইমেনশন সংখ্যা দিয়ে গুণ করুন।' },
      explanation: {
        en: 'Each document requires 128 multiplications and additions: 1,000 documents × 128 dimensions = 128,000 operations per query.',
        bn: 'প্রতিটি নথির জন্য ১২৮টি গুণ ও যোগ প্রয়োজন: ১,০০০ নথি × ১২৮ ডাইমেনশন = কুয়েরি প্রতি ১২৮,০০০ অপারেশন।',
      },
    },
    {
      id: 'vdb-ex-2',
      kind: 'mcq',
      topic: 'scale-read',
      question: {
        en: 'When the document corpus expands to 1,000,000 documents at 128 dimensions, what is the brute-force computational cost?',
        bn: 'যখন ডকুমেন্টের সংখ্যা বেড়ে ১২৮ ডাইমেনশনের ১,০০০,০০০ নথিতে পৌঁছায়, তখন ব্রুট-ফোর্সের কম্পিউটেশনাল খরচ কত দাঁড়ায়?',
      },
      options: [
        { en: '128,000,000 operations (128M ops) — multi-second latency', bn: '১২৮,০০০,০০০ অপারেশন (১২৮M ops) — কয়েক সেকেন্ড ল্যাটেন্সি' },
        { en: '128,000 operations — remaining unchanged', bn: '১২৮,০০০ অপারেশন — সম্পূর্ণ অপরিবর্তিত থাকে' },
        { en: '1,000 operations total', bn: 'সর্বমোট ১,০০০ অপারেশন' },
        { en: 'Zero operations due to caching', bn: 'ক্যাশিংয়ের কারণে শূন্য অপারেশন' },
      ],
      answer: 0,
      hint: { en: 'Multiply 1,000,000 documents by 128 dimensions.', bn: '১,০০০,০০০ নথিকে ১২৮ ডাইমেনশন দিয়ে গুণ করুন।' },
      explanation: {
        en: 'Linear scaling multiplies computational cost directly: 1,000,000 documents × 128 dimensions = 128,000,000 operations per query.',
        bn: 'রৈখিক স্কেলিং সরাসরি কম্পিউটেশনাল খরচ বাড়িয়ে দেয়: ১,০০০,০০০ নথি × ১২৮ ডাইমেনশন = কুয়েরি প্রতি ১২৮,০০০,০০০ অপারেশন।',
      },
    },
    {
      id: 'vdb-ex-3',
      kind: 'mcq',
      topic: 'indexed-ops',
      question: {
        en: 'If an approximate index prunes the search to 200 candidates across 128 dimensions, what is the resulting operation count?',
        bn: 'যদি একটি অ্যাপ্রক্সিমেট ইনডেক্স অনুসন্ধান কমিয়ে ১২৮ ডাইমেনশনে মাত্র ২০০ জন প্রার্থীর মধ্যে সীমাবদ্ধ করে, তবে মোট অপারেশন সংখ্যা কত হয়?',
      },
      options: [
        { en: '25,600 operations — remaining stable at scale', bn: '২৫,৬০০ অপারেশন — স্কেল বাড়লেও অপরিবর্তিত থাকে' },
        { en: '128,000,000 operations', bn: '১২৮,০০০,০০০ অপারেশন' },
        { en: '200 operations', bn: '২০০ অপারেশন' },
        { en: '128 operations', bn: '১২৮ অপারেশন' },
      ],
      answer: 0,
      hint: { en: 'Multiply 200 candidates by 128 dimensions.', bn: '২০০ জন প্রার্থীকে ১২৮ ডাইমেনশন দিয়ে গুণ করুন।' },
      explanation: {
        en: '200 candidates × 128 dimensions = 25,600 operations. The candidate pool remains in the hundreds even as the corpus grows into millions.',
        bn: '২০০ জন প্রার্থী × ১২৮ ডাইমেনশন = ২৫,৬০০ অপারেশন। ডেটাসেট লাখে পৌঁছালেও প্রার্থী ভেক্টরের সংখ্যা কয়েকশতেই সীমাবদ্ধ থাকে।',
      },
    },
    {
      id: 'vdb-ex-4',
      kind: 'predict',
      topic: 'dims-dare',
      question: {
        en: 'For production embeddings with 1,536 dimensions across 1,000,000 documents, what is the brute-force operation count per query?',
        bn: '১,০০০,০০০ ডকুমেন্টের ডেটাসেটে ১,৫৩৬ ডাইমেনশনের প্রোডাকশন এম্বেডিংয়ের জন্য ব্রুট-ফোর্সে কুয়েরি প্রতি কতটি অপারেশন প্রয়োজন হয়?',
      },
      answer: '1,000,000 × 1,536 = 1.536B operations per query.',
      accept: ['1.536B', '1.5B', '1536M', '1.536', 'billion', '1536'],
      hint: { en: 'Multiply 1,000,000 documents by 1,536 dimensions.', bn: '১,০০০,০০০ নথিকে ১,৫৩৬ ডাইমেনশন দিয়ে গুণ করুন।' },
      explanation: {
        en: '1,000,000 × 1,536 = 1,536,000,000 operations (1.536 billion multiply-accumulates). Production dimensions make indexing mandatory.',
        bn: '১,০০০,০০০ × ১,৫৩৬ = ১,৫৩৬,০০০,০০০ অপারেশন (১.৫৩৬ বিলিয়ন গুণ ও যোগ)। প্রোডাকশন ডাইমেনশনে ইনডেক্সিং আবশ্যক।',
      },
    },
  ],
  quiz: {
    id: 'meet-vector-dbs-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'vdbq1',
        kind: 'mcq',
        topic: 'vdb-mean',
        question: {
          en: 'What primary problem does a dedicated vector database solve compared to scanning flat files?',
          bn: 'ফ্ল্যাট ফাইল পুরো স্ক্যান করার তুলনায় একটি বিশেষায়িত ভেক্টর ডেটাবেজ কোন মূল সমস্যার সমাধান করে?',
        },
        options: [
          {
            en: 'It stores embeddings and searches nearest neighbors in sublinear time without scanning all documents',
            bn: 'এটি এম্বেডিং সংরক্ষণ করে এবং সমস্ত নথি স্ক্যান না করেই সাব-লিনিয়ার সময়ে নিকটতম প্রতিবেশী খুঁজে বের করে',
          },
          {
            en: 'It replaces relational databases for transactional accounting balances',
            bn: 'এটি ট্রানজেকশনাল অ্যাকাউন্টিং হিসাবের জন্য রিলেশনাল ডেটাবেজের বিকল্প হিসেবে কাজ করে',
          },
          {
            en: 'It compresses text documents into zip archives',
            bn: 'এটি টেক্সট ডকুমেন্টগুলোকে জিপ ফাইলে সংকুচিত করে',
          },
          {
            en: 'It serves static website assets and user avatar images',
            bn: 'এটি স্ট্যাটিক ওয়েবসাইট কনটেন্ট এবং ব্যবহারকারীর ছবি সরবরাহ করে',
          },
        ],
        answer: 0,
        hint: { en: 'Focus on sublinear similarity search.', bn: 'সাব-লিনিয়ার সাদৃশ্য অনুসন্ধানের দিকে লক্ষ্য রাখুন।' },
        explanation: {
          en: 'A vector database stores high-dimensional vectors and uses specialized indexes to isolate nearest neighbors without expensive full-table scans.',
          bn: 'একটি ভেক্টর ডেটাবেজ উচ্চ মাত্রার ভেক্টর সংরক্ষণ করে এবং পূর্ণাঙ্গ স্ক্যান বাদ দিয়ে নিকটতম প্রতিবেশী চিহ্নিত করতে বিশেষায়িত ইনডেক্স ব্যবহার করে।',
        },
      },
      {
        id: 'vdbq2',
        kind: 'mcq',
        topic: 'trade-state',
        question: {
          en: 'What fundamental trade-off do approximate nearest neighbor vector indexes make?',
          bn: 'অ্যাপ্রক্সিমেট নিকটতম প্রতিবেশী ভেক্টর ইনডেক্স কোন মৌলিক আপস বা ট্রেড-অফ করে থাকে?',
        },
        options: [
          {
            en: 'Trading a small fraction of recall (e.g., 0.98 instead of 1.00) for a 100× query speedup',
            bn: '১০০ গুণ অনুসন্ধানের গতির বিনিময়ে সামান্য রিকল স্যাক্রিফাইস করা (যেমন ১.০০ এর বদলে ০.৯৮ রিকল)',
          },
          {
            en: 'Sacrificing query speed to achieve higher floating-point precision',
            bn: 'উচ্চ ফ্লোটিং-পয়েন্ট নির্ভুলতার জন্য অনুসন্ধানের গতি বিসর্জন দেওয়া',
          },
          {
            en: 'Eliminating all RAM consumption by transferring computations to tape storage',
            bn: 'হিসাবগুলো টেপ স্টোরেজে পাঠিয়ে সম্পূর্ণ র‍্যামের ব্যবহার শূন্যে নামিয়ে আনা',
          },
          {
            en: 'Ignoring vector embeddings completely in favor of keyword matching',
            bn: 'ভেক্টর এম্বেডিং পুরোপুরি বাদ দিয়ে কেবল কিওয়ার্ড ম্যাচিং ব্যবহার করা',
          },
        ],
        answer: 0,
        hint: { en: 'Slightly lower recall yields orders of magnitude higher speed.', bn: 'সামান্য কম রিকল বহুগুণ বেশি গতি প্রদান করে।' },
        explanation: {
          en: 'Demanding exact 1.00 recall forces checking every single vector. Accepting 0.98 recall prunes 99% of candidates and accelerates queries by 100×.',
          bn: '১.০০ রিকল দাবি করলে প্রতিটি ভেক্টর স্ক্যান করতে হয়। ০.৯৮ রিকল মেনে নিলে ৯৯% প্রার্থী বাদ দিয়ে ১০০ গুণ গতি পাওয়া যায়।',
        },
      },
      {
        id: 'vdbq3',
        kind: 'mcq',
        topic: 'demo-lie',
        question: {
          en: 'Why do prototype demos on toy datasets often deceive engineering teams regarding algorithmic scalability?',
          bn: 'কেন ছোট ডেটাসেটের প্রোটোটাইপ ডেমো অ্যালগরিদমের স্কেলেবিলিটি সম্পর্কে ইঞ্জিনিয়ারিং টিমকে বিভ্রান্ত করতে পারে?',
        },
        options: [
          {
            en: 'At 1,000 documents linear scan latency is negligible, but at 1,000,000 documents linear growth causes massive latency',
            bn: '১,০০০ নথিতে লিনিয়ার স্ক্যানের ল্যাটেন্সি চোখেই পড়ে না, কিন্তু ১,০০০,০০০ নথিতে লিনিয়ার প্রবৃদ্ধি মারাত্মক ল্যাটেন্সি তৈরি করে',
          },
          {
            en: 'Prototype demos use secret cloud accelerators not available in production',
            bn: 'প্রোটোটাইপ ডেমো এমন ক্লাউড এক্সিলারেটর ব্যবহার করে যা উৎপাদনে পাওয়া যায় না',
          },
          {
            en: 'Data dimensions automatically shrink to zero during early testing',
            bn: 'প্রাথমিক পরীক্ষার সময় ডেটার ডাইমেনশন আপনাআপনি শূন্যে নেমে যায়',
          },
          {
            en: 'Vector mathematics behaves fundamentally differently on development machines',
            bn: 'ডেভেলপমেন্ট মেশিনে ভেক্টর গণিত মৌলিকভাবে ভিন্ন আচরণ করে',
          },
        ],
        answer: 0,
        hint: { en: 'Linearity hides at small scales.', bn: 'ছোট পরিসরে রৈখিকতার প্রভাব ধরা পড়ে না।' },
        explanation: {
          en: 'At 1,000 documents, brute force takes under a millisecond regardless of indexing. Only when scaling to millions does linear computation degrade performance.',
          bn: '১,০০০ নথিতে ইনডেক্সিং ছাড়াই এক মিলিসেকেন্ডের কম সময়ে কাজ শেষ হয়। কেবল কোটি নথিতে পৌঁছালে রৈখিক বৃদ্ধি গতি নষ্ট করে।',
        },
      },
      {
        id: 'vdbq4',
        kind: 'predict',
        topic: 'crisis-recite',
        question: {
          en: 'What are the three key operation metrics that summarize the scalability crisis from toy to production to indexed search?',
          bn: 'ছোট ডেমো থেকে প্রোডাকশন এবং সূচিবদ্ধ অনুসন্ধানের স্কেলিং সঙ্কট প্রকাশ করে এমন তিনটি মূল অপারেশন সংখ্যা কী কী?',
        },
        answer: '128K toy operations, 128M operations at 1M documents, and 25.6K indexed operations.',
        accept: ['128K', '128M', '25.6K', '25K', 'thousand', 'million', 'indexed'],
        hint: { en: 'State the operation counts for 1,000 docs, 1,000,000 docs, and 200 indexed candidates.', bn: '১,০০০ নথি, ১,০০০,০০০ নথি এবং ২০০ সূচিবদ্ধ প্রার্থীর অপারেশন সংখ্যা বলুন।' },
        explanation: {
          en: 'The crisis metrics are 128,000 ops at toy scale, 128,000,000 ops at 1M scale, and 25,600 ops with vector indexing.',
          bn: 'মূল সংখ্যাগুলো হলো: ছোট ডেটাসেটে ১২৮,০০০ অপ্স, ১M ডেটাসেটে ১২৮,০০০,০০০ অপ্স এবং ভেক্টর ইনডেক্সে ২৫,৬০০ অপ্স।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'ann-search',
    title: { en: 'ANN Search', bn: 'ANN খোঁজা' },
  },
};
