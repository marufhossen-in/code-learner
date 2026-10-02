import type { Lesson } from '../../../lib/types';

export const HybridSearchLesson: Lesson = {
  slug: 'hybrid-search',
  tech: 'rag',
  title: {
    en: 'Hybrid Search',
    bn: 'হাইব্রিড সার্চ — ভেক্টর ও কিওয়ার্ড অনুসন্ধানের সমন্বয় (RRF)',
  },
  summary: {
    en: 'Hybrid retrieval combines dense semantic vectors with sparse BM25 keywords using Reciprocal Rank Fusion (RRF): document D7, ranked 3rd by dense and 1st by sparse, achieves an RRF score of 0.03227 to beat D1’s 0.03200. Fusing distinct retrieval mechanisms rescues relevant documents that neither method discovers alone.',
    bn: 'হাইব্রিড রিট্রিভাল রেসিপ্রোকাল র‍্যাংক ফিউশন (RRF)-এর মাধ্যমে ডেনস সেমান্টিক ভেক্টর এবং স্পার্স BM25 কিওয়ার্ডকে একত্রিত করে: নথি D৭, যা ডেনস সার্চে ৩য় এবং স্পার্স সার্চে ১ম অবস্থানে ছিল, ০.০৩২২৭ স্কোর নিয়ে D১ এর ০.০৩২০০ স্কোরকে অতিক্রম করে। দুটি বিপরীতধর্মী অনুসন্ধান ব্যবস্থা যুক্ত করলে এমন তথ্যও উদ্ধার হয় যা একক পদ্ধতিতে পাওয়া অসম্ভব ছিল।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Two noses, one trail', bn: 'WHAT — দুটি স্বতন্ত্র অনুসন্ধান পদ্ধতির মেলবন্ধন' },
    },
    {
      type: 'para',
      text: {
        en: 'When building production search, hybrid retrieval pairs dense semantic embeddings with sparse lexical BM25 matching. Next, it fuses their rankings via Reciprocal Rank Fusion: score = Σ 1/(60 + rank). Document D7 places 3rd in dense search (1/63) and 1st in sparse search (1/61), yielding a fused score of 0.03227 that surpasses document D1 with 0.03200. Fusion rescues high-value documents that either independent retriever overlooked.',
        bn: 'প্রোডাকশন সার্চ তৈরির সময়, হাইব্রিড রিট্রিভাল অর্থভিত্তিক ডেনস ভেক্টর এমবেডিংয়ের সাথে হুবহু শব্দ মেলানো স্পার্স BM25 সার্চের সমন্বয় ঘটায়। এরপর রেসিপ্রোকাল র‍্যাংক ফিউশন পদ্ধতির মাধ্যমে তাদের র‍্যাংকিং একত্র করা হয়: স্কোর = Σ ১/(৬০ + র‍্যাংক)। নথি D৭ ডেনস সার্চে ৩য় (১/৬৩) এবং স্পার্স সার্চে ১ম (১/৬১) স্থান দখল করে সর্বমোট ০.০৩২২৭ স্কোর পায়, যা D১ নথির ০.০৩২০০ স্কোরকে ছাড়িয়ে যায়। ফিউশন এমন গুরুত্বপূর্ণ নথি উদ্ধার করে যা কোনো একক সার্চ সিস্টেম ধরতে পারে না।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Fusion lifts the buried hit', bn: 'ফিউশনের মাধ্যমে লুকায়িত নথির উত্তোলন' },
      svg: `<svg viewBox="0 0 640 260" font-family="system-ui, sans-serif" role="img" aria-label="RRF fusion ranking">
<g font-size="12" font-weight="700" fill="currentColor">
<rect x="30" y="40" width="170" height="150" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="115" y="62" text-anchor="middle">DENSE (meaning)</text>
<text x="115" y="88" text-anchor="middle" font-weight="600">1. D3</text>
<text x="115" y="112" text-anchor="middle" font-weight="600">2. D1</text>
<text x="115" y="136" text-anchor="middle" fill="#dc2626">3. D7 buried</text>
<rect x="235" y="40" width="170" height="150" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="320" y="62" text-anchor="middle">SPARSE (words)</text>
<text x="320" y="88" text-anchor="middle" fill="#16a34a">1. D7 exact ✓</text>
<text x="320" y="112" text-anchor="middle" font-weight="600">2. D5</text>
<text x="320" y="136" text-anchor="middle" font-weight="600">3. D1</text>
<rect x="440" y="40" width="170" height="150" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/>
<text x="525" y="62" text-anchor="middle">RRF FUSED</text>
<text x="525" y="88" text-anchor="middle" fill="#16a34a">1. D7 0.03227</text>
<text x="525" y="112" text-anchor="middle" font-weight="600">2. D1 0.03200</text>
<text x="525" y="136" text-anchor="middle" font-weight="600">3. D3 · 4. D5</text>
</g>
<text x="217" y="120" text-anchor="middle" font-size="18" font-weight="800" fill="currentColor">+</text>
<text x="422" y="120" text-anchor="middle" font-size="18" font-weight="800" fill="currentColor">→</text>
<text x="320" y="225" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">buried + crowned = rescued: fusion beats both parents</text>
</svg>`,
      caption: {
        en: 'Dense search buries D7 at rank 3 while sparse search places it at rank 1. Reciprocal Rank Fusion unifies both perspectives, elevating D7 to overall rank 1.',
        bn: 'ডেনস সার্চ D৭ কে ৩য় স্থানে ফেলে রাখে আর স্পার্স সার্চ এটিকে ১ম স্থান দেয়। রেসিপ্রোকাল র‍্যাংক ফিউশন দুই দৃষ্টিভঙ্গিকে সমন্বয় করে D৭ কে শীর্ষ স্থানে পৌঁছে দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Dense semantic retrieval',
          def: {
            en: 'An embedding-based vector search method that captures semantic intent, synonyms, and conceptual relationships across languages.',
            bn: 'একটি এমবেডিং-ভিত্তিক ভেক্টর সার্চ কৌশল যা ভাষার অর্থগত উদ্দেশ্য, সমার্থক শব্দ এবং ধারণাগুলোর পারস্পরিক সম্পর্ক অনুধাবন করে।',
          },
        },
        {
          term: 'Sparse lexical retrieval',
          def: {
            en: 'An inverted index keyword search algorithm (such as BM25) that excels at pinpointing exact term matches, part numbers, and proper nouns.',
            bn: 'একটি ইনভার্টেড ইনডেক্স ভিত্তিক কিওয়ার্ড সার্চ অ্যালগরিদম (যেমন BM25) যা সুনির্দিষ্ট শব্দ, পণ্যের কোড নম্বর এবং নাম খুঁজে বের করতে পারদর্শী।',
          },
        },
        {
          term: 'Reciprocal Rank Fusion',
          def: {
            en: 'A score-invariant rank aggregation formula (score = Σ 1/(k + rank)) that harmonizes disparate search systems without requiring score normalization.',
            bn: 'একটি অবস্থান-ভিত্তিক সমন্বয় সূত্র (স্কোর = Σ ১/(k + র‍্যাংক)) যা বিভিন্ন সার্চের কাঁচা স্কোর সমান না করেই তাদের ফলাফলকে নিরপেক্ষভাবে একত্রিত করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Each nose goes blind', bn: 'কেন — একক সার্চ পদ্ধতির দুর্বলতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Dense vectors struggle with exact tokens: serial numbers, code identifiers, and rare medical names get blurred in high-dimensional embedding space.', bn: 'ডেনস ভেক্টর সুনির্দিষ্ট কোডের ক্ষেত্রে বিভ্রান্ত হয়: পণ্যের সিরিয়াল নম্বর বা বিরল চিকিৎসা পরিভাষা উচ্চ মাত্রার ভেক্টর স্পেসে হারিয়ে যায়।' },
        { en: 'Sparse BM25 misses conceptual synonyms: queries searching for “reimburse” will completely miss relevant documents containing “refund”.', bn: 'স্পার্স BM25 সমার্থক শব্দের ক্ষেত্রে ব্যর্থ হয়: “রিইমবার্স” দিয়ে সার্চ করলে হুবহু শব্দ না থাকায় “রিফান্ড” যুক্ত দরকারি নথি বাদ পড়ে যায়।' },
        { en: 'Reciprocal rank fusion achieves optimal recall: combining both rankings ensures that neither semantic nuance nor lexical precision is lost.', bn: 'রেসিপ্রোকাল র‍্যাংক ফিউশন সর্বোচ্চ রিকল নিশ্চিত করে: উভয় র‍্যাংকিংয়ের মিশ্রণ অর্থগত উপলব্ধি এবং সুনির্দিষ্ট শব্দের নির্ভুলতা দুটিই রক্ষা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Fuse in 4 steps', bn: 'HOW — ৪টি ধাপে ফিউশন পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Execute searches', bn: '১. অনুসন্ধান পরিচালনা' }, text: { en: 'Run dense vector query and sparse BM25 query in parallel.', bn: 'সমান্তরালভাবে ডেনস ভেক্টর কুয়েরি এবং স্পার্স BM25 কুয়েরি পরিচালনা করুন।' } },
        { title: { en: '2. Compute RRF scores', bn: '২. RRF স্কোর গণনা' }, text: { en: 'Apply formula 1/(60 + rank) for each appearance of a document.', bn: 'প্রতিটি নথির উপস্থিতির জন্য ১/(৬০ + র‍্যাংক) সূত্র প্রয়োগ করুন।' } },
        { title: { en: '3. Sort fused lists', bn: '৩. সমন্বিত তালিকা সাজানো' }, text: { en: 'Sum scores per document: D7 achieves 0.03227 to lead D1 at 0.03200.', bn: 'নথি প্রতি স্কোর যোগ করুন: D৭ ০.০৩২২৭ স্কোর পেয়ে D১ (০.০৩২০০) কে ছাড়িয়ে যায়।' } },
        { title: { en: '4. Populate context', bn: '৪. কনটেক্সট পূরণ' }, text: { en: 'Extract the top-k fused items to feed the generation prompt.', bn: 'তালিকাপ্রাপ্ত সেরা সমন্বিত নথিগুলো প্রম্পটে ব্যবহারের জন্য নির্বাচন করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'hybrid_rrf_sim.py',
      code: `def reciprocal_rank_fusion(dense_ranks, sparse_ranks, k=60):
    all_docs = set(dense_ranks.keys()).union(set(sparse_ranks.keys()))
    scores = {}
    for doc in all_docs:
        d_score = 1.0 / (k + dense_ranks[doc]) if doc in dense_ranks else 0.0
        s_score = 1.0 / (k + sparse_ranks[doc]) if doc in sparse_ranks else 0.0
        scores[doc] = d_score + s_score
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)

dense = {"D3": 1, "D1": 2, "D7": 3}
sparse = {"D7": 1, "D5": 2, "D1": 3}

# Evaluate at default k=60
fused_60 = reciprocal_rank_fusion(dense, sparse, k=60)
print("RRF Fusion (k=60):")
for doc, score in fused_60:
    print(f"{doc}: {score:.5f}")

# Compare D7 vs D1
d7_score = dict(fused_60)["D7"]
d1_score = dict(fused_60)["D1"]
print(f"\\nWinner: D7 ({d7_score:.5f}) beats D1 ({d1_score:.5f})")

# Evaluate at k=5 (sharper top-rank bonus)
fused_5 = reciprocal_rank_fusion(dense, sparse, k=5)
d7_k5 = dict(fused_5)["D7"]
d1_k5 = dict(fused_5)["D1"]
print(f"\\nRRF Fusion (k=5): D7 ({d7_k5:.5f}) vs D1 ({d1_k5:.5f}) -> gap widened")

# Output:
# RRF Fusion (k=60):
# D7: 0.03227
# D1: 0.03200
# D3: 0.01639
# D5: 0.01613
#
# Winner: D7 (0.03227) beats D1 (0.03200)
#
# RRF Fusion (k=5): D7 (0.29167) vs D1 (0.26786) -> gap widened`,
      caption: {
        en: 'The Python simulation demonstrates Reciprocal Rank Fusion: at k=60, D7 scores 1/63 + 1/61 = 0.03227, beating D1 with 1/62 + 1/63 = 0.03200; reducing k to 5 widens the winning margin from 0.03227 to 0.29167.',
        bn: 'পাইথন সিমুলেশন রেসিপ্রোকাল র‍্যাংক ফিউশন প্রদর্শন করে: k=৬০ এ D৭ ১/৬৩ + ১/৬১ = ০.০৩২২৭ স্কোর নিয়ে D১ (০.০৩২০০) কে হারায়; k এর মান ৫ এ কমালে ব্যবধান ০.০৩২২৭ থেকে বেড়ে ০.২৯১৬৭ হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive fusion calculator', bn: 'INSIDE — জীবন্ত RRF ফিউশন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator executes Reciprocal Rank Fusion across dense {D3:1, D1:2, D7:3} and sparse {D7:1, D5:2, D1:3} candidate lists with k=60. Document D7 accumulates 1/63 + 1/61 = 0.03227, narrowly beating D1 with 0.03200. Changing k to 5 sharpens the penalty for lower ranks and widens the scoring lead.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি ডেনস {D৩:১, D১:২, D৭:৩} এবং স্পার্স {D৭:১, D৫:২, D১:৩} তালিকার ওপর k=৬০ ধরে RRF পরিচালনা করে। নথি D৭ ১/৬৩ + ১/৬১ = ০.০৩২২৭ স্কোর পেয়ে D১ (০.০৩২০০) এর চেয়ে এগিয়ে থাকে। k এর মান ৫ এ নামালে নিচের র‍্যাংকগুলোর পেনাল্টি বাড়ে এবং শীর্ষস্থানের ব্যবধান আরও স্পষ্ট হয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'RRF lab (change k, press Run)', bn: 'RRF lab (k বদলান, Run)' },
      html: '<h3>Fuse the rankings</h3>\n<pre id="out"></pre>\n<p>Console shows every score.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eef2ff; border: 1px solid #4f46e5; border-radius: 8px; padding: 10px; }',
      js: 'const k = 60; // ← try 5!\nconst dense = { D3: 1, D1: 2, D7: 3 };\nconst sparse = { D7: 1, D5: 2, D1: 3 };\nconst docs = ["D1","D3","D5","D7"];\nconst s = {};\ndocs.forEach(d => {\n  s[d] = (dense[d] ? 1/(k+dense[d]) : 0) + (sparse[d] ? 1/(k+sparse[d]) : 0);\n  console.log(d + " → " + s[d].toFixed(5));\n});\nconst order = docs.sort((a,b) => s[b]-s[a]);\ndocument.getElementById("out").textContent = order.join(" > ") + " · D7 " + s.D7.toFixed(5) + " ⚖️";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Fusion instincts', bn: 'ফলাফল — হাইব্রিড ফিউশনের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Multi-system consensus: D7 (0.03227) defeats D1 (0.03200) because appearing strongly across both retrievers beats leading in only one.', bn: 'সমন্বিত সংখ্যাগরিষ্ঠতা: D৭ (০.০৩২২৭) D১ (০.০৩২০০) কে হারায় কারণ কেবল একটিতে এগিয়ে থাকার চেয়ে উভয় পদ্ধতিতে ভালো অবস্থান থাকা অধিক শক্তিশালী।' },
        { en: 'Tunable emphasis: smaller values of constant k dramatically exaggerate the score bonuses awarded to top-1 and top-2 placements.', bn: 'নিয়ন্ত্রণযোগ্য অগ্রাধিকার: k এর ছোট মান শীর্ষ ১ম এবং ২য় অবস্থানের জন্য স্কোরের সুবিধা বহুগুণ বাড়িয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Fusion traps', bn: 'ডিবাগ — হাইব্রিড সার্চের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Score mixing (apples + decibels)', bn: 'কাঁচা স্কোরের ত্রুটিপূর্ণ যোগফল (Score mixing)' },
      text: {
        en: 'Attempting to sum raw cosine similarity (bounded 0 to 1) directly with BM25 scores (unbounded 0 to 30+) causes BM25 to completely overpower the vector ranking. Symptoms: semantic matching is effectively disabled. Cure: always fuse ordinal ranks using RRF rather than combining raw scores.',
        bn: 'কাঁচা কোসাইন সাদৃশ্য (০ থেকে ১) এবং BM25 স্কোর (০ থেকে ৩০+) সরাসরি যোগ করলে BM25 সম্পূর্ণ ফলাফল দখল করে নেয়। লক্ষণ: সেমান্টিক সার্চের কোনো প্রভাব না থাকা। প্রতিকার: কাঁচা স্কোরের বদলে সর্বদা RRF ব্যবহার করে অবস্থানগত র‍্যাংক সমন্বয় করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'k tuning (the rank lens)', bn: 'প্যারামিটার k এর সঠিক সমন্বয় (k tuning)' },
      text: {
        en: 'While standard literature defaults to k=60 for broad smoothing, high-precision retrieval pipelines benefit from k values between 5 and 20 to reward top-ranked candidates. Symptoms: mediocre documents hovering near top-1. Cure: sweep k across evaluation sets to match pipeline objectives.',
        bn: 'সাধারণ ক্ষেত্রে k=৬০ একটি ভালো স্ট্যান্ডার্ড হলেও, উচ্চ নির্ভুলতার জন্য k এর মান ৫ থেকে ২০ এর মধ্যে রাখলে সেরা ফলাফলগুলো স্পষ্ট অগ্রাধিকার পায়। লক্ষণ: মাঝারি মানের নথি শীর্ষে চলে আসা। প্রতিকার: নির্দিষ্ট ডেটাসেটের ওপর k এর মান পরীক্ষা করে সঠিক মান নির্বাচন করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production systems', bn: 'বাস্তব ক্ষেত্র — আধুনিক সার্চ ইঞ্জিনে হাইব্রিড ফিউশন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Elasticsearch and OpenSearch: feature native reciprocal rank fusion endpoints combining HNSW vector indexes with Lucene BM25 queries.', bn: 'Elasticsearch এবং OpenSearch: বিল্ট-ইন RRF ফিচারের মাধ্যমে HNSW ভেক্টর ইনডেক্স ও Lucene BM25 কুয়েরি একত্রিত করে।' },
        { en: 'Pinecone and Qdrant hybrid indexes: allow clients to submit sparse and dense vectors in a single request with automated fusion ranking.', bn: 'Pinecone এবং Qdrant হাইব্রিড ইনডেক্স: একটি একক রিকোয়েস্টেই স্পার্স ও ডেনস ভেক্টর পাঠিয়ে স্বয়ংক্রিয় ফিউশন করার সুবিধা দেয়।' },
        { en: 'E-commerce product discovery: blends product description vector embeddings with SKU code keyword lookups to ensure exact catalog navigation.', bn: 'ই-কমার্স পণ্য অনুসন্ধান: প্রোডাক্ট ডেসক্রিপশনের ভেক্টর এমবেডিংয়ের সাথে পণ্যের কোড নম্বর মিলিয়ে নিখুঁত ফলাফল নিশ্চিত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Query Rewrite', bn: 'পরবর্তী পাঠ — কুয়েরি রিরাইট ও রিকল বৃদ্ধি' },
    },
    {
      type: 'para',
      text: {
        en: 'With hybrid retrieval mastered, Lesson 6 investigates query rewriting: using language models to generate 3 diverse probes from a single user question, boosting candidate recall from 2 documents to 5.',
        bn: 'হাইব্রিড অনুসন্ধান আয়ত্ত করার পর, পাঠ ৬ কুয়েরি রিরাইটিং শেখাবে: ব্যবহারকারীর একটি প্রশ্ন থেকে ৩টি ভিন্ন অনুসন্ধানী কুয়েরি তৈরি করে প্রাসঙ্গিক নথির সংখ্যা ২ থেকে ৫ এ উন্নীত করা।',
      },
    },
  ],
  exercises: [
    {
      id: 'hyb-ex-1',
      kind: 'mcq',
      topic: 'rrf-compute',
      question: {
        en: 'For document D7, what is the calculated Reciprocal Rank Fusion score from dense rank 3 and sparse rank 1 at k=60 (1/63 + 1/61)?',
        bn: 'নথি D৭ এর জন্য k=৬০ এ ডেনস র‍্যাংক ৩ এবং স্পার্স র‍্যাংক ১ (১/৬৩ + ১/৬১) থেকে প্রাপ্ত রেসিপ্রোকাল র‍্যাংক ফিউশন স্কোর কত?',
      },
      options: [
        { en: '0.03227 (0.01587 + 0.01639)', bn: '০.০৩২২৭ (০.০১৫৮৭ + ০.০১৬৩৯)' },
        { en: '0.03200 total', bn: 'সর্বমোট ০.০৩২০০' },
        { en: '0.01639 total', bn: 'সর্বমোট ০.০১৬৩৯' },
        { en: '0.06427 total', bn: 'সর্বমোট ০.০৬৪২৭' },
      ],
      answer: 0,
      hint: { en: '1 / (60 + 3) + 1 / (60 + 1) = 1/63 + 1/61.', bn: '১ / (৬০ + ৩) + ১ / (৬০ + ১) = ১/৬৩ + ১/৬১।' },
      explanation: {
        en: '1/63 ≈ 0.01587 and 1/61 ≈ 0.01639. Summing both yields 0.03227, combining dense and sparse evidence.',
        bn: '১/৬৩ ≈ ০.০১৫৮৭ এবং ১/৬১ ≈ ০.০১৬৩৯। দুটি যোগ করলে ০.০৩২২৭ পাওয়া যায়, যা উভয় অনুসন্ধানের প্রমাণকে একত্রিত করে।',
      },
    },
    {
      id: 'hyb-ex-2',
      kind: 'mcq',
      topic: 'winner-why',
      question: {
        en: 'Why does document D7 win the overall hybrid search ranking over document D1?',
        bn: 'নথি D১ এর তুলনায় সামগ্রিক হাইব্রিড সার্চ র‍্যাংকিংয়ে নথি D৭ কেন জয়লাভ করে?',
      },
      options: [
        {
          en: 'D7 was ranked 1st by sparse and 3rd by dense (0.03227), surpassing D1 which placed 2nd and 3rd (0.03200)',
          bn: 'D৭ স্পার্স সার্চে ১ম এবং ডেনস সার্চে ৩য় স্থান (০.০৩২২৭) পেয়ে D১ কে হারায় যা ২য় এবং ৩য় স্থানে ছিল (০.০৩২০০)',
        },
        {
          en: 'D7 was ranked 1st by dense search alone',
          bn: 'D৭ কেবল ডেনস সার্চের মাধ্যমেই ১ম স্থান পেয়েছিল',
        },
        {
          en: 'D7 possessed a higher raw BM25 score without rank fusion',
          bn: 'ফিউশন ছাড়াই D৭ এর কাঁচা BM25 স্কোর বেশি ছিল',
        },
        {
          en: 'A random tiebreak favored D7 alphabetically',
          bn: 'বর্ণানুক্রমিক কারণে টাইব্রেকারে D৭ বিজয়ী হয়েছিল',
        },
      ],
      answer: 0,
      hint: { en: 'Examine the fused score: 0.03227 for D7 versus 0.03200 for D1.', bn: 'ফিউজড স্কোর লক্ষ্য করুন: D৭ এর ০.০৩২২৭ বনাম D১ এর ০.০৩২০০।' },
      explanation: {
        en: 'D7 earned a top-1 rank in sparse and top-3 in dense, yielding 0.03227 and edging past D1’s 0.03200.',
        bn: 'D৭ স্পার্সে ১ম এবং ডেনসে ৩য় স্থান দখল করে ০.০৩২২৭ স্কোর পায়, যা D১ এর ০.০৩২০০ স্কোরকে সামান্য ব্যবধানে হারিয়ে দেয়।',
      },
    },
    {
      id: 'hyb-ex-3',
      kind: 'mcq',
      topic: 'raw-mix',
      question: {
        en: 'Why must search engineers avoid directly adding raw cosine similarity scores to raw BM25 keyword scores?',
        bn: 'সার্চ ইঞ্জিনিয়ারদের কেন কাঁচা কোসাইন সাদৃশ্য স্কোরের সাথে কাঁচা BM25 কিওয়ার্ড স্কোর সরাসরি যোগ করা এড়িয়ে চলা উচিত?',
      },
      options: [
        {
          en: 'Their numerical scales are incompatible (0 to 1 vs 0 to 30+), allowing BM25 magnitudes to drown out vector signals',
          bn: 'তাদের সংখ্যার স্কেল সম্পূর্ণ অসঙ্গতিপূর্ণ (০ থেকে ১ বনাম ০ থেকে ৩০+), ফলে BM25 স্কোর ভেক্টর সিগন্যালকে পুরোপুরি মুছে দেয়',
        },
        {
          en: 'Mathematical rules strictly forbid adding floating point numbers',
          bn: 'গাণিতিক নিয়ম অনুযায়ী ফ্লোটিং পয়েন্ট সংখ্যা যোগ করা নিষিদ্ধ',
        },
        {
          en: 'Raw score addition executes slower than RRF algorithms',
          bn: 'কাঁচা স্কোর যোগ করার গতি RRF অ্যালগরিদমের চেয়ে ধীর',
        },
        {
          en: 'BM25 algorithms always produce negative numbers',
          bn: 'BM25 অ্যালগরিদম সর্বদা ঋণাত্মক সংখ্যা তৈরি করে',
        },
      ],
      answer: 0,
      hint: { en: 'Comparing unbounded term scores to normalized vector angles creates scale collision.', bn: 'সীমাহীন স্কোরকে নরম্যালাইজড কোণের সাথে তুলনা করলে স্কেলের সংঘাত ঘটে।' },
      explanation: {
        en: '0.87 cosine similarity cannot be directly added to a 14.2 BM25 score without BM25 dominating. RRF normalizes by positional rank.',
        bn: '১৪.২ BM25 স্কোরের সাথে ০.৮৭ কোসাইন যোগ করলে BM25 প্রাধান্য পাবে। RRF অবস্থানের ওপর ভিত্তি করে একে নিরপেক্ষ রূপ দেয়।',
      },
    },
    {
      id: 'hyb-ex-4',
      kind: 'predict',
      topic: 'k-effect',
      question: {
        en: 'When parameter k in Reciprocal Rank Fusion is decreased from 60 to 5, what effect does it have on the score gaps between top ranks?',
        bn: 'যখন রেসিপ্রোকাল র‍্যাংক ফিউশনে প্যারামিটার k ৬০ থেকে কমিয়ে ৫ করা হয়, তখন শীর্ষ র‍্যাংকগুলোর স্কোরের পার্থক্যে কী প্রভাব পড়ে?',
      },
      answer: 'Gaps widen: small k rewards top ranks harder.',
      accept: ['widen', 'wider', 'harder', 'reward', 'sharpen', 'gap', 'small k'],
      hint: { en: 'State gaps widen and small k rewards top ranks harder.', bn: 'ব্যবধান বৃদ্ধি এবং ছোট k শীর্ষ র‍্যাংককে বেশি পুরস্কৃত করার কথা বলুন।' },
      explanation: {
        en: 'Decreasing k steepens the reciprocal curve (1/(5+1) = 0.167 vs 1/(5+3) = 0.125), widening score gaps to favor 1st-place hits.',
        bn: 'k এর মান কমালে বক্ররেখা খাড়া হয় (১/(৫+১) = ০.১৬৭ বনাম ১/(৫+৩) = ০.১২৫), যা ১ম স্থান অর্জনকারী নথির ব্যবধান অনেক বাড়িয়ে দেয়।',
      },
    },
  ],
  quiz: {
    id: 'hybrid-search-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'hybq1',
        kind: 'mcq',
        topic: 'dense-blind',
        question: {
          en: 'What category of search queries does dense semantic vector retrieval typically fail to match effectively?',
          bn: 'ডেনস সেমান্টিক ভেক্টর অনুসন্ধান সাধারণত কোন ধরনের সার্চ কুয়েরিতে কার্যকর ফলাফল দিতে ব্যর্থ হয়?'
        },
        options: [
          {
            en: 'Exact SKU codes, serial numbers, proprietary part IDs, and rare proper nouns',
            bn: 'সুনির্দিষ্ট SKU কোড, সিরিয়াল নম্বর, যন্ত্রাংশের কোড আইডি এবং বিরল নাম',
          },
          {
            en: 'Conceptual synonyms and cross-lingual paraphrases',
            bn: 'ধারণাগত সমার্থক শব্দ এবং বহুভাষিক সমার্থক বাক্য',
          },
          {
            en: 'Lengthy descriptive essays spanning thousands of tokens',
            bn: 'হাজার হাজার টোকেনবিশিষ্ট দীর্ঘ বর্ণনামূলক প্রবন্ধ',
          },
          {
            en: 'Standard English dictionary definitions',
            bn: 'স্ট্যান্ডার্ড ইংরেজি অভিধানের সংজ্ঞা',
          },
        ],
        answer: 0,
        hint: { en: 'Semantic vector models blur exact characters in high dimensions.', bn: 'সেমান্টিক ভেক্টর মডেলগুলো উচ্চ মাত্রায় সুনির্দিষ্ট অক্ষরগুলো ঠিকমতো ধরতে পারে না।' },
        explanation: {
          en: 'Dense vectors excel at semantic meaning but compress out specific token details like alphanumeric product codes and serials.',
          bn: 'ডেনস ভেক্টর অর্থ বুঝতে দক্ষ হলেও সুনির্দিষ্ট পণ্যের আলফানিউমেরিক কোড বা সিরিয়াল নম্বরের খুঁটিনাটি হারিয়ে ফেলে।',
        },
      },
      {
        id: 'hybq2',
        kind: 'mcq',
        topic: 'sparse-blind',
        question: {
          en: 'What category of search queries does sparse BM25 keyword retrieval fail to match effectively?',
          bn: 'স্পার্স BM25 কিওয়ার্ড অনুসন্ধান সাধারণত কোন ধরনের সার্চ কুয়েরিতে কার্যকর ফলাফল দিতে ব্যর্থ হয়?',
        },
        options: [
          {
            en: 'Synonyms and conceptual paraphrases that share zero identical vocabulary tokens (such as refund vs reimburse)',
            bn: 'সমার্থক শব্দ এবং ধারণাগত বাক্য যাতে কোনো অভিন্ন শব্দ নেই (যেমন রিফান্ড বনাম রিইমবার্স)',
          },
          {
            en: 'Exact model identifiers and catalog part numbers',
            bn: 'হুবহু মডেল নম্বর এবং ক্যাটালগের যন্ত্রাংশ কোড',
          },
          {
            en: 'Single-word queries with exact character matches',
            bn: 'হুবহু অক্ষর মিলে যাওয়া একক শব্দের কুয়েরি',
          },
          {
            en: 'Document collections with under 100 total rows',
            bn: '১০০টির কম সারি বিশিষ্ট ছোট নথির সংগ্রহ',
          },
        ],
        answer: 0,
        hint: { en: 'Lexical inverted indexes require shared vocabulary terms to calculate term frequency.', bn: 'আক্ষরিক ইনভার্টেড ইনডেক্সের জন্য শব্দ মিল থাকা বাধ্যতামূলক।' },
        explanation: {
          en: 'Sparse retrieval relies strictly on shared terms. Without overlapping tokens, BM25 cannot recognize synonymity.',
          bn: 'স্পার্স অনুসন্ধান সম্পূর্ণ শব্দের মিলের ওপর নির্ভরশীল। অভিন্ন শব্দ না থাকলে BM25 সমার্থক অর্থ বুঝতে পারে না।',
        },
      },
      {
        id: 'hybq3',
        kind: 'mcq',
        topic: 'rrf-formula',
        question: {
          en: 'What mathematical formula calculates the Reciprocal Rank Fusion (RRF) score for each candidate document?',
          bn: 'কোন গাণিতিক সূত্রটি প্রতিটি প্রার্থীর নথির জন্য রেসিপ্রোকাল র‍্যাংক ফিউশন (RRF) স্কোর নির্ণয় করে?',
        },
        options: [
          {
            en: 'Σ 1 / (k + rank) across all contributing retrieval systems',
            bn: 'সবগুলো অনুসন্ধান পদ্ধতির ফলাফলজুড়ে Σ ১ / (k + র‍্যাংক)',
          },
          {
            en: 'cosine_similarity + BM25_raw_score',
            bn: 'কোসাইন_সাদৃশ্য + BM25_কাঁচা_স্কোর',
          },
          {
            en: 'rank × constant_k',
            bn: 'র‍্যাংক × ধ্রুবক_k',
          },
          {
            en: 'total_documents / rank_sum',
            bn: 'মোট_নথি / র‍্যাংক_যোগফল',
          },
        ],
        answer: 0,
        hint: { en: 'Sum reciprocal ranks with a smoothing constant k.', bn: 'ধ্রুবক k যোগ করে বিপরীত র‍্যাংকগুলোর সমষ্টি নিন।' },
        explanation: {
          en: 'RRF sums the reciprocals of rank positions plus a constant k, democratizing rank order across diverse retrievers.',
          bn: 'RRF প্রতিটি পদ্ধতির র‍্যাংকের সাথে k যোগ করে তার বিপরীত ভগ্নাংশের যোগফল নেয়, যা সব সিস্টেমের ফলাফলকে সুষম করে।',
        },
      },
      {
        id: 'hybq4',
        kind: 'predict',
        topic: 'fusion-recite',
        question: {
          en: 'What four benchmark figures summarize the hybrid search fusion examined in this lesson?',
          bn: 'এই পাঠে আলোচিত হাইব্রিড সার্চ ফিউশনকে সংক্ষেপে প্রকাশ করে এমন চারটি মূল পরিমাপ কী কী?',
        },
        answer: 'D7 dense-3 + sparse-1 = 0.03227 beats D1 0.03200.',
        accept: ['D7', '0.03227', '0.03200', 'rank 3', 'rank 1', 'dense', 'sparse'],
        hint: { en: 'Mention D7 dense rank 3 and sparse rank 1, score 0.03227, and beating D1 0.03200.', bn: 'D৭ এর ডেনস র‍্যাংক ৩ ও স্পার্স র‍্যাংক ১, স্কোর ০.০৩২২৭ এবং D১ এর ০.০৩২০০ কে হারানোর কথা বলুন।' },
        explanation: {
          en: 'The benchmark result: D7 ranked 3rd in dense and 1st in sparse produces a fused score of 0.03227, beating D1 at 0.03200.',
          bn: 'মূল ফলাফল: D৭ ডেনসে ৩য় এবং স্পার্সে ১ম হয়ে ০.০৩২২৭ স্কোর নিয়ে D১ (০.০৩২০০) কে পরাজিত করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'query-rewrite',
    title: { en: 'Query Rewrite', bn: 'Query পুনর্লিখন' },
  },
};
